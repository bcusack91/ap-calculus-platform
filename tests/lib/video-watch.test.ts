import { describe, it, expect } from 'vitest'
import { addPlayback, isClipWatched, mergeRanges, newlyWatchedSeconds, watchedFraction, watchedSeconds, type WatchRange } from '@/lib/video-watch'

describe('video watch ranges', () => {
  it('merges overlaps, closes sub-second gaps, sorts and drops junk', () => {
    expect(mergeRanges([[10, 20], [0, 5], [5.5, 8], [19, 30], 'x', [3, 3], [7, 2]])).toEqual([[0, 8], [10, 30]])
  })

  it('clamps to the clip length', () => {
    expect(mergeRanges([[-5, 10], [50, 900]], 60)).toEqual([[0, 10], [50, 60]])
    expect(watchedSeconds([[0, 100]], 60)).toBe(60)
  })

  it('counts contiguous playback but not a seek ahead or backwards', () => {
    let r: WatchRange[] = []
    for (let t = 0; t < 30; t += 0.5) r = addPlayback(r, t, t + 0.5, 300)
    expect(watchedSeconds(r)).toBeCloseTo(30)
    r = addPlayback(r, 30, 250, 300) // student drags to 4:10
    expect(watchedSeconds(r)).toBeCloseTo(30)
    r = addPlayback(r, 250, 249, 300) // backwards
    expect(watchedSeconds(r)).toBeCloseTo(30)
  })

  it('rewatching a stretch does not count twice', () => {
    expect(watchedSeconds([[0, 60], [10, 40], [0, 60]])).toBe(60)
    expect(newlyWatchedSeconds([[0, 60]], [[30, 90]])).toBe(30)
    expect(newlyWatchedSeconds([[0, 60]], [[10, 20]])).toBe(0)
  })

  it('a clip is watched at 90% of its length', () => {
    expect(isClipWatched([[0, 179]], 200)).toBe(false)
    expect(isClipWatched([[0, 180]], 200)).toBe(true)
    expect(isClipWatched([[0, 90], [100, 190]], 200)).toBe(true)
    expect(watchedFraction([[0, 500]], 200)).toBe(1)
  })

  it('a clip with no known length is never watched', () => {
    expect(isClipWatched([[0, 100]], 0)).toBe(false)
  })
})
