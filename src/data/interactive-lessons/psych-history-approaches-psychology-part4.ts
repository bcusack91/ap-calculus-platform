export const psychHistoryApproachesPart4Data = {
  topicSlug: 'history-approaches-psychology',
  sections: [
    {
      id: 'histo4-stats',
      type: 'text' as const,
      content: `
# 🧠 History & Approaches to Psychology

**Part 4 of 7 — Statistics**

> 🔑 **Key Concept:** Descriptive statistics summarize a data set (central tendency, variation, percentile rank, and the shape of the distribution). Inferential statistics tell you whether a result is likely real (statistical significance) and how big it is (effect size) (skills 3.B and 3.C).

## Descriptive Statistics

### Measures of Central Tendency

| Measure | Definition | When to Use |
|---------|-----------|-------------|
| **Mean** | Average of all scores | Roughly symmetric data without extreme scores |
| **Median** | Middle score when scores are ordered | Skewed data or data with outliers |
| **Mode** | Most frequent score | Categories, or to spot more than one peak |

### Measures of Variation

| Measure | Definition |
|---------|------------|
| **Range** | Highest score minus lowest score |
| **Standard deviation (SD)** | How far scores typically fall from the mean; larger SD = more spread out |

### Percentile Rank

**Percentile rank** is the percentage of scores at or below a given score. A student at the 80th percentile scored as well as or better than 80% of test takers. It is NOT the percentage of questions answered correctly.

### The Normal Curve

- Bell-shaped and symmetric; mean = median = mode
- About **68%** of scores fall within 1 SD of the mean
- About **95%** fall within 2 SD
- About **99.7%** fall within 3 SD
- A score 1 SD above the mean is at about the **84th** percentile (50% + 34%)
      `
    },
    {
      id: 'histo4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a normal distribution, approximately what percentage of scores fall within 1 standard deviation of the mean?',
            options: [
              '50%',
              '68%',
              '95%',
              '99.7%'
            ],
            correctAnswer: 1,
            explanation: 'About 68% of scores fall within 1 standard deviation of the mean (the 68-95-99.7 pattern).'
          },
          {
            question: 'A student\'s score on a national exam is at the 70th percentile. This means the student',
            options: [
              'answered 70% of the questions on the exam correctly',
              'scored at or above the scores of about 70% of test takers',
              'scored 70 points higher than the average test taker',
              'scored lower than about 70% of the other test takers'
            ],
            correctAnswer: 1,
            explanation: 'Percentile rank compares a score with other people\'s scores. The 70th percentile means the score is at or above about 70% of the scores, regardless of how many questions were correct.'
          }
        ]
      }
    },
    {
      id: 'histo4-shape',
      type: 'text' as const,
      content: `
## Shapes of Distributions

| Shape | What it looks like | Effect on mean and median |
|-------|-------------------|---------------------------|
| **Positively skewed** | Most scores are low, with a long tail toward HIGH scores | Mean is pulled up, above the median |
| **Negatively skewed** | Most scores are high, with a long tail toward LOW scores | Mean is pulled down, below the median |
| **Bimodal** | Two separate peaks | Suggests two different groups in the data; the mean may describe neither group |

**Tip:** The tail tells the name. A tail stretching to the right (high scores) = positive skew. Household income is a classic positively skewed variable.

## Correlation Coefficient

A **correlation coefficient (r)** runs from −1.00 to +1.00.
- The **sign** gives the direction: positive (both rise together) or negative (one rises as the other falls).
- The **absolute value** gives the strength: r = −.85 is stronger than r = +.40.
- On a **scatterplot**, points close to a straight line mean a strong correlation; a shapeless cloud means a weak one.

## Inferential Statistics

- **Statistical significance** indicates that a result is not likely due to chance and is instead likely due to the variables being studied. Psychologists often use p < .05 as the cutoff. Significance can be calculated for all types of research methods.
- **Effect size** indicates the strength of a relationship (non-experimental studies) or the size of the difference between conditions (experiments).

| Effect size statistic | Usual interpretation |
|-------------|--------|
| 0.2 and below | Small |
| about 0.3 to 0.7 | Medium |
| 0.8 or greater | Large |

A result can be statistically significant but have a small effect size, especially with a very large sample. Significance answers "Is it likely real?" Effect size answers "How big is it?"

## Regression Toward the Mean

Extreme scores tend to be followed by scores closer to the average, and as more data are collected, the average of the data moves toward the true mean. A student who scores unusually high on one quiz will probably score somewhat lower on the next, not because of a slump, but because part of the first score was luck.
      `
    },
    {
      id: 'histo4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Which measure of central tendency is best for skewed distributions?

      2) What is the common cutoff for statistical significance? (format: p < 0.__)

      3) What statistic tells you how LARGE a difference or relationship is? (two words)

      Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['median', '0.05', 'effect size'],
        hint1: 'Starts with: M — resistant to outliers',
        hint2: 'Five hundredths, written with a leading zero',
        hint3: 'Two words: ___ size',
        explanation: 'Expected answers: median (resistant to outliers and skew), 0.05 (the common significance cutoff), and effect size (how big the difference or relationship is).'
      }
    },
    {
      id: 'histo4-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In a positively skewed distribution, the mean is _____ the median.',
            options: ['below', 'above', 'equal to', 'unrelated to']
          },
          {
            label: 'An effect size of 0.9 is usually interpreted as _____.',
            options: ['small', 'medium', 'large', 'not significant']
          },
          {
            label: 'A distribution with two separate peaks is called _____.',
            options: ['normal', 'bimodal', 'negatively skewed', 'positively skewed']
          }
        ],
        correctAnswers: ['above', 'large', 'bimodal'],
        hint1: 'A few very high scores pull the mean toward the tail.',
        hint2: '0.8 or greater.',
        hint3: '"Bi" means two.',
        explanation: 'In positive skew, high outliers pull the mean above the median. An effect size of 0.9 is large. Two peaks make a bimodal distribution.'
      }
    },
    {
      id: 'histo4-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- The mean is NOT always the best measure of central tendency. With outliers or skew, use the median.
- Statistical significance does NOT mean a result is large or important. Check the effect size.
- Statistical significance does NOT prove the hypothesis is true; it means the result is unlikely to be due to chance alone.
- Percentile rank is NOT percent correct.
- Standard deviation is NOT the range. SD describes typical distance from the mean; range is just highest minus lowest.
- A negative correlation is NOT a weak correlation. The sign is direction; the size is strength.

### AP Strategy Moves
- If a distribution is described as "skewed" or has extreme outliers, choose the median.
- Know the 68-95-99.7 pattern and how to turn it into percentiles (1 SD above = about 84th percentile).
- On the AAQ, when asked what a statistic shows, describe it **in the context of the study**: "The experimental group's mean was 4 points higher, a medium effect," not "it was significant."
      `
    },
    {
      id: 'histo4-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Five employees earn \\$30K, \\$32K, \\$35K, \\$33K, and \\$200K. Which measure best represents the typical salary?',
            options: [
              'The mean of \\$66K, because it gives every salary equal weight',
              'The median of \\$33K, because the one outlier would inflate the mean',
              'The mode, because it reports the salary that occurs most often',
              'The range of \\$170K, because it shows how widely salaries spread'
            ],
            correctAnswer: 1,
            explanation: 'The \\$200K salary is an outlier that pulls the mean (\\$66K) far above most salaries. The median (\\$33K) is not affected by the outlier and better represents the typical salary.'
          },
          {
            question: 'A study of 20,000 people finds that a memory app improves recall by a statistically significant amount, with an effect size of 0.1. How should this be interpreted?',
            options: [
              'The effect is large, since the result reached statistical significance',
              'The effect is probably real but small in size',
              'The effect is likely due to chance, since the effect size is low',
              'The effect cannot be judged, since the sample was too large'
            ],
            correctAnswer: 1,
            explanation: 'Significance means the result is unlikely to be due to chance, and an effect size of 0.1 is small. Very large samples can detect real effects that are too small to matter much.'
          },
          {
            question: 'A basketball player has her best game of the season, scoring 38 points when she usually scores about 15. In the next game she scores 19. Which concept best explains the drop?',
            options: [
              'Regression toward the mean',
              'A negatively skewed distribution',
              'A negative correlation',
              'Statistical significance'
            ],
            correctAnswer: 0,
            explanation: 'An extreme performance is usually followed by one closer to the player\'s average, partly because luck contributed to the extreme score. That is regression toward the mean.'
          }
        ]
      }
    }
  ]
}
