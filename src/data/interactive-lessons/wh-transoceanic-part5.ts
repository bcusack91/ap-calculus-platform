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
              'Industrial capitalism created global economic integration by connecting raw material producers in agricultural peripheries to processing industries in industrial cores through transportation and commercial networks — but this integration was hierarchical rather than equal, with value-added processing concentrated in the industrial core while raw material producers received prices set by core-country commodity markets, distributing the benefits of global trade unequally',
              'The cotton commodity chain was an equal partnership with benefits equally distributed between producing and processing regions',
              'Lancashire mills sourced cotton exclusively from within Britain with no global commodity chain',
              'Cotton prices were determined by producing regions with no influence from industrial-country commodity markets',
            ],
            correctAnswer: 0,
            explanation: 'Hierarchical integration in commodity chains is AP\'s world-systems analysis: the cotton commodity chain was global but asymmetrically structured. Egyptian farmers grew long-staple cotton under pressure from British-influenced Egyptian government policy; prices were set in Liverpool cotton exchange; Egyptian farmers received whatever the market price was (they had no market power); Lancashire mills bought cheap raw cotton and sold expensive textiles. The value added in the chain (spinning, weaving, dyeing, finishing) occurred in Lancashire; the raw cotton production occurred in Egypt and India. This geographic distribution of value-added activity is what made industrial nations rich and cotton-producing nations poor — even though both participated in the same global commodity system.'
          },
          {
            question: 'Mono-culture dependency (one-commodity export economies) in colonial regions created economic vulnerability because:',
            options: [
              'Single-commodity economies were exposed to global price volatility with no economic buffer — when global rubber prices collapsed (1912-1913, as plantation rubber replaced wild rubber), the Amazon rubber boom ended catastrophically; when Cuban sugar prices fell, Cuban planters were ruined; when Chilean nitrate prices collapsed (synthetic nitrates, 1913), the Chilean economy contracted — demonstrating that diversification is the key to economic resilience and that mono-culture structures colonial economies for boom-bust cycles',
              'Single-commodity economies were more resilient than diversified economies because they could specialize efficiently',
              'Commodity price collapses were rare and had minimal economic impact on producing regions',
              'Colonial governments prevented economic harm from commodity price volatility through effective regulation',
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
- **Result:** Terms of trade consistently favored core (industrialized) over periphery (raw material producers)

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
              'Imperial power could deliberately reshape global commodity chains to serve metropolitan economic interests — Britain imported Chinese tea (paying with silver or opium), creating a trade deficit problem; when British botanists stole tea plants from China and established Assam and Ceylon plantations, Britain created a tea supply it controlled, could expand or contract, and profited from at multiple levels (plantation ownership; shipping; retail) — demonstrating that commodity chain creation was an exercise of imperial economic power',
              'Indian tea production arose spontaneously without British imperial intervention',
              'The British government had no interest in controlling tea supply — it was purely a private commercial development',
              'Chinese tea remained dominant throughout the 19th century — Indian tea never competed effectively',
            ],
            correctAnswer: 0,
            explanation: 'Imperial commodity chain creation is AP\'s analysis: the East India Company\'s trade with China required purchasing Chinese tea (China set prices; refused most European goods). The only acceptable Chinese payment was silver or opium (producing the Opium Wars). Robert Fortune (botanist) disguised himself as a Chinese merchant (1848-1851) and illegally exported Chinese tea plants and manufacturing knowledge. British planters established Assam tea gardens using indentured Indian labor; within decades, Indian tea competed with Chinese tea on price and quality. By 1900, Indian tea exports exceeded Chinese. Britain had remade the global tea commodity chain to serve British imperial economic interests.'
          },
          {
            question: 'The terms of trade consistently favoring industrial exporters over agricultural/raw material exporters demonstrates:',
            options: [
              'The prices of manufactured goods relative to raw materials systematically increased over the late 19th century — a ton of cotton textiles could buy progressively more raw cotton, more wheat, more rubber over time; this means that raw material producers had to export increasing quantities of their commodities to purchase the same quantity of manufactured goods, representing a structural transfer of purchasing power from periphery to core that compounded over decades',
              'Terms of trade were neutral — raw material and manufactured good prices moved together with no systematic advantage',
              'Terms of trade favored agricultural producers because food was more essential than manufactured goods',
              'The concept of terms of trade is irrelevant to 19th-century global economic history',
            ],
            correctAnswer: 0,
            explanation: 'Terms of trade as mechanism of wealth transfer is AP\'s economics analysis: the Prebisch-Singer thesis (developed 1950) argued that raw material prices decline relative to manufactured goods prices over time, systematically transferring income from commodity-producing periphery to industrial core. Even if a developing country exports more copper each year, if copper prices are falling and manufactured import prices are rising, the country grows poorer in real purchasing power terms. 19th-century data generally supports this: British terms of trade improved significantly 1870-1914 (British manufactured exports could buy more imported food and raw materials over time). The Prebisch-Singer thesis became the economic foundation for 20th-century development economics and argues that the global trade system structurally disadvantages commodity producers.'
          },
          {
            question: 'The rubber commodity chain from the Congo Free State (Leopold II, 1885-1908) demonstrates an extreme case of which economic pattern?',
            options: [
              'Resource extraction through forced labor and terror can produce short-term commodity surpluses for export but destroys the human capital, social organization, and political stability required for long-term development — Congo\'s rubber was extracted through systematic violence (hostage-taking, hand-cutting, massacre) that killed an estimated 10 million Congolese; while Leopold II accumulated personal wealth, Congo\'s population, agriculture, and social structures were devastated, producing long-term underdevelopment',
              'The Congo rubber system was comparable in its labor conditions to other colonial rubber production systems',
              'Congo rubber extraction was voluntary and Congolese workers benefited economically from participating',
              'The Congo system produced positive long-term development outcomes for the Congolese population',
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
            label: 'The economic analysis showing that raw material prices decline relative to manufactured good prices over time, systematically transferring income from commodity-exporting periphery to industrial core, was the ___',
            options: [
            'Prebisch-Singer thesis',
            'Comparative advantage theory',
            'Mercantilism',
            'Free trade theory',
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
          'Prebisch-Singer thesis',
          'Leopold II',
          'Mono-culture dependency',
        ],
        hint1: 'Prebisch-Singer 1950 — raw material prices fall relative to manufactured goods — terms of trade deteriorate for commodity exporters — development economics foundation',
        hint2: 'Leopold II Belgium — Congo Free State 1885-1908 — personal ownership — rubber quotas — hand cutting — 10 million deaths — Casement Morel reform campaign',
        hint3: 'Mono-culture — one crop economy — vulnerable to price collapse — no diversification — Amazon rubber Cuba sugar Ceylon tea Ghana cocoa — development economics problem',
        explanation: 'The Prebisch-Singer thesis provides the economic analytical framework for understanding why commodity-exporting structures disadvantage peripheral economies; Leopold II demonstrates the extreme extractive end of colonial commodity chains; and mono-culture dependency explains the structural economic vulnerability that colonial commodity chains created — together they show the economic, political, and developmental dimensions of global commodity chain organization.'
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
              'The same position in the global commodity chain (agricultural raw material exporter) can generate very different social structures depending on the crop\'s technical requirements — sugar requires large-scale plantation organization because it must be processed immediately after harvest (requiring on-site mills); wheat can be produced efficiently on small family farms because it stores and can be transported to centralized mills; these technical differences shaped whether immigrant-populated family farm economies or enslaved/indentured plantation economies developed',
              'Sugar and wheat production used identical labor systems in all contexts',
              'Climate was the only factor determining social structure in agricultural production',
              'Both crops were equally amenable to small-farm and plantation production',
            ],
            correctAnswer: 0,
            explanation: 'Technical crop requirements shaping social structure is AP\'s comparative agricultural economics: the Caribbean and Brazilian sugar plantation system was determined by more than racial ideology or simple exploitation. Sugar cane must be crushed and processed within 24-48 hours of cutting before fermentation destroys sucrose content. This required co-location of cane fields and sugar mills, which required large capital investment, which required large-scale production, which required concentrated labor. The plantation system was technically optimal for sugar. Wheat, by contrast, can be stored for months and transported to distant mills — small family farms are economically competitive. Argentine and American wheat farming developed on family farms; Caribbean sugar farming developed on plantations. Technical requirements shaped labor systems.'
          },
          {
            question: 'For AP, the late 19th-century emergence of global commodity chains\'s most significant long-term consequence was:',
            options: [
              'Creating the economic structural dependencies between developed and developing worlds that persist into the 21st century — regions organized as raw material exporters for industrial-core processing developed economic structures (mono-culture agriculture; extraction industries; weak manufacturing) that were resistant to transformation even after political independence, because the infrastructure, capital, skills, and market relationships all pointed toward continued commodity export rather than industrial development',
              'Global commodity chains produced uniform economic development across all world regions',
              'The commodity chain structure was temporary — all regions quickly developed industrial manufacturing',
              'The legacy of global commodity chains was only economic with no social or political dimensions',
            ],
            correctAnswer: 0,
            explanation: 'Path dependency of colonial economic structures is AP\'s long-term analysis: when Ghana became independent (1957), its economy still depended overwhelmingly on cocoa exports — infrastructure (roads, ports), capital (cocoa marketing boards), skills (cocoa farming), and market relationships (to British and Dutch chocolate companies) all pointed toward continued cocoa export. Kwame Nkrumah\'s industrialization attempts (Volta River hydroelectric project) were expensive and limited in success because 60 years of colonial cocoa-export orientation had created path-dependent economic structures difficult to transform. The same pattern applies to rubber in Malaysia, copper in Zambia, nitrates in Chile. Commodity chain creation by colonialism created long-lasting structural economic legacies.'
          }
        ]
      }
    }
  ]
}
