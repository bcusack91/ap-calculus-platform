export const bioEcologyPart6Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'bio-ecology-ecosystems-p6-s1-intro',
      type: 'text' as const,
      content: `
## Analyzing Ecosystem Data

**Part 6 of 7 — Analyzing Ecosystem Data**

AP Biology questions on ecosystems are usually built around a graph, a table or an experiment. This part practices the three kinds of data you will see most often for this topic: the spread of an invader over time, diversity and stability measurements, and field experiments that test a disruption. The values in this part are illustrative, chosen to show real patterns clearly.

### Data set 1: the spread of an invader

A state agency records the number of lakes with confirmed invasive mussels each year.

| Year | Lakes with mussels |
|---|---|
| 1990 | 2 |
| 1992 | 4 |
| 1994 | 8 |
| 1996 | 16 |
| 1998 | 30 |
| 2000 | 52 |
| 2002 | 70 |
| 2004 | 78 |
| 2006 | 80 |

**Reading the pattern.** Plotted against time, the count traces an S-shaped curve with three phases:

1. **Slow start (1990–1994).** Only a few lakes are invaded, so few boats carry mussels to new lakes.
2. **Rapid spread (1994–2002).** The count doubles about every two years at first. Each invaded lake becomes a new source, just as each individual adds to exponential population growth.
3. **Leveling off (after 2002).** Nearly every lake within reach of boat traffic is already invaded, so few new lakes remain to colonize.

This is the same logic as logistic population growth, but the "individuals" are invaded lakes and the ceiling is the number of reachable lakes.

> **Real-world twist:** in Australia, the cane toad invasion front *sped up* over the decades. Toads at the leading edge tend to be the fastest dispersers, and because they breed with each other there, the front became dominated by fast-moving toads. A spread rate is not always constant.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p6-s2-input',
      type: 'input-boxes' as const,
      content: `
### Practice — Read the Spread Table

Use Data set 1 above.

1) Between 1990 and 1996, about how many years did it take for the number of invaded lakes to double?

2) What was the average number of newly invaded lakes per year between 1998 and 2002?
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['2', '10'],
        hint1: 'Follow the count from 2 to 4 to 8 to 16. How many years separate each step?',
        hint2: 'Find the change in lakes from 1998 to 2002, then divide by the number of years.',
        hint3: 'The change is 70 minus 30, spread over 4 years.',
        explanation: 'The count doubled every 2 years (2, 4, 8, 16). From 1998 to 2002 it rose from 30 to 70, an increase of 40 lakes over 4 years, or 10 lakes per year.'
      }
    },
    {
      id: 'bio-ecology-ecosystems-p6-s3-stability',
      type: 'text' as const,
      content: `
### Data set 2: diversity and stability

Researchers grow grassland plots planted with 1, 4 or 16 species and measure aboveground biomass every year for ten years. To compare stability, they calculate the **coefficient of variation (CV)**:

$$CV = \\frac{\\text{standard deviation}}{\\text{mean}}$$

The CV expresses year-to-year variation as a fraction of the average. A **lower CV means more stable** biomass. Dividing by the mean matters because a plot with large biomass will usually swing by more grams than a small one even if, proportionally, it is just as steady.

| Species planted | Mean biomass (g) | Standard deviation (g) | CV |
|---|---|---|---|
| 1 | 300 | 120 | 120 ÷ 300 = 0.40 |
| 4 | 380 | 95 | 95 ÷ 380 = 0.25 |
| 16 | 460 | 69 | 69 ÷ 460 = 0.15 |

**Two findings in one table:**

- Mean biomass rises with richness, so diverse plots are more **productive**.
- The CV falls with richness, so diverse plots are more **stable** from year to year.

**Claim-evidence-reasoning:**

- **Claim:** greater plant diversity makes grassland biomass more stable over time.
- **Evidence:** the CV fell from 0.40 in single-species plots to 0.15 in 16-species plots.
- **Reasoning:** in richer plots, species respond differently to each year's weather, so declines in some are offset by gains in others (response diversity and the portfolio effect from part 2).

> **Watch the trap:** the standard deviation of the 16-species plots (69 g) is lower here, but even a higher standard deviation could be the more stable result if the mean were much larger. Compare CVs, not raw spreads.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p6-s4-mcq-data',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Spread and Stability Data
      `,
      exercise: {
        questions: [
          {
            question: 'In Data set 1, the number of invaded lakes doubled about every two years until the mid-1990s, then grew much more slowly after 2002. Which explanation best accounts for the slowdown?',
            options: [
              'The mussels evolved a lower reproductive rate',
              'Few uninvaded lakes remained within reach of boats',
              'Native predators quickly learned to eat the mussels',
              'Boaters stopped visiting all of the invaded lakes'
            ],
            correctAnswer: 1,
            explanation: 'The spread levels off because almost every reachable lake was already invaded, the same way logistic growth slows as a population nears its ceiling. Nothing in the data points to evolution, predation or a change in boating.'
          },
          {
            question: 'Over ten years, plot X had mean biomass 400 g with a standard deviation of 100 g, and plot Y had mean biomass 500 g with a standard deviation of 150 g. Which plot was more stable, and what is its coefficient of variation?',
            options: [
              'Plot Y, with a coefficient of variation of 0.20',
              'Plot X, with a coefficient of variation of 0.38',
              'Plot X, with a coefficient of variation of 0.25',
              'Plot Y, with a coefficient of variation of 0.30'
            ],
            correctAnswer: 2,
            explanation: 'Plot X has CV = 100 ÷ 400 = 0.25 and plot Y has CV = 150 ÷ 500 = 0.30, so plot X varied less relative to its mean and was more stable. The 0.20 value divides the wrong standard deviation by plot Y\'s mean.'
          },
          {
            question: 'Why do ecologists compare stability using the coefficient of variation rather than the standard deviation alone?',
            options: [
              'It removes the effect of drought from the data',
              'It counts the species present in each plot',
              'It expresses spread relative to the mean',
              'It is unaffected by the plots\' mean biomass'
            ],
            correctAnswer: 2,
            explanation: 'Dividing the standard deviation by the mean expresses variation as a fraction of the average, so plots with very different biomass can be compared fairly. The CV depends directly on the mean, and it does not remove weather effects or count species.'
          }
        ]
      }
    },
    {
      id: 'bio-ecology-ecosystems-p6-s5-baci',
      type: 'text' as const,
      content: `
### Data set 3: testing a disruption in the field

Ecosystems cannot be put in a test tube, so field ecologists use a **before-after-control-impact (BACI)** design. They measure a variable at a **treatment (impact) site** and a similar **control site**, both **before** and **after** the change.

**Example.** Invasive rats eat seabird eggs and chicks on islands. Managers remove rats from one island and leave a similar nearby island untreated. They count active seabird nests on both islands.

| Site | Nests before removal | Nests after removal | Change |
|---|---|---|---|
| Control island (rats remain) | 40 | 42 | +2 |
| Treatment island (rats removed) | 38 | 70 | +32 |

**Estimated effect of rat removal** = change at treatment − change at control = 32 − 2 = **30 nests**.

**Why each part of the design is needed:**

- **The control site** shows what would have happened anyway. If a good weather year had raised nest counts everywhere, the control would rise too, and that rise would be subtracted out.
- **The before data** show where each site started. The islands began at slightly different counts (40 and 38), so comparing only the after counts (70 versus 42) would mix the treatment effect with the initial difference.
- **Replication** (several treatment and control islands) shows the result was not a fluke of one pair of sites.

### FRQ practice: model answer

**Prompt:** *Identify the independent variable, and justify the use of the control island.*

- **Independent variable:** whether rats were removed from the island (removed versus not removed).
- **Justification:** the control island experiences the same regional weather, ocean food supply and seabird population trends as the treatment island, but keeps its rats. Any change shared by both islands is caused by those shared factors, so subtracting the control's change isolates the effect of rat removal.

> **Scoring tip:** "Identify" needs only the variable. "Justify" needs a reason tied to the specific experiment, not a general statement like "controls are important."
      `
    },
    {
      id: 'bio-ecology-ecosystems-p6-s6-mcq-final',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Field Experiments
      `,
      exercise: {
        questions: [
          {
            question: 'Why does a before-after-control-impact design include a control site that receives no treatment?',
            options: [
              'To make sure the treatment and control sites start with equal numbers',
              'To increase the number of seabirds counted at the treatment site',
              'To separate the treatment\'s effect from changes that happen everywhere, such as weather',
              'To show that the treatment works the same way at every possible site'
            ],
            correctAnswer: 2,
            explanation: 'The control site captures changes that would have happened without the treatment, such as a good breeding year, so they can be subtracted out. Starting differences are handled by the before measurements, not by the control.'
          },
          {
            question: 'At a control site, a native plant\'s cover went from 20% to 24% over three years. At a nearby site where an invasive vine was removed, cover went from 18% to 35%. What is the estimated effect of vine removal on native cover?',
            options: [
              '17 percentage points',
              '11 percentage points',
              '13 percentage points',
              '15 percentage points'
            ],
            correctAnswer: 2,
            explanation: 'The treatment site rose by 17 points and the control rose by 4, so the effect of removal is 17 − 4 = 13 percentage points. Reporting 17 ignores the change that happened even without removal, and 11 compares only the after values (35 − 24).'
          },
          {
            question: 'A student claims that removing rats caused the increase in seabird nests on the treatment island. Which additional evidence would most strengthen this claim?',
            options: [
              'A larger seabird count on the control island after the rat removal',
              'The same pattern on several other islands where rats were removed',
              'Photographs of seabirds nesting on the treatment island',
              'A record of how many rats were trapped during the removal'
            ],
            correctAnswer: 1,
            explanation: 'Seeing the same result at several replicate islands shows the effect is repeatable and not a quirk of one site. A bigger rise on the control island would weaken the claim, and photos or trapping records do not compare treated with untreated sites.'
          }
        ]
      }
    }
  ]
};
