export const whGlobalizationTechPart5Data = {
  topicSlug: 'wh-globalization-tech',
  sections: [
    {
      id: 'whgt5-intro',
      type: 'text' as const,
      content: `
# Globalization & Technology After 1900

**Part 5 of 7 — Change Over Time**

---

| Section |
|---|
| Three phases of post-1945 globalization |
| Phase 1 (1945–1971): Bretton Woods, embedded liberalism, decolonization |
| Phase 2 (1971–1991): floating rates, neoliberalism, trade expansion |
| Phase 3 (1991–today): hyper-globalization, China rises, anti-globalization backlash |
| What stayed the same; what changed |

> Key idea: AP CCOT prompts on globalization are won by students who divide the period into clear phases AND identify what stayed continuous across them.
      `
    },
    {
      id: 'whgt5-content',
      type: 'text' as const,
      content: `
## Phase 1 (1945–1971) — "Embedded Liberalism"

| Feature | Description |
|---|---|
| Monetary order | Fixed exchange rates anchored to dollar-gold |
| Trade | GATT rounds steadily lowered tariffs on manufactured goods |
| Capital flows | Tightly regulated; capital controls common |
| State role | Strong: postwar welfare states, full-employment commitments |
| Decolonization | Most of Asia and Africa achieved independence in this phase |

## Phase 2 (1971–1991) — Neoliberal Turn

| Feature | Description |
|---|---|
| Monetary order | Floating exchange rates after Nixon Shock; petrodollar recycling after 1973 |
| Trade | Continued GATT rounds; rise of regional trade agreements |
| Capital flows | Capital controls dismantled (UK 1979, Japan 1980, U.S. fully open) |
| State role | Thatcher (1979) and Reagan (1981) lead deregulation, privatization, tax cuts |
| Developing world | Latin American debt crisis (1982); IMF Structural Adjustment Programs across Africa and Latin America |
| End | 1989 fall of Berlin Wall; 1991 USSR collapse remove the ideological alternative |

## Phase 3 (1991–today) — Hyper-Globalization

| Feature | Description |
|---|---|
| Monetary order | Dollar dominance; Euro launched 1999/2002; renminbi gradually internationalized |
| Trade | WTO 1995; China joins 2001; supply chains span continents |
| Capital flows | Trillions in cross-border daily currency trading; 2008 Global Financial Crisis |
| Technology | Internet, mobile, cloud, social media, AI |
| Backlash | Seattle 1999, 2008 crisis, Brexit 2016, Trump-era tariffs, U.S.-China trade war |
| Pandemics | SARS 2003, H1N1 2009, COVID-19 2020 expose supply chain fragility |

## Continuities Across All Three Phases

| Continuity | Manifestation |
|---|---|
| U.S. dollar dominance | From Bretton Woods peg to floating reserve currency to today |
| Western-led international institutions | UN, IMF, World Bank, NATO; reformed but not replaced |
| Rising international trade share of GDP | Trade share climbed steadily across all phases |
| Persistent inequality between regions | Wealthy core / developing periphery gap shrank in some places (East Asia) but persisted in many others |

## Major Changes Across Phases

| Change | From → To |
|---|---|
| Exchange rates | Fixed (1945–71) → Floating (1971+) |
| State role | Strong "embedded liberal" (1945–71) → Neoliberal retrenchment (1980s+) |
| Trade scope | Manufactured goods (early GATT) → Services, IP, agriculture (WTO) |
| China | Closed Maoist economy (pre-1978) → Factory of the world (2001+) |
| Information | Print, radio, TV → Internet, mobile, social media |
| Center of dynamism | North Atlantic core → Asia-Pacific (especially East Asia) |

- **Key takeaway:** Three-phase periodization is the AP-best CCOT framing for post-1945 globalization. Each phase has its own monetary regime, trade pattern, and dominant ideology — and continuities (dollar, Western institutions, trade growth) connect them all.
      `
    },
    {
      id: 'whgt5-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Phases of globalization**`,
      exercise: {
        questions: [
          {
            question: 'Which best characterizes the "embedded liberalism" of the 1945–1971 phase of globalization?',
            options: [
              'Trade liberalization through GATT and stable Bretton Woods exchange rates, paired with strong welfare states, capital controls, and full-employment commitments at home',
              'Laissez-faire global capitalism with minimal welfare states, free movement of capital, and little commitment to full employment in the major industrial democracies',
              'Central economic planning across the major liberal democracies, as the U.S., Britain, and West Germany nationalized most private firms after 1945',
              'Trade isolation among the major industrial democracies, which kept high tariffs and limited foreign investment until GATT was founded in 1971'
            ],
            correctAnswer: 0,
            explanation: '"Embedded liberalism" = open international trade + strong domestic welfare states + capital controls. A bargain that held until the 1970s.'
          },
          {
            question: 'Which response best identifies the dominant ideological shift between Phase 2 (1971–1991) and Phase 1 (1945–1971)?',
            options: [
              "A shift from embedded liberalism (open trade, strong state, capital controls) to neoliberalism (retrenched state, open capital flows) under Thatcher and Reagan, spread by IMF SAPs",
              "A shift from neoliberalism back to embedded liberalism (welfare states, capital controls, and full employment), as such policies spread across Western economies in the late 1970s and 1980s",
              "A shift from embedded liberalism to central planning across the major Western democracies in the 1970s and 1980s, as states took ownership of private industries",
              "A shift from embedded liberalism to trade isolation across the major Western democracies in the 1970s and 1980s, as high tariffs closed most international markets"
            ],
            correctAnswer: 0,
            explanation: 'Thatcher 1979 + Reagan 1981 + Volcker disinflation + capital control dismantling = the neoliberal turn. SAPs exported the model globally.'
          }
        ]
      }
    },
    {
      id: 'whgt5-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — phase identifiers**`,
      exercise: {
        questions: [
          {
            prompt: 'The 1971 unilateral U.S. action that ended the dollar-gold convertibility at the heart of Bretton Woods.',
            answer: 'Nixon Shock',
            acceptableAnswers: ['Nixon Shock', 'closing the gold window', 'end of dollar-gold convertibility'],
            hint: 'August 15, 1971; named after the U.S. president who announced it.'
          },
          {
            prompt: 'The British Prime Minister whose 1979 election began the European neoliberal turn.',
            answer: 'Margaret Thatcher',
            acceptableAnswers: ['Margaret Thatcher', 'Thatcher'],
            hint: "Conservative; nicknamed the 'Iron Lady'."
          },
          {
            prompt: 'The 1989 fall of this Berlin landmark symbolized the end of Phase 2 of globalization.',
            answer: 'Berlin Wall',
            acceptableAnswers: ['Berlin Wall', 'the Berlin Wall'],
            hint: 'Built by East Germany in 1961; dismantled in 1989.'
          }
        ]
      }
    },
    {
      id: 'whgt5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each event to the phase of globalization it most clearly belongs to.**`,
      exercise: {
        dropdowns: [
          {
            label: 'GATT founding, fixed exchange rates anchored to gold, decolonization of Asia and Africa: ___',
            options: ['Phase 1 (1945–71)', 'Phase 2 (1971–91)', 'Phase 3 (1991–today)']
          },
          {
            label: 'Nixon Shock, Latin American debt crisis, IMF SAPs, Thatcher and Reagan: ___',
            options: ['Phase 1 (1945–71)', 'Phase 2 (1971–91)', 'Phase 3 (1991–today)']
          },
          {
            label: 'WTO founded, China joins, dot-com boom and 2008 GFC, Brexit, COVID-19: ___',
            options: ['Phase 1 (1945–71)', 'Phase 2 (1971–91)', 'Phase 3 (1991–today)']
          }
        ],
        correctAnswers: ['Phase 1 (1945–71)', 'Phase 2 (1971–91)', 'Phase 3 (1991–today)'],
        hint1: 'Phase 1 events all happened before 1971.',
        hint2: 'Phase 2 events all happened between 1971 and 1991.',
        hint3: 'Phase 3 events all happened after 1991.',
        explanation: 'Three phases: Phase 1 = embedded liberalism + decolonization; Phase 2 = neoliberal turn + debt crises; Phase 3 = hyper-globalization + China + backlash.'
      }
    },
    {
      id: 'whgt5-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — CCOT writing**`,
      exercise: {
        questions: [
          {
            question: 'Which response best demonstrates AP CCOT skill by naming both a continuity and a change across the three phases of post-1945 globalization?',
            options: [
              "Dollar dominance and Western-led institutions (IMF, World Bank) persisted, while fixed dollar-gold rates gave way to floating rates after 1971",
              "Both dollar dominance and the fixed exchange rates of Bretton Woods persisted unchanged across all three phases, with no meaningful monetary change since 1945",
              "Neither dollar dominance nor the Bretton Woods twins (the IMF and World Bank) persisted, as each phase built entirely new institutions and a new reserve currency",
              "The international economy changed little across the three phases, since monetary rules, trade rules, and institutions looked much the same in 2020 as they had in 1945"
            ],
            correctAnswer: 0,
            explanation: 'AP CCOT requires explicitly naming BOTH a continuity AND a change. Dollar dominance and Western institutions = continuity; the exchange-rate regime (fixed under Bretton Woods, 1945–71; floating after the Nixon Shock) = change.'
          },
          {
            question: 'Which best explains why the late 1970s and early 1980s constitute a meaningful phase break in post-1945 globalization?',
            options: [
              "The Nixon Shock ended fixed rates, oil shocks (1973, 1979) shook industrial economies, Thatcher and Reagan turned to deregulation, and the 1982 debt crisis spread IMF conditionality",
              "Little changed in the late 1970s and early 1980s, as Bretton Woods institutions (the IMF and World Bank), fixed rates, and embedded liberalism continued through the century",
              "The late 1970s and early 1980s saw the founding of GATT and the Bretton Woods institutions, which marked the real beginning of post-1945 globalization",
              "The late 1970s and early 1980s saw a return to autarky, as the major industrial democracies dismantled their international trade and investment ties and brought globalization to an end"
            ],
            correctAnswer: 0,
            explanation: 'The cluster of Nixon Shock (1971), oil shocks, Thatcher (1979) and Reagan (1981), and the 1982 Latin American debt crisis is the canonical AP justification for the Phase 1 → Phase 2 break.'
          }
        ]
      }
    }
  ]
}
