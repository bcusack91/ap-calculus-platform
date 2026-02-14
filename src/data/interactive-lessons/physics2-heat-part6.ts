export const physics2HeatPart6Data = {
  topicSlug: 'heat-specific-heat',
  sections: [
    {
      id: 'ht6-intro',
      type: 'text' as const,
      content: `
# 🌍 Applications & Real-World Heat Transfer

**Part 6 of 7 — Physics in Everyday Life**

The principles of heat transfer are at work everywhere — in your kitchen, your house, and across the entire planet. Understanding these applications solidifies your physics intuition and shows up frequently on the AP exam as conceptual questions.
      `
    },
    {
      id: 'ht6-thermos',
      type: 'text' as const,
      content: `
## The Thermos (Vacuum Flask) — Engineering Perfection

A thermos is brilliantly designed to block ALL three heat transfer mechanisms:

### Conduction → Blocked by Vacuum
- A vacuum between double walls eliminates molecular collisions
- No molecules = no conduction
- Small contact points at the neck are made of low-conductivity material

### Convection → Blocked by Vacuum + Sealed Lid
- No air in the vacuum gap = no convection currents
- The sealed lid prevents warm air from escaping at the top
- Without the lid, convection would be the dominant loss mechanism

### Radiation → Reduced by Silvered Walls
- The inner walls are coated with reflective silver
- Shiny surfaces have low emissivity ($\\varepsilon \\approx 0.02$)
- Most infrared radiation is reflected back rather than absorbed/emitted
- This reduces radiative loss by ~98%

### Result
A good thermos can keep coffee hot for 12+ hours because all three pathways are severely restricted. The small remaining heat loss comes from conduction through the lid and neck, and the tiny amount of radiation not reflected by the silvered walls.
      `
    },
    {
      id: 'ht6-cooking',
      type: 'text' as const,
      content: `
## Physics of Cooking

### Boiling Water
- Water boils at 100°C (at 1 atm) — no matter how high you turn the flame
- A rolling boil doesn't cook food faster than a gentle boil (same temperature!)
- Adding a lid reduces convective heat loss, so water boils faster
- At high altitude, lower pressure → lower boiling point → food takes longer to cook

### Metal vs. Wooden Spoon
- Both are at the same temperature in a hot kitchen
- The metal spoon *feels* hotter because metal conducts heat rapidly into your hand
- Wood conducts heat slowly, so your nerve endings don't receive energy as fast
- The **temperature** is the same; the **rate of heat transfer** differs

### Cooking Pans
- Copper-bottom pans: high $k$ means heat spreads evenly across the bottom (no hot spots)
- Cast iron: lower $k$ but high heat capacity — holds heat well, cooks evenly once heated
- Wooden handles: low $k$ keeps the handle cool while the pan is hot

### Microwave Ovens
- Microwaves directly excite water molecules (radiation at 2.45 GHz)
- Unlike conventional ovens, they heat food from within — no conduction through layers needed
- Dry materials (ceramics) barely absorb microwaves, so the plate stays relatively cool
      `
    },
    {
      id: 'ht6-greenhouse',
      type: 'text' as const,
      content: `
## The Greenhouse Effect

### How It Works

1. **Solar radiation** (mostly visible light, short wavelength) passes through the atmosphere and heats Earth's surface

2. **Earth re-radiates** energy as infrared radiation (long wavelength) — because Earth is much cooler than the Sun

3. **Greenhouse gases** (CO₂, H₂O, CH₄, N₂O) absorb and re-emit infrared radiation in all directions

4. Some re-emitted IR goes back toward Earth's surface, **trapping** energy in the atmosphere

### The Energy Balance

Without greenhouse gases, Earth's average temperature would be about $-18$°C (0°F). The natural greenhouse effect raises it to about $15$°C (59°F) — making the planet habitable.

### Why It's Getting Stronger

Human activities (burning fossil fuels, deforestation) increase CO₂ concentration:
- Pre-industrial: ~280 ppm CO₂
- Current: ~420 ppm CO₂
- More CO₂ → more IR absorption → more energy trapped → higher temperatures

### The Stefan-Boltzmann Connection

Earth must radiate energy at the same rate it absorbs solar energy (equilibrium). If more energy is trapped:
- Temperature rises until $P_{\\text{out}} = \\sigma \\varepsilon A T^4$ matches the new energy input
- Since $P \\propto T^4$, even small changes in trapped energy cause measurable temperature changes

### Water's Role in Climate

Water's high specific heat means oceans absorb enormous amounts of energy with small temperature changes. Oceans act as a thermal buffer, slowing climate change but also storing vast amounts of energy.
      `
    },
    {
      id: 'ht6-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Applications Concept Quiz** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'A metal bench and a wooden bench are both sitting outside on a cold winter morning at 0°C. The metal bench feels much colder than the wooden bench because:',
            options: [
              'The metal bench is at a lower temperature',
              'Metal has a higher specific heat than wood',
              'Metal conducts heat away from your hand much faster than wood',
              'Wood generates its own heat through chemical reactions'
            ],
            correctAnswer: 2,
            explanation: 'Both benches are at the same temperature (0°C). Metal conducts heat rapidly away from your warm hand (high $k$), while wood is a poor conductor (low $k$). Your perception of "cold" depends on the rate of heat transfer, not the temperature alone.'
          },
          {
            question: 'A thermos bottle reduces convective heat loss primarily through:',
            options: [
              'Its silvered walls',
              'Its vacuum between double walls',
              'Its sealed lid',
              'Both B and C'
            ],
            correctAnswer: 3,
            explanation: 'Convection requires a fluid medium. The vacuum eliminates convection in the walls, and the sealed lid prevents warm air from escaping out the top. The silvered walls reduce radiation, not convection.'
          },
          {
            question: 'The greenhouse effect occurs because:',
            options: [
              'The atmosphere blocks all solar radiation from reaching Earth',
              'Greenhouse gases absorb outgoing infrared radiation and re-emit it back toward Earth',
              'The ozone layer traps heat in the upper atmosphere',
              'Earth\'s magnetic field traps charged particles that heat the air'
            ],
            correctAnswer: 1,
            explanation: 'Solar radiation (visible light) passes through the atmosphere. Earth re-emits infrared radiation, which greenhouse gases absorb and re-emit in all directions — including back toward the surface, trapping energy.'
          }
        ]
      }
    },
    {
      id: 'ht6-application-drill',
      type: 'dropdown-select' as const,
      content: `
**Match the Scenario to the Dominant Heat Transfer Mechanism** 🎯
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A hand wrapped around a hot mug of cocoa',
            options: ['Conduction', 'Convection', 'Radiation']
          },
          {
            label: 'Steam rising from the mug warming your face above it',
            options: ['Conduction', 'Convection', 'Radiation']
          },
          {
            label: 'Feeling warmth from a campfire 3 meters away',
            options: ['Conduction', 'Convection', 'Radiation']
          },
          {
            label: 'Hot water in a radiator heating a room\'s air',
            options: ['Conduction', 'Convection', 'Radiation']
          }
        ],
        correctAnswers: ['Conduction', 'Convection', 'Radiation', 'Convection'],
        hint1: 'Your hand is in direct contact with the mug surface.',
        hint2: 'Rising steam is hot fluid physically moving upward.',
        hint3: 'At a distance, without direct contact or fluid flow, energy arrives as electromagnetic waves.',
        explanation: 'Mug contact = conduction. Rising steam = convection (hot fluid carrying energy). Campfire at distance = radiation (infrared EM waves). Room radiator = convection (heating air that circulates — despite the misleading name "radiator").'
      }
    },
    {
      id: 'ht6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Real-World Applications**
      `,
      exercise: {
        questions: [
          {
            question: 'Coastal cities tend to have milder climates (cooler summers, warmer winters) than inland cities at the same latitude. This is primarily because:',
            options: [
              'Ocean currents bring warm water from the equator',
              'Water has a very high specific heat, so oceans resist temperature changes and moderate nearby air temperatures',
              'Coastal cities are at lower elevation',
              'Sea breezes constantly cool the cities'
            ],
            correctAnswer: 1,
            explanation: 'Water\'s high specific heat ($c = 4{,}186$ J/(kg·°C)) means oceans absorb and release large amounts of energy with small temperature changes. This thermal buffering moderates the climate of nearby coastal areas.'
          },
          {
            question: 'At high altitude (like Denver or La Paz), water boils at a temperature below 100°C. As a practical consequence:',
            options: [
              'Food cooks faster because water boils sooner',
              'Food takes longer to cook because the boiling water is at a lower temperature',
              'There is no difference in cooking time',
              'Food cannot be cooked in boiling water at high altitude'
            ],
            correctAnswer: 1,
            explanation: 'Lower atmospheric pressure at altitude lowers the boiling point. Boiling water at 95°C (for example) cooks food more slowly than at 100°C because the rate of chemical reactions in cooking depends on temperature. This is why pressure cookers are popular at high altitude.'
          }
        ]
      }
    }
  ]
}
