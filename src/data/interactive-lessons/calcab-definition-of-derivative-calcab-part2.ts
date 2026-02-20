export const calcabDerivativeDefPart2Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'derdef2-intro',
      type: 'text' as const,
      content: `
# ∫ Differentiability

**Part 2 of 7 — When Derivatives Exist (and When They Don't)**

### 1. Differentiability Requires Continuity

If $f$ is differentiable at $x = c$, then $f$ is **continuous** at $x = c$.

**Contrapositive:** If $f$ is NOT continuous at $c$, then $f$ is NOT differentiable at $c$.

⚠️ The converse is **false**: $f(x) = |x|$ is continuous at $x = 0$ but NOT differentiable there.

### 2. When Derivatives Fail to Exist

The derivative does not exist at:
- **Corners/cusps:** $f(x) = |x|$ at $x = 0$ (left slope $= -1$, right slope $= 1$)
- **Vertical tangent lines:** $f(x) = x^{1/3}$ at $x = 0$ (slope $\\to \\pm\\infty$)
- **Discontinuities:** Any type of discontinuity
- **Endpoints:** Only one-sided derivative exists

### 3. Checking Differentiability for Piecewise Functions

For $f(x) = \\begin{cases} x^2 & x \\leq 1 \\\\ 2x - 1 & x > 1 \\end{cases}$:

1. **Check continuity:** $\\lim_{x \\to 1^-} x^2 = 1 = \\lim_{x \\to 1^+} (2x-1) = 1$ ✓
2. **Check derivatives match:** Left: $f'(x) = 2x \\to 2(1) = 2$. Right: $f'(x) = 2$. ✓

Both derivatives equal 2, so $f$ IS differentiable at $x = 1$.

### 4. Local Linearity

A differentiable function "looks like a line" when you zoom in enough. This is the geometric meaning of differentiability — the graph has no sharp turns or breaks at the microscopic level.
      `
    },
    {
      id: 'derdef2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'At which point is $f(x) = |x - 3|$ NOT differentiable?',
            options: ['$x = 0$', '$x = 3$', '$x = -3$', '$f$ is differentiable everywhere'],
            correctAnswer: 1,
            explanation: '$|x-3|$ has a corner (sharp turn) at $x = 3$. The left-hand derivative is $-1$ and the right-hand derivative is $1$. Since they differ, the derivative does not exist at $x = 3$.'
          },
          {
            question: 'If $f$ is differentiable at $x = 5$, which MUST be true?',
            options: ['$f\'(5) > 0$', '$f$ is continuous at $x = 5$', '$f(5) = 0$', '$f$ is differentiable on all of $\\mathbb{R}$'],
            correctAnswer: 1,
            explanation: 'Differentiability implies continuity. If $f$ is differentiable at $x = 5$, then $f$ must be continuous at $x = 5$. The derivative could be zero, negative, or positive.'
          }
        ]
      }
    },
    {
      id: 'derdef2-detail',
      type: 'text' as const,
      content: `
### Quick Reference: Differentiability vs. Continuity

| Function | Continuous at $x=0$? | Differentiable at $x=0$? |
|----------|---------------------|-------------------------|
| $f(x) = x^2$ | Yes | Yes |
| $f(x) = \\|x\\|$ | Yes | **No** (corner) |
| $f(x) = x^{1/3}$ | Yes | **No** (vertical tangent) |
| $f(x) = 1/x$ | **No** | **No** |

**Memory aid:** Differentiable ⟹ Continuous, but Continuous ⟹ Differentiable is FALSE.
      `
    },
    {
      id: 'derdef2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'For $g(x) = \\begin{cases} x^2 + 1 & x \\leq 2 \\\\ 4x - 3 & x > 2 \\end{cases}$, is $g$ differentiable at $x = 2$?',
            options: [
              'Yes, because the derivatives from both sides are equal',
              'No, because $g$ is not continuous at $x = 2$',
              'No, because the derivatives from left and right differ',
              'Yes, because $g$ is a polynomial on each piece'
            ],
            correctAnswer: 0,
            explanation: 'Continuity: $g(2) = 5$ from left, $4(2)-3=5$ from right ✓. Derivatives: left piece gives $2x=4$, right piece gives $4$. Since both equal 4, $g$ is differentiable at $x=2$.'
          }
        ]
      }
    },
    {
      id: 'derdef2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Differentiability Check** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'Is $f(x)=|2x|$ differentiable at $x=0$?', options: ['Yes', 'No — corner', 'No — discontinuity', 'No — vertical tangent'] },
          { label: 'Is $f(x)=x^{2/3}$ differentiable at $x=0$?', options: ['Yes', 'No — corner', 'No — discontinuity', 'No — vertical tangent'] },
          { label: 'Is $f(x)=\\sin(x)$ differentiable at $x=\\pi$?', options: ['Yes', 'No — corner', 'No — discontinuity', 'No — vertical tangent'] }
        ],
        correctAnswers: ['No — corner', 'No — vertical tangent', 'Yes'],
        hint1: '$|2x|$ has a V-shape at $x=0$ just like $|x|$.',
        hint2: '$f\'(x) = \\frac{2}{3}x^{-1/3} = \\frac{2}{3\\sqrt[3]{x}}$. What happens at $x=0$?',
        hint3: '$\\sin(x)$ is smooth everywhere with no corners or vertical tangents.',
        explanation: '$|2x|$ has a corner at 0. $x^{2/3}$ has $f\'(x)=\\frac{2}{3}x^{-1/3}$ which $\\to \\pm\\infty$ at 0 (vertical tangent). $\\sin(x)$ is differentiable everywhere.'
      }
    }
  ]
}
