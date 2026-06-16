import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Partial Fraction Decomposition (AP Precalculus).
 * Registry key / DB Topic.slug: 'partial-fraction-decomposition'.
 * 7 parts, gold-standard structure:
 *   1. Why & when — proper vs. improper, factoring the denominator
 *   2. Distinct linear factors (the core case) + the cover-up shortcut
 *   3. Repeated linear factors (the ladder of powers)
 *   4. Irreducible quadratic factors (Bx + C numerators)
 *   5. Improper rational functions — divide first, then decompose
 *   6. Strategy: choosing the right setup + a full worked synthesis
 *   7. Mixed mastery + a 3-question Exit Quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every coefficient, index, and worked step was re-checked with a CAS before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'partial-fraction-decomposition',
    sections: [
      {
        id: 'pfd1-intro',
        type: 'text' as const,
        content: `# 🧩 Partial Fraction Decomposition

**Part 1 of 7 — Why, When, and Getting Ready**

---

### Topics in This Part

| Section |
|---------|
| What "decomposition" means |
| Proper vs. improper rational functions |
| Factoring the denominator first |

> 🔑 **Key Concept:** Adding fractions glues several simple pieces into one complicated fraction. **Partial fraction decomposition runs that process backwards** — it splits a complicated rational function back into the simple pieces it came from. Those pieces are far easier to integrate, expand into series, or graph.`,
      },
      {
        id: 'pfd1-what',
        type: 'text' as const,
        content: `## Running Addition in Reverse

You already know how to combine fractions over a common denominator:

$$\\frac{3}{x-2} + \\frac{2}{x+1} = \\frac{3(x+1) + 2(x-2)}{(x-2)(x+1)} = \\frac{5x - 1}{(x-2)(x+1)}$$

**Decomposition** is the reverse trip. Starting from the messy single fraction, we recover the pieces:

$$\\frac{5x - 1}{(x-2)(x+1)} = \\frac{3}{x-2} + \\frac{2}{x+1}$$

Each piece on the right is called a **partial fraction**. The whole point of this unit is to find those numerators ($3$ and $2$ here) without being told them in advance.

> 💡 **Why bother?** In calculus, $\\displaystyle\\int \\frac{5x-1}{(x-2)(x+1)}\\,dx$ looks frightening, but $\\displaystyle\\int \\frac{3}{x-2}\\,dx + \\int \\frac{2}{x+1}\\,dx$ is two easy logarithms. The split is the hard part — and that is exactly what this lesson teaches.`,
      },
      {
        id: 'pfd1-proper',
        type: 'text' as const,
        content: `## Proper vs. Improper

A rational function is $\\dfrac{N(x)}{D(x)}$, a ratio of two polynomials. Compare the **degrees** (highest powers):

| Type | Condition | Example |
|------|-----------|---------|
| **Proper** | $\\deg(N) < \\deg(D)$ | $\\dfrac{5x-1}{x^2 - x - 2}$  (degree $1$ over degree $2$) |
| **Improper** | $\\deg(N) \\ge \\deg(D)$ | $\\dfrac{x^2 + 1}{x - 1}$  (degree $2$ over degree $1$) |

> ⚠️ **The golden rule:** Partial fraction decomposition only works directly on a **proper** fraction. If the fraction is improper, you must do polynomial long division *first* (that is Part 5). For Parts 1–4 every fraction will already be proper.`,
      },
      {
        id: 'pfd1-check-proper',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which rational function is **proper** (ready to decompose directly)?',
              options: [
                '$\\dfrac{x^2 + 3}{x + 4}$',
                '$\\dfrac{3x + 7}{x^2 - 9}$',
                '$\\dfrac{x^3}{x^2 + 1}$',
                '$\\dfrac{x^2 - x}{x^2 + 5}$',
              ],
              correctAnswer: 1,
              explanation: 'Proper means the numerator degree is **strictly less** than the denominator degree. $\\frac{3x+7}{x^2-9}$ is degree $1$ over degree $2$. The others are degree $\\ge$ denominator, so they are improper and need long division first.',
            },
            {
              question: 'Partial fraction decomposition is essentially…',
              options: [
                'multiplying two fractions together',
                'adding fractions over a common denominator',
                'the reverse of adding fractions — splitting one fraction into simpler pieces',
                'a way to factor a numerator',
              ],
              correctAnswer: 2,
              explanation: 'Decomposition undoes the "combine over a common denominator" step, recovering the simple partial fractions that were added together.',
            },
          ],
        },
      },
      {
        id: 'pfd1-factor',
        type: 'text' as const,
        content: `## Step Zero: Factor the Denominator

The *shape* of the decomposition is dictated entirely by how the denominator **factors**. So before anything else, factor $D(x)$ completely.

### Example

$$\\frac{5x - 1}{x^2 - x - 2} \\;=\\; \\frac{5x - 1}{(x-2)(x+1)}$$

We look for two numbers that multiply to $-2$ and add to $-1$: those are $-2$ and $+1$, giving $(x-2)(x+1)$.

The kinds of factors you can get are:

| Factor type | Looks like | Covered in |
|-------------|-----------|------------|
| Distinct linear | $(x-2)(x+1)$ | Part 2 |
| Repeated linear | $(x+1)^2$ | Part 3 |
| Irreducible quadratic | $x^2 + 1$ | Part 4 |

> 🔑 You cannot set up the decomposition until the denominator is fully factored. Factoring is *Step Zero* every single time.`,
      },
      {
        id: 'pfd1-factor-drill',
        type: 'input-boxes' as const,
        content: `**Factor the Denominator** 🧮

Factor each denominator into linear factors of the form $(x \\pm a)(x \\pm b)$, then enter the two **constants** (the numbers, with sign) in increasing order.

**1)** $x^2 - x - 6 = (x + \\,?\\,)(x + \\,?\\,)$  — enter the two constants, smallest first.

For example, $x^2 + 5x + 6 = (x+2)(x+3)$, so you would enter $2$ then $3$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['-3', '2'],
          hint1: 'Find two numbers that **multiply** to $-6$ and **add** to $-1$ (the middle coefficient).',
          hint2: 'Those numbers are $-3$ and $+2$: $(-3)(2) = -6$ and $-3 + 2 = -1$. ✓',
          hint3: 'So $x^2 - x - 6 = (x - 3)(x + 2)$. The constants are $-3$ and $2$; smallest first is $-3$, then $2$.',
          explanation: '$x^2 - x - 6 = (x - 3)(x + 2)$. Written as $(x + (-3))(x + 2)$, the constants are $-3$ and $2$.',
        },
      },
      {
        id: 'pfd1-classify',
        type: 'dropdown-select' as const,
        content: `**Proper or Improper?** 🔽

Classify each rational function by comparing numerator and denominator degrees.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{4x - 1}{x^2 + x}$:', options: ['proper', 'improper'] },
            { label: '$\\dfrac{x^3 - 2}{x^2 + 5}$:', options: ['proper', 'improper'] },
            { label: '$\\dfrac{x^2 + 7}{x^2 - 4}$:', options: ['proper', 'improper'] },
          ],
          correctAnswers: ['proper', 'improper', 'improper'],
          hint1: 'Proper means numerator degree is **strictly less** than denominator degree.',
          hint2: 'Degree $1$ over degree $2$ is proper; degree $3$ over degree $2$ is improper.',
          hint3: 'When the degrees are **equal** (degree $2$ over degree $2$), the fraction is improper — it needs division first.',
          explanation: '$\\frac{4x-1}{x^2+x}$ is degree $1$ over $2$ → proper. $\\frac{x^3-2}{x^2+5}$ is $3$ over $2$ → improper. $\\frac{x^2+7}{x^2-4}$ is $2$ over $2$ (equal) → improper.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'partial-fraction-decomposition',
    sections: [
      {
        id: 'pfd2-intro',
        type: 'text' as const,
        content: `# 🧩 Partial Fraction Decomposition

**Part 2 of 7 — Distinct Linear Factors**

---

> 🔑 **The Core Case:** When the denominator factors into **different** linear factors, each factor gets its own partial fraction with a single **unknown constant** on top.`,
      },
      {
        id: 'pfd2-setup',
        type: 'text' as const,
        content: `## The Setup

For each distinct linear factor $(x - r)$ in the denominator, write a term $\\dfrac{A}{x - r}$ with an unknown constant $A$:

$$\\frac{5x - 1}{(x-2)(x+1)} = \\frac{A}{x-2} + \\frac{B}{x+1}$$

To find $A$ and $B$, **clear the denominators** by multiplying both sides by $(x-2)(x+1)$:

$$5x - 1 = A(x+1) + B(x-2)$$

This equation must hold for **every** $x$. That gives us two reliable ways to find the constants.`,
      },
      {
        id: 'pfd2-substitution',
        type: 'text' as const,
        content: `## Method: Strategic Substitution

Because $5x - 1 = A(x+1) + B(x-2)$ is true for all $x$, we may plug in **any** value. The clever move is to choose $x$-values that make a factor zero, killing one unknown at a time.

**Let $x = 2$** (kills the $B$ term, since $x - 2 = 0$):
$$5(2) - 1 = A(2+1) + B(0) \\;\\Rightarrow\\; 9 = 3A \\;\\Rightarrow\\; A = 3$$

**Let $x = -1$** (kills the $A$ term, since $x + 1 = 0$):
$$5(-1) - 1 = A(0) + B(-1-2) \\;\\Rightarrow\\; -6 = -3B \\;\\Rightarrow\\; B = 2$$

So the decomposition is:

$$\\frac{5x - 1}{(x-2)(x+1)} = \\frac{3}{x-2} + \\frac{2}{x+1}$$

> ✅ **Check:** $\\dfrac{3}{x-2} + \\dfrac{2}{x+1} = \\dfrac{3(x+1) + 2(x-2)}{(x-2)(x+1)} = \\dfrac{5x - 1}{(x-2)(x+1)}$ ✓`,
      },
      {
        id: 'pfd2-check-setup',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the correct **setup** for $\\dfrac{7x - 1}{(x+1)(x-3)}$?',
              options: [
                '$\\dfrac{A}{x+1} + \\dfrac{B}{x-3}$',
                '$\\dfrac{Ax + B}{(x+1)(x-3)}$',
                '$\\dfrac{A}{x+1} + \\dfrac{Bx + C}{x-3}$',
                '$\\dfrac{A}{(x+1)(x-3)}$',
              ],
              correctAnswer: 0,
              explanation: 'Two **distinct linear** factors → two terms, each a single constant over a linear factor: $\\frac{A}{x+1} + \\frac{B}{x-3}$.',
            },
            {
              question: 'To find the constant over $(x-3)$ by strategic substitution, which value of $x$ should you plug in?',
              options: ['$x = 0$', '$x = 3$', '$x = -3$', '$x = -1$'],
              correctAnswer: 1,
              explanation: 'Substitute the value that makes that factor zero. $x - 3 = 0$ at $x = 3$, which cancels every other term and isolates the constant over $(x-3)$.',
            },
          ],
        },
      },
      {
        id: 'pfd2-coverup',
        type: 'text' as const,
        content: `## The Cover-Up Shortcut

Strategic substitution is so reliable for distinct linear factors that it has a one-line version called the **cover-up method**.

To find the numerator over $(x - r)$: **cover up** the factor $(x - r)$ in the original fraction, then evaluate everything that remains at $x = r$.

### Example: $\\dfrac{7x - 1}{(x+1)(x-3)}$

- **Over $(x+1)$:** cover $(x+1)$, evaluate $\\dfrac{7x-1}{x-3}$ at $x = -1$: $\\;\\dfrac{7(-1)-1}{-1-3} = \\dfrac{-8}{-4} = 2$.
- **Over $(x-3)$:** cover $(x-3)$, evaluate $\\dfrac{7x-1}{x+1}$ at $x = 3$: $\\;\\dfrac{7(3)-1}{3+1} = \\dfrac{20}{4} = 5$.

$$\\frac{7x - 1}{(x+1)(x-3)} = \\frac{2}{x+1} + \\frac{5}{x-3}$$

> 💡 The cover-up method *is* strategic substitution — it just skips writing out the cleared-denominator equation. It works for **distinct linear factors only**.`,
      },
      {
        id: 'pfd2-coverup-drill',
        type: 'input-boxes' as const,
        content: `**Decompose with Cover-Up** 🧮

Decompose $\\dfrac{x + 7}{(x-1)(x+3)} = \\dfrac{A}{x-1} + \\dfrac{B}{x+3}$.

Enter $A$ in the first box and $B$ in the second box.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', '-1'],
          hint1: 'For $A$: cover $(x-1)$ and evaluate $\\dfrac{x+7}{x+3}$ at $x = 1$.',
          hint2: '$A = \\dfrac{1+7}{1+3} = \\dfrac{8}{4} = 2$.  For $B$: cover $(x+3)$ and evaluate $\\dfrac{x+7}{x-1}$ at $x = -3$.',
          hint3: '$B = \\dfrac{-3+7}{-3-1} = \\dfrac{4}{-4} = -1$.',
          explanation: '$A = 2$ and $B = -1$, so $\\dfrac{x+7}{(x-1)(x+3)} = \\dfrac{2}{x-1} - \\dfrac{1}{x+3}$.',
        },
      },
      {
        id: 'pfd2-substitution-check',
        type: 'multiple-choice' as const,
        content: `**Trace the Substitution** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $\\dfrac{4x + 1}{x(x+1)} = \\dfrac{A}{x} + \\dfrac{B}{x+1}$, clearing denominators gives $4x + 1 = A(x+1) + Bx$. Substituting $x = 0$ yields:',
              options: ['$A = 1$', '$A = 4$', '$B = 1$', '$A = -1$'],
              correctAnswer: 0,
              explanation: 'At $x = 0$ the $Bx$ term vanishes: $4(0)+1 = A(0+1)$, so $1 = A$, i.e. $A = 1$.',
            },
            {
              question: 'Continuing, substitute $x = -1$ into $4x + 1 = A(x+1) + Bx$ to find $B$:',
              options: ['$B = 3$', '$B = -3$', '$B = 1$', '$B = 4$'],
              correctAnswer: 0,
              explanation: 'At $x = -1$ the $A(x+1)$ term vanishes: $4(-1)+1 = B(-1)$, so $-3 = -B$, giving $B = 3$. Thus $\\dfrac{4x+1}{x(x+1)} = \\dfrac{1}{x} + \\dfrac{3}{x+1}$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'partial-fraction-decomposition',
    sections: [
      {
        id: 'pfd3-intro',
        type: 'text' as const,
        content: `# 🧩 Partial Fraction Decomposition

**Part 3 of 7 — Repeated Linear Factors**

---

> 🔑 **The Twist:** When a linear factor is **repeated** (raised to a power), one term is not enough. You need a term for **every** power from $1$ up to the highest.`,
      },
      {
        id: 'pfd3-setup',
        type: 'text' as const,
        content: `## The Ladder of Powers

A factor like $(x+1)^2$ contributes a *ladder* of terms — one for each power up to the exponent:

$$\\frac{3x + 5}{(x+1)^2} = \\frac{A}{x+1} + \\frac{B}{(x+1)^2}$$

In general, $(x - r)^k$ contributes:

$$\\frac{A_1}{x-r} + \\frac{A_2}{(x-r)^2} + \\cdots + \\frac{A_k}{(x-r)^k}$$

> ⚠️ **Common mistake:** writing only $\\dfrac{A}{(x+1)^2}$ and stopping. You must include the $\\dfrac{A}{x+1}$ term too — every power from $1$ to $k$ appears.`,
      },
      {
        id: 'pfd3-worked',
        type: 'text' as const,
        content: `## Worked Example: $\\dfrac{3x + 5}{(x+1)^2}$

Clear denominators by multiplying by $(x+1)^2$:

$$3x + 5 = A(x+1) + B$$

**Let $x = -1$** (kills the $A$ term): $\\;3(-1) + 5 = B \\;\\Rightarrow\\; B = 2$.

Now compare coefficients of $x$. The right side is $Ax + (A + B)$, so the coefficient of $x$ gives $A = 3$.

$$\\frac{3x + 5}{(x+1)^2} = \\frac{3}{x+1} + \\frac{2}{(x+1)^2}$$

> ✅ **Check:** $\\dfrac{3}{x+1} + \\dfrac{2}{(x+1)^2} = \\dfrac{3(x+1) + 2}{(x+1)^2} = \\dfrac{3x + 5}{(x+1)^2}$ ✓

> 💡 With repeated factors, cover-up gives you the **highest-power** numerator immediately ($B$ here), but you finish the lower ones by matching coefficients.`,
      },
      {
        id: 'pfd3-check-setup',
        type: 'dropdown-select' as const,
        content: `**Choose the Correct Setup** 🔽

Match each denominator to the right decomposition form (use $A, B, C$ for the unknown constants).`,
        exercise: {
          dropdowns: [
            {
              label: 'Setup for $\\dfrac{2x+1}{(x-2)^2}$:',
              options: [
                '$\\dfrac{A}{x-2} + \\dfrac{B}{(x-2)^2}$',
                '$\\dfrac{A}{(x-2)^2}$',
                '$\\dfrac{A}{x-2} + \\dfrac{B}{x-2}$',
                '$\\dfrac{Ax+B}{(x-2)^2}$',
              ],
            },
            {
              label: 'Setup for $\\dfrac{x}{(x-1)(x+3)^2}$:',
              options: [
                '$\\dfrac{A}{x-1} + \\dfrac{B}{x+3} + \\dfrac{C}{(x+3)^2}$',
                '$\\dfrac{A}{x-1} + \\dfrac{B}{(x+3)^2}$',
                '$\\dfrac{A}{x-1} + \\dfrac{Bx+C}{(x+3)^2}$',
                '$\\dfrac{A}{(x-1)(x+3)^2}$',
              ],
            },
          ],
          correctAnswers: [
            '$\\dfrac{A}{x-2} + \\dfrac{B}{(x-2)^2}$',
            '$\\dfrac{A}{x-1} + \\dfrac{B}{x+3} + \\dfrac{C}{(x+3)^2}$',
          ],
          hint1: 'A factor raised to power $k$ needs one term for **each** power from $1$ up to $k$.',
          hint2: '$(x-2)^2$ needs two terms: one over $x-2$ and one over $(x-2)^2$.',
          hint3: 'The distinct factor $(x-1)$ gives $\\dfrac{A}{x-1}$; the repeated $(x+3)^2$ gives $\\dfrac{B}{x+3} + \\dfrac{C}{(x+3)^2}$.',
          explanation: 'Every power of a repeated factor gets its own constant numerator: $(x-2)^2 \\to \\frac{A}{x-2}+\\frac{B}{(x-2)^2}$, and $(x+3)^2 \\to \\frac{B}{x+3}+\\frac{C}{(x+3)^2}$.',
        },
      },
      {
        id: 'pfd3-drill',
        type: 'input-boxes' as const,
        content: `**Decompose a Repeated Factor** 🧮

Decompose $\\dfrac{x - 3}{(x-2)^2} = \\dfrac{A}{x-2} + \\dfrac{B}{(x-2)^2}$.

Enter $A$ in the first box and $B$ in the second box.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1', '-1'],
          hint1: 'Clear denominators: $x - 3 = A(x-2) + B$.',
          hint2: 'Let $x = 2$ to find $B$: $\\;2 - 3 = B \\Rightarrow B = -1$.',
          hint3: 'Match the coefficient of $x$: the right side is $Ax + (-2A + B)$, so $A = 1$.',
          explanation: '$x - 3 = A(x-2) + B$. At $x=2$: $B = -1$. Coefficient of $x$: $A = 1$. So $\\dfrac{x-3}{(x-2)^2} = \\dfrac{1}{x-2} - \\dfrac{1}{(x-2)^2}$.',
        },
      },
      {
        id: 'pfd3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'When decomposing $\\dfrac{2x+1}{(x-2)^2}$, the highest-power constant $B$ (over $(x-2)^2$) is found by substituting $x = 2$. What is $B$?',
              options: ['$5$', '$2$', '$1$', '$-5$'],
              correctAnswer: 0,
              explanation: 'Clearing gives $2x + 1 = A(x-2) + B$. At $x = 2$: $2(2)+1 = B$, so $B = 5$.',
            },
            {
              question: 'Why does $(x+1)^2$ require **two** partial-fraction terms?',
              options: [
                'Because every power from $1$ up to the exponent needs its own constant numerator',
                'Because $(x+1)^2$ is irreducible',
                'Because the numerator must be linear',
                'It does not — one term is enough',
              ],
              correctAnswer: 0,
              explanation: 'A repeated factor $(x-r)^k$ contributes a term for each power $1, 2, \\ldots, k$. For $(x+1)^2$ that is $\\frac{A}{x+1} + \\frac{B}{(x+1)^2}$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'partial-fraction-decomposition',
    sections: [
      {
        id: 'pfd4-intro',
        type: 'text' as const,
        content: `# 🧩 Partial Fraction Decomposition

**Part 4 of 7 — Irreducible Quadratic Factors**

---

> 🔑 **The Rule:** Over an **irreducible quadratic** factor (one that won't factor into real linear pieces, like $x^2 + 1$), the numerator is **linear**: $Bx + C$, not just a constant.`,
      },
      {
        id: 'pfd4-irreducible',
        type: 'text' as const,
        content: `## What "Irreducible" Means

A quadratic is **irreducible** over the reals when it has no real roots — its discriminant $b^2 - 4ac$ is negative, so it never crosses zero and cannot split into real linear factors.

| Quadratic | Discriminant | Status |
|-----------|--------------|--------|
| $x^2 + 1$ | $0 - 4 = -4 < 0$ | irreducible |
| $x^2 + x + 1$ | $1 - 4 = -3 < 0$ | irreducible |
| $x^2 - 4$ | $0 + 16 = 16 > 0$ | **reducible** → $(x-2)(x+2)$ |

> 🔑 **Why a linear numerator?** A partial fraction's numerator always has degree **one less** than its denominator. Over a linear factor (degree $1$) that means a constant (degree $0$); over a quadratic (degree $2$) it means a linear $Bx + C$ (degree $1$).`,
      },
      {
        id: 'pfd4-worked',
        type: 'text' as const,
        content: `## Worked Example: $\\dfrac{2x^2 - x + 4}{x(x^2 + 1)}$

The denominator has a linear factor $x$ and an irreducible quadratic $x^2 + 1$, so:

$$\\frac{2x^2 - x + 4}{x(x^2+1)} = \\frac{A}{x} + \\frac{Bx + C}{x^2 + 1}$$

Clear denominators:

$$2x^2 - x + 4 = A(x^2 + 1) + (Bx + C)\\,x$$

**Let $x = 0$:** $\\;4 = A(1) \\Rightarrow A = 4$.

**Expand and match:** the right side is $(A + B)x^2 + Cx + A$. Comparing with $2x^2 - x + 4$:
- $x^2$: $\\;A + B = 2 \\Rightarrow 4 + B = 2 \\Rightarrow B = -2$
- $x^1$: $\\;C = -1$

$$\\frac{2x^2 - x + 4}{x(x^2+1)} = \\frac{4}{x} + \\frac{-2x - 1}{x^2 + 1}$$

> ✅ **Check** $x=1$: LHS $= \\frac{2-1+4}{1\\cdot 2} = \\frac{5}{2}$; RHS $= \\frac{4}{1} + \\frac{-3}{2} = \\frac{5}{2}$ ✓`,
      },
      {
        id: 'pfd4-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the correct setup for $\\dfrac{3x + 1}{(x+2)(x^2 + 1)}$?',
              options: [
                '$\\dfrac{A}{x+2} + \\dfrac{B}{x^2+1}$',
                '$\\dfrac{A}{x+2} + \\dfrac{Bx + C}{x^2+1}$',
                '$\\dfrac{Ax + B}{x+2} + \\dfrac{Cx + D}{x^2+1}$',
                '$\\dfrac{A}{x+2} + \\dfrac{B}{x} + \\dfrac{C}{x+1}$',
              ],
              correctAnswer: 1,
              explanation: '$x^2 + 1$ is irreducible (discriminant $-4 < 0$), so its numerator is linear: $Bx + C$. The linear factor $(x+2)$ keeps a constant numerator $A$.',
            },
            {
              question: 'Which quadratic is **irreducible** over the real numbers?',
              options: ['$x^2 - 9$', '$x^2 - 5x + 6$', '$x^2 + x + 1$', '$x^2 - 2x$'],
              correctAnswer: 2,
              explanation: '$x^2 + x + 1$ has discriminant $1 - 4 = -3 < 0$, so no real roots — irreducible. The others factor: $(x-3)(x+3)$, $(x-2)(x-3)$, and $x(x-2)$.',
            },
          ],
        },
      },
      {
        id: 'pfd4-drill',
        type: 'input-boxes' as const,
        content: `**Find the Quadratic-Factor Numerator** 🧮

Decompose $\\dfrac{x^2 + 2x + 3}{(x+1)(x^2 + 1)} = \\dfrac{A}{x+1} + \\dfrac{Bx + C}{x^2 + 1}$.

Enter $A$, then $B$, then $C$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '0', '2'],
          hint1: 'Clear denominators: $x^2 + 2x + 3 = A(x^2 + 1) + (Bx + C)(x+1)$. Let $x = -1$ to find $A$.',
          hint2: 'At $x = -1$: $\\;1 - 2 + 3 = A(2) \\Rightarrow 2 = 2A \\Rightarrow A = 1$.',
          hint3: 'Match $x^2$: $A + B = 1 \\Rightarrow B = 0$. Match the constant: $A + C = 3 \\Rightarrow C = 2$.',
          explanation: '$A = 1$, $B = 0$, $C = 2$. So $\\dfrac{x^2+2x+3}{(x+1)(x^2+1)} = \\dfrac{1}{x+1} + \\dfrac{2}{x^2+1}$.',
        },
      },
      {
        id: 'pfd4-numerator-degree',
        type: 'dropdown-select' as const,
        content: `**Match the Numerator Form** 🔽

A partial fraction's numerator always has degree **one less** than its own denominator. Choose the correct numerator form for each piece.`,
        exercise: {
          dropdowns: [
            { label: 'Over $(x - 5)$ (linear):', options: ['$A$ (constant)', '$Ax + B$ (linear)', '$Ax^2 + Bx + C$'] },
            { label: 'Over $(x^2 + 9)$ (irreducible quadratic):', options: ['$A$ (constant)', '$Bx + C$ (linear)', '$Bx^2 + Cx + D$'] },
            { label: 'Over $(x^2 - 2x + 5)$ (irreducible quadratic):', options: ['$A$ (constant)', '$Bx + C$ (linear)', 'it factors first'] },
          ],
          correctAnswers: ['$A$ (constant)', '$Bx + C$ (linear)', '$Bx + C$ (linear)'],
          hint1: 'Numerator degree = (denominator degree) $- 1$.',
          hint2: 'A linear denominator (degree $1$) gets a constant numerator (degree $0$).',
          hint3: 'An irreducible quadratic (degree $2$) gets a linear numerator $Bx + C$. Check $x^2 - 2x + 5$: discriminant $4 - 20 = -16 < 0$, so it stays irreducible.',
          explanation: 'Linear factor → constant numerator $A$. Irreducible quadratic → linear numerator $Bx + C$ (both $x^2+9$ and $x^2-2x+5$ have negative discriminants, so neither factors).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'partial-fraction-decomposition',
    sections: [
      {
        id: 'pfd5-intro',
        type: 'text' as const,
        content: `# 🧩 Partial Fraction Decomposition

**Part 5 of 7 — Improper Fractions: Divide First**

---

> 🔑 **The Gate:** If $\\deg(N) \\ge \\deg(D)$, the fraction is **improper** and decomposition cannot start. **Polynomial long division** is the key that unlocks the gate.`,
      },
      {
        id: 'pfd5-why',
        type: 'text' as const,
        content: `## Why Division Comes First

Long division rewrites any improper fraction as

$$\\frac{N(x)}{D(x)} = \\underbrace{Q(x)}_{\\text{polynomial}} + \\underbrace{\\frac{R(x)}{D(x)}}_{\\text{proper remainder}}$$

where the remainder $R(x)$ has degree **smaller** than $D(x)$. The quotient $Q(x)$ is left as-is; the proper remainder is then decomposed with the methods from Parts 2–4.

### Example: $\\dfrac{x^2 + 1}{x - 1}$

Dividing $x^2 + 1$ by $x - 1$ gives quotient $x + 1$ and remainder $2$:

$$\\frac{x^2 + 1}{x - 1} = (x + 1) + \\frac{2}{x - 1}$$

> ✅ **Check:** $(x+1)(x-1) + 2 = x^2 - 1 + 2 = x^2 + 1$ ✓ — quotient times divisor plus remainder rebuilds the numerator.`,
      },
      {
        id: 'pfd5-worked',
        type: 'text' as const,
        content: `## Worked Example: $\\dfrac{2x^2 + 3}{x^2 - x}$

Here $\\deg(N) = \\deg(D) = 2$, so the fraction is improper — divide first.

Dividing $2x^2 + 3$ by $x^2 - x$ gives quotient $2$ and remainder $2x + 3$:

$$\\frac{2x^2 + 3}{x^2 - x} = 2 + \\frac{2x + 3}{x^2 - x}$$

Now the remainder is proper. Factor $x^2 - x = x(x - 1)$ and decompose:

$$\\frac{2x + 3}{x(x-1)} = \\frac{A}{x} + \\frac{B}{x-1}$$

Cover-up: $A = \\dfrac{2(0)+3}{0-1} = -3$, and $B = \\dfrac{2(1)+3}{1} = 5$. Altogether:

$$\\frac{2x^2 + 3}{x^2 - x} = 2 - \\frac{3}{x} + \\frac{5}{x-1}$$

> 💡 Don't forget to carry the quotient $2$ all the way into the final answer.`,
      },
      {
        id: 'pfd5-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Before decomposing $\\dfrac{x^3}{x^2 - 1}$, what must you do first?',
              options: [
                'Nothing — set up partial fractions directly',
                'Polynomial long division, because it is improper',
                'Factor the numerator',
                'Multiply top and bottom by $x$',
              ],
              correctAnswer: 1,
              explanation: '$\\deg(N) = 3 \\ge 2 = \\deg(D)$, so the fraction is improper. Long division must come first to produce a proper remainder.',
            },
            {
              question: 'Dividing gives $\\dfrac{3x + 5}{x + 1} = Q(x) + \\dfrac{R}{x+1}$. What are $Q$ and $R$?',
              options: [
                '$Q = 3,\\ R = 2$',
                '$Q = 3,\\ R = 5$',
                '$Q = x,\\ R = 5$',
                '$Q = 3x,\\ R = 2$',
              ],
              correctAnswer: 0,
              explanation: '$3x + 5 = 3(x + 1) + 2$, so the quotient is $3$ and the remainder is $2$: $\\dfrac{3x+5}{x+1} = 3 + \\dfrac{2}{x+1}$.',
            },
          ],
        },
      },
      {
        id: 'pfd5-drill',
        type: 'input-boxes' as const,
        content: `**Divide, Then Read Off the Quotient** 🧮

For $\\dfrac{x^2 + 1}{x - 1} = Q(x) + \\dfrac{R}{x - 1}$, the quotient is $Q(x) = x + q_0$ and the remainder is the constant $R$.

Enter $q_0$ (the constant term of the quotient) in the first box and $R$ in the second box.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1', '2'],
          hint1: 'Divide $x^2 + 1$ by $x - 1$. The first term of the quotient is $x$ (since $x \\cdot x = x^2$).',
          hint2: 'After subtracting $x(x-1) = x^2 - x$, you are left with $x + 1$. Dividing $x$ by $x$ gives $+1$, so $q_0 = 1$.',
          hint3: 'Then $1\\cdot(x-1) = x - 1$; subtracting from $x + 1$ leaves remainder $R = 2$.',
          explanation: 'Long division gives quotient $x + 1$ (so $q_0 = 1$) and remainder $2$: $\\dfrac{x^2+1}{x-1} = (x+1) + \\dfrac{2}{x-1}$.',
        },
      },
      {
        id: 'pfd5-quotient-degree',
        type: 'dropdown-select' as const,
        content: `**Degree of the Quotient** 🔽

When you long-divide an improper fraction, the quotient's degree equals $\\deg(N) - \\deg(D)$. Pick the quotient's degree for each.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{x^4 + 1}{x^2 + x}$ — quotient degree:', options: ['$0$ (a constant)', '$1$', '$2$', '$3$'] },
            { label: '$\\dfrac{x^2 - 3}{x - 2}$ — quotient degree:', options: ['$0$ (a constant)', '$1$', '$2$', '$3$'] },
            { label: '$\\dfrac{2x + 5}{x - 3}$ — quotient degree:', options: ['$0$ (a constant)', '$1$', '$2$', '$3$'] },
          ],
          correctAnswers: ['$2$', '$1$', '$0$ (a constant)'],
          hint1: 'Quotient degree $= \\deg(N) - \\deg(D)$.',
          hint2: '$\\frac{x^4+1}{x^2+x}$: $4 - 2 = 2$.  $\\frac{x^2-3}{x-2}$: $2 - 1 = 1$.',
          hint3: '$\\frac{2x+5}{x-3}$ has equal degrees $1 - 1 = 0$, so the quotient is a constant (here $2$, with remainder $11$).',
          explanation: 'Quotient degrees: $4-2=2$, $2-1=1$, and $1-1=0$ (a constant). Equal-degree fractions are still improper and give a constant quotient.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'partial-fraction-decomposition',
    sections: [
      {
        id: 'pfd6-intro',
        type: 'text' as const,
        content: `# 🧩 Partial Fraction Decomposition

**Part 6 of 7 — Strategy & Full Synthesis**

---

You now own every individual move. This part is about **choosing** the right move and stringing them together start to finish.`,
      },
      {
        id: 'pfd6-flowchart',
        type: 'text' as const,
        content: `## The Decision Flowchart

Run every problem through this checklist, in order:

1. **Is it proper?**  If $\\deg(N) \\ge \\deg(D)$ → **long divide first** (Part 5), then continue with the remainder.
2. **Factor the denominator completely** (Step Zero).
3. **Write one group of terms per factor:**

| Factor in $D(x)$ | Contributes |
|------------------|-------------|
| Distinct linear $(x - r)$ | $\\dfrac{A}{x - r}$ |
| Repeated linear $(x - r)^k$ | $\\dfrac{A_1}{x-r} + \\cdots + \\dfrac{A_k}{(x-r)^k}$ |
| Irreducible quadratic $(x^2 + bx + c)$ | $\\dfrac{Bx + C}{x^2 + bx + c}$ |

4. **Solve for the unknowns** by clearing denominators and using strategic substitution and/or matching coefficients.

> 🔑 The numerator of each piece always has degree **one less** than that piece's denominator — that's why linear factors get constants and quadratics get $Bx + C$.`,
      },
      {
        id: 'pfd6-match-strategy',
        type: 'dropdown-select' as const,
        content: `**Diagnose Each Problem** 🔽

For each fraction, choose the **first** correct action or setup.`,
        exercise: {
          dropdowns: [
            {
              label: '$\\dfrac{x^4 + 2}{x^2 + x}$ — first step?',
              options: [
                'Long divide first (improper)',
                'Cover-up immediately',
                'Use a $Bx+C$ numerator',
                'It is already fully decomposed',
              ],
            },
            {
              label: '$\\dfrac{5}{x(x-1)(x+2)}$ — setup?',
              options: [
                '$\\dfrac{A}{x} + \\dfrac{B}{x-1} + \\dfrac{C}{x+2}$',
                '$\\dfrac{A}{x} + \\dfrac{Bx+C}{(x-1)(x+2)}$',
                '$\\dfrac{A}{x(x-1)(x+2)}$',
                'Long divide first',
              ],
            },
            {
              label: '$\\dfrac{x}{(x-4)(x^2 + 9)}$ — setup?',
              options: [
                '$\\dfrac{A}{x-4} + \\dfrac{Bx + C}{x^2 + 9}$',
                '$\\dfrac{A}{x-4} + \\dfrac{B}{x^2 + 9}$',
                '$\\dfrac{A}{x-4} + \\dfrac{B}{x-3} + \\dfrac{C}{x+3}$',
                '$\\dfrac{Ax+B}{x-4} + \\dfrac{C}{x^2+9}$',
              ],
            },
          ],
          correctAnswers: [
            'Long divide first (improper)',
            '$\\dfrac{A}{x} + \\dfrac{B}{x-1} + \\dfrac{C}{x+2}$',
            '$\\dfrac{A}{x-4} + \\dfrac{Bx + C}{x^2 + 9}$',
          ],
          hint1: 'First ask: is $\\deg(N) \\ge \\deg(D)$? In the first one, $4 \\ge 2$.',
          hint2: 'Three distinct linear factors → three constant-over-linear terms.',
          hint3: '$x^2 + 9$ has discriminant $-36 < 0$, so it is irreducible and earns a $Bx + C$ numerator.',
          explanation: '1) Degree $4$ over degree $2$ is improper → divide first. 2) Three distinct linear factors → $\\frac{A}{x}+\\frac{B}{x-1}+\\frac{C}{x+2}$. 3) Irreducible $x^2+9$ → linear numerator $Bx+C$.',
        },
      },
      {
        id: 'pfd6-full',
        type: 'text' as const,
        content: `## Full Synthesis: $\\dfrac{3x - 4}{x^2 - x - 6}$

**Step 1 — Proper?** Degree $1$ over degree $2$. ✓ Proper.

**Step 2 — Factor:** $x^2 - x - 6 = (x - 3)(x + 2)$.

**Step 3 — Setup:** two distinct linear factors:
$$\\frac{3x - 4}{(x-3)(x+2)} = \\frac{A}{x-3} + \\frac{B}{x+2}$$

**Step 4 — Solve (cover-up):**
- $A = \\dfrac{3(3) - 4}{3 + 2} = \\dfrac{5}{5} = 1$
- $B = \\dfrac{3(-2) - 4}{-2 - 3} = \\dfrac{-10}{-5} = 2$

$$\\frac{3x - 4}{x^2 - x - 6} = \\frac{1}{x-3} + \\frac{2}{x+2}$$

> ✅ **Check** $x=0$: LHS $= \\frac{-4}{-6} = \\frac{2}{3}$; RHS $= \\frac{1}{-3} + \\frac{2}{2} = -\\frac{1}{3} + 1 = \\frac{2}{3}$ ✓`,
      },
      {
        id: 'pfd6-drill',
        type: 'input-boxes' as const,
        content: `**Full Decomposition** 🧮

Decompose $\\dfrac{x + 4}{x(x + 2)} = \\dfrac{A}{x} + \\dfrac{B}{x + 2}$ from scratch.

Enter $A$ in the first box and $B$ in the second box.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', '-1'],
          hint1: 'The denominator is already factored into distinct linear factors $x$ and $x+2$ — use cover-up.',
          hint2: 'For $A$: cover $x$, evaluate $\\dfrac{x+4}{x+2}$ at $x = 0$: $\\dfrac{4}{2} = 2$.',
          hint3: 'For $B$: cover $x+2$, evaluate $\\dfrac{x+4}{x}$ at $x = -2$: $\\dfrac{2}{-2} = -1$.',
          explanation: '$A = 2$, $B = -1$, so $\\dfrac{x+4}{x(x+2)} = \\dfrac{2}{x} - \\dfrac{1}{x+2}$.',
        },
      },
      {
        id: 'pfd6-strategy-mc',
        type: 'multiple-choice' as const,
        content: `**Strategy Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A student tries to decompose $\\dfrac{x^3 + 2x}{x^2 + 1}$ directly into partial fractions and gets stuck. What did they skip?',
              options: [
                'Long division — the fraction is improper ($\\deg 3 \\ge \\deg 2$)',
                'They used a $Bx + C$ numerator when they needed a constant',
                'They forgot to factor $x^2 + 1$ into linear factors',
                'Nothing — it cannot be decomposed at all',
              ],
              correctAnswer: 0,
              explanation: 'The numerator degree $3$ is $\\ge$ the denominator degree $2$, so the fraction is improper. Long division must come first. (Note $x^2 + 1$ is irreducible, so it never factors into real linear pieces.)',
            },
            {
              question: 'How many unknown constants appear in the full setup for $\\dfrac{1}{(x-1)(x+2)^2(x^2 + 4)}$?',
              options: ['$5$', '$3$', '$4$', '$6$'],
              correctAnswer: 0,
              explanation: '$(x-1) \\to 1$ constant; $(x+2)^2 \\to 2$ constants; irreducible $(x^2+4) \\to 2$ (from $Bx + C$). Total $1 + 2 + 2 = 5$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'partial-fraction-decomposition',
    sections: [
      {
        id: 'pfd7-intro',
        type: 'text' as const,
        content: `# 🧩 Partial Fraction Decomposition

**Part 7 of 7 — Mixed Mastery & Exit Quiz**

---

You can now (1) test proper vs. improper, (2) factor and set up the right form, (3) handle distinct linear, repeated linear, and irreducible quadratic factors, and (4) divide first when needed. Time to put it all together.`,
      },
      {
        id: 'pfd7-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Situation | What to do |
|-----------|-----------|
| $\\deg(N) \\ge \\deg(D)$ | Long divide **first**, then decompose the remainder |
| Distinct linear $(x - r)$ | $\\dfrac{A}{x - r}$ — find with cover-up |
| Repeated linear $(x - r)^k$ | $\\dfrac{A_1}{x-r} + \\cdots + \\dfrac{A_k}{(x-r)^k}$ |
| Irreducible quadratic $(x^2 + bx + c)$ | $\\dfrac{Bx + C}{x^2 + bx + c}$ |
| Solving for constants | Clear denominators, then substitute roots and/or match coefficients |

> ⚠️ **Three classic traps:** decomposing an improper fraction without dividing first; forgetting the lower-power terms of a repeated factor; and putting a constant (instead of $Bx + C$) over an irreducible quadratic.`,
      },
      {
        id: 'pfd7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Decompose $\\dfrac{8}{x(x - 4)}$.',
              options: [
                '$\\dfrac{2}{x - 4} - \\dfrac{2}{x}$',
                '$\\dfrac{2}{x} - \\dfrac{2}{x - 4}$',
                '$\\dfrac{8}{x} - \\dfrac{8}{x - 4}$',
                '$\\dfrac{-2}{x - 4} + \\dfrac{2}{x}$',
              ],
              correctAnswer: 0,
              explanation: 'Cover-up: over $x$, $\\frac{8}{0-4} = -2$; over $x-4$, $\\frac{8}{4} = 2$. So $\\dfrac{8}{x(x-4)} = -\\dfrac{2}{x} + \\dfrac{2}{x-4} = \\dfrac{2}{x-4} - \\dfrac{2}{x}$.',
            },
            {
              question: 'What is the correct setup for $\\dfrac{x^2 + 5}{(x - 1)^2 (x^2 + 4)}$?',
              options: [
                '$\\dfrac{A}{x-1} + \\dfrac{B}{(x-1)^2} + \\dfrac{Cx + D}{x^2 + 4}$',
                '$\\dfrac{A}{(x-1)^2} + \\dfrac{Bx + C}{x^2 + 4}$',
                '$\\dfrac{A}{x-1} + \\dfrac{B}{(x-1)^2} + \\dfrac{C}{x^2 + 4}$',
                '$\\dfrac{Ax + B}{(x-1)^2} + \\dfrac{Cx + D}{x^2 + 4}$',
              ],
              correctAnswer: 0,
              explanation: 'Repeated linear $(x-1)^2$ → $\\frac{A}{x-1} + \\frac{B}{(x-1)^2}$; irreducible $x^2 + 4$ (discriminant $-16$) → $\\frac{Cx+D}{x^2+4}$.',
            },
          ],
        },
      },
      {
        id: 'pfd7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**One More from Scratch** 🧮

Decompose $\\dfrac{5x + 1}{(x - 1)(x + 2)} = \\dfrac{A}{x - 1} + \\dfrac{B}{x + 2}$.

Enter $A$ in the first box and $B$ in the second box.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', '3'],
          hint1: 'Distinct linear factors → cover-up.',
          hint2: 'For $A$: cover $(x-1)$, evaluate $\\dfrac{5x+1}{x+2}$ at $x = 1$: $\\dfrac{6}{3} = 2$.',
          hint3: 'For $B$: cover $(x+2)$, evaluate $\\dfrac{5x+1}{x-1}$ at $x = -2$: $\\dfrac{-9}{-3} = 3$.',
          explanation: '$A = 2$, $B = 3$, so $\\dfrac{5x+1}{(x-1)(x+2)} = \\dfrac{2}{x-1} + \\dfrac{3}{x+2}$.',
        },
      },
      {
        id: 'pfd7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which fraction must be **long-divided before** you can decompose it?',
              options: [
                '$\\dfrac{x^2 + 1}{x - 1}$',
                '$\\dfrac{3x + 2}{x^2 - 4}$',
                '$\\dfrac{7}{(x-1)(x+5)}$',
                '$\\dfrac{x - 2}{x^2 + x}$',
              ],
              correctAnswer: 0,
              explanation: '$\\dfrac{x^2+1}{x-1}$ is improper ($\\deg 2 \\ge \\deg 1$), so divide first. The other three are already proper.',
            },
            {
              question: 'The correct setup for $\\dfrac{4x}{(x + 1)(x^2 + 2)}$ is:',
              options: [
                '$\\dfrac{A}{x+1} + \\dfrac{Bx + C}{x^2 + 2}$',
                '$\\dfrac{A}{x+1} + \\dfrac{B}{x^2 + 2}$',
                '$\\dfrac{Ax + B}{x+1} + \\dfrac{C}{x^2 + 2}$',
                '$\\dfrac{A}{x+1} + \\dfrac{B}{x^2} + \\dfrac{C}{2}$',
              ],
              correctAnswer: 0,
              explanation: '$x^2 + 2$ is irreducible (discriminant $-8 < 0$), so it gets a linear numerator $Bx + C$; the linear factor $(x+1)$ keeps a constant $A$.',
            },
            {
              question: 'Decompose $\\dfrac{6x - 2}{(x + 3)(x - 1)}$.',
              options: [
                '$\\dfrac{5}{x + 3} + \\dfrac{1}{x - 1}$',
                '$\\dfrac{1}{x + 3} + \\dfrac{5}{x - 1}$',
                '$\\dfrac{5}{x + 3} - \\dfrac{1}{x - 1}$',
                '$\\dfrac{6}{x + 3} - \\dfrac{2}{x - 1}$',
              ],
              correctAnswer: 0,
              explanation: 'Cover-up: over $(x+3)$, $\\frac{6(-3)-2}{-3-1} = \\frac{-20}{-4} = 5$; over $(x-1)$, $\\frac{6(1)-2}{1+3} = \\frac{4}{4} = 1$. So $\\dfrac{6x-2}{(x+3)(x-1)} = \\dfrac{5}{x+3} + \\dfrac{1}{x-1}$.',
            },
          ],
        },
      },
    ],
  },
]
