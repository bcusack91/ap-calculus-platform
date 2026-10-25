const mkgsRightTriSvg = (a: string, b: string, c: string) =>
  '<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="60,170 220,170 60,50"/><path d="M 72 170 L 72 158 L 60 158" stroke-width="1.5"/></g><g font-size="14" fill="currentColor"><text x="48" y="114" text-anchor="end">' + a + '</text><text x="140" y="190" text-anchor="middle">' + b + '</text><text x="152" y="102" text-anchor="middle">' + c + '</text></g></svg>'

const mkgsPythagFigure = {
  svg: mkgsRightTriSvg('a', 'b', 'c'),
  alt: 'A right triangle with the right angle, marked by a small square, at the lower left. The vertical leg is labeled a, the horizontal leg is labeled b, and the slanted side across from the right angle, the hypotenuse, is labeled c.',
  caption: 'Figure 1. Legs $a$ and $b$, hypotenuse $c$.',
  size: 'md' as const,
}

const mkgsLegs912Figure = {
  svg: mkgsRightTriSvg('9', '12', '?'),
  alt: 'A right triangle with the right angle at the lower left. The vertical leg is labeled 9, the horizontal leg is labeled 12, and the hypotenuse is labeled with a question mark.',
  caption: 'Figure 2. Find the hypotenuse.',
  size: 'md' as const,
}

const mkgsLadderFigure = {
  svg: '<svg viewBox="0 0 300 215" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="30" y1="190" x2="290" y2="190"/><line x1="230" y1="190" x2="230" y2="20"/><path d="M 218 190 L 218 178 L 230 178" stroke-width="1.5"/></g><g class="fig-accent"><line x1="184.5" y1="190" x2="230" y2="34" stroke="currentColor" stroke-width="4"/></g><g font-size="13" fill="currentColor"><text x="200" y="108" text-anchor="end">25 ft</text><text x="207" y="207" text-anchor="middle">7 ft</text><text x="242" y="115">h</text></g></svg>',
  alt: 'A ladder leans against a vertical wall. The wall meets the flat ground at a right angle. The ladder is labeled 25 feet. The distance along the ground from the foot of the ladder to the wall is labeled 7 feet. The height on the wall where the top of the ladder touches is labeled h.',
  caption: 'Figure 3. A ladder against a wall.',
  size: 'md' as const,
}

const mkgsSimilarFigure = {
  svg: '<svg viewBox="0 0 320 205" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="30,180 102,180 30,132"/><path d="M 38 180 L 38 172 L 30 172" stroke-width="1.5"/><polygon points="130,180 310,180 130,60"/><path d="M 140 180 L 140 170 L 130 170" stroke-width="1.5"/></g><g font-size="14" fill="currentColor"><text x="22" y="161" text-anchor="end">4</text><text x="66" y="197" text-anchor="middle">6</text><text x="122" y="125" text-anchor="end">10</text><text x="220" y="197" text-anchor="middle">x</text></g></svg>',
  alt: 'Two similar right triangles, a small one on the left and a large one on the right, each with its right angle at the lower left. The small triangle has a vertical leg of 4 and a horizontal leg of 6. The large triangle has a vertical leg of 10 and a horizontal leg labeled x.',
  caption: 'Figure 4. Two similar right triangles.',
  size: 'md' as const,
}

const mkgsShadowFigure = {
  svg: '<svg viewBox="0 0 300 205" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2"><line x1="20" y1="180" x2="290" y2="180"/></g><g class="fig-accent" stroke="currentColor" stroke-width="4"><line x1="40" y1="180" x2="40" y2="144"/><line x1="140" y1="180" x2="140" y2="18"/></g><g class="fig-muted" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"><line x1="40" y1="144" x2="64" y2="180"/><line x1="140" y1="18" x2="248" y2="180"/></g><g font-size="13" fill="currentColor"><text x="34" y="166" text-anchor="end">6 ft</text><text x="52" y="197" text-anchor="middle">4 ft</text><text x="132" y="100" text-anchor="end">h</text><text x="194" y="197" text-anchor="middle">18 ft</text></g></svg>',
  alt: 'A person and a flagpole stand on flat ground in the sun. The person is 6 feet tall and casts a shadow 4 feet long. The flagpole has unknown height h and casts a shadow 18 feet long. Dashed sun rays run from the top of each to the tip of its shadow, forming two right triangles with the same shape.',
  caption: 'Figure 5. Shadows at the same moment.',
  size: 'md' as const,
}

export const asvabMkGeometryShapesPart4Data = {
  topicSlug: 'asvab-mk-geometry-shapes',
  sections: [
    {
      id: 'mkgs4-intro',
      type: 'text' as const,
      figure: mkgsPythagFigure,
      content: `# 📐 Angles, Triangles and Polygons

**Part 4 of 7 — The Pythagorean Theorem and Similar Triangles**

## The Pythagorean Theorem

In a **right triangle**, the two sides that form the right angle are the **legs** ($a$ and $b$). The side across from the right angle is the **hypotenuse** ($c$). It is always the **longest** side.

$$a^2 + b^2 = c^2$$

It works **only** for right triangles.

### Worked Examples

**1. Find the hypotenuse.** Legs $6$ and $8$:

$$6^2 + 8^2 = 36 + 64 = 100 \\quad\\Rightarrow\\quad c = \\sqrt{100} = 10$$

**2. Find a leg.** Hypotenuse $13$, one leg $5$. Now you **subtract**:

$$5^2 + b^2 = 13^2 \\quad\\Rightarrow\\quad b^2 = 169 - 25 = 144 \\quad\\Rightarrow\\quad b = 12$$

**3. Not a whole number.** Legs $1$ and $2$: $c^2 = 1 + 4 = 5$, so $c = \\sqrt{5}$. Leave it as a square root unless the choices show a decimal.

> **Key Fact:** Looking for the **hypotenuse**? Add the squares. Looking for a **leg**? Subtract the smaller square from the larger one. Either way, take the square root at the end.`
    },
    {
      id: 'mkgs4-triples',
      type: 'text' as const,
      content: `## Pythagorean Triples: The Time Savers

Test writers like right triangles with whole-number sides. These sets, called **Pythagorean triples**, come up again and again. Knowing them lets you skip the squaring.

| Triple | Check | Common multiples |
|:---:|:---|:---|
| $3, 4, 5$ | $9 + 16 = 25$ | $6, 8, 10$ · $9, 12, 15$ · $30, 40, 50$ |
| $5, 12, 13$ | $25 + 144 = 169$ | $10, 24, 26$ |
| $8, 15, 17$ | $64 + 225 = 289$ | $16, 30, 34$ |
| $7, 24, 25$ | $49 + 576 = 625$ | |

**Spotting a multiple.** A rectangular field is $30$ yards by $40$ yards. How long is the diagonal? Divide out the common factor: $30, 40$ is $10 \\times (3, 4)$, so the diagonal is $10 \\times 5 = 50$ yards. No squaring of big numbers needed.

**Is it a right triangle?** Square the two shorter sides and compare with the square of the longest. Sides $9, 12, 15$: $81 + 144 = 225 = 15^2$, so yes. Sides $5, 6, 8$: $25 + 36 = 61$, but $8^2 = 64$, so no.

> **Key Fact:** The hypotenuse must be the longest side. If an answer choice for the hypotenuse is shorter than a leg, cross it out.`
    },
    {
      id: 'mkgs4-mc-legs',
      type: 'multiple-choice' as const,
      figure: mkgsLegs912Figure,
      content: '**Use the figure above.** 🎯',
      exercise: {
        questions: [
          {
            question: 'The legs of the right triangle are $9$ and $12$. How long is the hypotenuse?',
            options: ['$21$', '$17$', '$225$', '$15$'],
            correctAnswer: 3,
            explanation: '$9^2 + 12^2 = 81 + 144 = 225$, and $\\sqrt{225} = 15$. It is the $3, 4, 5$ triple times $3$. The choice $21$ adds the legs without squaring, and $225$ forgets the square root.'
          }
        ]
      }
    },
    {
      id: 'mkgs4-mc-ladder',
      type: 'multiple-choice' as const,
      figure: mkgsLadderFigure,
      content: '**Use the figure above.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A $25$-foot ladder leans against a wall with its foot $7$ feet from the wall. How high up the wall does the ladder reach?',
            options: ['$24$ feet', '$18$ feet', '$26$ feet', '$32$ feet'],
            correctAnswer: 0,
            explanation: 'The ladder is the hypotenuse, so subtract: $h^2 = 25^2 - 7^2 = 625 - 49 = 576$, and $h = 24$ (the $7, 24, 25$ triple). $26$ feet comes from adding the squares, which treats the ladder as a leg; $18$ and $32$ just subtract or add $7$ and $25$.'
          }
        ]
      }
    },
    {
      id: 'mkgs4-input',
      type: 'input-boxes' as const,
      content: `**Right-triangle practice.** ✍️ Enter numbers only.

**1)** Legs $15$ and $20$. The hypotenuse:

**2)** Hypotenuse $17$, one leg $8$. The other leg:

**3)** Legs $2$ and $3$. The value of $c^2$:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['25', '15', '13'],
        hint1: '$15, 20$ is $5 \\times (3, 4)$.',
        hint2: 'Subtract: $17^2 - 8^2$.',
        hint3: 'Add the squares: $4 + 9$.',
        explanation: '(1) $15^2 + 20^2 = 225 + 400 = 625$, so $c = 25$ ($5 \\times$ the $3, 4, 5$ triple). (2) $289 - 64 = 225$, so the leg is $15$ (the $8, 15, 17$ triple). (3) $c^2 = 2^2 + 3^2 = 4 + 9 = 13$, so $c = \\sqrt{13}$.'
      }
    },
    {
      id: 'mkgs4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Right triangle or not?** 🔽 Compare the two smaller squares with the largest square.',
      exercise: {
        dropdowns: [
          { label: 'Sides $7, 24, 25$', options: ['Right triangle', 'Not a right triangle'], correctAnswer: 0 },
          { label: 'Sides $6, 9, 12$', options: ['Right triangle', 'Not a right triangle'], correctAnswer: 1 },
          { label: 'Sides $10, 24, 26$', options: ['Right triangle', 'Not a right triangle'], correctAnswer: 0 },
          { label: 'Sides $4, 5, 6$', options: ['Right triangle', 'Not a right triangle'], correctAnswer: 1 }
        ],
        correctAnswers: ['Right triangle', 'Not a right triangle', 'Right triangle', 'Not a right triangle'],
        hint1: 'Square the two smaller sides and add them.',
        hint2: 'Compare that sum with the square of the largest side.',
        hint3: 'Equal means right triangle; anything else means not.',
        explanation: '$49 + 576 = 625 = 25^2$: right. $36 + 81 = 117$, but $12^2 = 144$: not right. $100 + 576 = 676 = 26^2$: right (twice $5, 12, 13$). $16 + 25 = 41$, but $6^2 = 36$: not right.'
      }
    },
    {
      id: 'mkgs4-similar',
      type: 'text' as const,
      figure: mkgsSimilarFigure,
      content: `## Similar Triangles

**Similar** triangles have the **same shape** but not necessarily the same size: one is a scaled copy of the other.

- Their matching (corresponding) **angles are equal**.
- Their matching **sides are in the same ratio**. Every side is multiplied by the same **scale factor**.

### How to solve

1. Match the sides: shortest with shortest, longest with longest (or by position in the figure).
2. Find the scale factor from one known pair.
3. Multiply (or set up a proportion) for the missing side.

**Worked example.** A triangle has sides $3, 4, 5$. A similar triangle has shortest side $9$. The scale factor is $9 \\div 3 = 3$, so the other sides are $4 \\times 3 = 12$ and $5 \\times 3 = 15$.

As a proportion: $\\dfrac{3}{9} = \\dfrac{4}{y}$ gives $3y = 36$, so $y = 12$.

**Shadows.** At the same moment, the sun hits everything at the same angle. A person and their shadow form a right triangle similar to the one a tree and its shadow form. That's how you find the height of something you can't measure directly.

> **Key Fact:** Similar means **multiply**, not add. If one side grows from $4$ to $10$, that is $\\times 2.5$; it is not "$+6$" for every side.`
    },
    {
      id: 'mkgs4-mc-similar',
      type: 'multiple-choice' as const,
      figure: mkgsSimilarFigure,
      content: '**Use the figure above.** 🎯 The two triangles are similar.',
      exercise: {
        questions: [
          {
            question: 'The small triangle has legs $4$ and $6$. The matching vertical leg of the large triangle is $10$. What is $x$?',
            options: ['$12$', '$15$', '$20$', '$9$'],
            correctAnswer: 1,
            explanation: 'The scale factor is $10 \\div 4 = 2.5$, so $x = 6 \\times 2.5 = 15$. The choice $12$ adds $6$ to each side (from $4$ to $10$) instead of multiplying.'
          }
        ]
      }
    },
    {
      id: 'mkgs4-mc-shadow',
      type: 'multiple-choice' as const,
      figure: mkgsShadowFigure,
      content: '**Use the figure above.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A $6$-foot person casts a $4$-foot shadow. At the same time, a flagpole casts an $18$-foot shadow. How tall is the flagpole?',
            options: ['$20$ feet', '$12$ feet', '$27$ feet', '$24$ feet'],
            correctAnswer: 2,
            explanation: 'Height and shadow are in the same ratio: $\\frac{6}{4} = \\frac{h}{18}$, so $4h = 108$ and $h = 27$ feet. $12$ feet flips the ratio, and $20$ feet adds $2$ to the shadow as if the change were a difference.'
          }
        ]
      }
    },
    {
      id: 'mkgs4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Right triangles only: $a^2 + b^2 = c^2$; the hypotenuse $c$ is across from the right angle and is the longest side
- Hypotenuse: **add** the squares; leg: **subtract**; then take the square root
- Know the triples: $3, 4, 5$ · $5, 12, 13$ · $8, 15, 17$ · $7, 24, 25$ and their multiples
- Similar triangles: equal angles, sides multiplied by one **scale factor**; set up a proportion
- Shadow problems are similar triangles

> **Up Next:** Part 5 — quadrilaterals, polygons and the $(n - 2) \\cdot 180^\\circ$ rule.`
    }
  ]
};
