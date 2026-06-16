import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — The Product Rule (AP Calculus AB).
 * Registry key / DB Topic.slug: 'product-rule'.
 * 7 parts, gold-standard structure: why the rule is needed → the rule itself →
 * worked examples with trig/exp/log factors → simplify & factor → product +
 * chain rule combined → tables & three-factor products → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every derivative computation was verified by hand and re-checked before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'product-rule',
    sections: [
      {
        id: 'prod1-intro',
        type: 'text' as const,
        content: `# ✖️ The Product Rule

**Part 1 of 7 — Why You Can't Just Multiply the Derivatives**

---

### Topics in This Part

| Section |
|---------|
| What Counts as a "Product"? |
| The Tempting Wrong Answer |
| A Concrete Counterexample |

> 🔑 **Key Concept:** The Product Rule tells you how to differentiate a function that is the **product of two factors**, like $x^2\\sin x$ or $(2x+1)e^x$. The naive guess — "differentiate each factor and multiply" — is *wrong*, and Part 1 proves exactly why.`,
      },
      {
        id: 'prod1-whatis',
        type: 'text' as const,
        content: `## What Counts as a "Product"?

A **product** is two (or more) functions **multiplied together**. You need the Product Rule whenever neither factor is just a constant.

| Expression | Product of two functions? | Factors |
|------------|---------------------------|---------|
| $x^2\\sin x$ | ✅ yes | $x^2$ and $\\sin x$ |
| $(3x+1)e^x$ | ✅ yes | $3x+1$ and $e^x$ |
| $5x^3$ | ❌ no — constant times a power | use the Power Rule |
| $x^2 + \\sin x$ | ❌ no — that's a **sum** | differentiate term by term |

> 💡 **Constants don't count.** $5x^3$ is a *number* times a function, so the Constant Multiple Rule handles it: $\\frac{d}{dx}(5x^3) = 15x^2$. The Product Rule is for two genuine functions of $x$ multiplied together.`,
      },
      {
        id: 'prod1-spot-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which expression genuinely requires the **Product Rule**?',
              options: ['$x\\,\\cos x$', '$x^2 + \\cos x$', '$7x^4$', '$\\dfrac{x}{\\cos x}$'],
              correctAnswer: 0,
              explanation: '$x\\cos x$ is two functions of $x$ multiplied together, so it needs the Product Rule. $x^2+\\cos x$ is a sum (differentiate term by term), $7x^4$ is a constant times a power, and $\\frac{x}{\\cos x}$ is a quotient.',
            },
            {
              question: 'Why does $5x^3$ NOT need the Product Rule?',
              options: ['$5$ is a constant, not a function of $x$', '$x^3$ is not differentiable', 'It is actually a sum', 'It needs the Quotient Rule instead'],
              correctAnswer: 0,
              explanation: 'The Product Rule is for two *functions* of $x$. Here $5$ is just a number, so the Constant Multiple Rule applies: $\\frac{d}{dx}(5x^3) = 5\\cdot 3x^2 = 15x^2$.',
            },
          ],
        },
      },
      {
        id: 'prod1-wrong',
        type: 'text' as const,
        content: `## The Tempting Wrong Answer

It feels natural to guess that the derivative of a product is the product of the derivatives:

$$\\frac{d}{dx}\\big[f(x)\\,g(x)\\big] \\;\\overset{?}{=}\\; f'(x)\\,g'(x) \\qquad \\color{red}{\\textbf{WRONG}}$$

This is one of the most common errors in all of calculus. Let's **disprove** it with numbers you can check yourself.

### Counterexample: $y = x \\cdot x$

We know $x \\cdot x = x^2$, and by the Power Rule $\\dfrac{d}{dx}x^2 = 2x$.

But the *naive* rule would give:

$$\\frac{d}{dx}(x)\\cdot\\frac{d}{dx}(x) = 1 \\cdot 1 = 1$$

That says the derivative is $1$, when the true answer is $2x$. **The naive rule is just wrong.**`,
      },
      {
        id: 'prod1-counter-input',
        type: 'input-boxes' as const,
        content: `**See It For Yourself** 🧮

Let's expose the naive rule again using $y = x^2 \\cdot x^3$.

**1)** Combine first: $x^2 \\cdot x^3 = x^5$. Its true derivative is $5x^4$. What is the exponent on $x$? (Enter just the exponent.)
**2)** The *naive* "multiply the derivatives" rule gives $2x \\cdot 3x^2 = 6x^3$. What is the exponent on $x$ there?
**3)** True coefficient is $5$, naive coefficient is $6$. By how much do the **exponents** differ? (Enter true exponent minus naive exponent.)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '3', '1'],
          hint1: '$x^2\\cdot x^3 = x^{2+3} = x^5$, and $\\frac{d}{dx}x^5 = 5x^4$. The exponent is $4$.',
          hint2: '$\\frac{d}{dx}x^2 = 2x$ and $\\frac{d}{dx}x^3 = 3x^2$. Their product is $2x\\cdot 3x^2 = 6x^3$, exponent $3$.',
          hint3: 'True exponent $4$ minus naive exponent $3$ is $4 - 3 = 1$. The two answers are not even the same degree!',
          explanation: 'The true derivative $5x^4$ and the naive product $6x^3$ disagree in both coefficient AND exponent. That settles it: you cannot just multiply the derivatives. The correct rule is coming in Part 2.',
        },
      },
      {
        id: 'prod1-bridge',
        type: 'text' as const,
        content: `## So What IS the Rule?

The counterexamples show the truth: differentiating a product involves **both** factors *and* **both** derivatives, mixed together — not multiplied straight across.

Here is a preview of the correct pattern. To differentiate $f\\cdot g$, you build a **sum of two terms**, differentiating one factor at a time while leaving the other alone:

$$\\frac{d}{dx}\\big[f\\,g\\big] = \\underbrace{f'\\,g}_{\\text{diff } f} + \\underbrace{f\\,g'}_{\\text{diff } g}$$

> ⚠️ **The big idea:** a product's derivative is a **sum**, not a product. Part 2 makes this precise, proves it works on our counterexamples, and gives you a chant to remember it.`,
      },
      {
        id: 'prod1-classify-dropdown',
        type: 'dropdown-select' as const,
        content: `**Which Rule Do I Need?** 🔽

For each expression, pick the rule you'd reach for. (This habit — *classify before you differentiate* — saves you on every test.)`,
        exercise: {
          dropdowns: [
            { label: '$y = x^2\\,e^x$', options: ['Product Rule', 'Power Rule only', 'Sum Rule', 'Constant Multiple Rule'] },
            { label: '$y = x^2 + e^x$', options: ['Sum Rule', 'Product Rule', 'Power Rule only', 'Quotient Rule'] },
            { label: '$y = 6x^5$', options: ['Constant Multiple Rule', 'Product Rule', 'Sum Rule', 'Quotient Rule'] },
          ],
          correctAnswers: ['Product Rule', 'Sum Rule', 'Constant Multiple Rule'],
          hint1: '$x^2\\,e^x$ is two functions of $x$ multiplied together — that is the Product Rule.',
          hint2: '$x^2 + e^x$ is added, not multiplied, so differentiate term by term (Sum Rule).',
          hint3: 'In $6x^5$ the $6$ is just a constant, so the Constant Multiple Rule gives $30x^4$.',
          explanation: 'A product of two functions needs the Product Rule; a sum is done term by term; a constant times a power is just the Constant Multiple Rule. Spotting the structure first is half the battle.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'product-rule',
    sections: [
      {
        id: 'prod2-intro',
        type: 'text' as const,
        content: `# ✖️ The Product Rule

**Part 2 of 7 — The Rule Itself**

---

> 🔑 **The Idea:** To differentiate $f\\cdot g$, take turns: differentiate the **first** (keep the second), then differentiate the **second** (keep the first), and **add** the two pieces.`,
      },
      {
        id: 'prod2-statement',
        type: 'text' as const,
        content: `## Stating the Product Rule

If $y = f(x)\\,g(x)$, then

$$\\frac{dy}{dx} = f'(x)\\,g(x) + f(x)\\,g'(x)$$

In words: **(derivative of the first)(second) + (first)(derivative of the second).**

Many students use the compact $u$–$v$ form. With $u$ and $v$ both functions of $x$:

$$(uv)' = u'v + uv'$$

> 💡 **The chant:** *"First-prime second, plus first second-prime."* Say it on every product. Each term differentiates **exactly one** factor and leaves the other untouched.`,
      },
      {
        id: 'prod2-proof',
        type: 'text' as const,
        content: `## It Fixes Our Counterexamples

Recall $y = x \\cdot x$. Take $u = x$ and $v = x$, so $u' = 1$ and $v' = 1$:

$$(uv)' = u'v + uv' = (1)(x) + (x)(1) = x + x = 2x \\;\\checkmark$$

That matches $\\dfrac{d}{dx}x^2 = 2x$ exactly. Now $y = x^2\\cdot x^3$ with $u=x^2,\\,v=x^3$:

$$(uv)' = (2x)(x^3) + (x^2)(3x^2) = 2x^4 + 3x^4 = 5x^4 \\;\\checkmark$$

That matches $\\dfrac{d}{dx}x^5 = 5x^4$. The Product Rule is **provably correct** where the naive rule failed.

> ✅ **Why a sum?** Each term captures the change contributed by *one* factor while the other is momentarily held fixed. Adding the two contributions gives the total rate of change.`,
      },
      {
        id: 'prod2-firststep-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The Product Rule $(uv)\'$ equals:',
              options: ["$u'v + uv'$", "$u'v'$", "$u'v - uv'$", "$uv' - u'v$"],
              correctAnswer: 0,
              explanation: "Differentiate each factor in turn and add: $(uv)' = u'v + uv'$. The middle option is the (wrong) naive rule; the last two have the wrong sign.",
            },
            {
              question: 'For $y = x^4\\,\\sin x$, the Product Rule gives which two terms (before simplifying)?',
              options: ['$4x^3\\sin x + x^4\\cos x$', '$4x^3\\cos x$', '$4x^3\\sin x \\cdot x^4\\cos x$', '$4x^3\\cos x + x^4\\sin x$'],
              correctAnswer: 0,
              explanation: "With $u=x^4$ ($u'=4x^3$) and $v=\\sin x$ ($v'=\\cos x$): $u'v + uv' = 4x^3\\sin x + x^4\\cos x$. Don't swap which factor each derivative attaches to.",
            },
          ],
        },
      },
      {
        id: 'prod2-template-bridge',
        type: 'text' as const,
        content: `## A Fill-in-the-Blanks Template

For any product, write this template first, then fill the four slots:

$$\\big(\\,\\square\\,\\big)\\big(\\,\\text{second}\\,\\big) + \\big(\\,\\text{first}\\,\\big)\\big(\\,\\square\\,\\big)$$

where the two $\\square$ slots are the **derivatives**. Identifying $u$, $v$, $u'$, and $v'$ *before* you assemble anything prevents almost every mistake.

For $y = (3x+2)\\,e^x$: $u = 3x+2$, $v = e^x$, $u' = 3$, $v' = e^x$. The next check has you pick these pieces.`,
      },
      {
        id: 'prod2-pieces-dropdown',
        type: 'dropdown-select' as const,
        content: `**Identify the Four Pieces** 🔽

You are differentiating $y = (3x+2)\\,e^x$ with the Product Rule. Choose each piece.`,
        exercise: {
          dropdowns: [
            { label: '$u = $', options: ['$3x+2$', '$e^x$', '$3$', '$3xe^x$'] },
            { label: "$u' = $", options: ['$3$', '$3x$', '$3x+2$', '$1$'] },
            { label: '$v = $', options: ['$e^x$', '$3x+2$', '$xe^x$', '$3$'] },
            { label: "$v' = $", options: ['$e^x$', '$xe^{x-1}$', '$1$', '$3e^x$'] },
          ],
          correctAnswers: ['$3x+2$', '$3$', '$e^x$', '$e^x$'],
          hint1: 'Pick either factor as $u$; here $u = 3x+2$ and the other factor is $v = e^x$.',
          hint2: "$u' = \\frac{d}{dx}(3x+2) = 3$.",
          hint3: "$v' = \\frac{d}{dx}e^x = e^x$ — the exponential is its own derivative. Then $y' = u'v+uv' = 3e^x + (3x+2)e^x$.",
          explanation: "$u=3x+2$, $u'=3$, $v=e^x$, $v'=e^x$. The Product Rule gives $y' = 3e^x + (3x+2)e^x = (3x+5)e^x$.",
        },
      },
      {
        id: 'prod2-assemble-bridge',
        type: 'text' as const,
        content: `## From Pieces to Answer

Once the four pieces are in hand, assembling is mechanical — substitute into $u'v + uv'$:

$$y = (3x+2)e^x \\;\\Rightarrow\\; y' = \\underbrace{3}_{u'}\\,\\underbrace{e^x}_{v} + \\underbrace{(3x+2)}_{u}\\,\\underbrace{e^x}_{v'} = 3e^x + (3x+2)e^x$$

Notice the answer is a **sum of two terms**, and each term primes exactly one factor. Keep that count of *two terms* in mind on the next drill.`,
      },
      {
        id: 'prod2-drill-input',
        type: 'input-boxes' as const,
        content: `**Apply the Rule** 🧮

For $y = x^3\\,\\sin x$, the derivative is $u'v + uv' = a\\,x^2\\sin x + x^3\\cos x$.

**1)** With $u = x^3$, we have $u' = a\\,x^2$. Enter $a$.
**2)** With $v = \\sin x$, we have $v' = \\cos x$. What is the coefficient in front of $\\cos x$?
**3)** So $y' = 3x^2\\sin x + x^3\\cos x$. How many separate terms does this answer have?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '1', '2'],
          hint1: '$\\frac{d}{dx}x^3 = 3x^2$, so $a = 3$.',
          hint2: '$\\frac{d}{dx}\\sin x = \\cos x = 1\\cdot\\cos x$, so the coefficient is $1$.',
          hint3: 'The Product Rule always produces a **sum of two terms**: $u\'v$ and $uv\'$. So the answer has $2$ terms.',
          explanation: '$u\'=3x^2$ (so $a=3$), $v\'=\\cos x$ (coefficient $1$), and the result $3x^2\\sin x + x^3\\cos x$ has exactly $2$ terms.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'product-rule',
    sections: [
      {
        id: 'prod3-intro',
        type: 'text' as const,
        content: `# ✖️ The Product Rule

**Part 3 of 7 — Worked Examples with Trig, Exponential & Log Factors**

---

> 🔑 **Same rule, richer factors:** The Product Rule never changes. You just need the standard derivatives of each factor: $\\frac{d}{dx}\\sin x = \\cos x$, $\\frac{d}{dx}e^x = e^x$, $\\frac{d}{dx}\\ln x = \\frac1x$, and so on.`,
      },
      {
        id: 'prod3-toolkit',
        type: 'text' as const,
        content: `## The Derivative Toolkit

You'll plug these into $u'v + uv'$ constantly:

| $f(x)$ | $f'(x)$ |
|--------|---------|
| $x^n$ | $n x^{n-1}$ |
| $\\sin x$ | $\\cos x$ |
| $\\cos x$ | $-\\sin x$ |
| $e^x$ | $e^x$ |
| $\\ln x$ | $\\dfrac{1}{x}$ |

### Worked Example: $y = x^2\\,\\sin x$

$u = x^2 \\Rightarrow u' = 2x$; $\\;v = \\sin x \\Rightarrow v' = \\cos x$.

$$\\frac{dy}{dx} = u'v + uv' = 2x\\sin x + x^2\\cos x$$

> 💡 **Leave it as a sum.** Unlike the power rule, a product's derivative usually *doesn't* collapse into a single term — and that's fine.`,
      },
      {
        id: 'prod3-cos-worked',
        type: 'text' as const,
        content: `## Watch the Sign: $y = x\\,\\cos x$

$u = x \\Rightarrow u' = 1$; $\\;v = \\cos x \\Rightarrow v' = -\\sin x$.

$$\\frac{dy}{dx} = (1)(\\cos x) + (x)(-\\sin x) = \\cos x - x\\sin x$$

The minus sign comes from $\\dfrac{d}{dx}\\cos x = -\\sin x$, **not** from the Product Rule (which always *adds* its two terms).

### Exponential factor: $y = x^3 e^x$

$u = x^3 \\Rightarrow u' = 3x^2$; $\\;v = e^x \\Rightarrow v' = e^x$.

$$\\frac{dy}{dx} = 3x^2 e^x + x^3 e^x$$

> ⚠️ The Product Rule's "$+$" is fixed. Any minus sign in your answer must come from a *factor's* derivative (like $\\cos x \\to -\\sin x$), never from the rule itself.`,
      },
      {
        id: 'prod3-worked-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Differentiate $y = x^2\\,e^x$.',
              options: ['$2x e^x + x^2 e^x$', '$2x e^x$', '$2x \\cdot e^x$', '$x^2 e^x$'],
              correctAnswer: 0,
              explanation: "$u=x^2$ ($u'=2x$), $v=e^x$ ($v'=e^x$): $u'v+uv' = 2xe^x + x^2e^x$.",
            },
            {
              question: 'Differentiate $y = x\\,\\sin x$.',
              options: ['$\\sin x + x\\cos x$', '$\\cos x$', '$\\sin x - x\\cos x$', '$x\\cos x$'],
              correctAnswer: 0,
              explanation: "$u=x$ ($u'=1$), $v=\\sin x$ ($v'=\\cos x$): $(1)(\\sin x)+(x)(\\cos x) = \\sin x + x\\cos x$.",
            },
            {
              question: 'Differentiate $y = x^4\\,\\cos x$.',
              options: ['$4x^3\\cos x - x^4\\sin x$', '$4x^3\\cos x + x^4\\sin x$', '$-4x^3\\sin x$', '$4x^3\\sin x$'],
              correctAnswer: 0,
              explanation: "$u=x^4$ ($u'=4x^3$), $v=\\cos x$ ($v'=-\\sin x$): $4x^3\\cos x + x^4(-\\sin x) = 4x^3\\cos x - x^4\\sin x$.",
            },
          ],
        },
      },
      {
        id: 'prod3-log-bridge',
        type: 'text' as const,
        content: `## A Logarithm Factor: $y = x^2\\ln x$

The factor $\\ln x$ has derivative $\\dfrac{1}{x}$, which often **simplifies beautifully** against a power factor.

$u = x^2 \\Rightarrow u' = 2x$; $\\;v = \\ln x \\Rightarrow v' = \\dfrac{1}{x}$.

$$\\frac{dy}{dx} = 2x\\ln x + x^2\\cdot\\frac{1}{x} = 2x\\ln x + x$$

The second term $x^2\\cdot\\frac1x$ collapses to a clean $x$. Watch for that kind of cancellation in the next drill.`,
      },
      {
        id: 'prod3-input',
        type: 'input-boxes' as const,
        content: `**Product Rule Drill** 🧮

Differentiate each, then enter the requested number.

**1)** $y = x^5 e^x = u'v + uv'$. Write $u'v = a\\,x^4 e^x$. What is $a$?
**2)** $y = x^3\\ln x$. After simplifying $x^3\\cdot\\frac1x$, the second term is $x^b$. What is $b$?
**3)** $y = x^2\\cos x$. The second term is $-x^2\\sin x$; what is the coefficient of $x\\cos x$ in the **first** term?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '2', '2'],
          hint1: '$u=x^5 \\Rightarrow u\'=5x^4$, so $u\'v = 5x^4 e^x$ and $a=5$.',
          hint2: '$x^3\\cdot\\frac{1}{x} = x^{3-1} = x^2$, so $b=2$. (Full answer: $3x^2\\ln x + x^2$.)',
          hint3: '$u=x^2 \\Rightarrow u\'=2x$, so the first term $u\'v = 2x\\cos x$. The coefficient of $x\\cos x$ is $2$.',
          explanation: '1) $a=5$ from $\\frac{d}{dx}x^5=5x^4$.  2) $b=2$ since $x^3\\cdot\\frac1x = x^2$.  3) coefficient $2$ from $\\frac{d}{dx}x^2 = 2x$.',
        },
      },
      {
        id: 'prod3-match-bridge',
        type: 'text' as const,
        content: `## Reading a Product-Rule Answer Whole

So far you've built answers piece by piece. Now practice recognizing a *fully assembled* answer at a glance. For each product, the correct derivative is the **sum** $u'v + uv'$ — check that each term primes exactly one factor and that any minus sign traces back to $\\frac{d}{dx}\\cos x = -\\sin x$.

Match each product with its derivative in the next check.`,
      },
      {
        id: 'prod3-match-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Derivative** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$\\frac{d}{dx}\\big(x^3\\sin x\\big) =$', options: ['$3x^2\\sin x + x^3\\cos x$', '$3x^2\\cos x$', '$3x^2\\sin x - x^3\\cos x$', '$x^3\\cos x$'] },
            { label: '$\\frac{d}{dx}\\big(x\\,e^x\\big) =$', options: ['$e^x + x e^x$', '$x e^x$', '$e^x$', '$1 + e^x$'] },
            { label: '$\\frac{d}{dx}\\big(x\\,\\cos x\\big) =$', options: ['$\\cos x - x\\sin x$', '$\\cos x + x\\sin x$', '$-\\sin x$', '$\\cos x - \\sin x$'] },
          ],
          correctAnswers: ['$3x^2\\sin x + x^3\\cos x$', '$e^x + x e^x$', '$\\cos x - x\\sin x$'],
          hint1: '$u=x^3$ ($u\'=3x^2$), $v=\\sin x$ ($v\'=\\cos x$): $3x^2\\sin x + x^3\\cos x$.',
          hint2: '$u=x$ ($u\'=1$), $v=e^x$ ($v\'=e^x$): $1\\cdot e^x + x\\cdot e^x = e^x + x e^x$.',
          hint3: '$u=x$ ($u\'=1$), $v=\\cos x$ ($v\'=-\\sin x$): $\\cos x - x\\sin x$. The minus is from $\\frac{d}{dx}\\cos x$.',
          explanation: 'Each derivative is $u\'v + uv\'$: $3x^2\\sin x + x^3\\cos x$, $e^x + x e^x$, and $\\cos x - x\\sin x$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'product-rule',
    sections: [
      {
        id: 'prod4-intro',
        type: 'text' as const,
        content: `# ✖️ The Product Rule

**Part 4 of 7 — Simplify, Factor & Evaluate**

---

> 🔑 **The exam wants a clean answer.** After applying $u'v + uv'$, you'll often **factor** the result and **plug in a point** to get a slope. This part builds those finishing skills.`,
      },
      {
        id: 'prod4-factor',
        type: 'text' as const,
        content: `## Factoring the Result

When both terms share a common factor, pull it out. Examiners (and the next step of a problem) love factored answers.

### Worked Example: $y = x^2(x+1)^3$

Treat $u = x^2$ and $v = (x+1)^3$, so $u' = 2x$ and $v' = 3(x+1)^2$ (Power Rule on $(x+1)^3$; the inner derivative is $1$):

$$\\frac{dy}{dx} = 2x(x+1)^3 + x^2\\cdot 3(x+1)^2 = 2x(x+1)^3 + 3x^2(x+1)^2$$

Factor out the common $x(x+1)^2$:

$$= x(x+1)^2\\big[\\,2(x+1) + 3x\\,\\big] = x(x+1)^2(5x+2)$$

> 💡 **Factor out the lowest power** of each repeated piece — here $x^1$ and $(x+1)^2$ — then simplify what's left in the brackets.`,
      },
      {
        id: 'prod4-factor-dropdown',
        type: 'dropdown-select' as const,
        content: `**Factor the Derivative** 🔽

You differentiated $y = x^3(x+2)^2$ and got $y' = 3x^2(x+2)^2 + x^3\\cdot 2(x+2)$. Now factor it.`,
        exercise: {
          dropdowns: [
            { label: 'Greatest common factor of the two terms:', options: ['$x^2(x+2)$', '$x^3(x+2)^2$', '$x(x+2)$', '$x^2(x+2)^2$'] },
            { label: 'Bracket after factoring $\\;[\\,\\square\\,]$:', options: ['$3(x+2) + 2x$', '$3(x+2) + 2x^2$', '$3x + 2(x+2)$', '$(x+2)+2x$'] },
            { label: 'Fully simplified bracket:', options: ['$5x+6$', '$5x+2$', '$3x+6$', '$5x+4$'] },
          ],
          correctAnswers: ['$x^2(x+2)$', '$3(x+2) + 2x$', '$5x+6$'],
          hint1: 'Lowest power of $x$ is $x^2$; lowest power of $(x+2)$ is $(x+2)^1$. GCF $= x^2(x+2)$.',
          hint2: 'First term $3x^2(x+2)^2 = x^2(x+2)\\cdot 3(x+2)$; second term $2x^3(x+2) = x^2(x+2)\\cdot 2x$. Bracket: $3(x+2)+2x$.',
          hint3: '$3(x+2)+2x = 3x+6+2x = 5x+6$. So $y\' = x^2(x+2)(5x+6)$.',
          explanation: 'Factoring out $x^2(x+2)$ leaves $3(x+2)+2x = 5x+6$, giving the clean form $y\' = x^2(x+2)(5x+6)$.',
        },
      },
      {
        id: 'prod4-evaluate',
        type: 'text' as const,
        content: `## Evaluating at a Point (Finding a Slope)

A derivative gives the **slope** of the tangent line. To find the slope at $x = a$, differentiate first, *then* substitute.

### Worked Example: slope of $y = x^2 e^x$ at $x = 0$

We found $y' = 2x e^x + x^2 e^x$. Substitute $x = 0$ (recall $e^0 = 1$):

$$y'(0) = 2(0)e^0 + (0)^2 e^0 = 0 + 0 = 0$$

So the tangent line at $x=0$ is **horizontal**.

### Worked Example: slope of $y = x\\sin x$ at $x = \\pi$

$y' = \\sin x + x\\cos x$. At $x = \\pi$ (where $\\sin\\pi = 0$, $\\cos\\pi = -1$):

$$y'(\\pi) = \\sin\\pi + \\pi\\cos\\pi = 0 + \\pi(-1) = -\\pi$$

> ⚠️ **Differentiate, then plug in — never the other way around.** Substituting first destroys the function you need to differentiate.`,
      },
      {
        id: 'prod4-eval-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $y = x^3 e^x$, what is $y\'(0)$? (Use $y\' = 3x^2 e^x + x^3 e^x$ and $e^0=1$.)',
              options: ['$0$', '$1$', '$3$', '$e$'],
              correctAnswer: 0,
              explanation: "$y'(0) = 3(0)^2 e^0 + (0)^3 e^0 = 0 + 0 = 0$. Both terms have a factor of $x$, so they vanish at $x=0$.",
            },
            {
              question: 'The correct order of operations for finding a tangent slope is:',
              options: ['Differentiate the product, then substitute the $x$-value', 'Substitute the $x$-value, then differentiate', 'Multiply the factors, then substitute without differentiating', 'Differentiate each factor and multiply'],
              correctAnswer: 0,
              explanation: 'Always differentiate first (using the Product Rule) to get $y\'(x)$, then plug in the specific $x$-value to get the numerical slope.',
            },
          ],
        },
      },
      {
        id: 'prod4-eval-bridge',
        type: 'text' as const,
        content: `## A Clean Evaluation: $y = x^2\\ln x$ at $x = 1$

We found $y' = 2x\\ln x + x$. At $x = 1$, the magic of $\\ln 1 = 0$ kicks in:

$$y'(1) = 2(1)\\ln 1 + 1 = 2(1)(0) + 1 = 0 + 1 = 1$$

The first term dies because $\\ln 1 = 0$. Useful values to memorize for these problems: $e^0 = 1$, $\\ln 1 = 0$, $\\sin 0 = 0$, $\\cos 0 = 1$. Use them in the next drill.`,
      },
      {
        id: 'prod4-input',
        type: 'input-boxes' as const,
        content: `**Evaluate the Slope** 🧮

**1)** $y = x^2\\sin x$, so $y' = 2x\\sin x + x^2\\cos x$. Find $y'(0)$.
**2)** $y = x\\,e^x$, so $y' = e^x + x e^x$. Find $y'(0)$. *(Recall $e^0 = 1$.)*
**3)** $y = x\\cos x$, so $y' = \\cos x - x\\sin x$. Find $y'(0)$. *(Recall $\\cos 0 = 1$, $\\sin 0 = 0$.)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '1', '1'],
          hint1: '$y\'(0) = 2(0)\\sin 0 + (0)^2\\cos 0 = 0 + 0 = 0$.',
          hint2: '$y\'(0) = e^0 + (0)e^0 = 1 + 0 = 1$.',
          hint3: '$y\'(0) = \\cos 0 - (0)\\sin 0 = 1 - 0 = 1$.',
          explanation: '1) $0$ (both terms carry a factor of $x$ or $\\sin 0$).  2) $1$ from $e^0$.  3) $1$ from $\\cos 0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'product-rule',
    sections: [
      {
        id: 'prod5-intro',
        type: 'text' as const,
        content: `# ✖️ The Product Rule

**Part 5 of 7 — Product Rule Meets the Chain Rule**

---

> 🔑 **Rules combine.** Real problems mix rules: a product where one factor is *itself* a composite. Use the Product Rule for the overall structure, and the Chain Rule **inside** to differentiate the composite factor.`,
      },
      {
        id: 'prod5-combine',
        type: 'text' as const,
        content: `## When a Factor Needs the Chain Rule

The Product Rule decides the **overall shape** ($u'v + uv'$). If a factor like $\\sin(2x)$ or $(3x+1)^4$ is a composite, you compute *its* derivative with the Chain Rule, then drop it into the template.

### Worked Example: $y = x^2\\sin(3x)$

- $u = x^2 \\Rightarrow u' = 2x$
- $v = \\sin(3x) \\Rightarrow v' = \\cos(3x)\\cdot 3 = 3\\cos(3x)$ ← **Chain Rule** here

$$\\frac{dy}{dx} = u'v + uv' = 2x\\sin(3x) + x^2\\cdot 3\\cos(3x) = 2x\\sin(3x) + 3x^2\\cos(3x)$$

> ⚠️ The classic mistake is writing $v' = \\cos(3x)$ and **forgetting the $\\times 3$**. The inner derivative of $3x$ is $3$ — don't drop it.`,
      },
      {
        id: 'prod5-power-worked',
        type: 'text' as const,
        content: `## A Power-Composite Factor: $y = x\\,(2x+1)^4$

- $u = x \\Rightarrow u' = 1$
- $v = (2x+1)^4 \\Rightarrow v' = 4(2x+1)^3\\cdot 2 = 8(2x+1)^3$ ← **Chain Rule**

$$\\frac{dy}{dx} = (1)(2x+1)^4 + x\\cdot 8(2x+1)^3 = (2x+1)^4 + 8x(2x+1)^3$$

Factor out $(2x+1)^3$:

$$= (2x+1)^3\\big[(2x+1) + 8x\\big] = (2x+1)^3(10x+1)$$

> 💡 Compute the composite factor's derivative **off to the side** first, simplify it, and only then substitute into $u'v + uv'$. Keeping the steps separate prevents dropped factors.`,
      },
      {
        id: 'prod5-combine-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $y = x^2\\cos(5x)$, which factor requires the Chain Rule?',
              options: ['$\\cos(5x)$', '$x^2$', 'Neither factor', 'Both must be multiplied'],
              correctAnswer: 0,
              explanation: '$\\cos(5x)$ is a composite (cosine of $5x$), so its derivative $-5\\sin(5x)$ needs the Chain Rule. $x^2$ uses only the Power Rule.',
            },
            {
              question: 'What is $v\'$ for the factor $v = \\sin(3x)$?',
              options: ['$3\\cos(3x)$', '$\\cos(3x)$', '$-3\\cos(3x)$', '$3\\cos(x)$'],
              correctAnswer: 0,
              explanation: 'Chain Rule: $\\frac{d}{dx}\\sin(3x) = \\cos(3x)\\cdot\\frac{d}{dx}(3x) = \\cos(3x)\\cdot 3 = 3\\cos(3x)$.',
            },
          ],
        },
      },
      {
        id: 'prod5-assemble-bridge',
        type: 'text' as const,
        content: `## Assembling the Two Rules

A reliable routine for "product with a composite factor":

1. Name $u$ and $v$. Decide which factor (if either) is a composite.
2. Compute $u'$ and $v'$ **separately**, using the Chain Rule wherever a factor is composite.
3. Substitute into $u'v + uv'$, then factor/simplify.

For $y = x^3\\,e^{2x}$: $u = x^3 \\Rightarrow u' = 3x^2$, and $v = e^{2x} \\Rightarrow v' = 2e^{2x}$ (Chain Rule: inner derivative of $2x$ is $2$). The next check walks through it.`,
      },
      {
        id: 'prod5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Product + Chain Together** 🔽

You are differentiating $y = x^3\\,e^{2x}$ with $u = x^3$ and $v = e^{2x}$.`,
        exercise: {
          dropdowns: [
            { label: "$u' = $", options: ['$3x^2$', '$x^2$', '$3x^3$', '$3x$'] },
            { label: "$v' = $ (Chain Rule)", options: ['$2e^{2x}$', '$e^{2x}$', '$2e^{x}$', '$e^{2x}\\cdot x$'] },
            { label: "$y' = u'v + uv' = $", options: ['$3x^2 e^{2x} + 2x^3 e^{2x}$', '$3x^2 e^{2x} + x^3 e^{2x}$', '$3x^2 e^{2x} \\cdot 2x^3 e^{2x}$', '$6x^2 e^{2x}$'] },
          ],
          correctAnswers: ['$3x^2$', '$2e^{2x}$', '$3x^2 e^{2x} + 2x^3 e^{2x}$'],
          hint1: '$\\frac{d}{dx}x^3 = 3x^2$.',
          hint2: 'Chain Rule on $e^{2x}$: $e^{2x}\\cdot\\frac{d}{dx}(2x) = e^{2x}\\cdot 2 = 2e^{2x}$.',
          hint3: 'Substitute: $u\'v + uv\' = 3x^2 e^{2x} + x^3\\cdot 2e^{2x} = 3x^2 e^{2x} + 2x^3 e^{2x}$.',
          explanation: "$u'=3x^2$, $v'=2e^{2x}$, so $y' = 3x^2 e^{2x} + 2x^3 e^{2x} = x^2 e^{2x}(3 + 2x)$.",
        },
      },
      {
        id: 'prod5-isolate-bridge',
        type: 'text' as const,
        content: `## Isolate the Chain Factor

In every "product + chain" problem, the part that trips people up is the **inner-derivative factor** hiding inside $v'$. So practice extracting just that factor:

- $v = \\sin(4x) \\Rightarrow v' = 4\\cos(4x)$ — the chain factor is $4$.
- $v = e^{5x} \\Rightarrow v' = 5e^{5x}$ — the chain factor is $5$.
- $v = (3x+1)^2 \\Rightarrow v' = 2(3x+1)\\cdot 3 = 6(3x+1)$ — the chain factor is $6$.

In the next drill, report exactly that coefficient for each composite factor.`,
      },
      {
        id: 'prod5-input',
        type: 'input-boxes' as const,
        content: `**Product + Chain Drill** 🧮

For each, compute $v'$ with the Chain Rule, then read off the requested coefficient.

**1)** $y = x\\,\\sin(4x)$. The second term is $x\\cdot v'$ where $v' = ?\\cos(4x)$. Enter the number.
**2)** $y = x^2\\,e^{5x}$. The second term is $x^2\\cdot v'$ where $v' = ?\\,e^{5x}$. Enter the number.
**3)** $y = x\\,(3x+1)^2$. Here $v' = ?\\,(3x+1)$. Enter the number. *(Chain Rule: $2(3x+1)\\cdot 3$.)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '5', '6'],
          hint1: '$\\frac{d}{dx}\\sin(4x) = \\cos(4x)\\cdot 4 = 4\\cos(4x)$.',
          hint2: '$\\frac{d}{dx}e^{5x} = e^{5x}\\cdot 5 = 5e^{5x}$.',
          hint3: '$\\frac{d}{dx}(3x+1)^2 = 2(3x+1)\\cdot 3 = 6(3x+1)$.',
          explanation: 'Each number is the inner-derivative factor from the Chain Rule: $4$, $5$, and $6$ (since $2\\cdot 3 = 6$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'product-rule',
    sections: [
      {
        id: 'prod6-intro',
        type: 'text' as const,
        content: `# ✖️ The Product Rule

**Part 6 of 7 — Value Tables & Three-Factor Products**

---

> 🔑 **Two AP favorites:** using a **table of values** to evaluate $(fg)'$ at a point, and extending the rule to **three factors** $f\\cdot g\\cdot h$.`,
      },
      {
        id: 'prod6-table',
        type: 'text' as const,
        content: `## Product Rule with a Table of Values

A classic AP question gives values of $f$, $g$, and their derivatives, then asks for $(fg)'$ at a point — no formulas, just plug into the rule.

| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |
|-----|--------|---------|--------|---------|
| $2$ | $3$ | $5$ | $-1$ | $4$ |

**Find $h'(2)$ where $h(x) = f(x)\\,g(x)$.**

The Product Rule says $h'(x) = f'(x)\\,g(x) + f(x)\\,g'(x)$. At $x = 2$:

$$h'(2) = f'(2)\\,g(2) + f(2)\\,g'(2) = (5)(-1) + (3)(4) = -5 + 12 = 7$$

> ⚠️ **Match the labels carefully.** $f'$ pairs with $g$ (un-primed), and $f$ (un-primed) pairs with $g'$. Mixing them up is the #1 table error.`,
      },
      {
        id: 'prod6-table-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Use this table:

| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |
|-----|--------|---------|--------|---------|
| $1$ | $4$ | $2$ | $6$ | $-3$ |`,
        exercise: {
          questions: [
            {
              question: 'Find $h\'(1)$ where $h(x) = f(x)\\,g(x)$.',
              options: ['$f\'(1)g(1) + f(1)g\'(1) = (2)(6) + (4)(-3) = 0$', '$f\'(1)g\'(1) = (2)(-3) = -6$', '$f(1)g(1) = (4)(6) = 24$', '$f\'(1)g(1) - f(1)g\'(1) = 12 + 12 = 24$'],
              correctAnswer: 0,
              explanation: "$h'(1) = f'(1)g(1) + f(1)g'(1) = (2)(6) + (4)(-3) = 12 - 12 = 0$. The Product Rule adds the two correctly-paired terms.",
            },
            {
              question: 'In $h\'(x) = f\'(x)g(x) + f(x)g\'(x)$, which value pairs with $f\'$?',
              options: ['$g$ (un-primed)', '$g\'$', '$f$ (un-primed)', '$f\'$ again'],
              correctAnswer: 0,
              explanation: "Each term differentiates one factor and keeps the other un-primed: $f'$ multiplies $g$, and $f$ multiplies $g'$.",
            },
          ],
        },
      },
      {
        id: 'prod6-triple',
        type: 'text' as const,
        content: `## Three Factors: $f\\cdot g\\cdot h$

The pattern extends naturally. Differentiate **one factor at a time**, leaving the other two alone, and add all three terms:

$$\\frac{d}{dx}\\big[f\\,g\\,h\\big] = f'gh + fg'h + fgh'$$

Three factors → **three terms**, each with exactly one prime.

### Worked Example: $y = x\\,e^x\\sin x$

With $f = x$, $g = e^x$, $h = \\sin x$ (so $f' = 1$, $g' = e^x$, $h' = \\cos x$):

$$\\frac{dy}{dx} = (1)e^x\\sin x + x\\,e^x\\sin x + x\\,e^x\\cos x$$

> 💡 **Pattern to memorize:** for $n$ factors you get $n$ terms, and in each term exactly one factor is differentiated. Two factors → 2 terms; three factors → 3 terms.`,
      },
      {
        id: 'prod6-triple-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Three-Factor Derivative** 🔽

You are differentiating $y = x^2\\,e^x\\cos x$ with $f = x^2$, $g = e^x$, $h = \\cos x$. Choose each term.`,
        exercise: {
          dropdowns: [
            { label: "First term $f'gh$:", options: ['$2x\\,e^x\\cos x$', '$x^2 e^x\\cos x$', '$2x\\,e^x\\sin x$', '$2\\,e^x\\cos x$'] },
            { label: "Second term $fg'h$:", options: ['$x^2 e^x\\cos x$', '$2x\\,e^x\\cos x$', '$x^2 e^x\\sin x$', '$x^2\\cos x$'] },
            { label: "Third term $fgh'$:", options: ['$-x^2 e^x\\sin x$', '$x^2 e^x\\sin x$', '$-x^2 e^x\\cos x$', '$x^2 e^x\\cos x$'] },
          ],
          correctAnswers: ['$2x\\,e^x\\cos x$', '$x^2 e^x\\cos x$', '$-x^2 e^x\\sin x$'],
          hint1: 'Differentiate only $f=x^2$ ($f\'=2x$), keep $g,h$: $2x\\,e^x\\cos x$.',
          hint2: 'Differentiate only $g=e^x$ ($g\'=e^x$), keep $f,h$: $x^2 e^x\\cos x$.',
          hint3: 'Differentiate only $h=\\cos x$ ($h\'=-\\sin x$), keep $f,g$: $x^2 e^x(-\\sin x) = -x^2 e^x\\sin x$.',
          explanation: "$y' = 2x\\,e^x\\cos x + x^2 e^x\\cos x - x^2 e^x\\sin x$. Each term primes exactly one factor; the minus comes from $\\frac{d}{dx}\\cos x = -\\sin x$.",
        },
      },
      {
        id: 'prod6-recap-bridge',
        type: 'text' as const,
        content: `## Putting Both Skills to Work

You now have two of the AP's favorite product-rule tasks in hand:

- **Tables:** $h'(a) = f'(a)\\,g(a) + f(a)\\,g'(a)$ — pair $f'$ with the *un-primed* $g$, and the *un-primed* $f$ with $g'$.
- **Three factors:** $(fgh)' = f'gh + fg'h + fgh'$ — one term per factor, each priming exactly one of them.

The final drill of this part mixes a table evaluation with a "count the terms" check. Watch the signs carefully on the table values.`,
      },
      {
        id: 'prod6-input',
        type: 'input-boxes' as const,
        content: `**Tables & Triples** 🧮

**1)** Table: $f'(2)=5$, $g(2)=-1$, $f(2)=3$, $g'(2)=4$. For $h=fg$, find $h'(2) = f'(2)g(2)+f(2)g'(2)$.
**2)** Table: $f'(1)=2$, $g(1)=6$, $f(1)=4$, $g'(1)=-3$. For $h=fg$, find $h'(1)$.
**3)** $y = x\\,e^x\\sin x$ has how many terms in its derivative? *(One per factor.)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '0', '3'],
          hint1: '$h\'(2) = (5)(-1) + (3)(4) = -5 + 12 = 7$.',
          hint2: '$h\'(1) = (2)(6) + (4)(-3) = 12 - 12 = 0$.',
          hint3: 'Three factors $\\Rightarrow$ three terms: $f\'gh + fg\'h + fgh\'$.',
          explanation: '1) $-5+12 = 7$.  2) $12-12 = 0$.  3) $3$ terms, one for each factor differentiated in turn.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'product-rule',
    sections: [
      {
        id: 'prod7-intro',
        type: 'text' as const,
        content: `# ✖️ The Product Rule

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) recognize a true product, (2) apply $u'v + uv'$, (3) handle trig/exp/log factors, (4) factor and evaluate the result, (5) combine the Product Rule with the Chain Rule, and (6) use value tables and three-factor products. Let's put it all together.`,
      },
      {
        id: 'prod7-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Situation | Rule |
|-----------|------|
| Two factors | $(uv)' = u'v + uv'$ |
| Three factors | $(fgh)' = f'gh + fg'h + fgh'$ |
| Composite factor | use the **Chain Rule** to find that factor's derivative |
| Value table at $x=a$ | $h'(a) = f'(a)g(a) + f(a)g'(a)$ |
| Slope at a point | differentiate first, **then** substitute |

> ⚠️ **Top three pitfalls:** (1) multiplying the derivatives instead of using $u'v+uv'$; (2) dropping the inner-derivative factor when a factor is composite; (3) pairing $f'$ with $g'$ in a table instead of $f'$ with $g$ and $f$ with $g'$.`,
      },
      {
        id: 'prod7-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Differentiate $y = x^4\\sin x$.',
              options: ['$4x^3\\sin x + x^4\\cos x$', '$4x^3\\cos x$', '$4x^3\\sin x \\cdot x^4\\cos x$', '$4x^3\\sin x - x^4\\cos x$'],
              correctAnswer: 0,
              explanation: "$u=x^4$ ($u'=4x^3$), $v=\\sin x$ ($v'=\\cos x$): $4x^3\\sin x + x^4\\cos x$.",
            },
            {
              question: 'Differentiate $y = x\\,e^{2x}$ (Chain Rule on $e^{2x}$).',
              options: ['$e^{2x} + 2x e^{2x}$', '$e^{2x} + x e^{2x}$', '$2x e^{2x}$', '$2e^{2x}$'],
              correctAnswer: 0,
              explanation: "$u=x$ ($u'=1$), $v=e^{2x}$ ($v'=2e^{2x}$ by the Chain Rule): $1\\cdot e^{2x} + x\\cdot 2e^{2x} = e^{2x} + 2x e^{2x}$.",
            },
          ],
        },
      },
      {
        id: 'prod7-strategy-bridge',
        type: 'text' as const,
        content: `## A Three-Question Self-Check

Before you finalize any product-rule answer, ask:

1. **Did I add (not multiply) the two terms?** A product's derivative is a **sum**.
2. **Did each term differentiate exactly one factor?** $u'v$ and $uv'$ — never $u'v'$.
3. **If a factor was composite, did I include its inner derivative?** Don't drop the Chain factor.

These three checks catch nearly every Product Rule error. Use them on the drill below.`,
      },
      {
        id: 'prod7-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

**1)** $y = x^2 e^x$, so $y' = 2x e^x + x^2 e^x$. Find $y'(0)$. *(Recall $e^0 = 1$.)*
**2)** Table: $f'(3)=2$, $g(3)=5$, $f(3)=-1$, $g'(3)=4$. For $h=fg$, find $h'(3)$.
**3)** $y = x\\,(2x+1)^3$. The second term uses $v' = ?\\,(2x+1)^2$ (Chain Rule: $3(2x+1)^2\\cdot 2$). Enter the number.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '6', '6'],
          hint1: '$y\'(0) = 2(0)e^0 + (0)^2 e^0 = 0 + 0 = 0$.',
          hint2: '$h\'(3) = f\'(3)g(3) + f(3)g\'(3) = (2)(5) + (-1)(4) = 10 - 4 = 6$.',
          hint3: '$\\frac{d}{dx}(2x+1)^3 = 3(2x+1)^2\\cdot 2 = 6(2x+1)^2$, so the number is $6$.',
          explanation: '1) $0$ (both terms carry a factor of $x$).  2) $10 - 4 = 6$.  3) $3\\cdot 2 = 6$ from the Chain Rule.',
        },
      },
      {
        id: 'prod7-spot-bridge',
        type: 'text' as const,
        content: `## The Sum People Forget Is a Sum

Every two-factor Product Rule answer is built from **two** terms added together — one priming the first factor, one priming the second. Train your eye to expect that "$+$":

- $x^2\\sin x \\to 2x\\sin x \\,\\textbf{+}\\, x^2\\cos x$
- $x e^x \\to e^x \\,\\textbf{+}\\, x e^x$
- $x\\ln x \\to \\ln x \\,\\textbf{+}\\, 1$

In the next check, pick the correct first term ($u'v$) for each product — the piece students often misassemble.`,
      },
      {
        id: 'prod7-spot-dropdown',
        type: 'dropdown-select' as const,
        content: `**Spot the First Term** 🔽

For each product $y = u\\,v$, identify the **first** Product-Rule term, $u'v$.`,
        exercise: {
          dropdowns: [
            { label: '$y = x^3\\cos x$, first term $u\'v=$', options: ['$3x^2\\cos x$', '$x^3\\cos x$', '$-3x^2\\sin x$', '$3x^2\\sin x$'] },
            { label: '$y = x\\,\\ln x$, first term $u\'v=$', options: ['$\\ln x$', '$\\dfrac{1}{x}$', '$x\\ln x$', '$1$'] },
            { label: '$y = x^2 e^x$, first term $u\'v=$', options: ['$2x\\,e^x$', '$x^2 e^x$', '$2x$', '$2e^x$'] },
          ],
          correctAnswers: ['$3x^2\\cos x$', '$\\ln x$', '$2x\\,e^x$'],
          hint1: '$u=x^3 \\Rightarrow u\'=3x^2$; keep $v=\\cos x$. First term $3x^2\\cos x$.',
          hint2: '$u=x \\Rightarrow u\'=1$; keep $v=\\ln x$. First term $1\\cdot\\ln x = \\ln x$.',
          hint3: '$u=x^2 \\Rightarrow u\'=2x$; keep $v=e^x$. First term $2x e^x$.',
          explanation: 'The first term is always $u\'v$: differentiate the first factor, keep the second un-primed. Results: $3x^2\\cos x$, $\\ln x$, and $2x e^x$.',
        },
      },
      {
        id: 'prod7-exit-bridge',
        type: 'text' as const,
        content: `## You're Ready

You can now recognize products, apply $u'v + uv'$, manage trig/exp/log factors, factor and evaluate, fold in the Chain Rule for composite factors, and handle value tables and three-factor products — always **adding** the terms and never dropping a Chain factor.

One last set of three questions covers a basic product, a product-plus-chain, and a value table. Take your time and run the three-question self-check.`,
      },
      {
        id: 'prod7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Differentiate $y = x^2\\cos x$.',
              options: ['$2x\\cos x - x^2\\sin x$', '$2x\\cos x + x^2\\sin x$', '$-2x\\sin x$', '$2x\\cos x \\cdot x^2\\sin x$'],
              correctAnswer: 0,
              explanation: "$u=x^2$ ($u'=2x$), $v=\\cos x$ ($v'=-\\sin x$): $2x\\cos x + x^2(-\\sin x) = 2x\\cos x - x^2\\sin x$. The minus comes from $\\frac{d}{dx}\\cos x$, not the rule.",
            },
            {
              question: 'Differentiate $y = x\\,\\sin(2x)$.',
              options: ['$\\sin(2x) + 2x\\cos(2x)$', '$\\sin(2x) + x\\cos(2x)$', '$2\\cos(2x)$', '$\\sin(2x) - 2x\\cos(2x)$'],
              correctAnswer: 0,
              explanation: "$u=x$ ($u'=1$), $v=\\sin(2x)$ ($v'=2\\cos(2x)$ by the Chain Rule): $\\sin(2x) + x\\cdot 2\\cos(2x) = \\sin(2x) + 2x\\cos(2x)$.",
            },
            {
              question: 'Given a table with $f\'(0)=3$, $g(0)=2$, $f(0)=5$, $g\'(0)=-1$, find $h\'(0)$ for $h(x)=f(x)g(x)$.',
              options: ['$1$', '$6$', '$-3$', '$11$'],
              correctAnswer: 0,
              explanation: "$h'(0) = f'(0)g(0) + f(0)g'(0) = (3)(2) + (5)(-1) = 6 - 5 = 1$.",
            },
          ],
        },
      },
    ],
  },
]
