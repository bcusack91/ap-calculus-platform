'use client'

/**
 * Lesson recording for live classes, entirely in the teacher's browser.
 *
 * Picture: this tab captured with getDisplayMedia and cropped (Region Capture,
 * Chrome/Edge) to whichever area the teacher is working in — the slide deck
 * (`data-recording-region="slides"`) or the class whiteboard
 * (`data-recording-region="board"`) — with the teacher's own camera in a corner
 * bubble. Sound: the teacher's microphone only. The tab's audio (the call,
 * i.e. students) is never captured, and students' cameras are not on the
 * recorded areas. The composite is drawn to a canvas and recorded with
 * MediaRecorder; Stop downloads the file (v1 — cloud upload is a later step).
 */

export type RegionKey = 'slides' | 'board'
export type RecorderMode = 'auto' | RegionKey
export type Showing = RegionKey | 'camera'
export type RecorderStatus = 'idle' | 'starting' | 'recording' | 'paused' | 'saving'

export interface RecorderState {
  status: RecorderStatus
  elapsedMs: number
  mode: RecorderMode
  showing: Showing
  /** The capture is the whole tab (another tab/window was shared, or no Region Capture). */
  uncropped: boolean
  error: string | null
  /** File name of the last recording saved (downloaded) this session. */
  lastSaved: string | null
}

const WIDTH = 1280
const HEIGHT = 720
const FPS = 30
const BITRATE = 2_000_000 // ~0.9 GB per hour
const MARGIN = 20
const CAM_W = Math.round(WIDTH * 0.22)
const CAM_H = Math.round((CAM_W * 9) / 16)

interface CropTargetStatic { fromElement(el: Element): Promise<unknown> }
type CroppableTrack = MediaStreamTrack & { cropTo?: (target: unknown) => Promise<void> }

const regionEl = (key: RegionKey): HTMLElement | null => {
  const el = document.querySelector<HTMLElement>(`[data-recording-region="${key}"]`)
  if (!el) return null
  const r = el.getBoundingClientRect()
  return r.width > 0 && r.height > 0 ? el : null
}

/** Can this browser record a lesson? (Region Capture itself is optional — without it the whole tab is recorded.) */
export function recordingSupport(): { ok: boolean; reason?: string } {
  if (typeof window === 'undefined') return { ok: false }
  if (!navigator.mediaDevices?.getDisplayMedia || typeof MediaRecorder === 'undefined') {
    return { ok: false, reason: 'Recording needs Chrome or Edge on a computer.' }
  }
  if (typeof HTMLCanvasElement.prototype.captureStream !== 'function') {
    return { ok: false, reason: 'Recording needs Chrome or Edge on a computer.' }
  }
  return { ok: true }
}

export function pickMimeType(isSupported: (t: string) => boolean = (t) => MediaRecorder.isTypeSupported(t)): { mimeType: string; ext: 'mp4' | 'webm' } {
  for (const mimeType of ['video/mp4;codecs=avc1.42E01F,mp4a.40.2', 'video/mp4']) if (isSupported(mimeType)) return { mimeType, ext: 'mp4' }
  for (const mimeType of ['video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm']) if (isSupported(mimeType)) return { mimeType, ext: 'webm' }
  return { mimeType: '', ext: 'webm' }
}

/** Which area the picture should show, given the mode, the last-touched area and what is on the page. */
export function chooseShowing(mode: RecorderMode, lastActive: RegionKey, present: Record<RegionKey, boolean>): Showing {
  const want = mode === 'auto' ? lastActive : mode
  if (present[want]) return want
  const other: RegionKey = want === 'slides' ? 'board' : 'slides'
  return present[other] ? other : 'camera'
}

/** Fit a `w`×`h` source inside a box (contain) — returns the destination rect. */
export function containRect(w: number, h: number, box: { x: number; y: number; w: number; h: number }) {
  if (!w || !h) return { ...box }
  const s = Math.min(box.w / w, box.h / h)
  const dw = w * s
  const dh = h * s
  return { x: box.x + (box.w - dw) / 2, y: box.y + (box.h - dh) / 2, w: dw, h: dh }
}

function makeTicker(ms: number, tick: () => void): () => void {
  // A worker timer keeps drawing when the class window is in the background
  // (main-thread timers are throttled there); fall back to setInterval.
  try {
    const src = 'let t=null;onmessage=e=>{clearInterval(t);if(e.data>0)t=setInterval(()=>postMessage(0),e.data)}'
    const url = URL.createObjectURL(new Blob([src], { type: 'text/javascript' }))
    const w = new Worker(url)
    w.onmessage = tick
    w.postMessage(ms)
    return () => { w.terminate(); URL.revokeObjectURL(url) }
  } catch {
    const t = setInterval(tick, ms)
    return () => clearInterval(t)
  }
}

export class LessonRecorder {
  private state: RecorderState = { status: 'idle', elapsedMs: 0, mode: 'auto', showing: 'slides', uncropped: false, error: null, lastSaved: null }
  private display: MediaStream | null = null
  private cam: MediaStream | null = null
  private tabVideo: HTMLVideoElement | null = null
  private camVideo: HTMLVideoElement | null = null
  private canvas: HTMLCanvasElement | null = null
  private recorder: MediaRecorder | null = null
  private chunks: Blob[] = []
  private ext: 'mp4' | 'webm' = 'webm'
  private mime = ''
  private stopTicker: (() => void) | null = null
  private regionTimer: ReturnType<typeof setInterval> | null = null
  private clockTimer: ReturnType<typeof setInterval> | null = null
  private lastActive: RegionKey = 'slides'
  private cropTargets = new WeakMap<Element, unknown>()
  private cropping: Promise<void> = Promise.resolve()
  private runStartedAt = 0
  private bankedMs = 0

  constructor(private readonly opts: { fileBase: string; onState: (s: RecorderState) => void }) {}

  private set(patch: Partial<RecorderState>) {
    this.state = { ...this.state, ...patch }
    this.opts.onState(this.state)
  }

  async start(): Promise<void> {
    if (this.state.status !== 'idle') return
    this.set({ status: 'starting', error: null, elapsedMs: 0 })
    try {
      // Tab first: the picker is the step people cancel.
      this.display = await navigator.mediaDevices.getDisplayMedia({
        video: { frameRate: FPS },
        audio: false,
        preferCurrentTab: true,
        selfBrowserSurface: 'include',
        surfaceSwitching: 'exclude',
      } as DisplayMediaStreamOptions)
      this.cam = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 360 }, facingMode: 'user' },
        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
      })
    } catch (err) {
      this.teardown()
      const denied = err instanceof DOMException && (err.name === 'NotAllowedError' || err.name === 'SecurityError')
      this.set({
        status: 'idle',
        error: denied
          ? 'Recording needs permission to share this tab and to use your camera and microphone.'
          : 'Could not start recording. Check that your camera and microphone are connected.',
      })
      return
    }

    const tabTrack = this.display.getVideoTracks()[0]
    // "Stop sharing" in the browser bar ends the recording and saves it.
    tabTrack.addEventListener('ended', () => { void this.stop() })

    this.tabVideo = this.videoFor(this.display)
    this.camVideo = this.videoFor(new MediaStream(this.cam.getVideoTracks()))
    this.canvas = document.createElement('canvas')
    this.canvas.width = WIDTH
    this.canvas.height = HEIGHT

    const crop = (window as unknown as { CropTarget?: CropTargetStatic }).CropTarget
    this.set({ uncropped: !crop || typeof (tabTrack as CroppableTrack).cropTo !== 'function' })
    this.lastActive = regionEl('slides') ? 'slides' : 'board'
    document.addEventListener('pointerdown', this.onPointer, true)
    document.addEventListener('wheel', this.onPointer, { capture: true, passive: true })
    document.addEventListener('keydown', this.onKey, true)
    this.updateRegion()
    this.regionTimer = setInterval(() => this.updateRegion(), 500)

    const stream = this.canvas.captureStream(FPS)
    for (const t of this.cam.getAudioTracks()) stream.addTrack(t)
    const { mimeType, ext } = pickMimeType()
    this.ext = ext
    this.mime = mimeType
    this.chunks = []
    this.recorder = new MediaRecorder(stream, { ...(mimeType ? { mimeType } : {}), videoBitsPerSecond: BITRATE, audioBitsPerSecond: 128_000 })
    this.recorder.ondataavailable = (e) => { if (e.data.size > 0) this.chunks.push(e.data) }
    this.stopTicker = makeTicker(Math.round(1000 / FPS), () => this.draw())
    this.recorder.start(5000)
    this.runStartedAt = Date.now()
    this.bankedMs = 0
    this.clockTimer = setInterval(() => this.set({ elapsedMs: this.elapsed() }), 500)
    this.set({ status: 'recording' })
  }

  pause() {
    if (this.state.status !== 'recording' || !this.recorder) return
    this.recorder.pause()
    this.bankedMs = this.elapsed()
    this.runStartedAt = 0
    this.set({ status: 'paused', elapsedMs: this.bankedMs })
  }

  resume() {
    if (this.state.status !== 'paused' || !this.recorder) return
    this.recorder.resume()
    this.runStartedAt = Date.now()
    this.set({ status: 'recording' })
  }

  setMode(mode: RecorderMode) {
    if (mode !== 'auto') this.lastActive = mode
    this.set({ mode })
    this.updateRegion()
  }

  /** Stop and download the file. Safe to call twice (the "Stop sharing" bar also calls it). */
  async stop(): Promise<void> {
    const rec = this.recorder
    if (!rec || this.state.status === 'saving' || this.state.status === 'idle') return
    this.set({ status: 'saving', elapsedMs: this.elapsed() })
    if (rec.state !== 'inactive') {
      await new Promise<void>((resolve) => {
        rec.addEventListener('stop', () => resolve(), { once: true })
        rec.stop()
      })
    }
    const blob = new Blob(this.chunks, { type: this.mime || 'video/webm' })
    this.teardown()
    const fileName = `${this.opts.fileBase}.${this.ext}`
    if (blob.size > 0) {
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = fileName
      document.body.appendChild(a)
      a.click()
      a.remove()
      setTimeout(() => URL.revokeObjectURL(url), 120_000)
    }
    this.set({ status: 'idle', lastSaved: blob.size > 0 ? fileName : null })
  }

  /** Release everything (used on stop, failed start and unmount). */
  teardown() {
    this.stopTicker?.()
    this.stopTicker = null
    if (this.regionTimer) clearInterval(this.regionTimer)
    if (this.clockTimer) clearInterval(this.clockTimer)
    this.regionTimer = this.clockTimer = null
    document.removeEventListener('pointerdown', this.onPointer, true)
    document.removeEventListener('wheel', this.onPointer, true)
    document.removeEventListener('keydown', this.onKey, true)
    for (const s of [this.display, this.cam]) s?.getTracks().forEach((t) => t.stop())
    this.display = this.cam = null
    this.tabVideo = this.camVideo = null
    this.recorder = null
    this.chunks = []
  }

  private elapsed() {
    return this.bankedMs + (this.runStartedAt ? Date.now() - this.runStartedAt : 0)
  }

  private videoFor(stream: MediaStream) {
    const v = document.createElement('video')
    v.muted = true
    v.playsInline = true
    v.srcObject = stream
    void v.play().catch(() => {})
    return v
  }

  private onPointer = (e: Event) => {
    const key = (e.target as Element | null)?.closest?.('[data-recording-region]')?.getAttribute('data-recording-region')
    if (key === 'slides' || key === 'board') this.noteActivity(key)
  }

  private onKey = (e: KeyboardEvent) => {
    // Arrow / page keys drive the deck; typing elsewhere doesn't move the picture.
    if (['ArrowLeft', 'ArrowRight', 'PageUp', 'PageDown'].includes(e.key) && regionEl('slides')) this.noteActivity('slides')
  }

  private noteActivity(key: RegionKey) {
    if (this.lastActive === key) return
    this.lastActive = key
    if (this.state.mode === 'auto') this.updateRegion()
  }

  private updateRegion() {
    if (!this.display) return
    const present = { slides: !!regionEl('slides'), board: !!regionEl('board') }
    const showing = chooseShowing(this.state.mode, this.lastActive, present)
    const el = showing === 'camera' ? null : regionEl(showing)
    if (showing !== this.state.showing) this.set({ showing })
    if (el && !this.state.uncropped) this.cropTo(el)
  }

  private cropTo(el: Element) {
    const track = this.display?.getVideoTracks()[0] as CroppableTrack | undefined
    const crop = (window as unknown as { CropTarget?: CropTargetStatic }).CropTarget
    if (!track?.cropTo || !crop) return
    // Serialize: a crop request must finish before the next one starts.
    this.cropping = this.cropping.then(async () => {
      try {
        let target = this.cropTargets.get(el)
        if (!target) {
          target = await crop.fromElement(el)
          this.cropTargets.set(el, target)
        }
        if (this.croppedTo !== el) {
          await track.cropTo!(target)
          this.croppedTo = el
        }
      } catch {
        // Another tab or window was shared: record it whole.
        this.set({ uncropped: true })
      }
    })
  }
  private croppedTo: Element | null = null

  private draw() {
    const ctx = this.canvas?.getContext('2d')
    if (!ctx || !this.canvas) return
    ctx.fillStyle = '#0f172a'
    ctx.fillRect(0, 0, WIDTH, HEIGHT)
    const cam = this.camVideo
    if (this.state.showing === 'camera' || !this.tabVideo) {
      if (cam?.videoWidth) {
        const r = containRect(cam.videoWidth, cam.videoHeight, { x: 0, y: 0, w: WIDTH, h: HEIGHT })
        ctx.drawImage(cam, r.x, r.y, r.w, r.h)
      }
      return
    }
    const tab = this.tabVideo
    if (tab.videoWidth) {
      const r = containRect(tab.videoWidth, tab.videoHeight, { x: MARGIN, y: MARGIN, w: WIDTH - 2 * MARGIN, h: HEIGHT - 2 * MARGIN })
      ctx.drawImage(tab, r.x, r.y, r.w, r.h)
    }
    if (cam?.videoWidth) {
      const x = WIDTH - CAM_W - MARGIN
      const y = HEIGHT - CAM_H - MARGIN
      ctx.save()
      ctx.beginPath()
      ctx.roundRect(x, y, CAM_W, CAM_H, 14)
      ctx.clip()
      // Cover the bubble (crop the camera to 16:9).
      const s = Math.max(CAM_W / cam.videoWidth, CAM_H / cam.videoHeight)
      const dw = cam.videoWidth * s
      const dh = cam.videoHeight * s
      ctx.drawImage(cam, x + (CAM_W - dw) / 2, y + (CAM_H - dh) / 2, dw, dh)
      ctx.restore()
      ctx.lineWidth = 3
      ctx.strokeStyle = 'rgba(255,255,255,0.9)'
      ctx.beginPath()
      ctx.roundRect(x, y, CAM_W, CAM_H, 14)
      ctx.stroke()
    }
  }
}
