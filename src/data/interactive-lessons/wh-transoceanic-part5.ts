export const whTransoceanicPart5Data = {
  topicSlug: 'wh-transoceanic',
  sections: [
    {
      id: 'whtrans5-intro',
      type: 'text' as const,
      content: `
# 🌍 Transoceanic Interconnections

**Part 5 of 7 — Global Commodity Chains and Trade Integration**

---

> 🔑 **Key Concept:** The late 19th century saw the emergence of genuinely global commodity chains — from cotton fields in Egypt and India, to British mills, to consumers across the world — enabled by transportation and communication technology. AP questions analyze how global commodity chains integrated diverse world regions into a single economic system, created economic dependencies, and distributed benefits and costs unevenly.
      `
    },
    {
      id: 'whtrans5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The cotton commodity chain connecting Egyptian and Indian cotton fields to Lancashire mills demonstrates:',
            options: [
              'Industrial capitalism linked cotton growers to Lancashire mills, but mills captured most value while growers took Liverpool prices',
              'The cotton chain was an equal partnership, with profits from spinning, weaving, and finishing shared evenly between growers and mills',
              'Lancashire mills bought mainly from American planters, so Egyptian and Indian cotton barely reached Britain',
              'Growing regions set world cotton prices, since mills had to accept whatever growers asked',
            ],
            correctAnswer: 0,
            explanation: 'Hierarchical integration in commodity chains is AP\'s world-systems analysis: the cotton commodity chain was global but asymmetrically structured. Egyptian farmers grew long-staple cotton under pressure from British-influenced Egyptian government policy; prices were set in Liverpool cotton exchange; Egyptian farmers received whatever the market price was (they had no market power); Lancashire mills bought cheap raw cotton and sold expensive textiles. The value added in the chain (spinning, weaving, dyeing, finishing) occurred in Lancashire; the raw cotton production occurred in Egypt and India. This geographic distribution of value-added activity is what made industrial nations rich and cotton-producing nations poor — even though both participated in the same global commodity system.'
          },
          {
            question: 'Mono-culture dependency (one-commodity export economies) in colonial regions created economic vulnerability because:',
            options: [
              'Single-crop exporters had no cushion when prices fell, as the Amazon rubber bust showed',
              'One-crop economies were more resilient than diversified ones, since specializing let them weather any downturn',
              'Commodity price collapses were rare in this era and caused only brief, minor losses for producing regions',
              'Colonial governments shielded export economies from price swings through effective price-support boards',
            ],
            correctAnswer: 0,
            explanation: 'Mono-culture vulnerability is AP\'s development economics framework: the Amazon rubber boom (1850s-1912) transformed Manaus into an improbably wealthy jungle city (famous opera house, imported Italian marble) through rubber exports to global tire and industrial markets. British plantations in Malaya (started from Amazon seeds) produced rubber more cheaply than wild Amazon rubber by 1912 — Amazon boom ended within years; Manaus\'s wealth evaporated; workers who had migrated to the Amazon for rubber jobs were stranded. The boom-bust cycle was structural, not accidental: mono-culture economies have no alternative economic activity when their single export becomes unprofitable. Colonial structures created mono-culture; post-colonial development economists identified it as a cause of underdevelopment.'
          }
        ]
      }
    },
    {
      id: 'whtrans5-content',
      type: 'text' as const,
      content: `
## 📖 Global Commodity Chains

> **What Is a Commodity Chain?**

A commodity chain traces a product from raw material extraction through production, processing, and sale to the final consumer:

**Cotton commodity chain (c. 1880):**
1. **Growing:** Egypt, India, USA (slave then sharecrop labor)
2. **Shipping:** Steamship to Liverpool or Manchester
3. **Processing:** Lancashire textile mills (steam-powered)
4. **Distribution:** Global export through merchant networks
5. **Consumption:** British domestic market + global export (India, China, Africa, Latin America)

> **Key Global Commodity Chains**

| Commodity | Production Region | Processing | Markets |
|-----------|-----------------|-----------|--------|
| **Cotton** | American South, Egypt, India | Lancashire mills | Global |
| **Rubber** | Congo, Amazon, Malaya | European and US factories | Global (tires, industry) |
| **Sugar** | Caribbean, Brazil, Cuba | Refineries | Atlantic |
| **Wheat** | USA, Argentina, Russia | Mills | Global (urban consumers) |
| **Tea** | India, Ceylon | Blending/packaging | British Empire + global |
| **Coffee** | Brazil, Central America | Roasting/packaging | Atlantic + global |
| **Copper** | Chile, Congo | Smelting | Industrial (electrical) |
| **Cocoa** | West Africa (Gold Coast) | European chocolate factories | Global |

> **The Division of Labor: Core and Periphery**

- **Core regions (industrialized):** Process raw materials; add value through manufacturing; export finished goods; receive higher prices
- **Peripheral regions (colonial/agricultural):** Export raw materials; receive lower prices; import more expensive finished goods; limited manufacturing
- **Result:** Most of the profit from processing, shipping and selling stayed in industrialized countries, while producing regions specialized in exporting raw materials

> **Economic Dependency**

Many colonial and semi-colonial regions became dependent on one or two export commodities:
- **Ceylon (Sri Lanka):** Tea mono-culture
- **Cuba:** Sugar mono-culture
- **Malaya:** Rubber and tin
- **Gold Coast (Ghana):** Cocoa
- **Chile:** Copper and nitrates

**Risk of mono-culture:**
- Price volatility → economic instability
- No domestic diversification → no industrial development
- Economic control in hands of foreign buyers who set prices

> **Fair vs. Unfair Trade**

The global commodity system was not a free market of equals:
- **Commodity prices** were set in London, New York, and Amsterdam markets
- **Colonial producers** had no bargaining power to influence prices
- **Colonial governments** served export interests, not producer welfare
- **Profit distribution:** Most value added (processing, distribution, retailing) occurred in core countries
      `
    },
    {
      id: 'whtrans5-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The creation of tea production in British India (1840s onwards, displacing Chinese tea dominance) demonstrates:',
            options: [
              'Imperial power could remake a commodity chain, as Britain took tea plants from China and set up its own supply in India',
              'Indian tea arose on its own among local farmers, without British planters, capital, or colonial policy',
              'The British state took no interest in tea supply, which grew out of private trade between Calcutta merchants and Chinese growers',
              'Chinese tea stayed dominant through 1900, since Indian tea never matched it on price or quality',
            ],
            correctAnswer: 0,
            explanation: 'Imperial commodity chain creation is AP\'s analysis: the East India Company\'s trade with China required purchasing Chinese tea (China set prices; refused most European goods). The only acceptable Chinese payment was silver or opium (producing the Opium Wars). Robert Fortune (botanist) disguised himself as a Chinese merchant (1848-1851) and illegally exported Chinese tea plants and manufacturing knowledge. British planters established Assam tea gardens using indentured Indian labor; within decades, Indian tea competed with Chinese tea on price and quality. By 1900, Indian tea exports exceeded Chinese. Britain had remade the global tea commodity chain to serve British imperial economic interests.'
          },
          {
            question: 'Ceylon\'s tea, Cuba\'s sugar and Chile\'s nitrates in the late 1800s best illustrate which development?',
            options: [
              'Colonial regions industrialized quickly by processing their own raw materials at home',
              'Producing regions set world prices, since industrial countries depended on their exports',
              'Most colonial exports were factory goods sold to buyers in Asian markets',
              'Export economies came to depend on one or two raw materials or cash crops',
            ],
            correctAnswer: 3,
            explanation: 'In the age of economic imperialism, many colonial and semi-colonial economies specialized in exporting one or two raw materials or cash crops, which left them exposed to price swings set in distant markets. They did not industrialize by processing their own exports, prices were set in London, New York and Amsterdam rather than by producers, and their exports were raw materials, not factory goods.'
          },
          {
            question: 'The rubber commodity chain from the Congo Free State (Leopold II, 1885-1908) demonstrates an extreme case of which economic pattern?',
            options: [
              'Forced labor and terror yielded rubber for export but devastated the population and society needed for later growth',
              'Congo labor conditions closely resembled those on other colonial rubber estates, differing little in violence or in scale',
              'Congolese villagers chose to gather rubber for wages and gained lasting income from the trade',
              'Leopold\'s system brought schools and railways that left the Congo better placed for growth after 1908',
            ],
            correctAnswer: 0,
            explanation: 'Extreme extraction destroying development capacity is AP\'s analysis of Congo atrocities: Leopold II\'s Congo Free State was nominally a humanitarian project (the Berlin Conference 1884 authorized it as a "civilization mission"). In practice it was systematic organized looting: Congolese men were forced to meet rubber quotas; failure to meet quotas resulted in severing of hands, killing of family members, or hostage-taking. Roger Casement\'s 1904 report and E.D. Morel\'s Congo Reform Association campaign created international pressure that forced Leopold to transfer Congo to Belgian state control (1908). The Congo case is AP\'s extreme example of extraction without development — pure exploitation that destroyed human capital while extracting commodities.'
          }
        ]
      }
    },
    {
      id: 'whtrans5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'Industrial states and their businesses using economic power to control the trade and resources of other regions, as Britain did in India and Argentina, practiced ___',
            options: [
            'Economic imperialism',
            'Import substitution',
            'Self-strengthening',
            'Isolationism',
            ]
          },
          {
            label: 'The Belgian king who organized the Congo Free State as a personal extraction enterprise, using forced labor and terror to harvest rubber, was ___',
            options: [
            'Leopold II',
            'Leopold I',
            'Albert I',
            'Baudouin I',
            ]
          },
          {
            label: 'The economist\'s term for economies dependent on one or two export commodities and vulnerable to price volatility was ___',
            options: [
            'Mono-culture dependency',
            'Import substitution',
            'Export-led growth',
            'Colonial extraction',
            ]
          }
        ],
        correctAnswers: [
          'Economic imperialism',
          'Leopold II',
          'Mono-culture dependency',
        ],
        hint1: 'Control through trade, investment and loans rather than only through formal colonies',
        hint2: 'Leopold II Belgium — Congo Free State 1885-1908 — personal ownership — rubber quotas — hand cutting — 10 million deaths — Casement Morel reform campaign',
        hint3: 'Mono-culture — one crop economy — vulnerable to price collapse — no diversification — Amazon rubber Cuba sugar Ceylon tea Ghana cocoa — development economics problem',
        explanation: 'Economic imperialism describes how industrial powers used trade, investment and loans to shape other economies, even where they did not rule formally; Leopold II demonstrates the extreme extractive end of colonial commodity chains; and mono-culture dependency explains the structural economic vulnerability that colonial commodity chains created — together they show the economic, political, and developmental dimensions of global commodity chain organization.'
      }
    },
    {
      id: 'whtrans5-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Comparing the organization of sugar production in Cuba (plantation-based, enslaved/wage labor) and wheat production in Argentina (small family farms, immigrant labor) reveals:',
            options: [
              'A crop\'s technical needs shaped society: cane needed on-site mills and estates, but storable wheat did not',
              'Sugar and wheat were grown with the same labor systems everywhere, so the crops cannot explain any difference',
              'Climate alone decided social structure: hot lowlands produced big estates, and cool plains produced small farms',
              'Both crops suited small farms and big estates equally, and immigration patterns alone explain the difference',
            ],
            correctAnswer: 0,
            explanation: 'Technical crop requirements shaping social structure is AP\'s comparative agricultural economics: the Caribbean and Brazilian sugar plantation system was determined by more than racial ideology or simple exploitation. Sugar cane must be crushed and processed within 24-48 hours of cutting before fermentation destroys sucrose content. This required co-location of cane fields and sugar mills, which required large capital investment, which required large-scale production, which required concentrated labor. The plantation system was technically optimal for sugar. Wheat, by contrast, can be stored for months and transported to distant mills — small family farms are economically competitive. Argentine and American wheat farming developed on family farms; Caribbean sugar farming developed on plantations. Technical requirements shaped labor systems.'
          },
          {
            question: 'For AP, the late 19th-century emergence of global commodity chains\'s most significant long-term consequence was:',
            options: [
              'It created export dependencies that outlasted independence, as infrastructure and capital stayed geared to commodity exports',
              'It produced even economic development across regions, as every exporter gained a share of industrial growth',
              'Its structure was short-lived, since most commodity-export regions had built strong factory sectors by 1914',
              'Its legacy was purely economic, leaving no lasting mark on the politics, class structure, or social life of newly independent states',
            ],
            correctAnswer: 0,
            explanation: 'Path dependency of colonial economic structures is AP\'s long-term analysis: when Ghana became independent (1957), its economy still depended overwhelmingly on cocoa exports — infrastructure (roads, ports), capital (cocoa marketing boards), skills (cocoa farming), and market relationships (to British and Dutch chocolate companies) all pointed toward continued cocoa export. Kwame Nkrumah\'s industrialization attempts (Volta River hydroelectric project) were expensive and limited in success because 60 years of colonial cocoa-export orientation had created path-dependent economic structures difficult to transform. The same pattern applies to rubber in Malaysia, copper in Zambia, nitrates in Chile. Commodity chain creation by colonialism created long-lasting structural economic legacies.'
          }
        ]
      }
    }
  ]
}
