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
      }
    }
  ]
};