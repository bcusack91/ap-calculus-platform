import type { ShotList } from '../types'

/**
 * Shot list: MCAT Physics — Circuits Part 1: Current & Resistance
 * (topic mcat-physics-electricity-dc-circuits-mcat, the first of four Circuits topics).
 *
 * Source: the 2-part lesson (src/data/interactive-lessons/mcat-mcat-physics-electricity-dc-circuits-mcat-part1..2.ts)
 * and its lesson-built exit pool. Four Manim clips of about 6 minutes each:
 * clips 1–2 follow lesson Part 1 (charge, current, voltage), clips 3–4 follow
 * lesson Part 2 (resistance, Ohm's law, series and parallel). Kirchhoff's
 * rules, power and bulb brightness belong to Circuits Part 2 and are left out.
 *
 * The checkpoint questions are what a YouTube viewer answers at
 * studymondo.com/v/current1, voltage1, ohm1 and series1 (src/data/video-short-links.ts). They use new
 * scenarios and numbers, so they never repeat an exit-quiz item or a worked example.
 */
export const shotList: ShotList = {
  courseSlug: 'mcat-prep',
  topicSlug: 'mcat-physics-electricity-dc-circuits-mcat',
  title: 'Circuits Part 1: Current & Resistance',
  overview:
    'Four animated clips that build circuits from the ground up: what current is and which way it points, what voltage measures, how resistance limits current, and how resistors combine in series and parallel. Narration stays exam-neutral, so the clips also serve introductory physics; the biology links (ion channels, axons, the body as an electrolytic conductor) are the ones the exam leans on. Each clip ends with three checkpoint questions; the topic exit quiz follows the last clip.',
  clips: [
    // ── 1 ────────────────────────────────────────────────────────────────
    {
      title: 'Current: Charge on the Move',
      minutes: 6,
      goal: 'Compute current, charge and the number of carriers, say which way current points, and contrast metallic with electrolytic conduction.',
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
        'The K⁺ channel worked example with its numbers',
      ],
      workedExample:
        'One open K⁺ channel passes 2 pA for 1 ms: ΔQ = (2 × 10⁻¹²)(1 × 10⁻³) = 2 × 10⁻¹⁵ C, so N = 2 × 10⁻¹⁵ / 1.6 × 10⁻¹⁹ ≈ 12,500 K⁺ ions. Carried by Ca²⁺ (2e each), the same current needs only about 6,250 ions.',
      pitfalls: [
        'Treating current as an amount of charge rather than a rate.',
        'Dividing every ion count by e: a Ca²⁺ ion carries 2e.',
        'Letting opposite ion flows cancel: cations one way and anions the other carry current in the same direction.',
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
      ],
    },
    // ── 2 ────────────────────────────────────────────────────────────────
    {
      title: 'Voltage: Energy per Charge',
      minutes: 6,
      goal: 'Use ΔU = qΔV for positive and negative charges, treat voltage as a difference from a chosen ground, and predict what an open switch does to a loop.',
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
        'The 9 V pump worked example with its four lines of arithmetic',
      ],
      workedExample:
        'A 9 V battery delivers 0.50 A to a small pump for 1 minute: ΔQ = (0.50)(60) = 30 C; N = 30 / 1.6 × 10⁻¹⁹ ≈ 1.9 × 10²⁰ electrons; energy = qV = (30)(9) = 270 J; each electron carries 9 eV ≈ 1.4 × 10⁻¹⁸ J, and (1.9 × 10²⁰)(1.4 × 10⁻¹⁸) ≈ 270 J checks.',
      pitfalls: [
        'Thinking a negative charge moving to higher potential gains potential energy.',
        'Picturing bulbs using up current: the same current leaves a bulb as enters it.',
        'Expecting zero volts across an open switch: the full source voltage sits across the gap.',
      ],
      lessonParts: [1],
      mcatTags: ['mcat-physics-electricity-dc-circuits-mcat', 'mcat-physics-electricity-electrostatics-mcat'],
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
    // ── 3 ────────────────────────────────────────────────────────────────
    {
      title: "Resistance and Ohm's Law",
      minutes: 6,
      goal: "Apply V = IR three ways, read ohmic and non-ohmic I–V graphs, and scale a wire's resistance with R = ρL/A.",
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
        'The worked wire example with its numbers',
      ],
      workedExample:
        'A copper wire has R = 2.0 Ω. (a) A wire of the same copper, twice as long with twice the diameter: R × 2 / 4 = 1.0 Ω. (b) The original wire stretched to three times its length at constant volume: R × 3² = 18 Ω. (c) Across 6.0 V, the currents are 6.0 / 1.0 = 6.0 A and 6.0 / 18 ≈ 0.33 A.',
      pitfalls: [
        'Scaling resistance with the diameter instead of the area (1/r², not 1/d).',
        'Borrowing the fluid 1/r⁴ law for a wire.',
        'Calling a filament bulb ohmic because V = IR still holds at each instant.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-dc-circuits-mcat', 'mcat-biological-basis-behavior-mcat'],
      checkpoint: [
        {
          question: 'A metal wire is stretched to twice its original length. Its volume and resistivity stay the same. By what factor does its resistance change?',
          options: ['It doubles', 'It quadruples', 'It halves', 'It stays the same'],
          correctAnswer: 1,
          explanation:
            'At constant volume, doubling the length halves the cross-sectional area. With R = ρL/A, the length factor 2 and the area factor 1/2 combine to 2 / (1/2) = 4, so R quadruples. "Doubles" accounts for the length only, "halves" inverts the effect, and the resistance does change because both L and A changed.',
        },
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
      ],
    },
    // ── 4 ────────────────────────────────────────────────────────────────
    {
      title: 'Series vs. Parallel Resistors',
      minutes: 7,
      goal: 'Identify series and parallel by nodes, find equivalent resistance, split current and voltage correctly, and predict what a short or an open does.',
      keyPoints: [
        'Series: one path, the same current through every element, voltages add, R_eq = R₁ + R₂ + …, always larger than the largest; one break stops the whole loop.',
        'Parallel: every element joins the same two nodes, so each has the same voltage; currents add, 1/R_eq = 1/R₁ + 1/R₂ + …, always smaller than the smallest branch; adding a branch lowers R_eq and raises the total current.',
        'Shortcuts: product over sum for two in parallel; n identical resistors give nR in series and R/n in parallel.',
        'Identify arrangements by current paths and nodes, never by how the figure is drawn.',
        'A wire across an element holds both ends at the same potential, so it carries no current and drops out; an open branch carries none and can be erased.',
      ],
      showOnScreen: [
        'A series string with one current arrow threading every resistor and the voltage drops stacking to the battery voltage',
        'A parallel bank with the two nodes highlighted, the same voltage across each branch, and the branch currents merging',
        'A comparison table filling row by row: same, divides, R_eq, adding one more, biggest share, one breaks',
        'Two drawings of the same circuit, one tangled, with the nodes coloured to show they match',
        'A short-circuit wire laid across one bulb: that bulb goes dark, the current takes the wire',
        'Worked examples: 24 V across 2, 4 and 6 Ω in series; 12 V across 4 Ω and 12 Ω in parallel',
      ],
      workedExample:
        'Series: 24 V across 2, 4 and 6 Ω gives R_eq = 12 Ω, I = 2.0 A, drops 4, 8 and 12 V (ratio 1:2:3, adding to 24 V). Parallel: 12 V across 4 Ω and 12 Ω gives R_eq = 48/16 = 3 Ω; branch currents 3 A and 1 A add to 12/3 = 4 A, in the inverse ratio of the resistances.',
      pitfalls: [
        'Swapping the formulas: resistances add in series; in parallel the conductances 1/R add.',
        'Forgetting to invert 1/R_eq at the end.',
        'A parallel R_eq larger than any branch is always an error.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-electricity-dc-circuits-mcat', 'mcat-physics-electricity-kirchhoff-power-mcat'],
      checkpoint: [
        {
          question: 'Three identical 9 Ω resistors are connected in parallel. What is their equivalent resistance?',
          options: ['27 Ω', '9 Ω', '4.5 Ω', '3 Ω'],
          correctAnswer: 3,
          explanation:
            'For n identical resistors in parallel, R_eq = R/n = 9/3 = 3 Ω, smaller than any single branch as a parallel result must be. 27 Ω is the SERIES total, 9 Ω would mean the extra paths changed nothing, and 4.5 Ω is product over sum for only two of the three resistors.',
        },
        {
          question: 'A 6 V ideal battery sits directly across a 6 Ω resistor and a 3 Ω resistor in parallel. What total current does the battery supply?',
          options: ['0.67 A', '1.0 A', '2.0 A', '3.0 A'],
          correctAnswer: 3,
          explanation:
            'Each branch sees the full 6 V: the 6 Ω branch carries 1.0 A and the 3 Ω branch 2.0 A, for 3.0 A in total. The same answer comes from R_eq = (6)(3)/(6 + 3) = 2 Ω and I = 6/2 = 3.0 A. 0.67 A treats the resistors as series (9 Ω), and 1.0 A and 2.0 A are single branch currents.',
        },
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
      ],
    },
  ],
}
