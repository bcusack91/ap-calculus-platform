export const calcbcLagrangePart3Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'le3-intro',
      type: 'text' as const,
      content: `# Bounding Derivatives Strategically

**Part 3 of 7 — Finding $M$ for Different Functions**

### The Core Challenge

The Lagrange bound $|R_n(x)| \\le M|x-c|^{n+1}/(n+1)!$ requires:

$$M = \\max_{t \\in I} |f^{(n+1)}(t)|$$

This is straightforward for $\\sin, \\cos, e^x$. For other functions, you need **strategy**.

### Function-by-Function Guide

| Function | $f^{(n+1)}(t)$ pattern | Bounding strategy |
|----------|----------------------|-------------------|
| $\\sin x, \\cos x$ | $\\pm \\sin, \\pm \\cos$ | Always $M = 1$ |
| $e^x$ | $e^x$ | $M = e^{\\max(c,x)}$ (increasing) |
| $e^{-x}$ | $\\pm e^{-x}$ | $M = e^{-\\min(c,x)}$ (decreasing $|\\cdot|$) |
| $\\ln(1+x)$ | $\\pm n!/(1+t)^{n+1}$ | Max at smallest $(1+t)$ |
| $(1+x)^p$ | Product with decreasing terms | Case-by-case |
| $\\arctan x$ | Rational functions | Often given on AP |

> **Key Fact:** On the AP exam, complicated derivatives are often **given** to you. You just plug into the formula.`
    },
    {
      id: 'le3-examples',
      type: 'text' as const,
      content: `### Example 1: $\\ln(1+x)$ at $c = 0$, $x = 0.5$, $n = 3$

$f(x) = \\ln(1+x)$. Derivatives:
- $f'(x) = (1+x)^{-1}$
- $f''(x) = -(1+x)^{-2}$
- $f'''(x) = 2(1+x)^{-3}$
- $f^{(4)}(x) = -6(1+x)^{-4}$

$$|f^{(4)}(t)| = \\frac{6}{(1+t)^4}$$

On $[0, 0.5]$: decreasing, so max at $t = 0$: $M = 6$.

$$|R_3(0.5)| \\le \\frac{6(0.5)^4}{4!} = \\frac{6 \\cdot 0.0625}{24} = \\frac{0.375}{24} = 0.015625$$

### Example 2: When $M$ is Given

*"$f$ has derivatives of all orders. It is known that $|f^{(5)}(t)| \\le 12$ for all $t$ in $[2, 3]$."*

$$|R_4(3)| \\le \\frac{12 \\cdot |3 - 2|^5}{5!} = \\frac{12}{120} = 0.1$$

> **AP Tip:** When the bound on a derivative is stated in an FRQ, that IS the value of $M$. Don't second-guess it.`
    },
    {
      id: 'le3-mc1',
      type: 'multiple-choice' as const,
      content: '**Bounding Strategies**',
      exercise: {
        questions: [
          {
            question: 'For $f(x) = 1/(1-x)$ centered at $c = 0$, $f^{(n+1)}(t) = (n+1)!/(1-t)^{n+2}$. On $[0, 0.5]$, where is $|f^{(n+1)}(t)|$ maximized?',
            options: ['At $t = 0.5$ (denominator is smallest)', 'At $t = 0$ (denominator is largest)', 'At $t = 0.25$ (midpoint)', 'Cannot determine without $n$'],
            correctAnswer: 0,
            explanation: '$|f^{(n+1)}(t)| = (n+1)!/(1-t)^{n+2}$. As $t \\to 0.5$, $(1-t) \\to 0.5$ gets smaller, making the fraction larger. Max at $t = 0.5$.'
          },
          {
            question: 'An FRQ states: "$|f^{(4)}(t)| \\le 25$ on $[1, 1.5]$." Which error bound setup is correct for $T_3$ at $x = 1.5$, $c = 1$?',
            options: ['$25(0.5)^4/4! = 25/384$', '$25(1.5)^4/4!$', '$25(0.5)^3/3!$', '$4 \\cdot 25(0.5)^4$'],
            correctAnswer: 0,
            explanation: '$|R_3| \\le M|x-c|^{n+1}/(n+1)! = 25(0.5)^4/4! = 25 \\cdot 0.0625/24 = 25/384$.'
          },
          {
            question: 'For $e^{-x}$ centered at $0$, evaluated at $x = 2$: $|f^{(n+1)}(t)| = e^{-t}$. On $[0, 2]$, $M = $',
            options: ['$e^0 = 1$', '$e^{-2}$', '$e^2$', '$2e^{-1}$'],
            correctAnswer: 0,
            explanation: '$e^{-t}$ is decreasing on $[0, 2]$. Its maximum absolute value on $[0,2]$ occurs at $t = 0$: $e^0 = 1$.'
          }
        ]
      }
    },
    {
      id: 'le3-dropdown',
      type: 'dropdown-select' as const,
      content: '**M-Value Practice**',
      exercise: {
        dropdowns: [
          {
            label: '$f(x) = \\sqrt{1+x}$. $f^{(3)}(x) = 3/8 \\cdot (1+x)^{-5/2}$. On $[0, 1]$, $M = $',
            options: ['$3/8$ (max at $t = 0$: $(1+0)^{-5/2} = 1$)', '$3/8 \\cdot 2^{-5/2}$', '$3/8 \\cdot 2^{5/2}$', '$3/8 \\cdot (3/2)^{-5/2}$'],
            correctAnswers: ['$3/8$ (max at $t = 0$: $(1+0)^{-5/2} = 1$)'],
            hints: ['$(1+t)^{-5/2}$ is decreasing. Max when $t$ is smallest.'],
            explanation: '$(1+t)^{-5/2}$ is largest at $t = 0$: $(1+0)^{-5/2} = 1$. So $M = 3/8$.'
          },
          {
            label: 'AP gives: "$|f^{(6)}(t)| \\le 40$ on $[3, 3.2]$". Error bound for $T_5(3.2)$ centered at $3$:',
            options: ['$40(0.2)^6/6! = 40 \\cdot 6.4 \\times 10^{-5}/720 \\approx 3.56 \\times 10^{-6}$', '$40(3.2)^6/6!$', '$40(0.2)^5/5!$', '$6 \\cdot 40(0.2)^6$'],
            correctAnswers: ['$40(0.2)^6/6! = 40 \\cdot 6.4 \\times 10^{-5}/720 \\approx 3.56 \\times 10^{-6}$'],
            hints: ['$|x - c| = |3.2 - 3| = 0.2$, $n + 1 = 6$.'],
            explanation: '$|R_5| \\le 40(0.2)^6/6! = 40(6.4 \\times 10^{-5})/720 \\approx 3.56 \\times 10^{-6}$.'
          }
        ]
      }
    },
    {
      id: 'le3-input',
      type: 'input-box' as const,
      content: '**Computing the Bound**',
      exercise: {
        question: 'For $\\ln(1.2)$ using $T_4$ centered at $1$ (i.e., $\\ln(x)$ near $c = 1$), $f^{(5)}(t) = 4!/ t^5$. On $[1, 1.2]$, $M = 24$. Compute $|R_4(1.2)|$ bound as a fraction.',
        correctAnswer: '1/12500',
        acceptableAnswers: ['1/12500', '0.00008', '8e-5', '8/100000'],
        hints: ['$|R_4| \\le 24 \\cdot (0.2)^5/5! = 24 \\cdot 0.00032/120$.'],
        explanation: '$|R_4(1.2)| \\le 24(0.2)^5/5! = 24(3.2 \\times 10^{-4})/120 = 0.00768/120 = 6.4 \\times 10^{-5}$. As a fraction: $24 \\cdot (1/5)^5/120 = 24/(5^5 \\cdot 120) = 24/(3125 \\cdot 120) = 24/375000 = 1/15625$. Actually: $(0.2)^5 = 0.00032$, $24(0.00032)/120 = 0.00768/120 = 0.000064 = 8/125000 = 1/15625$.'
      }
    },
    {
      id: 'le3-summary',
      type: 'text' as const,
      content: `### Summary

- For $\\sin/\\cos$: $M = 1$
- For $e^x$: use monotonicity to find max on interval
- For quotient-type derivatives: max where denominator is smallest
- When AP provides the bound, just plug in

> **Next:** Part 4 — Lagrange vs. AST Error Bounds.`
    }
  ]
};
