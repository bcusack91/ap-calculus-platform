export const apStatsDistributionsPart1Data = {
  topicSlug: 'describing-distributions-apstats',
  sections: [
    {
      id: 'apstats-describing-distributions-p1-intro',
      type: 'text' as const,
      content: `# 📊 Shape, Center, Spread

**Part 1 of 7 — The Three Key Features of Any Distribution**

---

### The S-C-S Framework

Every distribution of quantitative data should be described using **three features**:

| Feature | What It Tells You | Common Measures |
|---------|-------------------|-----------------|
| **Shape** | Overall pattern | Symmetric, left-skewed, right-skewed, unimodal, bimodal |
| **Center** | Typical value | Mean ($\\bar{x}$), Median ($M$) |
| **Spread** | Variability | Range, IQR, Standard Deviation ($s$) |

> 🔑 **AP Tip:** On free-response questions, you MUST address all three features (shape, center, spread) AND mention any outliers. Missing any one costs points.

---

### Shape

| Shape | Description | Visual |
|-------|-------------|--------|
| **Symmetric** | Left and right halves are mirror images | Bell-shaped, uniform |
| **Right-skewed** | Long tail extends to the RIGHT | Most data clumped left |
| **Left-skewed** | Long tail extends to the LEFT | Most data clumped right |
| **Unimodal** | One peak | Single hump |
| **Bimodal** | Two peaks | Two humps |

> ⚠️ **Common Mistake:** The direction of skewness is the direction of the TAIL, not where most data is concentrated.

---

### Center

| Measure | Formula | Best When |
|---------|---------|-----------|
| **Mean** ($\\bar{x}$) | $\\bar{x} = \\frac{\\sum x_i}{n}$ | Distribution is roughly symmetric |
| **Median** ($M$) | Middle value when data is ordered | Distribution is skewed or has outliers |

**Key Relationship:**
- Right-skewed → mean > median (mean pulled toward tail)
- Left-skewed → mean < median (mean pulled toward tail)
- Symmetric → mean $\\approx$ median

---

### Spread

| Measure | Formula | Description |
|---------|---------|-------------|
| **Range** | $\\text{max} - \\text{min}$ | Simplest; sensitive to outliers |
| **IQR** | $Q_3 - Q_1$ | Middle 50% of data; resistant to outliers |
| **Standard Deviation** ($s$) | $s = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n-1}}$ | Average distance from mean |

---

### Worked Example

**Data:** 2, 3, 3, 4, 4, 4, 5, 5, 6

| Feature | Analysis |
|---------|----------|
| Shape | Roughly symmetric (approximately bell-shaped) |
| Center | Median = 4 (5th of 9 values); Mean = $\\frac{36}{9} = 4$ |
| Spread | Range = $6 - 2 = 4$; IQR = $Q_3 - Q_1 = 5 - 3 = 2$ |
| Outliers | None apparent |

> **AP-Style Description:** "The distribution of values is roughly symmetric and unimodal with a center (median) of 4. The spread is moderate with an IQR of 2 and a range of 4. There are no apparent outliers."`
    },
    {
      id: 'apstats-describing-distributions-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Shape, Center, Spread Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A distribution with a long right tail is:',
            options: ['Left-skewed', 'Right-skewed', 'Symmetric', 'Bimodal'],
            correctAnswer: 1,
            explanation: 'The direction of skewness is named for the direction of the TAIL. Long right tail = right-skewed.'
          },
          {
            question: 'In a right-skewed distribution, the mean is typically:',
            options: ['Less than the median', 'Equal to the median', 'Greater than the median', 'Cannot be determined'],
            correctAnswer: 2,
            explanation: 'The mean is pulled toward the tail. In a right-skewed distribution, the tail extends right, so mean > median.'
          },
          {
            question: 'Which measure of center is resistant to outliers?',
            options: ['Mean', 'Median', 'Range', 'Standard deviation'],
            correctAnswer: 1,
            explanation: 'The median only depends on the middle value(s), so extreme outliers don\'t affect it. The mean uses every value, so outliers pull it.'
          }
        ]
      }
    },
    {
      id: 'apstats-describing-distributions-p1-input',
      type: 'input-boxes' as const,
      content: `
**Calculations** 🧮

**Data: 1, 3, 5, 7, 9, 11, 13**

**1)** What is the median?

**2)** What is the range?

**3)** What is the mean?
      `,
      exercise: {
        inputs: [
          {
            label: 'Median',
            correctAnswer: '7',
            explanation: 'With 7 values in order, the median is the 4th value: 7.'
          },
          {
            label: 'Range',
            correctAnswer: '12',
            explanation: 'Range = max − min = 13 − 1 = 12.'
          },
          {
            label: 'Mean',
            correctAnswer: '7',
            explanation: 'Mean = (1+3+5+7+9+11+13)/7 = 49/7 = 7. Note: for symmetric data, mean = median.'
          }
        ]
      }
    },
    {
      id: 'apstats-describing-distributions-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choosing the Right Measure** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'dd1-p1-1',
            label: 'For skewed data, the best measure of center is the ___',
            options: ['Mean', 'Median', 'Range'],
            correctIndex: 1,
            explanation: 'The median is resistant to skewness and outliers, making it better for skewed distributions.'
          },
          {
            id: 'dd1-p1-2',
            label: 'For skewed data, the best measure of spread is the ___',
            options: ['Range', 'IQR', 'Standard deviation'],
            correctIndex: 1,
            explanation: 'IQR is resistant to outliers. Range and SD are both affected by extreme values.'
          },
          {
            id: 'dd1-p1-3',
            label: 'When describing a distribution on the AP exam, you should mention ___',
            options: ['Only the center', 'Shape and center', 'Shape, center, spread, and outliers'],
            correctIndex: 2,
            explanation: 'AP rubrics require all four: shape, center, spread, and outliers (or stating there are none).'
          }
        ]
      }
    },
    {
      id: 'apstats-describing-distributions-p1-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Shape, Center, Spread** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The IQR measures:',
            options: ['The range of all data', 'The spread of the middle 50% of data', 'The distance from mean to median', 'The number of outliers'],
            correctAnswer: 1,
            explanation: 'IQR = Q3 − Q1, which captures the middle 50% of the data.'
          },
          {
            question: 'Which distribution feature can be described as "unimodal" or "bimodal"?',
            options: ['Center', 'Spread', 'Shape', 'Outliers'],
            correctAnswer: 2,
            explanation: 'The number of peaks (modes) is a characteristic of the distribution\'s shape.'
          },
          {
            question: 'Data: 10, 20, 30, 40, 200. The mean is ___ the median.',
            options: ['Less than', 'Equal to', 'Greater than', 'Cannot determine'],
            correctAnswer: 2,
            explanation: 'The outlier 200 pulls the mean up. Mean = 60, Median = 30, so mean > median.'
          },
          {
            question: 'Which is NOT a measure of spread?',
            options: ['Range', 'IQR', 'Standard deviation', 'Median'],
            correctAnswer: 3,
            explanation: 'Median is a measure of center, not spread.'
          },
          {
            question: 'A symmetric distribution has:',
            options: ['Mean much greater than median', 'Mean approximately equal to median', 'No center', 'IQR = 0'],
            correctAnswer: 1,
            explanation: 'In a symmetric distribution, the mean and median are approximately equal.'
          },
          {
            question: 'Income data is typically:',
            options: ['Symmetric', 'Left-skewed', 'Right-skewed', 'Uniform'],
            correctAnswer: 2,
            explanation: 'Income distributions are right-skewed because a few very high incomes pull the tail to the right.'
          },
          {
            question: 'Q1 is the median of:',
            options: ['All the data', 'The lower half of the data', 'The upper half of the data', 'The middle 50%'],
            correctAnswer: 1,
            explanation: 'Q1 (first quartile) is the median of the data values below the overall median.'
          },
          {
            question: 'Adding an outlier far above the data will:',
            options: ['Increase the mean but not the median', 'Increase both mean and median equally', 'Decrease the mean', 'Not affect any measure'],
            correctAnswer: 0,
            explanation: 'The mean is sensitive to outliers (it increases), but the median stays at the middle position.'
          },
          {
            question: 'Standard deviation measures:',
            options: ['The middle value', 'The typical distance of values from the mean', 'The difference between Q3 and Q1', 'The maximum value'],
            correctAnswer: 1,
            explanation: 'SD measures how far data values typically are from the mean.'
          },
          {
            question: 'On the AP exam, a complete description of a distribution must include:',
            options: ['Just the shape', 'Shape and a numerical summary', 'Shape, center, spread, and unusual features (outliers) in context', 'A histogram'],
            correctAnswer: 2,
            explanation: 'The AP rubric requires shape, center, spread, outliers, and context for full credit.'
          }
        ]
      }
    }
  ]
};
