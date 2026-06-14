import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // partTitle: "What Is Scientific Notation?"
  // ============================================================
  {
    topicSlug: 'scientific-notation-grade8',
    sections: [
      {
        id: 'p1-why-we-need-it',
        type: 'text',
        content: `## Why Do We Need Scientific Notation? 🔭

Some numbers are **enormous**, and some are **tiny**. Writing them out the long way is slow and easy to mess up.

- The Sun is about $93{,}000{,}000$ miles from Earth.
- A single red blood cell is about $0.000007$ meters wide.

Counting all those zeros is painful — and one missing zero changes the number completely! **Scientific notation** is a shortcut that lets us write very large and very small numbers compactly and clearly.

The big idea: instead of writing lots of zeros, we use a **power of 10** to keep track of them for us.`,
      },
      {
        id: 'p1-the-form',
        type: 'text',
        content: `## The Form of Scientific Notation ✍️

Every number in scientific notation looks like this:

$$a \\times 10^n$$

There are **two strict rules** for the parts:

- **The number $a$** must be at least $1$ but less than $10$. In math symbols: $1 \\le |a| < 10$. So $a$ has exactly **one nonzero digit** to the left of the decimal point (like $5.6$, $3.4$, or $7$).
- **The exponent $n$** must be an **integer** (a whole number, which can be positive, negative, or zero).

| Part | Name | Rule |
|------|------|------|
| $a$ | the **coefficient** | $1 \\le |a| < 10$ |
| $10^n$ | the **power of 10** | $n$ is an integer |

**Examples that follow the rules:**

- $5.6 \\times 10^6$ ✅ (since $5.6$ is between $1$ and $10$)
- $3.4 \\times 10^{-6}$ ✅

**Examples that break the rules:**

- $56 \\times 10^5$ ❌ ($56$ is not less than $10$)
- $0.4 \\times 10^7$ ❌ ($0.4$ is less than $1$)`,
      },
      {
        id: 'p1-big-and-small',
        type: 'text',
        content: `## Large Numbers vs. Small Numbers 📏

The **sign of the exponent** tells you whether the number is big or small.

**Large numbers** (bigger than 10) use a **positive** exponent. To convert, move the decimal point **left** until only one digit is in front of it, then count the jumps.

$$5{,}600{,}000 = 5.6 \\times 10^6$$

The decimal moved **6 places to the left**, so the exponent is $+6$.

**Small numbers** (between 0 and 1) use a **negative** exponent. Move the decimal point **right** until it sits just after the first nonzero digit, then count the jumps.

$$0.0000034 = 3.4 \\times 10^{-6}$$

The decimal moved **6 places to the right**, so the exponent is $-6$.

**Quick memory trick:** Move the decimal **left → positive** exponent. Move the decimal **right → negative** exponent.`,
      },
      {
        id: 'p1-concept-check',
        type: 'multiple-choice',
        content: `## Quick Concept Check ✅

Let's make sure the form is clear before we practice.`,
        exercise: {
          questions: [
            {
              question:
                'Which of these numbers is written **correctly** in scientific notation?',
              options: [
                '$42 \\times 10^3$',
                '$0.7 \\times 10^5$',
                '$8.3 \\times 10^{-4}$',
                '$10 \\times 10^2$',
              ],
              correctAnswer: 2,
              explanation:
                'In scientific notation the coefficient must satisfy $1 \\le |a| < 10$. Only $8.3$ fits, since $42$ and $10$ are too big and $0.7$ is too small.',
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 2 — Worked Examples
  // partTitle: "Converting Both Ways"
  // ============================================================
  {
    topicSlug: 'scientific-notation-grade8',
    sections: [
      {
        id: 'p2-to-scientific',
        type: 'text',
        content: `## From Standard Form to Scientific Notation 🔁

**Example A — a large number:** Write $72{,}000$ in scientific notation.

- **Step 1 — Place the decimal:** $72{,}000$ is really $72000.$ Move the decimal so only one nonzero digit is in front: $7.2$.
- **Step 2 — Count the jumps:** the decimal moved **4 places to the left**.
- **Step 3 — Choose the sign:** moving **left** means a **positive** exponent.
- **Answer:** $72{,}000 = 7.2 \\times 10^4$

**Example B — a small number:** Write $0.00058$ in scientific notation.

- **Step 1 — Place the decimal:** put it just after the first nonzero digit ($5$): $5.8$.
- **Step 2 — Count the jumps:** the decimal moved **4 places to the right**.
- **Step 3 — Choose the sign:** moving **right** means a **negative** exponent.
- **Answer:** $0.00058 = 5.8 \\times 10^{-4}$`,
      },
      {
        id: 'p2-to-standard',
        type: 'text',
        content: `## From Scientific Notation Back to Standard Form 🔙

This is just the reverse. The exponent tells you which way to move the decimal:

- **Positive exponent → move the decimal RIGHT** (the number gets bigger).
- **Negative exponent → move the decimal LEFT** (the number gets smaller).

The exponent tells you **how many places** to move. Fill in any empty spots with **zeros**.

**Example C:** $4.2 \\times 10^3$. The exponent is $+3$, so move the decimal **3 places right**: $4.2 \\to 4200.$ → $4{,}200$.

**Example D:** $7.8 \\times 10^{-4}$. The exponent is $-4$, so move the decimal **4 places left**: $7.8 \\to 0.00078$.`,
      },
      {
        id: 'p2-input-practice',
        type: 'input-boxes',
        content: `## Your Turn ✍️

Type each answer exactly as a number. For scientific notation, write it like \`7.2e4\` is **not** needed — instead use plain numbers as described.

1. Write $72{,}000$ in scientific notation. Type only the **coefficient** $a$ (the number before $\\times 10^n$).
2. For that same number $72{,}000$, type only the **exponent** $n$.
3. Convert $4.2 \\times 10^3$ to standard form. Type the whole number with no commas.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7.2', '4', '4200'],
          hint1:
            'To find the coefficient, move the decimal so exactly one nonzero digit sits in front of it. To find the exponent, count how many places you moved.',
          hint2:
            'Moving the decimal LEFT gives a POSITIVE exponent. To convert back to standard form, a positive exponent means move the decimal RIGHT and fill empty spots with zeros.',
          explanation:
            'Problem 1: $72{,}000 = 7.2 \\times 10^4$, so the coefficient is $7.2$. Problem 2: the decimal moved $4$ places left, so the exponent is $4$. Problem 3: $4.2 \\times 10^3$ moves the decimal $3$ places right to give $4{,}200$.',
        },
      },
    ],
  },

  // ============================================================
  // PART 3 — Guided Practice
  // partTitle: "Practice Converting"
  // ============================================================
  {
    topicSlug: 'scientific-notation-grade8',
    sections: [
      {
        id: 'p3-mc',
        type: 'multiple-choice',
        content: `## Multiple Choice 🎯

Convert carefully and watch the sign of the exponent.`,
        exercise: {
          questions: [
            {
              question: 'Write $0.00091$ in scientific notation.',
              options: [
                '$9.1 \\times 10^{4}$',
                '$9.1 \\times 10^{-4}$',
                '$91 \\times 10^{-5}$',
                '$0.91 \\times 10^{-3}$',
              ],
              correctAnswer: 1,
              explanation:
                'Move the decimal right to just after the $9$: $9.1$. It moved $4$ places right, and moving right gives a negative exponent, so the answer is $9.1 \\times 10^{-4}$.',
            },
            {
              question: 'Write $3.5 \\times 10^{5}$ in standard form.',
              options: ['$35{,}000$', '$350{,}000$', '$3{,}500{,}000$', '$0.000035$'],
              correctAnswer: 1,
              explanation:
                'A positive exponent of $5$ means move the decimal $5$ places right: $3.5 \\to 350000$, which is $350{,}000$.',
            },
          ],
        },
      },
      {
        id: 'p3-dropdown',
        type: 'dropdown-select',
        content: `## Choose the Correct Conversion 🔽

For each number, pick its correct match.`,
        exercise: {
          dropdowns: [
            {
              label: '$8{,}400{,}000 = $',
              options: ['$8.4 \\times 10^{5}$', '$8.4 \\times 10^{6}$', '$8.4 \\times 10^{-6}$'],
            },
            {
              label: '$6.7 \\times 10^{-3} = $',
              options: ['$0.0067$', '$6700$', '$0.067$'],
            },
          ],
          correctAnswers: ['$8.4 \\times 10^{6}$', '$0.0067$'],
          hint1:
            'For a large number, count how many places the decimal moves left to reach one digit in front (that is the positive exponent). For a negative exponent, move the decimal left to make the number small.',
          explanation:
            'For $8{,}400{,}000$ the decimal moves $6$ places left, giving $8.4 \\times 10^{6}$. For $6.7 \\times 10^{-3}$ the exponent $-3$ means move the decimal $3$ places left: $0.0067$.',
        },
      },
    ],
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // partTitle: "Scientific Notation in the Real World"
  // ============================================================
  {
    topicSlug: 'scientific-notation-grade8',
    sections: [
      {
        id: 'p4-real-world-text',
        type: 'text',
        content: `## Scientific Notation in the Real World 🌍

Scientists use scientific notation constantly because the universe contains both gigantic and microscopic measurements.

- **Astronomy:** The distance from Earth to the Sun is about $9.3 \\times 10^7$ miles — that's $93{,}000{,}000$ miles.
- **Biology:** A bacterium might be $2 \\times 10^{-6}$ meters long — that's $0.000002$ meters.
- **Computing:** A modern hard drive can store about $1 \\times 10^{12}$ bytes (a terabyte).

We can also **multiply and divide** these numbers without writing all the zeros:

- **Multiplying:** multiply the coefficients, then **add** the exponents.
$$(3 \\times 10^4) \\times (2 \\times 10^5) = 6 \\times 10^{9}$$
- **Dividing:** divide the coefficients, then **subtract** the exponents.
$$\\frac{8 \\times 10^7}{4 \\times 10^3} = 2 \\times 10^{4}$$

This is why scientific notation is so powerful: it turns huge calculations into small, simple steps.`,
      },
      {
        id: 'p4-input-practice',
        type: 'input-boxes',
        content: `## Word Problem Practice ✍️

Type each answer as a plain number.

1. Light travels about $300{,}000{,}000$ meters per second. Written as $3 \\times 10^n$, what is the exponent $n$?
2. Multiply $(3 \\times 10^4) \\times (2 \\times 10^5)$. Type only the **coefficient** of the answer (the number before $\\times 10^n$).
3. For that same product, type only the **exponent** $n$ of the answer.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '6', '9'],
          hint1:
            'For problem 1, move the decimal left until one digit is in front, then count the jumps. For multiplying, multiply the coefficients and add the exponents.',
          hint2:
            'Problem 1: $300{,}000{,}000 = 3 \\times 10^{8}$. Problem 2: multiply $3 \\times 2 = 6$. Problem 3: add the exponents $4 + 5 = 9$.',
          explanation:
            'Problem 1: $300{,}000{,}000 = 3 \\times 10^{8}$, so $n = 8$. Problem 2: multiply the coefficients $3 \\times 2 = 6$. Problem 3: add the exponents $4 + 5 = 9$, giving the full answer $6 \\times 10^{9}$.',
        },
      },
      {
        id: 'p4-mc',
        type: 'multiple-choice',
        content: `## Application Check 🎯`,
        exercise: {
          questions: [
            {
              question:
                'A school server stores $8 \\times 10^7$ bytes of data and divides it evenly among $4 \\times 10^3$ student accounts. How many bytes does each account get?',
              options: [
                '$2 \\times 10^{4}$ bytes',
                '$2 \\times 10^{10}$ bytes',
                '$12 \\times 10^{4}$ bytes',
                '$4 \\times 10^{4}$ bytes',
              ],
              correctAnswer: 0,
              explanation:
                'Divide the coefficients $8 \\div 4 = 2$ and subtract the exponents $7 - 3 = 4$, giving $2 \\times 10^{4}$ bytes per account.',
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 5 — Review & Challenge
  // partTitle: "Review & Mixed Challenge"
  // ============================================================
  {
    topicSlug: 'scientific-notation-grade8',
    sections: [
      {
        id: 'p5-summary-text',
        type: 'text',
        content: `## Putting It All Together 🧠

You've learned how to read, write, and compute with scientific notation. Here is the complete summary:

| Task | What to do | Example |
|------|------------|---------|
| Large number → scientific | Move decimal **left**; exponent is **positive** | $56{,}000 = 5.6 \\times 10^{4}$ |
| Small number → scientific | Move decimal **right**; exponent is **negative** | $0.0089 = 8.9 \\times 10^{-3}$ |
| Positive exponent → standard | Move decimal **right** | $4.2 \\times 10^{3} = 4{,}200$ |
| Negative exponent → standard | Move decimal **left** | $7.8 \\times 10^{-4} = 0.00078$ |
| Multiply | Multiply coefficients, **add** exponents | $(3 \\times 10^4)(2 \\times 10^5) = 6 \\times 10^{9}$ |
| Divide | Divide coefficients, **subtract** exponents | $\\frac{8 \\times 10^7}{4 \\times 10^3} = 2 \\times 10^{4}$ |

**Remember the two golden rules:**

- The coefficient $a$ always satisfies $1 \\le |a| < 10$.
- Move **left → positive** exponent; move **right → negative** exponent.

Ready for the final challenge? It mixes everything together!`,
      },
      {
        id: 'p5-challenge-mc',
        type: 'multiple-choice',
        content: `## 🏆 Mixed Challenge

Use everything you've learned — these mix conversion and operations.`,
        exercise: {
          questions: [
            {
              question: 'Which number is the **largest**?',
              options: [
                '$9.9 \\times 10^{3}$',
                '$1.2 \\times 10^{5}$',
                '$8.0 \\times 10^{4}$',
                '$5.5 \\times 10^{-6}$',
              ],
              correctAnswer: 1,
              explanation:
                'Compare the exponents first: a bigger exponent means a bigger number. $1.2 \\times 10^{5}$ has the largest exponent ($5$), so it is the largest, equal to $120{,}000$.',
            },
            {
              question: 'What is $(4 \\times 10^6) \\times (2 \\times 10^{-2})$ in scientific notation?',
              options: [
                '$8 \\times 10^{4}$',
                '$8 \\times 10^{8}$',
                '$6 \\times 10^{4}$',
                '$8 \\times 10^{-12}$',
              ],
              correctAnswer: 0,
              explanation:
                'Multiply the coefficients $4 \\times 2 = 8$ and add the exponents $6 + (-2) = 4$, giving $8 \\times 10^{4}$.',
            },
          ],
        },
      },
    ],
  },
]
