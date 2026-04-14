export const calcabDerivativeDefPart2Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'derdef2-intro',
      type: 'text' as const,
      content: `# ∫ Differentiability

**Part 2 of 7 — When Derivatives Exist (and When They Don't)**

---

### Topics in This Part

| Section |
|---------|
| 📖 Differentiability Implies Continuity |
| Four Ways Derivatives Fail to Exist |
| 📌 Piecewise Differentiability Check |
| Local Linearity |

> 🔑 **Key Concept:** Differentiability is STRONGER than continuity. Every differentiable function is continuous, but not every continuous function is differentiable.`
    },
    {
      id: 'derdef2-theorem',
      type: 'text' as const,
      content: `
## 📖 Differentiability ⟹ Continuity

$$\\boxed{f \\text{ differentiable at } c \\implies f \\text{ continuous at } c}$$

**Contrapositive:** If $f$ is NOT continuous at $c$, then $f$ is NOT differentiable at $c$.

**Warning:** The converse is **FALSE**!
- $f(x) = |x|$ is continuous at $x = 0$ but NOT differentiable.

---

### The Hierarchy

$$\\text{Differentiable} \\implies \\text{Continuous} \\implies \\text{Limit Exists}$$

None of these arrows reverse! Each arrow is a one-way implication.

> **AP Tip:** "Differentiable ⟹ Continuous" appears on nearly every AP exam. Know it cold, and remember the converse is false.`
    },
    {
      id: 'derdef2-failures',
      type: 'text' as const,
      content: `
## Four Ways Derivatives Fail to Exist

| Type | What Happens | Example | At |
|------|-------------|---------|-----|
| **Corner** | Left and right slopes differ | $f(x) = |x|$ | $x = 0$ |
| **Cusp** | Slopes → $\\pm\\infty$ from opposite sides | $f(x) = x^{2/3}$ | $x = 0$ |
| **Vertical tangent** | Slope → $\\pm\\infty$ from same side | $f(x) = x^{1/3}$ | $x = 0$ |
| **Discontinuity** | Function jumps or is undefined | $f(x) = \\lfloor x \\rfloor$ | $x = n$ |

---

### Corner: $f(x) = |x|$ at $x = 0$

$$f'(0^-) = \\lim_{h \\to 0^-} \\frac{|0+h|-|0|}{h} = \\lim_{h \\to 0^-} \\frac{-h}{h} = -1$$

$$f'(0^+) = \\lim_{h \\to 0^+} \\frac{|0+h|-|0|}{h} = \\lim_{h \\to 0^+} \\frac{h}{h} = 1$$

Since $-1 \\neq 1$, $f'(0)$ does not exist.

> 🔑 **Key Fact:** At a corner, the function is continuous but the left and right derivatives are different finite numbers.`
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
            explanation: '$|x-3|$ has a corner at $x = 3$. Left derivative: $-1$. Right derivative: $+1$. Since they differ, $f\'(3)$ DNE.'
          },
          {
            question: 'If $f$ is differentiable at $x = 5$, which MUST be true?',
            options: ['$f\'(5) > 0$', '$f$ is continuous at $x = 5$', '$f(5) = 0$', '$f$ has no corners anywhere'],
            correctAnswer: 1,
            explanation: 'Differentiability implies continuity. The derivative could be zero, negative, or positive — we only know the function is continuous at that point.'
          },
          {
            question: 'Which function is continuous at $x = 0$ but NOT differentiable there?',
            options: ['$f(x) = x^2$', '$f(x) = \\sin x$', '$f(x) = |x|$', '$f(x) = e^x$'],
            correctAnswer: 2,
            explanation: '$|x|$ has a corner (V-shape) at $x = 0$. The left slope is $-1$ and the right slope is $+1$. It is continuous but not differentiable.'
          }
        ]
      }
    },
    {
      id: 'derdef2-piecewise',
      type: 'text' as const,
      content: `
## 📌 Checking Differentiability for Piecewise Functions

### Two-Step Process

**Step 1: Check continuity** (necessary condition)
- Evaluate left and right limits at the breakpoint

**Step 2: Check that derivatives match** (sufficient condition)
- Compute derivatives of each piece and evaluate at the breakpoint

---

### Example: $f(x) = \\begin{cases} x^2 & x \\leq 1 \\\\ 2x - 1 & x > 1 \\end{cases}$

| Check | Left Piece | Right Piece | Match? |
|-------|-----------|-------------|--------|
| Continuity | $\\lim_{x \\to 1^-} x^2 = 1$ | $\\lim_{x \\to 1^+} (2x-1) = 1$ | ✓ |
| Derivative | $f'(x) = 2x \\to 2$ | $f'(x) = 2 \\to 2$ | ✓ |

Both pass → $f$ IS differentiable at $x = 1$.

---

### Example: $g(x) = \\begin{cases} x^2 & x \\leq 1 \\\\ 3x - 2 & x > 1 \\end{cases}$

| Check | Left Piece | Right Piece | Match? |
|-------|-----------|-------------|--------|
| Continuity | $\\lim = 1$ | $\\lim = 1$ | ✓ |
| Derivative | $2x \\to 2$ | $3$ | ✗ |

Continuous but not differentiable at $x = 1$ (corner).

> **AP Tip:** For piecewise functions, ALWAYS check continuity FIRST. If it fails, stop — the function is not differentiable.`
    },
    {
      id: 'derdef2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Piecewise Differentiability** 🎯`,
      exercise: {
        questions: [
          {
            question: 'For $g(x) = \\begin{cases} x^2 + 1 & x \\leq 2 \\\\ 4x - 3 & x > 2 \\end{cases}$, is $g$ differentiable at $x = 2$?',
            options: [
              'Yes — continuity and derivatives both match',
              'No — $g$ is not continuous at $x = 2$',
              'No — the derivatives from left and right differ',
              'Cannot be determined'
            ],
            correctAnswer: 0,
            explanation: 'Continuity: $g(2) = 5$ from left, $4(2)-3=5$ from right ✓. Derivatives: $2x=4$ from left, $4$ from right ✓. Both match, so differentiable.'
          },
          {
            question: 'For $h(x) = \\begin{cases} x^3 & x \\leq 0 \\\\ x^2 & x > 0 \\end{cases}$, is $h$ differentiable at $x = 0$?',
            options: [
              'Yes — both derivatives equal 0',
              'No — not continuous',
              'No — derivatives differ',
              'No — cusp'
            ],
            correctAnswer: 0,
            explanation: 'Continuity: $0^3 = 0 = 0^2$ ✓. Left derivative: $3x^2 \\to 0$. Right derivative: $2x \\to 0$. Both equal 0, so differentiable at $x = 0$.'
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
          { label: 'Is $f(x)=x^{2/3}$ differentiable at $x=0$?', options: ['Yes', 'No — corner', 'No — cusp', 'No — vertical tangent'] },
          { label: 'Is $f(x)=\\sin(x)$ differentiable at $x=\\pi$?', options: ['Yes', 'No — corner', 'No — discontinuity', 'No — vertical tangent'] }
        ],
        correctAnswers: ['No — corner', 'No — cusp', 'Yes'],
        hint1: '$|2x|$ has a V-shape at $x=0$ just like $|x|$.',
        hint2: '$f\'(x) = \\frac{2}{3}x^{-1/3}$. As $x \\to 0^+$, slope $\\to +\\infty$. As $x \\to 0^-$, slope $\\to -\\infty$.',
        hint3: '$\\sin(x)$ is smooth everywhere with no corners or vertical tangents.',
        explanation: '$|2x|$ has a corner at 0. $x^{2/3}$ has slopes going to $+\\infty$ and $-\\infty$ from opposite sides (cusp). $\\sin(x)$ is differentiable everywhere.'
      }
    },
    {
      id: 'derdef2-input',
      type: 'input-box' as const,
      content: `**Find the Value** ✍️`,
      exercise: {
        question: 'For $f(x) = \\begin{cases} ax^2 & x \\leq 1 \\\\ 4x + b & x > 1 \\end{cases}$ to be differentiable at $x = 1$, find $a$. (Use the fact that continuity and equal derivatives are both required.)',
        correctAnswer: '2',
        acceptableAnswers: ['2', '2.0'],
        hint1: 'Derivative of left piece at $x=1$: $2a(1) = 2a$. Derivative of right piece: $4$.',
        hint2: 'Set derivatives equal: $2a = 4 \\Rightarrow a = 2$. (Then continuity gives $b = -2$.)',
        explanation: 'Left derivative at 1: $2a$. Right derivative: $4$. Setting equal: $2a = 4 \\Rightarrow a = 2$.'
      }
    }
  ]
}
