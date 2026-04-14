export const satTestDayStrategyPart7Data = {
  topicSlug: 'sat-test-day-strategy-sat',
  sections: [
    {
      id: 'tds7-intro',
      type: 'text' as const,
      content: `# During the Test: Mindset & Tactics

**Part 7 of 7 — Performing Your Best on Test Day**

### Mindset Strategies
- **"Next play" mentality** — if a question was hard, forget it. The next question is a fresh opportunity.
- **Confidence calibration** — trust your preparation. You've practiced this.
- **Anxiety is normal** — some nervousness improves performance. Deep breaths if it gets overwhelming.

### During Each Module
1. **First pass (Minutes 1-20):** Work through questions in order. Flag anything that takes >90 seconds.
2. **Second pass (Minutes 20-30):** Return to flagged questions with fresh perspective.
3. **Final check (Last 2-3 minutes):** Scan for unanswered questions and obvious errors.

### The Break
- You get a **10-minute break** between R&W and Math
- Eat your snack, drink water, use the restroom
- **Do NOT discuss questions** with other test-takers (it only causes anxiety)
- Light stretching or deep breathing to reset

### If You're Running Out of Time
- Answer every remaining question (guess if needed)
- Focus on questions you've already started
- Don't start a new complex question with 30 seconds left — guess and move on

### After the Test
- **Scores arrive in ~2 weeks**
- You can take the SAT **up to 7 times** (most colleges see your best score)
- If you feel bad about a section, remember: the adaptive scoring may have given you harder questions because you did well on Module 1`
    },
    {
      id: 'tds7-q1',
      type: 'quiz' as const,
      question: 'During a Math module, you have 5 minutes left and 4 questions remaining. What is the best strategy?',
      options: [
        'Spend 5 minutes on the hardest one — it is worth the most points',
        'Quickly attempt each, putting your best guess for any you cannot solve in ~1 minute',
        'Guess on all 4 and use the time to double-check earlier answers',
        'Skip them all — they are probably too hard'
      ],
      correctAnswer: 1,
      explanation: 'With ~75 seconds per question, quickly attempt each one. Some may be easier than they look. If you cannot solve one in 60 seconds, make an educated guess and move to the next. Every question is worth the same — don\'t leave any blank.'
    },
    {
      id: 'tds7-text2',
      type: 'text' as const,
      content: `## Deep Dive: Test Day Execution

### Worked Example 1: Module Pacing in Real Time

| Time | Question # | Action | Mental Note |
|---|---|---|---|
| 0:00 | 1-3 | Solve confidently | "Easy start, build momentum" |
| 5:00 | 4-6 | Q5 is hard — flag + guess | "Next play. Keep moving." |
| 10:00 | 7-10 | All medium — solved | "On pace. 25 min left." |
| 15:00 | 11-14 | Q13 tricky — over 90 sec, flag | "Don't chase it." |
| 22:00 | 15-18 | Solved | "Good pace. 13 min for 4 + flagged." |
| 27:00 | 19-22 | Solved 19-21, guessed 22 | "Now revisit flagged Qs." |
| 30:00 | Flagged Q5 | Fresh eyes — solved it! | "Worth coming back." |
| 32:00 | Flagged Q13 | Still unsure — keep original guess | "Don't change unless certain." |
| 34:00 | Review scan | All answered, no blanks | "Done. Submit." |

### Worked Example 2: Anxiety Management Techniques

| Technique | When to Use | How |
|---|---|---|
| Box breathing | Before starting, during break | 4 sec inhale → 4 sec hold → 4 sec exhale → 4 sec hold |
| Grounding (5-4-3-2-1) | If panic sets in | Name 5 things you see, 4 you hear, 3 you feel... |
| "Next play" | After a hard question | Mentally say "next play" and fully focus on the new Q |
| Positive self-talk | Module transition | "I prepared for this. One module at a time." |

### The Break: Your Reset Button

| Do ✅ | Don't ❌ |
|---|---|
| Eat your snack | Discuss questions with others |
| Drink water | Check your phone for answers |
| Use the restroom | Panic about R&W performance |
| Light stretching | Try to memorize math formulas |
| Deep breaths | Sit and worry |

### Score Prediction Guide

| Module 1 Feel | Module 2 Difficulty | Likely Score Range |
|---|---|---|
| "That was easy" | Got harder M2 | 600-800 possible |
| "Pretty good" | Got harder M2 | 550-750 possible |
| "Mixed" | Average M2 | 450-600 possible |
| "Struggled" | Got easier M2 | 200-500 range |`
    },
    {
      id: 'tds7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Test Day Mindset Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'You just spent 3 minutes on a question and got it wrong (you think). The best response is:',
            options: ['Go back and try again', '"Next play" — fully focus on the current question', 'Feel discouraged and rush through the next few', 'Count how many you think you\'ve missed'],
            correctAnswer: 1,
            explanation: '"Next play" mentality means the past question is done. Dwelling on it steals focus from the current question. Each new question is a fresh opportunity.'
          },
          {
            question: 'During the 10-minute break between R&W and Math, you should NOT:',
            options: ['Eat a snack', 'Discuss R&W questions with other students', 'Use the restroom', 'Do some light stretching'],
            correctAnswer: 1,
            explanation: 'Discussing answers with others only causes anxiety — you can\'t change your R&W answers. Use the break to physically and mentally reset for Math.'
          },
          {
            question: 'You received a harder Module 2 for Math. This most likely means:',
            options: ['You did poorly on Module 1', 'You did well on Module 1 and have access to higher scores', 'The test is the same difficulty for everyone', 'You should be worried about your score'],
            correctAnswer: 1,
            explanation: 'A harder Module 2 = you performed well on Module 1. This is GOOD — it means you\'re eligible for scores in the 600-800 range. Embrace the challenge.'
          }
        ]
      }
    },
    {
      id: 'tds7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Test Day Tactics Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'After a hard question, say [next play|I failed|that was unfair|I should give up]',
          'Break between sections = [10 min|5 min|15 min|30 min]',
          'With 30 sec left and 1 Q blank: [guess immediately|leave blank|start solving|ask for time]',
          'Harder Module 2 means your score ceiling is [higher|lower|unchanged|zero]'
        ],
        correctAnswers: ['next play', '10 min', 'guess immediately', 'higher'],
        hint1: '"Next play" — forget the past question and focus forward.',
        hint2: 'You get a 10-minute break between R&W and Math.',
        hint3: 'Never leave a question blank — no penalty for guessing.',
        explanation: '"Next play" resets your focus. Break = 10 minutes. Always guess rather than leaving blank. Harder Module 2 = higher score ceiling.'
      }
    },
    {
      id: 'tds7-summary',
      type: 'text' as const,
      content: `## Full Topic Summary: Test Day Strategy

| Part | Topic | Key Takeaway |
|---|---|---|
| 1 | Format & Structure | 98 Qs, 134 min, adaptive modules |
| 2 | Time Management | Two-pass strategy, ~71/95 sec per Q |
| 3 | R&W Strategy | Question first → passage → predict → eliminate |
| 4 | Math Strategy | Direct solve, backsolve, pick numbers, Desmos |
| 5 | Elimination | POE techniques, no penalty for guessing |
| 6 | Week Before | Error log, sleep 8+, no new material |
| 7 | Test Day | "Next play" mentality, pacing, break strategy |

### The 5 Golden Rules
1. **Never leave a question blank** — no penalty
2. **Flag at 90 seconds** — don't let one Q sink you
3. **Module 1 matters most** — it determines your ceiling
4. **Sleep > cramming** — 8+ hours the night before
5. **"Next play"** — forget the last question, focus on this one

🎉 *Test Day Strategy complete! You've got this.*`
    }
  ]
};
