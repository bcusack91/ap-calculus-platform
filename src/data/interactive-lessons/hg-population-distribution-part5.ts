export const hgPopulationDistributionPart5Data = {
  topicSlug: 'hg-population-distribution',
  sections: [
    {
      id: 'hgpopula5-intro',
      type: 'text' as const,
      content: `
# 🌍 Population Distribution & Composition

**Part 5 of 7 — Population Composition and Pyramids**

---

| Section |
|---------|
| 📖 How to Read a Population Pyramid |
| Five Real Pyramids, Described in Text |
| Sex Ratio and What Skews It |
| Using Pyramids to Plan |

> 🔑 **Key Concept:** **Population composition** is the makeup of a population by characteristics such as age, sex, ethnicity and income. The **population pyramid** (age-sex diagram) shows age and sex structure at a glance, records past events such as baby booms, wars and famines, and lets planners forecast needs for schools, jobs and pensions (CED Topic 2.3).
`
    },
    {
      id: 'hgpopula5-read',
      type: 'text' as const,
      content: `
## 📖 How to Read a Population Pyramid

**The layout:** horizontal bars stacked by age group, usually in five-year cohorts (0–4 at the bottom, then 5–9, and so on up to 100+). **Males are on the left, females on the right.** Bar length shows either the number of people or the percentage of the total population.

### A Six-Step Method

| Step | Look at | What it tells you |
|---|---|---|
| 1 | **The axes** | Are bars counts or percentages? Percentages let you compare countries of different sizes |
| 2 | **The base** | A wide base means many recent births; a narrow base means few |
| 3 | **The overall shape** | Expansive (wide base, triangle), stationary (column), or constrictive (narrower base than middle) |
| 4 | **Bulges and notches** | A bulge is an unusually large cohort (baby boom, immigration); a notch is a small one (war, famine, low births) |
| 5 | **Left vs. right** | Uneven sides point to sex-selective migration, war deaths, sex-selective births or life expectancy gaps |
| 6 | **Project forward** | Each cohort moves up one bar every five years; ask what services the large cohorts will need next |

### Three Basic Shapes

| Shape | Profile | Usually means |
|---|---|---|
| **Expansive** | Wide base, sharply narrowing toward the top | High birth rate, younger population, rapid growth |
| **Stationary** | Roughly equal bars up to old age, then tapering | Low birth and death rates, slow growth |
| **Constrictive** | Base narrower than the middle | Births falling, population aging, possible decline |
`
    },
    {
      id: 'hgpopula5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A population pyramid has bars for ages 0–4 that are shorter than the bars for ages 30–34. What does this most likely indicate?',
            options: [
              'Birth rates have fallen',
              'A recent baby boom has begun',
              'Death rates among children rose sharply',
              'Many young adults have recently emigrated'
            ],
            correctAnswer: 0,
            explanation: 'A base narrower than the middle is a constrictive shape, which usually means fewer births now than a generation ago. A baby boom would widen the base, and emigration of young adults would shrink the middle, not the base.'
          },
          {
            question: 'On a population pyramid, an unusually short bar for one age group in the middle of an otherwise smooth shape is most likely evidence of',
            options: [
              'a past event such as a war or famine that cut births or raised deaths',
              'a recent rise in the number of births in the country being studied',
              'a mistake, since all cohorts in a pyramid are the same size by design',
              'a change in the map projection used to draw the age-sex diagram'
            ],
            correctAnswer: 0,
            explanation: 'A notch records a small cohort, often from a war, famine or epidemic that lowered births or raised deaths in those years. Recent births appear at the base, cohorts naturally differ in size, and pyramids are graphs, not projected maps.'
          },
          {
            question: 'Why do geographers often draw pyramids with percentages rather than counts?',
            options: [
              'To compare nations of very different sizes',
              'To show the exact number of people of each age',
              'To hide differences between males and females',
              'To make the base of the pyramid look narrower'
            ],
            correctAnswer: 0,
            explanation: 'Percentages put a country of 5 million and one of 300 million on the same scale, so their shapes can be compared directly. Counts give exact numbers, and neither form hides sex differences or changes the base by itself.'
          }
        ]
      }
    },
    {
      id: 'hgpopula5-cases',
      type: 'text' as const,
      content: `
## Five Real Pyramids, Described in Text

| Country | What the pyramid looks like | What it records |
|---|---|---|
| **Niger** | A steep triangle with a very wide base; the bars shrink at every step upward | Very high fertility (about six children per woman); about half the population is under 15, and the median age is about 15 |
| **Japan** | A narrow base, a wide middle and a top-heavy upper half, with bulges around ages 50–54 and the mid-70s (2020s) | Very low fertility, long life expectancy; the bulges are the postwar baby boom (1947–49) and its "echo" (early 1970s); about 29% are 65 or older |
| **United States** | Fairly column-shaped, with a bulge in the 60s and 70s (2020s) and a second in the 30s | The baby boom (births 1946–64) and the large millennial cohort; immigration fills the working ages |
| **China** | A narrowing base; a notch around ages 64–66 (mid-2020s); more males than females in younger cohorts | The notch is the 1959–61 famine; falling births after the one-child policy (1980–2015); sex-selective births skewed the young cohorts toward boys |
| **United Arab Emirates** | A huge bulge of **males** aged about 25–44 on the left; the female side much smaller | Hundreds of thousands of male migrant workers in construction and services; overall, more than two-thirds of residents are male |

**Key reading lesson:** Niger and Japan differ mainly in their **base** (fertility). China and the UAE differ mainly in their **left vs. right** symmetry, for completely different reasons: births in China, migration in the UAE.

> 🔑 **AP Connection:** If a pyramid has a strongly uneven working-age bulge on one side, think **migration** first (Gulf states). If young cohorts are male-skewed from birth, think **sex-selective births** (China, parts of India). If older cohorts are female-heavy, think **life expectancy gaps** or past **wars**.
`
    },
    {
      id: 'hgpopula5-sexratio',
      type: 'text' as const,
      content: `
## Sex Ratio and What Skews It

**Sex ratio** = (number of males ÷ number of females) × 100, expressed as males per 100 females.

- About **105** boys are born for every 100 girls in most populations, the natural sex ratio at birth.
- Because women tend to live longer, the ratio falls with age; in most countries women outnumber men among the oldest cohorts.

### Worked Example

A city has 520,000 males and 480,000 females.

1. Sex ratio = (520,000 ÷ 480,000) × 100
2. = 1.0833 × 100 ≈ **108 males per 100 females**

### What Pushes the Ratio Away from Normal

| Cause | Direction | Example |
|---|---|---|
| Sex-selective migration | More males at destinations of male labor migration | Gulf states such as the UAE and Qatar |
| Sex-selective births | More boys at birth | China's census sex ratio at birth was about 118 in 2010 and about 111 in 2020 |
| War | Fewer men in affected cohorts | Russia's oldest cohorts still show losses from World War II |
| Life expectancy gap | Fewer older men | Russian men's life expectancy has been roughly 10 years below women's |

**Consequence:** a long-term surplus of young men, as in parts of China, can make it hard for many men to marry, which affects family formation and, eventually, birth rates.
`
    },
    {
      id: 'hgpopula5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** A country has 2,100,000 males and 2,000,000 females. What is its sex ratio, in males per 100 females?

**2)** A Gulf city has 700,000 males and 300,000 females. To the nearest whole number, what is its sex ratio?

**3)** A pyramid shows that 450,000 of a country's 1,000,000 people are under 15. What percentage are under 15?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['105', '233', '45'],
        hint1: 'Divide males by females, then multiply by 100.',
        hint2: '700,000 ÷ 300,000 = 2.333...; multiply by 100 and round.',
        hint3: 'Divide 450,000 by 1,000,000 and multiply by 100.',
        explanation: '1) (2,100,000 ÷ 2,000,000) × 100 = 105, the normal ratio at birth. 2) (700,000 ÷ 300,000) × 100 ≈ 233, a sign of male labor migration. 3) 450,000 ÷ 1,000,000 = 0.45 = 45%, typical of an expansive pyramid.'
      }
    },
    {
      id: 'hgpopula5-plan',
      type: 'text' as const,
      content: `
## Using Pyramids to Plan

Because each cohort moves up one bar every five years, a pyramid is a forecast.

| A large cohort that is now... | Will need in 5 to 20 years |
|---|---|
| Ages 0–9 | Classroom space, then jobs and housing |
| Ages 20–34 | Family housing, child care, maternity services |
| Ages 55–69 | Pensions, health care, assisted living |

### Worked Forecast: Japan vs. Niger
- **Japan:** the baby-boom bulge is moving into its late 70s and 80s. Expect rising demand for elder care and pensions, and a shrinking labor force paying into them. Schools are already closing or merging in rural areas.
- **Niger:** each year a larger cohort reaches school age and then working age. Expect pressure to build schools and create jobs; if jobs keep pace, the large working-age population could raise output (a "demographic dividend").

**Limitation of pyramids:** they show a single moment and a whole country. They do not show migration that is about to happen, and a national pyramid can hide very different shapes in different regions (Akita versus Tokyo in Japan, from the Spatial Concepts topic).

> ⚠️ **Common error:** a wide base does **not** by itself mean a high death rate. It means many births. A pyramid that narrows sharply at every step suggests high mortality as well, but you should state that as a second inference.
`
    },
    {
      id: 'hgpopula5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Pyramid** 🔍

Choose the country or cause that best fits each description.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A very wide base; about half the population under 15: ___',
            options: ['Niger', 'Japan', 'United Arab Emirates', 'Russia']
          },
          {
            label: 'A large male bulge at ages 25–44 with a much smaller female side: ___',
            options: ['Niger', 'Japan', 'United Arab Emirates', 'Russia']
          },
          {
            label: 'Young cohorts skewed toward boys from birth onward suggest ___',
            options: ['sex-selective births', 'labor migration', 'war deaths', 'longer female lives']
          },
          {
            label: 'The oldest cohorts are much larger on the female side, mainly because of ___',
            options: ['sex-selective births', 'labor migration', 'a baby boom', 'longer female lives']
          }
        ],
        correctAnswers: ['Niger', 'United Arab Emirates', 'sex-selective births', 'longer female lives'],
        hint1: 'The world\'s highest fertility produces the widest base.',
        hint2: 'Male migrant workers enter at working ages.',
        hint3: 'The imbalance starts at birth, not in adulthood.',
        explanation: 'Niger has the wide base of very high fertility. The UAE\'s male working-age bulge comes from labor migration. A male skew from birth points to sex-selective births. Women\'s longer life expectancy makes the oldest cohorts female-heavy.'
      }
    },
    {
      id: 'hgpopula5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which explanation best accounts for Qatar\'s population pyramid, which has far more men than women aged 25 to 44?',
            options: [
              'Large numbers of male workers migrating in for jobs',
              'A much higher birth rate for boys than for girls',
              'Women living much shorter lives than men',
              'Many working-age women emigrating abroad'
            ],
            correctAnswer: 0,
            explanation: 'The imbalance is concentrated in the working ages, which points to male labor migration for construction and service jobs. A skewed sex ratio at birth would show up in the young cohorts, and women generally live longer than men.'
          },
          {
            question: 'Japan\'s baby-boom cohort is moving into its late 70s and 80s. Which planning need is most likely to grow?',
            options: [
              'Elder care',
              'New elementary schools',
              'Maternity wards',
              'Starter apartments'
            ],
            correctAnswer: 0,
            explanation: 'As a large cohort reaches old age, demand for elder care, health care and pensions rises. Schools, maternity wards and starter housing serve young cohorts, which are small in Japan.'
          },
          {
            question: 'What is one limitation of using a national population pyramid to plan services?',
            options: [
              'It hides regional differences inside the country',
              'It cannot show the sex of the population at all',
              'It shows only people who were born in the country',
              'It cannot be used to forecast future age groups'
            ],
            correctAnswer: 0,
            explanation: 'A national pyramid averages all regions, so an aging rural area and a young city look the same. Pyramids do show sex, include immigrants, and are routinely used for forecasting as cohorts move up.'
          }
        ]
      }
    }
  ]
}
