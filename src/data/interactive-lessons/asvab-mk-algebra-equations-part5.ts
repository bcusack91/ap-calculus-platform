export const asvabMkAlgebraEquationsPart5Data = {
  topicSlug: 'asvab-mk-algebra-equations',
  sections: [
    {
      id: 'mkle5-intro',
      type: 'text' as const,
      content: `# ⚖️ Linear Equations and Inequalities

**Part 5 of 7 — Systems of Two Equations**

### Two Unknowns, Two Clues

A **system** is two equations that must both be true at the same time:

$$x + y = 10 \\qquad x - y = 4$$

A **solution** is a pair of numbers, written $(x, y)$, that works in **both** equations. Here the solution is $(7, 3)$: $7 + 3 = 10$ ✓ and $7 - 3 = 4$ ✓. The pair $(6, 4)$ works in the first equation but not the second, so it is not a solution.

On the ASVAB you can often **check the answer choices** by plugging each pair into both equations. When you need to solve from scratch, use one of two methods.

### Method 1: Substitution

Use it when one equation already says "$y = $" or "$x = $".

1. Take the expression for one letter.
2. Substitute it into the **other** equation. Now there is only one letter.
3. Solve, then plug back in to find the second letter.

### Method 2: Elimination

Use it when the same letter has matching or opposite coefficients.

1. Add or subtract the equations so one letter cancels.
2. Solve for the letter that's left.
3. Plug back in to find the other one.

If no letter cancels yet, multiply one equation by a number first so that it will.`
    },
    {
      id: 'mkle5-examples',
      type: 'text' as const,
      content: `## Worked Examples

### Substitution

Solve: $y = 2x - 1$ and $3x + y = 14$.

Replace $y$ in the second equation with $2x - 1$:

$$3x + (2x - 1) = 14 \\quad\\Rightarrow\\quad 5x - 1 = 14 \\quad\\Rightarrow\\quad 5x = 15 \\quad\\Rightarrow\\quad x = 3$$

Then $y = 2(3) - 1 = 5$. Solution: $(3, 5)$. Check in the second equation: $9 + 5 = 14$ ✓

### Elimination by adding

Solve: $x + y = 10$ and $x - y = 4$.

The $y$-terms are opposites, so add the equations:

$$(x + y) + (x - y) = 10 + 4 \\quad\\Rightarrow\\quad 2x = 14 \\quad\\Rightarrow\\quad x = 7$$

Then $7 + y = 10$, so $y = 3$.

### Multiply first, then eliminate

Solve: $2x + 3y = 12$ and $x - y = 1$.

Multiply the second equation by $3$ so the $y$-terms become opposites: $3x - 3y = 3$. Add it to the first:

$$5x = 15 \\quad\\Rightarrow\\quad x = 3$$

Then $3 - y = 1$, so $y = 2$. Solution: $(3, 2)$.

### A word problem

"A school play sold $40$ tickets. Adult tickets cost 8 dollars and child tickets cost 5 dollars. Ticket sales totaled 260 dollars. How many adult tickets were sold?"

Let $a$ = adult tickets and $c$ = child tickets.

$$a + c = 40 \\qquad 8a + 5c = 260$$

From the first equation, $c = 40 - a$. Substitute:

$$8a + 5(40 - a) = 260 \\quad\\Rightarrow\\quad 3a + 200 = 260 \\quad\\Rightarrow\\quad a = 20$$

So $20$ adult tickets (and $20$ child tickets). Check: $160 + 100 = 260$ ✓

> **Rare case:** if both letters cancel and you are left with something false, like $0 = 5$, the system has **no solution**. If you are left with something always true, like $0 = 0$, it has **infinitely many**.`
    },
    {
      id: 'mkle5-mc',
      type: 'multiple-choice' as const,
      content: '**Solve the system.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which pair $(x, y)$ is the solution of $x + y = 9$ and $2x - y = 6$?',
            options: ['$(4, 5)$', '$(6, 3)$', '$(3, 6)$', '$(5, 4)$'],
            correctAnswer: 3,
            explanation: 'Add the equations: $3x = 15$, so $x = 5$ and $y = 4$. Check: $5 + 4 = 9$ and $10 - 4 = 6$ ✓. Every other pair adds to $9$ but fails the second equation; $(4, 5)$ is the right numbers in the wrong order.'
          },
          {
            question: 'If $y = 3x$ and $x + y = 24$, what is the value of $y$?',
            options: ['$6$', '$18$', '$8$', '$21$'],
            correctAnswer: 1,
            explanation: 'Substitute: $x + 3x = 24$, so $4x = 24$ and $x = 6$. Then $y = 3(6) = 18$. The value $6$ is $x$, not $y$; $8$ comes from $24 \\div 3$.'
          },
          {
            question: 'If $3x + 2y = 16$ and $5x - 2y = 0$, what is the value of $y$?',
            options: ['$2$', '$8$', '$5$', '$3$'],
            correctAnswer: 2,
            explanation: 'Add to eliminate $y$: $8x = 16$, so $x = 2$. Then $3(2) + 2y = 16$ gives $2y = 10$ and $y = 5$. The value $2$ is $x$.'
          }
        ]
      }
    },
    {
      id: 'mkle5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Eliminate.** 🔽 Solve $4x + y = 11$ and $2x + y = 7$.',
      exercise: {
        dropdowns: [
          {
            label: 'Subtracting the second equation from the first gives:',
            options: ['$6x = 18$', '$2x = 4$', '$2x + 2y = 4$', '$2x = 18$'],
            correctAnswer: 1
          },
          {
            label: 'So $x$ equals:',
            options: ['$2$', '$3$', '$4$', '$9$'],
            correctAnswer: 0
          },
          {
            label: 'And $y$ equals:',
            options: ['$7$', '$5$', '$3$', '$1$'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['$2x = 4$', '$2$', '$3$'],
        hint1: 'Both equations have $+y$, so subtracting cancels it.',
        hint2: '$4x - 2x = 2x$ and $11 - 7 = 4$.',
        hint3: 'Put $x = 2$ into $2x + y = 7$.',
        explanation: '$(4x + y) - (2x + y) = 11 - 7$ gives $2x = 4$, so $x = 2$. Then $2(2) + y = 7$ gives $y = 3$. Check in the first equation: $8 + 3 = 11$ ✓'
      }
    },
    {
      id: 'mkle5-input',
      type: 'input-boxes' as const,
      content: `**Two systems.** ✍️

The system $x = y + 3$ and $2x + y = 18$:

**1)** $x$ = ?

**2)** $y$ = ?

**3)** A unit orders $25$ meals, some chicken and some vegetarian. There are $7$ more chicken meals than vegetarian meals. How many vegetarian meals are there?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '4', '9'],
        hint1: 'Substitute $y + 3$ for $x$ in the second equation.',
        hint2: '$2(y + 3) + y = 18$.',
        hint3: 'If $v$ is vegetarian, chicken is $v + 7$, and $v + (v + 7) = 25$.',
        explanation: '(1)–(2) $2(y + 3) + y = 18$ gives $3y + 6 = 18$, so $y = 4$ and $x = 4 + 3 = 7$. (3) $2v + 7 = 25$, so $2v = 18$ and $v = 9$ (with $16$ chicken meals).'
      }
    },
    {
      id: 'mkle5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- A solution of a system is a pair $(x, y)$ that works in **both** equations
- Fastest check on the test: plug each answer choice into both equations
- **Substitution:** when one equation already says $y = \\ldots$ or $x = \\ldots$
- **Elimination:** add or subtract so one letter cancels; multiply first if you need to
- After finding one letter, plug back in for the other, then answer the letter the question asks for

> **Up Next:** Part 6 — test strategy and the traps the answer choices are built from.`
    }
  ]
};
