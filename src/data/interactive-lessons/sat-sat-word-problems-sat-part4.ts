export const satWordProblemsPart4Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'wp4-intro',
      type: 'text' as const,
      content: `# Mixture & Cost Problems

**Part 4 of 7 — Combining Values Strategically**

### Mixture Framework
$$\text{amount₁ × concentration₁} + \text{amount₂ × concentration₂} = \text{total amount × final concentration}$$

**Example:** How many liters of 30% acid should be mixed with 10 L of 60% acid to get a 50% solution?
- Let $x$ = liters of 30% acid
- $0.30x + 0.60(10) = 0.50(x + 10)$
- $0.30x + 6 = 0.50x + 5$
- $1 = 0.20x$
- $x = 5$ liters

### Cost/Revenue Problems
**Revenue** = price × quantity
**Profit** = revenue − cost

**Example:** Adult tickets cost \$12, child tickets cost \$8. 200 tickets sold for \$2,000 total.
- Let $a$ = adult tickets: $a + c = 200$ and $12a + 8c = 2000$
- From first equation: $c = 200 - a$
- $12a + 8(200 - a) = 2000$
- $12a + 1600 - 8a = 2000$
- $4a = 400 → a = 100$ adults, $c = 100$ children

### Weighted Average
$$\text{Weighted avg} = \frac{\sum (\text{value × weight})}{\sum \text{weights}}$$`
    },
    {
      id: 'wp4-q1',
      type: 'quiz' as const,
      question: 'A store sells pens for $2 and notebooks for $5. If 50 items are sold for $175 total, how many pens were sold?',
      options: [
        '15',
        '25',
        '30',
        '35'
      ],
      correctAnswer: 1,
      explanation: 'Let p = pens, n = notebooks. p + n = 50 and 2p + 5n = 175. From first: n = 50 − p. Substitute: 2p + 5(50 − p) = 175 → 2p + 250 − 5p = 175 → −3p = −75 → p = 25.'
    }
  ]
};
