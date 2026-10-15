export const hgSpatialConceptsPart1Data = {
  topicSlug: 'hg-spatial-concepts',
  sections: [
    {
      id: 'hgspatia1-intro',
      type: 'text' as const,
      content: `
# 🌍 Spatial Concepts & Geographic Data

**Part 1 of 7 — Location & Place**

Location is fundamental to geography. Site refers to internal characteristics of a place, while situation describes a place's relationship to its surroundings.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Site** | The physical characteristics of a place |
| **Situation** | The location of a place relative to other places |
| **Place** | A specific point with physical and human characteristics |
      `
    },
    {
      id: 'hgspatia1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Site refers to:',
            options: [
              'A place\'s relationship to its surroundings',
              'The physical characteristics of a location',
              'The cultural meaning people give a location',
              'A place\'s exact latitude and longitude'
            ],
            correctAnswer: 1,
            explanation: 'Site describes the internal physical characteristics of a place — terrain, climate, water features, etc.'
          },
          {
            question: 'Situation is best described as:',
            options: [
              'The internal physical features of a place',
              'A place\'s location relative to other places',
              'The total population living within a city',
              'Its exact latitude and longitude coordinates'
            ],
            correctAnswer: 1,
            explanation: 'Situation describes how a place relates to its surroundings — its relative position and connectivity.'
          }
        ]
      }
    },
    {
      id: 'hgspatia1-content',
      type: 'text' as const,
      content: `
## 📖 Site and Situation in Real Cities

Geographers explain why a settlement began and why it grew with two separate questions. **Site** asks what the ground itself offers. **Situation** asks how the place connects to everything around it.

### Site: What the Location Itself Offers

Site factors include landforms, elevation, water supply, soil, climate, a sheltered harbor and natural defenses. They explain why people chose that exact spot.

| City | Site | Why it mattered |
|---|---|---|
| **Paris** | Île de la Cité, an island in the Seine | The river protected early settlers and made the island an easy crossing point |
| **Mexico City** | Tenochtitlan was founded around 1325 on an island in Lake Texcoco | The lake gave defense and fertile raised fields (chinampas); today the drained lakebed clay makes the city sink as groundwater is pumped out and amplifies earthquake shaking |
| **New Orleans** | High ground on the natural levee of a bend in the Mississippi; much of the later city spread onto land below sea level | River access made it a port, but the low site left it exposed to flooding, as Hurricane Katrina showed in 2005 |

**Lesson from these cases:** a site that was an advantage at founding can become a liability as a city grows and technology changes.

### Situation: How the Place Connects

Situation describes a place's position relative to routes, resources, markets and other settlements.

| City | Situation | Effect on growth or function |
|---|---|---|
| **Chicago** | At the short portage between the Great Lakes and the Mississippi River system, later the hub where eastern and western railroads met | Grew from about 4,000 people in 1837 to more than 1 million by 1890 as a center for grain, lumber and meatpacking |
| **Istanbul** | Beside the Bosporus, the strait linking the Black Sea to the Mediterranean (through the Sea of Marmara), where Europe meets Asia | Has controlled trade and military passage for more than 2,000 years, as Byzantium, Constantinople and Istanbul |
| **Venice** | Once the middle link in Mediterranean trade between Europe and Asia | Lost much of its commercial importance after Portuguese ships reached India around Africa in 1498 and Atlantic trade grew, even though its site did not change |

### One City, Both Lenses: Chicago

- **Site:** flat, swampy, poorly drained land at the mouth of the Chicago River on Lake Michigan. In the 1850s and 1860s the city literally raised its streets and buildings to install sewers.
- **Situation:** the link between the Great Lakes shipping network and the Mississippi basin, then the nation's busiest rail junction.

Chicago's site was poor, yet its situation made it the largest city in the interior of the United States. This is a common AP pattern: **situation often matters more than site for long-term growth**, because situation changes as routes and technology change while the site stays largely fixed.

> ⚠️ **Common error:** a river can be part of either answer. The riverbank's water supply, flood risk or defensible bend is **site**. The river as a route to other places is **situation**. Ask whether you are describing the spot itself or its connections.

## Absolute vs. Relative Location

| Term | Question it answers | Chicago |
|---|---|---|
| **Absolute location** | Exactly where on Earth? (coordinates) | About 41.9° N, 87.6° W |
| **Relative location** | Where compared with other places? | On the southwest shore of Lake Michigan, about 1,150 km (710 miles) west of New York City |

Absolute location never changes. Relative location stays the same on the map, but its **importance** changes as the places and routes around it change. **Situation** is relative location used to explain a place's growth or function. Part 2 goes deeper into coordinates, distance and direction.

## Place: More Than a Point on a Map

**Place** is the specific combination of physical and human characteristics that makes a location unique: its climate and landforms together with its language, religion, architecture, economy and history.

- **Sense of place:** the meanings and feelings people attach to a place, such as a neighborhood's identity or a sacred site's importance to a religious community.
- **Toponym:** a place name, which often records a place's history. Saint Petersburg became Petrograd in 1914, Leningrad in 1924 and Saint Petersburg again in 1991; Bombay was officially renamed Mumbai in 1995.

> 🔑 **AP Connection:** Site and situation return in Unit 6 (CED Topic 6.1), where they explain the origin, function and growth of cities. When an FRQ asks why a city grew, name one **site** factor and one **situation** factor and connect each to what the city does.
      `
    },
    {
      id: 'hgspatia1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to the physical characteristics of a place?

2) What concept describes the location of a place relative to other places?

3) Name the term for a specific point with physical and human characteristics.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Site', 'Situation', 'Place'],
        hint1: 'Starts with: S',
        hint2: 'Starts with: S',
        hint3: 'Starts with: P',
        explanation: 'Expected answers: Site (The physical characteristics of a place), Situation (The location of a place relative to other places), and Place (A specific point with physical and human characteristics).'
      }
    },
    {
      id: 'hgspatia1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The physical characteristics of a place is called ___',
            options: ['Site', 'Situation', 'Place', 'Region']
          },
          {
            label: 'The location of a place relative to other places describes ___',
            options: ['Site', 'Situation', 'Place', 'Region']
          },
          {
            label: 'A specific point with physical and human characteristics is known as ___',
            options: ['Place', 'Site', 'Situation', 'Region']
          }
        ],
        correctAnswers: ['Site', 'Situation', 'Place'],
        hint1: 'Paris began on an island in the Seine: the spot itself.',
        hint2: 'Chicago grew because of its links to the Great Lakes and the railroads.',
        hint3: 'The unique mix of physical and human traits at one location.',
        explanation: 'Site is the physical character of the spot itself. Situation is its position relative to other places. Place is the specific mix of physical and human characteristics at a location. A region is a larger area that shares characteristics, not a single location.'
      }
    },
    {
      id: 'hgspatia1-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'t confuse **Site** with **Situation** — while related, they address different aspects of Spatial Concepts & Geographic Data.
- **Place** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about location & place, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect location & place to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgspatia1-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'New York City\'s harbor, rivers, and flat terrain describe its:',
            options: [
              'Situation — relative to other places',
              'Site — internal physical characteristics',
              'Region — an area of shared characteristics',
              'Distribution — spatial arrangement'
            ],
            correctAnswer: 1,
            explanation: 'The physical characteristics of NYC itself (harbor, rivers, terrain) are site characteristics.'
          },
          {
            question: 'Describing NYC as a gateway between Europe and the American interior describes its:',
            options: [
              'Site — its harbor and the land it occupies',
              'Situation — its links to other places',
              'Perceptual region — how outsiders imagine it',
              'Formal region — an area with one shared trait'
            ],
            correctAnswer: 1,
            explanation: 'NYC\'s role as a gateway describes its situation — how it relates to other places and trade routes.'
          }
        ]
      }
    }
  ]
}
