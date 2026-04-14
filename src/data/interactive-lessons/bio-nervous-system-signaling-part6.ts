export const bioNervousSystemSignalingPart6Data = {
  topicSlug: 'nervous-system-signaling',
  sections: [
    {
      id: 'ner6-intro',
      type: 'text' as const,
      content: `# Neurotransmitters & Drug Effects

**Part 6 of 7 — Nervous System Signaling**

Neurotransmitters are the chemical messengers of the nervous system. Each has specific roles, receptors, and mechanisms of removal. Understanding how drugs and toxins alter neurotransmitter function is a frequent AP Biology topic.

### Major Neurotransmitters

| Neurotransmitter | Type | Function | Location |
|---|---|---|---|
| **Acetylcholine (ACh)** | Excitatory (usually) | Muscle contraction; memory and attention in CNS | Neuromuscular junction; CNS synapses |
| **Glutamate** | Excitatory | Main excitatory NT in CNS; learning & memory | Throughout CNS |
| **GABA** | Inhibitory | Main inhibitory NT in CNS; reduces neural activity | Throughout CNS |
| **Dopamine** | Excitatory/Modulatory | Reward, motivation, motor control | Basal ganglia; limbic system |
| **Serotonin** | Modulatory | Mood, sleep, appetite, body temperature | Raphe nuclei; widespread CNS |
| **Norepinephrine** | Excitatory | Alertness, fight-or-flight response; attention | Locus coeruleus; sympathetic nervous system |
| **Endorphins** | Modulatory | Natural painkillers; reduce pain perception | CNS pain pathways |

### Neurotransmitter Removal from the Synaptic Cleft

After neurotransmitter release, the signal must be terminated. Three mechanisms accomplish this:

1. **Reuptake** — Transporter proteins in the presynaptic membrane pump the neurotransmitter back into the axon terminal for recycling (e.g., serotonin reuptake by SERT).
2. **Enzymatic degradation** — Enzymes in the cleft break down the neurotransmitter (e.g., acetylcholinesterase breaks down ACh).
3. **Diffusion** — Neurotransmitter drifts away from the cleft and is no longer effective.
`
    },
    {
      id: 'ner6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Neurotransmitter Basics** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which neurotransmitter is the primary excitatory neurotransmitter in the central nervous system?',
            options: [
              'GABA',
              'Dopamine',
              'Glutamate',
              'Serotonin'
            ],
            correctAnswer: 2,
            explanation: 'Glutamate is the most abundant excitatory neurotransmitter in the CNS. It plays essential roles in learning, memory, and synaptic plasticity. GABA is the main inhibitory neurotransmitter. Dopamine and serotonin are modulatory neurotransmitters with more specific roles.'
          },
          {
            question: 'After acetylcholine (ACh) is released at the neuromuscular junction, it is primarily removed from the synaptic cleft by:',
            options: [
              'Reuptake into the presynaptic terminal',
              'Diffusion away from the cleft into the bloodstream',
              'Enzymatic degradation by acetylcholinesterase (AChE)',
              'Absorption by postsynaptic muscle cells'
            ],
            correctAnswer: 2,
            explanation: 'Acetylcholinesterase (AChE) is an enzyme located in the synaptic cleft at the neuromuscular junction. It rapidly breaks down ACh into acetate and choline, terminating the signal. The choline is then recycled via reuptake into the presynaptic terminal for new ACh synthesis.'
          }
        ]
      }
    },
    {
      id: 'ner6-drugs',
      type: 'text' as const,
      content: `## Drugs & Toxins Affecting Synaptic Function

Drugs and toxins can alter synaptic transmission at multiple points. Understanding these mechanisms is critical for AP Biology.

### Agonists vs. Antagonists

- **Agonist** — Mimics or enhances the effect of a neurotransmitter (increases signaling).
- **Antagonist** — Blocks or reduces the effect of a neurotransmitter (decreases signaling).

### Important Examples for AP Biology

| Substance | Mechanism | Effect |
|---|---|---|
| **Curare** | Blocks ACh receptors at neuromuscular junction (antagonist) | Paralysis — muscles cannot contract |
| **Nerve gas (sarin)** | Inhibits acetylcholinesterase (AChE inhibitor) | ACh accumulates → continuous muscle stimulation → paralysis, death |
| **Botulinum toxin (Botox)** | Prevents ACh vesicle release from presynaptic terminal | Muscle paralysis (blocks release) |
| **Tetrodotoxin (TTX)** | Blocks voltage-gated Na⁺ channels on axons | Blocks action potential propagation → paralysis |
| **SSRIs (e.g., Prozac)** | Block serotonin reuptake transporters | Serotonin stays in cleft longer → enhanced serotonin signaling |
| **Cocaine** | Blocks dopamine reuptake transporters | Dopamine accumulates in cleft → intense pleasure/reward |
| **Nicotine** | Binds to and activates ACh receptors (agonist) | Mimics ACh → stimulation of CNS and sympathetic pathways |
| **Benzodiazepines (e.g., Valium)** | Enhance GABA receptor activity (positive allosteric modulator) | Increased inhibition → sedation, anxiety relief |
| **Atropine** | Blocks muscarinic ACh receptors (antagonist) | Reduces parasympathetic activity → dilated pupils, increased heart rate |

### Framework for Predicting Drug Effects

When analyzing an unfamiliar drug on the AP exam, ask:

1. **What step** in synaptic transmission does it affect? (release, receptor binding, reuptake, degradation)
2. **Does it increase or decrease** neurotransmitter signaling?
3. **Which neurotransmitter** is affected?
4. **What is the normal function** of that neurotransmitter?
5. **Predict the physiological effect** based on answers 1–4.
`
    },
    {
      id: 'ner6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Drugs & Toxins** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A drug that blocks the reuptake of serotonin from the synaptic cleft would most likely:',
            options: [
              'Decrease serotonin signaling by removing serotonin from the cleft faster',
              'Increase serotonin signaling by allowing serotonin to remain in the cleft longer',
              'Have no effect because serotonin is degraded by enzymes instead',
              'Block serotonin production in the presynaptic neuron'
            ],
            correctAnswer: 1,
            explanation: 'Blocking reuptake prevents serotonin from being recycled back into the presynaptic neuron. Serotonin remains in the synaptic cleft for a longer time and continues to bind postsynaptic receptors, enhancing serotonin signaling. This is the mechanism of SSRIs (Selective Serotonin Reuptake Inhibitors) used to treat depression.'
          },
          {
            question: 'Nerve gas inhibits acetylcholinesterase. Which of the following would result from nerve gas exposure?',
            options: [
              'ACh would be broken down too quickly, preventing muscle contraction',
              'ACh would accumulate in the synaptic cleft, causing continuous muscle stimulation and eventual paralysis',
              'ACh would be prevented from binding to its receptors',
              'ACh production would stop completely'
            ],
            correctAnswer: 1,
            explanation: 'Acetylcholinesterase normally breaks down ACh in the synaptic cleft, terminating the signal. Inhibiting this enzyme causes ACh to accumulate, continuously stimulating postsynaptic receptors. At the neuromuscular junction, this leads to sustained muscle contraction, followed by fatigue and paralysis. This can be fatal if respiratory muscles are affected.'
          }
        ]
      }
    },
    {
      id: 'ner6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Neurotransmitters & Drugs** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The main inhibitory neurotransmitter in the CNS is ___.',
            options: ['glutamate', 'GABA', 'dopamine', 'acetylcholine']
          },
          {
            label: "A drug that mimics or enhances a neurotransmitter's effect is called an ___.",
            options: ['antagonist', 'agonist', 'inhibitor', 'transporter']
          },
          {
            label: 'Curare causes paralysis by ___ ACh receptors at the neuromuscular junction.',
            options: ['activating', 'blocking', 'degrading', 'producing']
          },
          {
            label: 'After release, neurotransmitters are removed from the cleft by reuptake, ___, or diffusion.',
            options: ['exocytosis', 'osmosis', 'enzymatic degradation', 'active transport']
          }
        ],
        correctAnswers: ['GABA', 'agonist', 'blocking', 'enzymatic degradation'],
        hint1: 'GABA and glutamate are the main inhibitory and excitatory NTs, respectively.',
        hint2: 'Agonist = activates; antagonist = blocks.',
        hint3: 'Curare is a competitive antagonist — it occupies the ACh binding site but does not activate the receptor.',
        explanation: 'GABA is the main inhibitory neurotransmitter in the CNS. Agonists mimic neurotransmitters; antagonists block them. Curare blocks ACh receptors (antagonist), causing paralysis. The three removal mechanisms are reuptake (transporter-mediated), enzymatic degradation (e.g., AChE for ACh), and passive diffusion away from the cleft.'
      }
    },
    {
      id: 'ner6-summary',
      type: 'text' as const,
      content: `## Part 6 Summary — Neurotransmitters & Drug Effects

### Key Takeaways
1. **Glutamate** is the main excitatory NT; **GABA** is the main inhibitory NT in the CNS.
2. **Acetylcholine** is critical at the neuromuscular junction and in the CNS for learning/memory.
3. **Dopamine** (reward), **serotonin** (mood), and **norepinephrine** (alertness) are modulatory neurotransmitters.
4. Neurotransmitters are removed by **reuptake**, **enzymatic degradation**, or **diffusion**.
5. **Agonists** enhance signaling; **antagonists** block it. Know key examples: curare (ACh antagonist), nerve gas (AChE inhibitor), SSRIs (serotonin reuptake blocker), cocaine (dopamine reuptake blocker).
6. Use the 5-step framework to predict the effects of any unfamiliar drug on the AP exam.

### AP Exam Connection
- Drug mechanism questions are very common — learn to trace the effect from molecular mechanism to physiological outcome.
- Distinguish between drugs that affect release, receptor binding, reuptake, and degradation.
- Be ready to predict what happens when a neurotransmitter's effect is enhanced or blocked.

**Next up:** Part 7 — AP Exam Practice Problems
`
    }
  ]
};