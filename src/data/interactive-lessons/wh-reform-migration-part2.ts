export const whReformMigrationPart2Data = {
  topicSlug: 'wh-reform-migration',
  sections: [
    {
      id: 'whrm2-intro',
      type: 'text' as const,
      content: `
# ✊ Reform and Migration

**Part 2 of 7 — European Emigration to the Americas and Australia**

---

> 🔑 **Key Concept:** Between 1850 and 1914, approximately 55 million Europeans emigrated to the Americas, Australia, and South Africa — the largest voluntary migration in world history to that point. AP questions analyze the push-pull factors driving European emigration, the role of transportation technology (steamships), and the demographic, cultural, and economic consequences for both sending and receiving regions.
      `
    },
    {
      id: 'whrm2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Homestead Act (USA, 1862) functioned as a pull factor for European emigrants by:',
            options: [
              'Offering 160 acres of government land free to any adult who lived on and improved the land for 5 years — this promise of land ownership (impossible for landless peasants in Europe without capital) was a powerful pull for Irish, German, and Scandinavian emigrants who could not afford European land prices, transforming migration from economic desperation to an opportunity for property ownership',
              'The Homestead Act paid European emigrants a wage to move to the United States',
              'The Act restricted land ownership to emigrants from specific European countries',
              'The Homestead Act had no connection to European emigration because it applied only to existing citizens',
            ],
            correctAnswer: 0,
            explanation: 'Land ownership as pull factor is AP\'s economic migration analysis: European peasants faced two land barriers — land was scarce in densely populated Europe; and land was too expensive for those without capital. The Homestead Act offered a path to land ownership through labor (5 years of improvement) rather than capital — perfectly suited to landless emigrants who had labor to invest. Norwegian farmers on the Minnesota prairie, German settlers in Wisconsin, Irish farmers in Iowa all responded to this pull. The Act was not purely humanitarian — it served to populate western territories, displace Native Americans, and integrate the frontier into the national economy.'
          },
          {
            question: 'The shift from "old immigration" (pre-1880, northern and western Europe) to "new immigration" (post-1880, southern and eastern Europe) to the USA demonstrates:',
            options: [
              'Push factors shifted geographically as industrialization spread unevenly — Britain and Germany industrialized early (1760s-1850s), absorbing rural workers domestically and reducing emigration pressure; southern Italy, Poland, and Russia industrialized later or not at all, maintaining the rural poverty and population pressure that drove emigration from new sources, with the USA remaining a consistent pull destination across both periods',
              'The shift occurred because US laws specifically encouraged southern European immigration after 1880',
              'Pull factors in the USA changed after 1880 — new industries wanted different kinds of workers',
              'The shift reflected cultural preferences of Americans for different immigrant groups over time',
            ],
            correctAnswer: 0,
            explanation: 'Uneven industrialization producing shifting emigration geography is AP\'s analytical framework: Britain\'s industrial revolution absorbed agricultural labor into urban industry — by 1880, Britain was heavily urbanized and agricultural emigration pressure had declined. Germany similarly industrialized and absorbed rural workers. But in southern Italy, the agricultural south (mezzogiorno) remained underdeveloped even as northern Italy industrialized — so Italian emigration was primarily southern Italian. Poland and Russia\'s Jewish populations faced pogroms (1880s-1900s) — persecution rather than purely economic push. The "new immigration" reflects industrialization\'s uneven geographic spread.'
          }
        ]
      }
    },
    {
      id: 'whrm2-content',
      type: 'text' as const,
      content: `
## 📖 European Emigration Patterns

> **Scale and Timeline**

| Period | Approximate Emigrants | Main Source Regions |
|-------|----------------------|-------------------|
| **1815-1850** | ~5 million | British Isles, German states |
| **1850-1880** | ~10 million | British Isles, Germany, Scandinavia |
| **1880-1900** | ~20 million | Southern Europe (Italy, Spain), Eastern Europe |
| **1900-1914** | ~20 million | Southern and Eastern Europe; Russia (Jews fleeing pogroms) |

> **Push Factors by Region**

- **Ireland:** Potato Famine (1845-52); continued rural poverty; British land ownership
- **Germany:** Agricultural consolidation (enclosure); failed 1848 revolution (political refugees)
- **Italy:** Rural poverty in the south (mezzogiorno); limited industrialization outside north
- **Russia/Poland/Romania:** Anti-Jewish pogroms; religious persecution; military conscription
- **Scandinavia:** Population growth exceeding agricultural land; cold climate limiting expansion

> **Pull Factors: Why the Americas and Australia?**

| Destination | Pull Factors |
|------------|-------------|
| **USA** | Free or cheap land (Homestead Act 1862); industrial jobs; political freedom; chain migration networks |
| **Argentina** | Fertile Pampas; land grants; government immigration campaigns; Argentine government recruited Italians |
| **Brazil** | Coffee plantation labor demand after slavery abolished (1888); government immigration subsidies |
| **Australia** | Gold rushes (1850s); sheep farming; land available; British Empire membership |
| **Canada** | Prairie farming; government land grants; British colonial connection |

> **Transportation Technology: The Steamship Revolution**

- Before steamships: Atlantic crossing took 6-8 weeks in dangerous sailing ships
- After 1870s: Steamship crossing 10-14 days; much cheaper; safer; predictable schedules
- **Third-class (steerage) travel:** Miserable conditions but affordable for poor emigrants
- **Result:** Migration costs fell dramatically; migration no longer required significant capital
- **Steamship companies actively recruited emigrants** in European villages — migration agents toured rural areas

> **Cultural and Economic Consequences**

- **Remittances:** Emigrants sent money home to families — important to Italian, Polish, Greek economies
- **"Birds of passage":** Some emigrants (especially Italian men) came seasonally — worked in USA, returned home
- **Diaspora influence:** Irish Americans funded Fenian movement; German Americans shaped USA politics
- **Receiving countries:** Demographic growth; cheap labor for industry and agriculture; cultural diversity; nativist backlash
      `
    },
    {
      id: 'whrm2-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The role of steamship companies in actively recruiting European emigrants demonstrates:',
            options: [
              'Migration was not simply a spontaneous individual response to push and pull factors but was actively facilitated by commercial interests — steamship companies deployed agents in European villages to advertise American opportunities, sold pre-paid tickets, and created institutional infrastructure that reduced the information costs and logistical complexity of migration, demonstrating that commercial actors can transform migration from exceptional to routine',
              'Migration was entirely spontaneous with no commercial facilitation',
              'Steamship companies tried to discourage emigration to maximize freight revenue',
              'Only governments organized emigration — private companies had no role',
            ],
            correctAnswer: 0,
            explanation: 'Commercial facilitation of migration is AP\'s institutional analysis: White Star Line, Hamburg-Amerika Line, and other shipping companies were not passive carriers — they actively created demand for migration. Their agents toured Polish villages with photographs of American prosperity; they negotiated deals with railroad companies to deliver migrants from ships to midwestern cities; they established payment systems that allowed emigrants already in America to purchase tickets for relatives still in Europe. This commercialization of migration is why emigration from specific Italian villages consistently went to specific American cities — shipping company regional monopolies created migration corridors.'
          },
          {
            question: 'Remittances (money sent by emigrants back to home countries) demonstrate which consequence of migration?',
            options: [
              'Migration created persistent economic connections between sending and receiving regions — Italian emigrants in New York or Argentina sent money home to Italian families, who used it to pay debts, purchase land, or fund subsequent family migration; this financial flow integrated rural Italian, Polish, and Greek economies into global capital flows created by emigration, demonstrating that migration\'s economic effects extended beyond the migrants themselves to their communities of origin',
              'Remittances were insignificant — emigrants rarely sent money home after migration',
              'Remittances only benefited wealthy sending-country families, not poor peasant families',
              'Remittances caused economic harm in sending countries by removing money from circulation',
            ],
            correctAnswer: 0,
            explanation: 'Remittances as economic integration is AP\'s migration consequence analysis: Italy received substantial remittances throughout the emigration era — by 1913, Italy was receiving over 500 million lire annually in emigrant remittances, an amount exceeding Italy\'s entire trade surplus. For individual families, remittances could pay off debt to landowners, purchase small plots of land, or fund siblings\' emigration. Remittances are evidence that migration was not simply individual departure but a household economic strategy — families sent their strongest members abroad as an investment in the household\'s overall income stream, expecting regular financial returns.'
          },
          {
            question: '"Birds of passage" — European emigrants (especially Italian men) who came to the Americas seasonally and returned home — challenge which assumption about migration?',
            options: [
              'The assumption that emigration was a permanent, one-way movement from sending to receiving country — seasonal migration demonstrates that some emigrants remained economically integrated into home communities while working abroad, maintaining property and family relationships in Italy while earning American wages, blurring the distinction between "emigrant" (permanent departure) and "migrant worker" (temporary labor abroad)',
              'Birds of passage confirm that all emigration was permanent and one-directional',
              'Seasonal migration was only possible for wealthy emigrants with multiple homes',
              'Return migration was extremely rare — once emigrants left, they never returned',
            ],
            correctAnswer: 0,
            explanation: 'Migration as spectrum not binary is AP\'s analytical refinement: the dominant image of emigration (Ellis Island arrival; permanent settlement; American identity) fits many emigrants but not all. Italian agricultural workers crossed the Atlantic in autumn (when European agricultural work ended), worked in American construction or harvest (autumn-spring), and returned to Italy for the summer. This required cheap, regular steamship service (which developed after 1880). The "birds of passage" phenomenon reveals that international migration existed on a spectrum from permanent relocation to seasonal labor circulation, with implications for national identity, cultural preservation, and economic integration.'
          }
        ]
      }
    },
    {
      id: 'whrm2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The 1862 U.S. law offering 160 acres free to settlers who improved the land for 5 years was ___',
            options: [
            'The Homestead Act',
            'The Land Grant Act',
            'The Frontier Expansion Act',
            'The Agricultural Settlement Act',
            ]
          },
          {
            label: 'Italian (and other) emigrants who came seasonally, worked abroad, then returned home were called ___',
            options: [
            'Birds of passage',
            'Seasonal migrants',
            'Circular migrants',
            'Return emigrants',
            ]
          },
          {
            label: 'The U.S. law establishing national-origin immigration quotas explicitly designed to limit southern and eastern European immigration was ___',
            options: [
            'The Immigration Act of 1924',
            'The Chinese Exclusion Act',
            'The Immigration Restriction Act of 1882',
            'The National Origins Act of 1890',
            ]
          }
        ],
        correctAnswers: [
          'The Homestead Act',
          'Birds of passage',
          'The Immigration Act of 1924',
        ],
        hint1: 'USA 1862 — 160 acres free — 5 years improvement — western territories — pulled Irish German Scandinavian landless peasants',
        hint2: 'Italian men especially — Atlantic crossing seasonal — work America — return Italy summer — circular not permanent migration',
        hint3: '1924 USA — national origin quotas — 1890 census base — favored Anglo-Saxon — limited Italian Polish Jewish — eugenicist design',
        explanation: 'The Homestead Act demonstrates how government land policy created pull factors for European emigration; birds of passage demonstrate that emigration was not always permanent but could be a circular labor strategy; and the 1924 Immigration Act demonstrates how nativist reactions applied Social Darwinist racial hierarchies to restrict European immigration — together they show the causes, patterns, and political consequences of European mass emigration.'
      }
    },
    {
      id: 'whrm2-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Nativist reactions (anti-immigrant political movements) to European mass immigration in the USA demonstrated:',
            options: [
              'Economic competition and cultural anxiety about rapid demographic change could produce discriminatory political responses even against white European immigrants — the Know-Nothing movement (1850s, anti-Catholic Irish), the Immigration Restriction League (1890s, anti-"new immigrant"), and ultimately the Immigration Acts of 1921 and 1924 (establishing national-origin quotas) show that racialized classification of immigrants (as Anglo-Saxon vs. "inferior" Mediterranean and Slavic "races") applied Social Darwinist frameworks to migration policy',
              'Nativist movements welcomed all European immigrants without distinction',
              'Anti-immigrant politics only targeted non-European immigrants — European immigrants were universally welcomed',
              'Nativism had no practical policy consequences — the USA maintained completely open immigration throughout',
            ],
            correctAnswer: 0,
            explanation: 'Racialized nativism even among European immigrants is AP\'s analytical extension of Social Darwinism: the 1924 Immigration Act\'s national-origin quotas were explicitly designed by eugenicists (Madison Grant, Henry Laughlin) to preserve Anglo-Saxon racial dominance by limiting "inferior" southern and eastern European immigration. Quota allocations were based on the 1890 census (before "new immigration" peaked) to mathematically favor British, German, and Scandinavian immigrants over Italian, Polish, and Jewish immigrants. The Act demonstrates that Social Darwinist racial hierarchies applied not just to non-Europeans but to intra-European racial distinctions as well.'
          },
          {
            question: 'For AP, the 1850-1914 European mass emigration era\'s most significant consequence was:',
            options: [
              'The creation of a global network of European diaspora communities that transformed demographic, cultural, and economic landscapes across multiple continents simultaneously — the Americas received demographic growth, cheap labor, and diverse cultural traditions that shaped their development; European economies were relieved of population pressure and received remittances; and the resulting diaspora communities created persistent transnational connections that continued to influence politics and economics for generations',
              'European emigration had only demographic consequences with no cultural or economic dimensions',
              'The emigration era had no lasting consequences — all emigrants eventually returned to Europe',
              'Migration\'s consequences were confined to receiving countries with no impact on sending regions',
            ],
            correctAnswer: 0,
            explanation: 'Multi-continental transformation is AP\'s synthesis: European mass emigration simultaneously shaped multiple world regions. Argentina\'s population became overwhelmingly European-descended — transforming a largely indigenous society within two generations. The USA\'s industrial workforce was built on immigrant labor. Brazil\'s coffee economy replaced slave labor with Italian and Japanese immigrants. Italy\'s rural overpopulation was relieved while Italian culture spread globally. The European diaspora created a network of cultural, economic, and political connections that define the modern Atlantic world — one of the most significant demographic events of the 19th century.'
          }
        ]
      }
    }
  ]
}
