const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

function write(name, content) {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Wrote:', name);
}

// ─── 11. Political Power ───
write('hg-political-power-part1.ts', `export const hgPoliticalPowerPart1Data = {
  topicSlug: 'hg-political-power',
  sections: [
    {
      id: 'hgpp1-intro',
      type: 'text' as const,
      content: \`
# 🌍 Political Power & Territoriality

**Part 1 of 7 — How Power Is Organized Spatially**

---

## Forms of Government

| Concept | Definition | Example |
|---------|-----------|---------|
| **Unitary state** | Power concentrated in central government | France, Japan, China |
| **Federal state** | Power shared between central and regional governments | US, Germany, Nigeria |
| **Devolution** | Transfer of power from central to regional government | UK giving power to Scotland, Wales |
| **Supranationalism** | Countries cooperating beyond national borders | EU, NATO, United Nations |
| **Gerrymandering** | Manipulating voting district boundaries | Packing, cracking, stacking |

> 🔑 **AP Key Point:** The AP exam frequently tests the spectrum from **unitary** to **federal** governance and the concept of **devolution** — know real-world examples of each.

---

## Shapes of States

| Shape | Description | Advantage/Disadvantage | Example |
|-------|-----------|----------------------|---------|
| **Compact** | Roughly circular | Easy to govern, short distances | Poland, Zimbabwe |
| **Elongated** | Long and narrow | Difficult communication coast to coast | Chile, Vietnam |
| **Prorupted** | Compact with an extension | Access to resources or strategic area | Thailand, Myanmar |
| **Fragmented** | Multiple non-contiguous pieces | Difficult to unite culturally | Indonesia, Philippines |
| **Perforated** | Surrounds another state | Complex border relations | South Africa (contains Lesotho) |
| **Landlocked** | No coastline | Limited trade access, dependent on neighbors | Bolivia, Nepal, Mongolia |
      \`
    },
    {
      id: 'hgpp1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The United Kingdom transferring legislative power to Scotland and Wales is an example of:',
            options: [
              'Supranationalism',
              'Devolution',
              'Imperialism',
              'Gerrymandering'
            ],
            correctAnswer: 1,
            explanation: 'Devolution = transferring power from a central government to regional authorities. The UK created the Scottish Parliament and Welsh Assembly, giving these regions more self-governance.'
          },
          {
            question: 'Indonesia, consisting of over 17,000 islands, is best classified as a:',
            options: [
              'Compact state',
              'Elongated state',
              'Fragmented state',
              'Perforated state'
            ],
            correctAnswer: 2,
            explanation: 'Indonesia territory is spread across thousands of non-contiguous islands — making governance, communication, and national unity challenging. This is a fragmented state.'
          }
        ]
      }
    },
    {
      id: 'hgpp1-content',
      type: 'text' as const,
      content: \`
## Electoral Geography

### Gerrymandering Techniques

| Technique | How It Works | Effect |
|-----------|-------------|--------|
| **Packing** | Concentrate opposition voters into few districts | Opposition wins those districts by huge margins but loses everywhere else |
| **Cracking** | Spread opposition voters across many districts | Opposition never reaches majority in any district |
| **Stacking** | Combine opposition areas with dominant group areas | Dilutes opposition voting power |

### Reapportionment and Redistricting
- **Reapportionment**: Reallocating House seats based on census population changes
- **Redistricting**: Redrawing district boundaries after reapportionment
- Both happen every **10 years** after the US Census

## Supranational Organizations

| Organization | Purpose | Members |
|-------------|---------|---------|
| **European Union (EU)** | Economic/political integration | 27 European countries |
| **NATO** | Military alliance | 32 countries (North America + Europe) |
| **United Nations** | International peace and cooperation | 193 countries |
| **African Union** | Continental cooperation | 55 African states |
| **ASEAN** | Southeast Asian cooperation | 10 countries |
      \`
    },
    {
      id: 'hgpp1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) A state where power is shared between central and regional governments is a _______ state.

2) A state where power is concentrated in the central government is a _______ state.

3) The transfer of central government power to regional authorities is called _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['federal', 'unitary', 'devolution'],
        hint1: 'The United States is the classic example.',
        hint2: 'France and Japan are examples.',
        hint3: 'Scotland and Catalonia sought this.',
        explanation: 'Federal = shared power (US, Germany). Unitary = centralized power (France, Japan). Devolution = transferring power downward to regions.'
      }
    },
    {
      id: 'hgpp1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Concept** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Chile, stretching 2,600 miles along the Pacific coast, is a ___ state',
            options: ['Elongated', 'Compact', 'Fragmented', 'Prorupted']
          },
          {
            label: 'South Africa completely surrounding the country of Lesotho makes South Africa a ___ state',
            options: ['Perforated', 'Compact', 'Fragmented', 'Elongated']
          },
          {
            label: 'Concentrating opposition voters into one district so they win by huge margins but lose everywhere else is called ___',
            options: ['Packing', 'Cracking', 'Stacking', 'Devolution']
          }
        ],
        correctAnswers: ['Elongated', 'Perforated', 'Packing'],
        hint1: 'Very long and narrow.',
        hint2: 'Contains another country inside it.',
        hint3: 'Pack them all into one place.',
        explanation: 'Chile = elongated (long and narrow). South Africa = perforated (surrounds Lesotho). Packing = concentrating opposition voters in few districts.'
      }
    },
    {
      id: 'hgpp1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Political Power

- **Unitary vs. federal** — know at least 3 examples of each
- **Devolution reasons**: ethnic/linguistic differences, economic inequality, physical geography (islands, mountains)
- **Gerrymandering**: be able to identify packing vs cracking from a map diagram
- **Supranationalism**: EU is the most tested — know its benefits (trade, travel) and challenges (loss of sovereignty, Brexit)
- **State shapes**: be ready to identify from a map and explain how shape affects governance
      \`
    },
    {
      id: 'hgpp1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Brexit — the UK leaving the European Union — represents a tension between:',
            options: [
              'Devolution and federalism',
              'National sovereignty and supranationalism',
              'Unitary and federal governance',
              'Gerrymandering and reapportionment'
            ],
            correctAnswer: 1,
            explanation: 'Brexit reflects the tension between maintaining national sovereignty (controlling own laws, borders, trade) and the benefits of supranational cooperation (EU free trade, free movement).'
          },
          {
            question: 'A country composed of several islands spread across 1,000 miles of ocean would most likely face challenges related to its ___ shape.',
            options: [
              'Compact',
              'Elongated',
              'Fragmented',
              'Prorupted'
            ],
            correctAnswer: 2,
            explanation: 'Fragmented states (like Indonesia or the Philippines) face challenges in transportation, communication, national unity, and governance because their territory is not connected.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 12. Globalization & Trade ───
write('hg-globalization-trade-part1.ts', `export const hgGlobalizationTradePart1Data = {
  topicSlug: 'hg-globalization-trade',
  sections: [
    {
      id: 'hggt1-intro',
      type: 'text' as const,
      content: \`
# 🌍 Globalization & Trade

**Part 1 of 7 — The Interconnected World Economy**

---

## World Systems Theory (Wallerstein)

| Concept | Definition | Example |
|---------|-----------|---------|
| **Core countries** | Wealthy, industrialized, high-tech | US, Japan, Germany, UK |
| **Periphery countries** | Low-income, raw material exporters | Many in Sub-Saharan Africa, parts of South Asia |
| **Semi-periphery** | Emerging economies between core and periphery | China, Brazil, India, Mexico |
| **Commodity chain** | Steps from raw material to consumer product | Cotton picked in India → fabric in Bangladesh → shirt sold in US |

> 🔑 **AP Key Point:** Wallerstein's **World Systems Theory** divides the world into core, semi-periphery, and periphery — the AP exam expects you to classify countries and explain power relationships between them.

---

## Measuring Development

| Indicator | What It Measures | Core vs. Periphery |
|-----------|-----------------|-------------------|
| **GDP per capita** | Average economic output per person | High in core, low in periphery |
| **HDI** (Human Development Index) | Life expectancy + education + income | Near 1.0 in core; <0.5 in low-income |
| **GII** (Gender Inequality Index) | Gender gaps in health, empowerment, labor | Lower (better) in core countries |
| **Literacy rate** | % of adults who can read/write | >95% in core; varies widely in periphery |
| **Infant Mortality Rate** | Deaths per 1,000 live births | <5 in core; >50 in some periphery |
      \`
    },
    {
      id: 'hggt1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'According to Wallerstein World Systems Theory, periphery countries primarily:',
            options: [
              'Manufacture high-technology goods for export',
              'Export raw materials to core countries at low prices',
              'Control global financial institutions',
              'Have the highest HDI scores'
            ],
            correctAnswer: 1,
            explanation: 'Periphery countries are structurally disadvantaged: they export cheap raw materials to core countries, which add value through manufacturing and sell finished goods back at higher prices.'
          },
          {
            question: 'The HDI (Human Development Index) combines which three dimensions?',
            options: [
              'GDP, military spending, and trade balance',
              'Life expectancy, education, and income',
              'Urbanization rate, birth rate, and literacy',
              'Exports, imports, and inflation'
            ],
            correctAnswer: 1,
            explanation: 'HDI measures three dimensions of human development: a long and healthy life (life expectancy), knowledge (education), and a decent standard of living (GNI per capita).'
          }
        ]
      }
    },
    {
      id: 'hggt1-content',
      type: 'text' as const,
      content: \`
## Effects of Globalization

### Positive Effects
- Increased trade and economic growth
- Access to information and technology
- Cultural exchange and awareness
- Reduced extreme poverty in some regions (China, East Asia)

### Negative Effects
- Widening inequality between and within countries
- Cultural homogenization (loss of local traditions)
- Environmental degradation from increased production
- Labor exploitation in developing countries
- Brain drain from periphery to core

## Key Trade Concepts

| Term | Definition |
|------|-----------|
| **Free trade** | Elimination of tariffs and trade barriers between countries |
| **Fair trade** | Ensuring producers in developing countries get reasonable prices |
| **Neocolonialism** | Economic exploitation of developing countries without formal political control |
| **Special Economic Zone (SEZ)** | Designated area with relaxed regulations to attract foreign investment |
| **Export Processing Zone (EPZ)** | Area where imported materials are processed and re-exported (maquiladoras in Mexico) |
| **Outsourcing** | Hiring external workers/companies, often in lower-cost countries |
      \`
    },
    {
      id: 'hggt1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Wealthy, industrialized countries that dominate global trade are called _______ countries.

2) Low-income countries that primarily export raw materials are called _______ countries.

3) The sequence of steps from raw material to finished consumer product is called a _______ chain.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['core', 'periphery', 'commodity'],
        hint1: 'The US, Japan, and Germany.',
        hint2: 'The opposite end of the world system.',
        hint3: 'Also called a supply chain or value chain.',
        explanation: 'Core = wealthy industrialized countries. Periphery = low-income raw material exporters. Commodity chain = steps from raw material to consumer product.'
      }
    },
    {
      id: 'hggt1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Concept** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'A US company hires call center workers in India for lower wages. This is ___',
            options: ['Outsourcing', 'Core-periphery reversal', 'Protectionism', 'Fair trade']
          },
          {
            label: 'A French company controls diamond mines in West Africa while the local population remains impoverished. This is ___',
            options: ['Neocolonialism', 'Free trade', 'Supranationalism', 'Devolution']
          },
          {
            label: 'China building factories near ports with tax breaks for foreign companies has created ___',
            options: ['Special Economic Zones (SEZs)', 'Free trade agreements', 'Commodity chains', 'Maquiladoras']
          }
        ],
        correctAnswers: ['Outsourcing', 'Neocolonialism', 'Special Economic Zones (SEZs)'],
        hint1: 'Moving jobs to lower-cost countries.',
        hint2: 'Economic exploitation without formal political control.',
        hint3: 'Designated areas with relaxed regulations.',
        explanation: 'Outsourcing = hiring cheaper labor abroad. Neocolonialism = economic exploitation. SEZs = zones designed to attract foreign investment.'
      }
    },
    {
      id: 'hggt1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Globalization

- **Wallerstein core/periphery/semi-periphery** — be able to classify any country and explain WHY
- Know how commodity chains create unequal exchange (raw materials cheap, finished goods expensive)
- **Maquiladoras** (Mexico-US border factories) are a frequently tested example of EPZs
- Understand both **positive and negative** effects of globalization — AP FRQs often ask for both
- **Neocolonialism** vs **colonialism**: political control vs economic control
      \`
    },
    {
      id: 'hggt1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Cocoa beans grown in Ghana are shipped to Switzerland, processed into chocolate, and sold worldwide at 20x the price Ghana received. This BEST illustrates:',
            options: [
              'Fair trade practices benefiting producers',
              'How commodity chains create unequal exchange between core and periphery',
              'The success of free trade agreements',
              'Ghana transitioning to a core country'
            ],
            correctAnswer: 1,
            explanation: 'The commodity chain adds most value during processing (in core countries), not during raw material extraction (in periphery countries). Ghana gets a tiny fraction of the final product value.'
          },
          {
            question: 'China is often classified as a semi-periphery country because:',
            options: [
              'It has a weak economy with no manufacturing',
              'It exports only raw materials like a periphery country',
              'It has features of both core (manufacturing, technology) and periphery (cheap labor, exports)',
              'It is a member of the EU'
            ],
            correctAnswer: 2,
            explanation: 'Semi-periphery countries like China have characteristics of both: growing manufacturing and technology (core traits) alongside cheap labor and export-oriented production (periphery traits).'
          }
        ]
      }
    }
  ]
};
`);

// ─── 13. Industrialization ───
write('hg-industrialization-part1.ts', `export const hgIndustrializationPart1Data = {
  topicSlug: 'hg-industrialization',
  sections: [
    {
      id: 'hgind1-intro',
      type: 'text' as const,
      content: \`
# 🌍 Industrialization & Development

**Part 1 of 7 — Economic Sectors and Growth Models**

---

## Economic Sectors

| Sector | Activity | Example | Dominant In |
|--------|----------|---------|------------|
| **Primary** | Extract raw materials | Farming, mining, fishing | Periphery countries |
| **Secondary** | Manufacturing | Factories, construction | Semi-periphery (industrializing) |
| **Tertiary** | Services | Retail, education, healthcare | Core countries |
| **Quaternary** | Information/knowledge | Research, IT, finance | Core countries |
| **Quinary** | Decision-making | Government leaders, CEOs | Core countries |

> 🔑 **AP Key Point:** As countries develop, their workforce shifts from primary → secondary → tertiary sectors. This is a key indicator of **economic development** on the AP exam.

---

## Development Models

| Model | Creator | Idea |
|-------|---------|------|
| **Rostow Stages of Growth** | W.W. Rostow | 5 stages from traditional to high consumption (linear) |
| **Dependency Theory** | A.G. Frank | Periphery stays poor because core exploits it |
| **World Systems Theory** | Wallerstein | Core-semi-periphery-periphery hierarchy |

### Rostow 5 Stages

1. **Traditional** — subsistence agriculture, limited technology
2. **Preconditions for takeoff** — infrastructure investment, commercial agriculture begins
3. **Takeoff** — rapid industrialization, urbanization accelerates
4. **Drive to maturity** — diversified economy, technology spreads widely
5. **Age of mass consumption** — high income, service-based economy

> ⚠️ **AP Critique:** Rostow assumes ALL countries follow the same path. Dependency theorists argue this ignores how colonial exploitation created structural barriers to development.
      \`
    },
    {
      id: 'hgind1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A country where most workers are in agriculture and mining is primarily in the:',
            options: [
              'Primary sector',
              'Secondary sector',
              'Tertiary sector',
              'Quaternary sector'
            ],
            correctAnswer: 0,
            explanation: 'The primary sector involves extracting raw materials (farming, mining, forestry, fishing). Countries with most workers in this sector are typically less economically developed.'
          },
          {
            question: 'Dependency theorists would argue that developing countries remain poor because:',
            options: [
              'They lack natural resources needed for industrialization',
              'Structural exploitation by wealthy core countries prevents development',
              'Their populations are growing too fast',
              'They chose not to adopt Western economic models'
            ],
            correctAnswer: 1,
            explanation: 'Dependency theory argues that the global economic system is structured to benefit core countries at the expense of the periphery — through unequal trade, debt, and historical colonialism.'
          }
        ]
      }
    },
    {
      id: 'hgind1-content',
      type: 'text' as const,
      content: \`
## Industrial Location Theory

### Weber Least Cost Theory (1909)

Alfred Weber argued that industries locate where **costs are minimized**:

| Factor | Description | Example |
|--------|-----------|---------|
| **Transportation costs** | Most important; minimize transport of heavy materials | Steel mills near iron ore + coal |
| **Labor costs** | Cheap labor can offset higher transport costs | Textile factories in Bangladesh |
| **Agglomeration** | Benefits of clustering with related industries | Silicon Valley tech cluster |
| **Deglomeration** | Moving away when clustering causes high rents/congestion | Factories leaving expensive city centers |

### Bulk-Reducing vs. Bulk-Gaining

| Type | Description | Example |
|------|-----------|---------|
| **Bulk-reducing** | Product weighs LESS than raw materials; locate near raw materials | Copper smelting near mines |
| **Bulk-gaining** | Product weighs MORE than components; locate near market | Soft drink bottling (add water near consumers) |

## The Industrial Revolution

| Wave | When | Key Industries | Where |
|------|------|---------------|-------|
| **First** | 1760s–1840s | Textiles, steam, iron | Britain (Manchester, Birmingham) |
| **Second** | 1870s–1914 | Steel, chemicals, electricity | US, Germany, Japan |
| **Third** | 1960s–present | Digital, automation, biotech | Global, but led by core countries |
      \`
    },
    {
      id: 'hgind1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The economic sector focused on services (retail, education, healthcare) is the _______ sector.

2) Rostow Stages of Growth model proposes that all countries follow _______ stages of economic development.

3) _______ theory argues that poor countries remain poor because of exploitation by wealthy nations.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['tertiary', '5', 'Dependency'],
        hint1: 'The dominant sector in core countries.',
        hint2: 'From traditional society to age of mass consumption.',
        hint3: 'The opposite of Rostow optimistic view.',
        explanation: 'Tertiary = service sector. Rostow = 5 stages of growth. Dependency theory = structural exploitation keeps periphery poor.'
      }
    },
    {
      id: 'hgind1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Apply Weber Theory** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'A copper smelter (heavy ore produces light metal) should locate near ___',
            options: ['Raw materials (copper mine)', 'The consumer market', 'The cheapest labor', 'The government capital']
          },
          {
            label: 'A soft drink bottling plant (adds heavy water to light syrup) should locate near ___',
            options: ['The consumer market', 'The water source', 'The sugar plantation', 'The cheapest labor']
          },
          {
            label: 'Many tech companies clustering in Silicon Valley is an example of ___',
            options: ['Agglomeration', 'Deglomeration', 'Bulk-reducing industry', 'Dependency']
          }
        ],
        correctAnswers: ['Raw materials (copper mine)', 'The consumer market', 'Agglomeration'],
        hint1: 'Bulk-reducing: raw materials are heavier than the product.',
        hint2: 'Bulk-gaining: the product is heavier than the inputs.',
        hint3: 'Benefits of clustering with related businesses.',
        explanation: 'Copper smelting = bulk-reducing (locate near mine). Bottling = bulk-gaining (locate near market). Silicon Valley = agglomeration (clustering benefits).'
      }
    },
    {
      id: 'hgind1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Industrialization

- **Weber least cost theory** is heavily tested — know transport, labor, and agglomeration factors
- **Bulk-reducing vs bulk-gaining** — practice classifying industries
- **Rostow vs Dependency Theory** — be ready to compare and critique both
- The shift from primary → tertiary sectors is called **sectoral transformation** or economic restructuring
- Know how the Industrial Revolution affected urbanization, population (DTM), and social structure
- **Fordism** (assembly line, mass production) vs **post-Fordism** (flexible, global supply chains) is increasingly tested
      \`
    },
    {
      id: 'hgind1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A developing country has 60% of workers in agriculture, 20% in manufacturing, and 20% in services. According to Rostow, this country is MOST likely in:',
            options: [
              'Stage 1 (Traditional society)',
              'Stage 3 (Takeoff)',
              'Stage 4 (Drive to maturity)',
              'Stage 5 (Age of mass consumption)'
            ],
            correctAnswer: 0,
            explanation: 'A country with 60% of workers in agriculture (primary sector) is characteristic of Rostow Stage 1 — a traditional society with limited industrialization and subsistence agriculture.'
          },
          {
            question: 'A factory moves from Detroit to rural Mississippi to reduce costs, while other factories move from the US to Vietnam. These both illustrate:',
            options: [
              'Agglomeration economies attracting industry',
              'Deglomeration and the search for lower labor costs',
              'Bulk-reducing industry location decisions',
              'Rostow Stage 5 development'
            ],
            correctAnswer: 1,
            explanation: 'Both moves represent deglomeration (leaving expensive clusters) and seeking cheaper labor — one at national scale (Detroit to Mississippi), one at global scale (US to Vietnam).'
          }
        ]
      }
    }
  ]
};
`);

console.log('Done with batch 4 (3 files)');
