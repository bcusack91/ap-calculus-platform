export const lessonData = {
  topicSlug: 'sat-data-statistics-core-skills',
  sections: [
    {
      id: 'ds-core-p1-intro',
      type: 'text' as const,
      content: `# Data & Statistics: The Basics

**Part 1 of 2 — Reading a Table and Turning It Into a Fraction**

A **two-way table** sorts a group of people two ways at once. Here is one. It shows $50$ students, sorted by whether they are a boy or a girl, and by whether they answered Yes or No to a survey question.

| | Yes | No | Total |
|---|---|---|---|
| Boys | 12 | 8 | 20 |
| Girls | 18 | 12 | 30 |
| **Total** | 30 | 20 | **50** |

### How to read it

Each box inside the table is called a **cell**, and it holds a count of people. The cell where the Girls row meets the Yes column holds $18$. That means $18$ girls answered Yes.

The **Total** column on the right adds across a row. The boys row: $12 + 8 = 20$, so there are $20$ boys.

The **Total** row along the bottom adds down a column. The Yes column: $12 + 18 = 30$, so $30$ students said Yes.

The bottom-right corner, $50$, is everyone in the table.

### Turning a count into a fraction

A fraction is **the part you want on top, and the whole group on the bottom**.

*What fraction of all $50$ students are girls who said Yes?*

The part you want is the $18$ girls who said Yes. The whole group is all $50$ students. So the fraction is $\\frac{18}{50}$.

### Turning that fraction into a percent

A percent means "out of $100$." The quickest way here is to make the bottom number $100$.

$50 \\times 2 = 100$, so multiply the top by $2$ as well: $18 \\times 2 = 36$.

$\\frac{18}{50} = \\frac{36}{100} = 36\\%$

If the bottom does not turn into $100$ easily, divide instead: $18 \\div 50 = 0.36$, and moving the decimal point two places to the right gives $36\\%$.

That is the whole skill: find the count, find the group it came from, put one over the other.`
    },
    {
      id: 'ds-core-p1-q1',
      type: 'quiz' as const,
      question: `A survey recorded these counts: $14$ boys said Yes, $6$ boys said No, $11$ girls said Yes, and $9$ girls said No. How many students were surveyed in total?`,
      options: ['$25$', '$30$', '$40$', '$45$'],
      correctAnswer: 2,
      explanation: `The total is everyone in the table, so add all four counts together. $14 + 6 = 20$, which is the number of boys. Then $11 + 9 = 20$, which is the number of girls. Now add those two group totals: $20 + 20 = 40$. There were $40$ students surveyed. The answer $25$ comes from adding only the two Yes counts, which leaves out everyone who said No.`
    },
    {
      id: 'ds-core-p1-q2',
      type: 'quiz' as const,
      question: `A table shows the responses of $50$ students. Of those students, $12$ are boys who said Yes. What fraction of all $50$ students are boys who said Yes?`,
      options: ['$\\frac{12}{50}$', '$\\frac{50}{12}$', '$\\frac{12}{100}$', '$\\frac{38}{50}$'],
      correctAnswer: 0,
      explanation: `Put the part you want on top and the whole group on the bottom. The part you want is the $12$ boys who said Yes. The question says "of all $50$ students," so the whole group is $50$. That gives $\\frac{12}{50}$. Writing $\\frac{50}{12}$ flips the fraction upside down, which would be more than $1$ and cannot be a fraction of a group.`
    },
    {
      id: 'ds-core-p1-q3',
      type: 'quiz' as const,
      question: `In a survey of $50$ students, $30$ students said Yes. What percent of the students said Yes?`,
      options: ['$30\\%$', '$40\\%$', '$50\\%$', '$60\\%$'],
      correctAnswer: 3,
      explanation: `A percent means "out of $100$," so start with the fraction $\\frac{30}{50}$ and make the bottom number $100$. Since $50 \\times 2 = 100$, multiply the top by $2$ as well: $30 \\times 2 = 60$. That gives $\\frac{60}{100}$, which is $60\\%$. You can check by dividing: $30 \\div 50 = 0.6$, and moving the decimal two places right gives $60\\%$. The answer $30\\%$ uses the raw count as if it were already a percent.`
    },
    {
      id: 'ds-core-p1-q4',
      type: 'quiz' as const,
      question: `In one row of a two-way table, $9$ seniors chose pizza and $6$ seniors chose tacos. There are no other choices in that row. What is the row total for seniors?`,
      options: ['$3$', '$15$', '$9$', '$54$'],
      correctAnswer: 1,
      explanation: `A row total is the sum of every cell across that row. The row has two cells, $9$ and $6$, so add them: $9 + 6 = 15$. There are $15$ seniors in that row. The answer $3$ comes from subtracting the two cells instead of adding them, but a total always means adding.`
    }
  ]
}
