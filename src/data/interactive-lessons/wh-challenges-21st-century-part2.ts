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
              'Carbon dioxide, methane, and nitrous oxide absorb infrared radiation emitted from Earth\'s surface, trapping heat that would otherwise escape to space and raising temperatures',
              'Carbon dioxide and methane give off heat through chemical reactions in the atmosphere, independent of sunlight, producing the warming observed since the late 19th century',
              'Carbon dioxide and methane thin the ozone layer, letting more ultraviolet sunlight reach the surface and warm the planet, which explains most of the observed rise in temperature',
              'Carbon dioxide and methane reflect incoming sunlight back to space, so recent warming comes mainly from changes in solar output and volcanic activity unrelated to human emissions'
            ],
            correctAnswer: 0,
            explanation: 'Greenhouse gases trap outgoing infrared radiation. This is the mechanism every AP climate prompt expects students to articulate; ozone depletion is a separate problem involving ultraviolet light.'
          },
          {
            question: 'Which best explains why cheap air travel networks made COVID-19 a global pandemic within months of its emergence in late 2019?',
            options: [
              'Daily commercial flights move millions of people between continents, so a virus from Wuhan reached dozens of countries within days, before tracing or border closures could act',
              'Air travel played little role, since COVID-19 spread mainly along overland trade routes and shipping lanes that moved goods and workers between China and its neighbors',
              'Air travel played little role, since the virus first spread through imported frozen food and packaging rather than through infected travelers moving between countries',
              'Air travel slowed the spread, since airport screening, quarantines, and temperature checks kept the outbreak largely contained within China for months'
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
              'Post-2008 dislocation, factory job losses, immigration, and engagement-driven social media created grievances that anti-establishment leaders mobilized',
              'Post-2008 populism was caused almost entirely by social media, with economic dislocation, demographic change, and the decline of traditional parties playing little role in any democracy',
              'Post-2008 populism was caused almost entirely by economic dislocation, with cultural change, immigration, and social media platforms playing little role in any Western democracy',
              'Post-2008 populism arose separately in each country from local causes, so movements in different democracies shared no common drivers, mechanisms, or political features'
            ],
            correctAnswer: 0,
            explanation: 'AP "complexity" rewards naming multiple drivers (economic + cultural + technological + political) and connecting them through the mobilization mechanism (anti-establishment leaders + new media).'
          },
          {
            question: 'Which response best explains why mRNA vaccine technology was a 21st-century scientific breakthrough during COVID-19?',
            options: [
              'mRNA platforms can be retargeted within weeks of sequencing a pathogen, so the Pfizer-BioNTech and Moderna vaccines arrived in under a year rather than the decade or more typical before',
              'mRNA platforms had been fully tested in approved vaccines for decades, so the COVID-19 shots simply copied an existing seasonal flu vaccine with a new label and only a few minor changes',
              'mRNA platforms took fifteen years of development aimed specifically at COVID-19, so the vaccines were ready only because research on that virus began back in 2005',
              'mRNA platforms offered no speed advantage over traditional vaccines, and the COVID-19 shots were developed quickly only because regulators skipped all clinical trials'
            ],
            correctAnswer: 0,
            explanation: 'mRNA platforms\' rapid reprogrammability is the key 21st-century vaccine breakthrough: sequence the pathogen, encode the mRNA, and test and deploy, rather than growing and weakening the virus itself. COVID-19 vaccines still went through large clinical trials, and SARS-CoV-2 was identified only in early 2020.'
          }
        ]
      }
    }
  ]
}
