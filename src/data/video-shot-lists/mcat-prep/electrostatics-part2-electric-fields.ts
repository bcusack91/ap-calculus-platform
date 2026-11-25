import type { ShotList } from '../types'

/**
 * Shot list: MCAT Physics — Electrostatics Part 2: Electric Fields
 * (topic mcat-physics-electricity-electric-fields-mcat; the second of three "Electric Force, Field &
 * Potential" video parts. Part 1 is charge and Coulomb's law, Part 3 is electric potential and energy).
 *
 * Sources: the MCAT lesson (src/data/interactive-lessons/mcat-mcat-physics-electricity-electrostatics-mcat-part1..4.ts;
 * this video takes Part 1's "Electric Field", "Equipotentials and Dipoles" (the dipole half) and the
 * conductor facts, Part 2's E = kQ/r², F = qE and parallel-plate E = ΔV/d, Part 3's "Gel Electrophoresis",
 * and Part 4's field superposition and "Same Field, Different Particles"; potential, potential energy,
 * equipotentials, the membrane and energy conservation belong to video Part 3), the AP Physics 2 lessons
 * physics2-electric-fields-part1..3 and part 6 (field definition and point charge, superposition and null
 * points, field lines and conductors, the parallel-plate field; parts 4–5 are potential and energy for
 * video Part 3, part 7 is capacitors and is skipped), the deck figures in
 * src/data/deck-figures/mcat-cp-electrostatics.ts (field of ±Q and force on a test charge, the dipole in a
 * uniform field, the 6.0 V parallel plates, gel electrophoresis, midpoint superposition), and the exit
 * pools to avoid (the MCAT lesson-built pool and the electric-fields-potential items in
 * src/data/exit-quizzes/ap-physics-2.ts, which the AP Physics 2 unit test also draws from).
 * Eight Manim clips in four pairs (owner format, Nov 2026): a CONCEPT clip that teaches the idea and ends
 * on the "Remember" recap, then a WORKED-EXAMPLES clip with two examples, each shown in full with lettered
 * parts and a pause-and-try prompt before the solution. Concept clips get conceptual checkpoint
 * questions; worked-example clips get questions that mirror their two examples with new numbers.
 * Clips 1–2 follow "Electric Field" (MCAT Parts 1–2; AP Part 1). Clips 3–4 follow field superposition and
 * null points (MCAT Part 4, Strategy 2, fields only; AP Part 2). Clips 5–6 follow field lines, dipoles and
 * conductors (MCAT Part 1; AP Part 3, and AP electrostatics Part 4 for the conductor facts). Clips 7–8
 * follow the uniform field between plates and charges moving in it (MCAT Part 2's parallel plates,
 * Part 4's "Same Field, Different Particles", Part 3's gel electrophoresis; AP Parts 3 and 6).
 *
 * REUSE FOR AP PHYSICS 2 (topic electric-fields-potential): each clip is cut into sections, about one
 * per key point, and the AP lesson takes only the SHARED sections. MCAT-only material sits in key
 * points of its own, listed word for word in `mcatOnly`, with any question that depends on it listed
 * in `mcatOnlyQuestions`:
 *   clip 5: the dipole moment p = qd and the torque that aligns a dipole (1 key point, question 3)
 *   clip 8: gel electrophoresis, which is Example 2 (1 key point, question 3); Example 1, an electron
 *           between parallel plates, is shared, so the AP cut still has one full worked example
 * Clips 1, 2, 3, 4, 6 and 7 are shared in full. The dipole's FIELD PATTERN (clip 5) is shared. Every
 * "Remember" recap covers shared ideas only.
 * Symbols follow the AP equation sheet: E = F/q, |E| = k|q|/r² with k = 9.0 × 10⁹ N·m²/C² (the MCAT
 * lesson quotes 8.99 × 10⁹), e = 1.6 × 10⁻¹⁹ C, m_e = 9.1 × 10⁻³¹ kg, m_p = 1.67 × 10⁻²⁷ kg. Field sizes
 * always come from magnitudes, and every direction comes from the sign of the source (away from +,
 * toward −), stated on screen. Clip 7 states E = ΔV/d for plates held at a potential difference ΔV, with 1 V = 1 J/C; Part 3's
 * "Equipotentials & E = ΔV/d" explains where it comes from. Kinematics here are force-based
 * (a = qE/m, d = ½at²); the energy route to a particle's speed belongs to Part 3.
 *
 * The checkpoint questions are what a YouTube viewer answers at studymondo.com/v/<code>
 * (src/data/video-short-links.ts). Codes (fixed by the series plan): field1/field2, null1/null2,
 * lines1/lines2, plates1/plates2. They use new scenarios and numbers, so they never repeat an
 * exit-quiz item or a worked example.
 */
export const shotList: ShotList = {
  courseSlug: 'mcat-prep',
  topicSlug: 'mcat-physics-electricity-electric-fields-mcat',
  title: 'Electrostatics Part 2: Electric Fields',
  overview:
    'Eight animated clips in four pairs that build the electric field: what a field is and how a point charge makes one, how the fields of several charges add and where they cancel, how field lines, dipoles and conductors look and behave, and how a charge moves in the uniform field between charged plates. Each idea gets a concept clip followed by a worked-examples clip in which every problem is shown in full, with a moment to pause and try it before the solution. Narration stays exam-neutral, and each clip is cut into sections so that introductory physics lessons can reuse the shared ones; the dipole moment and its torque, and gel electrophoresis, sit in sections of their own. Each clip ends with three checkpoint questions. Part 3 continues with electric potential energy.',
  clips: [
    // ── 1 · The electric field (concepts) ────────────────────────────────
    {
      title: 'The Electric Field',
      minutes: 7,
      goal: 'Define the electric field as force per unit positive charge, find the force it puts on any charge, and predict the size and direction of a point charge\'s field at any distance.',
      keyPoints: [
        'A charge changes the space around it: it sets up an electric field. A second charge placed in that field feels a force from the field at its own location. The field is there whether or not anything is placed in it.',
        'The field at a point is the force per unit positive test charge placed there: E = F/q₀, in newtons per coulomb (N/C, the same as V/m). It is a vector, and its direction is the way a POSITIVE charge would be pushed. Gravity works the same way: g = F/m is the force per kilogram near Earth, in N/kg.',
        'Turned around, F = qE. A positive charge is pushed along E and a negative charge against it, with the same size of force for the same size of charge. Double the test charge and the force doubles, but the field does not change: the field belongs to the source charges and the location, not to the test charge.',
        'The field of a point charge: |E| = k|Q|/r², with k = 9.0 × 10⁹ N·m²/C² and r measured from the source. Use the magnitude of Q for the size, then get the direction from its sign: the field points away from a positive charge and toward a negative one, along the line through the charge.',
        'Inverse square: double the distance and the field drops to a quarter; triple it and the field drops to a ninth; double Q and the field doubles. The field contains only ONE charge, the source; the force F = k|q₁q₂|/r² contains both.',
      ],
      showOnScreen: [
        'A charged sphere alone, with faint field arrows filling the space around it; then a small test charge appears at one point and a force arrow grows from it',
        'E = F/q₀ written out, with N/C = V/m beside it, and the gravity parallel g = F/m (N/kg) next to it',
        'One field arrow at a point, then a + charge with a force arrow along it and a − charge with an equal arrow the other way; the test charge doubled, its force arrow doubling while the field arrow stays the same',
        'The radial field of +Q (arrows outward) beside the field of −Q (arrows inward), as in the deck figure, with |E| = k|Q|/r² and the on-screen note "size from the formula, direction from the sign"',
        'A row of field readouts at r, 2r and 3r from one charge: E, E/4, E/9; then Q doubled and every readout doubling',
        'The "Remember" recap: E = F/q₀, in N/C; F = qE: + along E, − against it; |E| = k|Q|/r²; away from +, toward −; inverse square; the field belongs to the source, not the test charge',
        'End card: "Up next: The Electric Field: Worked Examples"',
      ],
      pitfalls: [
        'Thinking the field depends on the test charge, or flips when a negative test charge is used.',
        'Pointing the force on a negative charge along the field.',
        'Using 1/r instead of 1/r² when scaling a field with distance.',
        'Drawing the field of a negative charge outward.',
      ],
      lessonParts: [1, 2],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat'],
      checkpoint: [
        {
          question: 'The field 10 cm from a small charged bead is 900 N/C. How far from the bead is the field 100 N/C?',
          options: ['90 cm', '3.3 cm', '30 cm', '810 cm'],
          correctAnswer: 2,
          explanation:
            'The field falls by a factor of 9, and |E| ∝ 1/r², so the distance grows by √9 = 3: from 10 cm to 30 cm. 90 cm treats the field as 1/r, growing the distance by the full factor of 9; 3.3 cm moves closer to the bead, where the field would be stronger, not weaker; and 810 cm squares the factor of 9 instead of taking its square root.',
        },
        {
          question: 'A student maps the field near a charged sphere by measuring the force on a small probe charge. At one spot she swaps her +2 nC probe for a −2 nC probe. The field she should record at that spot is:',
          options: [
            'Unchanged, though the force on the probe reverses',
            'Reversed, because the force on the probe reverses',
            'Unchanged, and the force on the probe is unchanged',
            'Reversed, and the force on the probe is unchanged',
          ],
          correctAnswer: 0,
          explanation:
            'The field is set by the sphere and the location, not by the probe, so it is unchanged. The probe is now negative, so F = qE points the other way. "Reversed, because the force reverses" confuses the force on the probe with the field; "the force is unchanged" forgets that a negative charge is pushed against E; and "field reversed, force unchanged" lets the field follow the probe\'s sign and then applies F = qE to that wrong field.',
        },
        {
          question: 'A small sphere carries a negative charge. Point P is due north of it, and an electron is placed at P. Which way does the field at P point, and which way is the electron pushed?',
          options: [
            'E points north; the electron is pushed south',
            'E points south; the electron is pushed south',
            'E points north; the electron is pushed north',
            'E points south; the electron is pushed north',
          ],
          correctAnswer: 3,
          explanation:
            'The field of a negative charge points toward it, so at P, north of the sphere, E points south. The electron is negative, so it is pushed against E: north, away from the sphere, as two negative charges repel. "E points north" draws the field of a negative charge outward, as if it were positive; "south, south" forgets that a negative charge is pushed against the field; and "north, north" makes both mistakes, which happen to cancel for the force but leave the field backwards.',
        },
      ],
    },
    // ── 2 · The electric field (worked examples) ─────────────────────────
    {
      title: 'The Electric Field: Worked Examples',
      minutes: 6,
      goal: 'Find the field of a point charge in size and direction, the force it puts on positive and negative charges, and work backward from a measured force to the field and the source charge.',
      keyPoints: [
        'Size first, then direction: |E| = k|Q|/r² with Q in coulombs and r in meters; the field points away from a positive source and toward a negative one.',
        'Force from field: |F| = |q|E. A positive charge is pushed along E and a negative charge against it.',
        'Working backward: E = F/q gives the field from a measured force (the field points opposite the force if the test charge is negative); then |Q| = Er²/k, and the field\'s direction gives the source\'s sign.',
        'Scaling shortcut: multiplying the distance by n divides the field by n².',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the −8.0 nC sphere with P 0.40 m east of it, the field arrow at P pointing west (450 N/C), the +2.0 nC bead pulled west and the electron pushed east, then a second point at 1.2 m with the field shrunk to 50 N/C',
        'Example 2: the +3.0 nC probe 0.30 m from an unknown sphere, its force arrow pointing toward the sphere, E = 2.0 × 10⁴ N/C, the sphere labeled −0.20 μC, the −6.0 nC probe pushed away, then the 5.0 × 10³ N/C point at 0.60 m',
        'The "Remember" recap of the method: k|Q|/r² for the size, the sign for the direction; F = qE, + along and − against; E = F/q to work backward; n times the distance, 1/n² of the field',
        'End card: "Up next: Field Superposition & Null Points"',
      ],
      workedExample:
        'Example 1: A small sphere carries a charge of −8.0 nC. Point P is 0.40 m due east of it. Use k = 9.0 × 10⁹ N·m²/C². (a) What are the size and direction of the electric field at P? (b) A bead with charge +2.0 nC is placed at P. What force acts on it? (c) The bead is replaced by an electron (charge −1.6 × 10⁻¹⁹ C). What force acts on the electron? (d) What is the field at a point 1.2 m due east of the sphere? (a) |E| = k|Q|/r² = (9.0 × 10⁹)(8.0 × 10⁻⁹)/(0.40)² = 72/0.16 = 450 N/C, pointing west, toward the negative sphere; (b) F = qE = (2.0 × 10⁻⁹)(450) = 9.0 × 10⁻⁷ N, west, along E, so the bead is pulled toward the sphere; (c) F = |q|E = (1.6 × 10⁻¹⁹)(450) = 7.2 × 10⁻¹⁷ N, east, against E, so the electron is pushed away from the sphere; (d) 1.2 m is three times 0.40 m, so the field is 450/9 = 50 N/C, still pointing west. Example 2: A +3.0 nC test charge at point P feels a force of 6.0 × 10⁻⁵ N directed toward a small charged sphere 0.30 m away. Use k = 9.0 × 10⁹ N·m²/C². (a) What are the size and direction of the field at P? (b) What are the sign and size of the sphere\'s charge? (c) The test charge is replaced by a −6.0 nC charge. What force acts on it? (d) How far from the sphere is the field 5.0 × 10³ N/C? (a) E = F/q = (6.0 × 10⁻⁵)/(3.0 × 10⁻⁹) = 2.0 × 10⁴ N/C, toward the sphere, the same way as the force on a positive charge; (b) a field pointing toward the sphere means the sphere is negative, and |Q| = Er²/k = (2.0 × 10⁴)(0.30)²/(9.0 × 10⁹) = 2.0 × 10⁻⁷ C, so Q = −0.20 μC; (c) F = |q|E = (6.0 × 10⁻⁹)(2.0 × 10⁴) = 1.2 × 10⁻⁴ N, pointing away from the sphere, against E; (d) the field must drop by a factor of 4, so the distance doubles, to 0.60 m.',
      pitfalls: [
        'Forgetting to square the distance.',
        'Leaving nC or cm unconverted.',
        'Giving the force on a negative charge the direction of the field.',
        'Taking the force on a negative test charge as the field\'s direction when working backward.',
      ],
      lessonParts: [1, 2],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat'],
      checkpoint: [
        {
          question: 'A small sphere carries +5.0 nC. What are the size and direction of the electric field at a point 0.15 m due west of it? (k = 9.0 × 10⁹ N·m²/C²)',
          options: ['3.0 × 10² N/C, west', '2.0 × 10³ N/C, west', '2.0 × 10³ N/C, east', '2.0 × 10⁻¹ N/C, west'],
          correctAnswer: 1,
          explanation:
            '|E| = k|Q|/r² = (9.0 × 10⁹)(5.0 × 10⁻⁹)/(0.15)² = 45/0.0225 = 2.0 × 10³ N/C, and the field of a positive charge points away from it: west, since the point is west of the sphere. 3.0 × 10² N/C divides by r instead of r²; "east" points the field toward a positive charge; and 2.0 × 10⁻¹ N/C uses 15 cm instead of 0.15 m.',
        },
        {
          question: 'At 0.50 m from a fixed point charge, the field is 800 N/C, pointing toward the charge. What force acts on a +4.0 nC bead placed 0.25 m from the charge, on the same line?',
          options: ['6.4 × 10⁻⁶ N, toward it', '3.2 × 10⁻⁶ N, toward it', '1.3 × 10⁻⁵ N, away from it', '1.3 × 10⁻⁵ N, toward it'],
          correctAnswer: 3,
          explanation:
            'Halving the distance multiplies the field by 2² = 4, so E = 3200 N/C there, still pointing toward the charge, and F = qE = (4.0 × 10⁻⁹)(3200) ≈ 1.3 × 10⁻⁵ N. The bead is positive, so the force points along E, toward the charge. 6.4 × 10⁻⁶ N only doubles the field, scaling it as 1/r; 3.2 × 10⁻⁶ N uses the 800 N/C from the farther point; and "away from it" pushes a positive charge against the field.',
        },
        {
          question: 'A −2.0 nC test charge at point P feels a force of 3.6 × 10⁻⁵ N, pointing directly away from a small charged sphere 0.20 m away. What is the sphere\'s charge? (k = 9.0 × 10⁹ N·m²/C²)',
          options: ['−80 nC', '+80 nC', '−400 nC', '+400 nC'],
          correctAnswer: 0,
          explanation:
            'E = F/|q| = (3.6 × 10⁻⁵)/(2.0 × 10⁻⁹) = 1.8 × 10⁴ N/C, and |Q| = Er²/k = (1.8 × 10⁴)(0.20)²/(9.0 × 10⁹) = 8.0 × 10⁻⁸ C = 80 nC. The negative test charge is pushed away, so the sphere repels it and must be negative: the field points opposite the force, toward the sphere. +80 nC takes the force\'s direction as the field\'s, forgetting that the test charge is negative; −400 nC uses r instead of r²; and +400 nC makes both mistakes.',
        },
      ],
    },
    // ── 3 · Field superposition and null points (concepts) ───────────────
    {
      title: 'Field Superposition & Null Points',
      minutes: 7,
      goal: 'Add the fields of several charges as vectors, predict where the field of two charges is zero, and use symmetry to find the field of charges that are not on one line.',
      keyPoints: [
        'Superposition: the net field at a point is the VECTOR sum of the fields of the individual charges, each found as if the others were not there: E_net = E₁ + E₂ + … Each has the size k|q|/r² and a direction set by its own sign.',
        'On a line, choose a positive direction, give each field a sign from the way it points, and add. Between two OPPOSITE charges both fields point toward the negative charge, so they add. Between two LIKE charges they point opposite ways and partly cancel; whichever field is larger, k|q|/r², wins.',
        'You met this as the zero-force point; the field version is the same spot. A null point is where the fields are equal in size and opposite in direction, so E_net = 0. For like charges it lies between them, nearer the smaller charge (at the midpoint if they are equal). For opposite charges it lies outside the pair, beyond the smaller charge: never between them, and never beyond the larger one. Equal and opposite charges have no null point at any finite distance.',
        'To locate it, set k|q₁|/r₁² = k|q₂|/r₂². k cancels, and taking square roots gives r₁/r₂ = √(|q₁|/|q₂|). For +4Q and +Q a distance d apart, the null point is d/3 from the +Q.',
        'Off a line, split each field into x- and y-components, add the components separately, and recombine with E = √(Ex² + Ey²). Look for symmetry first: two equal charges placed symmetrically cancel one component, and three equal charges at the corners of an equilateral triangle give zero field at its center.',
        'Any charge placed at a null point feels no electric force, whatever its sign, because F = qE and E is zero there.',
      ],
      showOnScreen: [
        'Two charges with their separate field arrows at one point, then the arrows placed tip to tail to form the net field',
        'A number line with +2Q and −Q: between them both arrows point toward −Q and add; then two like charges with opposing arrows that partly cancel',
        'The three null-point cases on one strip: equal like charges (midpoint), unequal like charges (between, nearer the smaller), opposite charges (outside, beyond the smaller), each with two equal and opposite arrows at the null point',
        'The +4Q and +Q algebra: 4/(d − a)² = 1/a², square roots, a = d/3, with the two field arrows shrinking to equal lengths at that point',
        'Two equal charges above and below the x-axis: each field split into components, the y-parts canceling and the x-parts adding; then three equal charges at a triangle\'s corners with three arrows canceling at the center',
        'A test charge dropped at the null point: no force arrow appears, for a + charge or a − charge',
        'The "Remember" recap: fields add as vectors; between opposite charges they add; like charges: null point between, nearer the smaller; opposite charges: null point outside, beyond the smaller; components and symmetry off a line',
        'End card: "Up next: Superposition & Null Points: Worked Examples"',
      ],
      pitfalls: [
        'Adding field magnitudes without checking their directions.',
        'Looking for a null point between two opposite charges, where both fields point the same way.',
        'Placing the null point nearer the larger charge.',
        'Setting the distance ratio equal to the charge ratio, without the square root.',
      ],
      lessonParts: [4],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat'],
      checkpoint: [
        {
          question: 'A charge +2Q and a charge −Q are fixed a short distance apart. At a point on the line between them, the two fields:',
          options: [
            'Point opposite ways and partly cancel',
            'Both point toward −Q, so they add',
            'Both point toward +2Q, so they add',
            'Point opposite ways and fully cancel',
          ],
          correctAnswer: 1,
          explanation:
            'The field of +2Q points away from it, toward −Q, and the field of −Q points toward −Q itself, so between the charges both fields point the same way and add. "Partly cancel" applies the rule for LIKE charges; "toward +2Q" reverses both directions, as if fields pointed toward positive charges; and "fully cancel" would need opposite directions and equal sizes, but here the directions already agree.',
        },
        {
          question: 'A charge −9Q is fixed at the origin and a charge +Q is fixed a distance d to its right. Where on the line through them can the electric field be zero?',
          options: [
            'Between them, nearer the +Q charge',
            'To the left of −9Q, on its far side',
            'Nowhere, as the signs are opposite',
            'To the right of +Q, on its far side',
          ],
          correctAnswer: 3,
          explanation:
            'Between opposite charges both fields point toward the negative charge, so they cannot cancel there. Outside the pair the fields point opposite ways, and they can balance only on the side of the SMALLER charge, where its nearness makes up for its smaller size: to the right of +Q (at x = 1.5d). "Between them" uses the rule for like charges; "to the left of −9Q" puts the point beside the larger charge, whose field always wins there; and "nowhere" forgets that opposite charges do have a null point, outside the pair.',
        },
        {
          question: 'Four equal positive charges sit at the corners of a square, so the field at its center is zero. One of them is replaced by a negative charge of the same size. The field at the center is now:',
          options: [
            'Toward the negative charge, twice one corner\'s field',
            'Toward the negative charge, equal to one corner\'s field',
            'Away from the negative charge, twice one corner\'s field',
            'Zero; the four fields still cancel at the center',
          ],
          correctAnswer: 0,
          explanation:
            'Before the swap, each diagonal pair canceled, and the untouched diagonal still does. On the changed diagonal, the positive charge opposite the swapped corner gives a field pointing away from itself, toward the swapped corner, and the new negative charge gives a field of the same size pointing toward itself, the same way. So the net field points toward the negative charge, twice one corner\'s field. "Equal to one corner\'s field" counts only the new charge and forgets that its diagonal partner is no longer canceled; "away from" draws the field of a negative charge outward; and "still cancel" assumes equal sizes are enough, when the signs now differ.',
        },
      ],
    },
    // ── 4 · Field superposition and null points (worked examples) ────────
    {
      title: 'Superposition & Null Points: Worked Examples',
      minutes: 6,
      goal: 'Find the net field of two charges on a line and of two charges off it, locate a null point, and turn a net field into a force.',
      keyPoints: [
        'Find each field alone: size k|q|/r², direction from its sign, drawn as an arrow at the point.',
        'On a line, add with signs; off a line, add the x- and y-components separately, using the geometry (here a 3-4-5 triangle) for each component.',
        'For a null point, first decide which region it must be in, then set the two sizes equal: r₁/r₂ = √(|q₁|/|q₂|).',
        'Net field to force: F = qE_net, along E for a positive charge and against it for a negative one.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: +9.0 nC at x = 0 and +4.0 nC at x = 0.60 m, the two arrows at the midpoint (900 and 400 N/C), the 500 N/C net arrow, then the null point marked at x = 0.36 m with two equal 625 N/C arrows, and an electron at the midpoint pushed toward the +9.0 nC charge',
        'Example 2: the two +5.0 nC charges at (±0.30 m, 0) and P at (0, 0.40 m), the 3-4-5 triangles, each 180 N/C arrow split into 108 and 144 N/C parts, the x-parts canceling for a 288 N/C net field along +y; then the right-hand charge made negative and the y-parts canceling instead, for 216 N/C along +x',
        'The "Remember" recap of the method: each field alone; add with signs or by components; null point region first, then the square root of the charge ratio; F = qE_net',
        'End card: "Up next: Field Lines, Dipoles & Conductors"',
      ],
      workedExample:
        'Example 1: A +9.0 nC charge is fixed at x = 0 and a +4.0 nC charge at x = 0.60 m. Use k = 9.0 × 10⁹ N·m²/C². (a) What field does each charge produce at the midpoint, x = 0.30 m? (b) What is the net field there? (c) Where on the x-axis is the field zero? (d) What force would an electron feel at the midpoint? (a) From the +9.0 nC charge, (9.0 × 10⁹)(9.0 × 10⁻⁹)/(0.30)² = 81/0.09 = 900 N/C in the +x direction, away from it; from the +4.0 nC charge, 36/0.09 = 400 N/C in the −x direction, away from it; (b) E = 900 − 400 = 500 N/C in the +x direction, toward the +4.0 nC charge; (c) like charges, so the null point lies between them, nearer the smaller one: r₁/r₂ = √(9.0/4.0) = 1.5 and r₁ + r₂ = 0.60 m, so r₂ = 0.24 m and r₁ = 0.36 m; the field is zero at x = 0.36 m, where each field is 625 N/C; (d) F = |q|E = (1.6 × 10⁻¹⁹)(500) = 8.0 × 10⁻¹⁷ N in the −x direction, against the field, toward the +9.0 nC charge. Example 2: Two +5.0 nC charges are fixed at (−0.30 m, 0) and (+0.30 m, 0). Point P is at (0, 0.40 m). Use k = 9.0 × 10⁹ N·m²/C². (a) How far is P from each charge, and what is the size of each charge\'s field there? (b) What is the net field at P? (c) The charge at (+0.30 m, 0) is replaced by a −5.0 nC charge. What is the net field at P now? (d) What force would a +2.0 nC charge feel at P in case (c)? (a) r = √(0.30² + 0.40²) = 0.50 m, and each field is (9.0 × 10⁹)(5.0 × 10⁻⁹)/(0.50)² = 45/0.25 = 180 N/C; (b) each field points away from its charge, with an x-part of 180 × (0.30/0.50) = 108 N/C and a y-part of 180 × (0.40/0.50) = 144 N/C; the x-parts point opposite ways and cancel, and the y-parts add: 288 N/C ≈ 2.9 × 10² N/C along +y; (c) the field of the negative charge now points toward it, so its y-part points down and cancels the other y-part, while both x-parts point along +x and add: 216 N/C ≈ 2.2 × 10² N/C along +x, from the positive charge\'s side toward the negative charge\'s side; (d) F = qE = (2.0 × 10⁻⁹)(216) ≈ 4.3 × 10⁻⁷ N along +x.',
      pitfalls: [
        'Adding 900 and 400 because both are "away" fields, without noticing that they point opposite ways.',
        'Placing the null point nearer the larger charge, or using the charge ratio without the square root.',
        'Adding the two 180 N/C magnitudes instead of their components.',
        'Swapping the two components of a field when splitting it.',
      ],
      lessonParts: [4],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat'],
      checkpoint: [
        {
          question: 'A +6.0 nC charge is fixed at x = 0 and a −2.0 nC charge at x = 0.60 m. What is the net electric field at x = 0.30 m? (k = 9.0 × 10⁹ N·m²/C²)',
          options: [
            '4.0 × 10² N/C, toward the −2.0 nC',
            '8.0 × 10² N/C, toward the +6.0 nC',
            '8.0 × 10² N/C, toward the −2.0 nC',
            '2.4 × 10² N/C, toward the −2.0 nC',
          ],
          correctAnswer: 2,
          explanation:
            'The +6.0 nC charge gives 54/0.09 = 600 N/C pointing away from it, toward the −2.0 nC charge, and the −2.0 nC charge gives 18/0.09 = 200 N/C pointing toward itself: the same way. Between opposite charges the fields add, to 800 N/C toward the −2.0 nC charge. 4.0 × 10² N/C subtracts them, as if the charges had the same sign; "toward the +6.0 nC" reverses both fields; and 2.4 × 10² N/C divides by r instead of r².',
        },
        {
          question: 'A +16 nC charge is fixed at x = 0 and a +1.0 nC charge at x = 0.50 m. At what position on the x-axis is the electric field zero?',
          options: ['x = 0.40 m', 'x = 0.10 m', 'x = 0.47 m', 'x = 0.25 m'],
          correctAnswer: 0,
          explanation:
            'For like charges the null point lies between them, nearer the smaller one. r₁/r₂ = √(16/1.0) = 4 and r₁ + r₂ = 0.50 m, so r₂ = 0.10 m from the +1.0 nC charge: x = 0.40 m, where each field is 900 N/C. x = 0.10 m measures the 0.10 m from the wrong charge, next to the larger one; x = 0.47 m uses the charge ratio 16 without its square root; and x = 0.25 m is the midpoint, which works only for equal charges.',
        },
        {
          question: 'Two +3.0 nC charges are fixed at (−0.40 m, 0) and (+0.40 m, 0). What is the net electric field at the point (0, 0.30 m)? (k = 9.0 × 10⁹ N·m²/C²)',
          options: ['2.2 × 10² N/C, along +y', '1.7 × 10² N/C, along +y', 'Zero; the two fields cancel', '1.3 × 10² N/C, along +y'],
          correctAnswer: 3,
          explanation:
            'Each charge is √(0.40² + 0.30²) = 0.50 m away and gives 27/0.25 = 108 N/C, pointing away from it. The x-parts cancel by symmetry, and the y-parts, each 108 × (0.30/0.50) = 64.8 N/C, add: about 1.3 × 10² N/C along +y. 2.2 × 10² N/C adds the two magnitudes as if they pointed the same way; 1.7 × 10² N/C uses 0.40/0.50 for the y-part, swapping the two components; and "zero" cancels the y-parts as well as the x-parts.',
        },
      ],
    },
    // ── 5 · Field lines, dipoles and conductors (concepts) ───────────────
    {
      title: 'Field Lines, Dipoles & Conductors',
      minutes: 7.5,
      goal: 'Read and draw field-line diagrams, sketch the field of a dipole, and explain why a conductor in equilibrium has no field inside and a perpendicular field at its surface.',
      keyPoints: [
        'Field lines are a map of the field. They start on positive charges and end on negative charges (or run off to infinity); the field at any point is tangent to the line through it; lines never cross, since the field has only one direction at each point; and the number of lines is proportional to the charge.',
        'Line density shows strength: where lines crowd together the field is strong, and where they spread apart it is weak. Evenly spaced parallel lines mean a uniform field, as between two charged plates, with the lines running from the + plate to the − plate.',
        'Two equal positive charges: the lines leave both and bend away from each other, leaving an empty spot at the midpoint, the null point. Unequal charges such as +2Q and −Q: twice as many lines leave +2Q as end on −Q, and the extra lines run off to infinity.',
        'An electric dipole is a +q and a −q a small distance apart, like a polar molecule. Its lines leave +q, loop around and end on −q. Between the charges the field points from + to −; on the line halfway between them, the field points parallel to the dipole\'s axis, from the + side toward the − side.',
        'Conductors in electrostatic equilibrium: the free charges rearrange until the field INSIDE the metal is zero, all excess charge sits on the outer surface, and the field just outside is perpendicular to the surface, since any part along the surface would keep charges moving. Outside a charged sphere the field is the same as if all its charge sat at the center. A hollow conductor with no charge inside shields its interior, which is why a car protects you from lightning.',
        'A dipole\'s strength is its dipole moment, p = qd (in C·m), pointing from −q to +q. In a UNIFORM field the two ends feel equal and opposite forces, so the net force is zero, but unless p lines up with E the forces form a torque, τ = pE sin θ, that turns p into line with E; the aligned position is stable. In a nonuniform field there is also a net force. Takeaway: polar molecules such as water swing into line with a field, but a uniform field does not make them drift.',
      ],
      showOnScreen: [
        'Field lines growing out of a + charge and into a − charge, a tangent arrow at one point, and two lines that try to cross, stamped "impossible"',
        'Two regions of one diagram boxed: lines crowded (strong) and spread (weak); then two charged plates with straight, evenly spaced lines from + to −',
        'Two equal + charges with lines bending apart and a gap at the midpoint; then +2Q and −Q with 16 lines leaving and 8 ending, the rest running off',
        'The dipole pattern built line by line, with the field arrows between the charges and on the halfway line, both pointing from the + side toward the − side',
        'A charged metal sphere: excess charge sliding to the surface, the interior shaded "E = 0", field lines leaving at right angles and spreading like those of a point charge at the center; then a car in a lightning storm, field lines ending on its body',
        'The deck\'s dipole in a uniform field: the dipole tilted, equal and opposite force arrows on its ends, the τ arrow turning it into line, the net-force readout at zero, and a water molecule beside it',
        'The "Remember" recap (shared ideas only): lines from + to −, never crossing; density = strength; line count ∝ charge; dipole field from + to − between and beside the charges; conductor: E = 0 inside, charge on the surface, field perpendicular at the surface',
        'End card: "Up next: Field Lines & Conductors: Worked Examples"',
      ],
      pitfalls: [
        'Drawing lines that cross, or that start on negative charges.',
        'Reading widely spaced lines as a strong field.',
        'Thinking the field inside a conductor is merely weak, or that a hollow conductor lets an outside field in.',
        'Drawing the dipole\'s field lines crossing, or pointing from − to + between the charges.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat'],
      mcatOnly: [
        'A dipole\'s strength is its dipole moment, p = qd (in C·m), pointing from −q to +q. In a UNIFORM field the two ends feel equal and opposite forces, so the net force is zero, but unless p lines up with E the forces form a torque, τ = pE sin θ, that turns p into line with E; the aligned position is stable. In a nonuniform field there is also a net force. Takeaway: polar molecules such as water swing into line with a field, but a uniform field does not make them drift.',
      ],
      mcatOnlyQuestions: [2],
      checkpoint: [
        {
          question: 'In a field-line sketch of two charges, 15 lines leave charge A. Five of them end on charge B and the other 10 run off to infinity. Which pair of charges fits the sketch?',
          options: ['+Q at A and −3Q at B', '+3Q at A and +Q at B', '+3Q at A and −Q at B', '+3Q at A and −2Q at B'],
          correctAnswer: 2,
          explanation:
            'Lines start on positive charges and end on negative ones, so A is positive and B is negative, and the number of lines is proportional to the charge: 15 leave A and 5 end on B, so A has three times B\'s charge. "+Q and −3Q" reverses the ratio; "+3Q and +Q" ignores that lines ENDING on B make it negative; and "+3Q and −2Q" counts the 10 lines that run off to infinity as ending on B, giving a 15-to-10 ratio.',
        },
        {
          question: 'A hollow metal box with nothing inside it is placed in a strong, uniform electric field. Once the charges in the metal settle, the field in the hollow space inside the box is:',
          options: [
            'The same as outside, as metal is thin',
            'Zero, as charges on the metal cancel it',
            'Weaker, but still pointing the same way',
            'Reversed by the charges on the metal',
          ],
          correctAnswer: 1,
          explanation:
            'Free charges in the metal move until the field inside the conductor is zero, and with no charge in the hollow, the space inside is shielded too: the induced surface charges cancel the outside field everywhere within. "The same as outside" ignores the induced charges; "weaker" treats the shielding as partial, but the charges keep moving until the cancellation is complete; and "reversed" imagines the charges overshooting, which equilibrium does not allow.',
        },
        {
          question: 'A polar molecule sits in a uniform electric field with its dipole moment pointing exactly along the field. A small bump tilts it a few degrees. What happens next?',
          options: [
            'The torque tips it further, to point against E',
            'It drifts along E, since there is now a net force',
            'Nothing; the torque is zero once it is tilted',
            'A torque turns it back into line with the field',
          ],
          correctAnswer: 3,
          explanation:
            'Once tilted, the forces on the two ends act along different lines and form a torque, τ = pE sin θ, that turns p back into line with E: the aligned position is stable. "Tips it further" describes the unstable, anti-aligned position; a uniform field gives equal and opposite forces at any angle, so there is still no net force and no drift; and the torque is zero only when sin θ = 0, aligned or anti-aligned, not when tilted.',
        },
      ],
    },
    // ── 6 · Field lines and conductors (worked examples) ─────────────────
    {
      title: 'Field Lines & Conductors: Worked Examples',
      minutes: 6,
      goal: 'Read charges and field strengths off a field-line diagram, and find the field inside, at the surface of and outside a charged conducting sphere.',
      keyPoints: [
        'Line counts compare charges: the lines leaving a charge are proportional to a positive charge, and the lines ending on it to a negative charge.',
        'Line density compares fields: twice the density means twice the field, and F = qE follows.',
        'A charged conducting sphere, solid or hollow, has E = 0 everywhere inside. Outside, its field is that of a point charge at the center, |E| = k|Q|/r² with r measured from the center, and just outside it is perpendicular to the surface.',
        'Scaling from the surface: at n times the radius, the field is 1/n² of its value at the surface.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the two-charge diagram with 18 lines leaving A and 6 ending on B, the counts turned into a 3-to-1 ratio, B labeled −2.0 nC and A +6.0 nC; then boxes at X and Y with line densities in a 3-to-1 ratio, 200 N/C at Y and 600 N/C at X, and an electron at X with its force arrow against the lines',
        'Example 2: the hollow metal sphere (radius 0.20 m, −3.0 nC) in cross-section: the charge on the outer surface, "E = 0" at the center and at 0.10 m, the inward arrow just outside (675 N/C), then a point at 0.60 m with 75 N/C',
        'The "Remember" recap of the method: count lines for charge, compare density for field; inside a conductor E = 0; outside a sphere, k|Q|/r² from the center; perpendicular at the surface',
        'End card: "Up next: Charges in a Uniform Field"',
      ],
      workedExample:
        'Example 1: A field-line diagram shows two small charges, A and B. Eighteen lines leave A; six of them end on B, and the other twelve run off the edge of the page. (a) What are the signs of A and B, and what is the ratio of their charges? (b) Charge B is −2.0 nC. What is charge A? (c) Near point X the lines are three times as dense as near point Y, where the field is 200 N/C. What is the field at X? (d) What force does an electron feel at X, and which way does it point? (a) Lines leave positive charges and end on negative ones, so A is positive and B is negative; the counts give |q_A|/|q_B| = 18/6 = 3; (b) q_A = 3 × 2.0 nC = +6.0 nC; (c) three times the density means three times the field: 600 N/C; (d) F = |q|E = (1.6 × 10⁻¹⁹)(600) = 9.6 × 10⁻¹⁷ N, pointing against the field lines at X, since the electron is negative. Example 2: A hollow metal sphere of radius 0.20 m stands on an insulating support and carries a charge of −3.0 nC. Use k = 9.0 × 10⁹ N·m²/C². (a) Where does the charge sit, and what is the field at the center? (b) What is the field 0.10 m from the center? (c) What are the size and direction of the field just outside the surface? (d) What is the field 0.60 m from the center? (a) The excess charge spreads over the outer surface, and the field at the center is zero; (b) also zero: the whole interior is shielded; (c) outside, the sphere acts like a point charge at its center: |E| = (9.0 × 10⁹)(3.0 × 10⁻⁹)/(0.20)² = 27/0.04 = 675 N/C ≈ 6.8 × 10² N/C, perpendicular to the surface and pointing inward, toward the negative sphere; (d) 0.60 m is three times the radius, so the field is 675/9 = 75 N/C, still pointing toward the sphere.',
      pitfalls: [
        'Counting the lines that run off to infinity as ending on B.',
        'Squaring the density ratio when comparing fields.',
        'Measuring r from the surface instead of the center.',
        'Using k|Q|/r² inside the sphere, where the field is zero.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat'],
      checkpoint: [
        {
          question: 'In a field-line diagram, 24 lines leave charge P and 8 of them end on charge Q; the rest run off to infinity. Charge P is +6.0 nC. What is charge Q?',
          options: ['+2.0 nC', '−2.0 nC', '−18 nC', '−6.0 nC'],
          correctAnswer: 1,
          explanation:
            'Lines end on negative charges, so Q is negative, and line counts are proportional to charge: |q_Q| = 6.0 nC × 8/24 = 2.0 nC, so Q = −2.0 nC. +2.0 nC misses that lines ENDING on Q make it negative; −18 nC inverts the ratio, 6.0 × 24/8; and −6.0 nC assumes every line from P ends on Q, ignoring the 16 that run off to infinity.',
        },
        {
          question: 'Near point X a field-line diagram has four times as many lines per unit area as near point Y. An electron at Y feels a force of 3.2 × 10⁻¹⁷ N. What is the field at X?',
          options: ['5.0 × 10¹ N/C', '3.2 × 10³ N/C', '8.0 × 10² N/C', '2.0 × 10² N/C'],
          correctAnswer: 2,
          explanation:
            'At Y, E = F/|q| = (3.2 × 10⁻¹⁷)/(1.6 × 10⁻¹⁹) = 200 N/C. The field is proportional to the line density, so at X it is 4 × 200 = 800 N/C. 5.0 × 10¹ N/C divides by 4, reading dense lines as a weak field; 3.2 × 10³ N/C multiplies by 4² = 16, squaring the density ratio; and 2.0 × 10² N/C is the field at Y, not at X.',
        },
        {
          question: 'A hollow metal sphere of radius 0.10 m carries a charge of −4.0 nC. What is the electric field just outside its surface? (k = 9.0 × 10⁹ N·m²/C²)',
          options: [
            '3.6 × 10³ N/C, pointing inward',
            '3.6 × 10² N/C, pointing inward',
            '3.6 × 10³ N/C, pointing outward',
            'Zero, the same as inside the metal',
          ],
          correctAnswer: 0,
          explanation:
            'Outside, the sphere acts like a point charge at its center, with r measured from the center: |E| = (9.0 × 10⁹)(4.0 × 10⁻⁹)/(0.10)² = 36/0.01 = 3.6 × 10³ N/C, perpendicular to the surface and pointing inward, toward the negative charge. 3.6 × 10² N/C divides by r instead of r²; "outward" draws the field of a negative charge as if it were positive; and "zero" applies the inside rule outside the metal, where the field is not zero.',
        },
      ],
    },
    // ── 7 · Charges in a uniform field (concepts) ────────────────────────
    {
      title: 'Charges in a Uniform Field',
      minutes: 7,
      goal: 'Describe the uniform field between charged plates, find the constant force and acceleration it gives a charge, and predict the path of a charge released in it or fired across it.',
      keyPoints: [
        'Two large, parallel plates with equal and opposite charges make a UNIFORM field between them: the same size and direction everywhere (away from the edges), pointing from the + plate to the − plate and drawn as straight, evenly spaced lines. Outside the plates the field is nearly zero.',
        'When a battery holds a potential difference (voltage) ΔV across a gap d, the field is E = ΔV/d, with 1 V = 1 J/C (explained fully in a later clip); the field comes out in V/m, the same unit as N/C. A larger ΔV or a narrower gap gives a stronger field; convert the gap to meters first.',
        'Constant field, constant force: F = qE has the same size at every point between the plates. A positive charge is pushed toward the − plate, a negative charge toward the + plate. A proton and an electron in the same field feel forces of equal size in opposite directions.',
        'Constant force, constant acceleration: a = qE/m. The electron\'s mass is about 1836 times smaller than the proton\'s, so its acceleration is about 1836 times larger. Released from rest, a charge moves exactly like a dropped ball: v = at and d = ½at².',
        'A charge fired ACROSS the field keeps its sideways velocity and accelerates along the field, so it follows a parabola, like a ball thrown horizontally. This is how a field steers a beam of charged particles or of charged ink drops.',
        'Gravity is still there, but for an electron or a proton it is negligible: an electron\'s weight is about 10⁻²⁹ N, while a field of only 100 N/C pushes it with 1.6 × 10⁻¹⁷ N. For a charged droplet or dust grain both matter, and the drop hovers when qE = mg, with the electric force pointing up.',
      ],
      showOnScreen: [
        'Two charged plates with straight, evenly spaced lines from + to −, a field readout that stays the same as a probe moves around between the plates, and a near-zero readout outside',
        'A battery connected across the plates: E = ΔV/d, the gap shrinking and the field readout climbing, with a "mm → m" reminder',
        'A proton and an electron side by side between the plates: equal force arrows in opposite directions',
        'The two particles released together: the electron streaking to the + plate while the proton has barely moved, with a = qE/m and the 1836 ratio; beside it a dropped ball, with v = at and d = ½at² shared by both',
        'An electron fired horizontally between horizontal plates (top plate +): its path bending into a parabola toward the + plate while its horizontal velocity arrow stays the same, next to a ball thrown off a table',
        'A tiny charged oil drop hovering between the plates with qE up and mg down, then an electron with a weight arrow too small to see',
        'The "Remember" recap: uniform between the plates, from + to −; E = ΔV/d; the same F = qE everywhere between them; a = qE/m; released from rest, like free fall; fired across, a parabola',
        'End card: "Up next: Charges in a Uniform Field: Worked Examples"',
      ],
      pitfalls: [
        'Expecting the field to be stronger near one of the plates.',
        'Giving a proton and an electron equal accelerations because they feel equal forces.',
        'Leaving the gap in millimeters in E = ΔV/d.',
        'Drawing a circular path for a charge fired across an electric field; circles belong to magnetic fields.',
      ],
      lessonParts: [2, 4],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat', 'mcat-physics-electricity-emf-capacitors-mcat'],
      checkpoint: [
        {
          question: 'Two large parallel plates carry equal and opposite charges. A proton placed close to the positive plate feels a force F. The proton is then moved to a point midway between the plates. The force on it there is:',
          options: [
            'Smaller, as it is farther from the + plate',
            'Zero, as the two plates\' fields cancel',
            'Larger, as it is nearer the − plate',
            'The same F, as the field is uniform',
          ],
          correctAnswer: 3,
          explanation:
            'Between large parallel plates the field is uniform, the same size and direction at every point away from the edges, so F = qE is the same everywhere: F. "Smaller" treats the + plate like a point charge whose field fades with distance; "larger" treats the − plate the same way; and the two plates\' fields cancel OUTSIDE the plates, not between them, where they add.',
        },
        {
          question: 'An electron and a proton are released from rest at the same moment in the same uniform field. After the same short time, compared with the proton, the electron has:',
          options: [
            'Moved about 1836 times as far, the opposite way',
            'Moved the same distance, in the opposite direction',
            'Moved about 43 times as far, in the opposite way',
            'Moved about 1836 times as far, the same way',
          ],
          correctAnswer: 0,
          explanation:
            'Both feel forces of the same size, eE, in opposite directions, but a = F/m, and the electron\'s mass is about 1836 times smaller, so its acceleration is about 1836 times larger. From rest, d = ½at² for the same t, so the distance scales with a: about 1836 times as far. "The same distance" assumes equal forces give equal motion; 43 times (√1836) is the speed ratio for equal kinetic energies, not for equal times; and "the same way" forgets that opposite charges are pushed in opposite directions.',
        },
        {
          question: 'An electron is fired horizontally into the space between two horizontal plates, with the BOTTOM plate positive. Ignoring gravity, its path between the plates is:',
          options: [
            'A parabola curving up toward the − plate',
            'A circular arc curving down toward the + plate',
            'A parabola curving down toward the + plate',
            'A straight line, as it entered at right angles',
          ],
          correctAnswer: 2,
          explanation:
            'The field points up, from the + plate at the bottom to the − plate at the top, so the negative electron is pushed down with a constant force. Its horizontal velocity is unchanged while it accelerates downward, so it follows a parabola, like a thrown ball, curving toward the + plate. "Up toward the − plate" pushes a negative charge along E; a circular arc is the path in a MAGNETIC field, where the force keeps turning; and a force at right angles to the motion does not leave the path straight, since it adds velocity along the field.',
        },
      ],
    },
    // ── 8 · Charges in a uniform field (worked examples) ─────────────────
    {
      title: 'Charges in a Uniform Field: Worked Examples',
      minutes: 6.5,
      goal: 'Find the field between parallel plates from the voltage and the gap, then the force, acceleration and travel time of a charge released between them.',
      keyPoints: [
        'Field first: E = ΔV/d with d in meters, pointing from the + plate to the − plate.',
        'Force, then acceleration: F = |q|E with its direction from the sign, then a = F/m with the particle\'s own mass (electron 9.1 × 10⁻³¹ kg, proton 1.67 × 10⁻²⁷ kg). Check that gravity is negligible.',
        'Released from rest, use the constant-acceleration equations: d = ½at², so t = √(2d/a), and v = at.',
        'Gel electrophoresis uses the same uniform field: E = ΔV/L across a gel of length L, and a molecule of charge q feels F = qE toward the electrode of the opposite sign. DNA is negative all along its phosphate backbone, so it runs toward the + electrode; a longer fragment carries more charge but is held back more by the gel, so shorter fragments travel farther in the same time. Convert the gel length to meters, and send DNA toward the + electrode, not the − one. Takeaway: the field pulls, the gel sorts by size.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the plates 2.0 cm apart with ΔV = 400 V across them from a battery, top plate +, the field arrows pointing down (2.0 × 10⁴ V/m), the electron at the bottom plate with an upward force arrow (3.2 × 10⁻¹⁵ N) beside a tiny weight arrow, the acceleration readout (3.5 × 10¹⁵ m/s²), then the electron crossing in 3.4 × 10⁻⁹ s',
        'Example 2: the deck\'s gel, 15 cm long with ΔV = 90 V across it, wells at the − electrode, the field arrow pointing back toward the wells (600 V/m), a band with its force arrow toward the + electrode (9.6 × 10⁻¹⁵ N), a fragment twice as long with twice the force, then the short and long bands after an hour, the short one far ahead',
        'The "Remember" recap of the method (shared ideas only): E = ΔV/d in meters; F = qE with its sign; a = F/m with the right mass; d = ½at² and v = at from rest',
        'End card: "Up next: Electric Potential Energy"',
      ],
      workedExample:
        'Example 1: Two horizontal parallel plates 2.0 cm apart are connected to a battery that holds a potential difference ΔV = 400 V across them, with the top plate positive. An electron (charge −1.6 × 10⁻¹⁹ C, mass 9.1 × 10⁻³¹ kg) is released from rest at the bottom plate. Ignore gravity. (a) What are the size and direction of the field between the plates? (b) What force acts on the electron, and which way? (c) What is its acceleration? (d) How long does it take to reach the top plate? (a) E = ΔV/d = 400/0.020 = 2.0 × 10⁴ V/m, pointing down, from the + plate to the − plate; (b) F = |q|E = (1.6 × 10⁻¹⁹)(2.0 × 10⁴) = 3.2 × 10⁻¹⁵ N, upward, against the field; the electron\'s weight, about 9 × 10⁻³⁰ N, is negligible beside it; (c) a = F/m = (3.2 × 10⁻¹⁵)/(9.1 × 10⁻³¹) ≈ 3.5 × 10¹⁵ m/s²; (d) from rest, d = ½at², so t = √(2d/a) = √((2)(0.020)/(3.5 × 10¹⁵)) ≈ 3.4 × 10⁻⁹ s. Example 2: An agarose gel 15 cm long has a potential difference ΔV = 90 V applied across it, with the sample wells at the negative electrode. A DNA fragment in the gel carries a charge of −1.6 × 10⁻¹⁷ C. (a) What is the field in the gel, and which way does it point? (b) What force acts on the fragment, and toward which electrode? (c) A fragment twice as long carries twice the charge. What force acts on it? (d) After an hour, which fragment has traveled farther, and why? (a) E = ΔV/L = 90/0.15 = 600 V/m, pointing from the + electrode back toward the − electrode at the wells; (b) F = |q|E = (1.6 × 10⁻¹⁷)(600) = 9.6 × 10⁻¹⁵ N, toward the + electrode, against the field, since DNA is negative; (c) twice the charge in the same field gives twice the force, about 1.9 × 10⁻¹⁴ N, so the force per unit charge is the same for both; (d) the shorter fragment: the gel\'s mesh holds back a longer fragment more, so it moves more slowly even though it is pulled harder.',
      pitfalls: [
        'Leaving the gap in centimeters or millimeters.',
        'Using the proton\'s mass for an electron, or the other way round.',
        'Dropping the ½ in d = ½at².',
        'Pointing the force on the electron along the field instead of against it.',
      ],
      lessonParts: [2, 3, 4],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat', 'mcat-molecular-biology-biotechnology-mcat', 'mcat-lab-methods-mcat'],
      mcatOnly: [
        'Gel electrophoresis uses the same uniform field: E = ΔV/L across a gel of length L, and a molecule of charge q feels F = qE toward the electrode of the opposite sign. DNA is negative all along its phosphate backbone, so it runs toward the + electrode; a longer fragment carries more charge but is held back more by the gel, so shorter fragments travel farther in the same time. Convert the gel length to meters, and send DNA toward the + electrode, not the − one. Takeaway: the field pulls, the gel sorts by size.',
      ],
      mcatOnlyQuestions: [2],
      checkpoint: [
        {
          question: 'Two parallel plates 4.0 mm apart are held at a potential difference ΔV = 200 V. A proton (mass 1.67 × 10⁻²⁷ kg) is released from rest at the positive plate. What is its acceleration?',
          options: ['4.8 × 10⁹ m/s²', '8.8 × 10¹⁵ m/s²', '4.8 × 10¹² m/s²', '7.7 × 10⁷ m/s²'],
          correctAnswer: 2,
          explanation:
            'E = ΔV/d = 200/(4.0 × 10⁻³) = 5.0 × 10⁴ V/m, F = eE = (1.6 × 10⁻¹⁹)(5.0 × 10⁴) = 8.0 × 10⁻¹⁵ N, and a = F/m = (8.0 × 10⁻¹⁵)/(1.67 × 10⁻²⁷) ≈ 4.8 × 10¹² m/s². 4.8 × 10⁹ m/s² leaves the gap as 4.0 instead of 4.0 × 10⁻³ m; 8.8 × 10¹⁵ m/s² divides by the electron\'s mass; and 7.7 × 10⁷ m/s² multiplies ΔV by d instead of dividing.',
        },
        {
          question: 'An electron (mass 9.1 × 10⁻³¹ kg) starts from rest in a uniform field of 1.0 × 10³ N/C. How far does it move in 2.0 × 10⁻⁸ s?',
          options: ['7.0 × 10⁻² m', '1.9 × 10⁻⁵ m', '1.8 × 10⁶ m', '3.5 × 10⁻² m'],
          correctAnswer: 3,
          explanation:
            'a = eE/m = (1.6 × 10⁻¹⁹)(1.0 × 10³)/(9.1 × 10⁻³¹) ≈ 1.76 × 10¹⁴ m/s², and from rest d = ½at² = ½(1.76 × 10¹⁴)(2.0 × 10⁻⁸)² ≈ 3.5 × 10⁻² m, about 3.5 cm. 7.0 × 10⁻² m leaves out the ½; 1.9 × 10⁻⁵ m uses the proton\'s mass; and 1.8 × 10⁶ m forgets to square the time.',
        },
        {
          question: 'A gel 20 cm long has a potential difference ΔV = 160 V applied across it. A DNA fragment in it carries a charge of −4.8 × 10⁻¹⁷ C. What electric force acts on the fragment, and toward which electrode?',
          options: [
            '3.8 × 10⁻¹⁴ N, toward the − electrode',
            '3.8 × 10⁻¹⁴ N, toward the + electrode',
            '3.8 × 10⁻¹⁶ N, toward the + electrode',
            '7.7 × 10⁻¹⁵ N, toward the + electrode',
          ],
          correctAnswer: 1,
          explanation:
            'E = ΔV/L = 160/0.20 = 800 V/m, and F = |q|E = (4.8 × 10⁻¹⁷)(800) ≈ 3.8 × 10⁻¹⁴ N. DNA is negative, so it is pushed against the field, toward the + electrode. "Toward the − electrode" forgets that opposite charges attract; 3.8 × 10⁻¹⁶ N divides by 20 cm instead of 0.20 m; and 7.7 × 10⁻¹⁵ N multiplies the charge by the voltage, qΔV, which is an energy, not a force.',
        },
      ],
    },
  ],
}
