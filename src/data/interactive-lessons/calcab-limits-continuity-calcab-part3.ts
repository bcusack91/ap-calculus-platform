export const calcabLimitsPart3Data = {
  topicSlug: 'limits-continuity-calcab',
  sections: [
    {
      id: 'limit3-intro',
      type: 'text' as const,
      content: `
# ∫ One-Sided Limits

**Part 3 of 7 — Left-Hand and Right-Hand Limits**

### 1. Definition

The **left-hand limit** $\\lim_{x \\to c^-} f(x)$ considers only values of $x$ approaching $c$ from the left (values less than $c$).

The **right-hand limit** $\\lim_{x \\to c^+} f(x)$ considers only values approaching from the right (values greater than $c$).

**The two-sided limit exists if and only if both one-sided limits exist and are equal:**

$$\\lim_{x \\to c} f(x) = L \\iff \\lim_{x \\to c^-} f(x) = L \\text{ and } \\lim_{x \\to c^+} f(x) = L$$

### 2. Piecewise Functions

One-sided limits are essential for piecewise functions:

$$g(x) = \\begin{cases} x + 3 & x < 2 \\\\ x^2 & x \\geq 2 \\end{cases}$$

- $\\lim_{x \\to 2^-} g(x) = 2 + 3 = 5$
- $\\lim_{x \\to 2^+} g(x) = 2^2 = 4$

Since $5 \\neq 4$, we say $\\lim_{x \\to 2} g(x)$ **does not exist**.

### 3. Vertical Asymptotes

At a vertical asymptote, one-sided limits reveal the behavior:

For $f(x) = \\frac{1}{x - 3}$:
- $\\lim_{x \\to 3^+} \\frac{1}{x-3} = +\\infty$ (positive values approach from right)
- $\\lim_{x \\to 3^-} \\frac{1}{x-3} = -\\infty$ (negative values approach from left)

### 4. Absolute Value Functions

$|x| = \\begin{cases} x & x \\geq 0 \\\\ -x & x < 0 \\end{cases}$

$$\\lim_{x \\to 0} \\frac{|x|}{x} = \\begin{cases} \\lim_{x \\to 0^+} \\frac{x}{x} = 1 \\\\ \\lim_{x \\to 0^-} \\frac{-x}{x} = -1 \\end{cases}$$

The two sides disagree, so $\\lim_{x \\to 0} \\frac{|x|}{x}$ does not exist.
      `
    },
    {
      id: 'limit3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Let $f(x) = \\begin{cases} 2x+1 & x < 3 \\\\ x^2-2 & x \\geq 3 \\end{cases}$. What is $\\lim_{x \\to 3} f(x)$?',
            options: ['$7$', '$\\frac{15}{2}$', '$\\frac{7+7}{2}$', 'Does not exist'],
            correctAnswer: 3,
            explanation: 'From the left: $\\lim_{x \\to 3^-}(2x+1) = 7$. From the right: $\\lim_{x \\to 3^+}(x^2-2) = 7$. Since $7 = 7$, the limit exists and equals $7$. Wait — let me recalculate. Left: $2(3)+1=7$. Right: $3^2-2=7$. Both equal 7, so $\\lim_{x \\to 3} f(x) = 7$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to 0^+} \\frac{|x|}{x}$.',
            options: ['$1$', '$-1$', '$0$', 'Does not exist'],
            correctAnswer: 0,
            explanation: 'For $x > 0$: $|x| = x$, so $\\frac{|x|}{x} = \\frac{x}{x} = 1$. Therefore $\\lim_{x \\to 0^+} \\frac{|x|}{x} = 1$.'
          }
        ]
      }
    },
    {
      id: 'limit3-detail',
      type: 'text' as const,
      content: `
### One-Sided Limit Decision Tree

1. **Is the function piecewise?** → Use the piece valid on that side
2. **Is there a vertical asymptote?** → Check sign of expression on that side
3. **Is there an absolute value?** → Rewrite without $| \\cdot |$ using the sign of the expression

**Key fact for the AP exam:** The two-sided limit exists **only** when left = right. If the problem asks "does the limit exist," always check both sides.

### Common Mistakes
- Confusing "the limit is $\\infty$" with "the limit exists" — saying the limit is $\\infty$ means it does NOT exist as a finite limit
- Forgetting to check both sides at breakpoints of piecewise functions
      `
    },
    {
      id: 'limit3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Let $h(x) = \\begin{cases} \\sin(x) & x < 0 \\\\ x^2 + 1 & x \\geq 0 \\end{cases}$. Does $\\lim_{x \\to 0} h(x)$ exist?',
            options: ['Yes, it equals 0', 'Yes, it equals 1', 'No, because the left and right limits differ', 'No, because $h$ is not continuous'],
            correctAnswer: 2,
            explanation: 'From the left: $\\lim_{x \\to 0^-} \\sin(x) = 0$. From the right: $\\lim_{x \\to 0^+} (x^2+1) = 1$. Since $0 \\neq 1$, the two-sided limit does not exist.'
          }
        ]
      }
    },
    {
      id: 'limit3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Evaluate the One-Sided Limits** 🔍`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to 2^-}$ where $f(x) = 3x-1$ for $x<2$', options: ['3', '4', '5', '7'] },
          { label: '$\\lim_{x \\to 2^+}$ where $f(x) = x^2+1$ for $x \\geq 2$', options: ['3', '4', '5', '7'] },
          { label: 'Does $\\lim_{x \\to 2} f(x)$ exist?', options: ['Yes, equals 5', 'No, left ≠ right', 'Yes, equals 4', 'Not enough info'] }
        ],
        correctAnswers: ['5', '5', 'Yes, equals 5'],
        hint1: 'For the left-hand limit, substitute $x=2$ into $3x-1$.',
        hint2: 'For the right-hand limit, substitute $x=2$ into $x^2+1$.',
        hint3: 'The two-sided limit exists when both one-sided limits are equal.',
        explanation: 'Left: $3(2)-1=5$. Right: $2^2+1=5$. Since both equal 5, the two-sided limit exists and equals 5.'
      }
    }
  ]
}
