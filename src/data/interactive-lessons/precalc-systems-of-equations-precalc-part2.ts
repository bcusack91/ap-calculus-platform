export const precalcSystemsPart2Data = {
  topicSlug: 'systems-of-equations-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# 📊 Systems of Three Variables

**Part 2 of 7**

### 3×3 Systems

$$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 5 \\end{cases}$$

A solution is an **ordered triple** $(x, y, z)$ — a point in 3D space.

### Method: Systematic Elimination

1. **Choose a variable** to eliminate first (pick the easiest)
2. **Combine pairs** of equations to get TWO equations in TWO variables
3. **Solve the 2×2 system**
4. **Back-substitute** to find the third variable

### Geometrically

- Each equation represents a **plane** in 3D
- The solution is where all three planes intersect
- Possibilities: one point, a line, a plane, or no intersection
      `
    },
    {
      id: 'p2-example',
      type: 'text' as const,
      content: `
## 📝 Worked Example

$$\\begin{cases} x + y + z = 6 \\quad (1) \\\\ 2x - y + z = 3 \\quad (2) \\\\ x + 2y - z = 5 \\quad (3) \\end{cases}$$

**Eliminate $z$**: add (1) and (3):
$$(x+y+z)+(x+2y-z) = 6+5 \\implies 2x+3y = 11 \\quad (A)$$

Add (2) and (3):
$$(2x-y+z)+(x+2y-z) = 3+5 \\implies 3x+y = 8 \\quad (B)$$

**Solve (A) and (B)**:
From (B): $y = 8-3x$. Sub into (A):
$$2x+3(8-3x)=11 \\implies 2x+24-9x=11 \\implies -7x=-13 \\implies x = \\frac{13}{7}$$

Hmm, ugly numbers. Let's try a cleaner system for practice.

### Cleaner Example

$$\\begin{cases} x+y+z=6 \\\\ x-y+z=2 \\\\ 2x+y-z=1 \\end{cases}$$

Add eq1+eq2: $2x+2z=8 \\implies x+z=4$.
Add eq2+eq3: $3x=3 \\implies x=1$. Then $z=3$, $y=2$.

**Solution**: $(1, 2, 3)$ ✓
      `
    },
    {
      id: 'p2-special',
      type: 'text' as const,
      content: `
## ⚠️ Special Cases in 3D

### No Solution (Inconsistent)

$$\\begin{cases} x+y+z=1 \\\\ x+y+z=3 \\\\ 2x+y-z=0 \\end{cases}$$

Eq1 and eq2 say $x+y+z$ equals both 1 and 3 — contradiction!

### Infinitely Many (Dependent)

$$\\begin{cases} x+y+z=4 \\\\ 2x+2y+2z=8 \\\\ x-y+z=0 \\end{cases}$$

Eq2 = 2×Eq1, so we really have only 2 independent equations in 3 unknowns → infinite solutions (a line).

### Application: Curve Fitting

Find the quadratic $y = ax^2+bx+c$ through $(1,6), (2,11), (3,18)$:

$$\\begin{cases} a+b+c=6 \\\\ 4a+2b+c=11 \\\\ 9a+3b+c=18 \\end{cases}$$

Solving: $a=1, b=2, c=3 \\implies y=x^2+2x+3$.
      `
    },
    {
      id: 'p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**3×3 Systems Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Solve: $\\begin{cases} x+y=5 \\\\ y+z=7 \\\\ x+z=6 \\end{cases}$. What is $x+y+z$?',
            options: ['$9$', '$18$', '$12$', '$6$'],
            correctAnswer: 0,
            explanation: 'Add all three: $2(x+y+z)=18 \\implies x+y+z=9$.'
          },
          {
            question: 'From the above, $x$ = ?',
            options: ['$2$', '$3$', '$4$', '$5$'],
            correctAnswer: 0,
            explanation: '$x+y+z=9$ and $y+z=7 \\implies x=2$.'
          },
          {
            question: 'A 3×3 system with 2 identical equations has:',
            options: ['One solution', 'No solution', 'Infinitely many', 'Need more info'],
            correctAnswer: 3,
            explanation: 'Depends on the third equation — could be a unique point, a line, or inconsistent.'
          }
        ]
      }
    },
    {
      id: 'p2-input',
      type: 'input-boxes' as const,
      content: `
**Solve** 🧮

$\\begin{cases} x+y+z=10 \\\\ x-y+z=4 \\\\ x+y-z=2 \\end{cases}$

**1)** $x$ = ?

**2)** $y$ = ?

**3)** $z$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '3', '4'],
        hint1: 'Add eq1+eq2: $2x+2z=14 \\implies x+z=7$.',
        hint2: 'Add eq1+eq3: $2x+2y=12 \\implies x+y=6$.',
        hint3: 'From eq2+eq3: $2x=6 \\implies x=3$. Then $y=3, z=4$.',
        explanation: '$x=3, y=3, z=4$. Verify: $3+3+4=10$ ✓, $3-3+4=4$ ✓, $3+3-4=2$ ✓.'
      }
    },
    {
      id: 'p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**3D Systems Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Three planes can intersect at:',
            options: ['Only a point', 'A point, line, or plane', 'Only a line', 'Exactly two points'],
            correctAnswer: 1
          },
          {
            label: 'To solve a 3×3 system, first reduce to:',
            options: ['A 1×1 system', 'A 2×2 system', 'A 4×4 system', 'A graph'],
            correctAnswer: 1
          },
          {
            label: 'Finding a quadratic through 3 points requires:',
            options: ['2 equations', '3 equations', '4 equations', '1 equation'],
            correctAnswer: 1
          },
          {
            label: 'If elimination produces $0 = 5$:',
            options: ['Unique solution', 'Infinite solutions', 'No solution', 'Error in work'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['A point, line, or plane', 'A 2×2 system', '3 equations', 'No solution'],
        hint1: 'Think about geometric possibilities.',
        hint2: 'Eliminate one variable to reduce dimension.',
        hint3: '$y = ax^2+bx+c$ has 3 unknowns.',
        explanation: 'Planes: point/line/plane. Reduce 3×3 → 2×2. Quadratic: 3 unknowns, 3 equations. $0=5$: inconsistent.'
      }
    },
    {
      id: 'p2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Find the quadratic through $(0,1), (1,4), (2,11)$: what is $a$ in $y=ax^2+bx+c$?',
            options: ['$1$', '$2$', '$3$', '$4$'],
            correctAnswer: 1,
            explanation: '$c=1$. $a+b+1=4 \\implies a+b=3$. $4a+2b+1=11 \\implies 4a+2b=10 \\implies 2a+b=5$. Subtract: $a=2$.'
          },
          {
            question: '$\\begin{cases} 2x+y+z=7 \\\\ x+2y+z=8 \\\\ x+y+2z=9 \\end{cases}$: by symmetry, what is $x$?',
            options: ['$1$', '$2$', '$3$', '$4$'],
            correctAnswer: 0,
            explanation: 'Add all: $4(x+y+z)=24 \\implies x+y+z=6$. Eq1: $x+(x+y+z-x)+z=7$... Actually: $(x+y+z)+x=7 \\implies x=1$.'
          }
        ]
      }
    }
  ]
};
