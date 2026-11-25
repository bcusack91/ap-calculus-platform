import type { ShotList } from '../types'

/**
 * Shot list: MCAT Physics — Electrostatics Part 3: Electric Potential & Energy
 * (topic mcat-physics-electricity-electric-potential-mcat; the third and last part of the
 * "Electric Force, Field & Potential" video series).
 *
 * Sources: the MCAT electrostatics lesson (src/data/interactive-lessons/
 * mcat-mcat-physics-electricity-electrostatics-mcat-part1..4.ts: the potential-versus-energy table
 * and equipotentials in Part 1, the Core Four, U = kq₁q₂/r, W = −qΔV and E = V/d in Part 2, the
 * membrane field and the energy per ion in Part 3, energy conservation and midpoint superposition
 * in Part 4), the AP Physics 2 lessons physics2-electric-fields-part4..6.ts (potential, potential
 * energy and work, equipotentials and the E–V link), the deck figures in
 * src/data/deck-figures/mcat-cp-electrostatics.ts (the potential hill, equipotentials around a point
 * charge, the Core Four grid, the parallel plates, the membrane, the midpoint superposition), and
 * the exit pools to avoid (lesson-built mcat-physics-electricity-electrostatics-mcat.ts and the
 * electric-fields-potential items in src/data/exit-quizzes/ap-physics-2.ts).
 * Eight Manim clips in four pairs (owner format, Nov 2026): a CONCEPT clip that teaches the idea and
 * ends on the "Remember" recap, then a WORKED-EXAMPLES clip with two examples, each shown in full
 * with lettered parts and a pause-and-try prompt before the solution. Concept clips get conceptual
 * checkpoint questions; worked-example clips get questions that mirror their two examples with new
 * numbers.
 * Clips 1–2: electric potential energy of a pair, its sign, the work done by you and by the field,
 * and several charges (lesson Part 2; AP part 5). Clips 3–4: electric potential, V = kq/r,
 * superposition as signed numbers, V versus U, and E = 0 versus V = 0 (lesson Parts 1, 2 and 4; AP
 * part 4). Clips 5–6: equipotentials, |E| = |ΔV/Δr| and E = ΔV/d between plates (lesson Parts 1–3;
 * AP part 6). Clips 7–8: energy conservation for moving charges, the electron-volt, speeds and closest
 * approach (lesson Parts 1, 3 and 4; AP part 5).
 * Capacitance, dielectrics, stored energy and the battery-connected / disconnected plate rules are
 * left to the Circuits Part 3 videos; voltage basics and the electron-volt were introduced in
 * Circuits Part 1 (voltage1/voltage2), so they are built on here, not re-taught.
 *
 * REUSE FOR AP PHYSICS 2 (topic electric-fields-potential): each clip is cut into sections,
 * about one per key point, and the AP lesson takes only the SHARED sections. MCAT-only material
 * sits in key points of its own, listed word for word in `mcatOnly`, with any question that
 * depends on it listed in `mcatOnlyQuestions`:
 *   clip 5: the cell membrane as a pair of charged plates, E = ΔV/d ≈ 10⁷ V/m (1 key point, question 3)
 *   clip 8: an ion crossing a membrane at a −70 mV resting potential, ΔU = qΔV in eV and joules
 *           (1 key point, question 3); both worked examples in clip 8 are shared
 * Clips 1, 2, 3, 4, 6 and 7 are shared in full. Every "Remember" recap covers shared ideas only.
 * Symbols follow the AP equation sheet: U = kq₁q₂/r, V = kq/r, ΔU = qΔV, |E| = |ΔV/Δr|,
 * k = 9.0 × 10⁹ N·m²/C², e = 1.6 × 10⁻¹⁹ C, m_e = 9.1 × 10⁻³¹ kg, m_p = 1.67 × 10⁻²⁷ kg.
 *
 * The checkpoint questions are what a YouTube viewer answers at studymondo.com/v/<code>
 * (src/data/video-short-links.ts). Codes (fixed by the series plan): work1/work2,
 * potential1/potential2, equip1/equip2, accel1/accel2. They use new scenarios and numbers, so they
 * never repeat an exit-quiz item or a worked example. Clip 8 closes the series: its end card is
 * "Thanks for watching", with no "Up next".
 */
export const shotList: ShotList = {
  courseSlug: 'mcat-prep',
  topicSlug: 'mcat-physics-electricity-electric-potential-mcat',
  title: 'Electrostatics Part 3: Electric Potential & Energy',
  overview:
    'Eight animated clips in four pairs that finish the electrostatics series with energy: the potential energy stored in a pair of charges, electric potential as energy per charge, equipotentials and the link between field and potential, E = ΔV/d, and energy conservation for moving charges. Each idea gets a concept clip followed by a worked-examples clip in which every problem is shown in full, with a moment to pause and try it before the solution. Throughout, potential (V, in volts) is kept apart from potential energy (U, in joules). Narration stays exam-neutral, and each clip is cut into sections so that introductory physics lessons can reuse the shared ones; the cell-membrane material sits in sections of its own. Each clip ends with three checkpoint questions. This part closes the electrostatics series.',
  clips: [
    // ── 1 · Electric potential energy (concepts) ─────────────────────────
    {
      title: 'Electric Potential Energy',
      minutes: 7,
      goal: 'Explain electric potential energy as energy stored in a pair of charges, predict its sign and how it changes with distance, and relate it to the work done by the field and by an outside agent.',
      keyPoints: [
        'Like a lifted ball, a pair of charges stores energy in its arrangement. The electric force is conservative: the work it does depends only on where a charge starts and ends, not on the path, so a potential energy U can be defined.',
        'For two point charges a distance r apart, U = kq₁q₂/r, with U = 0 when they are infinitely far apart. Unlike Coulomb\'s law, the signs go IN: like charges give U > 0, unlike charges give U < 0. U is a scalar in joules, and it belongs to the pair, not to either charge alone.',
        'Reading the sign: positive U means work was done to push like charges together, and they fly apart if released; negative U means the pair is bound, so energy must be added to pull it apart. Takeaway: a pair moves on its own toward LOWER U, like charges apart and unlike charges together.',
        'Work and energy: the field does W_field = −ΔU. Moving a charge slowly, with no change in kinetic energy, you do W_you = +ΔU. Pushing like charges together, U rises, you do positive work and the field does negative work.',
        'Distance scaling: U goes as 1/r, but the force goes as 1/r². Halve the separation and U doubles while F quadruples.',
        'For three or more charges, add the energy of EVERY pair, with signs: three charges make three pairs. The total is the work needed to assemble them from far apart.',
      ],
      showOnScreen: [
        'A ball lifted against gravity beside a positive charge pushed toward another positive charge, both storing energy; then a straight path and a winding path between the same two points, with the same work readout on each',
        'U = kq₁q₂/r written beside |F| = k|q₁q₂|/r², the absolute-value bars on F highlighted and the signs kept in U',
        'A graph of U against r: the like-charge curve above the axis falling toward 0, the unlike-charge curve below the axis rising toward 0, and a ball rolling "downhill" on each: apart for like charges, together for unlike',
        'Two hands pushing two + charges together: the U meter rising, "W_you > 0" and "W_field < 0"',
        'The separation halving: the U bar doubling while the F bar quadruples',
        'Three charges at the corners of a triangle, the three pair links lighting up one at a time: U_total = U₁₂ + U₁₃ + U₂₃',
        'The "Remember" recap: U = kq₁q₂/r with signs; U = 0 far apart; like charges U > 0, unlike U < 0; W_field = −ΔU and W_you = +ΔU; U ∝ 1/r but F ∝ 1/r²; add every pair',
        'End card: "Up next: Electric Potential Energy: Worked Examples"',
      ],
      pitfalls: [
        'Dropping the signs in U = kq₁q₂/r, as if it were Coulomb\'s law with magnitudes.',
        'Using 1/r² for energy: U falls off as 1/r.',
        'Confusing the field\'s work with yours: for a charge moved slowly they are equal and opposite.',
        'Counting only some pairs, or one pair twice, in a three-charge system.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat', 'mcat-physics-mechanics-work-energy-power-mcat'],
      checkpoint: [
        {
          question: 'Two electrons are pushed closer together. What happens to the electric potential energy of the pair?',
          options: [
            'It falls, because both charges are negative',
            'It rises, and the person pushing does positive work',
            'It stays the same, since the charges are unchanged',
            'It falls, and the electric field does positive work',
          ],
          correctAnswer: 1,
          explanation:
            'U = kq₁q₂/r, and the product of two negative charges is positive, so U > 0 and it grows as r shrinks. Like charges repel, so someone must push to bring them together: U rises, the pusher does positive work and the field does negative work. "Both charges are negative" looks at the sign of each charge instead of their product; U depends on r, so it changes even though the charges do not; and "the field does positive work" would mean the electrons moved the way the field pushes them, which for like charges is apart.',
        },
        {
          question: 'Two like charges held 0.40 m apart have potential energy U and repel each other with force F. They are pushed to 0.20 m apart. What are the new potential energy and force?',
          options: ['4U and 4F', 'U/2 and F/4', '2U and 4F', '2U and 2F'],
          correctAnswer: 2,
          explanation:
            'Halving r doubles U = kq₁q₂/r, which goes as 1/r, and quadruples F, which goes as 1/r²: 2U and 4F. "4U and 4F" gives the energy the inverse-square law of the force; "2U and 2F" gives the force the 1/r of the energy; and "U/2 and F/4" applies the scaling for a doubled separation, but the charges moved closer.',
        },
        {
          question: 'A small charge is carried slowly from point A to point B near a fixed charge, once along a straight line and once along a long, winding path. How does the work done by the electric field compare for the two trips?',
          options: [
            'Greater on the winding path, as it is longer',
            'Zero on both, as no kinetic energy is gained',
            'Smaller on the winding path, which strays from E',
            'The same, because the electric force is conservative',
          ],
          correctAnswer: 3,
          explanation:
            'The electric force is conservative, so its work depends only on the start and end points: W_field = −ΔU = −(U_B − U_A) for both trips. A longer path adds no work, because stretches that go against the field cancel stretches that go with it, which also rules out "smaller on the winding path". No kinetic energy is gained because the carrier\'s work cancels the field\'s: the NET work is zero, but the field\'s work alone is −ΔU, which is zero only if A and B share the same potential energy.',
        },
      ],
    },
    // ── 2 · Electric potential energy (worked examples) ──────────────────
    {
      title: 'Electric Potential Energy: Worked Examples',
      minutes: 6,
      goal: 'Compute the potential energy of a pair of charges at two separations, find the work done by you and by the field, and total the energy of a three-charge arrangement.',
      keyPoints: [
        'Write U = kq₁q₂/r with the sign of each charge, μC and nC changed to coulombs and r in meters.',
        'The change is ΔU = U_final − U_initial. Moving a charge slowly, your work is +ΔU and the field\'s work is −ΔU.',
        'Released from rest, a pair turns potential energy into kinetic energy: like charges fly apart until U has fallen to 0.',
        'For several charges, list every pair once, find each pair\'s U with its sign, then add.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: two + charges sliding from 0.60 m to 0.20 m apart, a U bar growing from 0.060 J to 0.18 J, work arrows for you (+0.12 J) and the field (−0.12 J), then the pair released and a kinetic-energy bar filling to 0.18 J',
        'Example 2: the equilateral triangle (+3.0 nC, +3.0 nC, −1.0 nC, sides 0.30 m), each side lighting up with its pair energy, then the signed total 9.0 × 10⁻⁸ J',
        'The "Remember" recap of the method: keep the signs; ΔU = U_f − U_i; you do +ΔU, the field does −ΔU; list every pair once',
        'End card: "Up next: Electric Potential"',
      ],
      workedExample:
        'Example 1: Charges of +4.0 μC and +1.0 μC are held 0.60 m apart. Use k = 9.0 × 10⁹ N·m²/C². (a) What is the electric potential energy of the pair? (b) What is it when the charges are 0.20 m apart? (c) How much work must you do to push them slowly from 0.60 m to 0.20 m apart, and how much work does the electric field do? (d) The charges are then released from 0.20 m apart. How much kinetic energy do they have in total once they are very far apart? (a) U = kq₁q₂/r = (9.0 × 10⁹)(4.0 × 10⁻⁶)(1.0 × 10⁻⁶)/0.60 = 0.036/0.60 = 0.060 J; (b) U = 0.036/0.20 = 0.18 J, three times as much at a third of the distance; (c) ΔU = 0.18 − 0.060 = 0.12 J, so you do +0.12 J of work and the field does −0.12 J; (d) far apart U = 0, so all 0.18 J has become kinetic energy, shared by the two charges. Example 2: Charges of +3.0 nC, +3.0 nC and −1.0 nC sit at the corners of an equilateral triangle with sides of 0.30 m. Use k = 9.0 × 10⁹ N·m²/C². (a) How many pairs of charges are there? (b) What is the potential energy of each pair? (c) What is the total electric potential energy of the arrangement? (d) What does the sign of the total tell you? (a) Three: the two +3.0 nC charges, and each +3.0 nC charge with the −1.0 nC charge; (b) the like pair has U = (9.0 × 10⁹)(3.0 × 10⁻⁹)(3.0 × 10⁻⁹)/0.30 = 2.7 × 10⁻⁷ J, and each unlike pair has U = (9.0 × 10⁹)(3.0 × 10⁻⁹)(−1.0 × 10⁻⁹)/0.30 = −9.0 × 10⁻⁸ J; (c) U = 2.7 × 10⁻⁷ − 9.0 × 10⁻⁸ − 9.0 × 10⁻⁸ = 9.0 × 10⁻⁸ J; (d) it is positive: assembling the three charges from far apart takes 9.0 × 10⁻⁸ J of work in total, because the repulsion of the like pair outweighs the two attractions.',
      pitfalls: [
        'Dropping the sign of the negative charge.',
        'Reporting the final U when the change ΔU is asked.',
        'Giving the field\'s work the same sign as yours.',
        'Leaving out a pair, or dividing by r² in an energy.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat'],
      checkpoint: [
        {
          question: 'Two +5.0 μC charges are pushed slowly from 0.50 m apart to 0.25 m apart. How much work do you do? (k = 9.0 × 10⁹ N·m²/C²)',
          options: ['0.90 J', '0.45 J', '−0.45 J', '1.35 J'],
          correctAnswer: 1,
          explanation:
            'U = kq₁q₂/r: at 0.50 m, (9.0 × 10⁹)(5.0 × 10⁻⁶)(5.0 × 10⁻⁶)/0.50 = 0.45 J, and at 0.25 m, 0.90 J. Moving slowly, your work is ΔU = 0.90 − 0.45 = 0.45 J. 0.90 J is the final energy, not the change; −0.45 J is the work done by the field, which opposes the push; and 1.35 J treats U as 1/r², so the energy quadruples to 1.8 J and the change becomes 1.35 J.',
        },
        {
          question: 'Charges of +2.0 μC and −8.0 μC are held 0.40 m apart. What is the electric potential energy of the pair? (k = 9.0 × 10⁹ N·m²/C²)',
          options: ['+0.36 J', '−0.90 J', '−0.058 J', '−0.36 J'],
          correctAnswer: 3,
          explanation:
            'U = kq₁q₂/r = (9.0 × 10⁹)(2.0 × 10⁻⁶)(−8.0 × 10⁻⁶)/0.40 = −0.144/0.40 = −0.36 J, negative because unlike charges form a bound pair. +0.36 J drops the sign of the negative charge, as if using magnitudes as in Coulomb\'s law; −0.90 J divides by r², the force\'s distance law; and −0.058 J multiplies by r instead of dividing.',
        },
        {
          question: 'Charges of +3.0 nC, +3.0 nC and −2.0 nC sit at the corners of an equilateral triangle with sides of 0.30 m. What is the total electric potential energy of the arrangement? (k = 9.0 × 10⁹ N·m²/C²)',
          options: ['−9.0 × 10⁻⁸ J', '+2.7 × 10⁻⁷ J', '−3.6 × 10⁻⁷ J', '+6.3 × 10⁻⁷ J'],
          correctAnswer: 0,
          explanation:
            'There are three pairs. The like pair gives (9.0 × 10⁹)(3.0 × 10⁻⁹)(3.0 × 10⁻⁹)/0.30 = +2.7 × 10⁻⁷ J, and each unlike pair gives (9.0 × 10⁹)(3.0 × 10⁻⁹)(−2.0 × 10⁻⁹)/0.30 = −1.8 × 10⁻⁷ J, so the total is 2.7 × 10⁻⁷ − 3.6 × 10⁻⁷ = −9.0 × 10⁻⁸ J. +2.7 × 10⁻⁷ J counts only the like pair; −3.6 × 10⁻⁷ J counts only the two unlike pairs; and +6.3 × 10⁻⁷ J adds all three pairs as positive magnitudes.',
        },
      ],
    },
    // ── 3 · Electric potential (concepts) ────────────────────────────────
    {
      title: 'Electric Potential',
      minutes: 7.5,
      goal: 'Define electric potential as potential energy per charge, find it for a point charge and for several charges by adding signed numbers, and keep potential (V) and potential energy (U) apart.',
      keyPoints: [
        'Electric potential is potential energy per unit charge: V = U/q, in volts, with 1 V = 1 J/C. Like the field, it belongs to a POINT in space and is set by the source charges, whether or not a test charge sits there.',
        'The bridge: a charge q placed where the potential is V has U = qV. Potential (V, in volts) belongs to the place; potential energy (U, in joules) belongs to a charge at that place together with the source charges; we call it the charge\'s U for short. 1 eV is the energy a charge e gains or loses crossing 1 V: 1 eV = 1.6 × 10⁻¹⁹ J. A proton and an electron at the same point share one V but have opposite U.',
        'For a point charge, V = kq/r, with V = 0 far away. The sign of q goes in: V is positive near a positive charge and negative near a negative charge. It falls off as 1/r, more slowly than the field\'s 1/r².',
        'Potential is a scalar, so the potentials of several charges add as signed numbers: V = kq₁/r₁ + kq₂/r₂ + … No components and no angles, only each charge\'s distance to the point.',
        'V and E are independent facts about a point. Midway between two equal positive charges, E = 0 (the fields cancel) but V = 2kq/r. Midway between +q and −q, V = 0 but E ≠ 0 (both fields point toward −q).',
        'Which way charges go: positive charges move toward lower V, negative charges toward higher V, and both lose potential energy. Only differences in potential matter, ΔV = V_B − V_A; where V = 0 is a choice.',
      ],
      showOnScreen: [
        'E = F/q beside V = U/q, the "per charge" step shown for both; a map with a potential readout at every point, with and without a test charge sitting there',
        'One point at V = +80 V: a proton there with U = +80 eV and an electron with U = −80 eV, while the V readout stays the same',
        'A positive charge with V rising near it and a negative charge with V plunging below zero; a graph of V against r (1/r) beside E against r (1/r²)',
        'Three charges and a point P: three signed numbers in a column, added, beside a crossed-out vector diagram',
        'Two midpoints side by side: equal positive charges (field arrows cancelling, V = 2kq/r) and +q with −q (V = 0, field arrows adding toward −q)',
        'Charges on a potential "hill": a positive charge rolling toward low V, an electron climbing toward high V, both labeled "U ↓"',
        'The "Remember" recap: V = U/q in volts; U = qV; V = kq/r with its sign, falling as 1/r; potentials add as signed numbers; E = 0 and V = 0 are independent; + charges go to lower V, − charges to higher V',
        'End card: "Up next: Electric Potential: Worked Examples"',
      ],
      pitfalls: [
        'Treating potential and potential energy as the same thing, or giving V in joules.',
        'Dropping the sign of a negative source charge in V = kq/r.',
        'Adding potentials as vectors, or using 1/r² for V.',
        'Assuming E = 0 wherever V = 0, or V = 0 wherever E = 0.',
      ],
      lessonParts: [1, 2, 4],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat', 'mcat-physics-electricity-dc-circuits-mcat'],
      checkpoint: [
        {
          question: 'A sodium ion (charge +e) is placed at a point where the electric potential is −40 V. What is its electric potential energy there?',
          options: [
            '+40 eV, since energy cannot be negative',
            '−40 V, the same as the potential',
            '−40 eV, from U = qV with q = +e',
            '0 eV, since a lone ion has no energy',
          ],
          correctAnswer: 2,
          explanation:
            'U = qV = (+e)(−40 V) = −40 eV, about −6.4 × 10⁻¹⁸ J. Potential energy can be negative, because it is measured from the zero far from all charges. "+40 eV" drops the sign; "−40 V" gives the potential, a property of the point, instead of the ion\'s energy in eV or joules; and the ion is not alone: the charges that create the −40 V potential are what it has energy with.',
        },
        {
          question: 'Charges +q, +q, −q and −q sit at the corners of a square, with the two positive charges on neighboring corners. At the center of the square:',
          options: ['V = 0 and E ≠ 0', 'V = 0 and E = 0', 'V ≠ 0 and E = 0', 'V ≠ 0 and E ≠ 0'],
          correctAnswer: 0,
          explanation:
            'Every corner is the same distance r from the center, so V = kq/r + kq/r − kq/r − kq/r = 0. The fields do not cancel: each positive charge pushes away from itself and each negative charge pulls toward itself, so all four fields lean toward the side with the negative charges, and E points that way. "V = 0 and E = 0" assumes the fields cancel whenever the potentials do; "V ≠ 0 and E = 0" swaps the two, which is the pattern for four equal charges; and "V ≠ 0 and E ≠ 0" adds the potentials as magnitudes, dropping the signs.',
        },
        {
          question: 'Moving closer and closer to an isolated negative point charge, what happens to the electric potential?',
          options: [
            'It rises, as the field grows stronger',
            'It falls, growing more and more negative',
            'It stays at zero, as V needs two charges',
            'It rises, as V = kq/r uses only |q|',
          ],
          correctAnswer: 1,
          explanation:
            'V = kq/r keeps the sign of q, so near a negative charge V is negative, and a smaller r makes it larger in size: more and more negative. A stronger field says V changes more steeply, not which way it changes; potential is set by the source charge alone, with no second charge needed; and only the magnitude form of Coulomb\'s law drops the sign, while V keeps it.',
        },
      ],
    },
    // ── 4 · Electric potential (worked examples) ─────────────────────────
    {
      title: 'Electric Potential: Worked Examples',
      minutes: 6,
      goal: 'Add the potentials of two charges at a point, use the result to find the work to bring in a charge and the energy of an electron there, and locate the point between two charges where V = 0.',
      keyPoints: [
        'For each source, V = kq/r with its sign and its own distance to the point; then add the numbers.',
        'With V known, any charge placed there has U = qV. Bringing a charge in slowly from far away, where V = 0, takes work W = qV.',
        'To find where V = 0 between two opposite charges, set kq₁/r₁ = k|q₂|/r₂: the zero sits closer to the SMALLER charge (there is a second zero outside the pair, beyond the smaller charge).',
        'V = 0 does not mean E = 0: at that point both fields point toward the negative charge and add.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: a 3-4-5 triangle with +8.0 nC at the origin, −5.0 nC at 0.40 m along x and P at 0.30 m along y; the two distances, the readouts +240 V and −90 V and their sum 150 V; then a +2.0 μC charge carried in from far away and an electron parked at P',
        'Example 2: +6.0 nC and −2.0 nC 0.80 m apart, a graph of V against x crossing zero at 0.60 m; then the two field arrows at that point, both pointing toward the −2.0 nC charge, 150 N/C and 450 N/C adding to 600 N/C',
        'The "Remember" recap of the method: one V per charge, signs kept; add as numbers; U = qV; between the charges, V = 0 sits nearer the smaller charge, with a second zero outside the pair beyond it; V = 0 is not E = 0',
        'End card: "Up next: Equipotentials & E = ΔV/d"',
      ],
      workedExample:
        'Example 1: A +8.0 nC charge sits at the origin and a −5.0 nC charge sits on the x-axis at x = 0.40 m. Point P is on the y-axis at y = 0.30 m. Use k = 9.0 × 10⁹ N·m²/C² and e = 1.6 × 10⁻¹⁹ C. (a) What is the potential at P due to each charge? (b) What is the total potential at P? (c) How much work must you do to bring a +2.0 μC charge slowly from very far away to P? (d) What is the potential energy of an electron placed at P, in eV and in joules? (a) P is 0.30 m from the +8.0 nC charge and √(0.30² + 0.40²) = 0.50 m from the −5.0 nC charge, so V₁ = (9.0 × 10⁹)(8.0 × 10⁻⁹)/0.30 = 72/0.30 = 240 V and V₂ = (9.0 × 10⁹)(−5.0 × 10⁻⁹)/0.50 = −45/0.50 = −90 V; (b) V = 240 − 90 = 150 V, a plain sum with no angles; (c) W = qV = (2.0 × 10⁻⁶)(150) = 3.0 × 10⁻⁴ J; (d) U = qV = (−e)(150 V) = −150 eV = −2.4 × 10⁻¹⁷ J, negative although V is positive. Example 2: A +6.0 nC charge is at x = 0 and a −2.0 nC charge is at x = 0.80 m. Use k = 9.0 × 10⁹ N·m²/C². (a) At what point between the charges is the electric potential zero? (b) What is the electric field at that point, magnitude and direction? (c) How much work does it take to bring a small test charge slowly from very far away to that point? (a) V = 0 where k(6.0 nC)/x = k(2.0 nC)/(0.80 − x), so 6.0(0.80 − x) = 2.0x, 4.8 = 8.0x and x = 0.60 m, which is 0.20 m from the smaller charge; (b) the +6.0 nC charge gives (9.0 × 10⁹)(6.0 × 10⁻⁹)/0.60² = 150 N/C pointing away from it, in +x, and the −2.0 nC charge gives (9.0 × 10⁹)(2.0 × 10⁻⁹)/0.20² = 450 N/C pointing toward it, also in +x, so E = 600 N/C in +x: V is zero but E is not; (c) none: far away and at that point V = 0, so ΔU = qΔV = 0.',
      pitfalls: [
        'Using the separation of the charges instead of each charge\'s distance to P.',
        'Dropping the minus sign of a negative charge.',
        'Putting the V = 0 point between the charges nearer the LARGER one.',
        'Concluding that E = 0 because V = 0.',
      ],
      lessonParts: [2, 4],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat'],
      checkpoint: [
        {
          question: 'A +4.0 nC charge sits at the origin and a −3.0 nC charge sits on the x-axis at x = 0.40 m. What is the electric potential at point P, on the y-axis at y = 0.30 m? (k = 9.0 × 10⁹ N·m²/C²)',
          options: ['66 V', '174 V', '292 V', '53 V'],
          correctAnswer: 0,
          explanation:
            'P is 0.30 m from the +4.0 nC charge and √(0.30² + 0.40²) = 0.50 m from the −3.0 nC charge, so V = (9.0 × 10⁹)(4.0 × 10⁻⁹)/0.30 + (9.0 × 10⁹)(−3.0 × 10⁻⁹)/0.50 = 120 − 54 = 66 V. 174 V drops the minus sign of the negative charge; 292 V divides by r², the field\'s law, giving 400 − 108; and 53 V uses the 0.40 m between the charges as the second distance instead of the 0.50 m to P.',
        },
        {
          question: 'The electric potential at point P is −250 V. How much work must you do to bring a −2.0 μC charge slowly from very far away to P?',
          options: ['+5.0 × 10² J', '−5.0 × 10⁻⁴ J', '+1.3 × 10⁸ J', '+5.0 × 10⁻⁴ J'],
          correctAnswer: 3,
          explanation:
            'Far away V = 0, so the charge\'s energy changes by ΔU = qV = (−2.0 × 10⁻⁶)(−250) = +5.0 × 10⁻⁴ J, and moving it slowly you must supply exactly that. Two negatives give a positive: a negative potential means the sources are on balance negative, and a negative charge must be pushed in against their repulsion. −5.0 × 10⁻⁴ J drops one of the two minus signs; +5.0 × 10² J leaves out the micro prefix; and +1.3 × 10⁸ J divides the potential by the charge instead of multiplying.',
        },
        {
          question: 'A +9.0 nC charge and a −3.0 nC charge are 0.80 m apart. Where on the line between them is the electric potential zero?',
          options: [
            '0.20 m from the +9.0 nC charge',
            '0.60 m from the +9.0 nC charge',
            '0.40 m from the +9.0 nC charge',
            '0.51 m from the +9.0 nC charge',
          ],
          correctAnswer: 1,
          explanation:
            'Set 9.0/x = 3.0/(0.80 − x): 9.0(0.80 − x) = 3.0x, so 7.2 = 12x and x = 0.60 m from the +9.0 nC charge, which is 0.20 m from the smaller charge, where the zero must lie. 0.20 m measures from the wrong charge and puts the zero next to the larger one; 0.40 m, the midpoint, ignores that the charges differ in size; and 0.51 m squares the distances, as for a point where a FIELD cancels, but potentials fall off as 1/r.',
        },
      ],
    },
    // ── 5 · Equipotentials and E = ΔV/d (concepts) ───────────────────────
    {
      title: 'Equipotentials & E = ΔV/d',
      minutes: 7.5,
      goal: 'Draw and read equipotential surfaces, explain why they cross field lines at right angles, and use |E| = |ΔV/Δr|, or E = ΔV/d between parallel plates, to link the strength of a field to how fast the potential changes.',
      keyPoints: [
        'An equipotential is a surface, drawn as a line on a flat diagram, on which every point has the same V. Moving a charge along one takes no work: W = qΔV = 0. Equipotentials are the contour lines of a map whose height is V.',
        'Equipotentials always cross field lines at right angles: if the field had a part along the surface, moving along it would take work. E points from high V toward low V, the steepest way downhill.',
        'The link: |E| = |ΔV/Δr|, the change in potential per meter along the field. Closely spaced equipotentials mean a strong field, like a steep slope; widely spaced ones, a weak field. Where V is constant, E = 0. Units agree: 1 V/m = 1 N/C.',
        'Between parallel plates the field is uniform, E = ΔV/d. The equipotentials are evenly spaced planes parallel to the plates, and V changes steadily across the gap: halfway across, V is halfway between the plate values. Around a point charge the equipotentials are spheres that spread farther apart for equal steps in V, because the field weakens with distance.',
        'A conductor in equilibrium is one equipotential: E = 0 inside, so its whole body and surface sit at one V, and field lines meet its surface at right angles.',
        'A cell membrane works like a pair of charged plates: a resting potential of −70 mV across a bilayer about 7.0 nm thick gives E = ΔV/d = (0.070 V)/(7.0 × 10⁻⁹ m) = 1.0 × 10⁷ V/m, pointing inward from the positive outer face to the negative inner face. Takeaway: a small voltage across a tiny gap makes a huge field.',
      ],
      showOnScreen: [
        'A contour map of a hill turning into an equipotential map: the contour lines become lines labeled 10 V, 20 V and 30 V, and a charge slides along the 20 V line with "W = 0"',
        'Field lines and equipotentials around a positive point charge: radial lines crossing dashed circles at right angles, a zoomed corner showing the right angle, and an arrow from the 30 V circle toward the 20 V circle labeled E',
        'One map with lines bunched on the left and spread on the right, |E| = |ΔV/Δr| worked out for each side; the unit chain V/m = J/(C·m) = N/C',
        'Parallel plates at 0 V and 100 V with equipotential planes every 25 V and a straight-line graph of V across the gap; beside them a point charge whose equipotential circles, at equal steps, spread farther apart',
        'A metal block with field lines meeting its surface at right angles, the whole block shaded one color: "the same V everywhere"',
        'A cell membrane drawn as two charged plates, + on the outer face and − on the inner face, the 7.0 nm gap and the field arrow pointing inward, 1.0 × 10⁷ V/m',
        'The "Remember" recap (shared ideas only): equipotentials take no work; they cross field lines at right angles; E points from high V to low V; |E| = |ΔV/Δr|, so close lines mean a strong field; E = ΔV/d with evenly spaced planes between plates; a conductor is one equipotential',
        'End card: "Up next: Equipotentials & E = ΔV/d: Worked Examples"',
      ],
      pitfalls: [
        'Drawing equipotentials parallel to field lines instead of perpendicular to them.',
        'Pointing E from low V to high V.',
        'Thinking a large V means a large E: the field depends on how fast V changes, not on V itself.',
        'Forgetting to convert mm or cm to m in E = ΔV/d.',
      ],
      lessonParts: [1, 2, 3],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat', 'mcat-organ-systems-nervous-mcat'],
      mcatOnly: [
        'A cell membrane works like a pair of charged plates: a resting potential of −70 mV across a bilayer about 7.0 nm thick gives E = ΔV/d = (0.070 V)/(7.0 × 10⁻⁹ m) = 1.0 × 10⁷ V/m, pointing inward from the positive outer face to the negative inner face. Takeaway: a small voltage across a tiny gap makes a huge field.',
      ],
      mcatOnlyQuestions: [2],
      checkpoint: [
        {
          question: 'Equipotentials around an isolated positive point charge are drawn at equal steps of potential: 400 V, 300 V, 200 V and 100 V. Moving outward, the spacing between neighboring equipotentials:',
          options: [
            'Stays the same at every step',
            'Shrinks, as the lines crowd outward',
            'Grows, as the field gets weaker',
            'Grows only if the charge is negative',
          ],
          correctAnswer: 2,
          explanation:
            'Each step is the same ΔV, and |ΔV| = |E|Δr, so where the field is weaker a larger Δr is needed for the same step. The field weakens with distance, so the spacing grows: with V = kq/r, the 400, 300, 200 and 100 V surfaces sit at r₀, 1.33r₀, 2r₀ and 4r₀. Equal spacing holds only in a uniform field, such as between parallel plates; crowding outward would mean the field strengthens with distance; and the sign of the charge flips the sign of V, not the pattern of spacing.',
        },
        {
          question: 'At point P, the 50 V equipotential line runs north–south. The 60 V line lies just to the east and the 40 V line just to the west. Which way does the electric field at P point?',
          options: [
            'East, toward the higher 60 V line',
            'West, toward the lower 40 V line',
            'North, along the 50 V line itself',
            'Zero, as P is on an equipotential',
          ],
          correctAnswer: 1,
          explanation:
            'The field crosses equipotentials at right angles and points from high potential toward low potential, so at P it points west, toward 40 V. East reverses the direction; it is the way a negative charge would be pushed, not the field. North runs along the equipotential, the one direction in which V does not change; and V being the same along the 50 V line does not make E zero, since V changes as you step east or west.',
        },
        {
          question: 'A neuron hyperpolarizes from −70 mV to −90 mV, with its membrane thickness unchanged. How does the electric field inside the membrane change?',
          options: [
            'It weakens, as V is more negative',
            'It reverses and now points outward',
            'It is unchanged, as d is unchanged',
            'It grows by 9/7 and still points in',
          ],
          correctAnswer: 3,
          explanation:
            'E = ΔV/d with d fixed: the size of the potential difference grows from 70 mV to 90 mV, so the field grows by 90/70 = 9/7, about 1.3 times. The inside is still negative relative to the outside, so the field still points inward, from the positive outer face to the negative inner face. "Weakens" reads a more negative number as a smaller field, when it is the size of ΔV that counts; "reverses" would need the inside to turn positive, as at the peak of an action potential; and a fixed thickness fixes d, not E.',
        },
      ],
    },
    // ── 6 · Equipotentials and E = ΔV/d (worked examples) ────────────────
    {
      title: 'Equipotentials & E = ΔV/d: Worked Examples',
      minutes: 6,
      goal: 'Find the field and the potential at points between parallel plates, the work the field does on a charge moved across and along equipotentials, and the field strength read from an equipotential map.',
      keyPoints: [
        'Between plates, E = ΔV/d with d in meters, pointing from the higher-potential plate to the lower one.',
        'In a uniform field V changes in equal steps: a point a distance x from the lower-potential plate sits Ex above that plate\'s potential.',
        'The field\'s work is W_field = −qΔV, with the signs of q and ΔV kept. Along an equipotential, ΔV = 0 and so is the work.',
        'On an equipotential map, estimate |E| = |ΔV|/Δr from the spacing of neighboring lines; the closer the lines, the stronger the field.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: plates 3.0 cm apart at 0 V and 450 V, equipotential planes every 150 V, points A and B marked, the charge stepping from A to B with W_field = −3.0 × 10⁻⁷ J, then sliding sideways along the 300 V plane with W = 0',
        'Example 2: the equipotential map with bunched lines in region X and spread lines in region Y, |E| = 500 V/m and 200 V/m, field arrows at right angles to the lines, then an electron crossing from 10 V to 40 V by two different routes, +30 eV of work on each',
        'The "Remember" recap of the method: E = ΔV/d in V/m; V steps evenly between plates; W_field = −qΔV; along an equipotential W = 0; |E| ≈ |ΔV|/Δr from the line spacing',
        'End card: "Up next: Energy Conservation for Charges"',
      ],
      workedExample:
        'Example 1: Two large parallel plates 3.0 cm apart are held at 0 V and +450 V. Point A is 1.0 cm from the 0 V plate and point B is 2.0 cm from it. (a) What is the electric field between the plates, and which way does it point? (b) What are the potentials at A and at B? (c) How much work does the field do on a +2.0 nC charge moved from A to B? (d) The charge is then moved 1.5 cm parallel to the plates. How much work does the field do now? (a) E = ΔV/d = 450/0.030 = 1.5 × 10⁴ V/m, pointing from the +450 V plate toward the 0 V plate; (b) V_A = Ex = (1.5 × 10⁴)(0.010) = 150 V and V_B = (1.5 × 10⁴)(0.020) = 300 V; (c) W_field = −qΔV = −(2.0 × 10⁻⁹)(300 − 150) = −3.0 × 10⁻⁷ J, negative because the positive charge moved toward higher potential, against the field, so whoever moved it did +3.0 × 10⁻⁷ J; (d) zero: moving parallel to the plates keeps the charge on the 300 V equipotential, so ΔV = 0. Example 2: An equipotential map shows lines at 40 V, 30 V, 20 V and 10 V. Measured along a field line, neighboring lines are 2.0 cm apart in region X and 5.0 cm apart in region Y. Use e = 1.6 × 10⁻¹⁹ C. (a) What is the field strength in each region, and where is it stronger? (b) Which way does the field point? (c) An electron moves from the 10 V line to the 40 V line. How much work does the field do on it, in eV and in joules? (d) Does the answer to (c) depend on whether the electron crosses in region X or in region Y? (a) In X, |E| = 10/0.020 = 500 V/m; in Y, |E| = 10/0.050 = 200 V/m, so the field is stronger in X, where the lines are closer; (b) at right angles to the lines, from the 40 V line toward the 10 V line; (c) W_field = −qΔV = −(−e)(40 − 10) = +30 eV = (30)(1.6 × 10⁻¹⁹) = 4.8 × 10⁻¹⁸ J, positive because an electron moving toward higher potential goes the way the field pushes it; (d) no: the work depends only on the 30 V difference between start and finish, not on the route.',
      pitfalls: [
        'Leaving d in centimeters or millimeters.',
        'Measuring x from the wrong plate.',
        'Giving the field\'s work the sign of ΔU instead of −ΔU.',
        'Reading closely spaced equipotentials as a weak field.',
      ],
      lessonParts: [1, 2],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat'],
      checkpoint: [
        {
          question: 'Two large parallel plates 2.5 cm apart are held at 0 V and +200 V. What is the potential at a point 1.0 cm from the 0 V plate?',
          options: ['120 V', '8.0 V', '80 V', '100 V'],
          correctAnswer: 2,
          explanation:
            'E = ΔV/d = 200/0.025 = 8.0 × 10³ V/m, and V climbs steadily from the 0 V plate: V = Ex = (8.0 × 10³)(0.010) = 80 V. 120 V measures the 1.0 cm from the +200 V plate instead (200 − 80); 100 V is the midpoint value, but the point is not halfway across; and 8.0 V slips a power of ten converting 1.0 cm to meters.',
        },
        {
          question: 'A +5.0 nC charge moves from a point at 350 V to a point at 150 V between two charged plates. How much work does the electric field do on it?',
          options: ['+1.0 × 10⁻⁶ J', '−1.0 × 10⁻⁶ J', '+1.8 × 10⁻⁶ J', '+2.5 × 10⁻⁶ J'],
          correctAnswer: 0,
          explanation:
            'W_field = −qΔV = −(5.0 × 10⁻⁹)(150 − 350) = +1.0 × 10⁻⁶ J, positive because a positive charge moving toward lower potential goes the way the field pushes it. −1.0 × 10⁻⁶ J is qΔV, the change in potential energy, not the field\'s work; +1.8 × 10⁻⁶ J multiplies the charge by the starting potential alone (1.75 × 10⁻⁶ J); and +2.5 × 10⁻⁶ J adds the two potentials instead of subtracting them.',
        },
        {
          question: 'On an equipotential map, the 60 V and 48 V lines are 3.0 cm apart. What is the electric field between them?',
          options: [
            '400 V/m, from 48 V toward 60 V',
            '400 V/m, from 60 V toward 48 V',
            '4.0 V/m, from 60 V toward 48 V',
            '3600 V/m, from 60 V toward 48 V',
          ],
          correctAnswer: 1,
          explanation:
            '|E| = |ΔV|/Δr = (60 − 48)/0.030 = 12/0.030 = 400 V/m, pointing from high potential to low: from the 60 V line toward the 48 V line, at right angles to both. "From 48 V toward 60 V" reverses the direction; 4.0 V/m leaves the spacing in centimeters; and 3600 V/m adds the two potentials, when only their difference matters.',
        },
      ],
    },
    // ── 7 · Energy conservation for charges (concepts) ───────────────────
    {
      title: 'Energy Conservation for Charges',
      minutes: 7,
      goal: 'Use conservation of energy to predict how charges speed up or slow down as they cross a potential difference or approach other charges, and compare particles of different charge and mass.',
      keyPoints: [
        'With only electric forces doing work, energy is conserved: KE_i + U_i = KE_f + U_f, the same bookkeeping as a ball rolling on a hill. For a charge moving between two points, ΔKE = −ΔU = −qΔV.',
        'From rest through a potential difference ΔV, a charge gains KE = |q||ΔV|, whatever the path, the shape of the field or the distance. In electron-volts, a charge e crossing 100 V gains 100 eV, and a charge 2e gains 200 eV.',
        'Direction: a positive charge speeds up moving toward LOWER V, and a negative charge speeds up moving toward HIGHER V. Moving the other way, each slows down; if it runs out of kinetic energy, it stops and turns back.',
        'The same energy is not the same speed: KE = ½mv², so v = √(2|q||ΔV|/m). Through the same ΔV a proton and an electron gain the same energy, but the electron, about 1836 times lighter, ends up about 43 times faster. Speed grows as √ΔV: four times the voltage doubles the speed.',
        'Pairs of charges trade U and KE too, with U = kq₁q₂/r: two like charges released from rest fly apart, turning their U into KE, and a charge fired at a FIXED like charge slows down; at its closest approach all of its KE has become U.',
        'Energy beats kinematics: when a problem gives voltages or positions and asks for a speed or an energy, use energy conservation and skip the forces, fields and accelerations.',
      ],
      showOnScreen: [
        'Energy bar charts (KE, U and the total) for a ball rolling down a hill beside a proton moving from 100 V to 0 V: the U bar draining into the KE bar while the total stays put',
        'Two gaps with the same 500 V across them, one narrow and one wide, the same proton arriving with the same 500 eV from each; then a 2e ion arriving with 1000 eV',
        'A proton and an electron each launched the "wrong" way: slowing, stopping where the kinetic energy runs out, and turning back',
        'A proton and an electron leaving opposite plates with equal 100 eV bars but very different speed arrows (×43); a graph of v against ΔV rising as a square root',
        'Two like charges released from rest and flying apart as U falls to 0; a charge fired at a fixed like charge, slowing to a stop at r_min with all of its KE turned into U',
        'A page of F = ma kinematics crossed out next to one line of energy conservation',
        'The "Remember" recap: KE + U is conserved; from rest KE = |q||ΔV| and the path does not matter; + charges speed up toward low V, − charges toward high V; the same energy is not the same speed, v = √(2|q||ΔV|/m); fired at a fixed like charge, at closest approach KE has become U',
        'End card: "Up next: Energy Conservation: Worked Examples"',
      ],
      pitfalls: [
        'Thinking a wider gap at the same voltage gives more energy.',
        'Assuming equal kinetic energies mean equal speeds.',
        'Getting the direction wrong for negative charges, which speed up toward higher potential.',
        'Doubling the speed when the voltage doubles: speed goes as √ΔV.',
      ],
      lessonParts: [1, 4],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat', 'mcat-physics-mechanics-work-energy-power-mcat'],
      checkpoint: [
        {
          question: 'A proton accelerated from rest through a potential difference ΔV reaches speed v. An alpha particle, with twice the charge and four times the mass, is accelerated from rest through the same ΔV. What is its final speed?',
          options: ['1.0v', '0.50v', '0.71v', '2.0v'],
          correctAnswer: 2,
          explanation:
            'The alpha particle gains twice the energy, KE = 2eΔV, but has four times the mass, so v² = 2KE/m is 2/4 = ½ of the proton\'s, and v drops to v/√2 ≈ 0.71v. "0.50v" forgets that the double charge doubles the energy and divides by the mass alone; "1.0v" ignores both the charge and the mass, as if the voltage alone set the speed; and "2.0v" doubles the speed along with the charge and forgets the extra mass.',
        },
        {
          question: 'A proton moving with 250 eV of kinetic energy heads into a region where the potential rises by 400 V along its path. What happens to it?',
          options: [
            'It stops after 250 V and turns back',
            'It passes through with 150 eV to spare',
            'It speeds up and leaves with 650 eV',
            'It passes through, slowed to 0 eV',
          ],
          correctAnswer: 0,
          explanation:
            'Climbing toward higher potential, a positive charge gains potential energy eΔV and loses the same kinetic energy. With only 250 eV, its kinetic energy is gone after it has risen 250 V, so it stops there, 150 V short of the top, and is pushed back. "150 eV to spare" subtracts the wrong way round (400 − 250) and treats the difference as leftover kinetic energy; "speeds up and leaves with 650 eV" adds the 400 eV, the gain a negative charge would get, so it has the direction backwards; and "slowed to 0 eV" lets it reach the far side, which would take the full 400 eV it does not have.',
        },
        {
          question: 'A positive charge is released from rest on the 80 V equipotential. It later crosses the 30 V equipotential and then the 10 V one. Compared with its kinetic energy at 30 V, its kinetic energy at 10 V is:',
          options: ['3.0 times as large', '0.33 times as large', '1.0 times as large', '1.4 times as large'],
          correctAnswer: 3,
          explanation:
            'From rest, KE = q(V_start − V_now): q(80 − 30) = 50q at 30 V and q(80 − 10) = 70q at 10 V, so the ratio is 70/50 = 1.4. "3.0 times" divides the potentials, 30/10, instead of the drops; "0.33 times" treats KE as proportional to the potential where the charge is, 10/30; and "1.0 times" assumes the energy is fixed once the charge is moving, but it keeps gaining kinetic energy as V falls.',
        },
      ],
    },
    // ── 8 · Energy conservation for charges (worked examples) ────────────
    {
      title: 'Energy Conservation: Worked Examples',
      minutes: 6.5,
      goal: 'Find the kinetic energy and speed of charges accelerated through a potential difference, compare a proton with an electron, and find how close a charge fired at a fixed like charge can get.',
      keyPoints: [
        'From rest through ΔV: KE = |q||ΔV| in eV, times 1.6 × 10⁻¹⁹ for joules; then v = √(2KE/m), with KE in joules and m in kilograms.',
        'The same ΔV and the same size of charge give the same KE, whatever the gap. The lighter particle is faster by √(m_heavy/m_light).',
        'Closest approach to a FIXED like charge: set the starting KE, far away where U ≈ 0, equal to U = kq₁q₂/r_min. At any other distance, KE = KE_start − kq₁q₂/r.',
        'Check directions: positive charges gain speed toward lower V, negative charges toward higher V, and a charge heading toward a fixed like charge slows down.',
        'Crossing a cell membrane, ΔU = qΔV with ΔV = V_final − V_initial and both signs kept. A Na⁺ ion entering a resting neuron (outside 0 V, inside −70 mV) has ΔU = (+e)(−0.070 V) = −0.070 eV = −1.1 × 10⁻²⁰ J: it moves the way the field pushes it. A Cl⁻ ion making the same trip has ΔU = (−e)(−0.070 V) = +0.070 eV = +1.1 × 10⁻²⁰ J: the field opposes it, so the energy must come from elsewhere, such as its concentration gradient. Takeaway: per ion, these energies are hundredths of an eV, around 10⁻²⁰ J.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: plates 2.0 cm apart with 1200 V across them, a proton leaving the + plate and an electron leaving the − plate, both energy bars reaching 1200 eV, speed readouts 4.8 × 10⁵ m/s and 2.1 × 10⁷ m/s; then the gap stretched to 4.0 cm with every readout unchanged',
        'Example 2: a 5.0 g bead on a frictionless horizontal track heading for a fixed charge, its KE bar draining into the U bar, stopping at 1.0 m, the bars split half and half at 2.0 m, then the bead heading back out at 6.0 m/s',
        'A membrane with the outside at 0 V and the inside at −70 mV: a Na⁺ ion stepping down the potential ladder (−0.070 eV) and a Cl⁻ ion pushed up it (+0.070 eV)',
        'The "Remember" recap of the method (shared ideas only): KE = |q||ΔV| from rest; v = √(2KE/m); the same ΔV gives the same KE, not the same speed; at closest approach to a fixed like charge, KE has become U = kq₁q₂/r',
        'End card: "Thanks for watching" (the end of the electrostatics series)',
      ],
      workedExample:
        'Example 1: Two parallel plates 2.0 cm apart have a potential difference of 1200 V across them. A proton (m_p = 1.67 × 10⁻²⁷ kg) is released from rest at the positive plate. Use e = 1.6 × 10⁻¹⁹ C. (a) What is the proton\'s kinetic energy when it reaches the negative plate, in eV and in joules? (b) How fast is it moving then? (c) An electron (m_e = 9.1 × 10⁻³¹ kg) is released from rest at the negative plate instead. What are its kinetic energy and speed when it reaches the positive plate? (d) The plates are pulled apart to 4.0 cm with the same 1200 V across them. How do the answers to (a) and (b) change? (a) KE = eΔV = 1200 eV = (1200)(1.6 × 10⁻¹⁹) = 1.92 × 10⁻¹⁶ ≈ 1.9 × 10⁻¹⁶ J; (b) v = √(2KE/m) = √(2(1.92 × 10⁻¹⁶)/(1.67 × 10⁻²⁷)) = √(2.30 × 10¹¹) ≈ 4.8 × 10⁵ m/s; (c) the electron, moving toward higher potential, gains the same 1200 eV = 1.9 × 10⁻¹⁶ J, but v = √(2(1.92 × 10⁻¹⁶)/(9.1 × 10⁻³¹)) = √(4.22 × 10¹⁴) ≈ 2.1 × 10⁷ m/s, about 43 times faster because it is about 1836 times lighter; (d) they do not change: the field halves to E = 1200/0.040 = 3.0 × 10⁴ V/m, but the distance doubles, and KE = eΔV depends only on the 1200 V. Example 2: A small bead of mass 5.0 g carrying +2.0 μC slides on a frictionless horizontal track straight toward a fixed +5.0 μC charge. Far away, the bead moves at 6.0 m/s. Use k = 9.0 × 10⁹ N·m²/C². (a) What is the bead\'s kinetic energy far away? (b) How close does it get to the fixed charge? (c) How fast is it moving when it is 2.0 m from the fixed charge? (d) How fast is it moving once it has been pushed back far away again? (a) KE = ½mv² = ½(0.0050)(6.0)² = 0.090 J; (b) at the closest point the bead stops, so all 0.090 J has become U: kq₁q₂ = (9.0 × 10⁹)(2.0 × 10⁻⁶)(5.0 × 10⁻⁶) = 0.090 J·m, and kq₁q₂/r_min = 0.090 J gives r_min = 0.090/0.090 = 1.0 m; (c) at 2.0 m, U = 0.090/2.0 = 0.045 J, so KE = 0.090 − 0.045 = 0.045 J and v = √(2(0.045)/0.0050) = √18 ≈ 4.2 m/s, on the way in or on the way back out; (d) far away U is back to 0, so all 0.090 J is kinetic again: 6.0 m/s, now moving away.',
      pitfalls: [
        'Putting a kinetic energy in eV into v = √(2KE/m) without converting it to joules.',
        'Forgetting the square root, or the 2, in v = √(2KE/m).',
        'Thinking a wider gap at the same voltage gives a faster particle.',
        'Dividing by r² in the closest-approach energy, or forgetting to square v in ½mv².',
      ],
      lessonParts: [3, 4],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat', 'mcat-organ-systems-nervous-mcat', 'mcat-cell-biology-membrane-transport-mcat'],
      mcatOnly: [
        'Crossing a cell membrane, ΔU = qΔV with ΔV = V_final − V_initial and both signs kept. A Na⁺ ion entering a resting neuron (outside 0 V, inside −70 mV) has ΔU = (+e)(−0.070 V) = −0.070 eV = −1.1 × 10⁻²⁰ J: it moves the way the field pushes it. A Cl⁻ ion making the same trip has ΔU = (−e)(−0.070 V) = +0.070 eV = +1.1 × 10⁻²⁰ J: the field opposes it, so the energy must come from elsewhere, such as its concentration gradient. Takeaway: per ion, these energies are hundredths of an eV, around 10⁻²⁰ J.',
      ],
      mcatOnlyQuestions: [2],
      checkpoint: [
        {
          question: 'A proton (m_p = 1.67 × 10⁻²⁷ kg) starts from rest and is accelerated through a potential difference of 800 V. What is its final speed? (e = 1.6 × 10⁻¹⁹ C)',
          options: ['2.8 × 10⁵ m/s', '1.7 × 10⁷ m/s', '1.5 × 10¹¹ m/s', '3.9 × 10⁵ m/s'],
          correctAnswer: 3,
          explanation:
            'KE = eΔV = (1.6 × 10⁻¹⁹)(800) = 1.28 × 10⁻¹⁶ J, and v = √(2KE/m) = √(2(1.28 × 10⁻¹⁶)/(1.67 × 10⁻²⁷)) = √(1.53 × 10¹¹) ≈ 3.9 × 10⁵ m/s. 2.8 × 10⁵ m/s leaves out the 2 that comes from KE = ½mv²; 1.7 × 10⁷ m/s uses the electron\'s mass; and 1.5 × 10¹¹ m/s forgets to take the square root.',
        },
        {
          question: 'A 2.0 g bead carrying +2.0 μC slides on a frictionless horizontal track straight toward a fixed +4.0 μC charge, moving at 6.0 m/s when far away. How close does it get to the fixed charge? (k = 9.0 × 10⁹ N·m²/C²)',
          options: ['1.0 m', '2.0 m', '12 m', '1.4 m'],
          correctAnswer: 1,
          explanation:
            'Far away KE = ½mv² = ½(0.0020)(6.0)² = 0.036 J and U ≈ 0. At the closest point the bead stops, so kq₁q₂/r_min = 0.036 J and r_min = (9.0 × 10⁹)(2.0 × 10⁻⁶)(4.0 × 10⁻⁶)/0.036 = 0.072/0.036 = 2.0 m. 1.0 m drops the ½ from the kinetic energy; 12 m forgets to square the speed; and 1.4 m sets the energy equal to kq₁q₂/r², using the force\'s distance law.',
        },
        {
          question: 'A Cl⁻ ion moves from outside a cell (0 V) to the inside, which sits at −80 mV. What is the change in its electric potential energy? (e = 1.6 × 10⁻¹⁹ C)',
          options: [
            '−0.080 eV, or −1.3 × 10⁻²⁰ J',
            '+80 eV, or +1.3 × 10⁻¹⁷ J',
            '+0.080 eV, or +1.3 × 10⁻²⁰ J',
            '+0.16 eV, or +2.6 × 10⁻²⁰ J',
          ],
          correctAnswer: 2,
          explanation:
            'ΔV = V_inside − V_outside = −0.080 V, and ΔU = qΔV = (−e)(−0.080 V) = +0.080 eV = (0.080)(1.6 × 10⁻¹⁹) ≈ 1.3 × 10⁻²⁰ J: a gain, because the negative ion moves toward lower potential, against the push of the field. −0.080 eV drops the negative sign of the chloride charge; +80 eV leaves the potential in millivolts; and +0.16 eV doubles the charge, as for a divalent ion.',
        },
      ],
    },
  ],
}
