export const physics2ElectricFieldsPart3Data = {
  topicSlug: 'electric-fields-potential',
  sections: [
    {
      id: 'ef3-intro',
      type: 'text' as const,
      content: `
# 🎨 Electric Field Lines & Visualization

**Part 3 of 7 — Seeing the Invisible**

Electric fields are invisible, but we can draw **field lines** to visualize them. These diagrams appear on nearly every AP Physics 2 exam.
      `
    },
    {
      id: 'ef3-rules',
      type: 'text' as const,
      content: `
## Rules for Electric Field Lines

Field lines aren't just artistic — they follow strict rules:

### Drawing Rules

1. **Start on + charges, end on − charges** (or extend to infinity)
2. **Number of lines ∝ charge magnitude** — a $+2Q$ charge has twice as many lines as $+Q$
3. **Lines never cross** — the field has a single direction at every point
4. **Tangent = field direction** — the field vector at any point is tangent to the line through that point
5. **Density = field strength** — lines close together → strong field; lines far apart → weak field

### What Lines Tell You

| Feature | Meaning |
|:---:|:---:|
| Lines close together | Strong field |
| Lines far apart | Weak field |
| Lines evenly spaced | Uniform field |
| Lines curving | Field direction is changing |
      `
    },
    {
      id: 'ef3-common-patterns',
      type: 'text' as const,
      content: `
## Common Field Line Patterns

### 1. Single Positive Charge
Lines radiate **outward** in all directions, like a starburst. Spacing increases with distance (field weakens).

### 2. Single Negative Charge
Lines point **inward** from all directions, converging on the charge.

### 3. Electric Dipole (+Q and −Q)
Lines leave +Q, curve through space, and terminate on −Q. The pattern is symmetric about the perpendicular bisector.

### 4. Two Equal Positive Charges
Lines leave both charges and bend *away* from the midpoint. There's a null point (E = 0) at the center where no lines pass.

### 5. Uniform Field (Parallel Plates)
Between the plates: **parallel, evenly-spaced lines** pointing from + plate to − plate. This represents a uniform field $E = \\text{constant}$.

### 6. Unequal Charges ($+2Q$ and $-Q$)
Twice as many lines leave $+2Q$ as terminate on $-Q$. The extra lines extend to infinity.
      `
    },
    {
      id: 'ef3-conductors',
      type: 'text' as const,
      content: `
## Field Lines and Conductors

Conductors at electrostatic equilibrium have special properties:

1. **$E = 0$ inside the conductor** — no field lines penetrate the interior
2. **Field lines are perpendicular to the surface** — if they weren't, the surface component would push charges along the surface until equilibrium
3. **All excess charge resides on the surface** — Gauss's Law proves this
4. **Field is strongest at points/sharp edges** — lines crowd together at sharp features

### Why Perpendicular?

If a field line were at an angle to a conductor surface, it would have a component *along* the surface. This would push free electrons, which would redistribute until the tangential component vanishes. At equilibrium, only the perpendicular component remains.

This is why lightning rods work — charge concentrates at the sharp tip, creating an intense local field.
      `
    },
    {
      id: 'ef3-field-line-quiz',
      type: 'multiple-choice' as const,
      content: `
**Field Line Mastery Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Two electric field lines cross at point P. This means:',
            options: [
              'The field is very strong at P',
              'The field is zero at P',
              'This is impossible — field lines never cross',
              'There are two charges at P'
            ],
            correctAnswer: 2,
            explanation: 'If lines crossed, there would be two field directions at one point — which is impossible. A unique field vector exists at every point in space.'
          },
          {
            question: 'A charge $+3Q$ is near a charge $-Q$. How do the field lines compare?',
            options: [
              'Equal lines leave $+3Q$ and enter $-Q$',
              'Three times as many lines leave $+3Q$; one-third end on $-Q$, the rest go to infinity',
              'Lines only exist between the charges',
              'All lines from $+3Q$ end on $-Q$'
            ],
            correctAnswer: 1,
            explanation: '3 lines leave for every 1 that enters $-Q$. The remaining 2/3 of lines extend to infinity — they have no local negative charge to terminate on.'
          },
          {
            question: 'Inside a hollow conducting sphere with charge on its surface, the electric field is:',
            options: [
              'Uniform and strong',
              'Radially outward',
              'Zero',
              'Pointing toward the center'
            ],
            correctAnswer: 2,
            explanation: 'Inside any conductor at equilibrium, $E = 0$. This includes hollow cavities within conductors (as long as no charge is inside the cavity).'
          },
          {
            question: 'Field lines between parallel plates are straight and evenly spaced. This tells us the field is:',
            options: [
              'Very weak',
              'Varying linearly',
              'Uniform (constant magnitude and direction)',
              'Zero at the midpoint'
            ],
            correctAnswer: 2,
            explanation: 'Evenly-spaced parallel lines = constant field strength. Straight lines = constant direction. Together: uniform field. This is the defining feature of the parallel-plate arrangement.'
          }
        ]
      }
    },
    {
      id: 'ef3-interpretation-drill',
      type: 'dropdown-select' as const,
      content: `
**Field Line Interpretation** — Choose the correct description for each scenario.
      `,
      exercise: {
        dropdowns: [
          {
            id: 'fl1',
            label: 'Lines radiate outward from a charge. The charge is:',
            options: ['Positive', 'Negative', 'Neutral'],
            correctAnswer: 'Positive'
          },
          {
            id: 'fl2',
            label: 'Region A has 12 field lines per $cm^{2}$. Region B has 3 lines per $cm^{2}$. Field strength comparison:',
            options: ['A = B', 'A is 4× stronger than B', 'B is 4× stronger than A', 'Cannot determine'],
            correctAnswer: 'A is 4× stronger than B'
          },
          {
            id: 'fl3',
            label: 'Field lines meet a conductor surface at 45°. This situation is:',
            options: ['Normal for curved surfaces', 'Only at edges', 'Impossible at equilibrium', 'Indicates zero field'],
            correctAnswer: 'Impossible at equilibrium'
          },
          {
            id: 'fl4',
            label: 'A field line pattern shows 8 lines leaving charge A and 4 lines entering charge B. The charge ratio |A/B| is:',
            options: ['1', '2', '4', '1/2'],
            correctAnswer: '2'
          }
        ]
      }
    },
    {
      id: 'ef3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** — Get these right and you're ready for electric potential!
      `,
      exercise: {
        questions: [
          {
            question: 'At a point where field lines are diverging (spreading apart), what is happening to the field strength?',
            options: [
              'Increasing',
              'Decreasing',
              'Staying constant',
              'Changing direction only'
            ],
            correctAnswer: 1,
            explanation: 'Lines spreading apart means decreasing density → decreasing field strength. This happens as you move away from a point charge.'
          },
          {
            question: 'A positive charge is placed near a large grounded conductor. The field lines from the charge will:',
            options: [
              'Pass through the conductor',
              'Terminate perpendicular to the conductor surface',
              'Reflect off the conductor',
              'Circle around the conductor'
            ],
            correctAnswer: 1,
            explanation: 'The grounded conductor is at zero potential. Field lines from the positive charge terminate on induced negative charges on the conductor surface, arriving perpendicular to the surface (as required at equilibrium).'
          }
        ]
      }
    }
  ]
}
