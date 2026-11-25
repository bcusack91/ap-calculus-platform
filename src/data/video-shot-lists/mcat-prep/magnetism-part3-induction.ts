import type { ShotList } from '../types'

/**
 * Shot list: MCAT Physics — Magnetism Part 3: Electromagnetic Induction
 * (topic mcat-physics-electricity-induction-mcat; the third and last of the "Magnetism and
 * Electromagnetism" video parts. Part 1 is magnetic fields and the force on a moving charge, Part 2 is
 * currents, the force on a wire, the field of a wire and loops and solenoids).
 *
 * Sources: the MCAT lesson (src/data/interactive-lessons/mcat-mcat-physics-electricity-induction-mcat-part1..2.ts;
 * this video takes Part 2: magnetic flux, Faraday's law with its three knobs and the sliding rod,
 * Lenz's law with the pole rule and the energy argument, the MRI passage and the induction checklist.
 * Part 1, the force on a wire, parallel wires, the velocity selector and the mass spectrometer, belongs
 * to video Parts 1–2), the AP Physics 2 lessons physics2-em-induction-part1..7 (flux, Faraday's law,
 * Lenz's law, motional EMF, loops crossing a field boundary with their flux and EMF graphs, field-versus-
 * time graphs, induction from a nearby current, magnetic braking) and physics2-magnetic-induction-part1..4
 * (the same ground; part 5, inductors and LR circuits, and the transformer and rotating-coil formulas of
 * parts 6–7 are left out: AP Physics 2 does not include inductance, and the generator appears here only
 * qualitatively), the deck figures in src/data/deck-figures/mcat-cp-magnetism.ts (Faraday's three knobs,
 * the Lenz magnet-and-loop pair) and mcat-cp-electricity.ts (the flux panels), and the exit pools to
 * avoid (the MCAT lesson-built pool and the electromagnetic-induction items in
 * src/data/exit-quizzes/ap-physics-2.ts, which the AP Physics 2 unit test also draws from).
 * Eight Manim clips in four pairs (owner format, Nov 2026): a CONCEPT clip that teaches the idea and ends
 * on the "Remember" recap, then a WORKED-EXAMPLES clip with two examples, each shown in full with lettered
 * parts and a pause-and-try prompt before the solution. Concept clips get conceptual checkpoint
 * questions; worked-example clips get questions that mirror their two examples with new numbers.
 * Clips 1–2 follow "Magnetic Flux" (MCAT Part 2; AP em-induction part 1, magnetic-induction part 1).
 * Clips 3–4 follow "Faraday's Law" and the field-versus-time graphs (MCAT Part 2; AP em-induction parts 2
 * and 6, magnetic-induction part 2). Clips 5–6 follow "Lenz's Law", the pole rule, a nearby current and
 * magnetic braking (MCAT Part 2; AP em-induction parts 3 and 6, magnetic-induction part 3). Clips 7–8
 * follow motional EMF on rails and loops crossing a field boundary (MCAT Part 2's sliding rod; AP
 * em-induction parts 4–5, magnetic-induction part 4).
 *
 * REUSE FOR AP PHYSICS 2 (topic electromagnetic-induction): each clip is cut into sections, about one
 * per key point, and the AP lesson takes only the SHARED sections. MCAT-only material sits in key
 * points of its own, listed word for word in `mcatOnly`, with any question that depends on it listed
 * in `mcatOnlyQuestions`:
 *   clip 3: the MRI scanner (steady main field induces nothing; switched gradient fields induce EMFs
 *           in implanted wires) (1 key point, question 3)
 * Clips 1, 2, 4, 5, 6, 7 and 8 are shared in full, and every worked example is shared. Every "Remember"
 * recap covers shared ideas only.
 * Symbols follow the AP equation sheet and the series conventions: Φ = BA cos θ with θ measured from the
 * loop's NORMAL, 1 Wb = 1 T·m², ε = −NΔΦ/Δt (sizes from |ε| = NΔΦ/Δt, directions from Lenz's law),
 * motional ε = BLv, F = ILB, I = ε/R. Currents are conventional (the way positive charge would flow);
 * electrons move the opposite way, said on screen whenever a direction is found. ⊙ is out of the page
 * and ⊗ into it. The right-hand rule for a loop (from Part 2): curl the fingers along the current and
 * the thumb gives the field inside, so a ⊙ field inside means a counterclockwise current as seen on the
 * page and ⊗ means clockwise. The force on a moving charge uses the right-hand rule for a POSITIVE
 * charge, flipped for a negative one. No calculus, no inductance, no LR circuits.
 *
 * The checkpoint questions are what a YouTube viewer answers at studymondo.com/v/<code>
 * (src/data/video-short-links.ts). Codes (fixed by the series plan): flux1/flux2, faraday1/faraday2,
 * lenz1/lenz2, motional1/motional2. They use new scenarios and numbers, so they never repeat an
 * exit-quiz item or a worked example. Clip 8 closes the series: its end card is "Thanks for watching",
 * with no "Up next".
 */
export const shotList: ShotList = {
  courseSlug: 'mcat-prep',
  topicSlug: 'mcat-physics-electricity-induction-mcat',
  title: 'Magnetism Part 3: Electromagnetic Induction',
  overview:
    'Eight animated clips in four pairs that finish the magnetism series with induction: magnetic flux and the three ways to change it, Faraday\'s law for the size of the induced EMF, Lenz\'s law for its direction, and the motional EMF of a rod on rails or a loop crossing the edge of a field. Each idea gets a concept clip followed by a worked-examples clip in which every problem is shown in full, with a moment to pause and try it before the solution. Every direction is found step by step, with ⊙ for out of the page and ⊗ for into it. Narration stays exam-neutral, and each clip is cut into sections so that introductory physics lessons can reuse the shared ones; the MRI scanner sits in a section of its own. Each clip ends with three checkpoint questions. This part closes the magnetism series.',
  clips: [
    // ── 1 · Magnetic flux (concepts) ─────────────────────────────────────
    {
      title: 'Magnetic Flux',
      minutes: 7,
      goal: 'Find the magnetic flux through a loop from the field, the area and the angle to the normal, give it a sign, and say which changes alter it.',
      keyPoints: [
        'Magnetic flux measures how much magnetic field passes through a loop: picture counting the field lines that thread it. For a uniform field, Φ = BA cos θ, where A is the loop\'s area and θ is the angle between B and the loop\'s NORMAL, the line standing straight out of its face. The unit is the weber: 1 Wb = 1 T·m².',
        'The angle is measured from the normal, not from the plane of the loop. A field running straight through the face (perpendicular to the plane, θ = 0) gives the most flux, Φ = BA. A field lying in the plane (θ = 90°) skims past and gives zero. In between, cos θ gives the fraction: at 60° from the normal, half of BA.',
        'Flux is not field. B, in tesla, is the field at a point; Φ, in webers, is a total through a surface. A strong field through a tiny loop, or through a loop turned edge-on, gives little flux.',
        'Flux has a sign that records which way the field threads the loop. Pick a direction for the normal, say ⊗ into the page: a field into the page then gives positive flux and a field out of the page (⊙) negative flux. Flipping a loop over in a fixed field, or reversing the field, takes the flux from +BA to −BA, a change of 2BA, not zero.',
        'Only the area inside the field counts: a loop halfway into a field region has half the flux it has fully inside. A coil of N turns has the same flux through each turn; Faraday\'s law, in the next clip, multiplies by N.',
        'Three knobs change the flux: B (a magnet moved closer, a current turned up or down), A (a loop stretched, squeezed, or slid into or out of a field region) and θ (a loop turned). Sliding a loop around inside a UNIFORM field changes none of them, so its flux stays the same; carrying a loop away from a long straight wire, whose field weakens with distance, does change it.',
      ],
      showOnScreen: [
        'Rain falling on a hoop: face-up, tilted and edge-on, with the drops that pass through counted; then the same hoop as a wire loop in a field of lines',
        'Φ = BA cos θ written out, with the normal drawn as an arrow out of the loop\'s face, θ marked between B and the normal, and 1 Wb = 1 T·m² beside it',
        'Three loops in one field: face-on (θ = 0, Φ = BA), turned to 60° (Φ = BA/2), and edge-on (θ = 90°, Φ = 0), with the lines through each counted',
        'A strong field with a tiny loop beside a weaker field with a large loop, the large loop catching more lines; B labeled "tesla, at a point" and Φ labeled "webers, through a surface"',
        'A loop in the page in a ⊗ field with the flux readout at +BA; the loop flips over and the readout passes through zero to −BA, with "change = 2BA" stamped beside it',
        'A square loop sliding into a ⊗ field region, the shaded area inside the field growing and the flux readout climbing; then a coil with N turns, each threaded by the same lines',
        'The deck\'s three-knob panels (change B, change A, change θ), then a loop sliding inside a uniform field with a flat flux readout, and a loop carried away from a long wire with its readout falling',
        'The "Remember" recap: Φ = BA cos θ, θ from the normal; face-on BA, edge-on zero; flux has a sign, so flipping gives a change of 2BA; only the area in the field counts; three knobs B, A, θ',
        'End card: "Up next: Magnetic Flux: Worked Examples"',
      ],
      pitfalls: [
        'Measuring θ from the plane of the loop instead of from its normal.',
        'Calling a field "perpendicular to the loop" zero flux, when perpendicular to the plane is the maximum.',
        'Treating a flipped loop as having no change in flux, because the size of the flux is the same.',
        'Thinking any motion of a loop changes its flux, even inside a uniform field.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-induction-mcat'],
      checkpoint: [
        {
          question: 'A uniform field makes an angle of 30° with the PLANE of a flat loop. What fraction of the largest possible flux passes through the loop?',
          options: ['0.87 of it', 'All of it', '0.50 of it', 'None of it'],
          correctAnswer: 2,
          explanation:
            'θ in Φ = BA cos θ is measured from the normal, and a field at 30° to the plane is at 60° to the normal, so Φ = BA cos 60° = 0.50 BA. 0.87 puts the 30° from the plane into cos θ; "all of it" counts every field that crosses the loop as running straight through; and "none of it" treats a field tilted toward the plane as lying in it.',
        },
        {
          question: 'A loop sits face-on in a steady uniform field, with flux Φ through it. It is then flipped over, turned 180° about a diameter. What is the size of the change in flux?',
          options: ['Zero: it is the same size', '2Φ: it goes from +Φ to −Φ', 'Φ: it drops from Φ to zero', 'Φ/2: it is edge-on halfway'],
          correctAnswer: 1,
          explanation:
            'After the flip the field threads the loop from the other side, so the flux goes from +Φ to −Φ: a change of 2Φ. "Zero" compares only the sizes and ignores the sign; "Φ" stops at the edge-on position after a quarter-turn; and "Φ/2" confuses the halfway position, where the flux is zero, with half of it.',
        },
        {
          question: 'Which of these motions changes the magnetic flux through a small wire loop?',
          options: [
            'Sliding it sideways through a uniform field',
            'Spinning it about its normal, with B along it',
            'Moving it along a field line in a uniform field',
            'Carrying it away from a long straight current',
          ],
          correctAnswer: 3,
          explanation:
            'A long wire\'s field weakens with distance, so carrying the loop away lowers B through it and the flux falls. Sliding it sideways or along a field line in a UNIFORM field leaves B, A and θ unchanged; and spinning it about its own normal keeps the field along that normal, so θ stays zero. Motion alone does not change flux; one of the three knobs has to change.',
        },
      ],
    },
    // ── 2 · Magnetic flux (worked examples) ──────────────────────────────
    {
      title: 'Magnetic Flux: Worked Examples',
      minutes: 6,
      goal: 'Find the flux through a tilted or flipped loop and through a loop partly inside a field region, and the change in flux between two positions.',
      keyPoints: [
        'Area first, in square meters; then the angle between B and the NORMAL. If the angle is given from the plane, subtract it from 90°.',
        'Φ = BA cos θ, with a sign: positive when the field threads the loop along the chosen normal, negative when it threads it the other way. A change in flux is final minus initial, so a flip changes it by 2BA.',
        'For a loop partly inside a field region, use only the area inside: the length of the edge times the distance it has gone in.',
        'Once the loop is fully inside a uniform field, moving it further changes nothing: the flux changes only while an edge is crossing the boundary.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the 0.40 m × 0.25 m loop face-on in the 0.50 T field (0.050 Wb), turned to 60° from the normal (0.025 Wb), then to 60° from the PLANE with the 30° to the normal marked (0.043 Wb), then flipped, its readout passing through zero to −0.050 Wb, with "change = 0.10 Wb"',
        'Example 2: the 0.20 m square loop sliding right into the ⊗ 0.40 T region, the shaded strip inside growing from 5.0 cm (0.0040 Wb) to 15 cm (0.012 Wb) to the whole loop (0.016 Wb), then a flat readout as the loop moves on inside the region',
        'The "Remember" recap of the method: area in m²; θ from the normal (90° minus the angle from the plane); flux has a sign, a flip changes it by 2BA; only the area in the field; no change once fully inside',
        'End card: "Up next: Faraday\'s Law"',
      ],
      workedExample:
        'Example 1: A rectangular loop 0.40 m by 0.25 m sits in a uniform 0.50 T magnetic field. (a) What is the flux through the loop when the field is perpendicular to the loop\'s plane? (b) The loop is turned so that the field makes 60° with the loop\'s normal. What is the flux now? (c) The loop is instead turned so that the field makes 60° with the loop\'s PLANE. What is the flux? (d) From the position in (a), the loop is flipped over, turned 180° about one of its sides. What is the flux now, and what is the size of the change in flux? (a) A = (0.40)(0.25) = 0.10 m², and a field perpendicular to the plane runs along the normal, θ = 0: Φ = BA = (0.50)(0.10) = 0.050 Wb; (b) Φ = BA cos 60° = (0.050)(0.50) = 0.025 Wb; (c) 60° from the plane is 30° from the normal: Φ = (0.050)(cos 30°) = (0.050)(0.866) ≈ 0.043 Wb; (d) the field now threads the loop from the other side: Φ = −0.050 Wb, so the flux has changed from +0.050 Wb to −0.050 Wb, a change of 0.10 Wb, not zero. Example 2: A square wire loop 0.20 m on a side lies in the plane of the page. To its right is a region of uniform 0.40 T field pointing into the page (⊗), with a straight vertical boundary; the region is wider than the loop. The loop moves to the right, into the region. (a) When the loop\'s right edge is 5.0 cm past the boundary, what is the flux through it? (b) What is the flux when the right edge is 15 cm past the boundary? (c) What is the flux once the whole loop is inside the region? (d) The loop moves another 10 cm to the right, still entirely inside the region. What is the flux now? (a) Only the strip inside the field counts: A = (0.20)(0.050) = 0.010 m², so Φ = (0.40)(0.010) = 0.0040 Wb, into the page; (b) A = (0.20)(0.15) = 0.030 m², so Φ = (0.40)(0.030) = 0.012 Wb; (c) A = (0.20)² = 0.040 m², so Φ = (0.40)(0.040) = 0.016 Wb; (d) still 0.016 Wb: the field is uniform and the whole loop is already inside, so B, A and θ are unchanged. The flux changed only while the edge was crossing the boundary.',
      pitfalls: [
        'Using the angle from the plane directly in cos θ.',
        'Giving the flipped loop a change in flux of zero, or of only 0.050 Wb.',
        'Using the whole area of a loop that is only partly inside the field.',
        'Leaving 5.0 cm or 15 cm unconverted.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-induction-mcat'],
      checkpoint: [
        {
          question: 'A square loop 0.30 m on a side sits in a uniform 0.20 T field that makes 30° with the loop\'s plane. What is the flux through the loop?',
          options: ['1.6 × 10⁻² Wb', '9.0 × 10⁻³ Wb', '3.0 × 10⁻² Wb', '9.0 × 10¹ Wb'],
          correctAnswer: 1,
          explanation:
            'A = (0.30)² = 0.090 m², and 30° from the plane is 60° from the normal, so Φ = (0.20)(0.090)(cos 60°) = 9.0 × 10⁻³ Wb. 1.6 × 10⁻² Wb uses cos 30°, measuring the angle from the plane; 3.0 × 10⁻² Wb uses the side, 0.30 m, as if it were the area; and 9.0 × 10¹ Wb leaves the area as 900 cm² instead of 0.090 m².',
        },
        {
          question: 'A loop 20 cm by 30 cm sits face-on in a uniform 0.50 T field and is then flipped over. What is the size of the change in flux through it?',
          options: ['0.030 Wb', '0 Wb', '0.060 Wb', '600 Wb'],
          correctAnswer: 2,
          explanation:
            'A = (0.20)(0.30) = 0.060 m², so the flux starts at BA = 0.030 Wb and ends at −0.030 Wb: a change of 0.060 Wb. 0.030 Wb counts only the drop to zero, as if the loop stopped edge-on; 0 Wb compares the sizes and ignores the sign; and 600 Wb leaves the area as 600 cm² instead of 0.060 m².',
        },
        {
          question: 'A square loop 0.30 m on a side is pushed into a region of uniform 0.50 T field, with its leading edge parallel to the boundary. What is the flux through it when the leading edge is 12 cm past the boundary?',
          options: ['4.5 × 10⁻² Wb', '7.2 × 10⁻³ Wb', '6.0 × 10⁻² Wb', '1.8 × 10⁻² Wb'],
          correctAnswer: 3,
          explanation:
            'Only the strip inside the field counts: A = (0.30)(0.12) = 0.036 m², so Φ = (0.50)(0.036) = 1.8 × 10⁻² Wb. 4.5 × 10⁻² Wb uses the whole loop, as if it were already inside; 7.2 × 10⁻³ Wb squares the 0.12 m depth instead of multiplying it by the edge; and 6.0 × 10⁻² Wb multiplies B by the depth alone and leaves out the edge length.',
        },
      ],
    },
    // ── 3 · Faraday's law (concepts) ─────────────────────────────────────
    {
      title: 'Faraday\'s Law',
      minutes: 7,
      goal: 'State Faraday\'s law, predict when an EMF is induced and how big it is, and read the EMF from the slope of a flux- or field-versus-time graph.',
      keyPoints: [
        'Faraday\'s discovery: a CHANGING flux through a loop makes an EMF in it, the same energy per charge, in volts, that a battery supplies. No battery is needed: push a magnet into a coil and a meter connected to it flicks; stop the magnet and the reading drops back to zero.',
        'The size of the EMF is the rate of change of flux: |ε| = NΔΦ/Δt for a coil of N turns, since every turn adds its own EMF, like cells in series. One weber per second is one volt. With its sign, ε = −NΔΦ/Δt; the minus sign is Lenz\'s law, in a later clip. In a closed loop the EMF drives a current I = ε/R; in an open loop the EMF is still there, but no current flows.',
        'Only the change counts. A huge but steady flux induces nothing: a strong magnet resting inside a coil gives zero EMF. The same change in flux made faster gives a larger EMF, and made more slowly a smaller one, even though the total change is the same.',
        'Read the EMF from the SLOPE of a flux-versus-time graph (or, for a loop of fixed area face-on to the field, a field-versus-time graph), never from its height. A flat stretch, however high, means zero EMF; a steeper stretch means a larger EMF; when the slope changes sign, the EMF reverses. Where the flux passes through zero while still changing, the EMF is not zero.',
        'Each knob of Φ = BA cos θ is a way to induce an EMF: change B (move a magnet, switch an electromagnet on or off), change A (a rod sliding along rails sweeps out area, coming up in the motional EMF clip), or change θ (spin a coil in a field). The spinning coil is a generator: its flux swings back and forth, so its EMF alternates, and the EMF is largest as the flux passes through zero, where it changes fastest.',
        'An MRI scanner shows all of this at once. Its superconducting solenoid makes a strong steady field, 1.5 to 3 T, which, being steady, induces nothing in the body or in an implant. Its gradient coils switch smaller fields on and off within milliseconds, and those fast changes of flux induce EMFs in any conducting loop, including implanted wires and electrode leads, which is why implants are checked before a scan. Takeaway: in an MRI the switched fields induce; the steady main field does not.',
      ],
      showOnScreen: [
        'A coil wired to a meter; a bar magnet pushed in (the needle flicks), held still inside (the needle returns to zero), pulled out (the needle flicks the other way)',
        '|ε| = NΔΦ/Δt written out, with 1 Wb/s = 1 V; a coil whose N turns light up one by one, each adding the same EMF like cells in a row; then the closed loop with I = ε/R beside a cut loop with an EMF readout but a current readout of zero',
        'Two loops with the same flux change, one done in 1 s and one in 0.1 s, the faster one\'s EMF readout ten times larger; then a magnet at rest inside a coil with a large flux readout and an EMF readout of zero',
        'A flux-versus-time graph with a rising stretch, a flat top and a steep fall, and the EMF-versus-time graph drawn beneath it as flat steps; then a graph that falls through zero in a straight line, with the EMF readout unchanged as it crosses',
        'The deck\'s three-knob panels (change B, change A, rotate), then a coil spinning in a field with its flux curve and the EMF curve beneath it, the EMF peaking where the flux crosses zero',
        'An MRI scanner in cross-section: the steady main field labeled "steady: no EMF", the gradient coils pulsing, and a small loop of implanted wire with an EMF readout that spikes at each switch',
        'The "Remember" recap (shared ideas only): changing flux makes an EMF; |ε| = NΔΦ/Δt; steady flux, no EMF; faster change, larger EMF; read the slope, not the height; I = ε/R needs a closed loop',
        'End card: "Up next: Faraday\'s Law: Worked Examples"',
      ],
      pitfalls: [
        'Expecting an EMF from a strong but steady field.',
        'Reading the EMF from the height of a flux graph instead of its slope.',
        'Forgetting to multiply by the number of turns.',
        'Thinking an open loop has no EMF because no current flows in it.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-induction-mcat', 'mcat-physics-electricity-emf-capacitors-mcat'],
      mcatOnly: [
        'An MRI scanner shows all of this at once. Its superconducting solenoid makes a strong steady field, 1.5 to 3 T, which, being steady, induces nothing in the body or in an implant. Its gradient coils switch smaller fields on and off within milliseconds, and those fast changes of flux induce EMFs in any conducting loop, including implanted wires and electrode leads, which is why implants are checked before a scan. Takeaway: in an MRI the switched fields induce; the steady main field does not.',
      ],
      mcatOnlyQuestions: [2],
      checkpoint: [
        {
          question: 'A magnet is moved back and forth near a coil, and the flux through the coil rises smoothly to a peak and then falls. At the instant the flux is at its peak, the induced EMF is:',
          options: [
            'At its largest, as the flux is largest',
            'Zero, as the flux is momentarily steady',
            'Reversed, as the flux is about to fall',
            'Equal to N times the peak flux value',
          ],
          correctAnswer: 1,
          explanation:
            'The EMF follows the slope of the flux graph, and at a smooth peak the slope is momentarily zero, so the EMF is zero there; it reverses only after the flux starts to fall. "At its largest" reads the height of the graph instead of its slope; "reversed" moves the sign change to the peak itself, before the flux has begun to fall; and "N times the peak flux" leaves out the rate, giving webers rather than volts.',
        },
        {
          question: 'The two ends of a coil are left unconnected. A magnet is pushed quickly into the coil. While the magnet is moving:',
          options: [
            'No EMF appears, as no current can flow',
            'Both an EMF and a current appear in it',
            'An EMF appears, but no current flows',
            'A current flows, but no EMF appears',
          ],
          correctAnswer: 2,
          explanation:
            'Faraday\'s law gives an EMF whenever the flux changes, closed loop or not, but a current needs a complete path, I = ε/R, so the open coil has an EMF across its ends and no current. "No EMF" ties the EMF to the current; "both" treats the open coil as if it were closed; and "a current but no EMF" has it backwards, since the EMF is what would drive any current.',
        },
        {
          question: 'During a scan, a patient has an implanted wire loop of area 0.010 m², face-on to the scanner\'s steady 3.0 T field. A gradient coil changes the field through the loop by 0.020 T in 2.0 ms. What EMF is induced in the loop during the switch?',
          options: ['1.0 × 10⁻¹ V', '1.5 × 10¹ V', '2.0 × 10⁻⁴ V', '1.0 × 10⁻⁴ V'],
          correctAnswer: 0,
          explanation:
            'Only the change counts: ΔΦ = AΔB = (0.010)(0.020) = 2.0 × 10⁻⁴ Wb, and |ε| = ΔΦ/Δt = (2.0 × 10⁻⁴)/(2.0 × 10⁻³) = 0.10 V. 1.5 × 10¹ V uses the steady 3.0 T main field as if it were the change; 2.0 × 10⁻⁴ V stops at ΔΦ and never divides by the time; and 1.0 × 10⁻⁴ V divides by 2.0 instead of 2.0 × 10⁻³ s.',
        },
      ],
    },
    // ── 4 · Faraday's law (worked examples) ──────────────────────────────
    {
      title: 'Faraday\'s Law: Worked Examples',
      minutes: 6,
      goal: 'Find the induced EMF and current in a coil whose field changes, including a field that reverses, and recognize when the EMF is zero.',
      keyPoints: [
        'Change in flux per turn first: ΔΦ = AΔB for a face-on coil of fixed area. Use the change in B, not its final value.',
        'Then |ε| = NΔΦ/Δt, with N the number of turns and Δt in seconds; then I = ε/R for a closed circuit.',
        'A field that reverses changes the flux by twice its size: from +BA to −BA is a change of 2BA.',
        'A steady field gives zero EMF, however strong; a field changing at a steady rate gives a constant EMF, even at the moment it passes through zero.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the 150-turn coil (0.040 m²) with the field-versus-time graph rising from 0.25 T to 0.75 T over 0.20 s, ΔΦ = 0.020 Wb per turn, the 15 V readout, the 6.0 Ω circuit with 2.5 A, then the flat stretch at 0.75 T with both readouts at zero',
        'Example 2: the 50-turn coil (0.020 m²) in a ⊗ 0.30 T field, the graph falling in a straight line through zero to 0.30 T ⊙ over 0.20 s, the flux readout from +0.0060 Wb to −0.0060 Wb, ΔΦ = 0.012 Wb, the EMF readout steady at 3.0 V as the field crosses zero',
        'The "Remember" recap of the method: ΔΦ = AΔB with the change, not the final value; × N, ÷ Δt; I = ε/R; a reversal is a change of 2BA; steady field, zero EMF; steady slope, constant EMF',
        'End card: "Up next: Lenz\'s Law"',
      ],
      workedExample:
        'Example 1: A 150-turn coil of area 0.040 m² has a magnetic field running straight through it, perpendicular to the plane of its turns. The field rises steadily from 0.25 T to 0.75 T in 0.20 s. The coil is part of a closed circuit with a total resistance of 6.0 Ω. (a) What is the change in flux through one turn? (b) What is the size of the induced EMF? (c) What current flows while the field is rising? (d) The field then stays at 0.75 T for 1.0 s. What are the EMF and the current during that second? (a) ΔΦ = AΔB = (0.040)(0.75 − 0.25) = (0.040)(0.50) = 0.020 Wb; (b) |ε| = NΔΦ/Δt = (150)(0.020)/(0.20) = 15 V; (c) I = ε/R = 15/6.0 = 2.5 A; (d) both are zero: the flux is large but no longer changing, and only a change in flux induces an EMF. Example 2: A 50-turn coil of area 0.020 m² lies in the plane of the page, in a uniform 0.30 T field pointing into the page (⊗). The field is reduced steadily to zero and then grown, at the same rate, to 0.30 T pointing out of the page (⊙); the whole change takes 0.20 s. Take into the page as positive. (a) What are the flux through one turn at the start and at the end? (b) What is the change in flux through one turn? (c) What is the size of the induced EMF? (d) What is the EMF at the instant the field is zero? (a) At the start Φ = BA = (0.30)(0.020) = +0.0060 Wb; at the end the field points the other way, so Φ = −0.0060 Wb; (b) ΔΦ = (−0.0060) − (+0.0060) = −0.012 Wb, a change of 0.012 Wb in size, twice the starting flux; (c) |ε| = NΔΦ/Δt = (50)(0.012)/(0.20) = 3.0 V; (d) still 3.0 V: the field is changing at the same steady rate through the whole 0.20 s, so the EMF does not dip at zero; zero flux at one instant does not mean zero EMF.',
      pitfalls: [
        'Using the final field, 0.75 T, instead of the change, 0.50 T.',
        'Counting a reversal as a change of 0.30 T instead of 0.60 T.',
        'Dropping the number of turns.',
        'Setting the EMF to zero at the instant the flux is zero.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-induction-mcat'],
      checkpoint: [
        {
          question: 'An 80-turn coil of area 0.030 m² is face-on to a field that rises steadily from 0.10 T to 0.50 T in 0.40 s. The coil\'s circuit has a total resistance of 2.0 Ω. What current flows while the field rises?',
          options: ['1.5 A', '0.015 A', '4.8 A', '1.2 A'],
          correctAnswer: 3,
          explanation:
            'ΔΦ = AΔB = (0.030)(0.40) = 0.012 Wb, |ε| = (80)(0.012)/(0.40) = 2.4 V, and I = ε/R = 2.4/2.0 = 1.2 A. 1.5 A uses the final 0.50 T instead of the change; 0.015 A drops the 80 turns; and 4.8 A multiplies the EMF by the resistance instead of dividing.',
        },
        {
          question: 'A 200-turn coil of area 0.010 m² is face-on to a 0.50 T field pointing out of the page. The field reverses steadily to 0.50 T into the page in 0.25 s. What is the size of the induced EMF?',
          options: ['4.0 V', '8.0 V', '0 V', '0.50 V'],
          correctAnswer: 1,
          explanation:
            'The flux per turn goes from +BA = 0.0050 Wb to −0.0050 Wb, a change of 0.010 Wb, so |ε| = (200)(0.010)/(0.25) = 8.0 V. 4.0 V counts only a 0.50 T change, ignoring the reversal; 0 V compares the equal starting and ending sizes; and 0.50 V multiplies by the time instead of dividing.',
        },
        {
          question: 'The field through a 25-turn coil of area 0.080 m², face-on, rises from 0 to 0.40 T in 0.50 s, holds at 0.40 T for 1.0 s, then falls back to 0 in 0.20 s. The coil has a resistance of 2.0 Ω. What is the current during the last 0.20 s?',
          options: ['0.80 A', '0 A', '2.0 A', '0.080 A'],
          correctAnswer: 2,
          explanation:
            'During the fall ΔΦ = (0.080)(0.40) = 0.032 Wb, so |ε| = (25)(0.032)/(0.20) = 4.0 V and I = 4.0/2.0 = 2.0 A. 0.80 A uses the 0.50 s of the rise instead of the 0.20 s of the fall; 0 A notes that the field ends where it began, but the net change over the whole trip says nothing about the current during the fall; and 0.080 A drops the 25 turns.',
        },
      ],
    },
    // ── 5 · Lenz's law (concepts) ────────────────────────────────────────
    {
      title: 'Lenz\'s Law',
      minutes: 7.5,
      goal: 'Find the direction of an induced current with Lenz\'s law, predict the push or pull between a magnet and a loop, and explain magnetic braking.',
      keyPoints: [
        'Faraday\'s law gives the size of the EMF; Lenz\'s law gives its direction. The induced current flows the way that makes its OWN magnetic field oppose the CHANGE in flux that caused it. This is the minus sign in ε = −NΔΦ/Δt.',
        'Opposing the change is not opposing the field. If the flux is increasing, the induced field inside the loop points opposite the outside field, holding the increase back. If the flux is decreasing, the induced field points the SAME way as the outside field, propping it up. If the flux is steady, there is no induced current at all.',
        'Four steps: (1) which way does the outside field thread the loop, ⊙ out of the page or ⊗ into it? (2) is that flux increasing or decreasing? (3) so which way must the induced field point inside the loop? (4) point your right thumb along that induced field and curl your fingers: they give the current. An induced field ⊙ means a counterclockwise current as you look at the page; ⊗ means clockwise. That is conventional current, the way positive charge would flow; the electrons in the wire circulate the opposite way.',
        'Magnets and loops: a loop carrying current is a small magnet, with its north face where its field comes out. Push a north pole toward a loop and the flux grows, so the loop makes a NORTH face toward the magnet and repels it. Pull the north pole away and the loop makes a SOUTH face toward it and pulls it back. Either way the loop opposes the motion; with a south pole, every face flips.',
        'Why it must be so: energy. If the induced current helped the change, an approaching magnet would be pulled in faster, inducing more current and pulling harder still: energy from nothing. Because the loop pushes back, you must do work to move the magnet, and that work becomes the electrical energy that heats the loop.',
        'Eddy currents and magnetic braking: a changing flux through a solid piece of metal drives swirling eddy currents inside it, and by Lenz\'s law they oppose the motion that causes them. A strong magnet dropped down a copper pipe falls slowly, at a steady speed, though copper does not attract a magnet at rest; eddy-current brakes slow trains and roller coasters without touching them, turning kinetic energy into heat.',
      ],
      showOnScreen: [
        'A loop with a growing ⊗ field; the induced current appears and its own ⊙ field arrows push back inside the loop, with ε = −NΔΦ/Δt and the minus sign highlighted',
        'Two panels: ⊗ flux increasing with the induced field ⊙ ("opposes the increase"), and ⊗ flux decreasing with the induced field ⊗ ("props it up"); a third panel with steady flux and no current',
        'The four steps as a checklist beside a loop, worked once: ⊗, increasing, induced ⊙, the right hand with the thumb out of the page and the fingers curling counterclockwise; then small electron dots circulating the other way',
        'The deck\'s magnet-and-loop pair: a north pole pushed toward a loop meeting an induced north face (repulsion arrow on the magnet), then pulled away meeting a south face (attraction arrow); then the same with a south pole, every label flipped',
        'An energy bar: the hand\'s work on the magnet flowing into heat in the loop, beside a crossed-out "runaway" version where the loop helps the magnet in',
        'A magnet dropped down a copper pipe beside the same magnet dropped down a plastic pipe, the copper one falling slowly at a steady speed with eddy-current loops drawn in the wall; then a train\'s eddy-current brake',
        'The "Remember" recap: the induced current opposes the change in flux, not the flux; increasing: induced field opposite; decreasing: induced field the same way; thumb along the induced field, fingers give the current; ⊙ counterclockwise, ⊗ clockwise; approaching N meets N, retreating N meets S; energy: you do the work',
        'End card: "Up next: Lenz\'s Law: Worked Examples"',
      ],
      pitfalls: [
        'Making the induced field oppose the outside field even when the flux is decreasing.',
        'Mixing up the views: a counterclockwise current seen from one side is clockwise from the other.',
        'Giving the electrons the direction of the conventional current.',
        'Thinking copper or aluminum is unaffected by a magnet because it is not attracted to one at rest.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-induction-mcat'],
      checkpoint: [
        {
          question: 'A long straight wire in the plane of the page carries a current to the right, and a loop lies in the page just above the wire. The current in the wire is steadily decreasing. (For the wire\'s field, use the right-hand grip rule: thumb along the current, fingers curl the way the field circles.) The induced current in the loop is:',
          options: [
            'Counterclockwise, to prop up the ⊙ flux',
            'Clockwise, to oppose the ⊙ flux',
            'Clockwise, to prop up the ⊗ flux',
            'Zero, because the loop is not moving',
          ],
          correctAnswer: 0,
          explanation:
            'Above a wire carrying current to the right, the wire\'s field points out of the page (⊙). As the current falls, that ⊙ flux decreases, so the induced field props it up, also ⊙, which takes a counterclockwise current. "Clockwise, to oppose" opposes the field instead of the change; "the ⊗ flux" puts the wire\'s field into the page above it, the side below the wire; and "zero" forgets that a changing current changes the flux with nothing moving.',
        },
        {
          question: 'A light aluminum ring hangs from a thread. The south pole of a bar magnet is pushed quickly toward the ring along its axis. The ring:',
          options: [
            'Swings toward the magnet, with a N face toward it',
            'Stays put, as aluminum does not attract magnets',
            'Swings away, with a N face toward the magnet',
            'Swings away, with a S face toward the magnet',
          ],
          correctAnswer: 3,
          explanation:
            'The approaching pole increases the flux through the ring, so the ring opposes the approach: it makes a like pole, a SOUTH face, toward the magnet\'s south pole and is repelled, swinging away. "Toward, with a N face" makes the ring help the change; "stays put" forgets that the force comes from induced currents, not from the aluminum being magnetic; and "away, with a N face" gets the motion right but uses the north-pole rule for a south pole, and a N face would attract.',
        },
        {
          question: 'Identical magnets are dropped from the same height, one down a vertical copper pipe and one down a plastic pipe of the same size. Which is true?',
          options: [
            'They land together, as copper is not magnetic',
            'The copper one lands first, pulled by eddy currents',
            'The copper one lands later; the pipe warms slightly',
            'The copper one lands later, as copper attracts it',
          ],
          correctAnswer: 2,
          explanation:
            'The falling magnet changes the flux through each ring of the copper pipe, and the induced eddy currents push back against its motion, so it falls more slowly and some of its lost gravitational energy becomes heat in the pipe; plastic carries no currents, so that magnet falls freely. "They land together" forgets induced currents; "lands first" makes the currents help the motion, which would break energy conservation; and "copper attracts it" gives the right result for the wrong reason, since copper does not attract a magnet at rest.',
        },
      ],
    },
    // ── 6 · Lenz's law (worked examples) ─────────────────────────────────
    {
      title: 'Lenz\'s Law: Worked Examples',
      minutes: 6,
      goal: 'Combine Faraday\'s and Lenz\'s laws to find the size and direction of an induced current from a field-versus-time graph, and the currents and forces as a magnet falls through a ring.',
      keyPoints: [
        'Size from Faraday: |ε| = AΔB/Δt for a single loop face-on to the field, then I = ε/R.',
        'Direction from the four steps: the outside field\'s direction; increasing or decreasing; the induced field (opposite if increasing, the same if decreasing); then the right hand, thumb along the induced field.',
        'Conventional current is what the right-hand rule gives; the electrons, being negative, circulate the opposite way.',
        'For a magnet and a ring, find the field through the ring from the nearer pole (field lines leave N and enter S), then apply Lenz: the ring always pushes back against the motion, so the force on a falling magnet is upward both as it approaches and as it leaves.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the loop (0.030 m², 0.15 Ω) in the ⊙ field with the field-versus-time graph: the rising stretch (0.20 T/s, 6.0 mV, 0.040 A, induced ⊗, clockwise arrows), the flat stretch (all zero), the falling stretch (0.60 T/s, 18 mV, 0.12 A, induced ⊙, counterclockwise arrows), then electron dots circulating counterclockwise during the rise',
        'Example 2: a bar magnet, N pole down, falling toward a horizontal copper ring seen from the side and from above: field lines pointing down through the ring, the induced field up, counterclockwise current from above, an induced N on the ring\'s top face and an upward force on the magnet; then the magnet below the ring, its S end up, field still down through the ring and shrinking, the induced field down, clockwise current from above, a N bottom face attracting the S end and an upward force again',
        'The "Remember" recap of the method: size from AΔB/Δt and I = ε/R; direction from the four steps; electrons the other way; magnet and ring: field from the nearer pole, the ring pushes back both ways',
        'End card: "Up next: Motional EMF"',
      ],
      workedExample:
        'Example 1: A single circular wire loop of area 0.030 m² and resistance 0.15 Ω lies in the plane of the page, in a uniform field pointing out of the page (⊙). The field changes as follows: from 0 to 3.0 s it rises steadily from 0 to 0.60 T; from 3.0 s to 5.0 s it stays at 0.60 T; from 5.0 s to 6.0 s it falls steadily back to 0. (a) From 0 to 3.0 s, what are the size of the induced current and its direction as seen on the page? (b) What is the induced current from 3.0 s to 5.0 s? (c) From 5.0 s to 6.0 s, what are the size and direction of the induced current? (d) From 0 to 3.0 s, which way do the electrons in the loop circulate? (a) The field changes at 0.60/3.0 = 0.20 T/s, so |ε| = AΔB/Δt = (0.030)(0.20) = 6.0 × 10⁻³ V and I = ε/R = (6.0 × 10⁻³)/0.15 = 0.040 A. The ⊙ flux is increasing, so the induced field points into the page (⊗), and a ⊗ field inside the loop takes a clockwise current; (b) zero: the field is steady, so the flux is not changing; (c) the field changes at 0.60/1.0 = 0.60 T/s, so |ε| = (0.030)(0.60) = 0.018 V and I = 0.018/0.15 = 0.12 A. The ⊙ flux is decreasing, so the induced field props it up, also ⊙, which takes a counterclockwise current; (d) counterclockwise: electrons are negative, so they move opposite the clockwise conventional current. Example 2: A bar magnet is held with its north pole pointing down, above a horizontal copper ring, and is dropped so that it falls straight down through the ring. (a) As the magnet falls toward the ring from above, which way does the induced current circulate, as seen from above? (b) Which pole does the ring\'s top face become, and which way is the magnetic force on the magnet? (c) After the magnet has passed through and is falling away below the ring, which way does the induced current circulate, seen from above, and which way is the force on the magnet? (d) How does the magnet\'s fall near the ring compare with free fall, and where does the missing energy go? (a) Field lines leave the north pole, so the magnet\'s field points down through the ring, and as the magnet nears, that downward flux increases. The induced field opposes the increase and points up; seen from above, a field pointing up, toward you, takes a counterclockwise current; (b) the induced field comes out of the ring\'s top face, so the top face is a north pole facing the magnet\'s north pole: they repel, and the force on the magnet is upward; (c) below the ring, the magnet\'s south end faces the ring, and field lines enter a south pole, so the field through the ring still points down, but now it is weakening as the magnet falls away. The induced field props it up, pointing down; seen from above, that takes a clockwise current. The ring\'s bottom face is now a north pole, which attracts the magnet\'s south end below it: the force on the magnet is upward again; (d) both while approaching and while leaving, the force on the magnet is upward, so its acceleration near the ring is less than g. Part of the gravitational potential energy it loses becomes thermal energy in the ring, carried there by the induced current.',
      pitfalls: [
        'Making the induced field oppose the outside field while the flux is decreasing.',
        'Giving the electrons the conventional current\'s direction.',
        'Expecting the force on the magnet to reverse once it has passed through the ring.',
        'Forgetting that field lines enter a south pole, so the field through the ring still points down after the magnet passes.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-induction-mcat'],
      checkpoint: [
        {
          question: 'A single loop of area 0.050 m² and resistance 0.20 Ω lies in the page in a field pointing into the page (⊗). The field falls steadily from 0.40 T to 0.10 T in 1.5 s. What are the size and direction of the induced current, as seen on the page?',
          options: ['0.067 A, clockwise', '0.050 A, counterclockwise', '0.0020 A, clockwise', '0.050 A, clockwise'],
          correctAnswer: 3,
          explanation:
            'The field changes at 0.30/1.5 = 0.20 T/s, so |ε| = (0.050)(0.20) = 0.010 V and I = 0.010/0.20 = 0.050 A. The ⊗ flux is decreasing, so the induced field props it up, also ⊗, which takes a clockwise current. 0.067 A uses the starting 0.40 T instead of the 0.30 T change; "counterclockwise" opposes the field instead of the change; and 0.0020 A multiplies the EMF by the resistance instead of dividing.',
        },
        {
          question: 'A field pointing out of the page (⊙) through a wire loop in the page is increasing. As seen on the page, which way do the electrons in the loop circulate?',
          options: [
            'Clockwise, along with the current',
            'Counterclockwise, against the current',
            'Clockwise, against the current',
            'Counterclockwise, along with the current',
          ],
          correctAnswer: 1,
          explanation:
            'The increasing ⊙ flux calls for an induced field into the page (⊗), so the conventional current is clockwise, and the negative electrons circulate the opposite way: counterclockwise. "Clockwise, along with the current" gives the electrons the conventional direction; "clockwise, against the current" starts from a counterclockwise current, which opposes the field instead of the change; and "counterclockwise, along with the current" makes that same mistake and also gives the electrons the current\'s direction.',
        },
        {
          question: 'A bar magnet is dropped with its SOUTH pole pointing down through a horizontal copper ring. After it has passed through and is falling away below, the induced current seen from above and the force on the magnet are:',
          options: [
            'Clockwise; the force on the magnet is up',
            'Counterclockwise; the force on it is up',
            'Counterclockwise; the force on it is down',
            'Clockwise; the force on the magnet is down',
          ],
          correctAnswer: 1,
          explanation:
            'Below the ring the magnet\'s north end faces up, and field lines leave a north pole, so the field through the ring points up and is weakening. The induced field props it up, pointing up, which seen from above (a field toward you) is counterclockwise; the ring\'s bottom face is then a south pole, which attracts the magnet\'s north end and pulls the magnet up. "Clockwise" uses the north-pole-down answer without flipping it; "the force is down" makes the ring help the fall, which would create energy; and "clockwise, down" makes both mistakes.',
        },
      ],
    },
    // ── 7 · Motional EMF (concepts) ──────────────────────────────────────
    {
      title: 'Motional EMF',
      minutes: 7,
      goal: 'Explain why a conductor moving through a magnetic field has an EMF of BLv, find the current and braking force on rails, and describe a loop entering, crossing and leaving a field.',
      keyPoints: [
        'A metal rod moving through a magnetic field carries its free charges along with it, so each feels F = qvB. With the rod, its velocity and B all at right angles, the right-hand rule for a POSITIVE charge (fingers along v, curl toward B, thumb gives F) pushes positive charge toward one end of the rod; electrons, being negative, are pushed toward the other end. One end becomes + and the other −: the moving rod acts like a battery.',
        'Its EMF is ε = BLv, for a rod of length L moving at speed v, with L, v and B at right angles. The force route: the push qvB moves a charge along the whole length L, so the work per charge is qvBL/q = BLv. The flux route gives the same answer: on rails, the rod sweeps out an area Lv each second, so ΔΦ/Δt = BLv. A rod moving along its own length, or along B, has no EMF.',
        'Close the circuit with rails and a resistor and the EMF drives a current I = BLv/R. Find its direction with Lenz\'s law (the circuit\'s flux grows, so the current opposes the growth) or with the right-hand rule on positive charges in the rod; the two always agree. For a rod moving right through a ⊗ field, with the resistor to its left, the ⊗ flux grows, so the current is counterclockwise: up through the rod, while the electrons move down it.',
        'The current in the rod sits in the field, so the rod feels a force F = ILB, and it always points against the motion: magnetic braking. To keep the rod moving at a steady speed, you must push with a force equal to ILB; let go and the rod slows. With the rails left unconnected, the rod still has an EMF, but no current flows and there is no braking force.',
        'Energy balance: the power you supply, Fv, equals the power the resistor turns into heat, I²R. A faster rod has a larger EMF, a larger current and a larger braking force, so it takes a harder push to keep it going.',
        'A loop crossing the edge of a field: while it enters, its leading edge acts as the rod, so ε = BLv with L the length of that edge; while it is fully inside a uniform field, its flux is steady and the EMF is zero, even though it is moving; while it leaves, ε = BLv again, with the current reversed. The braking force opposes the motion both while entering and while leaving.',
      ],
      showOnScreen: [
        'A vertical rod moving right through a ⊗ field: + charges drifting up and electron dots drifting down, the right hand with fingers along v, curling toward B, thumb up, and "negative charges: the other way" beside it; the top end labeled + and the bottom −, with a battery symbol fading in',
        'ε = BLv derived twice side by side: qvB times L divided by q, and the shaded area Lv added each second on the rails; then the rod moving along its own length with an EMF readout of zero',
        'The rod on rails with a resistor at the left end: the ⊗ flux readout growing, the counterclockwise current arrows, up through the rod, and I = BLv/R',
        'The current in the rod with a force arrow ILB pointing left, against v; a hand pushing right with an equal arrow; then the hand letting go and the rod slowing; then unconnected rails with an EMF readout but no current and no force arrow',
        'An energy bar: Fv from the hand flowing into I²R heat in the resistor, with the two readouts equal',
        'A square loop moving right into, through and out of a ⊗ field region, with the flux graph (rise, flat, fall) and the EMF graph (step, zero, opposite step) building beneath it, and a braking arrow pointing left while it enters and while it leaves',
        'The "Remember" recap: a moving rod is a battery; ε = BLv with L, v, B at right angles; I = BLv/R, direction from Lenz; braking force ILB opposes the motion; Fv = I²R; a loop: EMF entering and leaving, zero fully inside',
        'End card: "Up next: Motional EMF: Worked Examples"',
      ],
      pitfalls: [
        'Pushing electrons the same way as positive charges in the rod.',
        'Expecting an EMF while a loop is fully inside a uniform field because it is moving.',
        'Thinking the braking force reverses when the loop starts to leave the field, because the current reverses.',
        'Thinking no push is needed to keep the rod at a steady speed.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-induction-mcat', 'mcat-physics-electricity-magnetism-mcat'],
      checkpoint: [
        {
          question: 'A vertical metal rod in the plane of the page moves to the right through a uniform field pointing out of the page (⊙). It is not connected to anything. Which end of the rod becomes positive?',
          options: [
            'The top end, as + charge is pushed up',
            'The bottom end, as + charge is pushed down',
            'The top end, as electrons are pushed up',
            'Neither, as there is no closed circuit',
          ],
          correctAnswer: 1,
          explanation:
            'For a positive charge, fingers along v (right) curled toward B (out of the page) leave the thumb pointing down, so + charge collects at the bottom; electrons are pushed the other way, up, making the top end negative. "+ pushed up" is the answer for a ⊗ field; "electrons pushed up" gets the electrons right but forgets they are negative, so they make the top end negative, not positive; and "neither" ties the EMF to a closed circuit, when the charges separate in the rod regardless.',
        },
        {
          question: 'A rod is pushed at a steady speed along rails connected by a resistor, in a uniform field. If the speed is doubled, the power dissipated in the resistor becomes:',
          options: ['Twice as large', 'Four times as large', 'The same as before', 'Half as large'],
          correctAnswer: 1,
          explanation:
            'Doubling v doubles ε = BLv and therefore doubles the current, and P = I²R depends on the current squared, so the power is four times as large; it matches Fv, where both F and v doubled. "Twice" doubles the EMF or the current but forgets the square; "the same" treats the power as set by the field and the resistor alone; and "half" treats the faster rod as spending less time doing the same work.',
        },
        {
          question: 'A square loop is pulled to the left at a steady speed out of a region of uniform field. While it is leaving, the magnetic force on the loop:',
          options: [
            'Points left, now that the current has reversed',
            'Is zero, as the field in the region is uniform',
            'Points right, against the motion of the loop',
            'Points into the page, along the field',
          ],
          correctAnswer: 2,
          explanation:
            'While the loop leaves, its flux is falling, and by Lenz\'s law the effects of the induced current oppose the change, so the force on the edge still in the field points against the motion: to the right, since the loop moves left. "Left, now that the current has reversed" forgets that a different edge now carries the force; "zero" applies the fully-inside result to a loop that is crossing the boundary; and "into the page" points the force along B, when a magnetic force is always perpendicular to the field.',
        },
      ],
    },
    // ── 8 · Motional EMF (worked examples) ───────────────────────────────
    {
      title: 'Motional EMF: Worked Examples',
      minutes: 6.5,
      goal: 'Find the EMF, current, braking force and power for a rod on rails, and the EMF, current and force on a loop as it enters, crosses and leaves a field.',
      keyPoints: [
        'EMF first: ε = BLv with L in meters, the length that cuts across the field (the rod between the rails, or the loop\'s edge in the field).',
        'Current from I = ε/R, its direction from Lenz (growing flux: oppose it; shrinking flux: prop it up), checked with the right-hand rule on positive charges in the moving conductor.',
        'Force on the conductor in the field: F = ILB, always against the motion. A steady speed needs an equal outside push, and the push\'s power Fv equals I²R.',
        'For a loop: an EMF only while an edge is crossing the boundary; zero while it is fully inside a uniform field.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the rails 0.20 m apart in the ⊗ 0.80 T field with the 0.40 Ω resistor at the left end, the rod moving right at 5.0 m/s; the 0.80 V readout, 2.0 A counterclockwise (up through the rod, electrons down), the 0.32 N braking arrow pointing left and the equal push to the right, then the two 1.6 W power readouts side by side',
        'Example 2: the 0.25 m square loop (0.25 Ω) moving right at 5.0 m/s into the ⊙ 0.60 T region: entering (0.75 V, 3.0 A, clockwise, 0.45 N on the leading edge pointing left), fully inside (all readouts zero), leaving (0.75 V, 3.0 A, counterclockwise, 0.45 N on the trailing edge pointing left), with the flux and EMF graphs building beneath',
        'The "Remember" recap of the method: ε = BLv; I = ε/R; direction from Lenz, checked with the right-hand rule; F = ILB against the motion; Fv = I²R; a loop: EMF only while an edge crosses',
        'End card: "Thanks for watching" (the end of the magnetism series)',
      ],
      workedExample:
        'Example 1: Two long horizontal metal rails lie in the plane of the page, 0.20 m apart, joined at their left ends by a 0.40 Ω resistor. A metal rod lies across the rails and is pushed to the right at a steady 5.0 m/s. A uniform 0.80 T field points into the page (⊗). Ignore friction and the resistance of the rails and rod. (a) What EMF is induced in the rod? (b) What current flows, and which way does it flow through the rod? (c) What magnetic force acts on the rod, and what push keeps it moving at a steady speed? (d) What power does the push supply, and what power does the resistor dissipate? (a) ε = BLv = (0.80)(0.20)(5.0) = 0.80 V; (b) I = ε/R = 0.80/0.40 = 2.0 A. The circuit\'s area, and so its ⊗ flux, is growing, so the induced field points out of the page (⊙), which takes a counterclockwise current: up the page through the rod. Check: for positive charges, fingers right along v, curled into the page toward B, leave the thumb pointing up the rod; the electrons move down it; (c) F = ILB = (2.0)(0.20)(0.80) = 0.32 N, pointing left, against the motion, so a steady speed needs a push of 0.32 N to the right; (d) the push supplies P = Fv = (0.32)(5.0) = 1.6 W, and the resistor dissipates I²R = (2.0)²(0.40) = 1.6 W: the same, as energy conservation requires. Example 2: A square wire loop 0.25 m on a side, with a resistance of 0.25 Ω, lies in the plane of the page and moves to the right at a steady 5.0 m/s. It passes through a region of uniform 0.60 T field pointing out of the page (⊙); the region is wider than the loop. (a) While the loop is entering the region, what are the induced EMF and current? (b) While it is entering, which way does the current circulate, and what are the size and direction of the magnetic force on the loop? (c) What are the EMF, the current and the force while the loop is entirely inside the region? (d) While the loop is leaving, which way does the current circulate, and which way is the force on the loop? (a) The leading edge acts as the rod: ε = BLv = (0.60)(0.25)(5.0) = 0.75 V, and I = 0.75/0.25 = 3.0 A; (b) the ⊙ flux is increasing, so the induced field points into the page (⊗), which takes a clockwise current: down through the leading (right) edge. That edge feels F = ILB = (3.0)(0.25)(0.60) = 0.45 N, pointing left, against the motion; the forces on the top and bottom edges are equal and opposite and cancel; (c) all zero: the whole loop is in a uniform field, so its flux is steady even though it moves; (d) the ⊙ flux is now decreasing, so the induced field props it up, also ⊙, which takes a counterclockwise current: down through the trailing (left) edge, the only edge still in the field. The force on it is again 0.45 N, pointing left, against the motion.',
      pitfalls: [
        'Using the loop\'s area or perimeter in ε = BLv instead of the length of one edge.',
        'Expecting a current while the loop is fully inside the field.',
        'Reversing the braking force when the loop starts to leave.',
        'Forgetting that a steady speed needs a push equal to the braking force.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-induction-mcat', 'mcat-physics-electricity-magnetism-mcat'],
      checkpoint: [
        {
          question: 'A rod 0.30 m long slides along rails at a steady 6.0 m/s through a perpendicular 0.50 T field. The rails are joined by a 0.45 Ω resistor. What outside push keeps the rod at that speed?',
          options: ['0.14 N', '1.8 N', '0.30 N', '0 N'],
          correctAnswer: 2,
          explanation:
            'ε = BLv = (0.50)(0.30)(6.0) = 0.90 V, I = 0.90/0.45 = 2.0 A, and the braking force is ILB = (2.0)(0.30)(0.50) = 0.30 N, so the push must also be 0.30 N. 0.14 N uses the 0.90 V EMF as the current, skipping I = ε/R; 1.8 N is the power, εI = 1.8 W, not a force; and 0 N forgets the braking force, as if a steady speed needed no push.',
        },
        {
          question: 'Horizontal rails in the page are joined at their RIGHT ends by a resistor. A rod across them moves to the LEFT, away from the resistor, through a field pointing into the page (⊗). Which way does the current flow in the rod, and which way is the force on the rod?',
          options: [
            'Up the page; force to the right',
            'Down the page; force to the left',
            'Up the page; force to the left',
            'Down the page; force to the right',
          ],
          correctAnswer: 3,
          explanation:
            'The circuit grows as the rod moves away, so its ⊗ flux increases and the induced field points out of the page (⊙): a counterclockwise current, which runs down through the rod on the left side of the circuit. Check: for positive charges, fingers left along v, curled into the page, leave the thumb pointing down. The force ILB on that current points right, against the motion. "Up the page" uses the answer for a rod moving right with the resistor on its left; and "force to the left" points the force along the motion, which would speed the rod up.',
        },
        {
          question: 'A square loop 0.40 m on a side, with a resistance of 0.80 Ω, moves at a steady 2.0 m/s into a region of uniform 0.50 T field. What current flows while it is entering, and while it is fully inside?',
          options: [
            '0.50 A entering; 0.50 A fully inside',
            '0.20 A entering; zero when fully inside',
            '0.50 A entering; zero when fully inside',
            '2.0 A entering; zero when fully inside',
          ],
          correctAnswer: 2,
          explanation:
            'While it enters, the leading edge is the rod: ε = BLv = (0.50)(0.40)(2.0) = 0.40 V and I = 0.40/0.80 = 0.50 A. Fully inside a uniform field, the flux is steady, so the current is zero. "0.50 A fully inside" expects an EMF from motion alone; 0.20 A uses the area, 0.16 m², in place of the edge length; and 2.0 A uses the perimeter, 1.6 m.',
        },
      ],
    },
  ],
}
