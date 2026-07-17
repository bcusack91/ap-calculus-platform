export const physics1ConservationOfMomentumPart5Data = {
  topicSlug: 'conservation-of-momentum',
  sections: [
    {
      id: 'cm5-intro',
      type: 'text' as const,
      content: `
# ⚠️ When Is Momentum NOT Conserved?

**Part 5 of 7 — Conservation of Momentum**

Momentum conservation is powerful, but it doesn\'t apply to every situation. Understanding **when** and **why** momentum is not conserved is just as important as knowing how to use it.

The answer comes down to one thing: **external forces**.
      `
    },
    {
      id: 'cm5-external-forces',
      type: 'text' as const,
      content: `
## The Role of External Forces

The complete version of Newton\'s Second Law for a system:

$$\\vec{F}_{\\text{net, external}} = \\frac{d\\vec{p}_{\\text{total}}}{dt}$$

- If $\\vec{F}_{\\text{net, ext}} = 0$: momentum **is conserved** ✅
- If $\\vec{F}_{\\text{net, ext}} \\neq 0$: momentum is **NOT conserved** ❌

### Common External Forces

| External Force | Effect | Example |
|---------------|--------|---------|
| **Friction** | Removes momentum from system | Sliding collision on rough surface |
| **Gravity** | Adds downward momentum over time | Projectile-style collisions |
| **Normal force** | Can add/remove vertical momentum | Object hitting a floor |
| **Applied force** | Changes system momentum | Pushing a cart during collision |
      `
    },
    {
      id: 'cm5-when-ok',
      type: 'text' as const,
      content: `
## When Can We Still Use Conservation?

Even with external forces, momentum conservation can be useful in these situations:

### 1. During Very Short Collisions

If the collision time $\\Delta t$ is very small (milliseconds), even large external forces produce negligible impulse:

$$J_{\\text{ext}} = F_{\\text{ext}} \\Delta t \\approx 0$$

So momentum is **approximately conserved** during the instant of collision.

### 2. In One Direction Only

If an external force acts only vertically (like gravity), horizontal momentum is still conserved:

$$p_x \\text{ is conserved} \\quad \\text{(even if } p_y \\text{ is not)}$$

### 3. By Choosing a Larger System

If friction from the floor acts on sliding blocks, include the Earth in your system — then gravity and normal forces become internal! (Impractical, but theoretically valid.)

### Example

A ball on a table collides with another ball. **Friction** acts on both, but during the brief collision instant ($\\Delta t \\approx 0.001$ s), the friction impulse is negligible. Momentum is conserved **during** the collision, but not after (friction gradually reduces momentum).
      `
    },
    {
      id: 'cm5-gravity-example',
      type: 'text' as const,
      content: `
## Example: Gravity as External Force

A 2 kg ball is thrown horizontally at 10 m/s off a cliff. After 3 seconds:

**Horizontal momentum:** $p_x = (2)(10) = 20$ kg·m/s — **CONSERVED** (no horizontal external force, ignoring air resistance)

**Vertical momentum:** $p_y = (2)(0 + 10 \\times 3) = 60$ kg·m/s downward — **NOT conserved** (gravity is an external force adding downward impulse)

The impulse from gravity: $J_y = mg\\Delta t = (2)(10)(3) = 60$ kg·m/s — exactly the change in vertical momentum!

### Key Takeaway

> Always check: Is there a net external force? If yes, momentum is NOT conserved in that direction. But it may still be conserved in the perpendicular direction.
      `
    },
    {
      id: 'cm5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — External Forces** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two hockey pucks collide on a frictionless ice surface. Is momentum conserved?',
            options: [
              'No, because kinetic energy changes',
              'Yes, because there is no net external force on the system',
              'Only if the collision is elastic',
              'Only in the vertical direction'
            ],
            correctAnswer: 1,
            explanation: 'On frictionless ice, the only forces are internal (between the pucks). Gravity and normal forces cancel vertically. The net external horizontal force is zero, so momentum is conserved.'
          },
          {
            question: 'A block sliding on a rough surface collides with a stationary block. Is the total momentum of the two blocks conserved DURING the collision?',
            options: [
              'No, friction prevents conservation',
              'Yes, approximately — the collision is so brief that friction impulse is negligible',
              'Only if the blocks have equal mass',
              'Only if kinetic energy is conserved'
            ],
            correctAnswer: 1,
            explanation: 'During the very brief collision instant ($\\Delta t \\approx$ ms), the friction force has negligible impulse: $J_{\\text{friction}} = f \\cdot \\Delta t \\approx 0$. So momentum is approximately conserved during the collision, even with friction.'
          },
          {
            question: 'A ball in free fall is NOT part of an isolated system (considering only the ball). Its momentum:',
            options: [
              'Is conserved',
              'Increases at a constant rate',
              'Decreases at a constant rate',
              'Remains constant then suddenly changes'
            ],
            correctAnswer: 1,
            explanation: '$dp/dt = F_{\\text{ext}} = mg$ (constant downward). The ball gains downward momentum at a constant rate of $mg$ per second. This is just another way of saying it accelerates at $g$.'
          }
        ]
      }
    },
    {
      id: 'cm5-calculations',
      type: 'input-boxes' as const,
      content: `
**External Force Analysis** 🧮

1) A 5 kg ball falls for 4 seconds. How much momentum does gravity add? (in kg·m/s, use $g = 10$ $m/s^{2}$)

2) Two 3 kg blocks collide on a surface with friction $\\mu_k = 0.2$. If the collision lasts 0.005 s, what is the impulse from friction on the system during the collision? (in N·s, use $g = 10$ $m/s^{2}$)

3) For the same system in problem 2, if the blocks slide together for 2 s after colliding, what impulse does friction deliver during this time? (in N·s)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['200', '0.06', '24'],
        hint1: '$J = mg\\Delta t = (5)(10)(4)$',
        hint2: '$f = \\mu_k m_{\\text{total}} g = (0.2)(6)(10) = 12$ N. $J = f \\times 0.005$',
        hint3: '$J = f \\times \\Delta t = (12)(2)$',
        explanation: '1) $J = (5)(10)(4) = 200$ kg·m/s. 2) $f = (0.2)(6)(10) = 12$ N. $J = (12)(0.005) = 0.06$ N·s — negligible during the collision! 3) $J = (12)(2) = 24$ N·s — significant over 2 seconds. This is why momentum is approximately conserved DURING the collision but not after.'
      }
    },
    {
      id: 'cm5-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Conservation Conditions** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Momentum is conserved when there is:',
            options: ['no forces at all', 'no internal forces', 'no net external force', 'no kinetic energy change'],
            correctIndex: 2,
            explanation: 'Momentum is conserved when there is no net external force on the system. Internal forces (no matter how large) cancel by Newton\'s Third Law.'
          },
          {
            label: 'Even when friction is present, momentum is approximately:',
            options: ['conserved during the collision', 'never conserved', 'conserved only after the collision', 'conserved only if there is no energy loss'],
            correctIndex: 0,
            explanation: 'During a brief collision, external forces like friction have negligible impulse ($J = F\\Delta t \\approx 0$). So momentum is approximately conserved during the collision instant.'
          },
          {
            label: 'When a net external force acts in one direction, momentum is still conserved:',
            options: ['in all directions', 'only vertically', 'only horizontally', 'in the direction perpendicular to the external force'],
            correctIndex: 3,
            explanation: 'If a net external force acts in one direction, momentum is not conserved in that direction. But it IS conserved in the perpendicular direction (where the force has no component).'
          }
        ]
      }
    },
    {
      id: 'cm5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — External Forces** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A bullet is fired horizontally from a rifle. Considering the bullet alone as the system, is its momentum conserved?',
            options: [
              'Yes, always',
              'No — gravity is an external force that changes vertical momentum',
              'Only during the time in the barrel',
              'Only if air resistance is negligible'
            ],
            correctAnswer: 1,
            explanation: 'With only the bullet as the system, the force from gravity is external and changes the bullet\'s vertical momentum. Its horizontal momentum is conserved (ignoring air resistance), but vertical momentum is not.'
          },
          {
            question: 'Which system choice makes gravity an internal force for a falling ball?',
            options: [
              'The ball alone',
              'The ball + the ground',
              'The ball + the Earth',
              'No system can make gravity internal'
            ],
            correctAnswer: 2,
            explanation: 'If you include both the ball and the Earth in the system, the gravitational force between them is an internal force. The system\'s total momentum is conserved (the Earth gains a tiny upward momentum as the ball falls).'
          }
        ]
      }
    }
  ]
}
