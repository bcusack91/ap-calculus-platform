export const mcatTestDayPart6Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'td6-intro',
      type: 'text' as const,
      content: `# Test Day Strategy for the MCAT

**Part 6 of 7 — Score Improvement & Practice Exam Analysis**

### How to Review Practice Exams

For EVERY question (right and wrong), ask:

1. **Why is the right answer right?** Understand the reasoning
2. **Why is each wrong answer wrong?** Identify the trap
3. **Did I use passage info or outside knowledge?** Know the question type
4. **What content gap does this reveal?** Add to study list

### Tracking Your Progress

Keep a log for each practice exam:
- **Score by section**: Identify strongest and weakest sections
- **Score by topic**: Find specific content gaps (e.g., "I miss 60% of operon questions")
- **Error type**: Content gap? Misread question? Ran out of time? Careless mistake?

### Error Categories

| Error Type | Fix |
|-----------|-----|
| Content gap | Study the topic, make flashcards |
| Misread question | Practice reading question stems carefully |
| Time pressure | Do timed passage practice |
| Careless mistake | Slow down on "easy" questions, double-check |
| Test anxiety | Practice under simulated conditions |

### Score Plateaus

If your score stops improving:
- Focus on weakest topic areas (biggest point gains)
- Do more practice passages, fewer content reviews
- Analyze error patterns — are you making the same mistakes?
- Take a day off — rest can improve performance`
    },
    {
      id: 'td6-worked',
      type: 'text' as const,
      content: `### Worked Example — Reading an Error Log to Decide What to Fix

After a full-length, a student tags every missed question by cause:

| Error type | Count | Share of misses |
|-----------|-------|-----------------|
| Content gap | 6 | 27% |
| Misread question | 4 | 18% |
| Time pressure | 9 | 41% |
| Careless mistake | 3 | 14% |
| **Total missed** | **22** | **100%** |

**Step 1 — Find the dominant cause.** Time pressure accounts for **9 of 22** misses ($\\approx 41\\%$) — the single biggest bucket. More content review would barely touch most of these errors.

**Step 2 — Match the fix to the cause.** Time-pressure misses call for *timed passage drills*, pacing checkpoints, and a stricter "2-minute then flag" rule — **not** another pass through textbooks. The intervention must target the actual failure mode.

**Step 3 — Don't ignore the cheap wins.** Misread (4) and careless (3) errors are 7 misses — about a third of the total — and they're often the *fastest* to fix: slow down on the stem, underline what's asked, and double-check unit conversions. These can lift a score quickly.

**Step 4 — Reserve real study for true gaps.** Only the 6 content-gap misses warrant new learning. Identify the specific topics (e.g., "amino acid pKa," "Doppler effect") and make targeted flashcards — don't re-review everything.

**Step 5 — Re-measure next full-length.** The point of the log is the *trend*. If the time-pressure bucket shrinks after pacing work, the intervention worked; if not, adjust again.

**Takeaway:** Score gains come from diagnosing *why* you miss, then aiming each fix at the largest, most-addressable error category — not from blanket re-studying.`
    },
    {
      id: 'td6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Score Improvement** 🎯`,
      exercise: {
        questions: [
          {
            question: `You consistently get questions right when reviewing them calmly but miss them during timed practice. Your main issue is:`,
            options: [`Time pressure and test anxiety — practice more under timed, simulated conditions`, `A content gap`, `Bad luck`, `The questions are unfair`],
            correctAnswer: 0,
            explanation: `If you can answer correctly without time pressure, you have the knowledge. The issue is performance under pressure. The fix: more timed practice under real conditions, deep breathing strategies, and building familiarity with the time constraints.`
          },
          {
            question: `In the error-log example, time-pressure misses are the largest bucket (9 of 22). The best response is to:`,
            options: [`Do timed passage drills and tighten pacing — not another round of content review`, `Re-read every textbook chapter`, `Conclude the practice exam was defective`, `Ignore it since you know the content`],
            correctAnswer: 0,
            explanation: `When pacing is the dominant failure mode, the fix is pacing practice, not content review. Matching the intervention to the actual error category is what moves the score.`
          },
          {
            question: `Why are "misread" and "careless" errors often the fastest points to recover?`,
            options: [`The knowledge is already there; small habit changes (slowing on the stem, double-checking) fix them quickly`, `They require learning entirely new topics`, `They only occur on discrete questions`, `They cannot be fixed at all`],
            correctAnswer: 0,
            explanation: `These errors are execution failures, not knowledge gaps. Underlining what the stem asks and verifying unit conversions can convert them to points without weeks of new study.`
          }
        ]
      }
    },
    {
      id: 'td6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Diagnosing & Plateaus** 🎯`,
      exercise: {
        questions: [
          {
            question: `The main reason to review questions you got RIGHT (not just wrong) is to:`,
            options: [`Confirm your reasoning was sound, not lucky, and catch flawed logic that happened to land on the right answer`, `Pad your study log with more entries`, `Avoid reviewing wrong answers`, `Memorize the specific questions for the real test`],
            correctAnswer: 0,
            explanation: `A correct answer reached by faulty reasoning is a hidden weakness that will fail on a different question. Reviewing correct items verifies the process, not just the outcome.`
          },
          {
            question: `Your score has plateaued for three straight full-lengths. The most productive adjustment is to:`,
            options: [`Target your weakest topics with focused passage practice and analyze recurring error patterns`, `Take the same easy questions repeatedly`, `Stop tracking errors`, `Switch your test date without changing your approach`],
            correctAnswer: 0,
            explanation: `Plateaus usually mean your current routine has stopped exposing new weaknesses. Concentrating on the weakest areas yields the biggest point gains, and pattern analysis reveals systematic mistakes to break.`
          },
          {
            question: `Tracking scores by TOPIC (e.g., "miss 60% of operon questions") rather than only by section helps because it:`,
            options: [`Pinpoints specific content gaps so study time targets exactly what's costing points`, `Replaces the need to ever take full-lengths`, `Guarantees a 520`, `Makes the section scores irrelevant`],
            correctAnswer: 0,
            explanation: `Section-level data tells you *where* you're weak; topic-level data tells you *what* to fix. Granular tracking directs limited study hours to the highest-yield gaps.`
          }
        ]
      }
    },
    {
      id: 'td6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Review EVERY practice question — right AND wrong (confirm reasoning, not just answers)
- Tag misses by error type, then aim each fix at the largest, most-addressable bucket
- Misread and careless errors are often the fastest points to recover
- Track scores by section AND topic to find specific gaps
- At a plateau? Focus on weakest areas with timed practice for biggest point gains`
    }
  ]
};
