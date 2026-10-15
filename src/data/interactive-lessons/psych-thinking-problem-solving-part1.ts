export const psychThinkingPart1Data = {
  topicSlug: 'thinking-problem-solving',
  sections: [
    {
      id: 'think1-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Thinking & Problem Solving

**Part 1 of 7 — Concepts & Categories**

How do we organize the endless stream of information we encounter? Through concepts, prototypes, and schemas — the building blocks of thought.

### Key Definitions

| Term | Definition |
|------|-----------|
| **Concept** | A mental category that groups similar objects, events, ideas, or people (e.g., "furniture," "democracy") |
| **Prototype** | The BEST, most typical example of a concept — what comes to mind first (robin = prototype of "bird," not penguin) |
| **Schema** | An organized framework of knowledge about a topic, event, or concept stored in long-term memory |
| **Assimilation** | Taking in new information WITHOUT changing the schema (fitting it into what you already think) |
| **Accommodation** | Taking in new information and CHANGING the schema to incorporate it |

### Prototype Theory (Rosch, 1973)

We categorize new items by comparing them to our PROTOTYPE — the most typical member of the category.

| Category | Prototype | Less Typical | Atypical (still in category) |
|----------|-----------|-------------|------------------------------|
| Bird | Robin, sparrow | Owl, eagle | Penguin, ostrich |
| Furniture | Chair, table | Lamp, bookcase | Bean bag, hammock |
| Vehicle | Car, truck | Motorcycle, bus | Elevator, hot air balloon |

> **Key insight:** We judge category membership by SIMILARITY to the prototype. The more an item resembles the prototype, the faster we categorize it ("robin" is identified as a bird faster than "penguin"). This connects to the **representativeness heuristic** — we often judge probability by how well something matches our prototype, which can lead to errors.
      `
    },
    {
      id: 'think1-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When asked to name a bird, most Americans say "robin" before "penguin," even though both are equally valid birds. This BEST illustrates:',
            options: [
              'A schema — an organized framework of everything a person knows about birds',
              'A prototype — the most typical example of the "bird" concept',
              'An algorithm — a step-by-step procedure that guarantees correct categorization',
              'Functional fixedness — seeing an object in only one role'
            ],
            correctAnswer: 1,
            explanation: 'Robin is the PROTOTYPE of the bird category for most Americans — it\'s the most typical example that comes to mind. Prototypes are central, typical members of a category that serve as a reference point. We categorize faster when items match our prototype (robin → "bird" faster than penguin → "bird"). This is Eleanor Rosch\'s prototype theory.'
          },
          {
            question: 'A child believes that every bird can fly. At the zoo she learns that penguins are birds that cannot fly, and she revises her idea of what a bird is. This change BEST illustrates:',
            options: [
              'Assimilation — she fits the penguin into her existing bird schema without changing it',
              'A prototype — she now treats the penguin as the most typical member of the bird category',
              'Accommodation — she changes her bird schema to take in the new information',
              'An algorithm — she follows a step-by-step rule that guarantees correct categorization'
            ],
            correctAnswer: 2,
            explanation: 'She does not just file the penguin under her old schema; she changes the schema itself ("not all birds fly"), which is accommodation (CED 2.2.A.2). Assimilation would leave the schema unchanged, and the penguin is clearly not her prototype bird.'
          }
        ]
      }
    },
    {
      id: 'think1-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Schemas: Organized Knowledge Structures

Schemas are mental frameworks that organize and interpret information. They are ACTIVE — they don't just store information, they shape how we process new information.

**How Schemas Influence Cognition:**

| Function | Example |
|----------|---------|
| **Guide attention** | A "classroom" schema directs attention to the teacher, whiteboard, desks |
| **Fill in gaps** | If someone says "I went to a restaurant," you assume they ate and paid, even if not stated |
| **Cause distortions** | Bartlett (1932): British participants retold a Native American story and CHANGED unfamiliar details to fit their own cultural schemas |
| **Create expectations** | A "doctor" schema creates expectations about white coats, stethoscopes, medical knowledge |

### Bartlett's "War of the Ghosts" Study (1932)

| Element | Detail |
|---------|--------|
| **Method** | British participants read and recalled a Native American folk tale over time |
| **Finding** | Stories became shorter, more conventional, and were altered to fit Western schemas |
| **Key changes** | Unfamiliar details were dropped or transformed (canoes → boats, supernatural elements removed) |
| **Conclusion** | Memory is RECONSTRUCTIVE — we don't reproduce memories, we REBUILD them using schemas |

### Assimilation vs. Accommodation

People form and modify schemas through two processes (CED 2.2.A.2):

| | Assimilation | Accommodation |
|--|-------------|---------------|
| **What happens to the schema** | Stays the same | Changes |
| **What happens to the new information** | Is interpreted to fit the existing schema | Is used to revise or add to the schema |
| **Example** | A toddler calls a cow a "doggy" because it has four legs and fur | The toddler learns cows moo and give milk, and forms a separate "cow" schema |
| **Example** | A new student assumes a quiet classmate is shy, fitting her "quiet = shy" schema | After seeing the classmate lead a debate, the student revises the schema: quiet people can be confident speakers |

> **AP Connection:** Assimilation can preserve errors (the schema never gets corrected), which links to belief perseverance and stereotypes. Accommodation is how schemas become more accurate. Piaget used the same two terms to describe children's cognitive development (Topic 3.4).
      `
    },
    {
      id: 'think1-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'A ___ is the most typical example of a concept (e.g., robin for birds)', answer: 'prototype' },
          { label: 'Changing an existing schema to incorporate new information is called ___', answer: 'accommodation' },
          { label: 'Bartlett\'s study showed that memory is ___ — we rebuild memories using schemas', answer: 'reconstructive' }
        ]
      }
    },
    {
      id: 'think1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify Each Example** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A child who sees a horse for the first time and calls it a "big dog"', options: ['Schema assimilation', 'Prototype matching', 'Schema accommodation', 'Algorithm application'] },
          { label: 'A student who thought all metals stick to magnets tests an aluminum can, sees it does not stick, and revises what she believes about metals', options: ['Schema accommodation', 'Prototype matching', 'Schema assimilation', 'Concept formation'] },
          { label: 'Thinking of a golden retriever when someone says "dog"', options: ['Prototype', 'Accommodation', 'Schema', 'Algorithm'] }
        ],
        correctAnswers: ['Schema assimilation', 'Schema accommodation', 'Prototype'],
        hint1: 'The child is fitting new information into an existing schema (four-legged animal = dog).',
        hint2: 'The new evidence did not fit, so the existing framework itself was changed.',
        hint3: 'Golden retriever is the most typical, representative example of "dog" for many people.',
        explanation: 'Horse → "big dog" = schema assimilation (fitting new info into existing schema, borrowed from Piaget). Aluminum can = schema accommodation (the metals schema was revised to fit new evidence). Golden retriever = prototype (most typical example of the dog concept).'
      }
    },
    {
      id: 'think1-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: Concepts & Categories

**Common Misconceptions:**

| Misconception | Correction |
|--------------|-----------|
| Concepts and categories are the same | A concept is the MENTAL REPRESENTATION; a category is the GROUP of items the concept refers to |
| Prototypes are the "best" examples objectively | Prototypes vary by CULTURE and PERSONAL EXPERIENCE (Americans: robin = bird prototype; Australians might say kookaburra) |
| Schemas only store information | Schemas ACTIVELY shape perception, memory, and interpretation — they're not passive storage |
| Assimilation means learning nothing | Assimilation does add the new item to memory; it just leaves the schema itself unchanged |

**Quick Decision Guide:**
- Most typical example of a category → **Prototype**
- Organized knowledge framework → **Schema**
- New information fit into a schema that stays the same → **Assimilation**
- Schema changed to fit new information → **Accommodation**
- Mental group for similar things → **Concept**

> **AP Tip:** Bartlett's "War of the Ghosts" study is frequently used to demonstrate that memory is reconstructive and influenced by schemas. The key word pair is "schema + memory distortion."
      `
    },
    {
      id: 'think1-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'In a reaction-time study, participants verify the sentence "A robin is a bird" faster than "A penguin is a bird." Which explanation BEST fits this result?',
            options: [
              'Robins match the bird prototype more closely, so they are recognized more quickly',
              'Penguins are assimilated into the bird schema, which takes extra time to do',
              'Participants follow an algorithm that checks robins before checking penguins',
              'Functional fixedness keeps participants from seeing penguins in a new role'
            ],
            correctAnswer: 0,
            explanation: 'Items that closely resemble the prototype of a concept are categorized faster, and a robin is closer to the typical bird than a penguin (CED 2.2.A.1). Assimilation does not explain a speed difference between two members of the same category, no step-by-step algorithm is involved, and functional fixedness concerns object uses.'
          },
          {
            question: 'When reading a story about a birthday party, readers automatically assume there was cake, presents, and singing — even though the story never mentioned these details. This gap-filling is BEST explained by:',
            options: [
              'The availability heuristic — cake and presents are the details easiest to recall',
              'Schema-driven processing — the party schema fills in expected details',
              'Confirmation bias — readers look only for details that support what they already believe',
              'The framing effect — the word "party" frames how readers interpret the story'
            ],
            correctAnswer: 1,
            explanation: 'Schemas automatically fill in gaps with expected information. The "birthday party" schema includes cake, presents, singing, guests, and decorations. When reading, we don\'t just process what\'s stated — our schemas add expected details. This is adaptive (efficient processing), but it can cause false memories — people may later "remember" reading about cake even though it was never mentioned. This connects directly to Bartlett\'s finding that schemas distort memory.'
          }
        ]
      }
    }
  ]
}
