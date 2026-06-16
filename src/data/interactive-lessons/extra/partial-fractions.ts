import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Integration by Partial Fractions (AP Calculus AB/BC).
 * Registry key / DB Topic.slug: 'partial-fractions'.
 * 7 parts, gold-standard structure: why decompose → distinct linear factors (cover-up)
 * → solving the coefficient system + repeated linear factors → irreducible quadratics
 * → improper fractions (long division first) → integrating the pieces (ln & arctan)
 * → applications + mixed practice & exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every decomposition and integral was recomputed by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'partial-fractions',
    sections: [
      {
        id: 'pf1-intro',
        type: 'text' as const,
        content: `# 🧩 Integration by Partial Fractions

**Part 1 of 7 — Why Break a Fraction Apart?**

---

### Topics in This Part

| Section |
|---------|
| The Problem with Rational Functions |
| Proper vs. Improper Fractions |
| The Big Picture of Decomposition |

> 🔑 **Key Concept:** A messy quotient of polynomials like $\\dfrac{5x-4}{x^2-x-2}$ has no obvious antiderivative. But split it into a *sum* of simpler fractions and each piece integrates to a $\\ln$ or an $\\arctan$. That splitting is **partial fraction decomposition**.`,
      },
      {
        id: 'pf1-problem',
        type: 'text' as const,
        content: `## The Problem with Rational Functions

A **rational function** is a quotient of polynomials, $\\dfrac{P(x)}{Q(x)}$. You already know two friendly cases:

$$\\int \\frac{1}{x}\\,dx = \\ln\\lvert x\\rvert + C \\qquad \\int \\frac{1}{x^2+1}\\,dx = \\arctan x + C$$

But what about something like

$$\\int \\frac{5x-4}{x^2 - x - 2}\\,dx \\;?$$

There's no power rule, no $u$-substitution that clears it, no product to expand. The denominator **factors**, though: $x^2 - x - 2 = (x-2)(x+1)$. The whole strategy of this lesson is to *reverse* the process of adding fractions over a common denominator.

> 💡 Adding $\\dfrac{3}{x-2} + \\dfrac{2}{x+1}$ gives a single ugly fraction. Partial fractions runs that backward: ugly fraction $\\to$ sum of easy ones.`,
      },
      {
        id: 'pf1-reverse',
        type: 'text' as const,
        content: `## Decomposition Is Just Reverse-Adding

Watch the two directions. Adding over a common denominator:

$$\\frac{3}{x-2} + \\frac{2}{x+1} = \\frac{3(x+1) + 2(x-2)}{(x-2)(x+1)} = \\frac{5x - 1}{x^2 - x - 2}$$

So **decomposing** $\\dfrac{5x-1}{x^2-x-2}$ must give back $\\dfrac{3}{x-2} + \\dfrac{2}{x+1}$.

Each piece on the right is trivial to integrate:

$$\\int\\!\\left(\\frac{3}{x-2} + \\frac{2}{x+1}\\right)dx = 3\\ln\\lvert x-2\\rvert + 2\\ln\\lvert x+1\\rvert + C$$

> 🔑 **The Whole Method in One Line:** Factor the denominator, write one simple fraction per factor with *unknown* numerators, solve for the unknowns, then integrate each simple fraction.`,
      },
      {
        id: 'pf1-recognize',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Why do we use partial fractions on $\\dfrac{5x-4}{x^2-x-2}$?',
              options: [
                'To rewrite it as a sum of fractions that each integrate easily',
                'To find the roots of the numerator',
                'To make the denominator larger',
                'To turn it into a polynomial',
              ],
              correctAnswer: 0,
              explanation: 'Partial fractions splits one hard quotient into a sum of simple fractions (each a $\\ln$ or $\\arctan$ after integrating). It does not change the function — just its form.',
            },
            {
              question: 'Adding $\\dfrac{1}{x-1} + \\dfrac{1}{x+1}$ gives which single fraction?',
              options: ['$\\dfrac{2x}{x^2-1}$', '$\\dfrac{2}{x^2-1}$', '$\\dfrac{2x}{x^2+1}$', '$\\dfrac{1}{x^2-1}$'],
              correctAnswer: 0,
              explanation: 'Common denominator $(x-1)(x+1)=x^2-1$. Numerator: $(x+1)+(x-1)=2x$. So $\\dfrac{2x}{x^2-1}$. Decomposition reverses this.',
            },
          ],
        },
      },
      {
        id: 'pf1-proper',
        type: 'text' as const,
        content: `## Proper vs. Improper — Check This First

Decomposition only works directly on a **proper** fraction: the numerator's degree must be **less than** the denominator's degree.

| Fraction | Top degree | Bottom degree | Proper? |
|----------|-----------|---------------|---------|
| $\\dfrac{5x-4}{x^2-x-2}$ | $1$ | $2$ | ✅ yes |
| $\\dfrac{3}{x^2+4}$ | $0$ | $2$ | ✅ yes |
| $\\dfrac{x^2+1}{x-3}$ | $2$ | $1$ | ❌ no (improper) |
| $\\dfrac{x^3}{x^2-1}$ | $3$ | $2$ | ❌ no (improper) |

> ⚠️ **If the fraction is improper, do polynomial long division *first*** (Part 5). Skip it and your decomposition won't have enough room and will fail. For now we'll work only with proper fractions.`,
      },
      {
        id: 'pf1-proper-check',
        type: 'dropdown-select' as const,
        content: `**Proper or Improper?** 🔽

Decide whether each fraction is ready for direct decomposition.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{x+2}{x^2+5x+6}$ is:', options: ['proper', 'improper'] },
            { label: '$\\dfrac{x^2-1}{x+4}$ is:', options: ['proper', 'improper'] },
            { label: '$\\dfrac{7}{(x-1)(x+3)}$ is:', options: ['proper', 'improper'] },
            { label: '$\\dfrac{2x^3+x}{x^2+9}$ is:', options: ['proper', 'improper'] },
          ],
          correctAnswers: ['proper', 'improper', 'proper', 'improper'],
          hint1: 'Compare the highest power on top to the highest power on bottom.',
          hint2: 'Proper means top degree $<$ bottom degree.',
          hint3: 'Multiply out the denominator if needed to see its degree. $(x-1)(x+3)$ is degree $2$.',
          explanation: '1) top $1 <$ bottom $2$ → proper. 2) top $2 >$ bottom $1$ → improper. 3) top $0 <$ bottom $2$ → proper. 4) top $3 >$ bottom $2$ → improper.',
        },
      },
      {
        id: 'pf1-reverse-check',
        type: 'input-boxes' as const,
        content: `**Run It Forward First** 🧮

Decomposition is just *reverse-adding*, so make sure you can add. Combine over a common denominator:

$$\\frac{2}{x-3} + \\frac{1}{x+2} = \\frac{?\\,x + ?}{x^2 - x - 6}$$

Enter the numerator's coefficients (it is $a\\,x + b$).

**1)** $a$ (coefficient of $x$) $= \\,?$
**2)** $b$ (constant) $= \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '1'],
          hint1: 'Common denominator is $(x-3)(x+2)=x^2-x-6$. Build the numerator $2(x+2)+1(x-3)$.',
          hint2: 'Expand: $2(x+2)=2x+4$ and $1(x-3)=x-3$.',
          hint3: 'Add them: $(2x+4)+(x-3) = 3x+1$, so $a=3$ and $b=1$.',
          explanation: 'Over $(x-3)(x+2)=x^2-x-6$ the numerator is $2(x+2)+1(x-3)=2x+4+x-3=3x+1$. So $\\dfrac{2}{x-3}+\\dfrac{1}{x+2}=\\dfrac{3x+1}{x^2-x-6}$, giving $a=3,\\ b=1$. Partial fractions runs this exact computation backward.',
        },
      },
      {
        id: 'pf1-wrap',
        type: 'text' as const,
        content: `## What's Coming

Here is the road map for the whole lesson:

1. **Distinct linear factors** — one constant over each factor (Part 2).
2. **Solving for the constants** — cover-up method and matching coefficients (Parts 2–3).
3. **Repeated linear factors** — a term for *every* power (Part 3).
4. **Irreducible quadratic factors** — a linear numerator $Ax+B$ (Part 4).
5. **Improper fractions** — long division first (Part 5).
6. **Integrating the pieces** — $\\ln$ and $\\arctan$ (Part 6).
7. **Applications, mixed practice, and the exit quiz** (Part 7).

> 🔑 Everything starts with **factoring the denominator completely**. The *shape* of those factors dictates the *shape* of the decomposition. Onward to the simplest case.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'partial-fractions',
    sections: [
      {
        id: 'pf2-intro',
        type: 'text' as const,
        content: `# 🧩 Integration by Partial Fractions

**Part 2 of 7 — Distinct Linear Factors**

---

> 🔑 **The Setup:** When the denominator factors into **different** linear pieces, write **one constant over each factor**:
> $$\\frac{P(x)}{(x-a)(x-b)} = \\frac{A}{x-a} + \\frac{B}{x-b}.$$`,
      },
      {
        id: 'pf2-setup',
        type: 'text' as const,
        content: `## Writing the Form

For $\\dfrac{5x-4}{(x-2)(x+1)}$, set up unknown constants $A$ and $B$:

$$\\frac{5x-4}{(x-2)(x+1)} = \\frac{A}{x-2} + \\frac{B}{x+1}$$

**Clear the denominators** by multiplying both sides by $(x-2)(x+1)$:

$$5x - 4 = A(x+1) + B(x-2)$$

This must hold for **every** $x$. We get to pick convenient values of $x$ to peel off one unknown at a time.`,
      },
      {
        id: 'pf2-coverup',
        type: 'text' as const,
        content: `## The Cover-Up Trick (Strategic Values)

Pick $x$ to **kill** one factor:

**Let $x = 2$** (kills the $B$ term, since $x-2=0$):
$$5(2) - 4 = A(2+1) + B(0) \\;\\Rightarrow\\; 6 = 3A \\;\\Rightarrow\\; A = 2$$

**Let $x = -1$** (kills the $A$ term, since $x+1=0$):
$$5(-1) - 4 = A(0) + B(-1-2) \\;\\Rightarrow\\; -9 = -3B \\;\\Rightarrow\\; B = 3$$

So the decomposition is

$$\\frac{5x-4}{(x-2)(x+1)} = \\frac{2}{x-2} + \\frac{3}{x+1}$$

> ✅ **Check** at $x=0$: left $=\\dfrac{-4}{(-2)(1)} = 2$. Right $= \\dfrac{2}{-2} + \\dfrac{3}{1} = -1 + 3 = 2$ ✓`,
      },
      {
        id: 'pf2-q1',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the correct decomposition form for $\\dfrac{7}{(x-3)(x+5)}$?',
              options: [
                '$\\dfrac{A}{x-3} + \\dfrac{B}{x+5}$',
                '$\\dfrac{Ax+B}{(x-3)(x+5)}$',
                '$\\dfrac{A}{x-3} \\cdot \\dfrac{B}{x+5}$',
                '$\\dfrac{A}{(x-3)(x+5)}$',
              ],
              correctAnswer: 0,
              explanation: 'Two distinct linear factors → one constant over each: $\\dfrac{A}{x-3} + \\dfrac{B}{x+5}$. Use a sum, not a product, and constants (not $Ax+B$) over a *linear* factor.',
            },
            {
              question: 'To find $A$ in $\\dfrac{6}{(x-1)(x+2)} = \\dfrac{A}{x-1} + \\dfrac{B}{x+2}$, which value of $x$ is cleverest?',
              options: ['$x = 1$', '$x = -2$', '$x = 0$', '$x = 2$'],
              correctAnswer: 0,
              explanation: 'Set $x=1$ to make the $(x-1)$ factor zero, which deletes the $B$ term and isolates $A$: $6 = A(1+2) \\Rightarrow A = 2$.',
            },
          ],
        },
      },
      {
        id: 'pf2-drill',
        type: 'input-boxes' as const,
        content: `**Find the Constants** 🧮

Decompose $\\dfrac{3x+11}{(x-1)(x+3)} = \\dfrac{A}{x-1} + \\dfrac{B}{x+3}$ using the cover-up method.

**1)** $A = \\,?$
**2)** $B = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3.5', '-0.5'],
          hint1: 'Clear denominators: $3x+11 = A(x+3) + B(x-1)$.',
          hint2: 'Let $x=1$: $3(1)+11 = A(1+3) \\Rightarrow 14 = 4A$, so $A = 3.5$.',
          hint3: 'Let $x=-3$: $3(-3)+11 = B(-3-1) \\Rightarrow 2 = -4B$, so $B = -0.5$.',
          explanation: '$x=1$: $14=4A\\Rightarrow A=\\tfrac{7}{2}=3.5$. $x=-3$: $2=-4B\\Rightarrow B=-\\tfrac{1}{2}=-0.5$. So $\\dfrac{3x+11}{(x-1)(x+3)}=\\dfrac{3.5}{x-1}-\\dfrac{0.5}{x+3}$.',
        },
      },
      {
        id: 'pf2-factor-first',
        type: 'text' as const,
        content: `## Don't Forget to Factor First

The denominator often arrives *unfactored*. Factor it before setting up the form.

**Example:** $\\dfrac{x+7}{x^2 + x - 6}$. Factor the bottom: $x^2+x-6 = (x+3)(x-2)$.

$$\\frac{x+7}{(x+3)(x-2)} = \\frac{A}{x+3} + \\frac{B}{x-2}$$

Clear: $x+7 = A(x-2) + B(x+3)$.

- $x=-2$? No — use the **roots of the factors**: $x=2$ gives $9 = 5B \\Rightarrow B=\\tfrac{9}{5}$.
- $x=-3$ gives $4 = -5A \\Rightarrow A = -\\tfrac{4}{5}$.

> ⚠️ **Always factor the denominator completely first.** The cover-up values are the *roots of the factors* (here $x=2$ and $x=-3$), not random numbers.`,
      },
      {
        id: 'pf2-q2',
        type: 'dropdown-select' as const,
        content: `**Build the Setup** 🔽

You're decomposing $\\dfrac{2x-5}{x^2-4}$.`,
        exercise: {
          dropdowns: [
            { label: 'Factor the denominator:', options: ['$(x-2)(x+2)$', '$(x-4)(x+1)$', '$(x-2)^2$', '$x(x-4)$'] },
            { label: 'Correct decomposition form:', options: ['$\\dfrac{A}{x-2}+\\dfrac{B}{x+2}$', '$\\dfrac{Ax+B}{x^2-4}$', '$\\dfrac{A}{x-2}+\\dfrac{B}{(x-2)^2}$', '$\\dfrac{A}{x^2}+\\dfrac{B}{4}$'] },
            { label: 'Cover-up value to find the $(x-2)$ constant:', options: ['$x=2$', '$x=-2$', '$x=4$', '$x=0$'] },
          ],
          correctAnswers: ['$(x-2)(x+2)$', '$\\dfrac{A}{x-2}+\\dfrac{B}{x+2}$', '$x=2$'],
          hint1: '$x^2-4$ is a difference of squares: $a^2-b^2=(a-b)(a+b)$.',
          hint2: 'Two distinct linear factors → a constant over each.',
          hint3: 'To isolate the $(x-2)$ constant, choose $x$ that makes $x-2=0$, i.e. $x=2$.',
          explanation: '$x^2-4=(x-2)(x+2)$, so the form is $\\dfrac{A}{x-2}+\\dfrac{B}{x+2}$, and $x=2$ isolates $A$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'partial-fractions',
    sections: [
      {
        id: 'pf3-intro',
        type: 'text' as const,
        content: `# 🧩 Integration by Partial Fractions

**Part 3 of 7 — Coefficient Matching & Repeated Linear Factors**

---

> 🔑 **Two new skills:** (1) finding constants by *matching coefficients* (works when cover-up isn't enough), and (2) handling a factor raised to a **power**, which needs one term per power.`,
      },
      {
        id: 'pf3-matching',
        type: 'text' as const,
        content: `## Matching Coefficients

Cover-up finds constants fast, but you can always fall back on **expanding and matching**. Take $\\dfrac{5x-4}{(x-2)(x+1)}$ again:

$$5x - 4 = A(x+1) + B(x-2)$$

Expand the right side and group by power of $x$:

$$5x - 4 = (A+B)x + (A - 2B)$$

Match the coefficient of each power:

$$\\underbrace{A + B = 5}_{x^1\\text{ terms}} \\qquad \\underbrace{A - 2B = -4}_{\\text{constants}}$$

Subtract: $(A+B)-(A-2B) = 3B = 9 \\Rightarrow B = 3$, then $A = 2$. Same answer as cover-up. ✓

> 💡 Cover-up is fastest for **distinct linear** factors. Matching coefficients is the **general** tool — it handles repeated factors and quadratics where cover-up alone can't reach every constant.`,
      },
      {
        id: 'pf3-q1',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Expanding $A(x+1) + B(x-2)$ and matching the constant terms of $5x-4$ gives which equation?',
              options: ['$A - 2B = -4$', '$A + B = -4$', '$A + B = 5$', '$-2A + B = -4$'],
              correctAnswer: 0,
              explanation: 'Constant terms: $A(1) + B(-2) = A - 2B$, which must equal the constant $-4$. (The $x$-coefficients give $A+B=5$.)',
            },
          ],
        },
      },
      {
        id: 'pf3-repeated',
        type: 'text' as const,
        content: `## Repeated Linear Factors

If a linear factor appears to a power $(x-a)^k$, you need a term for **every** power from $1$ up to $k$:

$$\\frac{P(x)}{(x-a)^k} = \\frac{A_1}{x-a} + \\frac{A_2}{(x-a)^2} + \\cdots + \\frac{A_k}{(x-a)^k}$$

**Example:** $\\dfrac{3x+1}{(x-1)^2}$ needs **two** terms:

$$\\frac{3x+1}{(x-1)^2} = \\frac{A}{x-1} + \\frac{B}{(x-1)^2}$$

Clear: $3x + 1 = A(x-1) + B$.

- $x = 1$: $\\;4 = B$, so $B = 4$.
- Match $x$-coefficients: $A = 3$.

$$\\frac{3x+1}{(x-1)^2} = \\frac{3}{x-1} + \\frac{4}{(x-1)^2}$$

> ⚠️ A common error is writing only $\\dfrac{A}{(x-1)^2}$. That's not enough — you **must** include the lower power $\\dfrac{A}{x-1}$ too, or there's no room to match a general numerator.`,
      },
      {
        id: 'pf3-q2',
        type: 'dropdown-select' as const,
        content: `**Choose the Right Form** 🔽

Pick the correct decomposition *form* (don't solve yet).`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{x}{(x+2)^2}$:', options: ['$\\dfrac{A}{x+2}+\\dfrac{B}{(x+2)^2}$', '$\\dfrac{A}{(x+2)^2}$', '$\\dfrac{A}{x+2}+\\dfrac{B}{x+2}$', '$\\dfrac{Ax+B}{(x+2)^2}$'] },
            { label: '$\\dfrac{5}{x(x-3)^2}$:', options: ['$\\dfrac{A}{x}+\\dfrac{B}{x-3}+\\dfrac{C}{(x-3)^2}$', '$\\dfrac{A}{x}+\\dfrac{B}{(x-3)^2}$', '$\\dfrac{A}{x}+\\dfrac{Bx+C}{(x-3)^2}$', '$\\dfrac{A}{x(x-3)^2}$'] },
            { label: '$\\dfrac{2x-1}{(x-4)^3}$:', options: ['$\\dfrac{A}{x-4}+\\dfrac{B}{(x-4)^2}+\\dfrac{C}{(x-4)^3}$', '$\\dfrac{A}{(x-4)^3}$', '$\\dfrac{A}{x-4}+\\dfrac{B}{(x-4)^3}$', '$\\dfrac{Ax^2+Bx+C}{(x-4)^3}$'] },
          ],
          correctAnswers: [
            '$\\dfrac{A}{x+2}+\\dfrac{B}{(x+2)^2}$',
            '$\\dfrac{A}{x}+\\dfrac{B}{x-3}+\\dfrac{C}{(x-3)^2}$',
            '$\\dfrac{A}{x-4}+\\dfrac{B}{(x-4)^2}+\\dfrac{C}{(x-4)^3}$',
          ],
          hint1: 'A factor to the power $k$ contributes $k$ terms — one for each power $1,2,\\dots,k$.',
          hint2: 'Each *distinct* factor gets its own chain of terms; combine them with $+$.',
          hint3: 'Linear factors always get *constant* numerators, even when repeated.',
          explanation: '$(x+2)^2$ → two terms. $x(x-3)^2$ → one for $x$ plus two for $(x-3)^2$ = three terms. $(x-4)^3$ → three terms (powers 1, 2, 3).',
        },
      },
      {
        id: 'pf3-drill',
        type: 'input-boxes' as const,
        content: `**Solve a Repeated Factor** 🧮

Decompose $\\dfrac{4x-3}{(x-2)^2} = \\dfrac{A}{x-2} + \\dfrac{B}{(x-2)^2}$.

**1)** $A = \\,?$
**2)** $B = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '5'],
          hint1: 'Clear denominators: $4x-3 = A(x-2) + B$.',
          hint2: 'Let $x=2$: $4(2)-3 = B \\Rightarrow B = 5$.',
          hint3: 'Match $x$-coefficients: the only $x$ on the right is $Ax$, so $A = 4$.',
          explanation: '$4x-3 = A(x-2)+B = Ax + (B-2A)$. Coefficient of $x$: $A=4$. Constant: $B-2A=-3 \\Rightarrow B = -3+8 = 5$.',
        },
      },
      {
        id: 'pf3-mixed-factor',
        type: 'text' as const,
        content: `## Mixing Distinct and Repeated Factors

When a denominator has both kinds, combine the rules. For $\\dfrac{x+4}{x(x-1)^2}$:

$$\\frac{x+4}{x(x-1)^2} = \\frac{A}{x} + \\frac{B}{x-1} + \\frac{C}{(x-1)^2}$$

Clear: $x + 4 = A(x-1)^2 + Bx(x-1) + Cx$.

- $x = 0$: $\\;4 = A(1) \\Rightarrow A = 4$.
- $x = 1$: $\\;5 = C(1) \\Rightarrow C = 5$.
- $x = 2$ (any spare value): $\\;6 = A(1) + B(2)(1) + C(2) = 4 + 2B + 10 \\Rightarrow 2B = -8 \\Rightarrow B = -4$.

$$\\frac{x+4}{x(x-1)^2} = \\frac{4}{x} - \\frac{4}{x-1} + \\frac{5}{(x-1)^2}$$

> 💡 Cover-up nailed $A$ and $C$ instantly (the roots $x=0,1$). For the leftover $B$, plug in *any* convenient value and solve. This hybrid is the fastest reliable approach.`,
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'partial-fractions',
    sections: [
      {
        id: 'pf4-intro',
        type: 'text' as const,
        content: `# 🧩 Integration by Partial Fractions

**Part 4 of 7 — Irreducible Quadratic Factors**

---

> 🔑 **New shape:** Over a quadratic that **won't factor** over the reals (like $x^2+1$), the numerator is a full **linear** expression $Ax+B$ — not just a constant.`,
      },
      {
        id: 'pf4-irreducible',
        type: 'text' as const,
        content: `## What "Irreducible" Means

A quadratic $ax^2+bx+c$ is **irreducible** over the reals when it has no real roots — i.e. its discriminant $b^2-4ac < 0$. It cannot be split into real linear factors.

| Quadratic | Discriminant $b^2-4ac$ | Status |
|-----------|------------------------|--------|
| $x^2 + 1$ | $0 - 4 = -4 < 0$ | irreducible |
| $x^2 + x + 1$ | $1 - 4 = -3 < 0$ | irreducible |
| $x^2 - 5x + 6$ | $25 - 24 = 1 > 0$ | factors as $(x-2)(x-3)$ |
| $x^2 - 4$ | $0 + 16 = 16 > 0$ | factors as $(x-2)(x+2)$ |

> ⚠️ **Always try to factor a quadratic first.** Only if it's genuinely irreducible do you use the $Ax+B$ numerator. If it factors, treat it as two linear factors instead.`,
      },
      {
        id: 'pf4-q1',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which quadratic is irreducible over the reals?',
              options: ['$x^2 + 4$', '$x^2 - 4$', '$x^2 - x - 6$', '$x^2 + 5x$'],
              correctAnswer: 0,
              explanation: '$x^2+4$ has discriminant $0-16=-16<0$, so no real roots — irreducible. The others factor: $(x-2)(x+2)$, $(x-3)(x+2)$, $x(x+5)$.',
            },
            {
              question: 'Over an irreducible quadratic factor $x^2+x+1$, the numerator in the decomposition should be:',
              options: ['$Ax + B$', 'just a constant $A$', '$Ax^2 + Bx + C$', '$\\dfrac{A}{x}$'],
              correctAnswer: 0,
              explanation: 'A linear (degree-1) numerator $Ax+B$ — one degree below the quadratic denominator. A bare constant is not general enough.',
            },
          ],
        },
      },
      {
        id: 'pf4-form',
        type: 'text' as const,
        content: `## Setting Up the $Ax+B$ Form

For $\\dfrac{P(x)}{(x-r)(x^2+px+q)}$ with $x^2+px+q$ irreducible:

$$\\frac{P(x)}{(x-r)(x^2+px+q)} = \\frac{A}{x-r} + \\frac{Bx + C}{x^2+px+q}$$

**Worked Example:** $\\dfrac{x^2 + 2x + 4}{x(x^2+4)}$.

$$\\frac{x^2+2x+4}{x(x^2+4)} = \\frac{A}{x} + \\frac{Bx+C}{x^2+4}$$

Clear denominators:

$$x^2 + 2x + 4 = A(x^2+4) + (Bx+C)x = (A+B)x^2 + Cx + 4A$$

Match coefficients:
- $x^2$: $\\;A + B = 1$
- $x^1$: $\\;C = 2$
- $x^0$: $\\;4A = 4 \\Rightarrow A = 1$, so $B = 0$.

$$\\frac{x^2+2x+4}{x(x^2+4)} = \\frac{1}{x} + \\frac{2}{x^2+4}$$

> ✅ **Check** at $x=2$: left $= \\dfrac{4+4+4}{2\\cdot 8} = \\dfrac{12}{16} = \\dfrac{3}{4}$. Right $= \\dfrac{1}{2} + \\dfrac{2}{8} = \\dfrac{1}{2}+\\dfrac{1}{4} = \\dfrac{3}{4}$ ✓`,
      },
      {
        id: 'pf4-drill',
        type: 'input-boxes' as const,
        content: `**Match the Coefficients** 🧮

Decompose $\\dfrac{3x^2 + 4}{x(x^2+2)} = \\dfrac{A}{x} + \\dfrac{Bx+C}{x^2+2}$.

Clearing gives $3x^2 + 4 = A(x^2+2) + (Bx+C)x$.

**1)** $A = \\,?$
**2)** $B = \\,?$
**3)** $C = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '1', '0'],
          hint1: 'Expand the right side: $(A+B)x^2 + Cx + 2A$.',
          hint2: 'Constant term: $2A = 4 \\Rightarrow A = 2$. The $x$-term: $C = 0$.',
          hint3: '$x^2$ term: $A + B = 3$, and since $A=2$, $B = 1$.',
          explanation: '$3x^2+0x+4 = (A+B)x^2 + Cx + 2A$. So $2A=4\\Rightarrow A=2$; $C=0$; $A+B=3\\Rightarrow B=1$. Result: $\\dfrac{2}{x}+\\dfrac{x}{x^2+2}$.',
        },
      },
      {
        id: 'pf4-q2',
        type: 'dropdown-select' as const,
        content: `**Pick the Form** 🔽

Choose the correct decomposition form for each denominator (all quadratics shown are irreducible).`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{1}{(x-1)(x^2+9)}$:', options: ['$\\dfrac{A}{x-1}+\\dfrac{Bx+C}{x^2+9}$', '$\\dfrac{A}{x-1}+\\dfrac{B}{x^2+9}$', '$\\dfrac{Ax+B}{x-1}+\\dfrac{C}{x^2+9}$', '$\\dfrac{A}{x-1}+\\dfrac{B}{x+3}$'] },
            { label: '$\\dfrac{x}{(x^2+1)(x^2+4)}$:', options: ['$\\dfrac{Ax+B}{x^2+1}+\\dfrac{Cx+D}{x^2+4}$', '$\\dfrac{A}{x^2+1}+\\dfrac{B}{x^2+4}$', '$\\dfrac{Ax+B}{x^2+1}+\\dfrac{C}{x^2+4}$', '$\\dfrac{A}{x^2+1}+\\dfrac{Bx+C}{x^2+4}$'] },
          ],
          correctAnswers: [
            '$\\dfrac{A}{x-1}+\\dfrac{Bx+C}{x^2+9}$',
            '$\\dfrac{Ax+B}{x^2+1}+\\dfrac{Cx+D}{x^2+4}$',
          ],
          hint1: 'Linear factor → constant numerator. Irreducible quadratic → linear numerator $Ax+B$.',
          hint2: 'Each irreducible quadratic needs its *own* $Ax+B$-style numerator.',
          hint3: 'Two distinct irreducible quadratics → two linear numerators with four total unknowns.',
          explanation: 'Linear $(x-1)$ gets a constant; each irreducible quadratic gets a full linear numerator. Two quadratics → $\\dfrac{Ax+B}{x^2+1}+\\dfrac{Cx+D}{x^2+4}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'partial-fractions',
    sections: [
      {
        id: 'pf5-intro',
        type: 'text' as const,
        content: `# 🧩 Integration by Partial Fractions

**Part 5 of 7 — Improper Fractions: Divide First**

---

> 🔑 **Rule:** If the numerator's degree is $\\ge$ the denominator's, **do polynomial long division first**. The quotient is a polynomial; the remainder over the divisor is a *proper* fraction you then decompose.`,
      },
      {
        id: 'pf5-why',
        type: 'text' as const,
        content: `## Why Division Comes First

Recall the division identity for $\\dfrac{N(x)}{D(x)}$:

$$\\frac{N(x)}{D(x)} = \\underbrace{Q(x)}_{\\text{quotient}} + \\frac{R(x)}{D(x)}$$

where the remainder $R(x)$ has **smaller degree** than $D(x)$ — exactly the proper form decomposition requires.

**Example:** $\\dfrac{x^2 + 3x + 1}{x + 1}$ is improper (top degree $2 \\ge$ bottom degree $1$). Long-divide:

$$x^2 + 3x + 1 = (x+1)(x + 2) - 1$$

So

$$\\frac{x^2+3x+1}{x+1} = x + 2 - \\frac{1}{x+1}$$

Now every piece integrates: $\\dfrac{x^2}{2} + 2x - \\ln\\lvert x+1\\rvert + C$.

> ⚠️ Skipping division on an improper fraction is the **#1 setup error**. Decomposition assumes proper form — division is what guarantees it.`,
      },
      {
        id: 'pf5-q1',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Before decomposing $\\dfrac{x^3 + 2x}{x^2 - 1}$, what must you do?',
              options: [
                'Polynomial long division, because the fraction is improper',
                'Nothing — it is already proper',
                'Factor the numerator only',
                'Take the derivative of the top',
              ],
              correctAnswer: 0,
              explanation: 'Top degree $3 >$ bottom degree $2$, so it is improper. Divide first to get a polynomial plus a proper remainder fraction.',
            },
            {
              question: 'In $\\dfrac{N(x)}{D(x)} = Q(x) + \\dfrac{R(x)}{D(x)}$, the remainder $R(x)$ always has degree:',
              options: ['less than $D(x)$', 'equal to $D(x)$', 'greater than $D(x)$', 'equal to $N(x)$'],
              correctAnswer: 0,
              explanation: 'By definition of polynomial division, the remainder has degree strictly less than the divisor $D(x)$ — making $\\dfrac{R}{D}$ proper.',
            },
          ],
        },
      },
      {
        id: 'pf5-worked',
        type: 'text' as const,
        content: `## A Full Worked Example

Decompose $\\dfrac{2x^2 - x + 1}{x^2 - 1}$ completely.

**Step 1 — Divide** (both degree $2$, so improper). Since $2x^2 - x + 1 = 2(x^2-1) - x + 3$:

$$\\frac{2x^2 - x + 1}{x^2 - 1} = 2 + \\frac{-x + 3}{x^2 - 1}$$

**Step 2 — Factor & decompose the proper remainder.** $x^2-1=(x-1)(x+1)$:

$$\\frac{-x+3}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$$

Clear: $-x + 3 = A(x+1) + B(x-1)$.
- $x=1$: $\\;2 = 2A \\Rightarrow A = 1$.
- $x=-1$: $\\;4 = -2B \\Rightarrow B = -2$.

**Result:**

$$\\frac{2x^2 - x + 1}{x^2-1} = 2 + \\frac{1}{x-1} - \\frac{2}{x+1}$$

> ✅ **Check** at $x=0$: left $=\\dfrac{1}{-1} = -1$. Right $= 2 + \\dfrac{1}{-1} - \\dfrac{2}{1} = 2 - 1 - 2 = -1$ ✓`,
      },
      {
        id: 'pf5-drill',
        type: 'input-boxes' as const,
        content: `**Divide, Then Read Off the Quotient** 🧮

For $\\dfrac{x^2 + 5x + 6}{x + 1}$, perform the long division to write it as $\\;x + Q_0 + \\dfrac{R}{x+1}$.

**1)** The constant $Q_0$ in the quotient $x + Q_0 = \\,?$
**2)** The remainder $R = \\,?$  *(the numerator over $x+1$)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '2'],
          hint1: 'Divide $x^2+5x+6$ by $x+1$. First term: $x^2 \\div x = x$.',
          hint2: '$x(x+1) = x^2 + x$. Subtract: $(5x+6)-(x) = 4x+6$. Next term: $4x \\div x = 4$.',
          hint3: '$4(x+1) = 4x+4$. Subtract: $(4x+6)-(4x+4) = 2$. So quotient $x+4$, remainder $2$.',
          explanation: '$\\dfrac{x^2+5x+6}{x+1} = x + 4 + \\dfrac{2}{x+1}$. Quotient $x+4$ (so $Q_0=4$), remainder $R=2$. Check: $(x+1)(x+4)+2 = x^2+5x+4+2 = x^2+5x+6$ ✓',
        },
      },
      {
        id: 'pf5-q2',
        type: 'dropdown-select' as const,
        content: `**Spot the Improper Fractions** 🔽

For each, choose whether to **divide first** or **decompose directly**.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{x^2+1}{(x-2)(x+3)}$:', options: ['divide first', 'decompose directly'] },
            { label: '$\\dfrac{4x-1}{(x-2)(x+3)}$:', options: ['divide first', 'decompose directly'] },
            { label: '$\\dfrac{x^4}{x^2+1}$:', options: ['divide first', 'decompose directly'] },
          ],
          correctAnswers: ['divide first', 'decompose directly', 'divide first'],
          hint1: 'Multiply out each denominator to find its degree, then compare to the top.',
          hint2: '$(x-2)(x+3)$ has degree $2$.',
          hint3: 'Top degree $\\ge$ bottom degree → improper → divide first.',
          explanation: '1) top $2 =$ bottom $2$ → improper → divide. 2) top $1 <$ bottom $2$ → proper → decompose. 3) top $4 >$ bottom $2$ → improper → divide.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'partial-fractions',
    sections: [
      {
        id: 'pf6-intro',
        type: 'text' as const,
        content: `# 🧩 Integration by Partial Fractions

**Part 6 of 7 — Integrating the Pieces**

---

> 🔑 **The payoff:** Once decomposed, each piece is a standard integral. Linear factors give **logs**; irreducible quadratics give **logs and/or arctangents**.`,
      },
      {
        id: 'pf6-toolbox',
        type: 'text' as const,
        content: `## The Three Integral Templates

After decomposition you'll only meet these forms:

| Piece | Antiderivative |
|-------|----------------|
| $\\displaystyle\\int \\frac{k}{x-a}\\,dx$ | $k\\ln\\lvert x-a\\rvert + C$ |
| $\\displaystyle\\int \\frac{k}{(x-a)^n}\\,dx,\\ n\\ge 2$ | $\\dfrac{k}{(1-n)(x-a)^{n-1}} + C$ (power rule) |
| $\\displaystyle\\int \\frac{k}{x^2+b^2}\\,dx$ | $\\dfrac{k}{b}\\arctan\\!\\dfrac{x}{b} + C$ |

> 💡 For a *repeated* factor like $\\dfrac{1}{(x-1)^2}$, rewrite as $(x-1)^{-2}$ and use the power rule: $\\displaystyle\\int (x-1)^{-2}dx = -\\,(x-1)^{-1} = -\\dfrac{1}{x-1}+C$. Only the **first power** $\\dfrac{1}{x-1}$ gives a log.`,
      },
      {
        id: 'pf6-worked1',
        type: 'text' as const,
        content: `## Worked Example: Distinct Linear Factors

From Part 2, $\\dfrac{5x-4}{x^2-x-2} = \\dfrac{2}{x-2} + \\dfrac{3}{x+1}$. Integrate:

$$\\int \\frac{5x-4}{x^2-x-2}\\,dx = \\int \\frac{2}{x-2}\\,dx + \\int \\frac{3}{x+1}\\,dx$$

$$= 2\\ln\\lvert x-2\\rvert + 3\\ln\\lvert x+1\\rvert + C$$

> 🔑 **Pattern:** $\\displaystyle\\int \\frac{k}{x-a}\\,dx = k\\ln\\lvert x-a\\rvert + C$. Keep the absolute value — the domain may be negative.`,
      },
      {
        id: 'pf6-q1',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\displaystyle\\int \\frac{3}{x-5}\\,dx = $',
              options: ['$3\\ln\\lvert x-5\\rvert + C$', '$\\dfrac{3}{2}(x-5)^2 + C$', '$3\\ln\\lvert x\\rvert - 5 + C$', '$\\dfrac{-3}{(x-5)^2}+C$'],
              correctAnswer: 0,
              explanation: '$\\int \\frac{k}{x-a}dx = k\\ln\\lvert x-a\\rvert+C$ via $u=x-a$. Here $3\\ln\\lvert x-5\\rvert+C$.',
            },
            {
              question: '$\\displaystyle\\int \\frac{1}{(x-3)^2}\\,dx = $',
              options: ['$-\\dfrac{1}{x-3} + C$', '$\\ln\\lvert x-3\\rvert + C$', '$\\dfrac{1}{x-3}+C$', '$2\\ln\\lvert x-3\\rvert+C$'],
              correctAnswer: 0,
              explanation: 'Power rule on $(x-3)^{-2}$: $\\dfrac{(x-3)^{-1}}{-1} = -\\dfrac{1}{x-3}+C$. Squared (and higher) factors do NOT give logs.',
            },
          ],
        },
      },
      {
        id: 'pf6-arctan',
        type: 'text' as const,
        content: `## Worked Example: An Arctangent Piece

From Part 4, $\\dfrac{x^2+2x+4}{x(x^2+4)} = \\dfrac{1}{x} + \\dfrac{2}{x^2+4}$. Integrate each:

$$\\int \\frac{1}{x}\\,dx = \\ln\\lvert x\\rvert + C_1$$

$$\\int \\frac{2}{x^2+4}\\,dx = 2\\cdot \\frac{1}{2}\\arctan\\frac{x}{2} = \\arctan\\frac{x}{2} + C_2$$

using $\\displaystyle\\int \\frac{k}{x^2+b^2}\\,dx = \\frac{k}{b}\\arctan\\frac{x}{b}+C$ with $b = 2$.

**Combined:**

$$\\int \\frac{x^2+2x+4}{x(x^2+4)}\\,dx = \\ln\\lvert x\\rvert + \\arctan\\frac{x}{2} + C$$

> ⚠️ The $\\dfrac{1}{b}$ factor is easy to forget. For $\\dfrac{1}{x^2+9}$ ($b=3$) the answer is $\\dfrac{1}{3}\\arctan\\dfrac{x}{3}$ — **not** $\\arctan\\dfrac{x}{3}$.`,
      },
      {
        id: 'pf6-drill',
        type: 'input-boxes' as const,
        content: `**Integrate the Pieces** 🧮

Use the templates. Enter the missing **numbers** (coefficients), not the whole expression.

**1)** $\\displaystyle\\int \\frac{4}{x+7}\\,dx = \\,\\square\\,\\ln\\lvert x+7\\rvert + C.$  The coefficient $\\square = \\,?$
**2)** $\\displaystyle\\int \\frac{1}{x^2+25}\\,dx = \\,\\square\\,\\arctan\\dfrac{x}{5} + C.$  The coefficient $\\square = \\,?$  *(decimal ok)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '0.2'],
          hint1: '$\\int \\frac{k}{x+a}dx = k\\ln\\lvert x+a\\rvert+C$, so the coefficient is just $k=4$.',
          hint2: 'For $\\int \\frac{1}{x^2+b^2}dx = \\frac{1}{b}\\arctan\\frac{x}{b}$, here $b^2=25$ so $b=5$.',
          hint3: 'The coefficient is $\\dfrac{1}{b} = \\dfrac{1}{5} = 0.2$.',
          explanation: '1) coefficient $=4$. 2) $b=5$, so coefficient $=\\dfrac{1}{5}=0.2$; the integral is $0.2\\arctan\\dfrac{x}{5}+C$.',
        },
      },
      {
        id: 'pf6-q2',
        type: 'dropdown-select' as const,
        content: `**Log or Arctangent?** 🔽

Predict what kind of antiderivative each decomposed piece produces.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{5}{x-2}$ integrates to a:', options: ['logarithm', 'arctangent', 'power (no log)'] },
            { label: '$\\dfrac{3}{x^2+1}$ integrates to a:', options: ['arctangent', 'logarithm', 'power (no log)'] },
            { label: '$\\dfrac{7}{(x+4)^2}$ integrates to a:', options: ['power (no log)', 'logarithm', 'arctangent'] },
          ],
          correctAnswers: ['logarithm', 'arctangent', 'power (no log)'],
          hint1: 'A single power $1$ of a linear factor → natural log.',
          hint2: 'A constant over an irreducible quadratic $x^2+b^2$ → arctangent.',
          hint3: 'A linear factor raised to power $\\ge 2$ → power rule, giving a negative power (no log).',
          explanation: '$\\dfrac{5}{x-2}\\to 5\\ln\\lvert x-2\\rvert$; $\\dfrac{3}{x^2+1}\\to 3\\arctan x$; $\\dfrac{7}{(x+4)^2}\\to -\\dfrac{7}{x+4}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'partial-fractions',
    sections: [
      {
        id: 'pf7-intro',
        type: 'text' as const,
        content: `# 🧩 Integration by Partial Fractions

**Part 7 of 7 — Full Problems, Applications & Exit Quiz**

---

You can now (1) check proper vs. improper, (2) factor and set up the right form, (3) solve for the constants, and (4) integrate each piece. Time to run the **whole pipeline** end to end.`,
      },
      {
        id: 'pf7-pipeline',
        type: 'text' as const,
        content: `## The Complete Pipeline

| Step | Action |
|------|--------|
| 1 | **Improper?** If top degree $\\ge$ bottom degree, long-divide first. |
| 2 | **Factor** the denominator completely (linear & irreducible-quadratic factors). |
| 3 | **Set up** the form: constant over each linear power; $Ax+B$ over each quadratic. |
| 4 | **Solve** for constants (cover-up + matching coefficients). |
| 5 | **Integrate** each piece ($\\ln$, power rule, or $\\arctan$). |

> ⚠️ The three classic mistakes: forgetting to divide an improper fraction, dropping the lower-power term on a repeated factor, and omitting the $\\dfrac{1}{b}$ on an arctangent.`,
      },
      {
        id: 'pf7-full-worked',
        type: 'text' as const,
        content: `## A Complete Integral

Evaluate $\\displaystyle\\int_{2}^{3} \\frac{4}{x^2 - 1}\\,dx$.

**Decompose:** $x^2-1=(x-1)(x+1)$, so $\\dfrac{4}{(x-1)(x+1)} = \\dfrac{A}{x-1}+\\dfrac{B}{x+1}$.
Clear: $4 = A(x+1)+B(x-1)$.
- $x=1$: $4=2A \\Rightarrow A=2$.
- $x=-1$: $4=-2B \\Rightarrow B=-2$.

**Integrate:**

$$\\int \\frac{4}{x^2-1}\\,dx = 2\\ln\\lvert x-1\\rvert - 2\\ln\\lvert x+1\\rvert + C = 2\\ln\\left\\lvert\\frac{x-1}{x+1}\\right\\rvert + C$$

**Evaluate** from $2$ to $3$:

$$2\\ln\\frac{2}{4} - 2\\ln\\frac{1}{3} = 2\\ln\\frac{1}{2} - 2\\ln\\frac{1}{3} = 2\\ln\\frac{3}{2} = 2\\ln(1.5)$$

> ✅ Numerically $2\\ln 1.5 \\approx 0.811$. Clean closed form: $2\\ln\\dfrac{3}{2}$.`,
      },
      {
        id: 'pf7-q1',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\displaystyle\\int \\frac{1}{x^2-x}\\,dx = $  (factor: $x(x-1)$)',
              options: [
                '$\\ln\\lvert x-1\\rvert - \\ln\\lvert x\\rvert + C$',
                '$\\ln\\lvert x\\rvert - \\ln\\lvert x-1\\rvert + C$',
                '$\\ln\\lvert x^2-x\\rvert + C$',
                '$\\arctan(x) + C$',
              ],
              correctAnswer: 0,
              explanation: '$\\dfrac{1}{x(x-1)} = \\dfrac{-1}{x} + \\dfrac{1}{x-1}$ (cover-up: $x=0\\Rightarrow A=-1$; $x=1\\Rightarrow B=1$). Integrate: $-\\ln\\lvert x\\rvert + \\ln\\lvert x-1\\rvert + C$.',
            },
            {
              question: 'The decomposition of $\\dfrac{1}{x(x^2+1)}$ is $\\dfrac{A}{x} + \\dfrac{Bx+C}{x^2+1}$. What are $A,B,C$?',
              options: [
                '$A=1,\\ B=-1,\\ C=0$',
                '$A=1,\\ B=1,\\ C=0$',
                '$A=0,\\ B=1,\\ C=1$',
                '$A=-1,\\ B=1,\\ C=0$',
              ],
              correctAnswer: 0,
              explanation: 'Clear: $1 = A(x^2+1)+(Bx+C)x = (A+B)x^2+Cx+A$. So $A=1$, $C=0$, and $A+B=0\\Rightarrow B=-1$.',
            },
          ],
        },
      },
      {
        id: 'pf7-drill',
        type: 'input-boxes' as const,
        content: `**End-to-End** 🧮

Evaluate $\\displaystyle\\int_{3}^{5} \\frac{1}{(x-1)(x-2)}\\,dx$, which comes out to $\\ln\\left(\\dfrac{p}{q}\\right)$ in lowest terms.

First decompose $\\dfrac{1}{(x-1)(x-2)} = \\dfrac{A}{x-1}+\\dfrac{B}{x-2}$.

**1)** $A = \\,?$
**2)** $B = \\,?$
**3)** The value equals $\\ln\\left(\\dfrac{p}{q}\\right)$; enter the ratio $\\dfrac{p}{q}$ as a decimal.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-1', '1', '1.5'],
          hint1: 'Cover-up: $x=1\\Rightarrow 1 = A(1-2)=-A\\Rightarrow A=-1$. $x=2\\Rightarrow 1=B(2-1)=B\\Rightarrow B=1$.',
          hint2: 'Antiderivative: $-\\ln\\lvert x-1\\rvert + \\ln\\lvert x-2\\rvert = \\ln\\left\\lvert\\dfrac{x-2}{x-1}\\right\\rvert$.',
          hint3: 'At $x=5$ the inside is $\\dfrac{3}{4}$; at $x=3$ it is $\\dfrac{1}{2}$. Value $=\\ln\\dfrac{3/4}{1/2}=\\ln\\dfrac{3}{2}$, so $\\dfrac{p}{q}=\\dfrac{3}{2}=1.5$.',
          explanation: '$A=-1,\\ B=1$. Antiderivative $\\ln\\left\\lvert\\dfrac{x-2}{x-1}\\right\\rvert$. At $x=5$: $\\dfrac{3}{4}$; at $x=3$: $\\dfrac{1}{2}$. Definite value $=\\ln\\dfrac{3}{4}-\\ln\\dfrac{1}{2}=\\ln\\dfrac{3/4}{1/2}=\\ln\\dfrac{3}{2}$. So $\\dfrac{p}{q}=\\dfrac{3}{2}=1.5$.',
        },
      },
      {
        id: 'pf7-recap',
        type: 'text' as const,
        content: `## Quick Reference Card

| Denominator factor | Decomposition term(s) |
|--------------------|------------------------|
| distinct linear $(x-a)$ | $\\dfrac{A}{x-a}$ |
| repeated linear $(x-a)^k$ | $\\dfrac{A_1}{x-a} + \\cdots + \\dfrac{A_k}{(x-a)^k}$ |
| irreducible quadratic $x^2+bx+c$ | $\\dfrac{Ax+B}{x^2+bx+c}$ |
| **and first:** improper fraction | long-divide → polynomial $+$ proper remainder |

> 🔑 Factor shapes choose the form; cover-up and matching find the constants; $\\ln$/power-rule/$\\arctan$ finish the integral. That's the entire method.`,
      },
      {
        id: 'pf7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the correct decomposition FORM for $\\dfrac{x}{(x-1)^2(x^2+4)}$?',
              options: [
                '$\\dfrac{A}{x-1}+\\dfrac{B}{(x-1)^2}+\\dfrac{Cx+D}{x^2+4}$',
                '$\\dfrac{A}{(x-1)^2}+\\dfrac{Bx+C}{x^2+4}$',
                '$\\dfrac{A}{x-1}+\\dfrac{B}{x^2+4}$',
                '$\\dfrac{Ax+B}{(x-1)^2}+\\dfrac{Cx+D}{x^2+4}$',
              ],
              correctAnswer: 0,
              explanation: 'Repeated linear $(x-1)^2$ → two constant terms $\\dfrac{A}{x-1}+\\dfrac{B}{(x-1)^2}$. Irreducible quadratic $x^2+4$ → $\\dfrac{Cx+D}{x^2+4}$.',
            },
            {
              question: '$\\displaystyle\\int \\frac{2}{x^2+4}\\,dx = $',
              options: ['$\\arctan\\dfrac{x}{2} + C$', '$2\\arctan(2x) + C$', '$\\ln(x^2+4) + C$', '$\\dfrac{1}{2}\\arctan\\dfrac{x}{2}+C$'],
              correctAnswer: 0,
              explanation: '$\\int \\frac{k}{x^2+b^2}dx = \\frac{k}{b}\\arctan\\frac{x}{b}$ with $k=2,b=2$: $\\frac{2}{2}\\arctan\\frac{x}{2} = \\arctan\\frac{x}{2}+C$.',
            },
            {
              question: 'Before decomposing $\\dfrac{x^3+1}{x^2+x}$, the first step is to:',
              options: [
                'Long-divide, since the fraction is improper (top degree $3 >$ bottom degree $2$)',
                'Decompose directly into $\\dfrac{A}{x}+\\dfrac{B}{x+1}$',
                'Set the numerator equal to zero',
                'Differentiate the denominator',
              ],
              correctAnswer: 0,
              explanation: 'Top degree $3$ exceeds bottom degree $2$, so it is improper. Divide first; only then decompose the proper remainder over $x^2+x=x(x+1)$.',
            },
          ],
        },
      },
    ],
  },
]
