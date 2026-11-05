import type { ShotList } from '../types'

/**
 * Shot list: MCAT Physics — Circuits Part 1: Current & Resistance
 * (topic mcat-physics-electricity-dc-circuits-mcat, the first of four Circuits topics).
 *
 * Source: the 2-part lesson (src/data/interactive-lessons/mcat-mcat-physics-electricity-dc-circuits-mcat-part1..2.ts)
 * and its lesson-built exit pool. Eight Manim clips in four pairs (owner format, Nov 2026):
 * a CONCEPT clip that teaches the idea and ends on the "Remember" recap, then a
 * WORKED-EXAMPLES clip with two examples, each shown in full with a pause-and-try
 * prompt before the solution. Concept clips get conceptual checkpoint questions;
 * worked-example clips get questions that mirror their two examples with new numbers.
 * Clips 1–4 follow lesson Part 1 (current, voltage); clips 5–8 follow lesson Part 2
 * (resistance and Ohm's law, series and parallel). Kirchhoff's rules, power and bulb
 * brightness belong to Circuits Part 2 and are left out.
 *
 * The checkpoint questions are what a YouTube viewer answers at studymondo.com/v/<code>
 * (src/data/video-short-links.ts): current1/current2, voltage1/voltage2, ohm1/ohm2,
 * series1/series2. They use new scenarios and numbers, so they never repeat an
 * exit-quiz item or a worked example.
 */
export const shotList: ShotList = {
  courseSlug: 'mcat-prep',
  topicSlug: 'mcat-physics-electricity-dc-circuits-mcat',
  title: 'Circuits Part 1: Current & Resistance',
  overview:
    'Eight animated clips in four pairs that build circuits from the ground up: what current is and which way it points, what voltage measures, how resistance limits current, and how resistors combine in series and parallel. Each idea gets a concept clip followed by a worked-examples clip in which every problem is shown in full, with a moment to pause and try it before the solution. Narration stays exam-neutral, so the clips also serve introductory physics; the biology links (ion channels, membrane potential, axons, the body as an electrolytic conductor) are the ones the exam leans on. Each clip ends with three checkpoint questions; the topic exit quiz follows the last clip.',
  clips: [
    // ── 1 · Current (concepts) ───────────────────────────────────────────
    {
      title: 'Current: Charge on the Move',
      minutes: 6.5,
      goal: 'Explain what current is and which way it points, and contrast conduction by electrons in a metal with conduction by ions in a solution.',
      keyPoints: [
        'Charge comes in whole multiples of e = 1.6 × 10⁻¹⁹ C; one coulomb is about 6.25 × 10¹⁸ elementary charges.',
        'Current is a rate, I = ΔQ/Δt, with 1 A = 1 C/s. Two rearrangements do most of the work: ΔQ = IΔt and N = ΔQ/q, where q is 2e for Ca²⁺.',
        'Conventional current is the direction positive charge would flow, out of the + terminal; electrons in a metal drift the opposite way, and a negative charge moving left is the same current as a positive charge moving right.',
        'Electrons drift slowly, but the wire is already full of carriers and the field sets them all moving at once, so a lamp lights instantly.',
        'Metals carry current with electrons and conduct worse when hot; electrolytes carry it with ions of both signs, whose contributions add, and conduct better when warm. The body is an electrolytic conductor (Na⁺, K⁺, Cl⁻, Ca²⁺).',
      ],
      showOnScreen: [
        'A counting gate across a wire: charges pass it, a counter and a clock tick, and I = ΔQ/Δt builds from them',
        'A loop with a battery: purple conventional-current arrows out of the + terminal, yellow electrons circulating the other way',
        'A side-by-side: an electron moving left and a positive charge moving right, both labelled "same current →"',
        'A tube of solution with Na⁺ drifting right and Cl⁻ drifting left, both adding to one current arrow',
        'A two-column comparison: metal vs electrolyte — carriers, direction, effect of heating',
        'The "Remember" recap',
      ],
      pitfalls: [
        'Treating current as an amount of charge rather than a rate.',
        'Letting opposite ion flows cancel: cations one way and anions the other carry current in the same direction.',
        'Expecting a lamp to wait for electrons to travel from the battery.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-dc-circuits-mcat', 'mcat-biological-basis-behavior-mcat'],
      checkpoint: [
        {
          question: 'In a saltwater tube, Na⁺ ions drift east while Cl⁻ ions drift west. What do the two ion flows do to the current in the tube?',
          options: [
            'They cancel, so the net current is close to zero',
            'Both carry current east, so the two contributions add',
            'Both carry current west, the direction of the anions',
            'Only the Na⁺ flow counts, since current follows positive ions',
          ],
          correctAnswer: 1,
          explanation:
            'Current is the net flow of charge. Positive charge moving east is current east, and negative charge moving west is ALSO current east, so the two flows add. They would cancel only if both ion types moved the same way; the direction is set by the positive-charge convention, not by the anions; and the Cl⁻ flow counts just as much as the Na⁺ flow.',
        },
        {
          question: 'A copper wire and a tube of physiological saline are both warmed by 20 °C. How does each one\'s ability to conduct change?',
          options: [
            'Both conduct better, since warmer carriers move faster',
            'Both conduct worse, since heat always raises resistance',
            'The saline conducts better, and the copper conducts worse',
            'The copper conducts better, and the saline conducts worse',
          ],
          correctAnswer: 2,
          explanation:
            'In a metal, heating makes the lattice vibrate harder and scatter the electrons more often, so copper conducts worse. In an electrolyte, warming lowers the viscosity and lets the ions move faster, so saline conducts better. That opposite response is the classic contrast between metallic and electrolytic conduction; "both better", "both worse" and the reversed pairing each miss it.',
        },
        {
          question: 'Electrons drift through a wire at well under a millimeter per second, yet a lamp across the room lights the instant its switch closes. Why?',
          options: [
            'The wire is full of carriers, and the field sets them all moving at once',
            'Closing the switch fires electrons from the battery at nearly light speed',
            'The lamp holds stored charge from the last time it was switched on',
            'Only the electrons nearest the lamp move, and they need no field',
          ],
          correctAnswer: 0,
          explanation:
            'The wire is already packed with mobile electrons. Closing the switch sets up an electric field along the whole loop almost instantly, so carriers everywhere, including those inside the lamp, start drifting together. No electron races from the battery, a lamp stores no charge between uses, and the carriers in the lamp move because the field reaches them.',
        },
      ],
    },
    // ── 2 · Current (worked examples) ────────────────────────────────────
    {
      title: 'Current: Worked Examples',
      minutes: 5,
      goal: 'Turn a current and a time into a charge and a number of carriers, including ions that carry more than one elementary charge.',
      keyPoints: [
        'Every count starts with ΔQ = IΔt, in coulombs, after converting mA, pA and ms to base units.',
        'The number of carriers is N = ΔQ/q, where q is the charge on ONE carrier: e for electrons, Na⁺ and K⁺, 2e for Ca²⁺.',
        'An answer in coulombs is not a count; check the units of the last line.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: a wire with a counting gate and a clock while the two steps build',
        'Example 2: a membrane with one K⁺ channel and ions crossing it while the count climbs, then the same current carried by Ca²⁺',
        'The "Remember" recap of the method',
      ],
      workedExample:
        'Example 1: A wire carries a steady 3.2 mA. (a) How much charge passes a point in 5.0 s? (b) How many electrons is that? ΔQ = (3.2 × 10⁻³ A)(5.0 s) = 1.6 × 10⁻² C; N = 1.6 × 10⁻² / 1.6 × 10⁻¹⁹ = 1.0 × 10¹⁷ electrons. Example 2: One open K⁺ channel passes 2 pA for 1 ms. (a) How many K⁺ ions cross? (b) If the same current were carried by Ca²⁺, how many ions would cross? ΔQ = (2 × 10⁻¹²)(1 × 10⁻³) = 2 × 10⁻¹⁵ C, so N = 2 × 10⁻¹⁵ / 1.6 × 10⁻¹⁹ ≈ 12,500 K⁺ ions; Ca²⁺ carries 2e each, so about 6,250 ions.',
      pitfalls: [
        'Leaving mA, pA or ms unconverted.',
        'Dividing every ion count by e: a Ca²⁺ ion carries 2e.',
        'Reporting the charge in coulombs as the number of carriers.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-dc-circuits-mcat', 'mcat-biological-basis-behavior-mcat'],
      checkpoint: [
        {
          question: 'A wire carries a steady 4.0 mA for 2.0 s. About how many electrons pass any point in the wire in that time? (e = 1.6 × 10⁻¹⁹ C)',
          options: ['5.0 × 10¹⁶ electrons', '1.3 × 10¹⁶ electrons', '8.0 × 10⁻³ electrons', '5.0 × 10¹⁹ electrons'],
          correctAnswer: 0,
          explanation:
            'The charge is ΔQ = IΔt = (4.0 × 10⁻³ A)(2.0 s) = 8.0 × 10⁻³ C, and the number of electrons is N = ΔQ/e = 8.0 × 10⁻³ / 1.6 × 10⁻¹⁹ = 5.0 × 10¹⁶. 8.0 × 10⁻³ is the charge in coulombs, not a count; 1.3 × 10¹⁶ divides the current by the time instead of multiplying; and 5.0 × 10¹⁹ forgets that 4.0 mA is 4.0 × 10⁻³ A, not 4.0 A.',
        },
        {
          question: 'A single open Na⁺ channel passes a steady 4.8 pA for 2.0 ms. About how many Na⁺ ions cross the membrane? (e = 1.6 × 10⁻¹⁹ C)',
          options: ['6.0 × 10⁴ ions', '3.0 × 10⁴ ions', '9.6 × 10⁻¹⁵ ions', '6.0 × 10⁷ ions'],
          correctAnswer: 0,
          explanation:
            'ΔQ = IΔt = (4.8 × 10⁻¹² A)(2.0 × 10⁻³ s) = 9.6 × 10⁻¹⁵ C. Each Na⁺ carries e, so N = 9.6 × 10⁻¹⁵ / 1.6 × 10⁻¹⁹ = 6.0 × 10⁴ ions. 3.0 × 10⁴ divides by 2e, which is right only for a doubly charged ion such as Ca²⁺; 9.6 × 10⁻¹⁵ is the charge in coulombs, not a count; and 6.0 × 10⁷ uses 2.0 s instead of 2.0 ms.',
        },
        {
          question: 'In 1.0 ms, 5,000 Ca²⁺ ions pass through a channel. What current does the channel carry? (e = 1.6 × 10⁻¹⁹ C)',
          options: ['1.6 × 10⁻¹² A', '8.0 × 10⁻¹³ A', '1.6 × 10⁻¹⁵ A', '1.6 × 10⁻¹⁸ A'],
          correctAnswer: 0,
          explanation:
            'Each Ca²⁺ carries 2e, so ΔQ = (5,000)(2)(1.6 × 10⁻¹⁹ C) = 1.6 × 10⁻¹⁵ C, and I = ΔQ/Δt = 1.6 × 10⁻¹⁵ / 1.0 × 10⁻³ = 1.6 × 10⁻¹² A (1.6 pA). 8.0 × 10⁻¹³ A counts each ion as carrying only e; 1.6 × 10⁻¹⁵ A is the charge in coulombs, never divided by the time; and 1.6 × 10⁻¹⁸ A multiplies by the time instead of dividing.',
        },
      ],
    },
    // ── 3 · Voltage (concepts) ───────────────────────────────────────────
    {
      title: 'Voltage: Energy per Charge',
      minutes: 6.5,
      goal: 'Explain voltage as energy per charge, predict whether a charge gains or loses potential energy, treat voltage as a difference from a chosen ground, and predict what an open switch does to a loop.',
      keyPoints: [
        'Voltage is energy per charge: ΔV = W/q and ΔU = qΔV, with 1 V = 1 J/C. A 9 V battery gives every coulomb that passes through it 9 J.',
        'Positive charges move spontaneously from high to low potential; negative charges move from low to high. Both LOSE potential energy, because q is negative in ΔU = qΔV for the negative ones.',
        'The electron-volt is the energy one elementary charge gains or loses crossing 1 V: 1 eV = 1.6 × 10⁻¹⁹ J.',
        'Voltage is always a difference. Ground is the point declared 0 V; moving it shifts every potential equally and changes no difference. Ideal wires are equipotential, so drops happen only across elements.',
        'The water analogy (battery = pump, voltage = pressure difference, current = flow rate, resistor = narrow pipe) and where it breaks: charge is not used up, the pipe is always full, and a break simply stops the flow.',
        'An open switch stops current everywhere in a single loop, and the whole source voltage appears across the gap.',
      ],
      showOnScreen: [
        'An energy staircase: a positive charge stepping down from high to low potential, an electron stepping up from low to high, both with "PE ↓"',
        'A potential map of a loop with ground at the − terminal, then the ground moved: every number shifts, every difference stays',
        'The water-circuit lookup table, then the three places it breaks',
        'A loop with two bulbs: the same current arrow entering and leaving each bulb',
        'An open switch: current stops, the bulbs go dark, and a voltmeter across the gap reads the full battery voltage',
        'The "Remember" recap',
      ],
      pitfalls: [
        'Thinking a negative charge moving to higher potential gains potential energy.',
        'Picturing bulbs using up current: the same current leaves a bulb as enters it.',
        'Expecting zero volts across an open switch: the full source voltage sits across the gap.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-dc-circuits-mcat', 'mcat-physics-electricity-electrostatics-mcat'],
      checkpoint: [
        {
          question: 'A proton and an electron are each released from rest between two charged plates. As each one starts to move, what happens to its electric potential energy?',
          options: [
            'Both lose potential energy as they start to move',
            'The proton loses it, and the electron gains it',
            'The electron loses it, and the proton gains it',
            'Neither changes until the charge reaches a plate',
          ],
          correctAnswer: 0,
          explanation:
            'A charge released from rest moves the way the field pushes it, and that always lowers its potential energy: the proton moves toward lower potential (q > 0, ΔV < 0) and the electron toward higher potential (q < 0, ΔV > 0), so ΔU = qΔV is negative for both. The mixed answers forget the sign of the electron\'s charge, and the energy changes continuously as each charge moves, not only at a plate.',
        },
        {
          question: 'A 12 V ideal battery drives two bulbs in series. A switch in the same loop is opened. What does a voltmeter connected across the open switch read?',
          options: ['0 V, since no current flows', '6 V, half the battery voltage', '12 V, the full battery voltage', '24 V, twice the battery voltage'],
          correctAnswer: 2,
          explanation:
            'With the loop open, no current flows, so each bulb has V = IR = 0 across it. The battery\'s full 12 V must therefore appear across the gap. Zero volts confuses no current with no voltage; 6 V shares the voltage as if current still flowed through one bulb; 24 V has no source.',
        },
        {
          question: 'A steady 0.20 A flows into the first of two bulbs in a series loop. What current flows out of that first bulb toward the second?',
          options: [
            '0.20 A, since charge is not used up in a bulb',
            '0.10 A, since the bulb uses up half of the current',
            'Less than 0.20 A, by an amount set by the bulb\'s brightness',
            'Zero, since the first bulb converts all of the current to light',
          ],
          correctAnswer: 0,
          explanation:
            'Charge is conserved: every coulomb that enters the bulb leaves it, so the current out is the same 0.20 A. What the bulb converts to heat and light is electrical potential ENERGY, which shows up as a voltage drop across it, not a drop in current. The answers with less current out all treat current as something a bulb consumes.',
        },
      ],
    },
    // ── 4 · Voltage (worked examples) ────────────────────────────────────
    {
      title: 'Voltage: Worked Examples',
      minutes: 5,
      goal: 'Find the charge and energy a battery delivers, and the sign and size of a charge\'s potential-energy change in eV and joules.',
      keyPoints: [
        'Energy delivered by a source is qV: find the charge first with ΔQ = IΔt, then multiply by the voltage.',
        'Each elementary charge crossing V volts carries V electron-volts; 1 eV = 1.6 × 10⁻¹⁹ J lets you switch to joules.',
        'For a single charge, ΔU = qΔV with the SIGNS kept: ΔV = V_final − V_initial, and q is negative for an electron or anion.',
        'Membrane potentials are about −70 mV inside relative to outside, so ion energies are fractions of an eV.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the battery-and-pump circuit with a clock running and the charge climbing, then the four lines of arithmetic and the cross-check',
        'Example 2: a cell membrane with outside 0 V and inside −70 mV, a Ca²⁺ ion crossing inward on a potential ladder, the sign worked out step by step',
        'The "Remember" recap of the method',
      ],
      workedExample:
        'Example 1: A 9.0 V battery delivers 0.50 A to a small pump for 1.0 minute. (a) How much charge flows? (b) How many electrons is that? (c) How much energy does the battery deliver? (d) How much energy does each electron carry? ΔQ = (0.50)(60) = 30 C; N = 30 / 1.6 × 10⁻¹⁹ ≈ 1.9 × 10²⁰ electrons; energy = qV = (30)(9.0) = 270 J; each electron carries 9 eV ≈ 1.4 × 10⁻¹⁸ J, and (1.9 × 10²⁰)(1.4 × 10⁻¹⁸) ≈ 270 J checks. Example 2: A Ca²⁺ ion crosses a cell membrane from outside (0 V) to inside (−70 mV). (a) What is its change in electric potential energy, in eV and in joules? (b) Does it gain or lose potential energy? ΔV = −0.070 V; ΔU = qΔV = (+2e)(−0.070 V) = −0.14 eV = −0.14 × 1.6 × 10⁻¹⁹ ≈ −2.2 × 10⁻²⁰ J, a loss: the field pulls the positive ion inward.',
      pitfalls: [
        'Multiplying current by voltage and calling it energy without the time (that is power).',
        'Dropping the sign of q or of ΔV.',
        'Forgetting the factor of 2 for a doubly charged ion.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-dc-circuits-mcat', 'mcat-physics-electricity-electrostatics-mcat', 'mcat-biological-basis-behavior-mcat'],
      checkpoint: [
        {
          question: 'An electron moves from a point at −3 V to a point at +2 V. What happens to its electric potential energy?',
          options: [
            'It gains 5 eV, since it moved to a higher potential',
            'It loses 5 eV, since its charge is negative',
            'It loses 1 eV, the difference between the two values',
            'It does not change, since voltage is energy per charge',
          ],
          correctAnswer: 1,
          explanation:
            'ΔV = (+2) − (−3) = +5 V, and ΔU = qΔV = (−e)(+5 V) = −5 eV, so the electron loses 5 eV of potential energy, the way any charge does when it moves the way the field pushes it. Gaining 5 eV ignores the negative charge, 1 eV subtracts the magnitudes instead of the signed values, and the energy does change because the charge moved through a potential difference.',
        },
        {
          question: 'A 12 V battery delivers a steady 0.25 A to a small motor for 2.0 minutes. How much energy does the battery deliver?',
          options: ['360 J', '6.0 J', '3.0 J', '1,440 J'],
          correctAnswer: 0,
          explanation:
            'The charge is ΔQ = IΔt = (0.25 A)(120 s) = 30 C, and the energy is qV = (30 C)(12 V) = 360 J. 6.0 J leaves the time in minutes; 3.0 J is IV, the power in watts, with no time at all; and 1,440 J multiplies the voltage by the time in seconds and leaves out the current.',
        },
        {
          question: 'A K⁺ ion moves out of a neuron, from the inside (−70 mV) to the outside (0 V). What is the change in its electric potential energy?',
          options: ['It gains 0.070 eV', 'It loses 0.070 eV', 'It gains 0.14 eV', 'It loses 70 eV'],
          correctAnswer: 0,
          explanation:
            'ΔV = 0 − (−0.070 V) = +0.070 V, and K⁺ carries +e, so ΔU = qΔV = (+e)(+0.070 V) = +0.070 eV: a gain. The ion moves against the electric field (its concentration gradient pushes it out), so its electric potential energy rises. "Loses" flips a sign, 0.14 eV uses 2e as for Ca²⁺, and 70 eV forgets that the potential is in millivolts.',
        },
      ],
    },
    // ── 5 · Resistance (concepts) ────────────────────────────────────────
    {
      title: "Resistance and Ohm's Law",
      minutes: 6.5,
      goal: "Use V = IR to reason about what changes when one quantity is held fixed, read ohmic and non-ohmic I–V graphs, and predict how a wire's shape and temperature change its resistance.",
      keyPoints: [
        'V = IR defines resistance in ohms (1 Ω = 1 V/A); conductance G = 1/R is current per volt.',
        'Read Ohm\'s law by what the circuit holds fixed: fixed R gives I ∝ V; fixed V gives I ∝ 1/R; fixed I (one series path) gives V ∝ R.',
        'An ohmic element has a straight I–V line through the origin (slope 1/R); a filament bulb\'s curve flattens as it heats, because its resistance rises.',
        'R = ρL/A: resistivity ρ belongs to the material. Longer wires resist more, fatter wires less; doubling the diameter quarters R; stretching a wire n times at constant volume multiplies R by n².',
        'Metals resist more when hot. An axon\'s internal resistance per length goes as 1/r², not the 1/r⁴ of fluid flow, so wider axons conduct faster.',
      ],
      showOnScreen: [
        'Three slider panels for V = IR: one quantity held fixed while the other two change together',
        'An I–V graph: a straight ohmic line, then a filament curve bending over as its slope 1/R shrinks',
        'A wire whose length and radius morph with live R readouts: longer → R up, fatter → R down (area ∝ r²)',
        'Stretching animation: length × 2, area ÷ 2, R × 4',
        'A side-by-side warning card: wire R ∝ 1/r² vs Poiseuille flow resistance ∝ 1/r⁴',
        'The "Remember" recap',
      ],
      pitfalls: [
        'Scaling resistance with the diameter instead of the area (1/r², not 1/d).',
        'Borrowing the fluid 1/r⁴ law for a wire.',
        'Calling a filament bulb ohmic because V = IR still holds at each instant.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-dc-circuits-mcat', 'mcat-biological-basis-behavior-mcat'],
      checkpoint: [
        {
          question: 'An I–V graph for a lamp filament (current on the vertical axis) curves and becomes less steep as the voltage rises. What does this show?',
          options: [
            'Its resistance rises as it heats, so it is non-ohmic',
            'Its resistance falls as it heats, so it is non-ohmic',
            'Its resistance stays constant, so it is ohmic',
            'Ohm\'s law no longer applies to the filament at all',
          ],
          correctAnswer: 0,
          explanation:
            'On an I–V graph the slope is 1/R. A curve that flattens means 1/R is shrinking, so R is rising as the filament heats; an element whose R changes with voltage is non-ohmic. A falling resistance would make the curve steepen, a constant R gives a straight line, and V = IR still defines R at every point on the curve; "non-ohmic" only means R is not constant.',
        },
        {
          question: 'A 3 Ω resistor and a 6 Ω resistor are in series across a battery. How do the voltages across them compare?',
          options: [
            'Equal, since series resistors share the same voltage',
            'The 3 Ω resistor has twice the voltage of the 6 Ω one',
            'The 6 Ω resistor has twice the voltage of the 3 Ω one',
            'The 6 Ω resistor has four times the voltage of the 3 Ω one',
          ],
          correctAnswer: 2,
          explanation:
            'Series resistors share one path, so they carry the same current, and with I fixed V = IR makes the voltage proportional to the resistance: the 6 Ω resistor takes twice the voltage of the 3 Ω one. Equal voltage is the rule for PARALLEL elements, "the 3 Ω has twice" inverts the proportion, and "four times" squares the ratio as if it were a power or a radius scaling.',
        },
        {
          question: 'Axon B has twice the diameter of axon A and the same axoplasm. How does B\'s internal resistance per unit length compare with A\'s?',
          options: ['One quarter of A\'s', 'One half of A\'s', 'One sixteenth of A\'s', 'Twice A\'s'],
          correctAnswer: 0,
          explanation:
            'Resistance per length goes as ρ/A, and the cross-sectional area grows as the diameter squared: twice the diameter gives four times the area, so one quarter the resistance per length. One half scales with the diameter instead of the area, one sixteenth borrows the 1/r⁴ law for fluid flow, and a wider axon resists LESS, not more.',
        },
      ],
    },
    // ── 6 · Resistance (worked examples) ─────────────────────────────────
    {
      title: "Resistance: Worked Examples",
      minutes: 5,
      goal: 'Rescale a wire\'s resistance with R = ρL/A, and read resistance from points on ohmic and non-ohmic I–V graphs.',
      keyPoints: [
        'Write R = ρL/A as factors: new R = old R × (length factor) ÷ (area factor), with the area factor = (diameter factor)².',
        'Stretching at constant volume: length × n and area ÷ n, so R × n².',
        'On an I–V graph, the resistance at a point is V/I at that point, not the slope between two points.',
        'An ohmic line gives the same V/I everywhere; a filament curve gives a V/I that grows as it heats.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: a wire drawn as a cylinder that lengthens and fattens with live factor readouts, then stretches to three times its length',
        'Example 2: an I–V graph with the ohmic line and the filament curve, the given points marked, V/I computed at each',
        'The "Remember" recap of the method',
      ],
      workedExample:
        'Example 1: A copper wire has R = 2.0 Ω. (a) What is the resistance of a wire of the same copper that is twice as long with twice the diameter? (b) What is the resistance of the original wire stretched to three times its length at constant volume? (c) What current flows through each wire across 6.0 V? (a) R × 2 / 4 = 1.0 Ω; (b) R × 3² = 18 Ω; (c) 6.0 / 1.0 = 6.0 A and 6.0 / 18 ≈ 0.33 A. Example 2: A resistor\'s I–V line passes through (6.0 V, 0.20 A), and a filament bulb\'s curve passes through (6.0 V, 0.50 A) and (12 V, 0.75 A). (a) What is the resistor\'s resistance, and what current does it carry at 15 V? (b) What is the bulb\'s resistance at each point, and is it ohmic? (a) R = 6.0 / 0.20 = 30 Ω, and I = 15 / 30 = 0.50 A; (b) 6.0 / 0.50 = 12 Ω and 12 / 0.75 = 16 Ω, so its resistance rises as it heats: non-ohmic.',
      pitfalls: [
        'Using the diameter factor as the area factor.',
        'Taking ΔV/ΔI between two points of a curve as "the" resistance.',
        'Forgetting that a stretched wire also gets thinner.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-dc-circuits-mcat'],
      checkpoint: [
        {
          question: 'A metal wire is stretched to twice its original length. Its volume and resistivity stay the same. By what factor does its resistance change?',
          options: ['It doubles', 'It quadruples', 'It halves', 'It stays the same'],
          correctAnswer: 1,
          explanation:
            'At constant volume, doubling the length halves the cross-sectional area. With R = ρL/A, the length factor 2 and the area factor 1/2 combine to 2 / (1/2) = 4, so R quadruples. "Doubles" accounts for the length only, "halves" inverts the effect, and the resistance does change because both L and A changed.',
        },
        {
          question: 'A copper wire has a resistance of 8.0 Ω. A second wire of the same copper is half as long and has twice the diameter. What is its resistance?',
          options: ['1.0 Ω', '2.0 Ω', '4.0 Ω', '0.25 Ω'],
          correctAnswer: 0,
          explanation:
            'Half the length halves R, and twice the diameter gives four times the area, which divides R by 4: 8.0 × (1/2) ÷ 4 = 1.0 Ω. 2.0 Ω treats the diameter factor as the area factor, 4.0 Ω applies only the length change, and 0.25 Ω divides by 16 as if resistance went as 1/r⁴.',
        },
        {
          question: 'A filament bulb\'s I–V curve passes through (4.0 V, 0.50 A) and (10 V, 0.80 A). What happens to its resistance between those two points?',
          options: [
            'It rises from 8.0 Ω to 12.5 Ω as the filament heats',
            'It falls from 12.5 Ω to 8.0 Ω as the filament heats',
            'It stays at 20 Ω, the slope between the two points',
            'It stays at 8.0 Ω, since V = IR holds at both points',
          ],
          correctAnswer: 0,
          explanation:
            'The resistance at each point is V/I there: 4.0 / 0.50 = 8.0 Ω and 10 / 0.80 = 12.5 Ω, so it rises as the filament heats, which is why the curve flattens. "Falls" reverses the two values, 20 Ω is ΔV/ΔI between the points rather than V/I at either one, and V = IR holding at each point does not make R constant.',
        },
      ],
    },
    // ── 7 · Series and parallel (concepts) ───────────────────────────────
    {
      title: 'Series vs. Parallel Resistors',
      minutes: 7,
      goal: 'Identify series and parallel by nodes, predict how current, voltage and equivalent resistance behave in each, and predict what a short or an open does.',
      keyPoints: [
        'Series: one path, the same current through every element, voltages add, R_eq = R₁ + R₂ + …, always larger than the largest; one break stops the whole loop.',
        'Parallel: every element joins the same two nodes, so each has the same voltage; currents add, 1/R_eq = 1/R₁ + 1/R₂ + …, always smaller than the smallest branch; adding a branch lowers R_eq and raises the total current.',
        'Shortcuts: product over sum for two in parallel; n identical resistors give nR in series and R/n in parallel.',
        'Identify arrangements by current paths and nodes, never by how the figure is drawn.',
        'A wire across an element holds both ends at the same potential, so it carries no current and drops out; an open branch carries none and can be erased.',
      ],
      showOnScreen: [
        'A series string with one current flow threading every resistor and the voltage drops stacking to the battery voltage',
        'A parallel bank with the two nodes highlighted, the same voltage across each branch, and the branch currents merging',
        'A comparison table filling row by row: same, divides, R_eq, adding one more, biggest share, one breaks',
        'Two drawings of the same circuit, one tangled, with the nodes coloured to show they match',
        'A short-circuit wire laid across one bulb: that bulb goes dark, the current takes the wire',
        'The "Remember" recap',
      ],
      pitfalls: [
        'Swapping the formulas: resistances add in series; in parallel the conductances 1/R add.',
        'A parallel R_eq larger than any branch is always an error.',
        'Judging series or parallel by how the drawing looks instead of by its nodes.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-dc-circuits-mcat', 'mcat-physics-electricity-kirchhoff-power-mcat'],
      checkpoint: [
        {
          question: 'Two identical bulbs are in series with a battery. A wire is connected across the first bulb only. What happens?',
          options: [
            'Both bulbs go out, since the wire breaks the loop',
            'Nothing changes, since the wire adds a parallel path',
            'The first bulb goes out and the second carries more current',
            'The first bulb carries more current and the second goes out',
          ],
          correctAnswer: 2,
          explanation:
            'The wire holds both ends of the first bulb at the same potential, so that bulb has no voltage across it and carries no current: it is shorted out and goes dark. The loop now has only the second bulb\'s resistance, so the current through the second bulb rises. A short does not open the loop, it does change the circuit, and it bypasses the bulb it is connected across, not the other one.',
        },
        {
          question: 'Two resistors are in parallel across an ideal battery. A third resistor is connected in parallel with them. What happens to the circuit?',
          options: [
            'The equivalent resistance falls and the total current rises',
            'The equivalent resistance rises and the total current falls',
            'The equivalent resistance falls and the total current falls',
            'Nothing changes, since each branch still has the same voltage',
          ],
          correctAnswer: 0,
          explanation:
            'A new branch is a new path between the same two nodes, so the conductances add: R_eq drops, and with the battery voltage fixed the total current I = V/R_eq rises. The first two branches keep the same voltage and current, which is the half-truth behind "nothing changes", but the battery now supplies the extra branch too. A rising R_eq is the series rule.',
        },
        {
          question: 'Three unequal resistors are connected in series across a battery. Which resistor has the largest voltage across it?',
          options: [
            'The one with the largest resistance',
            'The one with the smallest resistance',
            'None, since all three share one voltage',
            'The one nearest the + terminal',
          ],
          correctAnswer: 0,
          explanation:
            'In series, one current flows through all three, so V = IR makes each voltage proportional to its resistance: the largest resistor takes the largest share. The smallest resistor takes the smallest share, an equal voltage is the PARALLEL rule, and position in the loop does not matter because the current is the same everywhere along it.',
        },
      ],
    },
    // ── 8 · Series and parallel (worked examples) ────────────────────────
    {
      title: 'Series vs. Parallel: Worked Examples',
      minutes: 5,
      goal: 'Solve a series string and a parallel pair completely: equivalent resistance, total current, and the voltage or current in each resistor.',
      keyPoints: [
        'Series recipe: add the resistances, find I = V/R_eq, then each drop is IR; the drops add back to the battery voltage.',
        'Parallel recipe: every branch has the battery voltage, so each branch current is V/R; the branch currents add to the total, which matches V/R_eq.',
        'Product over sum for two in parallel; always invert 1/R_eq at the end, and check R_eq is smaller than the smallest branch.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the series string with one flow threading it and the voltage-drop bars stacking to 24 V as each line of arithmetic appears',
        'Example 2: the parallel pair with its two nodes coloured, the reciprocals, then the branch currents merging into the total',
        'The "Remember" recap of both recipes',
      ],
      workedExample:
        'Example 1: A 24 V battery drives 2 Ω, 4 Ω and 6 Ω resistors in series. Find the equivalent resistance, the current, and the voltage across each resistor. R_eq = 12 Ω, I = 2.0 A, drops 4, 8 and 12 V (ratio 1:2:3, adding to 24 V). Example 2: A 12 V battery sits across a 4 Ω and a 12 Ω resistor in parallel. Find the equivalent resistance, the current in each branch, and the total current. 1/R_eq = 1/4 + 1/12 = 1/3, so R_eq = 3 Ω (or 48/16); branch currents 12/4 = 3 A and 12/12 = 1 A add to 4 A = 12/3, in the inverse ratio of the resistances.',
      pitfalls: [
        'Forgetting to invert 1/R_eq at the end.',
        'Splitting the battery voltage equally among series resistors.',
        'Giving a parallel R_eq larger than the smallest branch.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-dc-circuits-mcat', 'mcat-physics-electricity-kirchhoff-power-mcat'],
      checkpoint: [
        {
          question: 'An 18 V ideal battery drives a 1 Ω, a 2 Ω and a 6 Ω resistor connected in series. What is the voltage across the 6 Ω resistor?',
          options: ['12 V', '18 V', '6.0 V', '2.0 V'],
          correctAnswer: 0,
          explanation:
            'R_eq = 1 + 2 + 6 = 9 Ω, so I = 18/9 = 2.0 A through every resistor, and the 6 Ω drop is (2.0 A)(6 Ω) = 12 V. 18 V gives every resistor the full voltage, the parallel rule; 6.0 V splits the battery voltage equally three ways; and 2.0 V is the current, not a voltage.',
        },
        {
          question: 'A 6 V ideal battery sits directly across a 6 Ω resistor and a 3 Ω resistor in parallel. What total current does the battery supply?',
          options: ['0.67 A', '1.0 A', '2.0 A', '3.0 A'],
          correctAnswer: 3,
          explanation:
            'Each branch sees the full 6 V: the 6 Ω branch carries 1.0 A and the 3 Ω branch 2.0 A, for 3.0 A in total. The same answer comes from R_eq = (6)(3)/(6 + 3) = 2 Ω and I = 6/2 = 3.0 A. 0.67 A treats the resistors as series (9 Ω), and 1.0 A and 2.0 A are single branch currents.',
        },
        {
          question: 'Three identical 9 Ω resistors are connected in parallel. What is their equivalent resistance?',
          options: ['27 Ω', '9 Ω', '4.5 Ω', '3 Ω'],
          correctAnswer: 3,
          explanation:
            'For n identical resistors in parallel, R_eq = R/n = 9/3 = 3 Ω, smaller than any single branch as a parallel result must be. 27 Ω is the SERIES total, 9 Ω would mean the extra paths changed nothing, and 4.5 Ω is product over sum for only two of the three resistors.',
        },
      ],
    },
  ],
}
