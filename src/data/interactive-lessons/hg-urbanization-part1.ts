export const hgUrbanizationPart1Data = {
  topicSlug: 'hg-urbanization',
  sections: [
    {
      id: 'hgurb1-intro',
      type: 'text' as const,
      content: `
# 🌍 Urbanization

**Part 1 of 7 — The Growth of Cities**

---

## What Is Urbanization?

**Urbanization** is the increasing percentage of a population living in urban areas. Two distinct measures:

| Measure | Definition | Example |
|---------|-----------|---------|
| **Urbanization rate** | % of population living in cities | US: ~83%; India: ~35% |
| **Urban growth rate** | Speed at which urban population increases | Lagos: ~3.5% per year |

> 🔑 A country can have **high urbanization** (high % urban) but **low urban growth** (slow increase) — like the US. Or **low urbanization** but **high urban growth** — like sub-Saharan Africa.

---

## Models of Urban Structure

| Model | Creator | Key Idea |
|-------|---------|----------|
| **Concentric Zone** | Burgess (1925) | City grows outward in rings from CBD |
| **Sector Model** | Hoyt (1939) | Zones extend as wedges along transportation routes |
| **Multiple Nuclei** | Harris & Ullman (1945) | City has several centers of activity, not just one CBD |
| **Galactic City** | Harris (1990s) | Edge cities and suburbs surround a declining CBD |
| **Latin American City** | Griffin-Ford | CBD + spine of wealth; disamenity zones on outskirts |
| **African City** | De Blij | Three CBDs: colonial, traditional market, periodic market |
| **Southeast Asian City** | McGee | Port zone + CBD; no single dominant center |

The AP exam frequently asks you to compare these models and apply them to real cities.
      `
    },
    {
      id: 'hgurb1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Burgess Concentric Zone Model suggests that cities grow:',
            options: [
              'In wedge-shaped sectors along highways',
              'Outward in concentric rings from the CBD',
              'Around multiple separate nuclei',
              'Toward port areas and market zones'
            ],
            correctAnswer: 1,
            explanation: 'Burgess proposed that cities expand from the Central Business District outward in rings: CBD → zone of transition → working class → middle class → commuter zone.'
          },
          {
            question: 'A country with 25% of its population in cities but urban areas growing at 4% per year has:',
            options: [
              'High urbanization, high urban growth',
              'Low urbanization, high urban growth',
              'High urbanization, low urban growth',
              'Low urbanization, low urban growth'
            ],
            correctAnswer: 1,
            explanation: '25% urban = low urbanization level. But 4% growth rate = rapid urban growth. This is typical of Stage 2-3 countries experiencing rapid rural-to-urban migration.'
          }
        ]
      }
    },
    {
      id: 'hgurb1-content',
      type: 'text' as const,
      content: `
## Key Urban Concepts

| Term | Definition |
|------|-----------|
| **CBD** | Central Business District — commercial/financial core |
| **Suburbanization** | Movement from city centers to suburbs (common in developed countries) |
| **Counterurbanization** | Movement from urban to rural areas |
| **Gentrification** | Wealthier residents moving into lower-income neighborhoods, raising property values |
| **Edge city** | Suburban area with its own employment, shopping, and entertainment |
| **Megacity** | Urban area with 10+ million people (Tokyo, Delhi, Shanghai) |
| **Primate city** | Largest city dominates country disproportionately (Paris, London, Bangkok) |
| **Rank-size rule** | nth largest city has 1/n the population of the largest city |

### Primate City vs. Rank-Size Rule

- **Primate city pattern**: One city is 2-3x larger than the 2nd city (Bangkok, Paris)
- **Rank-size pattern**: Smooth distribution — city sizes follow a predictable hierarchy
- Most developing countries have **primate cities**; developed countries more often follow rank-size
      `
    },
    {
      id: 'hgurb1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) An urban area with 10 million or more people is called a _______.

2) When wealthier residents move into lower-income neighborhoods, raising property values, this is called _______.

3) The model where the largest city is 2-3x bigger than the second-largest is the _______ city pattern.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['megacity', 'gentrification', 'primate'],
        hint1: 'Tokyo, Delhi, and Shanghai are examples.',
        hint2: 'Often displaces existing lower-income residents.',
        hint3: 'One city dominates the urban hierarchy.',
        explanation: 'Megacity = 10M+ population. Gentrification = wealthier residents moving into poorer areas. Primate city = one dominant city far larger than all others.'
      }
    },
    {
      id: 'hgurb1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Urban Model** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A city with a wealthy spine extending from the CBD and squatter settlements on the periphery follows the ___',
            options: ['Latin American City Model', 'Concentric Zone Model', 'Multiple Nuclei Model', 'African City Model']
          },
          {
            label: 'A city where zones extend outward in wedges along major transportation routes follows the ___',
            options: ['Sector Model (Hoyt)', 'Concentric Zone Model', 'Galactic City Model', 'Southeast Asian Model']
          },
          {
            label: 'A sprawling metro area with edge cities and suburbs around a declining CBD follows the ___',
            options: ['Galactic City Model', 'Concentric Zone Model', 'Latin American City Model', 'Sector Model']
          }
        ],
        correctAnswers: ['Latin American City Model', 'Sector Model (Hoyt)', 'Galactic City Model'],
        hint1: 'Think of cities like Sao Paulo or Mexico City.',
        hint2: 'Zones shaped by highways and rail lines.',
        hint3: 'Think of modern American metropolitan areas like Houston or Atlanta.',
        explanation: 'Latin American model = spine + disamenity zones. Hoyt sector model = wedges along transport. Galactic city = suburban sprawl with edge cities.'
      }
    },
    {
      id: 'hgurb1-strategy',
      type: 'text' as const,
      content: `
## Causes of Urbanization Worldwide

### In Developing Countries (rapid urbanization)
1. **Rural-to-urban migration** — push: lack of rural jobs; pull: perceived urban opportunities
2. **Natural increase** — young age structure in cities leads to high birth rates
3. **Reclassification** — previously rural areas become classified as urban as they grow

### In Developed Countries (slow/stalled urbanization)
1. **Suburbanization** dominates — people leave central cities for suburbs
2. **Counterurbanization** — some move to rural areas (remote work enabling this trend)
3. **Gentrification** — select inner-city neighborhoods see population growth

> ⚠️ **AP Exam Tip:** Be prepared to analyze the CAUSES of urbanization in a specific region. The factors driving urbanization in Lagos, Nigeria differ significantly from those in London or Tokyo.
      `
    },
    {
      id: 'hgurb1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'France largest city, Paris, has about 5 times the population of its second-largest city, Marseille. This pattern is best described by:',
            options: [
              'The rank-size rule',
              'The primate city pattern',
              'The multiple nuclei model',
              'The gravity model'
            ],
            correctAnswer: 1,
            explanation: 'When one city is disproportionately larger than the next (5x in this case), it is a primate city. The rank-size rule would predict Marseille at half the population of Paris.'
          },
          {
            question: 'Which factor most directly explains rapid urbanization in sub-Saharan Africa today?',
            options: [
              'Gentrification of inner-city neighborhoods',
              'Suburban sprawl driven by automobile ownership',
              'Rural-to-urban migration driven by lack of rural economic opportunities',
              'Government-planned new capital cities'
            ],
            correctAnswer: 2,
            explanation: 'Rural-to-urban migration is the primary driver. Rural push factors (lack of jobs, services) and urban pull factors (perceived opportunities) are driving millions to cities like Lagos, Nairobi, and Kinshasa.'
          }
        ]
      }
    }
  ]
};
