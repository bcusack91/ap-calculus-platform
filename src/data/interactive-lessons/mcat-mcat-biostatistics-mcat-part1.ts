export const mcatBiostatisticsPart1Data = {
  topicSlug: 'mcat-biostatistics-mcat',
  sections: [
    {
      id: 'biostats1-intro',
      type: 'text' as const,
      content: `# Biostatistics Fundamentals

**Part 1 of 4 — Descriptive Statistics & Data Distributions**

### Types of Data

| Type | Definition | Examples |
|------|-----------|----------|
| Continuous | Can take any value in a range | Height, weight, temperature, time |
| Discrete | Can only take specific values | Number of cells, number of mutations |
| Nominal | Categorical, no order | Blood type (A, B, AB, O) |
| Ordinal | Categorical, with order | Stage of cancer (I, II, III, IV) |

### Measures of Central Tendency

| Measure | Definition | When to Use |
|---------|-----------|------------|
| Mean | Sum of values ÷ count | Normal distribution; sensitive to outliers |
| Median | Middle value | Skewed data; resistant to outliers |
| Mode | Most frequent value | Categorical data |

**Example:** A drug trial shows patient recovery times: 5, 6, 7, 8, 100 days.
- Mean = 25.2 days (affected by outlier)
- Median = 7 days (better representation)

### Measures of Spread

| Measure | Formula | Interpretation |
|---------|---------|-----------------|
| Range | Max − Min | Spread across all data |
| Variance | $\\sigma^2 = \\frac{\\sum(x - \\bar{x})^2}{n}$ | Squared deviation from mean |
| Standard Deviation | $\\sigma = \\sqrt{\\text{variance}}$ | **Most important**: units match data |

**68-95-99.7 Rule (Normal Distribution):**
- 68% of data within 1 SD of mean
- 95% within 2 SD
- 99.7% within 3 SD`
    },
    {
      id: 'biostats1-quiz',
      type: 'multiple-choice' as const,
      content: `**Descriptive Statistics** 🎯`,
      exercise: {
        questions: [
          {
            question: `A dataset of 7 patients has cholesterol values (mg/dL): 180, 195, 200, 205, 210, 215, 250. Which is the best measure of central tendency?`,
            options: [
              `Mean (≈207)`,
              `Median (205)`,
              `Mode (no repeats)`,
              `Range (70)`
            ],
            correctAnswer: 1,
            explanation: `The mean is heavily influenced by the outlier (250). The median (205) better represents the "typical" value—this is why median is preferred for skewed distributions.`
          },
          {
            question: `If a drug concentration study has a mean of 10 μg/mL and SD of 2 μg/mL, what percentage of samples fall between 6 and 14 μg/mL?`,
            options: [
              `68%`,
              `95%`,
              `99.7%`,
              `34%`
            ],
            correctAnswer: 1,
            explanation: `6–14 μg/mL spans from (mean − 2SD) to (mean + 2SD). The 68-95-99.7 rule states 95% falls within 2 SD.`
          },
          {
            question: `A viral load assay produces results: 10³, 10⁴, 10⁵, 10⁶, 10⁷ copies/mL. Why is variance problematic for this data?`,
            options: [
              `Too many zeros in the data`,
              `The extremely wide range makes SD uninformative`,
              `Log-scale data requires different statistical treatment`,
              `All of the above`
            ],
            correctAnswer: 2,
            explanation: `With log-scale (exponential) data spanning 10³ to 10⁷, standard deviation is huge (meaningless). Log-transform first: ln(10³) ≈ 6.9, ln(10⁷) ≈ 16.1, now SD ≈ 3.5 makes sense.`
          },
          {
            question: `Which statement about the normal distribution is FALSE?`,
            options: [
              `Symmetric around the mean`,
              `Mean = Median = Mode`,
              `Always unimodal and never skewed`,
              `No real data perfectly follows it`
            ],
            correctAnswer: 2,
            explanation: `While normal distributions are typically unimodal and symmetric, real biological data is often slightly skewed (e.g., metabolite concentrations). Real-world distributions approximate normal but may deviate.`
          }
        ]
      }
    },
    {
      id: 'biostats1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Central Tendency**: Use median for skewed data; mean for symmetric distributions
- **Spread**: SD is most useful on MCAT; interpret via 68-95-99.7 rule
- **Outliers**: Robust stats (median, IQR) better than mean ± SD when outliers present
- **Log scales**: Many biomedical values are log-normally distributed (viral loads, enzyme concentrations—use log-transform)`
    },
    {
      id: 'biostats1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Descriptive Statistics

<details>
<summary><b>Example 1: Choose mean vs median with an outlier</b></summary>

Data: 4, 5, 5, 6, 40

1. Mean = 60/5 = 12.
2. Median = 5.
3. Outlier (40) inflates the mean.

Best central tendency: **median**.
</details>

<details>
<summary><b>Example 2: Use the 68-95-99.7 rule</b></summary>

Mean = 70, SD = 5. Estimate the range containing about 95% of values.

1. 95% is roughly mean ± 2 SD.
2. 70 ± 10 gives 60 to 80.

Approximate 95% interval: **60 to 80**.
</details>

<details>
<summary><b>Example 3: Interpret standard deviation practically</b></summary>

Two test forms have the same mean score (80). Form A has SD 3; Form B has SD 12.

1. Same mean means same average performance.
2. Lower SD means scores cluster more tightly.
3. Higher SD means performance is more variable.

Conclusion: **Form A is more consistent** across students.
</details>`
    }
  ]
};
