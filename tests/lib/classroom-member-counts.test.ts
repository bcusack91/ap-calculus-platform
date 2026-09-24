/**
 * A student who leaves a class keeps their ClassroomMember row with
 * isActive=false (removal is a soft delete everywhere). The section page
 * lists active members, but the teacher dashboard and classroom list used
 * the raw relation count, so a class read "4 students" on the dashboard and
 * showed 3 when opened. Every teacher-facing member count must filter.
 */
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

const repoFile = (p: string) => fs.readFileSync(path.join(process.cwd(), p), 'utf8')

const TEACHER_ROUTES = [
  'src/app/api/teacher/dashboard/route.ts',
  'src/app/api/teacher/classrooms/route.ts',
  'src/app/api/teacher/classrooms/[id]/route.ts',
]

describe('teacher member counts exclude students who left', () => {
  for (const file of TEACHER_ROUTES) {
    it(`${file} never counts members without an isActive filter`, () => {
      const src = repoFile(file)
      expect(src).not.toMatch(/members:\s*true/)
      expect(src).toContain('members: { where: { isActive: true } }')
    })
  }

  it('removing a member is a soft delete, so the filter is what keeps counts honest', () => {
    const remove = repoFile('src/app/api/teacher/classrooms/[id]/members/[memberId]/route.ts')
    expect(remove).toContain('data: { isActive: false }')
  })
})
