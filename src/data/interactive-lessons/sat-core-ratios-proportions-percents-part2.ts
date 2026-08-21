export const lessonData = {
  topicSlug: 'sat-ratios-proportions-percents-core-skills',
  sections: [
    {
      id: 'rpp-core-p2-recap',
      type: 'text' as const,
      content: `# Percents: Practice

**Part 2 of 2 — Practice**

**Percent** means "out of one hundred." So $25\\%$ means $25$ out of $100$, which is the same as the decimal $0.25$.

### The steps for "what is X percent of Y"

1. Turn the percent into a decimal by moving the decimal point two places to the left. $25\\%$ becomes $0.25$. $60\\%$ becomes $0.60$. $8\\%$ becomes $0.08$.
2. The word **of** means multiply.
3. Multiply the decimal by the number.

**Worked example.** What is $20\\%$ of $60$?

$20\\%$ becomes $0.20$. Then $0.20 \\times 60 = 12$. So $20\\%$ of $60$ is $12$.

### Two shortcuts worth memorizing

- $50\\%$ of a number is **half** of it. Divide by $2$.
- $10\\%$ of a number moves the decimal point one place left. $10\\%$ of $70$ is $7$.

### Discounts take one extra step

A discount tells you how much comes **off**. The price you pay is what is **left**.

1. Find the amount of the discount.
2. Subtract that amount from the original price.

**Worked example.** A jacket costs $\\$50$ and is $10\\%$ off. First, $10\\%$ of $50$ is $5$. Then subtract: $50 - 5 = 45$. The sale price is $\\$45$.`
    },
    {
      id: 'rpp-core-p2-q1',
      type: 'quiz' as const,
      question: 'What is $50\\%$ of $84$?',
      options: ['$34$', '$84$', '$168$', '$42$'],
      correctAnswer: 3,
      explanation: 'The answer is $42$. Fifty percent means half, so divide the number by $2$: $84 \\div 2 = 42$. You can also do it with a decimal: $0.50 \\times 84 = 42$. Both methods give the same result. The choice $168$ comes from doubling instead of halving.'
    },
    {
      id: 'rpp-core-p2-q2',
      type: 'quiz' as const,
      question: 'What is $25\\%$ of $40$?',
      options: ['$4$', '$10$', '$15$', '$20$'],
      correctAnswer: 1,
      explanation: 'The answer is $10$. Turn $25\\%$ into the decimal $0.25$, then multiply: $0.25 \\times 40 = 10$. Another way to see it is that $25\\%$ is one quarter, and $40 \\div 4 = 10$. The choice $20$ is $50\\%$ of $40$, which is twice as much as the question asked for.'
    },
    {
      id: 'rpp-core-p2-q3',
      type: 'quiz' as const,
      question: 'A shirt costs $\\$40$. It is on sale for $10\\%$ off. What is the sale price?',
      options: ['$\\$4$', '$\\$30$', '$\\$36$', '$\\$44$'],
      correctAnswer: 2,
      explanation: 'The answer is $\\$36$. First find the discount: $10\\%$ of $40$ means moving the decimal one place left, which gives $4$. So $\\$4$ comes off. Then subtract that from the original price: $40 - 4 = 36$. The sale price is $\\$36$. The choice $\\$4$ is the amount of the discount, not the price you pay.'
    },
    {
      id: 'rpp-core-p2-q4',
      type: 'quiz' as const,
      question: 'Eight notebooks cost $\\$24$ in total. What is the price of one notebook?',
      options: ['$\\$3$', '$\\$4$', '$\\$8$', '$\\$16$'],
      correctAnswer: 0,
      explanation: 'The answer is $\\$3$. The price of one item is called the unit price, and you find it by dividing the total cost by the number of items: $24 \\div 8 = 3$. So one notebook costs $\\$3$. Check it: $8 \\times 3 = 24$, which matches the total. The choice $\\$16$ comes from subtracting $8$ from $24$ instead of dividing.'
    }
  ]
}
