export const satProbSolvDataPart4Data = {
  topicSlug: 'sat-problem-solving-data-sat',
  sections: [
    {
      id: 'psd4-intro',
      type: 'text' as const,
      content: `# Statistics: Center, Spread & Shape

**Part 4 of 7 — Mean, Median, Standard Deviation**

### Measures of Center
- **Mean** = sum of all values / count. Sensitive to outliers.
- **Median** = middle value when sorted. Resistant to outliers.

### When to Use Mean vs. Median
- **Symmetric data** → mean ≈ median, use either
- **Skewed data or outliers** → median is more representative

### Standard Deviation
Measures how spread out data is from the mean.
- **Low SD** → data points close to mean (consistent)
- **High SD** → data points far from mean (variable)

You **won't** calculate SD on the SAT, but you must **compare** SDs:
- {10, 10, 10, 10, 10} → SD = 0 (no spread)
- {8, 9, 10, 11, 12} → small SD
- {1, 3, 10, 17, 19} → large SD

### Effect of Adding/Removing Values
- Adding a value **equal to the mean** → mean unchanged, SD decreases
- Adding an **outlier** → mean shifts toward outlier, SD increases
- Removing an **outlier** → mean moves away from outlier, SD decreases

### Shape of Distributions
- **Right-skewed** (tail to right): mean > median
- **Left-skewed** (tail to left): mean < median
- **Symmetric**: mean ≈ median`
    },
    {
      id: 'psd4-q1',
      type: 'quiz' as const,
      question: 'A dataset has values {2, 3, 3, 4, 4, 4, 5, 5, 100}. Which is the better measure of center?',
      options: [
        'Mean, because it uses all values',
        'Median, because the outlier 100 pulls the mean far from typical values',
        'Mode, because 4 appears most often',
        'Range, because it shows the full spread'
      ],
      correctAnswer: 1,
      explanation: 'The outlier 100 drags the mean to about 14.4, but most values are 2-5. The median (4) better represents the typical value. On the SAT, when data has outliers, the median is usually the better measure.'
    },
    {
      id: 'psd4-text2',
      type: 'text' as const,
      content: `## Deep Dive: Statistics in Action

### Worked Example 1: Finding a Missing Value

| Step | Work |
|---|---|
| **Problem** | "Five test scores have mean 82. The first four are 78, 85, 92, 71. What is the fifth score?" |
| **Total needed** | $82 \\times 5 = 410$ |
| **Sum of four** | $78 + 85 + 92 + 71 = 326$ |
| **Fifth score** | $410 - 326 = 84$ |

### Worked Example 2: Effect of Removing a Value

| Step | Work |
|---|---|
| **Problem** | "Data: {10, 12, 14, 15, 100}. How do mean and median change if 100 is removed?" |
| **With 100** | Mean $= 151/5 = 30.2$, Median $= 14$ |
| **Without 100** | Mean $= 51/4 = 12.75$, Median $= 13$ |
| **Effect** | Mean drops significantly ($30.2 → 12.75$), median barely changes ($14 → 13$) |

### Adding a Constant vs. Multiplying

| Operation | Effect on Mean | Effect on Median | Effect on SD |
|---|---|---|---|
| Add $k$ to all values | Mean $+ k$ | Median $+ k$ | SD unchanged |
| Multiply all by $k$ | Mean $\\times k$ | Median $\\times k$ | SD $\\times |k|$ |

> **SAT favorite:** "If every student's score increases by 5 points, what happens to the standard deviation?" → **Nothing** — adding a constant shifts all values equally.

### Skewness Quick Reference

| Shape | Tail Direction | Relationship | Example |
|---|---|---|---|
| Right-skewed | Long tail right | Mean $>$ median | Income distribution |
| Left-skewed | Long tail left | Mean $<$ median | Easy test scores |
| Symmetric | Equal tails | Mean $\\approx$ median | Heights in a population |`
    },
    {
      id: 'psd4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Statistics Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'Dataset A: {20, 20, 20, 20, 20}. Dataset B: {10, 15, 20, 25, 30}. Both have the same mean. Which has a larger standard deviation?',
            options: ['Dataset B', 'Dataset A', 'They\'re equal', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'Both have mean $= 20$. Dataset A has SD $= 0$ (all identical). Dataset B has values spread from 10 to 30, so its SD is larger.'
          },
          {
            question: 'Every value in a dataset is multiplied by 3. The new standard deviation is:',
            options: ['$3$ times the original SD', 'The same as the original SD', '$9$ times the original SD', '$\\sqrt{3}$ times the original SD'],
            correctAnswer: 0,
            explanation: 'Multiplying by a constant $k$ multiplies SD by $|k|$. So SD becomes $3 \\times$ original. (Adding a constant wouldn\'t change SD.)'
          },
          {
            question: 'A distribution is right-skewed. Which must be true?',
            options: ['Mean $>$ median', 'Mean $<$ median', 'Mean $=$ median', 'Mode $>$ mean'],
            correctAnswer: 0,
            explanation: 'Right-skewed = long tail to the right. The tail pulls the mean toward higher values, so mean $>$ median.'
          }
        ]
      }
    },
    {
      id: 'psd4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Statistics Quick Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'Data has an extreme outlier → best measure of center: [Median|Mean|Range|SD]',
          'Add 10 to every value → SD [stays the same|increases by 10|doubles|decreases]',
          'Right-skewed distribution → mean is [greater than median|less than median|equal to median|always 0]',
          'All values identical → SD = [0|1|undefined|the mean]'
        ],
        correctAnswers: ['Median', 'stays the same', 'greater than median', '0'],
        hint1: 'Outliers pull the mean but not the median.',
        hint2: 'Adding a constant shifts everything but doesn\'t change spread.',
        hint3: 'Right tail pulls the mean above the median.',
        explanation: 'Outliers → use median (resistant). Adding constant → SD unchanged (spread stays same). Right-skew → mean > median. Identical values → no spread → SD = 0.'
      }
    },
    {
      id: 'psd4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary: Statistics

| Measure | What It Tells You | Sensitive to Outliers? |
|---|---|---|
| Mean | Average value | YES |
| Median | Middle value | NO |
| SD | Spread from mean | YES |
| Range | Max − Min | YES |

### Key Rules
- Add constant $k$: mean & median shift by $k$, SD unchanged
- Multiply by $k$: mean, median, & SD all multiply by $|k|$
- Right-skewed → mean $>$ median
- Outlier → use median as the better center

*Next: Scatterplots and line of best fit →*`
    }
  ]
};
