export const psychGeneticsPart4Data = {
  topicSlug: 'genetics-behavior',
  sections: [
    {
      id: 'genetics-behavior-p4-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Genetics and Behavior

**Part 4 of 7 — Reading Twin and Adoption Data**

> 🔑 **Key Concept:** Twin, family, and adoption studies report their results as **similarity statistics**. For traits measured on a scale (such as a personality score) researchers use a **correlation coefficient**; for yes-or-no outcomes (such as having a disorder) they use a **concordance rate**. Reading these numbers correctly is a core AP skill.

### Statistic 1: The correlation coefficient (r)

A **correlation coefficient** describes the direction and strength of the relationship between two variables. It ranges from **−1.00 to +1.00**.

| Value of r | What it means for twin pairs |
|---|---|
| Close to +1.00 | When one twin scores high, the other almost always scores high too |
| Around +0.50 | A moderate positive relationship: twins tend to be similar, with many exceptions |
| Close to 0 | Knowing one twin's score tells you almost nothing about the other's |
| Negative | When one scores high, the other tends to score low (rare in twin data) |

In twin research, **r** is calculated across many pairs: the score of twin 1 is paired with the score of twin 2 for every pair in the sample.

> ⚠️ An r of +0.60 does **not** mean that "60% of the trait is genetic" or that the twins are "60% alike." It describes how closely the scores track each other across pairs.

### Statistic 2: The concordance rate

A **concordance rate** is the percentage of pairs in which, **if one member has a trait or disorder, the other has it too**.

**Worked example (practice data):** Researchers find 50 identical twin pairs in which at least one twin has a diagnosed disorder. In 20 of those pairs, both twins have it.

$$\\text{concordance} = \\frac{20}{50} \\times 100 = 40\\%$$

| Step | What to do |
|---|---|
| 1 | Count the pairs in which **at least one** twin has the trait (the denominator) |
| 2 | Count the pairs in which **both** twins have it (the numerator) |
| 3 | Divide and multiply by 100 |

**Reading concordance:** if identical twins have a much **higher** concordance than fraternal twins, genes likely contribute. If identical twins are **far below 100%**, the environment must matter too, because identical twins share essentially all of their genes.

For schizophrenia, for example, research reviews find concordance of approximately **40 to 50 percent** for identical twins and roughly **10 to 17 percent** for fraternal twins. Both halves of that finding matter: genes clearly contribute, yet about half of identical co-twins never develop the disorder.
      `
    },
    {
      id: 'genetics-behavior-p4-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Two Statistics** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a practice study, the correlation between identical twins\' anxiety scores is +0.70. Which interpretation is accurate?',
            options: [
              'Seventy percent of each twin\'s anxiety was inherited from the parents',
              'If one twin is highly anxious, the co-twin tends to be anxious as well',
              'Each twin pair shares exactly seventy percent of its anxiety symptoms',
              'Anxiety in one twin causes anxiety in the other twin through modeling'
            ],
            correctAnswer: 1,
            explanation: 'A positive correlation means the twins\' scores tend to rise and fall together across pairs. It is not a percentage of anything inherited or shared, and a correlation alone cannot show what causes the similarity.'
          },
          {
            question: 'In a practice study, identical twins show a concordance rate of 30 percent for a disorder. What is the most defensible conclusion?',
            options: [
              'Genes play no role in this disorder',
              'The disorder is mostly caused by genes',
              'Fraternal twins will show 15 percent',
              'Environment also affects the disorder'
            ],
            correctAnswer: 3,
            explanation: 'Identical twins share essentially all their genes, so if genes were the whole story their concordance would approach 100 percent. A rate far below that means non-genetic factors matter; without a fraternal-twin comparison, we cannot yet judge the size of the genetic role.'
          }
        ]
      }
    },
    {
      id: 'genetics-behavior-p4-s3-dataset-a',
      type: 'text' as const,
      content: `
## 📊 Practice Data Set A: Correlations for a Personality Trait

*Practice data, invented for this lesson. Pattern modeled on the kinds of results twin and adoption studies report.*

Researchers measured **conscientiousness** (a Big Five personality trait) with a 40-item questionnaire in thousands of adults. Each row shows the correlation between paired relatives' scores.

| Relationship | Shared genes (approx.) | Raised together? | r |
|---|---|---|---|
| Identical twins | 100% | Yes | .48 |
| Identical twins | 100% | No (raised apart) | .45 |
| Fraternal twins | 50% | Yes | .22 |
| Ordinary siblings | 50% | Yes | .20 |
| Biological parent and child | 50% | No (child adopted away) | .17 |
| Adoptive parent and child | 0% | Yes | .03 |
| Adoptive siblings | 0% | Yes | .02 |

### Reading the table in four moves

**Move 1 — Compare identical with fraternal twins raised together.** .48 vs .22. Identical twins are about twice as similar. Since both types share a home, the extra similarity points to **genetic influence**.

**Move 2 — Compare identical twins raised together with those raised apart.** .48 vs .45. Being raised in the **same home** barely raised similarity. This points to a **small effect of the shared family environment** on this trait.

**Move 3 — Look at relatives who share only a home.** Adoptive siblings (.02) and adoptive parent–child pairs (.03) are barely more similar than strangers. Again: the shared household did little to make people alike on conscientiousness.

**Move 4 — Notice what is missing from 1.00.** Even identical twins raised together correlate only .48. People with the same genes and the same home still differ a great deal. That remaining variation comes from experiences that are **unique to each person** (different friends, teachers, illnesses, jobs, and chance events) and from measurement error.

### The general pattern

This practice table mirrors a pattern that research on adult personality has repeatedly found: genetic similarity predicts personality similarity, growing up in the same home adds surprisingly little, and **each person's unique experiences** account for a large share of the differences. For other traits, such as some attitudes and early-childhood behaviors, the shared family environment matters more.

| What you see in the data | What it suggests |
|---|---|
| MZ r much greater than DZ r | Genes contribute to differences in the trait |
| MZ raised apart ≈ MZ raised together | Shared home adds little similarity |
| Adoptive relatives r near 0 | Shared home adds little similarity |
| Adoptive relatives r clearly above 0 | Shared home does make people alike |
| MZ r well below 1.00 | Unique experiences (and measurement error) matter |
      `
    },
    {
      id: 'genetics-behavior-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate from the Data** 🧮

Use Practice Data Set A for question 1. Questions 2 and 3 use new practice numbers.
      `,
      exercise: {
        questions: [
          {
            question: 'From Data Set A, subtract the fraternal-twin correlation from the identical-twin correlation (both raised together). Give the difference as a decimal.',
            answer: '0.26',
            acceptableAnswers: ['.26', '+0.26', '+.26', '0.260'],
            explanation: '.48 − .22 = .26. Identical twins raised together are .26 more similar than fraternal twins raised together, a gap that points to genetic influence.'
          },
          {
            question: 'In a practice study of a disorder, 60 fraternal twin pairs have at least one affected twin, and in 9 of those pairs both twins are affected. What is the concordance rate, in percent?',
            answer: '15',
            acceptableAnswers: ['15%', '15 percent', '15.0'],
            explanation: '9 ÷ 60 = 0.15, and 0.15 × 100 = 15 percent.'
          },
          {
            question: 'In the same practice study, identical twins show a concordance rate of 45 percent. How many percentage points higher is the identical-twin rate than the fraternal-twin rate of 15 percent?',
            answer: '30',
            acceptableAnswers: ['30%', '30 percentage points', '30 points'],
            explanation: '45 − 15 = 30 percentage points, so identical twins are three times as likely to share the disorder, which suggests a genetic contribution.'
          }
        ]
      }
    },
    {
      id: 'genetics-behavior-p4-s5-pitfalls',
      type: 'text' as const,
      content: `
## 🚧 Practice Data Set B and the Classic Interpretation Errors

*Practice data, invented for this lesson.* A bar graph shows concordance rates for a hypothetical disorder, "Condition X." The bars read:

| Group | Concordance for Condition X |
|---|---|
| Identical twins raised together | 52% |
| Identical twins raised apart | 49% |
| Fraternal twins raised together | 17% |
| Adoptive siblings | 4% |
| General population rate | 2% |

**A correct summary:** Concordance rises with genetic relatedness (52% vs 17%), stays about the same for identical twins raised apart (49%), and is near the population rate for adoptive siblings (4% vs 2%). This pattern suggests a substantial genetic contribution to Condition X. But because identical-twin concordance is only about half, non-genetic factors clearly influence who develops it.

### Five errors that cost points

| Error | Example of the error | Why it is wrong |
|---|---|---|
| **Treating r as a percent** | "r = .48, so 48% of conscientiousness is genetic" | r describes how closely scores track each other, not a proportion caused by genes |
| **Applying group data to one person** | "Her twin has Condition X, so she has a 52% chance of having it too" | Rates describe groups in this sample, not the exact risk for any one person with her history and environment |
| **Ignoring the gap below 100%** | "Identical twins are 52% concordant, so the disorder is genetic" | If genes were the whole story, identical twins would be near 100% |
| **Assuming causation from correlation** | "The data prove that a gene causes Condition X" | The design shows association; it does not identify a mechanism, and confounds like the equal environments assumption remain |
| **Overgeneralizing the sample** | "These results apply to every country and era" | Results depend on the population studied and the range of environments it had |

> 🔑 **AP Connection:** Data-interpretation questions ask you to describe what a statistic shows **in the context of the study**. Name the groups being compared, state the direction of the difference, and say what that difference suggests, without claiming more than the design allows.
      `
    },
    {
      id: 'genetics-behavior-p4-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Data Questions** 🔬

Use Practice Data Set B (Condition X) above.
      `,
      exercise: {
        questions: [
          {
            question: 'Which comparison in Data Set B provides the best evidence that growing up in the same home is not what makes identical twins similar for Condition X?',
            options: [
              'Fraternal twins raised together compared with identical twins raised together',
              'Adoptive siblings compared with the general population rate',
              'Identical twins raised apart compared with identical twins raised together',
              'Fraternal twins raised together compared with the general population rate'
            ],
            correctAnswer: 2,
            explanation: 'Identical twins raised apart have the same genes as those raised together but not a shared home, and their concordance is nearly as high, so the shared home is not driving the similarity. The MZ versus DZ comparison speaks to genes, not to the home.'
          },
          {
            question: 'A student concludes from Data Set B that Condition X is "basically genetic, so the environment does not matter." Which piece of the data most directly contradicts this conclusion?',
            options: [
              'Identical twins share the disorder only about half of the time',
              'Fraternal twins have a higher rate than adoptive siblings',
              'Adoptive siblings are close to the general population rate',
              'Twins raised apart are nearly as concordant as those raised together'
            ],
            correctAnswer: 0,
            explanation: 'Identical twins share essentially all their genes, so a concordance near 50 percent means something other than genes decides whether the co-twin develops Condition X. The other comparisons are consistent with genetic influence rather than against environmental influence.'
          },
          {
            question: 'A parent reads Data Set B and says, "My son\'s identical twin has Condition X, so my son has exactly a 52 percent chance of developing it." What is the best correction?',
            options: [
              'The 52 percent describes a group of pairs, not a precise risk for one child',
              'The right figure for the son is 49 percent, since the boys were raised apart',
              'The son\'s risk is 100 percent, since identical twins share all of their genes',
              'The son\'s risk equals the 2 percent rate, since twin data do not apply to him'
            ],
            correctAnswer: 0,
            explanation: 'Concordance rates summarize what happened across many twin pairs in one sample; any one child\'s risk also depends on his own environment, age, and history. Treating the group rate as an individual\'s exact probability is a classic misreading.'
          }
        ]
      }
    },
    {
      id: 'genetics-behavior-p4-s7-connection',
      type: 'text' as const,
      content: `
### 🎯 AP Connection: A Template for Describing Twin Data

When an AAQ part asks what a statistic shows, use this sentence frame:

> "The [statistic] for [group 1] was [higher or lower] than for [group 2] ([value] vs [value]), which suggests that [genes or the shared environment] contribute to [the variable]."

**Example:** "The correlation for identical twins (.48) was higher than for fraternal twins (.22), which suggests that genes contribute to individual differences in conscientiousness."

**Next up — Part 5:** These comparisons are the basis of a single number, **heritability**, which is one of the most misunderstood statistics in psychology.
      `
    }
  ]
}
