export const satExpressionPart2Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei2-intro',
      type: 'text' as const,
      content: `# Organization & Logical Sequence

**Part 2 of 7 — Paragraph Organization**

These questions ask you to place a sentence in the best location within a paragraph, or to determine the most logical order for ideas.

### Sentence Placement Strategy

When asked "Where should this sentence be placed?" look for:

1. **Referential links:** Does the sentence mention something that must come AFTER its introduction?
2. **Transition clues:** Does it start with "However," "Additionally," "For example"?
3. **Chronological order:** Does it describe an event that happened before or after other events?
4. **General → Specific:** Broad claims usually come before supporting details

### Example

**Paragraph order question:**

[1] Monarch butterflies migrate up to 3,000 miles each fall.  
[2] They navigate using a combination of the sun's position and Earth's magnetic field.  
[3] Scientists were puzzled by this navigational ability for decades.  
[4] Recent research identified magnetite crystals in their antennae as the key biological compass.

**Best order:** 1, 3, 2, 4

Because: Introduce the behavior (1) → puzzle about it (3) → describe the ability (2) → explain the discovery (4).

### Transition Signals for Placement

| If the sentence starts with... | It likely goes... |
|---|---|
| "For example" or "For instance" | AFTER a general claim |
| "However" or "Nevertheless" | AFTER a point it contradicts |
| "As a result" or "Consequently" | AFTER a cause |
| "First" / "Finally" | At the start / end of a sequence |
| "This" + noun | AFTER the noun is introduced |`
    },
    {
      id: 'ei2-quiz',
      type: 'multiple-choice' as const,
      content: '**Organization Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Where should this sentence go? "This discovery challenged the long-held assumption that birds were the only animals capable of true migration navigation." [1] Sea turtles have been tracked traveling thousands of miles. [2] Researchers attached GPS devices to 40 turtles. [3] [INSERT] [4] Further studies confirmed that turtles use Earth\'s magnetic signature to find their birth beaches.',
            options: ['Position 3 is correct—it responds to the GPS tracking findings and leads into further studies', 'Position 1—it should open the paragraph', 'After position 4—as a concluding statement', 'Position 2—between the introduction and the tracking study'],
            correctAnswer: 0,
            explanation: 'The sentence discusses a "discovery" (the GPS tracking results from sentence 2) and "challenged" an assumption (setting up the confirmation in sentence 4). Position 3 creates a logical flow: track→discover→challenge assumption→confirm.'
          },
          {
            question: 'A sentence begins "This phenomenon, known as..." It most logically follows a sentence that:',
            options: ['Describes the phenomenon without naming it', 'Provides a statistic about the phenomenon', 'Concludes the paragraph', 'Introduces an unrelated concept'],
            correctAnswer: 0,
            explanation: '"This phenomenon, known as..." uses "this" to refer back to something just described and then provides its technical name. It must follow the description of that phenomenon.'
          }
        ]
      }    },
    {
      id: 'ei2-text2',
      type: 'text' as const,
      content: `## Deep Dive: Mastering Sentence Placement

### Worked Example 1: Tracking Reference Links

| Sentence | Key Clue | Must Follow |
|---|---|---|
| "This adaptation allows the species to survive extreme cold." | "This adaptation" | A sentence describing the adaptation |
| "However, recent evidence complicates this conclusion." | "However" + "this conclusion" | A sentence stating the conclusion |
| "For example, the 2019 study found a 30% increase." | "For example" | A general claim that the study supports |

### Worked Example 2: Full Re-ordering

**Given sentences (scrambled):**
- [A] "The team collected over 500 soil samples from three continents."
- [B] "This global pattern suggests that soil carbon levels are declining universally, not just regionally."
- [C] "Soil carbon is critical for both agriculture and climate regulation."
- [D] "Analysis revealed that carbon content had dropped by 15% compared to 1990 levels."

| Step | Reasoning | Order |
|---|---|---|
| 1 | Start with the broadest/introductory statement | C |
| 2 | What did researchers do? Collected samples | A |
| 3 | What did they find? | D |
| 4 | What does this mean? ("This global pattern" = data from three continents) | B |
| **Final** | | **C → A → D → B** |

### Placement Red Flags

| Red Flag | Why It's Wrong |
|---|---|
| Pronoun without antecedent | "This" or "they" appears before what it refers to |
| Effect before cause | "As a result..." appears before the cause |
| Example before claim | "For instance..." appears with no prior general statement |
| Contradiction without setup | "However..." with nothing to contrast against |`
    },
    {
      id: 'ei2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Organization Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'Sentence to place: "As a result, shipping costs decreased by 40%." This sentence must follow:',
            options: ['A sentence describing a cause (new shipping route, technology, etc.)', 'A sentence about shipping history', 'A conclusion about the shipping industry', 'An introduction to a passage about economics'],
            correctAnswer: 0,
            explanation: '"As a result" signals a cause-effect relationship. This sentence IS the effect, so it must follow the cause. It cannot come before the explanation of what caused the decrease.'
          },
          {
            question: 'Which ordering principle is MOST important on SAT placement questions?',
            options: ['Alphabetical order of key terms', 'Logical flow: referential links and transitions', 'Sentence length: short before long', 'Putting the most impressive sentence first'],
            correctAnswer: 1,
            explanation: 'The SAT tests logical flow. Pronouns must follow their antecedents, examples must follow claims, and effects must follow causes. These referential links determine correct placement.'
          },
          {
            question: '"These findings" at the start of a sentence means it should be placed:',
            options: ['At the start of the paragraph', 'After sentences describing the findings it refers to', 'At the end of the passage', 'Anywhere — "these" is vague enough to work anywhere'],
            correctAnswer: 1,
            explanation: '"These findings" is a demonstrative pronoun + noun that MUST refer back to specific findings already described. Placing it before the findings are mentioned creates a dangling reference.'
          }
        ]
      }
    },
    {
      id: 'ei2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Sentence Placement Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          '"For example, the 2020 study…" goes [after a general claim|before any claims|at the paragraph start|anywhere]',
          '"However, new data contradicts…" goes [after the point it contradicts|at the start|before the data|at the end always]',
          '"This discovery" must follow [the discovery being described|any noun|the conclusion|the introduction]',
          'General → specific means [broad claim first, details after|details first, claim after|random order|longest first]'
        ],
        correctAnswers: ['after a general claim', 'after the point it contradicts', 'the discovery being described', 'broad claim first, details after'],
        hint1: 'Examples illustrate a preceding claim.',
        hint2: '"However" signals contrast — it needs something to contrast with.',
        hint3: '"This" is a demonstrative pronoun pointing back to a specific referent.',
        explanation: 'Examples follow claims. "However" follows the item it contradicts. "This + noun" must follow its referent. General-to-specific means claims before evidence.'
      }
    },
    {
      id: 'ei2-summary',
      type: 'text' as const,
      content: `## Part 2 Summary

| Strategy | Detail |
|---|---|
| Placement rule #1 | Pronouns/demonstratives must follow their referents |
| Placement rule #2 | Examples follow claims, effects follow causes |
| Transition clues | "However" = after contrast, "For example" = after claim |
| Re-ordering | Start broad, then narrow: intro → evidence → conclusion |
| Red flags | Pronoun without antecedent, effect before cause |

*Next: Effective Introductions & Conclusions →*`    }
  ]
};