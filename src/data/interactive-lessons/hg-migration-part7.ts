export const hgMigrationPart7Data = {
  topicSlug: 'hg-migration',
  sections: [
    {
      id: 'hgmigrat7-intro',
      type: 'text' as const,
      content: `
# 🌍 Migration Patterns & Processes

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Big Picture: Causes, Types, Data and Effects |
| One Case From Start to Finish: The Philippines |
| Models and Their Limits at a Glance |
| Mixed Review |

> 🔑 **Key Concept:** Migration is a chain. **Causes** (push and pull factors in five categories) produce **types** of movement (forced or voluntary, internal or international), which show up in **data** (flows, stocks, rates, remittances) and create **effects** (political, economic, cultural, demographic) at both the origin and the destination, and at every **scale**.
`
    },
    {
      id: 'hgmigrat7-bigpicture',
      type: 'text' as const,
      content: `
## 📖 The Big Picture: Causes, Types, Data and Effects

| Stage | Key ideas | Where you studied it | A case to remember |
|---|---|---|---|
| **Causes** | Push and pull factors (economic, cultural, demographic, environmental, political); intervening obstacles and opportunities; distance decay | Parts 1–2 | Syria to Germany, 2015: Turkey as intervening opportunity, the Aegean as obstacle |
| **Types** | Forced (slavery, refugees, IDPs, asylum seekers) and voluntary (transnational, transhumance, internal, chain, step, guest worker, rural-to-urban) | Part 3 | The Great Migration, about 6 million people, about 1910–1970 |
| **Data** | Stock vs. flow, flow maps, net migration rate, total growth, remittances as dollars vs. share of GDP | Part 4 | India receives the most remittance dollars; Tajikistan depends on them most |
| **Effects** | Political (policy), economic (remittances, brain drain and gain), cultural (enclaves, acculturation, diaspora), demographic (age-sex structure) | Part 5 | Male-heavy pyramids in Qatar and the UAE; aging, shrinking Bulgaria |

### The Same Migration at Three Scales

| Scale | Question to ask | Example: Mexican migration to the US |
|---|---|---|
| **Global** | Which world regions send and receive? | Part of a larger flow from Latin America to North America |
| **National** | What policies and national conditions shape it? | The Bracero Program (1942–1964), the 1965 Act's family preferences, later border enforcement |
| **Local** | Which places send and receive, and how do they change? | Villages in Zacatecas and Michoacán send workers; neighborhoods in Chicago and Los Angeles become enclaves |
`
    },
    {
      id: 'hgmigrat7-case',
      type: 'text' as const,
      content: `
## One Case From Start to Finish: The Philippines

The Philippines is one of the world's largest sources of labor migrants, and its government actively manages emigration through a cabinet-level **Department of Migrant Workers**, established by a 2021 law.

| Link in the chain | The Philippine case |
|---|---|
| **Causes** | Economic: wages far below those in the Gulf, East Asia and North America. Demographic: a young, growing population and too few local jobs. Pull: demand for nurses and caregivers in aging societies and for workers in Gulf construction and services. |
| **Types** | Voluntary international migration; many workers go on **temporary contracts** (guest workers) to the Gulf and East Asia; many follow relatives (**chain migration**); some move village → Manila → abroad (**step migration**). |
| **Who moves** | Large numbers of **women** as nurses and domestic workers, an example of the feminization of migration that Ravenstein did not foresee. |
| **Data** | About \\$39 billion in remittances in 2023, roughly 9% of GDP (World Bank), among the largest totals in the world. |
| **Effects at the origin** | Economic: remittances support consumption, housing and school fees. Economic and social: **brain drain** of nurses from rural clinics. Demographic: children raised by grandparents while parents work abroad. |
| **Effects at the destination** | Economic: care and construction labor supply in aging or oil-rich states. Cultural: Filipino churches and shops in cities such as Hong Kong and Dubai. Political: debates over workers' rights under the Gulf's kafala system. |

### Worked Synthesis: Writing One Connected Answer

**Prompt:** *Explain how a demographic factor in the Philippines and a demographic factor in Japan together encourage migration between the two countries.*

**Model answer:** The Philippines has a young population and more working-age adults than local jobs, which acts as a **demographic push**. Japan's population is aging and its workforce is shrinking, which creates demand for caregivers and acts as a **demographic pull**. Together, the surplus of young workers in one country and the shortage in the other produce a flow of Filipino caregivers to Japan.

> 🔑 **AP Connection:** Synthesis answers link **two places** and **two concepts**. Name the factor in each place, label its category, and state how they combine to produce the flow.
`
    },
    {
      id: 'hgmigrat7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review: Causes and Types** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Many Filipino nurses migrate to the United Kingdom and the United States. From the perspective of the Philippines, this flow is best described as',
            options: [
              'brain gain',
              'brain drain',
              'transhumance',
              'forced migration'
            ],
            correctAnswer: 1,
            explanation: 'The origin country loses trained professionals whose education it paid for, which is brain drain. Brain gain describes the effect on the receiving country, and the nurses move by choice rather than by force or as seasonal herders.'
          },
          {
            question: 'A Honduran family flees gang threats, crosses Guatemala and Mexico, and asks US border officials for protection. Until their claim is decided, they are',
            options: [
              'internally displaced persons',
              'recognized refugees',
              'asylum seekers',
              'guest workers'
            ],
            correctAnswer: 2,
            explanation: 'They have crossed international borders and applied for protection, but no decision has been made, so they are asylum seekers. They would be IDPs only if they had stayed in Honduras, and they hold no work contract.'
          },
          {
            question: 'Which pairing of a population movement and its main cause is accurate?',
            options: [
              'Great Migration: war industries needing workers as immigration fell',
              'Rohingya flight to Bangladesh: falling coffee prices and failed harvests',
              'Turkish Gastarbeiter in Germany: persecution of religious minorities',
              'Bracero Program: Mexican families fleeing persecution as asylum seekers'
            ],
            correctAnswer: 0,
            explanation: 'The world wars cut European immigration while Northern war industries needed workers, pulling African Americans north. The Rohingya fled persecution and violence, Gastarbeiter were recruited labor, and the Bracero Program was a wartime guest-worker agreement.'
          }
        ]
      }
    },
    {
      id: 'hgmigrat7-models',
      type: 'text' as const,
      content: `
## Models and Their Limits at a Glance

| Model or concept | What it explains well | Where it falls short |
|---|---|---|
| **Push-pull factors** | Why people leave one place and choose another | Treats decisions as purely rational; ignores people too poor to move and the role of policy |
| **Ravenstein's laws (1885)** | Short-distance moves, counter-streams, migration to big cities | Based on 19th-century British internal data; outdated on gender; says little about refugees or visas |
| **Intervening obstacles and opportunities** | Why flows shrink or stop along a route | Hard to measure; the same feature (a border) can be an obstacle for one passport and open for another |
| **Distance decay** | Why most refugees stay in neighboring countries | Weakened by time-space compression and by social networks that link distant places |
| **Forced vs. voluntary** | Legal status and protection | Many moves mix both, as with environmental and economic crises |

### Last-Minute Distinctions

| Pair | The difference |
|---|---|
| Refugee vs. IDP | Crossed an international border vs. stayed inside the country |
| Refugee vs. asylum seeker | Protection granted vs. claim still pending |
| Emigration vs. immigration | Leaving a place vs. arriving in one; the same move seen from each end |
| Migration vs. circulation | Long-term change of residence vs. short, repeated trips such as commuting |
| Stock vs. flow | Migrants living somewhere at one moment vs. migrants moving during a period |
| Chain vs. step migration | Following earlier migrants vs. moving in stages |
| Acculturation vs. assimilation | Adopting some host traits while keeping one's own vs. original traits largely fading |
| Brain drain vs. brain circulation | Skilled people leave vs. skilled people return with new skills |
`
    },
    {
      id: 'hgmigrat7-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

**1)** A country of 10,000,000 people has 25,000 immigrants and 45,000 emigrants in one year. What is its net migration rate per 1,000? (Include the sign.)

**2)** What term describes a person forced from home who has NOT crossed an international border? Enter the three-letter abbreviation.

**3)** What is the one-word name for the Gulf sponsorship system that ties a migrant worker's residence to an employer?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-2', 'IDP', 'kafala'],
        hint1: 'Net migration is 25,000 − 45,000. Divide by 10,000,000 and multiply by 1,000.',
        hint2: 'The abbreviation stands for "internally displaced person."',
        hint3: 'Used in states such as Qatar and Saudi Arabia; it starts with k.',
        explanation: '1) (25,000 − 45,000) ÷ 10,000,000 × 1,000 = −2 per 1,000. 2) An IDP is an internally displaced person. 3) The kafala system ties a worker\'s legal residence to a sponsor, usually the employer.'
      }
    },
    {
      id: 'hgmigrat7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review: Data and Effects** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Country M\'s natural increase is −4 per 1,000, and its population is growing. Which must be true?',
            options: [
              'Its net migration rate exceeds +4 per 1,000',
              'Its crude birth rate exceeds its death rate',
              'It sends large remittances to other countries',
              'It has more emigrants than immigrants each year'
            ],
            correctAnswer: 0,
            explanation: 'Total growth equals natural increase plus net migration, so growth despite −4 requires net migration above +4. Births cannot exceed deaths when natural increase is negative, and more emigrants than immigrants would make the population shrink even faster.'
          },
          {
            question: 'Which statement correctly distinguishes absolute from relative remittance data?',
            options: [
              'Dollar totals show where the most money goes; share of GDP shows dependence',
              'Share of GDP shows where the most money goes; dollar totals show dependence',
              'Both measures always rank the same countries in the same order',
              'Share of GDP measures money sent abroad by immigrants living in a country'
            ],
            correctAnswer: 0,
            explanation: 'Dollar totals are highest in large countries such as India and Mexico, while share of GDP is highest in small economies such as Tajikistan, so the two rankings differ. Remittances received are measured at the origin, not as money leaving the destination.'
          },
          {
            question: 'Gulf states such as Qatar have far more men than women of working age. Which combination best explains this?',
            options: [
              'Male labor demand and limits on bringing families',
              'High fertility among the native population',
              'Emigration of young native men to Europe',
              'Female refugees resettled from Syria and Yemen'
            ],
            correctAnswer: 0,
            explanation: 'Construction and service jobs recruit mostly men, and many migrant workers cannot bring their families, which creates a male working-age bulge. High native fertility would widen the base for both sexes, and emigration of native men or the arrival of women would reduce the male surplus.'
          }
        ]
      }
    },
    {
      id: 'hgmigrat7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Final Classification** 🔍

Choose the concept each case best illustrates.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Mexicans return home from the US after the 2008 recession: ___',
            options: ['counter-stream', 'chain migration', 'brain gain', 'transhumance']
          },
          {
            label: 'A Cuban neighborhood in Miami with Spanish-language shops, churches and newspapers: ___',
            options: ['ethnic enclave', 'diaspora', 'assimilation', 'step migration']
          },
          {
            label: 'Most Syrians who fled to Turkey stayed there instead of continuing to Europe: ___',
            options: ['intervening opportunity', 'intervening obstacle', 'counter-stream', 'brain drain']
          }
        ],
        correctAnswers: ['counter-stream', 'ethnic enclave', 'intervening opportunity'],
        hint1: 'A flow back toward the original origin.',
        hint2: 'A neighborhood where one immigrant group concentrates.',
        hint3: 'Acceptable conditions found along the way.',
        explanation: 'Return flows are counter-streams, a concentrated immigrant neighborhood is an ethnic enclave, and finding safety and work in Turkey was an intervening opportunity that stopped many Syrians short of Europe.'
      }
    }
  ]
}
