export const whColdWarDecolonizationPart1Data = {
  topicSlug: 'wh-cold-war-decolonization',
  sections: [
    {
      id: 'whcwd1-intro',
      type: 'text' as const,
      content: `
# Cold War & Decolonization (1945–1991)

**Part 1 of 7 — Core Concepts**

---

| Section |
|---|
| The bipolar world order: capitalism vs. communism |
| Containment, deterrence, and the nuclear standoff |
| The collapse of European empires and the birth of the Third World |
| AP framing: ideology + superpower competition + decolonization |

> Key idea: After 1945, two superpowers — the United States and the Soviet Union — replaced the European empires as the organizers of world politics. At the same time, dozens of new nations emerged from the wreckage of those empires. The AP exam expects you to see these two processes as intertwined: the Cold War shaped decolonization (proxy wars, aid, alignment) and decolonization shaped the Cold War (the Third World became the main theater of competition after 1955).
      `
    },
    {
      id: 'whcwd1-content',
      type: 'text' as const,
      content: `
## The Core Picture: A Divided World

The Cold War (1947–1991) was a global ideological competition between U.S.-led liberal capitalism and Soviet-led state communism. It rarely produced direct combat between the two superpowers — but it produced proxy wars, arms races, and political alignment pressures that touched nearly every country on earth.

> **The Two Camps**

| Bloc | Leader | Alliance | Economic System |
|---|---|---|---|
| Western / "Free World" | United States | NATO (1949) | Market capitalism, Marshall Plan aid |
| Eastern / Communist | Soviet Union | Warsaw Pact (1955) | Centrally planned economy, Comecon |
| Non-Aligned | India, Egypt, Yugoslavia, Indonesia | NAM (1961) | Mixed; refused to choose sides |

> **The Origin Crises (1945–1949)**

- **Yalta and Potsdam (1945)** — Allied conferences that divided occupied Germany and Eastern Europe into spheres of influence
- **Iron Curtain speech** (Churchill, 1946) — coined the metaphor for the Soviet-imposed division of Europe
- **Truman Doctrine** (1947) — committed the U.S. to containing communism worldwide, beginning with aid to Greece and Turkey
- **Marshall Plan** (1948) — \\$13 billion to rebuild Western Europe and bind it to the U.S.-led order
- **Berlin Blockade and Airlift** (1948–49) — first direct Cold War standoff; Western powers airlifted supplies for 11 months

> **Decolonization in Three Waves**

1. **Asia first (1945–54)** — India and Pakistan (1947), Indonesia (1949), Vietnam declares independence (1945, war with France until 1954)
2. **Africa second (1957–65)** — Ghana (1957) under Nkrumah, then a wave: 17 African states became independent in 1960 alone
3. **Final colonies (1970s–90s)** — Portuguese Africa (Angola, Mozambique 1975), Zimbabwe (1980), Namibia (1990)

- **Key takeaway:** The Cold War and decolonization were the same global story. Newly independent states had to choose: align with Washington, align with Moscow, or try to stay non-aligned. That choice usually shaped their economy, military, and political development for the rest of the century.
      `
    },
    {
      id: 'whcwd1-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — The New World Order**`,
      exercise: {
        questions: [
          {
            question: 'Which 1947 U.S. policy committed the United States to "support free peoples who are resisting attempted subjugation by armed minorities or by outside pressures" — the founding statement of containment?',
            options: [
              'The Marshall Plan, which provided about \\$13 billion in postwar economic reconstruction aid to Western European states recovering from war',
              'The Truman Doctrine, which pledged U.S. aid first to Greece and Turkey and became the basis of containment',
              'The North Atlantic Treaty, which created a peacetime military alliance to defend Western Europe and became the military arm of containment',
              'The Atlantic Charter, which articulated war aims of the United States and Britain during the Second World War in 1941'
            ],
            correctAnswer: 1,
            explanation: 'The Truman Doctrine (1947) is the formal start of U.S. containment policy. The Marshall Plan was its economic arm, and NATO (1949) became its military structure.'
          },
          {
            question: 'Which feature most distinguishes the Cold War from previous great-power conflicts in modern history?',
            options: [
              'The two main rivals competed primarily through ideological influence, proxy wars, and an arms race rather than through direct military combat against each other',
              'The two main rivals fought a long series of conventional battles in Europe and Asia involving direct deployment of their own armed forces against one another in combat',
              'The two main rivals shared one political, economic, and social system and competed only over disputed colonial possessions rather than ideology',
              'The two main rivals competed mainly over overseas colonies and naval trade routes, much as Britain and France had in earlier centuries'
            ],
            correctAnswer: 0,
            explanation: 'The defining feature is global ideological competition without direct superpower combat. Proxy wars in Korea, Vietnam, Angola, and Afghanistan were the actual fighting.'
          }
        ]
      }
    },
    {
      id: 'whcwd1-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — name the right concept**`,
      exercise: {
        questions: [
          {
            prompt: 'The 1949 U.S.-led military alliance founded to coordinate the collective defense of Western Europe and North America.',
            answer: 'NATO',
            acceptableAnswers: ['NATO', 'North Atlantic Treaty Organization'],
            hint: 'Founded in April 1949; its 1955 Soviet counterpart was the Warsaw Pact.'
          },
          {
            prompt: 'The 1948 U.S. economic recovery program that funneled roughly \\$13 billion to rebuild Western Europe and contain communism.',
            answer: 'Marshall Plan',
            acceptableAnswers: ['Marshall Plan', 'European Recovery Program'],
            hint: 'Named for Secretary of State George Marshall.'
          },
          {
            prompt: 'The first major African colony to gain independence (1957), led by Kwame Nkrumah.',
            answer: 'Ghana',
            acceptableAnswers: ['Ghana'],
            hint: 'Formerly the British Gold Coast.'
          }
        ]
      }
    },
    {
      id: 'whcwd1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each event to the Cold War process it best illustrates.**`,
      exercise: {
        dropdowns: [
          {
            label: 'The 1948–49 Berlin Airlift is evidence of: ___',
            options: ['superpower confrontation without direct combat', 'Third World political assertion against bloc politics', 'institutionalization of bloc rivalry', 'negotiated decolonization']
          },
          {
            label: 'The 1955 Bandung Conference is evidence of: ___',
            options: ['superpower confrontation without direct combat', 'Third World political assertion against bloc politics', 'institutionalization of bloc rivalry', 'negotiated decolonization']
          },
          {
            label: 'The 1949 founding of NATO and the 1955 Warsaw Pact is evidence of: ___',
            options: ['superpower confrontation without direct combat', 'Third World political assertion against bloc politics', 'institutionalization of bloc rivalry', 'negotiated decolonization']
          }
        ],
        correctAnswers: ['superpower confrontation without direct combat', 'Third World political assertion against bloc politics', 'institutionalization of bloc rivalry'],
        hint1: 'Berlin involved blockade and airlift, not battles. Bandung was 29 Asian/African states refusing to choose sides.',
        hint2: 'NATO and the Warsaw Pact created formal military alliances binding states to a bloc.',
        hint3: 'Each scenario maps to one of: confrontation, Third World assertion, or institutionalization of rivalry.',
        explanation: 'The Berlin crisis showed that the Cold War would be fought through pressure rather than direct war. Bandung showed that newly independent states would not simply align with one bloc. NATO and the Warsaw Pact froze the bipolar order into formal alliances.'
      }
    },
    {
      id: 'whcwd1-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: 'A historian writes: "The Cold War made decolonization more dangerous, and decolonization made the Cold War more global." Which response best supports this claim with AP-quality reasoning?',
            options: [
              'Decolonization was a separate process driven by local nationalism, and global superpower competition and aid politics did little to shape it',
              'New states became proxy battlegrounds where superpower aid and arms fed civil wars, and their UN votes globalized the rivalry',
              'European empires collapsed from internal economic exhaustion alone, while the Cold War stayed a European dispute over Germany\'s future',
              'The Cold War slowed decolonization, because both superpowers preferred stable European empires that protected their access to bases and raw materials'
            ],
            correctAnswer: 1,
            explanation: 'The strongest answer integrates both processes: superpower involvement intensified post-colonial conflicts (Vietnam, Angola, Afghanistan), and decolonization expanded the Cold War theater to Asia, Africa, and Latin America.'
          },
          {
            question: 'Which comparison best uses shared analytical categories required by the AP comparison skill?',
            options: [
              'Both the Marshall Plan (1948) and Comecon (1949) created economic frameworks that bound a bloc of states to a superpower patron through aid and trade',
              'The Marshall Plan happened in Western Europe and Comecon in Eastern Europe, so they were two separate events in two different regions of postwar Europe',
              'Both programs had different patrons (American and Soviet), so the two cases involved different national identities and cannot be compared',
              'The Marshall Plan transferred far more money than Comecon did, so the two programs cannot be compared using any shared analytical categories at all'
            ],
            correctAnswer: 0,
            explanation: 'AP comparison rewards shared categories ("economic frameworks," "bind a bloc," "patron"). Surface differences (geography, names, totals) do not earn the complexity point.'
          }
        ]
      }
    }
  ]
}
