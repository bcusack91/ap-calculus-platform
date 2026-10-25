const mkgsMasteryParallelFigure = {
  svg: '<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="20" y1="70" x2="290" y2="70"/><line x1="20" y1="150" x2="290" y2="150"/><line x1="90" y1="200" x2="230" y2="20"/><polyline points="56,64 64,70 56,76"/><polyline points="56,144 64,150 56,156"/></g><g font-size="13" fill="currentColor" font-style="italic"><text x="296" y="74">m</text><text x="296" y="154">n</text><text x="236" y="24">t</text></g><g font-size="12" fill="currentColor"><text x="186" y="58" text-anchor="end">(4x − 12)°</text><text x="134" y="176" text-anchor="start">(2x + 58)°</text><text x="210" y="65" text-anchor="middle">z</text></g></svg>',
  alt: 'Two horizontal parallel lines m and n, marked with arrowheads, cut by a transversal t rising from lower left to upper right. Above line m and to the left of t is an angle labeled 4x minus 12 degrees. Below line n and to the right of t is an angle labeled 2x plus 58 degrees; these two are alternate exterior angles. Above line m and to the right of t, next to the first labeled angle, is an angle labeled z.',
  caption: 'Figure 1. Parallel lines $m$ and $n$.',
  size: 'md' as const,
}

const mkgsMasteryRightFigure = {
  svg: '<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="60,170 195,170 60,98"/><path d="M 72 170 L 72 158 L 60 158" stroke-width="1.5"/></g><g font-size="14" fill="currentColor"><text x="48" y="139" text-anchor="end">24</text><text x="128" y="190" text-anchor="middle">45</text><text x="136" y="124" text-anchor="middle">?</text></g></svg>',
  alt: 'A right triangle with the right angle at the lower left. The vertical leg is labeled 24, the horizontal leg is labeled 45, and the hypotenuse is labeled with a question mark.',
  caption: 'Figure 2. A right triangle.',
  size: 'md' as const,
}

const mkgsNestedFigure = {
  svg: '<svg viewBox="0 0 320 215" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="160,30 40,190 280,190"/><line x1="120" y1="83.3" x2="200" y2="83.3"/></g><g class="fig-accent" stroke="currentColor" stroke-width="2" fill="none"><polyline points="171,79.3 177,83.3 171,87.3"/><polyline points="171,186 177,190 171,194"/></g><g font-size="13" fill="currentColor"><text x="160" y="22" text-anchor="middle">A</text><text x="34" y="202" text-anchor="end">B</text><text x="286" y="202" text-anchor="start">C</text><text x="112" y="87" text-anchor="end">D</text><text x="208" y="87" text-anchor="start">E</text><text x="134" y="60" text-anchor="end">3</text><text x="74" y="140" text-anchor="end">6</text><text x="158" y="77" text-anchor="middle">4</text><text x="158" y="208" text-anchor="middle">?</text></g></svg>',
  alt: 'Triangle ABC with A at the top, B at the lower left and C at the lower right. Point D is on side AB and point E is on side AC, and segment DE is parallel to the base BC (both marked with arrowheads). AD is labeled 3, DB is labeled 6, DE is labeled 4, and BC is labeled with a question mark.',
  caption: 'Figure 3. Segment $DE$ is parallel to $BC$.',
  size: 'md' as const,
}

export const asvabMkGeometryShapesPart7Data = {
  topicSlug: 'asvab-mk-geometry-shapes',
  sections: [
    {
      id: 'mkgs7-intro',
      type: 'text' as const,
      content: `# 📐 Angles, Triangles and Polygons

**Part 7 of 7 — Mixed Mastery Set**

## Put It All Together

Eleven questions, mixed the way the test mixes them: a few quick ones, several medium, and a few that take two or three steps. Give yourself about **2 minutes each**, use scratch paper, and no calculator.

For every question, run the routine: **sketch and label → name the rule → one equation → sanity check.**

| Rule | Use it when you see |
|:---|:---|
| $90^\\circ$ / $180^\\circ$ / $360^\\circ$ | a corner, a straight line, a full turn |
| Vertical angles equal | two crossing lines |
| Two sizes (equal or add to $180^\\circ$) | parallel lines and a transversal |
| Triangle $180^\\circ$; exterior angle $=$ sum of the two across | any triangle |
| $a^2 + b^2 = c^2$ and the triples | a right triangle |
| Multiply by the scale factor | similar triangles, shadows, a segment parallel to a side |
| $(n - 2) \\cdot 180^\\circ$; exterior sum $360^\\circ$ | polygons |`
    },
    {
      id: 'mkgs7-mc-a',
      type: 'multiple-choice' as const,
      content: '**Set A.** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the supplement of a $47^\\circ$ angle?',
            options: ['$43^\\circ$', '$143^\\circ$', '$133^\\circ$', '$313^\\circ$'],
            correctAnswer: 2,
            explanation: 'Supplementary angles add to $180^\\circ$: $180 - 47 = 133$. $43^\\circ$ is the complement, and $313^\\circ$ comes from subtracting from $360$.'
          },
          {
            question: 'One acute angle of a right triangle measures $29^\\circ$. What is the other acute angle?',
            options: ['$61^\\circ$', '$151^\\circ$', '$71^\\circ$', '$29^\\circ$'],
            correctAnswer: 0,
            explanation: 'The right angle takes $90^\\circ$, so the two acute angles share the other $90^\\circ$: $90 - 29 = 61$. $151^\\circ$ forgets the right angle and subtracts $29$ from $180$.'
          },
          {
            question: 'What is the measure of each interior angle of a regular hexagon?',
            options: ['$108^\\circ$', '$720^\\circ$', '$135^\\circ$', '$120^\\circ$'],
            correctAnswer: 3,
            explanation: 'The sum is $(6 - 2) \\cdot 180 = 720^\\circ$, shared by $6$ equal angles: $720 \\div 6 = 120$. $720^\\circ$ forgets to divide; $108^\\circ$ is the pentagon angle and $135^\\circ$ the octagon angle.'
          }
        ]
      }
    },
    {
      id: 'mkgs7-mc-b',
      type: 'multiple-choice' as const,
      figure: mkgsMasteryParallelFigure,
      content: '**Set B.** 🎯 Use the figure above. Lines $m$ and $n$ are parallel.',
      exercise: {
        questions: [
          {
            question: 'What is the measure of angle $z$?',
            options: ['$128^\\circ$', '$52^\\circ$', '$35^\\circ$', '$62^\\circ$'],
            correctAnswer: 1,
            explanation: 'The labeled angles are alternate exterior angles, so they are equal: $4x - 12 = 2x + 58$ gives $2x = 70$ and $x = 35$. Each labeled angle is $4(35) - 12 = 128^\\circ$. Angle $z$ sits on a straight line with the $128^\\circ$ angle, so $z = 180 - 128 = 52^\\circ$. $128^\\circ$ is the labeled angle itself, and $35$ is $x$, not an angle.'
          }
        ]
      }
    },
    {
      id: 'mkgs7-mc-c',
      type: 'multiple-choice' as const,
      figure: mkgsMasteryRightFigure,
      content: '**Set C.** 🎯 Use the figure above.',
      exercise: {
        questions: [
          {
            question: 'The legs of the right triangle are $24$ and $45$. How long is the hypotenuse?',
            options: ['$69$', '$39$', '$57$', '$51$'],
            correctAnswer: 3,
            explanation: '$24, 45$ is $3 \\times (8, 15)$, so the hypotenuse is $3 \\times 17 = 51$. Check: $576 + 2025 = 2601 = 51^2$. $69$ adds the legs, and $39$ is shorter than the $45$ leg, which a hypotenuse can never be.'
          }
        ]
      }
    },
    {
      id: 'mkgs7-mc-d',
      type: 'multiple-choice' as const,
      content: '**Set D.** 🎯',
      exercise: {
        questions: [
          {
            question: 'The angles of a triangle are in the ratio $2 : 3 : 4$. What is the largest angle?',
            options: ['$60^\\circ$', '$80^\\circ$', '$40^\\circ$', '$90^\\circ$'],
            correctAnswer: 1,
            explanation: '$2x + 3x + 4x = 180$, so $9x = 180$ and $x = 20$. The angles are $40^\\circ$, $60^\\circ$ and $80^\\circ$; the largest is $80^\\circ$.'
          },
          {
            question: 'Each base angle of an isosceles triangle measures $65^\\circ$. What is the vertex angle?',
            options: ['$65^\\circ$', '$115^\\circ$', '$50^\\circ$', '$25^\\circ$'],
            correctAnswer: 2,
            explanation: 'The two base angles use $65 + 65 = 130^\\circ$, leaving $180 - 130 = 50^\\circ$. $115^\\circ$ subtracts only one base angle from $180$.'
          },
          {
            question: 'The interior angles of a polygon add to $1800^\\circ$. How many sides does it have?',
            options: ['$10$', '$8$', '$14$', '$12$'],
            correctAnswer: 3,
            explanation: '$(n - 2) \\cdot 180 = 1800$ gives $n - 2 = 10$, so $n = 12$. The choice $10$ divides by $180$ and forgets to add the $2$ back.'
          }
        ]
      }
    },
    {
      id: 'mkgs7-mc-e',
      type: 'multiple-choice' as const,
      figure: mkgsNestedFigure,
      content: '**Set E.** 🎯 Use the figure above.',
      exercise: {
        questions: [
          {
            question: 'In triangle $ABC$, segment $DE$ is parallel to $BC$, with $AD = 3$, $DB = 6$ and $DE = 4$. How long is $BC$?',
            options: ['$8$', '$12$', '$10$', '$18$'],
            correctAnswer: 1,
            explanation: 'Because $DE$ is parallel to $BC$, triangle $ADE$ is similar to triangle $ABC$. Match $AD$ with the whole side $AB = 3 + 6 = 9$: the scale factor is $9 \\div 3 = 3$, so $BC = 4 \\times 3 = 12$. Using $DB = 6$ instead of $AB$ gives the trap answer $8$.'
          }
        ]
      }
    },
    {
      id: 'mkgs7-mc-f',
      type: 'multiple-choice' as const,
      content: '**Set F.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which set of lengths could be the sides of a right triangle?',
            options: ['$6, 8, 12$', '$9, 40, 41$', '$5, 10, 15$', '$7, 8, 9$'],
            correctAnswer: 1,
            explanation: '$81 + 1600 = 1681 = 41^2$, so $9, 40, 41$ works. For $6, 8, 12$: $36 + 64 = 100 \\ne 144$. $5, 10, 15$ is not even a triangle ($5 + 10 = 15$), and $49 + 64 = 113 \\ne 81$.'
          },
          {
            question: 'An exterior angle of a triangle measures $(5x)^\\circ$. The two interior angles across from it measure $(2x + 10)^\\circ$ and $(x + 30)^\\circ$. What is the measure of the exterior angle?',
            options: ['$50^\\circ$', '$80^\\circ$', '$100^\\circ$', '$20^\\circ$'],
            correctAnswer: 2,
            explanation: 'Exterior angle $=$ sum of the two across: $5x = (2x + 10) + (x + 30) = 3x + 40$, so $2x = 40$ and $x = 20$. The exterior angle is $5(20) = 100^\\circ$. Check: $50 + 50 = 100$. ✓ The choice $20$ is $x$, not the angle.'
          }
        ]
      }
    },
    {
      id: 'mkgs7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

- Most geometry items are one rule plus one equation; the hard ones chain two rules (parallel lines then a straight line, or similar triangles with the **whole** side)
- Match similar sides carefully: the small triangle's side goes with the **whole** matching side of the big one
- The hypotenuse is always the longest side, and $x$ is not the answer unless the question asks for $x$
- Missed a question? Go back to its part: angles (1), parallel lines (2), triangles (3), right and similar triangles (4), polygons (5), traps (6)

> **Next step:** take the exit quiz for this topic. Then move on to **Area, Volume, Circles and Coordinates**, where these shapes get measured.`
    }
  ]
};
