import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Rational Functions and Asymptotes (AP Precalculus).
 * Registry key: 'rational-functions-asymptotes' (matches the DB Topic.slug, no alias needed).
 * 7 parts, gold-standard structure: what a rational function is + domain → vertical
 * asymptotes & holes → horizontal asymptotes (degree test) → slant/oblique asymptotes
 * → intercepts & sign analysis → putting it together to sketch a graph → mixed practice
 * + exit quiz. Interactive practice mixes multiple-choice + input-boxes + dropdown each part.
 * LaTeX uses doubled backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'rational-functions-asymptotes',
    sections: [
      {
        id: 'rfa1-intro',
        type: 'text' as const,
        content: `# ➗ Rational Functions and Asymptotes

**Part 1 of 7 — Meet the Rational Function**

---

### Topics in This Part

| Section |
|---------|
| What Is a Rational Function? |
| Finding the Domain |
| Where the Graph Breaks |

> 🔑 **Key Concept:** A **rational function** is a ratio of two polynomials, $f(x) = \\dfrac{P(x)}{Q(x)}$. Everything interesting about its graph — gaps, towers shooting to infinity, and flat lines it hugs — traces back to where $Q(x) = 0$ and to the **degrees** of $P$ and $Q$.`,
      },
      {
        id: 'rfa1-define',
        type: 'text' as const,
        content: `## What Is a Rational Function?

A **rational function** has the form

$$f(x) = \\frac{P(x)}{Q(x)}, \\qquad Q(x) \\neq 0$$

where $P(x)$ and $Q(x)$ are **polynomials** and $Q(x)$ is **not** the zero polynomial.

### Examples and Non-Examples

| Function | Rational? | Why |
|----------|-----------|-----|
| $\\dfrac{3x+1}{x-2}$ | ✅ Yes | polynomial over polynomial |
| $\\dfrac{x^2-9}{x^2+4}$ | ✅ Yes | polynomial over polynomial |
| $\\dfrac{5}{1} = 5$ | ✅ Yes | any polynomial (denominator $1$) |
| $\\dfrac{\\sqrt{x}}{x-1}$ | ❌ No | $\\sqrt{x}$ is **not** a polynomial |
| $\\dfrac{x+1}{2^x}$ | ❌ No | $2^x$ is exponential, not polynomial |

> 💡 The word "rational" comes from **ratio** — a rational function is literally a ratio of polynomials, just as a rational number is a ratio of integers.`,
      },
      {
        id: 'rfa1-isrational',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is a rational function?',
              options: ['$\\dfrac{x^2 - 1}{x + 5}$', '$\\dfrac{\\sqrt{x+1}}{x}$', '$\\dfrac{3^x}{x-2}$', '$|x| + \\dfrac{1}{x}$'],
              correctAnswer: 0,
              explanation: 'A rational function is a polynomial divided by a polynomial. $\\frac{x^2-1}{x+5}$ qualifies. The others contain a radical, an exponential, or an absolute value — none of those are polynomials.',
            },
            {
              question: 'Why must $Q(x)$ in $\\dfrac{P(x)}{Q(x)}$ never be the zero polynomial?',
              options: ['Division by zero is undefined, so $\\frac{P(x)}{0}$ has no meaning', 'The numerator would also have to be zero', 'It would make the function linear', 'Polynomials cannot equal zero'],
              correctAnswer: 0,
              explanation: 'If $Q(x)$ were identically $0$, every input would force division by zero, which is undefined. The denominator may equal zero at specific $x$-values (those create asymptotes or holes), but it cannot be zero everywhere.',
            },
          ],
        },
      },
      {
        id: 'rfa1-domain-teach',
        type: 'text' as const,
        content: `## Finding the Domain

The **domain** of a rational function is **all real numbers except where the denominator equals zero**.

To find the domain:
1. Set the **denominator** equal to $0$.
2. Solve for $x$ — these are the **excluded values**.
3. The domain is every other real number.

### Worked Example: $f(x) = \\dfrac{x+4}{x^2 - 9}$

Set the denominator to zero:

$$x^2 - 9 = 0 \\;\\Rightarrow\\; (x-3)(x+3) = 0 \\;\\Rightarrow\\; x = 3 \\text{ or } x = -3$$

So the domain is **all real numbers except $x = 3$ and $x = -3$**, written $x \\neq \\pm 3$.

> ⚠️ Look **only at the denominator** for the domain. The numerator can be zero with no problem — that just makes the whole fraction equal $0$.`,
      },
      {
        id: 'rfa1-domain-drill',
        type: 'input-boxes' as const,
        content: `**Find the Excluded Values** 🧮

Enter the $x$-value(s) excluded from the domain. If there are two, enter them **smallest first**.

**1)** $f(x) = \\dfrac{x}{x - 7}$, excluded value $= \\,?$
**2)** $g(x) = \\dfrac{x+1}{x^2 - 25}$, smaller excluded value $= \\,?$
**3)** Same $g(x)$: larger excluded value $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '-5', '5'],
          hint1: 'Set $x - 7 = 0$, so $x = 7$.',
          hint2: '$x^2 - 25 = (x-5)(x+5) = 0$ gives $x = 5$ and $x = -5$. The smaller is $-5$.',
          hint3: 'For $g$, the larger excluded value is $5$.',
          explanation: '1) $x = 7$.  2) and 3) $x^2 - 25 = 0 \\Rightarrow x = \\pm 5$, so the excluded values are $-5$ (smaller) and $5$ (larger).',
        },
      },
      {
        id: 'rfa1-break-preview',
        type: 'text' as const,
        content: `## Where the Graph "Breaks"

At an excluded $x$-value, the graph **cannot have a point** — something special happens there. There are exactly **two** possibilities, and which one occurs is the heart of this whole lesson:

| Behavior | What you see | When it happens |
|----------|--------------|-----------------|
| **Vertical asymptote** | graph shoots toward $\\pm\\infty$ near a vertical line | denominator factor does **not** cancel |
| **Hole** | a single missing point (open circle) | factor cancels with the numerator |

Plus, far out to the left and right, the graph often levels off toward a **horizontal asymptote**.

> 🔑 **The plan:** Part 2 handles vertical asymptotes and holes. Part 3 handles horizontal asymptotes. Part 4 handles slant asymptotes. By Part 6 you'll sketch the whole graph from the equation alone.`,
      },
      {
        id: 'rfa1-preview-dropdown',
        type: 'dropdown-select' as const,
        content: `**Quick Preview** 🔽

You don't need to compute anything yet — just match each phrase to the idea it describes.`,
        exercise: {
          dropdowns: [
            { label: 'A ratio of two polynomials is called a:', options: ['rational function', 'radical function', 'exponential function', 'linear function'] },
            { label: 'The domain excludes every $x$ where the:', options: ['denominator is zero', 'numerator is zero', 'function is positive', 'graph crosses the axis'] },
            { label: 'A single missing point on the graph is a:', options: ['hole', 'vertical asymptote', 'horizontal asymptote', 'zero'] },
          ],
          correctAnswers: ['rational function', 'denominator is zero', 'hole'],
          hint1: 'A polynomial divided by a polynomial is a rational function.',
          hint2: 'Division by zero is undefined, so the domain excludes the zeros of the denominator.',
          hint3: 'When a factor cancels, the graph has a single open-circle gap — a hole.',
          explanation: 'A rational function is a ratio of polynomials; its domain excludes where the denominator is zero; and a canceled factor leaves a hole (a single missing point) rather than an asymptote.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'rational-functions-asymptotes',
    sections: [
      {
        id: 'rfa2-intro',
        type: 'text' as const,
        content: `# ➗ Rational Functions and Asymptotes

**Part 2 of 7 — Vertical Asymptotes & Holes**

---

> 🔑 **The Distinction:** Both vertical asymptotes and holes happen where the **denominator is zero**. The difference is whether that factor **cancels** with the numerator. *Always factor and simplify first.*`,
      },
      {
        id: 'rfa2-va-teach',
        type: 'text' as const,
        content: `## Vertical Asymptotes

A **vertical asymptote (VA)** is a vertical line $x = a$ that the graph approaches but never touches, racing toward $+\\infty$ or $-\\infty$.

**How to find them:**
1. **Factor** numerator and denominator completely.
2. **Cancel** any common factors (those become holes — see below).
3. In the **simplified** function, set the **denominator** equal to $0$. Each solution gives a vertical asymptote.

### Worked Example: $f(x) = \\dfrac{x + 2}{x - 5}$

Nothing cancels, so set the denominator to zero:

$$x - 5 = 0 \\;\\Rightarrow\\; x = 5$$

The graph has a **vertical asymptote at $x = 5$**.

> 💡 Why does it blow up? As $x \\to 5$, the denominator $x - 5 \\to 0$ while the numerator $\\to 7$. A fixed number divided by something tiny is **enormous** — so $|f(x)| \\to \\infty$.`,
      },
      {
        id: 'rfa2-va-drill',
        type: 'input-boxes' as const,
        content: `**Locate the Vertical Asymptotes** 🧮

After simplifying, enter the vertical asymptote location(s). If there are two, enter them **smallest first**.

**1)** $f(x) = \\dfrac{x+3}{x-8}$, VA at $x = \\,?$
**2)** $g(x) = \\dfrac{5}{x^2 - x - 6}$, smaller VA at $x = \\,?$
**3)** Same $g(x)$: larger VA at $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '-2', '3'],
          hint1: 'No common factors, so set $x - 8 = 0$.',
          hint2: 'Factor: $x^2 - x - 6 = (x-3)(x+2)$. Zeros at $x = 3$ and $x = -2$.',
          hint3: 'Nothing cancels (numerator is $5$), so both zeros are vertical asymptotes; the larger is $3$.',
          explanation: '1) $x = 8$.  2) and 3) $x^2 - x - 6 = (x-3)(x+2) = 0 \\Rightarrow x = -2, 3$. Both are vertical asymptotes since neither factor cancels.',
        },
      },
      {
        id: 'rfa2-hole-teach',
        type: 'text' as const,
        content: `## Holes (Removable Discontinuities)

A **hole** appears when a factor cancels from **both** the numerator and denominator. The graph looks normal there except for one missing point, drawn as an **open circle**.

**How to find a hole:**
1. Factor and **cancel** the common factor.
2. The $x$-value that made the canceled factor zero is the **hole's $x$-coordinate**.
3. Plug that $x$ into the **simplified** function to get the hole's **$y$-coordinate**.

### Worked Example: $f(x) = \\dfrac{x^2 - 4}{x - 2}$

Factor and cancel:

$$f(x) = \\frac{(x-2)(x+2)}{x-2} = x + 2, \\quad x \\neq 2$$

The factor $(x-2)$ canceled, so there's a **hole at $x = 2$**. Its height:

$$y = (2) + 2 = 4$$

So the hole is at the point $(2, 4)$ — the graph is the line $y = x+2$ with one point punched out.

> ⚠️ Use the **simplified** function for the hole's height — never plug into the original (you'd get $\\frac{0}{0}$, which is undefined).`,
      },
      {
        id: 'rfa2-va-hole-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $f(x) = \\dfrac{(x-1)(x+4)}{(x-1)(x-3)}$, what happens at $x = 1$?',
              options: ['A hole, because $(x-1)$ cancels', 'A vertical asymptote at $x = 1$', 'An $x$-intercept', 'Nothing — $x=1$ is in the domain'],
              correctAnswer: 0,
              explanation: 'The factor $(x-1)$ appears in both numerator and denominator, so it cancels. A canceled factor produces a hole at $x = 1$, not a vertical asymptote.',
            },
            {
              question: 'For that same $f(x)$, where is the vertical asymptote?',
              options: ['$x = 3$', '$x = 1$', '$x = -4$', '$x = 0$'],
              correctAnswer: 0,
              explanation: 'After canceling $(x-1)$, the simplified denominator is $(x-3)$. It does not cancel, so the vertical asymptote is at $x = 3$.',
            },
          ],
        },
      },
      {
        id: 'rfa2-decision',
        type: 'text' as const,
        content: `## The Decision Rule, Summarized

When the denominator is zero at $x = a$, factor everything first and ask one question:

| Does the $(x-a)$ factor cancel? | Result at $x = a$ |
|---------------------------------|-------------------|
| **No** (only in the denominator) | **vertical asymptote** $x = a$ |
| **Yes** (in top and bottom) | **hole** at $x = a$ |

> 🔑 **Always simplify before you classify.** A factor that survives in the denominator is an asymptote; a factor that cancels is a hole. The next drill puts this into practice — you'll get both the hole's location and its height.`,
      },
      {
        id: 'rfa2-hole-coords',
        type: 'input-boxes' as const,
        content: `**Find the Hole's Coordinates** 🧮

The function $f(x) = \\dfrac{x^2 - 9}{x - 3}$ has a hole.

**1)** $x$-coordinate of the hole $= \\,?$
**2)** $y$-coordinate of the hole $= \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '6'],
          hint1: 'Factor: $\\frac{(x-3)(x+3)}{x-3}$. The $(x-3)$ cancels, so the hole is at $x = 3$.',
          hint2: 'Simplified, $f(x) = x + 3$. The hole sits on this line.',
          hint3: 'Plug the hole $x$ into the simplified function: at $x = 3$, $y = 3 + 3 = 6$.',
          explanation: '$f(x) = \\frac{(x-3)(x+3)}{x-3} = x+3$ for $x \\neq 3$. The hole is at $(3, 6)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'rational-functions-asymptotes',
    sections: [
      {
        id: 'rfa3-intro',
        type: 'text' as const,
        content: `# ➗ Rational Functions and Asymptotes

**Part 3 of 7 — Horizontal Asymptotes (The Degree Test)**

---

> 🔑 **The End-Behavior Question:** A **horizontal asymptote (HA)** describes what $f(x)$ approaches as $x \\to \\pm\\infty$. You find it by comparing the **degree** of the numerator to the **degree** of the denominator — three cases, one rule.`,
      },
      {
        id: 'rfa3-rule',
        type: 'text' as const,
        content: `## The Degree Test for Horizontal Asymptotes

Let $n = \\deg(\\text{numerator})$ and $d = \\deg(\\text{denominator})$.

| Case | Horizontal asymptote |
|------|----------------------|
| $n < d$ (bottom-heavy) | $y = 0$ |
| $n = d$ (equal degrees) | $y = \\dfrac{\\text{leading coeff of top}}{\\text{leading coeff of bottom}}$ |
| $n > d$ (top-heavy) | **none** (it may have a slant asymptote — Part 4) |

> 💡 **Memory aids:** "**B**ottom **B**igger → $y = 0$" (bigger bottom drags the value to zero). "Same degree → **ratio of leaders**." "Top bigger → **no** horizontal asymptote."`,
      },
      {
        id: 'rfa3-examples',
        type: 'text' as const,
        content: `## Three Quick Examples

**Bottom-heavy ($n < d$):**
$$f(x) = \\frac{2x + 1}{x^2 - 5} \\quad n=1,\\ d=2 \\;\\Rightarrow\\; \\text{HA: } y = 0$$

**Equal degrees ($n = d$):**
$$g(x) = \\frac{3x^2 - x}{6x^2 + 4} \\quad n=2,\\ d=2 \\;\\Rightarrow\\; \\text{HA: } y = \\frac{3}{6} = \\frac{1}{2}$$

**Top-heavy ($n > d$):**
$$h(x) = \\frac{x^2 + 1}{x - 3} \\quad n=2,\\ d=1 \\;\\Rightarrow\\; \\text{no HA}$$

> ⚠️ For the equal-degree case, use **only the leading coefficients** — the numbers in front of the highest-power terms. Ignore everything else.`,
      },
      {
        id: 'rfa3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the horizontal asymptote of $f(x) = \\dfrac{4x - 7}{x^2 + 2x + 1}$?',
              options: ['$y = 0$', '$y = 4$', '$y = 1$', 'none'],
              correctAnswer: 0,
              explanation: 'Degree of top is $1$, degree of bottom is $2$. Since the bottom is bigger ($n < d$), the horizontal asymptote is $y = 0$.',
            },
            {
              question: 'What is the horizontal asymptote of $g(x) = \\dfrac{6x^3 + x}{2x^3 - 9}$?',
              options: ['$y = 3$', '$y = 0$', '$y = \\frac{1}{3}$', 'none'],
              correctAnswer: 0,
              explanation: 'Degrees are equal ($3 = 3$), so the HA is the ratio of leading coefficients: $\\frac{6}{2} = 3$. Thus $y = 3$.',
            },
            {
              question: 'Which function has NO horizontal asymptote?',
              options: ['$\\dfrac{x^3 + 1}{x^2 - 4}$', '$\\dfrac{x^2 + 1}{x^2 - 4}$', '$\\dfrac{x + 1}{x^2 - 4}$', '$\\dfrac{7}{x^2 - 4}$'],
              correctAnswer: 0,
              explanation: 'Only $\\frac{x^3+1}{x^2-4}$ is top-heavy (degree $3$ over degree $2$). When $n > d$ there is no horizontal asymptote. The others are equal-degree or bottom-heavy.',
            },
          ],
        },
      },
      {
        id: 'rfa3-cross',
        type: 'text' as const,
        content: `## Can a Graph Cross Its Horizontal Asymptote?

**Yes!** Unlike a vertical asymptote, a graph **may cross** its horizontal asymptote — the HA only describes the *long-run* end behavior, not the middle.

To find where $f$ crosses its HA $y = c$, just solve $f(x) = c$.

**Example:** $f(x) = \\dfrac{x}{x^2 + 1}$ has HA $y = 0$ (bottom-heavy). Solving $\\frac{x}{x^2+1} = 0$ gives $x = 0$, so the graph **crosses** $y = 0$ at the origin, then approaches it again far out.

> 💡 This is the big behavioral difference: a curve **never** crosses a vertical asymptote, but it **can** cross a horizontal (or slant) asymptote.`,
      },
      {
        id: 'rfa3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Classify Each Function** 🔽

For each function, choose its horizontal asymptote.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{5x^2 - 1}{x^2 + 3}$', options: ['$y = 5$', '$y = 0$', 'none', '$y = \\frac{1}{3}$'] },
            { label: '$\\dfrac{8x}{x^2 - 7}$', options: ['$y = 0$', '$y = 8$', 'none', '$y = 1$'] },
            { label: '$\\dfrac{x^3 - 2x}{4x^2 + 1}$', options: ['none', '$y = \\frac{1}{4}$', '$y = 0$', '$y = 4$'] },
            { label: '$\\dfrac{-2x^4 + x}{3x^4 - 9}$', options: ['$y = -\\frac{2}{3}$', '$y = \\frac{2}{3}$', '$y = 0$', 'none'] },
          ],
          correctAnswers: ['$y = 5$', '$y = 0$', 'none', '$y = -\\frac{2}{3}$'],
          hint1: 'First two: compare the degrees. Equal degrees use the leading-coefficient ratio; bottom-heavy gives $y = 0$.',
          hint2: 'Top-heavy ($n > d$) means no horizontal asymptote.',
          hint3: 'For $\\frac{-2x^4 + x}{3x^4 - 9}$ the degrees match at $4$, so the HA is $\\frac{-2}{3}$.',
          explanation: '$\\frac{5x^2-1}{x^2+3}$: equal degrees $\\Rightarrow y = 5$. $\\frac{8x}{x^2-7}$: bottom-heavy $\\Rightarrow y = 0$. $\\frac{x^3-2x}{4x^2+1}$: top-heavy $\\Rightarrow$ none. $\\frac{-2x^4+x}{3x^4-9}$: equal degrees $\\Rightarrow y = -\\frac{2}{3}$.',
        },
      },
      {
        id: 'rfa3-coeff-note',
        type: 'text' as const,
        content: `## Watch the Leading Coefficients

For the equal-degree case, the value of the horizontal asymptote is **just** the ratio of leading coefficients — the constant and lower-degree terms don't matter at infinity.

$$\\frac{a x^n + \\cdots}{b x^n + \\cdots} \\;\\xrightarrow[x \\to \\pm\\infty]{}\\; \\frac{a}{b}$$

> 💡 So $\\dfrac{10x^2 + 1}{5x^2 - 3}$ has HA $y = \\frac{10}{5} = 2$, regardless of the $+1$ and $-3$. Compute a couple of these in the drill below.`,
      },
      {
        id: 'rfa3-ha-drill',
        type: 'input-boxes' as const,
        content: `**Horizontal Asymptote Values** 🧮

Each function below has a horizontal asymptote $y = c$. Enter the value of $c$.

**1)** $f(x) = \\dfrac{10x^2 + 1}{5x^2 - 3}$, $\\;c = \\,?$
**2)** $g(x) = \\dfrac{9x - 4}{6x + 7}$, $\\;c = \\,?$  *(decimal or fraction)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', '3/2'],
          hint1: 'Both have equal degrees, so $c$ is the ratio of leading coefficients.',
          hint2: 'For $f$: $\\frac{10}{5} = 2$.',
          hint3: 'For $g$: $\\frac{9}{6} = \\frac{3}{2} = 1.5$ — either form is accepted.',
          explanation: '1) Equal degrees ($2$ and $2$): $c = \\frac{10}{5} = 2$.  2) Equal degrees ($1$ and $1$): $c = \\frac{9}{6} = \\frac{3}{2}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'rational-functions-asymptotes',
    sections: [
      {
        id: 'rfa4-intro',
        type: 'text' as const,
        content: `# ➗ Rational Functions and Asymptotes

**Part 4 of 7 — Slant (Oblique) Asymptotes**

---

> 🔑 **One Degree Too Big:** When the numerator's degree is **exactly one more** than the denominator's, there's no horizontal asymptote — instead the graph follows a **slanted line**. You find it with polynomial long division.`,
      },
      {
        id: 'rfa4-when',
        type: 'text' as const,
        content: `## When Does a Slant Asymptote Occur?

A **slant (oblique) asymptote** occurs exactly when

$$\\deg(\\text{numerator}) = \\deg(\\text{denominator}) + 1$$

That is, the top is **one degree higher** than the bottom.

| Degrees | Asymptote type |
|---------|----------------|
| $n < d$ | horizontal $y = 0$ |
| $n = d$ | horizontal (leading-coeff ratio) |
| $n = d + 1$ | **slant** |
| $n \\geq d + 2$ | neither (curved end behavior) |

> ⚠️ A function has **at most one** of {horizontal, slant} asymptote — never both. If you have a slant asymptote, there is no horizontal asymptote.`,
      },
      {
        id: 'rfa4-when-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which function has a slant asymptote?',
              options: ['$\\dfrac{x^2 + 3x - 1}{x - 4}$', '$\\dfrac{x + 3}{x^2 - 4}$', '$\\dfrac{2x^2 + 1}{5x^2 - 3}$', '$\\dfrac{x^3 + 1}{x - 1}$'],
              correctAnswer: 0,
              explanation: 'A slant asymptote needs the top degree exactly one more than the bottom. $\\frac{x^2+3x-1}{x-4}$ is degree $2$ over degree $1$ ($n = d+1$). The last option is degree $3$ over $1$ ($n = d+2$), so it has no slant asymptote.',
            },
          ],
        },
      },
      {
        id: 'rfa4-divide',
        type: 'text' as const,
        content: `## Finding It by Long Division

To find the slant asymptote, **divide** the numerator by the denominator. The **quotient** (ignoring the remainder) is the line $y = mx + b$.

### Worked Example: $f(x) = \\dfrac{x^2 + 3x + 2}{x - 1}$

Divide $x^2 + 3x + 2$ by $x - 1$:

$$\\frac{x^2 + 3x + 2}{x - 1} = x + 4 + \\frac{6}{x - 1}$$

Let's verify the division:
- $x \\cdot (x - 1) = x^2 - x$. Subtract: $(x^2 + 3x) - (x^2 - x) = 4x$.
- Bring down $+2$: $4x + 2$. Then $4 \\cdot (x-1) = 4x - 4$. Subtract: $(4x+2)-(4x-4) = 6$.

So the quotient is $x + 4$ with remainder $6$.

As $x \\to \\pm\\infty$, the term $\\dfrac{6}{x-1} \\to 0$, so the graph approaches the line

$$y = x + 4 \\quad \\text{(the slant asymptote)}$$

> 💡 The remainder term always dies off at infinity — that's *why* the quotient line is the asymptote.`,
      },
      {
        id: 'rfa4-divide-drill',
        type: 'input-boxes' as const,
        content: `**Find the Slant Asymptote** 🧮

Divide and read off the line $y = mx + b$.

For $f(x) = \\dfrac{x^2 - 5x + 3}{x - 2}$, the division gives $f(x) = (x - 3) - \\dfrac{3}{x-2}$.

**1)** Slope $m$ of the slant asymptote $= \\,?$
**2)** Intercept $b$ of the slant asymptote $= \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1', '-3'],
          hint1: 'The slant asymptote is the quotient, $y = x - 3$.',
          hint2: 'In $y = mx + b$, the coefficient of $x$ is the slope: $m = 1$.',
          hint3: 'The constant term of the quotient is the intercept: $b = -3$.',
          explanation: 'Long division of $x^2 - 5x + 3$ by $x - 2$ gives quotient $x - 3$, remainder $-3$. The slant asymptote is $y = x - 3$, so $m = 1$ and $b = -3$.',
        },
      },
      {
        id: 'rfa4-decision',
        type: 'text' as const,
        content: `## End-Behavior Decision Tree

Putting Parts 3 and 4 together, the **degree comparison** alone decides the entire end behavior:

| Compare $n$ to $d$ | End behavior |
|--------------------|--------------|
| $n < d$ | horizontal $y = 0$ |
| $n = d$ | horizontal $y = \\dfrac{\\text{lead}_{\\text{num}}}{\\text{lead}_{\\text{den}}}$ |
| $n = d + 1$ | **slant** line (do the division) |
| $n \\geq d + 2$ | no line — curved (polynomial-like) end behavior |

> 🔑 Check the degrees **first**, every time. Only when $n = d+1$ do you actually need to perform the long division.`,
      },
      {
        id: 'rfa4-dropdown',
        type: 'dropdown-select' as const,
        content: `**End-Behavior Round-Up** 🔽

For each function, choose the correct end-behavior asymptote.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{x^2 + 1}{x}$', options: ['slant $y = x$', 'horizontal $y = 0$', 'horizontal $y = 1$', 'none'] },
            { label: '$\\dfrac{3x + 2}{x - 5}$', options: ['horizontal $y = 3$', 'slant $y = 3x$', 'horizontal $y = 0$', 'none'] },
            { label: '$\\dfrac{x^4 - 1}{x^2 + 2}$', options: ['neither (curved)', 'slant $y = x^2$', 'horizontal $y = 1$', 'horizontal $y = 0$'] },
          ],
          correctAnswers: ['slant $y = x$', 'horizontal $y = 3$', 'neither (curved)'],
          hint1: '$\\frac{x^2+1}{x} = x + \\frac{1}{x}$, so the line is $y = x$.',
          hint2: 'Equal degrees give a horizontal asymptote at the leading-coefficient ratio.',
          hint3: 'When the top degree exceeds the bottom by $2$ or more ($\\frac{x^4}{x^2}$), there is no linear asymptote — the end behavior is curved.',
          explanation: '$\\frac{x^2+1}{x}$: $n = d+1 \\Rightarrow$ slant $y = x$. $\\frac{3x+2}{x-5}$: equal degrees $\\Rightarrow$ horizontal $y = 3$. $\\frac{x^4-1}{x^2+2}$: $n = d+2 \\Rightarrow$ neither (parabola-like end behavior).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'rational-functions-asymptotes',
    sections: [
      {
        id: 'rfa5-intro',
        type: 'text' as const,
        content: `# ➗ Rational Functions and Asymptotes

**Part 5 of 7 — Intercepts & Sign Analysis**

---

> 🔑 **The Remaining Anchors:** Asymptotes give the skeleton; **intercepts** and **sign analysis** tell you where the curve sits — above or below the $x$-axis in each region. Together they pin the graph down.`,
      },
      {
        id: 'rfa5-intercepts-teach',
        type: 'text' as const,
        content: `## Finding Intercepts

**$x$-intercepts (zeros):** set $f(x) = 0$. A fraction is zero only when its **numerator** is zero (and the denominator is **not** zero there).
- Solve $P(x) = 0$, then discard any solution that also makes $Q(x) = 0$ (that's a hole, not a zero).

**$y$-intercept:** plug in $x = 0$, i.e. compute $f(0)$ — as long as $x = 0$ is in the domain.

### Worked Example: $f(x) = \\dfrac{x - 3}{x + 1}$

- **$x$-intercept:** numerator $x - 3 = 0 \\Rightarrow x = 3$. Check: denominator at $x=3$ is $4 \\neq 0$. ✓ So $(3, 0)$.
- **$y$-intercept:** $f(0) = \\dfrac{0 - 3}{0 + 1} = \\dfrac{-3}{1} = -3$. So $(0, -3)$.

> ⚠️ A value that makes **both** top and bottom zero is **not** an $x$-intercept — it's a hole. Always check the denominator before declaring a zero.`,
      },
      {
        id: 'rfa5-intercepts-drill',
        type: 'input-boxes' as const,
        content: `**Find the Intercepts** 🧮

For $f(x) = \\dfrac{x + 4}{x - 2}$:

**1)** $x$-intercept: $x = \\,?$
**2)** $y$-intercept: $y = \\,?$  *(decimal or fraction is fine)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['-4', '-2'],
          hint1: 'Set the numerator $x + 4 = 0$, so $x = -4$. The denominator there is $-6 \\neq 0$, so it is a real intercept.',
          hint2: 'For the $y$-intercept, substitute $x = 0$: $f(0) = \\frac{0+4}{0-2} = \\frac{4}{-2}$.',
          hint3: 'Simplify $\\frac{4}{-2} = -2$, so the $y$-intercept is $-2$.',
          explanation: '$x$-intercept: $x + 4 = 0 \\Rightarrow x = -4$, giving $(-4, 0)$. $y$-intercept: $f(0) = \\frac{4}{-2} = -2$, giving $(0, -2)$.',
        },
      },
      {
        id: 'rfa5-sign-teach',
        type: 'text' as const,
        content: `## Sign Analysis

To know whether the curve is **above** ($+$) or **below** ($-$) the $x$-axis, mark every **$x$-intercept** and every **vertical asymptote** on a number line. These split the line into intervals. The sign of $f$ can only change at those marks.

Pick a **test point** in each interval and check the sign of $f$.

### Worked Example: $f(x) = \\dfrac{x - 1}{x + 2}$

Critical $x$-values: zero at $x = 1$, vertical asymptote at $x = -2$. Test each region:

| Interval | Test $x$ | $\\dfrac{x-1}{x+2}$ | Sign |
|----------|----------|---------------------|------|
| $x < -2$ | $x = -3$ | $\\dfrac{-4}{-1} = 4$ | $+$ |
| $-2 < x < 1$ | $x = 0$ | $\\dfrac{-1}{2}$ | $-$ |
| $x > 1$ | $x = 2$ | $\\dfrac{1}{4}$ | $+$ |

So the graph is above the axis for $x < -2$, below it between $-2$ and $1$, and above it again for $x > 1$.

> 💡 The sign tells you which way the graph escapes along each vertical asymptote: approaching $x = -2$ from the right, $f < 0$, so the branch dives to $-\\infty$.`,
      },
      {
        id: 'rfa5-sign-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $f(x) = \\dfrac{x - 1}{x + 2}$, what is the sign of $f$ on the interval $-2 < x < 1$?',
              options: ['Negative (below the $x$-axis)', 'Positive (above the $x$-axis)', 'Zero everywhere', 'Undefined everywhere'],
              correctAnswer: 0,
              explanation: 'Test $x = 0$: $\\frac{0-1}{0+2} = \\frac{-1}{2} < 0$. So $f$ is negative throughout $-2 < x < 1$.',
            },
            {
              question: 'Why are $x$-intercepts and vertical asymptotes the only places the sign of $f$ can change?',
              options: ['They are the only places a factor of $f$ can switch sign (pass through $0$ or $\\pm\\infty$)', 'They are the only places in the domain', 'The graph is always positive elsewhere', 'Sign never changes for rational functions'],
              correctAnswer: 0,
              explanation: 'A continuous expression changes sign only by passing through $0$ (an $x$-intercept) or through an undefined point (a vertical asymptote). Between consecutive such marks, every factor keeps a constant sign, so $f$ does too.',
            },
          ],
        },
      },
      {
        id: 'rfa5-sign-method',
        type: 'text' as const,
        content: `## The Sign-Analysis Routine

Here is the compact procedure you'll use on every graph:

1. Find the **$x$-intercepts** (zeros of the numerator) and **vertical asymptotes** (zeros of the denominator).
2. Mark them on a number line — they split it into intervals.
3. **Test one value** in each interval; the sign of $f$ there is the sign for the whole interval.

> 💡 You only need the **sign** of each test value, not its exact size — so just track whether each factor is positive or negative. Try the routine on the function below.`,
      },
      {
        id: 'rfa5-sign-drill',
        type: 'dropdown-select' as const,
        content: `**Determine Each Sign** 🔽

For $g(x) = \\dfrac{x}{x - 4}$ (zero at $x = 0$, vertical asymptote at $x = 4$), pick the sign of $g$ on each interval.`,
        exercise: {
          dropdowns: [
            { label: 'On $x < 0$ (test $x = -1$):', options: ['positive', 'negative', 'zero'] },
            { label: 'On $0 < x < 4$ (test $x = 1$):', options: ['negative', 'positive', 'zero'] },
            { label: 'On $x > 4$ (test $x = 5$):', options: ['positive', 'negative', 'zero'] },
          ],
          correctAnswers: ['positive', 'negative', 'positive'],
          hint1: 'At $x = -1$: $\\frac{-1}{-5} = \\frac{1}{5} > 0$.',
          hint2: 'At $x = 1$: $\\frac{1}{-3} = -\\frac{1}{3} < 0$.',
          hint3: 'At $x = 5$: $\\frac{5}{1} = 5 > 0$.',
          explanation: 'Testing one point per interval: $g(-1) = \\frac{1}{5} > 0$ (positive); $g(1) = -\\frac{1}{3} < 0$ (negative); $g(5) = 5 > 0$ (positive). The sign flips at the zero $x=0$ and at the VA $x=4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'rational-functions-asymptotes',
    sections: [
      {
        id: 'rfa6-intro',
        type: 'text' as const,
        content: `# ➗ Rational Functions and Asymptotes

**Part 6 of 7 — Putting It All Together: Sketching the Graph**

---

> 🔑 **The Full Recipe:** You now have every ingredient. Sketching a rational function is just running a checklist in order, then connecting the dots through the regions sign analysis hands you.`,
      },
      {
        id: 'rfa6-checklist',
        type: 'text' as const,
        content: `## The Graphing Checklist

| Step | What to do |
|------|------------|
| **1. Factor** | Factor numerator and denominator; cancel common factors (note **holes**). |
| **2. Domain / VAs** | Set the **simplified** denominator $= 0$ for **vertical asymptotes**. |
| **3. End behavior** | Use the **degree test** for a horizontal or slant asymptote. |
| **4. Intercepts** | Numerator $= 0$ for $x$-intercepts; $f(0)$ for the $y$-intercept. |
| **5. Sign analysis** | Test a point in each interval between intercepts and VAs. |
| **6. Sketch** | Draw asymptotes (dashed), plot intercepts and holes, connect through each region. |

> 💡 Do the steps **in order** — each one constrains the next, and by step 6 the shape is basically forced.`,
      },
      {
        id: 'rfa6-worked',
        type: 'text' as const,
        content: `## Full Worked Example: $f(x) = \\dfrac{x^2 - 4}{x^2 - x - 6}$

**Step 1 — Factor:**
$$f(x) = \\frac{(x-2)(x+2)}{(x-3)(x+2)}$$
The $(x+2)$ cancels $\\Rightarrow$ **hole at $x = -2$**. Simplified: $f(x) = \\dfrac{x-2}{x-3}$.

**Step 2 — Vertical asymptote:** simplified denominator $x - 3 = 0 \\Rightarrow$ **VA at $x = 3$**.

**Step 3 — End behavior:** equal degrees ($1$ and $1$), leading coefficients $\\frac{1}{1}$ $\\Rightarrow$ **HA $y = 1$**.

**Step 4 — Intercepts:**
- $x$-intercept: $x - 2 = 0 \\Rightarrow x = 2$, point $(2, 0)$.
- $y$-intercept: $f(0) = \\frac{-2}{-3} = \\frac{2}{3}$, point $\\left(0, \\tfrac{2}{3}\\right)$.

**Step 5 — Hole height:** in simplified $f$, at $x = -2$: $\\frac{-2-2}{-2-3} = \\frac{-4}{-5} = \\frac{4}{5}$, so the hole is at $\\left(-2, \\tfrac{4}{5}\\right)$.

> ✅ The graph is the curve $\\frac{x-2}{x-3}$ approaching $y = 1$ at the ends, breaking at $x = 3$, crossing the axis at $(2,0)$, with an open circle at $\\left(-2, \\tfrac{4}{5}\\right)$.`,
      },
      {
        id: 'rfa6-worked-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Based on the worked example $f(x) = \\dfrac{x^2 - 4}{x^2 - x - 6}$:`,
        exercise: {
          questions: [
            {
              question: 'How many vertical asymptotes does $f$ have?',
              options: ['One (at $x = 3$)', 'Two (at $x = 3$ and $x = -2$)', 'None', 'One (at $x = -2$)'],
              correctAnswer: 0,
              explanation: 'The factor $(x+2)$ cancels, making $x = -2$ a hole rather than an asymptote. Only $(x-3)$ remains in the denominator, so there is exactly one vertical asymptote, at $x = 3$.',
            },
            {
              question: 'What is the horizontal asymptote?',
              options: ['$y = 1$', '$y = 0$', '$y = -4$', 'none'],
              correctAnswer: 0,
              explanation: 'After simplifying to $\\frac{x-2}{x-3}$, the degrees are equal ($1$ and $1$) with leading coefficients $1$ and $1$, so the HA is $y = \\frac{1}{1} = 1$.',
            },
          ],
        },
      },
      {
        id: 'rfa6-simpler',
        type: 'text' as const,
        content: `## A Simpler Sketch: $h(x) = \\dfrac{2x}{x - 1}$

Not every function has a hole. Many are already in lowest terms, so the checklist is even quicker. For $h(x) = \\dfrac{2x}{x-1}$:

- **Vertical asymptote:** $x - 1 = 0 \\Rightarrow x = 1$.
- **Horizontal asymptote:** equal degrees, ratio $\\frac{2}{1} \\Rightarrow y = 2$.
- **$x$-intercept:** $2x = 0 \\Rightarrow x = 0$ — so the curve passes through the **origin** $(0,0)$, which is also the $y$-intercept.

> 💡 Two branches: one in the lower-left, one in the upper-right, each hugging the lines $x = 1$ and $y = 2$. Confirm the features yourself below.`,
      },
      {
        id: 'rfa6-match-features',
        type: 'dropdown-select' as const,
        content: `**Match the Function to Its Features** 🔽

For $h(x) = \\dfrac{2x}{x - 1}$, identify each feature.`,
        exercise: {
          dropdowns: [
            { label: 'Vertical asymptote:', options: ['$x = 1$', '$x = 0$', '$x = 2$', 'none'] },
            { label: 'Horizontal asymptote:', options: ['$y = 2$', '$y = 0$', '$y = 1$', 'none'] },
            { label: '$x$-intercept:', options: ['$(0, 0)$', '$(1, 0)$', '$(2, 0)$', 'none'] },
          ],
          correctAnswers: ['$x = 1$', '$y = 2$', '$(0, 0)$'],
          hint1: 'Set the denominator $x - 1 = 0$ for the vertical asymptote.',
          hint2: 'Equal degrees ($1$ and $1$): the HA is the leading-coefficient ratio $\\frac{2}{1}$.',
          hint3: 'The numerator $2x = 0$ at $x = 0$, which is also the $y$-intercept — the curve passes through the origin.',
          explanation: 'VA: $x - 1 = 0 \\Rightarrow x = 1$. HA: leading coefficients $\\frac{2}{1} \\Rightarrow y = 2$. $x$-intercept: $2x = 0 \\Rightarrow x = 0$, the point $(0,0)$.',
        },
      },
      {
        id: 'rfa6-yourturn',
        type: 'text' as const,
        content: `## Your Turn — Run the Whole Checklist

Time to drive the process yourself. For the next function, work through the steps in order: denominator $\\to$ vertical asymptote, degree test $\\to$ horizontal asymptote, numerator $\\to$ $x$-intercept.

> 🔑 Notice the leading coefficient of the numerator is **not** $1$ this time — that matters for the horizontal asymptote, since the ratio uses the actual leading coefficients.`,
      },
      {
        id: 'rfa6-full-drill',
        type: 'input-boxes' as const,
        content: `**Run the Checklist** 🧮

For $f(x) = \\dfrac{3x - 6}{x + 4}$:

**1)** Vertical asymptote: $x = \\,?$
**2)** Horizontal asymptote: $y = \\,?$
**3)** $x$-intercept: $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-4', '3', '2'],
          hint1: 'Denominator $x + 4 = 0 \\Rightarrow x = -4$ (it does not cancel).',
          hint2: 'Equal degrees, leading coefficients $\\frac{3}{1} = 3$, so the HA is $y = 3$.',
          hint3: 'Numerator $3x - 6 = 0 \\Rightarrow x = 2$.',
          explanation: 'VA: $x + 4 = 0 \\Rightarrow x = -4$. HA: $\\frac{3}{1} \\Rightarrow y = 3$. $x$-intercept: $3x - 6 = 0 \\Rightarrow x = 2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'rational-functions-asymptotes',
    sections: [
      {
        id: 'rfa7-intro',
        type: 'text' as const,
        content: `# ➗ Rational Functions and Asymptotes

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now find the **domain**, locate **vertical asymptotes & holes**, determine **horizontal & slant asymptotes**, compute **intercepts**, run a **sign analysis**, and **sketch** the whole graph. Let's put it all together.`,
      },
      {
        id: 'rfa7-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Feature | How to find it |
|---------|----------------|
| **Domain** | exclude $x$ where denominator $= 0$ |
| **Vertical asymptote** | zero of the **simplified** denominator |
| **Hole** | factor that **cancels** from top & bottom |
| **Horizontal asymptote** | degree test: $n<d \\Rightarrow y=0$; $n=d \\Rightarrow$ ratio; $n>d \\Rightarrow$ none |
| **Slant asymptote** | when $n = d+1$: quotient of long division |
| **$x$-intercept** | numerator $= 0$ (and denominator $\\neq 0$) |
| **$y$-intercept** | $f(0)$ |

> ⚠️ **Three traps to avoid:** (1) forgetting to **factor and cancel first**, (2) mixing up the degree cases, (3) calling a $\\frac{0}{0}$ point a zero when it is really a **hole**.`,
      },
      {
        id: 'rfa7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $f(x) = \\dfrac{x + 5}{x^2 - 16}$, what are the vertical asymptotes?',
              options: ['$x = 4$ and $x = -4$', '$x = -5$', '$x = 16$', '$x = 4$ only'],
              correctAnswer: 0,
              explanation: 'Factor the denominator: $x^2 - 16 = (x-4)(x+4)$. Neither factor cancels with the numerator $x + 5$, so both give vertical asymptotes: $x = 4$ and $x = -4$.',
            },
            {
              question: 'The function $f(x) = \\dfrac{x^2 - 1}{x + 1}$ has which feature at $x = -1$?',
              options: ['A hole', 'A vertical asymptote', 'An $x$-intercept', 'A horizontal asymptote'],
              correctAnswer: 0,
              explanation: '$\\frac{x^2-1}{x+1} = \\frac{(x-1)(x+1)}{x+1} = x - 1$. The $(x+1)$ cancels, so $x = -1$ is a hole, not an asymptote.',
            },
          ],
        },
      },
      {
        id: 'rfa7-bridge1',
        type: 'text' as const,
        content: `### From Recognizing to Computing

The questions above asked you to **recognize** features. The next drill asks you to **compute** them from scratch — multiple asymptotes in a single function. Factor the denominator, check nothing cancels, then apply the degree test.

> 💡 When the denominator is a difference of squares like $x^2 - 9$, expect **two** vertical asymptotes — one for each factor.`,
      },
      {
        id: 'rfa7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

For $f(x) = \\dfrac{2x^2 + 3}{x^2 - 9}$:

**1)** Smaller vertical asymptote: $x = \\,?$
**2)** Larger vertical asymptote: $x = \\,?$
**3)** Horizontal asymptote: $y = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-3', '3', '2'],
          hint1: 'Denominator $x^2 - 9 = (x-3)(x+3) = 0 \\Rightarrow x = \\pm 3$. Smaller is $-3$.',
          hint2: 'Larger vertical asymptote is $x = 3$.',
          hint3: 'Equal degrees ($2$ and $2$), leading coefficients $\\frac{2}{1} = 2$, so the HA is $y = 2$.',
          explanation: 'VAs: $x^2 - 9 = 0 \\Rightarrow x = -3, 3$. HA: equal degrees, ratio $\\frac{2}{1} = 2$, so $y = 2$. Nothing cancels, so both zeros of the denominator are true asymptotes.',
        },
      },
      {
        id: 'rfa7-bridge2',
        type: 'text' as const,
        content: `### The Sneaky One: a Hidden Cancellation

The trickiest functions look like they have an asymptote where they actually have a **hole**. The only way to be sure is to **factor the numerator too** and check for a common factor before you classify anything.

> ⚠️ If a denominator factor cancels, that location is a **hole**, not a vertical asymptote — and the leftover quotient may itself be the asymptote line.`,
      },
      {
        id: 'rfa7-dropdown',
        type: 'dropdown-select' as const,
        content: `**Full Feature Identification** 🔽

For $f(x) = \\dfrac{x^2 - x - 6}{x + 2}$, work out each feature. *(Hint: factor the numerator first.)*`,
        exercise: {
          dropdowns: [
            { label: 'At $x = -2$ there is a:', options: ['hole', 'vertical asymptote', 'horizontal asymptote', '$x$-intercept'] },
            { label: 'End-behavior asymptote:', options: ['slant $y = x - 3$', 'horizontal $y = 1$', 'horizontal $y = 0$', 'slant $y = x + 3$'] },
            { label: 'Simplified form of $f$:', options: ['$x - 3$', '$x + 3$', '$x - 2$', '$x + 2$'] },
          ],
          correctAnswers: ['hole', 'slant $y = x - 3$', '$x - 3$'],
          hint1: 'Factor the numerator: $x^2 - x - 6 = (x-3)(x+2)$.',
          hint2: 'The $(x+2)$ cancels with the denominator, so $f(x) = x - 3$ (for $x \\neq -2$) — that is the line it follows.',
          hint3: 'Since $f$ simplifies to the line $x - 3$ with a single point removed, $x = -2$ is a hole and the "slant asymptote" is the line $y = x - 3$ itself.',
          explanation: '$f(x) = \\frac{(x-3)(x+2)}{x+2} = x - 3$ for $x \\neq -2$. So there is a hole at $x = -2$, the simplified function is $x - 3$, and the graph is the line $y = x - 3$ (a slant) with one point removed.',
        },
      },
      {
        id: 'rfa7-wrapup',
        type: 'text' as const,
        content: `## You've Got the Full Toolkit

You can now take any rational function and read off its **domain**, **holes**, **vertical asymptotes**, **horizontal or slant asymptote**, **intercepts**, and **sign behavior** — everything you need to sketch it.

> 🔑 The single most important habit: **factor and simplify first.** Almost every mistake on this topic comes from skipping that step. One last quiz to lock it in.`,
      },
      {
        id: 'rfa7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the horizontal asymptote of $f(x) = \\dfrac{7x^2 - 2}{2x^2 + x + 5}$?',
              options: ['$y = \\frac{7}{2}$', '$y = 0$', '$y = 7$', 'none'],
              correctAnswer: 0,
              explanation: 'The degrees are equal ($2$ and $2$), so the horizontal asymptote is the ratio of leading coefficients: $\\frac{7}{2}$.',
            },
            {
              question: 'Which feature does $g(x) = \\dfrac{4}{x^2 + 1}$ have?',
              options: ['Horizontal asymptote $y = 0$ and no vertical asymptote', 'A vertical asymptote at $x = 1$', 'A slant asymptote', 'A hole at $x = 0$'],
              correctAnswer: 0,
              explanation: 'The bottom is bigger ($0 < 2$), so the HA is $y = 0$. And $x^2 + 1 = 0$ has no real solution, so there is no vertical asymptote.',
            },
            {
              question: 'The function $h(x) = \\dfrac{x^2 + 2x}{x + 2}$ simplifies and has:',
              options: ['A hole at $x = -2$ (it reduces to $y = x$)', 'A vertical asymptote at $x = -2$', 'A horizontal asymptote $y = 1$', 'No $x$-intercept'],
              correctAnswer: 0,
              explanation: '$h(x) = \\frac{x(x+2)}{x+2} = x$ for $x \\neq -2$. The $(x+2)$ cancels, so $x = -2$ is a hole and the graph is the line $y = x$ with one point removed.',
            },
          ],
        },
      },
    ],
  },
]
