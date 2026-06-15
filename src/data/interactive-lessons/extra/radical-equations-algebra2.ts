import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Solving Radical Equations (Algebra 2).
 * Registry key: 'radical-equations-algebra2' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure mirroring the completing-the-square pilot:
 * teach → worked examples → interactive practice (multiple-choice + input-boxes
 * + dropdown) → exit quiz. LaTeX uses DOUBLED backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'radical-equations-algebra2',
    sections: [
      {
        id: 're1-intro',
        type: 'text' as const,
        content: `# 🌱 Solving Radical Equations

**Part 1 of 5 — Square Roots & the Big Idea**

---

### Topics in This Part

| Section |
|---------|
| What Is a Radical Equation? |
| The Inverse Move: Squaring |
| Isolate Before You Square |

> 🔑 **Key Concept:** A **radical equation** has the variable trapped *underneath* a root sign. To free it, you undo the root with its inverse — squaring undoes a square root. Everything in this lesson grows from that one idea.`,
      },
      {
        id: 're1-what',
        type: 'text' as const,
        content: `## What Is a Radical Equation?

A **radical equation** is any equation where the variable lives inside a radical (a root):

$$\\sqrt{x} = 5, \\qquad \\sqrt{x + 3} = 4, \\qquad \\sqrt{2x - 1} = 3$$

The expression under the root sign is called the **radicand**. Our whole job is to get the variable *out* from under that root.

### The Inverse of a Square Root

Squaring and square-rooting are **inverse operations** — each undoes the other:

$$\\left(\\sqrt{x}\\right)^2 = x \\qquad\\text{and}\\qquad \\sqrt{x^2} = |x|$$

So to solve $\\sqrt{x} = 5$, square **both sides**:

$$\\left(\\sqrt{x}\\right)^2 = 5^2 \\;\\Rightarrow\\; x = 25$$

> ✅ **Check:** $\\sqrt{25} = 5$ ✓`,
      },
      {
        id: 're1-recognize',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which equation is a radical equation?',
              options: ['$x^2 + 4 = 13$', '$\\sqrt{x - 1} = 6$', '$\\frac{x}{2} = 9$', '$3x + 5 = 11$'],
              correctAnswer: 1,
              explanation: 'A radical equation has the variable inside a root sign. Only $\\sqrt{x-1}=6$ has $x$ under a radical. The first is a quadratic, not radical.',
            },
            {
              question: 'To undo a square root, you should:',
              options: ['add the same number to both sides', 'square both sides', 'divide both sides by 2', 'take the square root of both sides again'],
              correctAnswer: 1,
              explanation: 'Squaring is the inverse of a square root: $\\left(\\sqrt{x}\\right)^2 = x$, which frees the variable from the radical.',
            },
          ],
        },
      },
      {
        id: 're1-solve-basic',
        type: 'input-boxes' as const,
        content: `**Square to Solve** 🧮

Solve each equation by squaring both sides.

**1)** $\\sqrt{x} = 7,\\quad x = \\,?$
**2)** $\\sqrt{x} = 12,\\quad x = \\,?$
**3)** $\\sqrt{x + 3} = 4,\\quad x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['49', '144', '13'],
          hint1: 'Squaring both sides of $\\sqrt{x}=7$ gives $x = 7^2 = 49$.',
          hint2: '$\\left(\\sqrt{x}\\right)^2 = 12^2$, so $x = 144$.',
          hint3: 'Square: $x + 3 = 16$, then subtract $3$ to get $x = 13$.',
          explanation: '1) $x = 49$.  2) $x = 144$.  3) $x + 3 = 16 \\Rightarrow x = 13$. Check: $\\sqrt{16}=4$ ✓.',
        },
      },
      {
        id: 're1-isolate',
        type: 'text' as const,
        content: `## Isolate the Radical *First*

Squaring only cleanly removes the root when the radical is **alone** on one side. If something is added, subtracted, or multiplied outside the root, deal with that *first*.

### Worked Example: $\\sqrt{x} + 2 = 9$

If you squared right now, the left side would become a messy $\\left(\\sqrt{x}+2\\right)^2$. Instead, **isolate** the radical:

$$\\sqrt{x} + 2 = 9 \\;\\Rightarrow\\; \\sqrt{x} = 7 \\;\\Rightarrow\\; x = 49$$

### Worked Example: $3\\sqrt{x} = 12$

Divide first, **then** square:

$$3\\sqrt{x} = 12 \\;\\Rightarrow\\; \\sqrt{x} = 4 \\;\\Rightarrow\\; x = 16$$

> ⚠️ **Golden Rule:** *Isolate the radical before you square.* Squaring a sum like $\\sqrt{x}+2$ creates a brand-new radical and makes the problem harder, not easier.`,
      },
      {
        id: 're1-isolate-check',
        type: 'dropdown-select' as const,
        content: `**Isolate, Then Square** 🔽

You're solving $2\\sqrt{x} - 1 = 9$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'First, add $1$ to both sides:', options: ['$2\\sqrt{x} = 10$', '$2\\sqrt{x} = 8$', '$\\sqrt{x} = 10$', '$2\\sqrt{x} = 9$'] },
            { label: 'Then divide by $2$:', options: ['$\\sqrt{x} = 5$', '$\\sqrt{x} = 10$', '$\\sqrt{x} = 8$', '$x = 5$'] },
            { label: 'Now square both sides:', options: ['$x = 25$', '$x = 10$', '$x = 5$', '$x = 100$'] },
          ],
          correctAnswers: ['$2\\sqrt{x} = 10$', '$\\sqrt{x} = 5$', '$x = 25$'],
          hint1: 'Add $1$ to both sides: $2\\sqrt{x} = 9 + 1 = 10$.',
          hint2: 'Divide by $2$ to isolate the radical: $\\sqrt{x} = 5$.',
          hint3: 'Square both sides: $x = 5^2 = 25$.',
          explanation: '$2\\sqrt{x}-1=9 \\Rightarrow 2\\sqrt{x}=10 \\Rightarrow \\sqrt{x}=5 \\Rightarrow x=25$. Check: $2\\sqrt{25}-1 = 10-1 = 9$ ✓.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'radical-equations-algebra2',
    sections: [
      {
        id: 're2-intro',
        type: 'text' as const,
        content: `# 🌱 Solving Radical Equations

**Part 2 of 5 — Extraneous Solutions**

---

> 🔑 **The Catch:** Squaring both sides can *create* solutions that don't actually work. These fake answers are called **extraneous solutions**. You must **check every answer** in the *original* equation.`,
      },
      {
        id: 're2-why',
        type: 'text' as const,
        content: `## Why Fake Solutions Appear

Squaring is not perfectly reversible. Look:

$$3 = 3 \\quad\\text{is true, and}\\quad (-3)^2 = 3^2 \\quad\\text{is also true.}$$

Squaring erases the *sign* of a number. So when you square both sides of an equation, you may accidentally pull in a "negative-version" answer that the original equation never allowed.

### The Tell-Tale Sign

The principal square root symbol $\\sqrt{\\;}$ **only ever outputs a non-negative number**. So:

$$\\sqrt{x} = -2 \\quad\\text{has NO solution.}$$

But if you square it carelessly, you get $x = 4$ — and $\\sqrt{4} = 2 \\ne -2$. That $x=4$ is **extraneous**.

> ⚠️ **Mandatory Step:** After solving, substitute each candidate back into the **original** equation. Keep only the ones that make it true.`,
      },
      {
        id: 're2-extraneous-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many real solutions does $\\sqrt{x} = -5$ have?',
              options: ['none', 'one: $x = 25$', 'one: $x = -25$', 'two: $x = \\pm 25$'],
              correctAnswer: 0,
              explanation: 'The principal square root is never negative, so $\\sqrt{x}=-5$ is impossible. Squaring gives $x=25$, but $\\sqrt{25}=5\\ne-5$ — extraneous. No solution.',
            },
            {
              question: 'Why can squaring both sides introduce extraneous solutions?',
              options: ['It changes the degree of the equation only', 'It destroys sign information, since $(-a)^2 = a^2$', 'It always adds exactly one extra root', 'It never does — squaring is fully reversible'],
              correctAnswer: 1,
              explanation: 'Because $(-a)^2 = a^2$, squaring loses the sign. A negative value that failed the original equation can survive squaring, becoming an extraneous (fake) solution.',
            },
          ],
        },
      },
      {
        id: 're2-worked-check',
        type: 'text' as const,
        content: `## Worked Example: Catching an Extraneous Root

Solve $\\sqrt{x + 2} = x$.

**Step 1 — Square both sides:**
$$x + 2 = x^2$$

**Step 2 — Rearrange into a quadratic:**
$$x^2 - x - 2 = 0 \\;\\Rightarrow\\; (x - 2)(x + 1) = 0$$

**Step 3 — Candidates:** $x = 2$ or $x = -1$.

**Step 4 — Check BOTH in the original:**

| Candidate | $\\sqrt{x+2}$ | $x$ | Valid? |
|-----------|--------------|-----|--------|
| $x = 2$ | $\\sqrt{4} = 2$ | $2$ | ✓ keep |
| $x = -1$ | $\\sqrt{1} = 1$ | $-1$ | ✗ extraneous |

The only real solution is $\\boxed{x = 2}$. The candidate $x=-1$ fails because $\\sqrt{1}=1$, not $-1$.`,
      },
      {
        id: 're2-check-drill',
        type: 'dropdown-select' as const,
        content: `**Valid or Extraneous?** 🔽

Solve $\\sqrt{x + 7} = x + 1$. Squaring gives $x^2 + x - 6 = 0$, so the candidates are $x = 2$ and $x = -3$. Check each.`,
        exercise: {
          dropdowns: [
            { label: 'Check $x = 2$: is $\\sqrt{2+7} = 2+1$?', options: ['valid', 'extraneous'] },
            { label: 'Check $x = -3$: is $\\sqrt{-3+7} = -3+1$?', options: ['valid', 'extraneous'] },
            { label: 'So the solution set is:', options: ['$\\{2\\}$', '$\\{-3\\}$', '$\\{2, -3\\}$', '$\\{\\}$'] },
          ],
          correctAnswers: ['valid', 'extraneous', '$\\{2\\}$'],
          hint1: 'For $x=2$: $\\sqrt{9} = 3$ and $x+1 = 3$. They match, so it is valid.',
          hint2: 'For $x=-3$: $\\sqrt{4} = 2$ but $x+1 = -2$. Since $2 \\ne -2$, it is extraneous.',
          hint3: 'Only $x=2$ survives the check, so the solution set is $\\{2\\}$.',
          explanation: '$x=2$: $\\sqrt{9}=3=2+1$ ✓.  $x=-3$: $\\sqrt{4}=2$ but $-3+1=-2$, so $2\\ne-2$ — extraneous. Solution set $\\{2\\}$.',
        },
      },
      {
        id: 're2-solve-drill',
        type: 'input-boxes' as const,
        content: `**Solve and Verify** 🧮

Solve each, then keep only the valid root(s). Enter the **valid** solution.

**1)** $\\sqrt{x} = -3 \\Rightarrow$ how many solutions? *(enter the number 0, 1, or 2)*
**2)** $\\sqrt{x - 4} = x - 6 \\Rightarrow$ the single valid solution is $x = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['0', '8'],
          hint1: 'A square root cannot equal a negative number, so $\\sqrt{x}=-3$ has $0$ solutions.',
          hint2: 'Square: $x-4 = (x-6)^2 = x^2-12x+36$, so $x^2-13x+40=0 \\Rightarrow (x-5)(x-8)=0$.',
          hint3: 'Candidates $5$ and $8$. Check $x=5$: $\\sqrt{1}=1$ but $5-6=-1$ ✗. Check $x=8$: $\\sqrt{4}=2$ and $8-6=2$ ✓.',
          explanation: '1) $0$ solutions — a principal root is never negative.  2) Candidates $5,8$; only $x=8$ checks ($\\sqrt{4}=2=8-6$). $x=5$ is extraneous.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'radical-equations-algebra2',
    sections: [
      {
        id: 're3-intro',
        type: 'text' as const,
        content: `# 🌱 Solving Radical Equations

**Part 3 of 5 — Equations That Become Quadratics**

---

> 🔑 **Pattern:** When you square a radical equal to a *binomial* (like $x-2$), the squared side becomes a **quadratic**. Solve it by factoring or the quadratic formula, then check for extraneous roots.`,
      },
      {
        id: 're3-square-binomial',
        type: 'text' as const,
        content: `## Squaring a Binomial Correctly

The number-one error here is forgetting the **middle term**. Remember:

$$(x - 3)^2 = x^2 - 6x + 9 \\quad\\text{NOT}\\quad x^2 - 9$$

Use the rule $(a \\pm b)^2 = a^2 \\pm 2ab + b^2$ every single time.

### Worked Example: $\\sqrt{x + 5} = x - 1$

**Square both sides** (watch the right side!):
$$x + 5 = (x - 1)^2 = x^2 - 2x + 1$$

**Move everything to one side:**
$$0 = x^2 - 3x - 4 = (x - 4)(x + 1)$$

**Candidates:** $x = 4$ or $x = -1$.

**Check:**
- $x = 4$: $\\sqrt{9} = 3$ and $4 - 1 = 3$ ✓
- $x = -1$: $\\sqrt{4} = 2$ but $-1 - 1 = -2$ ✗ (extraneous)

**Solution:** $x = 4$.`,
      },
      {
        id: 're3-square-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $(x + 4)^2$?',
              options: ['$x^2 + 16$', '$x^2 + 8x + 16$', '$x^2 + 4x + 16$', '$x^2 + 8x + 8$'],
              correctAnswer: 1,
              explanation: '$(x+4)^2 = x^2 + 2\\cdot 4 \\cdot x + 4^2 = x^2 + 8x + 16$. The middle term $8x$ is essential — never drop it.',
            },
            {
              question: 'Squaring both sides of $\\sqrt{2x + 3} = x$ gives:',
              options: ['$2x + 3 = x^2$', '$2x + 3 = x$', '$4x^2 + 9 = x^2$', '$2x + 3 = 2x^2$'],
              correctAnswer: 0,
              explanation: 'The left squares to remove the root: $\\left(\\sqrt{2x+3}\\right)^2 = 2x+3$. The right squares to $x^2$. So $2x + 3 = x^2$.',
            },
          ],
        },
      },
      {
        id: 're3-worked2',
        type: 'text' as const,
        content: `## Worked Example: Both Candidates Valid

Solve $\\sqrt{3x + 1} = x + 1$.

**Square both sides:**
$$3x + 1 = (x + 1)^2 = x^2 + 2x + 1$$

**Simplify:**
$$0 = x^2 - x = x(x - 1)$$

**Candidates:** $x = 0$ or $x = 1$.

**Check:**
- $x = 0$: $\\sqrt{1} = 1$ and $0 + 1 = 1$ ✓
- $x = 1$: $\\sqrt{4} = 2$ and $1 + 1 = 2$ ✓

> 💡 **Both** answers work! Extraneous roots are common but *not guaranteed*. That's exactly why you check — to find out which (if any) survive. Solution: $x = 0$ and $x = 1$.`,
      },
      {
        id: 're3-quad-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Quadratic** 🔽

You're solving $\\sqrt{x + 3} = x - 3$. Choose each step.`,
        exercise: {
          dropdowns: [
            { label: 'Square both sides:', options: ['$x + 3 = x^2 - 6x + 9$', '$x + 3 = x^2 - 9$', '$x + 3 = x^2 + 9$', '$x + 3 = x - 3$'] },
            { label: 'Collect into standard form:', options: ['$x^2 - 7x + 6 = 0$', '$x^2 - 5x + 12 = 0$', '$x^2 - 7x + 12 = 0$', '$x^2 + 7x + 6 = 0$'] },
            { label: 'Factor:', options: ['$(x-1)(x-6)$', '$(x-2)(x-3)$', '$(x-6)(x+1)$', '$(x+1)(x+6)$'] },
            { label: 'After checking, the valid solution is:', options: ['$x = 6$', '$x = 1$', '$x = 1$ and $x = 6$', 'no solution'] },
          ],
          correctAnswers: ['$x + 3 = x^2 - 6x + 9$', '$x^2 - 7x + 6 = 0$', '$(x-1)(x-6)$', '$x = 6$'],
          hint1: '$(x-3)^2 = x^2 - 6x + 9$, so $x + 3 = x^2 - 6x + 9$.',
          hint2: 'Move the left side over: $0 = x^2 - 6x + 9 - x - 3 = x^2 - 7x + 6$.',
          hint3: 'Factor $x^2-7x+6 = (x-1)(x-6)$. Check $x=1$: $\\sqrt{4}=2$ but $1-3=-2$ ✗. Check $x=6$: $\\sqrt{9}=3=6-3$ ✓.',
          explanation: 'Squaring gives $x+3 = x^2-6x+9 \\Rightarrow x^2-7x+6=0 \\Rightarrow (x-1)(x-6)=0$. Only $x=6$ checks; $x=1$ is extraneous.',
        },
      },
      {
        id: 're3-quad-drill',
        type: 'input-boxes' as const,
        content: `**Solve the Quadratic-Producing Equation** 🧮

Solve each and enter the valid solution.

**1)** $\\sqrt{x + 6} = x \\Rightarrow x = \\,?$  *(one valid root)*
**2)** $\\sqrt{5x - 1} = x + 1 \\Rightarrow$ enter the **larger** valid root, $x = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '2'],
          hint1: '$\\sqrt{x+6}=x$: square to $x+6 = x^2$, so $x^2-x-6=(x-3)(x+2)=0$. Candidates $3, -2$.',
          hint2: 'Check $x=3$: $\\sqrt{9}=3$ ✓. Check $x=-2$: $\\sqrt{4}=2\\ne-2$ ✗. So $x=3$.',
          hint3: '$\\sqrt{5x-1}=x+1$: $5x-1 = x^2+2x+1 \\Rightarrow x^2-3x+2=(x-1)(x-2)=0$. Both $x=1,2$ check; larger is $2$.',
          explanation: '1) $(x-3)(x+2)=0$; only $x=3$ valid.  2) $(x-1)(x-2)=0$; both valid — $x=1$ ($\\sqrt{4}=2$) and $x=2$ ($\\sqrt{9}=3$). Larger is $2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'radical-equations-algebra2',
    sections: [
      {
        id: 're4-intro',
        type: 'text' as const,
        content: `# 🌱 Solving Radical Equations

**Part 4 of 5 — Cube Roots & Two Radicals**

---

> 🔑 **Two New Tools:** (1) **Cube roots** are undone by *cubing* and never produce extraneous solutions. (2) When **two radicals** appear, isolate one, square, and sometimes square a *second* time.`,
      },
      {
        id: 're4-cube',
        type: 'text' as const,
        content: `## Cube Roots (and Higher Odd Roots)

A cube root is undone by **cubing** both sides:

$$\\left(\\sqrt[3]{x}\\right)^3 = x$$

### Worked Example: $\\sqrt[3]{2x - 3} = 3$

**Cube both sides:**
$$2x - 3 = 3^3 = 27 \\;\\Rightarrow\\; 2x = 30 \\;\\Rightarrow\\; x = 15$$

> ✅ **Check:** $\\sqrt[3]{2(15) - 3} = \\sqrt[3]{27} = 3$ ✓

### Why No Extraneous Solutions?

Cube roots accept **and** return negative numbers: $\\sqrt[3]{-8} = -2$. Cubing does **not** erase sign information the way squaring does, so **odd roots never create extraneous solutions**. You still *should* check for arithmetic slips, but the sign trap is gone.

> 💡 **Rule of thumb:** *Even* roots (square, fourth, …) can spawn extraneous solutions; *odd* roots (cube, fifth, …) cannot.`,
      },
      {
        id: 're4-cube-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To solve $\\sqrt[3]{x} = 4$, you should:',
              options: ['square both sides', 'cube both sides', 'multiply both sides by 3', 'take a cube root of both sides'],
              correctAnswer: 1,
              explanation: 'Cubing is the inverse of a cube root: $\\left(\\sqrt[3]{x}\\right)^3 = x$. So $x = 4^3 = 64$.',
            },
            {
              question: 'Which type of radical equation can produce extraneous solutions?',
              options: ['cube-root equations', 'fifth-root equations', 'square-root equations', 'odd-root equations in general'],
              correctAnswer: 2,
              explanation: 'Even roots (like square roots) can create extraneous solutions because squaring erases sign. Odd roots (cube, fifth, …) cannot.',
            },
          ],
        },
      },
      {
        id: 're4-cube-drill',
        type: 'input-boxes' as const,
        content: `**Cube-Root Practice** 🧮

Solve each by cubing both sides.

**1)** $\\sqrt[3]{x} = 2 \\Rightarrow x = \\,?$
**2)** $\\sqrt[3]{x - 1} = 3 \\Rightarrow x = \\,?$
**3)** $\\sqrt[3]{x} = -5 \\Rightarrow x = \\,?$  *(odd roots allow negatives!)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '28', '-125'],
          hint1: 'Cube both sides: $x = 2^3 = 8$.',
          hint2: 'Cube: $x - 1 = 3^3 = 27$, so $x = 28$.',
          hint3: 'Cube: $x = (-5)^3 = -125$. A cube root CAN equal a negative, so this is valid.',
          explanation: '1) $x = 8$.  2) $x - 1 = 27 \\Rightarrow x = 28$.  3) $x = (-5)^3 = -125$, and $\\sqrt[3]{-125} = -5$ ✓ (no extraneous issue for odd roots).',
        },
      },
      {
        id: 're4-two-radicals',
        type: 'text' as const,
        content: `## Two Radicals

### Case A: A Radical on Each Side

If both sides are a single radical, square once and the roots vanish together.

**Solve $\\sqrt{x + 5} = \\sqrt{2x - 1}$:**
$$x + 5 = 2x - 1 \\;\\Rightarrow\\; 6 = x$$

> ✅ **Check:** $\\sqrt{6+5} = \\sqrt{11}$ and $\\sqrt{2(6)-1} = \\sqrt{11}$ ✓

### Case B: A Radical Plus a Term

When a loose term is in the way, you may need to square **twice**.

**Solve $\\sqrt{x + 4} = x - 8$** *(already isolated)*:
$$x + 4 = (x-8)^2 = x^2 - 16x + 64 \\;\\Rightarrow\\; x^2 - 17x + 60 = 0$$
$$(x - 5)(x - 12) = 0 \\;\\Rightarrow\\; x = 5 \\text{ or } 12$$

**Check:** $x=12$: $\\sqrt{16}=4=12-8$ ✓. $\\;x=5$: $\\sqrt{9}=3$ but $5-8=-3$ ✗. **Solution $x=12$.**`,
      },
      {
        id: 're4-two-radical-dropdown',
        type: 'dropdown-select' as const,
        content: `**Two Radicals, One Square** 🔽

Solve $\\sqrt{3x + 4} = \\sqrt{x + 10}$.`,
        exercise: {
          dropdowns: [
            { label: 'Square both sides:', options: ['$3x + 4 = x + 10$', '$3x + 4 = x^2 + 10$', '$9x + 16 = x + 10$', '$3x + 4 = (x+10)^2$'] },
            { label: 'Solve the linear equation:', options: ['$x = 3$', '$x = 7$', '$x = 2$', '$x = -3$'] },
            { label: 'Check $x = 3$ in the original:', options: ['valid', 'extraneous'] },
          ],
          correctAnswers: ['$3x + 4 = x + 10$', '$x = 3$', 'valid'],
          hint1: 'Squaring each single radical removes both roots: $3x+4 = x+10$.',
          hint2: 'Subtract $x$ and $4$: $2x = 6$, so $x = 3$.',
          hint3: 'Check: $\\sqrt{3(3)+4} = \\sqrt{13}$ and $\\sqrt{3+10} = \\sqrt{13}$. Equal, so valid.',
          explanation: '$3x+4 = x+10 \\Rightarrow 2x=6 \\Rightarrow x=3$. Both sides give $\\sqrt{13}$, so $x=3$ is valid.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'radical-equations-algebra2',
    sections: [
      {
        id: 're5-intro',
        type: 'text' as const,
        content: `# 🌱 Solving Radical Equations

**Part 5 of 5 — Applications & Mastery Check**

---

You can now (1) isolate and square, (2) catch extraneous solutions, (3) solve equations that become quadratics, and (4) handle cube roots and two radicals. Time to apply it and prove mastery.`,
      },
      {
        id: 're5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Situation | Key move |
|-----------|----------|
| Single square root | Isolate, then square both sides |
| Radical $=$ a binomial | Square → quadratic → factor → **check** |
| Cube root | Cube both sides (no extraneous trap) |
| Radical on each side | Square once; roots cancel together |
| Loose term blocks the root | Isolate; sometimes square **twice** |

> ⚠️ **Never skip the check** for *even* roots. The principal square root is always $\\ge 0$, so any "solution" making a root equal a negative is extraneous.`,
      },
      {
        id: 're5-application',
        type: 'text' as const,
        content: `## Application: A Real Formula

The time $t$ (in seconds) for an object to fall a distance $d$ (in feet) follows:

$$t = \\frac{1}{4}\\sqrt{d}$$

**Question:** How far does an object fall in $t = 3$ seconds?

**Solve for $d$:**
$$3 = \\frac{1}{4}\\sqrt{d} \\;\\Rightarrow\\; 12 = \\sqrt{d} \\;\\Rightarrow\\; d = 144 \\text{ feet}$$

> ✅ **Check:** $\\frac{1}{4}\\sqrt{144} = \\frac{1}{4}(12) = 3$ ✓

Radical equations model falling objects, pendulum periods, and electrical formulas — isolating the radical and squaring is the same skill every time.`,
      },
      {
        id: 're5-application-drill',
        type: 'input-boxes' as const,
        content: `**Apply It** 🧮

Using the pendulum-style formula $T = 2\\sqrt{L}$ (period $T$ in seconds, length $L$ in meters):

**1)** If $T = 6$, isolate the radical: $\\sqrt{L} = \\,?$
**2)** Solve for the length $L = \\,?$ meters.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '9'],
          hint1: 'Divide both sides of $6 = 2\\sqrt{L}$ by $2$ to get $\\sqrt{L} = 3$.',
          hint2: 'Square both sides: $L = 3^2 = 9$.',
          hint3: 'Check: $2\\sqrt{9} = 2(3) = 6$ ✓.',
          explanation: '$6 = 2\\sqrt{L} \\Rightarrow \\sqrt{L} = 3 \\Rightarrow L = 9$ meters. Check: $2\\sqrt{9}=6$ ✓.',
        },
      },
      {
        id: 're5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $\\sqrt{4x - 3} = 5$.',
              options: ['$x = 7$', '$x = 5$', '$x = 28$', '$x = 11$'],
              correctAnswer: 0,
              explanation: 'Square: $4x - 3 = 25 \\Rightarrow 4x = 28 \\Rightarrow x = 7$. Check: $\\sqrt{4(7)-3} = \\sqrt{25} = 5$ ✓.',
            },
            {
              question: 'Solve $\\sqrt{x + 12} = x$.',
              options: ['$x = 4$', '$x = -3$', '$x = 4$ and $x = -3$', 'no solution'],
              correctAnswer: 0,
              explanation: 'Square: $x+12 = x^2 \\Rightarrow x^2-x-12 = (x-4)(x+3)=0$. Candidates $4,-3$. Only $x=4$ checks ($\\sqrt{16}=4$); $x=-3$ gives $\\sqrt{9}=3\\ne-3$ — extraneous.',
            },
          ],
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
              question: 'What is the FIRST step in solving $5 + \\sqrt{x - 2} = 9$?',
              options: ['Square both sides immediately', 'Subtract $5$ to isolate the radical', 'Add $2$ to both sides', 'Divide both sides by $5$'],
              correctAnswer: 1,
              explanation: 'Isolate the radical first: $\\sqrt{x-2} = 4$. Only then square to get $x-2=16$, so $x=18$.',
            },
            {
              question: 'Which value is an EXTRANEOUS solution of $\\sqrt{x + 6} = x$?',
              options: ['$x = 3$', '$x = -2$', '$x = 6$', 'there are none'],
              correctAnswer: 1,
              explanation: 'Squaring gives $(x-3)(x+2)=0$, so candidates $3,-2$. $x=3$ checks ($\\sqrt{9}=3$); $x=-2$ gives $\\sqrt{4}=2\\ne-2$ — extraneous.',
            },
            {
              question: 'Solve the cube-root equation $\\sqrt[3]{x + 5} = -2$.',
              options: ['$x = -13$', '$x = 3$', 'no solution', '$x = -3$'],
              correctAnswer: 0,
              explanation: 'Cube both sides: $x + 5 = (-2)^3 = -8$, so $x = -13$. Odd roots accept negatives: $\\sqrt[3]{-13+5} = \\sqrt[3]{-8} = -2$ ✓.',
            },
          ],
        },
      },
    ],
  },
]
