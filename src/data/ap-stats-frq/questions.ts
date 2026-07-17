export interface FRQRubricItem {
  points: number
  description: string
  keywords: string[]
}

export interface FRQPart {
  label: string
  prompt: string
  maxPoints: number
  rubric: FRQRubricItem[]
  sampleAnswer: string
}

export interface StatsFRQ {
  id: string
  type: 'long' | 'short'
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
  dataTableHtml?: string
}

const statsFRQs: StatsFRQ[] = [
  // ===== LONG FRQ 1: Investigative Task — Regression Analysis =====
  {
    id: 'stats-long-1',
    type: 'long',
    unit: 2,
    title: 'Car Age and Fuel Efficiency',
    prompt: 'A consumer research group collected data on the age (in years) and highway fuel efficiency (in miles per gallon) of a random sample of 12 mid-size sedans of the same model. The results are shown below.',
    totalPoints: 4,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: true,
    dataTableHtml: `<table>
<tr><th>Car</th><th>Age (years)</th><th>Highway MPG</th></tr>
<tr><td>1</td><td>1</td><td>34.2</td></tr>
<tr><td>2</td><td>2</td><td>33.8</td></tr>
<tr><td>3</td><td>3</td><td>32.5</td></tr>
<tr><td>4</td><td>3</td><td>33.1</td></tr>
<tr><td>5</td><td>4</td><td>31.0</td></tr>
<tr><td>6</td><td>5</td><td>30.4</td></tr>
<tr><td>7</td><td>6</td><td>29.2</td></tr>
<tr><td>8</td><td>7</td><td>28.1</td></tr>
<tr><td>9</td><td>8</td><td>27.5</td></tr>
<tr><td>10</td><td>10</td><td>25.8</td></tr>
<tr><td>11</td><td>12</td><td>24.0</td></tr>
<tr><td>12</td><td>15</td><td>21.3</td></tr>
</table>
<p>Computer output:</p>
<pre>
Predictor      Coef     SE Coef    T        P
Constant      35.082    0.517     67.86    0.000
Age           -0.912    0.063    -14.48    0.000

S = 0.7364   R-Sq = 95.4%   R-Sq(adj) = 95.0%
</pre>`,
    parts: [
      {
        label: '(a)',
        prompt: 'Write the equation of the least-squares regression line. Define any variables used.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Correctly writes the LSRL equation with proper notation and defines variables.',
            keywords: ['ŷ = 35.082 − 0.912x', 'predicted MPG', 'age in years', 'least-squares regression']
          }
        ],
        sampleAnswer: 'ŷ = 35.082 − 0.912x, where ŷ is the predicted highway fuel efficiency in miles per gallon and x is the age of the car in years.'
      },
      {
        label: '(b)',
        prompt: 'Interpret the slope of the regression line in the context of this study.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Correctly interprets the slope in context with direction, units, and "predicted" or "estimated" language.',
            keywords: ['decrease', '0.912 mpg', 'per year', 'predicted', 'on average']
          }
        ],
        sampleAnswer: 'For each additional year of age, the predicted highway fuel efficiency decreases by approximately 0.912 miles per gallon, on average.'
      },
      {
        label: '(c)',
        prompt: 'The residual for the 6-year-old car is −0.410. Interpret this residual in context and use it to find the predicted MPG for a 6-year-old car.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Correctly interprets the residual (actual − predicted) and computes predicted value.',
            keywords: ['actual minus predicted', '0.410 mpg below', '29.61', 'overestimate']
          }
        ],
        sampleAnswer: 'The residual of −0.410 means the actual highway MPG for the 6-year-old car (29.2 mpg) was 0.410 mpg less than the value predicted by the regression model. The predicted MPG is 29.2 − (−0.410) = 29.61 mpg. The model slightly overestimated the fuel efficiency for this car.'
      },
      {
        label: '(d)',
        prompt: 'A customer asks the research group to predict the highway MPG of a 25-year-old car of this model. Explain why this prediction may not be reliable, even though $R^{2}$ = 95.4%.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Identifies extrapolation beyond the range of data and explains why $R^{2}$ does not justify predictions outside the observed range.',
            keywords: ['extrapolation', 'beyond the range', '1 to 15 years', 'unreliable', 'relationship may not hold']
          }
        ],
        sampleAnswer: 'Predicting the MPG for a 25-year-old car would be extrapolation because 25 years is well beyond the range of ages in the sample (1 to 15 years). Even though $R^{2}$ = 95.4% indicates a strong linear relationship within the observed data, the linear trend may not continue beyond that range. The model predicts ŷ = 35.082 − 0.912(25) = 12.28 mpg, but the actual relationship between age and MPG could be nonlinear for very old cars, making this prediction unreliable.'
      }
    ]
  },

  // ===== LONG FRQ 2: Investigative Task — Simulation-Based Reasoning =====
  {
    id: 'stats-long-2',
    type: 'long',
    unit: 4,
    title: 'Streaky Free-Throw Shooting',
    prompt: 'A basketball coach claims that her star player has "hot streaks" — periods when the player makes free throws at a rate higher than her season average. The player\'s season free-throw percentage is 72%. In a recent game, the player made 9 out of 10 free throws. The coach wants to determine whether this performance provides convincing evidence that the player was shooting better than her season average in that game.',
    totalPoints: 4,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'State appropriate hypotheses for a test to determine whether the player\'s free-throw percentage in this game is significantly higher than her season average.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Correctly states null and alternative hypotheses using proper notation and direction.',
            keywords: ['H₀: p = 0.72', 'Hₐ: p > 0.72', 'proportion', 'one-sided']
          }
        ],
        sampleAnswer: '$H_{0}$: p = 0.72 (the player\'s true free-throw proportion in this game is equal to her season average of 0.72)\n$H_{a}$: p > 0.72 (the player\'s true free-throw proportion in this game is greater than her season average of 0.72)'
      },
      {
        label: '(b)',
        prompt: 'Describe how to use a random number generator to simulate 10 free throws, assuming the player makes each free throw with probability 0.72. Clearly describe the model, one trial, and what should be recorded.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Describes a valid simulation method with correct probability assignment, trial definition, and what to record.',
            keywords: ['random integers', '1 to 100', '1 to 72 means make', 'count makes out of 10', 'repeat many times']
          }
        ],
        sampleAnswer: 'Generate 10 random integers from 1 to 100. Let integers 1–72 represent making a free throw and 73–100 represent missing. One trial consists of generating 10 such integers and counting the number of "makes." Record the number of makes (or the proportion of makes) for each trial. Repeat this process for a large number of trials (e.g., 200 or more) to build a simulated sampling distribution of the number of makes in 10 attempts when p = 0.72.'
      },
      {
        label: '(c)',
        prompt: 'In 200 simulated trials of 10 free throws each (with p = 0.72), the number of trials that resulted in 9 or more makes was 14. Use this result to estimate the p-value and make a conclusion at the α = 0.05 significance level.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Correctly estimates the p-value from simulation results and states a conclusion in context.',
            keywords: ['14/200 = 0.07', 'p-value ≈ 0.07', 'greater than 0.05', 'fail to reject', 'not convincing evidence']
          }
        ],
        sampleAnswer: 'The estimated p-value is 14/200 = 0.07. Since the p-value of 0.07 is greater than α = 0.05, we fail to reject $H_{0}$. There is not convincing evidence at the 5% significance level that the player\'s true free-throw percentage in this game is higher than her season average of 72%. The result of 9 out of 10 could reasonably occur by chance when p = 0.72.'
      },
      {
        label: '(d)',
        prompt: 'A binomial calculation gives the exact probability P(X ≥ 9) = 0.0811 when n = 10 and p = 0.72. Compare this to the simulation estimate and discuss whether the simulation-based approach with 200 trials is sufficient for making a reliable decision.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Compares simulation and theoretical values, discusses variability in simulation, and comments on adequacy of 200 trials.',
            keywords: ['0.07 vs 0.0811', 'reasonably close', 'simulation variability', 'more trials', 'both fail to reject']
          }
        ],
        sampleAnswer: 'The simulation estimate of 0.07 is reasonably close to the exact binomial probability of 0.0811. Both values lead to the same conclusion: fail to reject $H_{0}$ at α = 0.05. However, the simulation estimate varies from sample to sample due to randomness. With only 200 trials, the simulation estimate has a margin of error of roughly $\\pm \\sqrt{0.07 \\times 0.93/200}$ ≈ ±0.018. Increasing the number of simulated trials (e.g., 1000 or more) would produce a more precise estimate. In this case, 200 trials was sufficient because both estimates agree on the conclusion, but if the p-value were closer to α, more trials would be needed for a reliable decision.'
      }
    ]
  },

  // ===== SHORT FRQ 1: Displaying & Comparing Distributions =====
  {
    id: 'stats-short-1',
    type: 'short',
    unit: 1,
    title: 'Comparing Test Score Distributions',
    prompt: 'Two sections of an AP Statistics class took the same unit test. The summary statistics are shown below.',
    totalPoints: 4,
    timeRecommendation: '~13 minutes',
    calculatorAllowed: true,
    dataTableHtml: `<table>
<tr><th>Statistic</th><th>Section A (n = 28)</th><th>Section B (n = 32)</th></tr>
<tr><td>Mean</td><td>76.4</td><td>74.8</td></tr>
<tr><td>Median</td><td>78.0</td><td>76.5</td></tr>
<tr><td>Standard Deviation</td><td>8.2</td><td>12.1</td></tr>
<tr><td>Minimum</td><td>55</td><td>42</td></tr>
<tr><td>Q1</td><td>71</td><td>67</td></tr>
<tr><td>Q3</td><td>83</td><td>84</td></tr>
<tr><td>Maximum</td><td>94</td><td>98</td></tr>
</table>`,
    parts: [
      {
        label: '(a)',
        prompt: 'Compare the distributions of test scores for the two sections. Your comparison should address shape, center, and spread.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Compares center using appropriate statistics in context.',
            keywords: ['Section A higher mean', '76.4 vs 74.8', 'median higher', 'center']
          },
          {
            points: 1,
            description: 'Compares spread and comments on shape using mean vs median relationship.',
            keywords: ['Section B more spread', 'standard deviation 12.1 vs 8.2', 'left skewed', 'mean less than median']
          }
        ],
        sampleAnswer: 'Center: Section A has a slightly higher mean (76.4) and median (78.0) than Section B (mean 74.8, median 76.5), indicating Section A performed slightly better on average. Spread: Section B has much greater variability in scores, with a standard deviation of 12.1 compared to Section A\'s 8.2. The range for Section B (42 to 98 = 56) is also larger than Section A\'s (55 to 94 = 39). Shape: Both distributions appear to be slightly left-skewed because the mean is less than the median in both cases, meaning there are some lower scores pulling the mean down.'
      },
      {
        label: '(b)',
        prompt: 'A student in Section B scored 90 on the test. Calculate and interpret the z-score for this student.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Correctly calculates the z-score using the formula.',
            keywords: ['z = (90 − 74.8)/12.1', 'z = 1.256', 'z ≈ 1.26']
          },
          {
            points: 1,
            description: 'Interprets the z-score in context.',
            keywords: ['1.26 standard deviations above', 'above the mean', 'Section B']
          }
        ],
        sampleAnswer: 'z = (90 − 74.8) / 12.1 = 15.2 / 12.1 ≈ 1.26. The student\'s score of 90 is approximately 1.26 standard deviations above the mean score for Section B. This indicates the student performed well relative to the other students in that section.'
      }
    ]
  },

  // ===== SHORT FRQ 2: Experimental Design =====
  {
    id: 'stats-short-2',
    type: 'short',
    unit: 3,
    title: 'Fertilizer and Plant Growth Experiment',
    prompt: 'A botanist wants to investigate whether a new organic fertilizer increases the growth of tomato plants compared to a standard fertilizer. She has 40 tomato seedlings of the same variety, all approximately the same height, available for the study. The seedlings will be grown in a greenhouse for 8 weeks.',
    totalPoints: 4,
    timeRecommendation: '~13 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Describe a completely randomized design for this experiment. Include the treatments, the response variable, and how randomization should be carried out.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Identifies treatments, experimental units, and response variable correctly.',
            keywords: ['two treatments', 'organic vs standard fertilizer', 'height or growth', '20 plants per group']
          },
          {
            points: 1,
            description: 'Describes a valid randomization procedure.',
            keywords: ['randomly assign', 'number 1 to 40', 'random number generator', 'equal groups']
          }
        ],
        sampleAnswer: 'Treatments: (1) new organic fertilizer and (2) standard fertilizer. Response variable: the growth in height (in cm) of the tomato plants after 8 weeks. Randomization: Number the 40 seedlings from 1 to 40. Use a random number generator to select 20 numbers; those seedlings receive the organic fertilizer. The remaining 20 seedlings receive the standard fertilizer. All plants should be grown under the same conditions (same soil, watering schedule, sunlight, temperature) in the greenhouse. After 8 weeks, compare the mean growth in height between the two groups.'
      },
      {
        label: '(b)',
        prompt: 'Explain why it is important to randomly assign the seedlings to treatment groups rather than allowing the botanist to choose which seedlings get each fertilizer.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains that randomization helps balance confounding variables across groups.',
            keywords: ['confounding variables', 'balance', 'bias', 'causal', 'lurking variables']
          }
        ],
        sampleAnswer: 'Random assignment helps balance potential confounding variables (such as slight differences in initial health, root development, or seedling vigor) across the two treatment groups. This ensures that any observed difference in growth can be attributed to the fertilizer rather than to pre-existing differences between the groups. Without randomization, the botanist might consciously or unconsciously assign healthier-looking seedlings to one group, introducing bias.'
      },
      {
        label: '(c)',
        prompt: 'Identify one potential confounding variable in this experiment and explain how the design described in part (a) helps control for it.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Identifies a specific confounding variable and explains how the design controls for it.',
            keywords: ['sunlight', 'watering', 'soil quality', 'same conditions', 'controlled']
          }
        ],
        sampleAnswer: 'One potential confounding variable is the amount of sunlight each plant receives, since different locations in the greenhouse may receive different amounts of light. The design controls for this by growing all plants in the same greenhouse, and random assignment makes it likely that both treatment groups have plants in various locations, balancing the effect of sunlight differences across groups.'
      }
    ]
  },

  // ===== SHORT FRQ 3: Probability (Two-Way Table) =====
  {
    id: 'stats-short-3',
    type: 'short',
    unit: 4,
    title: 'Student Transportation Survey',
    prompt: 'A survey of 400 high school students asked about their grade level (underclassman or upperclassman) and primary mode of transportation to school. The results are summarized in the two-way table below.',
    totalPoints: 4,
    timeRecommendation: '~13 minutes',
    calculatorAllowed: true,
    dataTableHtml: `<table>
<tr><th></th><th>Car</th><th>Bus</th><th>Walk/Bike</th><th>Total</th></tr>
<tr><td>Underclassman</td><td>60</td><td>120</td><td>40</td><td>220</td></tr>
<tr><td>Upperclassman</td><td>110</td><td>45</td><td>25</td><td>180</td></tr>
<tr><td>Total</td><td>170</td><td>165</td><td>65</td><td>400</td></tr>
</table>`,
    parts: [
      {
        label: '(a)',
        prompt: 'If a student is selected at random, find the probability that the student is an upperclassman who drives a car to school.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Correctly computes the joint probability.',
            keywords: ['110/400', '0.275', 'joint probability', '11/40']
          }
        ],
        sampleAnswer: 'P(upperclassman and car) = 110/400 = 0.275.'
      },
      {
        label: '(b)',
        prompt: 'Given that a student rides the bus, what is the probability that the student is an underclassman? Show your work.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Correctly computes the conditional probability using the appropriate formula.',
            keywords: ['P(under | bus)', '120/165', '0.727', 'conditional probability']
          }
        ],
        sampleAnswer: 'P(underclassman | bus) = 120/165 ≈ 0.727. Given that a randomly selected student rides the bus, there is approximately a 72.7% probability that the student is an underclassman.'
      },
      {
        label: '(c)',
        prompt: 'Are the events "being an upperclassman" and "driving a car" independent? Justify your answer using probabilities.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Calculates the relevant probabilities correctly.',
            keywords: ['P(upper) = 180/400 = 0.45', 'P(car) = 170/400 = 0.425', 'P(upper and car) = 0.275']
          },
          {
            points: 1,
            description: 'Correctly compares P(A and B) to P(A)×P(B) or uses conditional probability to determine independence.',
            keywords: ['0.45 × 0.425 = 0.191', '0.275 ≠ 0.191', 'not independent', 'dependent']
          }
        ],
        sampleAnswer: 'P(upperclassman) = 180/400 = 0.45. P(car) = 170/400 = 0.425. If independent, P(upper and car) should equal P(upper) × P(car) = 0.45 × 0.425 = 0.19125. But P(upper and car) = 110/400 = 0.275. Since 0.275 ≠ 0.191, the events are not independent. Upperclassmen are more likely to drive a car than would be expected if the events were independent.'
      }
    ]
  },

  // ===== SHORT FRQ 4: Confidence Interval for a Proportion =====
  {
    id: 'stats-short-4',
    type: 'short',
    unit: 6,
    title: 'Voter Support for School Bond',
    prompt: 'A local school district is considering a bond measure to fund building renovations. A random sample of 450 registered voters in the district is surveyed, and 261 of them say they support the bond measure.',
    totalPoints: 4,
    timeRecommendation: '~13 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Construct a 95% confidence interval for the true proportion of registered voters in the district who support the bond measure. Show all steps including conditions, calculations, and the interval.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Checks conditions for inference (random sample, 10% condition, large counts).',
            keywords: ['random sample', 'np̂ ≥ 10', 'n(1−p̂) ≥ 10', '261 ≥ 10', '189 ≥ 10']
          },
          {
            points: 1,
            description: 'Correctly computes the sample proportion and standard error.',
            keywords: ['p̂ = 261/450 = 0.58', 'SE = √(0.58 × 0.42 / 450)', 'SE ≈ 0.0233']
          },
          {
            points: 1,
            description: 'Constructs the interval correctly using z* = 1.96.',
            keywords: ['0.58 ± 1.96(0.0233)', '(0.534, 0.626)', 'z* = 1.96']
          }
        ],
        sampleAnswer: 'Conditions: (1) Random: stated as a random sample. (2) 10% condition: 450 is less than 10% of all registered voters in the district (assumed). (3) Large counts: np̂ = 261 ≥ 10 and n(1 − p̂) = 189 ≥ 10. ✓\n\np̂ = 261/450 ≈ 0.58\nSE = $\\sqrt{0.58 \\times 0.42 / 450}$ ≈ 0.02328\n95% CI: 0.58 ± 1.96(0.02328) = 0.58 ± 0.04563 = (0.534, 0.626)\n\nWe are 95% confident that the true proportion of registered voters who support the bond measure is between 0.534 and 0.626.'
      },
      {
        label: '(b)',
        prompt: 'Based on your interval, is there convincing evidence that more than half of registered voters support the bond measure? Explain.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Uses the confidence interval to make a conclusion about whether p > 0.5.',
            keywords: ['entire interval above 0.5', '0.534 > 0.5', 'convincing evidence', 'majority support']
          }
        ],
        sampleAnswer: 'Yes. The entire 95% confidence interval (0.534, 0.626) is above 0.50. Since all plausible values of the true proportion are greater than 0.50, there is convincing evidence that more than half of registered voters in the district support the bond measure.'
      }
    ]
  },

  // ===== SHORT FRQ 5: Hypothesis Test for a Mean =====
  {
    id: 'stats-short-5',
    type: 'short',
    unit: 6,
    title: 'Battery Life Claim',
    prompt: 'A battery manufacturer claims that their AA batteries last an average of 48 hours of continuous use. A consumer testing agency suspects the batteries last less than 48 hours. The agency tests a random sample of 36 batteries and finds a sample mean life of 46.8 hours with a sample standard deviation of 4.2 hours.',
    totalPoints: 4,
    timeRecommendation: '~13 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'State the null and alternative hypotheses for this test.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'States hypotheses correctly with proper notation and direction.',
            keywords: ['H₀: μ = 48', 'Hₐ: μ < 48', 'one-sided', 'left-tailed']
          }
        ],
        sampleAnswer: '$H_{0}$: μ = 48 hours (the true mean battery life is 48 hours)\n$H_{a}$: μ < 48 hours (the true mean battery life is less than 48 hours)'
      },
      {
        label: '(b)',
        prompt: 'Calculate the test statistic and the p-value. Show your work.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Correctly calculates the t-test statistic.',
            keywords: ['t = (46.8 − 48)/(4.2/√36)', 't = −1.2/0.7', 't = −1.714', 'df = 35']
          },
          {
            points: 1,
            description: 'Finds or estimates the p-value correctly.',
            keywords: ['p-value ≈ 0.0477', 'between 0.025 and 0.05', 'tcdf', 'left tail']
          }
        ],
        sampleAnswer: 'Test statistic: t = (x̄ − $\\mu_{0}$)/(s/√n) = $(46.8 - 48)/(4.2/\\sqrt{36})$ = −1.2/0.7 = −1.714\nDegrees of freedom: df = 36 − 1 = 35\np-value: P(t < −1.714 | df = 35) ≈ 0.0477 (using t-distribution table or calculator)'
      },
      {
        label: '(c)',
        prompt: 'Using a significance level of α = 0.05, state your conclusion in the context of the problem. Include a check of the conditions for inference.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Checks conditions and states a conclusion in context linked to the p-value and α.',
            keywords: ['random sample', 'n = 36 ≥ 30', 'reject H₀', 'convincing evidence', 'less than 48 hours']
          }
        ],
        sampleAnswer: 'Conditions: (1) Random: stated as a random sample. (2) Normal: n = 36 ≥ 30, so by the Central Limit Theorem the sampling distribution of x̄ is approximately normal. (3) 10% condition: 36 batteries is less than 10% of all batteries produced. ✓\n\nSince the p-value (≈ 0.0477) is less than α = 0.05, we reject $H_{0}$. There is convincing evidence that the true mean battery life is less than 48 hours. The manufacturer\'s claim appears to be overstated.'
      }
    ]
  },

  // ===== SHORT FRQ 6: Chi-Square Test =====
  {
    id: 'stats-short-6',
    type: 'short',
    unit: 6,
    title: 'Candy Color Distribution',
    prompt: 'A candy company claims that the colors in a bag of their candy are distributed as follows: 30% red, 25% blue, 20% green, 15% yellow, and 10% orange. A statistics student buys a large bag and counts the colors. The results from a sample of 200 candies are shown below.',
    totalPoints: 4,
    timeRecommendation: '~13 minutes',
    calculatorAllowed: true,
    dataTableHtml: `<table>
<tr><th>Color</th><th>Red</th><th>Blue</th><th>Green</th><th>Yellow</th><th>Orange</th></tr>
<tr><td>Observed</td><td>72</td><td>40</td><td>38</td><td>34</td><td>16</td></tr>
<tr><td>Expected</td><td>60</td><td>50</td><td>40</td><td>30</td><td>20</td></tr>
</table>`,
    parts: [
      {
        label: '(a)',
        prompt: 'State the null and alternative hypotheses for a chi-square goodness-of-fit test.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'States hypotheses correctly in terms of the claimed distribution.',
            keywords: ['H₀: distribution matches', 'claimed proportions', 'Hₐ: at least one proportion differs', 'goodness of fit']
          }
        ],
        sampleAnswer: '$H_{0}$: The true distribution of candy colors matches the company\'s claimed distribution (30% red, 25% blue, 20% green, 15% yellow, 10% orange).\n$H_{a}$: The true distribution of candy colors does not match the company\'s claimed distribution (at least one proportion is different).'
      },
      {
        label: '(b)',
        prompt: 'Calculate the chi-square test statistic. Show your work.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Uses the correct chi-square formula with all five terms.',
            keywords: ['χ² = Σ(O − E)²/E', '(72−60)²/60', '(40−50)²/50', 'five terms']
          },
          {
            points: 1,
            description: 'Computes the correct test statistic value.',
            keywords: ['2.4 + 2.0 + 0.1 + 0.533 + 0.8', 'χ² = 5.833', 'χ² ≈ 5.83']
          }
        ],
        sampleAnswer: '$\\chi^{2}$ = $\\Sigma (O - E)^{2}/E$\n= $(72 - 60)^{2}/60$ + $(40 - 50)^{2}/50$ + $(38 - 40)^{2}/40$ + $(34 - 30)^{2}/30$ + $(16 - 20)^{2}/20$\n= 144/60 + 100/50 + 4/40 + 16/30 + 16/20\n= 2.4 + 2.0 + 0.1 + 0.533 + 0.8\n= 5.833'
      },
      {
        label: '(c)',
        prompt: 'The p-value for this test with 4 degrees of freedom is 0.212. State your conclusion at the α = 0.05 significance level. Check the conditions for the test.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Checks conditions (expected counts ≥ 5, random sample) and states conclusion in context with linkage to p-value.',
            keywords: ['all expected counts ≥ 5', 'fail to reject', 'p-value 0.212 > 0.05', 'not convincing evidence', 'consistent with claimed']
          }
        ],
        sampleAnswer: 'Conditions: (1) The sample is assumed to be a random selection of candies from the company\'s production. (2) All expected counts are at least 5 (smallest is 20). ✓\n\nSince the p-value (0.212) is greater than α = 0.05, we fail to reject $H_{0}$. There is not convincing evidence that the true distribution of candy colors differs from the company\'s claimed distribution. The observed counts are consistent with the claimed percentages.'
      }
    ]
  }
]

// ===== Export Functions =====

export function getStatsFRQs(): StatsFRQ[] {
  return statsFRQs
}

export function getLongFRQs(): StatsFRQ[] {
  return statsFRQs.filter(q => q.type === 'long')
}

export function getShortFRQs(): StatsFRQ[] {
  return statsFRQs.filter(q => q.type === 'short')
}

export function generateFullExamFRQs(): { long: StatsFRQ[]; short: StatsFRQ[]; totalPoints: number; totalTime: string } {
  const longPool = getLongFRQs()
  const shortPool = getShortFRQs()

  // Randomly select 1 long FRQ (investigative task)
  const selectedLong = [longPool[Math.floor(Math.random() * longPool.length)]]

  // Randomly select 5 short FRQs from the pool of 6
  const shuffledShort = [...shortPool].sort(() => Math.random() - 0.5)
  const selectedShort = shuffledShort.slice(0, 5)

  const totalPoints = selectedLong.reduce((sum, q) => sum + q.totalPoints, 0) +
    selectedShort.reduce((sum, q) => sum + q.totalPoints, 0)

  return {
    long: selectedLong,
    short: selectedShort,
    totalPoints,
    totalTime: '90 minutes'
  }
}
