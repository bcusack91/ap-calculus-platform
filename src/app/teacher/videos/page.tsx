import type { Metadata } from 'next'
import { TeacherVideos } from '@/components/video-authoring/TeacherVideos'

export const metadata: Metadata = { title: 'Video Lessons | Study Mondo', robots: { index: false, follow: false } }

/**
 * /teacher/videos — build video lessons (instructors linked by the site owner).
 * Middleware gates /teacher to TEACHER/ADMIN; the APIs check the instructor link.
 */
export default function TeacherVideosPage() {
  return <TeacherVideos />
}
