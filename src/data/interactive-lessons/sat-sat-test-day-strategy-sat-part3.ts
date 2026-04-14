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
    },
    {
      id: 'tds3-text2',
      type: 'text' as const,
      content: `## Deep Dive: R&W Question Types Mastered

### Worked Example 1: Vocabulary in Context

| Step | Action |
|---|---|
| **Passage** | "The researcher's findings were *novel*, overturning decades of accepted theory." |
| **Question** | As used here, "novel" most nearly means… |
| **Cover the word** | "The researcher's findings were ___, overturning decades…" |
| **Your word** | "new" or "original" or "groundbreaking" |
| **Match** | A) fictional ❌ B) lengthy ❌ C) innovative ✅ D) popular ❌ |

### Worked Example 2: Eliminate Wrong Answer Types

| Trap Type | Example | Why It's Wrong |
|---|---|---|
| **Too extreme** | "The author completely rejects all modern art" | Passage says "questions some trends" |
| **Half-right** | "The study shows coffee improves memory and cures disease" | First half is supported, second is not |
| **Out of scope** | "Solar panels reduce political tension" | Passage only discusses energy costs |
| **Opposite** | "The data suggests declining enrollment" | Data actually shows increasing enrollment |

### R&W Question Distribution (~27 Qs per module)

| Type | Count | Time Tip |
|---|---|---|
| Vocabulary in Context | ~6 | Fast — 45-60 sec |
| Central Ideas / Purpose | ~4 | Medium — 60-75 sec |
| Command of Evidence | ~4 | Slow — 75-90 sec |
| Grammar & Conventions | ~5 | Fast — 45-60 sec |
| Rhetoric / Expression | ~4 | Medium — 60-75 sec |
| Inferences / Conclusions | ~4 | Medium — 60-90 sec |`
    },
    {
      id: 'tds3-quiz2',
      type: 'multiple-choice' as const,
      content: '**R&W Strategy Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage says a policy "may help reduce some forms of pollution." An answer choice says the policy "eliminates all pollution." This is an example of:',
            options: ['A half-right answer', 'A too-extreme answer', 'An out-of-scope answer', 'The correct answer'],
            correctAnswer: 1,
            explanation: '"May help reduce some" → "eliminates all" is a massive exaggeration. Too-extreme answers overstate what the passage actually says.'
          },
          {
            question: 'On Vocabulary in Context questions, the FIRST step should be:',
            options: ['Look up the word\'s dictionary definition', 'Cover the word, read the sentence, and predict your own word', 'Read each answer choice and pick the one you know', 'Skip it — vocabulary questions are the hardest'],
            correctAnswer: 1,
            explanation: 'Covering the target word and predicting your own replacement avoids being tricked by common definitions. The SAT often tests secondary meanings.'
          },
          {
            question: 'For Command of Evidence questions, the evidence must support:',
            options: ['The general topic of the passage', 'The specific claim stated in the question', 'The author\'s overall opinion', 'Any statement in the passage'],
            correctAnswer: 1,
            explanation: 'Evidence must match the SPECIFIC claim, not just the topic. A quote about climate change that discusses temperature does NOT support a claim about ocean acidity, even though both relate to climate.'
          }
        ]
      }
    },
    {
      id: 'tds3-dropdown',
      type: 'dropdown-select' as const,
      content: '**R&W Question Type Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          '"As used in line 3, \'critical\' most nearly means" is a [Vocabulary in Context|Central Ideas|Evidence|Grammar] question',
          'Best R&W reading order: read [question first|passage first|answers first|title first]',
          'An answer that goes beyond what the passage says is [Out of scope|Half-right|Too extreme|Correct]',
          'Grammar questions are typically [fast (45-60 sec)|slow (90+ sec)|medium (75 sec)|impossible]'
        ],
        correctAnswers: ['Vocabulary in Context', 'question first', 'Out of scope', 'fast (45-60 sec)'],
        hint1: 'Questions about word meaning "as used" = Vocabulary in Context.',
        hint2: 'Read the question stem first so you know what to look for.',
        hint3: 'If the passage doesn\'t discuss a topic, answers about it are out of scope.',
        explanation: 'Word-meaning questions = Vocabulary in Context. Read the question first for focused reading. Unsupported content = out of scope. Grammar Qs are fast because they test specific rules.'
      }
    },
    {
      id: 'tds3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary

| Strategy | Detail |
|---|---|
| Reading order | Question stem → passage → predict → eliminate |
| Vocab in Context | Cover word, predict, then match |
| Central Ideas | Too narrow or too broad = wrong |
| Evidence | Must match the SPECIFIC claim |
| Grammar | Trust ear, then apply rules |
| Rhetoric | Focus on the stated PURPOSE |
| Elimination | Too extreme, half-right, out of scope, opposite |

*Next: Math Section Strategy →*`
    }
  ]
};
