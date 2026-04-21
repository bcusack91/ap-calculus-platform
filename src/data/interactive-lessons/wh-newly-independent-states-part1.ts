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
              'Colonial borders drawn at the 1884–85 Berlin Conference cut across ethnic and linguistic groups, producing post-independence states whose populations did not share a common ethnic or political identity',
              'Newly independent African states were uniformly ethnically homogeneous and the colonial era had drawn borders that closely matched precolonial ethnic and political boundaries throughout the entire continent',
              'European colonial powers had built dense industrial economies in their African colonies that gave newly independent states diversified manufacturing bases ready for postwar economic competition',
              'Newly independent African states inherited functioning multi-party parliamentary democracies fully staffed with experienced African politicians and civil servants ready to govern from independence'
            ],
            correctAnswer: 0,
            explanation: 'The Berlin Conference borders are the canonical AP example of colonial inheritance shaping post-independence conflict. Civil wars in Nigeria, Sudan, and the DRC trace directly to those borders.'
          },
          {
            question: 'Which best characterizes the typical post-independence economic inheritance?',
            options: [
              'A diversified industrial economy producing finished consumer goods for both domestic and international export markets in fully developed industrial sectors',
              'An export-dependent economy oriented to producing raw materials (cotton, copper, cocoa, oil) for the former colonial power, with limited domestic industry or processing capacity',
              'A fully self-sufficient agricultural economy that did not engage in international trade and required no external markets to function in the postwar period',
              'A purely service-sector economy based on global finance and information technology that newly independent states inherited from the colonial period of the late 19th century'
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
              'Newly independent states inherited colonial borders that often did not match ethnic lines, weak administrations, and export-dependent economies, all of which required decades of further state-building, civil-rights legislation, and economic reform after the formal date of independence',
              'Newly independent states inherited fully formed national identities, strong central administrations, and diversified industrial economies that required no further state-building work after the date of formal independence from European colonial rule',
              'Newly independent states ceased to exist as coherent political units shortly after independence and were absorbed back into former colonial empires by the early 1960s without sustained nation-building efforts',
              'Newly independent states had no inheritance from the colonial period and were able to begin nation-building from a blank slate without any constraints from the colonial-era economic and political structures'
            ],
            correctAnswer: 0,
            explanation: 'The strongest response identifies the structural inheritance (borders, administration, economy) AND the long-term work required after independence. The other options collapse into caricatures.'
          },
          {
            question: 'Which best demonstrates AP "complexity" by holding two ideas about post-independence governance in tension?',
            options: [
              'Many newly independent states adopted democratic constitutions at independence, but also faced strong pressure toward one-party or military rule from inherited weak institutions, ethnic fragmentation, and Cold War aid politics that often rewarded strongman regimes',
              'Newly independent states all adopted identical political systems and faced no meaningful variation in their political trajectories during the long period between 1945 and the end of the Cold War in 1991',
              'Newly independent states all became one-party states immediately after independence and never experimented with multi-party elections at any point in the period from 1945 to 1991 worldwide',
              'Newly independent states had no agency in choosing political systems and had political models imposed on them by either the United States or the Soviet Union at the moment of formal independence'
            ],
            correctAnswer: 0,
            explanation: 'Complexity rewards holding democratic aspirations AND structural pressure toward authoritarianism in the same sentence. The other options are reductive.'
          }
        ]
      }
    }
  ]
}
