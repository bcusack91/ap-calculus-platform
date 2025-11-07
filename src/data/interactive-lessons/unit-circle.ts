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
**🌟 Part 1 Complete! 🌟**

Congratulations! You've mastered the counting method for memorizing unit circle values.

Ready to practice on your own? Try the independent practice mode to reinforce what you've learned!
      `
    }
  ]
}

export const unitCircleAnglesLessonData = {
  topicSlug: 'the-unit-circle',
  sections: [
    {
      id: 'angles-intro',
      type: 'text' as const,
      content: `
**Now Let's Learn the Angles!**

The first quadrant of the unit circle has five key angles:

**0°, 30°, 45°, 60°, and 90°**

These correspond to the values we just calculated!

Let's practice identifying these angles.
      `
    },
    {
      id: 'angles-practice',
      type: 'input-boxes' as const,
      content: `
**Practice: Fill in the First Quadrant Angles**

Enter the five key angles in the first quadrant in order:
      `,
      exercise: {
        boxes: 5,
        correctAnswers: ['0', '30', '45', '60', '90'],
        hint1: 'Remember: Start at 0° and go up to 90°',
        hint2: 'The angles are: 0, 30, 45, 60, and 90 degrees',
        explanation: 'The five key angles in the first quadrant are 0°, 30°, 45°, 60°, and 90°'
      }
    },
    {
      id: 'sin-up-intro',
      type: 'text' as const,
      content: `
**Understanding "Sin UP"** 📈

Look at how sine values change as we go from 0° to 90°:

[SINE_TABLE]

**Sin goes UP!** ⬆️ The values increase from 0 to 1 as the angle increases.

Remember: **"Sin UP"** - Sine values go UP from 0° to 90°!
      `
    },
    {
      id: 'coast-down-intro',
      type: 'text' as const,
      content: `
**Understanding "COAST DOWN"** 📉

Now look at how **CO**sine values change (remember: **CO**SINE → **CO**AST):

[COSINE_TABLE]

**Cosine goes DOWN!** ⬇️ The values decrease from 1 to 0 as the angle increases.

Remember: **"COAST DOWN"** - COsine values go DOWN from 90° to 0°!

**Even better:** Cosine values are just the sine values in reverse order!
      `
    },
    {
      id: 'memory-trick',
      type: 'text' as const,
      content: `
**🧠 The Ultimate Memory Trick! 🧠**

Put it all together:

1. **Count from 0 to 4**: 0, 1, 2, 3, 4
2. **Square root each**: √0, √1, √2, √3, √4
3. **Simplify**: 0, 1, √2, √3, 2
4. **Divide by 2**: 0, ½, √2/2, √3/2, 1
5. **These are your angles**: 0°, 30°, 45°, 60°, 90°

**For Sine:** "**Sin UP**" - Use the values going up (0 → 1)

**For Cosine:** "**COAST DOWN**" - Use the values going down (1 → 0)

That's it! You now know the entire first quadrant of the unit circle! 🎉
      `
    },
    {
      id: 'completion',
      type: 'text' as const,
      content: `
**🌟 Lesson Complete! 🌟**

Congratulations! You've mastered:
- The counting method for memorizing unit circle values
- The five key angles: 0°, 30°, 45°, 60°, 90°
- "Sin UP" - Sine values increase from 0 to 1
- "COAST DOWN" - Cosine values decrease from 1 to 0

Ready to practice on your own? Try the independent practice mode to reinforce what you've learned!
      `
    }
  ]
}

export const unitCircleConceptLessonData = {
  topicSlug: 'the-unit-circle',
  sections: [
    {
      id: 'what-is-unit-circle',
      type: 'text' as const,
      content: `
**What IS the Unit Circle?** 🔵

Now that you know how to calculate the values, let's understand what the unit circle actually represents!

[UNIT_CIRCLE]

**The Unit Circle is:**
- A circle with a radius of exactly **1 unit**
- Centered at the origin (0, 0) on a coordinate plane
- Used to define sine and cosine for all angles

The "unit" in "unit circle" means the radius = 1. This makes all the math beautifully simple!
      `
    },
    {
      id: 'coordinates-meaning',
      type: 'text' as const,
      content: `
**Understanding Coordinates on the Unit Circle** 📍

[UNIT_CIRCLE_ANIMATION]

Here's the KEY concept that connects everything:

> **Every point on the unit circle has coordinates (x, y) where:**
> - **x = cos(θ)** (the cosine of the angle)
> - **y = sin(θ)** (the sine of the angle)

So when we write a point like $(\\frac{\\sqrt{3}}{2}, \\frac{1}{2})$ on the unit circle at 30°:
- The **x-coordinate** $\\frac{\\sqrt{3}}{2}$ is $\\cos(30°)$
- The **y-coordinate** $\\frac{1}{2}$ is $\\sin(30°)$

**Think of it this way:** The angle tells you where to go, and the coordinates tell you the sine and cosine values!
      `
    },
    {
      id: 'special-triangles',
      type: 'text' as const,
      content: `
**The Special Right Triangles** 📐

The unit circle values come from two special right triangles that you may already know:

**30-60-90 Triangle:**
- Angles: 30°, 60°, 90°
- Side ratio: $1 : \\sqrt{3} : 2$
- When we scale to fit the unit circle (radius = 1), we divide by 2
- This gives us: $\\frac{1}{2} : \\frac{\\sqrt{3}}{2} : 1$

**45-45-90 Triangle:**
- Angles: 45°, 45°, 90°
- Side ratio: $1 : 1 : \\sqrt{2}$
- When we scale to fit the unit circle, we divide by $\\sqrt{2}$
- This gives us: $\\frac{1}{\\sqrt{2}} : \\frac{1}{\\sqrt{2}} : 1$ (which simplifies to $\\frac{\\sqrt{2}}{2} : \\frac{\\sqrt{2}}{2} : 1$)

**These triangles are WHY our counting method works!** ✨
      `
    },
    {
      id: 'first-quadrant-visual',
      type: 'text' as const,
      content: `
**The First Quadrant (0° to 90°)** 🎯

Let's focus on the first quadrant where both x and y coordinates are positive.

Here are our five key points:

| Angle | Point (x, y) | cos(θ) | sin(θ) |
|-------|--------------|--------|--------|
| **0°** | (1, 0) | 1 | 0 |
| **30°** | $(\\frac{\\sqrt{3}}{2}, \\frac{1}{2})$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{2}$ |
| **45°** | $(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2})$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{2}}{2}$ |
| **60°** | $(\\frac{1}{2}, \\frac{\\sqrt{3}}{2})$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{2}$ |
| **90°** | (0, 1) | 0 | 1 |

Notice the pattern:
- **At 0°:** You're on the positive x-axis → cos = 1, sin = 0
- **At 90°:** You're on the positive y-axis → cos = 0, sin = 1
- **At 45°:** You're exactly in between → cos and sin are equal!
      `
    },
    {
      id: 'why-it-works',
      type: 'text' as const,
      content: `
**Why Does This All Work?** 🤔

When you draw a radius from the origin to any point on the unit circle:

1. **The angle** is measured from the positive x-axis (going counterclockwise)
2. **The horizontal distance** from the origin is the cosine (x-coordinate)
3. **The vertical distance** from the origin is the sine (y-coordinate)

Because the radius is always 1, these distances ARE the sine and cosine values!

**The Pythagorean Identity:**

Since we're on a circle with radius 1, we always have:

$$\\sin^2(\\theta) + \\cos^2(\\theta) = 1$$

This is just the Pythagorean theorem: $x^2 + y^2 = r^2$, where $r = 1$!

**This is why the unit circle is so powerful** - it connects geometry, trigonometry, and algebra all in one beautiful circle! 🎨
      `
    },
    {
      id: 'completion',
      type: 'text' as const,
      content: `
**🌟 You Now Understand the Unit Circle! 🌟**

Congratulations! You now know:

✅ What the unit circle is (a circle with radius 1)
✅ How coordinates relate to sine and cosine
✅ Why the special triangles (30-60-90 and 45-45-90) give us our values
✅ How to read any point on the unit circle
✅ The connection between geometry and trigonometry

**Up Next:** You'll learn how to extend this to all four quadrants and work with angles beyond 90°!

You've mastered the foundation of the unit circle! 🎉
      `
    }
  ]
}
