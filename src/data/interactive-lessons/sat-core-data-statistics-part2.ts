export const lessonData = {
  topicSlug: 'sat-data-statistics-core-skills',
  sections: [
    {
      id: 'ds-core-p2-recap',
      type: 'text' as const,
      content: `# Data & Statistics: Practice

**Part 2 of 2 — Count, Group, Fraction, Percent**

Every one of these questions is the same four steps.

1. **Find the count you want.** This is one cell of the table, or one total. It goes on **top** of the fraction.
2. **Find the group the question is asking about.** "Of all $50$ students" means the group is everyone. "Of the boys" means the group is only the boys. This number goes on the **bottom**.
3. **Write the fraction:** $\\frac{\\text{count you want}}{\\text{group}}$.
4. **If the question asks for a percent,** turn the fraction into a percent. Make the bottom number $100$ if you can, or divide the top by the bottom and move the decimal point two places to the right.

### The words that tell you the bottom number

- "of all the students" or "of everyone surveyed" → use the grand total.
- "of the boys" or "among the boys" → use the boys total only.
- "of the students who said Yes" → use the Yes total only.

The top of the fraction is usually sitting right there in the table. The bottom is the part you have to think about, so read that phrase twice.

### Totals reminder

A **row total** is the row added across. A **column total** is the column added down. If a question needs a total that is not printed, add the cells yourself.`
    },
    {
      id: 'ds-core-p2-q1',
      type: 'quiz' as const,
      question: `A survey included $20$ boys. Of those boys, $12$ said Yes. What fraction of the boys said Yes?`,
      options: ['$\\frac{2}{5}$', '$\\frac{12}{50}$', '$\\frac{1}{2}$', '$\\frac{3}{5}$'],
      correctAnswer: 3,
      explanation: `The question asks about "the boys," so the group on the bottom is the $20$ boys. The count you want on top is the $12$ boys who said Yes. That gives $\\frac{12}{20}$. Now reduce it: both $12$ and $20$ divide by $4$, and $12 \\div 4 = 3$ while $20 \\div 4 = 5$, so $\\frac{12}{20} = \\frac{3}{5}$. The choice $\\frac{12}{50}$ uses the whole survey as the bottom number instead of the boys alone.`
    },
    {
      id: 'ds-core-p2-q2',
      type: 'quiz' as const,
      question: `In a class of $20$ students, $16$ walk to school. What percent of the class walks to school?`,
      options: ['$16\\%$', '$80\\%$', '$40\\%$', '$20\\%$'],
      correctAnswer: 1,
      explanation: `Start with the fraction: the count you want is $16$ and the group is the $20$ students, so the fraction is $\\frac{16}{20}$. To make it a percent, turn the bottom into $100$. Since $20 \\times 5 = 100$, multiply the top by $5$ too: $16 \\times 5 = 80$. That gives $\\frac{80}{100}$, which is $80\\%$. The answer $16\\%$ treats the raw count as a percent, but $16$ students out of only $20$ is most of the class.`
    },
    {
      id: 'ds-core-p2-q3',
      type: 'quiz' as const,
      question: `In a two-way table, the first column has $14$ in the top cell and $6$ in the bottom cell. What is the column total?`,
      options: ['$8$', '$14$', '$20$', '$84$'],
      correctAnswer: 2,
      explanation: `A column total is found by adding the cells down that column. The two cells are $14$ and $6$, so add them: $14 + 6 = 20$. The column total is $20$. The answer $8$ comes from subtracting the cells, but a total always means adding them together.`
    },
    {
      id: 'ds-core-p2-q4',
      type: 'quiz' as const,
      question: `A survey of $50$ students recorded their answers. In the No column, $8$ boys said No and $12$ girls said No. What percent of all $50$ students said No?`,
      options: ['$40\\%$', '$20\\%$', '$12\\%$', '$60\\%$'],
      correctAnswer: 0,
      explanation: `First find the count you want, which is everyone who said No. Add the two cells in the No column: $8 + 12 = 20$ students said No. The group is all $50$ students, so the fraction is $\\frac{20}{50}$. To make it a percent, turn the bottom into $100$: since $50 \\times 2 = 100$, multiply the top by $2$ as well, giving $\\frac{40}{100}$, which is $40\\%$. The answer $20\\%$ uses the count $20$ as if it were already a percent.`
    }
  ]
}
