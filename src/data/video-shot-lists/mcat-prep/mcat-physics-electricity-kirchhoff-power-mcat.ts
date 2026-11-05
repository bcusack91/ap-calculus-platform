import type { ShotList } from '../types'

/**
 * Shot list: MCAT Physics — Circuits Part 2: Kirchhoff's Rules & Power
 * (topic mcat-physics-electricity-kirchhoff-power-mcat, the second of four Circuits topics).
 *
 * Source: the 2-part lesson (src/data/interactive-lessons/mcat-mcat-physics-electricity-kirchhoff-power-mcat-part1..2.ts),
 * its deck figures (Kirchhoff, two-step network, dividers, power, bulb burnout, the body) and its
 * lesson-built exit pool. Eight Manim clips in four pairs (owner format, Nov 2026): a CONCEPT clip
 * that teaches the idea and ends on the "Remember" recap, then a WORKED-EXAMPLES clip with two
 * examples, each shown in full with a pause-and-try prompt before the solution. Concept clips get
 * conceptual checkpoint questions; worked-example clips get questions that mirror their two
 * examples with new numbers.
 * - Pair 1 (clips 1–2): lesson Part 1, Kirchhoff's Rules and Worked Example — A Single Loop, Walked.
 * - Pair 2 (clips 3–4): lesson Part 1, Collapsing Networks Inside-Out, Voltage Dividers and Current
 *   Dividers and Worked Example — A Two-Step Network; then lesson Part 2, What Changes When the
 *   Circuit Changes.
 * - Pair 3 (clips 5–6): lesson Part 2, Electrical Power; Energy, the Kilowatt-Hour and Joule Heating;
 *   Electricity and the Body; and the factor-change step of Rank Without Computing.
 * - Pair 4 (clips 7–8): lesson Part 2, Bulb Brightness in Series and Parallel, When a Bulb Burns Out
 *   or One Is Added (with household wiring) and the ranking steps of Rank Without Computing.
 * Electricity and the Body is taught with power (pair 3), one section ahead of its lesson position,
 * so that pair 4 is about bulb brightness ranking alone. Left out as low-yield: simultaneous-equation
 * solutions for multi-source networks, and the specific body-current thresholds (the one threshold
 * used in clip 6 is given in the problem, the way a passage would supply it).
 *
 * The checkpoint questions are what a YouTube viewer answers at studymondo.com/v/<code>
 * (src/data/video-short-links.ts). Proposed codes: loop1/loop2, divider1/divider2,
 * power1/power2, bulb1/bulb2. They use new scenarios and numbers, so they never repeat an
 * exit-quiz item or a worked example.
 */
export const shotList: ShotList = {
  courseSlug: 'mcat-prep',
  topicSlug: 'mcat-physics-electricity-kirchhoff-power-mcat',
  title: "Circuits Part 2: Kirchhoff's Rules & Power",
  overview:
    'Eight animated clips in four pairs that turn the rules from Circuits Part 1 into whole-circuit reasoning: Kirchhoff\'s junction and loop rules, collapsing networks and splitting voltage and current with dividers, predicting what a change does to a circuit, electrical power and energy, and ranking bulb brightness, the skill this topic is tested on most. Each idea gets a concept clip followed by a worked-examples clip in which every problem is shown in full, with a moment to pause and try it before the solution. Narration stays exam-neutral, so the clips also serve introductory physics; the biology links (current through parallel tissue paths, why wet skin makes a shock dangerous) are the ones the exam leans on. Each clip ends with three checkpoint questions; the topic exit quiz follows the last clip.',
  clips: [
    // ── 1 · Kirchhoff's rules (concepts) ─────────────────────────────────
    {
      title: "Kirchhoff's Rules",
      minutes: 6.5,
      goal: 'State the junction and loop rules as conservation laws, apply the sign conventions while walking a loop, and combine sources that push the same way or oppose each other.',
      keyPoints: [
        'Junction rule (charge is conserved): at every node, ΣI_in = ΣI_out. Charge cannot pile up in a wire, so whatever arrives at a junction leaves it.',
        'Loop rule (energy is conserved): around any closed loop, ΣΔV = 0. A charge that goes round and returns is back at the same potential, so every volt gained in a source is dropped somewhere along the way.',
        'Walking a loop: a resistor crossed WITH the current records −IR, AGAINST it +IR; a source crossed from − to + records +V, from + to − records −V; an ideal wire records 0.',
        'Pick either walking direction and guess each current\'s direction; a negative answer only means that current runs the other way.',
        'Sources that push the same way add; sources that oppose subtract, and the net voltage drives the current through the total resistance.',
        'With the − terminal grounded, the potential falls in steps around a series loop, the biggest step across the biggest resistor, and lands back on 0 V.',
      ],
      showOnScreen: [
        'A node with three wires: I₁ and I₂ flowing in, I₃ flowing out, charges counted on each side to show I₁ + I₂ = I₃',
        'A series loop drawn as a potential staircase: +V up through the battery, a −IR step down through each resistor, back to the start',
        'The sign-convention table filling row by row as a walker crosses each element with and against the current',
        'Two batteries in one loop, first pushing the same way (arrows add), then one flipped to oppose (arrows subtract)',
        'A guessed current arrow whose answer comes out negative, then flips to show the true direction',
        'The "Remember" recap',
        'End card: "Up next: Kirchhoff\'s Rules: Worked Examples"',
      ],
      pitfalls: [
        'Mixing up the resistor sign: it is a drop only when you cross it WITH the current.',
        'Adding two batteries that oppose each other.',
        'Starting over when a current comes out negative, instead of reversing its arrow.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-kirchhoff-power-mcat', 'mcat-physics-electricity-dc-circuits-mcat'],
      checkpoint: [
        {
          question: 'Three wires carry current INTO a node, and a fourth wire is the only other connection to it. What must be true of the current in the fourth wire?',
          options: [
            'It flows in, since the node can store the extra charge',
            'It flows out and equals the sum of the three currents in',
            'It carries no current, since the three already balance',
            'It flows out and equals the largest of the three inputs',
          ],
          correctAnswer: 1,
          explanation:
            'Charge is conserved and cannot pile up at a node, so the total current in must equal the total current out: the fourth wire carries the whole sum of the three currents out. A node stores no charge, so nothing can flow in "for storage"; three currents that all flow in cannot balance one another; and matching only the largest input would leave the rest of the arriving charge with nowhere to go.',
        },
        {
          question: 'You guess that a loop\'s current runs clockwise, walk the loop, and the loop rule gives I = −2 A. What does the minus sign tell you?',
          options: [
            'A current of 2 A runs counterclockwise, opposite the guess',
            'The setup was wrong, so the loop must be walked again',
            'A current of 2 A runs clockwise; the sign marks a drop',
            'No current flows, since the loop rule failed to balance',
          ],
          correctAnswer: 0,
          explanation:
            'A guessed direction is only a bookkeeping choice. A negative result means the current has the size you found but runs the other way: 2 A counterclockwise. Nothing was set up wrongly, so there is no need to walk the loop again; the minus sign belongs to the current, not to a −IR drop; and the loop rule did balance, which is how the value was found.',
        },
        {
          question: 'An ideal battery drives one current through three unequal resistors in series, with its − terminal grounded. Following the current from the + terminal, how does the potential change?',
          options: [
            'It rises across each resistor until it reaches ground',
            'It falls by the same amount across each resistor',
            'It stays at the battery voltage until the − terminal',
            'It falls across each one, most across the largest R',
          ],
          correctAnswer: 3,
          explanation:
            'Walking with the current, each resistor records −IR, a drop. The current is the same in all three, so each drop is proportional to its resistance and the largest resistor takes the largest step; the drops add to the battery voltage, bringing the potential back to 0 V at the grounded terminal. "Rises" uses the against-the-current sign, equal steps would need equal resistors, and only the ideal wires carry no drop: the resistors do.',
        },
      ],
    },
    // ── 2 · Kirchhoff's rules (worked examples) ──────────────────────────
    {
      title: "Kirchhoff's Rules: Worked Examples",
      minutes: 5,
      goal: 'Write and solve the loop equation for a single loop with one or two sources, find each drop and each node potential, and record the signs correctly in either walking direction.',
      keyPoints: [
        'Write the loop equation as you walk: +V for each source crossed − to +, −IR for each resistor crossed with the current; set the sum to zero and solve for I.',
        'Each drop is IR, and the drops add back to the net source voltage.',
        'Node potentials: start from the + terminal\'s potential, subtract each drop in turn, and the last step lands back on 0 V at the grounded − terminal.',
        'Opposing sources: the net voltage is the difference, and the current runs the way the larger source pushes.',
        'Walking against the current flips every sign, and the sum still closes to zero.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the 30 V loop with 3 Ω, 5 Ω and 7 Ω, a walker moving with the current as each term of the loop equation appears, then the potential staircase 30 → 24 → 14 → 0 V',
        'Example 2: the loop with opposing 12 V and 4 V batteries, the net 8 V arrow, then the same loop walked backwards with every sign flipped and the sum still closing',
        'The "Remember" recap of the method',
        'End card: "Up next: Networks and Dividers"',
      ],
      workedExample:
        'Example 1: A 30 V ideal battery drives 3 Ω, 5 Ω and 7 Ω resistors in series, in that order from its + terminal. Walk the loop in the direction of the current. (a) What equation does the loop rule give, and what current does it predict? (b) What is the voltage drop across each resistor? (c) With the battery\'s − terminal grounded, what is the potential after each element? (a) +30 − 3I − 5I − 7I = 0, so I = 30/15 = 2.0 A; (b) 6 V, 10 V and 14 V, which add to 30 V; (c) 30 V just past the + terminal, 24 V after the 3 Ω, 14 V after the 5 Ω and 0 V after the 7 Ω, back at ground. Example 2: A 12 V and a 4 V ideal battery sit in one loop, oriented to push current in opposite directions, with a 2 Ω and a 6 Ω resistor. (a) What current flows, and which way? (b) What is the voltage across each resistor? (c) Walking the loop AGAINST the current, what do you record for each element, and does the sum close? (a) Walking the way the 12 V battery pushes: +12 − 4 − 2I − 6I = 0, so I = 8/8 = 1.0 A, out of the 12 V battery\'s + terminal and into the 4 V battery\'s + terminal; (b) 2.0 V and 6.0 V, which add to the net 8 V; (c) −12 V for the 12 V battery (crossed + to −), +4 V for the 4 V battery (crossed − to +), and +2 V and +6 V for the resistors (crossed against the current): −12 + 4 + 2 + 6 = 0.',
      pitfalls: [
        'Adding opposing sources (16 V here instead of 8 V).',
        'Reporting the drop across a resistor as the potential at the node after it.',
        'Flipping the resistor signs but not the battery signs when the walking direction reverses.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-kirchhoff-power-mcat', 'mcat-physics-electricity-dc-circuits-mcat'],
      checkpoint: [
        {
          question: 'A 36 V ideal battery drives current from its + terminal through 4 Ω, then 6 Ω, then 8 Ω in series and back to its − terminal, which is grounded. What is the potential just after the 6 Ω resistor?',
          options: ['28 V', '12 V', '16 V', '20 V'],
          correctAnswer: 2,
          explanation:
            'R_eq = 4 + 6 + 8 = 18 Ω and I = 36/18 = 2.0 A, so the drops are 8 V, 12 V and 16 V. Starting from 36 V past the + terminal, the potential is 36 − 8 = 28 V after the 4 Ω and 28 − 12 = 16 V after the 6 Ω; the 8 Ω then drops the last 16 V to ground. 28 V stops after the first resistor, 12 V is the drop across the 6 Ω rather than the potential after it, and 20 V is the voltage dropped so far, not what is left.',
        },
        {
          question: 'A single loop holds a 20 V and a 5 V ideal battery pushing in opposite directions, along with a 1 Ω and a 4 Ω resistor. What current flows in the loop?',
          options: ['5.0 A', '1.0 A', '4.0 A', '3.0 A'],
          correctAnswer: 3,
          explanation:
            'Walking the way the 20 V battery pushes: +20 − 5 − 1I − 4I = 0, so I = 15/5 = 3.0 A, in the direction the larger battery pushes. 5.0 A adds the two sources (25 V) as if they pushed the same way, 4.0 A ignores the 5 V battery altogether, and 1.0 A uses only the smaller battery.',
        },
        {
          question: 'A loop carries 3.0 A. Walking AGAINST the current, you cross a 2.0 Ω resistor and then an ideal 12 V battery, entering at its + terminal and leaving at its − terminal. What total potential change do you record for those two elements?',
          options: ['−6 V', '+6 V', '−18 V', '+18 V'],
          correctAnswer: 0,
          explanation:
            'Against the current the resistor is a rise, +IR = +(3.0)(2.0) = +6 V, and a battery crossed from + to − is a drop of 12 V, so the total is +6 − 12 = −6 V. −18 V records the resistor as a drop, which is right only when walking with the current; +18 V records the battery as a rise, which is right only from − to +; and +6 V flips both signs.',
        },
      ],
    },
    // ── 3 · Networks and dividers (concepts) ─────────────────────────────
    {
      title: 'Networks and Dividers',
      minutes: 7,
      goal: 'Collapse a network inside-out and walk back out, split voltage and current with the divider rules, and predict how currents and voltages shift when a branch is added, opened or shorted.',
      keyPoints: [
        'Trace nodes, not drawings: points joined by bare wire are one node; two elements between the same two nodes are in parallel; two are in series only if no junction lies between them.',
        'Collapse the innermost series or parallel group, redraw, and repeat down to one R_eq; find I = V/R_eq; then walk back out, splitting VOLTAGE through series pieces and CURRENT across parallel ones, and finish with a junction check and a loop check.',
        'Voltage divider: series resistors share V in proportion to R, V₁ = V·R₁/(R₁ + R₂). Current divider: parallel resistors share I inversely, I₁ = I·R₂/(R₁ + R₂), with the OTHER resistor on top, so 1 Ω and 3 Ω branches split the current 3 : 1.',
        'Biology link: current between two electrodes on the body splits among parallel tissue paths inversely with their resistance, so most of it travels through blood and muscle rather than fat or bone.',
        'When the circuit changes, reason in order: the change, then R_eq, then the total current, then the drop across any series resistor, then the voltage left for the parallel part.',
        'Behind a series resistor, adding a branch leaves less voltage for the bank, so the old branch currents fall; opening a branch does the reverse. Directly across an ideal source, the other branches are unaffected. Shorting one branch of a bank shorts the whole bank.',
      ],
      showOnScreen: [
        'A tangled circuit with each node coloured, then redrawn neatly with the same colours and the same connections',
        'The inside-out collapse: a parallel pair shrinking into one box, then the series sum, then the total current arrow, then the walk back out',
        'A voltage divider as a bar split in proportion to R, and a current divider as a stream splitting 3 : 1 between 1 Ω and 3 Ω branches',
        'Electrodes on an arm with the current fanning out: thick arrows through blood and muscle, thin ones through fat and bone',
        'A cause-and-effect chain that lights up step by step: change → R_eq → total I → series drop → bank voltage',
        'The "Remember" recap',
        'End card: "Up next: Networks and Dividers: Worked Examples"',
      ],
      pitfalls: [
        'Putting a branch\'s own resistance on top in the current divider: current favours the SMALLER resistance.',
        'Holding the total current fixed after the network changes.',
        'Assuming parallel branches never change: they keep their voltage only when they sit directly across an ideal source.',
      ],
      lessonParts: [1, 2],
      mcatTags: ['mcat-physics-electricity-kirchhoff-power-mcat', 'mcat-physics-electricity-dc-circuits-mcat', 'mcat-biological-basis-behavior-mcat'],
      checkpoint: [
        {
          question: 'Two resistors in series across an ideal battery form a voltage divider. The larger resistor is replaced with an even larger one. What happens to the voltage across the smaller resistor?',
          options: [
            'It rises, since the total current in the loop rises',
            'It falls, since its share of the total resistance shrinks',
            'It stays the same, since the battery voltage is fixed',
            'It rises, since the larger resistor now takes less voltage',
          ],
          correctAnswer: 1,
          explanation:
            'The smaller resistor\'s voltage is V·R₁/(R₁ + R₂). Raising R₂ raises the denominator, so its share falls. Equivalently, the total resistance rises, the current falls, and V = IR₁ falls with it. The current falls rather than rises; a fixed battery voltage is simply shared differently; and the larger resistor now takes MORE of the voltage, not less.',
        },
        {
          question: 'Current from a pair of electrodes splits between two parallel tissue paths: a 1 kΩ blood-and-muscle path and a 9 kΩ fat path. What fraction of the current takes the 1 kΩ path?',
          options: ['1/10', '1/2', '9/10', '1/9'],
          correctAnswer: 2,
          explanation:
            'Parallel paths share current inversely with resistance: I₁ = I·R₂/(R₁ + R₂) = I·9/(1 + 9), so 9/10 takes the low-resistance path. 1/10 puts the path\'s own resistance on top, giving the larger share to the larger resistance; 1/2 splits the current evenly as if the paths were identical; and 1/9 is the ratio of the two resistances, not a share of the total.',
        },
        {
          question: 'Two resistors are connected in parallel directly across an ideal battery, with nothing in series. A third resistor is added in parallel. What happens to the current in each of the original two?',
          options: [
            'It stays the same, since each still has the full voltage',
            'It falls, since more voltage now drops before the bank',
            'It falls, since the current is now shared three ways',
            'It rises, since the battery now supplies more current',
          ],
          correctAnswer: 0,
          explanation:
            'Each original resistor still joins the battery\'s two terminals, so it keeps the full battery voltage and the same current V/R. The battery supplies more total current, but all of the extra goes into the new branch. "More voltage drops before the bank" is the case with a series resistor in front, which this circuit lacks; branch currents are not a fixed total shared out; and the rise in battery current does not pass through the old branches.',
        },
      ],
    },
    // ── 4 · Networks and dividers (worked examples) ──────────────────────
    {
      title: 'Networks and Dividers: Worked Examples',
      minutes: 5,
      goal: 'Solve a series-parallel network completely, re-solve it after a branch opens, and split a voltage and a current with the divider formulas.',
      keyPoints: [
        'Inside-out: collapse the pair with product over sum, add the series resistor, and find I = V/R_eq.',
        'Walk back out: the series drop is IR; what is left of the battery voltage sits across the pair; each branch current is that voltage over its own resistance.',
        'After a change, re-solve from R_eq; never carry the old total current over.',
        'Dividers: series voltage in proportion to R; parallel current with the OTHER resistor on top; check that both branches end up with the same voltage.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the 12 V, 2 Ω + (6 Ω ∥ 3 Ω) network collapsing to 4 Ω, the 3 A current walking back out to 1 A and 2 A, then the 6 Ω branch snapping open and the new numbers replacing the old',
        'Example 2: a two-colour voltage bar split 6 : 9 for the series pair, then a current stream splitting 6 : 2 between the parallel branches',
        'The "Remember" recap of the method',
        'End card: "Up next: Power, Energy and Safety"',
      ],
      workedExample:
        'Example 1: A 12 V ideal battery feeds a 2 Ω resistor in series with a parallel pair of 6 Ω and 3 Ω. (a) What are the resistance of the pair, the total resistance and the current from the battery? (b) What voltage is left across the pair, and what current flows in each branch? (c) The 6 Ω branch then breaks open. What are the new total current and the new current in the 3 Ω resistor? (a) R_pair = (6)(3)/(6 + 3) = 2 Ω, R_eq = 2 + 2 = 4 Ω, I = 12/4 = 3.0 A; (b) the 2 Ω resistor drops (3.0)(2) = 6 V, leaving 6 V across the pair, so I₆ = 6/6 = 1.0 A and I₃ = 6/3 = 2.0 A, which add to 3.0 A; (c) now 2 Ω + 3 Ω = 5 Ω in series, so I = 12/5 = 2.4 A, all of it through the 3 Ω: the total current fell (3.0 → 2.4 A) while the 3 Ω current rose (2.0 → 2.4 A), because the series resistor now drops less (4.8 V) and leaves more (7.2 V) for the 3 Ω. Example 2: (a) A 15 V ideal source sits across a 2 kΩ and a 3 kΩ resistor in series. What is the voltage across each? (b) A total current of 8.0 mA enters a parallel pair of 2 kΩ and 6 kΩ. What current flows in each branch? (a) V₃ = 15 × 3/(2 + 3) = 9.0 V and V₂ = 15 × 2/5 = 6.0 V, which add to 15 V; (b) I₂ = 8.0 × 6/(2 + 6) = 6.0 mA and I₆ = 8.0 × 2/8 = 2.0 mA, the larger share through the smaller resistance; check: (6.0 mA)(2 kΩ) = (2.0 mA)(6 kΩ) = 12 V, the same voltage across both branches.',
      pitfalls: [
        'Giving each branch the full battery voltage when a series resistor sits in front.',
        'Carrying the old 3.0 A over after the branch opens.',
        'Putting a branch\'s own resistance on top in the current divider.',
      ],
      lessonParts: [1, 2],
      mcatTags: ['mcat-physics-electricity-kirchhoff-power-mcat', 'mcat-physics-electricity-dc-circuits-mcat', 'mcat-biological-basis-behavior-mcat'],
      checkpoint: [
        {
          question: 'An 18 V ideal battery feeds a 2 Ω resistor in series with a parallel pair of 6 Ω and 12 Ω. What current flows in the 6 Ω branch?',
          options: ['1.5 A', '3.0 A', '2.0 A', '1.0 A'],
          correctAnswer: 2,
          explanation:
            'The pair is (6)(12)/(6 + 12) = 4 Ω, so R_eq = 2 + 4 = 6 Ω and I = 18/6 = 3.0 A. The 2 Ω resistor drops 6 V, leaving 12 V across the pair: I₆ = 12/6 = 2.0 A and I₁₂ = 12/12 = 1.0 A, which add to 3.0 A. 1.5 A splits the current evenly; 3.0 A is the total current (and also what 18 V across 6 Ω gives if the series drop is forgotten); and 1.0 A is the 12 Ω branch, the larger share given to the larger resistance.',
        },
        {
          question: 'An 18 V ideal battery feeds a 3 Ω resistor in series with two 6 Ω resistors in parallel. One of the 6 Ω resistors then breaks open. What happens to the current in the other 6 Ω resistor?',
          options: [
            'It rises from 1.5 A to 2.0 A',
            'It stays the same, at 1.5 A',
            'It rises from 1.5 A to 3.0 A',
            'It falls from 1.5 A to 1.0 A',
          ],
          correctAnswer: 0,
          explanation:
            'Before: the pair is 3 Ω, R_eq = 6 Ω and I = 3.0 A, split 1.5 A per branch. After: R_eq = 3 + 6 = 9 Ω and I = 2.0 A, all of it through the surviving resistor, so its current rises. "Stays the same" treats the branch as independent, which holds only directly across the source; 3.0 A keeps the old total current although R_eq rose; and 1.0 A still splits the new total between two branches, though only one is left.',
        },
        {
          question: 'An electrode drives 6.0 mA into two parallel tissue paths: blood at 2 kΩ and bone at 10 kΩ. What current flows through the blood path?',
          options: ['1.0 mA', '3.0 mA', '6.0 mA', '5.0 mA'],
          correctAnswer: 3,
          explanation:
            'The current divider puts the OTHER resistance on top: I_blood = 6.0 × 10/(2 + 10) = 5.0 mA, leaving 1.0 mA for bone; check: (5.0 mA)(2 kΩ) = (1.0 mA)(10 kΩ) = 10 V across both. 1.0 mA puts the blood path\'s own resistance on top and so gives the bone current; 3.0 mA splits evenly; and 6.0 mA sends all of it down the path of least resistance, but every parallel path carries some current.',
        },
      ],
    },
    // ── 5 · Power, energy and safety (concepts) ──────────────────────────
    {
      title: 'Power, Energy and Safety',
      minutes: 7,
      goal: 'Choose the power form that fits what the circuit holds fixed, scale power with factor changes, convert power and time to energy and kilowatt-hours, and explain why the current through the body does the harm.',
      keyPoints: [
        'Each coulomb that drops through ΔV gives up qΔV, and I counts coulombs per second, so P = IV = I²R = V²/R, in watts (1 W = 1 J/s = 1 V·A).',
        'Pick the form by what is fixed. Same current (series): P = I²R, so the LARGER R dissipates more. Same voltage (parallel, any outlet): P = V²/R, so the SMALLER R dissipates more. One resistor obeys both forms; the "more R, more or less power?" paradox disappears once you ask which quantity is fixed.',
        'Multiply factor changes: at fixed R, doubling I quadruples P; at fixed V, halving R doubles P; if V triples and R doubles, P changes by 3²/2 = 9/2. For an ideal source, V·I_total equals the sum of the resistor powers.',
        'Energy is E = Pt. The kilowatt-hour is a unit of ENERGY: 1 kWh = (1000 W)(3600 s) = 3.6 × 10⁶ J.',
        'Joule heating: in a resistor, all the electrical energy becomes heat at P = I²R. Power lines run at high voltage so the same power needs less current, and the line loss I²R falls with the square of that current.',
        'Current, not voltage, does the harm: I = V/R_body. Dry skin holds most of the resistance (about 10⁵ Ω); wet or broken skin drops it to about 10³ Ω, so the same voltage drives about 100 times the current. Hand-to-hand paths cross the chest, and a static spark is harmless because it carries very little charge.',
      ],
      showOnScreen: [
        'Charges stepping down a voltage drop, each releasing qΔV, with a stopwatch turning energy per coulomb into energy per second',
        'The two-bulb figure: R and 2R in series (same I, the 2R bulb glows) and in parallel (same V, the R bulb glows)',
        'A factor-change panel: P = V²/R with V × 3 and R × 2 feeding a live 9/2 readout',
        'An electricity meter ticking in kWh beside a joule counter: 1 kWh = 3.6 × 10⁶ J',
        'A transmission line at low and at high voltage: the current arrow shrinks, and the line\'s glow shrinks with its square',
        'A body outline with current crossing the chest: a thin arrow for dry skin, a thick one for wet skin',
        'The "Remember" recap',
        'End card: "Up next: Power, Energy and Safety: Worked Examples"',
      ],
      pitfalls: [
        'Using P = I²R with the current held fixed when the circuit actually holds the voltage fixed.',
        'Treating the kilowatt-hour as a unit of power.',
        'Blaming the voltage alone for a shock: the current through the body does the harm.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-kirchhoff-power-mcat', 'mcat-physics-mechanics-work-energy-power-mcat', 'mcat-biological-basis-behavior-mcat'],
      checkpoint: [
        {
          question: 'A space heater and a lamp plug into the same household outlet, and the heater\'s resistance is the smaller of the two. Which draws more power, and why?',
          options: [
            'The lamp, since P = I²R favours the larger resistance',
            'The heater, since P = V²/R favours the smaller resistance',
            'Neither, since both run at the same outlet voltage',
            'Neither, since P = IV and both share the same voltage',
          ],
          correctAnswer: 1,
          explanation:
            'Household outlets are wired in parallel, so both appliances get the same voltage and P = V²/R applies: the smaller resistance draws more current and more power. P = I²R favours the larger resistance only when the CURRENT is shared, as in series; the same voltage does not mean the same power when the resistances differ; and in P = IV the voltages match but the currents do not.',
        },
        {
          question: 'A lab supply holds the current through a heating element fixed. The element is swapped for one with twice the resistance. What happens to the power it dissipates?',
          options: ['It halves', 'It quadruples', 'It stays the same', 'It doubles'],
          correctAnswer: 3,
          explanation:
            'With the current held fixed, P = I²R is proportional to R, so doubling R doubles the power (the supply raises the voltage to keep I constant). Halving is the fixed-VOLTAGE result from V²/R, the outlet case; quadrupling squares the resistance factor, but only the current is squared; and the power must change, because R enters every form of the law once I is fixed.',
        },
        {
          question: 'The same 120 V source is touched hand to hand, first with dry skin and then with wet skin. Why is the wet-skin contact far more dangerous?',
          options: [
            'Wet skin raises the voltage that the body receives',
            'Wet skin raises resistance, so more power is absorbed',
            'Wet skin lowers resistance, so far more current flows',
            'Water stores charge that then discharges into the heart',
          ],
          correctAnswer: 2,
          explanation:
            'The source fixes the voltage. Wet skin cuts the body\'s resistance from about 10⁵ Ω to about 10³ Ω, so I = V/R rises about a hundredfold, and it is current that disrupts nerve and heart tissue. The voltage is set by the source, not by the skin; wet skin lowers resistance rather than raising it (and at fixed voltage a higher R would mean LESS power, P = V²/R); and water stores no charge to discharge.',
        },
      ],
    },
    // ── 6 · Power, energy and safety (worked examples) ───────────────────
    {
      title: 'Power, Energy and Safety: Worked Examples',
      minutes: 5,
      goal: 'Find an appliance\'s current, resistance, energy use and cost from its power rating, and find the current and power through the body for dry and wet skin.',
      keyPoints: [
        'From a rating at a known voltage: I = P/V, then R = V/I (or R = V²/P), and check with the third form.',
        'Energy and cost: convert minutes to hours and watts to kilowatts, multiply for kWh, then multiply by the price; multiply by 3.6 × 10⁶ to turn kWh into joules.',
        'Body problems: I = V/R_body for each skin condition, then P = V²/R; at fixed voltage, 100 times less resistance means 100 times the current and 100 times the power.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the kettle with its rating label, the three power forms side by side, then an electricity meter ticking to 0.30 kWh and a 6-cent price tag',
        'Example 2: the body-path figure with a thin dry-skin arrow and a thick wet-skin arrow, the two currents and powers in a two-row table, and the 0.1 A threshold line',
        'The "Remember" recap of the method',
        'End card: "Up next: Ranking Bulb Brightness"',
      ],
      workedExample:
        'Example 1: A 1500 W electric kettle runs on a 120 V outlet for 12 minutes. (a) What current does it draw? (b) What is its resistance while running? (c) How much energy does it use, in kilowatt-hours and in joules? (d) At 20 cents per kilowatt-hour, what does that cost? (a) I = P/V = 1500/120 = 12.5 A; (b) R = V/I = 120/12.5 = 9.6 Ω, and V²/R = 14,400/9.6 = 1500 W checks; (c) 12 min = 0.20 h, so E = (1.5 kW)(0.20 h) = 0.30 kWh = 0.30 × 3.6 × 10⁶ J ≈ 1.1 × 10⁶ J, the same as (1500 W)(720 s) = 1.08 × 10⁶ J; (d) 0.30 kWh × 20 cents = 6 cents. Example 2: A person grips a 120 V conductor with one hand while touching a grounded pipe with the other. The hand-to-hand body path is 1 × 10⁵ Ω with dry skin and 1 × 10³ Ω with wet skin. (a) What current flows in each case? (b) How much power is dissipated in the body in each case? (c) If a passage puts the fibrillation threshold near 0.1 A, which case is potentially lethal? (a) Dry: 120/10⁵ = 1.2 × 10⁻³ A = 1.2 mA; wet: 120/10³ = 0.12 A = 120 mA, 100 times larger; (b) P = V²/R gives 14,400/10⁵ = 0.144 W dry and 14,400/10³ = 14.4 W wet; (c) the wet case, since 0.12 A is above the threshold: the voltage never changed, only the resistance.',
      pitfalls: [
        'Leaving watts as watts or minutes as minutes when computing kilowatt-hours.',
        'Dividing the power by the current and calling the result a resistance (P/I is the voltage).',
        'Using P = I²R without squaring the current.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-kirchhoff-power-mcat', 'mcat-physics-mechanics-work-energy-power-mcat', 'mcat-biological-basis-behavior-mcat'],
      checkpoint: [
        {
          question: 'A 1.2 kW space heater runs for 30 minutes a day for 30 days, and electricity costs 15 cents per kilowatt-hour. What does that cost in total?',
          options: ['162 dollars', '2.70 dollars', '0.09 dollars', '2,700 dollars'],
          correctAnswer: 1,
          explanation:
            'The heater runs 0.50 h a day for 30 days, 15 h in all, so E = (1.2 kW)(15 h) = 18 kWh, and 18 × 15 cents = 270 cents = 2.70 dollars. 162 dollars reads 30 minutes as 30 hours (1,080 kWh); 0.09 dollars stops after a single day (0.60 kWh); and 2,700 dollars treats 1,200 W as if it were 1,200 kW (18,000 kWh).',
        },
        {
          question: 'A heating pad is rated at 600 W on a 120 V outlet. What is its resistance while it runs?',
          options: ['600 Ω', '0.042 Ω', '120 Ω', '24 Ω'],
          correctAnswer: 3,
          explanation:
            'The current is I = P/V = 600/120 = 5.0 A, so R = V/I = 120/5.0 = 24 Ω; directly, R = V²/P = 14,400/600 = 24 Ω. 600 Ω comes from dividing V by P to get a "current" of 0.20 A and then taking V/I; 0.042 Ω flips V²/P into P/V²; and 120 Ω divides the power by the current, which gives the voltage, not a resistance.',
        },
        {
          question: 'A passage gives a hand-to-hand body resistance of about 1.0 × 10⁵ Ω with dry skin and 1.0 × 10³ Ω with wet skin. A worker with wet hands touches 50 V across both hands. What current flows, and what power does the body dissipate?',
          options: ['50 mA and 2.5 W', '50 A and 2,500 W', '0.50 mA and 0.025 W', '50 mA and 50 W'],
          correctAnswer: 0,
          explanation:
            'With wet skin, I = V/R = 50/(1.0 × 10³) = 0.050 A = 50 mA, and P = V²/R = 2,500/1,000 = 2.5 W, which I²R = (0.050)²(1,000) confirms. 50 A and 2,500 W reads 1.0 × 10³ Ω as 1.0 Ω; 0.50 mA and 0.025 W uses the dry-skin resistance; and 50 W forgets to square the current in I²R.',
        },
      ],
    },
    // ── 7 · Bulb brightness (concepts) ───────────────────────────────────
    {
      title: 'Ranking Bulb Brightness',
      minutes: 7,
      goal: 'Rank bulb brightness in series, parallel and mixed circuits by asking what each bulb shares, use ratings to find resistance, and predict what happens when a bulb burns out, is shorted or is added.',
      keyPoints: [
        'Brightness is power. Treat bulbs as ohmic resistors unless told otherwise (real filaments are not). For identical bulbs on an ideal source V, call one bulb alone P₀ = V²/R.',
        'n identical bulbs in series: each gets V/n and P₀/n², for a total of P₀/n. n in parallel: each keeps V and P₀, for a total of nP₀. Two in series each glow at one QUARTER of their solo power.',
        'Ratings give resistance: R = V²/P, so a LOWER wattage means a HIGHER resistance. In parallel (household use) the higher-wattage bulb is brighter; in series the order SWAPS, because the shared current makes the higher-resistance bulb dissipate more.',
        'Rank without computing: find what each bulb shares (current in series, voltage in parallel), pick the power form that holds that quantity constant, and compare. In a mixed circuit, a bulb carrying the whole current outshines bulbs that split it: twice the current means four times the power.',
        'A burned-out bulb is an open circuit: a series string goes dark; a parallel bank across an ideal source carries on; in A + (B ∥ C), losing C dims A and brightens B. Adding a bulb in series dims every bulb in that path; adding one directly across the source leaves the others unchanged but raises the total power.',
        'Household wiring is parallel: each appliance switched on adds a branch, lowering R_eq and raising the total current until the breaker, in SERIES with the branch circuit, trips.',
      ],
      showOnScreen: [
        'The brightness table filling row by row (one bulb, n in series, n in parallel), with glowing bulbs sized by power',
        'The two-bulb figure: a 60 W and a 100 W bulb swapping brightness between parallel and series',
        'The ranking routine as three cards: "What is shared?" → "Pick the form" → "Compare"',
        'The mixed circuit A + (B ∥ C): the whole current through A and half through each of B and C, A glowing four times as bright; then C pops open, A dims and B brightens',
        'A series string going dark when one bulb breaks, beside a parallel bank that keeps glowing',
        'A house panel with branch circuits as parallel rungs and a breaker in series on the supply wire',
        'The "Remember" recap',
        'End card: "Up next: Ranking Bulb Brightness: Worked Examples"',
      ],
      pitfalls: [
        'Assuming the higher-wattage bulb is always brighter: in series the lower-wattage bulb wins.',
        'Forgetting the square: two series bulbs each get half the voltage but a quarter of the power.',
        'Assuming parallel bulbs are always independent: behind a series bulb, they are not.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-kirchhoff-power-mcat', 'mcat-physics-electricity-dc-circuits-mcat'],
      checkpoint: [
        {
          question: 'Identical bulbs sit on three identical ideal batteries: bulb L is alone on one, bulb S is one of two in series on another, and bulb T is one of two in parallel on the third. Rank their brightness.',
          options: [
            'L is brightest, then T, then S',
            'T is brightest, then L, then S',
            'T and L tie, and S is dimmest',
            'All three are equally bright',
          ],
          correctAnswer: 2,
          explanation:
            'T and L each have the full battery voltage, so each dissipates P₀ = V²/R. S gets only V/2, so its power is (V/2)²/R = P₀/4. "L, then T" splits a fixed output between the parallel bulbs, but each parallel bulb draws its own full current; "T, then L" thinks a second parallel bulb drives the first one harder; and "all equal" ignores that the two series bulbs share the voltage.',
        },
        {
          question: 'Identical bulb A is in series with a parallel pair of identical bulbs B and C, all across an ideal battery. A wire is then connected across bulb A. What happens?',
          options: [
            'A goes out, and B and C both brighten',
            'A goes out, and B and C go out too',
            'A goes out, and B and C stay the same',
            'A brightens, and B and C both go out',
          ],
          correctAnswer: 0,
          explanation:
            'The wire holds both ends of A at the same potential, so A has no voltage across it and goes dark. B and C now sit directly across the battery, rising from V/3 each to the full V, so each glows about nine times as bright. A short does not break the loop; B and C do change, because A no longer takes two-thirds of the voltage; and the wire bypasses A, not the pair.',
        },
        {
          question: 'A string of identical bulbs wired in series runs from a fixed-voltage outlet. The string is shortened from 20 bulbs to 10. Treating the bulbs as ohmic, how does each remaining bulb\'s brightness change?',
          options: ['Two times as bright', 'One half as bright', 'The same as before', 'Four times as bright'],
          correctAnswer: 3,
          explanation:
            'Each series bulb gets V/n, so its voltage doubles from V/20 to V/10, and since P = V²/R its power goes up by 2² = 4. "Two times" forgets the square; "the same" treats each bulb as stuck at a fixed rating; and "one half" assumes fewer bulbs means less power for each, when fewer bulbs means a larger share of the voltage for each.',
        },
      ],
    },
    // ── 8 · Bulb brightness (worked examples) ────────────────────────────
    {
      title: 'Ranking Bulb Brightness: Worked Examples',
      minutes: 5,
      goal: 'Find the powers of two rated bulbs in series and compare them with the parallel case, and rank a mixed circuit before and after a bulb burns out, first by reasoning and then with numbers.',
      keyPoints: [
        'From ratings: R = V²/P, so the lower-wattage bulb has the larger resistance.',
        'Series: one current, P = I²R, the larger R wins. Parallel: one voltage, P = V²/R, the smaller R wins.',
        'Mixed circuits: rank first by sharing (a bulb with twice the current has four times the power), then confirm with R_eq, the total current and each drop.',
        'After a burnout, re-solve from R_eq: the bulb in series with the bank dims and the surviving bank bulb brightens.',
        'Check: the bulb powers add up to the battery\'s V·I.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the two bulbs drawn with their ratings and the R = V²/P conversions, then the series loop with the 60 W bulb glowing brighter, and a flip to the parallel version where the 100 W bulb wins',
        'Example 2: the A + (B ∥ C) circuit with current arrows (2 A through A, 1 A through each of B and C) and glows sized by power; then C goes dark and the glows of A and B resize to match',
        'The "Remember" recap of the method',
        'End card: "Up next: EMF and Terminal Voltage"',
      ],
      workedExample:
        'Example 1: A 60 W bulb and a 100 W bulb, both rated at 120 V, are wired in series across a 120 V outlet. Treat them as ohmic. (a) What is each bulb\'s resistance? (b) What current flows, and what power does each bulb dissipate? (c) Which glows brighter, and how does that compare with the two plugged in separately (in parallel)? (a) R₆₀ = 120²/60 = 14,400/60 = 240 Ω and R₁₀₀ = 14,400/100 = 144 Ω; (b) R_total = 384 Ω, so I = 120/384 ≈ 0.31 A, P₆₀ = I²(240) ≈ 23 W and P₁₀₀ = I²(144) ≈ 14 W, a ratio of 240/144 = 5/3; (c) the 60 W bulb is brighter, because the shared current favours the larger resistance (P = I²R), and neither bulb reaches its rating; in parallel each gets the full 120 V and the 100 W bulb wins, at 100 W against 60 W. Example 2: Identical 6.0 Ω bulbs: bulb A is in series with a parallel pair B and C across an 18 V ideal battery. (a) Rank the bulbs\' brightness without computing. (b) Find each bulb\'s power. (c) Bulb C burns out. Find the new powers of A and B, and say which dims and which brightens. (a) All of the current passes through A and half of it through each of B and C, so A is brightest, with 2² = 4 times the power of B, and B and C tie; (b) R_eq = 6 + 3 = 9 Ω and I = 18/9 = 2.0 A: A drops 12 V and dissipates (2.0)²(6) = 24 W; B and C each carry 1.0 A at 6 V, 6.0 W each; and 24 + 6 + 6 = 36 W = (18 V)(2.0 A) checks; (c) now A and B are in series: R_eq = 12 Ω, I = 1.5 A, and each drops 9 V and dissipates (1.5)²(6) = 13.5 W, so A dims (24 → 13.5 W), B brightens (6.0 → 13.5 W), and the two now tie.',
      pitfalls: [
        'Assuming each bulb runs at its rated power when the bulbs are in series.',
        'Using the other bulb\'s resistance in I²R.',
        'Holding the total current fixed after a bulb burns out.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-kirchhoff-power-mcat', 'mcat-physics-electricity-dc-circuits-mcat'],
      checkpoint: [
        {
          question: 'A 40 W bulb and a 60 W bulb, both rated at 120 V, are wired in series across a 120 V outlet. Treating them as ohmic, what power does the 40 W bulb actually dissipate?',
          options: ['40.0 W', '9.6 W', '24.0 W', '14.4 W'],
          correctAnswer: 3,
          explanation:
            'From the ratings, R₄₀ = 14,400/40 = 360 Ω and R₆₀ = 14,400/60 = 240 Ω, so I = 120/600 = 0.20 A and P₄₀ = (0.20)²(360) = 14.4 W, brighter than the 60 W bulb\'s 9.6 W. 40.0 W assumes the bulb gets its rated 120 V, which happens only in parallel; 9.6 W uses the 60 W bulb\'s 240 Ω, so it is the other bulb\'s power; and 24.0 W is the power of the whole string, 120²/600.',
        },
        {
          question: 'Identical 4.0 Ω bulbs: bulb A is in series with a parallel pair B and C across a 12 V ideal battery. Bulb C burns out. What power does bulb B dissipate now?',
          options: ['9.0 W', '4.0 W', '16 W', '36 W'],
          correctAnswer: 0,
          explanation:
            'Before: R_eq = 4 + 2 = 6 Ω and I = 2.0 A, so B carries 1.0 A and dissipates 4.0 W. After C opens, A and B are in series: R_eq = 8 Ω and I = 1.5 A, so P_B = (1.5)²(4.0) = 9.0 W, brighter than before, while A dims from 16 W to 9.0 W. 4.0 W assumes a parallel bulb never changes; 16 W pushes the old 2.0 A total through B, forgetting that R_eq rose; and 36 W gives B the full 12 V, ignoring the voltage A still takes.',
        },
        {
          question: 'Identical bulbs X and Y in series form one branch, and an identical bulb Z alone forms a second branch. Both branches connect directly across the same ideal battery. Which bulb is brightest, and by what factor?',
          options: [
            'Z, with 2 times the power of X',
            'Z, with 4 times the current of X',
            'Z, with 4 times the power of X',
            'All three, with equal power',
          ],
          correctAnswer: 2,
          explanation:
            'Each branch has the full battery voltage. Z has all of it, so it dissipates P₀ = V²/R; X and Y split it, V/2 each, so each dissipates (V/2)²/R = P₀/4. Z is brightest, with 4 times the power of X. "2 times the power" halves the power along with the voltage, forgetting the square; Z carries only twice X\'s current (V/R against V/2R), and it is the power that is four times larger; and "equal power" gives every bulb the full voltage, when only each BRANCH has it.',
        },
      ],
    },
  ],
}
