export const physics2BuoyancyPart6Data = {
  topicSlug: 'buoyancy-archimedes-principle',
  sections: [
    {
      id: 'bu6-intro',
      type: 'text' as const,
      content: `
# 🎈 Buoyancy in Gases & Real-World Applications

**Part 6 of 7 — Beyond Liquids**

Archimedes' Principle applies to **all fluids** — including gases. Hot air balloons, helium balloons, and even the atmosphere itself rely on the same physics.
      `
    },
    {
      id: 'bu6-gas-buoyancy',
      type: 'text' as const,
      content: `
## Buoyancy in Air

The atmosphere is a fluid! Every object in air experiences a buoyant force:

$$F_{B,\\text{air}} = \\rho_{\\text{air}} V_{\\text{obj}} g$$

With $\\rho_{\\text{air}} \\approx 1.2$ $kg/m^{3}$ at sea level.

### Why We Usually Ignore It

For most solid objects, air buoyancy is negligible:

- 1 kg iron block: $V \\approx 1.3 \\times 10^{-4}$ $m^{3}$ → $F_B \\approx 0.0016$ N (0.016% of weight)
- 1 kg wood: $V \\approx 1.4 \\times 10^{-3}$ $m^{3}$ → $F_B \\approx 0.017$ N (0.17% of weight)

But for **large, low-density objects**, it matters!

### Hot Air Balloons

A hot air balloon works by heating air inside the envelope, reducing its density:

$$F_B = \\rho_{\\text{cold air}} V g, \\quad W = \\rho_{\\text{hot air}} V g + W_{\\text{basket}}$$

The balloon rises when $\\rho_{\\text{cold}} V > \\rho_{\\text{hot}} V + m_{\\text{basket}}$.

### Helium Balloons

$\\rho_{\\text{He}} \\approx 0.16$ $kg/m^{3}$ vs. $\\rho_{\\text{air}} \\approx 1.2$ $kg/m^{3}$

Lift per $m^{3}$: $(1.2 - 0.16)(10) \\approx 10.4$ $N/m^{3}$

A 1 $m^{3}$ helium balloon can lift about 1 kg!
      `
    },
    {
      id: 'bu6-gas-quiz',
      type: 'multiple-choice' as const,
      content: `
**Gas Buoyancy Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A precision scale reads slightly different for the same object at sea level vs. on a high mountain. One reason is:',
            options: [
              'Gravity changes with altitude',
              'Air buoyancy decreases at altitude (less dense air → less buoyant force → higher reading)',
              'Temperature affects the scale',
              'Both A and B contribute'
            ],
            correctAnswer: 3,
            explanation: 'Both effects are real! Gravity decreases slightly with altitude (lower reading), while decreased air buoyancy (thinner air) increases the apparent weight (higher reading). For precision measurements, both corrections are applied.'
          },
          {
            question: 'A weather balloon rises. As it goes higher, the buoyant force:',
            options: [
              'Increases (balloon expands)',
              'Decreases (air density drops)',
              'Stays constant',
              'First increases, then decreases — it\'s complex!'
            ],
            correctAnswer: 3,
            explanation: 'Two competing effects: the balloon expands (increasing $V$), but air density $\\rho$ decreases. The net buoyant force depends on which effect dominates. Initially buoyancy can increase, but eventually the air becomes too thin — this is why weather balloons burst at high altitude.'
          }
        ]
      }
    },
    {
      id: 'bu6-applications',
      type: 'text' as const,
      content: `
## Real-World Buoyancy Applications

### 🐟 Fish Swim Bladders

Fish control their depth by adjusting their swim bladder volume:
- **To rise:** Expand the bladder → more volume → lower average density → net upward force
- **To dive:** Compress the bladder → less volume → higher average density → net downward force
- **To hover:** Adjust until $\\rho_{\\text{fish}} = \\rho_{\\text{water}}$ → neutral buoyancy

### 🤿 Scuba Diving

Divers use a BCD (buoyancy control device):
- At depth, the wetsuit and BCD compress → volume decreases → density increases → tendency to sink
- Divers add air to the BCD to compensate
- On ascent, they must vent air as the BCD expands

### 🚢 Plimsoll Lines on Ships

Ships have markings showing the safe waterline in different conditions:
- **Freshwater:** Ship sits lower (less dense → displaces more volume)
- **Saltwater (tropical):** Ship sits higher (saltwater is denser than freshwater)
- **Saltwater (winter):** Ship sits highest (densest water)

### ⚗️ Hydrometers

A hydrometer is a floating device that measures liquid density:
- It floats higher in denser liquids
- The scale reads density directly where the liquid surface crosses the stem
- Used to check battery acid, wine fermentation, antifreeze
      `
    },
    {
      id: 'bu6-app-drill',
      type: 'input-boxes' as const,
      content: `
**Application Problems** (use $g = 10$ $m/s^{2}$)

A helium balloon has volume 0.50 $m^{3}$. The envelope + string mass is 0.010 kg.
$\\rho_{\\text{air}} = 1.2$ $kg/m^{3}$, $\\rho_{\\text{He}} = 0.16$ $kg/m^{3}$.

1) Buoyant force on the balloon (in N)

2) Total weight (helium + envelope) (in N)

3) Maximum payload mass it can lift (in kg)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '0.9', '0.51'],
        hint1: '$F_B = \\rho_{\\text{air}} V g = (1.2)(0.50)(10)$.',
        hint2: '$W = (m_{\\text{He}} + m_{\\text{envelope}})g = (\\rho_{\\text{He}} V + 0.010)(10)$.',
        hint3: 'Net lift = $F_B - W_{\\text{total}}$. Max payload mass = net lift / $g$.',
        explanation: '$F_B = 6.0$ N. $m_{\\text{He}} = 0.16 \\times 0.50 = 0.08$ kg. $W = (0.08 + 0.01)(10) = 0.9$ N. Net lift = $6.0 - 0.9 = 5.1$ N. Payload = $5.1/10 = 0.51$ kg.'
      }
    },
    {
      id: 'bu6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A ship moves from the ocean (salt water, $\\rho = 1025$ $kg/m^{3}$) into a freshwater river ($\\rho = 1000$). The ship:',
            options: [
              'Rises higher in the water',
              'Sinks lower in the water',
              'Stays at the same level',
              'Tips over'
            ],
            correctAnswer: 1,
            explanation: 'The ship\'s weight is unchanged, so it must displace the *same weight* of water. Freshwater is less dense, so the ship must displace *more volume* → it sits lower. $V_{\\text{sub}} = m_{\\text{ship}}/\\rho_{\\text{fluid}}$ increases when $\\rho$ decreases.'
          },
          {
            question: 'A diver at 30 m depth releases a small air bubble. As the bubble rises, its buoyant force:',
            options: [
              'Stays constant (same mass of air)',
              'Increases (bubble expands as pressure decreases)',
              'Decreases (farther from the bottom)',
              'Decreases then increases'
            ],
            correctAnswer: 1,
            explanation: 'As the bubble rises, water pressure decreases → the bubble expands (Boyle\'s Law: $PV = $ const). Larger volume → more displaced water → greater buoyant force. The bubble actually accelerates as it rises!'
          }
        ]
      }
    }
  ]
}
