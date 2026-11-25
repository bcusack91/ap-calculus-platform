import type { ShotList } from '../types'

/**
 * Shot list: MCAT Physics — Thermodynamics Part 2: Gases & Kinetic Theory
 * (topic mcat-general-chemistry-solutions-gases-mcat; the second of three Thermodynamics video parts.
 * Part 1 is temperature, heat and heat transfer, Part 3 is the laws of thermodynamics).
 *
 * Sources: the AP Physics 2 lessons physics2-temperature-part3..7 (pressure from molecular collisions,
 * the ideal gas model and PV = nRT = Nk_BT, gas graphs and the absolute-zero experiment, kinetic theory
 * with K_avg = (3/2)k_BT, rms speed and the Maxwell–Boltzmann distribution, and the synthesis review),
 * the gas half of the MCAT lesson src/data/interactive-lessons/mcat-mcat-general-chemistry-solutions-gases-mcat-part1..3.ts
 * (Part 2's ideal gas law with R = 0.0821 L·atm/(mol·K), the combined and named gas laws, Dalton's law,
 * Graham's law and real-gas deviations; Part 3's mixed review. Part 1's solutions, colligative
 * properties and Part 2's electrolysis are chemistry and are left out), the STP molar volume from the
 * MCAT stoichiometry lesson (Part 1), the deck figure assigned to this slug (the gas-law diagram that
 * replaces the "Special Cases" table: Boyle, Charles, Gay-Lussac and Avogadro as links of PV = nRT, in
 * src/data/deck-figures/mcat-cp-stoichiometry.ts), and the exit pools to avoid (the MCAT lesson-built
 * pool and the temperature-thermal-expansion items in src/data/exit-quizzes/ap-physics-2.ts, which the
 * AP Physics 2 unit test also draws from).
 * Eight Manim clips in four pairs (owner format, Nov 2026): a CONCEPT clip that teaches the idea and ends
 * on the "Remember" recap, then a WORKED-EXAMPLES clip with two examples, each shown in full with lettered
 * parts and a pause-and-try prompt before the solution. Concept clips get conceptual checkpoint
 * questions; worked-example clips get questions that mirror their two examples with new numbers.
 * Clips 1–2 follow pressure from collisions (AP Part 3; the MCAT lesson has no collision model, so these
 * clips list MCAT Part 2, the gas-law part they lead into). Clips 3–4 follow the ideal gas model and
 * PV = nRT (AP Part 4; MCAT Part 2's ideal gas law and real gases). Clips 5–6 follow the gas laws, gas
 * graphs and absolute zero (AP Parts 4–5; MCAT Part 2's combined law, special cases and Dalton's law).
 * Clips 7–8 follow kinetic theory (AP Parts 6–7; MCAT Part 2's Graham's law). `lessonParts` name MCAT
 * lesson parts.
 *
 * REUSE FOR AP PHYSICS 2 (topic temperature-thermal-expansion): each clip is cut into sections, about one
 * per key point, and the AP lesson takes only the SHARED sections. MCAT-only material sits in key
 * points of its own, listed word for word in `mcatOnly`, with any question that depends on it listed
 * in `mcatOnlyQuestions`:
 *   clip 3: the chemistry form of the law, R = 0.0821 L·atm/(mol·K), and the STP molar volume, 22.4 L
 *           (1 key point, question 3); the van der Waals directions for real gases, lower P and larger V
 *           than ideal (1 key point, no question). The shared real-gas key point (ideal when not too
 *           dense and not too cold) stays in the AP cut.
 *   clip 5: Dalton's law of partial pressures and gas collected over water (1 key point, question 3)
 *   clip 7: Graham's law of effusion (1 key point, question 3)
 * Clips 1, 2, 4, 6 and 8 are shared in full, so every worked example is AP-valid. Every "Remember"
 * recap covers shared ideas only, and shared narration never refers back to an MCAT-only key point.
 * Conventions (series plan): PV = nRT = Nk_BT with R = 8.31 J/(mol·K) and k_B = 1.38 × 10⁻²³ J/K,
 * N_A = 6.02 × 10²³ per mole, T(K) = T(°C) + 273, 1 atm = 1.0 × 10⁵ Pa, K_avg = (3/2)k_BT, and
 * v_rms = √(3k_BT/m) = √(3RT/M) with M in kg/mol. Every gas-law and kinetic-theory temperature is in
 * kelvin, said on screen; every PV = nRT calculation is in pascals and cubic meters, while ratio
 * problems may keep liters and kilopascals because those units cancel. Answers to 2 significant figures.
 * AP Physics 2 takes the AP lesson's R = 8.31 (its Part 6 quotes 8.314; the answers agree to 2 s.f.).
 *
 * The checkpoint questions are what a YouTube viewer answers at studymondo.com/v/<code>
 * (src/data/video-short-links.ts). Codes (fixed by the series plan): collide1/collide2, gas1/gas2,
 * kelvin1/kelvin2, kinetic1/kinetic2. They use new scenarios and numbers, so they never repeat an
 * exit-quiz item or a worked example.
 */
export const shotList: ShotList = {
  courseSlug: 'mcat-prep',
  topicSlug: 'mcat-general-chemistry-solutions-gases-mcat',
  title: 'Thermodynamics Part 2: Gases & Kinetic Theory',
  overview:
    'Eight animated clips in four pairs that build the ideal gas from the molecules up: how countless tiny collisions add up to a steady pressure, how pressure, volume, amount and temperature are tied together by PV = nRT, how the named gas laws and gas graphs follow from it and point to absolute zero, and how temperature measures the average kinetic energy of the molecules and sets their speeds. Each idea gets a concept clip followed by a worked-examples clip in which every problem is shown in full, with a moment to pause and try it before the solution. Narration stays exam-neutral, and each clip is cut into sections so that introductory physics lessons can reuse the shared ones; the chemistry units and STP, real-gas corrections, partial pressures and effusion sit in sections of their own. Each clip ends with three checkpoint questions. Part 3 continues with work and PV diagrams.',
  clips: [
    // ── 1 · Gas pressure from collisions (concepts) ──────────────────────
    {
      title: 'Gas Pressure from Collisions',
      minutes: 7,
      goal: 'Explain gas pressure as the average force per area from molecular collisions, find the impulse one collision gives a wall, and predict how the number, speed and mass of the molecules change the pressure.',
      keyPoints: [
        'One collision: a molecule of mass m moving straight at a wall with speed v bounces off elastically and leaves with the same speed the other way. Its momentum goes from +mv to −mv, so |Δp| = 2mv, and by Newton\'s third law the wall receives an impulse of the same size, pointing outward. If it hits at an angle, only the velocity component perpendicular to the wall reverses, so only that component pushes: |Δp| = 2mv⊥; the component along the wall is unchanged.',
        'Many collisions: each hit lasts a tiny time, but so many molecules strike every second that the push is steady. The average force is the momentum delivered per second, F = (collisions per second) × (momentum change per collision), and the pressure is that perpendicular force per area, P = F⊥/A, in pascals: 1 Pa = 1 N/m². The atmosphere pushes with about 1.0 × 10⁵ Pa.',
        'Pressure fills the whole gas, not just its walls. The molecules also collide with each other, elastically in an ideal gas, so momentum and kinetic energy are both conserved and the energy is shared out into a steady spread of speeds. A small sensor placed anywhere in the gas is struck from every side and reads the same pressure as the wall, pushing equally in every direction.',
        'What raises the pressure: more molecules in the same volume (more hits per second); the same molecules squeezed into less volume (more hits on each square meter per second); faster molecules, which hit more often AND harder. Speed counts twice, so doubling every molecule\'s speed makes the pressure four times as large: pressure tracks the molecules\' kinetic energy.',
        'At the same temperature, heavier molecules move more slowly, because they carry the same average kinetic energy. They hit less often, but each hit delivers more momentum, and the two effects cancel exactly. So equal numbers of molecules in equal volumes at equal temperatures exert equal pressures, whatever the gas, and the mass of a molecule never appears in the gas law.',
      ],
      showOnScreen: [
        'One molecule flying at a wall and rebounding, its momentum arrow +mv flipping to −mv, the 2mv impulse arrow pushing on the wall; then a molecule arriving at an angle, its velocity split into perpendicular and parallel parts, only the perpendicular part flipping',
        'A wall patch of area A under a hail of molecules, a counter of hits per second, the force readout settling to a steady value, and P = F⊥/A with 1 Pa = 1 N/m² and the atmosphere at 1.0 × 10⁵ Pa',
        'Molecules colliding with each other mid-container, then a small pressure sensor in the middle of the gas struck from every side, its gauge matching the wall gauge',
        'A three-row table animated row by row: more molecules (more hits), smaller volume (more hits per square meter), faster molecules (more hits AND harder hits, so ×2 speed gives ×4 pressure), each with its arrow on P',
        'Two boxes side by side at the same temperature, light fast molecules and heavy slow ones: a hit counter higher on the left, a momentum-per-hit readout higher on the right, and the two pressure gauges reading the same',
        'The "Remember" recap: one hit gives 2mv⊥; P = F⊥/A, in Pa; pressure acts throughout the gas; more molecules, less volume or faster molecules raise P; speed counts twice; heavier molecules at the same T give the same P',
        'End card: "Up next: Gas Pressure from Collisions: Worked Examples"',
      ],
      pitfalls: [
        'Using mv instead of 2mv for an elastic rebound.',
        'Using the full speed, or the component along the wall, for a collision at an angle.',
        'Thinking pressure acts only on the walls.',
        'Counting the speed only once, so that twice the speed gives twice the pressure.',
        'Expecting a gas of heavier molecules to exert more pressure at the same temperature.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-general-chemistry-solutions-gases-mcat', 'mcat-physics-mechanics-momentum-collisions-mcat', 'mcat-physics-mechanics-fluids-mcat'],
      checkpoint: [
        {
          question: 'A gas molecule strikes a wall moving at 60° from the perpendicular and rebounds elastically. Compared with an identical molecule that hits head-on at the same speed, the impulse it gives the wall is:',
          options: ['0.87 times as large', '1.0 times as large', '0.25 times as large', '0.50 times as large'],
          correctAnswer: 3,
          explanation:
            'Only the perpendicular component reverses, and it is v cos 60° = 0.50v, so the impulse is 2m(0.50v), half the head-on 2mv. 0.87 uses v sin 60°, the component along the wall, which does not change; 1.0 lets the whole velocity reverse, as in a head-on hit; and 0.25 squares the 0.50, as if the impulse grew with kinetic energy instead of with momentum.',
        },
        {
          question: 'A sealed, rigid container of gas is heated until every molecule moves twice as fast as before. The pressure on the walls becomes:',
          options: ['Twice as large', 'Four times as large', '1.4 times as large', 'Unchanged in size'],
          correctAnswer: 1,
          explanation:
            'Faster molecules hit harder, each hit carrying twice the momentum, AND hit more often, crossing the container in half the time, so the pressure is 2 × 2 = 4 times as large. "Twice" counts only one of the two effects; 1.4 times (√2) is the speed change that goes with doubling the temperature, turned backwards; and "unchanged" assumes that pressure depends only on the number of molecules and the volume, which have not changed.',
        },
        {
          question: 'A fixed amount of gas is squeezed into half its volume while its temperature stays the same, and its pressure doubles. At the molecular level, the pressure doubles because:',
          options: [
            'Each molecule hits the wall twice as hard',
            'The molecules now move twice as fast',
            'Each patch of wall is hit twice as often',
            'The molecules now attract the walls more',
          ],
          correctAnswer: 2,
          explanation:
            'At the same temperature the molecules keep the same speeds, so each hit delivers the same momentum; packed into half the space, they strike each square meter of wall twice as often. "Twice as hard" and "twice as fast" would both need a higher temperature, and an ideal gas has no attraction to the walls at all, squeezed or not.',
        },
      ],
    },
    // ── 2 · Gas pressure from collisions (worked examples) ───────────────
    {
      title: 'Gas Pressure from Collisions: Worked Examples',
      minutes: 6,
      goal: 'Go from molecular collisions to a pressure and back again, handling angled hits and a change of gas at the same temperature.',
      keyPoints: [
        'Per hit: |Δp| = 2mv⊥, using only the velocity component perpendicular to the wall, v⊥ = v cos θ with θ measured from the perpendicular.',
        'Force from hits: F = (hits per second) × (momentum per hit). Pressure: P = F/A, with A in square meters.',
        'Working backward: F = PA gives the force, and dividing it by the momentum per hit gives the hits per second.',
        'Same temperature, heavier molecules: equal ½mv², so 4 times the mass means half the speed; each hit delivers twice the momentum, there are half as many hits, and the force and pressure are unchanged.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: oxygen molecules hitting a 0.050 m² patch head-on at 500 m/s, the 2mv = 5.3 × 10⁻²³ kg·m/s impulse arrow, the hit counter at 1.0 × 10²⁶ per second, the force readout at 5.3 × 10³ N, the pressure gauge at 1.1 × 10⁵ Pa (about 1.1 atm), then the molecules sped up and the gauge jumping to 4.2 × 10⁵ Pa',
        'Example 2: a 0.010 m² piston under 2.0 × 10⁵ Pa with a 2.0 × 10³ N force arrow, a neon atom arriving at 1,200 m/s at 60° from the perpendicular with its 600 m/s perpendicular part, the 4.0 × 10⁻²³ kg·m/s impulse, the 5.1 × 10²⁵ hits per second; then the gas swapped for atoms 4 times as heavy, the hit counter halving while each impulse arrow doubles, and the force arrow unchanged',
        'The "Remember" recap of the method: 2mv⊥ per hit; F = hits per second × momentum per hit; P = F/A; backward with F = PA; heavier at the same T: fewer, harder hits, same pressure',
        'End card: "Up next: The Ideal Gas Law"',
      ],
      workedExample:
        'Example 1: Oxygen molecules, each of mass 5.3 × 10⁻²⁶ kg, strike a 0.050 m² patch of a container wall head-on at 500 m/s and rebound elastically. Each second, 1.0 × 10²⁶ molecules hit the patch. (a) What is the momentum change of one molecule, and what impulse does it give the wall? (b) What average force do the molecules exert on the patch? (c) What pressure do they exert, in pascals and in atmospheres (1 atm = 1.0 × 10⁵ Pa)? (d) The gas is heated until every molecule moves twice as fast, with the same number of molecules in the same container. What is the new pressure? (a) |Δp| = 2mv = 2(5.3 × 10⁻²⁶)(500) = 5.3 × 10⁻²³ kg·m/s, and the wall receives an impulse of 5.3 × 10⁻²³ N·s pointing outward, into the wall; (b) F = (1.0 × 10²⁶ per second)(5.3 × 10⁻²³) = 5.3 × 10³ N; (c) P = F/A = (5.3 × 10³)/0.050 ≈ 1.1 × 10⁵ Pa, about 1.1 atm; (d) twice the speed doubles the momentum of each hit and also doubles the hits per second, so the pressure is four times as large: 4(1.06 × 10⁵) ≈ 4.2 × 10⁵ Pa. Example 2: Neon gas at a pressure of 2.0 × 10⁵ Pa pushes on a piston of area 0.010 m². Treat every collision as identical: a neon atom of mass 3.3 × 10⁻²⁶ kg arrives at 1,200 m/s, moving at 60° from the perpendicular to the piston, and rebounds elastically. (a) What force does the gas exert on the piston? (b) What is the perpendicular component of the atom\'s velocity, and what momentum does one hit deliver? (c) How many atoms strike the piston each second? (d) At the same temperature, the neon is replaced by the same number of atoms of a gas whose atoms are 4 times as heavy. How do the speed, the momentum per hit, the hits per second and the force on the piston change? (a) F = PA = (2.0 × 10⁵)(0.010) = 2.0 × 10³ N, pushing outward on the piston; (b) v⊥ = 1,200 cos 60° = 600 m/s, and |Δp| = 2mv⊥ = 2(3.3 × 10⁻²⁶)(600) ≈ 4.0 × 10⁻²³ kg·m/s; (c) hits per second = F/|Δp| = (2.0 × 10³)/(3.96 × 10⁻²³) ≈ 5.1 × 10²⁵ per second; (d) the same temperature means the same average ½mv², so 4 times the mass gives half the speed, a 300 m/s perpendicular part; each hit delivers 2(1.32 × 10⁻²⁵)(300) ≈ 7.9 × 10⁻²³ kg·m/s, twice as much; the slower atoms hit half as often, about 2.5 × 10²⁵ per second; and the force stays 2.0 × 10³ N, so the pressure is unchanged.',
      pitfalls: [
        'Using mv instead of 2mv.',
        'Using the full speed, or v sin θ, for a hit at 60° from the perpendicular.',
        'Stopping at the force and calling it the pressure.',
        'Multiplying by the area instead of dividing.',
        'Expecting the heavier gas to push harder or more weakly.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-general-chemistry-solutions-gases-mcat', 'mcat-physics-mechanics-momentum-collisions-mcat'],
      checkpoint: [
        {
          question: 'Each second, 6.0 × 10²⁵ molecules (mass 5.0 × 10⁻²⁶ kg each) strike a 0.030 m² patch of wall at 800 m/s, moving at 60° from the perpendicular, and rebound elastically. What pressure do they exert on the patch?',
          options: ['1.6 × 10⁵ Pa', '8.0 × 10⁴ Pa', '1.4 × 10⁵ Pa', '4.0 × 10⁴ Pa'],
          correctAnswer: 1,
          explanation:
            'v⊥ = 800 cos 60° = 400 m/s, so each hit delivers 2(5.0 × 10⁻²⁶)(400) = 4.0 × 10⁻²³ kg·m/s; F = (6.0 × 10²⁵)(4.0 × 10⁻²³) = 2.4 × 10³ N, and P = F/A = (2.4 × 10³)/0.030 = 8.0 × 10⁴ Pa. 1.6 × 10⁵ Pa uses the full 800 m/s, as for a head-on hit; 1.4 × 10⁵ Pa uses v sin 60°, the component along the wall; and 4.0 × 10⁴ Pa uses mv⊥ instead of 2mv⊥, as if the molecules stopped at the wall.',
        },
        {
          question: 'A gas at 1.5 × 10⁵ Pa pushes on a 0.020 m² piston. Its molecules (mass 6.0 × 10⁻²⁶ kg) strike the piston with a perpendicular speed of 500 m/s and rebound elastically. About how many molecules strike the piston each second?',
          options: ['1.0 × 10²⁶ per second', '2.5 × 10²⁷ per second', '1.3 × 10²⁹ per second', '5.0 × 10²⁵ per second'],
          correctAnswer: 3,
          explanation:
            'F = PA = (1.5 × 10⁵)(0.020) = 3.0 × 10³ N, each hit delivers 2(6.0 × 10⁻²⁶)(500) = 6.0 × 10⁻²³ kg·m/s, and the hits per second are (3.0 × 10³)/(6.0 × 10⁻²³) = 5.0 × 10²⁵. 1.0 × 10²⁶ uses mv per hit instead of 2mv; 2.5 × 10²⁷ divides the pressure itself by the momentum, skipping F = PA; and 1.3 × 10²⁹ divides the pressure by the area instead of multiplying.',
        },
        {
          question: 'A gas\'s atoms strike a piston 6.0 × 10²⁵ times per second, pushing on it with 1.2 × 10³ N. At the same temperature, the gas is replaced by the same number of atoms that are each 9 times as heavy. Now the hits per second and the force on the piston are:',
          options: [
            '2.0 × 10²⁵ hits per second; 1.2 × 10³ N',
            '2.0 × 10²⁵ hits per second; 4.0 × 10² N',
            '6.7 × 10²⁴ hits per second; 1.2 × 10³ N',
            '6.0 × 10²⁵ hits per second; 3.6 × 10³ N',
          ],
          correctAnswer: 0,
          explanation:
            'Equal ½mv² with 9 times the mass means one-third the speed, so the atoms hit one-third as often, 2.0 × 10²⁵ times per second, while each hit carries 9 × ⅓ = 3 times the momentum: the force stays 1.2 × 10³ N. 4.0 × 10² N lets the slower atoms push more weakly, forgetting that each hit is harder; 6.7 × 10²⁴ divides the hit rate by the mass ratio 9 instead of by √9 = 3; and keeping 6.0 × 10²⁵ hits while tripling the force counts the harder hits but forgets that the slower atoms arrive less often.',
        },
      ],
    },
    // ── 3 · The ideal gas law (concepts) ─────────────────────────────────
    {
      title: 'The Ideal Gas Law',
      minutes: 7,
      goal: 'State the assumptions of the ideal gas model, use PV = nRT = Nk_BT in SI units, read it as a set of proportions explained by collisions, and say when real gases stop obeying it.',
      keyPoints: [
        'The ideal gas model makes four assumptions: the molecules move randomly; their own volume is negligible compared with the container; their collisions with each other and with the walls are elastic; and they exert no forces on each other except during collisions. Gases are treated as ideal unless a problem says otherwise.',
        'The ideal gas law: PV = nRT = Nk_BT. Use n (moles) with R = 8.31 J/(mol·K), or N (the number of molecules) with Boltzmann\'s constant k_B = 1.38 × 10⁻²³ J/K: they are one law, since N = nN_A with N_A = 6.02 × 10²³ per mole, and R = N_A k_B. In SI units every time: P in pascals (1 kPa = 10³ Pa, 1 atm = 1.0 × 10⁵ Pa), V in cubic meters (1 L = 10⁻³ m³), and T in kelvin, T = T(°C) + 273. PV then comes out in joules, like nRT.',
        'Read it as proportions, P = nRT/V, with the collision picture behind each one: more gas means more hits, so P ∝ n; hotter molecules hit more often and harder, so P ∝ T; a smaller volume means more hits per square meter, so P ∝ 1/V. No mass and no kind of gas appear: equal volumes of any gases at the same pressure and temperature hold the same number of molecules.',
        'Real gases behave almost ideally when they are not too dense (low pressure) and not too cold (high temperature): the molecules are far apart and fast, so their attractions and their own volume hardly matter. Squeezed to high pressure, or cooled toward condensing, a real gas drifts away from PV = nRT.',
        'In chemistry units the same law uses R = 0.0821 L·atm/(mol·K), with P in atmospheres and V in liters; T is still in kelvin. At STP, 0 °C (273 K) and 1 atm, one mole of any ideal gas fills 22.4 L, so moles = volume/22.4 L at STP, and never for liquids, solids or other conditions.',
        'Which way real gases deviate: attractions pull molecules back as they approach a wall, so the measured pressure is LOWER than the ideal value; the molecules\' own volume takes up space, so the measured volume is LARGER than the ideal value. The van der Waals equation adds both corrections, but only the directions are needed.',
      ],
      showOnScreen: [
        'A box of molecules with the four assumptions ticked off one by one beside it: random arrows, specks with no size, an elastic bounce, no pulls between them',
        'PV = nRT = Nk_BT built up, with a symbols-and-units table (P in Pa, V in m³, n in mol, N, T in K, R = 8.31 J/(mol·K), k_B = 1.38 × 10⁻²³ J/K) and the link N = nN_A, R = N_A k_B; then three conversion cards: 1 L = 10⁻³ m³, 1 kPa = 10³ Pa, T = T(°C) + 273',
        'P = nRT/V with three sliders: n up (more hits, gauge up), T up (faster, harder hits, gauge up), V down (crowded hits, gauge up); then flasks of hydrogen, nitrogen and carbon dioxide at the same P, V and T, each with the same molecule count',
        'A sparse, hot gas with tiny molecules far apart labeled "nearly ideal"; then the same gas squeezed and cooled, molecules crowding and tugging on each other, labeled "drifts from PV = nRT"',
        'The chemistry form PV = nRT with R = 0.0821 L·atm/(mol·K), and a 22.4 L cube labeled "1 mol at STP: 0 °C, 1 atm"',
        'A molecule pulled back by its neighbors as it reaches the wall (P below ideal), and molecules with real size crowding the box (V above ideal)',
        'The "Remember" recap (shared ideas only): four ideal-gas assumptions; PV = nRT = Nk_BT; Pa, m³ and K; P ∝ n, P ∝ T, P ∝ 1/V; no mass in the law; ideal when not too dense and not too cold',
        'End card: "Up next: The Ideal Gas Law: Worked Examples"',
      ],
      pitfalls: [
        'Putting a Celsius temperature into PV = nRT.',
        'Using liters or kilopascals with R = 8.31 J/(mol·K).',
        'Mixing up n with R and N with k_B.',
        'Thinking a heavier gas exerts more pressure under the same conditions.',
        'Expecting real gases to be most ideal when cold and compressed.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-general-chemistry-solutions-gases-mcat'],
      mcatOnly: [
        'In chemistry units the same law uses R = 0.0821 L·atm/(mol·K), with P in atmospheres and V in liters; T is still in kelvin. At STP, 0 °C (273 K) and 1 atm, one mole of any ideal gas fills 22.4 L, so moles = volume/22.4 L at STP, and never for liquids, solids or other conditions.',
        'Which way real gases deviate: attractions pull molecules back as they approach a wall, so the measured pressure is LOWER than the ideal value; the molecules\' own volume takes up space, so the measured volume is LARGER than the ideal value. The van der Waals equation adds both corrections, but only the directions are needed.',
      ],
      mcatOnlyQuestions: [2],
      checkpoint: [
        {
          question: 'Two rigid tanks have the same volume. Tank A holds 1.0 mol of helium at 300 K; tank B holds 0.50 mol of xenon, whose atoms are about 33 times as heavy, at 600 K. How do their pressures compare?',
          options: [
            'B is higher, as xenon is heavier',
            'B is double, as its T is double',
            'Equal, as nT is the same in both',
            'A is higher, as helium is faster',
          ],
          correctAnswer: 2,
          explanation:
            'P = nRT/V, and nT is (1.0)(300) = 300 for A and (0.50)(600) = 300 for B, so with equal volumes the pressures are equal; the kind of gas never enters. "Xenon is heavier" brings in a mass the law does not contain; "B is double" doubles for the temperature but forgets that B holds half as many moles; and "helium is faster" forgets that faster, lighter atoms deliver less momentum per hit, which exactly offsets their extra hits.',
        },
        {
          question: 'Two flasks of equal volume are at the same temperature and pressure. One holds hydrogen and the other holds carbon dioxide, whose molecules are 22 times as heavy. Which flask holds more molecules?',
          options: [
            'Equal numbers, as P, V and T match',
            'More CO₂, as its molecules are heavier',
            'More H₂, as its molecules are smaller',
            'More H₂, as its molecules are faster',
          ],
          correctAnswer: 0,
          explanation:
            'N = PV/(k_BT), and P, V and T are the same, so the flasks hold equal numbers of molecules, whatever the gas. "Heavier" brings mass into a law that has none (the CO₂ flask has more MASS, not more molecules); "smaller" forgets that in an ideal gas the molecules\' own volume is negligible; and "faster" forgets that the faster H₂ molecules each deliver less momentum, so it takes the same number of them to make the same pressure.',
        },
        {
          question: 'An ideal sample of oxygen gas (O₂, 32 g/mol) fills 5.6 L at STP. What is its mass?',
          options: ['32 g', '4.0 g', '0.25 g', '8.0 g'],
          correctAnswer: 3,
          explanation:
            'At STP one mole fills 22.4 L, so 5.6 L is 5.6/22.4 = 0.25 mol, and 0.25 mol × 32 g/mol = 8.0 g. 32 g is a full mole, the 22.4 L amount; 4.0 g uses 16 g/mol, the mass of an oxygen atom rather than an O₂ molecule; and 0.25 g stops at the number of moles and labels it in grams.',
        },
      ],
    },
    // ── 4 · The ideal gas law (worked examples) ──────────────────────────
    {
      title: 'The Ideal Gas Law: Worked Examples',
      minutes: 6,
      goal: 'Use PV = nRT and PV = Nk_BT to find the moles, molecules, volume, number density or temperature of a gas, converting to pascals, cubic meters and kelvin first.',
      keyPoints: [
        'Convert first: liters to cubic meters (× 10⁻³), kilopascals to pascals (× 10³), and Celsius to kelvin (+ 273). Write the converted values on screen before any algebra.',
        'Solve PV = nRT for the unknown: n = PV/(RT), V = nRT/P, T = PV/(nR). For molecules use N = nN_A or N = PV/(k_BT); for molecules per cubic meter, N/V = P/(k_BT).',
        'With V and T fixed, P ∝ n: the fraction of the gas that leaks out is the fraction of the pressure that is lost.',
        'Check the size of every answer: a liter-sized container at about atmospheric pressure holds a few hundredths to a few tenths of a mole, about 10²² to 10²³ molecules.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: a 3.0 L rigid oxygen tank at 2.4 × 10⁵ Pa and 27 °C, the conversion card (3.0 × 10⁻³ m³, 300 K), n = 0.29 mol, N = 1.7 × 10²³ molecules checked both ways, then the gauge dropping to 1.5 × 10⁵ Pa and 0.11 mol leaving through a leak',
        'Example 2: a cylinder with a freely sliding piston holding 0.10 mol of helium at 1.2 × 10⁵ Pa and 17 °C, V = 2.0 L, N = 6.0 × 10²² atoms, 3.0 × 10²⁵ atoms per cubic meter, then the piston rising to 3.0 L as the gas is heated to 430 K',
        'The "Remember" recap of the method: convert to Pa, m³ and K first; solve PV = nRT for the unknown; N = nN_A = PV/(k_BT); at fixed V and T, P ∝ n; check the size',
        'End card: "Up next: Gas Laws and Absolute Zero"',
      ],
      workedExample:
        'Example 1: A rigid 3.0 L tank holds oxygen at an absolute pressure of 2.4 × 10⁵ Pa and a temperature of 27 °C. Use R = 8.31 J/(mol·K), k_B = 1.38 × 10⁻²³ J/K and N_A = 6.02 × 10²³ per mole. (a) Write the volume and temperature in SI units. (b) How many moles of oxygen are in the tank? (c) How many molecules is that? (d) After a slow leak, the tank, still at 27 °C, reads 1.5 × 10⁵ Pa. How many moles leaked out? (a) V = 3.0 × 10⁻³ m³ and T = 27 + 273 = 300 K; (b) n = PV/(RT) = (2.4 × 10⁵)(3.0 × 10⁻³)/((8.31)(300)) = 720/2,493 ≈ 0.29 mol; (c) N = nN_A = (0.289)(6.02 × 10²³) ≈ 1.7 × 10²³ molecules, and the check N = PV/(k_BT) = 720/((1.38 × 10⁻²³)(300)) ≈ 1.7 × 10²³ agrees; (d) with V and T fixed, P ∝ n, so the tank keeps 1.5/2.4 of its gas: n = (1.5 × 10⁵)(3.0 × 10⁻³)/2,493 ≈ 0.18 mol remain, and about 0.29 − 0.18 ≈ 0.11 mol leaked out. Example 2: A cylinder closed by a freely sliding piston holds 0.10 mol of helium at a pressure of 1.2 × 10⁵ Pa and a temperature of 17 °C. Use R = 8.31 J/(mol·K), k_B = 1.38 × 10⁻²³ J/K and N_A = 6.02 × 10²³ per mole. (a) What volume does the helium fill, in cubic meters and in liters? (b) How many helium atoms are there? (c) How many atoms are in each cubic meter? (d) The gas is heated slowly, the pressure staying at 1.2 × 10⁵ Pa, until it fills 3.0 L. What is its temperature, in kelvin and in degrees Celsius? (a) T = 17 + 273 = 290 K, so V = nRT/P = (0.10)(8.31)(290)/(1.2 × 10⁵) ≈ 2.0 × 10⁻³ m³ = 2.0 L; (b) N = nN_A = (0.10)(6.02 × 10²³) ≈ 6.0 × 10²² atoms; (c) N/V = P/(k_BT) = (1.2 × 10⁵)/((1.38 × 10⁻²³)(290)) ≈ 3.0 × 10²⁵ atoms per cubic meter, the same as (6.02 × 10²²)/(2.0 × 10⁻³); (d) T = PV/(nR) = (1.2 × 10⁵)(3.0 × 10⁻³)/((0.10)(8.31)) = 360/0.831 ≈ 433 K, about 4.3 × 10² K, which is 433 − 273 ≈ 160 °C.',
      pitfalls: [
        'Leaving the volume in liters with R = 8.31 J/(mol·K).',
        'Using 27 or 17 instead of 300 K or 290 K.',
        'Using R with a molecule count or k_B with moles.',
        'Reporting a kelvin answer as degrees Celsius.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-general-chemistry-solutions-gases-mcat'],
      checkpoint: [
        {
          question: 'A rigid 2.5 L tank holds a gas at an absolute pressure of 3.0 × 10⁵ Pa and a temperature of 7 °C. About how many moles of gas does it hold? (R = 8.31 J/(mol·K))',
          options: ['13 mol', '320 mol', '0.32 mol', '3.1 mol'],
          correctAnswer: 2,
          explanation:
            'Convert first: V = 2.5 × 10⁻³ m³ and T = 7 + 273 = 280 K. Then n = PV/(RT) = 750/((8.31)(280)) = 750/2,327 ≈ 0.32 mol. 13 mol uses 7 instead of 280 K; 320 mol leaves the volume in liters; and 3.1 mol inverts the formula, computing RT/(PV).',
        },
        {
          question: 'A 1.0 L flask holds a gas at 1.0 × 10⁵ Pa and 27 °C. How many molecules does it hold? (k_B = 1.38 × 10⁻²³ J/K)',
          options: ['2.4 × 10²² molecules', '2.7 × 10²³ molecules', '2.4 × 10²⁵ molecules', '4.0 × 10⁻² molecules'],
          correctAnswer: 0,
          explanation:
            'N = PV/(k_BT) = (1.0 × 10⁵)(1.0 × 10⁻³)/((1.38 × 10⁻²³)(300)) = 100/(4.14 × 10⁻²¹) ≈ 2.4 × 10²² molecules. 2.7 × 10²³ uses 27 instead of 300 K; 2.4 × 10²⁵ leaves the volume in liters; and 4.0 × 10⁻² uses R instead of k_B, which gives the number of MOLES (0.040 mol), not molecules.',
        },
        {
          question: 'A cylinder with a freely sliding piston holds 0.050 mol of gas at 1.0 × 10⁵ Pa, filling 1.5 L. What is the temperature of the gas in degrees Celsius? (R = 8.31 J/(mol·K))',
          options: ['361 °C', '634 °C', '−255 °C', '88 °C'],
          correctAnswer: 3,
          explanation:
            'T = PV/(nR) = (1.0 × 10⁵)(1.5 × 10⁻³)/((0.050)(8.31)) = 150/0.4155 ≈ 361 K, and 361 − 273 ≈ 88 °C. 361 °C stops at the kelvin value and labels it Celsius; 634 °C adds 273 instead of subtracting it; and −255 °C leaves n out of the formula, giving 18 K.',
        },
      ],
    },
    // ── 5 · Gas laws and absolute zero (concepts) ────────────────────────
    {
      title: 'Gas Laws and Absolute Zero',
      minutes: 7,
      goal: 'Relate two states of a fixed amount of gas with the combined and named gas laws, read and straighten the standard gas graphs, and explain how a constant-volume gas finds absolute zero.',
      keyPoints: [
        'For a fixed amount of gas, PV/T stays constant, so P₁V₁/T₁ = P₂V₂/T₂. In a ratio any pressure and volume units cancel, so liters and kilopascals are fine, but T must still be in kelvin: warming a gas from 27 °C to 54 °C takes it from 300 K to 327 K, about 9% hotter, not twice as hot.',
        'Hold two variables fixed and the law gives the named special cases: Boyle (T and n fixed): P ∝ 1/V, the only inverse pair; Charles (P and n fixed): V ∝ T; Gay-Lussac (V and n fixed): P ∝ T; Avogadro (P and T fixed): V ∝ n. At constant pressure, a heated gas expands until its faster molecules, hitting harder, strike each square meter less often, keeping the pressure the same.',
        'The graphs: P against V at constant T is a curve (a hyperbola) called an isotherm, and a hotter isotherm lies farther from the origin. To straighten it, plot P against 1/V: a line through the origin with slope nRT. P against T at constant volume is a straight line through the origin, slope nR/V, when T is in kelvin; V against T at constant pressure is a line through the origin, slope nR/P.',
        'Absolute zero: measure the pressure of a sealed, constant-volume bulb at several Celsius temperatures. The points lie on a straight line that does not pass through the origin; extend it down to P = 0 and it crosses the temperature axis near −273 °C, for any gas and any amount. A steeper line (more gas, or a smaller bulb) still meets the axis there. That temperature is 0 K, and the kelvin scale is the Celsius scale with its zero moved there: a change of 1 °C equals a change of 1 K.',
        'In a mixture, each gas pushes as if it were alone: Dalton\'s law, P_total = P_A + P_B + …, with each partial pressure set by that gas\'s share of the molecules, P_A = χ_A P_total, where χ_A is its mole fraction. A gas collected over water shares the tube with water vapor, so P_gas = P_total − P_water vapor. In the lungs and blood, it is the partial pressure of oxygen, not the total pressure, that drives oxygen across.',
      ],
      showOnScreen: [
        'P₁V₁/T₁ = P₂V₂/T₂ with matching units canceling in the ratio, and a thermometer pair: 27 °C → 54 °C beside 300 K → 327 K, a "×2?" crossed out',
        'The deck\'s gas-law diagram: P, T, V and n as four circles joined by the Boyle, Charles, Gay-Lussac and Avogadro links, each lighting up as it is named; then a piston rising as the gas is heated at constant pressure, with harder but rarer hits',
        'A family of isotherms with the hotter one farther out; then the same data replotted as P against 1/V, two straight lines through the origin; then P–T and V–T lines through the origin in kelvin',
        'A gas bulb in water baths with a pressure gauge, points plotted against °C, the best-fit line extended in a dashed line to P = 0 at −273 °C; then a steeper line for more gas meeting the axis at the same point, and a kelvin axis sliding under it with its zero there',
        'A box of two gases with their partial-pressure gauges adding to the total, and a collection tube over water with its vapor-pressure slice subtracted',
        'The "Remember" recap (shared ideas only): P₁V₁/T₁ = P₂V₂/T₂ in kelvin; Boyle inverse, Charles, Gay-Lussac and Avogadro direct; isotherms and P against 1/V; P–T lines through the origin in K; extrapolate to P = 0 at −273 °C = 0 K',
        'End card: "Up next: Gas Laws and Absolute Zero: Worked Examples"',
      ],
      pitfalls: [
        'Taking a ratio of Celsius temperatures.',
        'Inverting the pressure or volume ratio in Boyle\'s law.',
        'Reading a P–V curve as a straight-line relationship.',
        'Thinking the absolute-zero intercept depends on the gas or the amount.',
        'Using a temperature graph in °C and expecting it to pass through the origin.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-general-chemistry-solutions-gases-mcat', 'mcat-organ-systems-respiratory-mcat'],
      mcatOnly: [
        'In a mixture, each gas pushes as if it were alone: Dalton\'s law, P_total = P_A + P_B + …, with each partial pressure set by that gas\'s share of the molecules, P_A = χ_A P_total, where χ_A is its mole fraction. A gas collected over water shares the tube with water vapor, so P_gas = P_total − P_water vapor. In the lungs and blood, it is the partial pressure of oxygen, not the total pressure, that drives oxygen across.',
      ],
      mcatOnlyQuestions: [2],
      checkpoint: [
        {
          question: 'A student plots pressure against 1/V for a fixed sample of gas at constant temperature and gets a straight line. She repeats the experiment with the same sample at a higher temperature. The new line is:',
          options: [
            'Less steep, still through the origin',
            'Just as steep, shifted upward',
            'Steeper, still through the origin',
            'Curved, no longer a straight line',
          ],
          correctAnswer: 2,
          explanation:
            'P = nRT(1/V), so the line passes through the origin with slope nRT; a higher T gives a steeper line. "Less steep" inverts the role of temperature; "shifted upward" adds a constant that the law does not contain, since P must go to zero as 1/V does; and "curved" confuses this plot with P against V, which is the curve.',
        },
        {
          question: 'A balloon of gas at constant pressure is warmed from 20 °C to 40 °C. Its volume becomes:',
          options: ['About 2.0 times as large', 'About 1.07 times as large', 'About 1.41 times as large', 'About 0.94 times as large'],
          correctAnswer: 1,
          explanation:
            'At constant pressure V ∝ T in kelvin: 293 K → 313 K, so the volume grows by 313/293 ≈ 1.07. 2.0 takes the ratio of Celsius temperatures, 40/20; 1.41 is √2, a square root that does not belong in Charles\'s law; and 0.94 inverts the ratio, as if heating shrank the gas.',
        },
        {
          question: 'At a mountain camp the total air pressure is 0.60 atm. Air is 21% oxygen by moles. What is the partial pressure of oxygen there?',
          options: ['0.13 atm', '0.21 atm', '0.47 atm', '0.60 atm'],
          correctAnswer: 0,
          explanation:
            'P_O₂ = χ_O₂ P_total = (0.21)(0.60 atm) ≈ 0.13 atm, which is why breathing is harder at altitude even though the air is still 21% oxygen. 0.21 atm uses the sea-level total of 1 atm; 0.47 atm is the partial pressure of the other 79% of the air, mostly nitrogen; and 0.60 atm is the total pressure, not the oxygen\'s share.',
        },
      ],
    },
    // ── 6 · Gas laws and absolute zero (worked examples) ─────────────────
    {
      title: 'Gas Laws and Absolute Zero: Worked Examples',
      minutes: 6,
      goal: 'Follow a gas through several changes with the named and combined gas laws, and analyze constant-volume data to find absolute zero and the amount of gas.',
      keyPoints: [
        'Name what is fixed at each step, then use the matching law: Boyle (T fixed), Gay-Lussac (V fixed), Charles (P fixed), or P₁V₁/T₁ = P₂V₂/T₂ for everything at once. Kelvin always.',
        'Check a multi-step answer in one line with the combined law from the first state to the last.',
        'From constant-volume data: slope = ΔP/ΔT, the same per °C as per K; follow the line down to P = 0 to find absolute zero; and slope = nR/V gives n = (slope)V/R, in pascals and cubic meters.',
        'More gas or a smaller bulb makes the line steeper, but it still meets the axis at −273 °C.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: a sealed syringe at 60 mL, 1.0 × 10⁵ Pa and 27 °C, the plunger pushed to 20 mL (3.0 × 10⁵ Pa), the tip held while the syringe is warmed to 127 °C (4.0 × 10⁵ Pa, with the Celsius trap 1.4 × 10⁶ Pa crossed out), then the plunger released to 80 mL at 1.0 × 10⁵ Pa',
        'Example 2: the data table for a 1.5 × 10⁻³ m³ bulb (82.0 kPa at 20 °C, 110.0 kPa at 120 °C), the line through the two points with its 280 Pa/K slope, the dashed extension meeting P = 0 at −273 °C, n = 0.051 mol, then a second line twice as steep for a bulb of half the volume, meeting the axis at the same point',
        'The "Remember" recap of the method: name what is fixed; the matching law, in kelvin; check with P₁V₁/T₁ = P₂V₂/T₂; slope from the data; extrapolate to P = 0; n = (slope)V/R',
        'End card: "Up next: Kinetic Theory of Gases"',
      ],
      workedExample:
        'Example 1: A sealed syringe holds 60 mL of air at 1.0 × 10⁵ Pa and 27 °C. (a) The plunger is pushed in slowly, keeping the temperature at 27 °C, until the air fills 20 mL. What is its pressure? (b) With the plunger then held fixed at 20 mL, the syringe is warmed to 127 °C. What is the pressure now? (c) The plunger is released and slides until the pressure is back to 1.0 × 10⁵ Pa, the air staying at 127 °C. What volume does the air fill? (a) T is fixed, so Boyle\'s law: P = (1.0 × 10⁵)(60/20) = 3.0 × 10⁵ Pa; (b) V is fixed, so P ∝ T in kelvin, 300 K → 400 K: P = (3.0 × 10⁵)(400/300) = 4.0 × 10⁵ Pa; the Celsius ratio 127/27 would give a wrong 1.4 × 10⁶ Pa; the one-line check from the start, (1.0 × 10⁵)(60/20)(400/300) = 4.0 × 10⁵ Pa, agrees; (c) T is fixed at 400 K, so Boyle again: V = (20 mL)(4.0 × 10⁵)/(1.0 × 10⁵) = 80 mL, the same as Charles\'s law from the start, (60 mL)(400/300) = 80 mL, since the pressure is back where it began. Example 2: A sealed bulb of volume 1.5 × 10⁻³ m³ is placed in water baths. Its gas reads 82.0 kPa at 20 °C and 110.0 kPa at 120 °C, and the graph of pressure against temperature is a straight line. Use R = 8.31 J/(mol·K). (a) What is the slope of the line, in Pa/K? (b) Extending the line, at what temperature would the pressure reach zero? (c) How many moles of gas are in the bulb? (d) The same amount of the same gas is sealed in a bulb of half the volume. What are the slope and the zero-pressure temperature of its line? (a) slope = (110.0 − 82.0) kPa/(120 − 20) °C = 28.0 kPa/100 K = 280 Pa/K, since a change of 1 °C is a change of 1 K; (b) starting from 82,000 Pa at 20 °C and dropping 280 Pa per degree, the pressure reaches zero 82,000/280 ≈ 293 degrees lower, at 20 − 293 ≈ −273 °C, absolute zero; (c) the slope is nR/V, so n = (slope)V/R = (280)(1.5 × 10⁻³)/8.31 ≈ 0.051 mol, and the check n = PV/(RT) = (82,000)(1.5 × 10⁻³)/((8.31)(293)) ≈ 0.051 mol agrees; (d) the slope nR/V doubles, to 560 Pa/K (5.6 × 10² Pa/K), but the line still reaches P = 0 at −273 °C, the same for any amount and any bulb.',
      pitfalls: [
        'Using the Celsius ratio 127/27.',
        'Inverting the volume ratio in Boyle\'s law.',
        'Measuring the drop to absolute zero from 0 °C when the first reading is at 20 °C.',
        'Leaving the slope in kPa/K when finding n.',
        'Expecting a steeper line to meet the axis at a different temperature.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-general-chemistry-solutions-gases-mcat'],
      checkpoint: [
        {
          question: 'A sealed syringe holds 30 mL of air at 1.0 × 10⁵ Pa and 27 °C. The plunger is pulled out to 90 mL at constant temperature, then held there while the air is cooled to −73 °C. What is the final pressure?',
          options: ['2.0 × 10⁵ Pa', '2.2 × 10⁴ Pa', '3.3 × 10⁴ Pa', '5.0 × 10⁴ Pa'],
          correctAnswer: 1,
          explanation:
            'Boyle\'s law first: three times the volume gives one-third the pressure, 3.3 × 10⁴ Pa. Then at fixed volume P ∝ T in kelvin, 300 K → 200 K: (3.33 × 10⁴)(200/300) ≈ 2.2 × 10⁴ Pa. 2.0 × 10⁵ Pa inverts the volume ratio, as if pulling the plunger out raised the pressure; 3.3 × 10⁴ Pa skips the cooling step; and 5.0 × 10⁴ Pa inverts the temperature ratio.',
        },
        {
          question: 'A sealed bulb of volume 2.5 × 10⁻³ m³ reads 90.0 kPa at 0 °C and 123.0 kPa at 100 °C, on a straight line. How many moles of gas does it hold? (R = 8.31 J/(mol·K))',
          options: ['9.9 × 10⁻⁵ mol', '1.6 × 10⁴ mol', '3.7 × 10⁻¹ mol', '9.9 × 10⁻² mol'],
          correctAnswer: 3,
          explanation:
            'slope = 33.0 kPa/100 K = 330 Pa/K, and slope = nR/V, so n = (330)(2.5 × 10⁻³)/8.31 ≈ 9.9 × 10⁻² mol (about 0.099 mol; PV/(RT) at 273 K agrees). 9.9 × 10⁻⁵ mol leaves the slope in kPa/K; 1.6 × 10⁴ mol divides the slope by the volume instead of multiplying; and 3.7 × 10⁻¹ mol uses PV/(RT) with 100 instead of 373 K.',
        },
        {
          question: 'A sealed bulb\'s pressure-against-temperature line reaches zero pressure at −273 °C. The same amount of the same gas is moved into a bulb with one-third the volume. Compared with the first line, its line has:',
          options: [
            'Three times the slope, same intercept',
            'The same slope, intercept at −91 °C',
            'One-third the slope, same intercept',
            'Triple the slope, intercept at −91 °C',
          ],
          correctAnswer: 0,
          explanation:
            'The slope is nR/V, so one-third the volume triples it, while every ideal-gas line still reaches zero pressure at absolute zero, −273 °C. "Intercept at −91 °C" divides absolute zero by 3, as if it depended on the bulb; "the same slope" forgets that V is in the slope; and "one-third the slope" puts V in the numerator, inverting nR/V.',
        },
      ],
    },
    // ── 7 · Kinetic theory of gases (concepts) ───────────────────────────
    {
      title: 'Kinetic Theory of Gases',
      minutes: 7.5,
      goal: 'Connect temperature to the average kinetic energy of gas molecules, find and compare rms speeds, and read the spread of speeds in a Maxwell–Boltzmann distribution.',
      keyPoints: [
        'Temperature measures the average translational kinetic energy of the molecules: K_avg = (3/2)k_BT, with T in kelvin. It depends on temperature ALONE, not on the kind of gas, the mass of a molecule, the pressure or the volume: at the same temperature, a helium atom and a nitrogen molecule have the same average kinetic energy. Double the kelvin temperature and K_avg doubles; in this classical model, motion would stop at 0 K.',
        'Add it up over N molecules: the total translational kinetic energy is N(3/2)k_BT = (3/2)nRT. For a monatomic ideal gas, that is all of its internal energy, so the internal energy of an ideal gas depends only on its temperature.',
        'Root-mean-square speed: setting ½mv_rms² = (3/2)k_BT gives v_rms = √(3k_BT/m) = √(3RT/M), with m the mass of one molecule in kg, or M the molar mass in kg/mol. Nitrogen at 300 K: about 520 m/s. Because v_rms ∝ √T, doubling the kelvin temperature multiplies the speed by √2 ≈ 1.41; it takes four times the temperature to double the speed.',
        'Lighter molecules are faster at the same temperature: the same ½mv² with a smaller m needs a larger v, so v₁/v₂ = √(M₂/M₁). Helium (4 g/mol) moves √(28/4) = √7 ≈ 2.6 times as fast as nitrogen (28 g/mol), with the same average kinetic energy.',
        'Not every molecule has the rms speed. The Maxwell–Boltzmann distribution shows how many molecules have each speed: it starts at zero, rises to a peak and trails off in a long tail toward high speeds, and the rms speed sits a little to the right of the peak, pulled up by the tail. Heating shifts the curve to higher speeds and spreads it out, so its peak drops while the area under it, the number of molecules, stays the same. A lighter gas at the same temperature has a curve shifted to higher speeds.',
        'Effusion, a gas escaping through a tiny hole, follows the same speeds: Graham\'s law, rate_A/rate_B = √(M_B/M_A), so the lighter gas escapes faster, by the square root of the mass ratio, not the ratio itself. Hydrogen (2 g/mol) effuses √(32/2) = 4 times as fast as oxygen (32 g/mol). Diffusion through another gas follows the same trend.',
      ],
      showOnScreen: [
        'A thermometer beside a box of molecules, K_avg = (3/2)k_BT appearing; then a helium atom and a nitrogen molecule side by side with equal kinetic-energy bars but different speed arrows',
        'N molecules\' energy bars stacking into a total, (3/2)nRT, labeled "the internal energy of a monatomic ideal gas"',
        '½mv_rms² = (3/2)k_BT rearranged step by step to v_rms = √(3RT/M), the nitrogen readout at 520 m/s, then a temperature dial at ×2 (speed ×1.41) and ×4 (speed ×2)',
        'A race at one temperature: helium, nitrogen and carbon dioxide molecules with speed arrows shrinking as the mass grows, and v₁/v₂ = √(M₂/M₁) with the √7 ≈ 2.6 example',
        'A Maxwell–Boltzmann curve drawn with its peak and tail labeled and an rms marker just right of the peak; then a hotter curve sliding right, flattening and broadening with equal shaded areas; then a lighter gas\'s curve at the same temperature shifted right',
        'Two gases leaking through a pinhole, the lighter one streaming out faster, with rate_A/rate_B = √(M_B/M_A) and the hydrogen–oxygen factor of 4',
        'The "Remember" recap (shared ideas only): K_avg = (3/2)k_BT, set by T alone; total (3/2)nRT; v_rms = √(3RT/M); v ∝ √T; lighter is faster, by √(M₂/M₁); a spread of speeds, rms just right of the peak; hotter curves shift right and flatten',
        'End card: "Up next: Kinetic Theory of Gases: Worked Examples"',
      ],
      pitfalls: [
        'Saying heavier molecules have more kinetic energy at the same temperature.',
        'Doubling the speed when the temperature doubles.',
        'Using a Celsius temperature in K_avg = (3/2)k_BT.',
        'Putting the molar mass in g/mol into √(3RT/M).',
        'Forgetting the square root in a speed or effusion ratio.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-general-chemistry-solutions-gases-mcat', 'mcat-general-chemistry-thermodynamics-mcat'],
      mcatOnly: [
        'Effusion, a gas escaping through a tiny hole, follows the same speeds: Graham\'s law, rate_A/rate_B = √(M_B/M_A), so the lighter gas escapes faster, by the square root of the mass ratio, not the ratio itself. Hydrogen (2 g/mol) effuses √(32/2) = 4 times as fast as oxygen (32 g/mol). Diffusion through another gas follows the same trend.',
      ],
      mcatOnlyQuestions: [2],
      checkpoint: [
        {
          question: 'Container 1 holds helium (4 g/mol) at 600 K. Container 2 holds oxygen (32 g/mol) at 300 K. Which gas has the greater average kinetic energy per molecule, and which has the greater rms speed?',
          options: [
            'Helium: more energy and more speed',
            'Oxygen: more energy and more speed',
            'Equal energy; helium has more speed',
            'Oxygen more energy; helium more speed',
          ],
          correctAnswer: 0,
          explanation:
            'K_avg = (3/2)k_BT, and helium is at twice the temperature, so it has twice the average kinetic energy. v_rms = √(3RT/M) favors helium twice over, with a higher T and a smaller M: √((600/4)/(300/32)) = √16 = 4 times as fast. "Oxygen: more of both" lets the heavier molecule carry more energy; "equal energy" applies the same-temperature rule when the temperatures differ; and "oxygen more energy" gets the speeds right but still ties kinetic energy to mass.',
        },
        {
          question: 'On a Maxwell–Boltzmann speed distribution for a gas, where does the rms speed lie?',
          options: ['Exactly at the peak itself', 'Far out at the end of the tail', 'Slightly right of the peak', 'Slightly left of the peak'],
          correctAnswer: 2,
          explanation:
            'The curve has a long tail toward high speeds, and the rms speed averages v², which weights those fast molecules heavily, so it sits a little to the right of the peak. "At the peak" confuses the rms speed with the most common speed; "the end of the tail" treats it as the top speed, which only a few molecules reach; and "left of the peak" lets the slower molecules dominate the average.',
        },
        {
          question: 'Ammonia (NH₃, 17 g/mol) and hydrogen chloride (HCl, 36 g/mol) are released at the same moment from opposite ends of a long tube at the same temperature. Which gas diffuses faster, and by about what factor?',
          options: ['HCl, about 1.5 times as fast', 'NH₃, about 1.5 times as fast', 'NH₃, about 2.1 times as fast', 'HCl, about 2.1 times as fast'],
          correctAnswer: 1,
          explanation:
            'Graham\'s law: rate_NH₃/rate_HCl = √(36/17) = √2.1 ≈ 1.5, so the lighter ammonia moves about 1.5 times as fast and the two gases meet nearer the HCl end. "NH₃, 2.1 times" forgets the square root; "HCl, 1.5 times" lets the heavier gas move faster; and "HCl, 2.1 times" makes both mistakes.',
        },
      ],
    },
    // ── 8 · Kinetic theory of gases (worked examples) ────────────────────
    {
      title: 'Kinetic Theory of Gases: Worked Examples',
      minutes: 6,
      goal: 'Find the average kinetic energy and rms speed of gas molecules, the temperature that gives a chosen speed, and compare the gases in a mixture.',
      keyPoints: [
        'Kelvin first, then K_avg = (3/2)k_BT for one molecule and (3/2)nRT for the whole sample of a monatomic gas.',
        'v_rms = √(3RT/M) with M in kg/mol (divide g/mol by 1,000), or √(3k_BT/m) with m = M/N_A for one molecule; both routes agree.',
        'For a target speed, solve backward: T = Mv²/(3R), squaring the speed.',
        'In a mixture at one temperature, every gas has the same K_avg, and the rms speeds scale as √(M₂/M₁).',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: a neon tank at 27 °C, the 300 K conversion card, K_avg = 6.2 × 10⁻²¹ J, v_rms = 610 m/s with M = 0.020 kg/mol, the single-atom check (m = 3.3 × 10⁻²⁶ kg) giving the same energy, then a thermometer dropping to 72 K as the speed falls to 300 m/s',
        'Example 2: a balloon of helium and methane at 47 °C, equal energy bars of 6.6 × 10⁻²¹ J, helium\'s 1.4 × 10³ m/s arrow twice as long as methane\'s 7.1 × 10² m/s, then the 0.50 mol of helium with its 2.0 × 10³ J total',
        'The "Remember" recap of the method: kelvin first; (3/2)k_BT per molecule, (3/2)nRT in total; √(3RT/M) with M in kg/mol; T = Mv²/(3R); same T, same K_avg, speeds as √(M₂/M₁)',
        'End card: "Up next: Work and PV Diagrams"',
      ],
      workedExample:
        'Example 1: A tank holds neon gas (molar mass 20 g/mol) at 27 °C. Use k_B = 1.38 × 10⁻²³ J/K, R = 8.31 J/(mol·K) and N_A = 6.02 × 10²³ per mole. (a) What is the average translational kinetic energy of a neon atom? (b) What is the rms speed of the atoms? (c) What is the mass of one neon atom, and does ½mv_rms² agree with (a)? (d) To what temperature must the neon be cooled for its rms speed to drop to 300 m/s? (a) T = 27 + 273 = 300 K, so K_avg = (3/2)k_BT = (1.5)(1.38 × 10⁻²³)(300) ≈ 6.2 × 10⁻²¹ J; (b) with M = 0.020 kg/mol, v_rms = √(3RT/M) = √((3)(8.31)(300)/0.020) = √374,000 ≈ 610 m/s; (c) m = M/N_A = 0.020/(6.02 × 10²³) ≈ 3.3 × 10⁻²⁶ kg, and ½mv_rms² = (0.5)(3.32 × 10⁻²⁶)(374,000) ≈ 6.2 × 10⁻²¹ J, matching (a); (d) T = Mv²/(3R) = (0.020)(300)²/((3)(8.31)) = 1,800/24.9 ≈ 72 K, about −201 °C; as a check, the speed is multiplied by 300/611 ≈ 0.49, so the kelvin temperature is multiplied by (0.49)² ≈ 0.24, and 0.24 × 300 K ≈ 72 K. Example 2: A balloon holds a mixture of helium (4.0 g/mol) and methane (16 g/mol) at 47 °C. Use k_B = 1.38 × 10⁻²³ J/K and R = 8.31 J/(mol·K). (a) Which molecules have the greater average translational kinetic energy, and what is it? (b) What is the rms speed of the helium atoms? (c) What is the rms speed of the methane molecules? (d) The balloon holds 0.50 mol of helium. What is the total translational kinetic energy of the helium? (a) Neither: at T = 47 + 273 = 320 K both have K_avg = (1.5)(1.38 × 10⁻²³)(320) ≈ 6.6 × 10⁻²¹ J; (b) v_rms = √((3)(8.31)(320)/0.0040) = √(1.99 × 10⁶) ≈ 1.4 × 10³ m/s; (c) methane is 4 times as heavy, so it is √4 = 2 times slower: about 7.1 × 10² m/s, which √((3)(8.31)(320)/0.016) ≈ 706 m/s confirms; (d) (3/2)nRT = (1.5)(0.50)(8.31)(320) ≈ 2.0 × 10³ J.',
      pitfalls: [
        'Using 27 °C or 47 °C instead of 300 K or 320 K.',
        'Leaving M in g/mol, which makes the speed about 32 times too small.',
        'Forgetting to square the speed when solving for T.',
        'Giving the heavier gas in a mixture the greater kinetic energy.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-general-chemistry-solutions-gases-mcat', 'mcat-general-chemistry-thermodynamics-mcat'],
      checkpoint: [
        {
          question: 'What is the rms speed of argon atoms (molar mass 40 g/mol) at 77 °C? (R = 8.31 J/(mol·K))',
          options: ['15 m/s', '220 m/s', '270 m/s', '470 m/s'],
          correctAnswer: 3,
          explanation:
            'T = 77 + 273 = 350 K and M = 0.040 kg/mol, so v_rms = √((3)(8.31)(350)/0.040) = √218,000 ≈ 470 m/s. 15 m/s leaves M as 40 instead of 0.040 kg/mol; 220 m/s uses 77 instead of 350 K; and 270 m/s drops the 3 from √(3RT/M).',
        },
        {
          question: 'At what temperature do nitrogen molecules (molar mass 28 g/mol) have an rms speed of 400 m/s? (R = 8.31 J/(mol·K))',
          options: ['1.8 × 10² K', '5.4 × 10² K', '1.8 × 10⁵ K', '4.5 × 10⁻¹ K'],
          correctAnswer: 0,
          explanation:
            'T = Mv²/(3R) = (0.028)(400)²/((3)(8.31)) = 4,480/24.9 ≈ 1.8 × 10² K, about 180 K. 5.4 × 10² K leaves out the 3; 1.8 × 10⁵ K uses 28 instead of 0.028 kg/mol; and 4.5 × 10⁻¹ K forgets to square the speed.',
        },
        {
          question: 'A tank holds a mixture of neon (20 g/mol) and gas X (80 g/mol) in thermal equilibrium. The neon atoms have an rms speed of 600 m/s. What is the rms speed of the X molecules, and how do the two gases\' average kinetic energies compare?',
          options: [
            '150 m/s; equal average energy',
            '300 m/s; equal average energy',
            '300 m/s; X has 4 times the energy',
            '1,200 m/s; equal average energy',
          ],
          correctAnswer: 1,
          explanation:
            'Thermal equilibrium means one temperature, so both gases have the same K_avg, and the speeds scale as √(M_Ne/M_X) = √(20/80) = 1/2: 300 m/s. 150 m/s divides by the mass ratio 4 without the square root; "X has 4 times the energy" gets the speed right but gives the heavier molecules more energy at the same temperature; and 1,200 m/s makes the heavier gas the faster one.',
        },
      ],
    },
  ],
}
