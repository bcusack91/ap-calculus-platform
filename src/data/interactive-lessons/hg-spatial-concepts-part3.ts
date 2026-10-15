export const hgSpatialConceptsPart3Data = {
  topicSlug: 'hg-spatial-concepts',
  sections: [
    {
      id: 'hgspatia3-intro',
      type: 'text' as const,
      content: `
# 🌍 Spatial Concepts & Geographic Data

**Part 3 of 7 — Maps, Map Types and Projections**

---

| Section |
|---------|
| 📖 Reference Maps and Thematic Maps |
| Five Thematic Map Types |
| Map Projections and Distortion |
| Map Scale |

> 🔑 **Key Concept:** Every map is a **model**: it selects some information, leaves out the rest, and squeezes a round Earth onto a flat surface. Reading a map well means asking what it shows, how it shows it, and what it distorts (CED Topic 1.1).
`
    },
    {
      id: 'hgspatia3-types',
      type: 'text' as const,
      content: `
## 📖 Reference Maps and Thematic Maps

| Kind | Purpose | Examples |
|---|---|---|
| **Reference map** | Shows locations: boundaries, cities, roads, rivers, landforms | Road atlas, political map of Africa, topographic map, Google Maps |
| **Thematic map** | Shows the spatial pattern of one topic or variable | Map of fertility rates by country, map of corn production by county |

A reference map answers "where is it?" A thematic map answers "how does this vary across space?"

## Five Thematic Map Types

| Type | How it works | Best used for | Main weakness |
|---|---|---|---|
| **Choropleth** | Shades or colors whole areas (countries, states, counties) by value | Rates and percentages: median age, % urban, GDP per capita | Implies the value is uniform across each area; large areas dominate visually |
| **Dot distribution** | Each dot stands for a set number of something | Showing density and clustering: one dot = 10,000 people | Hard to count exact values; dots can merge in dense areas |
| **Graduated symbol** | Symbols sized in proportion to a quantity at a place | Totals at points: city populations, port tonnage | Large symbols overlap and hide neighbors |
| **Isoline** | Lines connect points of equal value | Continuous data: elevation (contour lines), temperature, travel time | Values between lines must be estimated |
| **Cartogram** | Sizes each area by a variable instead of land area | Comparing countries by population or GDP | Shapes and locations become hard to recognize |

### Two Maps Described in Text

**A world population cartogram:** each country's area is drawn in proportion to its population. India and China swell into the largest shapes on the map, Bangladesh and Nigeria grow far beyond their land size, and Canada, Russia and Australia shrink to thin slivers. The map makes the CED's population clusters (East Asia, South Asia) impossible to miss.

**A choropleth of U.S. population density by county:** the eastern half of the country is mostly medium and dark shades, while large pale counties fill Nevada, Wyoming and Montana. The pale counties cover most of the map's area, which can make the country look emptier than it is, because the visual weight of a choropleth follows **land area**, not people.

> ⚠️ **Rule for choropleths:** shade by a **rate** (people per square mile, percent unemployed), not a **raw count**. A raw-count choropleth makes big, populous areas look important just because they are big.

> 🔑 **AP Connection:** When a stimulus shows a thematic map, the first question is often "Identify the type of map shown" or "Explain one limitation of this map." Know each type's weakness, not just its name.
`
    },
    {
      id: 'hgspatia3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher wants to show the percentage of adults with a college degree in each U.S. state. Which map type fits these data best?',
            options: [
              'Choropleth map',
              'Isoline map',
              'Graduated symbol map',
              'Reference map'
            ],
            correctAnswer: 0,
            explanation: 'A percentage for each state is a rate tied to an area, which is what a choropleth map shades. Isolines need continuous data such as elevation, graduated symbols show totals at points, and a reference map shows locations rather than a variable.'
          },
          {
            question: 'On a map, lines connect places with the same average January temperature. What type of map is this?',
            options: [
              'Dot distribution map',
              'Isoline map',
              'Cartogram',
              'Choropleth map'
            ],
            correctAnswer: 1,
            explanation: 'Lines joining points of equal value make an isoline map; temperature isolines are called isotherms. A dot map counts features, a cartogram resizes areas, and a choropleth shades whole areas.'
          },
          {
            question: 'A world cartogram sized by population makes Canada look tiny. What does this show about Canada?',
            options: [
              'It has few people for the size of its territory',
              'It has a small land area compared with other countries',
              'It has a very high arithmetic density across its land',
              'It is distorted by the map projection used to draw it'
            ],
            correctAnswer: 0,
            explanation: 'A cartogram sizes each country by the variable it maps, so a shrunken Canada means few people relative to its huge territory. Canada has a very large land area and a low density, and the shrinkage comes from the variable, not from a projection.'
          }
        ]
      }
    },
    {
      id: 'hgspatia3-projections',
      type: 'text' as const,
      content: `
## Map Projections and Distortion

A **projection** is a method of transferring Earth's curved surface onto a flat map. No flat map can keep all four properties true at once:

**shape, area, distance and direction.**

Each projection chooses what to keep and what to give up.

| Projection | What it preserves | What it distorts | Typical use |
|---|---|---|---|
| **Mercator** (1569) | Shape of small areas and compass direction: a straight line is a constant compass bearing | Area, badly toward the poles | Sea navigation; web street maps |
| **Gall-Peters** (Peters) | Area: every country is in true proportion | Shape: tropical countries look stretched north-south | Comparing country sizes fairly |
| **Robinson** (1963) | Nothing perfectly; a compromise | All four, but none severely | General world maps and textbooks |
| **Goode homolosine** | Area, with the oceans "interrupted" (cut) | Distance and direction across the gaps | Mapping global distributions on land |
| **Azimuthal (polar)** | Direction from the center point | Shape and area away from the center | Polar maps; air routes from one city |

### Worked Example: Greenland and Africa on the Mercator

On a Mercator map, Greenland looks about the same size as Africa. The real areas:

| Landmass | Area |
|---|---|
| Africa | about 30.4 million km² |
| Greenland | about 2.2 million km² |

$$\\frac{30.4}{2.2} \\approx 14$$

Africa is roughly **14 times** larger than Greenland. The Mercator inflates area as latitude rises, because it stretches the map east-west and north-south by the same factor to keep shapes correct; at Greenland's latitude that stretch is enormous. An equal-area projection such as the Gall-Peters or Goode homolosine shows the true 14-to-1 ratio.

**Why it matters:** a map that enlarges high-latitude countries (Europe, Russia, Canada) and shrinks tropical ones (much of Africa, South Asia, Latin America) can shape people's sense of which regions are important. Choosing a projection is a choice about what to emphasize.

> 🔑 **AP Connection:** If a question asks why the Mercator is still used, the answer is navigation: a straight line on it is a line of constant compass bearing. If it asks for its main weakness, the answer is area distortion near the poles.
`
    },
    {
      id: 'hgspatia3-scale',
      type: 'text' as const,
      content: `
## Map Scale

**Map scale** is the relationship between a distance on the map and the same distance on the ground. It can be written three ways:

| Form | Example | Meaning |
|---|---|---|
| **Ratio (representative fraction)** | 1:100,000 | 1 unit on the map = 100,000 of the same units on the ground |
| **Written (verbal)** | "1 inch equals 1 mile" | The same as 1:63,360, because a mile has 63,360 inches |
| **Graphic (bar)** | A marked bar labeled 0, 5, 10 km | Measure with the bar; it stays correct if the map is enlarged or shrunk |

### Large Scale vs. Small Scale

This is the most commonly confused idea in Unit 1.

| | Large-scale map | Small-scale map |
|---|---|---|
| Ratio | 1:24,000 (the fraction 1/24,000 is **larger**) | 1:50,000,000 (the fraction is **smaller**) |
| Area shown | **Small** area: a town or neighborhood | **Large** area: a continent or the world |
| Detail | **High**: individual streets and buildings | **Low**: only major cities and borders |

**Memory aid:** large-scale = large detail, small area.

### Worked Example: Converting Map Distance

A hiking map has a scale of 1:100,000. Two trailheads are 4.5 cm apart on the map.

1. Ground distance = 4.5 cm × 100,000 = 450,000 cm.
2. 100,000 cm = 1 km, so 450,000 cm = **4.5 km**.

On a 1:100,000 map, every centimeter is one kilometer, which makes the arithmetic easy.

> ⚠️ **Map scale is not the same as scale of analysis.** Map scale is about the ratio of map to ground. Scale of analysis (Part 5) is about the level at which you study a pattern: local, national, regional or global.
`
    },
    {
      id: 'hgspatia3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** On a 1:100,000 map, two towns are 7 cm apart. How many kilometers apart are they on the ground?

**2)** On a 1:50,000 map, a lake is 3 cm long. How many kilometers long is it?

**3)** Africa covers about 30.4 million km² and Greenland about 2.2 million km². To the nearest whole number, how many times larger is Africa?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '1.5', '14'],
        hint1: 'At 1:100,000, one centimeter on the map is 100,000 cm, which is 1 km.',
        hint2: 'At 1:50,000, one centimeter is 50,000 cm, which is half a kilometer.',
        hint3: 'Divide 30.4 by 2.2 and round.',
        explanation: '1) 7 cm × 1 km per cm = 7 km. 2) 3 cm × 0.5 km per cm = 1.5 km. 3) 30.4 ÷ 2.2 ≈ 13.8, which rounds to 14.'
      }
    },
    {
      id: 'hgspatia3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why do sailors still use the Mercator projection even though it distorts area?',
            options: [
              'It shows the true size of every ocean basin',
              'Its straight lines are constant compass bearings',
              'It keeps distances accurate between any two ports',
              'It keeps the shapes of large continents exact'
            ],
            correctAnswer: 1,
            explanation: 'A straight line on a Mercator map is a line of constant compass bearing, so a navigator can set one heading and follow it. The projection distorts area and distance, and it keeps shape correct only for small areas.'
          },
          {
            question: 'A student wants to compare the land areas of Brazil and Russia fairly on one world map. Which projection should she choose?',
            options: [
              'Mercator',
              'Gall-Peters',
              'Robinson',
              'Any projection'
            ],
            correctAnswer: 1,
            explanation: 'The Gall-Peters is an equal-area projection, so countries appear in true proportion to each other. The Mercator would inflate Russia, an azimuthal map is accurate only around its center, and no projection preserves area automatically.'
          },
          {
            question: 'Which statement about map scale is correct?',
            options: [
              'A small-scale map shows a small area in great detail',
              'A large-scale map shows a small area in great detail',
              'A large-scale map always covers the whole world',
              'A graphic scale stops working when a map is enlarged'
            ],
            correctAnswer: 1,
            explanation: 'Large-scale maps such as 1:24,000 cover small areas with a lot of detail, while small-scale maps cover large areas with little detail. A graphic scale bar is enlarged along with the map, so it stays accurate.'
          }
        ]
      }
    }
  ]
}
