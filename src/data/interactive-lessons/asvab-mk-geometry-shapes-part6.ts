const mkgsSameSideFigure = {
  svg: '<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="20" y1="70" x2="290" y2="70"/><line x1="20" y1="150" x2="290" y2="150"/><line x1="130.8" y1="200" x2="189.2" y2="20"/><polyline points="56,64 64,70 56,76"/><polyline points="56,144 64,150 56,156"/></g><g font-size="13" fill="currentColor" font-style="italic"><text x="296" y="74">m</text><text x="296" y="154">n</text><text x="196" y="26">t</text></g><g font-size="13" fill="currentColor" text-anchor="middle"><text x="184" y="90">y</text><text x="170" y="144">72°</text></g></svg>',
  alt: 'Two horizontal parallel lines m and n, marked with arrowheads, cut by a transversal t rising from lower left to upper right. Between the parallel lines and on the right side of t, there are two angles: the angle just below line m is labeled y, and the angle just above line n is labeled 72 degrees. Angle y looks obtuse and the 72 degree angle looks acute.',
  caption: 'Figure 1. Parallel lines $m$ and $n$.',
  size: 'md' as const,
}

export const asvabMkGeometryShapesPart6Data = {
  topicSlug: 'asvab-mk-geometry-shapes',
  sections: [
    {
      id: 'mkgs6-intro',
      type: 'text' as const,
      content: `# 📐 Angles, Triangles and Polygons

**Part 6 of 7 — Test Strategy and Common Traps**

## How Geometry Items Play Out

MK gives you **31 minutes for 15 questions**, about **2 minutes each**. Most angle and triangle questions take well under that once you know the rule, which banks time for the longer algebra and word-style items.

The CAT-ASVAB is **adaptive**: the first question is of average difficulty, and a right answer usually brings a harder one. You also **can't go back** to a question after you answer it, so check before you confirm.

### A four-step routine

1. **Sketch and label.** Copy the figure onto your scratch paper and write every given number on it, including the $90^\\circ$ that a small square stands for.
2. **Name the rule.** Straight line $180$? Triangle $180$? Parallel lines (equal or add to $180$)? Pythagorean theorem? Similar triangles?
3. **Write one equation** and solve it.
4. **Sanity-check.** Does an angle that looks obtuse come out over $90^\\circ$? Is the hypotenuse the longest side? Do the angles of your triangle add to $180^\\circ$?

### Use what is marked, not what it looks like

Work from the numbers and marks given (labels, tick marks, parallel arrows, right-angle squares). Two lines that look parallel only count as parallel if the figure marks them or the question says so. Your eyes are for the sanity check, not for the answer.

### When time runs short

Unfinished questions are scored as if you had guessed at random, and the official advice is to keep reading and genuinely answering rather than clicking randomly: the CAT applies a relatively large penalty when several wrong answers come at the end of a subtest. Geometry rules are fast, so a quick honest answer usually beats a blind guess. Some questions may be unscored tryouts, but you can't tell which, so treat every one as scored.`
    },
    {
      id: 'mkgs6-traps',
      type: 'text' as const,
      content: `## The Traps the Wrong Answers Are Built From

Wrong answer choices are rarely random. Most come from one of these mistakes, so if your answer matches one of them, double-check.

| Mistake | What it looks like | Fix |
|:---|:---|:---|
| Complement / supplement mix-up | supplement of $40^\\circ$ answered as $50^\\circ$ | Corner $= 90$, straight $= 180$ |
| Exterior angle done backward | remote angles $50^\\circ$, $60^\\circ$; answer $70^\\circ$ | Exterior $=$ **sum** of the two across: $110^\\circ$ |
| Same-side interior set equal | parallel lines, $72^\\circ$ and $y$; answer $72^\\circ$ | One big, one small → add to $180$ |
| Legs added, not squared | legs $5$, $12$; answer $17$ | Square, add, then square-root |
| Forgot the square root | legs $6$, $8$; answer $100$ | $c^2 = 100$ means $c = 10$ |
| Hypotenuse used as a leg | hyp $10$, leg $6$; answer $\\sqrt{136}$ | Leg: **subtract** the squares |
| Similar triangles "add the difference" | $4 \\to 10$, so $6 \\to 12$ | Multiply by the scale factor ($\\times 2.5$) |
| Polygon sum as $n \\cdot 180$ | hexagon sum $1080^\\circ$ | $(n - 2) \\cdot 180 = 720^\\circ$ |
| Forgot to divide by $n$ | each angle of a regular pentagon $540^\\circ$ | $540 \\div 5 = 108^\\circ$ |
| Equal sum counted as a triangle | sides $5, 5, 10$ | The two shorter must add to **more** |

> **Key Fact:** If your first answer shows up as a choice, that is not proof it is right. The traps are there **because** they are common answers. Run the sanity check.`
    },
    {
      id: 'mkgs6-mc-traps',
      type: 'multiple-choice' as const,
      content: '**Spot the trap.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A question asks for the supplement of $38^\\circ$. Which answer choice comes from mixing up supplementary with complementary?',
            options: ['$142^\\circ$', '$322^\\circ$', '$52^\\circ$', '$38^\\circ$'],
            correctAnswer: 2,
            explanation: 'Using $90^\\circ$ instead of $180^\\circ$ gives $90 - 38 = 52^\\circ$. The correct supplement is $180 - 38 = 142^\\circ$, and $322^\\circ$ comes from using $360^\\circ$.'
          },
          {
            question: 'A right triangle has legs $10$ and $24$. A student answers $34$ for the hypotenuse. What went wrong?',
            options: ['Added the legs without squaring them', 'Forgot to take the square root at the end', 'Treated the side of length 24 as the hypotenuse', 'Multiplied each leg by a scale factor of 2'],
            correctAnswer: 0,
            explanation: '$10 + 24 = 34$: the legs were added directly. The theorem gives $100 + 576 = 676$, so the hypotenuse is $26$. Forgetting the square root would give $676$, and treating $24$ as the hypotenuse would make the other leg $\\sqrt{476}$.'
          }
        ]
      }
    },
    {
      id: 'mkgs6-mc-sameside',
      type: 'multiple-choice' as const,
      figure: mkgsSameSideFigure,
      content: '**Use the figure above.** 🎯 Check whether the angles should be equal or add to $180^\\circ$.',
      exercise: {
        questions: [
          {
            question: 'Lines $m$ and $n$ are parallel. What is $y$?',
            options: ['$72^\\circ$', '$18^\\circ$', '$108^\\circ$', '$288^\\circ$'],
            correctAnswer: 2,
            explanation: 'The two angles are same-side interior angles (both between the lines, both on the right of $t$), so they add to $180^\\circ$: $y = 180 - 72 = 108$. The figure agrees: $y$ looks obtuse. Setting them equal gives the trap answer $72^\\circ$.'
          }
        ]
      }
    },
    {
      id: 'mkgs6-mc-more',
      type: 'multiple-choice' as const,
      content: '**More trap practice.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Asked for one interior angle of a regular pentagon, a student answers $180^\\circ$. Which mistake explains that answer?',
            options: ['Forgot to divide the sum by 5', 'Used $360^\\circ$ as the angle sum', 'Used $5 \\cdot 180$ as the angle sum', 'Found the exterior angle instead'],
            correctAnswer: 2,
            explanation: '$5 \\cdot 180 = 900$, and $900 \\div 5 = 180$: the sum was taken as $n \\cdot 180$ instead of $(n - 2) \\cdot 180 = 540$. The correct angle is $540 \\div 5 = 108^\\circ$. Forgetting to divide would give $540^\\circ$, and the exterior angle is $72^\\circ$.'
          },
          {
            question: 'A triangle has sides $4$ and $6$. Which of these could be the length of the third side?',
            options: ['$2$', '$10$', '$7$', '$11$'],
            correctAnswer: 2,
            explanation: 'The third side must be more than $6 - 4 = 2$ and less than $6 + 4 = 10$, so only $7$ works. $2$ and $10$ are the traps: equal to the difference or the sum gives a flat figure, not a triangle.'
          }
        ]
      }
    },
    {
      id: 'mkgs6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Diagnose the wrong answer.** 🔽 Pick the mistake that produces each student answer.',
      exercise: {
        dropdowns: [
          {
            label: 'Supplement of $70^\\circ$; student answer $20^\\circ$',
            options: ['Used 90° instead of 180°', 'Subtracted from 180° instead of adding', 'Used n × 180° for the angle sum', 'Gave c² instead of c'],
            correctAnswer: 0
          },
          {
            label: 'Exterior angle across from interior angles $50^\\circ$ and $60^\\circ$; student answer $70^\\circ$',
            options: ['Used 90° instead of 180°', 'Subtracted from 180° instead of adding', 'Used n × 180° for the angle sum', 'Gave c² instead of c'],
            correctAnswer: 1
          },
          {
            label: 'Interior angle sum of an octagon; student answer $1440^\\circ$',
            options: ['Used 90° instead of 180°', 'Subtracted from 180° instead of adding', 'Used n × 180° for the angle sum', 'Gave c² instead of c'],
            correctAnswer: 2
          },
          {
            label: 'Hypotenuse of a right triangle with legs $6$ and $8$; student answer $100$',
            options: ['Used 90° instead of 180°', 'Subtracted from 180° instead of adding', 'Used n × 180° for the angle sum', 'Gave c² instead of c'],
            correctAnswer: 3
          }
        ],
        correctAnswers: ['Used 90° instead of 180°', 'Subtracted from 180° instead of adding', 'Used n × 180° for the angle sum', 'Gave c² instead of c'],
        hint1: '$90 - 70 = 20$.',
        hint2: '$180 - (50 + 60) = 70$, but the exterior angle is the sum itself.',
        hint3: '$8 \\cdot 180 = 1440$; and $6^2 + 8^2 = 100$ is $c^2$.',
        explanation: 'The supplement is $110^\\circ$; $20^\\circ$ used $90$. The exterior angle is $50 + 60 = 110^\\circ$; $70^\\circ$ is the third interior angle. The octagon sum is $(8 - 2) \\cdot 180 = 1080^\\circ$; $1440^\\circ$ is $8 \\cdot 180$. The hypotenuse is $\\sqrt{100} = 10$; $100$ is $c^2$.'
      }
    },
    {
      id: 'mkgs6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- About **2 minutes per MK question**; geometry items are usually fast, so bank the time
- Routine: **sketch and label → name the rule → one equation → sanity check**
- Work from what is marked (labels, ticks, arrows, squares), not from how the picture looks
- No going back on the CAT: check before you confirm; if time runs short, keep answering honestly rather than guessing blindly
- Know the trap list: complement/supplement, exterior angle, same-side interior, legs added, missing square root, $n \\cdot 180$, forgetting to divide by $n$, equal-sum "triangles"

> **Up Next:** Part 7 — a mixed set that pulls every rule together.`
    }
  ]
};
