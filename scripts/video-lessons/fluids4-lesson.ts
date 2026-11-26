/**
 * The website video lesson for Fluids Part 4: Viscosity & Blood Flow (MCAT
 * only), built from the SECTIONS of the YouTube videos: which section carries
 * which checkpoint question, and the worked examples' numeric answer keys.
 * This is the question → section map; `sync-fluids4.ts` writes it to the
 * database.
 *
 * All eight videos are voiced (exports "p4 c01 Viscosity and Real Fluids v1" …
 * "p4 c08 Stenosis Examples v1", cut into public/video-lessons/mcat-fl4/ with
 * _manim/tools/web_clips.py). Question rules (owner, 2026-11-16): at most one
 * question on a regular section, exactly three on a "Remember" section, at
 * least three spread through each concept video, and each one on the section
 * that teaches it; numeric answer keys on every problem section.
 *
 * Worked-example solutions are one section per lettered part
 * (`03-ex1-solution-a`, `-b`, …; owner, 2026-11-21). Every part is a
 * `solution` step, in order. The player's "Skip the solution" skips only the
 * step right after the problem (part a); per-part skipping is not built yet.
 */
import { shotList } from '../../src/data/video-shot-lists/mcat-prep/fluids-part4-viscosity-blood-flow'
import type { CheckpointQuestion } from '../../src/lib/video-lesson-core'
import type { LessonSpec, SectionSpec } from './lesson-spec'
import { RECAP } from './fluids4-recap-questions'
import { FIG } from './fluids4-figures'

const plan = (video: number, index: number): CheckpointQuestion => {
  const q = shotList.clips[video - 1]?.checkpoint[index]
  if (!q) throw new Error(`shot list has no question ${index} for clip ${video}`)
  return q
}

/** One solution section per lettered part: `03-ex1-solution-a` … for Example 1, `05-ex2-solution-a` … for Example 2. */
const solutionParts = (example: 1 | 2, letters: string): SectionSpec[] =>
  [...letters].map((p) => ({ id: `${example === 1 ? '03-ex1' : '05-ex2'}-solution-${p}`, title: `Example ${example}: the solution, part (${p})`, role: 'solution' }))

export const LESSON: LessonSpec = {
  key: 'mcat-fl4',
  topicSlug: 'mcat-physics-mechanics-viscosity-mcat',
  courseSlug: 'mcat-prep',
  title: 'Fluids Part 4: Viscosity & Blood Flow',
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
        { id: '02-viscosity', title: 'Viscosity: friction between a fluid’s layers', role: 'teach', questions: [RECAP[1][0]] },
        { id: '03-blood-viscosity', title: 'Blood, hematocrit and viscosity', role: 'teach' },
        { id: '04-velocity-profile', title: 'The velocity profile: at rest at the wall', role: 'teach', questions: [plan(1, 0)] },
        { id: '05-pressure-drop', title: 'Viscosity costs pressure', role: 'teach' },
        { id: '06-laminar-turbulent', title: 'Laminar or turbulent: the Reynolds number', role: 'teach', questions: [plan(1, 2)] },
        { id: '07-murmurs-cuff', title: 'Murmurs, bruits and the blood-pressure cuff', role: 'teach', questions: [RECAP[1][1]] },
        { id: '08-recap', title: 'Remember', role: 'teach', questions: [plan(1, 1), RECAP[1][2], RECAP[1][3]] },
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
              question: 'Example 1. Glycerin flows steadily through a horizontal tube of uniform width, 2.0 m long. A gauge at the inlet reads 5000 Pa and a gauge at the outlet reads 1000 Pa. The glycerin enters at 0.20 m/s.',
              parts: [
                { label: 'a', prompt: 'Its speed at the outlet', answer: 0.2, unit: 'm/s', expected: '0.20 m/s' },
                { label: 'b', prompt: 'The outlet pressure Bernoulli’s equation would predict', answer: 5000, unit: 'Pa', expected: '5000 Pa' },
                { label: 'c', prompt: 'The pressure 1.5 m from the inlet', answer: 2000, unit: 'Pa', expected: '2000 Pa' },
                { label: 'd', prompt: 'The total pressure drop if the same flow ran through 3.0 m of the same tube', answer: 6000, unit: 'Pa', expected: '6000 Pa' },
              ],
              explanation:
                '(a) The tube has the same area all the way along, so continuity keeps the speed the same: 0.20 m/s. Friction does not slow the glycerin down. (b) Same speed and same height, so Bernoulli’s equation predicts no change: 5000 Pa. The real 4000 Pa drop is the cost of viscosity. (c) In a uniform tube the pressure falls by the same amount in every meter: 4000 Pa over 2.0 m is 2000 Pa per meter, so after 1.5 m it has lost 3000 Pa and reads 5000 − 3000 = 2000 Pa. (d) The same 2000 Pa per meter over 3.0 m is a drop of 6000 Pa.',
            },
          ],
        },
        ...solutionParts(1, 'abcd'),
        {
          id: '04-ex2-problem',
          title: 'Example 2: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              question: 'Example 2. Blood (density 1000 kg/m³, viscosity 4.0 × 10⁻³ Pa·s) moves through an aorta 2.0 cm in diameter at an average speed of 0.30 m/s. (b) In severe anemia the viscosity falls to half, and the heart pushes the blood 1.5 times as fast. (d) In polycythemia the viscosity doubles at the normal speed.',
              parts: [
                { label: 'a', prompt: 'The Reynolds number', answer: 1500, expected: '1500 (no units)' },
                { label: 'b', prompt: 'The Reynolds number in severe anemia', answer: 4500, expected: '4500' },
                { label: 'd', prompt: 'The Reynolds number in polycythemia', answer: 750, expected: '750' },
              ],
              explanation:
                '(a) Re = ρvD/η takes the DIAMETER, in meters: 2.0 cm = 0.020 m. On top, (1000)(0.30)(0.020) = 6.0, and 6.0/(4.0 × 10⁻³) = 1500. Every unit cancels, so the Reynolds number has no units. Using the radius, or leaving the diameter in centimeters, is a common trap. (b) Scale it: Re rises with speed and falls with viscosity, so it changes by 1.5/0.5 = 3, to 4500. (d) Double the viscosity at the normal speed and Re is halved: 750. That is farther from turbulence, but thicker blood has more friction, so the heart must supply more pressure for the same flow.',
            },
            {
              question: 'Example 2, part (c). In the anemia case, which way does the change push the flow, and how would a clinician detect it?',
              options: [
                'Toward laminar flow; heard with a stethoscope as a murmur',
                'Toward turbulence; heard with a stethoscope as a murmur',
                'Toward turbulence; seen on a cuff as a low systolic value',
                'Toward laminar flow; silent, since smooth flow has no sound',
              ],
              correctAnswer: 1,
              explanation:
                'Three times the Reynolds number pushes the flow toward turbulence, and turbulent blood flow is noisy: through a stethoscope over the heart it is heard as a murmur. Laminar flow is the silent kind, so a move toward laminar flow would not produce a new sound.',
            },
          ],
        },
        ...solutionParts(2, 'abcd'),
        { id: '06-recap', title: 'Remember: the method', role: 'teach', questions: [plan(2, 0), plan(2, 1), plan(2, 2)] },
      ],
    },
    {
      video: 3,
      sections: [
        { id: '02-law', title: 'Poiseuille’s law: Q = πr⁴ΔP/(8ηL)', role: 'teach', questions: [RECAP[3][0]] },
        { id: '03-proportions', title: 'Pressure, length and viscosity: simple proportions', role: 'teach' },
        { id: '04-fourth-power', title: 'The fourth power of the radius', role: 'teach', questions: [plan(3, 0)] },
        { id: '05-same-flow', title: 'Same flow, narrower tube: 16 times the pressure', role: 'teach' },
        { id: '06-squared-or-fourth', title: 'Squared or fourth power? Ask what is fixed', role: 'teach', questions: [plan(3, 1)] },
        { id: '07-assumptions', title: 'What the law assumes', role: 'teach', questions: [plan(3, 2)] },
        { id: '08-recap', title: 'Remember', role: 'teach', questions: RECAP[3].slice(1) },
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
              question: 'Example 1. Blood (viscosity 4.0 × 10⁻³ Pa·s) flows through a tube of radius 1.0 mm and length 25 cm under a pressure difference of 8000 Pa (about 60 mmHg). In part (c) the tube is swapped for one of radius 0.50 mm, with the same length and pressure difference.',
              parts: [
                { label: 'a', prompt: 'The flow rate, in milliliters per second', answer: 3.14, unit: 'mL/s', expected: '3.1 mL/s (π × 10⁻⁶ m³/s)' },
                { label: 'b', prompt: 'The average speed of the blood', answer: 1.0, unit: 'm/s', expected: '1.0 m/s' },
                { label: 'c', prompt: 'The flow rate through the narrow tube', answer: 0.196, tolerance: 0.08, unit: 'mL/s', expected: 'about 0.20 mL/s' },
                { label: 'd', prompt: 'The pressure difference that restores the original flow through the narrow tube', answer: 128000, unit: 'Pa', expected: '128,000 Pa' },
              ],
              explanation:
                '(a) Convert first: r = 1.0 × 10⁻³ m and L = 0.25 m. Q = πr⁴ΔP/(8ηL) = π(1.0 × 10⁻³)⁴(8000)/[8(4.0 × 10⁻³)(0.25)]. The radius to the fourth is 10⁻¹², so the top is π(8.0 × 10⁻⁹) and the bottom is 8.0 × 10⁻³: Q = π × 10⁻⁶ m³/s ≈ 3.1 mL/s, since 1 m³/s is 10⁶ mL/s. Using the diameter, or dropping the 8 or the π, is a common trap. (b) A = πr² = π × 10⁻⁶ m², so v = Q/A = 1.0 m/s. (c) Same length and pressure difference, so scale: flow goes as r⁴, and (½)⁴ = 1/16, about 0.20 mL/s. (d) To restore the flow the pressure difference must be 16 times as large: 16 × 8000 = 128,000 Pa, more than one atmosphere.',
            },
          ],
        },
        ...solutionParts(1, 'abcd'),
        {
          id: '04-ex2-problem',
          title: 'Example 2: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              question: 'Example 2. Plaque narrows a long segment of an artery to 80% of its normal radius. In parts (a) and (b) the pressure difference across the segment is unchanged. In parts (c) and (d) the body keeps the flow normal instead.',
              parts: [
                { label: 'a', prompt: 'The flow, as a percentage of normal', answer: 41, unit: '%', expected: 'about 41%' },
                { label: 'b', prompt: 'The average blood speed in the segment, as a percentage of normal', answer: 64, unit: '%', expected: '64% (slower)' },
                { label: 'c', prompt: 'The factor by which the pressure difference must rise', answer: 2.44, tolerance: 0.06, unit: '×', expected: 'about 2.4 times' },
                { label: 'd', prompt: 'The factor by which the blood speed in the segment changes', answer: 1.56, tolerance: 0.06, unit: '×', expected: 'about 1.6 times as fast' },
              ],
              explanation:
                'Two numbers do all the work: 0.8² = 0.64 and 0.8⁴ ≈ 0.41. (a) With the pressure difference fixed, flow goes as r⁴, so it falls to about 41% of normal. (b) Speed is flow over area: 0.41/0.64 = 0.64, so the blood moves SLOWER, at 64% of normal. Saying a narrowing always speeds the blood up is a common trap. (c) With the flow fixed, the pressure difference goes as 1/r⁴: 1/0.41 ≈ 2.4 times as large. (d) Now the same flow passes through 64% of the area, so by continuity the speed is 1/0.64 ≈ 1.6 times as great. The same narrowing gives opposite answers for the speed: always ask what is held fixed.',
            },
          ],
        },
        ...solutionParts(2, 'abcd'),
        { id: '06-recap', title: 'Remember: the method', role: 'teach', questions: [plan(4, 0), plan(4, 1), plan(4, 2)] },
      ],
    },
    {
      video: 5,
      sections: [
        { id: '02-ohms-law-for-fluids', title: 'Ohm’s law for fluids: ΔP = QR', role: 'teach', questions: [RECAP[5][0]] },
        { id: '03-map-co-tpr', title: 'The whole circuit: MAP ≈ CO × TPR', role: 'teach', questions: [plan(5, 0)] },
        { id: '04-series-and-parallel', title: 'Vessel levels in series, organ beds in parallel', role: 'teach', questions: [plan(5, 1)] },
        { id: '05-arterioles', title: 'The arterioles take the largest pressure drop', role: 'teach' },
        { id: '06-control-valves', title: 'Arterioles: the body’s control valves', role: 'teach', questions: [RECAP[5][1]] },
        { id: '07-viscosity-and-airways', title: 'Viscosity counts too, and so do airways', role: 'teach' },
        { id: '08-recap', title: 'Remember', role: 'teach', questions: [plan(5, 2), RECAP[5][2], RECAP[5][3]] },
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
              question: 'Example 1. At rest a patient’s cardiac output is 5.0 L/min and the mean arterial pressure is 90 mmHg; take the right atrial pressure as zero. For part (b), model the systemic circuit as four levels in series: arteries 1.0, arterioles 11, capillaries 4.0 and veins 2.0 mmHg·min/L.',
              parts: [
                { label: 'a', prompt: 'The total peripheral resistance', answer: 18, unit: 'mmHg·min/L', expected: '18 mmHg·min/L' },
                { label: 'b', prompt: 'The pressure drop across the arterioles', answer: 55, unit: 'mmHg', expected: '55 mmHg' },
                { label: 'b', prompt: 'The pressure drop across the capillaries', answer: 20, unit: 'mmHg', expected: '20 mmHg' },
                { label: 'b', prompt: 'The pressure as blood enters the capillaries', answer: 30, unit: 'mmHg', expected: '30 mmHg' },
              ],
              explanation:
                '(a) For the whole circuit ΔP = QR becomes MAP = CO × TPR, so TPR = 90/5.0 = 18 mmHg·min/L. (b) In series every level carries the whole 5.0 L/min, so each drop is QR: 5.0 mmHg for the arteries, (5.0)(11) = 55 mmHg for the arterioles, 20 mmHg for the capillaries and 10 mmHg for the veins. They add to 90, as they must, and the arterioles take the most. Step down the chain: 90, then 85, then 30. Blood enters the capillaries at 30 mmHg. Giving each level the whole 90 mmHg, or its own flow, is a common trap.',
            },
            {
              kind: 'numeric',
              question: 'Example 1, parts (c) and (d). (c) During exercise the cardiac output rises to 12 L/min and the mean arterial pressure to 108 mmHg. (d) An arteriole widens until its resistance is halved.',
              parts: [
                { label: 'c', prompt: 'The new total peripheral resistance', answer: 9.0, unit: 'mmHg·min/L', expected: '9.0 mmHg·min/L' },
                { label: 'd', prompt: 'About what percentage the arteriole’s radius must grow', answer: 18.9, tolerance: 0.08, unit: '%', expected: 'about 19%' },
              ],
              explanation:
                '(c) TPR = 108/12 = 9.0 mmHg·min/L. That is half the resting value even though the pressure rose: the arterioles in working muscle have opened wide. (d) Resistance goes as 1/r⁴. To halve it, r⁴ must double, so the radius grows by the fourth root of 2, about 1.19: just 19% wider.',
            },
          ],
        },
        ...solutionParts(1, 'abcd'),
        {
          id: '04-ex2-problem',
          title: 'Example 2: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              figure: FIG.v6_ex2,
              question: 'Example 2. Three organ beds branch in parallel between the aorta, at 90 mmHg, and the veins, at about 0 mmHg. Their resistances are 60, 60 and 30 mmHg·min/L.',
              parts: [
                { label: 'a', prompt: 'Their combined resistance', answer: 15, unit: 'mmHg·min/L', expected: '15 mmHg·min/L' },
                { label: 'b', prompt: 'The flow through each 60-unit bed', answer: 1.5, unit: 'L/min', expected: '1.5 L/min' },
                { label: 'b', prompt: 'The flow through the 30-unit bed', answer: 3.0, unit: 'L/min', expected: '3.0 L/min' },
                { label: 'b', prompt: 'The total flow', answer: 6.0, unit: 'L/min', expected: '6.0 L/min' },
              ],
              explanation:
                '(a) Parallel beds: add the reciprocals. 1/60 + 1/60 + 1/30 = 4/60, and flipping it gives 15 mmHg·min/L, less than the smallest bed. Adding 60, 60 and 30, or forgetting to invert at the end, is a common trap. (b) Every bed sees the same 90 mmHg, so each flow is ΔP/R: 90/60 = 1.5 L/min, twice, and 90/30 = 3.0 L/min. The total is 6.0 L/min, and 90/15 = 6.0 checks.',
            },
            {
              kind: 'numeric',
              figure: FIG.v6_ex2,
              question: 'Example 2, parts (c) and (d). (c) The arterioles of the 30-unit bed constrict by about 16% in radius. (d) The heart keeps the total flow the same.',
              parts: [
                { label: 'c', prompt: 'That bed’s new resistance', answer: 60, unit: 'mmHg·min/L', expected: '60 mmHg·min/L' },
                { label: 'd', prompt: 'The new arterial pressure', answer: 120, unit: 'mmHg', expected: '120 mmHg' },
                { label: 'd', prompt: 'The new flow through each bed', answer: 2.0, unit: 'L/min', expected: '2.0 L/min each' },
              ],
              explanation:
                '(c) 16% narrower leaves 84% of the radius, and 0.84⁴ is about a half, so the resistance doubles, from 30 to 60. Calling that a 16% rise is a common trap. (d) Now it is three 60s in parallel: 20 mmHg·min/L. The heart still pumps 6.0 L/min, so the pressure is (6.0)(20) = 120 mmHg, and each bed carries 120/60 = 2.0 L/min. The squeezed bed fell from 3.0 to 2.0, the other two rose from 1.5 to 2.0, and the arterial pressure rose. Letting the unchanged beds keep their old flow is a common trap.',
            },
          ],
        },
        ...solutionParts(2, 'abcd'),
        { id: '06-recap', title: 'Remember: the method', role: 'teach', questions: [plan(6, 0), plan(6, 1), plan(6, 2)] },
      ],
    },
    {
      video: 7,
      sections: [
        { id: '02-three-questions', title: 'A stenosis: three questions, three laws', role: 'teach' },
        { id: '03-continuity', title: 'How fast? Continuity', role: 'teach', questions: [RECAP[7][0]] },
        { id: '04-short-narrowing', title: 'A short narrowing: Bernoulli', role: 'teach', questions: [plan(7, 1)] },
        { id: '05-long-narrowing', title: 'A long narrowing: Poiseuille', role: 'teach' },
        { id: '06-the-laws-agree', title: 'The laws agree: ask what is held fixed', role: 'teach', questions: [plan(7, 0)] },
        { id: '07-pick-the-regime', title: 'Pick the regime first', role: 'teach', questions: [plan(7, 2)] },
        { id: '08-recap', title: 'Remember', role: 'teach', questions: RECAP[7].slice(1) },
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
              question: 'Example 1. A carotid ultrasound shows peak blood speed rising from 60 cm/s upstream to 240 cm/s inside a short stenosis. Take blood’s density as 1000 kg/m³ and 1 mmHg ≈ 133 Pa. For part (c), suppose the narrowing were long rather than short.',
              parts: [
                { label: 'a', prompt: 'The percentage by which the vessel’s radius (and diameter) has been reduced', answer: 50, unit: '%', expected: '50%' },
                { label: 'b', prompt: 'How much lower the pressure in the jet is, in pascals', answer: 2700, unit: 'Pa', expected: '2700 Pa' },
                { label: 'b', prompt: 'The same pressure dip, in millimeters of mercury', answer: 20.3, unit: 'mmHg', expected: 'about 20 mmHg' },
                { label: 'c', prompt: 'How many times the resistance of a normal centimeter each narrowed centimeter would have', answer: 16, unit: '×', expected: '16 times' },
              ],
              explanation:
                '(a) Run continuity backwards. With a steady flow A₁v₁ = A₂v₂, so the area ratio is the speed ratio upside down: 60/240 = 1/4. Area goes as the radius squared, so the radius ratio is √(1/4) = 1/2: the radius, and the diameter, are halved, a 50% reduction. Reporting the 75% drop in area is a common trap. (b) A short narrowing, so use Bernoulli with the speeds in m/s, 0.60 and 2.4: ΔP = ½ρ(v₂² − v₁²) = ½(1000)(5.76 − 0.36) = (500)(5.4) = 2700 Pa, and 2700/133 ≈ 20 mmHg. Squaring the difference of the speeds, instead of taking the difference of the squares, is a common trap. (c) A long narrowing is Poiseuille’s: resistance goes as 1/r⁴, and half the radius gives 2⁴ = 16 times the resistance.',
            },
            {
              question: 'Example 1, part (d). What happens to the blood just beyond the stenosis, and how is it detected?',
              options: [
                'The jet stays laminar; it is heard as a bruit',
                'The jet turns turbulent; it is silent to a stethoscope',
                'The jet stays laminar; it is silent to a stethoscope',
                'The jet turns turbulent; it is heard as a bruit',
              ],
              correctAnswer: 3,
              explanation:
                'Just beyond the narrowing the fast jet breaks up into turbulence, and turbulent flow is noisy: through a stethoscope over the artery it is heard as a bruit. Laminar flow is the silent kind, so a jet that stayed laminar would make no sound.',
            },
          ],
        },
        ...solutionParts(1, 'abcd'),
        {
          id: '04-ex2-problem',
          title: 'Example 2: the problem',
          role: 'problem',
          questions: [
            {
              kind: 'numeric',
              figure: FIG.v8_ex2,
              question: 'Example 2. A long leg artery with a resistance of 4.0 mmHg·s/mL feeds a muscle bed with a resistance of 21 mmHg·s/mL, in series. The pressure difference across the pair is 100 mmHg. Plaque then narrows one quarter of the artery’s length to half its radius; the driving pressure and the bed do not change.',
              parts: [
                { label: 'a', prompt: 'The flow before the plaque', answer: 4.0, unit: 'mL/s', expected: '4.0 mL/s' },
                { label: 'b', prompt: 'The artery’s new resistance', answer: 19, unit: 'mmHg·s/mL', expected: '19 mmHg·s/mL' },
                { label: 'c', prompt: 'The new flow', answer: 2.5, unit: 'mL/s', expected: '2.5 mL/s' },
              ],
              explanation:
                '(a) The artery and the bed are in series, so their resistances add: 4.0 + 21 = 25, and Q = ΔP/R = 100/25 = 4.0 mL/s. (b) Split the artery. Three quarters of its length stay normal: 3.0 units. The narrowed quarter was 1.0 unit, and at half the radius it is 2⁴ = 16 times as large: 16 units. The artery is now 3.0 + 16 = 19 mmHg·s/mL. Multiplying the whole artery by 16, to get 64, is a common trap: only the narrowed length changes. (c) The same 100 mmHg now pushes through 19 + 21 = 40 units: 100/40 = 2.5 mL/s.',
            },
            {
              kind: 'numeric',
              figure: FIG.v8_ex2,
              question: 'Example 2, part (d). The pressure difference left across the muscle bed.',
              parts: [
                { label: 'd', prompt: 'Before the plaque', answer: 84, unit: 'mmHg', expected: '84 mmHg' },
                { label: 'd', prompt: 'After the plaque', answer: 52.5, unit: 'mmHg', expected: '52.5 mmHg (about 53)' },
              ],
              explanation:
                'The bed gets whatever is left after the artery’s drop, which is QR. Before: 100 − (4.0)(4.0) = 84 mmHg. After: 100 − (2.5)(19) = 52.5 mmHg, about 53. Check it across the bed: (2.5)(21) = 52.5. The narrowing cut both the flow and the pressure that reaches the muscle.',
            },
          ],
        },
        ...solutionParts(2, 'abcd'),
        { id: '06-recap', title: 'Remember: the method', role: 'teach', questions: [plan(8, 0), plan(8, 1), plan(8, 2)] },
      ],
    },
  ],
}
