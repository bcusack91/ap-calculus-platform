import type { LessonData } from './registry'

export const emfCapacitorsMcatPart2: LessonData = {
  topicSlug: 'mcat-physics-electricity-emf-capacitors-mcat',
  sections: [
    {
      id: 'ec2-intro',
      type: 'text' as const,
      content: `# Circuits Part 2: EMF & Capacitors

**Part 2 of 4 — Capacitance, Dielectrics & Stored Energy**

### Capacitance

A **capacitor** is two conductors (plates) separated by an insulator. Connect it to a battery and the battery moves charge from one plate to the other through the wires: one plate ends up with $+Q$, the other with $-Q$. No charge ever crosses the gap, and the capacitor's net charge stays zero. "The charge on a capacitor," $Q$, always means the charge on EACH plate.

Charging stops when the voltage across the plates equals the battery's voltage. The charge stored per volt is the **capacitance**:

$$C = \\frac{Q}{V}$$

The unit is the **farad** ($1\\;\\text{F} = 1\\;\\text{C/V}$). A farad is huge; real capacitors are usually microfarads ($\\mu\\text{F} = 10^{-6}\\;\\text{F}$) to picofarads ($\\text{pF} = 10^{-12}\\;\\text{F}$). A handy unit habit: $\\mu\\text{F} \\times \\text{V} = \\mu\\text{C}$.

**Trap:** $C = Q/V$ does NOT mean a bigger voltage gives a smaller capacitance. Capacitance is fixed by the capacitor's construction. Double the voltage and the charge doubles; $C$ does not change.

### The Parallel-Plate Capacitor

For two flat plates of area $A$ separated by distance $d$:

$$C = \\frac{\\kappa \\varepsilon_0 A}{d}$$

where $\\varepsilon_0$ is the permittivity of free space and $\\kappa$ is the dielectric constant of the material between the plates ($\\kappa = 1$ for vacuum, essentially 1 for air).

- **Bigger plates** (larger $A$): more room to spread charge at the same voltage, so $C$ rises in proportion.
- **Closer plates** (smaller $d$): opposite charges attract each other more strongly across the gap, so more charge piles on per volt. $C \\propto 1/d$.

| Change | New capacitance |
|---|---|
| Double the plate area | $2C$ |
| Double the separation | $C/2$ |
| Double the area AND the separation | $C$ |
| Fill the gap with $\\kappa = 3$ | $3C$ |

**The field between the plates is uniform:** same strength and direction (from the $+$ plate toward the $-$ plate) everywhere between them, and essentially zero outside:

$$E = \\frac{V}{d}$$

A uniform field means a charge between the plates feels a constant force $F = qE$, so it accelerates uniformly, just like a ball in gravity (the Electrostatics topic covers the motion).

<!-- yield:low -->
- The permittivity of free space is $\\varepsilon_0 \\approx 8.85 \\times 10^{-12}\\;\\text{F/m}$; a passage will give it if a calculation needs it.
- The field can also be written from the charge density on the plates: $E = \\sigma/\\varepsilon_0$, with $\\sigma = Q/A$.
<!-- /yield -->`
    },
    {
      id: 'ec2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice — Capacitance and the Parallel Plate** 🎯`,
      exercise: {
        questions: [
          {
            question: `A $5.0\\;\\mu\\text{F}$ capacitor is connected to a $12\\;\\text{V}$ battery until fully charged. How much charge sits on each plate?`,
            options: [`$2.4\\;\\mu\\text{C}$`, `$30\\;\\mu\\text{C}$`, `$60\\;\\mu\\text{C}$`, `$0.42\\;\\mu\\text{C}$`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `$Q = CV = (5.0\\;\\mu\\text{F})(12\\;\\text{V}) = 60\\;\\mu\\text{C}$. The value $2.4\\;\\mu\\text{C}$ divides voltage by capacitance; $30\\;\\mu\\text{C}$ borrows the $\\frac{1}{2}$ that belongs to the energy formula, not to $Q = CV$.`
          },
          {
            question: `The plates of an air-filled parallel-plate capacitor are replaced with plates of twice the area, and the gap between them is tripled. The new capacitance, compared with the original $C$, is:`,
            options: [`$\\frac{3}{2}C$`, `$\\frac{2}{3}C$`, `$6C$`, `$\\frac{1}{6}C$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$C \\propto A/d$, so doubling $A$ multiplies $C$ by 2 and tripling $d$ divides it by 3: $\\frac{2}{3}C$. Getting $\\frac{3}{2}C$ inverts the dependence on separation (capacitance FALLS as the plates move apart).`
          },
          {
            question: `A capacitor's plates are $2.0\\;\\text{mm}$ apart with $12\\;\\text{V}$ across them. What is the magnitude of the electric field between the plates?`,
            options: [`$6.0\\;\\text{V/m}$`, `$24\\;\\text{V/m}$`, `$600\\;\\text{V/m}$`, `$6.0 \\times 10^{3}\\;\\text{V/m}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Convert first: $d = 2.0 \\times 10^{-3}\\;\\text{m}$. Then $E = V/d = 12/(2.0 \\times 10^{-3}) = 6.0 \\times 10^{3}\\;\\text{V/m}$. Plugging in "2.0" without converting millimeters gives $6.0\\;\\text{V/m}$, off by a factor of 1000; $600\\;\\text{V/m}$ treats the gap as centimeters instead of millimeters.`
          },
          {
            question: `The voltage across a capacitor is doubled while nothing about its construction changes. What happens to its capacitance and its charge?`,
            options: [`Capacitance is unchanged, and the charge doubles`, `Capacitance halves, and the charge is unchanged`, `Capacitance doubles, and the charge quadruples`, `Capacitance and charge both stay the same`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Capacitance depends only on geometry and material ($\\kappa \\varepsilon_0 A/d$), so it stays the same; $Q = CV$ then doubles with $V$. Halving the capacitance misreads $C = Q/V$ as a cause-and-effect law. Quadrupling is the factor for stored ENERGY ($\\propto V^2$), not charge, and the charge stays fixed only when the capacitor is isolated, not when the voltage is raised.`
          }
        ]
      }
    },
    {
      id: 'ec2-dielectrics',
      type: 'text' as const,
      content: `### Dielectrics

A **dielectric** is an insulating material placed between the plates. Its molecules **polarize** in the field: their electron clouds shift (and polar molecules rotate) so that a thin layer of negative charge lines up next to the $+$ plate and positive charge next to the $-$ plate. These induced charges partly cancel the plates' field inside the material.

For the same charge $Q$ on the plates, the field and the voltage between the plates drop by the factor $\\kappa$, so the capacitance rises by the same factor:

$$C = \\kappa C_0 \\qquad (\\kappa \\ge 1)$$

Every real insulator has $\\kappa > 1$. Water's is unusually large, for the same reason water dissolves salts: its polar molecules screen charges from each other.

**Dielectric breakdown:** every insulator has a maximum field it can withstand (its dielectric strength). Above it, the material ionizes and suddenly conducts, and a spark jumps the gap. Breakdown sets a capacitor's maximum voltage. A good dielectric therefore does two jobs: it raises $C$, and it lets the plates sit closer together (or reach a higher voltage) without breaking down.

<!-- yield:low -->
- Typical dielectric constants: air about 1.0006, paper about 3, glass about 5 to 10, water about 80. Air breaks down near $3 \\times 10^6\\;\\text{V/m}$.
<!-- /yield -->

### Stored Energy

Charging a capacitor takes work, because each new bit of charge is pushed onto a plate that already repels it. That work is stored in the electric field between the plates:

$$U = \\frac{1}{2}QV = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}$$

**Why the $\\frac{1}{2}$?** The voltage rises steadily from $0$ to $V$ as the charge builds, so on average each coulomb is loaded at $V/2$. (On a graph of $V$ against $Q$, the energy is the triangle's area, $\\frac{1}{2}QV$.)

**Choose the form for what is held constant:**

- **Battery connected → $V$ fixed** → use $U = \\frac{1}{2}CV^2$, so $U \\propto C$.
- **Battery disconnected (isolated) → $Q$ fixed** → use $U = Q^2/2C$, so $U \\propto 1/C$.

| Insert a dielectric $\\kappa$ | Battery connected ($V$ fixed) | Disconnected ($Q$ fixed) |
|---|---|---|
| Capacitance $C$ | $\\times \\kappa$ | $\\times \\kappa$ |
| Charge $Q$ | $\\times \\kappa$ (battery adds charge) | unchanged |
| Voltage $V$ | unchanged | $\\div \\kappa$ |
| Field $E$ | unchanged ($V/d$ fixed) | $\\div \\kappa$ |
| Energy $U$ | $\\times \\kappa$ | $\\div \\kappa$ |

The same logic works for moving the plates. Pull the plates of an ISOLATED capacitor apart and $C$ falls while $Q$ stays put, so $V = Q/C$ rises and $U = Q^2/2C$ rises: you did work pulling the attracting plates apart. Do the same with the battery connected and $V$ stays put, so $Q$ and $U$ both fall.

**Where does the battery's energy go?** A battery charging a capacitor through a resistor delivers $QV$ of energy but the capacitor stores only $\\frac{1}{2}QV$. The other half is lost as heat in the resistance, whatever its size.

<!-- yield:low -->
- Energy density of the field: $u = \\frac{1}{2}\\varepsilon_0 E^2$ (energy per volume), multiplied by $\\kappa$ inside a dielectric.
<!-- /yield -->`
    },
    {
      id: 'ec2-worked',
      type: 'text' as const,
      content: `### Worked Example — Dielectric with the Battery Disconnected

A $2.0\\;\\mu\\text{F}$ air-filled capacitor is charged to $100\\;\\text{V}$ and then disconnected from the battery. A slab with $\\kappa = 4$ is slid in to fill the gap. Find the new charge, capacitance, voltage and stored energy.

**Step 1 — What is fixed?** Disconnected, so the charge has nowhere to go: $Q$ is fixed.

$$Q = CV = (2.0\\;\\mu\\text{F})(100\\;\\text{V}) = 200\\;\\mu\\text{C}$$

**Step 2 — New capacitance.** $C_{\\text{new}} = \\kappa C = 4(2.0\\;\\mu\\text{F}) = 8.0\\;\\mu\\text{F}$.

**Step 3 — New voltage.**

$$V_{\\text{new}} = \\frac{Q}{C_{\\text{new}}} = \\frac{200\\;\\mu\\text{C}}{8.0\\;\\mu\\text{F}} = 25\\;\\text{V}$$

The voltage fell by the factor $\\kappa$, and so did the field between the plates.

**Step 4 — Energy before and after.**

$$U_{\\text{before}} = \\frac{1}{2}CV^2 = \\frac{1}{2}(2.0 \\times 10^{-6})(100)^2 = 1.0 \\times 10^{-2}\\;\\text{J}$$

$$U_{\\text{after}} = \\frac{1}{2}C_{\\text{new}}V_{\\text{new}}^2 = \\frac{1}{2}(8.0 \\times 10^{-6})(25)^2 = 2.5 \\times 10^{-3}\\;\\text{J}$$

Energy fell by the factor $\\kappa = 4$. The ratio shortcut gets there in one line: $U = Q^2/2C$ with $Q$ fixed and $C \\times 4$, so $U \\div 4$. The missing energy went into the work the field did pulling the slab in.

**Step 5 — Contrast: battery still connected.** Now $V$ stays $100\\;\\text{V}$, so $Q = (8.0\\;\\mu\\text{F})(100\\;\\text{V}) = 800\\;\\mu\\text{C}$ and $U = \\frac{1}{2}(8.0 \\times 10^{-6})(100)^2 = 4.0 \\times 10^{-2}\\;\\text{J}$, four times the original. Same slab, opposite energy change: everything hinges on whether $Q$ or $V$ is held constant.`
    },
    {
      id: 'ec2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Dielectrics & Stored Energy** 🎯`,
      exercise: {
        questions: [
          {
            question: `A dielectric with $\\kappa = 3$ is inserted to fill a capacitor that remains connected to its battery. By what factor does the stored energy change?`,
            options: [`It drops to one-third`, `It triples`, `It increases ninefold`, `It is unchanged`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The connected battery holds $V$ fixed, so use $U = \\frac{1}{2}CV^2$: $C$ triples, so $U$ triples (the battery supplies the extra charge and energy). Dropping to one-third is the DISCONNECTED result, where $Q$ is fixed and $U = Q^2/2C$.`
          },
          {
            question: `A charged parallel-plate capacitor is isolated (no battery attached), and its plates are pulled apart until the separation doubles. What happens to the voltage between the plates and the stored energy?`,
            options: [`The voltage doubles, and the energy halves`, `The voltage halves, and the energy halves`, `The voltage doubles, and the energy doubles`, `The voltage is unchanged, and the energy halves`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Isolated means $Q$ is fixed. Doubling $d$ halves $C$, so $V = Q/C$ doubles and $U = Q^2/2C$ doubles; the extra energy is the work done pulling the attracting plates apart. An unchanged voltage with halved energy is what happens when the battery stays connected.`
          },
          {
            question: `Three capacitors are charged: $1\\;\\mu\\text{F}$ to $20\\;\\text{V}$, $4\\;\\mu\\text{F}$ to $10\\;\\text{V}$, and $16\\;\\mu\\text{F}$ to $5\\;\\text{V}$. How do their stored energies compare?`,
            options: [`The $16\\;\\mu\\text{F}$ capacitor stores the most`, `The $1\\;\\mu\\text{F}$ capacitor stores the most`, `The $4\\;\\mu\\text{F}$ capacitor stores the most`, `All three store the same energy`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `$U = \\frac{1}{2}CV^2$: each step multiplies $C$ by 4 and divides $V$ by 2, and $V^2$ falls by exactly 4, so all three store $200\\;\\mu\\text{J}$. Choosing the $16\\;\\mu\\text{F}$ capacitor tracks charge instead: its charge ($80\\;\\mu\\text{C}$) is the largest, but energy depends on the square of the voltage.`
          },
          {
            question: `Why can a capacitor filled with a good dielectric be charged to a higher voltage than the same capacitor filled with air?`,
            options: [`The dielectric tolerates a stronger field before it breaks down`, `The dielectric raises the capacitance, which lowers the field`, `The dielectric carries away charge that would make a spark`, `The dielectric increases the separation of the two plates`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `The maximum voltage is set by breakdown: once $E = V/d$ exceeds the insulator's dielectric strength, it ionizes and sparks. Good dielectrics withstand far stronger fields than air. Raising $C$ alone does not lower the field at a given voltage, because $E = V/d$ depends only on the voltage and the gap (at fixed CHARGE a dielectric does lower $E$, but at a given $V$, $E = V/d$ regardless of $\\kappa$).`
          }
        ]
      }
    },
    {
      id: 'ec2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- $C = Q/V$ (farads); $Q$ is the charge on each plate; $C$ is set by construction, not by $Q$ or $V$
- Parallel plates: $C = \\kappa \\varepsilon_0 A / d$ (bigger plates, smaller gap, better dielectric all raise $C$)
- Uniform field between the plates: $E = V/d$, directed from $+$ to $-$
- Dielectrics polarize, partly cancel the field and multiply $C$ by $\\kappa$; breakdown sets the maximum field and voltage
- $U = \\frac{1}{2}QV = \\frac{1}{2}CV^2 = Q^2/2C$; use $\\frac{1}{2}CV^2$ when $V$ is fixed, $Q^2/2C$ when $Q$ is fixed
- Battery connected: $V$ fixed; inserting a dielectric raises $Q$ and $U$ by $\\kappa$. Disconnected: $Q$ fixed; $V$, $E$ and $U$ fall by $\\kappa$
- Charging through a resistor: the battery supplies $QV$, the capacitor stores half, and the other half becomes heat

**Common traps**

- Reading $C = Q/V$ as "more voltage means less capacitance"
- Forgetting to convert millimeters, microfarads or microcoulombs before computing
- Using $\\frac{1}{2}CV^2$ for an isolated capacitor whose voltage is changing: pick the form whose variables stay fixed
- Ranking stored energy by charge or capacitance alone: energy scales with $V^2$
- Assuming a dielectric always increases stored energy (it lowers it when $Q$ is fixed)

<!-- yield:low -->
- Low-yield extras: the value of $\\varepsilon_0$ ($8.85 \\times 10^{-12}\\;\\text{F/m}$); $E = \\sigma/\\varepsilon_0$; tabulated dielectric constants and air's breakdown field; field energy density $u = \\frac{1}{2}\\varepsilon_0 E^2$
<!-- /yield -->`
    }
  ]
}
