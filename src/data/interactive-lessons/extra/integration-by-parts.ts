import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Integration by Parts (AP Calculus AB).
 * Registry key / DB Topic.slug: 'integration-by-parts'.
 * 7 parts, gold-standard structure: the product-rule origin & the formula →
 * choosing u with LIATE → standard worked examples (polynomial × exp/trig) →
 * logs, inverse trig & the dv = dx trick → repeated parts & the cyclic (boomerang)
 * integral → definite integrals by parts → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every antiderivative was differentiated back to its integrand to verify before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'integration-by-parts',
    sections: [
      {
        id: 'ibp1-intro',
        type: 'text' as const,
        content: `# ∫ Integration by Parts

**Part 1 of 7 — Where the Formula Comes From**

---

### Topics in This Part

| Section |
|---------|
| When the basic rules fail |
| Undoing the Product Rule |
| The Integration-by-Parts formula |

> 🔑 **Key Concept:** Integration by parts is the integration version of the **product rule**. It rewrites a hard integral $\\int u\\,dv$ as a (hopefully) easier one $\\int v\\,du$. It is the go-to method whenever an integrand is a **product** of two different *kinds* of functions.`,
      },
      {
        id: 'ibp1-why',
        type: 'text' as const,
        content: `## When the Basic Rules Fail

You can already integrate sums, powers, and the results of $u$-substitution. But what about

$$\\int x e^{x}\\,dx \\qquad \\int x\\cos x\\,dx \\qquad \\int \\ln x\\,dx?$$

None of these yield to the power rule, and **$u$-substitution does not help** — there is no "inside function whose derivative is also sitting in the integrand."

These integrands are **products of two unrelated functions** (a polynomial times an exponential, a polynomial times a trig function). For those we need a brand-new tool.

> 💡 **Rule of thumb:** Reach for integration by parts when the integrand is a *product* and $u$-substitution does **not** clean it up.`,
      },
      {
        id: 'ibp1-product-rule',
        type: 'text' as const,
        content: `## Undoing the Product Rule

Start from the product rule for derivatives. If $u$ and $v$ are functions of $x$:

$$\\frac{d}{dx}\\big[u\\,v\\big] = u\\,\\frac{dv}{dx} + v\\,\\frac{du}{dx}$$

Now **integrate both sides** with respect to $x$. The left side undoes the derivative:

$$u\\,v = \\int u\\,\\frac{dv}{dx}\\,dx + \\int v\\,\\frac{du}{dx}\\,dx$$

Solve for the first integral on the right by moving the other term across:

$$\\int u\\,\\frac{dv}{dx}\\,dx = u\\,v - \\int v\\,\\frac{du}{dx}\\,dx$$

Writing $dv = \\frac{dv}{dx}\\,dx$ and $du = \\frac{du}{dx}\\,dx$ gives the clean form you will memorize:

$$\\boxed{\\,\\int u\\,dv = u\\,v - \\int v\\,du\\,}$$

> 🔑 **Key Idea:** Integration by parts trades the integral $\\int u\\,dv$ for the integral $\\int v\\,du$. The whole game is choosing $u$ and $dv$ so the **new** integral $\\int v\\,du$ is *easier* than the one you started with.`,
      },
      {
        id: 'ibp1-which-method',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Integration by parts is the integration counterpart of which differentiation rule?',
              options: ['The product rule', 'The chain rule', 'The quotient rule', 'The power rule'],
              correctAnswer: 0,
              explanation: 'The formula $\\int u\\,dv = uv - \\int v\\,du$ comes directly from integrating the product rule $\\frac{d}{dx}[uv] = u\\,v\' + v\\,u\'$ and solving for one of the integrals.',
            },
            {
              question: 'Which integral is the best candidate for integration by parts (rather than $u$-substitution)?',
              options: ['$\\int x\\,e^{x}\\,dx$', '$\\int 2x\\,e^{x^2}\\,dx$', '$\\int \\frac{2x}{x^2+1}\\,dx$', '$\\int (x+1)^{5}\\,dx$'],
              correctAnswer: 0,
              explanation: 'In $\\int x e^{x}dx$ the two factors are unrelated (no inside-function derivative present), so parts is needed. The other three each have an inside function whose derivative appears, so plain $u$-substitution works.',
            },
          ],
        },
      },
      {
        id: 'ibp1-memorize',
        type: 'text' as const,
        content: `## Memorize the Formula

Before you can use parts, the formula has to be automatic:

$$\\int u\\,dv = uv - \\int v\\,du$$

Read it aloud as *"the integral of $u\\,dv$ equals $u$ times $v$, minus the integral of $v\\,du$."* Notice the **minus sign** sitting in front of the second integral — losing it is the single most common mistake, so burn it into memory now.

> 💡 A handy mnemonic: **"$uv$ minus the integral of the leftovers."** The "leftovers" are $v$ (the integral of $dv$) times $du$ (the derivative of $u$).`,
      },
      {
        id: 'ibp1-formula-fill',
        type: 'dropdown-select' as const,
        content: `**State the Formula** 🔽

Fill in the integration-by-parts formula.`,
        exercise: {
          dropdowns: [
            { label: '$\\int u\\,dv = $', options: ['$uv - \\int v\\,du$', '$uv + \\int v\\,du$', '$\\int v\\,du - uv$', '$u\\,du - \\int v\\,dv$'] },
            { label: 'The point of the formula is that $\\int v\\,du$ should be:', options: ['easier than $\\int u\\,dv$', 'harder than $\\int u\\,dv$', 'identical to $\\int u\\,dv$', 'always zero'] },
          ],
          correctAnswers: ['$uv - \\int v\\,du$', 'easier than $\\int u\\,dv$'],
          hint1: 'It mirrors the product rule: a product term $uv$ minus a leftover integral.',
          hint2: 'The leftover integral is subtracted, and it uses $v$ and $du$.',
          hint3: 'You only make progress if the integral you trade *into*, $\\int v\\,du$, is simpler.',
          explanation: '$\\int u\\,dv = uv - \\int v\\,du$. The method only helps when the new integral $\\int v\\,du$ is easier than the original.',
        },
      },
      {
        id: 'ibp1-four-pieces',
        type: 'text' as const,
        content: `## The Four Named Pieces

To use the formula you work with **four** quantities. Two you **choose**, two you **compute**:

| Piece | How you get it |
|-------|----------------|
| $u$ | **choose** (Part 2 tells you how) |
| $dv$ | **choose** (everything left over, including $dx$) |
| $du$ | **compute** — differentiate $u$ |
| $v$ | **compute** — integrate $dv$ |

> 🔑 So a parts problem is: pick $u$ and $dv$, then differentiate one and integrate the other, then assemble $uv - \\int v\\,du$.`,
      },
      {
        id: 'ibp1-pieces-intro',
        type: 'input-boxes' as const,
        content: `**Read the Formula's Pieces** 🧮

The formula $\\int u\\,dv = uv - \\int v\\,du$ has four named pieces. Answer with a single number.

**1)** How many functions do you have to *choose* before you can apply the formula (namely $u$ and $dv$)? $\\,?$
**2)** You get $du$ by differentiating $u$, and $v$ by integrating $dv$. So how many of the four pieces ($u$, $dv$, $du$, $v$) require a *calculus operation* (a derivative or an integral) to produce? $\\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', '2'],
          hint1: 'You freely pick $u$ and $dv$ — that is $2$ choices.',
          hint2: 'From those choices, you compute $du$ (a derivative) and $v$ (an integral).',
          hint3: 'Two are chosen ($u$, $dv$); two are computed ($du$, $v$).',
          explanation: 'You choose $2$ pieces ($u$ and $dv$), then compute the other $2$ ($du$ by differentiating, $v$ by integrating).',
        },
      },
      {
        id: 'ibp1-recap',
        type: 'text' as const,
        content: `## What You Have So Far

You now know **what** integration by parts is and **where it comes from**:

$$\\int u\\,dv = uv - \\int v\\,du$$

But a formula with two free choices ($u$ and $dv$) is only useful if you choose them well. In **Part 2** you will learn the **LIATE** rule — a reliable recipe for picking $u$ every time.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'integration-by-parts',
    sections: [
      {
        id: 'ibp2-intro',
        type: 'text' as const,
        content: `# ∫ Integration by Parts

**Part 2 of 7 — Choosing $u$ with LIATE**

---

> 🔑 **The Idea:** The hardest part of "parts" is deciding which factor is $u$ and which is $dv$. A made-up word, **LIATE**, ranks the function types so you almost never have to guess.`,
      },
      {
        id: 'ibp2-liate',
        type: 'text' as const,
        content: `## The LIATE Rule

When you split the integrand into $u$ and $dv$, choose $u$ to be **whichever factor comes first** in this priority list:

| Letter | Function type | Example |
|--------|---------------|---------|
| **L** | **L**ogarithmic | $\\ln x$, $\\log_{10} x$ |
| **I** | **I**nverse trig | $\\arctan x$, $\\arcsin x$ |
| **A** | **A**lgebraic (polynomials) | $x$, $x^2$, $3x-1$ |
| **T** | **T**rigonometric | $\\sin x$, $\\cos x$ |
| **E** | **E**xponential | $e^{x}$, $2^{x}$ |

Whatever is left over (including the $dx$) becomes $dv$.

> 🔑 **Why it works:** Logs and inverse-trig functions are *easy to differentiate* but *hard to integrate*, so we want them as $u$ (we differentiate $u$). Exponentials and trig functions are *easy to integrate*, so they make great $dv$.`,
      },
      {
        id: 'ibp2-pick-u',
        type: 'dropdown-select' as const,
        content: `**Pick $u$** 🔽

For each integral, use LIATE to choose $u$.`,
        exercise: {
          dropdowns: [
            { label: 'In $\\int x\\,e^{x}\\,dx$, let $u =$', options: ['$x$', '$e^{x}$', '$x e^{x}$', '$dx$'] },
            { label: 'In $\\int x^{2}\\ln x\\,dx$, let $u =$', options: ['$\\ln x$', '$x^{2}$', '$x^{2}\\ln x$', '$x$'] },
            { label: 'In $\\int x\\cos x\\,dx$, let $u =$', options: ['$x$', '$\\cos x$', '$\\sin x$', '$x\\cos x$'] },
          ],
          correctAnswers: ['$x$', '$\\ln x$', '$x$'],
          hint1: 'Scan LIATE top-to-bottom and grab the first type that appears.',
          hint2: 'Algebraic (A) beats Exponential (E), and Logarithmic (L) beats Algebraic (A).',
          hint3: 'Logs come first of all, so in $\\int x^2 \\ln x\\,dx$ the $\\ln x$ is $u$ even though $x^2$ is also present.',
          explanation: 'A before E ⇒ $u=x$ in the first. L before A ⇒ $u=\\ln x$ in the second. A before T ⇒ $u=x$ in the third.',
        },
      },
      {
        id: 'ibp2-table',
        type: 'text' as const,
        content: `## Setting Up the Four Pieces

Every parts problem needs four ingredients. Once you pick $u$ and $dv$, you get the other two by **differentiating $u$** and **integrating $dv$**:

$$u \\;\\xrightarrow{\\;\\text{differentiate}\\;}\\; du \\qquad\\qquad dv \\;\\xrightarrow{\\;\\text{integrate}\\;}\\; v$$

### Example setup for $\\int x e^{x}\\,dx$

| Piece | Choice | How |
|-------|--------|-----|
| $u$ | $x$ | LIATE: A before E |
| $dv$ | $e^{x}\\,dx$ | everything left over |
| $du$ | $dx$ | differentiate $u=x$ |
| $v$ | $e^{x}$ | integrate $dv=e^{x}\\,dx$ |

> 💡 When you integrate $dv$ to find $v$, you do **not** need a "$+C$." Any one antiderivative works, so we always take the simplest one.`,
      },
      {
        id: 'ibp2-find-pieces',
        type: 'input-boxes' as const,
        content: `**Build $du$ and $v$** 🧮

For $\\int x\\cos x\\,dx$ we choose $u = x$ and $dv = \\cos x\\,dx$.

Enter $du$ and $v$ (write the coefficient as a number; for $v$ enter the function in words-free form, e.g. \\\`sin(x)\\\`).

**1)** $du = \\,?$  *(it equals "$1\\,dx$" — enter just the coefficient, the number multiplying $dx$)*
**2)** Half-check: $v = \\int \\cos x\\,dx = \\,?$  *(enter \\\`sin(x)\\\`)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1', 'sin(x)'],
          hint1: 'Differentiate $u = x$: its derivative is $1$, so $du = 1\\,dx$.',
          hint2: 'Integrate $dv = \\cos x\\,dx$. The antiderivative of $\\cos x$ is $\\sin x$.',
          hint3: 'No "$+C$" is needed for $v$ — just take $v = \\sin x$.',
          explanation: '$du = 1\\,dx$ (coefficient $1$) and $v = \\sin x$. These feed straight into $uv - \\int v\\,du$.',
        },
      },
      {
        id: 'ibp2-liate-recap',
        type: 'text' as const,
        content: `## One More Reason LIATE Works

Think about what each round of parts *does* to the integrand:

- If $u$ is the **algebraic** factor (like $x$), then $du$ has a **lower power** — the polynomial shrinks toward a constant.
- If $u$ is a **log** or **inverse-trig** function, then $du$ is algebraic/rational — you trade an awkward function for an easy one.

Either way, the integral you trade *into* is simpler. Choosing $u$ the *other* way usually makes the polynomial **grow**, which is why LIATE's ordering is the safe default.

> 🔑 **Bottom line:** Differentiating $u$ should *simplify* it. Pick $u$ to be the factor that gets nicer when you differentiate it.`,
      },
      {
        id: 'ibp2-which-u-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In $\\int x\\,\\ln x\\,dx$, what is the LIATE-correct choice of $u$?',
              options: ['$u = \\ln x$', '$u = x$', '$u = x\\ln x$', '$u = dx$'],
              correctAnswer: 0,
              explanation: 'Logarithmic (L) outranks Algebraic (A), so $u = \\ln x$ and $dv = x\\,dx$. Choosing $u=x$ instead would make the new integral harder, not easier.',
            },
            {
              question: 'Why do we put exponential and trig factors into $dv$ rather than $u$?',
              options: ['Because they are easy to integrate, which is what $dv$ requires', 'Because they cannot be differentiated', 'Because they are always negative', 'Because LIATE forbids differentiating them'],
              correctAnswer: 0,
              explanation: 'We must integrate $dv$ to get $v$. Exponentials and trig functions integrate cleanly, so they are ideal $dv$ choices. (They also differentiate fine — that is not the issue.)',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'integration-by-parts',
    sections: [
      {
        id: 'ibp3-intro',
        type: 'text' as const,
        content: `# ∫ Integration by Parts

**Part 3 of 7 — Standard Worked Examples**

---

> 🔑 **Goal:** Run the full machine end-to-end. Pick $u$ and $dv$, build $du$ and $v$, then plug into $\\int u\\,dv = uv - \\int v\\,du$ and finish the leftover integral.`,
      },
      {
        id: 'ibp3-xex',
        type: 'text' as const,
        content: `## Worked Example: $\\int x e^{x}\\,dx$

**Choose (LIATE, A before E):** $\\;u = x,\\quad dv = e^{x}\\,dx$

**Build:** $\\;du = dx,\\quad v = e^{x}$

**Apply the formula** $\\int u\\,dv = uv - \\int v\\,du$:

$$\\int x e^{x}\\,dx = x e^{x} - \\int e^{x}\\,dx$$

The leftover integral is easy:

$$\\int x e^{x}\\,dx = x e^{x} - e^{x} + C = e^{x}(x - 1) + C$$

> ✅ **Check by differentiating:** $\\frac{d}{dx}\\big[e^{x}(x-1)\\big] = e^{x}(x-1) + e^{x}\\cdot 1 = e^{x}\\,x = x e^{x}$ ✓`,
      },
      {
        id: 'ibp3-xcos',
        type: 'text' as const,
        content: `## Worked Example: $\\int x\\cos x\\,dx$

**Choose (A before T):** $\\;u = x,\\quad dv = \\cos x\\,dx$

**Build:** $\\;du = dx,\\quad v = \\sin x$

**Apply:**

$$\\int x\\cos x\\,dx = x\\sin x - \\int \\sin x\\,dx = x\\sin x + \\cos x + C$$

> ✅ **Check:** $\\frac{d}{dx}\\big[x\\sin x + \\cos x\\big] = (\\sin x + x\\cos x) - \\sin x = x\\cos x$ ✓

> ⚠️ **Watch the signs.** $\\int \\sin x\\,dx = -\\cos x$, and the formula already has a *minus* in front of the integral, so the two negatives combine to $+\\cos x$. Sign slips are the #1 error in parts problems.`,
      },
      {
        id: 'ibp3-dropdown-xsin',
        type: 'dropdown-select' as const,
        content: `**Work Through $\\int x\\sin x\\,dx$** 🔽

Use LIATE and the formula step by step.`,
        exercise: {
          dropdowns: [
            { label: 'Choose $u =$', options: ['$x$', '$\\sin x$', '$x\\sin x$', '$\\cos x$'] },
            { label: 'Then $v = \\int \\sin x\\,dx =$', options: ['$-\\cos x$', '$\\cos x$', '$\\sin x$', '$-\\sin x$'] },
            { label: 'So $uv =$', options: ['$-x\\cos x$', '$x\\cos x$', '$x\\sin x$', '$-x\\sin x$'] },
            { label: 'Final answer:', options: ['$-x\\cos x + \\sin x + C$', '$-x\\cos x - \\sin x + C$', '$x\\cos x + \\sin x + C$', '$-x\\sin x + \\cos x + C$'] },
          ],
          correctAnswers: ['$x$', '$-\\cos x$', '$-x\\cos x$', '$-x\\cos x + \\sin x + C$'],
          hint1: 'A (algebraic) beats T (trig), so $u = x$ and $dv = \\sin x\\,dx$.',
          hint2: '$\\int \\sin x\\,dx = -\\cos x$, so $v = -\\cos x$ and $uv = -x\\cos x$.',
          hint3: '$\\int u\\,dv = uv - \\int v\\,du = -x\\cos x - \\int(-\\cos x)\\,dx = -x\\cos x + \\sin x + C$.',
          explanation: 'With $u=x$, $v=-\\cos x$: $\\int x\\sin x\\,dx = -x\\cos x - \\int(-\\cos x)\\,dx = -x\\cos x + \\sin x + C$.',
        },
      },
      {
        id: 'ibp3-why-liate',
        type: 'text' as const,
        content: `## Why the LIATE Choice Matters

The next check makes the cost of a *bad* choice concrete. Compare the two ways to split $\\int x e^{x}\\,dx$:

| Choice | $v$ | $du$ | New integral $\\int v\\,du$ |
|--------|-----|------|----------------------------|
| ✅ $u=x,\\;dv=e^{x}dx$ | $e^{x}$ | $dx$ | $\\int e^{x}\\,dx$ — *easier* |
| ❌ $u=e^{x},\\;dv=x\\,dx$ | $\\frac{x^{2}}{2}$ | $e^{x}dx$ | $\\int \\frac{x^{2}}{2}e^{x}\\,dx$ — *harder* |

> ⚠️ A wrong split is not *illegal* — the formula still holds — it just leaves you with a **harder** integral. LIATE (A before E) steers you to the good split.`,
      },
      {
        id: 'ibp3-mc-setup',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'After choosing $u = x$ and $dv = e^{x}dx$ in $\\int x e^{x}dx$, the formula gives $xe^{x} - \\int v\\,du$. What is the leftover integral $\\int v\\,du$?',
              options: ['$\\int e^{x}\\,dx$', '$\\int x e^{x}\\,dx$', '$\\int x\\,dx$', '$\\int e^{x}\\,x\\,dx$'],
              correctAnswer: 0,
              explanation: 'Here $v = e^{x}$ and $du = dx$, so $\\int v\\,du = \\int e^{x}\\,dx$ — simpler than the original. That is the sign parts worked.',
            },
            {
              question: 'What would go wrong if you chose $u = e^{x}$ and $dv = x\\,dx$ in $\\int x e^{x}dx$?',
              options: ['The new integral $\\int \\frac{x^2}{2}e^{x}dx$ is harder than the original', 'The formula no longer applies', 'You would get a wrong but simpler integral', '$v$ would not exist'],
              correctAnswer: 0,
              explanation: 'Then $v = \\frac{x^2}{2}$ and $du = e^{x}dx$, so $\\int v\\,du = \\int \\frac{x^2}{2}e^{x}dx$ — a *higher* power of $x$, i.e. harder. That is exactly why LIATE puts A before E.',
            },
          ],
        },
      },
      {
        id: 'ibp3-recap-examples',
        type: 'text' as const,
        content: `## The Three Examples So Far

You have now worked the three "bread and butter" parts integrals. Keep them at your fingertips:

$$\\int x e^{x}\\,dx = e^{x}(x-1) + C$$
$$\\int x\\cos x\\,dx = x\\sin x + \\cos x + C$$
$$\\int x\\sin x\\,dx = -x\\cos x + \\sin x + C$$

> 💡 In every one, $u = x$ (the algebraic factor), so $du = dx$ and the leftover integral has no $x$ in it at all — that is what makes them finish in a single round.`,
      },
      {
        id: 'ibp3-input-drill',
        type: 'input-boxes' as const,
        content: `**Your Turn** 🧮

Integrate, then read off the requested coefficient.

**1)** $\\int x e^{x}\\,dx = e^{x}(x - 1) + C$. The constant subtracted inside the parentheses is $\\,?$
**2)** $\\int x\\cos x\\,dx = x\\sin x + \\cos x + C$. The coefficient of $\\cos x$ is $\\,?$
**3)** $\\int 2x e^{x}\\,dx = 2e^{x}(x-1)+C$. Evaluate this antiderivative (ignoring $C$) at $x = 1$: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '1', '0'],
          hint1: '$e^{x}(x-1)$: the number subtracted from $x$ is $1$.',
          hint2: 'In $x\\sin x + \\cos x$, the $\\cos x$ term has an invisible coefficient of $1$.',
          hint3: 'At $x=1$: $2e^{1}(1-1) = 2e\\cdot 0 = 0$.',
          explanation: '1) $1$.  2) $1$.  3) $2e^{1}(1-1) = 0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'integration-by-parts',
    sections: [
      {
        id: 'ibp4-intro',
        type: 'text' as const,
        content: `# ∫ Integration by Parts

**Part 4 of 7 — Logs, Inverse Trig & the $dv = dx$ Trick**

---

> 🔑 **The Surprise:** Some integrals look like they have only **one** factor — $\\int \\ln x\\,dx$, $\\int \\arctan x\\,dx$. Parts still works: let the lone function be $u$ and let $dv = dx$.`,
      },
      {
        id: 'ibp4-lnx',
        type: 'text' as const,
        content: `## Worked Example: $\\int \\ln x\\,dx$

There is no product here, but $\\ln x$ is **L** in LIATE — top priority for $u$. Treat the invisible factor as $dv = dx$:

**Choose:** $\\;u = \\ln x,\\quad dv = dx$

**Build:** $\\;du = \\dfrac{1}{x}\\,dx,\\quad v = x$

**Apply:**

$$\\int \\ln x\\,dx = (\\ln x)(x) - \\int x\\cdot\\frac{1}{x}\\,dx = x\\ln x - \\int 1\\,dx$$

$$\\int \\ln x\\,dx = x\\ln x - x + C$$

> ✅ **Check:** $\\frac{d}{dx}\\big[x\\ln x - x\\big] = \\big(\\ln x + x\\cdot\\tfrac{1}{x}\\big) - 1 = \\ln x + 1 - 1 = \\ln x$ ✓

> 💡 The magic is that $v\\,du = x\\cdot\\frac{1}{x}\\,dx = dx$ — the $x$'s cancel and the leftover integral collapses to something trivial.`,
      },
      {
        id: 'ibp4-arctan',
        type: 'text' as const,
        content: `## Worked Example: $\\int \\arctan x\\,dx$

Inverse trig is **I** in LIATE, also top-tier. Same trick, $dv = dx$:

**Choose:** $\\;u = \\arctan x,\\quad dv = dx$

**Build:** $\\;du = \\dfrac{1}{1+x^{2}}\\,dx,\\quad v = x$

**Apply:**

$$\\int \\arctan x\\,dx = x\\arctan x - \\int \\frac{x}{1+x^{2}}\\,dx$$

The leftover integral is a quick $u$-substitution (let $w = 1+x^{2}$, $dw = 2x\\,dx$):

$$\\int \\frac{x}{1+x^{2}}\\,dx = \\frac{1}{2}\\ln(1+x^{2})$$

$$\\boxed{\\int \\arctan x\\,dx = x\\arctan x - \\frac{1}{2}\\ln(1+x^{2}) + C}$$

> ⚠️ Integration by parts often leaves a remainder integral that needs *another* technique (here, substitution). Finish the job — a parts setup is not the final answer.`,
      },
      {
        id: 'ibp4-mc-trick',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To integrate $\\int \\ln x\\,dx$ by parts, what is $dv$?',
              options: ['$dv = dx$', '$dv = \\ln x\\,dx$', '$dv = \\frac{1}{x}\\,dx$', 'Parts cannot be used here'],
              correctAnswer: 0,
              explanation: 'With only one function, let $u = \\ln x$ (it is "L", top of LIATE) and let the invisible factor be $dv = dx$, so $v = x$.',
            },
            {
              question: '$\\int \\ln x\\,dx = $',
              options: ['$x\\ln x - x + C$', '$\\frac{1}{x} + C$', '$x\\ln x + x + C$', '$\\frac{(\\ln x)^2}{2} + C$'],
              correctAnswer: 0,
              explanation: 'With $u = \\ln x$, $v = x$: $x\\ln x - \\int x\\cdot\\frac{1}{x}dx = x\\ln x - \\int 1\\,dx = x\\ln x - x + C$.',
            },
          ],
        },
      },
      {
        id: 'ibp4-x2lnx',
        type: 'text' as const,
        content: `## Worked Example: $\\int x^{2}\\ln x\\,dx$

Now a genuine product. **L beats A**, so the log is $u$ even though the polynomial looks like the "obvious" $u$:

**Choose:** $\\;u = \\ln x,\\quad dv = x^{2}\\,dx$

**Build:** $\\;du = \\dfrac{1}{x}\\,dx,\\quad v = \\dfrac{x^{3}}{3}$

**Apply:**

$$\\int x^{2}\\ln x\\,dx = \\frac{x^{3}}{3}\\ln x - \\int \\frac{x^{3}}{3}\\cdot\\frac{1}{x}\\,dx = \\frac{x^{3}}{3}\\ln x - \\frac{1}{3}\\int x^{2}\\,dx$$

$$\\int x^{2}\\ln x\\,dx = \\frac{x^{3}}{3}\\ln x - \\frac{x^{3}}{9} + C$$

> ✅ **Check:** $\\frac{d}{dx}\\!\\left[\\frac{x^3}{3}\\ln x - \\frac{x^3}{9}\\right] = x^2\\ln x + \\frac{x^3}{3}\\cdot\\frac{1}{x} - \\frac{x^2}{3} = x^2\\ln x + \\frac{x^2}{3} - \\frac{x^2}{3} = x^2\\ln x$ ✓`,
      },
      {
        id: 'ibp4-input-logs',
        type: 'input-boxes' as const,
        content: `**Log & Inverse-Trig Drill** 🧮

**1)** In $\\int x^{2}\\ln x\\,dx$, the antiderivative is $\\frac{x^{3}}{3}\\ln x - \\frac{x^{3}}{9}+C$. The denominator under the second $x^3$ term is $\\,?$
**2)** For $\\int \\ln x\\,dx = x\\ln x - x + C$, evaluate the antiderivative (ignore $C$) at $x = 1$: $\\,?$  *(recall $\\ln 1 = 0$)*
**3)** In $\\int \\arctan x\\,dx = x\\arctan x - \\frac{1}{2}\\ln(1+x^2)+C$, what number multiplies $\\ln(1+x^2)$? *(decimal is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '-1', '-0.5'],
          hint1: 'The integral of $\\frac{1}{3}x^2$ is $\\frac{x^3}{9}$, so the denominator is $9$.',
          hint2: 'At $x=1$: $1\\cdot\\ln 1 - 1 = 1\\cdot 0 - 1 = -1$.',
          hint3: 'The coefficient is $-\\frac{1}{2} = -0.5$ (it is subtracted).',
          explanation: '1) $9$.  2) $1\\cdot 0 - 1 = -1$.  3) $-\\tfrac12 = -0.5$.',
        },
      },
      {
        id: 'ibp4-setup-summary',
        type: 'text' as const,
        content: `## Spotting the Pattern

Two new setups joined your toolkit in this part:

| Integral | $u$ | $dv$ | Why |
|----------|-----|------|-----|
| $\\int \\ln x\\,dx$ | $\\ln x$ | $dx$ | only one function — use $dv = dx$ |
| $\\int \\arctan x\\,dx$ | $\\arctan x$ | $dx$ | inverse trig (**I**) is top-tier $u$ |
| $\\int x^{2}\\ln x\\,dx$ | $\\ln x$ | $x^{2}\\,dx$ | **L** beats **A** |

> 🔑 Whenever a logarithm or inverse-trig function appears, it is almost always $u$ — those functions are *easy to differentiate* but *awkward to integrate*.`,
      },
      {
        id: 'ibp4-setup-dropdown',
        type: 'dropdown-select' as const,
        content: `**Choose $u$ and $dv$** 🔽

Apply LIATE to each integral.`,
        exercise: {
          dropdowns: [
            { label: 'In $\\int x\\ln x\\,dx$, $u =$', options: ['$\\ln x$', '$x$', '$x\\ln x$', '$dx$'] },
            { label: 'In $\\int \\arcsin x\\,dx$, $dv =$', options: ['$dx$', '$\\arcsin x\\,dx$', '$\\frac{1}{\\sqrt{1-x^{2}}}\\,dx$', '$x\\,dx$'] },
            { label: 'In $\\int x^{3}\\ln x\\,dx$, $dv =$', options: ['$x^{3}\\,dx$', '$\\ln x\\,dx$', '$dx$', '$x^{3}\\ln x\\,dx$'] },
          ],
          correctAnswers: ['$\\ln x$', '$dx$', '$x^{3}\\,dx$'],
          hint1: 'L outranks A, so the log is $u$ and whatever is left over is $dv$.',
          hint2: 'A lone inverse-trig function uses the $dv = dx$ trick.',
          hint3: 'In $\\int x^3\\ln x\\,dx$: $u=\\ln x$, so $dv$ is everything else, $x^3\\,dx$.',
          explanation: '$\\int x\\ln x$: $u=\\ln x$. $\\int \\arcsin x$: $dv=dx$. $\\int x^3\\ln x$: $u=\\ln x$, so $dv=x^3\\,dx$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'integration-by-parts',
    sections: [
      {
        id: 'ibp5-intro',
        type: 'text' as const,
        content: `# ∫ Integration by Parts

**Part 5 of 7 — Repeated Parts & the Cyclic Integral**

---

> 🔑 **The Idea:** Sometimes one round of parts isn't enough. If the leftover integral is *still* a product, do parts **again**. And in a few special cases the original integral *reappears* — and you solve for it with algebra.`,
      },
      {
        id: 'ibp5-x2ex',
        type: 'text' as const,
        content: `## Repeated Parts: $\\int x^{2}e^{x}\\,dx$

The power of $x$ is too high to finish in one step, so we apply parts **twice**.

**Round 1** — $u = x^{2}$, $dv = e^{x}dx$ ⇒ $du = 2x\\,dx$, $v = e^{x}$:

$$\\int x^{2}e^{x}\\,dx = x^{2}e^{x} - \\int 2x\\,e^{x}\\,dx = x^{2}e^{x} - 2\\int x e^{x}\\,dx$$

**Round 2** — we already found $\\int x e^{x}dx = e^{x}(x-1)$ in Part 3:

$$\\int x^{2}e^{x}\\,dx = x^{2}e^{x} - 2\\,e^{x}(x - 1) + C$$

$$\\int x^{2}e^{x}\\,dx = e^{x}\\big(x^{2} - 2x + 2\\big) + C$$

> 💡 **Pattern:** Each round of parts **lowers the power of $x$ by one**. A factor of $x^{n}$ takes $n$ rounds to clear.

> ✅ **Check:** $\\frac{d}{dx}\\big[e^{x}(x^2-2x+2)\\big] = e^{x}(x^2-2x+2) + e^{x}(2x-2) = e^{x}\\,x^2 = x^2 e^{x}$ ✓`,
      },
      {
        id: 'ibp5-mc-rounds',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many times must you apply integration by parts to evaluate $\\int x^{3}e^{x}\\,dx$?',
              options: ['3 times', '1 time', '2 times', 'It cannot be done by parts'],
              correctAnswer: 0,
              explanation: 'Each round drops the power of $x$ by one. Starting from $x^{3}$, you need $3$ rounds to reduce the polynomial factor to a constant.',
            },
            {
              question: 'After the first round of parts on $\\int x^{2}e^{x}dx$, the leftover integral is:',
              options: ['$2\\int x e^{x}\\,dx$', '$\\int x^{2}e^{x}\\,dx$', '$\\int e^{x}\\,dx$', '$\\int 2x\\,dx$'],
              correctAnswer: 0,
              explanation: 'With $u=x^2$, $du=2x\\,dx$, $v=e^x$: $x^2 e^x - \\int e^x\\cdot 2x\\,dx = x^2 e^x - 2\\int x e^x\\,dx$. The leftover is $2\\int x e^x\\,dx$, which needs one more round.',
            },
          ],
        },
      },
      {
        id: 'ibp5-cyclic',
        type: 'text' as const,
        content: `## The Cyclic ("Boomerang") Integral: $\\int e^{x}\\sin x\\,dx$

Here both factors are easy to integrate, so neither power drops — parts seems to go in circles. The trick: do parts **twice**, then **solve algebraically** for the original integral.

Call the integral $I = \\int e^{x}\\sin x\\,dx$.

**Round 1** — $u = \\sin x$, $dv = e^{x}dx$ ⇒ $du = \\cos x\\,dx$, $v = e^{x}$:

$$I = e^{x}\\sin x - \\int e^{x}\\cos x\\,dx$$

**Round 2** on $\\int e^{x}\\cos x\\,dx$ — $u = \\cos x$, $dv = e^{x}dx$ ⇒ $du = -\\sin x\\,dx$, $v = e^{x}$:

$$\\int e^{x}\\cos x\\,dx = e^{x}\\cos x + \\int e^{x}\\sin x\\,dx = e^{x}\\cos x + I$$

**Substitute back:**

$$I = e^{x}\\sin x - \\big(e^{x}\\cos x + I\\big) = e^{x}\\sin x - e^{x}\\cos x - I$$

**Solve for $I$** (add $I$ to both sides, divide by 2):

$$2I = e^{x}(\\sin x - \\cos x) \\;\\Rightarrow\\; \\boxed{I = \\frac{e^{x}(\\sin x - \\cos x)}{2} + C}$$

> ⚠️ **Stay consistent.** In both rounds, $dv = e^{x}dx$ (we kept the exponential as $dv$ each time). If you flip the choice on the second round, the integral cancels to $0=0$ and you learn nothing.`,
      },
      {
        id: 'ibp5-dropdown-cyclic',
        type: 'dropdown-select' as const,
        content: `**Trace the Boomerang** 🔽

You are evaluating $I = \\int e^{x}\\cos x\\,dx$ with $dv = e^{x}dx$ throughout.`,
        exercise: {
          dropdowns: [
            { label: 'Round 1 with $u = \\cos x$ gives $uv =$', options: ['$e^{x}\\cos x$', '$e^{x}\\sin x$', '$-e^{x}\\cos x$', '$e^{x}$'] },
            { label: 'The technique that finishes a cyclic integral is to:', options: ['solve algebraically for $I$', 'apply $u$-substitution', 'take a derivative', 'use partial fractions'] },
            { label: 'The final result has an overall factor of:', options: ['$\\tfrac{1}{2}$', '$2$', '$-1$', '$\\tfrac{1}{4}$'] },
          ],
          correctAnswers: ['$e^{x}\\cos x$', 'solve algebraically for $I$', '$\\tfrac{1}{2}$'],
          hint1: '$u = \\cos x$ and $v = e^{x}$, so $uv = e^{x}\\cos x$.',
          hint2: 'After two rounds the original integral $I$ reappears; isolate it like an algebra variable.',
          hint3: 'You end with $2I = \\dots$, so dividing by $2$ leaves a factor of $\\tfrac12$. (In fact $\\int e^{x}\\cos x\\,dx = \\frac{e^{x}(\\sin x+\\cos x)}{2}+C$.)',
          explanation: 'Cyclic integrals reappear after two rounds; you solve $2I = \\dots$ algebraically, leaving an overall $\\tfrac12$.',
        },
      },
      {
        id: 'ibp5-two-patterns',
        type: 'text' as const,
        content: `## Two Patterns, Side by Side

It is worth keeping the two "needs more than one round" cases distinct:

| Pattern | Looks like | What happens | How it ends |
|---------|-----------|--------------|-------------|
| **Repeated parts** | $x^{n}\\cdot(e^{x}$ or $\\sin x$ or $\\cos x)$ | the power of $x$ **drops** each round | finishes after $n$ rounds |
| **Cyclic / boomerang** | $e^{x}\\sin x$, $e^{x}\\cos x$ | the integral **reappears** unchanged | solve algebraically for $I$ |

> 💡 **Tell them apart by the polynomial.** If there is a power of $x$, you are reducing it (repeated parts). If both factors are exp/trig with no polynomial, expect the boomerang.`,
      },
      {
        id: 'ibp5-input-x2ex',
        type: 'input-boxes' as const,
        content: `**Repeated-Parts Drill** 🧮

Use $\\int x^{2}e^{x}\\,dx = e^{x}(x^{2} - 2x + 2) + C$ and $\\int e^{x}\\sin x\\,dx = \\frac{e^{x}(\\sin x - \\cos x)}{2}+C$.

**1)** In $e^{x}(x^{2}-2x+2)$, the constant term inside the parentheses is $\\,?$
**2)** Evaluate $e^{x}(x^2-2x+2)$ at $x = 0$: $\\,?$  *(recall $e^{0}=1$)*
**3)** Reducing $\\int x^{4}e^{x}\\,dx$ to a constant takes how many rounds of parts? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '2', '4'],
          hint1: 'The polynomial is $x^2 - 2x + 2$; its constant term is $2$.',
          hint2: 'At $x=0$: $e^{0}(0 - 0 + 2) = 1\\cdot 2 = 2$.',
          hint3: 'Each round lowers the power by one, so $x^4$ needs $4$ rounds.',
          explanation: '1) $2$.  2) $1\\cdot 2 = 2$.  3) $4$ rounds.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'integration-by-parts',
    sections: [
      {
        id: 'ibp6-intro',
        type: 'text' as const,
        content: `# ∫ Integration by Parts

**Part 6 of 7 — Definite Integrals by Parts**

---

> 🔑 **The Idea:** For a *definite* integral, attach the limits to **both** pieces. The formula becomes
> $$\\int_{a}^{b} u\\,dv = \\Big[u\\,v\\Big]_{a}^{b} - \\int_{a}^{b} v\\,du.$$`,
      },
      {
        id: 'ibp6-formula',
        type: 'text' as const,
        content: `## The Definite Formula

$$\\int_{a}^{b} u\\,dv = \\Big[u\\,v\\Big]_{a}^{b} - \\int_{a}^{b} v\\,du$$

The boundary term $\\big[uv\\big]_a^b$ means "evaluate $uv$ at the top limit minus at the bottom limit," $u(b)v(b) - u(a)v(a)$.

> 💡 **Two valid styles:**
> 1. Evaluate the boundary term $[uv]_a^b$ as a *number* right away, then handle $\\int_a^b v\\,du$.
> 2. Find the whole antiderivative first (Parts 3–5), then plug in the limits at the very end.
>
> Both give the same answer. Below we use style 1.`,
      },
      {
        id: 'ibp6-worked',
        type: 'text' as const,
        content: `## Worked Example: $\\displaystyle\\int_{0}^{1} x e^{x}\\,dx$

**Choose:** $\\;u = x,\\; dv = e^{x}dx \\;\\Rightarrow\\; du = dx,\\; v = e^{x}$

**Apply the definite formula:**

$$\\int_{0}^{1} x e^{x}\\,dx = \\Big[x e^{x}\\Big]_{0}^{1} - \\int_{0}^{1} e^{x}\\,dx$$

**Boundary term:** $\\big[x e^{x}\\big]_0^1 = (1)e^{1} - (0)e^{0} = e - 0 = e$.

**Leftover integral:** $\\displaystyle\\int_0^1 e^{x}\\,dx = \\big[e^{x}\\big]_0^1 = e - 1$.

**Combine:**

$$\\int_{0}^{1} x e^{x}\\,dx = e - (e - 1) = 1$$

> ✅ **Sanity check with the antiderivative:** $\\big[e^{x}(x-1)\\big]_0^1 = e^{1}(0) - e^{0}(-1) = 0 - (-1) = 1$ ✓`,
      },
      {
        id: 'ibp6-mc-def',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the definite formula $\\int_a^b u\\,dv = [uv]_a^b - \\int_a^b v\\,du$, what does $[uv]_a^b$ equal?',
              options: ['$u(b)v(b) - u(a)v(a)$', '$u(a)v(a) - u(b)v(b)$', '$u(b)v(b) + u(a)v(a)$', '$u(b) - v(a)$'],
              correctAnswer: 0,
              explanation: 'Boundary terms are always "top minus bottom": evaluate $uv$ at $b$, subtract its value at $a$.',
            },
            {
              question: 'For $\\int_1^{e} \\ln x\\,dx$, using $u=\\ln x,\\,v=x$, the boundary term $[x\\ln x]_1^{e}$ equals:',
              options: ['$e$', '$1$', '$0$', '$e - 1$'],
              correctAnswer: 0,
              explanation: '$[x\\ln x]_1^{e} = e\\ln e - 1\\cdot\\ln 1 = e\\cdot 1 - 1\\cdot 0 = e$.',
            },
          ],
        },
      },
      {
        id: 'ibp6-lne',
        type: 'text' as const,
        content: `## Worked Example: $\\displaystyle\\int_{1}^{e} \\ln x\\,dx$

**Choose:** $\\;u = \\ln x,\\; dv = dx \\;\\Rightarrow\\; du = \\frac{1}{x}dx,\\; v = x$

$$\\int_{1}^{e} \\ln x\\,dx = \\Big[x\\ln x\\Big]_{1}^{e} - \\int_{1}^{e} x\\cdot\\frac{1}{x}\\,dx = \\Big[x\\ln x\\Big]_{1}^{e} - \\int_{1}^{e} 1\\,dx$$

**Boundary term:** $\\big[x\\ln x\\big]_1^{e} = e\\ln e - 1\\ln 1 = e - 0 = e$.

**Leftover:** $\\displaystyle\\int_1^{e} 1\\,dx = \\big[x\\big]_1^{e} = e - 1$.

**Combine:**

$$\\int_{1}^{e} \\ln x\\,dx = e - (e - 1) = 1$$

> 💡 This is the exact area under $y = \\ln x$ from $x=1$ to $x=e$ — and it comes out to a clean $1$ square unit.`,
      },
      {
        id: 'ibp6-input-def',
        type: 'input-boxes' as const,
        content: `**Definite-Integral Drill** 🧮

Evaluate each definite integral (use the antiderivatives from earlier parts).

**1)** $\\displaystyle\\int_{0}^{1} x e^{x}\\,dx = \\,?$
**2)** $\\displaystyle\\int_{1}^{e} \\ln x\\,dx = \\,?$
**3)** $\\displaystyle\\int_{0}^{\\pi} x\\sin x\\,dx = \\,?$  *(use $\\int x\\sin x\\,dx = -x\\cos x + \\sin x$; recall $\\cos\\pi=-1$, $\\sin\\pi=0$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '1', 'pi'],
          hint1: 'From the worked example, $\\int_0^1 x e^x\\,dx = 1$.',
          hint2: 'From the worked example, $\\int_1^{e}\\ln x\\,dx = 1$.',
          hint3: '$[-x\\cos x + \\sin x]_0^{\\pi} = (-\\pi\\cos\\pi + \\sin\\pi) - (0 + 0) = -\\pi(-1) + 0 = \\pi$. Enter \\\`pi\\\`.',
          explanation: '1) $1$.  2) $1$.  3) $[-x\\cos x + \\sin x]_0^{\\pi} = \\pi(1) = \\pi$. Both terms vanish at $0$.',
        },
      },
      {
        id: 'ibp6-process-recap',
        type: 'text' as const,
        content: `## Order of Operations for a Definite Parts Problem

It is easy to lose a sign or a limit. Keep the steps in order:

1. **Choose** $u$ and $dv$ (LIATE), then build $du$ and $v$.
2. Write $\\displaystyle\\int_a^b u\\,dv = \\big[uv\\big]_a^b - \\int_a^b v\\,du$.
3. **Evaluate the boundary term** $\\big[uv\\big]_a^b = u(b)v(b) - u(a)v(a)$.
4. **Evaluate the leftover integral** $\\int_a^b v\\,du$ (it may need more work).
5. **Subtract** to get the final number.

> ⚠️ The limits $a$ and $b$ are values of **$x$** — they ride along on both the boundary term and the leftover integral. Do not forget to apply them to *both*.`,
      },
      {
        id: 'ibp6-order-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You are computing $\\int_0^1 x e^{x}\\,dx$ with $u=x$, $dv=e^{x}dx$.`,
        exercise: {
          dropdowns: [
            { label: 'The boundary term $\\big[x e^{x}\\big]_0^1$ equals:', options: ['$e$', '$e - 1$', '$1$', '$0$'] },
            { label: 'The leftover integral $\\int_0^1 e^{x}\\,dx$ equals:', options: ['$e - 1$', '$e$', '$1$', '$e + 1$'] },
            { label: 'So the definite integral equals:', options: ['$1$', '$e$', '$e - 1$', '$2e - 1$'] },
          ],
          correctAnswers: ['$e$', '$e - 1$', '$1$'],
          hint1: '$[xe^x]_0^1 = (1)e^1 - (0)e^0 = e - 0 = e$.',
          hint2: '$\\int_0^1 e^x\\,dx = [e^x]_0^1 = e - 1$.',
          hint3: 'Subtract: $e - (e - 1) = 1$.',
          explanation: 'Boundary term $e$, leftover $e-1$, so $e - (e-1) = 1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'integration-by-parts',
    sections: [
      {
        id: 'ibp7-intro',
        type: 'text' as const,
        content: `# ∫ Integration by Parts

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) recognize when parts is the right tool, (2) choose $u$ with LIATE, (3) run standard products, logs, and inverse trig, (4) handle repeated and cyclic integrals, and (5) evaluate definite integrals by parts. Time to put it all together.`,
      },
      {
        id: 'ibp7-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Situation | What to do |
|-----------|------------|
| Product of unrelated functions | Use parts: $\\int u\\,dv = uv - \\int v\\,du$ |
| Choosing $u$ | **LIATE** — Log, Inverse trig, Algebraic, Trig, Exponential |
| Lone $\\ln x$ or $\\arctan x$ | Let $u$ = the function, $dv = dx$ |
| Polynomial $x^{n}$ factor | Apply parts $n$ times (each round drops the power) |
| $e^{x}\\sin x$ / $e^{x}\\cos x$ | Cyclic: parts twice, then solve algebraically for $I$ |
| Definite integral | $\\int_a^b u\\,dv = [uv]_a^b - \\int_a^b v\\,du$ |

> ⚠️ **Top error sources:** dropping the minus sign in front of $\\int v\\,du$; mishandling the double-negative when $v=-\\cos x$; and forgetting that the leftover integral may need *another* method. Always differentiate your answer to check.`,
      },
      {
        id: 'ibp7-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Strategy** 🔽

Identify the right first move for each integral.`,
        exercise: {
          dropdowns: [
            { label: '$\\int x^{3}e^{x}\\,dx$', options: ['repeated parts (3 rounds)', 'cyclic / solve for $I$', 'plain $u$-substitution', '$dv = dx$ trick'] },
            { label: '$\\int e^{x}\\cos x\\,dx$', options: ['cyclic / solve for $I$', 'repeated parts (3 rounds)', 'power rule', 'partial fractions'] },
            { label: '$\\int \\arcsin x\\,dx$', options: ['$dv = dx$ trick', 'cyclic / solve for $I$', 'plain $u$-substitution', 'power rule'] },
          ],
          correctAnswers: ['repeated parts (3 rounds)', 'cyclic / solve for $I$', '$dv = dx$ trick'],
          hint1: 'A high power of $x$ times $e^x$ needs one round per degree.',
          hint2: 'An exponential times a sine or cosine reappears after two rounds — solve for $I$.',
          hint3: 'A lone inverse-trig function uses $u$ = the function and $dv = dx$.',
          explanation: '$x^3 e^x$: 3 rounds of parts. $e^x\\cos x$: cyclic, solve for $I$. $\\arcsin x$: the $dv=dx$ trick.',
        },
      },
      {
        id: 'ibp7-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $\\int x e^{2x}\\,dx$.  (Hint: $u=x$, $dv=e^{2x}dx$, so $v=\\frac{1}{2}e^{2x}$.)',
              options: ['$\\frac{1}{2}x e^{2x} - \\frac{1}{4}e^{2x} + C$', '$\\frac{1}{2}x e^{2x} + \\frac{1}{4}e^{2x} + C$', '$x e^{2x} - e^{2x} + C$', '$\\frac{1}{2}x e^{2x} - \\frac{1}{2}e^{2x} + C$'],
              correctAnswer: 0,
              explanation: '$x\\cdot\\frac{1}{2}e^{2x} - \\int \\frac{1}{2}e^{2x}\\,dx = \\frac{1}{2}xe^{2x} - \\frac{1}{2}\\cdot\\frac{1}{2}e^{2x} + C = \\frac{1}{2}xe^{2x} - \\frac{1}{4}e^{2x} + C$.',
            },
            {
              question: 'Which integral does NOT need integration by parts?',
              options: ['$\\int x e^{x^{2}}\\,dx$', '$\\int x\\ln x\\,dx$', '$\\int x\\cos x\\,dx$', '$\\int \\arctan x\\,dx$'],
              correctAnswer: 0,
              explanation: '$\\int x e^{x^2}dx$ is a plain $u$-substitution ($w=x^2$, $dw=2x\\,dx$), giving $\\frac{1}{2}e^{x^2}+C$. The other three are classic parts problems.',
            },
          ],
        },
      },
      {
        id: 'ibp7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'By LIATE, what is the correct choice of $u$ in $\\int x^{2}\\ln x\\,dx$?',
              options: ['$u = \\ln x$', '$u = x^{2}$', '$u = x$', '$u = x^{2}\\ln x$'],
              correctAnswer: 0,
              explanation: 'Logarithmic (L) outranks Algebraic (A), so $u = \\ln x$ and $dv = x^{2}\\,dx$. Then $v=\\frac{x^3}{3}$ and the leftover integral cleans up nicely.',
            },
            {
              question: 'What is $\\int x\\cos x\\,dx$?',
              options: ['$x\\sin x + \\cos x + C$', '$x\\sin x - \\cos x + C$', '$-x\\sin x + \\cos x + C$', '$x\\cos x + \\sin x + C$'],
              correctAnswer: 0,
              explanation: 'With $u=x$, $v=\\sin x$: $x\\sin x - \\int \\sin x\\,dx = x\\sin x - (-\\cos x) = x\\sin x + \\cos x + C$.',
            },
            {
              question: 'Evaluate the definite integral $\\int_{0}^{1} x e^{x}\\,dx$.',
              options: ['$1$', '$e - 1$', '$e$', '$0$'],
              correctAnswer: 0,
              explanation: '$[xe^x]_0^1 - \\int_0^1 e^x dx = e - (e-1) = 1$. Equivalently, $[e^x(x-1)]_0^1 = 0 - (-1) = 1$.',
            },
          ],
        },
      },
    ],
  },
]
