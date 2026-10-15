export const whNewlyIndependentStatesPart1Data = {
  topicSlug: 'wh-newly-independent-states',
  sections: [
    {
      id: 'whnis1-intro',
      type: 'text' as const,
      content: `
# Newly Independent States After 1945

**Part 1 of 7 — Core Concepts**

---

| Section |
|---|
| What "newly independent" actually means |
| Inherited structures: borders, bureaucracies, economies |
| Three central challenges: nation-building, modernization, alignment |
| AP framing: continuity vs. change after independence |

> Key idea: Independence was the beginning, not the end, of the post-1945 nation-building project. Newly independent states inherited colonial borders that often did not match ethnic or religious lines, weak central administrations, export-dependent economies, and the geopolitical pressure of the Cold War. The AP exam expects you to see decolonization as a launching point that opened a half-century of state-building, economic experimentation, and political realignment.
      `
    },
    {
      id: 'whnis1-content',
      type: 'text' as const,
      content: `
## What Newly Independent States Inherited

> **Colonial Borders Drawn on Maps, Not in Communities**

| Region | Colonial Inheritance | Post-Independence Tension |
|---|---|---|
| South Asia | British India partitioned into Hindu-majority India and Muslim-majority Pakistan (1947) | ~1 million dead; 14 million displaced; three Indo-Pakistani wars |
| Sub-Saharan Africa | Borders drawn at the 1884–85 Berlin Conference cut across ethnic groups | Civil wars in Nigeria (Biafra 1967–70), Sudan, DR Congo |
| Middle East | Sykes-Picot lines (1916) and the British Mandate of Palestine (1920–48) | Arab-Israeli wars (1948, 1956, 1967, 1973) |
| Southeast Asia | French Indochina divided into Vietnam, Laos, Cambodia | Vietnam War; Cambodian genocide |

> **Three Central Post-Independence Challenges**

1. **Nation-building** — turning a colonial administrative unit into a coherent national community with shared identity and loyalty
2. **Modernization** — building infrastructure, education, public health, and an industrial economy from a colonial base designed for raw-material extraction
3. **Alignment** — choosing a relationship with the U.S., the USSR, the former colonial power, and the Non-Aligned Movement

> **Three Models of Post-Independence Governance**

| Model | Examples | Features |
|---|---|---|
| Multi-party democracy | India (1947–) | Universal suffrage, periodic elections, contested press |
| One-party state | Tanzania under Nyerere; Ghana under Nkrumah after 1964; many African states | Single ruling party, often justified as "African socialism" |
| Military regime | Nigeria after 1966; many Latin American states; Egypt after 1952 | Direct rule by armed forces, often through coups |

- **Key takeaway:** Most newly independent states experimented with multiple governance models within their first 30 years. Only India sustained continuous multi-party democracy from independence — and even India had a 1975–77 emergency suspending civil liberties.
      `
    },
    {
      id: 'whnis1-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — What Independence Inherited**`,
      exercise: {
        questions: [
          {
            question: 'Which structural inheritance most directly shaped the political problems of post-independence African states?',
            options: [
              'Colonial borders drawn in the Scramble for Africa cut across ethnic and linguistic groups, leaving states whose peoples shared no common identity',
              'Borders under colonial rule closely followed precolonial ethnic and political lines, so most new African states began with ethnically uniform populations',
              'Colonial powers had built dense industrial economies in Africa, leaving new states diversified manufacturing bases ready for global competition',
              'New African states inherited functioning multi-party parliaments fully staffed by experienced African politicians and senior civil servants'
            ],
            correctAnswer: 0,
            explanation: 'Borders drawn in the era of the 1884–85 Berlin Conference are the canonical AP example of colonial inheritance shaping post-independence conflict. Civil wars in Nigeria, Sudan, and the DRC are often linked in part to those borders.'
          },
          {
            question: 'Which best characterizes the typical post-independence economic inheritance?',
            options: [
              'A diversified industrial economy (textiles, steel, machinery) producing finished goods for domestic buyers and export markets',
              'An export economy built to supply raw materials (cotton, copper, cocoa, oil) to the former colonial power, with little local processing',
              'A self-sufficient farming economy that traded little abroad and needed no external markets for its crops in the postwar period',
              'A service economy built on finance and shipping, inherited from colonial port cities that had served as global trading hubs'
            ],
            correctAnswer: 1,
            explanation: 'Colonial economies were built to export raw materials. Diversifying away from this single-commodity dependency was the central economic project of newly independent states.'
          }
        ]
      }
    },
    {
      id: 'whnis1-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — name the right concept**`,
      exercise: {
        questions: [
          {
            prompt: 'The 1947 division of British India into Hindu-majority India and Muslim-majority Pakistan, accompanied by mass displacement and ~1 million deaths.',
            answer: 'Partition',
            acceptableAnswers: ['Partition', 'Partition of India'],
            hint: 'A single word commonly capitalized when referring to this event.'
          },
          {
            prompt: 'The 1884–85 European conference that drew most of the colonial borders that became the modern African states.',
            answer: 'Berlin Conference',
            acceptableAnswers: ['Berlin Conference'],
            hint: 'Convened by Bismarck; carved Africa into European spheres.'
          },
          {
            prompt: 'The first elected president of independent Ghana (1960) and a leading Pan-African and African socialist thinker.',
            answer: 'Kwame Nkrumah',
            acceptableAnswers: ['Nkrumah', 'Kwame Nkrumah'],
            hint: 'Led Ghana to independence in 1957 from British rule.'
          }
        ]
      }
    },
    {
      id: 'whnis1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each newly independent state to the post-1945 governance model it best illustrates.**`,
      exercise: {
        dropdowns: [
          {
            label: 'India after 1947 under Nehru and the Indian National Congress is an example of: ___',
            options: ['multi-party democracy', 'one-party state', 'military regime', 'colonial administration']
          },
          {
            label: 'Tanzania after 1964 under Julius Nyerere and the TANU/CCM party is an example of: ___',
            options: ['multi-party democracy', 'one-party state', 'military regime', 'colonial administration']
          },
          {
            label: 'Egypt after the 1952 Free Officers coup under Nasser is an example of: ___',
            options: ['multi-party democracy', 'one-party state', 'military regime', 'colonial administration']
          }
        ],
        correctAnswers: ['multi-party democracy', 'one-party state', 'military regime'],
        hint1: 'India held continuous national elections starting in 1951.',
        hint2: 'Nyerere\'s Tanzania institutionalized single-party rule under Ujamaa African socialism.',
        hint3: 'Egypt was ruled by military officers after Nasser overthrew King Farouk in 1952.',
        explanation: 'These three cases illustrate the three main post-independence governance models. India sustained competitive elections; Tanzania institutionalized one-party rule; Egypt established direct military rule.'
      }
    },
    {
      id: 'whnis1-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: 'A historian writes: "Independence was the start, not the end, of the nation-building project." Which response best supports the claim with AP-quality reasoning?',
            options: [
              'New states inherited mismatched borders, weak administrations, and export-dependent economies, demanding decades of state-building',
              'New states inherited unified national identities, strong central administrations, and diversified economies that needed little further state-building work',
              'New states soon ceased to be coherent political units and were absorbed back into the former colonial empires by the early 1960s, ending nation-building',
              'New states began from a blank slate, free of colonial economic and political structures, so independence itself completed most of the nation-building work'
            ],
            correctAnswer: 0,
            explanation: 'The strongest response identifies the structural inheritance (borders, administration, economy) AND the long-term work required after independence. The other options collapse into caricatures.'
          },
          {
            question: 'Which best demonstrates AP "complexity" by holding two ideas about post-independence governance in tension?',
            options: [
              'Many new states adopted democratic constitutions, yet weak institutions, ethnic fragmentation, and Cold War aid that rewarded strongmen pushed them toward one-party or military rule',
              'New states all adopted identical political systems, so their political paths showed little meaningful variation between independence and the end of the Cold War in 1991',
              'New states all became one-party regimes at independence and never held competitive, free, or multi-party elections at any point between 1945 and 1991',
              'New states had little agency in choosing their political systems, since the United States or the Soviet Union imposed a political model on each one at the moment of formal independence'
            ],
            correctAnswer: 0,
            explanation: 'Complexity rewards holding democratic aspirations AND structural pressure toward authoritarianism in the same sentence. The other options are reductive.'
          }
        ]
      }
    }
  ]
}
