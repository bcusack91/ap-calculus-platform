export const physics2BuoyancyPart3Data = {
  topicSlug: 'buoyancy-archimedes-principle',
  sections: [
    {
      id: 'bu3-intro',
      type: 'text' as const,
      content: `
# 🏗️ Apparent Weight & Submerged Objects

**Part 3 of 7 — Measuring Buoyancy in the Lab**

One of the most common AP Physics 2 lab setups involves weighing objects in air vs. in water. Let's master the analysis.
      `
    },
    {
      id: 'bu3-apparent-weight',
      type: 'text' as const,
      content: `
## Apparent Weight

When an object is submerged and hanging from a scale:

$$W_{\\text{apparent}} = W_{\\text{true}} - F_B$$

$$W_{\\text{app}} = mg - \\rho_{\\text{fluid}} V_{\\text{obj}} g$$

### Free-Body Diagram

For a submerged object hanging from a string:
- **Tension** $T$ (upward) = what the scale reads = apparent weight
- **Buoyant force** $F_B$ (upward)
- **Weight** $W$ (downward)

Equilibrium: $T + F_B = W \\implies T = W - F_B$

### Measuring Density

You can find an object's density by weighing it in air and in water:

$$\\rho_{\\text{obj}} = \\frac{W_{\\text{air}}}{W_{\\text{air}} - W_{\\text{water}}} \\times \\rho_{\\text{water}}$$

This works because $W_{\\text{air}} - W_{\\text{water}} = F_B = \\rho_w V g$, and $W_{\\text{air}} = \\rho_{\\text{obj}} V g$.
      `
    },
    {
      id: 'bu3-lab-drill',
      type: 'input-boxes' as const,
      content: `
**Lab Analysis Drill** (use $g = 10$ m/s², $\\rho_{\\text{water}} = 1000$ kg/m³)

A metal block weighs 45 N in air and 35 N when fully submerged in water.

1) Buoyant force on the block (in N)

2) Volume of the block (in m³)

3) Density of the block (in kg/m³)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '0.001', '4500'],
        hint1: '$F_B = W_{\\text{air}} - W_{\\text{water}} = 45 - 35$.',
        hint2: '$F_B = \\rho_w V g$. So $V = F_B / (\\rho_w g) = 10/(1000 \\times 10)$.',
        hint3: '$m = W/g = 45/10 = 4.5$ kg. $\\rho = m/V = 4.5/0.001$.',
        explanation: '$F_B = 10$ N. $V = 10/(1000 \\times 10) = 0.001$ m³. $\\rho = 4.5/0.001 = 4500$ kg/m³ (close to titanium).'
      }
    },
    {
      id: 'bu3-sinking-analysis',
      type: 'text' as const,
      content: `
## Sinking Objects: Net Force Analysis

For an object that sinks (but hasn't reached the bottom yet), the net downward force is:

$$F_{\\text{net}} = W - F_B = (\\rho_{\\text{obj}} - \\rho_{\\text{fluid}}) V g$$

The acceleration is:

$$a = \\frac{F_{\\text{net}}}{m} = \\left(1 - \\frac{\\rho_{\\text{fluid}}}{\\rho_{\\text{obj}}}\\right)g$$

### Example

An iron ball ($\\rho = 7800$ kg/m³) sinks in water. Its initial acceleration (ignoring drag):

$$a = \\left(1 - \\frac{1000}{7800}\\right)(10) = (1 - 0.128)(10) = 8.72 \\text{ m/s}^2$$

That's only slightly less than free fall! Iron is so much denser than water that buoyancy barely slows it.

But for an object with $\\rho = 1200$ kg/m³:

$$a = \\left(1 - \\frac{1000}{1200}\\right)(10) = (0.167)(10) = 1.67 \\text{ m/s}^2$$

Much slower — buoyancy is providing significant support.
      `
    },
    {
      id: 'bu3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'You weigh a block in three different liquids. In which liquid does the scale read the LOWEST?',
            options: [
              'Alcohol (ρ = 800 kg/m³)',
              'Water (ρ = 1000 kg/m³)',
              'Mercury (ρ = 13,600 kg/m³)',
              'All read the same'
            ],
            correctAnswer: 2,
            explanation: 'Higher fluid density → larger buoyant force → lower apparent weight. Mercury has the highest density, so the buoyant force is greatest, and the scale reading is lowest.'
          },
          {
            question: 'An object has density exactly equal to the fluid. If you push it down and release it:',
            options: [
              'It returns to the surface',
              'It sinks to the bottom',
              'It stays wherever you put it (neutral buoyancy)',
              'It oscillates up and down'
            ],
            correctAnswer: 2,
            explanation: 'At every depth, $F_B = W$ when $\\rho_{\\text{obj}} = \\rho_{\\text{fluid}}$. There\'s no net force at any position — it stays wherever you leave it. This is neutral buoyancy.'
          }
        ]
      }
    },
    {
      id: 'bu3-crown-problem',
      type: 'text' as const,
      content: `
## The King's Crown Problem (Archimedes' Original!)

**Story:** King Hiero II gave a goldsmith pure gold to make a crown. The king suspected the goldsmith mixed in cheaper silver. Archimedes was asked to determine if the crown was pure gold *without damaging it*.

**Solution:** Weigh the crown in air: $W_{\\text{air}} = 25.0$ N. Weigh it in water: $W_{\\text{water}} = 22.6$ N.

$F_B = 25.0 - 22.6 = 2.4$ N

$V = F_B/(\\rho_w g) = 2.4/(1000 \\times 10) = 2.4 \\times 10^{-4}$ m³

$\\rho = m/V = 2.5 / (2.4 \\times 10^{-4}) = 10{,}417$ kg/m³

**Verdict:** Pure gold has $\\rho = 19{,}300$ kg/m³. This crown has $\\rho \\approx 10{,}400$ kg/m³ — the goldsmith was a fraud! (The crown was likely a gold-silver alloy.)
      `
    },
    {
      id: 'bu3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A crown weighs 7.84 N in air and 7.34 N in water. Its density is approximately:',
            options: [
              '19,300 kg/m³ (pure gold)',
              '15,700 kg/m³ (gold-silver mix)',
              '10,500 kg/m³ (silver)',
              '7,800 kg/m³ (iron)'
            ],
            correctAnswer: 1,
            explanation: '$F_B = 0.50$ N. $V = 0.50/10{,}000 = 5 \\times 10^{-5}$ m³. $m = 0.784$ kg. $\\rho = 0.784/(5 \\times 10^{-5}) = 15{,}680 \\approx 15{,}700$ kg/m³. Not pure gold, not pure silver — a mix.'
          },
          {
            question: 'Two objects are fully submerged in water: a 1 kg block of aluminum and a 1 kg block of lead. Which has a greater buoyant force?',
            options: [
              'Lead (it\'s heavier)',
              'Aluminum (it has more volume)',
              'They\'re equal (same mass)',
              'Cannot determine'
            ],
            correctAnswer: 1,
            explanation: '$F_B = \\rho_w V g$. Aluminum is less dense than lead, so 1 kg of aluminum has *more volume* → displaces more water → greater buoyant force. Same mass, but the aluminum block is physically larger.'
          }
        ]
      }
    }
  ]
}
