import { VideoOff } from 'lucide-react'

/** Shown in the player frame when a clip can't be played. */
export function VideoUnavailable({ detail }: { detail?: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gray-900 p-6 text-center text-white" role="alert">
      <VideoOff className="h-8 w-8 text-gray-400" aria-hidden />
      <p className="font-semibold">This video can&apos;t be played</p>
      {detail && <p className="max-w-sm text-sm text-gray-300">{detail}</p>}
    </div>
  )
}
