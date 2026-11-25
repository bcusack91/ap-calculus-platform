import type { ShotList } from '../types'

/**
 * Shot list: MCAT Physics — Thermodynamics Part 3: The Laws of Thermodynamics
 * (topic mcat-general-chemistry-thermodynamics-mcat; the third and last part of the Thermodynamics
 * video series. Part 1 is temperature, heat and heat transfer, Part 2 is gases and kinetic theory).
 *
 * Sources: the MCAT lesson (src/data/interactive-lessons/mcat-mcat-general-chemistry-thermodynamics-mcat-part1..5.ts;
 * this video takes the physics in it: Part 1's first law and system/surroundings, Part 2's first law,
 * "Physics Conventions: Work, Heat and Processes" (the two sign conventions, the four processes, PV
 * diagrams and cycles, bomb versus coffee-cup calorimetry), entropy, the second law, entropy at a phase
 * change and the third law, and Part 4's phase-change signs of ΔS. Enthalpy of formation, Hess's law,
 * bond enthalpies, Gibbs free energy, K, cell potential and colligative properties are chemistry and
 * stay in the chemistry lessons), the AP Physics 2 lessons physics2-thermo-laws-part1..7.ts (internal
 * energy and work, the first law, PV diagrams and cycles, leg-by-leg cycle accounting, the second law
 * and entropy, path dependence, synthesis) and physics2-thermo-processes-part1..7.ts (read for the
 * processes and entropy; its engines, Carnot efficiency, COP, γ, PV^γ and nRT ln(Vf/Vi) go beyond AP
 * Physics 2 and are left out), the deck figures in src/data/deck-figures/mcat-cp-thermodynamics.ts
 * (the particle boxes for entropy, the six phase changes; the deck has no PV figure, so the PV
 * diagrams here are drawn with thermo_kit), and the exit pools to avoid (the MCAT lesson-built pool
 * and the laws-of-thermodynamics items in src/data/exit-quizzes/ap-physics-2.ts, which the AP Physics 2
 * unit test also draws from).
 * Eight Manim clips in four pairs (owner format, Nov 2026): a CONCEPT clip that teaches the idea and ends
 * on the "Remember" recap, then a WORKED-EXAMPLES clip with two examples, each shown in full with lettered
 * parts and a pause-and-try prompt before the solution. Concept clips get conceptual checkpoint
 * questions; worked-example clips get questions that mirror their two examples with new numbers.
 * Clips 1–2: work done by and on a gas, PV diagrams, area under a path, path dependence and cycles (MCAT
 * Part 2; AP thermo-laws parts 1 and 3). Clips 3–4: internal energy and the first law, both sign
 * conventions, state versus path quantities (MCAT Parts 1–2; AP parts 1, 2 and 6). Clips 5–6: the four
 * processes, free expansion and leg-by-leg cycle accounting (MCAT Part 2; AP parts 2, 4, 6 and 7).
 * Clips 7–8: the direction of heat flow, entropy and the second law, taught qualitatively in the shared
 * sections, with ΔS = Q/T in MCAT-only sections (MCAT Parts 2 and 4; AP part 5). Heat engines and efficiency are left out: AP Physics 2 does not teach them and the MCAT lesson
 * does not either.
 *
 * FIRST LAW ON SCREEN (owner, 2026-11-24): ΔU = Q + W, with W = the work done ON the gas (W_on = −PΔV at
 * constant pressure). Clip 3 has ONE shared key point showing that many physics books and some exams
 * write the same law as ΔU = Q − W, with W = the work done BY the gas. Every worked example says "work
 * done on the gas" or "work done by the gas" every time.
 *
 * REUSE FOR AP PHYSICS 2 (topic laws-of-thermodynamics): each clip is cut into sections, about one per
 * key point, and the AP lesson takes only the SHARED sections. MCAT-only material sits in key points of
 * its own, listed word for word in `mcatOnly`, with any question that depends on it listed in
 * `mcatOnlyQuestions`:
 *   clip 3: the chemistry form ΔU = q + w and the two calorimeters, bomb (constant volume, q = ΔU)
 *           versus coffee cup (constant pressure, q = ΔH) (1 key point, question 3)
 *   clip 7: ΔS = Q/T at constant temperature, and entropy at phase changes and in reactions (ΔS = Q/T
 *           with Q = mL or nΔH, gas > liquid > solid) with the third law (2 key points, question 3)
 *   clip 8: Example 2, the entropy arithmetic for heat flowing between two reservoirs (ΔS = Q/T), and
 *           its method key point (1 key point, question 3); Example 1, two blocks reaching equilibrium,
 *           is qualitative and shared, so the AP cut still has one full worked example
 * AP Physics 2 Topic 9.6 treats entropy qualitatively only (coordinator, 2026-11-24, from the CED review
 * in ap-phase1-pipeline/LESSON-ERRORS.md), so every ΔS = Q/T calculation is MCAT-only. Clips 1, 2, 4, 5
 * and 6 are shared in full, and seven of the eight worked examples are shared. Every "Remember" recap
 * covers shared ideas only.
 * Conventions (series plan): W_on = −PΔV (constant P), ΔU = Q + W, U = (3/2)nRT = (3/2)PV for a
 * monatomic ideal gas, PV = nRT, R = 8.31 J/(mol·K), ΔS = Q/T at constant temperature (MCAT-only), every temperature
 * in kelvin in gas-law and entropy work (said on screen), 1 kPa × 1 L = 1 J. Numbers are friendly,
 * computed twice, with 2 significant figures in answers. Every monatomic example is self-consistent
 * (at constant pressure Q = (5/2)PΔV, ΔU = (3/2)PΔV), so no problem describes an impossible gas.
 *
 * The checkpoint questions are what a YouTube viewer answers at studymondo.com/v/<code>
 * (src/data/video-short-links.ts). Codes (fixed by the series plan): pv1/pv2, firstlaw1/firstlaw2,
 * process1/process2, entropy1/entropy2. They use new scenarios and numbers, so they never repeat an
 * exit-quiz item or a worked example. Clip 8 closes the series: its end card is "Thanks for watching",
 * with no "Up next".
 */
export const shotList: ShotList = {
  courseSlug: 'mcat-prep',
  topicSlug: 'mcat-general-chemistry-thermodynamics-mcat',
  title: 'Thermodynamics Part 3: The Laws of Thermodynamics',
  overview:
    'Eight animated clips in four pairs that finish the thermodynamics series with its laws: the work a gas does as it expands and how a PV diagram shows it, the first law that balances heating, work and internal energy, the four named processes and cycles, and entropy with the second law that sets the direction of every real process. Each idea gets a concept clip followed by a worked-examples clip in which every problem is shown in full, with a moment to pause and try it before the solution. The first law is written ΔU = Q + W with W the work done on the gas, and the clips show that ΔU = Q − W, with W the work done by the gas, is the same law. Narration stays exam-neutral, and each clip is cut into sections so that introductory physics lessons can reuse the shared ones; the calorimeters and the entropy calculations sit in sections of their own. Each clip ends with three checkpoint questions. This part closes the thermodynamics series.',
  clips: [
    // ── 1 · Work and PV diagrams (concepts) ──────────────────────────────
    {
      title: 'Work and PV Diagrams',
      minutes: 7,
      goal: 'Find the work done by and on a gas from its pressure and volume change, read states and work off a PV diagram, and tell the sign of the net work in a cycle from its direction.',
      keyPoints: [
        'A gas pushes on a piston of area A with a force F = PA. If the piston moves out a distance Δx at constant pressure, the gas does work F·Δx = PAΔx = PΔV on its surroundings. In this series W always means the work done ON the gas, which is the opposite: W = −PΔV. An expanding gas (ΔV > 0) has W < 0; a compressed gas (ΔV < 0) has W > 0; a gas in a rigid container (ΔV = 0) has W = 0.',
        'Units: pascals times cubic meters are joules, and 1 L = 10⁻³ m³. A handy shortcut: 1 kPa × 1 L = (10³ Pa)(10⁻³ m³) = 1 J, so pressures in kPa times volumes in L give joules directly.',
        'A PV diagram plots pressure up and volume across. Each point is one state of the gas, and since PV = nRT, the temperature of a fixed sample is proportional to the product PV (temperatures in kelvin). States toward the upper right are hotter; each isotherm, a curve of constant T, is a hyperbola, with hotter isotherms farther from the origin.',
        'The size of the work is the AREA under the path, down to the V-axis. Moving right (expansion), the gas does that much work and W is negative; moving left (compression), work is done on the gas and W is positive; a vertical path (constant volume) has no area and no work. If the pressure changes along a straight line, the area is a trapezoid: the average pressure times ΔV.',
        'Work depends on the path. Two paths between the same two states can enclose different areas: the path at higher pressure has more area under it, so the gas does more work along it. Work is something that happens during a process, not something a state has.',
        'A cycle returns the gas to its starting state. The net work is the area ENCLOSED by the loop. Clockwise, the gas expands at higher pressure than it is compressed, so it does net work on its surroundings and W_net < 0; counterclockwise, net work is done on the gas and W_net > 0.',
      ],
      showOnScreen: [
        'A cylinder with a piston: the gas pushing out with F = PA, the piston sliding Δx, and the swept volume ΔV = AΔx shaded; a sign card: expand → W < 0, compress → W > 0, rigid → W = 0, with "W = work done ON the gas" boxed',
        'The unit line Pa · m³ = N/m² · m³ = N·m = J, then the kPa × L = J shortcut with (10³)(10⁻³) = 1',
        'Empty PV axes; a live state point moving around with its PV readout, a family of three isotherms labeled 200 K, 300 K, 400 K, and the note "T ∝ PV, in kelvin"',
        'A horizontal expansion path with the rectangle beneath it shaded and labeled −PΔV; the same path run leftward with the shading recolored positive; a vertical path with "no area, W = 0"; then a sloped straight path with its trapezoid and "average P × ΔV"',
        'Two paths between the same states A and B, one along the top and one along the bottom, their areas shaded in turn and compared side by side',
        'A rectangular loop traced clockwise, the area under the top leg minus the area under the bottom leg leaving the enclosed area; then the loop traced counterclockwise with the sign of W_net flipping',
        'The "Remember" recap: W = −PΔV is the work done on the gas; expand → W < 0; kPa × L = J; T ∝ PV; |W| = area under the path; work depends on the path; a cycle\'s net work = enclosed area; clockwise → W_net < 0',
        'End card: "Up next: Work and PV Diagrams: Worked Examples"',
      ],
      pitfalls: [
        'Mixing up the work done by the gas with the work done on it, and so getting the sign of W backwards.',
        'Multiplying pascals by liters without converting, which is off by a factor of 1000.',
        'Using the final volume, or the initial volume, instead of the change ΔV.',
        'Thinking a gas does work during a constant-volume step because its pressure changes.',
        'Expecting the same work along any path between the same two states.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-general-chemistry-thermodynamics-mcat', 'mcat-general-chemistry-solutions-gases-mcat'],
      checkpoint: [
        {
          question: 'A gas is compressed at constant pressure to half its volume. Taking W as the work done on the gas, which describes this step?',
          options: [
            'W > 0, and its temperature rises',
            'W > 0, and its temperature falls',
            'W < 0, and its temperature falls',
            'W < 0, and its temperature rises',
          ],
          correctAnswer: 1,
          explanation:
            'The volume shrinks, so W = −PΔV is positive: the surroundings do work on the gas. At fixed pressure T ∝ PV ∝ V, so halving the volume halves the absolute temperature. "Its temperature rises" assumes work done on a gas must warm it, which holds only when no heat leaves; here energy must leave by heating for the gas to cool. "W < 0" takes the sign of the work done BY the gas, and "W < 0, temperature rises" makes both mistakes.',
        },
        {
          question: 'Gas samples A and B start in the same state and expand to the same final volume. A\'s pressure stays constant the whole way; B\'s pressure falls steadily as it expands. Which sample does more work on its surroundings?',
          options: [
            'B, since its pressure changes on the way',
            'Both the same, since their ΔV is equal',
            'Both the same: work depends on endpoints',
            'A, since more area lies under its path',
          ],
          correctAnswer: 3,
          explanation:
            'The work done by a gas is the area under its path on a PV diagram. Both start at the same pressure, but A stays there while B\'s pressure drops, so A\'s path lies above B\'s and has more area under it. "B, since its pressure changes" confuses a changing pressure with more work; "their ΔV is equal" forgets that work is pressure times volume change, not volume change alone; and "work depends on endpoints" treats work as a state quantity, when it depends on the path (and these two samples do not even end in the same state).',
        },
        {
          question: 'On a PV diagram, a gas goes around a closed loop in which it expands while its pressure is low and is compressed while its pressure is high. Over one full cycle:',
          options: [
            'Net work is done on the gas: W_net > 0',
            'The gas does net work: W_net < 0',
            'No net work, as the gas returns to its start',
            'W_net is the area under the high-P path',
          ],
          correctAnswer: 0,
          explanation:
            'Expanding along the low-pressure leg, the gas does a small amount of work; being compressed along the high-pressure leg, it has a larger amount done on it. The loop runs counterclockwise, so net work is done on the gas and W_net > 0, equal to the enclosed area. "The gas does net work" is the clockwise case; "no net work" confuses the work with ΔU, which is the quantity that returns to zero; and the area under the high-pressure leg alone is only one leg\'s work, not the net.',
        },
      ],
    },
    // ── 2 · Work and PV diagrams (worked examples) ───────────────────────
    {
      title: 'Work and PV Diagrams: Worked Examples',
      minutes: 6,
      goal: 'Find the work done by and on a gas along horizontal, vertical and sloped paths, compare two paths between the same states, use T ∝ PV, and find the net work of a cycle.',
      keyPoints: [
        'Horizontal path (constant P): the work done by the gas is PΔV and the work done on the gas is W = −PΔV; in kPa and L the product is already in joules.',
        'Vertical path (constant V): no work, whatever the pressure does.',
        'Sloped straight path: the area is a trapezoid, ½(P₁ + P₂)ΔV; the sign comes from the direction (right: W < 0; left: W > 0).',
        'Temperatures from the diagram: for a fixed sample T ∝ PV, so T_f = T_i × (PV)_f/(PV)_i, in kelvin.',
        'Cycles: add W leg by leg, then check against the enclosed area; clockwise gives W_net < 0, counterclockwise W_net > 0.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: a PV diagram with the state point moving from (2.0 L, 150 kPa) right to (6.0 L, 150 kPa), the 600 J rectangle shaded, then straight down to (6.0 L, 75 kPa) with "W = 0"; the other route (down first, then right at 75 kPa) drawn dashed with its 300 J rectangle; PV readouts 300, 900 and 450 J beside the states and the temperature readout going 300 K → 900 K → 450 K',
        'Example 2: the triangle A (1.0 L, 300 kPa) → B (4.0 L, 100 kPa) → C (1.0 L, 100 kPa) → A, the trapezoid under A→B shaded (600 J), the rectangle under B→C shaded with the opposite sign (300 J), the vertical leg C→A marked "W = 0", then the 300 J triangle left over with a clockwise arrow',
        'A tally box for Example 2: −600 J + 300 J + 0 = −300 J, beside "enclosed area = ½(3.0 L)(200 kPa) = 300 J, clockwise"',
        'The "Remember" recap of the method: W = −PΔV on horizontal legs; W = 0 on vertical legs; trapezoids for sloped legs; sign from the direction; T ∝ PV; add the legs, check the enclosed area',
        'End card: "Up next: The First Law of Thermodynamics"',
      ],
      workedExample:
        'Example 1: A gas in a cylinder with a movable piston starts at 2.0 L, 150 kPa and 300 K. It expands at constant pressure to 6.0 L; then the piston is locked and the gas is cooled until its pressure is 75 kPa. (a) How much work does the gas do during the expansion, and what is W, the work done on the gas? (b) What work is done on the gas during the constant-volume step? (c) What is the total work done on the gas for the two steps, and what would it be if the gas went to the same final state the other way round, first cooled at 2.0 L to 75 kPa and then expanded at 75 kPa to 6.0 L? (d) What is the final temperature of the gas? (a) The work done by the gas is PΔV = (150 kPa)(6.0 L − 2.0 L) = 600 J (in SI, (1.5 × 10⁵ Pa)(4.0 × 10⁻³ m³) = 600 J), so the work done on the gas is W = −600 J; (b) the volume does not change, so the work done on the gas is 0; (c) the total work done on the gas is −600 J + 0 = −600 J; along the other route the gas expands at only 75 kPa, so the work done by the gas is (75 kPa)(4.0 L) = 300 J and the work done on the gas is −300 J: the same two end states, a different amount of work; (d) T ∝ PV, and PV goes from (150)(2.0) = 300 J to (75)(6.0) = 450 J, so T_f = 300 K × 450/300 = 450 K (on the way, after the expansion, PV = 900 J and the gas was at 900 K). Example 2: A gas goes around a cycle. From state A (1.0 L, 300 kPa) it expands along a straight line on the PV diagram to state B (4.0 L, 100 kPa); it is then compressed at a constant 100 kPa to state C (1.0 L, 100 kPa); finally it is heated at constant volume back to A. (a) How much work does the gas do from A to B, and what is the work done on the gas? (b) What is the work done on the gas from B to C? (c) What is the work done on the gas from C to A, and what is the net work done on the gas over the cycle? (d) If the gas went around the same loop in the opposite direction, what would the net work done on the gas be? (a) The area under the line is a trapezoid, ½(300 + 100)(3.0) = 600 J; the gas expands, so the work done by the gas is 600 J and the work done on the gas is W = −600 J; (b) W = −PΔV = −(100 kPa)(1.0 L − 4.0 L) = +300 J, positive because the gas is compressed: the surroundings do 300 J of work on the gas; (c) C to A is vertical, so the work done on the gas is 0, and the net work done on the gas is −600 + 300 + 0 = −300 J; check: the enclosed triangle is ½(3.0 L)(300 − 100 kPa) = 300 J, and the loop runs clockwise, so the gas does 300 J of net work and W_net = −300 J; (d) reversed, the loop runs counterclockwise and every leg\'s work changes sign: the net work done on the gas is +300 J.',
      pitfalls: [
        'Using P × V at one state instead of P × ΔV.',
        'Forgetting the ½ in the trapezoid, or using only one end\'s pressure.',
        'Giving the work done by the gas when the problem asks for the work done on the gas.',
        'Putting temperatures in Celsius into T ∝ PV.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-general-chemistry-thermodynamics-mcat', 'mcat-general-chemistry-solutions-gases-mcat'],
      checkpoint: [
        {
          question: 'A gas expands at a constant pressure of 250 kPa from 1.5 L to 3.5 L. Taking W as the work done on the gas, W is:',
          options: ['+500 J', '−875 J', '−500 J', '−375 J'],
          correctAnswer: 2,
          explanation:
            'W = −PΔV = −(250 kPa)(3.5 L − 1.5 L) = −(250)(2.0) = −500 J, negative because the gas expands; kPa times L is already joules. +500 J is the work done BY the gas; −875 J multiplies by the final volume, 3.5 L, instead of the change; and −375 J multiplies by the initial volume, 1.5 L.',
        },
        {
          question: 'A fixed sample of gas at 300 K expands at a constant 200 kPa from 2.0 L to 3.0 L, and is then cooled at constant volume until its pressure is 100 kPa. What is its final temperature?',
          options: ['225 K', '450 K', '150 K', '400 K'],
          correctAnswer: 0,
          explanation:
            'For a fixed sample T ∝ PV. PV starts at (200)(2.0) = 400 J and ends at (100)(3.0) = 300 J, so T_f = 300 K × 300/400 = 225 K. 450 K stops after the expansion, where PV = 600 J; 150 K scales by the pressure ratio alone and ignores the volume change; and 400 K turns the PV ratio upside down.',
        },
        {
          question: 'A gas goes from A (2.0 L, 400 kPa) along a straight line on a PV diagram to B (5.0 L, 100 kPa), then is compressed at a constant 100 kPa back to 2.0 L, then is heated at constant volume back to A. What is the net work done on the gas over one cycle?',
          options: ['+450 J', '−750 J', '−900 J', '−450 J'],
          correctAnswer: 3,
          explanation:
            'The enclosed triangle has a base of 3.0 L and a height of 300 kPa, so its area is ½(3.0)(300) = 450 J. The gas expands along the high-pressure line and is compressed along the low-pressure line, so the loop runs clockwise: the gas does 450 J of net work and W_net = −450 J (leg by leg: −750 + 300 + 0). +450 J has the sign of the work done BY the gas; −750 J is the work done on the gas along A→B alone, the whole trapezoid; and −900 J leaves the ½ out of the triangle\'s area.',
        },
      ],
    },
    // ── 3 · The first law (concepts) ─────────────────────────────────────
    {
      title: 'The First Law of Thermodynamics',
      minutes: 7.5,
      goal: 'Explain internal energy, apply ΔU = Q + W with the right signs, see that ΔU = Q − W is the same law with the opposite sign for W, and tell state quantities from path quantities.',
      keyPoints: [
        'Internal energy U is the total energy of the random motion of a gas\'s molecules. In an ideal gas the molecules do not interact except in collisions, so there is no internal potential energy, and for a monatomic ideal gas U = (3/2)nRT = (3/2)NkT. U depends only on the temperature (in kelvin), and moving the whole container does not change it.',
        'Energy can cross the boundary of a gas in two ways: by heating, Q, driven by a temperature difference, and by work, W, done when a boundary such as a piston moves. The first law is energy conservation: ΔU = Q + W. Q is positive when energy flows INTO the gas by heating; W is the work done ON the gas, positive when the gas is compressed (W = −PΔV).',
        'Both transfers can raise U or lower it. Heating the gas or compressing it raises U; letting it cool or letting it expand and push its surroundings lowers U. A gas can warm with no heating at all (a quickly pumped bicycle tire), and it can cool while being heated if it expands enough.',
        'Many physics books and some exams write the same law as ΔU = Q − W, with W the work done BY the gas. The physics is identical; only the sign of W is defined the other way: W_by = −W_on. A gas that absorbs 500 J and does 200 J of work: ΔU = Q + W = 500 + (−200) = 300 J, or ΔU = Q − W = 500 − 200 = 300 J. Read which W a problem means before you put in a sign.',
        'For a monatomic ideal gas, ΔU = (3/2)nRΔT = (3/2)Δ(PV), so ΔU comes straight from the start and end states, and ΔU = 0 whenever the temperature returns to its starting value. U is a state quantity; Q and W are path quantities: two paths between the same states have the same ΔU but can split it differently between Q and W.',
        'Chemistry writes the same law as ΔU = q + w, with w the work done ON the system, the same form as here. Two calorimeters follow from it. A sealed, rigid bomb calorimeter allows no volume change, so w = 0 and the heat it measures is ΔU (q_v = ΔU). An open coffee-cup calorimeter works at constant pressure, and the heat it measures is the enthalpy change, ΔH = q_p, which differs from ΔU by the expansion work. Takeaway: constant volume measures ΔU; constant pressure measures ΔH.',
      ],
      showOnScreen: [
        'A gas box with bouncing particles, a U readout rising as the temperature tracker climbs, U = (3/2)nRT written beside it; then the whole box sliding across the screen with the U readout unchanged',
        'The gas in a cylinder with two energy doors: a flame or ice bath labeled Q (arrow in = +, arrow out = −) and the piston labeled W (pushed in = +, pushed out = −); ΔU = Q + W boxed, with "W = work done ON the gas"',
        'A four-row sign table: heated → U up; compressed → U up; cooled → U down; expands → U down; then a bicycle pump warming with Q = 0, and an expanding gas cooling even with a flame under it',
        'Side by side, two textbook pages: "ΔU = Q + W (W on the gas)" and "ΔU = Q − W (W by the gas)", the 500 J / 200 J example worked in both, both landing on ΔU = 300 J, with W_by = −W_on between them',
        'A PV diagram with two paths from A to B: the ΔU readout identical on both, the Q and W readouts different; ΔU = (3/2)Δ(PV) written under the endpoints',
        'A steel bomb calorimeter (rigid, sealed, "W = 0, q = ΔU") beside a coffee cup (open, constant pressure, "q = ΔH")',
        'The "Remember" recap (shared ideas only): U is random molecular energy, set by T; ΔU = Q + W with W done on the gas; Q in is +, compression is +; ΔU = Q − W uses W done by the gas, same physics; ΔU = (3/2)Δ(PV), a state quantity; Q and W depend on the path',
        'End card: "Up next: The First Law of Thermodynamics: Worked Examples"',
      ],
      pitfalls: [
        'Thinking heat and temperature are the same thing, or that a gas "contains" heat.',
        'Assuming work done on a gas always warms it, or that heating always warms it.',
        'Mixing the two sign conventions within one problem.',
        'Counting the motion of the container as internal energy.',
        'Expecting Q or W, rather than ΔU, to be fixed by the end states.',
      ],
      lessonParts: [1, 2],
      mcatTags: ['mcat-general-chemistry-thermodynamics-mcat'],
      mcatOnly: [
        'Chemistry writes the same law as ΔU = q + w, with w the work done ON the system, the same form as here. Two calorimeters follow from it. A sealed, rigid bomb calorimeter allows no volume change, so w = 0 and the heat it measures is ΔU (q_v = ΔU). An open coffee-cup calorimeter works at constant pressure, and the heat it measures is the enthalpy change, ΔH = q_p, which differs from ΔU by the expansion work. Takeaway: constant volume measures ΔU; constant pressure measures ΔH.',
      ],
      mcatOnlyQuestions: [2],
      checkpoint: [
        {
          question: 'A gas is compressed by a piston while, at the same time, it gives off energy by heating to its cooler surroundings. During this process its temperature:',
          options: [
            'Rises, since work is done on the gas',
            'Falls, since energy leaves by heating',
            'Stays the same; the two transfers cancel',
            'Depends on which transfer is larger',
          ],
          correctAnswer: 3,
          explanation:
            'ΔU = Q + W with W > 0 (compression) and Q < 0 (heat out). Whether U, and so T, rises or falls depends on which term is larger. "Rises" counts only the work and ignores the heat leaving; "falls" counts only the heat and ignores the work; and "stays the same" assumes the two are equal, which happens only in the special isothermal case.',
        },
        {
          question: 'Book A writes the first law as ΔU = Q + W, and book B writes it as ΔU = Q − W. A gas absorbs energy by heating while it expands. Which statement is correct?',
          options: [
            'B gives a smaller ΔU, since it subtracts W',
            'Same ΔU; A\'s W is negative and B\'s is positive',
            'A gives a larger ΔU, since it adds W',
            'Same ΔU; W is positive in both books',
          ],
          correctAnswer: 1,
          explanation:
            'Book A\'s W is the work done ON the gas, which is negative for an expansion; book B\'s W is the work done BY the gas, which is positive. Adding a negative number and subtracting the positive one give the same ΔU: it is one law. "B gives a smaller ΔU" and "A gives a larger ΔU" both assume the two books use the same W, so one formula must shift the answer; and "W is positive in both books" cannot give the same ΔU, since one book adds W and the other subtracts it.',
        },
        {
          question: 'A sample burns inside a sealed, rigid steel bomb calorimeter and gives off 3.0 kJ of heat to the water around it. For the burning sample, which statement is correct?',
          options: [
            'ΔH = −3.0 kJ, since heat measured equals ΔH',
            'ΔU = 0, since the energy left as work',
            'ΔU = −3.0 kJ, since no work can be done',
            'ΔU = +3.0 kJ, since no work can be done',
          ],
          correctAnswer: 2,
          explanation:
            'The rigid bomb cannot change volume, so w = 0 and ΔU = q = −3.0 kJ: the sample lost 3.0 kJ, all of it as heat. "ΔH = −3.0 kJ" is what a constant-pressure coffee cup measures, not a constant-volume bomb; "the energy left as work" is impossible with no volume change; and "+3.0 kJ" gets the sign backwards, as the sample gave the heat away.',
        },
      ],
    },
    // ── 4 · The first law (worked examples) ──────────────────────────────
    {
      title: 'The First Law of Thermodynamics: Worked Examples',
      minutes: 6,
      goal: 'Apply ΔU = Q + W with the work done on the gas, check the result with ΔU = Q − W and with ΔU = (3/2)Δ(PV), and solve for whichever of Q, W or ΔU is missing.',
      keyPoints: [
        'Write down the sign of each transfer first: Q > 0 for heat into the gas; W > 0 for work done on the gas (compression), W < 0 when the gas does work (expansion).',
        'Then ΔU = Q + W, or rearranged, Q = ΔU − W and W = ΔU − Q.',
        'Cross-check with the other convention: ΔU = Q − W_by, with W_by = −W. Both must give the same ΔU.',
        'For a monatomic ideal gas, check ΔU against (3/2)Δ(PV), and use T ∝ PV (in kelvin) for temperatures; the sign of ΔU says whether the gas warmed or cooled.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the cylinder with a flame (Q = +750 J) and the piston sliding out at 200 kPa from 1.0 L to 2.5 L, the 300 J rectangle on a PV diagram, an energy bar chart: +750 J in by heating, 300 J out as work done by the gas, +450 J left in U; then the same numbers in ΔU = Q − W; then the temperature readout 300 K → 750 K and the check (3/2)(500 − 200) = 450 J',
        'Example 2: the piston pushed in (W = +500 J on the gas) while heat arrows leave to the room (Q = −200 J), the bar chart ending at ΔU = +300 J and the thermometer rising; then the gas expanding, doing 450 J of work by the gas while U drops 150 J, the bar chart solving for Q = +300 J',
        'The "Remember" recap of the method: signs first; ΔU = Q + W with W on the gas; the same answer from ΔU = Q − W with W by the gas; check with (3/2)Δ(PV); the sign of ΔU gives the direction of T',
        'End card: "Up next: Thermodynamic Processes"',
      ],
      workedExample:
        'Example 1: A cylinder with a movable piston holds a monatomic ideal gas at 300 K, 200 kPa and 1.0 L. The gas absorbs 750 J by heating and expands at constant pressure to 2.5 L. (a) How much work does the gas do, and what is W, the work done on the gas? (b) What is the change in the internal energy of the gas? (c) Redo (b) with the other convention, ΔU = Q − W, where W is the work done by the gas. (d) What is the final temperature of the gas, and does it agree with ΔU = (3/2)Δ(PV)? (a) The work done by the gas is PΔV = (200 kPa)(2.5 L − 1.0 L) = 300 J, so the work done on the gas is W = −300 J; (b) ΔU = Q + W = 750 J + (−300 J) = +450 J; (c) with W = 300 J of work done by the gas, ΔU = Q − W = 750 − 300 = +450 J, the same answer: one law, two ways of writing W; (d) at constant pressure T ∝ V, so T_f = 300 K × 2.5/1.0 = 750 K; and (3/2)Δ(PV) = (3/2)[(200)(2.5) − (200)(1.0)] = (3/2)(300) = 450 J, which matches (b): of the 750 J that came in by heating, 450 J raised the internal energy and 300 J left as work done by the gas. Example 2: A gas in a cylinder is compressed: a piston does 500 J of work on the gas while the gas gives off 200 J by heating to the cooler room. (a) What are the signs and values of Q and of W, the work done on the gas? (b) What is ΔU? (c) Does the temperature of the gas rise or fall? (d) Later the same gas expands, doing 450 J of work on its surroundings, while its internal energy falls by 150 J. How much energy is transferred to the gas by heating? (a) Heat leaves the gas, so Q = −200 J; work is done on the gas, so W = +500 J; (b) ΔU = Q + W = −200 + 500 = +300 J; (c) ΔU > 0, so the temperature rises, even though the gas is giving off heat: the work done on the gas puts in more energy than the heating takes out; (d) the gas does 450 J of work, so the work done on the gas is W = −450 J, and ΔU = −150 J; Q = ΔU − W = −150 − (−450) = +300 J: the gas absorbs 300 J by heating (check with the other convention: ΔU = Q − W_by = 300 − 450 = −150 J).',
      pitfalls: [
        'Using +300 J for the work done on an expanding gas.',
        'Concluding that a gas giving off heat must cool.',
        'Subtracting the work when the formula already has W done on the gas.',
        'Switching conventions halfway through a problem.',
      ],
      lessonParts: [1, 2],
      mcatTags: ['mcat-general-chemistry-thermodynamics-mcat'],
      checkpoint: [
        {
          question: 'A monatomic ideal gas absorbs 500 J by heating while it expands at a constant 100 kPa from 1.0 L to 3.0 L. What is the change in its internal energy?',
          options: ['+300 J', '+700 J', '+500 J', '+200 J'],
          correctAnswer: 0,
          explanation:
            'The gas does PΔV = (100)(2.0) = 200 J of work, so the work done on the gas is W = −200 J and ΔU = Q + W = 500 − 200 = +300 J, which matches (3/2)Δ(PV) = (3/2)(200) = 300 J. +700 J adds the 200 J as if it were work done on the gas; +500 J ignores the work entirely; and +200 J is the work done by the gas, not the change in internal energy.',
        },
        {
          question: 'A gas is compressed: 350 J of work is done on it while it gives off 500 J by heating. What is ΔU, and what happens to the temperature of the gas?',
          options: [
            '+150 J; its temperature rises',
            '+850 J; its temperature rises',
            '−150 J; its temperature falls',
            '−850 J; its temperature falls',
          ],
          correctAnswer: 2,
          explanation:
            'Q = −500 J (heat out) and W = +350 J (work done on the gas), so ΔU = −500 + 350 = −150 J and the temperature falls: this time the heating takes out more than the work puts in. +150 J flips both signs; +850 J counts the heat given off as heat taken in; and −850 J treats the work done on the gas as energy leaving it.',
        },
        {
          question: 'A gas expands, doing 250 J of work on its surroundings, while its internal energy rises by 100 J. How much energy is transferred to the gas by heating?',
          options: ['+150 J', '+350 J', '−150 J', '−350 J'],
          correctAnswer: 1,
          explanation:
            'The gas does 250 J of work, so the work done on the gas is W = −250 J, and Q = ΔU − W = 100 − (−250) = +350 J: heating must supply the 100 J rise and the 250 J of work. −150 J uses +250 J as the work done on the gas; +150 J subtracts the two magnitudes, 250 − 100; and −350 J has the right size but treats the heat as leaving.',
        },
      ],
    },
    // ── 5 · Thermodynamic processes (concepts) ───────────────────────────
    {
      title: 'Thermodynamic Processes',
      minutes: 7.5,
      goal: 'Recognize isobaric, isochoric, isothermal and adiabatic processes on a PV diagram, apply the first law to each, and track Q, W and ΔU around a cycle.',
      keyPoints: [
        'A process is a path between states. Four named processes each hold one thing fixed, and the first law, ΔU = Q + W (W done on the gas), then simplifies. Isobaric (constant pressure): a horizontal line; W = −PΔV; V ∝ T, so an expanding gas warms, and the heat must pay for both: Q = ΔU − W, more than ΔU.',
        'Isochoric (constant volume): a vertical line; W = 0, so ΔU = Q: all the heat goes into internal energy, and P ∝ T. A gas heated in a rigid tank gets hotter and its pressure rises.',
        'Isothermal (constant temperature): a hyperbola, PV = constant. For an ideal gas ΔU = 0, so Q = −W: an expanding gas absorbs by heating exactly the work it does, and a compressed gas gives off by heating exactly the work done on it. It needs slow changes and good contact with a large reservoir at that temperature.',
        'Adiabatic (Q = 0): the gas is insulated, or the change is too fast for heat to flow. Then ΔU = W: compression warms the gas (a bicycle pump gets hot) and expansion cools it (air rising and expanding cools, which is why clouds form where air rises). Through any state, an adiabat is steeper than the isotherm, because the temperature changes too. Isothermal and adiabatic are not the same: one fixes T, the other fixes Q = 0.',
        'Free expansion: a gas in an insulated container rushes into an empty chamber when a valve opens. It pushes on nothing, so W = 0, and Q = 0, so ΔU = 0, and an ideal gas ends at its starting temperature, even though it expanded. It is too sudden to draw as a path on a PV diagram.',
        'A cycle returns the gas to its starting state, so ΔU_cycle = 0 and Q_net = −W_net. Clockwise, the gas takes in net energy by heating, equal to the net work it does, the enclosed area. To analyze a cycle leg by leg: W from the area under each leg, ΔU = (3/2)Δ(PV) for a monatomic gas, then Q = ΔU − W.',
      ],
      showOnScreen: [
        'A four-panel PV grid, one panel per process, each path drawn with its "what is fixed" label and the first-law line that goes with it: isobaric ΔU = Q − PΔV, isochoric ΔU = Q, isothermal Q = −W, adiabatic ΔU = W',
        'Isobaric: the piston moving out at constant pressure, the rectangle under the path, the thermometer rising with V, and the incoming heat splitting into "raise U" and "push the piston"',
        'Isochoric: a rigid tank on a flame, the pressure gauge and thermometer climbing together, the state point rising straight up, "W = 0"',
        'Isothermal: the cylinder in a big water bath, the state point sliding down a hyperbola, heat arrows flowing in as the gas expands and out as it is compressed, the U readout frozen',
        'Adiabatic: an insulated cylinder, the adiabat drawn through a state point beside the isotherm through the same point (steeper), a bicycle pump warming and a rising parcel of air cooling',
        'Free expansion: an insulated box split by a valve, the gas rushing into the empty half, Q = 0, W = 0, ΔU = 0, the thermometer unchanged',
        'A rectangular cycle with a leg-by-leg table filling in: W, ΔU, Q for each leg, the ΔU column summing to zero and Q_net = −W_net = enclosed area',
        'The "Remember" recap: isobaric W = −PΔV; isochoric W = 0, ΔU = Q; isothermal ΔU = 0, Q = −W; adiabatic Q = 0, ΔU = W, steeper than an isotherm; free expansion: nothing changes U; cycle: ΔU = 0, Q_net = −W_net',
        'End card: "Up next: Thermodynamic Processes: Worked Examples"',
      ],
      pitfalls: [
        'Confusing isothermal (ΔU = 0) with adiabatic (Q = 0).',
        'Thinking an isothermal process involves no heat.',
        'Expecting a gas to cool in a free expansion because it expanded.',
        'Thinking ΔU is zero for any process, rather than for an isothermal process or a whole cycle.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-general-chemistry-thermodynamics-mcat', 'mcat-general-chemistry-solutions-gases-mcat'],
      checkpoint: [
        {
          question: 'A parcel of air rises up a mountainside. As the pressure around it drops, it expands, too quickly to exchange much energy by heating with the air around it. What happens to the parcel\'s temperature?',
          options: [
            'It warms, as the outside air does work on it',
            'It stays the same, since Q is about zero',
            'It cools, as it does work with no heat in',
            'It warms, as its molecules spread out more',
          ],
          correctAnswer: 2,
          explanation:
            'With Q ≈ 0 the process is adiabatic, so ΔU = W. Expanding, the parcel does work on its surroundings, so W < 0, ΔU < 0, and it cools (which is why clouds form as air rises). "The outside air does work on it" reverses the direction of the work in an expansion; "stays the same, since Q is about zero" mixes up adiabatic with isothermal; and spreading out does not by itself add energy.',
        },
        {
          question: 'An ideal gas absorbs energy by heating, yet its temperature does not change. Which process is it undergoing?',
          options: [
            'Isothermal expansion',
            'Adiabatic expansion',
            'Isochoric heating',
            'Isothermal compression',
          ],
          correctAnswer: 0,
          explanation:
            'Constant temperature means ΔU = 0, so Q = −W: if Q > 0, then W < 0 and the gas must be expanding, doing as much work as the heat it takes in. An adiabatic expansion has Q = 0 and cools; isochoric heating has W = 0, so all the heat raises U and T; and an isothermal compression has W > 0, so the gas gives off heat rather than absorbing it.',
        },
        {
          question: 'From the same starting state, a gas is compressed to half its volume twice: once slowly in a water bath at constant temperature, and once quickly in an insulated cylinder. Which compression needs more work done on the gas?',
          options: [
            'The isothermal one: the gas must also give off heat',
            'Neither: the volume change is the same for both',
            'The isothermal one: its pressure climbs faster',
            'The adiabatic one: the gas warms, so P climbs faster',
          ],
          correctAnswer: 3,
          explanation:
            'In the adiabatic compression no heat leaves, so the work done on the gas raises its temperature, and at each volume its pressure is higher than on the isotherm. The adiabat is steeper, so there is more area under it and more work is done on the gas. "Must also give off heat" is true of the isothermal compression, but giving off heat keeps its pressure lower along the way, which means less work, not more; "the volume change is the same" forgets that work also depends on the pressure; and the isotherm\'s pressure climbs more slowly, not faster.',
        },
      ],
    },
    // ── 6 · Thermodynamic processes (worked examples) ────────────────────
    {
      title: 'Thermodynamic Processes: Worked Examples',
      minutes: 6.5,
      goal: 'Find Q, W and ΔU for every leg of a cycle and for the whole cycle, and apply the first law to isothermal and adiabatic compressions.',
      keyPoints: [
        'Hottest and coldest states: the largest and smallest PV; equal PV means equal temperature.',
        'Each leg: W, the work done on the gas, from the area (horizontal: −PΔV; vertical: 0); ΔU = (3/2)Δ(PV) for a monatomic gas; Q = ΔU − W.',
        'Whole cycle: ΔU sums to zero, W_net is minus the enclosed area for a clockwise loop, and Q_net = −W_net.',
        'Isothermal: ΔU = 0, so Q = −W. Adiabatic: Q = 0, so ΔU = W, and ΔT = ΔU/((3/2)nR) for a monatomic gas.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the rectangle A (1.0 L, 100 kPa), B (1.0 L, 300 kPa), C (3.0 L, 300 kPa), D (3.0 L, 100 kPa) traced clockwise, PV readouts 100, 300, 900 and 300 J at the corners, C glowing hottest and A coldest; then the leg table filling in row by row, the ΔU column summing to 0, the W column to −400 J and the Q column to +400 J, beside the 400 J enclosed area',
        'Example 2: a cylinder in a 293 K water bath with the piston pushed in (W = +600 J on the gas), the U readout frozen and a 600 J heat arrow flowing out into the bath; then an insulated cylinder pushed in with the same 600 J, no heat arrow, the U readout climbing 600 J and the thermometer rising 120 K',
        'The "Remember" recap of the method: largest PV = hottest; W from the area, ΔU = (3/2)Δ(PV), Q = ΔU − W on each leg; ΔU_cycle = 0 and Q_net = −W_net; isothermal Q = −W; adiabatic ΔU = W',
        'End card: "Up next: Entropy and the Second Law"',
      ],
      workedExample:
        'Example 1: A monatomic ideal gas goes clockwise around a rectangular cycle on a PV diagram: from A (1.0 L, 100 kPa) it is heated at constant volume to B (1.0 L, 300 kPa), expands at constant pressure to C (3.0 L, 300 kPa), is cooled at constant volume to D (3.0 L, 100 kPa), and is compressed at constant pressure back to A. (a) Which state is the hottest, which is the coldest, and which two states share a temperature? (b) For the leg B→C, find W (the work done on the gas), ΔU and Q. (c) For the leg D→A, find W, ΔU and Q. (d) Over the whole cycle, what are the net work done on the gas, ΔU and the net energy added by heating? (a) PV is 100 J at A, 300 J at B, 900 J at C and 300 J at D, and T ∝ PV, so C is the hottest, A the coldest, and B and D share a temperature; (b) the gas expands at 300 kPa, so it does (300)(2.0) = 600 J of work and the work done on the gas is W = −600 J; ΔU = (3/2)(900 − 300) = +900 J; Q = ΔU − W = 900 − (−600) = +1500 J ≈ 1.5 × 10³ J, enough to raise U and to pay for the work done by the gas; (c) the gas is compressed at 100 kPa, so the work done on the gas is W = −PΔV = −(100)(1.0 − 3.0) = +200 J; ΔU = (3/2)(100 − 300) = −300 J; Q = ΔU − W = −300 − 200 = −500 J: the gas gives off 500 J by heating; (d) the vertical legs have W = 0 (A→B: ΔU = Q = +300 J; C→D: ΔU = Q = −900 J), so the net work done on the gas is −600 + 200 = −400 J, ΔU sums to +300 + 900 − 900 − 300 = 0, and Q_net = −W_net = +400 J; check: the enclosed area is (300 − 100 kPa)(3.0 − 1.0 L) = 400 J, and the gas takes in 300 + 1500 = 1800 J by heating and gives off 900 + 500 = 1400 J, a difference of 400 J. Example 2: A cylinder holds 0.40 mol of a monatomic ideal gas at 293 K (20°C). Use R = 8.31 J/(mol·K). (a) The cylinder sits in a large water bath at 293 K, and the gas is compressed slowly while 600 J of work is done on the gas. What is ΔU? (b) In that compression, what is Q, and where does the energy go? (c) Starting again from 293 K, the gas is compressed quickly in an insulated cylinder, again with 600 J of work done on the gas. What are Q and ΔU, and does the temperature rise or fall? (d) By how much does the temperature change in (c), and what is the final temperature? (a) The bath holds the temperature fixed, so the process is isothermal and ΔU = 0; (b) Q = ΔU − W = 0 − 600 = −600 J: the gas gives off 600 J by heating, all of the energy the work put in, to the bath; (c) no heat can flow, so Q = 0 and ΔU = Q + W = +600 J, and the temperature rises; (d) ΔU = (3/2)nRΔT, so ΔT = 600/((1.5)(0.40)(8.31)) = 600/4.99 ≈ 120 K, and the final temperature is about 293 + 120 ≈ 410 K.',
      pitfalls: [
        'Giving the vertical legs nonzero work because their pressure changes.',
        'Writing Q = ΔU + W instead of Q = ΔU − W.',
        'Expecting the ΔU column of a cycle to sum to anything but zero.',
        'Giving the isothermal compression Q = 0, or the adiabatic one ΔU = 0.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-general-chemistry-thermodynamics-mcat', 'mcat-general-chemistry-solutions-gases-mcat'],
      checkpoint: [
        {
          question: 'A monatomic ideal gas is compressed at a constant 100 kPa from 4.0 L to 1.0 L. How much energy is transferred to the gas by heating?',
          options: ['−150 J', '−750 J', '−450 J', '+750 J'],
          correctAnswer: 1,
          explanation:
            'The work done on the gas is W = −PΔV = −(100)(1.0 − 4.0) = +300 J, and ΔU = (3/2)Δ(PV) = (3/2)(100 − 400) = −450 J, so Q = ΔU − W = −450 − 300 = −750 J: the gas gives off 750 J. −150 J writes Q = ΔU + W; −450 J stops at ΔU and leaves out the work; and +750 J has the right size but the wrong sign, as a gas compressed while it cools must give off heat.',
        },
        {
          question: 'A gas goes clockwise around a rectangle on a PV diagram with corners at 1.0 L and 3.0 L and at 100 kPa and 250 kPa. What net energy is added to the gas by heating over one cycle?',
          options: ['−300 J', '+500 J', '+700 J', '+300 J'],
          correctAnswer: 3,
          explanation:
            'Over a cycle ΔU = 0, so Q_net = −W_net. The enclosed area is (250 − 100 kPa)(3.0 − 1.0 L) = 300 J, and clockwise means the gas does 300 J of net work, so W_net = −300 J and Q_net = +300 J. −300 J is the counterclockwise result; +500 J is the area under the top leg alone, (250)(2.0); and +700 J adds the areas under the top and bottom legs, 500 + 200, instead of subtracting them.',
        },
        {
          question: '0.50 mol of a monatomic ideal gas is compressed quickly in an insulated cylinder, with 900 J of work done on the gas. What is the change in its temperature? (R = 8.31 J/(mol·K))',
          options: ['+140 K', '+220 K', '+320 K', '−140 K'],
          correctAnswer: 0,
          explanation:
            'Insulated means Q = 0, so ΔU = W = +900 J, and ΔT = ΔU/((3/2)nR) = 900/((1.5)(0.50)(8.31)) = 900/6.23 ≈ +140 K. +220 K leaves out the 3/2, dividing by nR alone; +320 K multiplies by 3/2 instead of dividing; and −140 K treats the 900 J as work done by the gas, so the gas would cool.',
        },
      ],
    },
    // ── 7 · Entropy and the second law (concepts) ────────────────────────
    {
      title: 'Entropy and the Second Law',
      minutes: 7.5,
      goal: 'Explain why energy flows from hot to cold, describe entropy as the spreading of energy, state the second law, and predict which processes raise entropy and which cannot happen on their own.',
      keyPoints: [
        'The first law allows things that never happen: a cold kitchen warming a hot pan, or a stopped puck cooling the ice and sliding off. The second law says which way processes go. Energy flows by heating on its own from a hotter object to a colder one, never the reverse; moving energy from cold to hot takes work, as a refrigerator\'s compressor does.',
        'Entropy, S, measures how spread out a system\'s energy and matter are: the number of microscopic arrangements that look the same from outside. Energy spreading from a hot spot, a gas filling a bigger space, dye mixing through water and friction turning ordered motion into random thermal motion all raise entropy. Like U, entropy is a state quantity.',
        'The second law: the total entropy of an isolated system never decreases. Every real process is irreversible and raises it; only an idealized, perfectly slow (reversible) process keeps it constant. Part of a system can lose entropy, as a freezer\'s food or a living cell building order does, but only if its surroundings gain at least as much. The reason is statistical: no single collision forbids the reverse, but the spread-out arrangements are so overwhelmingly more numerous that the reverse never happens.',
        'Comparing processes: the more the energy or matter spreads, the more the entropy rises; a gas spreading into a larger empty space gains more than one spreading into a smaller space. When energy flows from a hot object to a cold one, the hot object\'s entropy falls and the cold object\'s rises, and the cold one gains more than the hot one loses, so the total rises; the reverse would lower the total, which is why it never happens on its own. At equilibrium the entropy is at its maximum, and the energy, though all still there, is less available to do work.',
        'Entropy change at a constant temperature: ΔS = Q/T, in J/K, with T in kelvin. Heat in raises S; heat out lowers it. The same Q changes S more at a low temperature. So when Q flows from a hot object at T_H to a cold one at T_C, ΔS_total = −Q/T_H + Q/T_C, which is positive because T_C < T_H.',
        'Entropy in phase changes and reactions: melting and boiling happen at a constant temperature, so ΔS = Q/T with Q = mL (or nΔH), and entropy rises from solid to liquid to gas; freezing and condensing lower it. A reaction that makes more moles of gas has ΔS > 0. The third law sets the zero: a perfect crystal at 0 K has S = 0. Takeaway: toward gas, entropy up; toward solid, entropy down.',
      ],
      showOnScreen: [
        'A hot pan in a cold kitchen with a heat arrow pointing out of the pan; the reverse arrow drawn and stamped "never on its own"; then a refrigerator with a compressor doing work to push heat uphill',
        'The deck\'s particle boxes: a gas confined to one half spreading into the whole box, dye spreading through water, a sliding block\'s ordered motion turning into jiggling atoms, with an S meter climbing in each',
        'A sealed, insulated box (an isolated system) with its S meter that can only climb; then a freezer drawer whose S meter falls while the room\'s meter climbs by more',
        'Two valve-and-chamber boxes side by side, one empty chamber small and one large, the S meter climbing higher for the larger; then a hot block and a cold block touching, the hot block\'s S meter dropping a little and the cold block\'s climbing more, the total meter rising; then the "available to do work" bar draining to zero at equilibrium',
        'ΔS = Q/T written out in J/K with "T in kelvin"; the same 600 J going into a 200 K block and a 400 K block, the S readouts +3.0 and +1.5 J/K; then −Q/T_H and +Q/T_C side by side with a positive sum',
        'The deck\'s phase-change triangle: arrows toward gas labeled ΔS > 0, arrows toward solid labeled ΔS < 0, ΔS = mL/T beside the melting arrow; a perfect crystal at 0 K labeled S = 0',
        'The "Remember" recap (shared ideas only): heat flows hot → cold on its own; entropy = how spread out energy is; isolated systems: total entropy never decreases; real processes raise it; a part can lose entropy if its surroundings gain more; more spreading, more entropy; spread-out energy is less available to do work',
        'End card: "Up next: Entropy and the Second Law: Worked Examples"',
      ],
      pitfalls: [
        'Thinking no system\'s entropy can ever decrease, rather than an isolated system\'s.',
        'Thinking the first law alone decides which way heat flows.',
        'Thinking the hot object\'s loss and the cold object\'s gain of entropy cancel.',
        'Thinking that because total energy is conserved, nothing is lost when temperatures even out.',
      ],
      lessonParts: [2, 4],
      mcatTags: ['mcat-general-chemistry-thermodynamics-mcat'],
      mcatOnly: [
        'Entropy change at a constant temperature: ΔS = Q/T, in J/K, with T in kelvin. Heat in raises S; heat out lowers it. The same Q changes S more at a low temperature. So when Q flows from a hot object at T_H to a cold one at T_C, ΔS_total = −Q/T_H + Q/T_C, which is positive because T_C < T_H.',
        'Entropy in phase changes and reactions: melting and boiling happen at a constant temperature, so ΔS = Q/T with Q = mL (or nΔH), and entropy rises from solid to liquid to gas; freezing and condensing lower it. A reaction that makes more moles of gas has ΔS > 0. The third law sets the zero: a perfect crystal at 0 K has S = 0. Takeaway: toward gas, entropy up; toward solid, entropy down.',
      ],
      mcatOnlyQuestions: [2],
      checkpoint: [
        {
          question: 'A gas fills one side of an insulated box. In trial 1, a valve lets it spread into an empty chamber of the same size; in trial 2, the same gas starts the same way but spreads into an empty chamber nine times that size. In which trial does the entropy of the gas rise more?',
          options: [
            'Trial 1, as the gas stays more crowded',
            'Trial 2, as the gas spreads into more space',
            'Neither; the temperature stays the same',
            'Neither; no heat flows in either trial',
          ],
          correctAnswer: 1,
          explanation:
            'Entropy measures how spread out the gas is: with more space there are far more arrangements of its molecules, so the larger expansion raises the entropy more. "Trial 1" reverses the link, as a more crowded gas has fewer arrangements; "the temperature stays the same" is true for an ideal gas but does not stop entropy from rising, since spreading out alone raises it; and "no heat flows" assumes entropy changes only with heating, but a free expansion raises entropy with no heat at all.',
        },
        {
          question: 'A helium balloon is popped inside a sealed, insulated room, and the helium spreads through the whole room. Could the helium atoms later gather back into the balloon\'s old space on their own?',
          options: [
            'Yes; energy would still be conserved, so it happens',
            'No; the first law forbids it, as energy would change',
            'No; total entropy would fall, so it is never seen',
            'Yes; given time, it happens about half the time',
          ],
          correctAnswer: 2,
          explanation:
            'Gathering back would lower the total entropy of an isolated system, which the second law rules out. The reason is statistical: no single collision forbids it and energy would be conserved, but the spread-out arrangements outnumber the gathered ones by so much that it is never seen. "Energy would still be conserved, so it happens" treats the first law as the only rule; "the first law forbids it" is wrong because the total energy would not change; and "about half the time" treats the two arrangements as equally likely.',
        },
        {
          question: 'Equal amounts of energy, 600 J each, are added by heating to two large blocks, one at 200 K and one at 400 K, so large that their temperatures barely change. Which block\'s entropy rises more?',
          options: [
            'The 200 K block, by twice as much',
            'The 400 K block, by twice as much',
            'Both rise by the same amount',
            'Neither, as their temperatures stay put',
          ],
          correctAnswer: 0,
          explanation:
            'ΔS = Q/T, so the same Q gives the larger change at the lower temperature: 600/200 = 3.0 J/K against 600/400 = 1.5 J/K, twice as much for the 200 K block. "The 400 K block" multiplies by T instead of dividing; "the same amount" uses Q alone and forgets the temperature; and "neither" assumes entropy changes only when temperature does, but adding energy by heating raises entropy even at a fixed temperature.',
        },
      ],
    },
    // ── 8 · Entropy and the second law (worked examples) ─────────────────
    {
      title: 'Entropy and the Second Law: Worked Examples',
      minutes: 6,
      goal: 'Reason through the direction of heat flow and the sign of every entropy change when two objects reach equilibrium, decide whether a process can happen on its own, and find entropy changes with ΔS = Q/T.',
      keyPoints: [
        'Direction first: energy flows by heating from the hotter object to the colder one, and stops when their temperatures are equal.',
        'Signs: the object that loses energy by heating loses entropy; the object that gains energy gains entropy; the colder object gains more than the hotter one loses, so the total for an isolated pair rises.',
        'Can it happen on its own? If the total entropy of an isolated system would rise, yes; if it would fall, never, even though energy would be conserved. The reverse takes work from outside, as in a refrigerator.',
        'With numbers: put each temperature in kelvin, find ΔS = Q/T for each object held at a constant temperature (Q positive into it, negative out of it), and add the signed values: ΔS_total > 0 happens on its own, = 0 is the idealized reversible limit, < 0 never happens on its own.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: two identical copper blocks, 90°C and 10°C, touching inside an insulated box; a heat arrow from hot to cold shrinking to zero as both thermometers meet at 50°C; S meters for each block (hot falling a little, cold rising more) and a total meter rising; then the blocks shown splitting back to 90°C and 10°C, stamped "never on its own", beside "energy conserved: yes; total entropy: would fall"',
        'Example 2: a hot reservoir (450 K) and a cold reservoir (300 K) joined by a copper rod, a 1,800 J heat arrow flowing along it, S readouts −4.0 J/K and +6.0 J/K and a total of +2.0 J/K with a green check; then the arrow reversed, the total −2.0 J/K stamped "never on its own"',
        'The "Remember" recap of the method (shared ideas only): heat flows hot → cold until the temperatures match; the hot object loses entropy, the cold one gains more; total rises → it happens; total would fall → never on its own; the reverse needs work',
        'End card: "Thanks for watching" (the last video of the thermodynamics series; no "Up next")',
      ],
      workedExample:
        'Example 1: Two identical copper blocks, one at 90°C and one at 10°C, are pressed together inside a sealed, insulated box. (a) Which way does energy flow by heating, and when does the flow stop? (b) What is the sign of the entropy change of each block? (c) Does the total entropy of the two blocks rise, fall or stay the same, and why? (d) Could the blocks later return to 90°C and 10°C on their own? Explain using both laws. (a) Energy flows from the 90°C block to the 10°C block, and it stops when both reach the same temperature; the blocks are identical, so they meet halfway, at 50°C; (b) the hot block loses energy by heating, so its entropy decreases; the cold block gains energy, so its entropy increases; (c) the total rises: the same energy raises the entropy of the colder block more than it lowers the entropy of the hotter one, and the box is an isolated system in which a real, irreversible process always raises the total entropy; the spread-out energy is now less available to do work, even though none of it was lost; (d) no: the first law would allow it, since the energy one block gained back would equal the energy the other lost, but the total entropy of the isolated box would fall, which the second law forbids; separating the temperatures again takes work from outside, as a refrigerator or heat pump does, and that raises the entropy of the surroundings by at least as much. Example 2: 1,800 J of energy flows by heating through a copper rod from a large reservoir at 450 K to a large reservoir at 300 K. Both reservoirs are so large that their temperatures do not change. (a) What is the entropy change of the hot reservoir? (b) What is the entropy change of the cold reservoir? (c) What is the total entropy change, and what does it say about the process? (d) Suppose the same 1,800 J flowed from the 300 K reservoir to the 450 K reservoir on its own. What would the total entropy change be? (a) The hot reservoir loses the energy: ΔS = Q/T = −1800/450 = −4.0 J/K; (b) the cold reservoir gains it: ΔS = +1800/300 = +6.0 J/K; (c) ΔS_total = −4.0 + 6.0 = +2.0 J/K > 0: the process is allowed and irreversible, which is why heat flows from hot to cold; (d) every sign flips: ΔS_total = +1800/450 − 1800/300 = 4.0 − 6.0 = −2.0 J/K < 0, which the second law forbids; a refrigerator can move energy that way only by having work done on it, which delivers extra energy to the hot side so that the total entropy still does not decrease.',
      pitfalls: [
        'Thinking the two blocks\' entropy changes cancel, so the total stays the same.',
        'Giving both objects the same sign of ΔS.',
        'Concluding that anything energy conservation allows will happen.',
        'Using Celsius in ΔS = Q/T, or adding magnitudes instead of signed values.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-general-chemistry-thermodynamics-mcat'],
      mcatOnly: [
        'With numbers: put each temperature in kelvin, find ΔS = Q/T for each object held at a constant temperature (Q positive into it, negative out of it), and add the signed values: ΔS_total > 0 happens on its own, = 0 is the idealized reversible limit, < 0 never happens on its own.',
      ],
      mcatOnlyQuestions: [2],
      checkpoint: [
        {
          question: 'A hot iron nail at 70°C is dropped into a bowl of water at 20°C inside an insulated container. As they reach a common temperature, what happens to the entropy of the nail, of the water and of the two together?',
          options: [
            'Nail rises, water falls; the total rises',
            'Both rise, as both reach equilibrium',
            'Nail falls, water rises more; total rises',
            'Nail falls, water rises equally; total same',
          ],
          correctAnswer: 2,
          explanation:
            'Energy flows from the hot nail to the cooler water, so the nail\'s entropy falls and the water\'s rises; the cooler water gains more than the nail loses, so the total rises, as it must in an isolated system. "Nail rises, water falls" reverses the direction of the heat flow; "both rise" forgets that the nail is losing energy; and "rises equally; total same" treats the two changes as canceling, which happens only in the idealized reversible limit, not when heat flows across a temperature difference.',
        },
        {
          question: 'Two blocks in a sealed, insulated box have reached a common 40°C. Energy conservation would allow one block to warm to 60°C while the other cools to 20°C. Why does this never happen on its own?',
          options: [
            'It would lower the total entropy of the box',
            'It would create energy, breaking the first law',
            'Blocks at one temperature hold no thermal energy',
            'Entropy is already zero once they are at 40°C',
          ],
          correctAnswer: 0,
          explanation:
            'Separating the temperatures again would decrease the total entropy of an isolated system, which the second law forbids; energy is not the obstacle. "It would create energy" is wrong, since the energy one block gains equals the energy the other loses; blocks at a common temperature still hold plenty of thermal energy, there is just no temperature difference left to drive a flow; and entropy is at its MAXIMUM at equilibrium, not zero.',
        },
        {
          question: '1,200 J flows by heating from a large reservoir at 400 K to a large reservoir at 300 K. What is the total entropy change of the two reservoirs?',
          options: ['−1.0 J/K', '+7.0 J/K', '+12 J/K', '+1.0 J/K'],
          correctAnswer: 3,
          explanation:
            'The hot reservoir loses 1200/400 = 3.0 J/K and the cold one gains 1200/300 = 4.0 J/K, so ΔS_total = −3.0 + 4.0 = +1.0 J/K, positive as it must be for heat flowing from hot to cold. −1.0 J/K gives the hot reservoir the gain and the cold one the loss; +7.0 J/K adds the two magnitudes; and +12 J/K divides the heat by the 100 K temperature difference.',
        },
      ],
    },
  ],
}
