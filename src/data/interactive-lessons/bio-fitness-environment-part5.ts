export const bioFitnessPart5Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'bio-fitness-environment-p5-s1-intro',
      type: 'text' as const,
      content: `
## Fitness and Environment: Analyzing Environment–Phenotype Data

**Part 5 of 7 — Analyzing Environment–Phenotype Data**

AP Biology tests this topic heavily through graphs and tables. This part teaches you to read **reaction-norm graphs**, interpret **common-garden** and **reciprocal-transplant** experiments, and do the calculations those questions require.

### Reading a reaction-norm graph

A reaction-norm graph puts an **environmental variable** on the x-axis (temperature, light, soil moisture) and a **phenotype** on the y-axis (height, seed number, body size). Each line shows one genotype. Three patterns cover almost every question:

| Pattern of lines | What it means | Plain-language reading |
|---|---|---|
| A **flat** (horizontal) line | That genotype shows **no plasticity** for this trait across this range | Phenotype does not depend on the environment |
| **Sloped, parallel** lines | Every genotype is plastic, and they differ by a constant amount | Genes and environment both matter, and they act **additively** (no interaction) |
| Lines with **different slopes** or lines that **cross** | **Genotype-by-environment interaction (G×E)** | The effect of the environment depends on the genotype, so the "best" genotype can change from one environment to another |

**Key reading habits**
- The **slope** of a line measures how plastic that genotype is.
- The **vertical gap** between lines at one x-value measures the genetic difference in that environment.
- When lines **cross**, ranking reverses. Ask which genotype has the higher fitness in each environment separately.
      `
    },
    {
      id: 'bio-fitness-environment-p5-s2-worked-reaction-norm',
      type: 'text' as const,
      content: `
### Worked example: three clones, three temperatures

A researcher grows cuttings of three clones of a grass at three temperatures and measures mean height (cm). Cuttings of one clone are genetically identical. (Hypothetical data.)

| Clone | 10 °C | 20 °C | 30 °C |
|---|---|---|---|
| X | 15 | 15 | 15 |
| Y | 10 | 20 | 30 |
| Z | 30 | 20 | 10 |

**Step 1: describe each reaction norm.**
- Clone X: same height at every temperature, so a **flat** line; no plasticity in height.
- Clone Y: height rises 10 cm for each 10 °C step, so a **positive slope** of 1 cm per °C.
- Clone Z: height falls 10 cm for each 10 °C step, so a **negative slope** of −1 cm per °C.

**Step 2: look for interaction.** Y and Z have opposite slopes, so their lines cross at 20 °C, where both are 20 cm. This is a strong **G×E interaction**.

**Step 3: ask what "the effect of temperature" is.** There is no single answer: warming makes Y taller, makes Z shorter and leaves X unchanged. A study that measured only clone Y would wrongly conclude that "warmth makes this grass taller."

**Step 4: connect to fitness.** If taller plants make more seeds, then Z has the highest fitness at 10 °C, Y and Z tie for highest at 20 °C (20 cm each, versus 15 cm for X), and Y has the highest fitness at 30 °C. A warming climate would favor alleles of clone Y.

> **Percent change practice:** clone Y grows from 10 cm to 30 cm, a change of $\\frac{30 - 10}{10} \\times 100 = 200\\%$.
      `
    },
    {
      id: 'bio-fitness-environment-p5-s3-mcq-core',
      type: 'multiple-choice' as const,
      content: `
**Checkpoint: interpreting reaction norms**
      `,
      exercise: {
        questions: [
          {
            question: 'Two genotypes of a plant are grown at 15 °C and 25 °C. Genotype A reaches 20 cm and 40 cm; genotype B reaches 30 cm and 50 cm. Which interpretation is correct?',
            options: [
              'Each is plastic, and B stays taller by the same amount',
              'Only A is plastic, since its height doubled while B did not',
              'There is a strong G×E interaction, since the lines cross',
              'Warmth has no effect, since the 10 cm gap stays constant'
            ],
            correctAnswer: 0,
            explanation: 'Both genotypes gain 20 cm, so their lines are sloped and parallel: both are plastic, B is genetically taller by 10 cm, and there is no G×E interaction. Parallel lines never cross, and both genotypes responded to temperature by the same absolute amount.'
          },
          {
            question: 'Genotype C produces 120 seeds in dry soil and 60 in wet soil. Genotype D produces 70 seeds in dry soil and 140 in wet soil. What does this pattern show?',
            options: [
              'The ranking of the two genotypes reverses between the two soils',
              'Genotype D is fitter overall, since it has the top single value',
              'Neither genotype is plastic, since each is adapted to one soil',
              'The genotypes differ, but moisture has no effect on either one'
            ],
            correctAnswer: 0,
            explanation: 'C makes more seeds in dry soil and D makes more in wet soil, so the lines cross and the fitter genotype depends on the environment (G×E). Both genotypes change seed output with moisture, so both are plastic.'
          }
        ]
      }
    },
    {
      id: 'bio-fitness-environment-p5-s4-common-garden',
      type: 'text' as const,
      content: `
### Separating genes from environment: experimental designs

When two populations look different in the field, the difference could be genetic, environmental or both. Two classic designs sort this out.

| Design | Procedure | What it tests |
|---|---|---|
| **Common garden** | Grow individuals from different populations side by side in **one** environment | Differences that persist in a shared environment must be **genetic** |
| **Reciprocal transplant** | Grow each population **both** at its home site and at the other population's site | Whether each population has the highest fitness at home (**local adaptation**) and how much each is plastic |
| **Clonal replication** | Grow genetically identical cuttings in several environments | Differences among cuttings of one clone must be **environmental**; it reveals the reaction norm |

#### Case study: Clausen, Keck and Hiesey's yarrow
In the 1930s and 1940s, Jens Clausen, David Keck and William Hiesey studied yarrow (*Achillea*) collected from populations along an elevation gradient across the Sierra Nevada of California. They grew plants at three garden sites: **Stanford** (near sea level, about 30 m), **Mather** (about 1,400 m) and **Timberline** (about 3,050 m).

| Finding | Interpretation |
|---|---|
| Plants from high-elevation populations stayed short even when grown in the low-elevation Stanford garden | Short stature in high-elevation populations is partly **genetic**; the populations are locally adapted ecotypes |
| Cuttings of a single plant grew to different heights at the different gardens | Height is **plastic**; one genotype has a reaction norm across elevations |
| The clone that was tallest at one garden was often not the tallest at another | **G×E interaction**: no genotype is "best" everywhere |

This one study shows all three ideas at once: genetic differences between populations, plasticity within genotypes, and genotype-by-environment interaction.
      `
    },
    {
      id: 'bio-fitness-environment-p5-s5-photoperiod-data',
      type: 'text' as const,
      content: `
### Data analysis: a photoperiod experiment

A student tests how night length affects flowering in a short-day plant. Groups of 20 genetically similar plants are kept in growth chambers at the same temperature, watering schedule and light intensity, and each chamber runs a repeating 24-hour cycle. After 6 weeks, she counts the plants that flowered. (Hypothetical data.)

| Group | Hours of darkness per cycle | Plants flowering (of 20) | Percent flowering |
|---|---|---|---|
| 1 | 8 | 0 | 0% |
| 2 | 10 | 1 | 5% |
| 3 | 12 | 15 | 75% |
| 4 | 14 | 19 | 95% |
| 5 | 16 | 20 | 100% |
| 6 | 16, with a 5-minute red flash at hour 8 | 2 | 10% |

**Identify the parts of the design**

| Element | In this experiment |
|---|---|
| Independent variable | Night length (hours of darkness) |
| Dependent variable | Number or percent of plants flowering |
| Controlled variables | Temperature, water, light intensity, plant genotype, duration of the experiment |
| Comparison that tests a mechanism | Group 6 versus Group 5 (same total darkness, but the night is interrupted) |

**Interpretation**
- Flowering jumps between 10 and 12 hours of darkness, so the **critical night length** lies between 10 and 12 hours.
- Group 6 has the same 16 hours of total darkness as Group 5, yet flowering falls from 100% to 10%. The plants respond to **uninterrupted night length**, not to total darkness.
- Percent change from Group 5 to Group 6: $\\frac{10 - 100}{100} \\times 100 = -90\\%$, a 90% decrease.
- A reasonable **null hypothesis** for groups 1 to 5: night length has no effect on the proportion of plants that flower.
      `
    },
    {
      id: 'bio-fitness-environment-p5-s6-input',
      type: 'input-boxes' as const,
      content: `
**Practice: work with the data**

Use the photoperiod table above and this reciprocal-transplant result: at a coastal site, the coastal ecotype of a plant averages **500** seeds per plant and the inland ecotype averages **300**.

1) Percent increase in flowering from Group 2 (10 h) to Group 4 (14 h), using percent values

2) Relative fitness of the inland ecotype at the coastal site (decimal)

3) The variable deliberately changed by the student in the photoperiod experiment (two words)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1800', '0.6', 'night length'],
        hint1: 'Percent change = (new − old) / old × 100, with old = 5% and new = 95%.',
        hint2: 'Relative fitness divides by the most successful ecotype at that site, which is the coastal one.',
        hint3: 'The independent variable is the one the experimenter sets for each group, listed in the second column.',
        explanation: '(95 − 5) / 5 × 100 = 1800%, a reminder that percent change from a small starting value can be very large. Inland ecotype at the coast: 300 / 500 = 0.6. The independent variable is night length.'
      }
    },
    {
      id: 'bio-fitness-environment-p5-s7-ap-connection',
      type: 'text' as const,
      content: `
### AP Connection: what graders look for

| Skill | Strong response | Weak response |
|---|---|---|
| Describe a trend | "Flowering rose from 5% at 10 h of darkness to 95% at 14 h" (direction plus data) | "Flowering went up" |
| Identify a control | "Temperature was held constant so that only night length differed" | "They had a control" |
| Interpret error bars | "The 95% confidence intervals for the two groups do not overlap, so the difference is likely significant" | "The bars are different heights" |
| Justify a claim with G×E | "The lines cross, so which genotype is fitter depends on the environment" | "Genotype B is better" |

**Three traps**
1. **Comparing only one environment.** A common-garden result shows genetic differences in *that* garden; it cannot reveal plasticity or G×E.
2. **Confusing total darkness with uninterrupted darkness** in photoperiod data.
3. **Calling a plastic difference "evolution."** Clones that differ in height between gardens have identical genotypes, so no allele frequencies changed.
      `
    },
    {
      id: 'bio-fitness-environment-p5-s8-mcq-final',
      type: 'multiple-choice' as const,
      content: `
**Exit check: designs and data**
      `,
      exercise: {
        questions: [
          {
            question: 'In the yarrow studies of Clausen, Keck and Hiesey, plants from high-elevation populations stayed short even when grown in a sea-level garden. What does this result show most directly?',
            options: [
              'At least some of their smaller size has a genetic basis',
              'Cold at high elevation alone explains their smaller size',
              'The garden induced mutations for shorter stems',
              'Yarrow height does not respond to the environment at all'
            ],
            correctAnswer: 0,
            explanation: 'The plants kept their short stature in a shared low-elevation garden, so at least part of the difference between populations is genetic. The same studies showed that height is also plastic, so both genes and environment matter.'
          },
          {
            question: 'In the photoperiod experiment, why were all groups kept at the same temperature, watering schedule and light intensity?',
            options: [
              'To make night length the only factor that differs between groups',
              'To raise the number of plants that flower in every group',
              'To ensure the plants in each group have identical genotypes',
              'To give a null hypothesis the results can be compared with'
            ],
            correctAnswer: 0,
            explanation: 'Holding other conditions constant isolates the independent variable, so differences in flowering can be attributed to night length. Controls do not change genotypes, and a null hypothesis is a statement, not a set of conditions.'
          },
          {
            question: 'Coastal and inland ecotypes of a plant are each grown at both a coastal site and an inland site. Each ecotype makes the most seeds at its own home site. This result is best evidence of',
            options: [
              'local adaptation',
              'phenotypic plasticity alone',
              'genetic drift',
              'inheritance of acquired traits'
            ],
            correctAnswer: 0,
            explanation: 'When each population has the highest fitness in its home environment in a reciprocal transplant, the populations are locally adapted. Plasticity alone could not make each ecotype outperform the other at home, and drift does not produce a consistent match to habitat.'
          }
        ]
      }
    }
  ]
};
