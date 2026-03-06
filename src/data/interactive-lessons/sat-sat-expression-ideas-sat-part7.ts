export const satExpressionPart7Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei7-intro',
      type: 'text' as const,
      content: `# Expression of Ideas Review

**Part 7 of 7 — Comprehensive Review**

### Quick Decision Guide

| Question Asks About | Look For |
|---|---|
| **Best word/phrase** | Precision, tone match, correct connotation |
| **Sentence placement** | Reference links, transition clues, chronology |
| **Best introduction** | Covers paragraph scope, connects to previous |
| **Best conclusion** | Synthesizes (no new info), looks forward |
| **Add/delete sentence** | Does it support the topic sentence? |
| **Combine sentences** | Preserve meaning, improve flow |
| **Rhetorical synthesis** | Match the stated goal, not just accuracy |

### Common Mistakes on Expression Questions

1. **Choosing "sounds sophisticated" over "fits the passage"** — An answer can be well-written but wrong if it doesn't match the tone or purpose
2. **Ignoring the stated goal** on synthesis questions — Read the goal twice
3. **Adding information that's interesting but off-topic** — Every sentence must serve the paragraph
4. **Choosing the longest option** — Longer ≠ better; often the trap

### Test Day Checklist ✅

Before choosing your answer on any Expression question:
- [ ] Does it match the passage's tone?
- [ ] Is it the most precise option?
- [ ] Does it accomplish the stated goal?
- [ ] Would removing it weaken the paragraph?
- [ ] Is it the most concise correct option?`
    },
    {
      id: 'ei7-quiz',
      type: 'multiple-choice' as const,
      content: '**Expression of Ideas Final Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage about marine conservation uses formal language throughout. Which sentence best fits at the end of a paragraph about coral bleaching? "The implications of a 2°C ocean temperature rise _____."',
            options: ['could prove catastrophic for reef ecosystems that support approximately 25% of all marine species', 'would be really bad for all the fish and stuff living near coral', 'might possibly maybe cause some issues for ocean life', 'are worrisome, concerning, and deeply troubling to scientists and researchers worldwide'],
            correctAnswer: 0,
            explanation: 'Option A is precise (2°C, 25%), formal, and specific. B is informal, C is hedging with redundant qualifiers, and D is redundant ("worrisome, concerning, and deeply troubling" all mean the same thing).'
          },
          {
            question: 'When asked "Which choice most effectively accomplishes the goal?" the key word is:',
            options: ['"Goal" — you must identify and match the specific stated objective', '"Effectively" — choose the most sophisticated writing', '"Choice" — compare all options before deciding', '"Most" — pick the longest, most detailed option'],
            correctAnswer: 0,
            explanation: 'The stated goal is the deciding factor. All choices will be grammatically correct and use information from the notes. Only one actually accomplishes the specific goal asked for.'
          }
        ]
      }
    }
  ]
};