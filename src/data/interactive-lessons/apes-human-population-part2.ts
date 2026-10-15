export const apesHumanPopulationPart2Data = {
  topicSlug: 'apes-human-population',
  sections: [
    {
      id: 'apeshuma2-intro',
      type: 'text' as const,
      content: `
# 👥 Human Population Dynamics

**Part 2 of 7 — Reading Age Structure Diagrams**

---

| Section |
|---------|
| 📖 Anatomy of an Age Structure Diagram |
| Dependency Ratio and Population Momentum |
| Following a Bulge: Baby Booms Over Time |

> 🔑 **Key Concept:** Part 1 matched three diagram shapes to growth patterns. This part teaches you to read the numbers behind the shape: what share of people sit in each cohort, how many dependents each worker supports, and why a young population keeps growing for decades even after families get smaller.
      `
    },
    {
      id: 'apeshuma2-anatomy',
      type: 'text' as const,
      content: `
## 📖 Anatomy of an Age Structure Diagram

An **age structure diagram** (population pyramid) is a pair of horizontal bar graphs placed back to back.

| Feature | Convention |
|---|---|
| Vertical axis | Age groups, youngest at the bottom, usually in 5-year bands |
| Horizontal axis | Number of people (millions) or percent of the total population |
| Left side | Males |
| Right side | Females |
| Bar length | Size of that age group for that sex |

### The three APES cohorts

| Cohort | Ages | Why it matters |
|---|---|---|
| **Pre-reproductive** | 0–14 | Future parents; sets the growth that is already "built in" |
| **Reproductive** | 15–44 | Produces nearly all births right now |
| **Post-reproductive** | 45 and older | No longer adds births; drives health-care and pension demand |

Read the **base relative to the middle**. A base wider than the reproductive band means more future parents than current parents, so births will rise. A base about equal to the middle means a stable population. A base narrower than the middle means fewer future parents, so births will fall unless immigration fills the gap.

### Worked Example 1: Cohort Percentages

Country A (illustrative data), population in millions:

| Age group | Males | Females | Total |
|---|---|---|---|
| 0–14 | 9.0 | 8.6 | 17.6 |
| 15–44 | 10.5 | 10.3 | 20.8 |
| 45–64 | 4.2 | 4.4 | 8.6 |
| 65+ | 1.3 | 1.7 | 3.0 |
| **Total** | | | **50.0** |

**Step 1. Divide each cohort by the total and multiply by 100.**

$$\\text{Pre-reproductive} = \\frac{17.6}{50.0} \\times 100 = 35.2\\%$$

$$\\text{Reproductive} = \\frac{20.8}{50.0} \\times 100 = 41.6\\%$$

$$\\text{Post-reproductive} = \\frac{8.6 + 3.0}{50.0} \\times 100 = 23.2\\%$$

**Step 2. Check that the shares add to 100%.** 35.2 + 41.6 + 23.2 = 100.0.

**Step 3. Interpret.** More than a third of the people are under 15, and the 0–14 band is almost as large as the 30-year reproductive band. Country A has an expansive (wide-base) shape and will keep growing.

Notice also that the 65+ row has more females (1.7) than males (1.3). Women outlive men in nearly every country, so the top of most pyramids leans to the right.
      `
    },
    {
      id: 'apeshuma2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a country\'s age structure diagram, the 0–14 bars are much longer than the 15–44 bars above them. Which conclusion is best supported?',
            options: [
              'Births will rise as the large group of children reaches adulthood',
              'Deaths among working adults are rising faster than births',
              'Most of the population is past its reproductive years',
              'The population has reached zero growth and will stay stable'
            ],
            correctAnswer: 0,
            explanation: 'A base larger than the reproductive band means more future parents than current parents, so births and population will keep rising. A stable or aging population would show a base about equal to or narrower than the middle.'
          },
          {
            question: 'Country A (illustrative data) has 50.0 million people, with 8.6 million aged 45–64 and 3.0 million aged 65 and older. What percent of the population is post-reproductive?',
            options: [
              '23.2%',
              '17.2%',
              '6.0%',
              '11.6%'
            ],
            correctAnswer: 0,
            explanation: 'Post-reproductive means 45 and older, so add both groups: 8.6 + 3.0 = 11.6 million, and 11.6 ÷ 50.0 × 100 = 23.2%. The value 11.6 is the count in millions, not the percent, and 6.0% counts only the 65+ group.'
          },
          {
            question: 'Near the top of most age structure diagrams, the right-hand bars are longer than the left-hand bars. What does this show?',
            options: [
              'Female births rose sharply 70 years ago',
              'Fewer boys than girls are born each year',
              'Women outlive men on average',
              'Men tend to emigrate after they retire'
            ],
            correctAnswer: 2,
            explanation: 'Females are drawn on the right, and in nearly every country women have a longer life expectancy, so older female bars are longer. Slightly more boys than girls are born, which would affect the base, not the top.'
          }
        ]
      }
    },
    {
      id: 'apeshuma2-dependency',
      type: 'text' as const,
      content: `
## Dependency Ratio and Population Momentum

### The dependency ratio

Children and older adults mostly depend on the earnings and taxes of working-age people. Demographers use a slightly different split from the APES cohorts here: working age is **15–64**.

$$\\text{Dependency ratio} = \\frac{(\\text{ages } 0\\text{–}14) + (\\text{ages } 65+)}{\\text{ages } 15\\text{–}64} \\times 100$$

The answer is the number of dependents per 100 working-age people.

### Worked Example 2: Two Countries, Two Kinds of Dependence

Both countries have 50.0 million people (illustrative data, millions).

| Group | Country A (young) | Country B (aging) |
|---|---|---|
| 0–14 | 17.6 | 6.5 |
| 15–64 | 20.8 + 8.6 = 29.4 | 31.0 |
| 65+ | 3.0 | 12.5 |

**Country A:** $\\frac{17.6 + 3.0}{29.4} \\times 100 = \\frac{20.6}{29.4} \\times 100 \\approx 70$

**Country B:** $\\frac{6.5 + 12.5}{31.0} \\times 100 = \\frac{19.0}{31.0} \\times 100 \\approx 61$

The totals are similar, but the burden is not. Split each ratio into its two parts:

| Part | Country A | Country B |
|---|---|---|
| Youth dependency (0–14 per 100 workers) | about 60 | about 21 |
| Old-age dependency (65+ per 100 workers) | about 10 | about 40 |
| What the country must fund | Schools, vaccinations, future jobs | Pensions, elder care, health care |

### Population momentum

Suppose Country A's families drop to replacement-level fertility (about 2.1 children per woman) tomorrow. Its population still grows for decades. Why? The 17.6 million children have not had their own children yet. As this large cohort moves into the 15–44 band, it produces more births than the smaller cohort ahead of it, even at two children per couple. Growth that continues because of a young age structure is called **population momentum**.

Momentum works in reverse, too. A country with a narrow base can keep shrinking for decades even if fertility rises back to replacement, because there are too few women of reproductive age.

> 🔑 **AP Connection:** If an FRQ asks why a country with replacement-level fertility is still growing, the answer is momentum: name the large pre-reproductive cohort and explain that it is about to enter its reproductive years.
      `
    },
    {
      id: 'apeshuma2-calc',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Country C (illustrative data) has 9 million people aged 0–14, 30 million aged 15–64 and 6 million aged 65 and older. Enter numbers only.

1) What percent of Country C's population is aged 0–14?

2) What is Country C's dependency ratio (dependents per 100 working-age people)?

3) Continued population growth after fertility falls to replacement level, caused by a large young cohort, is called population _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '50', 'momentum'],
        hint1: 'First find the total: 9 + 30 + 6. Then divide the 0–14 group by it.',
        hint2: 'Add the two dependent groups, divide by the 15–64 group, then multiply by 100.',
        hint3: 'A moving object keeps going after the push stops. The demographic term borrows the physics word.',
        explanation: '1) 9 ÷ 45 × 100 = 20%. 2) (9 + 6) ÷ 30 × 100 = 50 dependents per 100 workers. 3) Population momentum: the large young cohort keeps births high as it enters its reproductive years.'
      }
    },
    {
      id: 'apeshuma2-boom',
      type: 'text' as const,
      content: `
## Following a Bulge: Baby Booms Over Time

A diagram is a snapshot. Any unusually large or small cohort moves **up one age band every five years**, so you can predict a country's future by sliding the bulge upward.

### Worked Example 3: The U.S. Baby Boom

After World War II, U.S. births surged. People born from **1946 to 1964** are called baby boomers.

| Year | Boomers' ages | Where the bulge sits | What the country needed |
|---|---|---|---|
| 1970 | 6–24 | Base and lower middle | Schools, colleges, entry-level jobs |
| 1990 | 26–44 | Reproductive band | Housing, child care; an "echo" of extra births |
| 2010 | 46–64 | Upper middle | Peak earning years, savings |
| 2030 | 66–84 | Top | Social Security, Medicare, elder care |

**Step 1.** Find the bulge's ages in the current diagram.
**Step 2.** Add the number of years into the future to both ends of the age range.
**Step 3.** Ask which cohort the bulge is in and what that cohort needs or does.

Because the boomers had children while they were in the reproductive band, a smaller second bulge (the "echo boom") appears about 25 to 30 years behind the first.

### Predicting growth from shape

| Base compared with the 15–44 band | Prediction (without migration) | Typical setting |
|---|---|---|
| Much wider | Rapid growth, strong momentum | Most of sub-Saharan Africa |
| About the same | Slow growth or stability | United States, France |
| Narrower | Decline after a lag; aging | Japan, Italy, South Korea |

Immigration can change these predictions. Most immigrants are young adults, so steady immigration widens the reproductive band and can keep a narrow-based country from shrinking.

> 🔑 **AP Connection:** "Describe one economic consequence" questions about a top-heavy diagram want a specific chain: a large 65+ cohort and a small working-age cohort mean fewer taxpayers per retiree, which strains pension and health-care systems.
      `
    },
    {
      id: 'apeshuma2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A country\'s total fertility rate has just fallen to 2.1, yet 42 percent of its people are under 15. What will its population most likely do over the next 30 years?',
            options: [
              'Keep growing as the large young cohort has children',
              'Stabilize at once because fertility is at replacement',
              'Begin to decline because families now have fewer children',
              'Rise and fall in a regular cycle every 15 years or so'
            ],
            correctAnswer: 0,
            explanation: 'This is population momentum: the large pre-reproductive cohort will soon enter the reproductive band, so total births stay high even at about two children per woman. Stabilization comes only after the age structure evens out, decades later.'
          },
          {
            question: 'A country\'s diagram shows a large bulge at ages 20–29 today. In 40 years, which need is most likely to grow fastest?',
            options: [
              'Pensions and elder care',
              'Primary school seats',
              'Maternity hospital beds',
              'Entry-level job openings'
            ],
            correctAnswer: 0,
            explanation: 'Slide the bulge up 40 years: the people now 20–29 will be 60–69, so retirement and elder-care needs grow. Schools, maternity care and entry-level jobs serve younger cohorts.'
          },
          {
            question: 'Country B (illustrative data) has 6.5 million people aged 0–14, 31.0 million aged 15–64 and 12.5 million aged 65 and older. Which statement correctly describes its dependents?',
            options: [
              'About 61 dependents per 100 workers, mostly older adults',
              'About 61 dependents per 100 workers, mostly children',
              'About 38 dependents per 100 workers, mostly older adults',
              'About 40 dependents per 100 workers, mostly children'
            ],
            correctAnswer: 0,
            explanation: 'The ratio is (6.5 + 12.5) ÷ 31.0 × 100 ≈ 61, and 12.5 million of the 19.0 million dependents are 65 or older. The value 40 is only the old-age part of the ratio.'
          }
        ]
      }
    },
    {
      id: 'apeshuma2-summary',
      type: 'text' as const,
      content: `
## Part 2 Summary

| Idea | Key fact |
|---|---|
| Layout | Ages up the side, youngest at the bottom; males left, females right |
| APES cohorts | Pre-reproductive 0–14, reproductive 15–44, post-reproductive 45+ |
| Cohort share | Cohort ÷ total × 100 |
| Dependency ratio | (0–14 + 65+) ÷ (15–64) × 100 = dependents per 100 workers |
| Base vs middle | Wider base = growth; equal = stable; narrower = decline after a lag |
| Momentum | A young population keeps growing after fertility reaches replacement |
| Bulges | Move up one 5-year band every 5 years; U.S. boomers born 1946–1964 |

**Next:** Part 3 looks at what sets the width of the base: total fertility rate, infant mortality and the social, economic and policy factors that drive them.
      `
    }
  ]
};
