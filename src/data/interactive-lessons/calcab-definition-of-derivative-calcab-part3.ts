export const calcabDerivativeDefPart3Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'derdef3-intro',
      type: 'text' as const,
      content: `# ∫ Graphical Interpretation of Derivatives

**Part 3 of 7 — Reading Derivatives from Graphs**

---

### Topics in This Part

| Section |
|---------|
| 📖 Derivative = Slope of Tangent Line |
| From Graph of $f$ to Graph of $f'$ |
| 📌 Estimating Derivatives from Tables |
| Reading $f$ from $f'$ (Reverse Direction) |
| The First Derivative Test |

> 🔑 **Key Concept:** The derivative gives the slope of the tangent line. Positive derivative means increasing; negative means decreasing; zero means horizontal tangent.`
    },
    {
      id: 'derdef3-graphtable',
      type: 'text' as const,
      content: `
## 📖 From Graph of $f$ to Graph of $f'$

This is one of the most important skills on the AP exam:

| Feature of $f$ | Corresponding Feature of $f'$ |
|---------------|-------------------------------|
| $f$ increasing | $f' > 0$ (above $x$-axis) |
| $f$ decreasing | $f' < 0$ (below $x$-axis) |
| Local max of $f$ | $f' = 0$ and changes $+$ to $-$ |
| Local min of $f$ | $f' = 0$ and changes $-$ to $+$ |
| Inflection point of $f$ | Local max or min of $f'$ |
| $f$ concave up | $f'$ is increasing |
| $f$ concave down | $f'$ is decreasing |
| Steep slope | Large $|f'|$ |
| Gentle slope | Small $|f'|$ |

---

### Common Trap

$$\\boxed{f'(c) = 0 \\text{ does NOT always mean } f \\text{ has an extremum at } c}$$

**Example:** $f(x) = x^3$ at $x = 0$: $f'(0) = 0$ but $f'$ doesn't change sign → inflection point, NOT an extremum.

> **AP Tip:** On graph-matching problems, always check: (1) where $f$ has horizontal tangents → $f' = 0$, (2) where $f$ is steepest → $f'$ peaks, (3) inflection points of $f$ → extrema of $f'$.`
    },
    {
      id: 'derdef3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Graph Reading** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Given data: $f(1) = 3$, $f(3) = 7$. Approximate $f\'(2)$ using the symmetric difference quotient.',
            options: ['$2$', '$4$', '$5$', '$10$'],
            correctAnswer: 0,
            explanation: '$f\'(2) \\approx \\frac{f(3)-f(1)}{3-1} = \\frac{7-3}{2} = 2$.'
          },
          {
            question: 'If $f\'(x) > 0$ for all $x$ in $(2, 5)$ and $f\'(2) = f\'(5) = 0$, then on $[2, 5]$:',
            options: [
              '$f$ has a local max at $x = 5$',
              '$f$ is constant',
              '$f$ is increasing',
              '$f$ has an inflection point'
            ],
            correctAnswer: 2,
            explanation: 'Since $f\'(x) \\geq 0$ on $[2,5]$ and $f\' > 0$ on the interior, $f$ is increasing on $[2,5]$.'
          },
          {
            question: 'If the graph of $f$ has an inflection point at $x = 4$, what happens to $f\'$ at $x = 4$?',
            options: ['$f\'(4) = 0$', '$f\'$ has a local max or min at $x = 4$', '$f\'$ is undefined', '$f\'$ changes sign'],
            correctAnswer: 1,
            explanation: 'Inflection point of $f$ → concavity changes → $f\'\'$ changes sign → $f\'$ has a local extremum at that point.'
          }
        ]
      }
    },
    {
      id: 'derdef3-estimation',
      type: 'text' as const,
      content: `
## 📌 Estimating Derivatives from Data Tables

When given a table of values (common on AP FRQ):

| Method | Formula | Accuracy |
|--------|---------|----------|
| Forward difference | $f'(a) \\approx \\frac{f(a+h)-f(a)}{h}$ | Good |
| Backward difference | $f'(a) \\approx \\frac{f(a)-f(a-h)}{h}$ | Good |
| **Symmetric (central)** | $f'(a) \\approx \\frac{f(a+h)-f(a-h)}{2h}$ | **Best** |

---

### Example with a Table

| $x$ | 0 | 1 | 2 | 3 | 4 |
|-----|---|---|---|---|---|
| $f(x)$ | 5 | 8 | 13 | 20 | 29 |

Estimate $f'(2)$:

$$f'(2) \\approx \\frac{f(3)-f(1)}{3-1} = \\frac{20-8}{2} = 6$$

> **AP Tip:** When estimating derivatives from tables, use the symmetric difference quotient whenever possible. The AP exam scoring guidelines explicitly prefer this method.`
    },
    {
      id: 'derdef3-firstderivtest',
      type: 'text' as const,
      content: `
## The First Derivative Test

$$\\boxed{\\text{Sign change of } f' \\text{ at } c \\implies \\text{local extremum of } f \\text{ at } c}$$

| $f'$ Before $c$ | $f'$ After $c$ | Conclusion |
|-----------------|----------------|------------|
| $+$ | $-$ | Local **maximum** at $c$ |
| $-$ | $+$ | Local **minimum** at $c$ |
| $+$ | $+$ | No extremum (increasing through $c$) |
| $-$ | $-$ | No extremum (decreasing through $c$) |

> 🔑 **Key Fact:** The First Derivative Test is the primary tool for classifying critical points on the AP exam.`
    },
    {
      id: 'derdef3-quiz2',
      type: 'multiple-choice' as const,
      content: `**First Derivative Test** 🎯`,
      exercise: {
        questions: [
          {
            question: 'If $f\'(3) = 0$ and $f\'$ changes from negative to positive at $x = 3$, then $f$ has a:',
            options: ['Local maximum at $x = 3$', 'Local minimum at $x = 3$', 'Inflection point at $x = 3$', 'Cannot determine'],
            correctAnswer: 1,
            explanation: '$f\'$ changes from $-$ to $+$ means $f$ goes from decreasing to increasing → local minimum.'
          },
          {
            question: 'If $f\'(c) = 0$ but $f\'$ does NOT change sign at $c$, then $f$ has:',
            options: ['A local max', 'A local min', 'Neither max nor min at $c$', 'A vertical tangent'],
            correctAnswer: 2,
            explanation: 'Without a sign change, there is no extremum. Example: $f(x) = x^3$ at $x = 0$.'
          }
        ]
      }
    },
    {
      id: 'derdef3-dropdown',
      type: 'dropdown-select' as const,
      content: `**From $f$ to $f'$** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'At a local maximum of $f$, $f\' = $', options: ['Positive', 'Zero', 'Negative', 'Undefined'] },
          { label: 'Where $f$ is increasing, $f\'$ is', options: ['Positive', 'Zero', 'Negative', 'Undefined'] },
          { label: 'At an inflection point of $f$, $f\'$ has a', options: ['Zero', 'Maximum or minimum', 'Discontinuity', 'Vertical tangent'] },
          { label: 'Where $f$ is concave up, $f\'$ is', options: ['Positive', 'Increasing', 'Decreasing', 'Constant'] }
        ],
        correctAnswers: ['Zero', 'Positive', 'Maximum or minimum', 'Increasing'],
        hint1: 'At a local max, the tangent line is horizontal.',
        hint2: 'If the function is going up, the slope is positive.',
        hint3: 'Inflection of $f$ → concavity changes → $f\'$ has an extremum.',
        explanation: 'Local max → $f\'=0$. Increasing → $f\'>0$. Inflection of $f$ → extremum of $f\'$. Concave up → $f\'\'>0$ → $f\'$ increasing.'
      }
    },
    {
      id: 'derdef3-input',
      type: 'input-box' as const,
      content: `**Estimate from Data** ✍️`,
      exercise: {
        question: 'Given: $f(2) = 10$, $f(4) = 18$. Use the difference quotient to estimate $f\'(3)$.',
        correctAnswer: '4',
        acceptableAnswers: ['4', '4.0'],
        hint1: 'Use the symmetric difference quotient: $f\'(3) \\approx \\frac{f(4)-f(2)}{4-2}$.',
        hint2: '$\\frac{18-10}{2} = ?$',
        explanation: '$f\'(3) \\approx \\frac{f(4)-f(2)}{4-2} = \\frac{18-10}{2} = 4$.'
      }
    }
  ]
}
