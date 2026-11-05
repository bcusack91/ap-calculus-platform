import type { LessonData } from './registry'

export const emfCapacitorsMcatPart1: LessonData = {
  topicSlug: 'mcat-physics-electricity-emf-capacitors-mcat',
  sections: [
    {
      id: 'ec1-intro',
      type: 'text' as const,
      content: `# Circuits Part 3: EMF & Capacitance

**Part 1 of 2 — EMF, Internal Resistance & Meters**

**Where this fits.** *Circuits Parts 1 and 2* gave you the rules for steady current ($V = IR$, series and parallel resistors, Kirchhoff's rules, power) with every battery a perfect, fixed voltage. This lesson makes the battery real (EMF, internal resistance, meters), then adds the element that stores charge instead of passing it: the capacitor, with its dielectrics and stored energy. *Circuits Part 4* wires capacitors into networks and RC circuits and finds them in neurons and defibrillators.

### What EMF Means

Inside a battery, chemical reactions push positive charge "uphill" from the negative terminal to the positive terminal. The **EMF** ($\\varepsilon$, "electromotive force") is the work the battery does per coulomb moved through it:

$$\\varepsilon = \\frac{W}{q}$$

Despite its name, EMF is not a force. It is measured in volts ($1\\;\\text{V} = 1\\;\\text{J/C}$), and it is the battery's maximum possible voltage. Think of the battery as a pump: EMF is the pressure the pump can produce when nothing is flowing.

### EMF vs. Terminal Voltage

A real battery behaves like an ideal EMF source in series with a small **internal resistance** $r$ (the resistance of its electrolyte and electrodes). The voltage you can actually measure between its two terminals is the **terminal voltage**:

$$V_{\\text{term}} = \\varepsilon - Ir$$

Because $r$ sits in series with the external load $R$, the same current flows through both:

$$I = \\frac{\\varepsilon}{R + r}$$

- **Open circuit** ($I = 0$): nothing flows, nothing is lost inside, so $V_{\\text{term}} = \\varepsilon$. This is why an ideal voltmeter across an unloaded battery reads the EMF.
- **Under load**: the terminal voltage **sags** below $\\varepsilon$ by $Ir$; more current, more sag. Headlights dim while a car's starter cranks because the starter draws hundreds of amps through $r$.
- **Short circuit** ($R = 0$): the current peaks at $I_{\\max} = \\varepsilon / r$ and $V_{\\text{term}} = 0$. All of the battery's power is wasted as heat inside it.
- **Being charged**: a charger forces current backward into the positive terminal, so the internal drop adds: $V_{\\text{term}} = \\varepsilon + Ir$. A charger must supply MORE than the EMF.

Energy bookkeeping: the chemistry supplies power $\\varepsilon I$; the internal resistance wastes $I^2 r$; the load receives $I^2 R = V_{\\text{term}} I$.

An aging battery often still shows its full EMF on a voltmeter, because the test draws almost no current. What has changed is its internal resistance, which rises with age, so the battery sags badly the moment a real load is attached.`
    },
    {
      id: 'ec1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice — EMF and Terminal Voltage** 🎯`,
      exercise: {
        questions: [
          {
            question: `A battery with EMF $6.0\\;\\text{V}$ and internal resistance $0.50\\;\\Omega$ drives a current of $2.0\\;\\text{A}$ through an external resistor. What is the battery's terminal voltage?`,
            options: [`$6.0\\;\\text{V}$`, `$5.0\\;\\text{V}$`, `$7.0\\;\\text{V}$`, `$5.5\\;\\text{V}$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The internal drop is $Ir = (2.0)(0.50) = 1.0\\;\\text{V}$, so $V_{\\text{term}} = 6.0 - 1.0 = 5.0\\;\\text{V}$. Reading $7.0\\;\\text{V}$ uses the charging sign ($\\varepsilon + Ir$), but this battery is discharging; $6.0\\;\\text{V}$ ignores the internal resistance entirely.`
          },
          {
            question: `A voltmeter across a flashlight cell reads $1.58\\;\\text{V}$ with the switch open and $1.42\\;\\text{V}$ with the bulb lit. Which statement best explains the difference?`,
            options: [`The bulb uses up charge, so less charge is left to set the voltage`, `The cell's EMF drops whenever any current is drawn from the cell`, `Current through the cell's internal resistance drops voltage inside it`, `The voltmeter draws extra current from the cell once the bulb is lit`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `With the bulb lit, current flows through the internal resistance, and the drop $Ir$ is subtracted from the EMF before it reaches the terminals. The EMF itself is set by the chemistry and stays about $1.58\\;\\text{V}$. Charge is not used up in a circuit: it flows around the loop, and only energy is converted in the bulb.`
          },
          {
            question: `A phone battery with EMF $3.7\\;\\text{V}$ and internal resistance $0.10\\;\\Omega$ is being recharged with a current of $2.0\\;\\text{A}$. What terminal voltage must the charger maintain?`,
            options: [`$3.9\\;\\text{V}$`, `$3.5\\;\\text{V}$`, `$3.7\\;\\text{V}$`, `$4.1\\;\\text{V}$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `During charging, current is forced backward through the battery, so the charger must overcome both the EMF and the internal drop: $V_{\\text{term}} = \\varepsilon + Ir = 3.7 + (2.0)(0.10) = 3.9\\;\\text{V}$. The value $3.5\\;\\text{V}$ uses the discharging sign; $4.1\\;\\text{V}$ doubles the internal drop.`
          }
        ]
      }
    },
    {
      id: 'ec1-meters',
      type: 'text' as const,
      content: `### Batteries in Series and Parallel

**Series** (positive terminal of one cell to negative terminal of the next):

- EMFs add: four $1.5\\;\\text{V}$ cells make $6.0\\;\\text{V}$.
- Internal resistances add too, so a series stack sags more per amp.
- A cell inserted backward SUBTRACTS its EMF. Four cells with one reversed give $1.5 + 1.5 + 1.5 - 1.5 = 3.0\\;\\text{V}$, not $4.5\\;\\text{V}$.

**Parallel** (identical cells, all positive terminals joined):

- The EMF stays the same as one cell: two $1.5\\;\\text{V}$ cells in parallel still give $1.5\\;\\text{V}$.
- The internal resistances are in parallel, so the pack's internal resistance drops ($r/2$ for two cells). The pack sags less under load and, holding more total charge, lasts longer.

Rule of thumb: series for more voltage, parallel for more current capacity at the same voltage.

**Capacity:** a battery's rating in milliamp-hours (mAh) is a quantity of CHARGE, because $Q = It$. A $1000\\;\\text{mAh}$ cell can deliver $1.0\\;\\text{A}$ for one hour: $Q = (1.0\\;\\text{A})(3600\\;\\text{s}) = 3600\\;\\text{C}$. The energy it holds is roughly $QV$: at $3.7\\;\\text{V}$, about $1.3 \\times 10^4\\;\\text{J}$.

### Meters

- **Ammeter** measures current. It must carry the current it measures, so it goes **in series** with the element. An ideal ammeter has **~0 Ω** resistance, so inserting it does not change the current.
- **Voltmeter** measures potential difference between two points, so it connects **in parallel** across the element. An ideal voltmeter has **~∞ Ω** resistance, so it draws essentially no current and does not disturb the circuit.

What goes wrong when they are swapped:

- **Ammeter wired in parallel** across an element: its near-zero resistance is a short circuit. Almost all the current detours through the meter, the element goes dark (nearly $0\\;\\text{V}$ across it, because the drop moves to the battery's internal resistance and anything else in series), and the surge can blow the meter's fuse.
- **Voltmeter wired in series**: its enormous resistance chokes the current to nearly zero. Every other element goes dark, and the meter reads nearly the full EMF, because almost the whole drop is now across the meter itself.

Real meters are not ideal: a voltmeter's finite resistance in parallel slightly lowers the combined resistance, so it reads a little low; an ammeter's small series resistance slightly lowers the current it is measuring.


<!-- yield:low -->
- An ohmmeter supplies its own small test current and reads $R = V/I$, so it must be used on a component that is unpowered and disconnected from the rest of the circuit.
<!-- /yield -->



### Where EMF Comes From

A battery is one or more **galvanic cells**. The cell's EMF is the cell potential from electrochemistry ($E^\\circ_{\\text{cell}}$ under standard conditions), set by the redox reaction through $\\Delta G = -nFE$, where $n$ is the moles of electrons transferred and $F$ is Faraday's constant (the charge on one mole of electrons).

The battery's positive terminal is the **cathode**. The Electrochemistry topic covers that chemistry; here we treat the result as a circuit element.`
    },
    {
      id: 'ec1-worked',
      type: 'text' as const,
      content: `### Worked Example — Measuring a Battery's Internal Resistance

**Problem 1.** A voltmeter across a battery reads $9.0\\;\\text{V}$ with nothing else attached. With a $4.0\\;\\Omega$ resistor connected across the terminals, the voltmeter reads $8.0\\;\\text{V}$.

- **(a)** What is the battery's EMF?
- **(b)** What current flows through the resistor?
- **(c)** What is the battery's internal resistance?
- **(d)** How much power does the chemistry supply, and where does it go?

**(a) EMF.** With no load, $I \\approx 0$ (an ideal voltmeter draws no current), so the reading IS the EMF: $\\varepsilon = 9.0\\;\\text{V}$.

**(b) Current.** With the resistor attached, the terminal voltage sits directly across the $4.0\\;\\Omega$ resistor:

$$I = \\frac{V_{\\text{term}}}{R} = \\frac{8.0}{4.0} = 2.0\\;\\text{A}$$

**(c) Internal resistance.** With $I = 2.0\\;\\text{A}$ from (b), the missing $1.0\\;\\text{V}$ was dropped inside the battery:

$$r = \\frac{\\varepsilon - V_{\\text{term}}}{I} = \\frac{9.0 - 8.0}{2.0} = 0.50\\;\\Omega$$

Check with the loop: $I = \\varepsilon / (R + r) = 9.0 / 4.5 = 2.0\\;\\text{A}$. ✓ The pattern: the open-circuit reading gives $\\varepsilon$; any loaded reading plus the current gives $r$.

**(d) Power accounting.** With $I = 2.0\\;\\text{A}$ and $r = 0.50\\;\\Omega$:

- Supplied by the chemistry: $\\varepsilon I = (9.0)(2.0) = 18\\;\\text{W}$
- Delivered to the resistor: $I^2 R = (4.0)(4.0) = 16\\;\\text{W}$
- Wasted inside the battery: $I^2 r = (4.0)(0.50) = 2.0\\;\\text{W}$, and $16 + 2 = 18\\;\\text{W}$: the books balance.

**Problem 2.** The same battery ($\\varepsilon = 9.0\\;\\text{V}$, $r = 0.50\\;\\Omega$) is pushed to two extremes.

- **(a)** If a wire shorts its terminals, how much current flows?
- **(b)** What charger voltage would recharge it at $2.0\\;\\text{A}$?

**(a) Short circuit.** Shorting the terminals would draw $I_{\\max} = \\varepsilon / r = 9.0 / 0.50 = 18\\;\\text{A}$, all of it heating the battery.

**(b) Charger voltage.** Charging current is forced backward through the battery, so the internal drop adds to the EMF: $\\varepsilon + Ir = 9.0 + 1.0 = 10\\;\\text{V}$.`
    },
    {
      id: 'ec1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Batteries, Meters & Real Cells** 🎯`,
      exercise: {
        questions: [
          {
            question: `A flashlight holds four $1.5\\;\\text{V}$ cells in series, but one cell has been inserted backward. Neglecting internal resistance, what is the total EMF of the stack?`,
            options: [`$4.5\\;\\text{V}$`, `$6.0\\;\\text{V}$`, `$1.5\\;\\text{V}$`, `$3.0\\;\\text{V}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `A reversed cell pushes against the others, so its EMF subtracts: $1.5 + 1.5 + 1.5 - 1.5 = 3.0\\;\\text{V}$. Simply dropping the reversed cell gives $4.5\\;\\text{V}$, which misses that it actively opposes the other three rather than just contributing nothing.`
          },
          {
            question: `A student trying to measure the current through a lamp connects an ammeter in parallel across the lamp instead of in series with it. What is the most likely result?`,
            options: [`The lamp brightens because the meter adds a second current path`, `The current nearly stops because the meter blocks the circuit`, `The meter reads the lamp's current, but slightly low`, `The lamp goes dark as a large current bypasses it through the meter`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `An ammeter has nearly zero resistance, so in parallel it shorts out the lamp: almost all the current takes the meter path, the lamp's voltage falls to nearly zero (the drop moves to the battery's internal resistance and any other series resistance), and the large current may blow the meter's fuse. Choking the current to nearly zero is what a high-resistance VOLTMETER does when it is wrongly placed in series.`
          },
          {
            question: `A voltmeter is accidentally connected in series with a $100\\;\\Omega$ resistor across a $9.0\\;\\text{V}$ battery of negligible internal resistance. What does the voltmeter read?`,
            options: [`About $9.0\\;\\text{V}$`, `About $0\\;\\text{V}$`, `About $4.5\\;\\text{V}$`, `About $18\\;\\text{V}$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The voltmeter's resistance is enormous compared with $100\\;\\Omega$, so it takes almost the entire loop voltage: the current is nearly zero, the resistor drops almost nothing ($IR \\approx 0$), and the meter reads about $9.0\\;\\text{V}$. Reading zero assumes no current means no voltage, but the meter measures the potential difference across itself, and that equals nearly the full EMF.`
          },
          {
            question: `A hearing aid ($4.0\\;\\Omega$) runs on a $1.5\\;\\text{V}$ cell. When fresh, the cell's internal resistance is $1.0\\;\\Omega$; after months of use, its EMF is still $1.5\\;\\text{V}$, but its internal resistance has risen to $6.0\\;\\Omega$. What terminal voltage does the old cell deliver to the device?`,
            options: [`$0.9\\;\\text{V}$`, `$1.2\\;\\text{V}$`, `$0.6\\;\\text{V}$`, `$1.5\\;\\text{V}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Old cell: $I = 1.5/(4.0 + 6.0) = 0.15\\;\\text{A}$, so $V_{\\text{term}} = IR = (0.15)(4.0) = 0.6\\;\\text{V}$ (equivalently $1.5 - (0.15)(6.0) = 0.6\\;\\text{V}$). $0.9\\;\\text{V}$ is the drop INSIDE the cell ($Ir = (0.15)(6.0)$), not the voltage delivered. $1.2\\;\\text{V}$ is the fresh cell's value. $1.5\\;\\text{V}$ is what an open-circuit voltmeter test would show, which is exactly why such a test can pass a cell that fails under load.`
          }
        ]
      }
    },
    {
      id: 'ec1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **EMF vs. terminal voltage.** EMF is work per coulomb; under load $V_{\\text{term}} = \\varepsilon - Ir$, with $I = \\varepsilon/(R + r)$.
- **Charging and shorting.** A charger must supply $\\varepsilon + Ir$; a short draws $I_{\\max} = \\varepsilon/r$ and heats the battery.
- **Cells in series or parallel.** Series cells add EMFs and internal resistances; identical parallel cells keep the EMF, lower $r$.
- **Ideal meters.** An ammeter goes in series with ~0 Ω; a voltmeter goes in parallel with ~∞ Ω.

**Common traps**

- **A fixed battery voltage.** The label gives the EMF; under load the terminal voltage sags by $Ir$.
- **The charging sign.** A battery being charged has $V_{\\text{term}} = \\varepsilon + Ir$, not $\\varepsilon - Ir$.
- **Swapped meters.** An ammeter in parallel shorts the element; a voltmeter in series stops the current and reads about the EMF.
- **The unloaded voltmeter test.** A worn cell still reads its full EMF with no load; its high $r$ shows only under load.

<!-- yield:low -->
- Low-yield extras: an ohmmeter supplies its own test current, so it is used only on an unpowered, isolated component
<!-- /yield -->`
    }
  ]
}
