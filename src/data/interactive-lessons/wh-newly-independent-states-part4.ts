export const whNewlyIndependentStatesPart4Data = {
  topicSlug: 'wh-newly-independent-states',
  sections: [
    {
      id: 'whnis4-intro',
      type: 'text' as const,
      content: `
# Newly Independent States After 1945

**Part 4 of 7 — Connections & Interactions**

---

| Section |
|---|
| Migration: postcolonial diasporas to former metropoles |
| Religion and politics in newly independent states |
| Women's movements and post-independence rights |
| Cold War aid politics and post-independence development |

> Key idea: Newly independent states never developed in isolation. They sent migrants to former colonial centers (London, Paris, Lisbon), they negotiated religious and gender hierarchies inherited from both colonial and precolonial periods, and they participated in a Cold War aid system that shaped their political choices. AP graders reward writers who can connect post-independence history to global migration, religion, gender, and the Cold War.
      `
    },
    {
      id: 'whnis4-content',
      type: 'text' as const,
      content: `
## Postcolonial Migration

> **Major Postcolonial Migration Flows**

| Origin | Destination | Period | Significance |
|---|---|---|---|
| Caribbean (Jamaica, Trinidad) | United Kingdom | 1948–1971 (Windrush generation) | Reshaped British race relations; Notting Hill Carnival |
| North Africa (Algeria, Morocco) | France | 1950s–1970s | Largest postcolonial migration to Europe; tensions evident in 2005 banlieue riots |
| South Asia (India, Pakistan) | UK; Persian Gulf states | 1947 onward | Built Indian/Pakistani diasporas; Gulf labor remittances became major economic flow |
| Vietnam | U.S., France, Australia | 1975 onward (post-fall of Saigon) | "Boat people"; created Vietnamese-American diaspora |
| Mexico, Central America | United States | 1965 onward (after Hart-Celler immigration reform) | Hispanic population became largest U.S. minority by 2003 |

> **Key Migration Concepts**

- **Remittances** — money sent home by migrants; in some states (Philippines, Bangladesh, Mexico) over 5% of GDP by 2000
- **Diaspora** — community of co-nationals living abroad who retain ties to the home country
- **Brain drain** — migration of skilled professionals (doctors, engineers) from poorer to richer countries

## Religion and Post-Independence Politics

> **Religion as a Mobilizing Force**

| Country | Religious Movement | Outcome |
|---|---|---|
| Iran | Shia Islamism under Khomeini | 1979 Islamic Revolution overthrew the Shah |
| Egypt | Muslim Brotherhood (founded 1928) | Banned by Nasser; emerged as opposition; briefly governed 2012–13 |
| India | Hindu nationalism (RSS, BJP) | Grew from a small movement in 1947 to electoral majority by 2014 |
| Latin America | Liberation theology (Catholic) | Combined Christian doctrine with social justice; targeted by U.S.-backed regimes in El Salvador, Nicaragua |
| Israel | Religious Zionism | Influenced settler movements after 1967 |

## Women's Movements in Newly Independent States

> **Gains and Limits**

| Country | Reform | Year | Limit |
|---|---|---|---|
| Egypt | Women gained suffrage | 1956 | Family law remained governed by Islamic personal status code |
| Tunisia | Code of Personal Status banned polygamy and gave women divorce rights | 1956 (Bourguiba) | Most progressive in the Arab world |
| India | Hindu Code Bills reformed marriage and inheritance | 1955–56 | Did not extend to Muslim personal law |
| China | 1950 Marriage Law banned arranged marriage and concubinage | 1950 | Implementation uneven; Cultural Revolution disrupted further reform |
| Iran | Family Protection Law (1967) restricted polygamy and raised marriage age | 1967 | Reversed by 1979 revolution |

## Cold War Aid Politics

| Aid Source | Form of Leverage | Example |
|---|---|---|
| U.S. (USAID, Alliance for Progress) | Grants and loans tied to anti-communist alignment | Latin American dictators (Brazil 1964–85; Chile after 1973) |
| Soviet Union | Military aid, infrastructure projects | Aswan High Dam (Egypt, 1960–70); MPLA support in Angola |
| China (after 1971) | Infrastructure aid; Tanzania-Zambia Railway (TAZARA, 1970–75) | Built Chinese diplomatic presence in Africa |
| IMF and World Bank | Conditional loans; Structural Adjustment after 1980 | Forced cuts to social spending across Africa |

- **Key takeaway:** Use these connections to add nuance to AP responses. A prompt about post-independence India can be enriched by mentioning the Indian diaspora in the UK and Gulf, the rise of Hindu nationalism, the limits of Hindu Code Bills for Muslim women, and India's nonalignment in Cold War aid politics.
      `
    },
    {
      id: 'whnis4-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Cross-Category Connections**`,
      exercise: {
        questions: [
          {
            question: 'Which best illustrates how postcolonial migration reshaped both former colonial powers and newly independent states after 1945?',
            options: [
              'Caribbean migrants to Britain (the Windrush generation) and Algerian migrants to France changed European race relations and built diasporas that sent remittances home',
              'Postcolonial migration stayed within the borders of newly independent states, producing few flows to the former colonial powers in Europe between 1948 and the late 1980s',
              'Postcolonial migration ran mainly from Europe to the former colonies (settlers and officials moving outward), while few colonial subjects moved to Britain or France',
              'Postcolonial migration had little effect on sending countries, since migrants rarely sent remittances or kept ties with their home communities after settling abroad'
            ],
            correctAnswer: 0,
            explanation: 'The Windrush and Algerian migrations are the canonical postcolonial flows to former metropoles. They reshaped both sides — European race relations and home-country economies through remittances.'
          },
          {
            question: "Which best characterizes the long-term significance of the 1979 Iranian Revolution for the global rise of religious-political movements?",
            options: [
              'It showed a mass religious movement could topple a U.S.-backed secular regime, giving Islamists across the Muslim world a model and a rallying point',
              'It produced an Islamic state confined to Iran, with little influence on religious-political movements in other countries or religious traditions in later decades',
              'It returned Iran to the rule of the Shah within months and had no lasting effect on the role of religion in Middle Eastern or global politics in the late 20th century',
              'It ended religious politics in the Middle East, as the new regime\'s quick collapse discredited religious-political mobilization across the region for decades'
            ],
            correctAnswer: 0,
            explanation: 'The Iranian Revolution showed that religious mobilization could overthrow a Cold War client state. It became a reference point for Islamist movements, Shia and Sunni, and is often discussed alongside the wider late-20th-century rise of religious politics.'
          }
        ]
      }
    },
    {
      id: 'whnis4-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — connections terms`,
      exercise: {
        questions: [
          {
            prompt: 'Money sent home by migrants working abroad — over 5% of GDP in some sending countries by 2000.',
            answer: 'remittances',
            acceptableAnswers: ['remittances', 'remittance'],
            hint: 'Money flows from migrants back to their home country.'
          },
          {
            prompt: 'The Caribbean immigrants to the UK between 1948 and 1971 named for the ship that brought the first major group.',
            answer: 'Windrush generation',
            acceptableAnswers: ['Windrush generation', 'Windrush'],
            hint: 'Empire Windrush docked in Tilbury in June 1948.'
          },
          {
            prompt: 'The 1956 Tunisian law (under Bourguiba) banning polygamy and giving women divorce rights — the most progressive in the Arab world.',
            answer: 'Code of Personal Status',
            acceptableAnswers: ['Code of Personal Status', 'Tunisian Code of Personal Status'],
            hint: 'Sometimes abbreviated CSP from the French Code du Statut Personnel.'
          }
        ]
      }
    },
    {
      id: 'whnis4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each post-1945 development to the cross-category connection it best illustrates.**`,
      exercise: {
        dropdowns: [
          {
            label: 'Algerian migration to France during the 1950s–70s is most directly an example of: ___',
            options: ['postcolonial migration to former metropoles', 'religious mobilization in newly independent states', 'conditional lending leverage', 'post-independence civil war']
          },
          {
            label: 'The 1979 Iranian Revolution under Khomeini is most directly an example of: ___',
            options: ['postcolonial migration to former metropoles', 'religious mobilization in newly independent states', 'conditional lending leverage', 'post-independence civil war']
          },
          {
            label: 'IMF Structural Adjustment Programs in 1980s Africa is most directly an example of: ___',
            options: ['postcolonial migration to former metropoles', 'religious mobilization in newly independent states', 'conditional lending leverage', 'post-independence civil war']
          }
        ],
        correctAnswers: ['postcolonial migration to former metropoles', 'religious mobilization in newly independent states', 'conditional lending leverage'],
        hint1: 'Algerian migration was directed mainly to France, the former colonial power.',
        hint2: 'Khomeini\'s revolution mobilized Shia Islamist religious authority against a secular monarchy.',
        hint3: 'SAPs were conditional loans that forced spending cuts in exchange for IMF support.',
        explanation: 'These three cases show how post-independence history connected to migration, religion, and global financial leverage. Use them to add nuance to single-cause explanations on the AP exam.'
      }
    },
    {
      id: 'whnis4-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: 'A historian writes: "Women\'s gains in newly independent states after 1945 were real but uneven across religious and legal domains." Which response best supports both halves of the claim?',
            options: [
              'Egypt gave women the vote in 1956 and Tunisia\'s 1956 personal status code banned polygamy, yet Egypt kept religious family law and Tunisia kept unequal inheritance rules',
              'Women in newly independent states made almost no legal gains between 1945 and 1990, remaining subordinate everywhere regardless of religion or political alignment',
              'Women in newly independent states gained full legal equality at independence, and religious and family law placed few limits on the reach of gender reform',
              'Women\'s gains were nearly uniform across newly independent states, since regional, religious, and legal differences had little effect on the pace of reform'
            ],
            correctAnswer: 0,
            explanation: 'The both/and AP move is to name the gains AND the limits in the same sentence. Egypt\'s 1956 suffrage and Tunisia\'s 1956 Code of Personal Status were real gains, while religious personal status law in Egypt and unequal inheritance shares in Tunisia marked their limits.'
          },
          {
            question: 'Which best illustrates the Cold War shaping post-independence political choices?',
            options: [
              "U.S.-backed regimes (Brazil after 1964; Chile after 1973) got aid tied to anti-communism, while Soviet-backed ones (Cuba; Angola's MPLA) got aid tied to opposing the U.S.",
              'Cold War aid had little effect on post-independence politics, since new states made their political choices without any reference to the interests of the United States or the Soviet Union',
              'Cold War aid came mainly through the United Nations (UNICEF and the World Bank) rather than from either superpower, and it carried no political conditions',
              'Cold War aid went mainly to European countries, while new states in Asia, Africa, and Latin America received little from either superpower before 1991'
            ],
            correctAnswer: 0,
            explanation: 'Cold War aid was openly tied to alignment. Naming both U.S. cases (Brazil, Chile) and Soviet cases (Cuba, MPLA) shows balanced application of the framework.'
          }
        ]
      }
    }
  ]
}
