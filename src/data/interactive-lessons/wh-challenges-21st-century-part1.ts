export const whChallenges21stCenturyPart1Data = {
  topicSlug: 'wh-challenges-21st-century',
  sections: [
    {
      id: 'whc1-intro',
      type: 'text' as const,
      content: `
# Challenges of the 21st Century

**Part 1 of 7 — Core Concepts**

---

| Section |
|---|
| Defining the 21st-century challenges: terrorism, climate change, pandemics, AI, populism, migration |
| 9/11 (2001) and the Global War on Terror |
| The shift from Cold-War-era threats to non-state and transnational threats |
| Climate change as a defining 21st-century problem |

> Key idea: The 21st century inherits a world shaped by post-1945 globalization, but it faces novel challenges that transcend nation-state boundaries: networked terrorism, planetary climate change, viral pandemics, algorithmic platforms, and mass political backlash to globalization itself.
      `
    },
    {
      id: 'whc1-content',
      type: 'text' as const,
      content: `
## Defining the 21st-Century Challenge Set

| Challenge | Definition |
|---|---|
| **Transnational terrorism** | Networked, often non-state violent actors (al-Qaeda, ISIS) targeting civilians across borders |
| **Climate change** | Rising global temperatures from greenhouse gas emissions; sea-level rise, extreme weather, ecosystem collapse |
| **Pandemics** | Globally transmitted infectious diseases (HIV, SARS, COVID-19) |
| **Migration crises** | Mass refugee and economic-migrant flows (Syrian, Venezuelan, sub-Saharan African) |
| **Right- and left-populism** | Anti-establishment political movements challenging the post-1945 liberal consensus |
| **Algorithmic disruption** | AI, social media, automation reshaping labor markets and political discourse |

## 9/11 and the Global War on Terror

> **September 11, 2001:** Al-Qaeda hijackers crashed airliners into the World Trade Center and the Pentagon, killing ~3,000 people. The U.S. response reshaped 21st-century politics.

| Year | Event | Significance |
|---|---|---|
| 2001 | U.S./NATO invasion of Afghanistan | Toppled the Taliban; Osama bin Laden escaped |
| 2003 | U.S. invasion of Iraq | Toppled Saddam Hussein on contested WMD claims; major destabilization |
| 2004 | Madrid train bombings | Spanish withdrawal from Iraq |
| 2005 | London 7/7 bombings | Brought home-grown jihadist terror to Europe |
| 2011 | Bin Laden killed in Pakistan | End of one phase of the War on Terror |
| 2014 | ISIS proclaims caliphate | Captured large parts of Iraq and Syria |
| 2017 | ISIS caliphate collapses | But cells persisted across the Middle East and Africa |
| 2021 | U.S. withdraws from Afghanistan; Taliban returns | End of America\'s longest war |

## From Cold-War Threats to 21st-Century Threats

| Cold War (1945–1991) | 21st century |
|---|---|
| State-vs-state nuclear standoff | Non-state networked terrorism |
| Superpower proxy wars | Interventions against non-state networks (Afghanistan, Iraq) |
| Industrial pollution localized | Planetary climate change |
| National epidemics | Global pandemics in weeks (COVID-19) |
| Print, radio, TV gatekeepers | Algorithmic social media |

## Climate Change as a Defining 21st-Century Challenge

| Year | Event | Significance |
|---|---|---|
| 1988 | NASA scientist James Hansen testifies to Congress | Climate change enters U.S. political agenda |
| 1992 | UN Framework Convention on Climate Change (Rio) | Foundational climate treaty |
| 1997 | Kyoto Protocol | First binding emissions limits (developed nations only); U.S. did not ratify |
| 2015 | Paris Agreement | ~196 parties; nationally determined contributions; aim for "well below 2°C" |
| 2017 | Trump announces U.S. withdrawal from Paris | Symbolic blow to multilateral climate effort |
| 2021 | Biden rejoins Paris | U.S. re-engages |
| 2023 | Hottest year on record globally | Climate impacts accelerate |

- **Key takeaway:** Twenty-first-century challenges share a common feature: they cross borders and require coordinated international action, but the international system was designed for state-to-state cooperation in the 1940s. AP prompts often ask whether existing institutions are fit for purpose — your answer should distinguish challenges where multilateral cooperation has worked (Montreal Protocol on ozone, eradication of smallpox) from those where it has lagged (climate, pandemics, migration).
      `
    },
    {
      id: 'whc1-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — 9/11 and the post-9/11 era**`,
      exercise: {
        questions: [
          {
            question: 'Which best characterizes the post-9/11 "Global War on Terror" launched by the United States after September 11, 2001?',
            options: [
              'A two-decade campaign spanning the invasions of Afghanistan (2001) and Iraq (2003), drone strikes in Pakistan and Yemen, and the 2011 killing of bin Laden',
              'A brief operation that ended in 2002 after U.S. forces captured Osama bin Laden (at Tora Bora) and broke up most of the global jihadist networks within months',
              'A mainly diplomatic campaign of sanctions and UN resolutions, with U.S. military action limited to a few short air strikes on training camps in Afghanistan in late 2001',
              'A NATO ground war fought mainly in the Balkans and Central Asia, with the U.S. providing air support but no ground troops in Afghanistan, Iraq, or the wider Middle East'
            ],
            correctAnswer: 0,
            explanation: 'The Global War on Terror was a multi-front, two-decade campaign spanning Afghanistan, Iraq, Pakistan, Yemen, and beyond; it wound down with the 2021 U.S. withdrawal from Afghanistan, ten years after bin Laden was killed in Pakistan.'
          },
          {
            question: 'Which best explains why 21st-century challenges are often called "transnational" rather than "international" challenges?',
            options: [
              'They cross borders beyond any one state\'s control, as networks like al-Qaeda, viruses like SARS-CoV-2, and climate-changing emissions resist state-to-state diplomacy alone',
              'They arise mainly inside single states, and they become international only when a government asks the United Nations to send peacekeepers or aid across a border',
              'They are managed mainly through formal channels at the United Nations, where governments, diplomats, and courts negotiate with little role for non-state networks',
              'They occur mainly in stateless spaces such as the high seas and outer space, so they rarely affect daily life inside the domestic territory of any particular country'
            ],
            correctAnswer: 0,
            explanation: '"Transnational" = crossing borders independent of state control. AP prompts use this distinction frequently.'
          }
        ]
      }
    },
    {
      id: 'whc1-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — Core 21st-century concepts**`,
      exercise: {
        questions: [
          {
            prompt: 'The al-Qaeda leader killed by U.S. Navy SEALs in Pakistan in May 2011.',
            answer: 'Osama bin Laden',
            acceptableAnswers: ['Osama bin Laden', 'bin Laden', 'Bin Laden'],
            hint: 'Saudi-born founder of al-Qaeda; orchestrator of the September 11 attacks.'
          },
          {
            prompt: 'The 2015 multilateral climate accord that committed signatories to limit warming to "well below 2°C."',
            answer: 'Paris Agreement',
            acceptableAnswers: ['Paris Agreement', 'Paris Climate Agreement', 'Paris Accord', 'Paris Climate Accord'],
            hint: 'Negotiated under the UN Framework Convention on Climate Change; signed by ~196 parties.'
          },
          {
            prompt: 'The 1997 emissions-limiting climate treaty (predecessor to the Paris Agreement) that the U.S. did not ratify.',
            answer: 'Kyoto Protocol',
            acceptableAnswers: ['Kyoto Protocol', 'Kyoto'],
            hint: 'Set binding emissions targets for developed countries only.'
          }
        ]
      }
    },
    {
      id: 'whc1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each event to its correct year.**`,
      exercise: {
        dropdowns: [
          {
            label: 'Al-Qaeda hijackers attack the World Trade Center and the Pentagon, killing ~3,000: ___',
            options: ['1991', '2001', '2008', '2015']
          },
          {
            label: 'Paris Agreement on climate change is adopted under the UNFCCC: ___',
            options: ['1991', '2001', '2008', '2015']
          },
          {
            label: 'Global Financial Crisis triggered by U.S. subprime mortgage collapse: ___',
            options: ['1991', '2001', '2008', '2015']
          }
        ],
        correctAnswers: ['2001', '2015', '2008'],
        hint1: 'September 11, 2001.',
        hint2: 'COP21 in Paris, December 2015.',
        hint3: 'Lehman Brothers collapse in September 2008.',
        explanation: 'These three years anchor the 21st-century narrative: 2001 (terrorism), 2008 (financial fragility), 2015 (climate response).'
      }
    },
    {
      id: 'whc1-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Comparing Cold War and 21st-century threats**`,
      exercise: {
        questions: [
          {
            question: 'Which response best demonstrates AP comparison skill in contrasting the dominant security threats of the Cold War era with those of the 21st century?',
            options: [
              'Cold War threats centered on nuclear standoff between two state blocs, while 21st-century threats are more transnational, such as terrorism, climate change, and pandemics',
              'Cold War and 21st-century threats are essentially the same, since both periods have centered on a bipolar nuclear standoff between the United States and a single rival superpower bloc in Europe',
              'Cold War threats centered on stateless terrorist networks, while 21st-century threats center on a nuclear standoff between two blocs, the reverse of the earlier pattern',
              'Cold War and 21st-century threats both centered on environmental dangers, with military rivalry between great powers playing only a minor role in either period'
            ],
            correctAnswer: 0,
            explanation: 'Cold War = bipolar state nuclear standoff; 21st century = transnational, networked threats that no single state controls. The shift is the canonical AP framing.'
          },
          {
            question: 'Which response best explains why climate change is considered the defining "collective action problem" of the 21st century?',
            options: [
              'Every country\'s emissions warm the whole planet, yet no country can fix it alone, and each is tempted to free-ride on others\' emission cuts',
              'Climate change mainly affects the country that emits the gases, so each government has a strong incentive to cut its own emissions without any need for treaties',
              'Climate change could be solved by the largest emitter acting alone, since its cuts would be large enough to stabilize the climate without help from other countries',
              'Climate change mainly harms poor countries, so rich countries face little pressure to cooperate, and the problem is one of foreign aid rather than shared action'
                ],
            correctAnswer: 0,
            explanation: 'The collective-action framing — the costs of emissions are shared globally while the costs of cutting them fall on each country, so each is tempted to free-ride — is the canonical AP explanation for why climate cooperation is hard.'
          }
        ]
      }
    }
  ]
}
