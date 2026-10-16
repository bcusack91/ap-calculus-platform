export const whColdWarDecolonizationPart4Data = {
  topicSlug: 'wh-cold-war-decolonization',
  sections: [
    {
      id: 'whcwd4-intro',
      type: 'text' as const,
      content: `
# Cold War & Decolonization (1945–1991)

**Part 4 of 7 — Connections & Interactions**

---

| Section |
|---|
| The economy of the Cold War: aid, debt, and dependency |
| Religion, ideology, and the limits of secular modernization |
| Cultural Cold War: jazz, films, sports, and the Space Race |
| The intersection of decolonization with civil rights and feminism |

> Key idea: The Cold War was not only military and political — it was economic, cultural, and ideological. Newly independent states had to choose models of development; superpowers competed for hearts and minds; and global movements (civil rights, women's liberation) drew strength from decolonization rhetoric. AP graders reward writers who can connect across categories rather than confining the Cold War to bombs and treaties.
      `
    },
    {
      id: 'whcwd4-content',
      type: 'text' as const,
      content: `
## The Economic Cold War

> **Two Models of Development**

| Model | Promoted By | Key Features | Examples |
|---|---|---|---|
| **Import-substitution / state planning** | USSR, China | Government-led industry, five-year plans, nationalization | Cuba, India (mixed), much of Africa 1960s–70s |
| **Export-led growth / market reform** | U.S., IMF, World Bank | Foreign investment, export industries, currency stabilization | South Korea, Taiwan, Singapore, Hong Kong (the "Asian Tigers") |

> **The Bretton Woods System (1944)**

Established the IMF and World Bank to stabilize the postwar capitalist economy. The U.S. dollar (backed by gold until 1971) became the world's reserve currency. Newly independent states often borrowed from these institutions, which produced 1980s debt crises and Structural Adjustment Programs.

> **Aid as Cold War Weapon**

- U.S. aid (e.g., Alliance for Progress in Latin America, 1961) and Soviet aid (e.g., Aswan High Dam in Egypt, 1960–70) were both designed to bind recipient governments politically.
- Many Third World states extracted aid from both blocs by playing them against each other (Egypt under Nasser is the classic case).

## Religion and the Limits of Secular Cold War Categories

The Cold War was framed as capitalism vs. communism — but post-1945 history was also shaped by movements that fit neither bloc:

- **1979 Iranian Revolution** — overthrow of the U.S.-backed Shah by an Islamist movement under Ayatollah Khomeini. Aligned with neither bloc and hostile to both.
- **Liberation theology** in Latin America — Catholic clergy combining Christian doctrine with social justice; targeted by U.S.-backed regimes in El Salvador and Nicaragua.
- **Hindu and Buddhist nationalisms** that grew alongside formal decolonization in South and Southeast Asia.

## The Cultural Cold War

| Domain | U.S. Move | Soviet Move |
|---|---|---|
| Sports | 1980 "Miracle on Ice" hockey win; led a boycott of the 1980 Moscow Olympics after the Soviet invasion of Afghanistan | Soviet medal dominance; led a Soviet-bloc boycott of the 1984 Los Angeles Olympics |
| Film and music | Hollywood, jazz tours sponsored by State Department | Bolshoi tours; socialist realism |
| Space | Mercury and Apollo programs; 1969 Moon landing | Sputnik 1957; Yuri Gagarin 1961 first human in space |

## Intersections with Global Movements

- **U.S. Civil Rights Movement (1955–68)** drew explicitly on decolonization. Martin Luther King Jr. attended Ghana's independence ceremony (1957). Malcolm X met with African leaders.
- **Women's movements** in newly independent states (Egypt, Algeria, India) used national liberation rhetoric to demand expanded rights.
- **Pan-Africanism** linked African decolonization to Black diaspora movements (Kwame Nkrumah, W.E.B. Du Bois, Pan-African Congress 1945).

- **Key takeaway:** When AP prompts ask about "interactions" or "connections," reach for these cross-category links — economic models, religious movements, cultural exchange, and global rights movements. They earn the complexity point.
      `
    },
    {
      id: 'whcwd4-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Connections Across Categories**`,
      exercise: {
        questions: [
          {
            question: 'Which best illustrates how the 1979 Iranian Revolution challenged the bipolar Cold War framework?',
            options: [
              'It produced an Islamic Republic hostile to both the United States and the Soviet Union, showing that religious-political movements fit neither Cold War bloc',
              'It produced a secular military regime that joined the U.S.-led alliance system and backed American policy in the Persian Gulf through the 1980s',
              'It produced a pro-Soviet Marxist regime that joined the Warsaw Pact and hosted Soviet missiles aimed at U.S. bases across the Persian Gulf region',
              'It restored the Shah to full power with U.S. support, repeating the 1953 coup and keeping Iran firmly inside the Western bloc for another decade'
            ],
            correctAnswer: 0,
            explanation: 'The Iranian Revolution is the canonical case of a movement that fit neither Cold War bloc — explicitly anti-American AND anti-Soviet. AP often uses it to show the limits of the bipolar frame.'
          },
          {
            question: 'Which best describes the role of the Bretton Woods institutions (IMF and World Bank) in the postwar global economy?',
            options: [
              'They stabilized the postwar capitalist system, set currency-exchange rules, and lent to developing states, often leading to debt and structural adjustment by the 1980s',
              'They coordinated the Soviet planned economy, supplying five-year plans, collectivization advice, and heavy-industry loans to communist states after 1945',
              'They were founded by the Non-Aligned Movement at Bandung in 1955 to provide postwar development aid that bypassed both superpowers',
              'They operated only within North America and Western Europe, lending to industrialized states while refusing loans to newly independent governments'
            ],
            correctAnswer: 0,
            explanation: 'IMF and World Bank were Western capitalist institutions; their lending to Third World states became a source of leverage and dependency, producing the 1980s debt crisis.'
          }
        ]
      }
    },
    {
      id: 'whcwd4-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — Cold War economy and culture**`,
      exercise: {
        questions: [
          {
            prompt: 'The 1944 conference that created the IMF and World Bank to stabilize the postwar capitalist economy.',
            answer: 'Bretton Woods',
            acceptableAnswers: ['Bretton Woods', 'Bretton Woods Conference'],
            hint: 'Held at a New Hampshire resort in July 1944.'
          },
          {
            prompt: 'The 1957 Soviet satellite launch that triggered the Space Race.',
            answer: 'Sputnik',
            acceptableAnswers: ['Sputnik', 'Sputnik 1'],
            hint: 'The first artificial satellite to orbit Earth.'
          },
          {
            prompt: 'The 1979 Iranian Shia cleric who led the Islamic Revolution that overthrew the U.S.-backed Shah.',
            answer: 'Ayatollah Khomeini',
            acceptableAnswers: ['Khomeini', 'Ayatollah Khomeini', 'Ruhollah Khomeini'],
            hint: 'Returned from exile in France in February 1979.'
          }
        ]
      }
    },
    {
      id: 'whcwd4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each phenomenon to the cross-category connection it best illustrates.**`,
      exercise: {
        dropdowns: [
          {
            label: 'The 1969 U.S. Moon landing is most directly an example of: ___',
            options: ['cultural Cold War prestige competition', 'religious challenge to the bipolar frame', 'economic dependency through global lending', 'Pan-African political organizing']
          },
          {
            label: 'The 1980s African debt crisis under IMF Structural Adjustment Programs is most directly an example of: ___',
            options: ['cultural Cold War prestige competition', 'religious challenge to the bipolar frame', 'economic dependency through global lending', 'Pan-African political organizing']
          },
          {
            label: 'The 1979 Iranian Revolution under Ayatollah Khomeini is most directly an example of: ___',
            options: ['cultural Cold War prestige competition', 'religious challenge to the bipolar frame', 'economic dependency through global lending', 'Pan-African political organizing']
          }
        ],
        correctAnswers: ['cultural Cold War prestige competition', 'economic dependency through global lending', 'religious challenge to the bipolar frame'],
        hint1: 'Apollo 11 was a public-relations victory directly framed against Soviet space achievements like Sputnik.',
        hint2: 'Structural Adjustment forced African states to cut social spending in exchange for IMF loans.',
        hint3: 'The Iranian regime was anti-American AND anti-Soviet — neither bloc category fits.',
        explanation: 'These three cases show why the Cold War was more than missiles and treaties. Apollo 11 was prestige competition; the African debt crisis was economic dependency; the Iranian Revolution was a religious-political movement that broke the bipolar frame.'
      }
    },
    {
      id: 'whcwd4-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: 'A historian writes: "The U.S. Civil Rights Movement was a domestic American story but also a Cold War story." Which response best supports both halves of that claim?',
            options: [
              'Activists drew on decolonization rhetoric and African leaders, and Washington backed reforms partly to counter Soviet propaganda about American racism abroad',
              'The movement was a purely regional conflict between Southern segregationists and Black activists, with no global rhetoric or diplomatic dimension',
              'The movement was largely organized and funded by the Soviet Union as a Cold War strategy to weaken the United States from within',
              'Segregation ended with the 1948 desegregation of the armed forces, so later activism had no real link to Cold War diplomacy or to Soviet propaganda about American racism'
            ],
            correctAnswer: 0,
            explanation: 'The both/and framing requires acknowledging the domestic struggle AND the Cold War context (Soviet propaganda about Jim Crow; U.S. desire to court Third World opinion). This is the AP "complexity" move.'
          },
          {
            question: 'Which best explains why the 1957 Soviet launch of Sputnik mattered well beyond engineering?',
            options: [
              'It spurred U.S. investment in science education (NDEA 1958), made space feats a measure of prestige, and turned the Space Race into a test of system superiority',
              'It led directly to the Apollo 11 Moon landing within a few months, ending the Space Race and leaving Soviet space achievements permanently behind',
              'It was treated by both superpowers as a routine engineering feat, with no real effect on U.S. domestic policy or on the wider cultural Cold War',
              'It led the United States to abandon rocket research for a decade (until 1967), conceding space to the USSR, and to focus on conventional arms'
            ],
            correctAnswer: 0,
            explanation: 'Sputnik triggered cascading effects: U.S. NDEA funding for science education, the Space Race, and a reframing of the cultural Cold War. AP rewards multi-domain explanations.'
          }
        ]
      }
    }
  ]
}
