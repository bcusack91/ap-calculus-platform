export const reflectionRefractionPart2Data = {
  topicSlug: 'reflection-refraction',
  sections: [
    {
      id: 'part3-roadmap-sign',
      type: 'text' as const,
      content: `
# Part 3 Roadmap: Sign Convention Mastery 📐

## You are here
**Part 3 of 8 — Sign Convention**

## Step sequence for this part
1. Set positive direction from light travel
2. Set vertical sign from optical axis
3. Practice with animations
4. Verify with quick checks

## Success target
Given any ray diagram, you can state which distances/heights are positive or negative in under 20 seconds.

Use this mini-template:
$$\text{Direction} \rightarrow \text{Reference line} \rightarrow \text{Sign assignment} \rightarrow \text{Check against ray path}$$
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
**Checkpoint: Direction + Height Signs**
      `,
      exercise: {
        questions: [
          {
            question: 'In this lesson convention, what defines the positive horizontal direction?',
            options: ['Toward the optical axis', 'Direction light travels', 'Always leftward', 'Always rightward regardless of ray'],
            correctAnswer: 1,
            explanation: 'The positive horizontal direction is defined by propagation direction of the light in the setup.'
          },
          {
            question: 'A point located below the optical axis has height sign:',
            options: ['Positive', 'Negative', 'Always zero', 'Undefined'],
            correctAnswer: 1,
            explanation: 'Height is measured from the optical axis: below axis is negative.'
          },
          {
            question: 'Best quick verification after assigning signs:',
            options: ['Ignore ray direction', 'Check whether signs match the drawn ray path and axis position', 'Swap all signs', 'Use absolute values'],
            correctAnswer: 1,
            explanation: 'A fast consistency check with the sketch catches most sign mistakes.'
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
**Common Mistakes: Sign Convention**
      `,
      exercise: {
        questions: [
          {
            question: 'Most common setup mistake:',
            options: [
              'Defining signs before drawing ray direction',
              'Using an optical axis',
              'Labeling the normal line',
              'Writing units'
            ],
            correctAnswer: 0,
            explanation: 'Always establish light direction first, then assign signs.'
          },
          {
            question: 'Student says: “Above axis is always negative in this course.” Best correction?',
            options: [
              'Correct for all problems',
              'No—above axis is positive, below is negative',
              'Signs do not apply to heights',
              'Heights are always zero'
            ],
            correctAnswer: 1,
            explanation: 'Vertical sign convention here is above axis positive, below axis negative.'
          }
        ]
      }
    }
  ]
}
