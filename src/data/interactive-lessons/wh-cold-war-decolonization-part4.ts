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
| Sports | Munich 1972 Olympics; Miracle on Ice 1980 | Soviet medal dominance; 1980 boycott of Moscow Olympics |
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
              'It produced an Islamic Republic that was hostile to both the United States and the Soviet Union, demonstrating that religious-political movements could not be reduced to either Cold War bloc',
              'It produced a pro-American secular military dictatorship that aligned itself with NATO and that supported U.S. policy throughout the Persian Gulf during the 1980s decade',
              'It produced a pro-Soviet Marxist regime that joined the Warsaw Pact and that hosted Soviet missiles to threaten the United States during the late Cold War period',
              'It produced no meaningful change in Iranian government and Iran continued under the Shah for the remainder of the Cold War period until the early 1990s'
            ],
            correctAnswer: 0,
            explanation: 'The Iranian Revolution is the canonical case of a movement that fit neither Cold War bloc — explicitly anti-American AND anti-Soviet. AP often uses it to show the limits of the bipolar frame.'
          },
          {
            question: 'Which best describes the role of the Bretton Woods institutions (IMF and World Bank) in the postwar global economy?',
            options: [
              'They stabilized the postwar capitalist economic system, set rules for currency exchange, and lent to developing states — often producing dependency, debt crises, and Structural Adjustment Programs by the 1980s',
              'They ran the Soviet planned economy and provided five-year plans, agricultural collectivization advice, and heavy industrial planning to communist states throughout the post-1945 era',
              'They were established by the Non-Aligned Movement at Bandung in 1955 to provide development aid that bypassed both the United States and the Soviet Union for new states',
              'They had no relationship to decolonization and operated only inside North America and Western Europe without lending to or auditing any developing country governments at all'
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
              'Civil rights leaders explicitly drew on decolonization rhetoric and African leaders, while the U.S. government supported civil rights reforms partly to counter Soviet propaganda about American racism that damaged U.S. standing in the Third World',
              'The Civil Rights Movement had no international dimension and was conducted entirely between Southern segregationists and African-American activists without any global rhetorical or diplomatic component',
              'The Civil Rights Movement was directly organized and funded by the Soviet Union as part of its Cold War strategy to undermine the United States from within using its own minority population',
              'The Civil Rights Movement ended segregation in the United States by 1949 before the Cold War began and therefore had no overlap or interaction with Cold War politics or rhetoric'
            ],
            correctAnswer: 0,
            explanation: 'The both/and framing requires acknowledging the domestic struggle AND the Cold War context (Soviet propaganda about Jim Crow; U.S. desire to court Third World opinion). This is the AP "complexity" move.'
          },
          {
            question: 'Which best explains why the 1957 Soviet launch of Sputnik mattered well beyond engineering?',
            options: [
              'It produced a wave of U.S. investment in science education (NDEA 1958), reshaped the cultural Cold War to include space achievements as prestige, and made the Space Race a measure of system superiority',
              'It immediately produced the Apollo 11 Moon landing in 1957 and ended the Space Race within months while leaving Soviet space achievements behind permanently',
              'It had no impact on U.S. domestic policy or on the global cultural Cold War and was treated by both superpowers as a routine engineering achievement of no real significance',
              'It produced a binding U.S.-Soviet treaty that demilitarized space and that ended Cold War prestige competition over technological achievement for the rest of the period'
            ],
            correctAnswer: 0,
            explanation: 'Sputnik triggered cascading effects: U.S. NDEA funding for science education, the Space Race, and a reframing of the cultural Cold War. AP rewards multi-domain explanations.'
          }
        ]
      }
    }
  ]
}
