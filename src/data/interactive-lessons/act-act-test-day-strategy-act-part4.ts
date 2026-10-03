export const actTestDayPart4Data = {
  topicSlug: 'act-test-day-strategy-act',
  sections: [
    {
      id: 'act-tday-p4-intro',
      type: 'text' as const,
      content: `
# 🎲 Guessing Strategy

**Part 4 of 7 — No Penalty, Expected Value, Elimination, and the Two-Pass Method**

The ACT has **no penalty for wrong answers**: your score depends only on how many questions you get right. That single rule drives the whole guessing strategy.

**Rule 1: Never leave a question blank.** A blank is worth exactly 0 points. A guess is worth at least a chance at a point and can never cost you anything.

## The Expected-Value Math

Every ACT question has **4 answer choices**, so a pure random guess is right 1 time in 4 on average. Eliminating wrong choices raises those odds fast.

| Choices left after eliminating | Chance a guess is right | Expected points from 8 such guesses |
|-------------------------------|-------------------------|-------------------------------------|
| 4 (no elimination) | $\\frac{1}{4} = 25\\%$ | $8 \\times \\frac{1}{4} = 2$ |
| 3 (one eliminated) | $\\frac{1}{3} \\approx 33\\%$ | $8 \\times \\frac{1}{3} \\approx 2.7$ |
| 2 (two eliminated) | $\\frac{1}{2} = 50\\%$ | $8 \\times \\frac{1}{2} = 4$ |

Two lessons come out of this table:
- **Blind guesses still pay.** Eight blanks filled at random are worth about 2 points on average, and those points come at no cost.
- **Elimination pays more.** Spending 15–20 seconds to knock out two choices doubles the value of a guess. Often you can eliminate even when you cannot solve.

## The Two-Pass Method

Instead of fighting every hard question in order, move through each section in two passes.

**Pass 1:** Answer every question you can do with confidence at a normal pace. When a question will clearly take far longer than average, or you cannot see how to start within about 20–30 seconds:
1. Eliminate any choices you can.
2. **Mark a guess right away** (so nothing is ever blank).
3. Flag the question (circle the number in a paper booklet, or use the flag tool online) and move on.

**Pass 2:** With the time you saved, return to the flagged questions, easiest-looking first. If you solve one, change the guess to your new answer.

Marking the guess in Pass 1 is what makes this safe: if time runs out before Pass 2, your answer document is already complete.

## When to Skip (Guess and Flag)

Skip-and-flag a question in Pass 1 when:
- **You have no starting point** after about 20–30 seconds of reading.
- **It is a long multi-step setup** (several sentences, multiple figures, or several unknowns) and you are not ahead on time.
- **It has blown past your time cap** (for example, about 1 minute in English or 2 minutes in Math).
- **In Science, it needs information you cannot locate** in the figures after a quick look.

Do NOT skip a question just because it looks unfamiliar for two seconds. Read it fully once; many "scary" questions are short.

## Smart Elimination by Section

| Section | Eliminate choices that... |
|---------|---------------------------|
| English | Create a grammar or punctuation error; repeat an idea already stated (redundancy); change the meaning. When two choices are both correct and say the same thing, the more concise one is usually best. |
| Math | Fail a quick estimate, have the wrong sign or units, or do not satisfy the equation when you plug them back in. Backsolving (testing the answer choices) is a legitimate strategy. |
| Reading | Are not supported by the passage, use extreme wording (always, never, completely) that the text does not back up, or answer a different question than the one asked. |
| Science | Contradict the trend in the data (for example, say "increases" when the graph decreases) or rely on outside opinions instead of the figures. |

## Letter of the Day for Blind Guesses

When you must guess with no information at all, use the **same letter every time** (your "letter of the day"). On the paper test the choices alternate: odd-numbered questions use **A, B, C, D** and even-numbered questions use **F, G, H, J**, so pick one position, such as the second choice (**B / G**). No choice position is known to be favored; the point is speed and consistency. A fixed rule means zero seconds of second-guessing.

If you eliminated some choices, guess among the ones that remain. Use your letter of the day only if it survived; otherwise take the first remaining choice.

## The Last-Two-Minutes Rule

When the proctor announces 5 minutes remaining, finish the question you are on and keep going, but **at about 2 minutes left, stop and make sure every question has an answer.** Fill all blanks with your letter of the day, then use any remaining seconds on one more question. On a paper test, bubble in small batches during the section (for example, at the end of each page or passage) so that the final fill-in is quick and lines never get misaligned.

## Changing Answers

Change an answer when you have a **specific reason**: you found a computation error, misread the question, or located evidence in the passage. Do not change answers because of a vague feeling, or to "spread out" the letters. Long runs of the same letter happen; they are not a signal of mistakes.

## Unscored Questions Do Not Change Any of This

Each section includes some unscored field-test questions that look exactly like scored ones. Since you cannot tell which ones they are, the strategy is the same for every question: work it if you can, and guess on it if you cannot.
      `
    },
    {
      id: 'act-tday-p4-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: What is a smart guess worth?</b></summary>

**Question:** With 3 minutes left in Math, Chris has 6 untouched questions. He can either (a) guess on all 6 at random in about 20 seconds, or (b) spend the 3 minutes eliminating two choices on each and then guessing. Which gives more expected points, and is there an even better plan?

**Solution:**
1. **Plan (a):** $6 \\times \\frac{1}{4} = 1.5$ expected points.
2. **Plan (b):** $6 \\times \\frac{1}{2} = 3$ expected points, but only if he can really eliminate two choices on every question in 30 seconds each, which is risky.
3. **Best plan:** First bubble all 6 with his letter of the day (about 15 seconds). That locks in the 1.5 expected points. Then use the remaining time to eliminate and re-guess, or fully solve, as many as he can. Every improvement adds to a floor that is already safe.

**Takeaway:** Guess first, improve second. A completed answer sheet is the floor; extra time raises it.
</details>

<details>
<summary><b>Example 2: Eliminating without solving</b></summary>

**Question:** A Math question asks for the area of a triangle with base 9 and height 7. The choices are 16, 31.5, 63, and $-31.5$. Chris is short on time. What can he eliminate in seconds?

**Solution:**
1. **Sign check:** An area cannot be negative, so $-31.5$ is out.
2. **Size check:** 16 is just $9 + 7$, a sum rather than an area formula. 63 is $9 \\times 7$, the area of a rectangle with those sides; a triangle with the same base and height has half that.
3. **Answer:** $\\frac{1}{2}(9)(7) = 31.5$.

Even if he forgot the formula, the sign check alone would raise his guess from 1 in 4 to 1 in 3, and noticing that a triangle is smaller than its matching rectangle gets him to the answer.

**Takeaway:** Sign, size, and units checks eliminate choices fast, even under pressure.
</details>
      `
    },
    {
      id: 'act-tday-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Guessing Decisions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "With 90 seconds left in Reading, Bree has 4 questions unanswered and no time to read them. What should she do?",
            options: [
              "Leave them blank so she is not penalized for wrong answers",
              "Read the first question carefully and answer only that one",
              "Erase her shakiest earlier answers so she can rework them",
              "Bubble all four with her letter of the day right away"
            ],
            correctAnswer: 3,
            explanation: "The ACT has no wrong-answer penalty, so a blank is worth 0 while each guess is a 1-in-4 chance at a point; four guesses are worth about 1 point on average. Working just one question leaves three blanks, and erasing earlier answers trades considered work for nothing."
          },
          {
            question: "On average, how many points would random guesses on 12 questions earn, and what if she could eliminate two choices on each?",
            options: [
              "About 3 points; about 6 points with two eliminated",
              "About 3 points; about 4 points with two eliminated",
              "About 2.4 points; about 4 points with two eliminated",
              "About 4 points; about 8 points with two eliminated"
            ],
            correctAnswer: 0,
            explanation: "With four choices, 12 times 1/4 = 3 expected points. With two choices left, 12 times 1/2 = 6. The 2.4 figure uses a 1-in-5 chance, which applied to the old five-choice Math section, and 4 points is what you get with one choice eliminated (12 times 1/3)."
          },
          {
            question: "In Pass 1 of English, Gabe hits a question he cannot crack after a minute. What is the best next step?",
            options: [
              "Keep working until he is sure, since English questions are quick",
              "Eliminate what he can, mark a guess, flag it, and move on",
              "Skip it without marking anything and come back at the end",
              "Choose the longest answer, since it usually has more detail"
            ],
            correctAnswer: 1,
            explanation: "Marking a guess and flagging protects the point even if he never returns, and moving on keeps his 42-second pace. Grinding past the cap costs time on easier questions, skipping with no mark risks a blank, and the longest choice is not reliably correct; in English, wordier choices are often redundant."
          },
          {
            question: "A Reading question asks what the author implies about a scientist. One choice says the scientist 'never doubted' her theory, but the passage says she 'remained cautious.' What should a student do with that choice?",
            options: [
              "Keep it, because strong wording shows confidence",
              "Keep it, because the passage mentions her theory",
              "Eliminate it, since it contradicts the passage",
              "Eliminate it, since implied answers are never right"
            ],
            correctAnswer: 2,
            explanation: "Extreme wording like 'never doubted' is directly contradicted by 'remained cautious,' so the passage does not support it. Mentioning the right topic is not the same as being supported. Implication questions do have correct answers; they are the choices the text backs up."
          }
        ]
      }
    },
    {
      id: 'act-tday-p4-input',
      type: 'input-boxes' as const,
      content: `
**Expected-Value Practice** 🧮

1) A student randomly guesses on 8 questions with 4 choices each. Enter the expected number correct.

2) She eliminates two choices on each of 10 questions, then guesses. Enter the expected number correct.

3) A student eliminates one choice on each of 9 questions, then guesses. Enter the expected number correct.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '5', '3'],
        hint1: 'Each random guess has a 1-in-4 chance.',
        hint2: 'Two eliminated leaves 2 choices: a 1-in-2 chance each.',
        hint3: 'One eliminated leaves 3 choices: a 1-in-3 chance each.',
        explanation: '1) 8 x 1/4 = 2. 2) 10 x 1/2 = 5. 3) 9 x 1/3 = 3. Elimination raises the value of every guess, and even blind guesses beat blanks.'
      }
    },
    {
      id: 'act-tday-p4-actpractice',
      type: 'text' as const,
      content: `
## Skip or Solve?

Decide for each Pass 1 situation, then check.

| Situation | Decision |
|-----------|----------|
| Math Q38: a five-sentence word problem with a table, and you are 2 minutes behind | Guess, flag, return if time allows |
| Math Q12: a one-line equation you know how to solve | Solve it now |
| English: you can eliminate two choices but are torn between the last two after 50 seconds | Pick one, flag, move on |
| Science: a question names a variable you cannot find in any figure after a quick look | Guess, flag, return after the rest of the passage |
| Reading: a line-reference question about vocabulary in context | Solve it now; these are usually quick |

**ACT Tip:** Practice the two-pass method on timed practice sections, not just on test day. The "mark a guess, flag, move" motion should feel automatic.
      `
    },
    {
      id: 'act-tday-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Endgame Scenarios** 📋
      `,
      exercise: {
        questions: [
          {
            question: "The 5-minute warning sounds in Math. Ana has answered everything except 7 questions she skipped without marking. What is her best plan?",
            options: [
              "Bubble all 7 now with her letter of the day, then improve them",
              "Work the 7 in order and bubble each one only once it is solved",
              "Pick the 3 easiest-looking of the 7 and leave the other 4 blank",
              "Re-check her finished answers first, then guess on the 7 at the end"
            ],
            correctAnswer: 0,
            explanation: "Bubbling first locks in about 1.75 expected points (7 times 1/4) in a few seconds, and every question she then solves only adds to it. Working in order risks running out with blanks, leaving any blank wastes a free chance, and checking finished work first leaves the blanks exposed if time runs out."
          },
          {
            question: "Lena notices she has bubbled C, C, C, C for four Math questions in a row. She is confident in each one. What should she do?",
            options: [
              "Change one of them, since four in a row is very unlikely",
              "Change two of them, so the letters are spread more evenly",
              "Rework all four from scratch before she moves on",
              "Leave them; streaks happen and her work supports each one"
            ],
            correctAnswer: 3,
            explanation: "Answer streaks occur naturally and are not evidence of a mistake. Changing answers she worked out with confidence, just to spread letters, is likely to turn right answers into wrong ones. Reworking all four wastes time when she has no specific reason to doubt them."
          },
          {
            question: "On the paper test, which bubbling habit best prevents losing points at the end of a section?",
            options: [
              "Bubble each answer the instant it is chosen, one at a time",
              "Circle answers in the booklet and bubble them all at the end",
              "Bubble in small batches, such as at the end of each page",
              "Bubble only the questions she is sure of; skip the rest"
            ],
            correctAnswer: 2,
            explanation: "Batch bubbling keeps the answer document current without breaking focus on every question, so the end-of-section fill-in is quick and alignment errors are easy to catch. Bubbling everything at the end risks running out of time with a blank sheet, and skipping uncertain questions leaves blanks that a guess could fill."
          },
          {
            question: "Theo eliminated choices A and D on a question but has no idea between B and C. His letter of the day is D (J on even questions). What should he pick?",
            options: [
              "D, because his letter of the day should always be used",
              "B or C, and he should just choose one of the two that remain",
              "Leave it blank, since he cannot decide between B and C",
              "A, since the first option is always the safest blind guess"
            ],
            correctAnswer: 1,
            explanation: "The letter of the day is for guesses with no information. Once he has eliminated A and D, picking either remaining choice gives a 1-in-2 chance, while D has already been ruled out. A blank is worth nothing, and no answer position is known to be favored."
          }
        ]
      }
    },
    {
      id: 'act-tday-p4-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **No wrong-answer penalty:** never leave a blank. A random guess with 4 choices is right 1 time in 4.
- **Eliminate first:** one choice out raises a guess to 1 in 3; two out raises it to 1 in 2.
- **Two-pass method:** answer what you can, and for hard questions eliminate, **mark a guess**, flag, and move; return in Pass 2.
- **Skip triggers:** no starting point after 20–30 seconds, long multi-step setups when you are behind, or a blown time cap.
- **Letter of the day** for no-information guesses (for example, B/G); use it only if it has not been eliminated.
- **At about 2 minutes left, fill every blank**, then use leftover seconds. Change answers only for a specific reason.
      `
    }
  ]
};
