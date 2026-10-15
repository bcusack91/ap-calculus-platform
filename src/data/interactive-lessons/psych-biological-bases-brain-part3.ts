export const psychBrainPart3Data = {
  topicSlug: 'biological-bases-brain',
  sections: [
    {
      id: 'biological-bases-brain-p3-s1-intro',
      type: 'text' as const,
      content: `# 🧠 Biological Bases and Brain

**Part 3 of 7 — The Nervous System and the Endocrine System**

---

| Section |
|---------|
| The map of the nervous system |
| Sympathetic vs. parasympathetic: arousing and calming |
| The endocrine system: hormones as slow messengers |
| The five hormones on the AP exam |
| Putting the systems together under stress |

> 🔑 **Key Concept:** Neurons are wired into **systems**. The nervous system sends fast, targeted electrical-chemical messages. The endocrine system sends slower chemical messages through the blood. Most behavior, from a racing heart to falling asleep, uses both.

### The map of the nervous system

\`\`\`
Nervous system
├── Central nervous system (CNS): brain + spinal cord
└── Peripheral nervous system (PNS): every nerve outside the CNS
    ├── Somatic nervous system: VOLUNTARY control of skeletal muscles
    └── Autonomic nervous system: INVOLUNTARY control of organs and glands
        ├── Sympathetic division: AROUSING ("fight or flight")
        └── Parasympathetic division: CALMING ("rest and digest")
\`\`\`

| Division | Made of | Job | Example |
|---|---|---|---|
| **Central (CNS)** | Brain and spinal cord | Processes information and makes decisions; interacts with every process in the body | Deciding to answer a question in class |
| **Peripheral (PNS)** | Nerves that branch out to the body | Relays messages between the CNS and the rest of the body | Nerves carrying touch signals from the hand |
| **Somatic** | Part of the PNS | Governs **voluntary** movement of skeletal muscles | Raising your hand, typing, kicking a ball |
| **Autonomic** | Part of the PNS | Governs **involuntary** processes such as heart rate, digestion and breathing | Your heart speeding up on a roller coaster |

Quick test: **Could you choose to do it?** If yes, it is somatic. If it happens on its own, it is autonomic.`
    },
    {
      id: 'biological-bases-brain-p3-s2-autonomic',
      type: 'text' as const,
      content: `## Sympathetic vs. parasympathetic

The two autonomic divisions work like a seesaw: when one is more active, the other eases off.

| Body response | **Sympathetic** (arousing) | **Parasympathetic** (calming) |
|---|---|---|
| Heart rate | Speeds up | Slows down |
| Breathing | Faster, airways open | Slower |
| Pupils | Dilate (widen) | Constrict (narrow) |
| Digestion | Slows or stops | Resumes |
| Saliva | Decreases (dry mouth) | Increases |
| Sweating | Increases | Decreases |
| Stored energy | Sugar released for the muscles | Energy conserved and stored |

Memory aid: **S**ympathetic = **S**tress; **P**arasympathetic = **P**eace.

### Worked example: a fire drill during a test

1. **Alarm sounds.** The sympathetic division takes over: heart pounds, breathing quickens, pupils widen and digestion pauses. The body is ready to move.
2. **Students walk outside.** Their legs and feet move by **somatic** commands, which are voluntary.
3. **"All clear" is announced.** Over the next several minutes the **parasympathetic** division slows the heart and restarts digestion.
4. **Some students still feel jittery** after returning to their seats. That lingering arousal comes from **hormones** already in the blood, which leads to the endocrine system.

> 🔑 **AP Connection:** A polygraph ("lie detector") measures **sympathetic arousal** (heart rate, breathing, sweating), not lying itself. An anxious but honest person can look "deceptive." This is a classic validity problem.`
    },
    {
      id: 'biological-bases-brain-p3-s3-check',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Divisions of the Nervous System** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Just before giving a speech, Priya\'s heart races, her mouth goes dry and her digestion slows. Which division of the nervous system is most active?',
            options: [
              'Somatic nervous system',
              'Sympathetic nervous system',
              'Parasympathetic nervous system',
              'Central nervous system'
            ],
            correctAnswer: 1,
            explanation: 'A racing heart, dry mouth and slowed digestion are sympathetic arousal. The parasympathetic division would do the opposite, and the somatic division controls voluntary skeletal movement.'
          },
          {
            question: 'Which action is controlled mainly by the somatic nervous system?',
            options: [
              'Speeding up the heart during a scare',
              'Releasing saliva at the smell of pizza',
              'Narrowing the pupils in bright sunlight',
              'Raising a hand to answer a question'
            ],
            correctAnswer: 3,
            explanation: 'Raising a hand is a voluntary movement of skeletal muscles, the job of the somatic division. Heart rate, saliva and pupil size are involuntary and belong to the autonomic division.'
          }
        ]
      }
    },
    {
      id: 'biological-bases-brain-p3-s4-endocrine',
      type: 'text' as const,
      content: `## The endocrine system

The **endocrine system** sends chemical messengers called **hormones** through the **bloodstream**. Hormones act on target tissues much as neurotransmitters act on receptors, but the delivery is very different.

| Feature | Nervous system | Endocrine system |
|---|---|---|
| Messenger | Neurotransmitters across synapses | Hormones in the blood |
| Speed | Fractions of a second | Seconds to hours |
| Reach | Specific target cells | Any tissue the blood reaches that has matching receptors |
| How long effects last | Brief | Longer lasting |

### The hypothalamus and the pituitary gland

The **hypothalamus**, a small brain structure, links the two systems. It directs the **pituitary gland** at the base of the brain. The pituitary is often called the "master gland" because its hormones influence other glands throughout the body. The pituitary is the only gland you need to know by name for AP Psychology.

### The five hormones on the AP exam

The CED limits AP Psychology to these five:

| Hormone | Main role in behavior | Example |
|---|---|---|
| **Adrenaline** (epinephrine) | Boosts sympathetic arousal: raises heart rate, blood pressure and blood sugar | The pounding heart that lasts after a near-miss in traffic |
| **Leptin** | Released by fat cells; signals **fullness** and reduces hunger over the long term | Mice that cannot respond to leptin overeat and become obese |
| **Ghrelin** | Released by an empty stomach; signals **hunger** | Ghrelin rises before usual mealtimes and drops after eating |
| **Melatonin** | Rises in **darkness**, promoting sleepiness; helps set the sleep/wake cycle | Bright screens at night delay its rise and the urge to sleep |
| **Oxytocin** | Released by the pituitary; promotes **bonding and trust**; triggers labor contractions and milk release | Released during childbirth, nursing and close physical contact |

Memory aid: **gh**relin = "**gr**owling" stomach (hunger); **le**ptin = "**le**ave the table" (full).`
    },
    {
      id: 'biological-bases-brain-p3-s5-recall',
      type: 'input-boxes' as const,
      content: `**Recall Practice — Hormones** ✍️`,
      exercise: {
        questions: [
          {
            question: 'The hormone released by fat cells that signals fullness is ___.',
            answer: 'leptin',
            acceptableAnswers: [],
            explanation: 'Leptin signals that energy stores are adequate and reduces appetite. Ghrelin is its hunger-signaling counterpart.'
          },
          {
            question: 'The hormone that rises in darkness and promotes sleepiness is ___.',
            answer: 'melatonin',
            acceptableAnswers: [],
            explanation: 'Melatonin levels climb in the evening as light fades, helping time the sleep/wake cycle.'
          },
          {
            question: 'The brain structure that directs the pituitary gland is the ___.',
            answer: 'hypothalamus',
            acceptableAnswers: [],
            explanation: 'The hypothalamus links the nervous and endocrine systems by controlling the pituitary gland.'
          }
        ]
      }
    },
    {
      id: 'biological-bases-brain-p3-s6-together',
      type: 'text' as const,
      content: `## Putting the systems together

### Worked example: a near-miss on the highway

| Time | What happens | System |
|---|---|---|
| 0.3 seconds | Eyes detect a swerving car; foot slams the brake | Sensory neurons → brain → **somatic** motor neurons |
| 1 second | Heart pounds, breathing quickens, hands sweat | **Sympathetic** division |
| A few seconds | **Adrenaline** enters the blood and keeps arousal high | **Endocrine** system |
| 10–20 minutes | Heart slowly settles even though the danger ended long before | **Parasympathetic** division working against hormones still in the blood |

The nervous system explains the **instant** reaction. The endocrine system explains why the feeling **lingers**.

### Misconceptions to drop

| Misconception | Reality |
|---|---|
| The autonomic system only matters in emergencies | It runs digestion, heart rate and breathing all day; the parasympathetic division is active most of the time |
| Sympathetic means "kind" | Here it means **arousing**; it prepares the body for action |
| Hormones and neurotransmitters are unrelated | They do similar jobs on receptors; some chemicals, such as norepinephrine, act as both |
| The spinal cord is part of the peripheral system | It belongs to the **central** nervous system with the brain |

> 🔑 **AP Connection:** In an EBQ about stress, school start times or eating, you can earn explanation points by naming the **specific** system or hormone. "Ghrelin rises when meals are skipped, increasing hunger" is stronger than "the body gets hungry."`
    },
    {
      id: 'biological-bases-brain-p3-s7-applied',
      type: 'multiple-choice' as const,
      content: `**Applied Scenarios — Nervous and Endocrine Systems** 🔬`,
      exercise: {
        questions: [
          {
            question: 'A drug blocks ghrelin from acting in the brain. Which effect is most likely?',
            options: [
              'Weaker feelings of hunger before meals',
              'Stronger feelings of trust toward others',
              'Increased craving for high-fat foods',
              'Earlier sleepiness in the evening'
            ],
            correctAnswer: 0,
            explanation: 'Ghrelin signals hunger, so blocking it should weaken hunger, especially before mealtimes. Trust relates to oxytocin and evening sleepiness to melatonin.'
          },
          {
            question: 'Compared with a message carried by neurons, a message carried by the endocrine system typically:',
            options: [
              'It acts faster and its effects fade sooner',
              'It acts faster and its effects also last longer',
              'It acts more slowly but its effects last longer',
              'It acts more slowly and its effects fade sooner'
            ],
            correctAnswer: 2,
            explanation: 'Hormones travel through the blood, so they act more slowly than neural signals, but their effects last longer. That is why arousal lingers after a scare.'
          },
          {
            question: 'After a near-miss car accident, Sam\'s heart keeps pounding for several minutes even though the danger is over. The lingering effect is best explained by:',
            options: [
              'Parasympathetic activity speeding the heart',
              'Somatic neurons signaling the leg muscles',
              'Adrenaline still circulating in the bloodstream',
              'Melatonin rising as the stress fades'
            ],
            correctAnswer: 2,
            explanation: 'Adrenaline released during the scare stays in the blood and keeps arousal high after the threat ends. The parasympathetic division slows the heart rather than speeding it.'
          }
        ]
      }
    }
  ]
}
