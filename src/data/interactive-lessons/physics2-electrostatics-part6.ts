export const physics2ElectrostaticsPart6Data = {
  topicSlug: 'electric-charge-coulombs-law',
  sections: [
    {
      id: 'ec6-intro',
      type: 'text' as const,
      content: `
# 🎯 Multi-Charge Systems & Superposition of Forces

**Part 6 of 7**

Real problems rarely involve just two charges. When three or more charges interact, you need **superposition** — the principle that forces add as vectors.

This is where Coulomb's Law gets powerful — and where most students start making mistakes.
      `
    },
    {
      id: 'ec6-superposition',
      type: 'text' as const,
      content: `
## The Principle of Superposition

> **The net force on any charge is the vector sum of the individual Coulomb forces from every other charge.**

$$\\vec{F}_{\\text{net}} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 + \\cdots$$

### What This Means in Practice

1. Calculate the force from **each** other charge separately using Coulomb's Law
2. Determine the **direction** of each force (attract/repel)
3. **Add as vectors** — break into components if needed

### Critical Rule

Each pairwise force is independent — charge A's force on charge C is **not affected** by the presence of charge B.
      `
    },
    {
      id: 'ec6-1d-example',
      type: 'text' as const,
      content: `
## 1D Superposition — Three Charges in a Line

**Problem:** Three charges on the x-axis:
- $q_A = +2\\ \\mu\\text{C}$ at $x = 0$
- $q_B = -3\\ \\mu\\text{C}$ at $x = 0.3$ m
- $q_C = +1\\ \\mu\\text{C}$ at $x = 0.5$ m

Find the net force on $q_B$.

### Solution

**Force from A on B:**
$$F_{AB} = k\\frac{|q_A q_B|}{r_{AB}^2} = (9 \\times 10^9)\\frac{(2 \\times 10^{-6})(3 \\times 10^{-6})}{(0.3)^2} = 0.60 \\text{ N}$$
Direction: A is positive, B is negative → **attractive → toward A → leftward (−x)**

**Force from C on B:**
$$F_{CB} = k\\frac{|q_C q_B|}{r_{CB}^2} = (9 \\times 10^9)\\frac{(1 \\times 10^{-6})(3 \\times 10^{-6})}{(0.2)^2} = 0.675 \\text{ N}$$
Direction: C is positive, B is negative → **attractive → toward C → rightward (+x)**

**Net force on B:**
$$F_{\\text{net}} = -0.60 + 0.675 = +0.075 \\text{ N (rightward)}$$

The forces partially cancel because they pull in opposite directions!
      `
    },
    {
      id: 'ec6-2d-intro',
      type: 'text' as const,
      content: `
## 2D Superposition — Component Method

When charges aren't in a line, you must use **vector components**:

### The Workflow

1. Find each force magnitude using Coulomb's Law
2. Find the angle of each force
3. Break each force into $x$ and $y$ components:
   - $F_x = F\\cos\\theta$
   - $F_y = F\\sin\\theta$
4. Add all $x$-components, add all $y$-components
5. Find the magnitude: $F_{\\text{net}} = \\sqrt{F_x^2 + F_y^2}$
6. Find the angle: $\\theta = \\tan^{-1}(F_y / F_x)$

### Common AP Geometry

The AP exam loves **equilateral triangle** and **right-angle** charge arrangements because the geometry is clean.

For equilateral triangles: angles are 60°
For squares: diagonal distance is $r\\sqrt{2}$
      `
    },
    {
      id: 'ec6-equilibrium',
      type: 'text' as const,
      content: `
## Equilibrium Problems

A charge is in **equilibrium** when the net force on it is zero:

$$\\vec{F}_{\\text{net}} = 0$$

### Classic Problem Type

**"Where can a third charge be placed so that it's in equilibrium?"**

For two charges of the same sign:
- The equilibrium point is **between** the charges
- Closer to the **smaller** charge (it needs less distance to match the larger charge's pull)

For two charges of opposite sign:
- The equilibrium point is **outside** the pair
- On the side of the **smaller** charge

### Setting Up the Equation

At equilibrium: $F_1 = F_2$

$$k\\frac{|q_1 q_3|}{r_1^2} = k\\frac{|q_2 q_3|}{r_2^2}$$

The $k$ and $q_3$ cancel, leaving:

$$\\frac{|q_1|}{r_1^2} = \\frac{|q_2|}{r_2^2}$$

This is a clean equation to solve for position!
      `
    },
    {
      id: 'ec6-superposition-drill',
      type: 'input-boxes' as const,
      content: `
**1D Superposition Drill**

Two charges on the x-axis:
- $q_1 = +4\\ \\mu\\text{C}$ at origin
- $q_2 = +4\\ \\mu\\text{C}$ at $x = 0.4$ m
- A test charge $q_3 = +1\\ \\mu\\text{C}$ at $x = 0.2$ m (the midpoint)

Use $k = 9 \\times 10^9$.

Enter:
1) Force from $q_1$ on $q_3$ (magnitude in N, round to 1 decimal)

2) Force from $q_2$ on $q_3$ (magnitude in N, round to 1 decimal)

3) Net force on $q_3$ (in N)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.9', '0.9', '0'],
        hint1: '$F = k|q_1 q_3|/r^2 = (9 \\times 10^9)(4 \\times 10^{-6})(1 \\times 10^{-6})/(0.2)^2$.',
        hint2: 'By symmetry, both forces have equal magnitude.',
        hint3: 'Equal charges equidistant from q₃ → forces are equal and opposite → they cancel!',
        explanation: 'At the midpoint between two equal charges, forces cancel perfectly. Net force = 0. This is an equilibrium point!'
      }
    },
    {
      id: 'ec6-quiz',
      type: 'multiple-choice' as const,
      content: `
**Superposition & Equilibrium Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Three positive charges form an equilateral triangle. The net force on any one charge points:',
            options: [
              'Toward the center of the triangle',
              'Away from the center of the triangle',
              'Along one side of the triangle',
              'Zero — the forces cancel'
            ],
            correctAnswer: 1,
            explanation: 'Each charge is repelled by the other two. By symmetry, the two repulsive forces combine to point directly away from the center of the triangle.'
          },
          {
            question: 'A charge $q_3$ is in equilibrium between $q_1 = +4q$ and $q_2 = +q$. Where is $q_3$?',
            options: [
              'At the exact midpoint',
              'Closer to the larger charge q₁',
              'Closer to the smaller charge q₂',
              'Outside the two charges'
            ],
            correctAnswer: 2,
            explanation: 'The equilibrium point is closer to the smaller charge. It needs less distance to match the larger charge\'s stronger pull. Specifically, since q₁ = 4q₂, the distance ratio is 2:1 (closer to q₂).'
          },
          {
            question: 'In superposition, does the presence of a third charge affect the Coulomb force between two specific charges?',
            options: [
              'Yes — all charges interact simultaneously',
              'No — each pairwise force is calculated independently',
              'Only if the third charge is between them',
              'Only if the third charge is larger'
            ],
            correctAnswer: 1,
            explanation: 'Superposition means each pairwise Coulomb interaction is independent. The force between A and B is the same whether or not C exists. You just add all the forces at the end.'
          },
          {
            question: 'Two charges $+Q$ and $-Q$ are separated by distance $d$. Where could a positive test charge be in equilibrium?',
            options: [
              'At the midpoint between them',
              'Between them, closer to −Q',
              'Outside the pair, beyond the −Q charge',
              'There is no equilibrium point for opposite charges'
            ],
            correctAnswer: 3,
            explanation: 'For opposite charges, both forces on a test charge between them point in the same direction (toward −Q). There\'s no point where they cancel. Outside the pair, the closer charge always dominates.'
          }
        ]
      }
    },
    {
      id: 'ec6-mistakes',
      type: 'multiple-choice' as const,
      content: `
**Before You Move On** — Superposition traps.
      `,
      exercise: {
        questions: [
          {
            question: 'A student adds Coulomb force magnitudes (ignoring direction) and reports the "net force." What\'s wrong?',
            options: [
              'Nothing — magnitudes always add',
              'Forces are vectors — you must account for direction before adding',
              'You should multiply instead of add',
              'Superposition doesn\'t apply to more than two charges'
            ],
            correctAnswer: 1,
            explanation: 'Forces are vectors! If two forces point in opposite directions, they partially cancel. You must break into components (or account for signs in 1D) before adding.'
          },
          {
            question: 'In a 2D problem, a student forgets to use vector components and just adds magnitudes. Their answer will typically be:',
            options: [
              'Exactly correct',
              'Too large — they ignored partial cancellation',
              'Too small',
              'Correct only for perpendicular forces'
            ],
            correctAnswer: 1,
            explanation: 'Adding magnitudes without considering direction always overestimates the net force, unless all forces happen to point in exactly the same direction.'
          }
        ]
      }
    }
  ]
}
