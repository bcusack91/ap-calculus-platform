import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Newton's Method (AP Calculus AB).
 * Registry key / DB Topic.slug: 'newtons-method'.
 * 7 parts, gold-standard structure: the tangent-line idea → the iteration
 * formula → running iterations by hand → square roots & solving equations →
 * convergence speed & stopping rules → when Newton's Method fails → mixed
 * practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every iteration value was computed and re-checked by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'newtons-method',
    sections: [
      {
        id: 'nm1-intro',
        type: 'text' as const,
        content: `# 🎯 Newton's Method

**Part 1 of 7 — The Tangent-Line Idea**

---

### Topics in This Part

| Section |
|---------|
| What Problem Are We Solving? |
| Following a Tangent Line to the Axis |
| Why a Tangent Is a Good Guess |

> 🔑 **Key Concept:** Newton's Method finds a **root** of $f(x) = 0$ — a place where the graph crosses the $x$-axis. Most equations can't be solved by algebra, so instead we *guess*, then use the **tangent line** to make a much better guess, and repeat.`,
      },
      {
        id: 'nm1-problem',
        type: 'text' as const,
        content: `## What Problem Are We Solving?

You can solve $x^2 - 5x + 6 = 0$ by factoring. But what about

$$x^3 - x - 1 = 0 \\qquad\\text{or}\\qquad \\cos x = x \\;?$$

There is **no algebra trick** that gives an exact answer. These equations have real solutions — we just can't write them in closed form. We need a way to *approximate* the root to as many decimals as we want.

**Newton's Method** does exactly that. Given a rough starting guess $x_0$, it produces a sequence

$$x_0,\\; x_1,\\; x_2,\\; x_3,\\; \\dots$$

that homes in on a true root, usually **extremely fast**.

> 💡 A root of $f$ is also called a **zero** of $f$ or a **solution** of $f(x) = 0$. To solve *any* equation, move everything to one side so it reads "$\\text{(stuff)} = 0$," then find a zero of that "stuff."`,
      },
      {
        id: 'nm1-rewrite-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To solve $\\cos x = x$ with Newton\'s Method, which function $f$ should you find a root of?',
              options: ['$f(x) = \\cos x - x$', '$f(x) = \\cos x + x$', '$f(x) = \\cos x \\cdot x$', '$f(x) = \\cos x$'],
              correctAnswer: 0,
              explanation: 'Move everything to one side: $\\cos x = x \\Rightarrow \\cos x - x = 0$. A root of $f(x)=\\cos x - x$ is exactly a solution of the original equation.',
            },
            {
              question: 'What does it mean for $r$ to be a root of $f$?',
              options: ['$f(r) = 0$', "$f'(r) = 0$", '$f(r) = r$', 'The graph has a maximum at $r$'],
              correctAnswer: 0,
              explanation: 'A root (zero) is an input where the output is zero: $f(r) = 0$. Graphically, the curve crosses (or touches) the $x$-axis there.',
            },
          ],
        },
      },
      {
        id: 'nm1-tangent-idea',
        type: 'text' as const,
        content: `## Following a Tangent Line to the Axis

Here is the whole idea in one picture. Suppose your current guess is $x_n$.

1. Go up to the curve, to the point $\\big(x_n,\\, f(x_n)\\big)$.
2. Draw the **tangent line** there (slope $f'(x_n)$).
3. See where that line crosses the $x$-axis. Call that crossing $x_{n+1}$.

Because a tangent line *hugs* the curve near the point of tangency, the place the **line** hits the axis is usually much closer to the real root than $x_n$ was.

> 🔑 **The move:** Replace the hard curve with its easy tangent line, solve the *line* for its $x$-intercept, and use that as your next guess. Then repeat from the new point.`,
      },
      {
        id: 'nm1-why-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In Newton\'s Method, the next guess $x_{n+1}$ is defined as:',
              options: [
                'where the tangent line at $x_n$ crosses the $x$-axis',
                'where the curve crosses the $x$-axis',
                'the midpoint between $x_n$ and the root',
                'where the tangent line crosses the $y$-axis',
              ],
              correctAnswer: 0,
              explanation: 'We replace the curve with its tangent line at $x_n$ and take that line\'s $x$-intercept as the improved guess $x_{n+1}$.',
            },
            {
              question: 'Why does a tangent line give a good next guess?',
              options: [
                'Near the point of tangency, the line closely follows the curve',
                'A line always crosses the axis at the root',
                'The tangent line is parallel to the $x$-axis',
                'Lines are easier to graph than curves',
              ],
              correctAnswer: 0,
              explanation: 'A tangent line is the best linear approximation to the curve near the point of tangency, so its $x$-intercept lands close to where the curve itself crosses.',
            },
          ],
        },
      },
      {
        id: 'nm1-need-deriv',
        type: 'dropdown-select' as const,
        content: `**What You Need to Start** 🔽

Newton's Method requires a few ingredients. Fill in the blanks.`,
        exercise: {
          dropdowns: [
            { label: 'A function written so you seek a root of', options: ['$f(x) = 0$', '$f(x) = 1$', "$f'(x) = 0$", '$f(x) = x$'] },
            { label: 'Its derivative, to get the tangent slope', options: ["$f'(x)$", '$f(x)^2$', '$\\int f$', '$2f(x)$'] },
            { label: 'A reasonable starting', options: ['guess $x_0$', 'maximum', 'asymptote', 'integral'] },
          ],
          correctAnswers: ['$f(x) = 0$', "$f'(x)$", 'guess $x_0$'],
          hint1: 'Newton\'s Method solves equations of the form $f(x) = 0$.',
          hint2: 'The tangent line\'s slope is the derivative.',
          hint3: 'Every iteration needs a place to begin — an initial guess $x_0$.',
          explanation: 'You need (1) $f$ set up as $f(x)=0$, (2) the derivative $f\'$ for the tangent slope, and (3) an initial guess $x_0$. With these three, the iteration in Part 2 takes over.',
        },
      },
      {
        id: 'nm1-wrap',
        type: 'text' as const,
        content: `## Where We're Headed

You now know the *picture*: stand on the curve, slide down the tangent line to the $x$-axis, and that landing spot is your next guess.

In **Part 2** we turn that picture into a single formula you can run with a calculator — the famous Newton's Method update rule. Everything else in this lesson is just applying and analyzing that one formula.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'newtons-method',
    sections: [
      {
        id: 'nm2-intro',
        type: 'text' as const,
        content: `# 🎯 Newton's Method

**Part 2 of 7 — The Iteration Formula**

---

> 🔑 **The Formula:** From a guess $x_n$, the next guess is
> $$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$
> This single line *is* Newton's Method. Let's see where it comes from and how to read it.`,
      },
      {
        id: 'nm2-derive',
        type: 'text' as const,
        content: `## Deriving the Formula

The tangent line at $\\big(x_n, f(x_n)\\big)$ has slope $f'(x_n)$:

$$y - f(x_n) = f'(x_n)\\,(x - x_n)$$

We want its $x$-intercept, so set $y = 0$ and solve for $x$:

$$-\\,f(x_n) = f'(x_n)\\,(x - x_n)$$

$$x - x_n = -\\frac{f(x_n)}{f'(x_n)}$$

$$\\boxed{\\;x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}\\;}$$

> 💡 **How to read it:** Start at $x_n$. The correction term $\\dfrac{f(x_n)}{f'(x_n)}$ is the *horizontal run* from $x_n$ to where the tangent meets the axis. Subtract it to slide over to the better guess.`,
      },
      {
        id: 'nm2-parts-check',
        type: 'dropdown-select' as const,
        content: `**Match the Pieces** 🔽

For $f(x) = x^2 - 7$, identify each ingredient of the formula.`,
        exercise: {
          dropdowns: [
            { label: '$f(x)$ equals', options: ['$x^2 - 7$', '$2x$', '$x^2 + 7$', '$\\sqrt{7}$'] },
            { label: "$f'(x)$ equals", options: ['$2x$', '$x^2$', '$2x - 7$', '$7$'] },
            { label: 'The update is $x_{n+1} = x_n - {}$', options: ['$\\dfrac{x_n^2 - 7}{2x_n}$', '$\\dfrac{2x_n}{x_n^2 - 7}$', '$\\dfrac{x_n^2 - 7}{x_n}$', '$x_n^2 - 7$'] },
          ],
          correctAnswers: ['$x^2 - 7$', '$2x$', '$\\dfrac{x_n^2 - 7}{2x_n}$'],
          hint1: '$f$ is given directly as $x^2 - 7$.',
          hint2: 'Differentiate $x^2 - 7$ with the power rule: $f\'(x) = 2x$.',
          hint3: 'Substitute into $x_{n+1} = x_n - f(x_n)/f\'(x_n)$ with $f(x_n)=x_n^2-7$ and $f\'(x_n)=2x_n$.',
          explanation: 'With $f(x)=x^2-7$ and $f\'(x)=2x$, the rule becomes $x_{n+1} = x_n - \\dfrac{x_n^2 - 7}{2x_n}$. (This iteration finds $\\sqrt{7}$.)',
        },
      },
      {
        id: 'nm2-build-iteration',
        type: 'text' as const,
        content: `## Building the Iteration Function

It often helps to simplify the update into a single tidy expression $g(x)$, so $x_{n+1} = g(x_n)$.

**Example:** $f(x) = x^2 - a$, $f'(x) = 2x$:

$$x_{n+1} = x_n - \\frac{x_n^2 - a}{2x_n} = \\frac{2x_n^2 - (x_n^2 - a)}{2x_n} = \\frac{x_n^2 + a}{2x_n} = \\frac{1}{2}\\left(x_n + \\frac{a}{x_n}\\right)$$

That last form, $x_{n+1} = \\tfrac{1}{2}\\!\\left(x_n + \\tfrac{a}{x_n}\\right)$, is the ancient **Babylonian square-root** rule — it's just Newton's Method on $x^2 - a$. We'll use it in Part 4.

> ⚠️ Simplifying is optional. You can always just plug $f(x_n)$ and $f'(x_n)$ into the formula separately. Simplify only when it makes the arithmetic cleaner.`,
      },
      {
        id: 'nm2-setup-drill',
        type: 'input-boxes' as const,
        content: `**Set Up the Formula** 🧮

For $f(x) = x^3 - x - 1$, you'll need $f'(x)$ to run Newton's Method.

**1)** $f'(x) = 3x^2 - {}\\,?$  *(enter the constant being subtracted)*
**2)** Evaluate $f(1) = 1^3 - 1 - 1 = \\,?$
**3)** Evaluate $f'(1) = 3(1)^2 - 1 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '-1', '2'],
          hint1: 'Differentiate term by term: $\\frac{d}{dx}(x^3) = 3x^2$, $\\frac{d}{dx}(x) = 1$, $\\frac{d}{dx}(1)=0$. So $f\'(x) = 3x^2 - 1$.',
          hint2: '$f(1) = 1 - 1 - 1 = -1$.',
          hint3: '$f\'(1) = 3(1) - 1 = 2$.',
          explanation: '$f\'(x) = 3x^2 - 1$ (constant subtracted is $1$). At $x=1$: $f(1) = -1$ and $f\'(1) = 2$. Part 3 uses these to take the first Newton step.',
        },
      },
      {
        id: 'nm2-formula-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Newton\'s Method update rule is:',
              options: [
                "$x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}$",
                "$x_{n+1} = x_n + \\dfrac{f(x_n)}{f'(x_n)}$",
                "$x_{n+1} = x_n - \\dfrac{f'(x_n)}{f(x_n)}$",
                "$x_{n+1} = f(x_n) - \\dfrac{x_n}{f'(x_n)}$",
              ],
              correctAnswer: 0,
              explanation: 'The function value goes on top, the derivative on the bottom, and you *subtract* the correction: $x_{n+1} = x_n - f(x_n)/f\'(x_n)$.',
            },
            {
              question: 'If $f(x_n) = 0$ exactly, what does the formula give for $x_{n+1}$?',
              options: ['$x_{n+1} = x_n$ (you\'ve found the root)', '$x_{n+1} = 0$', 'undefined', '$x_{n+1} = -x_n$'],
              correctAnswer: 0,
              explanation: 'The correction term $f(x_n)/f\'(x_n) = 0/f\'(x_n) = 0$, so $x_{n+1} = x_n$. Once you land exactly on a root, the method stays put.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'newtons-method',
    sections: [
      {
        id: 'nm3-intro',
        type: 'text' as const,
        content: `# 🎯 Newton's Method

**Part 3 of 7 — Running the Iteration by Hand**

---

> 🔑 **The Routine:** Plug $x_n$ into $f$ and $f'$, divide, subtract. The output becomes the next input. Repeat until the digits stop changing.`,
      },
      {
        id: 'nm3-worked1',
        type: 'text' as const,
        content: `## Worked Example: $x^3 - x - 1 = 0$

Here $f(x) = x^3 - x - 1$ and $f'(x) = 3x^2 - 1$. Start at $x_0 = 1.5$.

**Step 1 — find $x_1$:**

$$f(1.5) = 3.375 - 1.5 - 1 = 0.875, \\qquad f'(1.5) = 3(2.25) - 1 = 5.75$$

$$x_1 = 1.5 - \\frac{0.875}{5.75} = 1.5 - 0.15217 = 1.34783$$

**Step 2 — find $x_2$:**

$$f(1.34783) \\approx 0.10068, \\qquad f'(1.34783) \\approx 4.45050$$

$$x_2 = 1.34783 - \\frac{0.10068}{4.45050} \\approx 1.34783 - 0.02262 = 1.32520$$

**Step 3 — find $x_3$:** continuing gives $x_3 \\approx 1.32472$, and $x_4 \\approx 1.32472$ — the digits have settled.

> ✅ The true root is $1.324717\\ldots$ Newton's Method nailed six digits in just **four** steps.`,
      },
      {
        id: 'nm3-first-step-drill',
        type: 'input-boxes' as const,
        content: `**Take the First Step** 🧮

Let $f(x) = x^2 - 7$, so $f'(x) = 2x$. Start at $x_0 = 3$ to approximate $\\sqrt{7}$.

**1)** $f(3) = 3^2 - 7 = \\,?$
**2)** $f'(3) = 2(3) = \\,?$
**3)** $x_1 = 3 - \\dfrac{f(3)}{f'(3)} = \\,?$  *(enter as a decimal, rounded to 4 places)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '6', '2.6667'],
          hint1: '$f(3) = 9 - 7 = 2$.',
          hint2: '$f\'(3) = 2 \\cdot 3 = 6$.',
          hint3: '$x_1 = 3 - \\frac{2}{6} = 3 - 0.3333 = 2.6667$.',
          explanation: '$f(3)=2$, $f\'(3)=6$, so $x_1 = 3 - \\frac{2}{6} = 2.6667$. Since $\\sqrt{7} \\approx 2.6458$, one step already brought us close.',
        },
      },
      {
        id: 'nm3-worked2',
        type: 'text' as const,
        content: `## Worked Example: Continuing to $x_2$

Keep going on $f(x) = x^2 - 7$ from $x_1 = 2.6667$:

$$f(2.6667) = 2.6667^2 - 7 = 7.1113 - 7 = 0.1113, \\qquad f'(2.6667) = 5.3334$$

$$x_2 = 2.6667 - \\frac{0.1113}{5.3334} = 2.6667 - 0.02087 = 2.64583$$

Compare to $\\sqrt{7} = 2.645751\\ldots$ — already correct to **four** decimal places after just two steps. (Carrying the unrounded $x_1$ would give an even more accurate $x_2$.)

> 💡 **Pattern to notice:** the number of correct digits roughly *doubles* each step ($1 \\to 2 \\to 4 \\to \\ldots$). That spectacular speed is the headline feature of Newton's Method; we study it in Part 5.`,
      },
      {
        id: 'nm3-iterate-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'After computing $x_1$, what do you do to get $x_2$?',
              options: [
                'Apply the same formula again, using $x_1$ as the input',
                'Use $x_0$ again with a smaller step',
                'Average $x_0$ and $x_1$',
                'Differentiate $x_1$',
              ],
              correctAnswer: 0,
              explanation: 'Newton\'s Method is iterative: each output becomes the next input. $x_2 = x_1 - f(x_1)/f\'(x_1)$, and so on.',
            },
            {
              question: 'You\'re iterating and find $x_3 = 1.32472$ and $x_4 = 1.32472$ (same to all shown digits). This means:',
              options: [
                'The method has converged — stop',
                'You made an arithmetic error',
                'You must restart with a new $x_0$',
                'The root does not exist',
              ],
              correctAnswer: 0,
              explanation: 'When successive iterates agree to the precision you need, the sequence has converged to the root. There\'s no benefit to continuing.',
            },
          ],
        },
      },
      {
        id: 'nm3-which-formula',
        type: 'dropdown-select' as const,
        content: `**Plug In Correctly** 🔽

Let $f(x) = x^2 - 7$ with $x_0 = 3$. Match each quantity to its value (decimals rounded).`,
        exercise: {
          dropdowns: [
            { label: '$f(x_0) = f(3)$', options: ['$2$', '$9$', '$7$', '$6$'] },
            { label: "$f'(x_0) = f'(3)$", options: ['$6$', '$2$', '$3$', '$9$'] },
            { label: 'Correction $f(x_0)/f\'(x_0)$', options: ['$0.3333$', '$3$', '$0.6667$', '$2$'] },
          ],
          correctAnswers: ['$2$', '$6$', '$0.3333$'],
          hint1: '$f(3) = 9 - 7 = 2$.',
          hint2: '$f\'(x) = 2x$, so $f\'(3) = 6$.',
          hint3: 'The correction is $f(x_0)/f\'(x_0) = 2/6 = 0.3333$, and $x_1 = 3 - 0.3333 = 2.6667$.',
          explanation: '$f(3)=2$, $f\'(3)=6$, correction $=2/6=0.3333$, giving $x_1 = 2.6667$. Subtract the correction — never add it.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'newtons-method',
    sections: [
      {
        id: 'nm4-intro',
        type: 'text' as const,
        content: `# 🎯 Newton's Method

**Part 4 of 7 — Square Roots & Real Equations**

---

> 🔑 **Why it matters:** Calculators compute $\\sqrt{a}$, $\\sqrt[3]{a}$, and solve $\\cos x = x$ using Newton's Method (or close cousins). Here we apply it to the problems it's most famous for.`,
      },
      {
        id: 'nm4-sqrt',
        type: 'text' as const,
        content: `## Computing Square Roots

To find $\\sqrt{a}$, find a root of $f(x) = x^2 - a$. As we simplified in Part 2, the update collapses to the **Babylonian rule**:

$$x_{n+1} = \\frac{1}{2}\\left(x_n + \\frac{a}{x_n}\\right)$$

### Example: $\\sqrt{10}$, starting at $x_0 = 3$

$$x_1 = \\tfrac{1}{2}\\!\\left(3 + \\tfrac{10}{3}\\right) = \\tfrac{1}{2}(3 + 3.3333) = 3.16667$$

$$x_2 = \\tfrac{1}{2}\\!\\left(3.16667 + \\tfrac{10}{3.16667}\\right) = \\tfrac{1}{2}(3.16667 + 3.15789) = 3.16228$$

Since $\\sqrt{10} = 3.162278\\ldots$, two steps give **six** correct digits.

> 💡 The rule "average your guess with $a$ divided by your guess" is intuitive: if $x_n$ is too big, then $a/x_n$ is too small, and their average is closer to the truth.`,
      },
      {
        id: 'nm4-sqrt-drill',
        type: 'input-boxes' as const,
        content: `**Babylonian Square Root** 🧮

Use $x_{n+1} = \\tfrac{1}{2}\\!\\left(x_n + \\dfrac{a}{x_n}\\right)$ to approximate $\\sqrt{20}$ from $x_0 = 4$.

**1)** $\\dfrac{20}{4} = \\,?$
**2)** $x_1 = \\tfrac{1}{2}(4 + {}\\,?) = 4.5$  *(enter the value of $20/4$ again — the number added to 4)*
**3)** $x_1 = \\,?$  *(the resulting first iterate)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '5', '4.5'],
          hint1: '$20/4 = 5$.',
          hint2: 'Inside the parentheses you add $x_0 = 4$ and $a/x_0 = 5$.',
          hint3: '$x_1 = \\frac{1}{2}(4 + 5) = \\frac{1}{2}(9) = 4.5$.',
          explanation: '$20/4 = 5$, so $x_1 = \\frac{1}{2}(4+5) = 4.5$. (Next step gives $x_2 \\approx 4.47222$, and $\\sqrt{20} \\approx 4.47214$.)',
        },
      },
      {
        id: 'nm4-cosx',
        type: 'text' as const,
        content: `## Solving $\\cos x = x$

Rewrite as $f(x) = \\cos x - x = 0$, so $f'(x) = -\\sin x - 1$. Start at $x_0 = 1$ (radians).

$$f(1) = \\cos 1 - 1 = 0.5403 - 1 = -0.4597, \\qquad f'(1) = -\\sin 1 - 1 = -0.8415 - 1 = -1.8415$$

$$x_1 = 1 - \\frac{-0.4597}{-1.8415} = 1 - 0.2496 = 0.75036$$

One more step gives $x_2 \\approx 0.73911$, then $x_3 \\approx 0.73909$ — settled.

> ✅ The solution of $\\cos x = x$ is $x \\approx 0.739085$, the famous **Dottie number**. Newton's Method found it in three steps.`,
      },
      {
        id: 'nm4-app-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To approximate $\\sqrt[3]{a}$ (a cube root) with Newton\'s Method, set $f(x) = $',
              options: ['$x^3 - a$', '$x^2 - a$', '$3x - a$', '$x^3 + a$'],
              correctAnswer: 0,
              explanation: 'A cube root of $a$ solves $x^3 = a$, i.e. $x^3 - a = 0$. Then $f\'(x) = 3x^2$ and you iterate the standard formula.',
            },
            {
              question: 'When solving a trig equation like $\\cos x = x$ with Newton\'s Method, your angles should be measured in:',
              options: ['radians', 'degrees', 'gradians', 'either, it doesn\'t matter'],
              correctAnswer: 0,
              explanation: 'Calculus derivatives of trig functions (e.g. $\\frac{d}{dx}\\cos x = -\\sin x$) are only valid in radians. Using degrees would give a wrong $f\'$ and wrong iterates.',
            },
          ],
        },
      },
      {
        id: 'nm4-cube-drill',
        type: 'input-boxes' as const,
        content: `**One Step on a Cube Root** 🧮

Approximate $\\sqrt[3]{2}$ using $f(x) = x^3 - 2$, $f'(x) = 3x^2$, starting at $x_0 = 1$.

**1)** $f(1) = 1^3 - 2 = \\,?$
**2)** $f'(1) = 3(1)^2 = \\,?$
**3)** $x_1 = 1 - \\dfrac{f(1)}{f'(1)} = \\,?$  *(decimal, 4 places)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-1', '3', '1.3333'],
          hint1: '$f(1) = 1 - 2 = -1$.',
          hint2: '$f\'(1) = 3 \\cdot 1 = 3$.',
          hint3: '$x_1 = 1 - \\frac{-1}{3} = 1 + 0.3333 = 1.3333$.',
          explanation: '$f(1)=-1$, $f\'(1)=3$, so $x_1 = 1 - (-1/3) = 1.3333$. Subtracting a negative correction *added* to the guess. ($\\sqrt[3]{2} \\approx 1.2599$.)',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'newtons-method',
    sections: [
      {
        id: 'nm5-intro',
        type: 'text' as const,
        content: `# 🎯 Newton's Method

**Part 5 of 7 — Convergence Speed & Stopping**

---

> 🔑 **The Headline:** When it works, Newton's Method converges **quadratically** — the number of correct decimal digits roughly *doubles* with each step. That's why a handful of iterations gives machine precision.`,
      },
      {
        id: 'nm5-quadratic',
        type: 'text' as const,
        content: `## Quadratic Convergence

Let $\\varepsilon_n = x_n - r$ be the **error** at step $n$ (distance from the true root $r$). Near a simple root, Newton's Method satisfies

$$\\lvert\\varepsilon_{n+1}\\rvert \\approx C\\,\\lvert\\varepsilon_n\\rvert^2$$

for some constant $C$. Squaring a small error makes it *tiny*:

| Step | Error (rough) | Correct digits |
|------|---------------|----------------|
| $x_0$ | $0.1$ | $1$ |
| $x_1$ | $0.01$ | $2$ |
| $x_2$ | $0.0001$ | $4$ |
| $x_3$ | $0.00000001$ | $8$ |

> 💡 Contrast this with **bisection** (repeatedly halving an interval), which only gains about *one* digit every 3–4 steps. Newton is dramatically faster — when it converges.`,
      },
      {
        id: 'nm5-speed-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If Newton\'s Method has 3 correct digits at step $n$, roughly how many should it have at step $n+1$ (near a simple root)?',
              options: ['About 6', 'About 4', 'About 3', 'About 30'],
              correctAnswer: 0,
              explanation: 'Quadratic convergence roughly *doubles* the count of correct digits each step, so $3 \\to 6$.',
            },
            {
              question: '"Quadratic convergence" means the new error is approximately proportional to:',
              options: [
                'the square of the old error',
                'the square root of the old error',
                'half the old error',
                'the old error unchanged',
              ],
              correctAnswer: 0,
              explanation: '$\\lvert\\varepsilon_{n+1}\\rvert \\approx C\\,\\lvert\\varepsilon_n\\rvert^2$. Squaring a number below 1 shrinks it fast, which is why convergence is so rapid.',
            },
          ],
        },
      },
      {
        id: 'nm5-stopping',
        type: 'text' as const,
        content: `## When Do You Stop?

In practice you iterate until one of these holds:

- **Successive iterates agree:** $\\lvert x_{n+1} - x_n\\rvert$ is smaller than your tolerance (e.g. $10^{-6}$).
- **The function is nearly zero:** $\\lvert f(x_{n+1})\\rvert$ is below tolerance.
- A maximum iteration count is reached (a safety net — see Part 6).

On the AP exam you'll typically be told **how many steps** to take, or asked for an iterate to a stated number of decimals.

> ⚠️ **Don't round too early.** Carry extra digits through each step; only round the *final* answer. Rounding intermediate iterates can poison the doubling and cost you accuracy.`,
      },
      {
        id: 'nm5-stop-dropdown',
        type: 'dropdown-select' as const,
        content: `**Reasonable Stopping Rules** 🔽

Decide whether each is a sound reason to stop iterating.`,
        exercise: {
          dropdowns: [
            { label: '$\\lvert x_{n+1} - x_n\\rvert < 10^{-8}$', options: ['Stop — converged', 'Keep going', 'Restart'] },
            { label: '$\\lvert f(x_{n+1})\\rvert$ is essentially $0$', options: ['Stop — root found', 'Keep going', 'Restart'] },
            { label: 'The iterates keep changing in the 2nd decimal', options: ['Keep going', 'Stop — converged', 'Restart'] },
          ],
          correctAnswers: ['Stop — converged', 'Stop — root found', 'Keep going'],
          hint1: 'If two successive guesses agree to 8 decimals, they\'ve converged.',
          hint2: 'If $f$ at your guess is essentially zero, that guess is essentially a root.',
          hint3: 'If digits are still shifting where you need accuracy, you\'re not done — iterate more.',
          explanation: 'Stop when successive iterates agree to tolerance OR $f(x_{n+1}) \\approx 0$. Keep going while the digits you care about are still changing.',
        },
      },
      {
        id: 'nm5-digits-drill',
        type: 'input-boxes' as const,
        content: `**Doubling the Digits** 🧮

Suppose an iteration has $2$ correct digits at $x_1$ and converges quadratically.

**1)** Roughly how many correct digits at $x_2$?
**2)** Roughly how many correct digits at $x_3$?
**3)** Roughly how many correct digits at $x_4$?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '8', '16'],
          hint1: 'Quadratic convergence doubles the digit count each step: $2 \\to 4$.',
          hint2: 'From $x_2$ to $x_3$: $4 \\to 8$.',
          hint3: 'From $x_3$ to $x_4$: $8 \\to 16$.',
          explanation: 'Doubling each step: $2 \\to 4 \\to 8 \\to 16$. This is why 4–5 iterations usually exhaust a calculator\'s precision.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'newtons-method',
    sections: [
      {
        id: 'nm6-intro',
        type: 'text' as const,
        content: `# 🎯 Newton's Method

**Part 6 of 7 — When It Fails**

---

> ⚠️ **Reality Check:** Newton's Method is fast *when it works*. But a bad starting guess or an awkward function can make it stall, bounce, or fly off to infinity. Knowing the failure modes is part of using it wisely.`,
      },
      {
        id: 'nm6-failures',
        type: 'text' as const,
        content: `## Four Ways It Can Break

**1. Zero derivative ($f'(x_n) = 0$).** The tangent is horizontal — it never meets the $x$-axis. The formula divides by zero and blows up.

**2. Bad starting guess.** Far from the root, the tangent may point you the *wrong way*, sometimes toward a *different* root than you wanted (or none).

**3. Oscillation / cycling.** The iterates can bounce between values and never settle. Example: $f(x) = x^3 - 2x + 2$ from $x_0 = 0$ cycles between $0$ and $1$ forever.

**4. Divergence at a steep/flat root.** For $f(x) = \\sqrt[3]{x}$ (root at $0$), starting anywhere but $0$, the iterates *double* in size each step and run off to infinity.

> 💡 **Fixes:** choose $x_0$ close to the root (a graph or a sign change $f(a)f(b)<0$ helps), avoid points where $f'$ is near $0$, and cap the iteration count so a runaway loop stops.`,
      },
      {
        id: 'nm6-fail-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Newton\'s Method divides by $f\'(x_n)$. The method breaks down immediately if, at your guess,',
              options: [
                "$f'(x_n) = 0$ (horizontal tangent)",
                '$f(x_n) = 0$',
                '$x_n > 0$',
                "$f'(x_n) > 0$",
              ],
              correctAnswer: 0,
              explanation: 'A horizontal tangent ($f\'(x_n)=0$) never crosses the $x$-axis, so $x_{n+1}$ is undefined (division by zero).',
            },
            {
              question: 'Your iterates are bouncing: $0,\\,1,\\,0,\\,1,\\,0,\\,\\dots$ and never settling. This is an example of:',
              options: [
                'oscillation (cycling) — the method is not converging',
                'quadratic convergence',
                'a horizontal tangent',
                'reaching the root',
              ],
              correctAnswer: 0,
              explanation: 'Repeating values that never approach a single number is cycling. A different starting guess (or a different method) is needed.',
            },
          ],
        },
      },
      {
        id: 'nm6-diverge',
        type: 'text' as const,
        content: `## A Concrete Divergence: $f(x) = \\sqrt[3]{x}$

The only root is $x = 0$. With $f(x) = x^{1/3}$ and $f'(x) = \\tfrac{1}{3}x^{-2/3}$, the update simplifies to

$$x_{n+1} = x_n - \\frac{x_n^{1/3}}{\\tfrac{1}{3}x_n^{-2/3}} = x_n - 3x_n = -2x_n$$

So each step **multiplies the guess by $-2$**: starting at $x_0 = 1$ gives $1,\\,-2,\\,4,\\,-8,\\,16,\\dots$ — racing *away* from the root at $0$.

> ⚠️ Here the trouble is that $f'$ blows up at the root (vertical tangent). No starting guess except the exact answer will converge. Newton's Method assumes a reasonably "tame" function near the root.`,
      },
      {
        id: 'nm6-diverge-drill',
        type: 'input-boxes' as const,
        content: `**Watch It Diverge** 🧮

For $f(x) = \\sqrt[3]{x}$ the update is $x_{n+1} = -2x_n$. Start at $x_0 = 1$.

**1)** $x_1 = -2(1) = \\,?$
**2)** $x_2 = -2(x_1) = \\,?$
**3)** $x_3 = -2(x_2) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-2', '4', '-8'],
          hint1: '$x_1 = -2 \\cdot 1 = -2$.',
          hint2: '$x_2 = -2 \\cdot (-2) = 4$.',
          hint3: '$x_3 = -2 \\cdot 4 = -8$.',
          explanation: 'The magnitudes grow $1, 2, 4, 8, \\dots$ while the sign flips — the iterates diverge from the root at $0$ instead of approaching it.',
        },
      },
      {
        id: 'nm6-safeguard-dropdown',
        type: 'dropdown-select' as const,
        content: `**Choose a Safeguard** 🔽

Match each failure mode to a sensible precaution.`,
        exercise: {
          dropdowns: [
            { label: 'Risk of dividing by zero', options: ['Avoid starting where $f\'\\approx 0$', 'Use degrees', 'Add 1 to every guess', 'Ignore it'] },
            { label: 'Risk of a far-off, wrong-way guess', options: ['Start $x_0$ near the root', 'Start $x_0$ very large', 'Use $x_0 = 0$ always', 'Skip the derivative'] },
            { label: 'Risk of an infinite runaway loop', options: ['Cap the number of iterations', 'Never stop', 'Square each iterate', 'Use only one step'] },
          ],
          correctAnswers: ['Avoid starting where $f\'\\approx 0$', 'Start $x_0$ near the root', 'Cap the number of iterations'],
          hint1: 'Division by $f\'$ is dangerous when $f\'$ is near zero.',
          hint2: 'A nearby start keeps the tangent pointed the right way.',
          hint3: 'An iteration cap guarantees the loop halts even if it never converges.',
          explanation: 'Pick $x_0$ near the root and away from horizontal tangents, and always cap iterations as a safety net.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'newtons-method',
    sections: [
      {
        id: 'nm7-intro',
        type: 'text' as const,
        content: `# 🎯 Newton's Method

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) set up $f$ and $f'$, (2) run the iteration, (3) apply it to roots and equations, (4) judge convergence, and (5) recognize when it fails. Let's put it all together.`,
      },
      {
        id: 'nm7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| The iteration | $x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}$ |
| Solve $g(x) = h(x)$ | root of $f = g - h$ |
| Square root $\\sqrt{a}$ | $x_{n+1} = \\tfrac{1}{2}\\!\\left(x_n + \\tfrac{a}{x_n}\\right)$ |
| Speed (simple root) | quadratic — digits **double** per step |
| Failure flags | $f'(x_n)=0$, bad $x_0$, cycling, divergence |

> 🔑 **One-line summary:** Subtract $f/f'$ from your guess, again and again. Near a good root it converges blazingly fast; far from one, watch for the failure modes.`,
      },
      {
        id: 'nm7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $f(x) = x^2 - 5$ with $x_0 = 2$, the first Newton iterate $x_1$ is:',
              options: ['$2.25$', '$2.5$', '$2.236$', '$1.75$'],
              correctAnswer: 0,
              explanation: '$f(2)=4-5=-1$, $f\'(2)=4$. $x_1 = 2 - \\frac{-1}{4} = 2 + 0.25 = 2.25$. (And $\\sqrt5 \\approx 2.236$.)',
            },
            {
              question: 'For $f(x) = x^3 - 2x - 5$ with $x_0 = 2$, find $x_1$.',
              options: ['$2.1$', '$2.0$', '$2.5$', '$1.9$'],
              correctAnswer: 0,
              explanation: '$f(2)=8-4-5=-1$, $f\'(x)=3x^2-2$ so $f\'(2)=10$. $x_1 = 2 - \\frac{-1}{10} = 2.1$.',
            },
          ],
        },
      },
      {
        id: 'nm7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Compute It** 🧮

Let $f(x) = x^2 - 6$ (so $f'(x) = 2x$). Start at $x_0 = 2$ to approximate $\\sqrt{6}$.

**1)** $f(2) = 2^2 - 6 = \\,?$
**2)** $x_1 = 2 - \\dfrac{f(2)}{2(2)} = \\,?$  *(decimal)*
**3)** Using $x_1$, $x_2 = \\tfrac{1}{2}\\!\\left(x_1 + \\tfrac{6}{x_1}\\right) = \\,?$  *(decimal, 4 places)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-2', '2.5', '2.45'],
          hint1: '$f(2) = 4 - 6 = -2$.',
          hint2: '$x_1 = 2 - \\frac{-2}{4} = 2 + 0.5 = 2.5$.',
          hint3: '$x_2 = \\frac{1}{2}(2.5 + 6/2.5) = \\frac{1}{2}(2.5 + 2.4) = \\frac{1}{2}(4.9) = 2.45$.',
          explanation: '$f(2)=-2$, $x_1 = 2.5$, then $x_2 = \\frac{1}{2}(2.5 + 2.4) = 2.45$. Since $\\sqrt6 \\approx 2.4495$, two steps are essentially exact.',
        },
      },
      {
        id: 'nm7-concept-dropdown',
        type: 'dropdown-select' as const,
        content: `**Final Concept Sweep** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Newton\'s Method finds a', options: ['root of $f$', 'maximum of $f$', 'integral of $f$', 'asymptote of $f$'] },
            { label: 'Each step needs the value of', options: ["$f$ and $f'$", '$f$ only', "$f'$ only", 'the second derivative'] },
            { label: 'Near a simple root, convergence is', options: ['quadratic (fast)', 'linear (slow)', 'nonexistent', 'random'] },
          ],
          correctAnswers: ['root of $f$', "$f$ and $f'$", 'quadratic (fast)'],
          hint1: 'The whole point is to locate where $f(x) = 0$.',
          hint2: 'The formula uses both $f(x_n)$ and $f\'(x_n)$.',
          hint3: 'Correct digits roughly double each step near a simple root.',
          explanation: 'Newton\'s Method finds a root of $f$, uses both $f$ and $f\'$ at each step, and converges quadratically near a simple root.',
        },
      },
      {
        id: 'nm7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which formula is Newton\'s Method?',
              options: [
                "$x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}$",
                "$x_{n+1} = x_n - f(x_n)\\,f'(x_n)$",
                "$x_{n+1} = \\dfrac{x_n}{f'(x_n)}$",
                "$x_{n+1} = x_n + \\dfrac{f'(x_n)}{f(x_n)}$",
              ],
              correctAnswer: 0,
              explanation: 'The update subtracts the ratio of the function value to its derivative: $x_{n+1} = x_n - f(x_n)/f\'(x_n)$.',
            },
            {
              question: 'For $f(x) = x^2 - 3$ with $x_0 = 2$, the first iterate $x_1$ is:',
              options: ['$1.75$', '$1.5$', '$1.732$', '$2.25$'],
              correctAnswer: 0,
              explanation: '$f(2)=4-3=1$, $f\'(2)=4$. $x_1 = 2 - \\frac{1}{4} = 1.75$. (And $\\sqrt3 \\approx 1.732$.)',
            },
            {
              question: 'Newton\'s Method can fail to converge when:',
              options: [
                "the starting guess is poor or $f'(x_n)=0$",
                'the function is a polynomial',
                'you use a calculator',
                'the root is positive',
              ],
              correctAnswer: 0,
              explanation: 'A horizontal tangent ($f\'=0$) makes the step undefined, and a far-off start can send iterates the wrong way, cycle, or diverge. A good initial guess near the root is the main safeguard.',
            },
          ],
        },
      },
    ],
  },
]
