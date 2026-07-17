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
      id: 'bbb2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Synapses & Neurotransmitters** 🎯`,
      exercise: {
        questions: [
          {
            question: `The immediate trigger for neurotransmitter vesicle release at the axon terminal is the influx of:`,
            options: [`$Ca^{2+}$ through voltage-gated calcium channels`, `$Na^{+}$ through leak channels`, `$K^{+}$ through voltage-gated channels`, `$Cl^{-}$ through ligand-gated channels`],
            correctAnswer: 0,
            explanation: `When the action potential reaches the terminal, voltage-gated $Ca^{2+}$ channels open and $Ca^{2+}$ enters. The rise in intracellular $Ca^{2+}$ triggers synaptic vesicles to fuse with the membrane and release neurotransmitter by exocytosis. $Na^{+}$ drives the AP itself, but $Ca^{2+}$ couples it to release.`
          },
          {
            question: `An SSRI antidepressant blocks the serotonin reuptake transporter. The net effect at the synapse is:`,
            options: [`Increased serotonin in the synaptic cleft, prolonging its action`, `Decreased serotonin release`, `Faster degradation of serotonin`, `Blockade of postsynaptic serotonin receptors`],
            correctAnswer: 0,
            explanation: `Reuptake normally clears serotonin from the cleft back into the presynaptic neuron. Blocking the transporter leaves more serotonin in the cleft for longer, enhancing postsynaptic signaling — the mechanism by which SSRIs treat depression.`
          },
          {
            question: `Benzodiazepines enhance the effect of GABA, the brain's main inhibitory neurotransmitter. This produces:`,
            options: [`Increased $Cl^{-}$ influx and hyperpolarization (sedation/anxiolysis)`, `Increased neuronal firing`, `Depolarization toward threshold`, `Blockade of glutamate receptors`],
            correctAnswer: 0,
            explanation: `GABA-A receptors are $Cl^{-}$ channels; opening them lets $Cl^{-}$ in, hyperpolarizing the neuron (an IPSP) and reducing excitability. Benzodiazepines are positive modulators that enhance this $Cl^{-}$ influx, yielding sedation and anxiolysis — the opposite of an excitatory effect.`
          }
        ]
      }
    },
    {
      id: 'bbb2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Synaptic Pharmacology

<details>
<summary><b>Example 1: Predict the effect of an acetylcholinesterase inhibitor</b></summary>

**Question:** A drug inhibits acetylcholinesterase, the enzyme that degrades ACh in the synaptic cleft. Predict the effect at the neuromuscular junction and a clinical use.

**Solution:**
1. Blocking degradation → ACh accumulates and persists in the cleft → prolonged/enhanced cholinergic signaling. ✓
2. At the neuromuscular junction this strengthens muscle activation; clinically, AChE inhibitors treat **myasthenia gravis** (where ACh receptors are reduced) and are used in Alzheimer's. ✓

**MCAT note:** Blocking the degrading enzyme is functionally an indirect AGONIST — more neurotransmitter stays around.
</details>

<details>
<summary><b>Example 2: Classify drugs as agonists or antagonists</b></summary>

**Question:** (a) A drug binds dopamine receptors and activates them. (b) A drug binds dopamine receptors but produces no effect and blocks dopamine. (c) A drug blocks dopamine reuptake. Classify the net effect of each.

**Solution:**
- (a) Activates the receptor → **agonist.** ✓
- (b) Occupies the receptor and blocks signaling → **antagonist.** ✓
- (c) Reuptake blockade leaves more dopamine in the cleft → net **agonist-like (indirect agonist).** ✓

**Connection:** Antipsychotics are dopamine antagonists (reduce mesolimbic dopamine); stimulants like cocaine are reuptake inhibitors (indirect agonists).
</details>

<details>
<summary><b>Example 3: Integrate EPSPs and IPSPs at the axon hillock</b></summary>

**Question:** A neuron simultaneously receives three EPSPs (+5 mV each) and one IPSP (−8 mV) while at −70 mV with threshold −55 mV. Does it fire?

**Solution:**
1. Net change = 3(+5) + (−8) = +15 − 8 = +7 mV.
2. New $V_m$ = −70 + 7 = −63 mV, which is still below threshold (−55 mV). ✓
3. The neuron does NOT fire. ✓

**Key idea:** The axon hillock integrates (spatially and temporally) all EPSPs and IPSPs; only if the net depolarization reaches threshold is an AP generated.
</details>`
    },
    {
      id: 'bbb2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- AP → $Ca^{2+}$ influx → vesicle fusion → NT release; cleared by reuptake, enzymes, or diffusion.
- EPSP ($Na^{+}$ in, depolarize) vs. IPSP ($Cl^{-}$ in / $K^{+}$ out, hyperpolarize); summed at the axon hillock.
- Know the NTs: ACh (muscle/memory; Alzheimer's), dopamine (reward/movement; Parkinson's, schizophrenia), serotonin (mood; SSRIs), GABA (main inhibitory; benzos), glutamate (main excitatory; LTP).
- Agonist mimics/enhances; antagonist blocks; reuptake/enzyme inhibitors act as indirect agonists.`
    }
  ]
};
