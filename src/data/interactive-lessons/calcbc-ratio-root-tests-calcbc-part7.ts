export const calcbcRatioRootPart7Data = {
  topicSlug: 'ratio-root-tests-calcbc',
  sections: [
    {
      id: 'rr7-intro',
      type: 'text' as const,
      content: `# Comprehensive Review

**Part 7 of 7 — Ratio & Root Tests Mastery**

### Quick Reference

$$\\boxed{\\text{Ratio: } L = \\lim \\left|\\frac{a_{n+1}}{a_n}\\right| \\quad \\text{Root: } L = \\lim |a_n|^{1/n}}$$

| $L$ value | Conclusion |
|-----------|-----------|
| $L < 1$ | Converges absolutely |
| $L > 1$ | Diverges |
| $L = 1$ | Inconclusive |

### Test Selection Summary

| Series type | Best test |
|-------------|----------|
| Contains $n!$ | Ratio |
| Form $(b_n)^n$ | Root |
| Contains $r^n$ with polynomial | Ratio or Root |
| Rational function of $n$ | Limit Comparison / $p$-Series |
| Power series $\\sum c_n(x-a)^n$ | Ratio (gives $R$) |`
    },
    {
      id: 'rr7-mc1',
      type: 'multiple-choice' as const,
      content: '**Review — Mixed Problems**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{3^n n!}{(n+2)!}$. $L =$',
            options: ['$3$ (diverges), since $3n!/(n+2)! \\cdot (n+1)!/3^n$ simplifies to $3/(n+2) \\cdot ... $ Wait: $a_{n+1}/a_n = 3(n+1)!/(n+3)! \\cdot (n+2)!/(n!) \\cdot 1/3^0$... Actually: $= 3/(n+3) \\to 0$. $L = 0$, converges', '$1$, inconclusive', '$3/(n+3)$, cannot evaluate', '$\\infty$, diverges'],
            correctAnswer: 0,
            explanation: '$a_{n+1}/a_n = (3^{n+1}(n+1)!/(n+3)!) \\cdot ((n+2)!/(3^n n!)) = 3(n+1)/(n+3) \\cdot 1/1$. Wait: $(n+2)!/(n+3)! = 1/(n+3)$ and $(n+1)!/n! = n+1$. So $= 3(n+1)/(n+3) \\to 3$. $L = 3 > 1$, diverges.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n n}{3^n}$. The series:',
            options: ['Converges absolutely (Ratio: $L = 1/3$)', 'Converges conditionally', 'Diverges', 'Inconclusive'],
            correctAnswer: 0,
            explanation: '$|a_{n+1}/a_n| = ((n+1)/n)(1/3) \\to 1/3 < 1$. Converges absolutely.'
          },
          {
            question: 'For $\\sum_{n=1}^{\\infty} (1 - 1/n)^{n^2}$, Root Test gives $L = $',
            options: ['$\\lim (1-1/n)^n = 1/e$, converges', '$1$, inconclusive', '$0$, converges', '$e$, diverges'],
            correctAnswer: 0,
            explanation: '$|a_n|^{1/n} = (1-1/n)^n \\to 1/e \\approx 0.368 < 1$. Converges.'
          }
        ]
      }
    },
    {
      id: 'rr7-mc2',
      type: 'multiple-choice' as const,
      content: '**Review — Power Series**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{(x-5)^n}{n^3 \\cdot 3^n}$. $R =$',
            options: ['$3$', '$1/3$', '$9$', '$\\infty$'],
            correctAnswer: 0,
            explanation: '$|c_{n+1}/c_n| = (n/(n+1))^3 (1/3) \\to 1/3$. $R = 3$.'
          },
          {
            question: 'Same series, at $x = 8$ (right endpoint): $\\sum 1/n^3$. This:',
            options: ['Converges ($p$-series, $p = 3 > 1$)', 'Diverges', 'Cannot determine', 'Oscillates'],
            correctAnswer: 0,
            explanation: 'At $x = 8$: $(x-5)^n/3^n = 1$. Series becomes $\\sum 1/n^3$, converges by $p$-Series Test.'
          }
        ]
      }
    },
    {
      id: 'rr7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Review — Identify the Error**',
      exercise: {
        dropdowns: [
          {
            label: 'Student writes: "Ratio Test: $a_{n+1}/a_n = n/(n+1) \\to 1 < 1$, so converges." The error:',
            options: ['$L = 1$ is NOT less than $1$; the test is inconclusive', 'The ratio should be $\\to 0$', 'Should use Root Test instead', 'The computation is wrong'],
            correctAnswers: ['$L = 1$ is NOT less than $1$; the test is inconclusive'],
            hints: ['$L = 1$ requires strict inequality $L < 1$ for convergence.'],
            explanation: 'The student confused $L = 1$ with $L < 1$. At $L = 1$, the test is inconclusive.'
          },
          {
            label: 'Student finds $R = 5$ for $\\sum c_n(x+2)^n$ and writes IOC as $(-5, 5)$. The error:',
            options: ['IOC should be $(-7, 3)$: center is $-2$, not $0$', 'Should be $[-5, 5]$', 'Should be $(-5, 5]$', 'No error'],
            correctAnswers: ['IOC should be $(-7, 3)$: center is $-2$, not $0$'],
            hints: ['$|x - (-2)| < 5$ means $-7 < x < 3$.'],
            explanation: 'The center is $a = -2$, so $|x+2| < 5$ gives $-7 < x < 3$, not $(-5, 5)$.'
          }
        ]
      }
    },
    {
      id: 'rr7-input',
      type: 'input-box' as const,
      content: '**Review — Final Challenge**',
      exercise: {
        question: 'For $\\sum_{n=0}^{\\infty} \\frac{n! \\cdot x^{2n}}{(2n)!}$, find $R$ (radius of convergence in terms of $x$, not $x^2$). Enter as "infinity" if infinite.',
        correctAnswer: 'infinity',
        acceptableAnswers: ['infinity', 'inf', 'Infinity'],
        hints: ['Let $u = x^2$. $|a_{n+1}/a_n| = |x|^2(n+1)/((2n+2)(2n+1)) = |x|^2/(2(2n+1)) \\to 0$.'],
        explanation: '$L = 0$ for any $x$. The series converges for all $x$. $R = \\infty$.'
      }
    },
    {
      id: 'rr7-summary',
      type: 'text' as const,
      content: `### Topic Complete!

You've mastered the Ratio and Root Tests:
- Ratio Test formula and when it excels (factorials, exponentials)
- Root Test formula and when it excels ($n$th powers)
- $L = 1$ means inconclusive — always switch tests
- Finding radius of convergence for power series
- AP FRQ template: Ratio Test → $R$ → check endpoints

> **Key Takeaway:** The Ratio Test is your primary tool for series convergence on the AP exam. The Root Test is your backup for $n$th power forms.`
    }
  ]
};
