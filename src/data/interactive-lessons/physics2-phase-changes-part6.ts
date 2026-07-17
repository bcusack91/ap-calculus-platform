export const physics2PhaseChangesPart6Data = {
  topicSlug: 'phase-changes-latent-heat',
  sections: [
    {
      id: 'pc6-intro',
      type: 'text' as const,
      content: `
# 🌍 Real-World Applications of Phase Changes

**Part 6 of 7 — Physics in Everyday Life**

Phase changes and latent heat are not just textbook concepts — they explain a huge number of everyday phenomena. Understanding the physics behind these applications deepens your intuition and prepares you for AP conceptual questions.
      `
    },
    {
      id: 'pc6-evaporative-cooling',
      type: 'text' as const,
      content: `
## Evaporative Cooling

### Why You Feel Cold After Swimming

When you step out of a pool, water on your skin **evaporates** (vaporizes). The latent heat of vaporization ($L_v = 2{,}260{,}000$ J/kg) must come from somewhere — it comes from **your body and the water itself**, cooling you down.

### Sweating

Your body's primary cooling mechanism: sweat glands produce water on the skin surface. As it evaporates, it absorbs $\\sim 2.26$ MJ per kg of sweat — a remarkably efficient cooling system!

On a humid day, evaporation is slower (air is already saturated with water vapor), so cooling is less effective → you feel hotter.

### Dogs Panting

Dogs don't sweat through skin. Instead, they pant — rapidly breathing over their wet tongue and respiratory tract. Evaporation from these moist surfaces provides cooling.

### Desert Water Bags

Canvas water bags hung on the front of old cars: water seeps through the canvas and evaporates, cooling the remaining water inside. The same principle is behind clay pot coolers used in hot, dry climates.
      `
    },
    {
      id: 'pc6-evaporative-quiz',
      type: 'multiple-choice' as const,
      content: `
**Evaporative Cooling Check** 💧
      `,
      exercise: {
        questions: [
          {
            question: 'Why is a burn from 100°C steam more severe than a burn from 100°C boiling water?',
            options: [
              'Steam is at a higher temperature',
              'Steam moves faster and hits the skin harder',
              'Steam releases its latent heat of vaporization (2.26 MJ/kg) when it condenses on skin, in addition to cooling from 100°C',
              'Steam contains more molecules per unit volume'
            ],
            correctAnswer: 2,
            explanation: 'When steam contacts your skin, it first condenses — releasing $L_v = 2.26$ MJ/kg (a huge amount of energy). Then the resulting 100°C water continues to transfer heat as it cools. Boiling water only does the second part. The condensation step delivers about 8.6× more energy than cooling the water from 100°C to 37°C body temperature.'
          },
          {
            question: 'On a very humid day, evaporative cooling is less effective because:',
            options: [
              'Water has a higher specific heat on humid days',
              'The air is already nearly saturated with water vapor, slowing evaporation',
              'Humidity increases the boiling point of sweat',
              'Water molecules are heavier in humid air'
            ],
            correctAnswer: 1,
            explanation: 'Evaporation rate depends on how far the air is from saturation. On humid days, the air already holds a lot of water vapor, so the net evaporation rate decreases. Less evaporation → less cooling.'
          }
        ]
      }
    },
    {
      id: 'pc6-applications',
      type: 'text' as const,
      content: `
## More Applications

### Pressure Cookers
A sealed pot increases the pressure above the water → the boiling point rises above 100°C (to about 120°C at 2 atm). Food cooks faster because the water is hotter while still liquid.

$$\\text{Higher pressure} \\rightarrow \\text{Higher boiling point} \\rightarrow \\text{Faster cooking}$$

### Freeze-Drying (Lyophilization)
Food is frozen, then placed under very low pressure (below the triple point). Ice **sublimates** directly to vapor without passing through the liquid phase. This preserves the food's structure — the food doesn't get soggy.

Used for: astronaut food, instant coffee, pharmaceutical drugs, biological samples.

### Ice Skating
The pressure under the narrow blade may slightly lower ice's melting point (water's unusual negative-slope fusion curve). A thin layer of liquid water forms under the blade, reducing friction. (The full explanation also involves surface melting and friction heating.)

### Salt on Icy Roads
Salt lowers the freezing point of water (colligative property). Ice at $-5$°C in contact with salt forms a brine solution that has a freezing point below $-5$°C, so the ice melts. This is effective down to about $-18$°C for NaCl.
      `
    },
    {
      id: 'pc6-applications-quiz',
      type: 'multiple-choice' as const,
      content: `
**Applications Quiz** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'In freeze-drying, food is preserved by:',
            options: [
              'Boiling water out of the food at high temperature',
              'Sublimating ice directly to vapor under low pressure',
              'Compressing the food to squeeze out water',
              'Heating the food above the critical temperature'
            ],
            correctAnswer: 1,
            explanation: 'Freeze-drying works by reducing pressure below the triple point, so ice sublimates directly to vapor. This removes water without the food ever becoming wet (liquid phase is bypassed), preserving the cellular structure.'
          },
          {
            question: 'A pressure cooker cooks food faster because:',
            options: [
              'Higher pressure forces heat into the food',
              'The sealed environment traps steam, raising pressure and thus the boiling point of water',
              'Food molecules move faster at higher pressure',
              'The metal pot conducts heat better under pressure'
            ],
            correctAnswer: 1,
            explanation: 'In a sealed pressure cooker, steam builds up, raising the pressure inside. Higher pressure raises the boiling point of water — typically to about 120°C at 2 atm. The water stays liquid at higher temperatures, cooking food faster.'
          }
        ]
      }
    },
    {
      id: 'pc6-concept-drill',
      type: 'dropdown-select' as const,
      content: `
**Application Identification** 🎯

Match each phenomenon with its primary physics principle:
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Stepping out of a pool and feeling cold',
            options: ['Conduction', 'Evaporative cooling (latent heat of vaporization)', 'Radiation', 'Convection']
          },
          {
            label: 'Water boiling at 70°C on Mount Everest',
            options: ['Lower latent heat at altitude', 'Lower atmospheric pressure reduces the boiling point', 'Colder air at altitude', 'Wind chill effect']
          },
          {
            label: 'Frost forming on a car windshield overnight',
            options: ['Condensation', 'Freezing', 'Deposition (gas → solid)', 'Sublimation']
          },
          {
            label: 'Dry ice "smoking" at room temperature',
            options: ['Melting and then boiling', 'Sublimation (solid → gas)', 'Combustion', 'Deposition']
          }
        ],
        correctAnswers: [
          'Evaporative cooling (latent heat of vaporization)',
          'Lower atmospheric pressure reduces the boiling point',
          'Deposition (gas → solid)',
          'Sublimation (solid → gas)'
        ],
        hint1: 'Water evaporating from skin absorbs latent heat from your body.',
        hint2: 'Boiling occurs when vapor pressure equals external pressure. Less external pressure → lower boiling point.',
        hint3: 'Frost forms when water vapor goes directly to ice crystals. Dry ice goes directly from solid to gas.',
        explanation: 'Pool chill = evaporative cooling. High-altitude boiling = lower atmospheric pressure. Frost = deposition. Dry ice = sublimation (its triple point is above 1 atm, so liquid $CO_{2}$ cannot exist at atmospheric pressure).'
      }
    }
  ]
}
