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

### How FRQs Are Scored

$$\\boxed{\\text{Show the setup} \\to \\text{Give the reason} \\to \\text{Answer the question asked}}$$

| Scoring fact | What it means for you |
|:---|:---|
| Many points need supporting work | Points are often "answer with supporting work" or "answer with justification", so a bare number can earn nothing for that part. Show the integral, derivative, or theorem you used. |
| Units count only when asked | A units point exists only when the question says to indicate units of measure. Correct units elsewhere do no harm. |
| Decimals: three places | Calculator answers must be correct to three decimal places (rounded or truncated). Inappropriate rounding costs at most one point in a question. |
| Answers need not be simplified | $\\frac{6}{4}$ is as good as $\\frac{3}{2}$, and $e^0 + 3$ is as good as $4$. Simplifying is allowed, not required. |
| Crossed-out work is not scored | If you change your mind, cross out the work you do not want read. |
| Interpretations need context | "Explain the meaning" answers name the quantity, the units, and the time or interval. |`
    },
    {
      id: 'frq1-quiz1',
      type: 'multiple-choice' as const,
      content: '**FRQ Skills Quiz** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'On an FRQ, \u201cExplain the meaning of $\\int_2^8 r(t)\\,dt = 50$\u201d requires you to:',
            options: ['Say what the 50 means in context, with units', 'Show the antiderivative steps for 50', 'Call it the area under $r(t)$ on $[2, 8]$', 'Give the rate of $r$ at $t = 8$, with units'],
            correctAnswer: 0,
            explanation: 'Interpretation: “The total amount of [quantity] from $t=2$ to $t=8$ is 50 [units].” Context and units are required. Computation alone earns no interpretation point, “area under the curve” without context is not an interpretation, and the integral is a total over the interval, not a rate at one time.'
          },
          {
            question: 'Which theorem justifies: \u201cThere exists a $c$ in $(1,5)$ such that $f\'(c) = \\frac{f(5)-f(1)}{5-1}$\u201d?',
            options: ['Mean Value Theorem', 'Intermediate Value Theorem', 'Extreme Value Theorem', 'Fundamental Theorem of Calculus'],
            correctAnswer: 0,
            explanation: 'MVT guarantees a point where instantaneous rate equals average rate, provided $f$ is continuous on $[1,5]$ and differentiable on $(1,5)$.'
          },
          {
            question: 'If the FRQ says \u201cJustify your answer,\u201d you must:',
            options: ['Name the theorem and verify its conditions', 'Show the arithmetic and the conclusion', 'Point to a graph that shows the result', 'Check the result with a numerical example'],
            correctAnswer: 0,
            explanation: 'Justification = name the theorem (or the reason, such as a sign change of $f\'$) + verify its hypotheses + state the conclusion. Arithmetic, a picture or an example does not explain why the result must hold.'
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
        question: 'Find the average rate of change of $f(x) = x^3$ on $[1, 3]$.',
        correctAnswer: '13',
        acceptableAnswers: ['13', '26/2'],
        hints: [
          '$\\frac{f(3)-f(1)}{3-1} = \\frac{27-1}{2}$.',
          '$= \\frac{26}{2} = 13$.'
        ],
        explanation: '$\\frac{f(3)-f(1)}{3-1} = \\frac{27-1}{2} = 13$.'
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
