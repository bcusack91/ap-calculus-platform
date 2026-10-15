export const apesPopulationEcologyPart6Data = {
  topicSlug: 'apes-population-ecology',
  sections: [
    {
      id: 'apespopu6-intro',
      type: 'text' as const,
      content: `
# 🐾 Population Ecology

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 What the Task Verbs Demand |
| Data Set 1: Deer on a Predator-Free Island |
| Data Set 2: Two Life Tables |
| Data Set 3: Managing After a Drought |

> 🔑 **Key Concept:** AP Environmental Science free-response questions give you data and ask you to identify, describe, explain, calculate and justify. Each verb asks for a different amount of writing. This part works through three population data sets with model answers, so you can see exactly what earns each point.
      `
    },
    {
      id: 'apespopu6-verbs',
      type: 'text' as const,
      content: `
## 📖 What the Task Verbs Demand

| Verb | What a full answer contains | Population example |
|---|---|---|
| **Identify** | A specific name or value; no explanation needed | "Logistic growth." |
| **Describe** | The relevant characteristics or pattern, in a sentence or two | "The population grew slowly, then rapidly, then leveled off near 1,800." |
| **Explain** | A cause, an effect and the link between them | "As density rose, each deer had less browse, so fewer fawns survived and growth slowed." |
| **Calculate** | The setup, the arithmetic and the answer with units | "(1,800 − 1,600) ÷ 1,600 × 100 = 12.5%" |
| **Justify** | Evidence or reasoning that supports a claim or solution | "Hunting keeps N below K, so browse is not overgrazed and K is not lowered." |
| **Propose a solution** | One specific, realistic action that addresses the stated problem | "Increase the number of hunting permits." |

Two habits earn points consistently:
1. **Use the data.** Quote a number from the table instead of saying "it went up."
2. **Answer one thing at a time.** If a prompt asks for one factor, the first one you give is the only one scored.
      `
    },
    {
      id: 'apespopu6-dataset1',
      type: 'text' as const,
      content: `
## Data Set 1: Deer on a Predator-Free Island

In 1990, 20 white-tailed deer were released on an island with abundant browse and no large predators. Biologists counted the herd every five years (illustrative data).

| Year | Deer |
|---|---|
| 1990 | 20 |
| 1995 | 80 |
| 2000 | 320 |
| 2005 | 1,100 |
| 2010 | 1,600 |
| 2015 | 1,750 |
| 2020 | 1,800 |

### Prompts and model answers

**(a) Identify the type of growth the population showed from 1990 to 2000.**
Exponential growth. *(The herd quadrupled in each five-year interval: 20 → 80 → 320.)*

**(b) Calculate the doubling time of the population from 1990 to 2000. Show your work.**
$\\frac{320}{20} = 16 = 2^{4}$, so the herd doubled 4 times in 10 years.
$$\\text{Doubling time} = \\frac{10\\ \\text{years}}{4} = 2.5\\ \\text{years}$$

**(c) Using the data, estimate the carrying capacity of the island for deer.**
About 1,800 deer, the level at which growth nearly stopped (only 50 added from 2015 to 2020).

**(d) Identify the five-year interval in which the population added the most individuals, and explain why growth was fastest then.**
2000–2005, when the herd added 780 deer. Logistic growth is fastest near K/2, about 900 deer, which the herd passed during this interval; there were many breeding adults and browse was still plentiful.

**(e) Explain one density-dependent factor that could account for the slowing growth after 2005.**
As the herd grew, competition for browse increased, so each doe had less food. Poorly fed does produce fewer fawns and fewer fawns survive the winter, which lowers the birth rate and raises the death rate until growth approaches zero.

**(f) Calculate the percent change in the population from 2010 to 2020.**
$$\\frac{1{,}800 - 1{,}600}{1{,}600} \\times 100 = 12.5\\%$$
      `
    },
    {
      id: 'apespopu6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

Use Data Set 1.
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes the deer population from 1990 to 2000?',
            options: [
              'It grew logistically, leveling off just below its carrying capacity',
              'It grew exponentially, quadrupling every five years',
              'It grew linearly, adding about the same number of deer each year',
              'It stayed close to carrying capacity for the whole decade'
            ],
            correctAnswer: 1,
            explanation: 'The herd went from 20 to 80 to 320, multiplying by four in each interval, which is exponential growth. Linear growth would add a constant number, and the herd was far below its eventual level of about 1,800.'
          },
          {
            question: 'Between which survey years did the deer population increase by the largest number of individuals?',
            options: [
              '1995 to 2000',
              '2005 to 2010',
              '2000 to 2005',
              '2010 to 2015'
            ],
            correctAnswer: 2,
            explanation: 'The herd grew by 780 deer from 2000 to 2005, compared with 240 before and 500 after. That interval includes K/2, about 900 deer, where logistic growth is fastest.'
          },
          {
            question: 'Which explanation best accounts for the slowdown in growth after 2005?',
            options: [
              'Births fell only after the deer ate every plant on the island',
              'Predators that colonized the island removed most of the young deer',
              'Deer stopped reproducing once the island reached its carrying capacity',
              'Competition for limited browse lowered fawn survival as the herd neared K'
            ],
            correctAnswer: 3,
            explanation: 'Rising density meant less browse per deer, which lowered fawn survival and slowed growth gradually, as the logistic model predicts. Growth slowed well before food ran out entirely, the island had no large predators, and reproduction continues at K.'
          }
        ]
      }
    },
    {
      id: 'apespopu6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use Data Set 1. Enter numbers only, without commas or percent signs.

1) What was the doubling time of the herd from 1990 to 2000, in years?

2) Using the rule of 70 and your doubling time, what was the herd's approximate average growth rate, in percent per year?

3) What was the percent change in the herd from 2010 to 2020?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.5', '28', '12.5'],
        hint1: 'Count how many doublings take 20 to 320, then divide 10 years by that number.',
        hint2: 'Rearrange the rule of 70: growth rate ≈ 70 ÷ doubling time.',
        hint3: 'Subtract the 2010 count from the 2020 count, divide by the 2010 count, and multiply by 100.',
        explanation: '1) 20 → 40 → 80 → 160 → 320 is 4 doublings in 10 years, so 2.5 years each. 2) 70 ÷ 2.5 = 28 percent per year. 3) (1,800 − 1,600) ÷ 1,600 × 100 = 12.5 percent.'
      }
    },
    {
      id: 'apespopu6-dataset2',
      type: 'text' as const,
      content: `
## Data Set 2: Two Life Tables

Researchers followed a cohort of 1,000 newborns of two animal species (illustrative data).

| Age (% of max lifespan) | Species X survivors | Species Y survivors |
|---|---|---|
| 0 | 1,000 | 1,000 |
| 10 | 10 | 990 |
| 25 | 6 | 975 |
| 50 | 4 | 950 |
| 75 | 2 | 800 |
| 100 | 1 | 1 |

**(a) Identify the survivorship curve type for each species.**
Species X: Type III. Species Y: Type I.

**(b) Calculate the mortality rate of species X during the first 10% of its lifespan.**
$$\\frac{1{,}000 - 10}{1{,}000} \\times 100 = 99\\%$$

**(c) Describe the reproductive strategy species X most likely has, and explain how it relates to the curve.**
Species X is most likely r-selected: it produces many small offspring and provides little or no parental care. Because the young are unprotected, nearly all of them die early, which produces the steep early drop of a Type III curve.

**(d) A severe storm kills half of the adults of both species. Explain which species will most likely take longer to return to its former size.**
Species Y. A Type I curve suggests a K-selected species with few offspring, late maturity and heavy parental care, so its biotic potential is low and lost adults are replaced slowly. Species X produces large numbers of young each season and can rebuild quickly.

## Data Set 3: Managing After a Drought

The island from Data Set 1 suffers a three-year drought that reduces the browse supply by about one third, while the herd remains near 1,800 deer.

**(a) Explain how the drought affects the carrying capacity of the island.**
Browse is the deer's limiting resource. With about one third less browse, the island can feed only about two thirds as many deer, so K falls to roughly 1,200. The herd of 1,800 is now in overshoot.

**(b) Propose one management action to prevent a dieback, and justify it.**
Increase the number of hunting permits to reduce the herd toward the new, lower K. Removing deer before they overgraze the shrubs protects the browse supply, so carrying capacity is not lowered further, as happened to the reindeer of St. Matthew Island.

**(c) Describe one drawback of the proposed action.**
Hunting must be adjusted every year as rainfall changes K; if the drought ends and permits are not reduced, the herd could be pushed lower than necessary.
      `
    },
    {
      id: 'apespopu6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

Use Data Sets 2 and 3.
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about species X and species Y is supported by the life-table data?',
            options: [
              'Species X is Type I and species Y is Type III',
              'Species X is Type II and species Y is Type I',
              'Species X is Type III and species Y is Type II',
              'Species X is Type III and species Y is Type I'
            ],
            correctAnswer: 3,
            explanation: 'Species X loses 99 percent of its cohort in the first tenth of its lifespan, a Type III pattern, while species Y keeps 95 percent alive until midlife, a Type I pattern. A Type II curve would show a steady percentage lost in every interval.'
          },
          {
            question: 'A storm kills half of the adults of both species. Which species will most likely take longer to return to its former size?',
            options: [
              'Species X, since nearly all of its young die early in life',
              'Species Y, since it produces few late-maturing young',
              'Species X, since its adults lay most of the eggs each year',
              'Species Y, since its young face the higher early mortality'
            ],
            correctAnswer: 1,
            explanation: 'Species Y has the Type I, K-selected profile of few young and late maturity, so it replaces lost adults slowly. Species X produces many young each season, and it is species X, not species Y, that suffers high early mortality.'
          },
          {
            question: 'A drought cuts browse on the island by about one third while the herd stays near 1,800 deer. Which management proposal is best justified?',
            options: [
              'Add salt licks so deer can gain more nutrients from the remaining forage',
              'Issue more hunting permits to keep the herd below the new carrying capacity',
              'Ban all hunting so the herd can rebuild to its earlier size more quickly',
              'Introduce a second browsing species to spread grazing pressure evenly'
            ],
            correctAnswer: 1,
            explanation: 'Reducing the herd toward the drought-lowered K prevents overgrazing and a dieback, and protects the browse that sets future carrying capacity. Salt licks add no food, a hunting ban deepens the overshoot, and another browser adds grazing pressure.'
          }
        ]
      }
    },
    {
      id: 'apespopu6-summary',
      type: 'text' as const,
      content: `
## Part 6 Summary

| FRQ skill | What to remember |
|---|---|
| Identify the model | Constant multiplying factor = exponential; leveling off = logistic |
| Estimate K | The plateau value where growth nearly stops |
| Fastest growth | The interval that contains K/2 |
| Doubling time | Count doublings, then divide the time span by that count |
| Survivorship | Calculate mortality per interval before naming the type |
| Explain regulation | Density → resource per individual → births and deaths → growth rate |
| Propose and justify | One specific action, linked to K and the limiting resource |

**Next:** Part 7 pulls all seven parts together in one review table, a calculations recap and a final set of mixed questions.
      `
    }
  ]
};
