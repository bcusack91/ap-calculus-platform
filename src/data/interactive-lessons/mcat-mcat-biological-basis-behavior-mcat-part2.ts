export const mcatBioBasisBehaviorPart2Data = {
  topicSlug: 'mcat-biological-basis-behavior-mcat',
  sections: [
    {
      id: 'bbb2-intro',
      type: 'text' as const,
      content: `# Biological Basis of Behavior

**Part 2 of 5 — Synapses & Neurotransmitters**

### Synaptic Transmission Steps

$$\\text{AP at terminal} \\to \\text{voltage-gated } Ca^{2+} \\text{ IN} \\to \\text{vesicle fusion} \\to \\text{NT release} \\to \\text{receptor binding} \\to \\text{postsynaptic potential}$$

- $Ca^{2+}$ influx is the trigger for vesicle exocytosis.
- Signal terminated by **reuptake** (transporters), **enzymatic degradation**, or **diffusion**.

### EPSPs vs. IPSPs

| Potential | Ion movement | Effect |
|-----------|--------------|--------|
| **EPSP** (excitatory) | $Na^{+}$ in (depolarize) | Toward threshold |
| **IPSP** (inhibitory) | $Cl^{-}$ in / $K^{+}$ out (hyperpolarize) | Away from threshold |

**Summation:** temporal (rapid succession from one input) + spatial (many inputs at once) determine whether the axon hillock reaches threshold.

### High-Yield Neurotransmitters

| Neurotransmitter | Major roles | Clinical link |
|------------------|-------------|---------------|
| **Acetylcholine (ACh)** | Muscle contraction, memory, PNS | ↓ in Alzheimer's; myasthenia gravis |
| **Dopamine** | Reward, movement, motivation | ↓ Parkinson's; ↑ schizophrenia (mesolimbic) |
| **Serotonin (5-HT)** | Mood, sleep, appetite | ↓ depression (SSRIs raise it) |
| **Norepinephrine** | Alertness, arousal, fight-or-flight | Mood, anxiety |
| **GABA** | Main INHIBITORY (CNS) | Anxiolytics (benzodiazepines) |
| **Glutamate** | Main EXCITATORY (CNS), LTP | Excitotoxicity |
| **Endorphins** | Natural pain relief | Opioid receptors |

### Agonists vs. Antagonists

- **Agonist:** mimics/enhances the neurotransmitter's effect.
- **Antagonist:** blocks the receptor or the neurotransmitter's action.
- Drugs can act by altering synthesis, release, reuptake, or degradation.`
    },
    {
      id: 'bbb2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Synaptic Pharmacology

**Problem 1.** A neuron at −70 mV (threshold −55 mV) simultaneously receives three EPSPs of +5 mV each and one IPSP of −8 mV.

- **(a)** What is the net change in membrane potential?
- **(b)** What is the new membrane potential?
- **(c)** Does the neuron fire?

**(a) Net change.** 3(+5) + (−8) = +15 − 8 = +7 mV.

**(b) New potential.** With the +7 mV from (a): $V_m$ = −70 + 7 = −63 mV.

**(c) No action potential.** −63 mV is still below the −55 mV threshold. The axon hillock integrates all EPSPs and IPSPs, spatially and temporally; only a net depolarization that reaches threshold fires an AP.

**Problem 2.** Three drugs act at dopamine synapses. Drug X binds dopamine receptors and activates them. Drug Y binds the same receptors but does not activate them. Drug Z blocks dopamine reuptake.

- **(a)** Is Drug X an agonist or an antagonist?
- **(b)** How should Drug Y be classified?
- **(c)** What is Drug Z's net effect on dopamine signaling?
- **(d)** Which drug type describes antipsychotics, and which describes cocaine?

**(a) Agonist.** X activates the receptor, so it is an agonist.

**(b) Antagonist.** Y occupies the receptor without activating it, so dopamine cannot bind and signal there: Y is an antagonist.

**(c) Indirect agonist.** Blocking reuptake leaves more dopamine in the cleft, so Z's net effect is agonist-like.

**(d) Applying it.** Antipsychotics are dopamine antagonists that reduce mesolimbic dopamine signaling, like Y. Stimulants such as cocaine are reuptake inhibitors (indirect agonists), like Z.

**Problem 3.** A drug inhibits acetylcholinesterase (AChE), the enzyme that degrades ACh in the synaptic cleft.

- **(a)** What happens to ACh in the cleft?
- **(b)** How does this change signaling at the neuromuscular junction?
- **(c)** What clinical uses follow from this effect?
- **(d)** Is the drug functionally an agonist or an antagonist?

**(a) ACh accumulates.** With degradation blocked, ACh builds up and persists in the cleft.

**(b) Stronger activation.** Cholinergic signaling is prolonged and enhanced, which strengthens muscle activation at the neuromuscular junction.

**(c) Clinical uses.** AChE inhibitors treat **myasthenia gravis**, where ACh receptors are reduced, and are used in Alzheimer's disease.

**(d) Indirect agonist.** Blocking the degrading enzyme leaves more neurotransmitter around, so the drug acts as an indirect AGONIST.`
    },
    {
      id: 'bbb2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Synapses & Neurotransmitters** 🎯`,
      exercise: {
        questions: [
          {
            question: `The immediate trigger for neurotransmitter vesicle release at the axon terminal is the influx of:`,
            options: [`$Ca^{2+}$ through voltage-gated channels`, `$Na^{+}$ through voltage-gated channels`, `$Mg^{2+}$ through NMDA receptor channels`, `$Cl^{-}$ through GABA-A receptor channels`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `When the action potential reaches the terminal, voltage-gated $Ca^{2+}$ channels open and $Ca^{2+}$ enters. The rise in intracellular $Ca^{2+}$ triggers synaptic vesicles to fuse with the membrane and release neurotransmitter by exocytosis. $Na^{+}$ drives the AP itself, but $Ca^{2+}$ couples it to release. $Mg^{2+}$ normally blocks NMDA receptor channels rather than triggering exocytosis.`
          },
          {
            question: `Reserpine blocks the transporter that loads serotonin and other monoamines into synaptic vesicles, so the unpackaged transmitter is broken down in the cytoplasm. The net effect at serotonin synapses is:`,
            options: [`Less serotonin is released per action potential`, `More serotonin remains in the synaptic cleft`, `Serotonin reuptake into the terminal is blocked`, `Postsynaptic serotonin receptors are activated`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Only transmitter packed into vesicles can be released by exocytosis. With vesicle loading blocked, the vesicles run low, so each action potential releases less serotonin and signaling falls: reserpine acts as an indirect antagonist. More serotonin remaining in the cleft and blocked reuptake describe an SSRI, which works in the opposite direction. Reserpine does not act on the postsynaptic receptors at all, and with less release they are activated less, not more.`
          },
          {
            question: `Benzodiazepines enhance the effect of GABA, the brain's main inhibitory neurotransmitter. This produces:`,
            options: [`Increased $Cl^{-}$ influx and hyperpolarization`, `Increased $Na^{+}$ influx and depolarization`, `Decreased $Na^{+}$ influx and hyperpolarization`, `Decreased $Cl^{-}$ influx and depolarization`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `GABA-A receptors are $Cl^{-}$ channels; opening them lets $Cl^{-}$ in, hyperpolarizing the neuron (an IPSP) and reducing excitability. Benzodiazepines are positive modulators that enhance this $Cl^{-}$ influx, yielding sedation and anxiolysis — the opposite of an excitatory effect. They act on the GABA-A chloride channel, not on $Na^{+}$ channels, so options built on changes in $Na^{+}$ influx describe the wrong mechanism.`
          }
        ]
      }
    },
    {
      id: 'bbb2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Release and clearance.** $Ca^{2+}$ influx at the terminal triggers vesicle release; reuptake, enzymes, or diffusion end the signal.
- **EPSPs vs. IPSPs.** EPSPs ($Na^{+}$ in) depolarize; IPSPs ($Cl^{-}$ in or $K^{+}$ out) hyperpolarize; the hillock sums them.
- **Key transmitters.** Glutamate excites, GABA inhibits; dopamine (reward, movement), serotonin (mood), ACh (muscle, memory; ↓ in Alzheimer's).
- **Agonists and antagonists.** Agonists mimic or enhance a transmitter, antagonists block it; reuptake or enzyme blockers are indirect agonists.

**Common traps**

- **$Na^{+}$ triggers release.** $Na^{+}$ carries the AP, but $Ca^{2+}$ entering the terminal is what triggers exocytosis.
- **Reuptake blockers as antagonists.** Blocking reuptake or degradation leaves more transmitter in the cleft: an indirect agonist.
- **Parkinson's means excess dopamine.** Parkinson's reflects too little dopamine; schizophrenia is linked to too much mesolimbic dopamine.
- **Only EPSPs count.** Add every input, IPSPs included; the neuron fires only if the net potential reaches threshold.`
    }
  ]
};
