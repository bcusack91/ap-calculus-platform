export const calcabFRQPart1Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'frq1-intro',
      type: 'text' as const,
      content: `# Free-Response Strategies

**Part 1 of 7 \u2014 FRQ Structure & Core Skills**

### Topic Overview

| Part | Focus |
|:---:|:---|
| **1** | **FRQ Structure & Core Skills** |
| 2 | Rate & Accumulation FRQs |
| 3 | Table-Based FRQs |
| 4 | Graph-Based FRQs |
| 5 | Differential Equation FRQs |
| 6 | Area & Volume FRQs |
| 7 | Full Practice FRQ Set |

---

### AP Calculus AB FRQ Format

| Section | # of FRQs | Time | Calculator |
|:---:|:---:|:---:|:---:|
| Part A | 2 | 30 min | **Yes** |
| Part B | 4 | 60 min | **No** |

Each FRQ typically has **4 parts** (a\u2013d), each worth 1\u20133 points out of 9 total.

> **Key Fact:** You can earn partial credit on every part. ALWAYS attempt every sub-part, even if you couldn\u2019t solve an earlier part.

### Six Core Skills Tested

| Skill | What It Means | Example Task |
|:---|:---|:---|
| Evaluate a rate | Find $f'(a)$ or average rate | \u201cFind the rate of change at $t=3$\u201d |
| Interpret meaning | Explain in context | \u201cExplain the meaning of $\\int_0^5 r(t)\\,dt$\u201d |
| Justify with theorems | Name and apply IVT/MVT/EVT | \u201cExplain why there exists a $c$...\u201d |
| Set up an integral | Write $\\int_a^b f(x)\\,dx$ | \u201cWrite an expression for...\u201d |
| Compute a value | Evaluate integral or derivative | \u201cFind the value of...\u201d |
| Analyze behavior | Inc/dec, concavity, extrema | \u201cIs the amount increasing or decreasing?\u201d |

### FRQ Presentation Rules

$$\\boxed{\\text{Show work} \\to \\text{Label with units} \\to \\text{Answer in context}}$$

| Common Deduction | Points Lost |
|:---|:---:|
| No work shown | All points |
| Missing units | 1 point |
| Not answering in context | 1 point |
| Decimal rounding errors | 1 point |`
    },
    {
      id: 'frq1-quiz1',
      type: 'multiple-choice' as const,
      content: '**FRQ Skills Quiz** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'On an FRQ, \u201cExplain the meaning of $\\int_2^8 r(t)\\,dt = 50$\u201d requires you to:',
            options: ['State what the integral represents in the problem\u2019s context with units', 'Just write \u201c50\u201d', 'Show the antiderivative computation', 'Graph $r(t)$'],
            correctAnswer: 0,
            explanation: 'Interpretation: \u201cThe total amount of [quantity] from $t=2$ to $t=8$ is 50 [units].\u201d Context and units are required.'
          },
          {
            question: 'Which theorem justifies: \u201cThere exists a $c$ in $(1,5)$ such that $f\'(c) = \\frac{f(5)-f(1)}{5-1}$\u201d?',
            options: ['Mean Value Theorem', 'Intermediate Value Theorem', 'Extreme Value Theorem', 'Fundamental Theorem of Calculus'],
            correctAnswer: 0,
            explanation: 'MVT guarantees a point where instantaneous rate equals average rate, provided $f$ is continuous on $[1,5]$ and differentiable on $(1,5)$.'
          },
          {
            question: 'If the FRQ says \u201cJustify your answer,\u201d you must:',
            options: ['Name the theorem and verify its conditions', 'Write \u201cbecause the answer is obvious\u201d', 'Show a graph', 'Only state the conclusion'],
            correctAnswer: 0,
            explanation: 'Justification = name the theorem + verify hypotheses + state the conclusion.'
          }
        ]
      }
    },
    {
      id: 'frq1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match the FRQ task to its approach.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '\u201cFind the average rate of change of $f$ on $[2, 6]$\u201d:',
            options: ['$\\frac{f(6)-f(2)}{6-2}$', '$f\'(4)$', '$\\frac{1}{4}\\int_2^6 f(x)\\,dx$', '$f(6)-f(2)$'],
            correctAnswers: ['$\\frac{f(6)-f(2)}{6-2}$'],
            hints: ['Average rate of change = slope of secant line.'],
            explanation: 'Average rate of change is $\\frac{\\Delta y}{\\Delta x} = \\frac{f(6)-f(2)}{4}$.'
          },
          {
            label: '\u201cFind the average value of $f$ on $[2, 6]$\u201d:',
            options: ['$\\frac{1}{4}\\int_2^6 f(x)\\,dx$', '$\\frac{f(6)-f(2)}{4}$', '$f\'(4)$', '$\\int_2^6 f(x)\\,dx$'],
            correctAnswers: ['$\\frac{1}{4}\\int_2^6 f(x)\\,dx$'],
            hints: ['Average *value* uses the average value formula, not slope.'],
            explanation: 'Average value $= \\frac{1}{b-a}\\int_a^b f(x)\\,dx = \\frac{1}{4}\\int_2^6 f$.'
          },
          {
            label: '\u201cFind the total change of $f$ on $[2, 6]$\u201d:',
            options: ['$\\int_2^6 f\'(x)\\,dx$', '$f\'(6)-f\'(2)$', '$\\frac{f(6)-f(2)}{4}$', '$f(2)+f(6)$'],
            correctAnswers: ['$\\int_2^6 f\'(x)\\,dx$'],
            hints: ['Net change theorem: $\\int_a^b f\' = f(b)-f(a)$.'],
            explanation: 'Total change = $\\int_a^b f\'(x)\\,dx = f(6)-f(2)$. Both forms earn credit.'
          }
        ]
      }
    },
    {
      id: 'frq1-input',
      type: 'input-box' as const,
      content: '**Practice computation.** \u270d\ufe0f',
      exercise: {
        question: 'The average rate of change of $f(x) = x^3$ on $[1, 3]$ is $\\frac{a}{b}$ in lowest terms. Enter $a + b$.',
        correctAnswer: '14',
        acceptableAnswers: ['14'],
        hints: [
          '$\\frac{f(3)-f(1)}{3-1} = \\frac{27-1}{2}$.',
          '$= \\frac{26}{2} = 13$.',
          '$13 = \\frac{13}{1}$. $a+b = 13+1 = 14$.'
        ],
        explanation: '$\\frac{27-1}{2} = 13 = \\frac{13}{1}$. $a+b = 14$.'
      }
    },
    {
      id: 'frq1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1

- FRQs test six core skills: evaluate, interpret, justify, set up, compute, analyze
- Always show work, include units, and answer in context
- Average rate of change $\\ne$ average value \u2014 know the difference
- Name theorems explicitly when justifying`
    }
  ]
};
