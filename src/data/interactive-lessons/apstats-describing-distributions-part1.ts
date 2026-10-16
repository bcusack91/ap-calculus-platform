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
            options: ['Less than the median', 'Equal to the median', 'Greater than the median', 'Unrelated to the median'],
            correctAnswer: 2,
            explanation: 'The mean is pulled toward the tail. In a right-skewed distribution the tail extends toward larger values, so the mean is greater than the median. Less than goes with left skew and equal goes with symmetry.'
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
            options: ['Mean', 'Median', 'Maximum'],
            correctIndex: 1,
            explanation: 'The median is resistant to skewness and outliers, making it better for skewed distributions. The mean is pulled toward the tail, and the maximum is not a measure of center.'
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
            options: ['Center, spread, units, context', 'Shape, center, spread, outliers', 'Shape, spread, units, context'],
            correctIndex: 1,
            explanation: 'AP rubrics require all four, in context: shape, center, spread and outliers (or stating there are none). Context and units matter, but leaving out shape or spread still makes the description incomplete.'
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
            options: ['The range of all the data values', 'The spread of the middle 50%', 'The distance from mean to median', 'How many outliers the data have'],
            correctAnswer: 1,
            explanation: 'IQR = Q3 − Q1, the spread of the middle 50% of the data. The spread of all the values is the range, the mean-to-median distance reflects skew, and the IQR helps flag outliers without counting them.'
          },
          {
            question: 'Which distribution feature can be described as "unimodal" or "bimodal"?',
            options: ['Center', 'Spread', 'Shape', 'Outliers'],
            correctAnswer: 2,
            explanation: 'The number of peaks is part of the shape of a distribution, along with symmetry or skew. Center and spread are measured with statistics, and outliers are individual unusual values.'
          },
          {
            question: 'Data: 10, 20, 30, 40, 200. The mean is ___ the median.',
            options: ['Less than', 'Equal to', 'Greater than', 'Half of'],
            correctAnswer: 2,
            explanation: 'The outlier 200 pulls the mean up: mean = 300/5 = 60 while the median is the middle value, 30. So the mean is greater than the median (here it is twice the median, not half).'
          },
          {
            question: 'Which is NOT a measure of spread?',
            options: ['Range', 'IQR', 'Standard deviation', 'Median'],
            correctAnswer: 3,
            explanation: 'The median is a measure of center. The range, IQR and standard deviation all measure spread.'
          },
          {
            question: 'A symmetric distribution has:',
            options: ['Mean far above the median', 'Mean roughly equal to the median', 'Mean far below the median', 'Median equal to the IQR'],
            correctAnswer: 1,
            explanation: 'In a symmetric distribution, the mean and median are approximately equal. A mean much greater or much less than the median signals right or left skew, and the median and IQR measure different things.'
          },
          {
            question: 'Income data is typically:',
            options: ['Roughly symmetric', 'Left-skewed', 'Right-skewed', 'Roughly uniform'],
            correctAnswer: 2,
            explanation: 'Income distributions are right-skewed because a few very high incomes stretch the tail toward larger values. Incomes cannot go far below zero, so there is no long left tail.'
          },
          {
            question: 'Q1 is the median of:',
            options: ['All the data', 'The lower half of the data', 'The top half of the data', 'The middle 50%'],
            correctAnswer: 1,
            explanation: 'Q1 (first quartile) is the median of the data values below the overall median. The median of the upper half is Q3, and the median of all the data is Q2.'
          },
          {
            question: 'Adding an outlier far above the data will:',
            options: ['Raise the mean much more than the median', 'Raise both by equal amounts', 'Lower the mean but raise the median', 'Leave every summary statistic unchanged'],
            correctAnswer: 0,
            explanation: 'The mean uses the outlier\'s value, so it rises noticeably; the median shifts by at most one position, so it barely changes. The mean cannot fall when a large value is added.'
          },
          {
            question: 'Standard deviation measures:',
            options: ['The middle value of the ordered data', 'A typical distance of values from the mean', 'The difference between Q3 and Q1', 'The average of the squared values'],
            correctAnswer: 1,
            explanation: 'SD measures how far data values typically are from the mean. The middle value is the median, Q3 − Q1 is the IQR, and the SD squares deviations from the mean, not the values themselves.'
          },
          {
            question: 'On the AP exam, a complete description of a distribution must include:',
            options: ['Shape and center, stated in context', 'Shape, center, spread and unusual features in context', 'Center, spread and outliers, in context', 'A histogram plus the five-number summary'],
            correctAnswer: 1,
            explanation: 'The AP rubric requires shape, center, spread and unusual features such as outliers, all in context. Each other choice leaves out at least one feature, and a graph with statistics is not a written description.'
          }
        ]
      }
    }
  ]
};
