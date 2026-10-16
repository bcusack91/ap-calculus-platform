export const physics2EmInductionPart3Data = {
  topicSlug: 'electromagnetic-induction',
  sections: [
    {
      id: 'ei3-intro',
      type: 'text' as const,
      content: `
# 🔁 Lenz's Law

**Part 3 of 7 — Nature Opposes the Change**

Faraday's Law tells us the **magnitude** of the induced EMF. Lenz's Law tells us the **direction**. It embodies a profound principle: nature resists changes in magnetic flux.
      `
    },
    {
      id: 'ei3-lenzs-law',
      type: 'text' as const,
      content: `
## Lenz's Law — Statement

> **The induced current flows in a direction that opposes the change in magnetic flux that produced it.**

This is the physical meaning of the **negative sign** in Faraday's Law:

$$\\varepsilon = -N\\frac{d\\Phi_B}{dt}$$

### What "Opposes the Change" Means

- If flux is **increasing** → the induced current creates a magnetic field that **opposes** the external field (to try to prevent the increase)
- If flux is **decreasing** → the induced current creates a magnetic field in the **same direction** as the external field (to try to prevent the decrease)

### The Key Insight

The induced current doesn't oppose the flux itself — it opposes the **change** in flux. If the flux is constant, there is no induced current at all.
      `
    },
    {
      id: 'ei3-method',
      type: 'text' as const,
      content: `
## Step-by-Step Method for Finding Induced Current Direction

### Step 1: Determine the direction of the external magnetic field ($\\vec{B}_{\\text{ext}}$) through the loop.

### Step 2: Determine whether the flux is increasing or decreasing.
- Is $B$ getting stronger/weaker?
- Is the loop moving into/out of the field?
- Is the loop area growing/shrinking?

### Step 3: Find the direction of the induced magnetic field ($\\vec{B}_{\\text{ind}}$).
- Flux increasing → $\\vec{B}_{\\text{ind}}$ **opposes** $\\vec{B}_{\\text{ext}}$
- Flux decreasing → $\\vec{B}_{\\text{ind}}$ is in the **same direction** as $\\vec{B}_{\\text{ext}}$

### Step 4: Use the right-hand rule to find the current direction.
- Curl the fingers of your right hand in the direction of $\\vec{B}_{\\text{ind}}$ through the loop
- Your curled fingers point in the direction of the induced current

### Example: North pole of a magnet approaches a loop

1. $\\vec{B}_{\\text{ext}}$ points toward the loop (from the N pole)
2. Flux is **increasing** (magnet getting closer)
3. $\\vec{B}_{\\text{ind}}$ must oppose → points **away** from the magnet
4. The loop acts like a magnet with its N pole facing the approaching magnet — it **repels** the magnet!
      `
    },
    {
      id: 'ei3-examples',
      type: 'text' as const,
      content: `
## Classic Lenz's Law Scenarios

### Magnet Approaching a Loop
- North pole approaches → flux into loop increases → induced current creates field pointing back at magnet → loop's near face becomes **North** → **repels** the magnet

### Magnet Retreating from a Loop
- North pole moves away → flux into loop decreases → induced current creates field pointing toward magnet → loop's near face becomes **South** → **attracts** the magnet

### Both Cases: The Loop Opposes the Motion!

This is a consequence of **energy conservation**. If the induced current aided the motion, the magnet would accelerate, generating more current, generating more force — creating energy from nothing. That would violate conservation of energy!

### Eddy Currents

When a solid conductor moves through a non-uniform magnetic field (or a changing field passes through a conductor), **loops of current** form within the bulk of the metal. These are **eddy currents**.

By Lenz's Law, eddy currents always create forces that **oppose the relative motion** — this is the principle behind:
- **Magnetic braking** (used in roller coasters and trains)
- **Metal detectors**
- **Induction cooktops** (eddy currents generate heat)
      `
    },
    {
      id: 'ei3-direction-quiz',
      type: 'multiple-choice' as const,
      content: `
**Lenz's Law Concept Check** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'A magnet\'s south pole is pulled away from a conducting loop. The induced current in the loop will:',
            options: [
              'Create a north pole facing the magnet (repel it)',
              'Create a south pole facing the magnet (attract it)',
              'Create a north pole facing away from the magnet',
              'Not flow — south poles don\'t induce current'
            ],
            correctAnswer: 1,
            explanation: 'S pole moving away → flux decreasing → induced field tries to maintain flux → field points toward the retreating S pole → loop creates a S pole on the near face → attracts the magnet, opposing its departure.'
          },
          {
            question: 'Why does Lenz\'s Law follow from conservation of energy?',
            options: [
              'Because the magnetic field itself stores the energy that drives the current',
              'Because opposing the change requires work, ruling out perpetual motion',
              'Because induced currents always dissipate their energy as heat in the loop',
              'Because magnetic flux is conserved, so the induced field must cancel it'
            ],
            correctAnswer: 1,
            explanation: 'If the induced current aided the change (e.g., attracted an approaching magnet), the system would accelerate and generate ever more current — creating energy from nothing. Lenz\'s Law ensures you must do work to change the flux.'
          }
        ]
      }
    },
    {
      id: 'ei3-direction-drill',
      type: 'dropdown-select' as const,
      content: `
**Lenz's Law Direction Drill** 🧭

For each scenario, determine the direction of the induced current (as viewed from the specified side).
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A magnetic field pointing into the page through a loop is increasing. The induced current (viewed from front) flows:',
            options: ['Clockwise', 'Counterclockwise', 'No current flows']
          },
          {
            label: 'A magnetic field pointing to the right through a coil is decreasing. The induced field points:',
            options: ['To the left', 'To the right', 'Upward']
          },
          {
            label: 'A bar magnet with its N pole is pushed into a coil from the left. The current in the coil (viewed from the left) flows:',
            options: ['Clockwise', 'Counterclockwise', 'No current flows']
          },
          {
            label: 'A conducting ring falls through a region where $B$ points to the right. As it exits the field region, the induced magnetic field from the ring points:',
            options: ['To the left', 'To the right', 'Downward']
          }
        ],
        correctAnswers: ['Counterclockwise', 'To the right', 'Counterclockwise', 'To the right'],
        hint1: 'Flux into page is increasing → induced field must oppose → point out of page → use right-hand rule.',
        hint2: 'Flux to the right is decreasing → induced field supports the existing flux → also points to the right.',
        hint3: 'N pole approaching from the left → flux to the right increases → induced field opposes → points to the left. Viewed from the left, right-hand rule gives counterclockwise.',
        explanation: '(1) Increasing into-page flux → induced $B$ out of page → CCW. (2) Decreasing rightward flux → induced $B$ supports → to the right. (3) N pole approaching → induced $B$ opposes (points left, repelling) → CCW from left. (4) Exiting the field → rightward flux decreasing → induced $B$ to the right to maintain flux.'
      }
    },
    {
      id: 'ei3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Lenz's Law** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Eddy currents in a metal plate moving through a magnetic field always:',
            options: [
              'Speed up the plate',
              'Heat the plate and slow it down',
              'Leave its motion unchanged',
              'Create a uniform field'
            ],
            correctAnswer: 1,
            explanation: 'By Lenz\'s Law, eddy currents oppose the relative motion → they slow the plate down. The currents also dissipate energy as heat in the plate (resistive heating).'
          },
          {
            question: 'A conducting loop sits on a table. A magnet above it, with the N pole pointing down, is dropped toward the loop. Before the magnet reaches the loop, the loop will:',
            options: [
              'Experience an upward force that pulls it toward the magnet',
              'Experience a sideways force that slides it along the table',
              'Experience a downward, repulsive force',
              'Experience no force until the magnet actually touches it'
            ],
            correctAnswer: 2,
            explanation: 'The approaching N pole increases the downward flux through the loop. The induced current opposes this by making an upward field, so the loop\'s top face acts as a N pole and repels the falling magnet. By Newton\'s 3rd law the magnet pushes the loop away from itself, which is downward, pressing it into the table. The force exists before contact because the flux is already changing.'
          }
        ]
      }
    }
  ]
}
