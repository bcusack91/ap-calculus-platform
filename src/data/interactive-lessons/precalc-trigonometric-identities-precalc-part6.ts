export const precalcTrigIdentitiesPart6Data = {
  topicSlug: 'trigonometric-identities-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 🧩 Trigonometric Identities — Solving Equations with Identities

**Part 6 of 7**

The lesson *Solving Trigonometric Equations and Inequalities* solves equations that already involve **one function of one angle**, like $2\\sin\\theta - 1 = 0$. Many exam equations are not in that form yet: they mix $\\sin^2 x$ with $\\cos x$, or $\\cos 2x$ with $\\cos x$, or use $\\sec x$. An identity is the tool that rewrites such an equation into an **equivalent** one you can solve.

### The Plan

| The equation mixes … | Rewrite with … | so that you get … |
|:---------------------|:---------------|:------------------|
| $\\sin^2 x$ and $\\cos x$ | $\\sin^2 x = 1 - \\cos^2 x$ | a quadratic in $\\cos x$ |
| $\\cos^2 x$ and $\\sin x$ | $\\cos^2 x = 1 - \\sin^2 x$ | a quadratic in $\\sin x$ |
| $\\cos 2x$ and $\\cos x$ | $\\cos 2x = 2\\cos^2 x - 1$ | a quadratic in $\\cos x$ |
| $\\cos 2x$ and $\\sin x$ | $\\cos 2x = 1 - 2\\sin^2 x$ | a quadratic in $\\sin x$ |
| $\\sin 2x$ and $\\sin x$ or $\\cos x$ | $\\sin 2x = 2\\sin x\\cos x$ | something to **factor** |
| $\\sec x$, $\\csc x$, $\\cot x$ | the reciprocal identities | an equation in $\\cos x$, $\\sin x$ or $\\tan x$ |

Then: move everything to one side, **factor** (never divide by a trig expression, which loses solutions), solve each factor on the given interval, and write the **general solution** with $+ 2\\pi k$ (sine, cosine) or $+ \\pi k$ (tangent) if all solutions are asked for.
      `
    },
    {
      id: 'p6-pythagorean',
      type: 'text' as const,
      content: `
## 📝 Worked Example 1: A Pythagorean substitution

**Solve** $2\\cos^2 x + 3\\sin x - 3 = 0$ on $[0, 2\\pi)$.

**Step 1 — Rewrite in one function.** The equation has $\\cos^2 x$ and $\\sin x$, so replace $\\cos^2 x$ with $1 - \\sin^2 x$:

$$2(1 - \\sin^2 x) + 3\\sin x - 3 = 0 \\implies -2\\sin^2 x + 3\\sin x - 1 = 0 \\implies 2\\sin^2 x - 3\\sin x + 1 = 0$$

**Step 2 — Factor** (let $u = \\sin x$: $2u^2 - 3u + 1 = (2u - 1)(u - 1)$):

$$(2\\sin x - 1)(\\sin x - 1) = 0$$

**Step 3 — Solve each factor on $[0, 2\\pi)$.**

- $\\sin x = \\frac{1}{2}$: $x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$
- $\\sin x = 1$: $x = \\frac{\\pi}{2}$

$$\\boxed{x = \\frac{\\pi}{6},\\ \\frac{\\pi}{2},\\ \\frac{5\\pi}{6}}$$

**General solution:** sine has period $2\\pi$, so all solutions are $x = \\frac{\\pi}{6} + 2\\pi k$, $x = \\frac{5\\pi}{6} + 2\\pi k$ or $x = \\frac{\\pi}{2} + 2\\pi k$ for any integer $k$.

> ✅ **Check one:** at $x = \\frac{\\pi}{2}$, $2\\cos^2\\frac{\\pi}{2} + 3\\sin\\frac{\\pi}{2} - 3 = 0 + 3 - 3 = 0$ ✓.
      `
    },
    {
      id: 'p6-double',
      type: 'text' as const,
      content: `
## 📝 Worked Example 2: A double-angle substitution

**Solve** $\\cos 2x + \\cos x = 0$ on $[0, 2\\pi)$.

The equation mixes $\\cos 2x$ with $\\cos x$, so use the form of $\\cos 2x$ that contains only $\\cos x$:

$$2\\cos^2 x - 1 + \\cos x = 0 \\implies 2\\cos^2 x + \\cos x - 1 = 0 \\implies (2\\cos x - 1)(\\cos x + 1) = 0$$

- $\\cos x = \\frac{1}{2}$: $x = \\frac{\\pi}{3}, \\frac{5\\pi}{3}$
- $\\cos x = -1$: $x = \\pi$

$$\\boxed{x = \\frac{\\pi}{3},\\ \\pi,\\ \\frac{5\\pi}{3}}$$

## 📝 Worked Example 3: Factor, never divide

**Solve** $\\sin 2x = \\sqrt{3}\\cos x$ on $[0, 2\\pi)$.

$$2\\sin x\\cos x - \\sqrt{3}\\cos x = 0 \\implies \\cos x\\,(2\\sin x - \\sqrt{3}) = 0$$

- $\\cos x = 0$: $x = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$
- $\\sin x = \\frac{\\sqrt{3}}{2}$: $x = \\frac{\\pi}{3}, \\frac{2\\pi}{3}$

$$\\boxed{x = \\frac{\\pi}{3},\\ \\frac{\\pi}{2},\\ \\frac{2\\pi}{3},\\ \\frac{3\\pi}{2}}$$

> ⚠️ Dividing both sides by $\\cos x$ would have thrown away $x = \\frac{\\pi}{2}$ and $\\frac{3\\pi}{2}$. Move everything to one side and factor instead.

## 📝 Worked Example 4: A reciprocal function

**Solve** $\\sec x = -2$ on $[0, 2\\pi)$. Since $\\sec x = \\frac{1}{\\cos x}$, this is $\\cos x = -\\frac{1}{2}$, so $x = \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$. All solutions: $x = \\frac{2\\pi}{3} + 2\\pi k$ or $x = \\frac{4\\pi}{3} + 2\\pi k$.
      `
    },
    {
      id: 'p6-shift',
      type: 'text' as const,
      content: `
## 📝 Worked Example 5: A shifted argument (sum identity read backwards)

**Solve** $\\sin x + \\sqrt{3}\\cos x = 1$ on $[0, 2\\pi)$.

**Step 1 — Rewrite as one sinusoid.** Compare with the sum identity $2\\sin\\!\\left(x + \\frac{\\pi}{3}\\right) = 2\\sin x\\cos\\frac{\\pi}{3} + 2\\cos x\\sin\\frac{\\pi}{3} = \\sin x + \\sqrt{3}\\cos x$. So the equation is

$$2\\sin\\!\\left(x + \\frac{\\pi}{3}\\right) = 1 \\implies \\sin u = \\frac{1}{2} \\quad \\text{with } u = x + \\frac{\\pi}{3}$$

**Step 2 — Shift the interval too.** Since $0 \\le x < 2\\pi$, the new angle runs over $\\frac{\\pi}{3} \\le u < \\frac{7\\pi}{3}$. In that window $\\sin u = \\frac{1}{2}$ at $u = \\frac{5\\pi}{6}$ and $u = \\frac{13\\pi}{6}$.

**Step 3 — Undo the shift.** $x = u - \\frac{\\pi}{3}$:

$$x = \\frac{5\\pi}{6} - \\frac{\\pi}{3} = \\frac{\\pi}{2} \\qquad x = \\frac{13\\pi}{6} - \\frac{\\pi}{3} = \\frac{11\\pi}{6}$$

> ⚠️ Solving $\\sin u = \\frac{1}{2}$ on $[0, 2\\pi)$ instead would give $u = \\frac{\\pi}{6}$, which leads to $x = -\\frac{\\pi}{6}$, **outside** the interval. Shift the interval along with the angle.

> ✅ **Check:** at $x = \\frac{11\\pi}{6}$: $-\\frac{1}{2} + \\sqrt{3}\\cdot\\frac{\\sqrt{3}}{2} = -\\frac{1}{2} + \\frac{3}{2} = 1$ ✓.
      `
    },
    {
      id: 'p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'To solve $2\\sin^2 x + 3\\cos x - 3 = 0$, the best first step is to:',
            options: [
              'Replace $\\sin^2 x$ with $1 - \\cos^2 x$',
              'Replace $\\cos x$ with $1 - \\sin x$',
              'Divide both sides by $\\cos x$',
              'Replace $\\sin^2 x$ with $\\frac{1 - \\cos 2x}{2}$'
            ],
            correctAnswer: 0,
            explanation: 'The Pythagorean identity turns the equation into $2 - 2\\cos^2 x + 3\\cos x - 3 = 0$, a quadratic in $\\cos x$ alone, which factors as $(2\\cos x - 1)(\\cos x - 1) = 0$. $\\cos x = 1 - \\sin x$ is not an identity, dividing by $\\cos x$ loses solutions and does not separate the functions, and $\\frac{1 - \\cos 2x}{2}$ introduces a new angle $2x$.'
          },
          {
            question: 'How many solutions does $\\cos 2x = \\cos x$ have on $[0, 2\\pi)$?',
            options: [
              '$2$',
              '$3$',
              '$4$',
              '$6$'
            ],
            correctAnswer: 1,
            explanation: '$2\\cos^2 x - 1 = \\cos x$ gives $(2\\cos x + 1)(\\cos x - 1) = 0$, so $\\cos x = 1$ (at $x = 0$) or $\\cos x = -\\frac{1}{2}$ (at $\\frac{2\\pi}{3}$ and $\\frac{4\\pi}{3}$): three solutions. Forgetting $x = 0$ gives $2$; counting both base angles for $\\cos x = 1$ gives $4$.'
          },
          {
            question: 'Which gives every solution of $\\csc x = 2$? ($k$ is any integer.)',
            options: [
              '$x = \\frac{\\pi}{6} + 2\\pi k$ or $x = \\frac{5\\pi}{6} + 2\\pi k$',
              '$x = \\frac{\\pi}{6} + \\pi k$',
              '$x = \\frac{\\pi}{3} + 2\\pi k$ or $x = \\frac{2\\pi}{3} + 2\\pi k$',
              '$x = \\frac{\\pi}{6} + 2\\pi k$'
            ],
            correctAnswer: 0,
            explanation: '$\\csc x = 2$ means $\\sin x = \\frac{1}{2}$, true at $\\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}$ on one turn, and sine repeats every $2\\pi$. Adding $\\pi k$ is tangent\'s period (and would include $\\frac{7\\pi}{6}$, where $\\sin x = -\\frac{1}{2}$), $\\frac{\\pi}{3}$ and $\\frac{2\\pi}{3}$ solve $\\sin x = \\frac{\\sqrt{3}}{2}$, and one base angle alone misses half the solutions.'
          }
        ]
      }
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Solve With an Identity** 🧮

Enter angles as a coefficient of $\\pi$ (type \`7/6\` for $\\frac{7\\pi}{6}$).

**1)** Solve $\\cos 2x + \\cos x = 0$ on $[0, 2\\pi)$. Enter the **largest** solution: $x = \\,?\\cdot\\pi$

**2)** How many solutions does $\\sin 2\\theta = \\cos\\theta$ have on $[0, 2\\pi)$? (Enter a whole number.)

**3)** Solve $2\\cos^2 x - \\sin x - 1 = 0$ on $[0, 2\\pi)$. Enter the **smallest** solution: $x = \\,?\\cdot\\pi$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5/3', '4', '1/6'],
        hint1: 'Worked Example 2: $(2\\cos x - 1)(\\cos x + 1) = 0$ gives $\\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}$.',
        hint2: '$2\\sin\\theta\\cos\\theta - \\cos\\theta = \\cos\\theta(2\\sin\\theta - 1) = 0$. Count the solutions of $\\cos\\theta = 0$ and of $\\sin\\theta = \\frac{1}{2}$.',
        hint3: 'Replace $\\cos^2 x$ with $1 - \\sin^2 x$: $2 - 2\\sin^2 x - \\sin x - 1 = 0$, i.e. $2\\sin^2 x + \\sin x - 1 = 0 = (2\\sin x - 1)(\\sin x + 1)$.',
        explanation: '1) Solutions $\\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}$; the largest is $\\frac{5\\pi}{3}$. 2) $\\cos\\theta = 0$ gives $\\frac{\\pi}{2}, \\frac{3\\pi}{2}$ and $\\sin\\theta = \\frac{1}{2}$ gives $\\frac{\\pi}{6}, \\frac{5\\pi}{6}$: four solutions. 3) $\\sin x = \\frac{1}{2}$ or $\\sin x = -1$ gives $\\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$; the smallest is $\\frac{\\pi}{6}$.'
      }
    },
    {
      id: 'p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Build the Solution** 🔽

Solve $\\cos 2\\theta = \\sin\\theta$ on $[0, 2\\pi)$ step by step.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Replace $\\cos 2\\theta$ with the form that gives an equation in $\\sin\\theta$ only:',
            options: ['$1 - 2\\sin^2\\theta$', '$2\\cos^2\\theta - 1$', '$2\\sin\\theta\\cos\\theta$', '$\\cos^2\\theta - \\sin^2\\theta$']
          },
          {
            label: 'After moving everything to one side, the equation factors as',
            options: ['$(2\\sin\\theta - 1)(\\sin\\theta + 1) = 0$', '$(2\\sin\\theta + 1)(\\sin\\theta - 1) = 0$', '$\\sin\\theta(2\\sin\\theta - 1) = 0$', '$(\\sin\\theta - 1)^2 = 0$']
          },
          {
            label: 'The solutions on $[0, 2\\pi)$ are',
            options: ['$\\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$', '$\\frac{7\\pi}{6}, \\frac{11\\pi}{6}, \\frac{\\pi}{2}$', '$0, \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\pi$', '$\\frac{\\pi}{6}, \\frac{5\\pi}{6}$']
          },
          {
            label: 'The general solution for the $\\sin\\theta = -1$ family is',
            options: ['$\\theta = \\frac{3\\pi}{2} + 2\\pi k$', '$\\theta = \\frac{3\\pi}{2} + \\pi k$', '$\\theta = \\frac{\\pi}{2} + 2\\pi k$', '$\\theta = -\\frac{\\pi}{2} + \\pi k$']
          }
        ],
        correctAnswers: ['$1 - 2\\sin^2\\theta$', '$(2\\sin\\theta - 1)(\\sin\\theta + 1) = 0$', '$\\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$', '$\\theta = \\frac{3\\pi}{2} + 2\\pi k$'],
        hint1: 'You want $\\sin\\theta$ only, so pick the form of $\\cos 2\\theta$ with no cosine in it.',
        hint2: '$1 - 2\\sin^2\\theta = \\sin\\theta$ becomes $2\\sin^2\\theta + \\sin\\theta - 1 = 0$.',
        hint3: '$\\sin\\theta = \\frac{1}{2}$ at $\\frac{\\pi}{6}, \\frac{5\\pi}{6}$; $\\sin\\theta = -1$ at $\\frac{3\\pi}{2}$. Sine repeats every $2\\pi$.',
        explanation: 'With $\\cos 2\\theta = 1 - 2\\sin^2\\theta$ the equation is $2\\sin^2\\theta + \\sin\\theta - 1 = 0 = (2\\sin\\theta - 1)(\\sin\\theta + 1)$. So $\\sin\\theta = \\frac{1}{2}$ ($\\frac{\\pi}{6}, \\frac{5\\pi}{6}$) or $\\sin\\theta = -1$ ($\\frac{3\\pi}{2}$). The $\\sin\\theta = -1$ family is $\\frac{3\\pi}{2} + 2\\pi k$; adding $\\pi k$ would wrongly include $\\frac{\\pi}{2}$.'
      }
    },
    {
      id: 'p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'What are all solutions of $\\sin 2x = \\sin x$ on $[0, 2\\pi)$?',
            options: [
              '$0, \\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}$',
              '$\\frac{\\pi}{3}, \\frac{5\\pi}{3}$',
              '$0, \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\pi$',
              '$0, \\pi$'
            ],
            correctAnswer: 0,
            explanation: '$2\\sin x\\cos x - \\sin x = \\sin x(2\\cos x - 1) = 0$. $\\sin x = 0$ gives $0, \\pi$ and $\\cos x = \\frac{1}{2}$ gives $\\frac{\\pi}{3}, \\frac{5\\pi}{3}$. Dividing by $\\sin x$ loses $0$ and $\\pi$; $\\frac{2\\pi}{3}$ has cosine $-\\frac{1}{2}$.'
          },
          {
            question: 'Which gives every solution of $\\cos 2x = \\frac{1}{2}$? ($k$ is any integer.)',
            options: [
              '$x = \\frac{\\pi}{6} + 2\\pi k$ or $x = \\frac{5\\pi}{6} + 2\\pi k$',
              '$x = \\frac{\\pi}{6} + \\pi k$ or $x = \\frac{5\\pi}{6} + \\pi k$',
              '$x = \\frac{\\pi}{3} + 2\\pi k$ or $x = \\frac{5\\pi}{3} + 2\\pi k$',
              '$x = \\frac{\\pi}{3} + \\pi k$'
            ],
            correctAnswer: 1,
            explanation: 'Let $u = 2x$: $\\cos u = \\frac{1}{2}$ at $u = \\frac{\\pi}{3} + 2\\pi k$ or $u = \\frac{5\\pi}{3} + 2\\pi k$. Halving gives $x = \\frac{\\pi}{6} + \\pi k$ or $x = \\frac{5\\pi}{6} + \\pi k$: the period of $\\cos 2x$ is $\\pi$, not $2\\pi$. The $\\frac{\\pi}{3}$ answers forget to halve, and $+2\\pi k$ on the halved angles misses half the solutions.'
          }
        ]
      }
    }
  ]
};
