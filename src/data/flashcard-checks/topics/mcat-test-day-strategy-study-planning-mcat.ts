import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-test-day-strategy-study-planning-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What is a typical MCAT preparation timeline?`]: {
    question: r`Four students describe their preparation plans. Which plan matches the typical timeline?`,
    options: [
      r`3 weeks at 60 hours a week, content first and then practice`,
      r`16 weeks at 5 hours a week, content first and then practice`,
      r`16 weeks at 20 hours a week, practice first and then content`,
      r`16 weeks at 20 hours a week, content first and then practice`,
    ],
    correctAnswer: 3,
    explanation: r`A typical plan runs about 3 to 6 months at 15 to 25 hours a week, with content front-loaded and a shift toward practice. Sixteen weeks is about 4 months and 20 hours is in range. Three weeks is far too short, 5 hours a week is far too light, and practice first then content has the order backwards.`,
  },
  [r`How should study time shift over a prep period?`]: {
    question: r`A student is in the final month before her exam. Of her 20 study hours a week, 15 go to reading content chapters and 5 go to practice. How should she adjust?`,
    options: [
      r`Reverse it, so most hours go to full-length tests and their review`,
      r`Keep it, so content reading stays dominant until the exam itself`,
      r`Drop practice, so all 20 hours go to her weakest content chapters`,
      r`Split it, so 10 hours go to new chapters and 10 to old chapters`,
    ],
    correctAnswer: 0,
    explanation: r`Study should be content-heavy early and practice-heavy late, and by the final month most time belongs to full-length tests and review. Her 15 to 5 split is an early-prep pattern. Keeping it, dropping practice, or dividing the hours among chapters all leave her without the practice the last month calls for.`,
  },
  [r`What is the single most valuable prep activity?`]: {
    question: r`A student finishes a full-length practice test on Friday and has six free hours on Saturday. Which use of those hours is most valuable?`,
    options: [
      r`Taking a second practice test straight away to get another score`,
      r`Noting the total score and moving on to reading new chapters`,
      r`Going through the questions to learn why each wrong answer was wrong`,
      r`Rereading only the questions he got right to build his confidence`,
    ],
    correctAnswer: 2,
    explanation: r`The most valuable activity is thorough review of practice questions, understanding why each wrong answer was wrong. A second test with no review repeats the same mistakes and only produces another number. Noting the score and moving on, or looking only at correct answers, skips the part where the learning happens.`,
  },
  [r`How many full-length practice tests are recommended?`]: {
    question: r`A student's real exam starts at 8:00 am. His plan is two full-length practice tests, untimed, done in the evenings. Which revised plan matches the usual recommendation?`,
    options: [
      r`2 tests, each one timed and started at 8:00 pm`,
      r`8 tests, each one timed and started at 8:00 am`,
      r`8 tests, each one untimed and split over two evenings`,
      r`30 tests, each one untimed and started at 8:00 am`,
    ],
    correctAnswer: 1,
    explanation: r`The usual recommendation is 6 to 10 full-length tests under realistic timed conditions, ideally at the actual test time of day. Eight timed tests at 8:00 am meets all three points. Two tests is too few, untimed or split tests are not realistic conditions, and 8:00 pm is not when he will sit the exam.`,
  },
  [r`Why is spaced repetition effective for MCAT content?`]: {
    question: r`A student has six hours in total to learn the amino acids and needs to remember them two months from now. Which schedule should give the strongest long-term retention?`,
    options: [
      r`Six 1-hour sessions spread over two weeks`,
      r`One 6-hour session on the very first day`,
      r`Two 3-hour sessions on back-to-back days`,
      r`One 6-hour session the night before a quiz`,
    ],
    correctAnswer: 0,
    explanation: r`Distributed practice gives markedly stronger long-term retention than massed cramming, and six spaced sessions are the most distributed option for the same six hours. A single 6-hour block is massed practice whenever it happens. Two long sessions on consecutive days are still mostly massed.`,
  },
  [r`How should you use a content review book?`]: {
    question: r`A practice set shows a student missing most acid-base and optics questions while doing well elsewhere. How should she now use her content review book?`,
    options: [
      r`Read the whole book in order from page one before any more practice`,
      r`Reread her strongest chapters first so that she builds momentum`,
      r`Put the book away and redo the same practice set until it is perfect`,
      r`Study the acid-base and optics chapters to close those two gaps`,
    ],
    correctAnswer: 3,
    explanation: r`A content book works best as an active reference for the gaps that practice questions reveal, here acid-base and optics. Reading cover to cover is the passive approach and spends most of the time on what she already knows, as does rereading strong chapters. Memorising one practice set does not repair the missing content.`,
  },
  [r`What is the purpose of a diagnostic test?`]: {
    question: r`A diagnostic gives a student these section scores: Chem/Phys 128, CARS 127, Bio/Biochem 122, Psych/Soc 126. He enjoys physics most. Where should the largest share of his next 20 study hours go?`,
    options: [
      r`Chem/Phys, because enjoying a subject makes the hours productive`,
      r`Chem/Phys, because a strong section is the easiest one to raise`,
      r`Bio/Biochem, because the baseline shows it is his weakest area`,
      r`All four equally, because one test cannot guide a study plan`,
    ],
    correctAnswer: 2,
    explanation: r`A diagnostic sets a baseline and points to weak areas so that time is allocated by need and not by comfort. Bio/Biochem at 122 is clearly the weakest. Choosing Chem/Phys because he enjoys it or is already good at it is allocating by comfort, and an equal split ignores what the baseline shows.`,
  },
  [r`Why should you avoid studying new content the last few days?`]: {
    question: r`Three days before her exam, a student realises she never studied one chapter. What is the best plan for those three days?`,
    options: [
      r`Learn the whole chapter in full, staying up late each night to finish`,
      r`Lightly review material she already knows and get proper rest`,
      r`Start a second review book to look for other chapters she missed`,
      r`Work through new practice topics all day to cover as much as possible`,
    ],
    correctAnswer: 1,
    explanation: r`In the last few days, new content brings minimal gains and raises anxiety, while light review and rest protect performance. Learning a whole new chapter on little sleep trades a small gain for a tired test day. A second review book or a rush of new topics is more new content at the worst time.`,
  },
}
