export const actMathStrategyPart5Data = {
  topicSlug: 'act-math-strategy-act',
  sections: [
    {
      id: 'act-m5-intro',
      type: 'text' as const,
      content: `
# ⏱️ Time Management

**Part 5 of 7 — Pacing, Skipping, Estimation & Elimination**

You have 50 minutes for 45 questions, an average of about 67 seconds each. But the questions are not equally hard, and they are not worth more for being hard: every question counts the same. Good pacing means spending your time where it buys the most points.

## The Two-Pass System

**Pass 1 (most of the 50 minutes):** Go through every question in order. Answer each one you can do in about a minute. If a question is long, confusing, or on a topic you are weak in, **make a quick guess, mark it, and move on.**

**Pass 2 (the time that is left):** Return to the marked questions, easiest first. Replace your guess if you solve one.

**Final minute:** Make sure every question has an answer. There is no penalty for wrong answers, so a blank is always a lost chance.

## Skip Signals

| Signal | Why skip (for now) |
|--------|--------------------|
| You have read it twice and still do not know what is being asked | Rereading is time spent without progress |
| About 90 seconds have passed and you have no plan | A later question may take 30 seconds |
| A long setup with several steps on a topic you rarely get right | Bank easier points first |
| The arithmetic is spiraling (fractions of fractions, huge numbers) | You may have chosen the wrong method; a fresh look later often helps |

Skipping is not giving up. It is reordering the test so you see every question you can answer.

## Pacing Checkpoints

Questions generally get harder later, so aim to be slightly **ahead** of the average pace early. One reasonable plan:

| After question… | Target time used |
|-----------------|------------------|
| 10 | about 9 minutes |
| 20 | about 19 minutes |
| 30 | about 31 minutes |
| 40 | about 43 minutes |
| 45 | 47–48 minutes, leaving time for marked questions |

Check your watch only at these checkpoints, not after every question.

## Estimation: Know the Size of the Answer

Round the numbers, compute roughly, and eliminate any choice that is far off. For $\\frac{398 \\times 0.51}{19.7}$, think $\\frac{400 \\times 0.5}{20} = 10$; only a choice near 10 survives. Estimation also catches decimal-point slips and calculator entry errors (Part 2).

## Elimination: Cross Out the Impossible

Many choices can be eliminated without solving, using facts that must always be true:

| Fact | Eliminates |
|------|------------|
| A probability is between 0 and 1 | any probability greater than 1 or negative |
| A length, area, or count is positive | negative or zero values |
| An average lies between the smallest and largest values | averages outside that range, or the sum |
| The hypotenuse is the longest side, but shorter than the sum of the legs | hypotenuses shorter than a leg or equal to the sum |
| Any side of a triangle is less than the sum of the other two and greater than their difference | third sides outside that range |
| A part is smaller than the whole | a "part" larger than the total |

With 4 choices, eliminating even one turns a 1-in-4 guess into a 1-in-3 guess; eliminating two makes it a coin flip.

**About figures:** the ACT directions state that illustrative figures are not necessarily drawn to scale. Use a figure to rule out wildly impossible choices, not to choose between close ones.

**ACT Tip:** When a question looks long, read the last sentence and glance at the choices before you start. If the choices are far apart, a quick estimate may finish the question in seconds.
      `
    },
    {
      id: 'act-m5-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Estimating instead of calculating</b></summary>

**Question:** What is 19.8% of 401? Choices: 7.94, 79.4, 321.6, 794.

**Solution:**
1. Round: 19.8% is about 20%, and 401 is about 400.
2. 20% of 400 is 80.
3. Only 79.4 is close to 80. ✓ (7.94 and 794 are decimal-point slips; 321.6 is the remaining 80.2% of 401, the part that is *not* taken.)

**Time used:** about 10 seconds, with no calculator.
</details>

<details>
<summary><b>Example 2: Eliminating with the triangle inequality</b></summary>

**Question:** Two sides of a triangle have lengths 7 and 10. Which of the following could be the perimeter? Choices: 19, 20, 27, 34.

**Solution:**
1. The third side $s$ must satisfy $10 - 7 < s < 10 + 7$, so $3 < s < 17$.
2. The perimeter is $17 + s$, so it must be between $20$ and $34$, not including either end.
3. 19 and 20 are too small (they need $s \\le 3$); 34 needs $s = 17$, which makes a flat "triangle." Only 27 ($s = 10$) works. ✓

**Takeaway:** You did not need the exact third side; you only needed the bounds.
</details>
      `
    },
    {
      id: 'act-m5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Estimate and Eliminate** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which of the following is closest to $\\frac{398 \\times 0.51}{19.7}$?",
            options: ['$1.03$', '$10.3$', '$103$', '$0.103$'],
            correctAnswer: 1,
            explanation: "Estimate: $\\frac{400 \\times 0.5}{20} = 10$, so the answer is near 10. The exact value is $202.98 \\div 19.7 \\approx 10.3$. The other three choices have the same digits with the decimal point in the wrong place; 1.03, 103, and 0.103 are each off by at least a factor of 10 from the estimate."
          },
          {
            question: "In a class of 28 students, 9 earned an A on a test. To the nearest percent, what percent of the class earned an A?",
            options: ['$19\\%$', '$68\\%$', '$32\\%$', '$9\\%$'],
            correctAnswer: 2,
            explanation: "9 out of 28 is a little less than 9 out of 27, which is one third (about 33%). Exactly, $9 \\div 28 \\approx 0.321$, or 32%. 68% is the share of students who did **not** earn an A; 9% treats the count as a percent; 19% is far below one third and has no basis in the numbers."
          },
          {
            question: "A bag contains 5 red, 7 blue, and 8 green marbles. Two marbles are drawn at random without replacement. What is the probability that both are red?",
            options: ['$\\frac{1}{19}$', '$\\frac{1}{16}$', '$\\frac{1}{4}$', '$\\frac{5}{4}$'],
            correctAnswer: 0,
            explanation: "$\\frac{5}{20} \\times \\frac{4}{19} = \\frac{20}{380} = \\frac{1}{19}$. Eliminate $\\frac{5}{4}$ at once: a probability cannot exceed 1. $\\frac{1}{4}$ is the chance that just the first marble is red, and two reds must be less likely than one. $\\frac{1}{16} = \\frac{1}{4} \\times \\frac{1}{4}$ assumes the first marble is put back, but the draw is without replacement."
          },
          {
            question: "A right triangle has legs of length 6 and 9. What is the length of the hypotenuse?",
            options: ['$\\sqrt{45}$', '$15$', '$54$', '$3\\sqrt{13}$'],
            correctAnswer: 3,
            explanation: "$\\sqrt{6^2 + 9^2} = \\sqrt{36 + 81} = \\sqrt{117} = 3\\sqrt{13} \\approx 10.8$. Elimination finds it without simplifying: the hypotenuse must be longer than the longer leg, 9, which rules out $\\sqrt{45} \\approx 6.7$ (subtracting the squares), and shorter than $6 + 9 = 15$, which rules out 15 (adding the legs) and 54 (multiplying them)."
          }
        ]
      }
    },
    {
      id: 'act-m5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Eliminate to One Choice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Two sides of a triangle are 4 and 9. The third side could be …',
            options: ['4', '5', '8', '13']
          },
          {
            label: 'A 15% tip on a 38.75-dollar bill is closest to …',
            options: ['0.58 dollars', '3.88 dollars', '5.81 dollars', '58.13 dollars']
          },
          {
            label: 'The average of 47, 52, 58, and 63 is …',
            options: ['42', '55', '60', '220']
          }
        ],
        correctAnswers: ['8', '5.81 dollars', '55'],
        hint1: 'The third side must be greater than $9 - 4$ and less than $9 + 4$.',
        hint2: '10% of about 39 is 3.9; add half of that for the other 5%.',
        hint3: 'An average lies between the smallest and largest values; then add and divide by 4.',
        explanation: '1) The third side is between 5 and 13 (not equal to either), so only 8 works. 2) 10% is about 3.88 and 5% is about 1.94, so 15% is about 5.81 dollars. 3) 42 is below the smallest value and 220 is the sum; $220 \\div 4 = 55$.'
      }
    },
    {
      id: 'act-m5-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice: The 30-Second Finish

Each problem below can be finished in under 30 seconds with estimation, elimination, or a shortcut.

| # | Problem | Shortcut | Answer |
|---|---------|----------|--------|
| 1 | Which is closest to $\\sqrt{2}\\sqrt{50}$? | $\\sqrt{100}$ | $10$ |
| 2 | Sum of the solutions of $x^2 - 9x + 14 = 0$ | Sum of roots $= 9$ | $9$ |
| 3 | 49.6% of 812, nearest whole number | about half of 812 | $403$ |
| 4 | Probability of rolling a sum of 13 with two standard dice | maximum sum is 12 | $0$ |

**ACT Tip:** Speed on questions like these is what pays for the long, multi-step questions near the end of the test.
      `
    },
    {
      id: 'act-m5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions: Find the Fast Route** 📋
      `,
      exercise: {
        questions: [
          {
            question: "If $\\frac{3}{x} = \\frac{12}{20}$, what is the value of $x$?",
            options: ['$4$', '$5$', '$8$', '$80$'],
            correctAnswer: 1,
            explanation: "Cross-multiply: $12x = 60$, so $x = 5$. Faster: $\\frac{12}{20}$ reduces to $\\frac{3}{5}$, so $x = 5$ by inspection. 4 is $12 \\div 3$, 8 is $20 - 12$, and 80 is $\\frac{20 \\times 12}{3}$, which inverts the proportion."
          },
          {
            question: "What is the sum of the solutions of $x^2 - 7x + 10 = 0$?",
            options: ['$-7$', '$10$', '$7$', '$2$ and $5$'],
            correctAnswer: 2,
            explanation: "The equation factors as $(x - 2)(x - 5) = 0$, so the solutions are 2 and 5, with sum 7. Shortcut: for $x^2 + bx + c = 0$ the sum of the roots is $-b = 7$. $-7$ forgets the sign change; 10 is the product of the roots; '2 and 5' lists the solutions without adding them, which answers a different question."
          },
          {
            question: "A circle of radius 6 is inscribed in a square. What is the area of the region inside the square but outside the circle?",
            options: ['$144 - 36\\pi$', '$144 - 12\\pi$', '$36\\pi - 144$', '$36 - 6\\pi$'],
            correctAnswer: 0,
            explanation: "The square's side equals the circle's diameter, 12, so the square's area is 144 and the circle's area is $36\\pi$. The region is $144 - 36\\pi \\approx 30.9$. Eliminate $36\\pi - 144$ immediately: it is negative ($113.1 - 144$). $144 - 12\\pi$ subtracts the circumference instead of the area; $36 - 6\\pi$ uses 6 as the square's side, but the side is the diameter."
          },
          {
            question: "A student answers the first 30 questions of a 45-question, 50-minute test in 28 minutes. If the remaining time is split evenly among the remaining questions, how many seconds does the student have for each one?",
            options: ['$1.47$', '$66$', '$80$', '$88$'],
            correctAnswer: 3,
            explanation: "Remaining time: $50 - 28 = 22$ minutes $= 1320$ seconds. Remaining questions: 15. $1320 \\div 15 = 88$ seconds each. 1.47 is the same rate in minutes ($22 \\div 15$), the wrong unit. 66 is the whole-test average, which ignores the time already used. 80 assumes only 20 minutes remain."
          }
        ]
      }
    },
    {
      id: 'act-m5-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **About 67 seconds per question**, but every question is worth the same, so spend time where it earns points.
- **Two passes:** answer what you can, guess-and-mark the rest, return to the marks, and never leave a blank.
- **Skip signals:** two reads with no plan, about 90 seconds with no progress, or spiraling arithmetic.
- **Checkpoints:** be a little ahead of pace early, because later questions tend to be harder.
- **Estimate** to find the size of the answer; **eliminate** using bounds (probability between 0 and 1, positive lengths, averages between extremes, triangle inequality).
      `
    }
  ]
}
