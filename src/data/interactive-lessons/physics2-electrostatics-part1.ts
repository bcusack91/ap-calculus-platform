export const physics2ElectrostaticsPart1Data = {
  topicSlug: 'electric-charge-coulombs-law',
  sections: [
    {
      id: 'ec-intro',
      type: 'text' as const,
      content: `
# ⚡ Electric Charge & Coulomb's Law

**Part 1 of 7**

Everything in electrostatics starts with one idea: **matter carries electric charge**, and charges exert forces on each other.

In this part you'll learn:
- What electric charge actually is
- The two types of charge and how they interact
- Why charge is always conserved
- The fundamental unit of charge

By the end, you'll have the vocabulary and intuition for the rest of electrostatics.
      `
    },
    {
      id: 'ec-what-is-charge',
      type: 'text' as const,
      content: `
## What Is Electric Charge?

Electric charge is a **fundamental property of matter** — just like mass, but for electromagnetic interactions.

### Two Types of Charge

- **Positive (+)**: carried by protons
- **Negative (−)**: carried by electrons

### Key Facts

| Property | Value |
|----------|-------|
| Electron charge | $e = 1.6 \\times 10^{-19}$ C |
| Proton charge | $+e = 1.6 \\times 10^{-19}$ C |
| Neutron charge | 0 |
| SI unit | Coulomb (C) |

One coulomb is an **enormous** amount of charge. A typical static shock involves only about $10^{-6}$ C (a microcoulomb).

### The Interaction Rules

> **Like charges repel. Opposite charges attract.**

This is the single most important rule in electrostatics. Every force, every field, every circuit behavior traces back to this.
      `
    },
    {
      id: 'ec-conservation',
      type: 'text' as const,
      content: `
## Conservation & Quantization of Charge

### Conservation of Charge

Charge is **never created or destroyed** — it can only be **transferred** from one object to another.

When you rub a balloon on your hair:
- Electrons transfer from hair → balloon
- Balloon becomes negative, hair becomes positive
- **Total charge of the system is unchanged**

$$q_{\\text{total, before}} = q_{\\text{total, after}}$$

### Quantization of Charge

Charge comes in discrete packets. You can't have half an electron!

$$q = ne$$

where $n$ is an integer and $e = 1.6 \\times 10^{-19}$ C.

This means any charged object has a charge that's a whole-number multiple of $e$.
      `
    },
    {
      id: 'ec-real-world',
      type: 'text' as const,
      content: `
## Why Does This Matter?

Electrostatics isn't just theory — it's everywhere:

🖨️ **Laser printers** — use static charge to attract toner to paper in precise patterns

⚡ **Lightning** — massive charge separation in clouds, then sudden discharge

🚗 **Spray painting** — charged paint droplets are attracted to grounded car bodies for even coating

🧪 **Particle accelerators** — use electric forces to accelerate charged particles to near light speed

📱 **Touchscreens** — detect changes in electric field when your charged finger approaches

Every one of these applications relies on the same simple rule: charges exert forces on each other.
      `
    },
    {
      id: 'ec-check-1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** — Charge basics.
      `,
      exercise: {
        questions: [
          {
            question: 'What is the SI unit of electric charge?',
            options: [
              'Ampere (A)',
              'Volt (V)',
              'Coulomb (C)',
              'Newton (N)'
            ],
            correctAnswer: 2,
            explanation: 'The coulomb (C) is the SI unit of charge. An ampere is current (charge per second), a volt is potential, and a newton is force.'
          },
          {
            question: 'A neutral atom has 8 protons. How many electrons does it have?',
            options: ['0', '4', '8', '16'],
            correctAnswer: 2,
            explanation: 'A neutral atom has equal numbers of protons and electrons, so 8 protons means 8 electrons.'
          },
          {
            question: 'You rub a glass rod with silk and the rod becomes positive. What happened?',
            options: [
              'Protons were added to the rod',
              'Electrons transferred from the rod to the silk',
              'Neutrons were removed from the rod',
              'Charge was created on the rod'
            ],
            correctAnswer: 1,
            explanation: 'Charging by friction transfers electrons. The rod lost electrons to the silk, leaving the rod with a net positive charge. Charge was transferred, not created.'
          },
          {
            question: 'Can an object have a charge of $2.4 \\times 10^{-19}$ C?',
            options: [
              'Yes — any charge value is allowed',
              'No — charge is quantized in multiples of e',
              'Yes, but only for protons',
              'No — that value is too small to measure'
            ],
            correctAnswer: 1,
            explanation: 'Charge must be a whole-number multiple of e = 1.6 × 10⁻¹⁹ C. Since 2.4/1.6 = 1.5, which is not an integer, this charge is impossible.'
          }
        ]
      }
    },
    {
      id: 'ec-before-you-go',
      type: 'multiple-choice' as const,
      content: `
**Before You Move On** — Two common misconceptions about charge.
      `,
      exercise: {
        questions: [
          {
            question: 'True or false: "When you charge a balloon by rubbing, you create new charge."',
            options: [
              'True — friction creates charge',
              'False — charge is transferred, not created',
              'True, but only negative charge is created',
              'It depends on the materials'
            ],
            correctAnswer: 1,
            explanation: 'Conservation of charge! Rubbing transfers electrons between objects. The total charge of the system remains zero — no charge is ever created or destroyed.'
          },
          {
            question: 'A student says protons move from one object to another during charging. Is this correct for solids?',
            options: [
              'Yes — protons are lighter and move easily',
              'No — in solids, protons are locked in nuclei; only electrons transfer',
              'Yes — both protons and electrons move',
              'Neither protons nor electrons move'
            ],
            correctAnswer: 1,
            explanation: 'In solid materials, protons are tightly bound in atomic nuclei. Charging occurs by transfer of electrons, which are in the outer shells and can move between atoms.'
          }
        ]
      }
    }
  ]
}
