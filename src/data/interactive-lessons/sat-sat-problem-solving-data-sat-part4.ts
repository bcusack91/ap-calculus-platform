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
    }
  ]
};
