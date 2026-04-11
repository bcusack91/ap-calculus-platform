export const apStatsCollectingDataPart2Data = {
  topicSlug: 'collecting-data-apstats',
  sections: [
    {
      id: 'apstats-collectingdata-p2-intro',
      type: 'text' as const,
      content: `# 🎲 Sampling Methods

**Part 2 of 7 — How to Select a Representative Sample**

---

### Why Sampling Matters

We rarely have the resources to study an **entire population**. Instead, we take a **sample** and use it to make inferences about the population.

> 🔑 **Goal:** The sample should be **representative** of the population — every individual should have a known chance of being selected.

---

### Probability Sampling Methods

| Method | How It Works | Advantage |
|--------|-------------|-----------|
| **Simple Random Sample (SRS)** | Every individual has an equal chance of selection | Gold standard — no systematic bias |
| **Stratified Random Sample** | Divide into groups (strata), then SRS within each | Ensures representation of all subgroups |
| **Cluster Sample** | Randomly select entire groups (clusters), survey all within | Cost-effective for geographically spread populations |
| **Systematic Sample** | Select every $k$th individual from a list | Easy to implement |

---

### Simple Random Sample (SRS)

An SRS of size $n$ means every set of $n$ individuals has an **equal chance** of being the chosen sample.

**How to do it:**
1. Assign each individual a number
2. Use a random number generator (or table) to select $n$ numbers
3. The corresponding individuals form your sample

**Example:** To sample 50 students from a school of 800, number them 001–800 and use a random number table to pick 50 numbers.

---

### Stratified Random Sampling

1. Divide the population into **strata** (groups that are similar within)
2. Take an SRS from **each** stratum
3. Combine the SRS results

**When to use:** When the population has distinct subgroups (e.g., grade levels, gender, income brackets)

**Example:** A school with 400 freshmen and 300 seniors → sample 40 freshmen (SRS) and 30 seniors (SRS).`
    },
    {
      id: 'apstats-collectingdata-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Sampling Methods Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher numbers all 2,000 employees and uses a random number generator to select 100. This is:',
            options: ['Stratified sample', 'Simple random sample', 'Cluster sample', 'Convenience sample'],
            correctAnswer: 1,
            explanation: 'Every employee has an equal chance of selection using random numbers — this is an SRS.'
          },
          {
            question: 'A pollster divides voters by age group, then randomly selects from each group. This is:',
            options: ['Cluster sampling', 'Systematic sampling', 'Stratified sampling', 'Voluntary response'],
            correctAnswer: 2,
            explanation: 'Dividing into groups (strata) then SRS within each = stratified sampling.'
          },
          {
            question: 'Which sampling method is most likely to suffer from undercoverage?',
            options: ['SRS', 'Stratified', 'Convenience', 'Systematic'],
            correctAnswer: 2,
            explanation: 'Convenience samples only include easily accessible individuals, systematically excluding parts of the population.'
          }
        ]
      }
    },
    {
      id: 'apstats-collectingdata-p2-input',
      type: 'input-boxes' as const,
      content: `
**Sampling Calculations** 🧮

A school has 600 students: 200 freshmen, 150 sophomores, 150 juniors, and 100 seniors. A stratified sample of 60 students is taken proportionally.

**1)** How many freshmen should be sampled? (200/600 × 60)

**2)** How many seniors should be sampled? (100/600 × 60)

**3)** In a systematic sample of every 10th student from a list of 600, how many students are in the sample?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '10', '60'],
        hint1: '200/600 × 60 = 20.',
        hint2: '100/600 × 60 = 10.',
        hint3: '600/10 = 60.',
        explanation: '1) 20 freshmen. 2) 10 seniors. 3) 60 students (every 10th from 600).'
      }
    },
    {
      id: 'apstats-collectingdata-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Sampling Method** 🔽
      `,
      exercise: {
        dropdowns: [
          { label: 'Selecting every 5th name from an alphabetized list', options: ['SRS', 'Stratified', 'Cluster', 'Systematic'] },
          { label: 'Randomly choosing 3 classrooms and surveying all students in them', options: ['SRS', 'Stratified', 'Cluster', 'Systematic'] },
          { label: 'Dividing by major, then randomly selecting from each major', options: ['SRS', 'Stratified', 'Cluster', 'Systematic'] }
        ],
        correctAnswers: ['Systematic', 'Cluster', 'Stratified'],
        hint1: 'Every kth → systematic.',
        hint2: 'Whole groups selected → cluster.',
        hint3: 'Groups + SRS within each → stratified.',
        explanation: 'Systematic: every kth. Cluster: select whole groups. Stratified: divide then sample within.'
      }
    }
  ]
};
