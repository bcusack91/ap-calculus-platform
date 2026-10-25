const mkgsAngleTypesFigure = {
  svg: '<svg viewBox="0 0 400 135" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="20" y1="95" x2="95" y2="95"/><line x1="20" y1="95" x2="80" y2="45"/><line x1="125" y1="95" x2="195" y2="95"/><line x1="125" y1="95" x2="125" y2="35"/><path d="M 137 95 L 137 83 L 125 83" stroke-width="1.5"/><line x1="260" y1="95" x2="325" y2="95"/><line x1="260" y1="95" x2="225" y2="45"/><line x1="335" y1="95" x2="395" y2="95"/></g><g class="fig-accent" fill="none" stroke="currentColor" stroke-width="2"><path d="M 38 95 A 18 18 0 0 0 33.8 83.5"/><path d="M 276 95 A 16 16 0 0 0 250.8 81.9"/><path d="M 377 95 A 12 12 0 0 0 353 95"/></g><circle cx="365" cy="95" r="3" fill="currentColor"/><g font-size="11" fill="currentColor" text-anchor="middle"><text x="55" y="114">acute</text><text x="160" y="114">right</text><text x="285" y="114">obtuse</text><text x="365" y="114">straight</text></g><g font-size="10" fill="currentColor" text-anchor="middle"><text x="55" y="128">under 90°</text><text x="160" y="128">exactly 90°</text><text x="285" y="128">over 90°</text><text x="365" y="128">exactly 180°</text></g></svg>',
  alt: 'Four angles side by side. An acute angle, smaller than a right angle, labeled under 90 degrees. A right angle with a small square in its corner, labeled exactly 90 degrees. An obtuse angle, wider than a right angle, labeled over 90 degrees. A straight angle that is a straight line through a point, labeled exactly 180 degrees.',
  caption: 'Figure 1. The four angle types you need by name.',
  size: 'md' as const,
}

const mkgsStraightLineFigure = {
  svg: '<svg viewBox="0 0 320 175" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2"><line x1="20" y1="150" x2="300" y2="150"/><line x1="160" y1="150" x2="216" y2="44"/></g><g class="fig-accent" fill="none" stroke="currentColor" stroke-width="2"><path d="M 182 150 A 22 22 0 0 0 170.3 130.6"/><path d="M 167.5 135.9 A 16 16 0 0 0 144 150"/></g><circle cx="160" cy="150" r="3" fill="currentColor"/><text x="136" y="120" font-size="13" fill="currentColor" text-anchor="middle">118°</text><text x="198" y="134" font-size="13" fill="currentColor" text-anchor="middle">x</text></svg>',
  alt: 'A horizontal straight line with a ray rising up and to the right from a point on the line. The ray splits the straight angle into two angles: the wider angle on the left is labeled 118 degrees, and the narrower angle on the right is labeled x.',
  caption: 'Figure 2. A ray meets a straight line.',
  size: 'md' as const,
}

const mkgsRightSplitFigure = {
  svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="60" y1="180" x2="280" y2="180"/><line x1="60" y1="180" x2="60" y2="20"/><line x1="60" y1="180" x2="225.8" y2="68.2"/><path d="M 72 180 L 72 168 L 60 168" stroke-width="1.5"/></g><text x="134" y="164" font-size="13" fill="currentColor" text-anchor="middle">34°</text><text x="90" y="128" font-size="13" fill="currentColor" text-anchor="middle">y</text></svg>',
  alt: 'A right angle, marked with a small square at its corner, formed by a horizontal ray and a vertical ray. A third ray from the corner splits the right angle into two parts: the lower part next to the horizontal ray is labeled 34 degrees, and the upper part next to the vertical ray is labeled y.',
  caption: 'Figure 3. A ray splits a right angle.',
  size: 'md' as const,
}

const mkgsAroundPointFigure = {
  svg: '<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2"><line x1="160" y1="110" x2="260" y2="110"/><line x1="160" y1="110" x2="83.4" y2="45.7"/><line x1="160" y1="110" x2="102.6" y2="191.9"/></g><circle cx="160" cy="110" r="3" fill="currentColor"/><g font-size="13" fill="currentColor" text-anchor="middle"><text x="172" y="78">140°</text><text x="122" y="118">95°</text><text x="180" y="146">x</text></g></svg>',
  alt: 'Three rays start from one point and divide the full turn around it into three angles. The top angle is labeled 140 degrees, the left angle is labeled 95 degrees, and the lower right angle is labeled x.',
  caption: 'Figure 4. Three angles around one point.',
  size: 'md' as const,
}

export const asvabMkGeometryShapesPart1Data = {
  topicSlug: 'asvab-mk-geometry-shapes',
  sections: [
    {
      id: 'mkgs1-intro',
      type: 'text' as const,
      content: `# 📐 Angles, Triangles and Polygons

**Part 1 of 7 — Angles on the ASVAB**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Angles on the ASVAB** |
| 2 | Vertical angles and parallel lines |
| 3 | Triangles: types, angle sums and side rules |
| 4 | The Pythagorean theorem and similar triangles |
| 5 | Quadrilaterals and other polygons |
| 6 | Test strategy and common traps |
| 7 | Mixed mastery set |

### What This Looks Like on the ASVAB

Mathematics Knowledge (MK) is the fifth subtest on the computer version (CAT-ASVAB): **15 scored questions in 31 minutes**, so you have about **2 minutes per question**. Every question has **four answer choices**, and there is **no calculator**. At MEPS you get two sheets of scratch paper and two pencils, and you can ask for more.

The official description of MK includes **"geometry and measurement,"** so expect several questions about shapes: a missing angle, a side of a right triangle, an angle inside a polygon. The numbers are usually friendly. What the question really tests is whether you know **which rule** to use.

MK is one of the four subtests in your **AFQT** (AR + MK + 2·VE), the score the military uses to check whether you are eligible to enlist. Every geometry rule you lock in here is points toward that score.

### Facts to Know by Heart

Plan on having no formulas given to you: learn these by heart. This topic uses every one of them.

| Fact | Value |
|:---|:---:|
| Right angle | $90^\\circ$ |
| Straight angle (a straight line) | $180^\\circ$ |
| All the way around a point | $360^\\circ$ |
| Complementary angles add to | $90^\\circ$ |
| Supplementary angles add to | $180^\\circ$ |
| Angles in a triangle add to | $180^\\circ$ |
| Angles in a quadrilateral add to | $360^\\circ$ |
| Angles in a polygon with $n$ sides add to | $(n - 2) \\cdot 180^\\circ$ |
| Right triangle (Pythagorean theorem) | $a^2 + b^2 = c^2$ |

Don't try to memorize the whole table today. By Part 7 you will have used each line many times.`
    },
    {
      id: 'mkgs1-warmup',
      type: 'multiple-choice' as const,
      content: `**Warm-up.** 🔥 Try these before we teach anything. Missing one is fine: it tells you what to watch for.`,
      exercise: {
        questions: [
          {
            question: 'Two angles are complementary. One of them measures $35^\\circ$. What does the other angle measure?',
            options: ['$145^\\circ$', '$55^\\circ$', '$65^\\circ$', '$325^\\circ$'],
            correctAnswer: 1,
            explanation: 'Complementary angles add to $90^\\circ$: $90 - 35 = 55$. The choice $145^\\circ$ comes from using $180^\\circ$, which is the rule for supplementary angles.'
          },
          {
            question: 'What is the sum of the three angles of any triangle?',
            options: ['$90^\\circ$', '$270^\\circ$', '$360^\\circ$', '$180^\\circ$'],
            correctAnswer: 3,
            explanation: 'The three angles of every triangle add to $180^\\circ$, whatever its shape or size. $360^\\circ$ is the sum for a quadrilateral.'
          },
          {
            question: 'An angle measures $132^\\circ$. What type of angle is it?',
            options: ['Obtuse', 'Acute', 'Right', 'Straight'],
            correctAnswer: 0,
            explanation: 'An angle between $90^\\circ$ and $180^\\circ$ is obtuse. Acute angles are under $90^\\circ$, a right angle is exactly $90^\\circ$, and a straight angle is exactly $180^\\circ$.'
          }
        ]
      }
    },
    {
      id: 'mkgs1-types',
      type: 'text' as const,
      figure: mkgsAngleTypesFigure,
      content: `## Angle Basics

An **angle** is made by two rays that start at the same point, called the **vertex**. We measure angles in **degrees** ($^\\circ$). A full turn is $360^\\circ$.

| Type | Size | How to spot it |
|:---|:---|:---|
| **Acute** | less than $90^\\circ$ | narrower than the corner of a sheet of paper |
| **Right** | exactly $90^\\circ$ | marked with a small square in the corner |
| **Obtuse** | between $90^\\circ$ and $180^\\circ$ | wider than a corner, but not flat |
| **Straight** | exactly $180^\\circ$ | a straight line through the vertex |

> **Key Fact:** The little square in a corner means **exactly** $90^\\circ$. If a question shows that square, you have been handed a number even though no degrees are written.

Angles are named in two common ways: by the vertex alone ($\\angle B$), or by three points with the vertex in the middle ($\\angle ABC$).`
    },
    {
      id: 'mkgs1-pairs',
      type: 'text' as const,
      content: `## Angle Pairs: Complementary, Supplementary and All the Way Around

Most angle questions come down to three sums:

| Name | The angles add to | Picture |
|:---|:---:|:---|
| **Complementary** | $90^\\circ$ | two angles that together fill a right-angle **corner** |
| **Supplementary** | $180^\\circ$ | two angles that together make a **straight** line |
| **Around a point** | $360^\\circ$ | all the angles that fill a full turn |

**Memory trick:** **C**omplementary = **C**orner ($90^\\circ$). **S**upplementary = **S**traight ($180^\\circ$).

### Worked Examples

**1. The complement of $48^\\circ$.** Complementary means the pair makes $90^\\circ$: $90 - 48 = 42^\\circ$.

**2. The supplement of $75^\\circ$.** Supplementary means the pair makes $180^\\circ$: $180 - 75 = 105^\\circ$.

**3. Two supplementary angles, one is 3 times the other.** Call the smaller one $x$. Then the larger is $3x$, and together they make a straight line:

$$x + 3x = 180 \\quad\\Rightarrow\\quad 4x = 180 \\quad\\Rightarrow\\quad x = 45$$

The angles are $45^\\circ$ and $135^\\circ$. Check: $45 + 135 = 180$. ✓

**4. Angles around a point.** Three angles fill a full turn: $90^\\circ$, $150^\\circ$ and $x$.

$$90 + 150 + x = 360 \\quad\\Rightarrow\\quad x = 120$$

> **Key Fact:** Write the sum first ("these make $180$"), then the equation. Naming the rule is the step that keeps you out of the traps.`
    },
    {
      id: 'mkgs1-mc-straight',
      type: 'multiple-choice' as const,
      figure: mkgsStraightLineFigure,
      content: '**Use the figure above.** 🎯',
      exercise: {
        questions: [
          {
            question: 'In the figure, a ray meets a straight line and forms angles of $118^\\circ$ and $x$. What is $x$?',
            options: ['$72^\\circ$', '$118^\\circ$', '$28^\\circ$', '$62^\\circ$'],
            correctAnswer: 3,
            explanation: 'The two angles sit on a straight line, so they are supplementary: $180 - 118 = 62$. The choice $28^\\circ$ comes from subtracting $90$ from $118$, and $118^\\circ$ just repeats the given angle.'
          }
        ]
      }
    },
    {
      id: 'mkgs1-mc-corner',
      type: 'multiple-choice' as const,
      figure: mkgsRightSplitFigure,
      content: '**Use the figure above.** 🎯 The square in the corner matters.',
      exercise: {
        questions: [
          {
            question: 'A ray splits the right angle in the figure into a $34^\\circ$ angle and an angle $y$. What is $y$?',
            options: ['$56^\\circ$', '$146^\\circ$', '$34^\\circ$', '$66^\\circ$'],
            correctAnswer: 0,
            explanation: 'The square means the whole corner is $90^\\circ$, so the two parts are complementary: $90 - 34 = 56$. The choice $146^\\circ$ treats the corner as a straight line.'
          }
        ]
      }
    },
    {
      id: 'mkgs1-mc-around',
      type: 'multiple-choice' as const,
      figure: mkgsAroundPointFigure,
      content: '**Use the figure above.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Three angles fill the full turn around the point in the figure: $140^\\circ$, $95^\\circ$ and $x$. What is $x$?',
            options: ['$55^\\circ$', '$235^\\circ$', '$125^\\circ$', '$145^\\circ$'],
            correctAnswer: 2,
            explanation: 'A full turn is $360^\\circ$: $360 - 140 - 95 = 125$. The choice $235^\\circ$ is $140 + 95$, the part you subtract, and $55^\\circ$ comes from using $180^\\circ$ instead of $360^\\circ$ ($235 - 180$).'
          }
        ]
      }
    },
    {
      id: 'mkgs1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Name the angle.** 🔽 Choose the type for each measure.',
      exercise: {
        dropdowns: [
          { label: '$89^\\circ$ is', options: ['Acute', 'Right', 'Obtuse', 'Straight'], correctAnswer: 0 },
          { label: '$90^\\circ$ is', options: ['Acute', 'Right', 'Obtuse', 'Straight'], correctAnswer: 1 },
          { label: '$179^\\circ$ is', options: ['Acute', 'Right', 'Obtuse', 'Straight'], correctAnswer: 2 },
          { label: '$180^\\circ$ is', options: ['Acute', 'Right', 'Obtuse', 'Straight'], correctAnswer: 3 }
        ],
        correctAnswers: ['Acute', 'Right', 'Obtuse', 'Straight'],
        hint1: 'Compare each measure with $90^\\circ$ first.',
        hint2: 'Exactly $90^\\circ$ and exactly $180^\\circ$ have their own names.',
        hint3: 'Between $90^\\circ$ and $180^\\circ$ is obtuse.',
        explanation: '$89^\\circ$ is just under $90^\\circ$, so acute. $90^\\circ$ is right. $179^\\circ$ is between $90^\\circ$ and $180^\\circ$, so obtuse. $180^\\circ$ is a straight angle.'
      }
    },
    {
      id: 'mkgs1-input',
      type: 'input-boxes' as const,
      content: `**Work it out.** ✍️ Enter numbers only (degrees).

**1)** The complement of a $17^\\circ$ angle:

**2)** The supplement of a $109^\\circ$ angle:

**3)** Two complementary angles: one is 4 times the other. The larger angle:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['73', '71', '72'],
        hint1: 'Complement: subtract from $90$.',
        hint2: 'Supplement: subtract from $180$.',
        hint3: 'Let the smaller angle be $x$: $x + 4x = 90$.',
        explanation: '(1) $90 - 17 = 73$. (2) $180 - 109 = 71$. (3) $x + 4x = 90$ gives $5x = 90$, so $x = 18$ and the larger angle is $4 \\cdot 18 = 72^\\circ$. Check: $18 + 72 = 90$.'
      }
    },
    {
      id: 'mkgs1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- MK: **15 questions, 31 minutes** (about 2 minutes each), four choices, **no calculator**
- Acute $< 90^\\circ$, right $= 90^\\circ$, obtuse between $90^\\circ$ and $180^\\circ$, straight $= 180^\\circ$
- **Complementary** = $90^\\circ$ (corner), **supplementary** = $180^\\circ$ (straight), **around a point** = $360^\\circ$
- A small square in a corner means exactly $90^\\circ$
- Name the sum first, then write the equation

> **Up Next:** Part 2 — what happens when two lines cross, and the shortcut that solves every parallel-lines question.`
    }
  ]
};
