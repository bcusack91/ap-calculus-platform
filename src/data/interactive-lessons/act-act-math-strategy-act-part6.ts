export const actMathStrategyPart6Data = {
  topicSlug: 'act-math-strategy-act',
  sections: [
    {
      id: 'act-m6-intro',
      type: 'text' as const,
      content: `
# 🧩 Problem-Solving Workshop

**Part 6 of 7 — Word Problems, Diagrams & Common Traps**

Many ACT Math questions are short stories: a garden, a road trip, a sale, a survey. The math is often easy once it is written as an equation or a picture. This part teaches three skills: translating words into math, drawing a diagram when none is given, and spotting the traps the ACT sets in word problems.

## Translating Words Into Math

| Words | Math |
|-------|------|
| is, equals, was, will be | $=$ |
| of (after a fraction or percent) | $\\times$ |
| what, a number, how many | a variable such as $n$ |
| more than, increased by, sum, total | $+$ |
| less than, fewer than | subtract **in reversed order**: "5 less than $x$" is $x - 5$ |
| per, for each, ratio of | $\\div$ |
| $p$ percent | $\\frac{p}{100}$ |
| $A$ is 20% more than $B$ | $A = 1.2B$ |
| $A$ is 20% less than $B$ | $A = 0.8B$ |
| twice as many $A$ as $B$ | $A = 2B$ |

**Example:** "Seven less than three times a number is 20" becomes $3n - 7 = 20$, so $n = 9$. Writing $7 - 3n = 20$ is the classic reversal error.

**Translate in chunks.** Read one phrase, write its math, then read the next. Define every variable in words ("$a$ = number of adult tickets") so you know at the end which variable answers the question.

## Draw a Diagram When None Is Given

If a problem describes something you could sketch, sketch it. It takes 10 seconds and prevents most setup errors.

| Situation | What to draw |
|-----------|--------------|
| Directions and distances (north, east, "from the starting point") | Arrows on a grid; look for a right triangle |
| A shape described in words (a path around a garden, a ladder against a wall) | The shape, with every given length labeled |
| Overlapping groups ("plays soccer," "plays basketball," "neither") | A two-circle Venn diagram inside a box for the total |
| Points on a line ("A, B, C, D in that order") | A number line with the points in order |

Label the unknown with a variable or a question mark. Once everything is on paper, the relationship (Pythagorean theorem, subtraction of areas, inclusion-exclusion) usually becomes obvious.

## Three Setups to Know Cold

**Mixture: amount of pure substance = concentration × volume.** Track the pure part, because it simply adds. Mixing 15 liters of a 20% solution with 5 liters of an 80% solution gives $0.2(15) + 0.8(5) = 3 + 4 = 7$ liters of pure substance in 20 liters, so the mixture is $\\frac{7}{20} = 35\\%$.

**Work rate: rates add, times do not.** If one worker finishes a job in $a$ hours and another in $b$ hours, together they take $t$ hours, where $\\frac{1}{a} + \\frac{1}{b} = \\frac{1}{t}$. Two printers that take 10 and 15 hours alone finish $\\frac{1}{10} + \\frac{1}{15} = \\frac{1}{6}$ of the job per hour, so together they take 6 hours. **Bound check:** working together must be faster than the faster one alone, so the answer has to be less than 10; adding the times (25) or averaging them (12.5) fails that check at once.

**Two-circle Venn: neither = total − (A + B − both).** The "both" group sits inside A and inside B, so subtract it once to avoid counting it twice. Of 40 students, 22 are in band, 15 are in choir, and 7 are in both: $22 + 15 - 7 = 30$ are in at least one, so $40 - 30 = 10$ are in neither.

## The Four Classic Traps

**1. Units.** Convert **before** you compute. Area and volume conversions are squared and cubed: 1 square yard = 9 square feet; 1 square foot = 144 square inches; 1 cubic yard = 27 cubic feet. For speed, 1 mile = 5,280 feet and 1 hour = 3,600 seconds, so 45 miles per hour is $\\frac{45 \\times 5280}{3600} = 66$ feet per second.

**2. NOT, EXCEPT, LEAST.** When a question says "which of the following is NOT…," three choices satisfy the condition and the answer is the one that does not. Mark the capitalized word on your scratch paper so you do not pick the first choice that "works."

**3. Percent base.** Percent change $= \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$. The base is the **original** value, the number after "of" or "than." A drop from 50 to 40 is a 20% decrease (10 out of 50), but the rise from 40 back to 50 is a 25% increase (10 out of 40).

**4. Extraneous solutions.** Squaring both sides of a radical equation or multiplying by an expression with $x$ can create false solutions. **Always check in the original equation:**
- A square root can never equal a negative number.
- A value that makes a denominator zero is never a solution.

**ACT Tip:** After you finish a word problem, reread the question's final sentence and check your units. If the question asks for cost in dollars and you have square feet, you are not done.
      `
    },
    {
      id: 'act-m6-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Drawing the missing diagram</b></summary>

**Question:** Two cyclists leave the same point. One rides 30 miles due north and the other rides 40 miles due east. How far apart are they, in miles?

**Solution:**
1. Draw it: an arrow up (30) and an arrow right (40) from one point. The distance between the riders is the segment joining the arrow tips.
2. The arrows meet at a right angle, so the distance is a hypotenuse: $\\sqrt{30^2 + 40^2} = \\sqrt{2500} = 50$. ✓
3. Recognize the 3-4-5 triangle scaled by 10 for a faster check.

**Trap avoided:** Without a diagram, many students add the distances (70), but the riders are not on one straight road.
</details>

<details>
<summary><b>Example 2: An extraneous solution in a rational equation</b></summary>

**Question:** How many real solutions does $\\frac{x}{x - 2} = \\frac{2}{x - 2} + 3$ have?

**Solution:**
1. Multiply every term by $x - 2$: $x = 2 + 3(x - 2) = 3x - 4$.
2. Solve: $2x = 4$, so $x = 2$.
3. **Check in the original:** $x = 2$ makes both denominators zero, so it is not allowed.

**Answer:** zero solutions. The equation has no solution, even though the algebra produced a number.
</details>
      `
    },
    {
      id: 'act-m6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Translate and Draw** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Seven less than three times a number is 20. What is the number?",
            options: ['$\\frac{13}{3}$', '$9$', '$27$', '$-\\frac{13}{3}$'],
            correctAnswer: 1,
            explanation: "\"Seven less than three times a number\" is $3n - 7$, so $3n - 7 = 20$, $3n = 27$, and $n = 9$. $-\\frac{13}{3}$ comes from reversing the order to $7 - 3n = 20$; $\\frac{13}{3}$ comes from adding the 7 ($3n + 7 = 20$); 27 is $3n$, not the number itself."
          },
          {
            question: "A rectangular garden measures 20 feet by 30 feet. A path 2 feet wide surrounds the garden on all sides, outside the garden. What is the area of the path, in square feet?",
            options: ['$104$', '$200$', '$216$', '$816$'],
            correctAnswer: 2,
            explanation: "Draw it: the path adds 2 feet on **each** side, so the outer rectangle is 24 by 34, with area 816. Subtract the garden: $816 - 600 = 216$. 816 is the garden plus the path; 200 multiplies the garden's perimeter (100) by the width (2), which leaves out the four 2-by-2 corner squares; 104 adds only 2 feet to each dimension in total instead of 2 feet per side."
          },
          {
            question: "In a group of 30 students, 18 play soccer, 15 play basketball, and 5 play neither sport. How many students play both sports?",
            options: ['$8$', '$10$', '$25$', '$13$'],
            correctAnswer: 0,
            explanation: "Draw a Venn diagram in a box of 30. Since 5 play neither, 25 play at least one sport. Then $18 + 15 - \\text{both} = 25$, so both $= 8$. 25 is the number who play at least one sport, an intermediate step; 13 is $18 - 5$, which mixes up the 'neither' group with the soccer group; 10 is $25 - 15$, the number who play soccer only, not both."
          },
          {
            question: "A hiker walks 5 km east, then 9 km north, then 7 km west. How far is the hiker from the starting point, in kilometers?",
            options: ['$21$', '$15$', '$11$', '$\\sqrt{85}$'],
            correctAnswer: 3,
            explanation: "Draw it: 5 east and 7 west leave a net 2 km west; together with 9 km north this forms a right triangle with legs 2 and 9, so the distance is $\\sqrt{4 + 81} = \\sqrt{85} \\approx 9.2$. 21 is the total distance walked, not the distance from the start; 15 treats east and west as adding (legs 12 and 9); 11 adds the two legs instead of using the Pythagorean theorem."
          }
        ]
      }
    },
    {
      id: 'act-m6-input1',
      type: 'input-boxes' as const,
      content: `
**Watch the Trap** ✏️

1) After a 30% discount, a jacket costs 63 dollars. What was the original price, in dollars?

2) A car travels at 45 miles per hour. What is its speed in feet per second? (1 mile = 5,280 feet)

3) How many real solutions does $\\frac{x}{x - 3} = \\frac{3}{x - 3} + 2$ have?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['90', '66', '0'],
        hint1: 'The sale price is 70% of the original: $0.7P = 63$.',
        hint2: 'Multiply by 5,280 to get feet per hour, then divide by 3,600 seconds per hour.',
        hint3: 'Clear the denominators, solve, and then check the result in the original equation.',
        explanation: '1) $P = 63 \\div 0.7 = 90$ dollars. Taking 30% of 63 and adding it back (81.90) uses the wrong base. 2) $\\frac{45 \\times 5280}{3600} = 66$ feet per second. 3) $x = 3 + 2(x - 3)$ gives $x = 3$, which makes the denominators zero, so there are 0 solutions.'
      }
    },
    {
      id: 'act-m6-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice: Spot the Trap

| # | Problem | Trap | Answer |
|---|---------|------|--------|
| 1 | Carpeting a 9 ft by 12 ft floor costs 4 dollars per square yard. What is the cost? | 108 square feet is only 12 square yards | 48 dollars (not 432) |
| 2 | How many cubic feet are in 2 cubic yards? | 1 cubic yard = 27 cubic feet, not 3 | $54$ |
| 3 | Which of 2, 3, 5, 9 is NOT prime? | the capitalized NOT | $9$ |
| 4 | A stock falls from 80 to 60. What is the percent decrease? | base is 80, not 60 | 25% |
| 5 | Solve $\\sqrt{x} = -4$. | a square root is never negative | no solution |

**ACT Tip:** In problem 4, $\\frac{20}{60} \\approx 33\\%$ is the trap answer that uses the new value as the base.
      `
    },
    {
      id: 'act-m6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions: Avoid the Trap** 📋
      `,
      exercise: {
        questions: [
          {
            question: "A rectangular room is 12 feet by 15 feet. Carpet costs 30 dollars per square yard. How many dollars will it cost to carpet the room? (1 yard = 3 feet)",
            options: ['$20$', '$600$', '$1800$', '$5400$'],
            correctAnswer: 1,
            explanation: "The area is 180 square feet. One square yard is $3 \\times 3 = 9$ square feet, so the area is $180 \\div 9 = 20$ square yards, costing $20 \\times 30 = 600$ dollars. 5400 multiplies square feet by a price per square yard; 1800 divides by 3 instead of 9; 20 is the area in square yards, not the cost."
          },
          {
            question: "Which of the following is NOT a solution of $x^3 - 4x = 0$?",
            options: ['$4$', '$-2$', '$0$', '$2$'],
            correctAnswer: 0,
            explanation: "Factor: $x(x^2 - 4) = x(x - 2)(x + 2) = 0$, so the solutions are 0, 2, and $-2$. The value that is NOT a solution is 4: $64 - 16 = 48$, not 0. Choosing 0, 2, or $-2$ answers the question without the NOT, since each of those does make the expression equal 0."
          },
          {
            question: "A ticket price dropped from 50 dollars to 40 dollars. By what percent must the new price increase to return to 50 dollars?",
            options: ['$10\\%$', '$20\\%$', '$25\\%$', '$80\\%$'],
            correctAnswer: 2,
            explanation: "The increase is 10 dollars, and the base is the **current** price, 40: $\\frac{10}{40} = 25\\%$. 20% measures the 10-dollar change against 50, the base for the original drop; 10% treats the dollar change as a percent; 80% is the ratio $\\frac{40}{50}$, not a percent change."
          },
          {
            question: "What is the solution set of $\\sqrt{x + 10} = x - 2$?",
            options: ['$\\{-1, 6\\}$', '$\\{1, -6\\}$', '$\\{-1\\}$', '$\\{6\\}$'],
            correctAnswer: 3,
            explanation: "Squaring gives $x + 10 = x^2 - 4x + 4$, so $x^2 - 5x - 6 = 0$ and $x = 6$ or $x = -1$. Check: $x = 6$ gives $\\sqrt{16} = 4 = 6 - 2$ ✓; $x = -1$ gives $\\sqrt{9} = 3$ but $-1 - 2 = -3$ ✗. So only 6 remains. $\\{-1, 6\\}$ keeps the extraneous root; $\\{-1\\}$ keeps only the extraneous root; $\\{1, -6\\}$ comes from a sign error in factoring."
          }
        ]
      }
    },
    {
      id: 'act-m6-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Translate phrase by phrase,** define each variable in words, and remember that "less than" reverses the order: "7 less than $3n$" is $3n - 7$.
- **Draw a diagram** for directions, shapes described in words, overlapping groups, and points on a line.
- **Units:** convert before computing; square units convert by the square (9 square feet per square yard) and cubic units by the cube (27).
- **NOT / EXCEPT:** three choices satisfy the condition; you want the one that does not.
- **Percent base** is the original value; **extraneous solutions** must be checked in the original equation.
      `
    }
  ]
}
