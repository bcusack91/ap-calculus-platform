export const reflectionRefractionPart2Data = {
  topicSlug: 'reflection-refraction',
  sections: [
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
      id: 'sign-convention-quiz',
      type: 'text' as const,
      content: `
# 🎯 Quiz Time!

Test your understanding of the sign convention by identifying which directions are positive and negative.

<iframe src="/optics/sign-convention-quiz.html" width="100%" height="850" frameborder="0" style="border-radius: 10px; margin: 20px 0;"></iframe>

Once you ace this quiz, you'll be ready to move on to the Law of Reflection!
      `
    }
  ]
}
