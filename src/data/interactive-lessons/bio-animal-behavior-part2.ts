export const bioAnimalBehaviorPart2Data = {
  topicSlug: 'animal-behavior',
  sections: [
    {
      id: 'beh2-intro',
      type: 'text' as const,
      content: `
## Learning Types in Animal Behavior

**Part 2 of 7**

Learning is a relatively permanent change in behavior resulting from experience. Different types of learning vary in complexity, the neural resources required, and the ecological contexts in which they are most adaptive.

### Overview of Learning Types

| Learning Type | Definition | Example | Complexity |
|---|---|---|---|
| **Habituation** | Decreased response to a repeated, harmless stimulus | Shore birds stop fleeing from passing trains | Simplest |
| **Classical conditioning** | Associating an involuntary response with a new stimulus | Pavlov's dogs salivating at a bell | Simple associative |
| **Operant conditioning** | Associating a voluntary behavior with a consequence | Rats pressing a lever for food | Simple associative |
| **Imprinting** | Rapid, irreversible learning during a critical period | Goslings following the first moving object they see | Time-restricted |
| **Spatial learning** | Forming internal representations of spatial relationships | Digger wasps memorizing nest landmark positions | Cognitive |
| **Cognitive mapping** | Building a mental map of the environment | Clark's nutcrackers relocating thousands of seed caches | Complex cognitive |

### Habituation

Habituation is the **simplest form of learning** — a decrease in responsiveness to a stimulus after repeated, inconsequential exposure.

- **Adaptive value**: Conserves energy by ignoring irrelevant stimuli
- **Key feature**: Stimulus-specific — the animal still responds to novel stimuli
- **Example**: Sea anemones retract when touched but stop retracting after repeated gentle touches
- **AP distinction**: Habituation is NOT the same as sensory adaptation (a receptor-level change)
      `
    },
    {
      id: 'beh2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Habituation & Conditioning** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Prairie dogs initially give alarm calls when they see hikers on a nearby trail. After weeks of hikers passing without any predator attack, the prairie dogs stop calling. This is an example of:',
            options: [
              'Habituation — decreased response to a repeated, non-threatening stimulus',
              'Classical conditioning — the hikers became a conditioned stimulus',
              'Operant conditioning — the prairie dogs were negatively reinforced',
              'Imprinting — the prairie dogs formed a bond with the hikers'
            ],
            correctAnswer: 0,
            explanation: 'The prairie dogs learned that the hikers are not a threat through repeated, inconsequential exposure — this is textbook habituation. No new association is formed; the existing response simply diminishes.'
          },
          {
            question: 'In Pavlov\'s experiment, what serves as the unconditioned stimulus (US)?',
            options: [
              'Food placed in the dog\'s mouth',
              'The sound of the bell',
              'Salivation in response to the bell',
              'Salivation in response to food'
            ],
            correctAnswer: 0,
            explanation: 'The unconditioned stimulus is the stimulus that naturally and automatically triggers a response without prior learning. Food naturally causes salivation (the unconditioned response). The bell is the conditioned stimulus.'
          }
        ]
      }
    },
    {
      id: 'beh2-conditioning',
      type: 'text' as const,
      content: `
## Classical vs Operant Conditioning

### Classical Conditioning (Pavlovian)
An organism learns to associate a **neutral stimulus** with a **meaningful stimulus**, so the neutral stimulus eventually triggers the same response.

| Term | Role | Example |
|---|---|---|
| Unconditioned stimulus (US) | Naturally triggers a response | Food |
| Unconditioned response (UR) | Natural response to US | Salivation at food |
| Conditioned stimulus (CS) | Previously neutral; paired with US | Bell |
| Conditioned response (CR) | Learned response to CS | Salivation at bell |

### Operant Conditioning (Trial-and-Error Learning)
An organism learns to associate a **voluntary behavior** with its **consequences**.

| Consequence | Effect on behavior | Example |
|---|---|---|
| **Positive reinforcement** | Increases behavior (add reward) | Rat presses lever → gets food |
| **Negative reinforcement** | Increases behavior (remove aversive) | Rat presses lever → shock stops |
| **Positive punishment** | Decreases behavior (add aversive) | Blue jay eats monarch → bitter taste |
| **Negative punishment** | Decreases behavior (remove reward) | Crow drops food when mobbed by other birds |

> **AP Key Distinction**: Classical conditioning involves *involuntary* responses (reflexes); operant conditioning involves *voluntary* behaviors. Both are forms of associative learning.
      `
    },
    {
      id: 'beh2-imprinting',
      type: 'text' as const,
      content: `
## Imprinting, Spatial Learning & Cognitive Maps

### Imprinting
- A form of learning that occurs during a **critical period** (sensitive period) early in life
- Typically **irreversible** once established
- **Filial imprinting**: Young follow the first moving object (usually a parent) — Konrad Lorenz's geese
- **Sexual imprinting**: Early exposure influences future mate preferences
- **Adaptive value**: Ensures offspring stay near the parent for protection

### Spatial Learning
- Using experience to build a mental representation of spatial relationships
- **Example**: Niko Tinbergen's digger wasps — wasps memorize the arrangement of landmarks around their nest to relocate it after foraging
- **Experimental evidence**: Moving landmarks causes wasps to search in the wrong location, proving they use spatial cues

### Cognitive Maps
- Internal representations of an environment's spatial layout
- Go beyond simple landmark use — the animal understands spatial *relationships*
- **Example**: Clark's nutcrackers cache up to 30,000 seeds in fall and retrieve them months later using spatial memory
- **Example**: Honeybees communicate food source locations via the waggle dance, requiring spatial understanding
      `
    },
    {
      id: 'beh2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks — Learning Types** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A sea slug that stops withdrawing its gill after repeated gentle touches to its siphon is demonstrating ___',
            options: ['habituation', 'classical conditioning', 'imprinting', 'insight learning']
          },
          {
            label: 'Konrad Lorenz\'s goslings following him after hatching is an example of ___',
            options: ['imprinting', 'habituation', 'operant conditioning', 'spatial learning']
          },
          {
            label: 'A blue jay that avoids eating monarch butterflies after vomiting from one is showing ___',
            options: ['operant conditioning', 'habituation', 'imprinting', 'cognitive mapping']
          },
          {
            label: 'In classical conditioning, the bell in Pavlov\'s experiment is called the ___',
            options: ['conditioned stimulus', 'unconditioned stimulus', 'conditioned response', 'unconditioned response']
          }
        ],
        correctAnswers: ['habituation', 'imprinting', 'operant conditioning', 'conditioned stimulus'],
        hint1: 'Habituation is a decrease in response to a repeated, harmless stimulus.',
        hint2: 'Imprinting occurs during a critical period and is typically irreversible.',
        hint3: 'In operant conditioning, a voluntary behavior is associated with a consequence (vomiting = punishment).',
        explanation: 'The sea slug shows habituation (decreased response to harmless repeated stimulus). Lorenz\'s geese demonstrate filial imprinting during a critical period. The blue jay learns through operant conditioning (positive punishment — eating monarch leads to vomiting). The bell is the conditioned stimulus because it was initially neutral but became associated with food.'
      }
    },
    {
      id: 'beh2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Advanced Learning** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher moves the pinecone ring that surrounds a digger wasp\'s nest entrance to a location 30 cm away. The wasp searches near the moved pinecones, not near the actual nest entrance. This experiment most directly demonstrates:',
            options: [
              'Spatial learning — the wasp uses landmarks to navigate to the nest',
              'Classical conditioning — the wasp associates pinecones with the nest',
              'Imprinting — the wasp imprinted on the pinecone arrangement',
              'Habituation — the wasp habituated to the original nest location'
            ],
            correctAnswer: 0,
            explanation: 'This is Tinbergen\'s classic digger wasp experiment demonstrating spatial learning. The wasp memorized the spatial arrangement of landmarks (pinecones) relative to the nest entrance and used that mental representation to navigate.'
          },
          {
            question: 'Which characteristic distinguishes imprinting from other forms of learning?',
            options: [
              'It occurs during a critical period and is largely irreversible',
              'It requires repeated exposure over many trials',
              'It involves associating a neutral stimulus with a reflex',
              'It can occur at any point during the organism\'s life'
            ],
            correctAnswer: 0,
            explanation: 'Imprinting is unique because it must occur during a specific critical (sensitive) period early in life and, once established, is extremely difficult or impossible to reverse. Other forms of learning are more flexible in timing and reversibility.'
          }
        ]
      }
    }
  ]
};
