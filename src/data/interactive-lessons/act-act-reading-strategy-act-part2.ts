export const actReadingStratPart2Data = {
  topicSlug: 'act-reading-strategy-act',
  sections: [
      {
        id: "act-rstrat-p2-intro",
        type: 'text' as const,
        content: `\n# ACT Reading Strategy
**Part 2 of 7 — Main idea and structure**

ACT Reading is a speed + precision section. Build a short routine for every passage:
- Spend 45–60 seconds mapping the passage (topic, viewpoint shifts, evidence locations).
- Solve direct evidence items first.
- Save hardest inference items for the second pass.

Your target pace is about 52 seconds per question across the section.\n        `
      },
      {
        id: "act-rstrat-p2-mcq1",
        type: 'multiple-choice' as const,
        content: `\n**Passage Process**\n        `,
        exercise: {
          questions: [
            {
              question: "A passage has 4 paragraphs. What belongs in a useful map?",
              options: [
                "One sentence naming each paragraph's job",
                "A full rewrite of each paragraph",
                "Every unfamiliar vocabulary word",
                "Only the first and last lines"
              ],
              correctAnswer: 0,
              explanation: "A compact map tracks structure and evidence locations. Rewriting burns time without improving answer accuracy."
            },
            {
              question: "A question asks for evidence supporting a claim from line 12. Best first step?",
              options: [
                "Read only answer choices and guess tone",
                "Reread lines around 12 and match exact wording",
                "Skip all line-reference questions",
                "Use background knowledge from school"
              ],
              correctAnswer: 1,
              explanation: "Line-reference questions are high-accuracy opportunities when you verify nearby lines and match claim-to-text directly."
            }
          ]
        }
      },
      {
        id: "act-rstrat-p2-worked",
        type: 'text' as const,
        content: `\n## Worked Example: Main Idea vs Detail
Suppose paragraph 1 introduces a debate on urban trees, paragraphs 2–3 present benefits, and paragraph 4 gives limitations.

If asked for the main idea, a strong answer includes both sides and the author's overall position.
Weak choices over-focus on one detail (for example, only costs) or overstate certainty.

**Fast check:** if an option could fit only one paragraph, it is usually a detail answer, not the global main idea.\n        `
      },
      {
        id: "act-rstrat-p2-input",
        type: 'input-boxes' as const,
        content: `\n**Measurable Pacing Drill**
1) You plan 8 minutes per passage for 4 passages. How many minutes does that use?

2) In a passage with 10 questions, you answer 7 in 6 minutes. Enter average seconds per answered question (nearest whole number).
3) You flag 3 inference questions and return later, gaining 2 correct answers. Enter the number gained.\n        `,
        exercise: {
          boxes: 3,
          correctAnswers: [
            "32",
            "51",
            "2"
          ],
          hint1: "Multiply minutes per passage by number of passages.",
          hint2: "Convert 6 minutes to seconds, then divide by 7.",
          hint3: "Count additional correct responses from second-pass strategy.",
          explanation: "Efficient reading is quantifiable: 32 total passage minutes, 360/7 ≈ 51 seconds per solved item, and 2 extra correct from strategic revisits."
        }
      },
      {
        id: "act-rstrat-p2-strategy",
        type: 'text' as const,
        content: `\n## ACT Tactics for Main idea and structure
- Anchor every answer in lines or paragraph function, not memory alone.
- For tone questions, focus on adjective strength (critical, neutral, approving).
- For inference questions, select the least extreme statement supported by text.
- Keep a hard cutoff: if no progress in 40–50 seconds, mark and move.\n        `
      },
      {
        id: "act-rstrat-p2-dropdown",
        type: 'dropdown-select' as const,
        content: `\n**Decision Rules**\n        `,
        exercise: {
          dropdowns: [
            {
              label: "Best purpose of a passage map:",
              options: [
                "Memorize each sentence",
                "Track structure and where evidence lives",
                "Predict answer letters",
                "Replace careful reading"
              ]
            },
            {
              label: "For line-reference questions, best evidence source is:",
              options: [
                "A remembered classroom example",
                "The exact local lines and immediate context",
                "Only the passage title",
                "The longest option"
              ]
            },
            {
              label: "When an inference choice sounds dramatic, you should:",
              options: [
                "Prefer it because it sounds strong",
                "Check if the text truly supports that level of certainty",
                "Assume dramatic language means advanced reading",
                "Choose it if stuck for 5 seconds"
              ]
            }
          ],
          correctAnswers: [
            "Track structure and where evidence lives",
            "The exact local lines and immediate context",
            "Check if the text truly supports that level of certainty"
          ],
          hint1: "Mapping is a retrieval tool, not a summary assignment.",
          hint2: "Line references reward direct verification.",
          hint3: "ACT writers often use extreme wording as bait.",
          explanation: "High scorers use structure-aware reading: map quickly, verify evidence locally, and reject unsupported intensity in answer wording."
        }
      },
      {
        id: "act-rstrat-p2-mcq2",
        type: 'multiple-choice' as const,
        content: `\n**Section Review**\n        `,
        exercise: {
          questions: [
            {
              question: "You are behind pace halfway through Reading. Which move usually recovers most points?",
              options: [
                "Spend extra time on each hard inference",
                "Prioritize direct-evidence questions and cap hard items",
                "Reread completed passages",
                "Leave bubbles blank until the end"
              ],
              correctAnswer: 1,
              explanation: "Direct-evidence items are faster and more reliable. Time caps prevent one question from costing multiple later points."
            },
            {
              question: "A tone question includes 'outraged' vs 'cautiously skeptical.' The passage critiques method limits but praises results. Best tone?",
              options: [
                "Outraged",
                "Cautiously skeptical",
                "Celebratory",
                "Indifferent"
              ],
              correctAnswer: 1,
              explanation: "Mixed praise and critique indicates a moderated stance, not extreme anger or pure celebration."
            }
          ]
        }
      }
    ]
};
