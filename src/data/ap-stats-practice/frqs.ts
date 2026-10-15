import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Statistics — Section II, built to the revised 2026–27 course (first exam May 2027).
 * Four 10-point questions in 90 minutes, each 12.5% of the exam, in the published order:
 *   Q1 Multi-Focus on Practices 1 and 2 (formulate questions, collect data)
 *   Q2 Multi-Focus on Practices 3 and 4 (analyze data, interpret results)
 *   Q3 Inference (a complete hypothesis test)
 *   Q4 Multi-Focus on Practices 2, 3, and 4 (several content areas)
 * The old Investigative Task is gone. Each rubric line is one point, so every question sums to 10.
 * Graphing calculator (plus the built-in Desmos) and the formula sheet and tables are allowed.
 */

export const FRQS: SAQItem[] = [
  /* ---- Q1: Multi-Focus on Practices 1 and 2 ---- */
  {
    type: 'saq',
    topic: 'frq-1-practices-1-2',
    prompt: `**Question 1 — Multi-Focus on Practices 1 and 2 (10 points)**

A city parks department wants to learn how adult residents of the city use its parks. The survey will ask each adult how many hours per week, on average, they spend in city parks and whether or not they own a dog. Three plans for collecting the data were proposed.

- **Plan X:** Paper survey forms are left in boxes at the entrance of every city park. Any adult who wants to may fill one out and drop it in a box.
- **Plan Y:** The city is divided into 40 neighborhoods. Four neighborhoods are randomly selected, and every adult who lives in those four neighborhoods is surveyed.
- **Plan Z:** The city has 5 districts. From a list of all adult residents of each district, 100 adults are randomly selected, and all 500 selected adults are surveyed.

Use the given information to respond to parts A, B, C, D, and E.`,
    parts: [
      {
        letter: 'A',
        question: '(i) Identify the sampling method used in Plan Y. (ii) Identify the sampling method used in Plan Z.',
        rubric: [
          { id: 'a1', label: '1 pt — Plan Y is a cluster (random) sample', description: 'Neighborhoods are the clusters: a random selection of whole groups, with every adult in the chosen groups surveyed.' },
          { id: 'a2', label: '1 pt — Plan Z is a stratified random sample', description: 'Districts are the strata: a separate random sample is taken from within every district.' },
        ],
      },
      {
        letter: 'B',
        question: '(i) Explain why the results from Plan X should not be generalized to all adult residents of the city. (ii) Explain one benefit of selecting adults separately from each district, as Plan Z does, rather than taking one simple random sample of 500 adults from the whole city.',
        rubric: [
          { id: 'b1', label: '1 pt — Plan X: voluntary response (and undercoverage) explained in context', description: 'Only adults who visit the parks see the forms, and they choose whether to respond, so the sample over-represents frequent park users; the average weekly hours would likely be overestimated. The sample is not randomly selected, so it cannot be generalized to all adults in the city.' },
          { id: 'b2', label: '1 pt — Plan Z: benefit of stratifying, tied to the districts', description: 'Every district is guaranteed to be represented. If park use differs from district to district (for example, because some districts have more parks), stratifying reduces the variability of the estimate compared with a simple random sample of the same size.' },
        ],
      },
      {
        letter: 'C',
        question: '(i) Identify the two variables in the survey and classify each as categorical or quantitative. (ii) Identify a graphical representation that would be appropriate for comparing the weekly park hours of dog owners with those of adults who do not own a dog, and explain why it is appropriate.',
        rubric: [
          { id: 'c1', label: '1 pt — Both variables identified and correctly classified', description: 'Hours per week spent in city parks is quantitative; dog ownership (yes or no) is categorical.' },
          { id: 'c2', label: '1 pt — Appropriate comparative graph with a reason', description: 'Side-by-side (parallel) boxplots, or dotplots or histograms on a common scale, one for each dog-ownership group. These display the distribution of a quantitative variable for each category so center, spread and shape can be compared.' },
        ],
      },
      {
        letter: 'D',
        question: 'Using the data from Plan Z, the department finds that dog owners in the sample spend more hours per week in parks, on average, than adults who do not own a dog. Explain whether the department can conclude that owning a dog causes adults to spend more time in parks.',
        rubric: [
          { id: 'd1', label: '1 pt — No: observational study, with a confounding variable described', description: 'No treatment was assigned, so this is an observational study and cannot establish cause and effect. A confounding variable such as living near a park, or general enjoyment of outdoor activity, could be associated with both dog ownership and time spent in parks.' },
        ],
      },
      {
        letter: 'E',
        question: 'The department believes that, on average, dog owners in the city spend more time in parks each week than adults who do not own a dog. Determine a valid investigative question for this study. Make sure all three components of a valid investigative question are included in your response.',
        rubric: [
          { id: 'e1', label: '1 pt — First component: the variables of interest', description: 'Names dog ownership (owner or not) and weekly hours spent in city parks.' },
          { id: 'e2', label: '1 pt — Second component: the parameters and the direction of the alternative', description: 'The mean weekly park hours for dog owners and for non-owners, with the direction "greater than" for dog owners (for example, "Is the mean weekly time in parks greater for dog owners than for adults who do not own a dog?"). "Different" or "equal" does not match the department\'s belief.' },
          { id: 'e3', label: '1 pt — Third component: the population', description: 'All adult residents of the city (Plan Z is a random sample from lists of all adults in every district). "Everyone in the parks" or "the 500 adults surveyed" does not earn the point.' },
        ],
      },
    ],
  },

  /* ---- Q2: Multi-Focus on Practices 3 and 4 ---- */
  {
    type: 'saq',
    topic: 'frq-2-practices-3-4',
    prompt: `**Question 2 — Multi-Focus on Practices 3 and 4 (10 points)**

A food delivery company recorded the delivery time, in minutes, for a random sample of 60 orders from each of two restaurants, North Grill and South Grill. The summary statistics are shown.

| Restaurant | $n$ | Mean | SD | Min | $Q_1$ | Median | $Q_3$ | Max |
|---|---|---|---|---|---|---|---|---|
| North Grill | 60 | 31.2 | 6.1 | 18 | 27 | 31 | 35 | 46 |
| South Grill | 60 | 34.9 | 11.8 | 20 | 25 | 30 | 41 | 82 |

Use the given information to respond to parts A, B, C, D, and E. Show the work that leads to your answers.`,
    parts: [
      {
        letter: 'A',
        question: 'Use the $1.5 \\times \\text{IQR}$ rule to determine whether there are any outliers in (i) the North Grill delivery times and (ii) the South Grill delivery times.',
        rubric: [
          { id: 'a1', label: '1 pt — North Grill: no outliers, with fences shown', description: 'IQR = 35 − 27 = 8, so $1.5 \\times 8 = 12$. Fences are 27 − 12 = 15 and 35 + 12 = 47. The minimum (18) and maximum (46) are inside the fences, so there are no outliers.' },
          { id: 'a2', label: '1 pt — South Grill: at least one high outlier, with fences shown', description: 'IQR = 41 − 25 = 16, so $1.5 \\times 16 = 24$. Fences are 25 − 24 = 1 and 41 + 24 = 65. The maximum of 82 is above 65, so there is at least one high outlier; there are no low outliers.' },
        ],
      },
      {
        letter: 'B',
        question: 'Describe the most likely shape of the distribution of South Grill delivery times. Justify your answer using the summary statistics.',
        rubric: [
          { id: 'b1', label: '1 pt — Skewed to the right', description: 'The South Grill distribution is most likely skewed to the right (positively skewed).' },
          { id: 'b2', label: '1 pt — Justification from the summary statistics', description: 'Any of: the mean (34.9) is greater than the median (30); the distance from the median to $Q_3$ (11) is greater than from $Q_1$ to the median (5); the maximum is far above $Q_3$ (an outlier at 82) while the minimum is close to $Q_1$.' },
        ],
      },
      {
        letter: 'C',
        question: 'Compare the centers and the variability of the two distributions of delivery times. Justify your choice of which summary statistics to use.',
        rubric: [
          { id: 'c1', label: '1 pt — Centers compared with resistant measures', description: 'The medians are similar: 31 minutes for North Grill and 30 minutes for South Grill.' },
          { id: 'c2', label: '1 pt — Variability compared with resistant measures', description: 'South Grill\'s delivery times are more variable: its IQR (16 minutes) is twice North Grill\'s (8 minutes).' },
          { id: 'c3', label: '1 pt — Justifies median and IQR', description: 'South Grill\'s distribution is skewed and has a high outlier, which pull the mean and standard deviation upward, so the resistant median and IQR are better summaries for comparing the two restaurants.' },
        ],
      },
      {
        letter: 'D',
        question: 'One North Grill order took 40 minutes. Calculate the z-score for this delivery time, using the North Grill sample mean and standard deviation, and interpret it in context.',
        rubric: [
          { id: 'd1', label: '1 pt — z-score calculated', description: '$z = (40 - 31.2)/6.1 \\approx 1.44$.' },
          { id: 'd2', label: '1 pt — Interpretation in context', description: 'The 40-minute delivery time is about 1.44 standard deviations above the mean delivery time for the sampled North Grill orders.' },
        ],
      },
      {
        letter: 'E',
        question: 'A customer wants the restaurant that is more likely to deliver within 40 minutes. Based on your work, which restaurant would you recommend? Justify your answer.',
        rubric: [
          { id: 'e1', label: '1 pt — North Grill, justified with the distributions', description: 'North Grill: at least 75% of its sampled deliveries took 35 minutes or less and its longest was 46 minutes, while about 25% of South Grill\'s deliveries took 41 minutes or longer ($Q_3 = 41$) and some took far longer. The two centers are similar, so the consistency of North Grill is what matters.' },
        ],
      },
    ],
  },

  /* ---- Q3: Inference ---- */
  {
    type: 'saq',
    topic: 'frq-3-inference',
    prompt: `**Question 3 — Inference (10 points)**

A psychology researcher wants to know whether background music affects memory. She recruited 64 student volunteers and randomly assigned 32 of them to study a list of 30 words in silence and the other 32 to study the same list while instrumental music played. After 10 minutes of study, each student wrote down as many of the words as he or she could recall. The results are summarized below.

| Condition | $n$ | Mean words recalled | SD |
|---|---|---|---|
| Silence | 32 | 14.6 | 3.4 |
| Music | 32 | 12.9 | 3.8 |

At the $\\alpha = 0.05$ level of significance, complete the appropriate inference procedure to determine whether there is convincing statistical evidence of a difference in the mean number of words recalled for students like these when studying in silence and when studying with music.

Use the given information to respond to parts A, B, C, and D.`,
    parts: [
      {
        letter: 'A',
        question: 'Identify and classify the variables in the study.',
        rubric: [
          { id: 'a1', label: '1 pt — Variables identified', description: 'The explanatory variable is the study condition (silence or music); the response variable is the number of words recalled.' },
          { id: 'a2', label: '1 pt — Variables classified', description: 'Study condition is categorical; number of words recalled is quantitative.' },
        ],
      },
      {
        letter: 'B',
        question: 'Identify the appropriate inference procedure.',
        rubric: [
          { id: 'b1', label: '1 pt — Two-sample t-test for a difference between two means', description: 'A two-sample t-test for $\\mu_S - \\mu_M$ (the two groups were formed by random assignment and are independent, so this is not a paired procedure).' },
        ],
      },
      {
        letter: 'C',
        question: 'Complete the inference procedure, including stating hypotheses, checking conditions, and calculating the test statistic and p-value.',
        rubric: [
          { id: 'c1', label: '1 pt — Hypotheses', description: '$H_0: \\mu_S - \\mu_M = 0$ and $H_a: \\mu_S - \\mu_M \\neq 0$ (or $H_0: \\mu_S = \\mu_M$, $H_a: \\mu_S \\neq \\mu_M$). The alternative must be two-sided, because the question asks about a difference.' },
          { id: 'c2', label: '1 pt — Parameters defined in context', description: '$\\mu_S$ and $\\mu_M$ are the true mean numbers of words recalled for students like these who study in silence and with music, respectively.' },
          { id: 'c3', label: '1 pt — Randomization condition', description: 'The students were randomly assigned to the two conditions. (The 10% condition is not needed, because this is a randomized experiment on volunteers, not a random sample.)' },
          { id: 'c4', label: '1 pt — Normality condition', description: 'Both group sizes are at least 30 ($n_S = n_M = 32$), so the sampling distribution of $\\bar{x}_S - \\bar{x}_M$ is approximately normal.' },
          { id: 'c5', label: '1 pt — Test statistic and p-value', description: '$SE = \\sqrt{3.4^2/32 + 3.8^2/32} \\approx 0.901$, so $t = (14.6 - 12.9)/0.901 \\approx 1.89$. With $df \\approx 61.2$ (technology), p-value $\\approx 0.064$. (Using the conservative $df = 31$ gives p-value $\\approx 0.069$.)' },
          { id: 'c6', label: '1 pt — Comparison with the significance level', description: 'Because the p-value (about 0.064) is greater than $\\alpha = 0.05$, fail to reject $H_0$.' },
        ],
      },
      {
        letter: 'D',
        question: 'Justify a conclusion in context.',
        rubric: [
          { id: 'd1', label: '1 pt — Conclusion in context, not accepting the null', description: 'There is not convincing statistical evidence of a difference in the mean number of words recalled when studying in silence and when studying with music, for students like those in the study. This does not show that the means are equal.' },
        ],
      },
    ],
  },

  /* ---- Q4: Multi-Focus on Practices 2, 3, and 4 ---- */
  {
    type: 'saq',
    topic: 'frq-4-practices-2-3-4',
    prompt: `**Question 4 — Multi-Focus on Practices 2, 3, and 4 (10 points)**

A regional airline advertises that 85% of its flights arrive on time.

A travel writer plans to take 12 flights on this airline. Assume that each flight arrives on time with probability 0.85, independently of the others, and let $X$ be the number of the 12 flights that arrive on time.

Later, an aviation analyst selected a random sample of 400 of the airline's flights from the past year and found that 324 of them arrived on time.

Use the given information to respond to parts A, B, C, D, and E. Show all work for calculations.`,
    parts: [
      {
        letter: 'A',
        question: '(i) Identify the probability distribution of $X$, including its parameters. (ii) Calculate the probability that at least 11 of the writer\'s 12 flights arrive on time.',
        rubric: [
          { id: 'a1', label: '1 pt — Binomial with n = 12 and p = 0.85', description: 'There is a fixed number of independent trials (12 flights), each with the same probability of success (on time, 0.85), and $X$ counts successes.' },
          { id: 'a2', label: '1 pt — P(X ≥ 11) ≈ 0.443, with work', description: '$P(X = 11) + P(X = 12) = \\binom{12}{11}(0.85)^{11}(0.15) + (0.85)^{12} \\approx 0.301 + 0.142 = 0.443$ (or 1 − binomcdf(12, 0.85, 10)).' },
        ],
      },
      {
        letter: 'B',
        question: 'Calculate the mean and standard deviation of $X$, and interpret the mean in context.',
        rubric: [
          { id: 'b1', label: '1 pt — Mean and standard deviation', description: '$\\mu_X = np = 12(0.85) = 10.2$ flights and $\\sigma_X = \\sqrt{np(1-p)} = \\sqrt{12(0.85)(0.15)} = \\sqrt{1.53} \\approx 1.24$ flights.' },
          { id: 'b2', label: '1 pt — Mean interpreted as a long-run average', description: 'If many travelers each took 12 such flights (or the writer repeated the 12 flights many times), the average number of on-time flights per set of 12 would be about 10.2. It is not a prediction that exactly 10.2 flights will be on time.' },
        ],
      },
      {
        letter: 'C',
        question: 'The analyst wants to estimate the proportion of all of the airline\'s flights in the past year that arrived on time. (i) Identify the appropriate inference procedure. (ii) Verify the conditions for the procedure. (iii) Construct a 95% confidence interval. (iv) Interpret the interval in context.',
        rubric: [
          { id: 'c1', label: '1 pt — One-sample z-interval for a population proportion', description: 'The parameter $p$ is the proportion of all the airline\'s flights in the past year that arrived on time.' },
          { id: 'c2', label: '1 pt — Conditions verified', description: 'Random: a random sample of flights. 10%: 400 flights is less than 10% of the airline\'s flights in a year. Large counts: $n\\hat{p} = 324$ and $n(1 - \\hat{p}) = 76$ are both at least 10.' },
          { id: 'c3', label: '1 pt — Interval calculated', description: '$\\hat{p} = 324/400 = 0.81$. $0.81 \\pm 1.96\\sqrt{0.81(0.19)/400} = 0.81 \\pm 1.96(0.0196) = 0.81 \\pm 0.038$, giving about (0.772, 0.848).' },
          { id: 'c4', label: '1 pt — Interpretation in context', description: 'We are 95% confident that the interval from 0.772 to 0.848 captures the true proportion of all of the airline\'s flights in the past year that arrived on time.' },
        ],
      },
      {
        letter: 'D',
        question: 'Does the interval from part C give convincing evidence that the airline\'s advertised on-time rate of 85% was too high for the past year? Explain.',
        rubric: [
          { id: 'd1', label: '1 pt — Yes, because 0.85 is not in the interval', description: 'Every plausible value in the interval is below 0.85, so 0.85 is not a plausible value for the true on-time proportion, and the data give convincing evidence that the advertised rate was too high.' },
        ],
      },
      {
        letter: 'E',
        question: 'Identify one change the analyst could make to obtain a narrower confidence interval, and state a drawback of that change.',
        rubric: [
          { id: 'e1', label: '1 pt — A valid change with its cost', description: 'Increase the sample size (costs more time and effort to collect), or lower the confidence level, for example to 90% (the method captures the true proportion less often).' },
        ],
      },
    ],
  },
]
