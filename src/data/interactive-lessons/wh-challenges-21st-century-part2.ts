export const whChallenges21stCenturyPart2Data = {
  topicSlug: 'wh-challenges-21st-century',
  sections: [
    {
      id: 'whc2-intro',
      type: 'text' as const,
      content: `
# Challenges of the 21st Century

**Part 2 of 7 — Key Processes**

---

| Section |
|---|
| The mechanics of climate change: greenhouse effect, tipping points |
| Pandemic dynamics: zoonotic spillover, R0, vaccines |
| The information ecosystem: algorithms, social media, disinformation |
| The dynamics of populism: economic anxiety, cultural backlash |

> Key idea: To analyze 21st-century challenges, you need to understand the underlying mechanisms — how greenhouse gases warm the planet, how viruses spread through air travel networks, how recommender algorithms amplify polarizing content, and how economic dislocation feeds political backlash. Mechanism is what AP graders reward.
      `
    },
    {
      id: 'whc2-content',
      type: 'text' as const,
      content: `
## How Climate Change Works

| Element | Mechanism |
|---|---|
| Greenhouse effect | $CO_{2}$, methane, nitrous oxide trap heat radiating from Earth\'s surface |
| Carbon cycle | Pre-industrial $CO_{2}$ ~280 ppm; 2024 ~422 ppm — fastest rise in millions of years |
| Feedback loops | Melting Arctic sea ice exposes dark ocean → more heat absorbed → more melting |
| Tipping points | Amazon dieback, Greenland ice sheet collapse, methane release from permafrost |
| Impacts | Sea-level rise, extreme weather, agricultural disruption, climate refugees |

## Pandemic Dynamics

| Element | Mechanism |
|---|---|
| Zoonotic spillover | Pathogens jump from animals to humans (HIV from chimps; COVID-19 likely from bats) |
| R0 (basic reproduction number) | Average number of new cases each case generates; >1 means epidemic grows |
| Air travel networks | Cheap flights spread regional outbreaks globally in days (SARS 2003, COVID 2020) |
| Vaccines | mRNA platform allowed COVID vaccines in <1 year vs. typical 5–15 years |
| Vaccine inequity | Wealthy countries vaccinated first; COVAX struggled to deliver doses globally |

## The Information Ecosystem

| Year | Development | Significance |
|---|---|---|
| 2004 | Facebook founded | Social media age begins |
| 2006 | Twitter founded | Real-time public micro-broadcasting |
| 2010–11 | Arab Spring | Social media implicated in regional protest wave |
| 2016 | Brexit + Trump elections | Disinformation, microtargeting, Cambridge Analytica scandal |
| 2018 | EU GDPR enters force | First major data privacy regulation at scale |
| 2020s | TikTok dominance + generative AI | Recommender algorithms + AI-generated content |

| Mechanism | Effect |
|---|---|
| Engagement-maximizing algorithms | Tend to amplify outrage and tribalism |
| Filter bubbles | Users see content that confirms existing views |
| Disinformation campaigns | State and non-state actors plant false content (Russian Internet Research Agency) |
| Network effects | Platforms with most users attract more users — winner-take-all dynamics |

## How Populism Mobilizes

| Driver | Mechanism |
|---|---|
| Economic anxiety | Deindustrialization + 2008 GFC + immigration concentrated wage stagnation |
| Cultural backlash | Rapid demographic change, "elite cosmopolitanism" vs. "national identity" |
| Anti-establishment frame | "The pure people vs. the corrupt elite" rhetoric (a populist hallmark) |
| Charismatic leadership | Trump, Modi, Bolsonaro, Erdoğan, Le Pen, Meloni use direct-to-base communication |
| Media ecosystem | Social media + cable TV bypass traditional party gatekeepers |

- **Key takeaway:** Mechanism is the AP differentiator. Saying "social media caused polarization" earns no points; saying "engagement-maximizing recommender algorithms tend to amplify outrage and tribalism, fragmenting shared public discourse and rewarding extremist content" demonstrates real understanding.
      `
    },
    {
      id: 'whc2-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Mechanisms**`,
      exercise: {
        questions: [
          {
            question: 'Which best explains the greenhouse effect that drives anthropogenic climate change?',
            options: [
              'Carbon dioxide, methane, and nitrous oxide in the atmosphere absorb infrared radiation re-emitted from Earth\'s surface, trapping heat that would otherwise escape to space and gradually raising the average surface temperature of the planet',
              'Carbon dioxide and methane in the atmosphere directly produce heat through chemical reactions independent of solar radiation, generating the temperature increases observed since the late 19th century',
              'Carbon dioxide and methane block sunlight from reaching Earth\'s surface, cooling the planet, which then warms again only because of changes in solar output unrelated to human emissions of greenhouse gases',
              'Carbon dioxide and methane have no measurable effect on the absorption of infrared radiation in the atmosphere and global temperature changes are driven entirely by ocean current patterns and volcanic eruptions'
            ],
            correctAnswer: 0,
            explanation: 'Greenhouse gases trap outgoing infrared radiation. This is the mechanism every AP climate prompt expects students to articulate.'
          },
          {
            question: 'Which best explains why cheap air travel networks made COVID-19 a global pandemic within months of its emergence in late 2019?',
            options: [
              'Daily commercial air travel moves millions of people across continents quickly, so an infectious disease that emerged in Wuhan could be carried to dozens of countries within days, before contact tracing or border closures could contain it',
              'Cheap air travel had no effect on the spread of COVID-19 and the pandemic spread at exactly the same rate as it would have spread in 1900 before commercial aviation became available across major regions',
              'COVID-19 spread only by ground transportation and was unaffected by global air travel networks during the entire period from late 2019 through the present day across all major receiving regions',
              'COVID-19 was contained entirely within the borders of China by air travel restrictions and never spread to any other country at any point during the period from late 2019 through the present day'
            ],
            correctAnswer: 0,
            explanation: 'Daily air travel networks transmit a regional outbreak globally before any state response can act. This is a defining 21st-century pandemic mechanism.'
          }
        ]
      }
    },
    {
      id: 'whc2-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — 21st-century mechanisms**`,
      exercise: {
        questions: [
          {
            prompt: 'When a pathogen jumps from animals to humans (e.g., HIV from chimpanzees, COVID-19 likely from bats).',
            answer: 'zoonotic spillover',
            acceptableAnswers: ['zoonotic spillover', 'zoonosis', 'spillover'],
            hint: 'Most novel human pandemics begin this way.'
          },
          {
            prompt: 'The mRNA-based vaccine platform that allowed COVID-19 vaccines to be developed in under a year.',
            answer: 'mRNA',
            acceptableAnswers: ['mRNA', 'messenger RNA', 'messenger RNA vaccine', 'mRNA vaccine'],
            hint: 'The Pfizer-BioNTech and Moderna COVID vaccines used this platform.'
          },
          {
            prompt: 'The 2018 EU regulation that became the first major large-scale data privacy law (acronym).',
            answer: 'GDPR',
            acceptableAnswers: ['GDPR', 'General Data Protection Regulation'],
            hint: 'Stands for General Data Protection Regulation.'
          }
        ]
      }
    },
    {
      id: 'whc2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each mechanism to the 21st-century challenge it most directly drives.**`,
      exercise: {
        dropdowns: [
          {
            label: 'Atmospheric $CO_{2}$ trapping infrared radiation re-emitted from Earth\'s surface: ___',
            options: ['climate change', 'pandemics', 'populism', 'algorithmic disruption']
          },
          {
            label: 'Engagement-maximizing recommender algorithms amplifying polarizing content: ___',
            options: ['climate change', 'pandemics', 'populism', 'algorithmic disruption']
          },
          {
            label: 'Zoonotic spillover combined with cheap air travel networks: ___',
            options: ['climate change', 'pandemics', 'populism', 'algorithmic disruption']
          }
        ],
        correctAnswers: ['climate change', 'algorithmic disruption', 'pandemics'],
        hint1: 'Trapping infrared radiation is the greenhouse mechanism.',
        hint2: 'Recommender systems are an algorithmic mechanism.',
        hint3: 'Zoonosis + air travel is the canonical pandemic mechanism.',
        explanation: 'Each 21st-century challenge has a distinct mechanism. AP graders reward students who can name the mechanism precisely.'
      }
    },
    {
      id: 'whc2-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Mechanism-based reasoning**`,
      exercise: {
        questions: [
          {
            question: 'Which response best demonstrates AP "complexity" in explaining why post-2008 populist movements arose simultaneously in multiple Western democracies?',
            options: [
              'A combination of post-2008 economic dislocation, declining manufacturing employment, immigration-driven demographic change, and engagement-maximizing social media platforms produced overlapping grievances that anti-establishment leaders mobilized through direct-to-base communication that bypassed traditional party gatekeepers',
              'Post-2008 populist movements were caused entirely by social media with no role for economic dislocation, demographic change, or political-party transformations of any kind in any major Western democracy',
              'Post-2008 populist movements were caused entirely by economic dislocation with no role for cultural change, immigration, or social media platforms of any kind in any major Western democracy during the period',
              'Post-2008 populist movements were random unrelated political phenomena in different countries that shared no common drivers, mechanisms, or political features of any kind across major Western democracies'
            ],
            correctAnswer: 0,
            explanation: 'AP "complexity" rewards naming multiple drivers (economic + cultural + technological + political) and connecting them through the mobilization mechanism (anti-establishment leaders + new media).'
          },
          {
            question: 'Which response best explains why mRNA vaccine technology was a 21st-century scientific breakthrough during COVID-19?',
            options: [
              'mRNA platforms can be reprogrammed to target a new pathogen within weeks of sequencing its genome, allowing the Pfizer-BioNTech and Moderna COVID-19 vaccines to be developed and deployed in under a year — compared to the typical 5–15 years for traditional vaccine platforms',
              'mRNA platforms cannot be reprogrammed to target new pathogens and the Pfizer-BioNTech and Moderna COVID-19 vaccines were actually built on traditional vaccine technologies that pre-date the late 20th century by many decades',
              'mRNA platforms required 15 years of development specifically for COVID-19 starting from 2005 and were not actually available for emergency deployment in any country during the 2020 phase of the pandemic',
              'mRNA platforms are identical in development time and reprogrammability to traditional vaccine platforms and produce no advantages in pandemic response across any region of the world during 21st-century outbreaks'
            ],
            correctAnswer: 0,
            explanation: 'mRNA platforms\' rapid reprogrammability is the key 21st-century vaccine breakthrough. Sequence the pathogen → encode mRNA → deploy.'
          }
        ]
      }
    }
  ]
}
