import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { SocialShare } from '@/components/SocialShare'
import { articleJsonLd } from '@/lib/jsonld'

const postsDir = path.join(process.cwd(), 'content/blog')

function getPost(slug: string) {
  const filePath = path.join(postsDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  return { data, content, slug }
}

function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDir)) return []
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.data.title} - Study Mondo Blog`,
    description: post.data.description,
    alternates: {
      canonical: `https://www.studymondo.com/blog/${params.slug}`,
    },
    openGraph: {
      title: post.data.title,
      description: post.data.description,
      type: 'article',
      publishedTime: post.data.date,
      authors: [post.data.author || 'Study Mondo Team'],
    },
  }
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const post = getPost(params.slug)
  if (!post) notFound()

  // Dynamically import the MDX file
  let MdxContent: React.ComponentType
  try {
    const mod = await import(`@/../content/blog/${params.slug}.mdx`)
    MdxContent = mod.default
  } catch {
    notFound()
  }

  return (
    <div className="container py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({
          title: post.data.title,
          description: post.data.description || '',
          slug: params.slug,
          datePublished: post.data.date,
          author: post.data.author,
          tags: post.data.tags,
        })) }}
      />
      <div className="mx-auto max-w-3xl">
        <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/blog" className="hover:text-accent transition-colors">
            ← Back to Blog
          </Link>
        </nav>

        <article>
          <header className="mb-8">
            <time className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(post.data.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <h1 className="text-4xl font-bold tracking-tight mt-2 mb-4 text-gray-900 dark:text-white">
              {post.data.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              By {post.data.author || 'Study Mondo Team'}
            </p>
            {post.data.tags?.length > 0 && (
              <div className="flex gap-2 mt-4">
                {post.data.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-accent-light text-accent-hover dark:bg-accent-light/30 dark:text-accent-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MdxContent />
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
            <SocialShare
              url={`https://www.studymondo.com/blog/${params.slug}`}
              title={post.data.title}
              description={post.data.description}
            />
          </div>
        </article>
      </div>
    </div>
  )
}
