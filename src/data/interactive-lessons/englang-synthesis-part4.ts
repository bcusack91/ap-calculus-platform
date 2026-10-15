export const englangSynthesisPart4Data = {
  topicSlug: 'englang-synthesis',
  sections: [
    {
      id: 'englangs4-intro',
      type: 'text' as const,
      content: `
# 🧷 Synthesis Writing

**Part 4 of 7 — Visual and Quantitative Sources: Reading Data Without Overclaiming**

---

| Section |
|---------|
| Reading a Table in Five Steps |
| What the Data Can and Cannot Support |
| Numbers Inside Prose Sources |
| The Overclaiming Ladder |
| Writing an Accurate Data Sentence |

> 🔑 **Key Concept:** Every synthesis set includes at least one visual source: a table, chart, graph, map, photograph, or cartoon. Students often skip it or use it badly, either restating every number or claiming the data proves more than it measures. A data source is evidence like any other: it supports some claims and not others. Your job is to say **what it shows, how strongly,** and **what it leaves out** (Skills 3.A and 4.A).
`
    },
    {
      id: 'englangs4-five-steps',
      type: 'text' as const,
      content: `
## Reading a Table in Five Steps

Here again is Practice Source E. *It was written for this lesson; the city and all figures are invented.*

**Park Access, Tree Cover, and Summer Heat in Four Neighborhoods of a Fictional City**

| Neighborhood | Median household income | Residents within a 10-minute walk of a park | Tree canopy cover | Surface temperature, one July afternoon |
|---|---|---|---|---|
| Northgate | \\$112,000 | 94% | 38% | 91°F |
| Riverside | \\$78,000 | 81% | 27% | 95°F |
| Mill District | \\$46,000 | 52% | 12% | 103°F |
| Eastport | \\$39,000 | 61% | 9% | 106°F |

*Note: Surface temperatures were measured by satellite on a single afternoon.*

| Step | What to do | Applied to Source E |
|---|---|---|
| **1. Title** | Name the topic and scope | Four neighborhoods of one city; three measures beside income |
| **2. Units** | Know what each number counts | Dollars; percent of **residents**; percent of **land under trees**; degrees of **surface** (not air) temperature |
| **3. Notes and source line** | Find how and when the data was gathered | One satellite reading on one afternoon |
| **4. Pattern** | State the main trend in one sentence | As income falls, park access and tree cover generally fall and surface heat rises |
| **5. Exception** | Find the row that breaks the pattern | Eastport has **more** park access than the Mill District (61% vs. 52%) yet **less** tree cover and **hotter** surfaces |

Step 5 is where the best synthesis comes from. The Eastport row shows that "near a park" and "shaded by trees" are different measurements. A neighborhood can be close to a paved playground and still bake.
`
    },
    {
      id: 'englangs4-support',
      type: 'text' as const,
      content: `
## What the Data Can and Cannot Support

| Claim a student might make | Supported by Source E? | Why |
|---|---|---|
| In this city, the poorer neighborhoods have less park access. | **Yes** | The two lowest-income rows have the two lowest access figures |
| In this city, neighborhoods with less tree cover had hotter surfaces that afternoon. | **Yes** | Canopy and temperature move in opposite directions in every row |
| Building a park in the Mill District would cool it down. | **No** | The table shows a pattern across neighborhoods, not the effect of adding a park anywhere |
| Low-income residents do not want parks. | **No** | The table measures distance, not use or preference |
| Surface heat in Eastport is dangerous to residents' health. | **No** | Surface temperature is not air temperature, and the table reports no health data |
| This pattern holds across American cities. | **No** | One fictional city, four neighborhoods |

### Three Questions to Ask Any Data Source

1. **What exactly was measured?** "Within a 10-minute walk of a park" says nothing about the park's size, trees, or condition.
2. **When, where, and how many?** One afternoon, one city, four neighborhoods.
3. **Pattern or cause?** Data that shows two things rising together (correlation) does not show that one causes the other. Income, trees, parks, and heat may all trace back to older decisions about where to build housing and industry.
`
    },
    {
      id: 'englangs4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which claim does Practice Source E support most directly?',
            options: [
              'Building a park in the Mill District would lower its summer heat.',
              'Eastport residents visit parks less often than Northgate residents.',
              'Lower incomes cause a neighborhood\'s tree canopy to shrink over time.',
              'In this city, poorer areas have less park access and hotter surfaces.'
            ],
            correctAnswer: 3,
            explanation: 'The table directly reports income, access, and surface temperature for each neighborhood, and the lower-income rows score worse on both. It says nothing about the effect of a new park, about how often anyone visits, or about what causes canopy to change.'
          },
          {
            question: 'Eastport has more park access than the Mill District but hotter surfaces. What does this most reasonably suggest?',
            options: [
              'Being near a park and being shaded by trees are different things.',
              'The satellite reading for Eastport was probably a faulty measurement.',
              'Parks tend to raise the surface temperatures of nearby blocks.',
              'Income has no real relationship to any measure in the table.'
            ],
            correctAnswer: 0,
            explanation: 'The exception shows that the access measure and the canopy measure capture different things, and canopy tracks heat more closely. Nothing suggests a faulty reading or that parks add heat, and income clearly follows the other measures.'
          }
        ]
      }
    },
    {
      id: 'englangs4-prose-numbers',
      type: 'text' as const,
      content: `
## Numbers Inside Prose Sources

Quantitative evidence is not limited to the visual source. Prose sources often carry numbers, and they need the same scrutiny.

### Riis's Forty-Eight Boys (Source B)

> A gentleman once catechized a ragged class in a down-town public school on this point, and recorded the result: Out of forty-eight boys twenty had never seen the Brooklyn Bridge that was scarcely five minutes' walk away, three only had been in Central Park, fifteen had known the joy of a ride in a horse-car.

| Question | Answer |
|---|---|
| What was measured? | What boys in one class said they had seen or done |
| Who measured it? | An unnamed "gentleman," reported secondhand by Riis |
| How many? | 48 boys, one school |
| What it shows | In this class, only 3 of 48 (about 6%) had been to Central Park |
| What it does not show | How many poor children citywide had been, or why the others had not gone |

### Addams's Court Figures (Source C, a different chapter)

> ...during the year which ended last December, more than twenty-five thousand young people under the age of twenty-five passed through the Juvenile and Municipal Courts of Chicago—approximately one out of every eighty of the entire population, or one out of every fifty-two of those under twenty-five years of age.

| Question | Answer |
|---|---|
| What was measured? | Young people passing through two courts in one year |
| What it shows | The **scale** of youth contact with the courts in Chicago that year |
| What it does not show | That a lack of parks **caused** those cases, or how many were convicted |

Addams uses the figure to argue for "more small parks, municipal gymnasiums, and schoolrooms open for recreation." That link is her argument, not something the number proves. A writer can cite the number for scale and Addams for the argument, but should not merge the two.

### Olmsted's Crowds (Source A)

Olmsted writes that he "studiously watched" the New York park promenades for several years and has "several times seen fifty thousand people" taking part. That is an eyewitness estimate by the park's own designer. It supports a claim about **popularity**; it says nothing about **who** came or from how far away.

## Percent vs. Percentage Points

When you compare two percentages, subtract to get the difference in **percentage points**.

- Northgate access 94%, Mill District access 52%: a gap of **42 percentage points**.
- Saying "42 percent less" would be wrong; 52 is about 45 percent less than 94.
`
    },
    {
      id: 'englangs4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️ (numbers only)

1) Using Source E, how many degrees hotter was the Eastport surface than the Northgate surface? _______

2) Using Source E, the gap in park access between Riverside (81%) and the Mill District (52%) is how many percentage points? _______

3) In Riis's anecdote, 3 of 48 boys had been to Central Park. To the nearest whole percent, what percent is that? _______
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15', '29', '6'],
        hint1: 'Subtract 91 from 106.',
        hint2: 'Subtract the smaller percentage from the larger.',
        hint3: 'Divide 3 by 48, multiply by 100, and round.',
        explanation: '106 − 91 = 15 degrees; 81 − 52 = 29 percentage points; 3 ÷ 48 = 0.0625, or about 6 percent.'
      }
    },
    {
      id: 'englangs4-ladder',
      type: 'text' as const,
      content: `
## The Overclaiming Ladder

The verb you choose for a data source is a claim about its strength. Match the verb to the evidence.

| Strength | Verbs | Fits |
|---|---|---|
| **Weakest** | "is consistent with," "fits," "does not rule out" | A single observation or anecdote |
| **Moderate** | "suggests," "indicates," "points to" | A pattern in limited data, such as four neighborhoods on one afternoon |
| **Strong** | "shows," "documents," "reports" | What the data directly measured |
| **Strongest** | "proves," "establishes," "demonstrates" | Almost never appropriate for a single source on the exam |

| Overclaim | Calibrated version |
|---|---|
| Source E **proves** parks cool neighborhoods. | Source E **suggests** that tree cover, more than park access, tracks surface heat. |
| Riis **shows** poor children never used parks. | Riis **reports** that in one downtown class only three of forty-eight boys had been to Central Park. |
| Addams **proves** that playgrounds prevent crime. | Addams **argues** that small parks and recreation could protect young people, citing the scale of youth court cases. |

## Writing an Accurate Data Sentence

A strong data sentence does three things: **cites the specific figure, names its scope, and connects it to your claim.**

> **Weak:** Source E has lots of numbers about parks and heat, which shows that parks are important (Source E).
>
> **Strong:** In the fictional city of Source E, the Mill District has park access for just 52 percent of residents, 42 percentage points below wealthy Northgate, a gap that echoes Riis's report that only three of forty-eight downtown boys had been to Central Park (Source B).

The strong sentence picks one comparison, gives exact figures, and makes the data **interact** with another source. That last move is what turns a data citation into synthesis.

> 🔑 **AP Connection:** On the exam, a visual source is a full source, and it counts toward your three. It earns the most when you use one precise detail from it to corroborate, qualify, or complicate a prose source, rather than summarizing the whole chart.
`
    },
    {
      id: 'englangs4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Riis\'s forty-eight boys is most accurate?',
            options: [
              'They prove that most New York children had never been to Central Park.',
              'They report one class\'s answers, not what all poor children did.',
              'They show the Brooklyn Bridge was harder to reach than Central Park.',
              'They come from a citywide survey of public schools that Riis conducted.'
            ],
            correctAnswer: 1,
            explanation: 'The figures describe one downtown class, recorded secondhand, so they cannot stand for all children. Riis says the bridge was "scarcely five minutes\' walk away," and the survey was one gentleman\'s questioning of one class.'
          },
          {
            question: 'Which sentence uses Addams\'s court figures most accurately?',
            options: [
              'Addams proves that a lack of parks caused one in eighty Chicagoans to commit a crime.',
              'Addams shows that one in eighty young Chicagoans was convicted in court that year.',
              'Addams reports that one in fifty-two Chicagoans under twenty-five passed through the courts that year.',
              'Addams notes that over twenty-five thousand children under twelve stood trial in court in one year.'
            ],
            correctAnswer: 2,
            explanation: 'The figure counts young people who passed through two courts, and one in fifty-two is the ratio for those under twenty-five. The other versions add causation, turn court contact into conviction, mix up the two ratios, or change the age group.'
          },
          {
            question: 'Which verb phrase best completes this sentence: "Source E\'s four neighborhoods ___ that tree cover tracks surface heat more closely than park access does"?',
            options: [
              'prove beyond any doubt',
              'tentatively suggest',
              'establish as settled fact',
              'demonstrate for every city'
            ],
            correctAnswer: 1,
            explanation: 'Four neighborhoods measured on one afternoon form a limited pattern, so "tentatively suggest" matches the strength of the evidence. The other choices claim certainty or a reach far beyond one fictional city.'
          }
        ]
      }
    }
  ]
};
