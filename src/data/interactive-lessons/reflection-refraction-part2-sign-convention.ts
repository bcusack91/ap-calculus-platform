export const reflectionRefractionPart2Data = {
  topicSlug: 'reflection-refraction',
  sections: [
    {
      id: 'part3-roadmap-sign',
      type: 'text' as const,
      content: `
# 📏 Sign Convention — The Key to Everything

**Part 3 of 8**

This is the most important part of the entire course. Get this right and every formula becomes straightforward. Skip it and you'll struggle with every problem.

We'll set up a simple rule system:
1. Which direction is positive?
2. Is a height positive or negative?

Once you nail this, you'll assign correct signs in seconds.
      `
    },
    {
      id: 'sign-convention-intro',
      type: 'text' as const,
      content: `
# Sign Convention

In optics, we define positive and negative directions based on how light travels.

**Step 1** → Place the object

**Step 2** → Draw light direction arrow from object to mirror/lens

**Step 3** → The arrow defines positive (+)

The interactive demonstration is next.
      `
    },
    {
      id: 'sign-convention-visual',
      type: 'text' as const,
      content: `
**Understanding the Sign Convention** 📐

Let's establish our coordinate system with a visual demonstration!

## Interactive Animation

<iframe src="/optics/sign-convention-animation.html" width="100%" height="800" frameborder="0" style="border-radius: 10px; margin: 20px 0;"></iframe>

The Cartesian sign convention is simple once you understand the key principle:

**The direction light travels DEFINES the positive direction** →
      `
    },
    {
      id: 'height-intro',
      type: 'text' as const,
      content: `
# Height Sign Convention

Height is measured from the optical axis.

**Above the axis** → Positive height (+)

**Below the axis** → Negative height (−)

Let's see it in action.
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
            question: 'What defines the positive horizontal direction in our convention?',
            options: ['Toward the optical axis', 'The direction light travels', 'Always leftward', 'Always rightward regardless of the ray'],
            correctAnswer: 1,
            explanation: 'The positive direction is defined by the direction light is propagating in the setup.'
          },
          {
            question: 'A point located below the optical axis has what height sign?',
            options: ['Positive', 'Negative', 'Always zero', 'Undefined'],
            correctAnswer: 1,
            explanation: 'Height is measured from the optical axis: above = positive, below = negative.'
          },
          {
            question: 'After assigning signs, what\'s the best way to double-check your work?',
            options: ['Ignore ray direction', 'Verify that signs match the drawn ray path and axis position', 'Swap all signs', 'Use absolute values instead'],
            correctAnswer: 1,
            explanation: 'A quick consistency check against your sketch catches most sign mistakes before they snowball.'
          }
        ]
      }
    },
    {
      id: 'sign-convention-quiz',
      type: 'text' as const,
      content: `
# 🎯 Quiz Time!

Test your understanding of the sign convention by identifying which directions are positive and negative.

<iframe src="/optics/sign-convention-quiz.html" width="100%" height="850" frameborder="0" style="border-radius: 10px; margin: 20px 0;"></iframe>

Once you ace this quiz, you'll be ready to move on to the Law of Reflection!
      `
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
            question: 'What is the most common setup mistake with sign convention?',
            options: [
              'Defining signs before drawing ray direction',
              'Using an optical axis',
              'Labeling the normal line',
              'Writing units'
            ],
            correctAnswer: 0,
            explanation: 'Always draw the light direction first, then assign signs. Skipping the sketch is where errors start.'
          },
          {
            question: 'True or false: "Above the optical axis is always negative."',
            options: [
              'Correct for all problems',
              'False — above axis is positive, below is negative',
              'Signs do not apply to heights',
              'Heights are always zero'
            ],
            correctAnswer: 1,
            explanation: 'Our vertical convention is above axis = positive, below axis = negative.'
          }
        ]
      }
    }
  ]
}
