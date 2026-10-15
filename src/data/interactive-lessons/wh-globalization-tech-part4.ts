export const whGlobalizationTechPart4Data = {
  topicSlug: 'wh-globalization-tech',
  sections: [
    {
      id: 'whgt4-intro',
      type: 'text' as const,
      content: `
# Globalization & Technology After 1900

**Part 4 of 7 — Connections & Interactions**

---

| Section |
|---|
| Mass migration: economic migrants, refugees, brain drain |
| Diasporas, remittances, and transnational communities |
| Resistance: anti-globalization movements (Seattle 1999, World Social Forum) |
| Pandemics in a globalized world: HIV/AIDS, SARS, H1N1, COVID-19 |

> Key idea: Globalization is not just trade and finance. It moves people, viruses, ideas, and protests across borders. AP prompts often ask about how migration and disease have reshaped political and cultural life — and how protest movements have organized transnationally to challenge the globalization model itself.
      `
    },
    {
      id: 'whgt4-content',
      type: 'text' as const,
      content: `
## Mass Migration After 1945

| Type | Examples |
|---|---|
| Labor migration | Turks to Germany (Gastarbeiter, 1961+); Mexicans to U.S. (Bracero 1942–64, post-1965 immigration); Filipinos and South Asians to Gulf States |
| Refugee flows | Palestinians 1948+; Vietnamese boat people 1975+; Afghans 1979+; Syrians 2011+; Ukrainians 2022+ |
| Postcolonial migration | West Indians to UK (Windrush); Algerians to France; Indonesians to the Netherlands |
| Brain drain | Indian engineers to Silicon Valley; African doctors to UK/Canada; Chinese students to U.S. universities |

## Diasporas and Remittances

| Country | Remittances (2020 est.) | Significance |
|---|---|---|
| India | ~\\$83 billion | Largest remittance recipient globally |
| Mexico | ~\\$43 billion | ~3% of GDP |
| Philippines | ~\\$35 billion | ~10% of GDP |
| Egypt | ~\\$30 billion | Major source of foreign currency |

- **Diaspora politics matter:** Indian diaspora lobbies in U.S. helped pass the 2008 U.S.-India nuclear deal; Cuban-Americans in Florida shaped U.S. Cuba policy; Israeli diaspora networks shape U.S.-Israel ties.

## Anti-Globalization Movements

| Event | Year | Significance |
|---|---|---|
| Battle of Seattle | 1999 | Tens of thousands shut down WTO meeting; coalition of unions, environmentalists, indigenous groups |
| World Social Forum (Porto Alegre) | 2001+ | "Another world is possible" — annual gathering of left/global-justice movements |
| Genoa G8 protests | 2001 | One protester killed by police; further militarization of summit security |
| Occupy Wall Street | 2011 | "We are the 99%" — protest against post-2008 inequality |
| Yellow Vests (France) | 2018+ | Protest against fuel taxes; broader anti-globalization grievances |

## Pandemics in a Globalized World

| Disease | Years | Notes |
|---|---|---|
| HIV/AIDS | 1981+ | ~40 million dead globally; activist movements (ACT UP) won expanded treatment access |
| SARS | 2002–03 | Originated in China; spread along air travel routes; ~800 dead |
| H1N1 ("swine flu") | 2009 | First WHO-declared pandemic of the century |
| Ebola | 2014–16 | Concentrated in West Africa; revealed weak global health infrastructure |
| COVID-19 | 2020+ | Started in Wuhan; ~7 million confirmed deaths; mRNA vaccines developed in under a year |

- **Pandemic globalization paradox:** Cheap air travel that enables tourism and global business is the same infrastructure that turns a regional outbreak into a global pandemic in weeks.

- **Key takeaway:** AP prompts on connections often ask students to analyze how a single phenomenon (migration, disease, protest) tied together multiple regions. The strongest essays name specific cases (Windrush, COVID, Seattle) rather than speaking abstractly about "global integration."
      `
    },
    {
      id: 'whgt4-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Migration and pandemics**`,
      exercise: {
        questions: [
          {
            question: 'Which best describes the West German Gastarbeiter ("guest worker") program of the 1960s?',
            options: [
              'A labor recruitment program that brought Turkish, Italian, Greek, and Yugoslav workers to West Germany on temporary contracts; many settled and built lasting communities',
              'A West German policy that barred foreign workers from entering the country during the postwar recovery, reserving industrial jobs for German citizens and East German refugees',
              'A program that resettled West German workers in Turkey, Greece, and Yugoslavia during the Cold War to staff factories built with Marshall Plan aid',
              'A NATO program that stationed Turkish and Italian soldiers in West Germany during the Cold War, with no civilian labor migration involved'
            ],
            correctAnswer: 0,
            explanation: 'Gastarbeiter brought Turkish, Italian, Greek, and Yugoslav workers under temporary contracts that, in practice, became permanent immigration.'
          },
          {
            question: 'Which best characterizes the 1999 "Battle of Seattle"?',
            options: [
              'A coalition of unions, environmentalists, and indigenous-rights activists disrupted a WTO ministerial meeting with mass protests, marking the anti-globalization movement\'s debut',
              'A WTO ministerial agreement on environmental and labor standards that resolved disputes between developed and developing countries at the 1999 Seattle meeting',
              'A lawsuit in which Seattle environmental, labor, and consumer groups sued the WTO in U.S. federal court to force binding emissions cuts in 1999',
              'A strike by Seattle dockworkers that shut down West Coast ports for weeks, disrupting container shipments from Asia during the 1999 holiday season'
            ],
            correctAnswer: 0,
            explanation: 'Seattle 1999 is the international debut of the anti-globalization movement: union/environmental/indigenous coalition shut down the WTO meeting.'
          }
        ]
      }
    },
    {
      id: 'whgt4-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — connections vocabulary**`,
      exercise: {
        questions: [
          {
            prompt: 'Money sent home by migrant workers to their families in their country of origin.',
            answer: 'remittances',
            acceptableAnswers: ['remittances', 'remittance'],
            hint: "These exceed foreign aid for many developing economies."
          },
          {
            prompt: 'A community of people from the same homeland living scattered across other countries.',
            answer: 'diaspora',
            acceptableAnswers: ['diaspora', 'diasporas'],
            hint: 'From a Greek word meaning "scattering."'
          },
          {
            prompt: 'The viral pandemic that originated in Wuhan, China in late 2019 and spread globally in 2020.',
            answer: 'COVID-19',
            acceptableAnswers: ['COVID-19', 'COVID', 'Covid', 'Covid-19', 'coronavirus', 'SARS-CoV-2'],
            hint: 'Caused by SARS-CoV-2; the WHO declared a pandemic in March 2020.'
          }
        ]
      }
    },
    {
      id: 'whgt4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each migration flow to the correct receiving country.**`,
      exercise: {
        dropdowns: [
          {
            label: 'Windrush Caribbean migrants between 1948 and 1971: ___',
            options: ['United Kingdom', 'France', 'West Germany', 'United States']
          },
          {
            label: 'Algerian migrants from the 1950s through the 1970s: ___',
            options: ['United Kingdom', 'France', 'West Germany', 'United States']
          },
          {
            label: 'Turkish Gastarbeiter migrants from 1961 onward: ___',
            options: ['United Kingdom', 'France', 'West Germany', 'United States']
          }
        ],
        correctAnswers: ['United Kingdom', 'France', 'West Germany'],
        hint1: 'Caribbean migration was to the former British metropole.',
        hint2: 'Algerian migration was to the former French metropole.',
        hint3: 'Turkish guest workers went to the West German "economic miracle."',
        explanation: 'Each flow followed colonial or labor-recruitment ties: Caribbean → UK (Windrush), Algerians → France, Turks → West Germany.'
      }
    },
    {
      id: 'whgt4-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Globalization and pandemics**`,
      exercise: {
        questions: [
          {
            question: 'Which response best uses the COVID-19 pandemic to illustrate a paradox of post-1990 globalization?',
            options: [
              "The air travel and supply chains behind post-1990 globalization spread a Wuhan outbreak worldwide in weeks, showing interdependence transmits risks too",
              "The pandemic spread independently of globalization, and it would have reached the same regions at the same speed without modern air travel or integrated supply chains",
              "The pandemic stayed largely contained within China, producing few spillover effects elsewhere because global supply chains had already shifted away from Chinese factories",
              "The pandemic showed that globalization had already ended, since trade restrictions from the U.S.-China trade war had cut most air travel and shipping before the outbreak began"
            ],
            correctAnswer: 0,
            explanation: 'AP rewards the paradox framing: globalization\'s infrastructure (planes, supply chains) is what enabled both economic integration AND rapid pandemic spread.'
          },
          {
            question: 'Which response best demonstrates the political and economic significance of remittance flows for major sending countries?',
            options: [
              "Remittances exceed foreign aid for many countries; in the Philippines they equal roughly 10% of GDP, steadying the peso and keeping millions of families above the poverty line",
              "Remittances matter little to sending countries, since most migrant earnings stay abroad and the sums that do return home are too small to affect GDP or household incomes there",
              "Remittances flow mainly from poor countries to rich ones, as families in Mexico, India, and the Philippines send money to support relatives working in wealthy economies",
              "Remittances are collected by sending-country governments, which use them for state budgets rather than passing them on to households in the Philippines, Mexico, or India"
            ],
            correctAnswer: 0,
            explanation: 'The AP-quality answer cites a specific country (Philippines), a specific share of GDP (~10%), and the household-income mechanism.'
          }
        ]
      }
    }
  ]
}
