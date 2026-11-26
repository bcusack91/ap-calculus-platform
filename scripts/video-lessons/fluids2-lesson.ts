/**
 * The website video lesson for Fluids Part 2: Buoyancy & Surface Tension
 * (MCAT), built from the SECTIONS of the YouTube videos: which section
 * carries which checkpoint question, and the worked examples' numeric answer
 * keys. This is the question → section map; `sync-fluids2.ts` writes it to
 * the database.
 *
 * All eight videos are voiced (exports "p2 c01 Archimedes' Principle v1" …
 * "p2 c08 Surface Tension Examples v1", cut into public/video-lessons/mcat-fl2/
 * with _manim/tools/web_clips.py). Question rules (owner, 2026-11-16): at most
 * one question on a regular section, exactly three on a "Remember" section, at
 * least three spread through each concept video, and each one on the section
 * that teaches it; answer keys on every problem section.
 *
 * Each worked-example solution is ONE section (the per-part split starts at
 * Fluids Part 3). Video 8's two examples are predict-and-explain problems with
 * no numbers, so their problem sections carry choice questions and the
 * solution always plays. The sections that only the MCAT lesson keeps (the
 * AP Physics 1 cut leaves them out) are 07-specific-gravity in videos 3 and
 * 5, and all of videos 7 and 8.
 */
import { shotList } from '../../src/data/video-shot-lists/mcat-prep/fluids-part2-buoyancy-surface-tension'
import type { CheckpointQuestion } from '../../src/lib/video-lesson-core'
import type { LessonSpec } from './lesson-spec'
import { RECAP } from './fluids2-recap-questions'
import { FIG } from './fluids2-figures'

const plan = (video: number, index: number): CheckpointQuestion => {
  const q = shotList.clips[video - 1]?.checkpoint[index]
  if (!q) throw new Error(`shot list has no question ${index} for clip ${video}`)
  return q
}

export const LESSON: LessonSpec = {
  key: 'mcat-fl2',
  topicSlug: 'mcat-physics-mechanics-buoyancy-mcat',
  courseSlug: 'mcat-prep',
  title: 'Fluids Part 2: Buoyancy & Surface Tension',
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
        { id: '02-pressure-difference', title: 'Buoyancy is a pressure difference', role: 'teach', questions: [RECAP[1][0]] },
        { id: '03-size-of-force', title: 'How big is it? F_b = ρVg', role: 'teach' },
        { id: '04-archimedes', title: 'Archimedes’ principle: the weight of the displaced fluid', role: 'teach', questions: [RECAP[1][1]] },
        { id: '05-fluid-density', title: 'The fluid’s density, not the object’s', role: 'teach', questions: [plan(1, 1)] },
        { id: '06-submerged-volume', title: 'Only the submerged volume counts, not the depth', role: 'teach', questions: [plan(1, 0)] },
        { id: '07-recap', title: 'Remember', role: 'teach', questions: [plan(1, 2), RECAP[1][2], RECAP[1][3]] },
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
              question: 'Example 1. A solid cube 0.20 m on each side is held fully under water with its top face level and 0.30 m below the surface. (ρ_water = 1000 kg/m³, g = 10 m/s²)',
              parts: [
                { label: 'a', prompt: 'The gauge pressure of the water on the top face', answer: 3000, unit: 'Pa', expected: '3000 Pa' },
                { label: 'a', prompt: 'The gauge pressure of the water on the bottom face', answer: 5000, unit: 'Pa', expected: '5000 Pa' },
                { label: 'b', prompt: 'The force of the water on the top face', answer: 120, unit: 'N', expected: '120 N (pushing down)' },
                { label: 'b', prompt: 'The force of the water on the bottom face', answer: 200, unit: 'N', expected: '200 N (pushing up)' },
              ],
              explanation:
                '(a) Gauge pressure is ρgh at each face’s own depth. Top face, 0.30 m down: (1000)(10)(0.30) = 3000 Pa. The bottom face is one cube deeper, 0.50 m: (1000)(10)(0.50) = 5000 Pa. Gauge pressure is enough, because the air pushes on both faces and cancels. (b) Force is pressure times area, and each face is (0.20)² = 0.040 m². Top: (3000)(0.040) = 120 N, pushing down. Bottom: (5000)(0.040) = 200 N, pushing up.',
            },
            {
              kind: 'numeric',
              figure: FIG.v2_ex1,
              question: 'Example 1, parts (b) to (d). Now the net upward force on the cube, found three ways.',
              parts: [
                { label: 'b', prompt: 'The net upward force from the two face forces', answer: 80, unit: 'N', expected: '80 N' },
                { label: 'c', prompt: 'What F_b = ρVg gives', answer: 80, unit: 'N', expected: '80 N' },
                { label: 'd', prompt: 'The net upward force once the top face is 1.30 m deep', answer: 80, unit: 'N', expected: '80 N' },
              ],
              explanation:
                '(b) 200 N up minus 120 N down is 80 N upward. Stopping at 200 N is a common trap: that is the push on the bottom face alone, not the buoyant force. (c) V = (0.20)³ = 8.0 × 10⁻³ m³, so F_b = (1000)(8.0 × 10⁻³)(10) = 80 N, the same answer in one line. (d) The top face is now at 13,000 Pa, which gives 520 N down; the bottom face, 1.50 m deep, is at 15,000 Pa, which gives 600 N up. 600 − 520 is still 80 N. Both forces grew by 400 N, so their difference did not change.',
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
              question: 'Example 2. A solid aluminum block (density 2700 kg/m³) and a solid pine block (density 500 kg/m³) each have a volume of 4.0 × 10⁻³ m³ (4.0 L). Each is held fully under water (1000 kg/m³) and then released. (g = 10 m/s²)',
              parts: [
                { label: 'a', prompt: 'The buoyant force on each block', answer: 40, unit: 'N', expected: '40 N on each' },
                { label: 'b', prompt: 'The weight of the aluminum block', answer: 108, unit: 'N', expected: '108 N' },
                { label: 'b', prompt: 'The weight of the pine block', answer: 20, unit: 'N', expected: '20 N' },
              ],
              explanation:
                '(a) Same fluid, same submerged volume, so one calculation covers both blocks: F_b = (1000)(4.0 × 10⁻³)(10) = 40 N on each. The volume goes in as cubic meters: 4.0 L is 4.0 × 10⁻³ m³, never 4. (b) Weight uses each block’s own density. Aluminum: (2700)(4.0 × 10⁻³)(10) = 108 N. Pine: (500)(4.0 × 10⁻³)(10) = 20 N. A common trap is swapping them: the block’s density in the buoyant force, or the water’s density in the weight.',
            },
            {
              question: 'Example 2, part (c). Under water, each block feels a 40 N buoyant force; the aluminum block weighs 108 N and the pine block weighs 20 N. At the moment the blocks are released, which way does each one move?',
              options: ['Aluminum sinks; pine sinks', 'Aluminum rises; pine rises', 'Aluminum sinks; pine rises', 'Aluminum rises; pine sinks'],
              correctAnswer: 2,
              explanation:
                'Each block feels the same 40 N buoyant force. The aluminum block weighs 108 N, more than 40 N, so the net force on it is downward and it sinks. The pine block weighs 20 N, less than 40 N, so the net force on it is upward and it rises. Equal buoyant forces, opposite outcomes: the weights decide.',
            },
            {
              kind: 'numeric',
              question: 'Example 2, parts (c) and (d). Give the size of each force.',
              parts: [
                { label: 'c', prompt: 'The net force on the aluminum block at release (it points down)', answer: 68, unit: 'N', expected: '68 N downward' },
                { label: 'c', prompt: 'The net force on the pine block at release (it points up)', answer: 20, unit: 'N', expected: '20 N upward' },
                { label: 'd', prompt: 'The buoyant force on the aluminum block fully submerged in seawater (1030 kg/m³)', answer: 41.2, tolerance: 0.01, unit: 'N', expected: '41.2 N' },
              ],
              explanation:
                '(c) It is buoyant force up against weight down. Aluminum: 108 − 40 = 68 N downward. Pine: 40 − 20 = 20 N upward. (d) F_b = (1030)(4.0 × 10⁻³)(10) = 41.2 N: a denser fluid pushes up harder on the same volume. Answering 40 N reuses fresh water’s density.',
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
        { id: '02-float-hover-sink', title: 'Float, hover or sink? Average density decides', role: 'teach' },
        { id: '03-equilibrium', title: 'Floating at rest: F_b = weight', role: 'teach', questions: [plan(3, 0)] },
        { id: '04-fraction', title: 'The fraction submerged is the density ratio', role: 'teach', questions: [plan(3, 1)] },
        { id: '05-denser-fluid', title: 'A denser fluid: same force, rides higher', role: 'teach' },
        { id: '06-melting-ice', title: 'Melting ice leaves the level unchanged', role: 'teach', questions: [RECAP[3][0]] },
        { id: '07-specific-gravity', title: 'Specific gravity and the hydrometer', role: 'teach', questions: [RECAP[3][1]] },
        { id: '08-recap', title: 'Remember', role: 'teach', questions: [plan(3, 2), RECAP[3][2], RECAP[3][3]] },
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
              question: 'Example 1. A block of wood floats in water (1000 kg/m³) with 60% of its volume submerged.',
              parts: [
                { label: 'a', prompt: 'The block’s density', answer: 600, unit: 'kg/m³', expected: '600 kg/m³' },
                { label: 'b', prompt: 'The percentage of the block submerged when it floats in oil of density 800 kg/m³', answer: 75, unit: '%', expected: '75% (a fraction of 0.75)' },
                { label: 'c', prompt: 'The block sinks, instead of floating, in any fluid less dense than', answer: 600, unit: 'kg/m³', expected: '600 kg/m³' },
              ],
              explanation:
                '(a) The block floats at rest, so the buoyant force equals its weight: ρ_water(0.60V)g = ρ_wood·V·g. V and g cancel, so ρ_wood = (0.60)(1000) = 600 kg/m³. Using 0.40, the fraction above the surface, is a common trap. (b) The fraction submerged is the density ratio, the wood’s over the oil’s: 600/800 = 0.75, so it sits deeper, 75% submerged. If you get 800/600, more than 1, it is upside down. (c) The fraction submerged is 600 over the fluid’s density, and it cannot be more than 1. Below 600 kg/m³, even fully submerged, the buoyant force is smaller than the weight, so the block sinks.',
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
              question: 'Example 2. A flat rectangular raft has a base area of 6.0 m², a thickness of 0.30 m and a mass of 540 kg. It floats level in fresh water (1000 kg/m³).',
              parts: [
                { label: 'a', prompt: 'The volume of water the raft displaces', answer: 0.54, unit: 'm³', expected: '0.54 m³' },
                { label: 'a', prompt: 'How deep the raft sits in the water, in centimeters', answer: 9.0, unit: 'cm', expected: '9.0 cm (0.090 m)' },
              ],
              explanation:
                '(a) Start with the buoyant force equals the weight: ρ_water·V_sub·g = mg. The g cancels, so V_sub = m/ρ_water = 540/1000 = 0.54 m³. That is 540 kg of water, the raft’s own mass. For a flat bottom, the submerged volume is the base area times the depth, so d = 0.54/6.0 = 0.090 m, which is 9.0 cm.',
            },
            {
              kind: 'numeric',
              figure: FIG.v4_ex2,
              question: 'Example 2, parts (b) and (c). The same raft: 6.0 m² base, 0.30 m thick, 540 kg, in fresh water.',
              parts: [
                { label: 'b', prompt: 'The raft’s average density', answer: 300, unit: 'kg/m³', expected: '300 kg/m³' },
                { label: 'b', prompt: 'The percentage of the raft that is submerged', answer: 30, unit: '%', expected: '30% (9.0 cm of 30 cm)' },
                { label: 'c', prompt: 'The greatest load before the raft’s top surface reaches the waterline', answer: 1260, unit: 'kg', expected: '1260 kg' },
              ],
              explanation:
                '(b) The whole raft’s volume is area times thickness: (6.0)(0.30) = 1.8 m³. Its average density is mass over volume: 540/1.8 = 300 kg/m³. The density ratio, 300/1000, says 30% is submerged, and the depths agree: 9.0 cm out of 30 cm is 0.30. (c) The most the raft can displace is its whole volume, 1.8 m³. That is (1000)(1.8) = 1800 kg of water, and floating means that equals the total mass, raft plus load. The load is 1800 − 540 = 1260 kg. Stopping at 1800 kg is a common trap: that is the total, so subtract the raft’s own 540 kg.',
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
        { id: '02-sinks', title: 'Why a denser object sinks all the way', role: 'teach', questions: [RECAP[5][0]] },
        { id: '03-free-body', title: 'The free-body diagram: weight, buoyant force, then the third force', role: 'teach' },
        { id: '04-apparent-weight', title: 'Apparent weight: the scale reads W − F_b', role: 'teach', questions: [plan(5, 0)] },
        { id: '05-bottom-and-held', title: 'Resting on the bottom, and held under', role: 'teach', questions: [plan(5, 1)] },
        { id: '06-two-weighings', title: 'Two weighings give the volume and the density', role: 'teach' },
        { id: '07-specific-gravity', title: 'Specific gravity from two weighings', role: 'teach', questions: [RECAP[5][1]] },
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
              question: 'Example 1. A titanium hip implant weighs 9.0 N in air and 7.0 N when it hangs from a string fully submerged in water. (ρ_water = 1000 kg/m³, g = 10 m/s²)',
              parts: [
                { label: 'a', prompt: 'The buoyant force on the submerged implant', answer: 2.0, unit: 'N', expected: '2.0 N' },
                { label: 'b', prompt: 'The implant’s volume', answer: 2.0e-4, unit: 'm³', expected: '2.0 × 10⁻⁴ m³ (200 cm³)' },
                { label: 'c', prompt: 'The implant’s density', answer: 4500, unit: 'kg/m³', expected: '4500 kg/m³' },
                { label: 'd', prompt: 'The normal force from the bottom of the beaker, once the string is cut and the implant rests there', answer: 7.0, unit: 'N', expected: '7.0 N' },
              ],
              explanation:
                '(a) The drop in the scale reading is the buoyant force: 9.0 − 7.0 = 2.0 N. (b) F_b = ρ_water·V·g, and a submerged object displaces its own volume, so V = F_b/(ρ_water·g) = 2.0/[(1000)(10)] = 2.0 × 10⁻⁴ m³, or 200 cm³. (c) The mass comes from the weight in air: 9.0/10 = 0.90 kg. Density is mass over volume: 0.90/(2.0 × 10⁻⁴) = 4500 kg/m³. Check with the density ratio: W/F_b = 9.0/2.0 = 4.5 times water’s density. Dividing 7 by 2, or 9 by 7, is a common trap. (d) On the bottom the implant is still surrounded by water, so the buoyant force is still 2.0 N: N + F_b = W, so N = 9.0 − 2.0 = 7.0 N, the same as the string supplied. Answering 9.0 N leaves the buoyant force off the diagram.',
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
              question: 'Example 2. A foam buoy of mass 4.0 kg and volume 0.010 m³ is tied to the bed of a lake by a rope, so that it sits at rest fully under water. (ρ_water = 1000 kg/m³, g = 10 m/s²)',
              parts: [
                { label: 'a', prompt: 'The buoyant force on the buoy', answer: 100, unit: 'N', expected: '100 N' },
                { label: 'b', prompt: 'The tension in the rope', answer: 60, unit: 'N', expected: '60 N' },
                { label: 'c', prompt: 'The buoy’s upward acceleration at the moment the rope is cut', answer: 15, unit: 'm/s²', expected: '15 m/s² upward' },
                { label: 'd', prompt: 'The percentage of the buoy’s volume submerged once it floats at rest on the surface', answer: 40, unit: '%', expected: '40% (a fraction of 0.40)' },
              ],
              explanation:
                '(a) The buoy is fully under, so it displaces its whole volume, and the density is the water’s: F_b = (1000)(0.010)(10) = 100 N. (b) The weight uses the buoy’s own mass: (4.0)(10) = 40 N. 100 N up beats 40 N down, so the rope must pull DOWN: F_b = W + T, and T = 100 − 40 = 60 N. (c) With the rope cut, the net force is 100 − 40 = 60 N upward, so a = F_net/m = 60/4.0 = 15 m/s² upward. Dividing by the 10 kg of displaced water is a common trap: use the buoy’s own mass. (d) The buoy’s density is 4.0/0.010 = 400 kg/m³, so the fraction submerged is 400/1000 = 0.40. Check: 0.0040 m³ of displaced water weighs 40 N, exactly the buoy’s weight.',
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
        { id: '02-cohesion-adhesion', title: 'Cohesion and adhesion', role: 'teach' },
        { id: '03-surface-tension', title: 'Surface tension: the surface as a stretched skin', role: 'teach', questions: [plan(7, 0)] },
        { id: '04-consequences', title: 'Drops, water striders and a floating needle', role: 'teach', questions: [RECAP[7][0]] },
        { id: '05-capillary-action', title: 'Capillary action: adhesion against cohesion', role: 'teach', questions: [RECAP[7][1]] },
        { id: '06-lungs-surfactant', title: 'Surface tension in the lungs, and surfactant', role: 'teach', questions: [plan(7, 2)] },
        { id: '07-recap', title: 'Remember', role: 'teach', questions: [plan(7, 1), RECAP[7][2], RECAP[7][3]] },
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
              figure: FIG.v8_ex1,
              question: 'Example 1, part (a). Three clean glass tubes stand upright in a dish of water, and three more of the same sizes stand in a dish of mercury. In each dish, where does the liquid inside the tubes stand, and what shape is its meniscus?',
              options: [
                'Water: above the dish, concave. Mercury: below the dish, convex.',
                'Water: above the dish, convex. Mercury: below the dish, concave.',
                'Water: below the dish, concave. Mercury: above the dish, convex.',
                'Water: above the dish, concave. Mercury: above the dish, convex.',
              ],
              correctAnswer: 0,
              explanation:
                'Ask which attraction is stronger. Water adheres to glass more strongly than it coheres, so it climbs the walls: a concave meniscus, and the level stands above the dish. Mercury coheres more strongly than it adheres to glass, so its surface domes up: a convex meniscus, and the level is pushed below the dish. A common trap is reading a domed surface as a liquid that has risen. Convex goes with pushed down.',
            },
            {
              figure: FIG.v8_ex1,
              question: 'Example 1, part (b). The tubes have inner diameters of 4 mm, 2 mm and 1 mm. In which tube has the liquid level moved farthest from the level in the dish?',
              options: [
                'The 4 mm tube, in both of the dishes',
                'The 1 mm tube, in both of the dishes',
                'The 1 mm tube in water, the 4 mm in mercury',
                'The 4 mm tube in water, the 1 mm in mercury',
              ],
              correctAnswer: 1,
              explanation:
                'The narrower the tube, the larger the change, in both dishes: the 1 mm tube moves most, then the 2 mm, then the 4 mm. So the water is highest in the 1 mm tube, and the mercury is lowest in the 1 mm tube. The trap is expecting the wide tube to show the larger change.',
            },
            {
              figure: FIG.v8_ex1,
              question: 'Example 1, part (c). The 1 mm glass tube in the water is replaced by a 1 mm tube whose inner wall is coated with wax, which water adheres to only weakly. What do the meniscus and the level in this tube look like?',
              options: [
                'Concave, with the level above the dish',
                'Concave, with the level below the dish',
                'Convex, with the level above the dish',
                'Convex, with the level below the dish',
              ],
              correctAnswer: 3,
              explanation:
                'With weak adhesion, cohesion now wins, so the water behaves the way mercury does in glass: a convex meniscus, and a level pushed below the dish. Same water, new wall, opposite result. The two mixed answers pair a meniscus with the wrong direction of level change.',
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
              question: 'Example 2, parts (a) and (b). Two alveoli, one small and one large, are lined with the same thin layer of watery fluid, with no surfactant present. Which way does the lining’s surface tension pull on each alveolus, and which one is more likely to collapse?',
              options: [
                'It pulls outward, and the large one is more likely to collapse',
                'It pulls inward, and the large one is more likely to collapse',
                'It pulls inward, and the small one is more likely to collapse',
                'It pulls outward, and the small one is more likely to collapse',
              ],
              correctAnswer: 2,
              explanation:
                'The surface of the lining acts like a stretched skin that is trying to shrink, so it pulls inward on each alveolus and tends to collapse it. The collapsing effect is stronger the smaller the alveolus, so the small one is more likely to collapse.',
            },
            {
              question: 'Example 2, part (c). Surfactant now spreads over the lining of both alveoli. What does it do?',
              options: [
                'It raises surface tension, which props the small alveoli open',
                'It lowers surface tension, which lets the small alveoli stay open',
                'It lowers surface tension, which makes the small alveoli collapse',
                'It raises surface tension, which makes the large alveoli collapse',
              ],
              correctAnswer: 1,
              explanation:
                'Surfactant lowers the surface tension of the lining fluid. The inward pull weakens, and the small alveoli stay open. A common trap is having surfactant raise surface tension: it lowers it, and a lower surface tension means less collapse, not more.',
            },
            {
              question: 'Example 2, part (d). Which cells secrete surfactant, and what is expected in a premature infant whose lungs cannot yet make enough of it?',
              options: [
                'Type II alveolar cells; small alveoli collapse, with respiratory distress',
                'Type I alveolar cells; small alveoli collapse, with respiratory distress',
                'Type II alveolar cells; large alveoli overfill, with a slower heart rate',
                'Type I alveolar cells; large alveoli overfill, with a slower heart rate',
              ],
              correctAnswer: 0,
              explanation:
                'Type II alveolar cells secrete surfactant. A premature infant cannot yet make enough, so the surface tension stays high, the small alveoli collapse, and the infant develops respiratory distress syndrome. Type I cells form the thin wall that gases cross; they do not make surfactant.',
            },
          ],
        },
        { id: '05-ex2-solution', title: 'Example 2: the solution', role: 'solution' },
        { id: '06-recap', title: 'Remember: the method', role: 'teach', questions: [plan(8, 0), plan(8, 1), plan(8, 2)] },
      ],
    },
  ],
}
