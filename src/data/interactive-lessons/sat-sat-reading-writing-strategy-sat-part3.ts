export const satRWStrategyPart3Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'rw3-intro',
      type: 'text' as const,
      content: `# Transitions & Logical Flow

**Part 3 of 7 — Connecting Ideas Effectively**

Transition questions test whether you understand the logical relationship between sentences or paragraphs. They're among the most frequent on the SAT Writing section.

### Transition Categories

| Relationship | Transitions | Example |
|---|---|---|
| **Continuation/Addition** | furthermore, moreover, additionally, also | "She excels in math. Moreover, she leads the debate team." |
| **Contrast** | however, nevertheless, on the other hand, yet | "The plan was expensive. However, it produced results." |
| **Cause/Effect** | therefore, consequently, as a result, thus | "Sales dropped 40%. Consequently, the company restructured." |
| **Example/Illustration** | for instance, for example, specifically | "Many species are threatened. For example, the vaquita population fell below 10." |
| **Concession** | admittedly, granted, although | "Admittedly, the sample size was small." |
| **Sequence** | first, then, finally, subsequently | "First, gather data. Then, analyze the results." |

### Strategy: Cover the Transition, Predict the Relationship

1. Read the sentence BEFORE the transition
2. Read the sentence AFTER the transition
3. Ask: Are these ideas **continuing**, **contrasting**, or **cause/effect**?
4. Choose the transition that matches

### Example

"The city invested \\$50 million in public transit. _______, ridership increased by 35% the following year."

- Before: investment happened
- After: positive result occurred
- Relationship: **cause → effect**
- Answer: **As a result** (not "However," "Nevertheless," or "For example")

### SAT Trap ⚠️

"However" is the most commonly chosen WRONG answer. Students pick it because it "sounds academic." Only use "however" when the second sentence **contradicts or contrasts** with the first.`
    },
    {
      id: 'rw3-quiz',
      type: 'multiple-choice' as const,
      content: '**Transitions Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '"The new policy reduced carbon emissions by 15%. _______, manufacturing output remained unchanged, dispelling fears of economic harm." Choose the best transition.',
            options: ['Moreover', 'However', 'Therefore', 'For example'],
            correctAnswer: 0,
            explanation: 'The first sentence gives a positive result (emissions down). The second adds ANOTHER positive result (output stayed the same). "Moreover" adds supporting information. "However" would imply contrast, which isn\'t the relationship here.'
          },
          {
            question: '"Critics argued the study was flawed due to its small sample size. _______, the researchers conducted a follow-up study with 10,000 participants and found identical results."',
            options: ['In response', 'Similarly', 'For instance', 'Meanwhile'],
            correctAnswer: 0,
            explanation: 'The second sentence directly addresses the criticism from the first. "In response" captures this action-reaction relationship. "Similarly" implies the same kind of thing happened. "For instance" would give an example of the criticism.'
          },
          {
            question: 'The transition "nevertheless" is most similar in meaning to:',
            options: ['Despite that / even so (contrast despite expectation)', 'As a result (cause-effect)', 'In addition (continuation)', 'Specifically (example)'],
            correctAnswer: 0,
            explanation: '"Nevertheless" means "despite what was just said" — it introduces a contrasting result that goes against expectation. It belongs in the contrast/concession category alongside "however" and "yet."'
          }
        ]
      }
    }
  ]
};