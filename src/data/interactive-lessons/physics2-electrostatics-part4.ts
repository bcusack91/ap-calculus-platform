export const physics2ElectrostaticsPart4Data = {
  topicSlug: 'electric-charge-coulombs-law',
  sections: [
    {
      id: 'ec4-intro',
      type: 'text' as const,
      content: `
# 🔌 Conductors, Insulators & Charging Methods

**Part 4 of 7**

Not all materials respond to charge the same way. Understanding the difference between conductors and insulators — and the three methods of charging — is essential for AP Physics 2.
      `
    },
    {
      id: 'ec4-conductors-insulators',
      type: 'text' as const,
      content: `
## Conductors vs. Insulators

### Conductors
Materials where electrons move **freely** throughout the material.

- Metals (copper, aluminum, gold)
- Saltwater, plasma
- Charge distributes itself on the **outer surface**
- Electric field inside a conductor is **zero** (in electrostatic equilibrium)

### Insulators
Materials where electrons are **locked in place** — charge stays where you put it.

- Rubber, glass, plastic, wood
- Charge can be deposited locally and stays put
- Electric field can exist inside an insulator

### Semiconductors
In between — conductivity can be controlled. Think silicon chips. (Not heavily tested on AP Physics 2, but good to know.)

### The Key Insight

> In a conductor, excess charge always migrates to the **outer surface** and distributes itself to minimize repulsion. Inside, $E = 0$.

This is why a car protects you during a lightning strike — it's a conducting shell (Faraday cage).
      `
    },
    {
      id: 'ec4-charging-methods',
      type: 'text' as const,
      content: `
## Three Methods of Charging

### 1. Charging by Friction (Triboelectric)
- Rub two insulators together
- Electrons transfer from one to the other
- Both objects end up with **equal and opposite** charges
- Example: balloon on hair, glass rod on silk

### 2. Charging by Conduction (Contact)
- Touch a charged object to a neutral conductor
- Charge **flows** until both reach the same potential
- Both objects end up with the **same sign** of charge
- Example: touching a charged rod to a metal sphere

### 3. Charging by Induction
- Bring a charged object **near** (but not touching) a conductor
- Charge in the conductor **redistributes** (polarizes)
- Ground the conductor → one sign of charge drains away
- Remove ground, then remove charged object
- Result: conductor has charge **opposite** to the inducing object
- **No contact needed!**

### Summary Table

| Method | Contact? | Resulting Sign | Works On |
|--------|----------|---------------|----------|
| Friction | Yes | Opposite on each | Insulators |
| Conduction | Yes | Same as source | Conductors |
| Induction | No | Opposite to source | Conductors |
      `
    },
    {
      id: 'ec4-polarization',
      type: 'text' as const,
      content: `
## Polarization — Why Neutral Objects Are Attracted

Even a **neutral** object can be attracted to a charged object! Here's why:

When a charged rod approaches a neutral conductor:
1. Opposite charges in the conductor are **pulled closer** to the rod
2. Like charges are **pushed farther away**
3. The nearby opposite charges feel a **stronger** force (closer = stronger, by Coulomb's Law)
4. Net result: **attraction**

This also works with insulators, but by a different mechanism — the electron clouds of individual atoms shift slightly, creating tiny dipoles. This is called **polarization**.

> A charged object attracts all neutral objects — conductors and insulators alike — through polarization.

This is why a charged balloon sticks to a neutral wall!
      `
    },
    {
      id: 'ec4-check',
      type: 'dropdown-select' as const,
      content: `
**Conductor & Insulator Check** 🎯
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In a conductor at electrostatic equilibrium, excess charge resides',
            options: ['throughout the volume', 'only on the outer surface', 'only at the center', 'nowhere — it dissipates']
          },
          {
            label: 'Electric field inside a conductor at equilibrium is',
            options: ['maximum', 'equal to the surface field', 'zero', 'undefined']
          },
          {
            label: 'Charging by induction produces charge that is',
            options: ['same sign as inducing charge', 'opposite sign to inducing charge', 'always positive', 'always negative']
          }
        ],
        correctAnswers: ['only on the outer surface', 'zero', 'opposite sign to inducing charge'],
        hint1: 'Charges repel — they spread as far apart as possible.',
        hint2: 'If E ≠ 0 inside, charges would move, contradicting equilibrium.',
        hint3: 'In induction, the grounding step drains away the same-sign charges.',
        explanation: 'Conductors in equilibrium have zero internal field and surface-only charge. Induction produces opposite-sign charge because grounding removes the same-sign charges.'
      }
    },
    {
      id: 'ec4-quiz',
      type: 'multiple-choice' as const,
      content: `
**Charging Methods Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A positively charged rod touches a neutral metal sphere. After separation, the sphere is:',
            options: [
              'Negative',
              'Positive',
              'Neutral',
              'Could be either sign'
            ],
            correctAnswer: 1,
            explanation: 'Charging by conduction (contact): charge flows from the rod to the sphere until they reach the same potential. The sphere ends up with the same sign as the rod — positive.'
          },
          {
            question: 'A negatively charged balloon sticks to a neutral wall. Why?',
            options: [
              'Charge leaks onto the wall, giving it a net positive charge',
              'Gravity and friction hold the balloon flat against the wall',
              'The balloon polarizes the wall, giving a net attraction',
              'Air pressure pushes the balloon flat against the wall'
            ],
            correctAnswer: 2,
            explanation: 'The charged balloon polarizes the neutral wall — positive charges in the wall shift closer to the balloon. Since these are nearer, the attractive force is stronger than the repulsive force, creating net attraction.'
          },
          {
            question: 'You bring a positive rod near a metal sphere, ground the sphere, then remove the ground, then remove the rod. The sphere is now:',
            options: [
              'Positive',
              'Negative',
              'Neutral',
              'Depends on the sphere size'
            ],
            correctAnswer: 1,
            explanation: 'Charging by induction: (1) Rod polarizes sphere — negative charges move toward rod. (2) Grounding drains positive charges away. (3) Remove ground — negative charges are trapped. (4) Remove rod — sphere is left with net negative charge.'
          },
          {
            question: 'Why is the electric field zero inside a conductor at electrostatic equilibrium?',
            options: [
              'Conductors absorb field energy before it can get inside',
              'Any field inside would push free charges until it was canceled',
              'A conductor holds no charge, so no field can exist in it',
              'Positive and negative charges cancel at every point inside'
            ],
            correctAnswer: 1,
            explanation: 'In a conductor, charges are free to move. If there were an internal field, charges would accelerate — but equilibrium means no motion. So E must be zero.'
          }
        ]
      }
    },
    {
      id: 'ec4-mistakes',
      type: 'multiple-choice' as const,
      content: `
**Before You Move On** — Conductor misconceptions.
      `,
      exercise: {
        questions: [
          {
            question: 'A student says: "A Faraday cage works because the metal absorbs all the electric field." Is this correct?',
            options: [
              'Yes — the metal soaks up the field energy and turns it into heat',
              'No — free charges shift and cancel the outside field inside',
              'Yes — any metal absorbs electric fields that strike its surface',
              'No — the cage blocks only magnetic fields, not electric ones'
            ],
            correctAnswer: 1,
            explanation: 'The metal doesn\'t "absorb" the field. Instead, free charges in the conductor redistribute themselves to create an opposing field that exactly cancels the external field inside. The result: E = 0 inside.'
          },
          {
            question: 'After charging by conduction, the charged rod has:',
            options: [
              'The same charge as before',
              'Less charge than before',
              'More charge, drawn from the sphere',
              'Zero charge — it all moves to the sphere'
            ],
            correctAnswer: 1,
            explanation: 'Conduction transfers charge from the rod to the sphere, so the rod keeps less charge than before (some transferred), but generally not zero: the charge is shared until both reach the same potential. Total charge is conserved — what the rod loses, the sphere gains.'
          }
        ]
      }
    }
  ]
}
