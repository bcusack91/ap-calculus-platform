export const whColdWarDecolonizationPart5Data = {
  topicSlug: 'wh-cold-war-decolonization',
  sections: [
    {
      id: 'whcwd5-intro',
      type: 'text' as const,
      content: `
# Cold War & Decolonization (1945–1991)

**Part 5 of 7 — Change Over Time**

---

| Section |
|---|
| Phase 1: Origins and bipolar consolidation (1945–1962) |
| Phase 2: Détente and Third World assertion (1963–1979) |
| Phase 3: Reagan, Gorbachev, and Cold War's end (1980–1991) |
| Continuities and transformations across the period |

> Key idea: The Cold War was not a single static standoff. It went through three distinct phases, each with its own dominant logic. Decolonization also unfolded in waves: Asia first, Africa second, then late settler-colonial cases. AP CCOT (Continuity and Change Over Time) prompts almost always reward writers who name the phases AND identify what continued and what changed across them.
      `
    },
    {
      id: 'whcwd5-content',
      type: 'text' as const,
      content: `
## The Three Phases of the Cold War

> **Phase 1: Origins and Bipolar Consolidation (1945–1962)**

| Year | Event | Significance |
|---|---|---|
| 1945 | Yalta and Potsdam Conferences | Allied division of postwar Europe |
| 1947 | Truman Doctrine; Marshall Plan | U.S. containment policy launched |
| 1948–49 | Berlin Blockade and Airlift | First direct Cold War standoff |
| 1949 | NATO founded; Soviet atomic bomb; PRC founded | Bipolar alliance system locks in |
| 1950–53 | Korean War | First hot proxy war |
| 1955 | Warsaw Pact; Bandung Conference | Two blocs vs. Third World assertion |
| 1957 | Sputnik launched; Ghana independence | Space Race begins; African decolonization wave |
| 1961 | Berlin Wall built; NAM founded in Belgrade | Symbolic freezing of bipolar order |
| 1962 | Cuban Missile Crisis | Closest brush with nuclear war |

> **Phase 2: Détente and Third World Assertion (1963–1979)**

| Year | Event | Significance |
|---|---|---|
| 1963 | U.S.-Soviet hotline; Limited Test Ban Treaty | First arms-control turn |
| 1965–73 | Major U.S. ground combat in Vietnam | Proxy war becomes direct U.S. intervention |
| 1968 | Tet Offensive; Prague Spring crushed | U.S. opinion shifts; Brezhnev Doctrine codified |
| 1972 | Nixon visits China; SALT I signed | Triangular diplomacy; arms-control progress |
| 1973 | OPEC oil embargo | Third World economic leverage demonstrated |
| 1975 | Vietnam War ends; Helsinki Accords | U.S. defeat; human rights enter Cold War diplomacy |
| 1979 | Iranian Revolution; Soviet invasion of Afghanistan | Bipolar frame strained; détente collapses |

> **Phase 3: Reagan, Gorbachev, and the End (1980–1991)**

| Year | Event | Significance |
|---|---|---|
| 1980 | Solidarity movement in Poland | First major worker-led challenge to communist rule |
| 1983 | Reagan's "Evil Empire" speech; SDI announced | Renewed superpower confrontation |
| 1985 | Gorbachev becomes General Secretary | Glasnost (openness), perestroika (restructuring) |
| 1987 | INF Treaty | First superpower treaty to eliminate nuclear weapons class |
| 1989 | Berlin Wall falls; Soviet bloc collapses across Eastern Europe | Iron Curtain dissolves |
| 1991 | USSR dissolves into 15 independent states | End of the Cold War |

## Continuity vs. Change

> **What Continued Across the Period**

- Bipolar superpower competition (until 1989)
- Use of foreign aid as a Cold War weapon
- Nuclear arms buildup and counterbuildup
- Decolonization momentum (until last colonies in the 1990s)

> **What Changed**

| From | To |
|---|---|
| Confrontation only (1948 Berlin Blockade) | Negotiated arms control (1972 SALT I; 1987 INF) |
| European focus (1945–55) | Global focus, especially Third World (after Bandung 1955) |
| U.S.-USSR bipolarity | Triangular U.S.-USSR-China diplomacy after 1972 |
| Decolonization through nationalism | Late-Cold-War crises in newly independent states (debt, civil wars, military coups) |
| Communist confidence (1950s–70s) | Communist crisis (1980s economic stagnation) |

- **Key takeaway:** The CCOT move is to name a continuity AND a change in the same sentence. Example: "Throughout the Cold War the superpowers continued to compete through aid and proxies, but the fall of détente in 1979 and the Reagan-Gorbachev arms reductions in the late 1980s marked a profound transformation in how that competition was conducted."
      `
    },
    {
      id: 'whcwd5-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — The Three Phases**`,
      exercise: {
        questions: [
          {
            question: 'Which best characterizes the shift from the first Cold War phase (1945–1962) to the détente phase (1963–1979)?',
            options: [
              'Direct confrontation gave way to arms control such as the 1963 hotline and SALT I in 1972, even as proxy wars and Third World interventions continued',
              'The superpowers ended their proxy wars and military aid programs by 1963, entering a long and stable peace that lasted until the Soviet invasion of Afghanistan in December 1979',
              'The superpowers shifted to direct combat between their own forces in Europe during the 1960s, abandoning proxy strategies for conventional warfare',
              'The superpowers merged their economies into one global trading order by 1972, ending ideological rivalry as Soviet planners adopted market pricing'
            ],
            correctAnswer: 0,
            explanation: 'Détente was selective: arms control progressed, but proxy wars in Vietnam, Angola, and Latin America intensified. The "softer-yet-still-competitive" framing is the AP nuance.'
          },
          {
            question: 'Which two reforms most directly enabled the rapid late-1980s collapse of the Soviet bloc?',
            options: [
              "Gorbachev's glasnost (openness) and perestroika (restructuring), which legitimized criticism and exposed the planned economy's failures",
              "The 1947 Truman Doctrine and the 1948 Marshall Plan, which committed the United States to containing communism and rebuilding Western Europe",
              "The 1955 Bandung Conference and the 1961 Non-Aligned Movement, which created a Third World bloc that refused to choose between the superpowers",
              "Nikita Khrushchev's de-Stalinization (1956) and the Virgin Lands campaign, which loosened censorship and expanded Soviet grain production"
            ],
            correctAnswer: 0,
            explanation: 'Glasnost and perestroika are the canonical late-Cold-War reform pair. They opened space for criticism and exposed economic stagnation, accelerating the collapse. Khrushchev\'s reforms came three decades earlier and did not threaten the bloc\'s survival.'
          }
        ]
      }
    },
    {
      id: 'whcwd5-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — phases and turning points`,
      exercise: {
        questions: [
          {
            prompt: 'The 1972 U.S.-Soviet treaty that limited certain categories of strategic missiles — the first major arms-control achievement of détente.',
            answer: 'SALT I',
            acceptableAnswers: ['SALT I', 'SALT 1', 'Strategic Arms Limitation Talks'],
            hint: 'Strategic Arms Limitation Talks; signed by Nixon and Brezhnev.'
          },
          {
            prompt: "Gorbachev's 1980s policy of political openness, the right to criticize and to publish.",
            answer: 'glasnost',
            acceptableAnswers: ['glasnost'],
            hint: 'Russian word meaning openness or transparency.'
          },
          {
            prompt: 'The 1987 U.S.-Soviet treaty that eliminated an entire class of intermediate-range nuclear weapons.',
            answer: 'INF Treaty',
            acceptableAnswers: ['INF Treaty', 'INF', 'Intermediate-Range Nuclear Forces Treaty'],
            hint: 'Signed by Reagan and Gorbachev.'
          }
        ]
      }
    },
    {
      id: 'whcwd5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each event to the Cold War phase it most directly belongs to.**`,
      exercise: {
        dropdowns: [
          {
            label: 'The 1948–49 Berlin Airlift belongs to: ___',
            options: ['Phase 1 (origins and bipolar consolidation)', 'Phase 2 (détente and Third World assertion)', 'Phase 3 (Reagan/Gorbachev and Cold War end)', 'pre-Cold War interwar period']
          },
          {
            label: 'The 1972 Nixon visit to China belongs to: ___',
            options: ['Phase 1 (origins and bipolar consolidation)', 'Phase 2 (détente and Third World assertion)', 'Phase 3 (Reagan/Gorbachev and Cold War end)', 'pre-Cold War interwar period']
          },
          {
            label: 'The 1987 INF Treaty belongs to: ___',
            options: ['Phase 1 (origins and bipolar consolidation)', 'Phase 2 (détente and Third World assertion)', 'Phase 3 (Reagan/Gorbachev and Cold War end)', 'pre-Cold War interwar period']
          }
        ],
        correctAnswers: ['Phase 1 (origins and bipolar consolidation)', 'Phase 2 (détente and Third World assertion)', 'Phase 3 (Reagan/Gorbachev and Cold War end)'],
        hint1: 'The Berlin Airlift was the first direct Cold War standoff in 1948–49.',
        hint2: 'Nixon to China in 1972 is the classic triangular-diplomacy move of the détente era.',
        hint3: 'INF (1987) was a Reagan-Gorbachev treaty late in the Cold War.',
        explanation: 'These three events anchor the three phases. Berlin (1948) launched the bipolar standoff. Nixon-to-China (1972) defined détente. INF (1987) marked the final phase of cooperative arms reduction.'
      }
    },
    {
      id: 'whcwd5-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice (CCOT)**`,
      exercise: {
        questions: [
          {
            question: 'A CCOT prompt asks: "Evaluate the extent to which the Cold War remained the same and the extent to which it changed between 1947 and 1991." Which thesis would score highest?',
            options: [
              "Superpowers kept competing through ideology, aid, and proxies, but rivalry moved from crises over Berlin and Cuba to arms control such as SALT I and finally to Soviet collapse",
              "The Cold War stayed an unchanging confrontation between two evenly matched superpowers from 1947 to 1991, with crises such as Berlin and Cuba repeating the very same basic pattern",
              "The Cold War changed completely after Stalin's death in 1953, since the superpowers thereafter abandoned ideological competition and proxy wars for peaceful trade",
              "The Cold War repeated the 19th-century balance of power, as nuclear weapons, decolonization, and new ideologies left great-power rivalry unchanged"
            ],
            correctAnswer: 0,
            explanation: 'Strong CCOT theses identify a continuity AND a change AND specify mechanisms (treaties such as SALT I in 1972 and the INF Treaty in 1987, events such as the Soviet collapse) that mark the transformation. The other options collapse into one-sided claims.'
          },
          {
            question: 'Which best illustrates a meaningful transformation in decolonization across the period 1945–1991?',
            options: [
              'Decolonization moved from negotiated handover in Asia (India 1947) to armed and negotiated paths in Africa (Ghana 1957; Algeria 1962) and late settler cases (Zimbabwe 1980)',
              'Decolonization followed one identical method in every region and decade, producing similar outcomes in Asian, African, and settler cases (India 1947; Kenya 1963)',
              'Decolonization was largely complete by 1950, with only a handful of small island colonies gaining independence later in the Cold War (Jamaica 1962; Fiji 1970)',
              'Decolonization was driven by Soviet sponsorship, advancing wherever Moscow funded nationalist movements and stalling wherever it withdrew support (Angola 1975)'
            ],
            correctAnswer: 0,
            explanation: 'A strong AP CCOT response names the regional shift (Asia → Africa → settler states) and identifies how the methods varied. Kenya\'s Mau Mau war and India\'s negotiated transfer show methods were not identical, most of Africa became independent after 1956, and nationalist movements had local roots regardless of Soviet aid.'
          }
        ]
      }
    }
  ]
}
