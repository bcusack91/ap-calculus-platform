import Link from 'next/link'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

/**
 * Admin view of database-backed content (#10). Read-only for the Tier-1 proof
 * slice — it shows that content migrated out of `src/data` is present, queryable
 * and observable. An editing UI is the next increment. Middleware already gates
 * /admin to ADMIN; we re-check here for defense in depth.
 */
export default async function AdminContentPage() {
  const session = await auth()
  const role = (session?.user as { role?: string } | undefined)?.role
  if (role !== 'ADMIN') redirect('/dashboard')

  const items = await prisma.contentItem.findMany({
    orderBy: [{ type: 'asc' }, { courseSlug: 'asc' }, { key: 'asc' }],
    select: {
      id: true,
      type: true,
      courseSlug: true,
      key: true,
      status: true,
      version: true,
      updatedAt: true,
    },
  })

  // Group by type for a readable overview.
  const byType = new Map<string, typeof items>()
  for (const it of items) {
    const list = byType.get(it.type) ?? []
    list.push(it)
    byType.set(it.type, list)
  }

  return (
    <div className="container py-10">
      <div className="mb-2 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Database content</h1>
        <Link
          href="/admin/content/new"
          className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-700"
        >
          + New item
        </Link>
      </div>
      <p className="mb-8 text-sm text-gray-600 dark:text-gray-400">
        Content migrated out of <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">src/data</code> into the
        database ({items.length} item{items.length === 1 ? '' : 's'}). Consumers read these with a static fallback,
        so anything not here still serves from code. Click a row to edit.
      </p>

      {items.length === 0 ? (
        <p className="rounded-lg border border-dashed border-gray-300 p-6 text-gray-500 dark:border-gray-700">
          No database content yet. Run an importer (e.g.{' '}
          <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">npx tsx prisma/import-study-plan-templates.ts</code>).
        </p>
      ) : (
        Array.from(byType.entries()).map(([type, list]) => (
          <section key={type} className="mb-8">
            <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              {type} <span className="text-sm font-normal text-gray-500">({list.length})</span>
            </h2>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr className="text-left text-gray-600 dark:text-gray-400">
                    <th className="px-4 py-2 font-medium">Course</th>
                    <th className="px-4 py-2 font-medium">Key</th>
                    <th className="px-4 py-2 font-medium">Status</th>
                    <th className="px-4 py-2 font-medium">Version</th>
                    <th className="px-4 py-2 font-medium">Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map(it => (
                    <tr key={it.id} className="border-t border-gray-100 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/40">
                      <td className="px-4 py-2 text-gray-900 dark:text-gray-200">{it.courseSlug}</td>
                      <td className="px-4 py-2 font-mono">
                        <Link href={`/admin/content/${it.id}`} className="text-purple-600 hover:underline dark:text-purple-400">
                          {it.key}
                        </Link>
                      </td>
                      <td className="px-4 py-2">
                        <span
                          className={
                            it.status === 'PUBLISHED'
                              ? 'rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300'
                              : 'rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                          }
                        >
                          {it.status}
                        </span>
                      </td>
                      <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{it.version}</td>
                      <td className="px-4 py-2 text-gray-500">{it.updatedAt.toISOString().slice(0, 10)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))
      )}
    </div>
  )
}
