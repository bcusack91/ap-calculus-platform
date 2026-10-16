export const whChallenges21stCenturyPart4Data = {
  topicSlug: 'wh-challenges-21st-century',
  sections: [
    {
      id: 'whc4-intro',
      type: 'text' as const,
      content: `
# Challenges of the 21st Century

**Part 4 of 7 — Connections & Interactions**

---

| Section |
|---|
| How environmental change, migration and economic change interact |
| Pollution that crosses borders: Chernobyl and Bhopal |
| China's emergence as a manufacturing economy by 2001 |
| Protest against the costs of global integration |

> Key idea: The challenges in this unit did not stay in separate boxes. Drought pushed people to migrate; industrial growth raised emissions and poisoned rivers; factories moved to new regions and brought both jobs and pollution. AP "connections" prompts reward students who can trace one development into another with a specific case.
      `
    },
    {
      id: 'whc4-content',
      type: 'text' as const,
      content: `
## How the Challenges Interact

| Linkage | Mechanism | Case (before 2001) |
|---|---|---|
| Environment → migration | Drought and soil loss push farming families off the land | Sahel droughts of the late 1960s to 1980s sent rural people to cities and across borders |
| Industry → pollution across borders | Accidents and emissions ignore national borders | Chernobyl (1986) spread radiation across Europe; acid rain crossed from Britain to Scandinavia |
| Global investment → local hazard | Multinational plants in poorer countries operated under weaker safety rules | Bhopal, India (1984): a gas leak at a Union Carbide pesticide plant killed thousands |
| Poverty → disease | Unsafe water and crowded housing spread infection | Cholera's return to Peru and Latin America in 1991 |
| War → refugees | Conflict drives people across borders | Rwanda (1994) and the Yugoslav wars (1991–2001) displaced millions |

> **Why Bhopal matters:** On the night of December 2–3, 1984, methyl isocyanate gas leaked from a Union Carbide plant in Bhopal. Thousands died within days and many more were injured, making it the deadliest industrial accident of the century. It became a symbol of the risks that global production could shift onto poorer communities, a theme the CED names when it says movements "protested the inequality of the environmental and economic consequences of global integration" (KC-6.3.II.C).
      `
    },
    {
      id: 'whc4-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Connections**`,
      exercise: {
        questions: [
          {
            question: 'In the 1970s and 1980s, many farming families in Mali, Niger and Burkina Faso moved to coastal cities after years of failed rains. Which connection does this movement show?',
            options: [
              'Industrial accidents spreading pollution across national borders',
              'Environmental change driving migration',
              'Free-trade agreements lowering tariffs among neighboring states',
              'New vaccines raising life expectancy and causing population growth'
            ],
            correctAnswer: 1,
            explanation: 'Drought and desertification made farming impossible for many Sahel families, so environmental change became a cause of migration. The case involves no industrial accident, trade agreement or vaccine.'
          },
          {
            question: 'The 1986 accident at the Chernobyl nuclear plant in the Soviet Union best illustrates which feature of environmental problems after 1900?',
            options: [
              'Pollution could cross national borders, so one state\'s accident affected its neighbors',
              'Environmental damage stayed inside the country that caused it and so drew little notice abroad',
              'Nuclear power was abandoned by every government in the world within a few years of the accident',
              'Communist states had stricter environmental rules than capitalist ones and so suffered fewer accidents'
            ],
            correctAnswer: 0,
            explanation: 'Radiation from Chernobyl fell across much of Europe, showing that pollution ignores borders. The other options deny that spread, overstate the reaction to the accident, or misstate the Soviet record.'
          }
        ]
      }
    },
    {
      id: 'whc4-china',
      type: 'text' as const,
      content: `
## China's Emergence as a Manufacturing Economy

CED Topic 9.4 names "China under Deng Xiaoping" as an example of governments encouraging free-market policies, and notes that manufacturing "increasingly situated in Asia and Latin America" (KC-6.3.I.E).

| Stage | Development |
|---|---|
| 1978 | Deng Xiaoping's "Reform and Opening" decollectivizes farming and allows private enterprise |
| 1980 | Special economic zones such as Shenzhen open to foreign investment and export manufacturing |
| 1980s–1990s | Coastal China becomes a center of assembly for goods sold worldwide; hundreds of millions leave extreme poverty |
| 1989 | The Tiananmen Square crackdown shows that economic opening did not mean political opening |
| 2001 | China joins the World Trade Organization, completing its integration into rules-based world trade |

> **Connections:** China's rise also connects to the environment. Coal-powered industrial growth made China one of the largest emitters of greenhouse gases by 2001, and as a developing country it had no binding target under Kyoto.

## Protest Against the Costs of Integration

| Movement | Date | Grievance |
|---|---|---|
| Chipko movement, India | 1973 | Village women hugged trees to stop commercial logging |
| Green Belt Movement, Kenya | 1977 | Rural women planted trees against deforestation and for fuel and water |
| Zapatista uprising, Mexico | 1994 | Indigenous rebels in Chiapas rose up on the day NAFTA took effect |
| "Battle of Seattle," United States | 1999 | Unions, environmentalists and others disrupted a World Trade Organization meeting |
      `
    },
    {
      id: 'whc4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each case to the connection it best illustrates.**`,
      exercise: {
        dropdowns: [
          {
            label: 'Gas leaking from a multinational\'s pesticide plant in Bhopal, India (1984): ___',
            options: ['environment drives migration', 'global production shifts risk to poorer communities', 'market reform draws foreign investment']
          },
          {
            label: 'Shenzhen made a special economic zone open to foreign firms (1980): ___',
            options: ['environment drives migration', 'global production shifts risk to poorer communities', 'market reform draws foreign investment']
          },
          {
            label: 'Sahel farmers leaving drought-stricken land for coastal cities (1970s–80s): ___',
            options: ['environment drives migration', 'global production shifts risk to poorer communities', 'market reform draws foreign investment']
          }
        ],
        correctAnswers: ['global production shifts risk to poorer communities', 'market reform draws foreign investment', 'environment drives migration'],
        hint1: 'Union Carbide was a U.S. company operating in India.',
        hint2: 'Special economic zones were part of Deng Xiaoping\'s reforms.',
        hint3: 'Drought made farming impossible.',
        explanation: 'Bhopal shows the hazards of global production falling on poorer communities; Shenzhen shows market reform drawing foreign investment; the Sahel shows environmental change driving migration.'
      }
    },
    {
      id: 'whc4-loops',
      type: 'text' as const,
      content: `
## Tracing a Chain of Connections

Strong essays follow one development through several steps. Two chains from before 2001:

1. **Market reform → industry → emissions → climate debate:** Deng's reforms drew foreign investment, coal-powered factories multiplied, China's emissions rose, and its exemption from binding limits became a sticking point in the Kyoto negotiations.
2. **Drought → migration → urban strain → disease:** Sahel droughts pushed rural families into fast-growing cities with little clean water, where diseases of poverty such as cholera spread more easily.

- **Key takeaway:** A connection argument names at least two links and a specific case for each. "Climate affects migration" is a claim; "Sahel droughts of the 1970s and 1980s pushed farmers into cities such as Dakar and across borders" is evidence.
      `
    },
    {
      id: 'whc4-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Tracing connections**`,
      exercise: {
        questions: [
          {
            question: 'Which pair of developments did most to make coastal China a center of export manufacturing by 2001?',
            options: [
              'A return to Maoist central planning and a ban on foreign firms after the 1989 protests',
              'Oil export earnings and state-owned heavy industry in the western provinces',
              'A ban on exports and factories producing only for the domestic market',
              'Deng\'s market reforms and special economic zones, followed by entry into the WTO'
            ],
            correctAnswer: 3,
            explanation: 'Deng Xiaoping\'s market reforms and special economic zones drew foreign investment, and WTO membership in 2001 completed China\'s integration into world trade. China did not return to Maoist planning, its growth did not rest on oil exports, and its factories grew by exporting.'
          },
          {
            question: 'Which response best traces a connection between global economic integration and environmental protest before 2001?',
            options: [
              'Logging and factory growth tied to world markets damaged local land and water and prompted movements such as Chipko and the Green Belt Movement',
              'Global economic integration had no environmental effects, so the protest movements of the period focused only on wages and working hours',
              'Environmental protest arose only in wealthy countries, since people in poorer regions did not organize against deforestation or pollution',
              'Environmental movements supported every free-trade agreement, because they expected trade to end deforestation within a decade'
            ],
            correctAnswer: 0,
            explanation: 'Commercial logging and export-driven industry damaged forests and water that rural communities depended on, and movements such as Chipko (India, 1973) and the Green Belt Movement (Kenya, 1977) organized in response. The other options deny the environmental effects, ignore protest in poorer regions, or misstate the movements\' positions.'
          }
        ]
      }
    }
  ]
}
