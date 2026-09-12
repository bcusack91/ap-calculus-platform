import type { LessonData } from './registry'

export const circuitsMcatPart2: LessonData = {
  topicSlug: 'mcat-physics-electricity-circuits-mcat',
  sections: [
    {
      id: 'ci2-intro',
      type: 'text' as const,
      content: `# Circuits

**Part 2 of 4 — Power, EMF & Real Batteries**

### Electrical Power

Power is the rate at which electrical energy is converted to heat, light, or work:

$P = IV = I^2R = \\frac{V^2}{R}$

All three forms are the same law combined with $V = IR$ — pick the one whose two variables you actually know.

- $P = I^2R$ is the natural form for SERIES elements (same $I$): more resistance means more power.
- $P = V^2/R$ is the natural form for PARALLEL elements (same $V$): LESS resistance means more power.

The same physical resistor obeys both — the difference is which quantity the circuit holds fixed for it.

### Energy and the Kilowatt-Hour

$E = Pt$. Utilities bill in kilowatt-hours: $1\\;\\text{kWh} = (1000\\;\\text{W})(3600\\;\\text{s}) = 3.6 \\times 10^6\\;\\text{J}$.

### EMF vs. Terminal Voltage

A real battery is an ideal EMF source $\\varepsilon$ in series with a small **internal resistance** $r$. When the battery drives current $I$:

$V_{terminal} = \\varepsilon - Ir$

- **No current drawn** (open circuit, or an ideal voltmeter): $V_{terminal} = \\varepsilon$.
- **Discharging**: terminal voltage sags BELOW the EMF, and it sags more at higher current — why headlights dim while the starter motor cranks.
- **Being recharged** (current forced backward through it): $V_{terminal} = \\varepsilon + Ir$, ABOVE the EMF.

Maximum possible current (a short circuit, $R_{ext} = 0$): $I_{max} = \\varepsilon/r$.

### Batteries in Series and Parallel

- **Series** (plus to minus): EMFs add — two $1.5\\;\\text{V}$ cells make $3.0\\;\\text{V}$. Internal resistances add too.
- **Parallel** (identical cells): EMF stays the same, but the pack can supply more current and lasts longer; internal resistance drops.

### Meters

- **Ammeter**: measures current, wired IN SERIES, built with very LOW resistance so it does not impede the current it measures.
- **Voltmeter**: measures potential difference, wired IN PARALLEL across an element, built with very HIGH resistance so it steals negligible current.

Swapping them is catastrophic: an ammeter in parallel is a short circuit.`
    },
    {
      id: 'ci2-worked',
      type: 'text' as const,
      content: `### Worked Example — A Real Battery Under Load

A battery with EMF $\\varepsilon = 12\\;\\text{V}$ and internal resistance $r = 0.5\\;\\Omega$ is connected to a $5.5\\;\\Omega$ resistor.

**Step 1 — Current.** Internal and external resistance are in series:

$I = \\frac{\\varepsilon}{R + r} = \\frac{12}{5.5 + 0.5} = 2.0\\;\\text{A}$

**Step 2 — Terminal voltage.**

$V_{terminal} = \\varepsilon - Ir = 12 - (2.0)(0.5) = 11\\;\\text{V}$

**Step 3 — Power accounting.**

- Delivered to the load: $P_R = I^2R = (4)(5.5) = 22\\;\\text{W}$
- Wasted inside the battery: $P_r = I^2r = (4)(0.5) = 2\\;\\text{W}$
- Total supplied: $P = \\varepsilon I = (12)(2.0) = 24\\;\\text{W}$ — the books balance.

### Worked Example — Which Bulb Is Brighter?

A $60\\;\\text{W}$ bulb and a $100\\;\\text{W}$ bulb (ratings at $120\\;\\text{V}$) are wired IN SERIES across an outlet. Which glows brighter?

**Step 1 — Compare resistances from the ratings.** At rated voltage $P = V^2/R$, so $R = V^2/P$. The $60\\;\\text{W}$ bulb has the LARGER resistance (smaller rated power, same rated voltage).

**Step 2 — Series means same current.** In series, $P = I^2R$: the larger resistance dissipates more power.

**Conclusion:** the $60\\;\\text{W}$ bulb is brighter in series — the reverse of the parallel (normal household) case. Ratings assume parallel wiring; the circuit decides what is held constant.`
    },
    {
      id: 'ci2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Power, EMF & Real Batteries** 🎯`,
      exercise: {
        questions: [
          {
            question: `A $12\\;\\Omega$ resistor carries a current of $2.0\\;\\text{A}$. The power it dissipates is:`,
            options: [`$24\\;\\text{W}$`, `$6\\;\\text{W}$`, `$48\\;\\text{W}$`, `$96\\;\\text{W}$`],
            correctAnswer: 2,
            explanation: `$P = I^2R = (2.0)^2(12) = 48\\;\\text{W}$. Choosing $24\\;\\text{W}$ comes from $P = IV$ with $V = 12$ — but $12\\;\\Omega$ is a resistance, not a voltage; the drop is $V = IR = 24\\;\\text{V}$.`
          },
          {
            question: `A battery has EMF $9.0\\;\\text{V}$ and internal resistance $1.0\\;\\Omega$. When it drives current through an $8.0\\;\\Omega$ resistor, its terminal voltage is:`,
            options: [`$8.0\\;\\text{V}$`, `$9.0\\;\\text{V}$`, `$1.0\\;\\text{V}$`, `$7.2\\;\\text{V}$`],
            correctAnswer: 0,
            explanation: `$I = 9.0/(8.0 + 1.0) = 1.0\\;\\text{A}$, so $V_{terminal} = \\varepsilon - Ir = 9.0 - (1.0)(1.0) = 8.0\\;\\text{V}$ — equal to the drop across the external resistor, as it must be.`
          },
          {
            question: `Two identical $1.5\\;\\text{V}$ cells are connected in series (plus to minus). The EMF of the combination is:`,
            options: [`$1.5\\;\\text{V}$`, `$0.75\\;\\text{V}$`, `$2.25\\;\\text{V}$`, `$3.0\\;\\text{V}$`],
            correctAnswer: 3,
            explanation: `Series EMFs add: $1.5 + 1.5 = 3.0\\;\\text{V}$. (In parallel the EMF would stay $1.5\\;\\text{V}$ but the pack could deliver more total current.)`
          },
          {
            question: `An ideal voltmeter has:`,
            options: [`Very low resistance and is wired in series`, `Very high resistance and is wired in parallel`, `Very low resistance and is wired in parallel`, `Very high resistance and is wired in series`],
            correctAnswer: 1,
            explanation: `A voltmeter compares potential at two points, so it sits in parallel across the element; its huge resistance ensures it draws almost no current. (Low resistance + series describes an ammeter.)`
          },
          {
            question: `A heater is plugged into a fixed-voltage outlet. If its resistance were halved, the power it draws would:`,
            options: [`Halve`, `Drop to one quarter`, `Double`, `Quadruple`],
            correctAnswer: 2,
            explanation: `The outlet fixes $V$, so use $P = V^2/R$: halving $R$ doubles $P$. ($P = I^2R$ misleads here because $I$ does not stay constant — it doubles.)`
          }
        ]
      }
    },
    {
      id: 'ci2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- $P = IV = I^2R = V^2/R$; use $I^2R$ for series comparisons, $V^2/R$ for parallel
- $1\\;\\text{kWh} = 3.6 \\times 10^6\\;\\text{J}$ of energy, not power
- Real battery: $V_{terminal} = \\varepsilon - Ir$ discharging, $\\varepsilon + Ir$ charging, $= \\varepsilon$ at zero current
- Series cells: EMFs add; parallel identical cells: same EMF, more available current
- Ammeter: low $R$, in series. Voltmeter: high $R$, in parallel`
    }
  ]
};
