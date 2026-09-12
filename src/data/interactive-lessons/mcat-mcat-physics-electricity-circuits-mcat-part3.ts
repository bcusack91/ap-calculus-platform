import type { LessonData } from './registry'

export const circuitsMcatPart3: LessonData = {
  topicSlug: 'mcat-physics-electricity-circuits-mcat',
  sections: [
    {
      id: 'ci3-intro',
      type: 'text' as const,
      content: `# Circuits

**Part 3 of 4 — Capacitors & Dielectrics**

### Capacitance

A capacitor stores separated charge. Its capacitance is the charge stored per volt:

$C = \\frac{Q}{V}$

in farads ($1\\;\\text{F} = 1\\;\\text{C/V}$). Real capacitors are microfarads ($10^{-6}$) to picofarads ($10^{-12}$); $Q$ means the charge on EACH plate ($+Q$ on one, $-Q$ on the other).

### The Parallel-Plate Capacitor

$C = \\frac{\\varepsilon_0 A}{d}$

Capacitance is pure geometry: bigger plates (larger $A$) or closer plates (smaller $d$) both raise $C$. Between the plates the field is uniform:

$E = \\frac{V}{d}$

### Dielectrics

Sliding an insulating material (dielectric constant $\\kappa > 1$) between the plates multiplies the capacitance:

$C = \\kappa C_0$

The polarized dielectric partially cancels the internal field. Track what is held constant:

- **Battery connected** ($V$ fixed): $Q = CV$ increases — the battery pumps on more charge.
- **Battery disconnected** ($Q$ fixed): $V = Q/C$ DROPS, and stored energy drops too (the field pulls the dielectric in).

### Stored Energy

$U = \\frac{1}{2}QV = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}$

The factor $\\frac{1}{2}$ appears because the voltage climbs from $0$ to $V$ while charging — each coulomb is loaded at the average voltage $V/2$.

### Capacitor Networks — the Rules Flip

| | Series | Parallel |
|---|--------|----------|
| Same for each | charge $Q$ | voltage $V$ |
| Equivalent $C$ | $\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\cdots$ (shrinks) | $C_{eq} = C_1 + C_2 + \\cdots$ (grows) |

Exactly OPPOSITE to resistors: parallel capacitors add because side-by-side plates act like one bigger plate.

### Capacitors in DC Circuits

A charging capacitor fills quickly at first, then ever more slowly, with time constant $\\tau = RC$. Once fully charged, NO current flows through its branch — a full capacitor behaves like an open switch, and the rest of the circuit is analyzed without that branch.`
    },
    {
      id: 'ci3-worked',
      type: 'text' as const,
      content: `### Worked Example — Series Capacitors Share Charge, Not Voltage

A $3\\;\\mu\\text{F}$ and a $6\\;\\mu\\text{F}$ capacitor are in series across a $12\\;\\text{V}$ battery.

**Step 1 — Equivalent capacitance (product over sum works here too).**

$C_{eq} = \\frac{(3)(6)}{3 + 6} = 2\\;\\mu\\text{F}$

**Step 2 — Charge (same on every series capacitor).**

$Q = C_{eq}V = (2\\;\\mu\\text{F})(12\\;\\text{V}) = 24\\;\\mu\\text{C}$

**Step 3 — Individual voltages.**

$V_3 = \\frac{24}{3} = 8\\;\\text{V}, \\quad V_6 = \\frac{24}{6} = 4\\;\\text{V}$

Check: $8 + 4 = 12\\;\\text{V}$. The SMALLER capacitor takes the LARGER voltage share — the mirror image of series resistors, where the larger resistance takes more voltage.

### Worked Example — Dielectric with the Battery Disconnected

A $2\\;\\mu\\text{F}$ parallel-plate capacitor is charged to $100\\;\\text{V}$, then disconnected. A dielectric with $\\kappa = 4$ is slid in.

**Step 1 — What is fixed?** Disconnected, so $Q$ is trapped: $Q = CV = (2\\;\\mu\\text{F})(100) = 200\\;\\mu\\text{C}$.

**Step 2 — New capacitance and voltage.**

$C_{new} = \\kappa C = 8\\;\\mu\\text{F}, \\quad V_{new} = \\frac{Q}{C_{new}} = \\frac{200\\;\\mu\\text{C}}{8\\;\\mu\\text{F}} = 25\\;\\text{V}$

**Step 3 — Energy.** Before: $U = \\frac{1}{2}CV^2 = \\frac{1}{2}(2 \\times 10^{-6})(100)^2 = 0.010\\;\\text{J}$. After: $U = \\frac{Q^2}{2C} = 0.0025\\;\\text{J}$ — energy fell by the factor $\\kappa$. The missing energy became the work the field did pulling the slab in.`
    },
    {
      id: 'ci3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Capacitors & Dielectrics** 🎯`,
      exercise: {
        questions: [
          {
            question: `A capacitor holds $24\\;\\mu\\text{C}$ of charge when the voltage across it is $12\\;\\text{V}$. Its capacitance is:`,
            options: [`$288\\;\\mu\\text{F}$`, `$2\\;\\mu\\text{F}$`, `$0.5\\;\\mu\\text{F}$`, `$12\\;\\mu\\text{F}$`],
            correctAnswer: 1,
            explanation: `$C = Q/V = 24\\;\\mu\\text{C}/12\\;\\text{V} = 2\\;\\mu\\text{F}$. ($0.5\\;\\mu\\text{F}$ is the inverted ratio; $288$ comes from multiplying instead of dividing.)`
          },
          {
            question: `Two identical capacitors, each of capacitance $C$, are connected in parallel. The equivalent capacitance is:`,
            options: [`$C/2$`, `$C$`, `$4C$`, `$2C$`],
            correctAnswer: 3,
            explanation: `Parallel capacitances ADD (opposite of resistors): $C_{eq} = C + C = 2C$. In series the same pair would give $C/2$.`
          },
          {
            question: `If the plate separation of an air-filled parallel-plate capacitor is doubled, its capacitance:`,
            options: [`Halves`, `Doubles`, `Quadruples`, `Is unchanged`],
            correctAnswer: 0,
            explanation: `$C = \\varepsilon_0 A/d$ — capacitance is inversely proportional to separation, so doubling $d$ halves $C$.`
          },
          {
            question: `Doubling the voltage across a given capacitor changes the energy it stores by a factor of:`,
            options: [`$2$`, `$8$`, `$4$`, `$\\sqrt{2}$`],
            correctAnswer: 2,
            explanation: `$U = \\frac{1}{2}CV^2 \\propto V^2$ at fixed $C$, so doubling $V$ quadruples the stored energy (and doubles the stored charge).`
          },
          {
            question: `A dielectric is inserted into a capacitor while it remains connected to a battery. The charge on the plates:`,
            options: [`Decreases, because the field is partially cancelled`, `Increases, because $C$ rises while $V$ is held fixed`, `Stays the same, because charge is conserved`, `Drops to zero`],
            correctAnswer: 1,
            explanation: `Connected battery pins $V$. Since $C$ jumps to $\\kappa C$ and $Q = CV$, the battery drives extra charge on. (Charge stays fixed only in the DISCONNECTED case — there it is $V$ that falls.)`
          }
        ]
      }
    },
    {
      id: 'ci3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- $C = Q/V$; parallel plate: $C = \\varepsilon_0 A/d$, uniform field $E = V/d$
- Dielectric multiplies $C$ by $\\kappa$; battery connected keeps $V$ (charge rises), disconnected keeps $Q$ (voltage falls)
- Energy: $U = \\frac{1}{2}QV = \\frac{1}{2}CV^2 = Q^2/2C$
- Capacitor rules are resistor rules flipped: parallel adds, series is reciprocal; series shares $Q$, parallel shares $V$
- Charging follows $\\tau = RC$; a full capacitor is an open switch in DC`
    }
  ]
};
