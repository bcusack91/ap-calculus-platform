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
              'The United States was the sole global superpower with defense spending exceeding the next 10 nations combined; this position eroded over the following decade as China rose and Russia recovered, producing a multi-polar structure dominant by Phase 3',
              'The 2001–2008 period was already a fully multi-polar order with the U.S., China, EU, Russia, India, Brazil, and Japan as roughly co-equal great powers in every major dimension of international politics',
              'The 2001–2008 period was a Cold-War-style bipolar order with the U.S. and China as roughly co-equal superpowers from the start of the period through the entire decade until the 2008 GFC',
              'The 2001–2008 period had no superpowers and the international order operated through equal participation by all 193 UN member states without any concentration of military, economic, or technological power'
            ],
            correctAnswer: 0,
            explanation: '2001–08 = U.S. unipolar moment. By the 2020s, the order is multi-polar with U.S.-China as the primary axis.'
          },
          {
            question: 'Which response best identifies the dominant defining event of Phase 2 (2008–2020) of the 21st century?',
            options: [
              "The 2008 Global Financial Crisis, which triggered a decade of economic stagnation, fiscal austerity, populist mobilization, and erosion of the post-1945 liberal-internationalist consensus across major Western democracies",
              "The 2008 Global Financial Crisis, which produced rapid global economic recovery within months, strengthened the post-1945 liberal consensus, and eliminated populist movements in all major Western democracies",
              "The 2008 Global Financial Crisis, which had no measurable economic, political, or institutional consequences of any kind in any major Western democracy during the decade from 2008 through 2018 in any region",
              "The 2008 Global Financial Crisis, which was confined entirely to the United States and produced no economic stagnation, austerity politics, or populist mobilization in any other major democracy globally"
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
              "The U.S. dollar's role as the dominant global reserve currency persisted across all three phases despite challenges from the GFC and post-2022 sanctions, while the geopolitical structure changed sharply: from a U.S. unipolar moment in Phase 1 to a multi-polar order with U.S.-China as the primary axis by Phase 3",
              "Both the U.S. dollar's reserve-currency role AND the U.S. unipolar moment persisted unchanged across all three phases of the 21st century with no meaningful changes from 2001 through the present day",
              "Neither the U.S. dollar's reserve-currency role nor the U.S. unipolar moment persisted in any form across the three phases of the 21st century from 2001 through the present day in any policy domain",
              "The 21st century had no meaningful continuities or changes across the period and the international order looked exactly the same in 2024 as it did in 2001 with no shifts in geopolitics or economics"
            ],
            correctAnswer: 0,
            explanation: 'AP CCOT requires explicitly naming BOTH a continuity AND a change. Dollar dominance = continuity; geopolitical structure = change.'
          },
          {
            question: 'Which best explains why the late 2010s and early 2020s constitute a meaningful phase break within the 21st century?',
            options: [
              "The COVID-19 pandemic (2020), Russia's invasion of Ukraine (2022), the surge of generative AI (ChatGPT in late 2022), and the renewed acceleration of climate impacts together transformed the global agenda from the 2008-era \'crisis decade\' framing to a \'polycrisis\' framing of overlapping simultaneous shocks",
              "Nothing changed in the late 2010s or early 2020s and the 2008-era 'crisis decade' framing continued unchanged through the present day with no new defining events of any kind in any major region of the world",
              "The late 2010s and early 2020s saw the founding of the WTO, the introduction of the Euro, and the September 11 attacks as the actual beginning of the 21st century rather than a phase break within it",
              "The late 2010s and early 2020s saw a complete return to the 2001 unipolar moment with the U.S. as the sole superpower and no Chinese, Russian, or technological challenges to U.S. primacy of any kind"
            ],
            correctAnswer: 0,
            explanation: 'The cluster of COVID + Ukraine + ChatGPT + climate acceleration is the canonical justification for the Phase 2 → Phase 3 break.'
          }
        ]
      }
    }
  ]
}
