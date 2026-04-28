export const calcabDirectSubstitutionPart2Data = {
  topicSlug: 'direct-substitution-method',
  sections: [
    {
      id: 'dsm2-intro',
      type: 'text' as const,
      content: `# ✅ When Direct Substitution Works

**Part 2 of 4 — A continuity catalog**

---

### Topics in This Part

| Section |
|---------|
| Polynomials |
| Rational Functions |
| Trig, Exp, Log, Roots |

> 🔑 **Why this matters:** Knowing the "continuity catalog" lets you spot a one-line problem at a glance.`
    },
    {
      id: 'dsm2-poly',
      type: 'text' as const,
      content: `
## 📐 Polynomials

A polynomial $p(x) = a_n x^n + \\cdots + a_0$ is continuous **everywhere**.

So:
$$\\lim_{x \\to a} p(x) = p(a) \\quad \\text{for any real } a.$$

> 💡 *Always* try substitution first for polynomials. It will work.
      `
    },
    {
      id: 'dsm2-rational',
      type: 'text' as const,
      content: `
## ÷ Rational Functions

A rational function $r(x) = \\dfrac{p(x)}{q(x)}$ is continuous wherever $q(x) \\ne 0$.

| Situation | Result |
|-----------|--------|
| $q(a) \\ne 0$ | Direct substitution gives the limit immediately |
| $q(a) = 0$ but $p(a) \\ne 0$ | Limit DNE (vertical asymptote) — see *Infinite Limits* |
| $q(a) = 0$ AND $p(a) = 0$ | Indeterminate $0/0$ — try factoring/rationalizing/L'Hôpital |

**Worked example:** $\\lim_{x \\to 5} \\dfrac{x^2 - 1}{x - 2} = \\dfrac{24}{3} = 8$. ✅
      `
    },
    {
      id: 'dsm2-trig',
      type: 'text' as const,
      content: `
## 🌀 Trig, Exp, Log, Roots

| Function | Continuous on |
|----------|---------------|
| $\\sin x$, $\\cos x$ | All of $\\mathbb{R}$ |
| $e^x$ | All of $\\mathbb{R}$ |
| $\\ln x$ | $x > 0$ |
| $\\sqrt{x}$ | $x \\ge 0$ |
| $\\tan x$ | All $x$ except odd multiples of $\\pi/2$ |
| $\\sec x$, $\\csc x$, $\\cot x$ | Wherever denominators don't vanish |

> ⚠️ For $\\tan x$ at $\\pi/2$, $\\sqrt{x}$ at negative numbers, and $\\ln x$ at 0, direct substitution **fails** because the function isn't continuous (or even defined) there.
      `
    },
    {
      id: 'dsm2-mc',
      type: 'multiple-choice' as const,
      content: `**Catalog Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Compute $\\lim_{x \\to \\pi} \\sin x$.',
            options: ['$0$', '$1$', '$-1$', '$\\pi$'],
            correctAnswer: 0,
            explanation: '$\\sin x$ is continuous everywhere; $\\sin \\pi = 0$.'
          },
          {
            question: 'For which value of $a$ does direct substitution FAIL on $f(x) = \\dfrac{x + 3}{x - 4}$?',
            options: ['$a = 0$', '$a = 3$', '$a = 4$ (denominator vanishes)', '$a = -3$'],
            correctAnswer: 2,
            explanation: 'At $x = 4$ the denominator is 0. Numerator is 7, so it\'s a vertical asymptote (not $0/0$).'
          },
          {
            question: 'Compute $\\lim_{x \\to 1} \\ln(x + e - 1)$.',
            options: ['$0$', '$1$', '$e$', '$\\ln 2$'],
            correctAnswer: 1,
            explanation: '$\\ln$ continuous for positive arguments. Substitute: $\\ln(1 + e - 1) = \\ln e = 1$.'
          }
        ]
      }
    },
    {
      id: 'dsm2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Substitute or Stop?** 🔽`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to 5} (x^2 + 7)$', options: ['Substitute → 32', 'Substitute → 22', 'DNE', 'Indeterminate'] },
          { label: '$\\lim_{x \\to 2} \\dfrac{x - 2}{x + 3}$', options: ['Substitute → 0', 'Substitute → 5', 'Indeterminate', 'DNE'] },
          { label: '$\\lim_{x \\to 0} \\dfrac{1}{x}$', options: ['Substitute → 0', 'Substitute → 1', 'DNE — denominator zero, numerator nonzero', 'Indeterminate'] },
          { label: '$\\lim_{x \\to 1} \\dfrac{x - 1}{x - 1}$', options: ['Substitute → 1', 'Substitute → 0', 'Indeterminate $0/0$ — need another method', 'DNE'] },
        ],
        correctAnswers: ['Substitute → 32', 'Substitute → 0', 'DNE — denominator zero, numerator nonzero', 'Indeterminate $0/0$ — need another method'],
        hint1: 'Polynomials always allow substitution.',
        hint2: '$\\dfrac{2-2}{2+3} = 0/5 = 0$.',
        hint3: '$\\dfrac{1}{0}$ with nonzero numerator → asymptote, DNE.',
        explanation: 'Recognize the four cases: clean substitution, zero numerator (still finite), zero denominator with nonzero numerator (DNE), and $0/0$ (indeterminate).'
      }
    }
  ]
}
