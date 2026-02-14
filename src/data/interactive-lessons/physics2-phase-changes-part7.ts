export const physics2PhaseChangesPart7Data = {
  topicSlug: 'phase-changes-latent-heat',
  sections: [
    {
      id: 'pc7-intro',
      type: 'text' as const,
      content: `
# 🎯 Synthesis & AP Review

**Part 7 of 7 — Putting It All Together**

This final part connects all the concepts from the topic and prepares you for AP-style questions. We'll review the concept map, address common mistakes, and work through mixed problems.
      `
    },
    {
      id: 'pc7-concept-map',
      type: 'text' as const,
      content: `
## Concept Map: Phase Changes & Latent Heat

### Core Equations

| Equation | When to Use |
|----------|-------------|
| $Q = mc\\Delta T$ | Temperature is changing (single phase) |
| $Q = mL$ | Phase is changing (constant temperature) |
| $\\sum Q_i = 0$ | Calorimetry (conservation of energy) |

### Key Values for Water

| Quantity | Symbol | Value |
|----------|--------|-------|
| Specific heat of ice | $c_{\\text{ice}}$ | $2{,}090$ J/(kg·°C) |
| Latent heat of fusion | $L_f$ | $334{,}000$ J/kg |
| Specific heat of water | $c_w$ | $4{,}186$ J/(kg·°C) |
| Latent heat of vaporization | $L_v$ | $2{,}260{,}000$ J/kg |
| Specific heat of steam | $c_{\\text{steam}}$ | $2{,}010$ J/(kg·°C) |

### Connections to Other Topics

- **Thermodynamics**: Phase changes involve internal energy changes at constant temperature
- **Kinetic Theory**: Temperature measures average KE; phase changes alter PE
- **Pressure**: Affects boiling/melting points (phase diagrams)
- **Ideal Gas Law**: Applies to the gas phase; breaks down near phase transitions
      `
    },
    {
      id: 'pc7-common-mistakes',
      type: 'multiple-choice' as const,
      content: `
**Common Mistakes Quiz** ⚠️

Identify the CORRECT statement in each question:
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about phase changes is CORRECT?',
            options: [
              'Temperature always increases when you add heat to a substance',
              'Boiling and evaporation are exactly the same process',
              'Temperature remains constant during a phase change because added energy goes into changing intermolecular potential energy',
              'The latent heat of fusion is always larger than the latent heat of vaporization'
            ],
            correctAnswer: 2,
            explanation: 'Common mistake: thinking temperature always rises with added heat. During a phase change, temperature stays constant — energy goes into breaking bonds (potential energy), not increasing kinetic energy. Also, $L_v > L_f$ always, and evaporation occurs at any temperature while boiling occurs only at the boiling point.'
          },
          {
            question: 'In a calorimetry problem, a student writes: "Energy from hot water = energy to melt ice." This setup is incomplete if:',
            options: [
              'The ice starts at 0°C',
              'The ice starts below 0°C, because heating the ice to 0°C must also be included',
              'The container is insulated',
              'The water starts above 100°C'
            ],
            correctAnswer: 1,
            explanation: 'If ice starts below 0°C, you must first include $Q = mc_{\\text{ice}}\\Delta T$ to bring it to 0°C before applying $Q = mL_f$ for melting. Forgetting this step is one of the most common AP errors.'
          }
        ]
      }
    },
    {
      id: 'pc7-mixed-problems',
      type: 'input-boxes' as const,
      content: `
**Mixed Problem Set** 🔢

Use: $c_w = 4{,}186$ J/(kg·°C), $c_{\\text{ice}} = 2{,}090$ J/(kg·°C), $L_f = 334{,}000$ J/kg, $L_v = 2{,}260{,}000$ J/kg.

1) How much energy (in kJ) is released when 0.500 kg of steam at 100°C condenses AND the resulting water cools to 40°C?

2) 0.050 kg of ice at $-10$°C is placed in 0.200 kg of water at 30°C. Find the final temperature (in °C, round to 1 decimal).

3) What mass of steam at 100°C must be condensed to provide enough energy to melt 2.00 kg of ice at 0°C? (in kg, round to 2 decimals)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1256', '7.0', '0.30', '7.00', '0.300', '0.3'],
        hint1: 'Condensation: $Q_1 = mL_v$. Cooling: $Q_2 = mc_w\\Delta T$. Sum and convert to kJ.',
        hint2: 'Check if all ice melts: compare energy available $= (0.200)(4186)(30)$ with energy needed $= (0.050)(2090)(10) + (0.050)(334{,}000)$. Then set $\\sum Q = 0$.',
        hint3: 'Steam condensing releases $mL_v$. Set equal to $(2.00)(334{,}000)$ and solve for $m$.',
        explanation: '1) $Q = mL_v + mc_w\\Delta T = (0.500)(2{,}260{,}000) + (0.500)(4{,}186)(60) = 1{,}130{,}000 + 125{,}580 = 1{,}255{,}580$ J ≈ **1256 kJ**. 2) Energy needed: $(0.050)(2090)(10) + (0.050)(334{,}000) = 1{,}045 + 16{,}700 = 17{,}745$ J. Available: $(0.200)(4186)(30) = 25{,}116$ J. All ice melts. Energy balance: $17{,}745 + (0.250)(4{,}186)T_f = 25{,}116$. $1{,}046.5 T_f = 7{,}371$. $T_f = 7.04$°C ≈ **7.0°C**. 3) $m L_v = M L_f$: $m(2{,}260{,}000) = (2.00)(334{,}000) = 668{,}000$. $m = 0.296$ kg ≈ **0.30 kg**.'
      }
    },
    {
      id: 'pc7-frq-preview',
      type: 'text' as const,
      content: `
## AP FRQ Preview

AP Physics 2 free-response questions on this topic typically ask you to:

### Common FRQ Formats

1. **Multi-step heating/cooling**: "Calculate the total energy to convert X kg of ice at $T_1$ to steam at $T_2$." You must identify all stages, write the equation for each, and sum them.

2. **Calorimetry with unknowns**: "Ice at 0°C is mixed with water at $T$. Find the final temperature." You must check whether the phase change completes before setting up the energy equation.

3. **Graphical analysis**: Given a heating curve, identify phases, phase changes, and calculate specific heats or latent heats from the graph data.

4. **Conceptual justification**: "Explain why steam at 100°C causes worse burns than water at 100°C." Reference latent heat of vaporization being released during condensation.

### Key Phrases for Full Credit

- "Energy is conserved in an isolated system"
- "During a phase change, temperature remains constant because energy changes intermolecular potential energy, not kinetic energy"
- "The latent heat of vaporization is much larger than the latent heat of fusion because vaporization requires completely separating molecules"
      `
    },
    {
      id: 'pc7-mastery-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Mastery Quiz** 🏆
      `,
      exercise: {
        questions: [
          {
            question: 'A student heats a substance at a constant rate and plots temperature vs. time. The graph shows a sloped region, then a flat region, then another sloped region with a gentler slope. The flat region represents:',
            options: [
              'The substance cooling down',
              'A phase change where the substance absorbs energy without temperature change',
              'The heater being turned off',
              'The substance reaching thermal equilibrium'
            ],
            correctAnswer: 1,
            explanation: 'The flat region on a heating curve is a phase change. Energy is being added (constant heating rate) but temperature stays constant — all energy goes into breaking intermolecular bonds. The gentler second slope indicates a higher specific heat capacity in the new phase.'
          },
          {
            question: 'Which requires more total energy: converting 1 kg of ice at 0°C to water at 100°C, or converting 1 kg of water at 100°C to steam at 100°C?',
            options: [
              'Ice at 0°C to water at 100°C (larger temperature change)',
              'Water at 100°C to steam at 100°C (latent heat of vaporization is huge)',
              'They require the same energy',
              'Cannot be determined without knowing the pressure'
            ],
            correctAnswer: 1,
            explanation: 'Ice → water at 100°C: $Q = mL_f + mc_w(100) = 334{,}000 + 418{,}600 = 752{,}600$ J. Water → steam: $Q = mL_v = 2{,}260{,}000$ J. Vaporization alone requires about 3× more energy than melting AND heating combined!'
          },
          {
            question: 'On a phase diagram, you increase the temperature of a substance at a pressure below the triple-point pressure. The substance will:',
            options: [
              'Melt, then boil',
              'Sublime directly from solid to gas',
              'Remain a solid at all temperatures',
              'Become a supercritical fluid'
            ],
            correctAnswer: 1,
            explanation: 'Below the triple-point pressure, the liquid phase does not exist. Heating a solid at this pressure causes sublimation — a direct transition from solid to gas, skipping the liquid phase entirely.'
          },
          {
            question: 'An insulated container holds 1.0 kg of water at 20°C. How much ice at 0°C must be added so the final temperature is exactly 0°C with no ice remaining?',
            options: [
              '$m = c_w(20)/(L_f) \\times 1.0$ kg ≈ 0.25 kg',
              '1.0 kg',
              '0.50 kg',
              '0.10 kg'
            ],
            correctAnswer: 0,
            explanation: 'Energy released by water cooling to 0°C: $Q = (1.0)(4{,}186)(20) = 83{,}720$ J. This must exactly melt mass $m$ of ice: $83{,}720 = m(334{,}000)$. $m = 83{,}720/334{,}000 = 0.2506$ kg ≈ 0.25 kg.'
          }
        ]
      }
    }
  ]
}
