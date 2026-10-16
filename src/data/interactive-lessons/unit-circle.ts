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
            label: '$\\sqrt{0}$ =',
            options: ['0', '1', '$\\sqrt{2}$', '$\\sqrt{3}$', '2']
          },
          {
            label: '$\\sqrt{1}$ =',
            options: ['0', '1', '$\\sqrt{2}$', '$\\sqrt{3}$', '2']
          },
          {
            label: '$\\sqrt{2}$ =',
            options: ['0', '1', '$\\sqrt{2}$', '$\\sqrt{3}$', '2']
          },
          {
            label: '$\\sqrt{3}$ =',
            options: ['0', '1', '$\\sqrt{2}$', '$\\sqrt{3}$', '2']
          },
          {
            label: '$\\sqrt{4}$ =',
            options: ['0', '1', '$\\sqrt{2}$', '$\\sqrt{3}$', '2']
          }
        ],
        correctAnswers: ['0', '1', '$\\sqrt{2}$', '$\\sqrt{3}$', '2']
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

> **These are the SINE values for the angles $0$, $\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$, $\\frac{\\pi}{3}$, and $\\frac{\\pi}{2}$ (in radians)!**

$$\\sin(0) = 0$$

$$\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$$

$$\\sin\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$$

$$\\sin\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}$$

$$\\sin\\left(\\frac{\\pi}{2}\\right) = 1$$

**BONUS TIP:** For cosine values, just reverse the order!

$$\\cos(0) = 1$$

$$\\cos\\left(\\frac{\\pi}{6}\\right) = \\frac{\\sqrt{3}}{2}$$

$$\\cos\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$$

$$\\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$$

$$\\cos\\left(\\frac{\\pi}{2}\\right) = 0$$
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

The first quadrant of the unit circle has five key angles, measured in **radians**:

$$0, \\quad \\frac{\\pi}{6}, \\quad \\frac{\\pi}{4}, \\quad \\frac{\\pi}{3}, \\quad \\frac{\\pi}{2}$$

These correspond to the values we just calculated!

> 📏 **Degrees ↔ radians bridge:** a full turn is $2\\pi$ radians ($360°$), so $\\pi$ radians $= 180°$. If you learned these angles as $30°, 45°, 60°, 90°$, they are $\\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$. The AP exam uses radians only, so we will too.

Let's practice identifying these angles.
      `
    },
    {
      id: 'angles-practice',
      type: 'input-boxes' as const,
      content: `
**Practice: Fill in the First Quadrant Angles**

Enter the five key angles of the first quadrant in order, from $0$ up to $\\frac{\\pi}{2}$, including both axis angles $0$ and $\\frac{\\pi}{2}$. Write each one as a multiple of $\\pi$ and type the **coefficient** (type \`1/6\` for $\\frac{\\pi}{6}$, and \`0\` for the angle $0$):
      `,
      exercise: {
        boxes: 5,
        correctAnswers: ['0', '1/6', '1/4', '1/3', '1/2'],
        hint1: 'Remember: start at $0$ and go up to $\\frac{\\pi}{2}$, a quarter turn.',
        hint2: 'The angles are $0$, $\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$, $\\frac{\\pi}{3}$, and $\\frac{\\pi}{2}$, so the coefficients are $0$, $\\frac{1}{6}$, $\\frac{1}{4}$, $\\frac{1}{3}$, $\\frac{1}{2}$.',
        explanation: 'The five key angles in the first quadrant are $0$, $\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$, $\\frac{\\pi}{3}$, and $\\frac{\\pi}{2}$ radians.'
      }
    },
    {
      id: 'sin-up-intro',
      type: 'text' as const,
      content: `
**Understanding "Sin UP"** 📈

Look at how sine values change as the angle goes from $0$ to $\\frac{\\pi}{2}$:

[SINE_TABLE]

**Sin goes UP!** ⬆️ The values increase from 0 to 1 as the angle increases.

Remember: **"Sin UP"** - Sine values go UP from $0$ to $\\frac{\\pi}{2}$!
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

Remember: **"COAST DOWN"** - COsine values go DOWN as the angle goes from $0$ to $\\frac{\\pi}{2}$!

**Even better:** Cosine values are just the sine values in reverse order!
      `
    },
    {
      id: 'memory-trick',
      type: 'text' as const,
      content: `
**🧠 The Ultimate Memory Trick! 🧠**

Follow these simple steps to memorize all the values:

---

**Step 1: Count from 0 to 4**

$$0, \\quad 1, \\quad 2, \\quad 3, \\quad 4$$

---

**Step 2: Take the square root of each number**

$$\\sqrt{0}, \\quad \\sqrt{1}, \\quad \\sqrt{2}, \\quad \\sqrt{3}, \\quad \\sqrt{4}$$

---

**Step 3: Simplify the square roots**

$$0, \\quad 1, \\quad \\sqrt{2}, \\quad \\sqrt{3}, \\quad 2$$

---

**Step 4: Divide everything by 2**

$$0, \\quad \\frac{1}{2}, \\quad \\frac{\\sqrt{2}}{2}, \\quad \\frac{\\sqrt{3}}{2}, \\quad 1$$

---

**Step 5: Match with the angles**

Now see how these values become sine and cosine:

| Angle | sin (UP ⬆️) | cos (DOWN ⬇️) |
|-------|------------|---------------|
| $0$ | $0$ | $1$ |
| $\\frac{\\pi}{6}$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{2}$ |
| $\\frac{\\pi}{4}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{2}}{2}$ |
| $\\frac{\\pi}{3}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{2}$ |
| $\\frac{\\pi}{2}$ | $1$ | $0$ |

---

**Remember the pattern:**

✅ **For Sine: "Sin UP"** - Values go **up** from $0$ to $1$ (reading down the table)

✅ **For Cosine: "COAST DOWN"** - Values go **down** from $1$ to $0$ (reading down the table)

---

That's it! You now know the entire first quadrant of the unit circle! 🎉
      `
    },
    {
      id: 'completion',
      type: 'text' as const,
      content: `
**🌟 Lesson Complete! 🌟**

---

Congratulations! You've mastered the essential skills for memorizing the unit circle:

---

**✅ Key Takeaways:**

**1. The Counting Method**
- Count 0, 1, 2, 3, 4
- Take square roots
- Divide by 2

---

**2. The Five Key Angles**

$$0, \\quad \\frac{\\pi}{6}, \\quad \\frac{\\pi}{4}, \\quad \\frac{\\pi}{3}, \\quad \\frac{\\pi}{2}$$

---

**3. The Sin UP Pattern** ⬆️

Sine values **increase** from $0$ to $1$ as angles go from $0$ to $\\frac{\\pi}{2}$

---

**4. The COAST DOWN Pattern** ⬇️

Cosine values **decrease** from $1$ to $0$ as angles go from $0$ to $\\frac{\\pi}{2}$

---

**🎯 What's Next?**

Ready to practice on your own? Try the independent practice mode to reinforce what you've learned and master these patterns!
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

So when we write a point like $(\\frac{\\sqrt{3}}{2}, \\frac{1}{2})$ on the unit circle at the angle $\\frac{\\pi}{6}$:
- The **x-coordinate** $\\frac{\\sqrt{3}}{2}$ is $\\cos\\left(\\frac{\\pi}{6}\\right)$
- The **y-coordinate** $\\frac{1}{2}$ is $\\sin\\left(\\frac{\\pi}{6}\\right)$

**Think of it this way:** The angle tells you where to go, and the coordinates tell you the sine and cosine values!
      `
    },
    {
      id: 'special-triangles',
      type: 'text' as const,
      content: `
**The Special Right Triangles** 📐

The unit circle values come from two special right triangles that you may already know:

**The $\\frac{\\pi}{6}$, $\\frac{\\pi}{3}$, $\\frac{\\pi}{2}$ Triangle** (often called the 30-60-90 triangle):
- Angles: $\\frac{\\pi}{6}$, $\\frac{\\pi}{3}$, $\\frac{\\pi}{2}$
- Side ratio: $1 : \\sqrt{3} : 2$
- When we scale to fit the unit circle (radius = 1), we divide by 2
- This gives us: $\\frac{1}{2} : \\frac{\\sqrt{3}}{2} : 1$

**The $\\frac{\\pi}{4}$, $\\frac{\\pi}{4}$, $\\frac{\\pi}{2}$ Triangle** (often called the 45-45-90 triangle):
- Angles: $\\frac{\\pi}{4}$, $\\frac{\\pi}{4}$, $\\frac{\\pi}{2}$
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
**The First Quadrant ($0$ to $\\frac{\\pi}{2}$)** 🎯

Now it's your turn! Let's see if you can fill in the first quadrant of the unit circle.

[UNIT_CIRCLE_GAME]

Fill in all the angles and coordinates to complete the game. Remember:
- **Angles (radians):** $0$, $\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$, $\\frac{\\pi}{3}$, $\\frac{\\pi}{2}$ (type π/6 or pi/6)
- **Key coordinates:** (1, 0), (0, 1), and the three special triangle points
- **Tip:** Use the patterns from the two special right triangles!
      `
    },
    {
      id: 'why-it-works',
      type: 'text' as const,
      content: `
**Why Does This All Work?** 🤔

When you draw a radius from the origin to any point on the unit circle:

1. **The angle** is measured from the positive x-axis (going counterclockwise), in radians
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
✅ Why the two special right triangles give us our values
✅ How to read any point on the unit circle
✅ The connection between geometry and trigonometry

**Up Next:** You'll learn how to extend this to all four quadrants and work with angles beyond $\\frac{\\pi}{2}$!

You've mastered the foundation of the unit circle! 🎉
      `
    }
  ]
}
