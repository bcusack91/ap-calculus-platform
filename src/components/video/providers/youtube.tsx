'use client'

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { loadYouTubeApi, YOUTUBE_NOCOOKIE_HOST, type YTPlayer } from './youtube-api'
import type { VideoPlayerHandle, VideoPlayerProps } from '../VideoPlayer'
import { VideoUnavailable } from '../VideoUnavailable'

/**
 * YouTube provider for VideoPlayer. The IFrame Player API is created against
 * youtube-nocookie. While the video plays, the current time is sampled every
 * SAMPLE_MS and each (previous, now) pair goes to onProgress; the caller's
 * addPlayback (src/lib/video-watch.ts) keeps only contiguous playback, so a
 * seek shows up as one long or backwards step and adds nothing.
 *
 * The player is created once per providerId and destroyed on unmount or
 * clip change. React never owns the iframe: the API replaces a host node we
 * create imperatively inside the wrapper.
 */

const SAMPLE_MS = 500

export const YouTubePlayer = forwardRef<VideoPlayerHandle, VideoPlayerProps>(function YouTubePlayer(
  { providerId, startAt, autoPlay, title, onProgress, onEnded, onPlayingChange, onDuration },
  ref,
) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<YTPlayer | null>(null)
  const lastRef = useRef<number | null>(null)
  const [failed, setFailed] = useState(false)

  // Latest callbacks, so the player isn't rebuilt when a parent re-renders.
  const cbRef = useRef({ onProgress, onEnded, onPlayingChange, onDuration })
  useEffect(() => {
    cbRef.current = { onProgress, onEnded, onPlayingChange, onDuration }
  })

  // Only the clip identity rebuilds the player; startAt/autoPlay are read once per clip.
  const initRef = useRef({ startAt, autoPlay })
  useEffect(() => {
    initRef.current = { startAt, autoPlay }
  })

  useImperativeHandle(ref, () => ({
    seekTo(seconds: number) {
      const p = playerRef.current
      if (!p) return
      p.seekTo(Math.max(0, seconds), true)
      // A deliberate seek is not playback: restart sampling from the new spot.
      lastRef.current = Math.max(0, seconds)
    },
    play() {
      playerRef.current?.playVideo()
    },
    pause() {
      playerRef.current?.pauseVideo()
    },
    currentTime() {
      try {
        return playerRef.current?.getCurrentTime() ?? 0
      } catch {
        return 0
      }
    },
  }), [])

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    let cancelled = false
    let timer: ReturnType<typeof setInterval> | null = null
    let playing = false
    const host = document.createElement('div')
    host.style.width = '100%'
    host.style.height = '100%'
    wrap.appendChild(host)

    const now = () => {
      try {
        return playerRef.current?.getCurrentTime() ?? 0
      } catch {
        return 0
      }
    }
    const sample = (to?: number) => {
      const t = to ?? now()
      const from = lastRef.current
      if (from !== null && t !== from) cbRef.current.onProgress(from, t)
      lastRef.current = t
    }
    const stopSampling = () => {
      if (timer) clearInterval(timer)
      timer = null
    }
    const setPlaying = (next: boolean) => {
      if (playing === next) return
      playing = next
      cbRef.current.onPlayingChange(next)
    }

    loadYouTubeApi()
      .then((YT) => {
        if (cancelled) return
        const { startAt: start, autoPlay: auto } = initRef.current
        playerRef.current = new YT.Player(host, {
          videoId: providerId,
          host: YOUTUBE_NOCOOKIE_HOST,
          width: '100%',
          height: '100%',
          playerVars: {
            rel: 0,
            playsinline: 1,
            modestbranding: 1,
            ...(start && start > 0 ? { start: Math.floor(start) } : {}),
            ...(auto ? { autoplay: 1 } : {}),
          },
          events: {
            onReady: (e) => {
              if (cancelled) return
              const d = e.target.getDuration()
              if (d > 0) cbRef.current.onDuration?.(d)
            },
            onStateChange: (e) => {
              if (cancelled) return
              const S = YT.PlayerState
              if (e.data === S.PLAYING) {
                lastRef.current = now()
                stopSampling()
                timer = setInterval(() => sample(), SAMPLE_MS)
                setPlaying(true)
              } else if (e.data === S.ENDED) {
                stopSampling()
                let d = 0
                try {
                  d = e.target.getDuration()
                } catch {}
                sample(d > 0 ? d : undefined)
                lastRef.current = null
                setPlaying(false)
                cbRef.current.onEnded()
              } else if (e.data === S.PAUSED || e.data === S.BUFFERING) {
                if (timer) sample()
                stopSampling()
                lastRef.current = null
                if (e.data === S.PAUSED) setPlaying(false)
              }
            },
            onError: () => {
              if (cancelled) return
              stopSampling()
              setPlaying(false)
              setFailed(true)
            },
          },
        })
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })

    return () => {
      cancelled = true
      stopSampling()
      if (playing) cbRef.current.onPlayingChange(false)
      try {
        playerRef.current?.destroy()
      } catch {}
      playerRef.current = null
      lastRef.current = null
      host.remove()
      // The API swaps `host` for its iframe; clear whatever is left.
      wrap.replaceChildren()
    }
  }, [providerId])

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
      <div ref={wrapRef} className="absolute inset-0" title={title} />
      {failed && (
        <div className="absolute inset-0">
          <VideoUnavailable detail="The video didn't load. Check your connection, or try again later." />
        </div>
      )}
    </div>
  )
})
