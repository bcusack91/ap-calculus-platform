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
              'A bilateral labor recruitment program that brought Turkish, Italian, Greek, and Yugoslav workers to West Germany on temporary contracts; many settled permanently and built lasting diaspora communities',
              'A West German policy that prohibited any foreign workers from entering Germany during the postwar economic recovery between 1955 and 1973 across all industrial sectors and skill levels',
              'A Soviet-organized program that resettled East German workers in Turkey and Yugoslavia during the Cold War to build communist labor solidarity across the Mediterranean basin',
              'A NATO security program that stationed Turkish and Italian soldiers in West Germany during the Cold War without any civilian labor migration component of any kind'
            ],
            correctAnswer: 0,
            explanation: 'Gastarbeiter brought Turkish, Italian, Greek, and Yugoslav workers under temporary contracts that, in practice, became permanent immigration.'
          },
          {
            question: 'Which best characterizes the 1999 "Battle of Seattle"?',
            options: [
              'A coalition of trade unions, environmentalists, and indigenous-rights activists shut down a WTO ministerial meeting through mass protests, marking the international emergence of the anti-globalization movement',
              'A formal WTO ministerial agreement on environmental and labor standards that successfully resolved disputes between developed and developing countries during the late 1990s in Seattle',
              'A Seattle-based environmental group that successfully sued the WTO in U.S. federal court to force binding emissions reduction commitments from all WTO member states during 1999',
              'A Microsoft trade conference held in Seattle in 1999 that was unrelated to the WTO and produced no political mobilization or protest activity of any kind during the late 1990s'
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
              "Cheap air travel and integrated supply chains, the very infrastructure that made post-1990 globalization possible, also turned a regional outbreak in Wuhan into a global pandemic in weeks, exposing the speed at which interdependence transmits both goods and risks",
              "The COVID-19 pandemic spread independently of any feature of post-1990 globalization and would have spread at the same speed and to the same regions even without modern air travel or integrated supply chains anywhere in the world",
              "The COVID-19 pandemic was contained entirely within China and produced no measurable spillover effects of any kind into any other region of the world during the entire period from late 2019 through the present day",
              "The COVID-19 pandemic was caused entirely by trade restrictions imposed during the U.S.-China trade war and not by any biological pathogen or pattern of human movement of any kind during the period from late 2019 onward"
            ],
            correctAnswer: 0,
            explanation: 'AP rewards the paradox framing: globalization\'s infrastructure (planes, supply chains) is what enabled both economic integration AND rapid pandemic spread.'
          },
          {
            question: 'Which response best demonstrates the political and economic significance of remittance flows for major sending countries?',
            options: [
              "Remittances exceed foreign aid for many sending countries; for the Philippines, remittances are roughly 10% of GDP, providing foreign currency that stabilizes the peso and household income that keeps millions of Filipino families above the poverty line",
              "Remittances have no measurable effect on the GDP, currency stability, or household incomes of any sending country in any region of the world during the entire period from 1990 through the present day",
              "Remittances flow only from poor countries to rich countries and have no role in supporting household incomes in major migrant-sending countries like the Philippines, Mexico, India, or Egypt at any point",
              "Remittances are entirely controlled by sending-country governments and do not reach individual households in the Philippines, Mexico, India, or Egypt at any point during the period from 1990 onward"
            ],
            correctAnswer: 0,
            explanation: 'The AP-quality answer cites a specific country (Philippines), a specific share of GDP (~10%), and the household-income mechanism.'
          }
        ]
      }
    }
  ]
}
