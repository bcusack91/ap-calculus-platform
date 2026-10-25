const mkgsQuadFamilyFigure = {
  svg: '<svg viewBox="0 0 400 125" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="10,95 70,95 90,45 30,45"/><polygon points="110,95 170,95 170,45 110,45"/><path d="M 118 95 L 118 87 L 110 87" stroke-width="1.5"/><polygon points="230,100 255,70 230,40 205,70"/><polygon points="280,95 325,95 325,50 280,50"/><path d="M 288 95 L 288 87 L 280 87" stroke-width="1.5"/><polygon points="340,95 398,95 385,50 355,50"/></g><g font-size="10" fill="currentColor" text-anchor="middle"><text x="50" y="117">parallelogram</text><text x="140" y="117">rectangle</text><text x="230" y="117">rhombus</text><text x="302" y="117">square</text><text x="370" y="117">trapezoid</text></g></svg>',
  alt: 'Five quadrilaterals in a row. A parallelogram, slanted, with opposite sides parallel. A rectangle with a right-angle mark. A rhombus shaped like a diamond with four equal sides. A square with a right-angle mark and four equal sides. A trapezoid with a long bottom side and a shorter top side that are parallel, and slanted sides that are not parallel.',
  caption: 'Figure 1. The quadrilateral family.',
  size: 'lg' as const,
}

const mkgsHexagonFigure = {
  svg: '<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="240,105 200,35.7 120,35.7 80,105 120,174.3 200,174.3"/></g><g class="fig-accent" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"><line x1="80" y1="105" x2="200" y2="35.7"/><line x1="80" y1="105" x2="240" y2="105"/><line x1="80" y1="105" x2="200" y2="174.3"/></g><g font-size="13" fill="currentColor" text-anchor="middle"><text x="134" y="63">1</text><text x="174" y="86">2</text><text x="174" y="132">3</text><text x="134" y="155">4</text></g></svg>',
  alt: 'A hexagon with six sides. Three dashed diagonals drawn from one corner split it into four triangles, numbered 1 through 4.',
  caption: 'Figure 2. Diagonals from one corner split a hexagon into $6 - 2 = 4$ triangles.',
  size: 'md' as const,
}

const mkgsParallelogramFigure = {
  svg: '<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="50,160 220,160 256.4,60 86.4,60"/></g><g font-size="13" fill="currentColor" text-anchor="middle"><text x="78" y="152">70°</text><text x="205" y="152">x</text></g></svg>',
  alt: 'A parallelogram leaning to the right. The angle at the lower left corner is labeled 70 degrees. The angle at the lower right corner is labeled x.',
  caption: 'Figure 3. A parallelogram.',
  size: 'md' as const,
}

const mkgsQuadAnglesFigure = {
  svg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="60,190 260,190 216.5,70.5 49.5,70.5"/></g><g font-size="13" fill="currentColor"><text x="80" y="180" text-anchor="middle">95°</text><text x="238" y="180" text-anchor="middle">x</text><text x="210" y="90" text-anchor="end">110°</text><text x="66" y="90" text-anchor="start">85°</text></g></svg>',
  alt: 'A four-sided figure with no parallel sides marked. Its angles are labeled 95 degrees at the lower left, x at the lower right, 110 degrees at the upper right and 85 degrees at the upper left.',
  caption: 'Figure 4. A quadrilateral with one unknown angle.',
  size: 'md' as const,
}

export const asvabMkGeometryShapesPart5Data = {
  topicSlug: 'asvab-mk-geometry-shapes',
  sections: [
    {
      id: 'mkgs5-intro',
      type: 'text' as const,
      figure: mkgsQuadFamilyFigure,
      content: `# 📐 Angles, Triangles and Polygons

**Part 5 of 7 — Quadrilaterals and Other Polygons**

## Quadrilaterals

A **quadrilateral** is any four-sided figure. Its four angles always add to $360^\\circ$ (two triangles' worth).

| Shape | What makes it special |
|:---|:---|
| **Parallelogram** | both pairs of opposite sides parallel and equal; opposite angles equal; angles next to each other add to $180^\\circ$ |
| **Rectangle** | a parallelogram with four right angles; its diagonals are equal |
| **Rhombus** | a parallelogram with four equal sides; its diagonals cross at right angles |
| **Square** | four equal sides **and** four right angles (a rectangle and a rhombus at once) |
| **Trapezoid** | exactly one pair of parallel sides |

### The family tree

- Every **square** is a rectangle, a rhombus and a parallelogram.
- A **rectangle** is a square only when its sides are all equal.
- A **trapezoid** is **not** a parallelogram: it has only one pair of parallel sides.

> **Key Fact:** In a parallelogram, the angles next to each other (consecutive angles) add to $180^\\circ$, and the angles across from each other are equal. One angle tells you all four.`
    },
    {
      id: 'mkgs5-polygons',
      type: 'text' as const,
      figure: mkgsHexagonFigure,
      content: `## Polygons and Their Angle Sums

A **polygon** is a closed figure with straight sides. Draw diagonals from one corner and the polygon splits into triangles, always **two fewer triangles than sides**. Each triangle holds $180^\\circ$, so:

$$\\text{Sum of interior angles} = (n - 2) \\cdot 180^\\circ \\qquad (n = \\text{number of sides})$$

| Polygon | Sides $n$ | Angle sum |
|:---|:---:|:---:|
| Triangle | 3 | $180^\\circ$ |
| Quadrilateral | 4 | $360^\\circ$ |
| Pentagon | 5 | $540^\\circ$ |
| Hexagon | 6 | $720^\\circ$ |
| Octagon | 8 | $1080^\\circ$ |

### Regular polygons

A **regular** polygon has all sides equal and all angles equal. To find **one** angle, divide the sum by $n$.

**Worked example.** One interior angle of a regular pentagon: $540 \\div 5 = 108^\\circ$.

### Exterior angles

Walk around any polygon and you turn a full $360^\\circ$. So the **exterior angles of any polygon add to $360^\\circ$**, and each exterior angle of a regular polygon is $360 \\div n$. Each exterior angle and its interior angle sit on a straight line, so they add to $180^\\circ$.

**Worked example.** A regular polygon has exterior angles of $30^\\circ$. It has $360 \\div 30 = 12$ sides.

> **Key Fact:** Interior sum $(n - 2) \\cdot 180$; exterior sum always $360$. For a regular polygon, divide either sum by $n$ to get one angle.`
    },
    {
      id: 'mkgs5-mc-parallelogram',
      type: 'multiple-choice' as const,
      figure: mkgsParallelogramFigure,
      content: '**Use the figure above.** 🎯',
      exercise: {
        questions: [
          {
            question: 'One angle of the parallelogram measures $70^\\circ$. What is $x$, the angle next to it along the bottom side?',
            options: ['$70^\\circ$', '$290^\\circ$', '$20^\\circ$', '$110^\\circ$'],
            correctAnswer: 3,
            explanation: 'Consecutive angles of a parallelogram add to $180^\\circ$: $180 - 70 = 110$. The angle equal to $70^\\circ$ is the one across from it (upper right), not the one next to it.'
          }
        ]
      }
    },
    {
      id: 'mkgs5-mc-quad',
      type: 'multiple-choice' as const,
      figure: mkgsQuadAnglesFigure,
      content: '**Use the figure above.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Three angles of the quadrilateral are $95^\\circ$, $110^\\circ$ and $85^\\circ$. What is $x$?',
            options: ['$80^\\circ$', '$70^\\circ$', '$250^\\circ$', '$60^\\circ$'],
            correctAnswer: 1,
            explanation: 'A quadrilateral\'s angles add to $360^\\circ$: $95 + 110 + 85 = 290$, and $360 - 290 = 70$. The choice $250^\\circ$ comes from using the pentagon sum, $540^\\circ$.'
          }
        ]
      }
    },
    {
      id: 'mkgs5-input',
      type: 'input-boxes' as const,
      content: `**Polygon angles.** ✍️ Enter numbers only (degrees).

**1)** The sum of the interior angles of a heptagon (7 sides):

**2)** One interior angle of a regular octagon:

**3)** One exterior angle of a regular polygon with 20 sides:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['900', '135', '18'],
        hint1: '$(7 - 2) \\cdot 180$.',
        hint2: 'Octagon sum is $1080^\\circ$; divide by $8$.',
        hint3: 'Exterior angles always add to $360^\\circ$.',
        explanation: '(1) $(7 - 2) \\cdot 180 = 5 \\cdot 180 = 900$. (2) $(8 - 2) \\cdot 180 = 1080$, and $1080 \\div 8 = 135$. (3) $360 \\div 20 = 18$.'
      }
    },
    {
      id: 'mkgs5-dropdown',
      type: 'dropdown-select' as const,
      figure: mkgsQuadFamilyFigure,
      content: '**Always, sometimes or never?** 🔽',
      exercise: {
        dropdowns: [
          { label: 'A square is a rectangle.', options: ['Always true', 'Sometimes true', 'Never true'], correctAnswer: 0 },
          { label: 'A rectangle is a square.', options: ['Always true', 'Sometimes true', 'Never true'], correctAnswer: 1 },
          { label: 'A rhombus has exactly one pair of parallel sides.', options: ['Always true', 'Sometimes true', 'Never true'], correctAnswer: 2 },
          { label: 'A rhombus has four equal sides.', options: ['Always true', 'Sometimes true', 'Never true'], correctAnswer: 0 }
        ],
        correctAnswers: ['Always true', 'Sometimes true', 'Never true', 'Always true'],
        hint1: 'A square has four right angles. Is that enough to be a rectangle?',
        hint2: 'A rectangle needs equal sides to be a square.',
        hint3: 'A rhombus is a special parallelogram. How many pairs of parallel sides does a parallelogram have?',
        explanation: 'Every square has four right angles, so it is always a rectangle. A rectangle is a square only when its sides are equal, so sometimes. A rhombus is a parallelogram, so both pairs of opposite sides are parallel: never just one pair. Four equal sides is the definition of a rhombus, so always.'
      }
    },
    {
      id: 'mkgs5-mc-regular',
      type: 'multiple-choice' as const,
      content: '**Work backward.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Each interior angle of a regular polygon measures $140^\\circ$. How many sides does it have?',
            options: ['$7$', '$9$', '$10$', '$14$'],
            correctAnswer: 1,
            explanation: 'Each exterior angle is $180 - 140 = 40^\\circ$, and the exterior angles add to $360^\\circ$, so $n = 360 \\div 40 = 9$. Check: $(9 - 2) \\cdot 180 = 1260$, and $1260 \\div 9 = 140$. ✓'
          },
          {
            question: 'Which statement is true for every parallelogram?',
            options: ['All four angles are right angles', 'Opposite angles are equal', 'All four sides are equal', 'The diagonals cross at right angles'],
            correctAnswer: 1,
            explanation: 'Every parallelogram has equal opposite angles. Four right angles describes a rectangle, four equal sides a rhombus, and diagonals crossing at right angles a rhombus too.'
          }
        ]
      }
    },
    {
      id: 'mkgs5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Quadrilateral angles add to $360^\\circ$
- Parallelogram: opposite angles equal, consecutive angles add to $180^\\circ$; rectangle, rhombus and square are special parallelograms; a trapezoid has exactly one pair of parallel sides
- Interior angle sum: $(n - 2) \\cdot 180^\\circ$; exterior angle sum: always $360^\\circ$
- Regular polygon: one interior angle $= \\dfrac{(n - 2) \\cdot 180}{n}$, one exterior angle $= \\dfrac{360}{n}$
- Interior + exterior at the same corner $= 180^\\circ$

> **Up Next:** Part 6 — how to work geometry items fast on test day, and the traps the wrong answers are built from.`
    }
  ]
};
