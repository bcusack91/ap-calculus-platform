export const hgPopulationDistributionPart3Data = {
  topicSlug: 'hg-population-distribution',
  sections: [
    {
      id: 'hgpopula3-intro',
      type: 'text' as const,
      content: `
# 🌍 Population Distribution & Composition

**Part 3 of 7 — Three Density Measures**

---

| Section |
|---------|
| 📖 Arithmetic, Physiological and Agricultural Density |
| Worked Calculations with Five Countries |
| What Each Measure Reveals and Hides |
| Interpreting Combinations |

> 🔑 **Key Concept:** One number cannot capture how crowded a country is. **Arithmetic density** compares people with all land, **physiological density** compares people with farmland, and **agricultural density** compares farmers with farmland. Used together, they show pressure on land and how farming is organized (CED Topic 2.1).
`
    },
    {
      id: 'hgpopula3-formulas',
      type: 'text' as const,
      content: `
## 📖 Arithmetic, Physiological and Agricultural Density

| Measure | Formula | Answers the question |
|---|---|---|
| **Arithmetic density** | Total population ÷ total land area | How many people are there per unit of land overall? |
| **Physiological density** | Total population ÷ **arable** (farmable) land | How much pressure do people put on the land that can grow food? |
| **Agricultural density** | Number of **farmers** ÷ arable land | How many farmers work each unit of farmland? |

**Arable land** is land suitable for growing crops. In most countries it is only a fraction of the total area.

### Worked Calculations with Five Countries

The figures below are approximate for the early 2020s and **rounded so the arithmetic is clear**. Farmers means people employed in agriculture.

| Country | Population | Land area (km²) | Arable land (km²) | Farmers |
|---|---|---|---|---|
| Egypt | 110 million | 1,000,000 | 35,000 | 5.5 million |
| Bangladesh | 170 million | 130,000 | 80,000 | 25 million |
| Netherlands | 18 million | 34,000 | 10,000 | 200,000 |
| Canada | 40 million | 9,000,000 | 380,000 | — |
| United States | 335 million | 9,150,000 | 1,570,000 | — |

**Egypt, step by step:**
1. Arithmetic density = 110,000,000 ÷ 1,000,000 = **110 people per km²**
2. Physiological density = 110,000,000 ÷ 35,000 ≈ **3,140 people per km² of arable land**
3. Agricultural density = 5,500,000 ÷ 35,000 ≈ **157 farmers per km² of arable land**

**All five countries:**

| Country | Arithmetic | Physiological | Agricultural |
|---|---|---|---|
| Egypt | 110 | about 3,140 | about 157 |
| Bangladesh | about 1,310 | about 2,130 | about 313 |
| Netherlands | about 530 | 1,800 | 20 |
| Canada | about 4.4 | about 105 | — |
| United States | about 37 | about 213 | — |
`
    },
    {
      id: 'hgpopula3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use the rounded figures in the first table. Enter whole numbers without commas.

**1)** Netherlands: 18 million people ÷ 10,000 km² of arable land. What is the physiological density, in people per km²?

**2)** Netherlands: 200,000 farmers ÷ 10,000 km² of arable land. What is the agricultural density, in farmers per km²?

**3)** A country has 60 million people, 300,000 km² of land and 50,000 km² of arable land. What is its physiological density?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1800', '20', '1200'],
        hint1: 'Divide 18,000,000 by 10,000.',
        hint2: 'Divide 200,000 by 10,000.',
        hint3: 'Physiological density uses arable land, not total land: 60,000,000 ÷ 50,000.',
        explanation: '1) 18,000,000 ÷ 10,000 = 1,800 people per km² of arable land. 2) 200,000 ÷ 10,000 = 20 farmers per km². 3) 60,000,000 ÷ 50,000 = 1,200 people per km² of arable land; the 300,000 km² total would give the arithmetic density of 200.'
      }
    },
    {
      id: 'hgpopula3-reveals',
      type: 'text' as const,
      content: `
## What Each Measure Reveals and Hides

### Arithmetic Density
- **Reveals:** a quick, comparable figure for any country.
- **Hides:** where people actually live and whether the land can feed them. Egypt's 110 per km² sounds moderate; it averages crowded Nile farmland with empty desert.

### Physiological Density
- **Reveals:** pressure on food-producing land. Egypt's physiological density is about **29 times** its arithmetic density (3,140 ÷ 110), because only about 3.5 percent of its land is arable.
- **Hides:** how productive the farmland is, and whether the country imports food. A high physiological density does not by itself mean hunger.

### Agricultural Density
- **Reveals:** how farming is organized. A **high** agricultural density means many farmers on each unit of land, which usually signals small plots, more hand labor and less machinery. A **low** agricultural density means few farmers working large, mechanized farms.
- **Hides:** total food output and the rest of the economy.

> ⚠️ **Common error:** physiological density uses **all people**; agricultural density uses **only farmers**. Both divide by **arable land**, not total land.
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
            question: 'Egypt\'s physiological density is far higher than its arithmetic density. What does this show?',
            options: [
              'Only a small share of Egypt\'s land can be farmed',
              'Most Egyptians work on large, highly mechanized farms',
              'Egypt has more farmland than most other countries',
              'Egypt\'s population is spread evenly across its land'
            ],
            correctAnswer: 0,
            explanation: 'Physiological density divides the same population by arable land instead of total land, so a much larger number means arable land is a small fraction of the whole. It says nothing about mechanization, and Egypt\'s people are concentrated, not evenly spread.'
          },
          {
            question: 'Which measure would best show whether a country\'s farms are mostly small and labor-intensive?',
            options: [
              'Agricultural density',
              'Arithmetic density',
              'Physiological density',
              'Total fertility rate'
            ],
            correctAnswer: 0,
            explanation: 'Agricultural density counts farmers per unit of arable land, so a high value points to many workers on small plots. Arithmetic and physiological density count everyone, and fertility rate measures births, not farming.'
          }
        ]
      }
    },
    {
      id: 'hgpopula3-combos',
      type: 'text' as const,
      content: `
## Interpreting Combinations

The measures are most useful in pairs.

| Pattern | Likely meaning | Example from the table |
|---|---|---|
| High physiological, **high** agricultural | Many people depend on limited land, and much of the work force farms it by hand; strong pressure on land | Bangladesh: about 2,130 and about 313 |
| High physiological, **low** agricultural | Limited farmland, but farming is mechanized and productive; most people work in other sectors, and food can be imported | Netherlands: 1,800 and 20 |
| Low arithmetic, much higher physiological | Population concentrated on a small share of usable land | Egypt and Canada |
| Low physiological | Plenty of farmland per person; large food exports possible | Canada at about 105, United States at about 213 |

### Worked Comparison: Bangladesh vs. the Netherlands

Both countries are crowded relative to their farmland. The difference is in **who works the land**:
- In Bangladesh, about 25 million people farm 80,000 km², about **313 per km²**.
- In the Netherlands, about 200,000 people farm 10,000 km², about **20 per km²**.

Dutch farms use machinery, greenhouses and capital, so a small work force produces a lot; the Netherlands is one of the world's largest exporters of agricultural products by value. In Bangladesh, small family plots and more hand labor mean far more farmers per unit of land. The comparison links density to **level of development** and to the **agricultural** unit (Unit 5).

**Limitation of all three measures:** they are **national averages**. Bangladesh's coastal and northern districts differ, and a single Dutch figure blends greenhouse districts with dairy pasture. For a sharper picture, compute the measures at a finer scale.

> 🔑 **AP Connection:** If a question gives two countries' densities and asks you to "explain a difference," name the measure, say what it divides, and connect the number to a real process: land pressure, mechanization or food imports.
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
            question: 'Country A and Country B have similar physiological densities, but Country A\'s agricultural density is ten times higher. What is the most likely explanation?',
            options: [
              'Country A has more small, labor-intensive farms',
              'Country A has more arable land than B',
              'Country B has a much larger total population overall',
              'Country B has many more farmers working on each farm'
            ],
            correctAnswer: 0,
            explanation: 'With similar pressure on farmland, a much higher agricultural density means far more farmers work each unit of land, which points to small plots and less mechanization. More farmers per farm in Country B would raise B\'s agricultural density, not A\'s.'
          },
          {
            question: 'Why might the Netherlands have a high physiological density without food shortages?',
            options: [
              'It farms intensively and can import food it needs',
              'Its arithmetic density is lower than that of Canada',
              'Most of its population works in agriculture',
              'Its arable land covers most of the country\'s area'
            ],
            correctAnswer: 0,
            explanation: 'Highly productive, mechanized farming and the income to import food let a country with little farmland per person stay well fed. Its arithmetic density is far higher than Canada\'s, only a small share of workers farm, and arable land is under a third of its area.'
          },
          {
            question: 'Which calculation gives arithmetic density?',
            options: [
              'Farmers divided by arable land',
              'All residents divided by arable land',
              'Total population divided by total land area',
              'Arable land divided by total land area'
            ],
            correctAnswer: 2,
            explanation: 'Arithmetic density divides all people by all land. Dividing by arable land gives physiological density, farmers over arable land gives agricultural density, and arable land over total land is a share of land, not a density.'
          }
        ]
      }
    }
  ]
}
