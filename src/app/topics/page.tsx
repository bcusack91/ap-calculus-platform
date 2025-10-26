import { redirect } from 'next/navigation'

// Redirect to the Calculus course page (for backwards compatibility)
export default function TopicsPage() {
  redirect('/courses/ap-calculus-ab-bc')
}
