export const apesEarthSystemsPart2Data = {
  topicSlug: 'apes-earth-systems',
  sections: [
    {
      id: 'apeseart2-intro',
      type: 'text' as const,
      content: `
# 🌎 Earth Systems & Resources

**Part 2 of 7 — Plate Tectonics, Soil Formation and Erosion**

---

| Section |
|---------|
| 📖 Plate Boundaries on a Map, and Hotspots |
| How Soil Forms and How It Is Lost |
| Testing Soil: Texture, Water and Permeability |

> 🔑 **Key Concept:** Part 1 introduced the plate boundary types, soil formation from parent material and the soil horizons. This part adds the map-reading skills the CED expects for plate tectonics (Topic 4.1), the processes that build and erode soil (Topic 4.2), and the measurements used to test soil (Topic 4.3), with the calculations that go with them.
      `
    },
    {
      id: 'apeseart2-tectonics',
      type: 'text' as const,
      content: `
## 📖 Plate Boundaries on a Map, and Hotspots

A world map of plate boundaries lets you predict where earthquakes and volcanoes cluster.

| Map feature | Boundary type | What you will find there |
|---|---|---|
| Ocean trench beside a volcanic mountain range or island arc | Convergent (subduction) | Strong earthquakes, explosive volcanoes, tsunamis (Andes, Japan, Aleutian Islands) |
| Mountain range with no volcanoes, inside a continent | Convergent (continent–continent) | Earthquakes, very high mountains (Himalayas) |
| Mid-ocean ridge or rift valley | Divergent | Seafloor spreading, shallow earthquakes, volcanism (Mid-Atlantic Ridge, Iceland, East African Rift) |
| Fault offsetting ridges or crossing land | Transform | Frequent earthquakes, little volcanism (San Andreas Fault) |
| Volcanoes in the middle of a plate | Hotspot | A chain of volcanic islands that get older with distance (Hawaii) |

The **Ring of Fire**, the belt of subduction zones around the Pacific Ocean, contains most of the world's active volcanoes and produces most of its large earthquakes.

### Hotspots

A **hotspot** is a plume of hot mantle material that stays roughly fixed while the plate moves over it. Each time the plate carries a volcano away from the plume, a new volcano forms above it. The result is an island chain whose ages increase in the direction the plate is moving.

### Worked Example: Plate Speed From a Hotspot Chain

Kauai, a Hawaiian island, formed over the hotspot about 5 million years ago and now lies about 500 km from the active volcanoes on the Big Island. How fast is the Pacific Plate moving, in cm/yr?

1. Rate in the given units: $\\dfrac{500\\ \\text{km}}{5{,}000{,}000\\ \\text{yr}} = 0.0001\\ \\text{km/yr}$
2. Convert km to cm: $1\\ \\text{km} = 1{,}000\\ \\text{m} = 100{,}000\\ \\text{cm}$
3. $0.0001\\ \\text{km/yr} \\times 100{,}000\\ \\text{cm/km} = 10\\ \\text{cm/yr}$

About 10 cm per year (roughly the rate a fingernail grows, scaled up a few times), using these rounded values.
      `
    },
    {
      id: 'apeseart2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A map shows a deep ocean trench running parallel to a chain of active volcanoes about 200 km inland. Which boundary type and hazard are most likely?',
            options: [
              'A divergent boundary with frequent shallow earthquakes and gentle lava flows',
              'A convergent boundary with strong earthquakes and explosive volcanic eruptions',
              'A transform boundary with frequent earthquakes but almost no volcanic activity',
              'A hotspot in the middle of a plate with a chain of progressively older islands'
            ],
            correctAnswer: 1,
            explanation: 'A trench next to a volcanic range marks subduction at a convergent boundary, where the sinking plate melts and feeds explosive volcanoes and the plates lock and slip in strong earthquakes. Divergent boundaries form ridges, not trenches.'
          },
          {
            question: 'Volcanic islands in a hotspot chain are 1, 3 and 6 million years old, from east to west. What does this pattern indicate?',
            options: [
              'The plate is moving west over a hotspot that stays in one place',
              'The hotspot is drifting west underneath a plate that does not move',
              'An eastward-moving plate is carrying older islands toward the plume',
              'The islands formed at a divergent boundary that is spreading apart'
            ],
            correctAnswer: 0,
            explanation: 'The youngest island sits over the fixed plume, and older islands have been carried away from it. Ages increasing toward the west mean the plate is moving west.'
          }
        ]
      }
    },
    {
      id: 'apeseart2-soil',
      type: 'text' as const,
      content: `
## How Soil Forms and How It Is Lost

### Formation starts with weathering

| Type of weathering | What breaks the rock down | Example |
|---|---|---|
| **Physical (mechanical)** | Forces that fracture rock without changing its chemistry | Frost wedging: water freezes in cracks, expands about 9% and pries rock apart |
| **Chemical** | Reactions that change the minerals | Acid precipitation dissolving limestone; oxidation (rusting) of iron-rich rock |
| **Biological** | Living things | Roots widening cracks; lichens releasing acids |

Weathered fragments are then **transported** (by water, wind, ice and gravity) and **deposited**, where organisms add organic matter and horizons develop over hundreds to thousands of years. Climate controls the pace: warm, wet climates weather rock fastest.

### Erosion: the loss of topsoil

**Erosion** is the transport of soil by **water** or **wind**. It is natural, but human activities speed it up: removing vegetation (deforestation, overgrazing), tilling bare fields, and building on slopes. Because new topsoil forms so slowly, it is effectively a **nonrenewable** resource on human time scales.

Eroded soil also harms water: sediment clouds streams (raising turbidity and blocking light for producers) and carries attached fertilizer and pesticides.

### Worked Example: Converting an Erosion Rate

A tilled cornfield loses soil at 12 tonnes per hectare per year. Express this in kilograms per square meter.

1. $12\\ \\text{t} \\times 1{,}000\\ \\text{kg/t} = 12{,}000\\ \\text{kg}$
2. $1\\ \\text{ha} = 10{,}000\\ m^{2}$
3. $\\dfrac{12{,}000\\ \\text{kg}}{10{,}000\\ m^{2}} = 1.2\\ \\text{kg}/m^{2}$ each year

### Worked Example: Percent Change After a Conservation Practice

The farmer switches to no-till planting and keeps crop residue on the field. Erosion drops to 3 tonnes per hectare per year.

$$\\frac{3 - 12}{12} \\times 100 = -75\\%$$

> 🔑 **AP Connection:** Erosion-control practices (no-till, contour plowing, terracing, windbreaks, cover crops) are taught in Unit 5, but the **reason** they work comes from here: each one keeps soil covered or slows the water and wind that carry it.
      `
    },
    {
      id: 'apeseart2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Process** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Water seeps into a crack in granite, freezes and splits the rock. This is ___',
            options: ['physical weathering', 'chemical weathering', 'biological weathering', 'deposition']
          },
          {
            label: 'Acid rain slowly dissolves a limestone statue. This is ___',
            options: ['chemical weathering', 'physical weathering', 'wind erosion', 'deposition']
          },
          {
            label: 'Strong winds carry dry topsoil off a bare, overgrazed field. This is ___',
            options: ['erosion', 'chemical weathering', 'physical weathering', 'leaching']
          }
        ],
        correctAnswers: ['physical weathering', 'chemical weathering', 'erosion'],
        hint1: 'The rock breaks into pieces but its minerals do not change.',
        hint2: 'A reaction changes the minerals themselves.',
        hint3: 'Soil is being moved away, not broken down in place.',
        explanation: 'Frost wedging is physical weathering. Acid dissolving limestone is a chemical reaction. Wind carrying topsoil away is erosion, the transport of soil rather than its breakdown.'
      }
    },
    {
      id: 'apeseart2-testing',
      type: 'text' as const,
      content: `
## Testing Soil: Texture, Water and Permeability

### Texture and the soil texture triangle

Soil texture is the percentage of **sand** (0.05–2 mm), **silt** (0.002–0.05 mm) and **clay** (smaller than 0.002 mm). The three percentages always add to 100. The **soil texture triangle** has one axis for each; a sample is plotted where its three percentages meet, and the region it lands in names the texture class.

| Sample | Sand | Silt | Clay | Texture class (from the triangle) |
|---|---|---|---|---|
| A | 40% | 40% | 20% | Loam |
| B | 90% | 5% | 5% | Sand |
| C | 20% | 20% | 60% | Clay |

**Shortcut:** if you know two percentages, the third is 100 minus their sum. A sample with 35% sand and 45% silt has $100 - 35 - 45 = 20\\%$ clay.

| Property | Sandy soil | Clay soil | Loam |
|---|---|---|---|
| Pore size | Large | Tiny | Mixed |
| Permeability (drainage) | High | Low | Moderate |
| Water-holding capacity | Low | High | Moderate to high |
| Nutrient retention | Low | High | Good |

### Worked Example: Water-Holding Capacity

A student dries a soil sample to a mass of 200 g, soaks it, lets the excess drain, and reweighs it at 260 g.

1. Water held $= 260 - 200 = 60$ g
2. Water-holding capacity $= \\dfrac{60}{200} \\times 100 = 30\\%$ of dry mass

### Worked Example: Permeability (Infiltration Rate)

A cylinder pushed into the ground is filled with 5 cm of water, which drains in 12 minutes.

$$\\frac{5\\ \\text{cm}}{12\\ \\text{min}} \\times \\frac{60\\ \\text{min}}{1\\ \\text{hr}} = 25\\ \\text{cm/hr}$$

A rate that high points to a sandy soil; a clay soil might drain less than 1 cm per hour.

### Other soil tests

- **Chemical:** pH, and levels of nitrogen, phosphorus and potassium (N-P-K)
- **Physical:** texture, porosity, permeability, water-holding capacity
- **Biological:** organic matter content and the abundance of earthworms and microbes
      `
    },
    {
      id: 'apeseart2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

1) A soil sample is 25% sand and 50% silt. What percent is clay?

2) A dried sample of 150 g weighs 195 g after soaking and draining. What is its water-holding capacity, in percent of dry mass?

3) In a permeability test, 6 cm of water drains in 45 minutes. What is the infiltration rate, in cm/hr?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['25', '30', '8'],
        hint1: 'The three percentages add to 100.',
        hint2: 'Water held = 195 − 150. Divide by the dry mass.',
        hint3: 'Divide 6 cm by 45 minutes, then multiply by 60 minutes per hour.',
        explanation: '1) 100 − 25 − 50 = 25 percent clay. 2) 45 g ÷ 150 g = 0.30, or 30 percent. 3) 6 ÷ 45 × 60 = 8 cm per hour.'
      }
    },
    {
      id: 'apeseart2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A farmer\'s field drains within minutes after heavy rain, and fertilizer seems to wash out of the root zone quickly. Which soil texture best fits these observations?',
            options: [
              'A soil high in clay',
              'A soil high in sand',
              'A loam with even silt',
              'A soil high in humus'
            ],
            correctAnswer: 1,
            explanation: 'Large sand grains leave large pores, so water and the dissolved nutrients it carries drain through quickly. Clay holds both water and nutrients, and organic-rich soils retain them well too.'
          },
          {
            question: 'Why is topsoil considered effectively nonrenewable even though soil forms naturally?',
            options: [
              'Soil forms only at divergent plate boundaries, where new crust is produced',
              'Soil formation can take centuries, far slower than erosion from poor farming',
              'Topsoil cannot form again once the bedrock beneath it has been weathered',
              'Weathering stopped when most of Earth\'s glaciers retreated long ago'
            ],
            correctAnswer: 1,
            explanation: 'A few centimeters of topsoil can take hundreds of years to form, but unprotected fields can lose that much in decades. Weathering continues everywhere, so soil formation has not stopped.'
          }
        ]
      }
    }
  ]
};
