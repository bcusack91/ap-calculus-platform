export const calcabLimitsPart3Data = {
  topicSlug: 'limits-continuity-calcab',
  sections: [
    {
      id: 'limit3-intro',
      type: 'text' as const,
      content: `# ∫ One-Sided Limits

**Part 3 of 7 — Left-Hand and Right-Hand Limits**

---

### Topics in This Part

| Section |
|---------|
| 📖 Definition of One-Sided Limits |
| Piecewise Functions & Breakpoints |
| 📌 Vertical Asymptotes & One-Sided Behavior |
| Absolute Value Functions |
| The Two-Sided Limit Existence Theorem |

> 🔑 **Key Concept:** A two-sided limit exists if and only if both one-sided limits exist and are equal. Mastering one-sided limits is essential for analyzing piecewise functions and asymptotic behavior.`
    },
    {
      id: 'limit3-definition',
      type: 'text' as const,
      content: `
## 📖 Left-Hand and Right-Hand Limits

The **left-hand limit** approaches $c$ from values *less than* $c$:

$$\\boxed{\\lim_{x \\to c^-} f(x) = L_1}$$

The **right-hand limit** approaches $c$ from values *greater than* $c$:

$$\\boxed{\\lim_{x \\to c^+} f(x) = L_2}$$

---

### The Existence Theorem

$$\\boxed{\\lim_{x \\to c} f(x) = L \\quad \\Longleftrightarrow \\quad \\lim_{x \\to c^-} f(x) = L \\text{ and } \\lim_{x \\to c^+} f(x) = L}$$

| Scenario | Left = Right? | Two-Sided Limit |
|----------|--------------|-----------------|
| Both sides agree ($L_1 = L_2$) | ✓ | Exists, equals $L$ |
| Sides disagree ($L_1 \\neq L_2$) | ✗ | DNE |
| One side is $\\pm\\infty$ | ✗ | DNE (as a finite limit) |

> **AP Tip:** On the AP exam, if a problem asks "does the limit exist?", always check both one-sided limits — even if one side seems obvious.`
    },
    {
      id: 'limit3-piecewise',
      type: 'text' as const,
      content: `
## 📖 Piecewise Functions & Breakpoints

At each **breakpoint** (where the rule changes), check both sides:

---

### Example 1: Limit Exists

$$g(x) = \\begin{cases} x + 3 & x < 2 \\\\ x^2 & x \\geq 2 \\end{cases}$$

- $\\lim_{x \\to 2^-} g(x) = 2 + 3 = 5$
- $\\lim_{x \\to 2^+} g(x) = 2^2 = 4$

Since $5 \\neq 4$: $\\lim_{x \\to 2} g(x)$ **does not exist**.

---

### Example 2: Limit Exists but Function Disagrees

$$f(x) = \\begin{cases} x^2 & x < 1 \\\\ 5 & x = 1 \\\\ 2x - 1 & x > 1 \\end{cases}$$

- $\\lim_{x \\to 1^-} f(x) = 1$
- $\\lim_{x \\to 1^+} f(x) = 1$

$\\lim_{x \\to 1} f(x) = 1$, but $f(1) = 5 \\neq 1$. The limit exists but the function is **not continuous** at $x = 1$.

> 🔑 **Key Fact:** The limit only cares about what happens *near* the point, not *at* the point.`
    },
    {
      id: 'limit3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Let $f(x) = \\begin{cases} 2x+1 & x < 3 \\\\ x^2-2 & x \\geq 3 \\end{cases}$. What is $\\lim_{x \\to 3} f(x)$?',
            options: ['$7$', '$9$', '$5$', 'Does not exist'],
            correctAnswer: 0,
            explanation: 'Left: $\\lim_{x \\to 3^-}(2x+1) = 7$. Right: $\\lim_{x \\to 3^+}(x^2-2) = 7$. Since $7 = 7$, the limit exists and equals $7$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to 0^+} \\frac{|x|}{x}$.',
            options: ['$1$', '$-1$', '$0$', 'Does not exist'],
            correctAnswer: 0,
            explanation: 'For $x > 0$: $|x| = x$, so $\\frac{|x|}{x} = \\frac{x}{x} = 1$.'
          },
          {
            question: 'Let $h(x) = \\begin{cases} \\sin(x) & x < 0 \\\\ x^2 + 1 & x \\geq 0 \\end{cases}$. Does $\\lim_{x \\to 0} h(x)$ exist?',
            options: ['Yes, equals 0', 'Yes, equals 1', 'No, left and right limits differ', 'No, because $h$ is not defined at 0'],
            correctAnswer: 2,
            explanation: 'Left: $\\lim_{x \\to 0^-} \\sin(x) = 0$. Right: $\\lim_{x \\to 0^+} (x^2+1) = 1$. Since $0 \\neq 1$, the limit does not exist.'
          }
        ]
      }
    },
    {
      id: 'limit3-asymptotes',
      type: 'text' as const,
      content: `
## 📌 Vertical Asymptotes & One-Sided Behavior

At a vertical asymptote, one-sided limits tell you the direction:

---

### Example: $f(x) = \\frac{1}{x - 3}$

| Side | Values of $x$ | Sign of $x-3$ | Limit |
|------|---------------|----------------|-------|
| $x \\to 3^+$ | $3.1, 3.01, \\ldots$ | Positive & small | $+\\infty$ |
| $x \\to 3^-$ | $2.9, 2.99, \\ldots$ | Negative & small | $-\\infty$ |

Since one side goes to $+\\infty$ and the other to $-\\infty$, the two-sided limit DNE.

---

### Example: $g(x) = \\frac{1}{(x-3)^2}$

Both sides: $(x-3)^2 > 0$ regardless, so:

$$\\lim_{x \\to 3^+} \\frac{1}{(x-3)^2} = +\\infty \\quad \\text{and} \\quad \\lim_{x \\to 3^-} \\frac{1}{(x-3)^2} = +\\infty$$

We write $\\lim_{x \\to 3} \\frac{1}{(x-3)^2} = +\\infty$ (both sides agree on going to $+\\infty$).

> **AP Tip:** Even though both sides go to $+\\infty$, this is NOT a finite limit. The limit "does not exist" as a real number. However, writing "$= \\infty$" communicates useful information.`
    },
    {
      id: 'limit3-absolute-value',
      type: 'text' as const,
      content: `
## Absolute Value Functions

Recall: $|x| = \\begin{cases} x & x \\geq 0 \\\\ -x & x < 0 \\end{cases}$

---

### Example: $\\lim_{x \\to 0} \\frac{|x|}{x}$

- **From the right** ($x > 0$): $\\frac{|x|}{x} = \\frac{x}{x} = 1$
- **From the left** ($x < 0$): $\\frac{|x|}{x} = \\frac{-x}{x} = -1$

Since $1 \\neq -1$, the two-sided limit **does not exist**.

---

### Example: $\\lim_{x \\to 2} \\frac{|x-2|}{x-2}$

- **From the right** ($x > 2$): $|x-2| = x-2$, so $\\frac{x-2}{x-2} = 1$
- **From the left** ($x < 2$): $|x-2| = -(x-2)$, so $\\frac{-(x-2)}{x-2} = -1$

DNE — same pattern as $\\frac{|x|}{x}$, just shifted.

> 🔑 **Key Fact:** $\\frac{|\\text{expression}|}{\\text{expression}}$ always produces $\\pm 1$ limits from each side, and the two-sided limit will always be DNE.`
    },
    {
      id: 'limit3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Evaluate the One-Sided Limits** 🔍\n\nLet $f(x) = \\begin{cases} 3x-1 & x < 2 \\\\ x^2+1 & x \\geq 2 \\end{cases}$`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to 2^-} f(x) =$', options: ['3', '4', '5', '7'] },
          { label: '$\\lim_{x \\to 2^+} f(x) =$', options: ['3', '4', '5', '7'] },
          { label: 'Does $\\lim_{x \\to 2} f(x)$ exist?', options: ['Yes, equals 5', 'No, left ≠ right', 'Yes, equals 4', 'Not enough info'] }
        ],
        correctAnswers: ['5', '5', 'Yes, equals 5'],
        hint1: 'For the left-hand limit, substitute $x=2$ into $3x-1$.',
        hint2: 'For the right-hand limit, substitute $x=2$ into $x^2+1$.',
        hint3: 'The two-sided limit exists when both one-sided limits are equal.',
        explanation: 'Left: $3(2)-1=5$. Right: $2^2+1=5$. Since both equal 5, the two-sided limit exists and equals 5.'
      }
    },
    {
      id: 'limit3-input',
      type: 'input-box' as const,
      content: `**Compute the One-Sided Limit** ✍️`,
      exercise: {
        question: 'Let $f(x) = \\begin{cases} x^2 + 2 & x < 4 \\\\ 3x - 1 & x \\geq 4 \\end{cases}$. Evaluate $\\lim_{x \\to 4^-} f(x)$.',
        correctAnswer: '18',
        acceptableAnswers: ['18', '18.0'],
        hint1: 'For the left-hand limit, use the rule valid when $x < 4$.',
        hint2: 'Substitute $x = 4$ into $x^2 + 2$.',
        explanation: 'Use the rule for $x < 4$: $f(x) = x^2 + 2$. At $x = 4$: $16 + 2 = 18$.'
      }
    }
  ]
}
