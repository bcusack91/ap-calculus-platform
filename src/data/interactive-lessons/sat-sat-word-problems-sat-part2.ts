export const satWordProblemsPart2Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'wp2-intro',
      type: 'text' as const,
      content: `# Age Problems & Number Problems

**Part 2 of 7 — Classic SAT Word Problem Types**

### Age Problems Strategy
1. Define variables for **current** ages
2. Write expressions for past/future ages
3. Set up an equation from the given relationship

**Example:** "Maria is 3 times as old as her son. In 12 years, she will be twice as old as him."
- Let son's current age = $s$, Maria's current age = $3s$
- In 12 years: son = $s + 12$, Maria = $3s + 12$
- Equation: $3s + 12 = 2(s + 12)$
- Solve: $3s + 12 = 2s + 24 \implies s = 12$
- Son is 12, Maria is 36. Check: In 12 years → 24 and 48. 48 = 2(24) ✓

### Number Problems
**Consecutive integers:** $n, n+1, n+2$
**Consecutive even/odd:** $n, n+2, n+4$

**Example:** "The sum of 3 consecutive integers is 72."
$n + (n+1) + (n+2) = 72 \implies 3n + 3 = 72 \implies n = 23$
The integers are 23, 24, 25.

### Digit Problems
A two-digit number with tens digit $t$ and units digit $u$ has value $10t + u$.
"Reversing the digits" gives $10u + t$.`
    },
    {
      id: 'wp2-q1',
      type: 'quiz' as const,
      question: 'A father is 4 times as old as his daughter. In 20 years, he will be twice her age. How old is the daughter now?',
      options: [
        '5',
        '8',
        '10',
        '12'
      ],
      correctAnswer: 2,
      explanation: 'Let daughter = d, father = 4d. In 20 years: 4d + 20 = 2(d + 20). Simplify: 4d + 20 = 2d + 40 → 2d = 20 → d = 10. Check: Father is 40. In 20 years: 30 and 60. 60 = 2(30) ✓'
    }
  ]
};
