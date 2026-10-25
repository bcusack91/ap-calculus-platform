const mkgsParallelBase = '<g stroke="currentColor" stroke-width="2" fill="none"><line x1="20" y1="70" x2="290" y2="70"/><line x1="20" y1="150" x2="290" y2="150"/><line x1="90" y1="200" x2="230" y2="20"/><polyline points="56,64 64,70 56,76"/><polyline points="56,144 64,150 56,156"/></g><g font-size="13" fill="currentColor" font-style="italic"><text x="296" y="74">m</text><text x="296" y="154">n</text><text x="236" y="24">t</text></g>'

const mkgsCrossingFigure = {
  svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2"><line x1="40" y1="57.8" x2="280" y2="162.2"/><line x1="40" y1="162.2" x2="280" y2="57.8"/></g><circle cx="160" cy="110" r="3" fill="currentColor"/><g font-size="13" fill="currentColor" text-anchor="middle"><text x="202" y="114">47°</text><text x="122" y="114">a</text><text x="160" y="86">b</text><text x="160" y="146">c</text></g></svg>',
  alt: 'Two straight lines cross at one point and form four angles. The angle on the right, opening to the right, is labeled 47 degrees. The angle opposite it on the left is labeled a. The angle on top is labeled b, and the angle on the bottom is labeled c.',
  caption: 'Figure 1. Two lines cross.',
  size: 'md' as const,
}

const mkgsNumberedFigure = {
  svg: '<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">' + mkgsParallelBase + '<g font-size="12" fill="currentColor" text-anchor="middle"><text x="182" y="60">1</text><text x="209" y="65">2</text><text x="173" y="83">3</text><text x="200" y="92">4</text><text x="120" y="140">5</text><text x="147" y="145">6</text><text x="111" y="163">7</text><text x="138" y="172">8</text></g></svg>',
  alt: 'Two horizontal parallel lines, m on top and n below, each marked with an arrowhead to show they are parallel. A transversal t crosses both lines, rising from lower left to upper right. At the crossing with line m the four angles are numbered 1 (above m, left of t), 2 (above m, right of t), 3 (below m, left of t) and 4 (below m, right of t). At the crossing with line n the four angles are numbered 5 (above n, left of t), 6 (above n, right of t), 7 (below n, left of t) and 8 (below n, right of t). Angles 2, 3, 6 and 7 are acute; angles 1, 4, 5 and 8 are obtuse.',
  caption: 'Figure 2. Parallel lines $m$ and $n$ cut by transversal $t$.',
  size: 'md' as const,
}

const mkgsAlgebraParallelFigure = {
  svg: '<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">' + mkgsParallelBase + '<g font-size="12" fill="currentColor"><text x="176" y="88" text-anchor="end">(3x + 10)°</text><text x="143" y="144" text-anchor="start">(5x − 18)°</text></g></svg>',
  alt: 'Two horizontal parallel lines m and n cut by a transversal t that rises from lower left to upper right. Below line m and to the left of t (between the parallel lines) is an angle labeled 3x plus 10 degrees. Above line n and to the right of t (also between the parallel lines) is an angle labeled 5x minus 18 degrees. The two labeled angles are alternate interior angles.',
  caption: 'Figure 3. Two angles written with $x$.',
  size: 'md' as const,
}

export const asvabMkGeometryShapesPart2Data = {
  topicSlug: 'asvab-mk-geometry-shapes',
  sections: [
    {
      id: 'mkgs2-intro',
      type: 'text' as const,
      figure: mkgsCrossingFigure,
      content: `# 📐 Angles, Triangles and Polygons

**Part 2 of 7 — Vertical Angles and Parallel Lines**

## When Two Lines Cross

Two crossing lines make four angles, and two rules tell you all four from just one:

- **Vertical angles** are the angles **across** from each other. They are always **equal**.
- Angles **next to** each other (sharing a side) sit on a straight line, so they add to $180^\\circ$. This pair is called a **linear pair**.

### Worked Example

Two lines cross and one angle is $38^\\circ$.

- The angle across from it (vertical) is also $38^\\circ$.
- Each angle next to it is $180 - 38 = 142^\\circ$.
- The four angles are $38^\\circ$, $142^\\circ$, $38^\\circ$, $142^\\circ$. Check: they add to $360^\\circ$. ✓

> **Key Fact:** Crossing lines make only **two sizes** of angle: a pair of equal vertical angles and the other equal pair, and the two sizes add to $180^\\circ$.`
    },
    {
      id: 'mkgs2-mc-crossing',
      type: 'multiple-choice' as const,
      figure: mkgsCrossingFigure,
      content: '**Use the figure above.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Two lines cross as shown, and one angle measures $47^\\circ$. What is the measure of angle $b$?',
            options: ['$47^\\circ$', '$43^\\circ$', '$133^\\circ$', '$143^\\circ$'],
            correctAnswer: 2,
            explanation: 'Angle $b$ sits next to the $47^\\circ$ angle on a straight line, so $b = 180 - 47 = 133^\\circ$. The angle that equals $47^\\circ$ is $a$, the one across from it. $43^\\circ$ comes from subtracting from $90$.'
          }
        ]
      }
    },
    {
      id: 'mkgs2-parallel',
      type: 'text' as const,
      figure: mkgsNumberedFigure,
      content: `## Parallel Lines Cut by a Transversal

**Parallel lines** never meet; a figure shows them with matching arrowheads. A **transversal** is a line that crosses both. That makes eight angles, and the pairs have names:

| Pair (in the figure) | Name | Relationship |
|:---|:---|:---:|
| $\\angle 1$ and $\\angle 5$; $\\angle 2$ and $\\angle 6$ | **Corresponding** (same position at each crossing) | equal |
| $\\angle 3$ and $\\angle 6$; $\\angle 4$ and $\\angle 5$ | **Alternate interior** (between the lines, opposite sides of $t$) | equal |
| $\\angle 1$ and $\\angle 8$; $\\angle 2$ and $\\angle 7$ | **Alternate exterior** (outside the lines, opposite sides of $t$) | equal |
| $\\angle 3$ and $\\angle 5$; $\\angle 4$ and $\\angle 6$ | **Same-side interior** (between the lines, same side of $t$) | add to $180^\\circ$ |

### The Shortcut: Only Two Sizes

You don't need to memorize the names to get the answer. With parallel lines, **all eight angles come in just two sizes**:

- every **acute** angle in the figure is equal ($\\angle 2, \\angle 3, \\angle 6, \\angle 7$),
- every **obtuse** angle is equal ($\\angle 1, \\angle 4, \\angle 5, \\angle 8$),
- and an acute one plus an obtuse one is $180^\\circ$.

So for any two angles, ask: **do they look the same size?** Then they are equal. **One big, one small?** Then they add to $180^\\circ$.

> **Key Fact:** The rules work only when the lines are **parallel**. If a figure doesn't mark them parallel (or the question doesn't say so), the angles need not match.`
    },
    {
      id: 'mkgs2-examples',
      type: 'text' as const,
      figure: mkgsNumberedFigure,
      content: `## Worked Examples

**1. One angle gives you all eight.** In the figure, $\\angle 2 = 52^\\circ$.

- The acute angles $\\angle 3$, $\\angle 6$ and $\\angle 7$ are also $52^\\circ$.
- The obtuse angles $\\angle 1$, $\\angle 4$, $\\angle 5$ and $\\angle 8$ are $180 - 52 = 128^\\circ$.

**2. Angles written with $x$.** Suppose $\\angle 1 = (3x + 8)^\\circ$ and $\\angle 5 = (4x - 32)^\\circ$. They are corresponding angles (both obtuse), so they are **equal**:

$$3x + 8 = 4x - 32 \\quad\\Rightarrow\\quad 40 = x$$

Then $\\angle 1 = 3(40) + 8 = 128^\\circ$. Check the other expression: $4(40) - 32 = 128$. ✓

**3. A same-side pair.** If $\\angle 4 = (2x)^\\circ$ and $\\angle 6 = (x + 30)^\\circ$, the angles are one obtuse and one acute, so they **add to $180^\\circ$**:

$$2x + x + 30 = 180 \\quad\\Rightarrow\\quad 3x = 150 \\quad\\Rightarrow\\quad x = 50$$

So $\\angle 4 = 100^\\circ$ and $\\angle 6 = 80^\\circ$.

> **Key Fact:** Before writing an equation, decide **equal** or **add to $180$**. Getting that choice right is most of the problem.`
    },
    {
      id: 'mkgs2-mc-parallel',
      type: 'multiple-choice' as const,
      figure: mkgsNumberedFigure,
      content: '**Use the figure above.** 🎯 Lines $m$ and $n$ are parallel, and $\\angle 2 = 52^\\circ$.',
      exercise: {
        questions: [
          {
            question: 'What is the measure of $\\angle 7$?',
            options: ['$128^\\circ$', '$52^\\circ$', '$38^\\circ$', '$104^\\circ$'],
            correctAnswer: 1,
            explanation: '$\\angle 2$ and $\\angle 7$ are alternate exterior angles, and both are acute, so they are equal: $52^\\circ$. $128^\\circ$ is the size of the obtuse angles.'
          },
          {
            question: 'What is the measure of $\\angle 5$?',
            options: ['$52^\\circ$', '$38^\\circ$', '$128^\\circ$', '$308^\\circ$'],
            correctAnswer: 2,
            explanation: '$\\angle 5$ is obtuse while $\\angle 2$ is acute, so they add to $180^\\circ$: $180 - 52 = 128^\\circ$. $38^\\circ$ comes from subtracting from $90$.'
          }
        ]
      }
    },
    {
      id: 'mkgs2-dropdown',
      type: 'dropdown-select' as const,
      figure: mkgsNumberedFigure,
      content: '**Name the pair.** 🔽 Use the numbered angles in the figure.',
      exercise: {
        dropdowns: [
          { label: '$\\angle 3$ and $\\angle 6$ are', options: ['Corresponding', 'Alternate interior', 'Alternate exterior', 'Same-side interior'], correctAnswer: 1 },
          { label: '$\\angle 1$ and $\\angle 5$ are', options: ['Corresponding', 'Alternate interior', 'Alternate exterior', 'Same-side interior'], correctAnswer: 0 },
          { label: '$\\angle 3$ and $\\angle 5$ are', options: ['Corresponding', 'Alternate interior', 'Alternate exterior', 'Same-side interior'], correctAnswer: 3 },
          { label: '$\\angle 1$ and $\\angle 8$ are', options: ['Corresponding', 'Alternate interior', 'Alternate exterior', 'Same-side interior'], correctAnswer: 2 }
        ],
        correctAnswers: ['Alternate interior', 'Corresponding', 'Same-side interior', 'Alternate exterior'],
        hint1: '"Interior" means between the two parallel lines; "exterior" means outside them.',
        hint2: '"Alternate" means on opposite sides of the transversal.',
        hint3: 'Corresponding angles sit in the same position at each crossing (both upper left, for example).',
        explanation: '$\\angle 3$ and $\\angle 6$ are between the lines on opposite sides of $t$: alternate interior. $\\angle 1$ and $\\angle 5$ are both upper left at their crossings: corresponding. $\\angle 3$ and $\\angle 5$ are between the lines on the same (left) side: same-side interior. $\\angle 1$ and $\\angle 8$ are outside the lines on opposite sides: alternate exterior.'
      }
    },
    {
      id: 'mkgs2-input',
      type: 'input-boxes' as const,
      figure: mkgsAlgebraParallelFigure,
      content: `**Solve with algebra.** ✍️ Lines $m$ and $n$ are parallel. Enter numbers only.

**1)** The value of $x$:

**2)** The measure, in degrees, of each labeled angle:

**3)** The measure, in degrees, of the angle that forms a straight line with the $(3x + 10)^\\circ$ angle along line $m$:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['14', '52', '128'],
        hint1: 'The labeled angles are alternate interior angles. Are they equal, or do they add to $180$?',
        hint2: 'Set $3x + 10 = 5x - 18$ and solve.',
        hint3: 'An angle on a straight line with a $52^\\circ$ angle is its supplement.',
        explanation: '(1) Alternate interior angles are equal: $3x + 10 = 5x - 18$, so $28 = 2x$ and $x = 14$. (2) $3(14) + 10 = 52$ and $5(14) - 18 = 52$. ✓ (3) $180 - 52 = 128^\\circ$.'
      }
    },
    {
      id: 'mkgs2-mc-concept',
      type: 'multiple-choice' as const,
      content: '**Know the rule.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Two parallel lines are cut by a transversal. Which pair of angles always adds to $180^\\circ$?',
            options: ['Alternate interior angles', 'Same-side interior angles', 'Corresponding angles', 'Alternate exterior angles'],
            correctAnswer: 1,
            explanation: 'Same-side interior angles are one acute and one obtuse angle between the lines, so they add to $180^\\circ$. Alternate interior, corresponding and alternate exterior pairs are all equal.'
          },
          {
            question: 'Two lines cross, forming four angles. One of the angles is $90^\\circ$. What are the other three?',
            options: ['All three are $90^\\circ$', 'Two are $90^\\circ$ and one is $180^\\circ$', 'One is $90^\\circ$ and two are $45^\\circ$', 'They cannot be found from one angle'],
            correctAnswer: 0,
            explanation: 'The vertical angle is also $90^\\circ$, and each neighbor is $180 - 90 = 90^\\circ$. Lines that cross at a right angle are called perpendicular.'
          }
        ]
      }
    },
    {
      id: 'mkgs2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Vertical angles** (across from each other) are **equal**; neighbors on a line add to $180^\\circ$
- Parallel lines + transversal: corresponding, alternate interior and alternate exterior angles are **equal**; same-side interior angles add to $180^\\circ$
- Shortcut: all eight angles come in **two sizes**: same-looking angles are equal, a big one and a small one add to $180^\\circ$
- With $x$ in the labels: decide **equal** or **add to 180**, then solve
- The rules need the lines to be **parallel**

> **Up Next:** Part 3 — triangles: the $180^\\circ$ rule, the exterior-angle shortcut and which side lengths can even make a triangle.`
    }
  ]
};
