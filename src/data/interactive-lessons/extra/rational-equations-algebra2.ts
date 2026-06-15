import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Solving Rational Equations (Algebra 2).
 * Registry key: 'rational-equations-algebra2' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'rational-equations-algebra2',
    sections: [
      {
        id: 're1-intro',
        type: 'text' as const,
        content: `# ➗ Solving Rational Equations

**Part 1 of 5 — Restrictions & the LCD**

---

### Topics in This Part

| Section |
|---------|
| What Is a Rational Equation? |
| Excluded Values (Restrictions) |
| Finding the LCD |

> 🔑 **Key Concept:** A **rational equation** has a variable in a denominator. Before we solve anything, we must answer two questions: *what values are forbidden* (they'd divide by zero), and *what single denominator (the LCD) clears all the fractions*. Part 1 builds those two tools.`,
      },
      {
        id: 're1-what',
        type: 'text' as const,
        content: `## What Is a Rational Equation?

A **rational equation** is an equation containing at least one **rational expression** — a fraction with a polynomial (and a variable) in the denominator.

$$\\frac{3}{x} = \\frac{6}{x+2}, \\qquad \\frac{x}{x-1} + 2 = \\frac{1}{x-1}, \\qquad \\frac{5}{x^2-9} = \\frac{1}{x-3}$$

The big idea behind solving them is simple:

> 🔑 **Strategy:** Multiply *every term* by the **least common denominator (LCD)**. This clears all the fractions and leaves an ordinary linear or quadratic equation you already know how to solve.

But there's a catch that makes rational equations special: dividing by zero is undefined, so some $x$-values are **off-limits**. We deal with those *first*.`,
      },
      {
        id: 're1-restrictions',
        type: 'text' as const,
        content: `## Excluded Values (Restrictions)

A denominator can **never equal zero**. Any $x$ that makes a denominator $0$ is an **excluded value** (a *restriction*) — it can never be a solution, even if it survives the algebra.

**To find restrictions:** set each denominator equal to $0$ and solve.

| Expression | Denominator $= 0$ | Restriction |
|------------|-------------------|-------------|
| $\\dfrac{3}{x}$ | $x = 0$ | $x \\ne 0$ |
| $\\dfrac{6}{x+2}$ | $x + 2 = 0$ | $x \\ne -2$ |
| $\\dfrac{1}{x-1}$ | $x - 1 = 0$ | $x \\ne 1$ |
| $\\dfrac{5}{x^2-9}$ | $x^2 - 9 = 0$ | $x \\ne 3,\\; x \\ne -3$ |

> ⚠️ **Write the restrictions down before you solve.** If your final answer equals a restricted value, you must **throw it out** — it's called an *extraneous solution* (Part 4).`,
      },
      {
        id: 're1-restrict-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What are the restrictions on $\\dfrac{4}{x-5} = \\dfrac{2}{x+1}$?',
              options: ['$x \\ne 5$ and $x \\ne -1$', '$x \\ne -5$ and $x \\ne 1$', '$x \\ne 5$ and $x \\ne 1$', '$x \\ne 0$ only'],
              correctAnswer: 0,
              explanation: 'Set each denominator to zero: $x - 5 = 0 \\Rightarrow x = 5$, and $x + 1 = 0 \\Rightarrow x = -1$. So $x \\ne 5$ and $x \\ne -1$.',
            },
            {
              question: 'Which value is excluded from $\\dfrac{x}{x^2 - 4}$?',
              options: ['$x = 4$', '$x = 2$ and $x = -2$', '$x = 0$', '$x = \\pm 4$'],
              correctAnswer: 1,
              explanation: '$x^2 - 4 = (x-2)(x+2) = 0$ when $x = 2$ or $x = -2$. Both make the denominator zero, so both are excluded.',
            },
          ],
        },
      },
      {
        id: 're1-restrict-drill',
        type: 'input-boxes' as const,
        content: `**Find the Restriction** 🧮

Enter the value of $x$ that is **excluded** from each expression.

**1)** $\\dfrac{7}{x - 8}$ → $x \\ne \\,?$
**2)** $\\dfrac{x+1}{x + 3}$ → $x \\ne \\,?$
**3)** $\\dfrac{10}{2x - 6}$ → $x \\ne \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '-3', '3'],
          hint1: 'Set the denominator equal to $0$. For #1: $x - 8 = 0$.',
          hint2: 'For #2: $x + 3 = 0 \\Rightarrow x = -3$.',
          hint3: 'For #3: $2x - 6 = 0 \\Rightarrow 2x = 6 \\Rightarrow x = 3$.',
          explanation: '1) $x - 8 = 0 \\Rightarrow x \\ne 8$.  2) $x + 3 = 0 \\Rightarrow x \\ne -3$.  3) $2x - 6 = 0 \\Rightarrow x \\ne 3$.',
        },
      },
      {
        id: 're1-lcd',
        type: 'text' as const,
        content: `## Finding the LCD

The **least common denominator** is the smallest expression every denominator divides into evenly. To build it:

1. **Factor** every denominator completely.
2. Take **each distinct factor**, using the **highest power** it appears with anywhere.
3. **Multiply** those factors together.

### Examples

| Denominators | Factored | LCD |
|--------------|----------|-----|
| $x$ and $x+2$ | $x,\\; (x+2)$ | $x(x+2)$ |
| $x-1$ and $x-1$ | $(x-1)$ | $x-1$ |
| $6$ and $x$ | $2\\cdot 3,\\; x$ | $6x$ |
| $x^2-9$ and $x-3$ | $(x-3)(x+3),\\; (x-3)$ | $(x-3)(x+3)$ |

> 💡 If a factor like $(x-3)$ already lives **inside** another denominator's factorization, you do **not** repeat it. The LCD takes each factor just once at its highest power.`,
      },
      {
        id: 're1-lcd-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The LCD of $\\dfrac{2}{x}$ and $\\dfrac{5}{x+4}$ is:',
              options: ['$x(x+4)$', '$x + 4$', '$x^2 + 4$', '$5x$'],
              correctAnswer: 0,
              explanation: 'The denominators $x$ and $x+4$ share no factors, so the LCD is their product: $x(x+4)$.',
            },
            {
              question: 'The LCD of $\\dfrac{1}{x^2 - 25}$ and $\\dfrac{3}{x+5}$ is:',
              options: ['$(x+5)(x-5)$', '$(x+5)^2(x-5)$', '$(x^2-25)(x+5)$', '$x + 5$'],
              correctAnswer: 0,
              explanation: '$x^2 - 25 = (x+5)(x-5)$. Since $(x+5)$ already appears in that factorization, the LCD is just $(x+5)(x-5)$ — do not repeat the $(x+5)$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'rational-equations-algebra2',
    sections: [
      {
        id: 're2-intro',
        type: 'text' as const,
        content: `# ➗ Solving Rational Equations

**Part 2 of 5 — The Core Method: Clear the Denominators**

---

> 🔑 **The Idea:** Multiply every term by the LCD. Each denominator cancels, the fractions vanish, and you're left with a plain polynomial equation to solve.`,
      },
      {
        id: 're2-steps',
        type: 'text' as const,
        content: `## The Four Steps

To solve any rational equation:

1. **State restrictions** — set each denominator to $0$.
2. **Multiply every term** by the LCD and cancel.
3. **Solve** the resulting linear or quadratic equation.
4. **Check** each answer against the restrictions; discard any that are excluded.

### Worked Example: $\\dfrac{3}{x} = \\dfrac{6}{x+2}$

**Restrictions:** $x \\ne 0$ and $x \\ne -2$.  **LCD** $= x(x+2)$.

Multiply both sides by $x(x+2)$:

$$x(x+2)\\cdot \\frac{3}{x} = x(x+2)\\cdot \\frac{6}{x+2}$$

Cancel: the left loses its $x$, the right loses its $(x+2)$:

$$3(x+2) = 6x \\;\\Rightarrow\\; 3x + 6 = 6x \\;\\Rightarrow\\; 6 = 3x \\;\\Rightarrow\\; x = 2$$

> ✅ **Check:** $x = 2$ is not restricted. $\\dfrac{3}{2} = \\dfrac{6}{4} = \\dfrac{3}{2}$ ✓`,
      },
      {
        id: 're2-worked2',
        type: 'text' as const,
        content: `### Worked Example: $\\dfrac{x}{4} + \\dfrac{1}{2} = \\dfrac{5}{4}$

Even when the denominators are just numbers, the method is the same. **LCD** $= 4$ (no restrictions, since no variable is in a denominator):

$$4\\cdot\\frac{x}{4} + 4\\cdot\\frac{1}{2} = 4\\cdot\\frac{5}{4}$$

$$x + 2 = 5 \\;\\Rightarrow\\; x = 3$$

### Worked Example: $\\dfrac{2}{x} + 3 = \\dfrac{8}{x}$

**Restriction:** $x \\ne 0$.  **LCD** $= x$. Multiply *every* term by $x$ — including the lone $3$:

$$x\\cdot\\frac{2}{x} + x\\cdot 3 = x\\cdot\\frac{8}{x} \\;\\Rightarrow\\; 2 + 3x = 8 \\;\\Rightarrow\\; 3x = 6 \\;\\Rightarrow\\; x = 2$$

> ⚠️ **Don't forget the whole-number terms.** Every term gets multiplied by the LCD — the $3$ became $3x$, not $3$.`,
      },
      {
        id: 're2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'When you multiply $\\dfrac{5}{x} + 2 = \\dfrac{9}{x}$ by the LCD $x$, the result is:',
              options: ['$5 + 2x = 9$', '$5 + 2 = 9$', '$5x + 2x = 9x$', '$5 + 2x = 9x$'],
              correctAnswer: 0,
              explanation: 'Multiply each term by $x$: $\\frac{5}{x}\\cdot x = 5$, $\\;2\\cdot x = 2x$, $\\;\\frac{9}{x}\\cdot x = 9$. So $5 + 2x = 9$, giving $x = 2$.',
            },
            {
              question: 'Solve $\\dfrac{12}{x} = 4$.',
              options: ['$x = 3$', '$x = 48$', '$x = 8$', '$x = \\frac{1}{3}$'],
              correctAnswer: 0,
              explanation: 'Multiply both sides by $x$: $12 = 4x$, so $x = 3$. Check: $\\frac{12}{3} = 4$ ✓.',
            },
          ],
        },
      },
      {
        id: 're2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're solving $\\dfrac{4}{x} = \\dfrac{6}{x+1}$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Restrictions:', options: ['$x \\ne 0,\\; x \\ne -1$', '$x \\ne 0,\\; x \\ne 1$', '$x \\ne 4,\\; x \\ne 6$', 'none'] },
            { label: 'The LCD is:', options: ['$x(x+1)$', '$x + 1$', '$24$', '$x$'] },
            { label: 'After clearing fractions:', options: ['$4(x+1) = 6x$', '$4x = 6(x+1)$', '$4 = 6$', '$4(x+1) = 6$'] },
            { label: 'The solution is:', options: ['$x = 2$', '$x = -2$', '$x = 0$', '$x = 5$'] },
          ],
          correctAnswers: ['$x \\ne 0,\\; x \\ne -1$', '$x(x+1)$', '$4(x+1) = 6x$', '$x = 2$'],
          hint1: 'Set $x = 0$ and $x + 1 = 0$ for the restrictions.',
          hint2: 'The denominators $x$ and $x+1$ share no factors, so LCD $= x(x+1)$.',
          hint3: 'Cross-multiplying: $4(x+1) = 6x \\Rightarrow 4x + 4 = 6x \\Rightarrow 4 = 2x \\Rightarrow x = 2$.',
          explanation: 'Restrictions $x \\ne 0, -1$; LCD $x(x+1)$; clearing gives $4(x+1) = 6x \\Rightarrow x = 2$, which is allowed.',
        },
      },
      {
        id: 're2-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

Multiply by the LCD and solve.

**1)** $\\dfrac{6}{x} = 3 \\;\\Rightarrow\\; x = \\,?$
**2)** $\\dfrac{x}{5} + 1 = \\dfrac{7}{5} \\;\\Rightarrow\\; x = \\,?$
**3)** $\\dfrac{3}{x} + 4 = \\dfrac{15}{x} \\;\\Rightarrow\\; x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '2', '3'],
          hint1: '#1: Multiply by $x$: $6 = 3x \\Rightarrow x = 2$.',
          hint2: '#2: Multiply by $5$: $x + 5 = 7 \\Rightarrow x = 2$.',
          hint3: '#3: Multiply by $x$: $3 + 4x = 15 \\Rightarrow 4x = 12 \\Rightarrow x = 3$.',
          explanation: '1) $6 = 3x \\Rightarrow x = 2$.  2) $x + 5 = 7 \\Rightarrow x = 2$.  3) $3 + 4x = 15 \\Rightarrow x = 3$. None are restricted.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'rational-equations-algebra2',
    sections: [
      {
        id: 're3-intro',
        type: 'text' as const,
        content: `# ➗ Solving Rational Equations

**Part 3 of 5 — Factored Denominators & Quadratics**

---

> 🔑 **Level up:** When denominators factor (like $x^2 - 9$), build the LCD from the factors. Clearing fractions often produces a **quadratic** — solve it by factoring, then check both roots.`,
      },
      {
        id: 're3-proportions',
        type: 'text' as const,
        content: `## Proportions: Cross-Multiplication

When the equation is **one fraction = one fraction**, you can **cross-multiply** — a shortcut for clearing both denominators at once:

$$\\frac{a}{b} = \\frac{c}{d} \\quad\\Longrightarrow\\quad a\\cdot d = b\\cdot c$$

### Example: $\\dfrac{x+3}{4} = \\dfrac{x-1}{2}$

Cross-multiply:

$$2(x+3) = 4(x-1) \\;\\Rightarrow\\; 2x + 6 = 4x - 4 \\;\\Rightarrow\\; 10 = 2x \\;\\Rightarrow\\; x = 5$$

> 💡 **Cross-multiplication only works for a single fraction equal to a single fraction.** If there are three or more terms, go back to the full LCD method.`,
      },
      {
        id: 're3-proportion-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Cross-multiplying $\\dfrac{x+1}{3} = \\dfrac{x-1}{2}$ gives:',
              options: ['$2(x+1) = 3(x-1)$', '$3(x+1) = 2(x-1)$', '$2(x+1) = (x-1)$', '$(x+1)(x-1) = 6$'],
              correctAnswer: 0,
              explanation: 'In $\\frac{a}{b} = \\frac{c}{d}$, cross-multiply to $ad = bc$. Here $a = x+1$, $b = 3$, $c = x-1$, $d = 2$, so $2(x+1) = 3(x-1)$.',
            },
            {
              question: 'When is it safe to cross-multiply instead of using the full LCD?',
              options: ['Only when one single fraction equals another single fraction', 'Whenever the equation has fractions', 'Only when there are three or more terms', 'Never — it is always wrong'],
              correctAnswer: 0,
              explanation: 'Cross-multiplication is a shortcut valid only for the form $\\frac{a}{b} = \\frac{c}{d}$. With three or more terms you must multiply every term by the LCD.',
            },
          ],
        },
      },
      {
        id: 're3-factored',
        type: 'text' as const,
        content: `## When Denominators Factor

### Worked Example: $\\dfrac{1}{x-3} + \\dfrac{1}{x+3} = \\dfrac{6}{x^2-9}$

**Factor first:** $x^2 - 9 = (x-3)(x+3)$.

**Restrictions:** $x \\ne 3$ and $x \\ne -3$.  **LCD** $= (x-3)(x+3)$.

Multiply every term by $(x-3)(x+3)$ and cancel:

$$(x+3) + (x-3) = 6$$

$$2x = 6 \\;\\Rightarrow\\; x = 3$$

> ⚠️ **Stop!** $x = 3$ is a **restriction** — it makes the original denominators zero. So $x = 3$ is **extraneous** and must be rejected. This equation has **no solution**. (Much more on this in Part 4.)`,
      },
      {
        id: 're3-quadratic',
        type: 'text' as const,
        content: `## When Clearing Gives a Quadratic

### Worked Example: $\\dfrac{x}{x+2} = \\dfrac{3}{x}$

**Restrictions:** $x \\ne 0$ and $x \\ne -2$.  **LCD** $= x(x+2)$.

Cross-multiply (it's a single fraction = single fraction):

$$x\\cdot x = 3(x+2) \\;\\Rightarrow\\; x^2 = 3x + 6 \\;\\Rightarrow\\; x^2 - 3x - 6 = 0$$

This one doesn't factor nicely — but $\\dfrac{x}{x+2} = \\dfrac{3}{x}$ with nicer numbers does. Try instead $\\dfrac{x}{x+3} = \\dfrac{4}{x}$:

$$x^2 = 4(x+3) \\;\\Rightarrow\\; x^2 - 4x - 12 = 0 \\;\\Rightarrow\\; (x-6)(x+2) = 0$$

$$x = 6 \\quad\\text{or}\\quad x = -2$$

> ✅ Both pass the restrictions ($x \\ne 0, -3$), so **both are valid**: $x = 6$ and $x = -2$.`,
      },
      {
        id: 're3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build It Right** 🔽

You're solving $\\dfrac{2}{x-1} + \\dfrac{3}{x} = \\dfrac{5}{x}$. Choose correctly at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Restrictions:', options: ['$x \\ne 0,\\; x \\ne 1$', '$x \\ne 1$ only', '$x \\ne 0$ only', '$x \\ne 2,\\; x \\ne 3$'] },
            { label: 'The LCD is:', options: ['$x(x-1)$', '$x - 1$', '$x$', '$(x-1)(x)(x)$'] },
            { label: 'After clearing fractions:', options: ['$2x + 3(x-1) = 5(x-1)$', '$2 + 3 = 5$', '$2x + 3 = 5$', '$2(x-1) + 3x = 5x$'] },
          ],
          correctAnswers: ['$x \\ne 0,\\; x \\ne 1$', '$x(x-1)$', '$2x + 3(x-1) = 5(x-1)$'],
          hint1: 'Denominators are $x - 1$, $x$, and $x$. Set each to zero.',
          hint2: 'Distinct factors are $(x-1)$ and $x$, so the LCD is $x(x-1)$.',
          hint3: 'Multiply each term by $x(x-1)$: $\\frac{2}{x-1}\\to 2x$, $\\frac{3}{x}\\to 3(x-1)$, $\\frac{5}{x}\\to 5(x-1)$.',
          explanation: 'LCD $= x(x-1)$. Clearing gives $2x + 3(x-1) = 5(x-1) \\Rightarrow 2x + 3x - 3 = 5x - 5 \\Rightarrow -3 = -5$, which is false — so this particular equation has no solution.',
        },
      },
      {
        id: 're3-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

**1)** Cross-multiply: $\\dfrac{x}{6} = \\dfrac{3}{2} \\;\\Rightarrow\\; x = \\,?$
**2)** $\\dfrac{x-2}{3} = \\dfrac{x+4}{5} \\;\\Rightarrow\\; x = \\,?$
**3)** $\\dfrac{x}{x+3} = \\dfrac{4}{x}$ leads to $x^2 - 4x - 12 = 0$. Enter the **larger** root. $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '11', '6'],
          hint1: '#1: $2x = 18 \\Rightarrow x = 9$.',
          hint2: '#2: $5(x-2) = 3(x+4) \\Rightarrow 5x - 10 = 3x + 12 \\Rightarrow 2x = 22 \\Rightarrow x = 11$.',
          hint3: '#3: $x \\cdot x = 4(x+3) \\Rightarrow x^2 = 4x + 12 \\Rightarrow x^2 - 4x - 12 = (x-6)(x+2) = 0$, roots $6$ and $-2$. Larger is $6$.',
          explanation: '1) $2x = 18 \\Rightarrow x = 9$.  2) $5(x-2) = 3(x+4) \\Rightarrow x = 11$.  3) $x^2 - 4x - 12 = (x-6)(x+2) = 0 \\Rightarrow x = 6$ or $x = -2$; both pass the restrictions ($x \\ne 0, -3$), larger root $= 6$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'rational-equations-algebra2',
    sections: [
      {
        id: 're4-intro',
        type: 'text' as const,
        content: `# ➗ Solving Rational Equations

**Part 4 of 5 — Extraneous Solutions & Applications**

---

> 🔑 **The Most Important Check:** Multiplying by an expression containing $x$ can introduce a **fake** solution — one that makes a denominator zero. Always test every answer against the restrictions. If it's excluded, reject it.`,
      },
      {
        id: 're4-extraneous',
        type: 'text' as const,
        content: `## Why Extraneous Solutions Happen

When you multiply both sides by the LCD, you might be multiplying by **zero** (if $x$ equals a restricted value). Multiplying an equation by zero can turn a *false* statement into a *true* one — creating a solution that doesn't actually work in the original.

### Worked Example: $\\dfrac{x}{x-4} = \\dfrac{4}{x-4} + 3$

**Restriction:** $x \\ne 4$.  **LCD** $= x - 4$. Multiply every term:

$$x = 4 + 3(x-4) \\;\\Rightarrow\\; x = 4 + 3x - 12 \\;\\Rightarrow\\; x = 3x - 8$$

$$8 = 2x \\;\\Rightarrow\\; x = 4$$

> ⚠️ **Reject it!** $x = 4$ is restricted (it makes $x - 4 = 0$). It's **extraneous**, so this equation has **no solution**.`,
      },
      {
        id: 're4-extraneous-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You solve a rational equation and get $x = 5$, but the restriction is $x \\ne 5$. What do you conclude?',
              options: ['$x = 5$ is extraneous; reject it', '$x = 5$ is the answer', 'Change the restriction', 'The equation has infinite solutions'],
              correctAnswer: 0,
              explanation: 'A solution that equals a restricted value makes a denominator zero, so it cannot be valid. It is extraneous and must be rejected.',
            },
            {
              question: 'Why must you always check answers in a rational equation?',
              options: ['Multiplying by the LCD can introduce extraneous solutions', 'Fractions are always wrong', 'The LCD changes the solution set on purpose', 'To make the problem longer'],
              correctAnswer: 0,
              explanation: 'Multiplying both sides by an expression with a variable can introduce solutions that make a denominator zero — these false roots must be caught by checking.',
            },
          ],
        },
      },
      {
        id: 're4-solutioncount',
        type: 'dropdown-select' as const,
        content: `**Valid, Extraneous, or No Solution?** 🔽

For each, the algebra has been done — decide the outcome.`,
        exercise: {
          dropdowns: [
            { label: '$\\frac{1}{x-2}+\\frac{1}{x+2}=\\frac{4}{x^2-4}$ gives $x=2$. Restriction $x\\ne\\pm2$:', options: ['No solution (extraneous)', 'Valid: $x = 2$', 'Two solutions', 'Infinite solutions'] },
            { label: '$\\frac{x}{x-3}=\\frac{5}{x-3}$ gives $x=5$. Restriction $x\\ne3$:', options: ['Valid: $x = 5$', 'No solution', 'Extraneous', 'Infinite solutions'] },
            { label: 'Clearing fractions yields $7 = 7$ (always true). The equation has:', options: ['All non-restricted values as solutions', 'No solution', 'Exactly one solution', 'Exactly two solutions'] },
          ],
          correctAnswers: ['No solution (extraneous)', 'Valid: $x = 5$', 'All non-restricted values as solutions'],
          hint1: 'The first $x = 2$ equals a restriction ($x \\ne 2$), so it is extraneous.',
          hint2: 'In the second, $x = 5$ is not restricted ($x \\ne 3$ only), so it is a valid solution.',
          hint3: 'When the variable cancels and you get a true statement like $7 = 7$, every allowed $x$ works (an identity).',
          explanation: '#1: $x=2$ is restricted → extraneous → no solution. #2: $x=5$ is allowed → valid. #3: a true identity means all non-restricted values are solutions.',
        },
      },
      {
        id: 're4-work',
        type: 'text' as const,
        content: `## Application: Work-Rate Problems

Rational equations model **combined rates**. If one worker finishes a job in $a$ hours and another in $b$ hours, their **rates** are $\\frac{1}{a}$ and $\\frac{1}{b}$ jobs per hour. Working together for $t$ hours:

$$\\frac{t}{a} + \\frac{t}{b} = 1 \\quad(\\text{one completed job})$$

### Example: Pipes Filling a Pool

Pipe A fills a pool in $6$ hours; pipe B in $3$ hours. How long together?

$$\\frac{t}{6} + \\frac{t}{3} = 1$$

Multiply by the LCD $6$: $\\;t + 2t = 6 \\;\\Rightarrow\\; 3t = 6 \\;\\Rightarrow\\; t = 2$ hours.

> 💡 **Sanity check:** Together they must be **faster** than either alone. $2$ hours is less than both $6$ and $3$ ✓.`,
      },
      {
        id: 're4-work-drill',
        type: 'input-boxes' as const,
        content: `**Work-Rate Practice** 🧮

**1)** Alone, Maya paints a room in $4$ hours and Leo in $4$ hours. Together: $\\dfrac{t}{4} + \\dfrac{t}{4} = 1 \\Rightarrow t = \\,?$ hours.
**2)** A pipe fills a tank in $2$ hours, another in $6$ hours. Together $\\dfrac{t}{2} + \\dfrac{t}{6} = 1 \\Rightarrow t = \\,?$ hours.
**3)** Solve $\\dfrac{x}{x-1} = \\dfrac{1}{x-1} + 2$. If the only root is extraneous, enter $0$ for "no solution." $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '1.5', '0'],
          hint1: '#1: $\\frac{t}{4} + \\frac{t}{4} = \\frac{2t}{4} = 1 \\Rightarrow 2t = 4 \\Rightarrow t = 2$.',
          hint2: '#2: LCD $6$: $3t + t = 6 \\Rightarrow 4t = 6 \\Rightarrow t = 1.5$ hours.',
          hint3: '#3: Restriction $x \\ne 1$. LCD $x-1$: $x = 1 + 2(x-1) \\Rightarrow x = 2x - 1 \\Rightarrow x = 1$. That equals the restriction!',
          explanation: '1) $2t = 4 \\Rightarrow t = 2$.  2) $3t + t = 6 \\Rightarrow t = 1.5$.  3) Multiply by $x-1$: $x = 1 + 2(x-1) = 2x - 1 \\Rightarrow -x = -1 \\Rightarrow x = 1$. But $x \\ne 1$ is the restriction, so $x = 1$ is extraneous — no solution. Enter $0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'rational-equations-algebra2',
    sections: [
      {
        id: 're5-intro',
        type: 'text' as const,
        content: `# ➗ Solving Rational Equations

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) find restrictions, (2) build the LCD, (3) clear fractions and solve, and (4) catch extraneous solutions. Let's put it all together.`,
      },
      {
        id: 're5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Find restrictions | set each denominator $= 0$, solve |
| Build the LCD | factor denominators; take each distinct factor at its highest power |
| Clear fractions | multiply **every term** by the LCD, cancel |
| Single fraction $=$ single fraction | cross-multiply: $\\frac{a}{b}=\\frac{c}{d}\\Rightarrow ad=bc$ |
| Final step (never skip) | check answers vs. restrictions; reject extraneous roots |

> ⚠️ **The two most common mistakes:** (1) forgetting to multiply a whole-number term by the LCD, and (2) keeping a root that violates a restriction. Always check.`,
      },
      {
        id: 're5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $\\dfrac{5}{x} = \\dfrac{10}{x+3}$.',
              options: ['$x = 3$', '$x = -3$', '$x = 6$', '$x = \\frac{1}{2}$'],
              correctAnswer: 0,
              explanation: 'Cross-multiply: $5(x+3) = 10x \\Rightarrow 5x + 15 = 10x \\Rightarrow 15 = 5x \\Rightarrow x = 3$. Not restricted, so valid.',
            },
            {
              question: 'How many solutions does $\\dfrac{2}{x-1} = \\dfrac{2}{x-1}$ have (for allowed $x$)?',
              options: ['Infinitely many (all $x \\ne 1$)', 'Exactly one', 'None', 'Exactly two'],
              correctAnswer: 0,
              explanation: 'Both sides are identical, so the equation is true for every allowed value — infinitely many solutions, excluding the restriction $x = 1$.',
            },
          ],
        },
      },
      {
        id: 're5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

**1)** $\\dfrac{8}{x} = 2 \\Rightarrow x = \\,?$
**2)** $\\dfrac{x}{3} - 1 = \\dfrac{x}{6} \\Rightarrow x = \\,?$
**3)** $\\dfrac{x+2}{5} = \\dfrac{x-2}{3} \\Rightarrow x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '6', '8'],
          hint1: '#1: $8 = 2x \\Rightarrow x = 4$.',
          hint2: '#2: LCD $6$: $2x - 6 = x \\Rightarrow x = 6$.',
          hint3: '#3: Cross-multiply: $3(x+2) = 5(x-2) \\Rightarrow 3x + 6 = 5x - 10 \\Rightarrow 16 = 2x \\Rightarrow x = 8$.',
          explanation: '1) $8 = 2x \\Rightarrow x = 4$.  2) $2x - 6 = x \\Rightarrow x = 6$.  3) $3x + 6 = 5x - 10 \\Rightarrow x = 8$. All pass restrictions.',
        },
      },
      {
        id: 're5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What are the restrictions on $\\dfrac{3}{x+4} = \\dfrac{1}{x-2}$?',
              options: ['$x \\ne -4$ and $x \\ne 2$', '$x \\ne 4$ and $x \\ne -2$', '$x \\ne 3$ and $x \\ne 1$', 'no restrictions'],
              correctAnswer: 0,
              explanation: 'Set each denominator to zero: $x + 4 = 0 \\Rightarrow x = -4$, and $x - 2 = 0 \\Rightarrow x = 2$. So $x \\ne -4$ and $x \\ne 2$.',
            },
            {
              question: 'Solve $\\dfrac{4}{x} + \\dfrac{1}{2} = \\dfrac{3}{x}$.',
              options: ['$x = -2$', '$x = 2$', '$x = 1$', 'no solution'],
              correctAnswer: 0,
              explanation: 'LCD $= 2x$: $8 + x = 6 \\Rightarrow x = -2$. Check: $x = -2$ is allowed ($x \\ne 0$), and $\\frac{4}{-2} + \\frac12 = -2 + \\frac12 = -\\frac32 = \\frac{3}{-2}$ ✓.',
            },
            {
              question: 'Solving $\\dfrac{x}{x-2} = \\dfrac{2}{x-2}$ gives $x = 2$. The correct conclusion is:',
              options: ['No solution ($x = 2$ is extraneous)', '$x = 2$ is valid', '$x = 0$', 'Infinitely many solutions'],
              correctAnswer: 0,
              explanation: 'The restriction is $x \\ne 2$, but the only candidate is $x = 2$, which makes the denominator zero. It is extraneous, so the equation has no solution.',
            },
          ],
        },
      },
    ],
  },
]
