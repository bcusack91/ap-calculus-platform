export const physics2FluidDynamicsPart6Data = {
  topicSlug: 'fluid-dynamics-continuity',
  sections: [
    {
      id: 'fd6-intro',
      type: 'text' as const,
      content: `
# 🫀 Biological & Engineering Applications

**Part 6 of 7 — Continuity in the Real World**

The continuity equation isn't just a textbook formula — it governs blood flow in your body, water distribution in cities, and aerodynamics of aircraft.
      `
    },
    {
      id: 'fd6-circulatory',
      type: 'text' as const,
      content: `
## The Circulatory System

Your circulatory system is a masterpiece of fluid dynamics:

### The Numbers (Moderate Activity)

| Vessel | Radius | Total Area | Speed |
|:---:|:---:|:---:|:---:|
| Aorta | ~1.2 cm | ~4.5 cm² | ~40 cm/s |
| Arteries | ~2 mm | ~20 cm² | ~10 cm/s |
| Arterioles | ~30 μm | ~400 cm² | ~0.5 cm/s |
| Capillaries | ~4 μm | ~4000 cm² | ~0.05 cm/s |
| Venules | ~20 μm | ~500 cm² | ~0.3 cm/s |
| Veins | ~2.5 mm | ~40 cm² | ~5 cm/s |
| Vena cava | ~1.5 cm | ~7 cm² | ~25 cm/s |

### Continuity in Action

$Q = A_{\\text{aorta}} v_{\\text{aorta}} = A_{\\text{capillaries}} v_{\\text{capillaries}}$

$(4.5)(40) = 180$ and $(4000)(0.05) = 200$ — approximately equal ✓

Blood slows down dramatically in capillaries because the total cross-sectional area is ~1000× larger than the aorta. This slow speed allows time for gas exchange!
      `
    },
    {
      id: 'fd6-blood-quiz',
      type: 'multiple-choice' as const,
      content: `
**Circulatory System Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A patient has a partially blocked artery (50% reduction in cross-sectional area). The blood speed at the blockage is:',
            options: [
              'Half the normal speed',
              'The same as normal',
              'Double the normal speed',
              'Cannot be determined'
            ],
            correctAnswer: 2,
            explanation: '$A_1 v_1 = A_2 v_2$. If $A_2 = A_1/2$, then $v_2 = 2v_1$. The blood must speed up to maintain the same flow rate — this is why blockages are dangerous (high speed → turbulence → plaque damage).'
          },
          {
            question: 'The cardiac output (volume pumped per minute) of a healthy heart is about 5 L/min. If the aorta has radius 1.2 cm, the average blood speed in the aorta is approximately:',
            options: [
              '18 cm/s',
              '1.8 cm/s',
              '180 cm/s',
              '1800 cm/s'
            ],
            correctAnswer: 0,
            explanation: '$Q = 5$ L/min = $8.33 \times 10^{-5}$ m³/s. $A = \pi(0.012)^2 = 4.52 \times 10^{-4}$ m². $v = Q/A = 0.184$ m/s ≈ 18 cm/s. (This is the average resting value; speed is higher during exercise.)'
          }
        ]
      }
    },
    {
      id: 'fd6-engineering',
      type: 'text' as const,
      content: `
## Engineering Applications

### Water Distribution

A city water main (diameter 60 cm) supplies a neighborhood. Each house has a 2-cm diameter pipe.

If the main carries water at 1.5 m/s, how many houses can it supply at 0.5 m/s each?

$Q_{\\text{main}} = \\pi(0.30)^2(1.5) = 0.424$ m³/s

$Q_{\\text{house}} = \\pi(0.01)^2(0.5) = 1.57 \\times 10^{-4}$ m³/s

$N = Q_{\\text{main}}/Q_{\\text{house}} = 0.424/(1.57 \\times 10^{-4}) ≈ 2700$ houses

### Wind Tunnels

Wind tunnels use continuity to accelerate air. A large fan pushes air through a converging section:

- Wide section: 4 m × 4 m, air at 5 m/s
- Test section: 1 m × 1 m

$v_{\\text{test}} = (16/1)(5) = 80$ m/s — useful testing speed!

### Aircraft Engines

Jet engines take in air through a wide intake and accelerate it through progressively narrower compressor stages, reaching extreme speeds before combustion.
      `
    },
    {
      id: 'fd6-engineering-drill',
      type: 'input-boxes' as const,
      content: `
**Engineering Drill**

A sprinkler system has one main pipe (radius 2.0 cm, speed 3.0 m/s) that feeds 8 identical sprinkler heads.

1) Total flow rate in the main pipe (in L/s)
2) Flow rate per sprinkler (in L/s)
3) If each sprinkler head has radius 0.30 cm, the exit speed at each head (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3.77', '0.471', '16.7'],
        hint1: '$Q = \\pi r^2 v = \\pi(0.02)^2(3.0)$. Convert to L/s.',
        hint2: '$Q_{\\text{each}} = Q_{\\text{total}}/8$.',
        hint3: '$v = Q_{\\text{each}} / (\\pi r_{\\text{head}}^2)$. Watch units!',
        explanation: '$Q = \\pi(0.02)^2(3.0) = 3.77 \\times 10^{-3}$ m³/s = 3.77 L/s. Per head: $3.77/8 = 0.471$ L/s = $4.71 \\times 10^{-4}$ m³/s. $v = 4.71 \\times 10^{-4}/(\\pi(0.003)^2) = 16.7$ m/s.'
      }
    },
    {
      id: 'fd6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'An aneurysm is a bulge in a blood vessel (the vessel widens). Blood flow speed in the aneurysm region:',
            options: [
              'Increases (the bulge pushes blood faster)',
              'Decreases (larger area → slower speed by continuity)',
              'Stays the same',
              'Becomes zero'
            ],
            correctAnswer: 1,
            explanation: 'By continuity, a wider vessel means slower blood flow. Ironically, this slower flow can cause blood clots (stagnation), making aneurysms dangerous. The wall is also thinner and under more stress — risk of rupture.'
          }
        ]
      }
    }
  ]
}
