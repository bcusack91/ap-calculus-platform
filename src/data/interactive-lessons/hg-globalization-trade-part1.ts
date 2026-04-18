export const hgGlobalizationTradePart1Data = {
  topicSlug: 'hg-globalization-trade',
  sections: [
    {
      id: 'hggt1-intro',
      type: 'text' as const,
      content: `
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
      `
    },
    {
      id: 'hggt1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
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
      content: `
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
      `
    },
    {
      id: 'hggt1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Wealthy, industrialized countries that dominate global trade are called _______ countries.

2) Low-income countries that primarily export raw materials are called _______ countries.

3) The sequence of steps from raw material to finished consumer product is called a _______ chain.
      `,
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
      content: `
**Classify the Concept** 🔍
      `,
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
      content: `
## AP Exam Strategy: Globalization

- **Wallerstein core/periphery/semi-periphery** — be able to classify any country and explain WHY
- Know how commodity chains create unequal exchange (raw materials cheap, finished goods expensive)
- **Maquiladoras** (Mexico-US border factories) are a frequently tested example of EPZs
- Understand both **positive and negative** effects of globalization — AP FRQs often ask for both
- **Neocolonialism** vs **colonialism**: political control vs economic control
      `
    },
    {
      id: 'hggt1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
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
