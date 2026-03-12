export const satReadingEvidencePart4Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 're4-intro',
      type: 'text' as const,
      content: `# Vocabulary in Context

**Part 4 of 7 — Word Meaning from Context**

The SAT tests "words in context"—you need to determine which meaning of a word fits the passage, NOT just the most common definition.

### Strategy: Substitution Method

1. Read the sentence with the target word
2. Cover the word and predict what should go there
3. Check which answer choice matches your prediction

### Example

> "The company decided to **table** the proposal until the next quarterly meeting."

The word "table" most nearly means:
- A) a piece of furniture ❌
- B) postpone ✅
- C) present for discussion ❌ (British English meaning—less common in SAT context)
- D) organize into rows ❌

### Multiple-Meaning Words the SAT Loves

| Word | Common Meaning | SAT Contextual Meaning |
|---|---|---|
| **Acute** | sharp, severe | perceptive, keen |
| **Check** | verify | restrain, limit |
| **Arrest** | detain by police | stop, halt (progress) |
| **Qualify** | become eligible | limit, moderate (a statement) |
| **Gravity** | force of attraction | seriousness, importance |
| **Champion** | winner | advocate for, support |
| **Craft** | art project | skill, careful construction |
| **Provincial** | from a province | narrow-minded, unsophisticated |

### SAT Trap ⚠️

The most **obvious** definition is almost always wrong. If "table" is in the answer choices and one option is "a flat surface for eating," that's the trap. The SAT wants the **secondary** or **contextual** meaning.`
    },
    {
      id: 're4-quiz',
      type: 'multiple-choice' as const,
      content: '**Vocabulary in Context Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '"The senator sought to TEMPER her criticism of the bill with acknowledgment of its sponsors\' good intentions." In this context, "temper" most nearly means:',
            options: ['moderate', 'anger', 'heat-treat (as metal)', 'disposition'],
            correctAnswer: 0,
            explanation: 'She is softening her criticism by also praising intentions. "Moderate"—to reduce the intensity of—fits perfectly. "Temper" meaning anger or heat-treating metal doesn\'t fit this context.'
          },
          {
            question: '"The artist\'s PEDESTRIAN approach to the landscape disappointed critics who expected innovation." "Pedestrian" most nearly means:',
            options: ['unimaginative and dull', 'walking on foot', 'related to foot traffic', 'methodical and thorough'],
            correctAnswer: 0,
            explanation: 'Critics expected innovation but were disappointed—so the approach was the opposite of innovative. "Pedestrian" meaning "ordinary, unimaginative" fits. The literal meaning (walking) is the trap.'
          },
          {
            question: 'When you encounter a vocabulary-in-context question, the FIRST thing you should do is:',
            options: ['Reread the sentence and predict a synonym BEFORE looking at the choices', 'Look at all four choices and pick the most common definition', 'Think about how you personally use the word', 'Choose the most sophisticated-sounding option'],
            correctAnswer: 0,
            explanation: 'Predicting before looking prevents you from being attracted to trap answers. Your prediction based on context will almost always match the correct choice.'
          }
        ]
      }
    }
  ]
};