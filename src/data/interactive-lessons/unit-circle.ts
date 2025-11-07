export const unitCircleLessonData = {
  topicSlug: 'the-unit-circle',
  sections: [
    {
      id: 'intro',
      type: 'text' as const,
      content: `
**Welcome to the Interactive Unit Circle Lesson!**

In this interactive lesson, you'll master the unit circle through a simple counting technique that makes memorizing those tricky values super easy!

Click "Next" when you're ready to begin learning the counting method.
      `
    },
    {
      id: 'step1-intro',
      type: 'text' as const,
      content: `
**Step 1: Count from 0 to 4**

The first step is simple: we're going to count from 0 to 4, including both 0 and 4.

These five numbers will become the foundation for remembering all the key sine and cosine values!
      `
    },
    {
      id: 'step1-practice',
      type: 'input-boxes' as const,
      content: `
**Now it's your turn!**

Fill in the boxes below by counting from 0 to 4:
      `,
      exercise: {
        boxes: 5,
        correctAnswers: ['0', '1', '2', '3', '4']
      }
    },
    {
      id: 'step2-intro',
      type: 'text' as const,
      content: `
**Step 2: Put Each Number Under a Square Root**

Great job! Now we're going to take those numbers (0, 1, 2, 3, 4) and put each one under a square root symbol.

So we get: $\\sqrt{0}, \\sqrt{1}, \\sqrt{2}, \\sqrt{3}, \\sqrt{4}$

This might seem strange, but trust the process - it's about to make perfect sense!
      `
    },
    {
      id: 'step3-intro',
      type: 'text' as const,
      content: `
**Step 3: Simplify the Perfect Squares**

Now we simplify any perfect squares in our list: $\\sqrt{0}, \\sqrt{1}, \\sqrt{2}, \\sqrt{3}, \\sqrt{4}$

Remember: A perfect square is a number whose square root is a whole number.

- $\\sqrt{0} = 0$ (because $0^2 = 0$)
- $\\sqrt{1} = 1$ (because $1^2 = 1$)
- $\\sqrt{2}$ stays as $\\sqrt{2}$ (not a perfect square)
- $\\sqrt{3}$ stays as $\\sqrt{3}$ (not a perfect square)
- $\\sqrt{4} = 2$ (because $2^2 = 4$)
      `
    },
    {
      id: 'step3-practice',
      type: 'dropdown-select' as const,
      content: `
**Practice: Simplify the Square Roots**

Select the correct simplified form for each square root:
      `,
      exercise: {
        dropdowns: [
          {
            label: '√0 =',
            options: ['0', '1', '√2', '√3', '2']
          },
          {
            label: '√1 =',
            options: ['0', '1', '√2', '√3', '2']
          },
          {
            label: '√2 =',
            options: ['0', '1', '√2', '√3', '2']
          },
          {
            label: '√3 =',
            options: ['0', '1', '√2', '√3', '2']
          },
          {
            label: '√4 =',
            options: ['0', '1', '√2', '√3', '2']
          }
        ],
        correctAnswers: ['0', '1', '√2', '√3', '2']
      }
    },
    {
      id: 'step4-intro',
      type: 'text' as const,
      content: `
**Step 4: Divide Everything by 2**

Almost there! Now we take our simplified values $(0, 1, \\sqrt{2}, \\sqrt{3}, 2)$ and divide each by 2.

This gives us:

$$\\frac{0}{2}, \\frac{1}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}, \\frac{2}{2}$$

Which simplifies to:

$$0, \\frac{1}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}, 1$$
      `
    },
    {
      id: 'revelation',
      type: 'text' as const,
      content: `
**🎉 You Did It!**

> **These are the SINE values for 0°, 30°, 45°, 60°, and 90°!**

$$\\sin(0°) = 0$$

$$\\sin(30°) = \\frac{1}{2}$$

$$\\sin(45°) = \\frac{\\sqrt{2}}{2}$$

$$\\sin(60°) = \\frac{\\sqrt{3}}{2}$$

$$\\sin(90°) = 1$$

**BONUS TIP:** For cosine values, just reverse the order!

$$\\cos(0°) = 1$$

$$\\cos(30°) = \\frac{\\sqrt{3}}{2}$$

$$\\cos(45°) = \\frac{\\sqrt{2}}{2}$$

$$\\cos(60°) = \\frac{1}{2}$$

$$\\cos(90°) = 0$$
      `
    },
    {
      id: 'completion',
      type: 'text' as const,
      content: `
**🌟 Lesson Complete! 🌟**

Congratulations! You've mastered the counting method for memorizing unit circle values.

Practice this technique a few times, and you'll never forget these values again!
      `
    }
  ]
}
