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

Set by the **Na⁺/K⁺-ATPase** (pumps 3 Na⁺ out, 2 K⁺ in) plus K⁺ leak channels. The membrane is most permeable to K⁺ at rest, so $V_m$ sits near the K⁺ equilibrium potential.

### The Action Potential — Phases

| Phase | Channel event | Voltage change |
|-------|---------------|----------------|
| Resting | Leak channels | ~ −70 mV |
| Depolarization | Voltage-gated **Na⁺ IN** | rises toward +30 mV |
| Repolarization | Na⁺ inactivate, **K⁺ OUT** | falls |
| Hyperpolarization | K⁺ channels slow to close | undershoots below −70 mV |

### All-or-None & the Refractory Period

- **All-or-none:** above threshold, every AP has the same amplitude; intensity is coded by FREQUENCY, not size.
- **Absolute refractory period:** Na⁺ channels inactivated → no new AP possible (ensures one-way propagation).
- **Relative refractory period:** a stronger-than-normal stimulus can fire (during hyperpolarization).`
    },
    {
      id: 'bbb1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Neurons & Action Potentials** 🎯`,
      exercise: {
        questions: [
          {
            question: `The rising (depolarizing) phase of the action potential is driven primarily by:`,
            options: [`Voltage-gated Na⁺ channels opening and Na⁺ rushing into the cell`, `K⁺ leaving the cell`, `The Na⁺/K⁺-ATPase pumping ions`, `Cl⁻ entering the cell`],
            correctAnswer: 0,
            explanation: `When threshold (~ −55 mV) is reached, voltage-gated Na⁺ channels open and Na⁺ flows IN down its electrochemical gradient, rapidly depolarizing the membrane toward +30 mV. Repolarization is the later K⁺-efflux phase; the ATPase restores gradients but does not drive the spike itself.`
          },
          {
            question: `Because of the all-or-none principle, a neuron encodes the INTENSITY of a stimulus by:`,
            options: [`The frequency of action potentials`, `The amplitude (height) of each action potential`, `The duration of the refractory period`, `The resting membrane potential`],
            correctAnswer: 0,
            explanation: `Each action potential is all-or-none: once threshold is crossed, amplitude is fixed regardless of stimulus strength. A stronger stimulus therefore cannot make a bigger spike — instead it produces MORE spikes per unit time, so intensity is coded by firing FREQUENCY.`
          },
          {
            question: `In a demyelinating disease such as multiple sclerosis, conduction velocity decreases because:`,
            options: [`Loss of myelin disrupts saltatory conduction, so the signal can no longer jump between nodes`, `Action potentials become larger`, `The Na⁺/K⁺-ATPase stops working`, `Threshold becomes more negative`],
            correctAnswer: 0,
            explanation: `Myelin insulates the axon and confines voltage-gated channels to nodes of Ranvier, letting the AP "jump" node to node (saltatory conduction). Demyelination forces slow, continuous conduction and current leak, dramatically slowing or blocking signal transmission — the basis of MS symptoms.`
          }
        ]
      }
    },
    {
      id: 'bbb1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Action Potentials

<details>
<summary><b>Example 1: Predict the effect of a Na⁺-channel blocker</b></summary>

**Question:** A local anesthetic (e.g., lidocaine) blocks voltage-gated Na⁺ channels in a sensory neuron. Predict the effect on action potentials and on pain sensation.

**Solution:**
1. Voltage-gated Na⁺ channels drive the depolarizing (rising) phase. Blocking them prevents the membrane from reaching the AP upstroke. ✓
2. No action potentials can propagate → the sensory signal (pain) never reaches the CNS → numbness. ✓

**MCAT note:** This is exactly how local anesthetics work — they silence the axon by blocking Na⁺ entry.
</details>

<details>
<summary><b>Example 2: Reason about a changed K⁺ gradient</b></summary>

**Question:** Extracellular K⁺ is raised experimentally. Qualitatively, what happens to the resting membrane potential and excitability?

**Solution:**
1. Raising external K⁺ reduces the K⁺ concentration gradient, so K⁺ efflux at rest decreases.
2. The membrane DEPOLARIZES (moves toward less negative). ✓
3. Initially the neuron is closer to threshold (hyperexcitable), but sustained depolarization inactivates Na⁺ channels → eventual loss of excitability (depolarization block). ✓

**Connection:** This is why severe hyperkalemia is dangerous to cardiac and neural tissue.
</details>

<details>
<summary><b>Example 3: Explain why APs travel one direction</b></summary>

**Question:** Why does an action potential propagate down the axon in only one direction rather than back toward the soma?

**Solution:**
1. Behind the advancing AP, Na⁺ channels are INACTIVATED (absolute refractory period). ✓
2. They cannot reopen until the membrane repolarizes, so the region just traversed cannot be re-excited.
3. Only the unexcited region ahead can fire → unidirectional propagation toward the terminals. ✓

**Key idea:** The refractory period enforces one-way, non-decremental signaling.
</details>`
    },
    {
      id: 'bbb1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Signal flow: dendrites → soma → axon hillock (threshold ~ −55 mV) → axon → terminals.
- Resting potential ~ −70 mV set by Na⁺/K⁺-ATPase (3 Na⁺ out / 2 K⁺ in) and K⁺ leak.
- AP: Na⁺ IN (depolarize) → K⁺ OUT (repolarize) → hyperpolarize; all-or-none; intensity coded by FREQUENCY.
- Refractory period ensures one-way conduction; myelin enables fast saltatory conduction (lost in MS).`
    }
  ]
};
