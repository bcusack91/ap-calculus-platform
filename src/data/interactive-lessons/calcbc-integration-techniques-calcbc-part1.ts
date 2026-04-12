export const calcbcIntTechPart1Data = {
  topicSlug: 'integration-techniques-calcbc',
  sections: [
    {
      id: 'integrationtechniques-p1-intro',
      type: 'text' as const,
      content: `# 🧩 Advanced Integration Techniques

**Part 1 of 7 — Trigonometric Integrals**

---

### Powers of Sine and Cosine

$$\\\\int \\\\sin^m x \\\\cos^n x \\\\, dx$$

| Case | Strategy |
|------|----------|
| $m$ odd | Save one $\\\\sin x$, convert rest to $\\\\cos x$ using $\\\\sin^2 x = 1 - \\\\cos^2 x$ |
| $n$ odd | Save one $\\\\cos x$, convert rest to $\\\\sin x$ using $\\\\cos^2 x = 1 - \\\\sin^2 x$ |
| Both even | Use half-angle: $\\\\sin^2 x = \\\\frac{1 - \\\\cos 2x}{2}$, $\\\\cos^2 x = \\\\frac{1 + \\\\cos 2x}{2}$ |

---

### Example

$$\\\\int \\\\sin^3 x \\\\cos^2 x \\\\, dx$$

$m = 3$ (odd), so save one $\\\\sin x$:
$$= \\\\int (1 - \\\\cos^2 x) \\\\cos^2 x \\\\sin x \\\\, dx$$

Let $u = \\\\cos x$, $du = -\\\\sin x \\\\, dx$:
$$= -\\\\int (1 - u^2)u^2 \\\\, du = -\\\\int (u^2 - u^4) du = -\\\\frac{u^3}{3} + \\\\frac{u^5}{5} + C$$`
    },
    {
      id: 'integrationtechniques-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes trigonometric integrals?',
            options: ['A core AP Calculus BC concept', 'Not on the AP exam', 'Only relevant for multivariable calculus', 'A statistics topic'],
            correctAnswer: 0,
            explanation: 'Trigonometric Integrals is a key topic tested on the AP Calculus BC exam.'
          }
        ]
      }
    }
  ]
};
