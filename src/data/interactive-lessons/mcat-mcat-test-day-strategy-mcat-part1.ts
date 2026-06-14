export const mcatTestDayPart1Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'td1-intro',
      type: 'text' as const,
      content: `# Test Day Strategy for the MCAT

**Part 1 of 7 — MCAT Structure & Timing**

### MCAT Exam Structure

| Section | Questions | Time | Time per Question |
|---------|----------|------|------------------|
| **Chem/Phys** (CP) | 59 | 95 min | ~1.6 min |
| Break | — | 10 min | — |
| **CARS** | 53 | 90 min | ~1.7 min |
| Break | — | 30 min | — |
| **Bio/Biochem** (BB) | 59 | 95 min | ~1.6 min |
| Break | — | 10 min | — |
| **Psych/Soc** (PS) | 59 | 95 min | ~1.6 min |

**Total**: 230 questions, 6 hours 15 minutes (test time), ~7.5 hours total (with breaks)

### Scoring

- Each section: 118-132 (midpoint 125)
- Total: 472-528 (midpoint 500)
- Scaled score based on percentile
- **508**: ~75th percentile (competitive for most MD schools)
- **515**: ~90th percentile (competitive for top schools)
- **520+**: ~97th percentile (elite)`
    },
    {
      id: 'td1-worked',
      type: 'text' as const,
      content: `### Worked Example — How the 472–528 Scale Is Built

The MCAT total is the **sum of four section scores**, each on a 118–132 scale.

**Step 1 — Find the floor and ceiling.** Minimum per section = 118; four sections give $4 \\times 118 = 472$. Maximum per section = 132; four sections give $4 \\times 132 = 528$. That is exactly the 472–528 total range.

**Step 2 — Find the midpoint.** Each section's midpoint is 125, so the total midpoint is $4 \\times 125 = 500$ — the "average" score by design.

**Step 3 — Reason about a target.** A student scores 128, 126, 127, and 127. Total $= 128 + 126 + 127 + 127 = 508$. Because 508 sits around the **75th percentile**, this applicant is competitive for many MD programs.

**Step 4 — See why balance matters.** Compare two applicants who both total 508:
- Balanced: 127 / 127 / 127 / 127.
- Lopsided: 132 / 132 / 122 / 122.

Same total, but admissions committees often scrutinize a section dipping near 122–123, since each section maps to skills they care about. A balanced profile is generally safer than one propped up by two strong sections.

**Takeaway:** Scores are **scaled** (equated across test forms), not raw percentages — a slightly harder form can require fewer correct answers for the same scaled score, which is why pacing on *every* section matters.`
    },
    {
      id: 'td1-quiz1',
      type: 'multiple-choice' as const,
      content: `**MCAT Structure** 🎯`,
      exercise: {
        questions: [
          {
            question: `The total number of questions on the MCAT is:`,
            options: [`230 questions across 4 sections`, `200 questions`, `300 questions`, `180 questions`],
            correctAnswer: 0,
            explanation: `CP: 59, CARS: 53, BB: 59, PS: 59 = 230 total questions. The exam takes about 7.5 hours including breaks. Knowing the structure reduces test-day anxiety.`
          },
          {
            question: `Why does the total MCAT scale run from 472 to 528?`,
            options: [`Four sections, each scored 118–132, sum to a minimum of 472 and a maximum of 528`, `It is an arbitrary range with no relationship to the sections`, `Each section is scored 0–132`, `There are 528 total questions`],
            correctAnswer: 0,
            explanation: `$4 \\times 118 = 472$ and $4 \\times 132 = 528$. The total is simply the sum of the four section scores, and the midpoint of 500 comes from $4 \\times 125$.`
          },
          {
            question: `An applicant earns 128, 126, 127, and 127. Their total score is:`,
            options: [`508`, `500`, `512`, `526`],
            correctAnswer: 0,
            explanation: `$128 + 126 + 127 + 127 = 508$, which sits near the 75th percentile — competitive for many MD programs.`
          }
        ]
      }
    },
    {
      id: 'td1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Timing & Percentiles** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which section gives you the FEWEST questions but the most time per question?`,
            options: [`CARS — 53 questions in 90 minutes (~1.7 min each)`, `Chem/Phys — 59 questions in 95 minutes`, `Bio/Biochem — 59 questions in 95 minutes`, `Psych/Soc — 59 questions in 95 minutes`],
            correctAnswer: 0,
            explanation: `CARS has 53 questions (fewer than the 59 in the science sections) but 90 minutes, giving ~1.7 minutes per question — slightly more than the ~1.6 minutes in the science sections, which suits its dense reading.`
          },
          {
            question: `Roughly what percentile is a 515 total score?`,
            options: [`About the 90th percentile`, `About the 50th percentile`, `About the 25th percentile`, `About the 99th percentile`],
            correctAnswer: 0,
            explanation: `A 515 is approximately the 90th percentile, competitive for top-tier programs. For reference, 500 is the midpoint (~50th), 508 is ~75th, and 520+ is ~97th.`
          },
          {
            question: `Because MCAT scores are SCALED (equated across forms), it follows that:`,
            options: [`A slightly harder test form may require fewer correct answers to reach the same scaled score`, `Your raw percent correct is reported directly as the score`, `Every test taker sees the exact same questions`, `Guessing is penalized to keep the scale fair`],
            correctAnswer: 0,
            explanation: `Equating adjusts for small differences in form difficulty, so the scaled score reflects ability rather than which form you happened to take. There is no guessing penalty, so you should always answer every question.`
          }
        ]
      }
    },
    {
      id: 'td1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- 4 sections: CP (59), CARS (53), BB (59), PS (59) = 230 questions
- Total score = sum of four 118–132 section scores → 472–528 range, midpoint 500
- ~1.6-1.7 minutes per question — time management is critical
- 508 = 75th %ile, 515 = 90th %ile, 520+ = 97th %ile
- Scores are scaled/equated, not raw percentages — take EVERY break`
    }
  ]
};
