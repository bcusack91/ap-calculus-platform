export const calcbcLHopPart1Data = {
  topicSlug: 'lhopitals-advanced-calcbc',
  sections: [
    {
      id: 'lhopitalsadvanced-p1-intro',
      type: 'text' as const,
      content: `# 🔍 L’Hôpital’s Rule — Advanced

**Part 1 of 7 — L’Hôpital’s Rule Review**

---

### L’Hôpital’s Rule

If $\\\\lim_{x \\\\to c} \\\\frac{f(x)}{g(x)}$ gives $\\\\frac{0}{0}$ or $\\\\frac{\\\\pm\\\\infty}{\\\\pm\\\\infty}$, then:

$$\\\\lim_{x \\\\to c} \\\\frac{f(x)}{g(x)} = \\\\lim_{x \\\\to c} \\\\frac{f'(x)}{g'(x)}$$

(provided the right-hand limit exists or is $\\\\pm\\\\infty$)

---

### The Seven Indeterminate Forms

$$\\\\frac{0}{0}, \\\\quad \\\\frac{\\\\infty}{\\\\infty}, \\\\quad 0 \\\\cdot \\\\infty, \\\\quad \\\\infty - \\\\infty, \\\\quad 0^0, \\\\quad 1^\\\\infty, \\\\quad \\\\infty^0$$

L’Hôpital’s directly handles only $0/0$ and $\\\\infty/\\\\infty$. The others must be converted first.

### Common Conversion: $0 \\\\cdot \\\\infty$

Rewrite $f \\\\cdot g$ as $\\\\frac{f}{1/g}$ or $\\\\frac{g}{1/f}$ to get $0/0$ or $\\\\infty/\\\\infty$.

### Common Conversion: $1^\\\\infty$, $0^0$, $\\\\infty^0$

Take the natural log: $\\\\ln y = g(x) \\\\ln f(x)$, evaluate the limit, then exponentiate.`
    },
    {
      id: 'lhopitalsadvanced-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes l’hôpital’s rule review?',
            options: ['A core AP Calculus BC concept', 'Not on the AP exam', 'Only relevant for multivariable calculus', 'A statistics topic'],
            correctAnswer: 0,
            explanation: 'L’Hôpital’s Rule Review is a key topic tested on the AP Calculus BC exam.'
          }
        ]
      }
    }
  ]
};
