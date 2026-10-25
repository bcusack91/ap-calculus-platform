export const asvabMkAlgebraExpressionsPart6Data = {
  topicSlug: 'asvab-mk-algebra-expressions',
  sections: [
    {
      id: 'mkpf6-intro',
      type: 'text' as const,
      content: `# 🧮 Polynomials, Factoring and Quadratics

**Part 6 of 7 — Test Strategy and Common Traps**

### Your Time Budget

MK gives you **31 minutes for 15 questions**, about **2 minutes each**. A polynomial question you recognize (FOIL, a difference of squares, a simple trinomial) should take **30 to 60 seconds**. That banks time for the harder items.

Three things about the CAT-ASVAB change how you work:

- **You cannot go back.** Once you answer, the question is gone. Do your quick check **before** you click.
- **It adapts.** A right answer usually brings a harder question. Seeing harder questions is a good sign, not a reason to panic.
- **Don't rush-guess at the end.** If time runs short, keep genuinely working each question. The CAT applies a relatively large penalty when several wrong answers come at the end of a subtest, and unfinished items are scored as if you guessed at random.

Some questions may be unscored tryout items, but you can't tell which, so treat every question as if it counts.

## Four Strategies That Work Without a Calculator

**1. Multiply back.** For "Which is the factored form?", FOIL each choice until one matches. Usually the first or second choice you test settles it.

**2. Plug the choices into the equation.** For "Solve $x^2 - x - 12 = 0$", try a choice: $x = 4$ gives $16 - 4 - 12 = 0$ ✓. Remember that both values in a choice must work.

**3. Plug in a number to test "equivalent" questions.** Pick a value like $x = 2$ or $x = 3$, evaluate the original and each choice, and keep the choice that matches. Avoid $x = 0$ and $x = 1$: too many wrong choices match by accident. Also avoid a value that makes the expression $0$.

**4. Take out the GCF first.** It makes every number smaller and shows up in the answer choices.

## The Traps the Wrong Answers Are Built From

ASVAB distractors are not random. Each one is the result of a specific, common mistake. Know the mistakes and you can spot the traps.

| Mistake | Wrong | Right |
|:---|:---|:---|
| Squaring each term of a binomial | $(x + 4)^2 = x^2 + 16$ | $x^2 + 8x + 16$ |
| Minus sign hits only the first term | $-(2x - 5) = -2x - 5$ | $-2x + 5$ |
| Multiplying exponents when multiplying powers | $x^3 \\cdot x^4 = x^{12}$ | $x^7$ |
| Adding exponents for a power of a power | $(x^3)^4 = x^7$ | $x^{12}$ |
| Cancelling added terms | $\\frac{x + 8}{8} = x$ | does not simplify |
| Dividing both sides by $x$ | $x^2 = 5x$ gives only $x = 5$ | $x = 0$ or $x = 5$ |
| Keeping the sign from the factor | $(x + 3)(x - 2) = 0$ gives $x = 3, -2$ | $x = -3$ or $x = 2$ |
| Forgetting the negative root | $x^2 = 36$ gives $x = 6$ | $x = \\pm 6$ |
| Factoring a sum of squares | $x^2 + 9 = (x + 3)(x - 3)$ | does not factor |`
    },
    {
      id: 'mkpf6-mc-traps',
      type: 'multiple-choice' as const,
      content: '**Name the trap.** 🪤',
      exercise: {
        questions: [
          {
            question: 'Expand $(x - 4)^2$. Which answer choice is the trap made by squaring each term separately?',
            options: ['$x^2 - 8x + 16$', '$x^2 + 16$', '$x^2 - 4x + 16$', '$x^2 - 8x - 16$'],
            correctAnswer: 1,
            explanation: 'Squaring each piece gives $x^2$ and $(-4)^2 = 16$, so the trap is $x^2 + 16$. The correct expansion, $x^2 - 8x + 16$, includes the middle term $2 \\cdot x \\cdot (-4) = -8x$.'
          },
          {
            question: 'Jordan solves $x^2 = 8x$ by dividing both sides by $x$ and gets $x = 8$. What went wrong?',
            options: ['Dividing by $x$ threw away the solution $x = 0$', 'The answer should be $x = -8$ because of the signs', 'He should have taken square roots to get $x = \\pm 8$', 'Nothing, because $x = 8$ is the only solution'],
            correctAnswer: 0,
            explanation: 'Write $x^2 - 8x = 0$ and factor: $x(x - 8) = 0$, so $x = 0$ or $x = 8$. Dividing by $x$ silently assumes $x$ is not $0$. Check: $0^2 = 8 \\cdot 0$ ✓, so $0$ is a real solution; $-8$ fails ($64 \\neq -64$).'
          },
          {
            question: 'Use $x = 2$ to test which expression is equivalent to $x^2 - x - 6$.',
            options: ['$(x + 3)(x - 2)$', '$(x - 6)(x + 1)$', '$(x - 3)(x + 2)$', '$(x - 3)(x - 2)$'],
            correctAnswer: 2,
            explanation: 'At $x = 2$ the original is $4 - 2 - 6 = -4$. Test: $(2 - 3)(2 + 2) = -4$ ✓; $(2 + 3)(2 - 2) = 0$; $(2 - 6)(2 + 1) = -12$; $(2 - 3)(2 - 2) = 0$. Only $(x - 3)(x + 2)$ matches, and multiplying it out confirms $x^2 - x - 6$.'
          }
        ]
      }
    },
    {
      id: 'mkpf6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Diagnose the error.** 🔽 Each line of student work has one mistake. Name it.',
      exercise: {
        dropdowns: [
          {
            label: '$x^3 \\cdot x^4 = x^{12}$',
            options: ['Cancelled a term instead of a factor', 'Multiplied exponents instead of adding them', 'Did not distribute the minus to every term', 'Missed the negative solution'],
            correctAnswer: 1
          },
          {
            label: '$\\frac{x + 8}{8} = x$',
            options: ['Missed the negative solution', 'Did not distribute the minus to every term', 'Cancelled a term instead of a factor', 'Multiplied exponents instead of adding them'],
            correctAnswer: 2
          },
          {
            label: '$-(3x - 2) = -3x - 2$',
            options: ['Did not distribute the minus to every term', 'Multiplied exponents instead of adding them', 'Missed the negative solution', 'Cancelled a term instead of a factor'],
            correctAnswer: 0
          },
          {
            label: '$x^2 = 36$, so $x = 6$',
            options: ['Cancelled a term instead of a factor', 'Did not distribute the minus to every term', 'Multiplied exponents instead of adding them', 'Missed the negative solution'],
            correctAnswer: 3
          }
        ],
        correctAnswers: ['Multiplied exponents instead of adding them', 'Cancelled a term instead of a factor', 'Did not distribute the minus to every term', 'Missed the negative solution'],
        hint1: 'Multiplying powers of the same base: what happens to the exponents?',
        hint2: 'Is the $8$ on top multiplied or added?',
        hint3: 'What is $(-6)^2$?',
        explanation: '$x^3 \\cdot x^4 = x^7$ (add exponents). In $\\frac{x + 8}{8}$ the $8$ is added, so nothing cancels. $-(3x - 2) = -3x + 2$: the minus flips both signs. $x^2 = 36$ has two solutions, $x = 6$ and $x = -6$.'
      }
    },
    {
      id: 'mkpf6-mc-check',
      type: 'multiple-choice' as const,
      content: '**Check before you click.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which values solve $x^2 + 2x - 15 = 0$? Plug the choices in rather than factoring.',
            options: ['$x = 5$ or $x = -3$', '$x = 15$ or $x = -1$', '$x = 3$ or $x = 5$', '$x = -5$ or $x = 3$'],
            correctAnswer: 3,
            explanation: '$x = 3$: $9 + 6 - 15 = 0$ ✓. $x = -5$: $25 - 10 - 15 = 0$ ✓. Both values work. $x = 5$ gives $25 + 10 - 15 = 20$, so any choice containing $5$ is out. Factored, it is $(x + 5)(x - 3) = 0$.'
          },
          {
            question: 'A choice reads $x^2 + 9 = (x + 3)(x - 3)$. Why is it wrong?',
            options: ['$(x + 3)(x - 3)$ multiplies out to $x^2 - 9$, not $x^2 + 9$', 'The factors should be $(x + 9)(x - 1)$ to get a sum', 'The correct factoring is $(x + 3)^2$ because both signs are positive', 'It is right; a sum of squares factors the same way'],
            correctAnswer: 0,
            explanation: 'FOIL $(x + 3)(x - 3)$: $x^2 - 3x + 3x - 9 = x^2 - 9$. A sum of squares does not factor with whole numbers, and $(x + 3)^2 = x^2 + 6x + 9$ has a middle term.'
          }
        ]
      }
    },
    {
      id: 'mkpf6-input',
      type: 'input-boxes' as const,
      content: `**Plug-in test.** ✍️

A question asks which expression equals $2x^2 - 5x - 3$. Test with $x = 2$.

**1)** The value of $2x^2 - 5x - 3$ at $x = 2$:

**2)** The value of the choice $(2x - 1)(x + 3)$ at $x = 2$:

**3)** The value of the choice $(2x + 1)(x - 3)$ at $x = 2$:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['-5', '15', '-5'],
        hint1: '$2(4) - 10 - 3$.',
        hint2: '$(4 - 1)(2 + 3)$.',
        hint3: '$(4 + 1)(2 - 3)$.',
        explanation: '(1) $8 - 10 - 3 = -5$. (2) $3 \\cdot 5 = 15$, which does not match, so that choice is out. (3) $5 \\cdot (-1) = -5$, a match. Multiplying out confirms it: $(2x + 1)(x - 3) = 2x^2 - 6x + x - 3 = 2x^2 - 5x - 3$.'
      }
    },
    {
      id: 'mkpf6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Budget about **2 minutes per MK question**; known polynomial patterns should take under a minute
- The CAT does not let you go back: **check before you click**
- Strategies: **multiply back**, **plug in the choices**, **plug in a number** (not $0$ or $1$), **GCF first**
- Every wrong choice comes from a known mistake: missing middle term, one-term minus, exponent rule mix-ups, cancelling terms, dividing by $x$, sign flips, missing $\\pm$
- If time runs short, keep working each question honestly rather than guessing in a string

> **Up Next:** Part 7 — a mixed mastery set across the whole topic.`
    }
  ]
};
