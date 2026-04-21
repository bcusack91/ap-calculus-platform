export const whColdWarDecolonizationPart3Data = {
  topicSlug: 'wh-cold-war-decolonization',
  sections: [
    {
      id: 'whcwd3-intro',
      type: 'text' as const,
      content: `
# Cold War & Decolonization (1945–1991)

**Part 3 of 7 — Patterns & Examples**

---

| Section |
|---|
| Three superpower flashpoints: Berlin, Cuba, Afghanistan |
| Three decolonization templates: India, Algeria, Ghana |
| Non-Alignment: Bandung 1955 and the Non-Aligned Movement |
| AP comparison sets and high-yield names |

> Key idea: AP graders reward writers who can cite specific cases that fit clear patterns. This part gives you nine case studies — three superpower crises, three decolonization templates, and three non-alignment moments — that together cover most of the prompts you will see for this topic.
      `
    },
    {
      id: 'whcwd3-content',
      type: 'text' as const,
      content: `
## Three Superpower Flashpoints (Memorize These)

> **Berlin (1948–49 and 1961)**

- **1948–49 Airlift:** Soviets blockaded West Berlin; Western powers airlifted 2.3 million tons of supplies over 11 months. Showed the Cold War would be confrontation without combat.
- **1961 Wall:** East Germany built the Berlin Wall to stop emigration to the West. The wall became the literal symbol of the Iron Curtain until its fall in 1989.

> **Cuba (1959–1962)**

- **1959 Cuban Revolution:** Fidel Castro overthrew U.S.-backed Batista; soon aligned with the USSR.
- **1961 Bay of Pigs:** Failed CIA-backed exile invasion. Embarrassed the Kennedy administration.
- **1962 Missile Crisis:** Soviet nuclear missiles secretly installed in Cuba. 13-day standoff ended with Soviet withdrawal in exchange for U.S. removal of missiles in Turkey. Closest the Cold War came to nuclear war.

> **Afghanistan (1979–89)**

- Soviet invasion to prop up communist government against Islamic insurgents.
- U.S. armed mujahideen via Pakistan (Operation Cyclone). Over 1 million Afghans killed; 5 million displaced.
- Soviet withdrawal in 1989 contributed directly to the USSR's 1991 collapse. Often called "the Soviet Vietnam."

## Three Decolonization Templates

| Case | Method | Outcome |
|---|---|---|
| **India (1947)** | Mass civil disobedience under Gandhi and Nehru's INC | Negotiated British withdrawal; partition into India and Pakistan; ~1 million dead in partition violence |
| **Algeria (1954–62)** | FLN armed insurgency against French rule and a settler population | Independence after roughly 500,000 deaths; pied-noir exodus to France |
| **Ghana (1957)** | Nkrumah's Convention People's Party — strikes, boycotts, mass mobilization | First sub-Saharan African colony to gain independence; model for the 1960 wave |

> **The 1960 "Year of Africa"**

Seventeen African countries became independent in a single year, including Nigeria, the Belgian Congo, Senegal, Madagascar, and Somalia. The wave is the high point of African decolonization.

## Non-Alignment

> **Bandung Conference (April 1955)**

- 29 newly independent Asian and African states met in Bandung, Indonesia
- Hosted by Indonesia's Sukarno; led by Nehru, Nasser (Egypt), Zhou Enlai (China), and Tito (Yugoslavia)
- Declared anti-colonialism, racial equality, and refusal to align with either superpower bloc

> **Non-Aligned Movement (NAM, founded Belgrade 1961)**

- Formal organization of states refusing to join NATO or the Warsaw Pact
- Led by Tito, Nehru, Nasser, Sukarno, Nkrumah
- Now over 120 member states; most active during the 1960s and 1970s

- **Key takeaway:** Non-alignment was not neutrality. NAM states often took strong positions against colonialism, apartheid, and Western intervention while accepting aid from both blocs. AP prompts about the "Third World" almost always reward you for citing Bandung and naming at least two NAM leaders.
      `
    },
    {
      id: 'whcwd3-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Patterns and Cases**`,
      exercise: {
        questions: [
          {
            question: 'Which best explains the historical significance of the 1955 Bandung Conference?',
            options: [
              'It established a permanent United Nations agency that managed European decolonization and oversaw constitutional handovers throughout Africa during the 1960s decade',
              'It was the first major postwar gathering of newly independent Asian and African states asserting a Third World political identity outside the U.S.-Soviet rivalry',
              'It dissolved the Warsaw Pact and ended the Cold War by uniting all Asian and African states under a single neutral political and military leadership in Indonesia',
              'It produced a binding nuclear arms control treaty that ended the U.S.-Soviet arms race and that enabled both superpowers to disarm their strategic nuclear forces'
            ],
            correctAnswer: 1,
            explanation: 'Bandung 1955 is the founding moment of organized Third World political identity. It led directly to the Non-Aligned Movement (1961) but did not dissolve any superpower alliance.'
          },
          {
            question: 'Why did the 1962 Cuban Missile Crisis become a Cold War turning point in AP framing?',
            options: [
              'It pushed the world to the brink of nuclear war and produced new arms-control arrangements (the hotline; the 1963 Limited Test Ban Treaty), marking a shift toward détente',
              'It produced a peace treaty between Cuba and the United States that fully restored diplomatic relations and that ended Cuban alignment with the Soviet Union for the rest of the Cold War',
              'It led to the immediate collapse of the Soviet Union and produced a unipolar world dominated by the United States by the middle of the 1960s decade',
              'It expanded the Cold War to Africa for the first time and produced the rapid decolonization of British, French, and Belgian African colonies during 1962 alone'
            ],
            correctAnswer: 0,
            explanation: 'The crisis mattered because both sides recognized how close they had come to nuclear war and built new mechanisms (hotline, 1963 LTBT) to prevent another such confrontation.'
          }
        ]
      }
    },
    {
      id: 'whcwd3-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — name the right case**`,
      exercise: {
        questions: [
          {
            prompt: '1957 — first sub-Saharan African colony to gain independence; led by Kwame Nkrumah.',
            answer: 'Ghana',
            acceptableAnswers: ['Ghana'],
            hint: 'Formerly the British Gold Coast.'
          },
          {
            prompt: 'The term for the year 1960, when 17 African countries gained independence in a single 12-month span.',
            answer: 'Year of Africa',
            acceptableAnswers: ['Year of Africa', 'Africa Year'],
            hint: 'A widely used label for that single calendar year.'
          },
          {
            prompt: 'The Egyptian president (1956) who nationalized the Suez Canal and helped found the Non-Aligned Movement.',
            answer: 'Gamal Abdel Nasser',
            acceptableAnswers: ['Nasser', 'Gamal Abdel Nasser', 'Gamal Nasser'],
            hint: 'Led Egypt 1954–70; central NAM figure alongside Nehru and Tito.'
          }
        ]
      }
    },
    {
      id: 'whcwd3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each case to the post-1945 pattern it best illustrates.**`,
      exercise: {
        dropdowns: [
          {
            label: 'Algeria 1954–62 with FLN armed insurgency against France is an example of: ___',
            options: ['settler-colonial revolutionary war', 'negotiated decolonization', 'superpower nuclear standoff', 'Third World non-alignment']
          },
          {
            label: 'India 1947 with mass civil disobedience under Gandhi and Nehru is an example of: ___',
            options: ['settler-colonial revolutionary war', 'negotiated decolonization', 'superpower nuclear standoff', 'Third World non-alignment']
          },
          {
            label: 'The 1962 Cuban Missile Crisis is an example of: ___',
            options: ['settler-colonial revolutionary war', 'negotiated decolonization', 'superpower nuclear standoff', 'Third World non-alignment']
          },
          {
            label: 'The 1955 Bandung Conference of 29 Asian and African states is an example of: ___',
            options: ['settler-colonial revolutionary war', 'negotiated decolonization', 'superpower nuclear standoff', 'Third World non-alignment']
          }
        ],
        correctAnswers: ['settler-colonial revolutionary war', 'negotiated decolonization', 'superpower nuclear standoff', 'Third World non-alignment'],
        hint1: 'Algeria had a large pied-noir settler population that France refused to abandon — leading to brutal armed struggle.',
        hint2: 'India ended in a constitutional handover after sustained nonviolent campaigning.',
        hint3: 'The Cuban Missile Crisis was a 13-day standoff that risked nuclear war.',
        explanation: 'Each case illustrates a different post-1945 pattern. Algeria shows settler-colonial revolutionary war; India shows negotiated decolonization; Cuba 1962 shows superpower nuclear brinkmanship; Bandung shows organized Third World non-alignment.'
      }
    },
    {
      id: 'whcwd3-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: 'Which thesis statement would score highest on an AP DBQ asking about responses to superpower competition in the Third World, 1955–1975?',
            options: [
              'Many Third World leaders rejected formal alliance with either bloc, building the Non-Aligned Movement (Bandung 1955; NAM 1961) while still accepting selective superpower aid to advance national modernization',
              'Third World leaders all aligned themselves with the United States during the period from 1955 to 1975 and fully rejected any Soviet political, economic, or military assistance offered',
              'Third World leaders all aligned themselves with the Soviet Union during the period from 1955 to 1975 and fully rejected all Western economic, political, or military assistance offered',
              'Third World leaders during the period from 1955 to 1975 had no political agency of their own and simply followed whatever decisions were made by the United States and the Soviet Union'
            ],
            correctAnswer: 0,
            explanation: 'A strong AP thesis names the pattern (rejection of formal alignment), the institutional moves (Bandung 1955, NAM 1961), and the qualifying nuance (selective acceptance of aid). The other options are caricatures.'
          },
          {
            question: 'Which contextualization sentence best opens an AP essay on decolonization in the period 1945–1975?',
            options: [
              'After 1945, European empires entered terminal crisis under the combined pressure of wartime exhaustion, U.S. and Soviet anti-colonial rhetoric, and rising nationalist movements that had been organizing since the interwar period',
              'After 1945, European empires expanded to their largest extent in world history through new colonial conquests in Africa and Asia made possible by postwar industrial capacity in Europe and North America',
              'After 1945, all European empires had already collapsed by 1900 and there was therefore no decolonization process between 1945 and 1975 in any region of the world',
              'After 1945, the Cold War had no relationship to decolonization and the two processes occurred in entirely separate regions of the world without any meaningful overlap'
            ],
            correctAnswer: 0,
            explanation: 'Strong contextualization names structural conditions (wartime exhaustion, superpower rhetoric, prior nationalist organizing) that explain why the pattern emerged when it did.'
          }
        ]
      }
    }
  ]
}
