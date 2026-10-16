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
| How greenhouse gases warm the planet, and why the debate continued |
| Human pressure on land, air and water after 1900 |
| How new diseases emerge and spread |
| The CED's three kinds of disease |

> Key idea: To explain an environmental or disease challenge, name the mechanism. "Pollution got worse" earns little; "burning coal and oil added carbon dioxide that traps outgoing heat" shows understanding. The same goes for disease: "a virus passed from animals to people and then traveled along air routes" is an explanation, while "a disease spread" is not.
      `
    },
    {
      id: 'whc2-content',
      type: 'text' as const,
      content: `
## How Climate Change Works

| Element | Mechanism |
|---|---|
| Greenhouse effect | Carbon dioxide, methane and nitrous oxide absorb infrared heat radiating from Earth's surface and keep it from escaping to space |
| Source of the extra gases | Burning coal, oil and gas for industry, electricity and transport; clearing forests; expanding agriculture |
| Rising concentration | Atmospheric $CO_{2}$ rose from about 280 parts per million before industrialization to about 370 by 2000 |
| Feedback loops | Melting sea ice exposes darker ocean, which absorbs more heat and melts more ice |
| Expected effects | Rising sea levels, more extreme weather, and stress on farming in already dry regions |

> **Why it stayed a debate:** By the 1990s the IPCC reported that human activity was influencing the climate, but governments, industries and scientists still argued over how fast warming would come, how much damage it would do, and who should pay to cut emissions. Oil-exporting states and fossil-fuel industries resisted binding limits, while low-lying island states pressed for them. This is why the CED speaks of "debates about the nature and causes of climate change."

> **Do not confuse two problems:** Ozone depletion (CFCs thinning the ozone layer and letting in more ultraviolet light) is a separate problem from the greenhouse effect. The Montreal Protocol addressed ozone; Kyoto addressed greenhouse gases.
      `
    },
    {
      id: 'whc2-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — The greenhouse effect**`,
      exercise: {
        questions: [
          {
            question: 'Burning coal and oil adds carbon dioxide to the atmosphere. By what mechanism does the extra carbon dioxide warm the planet?',
            options: [
              'It thins the ozone layer, letting in more ultraviolet light that heats the ground',
              'It gives off heat through chemical reactions that take place in the upper atmosphere',
              'It absorbs heat radiating from Earth\'s surface and keeps it from escaping to space',
              'It reflects sunlight away, so recent warming must come mainly from changes in the sun'
            ],
            correctAnswer: 2,
            explanation: 'Greenhouse gases absorb outgoing infrared radiation, trapping heat near the surface. Ozone thinning is a separate problem involving ultraviolet light, the gas does not generate heat through reactions, and it traps rather than reflects energy.'
          },
          {
            question: 'Why did climate change remain a subject of international debate through the 1990s even after the IPCC linked warming to human activity?',
            options: [
              'Governments and industries disagreed over how fast temperatures would rise and who should pay to cut emissions',
              'No scientist had yet measured any rise in the amount of carbon dioxide found in the atmosphere',
              'Every government agreed on binding cuts, and the only dispute was over where to hold the meetings',
              'The UN banned all public discussion of climate science until after the 1997 Kyoto conference'
            ],
            correctAnswer: 0,
            explanation: 'The debate was over speed, damage and cost: oil exporters and fossil-fuel industries resisted binding limits while island states demanded them. Rising carbon dioxide had been measured since the late 1950s, governments did not agree on binding cuts, and no ban on discussion existed.'
          }
        ]
      }
    },
    {
      id: 'whc2-environment',
      type: 'text' as const,
      content: `
## Human Pressure on Land, Air and Water

KC-6.1.II.A names four pressures that grew with population and industry after 1900. Each has a well-known case.

| Pressure | Mechanism | Case |
|---|---|---|
| **Deforestation** | Forest cleared for cattle, crops, logging and roads | The Brazilian Amazon from the 1970s; rubber tapper Chico Mendes, murdered in 1988, became a symbol of resistance |
| **Desertification** | Drought plus overgrazing and over-farming turn dry land into desert | The Sahel, south of the Sahara, during the droughts of the late 1960s to the 1980s |
| **Declining air quality** | Coal smoke, car exhaust and industrial emissions | The London smog of 1952; acid rain over Europe and North America in the 1970s–80s |
| **Competition for fresh water** | Irrigation and dams divert rivers faster than they refill | Soviet cotton irrigation shrank the Aral Sea from the 1960s on |

> **Making connections:** These pressures were tied to the same technologies that raised living standards: petroleum, commercial agriculture and the Green Revolution. The CED expects you to hold both sides together.

## How New Diseases Emerge and Spread

| Element | Mechanism |
|---|---|
| **Zoonotic spillover** | A pathogen jumps from animals to humans; HIV descends from a virus that passed to people from chimpanzees in central Africa |
| **Transport networks** | Troop ships spread the 1918 influenza; by the late 20th century, air travel could carry an infection between continents within hours |
| **Urban crowding and poverty** | Dense housing and unsafe water spread cholera and tuberculosis |
| **Resistance** | Overuse of antibiotics and antimalarial drugs bred resistant strains of tuberculosis and malaria |
      `
    },
    {
      id: 'whc2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Classify each disease using the CED's three categories.**`,
      exercise: {
        dropdowns: [
          {
            label: 'Malaria, which persisted in poor tropical regions despite medical advances: ___',
            options: ['disease associated with poverty', 'emergent epidemic disease', 'disease associated with increased longevity']
          },
          {
            label: 'Ebola, first identified in central Africa in 1976: ___',
            options: ['disease associated with poverty', 'emergent epidemic disease', 'disease associated with increased longevity']
          },
          {
            label: 'Alzheimer\'s disease, which became more common as more people lived into old age: ___',
            options: ['disease associated with poverty', 'emergent epidemic disease', 'disease associated with increased longevity']
          }
        ],
        correctAnswers: ['disease associated with poverty', 'emergent epidemic disease', 'disease associated with increased longevity'],
        hint1: 'Malaria thrives where housing, drainage and health care are poor.',
        hint2: 'Ebola was a new disease when it appeared in 1976.',
        hint3: 'Alzheimer\'s rises as populations age.',
        explanation: 'The CED groups diseases after 1900 into three kinds: diseases of poverty (malaria, tuberculosis, cholera), emergent epidemics (the 1918 influenza, Ebola, HIV/AIDS), and diseases that became more common because people lived longer (heart disease, Alzheimer\'s).'
      }
    },
    {
      id: 'whc2-categories',
      type: 'text' as const,
      content: `
## The CED's Three Kinds of Disease

| Category | Illustrative examples | Why they matter |
|---|---|---|
| **Diseases associated with poverty** | Malaria, tuberculosis, cholera | They persisted where clean water, housing and health care were lacking, even after cures or vaccines existed |
| **Emergent epidemic diseases** | 1918 influenza, Ebola, HIV/AIDS | New diseases that caused social disruption and spurred medical research |
| **Diseases associated with increased longevity** | Heart disease, Alzheimer's disease | As vaccines and antibiotics let more people survive childhood, more lived long enough to develop them |

- **Key takeaway:** The three categories show a pattern of continuity and change. Medicine changed which diseases killed people, especially in wealthy countries, but it did not end disease. Poor regions still faced old killers, everyone faced new epidemics, and longer lives brought new illnesses.
      `
    },
    {
      id: 'whc2-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Disease mechanisms**`,
      exercise: {
        questions: [
          {
            question: 'Ebola, first identified in central Africa in 1976, is thought to have reached people from infected wild animals. This kind of origin is called',
            options: [
              'zoonotic spillover',
              'resistance bred by overuse of antibiotics',
              'a disease linked to people living longer lives',
              'a disease spread mainly by contaminated drinking water'
            ],
            correctAnswer: 0,
            explanation: 'A pathogen crossing from animals to humans is zoonotic spillover, the starting point of most new epidemics, including HIV. Antibiotic resistance concerns drugs, longevity diseases such as heart disease are not infections, and Ebola spreads through contact with bodily fluids, not water.'
          },
          {
            question: 'The 1918 influenza traveled with troops and ships. Which change by the 1990s most increased the speed at which a new disease could cross continents?',
            options: [
              'Overland caravan routes connected more of the world\'s cities than ever before',
              'Commercial air travel could carry sick passengers across oceans within hours',
              'Ocean shipping had become much slower than it had been at the start of the century',
              'Most governments had closed their borders to international travel after 1945'
            ],
            correctAnswer: 1,
            explanation: 'By the late 20th century, millions of people flew between continents every year, so an outbreak could reach many countries before it was detected. Caravans were not how modern diseases traveled, shipping became faster, and borders opened to more travel rather than closing.'
          }
        ]
      }
    }
  ]
}
