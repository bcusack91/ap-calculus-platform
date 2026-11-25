import type { ShotList } from '../types'

/**
 * Shot list: MCAT Physics — Magnetism Part 2: Currents & Magnetic Fields
 * (topic mcat-physics-electricity-magnetism-mcat; the second of three "Magnetism & Electromagnetism"
 * video parts. Part 1 is magnetic fields and the force on a moving charge, Part 3 is electromagnetic
 * induction).
 *
 * Sources: the MCAT magnetism lesson (src/data/interactive-lessons/mcat-mcat-physics-electricity-magnetism-mcat-part1..2.ts;
 * this video takes Part 1's "Moving Charge Makes Magnetic Field" (the long wire, B = μ₀I/2πr, loops and
 * solenoids, the MRI magnet) and its two wire worked examples' ideas, and builds on Part 2's force law,
 * F = qvB sin θ, and right-hand rule), the wire half of the MCAT induction lesson
 * (mcat-mcat-physics-electricity-induction-mcat-part1.ts: "Force on a Current-Carrying Wire" and
 * "Parallel Wires"; its selector and spectrometer belong to video Part 1 and its induction to video
 * Part 3; the galvanometer is a yield:low extra and is left out), the MRI strategy section of
 * mcat-mcat-physics-electricity-induction-mcat-part2.ts (the superconducting solenoid only), the
 * AP Physics 2 lessons physics2-magnetic-fields-part4..5 (force on a wire, parallel wires, the field of a
 * moving charge and of a long wire, superposition and null points, the loop's field) with part 6's
 * dipoles and ferromagnetism and part 7's common mistakes (parts 1–3 are video Part 1; part 6's Hall
 * effect is left out), the deck figures in src/data/deck-figures/mcat-cp-magnetism.ts (the wire's
 * circling field and the solenoid, the wire force at 90°, at θ and along B, attracting and repelling
 * parallel wires), and the exit pools to avoid (the MCAT lesson-built pools for the magnetism and
 * induction topics, and the magnetic-fields-forces items in src/data/exit-quizzes/ap-physics-2.ts,
 * which the AP Physics 2 unit test also draws from).
 * Eight Manim clips in four pairs (owner format, Nov 2026): a CONCEPT clip that teaches the idea and ends
 * on the "Remember" recap, then a WORKED-EXAMPLES clip with two examples, each shown in full with lettered
 * parts and a pause-and-try prompt before the solution. Concept clips get conceptual checkpoint
 * questions; worked-example clips get questions that mirror their two examples with new numbers.
 * Clips 1–2 follow the force on a current-carrying wire (MCAT induction Part 1, built on magnetism
 * Part 2's force law; AP Part 4). Clips 3–4 follow the field of a long straight wire, with superposition
 * and null points (MCAT Part 1; AP Part 5). Clips 5–6 follow the forces between parallel wires (MCAT
 * induction Part 1 with magnetism Part 1's wire field; AP Part 4). Clips 7–8 follow current loops and
 * solenoids, the loop as a magnet, the electromagnet and the motor principle (MCAT Part 1; AP Parts 5–6).
 *
 * REUSE FOR AP PHYSICS 2 (topic magnetic-fields-forces): each clip is cut into sections, about one
 * per key point, and the AP lesson takes only the SHARED sections. MCAT-only material sits in key
 * points of its own, listed word for word in `mcatOnly`, with any question that depends on it listed
 * in `mcatOnlyQuestions`:
 *   clip 7: the MRI main magnet as a superconducting solenoid, with the gauss (1 key point, question 3)
 * Clips 1, 2, 3, 4, 5, 6 and 8 are shared in full, so both examples in every worked-examples clip are
 * AP-valid. The 1.5–3 T size of an MRI field is shared (the AP lesson quotes it too); the gauss and the
 * superconducting, power-free winding are MCAT-only. Every "Remember" recap covers shared ideas only.
 * Symbols follow the AP equation sheet: F = ILB sin θ (θ between the current and B), B = μ₀I/(2πr) with
 * μ₀ = 4π × 10⁻⁷ T·m/A and the shortcut μ₀/2π = 2 × 10⁻⁷ T·m/A, F = qvB sin θ, g = 9.8 m/s². ⊙ is out of
 * the page, ⊗ into it. Every direction comes from the right-hand rule for conventional current (the way a
 * positive charge would move), and the narration flips it for electrons every time. No Biot–Savart and no
 * Ampère's law: the solenoid's field is taught by proportion only (it grows with the current and with the
 * turns per meter). Neither lesson gives B = μ₀nI and the AP lesson tests only the direction of a loop's
 * field, so the formula is never shown; Example 1 of clip 8 quotes a measured 5.0 mT that agrees with it.
 * No inductance (AP Physics 2 leaves it out).
 *
 * The checkpoint questions are what a YouTube viewer answers at studymondo.com/v/<code>
 * (src/data/video-short-links.ts). Codes (fixed by the series plan): wire1/wire2, straight1/straight2,
 * parallel1/parallel2, solenoid1/solenoid2. They use new scenarios and numbers, so they never repeat an
 * exit-quiz item or a worked example. Clip titles are the series plan's fixed titles; two examples
 * titles run past 45 characters ("The Field of a Long Straight Wire: Worked Examples", 50, and "Forces
 * Between Parallel Currents: Worked Examples", 49), inside the 60-character limit of types.ts.
 */
export const shotList: ShotList = {
  courseSlug: 'mcat-prep',
  topicSlug: 'mcat-physics-electricity-magnetism-mcat',
  title: 'Magnetism Part 2: Currents & Magnetic Fields',
  overview:
    'Eight animated clips in four pairs about currents and magnetic fields: the force a field puts on a current-carrying wire, the circling field a long straight wire makes and how the fields of several wires add, the attraction and repulsion between parallel currents, and the fields of loops and solenoids, which act like bar magnets and turn in a field like compass needles. Each idea gets a concept clip followed by a worked-examples clip in which every problem is shown in full, with a moment to pause and try it before the solution. Narration stays exam-neutral, and each clip is cut into sections so that introductory physics lessons can reuse the shared ones; the MRI magnet as a superconducting solenoid, with the gauss, sits in a section of its own. Each clip ends with three checkpoint questions. Part 3 continues with magnetic flux.',
  clips: [
    // ── 1 · The magnetic force on a wire (concepts) ──────────────────────
    {
      title: 'The Magnetic Force on a Wire',
      minutes: 7,
      goal: 'Find the size and direction of the magnetic force on a current-carrying wire, and predict how it changes with the current, the field, the angle and the length of wire in the field.',
      keyPoints: [
        'A current is a stream of moving charges, and a magnetic field pushes on every one of them with qvB sin θ. The charges cannot leave the wire, so the pushes add up to a force on the wire itself. If a length L of wire holds moving charge Q drifting at speed v, then Qv = IL, and the force qvB becomes F = ILB.',
        'The size: F = ILB sin θ, where L is the length of wire INSIDE the field and θ is the angle between the current and the field. Across the field (θ = 90°) the force is the largest, ILB; along the field (θ = 0° or 180°) it is zero. This is where the unit comes from: 1 T = 1 N/(A·m), the field that pushes 1 N on each meter of wire carrying 1 A across it.',
        'The direction: the same right-hand rule as for a positive charge, with the CONVENTIONAL current in place of the velocity. Fingers along I, curl toward B, and the thumb gives F. The force is perpendicular to both the wire and the field. Current to the right in a field into the page (⊗) is pushed up; in a field out of the page (⊙), down.',
        'In a metal wire the charges that move are electrons, drifting opposite to I. Two flips cancel: they are negative AND they move the other way, so the force is the one the right-hand rule gives for I. Always work with conventional current, never with the electrons\' velocity.',
        'Reverse the current OR the field and the force reverses; reverse both and it is unchanged. Double the current, the field or the length in the field and the force doubles.',
        'The force on a wire is the push behind motors and loudspeakers: an alternating current in a speaker\'s coil, sitting in a permanent magnet\'s field, pushes the coil and its cone back and forth in step with the current. It is an ordinary force in Newton\'s laws: a horizontal wire floats when an upward ILB equals its weight mg.',
      ],
      showOnScreen: [
        'A short length of wire zoomed in: charges drifting along it, a small qvB arrow on each, then the arrows merging into one force arrow on the wire, with Qv = IL turning qvB into F = ILB',
        'The deck figure\'s three panels: a wire across a ⊗ field with an upward F = ILB, a wire at angle θ to a rightward field with a ⊗ force of size ILB sin θ, and a wire along the field with "F = 0"; then the unit 1 T = 1 N/(A·m) built from F = ILB',
        'A right hand animated over a wire carrying current to the right in a grid of ⊗: fingers along I, curling toward B, thumb up, F perpendicular to both; then the field switched to ⊙ and the force arrow flipping down',
        'Electrons drifting left inside the same wire, labeled "electrons drift opposite to I", with two sign flips stamped beside them and the force arrow staying up',
        'A table of changes: reverse I (force flips), reverse B (force flips), reverse both (force unchanged), double I, B or L (force doubles)',
        'A loudspeaker cut in half: the coil in the magnet\'s gap with the current alternating and the cone moving out and in; then a horizontal wire in a ⊗ field with ILB up and mg down, balanced',
        'The "Remember" recap: F = ILB sin θ, L inside the field; largest across B, zero along it; fingers along conventional I, curl to B, thumb gives F; reverse one, the force flips; reverse both, it does not; motors and speakers',
        'End card: "Up next: The Magnetic Force on a Wire: Worked Examples"',
      ],
      pitfalls: [
        'Using the electrons\' velocity in the right-hand rule and getting the force backward.',
        'Forgetting sin θ, or measuring θ from the wire\'s perpendicular instead of from the current\'s direction.',
        'Using the whole wire\'s length instead of the length inside the field.',
        'Thinking reversing both the current and the field cancels the force.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-magnetism-mcat', 'mcat-physics-electricity-induction-mcat'],
      checkpoint: [
        {
          question: 'In a straight copper wire lying across the page, the conduction electrons drift toward the LEFT. The wire is in a uniform magnetic field pointing into the page. Which way is the wire pushed?',
          options: ['Up the page', 'Down the page', 'Into the page', 'To the left'],
          correctAnswer: 0,
          explanation:
            'Electrons drifting left mean a conventional current to the right. Fingers along I (right), curled toward B (into the page), leave the thumb pointing up the page, so the wire is pushed up. "Down" applies the right-hand rule to the electrons\' velocity without flipping for their negative charge; "into the page" points the force along the field, but it is always perpendicular to B; and "to the left" points it along the drift, but it is always perpendicular to the wire.',
        },
        {
          question: 'A wire carrying a current across a uniform magnetic field feels a force F. Both the current and the field are then reversed, with their sizes unchanged. The force on the wire is now:',
          options: [
            'The same size, in the opposite direction',
            'Zero, since the two reversals cancel',
            'The same force, in the same direction',
            'Twice the size, in the same direction',
          ],
          correctAnswer: 2,
          explanation:
            'Reversing the current flips the force, and reversing the field flips it again, so it ends up exactly as before: same size, same direction. "Opposite direction" counts only one of the two flips; "zero" thinks the reversals cancel the force itself rather than each other; and "twice the size" adds the two changes, but neither reversal changes the size of I or B.',
        },
        {
          question: 'A loudspeaker\'s coil sits in a permanent magnet\'s field and carries an alternating current of 440 cycles per second. The coil and the cone attached to it:',
          options: [
            'Stay still, since the current averages to zero',
            'Move one way, since the magnet\'s field is fixed',
            'Spin, since the force is perpendicular to the wire',
            'Vibrate, since the force reverses with the current',
          ],
          correctAnswer: 3,
          explanation:
            'F = ILB sin θ reverses each time the current reverses, while the magnet\'s field stays put, so the coil is pushed out and in 440 times a second, and the cone makes a 440 Hz tone. "Stay still" averages the force over time, but at each instant it is not zero, and it moves the cone first one way and then the other; "move one way" forgets that the force follows the current, not just the field; and "spin" confuses a force perpendicular to the wire with a turning motion, when here it pushes the whole coil along its axis.',
        },
      ],
    },
    // ── 2 · The magnetic force on a wire (worked examples) ───────────────
    {
      title: 'The Magnetic Force on a Wire: Worked Examples',
      minutes: 6,
      goal: 'Find the force on a wire at any angle to a field, work backward to the current, and use F = ILB with Newton\'s laws to float a wire or find its acceleration.',
      keyPoints: [
        'Size: F = ILB sin θ, with L the length inside the field and θ between the current and B.',
        'Direction: fingers along the conventional current, curl toward B, thumb gives F, always perpendicular to both the wire and the field.',
        'Working backward: I = F/(LB sin θ).',
        'Balance and acceleration: treat ILB as one more force on a free-body diagram. A wire floats when ILB = mg; otherwise a = F_net/m.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: a rightward 0.25 T field with 0.40 m of wire in it: the wire up the page with a ⊗ force of 0.30 N; the wire tilted to 30° above the field with the force shrinking to 0.15 N, still ⊗; the wire along the field with "F = 0"; then the wire back across the field with 4.5 A and 0.45 N',
        'Example 2: a 20 g rod, 0.50 m long, in a ⊗ field of 0.20 T, with its free-body diagram: current to the right, ILB up and mg = 0.196 N down, balanced at 2.0 A; the current reversed and both arrows pointing down (a = 20 m/s²); then the field turned along the rod, the magnetic arrow vanishing and the rod falling at 9.8 m/s²',
        'The "Remember" recap of the method: F = ILB sin θ with L inside the field; fingers along I, curl to B; I = F/(LB sin θ); ILB on the free-body diagram, a = F_net/m',
        'End card: "Up next: The Field of a Long Straight Wire"',
      ],
      workedExample:
        'Example 1: A uniform magnetic field of 0.25 T points to the right, in the plane of the page. A straight wire carries a current of 3.0 A, and 0.40 m of it lies in the field. (a) The wire runs up the page, with the current flowing up. What are the size and direction of the force on it? (b) The wire is turned so that the current points up and to the right, at 30° above the field direction. What is the force now? (c) What is the force when the wire lies along the field? (d) The wire is turned back across the field, as in (a). What current gives a force of 0.45 N? (a) F = ILB = (3.0)(0.40)(0.25) = 0.30 N; fingers up the page, curled toward the right, leave the thumb pointing into the page: 0.30 N, into the page; (b) F = ILB sin θ = (0.30)(sin 30°) = 0.15 N, still into the page, since only the part of the current across the field counts; (c) zero: sin 0° = 0, so a current along the field feels no force; (d) I = F/(LB) = 0.45/((0.40)(0.25)) = 0.45/0.10 = 4.5 A. Example 2: A straight horizontal copper rod of mass 0.020 kg and length 0.50 m lies across a uniform horizontal magnetic field of 0.20 T pointing into the page, with the page held upright so that "up the page" is up. Light, flexible leads carry current to and from the rod. Use g = 9.8 m/s². (a) Which way must the current run for the magnetic force on the rod to point up? (b) What current makes the rod float? (c) The current is suddenly reversed, with the same size. What is the rod\'s acceleration at that moment? (d) With the floating current back in place, the field is turned to point to the right, along the rod. What happens? (a) Fingers to the right, curled into the page, leave the thumb pointing up, so the current must run to the right; (b) the rod floats when ILB = mg: I = mg/(LB) = (0.020)(9.8)/((0.50)(0.20)) = 0.196/0.10 ≈ 2.0 A; (c) the magnetic force now points down with the same size, mg, so the net force is 2mg down and a = 2g ≈ 20 m/s², downward; (d) a current along the field feels no force, so only gravity acts and the rod falls with a = g = 9.8 m/s².',
      pitfalls: [
        'Using cos θ instead of sin θ when the wire is tilted.',
        'Using the mass instead of the weight when the rod floats.',
        'Thinking a reversed force gives an acceleration of g, forgetting that gravity and the magnetic force now add.',
        'Pointing the force along the field instead of perpendicular to it.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-magnetism-mcat', 'mcat-physics-electricity-induction-mcat'],
      checkpoint: [
        {
          question: 'A uniform 0.40 T field points to the right in the plane of the page. A wire carrying 5.0 A has 0.20 m of its length in the field, with the current pointing up and to the right at 30° above the field direction. What is the force on the wire?',
          options: ['0.20 N, into the page', '0.35 N, into the page', '0.20 N, out of the page', '0.40 N, into the page'],
          correctAnswer: 0,
          explanation:
            'F = ILB sin θ = (5.0)(0.20)(0.40)(sin 30°) = 0.40 × 0.5 = 0.20 N. Only the upward part of the current is across the field, and fingers up the page curled toward the right leave the thumb pointing into the page. 0.35 N uses cos 30° instead of sin 30°; "out of the page" curls from B toward I, the wrong order; and 0.40 N drops sin θ, as if the wire crossed the field at right angles.',
        },
        {
          question: 'A 0.040 kg horizontal rod, 0.20 m long, lies across a uniform horizontal field of 0.50 T pointing OUT of the page, with the page upright. What current makes the rod float, and which way must it run? (g = 9.8 m/s²)',
          options: ['3.9 A, to the right', '3.9 A, to the left', '0.40 A, to the left', '0.039 A, to the left'],
          correctAnswer: 1,
          explanation:
            'The rod floats when ILB = mg: I = mg/(LB) = (0.040)(9.8)/((0.20)(0.50)) = 0.392/0.10 ≈ 3.9 A. For an upward force in a field out of the page, fingers must point left: curled from left toward out of the page, the thumb points up. "To the right" gives the downward force (the right direction for a field INTO the page); 0.40 A uses the mass, 0.040 kg, instead of the weight; and 0.039 A leaves the length as 20 instead of 0.20 m.',
        },
        {
          question: 'A horizontal rod floats in a horizontal magnetic field while it carries 2.5 A. The current is suddenly halved to 1.25 A, in the same direction. What is the rod\'s acceleration at that moment? (g = 9.8 m/s²)',
          options: ['4.9 m/s², upward', '7.4 m/s², downward', '4.9 m/s², downward', '9.8 m/s², downward'],
          correctAnswer: 2,
          explanation:
            'While floating, ILB = mg. Halving I halves the magnetic force to mg/2, still upward, so the net force is mg/2 downward and a = g/2 = 4.9 m/s², downward. "Upward" gets the direction of the net force wrong, since the weight is now the larger force; 7.4 m/s² squares the current, as in P = I²R, cutting the force to a quarter; and 9.8 m/s² ignores the magnetic force that is still there, as if the current had been switched off.',
        },
      ],
    },
    // ── 3 · The field of a long straight wire (concepts) ─────────────────
    {
      title: 'The Field of a Long Straight Wire',
      minutes: 7,
      goal: 'Draw the circling field of a long straight wire, find its size and direction at any distance, and add the fields of two wires to find where they add, oppose or cancel.',
      keyPoints: [
        'Moving charge makes magnetic field, so a current does too: a compass beside a wire swings when the current is switched on. The field lines of a long straight wire are circles centered on it, in planes perpendicular to it. B is tangent to the circles: it never points toward the wire, away from it or along it.',
        'The direction comes from the right-hand grip rule: thumb along the conventional current, and the fingers curl the way B circles. Seen end-on, a current out of the page (⊙) has a counterclockwise field, and a current into the page (⊗) a clockwise one. For a wire in the page with the current flowing up, B points into the page (⊗) on its right and out of the page (⊙) on its left. For a beam of electrons, the current runs opposite to their motion, so point the thumb against their velocity.',
        'The size: B = μ₀I/(2πr), with μ₀ = 4π × 10⁻⁷ T·m/A and r the perpendicular distance from the wire. A handy shortcut: μ₀/2π = 2 × 10⁻⁷ T·m/A, so B = (2 × 10⁻⁷)I/r. Double the current and the field doubles; double the distance and the field HALVES. This is 1/r, not the 1/r² of a point charge\'s electric field.',
        'For scale: 10 A at 2.0 cm gives (2 × 10⁻⁷)(10)/(0.020) = 1.0 × 10⁻⁴ T, about twice Earth\'s field of roughly 5 × 10⁻⁵ T, so a compass near a busy cable is pulled off north.',
        'Superposition: near several wires, find each wire\'s field alone and add them as vectors. Between two parallel wires carrying current the SAME way, their fields point opposite ways and partly cancel; between two wires carrying current OPPOSITE ways, the fields point the same way and add.',
        'A zero-field point: for same-direction currents it lies between the wires, nearer the smaller current, where I₁/r₁ = I₂/r₂. The distances are in the same ratio as the currents, with no square root, because B goes as 1/r. Equal currents cancel at the midpoint. For opposite currents there is no zero between the wires; it lies outside, beyond the smaller current.',
      ],
      showOnScreen: [
        'A wire through a horizontal card sprinkled with iron filings and ringed by compasses: the switch closes, the compasses swing to point around the wire, and the filings form circles',
        'The deck figure: a vertical wire with current up and three circles of B around it, a right hand gripping it (thumb along I, fingers curling); then the end view with ⊙ and counterclockwise circles, beside ⊗ with clockwise circles; then a wire in the page with ⊗ marks on its right and ⊙ marks on its left',
        'An electron beam moving right, its conventional current arrow drawn pointing left, and the grip rule applied to that arrow',
        'B = μ₀I/(2πr) with the μ₀/2π = 2 × 10⁻⁷ shortcut; circles at r, 2r and 3r with readouts B, B/2, B/3, set beside a point charge\'s E, E/4, E/9 to contrast 1/r with 1/r²',
        'The 10 A, 2.0 cm readout of 1.0 × 10⁻⁴ T beside Earth\'s 5 × 10⁻⁵ T, and a compass beside the cable turning away from north',
        'Two wires end-on, both ⊙: at a point between them, one arrow up and one down, partly canceling; then one wire switched to ⊗ and the two arrows lining up and adding',
        'The zero-field point for 2.0 A and 1.0 A, one third of the way from the smaller current, two equal and opposite arrows there, and the note "ratio of distances = ratio of currents (no square root)"',
        'The "Remember" recap: circles around the wire; thumb along I, fingers give B; electrons: thumb against their motion; B = μ₀I/(2πr), 1/r; fields add as vectors; same-direction currents: zero between, nearer the smaller; opposite: they add between',
        'End card: "Up next: The Field of a Long Straight Wire: Worked Examples"',
      ],
      pitfalls: [
        'Drawing the field pointing away from the wire, like an electric field, instead of circling it.',
        'Using 1/r² for a wire\'s field.',
        'Pointing the thumb along an electron beam\'s velocity instead of against it.',
        'Taking a square root of the current ratio when locating a zero-field point.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-magnetism-mcat'],
      checkpoint: [
        {
          question: 'A narrow beam of electrons moves toward the right across the page. At a point just above the beam, in the plane of the page, the beam\'s magnetic field points:',
          options: ['Out of the page', 'Into the page', 'Up the page', 'To the left'],
          correctAnswer: 1,
          explanation:
            'Electrons moving right are a conventional current to the left. With the right thumb pointing left, the fingers curl into the page above the beam, so B points into the page. "Out of the page" applies the grip rule to the electrons\' velocity without flipping for their charge; "up the page" points the field away from the beam, as an electric field would, but B circles the beam; and "to the left" points the field along the current, but it is always perpendicular to it.',
        },
        {
          question: 'Two long parallel wires a distance d apart carry currents 3I and I in the SAME direction. Where on the line between them is the net magnetic field zero?',
          options: [
            'Between them, d/4 from the 3I wire',
            'Between them, 0.37d from the I wire',
            'Nowhere between them; only outside',
            'Between them, d/4 from the I wire',
          ],
          correctAnswer: 3,
          explanation:
            'Between same-direction currents the two fields point opposite ways, and they cancel where 3I/r₁ = I/r₂, so r₁ = 3r₂. With r₁ + r₂ = d, r₂ = d/4: a quarter of the way from the smaller current. "d/4 from the 3I wire" puts the point next to the larger current, whose field always wins there; 0.37d takes the square root of the current ratio, the rule for 1/r² electric fields, not 1/r wire fields; and "only outside" is the rule for OPPOSITE currents.',
        },
        {
          question: 'A probe 2.0 cm from a long straight wire reads 6.0 μT. The current is halved, and the probe is moved to 6.0 cm from the wire. What does it read now?',
          options: ['0.33 μT', '2.0 μT', '1.0 μT', '9.0 μT'],
          correctAnswer: 2,
          explanation:
            'B ∝ I/r: halving the current halves the field, and tripling the distance divides it by 3, so B = 6.0 × (1/2) × (1/3) = 1.0 μT. 0.33 μT divides by 3² = 9, treating the wire like a point charge; 2.0 μT accounts for the distance but forgets the halved current; and 9.0 μT multiplies by the distance factor instead of dividing.',
        },
      ],
    },
    // ── 4 · The field of a long straight wire (worked examples) ──────────
    {
      title: 'The Field of a Long Straight Wire: Worked Examples',
      minutes: 6,
      goal: 'Find a wire\'s field in size and direction at any point, the force it puts on a moving charge, the net field of two wires, and where that net field is zero.',
      keyPoints: [
        'One wire: B = (2 × 10⁻⁷)I/r with r in meters; the direction from the grip rule, thumb along I.',
        'A charge moving near the wire: F = qvB sin θ with the wire\'s B at that point, direction from the right-hand rule for a positive charge and flipped for a negative one.',
        'Two wires: each field alone, an arrow for each at the point, then add with signs. Same-direction currents oppose between the wires; opposite currents add there.',
        'Zero-field point: first decide the region (between the wires for same-direction currents, outside beyond the smaller one for opposite currents), then set I₁/r₁ = I₂/r₂.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: a wire in the page carrying 6.0 A up; P 3.0 cm to its right with a ⊗ readout of 4.0 × 10⁻⁵ T, Q 6.0 cm to its left with a ⊙ readout of 2.0 × 10⁻⁵ T; a proton at P moving up the page with a force arrow pointing left, toward the wire (3.2 × 10⁻¹⁸ N), and an electron beside it pushed the other way; then the 12 cm circle where B = 1.0 × 10⁻⁵ T',
        'Example 2: wires A (3.0 A, ⊙) and B (5.0 A, ⊙) 8.0 cm apart, end-on, with counterclockwise circles: at the midpoint an up arrow of 1.5 × 10⁻⁵ T and a down arrow of 2.5 × 10⁻⁵ T, net 1.0 × 10⁻⁵ T down; the zero point 3.0 cm from A; then B switched to ⊗, both midpoint arrows up (4.0 × 10⁻⁵ T), and the zero point jumping outside, 12 cm to the left of A',
        'The "Remember" recap of the method: (2 × 10⁻⁷)I/r, thumb along I; F = qvB, flipped for negative charges; arrows for each wire, then add; zero point: region first, then I₁/r₁ = I₂/r₂',
        'End card: "Up next: Forces Between Parallel Currents"',
      ],
      workedExample:
        'Example 1: A long straight wire lies in the plane of the page and carries a current of 6.0 A toward the top of the page. Point P is 3.0 cm to the right of the wire, and point Q is 6.0 cm to its left. Use μ₀ = 4π × 10⁻⁷ T·m/A. (a) What are the size and direction of the wire\'s magnetic field at P? (b) What are the size and direction of the field at Q? (c) A proton (charge +1.6 × 10⁻¹⁹ C) passes through P moving up the page, parallel to the current, at 5.0 × 10⁵ m/s. What force does the wire\'s field put on it? (d) How far from the wire is the field 1.0 × 10⁻⁵ T? (a) B = (2 × 10⁻⁷)(6.0)/(0.030) = 4.0 × 10⁻⁵ T; with the thumb up the page, the fingers curl into the page on the right: into the page; (b) B = (2 × 10⁻⁷)(6.0)/(0.060) = 2.0 × 10⁻⁵ T, out of the page on the left, half the field at P because Q is twice as far; (c) the velocity is perpendicular to B, so F = qvB = (1.6 × 10⁻¹⁹)(5.0 × 10⁵)(4.0 × 10⁻⁵) = 3.2 × 10⁻¹⁸ N; fingers up the page, curled into the page, leave the thumb pointing left, toward the wire; an electron moving the same way would be pushed right, away from it; (d) r = (2 × 10⁻⁷)I/B = (2 × 10⁻⁷)(6.0)/(1.0 × 10⁻⁵) = 0.12 m = 12 cm. Example 2: Two long parallel wires run perpendicular to the page, 8.0 cm apart. Wire A, on the left, carries 3.0 A out of the page; wire B, on the right, carries 5.0 A out of the page. Use μ₀ = 4π × 10⁻⁷ T·m/A. (a) What is the net magnetic field at the midpoint between them? (b) Where on the line between them is the net field zero? (c) The current in B is reversed, into the page, with the same size. What is the net field at the midpoint now? (d) Where on the line through the wires is the net field zero in case (c)? (a) Each wire is 0.040 m away. B_A = (2 × 10⁻⁷)(3.0)/(0.040) = 1.5 × 10⁻⁵ T and B_B = (2 × 10⁻⁷)(5.0)/(0.040) = 2.5 × 10⁻⁵ T. Both currents are out of the page, so both fields circle counterclockwise: to the right of A, A\'s field points up the page; to the left of B, B\'s field points down. Net: 2.5 − 1.5 = 1.0 × 10⁻⁵ T, down the page; (b) same-direction currents, so the zero lies between them, nearer the smaller current: 3.0/x = 5.0/(8.0 − x) gives 8.0x = 24, so x = 3.0 cm from A, where each field is 2.0 × 10⁻⁵ T; (c) B\'s field now circles clockwise, so to its left it points up, the same way as A\'s: 1.5 + 2.5 = 4.0 × 10⁻⁵ T, up the page; (d) opposite currents give no zero between the wires; it lies outside, beyond the smaller current, A. With x measured to the left of A: 3.0/x = 5.0/(x + 8.0) gives 2.0x = 24, so x = 12 cm to the left of A, where each field is 5.0 × 10⁻⁶ T and the two point opposite ways.',
      pitfalls: [
        'Leaving the distance in centimeters, or squaring it.',
        'Using μ₀/4π = 10⁻⁷ as the shortcut instead of μ₀/2π = 2 × 10⁻⁷.',
        'Adding the two midpoint fields for same-direction currents without checking their directions.',
        'Looking for a zero between two opposite currents.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-magnetism-mcat'],
      checkpoint: [
        {
          question: 'A long straight wire in the plane of the page carries 8.0 A toward the BOTTOM of the page. What are the size and direction of its magnetic field at a point 4.0 cm to its right? (μ₀ = 4π × 10⁻⁷ T·m/A)',
          options: [
            '4.0 × 10⁻⁵ T, into the page',
            '4.0 × 10⁻⁵ T, out of the page',
            '1.0 × 10⁻³ T, out of the page',
            '2.0 × 10⁻⁵ T, out of the page',
          ],
          correctAnswer: 1,
          explanation:
            'B = (2 × 10⁻⁷)(8.0)/(0.040) = 4.0 × 10⁻⁵ T. With the thumb pointing down the page, the fingers curl out of the page on the right side. "Into the page" is the direction for a current flowing UP the page; 1.0 × 10⁻³ T divides by r², as for a point charge; and 2.0 × 10⁻⁵ T uses μ₀/4π = 10⁻⁷ as the shortcut instead of μ₀/2π = 2 × 10⁻⁷.',
        },
        {
          question: 'Two long parallel wires 10 cm apart carry 2.0 A and 8.0 A in the same direction. Where between them is the net magnetic field zero?',
          options: [
            '2.0 cm from the 8.0 A wire',
            '3.3 cm from the 2.0 A wire',
            '5.0 cm from each of the wires',
            '2.0 cm from the 2.0 A wire',
          ],
          correctAnswer: 3,
          explanation:
            'Same-direction currents, so the zero lies between the wires, nearer the smaller current: 2.0/x = 8.0/(10 − x) gives 20 = 10x, so x = 2.0 cm from the 2.0 A wire (8.0 cm from the other), where each field is 2.0 × 10⁻⁵ T. "2.0 cm from the 8.0 A wire" puts the point beside the larger current, whose field wins there; 3.3 cm uses the square root of the current ratio, the rule for 1/r² fields; and the midpoint works only for equal currents.',
        },
        {
          question: 'Wire A carries 4.0 A out of the page and wire B, 10 cm to its right, carries 6.0 A into the page. What is the net magnetic field at the midpoint between them? (μ₀ = 4π × 10⁻⁷ T·m/A)',
          options: [
            '8.0 × 10⁻⁶ T, up the page',
            '4.0 × 10⁻⁵ T, down the page',
            '4.0 × 10⁻⁵ T, up the page',
            '2.0 × 10⁻⁵ T, up the page',
          ],
          correctAnswer: 2,
          explanation:
            'Each wire is 0.050 m away: B_A = (2 × 10⁻⁷)(4.0)/(0.050) = 1.6 × 10⁻⁵ T and B_B = (2 × 10⁻⁷)(6.0)/(0.050) = 2.4 × 10⁻⁵ T. A\'s counterclockwise field points up to its right, and B\'s clockwise field points up to its left, so they add: 4.0 × 10⁻⁵ T, up the page. 8.0 × 10⁻⁶ T subtracts them, the rule for same-direction currents; "down the page" curls both fields the wrong way; and 2.0 × 10⁻⁵ T measures both distances as the full 10 cm instead of 5.0 cm.',
        },
      ],
    },
    // ── 5 · Forces between parallel currents (concepts) ──────────────────
    {
      title: 'Forces Between Parallel Currents',
      minutes: 7,
      goal: 'Explain why parallel currents attract and antiparallel currents repel, find the force per meter between two wires, and add the forces on a wire from several others.',
      keyPoints: [
        'Two parallel wires push or pull on each other because each one sits in the other\'s field. Wire 1\'s field at wire 2 is B₁ = μ₀I₁/(2πd), perpendicular to wire 2, so a length L of wire 2 feels F = I₂LB₁. Put together, the force per meter is F/L = μ₀I₁I₂/(2πd).',
        'Direction, in two steps: find wire 1\'s field at wire 2 with the grip rule, then the force on wire 2 with the right-hand rule. Currents in the SAME direction attract; currents in OPPOSITE directions repel. It is the reverse of charges: for currents, likes attract.',
        'Do not reason from the field midway between the wires. Two equal same-direction currents give zero field at the midpoint, yet the wires attract: what matters is each wire\'s field at the OTHER wire.',
        'Newton\'s third law: the two wires feel forces of the same size in opposite directions, even when their currents differ. A 10 A wire and a 1 A wire pull on each other equally.',
        'Scaling: F/L ∝ I₁I₂/d. Double one current and the force doubles; double both and it quadruples; double the separation and it halves. This force once defined the ampere: 1 A in each of two wires 1 m apart gives 2 × 10⁻⁷ N per meter.',
        'Charges moving alongside a wire follow the same rule: a positive charge moving the same way as the current is pulled toward the wire, and a negative one moving that way is pushed away. With three or more wires, find the force from each of the others separately and add them as vectors.',
      ],
      showOnScreen: [
        'Two vertical wires with current up in both: wire 1\'s circles reaching wire 2, a ⊗ mark at wire 2, the right hand giving a force arrow toward wire 1; then the same done for wire 1, and F/L = μ₀I₁I₂/(2πd) assembled from B₁ and F = I₂LB₁',
        'The deck figure: same-direction currents with arrows toward each other ("attract"), opposite currents with arrows apart ("repel"), and the hook "likes attract, for currents"',
        'Two equal same-direction wires with the midpoint readout "B = 0" and a red cross over the conclusion "no force", then the field at each wire lighting up and the attraction arrows appearing',
        'A thick 10 A wire and a thin 1 A wire with equal-length force arrows pointing at each other, labeled "Newton\'s third law"',
        'A scaling strip: I₁ doubled (F doubles), both doubled (F × 4), d doubled (F halves); then the definition of the ampere with 1 A, 1 m and 2 × 10⁻⁷ N/m',
        'A proton beam moving up beside a wire with current up, bending toward it, and an electron beam moving up, bending away; then three wires in a row with a force arrow from each neighbor on the end wire and their sum',
        'The "Remember" recap: each wire in the other\'s field; F/L = μ₀I₁I₂/(2πd); same direction attract, opposite repel; equal and opposite forces; F ∝ I₁I₂/d; several wires, add the forces',
        'End card: "Up next: Forces Between Parallel Currents: Worked Examples"',
      ],
      pitfalls: [
        'Carrying the like-charges-repel rule over to currents.',
        'Deciding there is no force because the field midway between the wires is zero.',
        'Giving the wire with the larger current the larger force.',
        'Using 1/d² instead of 1/d.',
      ],
      lessonParts: [1, 2],
      mcatTags: ['mcat-physics-electricity-magnetism-mcat', 'mcat-physics-electricity-induction-mcat'],
      checkpoint: [
        {
          question: 'Two long parallel wires carry currents in the same direction: wire A carries 10 A and wire B carries 2.0 A. Compared with the magnetic force that A exerts on B, the force that B exerts on A is:',
          options: [
            '5 times larger, pointing toward B',
            'The same size, pointing toward B',
            '5 times smaller, pointing toward B',
            'The same size, pointing away from B',
          ],
          correctAnswer: 1,
          explanation:
            'The two forces are a Newton\'s third law pair: equal in size and opposite in direction. Same-direction currents attract, so B pulls A toward B. You can also see it from F/L = μ₀I₁I₂/(2πd), which uses both currents, so it is the same number for each wire. "5 times larger" and "5 times smaller" use only one wire\'s current, and "away from B" treats like currents as repelling, like like charges.',
        },
        {
          question: 'Two long parallel wires carry equal currents in the same direction, so the magnetic field midway between them is zero. A student concludes that the wires exert no force on each other. In fact, the wires:',
          options: [
            'Exert no force, as the midpoint field is zero',
            'Repel, the way two like charges repel each other',
            'Attract: what counts is the field at each wire',
            'Attract, but only if their currents are unequal',
          ],
          correctAnswer: 2,
          explanation:
            'Each wire feels the field of the OTHER wire at its own location, which is not zero, and the right-hand rule then gives a force toward the other wire: they attract. The zero at the midpoint is where the two fields cancel, and no wire sits there. "No force" reasons from the wrong point; "repel" carries the like-charges rule over to currents; and "only if unequal" again confuses the midpoint zero with the forces on the wires.',
        },
        {
          question: 'Three long parallel wires lie in one plane, equally spaced: A on the left, B in the middle, C on the right. All carry equal currents; A and C carry current up the page and B carries current down. The net magnetic force on wire A is:',
          options: [
            'Toward B, half the force B alone exerts',
            'Away from B, 1.5 times the force B exerts',
            'Zero, since the two forces on A cancel',
            'Away from B, half the force B alone exerts',
          ],
          correctAnswer: 3,
          explanation:
            'B carries current opposite to A, so it repels A with a force F, pushing A away from B. C carries current the same way as A, so it attracts A toward C (toward B\'s side), but C is twice as far away, so its force is F/2. Net: F − F/2 = F/2, away from B. "Toward B" swaps the attract and repel rules; "1.5 times" adds the two forces as if they pointed the same way; and "zero" forgets that C\'s force is smaller because it is twice as far.',
        },
      ],
    },
    // ── 6 · Forces between parallel currents (worked examples) ───────────
    {
      title: 'Forces Between Parallel Currents: Worked Examples',
      minutes: 6,
      goal: 'Find the force between two parallel wires in size and direction, check it with Newton\'s third law, and find the net force on a wire between two others.',
      keyPoints: [
        'Field first: B₁ = (2 × 10⁻⁷)I₁/d at the other wire, with d in meters.',
        'Then the force: F = I₂LB₁ on a length L, or F/L = μ₀I₁I₂/(2πd) per meter. Same direction attract, opposite repel.',
        'The partner force on the first wire is the same size and opposite in direction.',
        'Several wires: the force from each neighbor alone, each with its own direction, then add with signs.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: wire 1 (10 A up) and wire 2 (6.0 A down) 4.0 cm apart: wire 1\'s ⊗ field at wire 2 (5.0 × 10⁻⁵ T), the 6.0 × 10⁻⁴ N force on 2.0 m of wire 2 pointing away, the equal force on wire 1 pointing the other way; then the gap widened to 8.0 cm, wire 2\'s current flipped up, and a 3.0 × 10⁻⁴ N pull toward wire 1',
        'Example 2: wires A (4.0 A), B (3.0 A) and C (2.0 A), all up, 2.0 cm apart: on B a 1.2 × 10⁻⁴ N/m arrow toward A and a 6.0 × 10⁻⁵ N/m arrow toward C, net 6.0 × 10⁻⁵ N/m toward A; then C\'s current raised to 4.0 A and the two arrows matching for zero',
        'The "Remember" recap of the method: B of one wire at the other; F = I₂LB₁ or F/L = μ₀I₁I₂/(2πd); attract or repel from the directions; equal and opposite partner force; several wires, add with signs',
        'End card: "Up next: Loops and Solenoids"',
      ],
      workedExample:
        'Example 1: Two long parallel wires lie in the plane of the page, 4.0 cm apart. Wire 1, on the left, carries 10 A up the page; wire 2, on the right, carries 6.0 A down the page. Use μ₀ = 4π × 10⁻⁷ T·m/A. (a) What are the size and direction of wire 1\'s magnetic field at wire 2? (b) What force acts on a 2.0 m length of wire 2, and which way? (c) What force acts on a 2.0 m length of wire 1? (d) The wires are moved to 8.0 cm apart and wire 2\'s current is reversed to run up the page. What force acts on 2.0 m of wire 2 now? (a) B₁ = (2 × 10⁻⁷)(10)/(0.040) = 5.0 × 10⁻⁵ T; with the thumb up the page, the fingers curl into the page on wire 1\'s right side, so the field at wire 2 points into the page; (b) F = I₂LB₁ = (6.0)(2.0)(5.0 × 10⁻⁵) = 6.0 × 10⁻⁴ N; fingers down the page, curled into the page, leave the thumb pointing right, away from wire 1: the opposite currents repel (3.0 × 10⁻⁴ N per meter); (c) Newton\'s third law: 6.0 × 10⁻⁴ N, pointing left, away from wire 2; check: wire 2\'s field at wire 1 is (2 × 10⁻⁷)(6.0)/(0.040) = 3.0 × 10⁻⁵ T, and (10)(2.0)(3.0 × 10⁻⁵) = 6.0 × 10⁻⁴ N; (d) doubling d halves the force, to 3.0 × 10⁻⁴ N, and the currents now run the same way, so it is an attraction: wire 2 is pulled left, toward wire 1. Example 2: Three long parallel wires lie in the plane of the page, 2.0 cm apart: A on the left, B in the middle and C on the right. All three carry current up the page: A carries 4.0 A, B carries 3.0 A and C carries 2.0 A. Use μ₀ = 4π × 10⁻⁷ T·m/A. (a) What force per meter does A exert on B, and which way? (b) What force per meter does C exert on B, and which way? (c) What is the net force per meter on B? (d) What current, in which direction, must C carry for the net force on B to be zero? (a) F/L = (2 × 10⁻⁷)(4.0)(3.0)/(0.020) = 1.2 × 10⁻⁴ N/m; same direction, so it attracts B toward A, to the left; (b) F/L = (2 × 10⁻⁷)(2.0)(3.0)/(0.020) = 6.0 × 10⁻⁵ N/m, attracting B toward C, to the right; (c) 1.2 × 10⁻⁴ − 0.60 × 10⁻⁴ = 6.0 × 10⁻⁵ N/m, to the left, toward A; (d) C must pull B to the right as hard as A pulls it to the left; at the same distance that takes the same current in the same direction: 4.0 A, up the page.',
      pitfalls: [
        'Leaving the separation in centimeters.',
        'Calling opposite currents attractive, by analogy with opposite charges.',
        'Forgetting the length when the question asks for the force on a stretch of wire, not per meter.',
        'Adding the two forces on the middle wire as if they pointed the same way.',
      ],
      lessonParts: [1, 2],
      mcatTags: ['mcat-physics-electricity-magnetism-mcat', 'mcat-physics-electricity-induction-mcat'],
      checkpoint: [
        {
          question: 'Two long parallel wires 5.0 cm apart carry 8.0 A and 4.0 A in the same direction. What magnetic force acts on a 3.0 m length of the 4.0 A wire? (μ₀ = 4π × 10⁻⁷ T·m/A)',
          options: [
            '3.8 × 10⁻⁴ N, attractive',
            '3.8 × 10⁻⁴ N, repulsive',
            '1.3 × 10⁻⁴ N, attractive',
            '7.7 × 10⁻³ N, attractive',
          ],
          correctAnswer: 0,
          explanation:
            'The 8.0 A wire\'s field at the other is (2 × 10⁻⁷)(8.0)/(0.050) = 3.2 × 10⁻⁵ T, so F = I₂LB₁ = (4.0)(3.0)(3.2 × 10⁻⁵) ≈ 3.8 × 10⁻⁴ N; same-direction currents attract. "Repulsive" carries the like-charges rule over to currents; 1.3 × 10⁻⁴ N is the force per meter, without the 3.0 m length; and 7.7 × 10⁻³ N divides by d², as if the wire\'s field were inverse-square.',
        },
        {
          question: 'Two long parallel wires 2.0 cm apart carry 12 A and 3.0 A in opposite directions. What is the magnetic force per meter on the 12 A wire? (μ₀ = 4π × 10⁻⁷ T·m/A)',
          options: [
            '3.6 × 10⁻⁴ N/m, attractive',
            '3.0 × 10⁻⁵ N/m, repulsive',
            '1.8 × 10⁻² N/m, repulsive',
            '3.6 × 10⁻⁴ N/m, repulsive',
          ],
          correctAnswer: 3,
          explanation:
            'F/L = μ₀I₁I₂/(2πd) = (2 × 10⁻⁷)(12)(3.0)/(0.020) = 3.6 × 10⁻⁴ N/m, the same for both wires, and opposite currents repel. "Attractive" uses the opposite-charges rule; 3.0 × 10⁻⁵ N/m is the 3.0 A wire\'s FIELD in tesla, (2 × 10⁻⁷)(3.0)/(0.020), never multiplied by the 12 A current; and 1.8 × 10⁻² N/m divides by d² instead of d.',
        },
        {
          question: 'Three long parallel wires lie in one plane, 3.0 cm apart, all carrying current in the same direction: A carries 9.0 A, B (in the middle) carries 2.0 A and C carries 3.0 A. What is the net magnetic force per meter on B? (μ₀ = 4π × 10⁻⁷ T·m/A)',
          options: [
            '1.6 × 10⁻⁴ N/m, toward A',
            '8.0 × 10⁻⁵ N/m, toward C',
            '8.0 × 10⁻⁵ N/m, toward A',
            '1.2 × 10⁻⁴ N/m, toward A',
          ],
          correctAnswer: 2,
          explanation:
            'A pulls B toward A with (2 × 10⁻⁷)(9.0)(2.0)/(0.030) = 1.2 × 10⁻⁴ N/m, and C pulls B toward C with (2 × 10⁻⁷)(3.0)(2.0)/(0.030) = 4.0 × 10⁻⁵ N/m; they point opposite ways, so the net is 8.0 × 10⁻⁵ N/m toward A. 1.6 × 10⁻⁴ N/m adds the two pulls as if they pointed the same way; "toward C" treats same-direction currents as repelling, so the larger push from A sends B toward C; and 1.2 × 10⁻⁴ N/m leaves out wire C.',
        },
      ],
    },
    // ── 7 · Loops and solenoids (concepts) ───────────────────────────────
    {
      title: 'Loops and Solenoids',
      minutes: 7.5,
      goal: 'Find the direction of the field of a current loop and a solenoid, name their north and south ends, predict how a solenoid\'s field scales, and explain why a loop in a field twists like a compass needle.',
      keyPoints: [
        'Bend a wire into a loop and every piece of it makes a field that circles that piece. Through the middle of the loop, all of those fields point the same way: along the loop\'s axis, perpendicular to its plane. To find the direction, curl the fingers of your right hand with the current around the loop; the thumb gives B through the center. A counterclockwise current in the page gives a field out of the page (⊙) at the center, and a clockwise one gives a field into it (⊗).',
        'A current loop is a small magnet, a magnetic dipole. The face the field lines leave is its north pole and the other face its south pole; far away, its field looks like a short bar magnet\'s. Electrons circling and spinning in atoms make each atom a tiny loop like this, which is where a permanent magnet\'s field comes from.',
        'A solenoid is a long coil of many turns. Inside, the turns\' fields add to a strong, nearly uniform field along the axis, drawn as straight, evenly spaced lines; outside, they nearly cancel, leaving a weak field shaped like a bar magnet\'s, with the lines leaving the north end and looping around to enter the south end. The same grip works: fingers curled with the current in the turns, thumb along B inside, pointing to the north end.',
        'The field inside a long solenoid is the same everywhere away from the ends, and it grows with the current and with how tightly the turns are packed: double the current, or wind twice as many turns into the same length, and the field doubles. Slide an iron core inside and its domains line up with the coil\'s field, multiplying it many times. That is an electromagnet: a strong magnet that switches off when the current stops.',
        'A loop in an outside field: in a uniform field the forces on opposite sides of the loop (each F = ILB) are equal and opposite, so the net force is zero, but unless the loop\'s own field already points along the outside field, they twist it. Like a compass needle, the loop turns to line its own field up with the outside field. Keep the current reversing every half turn and the loop keeps spinning: that is the electric motor.',
        'The main magnet of an MRI scanner is a large solenoid, and the patient lies inside it, in its uniform field of 1.5 to 3 T. Field sizes are also quoted in gauss: 1 G = 10⁻⁴ T, so Earth\'s field is about 0.5 G and a 1.5 T scanner is 15,000 G, about 30,000 times Earth\'s field. The windings are superconducting, with zero resistance, so once the current is started it keeps flowing, and the field stays on, with no power supply. Takeaway: the MRI field is a solenoid\'s uniform interior field.',
      ],
      showOnScreen: [
        'A straight wire bent into a circle, its small circling fields drawn around a few pieces, all pointing the same way through the middle; then a right hand curling with a counterclockwise current and the thumb pointing out of the page (⊙), beside a clockwise loop with ⊗ at its center',
        'The loop turned edge-on with its field lines looping through it and around, the leaving face labeled N and the other S, next to a short bar magnet with the same pattern; then an atom drawn as a tiny circling electron',
        'The deck figure\'s solenoid: turns added one at a time until the interior lines straighten and space evenly; outside, weak return loops from N around to S; a right hand gripping the coil with the thumb pointing to the N end',
        'A field meter moved along the axis inside the coil, its readout steady away from the ends; the current doubled (field doubles), the turns packed twice as tightly (field doubles); then an iron core sliding in, the field lines crowding, and a crane electromagnet dropping scrap when its current is cut',
        'A square loop in a rightward uniform field: zero force on the sides along B, equal and opposite forces on the other two sides, the loop twisting until its own field points along the outside field; a compass needle doing the same beside it; then a motor\'s commutator flipping the current every half turn',
        'An MRI scanner cut away to show its solenoid, the patient on the axis in straight, uniform field lines, a readout "1.5 T = 15,000 G", Earth\'s 0.5 G beside it, and the superconducting windings labeled "R = 0: the current keeps flowing"',
        'The "Remember" recap (shared ideas only): curl fingers with the current, thumb gives B through the loop; a loop is a magnet, N where the lines leave; solenoid: uniform inside, bar magnet outside; more current or more turns per meter, more field; iron core, electromagnet; a loop in a field: no net force, but it twists to line up, the motor',
        'End card: "Up next: Loops and Solenoids: Worked Examples"',
      ],
      pitfalls: [
        'Using the straight-wire grip on a loop and drawing the field circling the loop instead of passing through it.',
        'Naming the face the field lines enter as the north pole.',
        'Thinking a solenoid\'s field is strongest near the windings or weakest at the center.',
        'Expecting a net force on a current loop in a uniform field.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-magnetism-mcat'],
      mcatOnly: [
        'The main magnet of an MRI scanner is a large solenoid, and the patient lies inside it, in its uniform field of 1.5 to 3 T. Field sizes are also quoted in gauss: 1 G = 10⁻⁴ T, so Earth\'s field is about 0.5 G and a 1.5 T scanner is 15,000 G, about 30,000 times Earth\'s field. The windings are superconducting, with zero resistance, so once the current is started it keeps flowing, and the field stays on, with no power supply. Takeaway: the MRI field is a solenoid\'s uniform interior field.',
      ],
      mcatOnlyQuestions: [2],
      checkpoint: [
        {
          question: 'A flat circular loop of wire lies on a horizontal table. Seen from above, its current flows clockwise. Which way does the magnetic field point at the loop\'s center, and which face of the loop acts as its north pole?',
          options: [
            'Upward; the top face is north',
            'Downward; the top face is north',
            'Downward; the bottom face is north',
            'Upward; the bottom face is north',
          ],
          correctAnswer: 2,
          explanation:
            'Curl the right fingers clockwise as seen from above, and the thumb points down: B points down through the center. The field lines leave the loop through its bottom face, so the bottom face is the north pole. "Upward" curls the fingers counterclockwise; "downward, top face north" gets the field right but names the face the lines ENTER as north; and "upward, bottom face north" makes both mistakes.',
        },
        {
          question: 'A rectangular loop carrying a steady current sits in a uniform magnetic field, with the plane of the loop parallel to the field lines. What does the field do to the loop?',
          options: [
            'A net force along the field, and no torque',
            'No net force, but a torque that turns it',
            'Neither a net force nor a torque on it',
            'A net force across the field, and a torque',
          ],
          correctAnswer: 1,
          explanation:
            'The two sides that cross the field feel forces F = ILB of the same size in opposite directions, and the sides along the field feel none, so the net force is zero. The two forces act on opposite sides of the loop, though, so they twist it until its own field lines up with the outside field: the motor principle. "A net force along the field" adds forces that point opposite ways; "neither" sees the forces cancel and misses that they act along different lines; and "a net force across the field" counts only one of the two sides.',
        },
        {
          question: 'A passage states that the main field inside an MRI scanner\'s bore is 3.0 T. Using 1 G = 10⁻⁴ T, what is this field in gauss?',
          options: ['3.0 × 10⁻⁴ G', '6.0 × 10⁴ G', '3.0 × 10² G', '3.0 × 10⁴ G'],
          correctAnswer: 3,
          explanation:
            'A gauss is a ten-thousandth of a tesla, so 1 T = 10⁴ G and 3.0 T = 3.0 × 10⁴ G. 3.0 × 10⁻⁴ G runs the conversion backward, multiplying by 10⁻⁴; 6.0 × 10⁴ G is how many times stronger the field is than Earth\'s 0.5 G, a comparison, not a conversion; and 3.0 × 10² G treats the gauss as a hundredth of a tesla, like a centi- prefix.',
        },
      ],
    },
    // ── 8 · Loops and solenoids (worked examples) ────────────────────────
    {
      title: 'Loops and Solenoids: Worked Examples',
      minutes: 6,
      goal: 'Find a solenoid\'s field direction, poles and compass readings, scale its field with the current and the turns per meter, and find the forces on each side of a current loop in a uniform field.',
      keyPoints: [
        'Direction: curl the right fingers with the current in the turns; the thumb gives B inside and points to the north end.',
        'Outside, the field runs from the north end around to the south end; a compass on the axis beyond either end points the same way as the field inside.',
        'Scaling: the field inside is proportional to the current and to the turns per meter, N/ℓ. Work out the new turns per meter first.',
        'A loop in a uniform field: F = ILB on each side that crosses the field and zero on sides along it; the forces cancel, and they twist the loop until its own field points along the outside field.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the 0.20 m, 400-turn solenoid lying left to right, an eye at its right end seeing a counterclockwise current, B inside pointing right, the right end labeled N; a compass at the center and one on the axis beyond the left end, both pointing right; the readout going 5.0 → 7.5 mT at 3.0 A, then the coil stretched to 0.40 m and the readout falling to 3.8 mT',
        'Example 2: the 0.10 m square loop with a counterclockwise 2.0 A current in a rightward 0.50 T field: no arrows on the top and bottom sides, a ⊗ 0.10 N arrow on the right side and a ⊙ 0.10 N arrow on the left, "F_net = 0"; then the loop rotating about its vertical center line through 90° until its own field points right, the four forces now pointing outward in its plane',
        'The "Remember" recap of the method: fingers with the current, thumb to N; outside N → S, compass on the axis points with the inside field; field ∝ current × turns per meter; a loop in a uniform field: no net force, it twists to line up',
        'End card: "Up next: Magnetic Flux"',
      ],
      workedExample:
        'Example 1: A long solenoid lies along the page from left to right. It is 0.20 m long, has 400 turns and carries a current of 2.0 A; looking into its right end, you see the current circulating counterclockwise. A probe at its center reads 5.0 mT. (a) Which way does the field point inside, and which end is the north pole? (b) A small compass is placed at the center, and another on the axis just beyond the LEFT end. Which way does each needle\'s north end point? (c) The current is raised to 3.0 A. What does the probe read? (d) With 3.0 A still flowing, the same 400 turns are stretched out to a length of 0.40 m. What does the probe read now? (a) Fingers curled counterclockwise as you look into the right end leave the thumb pointing toward you, so the field inside points to the right and the lines leave through the right end: the right end is the north pole; (b) at the center the needle lines up with the inside field and points right; beyond the left end, the south pole, the field lines are heading into the coil, so that needle also points right, toward the coil; (c) the field is proportional to the current: 5.0 mT × (3.0/2.0) = 7.5 mT; (d) doubling the length with the same turns halves the turns per meter, from 2000 per meter to 1000 per meter, so the field halves: 7.5/2 ≈ 3.8 mT. Example 2: A square loop of wire 0.10 m on a side lies in the plane of the page and carries a current of 2.0 A, counterclockwise as you look at the page. A uniform magnetic field of 0.50 T points to the right, in the plane of the page. (a) What force acts on each of the four sides? (b) What is the net force on the loop? (c) What does the field do to the loop? (d) Through what angle does the loop turn before the twisting stops, and which way does its own field then point? (a) Counterclockwise, the current runs right along the bottom side, up the right side, left along the top and down the left side. The top and bottom sides run along the field, so they feel no force; the right side: F = ILB = (2.0)(0.10)(0.50) = 0.10 N, and fingers up the page curled toward the right leave the thumb pointing into the page; the left side: 0.10 N, out of the page, since its current runs down; (b) zero: the two 0.10 N forces are equal and opposite; (c) the forces act on opposite edges, pushing the right side into the page and the left side out, so they twist the loop about its vertical center line; (d) the loop\'s own field starts out pointing out of the page (counterclockwise current) and the loop turns through 90°, until that field points to the right, along the outside field; then all four forces lie in the plane of the loop, pointing outward, and they no longer twist it.',
      pitfalls: [
        'Reading the current\'s sense from the wrong end of the coil.',
        'Pointing a compass beyond the south end away from the coil.',
        'Doubling the field when more turns are spread over a longer coil, instead of working out the turns per meter.',
        'Giving the sides that run along the field a force.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-magnetism-mcat'],
      checkpoint: [
        {
          question: 'A solenoid 0.15 m long with 300 turns carries 1.5 A, and the field inside it is 3.8 mT. It is rewound with 600 turns over a length of 0.30 m and carries 4.5 A. What is the field inside now?',
          options: ['23 mT', '11 mT', '5.7 mT', '34 mT'],
          correctAnswer: 1,
          explanation:
            'The new coil has 600/0.30 = 2000 turns per meter, the same as the old one (300/0.15 = 2000), so only the current changes: tripled, so the field triples, to 3 × 3.8 ≈ 11 mT. 23 mT doubles the field for the doubled turns but forgets that they are spread over twice the length; 5.7 mT halves it for the doubled length but forgets the doubled turns; and 34 mT multiplies by 3² = 9, squaring the current.',
        },
        {
          question: 'A solenoid lies along an east–west line. Looking into its east end, you see the current circulating clockwise. Which end of the coil is its north pole, and which way does a compass needle at its center point?',
          options: [
            'The west end; the needle points west',
            'The east end; the needle points east',
            'The west end; the needle points east',
            'The east end; the needle points west',
          ],
          correctAnswer: 0,
          explanation:
            'Fingers curled clockwise as you look into the east end leave the thumb pointing away from you, so the field inside points west and the lines leave through the coil\'s west end: that end is its north pole, and the needle at the center lines up with the field, pointing west. "The east end, east" curls the fingers counterclockwise; "west end, needle east" points the needle against the field; and "east end, needle west" gets the field right but names the end the lines enter as the north pole.',
        },
        {
          question: 'A rectangular loop with vertical sides 0.20 m long and horizontal sides 0.050 m long lies in the plane of the page and carries 3.0 A clockwise. A uniform 0.40 T field points to the right, in the plane of the page. What force acts on the loop\'s LEFT side, and what is the net force on the loop?',
          options: [
            '0.24 N out of the page; net force zero',
            '0.24 N into the page; net force 0.48 N',
            '0.24 N into the page; net force zero',
            '0.060 N into the page; net force zero',
          ],
          correctAnswer: 2,
          explanation:
            'Clockwise, the current runs up the left side, and F = ILB = (3.0)(0.20)(0.40) = 0.24 N; fingers up the page curled toward the right leave the thumb pointing into the page. The right side carries current down and feels 0.24 N out of the page, and the horizontal sides run along the field and feel nothing, so the net force is zero. "Out of the page" is the right side\'s force; 0.48 N adds two forces that point opposite ways; and 0.060 N uses the 0.050 m horizontal side instead of the 0.20 m vertical side.',
        },
      ],
    },
  ],
}
