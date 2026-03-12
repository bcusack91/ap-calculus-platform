export const satLinearEquationsPart3Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'le3-intro',
      type: 'text' as const,
      content: `# Linear Equations & Inequalities

**Part 3 of 7 — Linear Inequalities**

The SAT tests inequalities in both algebraic and graphical form.

### Solving Linear Inequalities

Same rules as equations EXCEPT: **flip the inequality sign when multiplying or dividing by a negative**.

**Example:**
$$-3x + 6 > 12$$
$$-3x > 6$$
$$x < -2 \\quad \\text{(flip!)}$$

### Compound Inequalities

$$-1 < 2x + 3 \\leq 9$$

Subtract 3 from all parts: $-4 < 2x \\leq 6$

Divide by 2: $-2 < x \\leq 3$

### Graphing Inequalities

- $y > mx + b$: shade **above** the line, **dashed** boundary
- $y \\leq mx + b$: shade **below** the line, **solid** boundary
- The solution to a system of inequalities is the **overlap** region

### SAT Pattern ⚠️

The SAT loves: "Which point is in the solution set of $y > 2x - 1$ and $y < -x + 5$?" Plug each answer choice into BOTH inequalities and check.`
    },
    {
      id: 'le3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Inequalities** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $-2x + 5 > 11$, which represents all solutions?',
            options: ['$x < -3$', '$x > -3$', '$x < 3$', '$x > 3$'],
            correctAnswer: 0,
            explanation: '$-2x > 6$ → $x < -3$ (flip the sign when dividing by $-2$). This is the most common SAT inequality trap.'
          },
          {
            question: 'Which point is in the solution set of $y > x + 1$ and $y < -x + 5$?',
            options: ['$(1, 3)$', '$(0, 0)$', '$(3, 1)$', '$(4, 4)$'],
            correctAnswer: 0,
            explanation: 'Check $(1, 3)$: Is $3 > 1 + 1 = 2$? Yes. Is $3 < -1 + 5 = 4$? Yes. Both satisfied. The other points fail at least one inequality.'
          },
          {
            question: 'If $-5 \\leq 3x + 1 < 10$, what is the range of $x$?',
            options: ['$-2 \\leq x < 3$', '$-2 < x \\leq 3$', '$-1 \\leq x < 3$', '$-2 \\leq x < 4$'],
            correctAnswer: 0,
            explanation: 'Subtract 1: $-6 \\leq 3x < 9$. Divide by 3: $-2 \\leq x < 3$. The inequality types (≤ vs <) are preserved when dividing by a positive number.'
          }
        ]
      }
    },
    {
      id: 'le3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Flip the inequality** when multiplying/dividing by a negative
- Compound inequalities: perform the same operation on all three parts
- Graphing: $>$ or $<$ = dashed line; $\\geq$ or $\\leq$ = solid line
- To check a point: plug into both inequalities — both must be true`
    }
  ]
};
