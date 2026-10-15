export const whNewlyIndependentStatesPart3Data = {
  topicSlug: 'wh-newly-independent-states',
  sections: [
    {
      id: 'whnis3-intro',
      type: 'text' as const,
      content: `
# Newly Independent States After 1945

**Part 3 of 7 — Patterns & Examples**

---

| Section |
|---|
| Three nation-building case studies: India, Egypt, Ghana |
| Three civil-war case studies: Nigeria, Vietnam, Bangladesh |
| The Asian Tigers and the export-led growth model |
| AP comparison sets and high-yield names |

> Key idea: This part gives you nine specific cases that fit clear patterns. Use these as your default examples for any post-1945 question on nation-building, civil war, or rapid industrialization. Each case carries a specific date, leader, and structural lesson AP graders expect.
      `
    },
    {
      id: 'whnis3-content',
      type: 'text' as const,
      content: `
## Three Nation-Building Cases

> **India under Nehru (1947–64)**

- Inherited British administrative structure; integrated 562 princely states
- Adopted parliamentary democracy with universal suffrage
- ISI economic model behind high tariffs (License Raj)
- Founded Non-Aligned Movement with Nasser and Tito (Belgrade 1961)
- Five-year plans and major dam projects ("temples of modern India")

> **Egypt under Nasser (1952–70)**

- 1952 Free Officers coup overthrew King Farouk
- 1956 nationalization of the Suez Canal triggered the Suez Crisis (Israel, France, UK invasion; U.S. and USSR pressured withdrawal)
- Built Aswan High Dam with Soviet aid (completed 1970)
- Articulated pan-Arab nationalism; brief 1958–61 union with Syria as the United Arab Republic
- Land reform; state-led industrialization; Arab Socialist Union as ruling party

> **Ghana under Nkrumah (1957–66)**

- First sub-Saharan African colony to win independence
- Built Volta River dam project; expanded education and health
- Pan-Africanism: hosted 1958 All-African Peoples' Conference
- Increasingly authoritarian: 1964 declared one-party state
- Overthrown in 1966 military coup; later coups followed

## Three Civil-War Cases

| Country | War | Cause | Outcome |
|---|---|---|---|
| Nigeria | Biafra War (1967–70) | Igbo secession from Nigerian federation | Federal victory; ~1–3 million dead, mostly from famine |
| Vietnam | Vietnam War (1955–75) | Reunification under communist North vs. U.S.-backed South | Communist victory; ~3 million Vietnamese dead |
| Bangladesh | Liberation War (1971) | Bengali separation from West Pakistan | Independence with Indian intervention; ~1–3 million dead |

## The Asian Tigers

> **Four Export-Led Success Stories**

| Country / Territory | Strategy | Rapid Growth Period |
|---|---|---|
| South Korea | State-directed chaebols (Hyundai, Samsung, LG) for export markets | 1962–1990 |
| Taiwan | Initial land reform; export-oriented manufacturing under KMT one-party rule | 1960s–1990s |
| Singapore | Lee Kuan Yew's authoritarian state-led capitalism focused on global trade and finance | 1965–present |
| Hong Kong | British-administered free port and finance center until 1997 handover to China | 1950s–1997 |

> **Key Features of the Tiger Model**

- Strong state coordination of private firms toward export industries
- Heavy investment in education and human capital
- Land reform earlier (in Korea and Taiwan) that created broad rural support
- Authoritarian or semi-authoritarian politics during the rapid-growth phase
- Access to U.S. markets as a Cold War ally

## High-Yield AP Comparisons

| Comparison | Use For |
|---|---|
| India vs. South Korea | ISI vs. export-led growth; democracy vs. authoritarian developmental state |
| Ghana vs. Tanzania | Two African socialist projects; coup vs. peaceful succession |
| Nigeria vs. India | Ethnic federalism with civil war (Biafra) vs. ethnic federalism without civil war |
| Egypt vs. Iran | Two anti-monarchy revolutions (1952 secular vs. 1979 Islamic) |

- **Key takeaway:** AP graders reward students who write with specific cases, dates, and leaders. Memorize at least one fact for each of these nine cases — that gives you ready evidence for almost any post-1945 prompt.
      `
    },
    {
      id: 'whnis3-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Cases and Patterns**`,
      exercise: {
        questions: [
          {
            question: 'Which best explains the historical significance of the 1956 Suez Crisis?',
            options: [
              'Nasser\'s canal nationalization provoked an Anglo-French-Israeli invasion that U.S. and Soviet pressure forced back, exposing Europe\'s limits and boosting Arab nationalism',
              'The Suez Crisis produced a binding peace treaty between Egypt and Israel that ended the Arab-Israeli conflict for the rest of the 20th century without any further wars',
              'The Suez Crisis confirmed Britain and France as independent great powers, as their joint invasion forced Nasser to return the canal to the Suez Canal Company',
              'The Suez Crisis was a Soviet-Egyptian war in which the United States and Britain jointly defended Egypt against a Soviet invasion of the Sinai in November 1956'
            ],
            correctAnswer: 0,
            explanation: 'Suez 1956 is the canonical end-of-European-empire moment. Britain and France discovered they could no longer act independently of the U.S., which (alongside separate Soviet threats) pressed them to withdraw. The crisis also boosted Nasser\'s status across the Arab world; the Egypt-Israel peace treaty came only in 1979.'
          },
          {
            question: 'Which best characterizes the Asian Tigers economic model from the 1960s to the 1990s?',
            options: [
              'State coordination of private firms toward exports, heavy investment in education, and authoritarian or semi-authoritarian rule, with U.S. markets open to them as Cold War allies',
              'Laissez-faire capitalism with no industrial policy, no state direction of investment, and no protection of local firms from foreign competition during the early phase of industrialization',
              'Soviet-style central planning with state ownership of all major firms and little export activity across the four Tiger economies (Korea, Taiwan, Singapore, Hong Kong)',
              'Agricultural economies based on rice exports, with manufacturing and finance sectors that remained small throughout the period from 1960 to 1990'
            ],
            correctAnswer: 0,
            explanation: 'The Tiger model is canonically: state-coordinated export-led growth + education investment + authoritarian politics + Cold War U.S. market access. The other options are caricatures.'
          }
        ]
      }
    },
    {
      id: 'whnis3-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — high-yield names**`,
      exercise: {
        questions: [
          {
            prompt: 'The Egyptian president (1954–70) who nationalized the Suez Canal in 1956 and helped found the Non-Aligned Movement.',
            answer: 'Nasser',
            acceptableAnswers: ['Nasser', 'Gamal Abdel Nasser'],
            hint: 'Led the 1952 Free Officers coup against King Farouk.'
          },
          {
            prompt: 'The 1971 war in which East Pakistan separated from West Pakistan to form a new state, with Indian military intervention.',
            answer: 'Bangladesh Liberation War',
            acceptableAnswers: ['Bangladesh Liberation War', 'Bangladesh War', 'Bangladesh War of Independence'],
            hint: 'Created Bangladesh as an independent nation in 1971.'
          },
          {
            prompt: 'The South Korean industrial conglomerates (e.g., Hyundai, Samsung, LG) that drove export-led growth from the 1960s.',
            answer: 'chaebols',
            acceptableAnswers: ['chaebols', 'chaebol'],
            hint: 'Korean term for large family-controlled industrial groups.'
          }
        ]
      }
    },
    {
      id: 'whnis3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each newly independent state case to the post-1945 pattern it best illustrates.**`,
      exercise: {
        dropdowns: [
          {
            label: 'Nigeria 1967–70 with Igbo secession and federal counter-attack is an example of: ___',
            options: ['post-independence civil war', 'Asian Tiger export-led growth', 'pan-Arab nationalism', 'African socialism']
          },
          {
            label: 'South Korea 1962–90 with chaebols and global export markets is an example of: ___',
            options: ['post-independence civil war', 'Asian Tiger export-led growth', 'pan-Arab nationalism', 'African socialism']
          },
          {
            label: 'Egypt under Nasser 1954–70 with Suez nationalization and the United Arab Republic is an example of: ___',
            options: ['post-independence civil war', 'Asian Tiger export-led growth', 'pan-Arab nationalism', 'African socialism']
          },
          {
            label: 'Tanzania under Nyerere 1964–85 with Ujamaa village collectivization is an example of: ___',
            options: ['post-independence civil war', 'Asian Tiger export-led growth', 'pan-Arab nationalism', 'African socialism']
          }
        ],
        correctAnswers: ['post-independence civil war', 'Asian Tiger export-led growth', 'pan-Arab nationalism', 'African socialism'],
        hint1: 'Nigeria-Biafra was the first major African post-independence civil war.',
        hint2: 'Korea\'s chaebols are the textbook Tiger institution.',
        hint3: 'Nasser\'s short-lived UAR (1958–61) with Syria embodied pan-Arab unity.',
        explanation: 'Each case anchors a distinct post-1945 pattern. Nigeria = post-independence civil war. South Korea = Asian Tiger export-led growth. Egypt = pan-Arab nationalism. Tanzania = African socialism (Ujamaa).'
      }
    },
    {
      id: 'whnis3-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: 'A historian writes: "Newly independent states were not blank slates — they inherited colonial administrative structures and used them in different ways." Which response best supports the claim with AP-quality reasoning?',
            options: [
              'Nehru\'s India kept the British civil service and parliament but added universal suffrage and ISI, and Sukarno\'s Indonesia layered "Guided Democracy" onto Dutch administration',
              'Newly independent states dismantled colonial administrative structures at independence and built entirely new systems from scratch, retaining no element of the colonial state',
              'Newly independent states inherited no administrative capacity from the colonial period and had to govern entirely through restored precolonial traditional institutions and local chiefs',
              'Newly independent states adopted identical political systems imposed by the UN General Assembly, leaving them no autonomy to choose their own models of governance'
            ],
            correctAnswer: 0,
            explanation: 'The strongest response identifies the inheritance AND the variation in how it was used. India and Indonesia are the canonical contrast: same colonial bureaucratic inheritance, different political projects.'
          },
          {
            question: 'Which contextualization sentence best opens an AP essay on post-independence economic development between 1945 and 1990?',
            options: [
              'After 1945, new states inherited extraction-built colonial economies, faced Cold War pressure to align, and chose between import substitution and export-led growth',
              'After 1945, new states inherited diversified industrial economies from the colonial powers and faced few serious economic challenges before globalization in the 1990s',
              'After 1945, new states chose nearly identical economic strategies regardless of political alignment, producing similar rates of growth across all regions and decades',
              'After 1945, new states had little agency in economic policy, as the IMF and World Bank imposed structural adjustment programs on them from the moment of independence'
            ],
            correctAnswer: 0,
            explanation: 'Strong contextualization names the inheritance, the geopolitical pressure, AND the variation in policy choices. The other options collapse into reductive caricatures.'
          }
        ]
      }
    }
  ]
}
