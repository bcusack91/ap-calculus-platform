import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-guard'

/**
 * GET /api/admin/district-rollup
 *
 * Admin-only. Aggregates usage/outcomes grouped by School.district (schools with
 * no district set are bucketed under "No district set"). Intended for district
 * decision-makers / sales: students, active rate, mastery, assignments, exit-quiz
 * pass rate per district. Designed to be correct whether districts are populated
 * or not (empty state handled in the UI).
 */
export async function GET() {
  const auth = await requireAdmin()
  if ('error' in auth) return auth.error

  try {
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)

    const schools = await prisma.school.findMany({
      select: { id: true, name: true, district: true, classrooms: { select: { id: true } } },
    })

    // Bucket schools (and their classroom ids) by district key.
    const byDistrict = new Map<string, { schools: Set<string>; classroomIds: string[] }>()
    for (const s of schools) {
      const key = s.district?.trim() || 'No district set'
      if (!byDistrict.has(key)) byDistrict.set(key, { schools: new Set(), classroomIds: [] })
      const d = byDistrict.get(key)!
      d.schools.add(s.id)
      d.classroomIds.push(...s.classrooms.map((c) => c.id))
    }

    const districts = []
    const allStudentIds = new Set<string>() // unique across districts for the grand total
    for (const [district, { schools: schoolSet, classroomIds }] of byDistrict) {
      if (classroomIds.length === 0) {
        districts.push({
          district, schools: schoolSet.size, classrooms: 0, students: 0,
          activeLast7d: 0, avgMastery: 0, assignmentsCompleted: 0, exitQuizPassRate: null,
        })
        continue
      }

      const members = await prisma.classroomMember.findMany({
        where: { classroomId: { in: classroomIds }, isActive: true },
        select: { userId: true },
      })
      const userIds = [...new Set(members.map((m) => m.userId))]
      if (userIds.length === 0) {
        districts.push({
          district, schools: schoolSet.size, classrooms: classroomIds.length, students: 0,
          activeLast7d: 0, avgMastery: 0, assignmentsCompleted: 0, exitQuizPassRate: null,
        })
        continue
      }
      userIds.forEach((id) => allStudentIds.add(id))

      const [masteryAgg, active7d, assignmentsCompleted, exitGroups] = await Promise.all([
        prisma.topicProgress.aggregate({ where: { userId: { in: userIds } }, _avg: { masteryLevel: true } }),
        prisma.topicProgress.findMany({
          where: { userId: { in: userIds }, lastAccessed: { gte: sevenDaysAgo } },
          select: { userId: true }, distinct: ['userId'],
        }),
        prisma.assignmentSubmission.count({ where: { studentId: { in: userIds }, status: 'COMPLETED' } }),
        prisma.exitQuizAttempt.groupBy({ by: ['passed'], where: { userId: { in: userIds } }, _count: true }),
      ])

      const passed = exitGroups.find((g) => g.passed)?._count ?? 0
      const totalExit = exitGroups.reduce((sum, g) => sum + (typeof g._count === 'number' ? g._count : 0), 0)

      districts.push({
        district,
        schools: schoolSet.size,
        classrooms: classroomIds.length,
        students: userIds.length,
        activeLast7d: active7d.length,
        avgMastery: Math.round((masteryAgg._avg.masteryLevel ?? 0) * 100),
        assignmentsCompleted,
        exitQuizPassRate: totalExit > 0 ? Math.round((passed / totalExit) * 100) : null,
      })
    }

    districts.sort((a, b) => b.students - a.students || a.district.localeCompare(b.district))

    const totals = {
      districts: districts.filter((d) => d.district !== 'No district set').length,
      schools: schools.length,
      classrooms: districts.reduce((s, d) => s + d.classrooms, 0),
      students: allStudentIds.size,
    }

    return NextResponse.json({
      districts,
      totals,
      hasDistrictData: districts.some((d) => d.district !== 'No district set'),
    })
  } catch (error) {
    console.error('[GET /api/admin/district-rollup]', error)
    return NextResponse.json({ error: 'Failed to load district rollup' }, { status: 500 })
  }
}
