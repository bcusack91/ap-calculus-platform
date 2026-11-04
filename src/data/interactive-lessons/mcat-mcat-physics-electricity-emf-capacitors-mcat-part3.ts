import type { LessonData } from './registry'

export const emfCapacitorsMcatPart3: LessonData = {
  topicSlug: 'mcat-physics-electricity-emf-capacitors-mcat',
  sections: [
    {
      id: 'ec3-intro',
      type: 'text' as const,
      content: `# Circuits Part 2: EMF & Capacitors

**Part 3 of 4 — Capacitor Networks & RC Circuits**

### Capacitor Networks

Capacitors combine by rules that are the exact REVERSE of the resistor rules from the *Circuits Part 1: Current & Resistance* lesson.

| | Capacitors in series | Capacitors in parallel |
|---|---|---|
| Same for each | charge $Q$ | voltage $V$ |
| What adds | voltages: $V = V_1 + V_2 + \\cdots$ | charges: $Q = Q_1 + Q_2 + \\cdots$ |
| Equivalent capacitance | $\\frac{1}{C_{\\text{eq}}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\cdots$ | $C_{\\text{eq}} = C_1 + C_2 + \\cdots$ |
| Size of $C_{\\text{eq}}$ | smaller than the smallest | larger than the largest |
| Physical picture | like widening the gap $d$ | like enlarging the plate area $A$ |
| Who gets more | smaller $C$ takes the larger voltage | larger $C$ holds more charge |

**Why parallel capacitors add.** Side by side, every capacitor sees the same voltage, and the charges simply pile up: $Q = C_1V + C_2V$, so $C_{\\text{eq}} = C_1 + C_2$. Two plates side by side act like one bigger plate.

**Why series capacitors share charge.** In a series chain, the inner plates of neighboring capacitors are joined to each other and to nothing else, so that isolated piece of metal stays neutral overall. If $+Q$ appears on one inner plate, $-Q$ must appear on its partner. Every capacitor in series carries the same $Q$, and the voltages add: $V = Q/C_1 + Q/C_2$, which gives the reciprocal rule. Stacking gaps in series acts like one wider gap, so capacitance falls.

**Shortcuts** (the same algebra as resistors, applied to the opposite arrangement):

- Two in series: $C_{\\text{eq}} = \\dfrac{C_1 C_2}{C_1 + C_2}$ ("product over sum")
- $N$ identical capacitors: $C/N$ in series, $NC$ in parallel

### Worked Example — Series Capacitors Share Charge, Not Voltage

A $3.0\\;\\mu\\text{F}$ and a $6.0\\;\\mu\\text{F}$ capacitor are in series across a $12\\;\\text{V}$ battery.

**Step 1 — Equivalent capacitance.** $C_{\\text{eq}} = \\frac{(3.0)(6.0)}{3.0 + 6.0} = 2.0\\;\\mu\\text{F}$, smaller than either one, as series capacitance must be.

**Step 2 — Charge, the same on each.** $Q = C_{\\text{eq}}V = (2.0\\;\\mu\\text{F})(12\\;\\text{V}) = 24\\;\\mu\\text{C}$.

**Step 3 — Individual voltages.** $V_3 = 24/3.0 = 8.0\\;\\text{V}$ and $V_6 = 24/6.0 = 4.0\\;\\text{V}$. Check: $8.0 + 4.0 = 12\\;\\text{V}$. ✓

The SMALLER capacitor takes the LARGER share of the voltage, the mirror image of series resistors (where the larger resistor takes more).`
    },
    {
      id: 'ec3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice — Capacitor Networks** 🎯`,
      exercise: {
        questions: [
          {
            question: `A $3.0\\;\\mu\\text{F}$ and a $6.0\\;\\mu\\text{F}$ capacitor are connected in parallel, and that pair is connected in series with a $9.0\\;\\mu\\text{F}$ capacitor. What is the equivalent capacitance?`,
            options: [`$18\\;\\mu\\text{F}$`, `$4.5\\;\\mu\\text{F}$`, `$11\\;\\mu\\text{F}$`, `$1.6\\;\\mu\\text{F}$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The parallel pair adds to $9.0\\;\\mu\\text{F}$; in series with another $9.0\\;\\mu\\text{F}$, product over sum gives $81/18 = 4.5\\;\\mu\\text{F}$. Getting $11\\;\\mu\\text{F}$ applies the resistor rules (product over sum for the parallel pair, then adding in series), which is exactly backward for capacitors.`
          },
          {
            question: `A $2.0\\;\\mu\\text{F}$ and an $8.0\\;\\mu\\text{F}$ capacitor are connected in series across a $10\\;\\text{V}$ battery. What is the voltage across the $8.0\\;\\mu\\text{F}$ capacitor?`,
            options: [`$8.0\\;\\text{V}$`, `$5.0\\;\\text{V}$`, `$2.0\\;\\text{V}$`, `$10\\;\\text{V}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$C_{\\text{eq}} = 16/10 = 1.6\\;\\mu\\text{F}$, so $Q = (1.6)(10) = 16\\;\\mu\\text{C}$ on each, and $V_8 = 16/8.0 = 2.0\\;\\text{V}$ (the $2.0\\;\\mu\\text{F}$ takes the other $8.0\\;\\text{V}$). Picking $8.0\\;\\text{V}$ uses resistor intuition, where the "bigger" element takes more voltage; for series capacitors, the bigger one takes less.`
          },
          {
            question: `Two capacitors of unequal capacitance are connected in series and charged by a battery. Which statement is true?`,
            options: [`They hold equal charge, and the smaller one has the larger voltage`, `They have equal voltage, and the larger one holds more charge`, `They hold equal charge, and the larger one has the larger voltage`, `The larger one holds more charge and also has the larger voltage`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The isolated inner plates force equal charge on every series capacitor, and $V = Q/C$ then gives the smaller capacitor the larger voltage. Equal voltage with more charge on the larger capacitor describes a PARALLEL pair.`
          },
          {
            question: `Three identical capacitors are arranged four ways: (I) all in series; (II) all in parallel; (III) two in parallel, that pair in series with the third; (IV) two in series, that pair in parallel with the third. Rank the equivalent capacitances from greatest to least.`,
            options: [`I > III > IV > II`, `II > III > IV > I`, `IV > II > III > I`, `II > IV > III > I`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `With each capacitor $C$: (II) $3C$; (IV) $C/2 + C = 1.5C$; (III) $2C$ in series with $C$ gives $2C/3$; (I) $C/3$. So II > IV > III > I. The ordering I > III > IV > II is exactly what resistors would give, since the capacitor rules are the reverse.`
          }
        ]
      }
    },
    {
      id: 'ec3-dc',
      type: 'text' as const,
      content: `### Capacitors in DC Circuits

A capacitor in a DC circuit has two simple snapshots, and MCAT questions almost always ask about one of them.

**At $t = 0$ (switch just closed, capacitor uncharged):** an empty capacitor has $V_C = Q/C = 0$, so it offers no opposition to current. **It acts like a plain wire.** The initial current is set by the resistors alone; for a single resistor in series with the capacitor, $I_0 = \\varepsilon/R$.

**At steady state (long after, fully charged):** the capacitor's voltage has risen until it balances whatever drives its branch, so **no current flows through it. It acts like an open branch (a cut wire).**

The bridge between them: **a capacitor's voltage cannot change instantly**, because charge takes time to flow onto the plates. Current, by contrast, can jump the moment a switch moves.

**Steady-state recipe:**

1. Delete every capacitor branch (treat it as open).
2. Solve the remaining resistor network with the tools from the *Circuits Part 1: Current & Resistance* lesson.
3. Find $V_C$ as the potential difference between the two points the capacitor connects. A resistor in series with the capacitor carries no current, so it drops no voltage and can be ignored.
4. Then $Q = CV_C$ and $U = \\frac{1}{2}CV_C^2$.

### The Time Constant

How fast does a capacitor charge through a resistor? The scale is the **time constant**:

$$\\tau = RC$$

(ohms times farads gives seconds).

**Charging** (from a battery through $R$): the charge and capacitor voltage rise quickly at first, then more and more slowly, leveling off at $Q_{\\max} = C\\varepsilon$. Meanwhile, the current starts at its maximum, $\\varepsilon/R$, and dies away toward zero. The slowdown happens because the growing capacitor voltage opposes the battery, leaving less voltage to push current through $R$.

**Discharging** (the charged capacitor connected across a resistor): charge, voltage and current all start at their maximum and decay toward zero, fast at first and then ever more slowly. The discharge current flows in the OPPOSITE direction to the charging current, because charge now leaves the plates instead of arriving.

| After | Charging: fraction of final charge | Discharging: fraction of charge left |
|---|---|---|
| $1\\tau$ | about 63% | about 37% |
| about $5\\tau$ | more than 99% (treat as full) | less than 1% (treat as empty) |

Intuition for $\\tau = RC$: a bigger $R$ lets less current flow to deliver the charge; a bigger $C$ needs more charge to reach the same voltage. Either one slows things down. The battery's voltage does NOT change $\\tau$; it only changes the final charge.

**The exact curves** (a passage will give these; recognize their shape): charging $Q(t) = C\\varepsilon(1 - e^{-t/RC})$, which rises and levels off; discharging $Q(t) = Q_0 e^{-t/RC}$, which decays toward zero. Setting $t = RC$ gives $1 - e^{-1} \\approx 0.63$ and $e^{-1} \\approx 0.37$, the numbers in the table.

<!-- yield:low -->
- The time to reach half of the final charge (or to lose half while discharging) is about $0.69\\tau$.
<!-- /yield -->`
    },
    {
      id: 'ec3-worked',
      type: 'text' as const,
      content: `### Worked Example — Steady-State Voltage Across a Capacitor

Build the circuit piece by piece:

1. An ideal $12\\;\\text{V}$ battery and a switch.
2. In series with the battery: $R_1 = 2.0\\;\\Omega$, then $R_2 = 4.0\\;\\Omega$. This makes one main loop.
3. A side branch connected across $R_2$ (its two ends attach to the same two points as $R_2$'s ends), so the branch is in PARALLEL with $R_2$.
4. Inside that branch, in series with each other: $R_3 = 4.0\\;\\Omega$ and an uncharged $5.0\\;\\mu\\text{F}$ capacitor.

Find the battery current just after the switch closes, and the capacitor's charge and energy long afterward.

**Part A — The instant the switch closes.** The empty capacitor acts like a wire, so the branch is just $R_3$, in parallel with $R_2$. Call that combination $R_{2\\|3}$ ($R_2$ in parallel with $R_3$):

$$R_{2\\|3} = \\frac{(4.0)(4.0)}{4.0 + 4.0} = 2.0\\;\\Omega, \\qquad R_{\\text{total}} = 2.0 + 2.0 = 4.0\\;\\Omega$$

$$I_0 = \\frac{12}{4.0} = 3.0\\;\\text{A}$$

Because $R_2 = R_3$, the current splits equally: half of it ($1.5\\;\\text{A}$) rushes into the capacitor branch, and half goes through $R_2$.

**Part B — Steady state.**

1. Open the capacitor branch. Only $R_1$ and $R_2$ in series remain: $I = 12/(2.0 + 4.0) = 2.0\\;\\text{A}$.
2. Voltage across $R_2$: $V_2 = (2.0)(4.0) = 8.0\\;\\text{V}$.
3. The capacitor branch connects the same two points as $R_2$. No current flows in that branch, so $R_3$ drops nothing, and the capacitor sits at the full $8.0\\;\\text{V}$.
4. $Q = CV_C = (5.0\\;\\mu\\text{F})(8.0\\;\\text{V}) = 40\\;\\mu\\text{C}$, and $U = \\frac{1}{2}(5.0 \\times 10^{-6})(8.0)^2 = 1.6 \\times 10^{-4}\\;\\text{J}$.

**Takeaways:** the battery current falls from $3.0\\;\\text{A}$ to $2.0\\;\\text{A}$ as the capacitor fills. The series resistor $R_3$ shapes HOW FAST the capacitor charges, not the final voltage it reaches. A common error is to subtract a drop across $R_3$ at steady state; with zero current, there is none.`
    },
    {
      id: 'ec3-quiz2',
      type: 'multiple-choice' as const,
      content: `**DC Capacitor Circuits & the Time Constant** 🎯`,
      exercise: {
        questions: [
          {
            question: `A circuit is built in three steps: (1) an ideal $9.0\\;\\text{V}$ battery; (2) a $1.0\\;\\Omega$ resistor and a $2.0\\;\\Omega$ resistor, in series with the battery in one loop; (3) a $3.0\\;\\mu\\text{F}$ capacitor whose two leads attach to the two ends of the $2.0\\;\\Omega$ resistor, so it is in parallel with that resistor. Long after the circuit is switched on, what is the charge on the capacitor?`,
            options: [`$27\\;\\mu\\text{C}$`, `$9.0\\;\\mu\\text{C}$`, `$0\\;\\mu\\text{C}$`, `$18\\;\\mu\\text{C}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `At steady state the capacitor branch is open, so $I = 9.0/3.0 = 3.0\\;\\text{A}$ flows through both resistors and the $2.0\\;\\Omega$ resistor drops $6.0\\;\\text{V}$. The capacitor shares that voltage: $Q = (3.0\\;\\mu\\text{F})(6.0\\;\\text{V}) = 18\\;\\mu\\text{C}$. Using the full $9.0\\;\\text{V}$ (giving $27\\;\\mu\\text{C}$) ignores the drop across the $1.0\\;\\Omega$ resistor, which still carries current.`
          },
          {
            question: `A $2.0\\;\\text{k}\\Omega$ resistor and a $50\\;\\mu\\text{F}$ capacitor are connected in series to a battery. About how long does it take the capacitor to become essentially fully charged?`,
            options: [`About $0.10\\;\\text{s}$`, `About $0.50\\;\\text{s}$`, `About $5.0\\;\\text{s}$`, `About $100\\;\\text{s}$`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `$\\tau = RC = (2.0 \\times 10^3)(5.0 \\times 10^{-5}) = 0.10\\;\\text{s}$, and "essentially full" takes about $5\\tau = 0.50\\;\\text{s}$. After only $0.10\\;\\text{s}$ (one time constant) the capacitor holds about 63% of its final charge. The value $100\\;\\text{s}$ comes from dropping the kilo and micro prefixes.`
          },
          {
            question: `In a simple pacemaker model, a capacitor charges through a resistor from a fixed battery; each time its voltage reaches a set threshold, it fires a pulse and resets. Which change would LENGTHEN the interval between pulses?`,
            options: [`Increase the resistance in the charging path`, `Use a smaller timing capacitor`, `Increase the EMF of the charging battery`, `Add a second, identical capacitor in series`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The interval scales with $\\tau = RC$, so a larger $R$ slows charging and delays each threshold crossing. A smaller timing capacitor shortens $\\tau$, and so does adding an identical capacitor in series: two equal capacitors in series have half the capacitance, so $\\tau$ halves. A higher EMF does not change $\\tau$, but it makes the voltage climb toward a higher final value, so the fixed threshold is reached SOONER, which shortens the interval.`
          },
          {
            question: `An ideal $10\\;\\text{V}$ battery, an open switch, a $5.0\\;\\Omega$ resistor and an uncharged capacitor are connected in series. Immediately after the switch closes, what are the current and the capacitor voltage?`,
            options: [`$I = 0$ and $V_C = 10\\;\\text{V}$`, `$I = 2\\;\\text{A}$ and $V_C = 0$`, `$I = 1\\;\\text{A}$ and $V_C = 5\\;\\text{V}$`, `$I = 2\\;\\text{A}$ and $V_C = 10\\;\\text{V}$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `An uncharged capacitor has no voltage and cannot gain charge instantly, so at $t = 0$ it acts like a wire: the full $10\\;\\text{V}$ appears across the resistor and $I = 10/5.0 = 2\\;\\text{A}$. Splitting the voltage evenly between resistor and capacitor describes no particular moment. Zero current with $10\\;\\text{V}$ on the capacitor is the steady-state picture, reached only after several time constants.`
          },
          {
            question: `A battery charges an initially uncharged capacitor through a resistor. Which description matches a graph of the CURRENT in the circuit against time?`,
            options: [`Rises quickly at first, then levels off at a maximum`, `Increases at a steady rate for as long as it charges`, `Starts at its maximum, then decays toward zero`, `Stays constant until the capacitor is fully charged`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `At $t = 0$ the empty capacitor acts like a wire, so the current starts at its largest value, $\\varepsilon/R$; as the capacitor's voltage builds and opposes the battery, the current dies away toward zero. "Rises and levels off" is the right shape for the capacitor's CHARGE or VOLTAGE, not its current. Neither quantity changes linearly or stays constant.`
          }
        ]
      }
    },
    {
      id: 'ec3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Capacitor rules are resistor rules reversed: parallel capacitances add; series combine by reciprocals
- Series capacitors share the same $Q$ (smaller $C$ takes the larger voltage); parallel capacitors share the same $V$ (larger $C$ holds more charge)
- Uncharged capacitor at $t = 0$ = wire; fully charged capacitor = open branch
- Steady state: delete capacitor branches, solve the resistor network, read $V_C$ between the capacitor's two nodes (series resistors in its branch drop nothing), then $Q = CV_C$
- $\\tau = RC$: about 63% charged (or 37% left when discharging) after $1\\tau$; essentially complete after about $5\\tau$
- Charging: charge and capacitor voltage rise and level off; current starts at $\\varepsilon/R$ and decays. Discharging: everything decays, and the current reverses direction
- Exact forms (a passage supplies them): $Q = C\\varepsilon(1 - e^{-t/RC})$ charging, $Q = Q_0e^{-t/RC}$ discharging; the battery's voltage changes the final charge, not $\\tau$

**Common traps**

- Applying resistor formulas to capacitors (or vice versa)
- Giving the larger series capacitor the larger voltage
- Subtracting a voltage drop across a resistor that is in series with a fully charged capacitor (no current, no drop)
- Treating "one time constant" as fully charged: it is only about 63%
- Thinking a capacitor's voltage can jump when a switch closes (its current can; its voltage cannot)

<!-- yield:low -->
- Low-yield extras: the half-time of about $0.69\\tau$
<!-- /yield -->`
    }
  ]
}
