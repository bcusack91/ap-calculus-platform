/**
 * The website video lesson for Circuits Part 4: Capacitor Networks &
 * Bioelectricity (MCAT), built from the SECTIONS of the YouTube videos: which
 * section carries which checkpoint question, and the worked examples' numeric
 * answer keys. This is the question → section map; `sync-circuits4.ts` writes
 * it to the database.
 *
 * All eight videos are live (voiced exports "p4 c01 Capacitor Networks v1" …
 * "p4 c08 Defibrillator examples v1", cut into public/video-lessons/mcat-circ4/
 * with _manim/tools/web_clips.py). Question rules (owner, 2026-11-16): at most
 * one question on a regular section, exactly three on a "Remember" section, at
 * least three spread through each concept video, and each one on the section
 * that teaches it; numeric answer keys on every problem section.
 */
import { shotList } from '../../src/data/video-shot-lists/mcat-prep/mcat-physics-electricity-rc-circuits-mcat'
import type { CheckpointQuestion } from '../../src/lib/video-lesson-core'
import type { LessonSpec } from './lesson-spec'
import { RECAP } from './circuits4-recap-questions'
import { FIG } from './circuits4-figures'

const plan = (video: number, index: number): CheckpointQuestion => {
  const q = shotList.clips[video - 1]?.checkpoint[index]
  if (!q) throw new Error(`shot list has no question ${index} for clip ${video}`)
  return q
}

export const LESSON: LessonSpec = {
  key: 'mcat-circ4',
  topicSlug: 'mcat-physics-electricity-rc-circuits-mcat',
  courseSlug: 'mcat-prep',
  title: 'Circuits Part 4: Capacitor Networks & Bioelectricity',
  instructor: {
    slug: 'brendan-cusack',
    name: 'Brendan Cusack',
    headline: 'Physics & MCAT tutor',
    bio: 'Teaches MCAT physics and AP Physics in live StudyMondo classes and on the StudyMondo YouTube channel.',
    email: 'brendan@cusackprep.com',
    photoUrl: '/instructors/brendan-cusack.png',
    courses: ['mcat-prep'],
  },
  videos: [
    {
      video: 1,
      sections: [
        { id: '02-reverse', title: 'The reverse of the resistor rules', role: 'teach' },
        { id: '03-parallel', title: 'Parallel: same voltage, the charges add', role: 'teach', questions: [plan(1, 0)] },
        { id: '04-series', title: 'Series: same charge, the voltages add', role: 'teach', questions: [plan(1, 1)] },
        { id: '05-smaller-c', title: 'The smaller C takes the larger voltage', role: 'teach' },
        { id: '06-shortcuts', title: 'Shortcuts: product over sum, C/N and NC', role: 'teach', questions: [RECAP[1][0]] },
        { id: '07-compare', title: 'Series and parallel, side by side', role: 'teach' },
        { id: '08-recap', title: 'Remember', role: 'teach', questions: [plan(1, 2), RECAP[1][1], RECAP[1][2]] },
      ],
    },
    {
      video: 2,
      sections: [
        {
          id: '02-ex1-problem',
          title: 'Example 1: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              figure: FIG.v2_ex1,
              question: 'Example 1. A 3.0 μF and a 6.0 μF capacitor are in series across a 12 V battery.',
              parts: [
                { label: 'a', prompt: 'The equivalent capacitance', answer: 2.0, unit: 'μF', expected: '2.0 μF' },
                { label: 'b', prompt: 'The charge on each capacitor', answer: 24, unit: 'μC', expected: '24 μC on each' },
                { label: 'c', prompt: 'The voltage across the 3.0 μF capacitor', answer: 8.0, unit: 'V', expected: '8.0 V' },
                { label: 'c', prompt: 'The voltage across the 6.0 μF capacitor', answer: 4.0, unit: 'V', expected: '4.0 V' },
              ],
              explanation:
                '(a) Two in series, so product over sum: (3.0)(6.0)/(3.0 + 6.0) = 2.0 μF, smaller than either one. Adding them to get 9.0 μF is the parallel rule. (b) Q = C_eq V = (2.0 μF)(12 V) = 24 μC, and every series capacitor carries that same charge. (c) V = Q/C for each: 24/3.0 = 8.0 V and 24/6.0 = 4.0 V. Check: 8.0 + 4.0 = 12 V. The smaller capacitor takes the larger voltage; 6 V each only works for equal capacitors.',
            },
          ],
        },
        { id: '03-ex1-solution', title: 'Example 1: the solution', role: 'solution' },
        {
          id: '04-ex2-problem',
          title: 'Example 2: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              figure: FIG.v2_ex2,
              question: 'Example 2. A 2.0 μF and a 4.0 μF capacitor are in parallel, and that pair is in series with a 3.0 μF capacitor across an 18 V battery.',
              parts: [
                { label: 'a', prompt: 'The equivalent capacitance of the whole network', answer: 2.0, unit: 'μF', expected: '2.0 μF' },
                { label: 'b', prompt: 'The charge on the 3.0 μF capacitor', answer: 36, unit: 'μC', expected: '36 μC' },
                { label: 'b', prompt: 'The voltage across the 3.0 μF capacitor', answer: 12, unit: 'V', expected: '12 V' },
              ],
              explanation:
                '(a) Collapse from the inside out. The parallel pair adds: 2.0 + 4.0 = 6.0 μF. That 6.0 μF is in series with the 3.0 μF: (6.0)(3.0)/(6.0 + 3.0) = 2.0 μF. (b) The battery moves Q = C_eq V = (2.0 μF)(18 V) = 36 μC, and the 3.0 μF capacitor and the pair each carry all of it. So the 3.0 μF capacitor has V = Q/C = 36/3.0 = 12 V.',
            },
            {
              kind: 'numeric',
              figure: FIG.v2_ex2,
              question: 'Example 2, part (c). Now the parallel pair.',
              parts: [
                { label: 'c', prompt: 'The voltage across the parallel pair', answer: 6.0, unit: 'V', expected: '6.0 V' },
                { label: 'c', prompt: 'The charge on the 2.0 μF capacitor', answer: 12, unit: 'μC', expected: '12 μC' },
                { label: 'c', prompt: 'The charge on the 4.0 μF capacitor', answer: 24, unit: 'μC', expected: '24 μC' },
              ],
              explanation:
                'The pair holds the chain’s 36 μC as one 6.0 μF capacitor, so its voltage is 36/6.0 = 6.0 V. Check: 12 + 6.0 = 18 V, the battery. Both capacitors in the pair share that 6.0 V: Q = (2.0 μF)(6.0 V) = 12 μC and Q = (4.0 μF)(6.0 V) = 24 μC. The charge splits in proportion to C, and 12 + 24 = 36 μC. A common trap is giving a capacitor inside the pair the full 36 μC or the full 18 V.',
            },
          ],
        },
        { id: '05-ex2-solution', title: 'Example 2: the solution', role: 'solution' },
        { id: '06-recap', title: 'Remember: the method', role: 'teach', questions: [plan(2, 0), plan(2, 1), plan(2, 2)] },
      ],
    },
    {
      video: 3,
      sections: [
        { id: '02-t-zero', title: 'The first instant: an empty capacitor is a wire', role: 'teach' },
        { id: '03-steady-state', title: 'Steady state: a full capacitor is an open branch', role: 'teach', questions: [plan(3, 2)] },
        { id: '04-no-jump', title: 'The voltage cannot jump; the current can', role: 'teach' },
        { id: '05-time-constant', title: 'The time constant: τ = RC', role: 'teach', questions: [plan(3, 0)] },
        { id: '06-one-tau', title: 'One τ: 63% charged, 37% left', role: 'teach' },
        { id: '07-what-sets-tau', title: 'What sets the charging time', role: 'teach', questions: [plan(3, 1)] },
        { id: '08-recap', title: 'Remember', role: 'teach', questions: RECAP[3] },
      ],
    },
    {
      video: 4,
      sections: [
        {
          id: '02-ex1-problem',
          title: 'Example 1: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              figure: FIG.v4_ex1,
              question: 'Example 1. An ideal 12 V battery, a switch, R₁ = 2.0 Ω and R₂ = 4.0 Ω form one series loop. A side branch across R₂ holds R₃ = 4.0 Ω in series with an uncharged 5.0 μF capacitor. First, just after the switch closes:',
              parts: [
                { label: 'a', prompt: 'The current leaving the battery', answer: 3.0, unit: 'A', expected: '3.0 A' },
                { label: 'b', prompt: 'The current through R₂', answer: 1.5, unit: 'A', expected: '1.5 A' },
                { label: 'b', prompt: 'The current in the capacitor branch', answer: 1.5, unit: 'A', expected: '1.5 A' },
              ],
              explanation:
                '(a) The empty capacitor acts like a wire, so R₃ is in parallel with R₂: (4.0)(4.0)/(4.0 + 4.0) = 2.0 Ω. Add R₁ for 4.0 Ω in all, so I = 12/4.0 = 3.0 A. (b) R₂ and R₃ are equal, so the current splits evenly: 1.5 A each way.',
            },
            {
              kind: 'numeric',
              figure: FIG.v4_ex1,
              question: 'Example 1, parts (c) to (e). Now at steady state, long after the switch closed:',
              parts: [
                { label: 'c', prompt: 'The current leaving the battery', answer: 2.0, unit: 'A', expected: '2.0 A' },
                { label: 'd', prompt: 'The voltage across the capacitor', answer: 8.0, unit: 'V', expected: '8.0 V' },
                { label: 'e', prompt: 'The capacitor’s final charge', answer: 40, unit: 'μC', expected: '40 μC' },
                { label: 'e', prompt: 'The energy it stores', answer: 1.6e-4, unit: 'J', expected: '1.6 × 10⁻⁴ J' },
              ],
              explanation:
                '(c) The full capacitor is an open branch, so only R₁ and R₂ remain in series: I = 12/(2.0 + 4.0) = 2.0 A. Reusing the 3.0 A from the first instant is a common trap. (d) The capacitor branch joins the same two points as R₂, which drops (2.0 A)(4.0 Ω) = 8.0 V. No current flows in the branch, so R₃ drops nothing and the capacitor sits at the full 8.0 V. (e) Q = CV = (5.0 μF)(8.0 V) = 40 μC, and U = ½CV² = ½(5.0 × 10⁻⁶)(8.0)² = 1.6 × 10⁻⁴ J. R₃ sets how fast the capacitor charges, not the voltage it reaches.',
            },
          ],
        },
        { id: '03-ex1-solution', title: 'Example 1: the solution', role: 'solution' },
        {
          id: '04-ex2-problem',
          title: 'Example 2: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              figure: FIG.v4_ex2,
              question: 'Example 2. A 9.0 V battery charges an uncharged 40 μF capacitor through a 50 kΩ resistor.',
              parts: [
                { label: 'a', prompt: 'The time constant', answer: 2.0, unit: 's', expected: '2.0 s' },
                { label: 'b', prompt: 'The initial current, in milliamps', answer: 0.18, unit: 'mA', expected: '0.18 mA (1.8 × 10⁻⁴ A)' },
                { label: 'c', prompt: 'The final charge', answer: 360, unit: 'μC', expected: '360 μC' },
                { label: 'c', prompt: 'About how much charge after 2.0 s', answer: 228, unit: 'μC', tolerance: 0.08, expected: 'about 230 μC' },
              ],
              explanation:
                '(a) Convert first: 50 kΩ = 5.0 × 10⁴ Ω and 40 μF = 4.0 × 10⁻⁵ F, so τ = RC = 2.0 s. Leaving the kilo and micro in gives nonsense. (b) At t = 0 the empty capacitor is a wire, so only R limits the current: I₀ = 9.0/(5.0 × 10⁴) = 1.8 × 10⁻⁴ A = 0.18 mA. (c) Q_max = Cε = (40 μF)(9.0 V) = 360 μC. Two seconds is one time constant, so the capacitor holds about 63% of that: about 230 μC.',
            },
            {
              kind: 'numeric',
              figure: FIG.v4_ex2,
              question: 'Example 2, parts (d) and (e). (d) Charging continues. (e) The full capacitor is then disconnected and joined across the same resistor.',
              parts: [
                { label: 'd', prompt: 'About how long until it is essentially full', answer: 10, unit: 's', expected: 'about 10 s (5τ)' },
                { label: 'e', prompt: 'About how much charge is left 2.0 s into the discharge', answer: 132, unit: 'μC', tolerance: 0.08, expected: 'about 130 μC' },
              ],
              explanation:
                '(d) Essentially full takes about five time constants: 5 × 2.0 s = 10 s. Calling it full at 2.0 s is a common trap. (e) After one τ of discharge about 37% is left: 0.37 × 360 μC ≈ 130 μC.',
            },
            {
              figure: FIG.v4_ex2,
              question: 'Example 2, part (e). While the capacitor discharges through the resistor, which way does the current flow, compared with the charging current?',
              options: [
                'The same way, since the same resistor is used',
                'The same way, since the plates keep their signs',
                'The opposite way, since charge now leaves the plates',
                'The opposite way, since the plates swap their signs',
              ],
              correctAnswer: 2,
              explanation:
                'While charging, charge arrives on the plates; while discharging, it leaves them, so the current in the resistor reverses. The plates keep their signs throughout: the + plate simply loses its excess charge.',
            },
          ],
        },
        { id: '05-ex2-solution', title: 'Example 2: the solution', role: 'solution' },
        { id: '06-recap', title: 'Remember: the method', role: 'teach', questions: [plan(4, 0), plan(4, 1), plan(4, 2)] },
      ],
    },
    {
      video: 5,
      sections: [
        { id: '02-membrane-circuit', title: 'The membrane is a circuit', role: 'teach' },
        { id: '03-field', title: 'The field inside the membrane: E = V/d', role: 'teach' },
        { id: '04-stored-charge', title: 'The resting potential is a thin layer of charge', role: 'teach', questions: [RECAP[5][0]] },
        { id: '05-time-constant', title: 'The membrane time constant: τ = R_mC_m', role: 'teach', questions: [plan(5, 0)] },
        { id: '06-summation', title: 'A long τ adds inputs together', role: 'teach' },
        { id: '07-myelin', title: 'Myelin: membranes stacked in series', role: 'teach', questions: [plan(5, 1)] },
        { id: '08-saltatory', title: 'Saltatory conduction: node to node', role: 'teach' },
        { id: '09-diameter-ms', title: 'Wider axons, and losing myelin', role: 'teach', questions: [RECAP[5][1]] },
        { id: '10-recap', title: 'Remember', role: 'teach', questions: [plan(5, 2), RECAP[5][2], RECAP[5][3]] },
      ],
    },
    {
      video: 6,
      sections: [
        {
          id: '02-ex1-problem',
          title: 'Example 1: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              figure: FIG.v6_ex1,
              question: 'Example 1. A neuron’s membrane has R_m = 2.0 × 10⁸ Ω and C_m = 1.5 × 10⁻¹⁰ F. A drug then opens channels and lowers R_m to 5.0 × 10⁷ Ω. Give each time in milliseconds.',
              parts: [
                { label: 'a', prompt: 'The time constant before the drug', answer: 30, unit: 'ms', expected: '30 ms (3.0 × 10⁻² s)' },
                { label: 'b', prompt: 'The time constant with the drug', answer: 7.5, unit: 'ms', expected: '7.5 ms' },
                { label: 'c', prompt: 'Before the drug: time to reach about 63% of the final change', answer: 30, unit: 'ms', expected: '30 ms (one τ)' },
                { label: 'c', prompt: 'Before the drug: time until the change is essentially complete', answer: 150, unit: 'ms', expected: 'about 150 ms (5τ)' },
              ],
              explanation:
                '(a) τ = R_mC_m = (2.0 × 10⁸)(1.5 × 10⁻¹⁰): 2.0 × 1.5 = 3.0, and the exponents add, 8 − 10 = −2, so τ = 3.0 × 10⁻² s = 30 ms. (b) R_m falls to a quarter, like three more equal channels in parallel, and C_m belongs to the bilayer, so it does not change: τ = (5.0 × 10⁷)(1.5 × 10⁻¹⁰) = 7.5 ms, a quarter of 30 ms. (c) About 63% after one τ, 30 ms; essentially complete after about 5τ, 150 ms. One τ is not finished.',
            },
          ],
        },
        { id: '03-ex1-solution', title: 'Example 1: the solution', role: 'solution' },
        {
          id: '04-ex2-problem',
          title: 'Example 2: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              figure: FIG.v6_ex2,
              question: 'Example 2. A cell membrane 5.0 nm thick has a capacitance of 200 pF and rests at −75 mV. Give magnitudes. (e = 1.6 × 10⁻¹⁹ C)',
              parts: [
                { label: 'a', prompt: 'The field inside the membrane', answer: 1.5e7, unit: 'V/m', expected: '1.5 × 10⁷ V/m' },
                { label: 'b', prompt: 'The charge separated across it', answer: 1.5e-11, unit: 'C', expected: '1.5 × 10⁻¹¹ C' },
                { label: 'c', prompt: 'About how many monovalent ions that is', answer: 9.4e7, unit: 'ions', tolerance: 0.08, expected: 'about 9.4 × 10⁷ ions' },
              ],
              explanation:
                '(a) Convert first: 75 mV = 0.075 V and 5.0 nm = 5.0 × 10⁻⁹ m. E = V/d = 0.075/(5.0 × 10⁻⁹) = 1.5 × 10⁷ V/m. (b) Q = C_mV = (2.0 × 10⁻¹⁰ F)(0.075 V) = 1.5 × 10⁻¹¹ C, + on the outer face and − on the inner. No ½ here; that belongs to the energy formula. (c) N = Q/e = (1.5 × 10⁻¹¹)/(1.6 × 10⁻¹⁹) ≈ 9.4 × 10⁷ ions: a count, and a tiny fraction of the cell’s ions.',
            },
            {
              kind: 'numeric',
              figure: FIG.v6_ex2,
              question: 'Example 2, part (d). The same membrane is wrapped in 25 myelin layers acting in series.',
              parts: [
                { label: 'd', prompt: 'Its capacitance now, in picofarads', answer: 8.0, unit: 'pF', expected: '8.0 pF' },
                { label: 'd', prompt: 'The charge that holds the same 75 mV', answer: 6.0e-13, unit: 'C', expected: '6.0 × 10⁻¹³ C' },
              ],
              explanation:
                'Identical layers in series divide the capacitance by their number: 200 pF / 25 = 8.0 pF. Then Q = CV = (8.0 × 10⁻¹² F)(0.075 V) = 6.0 × 10⁻¹³ C: one twenty-fifth of the charge for the same 75 mV. That is why myelin lets a little current change the voltage quickly.',
            },
          ],
        },
        { id: '05-ex2-solution', title: 'Example 2: the solution', role: 'solution' },
        { id: '06-recap', title: 'Remember: the method', role: 'teach', questions: [plan(6, 0), plan(6, 1), plan(6, 2)] },
      ],
    },
    {
      video: 7,
      sections: [
        { id: '02-fibrillation', title: 'Fibrillation, and what a shock does', role: 'teach' },
        { id: '03-battery-limit', title: 'Why not shock from a battery?', role: 'teach', questions: [RECAP[7][0]] },
        { id: '04-charge-store', title: 'Charge slowly, store ½CV²', role: 'teach' },
        { id: '05-discharge', title: 'Discharge fast: τ = RC', role: 'teach', questions: [plan(7, 1)] },
        { id: '06-power', title: 'Same energy, less time, more power', role: 'teach' },
        { id: '07-connected-isolated', title: 'Connected or isolated: what is held constant?', role: 'teach', questions: [plan(7, 0)] },
        { id: '08-held-constant', title: 'The held-constant table', role: 'teach' },
        { id: '09-units', title: 'Check the units', role: 'teach', questions: [RECAP[7][1]] },
        { id: '10-recap', title: 'Remember', role: 'teach', questions: [plan(7, 2), RECAP[7][2], RECAP[7][3]] },
      ],
    },
    {
      video: 8,
      sections: [
        {
          id: '02-ex1-problem',
          title: 'Example 1: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              figure: FIG.v8_ex1,
              question: 'Example 1. A defibrillator’s 100 μF capacitor is charged to 2000 V over 5.0 s, then discharged through a patient’s chest, which acts as a 50 Ω resistor.',
              parts: [
                { label: 'a', prompt: 'The charge the capacitor stores', answer: 0.2, unit: 'C', expected: '0.20 C' },
                { label: 'a', prompt: 'The energy it stores', answer: 200, unit: 'J', expected: '200 J' },
                { label: 'b', prompt: 'The average power while it charges', answer: 40, unit: 'W', expected: '40 W' },
                { label: 'c', prompt: 'The discharge time constant, in milliseconds', answer: 5.0, unit: 'ms', expected: '5.0 ms' },
              ],
              explanation:
                'Convert first: 100 μF = 1.0 × 10⁻⁴ F. (a) Q = CV = (1.0 × 10⁻⁴)(2.0 × 10³) = 0.20 C, and U = ½CV² = ½(1.0 × 10⁻⁴)(4.0 × 10⁶) = 200 J. Keep the ½ and square the voltage. (b) P = U/t = 200 J / 5.0 s = 40 W, about a household light bulb. (c) τ = RC = (50)(1.0 × 10⁻⁴) = 5.0 × 10⁻³ s = 5.0 ms. It is essentially empty after about 5τ, 25 ms.',
            },
            {
              kind: 'numeric',
              figure: FIG.v8_ex1,
              question: 'Example 1, parts (d) and (e). (d) The first instant of the discharge. (e) Treat the energy as delivered in about 10 ms.',
              parts: [
                { label: 'd', prompt: 'The peak current', answer: 40, unit: 'A', expected: '40 A' },
                { label: 'd', prompt: 'The peak power', answer: 8.0e4, unit: 'W', expected: '8.0 × 10⁴ W' },
                { label: 'e', prompt: 'The average delivery power', answer: 2.0e4, unit: 'W', expected: '2.0 × 10⁴ W' },
                { label: 'e', prompt: 'How many times the charging power that is', answer: 500, unit: '×', expected: '500 times' },
              ],
              explanation:
                '(d) At the first instant the full 2000 V is across the chest: I₀ = V/R = 2000/50 = 40 A, and P = V²/R = (4.0 × 10⁶)/50 = 8.0 × 10⁴ W. (e) Energy goes as Q², so it drains twice as fast as the charge: after 2τ = 10 ms about 98% has been delivered. P ≈ 200 J / (1.0 × 10⁻² s) = 2.0 × 10⁴ W, which is 2.0 × 10⁴ / 40 = 500 times the charging power. That is just the ratio of the times, 5.0 s over 10 ms: the same 200 J at 500 times the power.',
            },
          ],
        },
        { id: '03-ex1-solution', title: 'Example 1: the solution', role: 'solution' },
        {
          id: '04-ex2-problem',
          title: 'Example 2: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              figure: FIG.v8_ex2,
              question: 'Example 2. A defibrillator’s fixed 300 μF capacitor stores 150 J. Design B stores the same 150 J in a 1200 μF capacitor.',
              parts: [
                { label: 'a', prompt: 'The voltage the 300 μF capacitor is charged to', answer: 1000, unit: 'V', expected: '1000 V' },
                { label: 'a', prompt: 'The charge it holds', answer: 0.3, unit: 'C', expected: '0.30 C' },
                { label: 'b', prompt: 'The voltage a 600 J setting needs on the same capacitor', answer: 2000, unit: 'V', expected: '2000 V' },
                { label: 'c', prompt: 'The voltage design B needs', answer: 500, unit: 'V', expected: '500 V' },
              ],
              explanation:
                '300 μF = 3.0 × 10⁻⁴ F. (a) Solve U = ½CV² for V: V = √(2U/C) = √(300/(3.0 × 10⁻⁴)) = √(1.0 × 10⁶) = 1000 V, and Q = CV = 0.30 C. (b) C is fixed, so U goes as V²: four times the energy needs √4 = 2 times the voltage, 2000 V. Four times the voltage would store sixteen times the energy. (c) Now U is fixed, so V goes as 1/√C: four times the capacitance needs half the voltage, 500 V. Scaling with 1/C gives 250 V, which is the fixed-charge rule.',
            },
          ],
        },
        { id: '05-ex2-solution', title: 'Example 2: the solution', role: 'solution' },
        { id: '06-recap', title: 'Remember: the method', role: 'teach', questions: [plan(8, 0), plan(8, 1), plan(8, 2)] },
      ],
    },
  ],
}
