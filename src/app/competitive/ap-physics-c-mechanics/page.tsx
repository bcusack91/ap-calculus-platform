'use client'

// Thin wrapper — all UI/behavior lives in the shared CompetitiveCoursePage;
// this course's endpoints, links, and unit emojis come from its config entry.
import CompetitiveCoursePage from '@/components/competitive/CompetitiveCoursePage'
import { COURSE_PAGE_CONFIGS } from '@/components/competitive/course-page-configs'

export default function APPhysicsCMechanicsCompetitivePage() {
  return <CompetitiveCoursePage config={COURSE_PAGE_CONFIGS['ap-physics-c-mechanics']} />
}
