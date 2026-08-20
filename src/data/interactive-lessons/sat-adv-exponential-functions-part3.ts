export const lessonData = {
  topicSlug: 'sat-exponential-functions-advanced',
  sections: [
    {
      id: 'ea3-drill-intro',
      type: 'text' as const,
      content: `# Exponential Functions: Timed Drill

**Part 3 of 3 — Four Questions at Full Difficulty**

Budget about **75 seconds per question**. Before computing anything, name the archetype: rebasing, compound-vs-linear, doubling count, or threshold crossing. Decide whether the answer should sit above or below the linear estimate — that alone often eliminates two choices. Use the calculator for powers like $(0.93)^{4}$, but set up the expression by hand first.`
    },
    {
      id: 'ea3-q1',
      type: 'quiz' as const,
      question: 'A radioactive sample has a half-life of $8$ years. A lab measures $6$ grams remaining $40$ years after the sample was created. How many grams were present $16$ years after the sample was created?',
      options: [
        '$24$',
        '$48$',
        '$96$',
        '$192$'
      ],
      correctAnswer: 1,
      explanation: 'Fastest route: $16$ years is $\\frac{40 - 16}{8} = 3$ half-lives BEFORE the measurement, so multiply $6$ by $2^{3} = 8$ to get $48$ grams. (Longer route: original amount is $6 \\cdot 2^{5} = 192$ grams, and two halvings later, $192 \\div 4 = 48$.) $192$ is the original amount, an intermediate; $24$ multiplies by $2^{2}$, miscounting the half-lives; $96$ multiplies by $2^{4}$, the matching miscount in the other direction.'
    },
    {
      id: 'ea3-q2',
      type: 'quiz' as const,
      question: 'A $\\$10{,}000$ machine can be written down two ways: Plan A subtracts a fixed $\\$700$ each year; Plan B removes $7\\%$ of the current value each year. To the nearest dollar, by how much does the Plan B value exceed the Plan A value after $4$ years?',
      options: [
        '$281$',
        '$2519$',
        '$2800$',
        '$7481$'
      ],
      correctAnswer: 0,
      explanation: 'Plan A: $10000 - 4(700) = \\$7200$. Plan B: $10000(0.93)^{4} = 10000(0.748052) \\approx \\$7481$. Difference: $7481 - 7200 = \\$281$. Plan B keeps more value because each $7\\%$ is taken from a smaller base than the flat $\\$700$ assumes. $7481$ is Plan B\'s value and $2800$ is Plan A\'s total loss — both intermediates; $2519$ is Plan B\'s loss, the right computation aimed at the wrong quantity.'
    },
    {
      id: 'ea3-q3',
      type: 'quiz' as const,
      question: 'A town\'s population is $250$ thousand and grows $6\\%$ per year. After how many whole years does the population FIRST exceed $400$ thousand?',
      options: [
        '$8$',
        '$9$',
        '$10$',
        '$11$'
      ],
      correctAnswer: 1,
      explanation: 'Need $(1.06)^{n} > \\frac{400}{250} = 1.6$. Compute the boundary: $(1.06)^{8} \\approx 1.594$ (population $398.5$ — still under), and $(1.06)^{9} \\approx 1.689$ (population $422.4$ — over). So the first crossing is year $9$. $8$ is the last year below the threshold, the classic off-by-one; $10$ is the linear estimate $\\frac{0.6}{0.06}$, which overshoots because compounding accelerates; $11$ is one year past the crossing.'
    },
    {
      id: 'ea3-q4',
      type: 'quiz' as const,
      question: 'An algae patch covers $2$ square meters and doubles in area every $3$ days. The pond\'s surface is $4096$ square meters. On what day does the algae cover exactly HALF the pond?',
      options: [
        '$11$',
        '$16.5$',
        '$30$',
        '$33$'
      ],
      correctAnswer: 2,
      explanation: 'Full coverage: $2 \\cdot 2^{k} = 4096$, so $2^{k} = 2048 = 2^{11}$ and full coverage takes $11$ doublings, or $33$ days. Half the pond is exactly one doubling earlier: day $30$. $33$ is FULL coverage; $16.5$ is half of $33$ — the linear-time trap (half the time covers far less than half the pond); $11$ is the number of doublings, not a number of days.'
    }
  ]
};
