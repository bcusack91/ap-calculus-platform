export const satRWStrategyPart7Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'rw7-intro',
      type: 'text' as const,
      content: `# R&W Module Review & Test Strategy

**Part 7 of 7 — Putting It All Together**

### Digital SAT R&W Structure

| Module | Questions | Time | Focus |
|---|---|---|---|
| **Module 1** | 27 | 32 min | Mix of reading & writing |
| **Module 2** | 27 | 32 min | Adaptive difficulty based on Module 1 |

### Question Type Distribution

| Type | ~Questions Per Module |
|---|---|
| Craft and Structure | 6-7 |
| Information and Ideas | 6-7 |
| Standard English Conventions | 6-7 |
| Expression of Ideas | 6-7 |

### Time Strategy: The 70-Second Rule

- 32 minutes ÷ 27 questions = ~71 seconds per question
- **Easy questions:** 30-45 seconds (save time for harder ones)
- **Medium questions:** 60-90 seconds
- **Hard questions:** Flag and return if over 2 minutes

### Decision Framework for Writing Questions

1. Is there a grammar error? → Fix it (conventions)
2. Is there wordiness? → Choose concise option (eliminate redundancy)
3. Is there a transition? → Identify the relationship (addition, contrast, cause)
4. Is it a rhetorical synthesis? → Match the stated goal

### Final Tips

- **Read answer choices vertically** — compare what's different between them to identify what's being tested
- **On pronouns:** Always check what the pronoun refers to
- **On transitions:** Cover the transition word and predict the relationship first
- **On conciseness:** Among grammatically correct choices, shorter is usually better
- **When stuck:** Eliminate the two most obviously wrong choices, then compare the remaining two carefully`
    },
    {
      id: 'rw7-quiz',
      type: 'multiple-choice' as const,
      content: '**Comprehensive R&W Review** 🎯',
      exercise: {
        questions: [
          {
            question: '"The study, which was conducted by researchers at MIT, _____ that sleep deprivation affects memory." Which answer is most concise and correct?',
            options: ['found', 'was able to find out and determine', 'found and concluded definitively', 'had the finding that'],
            correctAnswer: 0,
            explanation: 'All convey similar meaning, but "found" is the most concise. The SAT consistently rewards eliminating unnecessary words. "Was able to find out and determine" is redundant; "had the finding that" is wordy.'
          },
          {
            question: 'Approximately how many seconds should you spend on each R&W question?',
            options: ['About 70 seconds (32 min ÷ 27 questions)', 'About 30 seconds to leave time for review', 'About 2 minutes per question', 'Exactly 60 seconds'],
            correctAnswer: 0,
            explanation: '32 minutes ÷ 27 questions = approximately 71 seconds each. Budget less time for easy questions (30-45s) and more for hard ones (up to 2 minutes), but 70 seconds is the target average.'
          },
          {
            question: '"The new medication proved effective. _____, it carried fewer side effects than existing treatments." Best transition:',
            options: ['Moreover — adds another positive point', 'However — this contrasts with effectiveness', 'Therefore — side effects are a result of effectiveness', 'For example — side effects illustrate effectiveness'],
            correctAnswer: 0,
            explanation: 'Both sentences present positive aspects of the medication. "Moreover" adds supporting information. "However" would imply contrast (but both points are positive). "Therefore" implies causation that isn\'t present.'
          }
        ]
      }
    },
    {
      id: 'rw7-text2',
      type: 'text' as const,
      content: `## Deep Dive: Complete R&W Strategy Guide

### Worked Example 1: Question Type Identification

| Clue in the Question | Question Type | Strategy |
|---|---|---|
| Underlined portion with grammar options | Standard English Conventions | Find the grammar rule being tested |
| "Which choice completes the text with the most logical transition?" | Transitions | Predict the relationship first |
| Bullet-point notes + "Which choice most effectively…" | Rhetorical Synthesis | Read the goal first |
| "Which choice best states the main idea?" | Information & Ideas | Eliminate details, find the central claim |
| Shorter vs. longer answer choices | Conciseness | Grammar first, then shortest wins |
| "Which choice most logically completes the text?" | Craft & Structure | Check context before and after the blank |

### Worked Example 2: Module Pacing Plan

| Time Block | Questions | Strategy |
|---|---|---|
| 0:00–10:00 | Q1–Q9 | Move quickly through easy/medium questions |
| 10:00–20:00 | Q10–Q18 | Maintain pace, flag any 2+ minute questions |
| 20:00–30:00 | Q19–Q27 | Finish remaining, tackle flagged questions |
| 30:00–32:00 | Flagged | Final review of flagged items only |

### Worked Example 3: The Vertical Comparison Technique

When comparing answer choices, look at what DIFFERS between them:

| Choice A | Choice B | Choice C | Choice D |
|---|---|---|---|
| found | discovered | found out | came to find |
| ↑ concise | ↑ concise | ↑ wordy | ↑ wordy |

**Differences = what's being tested.** Here, conciseness. Choose A or B, then pick the more natural fit.

### Complete R&W Checklist

| Category | Before Answering, Ask… |
|---|---|
| Grammar | Is there a subject-verb agreement error? |
| Pronouns | Does the pronoun clearly refer to one noun? |
| Transitions | What's the logical relationship between ideas? |
| Conciseness | Is there a shorter option that means the same? |
| Punctuation | Is the comma/semicolon/dash used correctly? |
| Synthesis | Does this answer match the stated goal? |`
    },
    {
      id: 'rw7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Final R&W Mastery Check** 🎯',
      exercise: {
        questions: [
          {
            question: 'A question gives you bullet-point notes and asks: "Which choice most effectively presents a contrast between the two methods?" What type of question is this?',
            options: ['Rhetorical synthesis — notes + goal = synthesis question', 'Standard English Conventions — it\'s testing grammar', 'Information and Ideas — it asks about a main idea', 'Craft and Structure — it tests text structure'],
            correctAnswer: 0,
            explanation: 'Notes + a stated goal ("effectively presents a contrast") = rhetorical synthesis. Strategy: read the goal, filter relevant notes, pick the answer that compares BOTH methods (since "contrast" requires mentioning both).'
          },
          {
            question: '"The orchestra, along with the choir, _____ performing at the benefit concert this Saturday." Which is correct?',
            options: ['is — "orchestra" is the subject; "along with" is a parenthetical, not a compound subject', 'are — orchestra + choir makes a plural subject', 'were — past tense matches "this Saturday"', 'have been — present perfect for future events'],
            correctAnswer: 0,
            explanation: '"Along with the choir" is a parenthetical phrase — it does NOT make the subject plural. The true subject is "orchestra" (singular) → "is." This is different from "and," which WOULD create a compound plural subject.'
          },
          {
            question: 'You have 5 minutes left and 3 questions remaining. What should you do?',
            options: ['Answer all 3 — ~1.5 minutes each is enough time', 'Pick the easiest-looking one, guess on the other 2', 'Skip all 3 and review previous answers', 'Spend all 5 minutes on the hardest question'],
            correctAnswer: 0,
            explanation: '1.5 minutes per question is enough for most R&W questions (average is ~70 seconds). Never leave questions blank on the SAT — there\'s no penalty for wrong answers. Answer all three with your remaining time.'
          }
        ]
      }
    },
    {
      id: 'rw7-dropdown',
      type: 'dropdown-select' as const,
      content: '**R&W Strategy Review** — Select the correct strategy.',
      exercise: {
        dropdowns: [
          'Target time per R&W question: about [70|30|120|90] seconds',
          '"Along with" creates a [parenthetical|compound|plural|collective] phrase',
          'When stuck between two choices, re-read the [question stem|passage title|first answer|notes]',
          'No penalty for wrong answers, so [never leave blanks|guess only if time is short|skip hard questions|leave uncertain answers blank]'
        ],
        correctAnswers: ['70', 'parenthetical', 'question stem', 'never leave blanks'],
        hint1: '32 minutes ÷ 27 questions.',
        hint2: '"Along with" ≠ "and" — it doesn\'t compound the subject.',
        hint3: 'The question stem tells you what\'s being tested.',
        explanation: '70 seconds average. "Along with" is parenthetical (doesn\'t change subject number). Re-read the question stem to refocus. No guessing penalty — always answer every question.'
      }
    },
    {
      id: 'rw7-summary',
      type: 'text' as const,
      content: `## Part 7 Summary — Complete R&W Review

| Topic (Part) | Key Takeaway |
|---|---|
| Sentence Structure (1) | Know comma splices, run-ons, fragments |
| Subject-Verb Agreement (2) | Find the true subject; ignore interrupters |
| Transitions (3) | Predict the relationship before reading choices |
| Conciseness (4) | Grammar → meaning → shortest option wins |
| Pronouns (5) | Clear antecedent + number agreement |
| Rhetorical Synthesis (6) | Goal first, match notes to purpose |
| Overall Strategy (7) | 70 seconds/question, vertical comparison, never leave blanks |

### R&W Module Quick Reference

| Element | Detail |
|---|---|
| Questions per module | 27 |
| Time per module | 32 minutes |
| Modules | 2 (Module 2 adapts to your Module 1 performance) |
| No penalty | Guess on every question — never leave blanks |
| Flag feature | Use it for questions taking >2 minutes |

🎉 *Congratulations! You've completed the entire R&W Strategy series!*`
    }
  ]
};