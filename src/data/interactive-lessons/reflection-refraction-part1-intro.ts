export const reflectionRefractionPart1Data = {
  topicSlug: 'reflection-refraction',
  sections: [
    {
      id: 'part1-roadmap',
      type: 'text' as const,
      content: `
# Part 1 Roadmap: Foundations First 🧭

## You are here
**Part 1 of 8 — Foundations**

## In this part, you will:
1. Define what light is
2. Identify reflection vs refraction
3. Connect optics to real-world systems
4. Complete quick checks after each concept block

## Success target
By the end of this part, you should be able to explain (in one sentence each):
- Why light bends at boundaries
- Why fiber optics work
- Why rainbows form

## Problem workflow you will reuse all course long
$$\text{Given} \rightarrow \text{Find} \rightarrow \text{Formula} \rightarrow \text{Substitute} \rightarrow \text{Interpret}$$
      `
    },
    {
      id: 'welcome-hook',
      type: 'text' as const,
      content: `
# 🌈 Why Can You See a Rainbow?

Have you ever wondered why rainbows form perfect arcs after a storm? Or how your phone's camera focuses light to capture a photo? Or why fiber optic cables can send internet signals thousands of miles without losing data?

**The answer lies in how light behaves.**

When light travels through different materials — air, water, glass, diamond — it doesn't just pass through unchanged. It **bends**, **bounces**, and **splits** into colors.

Understanding these behaviors unlocks the secrets behind:
- 📸 Every camera lens and telescope
- 💎 Why diamonds sparkle
- 🌐 The entire internet (fiber optics!)
- 👓 Prescription glasses and contacts
- 🌈 Rainbows and natural phenomena

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
> 💡 **Key Insight:** White light is actually a mixture of all colors combined! When you split white light through a prism, you see all the individual colors that were mixed together.

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
              "3.0 × 10⁸ m/s",
              "3.0 × 10⁶ m/s",
              "3.0 × 10¹⁰ m/s",
              "1.5 × 10⁸ m/s"
            ],
            correctAnswer: 0,
            explanation: "The speed of light in vacuum is c = 3.0 × 10⁸ m/s (300,000 km/s), fast enough to circle Earth 7.5 times per second!"
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
            question: "What happens when light hits a boundary between two materials?",
            options: [
              "It only reflects",
              "It only refracts",
              "It can reflect, refract, or do both",
              "It always stops completely"
            ],
            correctAnswer: 2,
            explanation: "When light hits a boundary, it can reflect (bounce back), refract (bend), or most commonly, do both! Some light reflects while some refracts into the new material."
          },
          {
            question: "What causes white light to split into different colors?",
            options: [
              "All colors have the same wavelength",
              "Different colors have different wavelengths",
              "Light creates colors when it slows down",
              "Colors only exist in water"
            ],
            correctAnswer: 1,
            explanation: "White light is a mixture of all colors, each with a different wavelength. Red light has longer wavelengths (~700 nm) while blue light has shorter wavelengths (~450 nm)."
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
  <img src="/optics/fiber-optics-example.png" alt="Fiber optic cable showing light traveling through total internal reflection" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
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
  <img src="/optics/diamond-sparkle-example.png" alt="Diamond showing light refraction and internal reflection creating sparkle" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
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
> - Creates the famous "fire" and brilliance

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
  <img src="/optics/underwater-vision-example.png" alt="Light refracting at water surface creating optical illusion" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
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
> How to calculate exactly where objects **appear** versus where they **actually are**.
>
> This same principle explains why pools look shallower than they really are!
      `
    },
    {
      id: 'rainbows',
      type: 'text' as const,
      content: `
# Real-World Example #4: Rainbow Formation 🌈

<div style="text-align: center; margin: 2rem 0;">
  <img src="/optics/rainbow-formation-example.png" alt="Rainbow formation through refraction and reflection in raindrops" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
</div>

> ## ✨ The Magic
>
> Sunlight + raindrops = perfect circular arc of colors!

&nbsp;

> ## 🔬 The Physics
>
> A beautiful combination of **three phenomena**:
>
> 1. **Refraction entering the drop** → Disperses white light into colors
> 2. **Reflection at the back** → Bounces light back toward you  
> 3. **Refraction exiting** → Further separates the colors

&nbsp;

> ## 📊 What You'll Learn
>
> Why red is always on the outside and violet is always on the inside of a rainbow!
>
> You'll understand the complete physics behind one of nature's most beautiful displays.
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
              "Light bounces off the fiber walls via total internal reflection",
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
              "They have a very high index of refraction (n = 2.42)",
              "They are naturally colorful"
            ],
            correctAnswer: 2,
            explanation: "Diamonds have an extremely high index of refraction (n = 2.42), causing light to bend dramatically and bounce around inside, creating the famous sparkle and 'fire' effect!"
          },
          {
            question: "Why do objects underwater appear closer than they really are?",
            options: [
              "Water magnifies everything",
              "Light bends (refracts) when exiting water",
              "The water is always moving",
              "Our eyes work differently underwater"
            ],
            correctAnswer: 1,
            explanation: "Light refracts (bends) when exiting water into air. Your brain assumes light travels in straight lines, so this bending creates an optical illusion making objects appear closer to the surface than they actually are!"
          },
          {
            question: "What three phenomena combine to create a rainbow?",
            options: [
              "Reflection, absorption, and emission",
              "Refraction entering, reflection at back, and refraction exiting",
              "Diffraction, interference, and polarization",
              "Only refraction at different angles"
            ],
            correctAnswer: 1,
            explanation: "Rainbows form through: (1) refraction entering the raindrop that disperses colors, (2) reflection at the back of the drop, and (3) refraction exiting that further separates the colors - creating the perfect arc!"
          }
        ]
      }
    },
    {
      id: 'part1-step-template',
      type: 'text' as const,
      content: `
# Your 5-Step Optics Template (Use This Every Time) 🧩

When solving optics problems, write these headers explicitly:

## 1) Given
List known values and context (media, angle type, direction)

## 2) Find
State exactly what unknown you need

## 3) Formula
Pick one governing relation (e.g., Snell, index, reflection)

## 4) Substitute
Plug values with units and signs carefully

## 5) Interpret
Check if answer makes physical sense (toward/away normal, larger/smaller angle, etc.)

This structure will keep the next parts clear and fast.
      `
    },
    {
      id: 'part1-common-mistakes',
      type: 'multiple-choice' as const,
      content: `
**Common Mistakes Check: Part 1**
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement is a common misconception?',
            options: [
              'Light can both reflect and refract at one boundary',
              'All colors in white light have exactly the same wavelength',
              'Fiber optics rely on guided light paths',
              'Refraction can change apparent depth'
            ],
            correctAnswer: 1,
            explanation: 'White light contains multiple wavelengths. Different wavelengths refract differently.'
          },
          {
            question: 'A student says: "If light bends, it must have reflected." Best correction?',
            options: [
              'Correct—bending always means reflection',
              'Bending is refraction; reflection is bouncing back',
              'Bending only happens in vacuum',
              'Reflection and refraction are the same term'
            ],
            correctAnswer: 1,
            explanation: 'Refraction is bending through a new medium; reflection is return into the original medium.'
          },
          {
            question: 'Best reasoning habit for this course:',
            options: [
              'Memorize only final formulas',
              'Skip diagrams to save time',
              'Use the 5-step structure every problem',
              'Assume every boundary causes only one effect'
            ],
            correctAnswer: 2,
            explanation: 'A fixed structure reduces sign and interpretation errors in later parts.'
          }
        ]
      }
    },
    {
      id: 'part1-transfer-challenge',
      type: 'multiple-choice' as const,
      content: `
**Transfer Challenge (Real World)**
You are troubleshooting an underwater camera image that looks shifted from the diver's actual position. Which concept should you apply first?
      `,
      exercise: {
        questions: [
          {
            question: 'Best first concept to apply:',
            options: [
              'Only mirror reflection law',
              'Refraction at water-air boundary',
              'Nuclear decay equations',
              'Momentum conservation only'
            ],
            correctAnswer: 1,
            explanation: 'Underwater apparent-position errors are primarily refractive effects at medium boundaries.'
          }
        ]
      }
    }
  ]
}
