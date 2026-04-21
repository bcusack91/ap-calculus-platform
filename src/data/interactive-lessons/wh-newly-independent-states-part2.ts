export const whNewlyIndependentStatesPart2Data = {
  topicSlug: 'wh-newly-independent-states',
  sections: [
    {
      id: 'whnis2-intro',
      type: 'text' as const,
      content: `
# Newly Independent States After 1945

**Part 2 of 7 — Key Processes**

---

| Section |
|---|
| Economic models: import substitution vs. export-led growth |
| Land reform: Mexico, Egypt, India, China |
| Population transfers and demographic engineering |
| Mass-mobilization politics in newly independent states |

> Key idea: Newly independent governments did not just inherit colonial structures — they actively transformed them through specific policies. The most important policies were economic (how to industrialize), agrarian (how to redistribute land), demographic (how to manage refugees and migrations), and political (how to build mass party loyalty). Knowing the toolkit lets you classify any post-independence reform on the AP exam.
      `
    },
    {
      id: 'whnis2-content',
      type: 'text' as const,
      content: `
## The Economic Toolkit

> **Import-Substitution Industrialization (ISI)**

- Use tariffs and subsidies to grow domestic industries that replace imported goods
- Examples: Brazil, Mexico, Argentina (1930s–1980s); India under Nehru and the License Raj (1947–91)
- Advantages: builds domestic industry; reduces dependency on former colonial powers
- Disadvantages: protected firms become inefficient; foreign currency reserves run low; balance of payments crises

> **Export-Led Growth**

- Build industries oriented to global markets, often with foreign investment
- Examples: South Korea, Taiwan, Singapore, Hong Kong (the "Asian Tigers" from the 1960s)
- Advantages: rapid GDP growth; technology transfer; rising wages over time
- Advantages depend on: skilled labor, political stability, external market access

> **State Socialism / Central Planning**

- Government owns major industries and directs production through five-year plans
- Examples: USSR (1928–91), Mao's China (1949–78), North Korea, Cuba
- Tanzania's Ujamaa under Nyerere is the African socialist variant emphasizing village collectivization

## Land Reform — A Universal Post-Independence Issue

| Country | Reform | Outcome |
|---|---|---|
| Mexico (1934–40 under Cárdenas) | Distributed ~45 million acres through ejido (communal) holdings | Stabilized rural support for the PRI for decades |
| Egypt (1952 under Nasser) | Capped land holdings; redistributed to small farmers | Strengthened Free Officers regime in countryside |
| India (Nehru era) | Abolition of zamindari (landlord) intermediaries | Uneven implementation; landlord power persisted in many states |
| China (1949–53; then collectivization 1955–58) | Initial peasant land grants, then radical collectivization under Mao | Great Leap Forward famine (~30 million dead) |

## Demographic Engineering

> **The Three Largest Postwar Population Transfers**

1. **Partition of India (1947)** — ~14 million displaced; ~1 million killed in Hindu-Muslim violence
2. **Israel-Palestine (1948 and after)** — ~750,000 Palestinians displaced (Nakba); Jewish immigration from Europe and Arab states
3. **Postwar German expulsions (1945–50)** — ~12 million ethnic Germans expelled from Eastern Europe

## Mass-Mobilization Politics

| Tool | Example |
|---|---|
| Mass single party | Nyerere's TANU (Tanzania); Nasser's Arab Socialist Union; Nkrumah's CPP after 1964 |
| Charismatic founder | Sukarno (Indonesia); Gandhi/Nehru (India); Castro (Cuba) |
| State-controlled media | Egypt's Voice of the Arabs; All India Radio under government control |
| Youth and women's organizations | Mobilized for literacy, public health, and political loyalty |

- **Key takeaway:** Post-independence states deployed the same toolkit in different combinations. South Korea + export-led growth + military rule. India + import substitution + multi-party democracy. Tanzania + Ujamaa socialism + one-party state. Naming the combination is the AP move.
      `
    },
    {
      id: 'whnis2-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Economic and Land Toolkits**`,
      exercise: {
        questions: [
          {
            question: 'Which best describes the import-substitution industrialization (ISI) strategy adopted by many post-independence states from the 1940s to the 1970s?',
            options: [
              'Government use of tariffs and subsidies to build domestic industries that replaced imported goods, often producing initial growth followed by inefficiency, foreign-exchange shortages, and balance of payments crises',
              'Government commitment to free trade and zero tariffs, designed to produce rapid integration into global capitalist markets without protecting domestic firms from foreign competition during the early industrial period',
              'Government withdrawal from all economic planning and full reliance on private foreign investment to direct industrial development without any state involvement in setting industrial priorities or directions',
              'Government adoption of identical Soviet-style central planning across all post-independence economies regardless of political alignment with either the United States or the Soviet Union during the Cold War'
            ],
            correctAnswer: 0,
            explanation: 'ISI is the canonical post-independence strategy: protect domestic industry behind tariffs to substitute for imports. India\'s License Raj and Brazil\'s ISI period are the textbook examples.'
          },
          {
            question: 'Which best characterizes the outcome of land reform in Mexico under President Lázaro Cárdenas in the 1930s?',
            options: [
              'About 45 million acres were redistributed through communal ejido holdings, which stabilized rural support for the ruling Institutional Revolutionary Party (PRI) for decades after the reforms',
              'Land was concentrated in the hands of foreign oil companies and the largest hacienda owners, removing peasant access to communal lands and producing rural depopulation across central Mexico during the 1930s',
              'Land reform was attempted but immediately reversed within months and Mexican land tenure returned to the pre-revolutionary pattern that had existed under the Porfirio Díaz regime before 1910',
              'Land reform created a new class of large commercial farmers who became the dominant landholders, eliminating ejido communal holdings and producing private agricultural concentration similar to settler-colonial patterns'
            ],
            correctAnswer: 0,
            explanation: 'Cárdenas\'s ejido distributions are the most successful Latin American land reform of the 20th century. They built durable peasant loyalty to the PRI, which governed Mexico continuously until 2000.'
          }
        ]
      }
    },
    {
      id: 'whnis2-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — toolkit terms**`,
      exercise: {
        questions: [
          {
            prompt: "Nyerere's program of African socialism in Tanzania, emphasizing village collectivization and self-reliance.",
            answer: 'Ujamaa',
            acceptableAnswers: ['Ujamaa'],
            hint: 'Swahili word meaning familyhood; central to 1967 Arusha Declaration.'
          },
          {
            prompt: 'The Mexican communal land-holding system expanded under Cárdenas in the 1930s.',
            answer: 'ejido',
            acceptableAnswers: ['ejido', 'ejidos'],
            hint: 'Spanish-language term for the village commons.'
          },
          {
            prompt: 'The 1947 displacement of ~14 million people during the Hindu-Muslim partition of British India.',
            answer: 'Partition',
            acceptableAnswers: ['Partition', 'Partition of India'],
            hint: 'Capitalized when referring to this event.'
          }
        ]
      }
    },
    {
      id: 'whnis2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each post-independence policy to the toolkit category it best illustrates.**`,
      exercise: {
        dropdowns: [
          {
            label: "Nehru's License Raj of tariffs and subsidies for Indian heavy industry is an example of: ___",
            options: ['import-substitution industrialization', 'export-led growth strategy', 'land reform', 'mass-mobilization politics']
          },
          {
            label: "South Korea's 1960s–80s state-directed export industries (Hyundai, Samsung) for global markets is an example of: ___",
            options: ['import-substitution industrialization', 'export-led growth strategy', 'land reform', 'mass-mobilization politics']
          },
          {
            label: "Nasser's 1952 Egyptian capping of large land holdings and redistribution to small farmers is an example of: ___",
            options: ['import-substitution industrialization', 'export-led growth strategy', 'land reform', 'mass-mobilization politics']
          }
        ],
        correctAnswers: ['import-substitution industrialization', 'export-led growth strategy', 'land reform'],
        hint1: 'Nehru protected Indian industry behind high tariffs from 1947 onward.',
        hint2: 'South Korea\'s chaebols (Hyundai, Samsung) were built for export markets.',
        hint3: 'Nasser broke up large estates and redistributed land to peasants.',
        explanation: 'These three cases anchor the three economic toolkits. India = ISI. South Korea = export-led growth. Egypt = land reform plus mass-mobilization Arab Socialism.'
      }
    },
    {
      id: 'whnis2-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: 'Which best explains the divergent economic trajectories of India (after 1947) and South Korea (after 1953)?',
            options: [
              'India pursued state-led import substitution behind high tariffs and produced slow steady growth, while South Korea pursued state-coordinated export-led growth that integrated into global markets and produced rapid industrialization by the 1980s',
              'India and South Korea pursued identical economic strategies during the period from 1947 to 1990 and produced equivalent rates of growth and industrialization throughout the period without any meaningful difference',
              'India had no economic strategy and grew through pure private market activity, while South Korea was a fully Soviet-style command economy with no private sector during the period from 1953 to 1990',
              'India industrialized rapidly through Cold War U.S. aid, while South Korea remained an agricultural economy throughout the period from 1953 to 1990 without producing any major industrial sectors of its own'
            ],
            correctAnswer: 0,
            explanation: 'India = ISI = slow steady growth. South Korea = export-led growth + state coordination of chaebols = rapid industrialization. This is the canonical AP comparison for post-independence economic strategy.'
          },
          {
            question: 'Which post-1945 case best illustrates the political costs of failed land reform?',
            options: [
              "China's 1958 Great Leap Forward, in which forced collectivization combined with unrealistic production quotas produced a famine that killed approximately 30 million people in three years",
              "Mexico's 1934–40 ejido distribution, which redistributed about 45 million acres and stabilized rural support for the ruling party for decades after the reform was completed",
              "Egypt's 1952 land reform under Nasser, which capped land holdings and redistributed land to small farmers and strengthened the Free Officers regime in the countryside",
              "Taiwan's 1949–53 land-to-the-tiller program, which redistributed land to peasant cultivators and laid the foundation for postwar Taiwanese economic growth"
            ],
            correctAnswer: 0,
            explanation: 'The Great Leap Forward is the catastrophic-failure case. The other options are successful land reforms. AP often pairs these to test whether students can distinguish outcomes.'
          }
        ]
      }
    }
  ]
}
