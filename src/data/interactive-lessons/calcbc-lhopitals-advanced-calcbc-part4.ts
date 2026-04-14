export const calcbcLHopPart4Data = {
  topicSlug: 'lhopitals-advanced-calcbc',
  sections: [
    {
      id: 'lh4-intro',
      type: 'text' as const,
      content: `# Common Pitfalls and Misuse

**Part 4 of 7 — When L'Hôpital Fails or Is Misapplied**

### Pitfall 1: Applying When NOT Indeterminate

$$\\lim_{x \\to 0} \\frac{\\sin x}{x + 1} = \\frac{0}{1} = 0 \\quad \\text{(NOT indeterminate!)}$$

If you mistakenly apply L'Hôpital: $\\lim \\cos x / 1 = 1$ — **WRONG!**

$$\\boxed{\\text{Always verify the form is } 0/0 \\text{ or } \\infty/\\infty \\text{ FIRST}}$$

### Pitfall 2: Using the Quotient Rule

L'Hôpital says: differentiate SEPARATELY.

$$\\frac{d}{dx}[f/g] \\neq \\frac{f'}{g'} \\quad \\text{(quotient rule gives } \\frac{f'g - fg'}{g^2}\\text{)}$$

**L'Hôpital:** $\\lim f/g = \\lim f'/g'$ (NOT the quotient rule!)

### Pitfall 3: Circular Reasoning

To find $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ using L'Hôpital, you need $\\frac{d}{dx}[\\sin x] = \\cos x$.

But the derivative of $\\sin x$ is DEFINED using $\\lim_{h \\to 0} \\frac{\\sin h}{h}$ — the very limit you're computing!

> **Key Fact:** L'Hôpital gives the correct answer here, but technically it's circular. On the AP exam, this is acceptable.`
    },
    {
      id: 'lh4-more',
      type: 'text' as const,
      content: `### Pitfall 4: L'Hôpital Loops

$$\\lim_{x \\to \\infty} \\frac{e^x + e^{-x}}{e^x - e^{-x}}$$

L'H: $\\lim \\frac{e^x - e^{-x}}{e^x + e^{-x}}$ — this is the reciprocal! Applying again returns to the original.

**Solution:** Divide numerator and denominator by $e^x$:
$$\\lim \\frac{1 + e^{-2x}}{1 - e^{-2x}} = \\frac{1 + 0}{1 - 0} = 1$$

### Pitfall 5: Ignoring Simpler Methods

| Limit | Don't use L'Hôpital | Instead... |
|-------|---------------------|-----------|
| $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$ | L'H works but... | Factor: $(x+3)(x-3)/(x-3) = x + 3 \\to 6$ |
| $\\lim_{x \\to \\infty} \\frac{3x^2}{5x^2 + 1}$ | Multiple applications | Divide by $x^2$: $3/(5 + 1/x^2) \\to 3/5$ |
| $\\lim_{x \\to 0} \\frac{\\sin(5x)}{\\sin(3x)}$ | Works, but... | $= \\frac{5x}{3x} \\cdot \\frac{\\sin(5x)/(5x)}{\\sin(3x)/(3x)} \\to 5/3$ |

### Summary of Non-Indeterminate Forms

| Form | Indeterminate? | Result |
|------|---------------|--------|
| $0/0$ | Yes | L'Hôpital applies |
| $\\infty/\\infty$ | Yes | L'Hôpital applies |
| $0/\\infty$ | **No** | $= 0$ |
| $\\infty/0$ | **No** | $= \\pm\\infty$ |
| $0^\\infty$ | **No** | $= 0$ |
| $\\infty^\\infty$ | **No** | $= \\infty$ |`
    },
    {
      id: 'lh4-mc1',
      type: 'multiple-choice' as const,
      content: '**Identify the Error**',
      exercise: {
        questions: [
          {
            question: 'A student writes: $\\lim_{x \\to 0} \\frac{x}{e^x} = \\lim \\frac{1}{e^x} = 1$. What\'s wrong?',
            options: ['The original limit is $0/1 = 0$, not indeterminate — L\'Hôpital doesn\'t apply', 'The derivative of $e^x$ is wrong', 'Should use the quotient rule', 'Nothing — the answer is 1'],
            correctAnswer: 0,
            explanation: '$x/e^x \\to 0/1 = 0$ as $x \\to 0$. Not $0/0$ or $\\infty/\\infty$. L\'Hôpital is invalid here.'
          },
          {
            question: '$\\lim_{x \\to \\infty} \\frac{x + \\sin x}{x}$. A student applies L\'Hôpital: $\\lim \\frac{1 + \\cos x}{1}$. Is this valid?',
            options: ['The limit $\\lim (1 + \\cos x)$ does not exist, so L\'Hôpital is inconclusive', 'Yes, the answer is 2', 'No, the original is not indeterminate', 'Yes, the answer oscillates'],
            correctAnswer: 0,
            explanation: 'L\'H requires the right-side limit to exist. Since $\\cos x$ oscillates, L\'H is inconclusive. Use algebra: $\\lim (1 + \\sin x/x) = 1 + 0 = 1$.'
          }
        ]
      }
    },
    {
      id: 'lh4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Can L\'Hôpital Be Applied?**',
      exercise: {
        dropdowns: [
          {
            label: '$\\lim_{x \\to \\infty} \\frac{x^2}{x^2 + 1}$:',
            options: ['Yes ($\\infty/\\infty$), but dividing by $x^2$ is faster → $1$', 'No (not indeterminate)', 'Yes, and it gives $0$', 'Cannot determine'],
            correctAnswers: ['Yes ($\\infty/\\infty$), but dividing by $x^2$ is faster → $1$'],
            hints: ['$\\infty/\\infty$ form, so L\'H is valid. But algebra is simpler.'],
            explanation: 'L\'H: $\\lim 2x/(2x) = 1$. Algebra: $\\lim 1/(1+1/x^2) = 1$. Both give 1.'
          },
          {
            label: '$\\lim_{x \\to 0} \\frac{e^x}{x}$:',
            options: ['No ($1/0$ — not indeterminate, limit is $\\pm\\infty$)', 'Yes ($0/0$ form)', 'Yes ($\\infty/\\infty$ form)', 'Yes (always applies)'],
            correctAnswers: ['No ($1/0$ — not indeterminate, limit is $\\pm\\infty$)'],
            hints: ['Numerator $\\to 1$, denominator $\\to 0$. Not $0/0$ or $\\infty/\\infty$.'],
            explanation: '$e^0/0 = 1/0$. Not indeterminate. Limit is $+\\infty$ from right, $-\\infty$ from left.'
          }
        ]
      }
    },
    {
      id: 'lh4-input',
      type: 'input-box' as const,
      content: '**Correct Method**',
      exercise: {
        question: '$\\lim_{x \\to \\infty} \\frac{e^x + e^{-x}}{e^x - e^{-x}}$ (dividing by $e^x$). Enter the answer.',
        correctAnswer: '1',
        acceptableAnswers: ['1', '1.0'],
        hints: ['Divide top and bottom by $e^x$: $\\frac{1 + e^{-2x}}{1 - e^{-2x}} \\to \\frac{1+0}{1-0}$.'],
        explanation: '$\\frac{1 + e^{-2x}}{1 - e^{-2x}} \\to 1/1 = 1$.'
      }
    },
    {
      id: 'lh4-summary',
      type: 'text' as const,
      content: `### Summary

- ALWAYS verify indeterminate form before applying L'Hôpital
- Don't confuse L'Hôpital with the quotient rule
- Watch for loops — try algebraic manipulation instead
- Simpler methods (factoring, dividing) are often faster
- L'Hôpital requires the resulting limit to exist

> **Next:** Part 5 — AP Exam Strategies.`
    }
  ]
};
