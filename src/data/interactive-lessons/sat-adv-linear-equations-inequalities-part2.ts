export const lessonData = {
  topicSlug: 'sat-linear-equations-inequalities-advanced',
  sections: [
    {
      id: 'advlei2-traps',
      type: 'text' as const,
      content: `# Traps & Speed: Linear Equations & Inequalities

**Part 2 of 3 — How the Wrong Answers Are Built**

Every hard-tier option list is engineered. If you know the four molds the distractors come from, you can often eliminate two options before doing any algebra.

### The Four Distractor Molds

1. **The intermediate value.** You solved for $x$ correctly — and $x$ is sitting right there as an option. But the question asked for $2x - 5$, or the total, or the other quantity. *Reread the final sentence before you answer.*
2. **The boundary value.** "Costs LESS than" is strict: at the break-even point the totals are EQUAL, which fails "less than." The break-even number itself is always an option.
3. **The wrong rounding direction.** Budget and capacity problems round **down** ($22.9 \\rightarrow 22$); "at least" requirement problems round **up** ($8.6 \\rightarrow 9$). The opposite rounding is always an option.
4. **The sign-flip casualty.** Dividing an inequality by a negative reverses it. The un-flipped answer is always an option.

### Speed Techniques

- **Desmos both-sides graph:** for $6x - 8 = 3x + 7$, type $y = 6x - 8$ and $y = 3x + 7$; the intersection's $x$-coordinate is the solution. For parameter problems, add a slider for $a$ and drag until the lines are parallel.
- **Boundary check beats algebra:** for "greatest $n$" problems, test the two integers around your cutoff. Thirty seconds of arithmetic catches every rounding trap.
- **Don't isolate — evaluate.** If the target is $\\frac{x+3}{2}$, compute it directly from $x$; if the target is a combination like $x + y$, look for a way to build it without finding $x$ and $y$ separately.`
    },
    {
      id: 'advlei2-q1',
      type: 'quiz' as const,
      question: `Gym A charges an $\\$18$ monthly rate plus a $\\$150$ joining fee; Gym B charges $\\$24$ monthly with no fee. A student is asked for the greatest number of months for which Gym B's total cost is LESS than Gym A's. She correctly reduces the comparison to $6m < 150$, gets $m < 25$, and answers 25. What went wrong?`,
      options: [
        'The answer should stay 25, because 25 is the cutoff the inequality gives',
        'The answer should be 24, because at 25 months the two totals are equal',
        'The answer should be 26, because Gym B becomes cheaper after month 25',
        'The answer should be 6, because the 150 fee covers about 6 months of Gym B'
      ],
      correctAnswer: 1,
      explanation: 'From $6m < 150$, $m$ must be STRICTLY less than $25$. At exactly $25$ months both gyms cost $\\$600$, which is not "less than." So the greatest whole number of months is $24$ ($\\$576$ at Gym B versus $\\$582$ at Gym A). This is the boundary-value trap: the equality point is always planted in the options. Keeping 25 treats the strict cutoff as if it were included. Gym B is the cheaper gym BEFORE month 25, not after, so 26 has the direction backward. Dividing the fee by $\\$24$ ignores that Gym A also charges $\\$18$ each month; the monthly gap is only $\\$6$.'
    },
    {
      id: 'advlei2-q2',
      type: 'quiz' as const,
      question: 'If $\\frac{3}{4}(8x - 12) = 2(x + 9) + 3$, what is the value of $2x - 5$?',
      options: ['$2.5$', '$7.5$', '$10$', '$15$'],
      correctAnswer: 2,
      explanation: 'Distribute: $\\frac{3}{4}(8x - 12) = 6x - 9$ and $2(x + 9) + 3 = 2x + 21$. Then $6x - 9 = 2x + 21$ gives $4x = 30$, so $x = 7.5$. The question asks for $2x - 5 = 15 - 5 = 10$. The traps: $7.5$ is $x$ itself — the intermediate value. $15$ is $2x$ with the subtraction left undone. $2.5$ is $x - 5$, subtracting before doubling. At 700+, expect the answer to the literal question you solved to be the most tempting wrong option.'
    },
    {
      id: 'advlei2-q3',
      type: 'quiz' as const,
      question: 'Which describes the solution set of $14 - 3x > 5x + 46$?',
      options: ['$x < -4$', '$x > -4$', '$x < 4$', '$x > 4$'],
      correctAnswer: 0,
      explanation: 'Collect terms: $14 - 46 > 5x + 3x$, so $-32 > 8x$ and $x < -4$. The clean path never divides by a negative: move the $x$-terms to the side where the coefficient stays positive, and no flip is ever needed. $x > -4$ is the sign-flip casualty — dividing $-3x - 5x$ by $-8$ and forgetting to reverse. The $\\pm 4$ options come from dropping a sign on $-32 \\div 8$. Check with a test value: $x = -8$ gives $38 > 6$, true, confirming $x < -4$.'
    }
  ]
};
