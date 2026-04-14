export const calcbcRatioRootPart5Data = {
  topicSlug: 'ratio-root-tests-calcbc',
  sections: [
    {
      id: 'rr5-intro',
      type: 'text' as const,
      content: `# AP Exam Strategies

**Part 5 of 7 — Maximizing Your Score**

### How Ratio/Root Tests Appear on the AP Exam

**MC questions typically ask:**
- "Which test determines convergence of $\\sum...$?"
- "What is the radius of convergence?"
- "For which values of $x$ does $\\sum c_n x^n$ converge?"

**FRQ questions typically ask:**
- "Determine the radius and interval of convergence"
- "Use the ratio test to show..."

### Top Mistakes on AP

| Mistake | Correction |
|---------|-----------|
| Forgetting absolute value in $|a_{n+1}/a_n|$ | Always use $|\\cdot|$ |
| Concluding convergence when $L = 1$ | $L = 1$ is **inconclusive** |
| Not checking endpoints | Ratio Test says nothing at $x = a \\pm R$ |
| Using Ratio Test for $p$-series | Always gives $L = 1$ — use another test |

> **AP Tip:** When the problem says "determine the interval of convergence," you MUST check endpoints. Many students lose points here.`
    },
    {
      id: 'rr5-frq-template',
      type: 'text' as const,
      content: `### FRQ Template: Interval of Convergence

**Problem:** "Find the interval of convergence for $\\sum_{n=1}^{\\infty} \\frac{(-1)^n x^n}{n \\cdot 2^n}$."

**Response:**

**Step 1 — Ratio Test:**
$$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{|x|^{n+1}}{(n+1)2^{n+1}} \\cdot \\frac{n \\cdot 2^n}{|x|^n} = \\frac{|x|}{2} \\cdot \\frac{n}{n+1} \\to \\frac{|x|}{2}$$

Converges when $|x|/2 < 1$, so $|x| < 2$. $R = 2$.

**Step 2 — Endpoint $x = 2$:**
$\\sum (-1)^n \\cdot 2^n/(n \\cdot 2^n) = \\sum (-1)^n/n$. Alternating harmonic → **converges** (AST).

**Step 3 — Endpoint $x = -2$:**
$\\sum (-1)^n(-2)^n/(n \\cdot 2^n) = \\sum (-1)^n(-1)^n 2^n/(n \\cdot 2^n) = \\sum 1/n$. Harmonic → **diverges**.

**Interval of convergence: $(-2, 2]$**

> **Key Fact:** This response earns full credit because it: (1) states the Ratio Test, (2) finds $R$, (3) checks BOTH endpoints with named tests.`
    },
    {
      id: 'rr5-mc1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Problems**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{(x+3)^n}{n \\cdot 5^n}$. The interval of convergence is:',
            options: ['$[-8, 2)$', '$(-8, 2)$', '$(-8, 2]$', '$[-8, 2]$'],
            correctAnswer: 0,
            explanation: '$R = 5$, center $-3$: $(-8, 2)$. At $x = -8$: $\\sum (-1)^n/n$ converges (AST). At $x = 2$: $\\sum 1/n$ diverges. IOC: $[-8, 2)$.'
          },
          {
            question: 'A student applies the Ratio Test to $\\sum 1/n^3$ and gets $L = 1$. The series:',
            options: ['Converges (by $p$-Series Test, $p = 3 > 1$), but Ratio Test cannot show this', 'Diverges since $L = 1$', 'Converges since $L = 1$', 'Cannot be determined by any test'],
            correctAnswer: 0,
            explanation: '$L = 1$ is inconclusive. Switch to $p$-Series Test: $p = 3 > 1$, so it converges.'
          },
          {
            question: 'On an FRQ, you find $R$ but forget to check endpoints. You likely lose:',
            options: ['1-2 points (endpoint check is a scored component)', 'No points (R is sufficient)', 'All points', '3+ points'],
            correctAnswer: 0,
            explanation: 'Endpoint checking is typically 1-2 separate scoring components in the rubric.'
          }
        ]
      }
    },
    {
      id: 'rr5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Quick Decisions**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=0}^{\\infty} \\frac{n! \\cdot x^n}{100^n}$. Without computing, $R$ is likely:',
            options: ['$0$ (factorial growth beats exponential)', '$100$', '$\\infty$', '$1$'],
            correctAnswers: ['$0$ (factorial growth beats exponential)'],
            hints: ['$n!$ grows faster than $c^n$ for any constant $c$.'],
            explanation: '$|a_{n+1}/a_n| = (n+1)|x|/100 \\to \\infty$ unless $x = 0$. $R = 0$.'
          },
          {
            label: '$\\sum x^n/n^{100}$: $R =$',
            options: ['$1$ (like geometric with polynomial adjustment)', '$100$', '$\\infty$', '$1/100$'],
            correctAnswers: ['$1$ (like geometric with polynomial adjustment)'],
            hints: ['$|c_{n+1}/c_n| = (n/(n+1))^{100} \\to 1$. $R = 1/1 = 1$.'],
            explanation: '$\\lim |c_{n+1}/c_n| = 1$. $R = 1$. The polynomial factor does not affect $R$.'
          }
        ]
      }
    },
    {
      id: 'rr5-input',
      type: 'input-box' as const,
      content: '**Finding R**',
      exercise: {
        question: 'Find $R$ for $\\sum_{n=1}^{\\infty} \\frac{n^2 (x-1)^n}{4^n}$. Enter as an integer.',
        correctAnswer: '4',
        acceptableAnswers: ['4'],
        hints: ['$|c_{n+1}/c_n| = ((n+1)/n)^2 \\cdot (1/4) \\to 1/4$.', '$R = 1/(1/4) = 4$.'],
        explanation: '$\\lim |c_{n+1}/c_n| = 1/4$. $R = 4$.'
      }
    },
    {
      id: 'rr5-summary',
      type: 'text' as const,
      content: `### Summary

- Always use absolute values in the Ratio Test
- $L = 1$: switch tests, don't guess
- IOC problems: find $R$ with Ratio Test, then check endpoints
- Name the test you use at each endpoint

> **Next:** Part 6 — Problem-Solving Workshop.`
    }
  ]
};
