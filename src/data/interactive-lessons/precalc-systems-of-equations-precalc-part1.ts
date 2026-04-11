export const precalcSystemsPart1Data = {
  topicSlug: 'systems-of-equations-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# 🔗 Systems of Linear Equations

**Part 1 of 7**

### What Is a System?

A **system of equations** is a set of two or more equations with the same variables.

$$\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}$$

A **solution** is an ordered pair $(x, y)$ that satisfies ALL equations simultaneously.

### Three Possible Outcomes

| Type | Graph | Solutions |
|:-----|:------|:----------|
| Independent | Lines cross | Exactly one $(x,y)$ |
| Inconsistent | Parallel lines | No solution |
| Dependent | Same line | Infinitely many |

### Checking a Solution

Is $(3, 1)$ a solution to the system above?
- $2(3)+1 = 7$ ✓
- $3-1 = 2$ ✓

**Yes!** Both equations are satisfied.
      `
    },
    {
      id: 'p1-substitution',
      type: 'text' as const,
      content: `
## 🔄 Substitution Method

### Steps:
1. Solve one equation for one variable
2. Substitute into the other equation
3. Solve for the remaining variable
4. Back-substitute to find the other

### Example

$$\\begin{cases} y = 3x - 1 \\\\ 2x + y = 9 \\end{cases}$$

**Step 1**: $y$ is already isolated: $y = 3x - 1$

**Step 2**: Substitute into equation 2:
$$2x + (3x-1) = 9$$

**Step 3**: Solve:
$$5x - 1 = 9 \\implies 5x = 10 \\implies x = 2$$

**Step 4**: Back-substitute:
$$y = 3(2)-1 = 5$$

**Solution**: $(2, 5)$

> 💡 Substitution works best when one variable is already isolated or has coefficient 1.
      `
    },
    {
      id: 'p1-elimination',
      type: 'text' as const,
      content: `
## ➕ Elimination Method

### Steps:
1. Align equations in standard form ($ax+by=c$)
2. Multiply one or both equations so a variable cancels
3. Add (or subtract) the equations
4. Solve and back-substitute

### Example

$$\\begin{cases} 3x + 2y = 12 \\\\ 2x - 2y = 8 \\end{cases}$$

The $y$-terms already cancel when we add:

$$5x = 20 \\implies x = 4$$

Back-substitute: $3(4)+2y = 12 \\implies y = 0$.

**Solution**: $(4, 0)$

### When Coefficients Don't Match

$$\\begin{cases} 3x + 4y = 10 \\\\ 2x + 3y = 7 \\end{cases}$$

Multiply eq1 by 3, eq2 by $-4$:
$$9x+12y = 30$$
$$-8x-12y = -28$$

Add: $x = 2$. Then $y = 1$.

> 💡 Elimination is ideal when coefficients are already close to matching.
      `
    },
    {
      id: 'p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Systems Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Solve: $\\begin{cases} x+y=5 \\\\ x-y=1 \\end{cases}$',
            options: ['$(3, 2)$', '$(2, 3)$', '$(4, 1)$', '$(1, 4)$'],
            correctAnswer: 0,
            explanation: 'Add: $2x = 6 \\implies x = 3$. Then $y = 2$.'
          },
          {
            question: 'If two lines have the same slope but different $y$-intercepts, the system is:',
            options: ['Independent', 'Dependent', 'Inconsistent', 'Underdetermined'],
            correctAnswer: 2,
            explanation: 'Same slope, different intercepts → parallel → no intersection → inconsistent.'
          },
          {
            question: 'Best method for: $y = 2x+1$ and $3x+2y = 12$?',
            options: ['Substitution', 'Elimination', 'Graphing', 'Matrix'],
            correctAnswer: 0,
            explanation: '$y$ is already isolated, so substitution is most efficient.'
          }
        ]
      }
    },
    {
      id: 'p1-input',
      type: 'input-boxes' as const,
      content: `
**Solve the Systems** 🧮

$\\begin{cases} 2x+y=10 \\\\ x-y=2 \\end{cases}$

**1)** $x$ = ?

**2)** $y$ = ?

**3)** $\\begin{cases} y=4x \\\\ 2x+y=18 \\end{cases}$ → $x$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '2', '3'],
        hint1: 'Add equations: $3x = 12$.',
        hint2: 'Substitute $x=4$ into $x-y=2$.',
        hint3: 'Substitute $y=4x$: $2x+4x = 18 \\implies 6x=18$.',
        explanation: '1) $x=4$. 2) $y=2$. 3) $x=3$.'
      }
    },
    {
      id: 'p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Methods & Types** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Two identical equations give:',
            options: ['One solution', 'No solution', 'Infinitely many solutions', 'Undefined'],
            correctAnswer: 2
          },
          {
            label: 'Substitution requires:',
            options: ['Matching coefficients', 'Isolating a variable', 'Graphing both lines', 'Using matrices'],
            correctAnswer: 1
          },
          {
            label: '$\\begin{cases} x+y=4 \\\\ 2x+2y=8 \\end{cases}$ is:',
            options: ['Independent', 'Inconsistent', 'Dependent', 'Contradictory'],
            correctAnswer: 2
          },
          {
            label: 'Elimination works by:',
            options: ['Isolating a variable', 'Adding/subtracting equations', 'Factoring', 'Graphing'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Infinitely many solutions', 'Isolating a variable', 'Dependent', 'Adding/subtracting equations'],
        hint1: 'Same line → all points are solutions.',
        hint2: 'Solve for $x$ or $y$ first.',
        hint3: 'Second equation = 2 × first.',
        explanation: 'Identical eqs: infinite solutions. Substitution: isolate. $2x+2y=8$ is $2(x+y=4)$: dependent. Elimination: add/subtract.'
      }
    },
    {
      id: 'p1-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Solve: $\\begin{cases} 3x-y=7 \\\\ x+2y=0 \\end{cases}$ → $x = ?$',
            options: ['$2$', '$1$', '$3$', '$-1$'],
            correctAnswer: 0,
            explanation: 'From eq2: $x=-2y$. Sub: $3(-2y)-y=7 \\implies -7y=7 \\implies y=-1$. $x=2$.'
          },
          {
            question: '$\\begin{cases} 2x+4y=10 \\\\ x+2y=3 \\end{cases}$ has:',
            options: ['One solution', 'No solution', 'Infinite solutions', 'Two solutions'],
            correctAnswer: 1,
            explanation: 'Eq1 ÷ 2: $x+2y=5$. But eq2 says $x+2y=3$. Contradiction → no solution.'
          }
        ]
      }
    }
  ]
};
