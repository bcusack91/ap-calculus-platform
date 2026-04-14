export const physCCircMotionPart4Data = {
  topicSlug: "circular-motion-physics-c",
  sections: [
    {
      id: 'cm4-intro',
      type: 'text' as const,
      content: `# Vertical Circles

**Part 4 of 7 — Circular Motion**

In vertical circular motion, gravity alternately aids and opposes the centripetal acceleration, making the analysis position-dependent. This is a favorite AP Physics C topic.

## Forces at Key Positions

For a mass $m$ on a string (or track) of radius $r$, moving at speed $v$:

### At the Top

Both gravity and tension point toward the center (downward):
$$mg + T_{\\text{top}} = \\frac{mv_{\\text{top}}^2}{r}$$

$$T_{\\text{top}} = \\frac{mv_{\\text{top}}^2}{r} - mg$$

### At the Bottom

Tension points toward center (up); gravity points away (down):
$$T_{\\text{bot}} - mg = \\frac{mv_{\\text{bot}}^2}{r}$$

$$T_{\\text{bot}} = \\frac{mv_{\\text{bot}}^2}{r} + mg$$

### At an Arbitrary Angle $\\theta$ from Bottom

The component of gravity toward the center: $mg\\cos\\theta$ (measuring $\\theta$ from the bottom).

Wait — let's be precise. If $\\theta$ is measured from the *vertical* (i.e., from the bottom position):

$$T - mg\\cos\\theta = \\frac{mv^2}{r}$$`
    },
    {
      id: 'cm4-mcq1',
      type: 'mcq' as const,
      question: 'A 0.5 kg ball on a 1 m string moves at 5 m/s at the bottom of a vertical circle. What is the tension? ($g = 10$ m/s²)',
      options: [
        '$17.5$ N',
        '$12.5$ N',
        '$7.5$ N',
        '$25$ N'
      ],
      correctAnswer: 0,
      explanation: '$T = mv^2/r + mg = 0.5(25)/1 + 0.5(10) = 12.5 + 5 = 17.5$ N.'
    },
    {
      id: 'cm4-minimum',
      type: 'text' as const,
      content: `## Minimum Speed at the Top

At the top of a vertical circle, the minimum speed occurs when the tension (or normal force) drops to zero. At that point, gravity alone provides the centripetal force:

$$mg = \\frac{mv_{\\min}^2}{r}$$

$$\\boxed{v_{\\min,\\text{top}} = \\sqrt{gr}}$$

If the speed drops below this, the object leaves the circular path.

### Minimum Speed at the Bottom (for Complete Loop)

Using energy conservation from bottom to top:

$$\\frac{1}{2}mv_{\\text{bot}}^2 = \\frac{1}{2}mv_{\\text{top}}^2 + mg(2r)$$

With $v_{\\text{top}} = \\sqrt{gr}$:

$$\\frac{1}{2}v_{\\text{bot}}^2 = \\frac{1}{2}gr + 2gr = \\frac{5}{2}gr$$

$$\\boxed{v_{\\min,\\text{bot}} = \\sqrt{5gr}}$$

### Tension Difference (Top vs Bottom)

$$T_{\\text{bot}} - T_{\\text{top}} = \\frac{m(v_{\\text{bot}}^2 - v_{\\text{top}}^2)}{r} + 2mg$$

Using energy conservation: $v_{\\text{bot}}^2 - v_{\\text{top}}^2 = 4gr$:

$$T_{\\text{bot}} - T_{\\text{top}} = \\frac{m(4gr)}{r} + 2mg = 4mg + 2mg = 6mg$$

This result is independent of the speed — the tension difference is always $6mg$.`
    },
    {
      id: 'cm4-mcq2',
      type: 'mcq' as const,
      question: 'What minimum speed at the bottom of a vertical loop of radius 5 m allows a ball on a string to complete the loop? ($g = 10$ m/s²)',
      options: [
        '$\\sqrt{5(10)(5)} = \\sqrt{250} \\approx 15.8$ m/s',
        '$\\sqrt{(10)(5)} = \\sqrt{50} \\approx 7.07$ m/s',
        '$\\sqrt{2(10)(5)} = 10$ m/s',
        '$\\sqrt{4(10)(5)} = \\sqrt{200} \\approx 14.1$ m/s'
      ],
      correctAnswer: 0,
      explanation: '$v_{\\min} = \\sqrt{5gr} = \\sqrt{5 \\times 10 \\times 5} = \\sqrt{250} \\approx 15.8$ m/s.'
    },
    {
      id: 'cm4-track',
      type: 'text' as const,
      content: `## Vertical Circle on a Track (Normal Force)

For a ball rolling inside a circular loop track, the analysis is similar but the normal force replaces tension:

### At the Top (Inside of Loop)

$$N_{\\text{top}} + mg = \\frac{mv_{\\text{top}}^2}{r}$$

(both $N$ and $mg$ point toward center)

### At the Bottom (Inside of Loop)

$$N_{\\text{bot}} - mg = \\frac{mv_{\\text{bot}}^2}{r}$$

The minimum speed condition at the top is the same ($v_{\\min} = \\sqrt{gr}$), when $N_{\\text{top}} = 0$.

### Outside of a Hump

For a car going over a hill of radius $r$:

$$mg - N = \\frac{mv^2}{r}$$

$$N = mg - \\frac{mv^2}{r} = m\\left(g - \\frac{v^2}{r}\\right)$$

The car leaves the road when $N = 0$:

$$v_{\\text{leave}} = \\sqrt{gr}$$

### Worked Example: Roller Coaster

A roller coaster starts from height $h$ above the top of a circular loop of radius $r$. What is the normal force at the top of the loop?

By energy conservation from start to top of loop (height $= 2r$):
$$mgh = \\frac{1}{2}mv_{\\text{top}}^2 + mg(2r)$$
$$v_{\\text{top}}^2 = 2g(h - 2r)$$

At the top: $N + mg = mv_{\\text{top}}^2/r$
$$N = \\frac{m \\cdot 2g(h-2r)}{r} - mg = mg\\left(\\frac{2h}{r} - 5\\right)$$

For $N \\geq 0$: $h \\geq 5r/2$. This means the starting height must be at least $2.5r$ above the bottom of the loop.`
    },
    {
      id: 'cm4-mcq3',
      type: 'mcq' as const,
      question: 'A car crests a hill of radius $r = 40$ m. At what speed does the driver feel "weightless" (normal force = 0)? ($g = 10$ m/s²)',
      options: [
        '$20$ m/s',
        '$10$ m/s',
        '$28.3$ m/s',
        '$14.1$ m/s'
      ],
      correctAnswer: 0,
      explanation: 'At the top: $mg - N = mv^2/r$. Weightless means $N = 0$: $v = \\sqrt{gr} = \\sqrt{10 \\times 40} = 20$ m/s.'
    },
    {
      id: 'cm4-mcq4',
      type: 'mcq' as const,
      question: 'For a ball on a string in a vertical circle, the difference $T_{\\text{bottom}} - T_{\\text{top}}$ is always:',
      options: [
        '$6mg$',
        '$2mg$',
        '$4mg$',
        'Depends on the speed'
      ],
      correctAnswer: 0,
      explanation: '$T_{\\text{bot}} - T_{\\text{top}} = m(v_{\\text{bot}}^2 - v_{\\text{top}}^2)/r + 2mg$. Energy conservation gives $v_{\\text{bot}}^2 - v_{\\text{top}}^2 = 4gr$, so the difference is $4mg + 2mg = 6mg$, independent of speed.'
    },
    {
      id: 'cm4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary

| Position | Centripetal Equation |
|:---:|:---:|
| Bottom | $T - mg = mv^2/r$ |
| Top | $T + mg = mv^2/r$ (string) |
| Top | $N + mg = mv^2/r$ (track) |
| Hill crest | $mg - N = mv^2/r$ |

| Key Result | Value |
|:---:|:---:|
| Min speed at top | $\\sqrt{gr}$ |
| Min speed at bottom (full loop) | $\\sqrt{5gr}$ |
| Tension difference (top vs bottom) | $6mg$ |

> **Next up:** Part 5 — Non-Uniform Circular Motion, where both speed and direction change simultaneously.`
    }
  ]
};
