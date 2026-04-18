const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

function write(name, content) {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Wrote:', name);
}

// ─── 5. Agricultural Origins ───
write('hg-agricultural-origins-part1.ts', `export const hgAgriculturalOriginsPart1Data = {
  topicSlug: 'hg-agricultural-origins',
  sections: [
    {
      id: 'hgao1-intro',
      type: 'text' as const,
      content: \`
# 🌍 Agricultural Origins & Hearths

**Part 1 of 7 — The First Agricultural Revolution**

---

## Agricultural Revolutions

| Revolution | When | Key Change |
|-----------|------|-----------|
| **First (Neolithic)** | ~10,000 BCE | Shift from hunting/gathering to farming |
| **Second** | 1700s–1900s | Mechanization, crop rotation, enclosure movement |
| **Third (Green)** | 1960s–1980s | High-yield seeds, chemical fertilizers, irrigation |

> 🔑 **AP Key Point:** The AP exam tests **where** agriculture originated (hearths), **why** it spread (diffusion), and **how** each revolution changed society.

---

## Agricultural Hearths

Agriculture was independently invented in multiple locations:

| Hearth | Region | Key Crops/Animals |
|--------|--------|------------------|
| **Fertile Crescent** | SW Asia (Iraq/Syria) | Wheat, barley, sheep, goats |
| **Nile Valley** | Egypt | Wheat, flax |
| **Indus Valley** | South Asia | Cotton, zebu cattle |
| **Yellow River** | East Asia | Rice, millet, pigs |
| **Mesoamerica** | Central America | Maize (corn), squash, beans |
| **Andes** | South America | Potatoes, llamas, alpacas |

> These hearths are examples of **independent invention** — agriculture was NOT spread from a single origin.
      \`
    },
    {
      id: 'hgao1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The Fertile Crescent is located in modern-day:',
            options: [
              'Southwest Asia (Iraq/Syria region)',
              'Southeast Asia',
              'Sub-Saharan Africa',
              'Central America'
            ],
            correctAnswer: 0,
            explanation: 'The Fertile Crescent spans parts of modern Iraq, Syria, Lebanon, and Turkey — it is in Southwest Asia, one of the earliest agricultural hearths.'
          },
          {
            question: 'The First Agricultural Revolution is significant because it:',
            options: [
              'Introduced mechanized farming equipment',
              'Shifted humans from nomadic hunting to settled farming',
              'Introduced genetically modified crops worldwide',
              'Caused the Industrial Revolution directly'
            ],
            correctAnswer: 1,
            explanation: 'The Neolithic (First Agricultural) Revolution ~10,000 BCE shifted human societies from nomadic hunter-gatherers to settled agricultural communities — the foundation of civilization.'
          }
        ]
      }
    },
    {
      id: 'hgao1-content',
      type: 'text' as const,
      content: \`
## How Agriculture Spread

From each hearth, agricultural practices spread through **diffusion**:

| Diffusion Type | How It Worked | Example |
|---------------|--------------|---------|
| **Relocation** | Farmers migrated, bringing seeds and techniques | Bantu migration spread farming across Africa |
| **Contagious** | Neighboring peoples adopted farming from observation | Grain farming spread across the Fertile Crescent |
| **Stimulus** | The IDEA of farming spread, but crops/methods adapted locally | Different grains domesticated in different climates |

### Consequences of the First Agricultural Revolution

1. **Sedentary settlements** — permanent villages, then cities
2. **Population growth** — reliable food surplus supported more people
3. **Social stratification** — surplus led to specialization, elites, inequality
4. **Environmental change** — deforestation, irrigation, soil depletion
5. **Gender roles shifted** — women often became primary farmers in early societies
      \`
    },
    {
      id: 'hgao1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The First Agricultural Revolution is also called the _______ Revolution.

2) Locations where agriculture was independently invented are called agricultural _______.

3) The spread of farming techniques from hearths to other regions is called _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['Neolithic', 'hearths', 'diffusion'],
        hint1: 'Named for the New Stone Age.',
        hint2: 'Multiple independent origins worldwide.',
        hint3: 'The spread of ideas and practices across space.',
        explanation: 'The Neolithic Revolution = First Agricultural Revolution. Hearths = locations of independent invention. Diffusion = the spread of agricultural practices.'
      }
    },
    {
      id: 'hgao1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Hearth** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Maize (corn), squash, and beans were first domesticated in ___',
            options: ['Mesoamerica', 'Fertile Crescent', 'Yellow River valley', 'Indus Valley']
          },
          {
            label: 'Wheat, barley, sheep, and goats were first domesticated in ___',
            options: ['Fertile Crescent', 'Nile Valley', 'Mesoamerica', 'Andes']
          },
          {
            label: 'Potatoes, llamas, and alpacas were first domesticated in ___',
            options: ['Andes (South America)', 'Indus Valley', 'Yellow River valley', 'Fertile Crescent']
          }
        ],
        correctAnswers: ['Mesoamerica', 'Fertile Crescent', 'Andes (South America)'],
        hint1: 'Central America and modern-day Mexico.',
        hint2: 'Southwest Asia between the Tigris and Euphrates.',
        hint3: 'High-altitude South America.',
        explanation: 'Mesoamerica = maize/beans/squash. Fertile Crescent = wheat/barley/sheep. Andes = potatoes/llamas.'
      }
    },
    {
      id: 'hgao1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Agricultural Geography

- **Know all 6 major hearths** and their key domesticates — this is frequently tested
- Connect agricultural revolutions to population changes (DTM stages)
- The Second Agricultural Revolution enabled the Industrial Revolution (fewer farmers needed = urban labor supply)
- The Green Revolution (Third) saved millions from famine but also caused environmental issues
- Be prepared to discuss **positive AND negative** consequences of each revolution
      \`
    },
    {
      id: 'hgao1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The fact that maize was domesticated in Mesoamerica and rice in East Asia demonstrates:',
            options: [
              'Independent invention of agriculture in multiple hearths',
              'That all agriculture originated from one source',
              'Colonial diffusion of crop knowledge',
              'That climate has no effect on crop domestication'
            ],
            correctAnswer: 0,
            explanation: 'Different crops were domesticated independently in different regions — this is independent invention, NOT diffusion from a single origin.'
          },
          {
            question: 'The Green Revolution of the 1960s-1980s primarily increased food production through:',
            options: [
              'Expansion of farmland through deforestation',
              'High-yield crop varieties, chemical fertilizers, and irrigation',
              'Return to traditional farming methods',
              'Genetic modification and cloning'
            ],
            correctAnswer: 1,
            explanation: 'The Green Revolution (Third Agricultural Revolution) used scientific advances — especially high-yield varieties of wheat and rice, along with chemical inputs and irrigation — to dramatically increase yields in developing countries.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 6. Agricultural Practices ───
write('hg-agricultural-practices-part1.ts', `export const hgAgriculturalPracticesPart1Data = {
  topicSlug: 'hg-agricultural-practices',
  sections: [
    {
      id: 'hgap1-intro',
      type: 'text' as const,
      content: \`
# 🌍 Agricultural Practices & Land Use

**Part 1 of 7 — From Subsistence to Commercial Farming**

---

## Types of Agriculture

| Type | Goal | Scale | Technology | Example |
|------|------|-------|-----------|---------|
| **Subsistence** | Feed family/community | Small | Low — hand tools | Shifting cultivation, pastoral nomadism |
| **Commercial** | Sell for profit | Large | High — machinery | Grain farming, livestock ranching |

> 🔑 **AP Key Point:** The AP exam focuses on WHERE different farming types occur and WHY — connecting agriculture to climate, development level, and cultural practices.

---

## Subsistence Agriculture Types

| Practice | Description | Location |
|----------|-----------|----------|
| **Shifting cultivation** | Slash-and-burn; rotate fields every few years | Tropical regions (Amazon, Central Africa, SE Asia) |
| **Pastoral nomadism** | Herding livestock; moving with grazing | Arid/semi-arid regions (Sahel, Central Asia) |
| **Intensive subsistence (wet rice)** | Paddy rice on small plots; high labor | East and South Asia (China, India, Bangladesh) |
| **Intensive subsistence (non-rice)** | Wheat, barley on small plots; high labor | Drier parts of Asia |
| **Plantation** | Large-scale tropical crops for export | Tropical developing countries (coffee, rubber, palm oil) |
      \`
    },
    {
      id: 'hgap1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Shifting cultivation (slash-and-burn) is a form of:',
            options: [
              'Commercial agriculture',
              'Subsistence agriculture',
              'Plantation farming',
              'Mixed crop and livestock farming'
            ],
            correctAnswer: 1,
            explanation: 'Shifting cultivation is a subsistence practice where farmers clear forest, grow crops until soil is depleted, then move on. It feeds the local community, not external markets.'
          },
          {
            question: 'Pastoral nomadism is most commonly practiced in:',
            options: [
              'Humid tropical rainforests',
              'Arid and semi-arid grasslands',
              'Dense urban areas',
              'Temperate coastal regions'
            ],
            correctAnswer: 1,
            explanation: 'Pastoral nomadism occurs in arid/semi-arid regions where farming is difficult — herders move livestock to follow water and grazing land (Sahel, Central Asia, Middle East).'
          }
        ]
      }
    },
    {
      id: 'hgap1-content',
      type: 'text' as const,
      content: \`
## The Von Thunen Model (1826)

Johann von Thunen proposed that agricultural land use forms concentric rings around a central market:

| Ring | Activity | Why Here? |
|------|----------|----------|
| **1 (closest)** | Dairy, market gardens | Perishable goods need quick transport |
| **2** | Forest | Heavy timber expensive to transport |
| **3** | Field crops (grain) | Less perishable, cheaper to transport |
| **4 (farthest)** | Ranching/livestock | Animals can walk to market |

**Assumptions:** Flat terrain, single market, uniform soil, no roads.

**Real-world modifications:** Rivers, highways, and multiple markets distort the rings. Modern refrigeration reduces the perishability constraint. But the core principle — **transportation cost shapes land use** — remains valid.

## Commercial Agriculture Types

| Practice | Description | Location |
|----------|-----------|----------|
| **Mixed crop and livestock** | Both crops and animals on same farm | US Midwest, Western Europe |
| **Dairy farming** | Milk production near urban markets | US Northeast, Northern Europe, New Zealand |
| **Grain farming** | Large-scale wheat, corn, rice | US Great Plains, Canadian Prairies, Ukraine |
| **Livestock ranching** | Extensive grazing on large areas | US West, Argentina, Australia |
| **Mediterranean agriculture** | Olives, grapes, fruits, vegetables | Southern Europe, California, Chile |
      \`
    },
    {
      id: 'hgap1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Agriculture that feeds the farmer family rather than producing for sale is called _______ agriculture.

2) Agriculture that produces crops primarily for sale and profit is called _______ agriculture.

3) The model showing concentric rings of agricultural land use around a market is the _______ Model.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['subsistence', 'commercial', 'Von Thunen'],
        hint1: 'The opposite of commercial farming.',
        hint2: 'Sold on markets for money.',
        hint3: 'Named after a German economist.',
        explanation: 'Subsistence = farming to feed your family. Commercial = farming for profit. Von Thunen Model = concentric rings based on transportation costs.'
      }
    },
    {
      id: 'hgap1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Agriculture Type** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'In Von Thunen model, dairy farming is in ring 1 because ___',
            options: ['Dairy products are perishable and expensive to transport', 'Cows need the most fertile soil', 'Dairy is the most profitable farming type', 'Government regulations require it']
          },
          {
            label: 'Wet rice intensive subsistence farming is primarily found in ___',
            options: ['East and South Asia', 'Sub-Saharan Africa', 'Western Europe', 'North America']
          },
          {
            label: 'Large-scale ranching occupies the outermost ring in Von Thunen model because ___',
            options: ['Animals can walk to market and need lots of land', 'Ranching is the most profitable type', 'Ranchers prefer isolation', 'Government land grants are only available far from cities']
          }
        ],
        correctAnswers: ['Dairy products are perishable and expensive to transport', 'East and South Asia', 'Animals can walk to market and need lots of land'],
        hint1: 'Think about what happens to milk in hot weather without refrigeration.',
        hint2: 'Where is rice the staple food crop?',
        hint3: 'Land is cheap far from the market.',
        explanation: 'Dairy = perishable, must be near market. Wet rice = East/South Asia. Ranching = animals self-transport and need extensive cheap land.'
      }
    },
    {
      id: 'hgap1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Agricultural Geography

- Always connect agriculture type to **climate** and **development level**
- Von Thunen is a theoretical model — know its assumptions AND real-world modifications
- **Bid-rent theory** is similar to Von Thunen but for urban land use
- Know how the Green Revolution affected developing countries (both positive and negative)
- Understand **food deserts** — areas in developed countries with limited access to fresh food
      \`
    },
    {
      id: 'hgap1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A new highway connecting a rural area to a city would MOST likely affect Von Thunen rings by:',
            options: [
              'Eliminating all agricultural activity near the highway',
              'Extending agricultural zones along the highway corridor',
              'Having no effect on the spatial pattern',
              'Reversing the order of the rings'
            ],
            correctAnswer: 1,
            explanation: 'Highways reduce transportation costs, extending the distance that perishable goods can profitably travel. This stretches the rings along the transportation corridor, distorting the concentric pattern.'
          },
          {
            question: 'Which pair of agricultural practices would you most likely find in Stage 2 (developing) vs Stage 4 (developed) countries respectively?',
            options: [
              'Commercial grain farming and pastoral nomadism',
              'Shifting cultivation and commercial dairy farming',
              'Mediterranean agriculture and plantation agriculture',
              'Livestock ranching and intensive subsistence farming'
            ],
            correctAnswer: 1,
            explanation: 'Stage 2 developing countries rely on subsistence methods like shifting cultivation. Stage 4 developed countries use commercial, technology-intensive methods like dairy farming.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 7. Culture & Diffusion ───
write('hg-culture-diffusion-part1.ts', `export const hgCultureDiffusionPart1Data = {
  topicSlug: 'hg-culture-diffusion',
  sections: [
    {
      id: 'hgcd1-intro',
      type: 'text' as const,
      content: \`
# 🌍 Cultural Landscape & Diffusion

**Part 1 of 7 — How Culture Spreads Across Space**

---

## Types of Cultural Diffusion

| Diffusion Type | Definition | Example |
|---------------|-----------|---------|
| **Relocation** | People physically move, bringing culture | Immigrants bringing cuisine to new countries |
| **Expansion — Hierarchical** | Spreads from authority/influential nodes | Fashion trends from Paris/Milan to world |
| **Expansion — Contagious** | Spreads to nearby places like a disease | Spread of Islam across Arabian Peninsula |
| **Expansion — Stimulus** | Core idea adopted but modified locally | McDonald menu variations worldwide |

> 🔑 **AP Key Point:** The AP exam LOVES asking you to classify diffusion examples. Always identify: WHO spread it, HOW it spread, and whether the IDEA was modified.

---

## Cultural Concepts

| Term | Definition |
|------|-----------|
| **Culture trait** | Single element of culture (chopsticks, handshake) |
| **Culture complex** | Related group of traits (religion includes beliefs, rituals, architecture) |
| **Culture region** | Area sharing common traits (the Bible Belt, Latin America) |
| **Cultural landscape** | Physical imprint of culture on the land (buildings, farms, signs) |
| **Acculturation** | Adopting traits of a dominant culture while retaining some own |
| **Assimilation** | Fully adopting a new culture, losing original identity |
| **Syncretism** | Blending of two cultures into something new |
      \`
    },
    {
      id: 'hgcd1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'McDonald serving teriyaki burgers in Japan is an example of:',
            options: [
              'Stimulus diffusion — the concept was adopted but modified',
              'Relocation diffusion — the restaurant physically moved',
              'Contagious diffusion — it spread to nearby locations',
              'Acculturation of Japanese cuisine'
            ],
            correctAnswer: 0,
            explanation: 'The core concept (fast food restaurant) was adopted, but the menu was modified to fit local tastes. This is stimulus diffusion — the idea spreads but is changed in the process.'
          },
          {
            question: 'Spanish colonizers building Catholic churches throughout Latin America is an example of:',
            options: [
              'Contagious diffusion',
              'Hierarchical diffusion from an authority',
              'Stimulus diffusion',
              'Independent invention'
            ],
            correctAnswer: 1,
            explanation: 'The Spanish colonial government and Catholic Church (authority figures) imposed Catholicism on colonized populations — a top-down spread from powerful institutions.'
          }
        ]
      }
    },
    {
      id: 'hgcd1-content',
      type: 'text' as const,
      content: \`
## Cultural Landscape

The **cultural landscape** (coined by Carl Sauer) is the visible imprint of human activity on the physical environment:

| Element | Examples |
|---------|---------|
| **Architecture** | Mosques, churches, temples; colonial vs indigenous styles |
| **Language on signs** | Bilingual street signs, ethnic neighborhood markers |
| **Land use patterns** | Long-lot system (French), metes-and-bounds (English) |
| **Agriculture** | Terraced rice paddies, center-pivot irrigation circles |
| **Transportation** | Road grids (planned cities) vs organic street patterns |

### Folk vs. Popular Culture

| Feature | Folk Culture | Popular Culture |
|---------|-------------|----------------|
| **Origin** | Anonymous, traditional | Known source, mass-produced |
| **Diffusion** | Slow, relocation | Fast, hierarchical (media) |
| **Distribution** | Clustered, isolated | Widespread, global |
| **Example** | Amish quilting, Navajo weaving | Blue jeans, K-pop, TikTok |
      \`
    },
    {
      id: 'hgcd1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) When immigrants bring their food traditions to a new country, this is _______ diffusion.

2) When a group adopts elements of a dominant culture while keeping some of their own traditions, this is called _______.

3) Buildings, signs, and land use patterns that reflect a society culture are called the _______ landscape.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['relocation', 'acculturation', 'cultural'],
        hint1: 'People physically relocate.',
        hint2: 'A middle ground between isolation and full assimilation.',
        hint3: 'The visible imprint of human activity.',
        explanation: 'Relocation diffusion = moving and bringing culture. Acculturation = partial adoption of new culture. Cultural landscape = visible human imprint on the land.'
      }
    },
    {
      id: 'hgcd1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Diffusion Type** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'A new social media trend spreads from celebrities to their followers worldwide. This is ___',
            options: ['Hierarchical diffusion', 'Relocation diffusion', 'Contagious diffusion', 'Stimulus diffusion']
          },
          {
            label: 'A disease spreading from one town to neighboring towns is most like ___',
            options: ['Contagious diffusion', 'Hierarchical diffusion', 'Stimulus diffusion', 'Relocation diffusion']
          },
          {
            label: 'An immigrant neighborhood keeping its original language and food traditions is an example of ___',
            options: ['Ethnic enclave maintaining culture through relocation diffusion', 'Assimilation into dominant culture', 'Stimulus diffusion of cuisine', 'Hierarchical diffusion']
          }
        ],
        correctAnswers: ['Hierarchical diffusion', 'Contagious diffusion', 'Ethnic enclave maintaining culture through relocation diffusion'],
        hint1: 'From influential people to their followers.',
        hint2: 'Spreads to nearby places first.',
        hint3: 'People who relocated brought their culture with them.',
        explanation: 'Celebrity trends = hierarchical (top-down). Disease-like spread = contagious (neighbor-to-neighbor). Immigrant neighborhoods = relocation (brought culture by moving).'
      }
    },
    {
      id: 'hgcd1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Cultural Geography

- **Diffusion classification** is one of the most tested topics — practice with real-world examples
- Folk culture = small scale, traditional, clustered; Popular culture = mass-produced, global, widespread
- **Cultural landscape** questions often show a photo and ask you to identify cultural elements
- Know the difference between **acculturation** (partial) vs **assimilation** (complete) vs **syncretism** (blending)
- **Globalization** = the spread of popular culture worldwide; can lead to cultural homogenization
      \`
    },
    {
      id: 'hgcd1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A photo shows a street with signs in both English and Chinese, Buddhist temples next to modern shops, and a mix of traditional and Western dress. This cultural landscape BEST illustrates:',
            options: [
              'Complete cultural assimilation',
              'Cultural syncretism and acculturation',
              'Isolated folk culture preservation',
              'Hierarchical diffusion of Western culture only'
            ],
            correctAnswer: 1,
            explanation: 'The mix of cultural elements (dual-language signs, religious and commercial buildings, traditional and modern clothing) shows acculturation (partial adoption) and syncretism (blending of cultures).'
          },
          {
            question: 'Which is the BEST example of popular culture diffusing through contagious diffusion?',
            options: [
              'A celebrity launching a fashion line that fans worldwide adopt',
              'A viral TikTok dance spreading from person to person across a school',
              'Traditional pottery-making techniques passed down in a village',
              'A government mandating a national language'
            ],
            correctAnswer: 1,
            explanation: 'A viral trend spreading person-to-person (like a contagion) through direct contact/observation is contagious diffusion. Celebrity fashion = hierarchical. Pottery = folk tradition. Government mandate = forced.'
          }
        ]
      }
    }
  ]
};
`);

console.log('Done with batch 2 (3 files)');
