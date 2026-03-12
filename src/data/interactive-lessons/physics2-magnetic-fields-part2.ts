export const physics2MagneticFieldsPart2Data = {
  topicSlug: 'magnetic-fields-forces',
  sections: [
    {
      id: 'mf2-intro',
      type: 'text' as const,
      content: `
# ⚡ Force on Moving Charges

**Part 2 of 7 — The Magnetic Force Law**

Electric fields push charges along the field direction. Magnetic fields do something stranger: they push charges **perpendicular** to both the velocity and the field. This sideways force is the key to everything from particle accelerators to the Northern Lights.
      `
    },
    {
      id: 'mf2-force-law',
      type: 'text' as const,
      content: `
## The Magnetic Force on a Moving Charge

A charge $q$ moving with velocity $\\vec{v}$ in a magnetic field $\\vec{B}$ experiences a force:

$$\\vec{F} = q\\vec{v} \\times \\vec{B}$$

The magnitude is:

$$|\\vec{F}| = |q|vB\\sin\\theta$$

where $\\theta$ is the angle between $\\vec{v}$ and $\\vec{B}$.

### Key Properties

1. **The force is perpendicular to both $\\vec{v}$ and $\\vec{B}$** — it points "out of the plane" formed by the velocity and field vectors

2. **No force on stationary charges** — if $v = 0$, then $F = 0$

3. **No force when $\\vec{v} \\parallel \\vec{B}$** — if $\\theta = 0°$ or $180°$, then $\\sin\\theta = 0$

4. **Maximum force when $\\vec{v} \\perp \\vec{B}$** — when $\\theta = 90°$, $F = qvB$

5. **The magnetic force does no work** — since $\\vec{F} \\perp \\vec{v}$, the force changes direction but not speed
      `
    },
    {
      id: 'mf2-right-hand-rule',
      type: 'text' as const,
      content: `
## The Right-Hand Rule

To find the direction of $\\vec{F} = q\\vec{v} \\times \\vec{B}$:

### For Positive Charges ($q > 0$)

1. **Point your fingers** in the direction of $\\vec{v}$
2. **Curl them** toward $\\vec{B}$
3. **Your thumb points** in the direction of $\\vec{F}$

### For Negative Charges ($q < 0$)

Use the right-hand rule as above, then **reverse the direction** (the force is opposite to what the right-hand rule gives).

Alternatively: use your **left hand** for negative charges.

### Common Directions

| $\\vec{v}$ direction | $\\vec{B}$ direction | $\\vec{F}$ on $+q$ |
|-----|-----|------|
| $+x$ (right) | $+y$ (up) | $+z$ (out of page) |
| $+x$ (right) | $+z$ (out of page) | $-y$ (down) |
| $+y$ (up) | $+x$ (right) | $-z$ (into page) |
| $+z$ (out of page) | $+x$ (right) | $+y$ (up) |

### Memory Aid

Think: **"velocity, field, force"** — point, curl, thumb. For a positive charge, this directly gives the force. For an electron, flip it.
      `
    },
    {
      id: 'mf2-direction-drill',
      type: 'dropdown-select' as const,
      content: `
**Right-Hand Rule Drill** 👋

Determine the direction of the magnetic force on a **positive charge** in each scenario.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'v → (right), B ↑ (up): Force on +q is',
            options: ['into page', 'out of page', 'up', 'down', 'zero']
          },
          {
            label: 'v ↑ (up), B → (right): Force on +q is',
            options: ['into page', 'out of page', 'up', 'down', 'zero']
          },
          {
            label: 'v → (right), B → (right): Force on +q is',
            options: ['into page', 'out of page', 'up', 'down', 'zero']
          },
          {
            label: 'v ⊙ (out of page), B ↑ (up): Force on +q is',
            options: ['left', 'right', 'into page', 'out of page', 'zero']
          },
          {
            label: 'v → (right), B ⊗ (into page): Force on +q is',
            options: ['up', 'down', 'left', 'right', 'zero']
          }
        ],
        correctAnswers: ['out of page', 'into page', 'zero', 'left', 'up'],
        hint1: 'Use $\\vec{F} = q\\vec{v} \\times \\vec{B}$. Point fingers along v, curl toward B, thumb = F.',
        hint2: 'When v ∥ B, the cross product is zero — no force.',
        hint3: 'For v out of page and B up: fingers out of page, curl up → thumb points left.',
        explanation: 'Right × Up = Out of page. Up × Right = Into page. Parallel → zero. Out × Up = Left. Right × Into page = Up. Use the right-hand rule consistently.'
      }
    },
    {
      id: 'mf2-negative-charges',
      type: 'text' as const,
      content: `
## Force on Negative Charges

For an electron ($q = -e$) or any negative charge:

$$\\vec{F} = q\\vec{v} \\times \\vec{B} = (-e)\\vec{v} \\times \\vec{B}$$

The negative sign **reverses the force direction** compared to a positive charge.

### Example

An electron moves to the right ($+x$) in a magnetic field pointing up ($+y$):
- Right-hand rule for $+q$: $\\hat{x} \\times \\hat{y} = \\hat{z}$ → out of page
- Electron ($-q$): **reverse** → force is **into the page** ($-z$)

### Practical Importance

In most conductors, the current carriers are electrons (negative charges). When applying the force law to current-carrying wires, we can either:
- Use $\\vec{F} = q\\vec{v} \\times \\vec{B}$ with $q = -e$ and the actual electron velocity
- Or use the conventional current direction (opposite to electron flow) with $q = +e$

Both approaches give the **same force direction** on the wire.
      `
    },
    {
      id: 'mf2-electron-drill',
      type: 'dropdown-select' as const,
      content: `
**Electron Force Direction Drill** 🔬

Now find the force direction on an **electron** ($q = -e$).
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Electron moves right, B points up: Force is',
            options: ['into page', 'out of page', 'up', 'down', 'zero']
          },
          {
            label: 'Electron moves up, B points out of page: Force is',
            options: ['left', 'right', 'up', 'down', 'zero']
          },
          {
            label: 'Electron moves into page, B points right: Force is',
            options: ['up', 'down', 'left', 'right', 'zero']
          }
        ],
        correctAnswers: ['into page', 'left', 'up'],
        hint1: 'Find the direction for a positive charge first, then reverse.',
        hint2: 'For +q moving right with B up: $\\hat{x} \\times \\hat{y} = \\hat{z}$ (out of page). Electron: into page.',
        hint3: 'For +q moving up with B out of page: $\\hat{y} \\times \\hat{z} = \\hat{x}$ (right). Electron: left.',
        explanation: 'Apply right-hand rule for +q, then flip for the electron. Right/Up → out of page → electron: into page. Up/Out-of-page → $\\hat{y} \\times \\hat{z} = \\hat{x}$ (right) → electron: left. Into-page/Right → $(-\\hat{z}) \\times \\hat{x} = -\\hat{y}$ (down) → electron: up.'
      }
    },
    {
      id: 'mf2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Magnetic Force** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A proton moves at $3 \\times 10^6$ m/s perpendicular to a 0.5 T magnetic field. The magnetic force on the proton is:',
            options: [
              '$2.4 \\times 10^{-13}$ N',
              '$1.5 \\times 10^{-13}$ N',
              '$4.8 \\times 10^{-13}$ N',
              '$7.5 \\times 10^{-14}$ N'
            ],
            correctAnswer: 0,
            explanation: '$F = qvB\\sin 90° = (1.6 \\times 10^{-19})(3 \\times 10^6)(0.5)(1) = 2.4 \\times 10^{-13}$ N.'
          },
          {
            question: 'The magnetic force on a moving charge:',
            options: [
              'Does positive work, increasing kinetic energy',
              'Does negative work, decreasing kinetic energy',
              'Does no work — it changes direction but not speed',
              'Does work only on negative charges'
            ],
            correctAnswer: 2,
            explanation: 'Since $\\vec{F} \\perp \\vec{v}$ always, the work $W = \\vec{F} \\cdot \\vec{v} = 0$. The magnetic force changes the direction of motion but cannot change the speed or kinetic energy.'
          },
          {
            question: 'A charge moves parallel to a magnetic field. The force on it is:',
            options: [
              'Maximum ($F = qvB$)',
              'Half of maximum',
              'Zero',
              'Depends on the sign of the charge'
            ],
            correctAnswer: 2,
            explanation: '$F = qvB\\sin\\theta$. When $\\vec{v} \\parallel \\vec{B}$, $\\theta = 0°$ and $\\sin 0° = 0$, so $F = 0$. The cross product of parallel vectors is zero.'
          }
        ]
      }
    }
  ]
}
