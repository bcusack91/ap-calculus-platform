export const psychBrainPart2Data = {
  topicSlug: 'biological-bases-brain',
  sections: [
    {
      id: 'biological-bases-brain-p2-s1-intro',
      type: 'text' as const,
      content: `# 🧠 Biological Bases and Brain

**Part 2 of 7 — Neurotransmitters and Psychoactive Drugs**

---

| Section |
|---------|
| Crossing the synapse, step by step |
| Excitatory vs. inhibitory messages |
| The eight neurotransmitters on the AP exam |
| Agonists, antagonists and reuptake inhibitors |
| Drug classes, tolerance, addiction and withdrawal |

> 🔑 **Key Concept:** Part 1 followed a message **down** one neuron. This part follows it **across** the synapse to the next one. Neurotransmitters carry the message, and almost every psychoactive drug works by changing what happens at that gap.

### Crossing the synapse

1. An action potential reaches the **terminal buttons**.
2. Tiny sacs release **neurotransmitter** molecules into the **synaptic gap**.
3. The molecules bind to **receptor sites** on the receiving neuron, fitting like a key in a lock. Only the matching neurotransmitter fits a given receptor.
4. The binding sends an **excitatory** or **inhibitory** message.
5. Leftover neurotransmitter is cleared, mostly by **reuptake**: the sending neuron reabsorbs it so it can be reused.

| Message type | Effect on the receiving neuron | Everyday picture |
|---|---|---|
| **Excitatory** | Makes an action potential **more** likely | Pressing the gas pedal |
| **Inhibitory** | Makes an action potential **less** likely | Pressing the brake |

Whether the receiving neuron fires depends on the **sum** of all excitatory and inhibitory messages arriving at once. Whether it passes threshold is still all-or-none.`
    },
    {
      id: 'biological-bases-brain-p2-s2-nt-table',
      type: 'text' as const,
      content: `## The eight neurotransmitters you need

The CED limits AP Psychology to these eight. A neurotransmitter's job can depend on **where** in the nervous system it acts, so learn each one's main links.

| Neurotransmitter | Main roles | Linked conditions and examples |
|---|---|---|
| **Acetylcholine (ACh)** | Muscle movement at the nerve–muscle junction; learning and memory | Myasthenia gravis blocks its receptors; loss of ACh-producing neurons is linked to Alzheimer's disease |
| **Dopamine** | Movement, reward, motivation, attention | Too little in movement pathways → Parkinson's disease tremors; too much activity → linked to schizophrenia symptoms |
| **Serotonin** | Mood, hunger, sleep, arousal | Low levels linked to depression; many antidepressants raise its availability |
| **Norepinephrine** | Alertness and arousal; readies the body for action | Low levels linked to depressed mood |
| **Glutamate** | The main **excitatory** neurotransmitter; memory formation | Excess can overexcite the brain, linked to seizures and migraines |
| **GABA** | The main **inhibitory** neurotransmitter; calms neural activity | Too little linked to anxiety, seizures and insomnia |
| **Endorphins** | The body's natural pain relief and pleasure | "Runner's high"; opioid drugs mimic them |
| **Substance P** | Carries **pain** signals to the brain | Endorphins reduce its release, dulling pain |

### Two pairs worth memorizing

- **Glutamate vs. GABA:** the brain's main accelerator vs. main brake.
- **Substance P vs. endorphins:** the pain messenger vs. the pain reliever.`
    },
    {
      id: 'biological-bases-brain-p2-s3-check',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Neurotransmitters** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A patient develops tremors and slowed movement after neurons in a midbrain pathway that produce one neurotransmitter die off. Loss of which neurotransmitter best accounts for these symptoms?',
            options: [
              'Serotonin',
              'GABA',
              'Endorphins',
              'Dopamine'
            ],
            correctAnswer: 3,
            explanation: 'Parkinson\'s disease involves the death of dopamine-producing neurons in movement pathways, causing tremors and slowed movement. Serotonin is tied to mood, GABA to inhibition and endorphins to pain relief.'
          },
          {
            question: 'A new drug makes the brain\'s main inhibitory neurotransmitter more effective. A person taking it would most likely show:',
            options: [
              'Heightened alertness and a faster pulse',
              'Calmer behavior and less anxiety',
              'Stronger muscle contractions and twitching',
              'Increased hunger and cravings for sweets'
            ],
            correctAnswer: 1,
            explanation: 'Boosting GABA, the main inhibitory neurotransmitter, reduces neural firing and produces calming, anxiety-reducing effects. Alertness and twitching would follow from more excitation, not more inhibition.'
          },
          {
            question: 'After a neuron releases serotonin, some of the serotonin is pulled back into the sending neuron\'s terminal buttons. This process is called:',
            options: [
              'Reuptake',
              'Agonism',
              'Depolarization',
              'Myelination'
            ],
            correctAnswer: 0,
            explanation: 'Reuptake is the sending neuron reabsorbing leftover neurotransmitter from the synapse. Depolarization is the charge change during firing, and agonism describes a drug that boosts a neurotransmitter\'s effect.'
          }
        ]
      }
    },
    {
      id: 'biological-bases-brain-p2-s4-drugs',
      type: 'text' as const,
      content: `## How drugs act at the synapse

**Psychoactive drugs** change perception, mood, thinking or behavior. The CED groups their synaptic actions into three kinds:

| Action | What it does | Example |
|---|---|---|
| **Agonist** | Mimics a neurotransmitter or boosts its effect, **encouraging** neural firing | Heroin and other opioids bind to endorphin receptors and activate them; nicotine activates acetylcholine receptors |
| **Antagonist** | Binds to a receptor **without activating it** (or otherwise blocks the neurotransmitter), **discouraging** neural firing | Naloxone blocks opioid receptors and can reverse an opioid overdose; curare blocks acetylcholine receptors and paralyzes muscles |
| **Reuptake inhibitor** | Blocks reabsorption, so the neurotransmitter **stays in the synapse longer** | SSRIs (selective serotonin reuptake inhibitors) used for depression; cocaine blocks reuptake of dopamine |

Picture the receptor as a lock. An **agonist** is a copied key that opens it. An **antagonist** is a key that fits but will not turn, and it jams the lock so the real key cannot get in. A **reuptake inhibitor** keeps the real keys from being collected, so they keep trying the lock.

### Worked example: an opioid overdose and naloxone

1. A person takes a strong opioid. It acts as an **agonist** at opioid (endorphin) receptors, relieving pain and producing euphoria.
2. At high doses, the same receptors in the brain stem **slow breathing** dangerously.
3. A responder gives **naloxone**, an **antagonist** that binds the opioid receptors more strongly than the opioid and does not activate them.
4. The opioid is pushed off the receptors, and breathing returns within minutes.

The two drugs act on the **same receptor** with **opposite results**. That pairing is the clearest way to remember agonist vs. antagonist.`
    },
    {
      id: 'biological-bases-brain-p2-s5-classify',
      type: 'dropdown-select' as const,
      content: `**Classify the Drug Action** 🔎`,
      exercise: {
        dropdowns: [
          {
            label: 'An SSRI blocks the reabsorption of serotonin by the sending neuron, so it acts as a(n) _____',
            options: ['reuptake inhibitor', 'antagonist', 'agonist', 'depressant']
          },
          {
            label: 'Morphine binds to endorphin receptors and activates them, so it acts as a(n) _____',
            options: ['antagonist', 'agonist', 'reuptake inhibitor', 'stimulant']
          },
          {
            label: 'Curare occupies acetylcholine receptors without activating them, so it acts as a(n) _____',
            options: ['agonist', 'reuptake inhibitor', 'antagonist', 'hallucinogen']
          }
        ],
        correctAnswers: ['reuptake inhibitor', 'agonist', 'antagonist'],
        hint1: 'Ask what happens to the neurotransmitter: is it kept in the synapse longer, imitated, or blocked?',
        hint2: 'A drug that activates the receptor encourages firing; one that sits in the receptor without activating it discourages firing.',
        hint3: 'Reuptake inhibitors act on the sending neuron\'s recycling, not on the receptor itself.',
        explanation: 'SSRIs keep serotonin in the synapse (reuptake inhibitor), morphine activates opioid receptors (agonist), and curare blocks acetylcholine receptors without activating them (antagonist).'
      }
    },
    {
      id: 'biological-bases-brain-p2-s6-classes',
      type: 'text' as const,
      content: `## Drug classes and what repeated use does

| Class | Typical effect on neural activity | CED example | Psychological and physical effects |
|---|---|---|---|
| **Stimulants** | **Increase** neural activity | Caffeine, cocaine | Alertness, energy, faster heart rate; a "crash" of fatigue or low mood afterward |
| **Depressants** | **Decrease** neural activity | Alcohol | Relaxation and lowered inhibition at first; slowed reactions, impaired judgment and memory; alcohol strengthens GABA's calming effect |
| **Hallucinogens** | **Distort** perception and/or cognition | Marijuana | Altered sense of time and sensation, impaired short-term memory and coordination |
| **Opioids** | Relieve **pain** (mimic endorphins) | Heroin | Euphoria and pain relief; slowed breathing; high overdose risk |

### Tolerance, addiction and withdrawal

| Term | Meaning | Example |
|---|---|---|
| **Tolerance** | With repeated use, the brain adapts, so a **larger dose** is needed for the same effect | A daily coffee drinker needs two cups to feel what one cup once did |
| **Addiction** | **Compulsive** craving and use that continues **despite harmful consequences** | Using an opioid even after losing a job because of it |
| **Withdrawal** | The **discomfort and distress** that follow stopping a drug the body has adapted to | Headaches and irritability after quitting caffeine; shaking and anxiety after heavy drinking stops |

Withdrawal symptoms are often the **opposite** of the drug's effects. Caffeine makes people alert, and withdrawal makes them tired. Opioids relieve pain and calm, and withdrawal brings aches and agitation. This happens because the brain has adjusted to the drug's constant presence, and removing the drug leaves that adjustment unopposed.

### Misconceptions to drop

| Misconception | Reality |
|---|---|
| Antagonists are "bad" drugs and agonists are "good" | Both describe **mechanism**, not value; naloxone, an antagonist, saves lives |
| Alcohol is a stimulant because people get more talkative | It is a **depressant**; talkativeness comes from slowing the brain's inhibition |
| Tolerance means the drug has become safer | Rising doses raise the risk of overdose and harm |`
    },
    {
      id: 'biological-bases-brain-p2-s7-applied',
      type: 'multiple-choice' as const,
      content: `**Applied Scenarios — Drugs and Behavior** 🔬`,
      exercise: {
        questions: [
          {
            question: 'After months of nightly drinking, Leo needs four drinks to feel what one drink once produced. When he stops, he becomes shaky and anxious. These two changes are best described as:',
            options: [
              'Withdrawal followed by tolerance',
              'Sensitization followed by relapse',
              'Tolerance followed by withdrawal',
              'Addiction followed by dependence'
            ],
            correctAnswer: 2,
            explanation: 'Needing more alcohol for the same effect is tolerance, and the shaky, anxious state after stopping is withdrawal. The reverse order does not match the sequence in the scenario.'
          },
          {
            question: 'Cocaine prevents dopamine from being reabsorbed by the sending neuron. Right after use, what happens in the synapse?',
            options: [
              'Dopamine is broken down faster by enzymes',
              'Dopamine stays longer and keeps stimulating receptors',
              'Fewer dopamine molecules leave the terminals',
              'Dopamine receptors are blocked from receiving it'
            ],
            correctAnswer: 1,
            explanation: 'Blocking reuptake leaves dopamine in the synapse, where it keeps activating receptors and produces cocaine\'s rush. Receptor blocking would describe an antagonist, which has the opposite effect.'
          },
          {
            question: 'Which drug class would most likely slow breathing dangerously at high doses while also acting on the body\'s natural pain-relief system?',
            options: [
              'Stimulants',
              'Hallucinogens',
              'Depressants',
              'Opioids'
            ],
            correctAnswer: 3,
            explanation: 'Opioids mimic endorphins, the natural pain relievers, and high doses suppress breathing. Depressants such as alcohol also slow activity but do not work through the endorphin system.'
          }
        ]
      }
    }
  ]
}
