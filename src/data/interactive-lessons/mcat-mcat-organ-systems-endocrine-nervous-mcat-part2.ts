export const mcatEndoNervSubPart2Data = {
  topicSlug: 'mcat-organ-systems-endocrine-nervous-mcat',
  sections: [
    {
      id: 'endn2-intro',
      type: 'text' as const,
      content: `# Endocrine & Nervous Systems

**Part 2 of 4 — Neurons, Action Potentials, Synapses & the Autonomic Division**

### The Resting Membrane Potential (~ −70 mV)

Two ingredients make the inside of a neuron negative at rest:

1. **Concentration gradients** maintained by the **Na$^+$/K$^+$-ATPase** (3 Na$^+$ out, 2 K$^+$ in, per ATP): high K$^+$ inside, high Na$^+$ outside.
2. **Selective permeability:** at rest the membrane leaks mostly **K$^+$** (leak channels). K$^+$ exits down its gradient until the growing negative interior pulls it back — equilibrium near the K$^+$ Nernst potential (~ −90 mV); slight Na$^+$ leak drags the resting value up to ~ −70 mV.

$$E_{ion} = \\frac{61}{z} \\log_{10} \\frac{[ion]_{out}}{[ion]_{in}} \\text{ (mV, at body temperature)}$$

**Rule:** the membrane potential moves TOWARD the equilibrium potential of whichever ion it is currently most permeable to. Every phase of the action potential is this rule in action.

### The Action Potential — A Fixed Sequence

1. **Depolarization to threshold** (~ −55 mV) by summed synaptic input.
2. **Rising phase:** voltage-gated **Na$^+$ channels** open → Na$^+$ rushes in → potential shoots toward $E_{Na}$ (~ +60 mV), peaking near +30 to +40 mV. Positive feedback: depolarization opens more Na$^+$ channels.
3. **Falling phase:** Na$^+$ channels **inactivate** (an inactivation gate plugs the open channel); slower voltage-gated **K$^+$ channels** open → K$^+$ exits → repolarization.
4. **Hyperpolarization:** K$^+$ channels close slowly → brief overshoot below rest, then leak channels restore −70 mV.

<!-- yield:low -->
- The inactivation gate is often pictured as a "ball-and-chain" that swings into the channel's pore.
<!-- /yield -->

- **All-or-none:** amplitude never grades with stimulus strength — **intensity is coded as frequency** of firing (and number of neurons recruited).
- **Absolute refractory period** (Na$^+$ channels inactivated): no second spike, no matter what; caps maximum firing rate and forces one-way propagation. **Relative refractory** (during hyperpolarization): only a stronger stimulus fires.
- **Myelin** (oligodendrocytes in CNS, Schwann cells in PNS) insulates internodes; channels cluster at **nodes of Ranvier** → **saltatory conduction** (fast, energy-cheap). Demyelination (multiple sclerosis, Guillain–Barré) slows or blocks conduction. Speed ↑ with myelination and axon diameter.

### The Chemical Synapse

1. Action potential reaches the terminal → voltage-gated **Ca$^{2+}$ channels** open.
2. Ca$^{2+}$ influx triggers vesicle fusion (SNAREs) → neurotransmitter exocytosed into the cleft.
3. Postsynaptic binding → **EPSP** (e.g., glutamate: Na$^+$ entry, depolarizes) or **IPSP** (e.g., GABA/glycine: Cl$^-$ entry or K$^+$ exit, hyperpolarizes). These are **graded potentials** that decay with distance.
4. The **axon hillock** sums thousands of EPSPs/IPSPs — **temporal** (rapid-fire same synapse) and **spatial** (many synapses) summation — and fires if threshold is crossed.
5. Signal termination: reuptake (serotonin, dopamine — SSRI target), enzymatic destruction (**acetylcholinesterase** for ACh), or diffusion.

At the **neuromuscular junction**, ACh on nicotinic receptors always excites muscle; curare blocks the receptor (paralysis), AChE inhibitors (sarin, some pesticides) cause continuous stimulation.

### Organization: Somatic vs. Autonomic

| Feature | Somatic | Sympathetic | Parasympathetic |
|---------|---------|-------------|-----------------|
| Pathway | 1 neuron to skeletal muscle | 2 neurons (short pre-, long post-ganglionic) | 2 neurons (long pre-, short post-ganglionic) |
| Preganglionic NT | — | ACh (nicotinic) | ACh (nicotinic) |
| Final NT / receptor | ACh (nicotinic) | **Norepinephrine** (adrenergic α/β)* | **ACh (muscarinic)** |
| Headline | Voluntary movement, reflex arcs | Fight-or-flight: ↑HR, bronchodilation, pupil dilation, glycogenolysis, blood to muscle | Rest-and-digest: ↓HR, ↑GI activity, pupil constriction |

*Exceptions: sweat glands (sympathetic but ACh/muscarinic) and the **adrenal medulla** — a modified sympathetic ganglion whose chromaffin cells dump epinephrine into BLOOD (a hormone: broadcast, slower, longer-lasting than nerve NE).

- **Reflex arc:** receptor → afferent (dorsal root) → integration (spinal cord; monosynaptic for knee-jerk, interneurons otherwise) → efferent (ventral root) → effector. Reflexes fire before the brain knows.
- Most organs receive **dual antagonistic innervation**; resting organ tone is a blend (e.g., vagal dominance at the SA node).`
    },
    {
      id: 'endn2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Membranes to Circuits

**Problem 1.** A lab error doubles the extracellular K$^+$ concentration bathing a neuron.

- **(a)** How does $E_K$ change?
- **(b)** What happens to the resting membrane potential?
- **(c)** Is the cell initially more or less excitable?
- **(d)** What happens to its excitability if the high K$^+$ persists?

**(a) Nernst.** $E_K = 61 \\log_{10}([K]_{out}/[K]_{in})$: raising $[K]_{out}$ makes the ratio less extreme, so $E_K$ becomes less negative.

**(b) Resting potential.** The resting membrane is mostly K$^+$-permeable, so it **depolarizes** toward the new, less negative $E_K$ from (a).

**(c) Early excitability.** The cell now sits closer to threshold, so it is initially hyperexcitable.

**(d) Sustained depolarization.** Lasting depolarization inactivates Na$^+$ channels, ultimately making the cell UNexcitable. This biphasic logic is why potassium disturbances cause both arrhythmias and cardiac arrest.

**Problem 2.** In a resting subject, vagal tone dominates the SA node. Predict heart rate after each of three drugs.

- **(a)** What does atropine, a muscarinic blocker, do to heart rate?
- **(b)** What does propranolol, a beta blocker, do to heart rate?
- **(c)** What does a nicotinic ganglionic blocker such as hexamethonium do to heart rate?
- **(d)** What general rule predicts any blocker's effect on an organ?

**(a) Atropine.** It removes the dominant vagal brake, so HR **rises** toward the SA node's intrinsic ~100 bpm.

**(b) Propranolol.** It removes the sympathetic accelerator, which is minor at rest, so HR **falls slightly**.

**(c) Ganglionic blocker.** Silencing BOTH divisions equals removing the LARGER influence. At rest that is vagal, so HR **rises** toward the intrinsic rate.

**(d) Method.** Identify which division dominates the organ at baseline; the response to any blocker is "subtract that input."

**Problem 3.** In a demyelinating disease, a motor axon's conduction velocity drops from 60 m/s to 10 m/s, though the axon itself is intact and the muscle responds to direct stimulation.

- **(a)** How does myelin normally make conduction fast?
- **(b)** What does losing myelin do to conduction?
- **(c)** Where is the deficit, and which diseases show this pattern in the CNS and PNS?

**(a) Saltatory conduction.** Myelin lets current flow passively and rapidly between nodes of Ranvier, regenerating the spike only at nodes.

**(b) Losing myelin.** It forces continuous regeneration along leaky membrane, which is slow, and current may dissipate below threshold between former nodes (conduction block).

**(c) The insulation.** Axon and synapse are healthy; the deficit is purely in the cable's insulation. That is the pattern of multiple sclerosis (CNS oligodendrocytes) or Guillain-Barré (PNS Schwann cells).`
    },
    {
      id: 'endn2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Neurons & Synapses** 🎯`,
      exercise: {
        questions: [
          {
            question: `A toxin selectively prevents the inactivation of voltage-gated sodium channels. Its immediate effect on a neuron's action potential is:`,
            options: [`Failure to reach threshold, silencing the neuron`, `Prolonged depolarization with impaired repolarization`, `Faster repolarization from enhanced potassium efflux`, `Deeper hyperpolarization following each spike`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `Repolarization requires BOTH Na$^+$-channel inactivation (stopping the inward rush) and delayed K$^+$ efflux. If Na$^+$ channels stay open, inward current persists and the membrane lingers near the sodium equilibrium potential — a prolonged spike (the mechanism of several natural neurotoxins). The refractory period, which depends on inactivation, is also lost.`
          },
          {
            question: `An inhibitory synapse opens chloride channels on the postsynaptic dendrite. This inhibits firing because chloride entry:`,
            options: [`Depolarizes the axon hillock, inactivating its sodium channels`, `Blocks calcium channels in the presynaptic terminal`, `Holds the membrane near or below rest, opposing EPSPs`, `Destroys excitatory neurotransmitter in the cleft`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Cl$^-$ influx produces an IPSP — a graded hyperpolarization (or clamping near rest) that algebraically subtracts from concurrent EPSPs during spatial summation, so summed EPSPs are less likely to reach threshold. The axon hillock's ledger determines firing; inhibition works by keeping that sum under the ~-55 mV threshold, not by depolarizing the hillock, acting on the presynaptic cell, or destroying the transmitter itself.`
          },
          {
            question: `Both sympathetic and parasympathetic preganglionic neurons release the same neurotransmitter onto the same receptor type. That signal is:`,
            options: [`Acetylcholine on nicotinic receptors`, `Norepinephrine on beta-1 receptors`, `Acetylcholine on muscarinic receptors`, `Epinephrine on alpha receptors`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Every autonomic ganglion — sympathetic or parasympathetic — is a cholinergic NICOTINIC synapse (as is the neuromuscular junction). The branches diverge only at the final effector synapse: sympathetic postganglionics release norepinephrine onto adrenergic receptors, parasympathetic postganglionics release ACh onto MUSCARINIC receptors. A ganglionic nicotinic blocker therefore silences both divisions at once.`
          }
        ]
      }
    },
    {
      id: 'endn2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Resting potential.** The Na⁺/K⁺-ATPase builds gradients; K⁺ leak holds rest near −70 mV, as potential moves toward the most permeable ion's $E$.
- **Action potential.** Na⁺ rushes in on the rise; Na⁺ inactivation plus delayed K⁺ efflux bring the fall, then hyperpolarization.
- **Synaptic summation.** Ca²⁺ entry releases transmitter; graded EPSPs and IPSPs sum at the axon hillock, which fires at threshold.
- **Autonomic wiring.** Every ganglion uses ACh on nicotinic receptors; sympathetic endings release NE, parasympathetic ACh on muscarinic.

**Common traps**

- **Grading spike size.** The action potential is all-or-none; stimulus intensity is coded by firing frequency, not amplitude.
- **Forgetting Na⁺ inactivation.** Repolarization needs Na⁺ channels to inactivate, not just K⁺ channels to open; it sets the refractory period.
- **Every sympathetic ending is NE.** Sweat glands use ACh on muscarinic receptors, and the adrenal medulla secretes epinephrine into blood.
- **Ignoring resting dominance.** A blocker removes one division's input, so its effect depends on which side dominates at rest.

<!-- yield:low -->
**Low-yield extras**

- The Na⁺-channel inactivation gate is pictured as a "ball-and-chain" plug.
<!-- /yield -->`
    }
  ]
};
