export const hgSpatialConceptsPart7Data = {
  topicSlug: 'hg-spatial-concepts',
  sections: [
    {
      id: 'hgspatia7-intro',
      type: 'text' as const,
      content: `
# 🌍 Spatial Concepts & Geographic Data

**Part 7 of 7 — Synthesis Review: Thinking Spatially**

---

| Section |
|---------|
| 📖 How the Six Parts Fit Together |
| Master Vocabulary Table |
| One Case, Every Concept: Choosing a Warehouse Site |
| Mixed Review |

> 🔑 **Key Concept:** The concepts in this topic form one chain of reasoning. **Where** is something (location, site, situation)? **How** is it arranged (density, concentration, pattern)? **How** do we show and measure it (maps, data, technology)? At **what scale** are we looking? And **how** do people and environment shape each other?
`
    },
    {
      id: 'hgspatia7-chain',
      type: 'text' as const,
      content: `
## 📖 How the Six Parts Fit Together

| Part | Big question | Core ideas |
|---|---|---|
| 1 | What is this place like, and how is it connected? | Site, situation, place |
| 2 | Where is it, and how are things arranged? | Absolute/relative location, distance, direction, time-space compression, distance decay, flows, density, concentration, pattern |
| 3 | How do maps show it, and what do they distort? | Reference vs. thematic maps; choropleth, dot, graduated symbol, isoline, cartogram; projections; map scale |
| 4 | Where do the data come from, and who uses them? | Quantitative vs. qualitative; field work, census, interviews; GPS, remote sensing, GIS; John Snow; apportionment |
| 5 | At what level are we looking, and how do people and environment interact? | Global, regional, national, local; determinism vs. possibilism; sustainability |
| 6 | How does the exam test it? | Identify, describe, explain; stimulus reading |

## Master Vocabulary Table

| Pair often confused | The difference |
|---|---|
| Site vs. situation | Internal physical features vs. connections to other places |
| Absolute vs. relative distance | Miles or kilometers vs. time, cost or social connection |
| Density vs. concentration | How many per area vs. how spread out they are from each other |
| Map scale vs. scale of analysis | Ratio of map to ground vs. level of study |
| Large-scale vs. small-scale map | Small area, high detail vs. large area, low detail |
| Choropleth vs. cartogram | Shades areas by a rate vs. resizes areas by a variable |
| Remote sensing vs. GIS | Collects images from a distance vs. stores and overlays layers |
| Determinism vs. possibilism | Environment dictates vs. environment offers limits and choices |
`
    },
    {
      id: 'hgspatia7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Singapore has a deep natural harbor and sits beside the Strait of Malacca, one of the busiest shipping lanes in the world. The strait describes Singapore\'s',
            options: [
              'site',
              'situation',
              'absolute location',
              'density'
            ],
            correctAnswer: 1,
            explanation: 'The strait is about Singapore\'s position relative to global shipping routes, which is situation. The harbor is a site feature, coordinates would be absolute location, and density measures people per area.'
          },
          {
            question: 'A map of Brazil shades each state by the percentage of residents living in cities. A student says the map proves that every town in a dark state is urban. What is the flaw in this reasoning?',
            options: [
              'A choropleth gives one value per state, so it hides how places differ inside it',
              'A choropleth should never show percentages, so the map is drawn the wrong way',
              'A percentage cannot be mapped at the state scale, only at the national scale',
              'The projection used for Brazil distorts the area of each of its states'
            ],
            correctAnswer: 0,
            explanation: 'A choropleth assigns one value to a whole area, so it cannot show variation between towns inside that area. Percentages are exactly what choropleths should show, and state-level data can be mapped at any national scale.'
          },
          {
            question: 'Which pairing of a technology with a task is correct?',
            options: [
              'Remote sensing, to overlay census tracts with flood zones and bus routes',
              'GIS, to overlay census tracts with flood zones and bus routes on one map',
              'GPS, to measure how much farmland a whole country lost to drought',
              'GIS, to find a hiker\'s exact latitude and longitude from satellites'
            ],
            correctAnswer: 1,
            explanation: 'Overlaying several data layers to answer a location question is what GIS does. Remote sensing collects images, GPS finds the position of one receiver, and a hiker\'s coordinates come from GPS, not GIS.'
          }
        ]
      }
    },
    {
      id: 'hgspatia7-case',
      type: 'text' as const,
      content: `
## One Case, Every Concept: Choosing a Warehouse Site

An online retailer wants a new warehouse that can deliver to customers in the U.S. Southeast within one day. Follow how each concept from this topic enters the decision.

| Step | Concept used | What the analyst does |
|---|---|---|
| 1 | **Scale of analysis** | Starts at the regional scale (the Southeast), then narrows to the local scale (specific parcels of land) |
| 2 | **Data sources** | Gathers census population counts, highway traffic counts and land prices |
| 3 | **Thematic maps** | Makes a dot distribution map of population to see where customers cluster |
| 4 | **Distance and time-space compression** | Measures relative distance as truck-hours, not miles, from each candidate site |
| 5 | **Distance decay** | Expects fewer same-day orders from places more than about eight truck-hours away |
| 6 | **GIS** | Overlays population, interstate highways, land cost and flood zones to find parcels meeting every condition |
| 7 | **Site and situation** | Compares the finalists: flat, dry, cheap land (site) next to an interstate junction near large metros (situation) |
| 8 | **Human-environment interaction** | Avoids floodplains and plans stormwater control, a possibilist response to a real environmental limit |

**The map at the end, described in text:** a dot map of the Southeast shows dense clusters around Atlanta, Charlotte, Nashville and the Florida metros. Interstate lines run between them. A shaded flood layer covers river bottoms and the coastal lowlands. The few remaining candidate parcels sit near interstate junctions in north-central Georgia, roughly in the middle of the customer clusters.

> 🔑 **AP Connection:** A strong FRQ answer often uses two or three of these concepts together. If a question asks why a company chose a location, combine **situation** (access to markets), **relative distance** (travel time) and **site** (land, cost, hazards).
`
    },
    {
      id: 'hgspatia7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Concept** 🔍

Choose the concept each statement shows.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Same-day orders fall off sharply beyond eight truck-hours from the warehouse: ___',
            options: ['distance decay', 'time-space compression', 'possibilism', 'concentration']
          },
          {
            label: 'A new interstate cuts the trip between two cities from five hours to three: ___',
            options: ['distance decay', 'time-space compression', 'possibilism', 'concentration']
          },
          {
            label: 'Customers are packed into a few metro areas rather than spread evenly: ___',
            options: ['distance decay', 'time-space compression', 'possibilism', 'concentration']
          },
          {
            label: 'Engineers build drainage so a warehouse can stand on low, wet ground: ___',
            options: ['distance decay', 'time-space compression', 'possibilism', 'concentration']
          }
        ],
        correctAnswers: ['distance decay', 'time-space compression', 'concentration', 'possibilism'],
        hint1: 'Interaction declines as distance increases.',
        hint2: 'Faster transport shrinks relative distance.',
        hint3: 'How spread out features are from each other.',
        explanation: 'Falling orders with distance is distance decay. A faster highway is time-space compression. Customers packed into metros describes their concentration (clustered). Draining wet ground is a possibilist response to an environmental limit.'
      }
    },
    {
      id: 'hgspatia7-traps',
      type: 'text' as const,
      content: `
## Final Checklist: Five Traps

1. **"Large-scale map = big area."** No: large scale means small area, high detail.
2. **"Dense means clustered."** No: density counts per area; concentration describes spacing.
3. **"The Mercator shows true size."** No: it inflates area toward the poles; Africa is about 14 times Greenland's area.
4. **"A national average describes everyone."** No: finer scales reveal variation the average hides, such as Akita versus Tokyo.
5. **"Climate explains culture."** No: that is environmental determinism; use possibilism and name the human choices.
`
    },
    {
      id: 'hgspatia7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Final Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the warehouse case, measuring candidate sites by truck-hours rather than miles is an example of using',
            options: [
              'absolute distance',
              'relative distance',
              'absolute direction',
              'relative direction'
            ],
            correctAnswer: 1,
            explanation: 'Truck-hours measure separation in time, which is relative distance and better predicts delivery speed than miles. Miles would be absolute distance, and absolute or relative direction describes which way, not how far.'
          },
          {
            question: 'A state\'s average income is high, but a census-tract map shows several very poor neighborhoods in its largest city. This contrast shows that',
            options: [
              'the state average is wrong and the tract data are correct',
              'a broad average can hide the local variation a finer scale reveals',
              'census tracts form a small-scale map and states a large-scale one',
              'income is a qualitative variable that cannot be shown on a map'
            ],
            correctAnswer: 1,
            explanation: 'Both data sets can be accurate; the state average simply hides variation that appears at the finer, local scale. The contrast is about scale of analysis, not map scale, and income is quantitative.'
          },
          {
            question: 'Which statement about the Gall-Peters and Mercator projections is accurate?',
            options: [
              'Both keep area true, but only the Mercator keeps shape true',
              'Gall-Peters keeps area true; Mercator keeps compass bearings straight',
              'Both distort direction, but only the Gall-Peters distorts area',
              'Mercator keeps area true; Gall-Peters keeps compass bearings straight'
            ],
            correctAnswer: 1,
            explanation: 'The Gall-Peters is equal-area, and the Mercator keeps lines of constant compass bearing straight at the cost of area. The other choices reverse or misstate which property each projection preserves.'
          }
        ]
      }
    }
  ]
}
