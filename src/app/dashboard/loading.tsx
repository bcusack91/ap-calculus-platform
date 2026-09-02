import DashboardSkeleton from '@/components/dashboard/DashboardSkeleton'

/** Route-level loading UI — same skeleton the page itself uses, so there is
 *  no layout shift between the two. */
export default function Loading() {
  return <DashboardSkeleton />
}
