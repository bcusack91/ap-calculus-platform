import type { LessonData } from './registry'

export const dcCircuitsMcatPart1: LessonData = {
  topicSlug: 'mcat-physics-electricity-dc-circuits-mcat',
  sections: [
    {
      id: 'dc1-intro',
      type: 'text' as const,
      content: `# Circuits Part 1: Current & Resistance

**Part 1 of 2 — Charge, Current & Voltage**

**Where this fits.** The *Electrostatics* lesson treated charges at rest; this first of four Circuits lessons sets them moving. It covers what current and voltage are, how resistance limits current, and how resistors combine in series and parallel, with every source ideal and every element a resistor. Next, the *Circuits Part 2: Kirchhoff's Rules & Power* lesson uses these tools to reduce whole networks and decide which bulb glows brightest.

### Charge and Current

Charge comes in whole multiples of the elementary charge, $e = 1.6 \\times 10^{-19}\\;\\text{C}$: a proton carries $+e$, an electron $-e$. One coulomb is about $6.25 \\times 10^{18}$ elementary charges, which is why even a small current involves enormous numbers of carriers.

**Current** is the rate at which charge passes a point:

$$I = \\frac{\\Delta Q}{\\Delta t}$$

measured in amperes: $1\\;\\text{A} = 1\\;\\text{C/s}$. Current is a RATE, not an amount. A "dead" battery has run out of stored chemical energy, not out of charge.

Two rearrangements do most of the work on the exam:

- Charge moved: $\\Delta Q = I\\Delta t$
- Number of carriers: $N = \\Delta Q / q_{carrier}$, where $q_{carrier} = e$ for an electron, $\\text{Na}^+$ or $\\text{K}^+$, but $2e$ for $\\text{Ca}^{2+}$

### Conventional Current vs. Electron Drift

- **Conventional current** is defined as the direction POSITIVE charge would flow: out of the source's $+$ terminal, through the external circuit, and back into the $-$ terminal. Every circuit rule on the MCAT uses this direction.
- In a metal wire the mobile carriers are electrons, so they drift the OPPOSITE way, from $-$ through the circuit toward $+$.
- A negative charge moving left is the same current as a positive charge moving right. Only the net flow of charge matters.
- Electrons drift slowly, but the electric field that pushes them spreads through the wire at a large fraction of the speed of light, so every carrier in the loop starts moving almost at once. A lamp lights instantly because the wire is already full of carriers, not because electrons race from the switch to the bulb.

<!-- yield:low -->
- Typical drift speeds in household wiring are only about $10^{-4}\\;\\text{m/s}$, and the sign convention itself is a historical accident: "positive" was named long before the electron was discovered.
<!-- /yield -->

### Metallic vs. Electrolytic Conduction

| | Metallic conductor | Electrolytic conductor |
|---|---|---|
| Carriers | delocalized electrons | dissolved ions, both cations and anions |
| Carrier direction | electrons only, against conventional current | cations with the current, anions against it |
| Heating | conductivity FALLS (lattice vibrations scatter electrons) | conductivity RISES (ions move faster through a less viscous solution) |
| More carriers? | fixed by the metal | more dissolved ions means higher conductivity |

- **Conductivity** $\\sigma$ measures how readily a material carries current. It is the reciprocal of resistivity (resistivity is defined in Part 2 of this lesson): $\\sigma = 1/\\rho$, in siemens per metre, where $1\\;\\text{S} = 1\\;\\Omega^{-1}$.
- Pure water conducts poorly because it has very few ions. Dissolve a strong electrolyte such as NaCl and conductivity jumps; a weak electrolyte such as acetic acid dissociates only partly and conducts weakly.
- In a solution, both ion types contribute to current in the SAME direction. A cation moving right and an anion moving left both carry net positive charge to the right, so their contributions ADD; they never cancel.
- **The body is an electrolytic conductor.** Blood, cytosol and interstitial fluid carry current by moving $\\text{Na}^+$, $\\text{K}^+$, $\\text{Cl}^-$ and $\\text{Ca}^{2+}$, never free electrons. A nerve impulse is ions crossing membranes, and an ECG electrode needs conductive gel to bridge the skin to the metal lead.`
    },
    {
      id: 'dc1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice: Charge, Current & Carriers** 🎯`,
      exercise: {
        questions: [
          {
            question: `A steady current of $2.0\\;\\text{A}$ flows in a wire for $4.0\\;\\text{s}$. About how many electrons pass any cross-section of the wire? ($e = 1.6 \\times 10^{-19}\\;\\text{C}$)`,
            options: [`$1.3 \\times 10^{19}$`, `$5.0 \\times 10^{19}$`, `$3.1 \\times 10^{18}$`, `$1.3 \\times 10^{-18}$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `First the charge: $\\Delta Q = I\\Delta t = (2.0)(4.0) = 8.0\\;\\text{C}$. Then $N = 8.0 / (1.6 \\times 10^{-19}) = 5.0 \\times 10^{19}$ electrons. The value $1.3 \\times 10^{19}$ forgets to multiply by the time, and $1.3 \\times 10^{-18}$ multiplies by $e$ instead of dividing. $3.1 \\times 10^{18}$ divides the current by the time ($0.5\\;\\text{C}$) instead of multiplying.`
          },
          {
            question: `In a copper wire, the conduction electrons drift toward the east. Which end of the wire is at the higher potential, and which way does the conventional current point?`,
            options: [`West end higher; current points east`, `East end higher; current points east`, `East end higher; current points west`, `West end higher; current points west`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Electrons are negative, so they drift toward HIGHER potential: the east end is higher. Conventional current runs from high to low potential through a conductor, so it points west, opposite the electron drift. Answering "west end higher, current east" applies the positive-charge rule (high to low) to the electrons themselves.`
          },
          {
            question: `Two electrodes dip into saline (aqueous NaCl), and conventional current runs through the solution from the left electrode to the right one. Which statement describes the charge carriers in the solution?`,
            options: [`$\\text{Na}^+$ drifts right and $\\text{Cl}^-$ drifts left; both carry current`, `$\\text{Na}^+$ drifts right and $\\text{Cl}^-$ drifts left; the two cancel`, `Both ions drift right, and free electrons carry the rest`, `Only $\\text{Na}^+$ drifts; $\\text{Cl}^-$ ions stay in place`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Cations move with the conventional current and anions against it. A negative ion moving left transfers charge exactly as a positive ion moving right does, so the two contributions add. Thinking they cancel confuses the direction of motion with the direction of charge transport; solutions have no free electrons to help.`
          },
          {
            question: `A copper wire and the saline in an IV line both warm from room temperature to body temperature. How does each one's electrical conductivity change?`,
            options: [`Both rise, since warmer carriers move faster`, `Copper's rises as the saline's falls`, `Both fall, since thermal motion scatters carriers`, `Copper's falls; the saline's rises`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `In a metal, the number of free electrons is fixed and a hotter lattice scatters them more, so conductivity falls. In an electrolyte, warmer ions move faster through a less viscous solvent, so conductivity rises. Treating both conductors alike, in either direction, ignores that their carriers differ.`
          }
        ]
      }
    },
    {
      id: 'dc1-voltage',
      type: 'text' as const,
      content: `### Voltage — Energy per Charge

The **potential difference** (voltage) between two points is the work an external agent does (against the field) per unit charge to move a charge between them:

$$\\Delta V = \\frac{W}{q} \\qquad \\Delta U = q\\Delta V$$

measured in volts: $1\\;\\text{V} = 1\\;\\text{J/C}$. A $9\\;\\text{V}$ battery gives every coulomb that passes through it $9\\;\\text{J}$ of electrical potential energy; the resistors in the circuit turn that energy into heat and light.

- Positive charges move spontaneously from HIGH to LOW potential, losing potential energy.
- Negative charges (electrons, $\\text{Cl}^-$) move spontaneously from LOW to HIGH potential, and they ALSO lose potential energy, because $q$ is negative in $\\Delta U = q\\Delta V$.
- The **electron-volt** is the energy one elementary charge gains or loses crossing $1\\;\\text{V}$: $1\\;\\text{eV} = 1.6 \\times 10^{-19}\\;\\text{J}$. It is the natural unit for single electrons and ions.

### Ground and Reference Points

Voltage is always a DIFFERENCE between two points. **Ground** is the point we declare to be $0\\;\\text{V}$, usually the battery's negative terminal or literally the Earth. Choosing a different reference shifts every potential by the same amount and changes no difference, no current and no energy. On a circuit figure, all points joined by ideal (zero-resistance) wire are at the same potential: wires are equipotential, and voltage drops happen only across elements.

### Why Current Flows — and the Water Analogy

A battery maintains a potential difference between its terminals, so charge sent around an external path gains energy inside the battery and spends it in the circuit. (What a real battery does inside, its EMF and internal resistance, is covered in the *Circuits Part 3: EMF & Capacitance* lesson.)

| Circuit | Water system |
|---|---|
| battery | pump |
| voltage | pressure difference |
| current | volume flow rate |
| resistor | narrow section of pipe |
| ideal wire | wide, frictionless pipe |

Where the analogy breaks down:

- **Charge is not used up.** The same current that enters a bulb leaves it; the bulb converts potential ENERGY into heat and light. Picturing current "draining away" bulb by bulb is the root of most series-circuit errors.
- **The pipe is always full.** Wires already contain carriers everywhere, which is why the response is instant.
- **A break stops everything.** Cut a water pipe and water spills out; cut a wire and charge simply stops moving.

### Open vs. Closed Circuits

Current needs a complete conducting loop, a **closed circuit**. Open a switch anywhere in a single loop and current stops EVERYWHERE in that loop at once. With no current, no resistor has any voltage across it ($V = IR = 0$), so the ENTIRE source voltage appears across the open gap. A broken wire, a burned-out filament and an open switch all behave the same way.`
    },
    {
      id: 'dc1-worked',
      type: 'text' as const,
      content: `### Worked Example — Counting Charge, Carriers and Energy

**Problem 1.** A $9\\;\\text{V}$ battery delivers a steady $0.50\\;\\text{A}$ to a small pump for $1$ minute.

- **(a)** How much charge passes through the pump?
- **(b)** How many electrons is that?
- **(c)** How much energy does the battery deliver to the pump?
- **(d)** How much energy does each electron carry, and do the electrons account for the total?

**(a) Charge moved.** $\\Delta Q = I\\Delta t = (0.50\\;\\text{A})(60\\;\\text{s}) = 30\\;\\text{C}$

**(b) Number of electrons.** With $\\Delta Q = 30\\;\\text{C}$ from (a): $N = \\dfrac{30}{1.6 \\times 10^{-19}} \\approx 1.9 \\times 10^{20}$. (Estimate: $30/1.6 \\approx 19$.)

**(c) Energy delivered.** Each coulomb gains $9\\;\\text{J}$, so the $30\\;\\text{C}$ from (a) receive $W = qV = (30)(9) = 270\\;\\text{J}$.

**(d) Energy per electron.** $9\\;\\text{eV} = 9(1.6 \\times 10^{-19}) \\approx 1.4 \\times 10^{-18}\\;\\text{J}$. Check against (b) and (c): $(1.9 \\times 10^{20})(1.4 \\times 10^{-18}) \\approx 270\\;\\text{J}$. The two routes agree.

**Problem 2.** Recordings show one open potassium channel passing about $2\\;\\text{pA}$ ($2 \\times 10^{-12}\\;\\text{A}$) for $1\\;\\text{ms}$.

- **(a)** How much charge crosses the membrane?
- **(b)** How many $\\text{K}^+$ ions is that?
- **(c)** How many ions would be needed if the same $2\\;\\text{pA}$ were carried by $\\text{Ca}^{2+}$ instead?
- **(d)** Is $\\text{K}^+$ leaving the cell an inward or an outward current, and what about $\\text{Cl}^-$ entering it?

**(a) Charge.** $\\Delta Q = (2 \\times 10^{-12})(1 \\times 10^{-3}) = 2 \\times 10^{-15}\\;\\text{C}$

**(b) Ions.** Each $\\text{K}^+$ carries $+e$, so with $\\Delta Q = 2 \\times 10^{-15}\\;\\text{C}$ from (a): $N = \\dfrac{2 \\times 10^{-15}}{1.6 \\times 10^{-19}} \\approx 1.25 \\times 10^{4}$, about $12{,}500$ ions.

**(c) The divalent trap.** Each $\\text{Ca}^{2+}$ ion carries $2e$, so only HALF as many ions (about $6{,}250$) would carry the same charge. Always divide by the charge per carrier, not automatically by $e$.

**(d) Direction.** $\\text{K}^+$ leaving the cell is an outward current. $\\text{Cl}^-$ ions entering the cell would ALSO be an outward current, because negative charge moving in is equivalent to positive charge moving out.`
    },
    {
      id: 'dc1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Practice: Voltage, Energy & Closed Loops** 🎯`,
      exercise: {
        questions: [
          {
            question: `The potential difference across a resting neuron's membrane is about $70\\;\\text{mV}$. By how much does the electrical potential energy of a single $\\text{Na}^+$ ion change when it crosses the whole membrane? ($e = 1.6 \\times 10^{-19}\\;\\text{C}$)`,
            options: [`$2.3 \\times 10^{-18}\\;\\text{J}$`, `$1.1 \\times 10^{-17}\\;\\text{J}$`, `$1.1 \\times 10^{-20}\\;\\text{J}$`, `$4.4 \\times 10^{17}\\;\\text{J}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$|\\Delta U| = q|\\Delta V| = (1.6 \\times 10^{-19})(7 \\times 10^{-2}) \\approx 1.1 \\times 10^{-20}\\;\\text{J}$, which is $0.07\\;\\text{eV}$. Using $70\\;\\text{V}$ instead of $0.070\\;\\text{V}$ gives $1.1 \\times 10^{-17}\\;\\text{J}$, a factor of 1000 too large; the other two values come from dividing instead of multiplying.`
          },
          {
            question: `An electron is released from rest in a region with an electric field and no other forces. As it starts to move, it travels:`,
            options: [`Toward lower potential; its potential energy decreases`, `Toward higher potential; its potential energy decreases`, `Toward higher potential; its potential energy rises`, `Toward lower potential; its potential energy increases`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Any charge released from rest speeds up, so its potential energy must fall. For a negative charge, $\\Delta U = q\\Delta V$ is negative only when $\\Delta V$ is positive, so the electron moves toward HIGHER potential. "Lower potential" is the rule for positive charges.`
          },
          {
            question: `A $9\\;\\text{V}$ ideal battery, an open switch and a lamp form a single loop. Which pair of statements is correct?`,
            options: [`No current in the lamp; 0 V across the open switch`, `No current in the lamp; 9 V across the lamp itself`, `A tiny current; the 9 V is shared by lamp and switch`, `No current anywhere; 9 V across the open switch`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `An open loop carries no current anywhere, so the lamp's drop is $V = IR = 0$. The loop rule still requires the drops to add to $9\\;\\text{V}$, so the whole battery voltage sits across the gap in the switch. Saying the gap has 0 V confuses "no current" with "no voltage".`
          },
          {
            question: `Two identical lamps are wired in series to a battery. A student claims the second lamp must be dimmer because the first lamp uses up some of the current. Which statement corrects the student?`,
            options: [`Both carry equal current; lamps convert energy, not charge`, `The student is right; each lamp absorbs part of the passing current`, `The second lamp is brighter, as current speeds up after the first`, `The currents are equal only if the wires have zero resistance`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Charge is conserved: in a single loop, every coulomb that enters a lamp leaves it, so both lamps carry the same current and, being identical, glow equally. What a lamp removes is potential ENERGY per charge. Even resistive wires do not change this, because they sit in the same single path.`
          }
        ]
      }
    },
    {
      id: 'dc1-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- **Current is a rate.** $I = \\Delta Q/\\Delta t$, $1\\;\\text{A} = 1\\;\\text{C/s}$; count carriers with $N = \\Delta Q/q$, using $2e$ for $\\text{Ca}^{2+}$.
- **Conventional current.** It points the way positive charge flows, $+$ to $-$ outside the source; metal electrons drift the opposite way.
- **Metals vs. electrolytes.** Metals carry current with electrons and conduct worse when hot; ions in solution conduct better when warm.
- **Voltage is energy per charge.** $\\Delta U = q\\Delta V$: positive charges fall to lower potential, negative to higher, and both lose energy.

**Common traps**

- **Cancelling ion flows.** Cations moving one way and anions the other carry current in the same direction, so they add.
- **Bulbs using up current.** Series bulbs carry the same current; a bulb converts potential energy, not charge.
- **Dividing every ion by $e$.** A $\\text{Ca}^{2+}$ ion carries $2e$, so the same charge takes only half as many ions.
- **Open switch, zero volts.** An open loop carries no current, yet the full source voltage sits across the gap.

<!-- yield:low -->
- Low-yield extras: the actual drift-speed magnitude; the historical origin of the sign convention.
<!-- /yield -->`
    }
  ]
}
