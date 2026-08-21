export const lessonData = {
  topicSlug: 'sat-probability-two-way-tables-core-skills',
  sections: [
    {
      id: 'prob-core-p1-intro',
      type: 'text' as const,
      content: `# Probability & Two-Way Tables: The Basics

**Part 1 of 2 — Wanted Over Total**

**Probability** is a number that says how likely something is. You write it as a fraction, and the fraction is always built the same way:

$P = \\frac{\\text{number of outcomes you want}}{\\text{total number of outcomes}}$

The top is what you are hoping for. The bottom is everything that could happen. Nothing else changes.

### Worked example: a bag of marbles

A bag holds $3$ red marbles, $5$ blue marbles, and $2$ green marbles. One marble is drawn at random. What is the probability it is red?

**Step 1 — Find the total.** Add every marble: $3 + 5 = 8$, then $8 + 2 = 10$. There are $10$ marbles in all.

**Step 2 — Find how many you want.** There are $3$ red marbles.

**Step 3 — Write the fraction.** $P(\\text{red}) = \\frac{3}{10}$.

### The word "not"

If a question asks for the probability of **not** red, count everything that is not red. That is the $5$ blue plus the $2$ green, which is $5 + 2 = 7$ marbles. So $P(\\text{not red}) = \\frac{7}{10}$.

### When the question hands you a smaller group

Sometimes a question narrows the group down before it asks. Here is a two-way table of $40$ students:

| | Yes | No | Total |
|---|---|---|---|
| Juniors | 15 | 5 | 20 |
| Seniors | 9 | 11 | 20 |
| **Total** | 24 | 16 | **40** |

*A junior is picked at random. What is the probability that this student said Yes?*

The words "a junior is picked" tell you the group is only the juniors. So the bottom of the fraction is $20$, not $40$. The top is the $15$ juniors who said Yes.

$P = \\frac{15}{20}$

Both numbers divide by $5$: $15 \\div 5 = 3$ and $20 \\div 5 = 4$, so the answer is $\\frac{3}{4}$.

Read the first few words of the question carefully. They tell you what goes on the bottom.`
    },
    {
      id: 'prob-core-p1-q1',
      type: 'quiz' as const,
      question: `A bag holds $4$ red marbles and $6$ blue marbles. One marble is drawn at random. What is the probability that it is red?`,
      options: ['$\\frac{2}{5}$', '$\\frac{4}{6}$', '$\\frac{3}{5}$', '$\\frac{1}{4}$'],
      correctAnswer: 0,
      explanation: `First find the total number of marbles: $4 + 6 = 10$. The number you want is the $4$ red marbles, so the probability is $\\frac{4}{10}$. Both numbers divide by $2$: $4 \\div 2 = 2$ and $10 \\div 2 = 5$, which gives $\\frac{2}{5}$. The choice $\\frac{4}{6}$ compares red marbles to blue marbles, but the bottom of a probability is always the total of everything.`
    },
    {
      id: 'prob-core-p1-q2',
      type: 'quiz' as const,
      question: `A spinner is divided into $8$ equal sections. Three of the sections are green. What is the probability that the spinner lands on green?`,
      options: ['$\\frac{3}{5}$', '$\\frac{5}{8}$', '$\\frac{3}{8}$', '$\\frac{1}{3}$'],
      correctAnswer: 2,
      explanation: `The total number of outcomes is the $8$ equal sections, so $8$ goes on the bottom. The number you want is the $3$ green sections, so $3$ goes on the top. The probability is $\\frac{3}{8}$, and it does not reduce any further because $3$ and $8$ share no common factor. The choice $\\frac{5}{8}$ is the probability of landing on a section that is not green.`
    },
    {
      id: 'prob-core-p1-q3',
      type: 'quiz' as const,
      question: `A bag holds $5$ red marbles and $7$ blue marbles, and nothing else. One marble is drawn at random. What is the probability that it is NOT red?`,
      options: ['$\\frac{5}{12}$', '$\\frac{5}{7}$', '$\\frac{1}{2}$', '$\\frac{7}{12}$'],
      correctAnswer: 3,
      explanation: `Start with the total: $5 + 7 = 12$ marbles. "Not red" means every marble that is not red, and since the bag holds only red and blue, that is the $7$ blue marbles. So the probability is $\\frac{7}{12}$. The choice $\\frac{5}{12}$ is the probability that the marble IS red, which is the opposite of what the question asks.`
    },
    {
      id: 'prob-core-p1-q4',
      type: 'quiz' as const,
      question: `A fair six-sided die is rolled once. What is the probability that the number rolled is greater than $4$?`,
      options: ['$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{2}{3}$', '$\\frac{1}{2}$'],
      correctAnswer: 1,
      explanation: `A six-sided die has $6$ possible results, so $6$ goes on the bottom. The results greater than $4$ are $5$ and $6$, which is $2$ results, so $2$ goes on the top. That gives $\\frac{2}{6}$. Both numbers divide by $2$: $2 \\div 2 = 1$ and $6 \\div 2 = 3$, so the answer is $\\frac{1}{3}$. The choice $\\frac{1}{6}$ counts only one winning result instead of two.`
    }
  ]
}
