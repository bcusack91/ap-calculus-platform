import { describe, it, expect } from 'vitest'
import { videoFileUrl } from '@/lib/video-file-url'

describe('videoFileUrl', () => {
  it('keeps the site path when no base is set', () => {
    expect(videoFileUrl('/video-lessons/mcat-fl1/c01/02-fluids.mp4', '')).toBe('/video-lessons/mcat-fl1/c01/02-fluids.mp4')
    expect(videoFileUrl('/video-lessons/mcat-fl1/c01/02-fluids.mp4', undefined)).toBe('/video-lessons/mcat-fl1/c01/02-fluids.mp4')
  })
  it('prefixes the base for video-lesson files, ignoring a trailing slash', () => {
    expect(videoFileUrl('/video-lessons/mcat-fl1/c01/02-fluids.jpg', 'https://v.example.dev/')).toBe('https://v.example.dev/video-lessons/mcat-fl1/c01/02-fluids.jpg')
  })
  it('leaves other paths alone', () => {
    expect(videoFileUrl('https://elsewhere.example/x.mp4', 'https://v.example.dev')).toBe('https://elsewhere.example/x.mp4')
  })
})
