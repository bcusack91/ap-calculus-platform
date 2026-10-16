export const apesBiodiversityPart6Data = {
  topicSlug: 'apes-biodiversity',
  sections: [
    {
      id: 'apesbiod6-intro',
      type: 'text' as const,
      content: `
# 🦜 Biodiversity

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📋 Free-Response Practice: Birds in a Fragmented Forest |
| Model Answers |
| Designing an Investigation: Edge Versus Interior |

> 🔑 **Key Concept:** Biodiversity FRQs usually hand you survey data and ask you to compare diversity, connect the pattern to habitat size or isolation, calculate a change, and propose a way to protect what remains. This part works one complete question.

## 📋 Free-Response Practice: Birds in a Fragmented Forest

Ecologists counted breeding birds in two plots of the same forest type. Plot A lies inside a large, continuous forest. Plot B is a 20 ha fragment left after the surrounding 480 ha of the original 500 ha forest were cleared for farms. (All values are hypothetical.)

| Species | Plot A (continuous forest) | Plot B (20 ha fragment) |
|---|---|---|
| Wood thrush | 20 | 0 |
| Ovenbird | 20 | 0 |
| Red-eyed vireo | 20 | 5 |
| Scarlet tanager | 20 | 5 |
| American robin | 20 | 20 |
| Brown-headed cowbird | 0 | 70 |
| **Total** | **100** | **100** |

Brown-headed cowbirds are **edge** species that lay their eggs in other birds' nests.

**Questions**

(a) **Identify** the species richness of each plot.

(b) **Calculate** the percent of Plot B's birds that are brown-headed cowbirds.

(c) **Calculate** the percent of the original forest that was lost.

(d) A wood thrush population in a nearby fragment is declining by 5% per year. **Calculate** about how many years it will take to fall to half its size.

(e) **Explain** why the fragment supports fewer interior forest species than the continuous forest, using island biogeography or edge effects.

(f) **Propose** one land-management action that would help interior forest birds in this landscape, and **explain** how it works.
      `
    },
    {
      id: 'apesbiod6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

1) (b) Percent of Plot B's birds that are cowbirds:

2) (c) Percent of the original forest lost:

3) (d) Halving time of the declining wood thrush population, in years:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['70', '96', '14'],
        hint1: 'Cowbirds ÷ total birds in Plot B × 100.',
        hint2: '480 of the 500 hectares were cleared.',
        hint3: 'Rule of 70: 70 ÷ the percent rate of decline.',
        explanation: '(b) 70 ÷ 100 × 100 = 70 percent. (c) 480 ÷ 500 × 100 = 96 percent. (d) 70 ÷ 5 = 14 years.'
      }
    },
    {
      id: 'apesbiod6-model',
      type: 'text' as const,
      content: `
## Model Answers

**(a)** Plot A: **5** species. Plot B: **4** species (vireo, tanager, robin, cowbird).

**(b)** $\\dfrac{70}{100} \\times 100 = 70\\%$ of Plot B's birds are cowbirds. Plot A's five species each make up 20 percent, so Plot B is far less diverse: lower richness **and** one edge species dominating.

**(c)** $\\dfrac{480}{500} \\times 100 = 96\\%$ lost (equivalently, percent change in forest area $= \\dfrac{20 - 500}{500} \\times 100 = -96\\%$).

**(d)** Halving time $\\approx \\dfrac{70}{5} = 14$ years.

**(e)** A small fragment behaves like a small **island**: it holds smaller populations, so local **extinction rates are higher**, and the surrounding farmland **isolates** it, so **immigration** of forest birds is low. In addition, a small fragment is almost all **edge**: edge species such as cowbirds move in and parasitize the nests of interior species, and the hotter, drier, windier conditions at the edge do not suit them.

**(f)** Plant a **wildlife corridor** of forest linking the fragment to the continuous forest. The corridor lets interior birds disperse between patches, raising immigration and gene flow and allowing recolonization after local extinctions. (Also acceptable: reforest cleared land around the fragment to enlarge it and shrink the edge-to-area ratio; protect the largest remaining patches from further clearing.)

> 🔑 **AP Connection:** In (e), name the **mechanism**: higher extinction from small populations, lower immigration from isolation, or edge effects. "The fragment is small" restates the data and does not explain it.
      `
    },
    {
      id: 'apesbiod6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice** 🎯

Use the bird survey.
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement correctly compares the two plots?',
            options: [
              'Plot A has both higher richness and higher evenness than Plot B',
              'Plot B has higher evenness because it has more total birds',
              'Both plots have the same diversity because each has 100 birds',
              'Plot B has higher richness because it contains the cowbird'
            ],
            correctAnswer: 0,
            explanation: 'Plot A has five species evenly represented, while Plot B has four species dominated by cowbirds. Total counts are equal, so neither richness nor evenness can be judged from the totals alone.'
          },
          {
            question: 'Which species in the survey is most likely to benefit from further fragmentation of the forest?',
            options: [
              'Brown-headed cowbird',
              'Wood thrush',
              'Ovenbird',
              'Scarlet tanager'
            ],
            correctAnswer: 0,
            explanation: 'Cowbirds are edge specialists, and fragmentation creates more edge habitat. They were absent from the continuous forest plot but dominant in the fragment, while the interior species declined or disappeared.'
          },
          {
            question: 'A region of forest totaling 1,000 km² holds 80 bird species. If clearing leaves 100 km² in a similar landscape, about how many species does the species–area rule of thumb predict will remain?',
            options: [
              'About 40 species',
              'About 8 species',
              'About 72 species',
              'About 20 species'
            ],
            correctAnswer: 0,
            explanation: 'A 10-fold decrease in area roughly halves the number of species, so 80 becomes about 40. Assuming species fall in direct proportion to area, which gives 8, overstates the loss.'
          }
        ]
      }
    },
    {
      id: 'apesbiod6-investigation',
      type: 'text' as const,
      content: `
## Designing an Investigation: Edge Versus Interior

**Prompt:** A student hypothesizes that interior forest bird species are less common near a forest edge. Design an investigation.

| Element | Model response |
|---|---|
| **Hypothesis** | If a survey point is closer to the forest edge, then fewer interior species will be detected, because edge conditions and nest parasites reduce their breeding success. |
| **Independent variable** | Distance of the survey point from the forest edge (0 m, 100 m, 200 m, 400 m) |
| **Dependent variable** | Number of interior-species birds detected per 10-minute point count |
| **Controlled variables** | Same forest type, same time of morning, same season, same observer, same weather (no rain or strong wind) |
| **Replication** | Several survey points at each distance, each visited on three mornings |

### Interpreting results

| Distance from edge (m) | Interior birds per count |
|---|---|
| 0 | 1.5 |
| 100 | 4.0 |
| 200 | 6.0 |
| 400 | 6.5 |

**Percent change from the edge to 200 m:**

$$\\frac{6.0 - 1.5}{1.5} \\times 100 = +300\\%$$

Detections rise steeply over the first 200 m and then level off. That pattern suggests edge effects in this forest reach roughly 100–200 m, so a fragment would need to be several hundred meters across before it contains any true interior habitat.
      `
    },
    {
      id: 'apesbiod6-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why should the student survey every point at the same time of morning?',
            options: [
              'Bird activity changes during the day, so timing must be held constant to compare distances fairly',
              'Distance from the edge is the dependent variable, and it changes as the morning goes on',
              'Morning surveys remove the need to repeat counts at each distance from the edge',
              'Interior species leave the forest by midday, so later counts would miss them entirely'
            ],
            correctAnswer: 0,
            explanation: 'Birds sing and move most in early morning, so counts taken at different times would reflect timing rather than distance from the edge. Distance is the independent variable, and replication is still required.'
          },
          {
            question: 'Based on the edge data, which reserve design would best protect interior species?',
            options: [
              'One large, compact block of forest',
              'Many small patches spread across farmland',
              'A long, narrow strip of forest along a road',
              'Small patches with cleared land between them'
            ],
            correctAnswer: 0,
            explanation: 'A large, compact block has the least edge relative to its area, so it contains the most habitat beyond the 100–200 m edge zone. Small or narrow patches can be almost entirely edge.'
          }
        ]
      }
    }
  ]
};
