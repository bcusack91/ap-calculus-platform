export const physics2BuoyancyPart7Data = {
  topicSlug: 'buoyancy-archimedes-principle',
  sections: [
    {
      id: 'bu7-intro',
      type: 'text' as const,
      content: `
# 🎯 Buoyancy Synthesis & AP Review

**Part 7 of 7 — Putting It All Together**

This final part consolidates everything: concept maps, common mistakes, mixed problems, and exam-style questions.
      `
    },
    {
      id: 'bu7-concept-map',
      type: 'text' as const,
      content: `
## Complete Buoyancy Concept Map

$$F_B = \\rho_{\\text{fluid}} \\cdot V_{\\text{displaced}} \\cdot g$$

### Decision Tree

1. **Is the object fully submerged?**
   - Yes → $V_{\\text{disp}} = V_{\\text{obj}}$
   - No (floating) → $V_{\\text{disp}} < V_{\\text{obj}}$

2. **Is the object floating?**
   - Yes → $F_B = W$ → use fraction submerged formula
   - No → $F_B < W$ (sinking) or $F_B = W$ (neutrally buoyant while submerged)

3. **Are there other forces?**
   - String from above: $T + F_B = W$
   - String from below: $F_B = W + T$
   - Normal force (sitting on bottom): $N + F_B = W$ → only if $W > F_B$ (object denser than fluid)

### Top 5 AP Mistakes

| # | Mistake | Correction |
|:---:|:---:|:---:|
| 1 | Using object's density in $F_B$ | Use the **fluid's** density! |
| 2 | Saying $F_B$ depends on depth | $F_B$ depends on $V_{\\text{disp}}$, not depth (for fully submerged objects) |
| 3 | Forgetting $V_{\\text{disp}} \\neq V_{\\text{obj}}$ for floating objects | Floating: $V_{\\text{disp}} = (\\rho_{\\text{obj}}/\\rho_{\\text{fluid}}) V$ |
| 4 | Confusing "weight" and "mass" in problems | Weight displaced (force) vs. mass displaced — keep units straight |
| 5 | Ice melting: "water level rises" | Ice in water: level stays same. Ice with embedded stone: level drops when stone sinks |
      `
    },
    {
      id: 'bu7-tricky-quiz',
      type: 'multiple-choice' as const,
      content: `
**AP Tricky Questions**
      `,
      exercise: {
        questions: [
          {
            question: 'A sealed, air-filled container sits at the bottom of a pool. The buoyant force on it is 100 N and its weight is 40 N. The normal force from the pool floor on the container is:',
            options: [
              '140 N (downward)',
              '60 N (downward)',
              '0 N',
              'The container can\'t sit on the bottom if $F_B > W$'
            ],
            correctAnswer: 3,
            explanation: 'If $F_B > W$, the container would float up! It cannot sit on the bottom unless held down. The normal force cannot pull downward. This is a trick — the scenario is physically impossible without the container being anchored.'
          },
          {
            question: 'A cube of ice ($\\rho = 917$ kg/m³) floats in a glass of water. As the ice melts, the water level:',
            options: [
              'Rises (liquid water takes more space)',
              'Falls (ice is less dense)',
              'Stays exactly the same',
              'Oscillates'
            ],
            correctAnswer: 2,
            explanation: 'The ice displaces water equal to its *weight*. When it melts, the liquid water has the same mass and takes up exactly the same volume as the water that was being displaced. Level stays the same. (This assumes pure water ice in pure water.)'
          },
          {
            question: 'Two beakers sit on a balance: one has a floating block of wood, the other has an equal volume of water (no block). Which side is heavier?',
            options: [
              'The side with the wood',
              'The side without the wood',
              'They are equal — the water was displaced',
              'Cannot determine'
            ],
            correctAnswer: 0,
            explanation: 'Both beakers start with the same volume of water, but the wood beaker also contains the wood block. The floating wood adds extra mass on top of the same amount of water, so the beaker with the floating block is heavier.'
          }
        ]
      }
    },
    {
      id: 'bu7-mixed-drill',
      type: 'input-boxes' as const,
      content: `
**Mixed Problem Drill** (use $g = 10$ m/s², $\\rho_w = 1000$ kg/m³)

An object has mass 2.0 kg and volume $8.0 \\times 10^{-4}$ m³.

1) Density of the object (in kg/m³)

2) Will it sink or float in water? (type "sink" or "float")

3) Its apparent weight when fully submerged in water (in N)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2500', 'sink', '12'],
        hint1: '$\\rho = m/V = 2.0 / (8.0 \\times 10^{-4})$.',
        hint2: 'Compare $\\rho_{\\text{obj}}$ to $\\rho_w$. If $\\rho_{\\text{obj}} > \\rho_w$, it sinks.',
        hint3: '$W_{\\text{app}} = W - F_B = mg - \\rho_w V g = (2.0)(10) - (1000)(8 \\times 10^{-4})(10)$.',
        explanation: '$\\rho = 2500$ kg/m³ (like glass). Since $2500 > 1000$, it sinks. $W_{\\text{app}} = 20 - 8 = 12$ N.'
      }
    },
    {
      id: 'bu7-frq-practice',
      type: 'text' as const,
      content: `
## AP-Style FRQ Practice

### Problem Setup

A cylindrical cup (mass 0.15 kg, outer radius 4.0 cm, height 10.0 cm) floats upright in water. Small lead pellets are gradually added to the cup.

**(a)** With no pellets, how deep does the cup float?

$V_{\\text{sub}} = m/\\rho_w = 0.15/1000 = 1.5 \\times 10^{-4}$ m³

$V_{\\text{sub}} = \\pi r^2 d$ → $d = V/(\\pi r^2) = 1.5 \\times 10^{-4}/(\\pi (0.04)^2) = 0.030$ m = **3.0 cm**

**(b)** What mass of pellets makes the cup sink to 8.0 cm?

$V_{\\text{sub}} = \\pi (0.04)^2 (0.08) = 4.02 \\times 10^{-4}$ m³

$m_{\\text{total}} = \\rho_w V_{\\text{sub}} = 1000 \\times 4.02 \\times 10^{-4} = 0.402$ kg

$m_{\\text{pellets}} = 0.402 - 0.15 = 0.252$ kg ≈ **0.25 kg**

**(c)** At what pellet mass does the cup just go under?

$V_{\\text{max}} = \\pi (0.04)^2 (0.10) = 5.03 \\times 10^{-4}$ m³

$m_{\\text{max}} = 1000 \\times 5.03 \\times 10^{-4} = 0.503$ kg

$m_{\\text{pellets,max}} = 0.503 - 0.15 = 0.353$ kg ≈ **0.35 kg**

Beyond this mass, water floods the top and the cup sinks rapidly!
      `
    },
    {
      id: 'bu7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'An astronaut is in the International Space Station with a glass of water and an ice cube. She releases the ice cube into the water in microgravity. What happens?',
            options: [
              'The ice floats as usual',
              'The ice sinks (no buoyancy without gravity)',
              'The ice stays wherever she puts it — buoyancy requires gravity and there\'s no buoyant force in free fall',
              'The water freezes around the ice'
            ],
            correctAnswer: 2,
            explanation: 'Buoyancy arises from the *pressure difference* caused by gravity. In free fall (microgravity), there\'s no pressure gradient in the fluid → no buoyant force → the ice stays put. In fact, the water itself forms spheres due to surface tension!'
          },
          {
            question: 'Which of the following changes would NOT affect the buoyant force on a fully submerged object?',
            options: [
              'Changing the fluid density',
              'Changing the object\'s volume',
              'Changing the object\'s mass (same volume)',
              'Moving to a planet with different g'
            ],
            correctAnswer: 2,
            explanation: '$F_B = \\rho_{\\text{fluid}} V_{\\text{obj}} g$. The object\'s mass doesn\'t appear! Changing $\\rho_{\\text{fluid}}$, $V$, or $g$ all affect $F_B$, but changing the object\'s mass (while keeping volume the same) has zero effect on buoyant force.'
          }
        ]
      }
    }
  ]
}
