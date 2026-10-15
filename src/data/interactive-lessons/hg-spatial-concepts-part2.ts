export const hgSpatialConceptsPart2Data = {
  topicSlug: 'hg-spatial-concepts',
  sections: [
    {
      id: 'hgspatia2-intro',
      type: 'text' as const,
      content: `
# 🌍 Spatial Concepts & Geographic Data

**Part 2 of 7 — Location, Distance and Spatial Patterns**

---

| Section |
|---------|
| 📖 Absolute and Relative Location |
| Distance, Direction and Time-Space Compression |
| Distance Decay and Flows |
| Distribution: Density, Concentration and Pattern |

> 🔑 **Key Concept:** Part 1 described *what a place is like* (site) and *how it connects* (situation). This part gives you the vocabulary for describing **where things are and how they are arranged**: location, distance, direction, flows and the three properties of any distribution (density, concentration and pattern). These are the CED's core spatial concepts (Topic 1.4), and nearly every later unit uses them.
`
    },
    {
      id: 'hgspatia2-location',
      type: 'text' as const,
      content: `
## 📖 Absolute and Relative Location

| Concept | Meaning | Example |
|---|---|---|
| **Absolute location** | A precise position on Earth's surface, usually given as latitude and longitude | Denver, Colorado: about 39.7° N, 105.0° W |
| **Relative location** | A position described in relation to other places or features | Denver lies where the Great Plains meet the Front Range of the Rocky Mountains |

Absolute location never changes; it answers "exactly where?" Relative location *can* change in importance because the places around it change. When the Panama Canal opened in 1914, Panama's coordinates stayed the same, but its relative location became far more valuable: it now sat on the shortest sea route between the Atlantic and Pacific Oceans.

### How Coordinates Work
- **Latitude** measures distance north or south of the Equator (0° to 90° N or S). Lines of latitude are called parallels.
- **Longitude** measures distance east or west of the Prime Meridian, which runs through Greenwich, England (0° to 180° E or W). Lines of longitude are called meridians.
- A coordinate pair always gives latitude first: 39.7° N, 105.0° W.

> ⚠️ Relative location and **situation** are closely related. Relative location is the general idea (position compared with other places); situation is the term geographers use when they explain how that position affects a place's growth or function.
`
    },
    {
      id: 'hgspatia2-distance',
      type: 'text' as const,
      content: `
## Distance, Direction and Time-Space Compression

### Absolute vs. Relative Distance

| Type | Measured in | Example |
|---|---|---|
| **Absolute distance** | A standard unit: miles or kilometers | London to New York is about 5,570 km (3,460 miles) |
| **Relative distance** | Time, cost or social connection | London to New York is "about a seven-hour flight" |

Relative distance explains behavior better than absolute distance. Two suburbs 20 miles from a downtown are the same absolute distance away, but the one on a commuter rail line is relatively much closer.

### Absolute vs. Relative Direction
- **Absolute direction** uses the cardinal directions: north, south, east, west.
- **Relative direction** depends on perspective: "the Middle East," "out West" and "up north" only make sense from a particular place. "Middle East" is a European-centered label; from India the same region lies to the west.

### Time-Space Compression

**Time-space compression** is the shrinking of relative distance between places as transportation and communication technologies improve.

| Era | Crossing the North Atlantic |
|---|---|
| 1838 | The steamship *Great Western* sailed from Bristol, England, to New York in about 15 days |
| 1950s | Propeller airliners took roughly 12 to 18 hours with refueling stops |
| Today | A nonstop jet from London to New York takes about seven to eight hours |
| Today | A video call between the two cities is effectively instant |

The absolute distance never changed. What changed was **connectivity**, which allowed ideas, money and goods to move faster.

**Limitation:** time-space compression is **uneven**. A financial district in Singapore is "closer" to London than a rural village 50 km from Singapore that lacks broadband. Places that are poorly connected can be left relatively *more* remote as connected places pull together.

> 🔑 **AP Connection:** Time-space compression explains why diffusion now happens faster (Unit 3), why global supply chains are possible (Unit 7) and why world cities are linked more closely to each other than to their own hinterlands (Unit 6).
`
    },
    {
      id: 'hgspatia2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which description gives the absolute location of a city?',
            options: [
              '35.7° N latitude, 139.7° E longitude',
              'On a bay on the Pacific side of Honshu',
              'About 2.5 hours by bullet train from Osaka',
              'At the hub of its nation\'s rail network'
            ],
            correctAnswer: 0,
            explanation: 'Absolute location is a fixed position given by a coordinate system such as latitude and longitude. Describing a city by its bay, its travel time to another city or its place in a rail network gives its relative location.'
          },
          {
            question: 'A commuter says her office is "25 minutes away" even though it is 18 miles from home. She is describing',
            options: [
              'absolute distance',
              'relative distance',
              'absolute direction',
              'distance decay'
            ],
            correctAnswer: 1,
            explanation: 'Measuring separation in travel time rather than in miles or kilometers is relative distance. The 18 miles is the absolute distance, and distance decay describes how interaction declines with distance, not how distance is measured.'
          },
          {
            question: 'The absolute distance between New York and London has not changed since 1838. Which concept explains why the two cities now seem much closer?',
            options: [
              'Distance decay, because flows between far places weaken',
              'Time-space compression from faster transport and contact',
              'Relative direction, because the cities face each other',
              'Absolute location, because the coordinates were remeasured'
            ],
            correctAnswer: 1,
            explanation: 'Faster ships, jets and instant communication shrank the time and cost of moving between the cities, which is time-space compression. Distance decay would predict weaker ties, and neither direction nor coordinates changed.'
          }
        ]
      }
    },
    {
      id: 'hgspatia2-decay',
      type: 'text' as const,
      content: `
## Distance Decay and Flows

**Flows** are movements of people, goods, money, information or ideas between places. Geographers map flows to see how places are connected.

**Distance decay** is the decline in interaction between two places as the distance between them increases. The farther apart two places are, the fewer people, phone calls, trips and shipments move between them.

### Worked Example: A Grocery Store's Customers

A store surveys 1,000 shoppers and records how far each lives from the store. (Illustrative data.)

| Distance from store | Shoppers | Share of shoppers |
|---|---|---|
| Under 1 mile | 420 | 42% |
| 1 to 3 miles | 330 | 33% |
| 3 to 5 miles | 170 | 17% |
| 5 to 10 miles | 80 | 8% |

**Reading it:** each distance band contributes fewer shoppers than the one before, even though the outer rings cover far *more* land area. That falling curve is distance decay. If you graphed share of shoppers (vertical axis) against distance (horizontal axis), the line would start high on the left and fall steeply, then level off toward zero on the right.

### Why Distance Decay Weakens Over Time
Time-space compression flattens the decay curve. Online shopping lets a seller in another state reach a buyer as easily as a local store can. Distance still matters, but **relative** distance (shipping time, cost) matters more than miles.

**Limitation:** distance decay describes the *average* pattern. Strong cultural or economic ties can override it: many migrants from Mexico's state of Zacatecas go to Chicago, far beyond closer destinations, because earlier migrants built networks there.

> 🔑 **AP Connection:** Distance decay connects to Ravenstein's observation that most migrants move short distances (Unit 2), to contagious diffusion (Unit 3) and to the size of a city's market area (Unit 6).
`
    },
    {
      id: 'hgspatia2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use the grocery store table above.

**1)** How many shoppers live within 3 miles of the store (under 1 mile plus 1 to 3 miles)?

**2)** What percentage of shoppers live 3 or more miles from the store? Enter a number only.

**3)** Name the spatial concept the table illustrates: interaction declines as distance increases.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['750', '25', 'distance decay'],
        hint1: 'Add the first two rows of the Shoppers column.',
        hint2: 'Add the last two rows of the Share column, or subtract your first answer from 1,000 and convert.',
        hint3: 'Two words: the first is "distance".',
        explanation: '1) 420 + 330 = 750 shoppers. 2) 17% + 8% = 25%, which matches 250 of 1,000 shoppers. 3) The falling share with each distance band is distance decay.'
      }
    },
    {
      id: 'hgspatia2-distribution',
      type: 'text' as const,
      content: `
## Distribution: Density, Concentration and Pattern

A **distribution** is the arrangement of a feature across space. Every distribution can be described in three separate ways, and the AP exam expects you to keep them apart.

| Property | Question it answers | Vocabulary |
|---|---|---|
| **Density** | How many per unit of area? | High / low; people per square mile or km² |
| **Concentration** | How spread out are the features relative to each other? | **Clustered** (agglomerated) or **dispersed** (scattered) |
| **Pattern** | What geometric arrangement do they form? | Linear, grid (geometric), random |

### Density and Concentration Are Not the Same

Picture two square townships, each 36 square miles, each with 36 farmhouses.
- **Township A:** one farmhouse sits on each square-mile section, evenly spaced.
- **Township B:** all 36 houses sit together in a village in the center, with fields around it.

Both have a density of 1 house per square mile. Township A is **dispersed**; Township B is **clustered**. Density alone cannot tell them apart.

### Patterns on Real Landscapes, Described in Text
- **Linear:** On a satellite image of Egypt at night, the lights form a thin bright line along the Nile from Aswan north to Cairo, then fan out across the delta. Settlement follows the river because nearly all farmland depends on its water.
- **Grid (geometric):** Flying over Iowa, you see a checkerboard of square fields and straight roads one mile apart. This comes from the Land Ordinance of 1785, which surveyed land into townships 6 miles on a side, each divided into 36 sections of 1 square mile.
- **Clustered:** Semiconductor and software firms cluster in Silicon Valley, south of San Francisco Bay, to share skilled workers, suppliers and investors.
- **Dispersed:** In the same Iowa grid, farmhouses are scattered, often one or two per section.

> ⚠️ **Common error:** "High density" does not mean "clustered." A large city has high density, but its houses may be spread evenly across the urban area. Clustering describes how features sit *relative to each other*.

> 🔑 **AP Connection:** FRQs often ask you to "describe the distribution" shown on a map. A complete answer names at least one property (density, concentration or pattern) and uses specific locations from the map.
`
    },
    {
      id: 'hgspatia2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Distribution** 🔍

Choose the property or pattern each description shows best.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Towns strung out along a railroad across the Great Plains form a ___ pattern',
            options: ['linear', 'grid', 'random', 'dispersed']
          },
          {
            label: 'Car dealerships grouped together on one suburban road are ___',
            options: ['dispersed', 'clustered', 'gridded', 'linear only']
          },
          {
            label: 'A country with 140 people per square kilometer is described by its ___',
            options: ['pattern', 'concentration', 'density', 'situation']
          },
          {
            label: 'Square fields and roads laid out by the 1785 Land Ordinance form a ___ pattern',
            options: ['linear', 'grid', 'random', 'clustered']
          }
        ],
        correctAnswers: ['linear', 'clustered', 'density', 'grid'],
        hint1: 'Settlements following one transport route form a line.',
        hint2: 'The dealerships are close to each other rather than spread out.',
        hint3: 'A number per unit of area is one of the three properties of a distribution.',
        explanation: 'Towns along a railroad form a linear pattern. Dealerships grouped together are clustered. People per square kilometer is density. The township-and-range survey created a grid pattern.'
      }
    },
    {
      id: 'hgspatia2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two counties have the same population and the same land area. In one, residents live in a single town; in the other, they live on scattered farms. The counties differ in',
            options: [
              'density',
              'concentration',
              'absolute location',
              'scale of analysis'
            ],
            correctAnswer: 1,
            explanation: 'Equal population and equal area means equal density, so the difference is concentration: one county is clustered and the other dispersed. Absolute location and scale of analysis do not describe how the people are spread.'
          },
          {
            question: 'Online retailers now sell to buyers across a whole country. How does this change the distance decay pattern for retail shopping?',
            options: [
              'It reverses the curve, so far buyers outnumber near ones',
              'It flattens the curve, since relative distance has shrunk',
              'It steepens the curve, since shipping raises costs a lot',
              'It removes the curve, since absolute distance has shrunk'
            ],
            correctAnswer: 1,
            explanation: 'Fast shipping and online ordering shrink the relative distance between seller and buyer, so interaction falls off more slowly with distance. Absolute distance cannot shrink, and nearby buyers still generally outnumber distant ones.'
          },
          {
            question: 'From a European viewpoint, Southwest Asia was named the "Middle East." This label is an example of',
            options: [
              'relative direction',
              'absolute direction',
              'absolute location',
              'a formal region'
            ],
            correctAnswer: 0,
            explanation: 'The label "Middle East" only makes sense from Europe, so it is a relative direction. Absolute direction would use cardinal directions, and absolute location would use coordinates.'
          }
        ]
      }
    }
  ]
}
