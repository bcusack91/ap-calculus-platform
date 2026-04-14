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
| **Exemplar** | A specific remembered example of a concept used for comparison (your neighbor's golden retriever as your personal "dog" reference) |
| **Schema** | An organized framework of knowledge about a topic, event, or concept stored in long-term memory |
| **Script** | A type of schema for a SEQUENCE of events — what to expect in a familiar situation (restaurant script: seat → menu → order → eat → pay) |

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
              'A script — a schema for a sequence of events',
              'A prototype — robin is the most typical example of the "bird" concept',
              'An algorithm — a systematic procedure for categorization',
              'Functional fixedness — inability to see new uses for an object'
            ],
            correctAnswer: 1,
            explanation: 'Robin is the PROTOTYPE of the bird category for most Americans — it\'s the most typical example that comes to mind. Prototypes are central, typical members of a category that serve as a reference point. We categorize faster when items match our prototype (robin → "bird" faster than penguin → "bird"). This is Eleanor Rosch\'s prototype theory.'
          },
          {
            question: 'A child who visits a new restaurant and automatically expects to be seated, given a menu, order food, eat, and then pay is using a:',
            options: [
              'Prototype — the best example of a restaurant',
              'Concept — a mental category for restaurants',
              'Script — a schema for the expected sequence of events in a familiar situation',
              'Heuristic — a mental shortcut for making decisions'
            ],
            correctAnswer: 2,
            explanation: 'A script is a type of schema that organizes our knowledge about the SEQUENCE of events in a familiar situation. The "restaurant script" is the classic example: you know to wait to be seated, look at a menu, order from a server, eat, and pay — even in a restaurant you\'ve never visited before. Scripts help us navigate familiar situations efficiently, but they can also cause errors when a situation doesn\'t follow the expected script.'
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

### Prototype vs. Exemplar Models

| | Prototype Model | Exemplar Model |
|--|----------------|----------------|
| **How we categorize** | Compare to an ABSTRACT average/ideal | Compare to SPECIFIC remembered examples |
| **Stored in memory** | One generalized prototype | Many specific examples |
| **Strength** | Efficient — only one template needed | Captures variability within categories |
| **Weakness** | Loses information about individual examples | Memory-intensive — requires storing many examples |
| **Example** | "Dog" = abstract medium-sized, four-legged animal | "Dog" = your neighbor's lab + your childhood poodle + dog from a movie |

> **AP Connection:** Both models explain categorization. The AP exam may ask you to distinguish them. Prototype = abstract ideal. Exemplar = specific remembered instances. Most psychologists believe we use BOTH, depending on the situation.
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
          { label: 'A ___ is a schema for a familiar sequence of events (e.g., what happens at a restaurant)', answer: 'script' },
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
          { label: 'A child who sees a horse for the first time and calls it a "big dog"', options: ['Schema assimilation', 'Prototype matching', 'Script activation', 'Algorithm application'] },
          { label: 'Knowing to raise your hand before speaking in class without being told', options: ['Script', 'Prototype', 'Exemplar', 'Concept'] },
          { label: 'Thinking of a golden retriever when someone says "dog"', options: ['Prototype', 'Script', 'Schema', 'Algorithm'] }
        ],
        correctAnswers: ['Schema assimilation', 'Script', 'Prototype'],
        hint1: 'The child is fitting new information into an existing schema (four-legged animal = dog).',
        hint2: 'This is an automatic sequence of expected behavior in a familiar setting — a classroom script.',
        hint3: 'Golden retriever is the most typical, representative example of "dog" for many people.',
        explanation: 'Horse → "big dog" = schema assimilation (fitting new info into existing schema, borrowed from Piaget). Raising hand = script (expected behavior sequence in classroom). Golden retriever = prototype (most typical example of the dog concept).'
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
| Scripts are rigid | Scripts are flexible defaults — we notice when scripts are violated (waiter throws food at you) |

**Quick Decision Guide:**
- Most typical example of a category → **Prototype**
- Specific remembered example used for comparison → **Exemplar**
- Organized knowledge framework → **Schema**
- Expected sequence of events → **Script**
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
            question: 'A police officer who has arrested many young males in hoodies for theft is more likely to suspect a young male in a hoodie of shoplifting. This officer\'s judgment is MOST influenced by:',
            options: [
              'A script — the officer expects a sequence of events',
              'An exemplar — the officer is comparing to specific past cases stored in memory',
              'An algorithm — the officer is following a systematic procedure',
              'A prototype — the officer is comparing the person to an abstract ideal of a "thief"'
            ],
            correctAnswer: 1,
            explanation: 'The officer is comparing the current person to SPECIFIC past cases (the young males previously arrested). This is exemplar-based reasoning, not prototype-based. If the officer were using a prototype, they would compare to an ABSTRACT ideal of "thief" rather than specific remembered individuals. This example also connects to racial profiling and perceptual set — our past experiences shape what we expect to see.'
          },
          {
            question: 'When reading a story about a birthday party, readers automatically assume there was cake, presents, and singing — even though the story never mentioned these details. This gap-filling is BEST explained by:',
            options: [
              'The availability heuristic — cake is easy to recall',
              'Schema-driven processing — the "birthday party" schema fills in expected details',
              'Confirmation bias — readers seek evidence consistent with their beliefs',
              'The framing effect — the word "party" frames expectations'
            ],
            correctAnswer: 1,
            explanation: 'Schemas automatically fill in gaps with expected information. The "birthday party" schema includes cake, presents, singing, guests, and decorations. When reading, we don\'t just process what\'s stated — our schemas add expected details. This is adaptive (efficient processing), but it can cause false memories — people may later "remember" reading about cake even though it was never mentioned. This connects directly to Bartlett\'s finding that schemas distort memory.'
          }
        ]
      }
    }
  ]
}
