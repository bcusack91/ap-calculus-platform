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
              'Offering 160 acres of public land to settlers who lived on and improved it for five years, so landless peasants could own farms without capital',
              'Paying a cash bounty to each European family that agreed to settle in a western territory and farm there for at least ten years',
              'Reserving western land for emigrants from Britain and Germany, the two nations Congress judged best suited to farming',
              'Selling 80-acre plots on cheap credit to emigrants who had first worked three years in eastern factories or mines',
            ],
            correctAnswer: 0,
            explanation: 'Land ownership as pull factor is AP\'s economic migration analysis: European peasants faced two land barriers — land was scarce in densely populated Europe; and land was too expensive for those without capital. The Homestead Act offered a path to land ownership through labor (5 years of residence and improvement) rather than capital — perfectly suited to landless emigrants who had labor to invest, and it turned migration from economic desperation into an opportunity for property ownership. Norwegian farmers on the Minnesota prairie, German settlers in Wisconsin, Irish farmers in Iowa all responded to this pull. The Act paid no bounties and did not favor particular nationalities. It was not purely humanitarian — it served to populate western territories, displace Native Americans, and integrate the frontier into the national economy.'
          },
          {
            question: 'The shift from "old immigration" (pre-1880, northern and western Europe) to "new immigration" (post-1880, southern and eastern Europe) to the USA demonstrates:',
            options: [
              'Industrialization spread unevenly, so emigration moved to regions like southern Italy and Poland where rural poverty persisted',
              'US laws after 1880 actively recruited southern and eastern Europeans, giving them preferred entry over British and German arrivals',
              'American industry after 1880 sought mainly skilled craftsmen, a demand southern and eastern Europeans were uniquely placed to meet',
              'Northern European emigration halted after 1880 because British and German governments barred their citizens from leaving for America',
            ],
            correctAnswer: 0,
            explanation: 'Uneven industrialization producing shifting emigration geography is AP\'s analytical framework: Britain and Germany industrialized early, absorbing rural workers into urban industry — by 1880, Britain was heavily urbanized and agricultural emigration pressure had declined. But in southern Italy, the agricultural south (mezzogiorno) remained underdeveloped even as northern Italy industrialized — so Italian emigration was primarily southern Italian. Poland and Russia\'s Jewish populations also faced pogroms (1880s-1900s) — persecution rather than purely economic push. The USA remained a consistent pull destination across both periods, wanting mostly unskilled industrial labor; US law moved toward restriction, not recruitment, and Britain and Germany never banned emigration. The "new immigration" reflects industrialization\'s uneven geographic spread.'
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
              'Commercial interests deliberately built migration by sending agents into villages and selling prepaid tickets that made emigration routine',
              'Migration was a spontaneous individual choice, since emigrants arranged passage on their own after reading letters from relatives',
              'Steamship lines tried to limit emigrant traffic, because cargo such as grain and cotton earned far higher profits than steerage passengers',
              'Governments rather than private firms organized emigration, since European states paid for most steerage passage across the Atlantic',
            ],
            correctAnswer: 0,
            explanation: 'Commercial facilitation of migration is AP\'s institutional analysis: White Star Line, Hamburg-Amerika Line, and other shipping companies were not passive carriers — they actively created demand for migration, and steerage passengers were highly profitable. Their agents toured Polish villages with photographs of American prosperity; they negotiated deals with railroad companies to deliver migrants from ships to midwestern cities; they established payment systems that allowed emigrants already in America to purchase prepaid tickets for relatives still in Europe. This lowered the information costs and logistical complexity of migration and is why emigration from specific Italian villages consistently went to specific American cities — shipping company regional monopolies created migration corridors. Letters from relatives mattered, but they worked alongside this commercial machinery rather than replacing it.'
          },
          {
            question: 'Remittances (money sent by emigrants back to home countries) demonstrate which consequence of migration?',
            options: [
              'Emigration kept sending regions tied to those abroad, whose money sent home paid debts and funded relatives\' passage',
              'Remittances were insignificant because most emigrants spent nearly all of their wages on rent and food in crowded American cities',
              'Remittances mainly enriched large landowners in sending regions, since peasant families had no way to receive money from abroad',
              'Remittances drained sending economies, because the money emigrants sent home was quickly spent on imported American manufactured goods',
            ],
            correctAnswer: 0,
            explanation: 'Remittances as economic integration is AP\'s migration consequence analysis: Italy received substantial remittances throughout the emigration era — by 1913, Italy was receiving over 500 million lire annually in emigrant remittances, an amount exceeding Italy\'s entire trade surplus. For individual peasant families, remittances could pay off debt to landowners, purchase small plots of land, or fund siblings\' emigration, integrating rural Italian, Polish, and Greek economies into global capital flows. Remittances are evidence that migration was not simply individual departure but a household economic strategy — families sent their strongest members abroad as an investment in the household\'s overall income stream, expecting regular financial returns.'
          },
          {
            question: '"Birds of passage" — European emigrants (especially Italian men) who came to the Americas seasonally and returned home — challenge which assumption about migration?',
            options: [
              'That emigration was a permanent and one-way move, since many migrants worked abroad seasonally while keeping property and family at home',
              'That most emigrants traveled alone, since seasonal migrants usually brought their spouses and children with them on every crossing',
              'That emigrants came mostly from rural areas, since seasonal migrants were chiefly urban factory hands from Milan and Turin',
              'That transatlantic travel was costly, since seasonal migrants crossed for free because American employers covered all of their fares both ways',
            ],
            correctAnswer: 0,
            explanation: 'Migration as spectrum not binary is AP\'s analytical refinement: the dominant image of emigration (Ellis Island arrival; permanent settlement; American identity) fits many emigrants but not all. Italian agricultural workers — mostly men traveling without families, from the rural south — crossed the Atlantic in autumn (when European agricultural work ended), worked in American construction or harvest (autumn-spring), and returned to Italy for the summer, paying their own fares on cheap, regular steamship service (which developed after 1880). The "birds of passage" phenomenon blurs the line between "emigrant" (permanent departure) and "migrant worker" (temporary labor abroad), revealing that international migration existed on a spectrum from permanent relocation to seasonal labor circulation, with implications for national identity, cultural preservation, and economic integration.'
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
              'Economic and cultural anxiety could produce discriminatory policy even against white Europeans, culminating in the national-origin quotas of 1924',
              'Nativists targeted only Asian immigrants, so European arrivals faced no organized opposition after the Chinese Exclusion Act of 1882',
              'Nativism stayed largely rhetorical, as Congress kept immigration fully open to all Europeans until the Second World War ended in 1945',
              'Nativism was led mainly by labor unions, which won quotas in 1890 that favored southern and eastern Europeans over northern ones',
            ],
            correctAnswer: 0,
            explanation: 'Racialized nativism even among European immigrants is AP\'s analytical extension of Social Darwinism: the Know-Nothing movement (1850s) targeted Catholic Irish immigrants, the Immigration Restriction League (1890s) targeted the "new immigrants," and the 1924 Immigration Act\'s national-origin quotas were explicitly designed by eugenicists (Madison Grant, Henry Laughlin) to preserve Anglo-Saxon racial dominance by limiting "inferior" southern and eastern European immigration. Quota allocations were based on the 1890 census (before "new immigration" peaked) to mathematically favor British, German, and Scandinavian immigrants over Italian, Polish, and Jewish immigrants. The Act demonstrates that Social Darwinist racial hierarchies applied not just to non-Europeans but to intra-European racial distinctions as well.'
          },
          {
            question: 'For AP, the 1850-1914 European mass emigration era\'s most significant consequence was:',
            options: [
              'A web of European diaspora communities that reshaped the demography and economy of several continents and linked them for generations',
              'A purely demographic shift, since emigrants assimilated so fast that they left no lasting cultural or economic imprint abroad',
              'A temporary population movement, since nearly all emigrants returned to Europe within a decade after the First World War began',
              'A change confined to receiving countries, since European sending regions lost people but gained no money or lasting connections in return',
            ],
            correctAnswer: 0,
            explanation: 'Multi-continental transformation is AP\'s synthesis: European mass emigration simultaneously shaped multiple world regions. Argentina\'s population became overwhelmingly European-descended — transforming a largely indigenous society within two generations. The USA\'s industrial workforce was built on immigrant labor. Brazil\'s coffee economy replaced slave labor with Italian and Japanese immigrants. Italy\'s rural overpopulation was relieved while Italian culture spread globally. The European diaspora created a network of cultural, economic, and political connections that define the modern Atlantic world — one of the most significant demographic events of the 19th century.'
          }
        ]
      }
    }
  ]
}
