export const reflectionRefractionPart1Data = {
  topicSlug: 'reflection-refraction',
  sections: [
    {
      id: 'part1-roadmap',
      type: 'text' as const,
      content: `
# 🧭 Welcome — Let's Build Your Foundation

**Part 1 of 8**

Before we dive into equations, we need to understand *what light actually does* when it meets different materials.

By the end of this part you'll be able to explain, in plain language:
- Why light bends at boundaries
- How fiber optics carry the internet
- Why a straw looks bent in a glass of water

No math yet — just the big picture. Ready?
      `
    },
    {
      id: 'welcome-hook',
      type: 'text' as const,
      content: `
# 🥤 Why Does a Straw Look Bent?

Have you ever noticed that a straw in a glass of water looks broken at the surface? Or that you can see your own reflection in a window at night? Or wondered why fiber optic cables can send internet signals thousands of miles without losing data?

**The answer lies in how light behaves.**

When light travels through different materials — air, water, glass, diamond — it doesn't just pass through unchanged. It **bends** and **bounces**.

Understanding these behaviors unlocks the secrets behind:
- 🪞 Mirrors and clear reflections
- 💎 Why diamonds sparkle
- 🌐 The entire internet (fiber optics!)
- 🏊 Why pools look shallower than they are
- 🪟 Why windows act like mirrors at night

**In this lesson, you'll master the physics that powers our modern visual world.**
      `
    },
    {
      id: 'what-is-light',
      type: 'text' as const,
      content: `
# 💡 What Is Light, Really?

Light is an **electromagnetic wave** that travels through space at incredible speed.

> <div style="text-align: center;">
> 
> ### ⚡ Speed of Light in Vacuum
>
> ## $c = 3.0 \\times 10^8$ m/s
>
> </div>

&nbsp;

> <div style="text-align: center;">
> <strong>That's 300,000 kilometers per second!</strong>
> <br/><br/>
> ⚡ Fast enough to circle Earth <strong>7.5 times per second</strong>
> </div>

&nbsp;

**Next:** We'll explore the key properties that make light behave the way it does.
      `
    },
    {
      id: 'light-properties',
      type: 'text' as const,
      content: `
# 🌟 Key Properties of Light

> ## 1️⃣ → Travels in Straight Lines
>
> In a uniform medium like air, light travels in straight lines called **rays**. This is why shadows have sharp edges and why we can aim lasers precisely.

&nbsp;

> ## 2️⃣ ↗ Can Change Direction  
>
> Light **reflects** when it hits a surface (like a mirror), and **refracts** when it enters a new material (like light bending in water). These two behaviors explain almost everything you see!

&nbsp;

> ## 3️⃣ 🌈 Different Colors = Different Wavelengths
>
> - **Red light** → ~700 nm (longer wavelength)
> - **Blue light** → ~450 nm (shorter wavelength)
>
> 💡 **Key Insight:** White light is actually a mixture of all the visible colors combined, from red (longest wavelength) to violet (shortest).

---
      `
    },
    {
      id: 'light-at-boundaries',
      type: 'text' as const,
      content: `
# What Happens When Light Hits a Boundary?

When light encounters a boundary between two materials (like air and water), it has three options:

## The Three Possibilities:

**1. Reflect** 🪞  
Light bounces back into the first material

**2. Refract** 🌊  
Light bends as it enters the second material

**3. Do Both!** ✨  
Most of the time, light partially reflects AND partially refracts

**We're going to learn the exact rules that determine what happens in each case.**

Ready to see this in action? Let's explore some real-world examples!
      `
    },
    {
      id: 'check-understanding-1',
      type: 'multiple-choice' as const,
      content: `
**✓ Check Your Understanding**

Let's make sure you've mastered the basics before moving forward!
      `,
      exercise: {
        questions: [
          {
            question: "What is the speed of light in a vacuum?",
            options: [
              "$3.0 \\times 10^{8}$ m/s",
              "$3.0 \\times 10^{6}$ m/s",
              "$3.0 \\times 10^{10}$ m/s",
              "$1.5 \\times 10^{8}$ m/s"
            ],
            correctAnswer: 0,
            explanation: "The speed of light in vacuum is c = $3.0 \\times 10^{8}$ m/s (300,000 km/s), fast enough to circle Earth 7.5 times per second!"
          },
          {
            question: "In a uniform medium like air, how does light travel?",
            options: [
              "In curved paths",
              "In straight lines called rays",
              "In circular patterns",
              "Randomly in all directions"
            ],
            correctAnswer: 1,
            explanation: "Light travels in straight lines called rays when moving through a uniform medium. This is why shadows have sharp edges!"
          },
          {
            question: "What usually happens when light hits a boundary between two transparent materials?",
            options: [
              "It only reflects",
              "It only refracts",
              "It reflects and refracts at the same time",
              "It always stops completely"
            ],
            correctAnswer: 2,
            explanation: "At a boundary between transparent materials, some light usually reflects (bounces back) while the rest refracts (bends) into the new material. Reflection alone happens only in special cases such as total internal reflection, covered in Part 7."
          },
          {
            question: "What makes red light different from blue light?",
            options: [
              "Red light travels faster in a vacuum",
              "Red light has a longer wavelength",
              "Red light is a different kind of wave",
              "Red light has a higher frequency"
            ],
            correctAnswer: 1,
            explanation: "Colors of light differ in wavelength: red has a longer wavelength (~700 nm) than blue (~450 nm). All colors travel at the same speed c in a vacuum, so the longer wavelength of red means a lower frequency, not a higher one."
          }
        ]
      }
    },
    {
      id: 'fiber-optics',
      type: 'text' as const,
      content: `
# Real-World Example #1: Fiber Optic Internet 🌐

<div style="text-align: center; margin: 2rem 0;">
  <img loading="lazy" src="/optics/fiber-optics-example.png" alt="Fiber optic cable showing light traveling through total internal reflection" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
</div>

> ## 🎯 The Challenge
>
> How do we send data thousands of miles without signal loss?

&nbsp;

> ## ✅ The Solution
>
> **Total internal reflection in glass fibers!**
>
> - Light enters a thin glass fiber
> - Bounces repeatedly off the walls (no signal loss!)
> - Travels vast distances at near light speed
> - Powers the entire internet backbone

&nbsp;

> ## 📊 What You'll Learn
>
> How to calculate the **critical angle** that makes this technology possible.
>
> This same principle is used in medical endoscopes and telecommunications worldwide!
      `
    },
    {
      id: 'diamonds',
      type: 'text' as const,
      content: `
# Real-World Example #2: Diamond Sparkle 💎

<div style="text-align: center; margin: 2rem 0;">
  <img loading="lazy" src="/optics/diamond-sparkle-example.png" alt="Diamond showing light refraction and internal reflection creating sparkle" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
</div>

> ## 💬 The Question
>
> Why do diamonds sparkle more than other gems?

&nbsp;

> ## 💡 The Answer
>
> Diamond's extremely high index of refraction: **$n = 2.42$**
>
> - Light bends dramatically when entering
> - Very small critical angle (only 24.4°)
> - Light bounces around inside repeatedly
> - Creates the famous brilliance

&nbsp;

> ## 📊 What You'll Learn
>
> How to predict which materials will sparkle the most based on their optical properties.
>
> Proper diamond cutting uses this physics to maximize sparkle!
      `
    },
    {
      id: 'underwater-vision',
      type: 'text' as const,
      content: `
# Real-World Example #3: Underwater Vision 🏊‍♀️

<div style="text-align: center; margin: 2rem 0;">
  <img loading="lazy" src="/optics/underwater-vision-example.png" alt="Light refracting at water surface creating optical illusion" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
</div>

> ## 👀 Ever Noticed?
>
> Objects underwater look closer than they really are!

&nbsp;

> ## 🔬 The Cause
>
> **Light bends (refracts) when exiting water!**
>
> - Your brain assumes light travels in straight lines
> - But refraction bends the light rays  
> - This creates optical illusions
> - Fish appear closer to the surface than they are

&nbsp;

> ## 📊 What You'll Learn
>
> How Snell's law predicts which way light bends at the surface — and why that makes underwater objects look **shifted** from where they **actually are**.
>
> This same principle explains why pools look shallower than they really are!
      `
    },
    {
      id: 'window-reflection',
      type: 'text' as const,
      content: `
# Real-World Example #4: Windows That Act Like Mirrors 🪟

> ## 👀 Ever Noticed?
>
> In daytime you look straight through a window. At night, with the lights on inside, the same window shows your reflection!

&nbsp;

> ## 🔬 The Physics
>
> **Light at a boundary partly reflects and partly transmits — all the time.**
>
> - A few percent of the light hitting glass reflects; most passes through
> - In daytime, bright light from outside passing through the glass swamps the faint reflection of the room
> - At night, little light comes in from outside, so the weak reflection of the bright room is easy to see
> - The glass didn't change — only which light is brighter

&nbsp;

> ## 📊 What You'll Learn
>
> The law of reflection, and how to predict the direction of the light that **does** pass into the new material.
      `
    },
    {
      id: 'check-understanding-2',
      type: 'multiple-choice' as const,
      content: `
**✓ Check Your Understanding**

Great progress! Let's verify you understand these real-world applications.
      `,
      exercise: {
        questions: [
          {
            question: "How does fiber optic internet work?",
            options: [
              "Light escapes the fiber and travels through air",
              "Light keeps reflecting totally off the fiber walls",
              "Electricity flows through the glass fiber",
              "Radio waves travel through the fiber"
            ],
            correctAnswer: 1,
            explanation: "Fiber optics work through total internal reflection - light bounces repeatedly off the walls of the glass fiber without escaping, allowing data to travel thousands of miles without signal loss!"
          },
          {
            question: "Why do diamonds sparkle more than other gems?",
            options: [
              "They are perfectly smooth",
              "They absorb more light",
              "They have a very high index of refraction",
              "They are naturally colorful"
            ],
            correctAnswer: 2,
            explanation: "Diamonds have an extremely high index of refraction (n = 2.42), causing light to bend dramatically and bounce around inside, creating the famous sparkle!"
          },
          {
            question: "Why do objects underwater appear closer than they really are?",
            options: [
              "Water magnifies everything",
              "Light bends as it leaves the water",
              "The water is always moving",
              "Our eyes work differently underwater"
            ],
            correctAnswer: 1,
            explanation: "Light refracts (bends) when exiting water into air. Your brain assumes light travels in straight lines, so this bending creates an optical illusion making objects appear closer to the surface than they actually are!"
          },
          {
            question: "Why can you see your reflection in a window at night but not during the day?",
            options: [
              "Glass only reflects light once it is dark outside",
              "The glass always reflects a little, but daylight outshines it",
              "Cold night air makes the glass turn into a mirror",
              "Daylight passes through glass but lamp light does not"
            ],
            correctAnswer: 1,
            explanation: "A small fraction of light reflects from glass at all times. In daytime the bright light coming in from outside hides that faint reflection; at night the outside is dark, so the reflection of the lit room stands out."
          }
        ]
      }
    },
    {
      id: 'part1-step-template',
      type: 'text' as const,
      content: `
# 🧩 A Problem-Solving Habit Worth Building

Starting in Part 3, you'll solve real optics problems. Here's the workflow top students use — write these five headers every time:

> **Given → Find → Formula → Substitute → Interpret**

1. **Given** — list the known values and context
2. **Find** — state exactly what you need
3. **Formula** — pick the right equation
4. **Substitute** — plug in values with correct signs and units
5. **Interpret** — does the answer make physical sense?

This single habit will prevent most mistakes in the parts ahead.
      `
    },
    {
      id: 'part1-final-check',
      type: 'multiple-choice' as const,
      content: `
**Before You Move On** — let's make sure the foundations are solid.
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these statements about white light is FALSE?',
            options: [
              'White light is a mixture of many colors',
              'Every color in white light has the same wavelength',
              'Red light has a longer wavelength than violet light',
              'Light of each color travels at speed c in a vacuum'
            ],
            correctAnswer: 1,
            explanation: 'White light is a mixture of colors with different wavelengths, from red (longest) to violet (shortest), so they cannot all share one wavelength. In a vacuum every color travels at the same speed c.'
          },
          {
            question: 'What is the difference between reflection and refraction?',
            options: [
              'They are the same thing',
              'Reflection bounces light back, refraction bends it into a new medium',
              'Reflection only happens in water',
              'Refraction only happens with mirrors'
            ],
            correctAnswer: 1,
            explanation: 'Reflection sends light back into the original medium, while refraction bends it as it enters a new one.'
          },
          {
            question: 'An underwater camera image shows a diver shifted from their actual position. Which concept explains this?',
            options: [
              'The mirror\'s law of reflection',
              'Refraction at the water–air boundary',
              'Nuclear decay equations',
              'Magnetic field deflection'
            ],
            correctAnswer: 1,
            explanation: 'Light bends (refracts) when crossing the water–air boundary, making objects appear shifted from where they really are.'
          }
        ]
      }
    }
  ]
}
