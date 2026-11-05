import type { ShotList } from '../types'

/**
 * Shot list: MCAT Physics — Circuits Part 4: Capacitor Networks & Bioelectricity
 * (topic mcat-physics-electricity-rc-circuits-mcat, the last of four Circuits topics).
 *
 * Source: the 2-part lesson (src/data/interactive-lessons/mcat-mcat-physics-electricity-rc-circuits-mcat-part1..2.ts),
 * its deck figures (EC_ALL at RC_CIRCUITS_AT in src/data/deck-figures/index.ts) and its
 * lesson-built exit pool. Eight Manim clips in four pairs (owner format, Nov 2026):
 * a CONCEPT clip that teaches the idea and ends on the "Remember" recap, then a
 * WORKED-EXAMPLES clip with two examples, each shown in full with a pause-and-try
 * prompt before the solution. Concept clips get conceptual checkpoint questions;
 * worked-example clips get questions that mirror their two examples with new numbers.
 * Clips 1–2 follow lesson Part 1 (Capacitor Networks; Worked Example — Series Capacitors
 * Share Charge, Not Voltage). Clips 3–4 follow lesson Part 1 (Capacitors in DC Circuits;
 * The Time Constant; Worked Example — Steady-State Voltage Across a Capacitor).
 * Clips 5–6 follow lesson Part 2 (The Cell Membrane Is an RC Circuit; Myelin and
 * Conduction Speed). Clips 7–8 follow lesson Part 2 (Defibrillators and Capacitor
 * Discharge; Passage Strategy — What Is Held Constant?; Worked Example — Defibrillator
 * Energy and Power). The low-yield extras (the 0.69τ half-time, specific membrane
 * capacitance, the length constant, typical shock energies) are left out.
 *
 * The checkpoint questions are what a YouTube viewer answers at studymondo.com/v/<code>
 * (src/data/video-short-links.ts). Proposed codes: capnet1/capnet2, tau1/tau2,
 * membrane1/membrane2, defib1/defib2. They use new scenarios and numbers, so they
 * never repeat an exit-quiz item or a worked example.
 */
export const shotList: ShotList = {
  courseSlug: 'mcat-prep',
  topicSlug: 'mcat-physics-electricity-rc-circuits-mcat',
  title: 'Circuits Part 4: Capacitor Networks & Bioelectricity',
  overview:
    'Eight animated clips in four pairs that finish the circuits story: how capacitors combine in series and parallel, how a capacitor behaves in a DC circuit and how fast it charges through a resistor, how a neuron\'s membrane and its myelin work as an RC circuit, and how a defibrillator turns a slow charge into a fast, powerful shock. Each idea gets a concept clip followed by a worked-examples clip in which every problem is shown in full, with a moment to pause and try it before the solution. Narration stays exam-neutral, so the clips also serve introductory physics; the biology links (the membrane as a capacitor, ion channels as resistors, myelin, the defibrillator) are the ones the exam leans on. Each clip ends with three checkpoint questions; the topic exit quiz follows the last clip.',
  clips: [
    // ── 1 · Capacitor networks (concepts) ────────────────────────────────
    {
      title: 'Capacitor Networks',
      minutes: 6.5,
      goal: 'Combine capacitors in series and parallel, explain why series capacitors share charge and parallel ones share voltage, and predict which capacitor takes the larger voltage or charge.',
      keyPoints: [
        'Capacitors combine by rules that are the exact REVERSE of the resistor rules.',
        'Parallel: every capacitor sees the same voltage and the charges add, Q = C₁V + C₂V, so C_eq = C₁ + C₂ + …, larger than the largest. Side-by-side plates act like one bigger plate; the larger C holds more charge.',
        'Series: the joined inner plates are isolated metal that stays neutral, so +Q on one forces −Q on its partner. Every series capacitor carries the same Q, the voltages add, and 1/C_eq = 1/C₁ + 1/C₂ + …, smaller than the smallest. Stacked gaps act like one wider gap.',
        'In series, V = Q/C gives the SMALLER capacitor the LARGER voltage, the mirror image of series resistors.',
        'Shortcuts: product over sum for two in series; N identical capacitors give C/N in series and NC in parallel.',
      ],
      showOnScreen: [
        'Two capacitors side by side across a battery: the same voltage bar on each, charges stacking, then the plates sliding together into one wide plate',
        'Two capacitors in series: the joined inner plates outlined as one isolated island, +Q and −Q appearing on it with a net "0" label',
        'The series stack morphing into one capacitor with a wider gap, C_eq shrinking on a readout',
        'Voltage bars on a small and a large series capacitor: the small one takes the taller bar',
        'The capacitor-vs-resistor comparison table filling row by row (same for each, what adds, C_eq, size, physical picture, who gets more)',
        'The "Remember" recap',
        'End card: "Up next: Capacitor Networks: Worked Examples"',
      ],
      pitfalls: [
        'Using the resistor formulas on capacitors: series capacitors combine by reciprocals, parallel ones add.',
        'Giving the larger series capacitor the larger voltage, as for resistors.',
        'Splitting the battery voltage equally among unequal series capacitors.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-rc-circuits-mcat', 'mcat-physics-electricity-emf-capacitors-mcat'],
      checkpoint: [
        {
          question: 'A capacitor is charged by a battery that stays connected. A second capacitor is then connected in parallel with the first. What happens?',
          options: [
            'The first loses half its charge; the total stays fixed',
            'The first keeps its charge; the total charge rises',
            'The first keeps its charge; the total charge falls',
            'Both gain charge, since the equivalent C rises',
          ],
          correctAnswer: 1,
          explanation:
            'In parallel, each capacitor sits across the same battery voltage, so the first still holds Q₁ = C₁V, unchanged. The capacitances add, so C_eq rises and the battery moves more total charge, Q = C_eqV. Losing half the charge treats the pair as an isolated capacitor sharing a fixed charge; a falling total applies the series rule, where C_eq drops; and "both gain" confuses the larger C_eq with a change in each capacitor, whose voltage has not changed.',
        },
        {
          question: 'Two unequal capacitors are connected in series and charged by a battery. Why do both carry exactly the same charge?',
          options: [
            'The battery puts the same voltage across each capacitor',
            'Charge flows across each gap from one plate to the next',
            'Each capacitor takes on the same capacitance in series',
            'The joined inner plates are isolated and stay neutral',
          ],
          correctAnswer: 3,
          explanation:
            'The two inner plates are wired to each other and to nothing else, so that piece of metal stays neutral: if one inner plate holds −Q, its partner must hold +Q, which forces the same Q on both capacitors. Equal voltage is the PARALLEL rule (series capacitors share charge, not voltage); no charge crosses the insulating gap; and series wiring does not change either capacitor\'s capacitance.',
        },
        {
          question: 'Two identical parallel-plate capacitors are connected in series. Their combination acts like a single capacitor of the same type with what change?',
          options: [
            'Twice the gap between its plates',
            'Twice the area of each of its plates',
            'Half the gap between its plates',
            'A dielectric of κ = 2 between its plates',
          ],
          correctAnswer: 0,
          explanation:
            'Two identical capacitors in series give C/2, and stacking the gaps is like widening one gap: C = κε₀A/d halves when d doubles. Twice the plate area is the picture for PARALLEL capacitors; half the gap and a κ = 2 dielectric would both DOUBLE the capacitance, the opposite of what a series pair does.',
        },
      ],
    },
    // ── 2 · Capacitor networks (worked examples) ─────────────────────────
    {
      title: 'Capacitor Networks: Worked Examples',
      minutes: 5,
      goal: 'Solve a series pair and a series-parallel network completely: equivalent capacitance, charge on each capacitor and voltage across each.',
      keyPoints: [
        'Collapse the network from the inside out: add parallel capacitances, combine series ones by reciprocals (product over sum for two).',
        'Q = C_eqV gives the charge on the series chain; every capacitor in series with the battery carries it.',
        'V = Q/C gives each voltage; a parallel group shares one voltage and splits the charge in proportion to C.',
        'Check: series voltages add to the battery voltage; parallel charges add to the group\'s charge.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the series pair with one charge label shared by both, then voltage bars of 8.0 V and 4.0 V stacking to 12 V',
        'Example 2: the network collapsing step by step (2.0 ∥ 4.0 → 6.0 μF, then 6.0 in series with 3.0 → 2.0 μF), then walked back out to each charge and voltage',
        'The "Remember" recap of the method',
        'End card: "Up next: RC Circuits and the Time Constant"',
      ],
      workedExample:
        'Example 1: A 3.0 μF and a 6.0 μF capacitor are in series across a 12 V battery. (a) What is the equivalent capacitance? (b) How much charge sits on each capacitor? (c) What is the voltage across each capacitor? (a) C_eq = (3.0)(6.0)/(3.0 + 6.0) = 2.0 μF, smaller than either; (b) Q = (2.0 μF)(12 V) = 24 μC on each; (c) V₃ = 24/3.0 = 8.0 V and V₆ = 24/6.0 = 4.0 V, adding to 12 V: the smaller capacitor takes the larger voltage. Example 2: A 2.0 μF and a 4.0 μF capacitor are in parallel, and that pair is in series with a 3.0 μF capacitor across an 18 V battery. (a) What is the equivalent capacitance? (b) What are the charge on and voltage across the 3.0 μF capacitor? (c) What are the voltage across the parallel pair and the charge on each of its capacitors? (a) 2.0 + 4.0 = 6.0 μF, then (6.0)(3.0)/(6.0 + 3.0) = 2.0 μF; (b) Q = (2.0 μF)(18 V) = 36 μC, so V = 36/3.0 = 12 V; (c) the pair also carries 36 μC, so V = 36/6.0 = 6.0 V (12 + 6.0 = 18 V checks), and Q = (2.0)(6.0) = 12 μC and (4.0)(6.0) = 24 μC, adding to 36 μC.',
      pitfalls: [
        'Adding series capacitances or using reciprocals for a parallel pair.',
        'Forgetting to invert 1/C_eq at the end.',
        'Giving a capacitor inside a parallel group the whole chain\'s charge or the full battery voltage.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-rc-circuits-mcat', 'mcat-physics-electricity-emf-capacitors-mcat'],
      checkpoint: [
        {
          question: 'A 5.0 μF and a 20 μF capacitor are connected in series across a 25 V battery. What is the voltage across the 5.0 μF capacitor?',
          options: ['5.0 V', '12.5 V', '20 V', '25 V'],
          correctAnswer: 2,
          explanation:
            'C_eq = (5.0)(20)/(5.0 + 20) = 4.0 μF, so Q = (4.0 μF)(25 V) = 100 μC on each capacitor, and V = Q/C = 100/5.0 = 20 V (the 20 μF takes the other 5.0 V). 5.0 V is the larger capacitor\'s share, the resistor intuition that the "bigger" element takes more; 12.5 V splits the voltage equally; and 25 V gives the capacitor the full battery voltage, the parallel rule.',
        },
        {
          question: 'A 10 μF and a 15 μF capacitor are connected in series across a 20 V battery. How much charge sits on each capacitor?',
          options: ['120 μC', '500 μC', '200 μC', '3.3 μC'],
          correctAnswer: 0,
          explanation:
            'C_eq = (10)(15)/(10 + 15) = 6.0 μF, and Q = C_eqV = (6.0 μF)(20 V) = 120 μC on each, since series capacitors share one charge. 500 μC adds the capacitances (25 μF), the parallel rule; 200 μC gives the 10 μF capacitor the whole 20 V; and 3.3 μC stops at 1/C_eq = 1/6 without inverting it.',
        },
        {
          question: 'A 1.0 μF and a 5.0 μF capacitor are in parallel, and that pair is in series with a 3.0 μF capacitor across a 12 V battery. What is the charge on the 5.0 μF capacitor?',
          options: ['24 μC', '20 μC', '40 μC', '60 μC'],
          correctAnswer: 1,
          explanation:
            'The pair adds to 6.0 μF; in series with 3.0 μF, C_eq = (6.0)(3.0)/9.0 = 2.0 μF, so the chain carries Q = (2.0)(12) = 24 μC. The pair holds 24 μC at V = 24/6.0 = 4.0 V, so the 5.0 μF capacitor has (5.0)(4.0) = 20 μC (and the 1.0 μF has 4.0 μC). 24 μC is the whole pair\'s charge, not split; 40 μC uses the 3.0 μF capacitor\'s 8.0 V; and 60 μC gives the capacitor the full 12 V.',
        },
      ],
    },
    // ── 3 · RC circuits and the time constant (concepts) ─────────────────
    {
      title: 'RC Circuits and the Time Constant',
      minutes: 7,
      goal: 'Predict a capacitor\'s behavior the instant a switch closes and at steady state, and describe how charge, voltage and current change while it charges or discharges through a resistor.',
      keyPoints: [
        'At t = 0 an uncharged capacitor has V_C = Q/C = 0 and acts like a plain wire; for one resistor in series, I₀ = ε/R.',
        'At steady state a full capacitor carries no current and acts like an open branch. V_C equals the potential difference between the two points it connects; a resistor in series with it carries no current and drops no voltage.',
        'A capacitor\'s voltage cannot change instantly, because charge takes time to flow onto the plates; current can jump the moment a switch moves.',
        'The time constant τ = RC (ohms × farads = seconds). Charging: Q and V_C rise fast, then level off at Q_max = Cε, while the current starts at ε/R and decays. Discharging: charge, voltage and current all decay, and the current flows the OPPOSITE way.',
        'After 1τ a charging capacitor holds about 63% of its final charge (a discharging one keeps about 37%); after about 5τ treat it as full or empty.',
        'A bigger R or a bigger C slows things down; the battery voltage does NOT change τ, only the final charge.',
      ],
      showOnScreen: [
        'A switch closing on a battery, resistor and empty capacitor: the capacitor drawn as a wire at t = 0, current at its maximum',
        'The same circuit long after: the capacitor branch drawn as a cut wire, current zero, a voltmeter across the capacitor nodes',
        'Charging curves building in time: Q(t) rising and leveling off, I(t) starting high and decaying, with 63% marked at 1τ and "full" near 5τ',
        'Discharge curves: Q and I decaying, 37% marked at 1τ, and the current arrow flipping direction',
        'Sliders for R, C and ε: R and C stretch the curve in time, ε only raises its ceiling',
        'The "Remember" recap',
        'End card: "Up next: RC Circuits: Worked Examples"',
      ],
      pitfalls: [
        'Treating one time constant as fully charged: after 1τ it is only about 63% there.',
        'Letting the capacitor voltage jump when a switch closes.',
        'Subtracting a voltage drop across a resistor in series with a fully charged capacitor.',
        'Expecting a higher battery voltage to charge the capacitor in less time.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-rc-circuits-mcat', 'mcat-physics-electricity-kirchhoff-power-mcat'],
      checkpoint: [
        {
          question: 'A charged capacitor is connected across a resistor and discharges through it. Which description matches a graph of the capacitor\'s voltage against time?',
          options: [
            'Starts at its maximum, falls fast, then ever more slowly',
            'Falls at a steady rate until it reaches zero volts',
            'Rises quickly at first, then levels off at a maximum',
            'Holds steady at first, then drops suddenly to zero',
          ],
          correctAnswer: 0,
          explanation:
            'The discharge current is proportional to the voltage still on the capacitor, so the voltage falls fastest at the start and ever more slowly as it shrinks: an exponential decay toward zero. A steady fall would need a constant current; "rises and levels off" is the CHARGING curve for charge and voltage; and a capacitor\'s voltage never holds and then jumps, since charge takes time to leave the plates.',
        },
        {
          question: 'In an RC charging circuit, the resistor is replaced by one with twice the resistance, and the capacitor by one with half the capacitance. How does the charging time change?',
          options: [
            'It doubles, since a larger R slows the current',
            'It halves, since a smaller C fills more quickly',
            'It stays the same, since the product RC is unchanged',
            'It quadruples, since both changes slow the charging',
          ],
          correctAnswer: 2,
          explanation:
            'The charging time scales with τ = RC, and (2R)(C/2) = RC, so the two changes cancel. "Doubles" accounts for the resistor alone and "halves" for the capacitor alone. "Quadruples" gets the capacitor\'s effect backward: a SMALLER capacitance needs less charge and charges faster.',
        },
        {
          question: 'Long after a switch closes, a capacitor branch holds a resistor R₃ in series with the now fully charged capacitor. What is the voltage across R₃?',
          options: [
            'Equal to the capacitor\'s voltage, since they share a branch',
            'The full battery voltage, since the branch is now open',
            'R₃\'s share of the branch voltage, in proportion to its R',
            'Zero, since no current flows through that branch anymore',
          ],
          correctAnswer: 3,
          explanation:
            'A fully charged capacitor passes no current, so nothing flows through R₃ and V = IR = 0 across it; the capacitor takes the whole voltage between the branch\'s two nodes. Sharing a branch means sharing a CURRENT, not a voltage; the open gap sits at the capacitor, and it sees the voltage across its nodes, not necessarily the full battery; and splitting in proportion to R is the voltage-divider rule, which needs a current to flow.',
        },
      ],
    },
    // ── 4 · RC circuits (worked examples) ────────────────────────────────
    {
      title: 'RC Circuits: Worked Examples',
      minutes: 5,
      goal: 'Find the currents in an RC network at t = 0 and at steady state with the capacitor\'s final voltage, charge and energy, and use τ = RC to find charge and timing while a capacitor charges and discharges.',
      keyPoints: [
        't = 0 recipe: redraw each empty capacitor as a wire and solve the resistor network.',
        'Steady-state recipe: delete every capacitor branch, solve what remains, read V_C across the capacitor\'s two nodes, then Q = CV_C and U = ½CV_C².',
        'Timing recipe: τ = RC in base units; 63% of the final charge after 1τ, 37% left after 1τ of discharge, essentially done after 5τ.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the network at t = 0 (capacitor as a wire, 3.0 A splitting 1.5 A + 1.5 A), then at steady state (branch cut, 2.0 A, V_C = 8.0 V)',
        'Example 2: the charging curve with τ = 2.0 s marked, 230 μC at 1τ and "full" at 10 s, then the discharge curve with 130 μC left at 2.0 s and the current arrow reversed',
        'The "Remember" recap of the three recipes',
        'End card: "Up next: The Membrane as an RC Circuit"',
      ],
      workedExample:
        'Example 1: An ideal 12 V battery, a switch, R₁ = 2.0 Ω and R₂ = 4.0 Ω form one series loop. A side branch across R₂ holds R₃ = 4.0 Ω in series with an uncharged 5.0 μF capacitor. (a) Just after the switch closes, what current leaves the battery? (b) At that instant, how does the current split between R₂ and the capacitor branch? (c) At steady state, what current leaves the battery? (d) At steady state, what is the voltage across the capacitor? (e) What are its final charge and stored energy? (a) The capacitor acts as a wire: R₂ ∥ R₃ = (4.0)(4.0)/8.0 = 2.0 Ω, total 4.0 Ω, I₀ = 12/4.0 = 3.0 A; (b) R₂ = R₃, so 1.5 A each; (c) branch open: I = 12/(2.0 + 4.0) = 2.0 A; (d) V₂ = (2.0)(4.0) = 8.0 V, and R₃ carries no current, so V_C = 8.0 V; (e) Q = (5.0 μF)(8.0 V) = 40 μC and U = ½(5.0 × 10⁻⁶)(8.0)² = 1.6 × 10⁻⁴ J. Example 2: A 9.0 V battery charges an uncharged 40 μF capacitor through a 50 kΩ resistor. (a) What is the time constant? (b) What is the initial current? (c) What is the final charge, and about how much charge is there after 2.0 s? (d) About how long until it is essentially full? (e) The full capacitor is then disconnected and joined across the same resistor. About how much charge is left 2.0 s later, and which way does the current flow? (a) τ = (5.0 × 10⁴ Ω)(4.0 × 10⁻⁵ F) = 2.0 s; (b) I₀ = 9.0/5.0 × 10⁴ = 1.8 × 10⁻⁴ A = 0.18 mA; (c) Q_max = (40 μF)(9.0 V) = 360 μC, and after 2.0 s = 1τ, about 0.63 × 360 ≈ 230 μC; (d) 5τ = 10 s; (e) after 1τ of discharge about 0.37 × 360 ≈ 130 μC remains, and the current flows opposite to the charging current.',
      pitfalls: [
        'Reusing the t = 0 current at steady state, or the reverse.',
        'Subtracting a drop across R₃ when no current flows through it.',
        'Leaving kΩ or μF unconverted in τ = RC.',
        'Calling the capacitor full after one time constant.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-rc-circuits-mcat', 'mcat-physics-electricity-kirchhoff-power-mcat'],
      checkpoint: [
        {
          question: 'An ideal 24 V battery, a switch, R₁ = 4.0 Ω and R₂ = 6.0 Ω form one series loop. A branch across R₂ holds R₃ = 3.0 Ω in series with an uncharged capacitor. Just after the switch closes, what current leaves the battery?',
          options: ['2.4 A', '4.0 A', '1.8 A', '6.0 A'],
          correctAnswer: 1,
          explanation:
            'At t = 0 the empty capacitor acts like a wire, so R₃ is in parallel with R₂: (6.0)(3.0)/9.0 = 2.0 Ω, plus R₁ gives 6.0 Ω, and I₀ = 24/6.0 = 4.0 A. 2.4 A is the steady-state current, with the branch open (24/10); 1.8 A puts all three resistors in series (24/13); and 6.0 A treats the whole branch, R₃ included, as a short across R₂ (24/4.0).',
        },
        {
          question: 'An ideal 18 V battery, R₁ = 3.0 Ω and R₂ = 6.0 Ω form one series loop. A branch across R₂ holds R₃ = 2.0 Ω in series with a 10 μF capacitor. Long after the switch closes, what is the charge on the capacitor?',
          options: ['180 μC', '80 μC', '60 μC', '120 μC'],
          correctAnswer: 3,
          explanation:
            'At steady state the capacitor branch is open, so I = 18/(3.0 + 6.0) = 2.0 A, V₂ = (2.0)(6.0) = 12 V, and the capacitor sits at the full 12 V because R₃ carries no current: Q = (10 μF)(12 V) = 120 μC. 180 μC uses the full 18 V and ignores the drop across R₁; 80 μC subtracts a 4.0 V drop across R₃ that does not exist; and 60 μC reads the 6.0 V across R₁ instead of R₂.',
        },
        {
          question: 'A 12 V battery charges an uncharged 25 μF capacitor through a 20 kΩ resistor. About how much charge is on the capacitor 0.50 s after the switch closes?',
          options: ['190 μC', '300 μC', '110 μC', '150 μC'],
          correctAnswer: 0,
          explanation:
            'τ = (2.0 × 10⁴ Ω)(2.5 × 10⁻⁵ F) = 0.50 s, so 0.50 s is one time constant. The final charge is (25 μF)(12 V) = 300 μC, and after 1τ the capacitor holds about 63% of it: 0.63 × 300 ≈ 190 μC. 300 μC treats one time constant as full; 110 μC (37%) is the fraction LEFT after 1τ of discharging; and 150 μC assumes the capacitor is halfway there after 1τ.',
        },
      ],
    },
    // ── 5 · The membrane as an RC circuit (concepts) ─────────────────────
    {
      title: 'The Membrane as an RC Circuit',
      minutes: 7,
      goal: 'Map a neuron\'s membrane onto a circuit, predict how channels and myelin change its resistance, capacitance and time constant, and explain why myelin speeds conduction.',
      keyPoints: [
        'The lipid bilayer is a capacitor (a thin insulating core between two conducting salt solutions), ion channels are resistors in parallel with it, and each ion\'s concentration gradient is a battery (its Nernst potential).',
        'The field is enormous: about 70 mV across about 7 nm gives E = V/d = 1 × 10⁷ V/m.',
        'The resting potential is stored charge: a thin layer of excess negative charge on the inner face and positive on the outer. Q = C_mV is tiny, so firing does not measurably change bulk ion concentrations.',
        'The membrane voltage cannot jump; it charges and discharges with τ = R_mC_m. More open channels mean more parallel resistors, a lower R_m and a shorter τ; a longer τ lets inputs decay more slowly and favors temporal summation.',
        'Myelin wraps many membranes in SERIES: capacitors in series lower C_m (a wider gap), resistors in series raise R_m (less leak), so current reaches the next node of Ranvier and the action potential jumps node to node: saltatory conduction, fast and energy-efficient.',
        'A wider axon has lower internal resistance and conducts faster; in multiple sclerosis, lost myelin raises C_m and lowers R_m, so conduction slows or fails.',
      ],
      showOnScreen: [
        'A patch of membrane morphing into its circuit: bilayer → capacitor, channels → resistors in parallel, gradients → batteries',
        'The −70 mV membrane as a charged capacitor: a thin layer of − charge inside, + outside, with E = V/d = 1 × 10⁷ V/m labelled',
        'A step of input current and the membrane voltage curving up with τ = R_mC_m; then more channels opening, R_m falling, and the curve rising and fading faster',
        'Two inputs arriving close together on a long-τ and a short-τ membrane: only the long-τ trace sums to threshold',
        'An unmyelinated vs a myelinated axon: layers stacking as series capacitors and resistors, current leaking vs current reaching the next node, the action potential jumping node to node',
        'The "Remember" recap',
        'End card: "Up next: Membrane Circuits: Worked Examples"',
      ],
      pitfalls: [
        'Saying myelin raises capacitance: stacked layers in series LOWER it.',
        'Putting added channels in series: they are parallel paths, so R_m falls.',
        'Expecting one action potential to drain the cell\'s ions: the stored charge is tiny.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-rc-circuits-mcat', 'mcat-organ-systems-endocrine-nervous-mcat', 'mcat-biological-basis-behavior-mcat'],
      checkpoint: [
        {
          question: 'Neuron A has a membrane time constant of 5 ms; neuron B has one of 20 ms. Each receives the same brief input. Compared with A, how does B\'s membrane voltage respond?',
          options: [
            'It rises faster, and the change fades more slowly',
            'It rises more slowly, and the change fades faster',
            'It responds the same, since τ sets only the final voltage',
            'It rises more slowly, and the change fades more slowly',
          ],
          correctAnswer: 3,
          explanation:
            'τ = R_mC_m sets the pace of BOTH charging and discharging: a longer τ makes the voltage climb more slowly and decay more slowly afterward, which is why long-τ neurons favor temporal summation. The two mixed answers split one time constant into two different speeds, and τ sets how fast the voltage changes, not where it ends up.',
        },
        {
          question: 'An internode\'s myelin sheath is thinned by disease from 10 wrapped layers to 5. Treating the layers as identical membranes in series, how do the internode\'s capacitance and resistance change?',
          options: [
            'Capacitance halves and resistance doubles',
            'Capacitance doubles and resistance halves',
            'Both halve, since the sheath is half as thick',
            'Both double, since fewer layers stack up',
          ],
          correctAnswer: 1,
          explanation:
            'N identical layers in series give C/N and NR. Going from 10 layers to 5 changes C/10 to C/5, a doubling, and 10R to 5R, a halving: more charge is needed per millivolt and more current leaks out, so conduction slows. "Capacitance halves, resistance doubles" is the effect of ADDING layers; the two "both" answers treat capacitance as if it combined like resistance.',
        },
        {
          question: 'Suppose a membrane kept the same 70 mV across it while its insulating layer became twice as thick. How would the field inside it and its capacitance change?',
          options: [
            'The field halves, and the capacitance doubles',
            'The field doubles, and the capacitance halves',
            'Both the field and the capacitance halve',
            'Neither changes, since the voltage is fixed',
          ],
          correctAnswer: 2,
          explanation:
            'The field is E = V/d, so twice the thickness at the same voltage halves it; a parallel-plate capacitance is C = κε₀A/d, so a wider gap halves it too, the same reason myelin lowers C_m. "Capacitance doubles" gets C = κε₀A/d backward, "the field doubles" multiplies by d instead of dividing, and a fixed voltage still leaves both quantities depending on the thickness.',
        },
      ],
    },
    // ── 6 · Membrane circuits (worked examples) ──────────────────────────
    {
      title: 'Membrane Circuits: Worked Examples',
      minutes: 5,
      goal: 'Compute a membrane\'s time constant before and after channels open, and the field, stored charge and number of ions behind a resting potential.',
      keyPoints: [
        'τ = R_mC_m with R in ohms and C in farads gives seconds; combine the coefficients and the exponents separately.',
        'Opening channels lowers R_m by the stated factor, and τ falls by the same factor; C_m belongs to the bilayer and stays put.',
        'E = V/d and Q = C_mV with millivolts and nanometers converted; the number of monovalent ions is Q/e.',
        'Myelin\'s N layers in series divide the capacitance by N, so the same voltage needs 1/N of the charge.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the membrane circuit with live R_m and C_m readouts, the voltage curve stretching to τ = 30 ms, then compressing to 7.5 ms as channels open',
        'Example 2: a membrane cross-section with the 5.0 nm gap and the field arrows, a charge counter on each face, then 25 myelin layers wrapping it and the charge shrinking',
        'The "Remember" recap of the method',
        'End card: "Up next: Defibrillators: Slow Charge, Fast Shock"',
      ],
      workedExample:
        'Example 1: A neuron\'s membrane has R_m = 2.0 × 10⁸ Ω and C_m = 1.5 × 10⁻¹⁰ F. (a) What is its time constant? (b) A drug opens channels and lowers R_m to 5.0 × 10⁷ Ω. What is the new time constant? (c) Before the drug, how long after a step of input current does the membrane reach about 63% of its final change, and how long until the change is essentially complete? (a) τ = (2.0 × 10⁸)(1.5 × 10⁻¹⁰) = 3.0 × 10⁻² s = 30 ms; (b) τ = (5.0 × 10⁷)(1.5 × 10⁻¹⁰) = 7.5 × 10⁻³ s = 7.5 ms, a quarter of the old value because R_m fell to a quarter; (c) about 63% after 1τ = 30 ms, essentially complete after 5τ = 150 ms. Example 2: A cell membrane 5.0 nm thick has a capacitance of 200 pF and rests at −75 mV. (a) What is the field inside the membrane? (b) How much charge is separated across it? (c) About how many monovalent ions is that? (d) If the same membrane were wrapped in 25 myelin layers acting in series, what would its capacitance be, and what charge would hold the same 75 mV? (a) E = 0.075 V / 5.0 × 10⁻⁹ m = 1.5 × 10⁷ V/m; (b) Q = (2.0 × 10⁻¹⁰ F)(0.075 V) = 1.5 × 10⁻¹¹ C, negative on the inner face; (c) N = 1.5 × 10⁻¹¹ / 1.6 × 10⁻¹⁹ ≈ 9.4 × 10⁷ ions, a tiny fraction of the cell\'s ions; (d) C = 200/25 = 8.0 pF, and Q = (8.0 × 10⁻¹² F)(0.075 V) = 6.0 × 10⁻¹³ C, 1/25 of the charge.',
      pitfalls: [
        'Slipping a power of ten when combining exponents in τ = R_mC_m.',
        'Leaving millivolts or nanometers unconverted.',
        'Halving Q by borrowing the ½ from the energy formula.',
        'Reporting the charge in coulombs as the number of ions.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-rc-circuits-mcat', 'mcat-organ-systems-endocrine-nervous-mcat', 'mcat-biological-basis-behavior-mcat'],
      checkpoint: [
        {
          question: 'A neuron\'s membrane has a resistance of 5.0 × 10⁷ Ω and a capacitance of 3.0 × 10⁻¹⁰ F. What is its membrane time constant?',
          options: ['15 ms', '1.5 ms', '75 ms', '150 ms'],
          correctAnswer: 0,
          explanation:
            'τ = R_mC_m = (5.0 × 10⁷)(3.0 × 10⁻¹⁰) = 15 × 10⁻³ s = 15 ms. 1.5 ms and 150 ms each slip a power of ten when combining the coefficients (5.0 × 3.0 = 15) with the exponents (7 − 10 = −3); 75 ms is 5τ, the time to finish charging, not the time constant.',
        },
        {
          question: 'A neuron\'s membrane time constant is 24 ms. A drug opens channels until the membrane resistance falls to one quarter of its value; the capacitance is unchanged. What is the new time constant, and about how long does the membrane now take to finish responding to a step input?',
          options: [
            '96 ms, and about 480 ms to finish',
            '6.0 ms, and about 6.0 ms to finish',
            '6.0 ms, and about 30 ms to finish',
            '24 ms, and about 120 ms to finish',
          ],
          correctAnswer: 2,
          explanation:
            'τ = R_mC_m, so a quarter of the resistance gives a quarter of the time constant: 24/4 = 6.0 ms, and the response is essentially complete after about 5τ = 30 ms. 96 ms multiplies by 4, as if open channels added resistance in series; "6.0 ms to finish" treats one time constant as complete; and 24 ms assumes channels have no effect on τ.',
        },
        {
          question: 'A small neuron\'s membrane capacitance is 50 pF, and its resting potential has a magnitude of 80 mV. About how many monovalent ions\' worth of charge is separated across the membrane? (e = 1.6 × 10⁻¹⁹ C)',
          options: ['2.5 × 10¹⁰ ions', '2.5 × 10⁷ ions', '4.0 × 10⁻¹² ions', '1.3 × 10⁷ ions'],
          correctAnswer: 1,
          explanation:
            'Q = C_mV = (5.0 × 10⁻¹¹ F)(0.080 V) = 4.0 × 10⁻¹² C, and N = Q/e = 4.0 × 10⁻¹² / 1.6 × 10⁻¹⁹ = 2.5 × 10⁷ ions. 2.5 × 10¹⁰ uses 80 V instead of 0.080 V; 4.0 × 10⁻¹² is the charge in coulombs, not a count; and 1.3 × 10⁷ halves the charge by borrowing the ½ from U = ½CV².',
        },
      ],
    },
    // ── 7 · Defibrillators and what is held constant (concepts) ──────────
    {
      title: 'Defibrillators: Slow Charge, Fast Shock',
      minutes: 6.5,
      goal: 'Explain why a defibrillator stores energy in a capacitor, how the same energy becomes far more power, and how to decide whether V, Q, C or U is held fixed in a capacitor problem.',
      keyPoints: [
        'In ventricular fibrillation the heart muscle fires chaotically; a brief, strong current depolarizes most of the myocardium at once, so the SA node can take back control.',
        'A small battery has only a few volts of EMF, and its internal resistance caps its current at ε/r, so it cannot drive tens of amps through the chest; it CAN slowly fill a capacitor to a high voltage.',
        'Charge slowly over seconds, store U = ½CV² (the energy setting is reached by charging to the matching voltage, since C is fixed), then discharge through the chest as a resistor with τ = RC, a few milliseconds.',
        'Power is energy per time: the same energy delivered hundreds of times faster is hundreds of times the power. The capacitor is a time compressor, not an energy source; a camera flash works the same way.',
        'What is held constant? Battery connected: V fixed (Q = CV, U = ½CV²). Isolated: Q fixed (V = Q/C, U = Q²/2C). Same device, new setting: C fixed (U ∝ V², Q ∝ V). Same energy, different capacitor: U fixed (V ∝ 1/√C).',
        'Check units: μF × V = μC, Ω × F = s, F × V² = J, J/s = W.',
      ],
      showOnScreen: [
        'A fibrillating heart trace, then one shock and a regular rhythm returning',
        'The defibrillator as three panels: a small battery slowly filling a capacitor (seconds), the full capacitor storing ½CV², the paddles discharging it through the chest (milliseconds)',
        'Discharge curves: current and power both starting at their peaks and decaying, power falling faster',
        'An energy bar that stays the same size while a time bar shrinks from seconds to milliseconds, and a power bar growing to match',
        'The "What is held constant?" table filling row by row, with a connected and an isolated capacitor side by side',
        'The "Remember" recap',
        'End card: "Up next: Defibrillators: Worked Examples"',
      ],
      pitfalls: [
        'Equating the same energy with the same power: power is energy per time.',
        'Using U = ½CV² on an isolated capacitor whose voltage is changing, or U = Q²/2C on one still connected to a battery.',
        'Scaling voltage linearly with energy: U ∝ V², so doubling the energy needs √2 times the voltage.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-rc-circuits-mcat', 'mcat-physics-electricity-emf-capacitors-mcat', 'mcat-organ-systems-cardiovascular-mcat'],
      checkpoint: [
        {
          question: 'A capacitor stays connected to its battery while a dielectric with κ = 2 is slid between its plates. What happens to the energy it stores?',
          options: [
            'It halves, since U = Q²/2C and C doubles',
            'It stays the same, since the voltage is fixed',
            'It doubles, since V is fixed and C doubles',
            'It quadruples, since U depends on a square',
          ],
          correctAnswer: 2,
          explanation:
            'With the battery connected, V is held constant. The dielectric doubles C, so U = ½CV² doubles (and the battery pushes on twice the charge). "Halves" uses U = Q²/2C, which is the right form only for an ISOLATED capacitor, where Q is fixed; a fixed voltage does not fix the energy when C changes; and "quadruples" squares the capacitance, but U is linear in C.',
        },
        {
          question: 'A defibrillator\'s capacitor discharges through a patient\'s chest. How do the current through the chest and the power delivered to it change during the discharge?',
          options: [
            'Both start at their peak and decay; the power falls faster',
            'Both start at their peak and decay at exactly the same rate',
            'The current decays, while the power stays roughly constant',
            'Both rise from zero to a peak, then decay back toward zero',
          ],
          correctAnswer: 0,
          explanation:
            'At the first instant the full capacitor voltage is across the chest, so the current V/R is at its peak, and it then decays with τ = RC. Power is I²R, so it falls with the SQUARE of the current, faster than the current itself, which is why most of the energy arrives in the first few milliseconds. "The same rate" forgets the square; constant power would need a constant current; and a capacitor\'s discharge current does not build up from zero, since it is largest at the start.',
        },
        {
          question: 'Ignoring losses, how does the energy a defibrillator\'s capacitor delivers in a shock compare with the energy its battery supplied while charging it?',
          options: [
            'Far more energy, since the shock power is so high',
            'Far less energy, since the shock is over so quickly',
            'The same energy, delivered at the same average power',
            'The same energy, delivered in a far shorter time',
          ],
          correctAnswer: 3,
          explanation:
            'The capacitor stores what the battery put in and releases it, so the energy is the same; what changes is the time, from seconds to milliseconds, so the average power rises by the same factor. "Far more energy" mixes up power with energy; "far less" mixes up a short time with a small amount; and the same energy over a far shorter time cannot be the same average power, since power is energy per time.',
        },
      ],
    },
    // ── 8 · Defibrillators (worked examples) ─────────────────────────────
    {
      title: 'Defibrillators: Worked Examples',
      minutes: 5,
      goal: 'Find a defibrillator\'s stored charge and energy, its charging and delivery power, its discharge time constant and peak current, and the voltage a new energy setting or a different capacitor needs.',
      keyPoints: [
        'Q = CV and U = ½CV², with μF converted to farads; the charging power is U divided by the charging time.',
        'Discharge: τ = RC with the chest as R; the peak current is V/R and the peak power V²/R; the capacitor is essentially empty after about 5τ.',
        'Energy drains twice as fast as charge (U ∝ Q²): after 2τ about 98% of the energy is gone.',
        'Fixed C: U ∝ V². Fixed U: V ∝ 1/√C. Scale with ratios, then check with ½CV².',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the charge-store-discharge panels with live readouts: 0.20 C, 200 J, 40 W while charging; τ = 5.0 ms, 40 A and 8.0 × 10⁴ W at the first instant; the energy bar 98% gone by 10 ms; the two power bars side by side at a ratio of 500',
        'Example 2: an energy-setting dial on a fixed capacitor (150 J → 600 J, 1000 V → 2000 V), then two designs side by side storing the same 150 J at different voltages',
        'The "Remember" recap of the method',
        'End card: "Up next: Magnetism: Fields & Forces on Charges"',
      ],
      workedExample:
        'Example 1: A defibrillator\'s 100 μF capacitor is charged to 2000 V over 5.0 s, then discharged through a patient\'s chest, which acts as a 50 Ω resistor. (a) How much charge and energy does the capacitor store? (b) What is the average power while it charges? (c) What is the discharge time constant? (d) What are the peak current and the peak power? (e) Treating the energy as delivered in about 10 ms, what is the average delivery power, and how many times the charging power is that? (a) Q = (1.0 × 10⁻⁴ F)(2.0 × 10³ V) = 0.20 C and U = ½(1.0 × 10⁻⁴)(4.0 × 10⁶) = 200 J; (b) P = 200 J / 5.0 s = 40 W; (c) τ = (50)(1.0 × 10⁻⁴) = 5.0 ms, so it is essentially empty after about 25 ms; (d) I₀ = 2000/50 = 40 A and P = V²/R = 4.0 × 10⁶ / 50 = 8.0 × 10⁴ W; (e) after 2τ = 10 ms the energy is down to e⁻⁴ ≈ 2%, so P ≈ 200 J / 1.0 × 10⁻² s = 2.0 × 10⁴ W, 500 times the 40 W charging power, the ratio of the times. Example 2: A defibrillator\'s fixed 300 μF capacitor stores 150 J. (a) What voltage is it charged to, and how much charge does it hold? (b) What voltage would a 600 J setting need? (c) Design B stores the same 150 J in a 1200 μF capacitor. What voltage does it need? (a) V = √(2U/C) = √(300 / 3.0 × 10⁻⁴) = √(1.0 × 10⁶) = 1000 V, and Q = (3.0 × 10⁻⁴ F)(1000 V) = 0.30 C; (b) four times the energy at fixed C needs √4 = 2 times the voltage: 2000 V (check: ½(3.0 × 10⁻⁴)(4.0 × 10⁶) = 600 J); (c) with U fixed, V ∝ 1/√C, and four times the capacitance needs half the voltage: 500 V (check: ½(1.2 × 10⁻³)(2.5 × 10⁵) = 150 J).',
      pitfalls: [
        'Dropping the ½ in U = ½CV², or forgetting to square V.',
        'Reading one time constant as the end of the discharge.',
        'Scaling V with energy or with 1/C instead of with √U or 1/√C.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-rc-circuits-mcat', 'mcat-physics-electricity-emf-capacitors-mcat', 'mcat-organ-systems-cardiovascular-mcat'],
      checkpoint: [
        {
          question: 'A defibrillator\'s 50 μF capacitor is charged to 3000 V over 4.5 s. What is the average power while it charges?',
          options: ['1.0 × 10² W', '5.0 × 10¹ W', '3.3 × 10⁻² W', '1.7 × 10⁻² W'],
          correctAnswer: 1,
          explanation:
            'U = ½CV² = ½(5.0 × 10⁻⁵ F)(9.0 × 10⁶ V²) = 225 J, and P = U/t = 225 J / 4.5 s = 50 W (5.0 × 10¹ W). 1.0 × 10² W drops the ½; 3.3 × 10⁻² W divides the charge (0.15 C) by the time, which is the average current in amps, not a power; and 1.7 × 10⁻² W forgets to square the voltage.',
        },
        {
          question: 'A defibrillator\'s 120 μF capacitor discharges through a patient\'s chest, which acts as a 75 Ω resistor. About how long until the capacitor is essentially empty?',
          options: ['9.0 ms', '45 s', '1.8 ms', '45 ms'],
          correctAnswer: 3,
          explanation:
            'τ = RC = (75 Ω)(1.2 × 10⁻⁴ F) = 9.0 × 10⁻³ s = 9.0 ms, and the capacitor is essentially empty after about 5τ = 45 ms. 9.0 ms is one time constant, when about 37% of the charge is still left; 45 s reads μF as mF; and 1.8 ms divides by 5 instead of multiplying.',
        },
        {
          question: 'Design A stores 180 J in a 90 μF capacitor charged to 2.0 × 10³ V. Design B stores the same 180 J in a 10 μF capacitor. To what voltage must B be charged?',
          options: ['1.8 × 10⁴ V', '6.7 × 10² V', '6.0 × 10³ V', '2.0 × 10³ V'],
          correctAnswer: 2,
          explanation:
            'With the energy held fixed, ½CV² = constant, so V ∝ 1/√C. B has 1/9 the capacitance, so it needs √9 = 3 times the voltage: 6.0 × 10³ V (check: ½(1.0 × 10⁻⁵)(3.6 × 10⁷) = 180 J). 1.8 × 10⁴ V scales V with 1/C, the rule for fixed CHARGE; 6.7 × 10² V scales the wrong way, with √C; and 2.0 × 10³ V assumes the same energy needs the same voltage.',
        },
      ],
    },
  ],
}
