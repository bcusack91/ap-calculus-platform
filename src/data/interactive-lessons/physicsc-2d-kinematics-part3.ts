export const physC2dKinPart3Data = {
  topicSlug: '2d-kinematics-physics-c',
  sections: [
    {
      id: '2dkin3-intro',
      type: 'text' as const,
      content: `# 2D Kinematics — Relative Motion

**Part 3 of 7**

Relative motion deals with how motion appears from different **frames of reference**.

### Notation

$\\vec{v}_{A/B}$ = velocity of $A$ relative to $B$ (velocity of $A$ as seen by $B$).

### The Relative Velocity Equation

$$\\vec{v}_{A/C} = \\vec{v}_{A/B} + \\vec{v}_{B/C}$$

This is simply vector addition. Think of it as "chaining" frames:

$$A \\to B \\to C$$

### Reversal Rule

$$\\vec{v}_{A/B} = -\\vec{v}_{B/A}$$

If you see a train moving east at $30$ m/s, the train sees you moving west at $30$ m/s.`
    },
    {
      id: '2dkin3-mcq1',
      type: 'mcq' as const,
      question: 'A boat moves at $4$ m/s north relative to the water. The water flows at $3$ m/s east relative to the ground. What is the boat\'s speed relative to the ground?',
      options: ['$5$ m/s', '$7$ m/s', '$1$ m/s', '$\\sqrt{7}$ m/s'],
      correctAnswer: 0,
      explanation: '$\\vec{v}_{B/G} = \\vec{v}_{B/W} + \\vec{v}_{W/G} = 4\\,\\hat{j} + 3\\,\\hat{i}$. Speed $= \\sqrt{3^2 + 4^2} = 5$ m/s.'
    },
    {
      id: '2dkin3-river',
      type: 'text' as const,
      content: `## River Crossing Problems

A classic application: a boat crossing a river with a current.

### Setup
- River width: $d$
- Boat speed relative to water: $v_B$
- Current speed: $v_C$ (perpendicular to the desired crossing direction)

### Two Common Strategies

**Strategy 1: Shortest time** — Aim straight across.

$$t = \\frac{d}{v_B}, \\quad \\text{drift} = v_C \\cdot t = \\frac{v_C \\cdot d}{v_B}$$

**Strategy 2: Straight across (no drift)** — Aim upstream at angle $\\theta$.

$$v_B\\sin\\theta = v_C \\implies \\theta = \\arcsin\\left(\\frac{v_C}{v_B}\\right)$$

Crossing component: $v_B\\cos\\theta = v_B\\sqrt{1 - (v_C/v_B)^2}$

$$t = \\frac{d}{v_B\\cos\\theta} = \\frac{d}{\\sqrt{v_B^2 - v_C^2}}$$

> **Note:** Strategy 2 only works if $v_B > v_C$. If the current is faster than the boat, straight-across crossing is impossible!`
    },
    {
      id: '2dkin3-mcq2',
      type: 'mcq' as const,
      question: 'A $200$ m wide river has a $3$ m/s current. A boat that can travel $5$ m/s relative to the water aims to cross straight (no drift). How long does the crossing take?',
      options: ['$50$ s', '$40$ s', '$66.7$ s', '$25$ s'],
      correctAnswer: 0,
      explanation: 'Crossing speed $= \\sqrt{v_B^2 - v_C^2} = \\sqrt{25-9} = 4$ m/s. Time $= 200/4 = 50$ s.'
    },
    {
      id: '2dkin3-frames',
      type: 'text' as const,
      content: `## Galilean Transformation

In classical mechanics (non-relativistic), if frame $S'$ moves at constant velocity $\\vec{V}$ relative to frame $S$:

### Position Transformation

$$\\vec{r}' = \\vec{r} - \\vec{V}t$$

### Velocity Transformation

$$\\vec{v}' = \\vec{v} - \\vec{V}$$

### Acceleration Transformation

$$\\vec{a}' = \\vec{a}$$

**Acceleration is the same in all inertial frames!** This is why Newton's laws work the same in any inertial reference frame.

### Example

A ball is thrown vertically upward in a train moving at constant velocity. 

- In the **train frame**: the ball goes straight up and comes back down.
- In the **ground frame**: the ball follows a parabolic trajectory.
- In **both frames**: $\\vec{a} = -g\\,\\hat{j}$.`
    },
    {
      id: '2dkin3-mcq3',
      type: 'mcq' as const,
      question: 'Car A moves east at $20$ m/s. Car B moves north at $15$ m/s. What is the speed of A as seen by B?',
      options: ['$25$ m/s', '$35$ m/s', '$5$ m/s', '$20$ m/s'],
      correctAnswer: 0,
      explanation: '$\\vec{v}_{A/B} = \\vec{v}_{A/G} - \\vec{v}_{B/G} = 20\\,\\hat{i} - 15\\,\\hat{j}$. Speed $= \\sqrt{20^2 + 15^2} = \\sqrt{625} = 25$ m/s.'
    },
    {
      id: '2dkin3-pursuit',
      type: 'text' as const,
      content: `## Pursuit and Interception

### Interception Problem

Object A at the origin moves with velocity $\\vec{v}_A$. Object B starts at position $\\vec{r}_0$ and moves with velocity $\\vec{v}_B$. They meet when:

$$\\vec{v}_A t = \\vec{r}_0 + \\vec{v}_B t$$

$$t = \\frac{\\vec{r}_0}{\\vec{v}_A - \\vec{v}_B}$$

(This must be solved component-by-component in 2D.)

### Example

A police car at the origin accelerates east with $a = 4$ $m/s^{2}$ from rest. A speeder is $100$ m east traveling at constant $20$ m/s east.

Police: $x_P = 2t^2$. Speeder: $x_S = 100 + 20t$.

Meeting: $2t^2 = 100 + 20t \\implies t^2 - 10t - 50 = 0$

$$t = \\frac{10 + \\sqrt{300}}{2} = 5 + 5\\sqrt{3} \\approx 13.66 \\text{ s}$$`
    },
    {
      id: '2dkin3-mcq4',
      type: 'mcq' as const,
      question: 'Rain falls vertically at $5$ m/s. You run horizontally at $5$ m/s. At what angle (from vertical) does the rain appear to hit you?',
      options: ['$45°$', '$30°$', '$60°$', '$90°$'],
      correctAnswer: 0,
      explanation: 'In your frame, the rain has velocity $\\vec{v}_{rain/you} = 0\\,\\hat{i} - 5\\,\\hat{j} - 5\\,\\hat{i} = -5\\,\\hat{i} - 5\\,\\hat{j}$. Wait: the rain moves at $-5\\hat{j}$ in the ground frame, and you move at $5\\hat{i}$, so $\\vec{v}_{rain/you} = -5\\hat{j} - 5\\hat{i}$. The angle from vertical: $\\arctan(5/5) = 45°$.'
    }
  ]
};
