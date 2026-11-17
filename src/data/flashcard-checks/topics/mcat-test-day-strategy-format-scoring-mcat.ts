import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-test-day-strategy-format-scoring-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`Is there a penalty for wrong answers?`]: {
    question: r`On a four-option question, a student has ruled out two options but cannot choose between the other two. She worries that a wrong answer will cost her points. What should she do?`,
    options: [
      r`Leave it blank, since a wrong answer subtracts from her score`,
      r`Pick one of the two, since a wrong answer costs her nothing`,
      r`Leave it blank, since a one-in-two chance is too low to risk`,
      r`Pick one only if she can first rule out a third option`,
    ],
    correctAnswer: 1,
    explanation: r`There is no penalty for a wrong answer, so a guess can only help and a blank can only score zero. The idea that a wrong answer subtracts points is the false belief behind leaving it blank. No level of certainty is needed before guessing, so waiting to rule out a third option makes no sense.`,
  },
  [r`How many questions and how long is each section?`]: {
    question: r`A student builds a practice session from one full Chem/Phys section followed by one full CARS section, each at its real length and time limit. How many questions and how many minutes of testing is that?`,
    options: [
      r`118 questions in 190 minutes`,
      r`106 questions in 180 minutes`,
      r`112 questions in 190 minutes`,
      r`112 questions in 185 minutes`,
    ],
    correctAnswer: 3,
    explanation: r`Chem/Phys is 59 questions in 95 minutes and CARS is 53 questions in 90 minutes, so the session is 59 + 53 = 112 questions in 95 + 90 = 185 minutes. The 118 in 190 answer treats CARS like a science section, and 106 in 180 treats Chem/Phys like CARS. The 112 in 190 answer gives CARS 95 minutes when it has 90.`,
  },
  [r`What are the four MCAT sections?`]: {
    question: r`A student's weekly plan has four blocks, one per exam section: Chem/Phys, Bio/Biochem, Psych/Soc, and "Essay Writing". How should the plan be corrected to match the four sections of the MCAT?`,
    options: [
      r`Replace the essay block with CARS, which is the fourth section`,
      r`Replace the essay block with Math, which is the fourth section`,
      r`Drop the Psych/Soc block, since it is part of Bio/Biochem`,
      r`Split Chem/Phys in two, since each is a section of its own`,
    ],
    correctAnswer: 0,
    explanation: r`The four sections are Chem/Phys, CARS, Bio/Biochem and Psych/Soc, so the block that is missing is CARS. There is no separate Math section. Psych/Soc is a section in its own right, and Chem/Phys is a single section, so dropping one or splitting the other gives the wrong list.`,
  },
  [r`How is the MCAT scored?`]: {
    question: r`Which score report shows four possible section scores and a total that is above the midpoint of the MCAT scale?`,
    options: [
      r`133, 126, 125 and 126, for a total of 510`,
      r`125, 124, 124 and 125, for a total of 498`,
      r`130, 128, 125 and 127, for a total of 510`,
      r`117, 131, 131 and 131, for a total of 510`,
    ],
    correctAnswer: 2,
    explanation: r`Each section runs from 118 to 132 and the total has a midpoint of 500, so 130, 128, 125 and 127 for 510 is possible and above the midpoint. A 133 is above the section maximum and a 117 is below the section minimum, so those reports cannot exist. The 498 report is possible but sits below 500.`,
  },
  [r`Roughly how long is the full test day?`]: {
    question: r`A student begins the exam at 8:00 am and takes every break. Roughly when should she tell her ride to expect her to finish?`,
    options: [
      r`About 3:30 pm`,
      r`About 2:15 pm`,
      r`About 12:30 pm`,
      r`About 6:15 pm`,
    ],
    correctAnswer: 0,
    explanation: r`The full day is about 7.5 hours including breaks, and 8:00 am plus 7.5 hours is 3:30 pm. About 2:15 pm counts only the roughly 6 hours 15 minutes of actual testing and forgets the breaks. The other two times are far too short or too long for a 7.5-hour day.`,
  },
  [r`What is the split between passage-based and discrete questions?`]: {
    question: r`A student is strong on passages but weak on standalone (discrete) questions. Across one full exam, made of three science sections and CARS, how many standalone questions will she face?`,
    options: [
      r`15 standalone questions`,
      r`60 standalone questions`,
      r`132 standalone questions`,
      r`45 standalone questions`,
    ],
    correctAnswer: 3,
    explanation: r`Each science section has 15 standalone questions and CARS has none, so the count is 3 × 15 = 45. The answer 15 counts only one science section, and 60 wrongly gives CARS 15 discretes as well. The answer 132 is 3 × 44, which is the number of passage-based science questions.`,
  },
  [r`What is a percentile vs. a scaled score?`]: {
    question: r`A score report lists a section score of 128 and, next to it, "85th percentile". What does the 85 tell the student?`,
    options: [
      r`She answered about 85% of that section's questions correctly`,
      r`She scored higher than about 85% of the people who took it`,
      r`She earned about 85% of the highest possible scaled score`,
      r`She was outscored by about 85% of the people who took it`,
    ],
    correctAnswer: 1,
    explanation: r`A percentile is the share of test-takers a student outscored, so the 85 means she did better than about 85% of them. It is not a percent of questions correct, and it is not a fraction of the top scaled score; the 128 is the scaled score. Being outscored by 85% would be roughly the 15th percentile.`,
  },
  [r`Why is section balance important?`]: {
    question: r`Two applicants each total 510. Applicant X scored 128, 127, 128 and 127. Applicant Y scored 131, 121, 129 and 129. Which applicant's scores carry more risk, and why?`,
    options: [
      r`X, because no single section stands out above the rest`,
      r`Neither, because schools look only at the total score`,
      r`Y, because a school may screen out the 121 despite the 510`,
      r`Y, because a 131 suggests the other sections were rushed`,
    ],
    correctAnswer: 2,
    explanation: r`Many schools screen on individual section scores, so one very weak section, here the 121, can hurt more than the equal totals suggest. A balanced set like X's has no section that trips a screen. Saying only the total matters ignores section screens, and a high 131 is not what creates the risk.`,
  },
}
