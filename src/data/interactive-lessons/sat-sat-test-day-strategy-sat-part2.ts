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
        'Keep working, since you have already invested two minutes',
        'Enter a guess and flag it to revisit if time allows',
        'Leave it blank and come back only if time remains',
        'Start over from scratch with a completely new approach'
      ],
      correctAnswer: 1,
      explanation: 'After 2 minutes, the opportunity cost is high: easier questions are waiting. Enter your best guess (there is no penalty for guessing), flag it, and come back with fresh eyes if time permits. The two minutes already spent are gone either way, a blank can never earn a point, and restarting from scratch spends even more time.'
    },
    {
      id: 'tds2-text2',
      type: 'text' as const,
      content: `## Deep Dive: Mastering Time Allocation

### Worked Example 1: Two-Pass Scoring Simulation

| Strategy | Easy Qs (14) | Medium Qs (5) | Hard Qs (3) | Total Correct |
|---|---|---|---|---|
| In order, 95 sec each | 14 ✅ | 5 ✅ | 2 ✅ (ran out of time on 1) | **21/22** |
| Stuck on #3 for 4 min | 13 ✅ | 3 ✅ | 1 ✅ (skipped 2 at end) | **17/22** |
| Two-pass (easy first) | 14 ✅ | 5 ✅ | 2 ✅ + 1 guess | **21–22/22** |

Getting stuck on ONE question can cost you 4-5 questions at the end.

### Worked Example 2: Time Check Benchmarks (Math)

| After Question # | Time Used | Time Remaining | Status |
|---|---|---|---|
| 5 | ~7 min | ~28 min | On pace |
| 10 | ~14 min | ~21 min | On pace |
| 15 | ~22 min | ~13 min | On pace |
| 18 | ~27 min | ~8 min | On pace |
| 22 | ~35 min | 0 min | Done |

**If you're behind pace:** Flag the current question, guess, and move to the next.

### When to Spend Extra Time

| Situation | Time Investment | Why |
|---|---|---|
| You're 80% done and confident | Extra 30 sec is fine | Already banked time |
| Question is almost solved | 30 more seconds max | Sunk cost — don't chase |
| Totally stuck | 0 more seconds | Move on immediately |
| Second pass, fresh idea | Up to 60 sec | You have time now |`
    },
    {
      id: 'tds2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Time Management Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'In a 35-minute Math module with 22 questions, approximately how many seconds per question?',
            options: ['~60 seconds', '~75 seconds', '~95 seconds', '~120 seconds'],
            correctAnswer: 2,
            explanation: '35 min × 60 sec = 2100 sec ÷ 22 Qs ≈ 95 seconds per question.'
          },
          {
            question: 'Which rule matches the two-pass strategy for your first pass through a module?',
            options: ['Answer every question in order, however long each one takes', 'Guess and flag any question that passes about 90 seconds', 'Answer only the five easiest questions, then start pass two', 'Skip every question with a graph or table until pass two'],
            correctAnswer: 1,
            explanation: 'On the first pass you answer everything you can solve quickly, and when a question passes about 90 seconds you enter a guess and flag it. That banks time for the flagged questions on pass two. Working strictly in order lets one hard question eat your time, stopping after five easy questions wastes the first pass, and graphs and tables are often quick points.'
          },
          {
            question: 'With 2 minutes left and 3 questions unanswered, the best approach is:',
            options: ['Skip all three, since there is no time to solve them', 'Use the time to recheck answers you already gave', 'Spend the full 2 minutes solving just one of them', 'Answer all three, using quick elimination on each one'],
            correctAnswer: 3,
            explanation: 'With ~40 seconds each, try to eliminate at least 1-2 choices and make an educated guess. Every question answered is a chance at a point — never leave anything blank.'
          }
        ]
      }
    },
    {
      id: 'tds2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Time Pacing Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'R&W per-question time budget ≈ [71 sec|60 sec|90 sec|120 sec]',
          'If stuck > 90 sec, you should [flag and move on|keep trying|skip permanently|restart the problem]',
          'Two-pass strategy: first pass uses ~[60%|30%|80%|100%] of time',
          'Last 2 min: main goal = [no blanks|reread all Qs|check math|change doubtful answers]'
        ],
        correctAnswers: ['71 sec', 'flag and move on', '60%', 'no blanks'],
        hint1: '32 min ÷ 27 Qs = ~71 seconds per question.',
        hint2: 'Flag it, write your best guess, and move to the next question.',
        hint3: 'Use about 60% of time for the first pass, 40% for the second pass.',
        explanation: 'R&W: 32 × 60 ÷ 27 ≈ 71 sec. When stuck, flag and guess — come back later. First pass ~60% of time, second pass ~40%. In the last 2 min, verify every question has an answer.'
      }
    },
    {
      id: 'tds2-summary',
      type: 'text' as const,
      content: `## Part 2 Summary

| Strategy | Detail |
|---|---|
| Per Q time (R&W) | ~71 seconds |
| Per Q time (Math) | ~95 seconds |
| First pass | ~60% of time, answer easy/medium Qs |
| Second pass | ~40% of time, revisit flagged Qs |
| Flag rule | >90 sec without progress → flag + guess |
| Last 2 min | Scan for blanks, verify answers |
| Never | Leave any question blank |

*Next: R&W Section Strategy →*`
    }
  ]
};
