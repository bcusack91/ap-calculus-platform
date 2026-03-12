export const actTestDayPart1Data = {
  topicSlug: 'act-test-day-strategy-act',
  sections: [
      {
        id: "act-tday-p1-intro",
        type: 'text' as const,
        content: `\n# ACT Test-Day Strategy
**Part 1 of 7 — Pacing by section**

Strong ACT outcomes come from execution rules you can measure:
- Keep section-level checkpoints.
- Decide in advance when to guess and move.
- Protect focus with hydration, breathing resets, and timing routines.

This lesson turns strategy into numbers you can practice before test day.\n        `
      },
      {
        id: "act-tday-p1-mcq1",
        type: 'multiple-choice' as const,
        content: `\n**Pacing and Guessing Choices**\n        `,
        exercise: {
          questions: [
            {
              question: "English has 75 questions in 45 minutes. Which average pace is closest?",
              options: [
                "24 sec/question",
                "36 sec/question",
                "48 sec/question",
                "60 sec/question"
              ],
              correctAnswer: 1,
              explanation: "45 minutes = 2,700 seconds, and 2,700/75 = 36 seconds per question."
            },
            {
              question: "With no guessing penalty, when should you bubble an answer on a hard question?",
              options: [
                "Only when fully certain",
                "Before moving on if time cap is reached",
                "Never bubble guesses",
                "Wait until after the test ends"
              ],
              correctAnswer: 1,
              explanation: "No penalty means an unanswered question is strictly worse than a strategic guess after a time cap."
            }
          ]
        }
      },
      {
        id: "act-tday-p1-worked",
        type: 'text' as const,
        content: `\n## Worked Timing Example
You target these section splits:
- English 45 min
- Math 60 min
- Reading 35 min
- Science 35 min

Suppose you are 4 minutes behind halfway through Math.
Recovery plan:
1. Cap each remaining hard question at 50 seconds.
2. Prioritize algebra/geometry questions you can complete in one pass.
3. Return only if surplus time appears in final 6–8 minutes.

This converts stress into an actionable checkpoint strategy.\n        `
      },
      {
        id: "act-tday-p1-input",
        type: 'input-boxes' as const,
        content: `\n**Execution Math**
1) Reading has 40 questions in 35 minutes. Enter average seconds per question (nearest whole number).
2) You save 15 seconds on each of 12 easy questions. Enter total seconds saved.
3) If you leave 5 questions blank versus random guessing, how many additional attempts does guessing provide?\n        `,
        exercise: {
          boxes: 3,
          correctAnswers: [
            "53",
            "180",
            "5"
          ],
          hint1: "Convert 35 minutes to seconds and divide by 40.",
          hint2: "Multiply time saved per question by number of questions.",
          hint3: "Each guess counts as an attempt with nonzero expected value.",
          explanation: "Reading pace is about 53 sec/question. Twelve quick wins at 15 seconds each save 180 seconds. Guessing adds 5 attempts instead of zero."
        }
      },
      {
        id: "act-tday-p1-strategy",
        type: 'text' as const,
        content: `\n## Practical Plan for Pacing by section
- Use a watch checkpoint every 8–10 questions, not every item.
- Keep bubbling synchronized in small batches to avoid misalignment.
- Pre-plan passage order (for Reading/Science) based on your strengths.
- Add a 20-second reset routine: shoulders down, one deep breath, eyes to next stem.\n        `
      },
      {
        id: "act-tday-p1-dropdown",
        type: 'dropdown-select' as const,
        content: `\n**Checklist Logic**\n        `,
        exercise: {
          dropdowns: [
            {
              label: "Best use of checkpoints during a section:",
              options: [
                "Check after every question",
                "Check at planned question milestones",
                "Do not check time at all",
                "Only check in final minute"
              ]
            },
            {
              label: "If you are stuck past your cap, highest-value action is:",
              options: [
                "Leave blank and move",
                "Guess strategically and move",
                "Spend 3 extra minutes",
                "Restart the passage"
              ]
            },
            {
              label: "The main purpose of a final-week plan is to:",
              options: [
                "Learn brand-new heavy content",
                "Stabilize timing, sleep, and review patterns",
                "Take zero breaks",
                "Ignore weak areas"
              ]
            }
          ],
          correctAnswers: [
            "Check at planned question milestones",
            "Guess strategically and move",
            "Stabilize timing, sleep, and review patterns"
          ],
          hint1: "Milestones prevent over-checking and panic.",
          hint2: "No penalty means guessing is superior to blanks.",
          hint3: "Final week should optimize readiness, not overload new material.",
          explanation: "Test-day performance improves when timing rules and energy management are rehearsed as routines."
        }
      },
      {
        id: "act-tday-p1-mcq2",
        type: 'multiple-choice' as const,
        content: `\n**Scenario Review**\n        `,
        exercise: {
          questions: [
            {
              question: "You finish English with 3 minutes left. Best use of time?",
              options: [
                "Leave early mentally",
                "Recheck flagged punctuation and transition items",
                "Change random answers",
                "Erase and rebubble everything"
              ],
              correctAnswer: 1,
              explanation: "Targeted review of flagged items has positive expected value, while random changes often reduce score."
            },
            {
              question: "Night before the ACT, which choice best supports next-day performance?",
              options: [
                "New 4-hour content cram",
                "Normal sleep schedule and light formula review",
                "Skip dinner to wake early",
                "Take multiple full tests"
              ],
              correctAnswer: 1,
              explanation: "Consistency in sleep and low-intensity review improves recall and focus better than late heavy cramming."
            }
          ]
        }
      }
    ]
};
