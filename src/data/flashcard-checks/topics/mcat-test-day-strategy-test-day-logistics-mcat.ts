import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-test-day-strategy-test-day-logistics-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What should you bring on test day?`]: {
    question: r`A student registered for the exam under the name "Katherine A. Lopez". Which item should she bring to be admitted?`,
    options: [
      r`A valid driver's licence that reads "Katie Lopez"`,
      r`A university student card that reads "Katherine A. Lopez"`,
      r`A valid driver's licence that reads "Katherine A. Lopez"`,
      r`A printed registration email that reads "Katherine A. Lopez"`,
    ],
    correctAnswer: 2,
    explanation: r`The requirement is a valid government-issued photo ID that matches the registration exactly. "Katie Lopez" does not match the registered name. A university card is not government-issued, and a registration email is not a photo ID at all.`,
  },
  [r`What materials are provided at the test center?`]: {
    question: r`A student packs her own scratch paper, pencils and a calculator. What will she actually use for her working during the exam?`,
    options: [
      r`The centre's noteboard booklet and marker, with arithmetic done by hand`,
      r`Her own scratch paper and pencils, with arithmetic done by hand`,
      r`The centre's noteboard booklet and marker, with her own calculator`,
      r`Her own scratch paper and pencils, with a calculator from the centre`,
    ],
    correctAnswer: 0,
    explanation: r`The test centre provides a noteboard booklet and a fine-point marker, and no personal scratch paper or calculator is allowed. Her own paper and pencils stay in the locker. With no calculator of any kind, the arithmetic is done by hand on the noteboard.`,
  },
  [r`How are breaks structured?`]: {
    question: r`A student plans to skip the 10-minute break after the first section so that she can "bank" those minutes for the next section. What is the right advice?`,
    options: [
      r`Skip it, because the unused 10 minutes carry over to the next section`,
      r`Skip it, because only the 30-minute lunch break affects performance`,
      r`Take it, because every break is required before a section will open`,
      r`Take it, because skipped break time is lost and adds no section time`,
    ],
    correctAnswer: 3,
    explanation: r`The break clock runs whether or not she uses it, so skipping gains nothing and the break should be taken. Minutes do not carry over into the next section. The breaks are optional, not required, and the short breaks are worth using as well as the 30-minute lunch.`,
  },
  [r`Why should you visit the test center in advance if possible?`]: {
    question: r`A student's exam is next week at a centre she has never been to, 40 minutes from home. Which step best reduces avoidable stress on the morning of the exam?`,
    options: [
      r`Trusting a navigation app to find the route on the morning itself`,
      r`Driving there once beforehand to learn the route and the parking`,
      r`Studying one more hour instead, since the route earns no points`,
      r`Leaving at the usual time and looking for parking on arrival`,
    ],
    correctAnswer: 1,
    explanation: r`A visit in advance removes the uncertainty about navigation and parking, which is stress she can avoid. Relying on an app or hunting for parking on the morning leaves both unknowns in place when a delay matters most. An extra hour of study does nothing for the trip.`,
  },
  [r`What should you eat before and during the exam?`]: {
    question: r`A student usually has eggs and toast for breakfast. A friend suggests that on exam day he try a new energy drink and a large spicy dish he has never eaten. What should he choose?`,
    options: [
      r`His usual eggs and toast, with familiar snacks at the breaks`,
      r`The new energy drink, with nothing else until the exam ends`,
      r`The large spicy dish, with the new energy drink at the breaks`,
      r`No breakfast at all, with one big meal at the lunch break`,
    ],
    correctAnswer: 0,
    explanation: r`The advice is a familiar, protein-rich meal and steady snacks, and eggs and toast with known snacks fits. Test day is not the time to try new foods, which rules out the energy drink and the spicy dish. Skipping breakfast and eating one big meal is the opposite of steady fuel.`,
  },
  [r`How far in advance should you register?`]: {
    question: r`In January, a student decides she wants to sit the exam in June at a busy city test centre. When should she register?`,
    options: [
      r`In late May, because most seats are released shortly before a date`,
      r`In late May, because summer dates are the ones least in demand`,
      r`The week before, because cancellations always free up some seats`,
      r`Now, because popular summer dates and locations fill up early`,
    ],
    correctAnswer: 3,
    explanation: r`Registration should happen several months ahead, because popular dates and locations fill early, especially in spring and summer. A June date at a busy centre is exactly that case. Waiting until late May or the last week risks finding no seat at the place and date she wants.`,
  },
  [r`When are scores released?`]: {
    question: r`A student sits the exam on June 1. Roughly when should she expect her scores to be released?`,
    options: [
      r`About June 2 to June 4`,
      r`About June 8 to June 15`,
      r`About July 1 to July 6`,
      r`About August 1 to August 6`,
    ],
    correctAnswer: 2,
    explanation: r`Scores come out approximately 30 to 35 days after the test date. June has 30 days, so 30 days after June 1 is July 1 and 35 days after is July 6. A few days or one to two weeks is far too soon, and early August is about two months, roughly double the real wait.`,
  },
  [r`What happens if you void your exam?`]: {
    question: r`A student has already sat the exam twice this year. At the end of her third sitting she feels it went badly and voids it. How many attempts has she now used this year, and what do schools see from the third sitting?`,
    options: [
      r`Two attempts used; schools see no score from the third sitting`,
      r`Three attempts used; schools see no score from the third sitting`,
      r`Three attempts used; schools see the score from the third sitting`,
      r`Two attempts used; schools see the score from the third sitting`,
    ],
    correctAnswer: 1,
    explanation: r`A voided exam reports no score to schools, but it still counts toward the yearly and lifetime attempt limits, so she has used three attempts. Thinking a void erases the attempt gives the "two attempts" answers. Thinking a voided score is still sent gives the answers where schools see it.`,
  },
}
