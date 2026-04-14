export const bioAnimalBehaviorPart4Data = {
  topicSlug: 'animal-behavior',
  sections: [
    {
      id: 'beh4-intro',
      type: 'text' as const,
      content: `
## Communication & Signals

**Part 4 of 7**

Animal communication occurs when a **signal** produced by one individual (the sender) changes the behavior of another individual (the receiver). Effective communication evolves when it benefits the sender, the receiver, or both.

### Signal Modalities

| Modality | Medium | Advantages | Limitations | Examples |
|---|---|---|---|---|
| **Visual** | Light | High information content; directional | Requires line of sight; useless in dark | Firefly bioluminescence, peacock tail display |
| **Auditory** | Sound waves | Travels far; works in dark and dense habitats | Can be intercepted by predators; attenuates with distance | Bird song, whale calls, cricket chirps |
| **Chemical** | Molecules (pheromones) | Persists in environment; works in dark | Slow transmission; hard to vary rapidly | Ant trail pheromones, moth sex pheromones |
| **Tactile** | Physical contact | Effective in close range; immediate | Requires proximity | Honeybee waggle dance, primate grooming |
| **Electrical** | Electric fields | Works in murky water | Very short range; aquatic only | Electric fish communication |
      `
    },
    {
      id: 'beh4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Signal Modalities** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A moth detects a chemical substance released by a female of its species from several kilometers away and flies upwind toward her. The chemical substance is best described as:',
            options: [
              'A pheromone — a chemical signal that communicates between individuals of the same species',
              'A hormone — a chemical messenger within the body',
              'An allomone — a chemical that benefits the sender and harms the receiver',
              'A neurotransmitter — a chemical that transmits signals between neurons'
            ],
            correctAnswer: 0,
            explanation: 'Pheromones are chemical signals released into the environment that affect the behavior or physiology of other individuals of the same species. Sex pheromones are among the most potent — some moths can detect them at concentrations as low as a few molecules per cubic meter of air.'
          },
          {
            question: 'Why do many nocturnal animals rely primarily on auditory and chemical signals rather than visual signals?',
            options: [
              'Visual signals require light and line-of-sight, which are limited in darkness',
              'Nocturnal animals lack the neural pathways to process visual information',
              'Sound and chemical signals carry more information than light',
              'Visual signals attract more predators than other signal types'
            ],
            correctAnswer: 0,
            explanation: 'Visual signals depend on ambient light and unobstructed line of sight. In dark conditions, auditory signals (which travel through obstacles) and chemical signals (which persist and diffuse) are more reliable communication channels.'
          }
        ]
      }
    },
    {
      id: 'beh4-pheromones',
      type: 'text' as const,
      content: `
## Pheromones in Detail

Pheromones are a critical AP Biology concept because they illustrate chemical communication, species-specificity, and the link between molecular structure and behavior.

### Types of Pheromones

| Type | Function | Example |
|---|---|---|
| **Sex pheromones** | Attract mates | Bombykol in silkworm moths |
| **Alarm pheromones** | Warn conspecifics of danger | Formic acid released by injured ants |
| **Trail pheromones** | Mark paths to food sources | Ant trail chemicals |
| **Aggregation pheromones** | Attract individuals to a location | Bark beetle aggregation on trees |
| **Territorial pheromones** | Mark territory boundaries | Urine marking in wolves and cats |

### Pheromone Properties
- **Species-specific**: chemical structure ensures signals are received only by the target species
- **Low concentration effectiveness**: some pheromones are detectable at femtomolar concentrations
- **Environmental persistence**: can mark trails or territories for extended periods
- **Honest signals**: production costs or molecular specificity often ensure reliability

## Honest vs Dishonest Signals

| Signal type | Definition | Example |
|---|---|---|
| **Honest signal** | Reliably indicates the quality or state of the sender | Large antlers indicate good nutrition and genetic quality |
| **Dishonest signal** | Misrepresents the sender's quality or intentions | Non-venomous king snake mimics venomous coral snake coloration |

### The Handicap Principle (Zahavi)
Some honest signals are reliable precisely because they are **costly to produce**. Only high-quality individuals can afford the handicap:
- A peacock's elaborate tail is energetically expensive and attracts predators — only fit males can survive with one
- This ensures the signal honestly advertises genetic quality to females
      `
    },
    {
      id: 'beh4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Honest vs Dishonest Signals** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'According to the handicap principle, why is the peacock\'s large, colorful tail considered an honest signal?',
            options: [
              'It is costly to produce and maintain, so only high-quality males can afford it',
              'It directly attracts predators, benefiting the population through natural selection',
              'It is inherited independently of the male\'s overall fitness',
              'Females have co-evolved identical tail structures for mutual assessment'
            ],
            correctAnswer: 0,
            explanation: 'The handicap principle states that costly signals are honest because low-quality individuals cannot afford to produce them. The peacock\'s tail requires significant energy and increases predation risk — only males with superior genes for survival can develop and maintain an extravagant display.'
          },
          {
            question: 'A non-venomous scarlet king snake has red, yellow, and black banding similar to the venomous coral snake. This is an example of:',
            options: [
              'A dishonest signal — Batesian mimicry deceives predators about the snake\'s true danger',
              'An honest signal — the coloration accurately indicates toxicity',
              'Müllerian mimicry — both species share a common warning signal',
              'Aposematic coloration — the king snake is warning predators of its venom'
            ],
            correctAnswer: 0,
            explanation: 'The king snake is a Batesian mimic — it is harmless but mimics the appearance of a dangerous species. This is a dishonest signal because it misrepresents the sender\'s true defensive capability to the receiver (predator).'
          }
        ]
      }
    },
    {
      id: 'beh4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks — Communication** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ants laying down chemicals to guide nestmates to a food source are using ___',
            options: ['trail pheromones', 'sex pheromones', 'alarm pheromones', 'hormones']
          },
          {
            label: 'A signal that reliably indicates the sender\'s quality because it is too costly for weak individuals to fake is explained by the ___',
            options: ['handicap principle', 'marginal value theorem', 'competitive exclusion principle', 'founder effect']
          },
          {
            label: 'The honeybee waggle dance communicates direction and distance using ___ signals',
            options: ['tactile', 'chemical', 'electrical', 'visual']
          },
          {
            label: 'A firefly flashing a species-specific light pattern to attract a mate is using ___ communication',
            options: ['visual', 'chemical', 'auditory', 'tactile']
          }
        ],
        correctAnswers: ['trail pheromones', 'handicap principle', 'tactile', 'visual'],
        hint1: 'Trail pheromones are chemical markers that create paths between the colony and food sources.',
        hint2: 'Zahavi\'s handicap principle explains why costly signals are honest signals.',
        hint3: 'The waggle dance involves direct physical contact and vibrations between bees in a dark hive.',
        explanation: 'Ants use trail pheromones (chemical markers) to guide nestmates. The handicap principle explains costly honest signaling. The waggle dance is primarily tactile — performed in the dark hive where other bees detect it by physical contact and vibrations. Firefly bioluminescence is a visual signal.'
      }
    },
    {
      id: 'beh4-strategy',
      type: 'text' as const,
      content: `
### Exam Strategy — Communication Questions

#### Common AP question types
1. **Identify the signal modality**: Given a scenario, classify the type of communication
2. **Honest vs dishonest signals**: Determine whether a signal accurately represents the sender's quality
3. **Adaptive value**: Explain why a particular communication system evolved

#### Pitfalls to avoid
- **Waggle dance ≠ visual**: The waggle dance occurs in a dark hive — it is primarily tactile/mechanosensory, not visual
- **Pheromones ≠ hormones**: Pheromones act between organisms; hormones act within an organism
- **All mimicry ≠ dishonest**: Müllerian mimicry involves honest signals (both species are genuinely dangerous)

#### Free-Response structure for communication questions
1. Identify the sender, receiver, and signal
2. Classify the signal modality and explain why it suits the environment
3. Explain the adaptive value for sender and/or receiver
4. Discuss whether the signal is honest or dishonest and why
      `
    }
  ]
};
