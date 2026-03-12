'use client'

import { useState } from 'react'

interface VideoEmbedProps {
  videoId: string
  title: string
  platform?: 'youtube' | 'vimeo'
}

export function VideoEmbed({ videoId, title, platform = 'youtube' }: VideoEmbedProps) {
  const [loaded, setLoaded] = useState(false)

  const thumbnailUrl = platform === 'youtube'
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : ''

  const embedUrl = platform === 'youtube'
    ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`
    : `https://player.vimeo.com/video/${videoId}?autoplay=1`

  if (!loaded) {
    return (
      <div className="my-6 rounded-lg overflow-hidden border-2 border-purple-200 dark:border-purple-700">
        <div className="bg-purple-600 text-white px-4 py-2 font-semibold flex items-center gap-2">
          <span className="text-xl">🎥</span> Video: {title}
        </div>
        <button
          onClick={() => setLoaded(true)}
          className="relative w-full aspect-video bg-gray-900 group cursor-pointer"
          aria-label={`Play video: ${title}`}
        >
          {platform === 'youtube' && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors shadow-lg">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <p className="text-white text-sm">Click to play</p>
          </div>
        </button>
      </div>
    )
  }

  return (
    <div className="my-6 rounded-lg overflow-hidden border-2 border-purple-200 dark:border-purple-700">
      <div className="bg-purple-600 text-white px-4 py-2 font-semibold flex items-center gap-2">
        <span className="text-xl">🎥</span> Video: {title}
      </div>
      <div className="aspect-video">
        <iframe
          src={embedUrl}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>
    </div>
  )
}

/** Video link card for topics without embedded content */
interface VideoLinkProps {
  title: string
  description: string
  url: string
  duration?: string
  source?: string
}

export function VideoLink({ title, description, url, duration, source }: VideoLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="my-4 flex items-center gap-4 rounded-lg border border-purple-200 dark:border-purple-700 bg-white dark:bg-gray-900 p-4 hover:border-purple-400 hover:shadow-md transition-all group"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
        <span className="text-2xl">🎬</span>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors truncate">
          {title}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{description}</p>
        <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
          {duration && <span>⏱ {duration}</span>}
          {source && <span>📺 {source}</span>}
        </div>
      </div>
      <span className="text-gray-400 group-hover:text-purple-500 transition-colors">↗</span>
    </a>
  )
}
