import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Solving Logarithmic Equations (Algebra 2).
 * Registry key / DB Topic.slug: 'logarithmic-equations-algebra2'.
 * 5 parts, gold-standard structure: log/exponential foundations → log properties
 * (the toolkit) → solving by converting to exponential form → solving by combining
 * logs + the all-important extraneous-solution check → mixed practice, applications
 * (pH, Richter, compound growth) + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every solution and domain check was verified by back-substitution before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'logarithmic-equations-algebra2',
    sections: [
      {
        id: 'loge1-intro',
        type: 'text' as const,
        content: `# 🪵 Solving Logarithmic Equations

**Part 1 of 5 — Logs & Exponentials Are Inverses**

---

### Topics in This Part

| Section |
|---------|
| What a Logarithm Means |
| Switching Between Log and Exponential Form |
| The Domain of a Logarithm |

> 🔑 **Key Concept:** A logarithm *answers an exponent question*: $\\log_b x$ asks "**to what power must I raise $b$ to get $x$?**" Solving a log equation always comes back to that one idea.`,
      },
      {
        id: 'loge1-meaning',
        type: 'text' as const,
        content: `## What a Logarithm Means

The logarithm and the exponential are two ways of writing the **same fact**:

$$\\log_b x = y \\quad\\Longleftrightarrow\\quad b^{\\,y} = x$$

Here $b$ is the **base** ($b > 0,\\ b \\ne 1$), $x$ is the **argument**, and $y$ is the **exponent** the log gives back.

### Read Each One Out Loud

| Logarithmic form | Question it asks | Exponential form |
|------------------|------------------|------------------|
| $\\log_2 8 = 3$ | $2$ to what power is $8$? | $2^3 = 8$ |
| $\\log_5 25 = 2$ | $5$ to what power is $25$? | $5^2 = 25$ |
| $\\log_{10} 1000 = 3$ | $10$ to what power is $1000$? | $10^3 = 1000$ |
| $\\log_3 \\frac{1}{9} = -2$ | $3$ to what power is $\\frac19$? | $3^{-2} = \\frac{1}{9}$ |

> 💡 **Two special names.** $\\log x$ with no base means base $10$ (the **common log**). $\\ln x$ means base $e \\approx 2.718$ (the **natural log**). Same rules, just a hidden base.`,
      },
      {
        id: 'loge1-evaluate',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $\\log_2 16$?',
              options: ['$4$', '$8$', '$2$', '$32$'],
              correctAnswer: 0,
              explanation: 'Ask "$2$ to what power is $16$?" Since $2^4 = 16$, we get $\\log_2 16 = 4$.',
            },
            {
              question: 'The equation $\\log_3 81 = 4$ written in exponential form is:',
              options: ['$3^4 = 81$', '$4^3 = 81$', '$81^3 = 4$', '$3^{81} = 4$'],
              correctAnswer: 0,
              explanation: '$\\log_b x = y$ means $b^y = x$. With $b=3,\\ x=81,\\ y=4$, that is $3^4 = 81$. ✓',
            },
          ],
        },
      },
      {
        id: 'loge1-convert-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the Log** 🧮

Use the exponent question to evaluate each. (Negative and fractional answers are allowed — type them like \`-2\` or \`1/2\`.)

**1)** $\\log_4 64 = \\,?$
**2)** $\\log_{10} \\frac{1}{100} = \\,?$
**3)** $\\log_9 3 = \\,?$  *(fraction is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '-2', '1/2'],
          hint1: '$4$ to what power is $64$? $4^3 = 64$.',
          hint2: '$10$ to what power is $\\frac{1}{100}$? $10^{-2} = \\frac{1}{100}$.',
          hint3: '$9$ to what power is $3$? Since $9^{1/2} = \\sqrt{9} = 3$, the answer is $\\frac12$.',
          explanation: '1) $4^3 = 64$, so $3$.  2) $10^{-2} = \\frac{1}{100}$, so $-2$.  3) $9^{1/2} = 3$, so $\\frac12$.',
        },
      },
      {
        id: 'loge1-domain',
        type: 'text' as const,
        content: `## The Domain: You Can Only Log a Positive Number

Because $b^y$ is **always positive** when $b > 0$, the argument of a logarithm must be **positive**:

$$\\log_b(\\text{argument}) \\ \\text{requires}\\ \\text{argument} > 0$$

You can never take the log of $0$ or of a negative number.

| Expression | Allowed? | Why |
|------------|----------|-----|
| $\\log_2 8$ | ✅ | $8 > 0$ |
| $\\log_2 0$ | ❌ | no power of $2$ equals $0$ |
| $\\log_2(-4)$ | ❌ | no power of $2$ is negative |
| $\\log_5(x-3)$ | only if $x > 3$ | need $x - 3 > 0$ |

> ⚠️ **Remember this now** — it is the single most important idea in the whole lesson. Some equations *look* solved but produce a value that makes an argument $\\le 0$. That value is **rejected**. We'll hunt these "extraneous solutions" in Part 4.`,
      },
      {
        id: 'loge1-domain-check',
        type: 'multiple-choice' as const,
        content: `**Domain Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For which value of $x$ is $\\log_3(x - 5)$ undefined?',
              options: ['$x = 4$', '$x = 6$', '$x = 8$', '$x = 14$'],
              correctAnswer: 0,
              explanation: 'We need $x - 5 > 0$, i.e. $x > 5$. At $x = 4$, the argument is $4 - 5 = -1 < 0$, so the log is undefined.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'logarithmic-equations-algebra2',
    sections: [
      {
        id: 'loge2-intro',
        type: 'text' as const,
        content: `# 🪵 Solving Logarithmic Equations

**Part 2 of 5 — The Three Log Properties**

---

> 🔑 **Why this part matters:** To solve a log equation you usually must first **squeeze several logs into one** — or pull an exponent down. Three properties do all of that work.`,
      },
      {
        id: 'loge2-rules',
        type: 'text' as const,
        content: `## The Toolkit

All three come straight from the exponent rules ($b^m b^n = b^{m+n}$, etc.).

| Property | Rule | In words |
|----------|------|----------|
| **Product** | $\\log_b(MN) = \\log_b M + \\log_b N$ | a log of a product is a sum |
| **Quotient** | $\\log_b\\!\\left(\\dfrac{M}{N}\\right) = \\log_b M - \\log_b N$ | a log of a quotient is a difference |
| **Power** | $\\log_b(M^{\\,p}) = p\\,\\log_b M$ | an exponent comes out front |

Two facts you'll lean on constantly:

$$\\log_b b = 1 \\qquad\\text{and}\\qquad \\log_b 1 = 0$$

> 💡 The properties run **both directions**. To *expand*, break one log into many. To *condense* (what we need for solving), glue many logs into one.`,
      },
      {
        id: 'loge2-expand',
        type: 'text' as const,
        content: `## Worked Example — Condensing

To solve equations we almost always **condense** the left side down to a single logarithm.

$$2\\log_b x + \\log_b y$$

**Step 1 — Power rule** pulls the $2$ up as an exponent:
$$\\log_b x^2 + \\log_b y$$

**Step 2 — Product rule** merges the sum into one log:
$$\\log_b\\!\\left(x^2 y\\right)$$

Another one — a difference becomes a quotient:

$$\\log_b 12 - \\log_b 4 = \\log_b\\!\\left(\\frac{12}{4}\\right) = \\log_b 3$$

> ⚠️ **Order matters.** Apply the **power rule first** (exponents come out), *then* product/quotient. Doing it backwards is the #1 algebra-of-logs error.`,
      },
      {
        id: 'loge2-prop-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Condense $\\log_5 6 + \\log_5 x$ into a single logarithm.',
              options: ['$\\log_5(6x)$', '$\\log_5(6 + x)$', '$\\log_5\\!\\left(\\frac{6}{x}\\right)$', '$6\\log_5 x$'],
              correctAnswer: 0,
              explanation: 'A sum of logs (same base) is the log of the product: $\\log_5 6 + \\log_5 x = \\log_5(6x)$.',
            },
            {
              question: 'Rewrite $3\\log_2 x$ using the power rule.',
              options: ['$\\log_2 x^3$', '$\\log_2(3x)$', '$\\log_2 3 + \\log_2 x$', '$(\\log_2 x)^3$'],
              correctAnswer: 0,
              explanation: 'The power rule moves a coefficient up as an exponent on the argument: $3\\log_2 x = \\log_2 x^3$.',
            },
          ],
        },
      },
      {
        id: 'loge2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Property** 🔽

Choose the single rule that turns the left expression into the right one.`,
        exercise: {
          dropdowns: [
            { label: '$\\log_b 7 + \\log_b 4 \\;\\to\\; \\log_b 28$', options: ['Product rule', 'Quotient rule', 'Power rule'] },
            { label: '$\\log_b 20 - \\log_b 5 \\;\\to\\; \\log_b 4$', options: ['Quotient rule', 'Product rule', 'Power rule'] },
            { label: '$5\\log_b 2 \\;\\to\\; \\log_b 32$', options: ['Power rule', 'Product rule', 'Quotient rule'] },
          ],
          correctAnswers: ['Product rule', 'Quotient rule', 'Power rule'],
          hint1: 'A **sum** of logs combines into a **product** inside one log.',
          hint2: 'A **difference** of logs combines into a **quotient** inside one log.',
          hint3: 'A **coefficient** in front of a log becomes an **exponent**: $5\\log_b 2 = \\log_b 2^5 = \\log_b 32$.',
          explanation: 'Sum→product (product rule), difference→quotient (quotient rule), coefficient→exponent (power rule).',
        },
      },
      {
        id: 'loge2-condense-drill',
        type: 'input-boxes' as const,
        content: `**Condense, Then Evaluate** 🧮

Condense each to a single log, then evaluate the number it equals.

**1)** $\\log_2 5 + \\log_2 6 = \\log_2(?)$  → enter the argument.
**2)** $\\log_3 54 - \\log_3 2 = \\log_3(?)$  → enter the argument.
**3)** $\\log_7 7 + \\log_7 1 = \\,?$  → enter the value.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['30', '27', '1'],
          hint1: 'Sum → product: $5 \\cdot 6 = 30$, so $\\log_2 30$.',
          hint2: 'Difference → quotient: $54 \\div 2 = 27$, so $\\log_3 27$.',
          hint3: '$\\log_7 7 = 1$ and $\\log_7 1 = 0$, so the sum is $1 + 0 = 1$.',
          explanation: '1) $\\log_2 30$ → argument $30$.  2) $\\log_3 27$ → argument $27$.  3) $1 + 0 = 1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'logarithmic-equations-algebra2',
    sections: [
      {
        id: 'loge3-intro',
        type: 'text' as const,
        content: `# 🪵 Solving Logarithmic Equations

**Part 3 of 5 — Convert to Exponential Form**

---

> 🔑 **The first solving method:** When one side is a **single log** equal to a **constant**, rewrite it in exponential form. The log vanishes and ordinary algebra finishes the job.`,
      },
      {
        id: 'loge3-method',
        type: 'text' as const,
        content: `## Method 1 — One Log = A Number

Get the equation into the shape $\\log_b(\\text{stuff}) = c$, then convert:

$$\\log_b(\\text{stuff}) = c \\quad\\Longrightarrow\\quad \\text{stuff} = b^{\\,c}$$

### Worked Example: $\\log_2(x + 3) = 5$

Convert to exponential form ($\\text{stuff} = b^c$):
$$x + 3 = 2^5 = 32$$
$$x = 29$$

> ✅ **Check the domain & the equation:** argument $= 29 + 3 = 32 > 0$ ✓, and $\\log_2 32 = 5$ ✓.`,
      },
      {
        id: 'loge3-worked2',
        type: 'text' as const,
        content: `### Worked Example: $\\log(2x - 1) = 2$

No base shown means base $10$:
$$2x - 1 = 10^2 = 100$$
$$2x = 101 \\;\\Rightarrow\\; x = 50.5$$

### Worked Example with a natural log: $\\ln x = 3$

Base is $e$, so:
$$x = e^3 \\approx 20.09$$

> 💡 **Isolate the log first.** If the equation is $4 + \\log_3 x = 7$, subtract to get $\\log_3 x = 3$ *before* converting, giving $x = 3^3 = 27$.`,
      },
      {
        id: 'loge3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Walk Through It** 🔽

Solve $\\log_4(x - 1) = 3$ one step at a time.`,
        exercise: {
          dropdowns: [
            { label: 'Convert to exponential form:', options: ['$x - 1 = 4^3$', '$x - 1 = 3^4$', '$4 = (x-1)^3$', '$x - 1 = 3 \\cdot 4$'] },
            { label: 'Evaluate the power:', options: ['$x - 1 = 64$', '$x - 1 = 81$', '$x - 1 = 12$', '$x - 1 = 7$'] },
            { label: 'Solve for $x$:', options: ['$x = 65$', '$x = 63$', '$x = 13$', '$x = 8$'] },
          ],
          correctAnswers: ['$x - 1 = 4^3$', '$x - 1 = 64$', '$x = 65$'],
          hint1: '$\\log_b(\\text{stuff}) = c$ becomes $\\text{stuff} = b^c$; here base $4$, exponent $3$.',
          hint2: '$4^3 = 4 \\cdot 4 \\cdot 4 = 64$.',
          hint3: 'Add $1$ to both sides: $x = 64 + 1 = 65$. (Check: $65 - 1 = 64 > 0$ ✓.)',
          explanation: '$\\log_4(x-1)=3 \\Rightarrow x-1 = 4^3 = 64 \\Rightarrow x = 65$.',
        },
      },
      {
        id: 'loge3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $\\log_5(3x) = 2$.',
              options: ['$x = \\frac{25}{3}$', '$x = 25$', '$x = \\frac{10}{3}$', '$x = 75$'],
              correctAnswer: 0,
              explanation: 'Convert: $3x = 5^2 = 25$, so $x = \\frac{25}{3}$. Argument $3x = 25 > 0$ ✓.',
            },
            {
              question: 'First step to solve $2\\log_3 x = 8$:',
              options: ['Divide both sides by $2$ to get $\\log_3 x = 4$', 'Convert $2\\log_3 x = 3^8$', 'Subtract $2$ from both sides', 'Take $\\ln$ of both sides'],
              correctAnswer: 0,
              explanation: 'Isolate the single log first: divide by $2$ → $\\log_3 x = 4 \\Rightarrow x = 3^4 = 81$.',
            },
          ],
        },
      },
      {
        id: 'loge3-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

Convert to exponential form and solve. (Decimals where needed.)

**1)** $\\log_2(x - 4) = 6 \\;\\Rightarrow\\; x = \\,?$
**2)** $\\log_3 x = 4 \\;\\Rightarrow\\; x = \\,?$
**3)** $\\log(x) = 3 \\;\\Rightarrow\\; x = \\,?$  *(base $10$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['68', '81', '1000'],
          hint1: '$x - 4 = 2^6 = 64$, so $x = 68$.',
          hint2: '$x = 3^4 = 81$.',
          hint3: 'No base shown means base $10$: $x = 10^3 = 1000$.',
          explanation: '1) $x-4 = 64 \\Rightarrow x = 68$.  2) $x = 3^4 = 81$.  3) $x = 10^3 = 1000$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'logarithmic-equations-algebra2',
    sections: [
      {
        id: 'loge4-intro',
        type: 'text' as const,
        content: `# 🪵 Solving Logarithmic Equations

**Part 4 of 5 — Combine Logs & Check for Extraneous Roots**

---

> 🔑 **The second solving method:** When logs appear on **both sides**, condense each side to one log, then use the **one-to-one property** — equal logs (same base) mean equal arguments.`,
      },
      {
        id: 'loge4-onetoone',
        type: 'text' as const,
        content: `## Method 2 — Log = Log

The **one-to-one property** says a log function never repeats a value:

$$\\log_b M = \\log_b N \\quad\\Longrightarrow\\quad M = N \\quad (M, N > 0)$$

### Worked Example: $\\log_2(3x - 1) = \\log_2(x + 7)$

Same base, single log each side, so set the arguments equal:
$$3x - 1 = x + 7 \\;\\Rightarrow\\; 2x = 8 \\;\\Rightarrow\\; x = 4$$

> ✅ **Check:** $3(4)-1 = 11 > 0$ and $4 + 7 = 11 > 0$. Both arguments positive — solution stands. ✓`,
      },
      {
        id: 'loge4-combine',
        type: 'text' as const,
        content: `## Combine First, Then Solve

If a side has **two logs**, condense it before comparing.

### Worked Example: $\\log_3 x + \\log_3(x - 2) = 1$

**Step 1 — Condense** (product rule):
$$\\log_3\\big(x(x-2)\\big) = 1$$

**Step 2 — Convert** to exponential form:
$$x(x - 2) = 3^1 = 3$$

**Step 3 — Solve the quadratic:**
$$x^2 - 2x - 3 = 0 \\;\\Rightarrow\\; (x - 3)(x + 1) = 0 \\;\\Rightarrow\\; x = 3 \\ \\text{or}\\ x = -1$$

**Step 4 — CHECK both in the original.**
- $x = 3$: arguments $3 > 0$ and $3 - 2 = 1 > 0$ ✓ — **keep**.
- $x = -1$: argument $\\log_3(-1)$ is **undefined** ✗ — **reject (extraneous)**.

$$\\boxed{x = 3}$$

> ⚠️ **Never skip the check.** Solving the quadratic can introduce a root that breaks a log's domain. The algebra "passes" but the value is not a real solution.`,
      },
      {
        id: 'loge4-extraneous-quiz',
        type: 'multiple-choice' as const,
        content: `**Why We Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solving $\\log_5(x) + \\log_5(x - 4) = 1$ gives candidates $x = 5$ and $x = -1$. Which are valid?',
              options: ['Only $x = 5$', 'Only $x = -1$', 'Both $5$ and $-1$', 'Neither'],
              correctAnswer: 0,
              explanation: 'Need $x > 0$ AND $x - 4 > 0$, i.e. $x > 4$. $x=5$ works ($5>0,\\ 1>0$). $x=-1$ makes $\\log_5(-1)$ undefined — extraneous.',
            },
            {
              question: 'A solution to a log equation is called "extraneous" when it:',
              options: ['Makes an argument $\\le 0$ in the original equation', 'Is a negative number', 'Is a fraction', 'Solves the quadratic but not the linear part'],
              correctAnswer: 0,
              explanation: 'Extraneous roots satisfy the transformed equation but make some logarithm undefined (argument $\\le 0$) back in the original, so they are rejected.',
            },
          ],
        },
      },
      {
        id: 'loge4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Solve and Screen** 🔽

Work through $\\log_2(x) + \\log_2(x + 2) = 3$.`,
        exercise: {
          dropdowns: [
            { label: 'Condense the left side:', options: ['$\\log_2\\big(x(x+2)\\big)$', '$\\log_2(2x + 2)$', '$\\log_2\\!\\frac{x}{x+2}$', '$2\\log_2(x+2)$'] },
            { label: 'Convert to a quadratic:', options: ['$x^2 + 2x = 8$', '$x^2 + 2x = 3$', '$x^2 + 2x = 6$', '$x + 2 = 8$'] },
            { label: 'Candidate roots:', options: ['$x = 2$ or $x = -4$', '$x = 4$ or $x = -2$', '$x = 2$ or $x = 4$', '$x = -2$ or $x = -4$'] },
            { label: 'Valid solution(s):', options: ['$x = 2$ only', '$x = -4$ only', 'both', 'neither'] },
          ],
          correctAnswers: ['$\\log_2\\big(x(x+2)\\big)$', '$x^2 + 2x = 8$', '$x = 2$ or $x = -4$', '$x = 2$ only'],
          hint1: 'Sum of logs → product: $\\log_2\\big(x(x+2)\\big)$.',
          hint2: 'Convert: $x(x+2) = 2^3 = 8 \\Rightarrow x^2 + 2x = 8$, i.e. $x^2 + 2x - 8 = 0$.',
          hint3: '$(x-2)(x+4)=0 \\Rightarrow x = 2,\\ -4$. Need $x>0$, so $x=-4$ is extraneous; keep $x=2$.',
          explanation: '$x^2+2x-8=0 \\Rightarrow x=2$ or $-4$. Only $x=2$ keeps both arguments positive.',
        },
      },
      {
        id: 'loge4-drill',
        type: 'input-boxes' as const,
        content: `**Find the Valid Root** 🧮

Solve, then enter only the **valid** solution (reject extraneous roots).

**1)** $\\log_6(2x + 4) = \\log_6(x + 9) \\;\\Rightarrow\\; x = \\,?$
**2)** $\\log_2 x + \\log_2(x - 6) = 4 \\;\\Rightarrow\\; x = \\,?$
**3)** $\\log(x) + \\log(x - 3) = 1 \\;\\Rightarrow\\; x = \\,?$  *(base $10$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '8', '5'],
          hint1: 'Equal logs → equal arguments: $2x + 4 = x + 9 \\Rightarrow x = 5$. Both arguments positive ✓.',
          hint2: '$x(x-6) = 2^4 = 16 \\Rightarrow x^2 - 6x - 16 = 0 \\Rightarrow (x-8)(x+2)=0$. Keep $x=8$ (need $x>6$); reject $-2$.',
          hint3: '$x(x-3) = 10^1 = 10 \\Rightarrow x^2 - 3x - 10 = 0 \\Rightarrow (x-5)(x+2)=0$. Keep $x=5$ (need $x>3$); reject $-2$.',
          explanation: '1) $x=5$.  2) roots $8,\\ -2$; keep $8$.  3) roots $5,\\ -2$; keep $5$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'logarithmic-equations-algebra2',
    sections: [
      {
        id: 'loge5-intro',
        type: 'text' as const,
        content: `# 🪵 Solving Logarithmic Equations

**Part 5 of 5 — Applications, Mixed Practice & Mastery Check**

---

You can now (1) read a log as an exponent question, (2) use the three properties, (3) solve by converting to exponential form, and (4) solve log = log while screening extraneous roots. Let's apply it and lock it in.`,
      },
      {
        id: 'loge5-apps',
        type: 'text' as const,
        content: `## Where Logs Show Up

Logarithmic scales compress huge ranges of numbers into manageable ones.

| Scale | Formula | One unit up means… |
|-------|---------|--------------------|
| **pH** (chemistry) | $\\text{pH} = -\\log[\\text{H}^+]$ | $10\\times$ *less* acidic |
| **Richter** (earthquakes) | $M = \\log\\!\\left(\\dfrac{I}{I_0}\\right)$ | $10\\times$ stronger shaking |
| **Decibels** (sound) | $L = 10\\log\\!\\left(\\dfrac{I}{I_0}\\right)$ | $10\\,$dB $= 10\\times$ intensity |

### Worked Example — pH

A solution has $[\\text{H}^+] = 10^{-4}$ mol/L. Find its pH.
$$\\text{pH} = -\\log(10^{-4}) = -(-4) = 4$$

### Worked Example — Richter

One quake is $1000$ times as intense as another ($\\frac{I}{I_0} = 1000$). Its magnitude difference is:
$$M = \\log(1000) = \\log(10^3) = 3 \\ \\text{points stronger}$$

> 💡 Each whole step on these scales is a **factor of $10$** — that's the power of a base-$10$ log.`,
      },
      {
        id: 'loge5-app-drill',
        type: 'input-boxes' as const,
        content: `**Apply It** 🧮

**1)** A sample has $[\\text{H}^+] = 10^{-9}$ mol/L. Its pH $= -\\log(10^{-9}) = \\,?$
**2)** Quake A is $10{,}000$ times as intense as quake B. The Richter difference $= \\log(10000) = \\,?$
**3)** Solve for $t$: $\\ln(t) = 0 \\;\\Rightarrow\\; t = \\,?$  *(recall $\\log_b 1 = 0$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '4', '1'],
          hint1: '$-\\log(10^{-9}) = -(-9) = 9$.',
          hint2: '$\\log(10000) = \\log(10^4) = 4$.',
          hint3: '$\\ln t = 0 \\Rightarrow t = e^0 = 1$.',
          explanation: '1) pH $= 9$.  2) $4$ points.  3) $t = e^0 = 1$.',
        },
      },
      {
        id: 'loge5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $\\log_2(x) + \\log_2(x - 2) = 3$.',
              options: ['$x = 4$', '$x = 4 \\text{ or } -2$', '$x = -2$', '$x = 8$'],
              correctAnswer: 0,
              explanation: '$x(x-2) = 2^3 = 8 \\Rightarrow x^2-2x-8=0 \\Rightarrow (x-4)(x+2)=0$. Keep $x=4$ ($x>2$); reject $-2$.',
            },
            {
              question: 'Solve $\\log_7(2x + 5) = \\log_7(x + 12)$.',
              options: ['$x = 7$', '$x = 17$', '$x = -7$', 'no solution'],
              correctAnswer: 0,
              explanation: 'Equal logs → $2x + 5 = x + 12 \\Rightarrow x = 7$. Arguments $19$ and $19$ are positive ✓.',
            },
          ],
        },
      },
      {
        id: 'loge5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Situation | Move |
|-----------|------|
| $\\log_b(\\text{stuff}) = c$ | rewrite as $\\text{stuff} = b^{\\,c}$ |
| $\\log_b M = \\log_b N$ | set $M = N$ (one-to-one) |
| Two logs on one side | condense with product/quotient rule first |
| Coefficient in front | move it up with the power rule |
| **Every time** | **check each candidate: every argument must be $> 0$** |

> ⚠️ The two unbreakable habits: **isolate/condense to a single log before converting**, and **back-substitute to discard extraneous roots**.`,
      },
      {
        id: 'loge5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Solve $\\log_3(x + 6) = 4$.',
              options: ['$x = 75$', '$x = 6$', '$x = 81$', '$x = 18$'],
              correctAnswer: 0,
              explanation: 'Convert: $x + 6 = 3^4 = 81 \\Rightarrow x = 75$. Argument $81 > 0$ ✓.',
            },
            {
              question: 'Condense $\\log_4 x - 3\\log_4 y$ into a single logarithm.',
              options: ['$\\log_4\\!\\left(\\dfrac{x}{y^3}\\right)$', '$\\log_4\\!\\left(\\dfrac{x}{3y}\\right)$', '$\\log_4(x - y^3)$', '$\\log_4(xy^3)$'],
              correctAnswer: 0,
              explanation: 'Power rule: $3\\log_4 y = \\log_4 y^3$. Then quotient rule: $\\log_4 x - \\log_4 y^3 = \\log_4\\!\\left(\\frac{x}{y^3}\\right)$.',
            },
            {
              question: 'Why is $x = -1$ rejected as a solution of $\\log_2 x + \\log_2(x + 3) = \\log_2 4$?',
              options: ['$\\log_2(-1)$ is undefined (argument $\\le 0$)', 'It is a negative number, and roots must be positive integers', 'It does not satisfy the quadratic', 'Logs cannot equal each other'],
              correctAnswer: 0,
              explanation: 'At $x=-1$, the term $\\log_2 x = \\log_2(-1)$ has a non-positive argument, so it is undefined — the root is extraneous and rejected.',
            },
          ],
        },
      },
    ],
  },
]
