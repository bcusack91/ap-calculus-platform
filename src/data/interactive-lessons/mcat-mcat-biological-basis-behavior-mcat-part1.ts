export const mcatBioBasisBehaviorPart1Data = {
  topicSlug: 'mcat-biological-basis-behavior-mcat',
  sections: [
    {
      id: 'bbb1-intro',
      type: 'text' as const,
      content: `# Biological Basis of Behavior

**Part 1 of 5 — Neurons & the Action Potential**

### Neuron Structure & Signal Flow

$$\\text{Dendrites} \\to \\text{Cell body (soma)} \\to \\text{Axon hillock} \\to \\text{Axon} \\to \\text{Axon terminals}$$

- **Dendrites** receive input; the **axon hillock** sums inputs and initiates the action potential if threshold (~ −55 mV) is reached.
- **Myelin** (oligodendrocytes in CNS, Schwann cells in PNS) speeds conduction via **saltatory conduction** (jumping node to node).

### Resting Membrane Potential (~ −70 mV)

Set by the **$Na^{+}/K^{+}$-ATPase** (pumps 3 $Na^{+}$ out, 2 $K^{+}$ in) plus $K^{+}$ leak channels. The membrane is most permeable to $K^{+}$ at rest, so $V_m$ sits near the $K^{+}$ equilibrium potential.

### The Action Potential — Phases

| Phase | Channel event | Voltage change |
|-------|---------------|----------------|
| Resting | Leak channels | ~ −70 mV |
| Depolarization | Voltage-gated **$Na^{+}$ IN** | rises toward +30 mV |
| Repolarization | $Na^{+}$ inactivate, **$K^{+}$ OUT** | falls |
| Hyperpolarization | $K^{+}$ channels slow to close | undershoots below −70 mV |

### All-or-None & the Refractory Period

- **All-or-none:** above threshold, every AP has the same amplitude; intensity is coded by FREQUENCY, not size.
- **Absolute refractory period:** $Na^{+}$ channels inactivated → no new AP possible (ensures one-way propagation).
- **Relative refractory period:** a stronger-than-normal stimulus can fire (during hyperpolarization).`
    },
    {
      id: 'bbb1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Action Potentials

**Problem 1.** A local anesthetic (e.g., lidocaine) blocks voltage-gated $Na^{+}$ channels in a sensory neuron that carries pain signals.

- **(a)** Which phase of the action potential depends on the blocked channels?
- **(b)** Can the neuron still generate and propagate action potentials?
- **(c)** What does the patient feel, and why?

**(a) The upstroke.** Voltage-gated $Na^{+}$ channels drive the depolarizing (rising) phase. With them blocked, the membrane cannot produce the AP upstroke.

**(b) No propagation.** Without the upstroke, no action potential is generated or conducted along the axon.

**(c) Numbness.** The pain signal never reaches the CNS. This is exactly how local anesthetics work: they silence the axon by blocking $Na^{+}$ entry.

**Problem 2.** In an experiment, the extracellular $K^{+}$ concentration around a neuron is raised.

- **(a)** What happens to the $K^{+}$ gradient and to $K^{+}$ efflux at rest?
- **(b)** Which way does the resting membrane potential move?
- **(c)** How does excitability change at first?
- **(d)** What happens to excitability if the change is sustained?

**(a) Smaller gradient.** Raising external $K^{+}$ reduces the $K^{+}$ concentration gradient, so less $K^{+}$ leaks out at rest.

**(b) Depolarization.** With less $K^{+}$ efflux, the membrane becomes less negative: it depolarizes.

**(c) Hyperexcitable.** The depolarized membrane sits closer to threshold, so at first the neuron fires more easily.

**(d) Depolarization block.** Sustained depolarization inactivates $Na^{+}$ channels, so excitability is eventually lost. This is why severe hyperkalemia is dangerous to cardiac and neural tissue.

**Problem 3.** An action potential is travelling down an axon, away from the soma and toward the axon terminals.

- **(a)** What state are the $Na^{+}$ channels in just behind the advancing AP?
- **(b)** Can the patch of membrane just traversed fire again right away?
- **(c)** Which way, then, can the AP propagate?

**(a) Inactivated.** Behind the advancing AP, $Na^{+}$ channels are INACTIVATED: this is the absolute refractory period.

**(b) No.** The inactivated $Na^{+}$ channels cannot reopen until the membrane repolarizes, so the region just traversed cannot be re-excited.

**(c) One way only.** Only the unexcited membrane ahead can fire, so the AP travels toward the terminals, never back toward the soma. The refractory period enforces one-way travel; regeneration at each patch keeps the AP non-decremental.`
    },
    {
      id: 'bbb1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Neurons & Action Potentials** 🎯`,
      exercise: {
        questions: [
          {
            question: `A toxin blocks voltage-gated $K^{+}$ channels, while voltage-gated $Na^{+}$ channels keep working normally. The most direct effect on the action potential is that:`,
            options: [`Repolarization slows, so each spike is prolonged`, `The depolarizing upstroke can no longer occur`, `The resting potential becomes far more negative`, `Spike amplitude shrinks as it travels the axon`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `Repolarization depends on $K^{+}$ flowing OUT through voltage-gated $K^{+}$ channels. With them blocked, the membrane returns toward rest only slowly, so each spike is prolonged (and the undershoot shrinks). The upstroke is driven by voltage-gated $Na^{+}$ channels, which still work, so it still occurs. The resting potential is set mainly by $K^{+}$ leak channels and the pump, so it does not become far more negative. And an AP is regenerated at full, all-or-none size as it travels, so its amplitude does not shrink along the axon.`
          },
          {
            question: `Because of the all-or-none principle, a neuron encodes the INTENSITY of a stimulus by:`,
            options: [`The frequency of action potentials`, `The amplitude (height) of each action potential`, `The duration of the refractory period`, `The resting membrane potential`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Each action potential is all-or-none: once threshold is crossed, amplitude is fixed regardless of stimulus strength. A stronger stimulus therefore cannot make a bigger spike — instead it produces MORE spikes per unit time, so intensity is coded by firing FREQUENCY.`
          },
          {
            question: `In a demyelinating disease such as multiple sclerosis, conduction velocity decreases because:`,
            options: [`Saltatory conduction between nodes is disrupted`, `Action potential amplitude increases at each node`, `The $Na^{+}/K^{+}$-ATPase stops working`, `Threshold becomes more negative along the axon`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Myelin insulates the axon and confines voltage-gated channels to nodes of Ranvier, letting the AP "jump" node to node (saltatory conduction). Demyelination forces slow, continuous conduction and current leak, dramatically slowing or blocking signal transmission — the basis of MS symptoms.`
          }
        ]
      }
    },
    {
      id: 'bbb1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Signal flow.** Dendrites → soma → axon hillock (fires at ~ −55 mV) → axon → terminals; myelin speeds conduction.
- **Resting potential.** About −70 mV, set by the $Na^{+}/K^{+}$-ATPase (3 $Na^{+}$ out, 2 $K^{+}$ in) and $K^{+}$ leak channels.
- **AP phases.** $Na^{+}$ in depolarizes, $K^{+}$ out repolarizes, and slow-closing $K^{+}$ channels cause the undershoot.
- **All-or-none, one way.** Every AP is the same size, so intensity is coded by frequency; refractoriness keeps APs one-way.

**Common traps**

- **Bigger spikes for stronger stimuli.** Amplitude is fixed above threshold; a stronger stimulus raises firing frequency instead.
- **The pump drives the spike.** The $Na^{+}/K^{+}$-ATPase maintains gradients; voltage-gated $Na^{+}$ channels drive the upstroke.
- **Raised outside $K^{+}$ hyperpolarizes.** More external $K^{+}$ shrinks the $K^{+}$ gradient, so the membrane depolarizes instead.
- **Nothing fires while refractory.** Only the absolute period blocks every AP; in the relative one a stronger-than-normal stimulus fires.`
    }
  ]
};
