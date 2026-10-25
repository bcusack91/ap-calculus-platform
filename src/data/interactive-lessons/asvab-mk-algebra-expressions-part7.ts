export const asvabMkAlgebraExpressionsPart7Data = {
  topicSlug: 'asvab-mk-algebra-expressions',
  sections: [
    {
      id: 'mkpf7-intro',
      type: 'text' as const,
      content: `# 🧮 Polynomials, Factoring and Quadratics

**Part 7 of 7 — Mixed Mastery Set**

Time to put it all together. These 12 questions mix every skill from Parts 1 to 5, in roughly the mix you will see on test day: a few quick ones, a solid middle, and a few that take real work.

**Test conditions:** no calculator, scratch paper only, and aim for about **2 minutes per question**. Do your check before you answer, just as you would on the CAT-ASVAB, where you can't go back.

| Skill | Part |
|:---|:---:|
| Like terms, adding and subtracting | 1 |
| Exponent rules, distributing, FOIL, special products | 2 |
| GCF and trinomial factoring | 3 |
| Difference of squares, perfect squares, algebraic fractions | 4 |
| Solving quadratics | 5 |`
    },
    {
      id: 'mkpf7-set-a',
      type: 'multiple-choice' as const,
      content: '**Set A: warm-up speed.** ⏱️',
      exercise: {
        questions: [
          {
            question: 'Simplify $9p - 4q - 2p + q$.',
            options: ['$7p - 5q$', '$7p - 3q$', '$11p - 3q$', '$4pq$'],
            correctAnswer: 1,
            explanation: '$9p - 2p = 7p$ and $-4q + q = -3q$. Combining $-4q$ and $q$ as $-5q$ adds instead of subtracting, and $-2p$ is subtracted, not added.'
          },
          {
            question: 'Simplify $(4x^3)(5x^2)$.',
            options: ['$20x^6$', '$9x^5$', '$20x^5$', '$9x^6$'],
            correctAnswer: 2,
            explanation: 'Multiply the coefficients ($4 \\cdot 5 = 20$) and add the exponents ($3 + 2 = 5$): $20x^5$. Multiplying the exponents gives $x^6$, and adding the coefficients gives $9$.'
          },
          {
            question: 'Factor $x^2 - 100$.',
            options: ['$(x - 10)^2$', '$(x - 50)(x + 2)$', '$(x + 10)^2$', '$(x + 10)(x - 10)$'],
            correctAnswer: 3,
            explanation: 'Difference of squares: $x^2 - 10^2 = (x + 10)(x - 10)$. A squared binomial always has a middle term, and $(x - 50)(x + 2) = x^2 - 48x - 100$.'
          }
        ]
      }
    },
    {
      id: 'mkpf7-set-b',
      type: 'multiple-choice' as const,
      content: '**Set B: the core of the test.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Multiply $(x - 9)(x + 4)$.',
            options: ['$x^2 - 5x - 36$', '$x^2 + 5x - 36$', '$x^2 - 13x - 36$', '$x^2 - 36$'],
            correctAnswer: 0,
            explanation: 'F: $x^2$. O: $4x$. I: $-9x$. L: $-36$. Middle: $4x - 9x = -5x$. So $x^2 - 5x - 36$. The sign of the middle term follows the larger number, $-9$.'
          },
          {
            question: 'Factor $5x^2 + 15x - 50$ completely.',
            options: ['$5(x - 5)(x + 2)$', '$(5x - 10)(x + 5)$', '$5(x + 5)(x - 2)$', '$5(x^2 + 3x - 10)$'],
            correctAnswer: 2,
            explanation: 'GCF $5$: $5(x^2 + 3x - 10)$. Then $5 \\cdot (-2) = -10$ and $5 - 2 = 3$, so $5(x + 5)(x - 2)$. Stopping at $5(x^2 + 3x - 10)$ is not complete; $(5x - 10)(x + 5)$ still has a $5$ to take out; swapping the signs gives a middle term of $-3x$.'
          },
          {
            question: 'Solve $x^2 - 4x - 45 = 0$.',
            options: ['$x = -9$ or $x = 5$', '$x = 9$ or $x = -5$', '$x = 15$ or $x = -3$', '$x = 9$ or $x = 5$'],
            correctAnswer: 1,
            explanation: '$(x - 9)(x + 5) = 0$ because $-9 \\cdot 5 = -45$ and $-9 + 5 = -4$. So $x = 9$ or $x = -5$. Check $x = 9$: $81 - 36 - 45 = 0$ ✓.'
          },
          {
            question: 'Simplify $(6x^2 - 3x + 8) - (2x^2 - 7x - 1)$.',
            options: ['$4x^2 + 4x + 9$', '$4x^2 - 10x + 7$', '$4x^2 - 10x + 9$', '$4x^2 + 4x + 7$'],
            correctAnswer: 0,
            explanation: 'The minus flips every sign: $6x^2 - 3x + 8 - 2x^2 + 7x + 1$. Then $4x^2 + 4x + 9$. Getting $-10x$ or $+7$ means at least one sign was not flipped.'
          },
          {
            question: 'Expand $(2x - 3)^2$.',
            options: ['$4x^2 + 9$', '$4x^2 - 9$', '$4x^2 - 6x + 9$', '$4x^2 - 12x + 9$'],
            correctAnswer: 3,
            explanation: '$(2x)^2 - 2(2x)(3) + 3^2 = 4x^2 - 12x + 9$. The middle term is $2ab = 2 \\cdot 2x \\cdot 3 = 12x$; using only $2x \\cdot 3 = 6x$ forgets the factor of $2$.'
          }
        ]
      }
    },
    {
      id: 'mkpf7-set-c',
      type: 'multiple-choice' as const,
      content: '**Set C: the harder questions.** 🏋️',
      exercise: {
        questions: [
          {
            question: 'Simplify $\\frac{x^2 - 25}{x^2 - 3x - 10}$.',
            options: ['$\\frac{x - 5}{x + 2}$', '$\\frac{x + 5}{x + 2}$', '$\\frac{x + 5}{x - 2}$', '$\\frac{25}{3x + 10}$'],
            correctAnswer: 1,
            explanation: 'Top: $(x + 5)(x - 5)$. Bottom: $(x - 5)(x + 2)$. Cancel $(x - 5)$ to get $\\frac{x + 5}{x + 2}$. Cancelling the $x^2$ terms to get a fraction with $3x + 10$ cancels added terms, which is never allowed.'
          },
          {
            question: 'If $x + y = 12$ and $x - y = 3$, what is $x^2 - y^2$?',
            options: ['$15$', '$144$', '$81$', '$36$'],
            correctAnswer: 3,
            explanation: '$x^2 - y^2 = (x + y)(x - y) = 12 \\cdot 3 = 36$. No need to find $x$ and $y$. Adding the two values gives $15$, and $144$ is $12^2$ alone.'
          },
          {
            question: 'A rectangle\'s length is $2$ feet less than twice its width, and its area is $84$ square feet. What is its length?',
            options: ['$12$ feet', '$7$ feet', '$14$ feet', '$10$ feet'],
            correctAnswer: 0,
            explanation: 'Width $w$, length $2w - 2$: $w(2w - 2) = 84$, so $2w^2 - 2w - 84 = 0$, or $w^2 - w - 42 = 0$. Factor: $(w - 7)(w + 6) = 0$, so $w = 7$ and the length is $2(7) - 2 = 12$ feet. Check: $7 \\cdot 12 = 84$ ✓. Seven feet is the width, not the length.'
          }
        ]
      }
    },
    {
      id: 'mkpf7-input',
      type: 'input-boxes' as const,
      content: `**Final challenge.** ✍️

Multiply $(x + 6)(x^2 - 2x + 1)$ and write the result as $x^3 + ax^2 + bx + c$.

**1)** $a$:

**2)** $b$:

**3)** $c$:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '-11', '6'],
        hint1: 'Multiply $x$ by each term of the trinomial, then $6$ by each term.',
        hint2: '$x$ terms: $x \\cdot (-2x)$ gives $x^2$ terms; look for every $x^2$ and every $x$.',
        hint3: '$x^3 - 2x^2 + x + 6x^2 - 12x + 6$.',
        explanation: '$x(x^2 - 2x + 1) = x^3 - 2x^2 + x$ and $6(x^2 - 2x + 1) = 6x^2 - 12x + 6$. Add: $x^3 + 4x^2 - 11x + 6$. So $a = 4$, $b = -11$, $c = 6$.'
      }
    },
    {
      id: 'mkpf7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Polynomials, Factoring and Quadratics

- **Like terms** combine by their coefficients; subtracting flips **every** sign
- Multiply powers → **add** exponents; power of a power → **multiply** exponents
- FOIL every pair of binomials; $(a \\pm b)^2$ has a middle term of $\\pm 2ab$
- Factor: **GCF first**, then two numbers that multiply to $c$ and add to $b$
- **Difference of squares** $a^2 - b^2 = (a + b)(a - b)$; a sum of squares does not factor
- Algebraic fractions: factor, then cancel **factors** only
- Solve quadratics: set to $0$, factor, set each factor to $0$, flip the sign, keep $x = 0$ and $\\pm$ answers, check

You now have the whole toolkit for polynomial questions on MK. Review any part where you missed a question, then try the exit quiz.`
    }
  ]
};
