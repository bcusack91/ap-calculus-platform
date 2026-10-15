export const bioSpeciationPart6Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'bio-speciation-macroevolution-p6-s1-intro',
      type: 'text' as const,
      content: `
# 🌿 Speciation and Macroevolution

**Part 6 of 7 — Problem-Solving Workshop**

---

| Section |
|---------|
| How AP free-response questions test speciation |
| Scenario 1: designing and analyzing a mate-choice experiment |
| Calculate: chi-square for mating data |
| Scenarios 2 and 3: hybrid fertility data and speciation claims |
| AP-style check: data and claims |
| Scenarios 4 and 5: diversity over time and secondary contact |
| AP-style check: extinction data and experimental controls |

> 🔑 **Key Concept:** AP questions on this topic rarely ask for definitions alone. They give you a **scenario or data set** and ask you to **identify** a barrier or mode of speciation, **design or critique** an experiment, **analyze** data (often with percentages or chi-square), and **predict and justify** an outcome.

### The task verbs and what they demand

| Task verb | What a full-credit answer does | Speciation example |
|-----------|-------------------------------|--------------------|
| **Identify** | Names the item; no explanation needed | "Temporal isolation." |
| **Describe** | Gives the relevant features | "The two populations breed in different months, so they never mate." |
| **Explain** | Gives the cause and the mechanism (how or why) | "Because the populations breed in different months, gene flow stops; selection and drift can then change allele frequencies independently." |
| **Predict** | States a specific outcome | "Mating between the groups will decrease over generations." |
| **Justify** | Supports a claim with evidence and reasoning | "Hybrids rarely survive, so individuals that mate with their own type leave more offspring." |

A reliable pattern is **claim → evidence → reasoning**: state the answer, point to the specific data or scenario detail, then connect them with a biological principle.

### Scenario 1: a mate-choice experiment

A researcher divides a laboratory population of seed beetles into two groups. Group 1 is raised on **mung beans** and Group 2 on **adzuki beans** for 50 generations, with no contact between groups. She then places equal numbers of males and females from both groups together in mating chambers and records 60 matings.

#### Step 1: identify the parts of the design

| Design element | In this experiment |
|----------------|--------------------|
| **Independent variable** | The type of bean each group was raised on |
| **Dependent variable** | The number of same-group vs. mixed-group matings |
| **Controlled variables** | Equal numbers and ages of each sex and group, chamber size, temperature, observation time |
| **Control group** | Two groups that were also kept apart for 50 generations but raised on the **same** bean, tested the same way |
| **Null hypothesis** | Beetles mate at random with respect to rearing bean, so same-group and mixed-group matings are equally likely |

The control group matters: it separates the effect of **different diets** from the effect of **simply being kept apart**.

#### Step 2: analyze the data with chi-square

Results: **45** same-group matings and **15** mixed-group matings.

If mating were random, the expected counts would be 30 and 30 (half of 60 each).

$$\\chi^2 = \\sum \\frac{(o-e)^2}{e} = \\frac{(45-30)^2}{30} + \\frac{(15-30)^2}{30} = \\frac{225}{30} + \\frac{225}{30} = 15$$

- **Degrees of freedom** = number of categories − 1 = 2 − 1 = **1**.
- **Critical value** at p = 0.05 with 1 df = **3.84**.
- Because 15 > 3.84, **reject the null hypothesis**.

#### Step 3: claim, evidence, reasoning

- **Claim:** Beetles raised on different beans prefer mates from their own group; a prezygotic (behavioral) barrier is forming.
- **Evidence:** 75% of matings (45 of 60) were same-group, and χ² = 15 exceeds the critical value of 3.84.
- **Reasoning:** Without gene flow, selection for using different beans changed the two groups, and mate preference changed as a by-product. If this continues, gene flow between the groups could stop entirely, the first step toward speciation.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p6-s2-input',
      type: 'input-boxes' as const,
      content: `**Calculate — Chi-Square for Mating Data** 🧮

A second researcher repeats the experiment with a different pair of beetle groups and records **60** matings: **36** same-group and **24** mixed-group. Use a null hypothesis of random mating.`,
      exercise: {
        questions: [
          {
            question: 'What is the expected number of same-group matings under the null hypothesis?',
            answer: '30',
            acceptableAnswers: ['30 matings'],
            explanation: 'Random mating predicts half of the 60 matings in each category: 30.'
          },
          {
            question: 'Calculate the chi-square value. (Give your answer to one decimal place.)',
            answer: '2.4',
            acceptableAnswers: ['2.40'],
            explanation: '(36 − 30)² ÷ 30 + (24 − 30)² ÷ 30 = 36 ÷ 30 + 36 ÷ 30 = 1.2 + 1.2 = 2.4.'
          },
          {
            question: 'How many degrees of freedom does this test have?',
            answer: '1',
            acceptableAnswers: ['one'],
            explanation: 'There are two categories (same-group and mixed-group), so df = 2 − 1 = 1. Because 2.4 is less than the critical value of 3.84, the researcher fails to reject the null hypothesis.'
          }
        ],
        hint1: 'Expected = total matings x the fraction predicted by the null hypothesis.',
        hint2: 'For each category, square (observed − expected) and divide by expected, then add the two results.',
        hint3: 'Degrees of freedom = number of categories − 1.'
      }
    },
    {
      id: 'bio-speciation-macroevolution-p6-s3-scenarios',
      type: 'text' as const,
      content: `
### Scenario 2: hybrid fertility data

Two wildflower species, A (2n = 12) and B (2n = 18), grow in the same region. A botanist measures the percentage of pollen grains that are viable (able to fertilize an ovule).

| Plant | Chromosomes in body cells | Viable pollen (%) |
|-------|---------------------------|-------------------|
| Species A | 12 | 91 |
| Species B | 18 | 88 |
| F1 hybrid A x B | 15 | 3 |
| Hybrid after spontaneous chromosome doubling | 30 | 84 |

**Model analysis**

1. **Identify the barrier:** The F1 hybrid grows but makes almost no viable pollen: **reduced hybrid fertility**, a postzygotic barrier.
2. **Explain the low fertility:** The hybrid's 6 chromosomes from A and 9 from B are not homologous, so they cannot pair in meiosis and most gametes are unbalanced.
3. **Explain the recovery:** After doubling to 30, each chromosome has a homolog, meiosis works, and pollen viability (84%) approaches that of the parents.
4. **Predict:** The 30-chromosome plant crossed with either parent would give offspring with unmatched chromosome sets (21 with A, 24 with B) and low fertility. It is reproductively isolated from both parents: a new species by **allopolyploidy**.

### Scenario 3: justifying allopatric vs. sympatric claims

**Data:** A small volcanic crater lake, about 2 km across and with no internal barriers, was colonized once by a cichlid fish from a nearby large lake. Today the crater lake holds two cichlid species. DNA shows they are each other's closest relatives. One species feeds on the open-water surface; the other feeds along the bottom, and each mates in its own feeding zone.

**Model answer**

- **Claim:** The two species arose by **sympatric** speciation.
- **Evidence:** They are sister species descended from a single colonization, and the small lake has no geographic barrier that could have split the population.
- **Reasoning:** Gene flow was reduced by **habitat differentiation**: fish adapted to different feeding zones mated within those zones, so divergent selection and assortative mating split one population into two without physical separation.

**Contrast:** If the two species were found in two separate lakes, each other's closest relatives, with the lakes once joined by a river that dried up, the claim would be **allopatric** speciation.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p6-s4-mcq-data',
      type: 'multiple-choice' as const,
      content: `**AP-Style Check — Data and Claims** 🎯

Use Scenarios 2 and 3 above.`,
      exercise: {
        questions: [
          {
            question: 'In Scenario 2, the F1 hybrid between species A and species B has only 3% viable pollen. Which statement best explains this result?',
            options: [
              'Its unmatched chromosomes cannot pair in meiosis, so gametes are unbalanced',
              'Its parents release gametes at different times, so few gametes are produced',
              'Its pollen tubes cannot grow in the stigma of either parent species',
              'Its embryos die before flowering, so few pollen grains ever form'
            ],
            correctAnswer: 0,
            explanation: 'The hybrid carries 6 chromosomes from one species and 9 from the other with no homologous partners, so meiosis fails and most pollen is unbalanced: reduced hybrid fertility. The parents\' timing does not affect the hybrid\'s meiosis, pollen tube growth would not change pollen viability, and the hybrid clearly survived to flower.'
          },
          {
            question: 'In Scenario 3, which additional finding would most weaken the claim that the two crater-lake cichlid species arose by sympatric speciation?',
            options: [
              'Both species feed on insects during part of each year',
              'Each species has its closest kin in another lake',
              'The bottom-feeding species has a deeper, stronger jaw',
              'Females of each species prefer males from their own zone'
            ],
            correctAnswer: 1,
            explanation: 'If each species is most closely related to fish elsewhere, the lake was probably colonized twice by different species, so the two did not split from one population within the lake. Shared insect feeding, jaw differences and same-zone mate preference are all consistent with sympatric divergence.'
          }
        ]
      }
    },
    {
      id: 'bio-speciation-macroevolution-p6-s5-diversity',
      type: 'text' as const,
      content: `
### Scenario 4: diversity over time

A paleontologist counts genera of marine invertebrates in successive rock layers. (Hypothetical data modeled on the end-Permian extinction.)

| Interval (mya) | Genera at start | New genera | Genera lost | Genera at end |
|----------------|-----------------|------------|-------------|---------------|
| 270–260 | 500 | 60 | 50 | 510 |
| 260–252 | 510 | 30 | 70 | 470 |
| 252–250 | 470 | 5 | 380 | 95 |
| 250–240 | 95 | 90 | 15 | 170 |
| 240–230 | 170 | 110 | 30 | 250 |

**Model analysis**

1. **Identify the mass extinction:** 252–250 mya. Losses (380) vastly exceed originations (5); 380 ÷ 470 ≈ **81%** of genera lost in about 2 million years.
2. **Describe the trend before it:** From 260–252 mya, losses (70) already exceed originations (30), so diversity is declining, consistent with rising ecological stress before the crisis.
3. **Explain the recovery:** From 250 mya on, originations far exceed losses. Survivors radiated into niches emptied by the extinction (**EVO-3.K**).
4. **Quantify the recovery:** By 230 mya, the group has 250 genera, still only about half of the 510 present at 260 mya. Recovery from a mass extinction takes millions of years.
5. **Connect to the rule:** In every interval, change in diversity = new genera − genera lost (**EVO-3.J**).

### Scenario 5: predicting the outcome of secondary contact

Two populations of a songbird were separated for 300,000 years by an ice sheet. After the ice melted, their ranges now overlap in a 50-km band.

| Observation | Prediction | Justification |
|-------------|-----------|---------------|
| Hybrids have normal survival and fertility | The populations will **fuse** into one gene pool | Nothing reduces gene flow, so allele frequencies converge |
| Hybrids are sterile | The populations stay **separate species** | A complete postzygotic barrier already exists |
| Hybrids have low survival; prezygotic isolation is incomplete | Song and plumage differences will **increase** in the overlap zone | **Reinforcement**: selection favors individuals that avoid producing unfit hybrids |
      `
    },
    {
      id: 'bio-speciation-macroevolution-p6-s6-mcq-ap',
      type: 'multiple-choice' as const,
      content: `**AP-Style Check — Extinction Data and Experimental Controls** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Based on the Scenario 4 table, which interpretation of the changes from 250 to 230 mya is best supported?',
            options: [
              'Diversity fell further as genera lost exceeded new genera',
              'Survivors radiated into niches the mass extinction had emptied',
              'Diversity returned to its pre-extinction level within 10 million years',
              'Origination stopped until competition among survivors had ended'
            ],
            correctAnswer: 1,
            explanation: 'From 250 to 230 mya, new genera (90 and 110) far exceed genera lost (15 and 30), the signature of survivors radiating into emptied niches. Diversity rose rather than fell, reached only 250 genera instead of the earlier 510, and origination clearly did not stop.'
          },
          {
            question: 'In Scenario 1, a critic argues that beetles might prefer their own group simply because the groups were kept apart for 50 generations, not because they ate different beans. Which control would best address this criticism?',
            options: [
              'Testing the mung-bean group and adzuki-bean group again with more matings',
              'Raising both groups on a mix of mung beans and adzuki beans from the start',
              'Testing two groups that were reared separately but on the same type of bean',
              'Testing each group alone and counting matings within each separate chamber'
            ],
            correctAnswer: 2,
            explanation: 'Two groups separated for the same time but given the same bean isolate the effect of separation alone; if they mate randomly, the preference in the main experiment can be attributed to diet. More matings, mixed diets or single-group chambers do not separate the effect of isolation from the effect of diet.'
          }
        ]
      }
    },
    {
      id: 'bio-speciation-macroevolution-p6-s7-ap-tips',
      type: 'text' as const,
      content: `
### AP Connection: earning every point

| Common FRQ request | What graders look for |
|--------------------|-----------------------|
| Identify the reproductive barrier | The exact CED name (e.g., "reduced hybrid fertility," not "the hybrids can't have babies") |
| Classify pre- vs. postzygotic | Whether a zygote formed before the barrier acted |
| Identify the control | A group that differs from the experimental group **only** in the independent variable |
| State the null hypothesis | "There is no difference / no preference"; the expected values come from it |
| Justify allopatric vs. sympatric | Point to the presence or absence of a geographic barrier **and** to how gene flow was reduced |
| Predict after secondary contact | Tie the prediction to hybrid fitness |
| Explain a rise in diversity after an extinction | Empty niches → different selection pressures → adaptive radiation |

**Up next → Part 7: AP Review**, which connects the whole topic in one concept map and a mixed set of questions.
      `
    }
  ]
};
