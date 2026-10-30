'use client'

import { forwardRef } from 'react'
import { YouTubePlayer } from './providers/youtube'
import { VideoUnavailable } from './VideoUnavailable'

/**
 * THE video player for video lessons: one interface, one provider file per
 * host. Pages only ever render <VideoPlayer>; moving to a paid host (Mux,
 * Bunny, Cloudflare Stream) means adding a provider file and a case below,
 * with no page changes.
 *
 * onProgress(from, to) reports each sampled playback step (seconds) while
 * playing; feed it to addPlayback (src/lib/video-watch.ts), which drops
 * seeks. The provider is rebuilt (and the old player destroyed) whenever the
 * clip changes.
 */

export type VideoPlayerProps = {
  provider: string
  providerId: string
  /** Start position in seconds (read when the clip loads). */
  startAt?: number
  /** Start playing as soon as the clip loads (after a user action only). */
  autoPlay?: boolean
  /** Accessible label for the frame. */
  title?: string
  onProgress(from: number, to: number): void
  onEnded(): void
  onPlayingChange(playing: boolean): void
  onDuration?(seconds: number): void
}

export type VideoPlayerHandle = {
  seekTo(seconds: number): void
  play(): void
  pause(): void
  currentTime(): number
}

const VideoPlayer = forwardRef<VideoPlayerHandle, VideoPlayerProps>(function VideoPlayer(props, ref) {
  switch (props.provider.toUpperCase()) {
    case 'YOUTUBE':
      return <YouTubePlayer key={props.providerId} ref={ref} {...props} />
    default:
      return (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
          <div className="absolute inset-0">
            <VideoUnavailable detail="This clip uses a video host the site doesn't support yet." />
          </div>
        </div>
      )
  }
})

export default VideoPlayer
