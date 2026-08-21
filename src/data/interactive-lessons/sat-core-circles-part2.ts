export const lessonData = {
  topicSlug: 'sat-circles-core-skills',
  sections: [
    {
      id: 'circ-core-p2-recap',
      type: 'text' as const,
      content: `# The Equation of a Circle

**Part 2 of 2 — Practice**

### The formulas from Part 1

- Radius $=$ center to edge. Diameter $=$ all the way across. $d = 2r$ and $r = \\frac{d}{2}$.
- Area: $A = \\pi r^{2}$
- Circumference: $C = 2\\pi r$
- Both formulas use the radius. Given a diameter, halve it first.

### Circles on a grid

A circle drawn on the $xy$-plane has an equation that looks like this:

$$(x - h)^{2} + (y - k)^{2} = r^{2}$$

You do not have to build this equation from scratch. You only have to **read** it. Three things to know:

- $(h, k)$ is the **center**.
- The number on the right is $r^{2}$ — the radius **squared**. Take its square root to get the radius.
- The signs flip. $(x - 3)^{2}$ means the center's $x$ is $+3$. $(x + 3)^{2}$ means the center's $x$ is $-3$.

### Worked example

$$(x - 2)^{2} + (y - 5)^{2} = 36$$

**Center** — read the numbers and flip their signs: $x$ is $2$, $y$ is $5$. The center is $(2, 5)$.

**Radius** — the right side is $36$, and that is $r^{2}$. So:

$$r = \\sqrt{36} = 6$$

The radius is $6$, not $36$. This is the single most common circle mistake, so it is worth pausing every time: the number on the right is squared already.

### A shorter version

When the center is the origin, $(0, 0)$, both $h$ and $k$ are $0$, so the equation gets shorter:

$$x^{2} + y^{2} = r^{2}$$

For example, $x^{2} + y^{2} = 49$ is a circle centered at the origin with radius $\\sqrt{49} = 7$.`
    },
    {
      id: 'circ-core-p2-q1',
      type: 'quiz' as const,
      question: `A circle has the equation $(x - 3)^{2} + (y - 1)^{2} = 49$. What is the radius of this circle?`,
      options: [
        `$49$`,
        `$24.5$`,
        `$3$`,
        `$7$`
      ],
      correctAnswer: 3,
      explanation: `The answer is $7$.

In the equation $(x - h)^{2} + (y - k)^{2} = r^{2}$, the number on the right is the radius **squared**.

Here that number is $49$, so:

$$r^{2} = 49$$

$$r = \\sqrt{49} = 7$$

The radius is $7$.

Answering $49$ leaves the radius squared instead of taking the square root. The right side is always $r^{2}$, never $r$.`
    },
    {
      id: 'circ-core-p2-q2',
      type: 'quiz' as const,
      question: `What is the center of the circle $(x + 2)^{2} + (y - 5)^{2} = 9$?`,
      options: [
        `$(2, 5)$`,
        `$(-2, 5)$`,
        `$(2, -5)$`,
        `$(-2, -5)$`
      ],
      correctAnswer: 1,
      explanation: `The answer is $(-2, 5)$.

The form is $(x - h)^{2} + (y - k)^{2} = r^{2}$, and the center is $(h, k)$. Because the form has minus signs built in, the signs you see in the equation flip.

For the $x$ part: $(x + 2)^{2}$ is the same as $(x - (-2))^{2}$, so $h = -2$.

For the $y$ part: $(y - 5)^{2}$ already has a minus sign, so $k = 5$.

The center is $(-2, 5)$.

Reading the signs straight off the page gives $(2, 5)$, which is the mistake this question is built around. Flip each one.`
    },
    {
      id: 'circ-core-p2-q3',
      type: 'quiz' as const,
      question: `A circle has the equation $x^{2} + y^{2} = 16$. What is its diameter?`,
      options: [
        `$4$`,
        `$16$`,
        `$8$`,
        `$32$`
      ],
      correctAnswer: 2,
      explanation: `The answer is $8$.

Step 1 — Find the radius. The right side is $r^{2}$, so:

$$r^{2} = 16$$

$$r = \\sqrt{16} = 4$$

Step 2 — The question asks for the **diameter**, which is twice the radius:

$$d = 2 \\times 4 = 8$$

The diameter is $8$.

Answering $4$ stops at the radius. Read the last word of the question before you pick — radius and diameter are different numbers.`
    },
    {
      id: 'circ-core-p2-q4',
      type: 'quiz' as const,
      question: `Which equation describes a circle with center $(1, 4)$ and radius $3$?`,
      options: [
        `$(x - 1)^{2} + (y - 4)^{2} = 9$`,
        `$(x - 1)^{2} + (y - 4)^{2} = 3$`,
        `$(x + 1)^{2} + (y + 4)^{2} = 9$`,
        `$(x - 4)^{2} + (y - 1)^{2} = 9$`
      ],
      correctAnswer: 0,
      explanation: `The answer is $(x - 1)^{2} + (y - 4)^{2} = 9$.

Start from the form $(x - h)^{2} + (y - k)^{2} = r^{2}$.

Step 1 — The center is $(1, 4)$, so $h = 1$ and $k = 4$. Put them in with the minus signs the form already has:

$$(x - 1)^{2} + (y - 4)^{2}$$

Step 2 — The right side is the radius **squared**, and the radius is $3$:

$$3^{2} = 9$$

Putting it together gives $(x - 1)^{2} + (y - 4)^{2} = 9$.

The choice ending in $= 3$ puts the radius on the right instead of the radius squared.`
    }
  ]
}
