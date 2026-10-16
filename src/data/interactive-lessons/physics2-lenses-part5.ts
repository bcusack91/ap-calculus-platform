export const physics2LensesPart5Data = {
  topicSlug: 'lenses',
  sections: [
    {
      id: 'ln5-intro',
      type: 'text' as const,
      content: `
# 🧭 Working Backward with Lenses

**Part 5 of 7 — Choosing Lenses and Solving Symbolically**

So far you have started with a lens and an object and found the image. AP questions often run the other way: given the image you need, choose the lens and the object position; given measured distances, find the focal length; or derive an expression in terms of $f$ and $s_o$. The AP equation sheet writes object and image distances as $s_o$ and $s_i$ (the $s_o$ and $s_i$ of earlier parts) and magnification as $M$.

$$\\frac{1}{s_o} + \\frac{1}{s_i} = \\frac{1}{f} \\qquad M = \\frac{h_i}{h_o} = -\\frac{s_i}{s_o}$$
      `
    },
    {
      id: 'ln5-which-lens',
      type: 'text' as const,
      content: `
## Which Lens, Which Position?

Every image is real or virtual and larger or smaller than the object. For a single thin lens and a real object:

| Image needed | Lens | Object position |
|-------------|------|-----------------|
| Real, larger | Converging | Between $f$ and $2f$ |
| Real, smaller | Converging | Beyond $2f$ |
| Real, same size | Converging | Exactly at $2f$ |
| Virtual, larger | Converging | Inside $f$ |
| Virtual, smaller | Diverging | Anywhere |

Two combinations are impossible: a diverging lens never forms a real image of a real object, and it never forms a virtual image larger than the object.

### Useful Facts for Reasoning
- **Real images** form on the far side of the lens, are inverted, and can be projected onto a screen.
- **Virtual images** form on the object's side, are upright, and can be seen by looking through the lens but cannot be projected.
- A thin lens has a focal point on **each** side. Parallel rays from either side are bent toward (or away from) the focal point on the opposite side.
      `
    },
    {
      id: 'ln5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Working Backward Check**
      `,
      exercise: {
        questions: [
          {
            question: 'A student needs an image on a screen that is larger than the object. Which lens and object position will work?',
            options: [
              'A diverging lens with the object inside its focal length',
              'A converging lens with the object inside its focal length',
              'A converging lens with the object between $f$ and $2f$',
              'A converging lens with the object beyond $2f$'
            ],
            correctAnswer: 2,
            explanation: 'An image on a screen must be real, and a converging lens makes a real, enlarged image when the object is between $f$ and $2f$. Inside $f$ the image is virtual and cannot be projected, beyond $2f$ the real image is smaller, and a diverging lens never makes a real image of a real object.'
          },
          {
            question: 'Looking through a lens, a student sees an upright image of a coin that is half the coin\'s size. The lens must be:',
            options: [
              'Converging, with the coin beyond $2f$',
              'Converging, with the coin inside $f$',
              'Diverging, with the coin at any object distance',
              'Diverging, with the coin only inside $f$'
            ],
            correctAnswer: 2,
            explanation: 'An upright image is virtual, and a converging lens makes only enlarged virtual images, so a reduced upright image requires a diverging lens, which gives one for every object position. Beyond $2f$ a converging lens forms an inverted real image.'
          }
        ]
      }
    },
    {
      id: 'ln5-solving',
      type: 'text' as const,
      content: `
## Solving for $f$ or $s_o$

### Finding $f$ from Measured Distances
An object 15 cm from a lens produces a sharp real image on a screen 30 cm behind the lens:

$$\\frac{1}{f} = \\frac{1}{15} + \\frac{1}{30} = \\frac{3}{30} \\quad \\Rightarrow \\quad f = 10 \\text{ cm (converging)}$$

### Finding $s_o$ for a Required Magnification
**Goal**: a real, inverted image twice the object's height with $f = 10$ cm, so $M = -2$ and $s_i = 2s_o$.

$$\\frac{1}{10} = \\frac{1}{s_o} + \\frac{1}{2s_o} = \\frac{3}{2s_o} \\quad \\Rightarrow \\quad s_o = 15 \\text{ cm}, \\; s_i = 30 \\text{ cm}$$

**Goal**: a virtual, upright image three times the object's height with $f = 12$ cm, so $M = +3$ and $s_i = -3s_o$.

$$\\frac{1}{12} = \\frac{1}{s_o} - \\frac{1}{3s_o} = \\frac{2}{3s_o} \\quad \\Rightarrow \\quad s_o = 8 \\text{ cm}, \\; s_i = -24 \\text{ cm}$$

> 💡 Always translate the words first: "real" means $s_i > 0$ and $M < 0$; "virtual" means $s_i < 0$ and $M > 0$.
      `
    },
    {
      id: 'ln5-symbolic',
      type: 'text' as const,
      content: `
## Deriving a Symbolic Expression

AP questions may ask for the magnification in terms of $s_o$ and $f$ only.

**Step 1**: Solve the thin-lens equation for $s_i$:
$$s_i = \\frac{f s_o}{s_o - f}$$

**Step 2**: Substitute into $M = -\\frac{s_i}{s_o}$:
$$M = -\\frac{f}{s_o - f} = \\frac{f}{f - s_o}$$

### Check the Result Against What You Know

| Object position | $M = \\frac{f}{f - s_o}$ | Matches? |
|-----------------|------------------------|----------|
| $s_o = 2f$ | $\\frac{f}{-f} = -1$ | Real, inverted, same size ✓ |
| $s_o \\to f$ | Denominator $\\to 0$, so $\\lvert M \\rvert \\to \\infty$ | Image moves off to infinity ✓ |
| $s_o = \\frac{f}{2}$ | $\\frac{f}{f/2} = +2$ | Virtual, upright, enlarged ✓ |
| Diverging lens ($f < 0$) | Numerator and denominator both negative, denominator larger in size: between 0 and 1 | Virtual, upright, reduced ✓ |

Checking special cases is the fastest way to catch a sign error in a derivation.
      `
    },
    {
      id: 'ln5-input-drill',
      type: 'input-boxes' as const,
      content: `
**Working Backward Drill** 🧮

1) An object 20 cm from a lens produces a real image 60 cm from the lens. What is the focal length? (in cm)

2) What is the magnification of that image?

3) A converging lens has $f = 10$ cm. Where must an object be placed to form a virtual image 5 times the object's height? (object distance in cm)

4) What is the image distance for the arrangement in question 3? (in cm, include the sign)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['15', '-3', '8', '-40'],
        hint1: '$\\frac{1}{f} = \\frac{1}{20} + \\frac{1}{60} = \\frac{4}{60}$.',
        hint2: '$M = -s_i/s_o = -60/20$.',
        hint3: 'Virtual and 5 times as tall means $M = +5$, so $s_i = -5s_o$: $\\frac{1}{10} = \\frac{1}{s_o} - \\frac{1}{5s_o} = \\frac{4}{5s_o}$.',
        explanation: '$f = 60/4 = 15$ cm and $M = -3$ (real, inverted, three times as tall). For the virtual image, $\\frac{4}{5s_o} = \\frac{1}{10}$ gives $s_o = 8$ cm, and $s_i = -5(8) = -40$ cm.'
      }
    },
    {
      id: 'ln5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'An object is placed a distance $3f$ from a converging lens of focal length $f$. Using $M = \\frac{f}{f - s_o}$, the magnification is:',
            options: [
              '$-2$',
              '$+\\frac{1}{2}$',
              '$-\\frac{1}{2}$',
              '$-\\frac{1}{3}$'
            ],
            correctAnswer: 2,
            explanation: '$M = \\frac{f}{f - 3f} = \\frac{f}{-2f} = -\\frac{1}{2}$: real, inverted, half size. $-2$ inverts the fraction, $+\\frac{1}{2}$ drops the sign that marks a real image, and $-\\frac{1}{3}$ uses $f/s_o$.'
          },
          {
            question: 'A converging lens forms a sharp real image on a screen. The object is moved closer to the lens but stays outside the focal length. To get a sharp image again, the screen must be moved:',
            options: [
              'Away from the lens, and the new image is larger',
              'Toward the lens, and the new image is larger',
              'Toward the lens, and the new image is smaller',
              'Nowhere, since the image stays where it was'
            ],
            correctAnswer: 0,
            explanation: 'As $s_o$ decreases toward $f$, $\\frac{1}{s_i} = \\frac{1}{f} - \\frac{1}{s_o}$ gets smaller, so $s_i$ grows and the size ratio $s_i/s_o$ grows too. The image moves away from the lens and enlarges, so the screen must follow it.'
          }
        ]
      }
    }
  ]
}
