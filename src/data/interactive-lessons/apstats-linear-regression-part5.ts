export const apStatsLinRegPart5Data = {
  topicSlug: 'linear-regression-apstats',
  sections: [
    {
      id: 'apstats-linearregression-p5-intro',
      type: 'text' as const,
      content: `# 📊 Unusual Points, Extrapolation and Interpreting the Line

**Part 5 of 7 — Reading a Regression Carefully**

---

### Topics in This Part

| Section |
|---------|
| ⚠️ Unusual Features of a Scatterplot |
| 🔍 When $r$ Misleads |
| 📏 Interpolation vs. Extrapolation |
| 📝 Interpreting Slope and Intercept in Context |

> 🔑 **Key Concept:** A regression line is only as good as the pattern behind it. Before using a line, look for unusual features, check whether a linear model fits, and use it only for $x$ values like the ones in the data.

---

### Unusual Features of a Scatterplot

A full description of a scatterplot gives **form, direction, strength and unusual features**. Unusual features are:

| Feature | What it looks like | What to do |
|---------|--------------------|------------|
| **Cluster** | Separate groups of points | Describe each group; the groups may differ in some other variable |
| **Point that doesn't fit the pattern** | A point far from the overall trend; it has a large residual | Identify it in context and check it for a recording error. A single such point can noticeably change $r$ and the line |

**Example:** For 12 used cars, price falls steadily with age, except for one 6-year-old classic car priced far above the trend. That car is a point that doesn't fit the pattern: the line badly **underpredicts** its price, so its residual is large and positive.

---

### When $r$ Misleads

- An $r$ close to $-1$ or $1$ does **not** necessarily mean a linear model is appropriate. Gently curved data can give $r = 0.97$ while the residual plot shows clear curvature.
- An $r$ near 0 means no **linear** association; a strong curved relationship is still possible.
- Correlation does not imply causation: a confounding variable may drive both variables.`
    },
    {
      id: 'apstats-linearregression-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Unusual Features Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A scatterplot of used-car age vs. price shows a clear negative linear pattern, except one 6-year-old car priced far above the others. How should this car be described?',
            options: ['A cluster of cars with very similar prices', 'Evidence that the overall association is positive', 'A point that does not fit the general trend', 'A point whose residual is large and negative'],
            correctAnswer: 2,
            explanation: 'One car far above an otherwise negative trend is an unusual point that does not fit the pattern. A cluster is a group of points, one point does not reverse the overall direction, and a car priced ABOVE the line has a positive residual.'
          },
          {
            question: 'A scatterplot shows a clearly curved pattern, yet $r = 0.96$. Which statement is correct?',
            options: ['A linear model must fit because $r$ is near 1', 'A linear model may still be inappropriate', 'The association must be weak because it curves', 'An $r$ that high is impossible for curved data'],
            correctAnswer: 1,
            explanation: 'A correlation close to 1 does not necessarily mean a linear model is appropriate; the curvature shows it is not. Curved data can have a strong association and a large $r$.'
          },
          {
            question: 'Points in a scatterplot form two separate groups, one at low $x$ and one at high $x$. This unusual feature is called:',
            options: ['Extrapolation', 'A cluster', 'A residual', 'Causation'],
            correctAnswer: 1,
            explanation: 'Separate groups of points are clusters, an unusual feature to describe in context. Extrapolation is predicting beyond the data, a residual is a vertical distance, and the plot cannot show causation.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p5-extrapolation',
      type: 'text' as const,
      content: `## 📏 Interpolation vs. Extrapolation

| Term | Meaning | Reliability |
|------|---------|-------------|
| **Interpolation** | Predicting for an $x$ **within** the interval of $x$ values used to fit the line | Reasonable if the model fits |
| **Extrapolation** | Predicting for an $x$ **beyond** that interval | Less reliable the farther you go |

**Example:** For children aged 3 to 12 years, $\\hat{y} = 30.2 + 2.4x$, where $x$ = age (years) and $y$ = height (inches).

- Age 8: $\\hat{y} = 30.2 + 2.4(8) = 49.4$ inches (interpolation).
- Age 40: $\\hat{y} = 30.2 + 2.4(40) = 126.2$ inches, over 10 feet (extrapolation; growth stops, so the line no longer applies).

---

## 📝 Interpreting Slope and Intercept in Context

**Slope:** "For each additional year of age, the predicted height increases by 2.4 inches."

**Intercept:** "At age 0, the predicted height is 30.2 inches." But age 0 is outside the 3-to-12-year data, so this is an extrapolation and should not be trusted.

The intercept also has no logical interpretation when it is impossible for the response, for example a negative predicted height, weight or count.

> ⚠️ **AP Tip:** Always name both variables, use "predicted," and give units. Say whether $x = 0$ is inside the data before interpreting the intercept.`
    },
    {
      id: 'apstats-linearregression-p5-input',
      type: 'input-boxes' as const,
      content: `
**Using the Height Model** 🧮

$\\hat{y} = 30.2 + 2.4x$, with $x$ = age (years, data from 3 to 12) and $y$ = height (inches).

**1)** Predicted height at age 8?

**2)** Predicted height at age 40 (an extrapolation)?

**3)** A 10-year-old is 52 inches tall. What is the residual?
      `,
      exercise: {
        inputs: [
          {
            label: 'Predicted height, age 8',
            correctAnswer: '49.4',
            explanation: '$\\hat{y} = 30.2 + 2.4(8) = 30.2 + 19.2 = 49.4$ inches.'
          },
          {
            label: 'Predicted height, age 40',
            correctAnswer: '126.2',
            explanation: '$\\hat{y} = 30.2 + 2.4(40) = 30.2 + 96 = 126.2$ inches, an absurd value that shows why extrapolation is unreliable.'
          },
          {
            label: 'Residual',
            correctAnswer: '-2.2',
            explanation: '$\\hat{y} = 30.2 + 2.4(10) = 54.2$. Residual $= 52 - 54.2 = -2.2$ inches: the model overpredicts this child.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Reading the Line Carefully** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'lr5-dd1',
            label: 'Predicting height at age 8 (data: ages 3 to 12) is',
            options: ['interpolation', 'extrapolation', 'causation', 'a cluster'],
            correctIndex: 0,
            explanation: 'Age 8 is inside the interval of ages used to fit the line, so this is interpolation.'
          },
          {
            id: 'lr5-dd2',
            label: 'The farther $x$ is beyond the data, the ___ the prediction',
            options: ['more reliable', 'less reliable', 'more precise', 'more causal'],
            correctIndex: 1,
            explanation: 'Extrapolated predictions become less reliable the farther they go beyond the data, because the linear pattern may not continue.'
          },
          {
            id: 'lr5-dd3',
            label: 'The intercept 30.2 inches (age 0) in the height model',
            options: ['is reliable because it is a positive height', 'is an extrapolation beyond the data', 'is the mean height of all the children', 'is the predicted growth per year of age'],
            correctIndex: 1,
            explanation: 'Age 0 is outside the 3-to-12-year data, so the intercept is an extrapolation. The predicted growth per year is the slope, and the mean height is $\\bar{y}$.'
          },
          {
            id: 'lr5-dd4',
            label: 'A strong positive correlation between ice-cream sales and sunburns shows',
            options: ['causation', 'association', 'independence', 'extrapolation'],
            correctIndex: 1,
            explanation: 'Correlation shows association only; sunny weather is a likely confounding variable that drives both.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Unusual Points, Extrapolation & Interpretation** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which is an unusual feature to report when describing a scatterplot?',
            options: ['The mean of the $x$ values', 'The number of points in the data', 'A point far from the overall pattern', 'The units of the response variable'],
            correctAnswer: 2,
            explanation: 'Unusual features of a scatterplot are clusters and points that do not fit the general pattern. Means, counts and units are not features of the association.'
          },
          {
            question: 'A scatterplot of study time vs. test score for two different classes shows two separate groups of points. This feature is:',
            options: ['Extrapolation', 'A cluster', 'Causation', 'Interpolation'],
            correctAnswer: 1,
            explanation: 'Separate groups of points are clusters. Interpolation and extrapolation describe predictions, and a scatterplot alone cannot show causation.'
          },
          {
            question: '$r = 0.98$, but the residual plot shows a clear U-shape. What should you conclude?',
            options: ['A linear model is not the most appropriate model', 'A linear model is appropriate, since $r$ is near 1', 'The relationship is weak, since the plot is curved', 'The residuals must have been computed incorrectly'],
            correctAnswer: 0,
            explanation: 'Curvature in the residual plot means the linear model misses the form, even with $r$ near 1. Curved data can still have a strong association, and a U-shape is a pattern, not a calculation error.'
          },
          {
            question: 'A regression of crop yield on rainfall used rainfall amounts from 10 to 30 inches. Predicting yield for 55 inches of rain is:',
            options: ['Interpolation, and the prediction is reliable', 'Extrapolation, and the prediction is less reliable', 'Interpolation, but less reliable', 'Extrapolation, so the prediction is more precise'],
            correctAnswer: 1,
            explanation: '55 inches is beyond the 10–30 inch interval, so this is extrapolation, and its prediction is less reliable because the linear pattern may not continue.'
          },
          {
            question: 'Monthly heating cost (dollars) vs. average outdoor temperature (°F): $\\hat{y} = 210 - 3.5x$. Which interprets the slope?',
            options: ['For each 1°F increase, the cost falls by exactly \\$3.50', 'For each \\$1 increase in cost, temperature falls 3.5°F', 'For each 1°F increase, predicted cost falls by \\$210', 'For each 1°F increase, predicted cost falls by \\$3.50'],
            correctAnswer: 3,
            explanation: 'The slope $-3.5$ is the predicted change in cost for a one-degree increase in temperature. "Exactly" ignores variation around the line, the reversed version swaps $x$ and $y$, and 210 is the intercept.'
          },
          {
            question: 'In the heating model, the temperatures in the data ranged from 20°F to 65°F. The intercept of 210 is:',
            options: ['A predicted cost at 0°F, an extrapolation', 'The predicted cost when the temperature is 210°F', 'The predicted change in cost for each degree', 'The average monthly heating cost in the data'],
            correctAnswer: 0,
            explanation: 'The intercept is the predicted cost when $x = 0$, and 0°F is below the 20–65°F data, so interpreting it is an extrapolation. The per-degree change is the slope, and the mean cost is $\\bar{y}$.'
          },
          {
            question: 'For children 18 to 48 months old, a model predicts the number of words a child knows: $\\hat{y} = -480 + 30x$. Why does the intercept have no logical interpretation?',
            options: ['The slope is much larger than the intercept', 'Vocabulary size cannot be less than zero', 'The intercept value is not a whole number', 'Age is measured in months instead of years'],
            correctAnswer: 1,
            explanation: 'At $x = 0$ the model predicts $-480$ words, which is impossible for a count (and 0 months is outside the data anyway). The size of the slope and the units of age do not matter here.'
          },
          {
            question: 'Towns where more firefighters respond to a fire tend to have more fire damage. The best explanation is:',
            options: ['Sending more firefighters causes more damage', 'Sending fewer firefighters would reduce the damage', 'Fire size drives both of the variables', 'The correlation must be a calculation error'],
            correctAnswer: 2,
            explanation: 'Fire size is a confounding variable that increases both the number of firefighters and the damage. The correlation is real, but it does not show that firefighters cause damage.'
          },
          {
            question: 'The 6-year-old classic car is priced far above the age–price line. Its residual is:',
            options: ['Large and positive', 'Far below zero', 'Close to zero', 'Equal to the slope'],
            correctAnswer: 0,
            explanation: 'Residual $=$ observed $-$ predicted, and the observed price is far above the line, so the residual is large and positive (the model underpredicts it).'
          },
          {
            question: 'Which statement about the correlation $r$ is correct?',
            options: ['An $r$ near 1 proves a linear model is appropriate', 'An $r$ near 0 means $x$ and $y$ are unrelated', 'Changing units from inches to cm changes $r$', 'An $r$ near 0 can occur with a strong curved pattern'],
            correctAnswer: 3,
            explanation: '$r$ measures only linear association, so a strong curved relationship can have $r$ near 0. An $r$ near 1 does not prove linearity, and $r$ is unit-free.'
          }
        ]
      }
    }
  ]
};
