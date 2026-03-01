export const satCirclesTrigPart1Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-ct1-intro',
      type: 'text' as const,
      content: `
# ⭕ Circle Equations

**Part 1 of 7 — Standard Form, Center, Radius & Completing the Square**

Circle equations appear on almost every SAT. The standard form is the key:

$$
(x - h)^2 + (y - k)^2 = r^2
$$

| Component | Meaning |
|-----------|---------|
| $(h, k)$ | Center of the circle |
| $r$ | Radius |
| $r^2$ | The number on the right side |

**Important:** The signs in $(x - h)$ and $(y - k)$ are **subtractions**, so if the equation has $(x + 3)^2$, that means $h = -3$.
      `
    },
    {
      id: 'sat-ct1-read-equation',
      type: 'text' as const,
      content: `
## Reading Center & Radius — Worked Examples

**Example 1:** Find the center and radius of $(x - 4)^2 + (y + 1)^2 = 25$.

1. Compare to $(x - h)^2 + (y - k)^2 = r^2$.
2. $h = 4$, $k = -1$ (note the $+1$ means $k = -1$).
3. $r^2 = 25$, so $r = 5$.
4. **Center:** $(4, -1)$, **Radius:** $5$.

**Example 2:** Write the equation of a circle with center $(-2, 7)$ and radius $3$.

$$(x - (-2))^2 + (y - 7)^2 = 3^2$$
$$(x + 2)^2 + (y - 7)^2 = 9$$

---

**SAT Tip:** If you see $r^2 = 36$, the radius is $6$, not $36$. The SAT loves including $r^2$ as a wrong answer for the radius.
      `
    },
    {
      id: 'sat-ct1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Reading Circle Equations** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What is the radius of the circle $(x + 5)^2 + (y - 3)^2 = 49$?',
            options: ['$49$', '$7$', '$24.5$', '$\\sqrt{49/2}$'],
            correctAnswer: 1,
            explanation: '$r^2 = 49$, so $r = \\sqrt{49} = 7$. Remember: the right side is $r^2$, not $r$.'
          },
          {
            question: 'A circle has center $(0, -6)$ and passes through $(3, -2)$. What is $r^2$?',
            options: ['$5$', '$7$', '$25$', '$49$'],
            correctAnswer: 2,
            explanation: 'Use the distance formula: $r^2 = (3 - 0)^2 + (-2 - (-6))^2 = 9 + 16 = 25$.'
          }
        ]
      }
    },
    {
      id: 'sat-ct1-completing',
      type: 'text' as const,
      content: `
## Completing the Square — Key SAT Skill

Many SAT problems give the circle in **general form** and ask you to find the center or radius. You must complete the square.

**Example:** Find the center and radius of $x^2 + y^2 - 6x + 4y - 12 = 0$.

1. Group $x$ and $y$ terms: $(x^2 - 6x) + (y^2 + 4y) = 12$.
2. Complete the square for $x$: half of $-6$ is $-3$; $(-3)^2 = 9$.
3. Complete the square for $y$: half of $4$ is $2$; $(2)^2 = 4$.
4. Add both to each side: $(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$.
5. Factor: $(x - 3)^2 + (y + 2)^2 = 25$.
6. **Center:** $(3, -2)$, **Radius:** $5$.

**The pattern:** For $x^2 + bx$, add $\\left(\\frac{b}{2}\\right)^2$ to both sides.
      `
    },
    {
      id: 'sat-ct1-input',
      type: 'input-boxes' as const,
      content: `
**Complete the square practice.** 🧮

Consider the circle $x^2 + y^2 + 8x - 2y - 8 = 0$.

1) What is the $x$-coordinate of the center?

2) What is the $y$-coordinate of the center?

3) What is the radius?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-4', '1', '5'],
        hint1: 'Group: $(x^2 + 8x) + (y^2 - 2y) = 8$. Half of 8 is 4, so add $16$ to complete the $x$-square.',
        hint2: 'Half of $-2$ is $-1$, so add $1$ to complete the $y$-square. $(x+4)^2 + (y-1)^2 = 8 + 16 + 1 = 25$.',
        hint3: 'Center is $(-4, 1)$ and $r^2 = 25$, so $r = 5$.',
        explanation: '$(x^2+8x+16)+(y^2-2y+1)=8+16+1=25$. $(x+4)^2+(y-1)^2=25$. Center $(-4,1)$, radius $5$.'
      }
    },
    {
      id: 'sat-ct1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each equation to its center.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$(x - 2)^2 + (y + 5)^2 = 16$',
            options: ['$(2, 5)$', '$(2, -5)$', '$(-2, 5)$', '$(-2, -5)$']
          },
          {
            label: '$x^2 + (y - 3)^2 = 1$',
            options: ['$(0, -3)$', '$(1, 3)$', '$(0, 3)$', '$(3, 0)$']
          },
          {
            label: '$(x + 1)^2 + (y + 1)^2 = 9$',
            options: ['$(1, 1)$', '$(-1, 1)$', '$(1, -1)$', '$(-1, -1)$']
          }
        ],
        correctAnswers: ['$(2, -5)$', '$(0, 3)$', '$(-1, -1)$'],
        hint1: '$(x-2)$ means $h=2$; $(y+5) = (y-(-5))$ means $k=-5$.',
        hint2: 'No $x$ shift means $h=0$; $(y-3)$ means $k=3$.',
        hint3: '$(x+1) = (x-(-1))$ means $h=-1$; $(y+1) = (y-(-1))$ means $k=-1$.',
        explanation: 'Remember: standard form uses subtraction. A plus sign means the coordinate is negative.'
      }
    },
    {
      id: 'sat-ct1-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The equation $x^2 + y^2 - 10x + 6y + 18 = 0$ represents a circle. What is the radius?',
            options: ['$2$', '$4$', '$16$', '$\\sqrt{18}$'],
            correctAnswer: 1,
            explanation: 'Complete the square: $(x^2-10x+25)+(y^2+6y+9)=-18+25+9=16$. $(x-5)^2+(y+3)^2=16$, so $r=4$.'
          },
          {
            question: 'A circle in the $xy$-plane has center $(3, -4)$ and is tangent to the $x$-axis. What is the equation?',
            options: ['$(x-3)^2+(y+4)^2=9$', '$(x-3)^2+(y+4)^2=16$', '$(x+3)^2+(y-4)^2=16$', '$(x-3)^2+(y+4)^2=4$'],
            correctAnswer: 1,
            explanation: 'Tangent to the $x$-axis means the radius equals the distance from center to the $x$-axis, which is $|-4|=4$. So $r^2=16$: $(x-3)^2+(y+4)^2=16$.'
          }
        ]
      }
    }
  ]
}
