import type { LessonData } from './registry'

export const emfCapacitorsMcatPart4: LessonData = {
  topicSlug: 'mcat-physics-electricity-emf-capacitors-mcat',
  sections: [
    {
      id: 'ec4-intro',
      type: 'text' as const,
      content: `# Circuits Part 2: EMF & Capacitors

**Part 4 of 4 — Bioelectricity & Passage Strategy**

The MCAT loves to hide capacitors inside biology. Every idea in this part is physics you already have (batteries, resistors, capacitors, $\\tau = RC$) wearing a neuron or a heart.

### The Cell Membrane Is an RC Circuit

Map each piece of a neuron onto a circuit element:

| Biological structure | Circuit element | Why |
|---|---|---|
| Lipid bilayer | Capacitor ($C_m$) | A thin insulator (the hydrophobic core) separating two conducting salt solutions |
| Ion channels | Resistors ($R_m$) in parallel with the capacitor | Each open channel is a path for ionic current across the insulator |
| Ion concentration gradients | Batteries | Each ion's equilibrium (Nernst) potential drives current through its channels |

The field inside the membrane is enormous: about $70\\;\\text{mV}$ across a bilayer about $7\\;\\text{nm}$ thick gives $E = V/d = (7 \\times 10^{-2}\\;\\text{V})/(7 \\times 10^{-9}\\;\\text{m}) = 1 \\times 10^7\\;\\text{V/m}$, the parallel-plate formula from Part 2 of this lesson.

Consequences the MCAT tests:

- **The resting potential is stored charge.** About $-70\\;\\text{mV}$ across the membrane means a thin layer of excess negative charge on the inner face and positive charge on the outer face. Because $C_m$ is small, $Q = C_mV$ is a tiny amount of charge: far fewer ions than the cell contains, so firing does not measurably change bulk ion concentrations.
- **The membrane voltage cannot jump.** Like any capacitor, the membrane must charge or discharge through its resistance, with time constant $\\tau = R_mC_m$.
- **More open channels = more parallel resistors = lower $R_m$ = shorter $\\tau$.** The membrane responds faster, but each input fades faster. Closing channels raises $R_m$ and lengthens $\\tau$.
- **A longer $\\tau$ favors temporal summation:** each postsynaptic potential decays more slowly, so inputs arriving close together can add up to reach threshold.

<!-- yield:low -->
- Biological membranes have a nearly universal specific capacitance of about $1\\;\\mu\\text{F/cm}^2$, so a cell's total $C_m$ scales with its surface area.
- How far a passive voltage change spreads along an axon is described by the length constant $\\lambda$, which grows with membrane resistance and shrinks with internal (axial) resistance.
<!-- /yield -->

### Myelin and Conduction Speed

Myelin is many tight wraps of glial cell membrane (Schwann cells in the peripheral nervous system, oligodendrocytes in the central nervous system) around the axon, interrupted at the **nodes of Ranvier**. Electrically, those wraps are many membranes stacked in SERIES:

- **Capacitors in series → lower capacitance.** Stacking layers acts like widening the gap $d$, so $C_m$ falls. Less charge is needed to change the voltage of each stretch of axon, so the depolarization travels farther and faster.
- **Resistors in series → higher resistance.** $R_m$ rises, so less current leaks out across the membrane and more flows down the axon to the next node.

Result: the action potential is regenerated only at the nodes, where voltage-gated $\\text{Na}^+$ channels are concentrated, and seems to jump from node to node: **saltatory conduction**. It is fast and energy-efficient, because ions cross the membrane only at the nodes, leaving less for the $\\text{Na}^+/\\text{K}^+$ pump to restore.

The other speed lever is **axon diameter**: a wider axon has lower internal resistance, so current flows down it more easily. In demyelinating diseases such as **multiple sclerosis**, internodes lose myelin, $C_m$ rises and $R_m$ falls, current leaks away, and conduction slows or fails. The Nervous System lesson covers the channel sequence of the action potential itself.`
    },
    {
      id: 'ec4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice — The Membrane as a Circuit** 🎯`,
      exercise: {
        questions: [
          {
            question: `A small neuron has a membrane resistance of $4.0 \\times 10^{8}\\;\\Omega$ and a membrane capacitance of $5.0 \\times 10^{-11}\\;\\text{F}$. What is its membrane time constant?`,
            options: [`$2.0\\;\\text{ms}$`, `$20\\;\\text{ms}$`, `$200\\;\\text{ms}$`, `$0.20\\;\\text{ms}$`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `$\\tau = R_mC_m = (4.0 \\times 10^{8})(5.0 \\times 10^{-11}) = 20 \\times 10^{-3}\\;\\text{s} = 20\\;\\text{ms}$. The other answers come from slipping a power of ten when combining the exponents ($8 - 11 = -3$, and $4.0 \\times 5.0 = 20$, not $2.0$).`
          },
          {
            question: `A toxin opens many additional potassium leak channels in a neuron's membrane without changing the membrane itself. How do the membrane resistance and time constant change?`,
            options: [`Resistance falls, so the time constant lengthens`, `Resistance rises, so the time constant shortens`, `Capacitance rises, so the time constant lengthens`, `Resistance falls, so the time constant shortens`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Each open channel is another resistor in parallel, and adding parallel paths LOWERS total resistance; with $C_m$ unchanged, $\\tau = R_mC_m$ shortens. Lower resistance with a longer time constant gets the direction of $\\tau = RC$ backward, and rising resistance gets the parallel-resistor rule backward; capacitance depends on the bilayer, which the toxin leaves alone.`
          },
          {
            question: `In multiple sclerosis, axons in the central nervous system lose their myelin. Compared with a healthy myelinated internode, a demyelinated internode has:`,
            options: [`Lower capacitance and higher resistance`, `Higher capacitance and higher resistance`, `Higher capacitance and lower resistance`, `Lower capacitance and lower resistance`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Myelin's stacked layers act like capacitors and resistors in series, lowering $C_m$ and raising $R_m$. Removing them reverses both: more charge is needed per millivolt and more current leaks out, so conduction slows or fails. Lower capacitance with higher resistance describes the HEALTHY myelinated internode.`
          },
          {
            question: `A neuron's membrane capacitance is $100\\;\\text{pF}$ ($1.0 \\times 10^{-10}\\;\\text{F}$) and its resting potential has a magnitude of $70\\;\\text{mV}$. How much charge is separated across its membrane?`,
            options: [`$7.0 \\times 10^{-9}\\;\\text{C}$`, `$1.4 \\times 10^{-9}\\;\\text{C}$`, `$3.5 \\times 10^{-12}\\;\\text{C}$`, `$7.0 \\times 10^{-12}\\;\\text{C}$`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `$Q = CV = (1.0 \\times 10^{-10})(7.0 \\times 10^{-2}) = 7.0 \\times 10^{-12}\\;\\text{C}$, only about $4 \\times 10^{7}$ monovalent ions, a tiny fraction of the cell's ions. Using "70" without converting millivolts gives $7.0 \\times 10^{-9}\\;\\text{C}$; halving the answer borrows the $\\frac{1}{2}$ from the energy formula.`
          }
        ]
      }
    },
    {
      id: 'ec4-strategy',
      type: 'text' as const,
      content: `### Defibrillators and Capacitor Discharge

In ventricular fibrillation, heart muscle cells fire chaotically and the heart stops pumping. A defibrillator delivers a brief, strong current that depolarizes most of the myocardium at once, which halts the chaos and lets the SA node take back control.

Why use a capacitor? A small battery has only a few volts of EMF, and its internal resistance caps its current at $\\varepsilon/r$ (Part 1 of this lesson), so it cannot drive tens of amps through the chest directly; it CAN slowly fill a capacitor to a high voltage:

1. **Charge slowly:** the device's battery and circuitry charge a capacitor to a high voltage over several seconds, at modest power.
2. **Store:** the capacitor holds $U = \\frac{1}{2}CV^2$. The energy setting the operator chooses is reached by charging to the matching voltage, since $C$ is fixed.
3. **Discharge fast:** paddles connect the capacitor across the chest, which acts as a resistor $R$. The discharge time scale is $\\tau = RC$, a few milliseconds.

Same energy in, same energy out, but delivered hundreds of times faster (seconds to charge, milliseconds to discharge), so the delivery power is hundreds of times higher. **Power is energy per time.** The capacitor is not an energy source; it is a time compressor. A camera flash works the same way.

<!-- yield:low -->
- Typical external defibrillator shocks deliver roughly 120 to 360 J, and the chest's resistance is roughly 50 to 100 Ω; a passage will supply any numbers it needs.
<!-- /yield -->

### Passage Strategy — What Is Held Constant?

Capacitor passages reduce to one question: **what stays fixed?**

| Situation | Held constant | Use |
|---|---|---|
| Battery or charger still connected | $V$ | $Q = CV$, $U = \\frac{1}{2}CV^2$ |
| Capacitor isolated (disconnected) | $Q$ | $V = Q/C$, $U = Q^2/2C$ |
| Same device, new voltage setting | $C$ | $U \\propto V^2$, $Q \\propto V$ |
| Same stored energy, different capacitor | $U$ | $V \\propto 1/\\sqrt{C}$ |

**Ratio reasoning beats plugging in.** Write the formula, mark what is constant, and scale. Doubling $V$ on a fixed capacitor: $U \\propto V^2$, so $\\times 4$. Inserting a dielectric of $\\kappa = 3$ into an isolated capacitor: $U = Q^2/2C$, so $\\div 3$.

**Unit checks catch most slips:** $\\mu\\text{F} \\times \\text{V} = \\mu\\text{C}$; $\\Omega \\times \\text{F} = \\text{s}$; $\\text{F} \\times \\text{V}^2 = \\text{J}$; $\\text{J}/\\text{s} = \\text{W}$.

**Translate the biology:** membrane = capacitor, channels = parallel resistors, myelin = series layers (lower $C$, higher $R$), firing threshold or pacing interval = RC timing, defibrillator = slow charge and fast discharge.`
    },
    {
      id: 'ec4-worked',
      type: 'text' as const,
      content: `### Worked Example — Defibrillator Energy and Power

**Problem 1.** A defibrillator's $100\\;\\mu\\text{F}$ capacitor is charged to $2000\\;\\text{V}$ over $5.0\\;\\text{s}$.

- **(a)** How much charge does the capacitor store?
- **(b)** How much energy does it store?
- **(c)** What is the average power while it charges?

**(a) Charge.**

$$Q = CV = (1.0 \\times 10^{-4}\\;\\text{F})(2.0 \\times 10^{3}\\;\\text{V}) = 0.20\\;\\text{C}$$

**(b) Energy.**

$$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(1.0 \\times 10^{-4})(4.0 \\times 10^{6}) = 200\\;\\text{J}$$

**(c) Average charging power.** With $U = 200\\;\\text{J}$ from (b): $P_{\\text{charge}} = 200\\;\\text{J} / 5.0\\;\\text{s} = 40\\;\\text{W}$, about as much as a household light bulb.

**Problem 2.** The charged capacitor ($100\\;\\mu\\text{F}$, $2000\\;\\text{V}$, $200\\;\\text{J}$ stored, charged at $40\\;\\text{W}$) is discharged through a patient's chest, which acts as a $50\\;\\Omega$ resistor.

- **(a)** What is the discharge time constant?
- **(b)** What are the peak current and the peak power?
- **(c)** Why is nearly all of the energy delivered within about $10\\;\\text{ms}$?
- **(d)** What is the average delivery power?
- **(e)** How many times the charging power is that?

**(a) Discharge time scale.**

$$\\tau = RC = (50)(1.0 \\times 10^{-4}) = 5.0 \\times 10^{-3}\\;\\text{s} = 5.0\\;\\text{ms}$$

So the capacitor is essentially empty after about $5\\tau = 25\\;\\text{ms}$, and most of the energy leaves in the first several milliseconds.

**(b) Peak current and power.** At the first instant the full $2000\\;\\text{V}$ is across the chest: $I_0 = V/R = 2000/50 = 40\\;\\text{A}$, and the peak power is $V^2/R = (4.0 \\times 10^{6})/50 = 8.0 \\times 10^{4}\\;\\text{W}$.

**(c) Why about 10 ms.** Stored energy goes as $Q^2$, so it drains twice as fast as the charge: after $2\\tau = 10\\;\\text{ms}$ the charge is down to $e^{-2} \\approx 0.14$ of its start, and the energy to $e^{-4} \\approx 0.02$, so about 98% has been delivered.

**(d) Average delivery power.** Treating the $200\\;\\text{J}$ as delivered over about $10\\;\\text{ms}$, from (c):

$$P_{\\text{deliver}} \\approx \\frac{200\\;\\text{J}}{1.0 \\times 10^{-2}\\;\\text{s}} = 2.0 \\times 10^{4}\\;\\text{W}$$

**(e) The ratio.** $P_{\\text{deliver}}/P_{\\text{charge}} = (2.0 \\times 10^{4})/40 = 500$, exactly the ratio of the times ($5.0\\;\\text{s}$ versus $10\\;\\text{ms}$). Same energy, five hundred times the power. To double the energy setting, the device would raise the voltage by $\\sqrt{2}$, not by 2.`
    },
    {
      id: 'ec4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Defibrillators & Passage Reasoning** 🎯`,
      exercise: {
        questions: [
          {
            question: `A defibrillator has one fixed capacitor. An operator raises the energy setting from $50\\;\\text{J}$ to $200\\;\\text{J}$. What must the device change, and by what factor?`,
            options: [`It doubles the charging voltage`, `It quadruples the charging voltage`, `It doubles both capacitance and voltage`, `It raises the voltage by a factor of $\\sqrt{2}$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `With $C$ fixed, $U = \\frac{1}{2}CV^2 \\propto V^2$. Four times the energy needs $\\sqrt{4} = 2$ times the voltage. Quadrupling the voltage would give sixteen times the energy, and the capacitance of a built-in capacitor is not what an energy setting adjusts.`
          },
          {
            question: `Two defibrillator designs each store $200\\;\\text{J}$. Design X uses a $100\\;\\mu\\text{F}$ capacitor; design Y uses a $400\\;\\mu\\text{F}$ capacitor. What is the ratio of Y's charging voltage to X's?`,
            options: [`$\\frac{1}{4}$`, `$2$`, `$\\frac{1}{2}$`, `$4$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Energy is held constant: $\\frac{1}{2}CV^2 = \\text{constant}$, so $V \\propto 1/\\sqrt{C}$. Four times the capacitance needs half the voltage: $V_Y/V_X = \\frac{1}{2}$. The ratio $\\frac{1}{4}$ treats $V$ as inversely proportional to $C$, which is the rule for fixed CHARGE, not fixed energy.`
          },
          {
            question: `A portable defibrillator charges its capacitor over $6.0\\;\\text{s}$ and delivers the same stored energy to the patient in about $6.0\\;\\text{ms}$. Ignoring losses, the average power during delivery is how many times the average power during charging?`,
            options: [`About 1, because the energy is unchanged`, `About $10^{3}$, the inverse time ratio`, `About $10^{6}$, the square of the time ratio`, `About $10^{-3}$, equal to the time ratio`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Average power is energy divided by time. With equal energy, the power ratio is the inverse of the time ratio: $(6.0\\;\\text{s})/(6.0 \\times 10^{-3}\\;\\text{s}) = 10^{3}$. Equal energy does not mean equal power; compressing the delivery time is the whole reason defibrillators use a capacitor.`
          }
        ]
      }
    },
    {
      id: 'ec4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Membrane as RC circuit.** Bilayer = capacitor, channels = parallel resistors; more open channels shorten $\\tau = R_mC_m$.
- **Myelin in series.** Stacked layers lower $C_m$ and raise $R_m$, so the signal jumps node to node (saltatory conduction).
- **Defibrillator timing.** Charge slowly, store $\\frac{1}{2}CV^2$, discharge fast with $\\tau = RC$: same energy, far more power.
- **What is held constant?** Decide whether $V$, $Q$, $C$ or $U$ is fixed, then scale with ratios and check units.

**Common traps**

- **Myelin raises capacitance.** Myelin LOWERS capacitance, like widening the gap between the plates.
- **Channels in series.** Added channels are resistors in PARALLEL, so the membrane resistance falls.
- **Equal energy, equal power.** Power is energy per time; the same energy delivered faster means far more power.
- **Voltage linear in energy.** $U \\propto V^2$, so doubling the energy needs $\\sqrt{2}$ times the voltage, not twice.

<!-- yield:low -->
- Low-yield extras: specific membrane capacitance of about $1\\;\\mu\\text{F/cm}^2$; the length constant $\\lambda$; typical defibrillator energies (120 to 360 J) and chest resistance (50 to 100 Ω)
<!-- /yield -->`
    },
    {
      id: 'ec4-recap',
      type: 'text' as const,
      content: `### Lesson Recap

- **Real batteries:** EMF minus the internal drop, $V_{\\text{term}} = \\varepsilon - Ir$; ammeters go in series (~0 Ω), voltmeters in parallel (~∞ Ω).
- **Capacitors:** $C = Q/V = \\kappa\\varepsilon_0A/d$, $U = \\frac{1}{2}CV^2$; series and parallel rules are the reverse of resistors; empty = wire, full = open branch, timescale $\\tau = RC$.
- **Network rules:** whenever a capacitor problem reduces to a resistor network (steady state, $t = 0$), the series/parallel, Kirchhoff and power tools come from the *Circuits Part 1: Current & Resistance* lesson. Review them there.

**Next up:** if any network step in this lesson felt shaky, revisit the *Circuits Part 1: Current & Resistance* lesson before the exit quiz.`
    }
  ]
}
