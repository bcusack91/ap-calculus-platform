import type { LessonData } from './registry'

export const dcCircuitsMcatPart4: LessonData = {
  topicSlug: 'mcat-physics-electricity-dc-circuits-mcat',
  sections: [
    {
      id: 'dc4-intro',
      type: 'text' as const,
      content: `# Circuits Part 1: Current & Resistance

**Part 4 of 4 — Circuit Changes, Power & Bulb Brightness**

### What Changes When the Circuit Changes

Part 3 of this lesson collapsed networks that stay put. Now predict how a network responds when something changes. Reason in a fixed order: the change, then $R_{eq}$, then the total current, then the voltage across any fixed series resistor, then whatever voltage is left for the parallel part.

- **Add a branch in parallel:** $R_{eq}$ falls and the total current rises. If the bank sits directly across an ideal source, the existing branches are unaffected. If a series resistor sits in front of the bank, the larger total current drops MORE voltage across that resistor, leaving LESS for the bank, so the existing branch currents FALL.
- **Remove (open) a branch:** the reverse. $R_{eq}$ rises, the total current falls, the series resistor drops less voltage, and the remaining branches get MORE voltage and more current.
- **Short one branch of a parallel bank:** that zero-resistance branch shorts the WHOLE bank, because every branch shares the same two nodes; all of them now have $0\\;\\text{V}$ across them and carry no current.
- **Short a resistor:** its voltage and current drop to zero, $R_{eq}$ falls, and everything left in series with it carries more current.
- **Add a resistor in series:** $R_{eq}$ rises and the current through every element in that path falls.

Bulbs, later in this part, follow exactly the same logic: a brighter bulb is simply one dissipating more power.

### Electrical Power

Each coulomb that moves through a potential drop $\\Delta V$ gives up energy $q\\Delta V$, and the current $I$ is the number of coulombs per second. So the power delivered to an element (energy per time) is:

$$P = IV = I^2R = \\frac{V^2}{R}$$

measured in watts: $1\\;\\text{W} = 1\\;\\text{J/s} = 1\\;\\text{V} \\cdot \\text{A}$. All three forms are the same law combined with $V = IR$. **Choose the form that matches what the circuit holds constant:**

- **Same current** (elements in series): use $P = I^2R$. The LARGER resistance dissipates more power.
- **Same voltage** (parallel branches, anything plugged into an outlet): use $P = V^2/R$. The SMALLER resistance dissipates more power.
- The same physical resistor obeys both forms. The apparent paradox, "does more resistance mean more power or less?", disappears once you ask which quantity is fixed.

**Proportional reasoning.** At fixed $R$, doubling the current quadruples the heating ($P \\propto I^2$). At fixed $V$, halving $R$ DOUBLES the power, because the current doubles too; plugging into $I^2R$ while wrongly holding $I$ fixed would predict that power halves.

**Energy bookkeeping.** For an ideal source, the power it delivers, $V_{source} I_{total}$, equals the sum of the powers dissipated in all the resistors. Energy in equals energy out.

### Energy, the Kilowatt-Hour and Joule Heating

Energy is power multiplied by time: $E = Pt$. Utilities bill in kilowatt-hours, a unit of ENERGY, not power:

$$1\\;\\text{kWh} = (1000\\;\\text{W})(3600\\;\\text{s}) = 3.6 \\times 10^6\\;\\text{J}$$

**Joule heating.** In a resistor, all the electrical energy becomes thermal energy at the rate $P = I^2R$. That is the working principle of heaters, toasters and incandescent filaments, and the reason wires warm under load. It also explains high-voltage power lines: delivering the same power $P = IV$ at a higher voltage needs a smaller current, and the line's heating loss, $I^2R_{line}$, falls with the square of that current.`
    },
    {
      id: 'dc4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice: Changing Circuits, Power & Energy** 🎯`,
      exercise: {
        questions: [
          {
            question: `An ideal battery drives current through a resistor $R_s$, which then feeds two identical resistors in parallel. A third identical resistor is added in parallel with those two. The current through each of the original parallel resistors:`,
            options: [`Stays the same, because parallel branches are independent`, `Increases, because the battery now supplies more current`, `Decreases, because more voltage now drops across $R_s$`, `Decreases, because the battery now supplies less current`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Adding a branch lowers $R_{eq}$, so the battery current rises; more current through $R_s$ means a larger drop across it and less voltage left for the bank, so each original branch carries less. Branches are independent only when they sit directly across the source. The total current goes up, not down.`
          },
          {
            question: `A $1200\\;\\text{W}$ hair dryer operates from a $120\\;\\text{V}$ outlet. Its current and its resistance while running are:`,
            options: [`$0.1\\;\\text{A}$ and $1200\\;\\Omega$`, `$10\\;\\text{A}$ and $120\\;\\Omega$`, `$10\\;\\text{A}$ and $12\\;\\Omega$`, `$12\\;\\text{A}$ and $10\\;\\Omega$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$I = P/V = 1200/120 = 10\\;\\text{A}$, and $R = V/I = 120/10 = 12\\;\\Omega$; check with $V^2/R = 14{,}400/12 = 1200\\;\\text{W}$. Dividing $P$ by $I$ gives $120\\;\\Omega$, which is the voltage, not the resistance; $0.1\\;\\text{A}$ comes from dividing $V$ by $P$.`
          },
          {
            question: `A fluid warmer for an IV line plugs into a fixed-voltage outlet. If its heating element were replaced by one with half the resistance, the power it draws would:`,
            options: [`Drop by half`, `Double`, `Quadruple`, `Fall to one-quarter`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `The outlet fixes $V$, so use $P = V^2/R$: halving $R$ doubles $P$. Applying $P = I^2R$ while holding $I$ constant predicts halving, but the current does not stay constant; it doubles too.`
          },
          {
            question: `A $2000\\;\\text{W}$ space heater runs for $5$ hours, and electricity costs 15 cents per kilowatt-hour. The cost of running it is about:`,
            options: [`1.50 dollars`, `1500 dollars`, `90 dollars`, `0.06 dollars`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Energy is $E = Pt = (2.0\\;\\text{kW})(5\\;\\text{h}) = 10\\;\\text{kWh}$ (that is $3.6 \\times 10^7\\;\\text{J}$), and $10 \\times 15$ cents is 150 cents. 1500 dollars treats the $2000\\;\\text{W}$ as kilowatts; 90 dollars converts the hours to minutes ($2 \\times 300 = 600\\;\\text{kWh}$). 0.06 dollars divides power by time instead of multiplying.`
          },
          {
            question: `Resistors of $2\\;\\Omega$, $4\\;\\Omega$ and $8\\;\\Omega$ are each connected directly across the same ideal battery, in parallel. Rank the power they dissipate, greatest first.`,
            options: [`$8\\;\\Omega$, then $4\\;\\Omega$, then $2\\;\\Omega$`, `Equal, since each has the same voltage`, `Equal, since each carries the same current`, `$2\\;\\Omega$, then $4\\;\\Omega$, then $8\\;\\Omega$`],
            correctAnswer: 3,
            yield: 'ULTRA_HIGH',
            explanation: `In parallel every resistor has the same voltage, so $P = V^2/R$ and the smallest resistance dissipates the most. The reverse ranking would be correct in SERIES, where the shared current makes $P = I^2R$ favour the largest resistance. Equal voltage does not mean equal power when the resistances differ.`
          }
        ]
      }
    },
    {
      id: 'dc4-bulbs',
      type: 'text' as const,
      content: `### Bulb Brightness in Series and Parallel

Brightness tracks the POWER a bulb dissipates. Unless told otherwise, treat bulbs as ohmic resistors (an MCAT simplification; real filaments are non-ohmic, as Part 2 of this lesson noted). For identical bulbs of resistance $R$ on an ideal source $V$, call one bulb's power alone $P_0 = V^2/R$:

| Arrangement | Voltage per bulb | Power per bulb | Total power |
|---|---|---|---|
| one bulb | $V$ | $P_0$ | $P_0$ |
| $n$ in series | $V/n$ | $P_0/n^2$ | $P_0/n$ |
| $n$ in parallel | $V$ | $P_0$ | $nP_0$ |

Two identical bulbs in series each glow at one-QUARTER of their solo power; in parallel each glows at full power.

**Different bulbs.** A rating such as "60 W at 120 V" gives the resistance: $R = V^2/P$, so a LOWER wattage rating means a HIGHER resistance. In parallel (normal household use) each bulb gets its rated voltage and the 100 W bulb is brighter. In series the order SWAPS, because the shared current makes the higher-resistance bulb dissipate more.

### When a Bulb Burns Out or One Is Added

A burned-out bulb is an open circuit.

- **Series string:** one bulb burns out and they ALL go dark.
- **Parallel bank across an ideal source:** the others are unaffected; the source just supplies less total current.
- **Mixed circuit** (bulb A in series with a parallel pair B and C): if C burns out, $R_{eq}$ rises, the total current falls, and A DIMS. With less voltage across A, more is left for B, so B BRIGHTENS.
- **Adding a bulb in series** dims every bulb in that path. **Adding one in parallel** directly across the source leaves the others unchanged but raises the total power drawn.

**Household wiring is parallel.** Every outlet gets the full line voltage, and appliances run independently. Each appliance switched on adds a branch, lowering $R_{eq}$ and raising the total current in the supply wire. A fuse or circuit breaker, in SERIES with that branch circuit, opens when the total current gets too large, which is why too many appliances on one circuit "trips the breaker".

### Electricity and the Body

**Current, not voltage, does the harm.** What disrupts nerve and heart tissue, and heats it, is the current through it, $I = V/R_{body}$. Voltage matters only because it drives that current. Most of the body's resistance is in dry skin; the interior is salty, ionic fluid and conducts well (Part 1 of this lesson).

- Dry skin gives a body path on the order of $10^5\\;\\Omega$; wet or broken skin drops it to the order of $10^3\\;\\Omega$. At the same voltage, wet skin can pass about $100$ times the current.
- The path matters: hand-to-hand or hand-to-foot current crosses the chest and can disrupt the heart's rhythm.
- A static spark can be thousands of volts yet harmless, because it delivers very little charge; a modest voltage across wet skin can be lethal.

<!-- yield:low -->
- Approximate body-current thresholds: about $1\\;\\text{mA}$ is perceptible, roughly $10$ to $20\\;\\text{mA}$ prevents letting go, and about $100\\;\\text{mA}$ across the chest can trigger ventricular fibrillation. The values vary with path, duration and frequency, and passages supply them.
<!-- /yield -->

### MCAT Integration — Rank Without Computing

Passage questions reward ratios over arithmetic:

1. **Find what is held constant** for each element: current in series, voltage in parallel.
2. **Pick the power form** containing that constant and compare with the remaining variable.
3. **Multiply factor changes.** If $V$ triples and $R$ doubles, $P = V^2/R$ changes by $3^2/2 = 9/2$.
4. **Sanity-check the extremes.** A short ($R \\to 0$) across a fixed voltage draws enormous power; an open branch ($R \\to \\infty$) draws none.

Most "which element dissipates the most power" questions fall to steps 1 and 2 in ten seconds.`
    },
    {
      id: 'dc4-worked',
      type: 'text' as const,
      content: `### Worked Example — Which Bulb Is Brighter, and How Big Is the Shock?

**A — Rated bulbs in series.** A $60\\;\\text{W}$ bulb and a $100\\;\\text{W}$ bulb, both rated at $120\\;\\text{V}$, are wired in series across a $120\\;\\text{V}$ outlet. Which glows brighter?

- **Resistances from the ratings:** $R_{60} = \\dfrac{120^2}{60} = \\dfrac{14{,}400}{60} = 240\\;\\Omega$ and $R_{100} = \\dfrac{14{,}400}{100} = 144\\;\\Omega$.
- **Series means the same current**, so $P = I^2R$ and $P \\propto R$: $\\dfrac{P_{60}}{P_{100}} = \\dfrac{240}{144} = \\dfrac{5}{3}$.
- **Conclusion:** the 60 W bulb is brighter, the reverse of the normal parallel case. Both glow well below their ratings, because each gets less than $120\\;\\text{V}$.

**B — A shock through dry and wet skin.** A person grips a $120\\;\\text{V}$ conductor with one hand while touching a grounded pipe with the other.

- **Dry skin,** body path $1 \\times 10^5\\;\\Omega$: $I = \\dfrac{120}{10^5} = 1.2 \\times 10^{-3}\\;\\text{A} = 1.2\\;\\text{mA}$, a tingle.
- **Wet skin,** body path $1 \\times 10^3\\;\\Omega$: $I = \\dfrac{120}{10^3} = 0.12\\;\\text{A} = 120\\;\\text{mA}$, a hundred times larger.
- **Heating in the body:** $P = V^2/R$ gives $0.144\\;\\text{W}$ dry but $14.4\\;\\text{W}$ wet. Same voltage, $100$ times the current and $100$ times the power.
- A passage that gives a fibrillation threshold near $0.1\\;\\text{A}$ would flag the wet case as potentially lethal: the voltage never changed, only the resistance.`
    },
    {
      id: 'dc4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Practice: Brightness, Safety & Ratios** 🎯`,
      exercise: {
        questions: [
          {
            question: `Two identical bulbs are connected to the same ideal battery, first in series and then in parallel. The power of ONE bulb in the parallel arrangement is how many times its power in the series arrangement?`,
            options: [`$2$`, `$4$`, `$1/2$`, `$1/4$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `In series each bulb gets $V/2$, so its power is $(V/2)^2/R = P_0/4$; in parallel each gets the full $V$ and dissipates $P_0$. The ratio is $4$. Answering $2$ halves the power along with the voltage, forgetting that power goes as $V^2$.`
          },
          {
            question: `Identical bulb A is in series with a parallel pair of identical bulbs B and C, all across an ideal battery. Bulb C burns out. What happens to bulbs A and B?`,
            options: [`A brightens while B dims`, `A goes dark and B brightens`, `A dims and B brightens`, `A and B both stay the same`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Losing C raises $R_{eq}$ from $1.5R$ to $2R$, so the total current falls and A dims. A now takes half the battery voltage instead of two-thirds, so B gets more voltage (half instead of one-third) and brightens. A stays lit, because its path through B is still complete.`
          },
          {
            question: `A passage states that a hand-to-hand body path has a resistance of about $1 \\times 10^5\\;\\Omega$ with dry skin and $1 \\times 10^3\\;\\Omega$ with wet skin, and that currents above roughly $0.1\\;\\text{A}$ across the chest can trigger fibrillation. A worker with wet hands grips a $120\\;\\text{V}$ conductor with one hand and a grounded pipe with the other. Which is correct?`,
            options: [`About 0.12 A flows, 100 times the dry-skin current`, `About 1.2 mA flows, the same as with dry skin`, `About 12 A flows, since wet skin acts as a wire`, `About 0.12 mA flows, too little to be harmful`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `$I = V/R = 120/10^3 = 0.12\\;\\text{A}$, above the stated threshold and 100 times the dry-skin value of $1.2\\;\\text{mA}$. Assuming the dry-skin current ignores that $I = V/R$ rises when $R$ falls. Wet skin lowers resistance but is nowhere near a zero-resistance wire.`
          },
          {
            question: `In an experiment on a warming blanket, the voltage across its heating element is tripled and the element is replaced with one of twice the resistance. The power dissipated changes by a factor of:`,
            options: [`$3/2$`, `$18$`, `$6$`, `$9/2$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Both $V$ and $R$ are specified, so use $P = V^2/R$: the factor is $3^2/2 = 9/2$. The value $3/2$ forgets to square the voltage, and $18$ multiplies by the resistance factor instead of dividing.`
          }
        ]
      }
    },
    {
      id: 'dc4-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- When a circuit changes, reason in order: $R_{eq}$, total current, the drop across any series resistor, then what is left for the parallel bank; shorting one branch of a bank shorts the whole bank
- $P = IV = I^2R = V^2/R$: use $I^2R$ when current is shared (series, larger $R$ wins) and $V^2/R$ when voltage is shared (parallel, smaller $R$ wins)
- Energy $E = Pt$; $1\\;\\text{kWh} = 3.6 \\times 10^6\\;\\text{J}$ is energy, not power
- Joule heating converts all of a resistor's electrical energy to heat; high-voltage transmission cuts $I^2R$ losses
- Brightness = power. $n$ identical bulbs in series each get $P_0/n^2$; in parallel each gets $P_0$
- Lower wattage rating means higher resistance; rated bulbs swap brightness order in series
- Series burnout darkens everything; parallel burnout across an ideal source changes nothing else; in mixed circuits, track $R_{eq}$, then total current, then the voltage split
- Household wiring is parallel; breakers sit in series and trip on total current
- Current through the body does the harm: wet skin can pass about 100 times the current at the same voltage
- Rank without computing: identify the constant, pick the form, multiply factors

**Common traps**

- Assuming parallel branches never change (true only directly across an ideal source)
- Using $I^2R$ at fixed voltage while holding $I$ constant
- Calling the kilowatt-hour a unit of power
- Assuming the higher-wattage bulb is brighter in every circuit
- Saying voltage, rather than current, causes shock injury

<!-- yield:low -->
- Low-yield extras: specific body-current thresholds (perception, let-go, fibrillation).
<!-- /yield -->

**Next up:** the *Circuits Part 2: EMF & Capacitors* lesson — real batteries with internal resistance, meters, capacitors and dielectrics, RC behaviour, and the membrane as a circuit.`
    }
  ]
}
