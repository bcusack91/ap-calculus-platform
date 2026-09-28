export const satExpressionPart2Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei2-intro',
      type: 'text' as const,
      content: `# Organization & Logical Sequence

**Part 2 of 7 — Paragraph Organization**

The Digital SAT never asks you to move a sentence to a new position, but it constantly tests whether you can follow the logical sequence of a short text. Transition questions and "Which choice most logically completes the text?" questions both depend on it.

### Reading for Logical Sequence

To decide what logically comes next in a text, look for:

1. **Referential links:** Does the sentence mention something that must come AFTER its introduction?
2. **Transition clues:** Does it start with "However," "Additionally," "For example"?
3. **Chronological order:** Does it describe an event that happened before or after other events?
4. **General → Specific:** Broad claims usually come before supporting details

### Example

**A logically sequenced text:**

Monarch butterflies migrate up to 3,000 miles each fall. For decades, scientists were puzzled by how they find their way. We now know they navigate using a combination of the sun's position and Earth's magnetic field. Recent research even identified magnetic particles in their antennae that may act as a biological compass.

Why it flows: behavior → puzzle about it → the answer → the newest detail. Each sentence builds on the one before it, and "they" always points back to the butterflies.

### Transition Signals and Where They Fit

| If a sentence starts with... | It must come... |
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
            question: 'Sea turtles travel thousands of miles between feeding grounds and nesting beaches. When researchers attached GPS devices to 40 female turtles, each one returned to nest on the beach where it had hatched. Later experiments showed that young turtles can sense Earth\'s magnetic field. Taken together, these findings suggest that ______ Which choice most logically completes the text?',
            options: ['turtles may use magnetic cues to find the beaches where they were born.', 'turtles return to their home beaches mainly by following ocean currents.', 'every migrating animal relies on Earth\'s magnetic field to navigate.', 'GPS devices can disrupt a sea turtle\'s natural sense of direction.'],
            correctAnswer: 0,
            explanation: 'The text moves from the behavior (turtles return to their birth beaches) to a possible mechanism (they can sense Earth\'s magnetic field), so the logical conclusion links the two: turtles may use magnetic cues to find those beaches. Ocean currents are never mentioned, "every migrating animal" generalizes far beyond turtles, and nothing suggests the GPS devices interfered with the turtles.'
          },
          {
            question: 'A sentence begins "This phenomenon, known as..." It most logically follows a sentence that:',
            options: ['Describes something without naming it', 'Provides a statistic about the phenomenon', 'Sums up the whole paragraph\'s main argument', 'Introduces a second, unrelated concept'],
            correctAnswer: 0,
            explanation: '"This phenomenon, known as..." uses "this" to refer back to something just described and then provides its technical name. It must follow the description of that phenomenon.'
          }
        ]
      }    },
    {
      id: 'ei2-text2',
      type: 'text' as const,
      content: `## Deep Dive: Mastering Logical Sequence

### Worked Example 1: Tracking Reference Links

| Sentence | Key Clue | Must Follow |
|---|---|---|
| "This adaptation allows the species to survive extreme cold." | "This adaptation" | A sentence describing the adaptation |
| "However, recent evidence complicates this conclusion." | "However" + "this conclusion" | A sentence stating the conclusion |
| "For example, the 2019 study found a 30% increase." | "For example" | A general claim that the study supports |

### Worked Example 2: Why This Order Works

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

### Sequence Red Flags

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
            question: 'A sentence reads: "As a result, shipping costs decreased by 40%." The sentence right before it must:',
            options: ['describe a change that would lower costs', 'summarize the history of the shipping trade', 'report that shipping costs had been rising', 'state the paragraph\'s overall conclusion'],
            correctAnswer: 0,
            explanation: '"As a result" signals a cause-effect relationship. This sentence IS the effect, so the sentence before it must supply the cause: some change (a new route, a new technology) that would lower costs. History, rising costs, or a conclusion would not produce the result the sentence announces.'
          },
          {
            question: 'When judging whether the ideas in a text are in a logical order, which principle matters most?',
            options: ['Shorter sentences should come before longer ones', 'Each sentence must follow what it refers back to', 'The most striking sentence should always come first', 'Sentences with numbers belong at the very end'],
            correctAnswer: 1,
            explanation: 'The SAT tests logical flow. Pronouns must follow their antecedents, examples must follow claims, and effects must follow causes. These reference links, not sentence length, drama, or numbers, determine the logical order.'
          },
          {
            question: 'A sentence begins "These findings suggest…" Where in a text can it logically appear?',
            options: ['At the very start, to introduce the topic', 'After the sentences that describe the findings', 'Only as the final sentence of the text', 'Just before the findings, to preview them'],
            correctAnswer: 1,
            explanation: '"These findings" is a demonstrative + noun that MUST refer back to specific findings already described. Putting it first or before the findings creates a reference to nothing, and nothing requires it to be the very last sentence.'
          }
        ]
      }
    },
    {
      id: 'ei2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Logical Sequence Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          '"For example, the 2020 study…" goes [after a general claim|before any claims|at the paragraph start|at the end of the text]',
          '"However, new data contradicts…" goes [after the point it contradicts|at the start|before the data|at the end always]',
          '"This discovery" must follow [the discovery being described|any noun|the conclusion|the introduction]',
          'General → specific means [broad claim first, details after|details first, claim after|newest findings first|shortest sentence first]'
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
| Sequence rule #1 | Pronouns/demonstratives must follow their referents |
| Sequence rule #2 | Examples follow claims, effects follow causes |
| Transition clues | "However" = after contrast, "For example" = after claim |
| Re-ordering | Start broad, then narrow: intro → evidence → conclusion |
| Red flags | Pronoun without antecedent, effect before cause |

*Next: Effective Introductions & Conclusions →*`    }
  ]
};