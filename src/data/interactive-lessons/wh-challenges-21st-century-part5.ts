export const whChallenges21stCenturyPart5Data = {
  topicSlug: 'wh-challenges-21st-century',
  sections: [
    {
      id: 'whc5-intro',
      type: 'text' as const,
      content: `
# Challenges of the 21st Century

**Part 5 of 7 — Change Over Time**

---

| Section |
|---|
| Three phases of the 21st century so far |
| Phase 1 (2001–2008): War on Terror and U.S. unipolar moment |
| Phase 2 (2008–2020): Crisis decade (GFC, Arab Spring, populism, migration) |
| Phase 3 (2020–today): Pandemic, war, AI, climate acceleration |
| What stayed the same; what changed |

> Key idea: AP CCOT prompts on the 21st century are won by students who divide the post-2000 era into clear phases AND identify what stayed continuous across them.
      `
    },
    {
      id: 'whc5-content',
      type: 'text' as const,
      content: `
## Phase 1 (2001–2008) — Unipolar Moment + War on Terror

| Feature | Description |
|---|---|
| U.S. position | Sole superpower; defense spending exceeds the next 10 nations combined |
| Defining event | 9/11 (2001) and U.S. response (Afghanistan 2001, Iraq 2003) |
| Economy | Continued globalization; China joins WTO 2001; pre-2008 housing boom |
| Technology | Web 2.0 begins (YouTube 2005, Facebook 2004); iPhone 2007 |
| Mood | American confidence; "End of History" rhetoric still credible to many elites |

## Phase 2 (2008–2020) — Crisis Decade

| Feature | Description |
|---|---|
| Defining event | 2008 Global Financial Crisis |
| Politics | Tea Party 2009; Arab Spring 2011; rise of right-populism culminating in 2016 Brexit + Trump |
| Migration | 2015 European migration crisis; Syrian war; Central American flows |
| China rises | Becomes largest manufacturer; second largest economy; BRI launched 2013 |
| Climate | Paris Agreement 2015; rapid renewable energy deployment |
| Mood | "End of History" thesis collapses; "polycrisis" enters vocabulary |

## Phase 3 (2020–today) — Pandemic, War, AI

| Feature | Description |
|---|---|
| Defining events | COVID-19 pandemic 2020; Russia\'s invasion of Ukraine 2022; ChatGPT 2022 |
| Geopolitics | Renewed great-power competition; NATO enlargement; Western sanctions on Russia |
| Economy | Inflation surge 2021–22; supply chain reshoring/friend-shoring; AI investment boom |
| Climate | Hottest years on record; renewable deployment accelerates but emissions still rise |
| Mood | "Permacrisis" / "polycrisis" framing dominant in elite discourse |

## Continuities Across All Three Phases

| Continuity | Manifestation |
|---|---|
| U.S. dollar dominance | Survived 2008 GFC and 2022 sanctions episode |
| Western-led international institutions | UN, IMF, WHO, NATO survived; G-20 added in 2008 |
| Climate change | Worsened across all three phases despite Paris and renewable buildout |
| Inequality within wealthy democracies | Continued to widen; Piketty\'s "Capital in the 21st Century" published 2013 |
| Internet-mediated communication | Each phase added a layer (Web 2.0 → social → mobile → AI) |

## Major Changes Across Phases

| Change | From → To |
|---|---|
| Geopolitical structure | Unipolar U.S. (2001) → Multi-polar with U.S.-China primary axis (today) |
| Dominant security threat | Stateless terrorism (Phase 1) → Great-power conventional war returns (Phase 3) |
| Pandemic preparedness | Episodic concern (SARS 2003) → Central policy issue (COVID-19+) |
| Information environment | Web 2.0 + social media → Algorithmic recommender systems + generative AI |
| Climate response | Voluntary frameworks (Phase 1–2) → Some binding commitments + carbon pricing (today) |

- **Key takeaway:** Three-phase periodization is the AP-best CCOT framing for the 21st century. Each phase has a defining event, a defining geopolitical structure, and a defining technological/cultural feature — and continuities (dollar, climate, inequality, the Internet) connect them all.
      `
    },
    {
      id: 'whc5-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Phases of the 21st century**`,
      exercise: {
        questions: [
          {
            question: 'Which best characterizes the geopolitical structure of the 2001–2008 "unipolar moment" of the 21st century?',
            options: [
              'The U.S. was the sole superpower, outspending the next several nations combined on defense; its lead eroded over the next decade as China rose and Russia recovered',
              'The period was already fully multi-polar, with the U.S., China, the EU, Russia, India, and Japan acting as roughly equal great powers in military and economic terms',
              'The period was a Cold War-style bipolar order, with the U.S. and China acting as roughly equal superpowers in military spending throughout the decade before 2008',
              'The period had no dominant power, as the 193 UN member states shared military, economic, and technological influence in roughly equal measure across the decade'
            ],
            correctAnswer: 0,
            explanation: '2001–08 = U.S. unipolar moment, when U.S. defense spending exceeded that of the next several countries combined. By the 2020s, the order is multi-polar with U.S.-China as the primary axis.'
          },
          {
            question: 'Which response best identifies the dominant defining event of Phase 2 (2008–2020) of the 21st century?',
            options: [
              "The 2008 Global Financial Crisis, which brought years of stagnation, austerity, populist mobilization, and erosion of the post-1945 liberal consensus in Western democracies",
              "The 2008 Global Financial Crisis, which produced a rapid recovery within months, strengthened the post-1945 liberal consensus, and weakened populist movements",
              "The 2008 Global Financial Crisis, which caused a brief recession that ended by 2010 and left few lasting political or institutional effects in Western democracies",
              "The 2008 Global Financial Crisis, which stayed confined to the United States and caused no stagnation, austerity, or populist backlash in any other democracy"
            ],
            correctAnswer: 0,
            explanation: '2008 GFC is the canonical defining event of Phase 2. It triggered a decade of austerity politics, populist surge, and erosion of post-1945 consensus.'
          }
        ]
      }
    },
    {
      id: 'whc5-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — phase identifiers**`,
      exercise: {
        questions: [
          {
            prompt: 'The 2008 financial crisis triggered by the collapse of U.S. subprime mortgage-backed securities (initials: GFC).',
            answer: 'Global Financial Crisis',
            acceptableAnswers: ['Global Financial Crisis', 'GFC', '2008 financial crisis', '2008 Global Financial Crisis'],
            hint: 'Defining event of Phase 2 of the 21st century.'
          },
          {
            prompt: 'The November 2022 OpenAI product release that brought generative AI into mainstream consciousness.',
            answer: 'ChatGPT',
            acceptableAnswers: ['ChatGPT', 'ChatGPT release'],
            hint: 'Reached 100 million monthly users in two months.'
          },
          {
            prompt: 'The term that captures the sense of overlapping, simultaneous crises (climate + pandemic + war + AI) characteristic of Phase 3.',
            answer: 'polycrisis',
            acceptableAnswers: ['polycrisis', 'permacrisis', 'permacrisis or polycrisis'],
            hint: 'Sometimes also called "permacrisis."'
          }
        ]
      }
    },
    {
      id: 'whc5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each event to the phase of the 21st century it most clearly belongs to.**`,
      exercise: {
        dropdowns: [
          {
            label: '9/11 attacks; U.S. invasions of Afghanistan and Iraq; iPhone introduced; pre-GFC housing boom: ___',
            options: ['Phase 1 (2001–08)', 'Phase 2 (2008–20)', 'Phase 3 (2020–today)']
          },
          {
            label: 'Global Financial Crisis; Arab Spring; Brexit and Trump; 2015 European migration crisis: ___',
            options: ['Phase 1 (2001–08)', 'Phase 2 (2008–20)', 'Phase 3 (2020–today)']
          },
          {
            label: 'COVID-19 pandemic; Russia\'s invasion of Ukraine; ChatGPT release; renewed great-power rivalry: ___',
            options: ['Phase 1 (2001–08)', 'Phase 2 (2008–20)', 'Phase 3 (2020–today)']
          }
        ],
        correctAnswers: ['Phase 1 (2001–08)', 'Phase 2 (2008–20)', 'Phase 3 (2020–today)'],
        hint1: 'Phase 1 events all happened before 2008.',
        hint2: 'Phase 2 events all happened between 2008 and 2020.',
        hint3: 'Phase 3 events all happened in 2020 or later.',
        explanation: 'Three phases: Phase 1 = unipolar moment + War on Terror; Phase 2 = crisis decade and populist surge; Phase 3 = pandemic + war + AI.'
      }
    },
    {
      id: 'whc5-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — CCOT writing**`,
      exercise: {
        questions: [
          {
            question: 'Which response best demonstrates AP CCOT skill by naming both a continuity and a change across the three phases of the 21st century?',
            options: [
              "The dollar stayed the leading reserve currency, but the order shifted from a U.S. unipolar moment to a multi-polar one centered on U.S.-China rivalry",
              "Both the dollar's reserve-currency role and the U.S. unipolar moment persisted essentially unchanged across all three phases, from 2001 through the present day",
              "Neither the dollar's reserve-currency role nor U.S. primacy survived the 2008 crisis, as the Chinese yuan became the main reserve currency by the mid-2010s",
              "The international order looked much the same in 2024 as in 2001, with few shifts in geopolitics, economics, or the distribution of global power over the period"
            ],
            correctAnswer: 0,
            explanation: 'AP CCOT requires explicitly naming BOTH a continuity AND a change. Dollar dominance, which survived the GFC and post-2022 sanctions, is the continuity; the shift in geopolitical structure is the change.'
          },
          {
            question: 'Which best explains why the late 2010s and early 2020s constitute a meaningful phase break within the 21st century?',
            options: [
              "COVID-19 (2020), Russia's invasion of Ukraine (2022), generative AI (ChatGPT, 2022), and faster climate impacts shifted the agenda from a \"crisis decade\" to a \"polycrisis\"",
              "Little changed in the late 2010s and early 2020s, as the 2008-era \"crisis decade\" framing continued with no major new defining events in any region of the world",
              "The late 2010s and early 2020s saw the founding of the WTO, the launch of the euro, and the 9/11 attacks, which marked the true start of the 21st century",
              "The late 2010s and early 2020s saw a return to the unipolar moment (as in 2001–08), with the U.S. again the sole superpower facing no Chinese or Russian challenge to its primacy"
            ],
            correctAnswer: 0,
            explanation: 'The cluster of COVID + Ukraine + ChatGPT + climate acceleration is the canonical justification for the Phase 2 → Phase 3 break.'
          }
        ]
      }
    }
  ]
}
