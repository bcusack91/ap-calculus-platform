import type { ShotList, ShotListClip } from '../types'
import { PICKS } from '@/data/video-lesson-flashcards/ap2-circ'
import { shotList as c1 } from '../mcat-prep/mcat-physics-electricity-dc-circuits-mcat'
import { shotList as c2 } from '../mcat-prep/mcat-physics-electricity-kirchhoff-power-mcat'
import { shotList as c3 } from '../mcat-prep/mcat-physics-electricity-emf-capacitors-mcat'
import { shotList as c4 } from '../mcat-prep/mcat-physics-electricity-rc-circuits-mcat'

/**
 * Shot lists for the three AP Physics 2 circuits topics. Their video lessons
 * reuse the MCAT circuits videos (PICKS), so each AP clip IS the MCAT clip it
 * reuses: same title, goal and key points. The student player reads the clip
 * titles from here to name each video and module.
 */
const SOURCE: Record<string, ShotList> = { 'mcat-circ1': c1, 'mcat-circ2': c2, 'mcat-circ3': c3, 'mcat-circ4': c4 }

const clipsFor = (key: string): ShotListClip[] =>
  PICKS[key].map(([src, video]) => {
    const clip = SOURCE[src].clips[video - 1]
    if (!clip) throw new Error(`${src} has no clip ${video}`)
    return clip
  })

const make = (key: string, topicSlug: string, title: string, overview: string): ShotList => ({ courseSlug: 'ap-physics-2', topicSlug, title, overview, clips: clipsFor(key) })

export const currentResistance = make(
  'ap2-circ1',
  'current-resistance-ohms-law',
  'Current, Resistance, and Ohm’s Law',
  'Ten animated clips in five pairs (a concept clip, then its worked examples): current, voltage, Ohm’s law with resistance and resistivity, power and energy, and EMF with internal resistance.',
)
export const seriesParallel = make(
  'ap2-circ2',
  'series-parallel-circuits',
  'Series and Parallel Circuits',
  'Twelve animated clips in six pairs: series and parallel resistors, resistor networks and dividers, bulb brightness, capacitance, dielectrics and stored energy, and capacitor networks.',
)
export const kirchhoff = make(
  'ap2-circ3',
  'kirchhoffs-laws',
  'Kirchhoff’s Laws',
  'Eight animated clips in four pairs: the junction and loop rules, cells and meters, RC circuits and the time constant, and the defibrillator as an RC circuit in use.',
)
