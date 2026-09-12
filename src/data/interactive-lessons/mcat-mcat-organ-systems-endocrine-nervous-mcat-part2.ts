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
2. **Rising phase:** voltage-gated **Na$^+$ channels** open → Na$^+$ rushes in → potential shoots toward $E_{Na}$ (~ +40 mV). Positive feedback: depolarization opens more Na$^+$ channels.
3. **Falling phase:** Na$^+$ channels **inactivate** (ball-and-chain plug); slower voltage-gated **K$^+$ channels** open → K$^+$ exits → repolarization.
4. **Hyperpolarization:** K$^+$ channels close slowly → brief overshoot below rest, then leak channels restore −70 mV.

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
      id: 'endn2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Neurons & Synapses** 🎯`,
      exercise: {
        questions: [
          {
            question: `A toxin selectively prevents the inactivation of voltage-gated sodium channels. Its immediate effect on a neuron's action potential is:`,
            options: [`Failure to reach threshold, silencing the neuron`, `Prolonged depolarization with failure to repolarize normally`, `Faster repolarization due to enhanced potassium efflux`, `Deeper hyperpolarization after each spike`],
            correctAnswer: 1,
            explanation: `Repolarization requires BOTH Na$^+$-channel inactivation (stopping the inward rush) and delayed K$^+$ efflux. If Na$^+$ channels stay open, inward current persists and the membrane lingers near the sodium equilibrium potential — a prolonged spike (this is how some shellfish and scorpion toxins work). The refractory period, which depends on inactivation, is also lost.`
          },
          {
            question: `An inhibitory synapse opens chloride channels on the postsynaptic dendrite. This inhibits firing because chloride entry:`,
            options: [`Depolarizes the axon hillock directly`, `Blocks calcium channels in the presynaptic terminal`, `Holds the membrane at or below resting potential, so summed EPSPs are less likely to reach threshold at the hillock`, `Destroys excitatory neurotransmitter in the cleft`],
            correctAnswer: 2,
            explanation: `Cl$^-$ influx produces an IPSP — a graded hyperpolarization (or clamping near rest) that algebraically subtracts from concurrent EPSPs during spatial summation. The axon hillock's ledger determines firing; inhibition works by keeping that sum under the ~-55 mV threshold, not by acting on the presynaptic cell or the transmitter itself.`
          },
          {
            question: `Both sympathetic and parasympathetic preganglionic neurons release the same neurotransmitter onto the same receptor type. That signal is:`,
            options: [`Acetylcholine on nicotinic receptors`, `Norepinephrine on beta-1 receptors`, `Acetylcholine on muscarinic receptors`, `Epinephrine on alpha receptors`],
            correctAnswer: 0,
            explanation: `Every autonomic ganglion — sympathetic or parasympathetic — is a cholinergic NICOTINIC synapse (as is the neuromuscular junction). The branches diverge only at the final effector synapse: sympathetic postganglionics release norepinephrine onto adrenergic receptors, parasympathetic postganglionics release ACh onto MUSCARINIC receptors. A ganglionic nicotinic blocker therefore silences both divisions at once.`
          }
        ]
      }
    },
    {
      id: 'endn2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Membranes to Circuits

<details>
<summary><b>Example 1: Predict the effect of high extracellular potassium</b></summary>

**Question:** A lab error doubles the extracellular K$^+$ concentration bathing a neuron. Predict the resting potential and initial excitability.

**Solution:**
1. $E_K = 61 \\log_{10}([K]_{out}/[K]_{in})$: raising $[K]_{out}$ makes the ratio less extreme → $E_K$ less negative.
2. The resting membrane, being mostly K$^+$-permeable, **depolarizes** toward the new $E_K$.
3. Initially the cell sits closer to threshold (hyperexcitable) — but sustained depolarization inactivates Na$^+$ channels, ultimately making the cell UNexcitable. ✓ (This biphasic logic is why potassium disturbances cause both arrhythmias and cardiac arrest.)
</details>

<details>
<summary><b>Example 2: Localize the lesion from conduction data</b></summary>

**Question:** In a demyelinating disease, a motor axon's conduction velocity drops from 60 m/s to 10 m/s, though the axon itself is intact and the muscle responds to direct stimulation. Explain the slowing.

**Solution:**
1. Myelin lets current flow passively and rapidly between nodes of Ranvier, regenerating the spike only at nodes (saltatory conduction).
2. Losing myelin forces continuous regeneration along leaky membrane — slow, and current may dissipate below threshold between former nodes (conduction block).
3. Axon and synapse are healthy: the deficit is purely in the cable's insulation — the pattern of multiple sclerosis (CNS oligodendrocytes) or Guillain-Barré (PNS Schwann cells). ✓
</details>

<details>
<summary><b>Example 3: Autonomic pharmacology grid</b></summary>

**Question:** Predict heart rate after each drug: (a) atropine (muscarinic blocker), (b) propranolol (beta blocker), (c) a nicotinic ganglionic blocker — in a resting subject whose vagal tone dominates the SA node.

**Solution:**
1. (a) Atropine removes the dominant vagal brake → HR **rises** toward the SA node's intrinsic ~100 bpm.
2. (b) Propranolol removes sympathetic accelerator, minor at rest → HR **falls slightly**.
3. (c) Ganglionic blockade silences BOTH divisions → the net effect equals removing the LARGER influence: at rest that's vagal → HR **rises** toward intrinsic rate. ✓

**Method:** identify which division dominates the organ at baseline; the response to any blocker is "subtract that input."
</details>`
    },
    {
      id: 'endn2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Resting potential ≈ −70 mV: Na⁺/K⁺-ATPase builds gradients; K⁺ leak dominates, holding the membrane near $E_K$. Potential always moves toward the equilibrium potential of the most permeable ion.
- Action potential: Na⁺ in (rise, positive feedback) → Na⁺ inactivation + delayed K⁺ out (fall) → hyperpolarization. All-or-none; intensity = frequency; refractory periods enforce one-way travel; myelin + nodes = saltatory speed.
- Synapse: Ca²⁺-triggered vesicle release; EPSPs/IPSPs are graded and summed (temporal + spatial) at the axon hillock; termination by reuptake, AChE, or diffusion.
- Autonomic wiring: all ganglia = ACh/nicotinic; sympathetic endings = NE (adrenal medulla broadcasts epinephrine hormonally); parasympathetic endings = ACh/muscarinic; most organs get antagonistic dual input — know which side dominates at rest.`
    }
  ]
};
