const mkgsSideTypesFigure = {
  svg: '<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="20,100 80,100 50,48"/><polygon points="120,100 180,100 150,30"/><polygon points="220,100 300,100 245,55"/></g><g class="fig-accent" stroke="currentColor" stroke-width="2"><line x1="50" y1="95" x2="50" y2="105"/><line x1="30.7" y1="71.5" x2="39.3" y2="76.5"/><line x1="60.7" y1="76.5" x2="69.3" y2="71.5"/><line x1="130.4" y1="63" x2="139.6" y2="67"/><line x1="160.4" y1="67" x2="169.6" y2="63"/></g><g font-size="11" fill="currentColor" text-anchor="middle"><text x="50" y="120">equilateral</text><text x="150" y="120">isosceles</text><text x="260" y="120">scalene</text></g></svg>',
  alt: 'Three triangles. An equilateral triangle with a tick mark on all three sides, showing all sides are equal. An isosceles triangle with tick marks on its two slanted sides, showing those two sides are equal. A scalene triangle with no tick marks, because no sides are equal.',
  caption: 'Figure 1a. Triangles named by their sides (matching tick marks = equal sides).',
  size: 'md' as const,
}

const mkgsAngleTypesTriFigure = {
  svg: '<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="20,100 90,100 60,40"/><polygon points="120,100 190,100 120,45"/><path d="M 130 100 L 130 90 L 120 90" stroke-width="1.5"/><polygon points="215,100 300,100 195,60"/></g><g font-size="11" fill="currentColor" text-anchor="middle"><text x="55" y="120">acute</text><text x="155" y="120">right</text><text x="250" y="120">obtuse</text></g></svg>',
  alt: 'Three triangles. An acute triangle whose three angles are all smaller than a right angle. A right triangle with a small square marking its right angle. An obtuse triangle with one angle wider than a right angle.',
  caption: 'Figure 1b. Triangles named by their largest angle.',
  size: 'md' as const,
}

const mkgsExteriorGenericFigure = {
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="50,170 200,170 118.2,72.7"/></g><g class="fig-muted" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"><line x1="200" y1="170" x2="290" y2="170"/></g><g class="fig-accent" fill="none" stroke="currentColor" stroke-width="2"><path d="M 218 170 A 18 18 0 0 0 188.4 156.2"/></g><g font-size="13" fill="currentColor" text-anchor="middle"><text x="76" y="163">a</text><text x="119" y="98">b</text><text x="182" y="163">c</text><text x="232" y="148">a + b</text></g></svg>',
  alt: 'A triangle with angles a at the lower left, b at the top and c at the lower right. The bottom side is extended past the lower right corner with a dashed line. The exterior angle formed outside the triangle at the lower right, between the extension and the right side, is labeled a plus b.',
  caption: 'Figure 2. An exterior angle equals the sum of the two angles across from it.',
  size: 'md' as const,
}

const mkgsTriangleXFigure = {
  svg: '<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="60,190 220,190 171.1,47.9"/></g><g font-size="13" fill="currentColor" text-anchor="middle"><text x="90" y="182">52°</text><text x="198" y="182">71°</text><text x="170" y="76">x</text></g></svg>',
  alt: 'A triangle. The angle at the lower left corner is labeled 52 degrees, the angle at the lower right corner is labeled 71 degrees, and the angle at the top is labeled x.',
  caption: 'Figure 3. Find the third angle.',
  size: 'md' as const,
}

const mkgsExteriorFigure = {
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="50,170 200,170 118.2,72.7"/><line x1="200" y1="170" x2="290" y2="170"/></g><g class="fig-accent" fill="none" stroke="currentColor" stroke-width="2"><path d="M 218 170 A 18 18 0 0 0 188.4 156.2"/></g><g font-size="13" fill="currentColor" text-anchor="middle"><text x="78" y="164">55°</text><text x="120" y="98">x</text><text x="228" y="150">130°</text></g></svg>',
  alt: 'A triangle whose bottom side is extended to the right past the lower right corner. The interior angle at the lower left corner is labeled 55 degrees and the interior angle at the top is labeled x. The exterior angle at the lower right corner, between the extended base and the right side of the triangle, is labeled 130 degrees.',
  caption: 'Figure 4. An exterior angle of $130^\\circ$.',
  size: 'md' as const,
}

export const asvabMkGeometryShapesPart3Data = {
  topicSlug: 'asvab-mk-geometry-shapes',
  sections: [
    {
      id: 'mkgs3-intro',
      type: 'text' as const,
      figure: [mkgsSideTypesFigure, mkgsAngleTypesTriFigure],
      content: `# 📐 Angles, Triangles and Polygons

**Part 3 of 7 — Triangles: Types, Angle Sums and Side Rules**

## Naming Triangles

Triangles get two kinds of names: one from their **sides** and one from their **angles**.

| By sides | Meaning | By angles | Meaning |
|:---|:---|:---|:---|
| **Equilateral** | all 3 sides equal | **Acute** | all 3 angles under $90^\\circ$ |
| **Isosceles** | at least 2 sides equal | **Right** | one angle exactly $90^\\circ$ |
| **Scalene** | no sides equal | **Obtuse** | one angle over $90^\\circ$ |

A few facts follow right away:

- An **equilateral** triangle also has three equal angles: $180 \\div 3 = 60^\\circ$ each.
- A triangle can have **at most one** right angle or obtuse angle. Two of them would already use up $180^\\circ$ or more.
- In a **right** triangle, the two smaller angles add to $90^\\circ$ (they are complementary).`
    },
    {
      id: 'mkgs3-sum',
      type: 'text' as const,
      figure: mkgsExteriorGenericFigure,
      content: `## The $180^\\circ$ Rule and the Exterior-Angle Shortcut

**The angles of every triangle add to $180^\\circ$.** That one rule solves most triangle questions.

An **exterior angle** is made by extending one side of the triangle. It sits on a straight line with the interior angle next to it, and that leads to a shortcut:

> **Key Fact:** An exterior angle equals the **sum of the two interior angles across from it** (the two that don't touch it). In the figure, the exterior angle is $a + b$.

Why it works: $c$ and the exterior angle make $180^\\circ$, and so do $c$ and $a + b$ (the triangle rule). So the exterior angle and $a + b$ must be equal.

### Worked Examples

**1. Missing angle.** Two angles of a triangle are $48^\\circ$ and $67^\\circ$. The third is $180 - 48 - 67 = 65^\\circ$.

**2. Exterior angle.** The two interior angles across from an exterior angle are $40^\\circ$ and $75^\\circ$. The exterior angle is $40 + 75 = 115^\\circ$. No need to find the third interior angle first.

**3. Isosceles.** An isosceles triangle has a top (vertex) angle of $30^\\circ$. The two base angles are equal, so each is $(180 - 30) \\div 2 = 75^\\circ$.

**4. Right triangle.** One acute angle of a right triangle is $23^\\circ$. The other is $90 - 23 = 67^\\circ$.`
    },
    {
      id: 'mkgs3-sides',
      type: 'text' as const,
      content: `## Side Rules

### Isosceles triangles

The two equal sides sit across from the two equal angles. Equal sides ↔ equal angles: if you know one, you know the other.

### Bigger angle, longer side

In any triangle, the **longest side is across from the largest angle**, and the shortest side is across from the smallest angle. In a right triangle, the longest side is the one across from the $90^\\circ$ angle.

### The triangle inequality

Three lengths make a triangle **only if the two shorter ones add to more than the longest one**. If they are equal or smaller, the sides lie flat or can't meet.

| Lengths | Two shorter added | Longest | Triangle? |
|:---:|:---:|:---:|:---:|
| $3, 4, 8$ | $7$ | $8$ | No ($7 < 8$) |
| $4, 5, 9$ | $9$ | $9$ | No (equal is not enough) |
| $4, 5, 8$ | $9$ | $8$ | Yes ($9 > 8$) |

**Range for the third side:** if two sides are $5$ and $9$, the third side must be **more than** $9 - 5 = 4$ and **less than** $9 + 5 = 14$.

> **Key Fact:** Third side: between the **difference** and the **sum** of the other two, never equal to either.`
    },
    {
      id: 'mkgs3-mc-sum',
      type: 'multiple-choice' as const,
      figure: mkgsTriangleXFigure,
      content: '**Use the figure above.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Two angles of the triangle are $52^\\circ$ and $71^\\circ$. What is $x$?',
            options: ['$67^\\circ$', '$123^\\circ$', '$57^\\circ$', '$47^\\circ$'],
            correctAnswer: 2,
            explanation: 'The angles add to $180^\\circ$: $180 - 52 - 71 = 57$. The choice $123^\\circ$ is $52 + 71$, the part you subtract; $67^\\circ$ and $47^\\circ$ are subtraction slips.'
          }
        ]
      }
    },
    {
      id: 'mkgs3-mc-exterior',
      type: 'multiple-choice' as const,
      figure: mkgsExteriorFigure,
      content: '**Use the figure above.** 🎯',
      exercise: {
        questions: [
          {
            question: 'The exterior angle in the figure measures $130^\\circ$, and one interior angle across from it is $55^\\circ$. What is $x$?',
            options: ['$50^\\circ$', '$75^\\circ$', '$105^\\circ$', '$185^\\circ$'],
            correctAnswer: 1,
            explanation: 'The exterior angle equals the sum of the two interior angles across from it: $55 + x = 130$, so $x = 75$. The choice $50^\\circ$ is the interior angle next to the exterior angle ($180 - 130$), and $185^\\circ$ adds the two given numbers.'
          }
        ]
      }
    },
    {
      id: 'mkgs3-mc-rules',
      type: 'multiple-choice' as const,
      content: '**Apply the rules.** 🎯',
      exercise: {
        questions: [
          {
            question: 'The vertex (top) angle of an isosceles triangle is $40^\\circ$. What is the measure of each base angle?',
            options: ['$140^\\circ$', '$40^\\circ$', '$50^\\circ$', '$70^\\circ$'],
            correctAnswer: 3,
            explanation: 'The base angles are equal and share what is left of $180^\\circ$: $(180 - 40) \\div 2 = 70$. Forgetting to divide by $2$ gives $140^\\circ$.'
          },
          {
            question: 'Which set of three lengths can be the sides of a triangle?',
            options: ['$2, 3, 6$', '$4, 6, 9$', '$5, 5, 10$', '$1, 8, 10$'],
            correctAnswer: 1,
            explanation: 'For $4, 6, 9$: $4 + 6 = 10$, which is more than $9$, so the sides meet. For $2, 3, 6$ and $1, 8, 10$ the two shorter sides add to less than the longest, and for $5, 5, 10$ they add to exactly $10$, which lies flat.'
          }
        ]
      }
    },
    {
      id: 'mkgs3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify each triangle.** 🔽',
      exercise: {
        dropdowns: [
          { label: 'Sides $6, 6, 6$: by sides it is', options: ['Equilateral', 'Isosceles', 'Scalene'], correctAnswer: 0 },
          { label: 'Sides $5, 8, 8$: by sides it is', options: ['Equilateral', 'Isosceles', 'Scalene'], correctAnswer: 1 },
          { label: 'Angles $30^\\circ, 60^\\circ, 90^\\circ$: by angles it is', options: ['Acute', 'Right', 'Obtuse'], correctAnswer: 1 },
          { label: 'Angles $25^\\circ, 40^\\circ, 115^\\circ$: by angles it is', options: ['Acute', 'Right', 'Obtuse'], correctAnswer: 2 }
        ],
        correctAnswers: ['Equilateral', 'Isosceles', 'Right', 'Obtuse'],
        hint1: 'Count equal sides: three, two or none.',
        hint2: 'For angles, look only at the largest one.',
        hint3: 'Exactly $90^\\circ$ is right; over $90^\\circ$ is obtuse.',
        explanation: 'Three equal sides is equilateral; exactly two equal sides is isosceles. A $90^\\circ$ angle makes the triangle right; a $115^\\circ$ angle makes it obtuse.'
      }
    },
    {
      id: 'mkgs3-input',
      type: 'input-boxes' as const,
      content: `**Work it out.** ✍️ Enter numbers only.

**1)** The angles of a triangle are in the ratio $1 : 2 : 3$. The smallest angle, in degrees:

**2)** A triangle has sides of $6$ and $11$. The third side must be greater than:

**3)** ... and less than:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['30', '5', '17'],
        hint1: 'Write the angles as $x$, $2x$ and $3x$; they add to $180$.',
        hint2: 'The third side is more than the difference of the other two.',
        hint3: '... and less than their sum.',
        explanation: '(1) $x + 2x + 3x = 180$ gives $6x = 180$, so $x = 30$ (the angles are $30^\\circ$, $60^\\circ$, $90^\\circ$). (2) $11 - 6 = 5$. (3) $11 + 6 = 17$. The third side is strictly between $5$ and $17$.'
      }
    },
    {
      id: 'mkgs3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- By sides: equilateral (3 equal), isosceles (2 equal), scalene (none); by angles: acute, right, obtuse
- The angles of a triangle add to $180^\\circ$; equilateral angles are $60^\\circ$ each
- **Exterior angle = sum of the two interior angles across from it**
- Isosceles: equal sides ↔ equal base angles; longest side is across from the largest angle
- Triangle inequality: the third side is strictly between the **difference** and the **sum** of the other two

> **Up Next:** Part 4 — the Pythagorean theorem, the number patterns that make right triangles fast, and similar triangles.`
    }
  ]
};
