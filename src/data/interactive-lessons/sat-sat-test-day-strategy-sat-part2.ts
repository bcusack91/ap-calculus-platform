export const satTestDayStrategyPart2Data = {
  topicSlug: 'sat-test-day-strategy-sat',
  sections: [
    {
      id: 'tds2-intro',
      type: 'text' as const,
      content: `# Time Management on the Digital SAT

**Part 2 of 7 — Pace Yourself for Maximum Score**

### Time Per Question
| Section | Time | Questions | Per Question |
|---|---|---|---|
| R&W Module | 32 min | 27 Qs | ~71 seconds |
| Math Module | 35 min | 22 Qs | ~95 seconds |

### The Two-Pass Strategy
**Pass 1 (first ~60% of time):** Answer every question you can solve quickly. Skip any question that takes more than 90 seconds.

**Pass 2 (remaining ~40% of time):** Return to flagged/skipped questions. By now you've banked time from the easy ones.

### Flagging Strategy
- **Flag and move on** if you've spent 90+ seconds without progress
- **Flag and answer** — always put SOMETHING down before moving on (no penalty for wrong answers)
- Return to flagged questions with fresh eyes

### The Last 2 Minutes
- Scan for any unanswered questions
- Verify you haven't misread any questions
- Don't change answers unless you're genuinely sure

### Common Time Traps
- Re-reading a passage 3+ times (limit to 2 reads max)
- Doing algebra when Desmos would be faster
- Second-guessing your first instinct
- Spending 3+ minutes on one question while easy ones wait`
    },
    {
      id: 'tds2-q1',
      type: 'quiz' as const,
      question: 'You have been working on a Math question for 2 minutes with no clear path forward. What should you do?',
      options: [
        'Keep working — you are close',
        'Flag it, put your best guess, and move on to easier questions',
        'Skip it entirely and leave it blank',
        'Start over with a completely different approach'
      ],
      correctAnswer: 1,
      explanation: 'After 2 minutes, the opportunity cost is high — easier questions are waiting. Flag it for review, select your best guess (no penalty for guessing), and come back with fresh eyes if time permits.'
    }
  ]
};
