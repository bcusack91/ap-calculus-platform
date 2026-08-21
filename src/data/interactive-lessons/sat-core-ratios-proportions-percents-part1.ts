export const lessonData = {
  topicSlug: 'sat-ratios-proportions-percents-core-skills',
  sections: [
    {
      id: 'rpp-core-p1-intro',
      type: 'text' as const,
      content: `# Ratios and Proportions: The Basics

**Part 1 of 2 — The Basics**

A **ratio** compares two amounts. If a bag has $6$ red marbles and $9$ blue marbles, the ratio of red to blue is $6 : 9$.

You simplify a ratio the same way you simplify a fraction: divide both numbers by the same value. Both $6$ and $9$ divide by $3$, so $6 : 9$ becomes $2 : 3$.

A **proportion** says two ratios are equal, like $\\frac{2}{4} = \\frac{6}{12}$.

### Solving a proportion by scaling

When one side of a proportion is a whole-number multiple of the other, you can scale straight across.

**Worked example.** A recipe uses $3$ cups of flour for $6$ servings. How many cups are needed for $18$ servings?

**Step 1.** Write the proportion. Keep cups on top and servings on the bottom on both sides:

$\\frac{3}{6} = \\frac{x}{18}$

**Step 2.** Ask how the bottoms are related. From $6$ to $18$, you multiply by $3$, because $6 \\times 3 = 18$.

**Step 3.** Do the same thing to the top. $3 \\times 3 = 9$.

So $x = 9$. The recipe needs $9$ cups of flour.

**Step 4 (the check).** Does $\\frac{3}{6}$ equal $\\frac{9}{18}$? Both reduce to $\\frac{1}{2}$, so yes.

### The one thing to be careful about

Whatever is on top on the left side must be on top on the right side too. If you put cups over servings on one side, do the same on the other side. Flipping one side is the most common mistake on these questions.`
    },
    {
      id: 'rpp-core-p1-q1',
      type: 'quiz' as const,
      question: 'A recipe uses $2$ cups of rice for $4$ servings. How many cups of rice are needed for $12$ servings?',
      options: ['$3$', '$10$', '$6$', '$24$'],
      correctAnswer: 2,
      explanation: 'The answer is $6$ cups. Write the proportion $\\frac{2}{4} = \\frac{x}{12}$, with cups on top and servings on the bottom. From $4$ servings to $12$ servings you multiply by $3$, because $4 \\times 3 = 12$. Do the same to the top: $2 \\times 3 = 6$. So $6$ cups are needed. The choice $10$ comes from adding $8$ to both parts instead of multiplying.'
    },
    {
      id: 'rpp-core-p1-q2',
      type: 'quiz' as const,
      question: 'Simplify the ratio $6 : 9$.',
      options: ['$2 : 3$', '$3 : 2$', '$6 : 9$', '$1 : 3$'],
      correctAnswer: 0,
      explanation: 'The answer is $2 : 3$. Look for a number that divides into both parts. Both $6$ and $9$ divide by $3$. Doing the division gives $6 \\div 3 = 2$ and $9 \\div 3 = 3$, so the simplified ratio is $2 : 3$. The choice $3 : 2$ has the numbers backwards, and order matters in a ratio.'
    },
    {
      id: 'rpp-core-p1-q3',
      type: 'quiz' as const,
      question: 'On a map, $1$ inch represents $4$ miles. Two towns are $7$ inches apart on the map. What is the actual distance between them?',
      options: ['$11$ miles', '$4$ miles', '$1.75$ miles', '$28$ miles'],
      correctAnswer: 3,
      explanation: 'The answer is $28$ miles. Each single inch stands for $4$ miles, so $7$ inches stands for $7$ groups of $4$ miles. Multiply: $7 \\times 4 = 28$. The actual distance is $28$ miles. The choice $11$ comes from adding $7 + 4$, but each inch is worth $4$ miles, so you multiply.'
    },
    {
      id: 'rpp-core-p1-q4',
      type: 'quiz' as const,
      question: 'A class has $12$ boys and $6$ girls. What is the ratio of boys to girls in simplest form?',
      options: ['$1 : 2$', '$2 : 1$', '$12 : 6$', '$6 : 12$'],
      correctAnswer: 1,
      explanation: 'The answer is $2 : 1$. Boys come first because the question asks for boys to girls, so start with $12 : 6$. Both numbers divide by $6$, giving $12 \\div 6 = 2$ and $6 \\div 6 = 1$. The simplified ratio is $2 : 1$. The choice $1 : 2$ is the same numbers in the wrong order, which would be girls to boys.'
    }
  ]
}
