export const precalcCompositionPart7Data = {
  topicSlug: 'function-composition-inverses-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🎯 Composition & Inverses — Full Synthesis

**Part 7 of 7**

### Master Summary

| Concept | Key Formula |
|:--------|:-----------|
| Composition | $(f \\circ g)(x) = f(g(x))$ |
| Inverse | $f(f^{-1}(x)) = f^{-1}(f(x)) = x$ |
| Finding inverse | Swap $x,y$ and solve |
| One-to-one test | Horizontal Line Test |
| Self-inverse | $f(f(x)) = x$ |
| Inverse of composition | $(f \\circ g)^{-1} = g^{-1} \\circ f^{-1}$ |

### Essential Inverse Pairs

$x^n \\leftrightarrow \\sqrt[n]{x}$, $e^x \\leftrightarrow \\ln x$, $a^x \\leftrightarrow \\log_a x$, $\\sin x \\leftrightarrow \\sin^{-1}x$ (restricted)
      `
    },
    {
      id: 'p7-strategies',
      type: 'text' as const,
      content: `
## 🗺️ Problem-Solving Strategies

### Composition
1. Identify inner and outer functions
2. Substitute the inner into the outer
3. Simplify
4. Check domain restrictions

### Finding Inverses
1. Check one-to-one (HLT or algebraic)
2. Write $y = f(x)$, swap $x$ and $y$
3. Solve for $y$
4. Verify with $f(f^{-1}(x)) = x$

### Decomposition (for Calculus prep)
- Identify the "last operation" → outer function
- Everything inside → inner function
- Practice: $h(x) = e^{\\sin(x^2)} \\to$ outer $e^u$, middle $\\sin v$, inner $x^2$
      `
    },
    {
      id: 'p7-mixed',
      type: 'text' as const,
      content: `
## 📝 Mixed Practice

### Problem 1
$f(x) = \\frac{x+1}{x-1}$. Show $f$ is its own inverse.

$f(f(x)) = \\frac{\\frac{x+1}{x-1}+1}{\\frac{x+1}{x-1}-1} = \\frac{\\frac{x+1+x-1}{x-1}}{\\frac{x+1-x+1}{x-1}} = \\frac{2x}{2} = x$ ✓

### Problem 2
$f(x) = 2^x, g(x) = x^2$. Find $(f \\circ g)(3)$:

$g(3)=9, f(9)=2^9=512$

### Problem 3
Find $f^{-1}(x)$ for $f(x) = \\ln(x-3)+2$:

$x = \\ln(y-3)+2 \\implies x-2 = \\ln(y-3) \\implies y-3 = e^{x-2}$

$f^{-1}(x) = e^{x-2}+3$
      `
    },
    {
      id: 'p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Synthesis Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = e^{2x}$ and $g(x) = \\ln\\sqrt{x}$, then $(f\\circ g)(x) =$',
            options: ['$x$', '$2x$', '$x^2$', '$e^{2\\ln\\sqrt{x}}$'],
            correctAnswer: 0,
            explanation: '$f(g(x)) = e^{2\\ln\\sqrt{x}} = e^{\\ln x} = x$. They are inverses!'
          },
          {
            question: 'Find $f^{-1}(x)$ for $f(x) = 3(x-1)^3+5$:',
            options: ['$1+\\sqrt[3]{\\frac{x-5}{3}}$', '$\\frac{(x-5)^{1/3}}{3}+1$', '$\\sqrt[3]{3(x-1)}-5$', '$\\frac{x-5}{3}+1$'],
            correctAnswer: 0,
            explanation: '$x-5 = 3(y-1)^3 \\implies (y-1)^3 = \\frac{x-5}{3} \\implies y = 1+\\sqrt[3]{\\frac{x-5}{3}}$.'
          },
          {
            question: 'Decompose $h(x) = |\\cos(3x)|$. The innermost function is:',
            options: ['$|x|$', '$\\cos x$', '$3x$', '$|\\cos x|$'],
            correctAnswer: 2,
            explanation: 'Layers from inside out: $3x \\to \\cos(\\cdot) \\to |\\cdot|$.'
          }
        ]
      }
    },
    {
      id: 'p7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculations** 🧮

**1)** $f(x)=3x+1, g(x)=x^2$. Find $(g \\circ f)(-1)$:

**2)** $f(x)=\\ln x$. Find $f^{-1}(0)$:

**3)** If $f(2) = 7$ and $f(5) = 2$, find $(f \\circ f^{-1})(7)$:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '1', '7'],
        hint1: '$f(-1) = -2$. $g(-2) = 4$.',
        hint2: '$f^{-1}(x) = e^x$. $e^0 = 1$.',
        hint3: '$f \\circ f^{-1} = $ identity. So the answer is $7$.',
        explanation: '1) $4$. 2) $1$. 3) $7$ (identity property).'
      }
    },
    {
      id: 'p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Master Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Composition is:',
            options: ['Commutative', 'Associative', 'Both', 'Neither'],
            correctAnswer: 1
          },
          {
            label: 'The domain of $f \\circ g$ equals:',
            options: ['Domain of $f$', 'Domain of $g$', '$\\{x \\in \\text{dom}(g) : g(x) \\in \\text{dom}(f)\\}$'],
            correctAnswer: 2
          },
          {
            label: 'If $f$ is decreasing and one-to-one, $f^{-1}$ is:',
            options: ['Increasing', 'Decreasing', 'Constant'],
            correctAnswer: 1
          },
          {
            label: 'The key connection to calculus is:',
            options: ['The Chain Rule uses composition', 'All derivatives use inverses', 'Inverses are not used in calculus'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['Associative', '$\\{x \\in \\text{dom}(g) : g(x) \\in \\text{dom}(f)\\}$', 'Decreasing', 'The Chain Rule uses composition'],
        hint1: '$f \\circ (g \\circ h) = (f \\circ g) \\circ h$, but $f \\circ g \\neq g \\circ f$.',
        hint2: '$x$ must be in domain of $g$, and $g(x)$ must be in domain of $f$.',
        hint3: 'Decreasing functions have decreasing inverses.',
        explanation: 'Composition: associative but not commutative. Domain: both conditions needed. Decreasing → decreasing inverse. Chain Rule = calculus composition.'
      }
    },
    {
      id: 'p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = 2^x$ and $g(x) = \\log_2 x$, then $f \\circ g \\circ f \\circ g$ applied to $x$ gives:',
            options: ['$x$', '$2x$', '$x^2$', '$4x$'],
            correctAnswer: 0,
            explanation: '$f$ and $g$ are inverses, so $f \\circ g = $ identity. Therefore $(f\\circ g)\\circ(f\\circ g) = $ identity.'
          },
          {
            question: 'The function $f(x)=\\frac{2x+3}{x-1}$ composed with itself gives $f(f(x))=x$. This means $f$ is:',
            options: ['Undefined', 'A self-inverse', 'Not one-to-one', 'Periodic'],
            correctAnswer: 1,
            explanation: '$f(f(x))=x$ means $f = f^{-1}$: a self-inverse (involution).'
          }
        ]
      }
    }
  ]
};
