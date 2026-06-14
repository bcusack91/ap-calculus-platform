export const mcatTestDayPart3Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'td3-intro',
      type: 'text' as const,
      content: `# Test Day Strategy for the MCAT

**Part 3 of 7 — Study Planning**

### Recommended Study Timeline

| Duration | Approach | Best For |
|----------|---------|----------|
| 3 months | Intensive, full-time | Post-graduation, summer |
| 6 months | Part-time alongside classes | During school year |
| 12 months | Gradual, with classes | Early planners |

### Three Phases of MCAT Prep

**Phase 1 — Content Review** (~40% of study time):
- Textbooks, videos, notes
- Focus on understanding, not memorization
- Build concept maps connecting topics

**Phase 2 — Practice Problems** (~30% of study time):
- Section-bank style questions
- Timed passage practice
- Identify weak areas

**Phase 3 — Full-Length Exams** (~30% of study time):
- Take at least 5-8 full-length practice exams
- Simulate real conditions (timed, no interruptions)
- Review EVERY question (right and wrong)

### Spaced Repetition

- Review material at increasing intervals (1 day, 3 days, 7 days, 14 days)
- Anki flashcards for high-yield facts
- Focus on weakest topics during review sessions`
    },
    {
      id: 'td3-worked',
      type: 'text' as const,
      content: `### Worked Example — Turning 300 Hours Into a Plan

A student has **12 weeks** and can study **25 hours/week**, for a total of $12 \\times 25 = 300$ hours.

**Step 1 — Split by phase using the 40/30/30 guide.**
- Content review: $0.40 \\times 300 = 120$ hours.
- Practice problems: $0.30 \\times 300 = 90$ hours.
- Full-length exams + review: $0.30 \\times 300 = 90$ hours.

**Step 2 — Reality-check the full-length budget.** Each full-length is ~7.5 hours to take, and *thorough review doubles that* — budget ~2 hours of review per hour of test is excessive, so plan roughly 7.5 h test + ~7.5 h review $\\approx 15$ hours per full-length. With 90 hours, that's about **6 full-lengths fully reviewed** — right in the recommended 5–8 range. ✓

**Step 3 — Front-load content, back-load testing.** Weeks 1–5 lean heavily on content review (Phase 1); weeks 6–9 shift to mixed practice (Phase 2); weeks 10–12 are dominated by full-lengths with review (Phase 3). The phases *overlap* — you keep doing practice questions during content review — but the center of gravity moves.

**Step 4 — Protect the last week.** Schedule the final full-length about **7 days out**, then taper: light review only, no new content, and a full rest day before the exam.

**Takeaway:** A plan is just hours × weeks allocated to phases. Compute the totals first, verify the full-length count is realistic, then sequence the phases so testing peaks at the end.`
    },
    {
      id: 'td3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Study Planning** 🎯`,
      exercise: {
        questions: [
          {
            question: `The most effective way to identify weak areas in MCAT prep is:`,
            options: [`Regular practice tests with thorough review of both correct AND incorrect answers`, `Reading textbooks cover to cover`, `Memorizing flashcards only`, `Studying the same topics repeatedly`],
            correctAnswer: 0,
            explanation: `Practice tests reveal what you actually know vs. what you think you know. Reviewing correct answers shows your reasoning was right. Reviewing incorrect answers identifies gaps. Both are equally important for improvement.`
          },
          {
            question: `Using the 40/30/30 split on a 300-hour plan, how many hours go to content review?`,
            options: [`120 hours ($0.40 \\times 300$)`, `90 hours`, `150 hours`, `60 hours`],
            correctAnswer: 0,
            explanation: `$0.40 \\times 300 = 120$ hours for content review, with $90$ hours each for practice problems and full-length exams ($0.30 \\times 300$).`
          },
          {
            question: `If each full-length plus thorough review takes about 15 hours, a 90-hour full-length budget supports roughly:`,
            options: [`6 fully reviewed full-length exams — within the recommended 5–8`, `1 full-length exam`, `15 full-length exams`, `25 full-length exams`],
            correctAnswer: 0,
            explanation: `$90 \\div 15 = 6$ full-lengths with review, comfortably inside the 5–8 range. Counting review time (not just test time) keeps the plan realistic.`
          }
        ]
      }
    },
    {
      id: 'td3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Phases & Retention** 🎯`,
      exercise: {
        questions: [
          {
            question: `In a well-sequenced plan, full-length exams should be concentrated:`,
            options: [`In the final phase, so test-taking peaks close to the real exam`, `In the first week, before any content review`, `Spread evenly with one on day one`, `Only after the exam, for practice`],
            correctAnswer: 0,
            explanation: `Phases overlap, but the center of gravity shifts: content review front-loads, practice problems sit in the middle, and full-lengths dominate the final weeks so stamina and pacing peak near test day.`
          },
          {
            question: `Why does spaced repetition (reviewing at 1, 3, 7, 14-day intervals) outperform cramming?`,
            options: [`Spacing reviews strengthens long-term retention by repeatedly reactivating memory just as it fades`, `It lets you avoid reviewing weak topics`, `It replaces the need for practice tests`, `It guarantees you will see the same questions on the MCAT`],
            correctAnswer: 0,
            explanation: `Retrieving information at expanding intervals leverages the spacing effect, consolidating memories far better than massed cramming. It complements—does not replace—timed practice and full-lengths.`
          },
          {
            question: `A student studying part-time during the school year would most reasonably choose a timeline of about:`,
            options: [`6 months, part-time alongside classes`, `2 weeks of cramming`, `3 months full-time during the semester`, `No fixed timeline`],
            correctAnswer: 0,
            explanation: `A ~6-month part-time plan fits study around coursework, whereas a 3-month intensive plan suits a summer or post-graduation block. Matching the timeline to your real availability prevents burnout.`
          }
        ]
      }
    },
    {
      id: 'td3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Three phases: Content Review → Practice Problems → Full-Length Exams (~40/30/30)
- Build the plan from total hours, then verify the full-length count is realistic
- Concentrate full-lengths in the final weeks; schedule the last one ~7 days out
- Take 5-8 full-length practice exams under realistic conditions
- Spaced repetition builds long-term retention — review EVERY practice question`
    }
  ]
};
