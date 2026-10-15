export const hgPopulationGrowthPart3Data = {
  topicSlug: 'hg-population-growth',
  sections: [
    {
      id: 'hgpopula3-intro',
      type: 'text' as const,
      content: `
# 🌍 Population Growth & Decline

**Part 3 of 7 — The Demographic and Epidemiological Transition Models**

---

| Section |
|---------|
| 📖 Why Each Rate Changes, Stage by Stage |
| The DTM Graph and Country Cases |
| The Epidemiological Transition Model |
| Limitations of Both Models |

> 🔑 **Key Concept:** The **Demographic Transition Model (DTM)** describes how a country's birth and death rates fall from high to low over time, and the **Epidemiological Transition Model (ETM)** describes how the main **causes of death** change along the way. Both are generalizations: they explain broad patterns well, but they do not predict exactly when, or whether, any one country will change.
`
    },
    {
      id: 'hgpopula3-mechanisms',
      type: 'text' as const,
      content: `
## 📖 Why Each Rate Changes, Stage by Stage

Part 1 listed what the rates look like in each stage. The exam asks **why** they change. Each stage boundary has a cause.

| Stage | Crude death rate | Why | Crude birth rate | Why |
|---|---|---|---|---|
| **1** | High, fluctuating | Famine, epidemics, no sanitation | High | Children are farm labor; no reliable contraception; many infants die |
| **2** | **Falls sharply** | Better food supply, clean water, sewers, vaccines, antibiotics | Stays high | Family-size norms lag behind falling mortality |
| **3** | Keeps falling, more slowly | Health care spreads further | **Falls** | Urbanization makes children costly; women's education and paid work; contraception; fewer "insurance births" because more children survive |
| **4** | Low | Modern health care is widespread | Low | Small families are the norm; TFR near or below 2.1 |
| **5** | Low, then **rising** | An older population means more deaths per 1,000 | Very low, **below the CDR** | Prolonged below-replacement fertility |

### Two Different Paths Through Stage 2

- **England and Wales:** the death rate began falling in the **later 1700s**, driven by gradual gains in farming, food distribution and, later, public sanitation. The birth rate did not begin a sustained fall until the **1870s**. The whole transition took well over a century.
- **Most of Africa, Asia and Latin America:** death rates fell mainly in the **mid-1900s**, when vaccines, antibiotics, DDT and clean-water technology **diffused from abroad**. Mortality dropped in decades rather than centuries, while birth rates stayed high. That gap produced the rapid world growth of the 1950s–1980s.

The difference matters: the DTM was built from the first path, but most of the world followed the second.
`
    },
    {
      id: 'hgpopula3-graph',
      type: 'text' as const,
      content: `
## The DTM Graph and Country Cases

### The Graph, Described in Text

Put **time** on the horizontal axis, divided into Stages 1 to 5, and **rate per 1,000** on the left vertical axis (0 to about 50). A second vertical axis on the right shows **total population**.

- The **CDR line** starts high (about 35–40) and jagged in Stage 1, **plunges** through Stage 2, flattens near 10 in Stages 3 and 4, and **creeps upward** in Stage 5.
- The **CBR line** stays high and level through Stage 1 and Stage 2, **falls** through Stage 3, flattens near 10–12 in Stage 4, and **drops below** the CDR line in Stage 5.
- The **vertical gap** between the two lines is natural increase. It is **widest at the end of Stage 2 and the start of Stage 3**.
- The **total population curve** is nearly flat in Stage 1, rises steeply through Stages 2 and 3, levels off in Stage 4 (an S shape), and turns slightly down in Stage 5.

### Worked Example: Placing Countries on the Model

| Country (about 2023, rounded) | CBR | CDR | RNI | Reasoning | Best fit |
|---|---|---|---|---|---|
| Niger | 42 | 9 | 3.3% | Death rate has already fallen; birth rate still very high | Late Stage 2 |
| India | 16 | 7 | 0.9% | Birth rate has fallen a long way; TFR about 2.0; still growing from momentum | Late Stage 3 |
| United States | 11 | 9 | 0.2% | Both rates low; growth comes mostly from immigration | Stage 4 |
| Japan | 6 | 13 | −0.7% | Deaths exceed births every year | Stage 5 |

Notice how the reasoning column uses **both** rates and the gap between them. Stage labels are judgments, not official categories, so on the exam always support a stage with the data.

### A Compressed Transition: South Korea

South Korea's TFR fell from about **6** in 1960 to below replacement by the **mid-1980s**, a fertility decline that took England and Wales several generations. Rapid industrialization, urbanization, mass education and an active government family-planning program all pushed in the same direction. By 2020, South Korea recorded more deaths than births, and its TFR reached **0.72** in 2023.

> 🔑 **AP Connection:** When a stimulus gives CBR and CDR, place the country by reading the **gap** and the **direction** of each rate, then name a **mechanism** (for example, "falling CDR because of vaccination and clean water"). A stage number alone rarely earns an explain point.
`
    },
    {
      id: 'hgpopula3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "In Stage 2 of the DTM, why does the crude birth rate stay high even as the crude death rate falls sharply?",
            options: [
              "Norms about family size lag behind mortality",
              "Governments pay families bonuses for each child",
              "Falling death rates raise fertility among women",
              "Industrial jobs require families with many children"
            ],
            correctAnswer: 0,
            explanation: "Desired family size is rooted in culture and the farm economy, so it changes more slowly than death rates do once vaccines and clean water arrive. Birth bonuses are a Stage 5 policy, and industrial jobs tend to lower fertility rather than raise it."
          },
          {
            question: "On a graph of the DTM, where is the vertical gap between the CBR and CDR lines widest?",
            options: [
              "Late Stage 2 and early Stage 3",
              "Late Stage 1 and early Stage 2",
              "Late Stage 3 and early Stage 4",
              "Late Stage 4 and early Stage 5"
            ],
            correctAnswer: 0,
            explanation: "The death rate has finished its steep fall by the end of Stage 2 while the birth rate has barely begun to drop, so natural increase peaks around the Stage 2 to 3 boundary. By Stage 4 the two lines nearly meet."
          },
          {
            question: "South Korea's TFR fell from about 6 in 1960 to below replacement by the mid-1980s. Which limitation of the DTM does this case best illustrate?",
            options: [
              "The model cannot predict how long a country will spend in each stage",
              "The model leaves out the effect of migration on population growth",
              "The model was built only from data on agricultural societies",
              "The model assumes death rates fall before birth rates begin to"
            ],
            correctAnswer: 0,
            explanation: "South Korea completed a fertility decline in about 25 years that took England and Wales several generations, showing that the DTM describes a sequence but not its timing. Migration plays little role in this case, and the death-rate-first sequence actually held."
          }
        ]
      }
    },
    {
      id: 'hgpopula3-etm',
      type: 'text' as const,
      content: `
## The Epidemiological Transition Model

Abdel Omran proposed the ETM in **1971**. It describes how the leading **causes of death** shift as a country moves through the DTM. Omran described three stages; later researchers added two more.

| ETM stage | Main causes of death | Matching DTM stage | Example |
|---|---|---|---|
| **1. Pestilence and famine** | Infectious and parasitic disease, famine, violence | Stage 1 | The Black Death in Europe (1347–1351) |
| **2. Receding pandemics** | Epidemics become less frequent as sanitation, nutrition and medicine improve | Stage 2 | Cholera fades in 1800s cities once sewers and filtered water arrive |
| **3. Degenerative and human-created diseases** | Heart disease, cancer, stroke; diseases tied to aging, pollution and lifestyle | Stage 3 | Heart disease becomes a leading cause of death in industrial countries |
| **4. Delayed degenerative diseases** | The same chronic diseases, but medical advances push them to older ages | Stage 4 | Surgery, screening and medication extend life expectancy into the 80s |
| **5. Reemerging and emerging infectious diseases** | Infectious disease returns or appears through resistance, poverty and global travel | Debated; can occur at any stage | Drug-resistant tuberculosis; COVID-19 |

### Why Stage 5 Happens

| Cause | Real example |
|---|---|
| **Evolution of microbes** | Overuse of antibiotics breeds resistant bacteria; one major study (*The Lancet*, 2022) estimated that antimicrobial resistance directly caused about **1.27 million deaths** in 2019 |
| **Global connectivity** | COVID-19 spread to every continent within months in 2020; the WHO estimated about **14.9 million** excess deaths in 2020–2021 |
| **Falling vaccination** | Measles returns where vaccination coverage drops |
| **Poverty and dense urban settlement** | Crowded informal settlements with poor sanitation help tuberculosis and cholera spread |

### The DTM and ETM Together

The models fit together like two views of one process. The **DTM** tracks how many people are born and die; the **ETM** explains **what** people die of. The drop in the CDR in DTM Stage 2 **is** ETM Stage 2: infectious disease recedes. The low CDR of DTM Stage 4 reflects ETM Stage 4: chronic diseases are delayed to old age.

> 🔑 **AP Connection:** If a question asks why the CDR fell in Stage 2, the ETM gives you the mechanism: the decline of **infectious disease** through sanitation, vaccination and better nutrition.
`
    },
    {
      id: 'hgpopula3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the ETM Stage** 🔍

Choose the stage of the Epidemiological Transition Model that each situation best illustrates.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cholera outbreaks fade after a city builds sewers and filters its drinking water: ETM ___',
            options: ['Stage 2', 'Stage 3', 'Stage 4', 'Stage 5']
          },
          {
            label: 'Heart disease and cancer replace infections as the leading causes of death: ETM ___',
            options: ['Stage 2', 'Stage 3', 'Stage 4', 'Stage 5']
          },
          {
            label: 'Bypass surgery and cancer screening push typical ages of death from these diseases into the 80s: ETM ___',
            options: ['Stage 2', 'Stage 3', 'Stage 4', 'Stage 5']
          },
          {
            label: 'Strains of tuberculosis resistant to standard antibiotics spread in crowded cities: ETM ___',
            options: ['Stage 2', 'Stage 3', 'Stage 4', 'Stage 5']
          }
        ],
        correctAnswers: ['Stage 2', 'Stage 3', 'Stage 4', 'Stage 5'],
        hint1: 'Epidemics are becoming less common.',
        hint2: 'Chronic diseases tied to aging and lifestyle now dominate.',
        hint3: 'The same chronic diseases still kill, but later in life.',
        explanation: 'Receding cholera is Stage 2 (receding pandemics). Heart disease and cancer taking over is Stage 3 (degenerative and human-created diseases). Delaying those diseases to old age is Stage 4. Drug-resistant tuberculosis is Stage 5, the reemergence of infectious disease.'
      }
    },
    {
      id: 'hgpopula3-limits',
      type: 'text' as const,
      content: `
## Limitations of Both Models

### Limitations of the DTM

| Limitation | Explanation | Example |
|---|---|---|
| **Based on European and North American experience** | Built from countries where industrialization drove the transition | Many countries' death rates fell from imported medicine, before industrialization |
| **Ignores migration** | Tracks only births and deaths | The Gulf states and Canada grow largely through immigration |
| **Cannot predict timing** | Says nothing about how long each stage lasts | South Korea's fertility fell in about 25 years; England's took several generations |
| **Assumes forward movement** | Countries can stall or reverse | HIV/AIDS raised death rates in Botswana and South Africa in the 1990s and 2000s; fertility decline stalled for years in several sub-Saharan African countries |
| **Stage 5 was not in the original model** | Early versions ended at Stage 4 | Whether natural decrease is a stage or a problem to fix is still debated |
| **National scale hides regional variation** | One stage label covers the whole country | India's TFR is about 1.8 in Kerala but about 3.0 in Bihar (2019–21 national survey) |
| **Ignores policy and culture** | Treats change as driven by economics alone | China's birth-planning policies pushed fertility down faster than economic change alone |

### Limitations of the ETM

- It assumes a **one-way** progression, yet infectious diseases can return (Stage 5).
- Many low- and middle-income countries face a **double burden**: infectious diseases **and** chronic diseases such as diabetes at the same time, which no single stage describes.
- Like the DTM, it was drawn largely from the experience of wealthier countries.

> 🔑 **AP Connection:** "Explain a limitation of the DTM" is a classic FRQ part. Name the limitation **and** give a specific case, such as "The DTM does not account for migration, so it cannot explain why the United States keeps growing with a TFR of about 1.6."
`
    },
    {
      id: 'hgpopula3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which observation most directly challenges the DTM's assumption that countries move only forward through its stages?",
            options: [
              "AIDS raised death rates in Botswana in the 1990s",
              "Niger's birth rate stays high while its death rate falls",
              "Japan's deaths now outnumber its births every single year",
              "South Korea's birth rate fell faster than Europe's once did"
            ],
            correctAnswer: 0,
            explanation: "A rising death rate after decades of decline moves a country backward, which the model does not anticipate. Niger fits Stage 2, Japan fits Stage 5, and South Korea shows a fast transition that still moved forward."
          },
          {
            question: "Which trend best illustrates the fifth stage of the Epidemiological Transition Model?",
            options: [
              "Drug-resistant bacterial infections cause more deaths",
              "Cholera deaths decline once sewers are installed",
              "Heart disease deaths climb as populations age",
              "Surgery pushes deaths from heart disease to older ages"
            ],
            correctAnswer: 0,
            explanation: "Stage 5 is the return of infectious disease, and antimicrobial resistance is a leading cause. Receding cholera is Stage 2, aging-related heart disease is Stage 3, and delaying heart disease with surgery is Stage 4."
          },
          {
            question: "Niger's death rate fell in the mid-1900s largely because of imported vaccines and antibiotics rather than its own industrialization. This shows that",
            options: [
              "the causes behind the DTM's stage changes can differ by region",
              "the DTM's stages always follow a country's own industrialization",
              "Niger skipped Stage 2 and moved directly into Stage 3",
              "death rates cannot fall unless birth rates rise first"
            ],
            correctAnswer: 0,
            explanation: "The DTM was built from Europe, where industrialization drove falling mortality, but in Niger diffused medical technology did the same job. Niger did not skip Stage 2; its high birth rate and falling death rate are Stage 2."
          }
        ]
      }
    }
  ]
}
