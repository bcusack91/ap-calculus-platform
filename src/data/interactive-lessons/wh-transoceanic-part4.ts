export const whTransoceanicPart4Data = {
  topicSlug: 'wh-transoceanic',
  sections: [
    {
      id: 'whtrans4-intro',
      type: 'text' as const,
      content: `
# 🌍 Transoceanic Interconnections

**Part 4 of 7 — The Suez and Panama Canals**

---

> 🔑 **Key Concept:** The Suez Canal (1869) and Panama Canal (1914) were the two greatest engineering achievements of the 19th and early 20th centuries, transforming global shipping routes and demonstrating the intersection of engineering ambition, financial capital, imperial power, and labor exploitation. AP questions analyze the canals' economic and strategic consequences, compare their construction and governance, and evaluate their role in reshaping global power relationships.
      `
    },
    {
      id: 'whtrans4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Britain\'s 1875 purchase of Suez Canal shares from the Egyptian Khedive demonstrates:',
            options: [
              'Egypt\'s financial dependence on European capital (accumulated through construction debts and extravagant royal spending) created vulnerability to loss of strategic assets — the bankrupt Khedive\'s sale of canal shares to Disraeli\'s government transformed what had been a commercially owned canal into a British strategic asset, demonstrating how debt-driven financial dependency can translate into loss of political sovereignty over strategic infrastructure',
              'The purchase was purely commercial with no strategic motivation',
              'Britain bought the shares to help Egypt financially with no interest in controlling the canal',
              'The canal shares had no strategic value — Britain purchased them as a financial investment only',
            ],
            correctAnswer: 0,
            explanation: 'Financial dependency → strategic asset transfer is AP\'s mechanism: Egypt borrowed heavily to finance the Suez Canal construction and Khedive Ismail\'s modernization program (railways, telegraphs, cotton production). By 1875, Egypt was spending 60% of government revenue on debt service. The Khedive needed immediate cash. Disraeli\'s government (learning of the opportunity through Lionel de Rothschild) borrowed £4 million from the Rothschilds and purchased the 44% stake within days — without Parliamentary approval. The strategic motivation was explicit: Disraeli wrote to Queen Victoria that the canal was "the highway to India." Financial crisis created the opportunity; strategic calculation drove the purchase.'
          },
          {
            question: 'The French Panama Canal failure (1881-1889) and American success (1904-1914) demonstrates:',
            options: [
              'Medical science was the decisive factor — the French attempt failed not from engineering error but from failure to control malaria and yellow fever (both mosquito-borne diseases not yet understood as such), which killed ~22,000 workers; American success required first eliminating the disease environment through mosquito control campaigns (Dr. William Gorgas, applying Walter Reed\'s yellow fever research), demonstrating that 20th-century engineering projects in tropical environments required medical science as a prerequisite',
              'The French failed because their engineering design was wrong — de Lesseps chose the wrong canal route',
              'Disease was a minor factor — the French failure was primarily due to financial mismanagement',
              'Both the French and American projects faced identical disease challenges with the same outcomes',
            ],
            correctAnswer: 0,
            explanation: 'Disease control as prerequisite for engineering achievement is AP\'s scientific-historical analysis: de Lesseps had succeeded at Suez (a desert canal with minimal disease) and attempted to use the same sea-level design in Panama. The Isthmus of Panama was one of the world\'s most disease-endemic environments. Workers died at rates of 200+ per month from malaria and yellow fever. De Lesseps refused to believe disease was the main obstacle until the project collapsed financially. The USA (having experienced Cuba\'s disease problems in the Spanish-American War) required Walter Reed\'s 1900 yellow fever research → Gorgas\'s mosquito eradication program → two years of disease control before construction began in earnest. Medical science enabled engineering.'
          }
        ]
      }
    },
    {
      id: 'whtrans4-content',
      type: 'text' as const,
      content: `
## 📖 The Suez and Panama Canals

> **The Suez Canal (1869)**

| Aspect | Details |
|--------|---------|
| **Builder** | Ferdinand de Lesseps (Compagnie Universelle du Canal Maritime de Suez) |
| **Length** | 193 km (120 miles) connecting Mediterranean to Red Sea |
| **Labor** | Initially forced Egyptian labor (corvée); later paid workers; ~30,000 workers; ~120,000 died from disease and accidents |
| **Cost** | 433 million francs; Egyptian government heavily indebted |
| **Opened** | November 17, 1869 |
| **Effect** | Reduced Europe-India voyage from 20,000 km (around Africa) to 12,000 km — 40% reduction |

> **British Control of the Suez Canal**

- **1875:** Egypt bankrupt; Khedive Ismail sold his 44% shares to Britain (Disraeli government, £4 million)
- **1882:** Britain occupied Egypt militarily — partly to secure canal
- **Strategic significance:** Canal was lifeline of British Empire — India, Australia, East Asia accessible quickly
- **1956 Suez Crisis:** Egypt's Nasser nationalized the canal → Britain and France invaded → USA forced withdrawal → demonstrated end of British imperial power

> **The Panama Canal (1914)**

| Aspect | French Attempt (1881-1889) | American Construction (1904-1914) |
|--------|--------------------------|----------------------------------|
| **Leadership** | Ferdinand de Lesseps | Colonel George Goethals |
| **Key challenge** | Underestimated engineering; disease (malaria, yellow fever) | Disease control (Gorgas eliminated malaria/yellow fever first) |
| **Deaths** | ~22,000 | ~5,600 (mostly disease) |
| **Outcome** | Failure; bankruptcy | Success; opened August 1914 |
| **Method** | Sea-level canal (like Suez) | Lock system (elevation change required) |

> **Strategic Consequences**

- **Suez:** British Royal Navy could move between Atlantic/Mediterranean and Indian Ocean in days instead of weeks
- **Panama:** US Navy could move between Atlantic and Pacific in days instead of weeks (previously: 14,000 km around South America)
- **US dominance in Americas:** Panama Canal cemented US ability to project naval power to both coasts simultaneously
- **AP connection:** Both canals demonstrate that engineering projects have geopolitical consequences — whoever controls the canal controls the trade route
      `
    },
    {
      id: 'whtrans4-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The labor force for the Panama Canal construction (1904-1914) reveals which AP pattern of global labor migration?',
            options: [
              'Imperial construction projects recruited workers from colonial and semi-colonial regions on unequal terms — Panama Canal workers were primarily Barbadian and other Caribbean Black workers (lowest wages; most dangerous work), with smaller numbers of Spanish and Italian workers (higher wages; skilled work), and American white workers (management and most skilled positions; highest wages; better housing) — reproducing colonial racial hierarchy within a single construction project',
              'The Panama Canal was built entirely by American workers with no international labor recruitment',
              'Workers of all origins received identical wages and conditions on the Panama Canal',
              'Caribbean workers were recruited because they were the most skilled laborers — wage differences reflected skill only',
            ],
            correctAnswer: 0,
            explanation: 'Racial labor hierarchy on imperial projects is AP\'s political economy analysis: the Panama Canal Zone implemented a racially stratified labor system called the "gold roll" (white American workers paid in gold = higher wages; better housing; superior facilities) and "silver roll" (Black Caribbean workers paid in silver = lower wages; segregated housing; inferior facilities). Approximately 31,000 West Indian workers (predominantly Barbadian) did the most dangerous excavation work in the Culebra Cut. The racial pay scale meant a Barbadian laborer earned 10 cents/hour while an American laborer doing comparable work earned 44 cents/hour. The canal was built on colonial racial labor hierarchy that reflected the broader imperial context.'
          },
          {
            question: 'The 1956 Suez Crisis (Egypt\'s Nasser nationalized the canal; Britain and France invaded; USA forced withdrawal) demonstrates:',
            options: [
              'The shift from British-French to American global dominance after WWII — the canal nationalization gave Britain and France an opportunity to reassert imperial power, but American refusal to support their intervention (and threat of financial sanctions) forced humiliating withdrawal, demonstrating that the USA (concerned about Soviet alignment of Arab states) had replaced Britain as the dominant Western power capable of determining outcomes in formerly British imperial spheres',
              'The Suez Crisis demonstrated continued British imperial strength',
              'American support was the decisive factor that enabled British success at Suez',
              'The Suez Crisis had no significance for global power relationships',
            ],
            correctAnswer: 0,
            explanation: '1956 as British imperial decline marker is AP\'s periodization: Gamal Abdel Nasser nationalized the canal (July 1956) to fund the Aswan Dam after the USA withdrew its financing offer. Britain and France conspired with Israel to create a pretext for military intervention (Israel attacked Egypt; Britain and France demanded both sides withdraw; Egyptian refusal gave pretext for Anglo-French invasion). The USA (Eisenhower) was furious — this was not the Cold War framework; it threatened to drive Egypt into Soviet alignment. The USA threatened to withhold IMF loans from Britain (which was experiencing a currency crisis), forcing Britain to call a ceasefire. Prime Minister Eden resigned. The Suez Crisis marks the definitive end of British independent great-power status.'
          },
          {
            question: 'Comparing the Suez Canal (1869) and Panama Canal (1914) reveals which common pattern?',
            options: [
              'Both canals were built in contexts where the constructing power\'s relationship to the host territory was structurally unequal — France/Britain controlled Egypt financially and politically when Suez was built; the USA created the Republic of Panama in 1903 by supporting Panamanian separation from Colombia, then negotiated the Canal Zone treaty with the new government it had just created — demonstrating that major infrastructure projects in the 19th-early 20th century required control over host territory, often through financial dependency or direct territorial control',
              'Both canals were built in contexts of genuine partnership between engineering firms and fully sovereign host nations',
              'The two canals were entirely different in their political contexts with no comparable patterns',
              'The host nations retained full control over both canals from construction through operation',
            ],
            correctAnswer: 0,
            explanation: 'Infrastructure and sovereignty is AP\'s political economy comparison: Egypt was formally independent (though an Ottoman vassal) when Suez construction began, but French and British financial penetration meant Egyptian sovereignty was nominal. Panama did not exist as a state until Teddy Roosevelt supported Panamanian separation from Colombia in 1903 — specifically to get a more favorable canal treaty. The Canal Zone then became effectively a US territory. In both cases, the engineering project required political control over the host territory — demonstrating that 19th-early 20th century infrastructure imperialism required territorial or financial control, not just commercial negotiation.'
          }
        ]
      }
    },
    {
      id: 'whtrans4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The French engineer who designed and built the Suez Canal (1869) and later failed at Panama was ___',
            options: [
            'Ferdinand de Lesseps',
            'Isambard Kingdom Brunel',
            'George Goethals',
            'John Stevens',
            ]
          },
          {
            label: 'The American medical officer whose mosquito eradication campaign made Panama Canal construction possible was ___',
            options: [
            'William Gorgas',
            'Walter Reed',
            'Ronald Ross',
            'Carlos Finlay',
            ]
          },
          {
            label: 'The Egyptian leader who nationalized the Suez Canal in 1956, triggering the Suez Crisis and demonstrating Britain\'s imperial decline, was ___',
            options: [
            'Gamal Abdel Nasser',
            'King Farouk',
            'Anwar Sadat',
            'Mohammed Naguib',
            ]
          }
        ],
        correctAnswers: [
          'Ferdinand de Lesseps',
          'William Gorgas',
          'Gamal Abdel Nasser',
        ],
        hint1: 'De Lesseps — Suez 1869 success — then Panama 1881-1889 failure — disease underestimated — French bankruptcy — Compagnie Universelle',
        hint2: 'Gorgas — US Army surgeon — applied Reed yellow fever research — mosquito eradication Panama Zone — disease eliminated before major construction — 1904-1906',
        hint3: 'Nasser Egypt 1956 — nationalized Suez Canal — fund Aswan Dam — British French invasion — USA forced withdrawal — Eisenhower — British imperial decline marker',
        explanation: 'De Lesseps connects Suez success to Panama failure and demonstrates the human agency dimension of canal history; Gorgas demonstrates how medical science was the prerequisite for tropical engineering success; and Nasser demonstrates how the canal\'s geopolitical significance outlasted British imperialism and became the site of the definitive test of post-WWII power relationships — together they show the full historical arc of canal history from construction to decolonization.'
      }
    },
    {
      id: 'whtrans4-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Suez Canal\'s strategic significance to the British Empire was that it:',
            options: [
              'Reduced the distance between Britain and India from 20,000 km (around Africa) to 12,000 km — cutting travel time by 40% and making India accessible in weeks rather than months; this transformed the strategic calculus of governing India (troops could be deployed rapidly; administrators rotated regularly; cotton and manufactured goods traded efficiently), explaining why Britain\'s 1882 military occupation of Egypt was primarily motivated by canal security',
              'The canal had only commercial significance — it had no strategic or military importance',
              'The Suez Canal was primarily important for connecting Australia to Britain rather than India',
              'The canal reduced travel time to India by 90% — from years to weeks',
            ],
            correctAnswer: 0,
            explanation: 'Canal geometry is AP\'s strategic geography: the Cape of Good Hope route from Britain to Bombay was approximately 19,000 km. The Suez route was approximately 11,000 km — a 42% reduction. At 10-12 knots (typical steamship speed), this meant the difference between 65 and 38 days of sailing. For military deployment: a brigade of troops could reach India in 5-6 weeks instead of 9-10 weeks. For trade: cotton textile shipment times dropped; manufactured goods could be exported more cheaply to Asian markets. The Suez Canal was the physical expression of British imperial power over the "lifeline of empire" — which is why its nationalization in 1956 was experienced as existential by Britain\'s imperial politicians.'
          },
          {
            question: 'For AP, the Suez and Panama canals\' most significant historical legacy was:',
            options: [
              'Demonstrating that major engineering infrastructure projects are simultaneously technological, economic, political, and social achievements whose construction and operation embed power relationships — both canals required imperial political control over host territories, used racially stratified labor systems, served great-power strategic interests, and generated political conflicts (Suez 1956; Panama treaties 1977-1999) whose resolution marked shifts in global power relationships',
              'The canals were purely engineering achievements with no political or social dimensions',
              'Their legacy was only economic — they had no political or strategic significance beyond shipping cost reduction',
              'The canals\' legacy was negative — they caused more economic harm than benefit through their construction costs',
            ],
            correctAnswer: 0,
            explanation: 'Infrastructure as political-economic-social system is AP\'s synthesis: AP history analysis treats infrastructure as embedded in social and political contexts rather than as neutral technology. The Suez Canal is not just a shorter shipping route — it is the physical expression of British imperial power, Egyptian financial dependency, French engineering ambition, and colonial labor exploitation. The Panama Canal is not just a connection between oceans — it is American imperial expansion (creating Panama), racial labor hierarchy, tropical disease control enabling construction, and Cold War politics (1977 Carter-Torrijos treaty returning canal to Panama). Understanding either canal requires all these dimensions, not just the engineering.'
          }
        ]
      }
    }
  ]
}
