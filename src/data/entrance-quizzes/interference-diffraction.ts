/**
 * Entrance Quiz — Interference & Diffraction (AP Physics 2)
 *
 * 14 questions, 2 per lesson part (7 parts). Getting both items for a part
 * right marks that part as already mastered.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Wave Interference'
const P2 = "Young's Double-Slit"
const P3 = 'Single-Slit Diffraction'
const P4 = 'Diffraction Gratings'
const P5 = 'Thin-Film Interference'
const P6 = 'Double Slits in a Single-Slit Envelope'
const P7 = 'Synthesis & AP Review'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Wave Interference
  {
    id: 'intd-ent-1a',
    question: 'Two speakers driven in phase emit sound with a wavelength of 0.40 m. A listener stands 2.6 m from one speaker and 3.2 m from the other. What does the listener hear?',
    options: [
      'A loud spot: the waves arrive in step',
      'A loud spot: the path difference is 0.60 m',
      'A quiet spot: the waves arrive half a cycle apart',
      'A medium level: the waves only partly overlap',
    ],
    correctIndex: 2,
    explanation: 'The path difference is $3.2 - 2.6 = 0.60$ m, which is $0.60/0.40 = 1.5$ wavelengths. A half-integer number of wavelengths means the waves arrive out of phase and cancel, giving a quiet spot.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'intd-ent-1b',
    question: 'Two speakers play the same tone but are wired exactly out of phase. What does a listener hear at a point equally far from both speakers?',
    options: [
      'A loud spot, since the path difference is zero',
      'A quiet spot, since the waves arrive half a cycle apart',
      'A loud spot, since both speakers play the same tone',
      'A quiet spot only if the tone is high enough',
    ],
    correctIndex: 1,
    explanation: 'With zero path difference the waves keep the phase difference they started with. Leaving the speakers half a cycle apart, they arrive half a cycle apart and cancel; the usual loud center line becomes quiet.',
    partNumber: 1,
    partTitle: P1,
  },

  // Part 2: Young's Double-Slit
  {
    id: 'intd-ent-2a',
    question: 'Light of wavelength 500 nm passes through two slits 0.25 mm apart onto a screen 1.5 m away. How far is the second bright fringe from the first dark fringe on the same side of center?',
    options: ['4.5 mm', '6.0 mm', '3.0 mm', '7.5 mm'],
    correctIndex: 0,
    explanation: 'The fringe spacing is $\\frac{\\lambda L}{d} = \\frac{(500 \\times 10^{-9})(1.5)}{0.25 \\times 10^{-3}} = 3.0$ mm. The second bright fringe is at 6.0 mm and the first dark fringe at 1.5 mm, so they are 4.5 mm apart.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'intd-ent-2b',
    question: 'A double slit lit by 600 nm light gives bright fringes 2.4 mm apart. The light is changed to 450 nm and the screen is moved to twice its distance from the slits. What is the new fringe spacing?',
    options: ['1.8 mm', '6.4 mm', '0.90 mm', '3.6 mm'],
    correctIndex: 3,
    explanation: 'The spacing $\\frac{\\lambda L}{d}$ scales with both $\\lambda$ and $L$: $2.4 \\times \\frac{450}{600} \\times 2 = 3.6$ mm. Ignoring the screen move gives 1.8 mm, and inverting the wavelength ratio gives 6.4 mm.',
    partNumber: 2,
    partTitle: P2,
  },

  // Part 3: Single-Slit Diffraction
  {
    id: 'intd-ent-3a',
    question: 'Light of wavelength 520 nm passes through a single slit 0.040 mm wide. How wide is the central bright band on a screen 1.2 m away?',
    options: ['16 mm', '31 mm', '62 mm', '0.31 mm'],
    correctIndex: 1,
    explanation: 'The central maximum spans the first minima on both sides: $w = \\frac{2\\lambda L}{a} = \\frac{2(520 \\times 10^{-9})(1.2)}{4.0 \\times 10^{-5}} \\approx 0.031$ m $= 31$ mm. Leaving out the 2 gives only the distance from center to one minimum.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'intd-ent-3b',
    question: 'Which change makes the central bright band of a single-slit pattern narrower?',
    options: [
      'Using light of a longer wavelength',
      'Moving the screen farther away',
      'Using a wider slit',
      'Using a narrower slit',
    ],
    correctIndex: 2,
    explanation: 'The central band\'s width is $\\frac{2\\lambda L}{a}$, so a wider slit makes it narrower. A longer wavelength, a more distant screen and a narrower slit all spread the pattern out.',
    partNumber: 3,
    partTitle: P3,
  },

  // Part 4: Diffraction Gratings
  {
    id: 'intd-ent-4a',
    question: 'Light of wavelength 650 nm strikes a grating with 400 lines per millimeter. At what angle is the second-order maximum?',
    options: ['15.1°', '31.3°', '62.6°', '90.0°'],
    correctIndex: 1,
    explanation: 'The slit spacing is $d = \\frac{1}{400}$ mm $= 2.5\\ \\mu\\text{m}$, so $\\sin\\theta = \\frac{2(0.650)}{2.5} = 0.52$ and $\\theta = 31.3°$. The value 15.1° is the first order, and doubling that angle gives 62.6°, but it is $\\sin\\theta$ that doubles.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'intd-ent-4b',
    question: 'Red light of wavelength 700 nm falls on a grating with 600 lines per millimeter. How many bright maxima appear in total, counting the central one?',
    options: ['Five', 'Two', 'Three', 'Four'],
    correctIndex: 0,
    explanation: 'Here $d = 1.67\\ \\mu\\text{m}$, and $\\frac{d}{\\lambda} = 2.38$, so the highest order with $\\sin\\theta \\le 1$ is $m = 2$. Orders $m = 0, \\pm 1, \\pm 2$ give five maxima.',
    partNumber: 4,
    partTitle: P4,
  },

  // Part 5: Thin-Film Interference
  {
    id: 'intd-ent-5a',
    question: 'A lens coating with $n = 1.25$ sits on glass with $n = 1.50$. What minimum coating thickness cancels the reflection of 600 nm light arriving from air?',
    options: ['240 nm', '120 nm', '150 nm', '480 nm'],
    correctIndex: 1,
    explanation: 'Both reflections go from lower to higher index, so both shift by half a wavelength and the shifts cancel. Destructive interference then needs $2nt = \\frac{1}{2}\\lambda$, so $t = \\frac{600}{4(1.25)} = 120$ nm. Forgetting $n$ gives 150 nm.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'intd-ent-5b',
    question: 'A 250 nm layer of oil ($n = 1.45$) floats on water ($n = 1.33$). Which visible wavelength does it reflect most strongly in white light?',
    options: ['725 nm', '363 nm', '665 nm', '483 nm'],
    correctIndex: 3,
    explanation: 'Only the top reflection (air to oil) has a half-wavelength shift, so bright reflection needs $2nt = (m + \\frac{1}{2})\\lambda$ with $2nt = 725$ nm. That gives 1450 nm, 483 nm and 290 nm; only 483 nm is visible. The value 725 nm ignores the phase shift.',
    partNumber: 5,
    partTitle: P5,
  },

  // Part 6: Double Slits in a Single-Slit Envelope
  {
    id: 'intd-ent-6a',
    question: 'Two slits, each 0.050 mm wide, have centers 0.25 mm apart. How many bright fringes appear inside the central diffraction envelope?',
    options: ['Five', 'Ten', 'Nine', 'Eleven'],
    correctIndex: 2,
    explanation: 'Here $d/a = 5$, so the $m = \\pm 5$ fringes land on the first single-slit minima and are missing. Orders $m = 0, \\pm 1, \\ldots, \\pm 4$ remain: nine bright fringes.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'intd-ent-6b',
    question: 'In a double-slit setup, the slit separation is increased while the width of each slit stays the same. How does the pattern change?',
    options: [
      'Fringes move apart; the envelope keeps its width',
      'Fringes move closer together; the envelope narrows',
      'Fringes stay put; the envelope becomes wider',
      'Fringes move closer together; the envelope keeps its width',
    ],
    correctIndex: 3,
    explanation: 'The fringe spacing $\\frac{\\lambda L}{d}$ shrinks as $d$ grows, but the envelope width $\\frac{2\\lambda L}{a}$ depends only on the slit width. More fringes therefore fit inside the same envelope.',
    partNumber: 6,
    partTitle: P6,
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'intd-ent-7a',
    question: 'A grating with 600 lines per millimeter sends a laser\'s first-order beam out at 22.0°. What is the thinnest soap film ($n = 1.33$, in air) that strongly reflects this wavelength?',
    options: ['117 nm', '235 nm', '156 nm', '624 nm'],
    correctIndex: 0,
    explanation: 'The wavelength is $\\lambda = d\\sin\\theta = (1.67\\ \\mu\\text{m})(0.375) = 624$ nm. A soap film in air has one phase shift, so the thinnest bright film has $2nt = \\frac{1}{2}\\lambda$: $t = \\frac{624}{4(1.33)} = 117$ nm. Leaving out $n$ gives 156 nm.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'intd-ent-7b',
    question: 'A screen shows many evenly spaced bright fringes whose brightness rises and falls in groups. What made the pattern, and what does counting the fringes in the central group tell you?',
    options: [
      'A single slit; the count gives the slit width directly',
      'A grating; the count gives the lines per millimeter',
      'A double slit; the count gives the light\'s wavelength',
      'A double slit; the count gives the ratio $d/a$',
    ],
    correctIndex: 3,
    explanation: 'Evenly spaced fringes inside a fading envelope come from two slits of finite width. The central envelope holds $2(d/a) - 1$ fringes when $d/a$ is a whole number, so the count reveals $d/a$; it does not depend on the wavelength.',
    partNumber: 7,
    partTitle: P7,
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
    { partNumber: 4, partTitle: P4 },
    { partNumber: 5, partTitle: P5 },
    { partNumber: 6, partTitle: P6 },
    { partNumber: 7, partTitle: P7 },
  ]
}
