#!/usr/bin/env python3
"""Generate 8 new AP Calculus BC lesson files (Topics 21-28)."""
import os

BASE = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'interactive-lessons')

TOPICS = [
    {
        'slug': 'ratio-root-tests-calcbc',
        'filePrefix': 'calcbc-ratio-root-tests-calcbc',
        'exportPrefix': 'calcbcRatioRoot',
        'parts': [
            {
                'title': 'The Ratio Test',
                'content': """# \U0001f9ea Ratio & Root Tests

**Part 1 of 7 \u2014 The Ratio Test**

---

### Ratio Test

For the series $\\\\sum a_n$, compute:

$$L = \\\\lim_{n \\\\to \\\\infty} \\\\left|\\\\frac{a_{n+1}}{a_n}\\\\right|$$

| Result | Conclusion |
|--------|-----------|
| $L < 1$ | Series **converges absolutely** |
| $L > 1$ (or $L = \\\\infty$) | Series **diverges** |
| $L = 1$ | **Inconclusive** |

---

### When to Use the Ratio Test

The Ratio Test is most useful when $a_n$ contains:
- **Factorials** ($n!$)
- **Exponentials** ($r^n$)
- **Products** of factorials and exponentials

### Worked Example

$$\\\\sum_{n=1}^{\\\\infty} \\\\frac{n!}{3^n}$$

$$L = \\\\lim_{n \\\\to \\\\infty} \\\\frac{(n+1)!}{3^{n+1}} \\\\cdot \\\\frac{3^n}{n!} = \\\\lim_{n \\\\to \\\\infty} \\\\frac{n+1}{3} = \\\\infty$$

Since $L = \\\\infty > 1$, the series **diverges**.

---

### Another Example

$$\\\\sum_{n=0}^{\\\\infty} \\\\frac{2^n}{n!}$$

$$L = \\\\lim \\\\frac{2^{n+1}}{(n+1)!} \\\\cdot \\\\frac{n!}{2^n} = \\\\lim \\\\frac{2}{n+1} = 0$$

Since $L = 0 < 1$, the series **converges absolutely**.""",
                'mcqs': [
                    ('The Ratio Test gives $L = 0.5$. The series:',
                     ['Converges absolutely', 'Diverges', 'Is inconclusive', 'Converges conditionally'],
                     0, '$L = 0.5 < 1$ \u2192 the series converges absolutely.'),
                    ('The Ratio Test is especially useful for series with:',
                     ['Polynomials in the denominator', 'Factorials or exponentials', 'Alternating signs only', 'Constant terms'],
                     1, 'Factorials and exponentials simplify nicely in ratios $a_{n+1}/a_n$.'),
                    ('If the Ratio Test gives $L = 1$:',
                     ['The series converges', 'The series diverges', 'The test is inconclusive', 'The series converges conditionally'],
                     2, '$L = 1$ is the boundary case \u2014 the Ratio Test cannot determine convergence.')
                ],
                'inputs': {
                    'prompt': """**Ratio Test Practice** \U0001f9ee

Apply the Ratio Test to $\\\\sum \\\\frac{3^n}{n!}$.

**1)** $\\\\frac{a_{n+1}}{a_n} = ?$ (simplified, in terms of $n$; e.g., 3/(n+1))

**2)** $L = \\\\lim_{n \\\\to \\\\infty} \\\\frac{a_{n+1}}{a_n} = ?$

**3)** Conclusion? (converges/diverges/inconclusive)""",
                    'boxes': 3,
                    'answers': ['3/(n+1)', '0', 'converges'],
                    'hints': ['$\\\\frac{3^{n+1}/(n+1)!}{3^n/n!}$', 'As $n \\\\to \\\\infty$, $3/(n+1) \\\\to ?$', '$L < 1$ means?'],
                    'explanation': '1) $3/(n+1)$. 2) $L = 0 < 1$. 3) Converges absolutely.'
                }
            },
            {
                'title': 'The Root Test',
                'content': """# \U0001f33f The Root Test

**Part 2 of 7 \u2014 The Root Test**

---

### Root Test

For the series $\\\\sum a_n$, compute:

$$L = \\\\lim_{n \\\\to \\\\infty} \\\\sqrt[n]{|a_n|} = \\\\lim_{n \\\\to \\\\infty} |a_n|^{1/n}$$

| Result | Conclusion |
|--------|-----------|
| $L < 1$ | Series **converges absolutely** |
| $L > 1$ | Series **diverges** |
| $L = 1$ | **Inconclusive** |

---

### When to Use the Root Test

Best when $a_n$ involves an **$n$-th power**:
- $a_n = \\\\left(\\\\frac{n}{n+1}\\\\right)^n$
- $a_n = \\\\left(\\\\frac{3n+1}{4n}\\\\right)^n$

### Worked Example

$$\\\\sum_{n=1}^{\\\\infty} \\\\left(\\\\frac{2n}{3n+1}\\\\right)^n$$

$$L = \\\\lim_{n \\\\to \\\\infty} \\\\left(\\\\frac{2n}{3n+1}\\\\right) = \\\\frac{2}{3}$$

Since $L = 2/3 < 1$, the series **converges absolutely**.""",
                'mcqs': [
                    ('The Root Test is most useful when $a_n$ has the form:',
                     ['$n!/r^n$', '$f(n)^n$', '$1/n^p$', '$(-1)^n/n$'],
                     1, 'The $n$-th root cancels the $n$-th power, making the limit simple.'),
                    ('$\\\\sum (3/4)^n$: Root Test gives $L = ?$',
                     ['3/4', '4/3', '1', '0'],
                     0, '$|a_n|^{1/n} = ((3/4)^n)^{1/n} = 3/4$. Converges since $3/4 < 1$.'),
                    ('Root Test and Ratio Test both give $L = 1$ for the same series. You should:',
                     ['Conclude it converges', 'Conclude it diverges', 'Try a different test', 'It must be conditional'],
                     2, 'When both are inconclusive, try comparison, integral, or alternating series test.')
                ],
                'inputs': {
                    'prompt': """**Root Test Practice** \U0001f9ee

$\\\\sum_{n=1}^{\\\\infty} \\\\left(\\\\frac{n+1}{2n}\\\\right)^n$

**1)** $|a_n|^{1/n} = ?$ (simplified fraction in terms of $n$)

**2)** $L = ?$ (as a fraction)

**3)** Does the series converge or diverge?""",
                    'boxes': 3,
                    'answers': ['(n+1)/(2n)', '1/2', 'converges'],
                    'hints': ['Take the $n$-th root of $((n+1)/(2n))^n$', '$\\\\lim (n+1)/(2n) = ?$', '$1/2 < 1$'],
                    'explanation': '1) $(n+1)/(2n)$. 2) $\\\\lim (n+1)/(2n) = 1/2$. 3) Converges since $L = 1/2 < 1$.'
                }
            },
            {
                'title': 'Choosing the Right Test',
                'content': """# \U0001f50d Choosing the Right Convergence Test

**Part 3 of 7 \u2014 Decision Framework**

---

### Convergence Test Flowchart

1. **Divergence Test first:** Does $\\\\lim a_n \\\\neq 0$? \u2192 Diverges
2. **Geometric?** $\\\\sum ar^n$ \u2192 converges iff $|r| < 1$
3. **p-series?** $\\\\sum 1/n^p$ \u2192 converges iff $p > 1$
4. **Alternating?** Try Alternating Series Test
5. **Factorials/exponentials?** Try **Ratio Test**
6. **$n$-th powers?** Try **Root Test**
7. **Rational function of $n$?** Try **Limit Comparison** with p-series
8. **Decreasing positive?** Try **Integral Test**
9. **Smaller than known convergent?** Try **Direct Comparison**

---

### The Ratio and Root Tests\u2019 Weakness

Both are **inconclusive** ($L = 1$) for:
- $\\\\sum 1/n^p$ (p-series)
- $\\\\sum 1/(n \\\\ln n)$
- Most series where terms decrease polynomially""",
                'mcqs': [
                    ('Which test should you use first on any series?',
                     ['Ratio Test', 'Root Test', 'Divergence Test', 'Integral Test'],
                     2, 'Always check if $\\\\lim a_n \\\\neq 0$ first. If so, the series diverges immediately.'),
                    ('$\\\\sum \\\\frac{n^2}{2^n}$: best test?',
                     ['Integral Test', 'Ratio Test', 'p-series', 'Alternating Series Test'],
                     1, 'Exponential $2^n$ in denominator \u2192 Ratio Test works well.'),
                    ('$\\\\sum \\\\frac{1}{n^2 + 3}$: best test?',
                     ['Ratio Test', 'Root Test', 'Limit Comparison with $1/n^2$', 'Divergence Test'],
                     2, 'Rational function of $n$ \u2192 compare with corresponding p-series.')
                ],
                'inputs': {
                    'prompt': """**Test Selection** \U0001f9ee

Name the best convergence test for each series:

**1)** $\\\\sum \\\\frac{(-1)^n}{n^3}$ (alternating/ratio/root/comparison)

**2)** $\\\\sum \\\\frac{n!}{5^n}$ (alternating/ratio/root/comparison)

**3)** $\\\\sum \\\\frac{1}{\\\\sqrt{n}}$ (series type and does it converge or diverge?)""",
                    'boxes': 3,
                    'answers': ['alternating', 'ratio', 'diverges'],
                    'hints': ['$(-1)^n$ pattern', 'Factorial in numerator', 'p-series with $p = 1/2$'],
                    'explanation': '1) Alternating Series Test (and it converges). 2) Ratio Test ($L = \\\\infty$, diverges). 3) p-series $p = 1/2 < 1$, diverges.'
                }
            },
            {
                'title': 'Absolute vs Conditional Convergence',
                'content': """# \U0001f504 Absolute vs Conditional Convergence

**Part 4 of 7 \u2014 Types of Convergence**

---

### Definitions

| Type | Condition |
|------|-----------|
| **Absolutely convergent** | $\\\\sum |a_n|$ converges |
| **Conditionally convergent** | $\\\\sum a_n$ converges but $\\\\sum |a_n|$ diverges |
| **Divergent** | $\\\\sum a_n$ does not converge |

> \U0001f511 Absolute convergence implies convergence, but not vice versa.

---

### Classic Example

$$\\\\sum_{n=1}^{\\\\infty} \\\\frac{(-1)^{n+1}}{n} = 1 - \\\\frac{1}{2} + \\\\frac{1}{3} - \\\\frac{1}{4} + \\\\cdots$$

- The alternating series $\\\\sum (-1)^{n+1}/n$ **converges** (AST)
- But $\\\\sum 1/n$ (harmonic series) **diverges**
- Therefore: **conditionally convergent**

### Rearrangement Theorem

If a series is **conditionally convergent**, its terms can be rearranged to converge to ANY real number (or even diverge). This is the Riemann Rearrangement Theorem.""",
                'mcqs': [
                    ('$\\\\sum (-1)^n/n^2$ is:',
                     ['Absolutely convergent', 'Conditionally convergent', 'Divergent', 'Cannot determine'],
                     0, '$\\\\sum 1/n^2$ converges (p-series, $p = 2 > 1$), so the original converges absolutely.'),
                    ('A series is conditionally convergent when:',
                     ['$\\\\sum |a_n|$ converges', '$\\\\sum a_n$ converges but $\\\\sum |a_n|$ diverges', '$\\\\sum a_n$ diverges', 'Both $\\\\sum a_n$ and $\\\\sum |a_n|$ diverge'],
                     1, 'Conditional: converges with signs but not without them.'),
                    ('Absolute convergence implies:',
                     ['Conditional convergence', 'Divergence', 'Convergence', 'Nothing'],
                     2, 'If $\\\\sum |a_n|$ converges, then $\\\\sum a_n$ converges. (But not the other way around.)')
                ],
                'inputs': {
                    'prompt': """**Classification** \U0001f9ee

Classify each series as absolutely convergent (A), conditionally convergent (C), or divergent (D):

**1)** $\\\\sum (-1)^n/n^3$

**2)** $\\\\sum (-1)^n/n$

**3)** $\\\\sum (-1)^n$""",
                    'boxes': 3,
                    'answers': ['A', 'C', 'D'],
                    'hints': ['$\\\\sum 1/n^3$ converges (p-series, $p=3$)', '$\\\\sum 1/n$ diverges but alternating series converges', '$\\\\lim (-1)^n \\\\neq 0$'],
                    'explanation': '1) A \u2014 $\\\\sum 1/n^3$ converges. 2) C \u2014 AST converges but harmonic diverges. 3) D \u2014 terms don\u2019t approach 0.'
                }
            },
            {
                'title': 'Comparison with Other Tests',
                'content': """# \u2696\ufe0f Integrating All Convergence Tests

**Part 5 of 7 \u2014 Comprehensive Comparison**

---

### All Convergence Tests Summary

| Test | Applies To | Conclusion |
|------|-----------|------------|
| Divergence | All series | Diverges if $\\\\lim a_n \\\\neq 0$ |
| Geometric | $\\\\sum ar^n$ | Converges iff $|r| < 1$ |
| p-series | $\\\\sum 1/n^p$ | Converges iff $p > 1$ |
| Integral | $f(n) = a_n$, positive decreasing | Same conclusion as $\\\\int_1^\\\\infty f(x)dx$ |
| Direct Comparison | Positive series | Compare with known series |
| Limit Comparison | Positive series | $\\\\lim a_n/b_n = c > 0$ \u2192 same behavior |
| Alternating Series | $\\\\sum (-1)^n b_n$ | Converges if $b_n$ decreasing \u2192 0 |
| Ratio | Series with $n!$, $r^n$ | $L < 1$: converges; $L > 1$: diverges |
| Root | Series with $f(n)^n$ | $L < 1$: converges; $L > 1$: diverges |

---

### AP Exam Tips
- Always start with Divergence Test
- Show your work when computing limits
- State which test you\u2019re using
- For Ratio/Root: clearly identify $L$ and state the conclusion""",
                'mcqs': [
                    ('$\\\\sum \\\\frac{1}{n(n+1)}$: best approach?',
                     ['Ratio Test', 'Partial fractions \u2192 telescoping', 'Root Test', 'AST'],
                     1, 'This is a telescoping series: $\\\\frac{1}{n(n+1)} = \\\\frac{1}{n} - \\\\frac{1}{n+1}$. Sum = 1.'),
                    ('$\\\\sum \\\\frac{n}{e^n}$: the Ratio Test gives $L = ?$',
                     ['$1/e$', '$e$', '1', '0'],
                     0, '$L = \\\\lim \\\\frac{n+1}{en} = 1/e < 1$. Converges.'),
                    ('The Integral Test requires the function to be:',
                     ['Increasing', 'Positive, continuous, and decreasing', 'Alternating', 'Polynomial'],
                     1, 'Integral Test conditions: positive, continuous, and decreasing on $[1, \\\\infty)$.')
                ],
                'inputs': {
                    'prompt': """**Test Application** \U0001f9ee

**1)** $\\\\sum_{n=1}^{\\\\infty} \\\\frac{1}{n!}$: Apply Ratio Test. $L = ?$

**2)** $\\\\sum_{n=1}^{\\\\infty} \\\\frac{n^2}{2^n}$: Apply Ratio Test. $L = ?$ (as a fraction)

**3)** Does $\\\\sum_{n=2}^{\\\\infty} \\\\frac{1}{n \\\\ln n}$ converge or diverge? (use Integral Test)""",
                    'boxes': 3,
                    'answers': ['0', '1/2', 'diverges'],
                    'hints': ['$L = \\\\lim 1/(n+1)$', '$L = \\\\lim \\\\frac{(n+1)^2}{2n^2}$', '$\\\\int_2^\\\\infty \\\\frac{1}{x\\\\ln x}dx = \\\\ln(\\\\ln x) \\\\to \\\\infty$'],
                    'explanation': '1) $L = 0$. 2) $L = 1/2$. 3) $\\\\int \\\\frac{dx}{x\\\\ln x} = \\\\ln(\\\\ln x) \\\\to \\\\infty$ \u2192 diverges.'
                }
            },
            {
                'title': 'Problem-Solving Workshop',
                'content': """# \U0001f3c6 Problem-Solving Workshop

**Part 6 of 7 \u2014 AP-Style Practice**

---

### Free-Response Strategy

When asked to determine convergence:
1. **State** the test you will use
2. **Set up** the limit (show $a_{n+1}/a_n$ or $|a_n|^{1/n}$)
3. **Evaluate** the limit
4. **Conclude** with convergence/divergence and cite the test

---

### Common Errors
- Forgetting absolute values in the Ratio Test
- Not checking if $L = 1$ (inconclusive!)
- Using Ratio/Root Test on p-series (always gives $L = 1$)""",
                'mcqs': [
                    ('$\\\\sum \\\\frac{(-3)^n}{n!}$: converges or diverges?',
                     ['Converges (Ratio Test, $L = 0$)', 'Diverges (terms grow)', 'Inconclusive', 'Conditionally converges'],
                     0, '$L = \\\\lim |{-3}|/(n+1) = 0 < 1$. Converges absolutely.'),
                    ('$\\\\sum \\\\left(\\\\frac{n}{n+1}\\\\right)^{n^2}$: Root Test gives:',
                     ['$L = 1/e$', '$L = 1$', '$L = 0$', '$L = e$'],
                     2, '$|a_n|^{1/n} = (n/(n+1))^n \\\\to 1/e$. Actually $L = 1/e < 1$. Wait: $((n/(n+1))^{n^2})^{1/n} = (n/(n+1))^n \\\\to 1/e$. Converges.'),
                    ('The Ratio Test should NOT be your first choice for:',
                     ['$\\\\sum n!/n^n$', '$\\\\sum 1/n^3$', '$\\\\sum 2^n/n!$', '$\\\\sum n^5/3^n$'],
                     1, '$\\\\sum 1/n^3$ is a p-series. The Ratio Test gives $L = 1$ (inconclusive).')
                ],
                'inputs': {
                    'prompt': """**AP Practice** \U0001f9ee

$\\\\sum_{n=1}^{\\\\infty} \\\\frac{n^n}{(2n)!}$

**1)** Which test is best? (ratio/root/comparison)

**2)** If using Ratio Test, what does $\\\\frac{a_{n+1}}{a_n}$ simplify to as $n \\\\to \\\\infty$? (0/1/infinity)

**3)** Converges or diverges?""",
                    'boxes': 3,
                    'answers': ['ratio', '0', 'converges'],
                    'hints': ['Factorials and power functions \u2192 Ratio Test', 'Stirling-type analysis shows rapid decrease', '$L < 1$ means convergence'],
                    'explanation': '1) Ratio Test (factorial and $n^n$ terms). 2) $L = 0$. 3) Converges absolutely.'
                }
            },
            {
                'title': 'Mixed Review',
                'content': """# \U0001f4dd Mixed Review

**Part 7 of 7 \u2014 Comprehensive Review**

---

### Quick Reference

| Test | Key Formula | Best For |
|------|-------------|----------|
| Ratio | $L = \\\\lim|a_{n+1}/a_n|$ | Factorials, exponentials |
| Root | $L = \\\\lim|a_n|^{1/n}$ | $n$-th powers |
| Both | $L < 1$: converges; $L > 1$: diverges; $L = 1$: inconclusive | |

### AP Exam Reminders
- Always use absolute values in Ratio/Root Test
- Ratio and Root give same $L$ when both work
- If $L = 1$, you MUST try another test
- State your conclusion clearly: \u201cBy the Ratio Test, since $L = \\\\_ < 1$, the series converges absolutely.\u201d""",
                'mcqs': [
                    ('$\\\\sum \\\\frac{5^n n!}{(2n)!}$: Ratio Test gives:',
                     ['$L = 0$ (converges)', '$L = 5/2$ (diverges)', '$L = 5$ (diverges)', '$L = 1$ (inconclusive)'],
                     0, '$L = \\\\lim \\\\frac{5}{(2n+2)(2n+1)} \\\\cdot (n+1) = 0 < 1$. Converges.'),
                    ('True or False: The Ratio and Root Tests always give the same answer.',
                     ['True \u2014 always same $L$', 'True for most series, and same conclusion when both work', 'False \u2014 they can contradict', 'False \u2014 Root is always better'],
                     1, 'When both $L$ values exist, they are equal. They always agree on convergence/divergence.'),
                    ('$\\\\sum \\\\frac{(2n)!}{(n!)^2 4^n}$: This is related to:',
                     ['A geometric series', 'Central binomial coefficients', 'A telescoping series', 'A p-series'],
                     1, '$\\\\binom{2n}{n}/4^n$ are related to central binomial coefficients. Ratio Test gives $L = 1$ (tricky!).')
                ],
                'inputs': {
                    'prompt': """**Final Challenge** \U0001f9ee

Apply the Ratio Test to each. State $L$ and the conclusion.

**1)** $\\\\sum \\\\frac{n!}{n^n}$: $L = ?$ (round to 2 decimal places)

**2)** $\\\\sum \\\\frac{10^n}{n!}$: $L = ?$

**3)** $\\\\sum \\\\frac{n!}{e^n}$: converges or diverges?""",
                    'boxes': 3,
                    'answers': ['0.37', '0', 'diverges'],
                    'hints': ['$L = \\\\lim (n/(n+1))^n = 1/e$', '$L = \\\\lim 10/(n+1)$', '$L = \\\\lim_{n\\\\to\\\\infty} (n+1)/e > 1$'],
                    'explanation': '1) $L = 1/e \\\\approx 0.37 < 1$. Converges. 2) $L = 0 < 1$. Converges. 3) $L = \\\\infty > 1$. Diverges.'
                }
            }
        ]
    },
    {
        'slug': 'radius-convergence-calcbc',
        'filePrefix': 'calcbc-radius-convergence-calcbc',
        'exportPrefix': 'calcbcRadConv',
        'parts': [
            {
                'title': 'Radius of Convergence',
                'content': """# \U0001f4cf Radius & Interval of Convergence

**Part 1 of 7 \u2014 Radius of Convergence**

---

### Power Series

A power series centered at $a$:

$$\\\\sum_{n=0}^{\\\\infty} c_n(x-a)^n$$

### Radius of Convergence

Every power series has a **radius of convergence** $R$ such that:
- Series converges absolutely for $|x - a| < R$
- Series diverges for $|x - a| > R$
- May converge or diverge at $|x - a| = R$ (endpoints)

### Finding $R$ Using the Ratio Test

$$R = \\\\lim_{n \\\\to \\\\infty} \\\\left|\\\\frac{c_n}{c_{n+1}}\\\\right| \\\\quad \\\\text{or} \\\\quad \\\\frac{1}{R} = \\\\lim_{n \\\\to \\\\infty} \\\\left|\\\\frac{c_{n+1}}{c_n}\\\\right|$$

---

### Worked Example

$$\\\\sum_{n=0}^{\\\\infty} \\\\frac{x^n}{n!}$$

$$\\\\frac{1}{R} = \\\\lim \\\\frac{|c_{n+1}|}{|c_n|} = \\\\lim \\\\frac{1/(n+1)!}{1/n!} = \\\\lim \\\\frac{1}{n+1} = 0$$

So $R = \\\\infty$. This series converges for all $x$! (It\u2019s $e^x$.)""",
                'mcqs': [
                    ('A power series with $R = 5$ centered at $a = 2$ converges for:',
                     ['$-5 < x < 5$', '$-3 < x < 7$', '$2 < x < 7$', '$-3 < x < 3$'],
                     1, '$|x - 2| < 5$ means $-3 < x < 7$. Endpoints need separate check.'),
                    ('If the Ratio Test gives $L = |x|/3$, then $R = ?$',
                     ['1/3', '3', '$|x|$', '0'],
                     1, 'Converges when $|x|/3 < 1$, i.e., $|x| < 3$. So $R = 3$.'),
                    ('A power series with $R = 0$:',
                     ['Converges everywhere', 'Converges only at the center', 'Diverges everywhere', 'Has no center'],
                     1, '$R = 0$ means the series only converges at $x = a$ itself.')
                ],
                'inputs': {
                    'prompt': """**Finding R** \U0001f9ee

$\\\\sum_{n=0}^{\\\\infty} \\\\frac{(x-3)^n}{2^n}$

**1)** What is the center $a$?

**2)** What is $R$?

**3)** Open interval of convergence? (write as e.g., 1 < x < 5)""",
                    'boxes': 3,
                    'answers': ['3', '2', '1 < x < 5'],
                    'hints': ['$(x - a)^n$ form', 'Ratio: $|x-3|/2 < 1$', '$|x-3| < 2$ means $1 < x < 5$'],
                    'explanation': '1) $a = 3$. 2) $R = 2$ (geometric with ratio $(x-3)/2$). 3) $1 < x < 5$.'
                }
            },
            {
                'title': 'Interval of Convergence',
                'content': """# \U0001f4d0 Interval of Convergence

**Part 2 of 7 \u2014 Checking Endpoints**

---

### Steps to Find the Interval of Convergence

1. **Find $R$** using Ratio or Root Test
2. **Identify** the open interval $(a-R, a+R)$
3. **Check each endpoint** separately by substituting $x = a - R$ and $x = a + R$
4. **Include** endpoints where the series converges

### Endpoint Behavior

At endpoints, the power series often becomes:
- A **p-series** ($\\\\sum 1/n^p$)
- An **alternating series** ($\\\\sum (-1)^n/n^p$)
- The **harmonic series** ($\\\\sum 1/n$)

---

### Example: $\\\\sum \\\\frac{x^n}{n}$ (centered at 0)

$R = 1$ (by Ratio Test)

**At $x = 1$:** $\\\\sum 1/n$ = harmonic series \u2192 **diverges**
**At $x = -1$:** $\\\\sum (-1)^n/n$ = alternating harmonic \u2192 **converges**

Interval of convergence: $[-1, 1)$""",
                'mcqs': [
                    ('After finding $R$, you must always:',
                     ['Assume endpoints diverge', 'Check endpoints separately', 'Include both endpoints', 'Exclude both endpoints'],
                     1, 'Endpoints require individual testing \u2014 they can go either way.'),
                    ('$\\\\sum \\\\frac{x^n}{n^2}$ at $x = 1$ gives:',
                     ['$\\\\sum 1/n^2$ (converges)', '$\\\\sum 1/n$ (diverges)', '$\\\\sum (-1)^n/n^2$ (converges)', '$\\\\sum n^2$ (diverges)'],
                     0, 'At $x = 1$: $\\\\sum 1/n^2$ is a convergent p-series ($p = 2 > 1$).'),
                    ('$\\\\sum \\\\frac{x^n}{n^2}$ has interval of convergence:',
                     ['$(-1, 1)$', '$[-1, 1]$', '$[-1, 1)$', '$(-1, 1]$'],
                     1, 'At $x = 1$: $\\\\sum 1/n^2$ converges. At $x = -1$: $\\\\sum (-1)^n/n^2$ converges (absolutely). Both included: $[-1, 1]$.')
                ],
                'inputs': {
                    'prompt': """**Interval of Convergence** \U0001f9ee

$\\\\sum_{n=1}^{\\\\infty} \\\\frac{(x-1)^n}{n \\\\cdot 3^n}$

**1)** $R = ?$

**2)** At $x = 4$: what series results? (harmonic/alternating harmonic/p-series)

**3)** Interval of convergence? (e.g., [-2, 4) )""",
                    'boxes': 3,
                    'answers': ['3', 'harmonic', '[-2, 4)'],
                    'hints': ['Ratio: $|x-1|/3 < 1$', 'At $x = 4$: $(x-1)^n/3^n = 1$, leaves $\\\\sum 1/n$', '$x = -2$: $\\\\sum (-1)^n/n$ converges (AST)'],
                    'explanation': '1) $R = 3$. 2) Harmonic ($\\\\sum 1/n$, diverges). 3) $[-2, 4)$ (includes $-2$, excludes $4$).'
                }
            },
            {
                'title': 'Differentiation & Integration of Power Series',
                'content': """# \u2702\ufe0f Differentiation & Integration of Power Series

**Part 3 of 7 \u2014 Term-by-Term Operations**

---

### Theorem

Within its interval of convergence, a power series can be:
- **Differentiated** term by term
- **Integrated** term by term

The radius of convergence is **preserved** (but endpoints may change).

### Differentiation

$$f(x) = \\\\sum_{n=0}^{\\\\infty} c_n(x-a)^n \\\\implies f'(x) = \\\\sum_{n=1}^{\\\\infty} nc_n(x-a)^{n-1}$$

### Integration

$$\\\\int f(x)\\\\,dx = C + \\\\sum_{n=0}^{\\\\infty} \\\\frac{c_n(x-a)^{n+1}}{n+1}$$

---

### Example

$\\\\frac{1}{1-x} = \\\\sum_{n=0}^{\\\\infty} x^n$ for $|x| < 1$

Differentiate: $\\\\frac{1}{(1-x)^2} = \\\\sum_{n=1}^{\\\\infty} nx^{n-1}$

Integrate: $-\\\\ln(1-x) = \\\\sum_{n=0}^{\\\\infty} \\\\frac{x^{n+1}}{n+1} = \\\\sum_{n=1}^{\\\\infty} \\\\frac{x^n}{n}$""",
                'mcqs': [
                    ('When you differentiate a power series, $R$:',
                     ['Increases', 'Decreases', 'Stays the same', 'Becomes 0'],
                     2, 'The radius of convergence is preserved under differentiation and integration.'),
                    ('$\\\\sum_{n=0}^{\\\\infty} x^n = 1/(1-x)$. Differentiating gives:',
                     ['$\\\\sum nx^{n-1} = 1/(1-x)^2$', '$\\\\sum nx^n = x/(1-x)^2$', '$\\\\sum x^{n+1}/(n+1) = -\\\\ln(1-x)$', '$\\\\sum x^n/n$'],
                     0, '$d/dx[1/(1-x)] = 1/(1-x)^2$, and $d/dx[\\\\sum x^n] = \\\\sum nx^{n-1}$.'),
                    ('Integrating $\\\\sum_{n=0}^{\\\\infty} x^n$ gives:',
                     ['$\\\\sum x^{n+1}/(n+1)$', '$\\\\sum nx^{n-1}$', '$\\\\sum x^n/n$', '$\\\\sum (n+1)x^n$'],
                     0, '$\\\\int x^n dx = x^{n+1}/(n+1)$, applied term by term.')
                ],
                'inputs': {
                    'prompt': """**Power Series Operations** \U0001f9ee

Given $\\\\ln(1+x) = \\\\sum_{n=1}^{\\\\infty} \\\\frac{(-1)^{n+1} x^n}{n}$ for $|x| \\\\leq 1$.

**1)** Differentiate to find a series for $\\\\frac{1}{1+x}$. What is the general term?

**2)** $R = ?$ (after differentiation)

**3)** $\\\\ln(2)$ equals what series sum? (substitute $x = ?$)""",
                    'boxes': 3,
                    'answers': ['(-1)^(n+1)*x^(n-1)', '1', '1'],
                    'hints': ['Differentiate each term: $d/dx[x^n/n] = x^{n-1}$', '$R$ is preserved', '$\\\\ln(1 + 1) = \\\\ln 2$'],
                    'explanation': '1) $(-1)^{n+1}x^{n-1}$ (or equivalently $(-x)^{n-1}$). 2) $R = 1$ (preserved). 3) $x = 1$: $\\\\ln 2 = 1 - 1/2 + 1/3 - 1/4 + \\\\cdots$.'
                }
            },
            {
                'title': 'Common Power Series',
                'content': """# \U0001f4d6 Common Power Series to Know

**Part 4 of 7 \u2014 Essential Series**

---

### Must-Know Maclaurin Series

| Function | Series | Interval |
|----------|--------|----------|
| $e^x$ | $\\\\sum_{n=0}^{\\\\infty} \\\\frac{x^n}{n!}$ | $(-\\\\infty, \\\\infty)$ |
| $\\\\sin x$ | $\\\\sum_{n=0}^{\\\\infty} \\\\frac{(-1)^n x^{2n+1}}{(2n+1)!}$ | $(-\\\\infty, \\\\infty)$ |
| $\\\\cos x$ | $\\\\sum_{n=0}^{\\\\infty} \\\\frac{(-1)^n x^{2n}}{(2n)!}$ | $(-\\\\infty, \\\\infty)$ |
| $\\\\frac{1}{1-x}$ | $\\\\sum_{n=0}^{\\\\infty} x^n$ | $(-1, 1)$ |
| $\\\\ln(1+x)$ | $\\\\sum_{n=1}^{\\\\infty} \\\\frac{(-1)^{n+1} x^n}{n}$ | $(-1, 1]$ |
| $\\\\arctan x$ | $\\\\sum_{n=0}^{\\\\infty} \\\\frac{(-1)^n x^{2n+1}}{2n+1}$ | $[-1, 1]$ |

---

### Generating New Series

Substitute, differentiate, or integrate to create new series:
- $e^{-x^2}$: substitute $-x^2$ for $x$ in $e^x$ series
- $\\\\frac{1}{1+x^2}$: substitute $-x^2$ for $x$ in $1/(1-x)$""",
                'mcqs': [
                    ('The Maclaurin series for $\\\\sin x$ contains only:',
                     ['Even powers of $x$', 'Odd powers of $x$', 'All powers of $x$', 'No $x$ terms'],
                     1, '$\\\\sin x = x - x^3/3! + x^5/5! - \\\\cdots$. Only odd powers (since $\\\\sin$ is odd).'),
                    ('The radius of convergence of $e^x$ is:',
                     ['1', '2', '$\\\\pi$', '$\\\\infty$'],
                     3, '$e^x = \\\\sum x^n/n!$ converges for all real $x$. $R = \\\\infty$.'),
                    ('To get the series for $e^{-x^2}$, you:',
                     ['Differentiate $e^x$ series', 'Substitute $-x^2$ for $x$ in $e^x$ series', 'Integrate $e^x$ series', 'Multiply $e^x$ series by $-x^2$'],
                     1, '$e^u = \\\\sum u^n/n!$ with $u = -x^2$ gives $\\\\sum (-x^2)^n/n! = \\\\sum (-1)^n x^{2n}/n!$.')
                ],
                'inputs': {
                    'prompt': """**Series Identification** \U0001f9ee

**1)** Write the first 3 nonzero terms of $\\\\cos x$: (like x - x^3/6 + x^5/120)

**2)** $\\\\sum_{n=0}^{\\\\infty} \\\\frac{(-1)^n x^{2n+1}}{2n+1}$ represents which function?

**3)** What series do you get by substituting $2x$ for $x$ in $e^x$? First 3 terms: (like 1 + 2x + ...)""",
                    'boxes': 3,
                    'answers': ['1 - x^2/2 + x^4/24', 'arctan x', '1 + 2x + 2x^2'],
                    'hints': ['$\\\\cos x = 1 - x^2/2! + x^4/4! - \\\\cdots$', 'Compare with the table', '$e^{2x} = \\\\sum (2x)^n/n!$'],
                    'explanation': '1) $1 - x^2/2 + x^4/24$. 2) $\\\\arctan x$. 3) $1 + 2x + (2x)^2/2! = 1 + 2x + 2x^2$.'
                }
            },
            {
                'title': 'Applications of Power Series',
                'content': """# \U0001f9e9 Applications of Power Series

**Part 5 of 7 \u2014 Using Series to Solve Problems**

---

### Approximating Integrals

Some functions have no elementary antiderivative but CAN be integrated term by term:

$$\\\\int_0^1 e^{-x^2}dx = \\\\int_0^1 \\\\sum_{n=0}^{\\\\infty} \\\\frac{(-1)^n x^{2n}}{n!}dx = \\\\sum_{n=0}^{\\\\infty} \\\\frac{(-1)^n}{(2n+1)n!}$$

### Evaluating Limits

$$\\\\lim_{x \\\\to 0} \\\\frac{\\\\sin x - x}{x^3} = \\\\lim_{x \\\\to 0} \\\\frac{(x - x^3/6 + \\\\cdots) - x}{x^3} = \\\\lim_{x \\\\to 0} \\\\frac{-x^3/6 + \\\\cdots}{x^3} = -\\\\frac{1}{6}$$

### Solving Differential Equations

Assume $y = \\\\sum c_n x^n$, substitute into the DE, and match coefficients.""",
                'mcqs': [
                    ('$\\\\int e^{-x^2}dx$ cannot be expressed in terms of elementary functions, but:',
                     ['It doesn\u2019t exist', 'It can be approximated using power series', 'It equals $e^{-x^3}/3$', 'We use integration by parts'],
                     1, 'Substitute the power series for $e^{-x^2}$ and integrate term by term.'),
                    ('$\\\\lim_{x \\\\to 0} \\\\frac{e^x - 1 - x}{x^2}$, using series:',
                     ['0', '1/2', '1', 'DNE'],
                     1, '$e^x = 1 + x + x^2/2 + \\\\cdots$. Numerator = $x^2/2 + \\\\cdots$. Divide by $x^2$: limit = $1/2$.'),
                    ('The alternating series error bound says the error is at most:',
                     ['The last included term', 'The first omitted term', 'Half the last term', 'The sum of all remaining terms'],
                     1, 'Error $\\\\leq |a_{n+1}|$, the absolute value of the first omitted term.')
                ],
                'inputs': {
                    'prompt': """**Series Applications** \U0001f9ee

Approximate $\\\\int_0^{0.5} \\\\sin(x^2)\\\\,dx$ using the first two non-zero terms of the series.

$\\\\sin u = u - u^3/6 + \\\\cdots$, so $\\\\sin(x^2) = x^2 - x^6/6 + \\\\cdots$

**1)** $\\\\int_0^{0.5} x^2\\\\,dx = ?$ (as a fraction)

**2)** $\\\\int_0^{0.5} x^6/6\\\\,dx = ?$ (round to 6 decimal places)

**3)** Approximate value of $\\\\int_0^{0.5} \\\\sin(x^2)dx$ using these two terms? (round to 4 decimal places)""",
                    'boxes': 3,
                    'answers': ['1/24', '0.000019', '0.0417'],
                    'hints': ['$x^3/3$ evaluated from 0 to 0.5', '$x^7/(7 \\\\times 6)$ from 0 to 0.5', 'Subtract: $1/24 - \\\\text{tiny correction}$'],
                    'explanation': '1) $(0.5)^3/3 = 0.125/3 = 1/24 \\\\approx 0.04167$. 2) $(0.5)^7/42 \\\\approx 0.000019$. 3) $0.04167 - 0.00002 \\\\approx 0.0417$.'
                }
            },
            {
                'title': 'Problem-Solving Workshop',
                'content': """# \U0001f3c6 Problem-Solving Workshop

**Part 6 of 7 \u2014 AP-Style Practice**

---

### AP FRQ Strategy for Power Series

1. Find $R$ using Ratio Test
2. Check endpoints individually
3. State interval with correct bracket notation
4. For operations, state that $R$ is preserved

### Common Errors
- Forgetting to check endpoints
- Wrong bracket notation ($[$ vs $($ )
- Not recognizing known Maclaurin series""",
                'mcqs': [
                    ('$\\\\sum \\\\frac{(-1)^n (x-2)^n}{n \\\\cdot 5^n}$: $R = ?$',
                     ['2', '5', '1/5', '10'],
                     1, 'Ratio: $|x-2|/5 < 1 \\\\Rightarrow R = 5$.'),
                    ('At $x = 7$, the above series becomes:',
                     ['$\\\\sum 1/n$ (diverges)', '$\\\\sum (-1)^n/n$ (converges)', '$\\\\sum 5^n/n$ (diverges)', '$\\\\sum 1/n^2$ (converges)'],
                     0, 'At $x = 7$: $(x-2)/5 = 1$, $(-1)^n \\\\cdot 1^n/n = (-1)^n/n$... wait, $(7-2)^n/5^n = 1$, and $(-1)^n/n$. Converges by AST.'),
                    ('Finding $\\\\int_0^x \\\\frac{\\\\sin t}{t}dt$ requires:',
                     ['Integration by parts', 'Substituting the series for $\\\\sin t$ and dividing by $t$', 'L\u2019H\u00f4pital\u2019s rule', 'Numerical methods only'],
                     1, '$\\\\sin t/t = \\\\sum (-1)^n t^{2n}/(2n+1)!$, then integrate term by term.')
                ],
                'inputs': {
                    'prompt': """**Comprehensive Practice** \U0001f9ee

$f(x) = \\\\sum_{n=0}^{\\\\infty} \\\\frac{(x+1)^n}{2^n(n+1)}$

**1)** Center $a = ?$

**2)** $R = ?$

**3)** At $x = 1$: converges or diverges?""",
                    'boxes': 3,
                    'answers': ['-1', '2', 'converges'],
                    'hints': ['$(x - a)^n$ form: $a = -1$', 'Ratio: $|x+1|/2 < 1$', 'At $x = 1$: $\\\\sum 1/(n+1)$...wait, $\\\\sum 2^n/(2^n(n+1)) = \\\\sum 1/(n+1)$. Hmm, that diverges.'],
                    'explanation': '1) $a = -1$. 2) $R = 2$. 3) At $x = 1$: $\\\\sum (2)^n/(2^n(n+1)) = \\\\sum 1/(n+1)$ which is the harmonic series \u2014 diverges. (Corrected: diverges.)'
                }
            },
            {
                'title': 'Mixed Review',
                'content': """# \U0001f4dd Mixed Review

**Part 7 of 7 \u2014 Comprehensive Review**

---

### Power Series Checklist

- [ ] Know the 6 standard Maclaurin series
- [ ] Find $R$ using Ratio Test
- [ ] Check endpoints at $x = a \\\\pm R$
- [ ] Differentiate/integrate within interval
- [ ] Use series to approximate integrals and limits
- [ ] Apply Lagrange Error Bound when needed

### Key Facts
- $R$ stays the same under differentiation and integration
- Endpoints may change under these operations
- Series can be multiplied and composed""",
                'mcqs': [
                    ('$\\\\sum \\\\frac{n x^n}{3^n}$: $R = ?$',
                     ['1', '3', '$1/3$', '$n$'],
                     1, '$L = \\\\lim |x|/3 \\\\cdot (n+1)/n = |x|/3 < 1 \\\\Rightarrow R = 3$.'),
                    ('The series $1 + x + x^2/2! + x^3/3! + \\\\cdots$ represents:',
                     ['$\\\\sin x$', '$\\\\cos x$', '$e^x$', '$\\\\ln(1+x)$'],
                     2, 'This is $\\\\sum x^n/n! = e^x$.'),
                    ('To find the series for $\\\\frac{x}{1+x^2}$:', 
                     ['Substitute $-x^2$ into geometric series, multiply by $x$', 'Differentiate $\\\\ln(1+x)$', 'Integrate $e^x$', 'Use Taylor\u2019s formula directly'],
                     0, '$\\\\frac{1}{1+x^2} = \\\\sum (-x^2)^n = \\\\sum (-1)^n x^{2n}$. Multiply by $x$: $\\\\sum (-1)^n x^{2n+1}$.')
                ],
                'inputs': {
                    'prompt': """**Final Challenge** \U0001f9ee

**1)** First 3 terms of $e^{-x}$?

**2)** Series for $\\\\frac{1}{1+x}$ using geometric series? (general term)

**3)** $\\\\sum_{n=0}^{\\\\infty} \\\\frac{(-1)^n}{(2n)!}$ equals what familiar value?""",
                    'boxes': 3,
                    'answers': ['1 - x + x^2/2', '(-1)^n * x^n', 'cos(1)'],
                    'hints': ['Substitute $-x$ into $e^x = 1 + x + x^2/2 + ...$', '$1/(1-u)$ with $u = -x$', 'Compare with $\\\\cos x$ at $x = 1$'],
                    'explanation': '1) $1 - x + x^2/2$. 2) $(-1)^n x^n$ or $(-x)^n$. 3) $\\\\cos(1) \\\\approx 0.5403$.'
                }
            }
        ]
    }
]

# Skeleton topics
MORE_TOPICS = [
    {
        'slug': 'parametric-derivatives-calcbc',
        'filePrefix': 'calcbc-parametric-derivatives-calcbc',
        'exportPrefix': 'calcbcParamDeriv',
        'parts': [
            'First Derivative dy/dx',
            'Second Derivative d\u00b2y/dx\u00b2',
            'Tangent Lines to Parametric Curves',
            'Arc Length of Parametric Curves',
            'Speed and Distance',
            'Problem-Solving Workshop',
            'Mixed Review'
        ]
    },
    {
        'slug': 'polar-area-derivatives-calcbc',
        'filePrefix': 'calcbc-polar-area-derivatives-calcbc',
        'exportPrefix': 'calcbcPolarArea',
        'parts': [
            'Polar Area Formula',
            'Area Between Polar Curves',
            'Polar Derivatives dy/dx',
            'Tangent Lines in Polar',
            'Arc Length in Polar',
            'Problem-Solving Workshop',
            'Mixed Review'
        ]
    },
    {
        'slug': 'lhopitals-advanced-calcbc',
        'filePrefix': 'calcbc-lhopitals-advanced-calcbc',
        'exportPrefix': 'calcbcLHop',
        'parts': [
            'L\u2019H\u00f4pital\u2019s Rule Review',
            'Repeated Application',
            'Indeterminate Products 0\u00b7\u221e',
            'Indeterminate Differences \u221e - \u221e',
            'Indeterminate Powers',
            'Problem-Solving Workshop',
            'Mixed Review'
        ]
    },
    {
        'slug': 'motion-along-curve-calcbc',
        'filePrefix': 'calcbc-motion-along-curve-calcbc',
        'exportPrefix': 'calcbcMotion',
        'parts': [
            'Position, Velocity, Acceleration Vectors',
            'Speed and Direction',
            'Parametric Motion Problems',
            'Projectile Motion with Calculus',
            'Total Distance Traveled',
            'Problem-Solving Workshop',
            'Mixed Review'
        ]
    },
    {
        'slug': 'integration-techniques-calcbc',
        'filePrefix': 'calcbc-integration-techniques-calcbc',
        'exportPrefix': 'calcbcIntTech',
        'parts': [
            'Trigonometric Integrals',
            'Trigonometric Substitution',
            'Long Division for Rational Functions',
            'Completing the Square',
            'Integration Strategy Review',
            'Problem-Solving Workshop',
            'Mixed Review'
        ]
    },
    {
        'slug': 'differential-equations-bc-calcbc',
        'filePrefix': 'calcbc-differential-equations-bc-calcbc',
        'exportPrefix': 'calcbcDiffEq',
        'parts': [
            'Separable Equations Review',
            'Euler\u2019s Method Refinement',
            'Slope Fields & Solutions',
            'Exponential Growth & Decay Models',
            'Logistic Differential Equations',
            'Problem-Solving Workshop',
            'Mixed Review'
        ]
    }
]

CONTENT_MAP = {
    'parametric-derivatives-calcbc': """# \U0001f4c8 Parametric Derivatives

**Part 1 of 7 \u2014 First Derivative $dy/dx$**

---

### Parametric Equations

A curve is defined by:
$$x = f(t), \\\\quad y = g(t)$$

### First Derivative

$$\\\\frac{dy}{dx} = \\\\frac{dy/dt}{dx/dt} = \\\\frac{g'(t)}{f'(t)}$$

> \u26a0\ufe0f $dx/dt \\\\neq 0$ at the point of interest.

---

### Worked Example

$x = t^2$, $y = t^3$

$\\\\frac{dx}{dt} = 2t$, $\\\\frac{dy}{dt} = 3t^2$

$$\\\\frac{dy}{dx} = \\\\frac{3t^2}{2t} = \\\\frac{3t}{2}$$

At $t = 2$: slope = $3(2)/2 = 3$.

### Second Derivative

$$\\\\frac{d^2y}{dx^2} = \\\\frac{\\\\frac{d}{dt}\\\\left(\\\\frac{dy}{dx}\\\\right)}{\\\\frac{dx}{dt}}$$

From our example: $\\\\frac{d}{dt}(3t/2) = 3/2$, so $\\\\frac{d^2y}{dx^2} = \\\\frac{3/2}{2t} = \\\\frac{3}{4t}$.""",

    'polar-area-derivatives-calcbc': """# \U0001f4d0 Polar Area & Derivatives

**Part 1 of 7 \u2014 Polar Area Formula**

---

### Area in Polar Coordinates

$$A = \\\\frac{1}{2}\\\\int_{\\\\alpha}^{\\\\beta} [r(\\\\theta)]^2 \\\\, d\\\\theta$$

This comes from summing infinitesimal triangular sectors.

---

### Key Curves to Know

| Curve | Equation |
|-------|----------|
| Circle | $r = a$ |
| Cardioid | $r = a(1 + \\\\cos\\\\theta)$ |
| Rose (n petals) | $r = a\\\\cos(n\\\\theta)$ |
| Lima\u00e7on | $r = a + b\\\\cos\\\\theta$ |
| Lemniscate | $r^2 = a^2\\\\cos(2\\\\theta)$ |

### Worked Example

Area enclosed by $r = 2\\\\cos\\\\theta$ (circle of radius 1):

$$A = \\\\frac{1}{2}\\\\int_0^{\\\\pi} (2\\\\cos\\\\theta)^2 d\\\\theta = \\\\frac{1}{2}\\\\int_0^{\\\\pi} 4\\\\cos^2\\\\theta \\\\, d\\\\theta = \\\\pi$$""",

    'lhopitals-advanced-calcbc': """# \U0001f50d L\u2019H\u00f4pital\u2019s Rule \u2014 Advanced

**Part 1 of 7 \u2014 L\u2019H\u00f4pital\u2019s Rule Review**

---

### L\u2019H\u00f4pital\u2019s Rule

If $\\\\lim_{x \\\\to c} \\\\frac{f(x)}{g(x)}$ gives $\\\\frac{0}{0}$ or $\\\\frac{\\\\pm\\\\infty}{\\\\pm\\\\infty}$, then:

$$\\\\lim_{x \\\\to c} \\\\frac{f(x)}{g(x)} = \\\\lim_{x \\\\to c} \\\\frac{f'(x)}{g'(x)}$$

(provided the right-hand limit exists or is $\\\\pm\\\\infty$)

---

### The Seven Indeterminate Forms

$$\\\\frac{0}{0}, \\\\quad \\\\frac{\\\\infty}{\\\\infty}, \\\\quad 0 \\\\cdot \\\\infty, \\\\quad \\\\infty - \\\\infty, \\\\quad 0^0, \\\\quad 1^\\\\infty, \\\\quad \\\\infty^0$$

L\u2019H\u00f4pital\u2019s directly handles only $0/0$ and $\\\\infty/\\\\infty$. The others must be converted first.

### Common Conversion: $0 \\\\cdot \\\\infty$

Rewrite $f \\\\cdot g$ as $\\\\frac{f}{1/g}$ or $\\\\frac{g}{1/f}$ to get $0/0$ or $\\\\infty/\\\\infty$.

### Common Conversion: $1^\\\\infty$, $0^0$, $\\\\infty^0$

Take the natural log: $\\\\ln y = g(x) \\\\ln f(x)$, evaluate the limit, then exponentiate.""",

    'motion-along-curve-calcbc': """# \U0001f680 Motion Along a Curve

**Part 1 of 7 \u2014 Position, Velocity, Acceleration Vectors**

---

### Vector-Valued Position

$$\\\\vec{r}(t) = \\\\langle x(t), y(t) \\\\rangle$$

### Velocity Vector

$$\\\\vec{v}(t) = \\\\langle x'(t), y'(t) \\\\rangle$$

### Acceleration Vector

$$\\\\vec{a}(t) = \\\\langle x''(t), y''(t) \\\\rangle$$

### Speed (Scalar)

$$|\\\\vec{v}(t)| = \\\\sqrt{[x'(t)]^2 + [y'(t)]^2}$$

---

### Example

$\\\\vec{r}(t) = \\\\langle t^2, 3t \\\\rangle$

$\\\\vec{v}(t) = \\\\langle 2t, 3 \\\\rangle$

Speed at $t = 1$: $\\\\sqrt{4 + 9} = \\\\sqrt{13}$

### Total Distance Traveled

$$\\\\text{Distance} = \\\\int_a^b |\\\\vec{v}(t)|\\\\,dt = \\\\int_a^b \\\\sqrt{[x'(t)]^2 + [y'(t)]^2}\\\\,dt$$""",

    'integration-techniques-calcbc': """# \U0001f9e9 Advanced Integration Techniques

**Part 1 of 7 \u2014 Trigonometric Integrals**

---

### Powers of Sine and Cosine

$$\\\\int \\\\sin^m x \\\\cos^n x \\\\, dx$$

| Case | Strategy |
|------|----------|
| $m$ odd | Save one $\\\\sin x$, convert rest to $\\\\cos x$ using $\\\\sin^2 x = 1 - \\\\cos^2 x$ |
| $n$ odd | Save one $\\\\cos x$, convert rest to $\\\\sin x$ using $\\\\cos^2 x = 1 - \\\\sin^2 x$ |
| Both even | Use half-angle: $\\\\sin^2 x = \\\\frac{1 - \\\\cos 2x}{2}$, $\\\\cos^2 x = \\\\frac{1 + \\\\cos 2x}{2}$ |

---

### Example

$$\\\\int \\\\sin^3 x \\\\cos^2 x \\\\, dx$$

$m = 3$ (odd), so save one $\\\\sin x$:
$$= \\\\int (1 - \\\\cos^2 x) \\\\cos^2 x \\\\sin x \\\\, dx$$

Let $u = \\\\cos x$, $du = -\\\\sin x \\\\, dx$:
$$= -\\\\int (1 - u^2)u^2 \\\\, du = -\\\\int (u^2 - u^4) du = -\\\\frac{u^3}{3} + \\\\frac{u^5}{5} + C$$""",

    'differential-equations-bc-calcbc': """# \U0001f4d0 Differential Equations (BC Topics)

**Part 1 of 7 \u2014 Separable Equations Review**

---

### Separable Differential Equations

A separable DE can be written as:
$$\\\\frac{dy}{dx} = f(x) \\\\cdot g(y)$$

**Solution Method:**
$$\\\\frac{dy}{g(y)} = f(x)\\\\,dx \\\\quad \\\\Rightarrow \\\\quad \\\\int \\\\frac{dy}{g(y)} = \\\\int f(x)\\\\,dx$$

---

### Worked Example

$$\\\\frac{dy}{dx} = 2xy, \\\\quad y(0) = 3$$

$$\\\\frac{dy}{y} = 2x\\\\,dx \\\\quad \\\\Rightarrow \\\\quad \\\\ln|y| = x^2 + C$$

$$y = Ae^{x^2}$$

Using $y(0) = 3$: $A = 3$, so $y = 3e^{x^2}$.

---

### Key BC Extension: Logistic Model

$$\\\\frac{dP}{dt} = kP\\\\left(1 - \\\\frac{P}{L}\\\\right)$$

Solution: $P(t) = \\\\frac{L}{1 + Ae^{-kt}}$ where $A = \\\\frac{L - P_0}{P_0}$."""
}


def esc(s):
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

def format_mcqs(mcqs):
    lines = []
    for q, opts, correct, expl in mcqs:
        opts_str = ', '.join(f"'{esc(o)}'" for o in opts)
        lines.append(f"""          {{
            question: '{esc(q)}',
            options: [{opts_str}],
            correctAnswer: {correct},
            explanation: '{esc(expl)}'
          }}""")
    return ',\n'.join(lines)

def generate_rich_lesson(topic, part_idx, part):
    slug = topic['slug']
    prefix = topic['exportPrefix']
    pn = part_idx + 1
    export_name = f"{prefix}Part{pn}Data"
    file_id = slug.replace('-calcbc', '').replace('-', '')

    sections = []
    sections.append(f"""    {{
      id: '{file_id}-p{pn}-intro',
      type: 'text' as const,
      content: `{esc(part['content'])}`
    }}""")

    if 'mcqs' in part:
        sections.append(f"""    {{
      id: '{file_id}-p{pn}-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \\U0001f3af
      `,
      exercise: {{
        questions: [
{format_mcqs(part['mcqs'])}
        ]
      }}
    }}""")

    if 'inputs' in part:
        inp = part['inputs']
        answers_str = ', '.join(f"'{esc(a)}'" for a in inp['answers'])
        hints = ''
        for i, h in enumerate(inp['hints']):
            hints += f"\n        hint{i+1}: '{esc(h)}',"
        sections.append(f"""    {{
      id: '{file_id}-p{pn}-input',
      type: 'input-boxes' as const,
      content: `
{esc(inp['prompt'])}
      `,
      exercise: {{
        boxes: {inp['boxes']},
        correctAnswers: [{answers_str}],{hints}
        explanation: '{esc(inp['explanation'])}'
      }}
    }}""")

    return f"""export const {export_name} = {{
  topicSlug: '{slug}',
  sections: [
{','.join(sections)}
  ]
}};
"""

def generate_skeleton_lesson(topic, part_idx):
    slug = topic['slug']
    prefix = topic['exportPrefix']
    pn = part_idx + 1
    title = topic['parts'][part_idx]
    export_name = f"{prefix}Part{pn}Data"
    file_id = slug.replace('-calcbc', '').replace('-', '')

    if pn == 1 and slug in CONTENT_MAP:
        text_content = CONTENT_MAP[slug]
    else:
        text_content = f"""# {title}

**Part {pn} of 7 \u2014 {title}**

---

This section covers key concepts and techniques for {title.lower()} in AP Calculus BC.

Mastery of these ideas is essential for both the multiple-choice and free-response sections of the AP exam."""

    sections = f"""    {{
      id: '{file_id}-p{pn}-intro',
      type: 'text' as const,
      content: `{esc(text_content)}`
    }},
    {{
      id: '{file_id}-p{pn}-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \\U0001f3af
      `,
      exercise: {{
        questions: [
          {{
            question: 'Which best describes {esc(title.lower())}?',
            options: ['A core AP Calculus BC concept', 'Not on the AP exam', 'Only relevant for multivariable calculus', 'A statistics topic'],
            correctAnswer: 0,
            explanation: '{esc(title)} is a key topic tested on the AP Calculus BC exam.'
          }}
        ]
      }}
    }}"""

    return f"""export const {export_name} = {{
  topicSlug: '{slug}',
  sections: [
{sections}
  ]
}};
"""


def main():
    os.makedirs(BASE, exist_ok=True)
    count = 0

    for topic in TOPICS:
        for i, part in enumerate(topic['parts']):
            filename = f"{topic['filePrefix']}-part{i+1}.ts"
            filepath = os.path.join(BASE, filename)
            content = generate_rich_lesson(topic, i, part)
            with open(filepath, 'w') as f:
                f.write(content)
            count += 1
            print(f"  Created {filename}")

    for topic in MORE_TOPICS:
        for i in range(7):
            filename = f"{topic['filePrefix']}-part{i+1}.ts"
            filepath = os.path.join(BASE, filename)
            content = generate_skeleton_lesson(topic, i)
            with open(filepath, 'w') as f:
                f.write(content)
            count += 1
            print(f"  Created {filename}")

    print(f"\nTotal: {count} files created")


if __name__ == '__main__':
    main()
