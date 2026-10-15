export const apesEarthSystemsPart7Data = {
  topicSlug: 'apes-earth-systems',
  sections: [
    {
      id: 'apeseart7-intro',
      type: 'text' as const,
      content: `
# 🌎 Earth Systems & Resources

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 Unit 4 on One Page |
| One Chain of Cause and Effect |
| Final Checklist |

## 📖 Unit 4 on One Page

| CED topic | Big idea | Where you learned it |
|---|---|---|
| 4.1 Plate tectonics | Boundary type predicts landforms and hazards; hotspots build island chains | Parts 1–2 |
| 4.2 Soil formation and erosion | Weathering builds soil slowly; erosion by water and wind removes it quickly | Parts 1–2 |
| 4.3 Soil composition and properties | Texture controls permeability, water-holding capacity and fertility | Parts 1–2 |
| 4.4 Earth's atmosphere | Composition and layers defined by temperature trends; ozone in the stratosphere | Part 3 |
| 4.5 Global wind patterns | Uneven heating + Coriolis effect → Hadley cells and wind belts | Part 3 |
| 4.6 Watersheds | All land drains to an outlet; land use controls runoff and pollution | Part 5 |
| 4.7 Solar radiation and seasons | Sun angle sets insolation; 23.5° tilt causes seasons; albedo | Part 4 |
| 4.8 Earth's geography and climate | Rain shadows, ocean currents and water's moderating effect | Part 4 |
| 4.9 El Niño and La Niña | Trade-wind strength controls Pacific upwelling and global weather | Part 5 |

### Calculations in this topic

| Skill | Formula or fact |
|---|---|
| Percent change | (new − old) ÷ old × 100, with the sign |
| ppm to percent | divide by 10,000 |
| Area | 1 ha = 10,000 $m^{2}$; 1 $km^{2}$ = 1,000,000 $m^{2}$ |
| Rain volume | depth (m) × area ($m^{2}$) = $m^{3}$; 1 $m^{3}$ = 1,000 L |
| Rates | infiltration in cm/hr; erosion in t/ha/yr; plate motion in cm/yr |
| Absorbed sunlight | incoming × (1 − albedo) |
| Temperature with altitude | about 6.5 °C cooler per km in the troposphere |
      `
    },
    {
      id: 'apeseart7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which plate boundary type is most closely associated with deep ocean trenches and explosive volcanoes?',
            options: [
              'Convergent',
              'Divergent',
              'Transform',
              'Mid-plate hotspot'
            ],
            correctAnswer: 0,
            explanation: 'At convergent boundaries, a denser oceanic plate subducts, forming a trench and melting to feed explosive volcanoes. Divergent boundaries form ridges and rifts, and transform boundaries produce earthquakes with little volcanism.'
          },
          {
            question: 'A loam soil and a sandy soil receive the same rainfall. Compared with the sandy soil, the loam will most likely',
            options: [
              'retain more water and nutrients',
              'drain much faster and leach more nitrate',
              'have larger pores and a lower clay content',
              'contain no organic matter or humus at all'
            ],
            correctAnswer: 0,
            explanation: 'Loam contains silt and clay as well as sand, so its smaller pores retain more water and its clay particles hold nutrient ions. Sandy soil drains faster and leaches more.'
          },
          {
            question: 'Which statement correctly links global circulation to a climate pattern?',
            options: [
              'Air rising near 30° latitude produces tropical rain forests',
              'Sinking air near the equator produces the world\'s great deserts',
              'Rising equatorial air cools and drops heavy tropical rainfall',
              'Descending air near 60° latitude produces wet temperate forests'
            ],
            correctAnswer: 2,
            explanation: 'Intense equatorial heating makes air rise, cool and condense, producing heavy rain. Air sinks near 30° to form deserts, and rises again near 60°.'
          }
        ]
      }
    },
    {
      id: 'apeseart7-chain',
      type: 'text' as const,
      content: `
## One Chain of Cause and Effect

Many Unit 4 ideas connect in a single chain. Follow it from the sun to a fishing village in Peru:

1. **Solar radiation (4.7):** the equator receives the most intense sunlight.
2. **Atmosphere and winds (4.4–4.5):** heated air rises at the equator; surface air flowing back toward it is deflected by the Coriolis effect into the **trade winds**.
3. **Ocean and climate (4.8):** the trade winds push warm surface water west across the Pacific, and cold, nutrient-rich water wells up off South America.
4. **ENSO (4.9):** when the trade winds weaken during **El Niño**, upwelling slows and the anchovy fishery declines; Peru floods while Australia faces drought.
5. **Watersheds (4.6):** the heavy El Niño rain on Peru's coastal watersheds causes flooding, especially where slopes are steep and vegetation has been cleared.
6. **Soil (4.2):** that runoff erodes bare hillsides, carrying topsoil and sediment into rivers and the ocean.

### Worked Example: Putting Numbers on the Chain

Illustrative values: a coastal watershed in northern Peru normally receives 20 mm of rain in January. During a strong El Niño it receives 180 mm.

1. Percent change: $\\dfrac{180 - 20}{20} \\times 100 = +800\\%$
2. On 1 $km^{2}$ ($10^{6}\\ m^{2}$), 180 mm (0.180 m) of rain is $0.180 \\times 10^{6} = 1.8 \\times 10^{5}\\ m^{3}$ of water.
3. If 40% of it runs off: $1.8 \\times 10^{5} \\times 0.40 = 7.2 \\times 10^{4}\\ m^{3}$ per square kilometer.
      `
    },
    {
      id: 'apeseart7-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

1) January rainfall rises from 30 mm to 120 mm. What is the percent change?

2) Sunlight of 600 $W/m^{2}$ strikes a forest with albedo 0.15. How many $W/m^{2}$ does it absorb?

3) A hiker starts at 500 m elevation where it is 20 °C. Using 6.5 °C per km, what is the temperature at 2,500 m, in °C?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['300', '510', '7'],
        hint1: '(120 − 30) ÷ 30 × 100.',
        hint2: 'Absorbed = incoming × (1 − albedo).',
        hint3: 'The climb is 2,000 m, or 2 km.',
        explanation: '1) 90 ÷ 30 × 100 = 300 percent. 2) 600 × 0.85 = 510 W/m². 3) A 2 km climb cools the air by 2 × 6.5 = 13 °C, so 20 − 13 = 7 °C.'
      }
    },
    {
      id: 'apeseart7-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'During La Niña, which combination of conditions is most likely in the equatorial Pacific?',
            options: [
              'Stronger trade winds and more upwelling off Peru',
              'Weaker trade winds and less upwelling off Peru',
              'Warmer water off Peru as the trade winds strengthen',
              'Colder water near Indonesia as the trade winds weaken'
            ],
            correctAnswer: 0,
            explanation: 'La Niña strengthens the trade winds, which push more surface water west and draw more cold, nutrient-rich water up off South America. Weaker trades and reduced upwelling describe El Niño.'
          },
          {
            question: 'Two cities lie at the same latitude. City X is on the coast; City Y is 1,500 km inland. Which difference is most likely?',
            options: [
              'City X has a smaller annual temperature range because water warms and cools slowly',
              'City X has a larger annual temperature range because the ocean absorbs more sunlight',
              'City Y has a smaller annual temperature range because it receives less insolation',
              'City Y has a smaller annual temperature range because its air holds more vapor'
            ],
            correctAnswer: 0,
            explanation: 'Water\'s high specific heat moderates nearby air temperatures, so coastal cities have milder summers and winters. Both cities receive the same insolation because they share a latitude.'
          },
          {
            question: 'A county plans to reduce flooding and stream pollution in a rapidly growing watershed. Which policy would address both problems?',
            options: [
              'Require green roofs and rain gardens on new buildings',
              'Straighten and deepen the main river channel',
              'Pave drainage ditches so water leaves faster',
              'Remove streamside trees to widen the floodplain'
            ],
            correctAnswer: 0,
            explanation: 'Green roofs and rain gardens capture rain and let it infiltrate, reducing both runoff volume and the pollutants it carries. Straightening channels and paving ditches move water faster, worsening flooding downstream.'
          }
        ]
      }
    },
    {
      id: 'apeseart7-checklist',
      type: 'text' as const,
      content: `
## Final Checklist

Before the exam, make sure you can do each of these without notes:

- Match each plate boundary to its landforms and hazards, and read a hotspot chain's direction of motion
- Name the three kinds of weathering and explain why topsoil is effectively nonrenewable
- Use the soil texture triangle and calculate water-holding capacity and infiltration rate
- Name the atmospheric layers in order and state how temperature changes in each
- Explain the Hadley cell, the Coriolis effect and the three wind belts
- Explain why seasons come from tilt, not distance, and calculate absorbed energy from albedo
- Explain a rain shadow and the role of ocean currents and water's specific heat
- Describe what controls runoff in a watershed and calculate a runoff volume
- Trace the El Niño chain from trade winds to fisheries, and contrast it with La Niña
- Report every percent change with its sign

> 🔑 **AP Connection:** Unit 4 makes up roughly 10–15% of the AP Environmental Science exam, but its ideas reappear in Units 5 (soil conservation), 8 (watershed pollution) and 9 (climate change). Mastering the mechanisms here pays off across the course.
      `
    }
  ]
};
