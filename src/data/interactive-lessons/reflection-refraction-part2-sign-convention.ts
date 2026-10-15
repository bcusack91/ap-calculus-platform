export const reflectionRefractionPart2Data = {
  topicSlug: 'reflection-refraction',
  sections: [
    {
      id: 'part3-roadmap-sign',
      type: 'text' as const,
      content: `
# 📏 Sign Convention — The Key to Everything

**Part 3 of 8**

Mirror and lens problems use one equation for every case, and the signs tell you what kind of image you get. Get the signs right and every formula becomes straightforward.

We'll set up the rule system the AP Physics 2 exam uses:
1. When is a distance positive or negative?
2. When is a focal length positive or negative?
3. When is a height positive or negative?

Once you learn these, you'll assign correct signs in seconds.
      `
    },
    {
      id: 'sign-convention-intro',
      type: 'text' as const,
      content: `
# The AP Sign Convention: "Real Is Positive"

The AP Physics 2 equation sheet gives one equation for both mirrors and thin lenses:

$$\\frac{1}{s_i} + \\frac{1}{s_o} = \\frac{1}{f} \\qquad |M| = \\left|\\frac{h_i}{h_o}\\right| = \\left|\\frac{s_i}{s_o}\\right|$$

Distances are measured from the mirror or lens, and the signs follow one idea: **real is positive, virtual is negative.**

| Quantity | Positive (+) when… | Negative (−) when… |
|---|---|---|
| Object distance $s_o$ | the object is real (light really comes from it) — every object you'll see on the exam | — |
| Image distance $s_i$ | the image is **real** (light really converges there) | the image is **virtual** (light only appears to come from there) |
| Focal length $f$ | the mirror or lens is **converging**: concave mirror, convex lens | the mirror or lens is **diverging**: convex mirror, concave lens |

### Where Real Images Form
- **Mirror:** in **front** of the mirror, on the same side as the object (light bounces back toward it).
- **Lens:** on the **far side** of the lens from the object (light passes through).

Virtual images form on the opposite side: **behind** a mirror, or on the **same side** of a lens as the object.

A **plane mirror** has its focal point infinitely far away, so $\\frac{1}{f} = 0$ and $s_i = -s_o$: the image is virtual and as far behind the mirror as the object is in front.
      `
    },
    {
      id: 'sign-convention-visual',
      type: 'text' as const,
      content: `
**Two Worked Examples** 📐

## Example 1 — Concave Mirror
A concave mirror has $f = +10$ cm (converging, so positive). An object sits 30 cm in front of it.

$$\\frac{1}{s_i} = \\frac{1}{10} - \\frac{1}{30} = \\frac{2}{30} \\Rightarrow s_i = +15 \\text{ cm}$$

Positive $s_i$: a **real** image 15 cm in front of the mirror. $|M| = 15/30 = 0.5$, so it is half as tall, and a real image from a single mirror is **inverted**.

## Example 2 — Diverging Lens
A concave (diverging) lens has $f = -20$ cm. An object sits 20 cm from it.

$$\\frac{1}{s_i} = -\\frac{1}{20} - \\frac{1}{20} = -\\frac{1}{10} \\Rightarrow s_i = -10 \\text{ cm}$$

Negative $s_i$: a **virtual** image 10 cm from the lens on the **same side** as the object. $|M| = 10/20 = 0.5$, and a virtual image from a single lens is **upright**.

## The Pattern
For a single mirror or lens, the sign of $s_i$ tells you everything:

| $s_i$ | Image type | Orientation |
|---|---|---|
| positive | real | inverted |
| negative | virtual | upright |

> Some textbooks measure every distance along the direction light travels (a "Cartesian" convention), which makes the object distance negative. The AP exam does not use that convention; stick with "real is positive."
      `
    },
    {
      id: 'height-intro',
      type: 'text' as const,
      content: `
# Height Sign Convention

Heights are measured from the principal (optical) axis.

**Above the axis** → Positive height (+)

**Below the axis** → Negative height (−)

An upright object drawn above the axis has $h_o > 0$. An **inverted** image points below the axis, so its height $h_i$ is negative. The equation sheet compares sizes with $|M| = |h_i/h_o|$; use the sign of the height (or real versus virtual) to state the orientation.
      `
    },
    {
      id: 'height-interactive',
      type: 'text' as const,
      content: `
**Interactive Height Tutorial** 📏

## Interactive Animation

<iframe src="/optics/height-sign-convention.html" width="100%" height="850" frameborder="0" style="border-radius: 10px; margin: 20px 0;"></iframe>

The optical axis is your reference line. Everything above it is positive, everything below is negative.
      `
    },
    {
      id: 'sign-convention-checkpoint',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** — Can you assign signs correctly?
      `,
      exercise: {
        questions: [
          {
            question: 'Using the AP sign convention, what is the sign of the focal length of a concave mirror and of a convex lens?',
            options: ['Both positive', 'Both negative', 'Positive for the mirror, negative for the lens', 'Negative for the mirror, positive for the lens'],
            correctAnswer: 0,
            explanation: 'A concave mirror and a convex lens are both converging, and converging elements have positive focal lengths. Convex mirrors and concave lenses are the diverging ones with negative $f$.'
          },
          {
            question: 'A thin-lens calculation gives $s_i = -12$ cm. The image is:',
            options: ['Virtual, on the same side as the object', 'Real, on the far side from the object', 'Real, on the same side as the object', 'Virtual, on the far side from the object'],
            correctAnswer: 0,
            explanation: 'A negative image distance means a virtual image. For a lens, virtual images form on the same side as the object, where the diverging rays appear to come from.'
          },
          {
            question: 'For a mirror, where does a real image (positive $s_i$) form?',
            options: ['In front of the mirror', 'Behind the mirror, where reflected light never goes', 'Exactly at the focal point for every object', 'On the surface of the mirror itself'],
            correctAnswer: 0,
            explanation: 'Reflected light travels back toward the object side, so the place where it actually converges is in front of the mirror. Images behind a mirror are virtual.'
          }
        ]
      }
    },
    {
      id: 'sign-convention-quiz',
      type: 'dropdown-select' as const,
      content: `
# 🎯 Sign Practice

Choose the sign of each quantity using the AP "real is positive" convention.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The focal length of a convex (diverging) mirror is',
            options: ['positive', 'negative', 'zero', 'infinite']
          },
          {
            label: 'The image distance for your reflection in a flat mirror is',
            options: ['positive', 'negative', 'zero', 'infinite']
          },
          {
            label: 'The object distance for a candle placed 25 cm in front of a lens is',
            options: ['positive', 'negative', 'zero', 'infinite']
          },
          {
            label: 'For an upright object, the height of an inverted image is',
            options: ['positive', 'negative', 'zero', 'infinite']
          }
        ],
        correctAnswers: ['negative', 'negative', 'positive', 'negative'],
        hint1: 'Converging means positive focal length; diverging means negative.',
        hint2: 'A flat-mirror image is behind the mirror, where no light actually goes.',
        hint3: 'Real objects always have positive object distances; heights below the axis are negative.',
        explanation: 'A convex mirror diverges light, so $f < 0$. A plane-mirror image is virtual, so $s_i < 0$. A real object has $s_o > 0$. An inverted image points below the axis, so its height is negative.'
      }
    },
    {
      id: 'part3-common-mistakes',
      type: 'multiple-choice' as const,
      content: `
**Before You Move On** — These two traps catch a lot of students.
      `,
      exercise: {
        questions: [
          {
            question: 'What is the most common sign mistake in mirror and lens problems?',
            options: [
              'Using +f for a diverging element',
              'Measuring the object distance from the focal point',
              'Writing distances in centimeters instead of meters',
              'Drawing the principal axis through the center'
            ],
            correctAnswer: 0,
            explanation: 'Convex mirrors and concave lenses spread light out, so their focal lengths must be entered as negative. Distances are measured from the mirror or lens, and centimeters are fine as long as every distance uses them.'
          },
          {
            question: 'Using $\\frac{1}{s_i} + \\frac{1}{s_o} = \\frac{1}{f}$, a student finds a negative $s_i$ for a converging lens. What does this mean?',
            options: [
              'The object is inside the focal length, so the image is virtual',
              'The student made an algebra error, since $s_i$ is never negative',
              'The image is real and forms on the far side of the lens',
              'The lens must actually be a diverging lens'
            ],
            correctAnswer: 0,
            explanation: 'A converging lens gives a virtual, upright, enlarged image when the object is closer than the focal point, and the equation shows this as a negative $s_i$. A negative image distance is a result, not a mistake.'
          }
        ]
      }
    }
  ]
}
