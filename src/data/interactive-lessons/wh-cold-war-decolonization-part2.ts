export const whColdWarDecolonizationPart2Data = {
  topicSlug: 'wh-cold-war-decolonization',
  sections: [
    {
      id: 'whcwd2-intro',
      type: 'text' as const,
      content: `
# Cold War & Decolonization (1945–1991)

**Part 2 of 7 — Key Processes**

---

| Section |
|---|
| Containment, deterrence, and brinkmanship |
| Proxy wars: Korea, Vietnam, Afghanistan |
| Decolonization — negotiated transitions vs. revolutionary wars |
| Mass-mobilization tools used by both sides |

> Key idea: The Cold War operated through a small toolkit used over and over: containment policy, alliance-building, foreign aid, propaganda, covert action, and proxy war. Decolonization operated through a parallel toolkit: nationalist organizing, mass civil resistance, armed insurgency, and constitutional negotiation. Knowing both toolkits lets you classify almost any post-1945 conflict on the AP exam.
      `
    },
    {
      id: 'whcwd2-content',
      type: 'text' as const,
      content: `
## How the Cold War Was Actually Fought

> **The U.S. Containment Toolkit**

| Tool | Example | Outcome |
|---|---|---|
| Foreign aid | Marshall Plan (1948) | Bound Western Europe to U.S. economy |
| Military alliance | NATO (1949), SEATO (1954), CENTO (1955) | Encircled USSR with allied bases |
| Covert action | CIA in Iran (1953), Guatemala (1954), Chile (1973) | Removed governments seen as pro-Soviet |
| Direct deployment | Korea (1950–53) | UN-flagged but U.S.-led war against communist invasion |
| Proxy war | Vietnam (1965–73), Afghanistan (1979–89, via mujahideen) | Indirect combat through allies |

> **The Soviet Toolkit**

| Tool | Example | Outcome |
|---|---|---|
| Satellite governments | Eastern Europe (1945–89) | Created the buffer zone Stalin demanded |
| Crushing of dissent | Hungary (1956), Czechoslovakia (1968) | Brezhnev Doctrine: limited sovereignty |
| Military aid to revolutionaries | North Vietnam, Cuba, Angola (MPLA) | Extended Soviet influence to the Third World |
| Direct intervention | Afghanistan (1979–89) | Imperial overreach; "Soviet Vietnam" |

> **The Three Major Hot Wars of the Cold War**

1. **Korean War (1950–53)** — North Korea (USSR/PRC backed) invades South Korea. UN forces under U.S. command counter-attack. Ends in armistice at the 38th parallel; no peace treaty.
2. **Vietnam War (1955–75)** — Built on French defeat at Dien Bien Phu (1954). U.S. fights to prevent communist reunification under Ho Chi Minh; loses by 1975. Tet Offensive (1968) shifts U.S. opinion against the war.
3. **Soviet-Afghan War (1979–89)** — Soviet invasion to prop up communist government. U.S. arms the mujahideen. Soviet withdrawal contributes to the USSR's collapse.

> **The Decolonization Toolkit**

| Path | Example | Mechanism |
|---|---|---|
| Negotiated transfer | India (1947), Ghana (1957), Kenya (1963 after Mau Mau) | Mass nationalist movement + constitutional handover |
| Revolutionary war | Algeria (1954–62), Vietnam (1946–54), Angola (1961–75) | Armed insurgency against colonial military |
| Settler conflict | Algeria, Rhodesia (UDI 1965), Apartheid South Africa (until 1994) | Resistance to entrenched white-settler regime |

- **Key takeaway:** Match the case to the toolkit. Korea and Vietnam = U.S. containment via proxy war. Algeria and Angola = revolutionary decolonization. Hungary 1956 = Soviet enforcement. Naming the toolkit before the details earns more AP credit than recounting the chronology.
      `
    },
    {
      id: 'whcwd2-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Cold War Tools and Decolonization Paths**`,
      exercise: {
        questions: [
          {
            question: 'Which event most directly demonstrated the limits of Soviet enforcement of bloc discipline in Eastern Europe before 1989?',
            options: [
              'The 1956 Hungarian Revolution and the 1968 Prague Spring, both crushed by Warsaw Pact military intervention to enforce single-party rule',
              'The 1955 Bandung Conference of newly independent African and Asian states meeting in Indonesia to discuss non-alignment between the superpowers',
              'The 1962 Cuban Missile Crisis confrontation between the United States and the Soviet Union over nuclear missiles deployed in Cuba',
              'The 1963 signing of the Limited Nuclear Test Ban Treaty between the United States, the Soviet Union, and the United Kingdom'
            ],
            correctAnswer: 0,
            explanation: 'Hungary 1956 and Prague 1968 are the canonical examples of Soviet enforcement: tanks crushed reform movements. The Brezhnev Doctrine codified this practice.'
          },
          {
            question: 'Which decolonization case best illustrates the "revolutionary war" path rather than the "negotiated transfer" path?',
            options: [
              "India in 1947, where mass civil resistance led by Gandhi and Nehru ended in a negotiated British constitutional transfer of power and partition",
              "Algeria from 1954 to 1962, where the FLN waged an armed insurgency against French rule and a settler population that produced roughly 500,000 deaths",
              "Ghana in 1957, where Kwame Nkrumah's Convention People's Party led nonviolent organizing that culminated in a peaceful British constitutional handover",
              "Jamaica in 1962, where the British government oversaw a peaceful constitutional transition without any extended armed conflict between colonial forces and locals"
            ],
            correctAnswer: 1,
            explanation: 'Algeria is the textbook revolutionary war: armed FLN insurgency, settler population, brutal counterinsurgency, eventual independence at high cost. India and Ghana are the negotiated-transfer template.'
          }
        ]
      }
    },
    {
      id: 'whcwd2-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — Cold War vocabulary**`,
      exercise: {
        questions: [
          {
            prompt: 'The 1962 superpower confrontation over Soviet nuclear missiles in Cuba — the closest the Cold War came to nuclear war.',
            answer: 'Cuban Missile Crisis',
            acceptableAnswers: ['Cuban Missile Crisis', 'Cuba Missile Crisis'],
            hint: '13 days in October between Kennedy and Khrushchev.'
          },
          {
            prompt: 'The 1968 Vietnam War turning point in which the North launched coordinated attacks during the lunar new year, shattering U.S. claims of progress.',
            answer: 'Tet Offensive',
            acceptableAnswers: ['Tet Offensive', 'Tet'],
            hint: 'Named for the Vietnamese new year holiday.'
          },
          {
            prompt: "The Soviet doctrine of 'limited sovereignty' used to justify the 1968 invasion of Czechoslovakia.",
            answer: 'Brezhnev Doctrine',
            acceptableAnswers: ['Brezhnev Doctrine'],
            hint: 'Named for the Soviet leader who articulated it.'
          }
        ]
      }
    },
    {
      id: 'whcwd2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each case to the Cold War or decolonization toolkit it best illustrates.**`,
      exercise: {
        dropdowns: [
          {
            label: 'CIA-organized 1953 coup against Mossadegh in Iran is an example of: ___',
            options: ['covert action', 'negotiated decolonization', 'revolutionary war', 'satellite enforcement']
          },
          {
            label: 'Indian independence in 1947 under Gandhi and Nehru is an example of: ___',
            options: ['covert action', 'negotiated decolonization', 'revolutionary war', 'satellite enforcement']
          },
          {
            label: 'The 1954 French defeat at Dien Bien Phu in Vietnam is an example of: ___',
            options: ['covert action', 'negotiated decolonization', 'revolutionary war', 'satellite enforcement']
          }
        ],
        correctAnswers: ['covert action', 'negotiated decolonization', 'revolutionary war'],
        hint1: 'Iran involved CIA money, propaganda, and a staged coup — not direct U.S. troops.',
        hint2: 'India ended in a constitutional handover, not an armed war for independence.',
        hint3: 'Dien Bien Phu was a battlefield defeat for a colonial army by a nationalist insurgency.',
        explanation: 'These three cases illustrate three different mechanisms. Covert action (Iran) was U.S. containment without combat. Negotiated decolonization (India) used mass civil pressure plus constitutional transfer. Revolutionary war (Vietnam) used armed insurgency to defeat a colonial army.'
      }
    },
    {
      id: 'whcwd2-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: 'A historian argues that "the Vietnam War was simultaneously a war of decolonization and a Cold War proxy war." Which statement most strongly supports both halves of that claim?',
            options: [
              'The conflict began as Vietnamese nationalist resistance to French colonial rule (1946–54), and after 1954 became a U.S.-USSR/PRC proxy struggle in which Cold War superpowers backed opposing Vietnamese sides',
              'The conflict was purely an American intervention against communism with no meaningful colonial origin or any Vietnamese nationalist content shaping the political objectives of the Vietnamese leadership',
              'The conflict was purely a colonial-era war between France and Vietnam that ended at Dien Bien Phu in 1954 and never had any post-1954 dimension involving the Cold War or its superpowers',
              'The conflict had no superpower involvement on either side and was conducted entirely between Vietnamese factions without any external military aid or any external diplomatic engagement at all'
            ],
            correctAnswer: 0,
            explanation: 'Both/and reasoning is the AP move. Vietnam was a decolonization war (against French rule) AND a Cold War proxy (after 1954, U.S./USSR/PRC backing opposing sides). Single-cause answers miss the complexity point.'
          },
          {
            question: 'Which best explains why the Cuban Missile Crisis (1962) is treated as a Cold War turning point on the AP exam?',
            options: [
              'It produced direct combat between U.S. and Soviet ground forces in the Caribbean, ending in clear superpower military victory and the immediate dissolution of the Soviet bloc',
              'It pushed the world to the brink of nuclear war and led to the installation of the U.S.-Soviet "hotline" and the 1963 Limited Test Ban Treaty, marking a shift toward détente',
              'It expanded the Cold War to Africa for the first time and ended European decolonization within a decade by replacing colonial governments with democratic regimes',
              'It removed Fidel Castro from power in Cuba in October 1962 and converted Cuba into a long-term U.S. ally for the remainder of the Cold War period'
            ],
            correctAnswer: 1,
            explanation: 'The crisis matters because it produced new arms-control arrangements (hotline, 1963 LTBT) and a partial shift toward détente. The other answers describe events that did not happen.'
          }
        ]
      }
    }
  ]
}
