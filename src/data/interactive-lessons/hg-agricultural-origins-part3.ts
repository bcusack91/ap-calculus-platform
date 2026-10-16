export const hgAgriculturalOriginsPart3Data = {
  topicSlug: 'hg-agricultural-origins',
  sections: [
    {
      id: 'hgagricu3-intro',
      type: 'text' as const,
      content: `
# 🌍 Agricultural Origins & Hearths

**Part 3 of 7 — How Agriculture Spread: Migration, Axes and the Columbian Exchange**

---

| Section |
|---------|
| 📖 Did Farmers Move, or Did Farming Move? |
| Three Great Expansions |
| The Axis Idea and Its Limits |
| The Columbian Exchange |

> 🔑 **Key Concept:** Agricultural practices **diffused** from the hearths, and the CED singles out the **Columbian Exchange** as a major pattern of diffusion (CED Topic 5.3). For every case, ask the Unit 3 question: **did people move with the crops (relocation), or did neighbors adopt them (expansion)?**
`
    },
    {
      id: 'hgagricu3-europe',
      type: 'text' as const,
      content: `
## 📖 Did Farmers Move, or Did Farming Move?

Farming reached **Greece** from Anatolia (today's Turkey) by about **6500 BCE** and **Britain** by about **4000 BCE**.

### Measuring the Speed
In 1971, Albert Ammerman and Luca Cavalli-Sforza plotted the radiocarbon dates of the earliest farming sites against their distance from the Near East. The dates fell along a fairly steady front, which they called a **"wave of advance"**: roughly **1 km per year** on average.

**Worked estimate:** Greece to Britain is roughly 2,500 km as farmers traveled, and farming took about 2,500 years to cover it:

2,500 km ÷ 2,500 years = **about 1 km per year**.

### What the Speed Did Not Tell Us
A steady front fits **two** different processes:
- **Contagious diffusion:** local foragers learned farming from neighbors, and the idea spread.
- **Relocation diffusion:** farming families moved, generation by generation, into new land.

For decades the evidence could not separate them. **Ancient DNA** studies published since about 2015 show that early farmers in central and western Europe descended mostly from **Anatolian farmers**, not from local foragers. So the main process was **relocation**, with some later mixing.

> 🔑 **AP Connection:** A map of dates shows the **pattern** of spread. It cannot by itself show the **process**. Say what extra evidence, such as DNA, language or artifacts, would separate relocation from contagious diffusion.
`
    },
    {
      id: 'hgagricu3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Farming spread across Europe at about 1 km per year. Why did this speed alone fail to show which type of diffusion occurred?',
            options: [
              'A steady front fits both migrating farmers and neighbors copying them',
              'Radiocarbon dates are too imprecise to compare between sites',
              'Farming reached Britain before it reached Greece in the record',
              'The wave of advance model applies only to the spread of diseases'
            ],
            correctAnswer: 0,
            explanation: 'Farmers moving a little each generation and foragers learning from neighbors would both produce a slow, steady front. Separating them needed other evidence, which ancient DNA later supplied.'
          },
          {
            question: 'Ancient DNA shows that early farmers in western Europe descended mostly from Anatolian farmers. This supports which type of diffusion?',
            options: [
              'Stimulus',
              'Relocation',
              'Hierarchical',
              'Contagious'
            ],
            correctAnswer: 1,
            explanation: 'If the farmers themselves descended from Anatolian migrants, the people moved and brought farming with them, which is relocation diffusion. Contagious diffusion would leave local forager ancestry dominant.'
          }
        ]
      }
    },
    {
      id: 'hgagricu3-expansions',
      type: 'text' as const,
      content: `
## Three Great Expansions

| Expansion | From and when | What spread | Main diffusion type |
|---|---|---|---|
| **Neolithic Europe** | Anatolia, from about 6500 BCE | Wheat, barley, sheep, goats, cattle, pottery | **Relocation**, then mixing with foragers |
| **Bantu expansion** | The Nigeria–Cameroon borderlands, beginning roughly 3,000 to 5,000 years ago | Yams, sorghum and pearl millet, and later iron working and cattle, across central, eastern and southern Africa | **Relocation**: Bantu-speaking farmers moved, and today the Bantu languages cover most of Africa south of the equator |
| **Austronesian expansion** | Taiwan, about 5,000 years ago | Taro, yams, breadfruit, pigs, chickens and dogs, carried by canoe through the Philippines and Indonesia, east across the Pacific and west to **Madagascar** | **Relocation** by sea |

### Reading the Language Evidence
In all three cases, a **language family** spread with the farmers: Indo-European is debated for Europe, but Bantu languages track the Bantu expansion closely, and Austronesian languages stretch from Madagascar to Hawaii. When crops and a language family share a map, migration is the likely process.

### Scale Check
- **Continental scale:** each expansion looks like one wave spreading out from a hearth.
- **Local scale:** the record shows stops, reversals and long pauses. Farming paused for centuries at some boundaries, such as the northern edge of central Europe's fertile loess soils, before it reached Scandinavia and Britain.
`
    },
    {
      id: 'hgagricu3-axis',
      type: 'text' as const,
      content: `
## The Axis Idea and Its Limits

A popular argument holds that **the direction of a continent's main axis** shaped how fast crops spread. It is worth knowing because it shows both the pull and the danger of **environmental determinism**.

| Continent | Main axis | Argument |
|---|---|---|
| **Eurasia** | East–west | Places at similar latitudes share day length and seasons, so Fertile Crescent wheat could spread from Spain to China |
| **Americas** | North–south | Crops had to cross deserts, the tropics and changing day lengths, so maize spread slowly |
| **Africa** | North–south | The Sahara and the tropics blocked Fertile Crescent crops from moving south |

### Limits of the Axis Idea
- **Exceptions.** Maize reached the US Southwest by about 4,000 years ago and later became a staple across eastern North America, despite the north–south axis.
- **Too much weight on physical geography.** Critics call it close to **environmental determinism**: it leaves out choices, trade, politics and culture.
- **Useful as a tendency.** Day length and climate do limit crops, so latitude matters. It is a factor, not a law.

> 🔑 **AP Connection:** If an exam question invites a physical explanation, add a **human** factor and a **limit**. That shows **possibilism**, the view that the environment sets limits but people choose within them.
`
    },
    {
      id: 'hgagricu3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Austronesian languages are spoken from Madagascar to Hawaii, matching the spread of taro, pigs and chickens. What does this pairing most strongly suggest?',
            options: [
              'Island peoples copied crops from passing traders',
              'Migrating farmers carried the crops along',
              'Each island domesticated the crops alone',
              'The language spread by hierarchical diffusion'
            ],
            correctAnswer: 1,
            explanation: 'When a language family and a set of crops share the same map, the most likely explanation is that the same migrating people carried both, which is relocation diffusion. Copying by neighbors or separate domestication would not spread one language family that far.'
          },
          {
            question: 'Which fact is the strongest challenge to the axis argument described above?',
            options: [
              'Wheat spread from the Fertile Crescent to China',
              'Fertile Crescent crops did not cross the Sahara',
              'Maize became a staple in eastern North America',
              'Day length changes with latitude across the globe'
            ],
            correctAnswer: 2,
            explanation: 'Maize crossed many degrees of latitude to become a staple far from Mexico, which the north–south axis argument predicts should be hard. Wheat moving east–west and crops failing to cross the Sahara both support the argument, and day length is its basis.'
          },
          {
            question: 'A student says, "Eurasia\'s shape made its farming spread faster, so geography decided which societies became powerful." Which response best improves the claim?',
            options: [
              'Shape mattered, but trade and choices also shaped outcomes',
              'Shape had no effect, because farming spread everywhere evenly',
              'Shape decided the outcome, since climate controls all crops',
              'Shape counted in the Americas but not in Eurasia'
            ],
            correctAnswer: 0,
            explanation: 'Treating physical geography as one factor among human ones avoids environmental determinism while keeping the real effect of latitude. Denying any effect, or making climate the only cause, swings to one extreme.'
          }
        ]
      }
    },
    {
      id: 'hgagricu3-columbian',
      type: 'text' as const,
      content: `
## The Columbian Exchange

The historian **Alfred Crosby** named it in 1972: the transfer of plants, animals, people and diseases between the Eastern and Western Hemispheres after **1492**.

| Direction | Crops | Animals | Diseases |
|---|---|---|---|
| **Americas → Eastern Hemisphere** | Maize, potatoes, cassava, tomatoes, chili peppers, peanuts, cacao, tobacco | Turkeys | — |
| **Eastern Hemisphere → Americas** | Wheat, rice, sugarcane, coffee, bananas | Horses, cattle, pigs, sheep, chickens | Smallpox, measles, influenza |

### Effects, with Rounded Data
- **Population collapse in the Americas.** With no prior exposure, Indigenous peoples died in vast numbers. Estimates of the decline in the century after 1492 run as high as **about 90 percent**.
- **Population growth in Afro-Eurasia.** Potatoes yield far more calories per hectare than grain in cool, wet climates. Economists Nathan Nunn and Nancy Qian (2011) estimated that the potato explains roughly **a quarter** of Old World population growth between 1700 and 1900.
- **Dependence and famine.** Many poor Irish families lived largely on potatoes. When potato blight struck in **1845–1852**, about **1 million** people died and about 1 million emigrated.
- **New staples.** Cassava became a staple across sub-Saharan Africa; Nigeria is now the world's largest producer (FAO data). Chili peppers transformed cooking in India, Thailand and Korea.
- **Plantations and forced migration.** Sugarcane plantations in the Caribbean and Brazil drove the Atlantic slave trade, a forced relocation of about 12.5 million Africans.
- **Landscape change.** Horses changed life on the Great Plains; cattle and sheep reshaped grasslands from Argentina to Mexico.

> 🔑 **AP Connection:** The Columbian Exchange connects Unit 5 to Unit 2 (population change), Unit 3 (diffusion and syncretism in cuisine) and Unit 7 (plantation economies).
`
    },
    {
      id: 'hgagricu3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate and Recall** 🧮

**1)** Farming moved about 1,500 km in about 1,500 years from one region to another. What was its average speed in km per year?

**2)** The historian who named the Columbian Exchange in 1972 was Alfred _______.

**3)** Ireland had about 8 million people before the famine of 1845–1852. About 1 million died and about 1 million emigrated. What percent of the pre-famine population died or left?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', 'Crosby', '25'],
        hint1: 'Divide distance by time.',
        hint2: 'His surname rhymes with "Mosby."',
        hint3: 'Add the deaths and emigrants, divide by 8 million, then multiply by 100.',
        explanation: '1) 1,500 km ÷ 1,500 years = 1 km per year. 2) Alfred Crosby coined the term in 1972. 3) (1 + 1) ÷ 8 = 0.25, so about 25 percent of Ireland\'s people died or left.'
      }
    }
  ]
};
