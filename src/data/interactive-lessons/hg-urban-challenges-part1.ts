export const hgUrbanChallengesPart1Data = {
  topicSlug: 'hg-urban-challenges',
  sections: [
    {
      id: 'hguc1-intro',
      type: 'text' as const,
      content: `
# 🌍 Urban Challenges & Sustainability

**Part 1 of 7 — Problems of Rapid Urbanization**

---

## Challenges in the Developing World

| Challenge | Description | Example |
|-----------|-----------|---------|
| **Squatter settlements** | Informal housing built on land without permission | Favelas (Brazil), slums (Mumbai) |
| **Inadequate infrastructure** | Lack of clean water, sanitation, electricity | ~1 billion people in slums worldwide |
| **Traffic congestion** | Rapid growth outpaces transportation planning | Jakarta, Cairo, Lagos |
| **Air/water pollution** | Industrial and vehicle emissions, untreated sewage | Delhi air quality, Ganges River pollution |
| **Urban sprawl** | Unplanned expansion consuming agricultural land | Peri-urban growth around African cities |

> 🔑 **Squatter settlements** (also called informal settlements or shanty towns) are NOT always negative — they often develop their own economies, social networks, and infrastructure over time.

---

## Challenges in the Developed World

| Challenge | Description | Example |
|-----------|-----------|---------|
| **Suburban sprawl** | Low-density, car-dependent development | American Sun Belt cities (Phoenix, Houston) |
| **Inner-city decay** | Loss of industry, jobs, and population from city centers | Detroit, Cleveland (deindustrialization) |
| **Gentrification** | Displacement of lower-income residents by affluent newcomers | Brooklyn, San Francisco |
| **Brownfields** | Contaminated former industrial sites | Rust Belt factory sites |
| **Housing affordability** | Rising costs excluding lower-income residents | San Francisco, London, Sydney |
      `
    },
    {
      id: 'hguc1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which term describes informal housing built without legal ownership of the land?',
            options: [
              'Gentrified housing',
              'Squatter settlements',
              'Edge city developments',
              'Planned unit developments'
            ],
            correctAnswer: 1,
            explanation: 'Squatter settlements (favelas, slums, shanty towns) are built on land the residents do not legally own, typically on the urban periphery of rapidly growing developing-world cities.'
          },
          {
            question: 'Deindustrialization in cities like Detroit primarily caused:',
            options: [
              'Rapid population growth from immigration',
              'Loss of manufacturing jobs and population decline',
              'Gentrification of all neighborhoods',
              'Increased demand for downtown housing'
            ],
            correctAnswer: 1,
            explanation: 'When factories closed or relocated, cities like Detroit lost their economic base, leading to job losses, population decline, abandoned buildings, and fiscal crises.'
          }
        ]
      }
    },
    {
      id: 'hguc1-content',
      type: 'text' as const,
      content: `
## Urban Sustainability Initiatives

| Strategy | How It Works | Example |
|----------|-------------|---------|
| **Smart growth** | Compact, walkable, mixed-use development | Portland, Oregon urban growth boundary |
| **New Urbanism** | Designing walkable neighborhoods with diverse housing | Seaside, Florida; Celebration, Florida |
| **Greenbelts** | Protected open space around cities limiting sprawl | London Green Belt (established 1947) |
| **Transit-oriented development** | Building dense housing near public transit stations | Curitiba, Brazil BRT system |
| **Mixed-use zoning** | Combining residential, commercial, and retail in one area | Many European city centers |

### Measuring Urban Sustainability
- **Ecological footprint**: How much land/resources a city population requires
- **Urban heat island effect**: Cities are warmer than surrounding rural areas due to concrete, asphalt, reduced vegetation
- **Brownfield redevelopment**: Converting contaminated industrial sites to new uses
      `
    },
    {
      id: 'hguc1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Protected open space around a city designed to limit sprawl is called a _______.

2) The phenomenon where cities are warmer than surrounding rural areas is the urban _______ island effect.

3) Compact, walkable, mixed-use urban planning is called _______ growth.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['greenbelt', 'heat', 'smart'],
        hint1: 'London has a famous one.',
        hint2: 'Concrete and asphalt absorb and radiate this.',
        hint3: 'The opposite of suburban sprawl.',
        explanation: 'Greenbelts = protected open space. Urban heat island = cities warmer than rural areas. Smart growth = compact, walkable, mixed-use.'
      }
    },
    {
      id: 'hguc1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Solution** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Curitiba, Brazil rapid bus transit system is an example of ___',
            options: ['Transit-oriented development', 'Smart growth', 'Gentrification', 'Suburban sprawl']
          },
          {
            label: 'Portland urban growth boundary is an example of ___',
            options: ['Smart growth / greenbelt policy', 'New Urbanism', 'Gentrification', 'Edge city development']
          },
          {
            label: 'Converting an abandoned factory into apartments and shops is ___',
            options: ['Brownfield redevelopment', 'Urban sprawl', 'Deindustrialization', 'Squatter settlement']
          }
        ],
        correctAnswers: ['Transit-oriented development', 'Smart growth / greenbelt policy', 'Brownfield redevelopment'],
        hint1: 'Building around public transit.',
        hint2: 'A boundary limiting outward growth.',
        hint3: 'Reusing contaminated industrial land.',
        explanation: 'Curitiba BRT = transit-oriented development. Portland UGB = smart growth. Reusing old factories = brownfield redevelopment.'
      }
    },
    {
      id: 'hguc1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Urban Geography

When analyzing urban challenges on the AP exam:
1. **Identify whether the city is in a developing or developed country** — challenges differ significantly
2. **Connect challenges to urbanization causes** — rapid rural-to-urban migration drives informal settlements
3. **Know the models** — be ready to apply Burgess, Hoyt, Harris-Ullman, Griffin-Ford, or De Blij
4. **Solutions require trade-offs** — gentrification improves neighborhoods but displaces residents
5. **Use specific examples** — name real cities (Mumbai, Lagos, Detroit, Portland) in FRQ answers
      `
    },
    {
      id: 'hguc1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A city builds high-density apartments and stores within walking distance of a new metro station. This best illustrates:',
            options: [
              'Transit-oriented development',
              'Suburban sprawl',
              'Counter-urbanization',
              'Urban decay'
            ],
            correctAnswer: 0,
            explanation: 'Transit-oriented development concentrates dense, mixed-use development around public transit stations to reduce car dependency and promote walkability.'
          },
          {
            question: 'Gentrification in a neighborhood is MOST likely to result in:',
            options: [
              'Decreased property values and tax revenue',
              'Displacement of lower-income residents due to rising costs',
              'Increased availability of affordable housing',
              'A decrease in the neighborhood population'
            ],
            correctAnswer: 1,
            explanation: 'Gentrification raises property values, rents, and the cost of living, often displacing long-term lower-income residents who can no longer afford the neighborhood.'
          }
        ]
      }
    }
  ]
};
