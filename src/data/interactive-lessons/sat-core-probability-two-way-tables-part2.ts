export const lessonData = {
  topicSlug: 'sat-probability-two-way-tables-core-skills',
  sections: [
    {
      id: 'prob-core-p2-recap',
      type: 'text' as const,
      content: `# Probability & Two-Way Tables: Practice

**Part 2 of 2 — Three Steps, Every Time**

1. **Decide what group the question is about.** If it says "a student is picked at random," the group is everyone. If it says "a junior is picked," the group is only the juniors. That group total goes on the **bottom**.
2. **Count how many in that group match what is being asked.** That count goes on the **top**.
3. **Write the fraction and reduce it if you can.** Divide the top and the bottom by the same number until you cannot go any further.

### Reducing, in one line

$\\frac{12}{30}$: both numbers divide by $6$, and $12 \\div 6 = 2$ while $30 \\div 6 = 5$, so $\\frac{12}{30} = \\frac{2}{5}$.

### The word "not"

For a "not" question, count everything that does **not** match, and put that count on top. In a bag of $10$ marbles where $3$ are red, "not red" is $10 - 3 = 7$ marbles, so $P = \\frac{7}{10}$.

### Working from a table

If the number you need is not printed in the table, add the cells to get it. A row added across gives that row's total. A column added down gives that column's total. The corner of the table is everyone.

Every probability answer is between $0$ and $1$. If your fraction comes out bigger than $1$, the top and bottom got swapped.`
    },
    {
      id: 'prob-core-p2-q1',
      type: 'quiz' as const,
      question: `A class has $25$ students, and $10$ of them take Spanish. If one student is picked at random from the class, what is the probability that the student takes Spanish?`,
      options: ['$\\frac{1}{5}$', '$\\frac{10}{15}$', '$\\frac{2}{5}$', '$\\frac{3}{5}$'],
      correctAnswer: 2,
      explanation: `The group is the whole class, so the $25$ students go on the bottom. The number who match is the $10$ students who take Spanish, so $10$ goes on top, giving $\\frac{10}{25}$. Both numbers divide by $5$: $10 \\div 5 = 2$ and $25 \\div 5 = 5$, so the probability is $\\frac{2}{5}$. The choice $\\frac{10}{15}$ compares Spanish students to the $15$ students who do not take Spanish, but the bottom should be the whole class.`
    },
    {
      id: 'prob-core-p2-q2',
      type: 'quiz' as const,
      question: `At a school, $30$ students play soccer. Of those $30$ students, $12$ also play tennis. If a soccer player is picked at random, what is the probability that the student also plays tennis?`,
      options: ['$\\frac{2}{5}$', '$\\frac{12}{18}$', '$\\frac{1}{3}$', '$\\frac{3}{5}$'],
      correctAnswer: 0,
      explanation: `The question says a soccer player is picked, so the group is the $30$ soccer players and $30$ goes on the bottom. Of those, $12$ also play tennis, so $12$ goes on top, giving $\\frac{12}{30}$. Both numbers divide by $6$: $12 \\div 6 = 2$ and $30 \\div 6 = 5$, so the probability is $\\frac{2}{5}$. The choice $\\frac{12}{18}$ uses the $18$ soccer players who do not play tennis as the bottom instead of the full group of $30$.`
    },
    {
      id: 'prob-core-p2-q3',
      type: 'quiz' as const,
      question: `In the morning session of a program, $8$ participants completed the program and $4$ did not. If a participant is picked at random from the morning session, what is the probability that the participant completed the program?`,
      options: ['$\\frac{1}{4}$', '$\\frac{1}{3}$', '$\\frac{2}{5}$', '$\\frac{2}{3}$'],
      correctAnswer: 3,
      explanation: `The group is the morning session, and that total is not printed, so add the two counts: $8 + 4 = 12$ participants. The number who match is the $8$ who completed the program, giving $\\frac{8}{12}$. Both numbers divide by $4$: $8 \\div 4 = 2$ and $12 \\div 4 = 3$, so the probability is $\\frac{2}{3}$. The choice $\\frac{1}{3}$ is the probability that a participant did NOT complete the program.`
    },
    {
      id: 'prob-core-p2-q4',
      type: 'quiz' as const,
      question: `A survey of $30$ students recorded these answers: $9$ boys said Yes, $6$ boys said No, $12$ girls said Yes, and $3$ girls said No. If one of the $30$ students is picked at random, what is the probability that the student said Yes?`,
      options: ['$\\frac{9}{30}$', '$\\frac{7}{10}$', '$\\frac{3}{10}$', '$\\frac{1}{2}$'],
      correctAnswer: 1,
      explanation: `The group is all $30$ students, so $30$ goes on the bottom. The number who said Yes is not printed as a single number, so add the two Yes counts: $9 + 12 = 21$ students said Yes. That gives $\\frac{21}{30}$. Both numbers divide by $3$: $21 \\div 3 = 7$ and $30 \\div 3 = 10$, so the probability is $\\frac{7}{10}$. The choice $\\frac{9}{30}$ counts only the boys who said Yes and leaves out the girls.`
    }
  ]
}
