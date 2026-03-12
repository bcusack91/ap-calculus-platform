export const satTestDayStrategyPart3Data = {
  topicSlug: 'sat-test-day-strategy-sat',
  sections: [
    {
      id: 'tds3-intro',
      type: 'text' as const,
      content: `# R&W Section Strategy

**Part 3 of 7 — Approaching Reading & Writing Questions**

### Digital SAT R&W Format
Each question is a **short passage** (1-2 paragraphs) followed by **one question**. This is different from the old SAT (long passages, 10-11 questions each).

### The SAT R&W Reading Order
1. **Read the question stem first** — know what you're looking for
2. **Read the passage** with purpose — underline/highlight relevant text
3. **Answer before looking at choices** — form your own answer
4. **Eliminate wrong answers** — cross out choices that don't match

### Question Type Strategy

**Vocabulary in Context** (~6 per module):
- Substitute each answer choice into the sentence
- Pick the one that preserves the original meaning

**Central Ideas** (~4 per module):
- Main point, not a specific detail
- Too narrow or too broad = wrong

**Command of Evidence** (~4 per module):
- Which quote/data best supports the claim?
- Match the evidence to the specific claim, not the general topic

**Grammar & Conventions** (~5 per module):
- Trust your ear first, then apply rules
- Subject-verb agreement, punctuation, and pronoun clarity are most common

**Rhetoric/Expression** (~4 per module):
- Which choice best accomplishes the stated goal?
- Focus on the PURPOSE stated in the question`
    },
    {
      id: 'tds3-q1',
      type: 'quiz' as const,
      question: 'The most effective approach to SAT R&W questions is:',
      options: [
        'Read the passage carefully, then read all answer choices, then reread the passage',
        'Read the question stem first, then read the passage with purpose, then eliminate wrong answers',
        'Skim the passage quickly, pick the answer that sounds best',
        'Read all answer choices first, then find supporting evidence in the passage'
      ],
      correctAnswer: 1,
      explanation: 'Reading the question first gives you a target — you know what to look for in the passage. This focused reading is faster and more accurate than reading the passage "cold" without knowing the question.'
    }
  ]
};
