import type { ShotList } from '../types'

/**
 * Shot list: MCAT Physics — Magnetism Part 1: Magnetic Fields & Forces on Charges
 * (topic mcat-physics-electricity-magnetism-mcat; the first of three "Magnetism & Electromagnetism"
 * video parts. Part 2 is currents and their fields, Part 3 is electromagnetic induction).
 *
 * Sources: the MCAT lesson (src/data/interactive-lessons/mcat-mcat-physics-electricity-magnetism-mcat-part1..2.ts;
 * this video takes Part 1's "The Magnetic Field", "No Magnetic Monopoles" and "Magnetic Materials" with the
 * hemoglobin link, and all of Part 2: the force law, the right-hand rule, "Magnetic Forces Do No Work" and
 * circular motion; Part 1's wire, loop and solenoid fields belong to video Part 2), the MCAT induction
 * lesson's Part 1 (mcat-mcat-physics-electricity-induction-mcat-part1.ts) for the velocity selector and the
 * mass spectrometer (its wire forces belong to video Part 2), the AP Physics 2 lessons
 * physics2-magnetic-fields-part1..3 and part 6 (sources, field lines, Earth's field and units; the force
 * on a moving charge and the right-hand rule; circular motion, the period, the helix and the velocity
 * selector; dipoles, materials, permeability and the Hall effect; parts 4–5 are wires and the fields of
 * currents for video Part 2, part 7 is review), the deck figures in src/data/deck-figures/mcat-cp-magnetism.ts
 * (closed field lines of a bar magnet, F = qvB sinθ with the right-hand rule, the proton's wide arc and the
 * electron's tight loop, crossed E and B with the analyzer), and the exit pools to avoid (the MCAT
 * lesson-built pool and the magnetic-fields-forces items in src/data/exit-quizzes/ap-physics-2.ts, which
 * the AP Physics 2 unit test also draws from).
 * Eight Manim clips in four pairs (owner format, Nov 2026): a CONCEPT clip that teaches the idea and ends
 * on the "Remember" recap, then a WORKED-EXAMPLES clip with two examples, each shown in full with lettered
 * parts and a pause-and-try prompt before the solution. Concept clips get conceptual checkpoint
 * questions; worked-example clips get questions that mirror their two examples with new numbers.
 * Clips 1–2 follow magnetic fields, poles, units and materials (MCAT Part 1; AP Parts 1 and 6). Clips 3–4
 * follow the magnetic force on a moving charge (MCAT Part 2; AP Part 2). Clips 5–6 follow circular motion
 * in a uniform field (MCAT Part 2; AP Part 3). Clips 7–8 follow crossed fields: the velocity selector, the
 * Hall effect and the mass spectrometer (MCAT induction Part 1; AP Parts 3 and 6). Because the selector and
 * the spectrometer sit in the induction topic's lesson, clips 7–8 carry both MCAT slugs in mcatTags.
 *
 * REUSE FOR AP PHYSICS 2 (topic magnetic-fields-forces): each clip is cut into sections, about one per
 * key point, and the AP lesson takes only the SHARED sections. MCAT-only material sits in key points of
 * its own, listed word for word in `mcatOnly`, with any question that depends on it listed in
 * `mcatOnlyQuestions`:
 *   clip 1: deoxyhemoglobin and oxyhemoglobin and the fMRI BOLD signal (1 key point, question 3)
 *   clip 8: the mass spectrometer, which is Example 2 (1 key point, question 3); Example 1, a velocity
 *           selector between parallel plates, is shared, so the AP cut still has one full worked example
 * Clips 2, 3, 4, 5, 6 and 7 are shared in full, including the three kinds of magnetic material (clip 1)
 * and the Hall effect (clip 7), which the AP lessons teach. Every "Remember" recap covers shared ideas only.
 * Symbols follow the AP equation sheet: |F| = |q|vB sin θ, r = mv/(|q|B), μ₀ = 4π × 10⁻⁷ T·m/A,
 * e = 1.6 × 10⁻¹⁹ C, m_e = 9.1 × 10⁻³¹ kg, m_p = 1.67 × 10⁻²⁷ kg. Every force direction comes from the
 * right-hand rule for a POSITIVE charge (fingers along v, curl toward B, thumb along F) and is flipped for
 * a negative charge, said on screen every time; ⊙ is out of the page and ⊗ into it. Field lines outside a
 * magnet run N → S. The gauss (1 G = 10⁻⁴ T) appears beside the tesla as a unit students will meet.
 * Circular-motion senses used throughout: in a field out of the page (⊙) a positive charge circles
 * clockwise as seen from the front; in a field into the page (⊗), counterclockwise; a negative charge
 * circles the other way.
 *
 * The checkpoint questions are what a YouTube viewer answers at studymondo.com/v/<code>
 * (src/data/video-short-links.ts). Codes (fixed by the series plan): magnet1/magnet2, deflect1/deflect2,
 * orbit1/orbit2, selector1/selector2. They use new scenarios and numbers, so they never repeat an
 * exit-quiz item or a worked example.
 */
export const shotList: ShotList = {
  courseSlug: 'mcat-prep',
  topicSlug: 'mcat-physics-electricity-magnetism-mcat',
  title: 'Magnetism Part 1: Magnetic Fields & Forces on Charges',
  overview:
    'Eight animated clips in four pairs that build magnetism from the ground up: where magnetic fields come from, how field lines, poles and materials behave, how a field pushes sideways on a moving charge, why that push bends a charge into a circle without changing its speed, and how crossed electric and magnetic fields pick out one speed. Each idea gets a concept clip followed by a worked-examples clip in which every problem is shown in full, with a moment to pause and try it before the solution. Narration stays exam-neutral, and each clip is cut into sections so that introductory physics lessons can reuse the shared ones; the hemoglobin link and the mass spectrometer sit in sections of their own. Each clip ends with three checkpoint questions. Part 2 continues with the magnetic force on a wire.',
  clips: [
    // ── 1 · Magnetic fields (concepts) ───────────────────────────────────
    {
      title: 'Magnetic Fields',
      minutes: 7,
      goal: 'Explain where magnetic fields come from, read and draw the field lines of a magnet, use a compass to find a field\'s direction, and predict how iron, aluminum and water respond to a magnet.',
      keyPoints: [
        'Every magnetic field comes from moving charge: a current in a wire, the motion and spin of electrons inside the atoms of a permanent magnet, or molten iron moving in Earth\'s core. A charge at rest makes only an electric field; a moving charge makes a magnetic field as well. The field B is a vector, and its direction at a point is the way the north end of a small compass points there.',
        'Field lines map B. Outside a magnet they run from the north pole around to the south pole; inside, they run from south back to north, so every line is a closed loop. Lines never cross, the field is tangent to them, and crowded lines mean a strong field. There are no magnetic monopoles: cut a magnet in half and you get two smaller magnets, each with a north and a south pole. Electric lines are different: they start on + charges and end on − charges.',
        'Like poles repel and opposite poles attract. A compass needle is a small magnet, a magnetic dipole, and it turns until its north end points along B, which is how it maps field lines. Earth acts like a giant bar magnet whose magnetic SOUTH pole sits near the geographic North Pole; that is why a compass\'s north end points north.',
        'The SI unit of B is the tesla: 1 T = 1 N/(A·m). A tesla is large. Earth\'s field is about 5 × 10⁻⁵ T (50 μT), a refrigerator magnet about 5 mT and a hospital MRI magnet 1.5 to 3 T. Fields are also quoted in gauss: 1 G = 10⁻⁴ T, so Earth\'s field is about 0.5 G. Where two sources act at one point, their fields add as vectors, and a compass points along the net field.',
        'Materials respond in three ways. Ferromagnetic materials (iron, nickel, cobalt) have domains of aligned atomic dipoles: a magnet\'s field lines them up, so an unmagnetized nail is attracted to EITHER pole, and iron can stay magnetized; heating it past its Curie temperature scrambles the domains. Paramagnetic materials (aluminum, magnesium, titanium, anything with unpaired electrons) are weakly attracted and lose their alignment when the field is removed. Every material is diamagnetic, weakly repelled; it is the main effect in water, copper and most body tissue.',
        'Hemoglobin changes its magnetic behavior with oxygen. Deoxyhemoglobin has unpaired electrons and is paramagnetic, weakly drawn into a field; oxyhemoglobin is diamagnetic, like the water around it. When a brain region becomes active, blood flow rises more than oxygen use, so the fraction of deoxyhemoglobin there falls, the field around those vessels is disturbed less and the MRI signal rises: the BOLD signal of functional MRI. Takeaway: deoxy is paramagnetic, oxy is diamagnetic.',
      ],
      showOnScreen: [
        'A wire with moving charges, a spinning electron in an atom, and Earth\'s churning core, each with a small loop of B around it; then a charge at rest with only electric field lines',
        'The deck\'s bar magnet with closed field lines, N → S outside and S → N inside, a compass tangent to one line, and a crowded region labeled "strong"; then the magnet snapped in half into two complete magnets, beside an electric dipole whose lines start and end on charges',
        'Two magnets with like poles pushing apart and opposite poles pulling together; a compass needle swinging into line with the field; Earth with its magnetic S pole drawn near the geographic North Pole',
        'A ladder of field strengths: Earth 5 × 10⁻⁵ T (0.5 G), fridge magnet 5 mT, MRI 1.5 to 3 T, with 1 T = 1 N/(A·m) and 1 G = 10⁻⁴ T; then two field arrows at a compass added tip to tail',
        'An iron nail, an aluminum rod and a copper rod hanging near a magnet\'s pole: the nail pulled hard with its domains snapping into line, the aluminum nudged toward the pole, the copper nudged away',
        'Red blood cells in an MRI field: deoxyhemoglobin drawn weakly in, oxyhemoglobin weakly pushed out like the surrounding water, then an active brain region lighting up as deoxyhemoglobin washes out',
        'The "Remember" recap (shared ideas only): moving charge makes B; lines N → S outside, closed loops, no monopoles; compass north end points along B; 1 T = 1 N/(A·m), 1 G = 10⁻⁴ T; fields add as vectors; ferro strong, para weak pull, dia weak push',
        'End card: "Up next: Magnetic Fields: Worked Examples"',
      ],
      pitfalls: [
        'Drawing field lines that start on the north pole and stop on the south pole, or that run N → S inside the magnet too.',
        'Expecting a broken magnet to give an isolated north or south pole.',
        'Thinking Earth\'s magnetic north pole sits at the geographic North Pole.',
        'Calling aluminum or copper "nonmagnetic": aluminum is weakly attracted and copper weakly repelled.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-magnetism-mcat'],
      mcatOnly: [
        'Hemoglobin changes its magnetic behavior with oxygen. Deoxyhemoglobin has unpaired electrons and is paramagnetic, weakly drawn into a field; oxyhemoglobin is diamagnetic, like the water around it. When a brain region becomes active, blood flow rises more than oxygen use, so the fraction of deoxyhemoglobin there falls, the field around those vessels is disturbed less and the MRI signal rises: the BOLD signal of functional MRI. Takeaway: deoxy is paramagnetic, oxy is diamagnetic.',
      ],
      mcatOnlyQuestions: [2],
      checkpoint: [
        {
          question: 'A bar magnet lies flat on a table with its north pole pointing east. A small compass is set directly above the middle of the magnet. Which way does the compass\'s north end point?',
          options: [
            'East, toward the magnet\'s north end',
            'West, toward the magnet\'s south end',
            'Straight down, into the magnet',
            'Straight up, away from the magnet',
          ],
          correctAnswer: 1,
          explanation:
            'Outside a magnet the field lines arc from the north pole around to the south pole, so above the middle they run parallel to the magnet from its N end toward its S end: west. The compass\'s north end points along B, so it points west. "East" uses the inside rule (S → N) outside the magnet; "straight down" and "straight up" treat the middle of the magnet as a pole with lines entering or leaving there, but the lines leave and enter at the ends.',
        },
        {
          question: 'Rods of iron, aluminum and copper, all the same size, hang from threads near one pole of a strong magnet. Which describes what happens?',
          options: [
            'Iron and aluminum pulled hard; copper does not move',
            'Iron pulled hard; aluminum and copper do not move',
            'Iron pulled; aluminum pushed; copper pulled weakly',
            'Iron pulled hard; aluminum pulled; copper pushed',
          ],
          correctAnswer: 3,
          explanation:
            'Iron is ferromagnetic: its domains line up and it is pulled strongly. Aluminum is paramagnetic, weakly pulled toward the pole, and copper is diamagnetic, weakly pushed away. "Iron and aluminum pulled hard" gives aluminum iron\'s strong domain response; "aluminum and copper do not move" treats weak effects as no effect; and "aluminum pushed, copper pulled" swaps paramagnetism and diamagnetism.',
        },
        {
          question: 'As a brain region becomes active, blood flow there rises so much that the fraction of hemoglobin carrying no oxygen falls. Compared with before, the blood in that region is:',
          options: [
            'Less paramagnetic, with fewer weakly attracted molecules',
            'More paramagnetic, as oxyhemoglobin is weakly attracted',
            'Ferromagnetic, as the iron in heme lines up in domains',
            'Unchanged, as both forms of hemoglobin are diamagnetic',
          ],
          correctAnswer: 0,
          explanation:
            'Deoxyhemoglobin is the paramagnetic form, weakly drawn into a field, and oxyhemoglobin is diamagnetic. Fewer deoxyhemoglobin molecules means the blood is less paramagnetic, which disturbs the field less and raises the MRI signal. "More paramagnetic" swaps the two forms; "ferromagnetic" mistakes single iron atoms in heme for the aligned domains of bulk iron; and "unchanged" misses that deoxyhemoglobin\'s unpaired electrons make it paramagnetic.',
        },
      ],
    },
    // ── 2 · Magnetic fields (worked examples) ────────────────────────────
    {
      title: 'Magnetic Fields: Worked Examples',
      minutes: 6,
      goal: 'Identify a magnet\'s poles from compass readings, compare field strengths from a field-line diagram, convert between tesla and gauss, and add two fields at a compass to find where it points.',
      keyPoints: [
        'A compass\'s north end points along B. Outside a magnet B points away from the north pole and toward the south pole; inside, from south to north.',
        'Line density compares fields: three times the density means three times the field.',
        'Units: 1 G = 10⁻⁴ T and 1 μT = 10⁻⁶ T, so 1 G = 100 μT.',
        'Fields from two sources add as vectors. At right angles, the size is √(B₁² + B₂²) and the angle comes from tan θ = B₂/B₁, measured from B₁; the compass points along the net field.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the bar magnet with a compass beyond its left end pointing left, the left end labeled N, an arrow inside the magnet pointing left (S → N), boxes at A and B with line densities in a 4-to-1 ratio (2.5 mT at B, 10 mT at A, then 100 G), and the magnet cut in half with new poles S and N facing each other across the cut, pulling together',
        'Example 2: the compass seen from above with Earth\'s 2.0 × 10⁻⁵ T arrow pointing north and the magnet\'s 2.0 × 10⁻⁵ T arrow pointing west, added tip to tail to 2.8 × 10⁻⁵ T at 45° west of north; then the magnet flipped and moved back, its 1.5 × 10⁻⁵ T arrow pointing east, a 3-4-5 triangle and the needle at 37° east of north',
        'The "Remember" recap of the method: compass north end along B; away from N, toward S outside; density ratio = field ratio; 1 G = 10⁻⁴ T; add fields as vectors',
        'End card: "Up next: The Magnetic Force on a Charge"',
      ],
      workedExample:
        'Example 1: A bar magnet lies on the page with its ends unlabeled. A small compass placed just beyond its left end points its north end to the left, away from the magnet. (a) Which end of the magnet is its north pole? (b) Which way does the magnetic field point inside the magnet? (c) Near point A, just off the left end, the field lines are four times as dense as near point B, farther away, where the field is 2.5 mT. What is the field at A, in tesla and in gauss? (d) The magnet is cut in half across its middle. What poles does each half have, and do the two halves attract or repel across the cut? (a) A compass points along B, and outside a magnet B points away from the north pole, so the left end is north (and the right end south); (b) inside, the lines run from south to north, so B points to the left, from the right end toward the left end, closing the loops; (c) four times the density means four times the field: 4 × 2.5 mT = 10 mT = 1.0 × 10⁻² T, and since 1 G = 10⁻⁴ T, that is 100 G; (d) each half is a complete magnet: the left half has N on the left and a new S at the cut, the right half a new N at the cut and S on the right, so a south pole faces a north pole across the cut and the halves attract. Example 2: A compass sits on a lab bench where Earth\'s field is horizontal (ignore its vertical part), 2.0 × 10⁻⁵ T, pointing north. A bar magnet is placed due east of the compass, lying east–west with its north pole facing the compass; its field at the compass is 2.0 × 10⁻⁵ T. (a) What is Earth\'s field in gauss and in microtesla? (b) Which way does the magnet\'s field point at the compass? (c) What are the size and direction of the net field, and which way does the compass point? (d) The magnet is turned around so its south pole faces the compass and moved back until its field at the compass is 1.5 × 10⁻⁵ T. What are the net field and the compass direction now? (a) 2.0 × 10⁻⁵ T ÷ 10⁻⁴ T/G = 0.20 G, and 2.0 × 10⁻⁵ T = 20 μT; (b) B points away from a north pole, so at the compass, west of the magnet, the magnet\'s field points west; (c) the two fields are at right angles: B = √((2.0)² + (2.0)²) × 10⁻⁵ T ≈ 2.8 × 10⁻⁵ T, and with equal parts the angle is 45°, so the net field and the compass\'s north end point northwest, 45° west of north; (d) B now points toward the south pole, east; B = √((2.0)² + (1.5)²) × 10⁻⁵ T = 2.5 × 10⁻⁵ T, at tan θ = 1.5/2.0, θ ≈ 37° east of north, and the compass points that way.',
      pitfalls: [
        'Reading the compass\'s north end as pointing toward a north pole.',
        'Applying the outside rule (N → S) inside the magnet.',
        'Converting gauss with 10⁻² or 10⁻³ instead of 10⁻⁴.',
        'Adding the two field magnitudes, 2.0 + 2.0, instead of adding them as vectors.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-magnetism-mcat'],
      checkpoint: [
        {
          question: 'A small compass placed just beyond the RIGHT end of a bar magnet points its north end toward the magnet. Which is the right end, and which way does the field point inside the magnet?',
          options: [
            'Right end N; inside, B points to the left',
            'Right end S; inside, B points to the right',
            'Right end N; inside, B points to the right',
            'Right end S; inside, B points to the left',
          ],
          correctAnswer: 3,
          explanation:
            'The compass points along B, and outside a magnet B points toward the south pole, so the right end is south and the left end north. Inside, the lines run from south to north, from the right end toward the left: B points left. "Right end N" assumes a compass\'s north end points toward a north pole, but opposite poles attract; "S, to the right" uses the outside rule N → S inside the magnet; and "N, to the right" makes both mistakes.',
        },
        {
          question: 'Near point P, a magnet\'s field lines are three times as dense as near point Q, where the field is 40 G. What is the field at P, in tesla?',
          options: ['1.3 × 10⁻³ T', '1.2 × 10⁻² T', '3.6 × 10⁻² T', '1.2 × 10⁻¹ T'],
          correctAnswer: 1,
          explanation:
            'Three times the density means three times the field: 3 × 40 G = 120 G, and 1 G = 10⁻⁴ T, so B = 1.2 × 10⁻² T. 1.3 × 10⁻³ T divides by 3, reading dense lines as a weak field; 3.6 × 10⁻² T multiplies by 3² = 9, squaring the density ratio; and 1.2 × 10⁻¹ T converts with 1 G = 10⁻³ T.',
        },
        {
          question: 'Earth\'s horizontal field at a compass is 3.0 × 10⁻⁵ T, pointing north. A bar magnet placed due west of the compass, with its north pole facing it, adds a field of 4.0 × 10⁻⁵ T. Which way does the compass point, and how strong is the net field?',
          options: [
            '5.0 × 10⁻⁵ T, 53° east of north',
            '7.0 × 10⁻⁵ T, 53° east of north',
            '5.0 × 10⁻⁵ T, 37° east of north',
            '5.0 × 10⁻⁵ T, 53° west of north',
          ],
          correctAnswer: 0,
          explanation:
            'The magnet\'s field points away from its north pole, so at the compass, east of the magnet, it points east. At right angles to Earth\'s field, B = √((3.0)² + (4.0)²) × 10⁻⁵ = 5.0 × 10⁻⁵ T, and tan θ = 4.0/3.0 gives θ ≈ 53° east of north. 7.0 × 10⁻⁵ T adds the magnitudes as if the fields were parallel; 37° flips the ratio to 3.0/4.0, measuring from the wrong field; and "west of north" points the magnet\'s field toward its north pole.',
        },
      ],
    },
    // ── 3 · The magnetic force on a charge (concepts) ────────────────────
    {
      title: 'The Magnetic Force on a Charge',
      minutes: 7,
      goal: 'Find the size of the magnetic force on a moving charge from F = |q|vB sin θ, find its direction with the right-hand rule for positive and negative charges, and explain why the force never changes a charge\'s speed.',
      keyPoints: [
        'A magnetic field pushes only on a MOVING charge: |F| = |q|vB sin θ, where θ is the angle between the velocity v and the field B. A charge at rest feels nothing. A charge moving along the field or straight against it (θ = 0° or 180°) feels nothing. A charge moving at right angles (θ = 90°) feels the largest force, qvB. In between, only the part of the velocity across the field, v sin θ, counts.',
        'The force is perpendicular to BOTH v and B. For a POSITIVE charge, use the right-hand rule: point your fingers along v, curl them toward B, and your thumb points along F. (Flat-hand version: fingers along B, thumb along v, and your palm pushes the way F points.) For a NEGATIVE charge, such as an electron, the force points exactly the opposite way: find the positive-charge answer, then flip it.',
        'Directions in and out of the page: ⊙ is a field pointing out of the page, toward you; ⊗ is a field pointing into the page. Two anchor cases for a positive charge: moving right with B into the page (⊗), it is pushed up the page; moving right with B up the page, it is pushed out of the page (⊙). An electron with the same velocity is pushed down the page, and into the page.',
        'The magnetic force does NO work. It is always perpendicular to the velocity, so it never has a part along the motion: W = 0, and the speed and kinetic energy stay constant. A magnetic field can steer a charge but cannot speed it up or slow it down; only an electric field does that.',
        'Electric and magnetic forces compared: an electric field pushes any charge, moving or not, along E for + and against E for −, and can change its speed. A magnetic field pushes only moving charges, sideways, and never changes their speed. Earth\'s field deflects charged particles streaming in from the Sun in exactly this sideways way.',
      ],
      showOnScreen: [
        'The deck\'s F = qvB sinθ figure: a charge at rest with no force arrow, one moving along B with none, one moving across B with the largest arrow, and one at an angle with its velocity split into parts along and across B',
        'A right hand drawn over a velocity arrow (fingers along v), curling toward B, the thumb lighting up as the force; then the flat-hand version; then an electron with the same velocity and its force arrow flipping, labeled "negative: flip it"',
        'The ⊙ and ⊗ symbols as an arrow tip and an arrow tail; the two anchor cases for a + charge (right with ⊗ → up the page; right with B up → ⊙) and the electron versions beside them',
        'A charge moving through B with its force arrow staying at right angles to its velocity as it turns, and a speedometer readout that never changes, with "W = 0"',
        'A side-by-side table: electric force (any charge, along or against E, can change speed) and magnetic force (moving charges only, sideways, never changes speed); then particles from the Sun bending as they meet Earth\'s field',
        'The "Remember" recap: |F| = |q|vB sin θ; zero at rest or along B, largest across B; right-hand rule for +, flip for −; ⊙ out, ⊗ in; F ⊥ v, so W = 0 and the speed is constant',
        'End card: "Up next: The Magnetic Force on a Charge: Worked Examples"',
      ],
      pitfalls: [
        'Pointing the magnetic force along the field, as for an electric force.',
        'Forgetting to flip the right-hand-rule answer for an electron.',
        'Thinking a magnetic field can speed a charge up or slow it down.',
        'Using the full speed v when the velocity is at an angle to B, instead of v sin θ.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-magnetism-mcat'],
      checkpoint: [
        {
          question: 'An electron moves toward the left edge of the page through a uniform magnetic field that points into the page (⊗). Which way does the magnetic force on the electron point?',
          options: [
            'Toward the bottom of the page',
            'Into the page, along the field',
            'Toward the top of the page',
            'To the right, against its motion',
          ],
          correctAnswer: 2,
          explanation:
            'For a positive charge, fingers to the left and curled into the page leave the thumb pointing toward the bottom of the page. The electron is negative, so its force is flipped: toward the top. "Toward the bottom" is the positive-charge answer without the flip; "into the page" points the force along B, but the magnetic force is perpendicular to B; and "to the right" treats the force like friction, but it is perpendicular to the velocity, not against it.',
        },
        {
          question: 'A proton crosses a region of space, and its speed rises steadily the whole way. What can you conclude about that region?',
          options: [
            'A magnetic field acts along its path',
            'An electric field is acting on it',
            'A magnetic field acts across its path',
            'Either kind of field could be doing it',
          ],
          correctAnswer: 1,
          explanation:
            'A magnetic force is always perpendicular to the velocity, so it does no work and cannot change the speed; only an electric field can. "Along its path" gives no magnetic force at all (sin 0° = 0); "across its path" gives the largest magnetic force, but it only turns the proton; and "either kind" misses that a magnetic force can never change a charge\'s speed.',
        },
        {
          question: 'At Earth\'s equator, the field points horizontally north. A proton from the Sun arrives there moving straight down toward the ground. Which way is it deflected?',
          options: [
            'East, across the field',
            'West, across the field',
            'North, along the field',
            'Up, back against its motion',
          ],
          correctAnswer: 0,
          explanation:
            'Right-hand rule for a positive charge: fingers pointing down, curled toward north, leave the thumb pointing east (with east, north and up as x, y and z, (−z) × (+y) = +x). "West" is the answer for an electron, or the right-hand rule without the proton\'s positive sign; "north" points the force along B, but it is perpendicular to B; and "up" makes the force oppose the motion, but it is perpendicular to the velocity.',
        },
      ],
    },
    // ── 4 · The magnetic force on a charge (worked examples) ─────────────
    {
      title: 'The Magnetic Force on a Charge: Worked Examples',
      minutes: 6,
      goal: 'Find the size and direction of the magnetic force on a proton and an electron, work backward from a measured force to the field\'s size and direction, and handle a velocity at an angle to the field.',
      keyPoints: [
        'Size first: |F| = |q|vB sin θ, with sin 90° = 1 for motion across the field and sin 0° = 0 for motion along it.',
        'Direction second: the right-hand rule for a positive charge (fingers along v, curl toward B, thumb along F), then flip it for a negative charge.',
        'Working backward: B = F/(|q|v sin θ) gives the size; for the direction, try ⊙ and ⊗ with the right-hand rule and keep the one that gives the measured force.',
        'Whatever the angle or the charge, F ⊥ v, so the magnetic force does no work and the speed stays the same.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: a field of ⊗ symbols (0.60 T), a proton moving right at 5.0 × 10⁵ m/s with a right hand curling into the page and a force arrow up the page (4.8 × 10⁻¹⁴ N); the electron with the same velocity and its arrow flipped down; then the proton turned to move into the page, along B, and its force arrow vanishing',
        'Example 2: an alpha particle moving up the page at 2.0 × 10⁶ m/s with a 3.2 × 10⁻¹³ N force arrow to the left; B = F/(qv) = 0.50 T; ⊙ tried and rejected (force to the right), ⊗ kept; then the field tilted to 30° with the force halving to 1.6 × 10⁻¹³ N; then a speed readout holding at 2.0 × 10⁶ m/s with "W = 0"',
        'The "Remember" recap of the method: |q|vB sin θ for the size; right-hand rule for +, flip for −; B = F/(|q|v sin θ) to work backward; W = 0, speed constant',
        'End card: "Up next: Circular Motion in a Magnetic Field"',
      ],
      workedExample:
        'Example 1: A uniform magnetic field of 0.60 T points into the page (⊗). A proton (charge +1.6 × 10⁻¹⁹ C) moves toward the right at 5.0 × 10⁵ m/s, across the field. (a) What is the size of the magnetic force on the proton? (b) Which way does the force point? (c) An electron (charge −1.6 × 10⁻¹⁹ C) moves with the same velocity. What force acts on it? (d) The proton is turned to move into the page, along the field, at the same speed. What force acts on it now? (a) |F| = |q|vB sin 90° = (1.6 × 10⁻¹⁹)(5.0 × 10⁵)(0.60) = 4.8 × 10⁻¹⁴ N; (b) right-hand rule for a positive charge: fingers to the right, curled into the page, thumb up the page, so the force points toward the top of the page; (c) the same size, 4.8 × 10⁻¹⁴ N, since |q| is the same, but the electron is negative, so the force is flipped: toward the bottom of the page; (d) zero: moving along the field, θ = 0° and sin 0° = 0. Example 2: An alpha particle (charge +3.2 × 10⁻¹⁹ C) moves toward the top of the page at 2.0 × 10⁶ m/s through a uniform magnetic field perpendicular to the page. It feels a magnetic force of 3.2 × 10⁻¹³ N toward the left edge of the page. (a) What is the size of the field? (b) Does the field point into or out of the page? (c) The same 0.50 T field is turned so that it makes a 30° angle with the particle\'s velocity. What is the size of the force now? (d) How much work does the magnetic force do on the particle as it crosses the field, and what is its speed afterward? (a) The velocity is across the field, so B = F/(|q|v) = (3.2 × 10⁻¹³)/((3.2 × 10⁻¹⁹)(2.0 × 10⁶)) = (3.2 × 10⁻¹³)/(6.4 × 10⁻¹³) = 0.50 T; (b) try out of the page: fingers up, curled out of the page, the thumb points right, the wrong way; into the page: fingers up, curled into the page, the thumb points left, which matches, so B points into the page (⊗), and since the alpha particle is positive, no flip is needed; (c) |F| = |q|vB sin 30° = (3.2 × 10⁻¹³)(0.50) = 1.6 × 10⁻¹³ N, half the perpendicular force; (d) zero work: the force is always perpendicular to the velocity, so the speed stays 2.0 × 10⁶ m/s.',
      pitfalls: [
        'Forgetting to flip the direction for the electron.',
        'Inverting B = F/(|q|v) and getting qv/F.',
        'Using cos 30° instead of sin 30°.',
        'Multiplying the force by a distance to get work, when the force is perpendicular to the motion.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-magnetism-mcat'],
      checkpoint: [
        {
          question: 'An electron (charge −1.6 × 10⁻¹⁹ C) moves toward the bottom of the page at 4.0 × 10⁵ m/s through a uniform 0.25 T field pointing out of the page (⊙). What is the magnetic force on it?',
          options: [
            '1.6 × 10⁻¹⁴ N, toward the left',
            '6.4 × 10⁻¹⁴ N, toward the right',
            '1.6 × 10⁻¹⁴ N, toward the right',
            '1.6 × 10⁻¹⁴ N, out of the page',
          ],
          correctAnswer: 2,
          explanation:
            '|F| = |q|vB = (1.6 × 10⁻¹⁹)(4.0 × 10⁵)(0.25) = 1.6 × 10⁻¹⁴ N. For a positive charge, fingers pointing down the page and curled out of the page leave the thumb pointing left; the electron is negative, so its force is flipped: toward the right. "Toward the left" is the positive-charge answer without the flip; 6.4 × 10⁻¹⁴ N leaves out B; and "out of the page" points the force along B, which a magnetic force never does.',
        },
        {
          question: 'A positive ion (charge +1.6 × 10⁻¹⁹ C) moves toward the right at 4.0 × 10⁵ m/s, across a uniform field perpendicular to the page, and feels a magnetic force of 1.6 × 10⁻¹⁴ N toward the bottom of the page. What is the field?',
          options: [
            '0.25 T, into the page',
            '4.0 T, out of the page',
            '4.0 T, into the page',
            '0.25 T, out of the page',
          ],
          correctAnswer: 3,
          explanation:
            'B = F/(|q|v) = (1.6 × 10⁻¹⁴)/((1.6 × 10⁻¹⁹)(4.0 × 10⁵)) = (1.6 × 10⁻¹⁴)/(6.4 × 10⁻¹⁴) = 0.25 T. Fingers to the right, curled out of the page, leave the thumb pointing down the page, which matches, so B points out of the page (⊙); the ion is positive, so there is no flip. "0.25 T, into the page" has the right size but would push the ion up the page; the two 4.0 T answers invert the ratio, qv/F, and "4.0 T, into the page" has the wrong direction as well.',
        },
        {
          question: 'An alpha particle (charge +3.2 × 10⁻¹⁹ C) moves at 1.5 × 10⁶ m/s through a uniform 0.40 T field, its velocity at 30° to the field. What magnetic force acts on it, and how much work does that force do as the particle moves 1.0 cm?',
          options: [
            'F = 1.9 × 10⁻¹³ N; W = 0',
            'F = 9.6 × 10⁻¹⁴ N; W = 0',
            'F = 1.7 × 10⁻¹³ N; W = 0',
            'F = 9.6 × 10⁻¹⁴ N; W = 9.6 × 10⁻¹⁶ J',
          ],
          correctAnswer: 1,
          explanation:
            '|F| = |q|vB sin 30° = (3.2 × 10⁻¹⁹)(1.5 × 10⁶)(0.40)(0.50) = 9.6 × 10⁻¹⁴ N. The force is always perpendicular to the velocity, so it does no work over any distance. 1.9 × 10⁻¹³ N drops the sin 30°, treating the motion as perpendicular; 1.7 × 10⁻¹³ N uses cos 30° instead of sin 30°; and 9.6 × 10⁻¹⁶ J multiplies the force by the distance, as if the force pointed along the motion.',
        },
      ],
    },
    // ── 5 · Circular motion in a magnetic field (concepts) ───────────────
    {
      title: 'Circular Motion in a Magnetic Field',
      minutes: 7,
      goal: 'Explain why a charge moving across a uniform magnetic field travels in a circle, predict how the radius and the period depend on speed, mass, charge and field, and find which way the charge circles.',
      keyPoints: [
        'A charge moving at right angles to a uniform field feels a force of constant size, qvB, that is always perpendicular to its velocity. A force like that changes only the direction of motion, so the charge moves in a circle at constant speed: the magnetic force IS the centripetal force, |q|vB = mv²/r.',
        'Solving for the radius: r = mv/(|q|B), which is also p/(|q|B) with p = mv. A faster or heavier particle sweeps a LARGER circle; a stronger field or a bigger charge bends it into a TIGHTER one. The speed never changes, so neither does the radius.',
        'Which way it circles comes from the right-hand rule: at any point, the force points toward the center. In a field out of the page (⊙), a positive charge circles clockwise as you look at the page; in a field into the page (⊗), counterclockwise. A negative charge circles the other way. A proton and an electron with the same velocity circle in opposite senses, and the electron\'s circle is about 1836 times smaller, since its mass is.',
        'The period is the time for one lap: T = 2πr/v = 2πm/(|q|B). The speed cancels: a faster particle runs a bigger circle in exactly the same time. The frequency f = 1/T = |q|B/(2πm) is the same for every particle of one kind in one field, which is how a cyclotron keeps its pushes in step.',
        'A charge that enters at an angle to the field keeps the part of its velocity ALONG the field unchanged, while the part across the field goes around in a circle: the path is a helix wrapped around the field lines. Charged particles from the Sun spiral along Earth\'s field lines toward the poles, where they light up the aurora. A charge fired straight into a field region across its edge turns through a semicircle and comes back out moving the opposite way, 2r from where it went in.',
      ],
      showOnScreen: [
        'A proton entering a region of ⊙ symbols, its force arrow always pointing to the center as it goes around, with |q|vB = mv²/r and a constant speed readout',
        'r = mv/(|q|B) with sliders: v and m up, circle grows; B and q up, circle shrinks',
        'The deck\'s figure: a proton and an electron entering with the same velocity, the proton on a wide arc clockwise in ⊙, the electron on a tiny loop counterclockwise, labeled "× 1836"',
        'Two protons in one field, one fast on a big circle and one slow on a small circle, finishing their laps together on one clock, with T = 2πm/(|q|B)',
        'A proton entering at an angle and corkscrewing along the field lines; Earth\'s field lines funneling particles toward the poles and a curtain of aurora; then a beam crossing the straight edge of a field region, turning through a semicircle and leaving 2r away',
        'The "Remember" recap: magnetic force = centripetal force; r = mv/(|q|B); speed constant; ⊙: + clockwise, ⊗: + counterclockwise, − the other way; T = 2πm/(|q|B), independent of speed; at an angle, a helix',
        'End card: "Up next: Circular Motion in a Magnetic Field: Worked Examples"',
      ],
      pitfalls: [
        'Thinking a faster particle finishes its lap sooner.',
        'Putting B in the numerator of the radius formula.',
        'Giving a proton and an electron the same sense of rotation.',
        'Expecting the radius to shrink over time, as if the field slowed the particle.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-magnetism-mcat'],
      checkpoint: [
        {
          question: 'An electron moves in a circle in a uniform magnetic field that points into the page (⊗). Seen from the front of the page, it circles:',
          options: [
            'Counterclockwise, as seen from the front',
            'Either way, depending on its speed',
            'Neither; it spirals into the page',
            'Clockwise, as seen from the front',
          ],
          correctAnswer: 3,
          explanation:
            'For a positive charge moving right in ⊗, fingers right and curled into the page give a force up the page, toward the center, so a positive charge circles counterclockwise. The electron is negative, so its force is flipped and it circles clockwise. "Counterclockwise" is the positive-charge answer without the flip; the speed sets only the size of the circle, not its sense; and a charge moving across the field has no velocity along it, so it cannot spiral along the field.',
        },
        {
          question: 'In a cyclotron, a slow proton takes 40 ns to complete one lap. A second proton in the same field moves three times as fast. How long does its lap take, and how big is its circle?',
          options: [
            '13 ns, on a circle of the same size',
            '40 ns, on a circle of the same size',
            '40 ns, on a circle 3 times as wide',
            '120 ns, on a circle 3 times as wide',
          ],
          correctAnswer: 2,
          explanation:
            'The radius r = mv/(|q|B) grows with speed, so the circle is three times as wide, but the period T = 2πm/(|q|B) has no v in it: three times the distance at three times the speed takes the same 40 ns. "13 ns" assumes a faster particle finishes sooner on the same path; "40 ns, same size" keeps the period right but forgets that r grows with v; and "120 ns" triples the distance without tripling the speed.',
        },
        {
          question: 'Two identical ions enter the same uniform field at right angles to it. Ion A has four times the kinetic energy of ion B. How do their radii compare?',
          options: [
            'r_A = 2r_B',
            'r_A = 4r_B',
            'r_A = r_B',
            'r_A = r_B/2',
          ],
          correctAnswer: 0,
          explanation:
            'Kinetic energy is ½mv², so four times the kinetic energy means twice the speed, and r = mv/(|q|B) grows in step with v: r_A = 2r_B. "4r_B" treats r as proportional to the kinetic energy rather than the speed; "r_A = r_B" applies the speed-independence of the PERIOD to the radius; and "r_B/2" assumes a more energetic ion is bent more tightly, when it is harder to turn.',
        },
      ],
    },
    // ── 6 · Circular motion in a magnetic field (worked examples) ────────
    {
      title: 'Circular Motion in a Magnetic Field: Worked Examples',
      minutes: 6,
      goal: 'Find the force, radius, period and sense of rotation of a proton and an electron circling in a uniform field, and work backward from a measured radius to a speed.',
      keyPoints: [
        'Force and direction at entry: |F| = |q|vB, by the right-hand rule for a positive charge and flipped for a negative one; that force points to the center, which sets the sense of rotation.',
        'Radius: r = mv/(|q|B) with the particle\'s own mass (proton 1.67 × 10⁻²⁷ kg, electron 9.1 × 10⁻³¹ kg); working backward, v = |q|Br/m.',
        'Period: T = 2πm/(|q|B), the same for every speed; check it with T = 2πr/v.',
        'Doubling the speed doubles the radius and leaves the period unchanged; swapping an electron for a proton at the same speed multiplies the radius by about 1836 and reverses the sense.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: a field of ⊙ symbols (0.25 T), a proton entering from the left at 2.4 × 10⁶ m/s with a downward force arrow (9.6 × 10⁻¹⁴ N), its clockwise circle of radius 0.10 m drawn below the entry point, a lap clock reading 2.6 × 10⁻⁷ s, then a second proton at twice the speed on a 0.20 m circle finishing its lap at the same moment',
        'Example 2: a field of ⊗ symbols (2.0 mT), an electron on a clockwise 1.0 cm circle, the speed solved as 3.5 × 10⁶ m/s, the lap clock at 1.8 × 10⁻⁸ s, then a proton at the same speed on an 18 m counterclockwise arc running off the screen',
        'The "Remember" recap of the method: force to the center by the right-hand rule (flip for −); r = mv/(|q|B) with the right mass; T = 2πm/(|q|B); v = |q|Br/m to work backward',
        'End card: "Up next: Crossed Electric and Magnetic Fields"',
      ],
      workedExample:
        'Example 1: A proton (mass 1.67 × 10⁻²⁷ kg, charge +1.6 × 10⁻¹⁹ C) moving toward the right at 2.4 × 10⁶ m/s enters a uniform 0.25 T magnetic field that points out of the page (⊙), moving at right angles to the field. (a) What are the size and direction of the magnetic force on the proton as it enters? (b) What is the radius of its path? (c) How long does it take to go once around, and which way does it circle? (d) A second proton enters the same field at twice the speed. What are its radius and its period? (a) |F| = |q|vB = (1.6 × 10⁻¹⁹)(2.4 × 10⁶)(0.25) = 9.6 × 10⁻¹⁴ N; right-hand rule for a positive charge: fingers right, curled out of the page, thumb down the page, so the force points toward the bottom of the page; (b) r = mv/(|q|B) = (1.67 × 10⁻²⁷)(2.4 × 10⁶)/((1.6 × 10⁻¹⁹)(0.25)) = (4.0 × 10⁻²¹)/(4.0 × 10⁻²⁰) ≈ 0.10 m; (c) T = 2πm/(|q|B) = 2π(1.67 × 10⁻²⁷)/(4.0 × 10⁻²⁰) ≈ 2.6 × 10⁻⁷ s (check: 2πr/v = 2π(0.10)/(2.4 × 10⁶) ≈ 2.6 × 10⁻⁷ s); the force points down, so the center is below the entry point and the proton circles clockwise; (d) r doubles to 0.20 m, and the period stays 2.6 × 10⁻⁷ s, since T has no v in it. Example 2: An electron (mass 9.1 × 10⁻³¹ kg, charge −1.6 × 10⁻¹⁹ C) moves in a circle of radius 1.0 cm in a uniform 2.0 mT magnetic field that points into the page (⊗). (a) How fast is it moving? (b) Which way does it circle? (c) How long does one lap take, and what happens to its speed after many laps? (d) A proton (mass 1.67 × 10⁻²⁷ kg) enters the same field at the same speed. What are the radius and sense of its circle? (a) v = |q|Br/m = (1.6 × 10⁻¹⁹)(2.0 × 10⁻³)(0.010)/(9.1 × 10⁻³¹) = (3.2 × 10⁻²⁴)/(9.1 × 10⁻³¹) ≈ 3.5 × 10⁶ m/s; (b) for a positive charge moving right in ⊗, the force points up the page, so a positive charge circles counterclockwise; the electron is negative, so its force is flipped and it circles clockwise; (c) T = 2πm/(|q|B) = 2π(9.1 × 10⁻³¹)/((1.6 × 10⁻¹⁹)(2.0 × 10⁻³)) ≈ 1.8 × 10⁻⁸ s, and the speed stays 3.5 × 10⁶ m/s however many laps it makes, since the force does no work; (d) r = mv/(|q|B) = (1.67 × 10⁻²⁷)(3.5 × 10⁶)/(3.2 × 10⁻²²) ≈ 18 m, about 1,800 times the electron\'s 1.0 cm (the ratio of the two masses), and the positive proton circles the other way, counterclockwise.',
      pitfalls: [
        'Using the proton\'s mass for the electron, or the other way round.',
        'Leaving millitesla or centimeters unconverted.',
        'Doubling or halving the period when the speed doubles.',
        'Giving the electron the positive-charge sense of rotation.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-magnetism-mcat'],
      checkpoint: [
        {
          question: 'A proton (mass 1.67 × 10⁻²⁷ kg, charge 1.6 × 10⁻¹⁹ C) moves at 1.5 × 10⁶ m/s at right angles to a uniform 0.30 T field. What is the radius of its circular path?',
          options: ['2.8 × 10⁻⁵ m', '5.2 × 10⁻² m', '1.0 × 10⁻¹ m', '4.7 × 10⁻³ m'],
          correctAnswer: 1,
          explanation:
            'r = mv/(|q|B) = (1.67 × 10⁻²⁷)(1.5 × 10⁶)/((1.6 × 10⁻¹⁹)(0.30)) = (2.5 × 10⁻²¹)/(4.8 × 10⁻²⁰) ≈ 5.2 × 10⁻² m, about 5 cm. 2.8 × 10⁻⁵ m uses the electron\'s mass; 1.0 × 10⁻¹ m is the diameter, 2r, not the radius; and 4.7 × 10⁻³ m multiplies by B instead of dividing.',
        },
        {
          question: 'An electron (mass 9.1 × 10⁻³¹ kg) moves in a circle 4.0 mm across in a uniform 5.0 mT field. How fast is it moving?',
          options: ['3.5 × 10⁶ m/s', '9.6 × 10² m/s', '1.8 × 10⁹ m/s', '1.8 × 10⁶ m/s'],
          correctAnswer: 3,
          explanation:
            'The circle is 4.0 mm across, so r = 2.0 mm = 2.0 × 10⁻³ m, and v = |q|Br/m = (1.6 × 10⁻¹⁹)(5.0 × 10⁻³)(2.0 × 10⁻³)/(9.1 × 10⁻³¹) = (1.6 × 10⁻²⁴)/(9.1 × 10⁻³¹) ≈ 1.8 × 10⁶ m/s. 3.5 × 10⁶ m/s uses the 4.0 mm diameter as the radius; 9.6 × 10² m/s uses the proton\'s mass; and 1.8 × 10⁹ m/s leaves the radius in millimeters, a speed faster than light.',
        },
        {
          question: 'A proton (mass 1.67 × 10⁻²⁷ kg) circles in a uniform 0.50 T field that points out of the page (⊙). How long does one lap take, and which way does it circle as seen from the front?',
          options: [
            '1.3 × 10⁻⁷ s, counterclockwise',
            '2.1 × 10⁻⁸ s, clockwise',
            '1.3 × 10⁻⁷ s, clockwise',
            '7.1 × 10⁻¹¹ s, clockwise',
          ],
          correctAnswer: 2,
          explanation:
            'T = 2πm/(|q|B) = 2π(1.67 × 10⁻²⁷)/((1.6 × 10⁻¹⁹)(0.50)) ≈ 1.3 × 10⁻⁷ s, whatever its speed. Moving right in ⊙, a positive charge is pushed down the page, toward the center below it, so it circles clockwise. "Counterclockwise" is the sense for a negative charge, or the right-hand rule run backward; 2.1 × 10⁻⁸ s leaves out the 2π; and 7.1 × 10⁻¹¹ s uses the electron\'s mass.',
        },
      ],
    },
    // ── 7 · Crossed electric and magnetic fields (concepts) ──────────────
    {
      title: 'Crossed Electric and Magnetic Fields',
      minutes: 7,
      goal: 'Combine the electric and magnetic forces on a moving charge, set up crossed fields so the two forces cancel at one speed, predict what happens to faster and slower particles, and explain the Hall voltage.',
      keyPoints: [
        'A charge in both fields feels both forces, and they add as vectors (together, the Lorentz force). The electric force qE acts whether or not the charge moves: along E for a positive charge, against E for a negative one. The magnetic force |q|vB acts only on a moving charge, sideways by the right-hand rule, flipped for a negative charge.',
        'A velocity selector crosses the fields: E, B and v are all at right angles, arranged so the two forces point opposite ways. Example: plates with the top one positive make E point down, so a positive charge moving right is pushed down by E; with B into the page (⊗), the right-hand rule pushes it up. The forces cancel when qE = qvB, so only particles with v = E/B go straight through. The units check: (V/m)/T = m/s.',
        'The selected speed does not depend on the charge or the mass. Both forces carry the same q, so it cancels; a negative particle has BOTH forces flipped, so they still cancel at v = E/B; and mass never enters, since nothing accelerates at the balance speed.',
        'Off the selected speed, the forces no longer cancel. A faster particle feels a bigger magnetic force (it grows with v) and bends toward the side the magnetic force points; a slower particle bends the way the electric force points. A selector is the first stage of many instruments that sort ions, because it hands them all one known speed.',
        'The Hall effect is a selector that builds itself. Send a current along a flat strip in a magnetic field perpendicular to it: the moving charges are pushed to one edge, leaving the other edge with the opposite charge. That makes an electric field across the strip, and charges pile up until qE = qvB, so E = vB and the Hall voltage across a strip of width w is ΔV = vBw. The sign of ΔV shows whether the moving charges are positive or negative, and Hall sensors use it to measure fields.',
      ],
      showOnScreen: [
        'A charge with an electric-force arrow along E and a magnetic-force arrow from the right-hand rule, added tip to tail; then the same charge at rest, keeping its electric arrow and losing its magnetic one',
        'The deck\'s crossed-fields figure: horizontal plates (top +), E arrows pointing down, ⊗ symbols filling the gap, a proton entering from the left with qE down and qvB up, the arrows equal at v = E/B, and the beam passing straight through',
        'An electron entering at the same speed: both arrows flip, still equal, still straight; then a heavy ion at the same speed, also straight, with "q and m cancel"',
        'Three protons entering together: the fast one curving up (magnetic wins), the slow one curving down (electric wins), the one at E/B flying straight into a slit',
        'A flat strip carrying current in a ⊗ field: carriers drifting to the top edge, + and − building on the two edges, an E arrow across the strip growing until qE = qvB, and a voltmeter across the width reading ΔV = vBw; then the same strip with negative carriers and the voltmeter reading flipped',
        'The "Remember" recap: forces add; selector: E ⊥ B ⊥ v, forces opposed, v = E/B; independent of q, m and sign; faster → magnetic side, slower → electric side; Hall: E = vB, ΔV = vBw, sign shows the carrier',
        'End card: "Up next: Crossed Electric and Magnetic Fields: Worked Examples"',
      ],
      pitfalls: [
        'Thinking the selected speed depends on the particle\'s charge or mass.',
        'Expecting a negative particle at v = E/B to be deflected.',
        'Sending a too-fast particle toward the electric-force side.',
        'Arranging B so that both forces point the same way.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-induction-mcat', 'mcat-physics-electricity-magnetism-mcat'],
      checkpoint: [
        {
          question: 'Protons at the selected speed pass straight through a velocity selector. A proton entering along the same line at twice that speed will:',
          options: [
            'Bend the way the electric force points',
            'Go straight, since E/B has not changed',
            'Bend the way the magnetic force points',
            'Go straight, but slow down to E/B',
          ],
          correctAnswer: 2,
          explanation:
            'The electric force qE is the same at any speed, but the magnetic force qvB doubles, so it now beats the electric force and the proton bends toward the magnetic-force side. "The way the electric force points" is the result for a SLOWER particle; "go straight" forgets that the balance holds only at v = E/B; and "slow down to E/B" imagines the fields adjusting the speed until it balances, but nothing in the selector does that: off the selected speed, a particle simply bends.',
        },
        {
          question: 'A velocity selector passes ions at one speed. Which change makes it pass a SLOWER beam instead?',
          options: [
            'Increase E, keeping B the same',
            'Use ions with a larger mass',
            'Reverse the direction of B',
            'Increase B, keeping E the same',
          ],
          correctAnswer: 3,
          explanation:
            'The selected speed is v = E/B, so a larger B (or a smaller E) lowers it. Increasing E raises the selected speed; mass does not appear in v = E/B, so heavier ions pass at the same speed; and reversing B makes the magnetic force point the same way as the electric force, so no particle goes straight.',
        },
        {
          question: 'Two flat strips carry the same current in the same direction through the same magnetic field. In strip A the moving charges are positive; in strip B they are negative. Their Hall voltages are:',
          options: [
            'Opposite in sign: the other edge is higher',
            'The same in sign, as the current is the same',
            'Zero in B, as negative carriers feel no force',
            'The same in sign, but larger in strip B',
          ],
          correctAnswer: 0,
          explanation:
            'For the same current, negative carriers move the opposite way to positive ones, and the flipped sign of q flips the force again, so both kinds are pushed toward the SAME edge. Positive carriers make that edge high; negative carriers make it low, so the Hall voltages have opposite signs. "The same in sign" assumes the current direction alone sets the sign; "zero" forgets that negative charges feel the flipped force, not no force; and "larger in B" still gives both strips the same sign, which is the error.',
        },
      ],
    },
    // ── 8 · Crossed electric and magnetic fields (worked examples) ───────
    {
      title: 'Crossed Electric and Magnetic Fields: Worked Examples',
      minutes: 6.5,
      goal: 'Set up a velocity selector from plate voltages and a field, find the selected speed and the fate of particles that miss it, and follow selected ions through a magnetic field to the spot where they land.',
      keyPoints: [
        'Selector method: E = ΔV/d between the plates, pointing from the + plate to the − plate; choose B so the magnetic force on the particle opposes the electric force (right-hand rule for a positive charge, flipped for a negative one); then v = E/B.',
        'Off the selected speed, compare qE with qvB: faster particles bend toward the magnetic-force side, slower ones toward the electric-force side. At v = E/B, the charge\'s size, sign and mass make no difference.',
        'A mass spectrometer follows the selector with a region of magnetic field alone. Each ion arrives at v = E/B, turns through a semicircle of radius r = mv/(|q|B) and lands on a detector 2r from the entry slit. With v, q and B the same for every ion, r is proportional to m, so isotopes land at different spots; strictly the machine sorts by m/q, so an ion with twice the mass and twice the charge lands on the same spot. Takeaway: the selector fixes v, the field turns mass into distance.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: horizontal plates 1.0 cm apart with 200 V across them, top plate +, E arrows down (2.0 × 10⁴ V/m), ⊗ symbols (0.050 T), a proton entering from the left with qE down and qvB up, the readout v = 4.0 × 10⁵ m/s; then a 6.0 × 10⁵ m/s proton curving up toward the + plate (qvB 4.8 × 10⁻¹⁵ N beats qE 3.2 × 10⁻¹⁵ N), and an electron at 4.0 × 10⁵ m/s with both arrows flipped, flying straight',
        'Example 2: a selector feeding a field of ⊙ symbols (0.25 T), a carbon-12 ion curving clockwise through a 1.0 cm-radius semicircle to a detector 2.0 cm from the slit, a carbon-13 ion landing 2.2 cm away (1.7 mm farther), and a doubly charged 4.0 × 10⁻²⁶ kg ion landing exactly on the carbon-12 spot',
        'The "Remember" recap of the method (shared ideas only): E = ΔV/d; B chosen so the forces oppose; v = E/B; faster → magnetic side, slower → electric side; q, sign and m do not matter at E/B',
        'End card: "Up next: The Magnetic Force on a Wire"',
      ],
      workedExample:
        'Example 1: Two horizontal parallel plates 1.0 cm apart have a potential difference ΔV = 200 V across them, with the top plate positive. A uniform 0.050 T magnetic field fills the gap, perpendicular to the page. Protons enter from the left, moving toward the right. (a) What are the size and direction of the electric field between the plates? (b) Should B point into or out of the page for the magnetic force to oppose the electric force on a proton? (c) What speed passes straight through? (d) What happens to a proton entering at 6.0 × 10⁵ m/s, and to an electron entering at the selected speed? (a) E = ΔV/d = 200/0.010 = 2.0 × 10⁴ V/m, pointing down, from the + plate to the − plate; (b) the electric force on a proton points down, along E, so the magnetic force must point up: fingers to the right, curled into the page, leave the thumb pointing up, so B points into the page (⊗); (c) v = E/B = (2.0 × 10⁴)/(0.050) = 4.0 × 10⁵ m/s; (d) the faster proton feels qvB = (1.6 × 10⁻¹⁹)(6.0 × 10⁵)(0.050) = 4.8 × 10⁻¹⁵ N up against qE = (1.6 × 10⁻¹⁹)(2.0 × 10⁴) = 3.2 × 10⁻¹⁵ N down, so the magnetic force wins and it bends up, toward the + plate; the electron is negative, so both forces flip (electric up, magnetic down) and stay equal in size, and it goes straight through. Example 2: In a mass spectrometer, singly charged carbon-12 ions (charge +1.6 × 10⁻¹⁹ C, mass 2.0 × 10⁻²⁶ kg) pass a velocity selector with E = 5.0 × 10³ V/m and B = 0.25 T, then enter a region where only a 0.25 T field acts, pointing out of the page (⊙). They enter moving toward the right, turn through a semicircle and land on a detector beside the entry slit. (a) What speed do the ions have? (b) What is the radius of their path, and which way do they curve? (c) How far from the slit do carbon-12 ions land, and how far do carbon-13 ions (mass 13/12 as large, same charge) land? (d) Where does an ion of mass 4.0 × 10⁻²⁶ kg with charge +3.2 × 10⁻¹⁹ C land? (a) v = E/B = (5.0 × 10³)/(0.25) = 2.0 × 10⁴ m/s; (b) r = mv/(|q|B) = (2.0 × 10⁻²⁶)(2.0 × 10⁴)/((1.6 × 10⁻¹⁹)(0.25)) = (4.0 × 10⁻²²)/(4.0 × 10⁻²⁰) = 1.0 × 10⁻² m = 1.0 cm; moving right in ⊙, a positive ion is pushed down the page, so it curves down, clockwise; (c) a semicircle lands 2r away: 2.0 cm for carbon-12; r is proportional to m, so carbon-13 lands at 2.0 × 13/12 ≈ 2.2 cm, about 1.7 mm farther; (d) the selector passes it at the same 2.0 × 10⁴ m/s, whatever its charge, and r = (4.0 × 10⁻²⁶)(2.0 × 10⁴)/((3.2 × 10⁻¹⁹)(0.25)) = (8.0 × 10⁻²²)/(8.0 × 10⁻²⁰) = 1.0 cm: it lands 2.0 cm from the slit, on the carbon-12 spot, because its m/q is the same.',
      pitfalls: [
        'Leaving the plate gap in centimeters in E = ΔV/d.',
        'Multiplying E by B instead of dividing.',
        'Expecting the electron to be deflected at the selected speed.',
        'Giving the radius, r, as the landing distance instead of the diameter, 2r.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-induction-mcat', 'mcat-physics-electricity-magnetism-mcat', 'mcat-lab-methods-spectroscopy-assays-mcat'],
      mcatOnly: [
        'A mass spectrometer follows the selector with a region of magnetic field alone. Each ion arrives at v = E/B, turns through a semicircle of radius r = mv/(|q|B) and lands on a detector 2r from the entry slit. With v, q and B the same for every ion, r is proportional to m, so isotopes land at different spots; strictly the machine sorts by m/q, so an ion with twice the mass and twice the charge lands on the same spot. Takeaway: the selector fixes v, the field turns mass into distance.',
      ],
      mcatOnlyQuestions: [2],
      checkpoint: [
        {
          question: 'A velocity selector has plates 2.0 cm apart with ΔV = 300 V across them and a 0.030 T magnetic field crossing the gap. What speed passes straight through?',
          options: ['5.0 × 10³ m/s', '4.5 × 10² m/s', '1.0 × 10⁴ m/s', '5.0 × 10⁵ m/s'],
          correctAnswer: 3,
          explanation:
            'E = ΔV/d = 300/0.020 = 1.5 × 10⁴ V/m, and v = E/B = (1.5 × 10⁴)/(0.030) = 5.0 × 10⁵ m/s. 5.0 × 10³ m/s leaves the gap as 2.0 instead of 0.020 m; 4.5 × 10² m/s multiplies E by B instead of dividing; and 1.0 × 10⁴ m/s divides the voltage by B, skipping the step from ΔV to E.',
        },
        {
          question: 'In a velocity selector the bottom plate is positive and B points out of the page (⊙). An electron enters from the left, moving right, FASTER than the selected speed. Which way does it bend?',
          options: [
            'Down, toward the + plate',
            'Up, toward the − plate',
            'Straight through, undeflected',
            'Out of the page, along B',
          ],
          correctAnswer: 1,
          explanation:
            'E points up, from the bottom + plate, so the electron is pushed down, against E. For a positive charge, fingers right and curled out of the page give a thumb pointing down; the electron is negative, so its magnetic force is flipped: up. Too fast, the magnetic force wins and the electron bends up, toward the − plate. "Down" is what a too-SLOW electron does; "straight through" holds only at v = E/B; and "along B" points a force along the field, which neither force does here.',
        },
        {
          question: 'Singly charged ions (charge +1.6 × 10⁻¹⁹ C, mass 6.4 × 10⁻²⁶ kg) leave a velocity selector at 1.0 × 10⁴ m/s and enter a uniform 0.40 T field, where they turn through a semicircle onto a detector beside the entry slit. How far from the slit do they land?',
          options: ['2.0 cm', '1.0 cm', '3.1 cm', '0.32 cm'],
          correctAnswer: 0,
          explanation:
            'r = mv/(|q|B) = (6.4 × 10⁻²⁶)(1.0 × 10⁴)/((1.6 × 10⁻¹⁹)(0.40)) = (6.4 × 10⁻²²)/(6.4 × 10⁻²⁰) = 1.0 × 10⁻² m = 1.0 cm, and after a semicircle the ion lands a diameter away: 2r = 2.0 cm. 1.0 cm gives the radius instead of the diameter; 3.1 cm is the length of the semicircular path, πr, not the straight-line distance; and 0.32 cm puts B in the numerator, mvB/q, then doubles it.',
        },
      ],
    },
  ],
}
