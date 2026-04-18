const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

function write(name, content) {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Wrote:', name);
}

// ─── 1. Population Growth ───
write('hg-population-growth-part1.ts', `export const hgPopulationGrowthPart1Data = {
  topicSlug: 'hg-population-growth',
  sections: [
    {
      id: 'hgpop1-intro',
      type: 'text' as const,
      content: \`
# 🌍 Population & Growth Patterns

**Part 1 of 7 — Understanding Global Population Dynamics**

---

## Key Population Measures

| Measure | Definition | Formula |
|---------|-----------|---------|
| **Crude Birth Rate (CBR)** | Births per 1,000 people per year | (Births / Total Pop) × 1,000 |
| **Crude Death Rate (CDR)** | Deaths per 1,000 people per year | (Deaths / Total Pop) × 1,000 |
| **Rate of Natural Increase (RNI)** | Annual population growth from births vs deaths | (CBR − CDR) / 10 = % |
| **Total Fertility Rate (TFR)** | Average children per woman over her lifetime | Typically 1.0–7.0 |
| **Infant Mortality Rate (IMR)** | Deaths of infants < 1 year per 1,000 live births | Key development indicator |
| **Doubling Time** | Years for population to double | ~70 / RNI% |

> 🔑 **AP Key Point:** RNI does NOT include migration. Net migration must be added separately for total population change.

---

## The Demographic Transition Model (DTM)

The DTM explains how countries move from high birth/death rates to low birth/death rates through **4 (or 5) stages**:

| Stage | CBR | CDR | RNI | Characteristics | Example |
|-------|-----|-----|-----|----------------|---------|
| **1** | High | High | ~0% | Pre-industrial; disease, famine | No modern countries |
| **2** | High | **Falling** | **High** | Improved sanitation, medicine | Sub-Saharan Africa |
| **3** | **Falling** | Low | Moderate | Urbanization, education, contraception | India, Brazil |
| **4** | Low | Low | ~0% | Post-industrial; gender equity | USA, France |
| **5** | **Very low** | Low | **Negative** | Below-replacement TFR (<2.1) | Japan, Germany |
      \`
    },
    {
      id: 'hgpop1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'In Stage 2 of the Demographic Transition Model, population grows rapidly because:',
            options: [
              'CBR and CDR are both declining at equal rates',
              'CDR drops sharply while CBR remains high',
              'CBR increases rapidly due to government incentives',
              'Immigration exceeds emigration'
            ],
            correctAnswer: 1,
            explanation: 'Stage 2 is characterized by a sharp decline in CDR (due to improved medicine, sanitation, food supply) while CBR stays high — creating a large gap and rapid natural increase.'
          },
          {
            question: 'A country has a CBR of 32 and CDR of 8. Its Rate of Natural Increase is:',
            options: [
              '0.24%',
              '2.4%',
              '24%',
              '4.0%'
            ],
            correctAnswer: 1,
            explanation: 'RNI = (CBR − CDR) / 10 = (32 − 8) / 10 = 2.4%. Its doubling time would be approximately 70 / 2.4 ≈ 29 years.'
          },
          {
            question: 'Which stage of the DTM is associated with below-replacement fertility (TFR < 2.1)?',
            options: [
              'Stage 2',
              'Stage 3',
              'Stage 4',
              'Stage 5'
            ],
            correctAnswer: 3,
            explanation: 'Stage 5 features TFR well below replacement level (2.1), leading to population decline. Countries like Japan, South Korea, and Italy are experiencing this.'
          }
        ]
      }
    },
    {
      id: 'hgpop1-content',
      type: 'text' as const,
      content: \`
## Population Pyramids

Population pyramids (age-sex diagrams) visually represent a country's age and gender structure:

| Shape | Stage | What It Tells You |
|-------|-------|------------------|
| **Wide base, narrow top** | Stage 2 | High birth rates, low life expectancy, rapid growth |
| **Rectangular / column** | Stage 4 | Low birth & death rates, stable population |
| **Inverted / top-heavy** | Stage 5 | Aging population, declining births, potential shrinkage |
| **Bulge in middle** | Varies | Baby boom generation or large working-age cohort |

### Dependency Ratio

The dependency ratio measures the proportion of non-working-age population (under 15 and over 64) to working-age population (15–64), multiplied by 100.

- **High youth dependency** → need schools, healthcare for children (Stage 2-3 countries)
- **High elderly dependency** → need pensions, elder care (Stage 4-5 countries)
      \`
    },
    {
      id: 'hgpop1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The model that describes the transition from high birth/death rates to low birth/death rates is called the Demographic _______ Model.

2) A TFR below 2.1 is called _______-replacement fertility.

3) The approximate doubling time for a population with 2% growth is _______ years.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['Transition', 'below', '35'],
        hint1: 'Four-to-five stage model of population change.',
        hint2: 'Fertility is too low to maintain population size.',
        hint3: 'Doubling time ≈ 70 / growth rate.',
        explanation: 'The Demographic Transition Model describes stages of population change. Below-replacement = TFR < 2.1. Doubling time = 70/2 = 35 years.'
      }
    },
    {
      id: 'hgpop1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the DTM Stage** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Japan has a TFR of 1.3, aging population, and declining total population. This is ___',
            options: ['Stage 5', 'Stage 4', 'Stage 3', 'Stage 2']
          },
          {
            label: 'Nigeria has a CBR of 36, CDR of 12, and rapid population growth. This is ___',
            options: ['Stage 2', 'Stage 3', 'Stage 4', 'Stage 5']
          },
          {
            label: 'A population pyramid with a very wide base tapering sharply indicates ___',
            options: ['High birth rate with low life expectancy', 'Low birth rate with high life expectancy', 'Equal birth and death rates', 'An aging population']
          }
        ],
        correctAnswers: ['Stage 5', 'Stage 2', 'High birth rate with low life expectancy'],
        hint1: 'Below-replacement TFR and population decline.',
        hint2: 'High CBR + rapidly falling CDR = rapid growth.',
        hint3: 'Lots of young people, few old people.',
        explanation: 'Japan = Stage 5 (below-replacement fertility). Nigeria = Stage 2 (high CBR, falling CDR). Wide-base pyramid = many children, few elderly.'
      }
    },
    {
      id: 'hgpop1-strategy',
      type: 'text' as const,
      content: \`
## Malthus vs. Modern Population Theory

| Thinker | Argument |
|---------|---------|
| **Thomas Malthus** (1798) | Population grows geometrically; food grows arithmetically → inevitable famine |
| **Ester Boserup** | Necessity is the mother of invention — population pressure drives agricultural innovation |
| **Neo-Malthusians** | Earth has carrying capacity limits (resources, climate, water) |
| **Cornucopians** | Technology and human ingenuity will always find solutions |

### AP Exam Strategies for Population Questions

- Always identify the **DTM stage** first — it frames everything else
- RNI does NOT include migration — read carefully
- "Natural increase" vs "total growth" — know the difference
- Population pyramids: read the SHAPE, not just the numbers
- Know anti-natalist (China one-child) vs pro-natalist (France child subsidies) policies
      \`
    },
    {
      id: 'hgpop1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Country X has a CBR of 12, CDR of 14, and a net immigration rate of 5 per 1,000. Country X total population is:',
            options: [
              'Increasing, because immigration offsets natural decrease',
              'Decreasing, because CDR exceeds CBR',
              'Stable, because births equal deaths',
              'Cannot be determined from this data'
            ],
            correctAnswer: 0,
            explanation: 'Natural change = CBR minus CDR = 12 minus 14 = negative 2 per 1,000. But net immigration = +5 per 1,000. Total change = negative 2 + 5 = +3 per 1,000. Population is increasing.'
          },
          {
            question: 'Ester Boserup would most likely respond to Malthus by arguing that:',
            options: [
              'Population growth will inevitably outpace food production',
              'Population pressure stimulates innovation and intensification of agriculture',
              'Governments must limit population growth through strict policy',
              'Resource depletion is unavoidable regardless of technology'
            ],
            correctAnswer: 1,
            explanation: 'Boserup argued that population growth DRIVES agricultural innovation — people find new techniques (irrigation, terracing, fertilizers) when they need to feed more people.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 2. Migration ───
write('hg-migration-part1.ts', `export const hgMigrationPart1Data = {
  topicSlug: 'hg-migration',
  sections: [
    {
      id: 'hgmig1-intro',
      type: 'text' as const,
      content: \`
# 🌍 Migration

**Part 1 of 7 — Push/Pull Factors and Migration Patterns**

---

## Types of Migration

| Type | Definition | Example |
|------|-----------|---------|
| **Immigration** | Moving INTO a country | Mexican family moving to the US |
| **Emigration** | Moving OUT of a country | Syrian refugees leaving Syria |
| **Internal migration** | Moving within a country | Rural-to-urban migration in China |
| **International migration** | Crossing national borders | Polish workers moving to the UK |
| **Voluntary migration** | By choice, for opportunity | Economic migration for jobs |
| **Forced/involuntary migration** | No choice; fleeing danger | Refugees from war or persecution |

---

## Ravenstein Laws of Migration (1885)

Ernst Ravenstein identified patterns that still apply today:

1. Most migrants move a **short distance**
2. Long-distance migrants tend to go to **major cities**
3. Each migration stream produces a **counter-stream**
4. **Urban residents** are less likely to migrate than rural
5. **Females** predominate in short-distance migration
6. Migration increases with **economic development** and **technology**

---

## Push and Pull Factors

| Push Factors (leave) | Pull Factors (attract) |
|---------------------|----------------------|
| War / conflict | Peace / stability |
| Religious / ethnic persecution | Religious / ethnic tolerance |
| Unemployment / poverty | Job opportunities |
| Environmental disaster | Better environment |
| Lack of services (education, healthcare) | Access to services |
| Political oppression | Political freedom |
      \`
    },
    {
      id: 'hgmig1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'According to Ravenstein, most migrants travel:',
            options: [
              'Long distances to find the best opportunities',
              'Short distances, often to nearby cities',
              'Exclusively between countries',
              'In family groups of 10 or more'
            ],
            correctAnswer: 1,
            explanation: 'Ravenstein first law: most migration is short-distance. People tend to move to the nearest place that offers better opportunities.'
          },
          {
            question: 'A family fleeing civil war in Syria and resettling in Germany is an example of:',
            options: [
              'Voluntary internal migration',
              'Forced international migration',
              'Chain migration',
              'Cyclic movement'
            ],
            correctAnswer: 1,
            explanation: 'They are fleeing danger (forced, not voluntary) and crossing international borders (international, not internal). This makes them refugees.'
          },
          {
            question: 'Which of the following is a PULL factor?',
            options: [
              'Drought destroying farmland',
              'Job opportunities in a growing city',
              'Political persecution by government',
              'Civil war and violence'
            ],
            correctAnswer: 1,
            explanation: 'Pull factors ATTRACT migrants to a destination. Job opportunities pull people toward a new location, while drought, persecution, and war are all push factors.'
          }
        ]
      }
    },
    {
      id: 'hgmig1-content',
      type: 'text' as const,
      content: \`
## Intervening Obstacles and Opportunities

**Intervening obstacles** are barriers that make migration harder:
- Physical: oceans, mountains, deserts
- Political: borders, visa requirements, walls
- Economic: cost of moving, language barriers
- Cultural: discrimination, unfamiliarity

**Intervening opportunities** occur when migrants find acceptable conditions before reaching their intended destination — they settle "along the way."

## Key Migration Concepts

| Term | Definition |
|------|-----------|
| **Chain migration** | Migrants follow relatives/friends who migrated first |
| **Step migration** | Moving in stages (village → town → city → abroad) |
| **Guest workers** | Temporary labor migrants (e.g., Turkish workers in Germany) |
| **Remittances** | Money sent home by migrants; major income source for developing countries |
| **Brain drain** | Loss of educated/skilled people from developing countries |
| **Diaspora** | Scattered population sharing a common origin (Jewish, Armenian, African diasporas) |
      \`
    },
    {
      id: 'hgmig1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Factors that drive people away from a location are called _______ factors.

2) Money sent home by migrants working abroad is called _______.

3) The loss of educated professionals from a developing country is called brain _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['push', 'remittances', 'drain'],
        hint1: 'Pushes people to leave.',
        hint2: 'A major source of income for countries like Mexico and the Philippines.',
        hint3: 'Skilled workers leave their home country.',
        explanation: 'Push factors drive people away. Remittances = money sent home by migrants. Brain drain = loss of educated workers to other countries.'
      }
    },
    {
      id: 'hgmig1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Migration** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'A farmer moves from a village to a nearby town, then later to the capital city. This is ___',
            options: ['Step migration', 'Chain migration', 'Forced migration', 'Cyclic movement']
          },
          {
            label: 'An immigrant helps their cousin get a visa and job in their new country. This is ___',
            options: ['Chain migration', 'Step migration', 'Forced migration', 'Guest worker program']
          },
          {
            label: 'The Atlantic Ocean preventing easy movement from Africa to South America is an ___',
            options: ['Intervening obstacle', 'Intervening opportunity', 'Pull factor', 'Push factor']
          }
        ],
        correctAnswers: ['Step migration', 'Chain migration', 'Intervening obstacle'],
        hint1: 'Moving in stages toward a destination.',
        hint2: 'Following family/friends who already migrated.',
        hint3: 'A physical barrier to migration.',
        explanation: 'Step migration = moving in stages. Chain migration = following family connections. Physical barriers (oceans, mountains) are intervening obstacles.'
      }
    },
    {
      id: 'hgmig1-strategy',
      type: 'text' as const,
      content: \`
## Major Global Migration Patterns

### Historical
- **Transatlantic slave trade** (1500s–1800s): Largest forced migration in history
- **European colonization** (1500s–1900s): Mass emigration to Americas, Australia, Africa
- **Great Migration** (1910s–1970s): African Americans from rural South to northern cities

### Contemporary
- **South to North**: Mexico to US, North Africa to Europe, South Asia to Gulf States
- **Rural to Urban**: Largest ongoing migration worldwide; drives urbanization
- **Refugee flows**: Syria, Afghanistan, South Sudan, Myanmar → neighboring countries and Europe

> ⚠️ **AP Exam Tip:** Questions about migration almost always require you to identify push/pull factors AND classify the migration type. Be prepared to analyze a scenario and apply multiple concepts together.
      \`
    },
    {
      id: 'hgmig1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'India loses many doctors and engineers to the United States and United Kingdom. This phenomenon best illustrates:',
            options: [
              'Chain migration from India',
              'Brain drain from a developing country',
              'Intervening opportunities in neighboring countries',
              'Forced migration due to political persecution'
            ],
            correctAnswer: 1,
            explanation: 'Brain drain = the emigration of highly educated and skilled professionals from developing countries to developed ones, reducing the home country human capital.'
          },
          {
            question: 'A refugee camp in Jordan houses 80,000 Syrian families who fled civil war. Which pair of push-pull factors best explains this?',
            options: [
              'Push: economic opportunity; Pull: cultural similarity',
              'Push: armed conflict; Pull: proximity and relative safety',
              'Push: natural disaster; Pull: higher wages',
              'Push: overpopulation; Pull: available farmland'
            ],
            correctAnswer: 1,
            explanation: 'Syrian refugees were pushed by civil war (forced migration) and pulled to Jordan by geographic proximity and relative stability — consistent with Ravenstein law of short-distance migration.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 3. Urbanization ───
write('hg-urbanization-part1.ts', `export const hgUrbanizationPart1Data = {
  topicSlug: 'hg-urbanization',
  sections: [
    {
      id: 'hgurb1-intro',
      type: 'text' as const,
      content: \`
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
      \`
    },
    {
      id: 'hgurb1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
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
      content: \`
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
      \`
    },
    {
      id: 'hgurb1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) An urban area with 10 million or more people is called a _______.

2) When wealthier residents move into lower-income neighborhoods, raising property values, this is called _______.

3) The model where the largest city is 2-3x bigger than the second-largest is the _______ city pattern.
      \`,
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
      content: \`
**Match the Urban Model** 🔍
      \`,
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
      content: \`
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
      \`
    },
    {
      id: 'hgurb1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
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
`);

// ─── 4. Urban Challenges ───
write('hg-urban-challenges-part1.ts', `export const hgUrbanChallengesPart1Data = {
  topicSlug: 'hg-urban-challenges',
  sections: [
    {
      id: 'hguc1-intro',
      type: 'text' as const,
      content: \`
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
      \`
    },
    {
      id: 'hguc1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
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
      content: \`
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
      \`
    },
    {
      id: 'hguc1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Protected open space around a city designed to limit sprawl is called a _______.

2) The phenomenon where cities are warmer than surrounding rural areas is the urban _______ island effect.

3) Compact, walkable, mixed-use urban planning is called _______ growth.
      \`,
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
      content: \`
**Match the Solution** 🔍
      \`,
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
      content: \`
## AP Exam Strategy: Urban Geography

When analyzing urban challenges on the AP exam:
1. **Identify whether the city is in a developing or developed country** — challenges differ significantly
2. **Connect challenges to urbanization causes** — rapid rural-to-urban migration drives informal settlements
3. **Know the models** — be ready to apply Burgess, Hoyt, Harris-Ullman, Griffin-Ford, or De Blij
4. **Solutions require trade-offs** — gentrification improves neighborhoods but displaces residents
5. **Use specific examples** — name real cities (Mumbai, Lagos, Detroit, Portland) in FRQ answers
      \`
    },
    {
      id: 'hguc1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
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
`);

console.log('Done with batch 1 (4 files)');
