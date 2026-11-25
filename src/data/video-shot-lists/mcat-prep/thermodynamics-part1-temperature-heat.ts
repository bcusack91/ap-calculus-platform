import type { ShotList } from '../types'

/**
 * Shot list: MCAT Physics — Thermodynamics Part 1: Temperature, Heat & Heat Transfer
 * (topic mcat-general-chemistry-thermodynamics-mcat; the first of three Thermodynamics video parts.
 * Part 2 is gases and kinetic theory, Part 3 is the laws of thermodynamics).
 *
 * Sources: the AP Physics 2 lessons physics2-temperature-part1..2 (temperature as average kinetic
 * energy, the three scales, thermal equilibrium and the zeroth law, thermometers; parts 3–7 are gases
 * for video Part 2) and physics2-heat-part1..7 (heat vs. temperature, specific heat, calorimetry and
 * unknown specific heat, the three transfer mechanisms, conduction rates and two-layer walls, the
 * thermos and everyday applications, the synthesis review); the MCAT lesson
 * mcat-mcat-general-chemistry-thermodynamics-mcat-part1..5, of which this video takes only the physics:
 * Part 1's q = mcΔT and coffee-cup calorimetry, Part 2's zeroth law, heat transfer and thermal
 * expansion, and Part 4's phase changes and heating curves (enthalpy, Hess's law, entropy, Gibbs
 * energy, phase diagrams and colligative properties are chemistry and are left out; the first law and
 * entropy belong to video Part 3); the deck figures in src/data/deck-figures/mcat-cp-thermodynamics.ts
 * (the six phase changes, and the ice-to-steam heating curve drawn to scale in heat); and the exit
 * pools to avoid (the MCAT lesson-built pool and the temperature-thermal-expansion and
 * heat-specific-heat items in src/data/exit-quizzes/ap-physics-2.ts, which the AP Physics 2 unit test
 * also draws from).
 * Eight Manim clips in four pairs (owner format, Nov 2026): a CONCEPT clip that teaches the idea and ends
 * on the "Remember" recap, then a WORKED-EXAMPLES clip with two examples, each shown in full with lettered
 * parts and a pause-and-try prompt before the solution. Concept clips get conceptual checkpoint
 * questions; worked-example clips get questions that mirror their two examples with new numbers.
 * Clips 1–2 follow temperature, the scales and thermal equilibrium (AP temperature Parts 1–2; MCAT
 * Part 2's zeroth law). Clips 3–4 follow heat, specific heat and calorimetry (AP heat Parts 1–3 and 7;
 * MCAT Part 1). Clips 5–6 follow conduction, convection and radiation (AP heat Parts 4–6; MCAT Part 2).
 * Clips 7–8 follow phase changes, latent heat, heating curves and thermal expansion (MCAT Parts 2 and 4).
 *
 * REUSE FOR AP PHYSICS 2 (topics temperature-thermal-expansion for clips 1–2, heat-specific-heat for
 * clips 3–6): each clip is cut into sections, about one per key point, and the AP lesson takes only the
 * SHARED sections. MCAT-only material sits in key points of its own, listed word for word in
 * `mcatOnly`, with any question that depends on it listed in `mcatOnlyQuestions`:
 *   clip 3: grams, calories and the coffee-cup sign flip (1 key point, question 3)
 *   clips 7–8: MCAT-only IN FULL (every key point in `mcatOnly`, all three questions in
 *              `mcatOnlyQuestions`): AP Physics 2 Unit 9 does not include latent heat, heating curves
 *              or thermal expansion
 * THE AP CUT OF PART 1 IS CLIPS 1–6. Clip 6's end card still names clip 7 ("Up next: Phase Changes and
 * Thermal Expansion"); the AP lesson ends there. Clips 1, 2, 4, 5 and 6 are shared in full, and every
 * worked example in clips 2, 4 and 6 is a valid AP Physics 2 problem. Every "Remember" recap in
 * clips 1–6 covers shared ideas only.
 * Symbols follow the AP equation sheet: Q = mcΔT, P = Q/Δt = kAΔT/L, K_avg = (3/2)k_BT,
 * T(K) = T(°C) + 273. Clips 3–6 use SI units: c in J/(kg·K) (a kelvin step equals a Celsius degree, so
 * ΔT may be read in either), c_water = 4,186 J/(kg·K), k in W/(m·K). Clips 7–8 (MCAT-only) work in grams
 * and moles as the MCAT lesson does: c_water = 4.18, c_ice = 2.09, c_steam = 2.01 J/(g·°C),
 * ΔH_fus = 6.01 kJ/mol (L_f = 334 J/g) and ΔH_vap = 40.7 kJ/mol (L_v = 2,260 J/g), M_water = 18 g/mol,
 * and ΔL = αL₀ΔT. Every ratio of kinetic energies uses kelvin, said on screen. Q > 0 means energy into
 * the system. The first law (ΔU = Q + W, W done ON the gas) is Part 3; clip 3 only says that work is a
 * second way to change internal energy.
 *
 * The checkpoint questions are what a YouTube viewer answers at studymondo.com/v/<code>
 * (src/data/video-short-links.ts). Codes (fixed by the series plan): temp1/temp2, calor1/calor2,
 * conduct1/conduct2, phase1/phase2. They use new scenarios and numbers, so they never repeat an
 * exit-quiz item or a worked example.
 */
export const shotList: ShotList = {
  courseSlug: 'mcat-prep',
  topicSlug: 'mcat-general-chemistry-thermodynamics-mcat',
  title: 'Thermodynamics Part 1: Temperature, Heat & Heat Transfer',
  overview:
    'Eight animated clips in four pairs that build the physics of heat from the molecules up: what temperature measures and why physics uses kelvin, how objects in contact settle into thermal equilibrium, how much energy it takes to warm a substance and how calorimetry tracks that energy, how energy moves by conduction, convection and radiation, and what happens at a phase change and when a solid expands. Each idea gets a concept clip followed by a worked-examples clip in which every problem is shown in full, with a moment to pause and try it before the solution. Narration stays exam-neutral, and each clip is cut into sections so that introductory physics lessons can reuse the shared ones; the gram-and-calorie bridge and the whole phase-change pair sit in sections of their own. Each clip ends with three checkpoint questions. Part 2 continues with gas pressure from collisions.',
  clips: [
    // ── 1 · Temperature and thermal equilibrium (concepts) ───────────────
    {
      title: 'Temperature and Thermal Equilibrium',
      minutes: 7,
      goal: 'Explain what temperature measures at the molecular level, convert between the Celsius and kelvin scales, and predict which way energy flows between objects and when it stops.',
      keyPoints: [
        'Every object is made of particles in constant random motion. Temperature measures the AVERAGE translational kinetic energy of those particles: the hotter the object, the faster its particles move on average. It is an average, not a total, so a swimming pool at 25°C holds far more internal energy than a cup of boiling water, because it has vastly more molecules.',
        'The Celsius scale puts water\'s freezing point at 0°C and its boiling point at 100°C (at 1 atm). The kelvin scale uses the same size of step but starts at absolute zero, the lowest possible temperature: T(K) = T(°C) + 273, written "300 K" with no degree sign, and never negative. A CHANGE of 1°C is a change of 1 K. (Fahrenheit, with water freezing at 32°F and boiling at 212°F, is an everyday scale only; 1°C of change is 1.8°F.)',
        'Physics uses kelvin because the average kinetic energy is proportional to the absolute temperature: K_avg = (3/2)k_BT, with k_B = 1.38 × 10⁻²³ J/K and T in kelvin. Double the kelvin temperature and the average kinetic energy doubles. Doubling a Celsius reading does not: 20°C to 40°C is 293 K to 313 K, only about 7% more.',
        'Put a hot object against a cold one and energy flows from the HIGHER temperature to the lower one: at the boundary, faster particles collide with slower ones and pass energy across. The direction is set by temperature, not by which object holds more energy, so a hot nail warms a cool bathtub. The flow continues until the temperatures are equal; then there is no net transfer, and the objects are in thermal equilibrium, at a temperature between the two starting values.',
        'The zeroth law: if A is in thermal equilibrium with C, and B is in thermal equilibrium with C, then A and B are in thermal equilibrium with each other, at the same temperature, even if they never touch. This is why a thermometer works: it settles into equilibrium with what it touches and then reads its OWN temperature, using a property that changes steadily with temperature, such as the volume of a liquid column, an electrical resistance, or the pressure of a gas held at constant volume.',
      ],
      showOnScreen: [
        'Two boxes of jiggling particles side by side, one with fast particles (red, long speed trails) and one with slow ones (blue); a readout of the average kinetic energy beside each; then a small cup of fast particles beside a huge pool of slower ones, with "higher average" over the cup and "more total energy" over the pool',
        'Two thermometers side by side, Celsius and kelvin, aligned at water freezing (0°C, 273 K), water boiling (100°C, 373 K), body temperature (37°C, 310 K) and absolute zero (−273°C, 0 K); a bracket showing one Celsius step equals one kelvin step; a small Fahrenheit strip at the side marked "everyday only"',
        'K_avg = (3/2)k_BT written out with "T in kelvin" boxed; a bar for the average kinetic energy at 293 K doubling at 586 K, beside a 20°C → 40°C bar that grows only about 7%',
        'A hot block and a cold block pushed together: particles at the boundary colliding, an energy arrow from hot to cold, two temperature readouts closing in on each other and stopping at one value, the arrow fading out and the label "thermal equilibrium"; then a small hot nail dropped into a large cool tub with the arrow still pointing from the nail into the water',
        'The zeroth law as three objects A, B and C: A and C with an equals sign, B and C with an equals sign, then a dashed equals sign appearing between A and B; then a thermometer in a cup, its column rising and settling, labeled "reads its own temperature"',
        'The "Remember" recap: temperature = average kinetic energy of the particles; T(K) = T(°C) + 273; a 1°C change = a 1 K change; K_avg ∝ T in kelvin; energy flows from higher to lower temperature until they are equal; the zeroth law makes thermometers work',
        'End card: "Up next: Temperature and Thermal Equilibrium: Worked Examples"',
      ],
      pitfalls: [
        'Thinking an object with more total energy must be hotter.',
        'Taking ratios of Celsius temperatures, or doubling a Celsius reading to double the kinetic energy.',
        'Adding 273 to a temperature CHANGE.',
        'Saying "cold flows" into an object, or that equilibrium means equal energies rather than equal temperatures.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-general-chemistry-thermodynamics-mcat', 'mcat-general-chemistry-solutions-gases-mcat'],
      checkpoint: [
        {
          question: 'A sample of gas is at 27°C. To what temperature must it be heated to double the average kinetic energy of its molecules?',
          options: ['54°C', '600°C', '327°C', '927°C'],
          correctAnswer: 2,
          explanation:
            'Average kinetic energy is proportional to the KELVIN temperature: 27°C is 300 K, so doubling the energy takes 600 K, which is 600 − 273 = 327°C. 54°C doubles the Celsius reading, which has no physical meaning; 600°C doubles the kelvin value correctly but forgets to convert back to Celsius; and 927°C (1200 K) quadruples the absolute temperature, which is what doubling the molecules\' SPEED would take.',
        },
        {
          question: 'A small iron nail at 200°C is dropped into a bathtub of water at 30°C. The water holds far more internal energy than the nail. Which way does energy flow, and when does the flow stop?',
          options: [
            'From the nail to the water, until their temperatures are equal',
            'From the water to the nail, until both hold equal energy',
            'From the nail to the water, until their energies are equal',
            'From the water to the nail, until their temperatures are equal',
          ],
          correctAnswer: 0,
          explanation:
            'Energy flows from the higher temperature to the lower one, so from the nail to the water, and the net flow stops when the temperatures are equal: thermal equilibrium. "Until their energies are equal" confuses equilibrium with equal internal energies, which a tiny nail and a huge tub never reach; "from the water to the nail" lets the larger store of energy decide the direction, when only temperature does; and "until both hold equal energy" makes both mistakes.',
        },
        {
          question: 'A patient\'s temperature rises from 37.0°C to 39.0°C. By how much does it rise on the kelvin scale, and by about how much does the average kinetic energy of the molecules in the body grow?',
          options: [
            '2.0 K, and about 5% more average kinetic energy',
            '275 K, and about 0.6% more average kinetic energy',
            '3.6 K, and about 0.6% more average kinetic energy',
            '2.0 K, and about 0.6% more average kinetic energy',
          ],
          correctAnswer: 3,
          explanation:
            'A change of 2.0°C is a change of 2.0 K, since the steps are the same size. The average kinetic energy follows the kelvin temperature, 310 K to 312 K, a rise of about 2/310 ≈ 0.6%. "About 5%" takes the ratio of the Celsius readings, 39/37; 275 K adds 273 to a temperature change, which only applies to a reading; and 3.6 K multiplies by 1.8, the Fahrenheit factor.',
        },
      ],
    },
    // ── 2 · Temperature and thermal equilibrium (worked examples) ────────
    {
      title: 'Temperature and Thermal Equilibrium: Worked Examples',
      minutes: 6,
      goal: 'Convert temperatures to kelvin, compare average kinetic energies with kelvin ratios, and use the zeroth law to decide which objects are in equilibrium and which way energy will flow.',
      keyPoints: [
        'Convert every reading first: T(K) = T(°C) + 273. A temperature CHANGE is the same number in °C and in K.',
        'Compare average kinetic energies with a ratio of KELVIN temperatures, since K_avg = (3/2)k_BT; to scale the energy by a factor n, multiply the kelvin temperature by n, then convert back if a Celsius answer is wanted.',
        'Objects that each match the same thermometer reading are at the same temperature (the zeroth law), so no net energy flows between them, whatever their sizes.',
        'Between different temperatures, energy flows from hotter to colder, and the shared final temperature lies between the two starting values; finding it exactly needs the masses and specific heats, which is the next clip.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: three thermometers labeled liquid nitrogen (−196°C), room (20°C) and oven (227°C), each relabeled in kelvin (77 K, 293 K, 500 K); a kinetic-energy bar for the room growing 1.7 times for the oven, with the wrong Celsius ratio 227/20 ≈ 11 crossed out; the room bar doubling at 586 K = 313°C; then a bracket from −196°C to 20°C labeled 216°C = 216 K',
        'Example 2: blocks A, B and C each touched by one thermometer reading 35°C, 35°C and 50°C; an equals sign appearing between A and B; then B and C pushed together inside insulation with an energy arrow from C to B and the shared final reading somewhere between 35°C and 50°C; then a large block A touching a small bead B with no arrow at all',
        'The "Remember" recap of the method: kelvin first; a change is the same in °C and K; kinetic-energy ratios use kelvin; same reading, same temperature, no net flow; energy runs hot to cold and the final temperature lies between',
        'End card: "Up next: Specific Heat and Calorimetry"',
      ],
      workedExample:
        'Example 1: Liquid nitrogen boils at −196°C, a room is at 20°C, and an oven is set to 227°C. (a) Write each temperature in kelvin. (b) By what factor is the average translational kinetic energy of the air molecules in the oven larger than in the room? (c) At what Celsius temperature would the air molecules have twice the average kinetic energy they have in the room? (d) A sample is warmed from −196°C to 20°C. What is its temperature change in kelvin? (a) −196 + 273 = 77 K, 20 + 273 = 293 K and 227 + 273 = 500 K; (b) K_avg ∝ T in kelvin, so the factor is 500/293 ≈ 1.7, not the Celsius ratio 227/20 ≈ 11; (c) twice the energy needs twice the kelvin temperature, 2 × 293 = 586 K, which is 586 − 273 = 313°C, not 40°C; (d) the change is 20 − (−196) = 216°C, and a change in °C is the same number in K: 216 K. Example 2: A thermometer is touched to three blocks in turn, waiting each time until its reading stops changing. It reads 35°C on block A, 35°C on block B and 50°C on block C. (a) Which pairs of blocks are in thermal equilibrium with each other? (b) Blocks B and C are placed together inside an insulated box. Which way does energy flow? (c) What can you say about their final temperature? (d) Block A has a mass of 5.0 kg and block B is a 20 g bead. When A and B touch, what is the net energy flow between them? (a) Only A and B: each is in equilibrium with the thermometer at the same reading, so by the zeroth law they are in equilibrium with each other; C is at a different temperature from both; (b) from C to B, from the higher temperature to the lower; (c) they end at one shared temperature between 35°C and 50°C; where exactly depends on their masses and specific heats; (d) zero: they are already at the same temperature, and size does not matter, only temperature decides whether energy flows.',
      pitfalls: [
        'Taking the ratio of Celsius temperatures.',
        'Adding 273 to a temperature change.',
        'Forgetting to convert a doubled kelvin temperature back to Celsius.',
        'Assuming the larger block must give energy to the smaller one even at the same temperature.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-general-chemistry-thermodynamics-mcat', 'mcat-general-chemistry-solutions-gases-mcat'],
      checkpoint: [
        {
          question: 'Dry ice sublimes at −78°C. By what factor is the average translational kinetic energy of molecules in a 117°C oven larger than in the cold vapor above dry ice?',
          options: ['1.5', '2.0', '4.0', '1.4'],
          correctAnswer: 1,
          explanation:
            'Convert to kelvin: −78°C is 195 K and 117°C is 390 K, and the average kinetic energy is proportional to the kelvin temperature, so the factor is 390/195 = 2.0. 1.5 uses the Celsius values, 117/78, ignoring the sign and the offset; 4.0 squares the ratio, as if the energy grew with T²; and 1.4 (√2) is the factor for the molecules\' rms speed, not their kinetic energy.',
        },
        {
          question: 'At what Celsius temperature do gas molecules have three times the average translational kinetic energy they have at 7°C?',
          options: ['21°C', '840°C', '212°C', '567°C'],
          correctAnswer: 3,
          explanation:
            '7°C is 280 K. Three times the energy needs three times the kelvin temperature, 840 K, which is 840 − 273 = 567°C. 21°C triples the Celsius reading; 840°C stops at the kelvin value without converting back; and 212°C multiplies 280 K by √3, which would triple the energy only if it grew with T².',
        },
        {
          question: 'A thermometer settles at 70°C on block X and at 30°C on block Y. Block Z is already in thermal equilibrium with X. Z and Y are then placed together inside insulation. Which statement is correct?',
          options: [
            'No energy flows, since Z and Y are now in equilibrium',
            'Energy flows from Y to Z; both end between 30 and 70°C',
            'Energy flows from Z to Y; both end between 30 and 70°C',
            'Energy flows from Z to Y; both end at exactly 50°C',
          ],
          correctAnswer: 2,
          explanation:
            'Z is in equilibrium with X, so by the zeroth law it is at 70°C, hotter than Y at 30°C. Energy flows from Z to Y until they share one temperature between 30°C and 70°C. "No energy flows" misapplies the zeroth law, since Z matches X, not Y; "from Y to Z" runs the flow from cold to hot; and "exactly 50°C" assumes the halfway point, which holds only for identical blocks.',
        },
      ],
    },
    // ── 3 · Specific heat and calorimetry (concepts) ─────────────────────
    {
      title: 'Specific Heat and Calorimetry',
      minutes: 7,
      goal: 'Tell heat from temperature and internal energy, use Q = mcΔT to predict temperature changes, and explain how calorimetry uses conservation of energy to find a final temperature or an unknown specific heat.',
      keyPoints: [
        'Heat, Q, is energy transferred because of a temperature difference. It is energy in transit, not something an object contains: what an object has is internal energy, the total kinetic and potential energy of its particles. Heating is one way to change internal energy; work is another (a gas squeezed quickly in an insulated cylinder warms with no heating at all), which Part 3 takes up. Q is in joules, with Q > 0 for energy INTO the system and Q < 0 for energy out of it.',
        'The energy needed to change an object\'s temperature is Q = mcΔT, with ΔT = T_final − T_initial. The specific heat c is the energy that raises 1 kg of a material by 1 K, in J/(kg·K); a kelvin step equals a Celsius degree, so ΔT can be read in either. The sign is built in: warming gives ΔT > 0 and Q > 0, cooling gives both negative. Twice the mass needs twice the energy for the same ΔT, and the same energy gives a material with a smaller c a larger ΔT.',
        'Water\'s specific heat, 4,186 J/(kg·K), is unusually high: about 9 times that of iron (450) and nearly 11 times that of copper (390); aluminum is 900 and lead 128. So water warms and cools slowly. That is why coastal climates are mild, why water is used as a coolant, and why a body that is about 60% water holds its temperature steady.',
        'The product mc is the object\'s heat capacity, in J/K: the energy per kelvin for that whole object. Between two objects, the one with the larger mc changes temperature less for the same energy. A large mass can make up for a small specific heat.',
        'Calorimetry: inside an insulated container, energy moves only between the objects, so the energy lost by the hot ones equals the energy gained by the cold ones: Q_hot + Q_cold = 0, or ΣQ = 0. Write Q = mcΔT for each object with ΔT = T_f − T_i and the signs take care of themselves. The final temperature lies between the starting temperatures, nearer that of the object with the larger mc; two identical objects end exactly halfway. The same balance finds an unknown specific heat: heat a sample to a known temperature, drop it into known water, read the final temperature and solve for c.',
        'Chemistry writes the same law in grams: q = mcΔT with c_water = 4.18 J/(g·°C), and older energy units still appear: 1 cal = 4.184 J, and a food Calorie is 1 kcal = 4,184 J. In a coffee-cup calorimeter the water is the surroundings, so a reaction\'s heat is the opposite of the solution\'s: if the solution warms, the reaction released energy. Takeaway: the same Q = mcΔT, counted in grams and calories.',
      ],
      showOnScreen: [
        'A hot mug on a table with an energy arrow labeled Q leaving it while it is in transit, and a box inside the mug labeled "internal energy U"; then a piston slammed into an insulated cylinder with a thermometer rising and the label "no heat, still warmer: work"; then a system boundary with Q > 0 arrows going in and Q < 0 arrows coming out',
        'Q = mcΔT built term by term, with ΔT = T_f − T_i and the units J = kg × J/(kg·K) × K; then the mass doubled and the Q bar doubling',
        'A bar chart of specific heats (water 4,186, aluminum 900, iron 450, copper 390, lead 128 J/(kg·K)); equal masses of water and copper each given 1,000 J, the copper thermometer shooting up about 11 times as far; a coastline with mild sea air beside a hot inland desert',
        'Two objects drawn as tanks whose width is mc: the same amount of energy poured in raises the narrow tank a lot and the wide tank a little; a heavy iron block and a small cup of water whose tanks come out nearly equal',
        'An insulated cup: a hot block dropped into water, an energy arrow from block to water, the two thermometers meeting at a final value closer to the wider tank, with the bookkeeping Q_block + Q_water = 0 and a "lost = gained" balance; then two identical blocks meeting exactly halfway',
        'A food label reading 100 Calories beside "1 Cal = 1 kcal = 4,184 J", c_water = 4.18 J/(g·°C), and a coffee cup whose solution warms while the reaction arrow points energy out into it',
        'The "Remember" recap (shared ideas only): heat is energy in transit, internal energy is what an object has; Q = mcΔT, with Q > 0 into the system; water\'s c is high; the larger mc changes less; in an insulated container ΣQ = 0, and the final temperature lies between, nearer the larger mc',
        'End card: "Up next: Specific Heat and Calorimetry: Worked Examples"',
      ],
      pitfalls: [
        'Saying an object "contains heat" instead of internal energy.',
        'Thinking a temperature rise always means the object was heated.',
        'Assuming the final temperature of a mixture is halfway between the starting temperatures.',
        'Comparing specific heats alone and ignoring the masses.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-general-chemistry-thermodynamics-mcat'],
      mcatOnly: [
        'Chemistry writes the same law in grams: q = mcΔT with c_water = 4.18 J/(g·°C), and older energy units still appear: 1 cal = 4.184 J, and a food Calorie is 1 kcal = 4,184 J. In a coffee-cup calorimeter the water is the surroundings, so a reaction\'s heat is the opposite of the solution\'s: if the solution warms, the reaction released energy. Takeaway: the same Q = mcΔT, counted in grams and calories.',
      ],
      mcatOnlyQuestions: [2],
      checkpoint: [
        {
          question: 'A hot iron block is dropped into cold water in an insulated cup and left until nothing more changes. Which quantity is the same in size for the block and the water?',
          options: [
            'The energy each one transfers',
            'The temperature change of each',
            'The specific heat of each one',
            'The internal energy each ends with',
          ],
          correctAnswer: 0,
          explanation:
            'In an insulated cup, energy moves only between the block and the water, so the energy the block loses equals the energy the water gains: Q_block = −Q_water. The temperature changes differ, because the two have different values of mc; specific heat is a property of each material and does not change; and the final internal energies depend on mass and material, so only the temperatures end equal, not the energies.',
        },
        {
          question: 'A 1.0 kg iron block (c = 450 J/(kg·K)) at 80°C is placed in 0.10 kg of water (c = 4,186 J/(kg·K)) at 20°C inside insulation. The final temperature will be:',
          options: [
            'Near 20°C, since water has the larger specific heat',
            'Exactly 50°C, halfway between the two starts',
            'A little above 50°C, as iron has the larger mc',
            'Near 80°C, since the iron has ten times the mass',
          ],
          correctAnswer: 2,
          explanation:
            'Compare the heat capacities, not the specific heats: the iron has mc = (1.0)(450) = 450 J/K and the water (0.10)(4,186) ≈ 419 J/K. They are nearly equal, with the iron slightly larger, so the final temperature lies a little above halfway, about 51°C. "Near 20°C" looks only at c and ignores the masses; "exactly 50°C" would need equal values of mc; and "near 80°C" looks only at the masses and ignores that water\'s c is about 9 times iron\'s.',
        },
        {
          question: 'If all the energy in a 100-Calorie snack (1 Calorie = 1 kcal = 4,184 J) went into warming 60 kg of water (c = 4.18 J/(g·°C)), the water\'s temperature would rise by about:',
          options: ['1700°C', '0.0017°C', '0.40°C', '1.7°C'],
          correctAnswer: 3,
          explanation:
            'The snack holds 100 × 4,184 ≈ 4.18 × 10⁵ J, and the water has mc = (60,000 g)(4.18 J/(g·°C)) ≈ 2.5 × 10⁵ J/°C, so ΔT ≈ 1.7°C. 1700°C puts the mass in kilograms while c is per gram; 0.0017°C reads a food Calorie as a small calorie, 4.184 J; and 0.40°C forgets to convert calories to joules.',
        },
      ],
    },
    // ── 4 · Specific heat and calorimetry (worked examples) ──────────────
    {
      title: 'Specific Heat and Calorimetry: Worked Examples',
      minutes: 6.5,
      goal: 'Find the energy to heat an object and its container, the final temperature when a hot object meets cold water, and an unknown specific heat from a calorimetry measurement.',
      keyPoints: [
        'Energy to heat: Q = mcΔT for each object that warms, using ΔT = T_f − T_i, then add them. The container warms too.',
        'Predict first: the final temperature lies between the starting values, nearer the object with the larger mc.',
        'Calorimetry: Q_hot + Q_cold = 0, with each Q = mcΔT and every ΔT written as T_f − T_i; solve for the unknown.',
        'Unknown specific heat: find the energy the water gained, then c = |Q|/(m|ΔT|) using the sample\'s own mass and temperature drop.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: an aluminum pot holding water on a burner, the water\'s energy bar (5.0 × 10⁵ J) beside a much shorter pot bar (1.8 × 10⁴ J), the total, and a stopwatch running to 260 s at 2.0 kJ each second',
        'Example 2: a copper block dropped into water in an insulated cup, the two heat-capacity tanks (78 J/K and 2,093 J/K) showing why the final temperature lands near 20°C, the balance 78(T − 150) + 2,093(T − 20) = 0 solved to 25°C, the water\'s 9.8 × 10³ J gain; then the unknown metal in fresh water reaching 30°C, c = 20,930/(0.20 × 120) ≈ 8.7 × 10² J/(kg·K) and the label "close to aluminum"',
        'The "Remember" recap of the method: Q = mcΔT for everything that warms; predict from mc; Q_hot + Q_cold = 0 with ΔT = T_f − T_i; for an unknown c, the water\'s gain over the sample\'s m|ΔT|',
        'End card: "Up next: Heat Transfer"',
      ],
      workedExample:
        'Example 1: A 0.25 kg aluminum pot (c = 900 J/(kg·K)) holds 1.5 kg of water (c = 4,186 J/(kg·K)), both at 20°C. (a) How much energy does it take to bring the water to 100°C? (b) How much more energy does the pot itself need over the same temperature change? (c) A burner delivers 2.0 kJ of energy to the pot and water each second. Ignoring losses, how long does the heating take? (a) Q = mcΔT = (1.5)(4,186)(80) ≈ 5.0 × 10⁵ J; (b) Q = (0.25)(900)(80) = 1.8 × 10⁴ J, only about 3.5% of the total, because aluminum\'s c is small and the pot is light; (c) the total is 5.02 × 10⁵ + 0.18 × 10⁵ ≈ 5.2 × 10⁵ J, and t = (5.2 × 10⁵ J)/(2.0 × 10³ J/s) ≈ 2.6 × 10² s, a little over 4 minutes. Example 2: A 0.20 kg copper block (c = 390 J/(kg·K)) at 150°C is dropped into 0.50 kg of water (c = 4,186 J/(kg·K)) at 20°C in an insulated cup. Ignore the cup. (a) Before calculating, will the final temperature be nearer 20°C or 150°C? (b) What is the final temperature? (c) How much energy does the water gain? (d) In a second trial, a 0.20 kg block of an unknown metal at 150°C is dropped into a fresh 0.50 kg of water at 20°C, and the final temperature is 30°C. What is the metal\'s specific heat? (a) Nearer 20°C: the water\'s mc = (0.50)(4,186) = 2,093 J/K is far larger than the copper\'s (0.20)(390) = 78 J/K; (b) Q_Cu + Q_water = 0: 78(T − 150) + 2,093(T − 20) = 0, so 2,171T = 11,700 + 41,860 = 53,560 and T ≈ 24.7°C ≈ 25°C; (c) Q = (2,093)(24.7 − 20) ≈ 9.8 × 10³ J, and the copper loses the same amount; (d) the water gains (2,093)(30 − 20) = 20,930 J, and the metal loses that much while cooling by 150 − 30 = 120 K, so c = 20,930/((0.20)(120)) ≈ 8.7 × 10² J/(kg·K), close to aluminum\'s 900.',
      pitfalls: [
        'Forgetting that the container warms too.',
        'Using a temperature reading instead of the change ΔT.',
        'Writing ΔT backwards for the hot object, so the two Q\'s have the same sign.',
        'Using the water\'s temperature change for the sample when solving for its c.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-general-chemistry-thermodynamics-mcat'],
      checkpoint: [
        {
          question: 'How much energy does it take to warm 0.80 kg of water (c = 4,186 J/(kg·K)) from 15°C to 40°C in a 0.50 kg iron pot (c = 450 J/(kg·K)) that warms with it?',
          options: ['8.9 × 10⁴ J', '8.4 × 10⁴ J', '1.4 × 10⁵ J', '5.4 × 10⁴ J'],
          correctAnswer: 0,
          explanation:
            'Both warm by 25 K: the water needs (0.80)(4,186)(25) = 83,720 J and the pot (0.50)(450)(25) = 5,625 J, for about 8.9 × 10⁴ J. 8.4 × 10⁴ J leaves out the pot; 1.4 × 10⁵ J uses the final reading, 40°C, as ΔT; and 5.4 × 10⁴ J uses the starting reading, 15°C, as ΔT.',
        },
        {
          question: 'A 0.30 kg iron bolt (c = 450 J/(kg·K)) at 200°C is dropped into 1.0 kg of water (c = 4,186 J/(kg·K)) at 20°C in an insulated cup. What is the final temperature?',
          options: ['62°C', '110°C', '26°C', '190°C'],
          correctAnswer: 2,
          explanation:
            'The iron has mc = 135 J/K and the water 4,186 J/K. Setting 135(T − 200) + 4,186(T − 20) = 0 gives T = (27,000 + 83,720)/4,321 ≈ 26°C, close to the water\'s start, as its far larger mc predicts. 62°C weights the temperatures by mass alone, ignoring the specific heats; 110°C is the plain average; and 190°C swaps the two heat capacities.',
        },
        {
          question: 'A 0.40 kg sample at 100°C is dropped into 0.60 kg of water (c = 4,186 J/(kg·K)) at 18°C in an insulated cup. The final temperature is 22°C. What is the sample\'s specific heat?',
          options: ['1.4 × 10² J/(kg·K)', '2.5 × 10² J/(kg·K)', '1.8 × 10³ J/(kg·K)', '3.2 × 10² J/(kg·K)'],
          correctAnswer: 3,
          explanation:
            'The water gains (0.60)(4,186)(22 − 18) ≈ 10,050 J, and the sample loses that much while cooling by 100 − 22 = 78 K: c = 10,050/((0.40)(78)) ≈ 3.2 × 10² J/(kg·K). 1.4 × 10² swaps the two masses; 2.5 × 10² uses 100°C as the sample\'s drop instead of 78 K; and 1.8 × 10³ uses 22°C, a reading, as the water\'s change instead of 4 K.',
        },
      ],
    },
    // ── 5 · Heat transfer (concepts) ─────────────────────────────────────
    {
      title: 'Heat Transfer',
      minutes: 7.5,
      goal: 'Tell conduction, convection and radiation apart, predict how a conduction rate changes with area, thickness, material and temperature difference, and explain how layers, fluids and surfaces speed up or slow down heat transfer.',
      keyPoints: [
        'Energy moves from hotter to colder in three ways. Conduction passes it through direct contact; convection carries it with a moving fluid; radiation carries it as electromagnetic waves that need no medium at all.',
        'Conduction: in a solid, or between objects that touch, faster particles collide with slower neighbors and pass energy along; in metals, free electrons carry it quickly. The rate is P = Q/Δt = kAΔT/L, in watts: k is the material\'s thermal conductivity in W/(m·K), A the area, ΔT the temperature difference across the material and L its thickness. Twice the area or twice the ΔT doubles the rate; twice the thickness halves it. Copper has k ≈ 390, steel 50, glass 0.84, wood 0.15, foam 0.033 and still air 0.024 W/(m·K).',
        'A metal bench and a wooden bench at the same 0°C feel different because metal\'s high k pulls energy out of your hand faster: your skin senses the RATE of energy loss, not the temperature. Trapped, still air is an excellent insulator, which is why down jackets, fur, foam and double-pane windows work.',
        'Layers in a row, as in a wall of brick and foam: once the temperatures stop changing (steady state), energy cannot pile up at the boundary, so the SAME rate passes through every layer, and the temperature drops across the layers add up to the total. The poorly conducting layer needs a large ΔT to pass that rate, so it takes most of the drop.',
        'Convection: a fluid carries energy as it moves. Warmed fluid expands, becomes less dense and rises, while cooler, denser fluid sinks to take its place, setting up a convection loop (natural convection: a pot of soup, a radiator warming a room). A fan or a pump drives forced convection; the blood carries energy from the body\'s core to the skin this way. Convection cannot happen in a solid.',
        'Radiation: every object above absolute zero emits electromagnetic waves, and hotter objects emit far more, at shorter wavelengths: the power grows as AT⁴, with T in kelvin, so doubling the kelvin temperature gives 16 times the power. Dark surfaces absorb and emit well; shiny ones absorb and emit poorly. Every object also absorbs from its surroundings, so the net exchange runs from hotter to colder. A thermos uses all three ideas: a vacuum gap stops conduction and convection, and silvered walls cut radiation.',
      ],
      showOnScreen: [
        'A title strip with three icons: two touching blocks (conduction), a swirling loop of fluid (convection) and wavy arrows crossing empty space from the Sun (radiation)',
        'A metal rod with one end in a flame: particles jiggling and nudging their neighbors down the rod, free electrons streaking along; then a slab with A, L and ΔT labeled and P = kAΔT/L, each factor doubled in turn with the rate readout doubling or halving; a k table from copper to air',
        'A hand on a metal bench and a hand on a wooden bench, both thermometers reading 0°C, with a fat energy arrow leaving the hand on metal and a thin one on wood; then a down jacket with its trapped-air pockets highlighted',
        'A two-layer wall (brick and foam) with a temperature graph across it: a shallow drop through the brick and a steep drop through the foam, the same rate arrow passing through both layers, and the drops adding to the total',
        'A pot of soup on a burner with a convection loop rising in the middle and sinking at the sides; then a room with a heater near the floor and the loop rising past it; then blood vessels carrying warm blood from the core out to the skin',
        'A glowing object warming from 300 K to 600 K with its radiated-power bar growing 16 times and its glow shifting toward shorter wavelengths; a dark and a shiny plate in sunlight; a cutaway thermos with labels "vacuum: no conduction or convection" and "silvered walls: little radiation"',
        'The "Remember" recap: conduction by contact, P = kAΔT/L; convection by moving fluid, warm rises; radiation by EM waves, no medium, power ∝ AT⁴ in kelvin; same rate through layers in a row, the poor conductor takes most of the drop; metal feels colder because of the rate, not the temperature',
        'End card: "Up next: Heat Transfer: Worked Examples"',
      ],
      pitfalls: [
        'Saying "cold flows" into a hand, or that metal at the same temperature is colder.',
        'Forgetting that the rate falls as the thickness grows.',
        'Assuming each layer of a wall gets an equal share of the temperature drop.',
        'Thinking warm fluid sinks, or that convection can happen inside a solid.',
        'Using Celsius in the T⁴ dependence of radiation.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-general-chemistry-thermodynamics-mcat'],
      checkpoint: [
        {
          question: 'A glass pane is replaced by one of the same glass with twice the area and twice the thickness. The temperatures on each side stay the same. Compared with before, the conduction rate through the pane is:',
          options: [
            'The same, as the two changes cancel',
            'Four times as large, as both double',
            'Half as large, as the pane is thicker',
            'Twice as large, as the pane is bigger',
          ],
          correctAnswer: 0,
          explanation:
            'P = kAΔT/L: doubling A doubles the rate and doubling L halves it, so the rate is unchanged. "Four times" puts L in the numerator, as if thicker glass conducted more; "half" counts only the thickness; and "twice" counts only the area.',
        },
        {
          question: 'Air-conditioning vents are often placed high on a wall, and heaters near the floor. The best reason is that:',
          options: [
            'Cold air conducts downward faster than warm air',
            'Cool air sinks and warm air rises, making a loop',
            'Heaters radiate better close to the cold floor',
            'Warm air is denser, so it spreads along the floor',
          ],
          correctAnswer: 1,
          explanation:
            'Cool air is denser and sinks, warm air is less dense and rises, so air cooled near the ceiling or warmed near the floor sets up a convection loop that stirs the whole room. Air is a poor conductor, so conduction is not the main process; the placement is about the moving air, not radiation; and warm air is LESS dense, which is why it rises instead of spreading along the floor.',
        },
        {
          question: 'On a clear, still night, frost can form on a car roof even though the air around it stays slightly above 0°C. A clear night sky acts like a very cold surface above the roof. The main reason for the frost is that the roof:',
          options: [
            'Takes in cold from the sky by conduction',
            'Gains energy from warm air sinking onto it',
            'Has a high specific heat, so it stays cold',
            'Radiates to the cold sky more than it gains',
          ],
          correctAnswer: 3,
          explanation:
            'Every surface radiates, and a clear night sky sends back very little, so the roof loses energy by radiation faster than it receives it and cools below the air temperature. "Cold" is not something that flows, and conduction needs contact, which the sky does not provide; warm air rises rather than sinks, and air warmer than the roof would warm it, not chill it; and specific heat sets how fast the temperature changes, not which way.',
        },
      ],
    },
    // ── 6 · Heat transfer (worked examples) ──────────────────────────────
    {
      title: 'Heat Transfer: Worked Examples',
      minutes: 6.5,
      goal: 'Find the conduction rate through a slab, the energy lost over time and the thickness needed for a target rate, and solve a two-layer wall for its temperature drops, its boundary temperature and its rate.',
      keyPoints: [
        'Single slab: P = kAΔT/L with A in m², L in m and ΔT in K (the same number as in °C); the energy over a time is Q = PΔt with Δt in seconds.',
        'Working backward: L = kAΔT/P gives the thickness that holds the rate to a target.',
        'Two layers in a row: give each layer its own kA/L (watts per kelvin). The same rate passes through both, so the layer with the smaller kA/L takes the larger share of ΔT, and the shares add to the total.',
        'Then the rate is (kA/L)·ΔT for either layer, and the boundary temperature is the outside temperature plus the drop across the outer layer.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: a window pane 1.0 m × 1.2 m and 5.0 mm thick, 18°C on the inside face and 8.0°C on the outside, a "mm → m" reminder, the rate readout at 2.0 × 10³ W, an hour of energy stacking up to 7.3 × 10⁶ J, then a foam panel of the same area sliding over it and the rate dropping to 20 W at a thickness of 2.0 cm',
        'Example 2: the 12 m² wall in cross-section, foam inside and brick outside, each layer labeled with its kA/L (7.2 W/K and 72 W/K), a temperature graph falling 20 K across the foam and 2.0 K across the brick, the boundary marked 1.0°C, the same 144 W arrow through both layers, then the foam removed and the arrow swelling to 1.6 × 10³ W',
        'The "Remember" recap of the method: P = kAΔT/L in SI units; Q = PΔt; L = kAΔT/P; for layers, the same rate, ΔT shared in inverse proportion to kA/L',
        'End card: "Up next: Phase Changes and Thermal Expansion"',
      ],
      workedExample:
        'Example 1: A window pane is 1.0 m wide, 1.2 m tall and 5.0 mm thick, made of glass with k = 0.84 W/(m·K). Its inside face is at 18°C and its outside face at 8.0°C. (a) At what rate does energy conduct through the pane? (b) How much energy passes through it in one hour? (c) The glass is covered with a foam panel (k = 0.033 W/(m·K)) of the same area. If the faces of the foam differ by the same 10 K, how thick must the foam be to hold the rate to 20 W? (a) A = (1.0)(1.2) = 1.2 m², ΔT = 10 K and L = 0.0050 m, so P = kAΔT/L = (0.84)(1.2)(10)/0.0050 ≈ 2.0 × 10³ W; (b) Q = PΔt = (2,016 W)(3,600 s) ≈ 7.3 × 10⁶ J; (c) L = kAΔT/P = (0.033)(1.2)(10)/20 ≈ 0.020 m = 2.0 cm. Example 2: A 12 m² wall has 5.0 cm of foam (k = 0.030 W/(m·K)) on the inside and 10 cm of brick (k = 0.60 W/(m·K)) on the outside. The room is at 21°C and the outdoors at −1.0°C, and the wall has reached steady state. (a) Before calculating, which layer takes most of the temperature drop, and why? (b) What is the temperature drop across each layer? (c) What is the temperature where the foam meets the brick? (d) What is the rate of energy flow through the wall? (e) What would the rate be through the brick alone, with the same inside and outside temperatures? (a) The foam: its kA/L = (0.030)(12)/0.050 = 7.2 W/K is ten times smaller than the brick\'s (0.60)(12)/0.10 = 72 W/K, so it needs ten times the ΔT to pass the same rate; (b) ΔT_foam = 10 ΔT_brick and the two add to 22 K, so ΔT_brick = 2.0 K and ΔT_foam = 20 K; (c) 21 − 20 = 1.0°C, which matches −1.0 + 2.0 from the outside; (d) P = (72)(2.0) = 144 W ≈ 1.4 × 10² W, and the foam gives the same, (7.2)(20) = 144 W; (e) (72)(22) ≈ 1.6 × 10³ W, about 11 times as much: the thin foam layer does most of the insulating.',
      pitfalls: [
        'Leaving the thickness in millimeters or centimeters.',
        'Using a face temperature instead of the difference ΔT.',
        'Giving each layer the full temperature difference, or splitting it equally.',
        'Giving the larger share of ΔT to the better conductor.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-general-chemistry-thermodynamics-mcat'],
      checkpoint: [
        {
          question: 'A 0.60 m² wooden panel (k = 0.15 W/(m·K)) is 3.0 cm thick. One face is at 22°C and the other at 2.0°C. At what rate does energy conduct through it?',
          options: ['0.60 W', '60 W', '66 W', '100 W'],
          correctAnswer: 1,
          explanation:
            'P = kAΔT/L = (0.15)(0.60)(20)/0.030 = 60 W. 0.60 W leaves the thickness in centimeters, dividing by 3.0; 66 W uses the 22°C face temperature instead of the 20 K difference; and 100 W leaves out the area.',
        },
        {
          question: 'What thickness of foam (k = 0.030 W/(m·K)) holds the conduction rate through a 0.50 m² panel to 15 W when its faces differ by 30 K?',
          options: ['6.0 cm', '12 cm', '0.30 cm', '3.0 cm'],
          correctAnswer: 3,
          explanation:
            'L = kAΔT/P = (0.030)(0.50)(30)/15 = 0.030 m = 3.0 cm. 6.0 cm leaves out the area; 12 cm divides by the area instead of multiplying; and 0.30 cm converts 0.030 m to centimeters by multiplying by 10 instead of 100.',
        },
        {
          question: 'An 8.0 m² wall has 2.0 cm of wood (k = 0.10 W/(m·K)) and 3.0 cm of foam (k = 0.030 W/(m·K)) in a row, with a total temperature difference of 24 K. In steady state, what is the rate of energy flow through the wall?',
          options: ['160 W', '960 W', '190 W', '1,200 W'],
          correctAnswer: 0,
          explanation:
            'The wood has kA/L = (0.10)(8.0)/0.020 = 40 W/K and the foam (0.030)(8.0)/0.030 = 8.0 W/K. The same rate passes through both, so the drops split 1 to 5: 4.0 K across the wood and 20 K across the foam, and P = (40)(4.0) = 160 W. 960 W gives the wood the full 24 K; 190 W gives the foam the full 24 K; and 1,200 W adds the two kA/L values, as if the layers sat side by side instead of in a row.',
        },
      ],
    },
    // ── 7 · Phase changes and thermal expansion (concepts) — MCAT-only ───
    {
      title: 'Phase Changes and Thermal Expansion',
      minutes: 7,
      goal: 'Explain why temperature holds steady during a phase change, find the energy with Q = mL or q = nΔH, read a heating curve, and predict how much a solid expands when it warms.',
      keyPoints: [
        'During a phase change the temperature stays CONSTANT while energy keeps flowing in: the energy loosens or breaks the attractions between molecules, raising their potential energy, instead of speeding them up. The energy per gram is the latent heat, Q = mL. For water, L_f = 334 J/g to melt and L_v = 2,260 J/g to boil; chemistry writes the same thing per mole, q = nΔH, with ΔH_fus = 6.01 kJ/mol and ΔH_vap = 40.7 kJ/mol (times 18 g/mol, the same numbers). Use grams with L, and moles with ΔH.',
        'Melting, vaporization and sublimation absorb energy; freezing, condensation and deposition release exactly the same amount. Steam at 100°C burns worse than water at 100°C because it releases 2,260 J for every gram that condenses on the skin before it even starts to cool. Sweating cools the body the other way round: each gram that evaporates carries away about 2,400 J (a little more at skin temperature than at 100°C).',
        'A heating curve plots temperature against the energy added at a steady rate. On the sloped segments the temperature rises, Q = mcΔT, and the slope is 1/(mc): a STEEPER slope means a SMALLER specific heat, so the ice and steam segments climb about twice as steeply as the liquid-water one. The flat plateaus are the phase changes, at the melting and boiling points, and the boiling plateau is about 7 times as long as the melting one (40.7/6.01 ≈ 6.8).',
        'Most solids expand when they warm, because their atoms vibrate harder and sit a little farther apart on average. Each length grows by ΔL = αL₀ΔT, where α is the coefficient of linear expansion in 1/K (steel about 1.2 × 10⁻⁵, aluminum about 2.4 × 10⁻⁵, glass about 9 × 10⁻⁶) and ΔT may be in °C or K. Volumes grow too, by about 3α per kelvin for a solid. Bridges and rails get expansion gaps for this reason.',
        'Different materials expand by different amounts. A bimetallic strip of brass and steel bends when heated, with the brass, which expands more, on the outside of the curve; that bending runs many thermostats. Hot water loosens a metal lid on a glass jar because the metal expands more than the glass. Water is the famous exception: it is densest at 4°C and expands as it freezes, so ice floats and lakes freeze from the top down.',
      ],
      showOnScreen: [
        'A beaker of ice on a burner with a thermometer stuck at 0°C while an energy meter keeps climbing; inside, a molecular view of the lattice coming apart, labeled "energy goes into potential energy, not speed"; Q = mL beside q = nΔH with water\'s L and ΔH values',
        'The deck\'s six phase changes: solid, liquid and gas with arrows between them, the three toward gas in blue labeled "absorbs energy" and the three toward solid in red labeled "releases energy"; then steam condensing on a hand with a 2,260 J per gram arrow into the skin, and sweat beads evaporating off an arm with energy arrows leaving',
        'The deck\'s ice-to-steam heating curve, drawn to scale in heat: the ice slope, the melting plateau at 0°C, the liquid slope, the long boiling plateau at 100°C and the steam slope, with the slopes labeled 1/(mc) and the ice slope shown about twice as steep as the liquid one',
        'A steel rail between two blocks warming from cold to hot, a magnified gap closing, ΔL = αL₀ΔT written out, a small α table, and a bridge expansion joint',
        'A brass-and-steel strip curling with brass on the outside as a flame passes under it; a jar lid under a hot tap with the lid ring growing more than the glass rim; a lake in winter with 4°C water at the bottom and ice floating on top',
        'The "Remember" recap: during a phase change T holds and Q = mL (q = nΔH per mole); toward gas absorbs, toward solid releases; on a heating curve, steeper slope = smaller c, plateaus = phase changes; ΔL = αL₀ΔT; the material with the larger α expands more',
        'End card: "Up next: Phase Changes and Thermal Expansion: Worked Examples"',
      ],
      pitfalls: [
        'Thinking the temperature rises during melting or boiling.',
        'Using grams with ΔH in kJ/mol, or moles with c in J/(g·°C).',
        'Reading a steeper heating-curve slope as a LARGER specific heat.',
        'Using a temperature reading instead of ΔT in ΔL = αL₀ΔT.',
      ],
      lessonParts: [2, 4],
      mcatTags: ['mcat-general-chemistry-thermodynamics-mcat'],
      mcatOnly: [
        'During a phase change the temperature stays CONSTANT while energy keeps flowing in: the energy loosens or breaks the attractions between molecules, raising their potential energy, instead of speeding them up. The energy per gram is the latent heat, Q = mL. For water, L_f = 334 J/g to melt and L_v = 2,260 J/g to boil; chemistry writes the same thing per mole, q = nΔH, with ΔH_fus = 6.01 kJ/mol and ΔH_vap = 40.7 kJ/mol (times 18 g/mol, the same numbers). Use grams with L, and moles with ΔH.',
        'Melting, vaporization and sublimation absorb energy; freezing, condensation and deposition release exactly the same amount. Steam at 100°C burns worse than water at 100°C because it releases 2,260 J for every gram that condenses on the skin before it even starts to cool. Sweating cools the body the other way round: each gram that evaporates carries away about 2,400 J (a little more at skin temperature than at 100°C).',
        'A heating curve plots temperature against the energy added at a steady rate. On the sloped segments the temperature rises, Q = mcΔT, and the slope is 1/(mc): a STEEPER slope means a SMALLER specific heat, so the ice and steam segments climb about twice as steeply as the liquid-water one. The flat plateaus are the phase changes, at the melting and boiling points, and the boiling plateau is about 7 times as long as the melting one (40.7/6.01 ≈ 6.8).',
        'Most solids expand when they warm, because their atoms vibrate harder and sit a little farther apart on average. Each length grows by ΔL = αL₀ΔT, where α is the coefficient of linear expansion in 1/K (steel about 1.2 × 10⁻⁵, aluminum about 2.4 × 10⁻⁵, glass about 9 × 10⁻⁶) and ΔT may be in °C or K. Volumes grow too, by about 3α per kelvin for a solid. Bridges and rails get expansion gaps for this reason.',
        'Different materials expand by different amounts. A bimetallic strip of brass and steel bends when heated, with the brass, which expands more, on the outside of the curve; that bending runs many thermostats. Hot water loosens a metal lid on a glass jar because the metal expands more than the glass. Water is the famous exception: it is densest at 4°C and expands as it freezes, so ice floats and lakes freeze from the top down.',
      ],
      mcatOnlyQuestions: [0, 1, 2],
      checkpoint: [
        {
          question: 'A burn from steam at 100°C is usually worse than a burn from the same mass of water at 100°C. Why?',
          options: [
            'Steam is hotter than water that is boiling',
            'It releases latent heat as it condenses on skin',
            'Steam has a higher specific heat than water',
            'Steam conducts energy faster than water',
          ],
          correctAnswer: 1,
          explanation:
            'Both are at 100°C, but each gram of steam releases 2,260 J as it condenses on the skin, before the condensed water even begins to cool. "Hotter" ignores that both start at the same temperature; steam\'s specific heat (2.01 J/(g·°C)) is about half of liquid water\'s, not higher; and a gas conducts energy far more poorly than a liquid.',
        },
        {
          question: 'A solid is heated at a steady rate. On its heating curve, the solid segment climbs twice as steeply as the liquid segment that follows the melting plateau. What does this tell you?',
          options: [
            'The solid\'s specific heat is twice the liquid\'s',
            'The solid takes in energy twice as fast',
            'The solid\'s specific heat is half the liquid\'s',
            'The solid\'s latent heat is half the liquid\'s',
          ],
          correctAnswer: 2,
          explanation:
            'The slope of temperature against energy added is 1/(mc), and the mass is the same in both phases, so twice the slope means half the specific heat: the solid warms twice as fast for each joule. "Twice the liquid\'s" reads the slope backwards; the energy goes in at the same steady rate throughout; and latent heat sets the length of a plateau, not the slope of a segment.',
        },
        {
          question: 'A metal lid is stuck tight on a glass jar. Running hot water over the lid usually loosens it because:',
          options: [
            'The metal lid expands more than the glass rim',
            'The glass expands more and pushes the lid off',
            'The metal lid shrinks as its atoms speed up',
            'Both expand equally, so the grip lessens',
          ],
          correctAnswer: 0,
          explanation:
            'Metals have a larger coefficient of expansion than glass, so for the same warming the lid\'s ring grows more than the rim and the grip eases. If the glass expanded more, the lid would grip tighter; heated solids expand, they do not shrink; and if both grew by the same fraction, the fit would stay just as tight.',
        },
      ],
    },
    // ── 8 · Phase changes and thermal expansion (worked examples) — MCAT-only
    {
      title: 'Phase Changes and Thermal Expansion: Worked Examples',
      minutes: 6,
      goal: 'Add up the energy along a heating curve, with q = mcΔT on the slopes and q = nΔH on the plateaus, and find the expansion of a bridge span and the temperature change behind a given expansion.',
      keyPoints: [
        'Break a heating curve into steps: q = mcΔT for each slope, using grams with c in J/(g·°C), and q = nΔH for each plateau, using moles with ΔH in kJ/mol (or q = mL with L in J/g). Convert kJ to J before adding.',
        'The phase-change steps usually dominate: melting needs more energy than warming ice or warming water by a few tens of degrees, and boiling dwarfs everything else.',
        'Thermal expansion: ΔL = αL₀ΔT, with ΔT the change, not a reading; ΔL comes out in the units of L₀. Working backward, ΔT = ΔL/(αL₀).',
        'A material with twice the α expands twice as much over the same length and temperature change.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the heating curve for 90 g of ice from −20°C to 30°C, built segment by segment: the ice slope (3.8 × 10³ J), the melting plateau (3.0 × 10⁴ J) and the water slope (1.1 × 10⁴ J), with a stacked bar of the three totaling 4.5 × 10⁴ J and the melting block filling two-thirds of it',
        'Example 2: a 50 m steel bridge span between two abutments, a thermometer swinging from −10°C to 40°C, the expansion joint closing by 3.0 cm; an aluminum span beside it closing by 6.0 cm; then a 1.0 cm gap and the 17 K needed to close it; then a span installed at 15°C with a 1.5 cm joint',
        'The "Remember" recap of the method: grams on the slopes, moles on the plateaus, joules before adding; the plateaus dominate; ΔL = αL₀ΔT with a change, and ΔT = ΔL/(αL₀) backward',
        'End card: "Up next: Gas Pressure from Collisions"',
      ],
      workedExample:
        'Example 1: 90 g of ice (5.0 mol, at 18 g/mol) at −20°C is heated until it is liquid water at 30°C. Use c_ice = 2.09 J/(g·°C), c_water = 4.18 J/(g·°C) and ΔH_fus = 6.01 kJ/mol. (a) How much energy warms the ice to 0°C? (b) How much energy melts it? (c) How much energy warms the melted water to 30°C? (d) What is the total, and which step needs the most? (a) q = mcΔT = (90)(2.09)(20) ≈ 3.8 × 10³ J; (b) q = nΔH_fus = (5.0)(6,010) ≈ 3.0 × 10⁴ J, with the temperature held at 0°C the whole time (the same as (90 g)(334 J/g)); (c) q = (90)(4.18)(30) ≈ 1.1 × 10⁴ J; (d) 3,762 + 30,050 + 11,286 ≈ 4.5 × 10⁴ J, and melting is about two-thirds of it. Example 2: A steel bridge span (α = 1.2 × 10⁻⁵ /K) is 50 m long. Its temperature ranges from −10°C in winter to 40°C in summer. (a) How much longer is the span in summer than in winter? (b) How much would a 50 m aluminum span (α = 2.4 × 10⁻⁵ /K) lengthen over the same range? (c) By how much must the steel span\'s temperature rise for it to lengthen by 1.0 cm? (d) The steel span is installed on a 15°C day. How wide must its expansion gap be then, so that it just closes at 40°C? (a) ΔL = αL₀ΔT = (1.2 × 10⁻⁵)(50)(50) = 0.030 m = 3.0 cm; (b) twice the α, so twice the growth: (2.4 × 10⁻⁵)(50)(50) = 0.060 m = 6.0 cm; (c) ΔT = ΔL/(αL₀) = 0.010/((1.2 × 10⁻⁵)(50)) ≈ 17 K; (d) from 15°C to 40°C is 25 K, so ΔL = (1.2 × 10⁻⁵)(50)(25) = 0.015 m: a gap of 1.5 cm.',
      pitfalls: [
        'Leaving out the melting step, or multiplying grams by kJ/mol.',
        'Adding kilojoules to joules without converting.',
        'Using a temperature reading instead of the change in ΔL = αL₀ΔT.',
        'Leaving ΔL in meters when the question asks for centimeters, or the reverse.',
      ],
      lessonParts: [2, 4],
      mcatTags: ['mcat-general-chemistry-thermodynamics-mcat'],
      mcatOnly: [
        'Break a heating curve into steps: q = mcΔT for each slope, using grams with c in J/(g·°C), and q = nΔH for each plateau, using moles with ΔH in kJ/mol (or q = mL with L in J/g). Convert kJ to J before adding.',
        'The phase-change steps usually dominate: melting needs more energy than warming ice or warming water by a few tens of degrees, and boiling dwarfs everything else.',
        'Thermal expansion: ΔL = αL₀ΔT, with ΔT the change, not a reading; ΔL comes out in the units of L₀. Working backward, ΔT = ΔL/(αL₀).',
        'A material with twice the α expands twice as much over the same length and temperature change.',
      ],
      mcatOnlyQuestions: [0, 1, 2],
      checkpoint: [
        {
          question: 'How much energy turns 27 g (1.5 mol) of ice at 0°C into liquid water at 40°C? (c_water = 4.18 J/(g·°C); ΔH_fus = 6.01 kJ/mol)',
          options: ['4.5 × 10³ J', '9.0 × 10³ J', '1.4 × 10⁴ J', '1.7 × 10⁵ J'],
          correctAnswer: 2,
          explanation:
            'Melting takes (1.5 mol)(6,010 J/mol) ≈ 9,000 J, and warming the water takes (27)(4.18)(40) ≈ 4,500 J, for about 1.4 × 10⁴ J. 4.5 × 10³ J leaves out the melting plateau; 9.0 × 10³ J leaves out the warming; and 1.7 × 10⁵ J multiplies the 27 grams by the per-mole ΔH_fus.',
        },
        {
          question: 'How much energy is released when 9.0 g (0.50 mol) of steam at 100°C condenses and the water then cools to 30°C? (c_water = 4.18 J/(g·°C); ΔH_vap = 40.7 kJ/mol)',
          options: ['2.0 × 10⁴ J', '2.3 × 10⁴ J', '2.6 × 10³ J', '3.7 × 10⁵ J'],
          correctAnswer: 1,
          explanation:
            'Condensing releases (0.50 mol)(40,700 J/mol) ≈ 20,350 J, and cooling releases (9.0)(4.18)(70) ≈ 2,630 J, for about 2.3 × 10⁴ J. 2.0 × 10⁴ J counts only the condensation; 2.6 × 10³ J counts only the cooling; and 3.7 × 10⁵ J multiplies the 9.0 grams by the per-mole ΔH_vap.',
        },
        {
          question: 'A 25 m steel rail (α = 1.2 × 10⁻⁵ /K) must not lengthen by more than 6.0 mm. By how much can its temperature rise?',
          options: ['500 K', '0.050 K', '20,000 K', '20 K'],
          correctAnswer: 3,
          explanation:
            'ΔT = ΔL/(αL₀) = 0.0060/((1.2 × 10⁻⁵)(25)) = 0.0060/(3.0 × 10⁻⁴) = 20 K. 500 K leaves out the rail\'s length; 0.050 K turns the formula upside down; and 20,000 K leaves the 6.0 mm unconverted.',
        },
      ],
    },
  ],
}
