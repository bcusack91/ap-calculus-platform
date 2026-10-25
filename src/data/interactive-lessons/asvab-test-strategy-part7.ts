export const asvabTestStrategyPart7Data = {
  topicSlug: 'asvab-test-strategy',
  sections: [
    {
      id: 'tstrat7-intro',
      type: 'text' as const,
      content: `# ⏱️ CAT-ASVAB Strategy and Test Day

**Part 7 of 7 — Mastery Check**

### The whole topic on one page

| Idea | What to remember |
|:---|:---|
| Format | 10 subtests, 135 scored questions, order GS, AR, WK, PC, MK, EI, AI, SI, MC, AO; 4 choices each |
| Adaptive | Starts at average difficulty; right answers usually bring harder questions |
| No going back | Answer each question to move on; tryout items cannot be identified |
| Pace | Minutes × 60 ÷ questions; AR about 3 min 40 s, WK 36 s; check the lower-right counters |
| Time runs out (CAT) | Unfinished questions scored as random guesses; keep answering genuinely, never rapid-fire |
| Paper test | Blanks are wrong, no guessing penalty: answer everything |
| Test day | Photo ID, on time, recruiter outside, 2 sheets + 2 pencils, HELP for more, no calculator |
| Plans | AFQT four first; then your line scores; timed practice by hand |

Ten questions follow. Use scratch paper, no calculator.`
    },
    {
      id: 'tstrat7-mastery',
      type: 'multiple-choice' as const,
      content: '**Mastery set.** ✅',
      exercise: {
        questions: [
          {
            question: "Which subtest immediately follows Word Knowledge on the CAT-ASVAB?",
            options: ['Mathematics Knowledge', 'Arithmetic Reasoning', 'Paragraph Comprehension', 'Electronics Information'],
            correctAnswer: 2,
            explanation: 'The order is GS, AR, WK, PC, MK, EI, AI, SI, MC, AO, so Paragraph Comprehension follows Word Knowledge.'
          },
          {
            question: "General Science gives 12 minutes for 15 questions. What is the average time per question?",
            options: ['36 seconds', '48 seconds', '80 seconds', '1 minute 15 seconds'],
            correctAnswer: 1,
            explanation: '$12 \\times 60 = 720$ seconds, and $720 \\div 15 = 48$ seconds per question.'
          },
          {
            question: "During Mathematics Knowledge, the counters show 5 questions left and 4 minutes left. The subtest average is about 2 minutes per question. What is the best adjustment?",
            options: ['Slow down, since you are far ahead of pace', 'Pick up the pace; under a minute per question remains', 'Click random answers for the last five', 'Stop and wait for the time to run out'],
            correctAnswer: 1,
            explanation: '$4 \\div 5 = 0.8$ minutes, about 48 seconds per remaining question, well under the average. Work faster but keep answering genuinely; random clicking late in a subtest is penalized.'
          },
          {
            question: "Which statement about unanswered questions is correct?",
            options: ['On both formats, unanswered questions are simply ignored', 'On the CAT they are scored like random guesses; on paper they count as wrong', 'On the CAT they count as wrong; on paper they are scored like random guesses', 'On both formats, unanswered questions are scored as correct'],
            correctAnswer: 1,
            explanation: 'The CAT scores unfinished questions as if you had guessed at random. On paper, unanswered questions are scored as wrong, which is why you fill in every bubble.'
          },
          {
            question: "A test-taker on the CAT decides to save time by clicking answers without reading on the last six questions of Electronics Information. Why is that risky?",
            options: ['The CAT ends the test immediately', 'Several late wrong answers draw a relatively large penalty', 'Those questions are always the hardest on the test', 'Random answers are scored as blanks on the CAT'],
            correctAnswer: 1,
            explanation: 'The official guidance warns of a relatively large penalty when several incorrect answers are given toward the end of a subtest, so keep reading and answering genuinely.'
          },
          {
            question: "Which item may you NOT use during the CAT-ASVAB at MEPS?",
            options: ['Scratch paper', 'A pencil', 'A basic calculator', 'Extra scratch paper you asked for'],
            correctAnswer: 2,
            explanation: 'Calculators are banned, along with phones and other electronic devices. Scratch paper and pencils are provided, and you can ask for more paper through HELP.'
          },
          {
            question: "Midway through Paragraph Comprehension, the passages suddenly seem harder. What is the best interpretation?",
            options: ['You are probably doing well; right answers bring harder ones', 'You have reached the unscored tryout questions', 'You should rush to finish before the questions get even harder', 'The computer is penalizing you for earlier mistakes'],
            correctAnswer: 0,
            explanation: 'Correct answers usually lead to harder questions on the CAT. Tryout questions cannot be identified, and rushing only invites careless errors.'
          },
          {
            question: "Jess has 8 weeks before MEPS and wants a Navy rating whose standard includes Assembling Objects. Which plan fits best?",
            options: ['Study only AO, since the rating uses it', 'AFQT four first, then AO and the rating\'s other subtests', 'Skip AO, because it never affects job eligibility', 'Study all ten subtests for the same amount of time'],
            correctAnswer: 1,
            explanation: 'The AFQT four decide eligibility, so they come first; then the subtests in the rating\'s standard, including AO, which the Navy uses in several composites.'
          },
          {
            question: "On the paper ASVAB, Ray finishes Word Knowledge with 2 minutes to spare. What may he do?",
            options: ['Start Paragraph Comprehension early', 'Go back to General Science and change answers', 'Review his Word Knowledge answers', 'Leave the room and come back for the next subtest'],
            correctAnswer: 2,
            explanation: 'On paper, everyone moves together, and you may review answers only within the current subtest. You cannot start the next subtest early or go back to an earlier one.'
          },
          {
            question: "Why should you treat every CAT question as if it counts?",
            options: ['Because tryout questions look just like scored ones', 'Because every subtest has exactly 15 scored questions', 'Because the first question decides your whole score', 'Because unanswered questions are scored as correct'],
            correctAnswer: 0,
            explanation: 'Some questions may be unscored tryout items, but there is no way to tell which, so full effort on every question is the only safe strategy.'
          }
        ]
      }
    },
    {
      id: 'tstrat7-summary',
      type: 'text' as const,
      content: `### CAT-ASVAB Strategy and Test Day — Summary 🎓

| Part | Topic | Status |
|:---:|:---|:---:|
| 1 | The CAT-ASVAB at a glance | ✅ |
| 2 | How the adaptive test works | ✅ |
| 3 | Pacing each subtest | ✅ |
| 4 | Guessing, unanswered items and the clock | ✅ |
| 5 | Test day at MEPS or a MET site | ✅ |
| 6 | Study plans and common traps | ✅ |
| 7 | Mastery check | ✅ |

> **Key Fact:** On the CAT-ASVAB, every answer is final and every question might count. Work steadily, keep answering for real when time is short, do all your math by hand, and put the AFQT four first in your study plan.`
    }
  ]
};
