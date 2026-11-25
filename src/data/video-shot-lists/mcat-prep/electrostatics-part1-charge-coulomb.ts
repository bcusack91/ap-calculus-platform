import type { ShotList } from '../types'

/**
 * Shot list: MCAT Physics — Electrostatics Part 1: Charge & Coulomb's Law
 * (topic mcat-physics-electricity-electrostatics-mcat; the first of three "Electric Force, Field &
 * Potential" video parts. Part 2 is the electric field, Part 3 is electric potential and energy).
 *
 * Sources: the MCAT lesson (src/data/interactive-lessons/mcat-mcat-physics-electricity-electrostatics-mcat-part1..4.ts;
 * Part 1's "Electric Charge", "Conductors vs. Insulators", "Coulomb's Law (Qualitative Picture)" and
 * "Worked Example — Ratio Reasoning with Coulomb's Law" are this video's share, while its field, potential,
 * equipotential and dipole sections and lesson Parts 2–4 belong to video Parts 2 and 3), the AP Physics 2
 * lessons physics2-electrostatics-part1..7.ts (charge, Coulomb's law, problem solving, conductors and
 * charging, conservation and quantization, superposition and equilibrium, synthesis), the Coulomb's-law
 * figure in src/data/deck-figures/mcat-cp-electrostatics.ts, and the exit pools to avoid (the MCAT
 * lesson-built pool and the electric-charge-coulombs-law items in src/data/exit-quizzes/ap-physics-2.ts).
 * Eight Manim clips in four pairs (owner format, Nov 2026): a CONCEPT clip that teaches the idea and ends
 * on the "Remember" recap, then a WORKED-EXAMPLES clip with two examples, each shown in full with lettered
 * parts and a pause-and-try prompt before the solution. Concept clips get conceptual checkpoint
 * questions; worked-example clips get questions that mirror their two examples with new numbers.
 * Clips 1–2 follow "Electric Charge" (MCAT Part 1; AP Parts 1 and 5). Clips 3–4 follow "Conductors vs.
 * Insulators" (MCAT Part 1; AP Parts 4 and 5: charging by friction, conduction and induction,
 * polarization, sharing between identical spheres). Clips 5–6 follow "Coulomb's Law" and the ratio
 * worked example (MCAT Part 1; AP Parts 2, 3 and 7). Clips 7–8 follow superposition of forces and
 * equilibrium points (AP Parts 6 and 7); the MCAT lesson's own superposition section (Part 4,
 * Strategy 2) is about fields and potentials and belongs to video Part 2.
 *
 * REUSE FOR AP PHYSICS 2 (topic electric-charge-coulombs-law): each clip is cut into sections, about
 * one per key point, and the AP lesson takes only the SHARED sections. MCAT-only material sits in key
 * points of its own, listed word for word in `mcatOnly`, with any question that depends on it listed
 * in `mcatOnlyQuestions`:
 *   clip 3: body fluids conduct, the lipid bilayer and myelin insulate (1 key point, question 3)
 * Clips 1, 2, 4, 5, 6, 7 and 8 are shared in full, and both examples in every examples clip are
 * valid for both courses. Every "Remember" recap covers shared ideas only.
 * Symbols follow the AP equation sheet: |F| = k|q₁q₂|/r² with k = 9.0 × 10⁹ N·m²/C² (the lessons
 * quote 8.99 × 10⁹), e = 1.6 × 10⁻¹⁹ C, m_e = 9.1 × 10⁻³¹ kg. Coulomb's law is always used with
 * magnitudes, and every direction comes from like/unlike charges, stated on screen.
 *
 * The checkpoint questions are what a YouTube viewer answers at studymondo.com/v/<code>
 * (src/data/video-short-links.ts). Codes (fixed by the series plan): charge1/charge2,
 * charging1/charging2, coulomb1/coulomb2, forces1/forces2. They use new scenarios and numbers,
 * so they never repeat an exit-quiz item or a worked example.
 */
export const shotList: ShotList = {
  courseSlug: 'mcat-prep',
  topicSlug: 'mcat-physics-electricity-electrostatics-mcat',
  title: 'Electrostatics Part 1: Charge & Coulomb\'s Law',
  overview:
    'Eight animated clips in four pairs that build electrostatics from the ground up: what electric charge is and why it is quantized and conserved, how conductors and insulators differ and how objects get charged by friction, contact and induction, how Coulomb\'s law sets the force between two charges, and how the forces from several charges add as vectors. Each idea gets a concept clip followed by a worked-examples clip in which every problem is shown in full, with a moment to pause and try it before the solution. Narration stays exam-neutral, and each clip is cut into sections so that introductory physics lessons can reuse the shared ones; the cell-membrane link sits in a section of its own. Each clip ends with three checkpoint questions. Part 2 continues with the electric field.',
  clips: [
    // ── 1 · Electric charge (concepts) ───────────────────────────────────
    {
      title: 'Electric Charge',
      minutes: 7,
      goal: 'Describe the two kinds of charge and how they interact, explain how an object becomes charged by gaining or losing electrons, and use quantization and conservation to judge whether a charge or a change in charge is possible.',
      keyPoints: [
        'Charge is a basic property of matter, like mass, and it comes in two kinds. Protons carry +e, electrons carry −e and neutrons carry none, with e = 1.6 × 10⁻¹⁹ C. The SI unit is the coulomb (C), an enormous amount: everyday static charges are microcoulombs (μC, 10⁻⁶ C) or nanocoulombs (nC, 10⁻⁹ C).',
        'The interaction rule: like charges repel, unlike charges attract. Every electric force, field and circuit traces back to this one rule.',
        'A neutral object has equal numbers of protons and electrons; a net charge means an imbalance. In a solid only electrons move, because protons are locked in nuclei: gaining electrons makes an object negative, losing them makes it positive. An ion such as Na⁺ has lost one electron; Cl⁻ has gained one.',
        'Charge is quantized: every net charge is a whole-number multiple of e, q = ne with n an integer, so the number of extra or missing electrons is n = |q|/e. A reading that works out to 1.5e or 2.5e cannot be right.',
        'Charge is conserved: the total charge of an isolated system never changes. Rubbing a balloon on hair moves electrons from the hair to the balloon, leaving equal and opposite charges. Even when a neutron in a nucleus turns into a proton, an electron is created with it (along with a neutral antineutrino), so the total stays zero.',
        'Charging moves charge, not noticeable mass: an electron is only 9.1 × 10⁻³¹ kg, so even a trillion extra electrons add about 10⁻¹⁸ kg.',
      ],
      showOnScreen: [
        'An atom model: red protons labelled +e, grey neutrons labelled 0, blue electrons labelled −e, with e = 1.6 × 10⁻¹⁹ C beneath; then a scale bar from 1 C down to 1 μC and 1 nC',
        'The interaction rule as pairs of charges: + and + pushed apart, − and − pushed apart, + and − pulled together, force arrows on each',
        'A neutral block with matching + and − counters; electrons (only the blue counters) hop on and the block turns negative, hop off and it turns positive; a sodium atom losing one electron to become Na⁺',
        'A number line of allowed charges at e, 2e, 3e…, with 1.5e and 2.5e struck through, and n = |q|/e',
        'A balloon rubbed on hair: blue electrons crossing from the hair to the balloon, the tally reading −Q on the balloon and +Q on the hair, total 0; then a neutron becoming a proton plus an electron and a neutral antineutrino, 0 = (+e) + (−e) + 0',
        'A balance that does not budge as a trillion electrons are added, with the mass readout of about 10⁻¹⁸ kg',
        'The "Remember" recap: two kinds of charge, like repel and unlike attract; e = 1.6 × 10⁻¹⁹ C; only electrons move in solids; q = ne, a whole number of e; total charge is conserved',
        'End card: "Up next: Electric Charge: Worked Examples"',
      ],
      pitfalls: [
        'Saying protons move when a solid is charged: only electrons transfer.',
        'Thinking rubbing creates charge rather than moving it.',
        'Getting the sign backwards: gaining electrons makes an object negative.',
        'Accepting a charge that is not a whole-number multiple of e.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat'],
      checkpoint: [
        {
          question: 'Three small charged beads hang near each other. Bead A repels bead B, bead B attracts bead C, and bead C is negative. What are the charges on A and B?',
          options: [
            'A negative and B negative',
            'A positive and B negative',
            'A positive and B positive',
            'A negative and B positive',
          ],
          correctAnswer: 2,
          explanation:
            'B attracts the negative bead C, and B is certainly charged because A repels it (a neutral object can be attracted, but never repelled), so B is positive. A repels B, so A has the same sign: positive. "Both negative" reads attraction as like charges; "A positive and B negative" makes B the same sign as C, which would repel; and "A negative and B positive" treats A\'s repulsion of B as an attraction.',
        },
        {
          question: 'A tiny oil drop carries a charge of −6.4 × 10⁻¹⁹ C. A moment later its charge reads −3.2 × 10⁻¹⁹ C. What happened to the drop?',
          options: [
            'It lost two electrons',
            'It gained two electrons',
            'It gained two protons',
            'It lost four electrons',
          ],
          correctAnswer: 0,
          explanation:
            'The charge went from −4e to −2e: it became less negative by 2e, so the drop lost two electrons. Gaining electrons would make it MORE negative; protons are locked in nuclei and do not move on and off a drop; and "four electrons" counts the starting excess of 4e instead of the change.',
        },
        {
          question: 'In one radioactive decay, a neutron inside a nucleus turns into a proton, and other particles are emitted. What must the TOTAL charge of the emitted particles be?',
          options: [
            'Zero, since the neutron had no charge',
            '+e, matching the new proton',
            'Any charge: decays need not conserve it',
            '−e, so the total charge stays zero',
          ],
          correctAnswer: 3,
          explanation:
            'Charge is conserved in every process: before the decay the total is 0, and after it there is a proton with +e, so the emitted particles must carry −e in total (an electron, −e, and a neutral antineutrino). "Zero" assumes the products must be neutral like the neutron, when the proton\'s +e has to be balanced; "+e, matching the new proton" copies the proton instead of balancing it, which would make the total +2e; and conservation of charge holds in nuclear decays as everywhere else.',
        },
      ],
    },
    // ── 2 · Electric charge (worked examples) ────────────────────────────
    {
      title: 'Electric Charge: Worked Examples',
      minutes: 5.5,
      goal: 'Convert between a number of electrons and a charge, use conservation to find a partner object\'s charge, track a charge as electrons are added or removed, and test whether a reading is possible.',
      keyPoints: [
        'Count first: q = ±ne. Extra electrons give a negative charge, missing electrons a positive one, and n = |q|/e turns a charge back into a count.',
        'Conservation fixes the partner: whatever one object gains, the other loses, so two objects rubbed together carry equal and opposite charges.',
        'Track electrons from where the object starts: removing electrons makes its charge more positive, adding them makes it more negative, so start from the existing excess or shortage.',
        'Check quantization at the end: divide by e, and a result that is not a whole number means the reading is wrong.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: a comb pulled through hair with 2.5 × 10¹² electrons crossing to the comb, the tally −0.40 μC on the comb and +0.40 μC on the hair, then the comb on a balance with its mass change of 2.3 × 10⁻¹⁸ kg',
        'Example 2: a metal sphere with an excess of 3.5 × 10¹⁰ electrons, 4.5 × 10¹⁰ electrons being pulled off, the counter passing zero and ending at a shortage of 1.0 × 10¹⁰ (+1.6 nC), then the reading 5.6 × 10⁻¹⁹ C ÷ e = 3.5 struck through',
        'The "Remember" recap of the method: q = ne; extra electrons negative, missing electrons positive; partners carry equal and opposite charge; start from the existing excess; divide by e to check',
        'End card: "Up next: Conductors, Insulators & Charging"',
      ],
      workedExample:
        'Example 1: A plastic comb, initially neutral, is pulled through dry hair and picks up 2.5 × 10¹² electrons. Use e = 1.6 × 10⁻¹⁹ C and m_e = 9.1 × 10⁻³¹ kg. (a) What is the comb\'s charge, in coulombs and in microcoulombs? (b) What is the charge on the hair? (c) By how much does the comb\'s mass change? (a) q = −ne = −(2.5 × 10¹²)(1.6 × 10⁻¹⁹) = −4.0 × 10⁻⁷ C = −0.40 μC, negative because the comb gained electrons; (b) charge is conserved and the two started neutral, so the hair has +4.0 × 10⁻⁷ C = +0.40 μC; (c) Δm = (2.5 × 10¹²)(9.1 × 10⁻³¹ kg) ≈ 2.3 × 10⁻¹⁸ kg more, far too little to weigh. Example 2: A small metal sphere carries a charge of −5.6 nC. Use e = 1.6 × 10⁻¹⁹ C. (a) Does the sphere have an excess or a shortage of electrons, and how many? (b) It then loses 4.5 × 10¹⁰ electrons. What is its new charge? (c) Later, a careless reading gives a bead\'s charge as 5.6 × 10⁻¹⁹ C. Could that be right? (a) The charge is negative, so it is an excess: n = |q|/e = (5.6 × 10⁻⁹)/(1.6 × 10⁻¹⁹) = 3.5 × 10¹⁰ electrons; (b) removing 4.5 × 10¹⁰ electrons from an excess of 3.5 × 10¹⁰ leaves a shortage of 1.0 × 10¹⁰, so q = +(1.0 × 10¹⁰)(1.6 × 10⁻¹⁹) = +1.6 × 10⁻⁹ C = +1.6 nC; (c) (5.6 × 10⁻¹⁹)/(1.6 × 10⁻¹⁹) = 3.5, not a whole number, so no object can carry that charge.',
      pitfalls: [
        'Dividing the number of electrons by e instead of multiplying.',
        'Giving the hair the same sign as the comb.',
        'Ignoring the starting excess and using only the electrons that were removed.',
        'Reporting a number of electrons with a coulomb unit attached.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat'],
      checkpoint: [
        {
          question: 'A neutral balloon is rubbed on a neutral wool sweater and picks up 4.0 × 10¹¹ electrons from it. What is the charge on the sweater afterward? (e = 1.6 × 10⁻¹⁹ C)',
          options: ['−6.4 × 10⁻⁸ C', '+6.4 × 10⁻⁸ C', '+2.5 × 10³⁰ C', '+4.0 × 10¹¹ C'],
          correctAnswer: 1,
          explanation:
            'The balloon gains q = ne = (4.0 × 10¹¹)(1.6 × 10⁻¹⁹) = 6.4 × 10⁻⁸ C of negative charge, and the sweater loses exactly that many electrons, so it is left with +6.4 × 10⁻⁸ C. −6.4 × 10⁻⁸ C is the balloon\'s charge, given to the wrong object; 2.5 × 10³⁰ C divides the number of electrons by e instead of multiplying; and 4.0 × 10¹¹ C is the number of electrons with a coulomb unit attached.',
        },
        {
          question: 'A metal sphere carries a charge of −6.4 nC. Then 6.0 × 10¹⁰ electrons are removed from it. What is its new charge? (e = 1.6 × 10⁻¹⁹ C)',
          options: ['−3.2 nC', '−16 nC', '+3.2 nC', '+9.6 nC'],
          correctAnswer: 2,
          explanation:
            'The sphere starts with an excess of (6.4 × 10⁻⁹)/(1.6 × 10⁻¹⁹) = 4.0 × 10¹⁰ electrons. Removing 6.0 × 10¹⁰ leaves a shortage of 2.0 × 10¹⁰, so q = +(2.0 × 10¹⁰)(1.6 × 10⁻¹⁹) = +3.2 nC. −3.2 nC gets the count right but keeps the old sign, although the sphere now has fewer electrons than protons; −16 nC adds the electrons instead of removing them (−6.4 − 9.6); and +9.6 nC uses only the electrons removed and ignores the sphere\'s starting charge.',
        },
        {
          question: 'A tiny oil drop carries a charge of −1.12 × 10⁻¹⁸ C. Compared with a neutral drop, it has: (e = 1.6 × 10⁻¹⁹ C)',
          options: [
            'A shortage of 7 electrons',
            'An excess of 70 electrons',
            'An excess of 0.14 electrons',
            'An excess of 7 electrons',
          ],
          correctAnswer: 3,
          explanation:
            'n = |q|/e = (1.12 × 10⁻¹⁸)/(1.6 × 10⁻¹⁹) = 7, and the charge is negative, so the drop has 7 extra electrons. "A shortage" gets the sign backwards, since a missing electron leaves a positive charge; 70 slips a power of ten in the division; and 0.14 divides e by the charge, the ratio upside down, which would mean a fraction of an electron.',
        },
      ],
    },
    // ── 3 · Conductors, insulators and charging (concepts) ───────────────
    {
      title: 'Conductors, Insulators & Charging',
      minutes: 7.5,
      goal: 'Tell conductors from insulators, describe how objects are charged by friction, by contact and by induction and which sign each gives, and explain why a charged object attracts a neutral one.',
      keyPoints: [
        'In a conductor (metals, salt water) charges move freely; in an insulator (rubber, glass, plastic) they stay where they are put. Excess charge on a conductor spreads out to its outer surface, as far apart as the charges can get, and settles where the free charges inside feel no net push; a later clip shows this as a zero field inside the metal.',
        'Charging by friction: rub two different materials, usually insulators, and electrons move from one to the other. The two end up with equal and opposite charges.',
        'Charging by contact (conduction): touch a charged object to a conductor and charge flows between them, so both end with the SAME sign. Two identical conducting spheres that touch share their total charge equally: q_each = (q₁ + q₂)/2, and the total is conserved.',
        'Charging by induction, with no contact: bring a charged rod near a conductor and the conductor\'s electrons shift, toward a positive rod or away from a negative one. Ground the conductor and electrons flow through the ground wire, up from the ground for a positive rod and down into it for a negative rod. Remove the ground, then the rod: the conductor keeps a charge OPPOSITE to the rod\'s.',
        'Polarization: a charged object attracts any neutral object. In a conductor the opposite charge shifts to the near side; in an insulator each atom\'s electron cloud shifts slightly. The nearer, opposite charges feel a stronger force than the farther, like charges, so the net force is an attraction. That is why a charged balloon sticks to a neutral wall.',
        'Biology runs on the same split: the fluids inside and outside a cell are salt solutions, so they conduct (their ions move), while the lipid bilayer between them is an insulator. That is why a membrane can hold excess negative charge on its inner face and positive charge on its outer face, and why the many lipid layers of myelin insulate an axon. Takeaway: body fluids conduct, membranes insulate.',
      ],
      showOnScreen: [
        'A metal bar and a plastic bar each given a dab of charge: on the metal it spreads over the whole outer surface, on the plastic it stays in one spot',
        'Friction: a rubber rod rubbed with fur, blue electrons crossing to the rod, −Q on the rod and +Q on the fur',
        'Contact: a charged sphere touching a neutral identical sphere, charge flowing until each holds half; the formula q_each = (q₁ + q₂)/2 with the total shown unchanged',
        'Induction in four frames: positive rod near a sphere (electrons gather on the near side); a ground wire attached with electrons flowing UP from the ground; the wire removed; the rod removed and the negative charge spreading evenly over the sphere',
        'Polarization: a charged balloon beside a wall, the wall\'s atoms drawn as tiny shifted electron clouds, a long arrow for the near attraction and a short arrow for the far repulsion',
        'A cell membrane in cross-section: conducting fluid on both sides, the insulating bilayer between, − charges lining the inner face and + charges the outer face; then an axon wrapped in myelin',
        'The "Remember" recap (shared ideas only): conductors let charge move, insulators hold it; excess charge sits on a conductor\'s outer surface; friction gives opposite charges, contact the same sign, induction the opposite sign; identical spheres share equally; charged objects attract neutral ones by polarization',
        'End card: "Up next: Conductors & Charging: Worked Examples"',
      ],
      pitfalls: [
        'Thinking positive charge flows through the ground wire: in a metal only electrons move.',
        'Giving an induced charge the same sign as the rod.',
        'Taking an attraction as proof that an object is charged: a neutral object is attracted too.',
        'Expecting charge on an insulator to spread out the way it does on a metal.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat', 'mcat-biological-basis-behavior-mcat'],
      mcatOnly: [
        'Biology runs on the same split: the fluids inside and outside a cell are salt solutions, so they conduct (their ions move), while the lipid bilayer between them is an insulator. That is why a membrane can hold excess negative charge on its inner face and positive charge on its outer face, and why the many lipid layers of myelin insulate an axon. Takeaway: body fluids conduct, membranes insulate.',
      ],
      mcatOnlyQuestions: [2],
      checkpoint: [
        {
          question: 'A positively charged rod is held near a neutral metal sphere without touching it, and the far side of the sphere is connected to the ground by a wire. While the wire is connected, what moves through it?',
          options: [
            'Electrons flow down from the sphere into the ground',
            'Electrons flow up from the ground onto the sphere',
            'Positive charge drains from the sphere to the ground',
            'Nothing flows, as the rod never touches the sphere',
          ],
          correctAnswer: 1,
          explanation:
            'The positive rod attracts electrons, and the ground is a huge supply of them, so electrons flow up the wire onto the sphere. When the wire and then the rod are removed, the sphere keeps that extra negative charge. Electrons flowing down is what a NEGATIVE rod causes, by pushing electrons away; positive charges (protons) do not move through a metal, even though the result looks like positive charge leaving; and induction needs no contact, since the rod acts across the gap.',
        },
        {
          question: 'A small neutral ball hangs from a thread. A positively charged rod X attracts it, and so does a second rod Y. What can you conclude about rod Y?',
          options: [
            'Y must carry a negative charge',
            'Y must carry a positive charge',
            'Y could be charged or neutral',
            'Y is charged, of unknown sign',
          ],
          correctAnswer: 3,
          explanation:
            'A charged object of EITHER sign attracts a neutral object by polarizing it, so the attraction shows that Y is charged but not which sign it has. "Negative" assumes attraction always means opposite charges, which holds only when both objects are charged; "positive" copies rod X\'s sign without a reason; and a neutral rod cannot polarize a neutral ball, so Y cannot be neutral.',
        },
        {
          question: 'Myelin wraps an axon in many layers of lipid membrane, while the fluids inside and outside the axon are salt solutions. In electrical terms:',
          options: [
            'Myelin insulates; the fluids conduct',
            'Myelin conducts; the fluids insulate',
            'All three conduct, as all are wet',
            'All three insulate, as none is a metal',
          ],
          correctAnswer: 0,
          explanation:
            'Salt solutions conduct because their ions are free to move, and lipid layers are insulators, so myelin keeps charge from leaking across the axon\'s membrane. "Myelin conducts" swaps the two roles; "all three conduct" treats anything wet as a conductor, although a lipid layer keeps ions out; and "none is a metal" forgets that ions carry charge in a solution just as electrons do in a metal.',
        },
      ],
    },
    // ── 4 · Conductors, insulators and charging (worked examples) ────────
    {
      title: 'Conductors & Charging: Worked Examples',
      minutes: 6,
      goal: 'Follow charge through repeated contacts between identical conducting spheres, count the electrons that move and which way, and work through charging by induction step by step, including the charge left behind.',
      keyPoints: [
        'Identical spheres in contact: add the charges with their signs, then split the total equally. Do one contact at a time.',
        'To count the electrons that moved, take the change in ONE sphere\'s charge and divide by e. Electrons flow toward the sphere whose charge becomes more negative.',
        'Induction step by step: the rod shifts the electrons; the ground wire lets electrons flow in or out; removing the ground traps the result; removing the rod lets the charge spread over the surface.',
        'The induced charge is opposite to the rod; a charge from contact has the same sign as the rod.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: spheres A (+14 μC) and B (−6 μC) touching, the total +8 μC splitting to +4 μC each, electrons streaming from B to A with the count 6.3 × 10¹³; then A touching a neutral sphere C and both reading +2 μC',
        'Example 2: a positive rod near a neutral sphere, electrons gathering on the near side; a ground wire with 5.0 × 10¹⁰ electrons flowing up; the wire removed, then the rod, and −8.0 nC spreading over the sphere; then a side panel where the rod touches instead and the sphere ends positive',
        'The "Remember" recap of the method: add with signs, split equally, one contact at a time; electrons = change ÷ e; induction gives the opposite sign, contact the same sign',
        'End card: "Up next: Coulomb\'s Law"',
      ],
      workedExample:
        'Example 1: Two identical metal spheres on insulating stands carry charges of +14 μC (sphere A) and −6.0 μC (sphere B). Use e = 1.6 × 10⁻¹⁹ C. (a) What is the total charge of the pair? (b) The spheres touch and are separated. What is the charge on each? (c) How many electrons moved during the contact, and in which direction? (d) Sphere A then touches a third identical sphere C, which is neutral. What is A\'s final charge? (a) +14 + (−6.0) = +8.0 μC; (b) shared equally, +8.0/2 = +4.0 μC each; (c) B went from −6.0 μC to +4.0 μC, a change of +10 μC, so it lost electrons: n = (1.0 × 10⁻⁵)/(1.6 × 10⁻¹⁹) ≈ 6.3 × 10¹³ electrons, flowing from B to A (A went from +14 to +4.0 μC, gaining the same electrons); (d) A and C share +4.0 μC, so A ends with +2.0 μC. Example 2: A positively charged rod is held near a neutral metal sphere on an insulating stand, without touching it. Use e = 1.6 × 10⁻¹⁹ C. (a) How do the charges in the sphere rearrange? (b) The sphere is connected to the ground by a wire while the rod is held in place, and 5.0 × 10¹⁰ electrons flow through the wire. Which way do they flow? (c) The wire is removed, then the rod. What is the sphere\'s final charge, and where does it sit? (d) If the rod had instead touched the sphere, what sign would the sphere end with? (a) Electrons are drawn to the side nearest the rod, leaving the far side positive; the sphere is still neutral overall; (b) up from the ground onto the sphere, pulled by the positive rod; (c) q = −(5.0 × 10¹⁰)(1.6 × 10⁻¹⁹) = −8.0 × 10⁻⁹ C = −8.0 nC, spread evenly over the outer surface once the rod is gone; (d) positive, because contact shares charge and gives the same sign as the rod.',
      pitfalls: [
        'Adding the magnitudes of the charges and ignoring their signs.',
        'Doing two contacts at once instead of one at a time.',
        'Counting electrons from a final charge instead of from the change in charge.',
        'Removing the rod before the ground wire, which lets the electrons flow back.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat'],
      checkpoint: [
        {
          question: 'Identical metal spheres A (−10 μC) and B (+4.0 μC) touch and are separated. What is the charge on each, and which way did electrons flow?',
          options: [
            'Each −3.0 μC; electrons flowed from B to A',
            'Each −7.0 μC; electrons flowed from A to B',
            'Each +3.0 μC; electrons flowed from B to A',
            'Each −3.0 μC; electrons flowed from A to B',
          ],
          correctAnswer: 3,
          explanation:
            'The total is −10 + 4.0 = −6.0 μC, shared equally as −3.0 μC each. A became less negative and B went from positive to negative, so electrons moved from A to B. "B to A" has the right charges but the flow reversed; −7.0 μC drops B\'s sign and adds −10 and −4.0; and +3.0 μC keeps the size but loses the sign of the total.',
        },
        {
          question: 'Identical metal spheres carrying +5.0 μC and −3.0 μC touch and are separated. How many electrons pass from one sphere to the other? (e = 1.6 × 10⁻¹⁹ C)',
          options: ['2.5 × 10¹³', '6.3 × 10¹²', '1.3 × 10¹³', '5.0 × 10¹³'],
          correctAnswer: 0,
          explanation:
            'Each sphere ends with (5.0 − 3.0)/2 = +1.0 μC, so the first sphere\'s charge falls by 4.0 μC: n = (4.0 × 10⁻⁶)/(1.6 × 10⁻¹⁹) = 2.5 × 10¹³ electrons, flowing to it from the negative sphere. 6.3 × 10¹² counts the final charge of 1.0 μC instead of the change; 1.3 × 10¹³ counts the total of 2.0 μC; and 5.0 × 10¹³ adds the magnitudes to 8.0 μC, as if all the charge had crossed.',
        },
        {
          question: 'A negatively charged rod is held near a neutral metal sphere, and while it is there 2.5 × 10¹⁰ electrons flow through a ground wire attached to the sphere. The wire is removed, then the rod. What is the sphere\'s final charge? (e = 1.6 × 10⁻¹⁹ C)',
          options: [
            '−4.0 nC, spread over its whole surface',
            '+4.0 nC, held on the side the rod was on',
            '+4.0 nC, spread over its whole surface',
            '0 nC, since the rod never touched it',
          ],
          correctAnswer: 2,
          explanation:
            'The negative rod pushes electrons down the ground wire, so the sphere is left short of 2.5 × 10¹⁰ electrons: q = +(2.5 × 10¹⁰)(1.6 × 10⁻¹⁹) = +4.0 × 10⁻⁹ C, and with the rod gone it spreads evenly over the conductor\'s surface. −4.0 nC gives the induced charge the rod\'s sign, as contact would; "held on the side the rod was on" forgets that charge on a conductor spreads out once nothing holds it in place; and induction needs no contact, because the ground wire carries the charge.',
        },
      ],
    },
    // ── 5 · Coulomb's law (concepts) ─────────────────────────────────────
    {
      title: 'Coulomb\'s Law',
      minutes: 7,
      goal: 'State Coulomb\'s law, get the direction of the force from the signs of the charges, apply Newton\'s third law to a pair of charges, and predict how the force changes when the charges or the distance change.',
      keyPoints: [
        'Coulomb\'s law gives the size of the force between two point charges: |F| = k|q₁q₂|/r², with k = 1/(4πε₀) = 9.0 × 10⁹ N·m²/C² and r the distance between their centers. It also holds for uniformly charged spheres, measured center to center.',
        'The formula gives a magnitude only. The direction comes from the signs: like charges repel, unlike charges attract, and the force always acts along the line joining the two charges.',
        'Newton\'s third law: each charge feels a force of the SAME size, pointing opposite ways, even when one charge is much larger than the other. The product q₁q₂ is shared.',
        'Ratio reasoning: F is proportional to each charge and to 1/r². Apply each change as a factor and multiply: triple one charge (× 3) and double the distance (× 1/4), and the force becomes 3/4 of what it was.',
        'Like gravity, F = Gm₁m₂/r², the electric force is an inverse-square law, but it can repel as well as attract, and it is enormously stronger: about 10³⁶ times gravity for two protons. Large objects are almost exactly neutral, which is why gravity rules on the scale of planets.',
        'A size check: 1 C is huge, so lab charges are μC or nC, and the forces between them at centimeter distances are a few newtons or less. A huge answer usually means a μC that was never converted to 10⁻⁶ C; a tiny one, a distance left in centimeters.',
      ],
      showOnScreen: [
        'Two point charges with r marked center to center, |F| = k|q₁q₂|/r² building term by term, k = 9.0 × 10⁹ N·m²/C²',
        'The direction table drawn as charge pairs (+ +, − −, + −) with force arrows along the line joining them: repel, repel, attract',
        'A large +2q and a small −q pulling on each other with equal-length arrows, labelled "same F on each"',
        'The ratio dial: a charge tripled (× 3), the distance doubled (× 1/4), and the force bar shrinking to 3/4; then the distance tripled and the bar dropping to 1/9',
        'Two protons with a giant electric-force arrow beside a tiny gravity arrow (ratio about 10³⁶), then a planet whose + and − charges cancel while its mass adds up',
        'A sanity-check meter: lab forces in the 0.001–10 N range, with a 450,000 N answer flagged as a missed μC conversion',
        'The "Remember" recap: |F| = k|q₁q₂|/r²; direction from like/unlike; equal and opposite on each charge; F ∝ q₁q₂ and F ∝ 1/r²; multiply the factors; inverse-square like gravity, but much stronger and it can repel',
        'End card: "Up next: Coulomb\'s Law: Worked Examples"',
      ],
      pitfalls: [
        'Using 1/r instead of 1/r²: doubling the distance cuts the force to a quarter, not a half.',
        'Expecting the larger charge to feel the larger force.',
        'Putting signs into the formula and reading a negative result as a direction.',
        'Leaving μC or cm unconverted.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat'],
      checkpoint: [
        {
          question: 'Two small charged spheres are 6.0 cm apart. To make the force between them four times as large, the distance between their centers must become:',
          options: ['1.5 cm', '3.0 cm', '12 cm', '24 cm'],
          correctAnswer: 1,
          explanation:
            'F ∝ 1/r², so four times the force needs r² to be a quarter, which means r is halved: 3.0 cm. 1.5 cm divides the distance by 4, forgetting that the force depends on r SQUARED; 12 cm moves the charges apart, which weakens the force; and 24 cm makes both mistakes at once.',
        },
        {
          question: 'Both charges in a pair are tripled, and the distance between them is also tripled. Compared with the original force F, the new force is:',
          options: ['Three times F', 'One-third of F', 'Nine times F', 'The same as F'],
          correctAnswer: 3,
          explanation:
            'Tripling both charges multiplies the force by 3 × 3 = 9, and tripling the distance divides it by 3² = 9, so the force is the same as F. "Three times F" divides by 3 for the distance, as if F went as 1/r; "one-third of F" triples only one of the charges; and "nine times F" leaves out the change in distance.',
        },
        {
          question: 'The electric force between two protons is about 10³⁶ times their gravitational attraction. Why, then, does gravity rather than the electric force hold planets in their orbits?',
          options: [
            'Planets are almost exactly neutral',
            'The electric force fades faster with r',
            'The electric force acts only in atoms',
            'Gravity grows stronger at large r',
          ],
          correctAnswer: 0,
          explanation:
            'A planet holds nearly equal amounts of positive and negative charge, so their electric forces almost cancel, while mass only adds up. Both forces fall off as 1/r², so the electric force does not fade faster; it acts at any distance, not just inside atoms; and gravity, like the electric force, weakens with distance.',
        },
      ],
    },
    // ── 6 · Coulomb's law (worked examples) ──────────────────────────────
    {
      title: 'Coulomb\'s Law: Worked Examples',
      minutes: 6,
      goal: 'Compute the force between two charges with its direction, rescale it by ratios, and run Coulomb\'s law backward to find a charge or a distance.',
      keyPoints: [
        'Convert first: μC × 10⁻⁶ = C, nC × 10⁻⁹ = C, cm × 10⁻² = m.',
        'Use magnitudes in |F| = k|q₁q₂|/r², then state the direction from like/unlike charges. Both charges feel the same size of force.',
        'For a change, multiply the factors instead of starting over: × each charge factor, ÷ the square of the distance factor.',
        'Run it backward by solving for the unknown first: q² = Fr²/k for equal charges, or r = √(k|q₁q₂|/F), and remember the square root.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: +5.0 μC and −2.0 μC with 15 cm between them, the unit conversions, the 4.0 N arrows pointing toward each other on both charges, then the charges pulled to 45 cm and the arrows shrinking to 0.44 N',
        'Example 2: two identical spheres 10 cm apart repelling with 3.6 N, q² = Fr²/k solved to 2.0 μC each, then the factor table (× 2 for one charge, ÷ 4 for double distance) giving 1.8 N, then the distance stretched until the force reads 0.40 N at 30 cm',
        'The "Remember" recap of the method: convert to SI; magnitudes in, direction from the signs; multiply the factors; solve for the unknown and do not forget the square root',
        'End card: "Up next: Superposition of Forces"',
      ],
      workedExample:
        'Example 1: A +5.0 μC charge and a −2.0 μC charge are held 15 cm apart. Use k = 9.0 × 10⁹ N·m²/C². (a) Write the charges and the distance in SI units. (b) What is the magnitude of the force between them? (c) What is the direction of the force on each charge, and how do the two forces compare? (d) The charges are moved until they are 45 cm apart. What is the new force? (a) q₁ = 5.0 × 10⁻⁶ C, q₂ = 2.0 × 10⁻⁶ C in magnitude, r = 0.15 m; (b) |F| = (9.0 × 10⁹)(5.0 × 10⁻⁶)(2.0 × 10⁻⁶)/(0.15)² = 0.090/0.0225 = 4.0 N; (c) unlike charges attract, so each is pulled toward the other, and by Newton\'s third law both feel 4.0 N, even though one charge is 2.5 times the other; (d) the distance tripled, so the force falls by 3² = 9: 4.0/9 ≈ 0.44 N, still attractive. Example 2: Two identical small spheres carry equal positive charges q. With their centers 10 cm apart, they repel each other with a force of 3.6 N. Use k = 9.0 × 10⁹ N·m²/C². (a) What is q? (b) The charge on one sphere is doubled and the spheres are moved to 20 cm apart. What is the new force? (c) With the original charges, at what separation would the force be 0.40 N? (a) q² = Fr²/k = (3.6)(0.10)²/(9.0 × 10⁹) = 4.0 × 10⁻¹², so q = 2.0 × 10⁻⁶ C = 2.0 μC; (b) by factors, × 2 for the doubled charge and ÷ 2² = 4 for the doubled distance, so F = 3.6 × 2/4 = 1.8 N, repulsive; (c) the force must fall by 3.6/0.40 = 9, so the distance grows by √9 = 3, to 30 cm; check: (9.0 × 10⁹)(2.0 × 10⁻⁶)²/(0.30)² = 0.036/0.090 = 0.40 N.',
      pitfalls: [
        'Leaving the distance in centimeters, which makes the force 10,000 times too small.',
        'Forgetting to square the distance, or to take the square root when solving for r or q.',
        'Stating a magnitude without saying whether the force attracts or repels.',
        'Scaling the force by the distance factor itself instead of its square.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat'],
      checkpoint: [
        {
          question: 'A +1.0 μC charge and a −9.0 μC charge are 30 cm apart. What is the force between them? (k = 9.0 × 10⁹ N·m²/C²)',
          options: [
            '0.90 N, repulsive',
            '0.27 N, attractive',
            '0.90 N, attractive',
            '0.14 N, attractive',
          ],
          correctAnswer: 2,
          explanation:
            '|F| = (9.0 × 10⁹)(1.0 × 10⁻⁶)(9.0 × 10⁻⁶)/(0.30)² = 0.081/0.090 = 0.90 N, and unlike charges attract. "Repulsive" has the right size but the wrong direction; 0.27 N divides by r instead of r²; and 0.14 N doubles the distance (0.60) instead of squaring it (0.090).',
        },
        {
          question: 'Two identical small spheres carry equal charges and repel each other with a force of 0.10 N when their centers are 0.30 m apart. What is the charge on each? (k = 9.0 × 10⁹ N·m²/C²)',
          options: ['1.0 × 10⁻¹² C', '1.8 × 10⁻⁶ C', '3.3 × 10⁻⁶ C', '1.0 × 10⁻⁶ C'],
          correctAnswer: 3,
          explanation:
            'q² = Fr²/k = (0.10)(0.30)²/(9.0 × 10⁹) = 1.0 × 10⁻¹² C², so q = 1.0 × 10⁻⁶ C. 1.0 × 10⁻¹² C stops at q² and forgets the square root; 1.8 × 10⁻⁶ C uses r instead of r²; and 3.3 × 10⁻⁶ C leaves the distance out altogether.',
        },
        {
          question: 'Two charges attract each other with a force of 2.0 N when they are 12 cm apart. At what separation would the force be 0.50 N?',
          options: ['24 cm', '48 cm', '6.0 cm', '3.0 cm'],
          correctAnswer: 0,
          explanation:
            'The force must drop by a factor of 4, and F ∝ 1/r², so r grows by √4 = 2: 12 × 2 = 24 cm. 48 cm multiplies the distance by 4, forgetting the square root; 6.0 cm moves the charges closer, which would strengthen the force; and 3.0 cm makes both mistakes.',
        },
      ],
    },
    // ── 7 · Superposition of forces (concepts) ───────────────────────────
    {
      title: 'Superposition of Forces',
      minutes: 7.5,
      goal: 'Find the net electric force on a charge from several others by adding the separate Coulomb forces as vectors, use symmetry to spot cancellations, and locate the points where a charge would feel no net force.',
      keyPoints: [
        'Superposition: the net force on a charge is the vector sum of the separate Coulomb forces from every other charge. Each pair force is found as if the other charges were not there; a third charge does not change the force between the first two.',
        'The method: draw the charge in question, find each force\'s size from |F| = k|q₁q₂|/r² with that pair\'s own distance, take each force\'s direction from like/unlike, then add as vectors.',
        'In one dimension, pick a positive direction and give each force a sign from the direction it points, not from the sign of the charges. Forces in opposite directions partly cancel.',
        'In two dimensions, break each force into x- and y-components, add the components, then F = √(Fx² + Fy²) and θ = tan⁻¹(Fy/Fx). Two perpendicular forces combine like the sides of a right triangle. Magnitudes add directly only when the forces point the same way.',
        'Use symmetry first: matching charges at matching distances give matching forces, and their sideways components cancel. Three equal positive charges at the corners of an equilateral triangle each feel a net push straight away from the center.',
        'Zero net force on a line of two fixed charges: for charges of the SAME sign the point lies between them, closer to the smaller one; for OPPOSITE signs it lies outside the pair, beyond the smaller one; equal and opposite charges have no such point at any finite distance, because balance needs equal distances, and at the midpoint both forces point the same way. Set |q₁|/r₁² = |q₂|/r₂²: the third charge\'s own size and sign cancel out.',
      ],
      showOnScreen: [
        'Three charges with each pair force drawn in its own color, then the arrows slid tip to tail to give the net force',
        'A worksheet layout: a sketch, one Coulomb calculation per pair with its own r, a direction label, then the vector sum',
        'A line of charges with a +x arrow: forces pointing right labelled +, forces pointing left labelled −, partly cancelling',
        'Two perpendicular force arrows forming a right triangle with the net force as the hypotenuse, Fx, Fy and θ labelled',
        'Equal charges placed symmetrically about a test charge, their sideways components cancelling; then an equilateral triangle of + charges with net arrows pointing outward',
        'Two fixed charges on a line with a test charge sliding along it and a net-force meter: a zero between two like charges near the smaller one, a zero outside two unlike charges beyond the smaller one, and no zero for +Q and −Q',
        'The "Remember" recap: forces add as vectors; each pair force is independent; signs come from directions; components in 2D; symmetry cancels; same signs balance between, opposite signs balance outside, nearer the smaller charge',
        'End card: "Up next: Superposition of Forces: Worked Examples"',
      ],
      pitfalls: [
        'Adding the magnitudes of forces that point in different directions.',
        'Giving a force a sign from the charge\'s sign instead of from its direction.',
        'Using the wrong distance: each pair needs its own separation, not a coordinate.',
        'Looking for a zero-force point between two unlike charges, where both forces point the same way.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat'],
      checkpoint: [
        {
          question: 'Equal positive charges are fixed at (−a, 0) and (+a, 0). A negative charge is placed on the y-axis at (0, a). Which way does the net electric force on it point?',
          options: [
            'Straight down, toward the origin',
            'Straight up, away from the origin',
            'Zero, as the two forces cancel',
            'Sideways, along the x-direction',
          ],
          correctAnswer: 0,
          explanation:
            'Each positive charge pulls the negative charge toward itself, down and to one side. By symmetry the sideways components cancel and the downward components add, so the net force points straight down, toward the origin. "Straight up" treats the attractions as repulsions; "zero" cancels the downward parts along with the sideways ones; and a sideways net force would need one charge to be bigger or nearer than the other.',
        },
        {
          question: 'Charges of +Q and −Q, equal in size, are fixed on a line. Where on that line could a third charge feel zero net electric force?',
          options: [
            'Midway between the two charges',
            'Outside the pair, beyond −Q',
            'Nowhere at any finite distance',
            'Outside the pair, beyond +Q',
          ],
          correctAnswer: 2,
          explanation:
            'Two forces of equal size from charges of equal size need equal distances, |Q|/r₁² = |Q|/r₂², and on the line only the midpoint has them. But between unlike charges both forces on a third charge point the same way (a positive charge is pushed from +Q and pulled toward −Q), so at the midpoint they add instead of cancelling. Outside the pair the forces do point opposite ways, but the third charge is always nearer one of the two equal charges, and that nearer charge always wins; the forces only approach each other far away, where both fade toward zero. "Midway" takes equal distances to mean cancellation and ignores the directions; "beyond −Q" and "beyond +Q" borrow the rule for UNEQUAL unlike charges (balance beyond the smaller one), but here neither charge is smaller.',
        },
        {
          question: 'A charge feels a 3.0 N force from one neighbor and a 4.0 N force from another. Which of these could NOT be the size of the net force on it?',
          options: ['1.0 N', '5.0 N', '7.0 N', '8.0 N'],
          correctAnswer: 3,
          explanation:
            'Forces add as vectors, so the net force ranges from 4.0 − 3.0 = 1.0 N (opposite directions) to 3.0 + 4.0 = 7.0 N (same direction), with 5.0 N when they are perpendicular. 8.0 N is more than the two forces could give even pointing the same way. 1.0 N, 5.0 N and 7.0 N are each possible, so picking one of them assumes the forces must be opposite, perpendicular or aligned.',
        },
      ],
    },
    // ── 8 · Superposition of forces (worked examples) ────────────────────
    {
      title: 'Superposition of Forces: Worked Examples',
      minutes: 6.5,
      goal: 'Find the net force on a charge in a line of three and on a charge with neighbors at right angles, give its size and direction, and show when a charge is in equilibrium.',
      keyPoints: [
        'One force at a time: each pair gets its own Coulomb calculation with its own separation, and its own direction from like/unlike.',
        'In a line, give each force a sign from its direction along the axis, then add.',
        'At right angles, the forces are the x- and y-components: F = √(Fx² + Fy²), with the angle from tan θ = Fy/Fx, measured from a named axis.',
        'A charge feels zero net force where |q₁|/r₁² = |q₂|/r₂² for the two charges on either side of it; its own charge drops out.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: charges A, B and C on an x-axis with the separations marked; on C, a 0.40 N arrow to the right and a 1.8 N arrow to the left combining to 1.4 N left; then on B, two 1.8 N arrows cancelling, with 4.0/0.20² = 1.0/0.10² = 100 shown beside them',
        'Example 2: a charge at the origin with a 0.60 N arrow along −x and a 0.45 N arrow along +y, the 3-4-5 triangle closing to 0.75 N, and the angle of 37° above the −x axis',
        'The "Remember" recap of the method: one pair at a time; each pair\'s own distance; signs from directions; components and Pythagoras at right angles; zero force where |q|/r² matches',
        'End card: "Up next: The Electric Field"',
      ],
      workedExample:
        'Example 1: Three charges sit on the x-axis: q_A = +4.0 μC at x = 0, q_B = −2.0 μC at x = 0.20 m, and q_C = +1.0 μC at x = 0.30 m. Use k = 9.0 × 10⁹ N·m²/C². (a) What force does A exert on C? (b) What force does B exert on C? (c) What is the net force on C? (d) Show that B feels zero net force, and explain why any charge placed at x = 0.20 m would too. (a) Separation 0.30 m: (9.0 × 10⁹)(4.0 × 10⁻⁶)(1.0 × 10⁻⁶)/(0.30)² = 0.036/0.090 = 0.40 N; both positive, so A repels C, in the +x direction; (b) separation 0.10 m: (9.0 × 10⁹)(2.0 × 10⁻⁶)(1.0 × 10⁻⁶)/(0.10)² = 0.018/0.010 = 1.8 N; unlike charges, so B pulls C toward itself, in the −x direction; (c) F_net = +0.40 − 1.8 = −1.4 N, so 1.4 N in the −x direction, toward B; (d) A pulls B toward −x with (9.0 × 10⁹)(4.0 × 10⁻⁶)(2.0 × 10⁻⁶)/(0.20)² = 1.8 N, and C pulls B toward +x with (9.0 × 10⁹)(1.0 × 10⁻⁶)(2.0 × 10⁻⁶)/(0.10)² = 1.8 N, so the net force is zero; A and C have the same sign and |q_A|/r_A² = 4.0/0.20² = 100 matches |q_C|/r_C² = 1.0/0.10² = 100, so the two forces on any charge at x = 0.20 m are equal and opposite, whatever its size or sign. Example 2: A +2.0 μC charge sits at the origin. A +3.0 μC charge is at (0.30 m, 0), and a −4.0 μC charge is at (0, 0.40 m). Use k = 9.0 × 10⁹ N·m²/C². (a) What force does the +3.0 μC charge exert on the charge at the origin? (b) What force does the −4.0 μC charge exert on it? (c) What is the size of the net force? (d) What is its direction? (a) (9.0 × 10⁹)(3.0 × 10⁻⁶)(2.0 × 10⁻⁶)/(0.30)² = 0.054/0.090 = 0.60 N; like charges repel, so it points along −x, away from the +3.0 μC charge; (b) (9.0 × 10⁹)(4.0 × 10⁻⁶)(2.0 × 10⁻⁶)/(0.40)² = 0.072/0.16 = 0.45 N; unlike charges attract, so it points along +y, toward the −4.0 μC charge; (c) the two forces are perpendicular: F = √(0.60² + 0.45²) = √0.5625 = 0.75 N; (d) tan θ = 0.45/0.60 = 0.75, so θ ≈ 37° above the −x axis, up and to the left.',
      pitfalls: [
        'Adding 0.60 N and 0.45 N straight to 1.05 N when the forces are perpendicular.',
        'Using a charge\'s x-coordinate as its distance from another charge.',
        'Making a force negative because the charge exerting it is negative, instead of looking at where the force points.',
        'Quoting an angle without saying which axis it is measured from.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-electrostatics-mcat'],
      checkpoint: [
        {
          question: 'Charges sit on the x-axis: −3.0 μC at x = 0, +1.0 μC at x = 0.20 m and +2.0 μC at x = 0.30 m. What is the net force on the +2.0 μC charge? (k = 9.0 × 10⁹ N·m²/C²)',
          options: [
            '1.2 N in the +x direction',
            '2.4 N in the +x direction',
            '1.2 N in the −x direction',
            '0.15 N in the −x direction',
          ],
          correctAnswer: 0,
          explanation:
            'The −3.0 μC charge, 0.30 m away, attracts it toward −x with (9.0 × 10⁹)(3.0 × 10⁻⁶)(2.0 × 10⁻⁶)/(0.30)² = 0.60 N. The +1.0 μC charge, 0.10 m away, repels it toward +x with (9.0 × 10⁹)(1.0 × 10⁻⁶)(2.0 × 10⁻⁶)/(0.10)² = 1.8 N. Net: 1.8 − 0.60 = 1.2 N in the +x direction. "1.2 N in −x" swaps attraction and repulsion; 2.4 N adds the magnitudes although the forces point opposite ways; and 0.15 N in −x uses 0.20 m, the +1.0 μC charge\'s coordinate, as its distance instead of the 0.10 m gap.',
        },
        {
          question: 'A −1.0 μC charge sits at the origin, a −4.0 μC charge at (0.20 m, 0) and a +3.0 μC charge at (0, 0.15 m). What is the size of the net force on the charge at the origin? (k = 9.0 × 10⁹ N·m²/C²)',
          options: ['2.1 N', '0.30 N', '1.5 N', '0.25 N'],
          correctAnswer: 2,
          explanation:
            'The −4.0 μC charge repels it along −x with (9.0 × 10⁹)(4.0 × 10⁻⁶)(1.0 × 10⁻⁶)/(0.20)² = 0.90 N, and the +3.0 μC charge attracts it along +y with (9.0 × 10⁹)(3.0 × 10⁻⁶)(1.0 × 10⁻⁶)/(0.15)² = 1.2 N. The forces are perpendicular, so F = √(0.90² + 1.2²) = 1.5 N. 2.1 N adds the magnitudes as if the forces were parallel; 0.30 N subtracts them as if they were opposite; and 0.25 N divides by r instead of r² in both forces.',
        },
        {
          question: 'Charges of +4.0 μC and +9.0 μC are fixed at x = 0 and x = 0.50 m. Where between them would a third charge feel zero net force?',
          options: ['x = 0.30 m', 'x = 0.15 m', 'x = 0.25 m', 'x = 0.20 m'],
          correctAnswer: 3,
          explanation:
            'Set |q₁|/r₁² = |q₂|/r₂²: 4.0/x² = 9.0/(0.50 − x)². Taking square roots, 2.0(0.50 − x) = 3.0x, so x = 0.20 m, closer to the smaller charge (check: 4.0/0.20² = 100 = 9.0/0.30²). x = 0.30 m is the right distance measured from the wrong charge, putting the point nearer the larger one; x = 0.15 m skips the square root and solves 4.0(0.50 − x) = 9.0x; and x = 0.25 m is the midpoint, which works only for equal charges.',
        },
      ],
    },
  ],
}
