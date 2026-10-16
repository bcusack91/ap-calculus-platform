export const whColdWarDecolonizationPart6Data = {
  topicSlug: 'wh-cold-war-decolonization',
  sections: [
    {
      id: 'whcwd6-intro',
      type: 'text' as const,
      content: `
# Cold War & Decolonization (1945–1991)

**Part 6 of 7 — Problem-Solving Workshop**

---

| Section |
|---|
| HIPP sourcing for Cold War documents |
| Document bank: Truman Doctrine, Khrushchev's "We Will Bury You," NSC-68, Bandung Final Communiqué, Reagan's Berlin Wall speech |
| AP SAQ structure for Cold War prompts |
| Common AP traps to avoid |

> Key idea: Cold War prompts heavily reward students who can read primary documents critically. Apply HIPP — historical context, intended audience, purpose, point of view — to every document, even short excerpts. Most missed points on Cold War SAQs come from students who quote without sourcing.
      `
    },
    {
      id: 'whcwd6-content',
      type: 'text' as const,
      content: `
## HIPP for Cold War Documents

> **The HIPP Toolkit**

| Letter | Question | Cold War Application |
|---|---|---|
| **H**istorical context | What was happening when this was produced? | Stalin still ruling? Détente or confrontation? |
| **I**ntended audience | Who was this for? | Domestic public? Allied governments? The enemy bloc? |
| **P**urpose | What was the author trying to do? | Justify aid? Mobilize hatred? Negotiate? |
| **P**oint of view | What position is the author writing from? | Superpower official? Third World leader? Dissident? |

## Document Bank — Memorize These

> **1. Truman Doctrine (March 1947)**
> "I believe that it must be the policy of the United States to support free peoples who are resisting attempted subjugation by armed minorities or by outside pressures."

- **HIPP:** U.S. president addressing Congress as Greek and Turkish governments faced communist pressure; intended audience is Congress AND the Soviet Union; purpose is to authorize containment aid; POV is U.S. liberal anti-communist.

> **2. NSC-68 (April 1950)**
> "The Soviet Union, unlike previous aspirants to hegemony, is animated by a new fanatic faith ... and seeks to impose its absolute authority over the rest of the world."

- **HIPP:** Top-secret National Security Council planning document; intended audience is U.S. cabinet; purpose is to justify a massive U.S. military buildup; POV is U.S. national security state at the dawn of the hot Cold War.

> **3. Khrushchev: "We Will Bury You" (November 1956, at the Polish Embassy in Moscow)**
> "Whether you like it or not, history is on our side. We will bury you."

- **HIPP:** Soviet leader addressing Western diplomats during a tense moment after the Hungarian Revolution; intended audience is the Western diplomatic community AND the Soviet public; purpose is intimidation and ideological assertion; POV is Soviet confidence in 1950s industrial growth.

> **4. Final Communiqué of the Asian-African Conference, Bandung (April 1955)**
> The conference declared "that colonialism in all its manifestations is an evil which should speedily be brought to an end."

- **HIPP:** Joint statement of 29 Asian and African countries, many of them recently freed from colonial rule; intended audience is the international community AND both superpowers; purpose is to articulate a Third World political identity; POV is collective anti-colonial.

> **5. Reagan at the Berlin Wall (June 1987)**
> "Mr. Gorbachev, tear down this wall!"

- **HIPP:** U.S. president speaking publicly at the Brandenburg Gate during late-Cold-War reform under Gorbachev; intended audience is the global media AND Soviet leadership; purpose is to press for liberalization; POV is U.S. conservative anti-communist confidence.

## AP SAQ Structure (3 parts)

For a Cold War SAQ, structure each part as **Claim + Evidence + Connection**:

- **A. Identify** one specific cause of [event/policy]
- **B. Explain** how that cause produced the outcome
- **C. Compare** to a different case OR explain a contrasting interpretation

## Common AP Traps (Avoid These)

| Trap | Why It Costs Points |
|---|---|
| Treating "Third World" as a single bloc | Bandung participants and non-aligned states had real conflicts (India and Pakistan; India's 1962 border war with China) |
| Saying "the Cold War caused decolonization" | Decolonization had its own momentum (interwar nationalist organizing) — Cold War shaped it but did not cause it |
| Treating 1991 as inevitable | Soviet collapse was contingent on Gorbachev's specific reform choices |
| Quoting documents without HIPP | The "complexity" point requires sourcing, not just quoting |
| Overusing "containment" as a label | Many U.S. interventions (Iran 1953, Guatemala 1954) were as much about oil and corporations as about communism |

- **Key takeaway:** Treat every document as evidence about its author, not only about its subject. The Truman Doctrine tells you about Truman's framing as much as it does about Greek politics.
      `
    },
    {
      id: 'whcwd6-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Document Sourcing**`,
      exercise: {
        questions: [
          {
            question: 'Which historical context is most essential for sourcing the 1947 Truman Doctrine speech?',
            options: [
              'Greek and Turkish governments faced communist pressure, Britain could no longer support them, and U.S. officials framed the moment as the start of containment',
              'The Berlin Blockade was underway, Soviet forces had closed the land routes, and Truman was asking Congress to fund the airlift to West Berlin',
              'The Korean War had just begun, and Truman was asking Congress for troops after North Korean forces crossed the 38th parallel into the South',
              'The Soviet Union had just tested its first atomic bomb, and Truman was responding to the end of the U.S. nuclear monopoly with a sweeping new plan for national defense'
            ],
            correctAnswer: 0,
            explanation: 'The Truman Doctrine was a March 1947 response to British withdrawal of aid from Greece and Turkey. The Berlin Blockade (1948), the Soviet atomic test (1949), and the Korean War (1950) all came later.'
          },
          {
            question: 'Which best identifies the intended audience and purpose of NSC-68 (April 1950)?',
            options: [
              'A top-secret National Security Council report to President Truman, designed to justify a massive U.S. military buildup against perceived Soviet expansionism',
              'A public radio broadcast aimed at the Soviet population, designed to encourage popular dissent and to undermine Stalin\'s regime through direct appeals to its citizens',
              'A diplomatic note addressed to the United Nations General Assembly, designed to open negotiations on a binding nuclear arms control treaty with the Soviet Union',
              'A presidential campaign speech aimed at American voters, designed to win the 1952 election by demonstrating tough anti-Soviet credentials in a contested race'
            ],
            correctAnswer: 0,
            explanation: 'NSC-68 was top-secret planning prepared for President Truman and his senior national security officials, aimed at scaling up U.S. defense spending. Naming the document\'s "internal planning" character is the AP sourcing move.'
          }
        ]
      }
    },
    {
      id: 'whcwd6-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — match the document to its author or context**`,
      exercise: {
        questions: [
          {
            prompt: 'The 1950 top-secret U.S. planning document that called for a massive military buildup against the Soviet "fanatic faith."',
            answer: 'NSC-68',
            acceptableAnswers: ['NSC-68', 'NSC 68'],
            hint: 'National Security Council document numbered 68; written under Truman.'
          },
          {
            prompt: 'The 1955 Asian-African meeting whose final communiqué declared colonialism "an evil which should speedily be brought to an end."',
            answer: 'Bandung Conference',
            acceptableAnswers: ['Bandung', 'Bandung Conference'],
            hint: 'Hosted by Sukarno of Indonesia; founding moment of Third World identity.'
          },
          {
            prompt: 'The 1987 location and speech in which Reagan demanded that Gorbachev "tear down this wall."',
            answer: 'Brandenburg Gate',
            acceptableAnswers: ['Brandenburg Gate', 'Berlin Wall', 'Berlin'],
            hint: 'In West Berlin, at the historic gate facing East Berlin.'
          }
        ]
      }
    },
    {
      id: 'whcwd6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each document to the HIPP element it most directly tests.**`,
      exercise: {
        dropdowns: [
          {
            label: "Knowing that Khrushchev's 'We Will Bury You' (1956) was spoken at the Polish Embassy after the Hungarian crisis is most useful for: ___",
            options: ['historical context', 'intended audience', 'purpose', 'point of view']
          },
          {
            label: 'Knowing that the Bandung Final Communiqué was a joint statement of 29 Asian and African countries, many recently freed from colonial rule, is most useful for: ___',
            options: ['historical context', 'intended audience', 'purpose', 'point of view']
          },
          {
            label: 'Knowing that Reagan was a U.S. conservative anti-communist when he gave the Brandenburg Gate speech is most useful for: ___',
            options: ['historical context', 'intended audience', 'purpose', 'point of view']
          }
        ],
        correctAnswers: ['historical context', 'point of view', 'point of view'],
        hint1: 'The 1956 timing places the quote right after Soviet tanks crushed the Hungarian Revolution.',
        hint2: 'Knowing WHO produced a document — collectively or individually — is point-of-view sourcing.',
        hint3: 'Reagan\'s ideological identity is the classic POV signal.',
        explanation: 'Each element of HIPP serves a different sourcing purpose. Timing situates the document in a moment (context). Knowing who wrote it tells you their position (POV). Knowing whom they wrote it for tells you the rhetorical aim (audience and purpose).'
      }
    },
    {
      id: 'whcwd6-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice (SAQ format)**`,
      exercise: {
        questions: [
          {
            question: 'An SAQ asks: "Identify ONE U.S. policy used to contain communism between 1947 and 1962, and explain how it advanced containment." Which response would score highest?',
            options: [
              'The Marshall Plan (1948) advanced containment by sending roughly \\$13 billion to rebuild Western Europe, tying recipients to the U.S.-led order and reducing communism\'s appeal',
              'The Marshall Plan (1948) was a U.S. aid program that helped European countries rebuild after the war, and it generally improved their economies in the late 1940s',
              'NATO (1949) advanced containment by sending billions in economic aid to rebuild Western Europe, tying recipients to the U.S. and reducing communism\'s appeal',
              'The Marshall Plan (1948) advanced containment by stationing U.S. troops in Eastern Europe, which forced Soviet forces to withdraw from the countries they had occupied since 1945'
            ],
            correctAnswer: 0,
            explanation: 'AP SAQ scoring rewards: specific name + date + mechanism + outcome. A description with no link to containment earns no "explain" credit, NATO was a military alliance rather than an aid program, and the Marshall Plan sent no troops into the Soviet bloc.'
          },
          {
            question: 'Which short answer best demonstrates AP "complexity" by complicating a single-cause Cold War argument?',
            options: [
              'Although the U.S. framed its 1953 Iran intervention as containing communism, scholars stress that protecting Anglo-Iranian Oil Company interests also drove it',
              'The 1953 Iran intervention was routine containment, since U.S. and British planners had no interests at stake in Iran beyond stopping communism',
              'The 1953 Iran intervention had nothing to do with the Cold War, since the U.S. and Britain acted only to settle a private dispute over oil royalties',
              'The 1953 Iran intervention was organized by the Soviet Union to seize Persian Gulf oil, and the United States merely protested at the UN afterward'
            ],
            correctAnswer: 0,
            explanation: 'The "complexity" point requires complicating dominant narratives. Naming both containment AND oil interests in Iran 1953 is the canonical example AP exam writers reward.'
          }
        ]
      }
    }
  ]
}
