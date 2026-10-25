// Number-line figures: integers -5 to 5, x = 30 + (v + 5) * 26 in the viewBox.
const nlX = (v: number) => 30 + (v + 5) * 26

/** A number line from -5 to 5 with the solution set shaded. `null` = the shading runs off that end (arrow). */
function numberLine(left: number | null, leftClosed: boolean, right: number | null, rightClosed: boolean): string {
  const ticks = Array.from({ length: 11 }, (_, i) => i - 5)
    .map((v) => `<line x1="${nlX(v)}" y1="34" x2="${nlX(v)}" y2="46"/>`)
    .join('')
  const labels = Array.from({ length: 11 }, (_, i) => i - 5)
    .map((v) => `<text x="${nlX(v)}" y="64" font-size="12" fill="currentColor" text-anchor="middle">${v < 0 ? '−' + Math.abs(v) : v}</text>`)
    .join('')
  const x1 = left === null ? 12 : nlX(left)
  const x2 = right === null ? 308 : nlX(right)
  const dot = (v: number, closed: boolean) =>
    closed
      ? `<circle cx="${nlX(v)}" cy="40" r="6" fill="currentColor"/>`
      : `<circle class="fig-bg" cx="${nlX(v)}" cy="40" r="6" stroke="currentColor" stroke-width="2.5"/>`
  const shade =
    `<g class="fig-accent"><line x1="${x1}" y1="40" x2="${x2}" y2="40" stroke="currentColor" stroke-width="5"/>` +
    (left === null ? '<polygon points="2,40 14,32 14,48" fill="currentColor"/>' : dot(left, leftClosed)) +
    (right === null ? '<polygon points="318,40 306,32 306,48" fill="currentColor"/>' : dot(right, rightClosed)) +
    '</g>'
  return (
    '<svg viewBox="0 0 320 80" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">' +
    '<g stroke="currentColor" stroke-width="1.5"><line x1="12" y1="40" x2="308" y2="40"/>' + ticks + '</g>' +
    '<polygon points="4,40 14,35 14,45" fill="currentColor"/><polygon points="316,40 306,35 306,45" fill="currentColor"/>' +
    labels + shade + '</svg>'
  )
}

const mkleGreaterThan2 = {
  svg: numberLine(2, false, null, false),
  alt: 'Number line from −5 to 5. There is an open circle at 2, and the line is shaded from 2 to the right, with an arrow showing the shading continues forever.',
  caption: 'Figure 1. $x > 2$: open circle, shaded to the right.',
  size: 'md' as const,
}

const mkleAtMostNeg1 = {
  svg: numberLine(null, false, -1, true),
  alt: 'Number line from −5 to 5. There is a closed (filled) dot at −1, and the line is shaded from −1 to the left, with an arrow showing the shading continues forever.',
  caption: 'Figure 2. $x \\le -1$: closed dot, shaded to the left.',
  size: 'md' as const,
}

const mkleBetween = {
  svg: numberLine(-3, true, 2, false),
  alt: 'Number line from −5 to 5. There is a closed (filled) dot at −3 and an open circle at 2, and the segment between them is shaded. Nothing outside the segment is shaded.',
  caption: 'Figure 3. A shaded segment.',
  size: 'md' as const,
}

const mkleRayLeftNeg3 = {
  svg: numberLine(null, false, -3, true),
  alt: 'Number line from −5 to 5. There is a closed (filled) dot at −3, and the line is shaded from −3 to the left, with an arrow showing the shading continues forever.',
  caption: 'Figure 4. A solution set.',
  size: 'md' as const,
}

export const asvabMkAlgebraEquationsPart4Data = {
  topicSlug: 'asvab-mk-algebra-equations',
  sections: [
    {
      id: 'mkle4-intro',
      type: 'text' as const,
      content: `# ⚖️ Linear Equations and Inequalities

**Part 4 of 7 — Linear Inequalities**

### What an Inequality Says

An equation like $x = 4$ has one answer. An **inequality** like $x > 4$ has a whole range of answers: $5$, $4.1$, $100$, and every other number bigger than $4$.

| Symbol | Read it as | Words on the test |
|:---:|:---|:---|
| $<$ | is less than | fewer than, below |
| $>$ | is greater than | more than, above, exceeds |
| $\\le$ | is less than or equal to | at most, no more than, a maximum of |
| $\\ge$ | is greater than or equal to | at least, no less than, a minimum of |

### Solve it like an equation, with one exception

You solve an inequality with the same moves as an equation: add, subtract, multiply and divide both sides. **One rule is new:**

> **When you multiply or divide both sides by a negative number, flip the inequality sign.**

Why? Start with $2 < 5$, which is true. Multiply both sides by $-1$: $-2$ and $-5$. Now $-2$ is the **bigger** number, so the true statement is $-2 > -5$. The sign had to flip.

Adding or subtracting a negative number does **not** flip the sign. Only multiplying or dividing by one does.`
    },
    {
      id: 'mkle4-graphs',
      type: 'figure' as const,
      figure: [mkleGreaterThan2, mkleAtMostNeg1],
      content: `## Graphing on a Number Line

- An **open circle** means the endpoint is **not** included: use it for $<$ and $>$.
- A **closed (filled) dot** means the endpoint **is** included: use it for $\\le$ and $\\ge$.
- Shade toward the numbers that work. For "greater than," that is to the **right**; for "less than," to the **left**.

A quick check: pick a number in the shaded part and test it in the inequality. In Figure 1, $3$ is shaded, and $3 > 2$ is true ✓`
    },
    {
      id: 'mkle4-examples',
      type: 'text' as const,
      content: `## Worked Examples

### No flip needed

Solve $3x - 7 < 11$.

$$3x < 18 \\quad\\Rightarrow\\quad x < 6$$

We divided by positive $3$, so the sign stays.

### Dividing by a negative

Solve $8 - 4x \\le 20$.

1. Subtract $8$: $-4x \\le 12$
2. Divide by $-4$ **and flip**: $x \\ge -3$

Check with a number that should work, like $x = 0$: $8 - 0 = 8 \\le 20$ ✓. And one that shouldn't, like $x = -5$: $8 + 20 = 28$, which is not $\\le 20$ ✓

### A compound inequality

Solve $-4 \\le 2x + 2 < 10$.

Do each move to **all three parts**:

$$-6 \\le 2x < 8 \\quad\\Rightarrow\\quad -3 \\le x < 4$$

The graph is a segment from $-3$ (closed dot) to $4$ (open circle).

### A word problem

"A truck can carry at most $2{,}000$ pounds. It already holds $650$ pounds. Each crate weighs $90$ pounds. What is the greatest number of crates it can take?"

$$650 + 90c \\le 2000 \\quad\\Rightarrow\\quad 90c \\le 1350 \\quad\\Rightarrow\\quad c \\le 15$$

The greatest number is $15$ crates. Forgetting the $650$ pounds already on board gives $2000 \\div 90 \\approx 22$, which would overload the truck.`
    },
    {
      id: 'mkle4-mc',
      type: 'multiple-choice' as const,
      content: '**Solve the inequality.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Solve: $5x + 4 > 29$',
            options: ['$x > 5$', '$x < 5$', '$x > 6.6$', '$x > 25$'],
            correctAnswer: 0,
            explanation: 'Subtract $4$: $5x > 25$. Divide by positive $5$: $x > 5$, with no flip. Stopping at $5x > 25$ gives "$x > 25$," and adding $4$ instead of subtracting gives $5x > 33$, or $x > 6.6$.'
          },
          {
            question: 'Solve: $1 - 3x \\ge 13$',
            options: ['$x \\ge -4$', '$x \\le 4$', '$x \\le -4$', '$x \\ge 4$'],
            correctAnswer: 2,
            explanation: 'Subtract $1$: $-3x \\ge 12$. Divide by $-3$ and flip: $x \\le -4$. Forgetting to flip gives $x \\ge -4$.'
          },
          {
            question: 'An elevator holds at most $1{,}500$ pounds. A cart already on it weighs $300$ pounds, and each box weighs $80$ pounds. What is the greatest number of boxes that can be added?',
            options: ['$18$', '$16$', '$15$', '$19$'],
            correctAnswer: 2,
            explanation: '$300 + 80b \\le 1500$, so $80b \\le 1200$ and $b \\le 15$. Ignoring the cart gives $1500 \\div 80 = 18.75$, which rounds to the overloaded choices.'
          }
        ]
      }
    },
    {
      id: 'mkle4-graph-mc',
      type: 'multiple-choice' as const,
      figure: mkleBetween,
      content: '**Read the graph.** 🎯 Use Figure 3.',
      exercise: {
        questions: [
          {
            question: 'Which inequality does the graph show?',
            options: ['$-3 < x \\le 2$', '$-3 \\le x \\le 2$', '$x \\le -3$ or $x > 2$', '$-3 \\le x < 2$'],
            correctAnswer: 3,
            explanation: 'The closed dot at $-3$ means $-3$ is included ($\\le$); the open circle at $2$ means $2$ is not ($<$). The numbers between are shaded, so $-3 \\le x < 2$. Swapping the dot types gives $-3 < x \\le 2$, and shading outside the segment would be the "or" statement.'
          }
        ]
      }
    },
    {
      id: 'mkle4-graph-match',
      type: 'multiple-choice' as const,
      figure: mkleRayLeftNeg3,
      content: '**Match the graph to the inequality.** 🎯 Use Figure 4.',
      exercise: {
        questions: [
          {
            question: 'The graph shows the solution of which inequality?',
            options: ['$-2x + 5 \\le 11$', '$-2x + 5 \\ge 11$', '$2x + 5 \\ge 11$', '$-2x + 5 > 11$'],
            correctAnswer: 1,
            explanation: 'The graph is $x \\le -3$ (closed dot, shaded left). Solving $-2x + 5 \\ge 11$: $-2x \\ge 6$, and dividing by $-2$ flips the sign to $x \\le -3$ ✓. The "$\\le 11$" version flips to $x \\ge -3$, $2x + 5 \\ge 11$ gives $x \\ge 3$, and the strict "$> 11$" version gives $x < -3$, which needs an open circle.'
          }
        ]
      }
    },
    {
      id: 'mkle4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Words to symbols.** 🔽 Let $s$ be a score.',
      exercise: {
        dropdowns: [
          {
            label: 'The score must be **at least** $70$:',
            options: ['$s > 70$', '$s \\le 70$', '$s \\ge 70$', '$s < 70$'],
            correctAnswer: 2
          },
          {
            label: 'The score can be **no more than** $90$:',
            options: ['$s \\le 90$', '$s < 90$', '$s \\ge 90$', '$s > 90$'],
            correctAnswer: 0
          },
          {
            label: 'The score must be **more than** $50$:',
            options: ['$s \\ge 50$', '$s > 50$', '$s \\le 50$', '$s < 50$'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['$s \\ge 70$', '$s \\le 90$', '$s > 50$'],
        hint1: '"At least $70$" includes $70$ itself.',
        hint2: '"No more than $90$" means $90$ is the ceiling, and $90$ is allowed.',
        hint3: '"More than $50$" does not include $50$.',
        explanation: '"At least" means $70$ or higher: $s \\ge 70$. "No more than" means $90$ or lower: $s \\le 90$. "More than" leaves out the endpoint: $s > 50$.'
      }
    },
    {
      id: 'mkle4-input',
      type: 'input-boxes' as const,
      content: `**Finish the solution.** ✍️

**1)** $4x - 3 \\ge 25$, so $x \\ge$ ?

**2)** $-6x < 30$, so $x >$ ?

**3)** How many integers satisfy $-2 < x \\le 3$?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '-5', '5'],
        hint1: 'Add $3$, then divide by $4$.',
        hint2: 'Dividing by $-6$ flips $<$ to $>$.',
        hint3: '$-2$ is not included; $3$ is. List them.',
        explanation: '(1) $4x \\ge 28$, so $x \\ge 7$. (2) Divide by $-6$ and flip: $x > -5$. (3) The integers are $-1, 0, 1, 2, 3$: five of them ($-2$ is left out because the sign is strict).'
      }
    },
    {
      id: 'mkle4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Solve inequalities with the same moves as equations
- **Multiply or divide by a negative → flip the sign.** Adding or subtracting never flips it
- Open circle: $<$ or $>$ (endpoint left out). Closed dot: $\\le$ or $\\ge$ (endpoint included)
- "At least" is $\\ge$; "at most" and "no more than" are $\\le$
- In a compound inequality, do every move to all three parts
- Test one number from your answer in the original inequality

> **Up Next:** Part 5 — solving two equations at the same time.`
    }
  ]
};
