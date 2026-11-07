'use client'

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import type { VideoPlayerHandle, VideoPlayerProps } from '../VideoPlayer'
import { VideoUnavailable } from '../VideoUnavailable'
import { clampVideoSpeed, readVideoSpeed, saveVideoSpeed } from '@/lib/video-speed'

/**
 * Self-hosted provider for VideoPlayer: a plain HTML5 <video> whose source is
 * the clip's providerId (a site path such as /video-lessons/<key>/<section>.mp4
 * under public/, or a full URL once clips move to object storage). No host
 * chrome, no related videos, no end screens: the section simply ends.
 *
 * Playback is sampled from timeupdate; each (previous, now) pair goes to
 * onProgress and the caller's addPlayback keeps only contiguous playback, so a
 * seek adds nothing. A poster is looked for beside the file (<name>.jpg).
 *
 * Speed: each section starts at the student's saved speed (default 1.15×,
 * src/lib/video-speed.ts); changing it in the player's menu is saved and
 * carries to the next section.
 */

export const FilePlayer = forwardRef<VideoPlayerHandle, VideoPlayerProps>(function FilePlayer(
  { providerId, startAt, autoPlay, title, onProgress, onEnded, onPlayingChange, onDuration },
  ref,
) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const lastRef = useRef<number | null>(null)
  const [failedId, setFailedId] = useState<string | null>(null)
  const failed = failedId === providerId

  const cbRef = useRef({ onProgress, onEnded, onPlayingChange, onDuration })
  useEffect(() => {
    cbRef.current = { onProgress, onEnded, onPlayingChange, onDuration }
  })
  const initRef = useRef({ startAt, autoPlay })
  useEffect(() => {
    initRef.current = { startAt, autoPlay }
  })

  useImperativeHandle(ref, () => ({
    seekTo(seconds: number) {
      const v = videoRef.current
      if (!v) return
      v.currentTime = Math.max(0, seconds)
      lastRef.current = Math.max(0, seconds)
    },
    play() {
      void videoRef.current?.play().catch(() => {})
    },
    pause() {
      videoRef.current?.pause()
    },
    currentTime() {
      return videoRef.current?.currentTime ?? 0
    },
  }), [])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    let playing = false
    lastRef.current = null
    // Start at the saved speed. defaultPlaybackRate too, so the reset that
    // load() does keeps it instead of snapping back to 1×.
    const speed = readVideoSpeed()
    v.defaultPlaybackRate = speed
    v.playbackRate = speed
    const setPlaying = (next: boolean) => {
      if (playing === next) return
      playing = next
      cbRef.current.onPlayingChange(next)
    }
    const sample = (to?: number) => {
      const t = to ?? v.currentTime
      const from = lastRef.current
      if (from !== null && t !== from) cbRef.current.onProgress(from, t)
      lastRef.current = t
    }
    const onRateChange = () => {
      const r = clampVideoSpeed(v.playbackRate)
      if (r !== v.playbackRate) v.playbackRate = r // keep within what earns watch credit
      v.defaultPlaybackRate = r
      saveVideoSpeed(r)
    }
    const onLoaded = () => {
      const saved = readVideoSpeed()
      if (v.playbackRate !== saved) v.playbackRate = saved
      if (v.duration > 0 && Number.isFinite(v.duration)) cbRef.current.onDuration?.(v.duration)
      const { startAt: start, autoPlay: auto } = initRef.current
      if (start && start > 0 && start < v.duration) v.currentTime = start
      if (auto) void v.play().catch(() => {})
    }
    const onPlaying = () => {
      lastRef.current = v.currentTime
      setPlaying(true)
    }
    const onTime = () => {
      if (!v.paused && !v.seeking) sample()
    }
    const onPause = () => {
      sample()
      lastRef.current = null
      setPlaying(false)
    }
    const onSeeking = () => {
      lastRef.current = null
    }
    const onSeeked = () => {
      lastRef.current = v.paused ? null : v.currentTime
    }
    const onWaiting = () => {
      lastRef.current = null
    }
    const onEnded = () => {
      sample(Number.isFinite(v.duration) ? v.duration : undefined)
      lastRef.current = null
      setPlaying(false)
      cbRef.current.onEnded()
    }
    const onError = () => {
      setPlaying(false)
      setFailedId(providerId)
    }
    v.addEventListener('loadedmetadata', onLoaded)
    v.addEventListener('playing', onPlaying)
    v.addEventListener('timeupdate', onTime)
    v.addEventListener('pause', onPause)
    v.addEventListener('seeking', onSeeking)
    v.addEventListener('seeked', onSeeked)
    v.addEventListener('waiting', onWaiting)
    v.addEventListener('ended', onEnded)
    v.addEventListener('error', onError)
    v.addEventListener('ratechange', onRateChange)
    v.src = providerId
    v.load()
    return () => {
      v.removeEventListener('loadedmetadata', onLoaded)
      v.removeEventListener('playing', onPlaying)
      v.removeEventListener('timeupdate', onTime)
      v.removeEventListener('pause', onPause)
      v.removeEventListener('seeking', onSeeking)
      v.removeEventListener('seeked', onSeeked)
      v.removeEventListener('waiting', onWaiting)
      v.removeEventListener('ended', onEnded)
      v.removeEventListener('error', onError)
      v.removeEventListener('ratechange', onRateChange)
      if (playing) cbRef.current.onPlayingChange(false)
      v.pause()
      v.removeAttribute('src')
      v.load()
    }
  }, [providerId])

  const poster = providerId.replace(/\.(mp4|webm|m4v)$/i, '.jpg')

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full"
        controls
        playsInline
        preload="metadata"
        poster={poster !== providerId ? poster : undefined}
        controlsList="nodownload"
        disablePictureInPicture
        aria-label={title}
      />
      {failed && (
        <div className="absolute inset-0">
          <VideoUnavailable detail="The video didn't load. Check your connection, or try again later." />
        </div>
      )}
    </div>
  )
})
