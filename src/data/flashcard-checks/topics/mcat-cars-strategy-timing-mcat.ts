import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-cars-strategy-timing-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`Why is rushing the reading counterproductive?`]: {
    question: r`Two students do the same passage with 6 questions. The first skims it in 2 minutes, then needs 90 seconds per question because he keeps rereading. The second reads carefully in 4 minutes, then needs 60 seconds per question. How do their total times compare?`,
    options: [
      r`The second takes 10 minutes, 1 minute less than the first`,
      r`The first takes 8 minutes, 2 minutes less than the second`,
      r`The first takes 9 minutes, 1 minute less than the second`,
      r`Both take 10 minutes, so neither one gains any time`,
    ],
    correctAnswer: 0,
    explanation: r`The skimmer spends 2 minutes reading plus 6 × 90 seconds = 9 minutes on questions, 11 minutes in all; the careful reader spends 4 + 6 = 10 minutes. The 2 minutes saved on reading cost 3 minutes on the questions. A total of 8 minutes ignores the slower questions, and 9 minutes leaves out the skimmer's reading time.`,
  },
  [r`What should you do if you fall behind on time?`]: {
    question: r`With 3 passages left, a student has 20 minutes on the clock instead of the 30 she would need at normal pace. One of the three is a dense philosophy passage. What does triage advise?`,
    options: [
      r`Split the 20 minutes evenly and rush all three passages at the same faster pace`,
      r`Start with the philosophy passage and give it as much time as it takes to finish`,
      r`Do the other two with normal care, leave philosophy for last, and guess if needed`,
      r`Skip reading all three passages and answer every question from the stems alone`,
    ],
    correctAnswer: 2,
    explanation: r`Triage means choosing one passage to attack last, guessing on it if time runs out, and protecting accuracy on the rest: two passages at about 10 minutes each fit the 20 minutes. Rushing all three lowers accuracy everywhere. Starting with the hardest passage risks losing the two easier ones, and answering from stems alone abandons the passages entirely.`,
  },
  [r`How do you decide when to abandon a question?`]: {
    question: r`A student has eliminated two choices on a question and has now spent 2 minutes rereading the remaining two without finding anything new. What should he do?`,
    options: [
      r`Keep rereading until one of the two is clearly correct`,
      r`Guess between the two, flag the question, and move on`,
      r`Leave the question blank and come back to it at the end`,
      r`Reconsider the two choices that he already eliminated`,
    ],
    correctAnswer: 1,
    explanation: r`He has eliminated what he can and is cycling with no progress, which is the signal to guess, flag and move on. More rereading spends time that later questions need. Leaving it blank risks a certain miss if time runs out, when a guess between two has an even chance, and reopening eliminated choices undoes the progress he made.`,
  },
  [r`What is the risk of spending 15 minutes on a hard passage?`]: {
    question: r`A student has 20 minutes left and two passages to go, a very hard one and an average one, each with 6 questions. She is tempted to give the hard one 15 minutes. What is the main risk of that plan?`,
    options: [
      r`She may finish early and be left with 5 spare minutes and nothing to review`,
      r`She may score lower because hard passages carry less weight per question`,
      r`She may be penalized because each passage has a fixed 10-minute time limit`,
      r`She may gain 1 or 2 hard questions but lose most of the 6 on the other one`,
    ],
    correctAnswer: 3,
    explanation: r`Fifteen minutes on the hard passage leaves 5 for the average one, so she risks most of 6 questions she could have answered in exchange for 1 or 2 hard ones she may still miss. She would not finish early, since the 5 minutes left are too few for a full passage. Questions are not weighted by passage difficulty, and no passage has its own time limit.`,
  },
  [r`What is the CARS section structure and timing?`]: {
    question: r`The reading section has 9 passages in 90 minutes. A student has finished 4 passages and sees 45 minutes left on the clock. Where does she stand against the target pace?`,
    options: [
      r`About 5 minutes ahead of the target pace`,
      r`About 15 minutes behind the target pace`,
      r`About 5 minutes behind the target pace`,
      r`Exactly on the target pace for 4 passages`,
    ],
    correctAnswer: 2,
    explanation: r`At roughly 10 minutes per passage, 4 passages should take 40 minutes, but she has used 90 − 45 = 45 minutes, so she is about 5 minutes behind. "Ahead" reverses the comparison, and "exactly on pace" treats 45 minutes left as the halfway mark even though fewer than half the passages are done. Fifteen minutes behind would mean only 3 passages finished.`,
  },
  [r`What is the best way to build CARS timing?`]: {
    question: r`A student scores well on single passages done one at a time with breaks between them, but on test day she slows down and runs out of time by passage 7. Which change to her practice addresses this best?`,
    options: [
      r`Doing full 9-passage timed sections in one sitting`,
      r`Doing single passages with a shorter 8-minute limit`,
      r`Doing untimed passages to deepen her comprehension`,
      r`Doing more single passages on her weakest subjects`,
    ],
    correctAnswer: 0,
    explanation: r`Her problem appears late in the section, which points to fatigue and pacing pressure, and those are only trained by full timed sections. A shorter limit on single passages builds speed but not stamina across 90 minutes. Untimed work and extra single passages on weak subjects leave the pacing problem untouched.`,
  },
  [r`Should you review flagged questions if time remains?`]: {
    question: r`With 3 minutes left, a student returns to a flagged question. Her first answer still seems reasonable. Another choice now feels better, but she cannot point to any line in the passage that favors it. What should she do?`,
    options: [
      r`Switch answers, since a second look is more reliable than a first`,
      r`Switch answers, since flagged questions are usually answered wrong`,
      r`Clear her answer, since an uncertain response is better left blank`,
      r`Keep her first answer, since she has no textual reason to change`,
    ],
    correctAnswer: 3,
    explanation: r`Reviewing flagged questions is worthwhile, but an answer should change only for a concrete textual reason, and she has none, so the first answer stays. Switching on a feeling trades one guess for another, and first instincts are often right in this section. Clearing the answer guarantees a miss, since a blank earns nothing.`,
  },
  [r`How should you pace within a passage?`]: {
    question: r`A student starts a passage with 6 questions when the clock shows exactly 50 minutes left. Following the usual pacing of about 4 minutes to read and about 1 minute per question, what should the clock show when he begins the first question and when he finishes the last?`,
    options: [
      r`44 minutes at the first question, 40 minutes at the end`,
      r`46 minutes at the first question, 40 minutes at the end`,
      r`46 minutes at the first question, 42 minutes at the end`,
      r`45 minutes at the first question, 40 minutes at the end`,
    ],
    correctAnswer: 1,
    explanation: r`The usual pacing is about 4 minutes of reading, so the clock shows 46, then about 1 minute per question for 6 questions, so it shows 40 at the end. Starting the questions at 44 swaps the reading and question times, and starting at 45 splits the 10 minutes evenly. Ending at 42 allows only 4 minutes for 6 questions.`,
  },
}
