export const asvabMkAlgebraExpressionsPart5Data = {
  topicSlug: 'asvab-mk-algebra-expressions',
  sections: [
    {
      id: 'mkpf5-intro',
      type: 'text' as const,
      content: `# 🧮 Polynomials, Factoring and Quadratics

**Part 5 of 7 — Solving Quadratics by Factoring**

A **quadratic equation** has an $x^2$ term and no higher power, like $x^2 - 5x + 6 = 0$. Most quadratics have **two** solutions, and the ASVAB usually lists both in each answer choice ("$x = 2$ or $x = 3$").

## The Zero-Product Property

If two numbers multiply to zero, at least one of them is zero:

$$\\text{If } A \\cdot B = 0, \\text{ then } A = 0 \\text{ or } B = 0.$$

That is why factoring solves quadratics: it turns one hard equation into two easy ones.

## The Four Steps

1. **Move everything to one side** so the other side is $0$
2. **Factor**
3. **Set each factor equal to $0$** and solve
4. **Check** (plug a solution back in, or check an answer choice)

**Worked example.** $x^2 - 5x + 6 = 0$

- Factor: $(x - 2)(x - 3) = 0$
- $x - 2 = 0$ gives $x = 2$; $x - 3 = 0$ gives $x = 3$
- Check $x = 2$: $4 - 10 + 6 = 0$ ✓

**Worked example: not set to zero yet.** $x^2 + 4x = 21$

- Subtract $21$: $x^2 + 4x - 21 = 0$
- Factor: $(x + 7)(x - 3) = 0$
- Solutions: $x = -7$ or $x = 3$

> **Sign check:** the factor $(x + 7)$ gives the solution $x = -7$. The solution always has the **opposite** sign of the number in the factor.

**Worked example: a common factor of $x$.** $x^2 = 6x$

- Do **not** divide both sides by $x$. That throws away a solution
- Move it over: $x^2 - 6x = 0$
- Factor: $x(x - 6) = 0$
- Solutions: $x = 0$ or $x = 6$`
    },
    {
      id: 'mkpf5-mc-solve',
      type: 'multiple-choice' as const,
      content: '**Solve by factoring.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Solve $x^2 - 9x + 18 = 0$.',
            options: ['$x = -3$ or $x = -6$', '$x = 2$ or $x = 9$', '$x = 3$ or $x = 6$', '$x = -9$ or $x = 18$'],
            correctAnswer: 2,
            explanation: '$(x - 3)(x - 6) = 0$ because $(-3)(-6) = 18$ and $-3 + (-6) = -9$. So $x = 3$ or $x = 6$. The negative pair comes from copying the signs in the factors instead of flipping them.'
          },
          {
            question: 'Solve $x^2 + 2x = 24$.',
            options: ['$x = 6$ or $x = -4$', '$x = -6$ or $x = 4$', '$x = -12$ or $x = 2$', '$x = 0$ or $x = -2$'],
            correctAnswer: 1,
            explanation: 'First set the equation to zero: $x^2 + 2x - 24 = 0$. Then $(x + 6)(x - 4) = 0$, so $x = -6$ or $x = 4$. Check $x = 4$: $16 + 8 = 24$ ✓. The pair $6$ and $-4$ has the signs flipped: $x = 6$ gives $36 + 12 = 48$, not $24$.'
          },
          {
            question: 'Solve $x^2 = 11x$.',
            options: ['$x = 11$ only', '$x = -11$ or $x = 11$', '$x = 0$ or $x = 11$', '$x = 0$ or $x = -11$'],
            correctAnswer: 2,
            explanation: '$x^2 - 11x = 0$ factors as $x(x - 11) = 0$, so $x = 0$ or $x = 11$. Dividing both sides by $x$ loses the solution $x = 0$; check it: $0^2 = 11 \\cdot 0$ ✓.'
          }
        ]
      }
    },
    {
      id: 'mkpf5-more',
      type: 'text' as const,
      content: `## Two More Types

### $x^2 = k$: take the square root, and remember $\\pm$

$x^2 = 49$ means $x = 7$ **or** $x = -7$, because $(-7)^2 = 49$ too. Write it as $x = \\pm 7$.

**Worked example.** $3x^2 - 75 = 0$

- Add $75$: $3x^2 = 75$
- Divide by $3$: $x^2 = 25$
- $x = \\pm 5$

(Factoring works too: $3(x^2 - 25) = 3(x + 5)(x - 5) = 0$.)

### When the $x^2$ coefficient is not 1

**Worked example.** $2x^2 + 5x - 3 = 0$

- Factor: $(2x - 1)(x + 3) = 0$ (check: $2x^2 + 6x - x - 3$ ✓)
- $2x - 1 = 0$ gives $x = \\frac{1}{2}$; $x + 3 = 0$ gives $x = -3$

## Word Problems That Lead to a Quadratic

**Worked example.** A rectangular storage pad is $3$ feet longer than it is wide, and its area is $40$ square feet. Find the width.

- Let the width be $w$. Then the length is $w + 3$
- Area: $w(w + 3) = 40$
- Expand and set to zero: $w^2 + 3w - 40 = 0$
- Factor: $(w + 8)(w - 5) = 0$, so $w = -8$ or $w = 5$
- A width cannot be negative, so **$w = 5$ feet** (and the length is $8$ feet)

> **Key Fact:** In a word problem, check which solutions make sense. Lengths, ages and counts cannot be negative, so throw those out.

### Sum and product of the solutions

If $(x - 2)(x + 7) = 0$, the solutions are $2$ and $-7$. Their sum is $-5$ and their product is $-14$. Questions that ask for the sum or product of the solutions are just solving plus one extra step.`
    },
    {
      id: 'mkpf5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Set up and solve.** 🔽 A rectangular tent floor is $4$ feet longer than it is wide, and its area is $60$ square feet.',
      exercise: {
        dropdowns: [
          {
            label: 'With width $w$, the area equation is:',
            options: ['$w + (w + 4) = 60$', '$w(w + 4) = 60$', '$2w + 2(w + 4) = 60$', '$4w = 60$'],
            correctAnswer: 1
          },
          {
            label: 'Set equal to zero:',
            options: ['$w^2 + 4w + 60 = 0$', '$w^2 + 4w - 60 = 0$', '$w^2 - 4w - 60 = 0$', '$w^2 + 4 - 60 = 0$'],
            correctAnswer: 1
          },
          {
            label: 'Factored:',
            options: ['$(w - 10)(w + 6) = 0$', '$(w + 15)(w - 4) = 0$', '$(w + 10)(w - 6) = 0$', '$(w + 12)(w - 5) = 0$'],
            correctAnswer: 2
          },
          {
            label: 'The width is:',
            options: ['$6$ feet', '$10$ feet', '$-10$ feet', '$15$ feet'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['$w(w + 4) = 60$', '$w^2 + 4w - 60 = 0$', '$(w + 10)(w - 6) = 0$', '$6$ feet'],
        hint1: 'Area of a rectangle = width times length.',
        hint2: 'Expand $w(w + 4)$ and subtract $60$.',
        hint3: 'Two numbers that multiply to $-60$ and add to $4$.',
        explanation: 'Area $= w(w + 4) = 60$, so $w^2 + 4w - 60 = 0$. Since $10 \\cdot (-6) = -60$ and $10 - 6 = 4$, it factors as $(w + 10)(w - 6) = 0$, giving $w = -10$ or $w = 6$. A width cannot be negative, so the width is $6$ feet (length $10$ feet; check $6 \\cdot 10 = 60$). The equation $2w + 2(w + 4) = 60$ is the perimeter, not the area.'
      }
    },
    {
      id: 'mkpf5-mc-sum',
      type: 'multiple-choice' as const,
      content: '**One step further.** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the sum of the solutions of $(x - 2)(x + 9) = 0$?',
            options: ['$7$', '$-7$', '$-18$', '$11$'],
            correctAnswer: 1,
            explanation: 'The solutions are $x = 2$ and $x = -9$, and $2 + (-9) = -7$. Adding the numbers as they appear in the factors gives $-2 + 9 = 7$, the sign trap; $-18$ is the product.'
          },
          {
            question: 'Solve $5x^2 = 80$.',
            options: ['$x = 4$ only', '$x = \\pm 16$', '$x = \\pm 4$', '$x = \\pm 8$'],
            correctAnswer: 2,
            explanation: 'Divide by $5$: $x^2 = 16$, so $x = 4$ or $x = -4$. Stopping at $x^2 = 16$ and calling it the answer gives $\\pm 16$, and the negative root is easy to forget.'
          }
        ]
      }
    },
    {
      id: 'mkpf5-input',
      type: 'input-boxes' as const,
      content: `**Find the solutions.** ✍️

**1)** The positive solution of $4x^2 = 100$:

**2)** $3x^2 + 10x - 8 = 0$ has one positive and one negative solution. The positive solution (a fraction is fine):

**3)** The negative solution of $3x^2 + 10x - 8 = 0$:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '2/3', '-4'],
        hint1: 'Divide by $4$ first: $x^2 = 25$.',
        hint2: 'Try $(3x - 2)(x + 4)$ and check the middle term.',
        hint3: 'Set each factor equal to $0$.',
        explanation: '(1) $x^2 = 25$, so $x = \\pm 5$; the positive one is $5$. (2)–(3) $(3x - 2)(x + 4) = 3x^2 + 12x - 2x - 8 = 3x^2 + 10x - 8$ ✓. So $3x - 2 = 0$ gives $x = \\frac{2}{3}$ and $x + 4 = 0$ gives $x = -4$.'
      }
    },
    {
      id: 'mkpf5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- **Zero-product property:** if $A \\cdot B = 0$, then $A = 0$ or $B = 0$
- Steps: set to $0$ → factor → each factor $= 0$ → check
- The factor $(x + 7)$ gives $x = -7$: the solution has the **opposite** sign
- Never divide both sides by $x$; factor it out instead, and keep $x = 0$
- $x^2 = k$ gives $x = \\pm\\sqrt{k}$ (two answers)
- In word problems, throw out solutions that make no sense (negative lengths)

> **Up Next:** Part 6 — strategy for this topic on test day, and the traps the answer choices are built from.`
    }
  ]
};
