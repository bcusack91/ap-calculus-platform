// AP Statistics Free-Response Questions
// Built to the revised 2026–27 course (first exam May 2027): four FRQs per exam, 90 minutes,
// each worth 10 points (12.5% of the exam), in the published order:
//   Q1 Multi-Focus on Practices 1 and 2 (formulate investigative questions, collect data)
//   Q2 Multi-Focus on Practices 3 and 4 (analyze data, interpret results)
//   Q3 Inference (a complete hypothesis test or confidence interval)
//   Q4 Multi-Focus on Practices 2, 3, and 4 (several content areas)
// Two questions per type (two complete exams). The old Investigative Task is gone.
// Units follow the 2026–27 CED: 1 Exploring One-Variable Data and Collecting Data,
// 2 Probability, Random Variables, and Probability Distributions, 3 Inference for
// Categorical Data: Proportions, 4 Inference for Quantitative Data: Means, 5 Regression Analysis.
// Nothing here uses removed content: combining random variables, the geometric distribution,
// chi-square goodness-of-fit, transformations to linearity, or inference for slope.
// Every rubric line is worth one point.

import { shuffleArray } from '@/lib/shuffle-options'

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

export type StatsFRQType = 'practices-1-2' | 'practices-3-4' | 'inference' | 'practices-2-3-4'

/** Exam order, labels, points, and suggested minutes for the four real FRQ types. */
export const STATS_FRQ_TYPES: { type: StatsFRQType; label: string; short: string; points: number; minutes: number }[] = [
  { type: 'practices-1-2', label: 'Multi-Focus on Practices 1 & 2', short: 'Q1', points: 10, minutes: 22 },
  { type: 'practices-3-4', label: 'Multi-Focus on Practices 3 & 4', short: 'Q2', points: 10, minutes: 22 },
  { type: 'inference', label: 'Inference', short: 'Q3', points: 10, minutes: 23 },
  { type: 'practices-2-3-4', label: 'Multi-Focus on Practices 2, 3 & 4', short: 'Q4', points: 10, minutes: 23 },
]

export interface StatsFRQ {
  id: string
  type: StatsFRQType
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
  // =========================================================================
  // Q1 (Practices 1 & 2) — 1: A fertilizer experiment with blocking
  // =========================================================================
  {
    id: 'stats-frq-q1-1',
    type: 'practices-1-2',
    unit: 1,
    title: 'Practices 1 & 2: Tomato Fertilizer Experiment',
    prompt:
      'A botanist wants to know whether a new organic fertilizer produces more growth in tomato plants than the standard fertilizer. She has 40 tomato seedlings of the same variety, all about the same height. The seedlings will grow for 8 weeks in a greenhouse that has 4 benches with 10 pots each. The two benches along the south wall get noticeably more sunlight than the two benches along the north wall. At the end of 8 weeks she will measure the growth in height, in centimeters, of each plant.\n\nUse the given information to respond to parts A, B, C, D, and E.',
    totalPoints: 10,
    timeRecommendation: '~22 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: 'A',
        prompt:
          '(i) Identify the experimental units and the treatments in this experiment. (ii) Identify the response variable and classify it as categorical or quantitative.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'The experimental units are the 40 tomato seedlings; the treatments are the new organic fertilizer and the standard fertilizer.',
            keywords: ['units are the 40', 'units are the seedlings', 'units are the tomato', 'experimental units: the', 'experimental units are the', 'organic fertilizer and the standard'],
          },
          {
            points: 1,
            description:
              'The response variable is the growth in height (in cm) of each plant after 8 weeks, which is quantitative.',
            keywords: ['growth in height', 'height growth', 'growth (cm)', 'response variable is the growth', 'response variable is growth'],
          },
        ],
        sampleAnswer:
          '(i) The experimental units are the 40 tomato seedlings. The treatments are (1) the new organic fertilizer and (2) the standard fertilizer.\n\n(ii) The response variable is the growth in height, in centimeters, of each plant over the 8 weeks. It is a quantitative variable.',
      },
      {
        label: 'B',
        prompt:
          'Describe a randomized block design for this experiment that accounts for the difference in sunlight between the benches. Include how the treatments would be randomly assigned.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Forms blocks by sunlight: the 20 pots on the sunny south benches are one block and the 20 pots on the shadier north benches are the other. (Using each of the 4 benches as a block, with 5 seedlings per fertilizer on each bench, also earns the point.)',
            keywords: ['block', 'blocks'],
          },
          {
            points: 1,
            description:
              'Within each block, randomly assigns 10 seedlings to each fertilizer with a described random method (for example, number the 20 seedlings 1 to 20 and use a random number generator to choose 10 distinct numbers for the organic fertilizer; the other 10 get the standard fertilizer).',
            keywords: ['random number generator', 'randomly select 10', 'randomly choose 10', 'random integers', 'draw 10', 'names in a hat', 'slips of paper', 'within each block'],
          },
        ],
        sampleAnswer:
          'Use sunlight as the blocking variable. Block 1 is the 20 pots on the two south benches (more sun); Block 2 is the 20 pots on the two north benches (less sun). Place 20 seedlings in each block.\n\nWithin each block, number the 20 seedlings from 1 to 20. Use a random number generator to select 10 different numbers from 1 to 20; those seedlings get the organic fertilizer, and the other 10 get the standard fertilizer. Do this separately in each block. After 8 weeks, compare the growth for the two fertilizers within each block.',
      },
      {
        label: 'C',
        prompt: 'Explain why blocking by bench location is a better choice here than a completely randomized design.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Sunlight likely affects plant growth. Blocking by sunlight accounts for that source of variability, so differences in growth within each block are more clearly due to the fertilizer, making a fertilizer effect easier to detect.',
            keywords: ['variability', 'variation', 'easier to detect', 'sunlight affects', 'sunlight could affect', 'accounts for sunlight'],
          },
        ],
        sampleAnswer:
          'The amount of sunlight probably affects how much a tomato plant grows. With blocking, each fertilizer is tested on both sunny and shady benches, and the comparison is made within plants that got similar sunlight. That removes the sunlight-related variability in growth from the comparison, so a real difference between the fertilizers is easier to detect.',
      },
      {
        label: 'D',
        prompt:
          'Suppose the plants given the organic fertilizer grow significantly more, on average, than the plants given the standard fertilizer. (i) Can the botanist conclude that the organic fertilizer causes more growth? Explain. (ii) To what group of plants can the results be generalized? Explain.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Yes: the treatments were randomly assigned, so a statistically significant difference can be attributed to the fertilizer (cause and effect).',
            keywords: ['randomly assigned', 'random assignment'],
          },
          {
            points: 1,
            description:
              'Only to tomato seedlings like these (same variety, similar size and growing conditions), because the 40 seedlings were not randomly selected from a larger population.',
            keywords: ['seedlings like these', 'plants like these', 'like the ones in', 'not randomly selected', 'not a random sample'],
          },
        ],
        sampleAnswer:
          '(i) Yes. The fertilizers were randomly assigned to the seedlings within each block, so other variables should be balanced between the groups. A statistically significant difference in mean growth can therefore be attributed to the fertilizer.\n\n(ii) The 40 seedlings were not randomly selected from a larger population, so the results apply only to tomato seedlings like these: the same variety, about the same size, grown in similar conditions.',
      },
      {
        label: 'E',
        prompt:
          'The botanist believes that, on average, tomato plants given the organic fertilizer grow more than tomato plants given the standard fertilizer. Determine a valid investigative question for this study. Make sure all three components of a valid investigative question are included in your response.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'First component, the variables of interest: the type of fertilizer (organic or standard) and the growth in height of the plant.',
            keywords: ['fertilizer'],
          },
          {
            points: 1,
            description:
              'Second component, the parameters and the direction: the mean growth for plants given the organic fertilizer compared with the mean growth for plants given the standard fertilizer, with the direction "greater than" for the organic fertilizer. "Different" does not match the botanist’s belief.',
            keywords: ['greater mean', 'mean growth greater', 'mean growth is greater', 'mean growth higher', 'mean growth larger', 'mean growth more', 'greater for plants', 'organic mean greater', 'more on average', 'greater on average', 'larger mean', 'higher mean'],
          },
          {
            points: 1,
            description:
              'Third component, the population: tomato seedlings like the ones in this study (same variety, similar size, grown in similar greenhouse conditions).',
            keywords: ['seedlings like these', 'plants like these', 'seedlings like the ones', 'plants like the ones', 'tomato plants like', 'tomato seedlings like'],
          },
        ],
        sampleAnswer:
          '"For tomato seedlings like these, is the mean growth in height over 8 weeks greater for plants given the new organic fertilizer than for plants given the standard fertilizer?"\n\nVariables: type of fertilizer and growth in height. Parameters and direction: the two mean growths, with the organic mean greater. Population: tomato seedlings like the 40 in this study.',
      },
    ],
  },

  // =========================================================================
  // Q1 (Practices 1 & 2) — 2: Sampling plans for a sleep survey
  // =========================================================================
  {
    id: 'stats-frq-q1-2',
    type: 'practices-1-2',
    unit: 1,
    title: 'Practices 1 & 2: Student Sleep Survey',
    prompt:
      'A high school has 1,600 students, 400 in each of grades 9, 10, 11, and 12. Every student belongs to one of 64 homerooms of 25 students each, and each homeroom contains students from only one grade. The principal wants to learn how many hours students sleep on a typical school night and whether they use their phones after midnight on school nights. Four plans for collecting the data were proposed.\n\n- **Plan 1:** Survey students in the cafeteria during the first lunch period who are willing to fill out the form.\n- **Plan 2:** From an alphabetical list of all 1,600 students, randomly choose a number from 1 to 16, survey that student, and then survey every 16th student on the list after that.\n- **Plan 3:** Randomly select 25 students from each grade and survey all 100.\n- **Plan 4:** Randomly select 4 of the 64 homerooms and survey every student in those homerooms.\n\nUse the given information to respond to parts A, B, C, D, and E.',
    totalPoints: 10,
    timeRecommendation: '~22 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: 'A',
        prompt: '(i) Identify the sampling method used in Plan 2. (ii) Identify the sampling method used in Plan 4.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Plan 2 is a systematic random sample (a random start, then every 16th student).',
            keywords: ['systematic'],
          },
          {
            points: 1,
            description: 'Plan 4 is a cluster sample: homerooms are the clusters, chosen at random, and every student in each chosen homeroom is surveyed.',
            keywords: ['cluster'],
          },
        ],
        sampleAnswer:
          '(i) Plan 2 is a systematic random sample: a random starting point from 1 to 16, then every 16th student on the list.\n\n(ii) Plan 4 is a cluster sample. The homerooms are the clusters; 4 are chosen at random and every student in those homerooms is surveyed.',
      },
      {
        label: 'B',
        prompt:
          '(i) Explain why Plan 1 is likely to give a biased estimate of the mean hours of sleep for all students at the school. (ii) One version of the survey asks, "Doctors recommend at least 8 hours of sleep for teenagers. How many hours do you usually sleep on a school night?" Explain how this wording could bias the estimate of the mean hours of sleep, and in which direction.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Plan 1 is a convenience sample with voluntary response: only students at first lunch who choose to respond are included, so the sample may differ systematically from all students (for example, first lunch may contain mostly some grades, and students who volunteer may differ in their sleep habits).',
            keywords: ['convenience', 'voluntary', 'volunteer', 'first lunch'],
          },
          {
            points: 1,
            description:
              'Response bias from the wording: mentioning the 8-hour recommendation pressures students to report more sleep than they get, so the estimate of the mean would likely be too high (an overestimate).',
            keywords: ['overestimate', 'too high', 'more sleep than', 'higher than the true', 'overreport', 'over-report', 'inflate'],
          },
        ],
        sampleAnswer:
          '(i) Plan 1 is a convenience sample with voluntary response. Only students who eat at first lunch can be chosen, and only those who choose to fill out the form are counted. First lunch may contain mostly certain grades, and students who volunteer may sleep differently from those who do not, so the sample mean may be systematically too high or too low.\n\n(ii) Mentioning that doctors recommend 8 hours pressures students to give an answer close to 8 hours. Students who sleep less are likely to overreport, so the sample mean would overestimate the true mean hours of sleep.',
      },
      {
        label: 'C',
        prompt:
          '(i) Identify the two variables the survey measures and classify each as categorical or quantitative. (ii) Identify a graphical display that would be appropriate for comparing the proportion of students who use their phones after midnight across the four grades, and explain why it is appropriate.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Hours of sleep on a school night is quantitative; phone use after midnight (yes or no) is categorical.',
            keywords: ['quantitative'],
          },
          {
            points: 1,
            description:
              'A segmented (stacked) bar chart or side-by-side bar chart of relative frequencies, one bar or group per grade. It shows the proportion of yes and no in each grade so the proportions can be compared.',
            keywords: ['segmented bar', 'stacked bar', 'side-by-side bar', 'side by side bar', 'mosaic'],
          },
        ],
        sampleAnswer:
          '(i) Hours of sleep on a school night is a quantitative variable. Whether the student uses a phone after midnight (yes or no) is a categorical variable.\n\n(ii) A segmented bar chart with one bar for each grade, each bar divided into the proportion of yes and no responses. Phone use is categorical, so a bar chart of relative frequencies is appropriate, and putting the grades side by side lets us compare the proportion of yes responses across grades even if the grade sample sizes differ.',
      },
      {
        label: 'D',
        prompt:
          'Explain one statistical benefit of using Plan 3 rather than a simple random sample of 100 students from the whole school.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Plan 3 is stratified by grade, which guarantees each grade is represented. If sleep differs by grade (for example, seniors sleep less than freshmen), stratifying reduces the variability of the estimate of the mean compared with a simple random sample of the same size.',
            keywords: ['stratif', 'each grade is represented', 'every grade is represented', 'less variab', 'reduces variab', 'reduce variab', 'more precise'],
          },
        ],
        sampleAnswer:
          'Plan 3 is a stratified random sample with grade as the strata. Sleep habits probably differ by grade (older students may stay up later). Stratifying guarantees that every grade is represented in proportion and removes the grade-to-grade variability from the estimate, so the estimate of the mean hours of sleep varies less from sample to sample than one from a simple random sample of 100.',
      },
      {
        label: 'E',
        prompt:
          'The principal believes that, on average, students who use their phones after midnight on school nights sleep fewer hours than students who do not. Determine a valid investigative question for this study. Make sure all three components of a valid investigative question are included in your response.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'First component, the variables of interest: phone use after midnight (yes or no) and hours of sleep on a school night.',
            keywords: ['phone'],
          },
          {
            points: 1,
            description:
              'Second component, the parameters and the direction: the mean hours of sleep for students who use phones after midnight compared with the mean for students who do not, with the direction "less than" for phone users. "Different" does not match the principal’s belief.',
            keywords: ['less for students who', 'phone-user mean less', 'mean hours of sleep less', 'mean sleep less', 'mean sleep is less', 'mean is less', 'mean is lower', 'less on average', 'fewer on average', 'fewer hours on average', 'lower mean', 'smaller mean', 'fewer mean'],
          },
          {
            points: 1,
            description:
              'Third component, the population: all students at this high school. "The students surveyed" does not earn the point.',
            keywords: ['all students at', 'all students in the school', 'all students in this school', 'all 1,600', 'all 1600', 'students at this high school', 'students at this school'],
          },
        ],
        sampleAnswer:
          '"For all students at this high school, is the mean number of hours of sleep on a school night less for students who use their phones after midnight than for students who do not?"\n\nVariables: phone use after midnight and hours of sleep. Parameters and direction: the two mean hours of sleep, with the phone-user mean less. Population: all 1,600 students at the school.',
      },
    ],
  },

  // =========================================================================
  // Q2 (Practices 3 & 4) — 1: Car age and fuel efficiency (regression)
  // =========================================================================
  {
    id: 'stats-frq-q2-1',
    type: 'practices-3-4',
    unit: 5,
    title: 'Practices 3 & 4: Car Age and Fuel Efficiency',
    prompt:
      'A consumer research group recorded the age, in years, and the highway fuel efficiency, in miles per gallon (mpg), of a random sample of 12 mid-size sedans of the same model. The data and the computer output for the least-squares regression of fuel efficiency on age are shown. A residual plot for the regression shows no apparent pattern.\n\nUse the given information to respond to parts A, B, C, D, and E. Show the work that leads to your answers.',
    totalPoints: 10,
    timeRecommendation: '~22 minutes',
    calculatorAllowed: true,
    dataTableHtml:
      '<table><tr><th>Car</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th></tr><tr><td>Age (years)</td><td>1</td><td>2</td><td>3</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>10</td><td>12</td><td>15</td></tr><tr><td>Highway mpg</td><td>33.4</td><td>34.6</td><td>31.6</td><td>33.9</td><td>32.1</td><td>29.6</td><td>30.5</td><td>28.9</td><td>26.6</td><td>26.4</td><td>24.9</td><td>21.0</td></tr></table><p>Computer output:</p><pre>Predictor    Coef\nConstant     35.374\nAge          -0.934\n\nS = 0.972   R-Sq = 94.9%   r = -0.974</pre>',
    parts: [
      {
        label: 'A',
        prompt: 'Describe the relationship between age and highway fuel efficiency for these cars.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Direction and form: a negative, linear relationship (older cars tend to get fewer mpg).',
            keywords: ['negative'],
          },
          {
            points: 1,
            description: 'Strength, with the value of r, in context: a strong relationship, $r = -0.974$.',
            keywords: ['strong'],
          },
        ],
        sampleAnswer:
          'There is a strong, negative, linear relationship between the age of a sedan and its highway fuel efficiency ($r = -0.974$): older cars of this model tend to get fewer miles per gallon. The residual plot shows no pattern, which supports a linear form.',
      },
      {
        label: 'B',
        prompt: '(i) Interpret the slope of the least-squares regression line in context. (ii) Interpret the y-intercept in context, and state whether the interpretation is reasonable.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Slope: for each additional year of age, the predicted highway fuel efficiency decreases by about 0.934 mpg. The interpretation must say "predicted" (or "on average") and be in context.',
            keywords: ['0.934'],
          },
          {
            points: 1,
            description:
              'Intercept: the predicted highway fuel efficiency of a new (0-year-old) car is about 35.374 mpg. This is reasonable because age 0 is just below the smallest age in the data (1 year).',
            keywords: ['35.374', '35.37', '35.4'],
          },
        ],
        sampleAnswer:
          '(i) For each additional year of age, the predicted highway fuel efficiency of this model of sedan decreases by about 0.934 mpg.\n\n(ii) The predicted highway fuel efficiency of a brand-new (age 0) car is about 35.374 mpg. Age 0 is just below the youngest car in the sample (1 year), so this interpretation is reasonable.',
      },
      {
        label: 'C',
        prompt: 'Car 10 is 10 years old and gets 26.4 mpg. Calculate the residual for Car 10 and interpret it in context.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Predicted value and residual: $\\hat{y} = 35.374 - 0.934(10) = 26.034$ mpg, so the residual is $26.4 - 26.034 = 0.366$ mpg (accept 0.36 to 0.37).',
            keywords: ['0.366', '0.37', '0.36'],
          },
          {
            points: 1,
            description:
              'Interpretation: Car 10 gets about 0.366 mpg more than the regression line predicts for a 10-year-old car (it is above the line).',
            keywords: ['more than predicted', 'more than the regression line predicts', 'more than the line predicts', 'higher than predicted', 'above the line', 'above the regression line', 'more than the predicted', 'higher than the predicted', 'underestimate'],
          },
        ],
        sampleAnswer:
          '$\\hat{y} = 35.374 - 0.934(10) = 26.034$ mpg.\n\nResidual $= y - \\hat{y} = 26.4 - 26.034 = 0.366$ mpg.\n\nCar 10 gets about 0.366 mpg more than the regression line predicts for a 10-year-old car of this model.',
      },
      {
        label: 'D',
        prompt:
          '(i) Interpret the value of $r^2$ in context. (ii) Interpret the value of $s$ in context.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              '$r^2$: about 94.9% of the variation in highway fuel efficiency is accounted for by the linear relationship with age.',
            keywords: ['94.9', '0.949'],
          },
          {
            points: 1,
            description:
              '$s$: the actual highway fuel efficiencies typically differ from the values predicted by the regression line by about 0.972 mpg.',
            keywords: ['0.972', '0.97 mpg'],
          },
        ],
        sampleAnswer:
          '(i) About 94.9% of the variation in highway fuel efficiency among these sedans is accounted for by the linear relationship between fuel efficiency and age.\n\n(ii) The actual highway fuel efficiencies typically differ from the values predicted by the least-squares line by about 0.972 mpg.',
      },
      {
        label: 'E',
        prompt:
          'A dealer uses the regression line to predict the highway fuel efficiency of a 25-year-old car of this model. Calculate the prediction and explain whether it should be trusted.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Prediction: $\\hat{y} = 35.374 - 0.934(25) \\approx 12.0$ mpg.',
            keywords: ['12.0', '12.02', '12 mpg', '12.03'],
          },
          {
            points: 1,
            description:
              'Not trustworthy: it is an extrapolation, because 25 years is far beyond the ages in the data (1 to 15 years), and the linear pattern may not continue.',
            keywords: ['extrapolat'],
          },
        ],
        sampleAnswer:
          '$\\hat{y} = 35.374 - 0.934(25) = 12.024$, so about 12.0 mpg.\n\nThis prediction should not be trusted. It is an extrapolation: the sample only includes cars from 1 to 15 years old, and there is no evidence that the linear decline continues out to 25 years.',
      },
    ],
  },

  // =========================================================================
  // Q2 (Practices 3 & 4) — 2: Comparing two sections' test scores
  // =========================================================================
  {
    id: 'stats-frq-q2-2',
    type: 'practices-3-4',
    unit: 1,
    title: 'Practices 3 & 4: Comparing Test Score Distributions',
    prompt:
      'Two sections of a statistics course took the same unit test. Summary statistics for the scores are shown.\n\nUse the given information to respond to parts A, B, C, D, and E. Show the work that leads to your answers.',
    totalPoints: 10,
    timeRecommendation: '~22 minutes',
    calculatorAllowed: true,
    dataTableHtml:
      '<table><tr><th>Section</th><th>n</th><th>Mean</th><th>SD</th><th>Min</th><th>Q1</th><th>Median</th><th>Q3</th><th>Max</th></tr><tr><td>A</td><td>28</td><td>76.4</td><td>8.2</td><td>55</td><td>71</td><td>78</td><td>83</td><td>94</td></tr><tr><td>B</td><td>32</td><td>74.8</td><td>12.1</td><td>38</td><td>67</td><td>76.5</td><td>84</td><td>98</td></tr></table>',
    parts: [
      {
        label: 'A',
        prompt:
          'Use the $1.5 \\times \\text{IQR}$ rule to determine whether there are any outliers in (i) the Section A scores and (ii) the Section B scores.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Section A: IQR = 83 − 71 = 12, so the fences are 71 − 18 = 53 and 83 + 18 = 101. The minimum (55) and maximum (94) are inside the fences: no outliers.',
            keywords: ['53'],
          },
          {
            points: 1,
            description:
              'Section B: IQR = 84 − 67 = 17, so the fences are 67 − 25.5 = 41.5 and 84 + 25.5 = 109.5. The minimum of 38 is below 41.5, so there is at least one low outlier.',
            keywords: ['41.5'],
          },
        ],
        sampleAnswer:
          '(i) Section A: IQR = 83 − 71 = 12 and $1.5 \\times 12 = 18$. The fences are 71 − 18 = 53 and 83 + 18 = 101. The minimum 55 and maximum 94 are both inside the fences, so Section A has no outliers.\n\n(ii) Section B: IQR = 84 − 67 = 17 and $1.5 \\times 17 = 25.5$. The fences are 67 − 25.5 = 41.5 and 84 + 25.5 = 109.5. The minimum of 38 is below 41.5, so Section B has at least one low outlier (and no high outliers).',
      },
      {
        label: 'B',
        prompt: 'Describe the most likely shape of the distribution of Section B scores. Justify your answer using the summary statistics.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Skewed to the left (negatively skewed).',
            keywords: ['skewed left', 'left skew', 'left-skew', 'skewed to the left', 'negatively skewed'],
          },
          {
            points: 1,
            description:
              'Justification: the mean (74.8) is less than the median (76.5); or the distance from Q1 to the median (9.5) is greater than from the median to Q3 (7.5); or the minimum (38) is much farther below Q1 than the maximum (98) is above Q3.',
            keywords: ['mean is less than the median', 'mean less than median', 'mean is less than median', 'mean (74.8) is less', '74.8 < 76.5', '74.8 is less', 'mean < median'],
          },
        ],
        sampleAnswer:
          'The Section B distribution is most likely skewed to the left. The mean (74.8) is less than the median (76.5), the distance from Q1 to the median (9.5) is greater than from the median to Q3 (7.5), and the minimum (38) is 29 points below Q1 while the maximum (98) is only 14 points above Q3. The long tail of low scores pulls the mean down.',
      },
      {
        label: 'C',
        prompt:
          'Compare the centers and the variability of the two distributions. Justify your choice of which summary statistics to use.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Centers compared with medians: Section A’s median (78) is slightly higher than Section B’s (76.5).',
            keywords: ['78', 'median'],
          },
          {
            points: 1,
            description: 'Variability compared with IQRs: Section B’s scores are more variable (IQR 17 versus 12).',
            keywords: ['17', 'iqr'],
          },
          {
            points: 1,
            description:
              'Justifies median and IQR: the distributions are skewed and Section B has a low outlier, which affect the mean and standard deviation, so the resistant median and IQR are better summaries.',
            keywords: ['resistant', 'outlier', 'skew'],
          },
        ],
        sampleAnswer:
          'Because the Section B distribution is skewed with a low outlier (and Section A is also somewhat skewed), the resistant median and IQR are better summaries than the mean and standard deviation, which are pulled by extreme values.\n\nCenter: Section A’s median (78) is slightly higher than Section B’s (76.5).\n\nVariability: Section B’s scores are more variable; its IQR is 17 points compared with 12 points for Section A.',
      },
      {
        label: 'D',
        prompt:
          'Mia, in Section A, scored 90. Jordan, in Section B, scored 92. Calculate the z-score for each student relative to his or her own section, and use the z-scores to determine which student performed better relative to the section.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Both z-scores: Mia $z = (90 - 76.4)/8.2 \\approx 1.66$; Jordan $z = (92 - 74.8)/12.1 \\approx 1.42$.',
            keywords: ['1.66', '1.42'],
          },
          {
            points: 1,
            description:
              'Mia performed better relative to her section: her score is about 1.66 standard deviations above her section’s mean, compared with about 1.42 for Jordan.',
            keywords: ['mia'],
          },
        ],
        sampleAnswer:
          'Mia: $z = (90 - 76.4)/8.2 = 13.6/8.2 \\approx 1.66$.\n\nJordan: $z = (92 - 74.8)/12.1 = 17.2/12.1 \\approx 1.42$.\n\nMia’s score is about 1.66 standard deviations above the mean of Section A, while Jordan’s is about 1.42 standard deviations above the mean of Section B. Mia performed better relative to her section, even though Jordan’s raw score was higher.',
      },
      {
        label: 'E',
        prompt:
          'Which section had a greater proportion of students who scored at least 71? Justify your answer using the summary statistics.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Section A: its Q1 is 71, so approximately 75% of Section A scored at least 71. In Section B, 71 lies between Q1 (67) and the median (76.5), so only between about 50% and 75% scored at least 71.',
            keywords: ['75%', '75 percent', 'q1 is 71', 'q1 = 71'],
          },
        ],
        sampleAnswer:
          'Section A. Its first quartile is 71, so about 75% of Section A’s students scored 71 or higher. In Section B, 71 is between Q1 (67) and the median (76.5), so somewhere between about 50% and 75% of Section B scored at least 71, which is a smaller proportion.',
      },
    ],
  },

  // =========================================================================
  // Q3 (Inference) — 1: Two-sample z-test for proportions
  // =========================================================================
  {
    id: 'stats-frq-q3-1',
    type: 'inference',
    unit: 3,
    title: 'Inference: Text Reminders and On-Time Library Returns',
    prompt:
      'A public library wants to know whether text-message reminders increase the proportion of borrowed books that are returned on time. The 600 borrowers who checked out a book on the first day of March were randomly assigned to two groups of 300. Borrowers in one group received a text-message reminder two days before the due date; borrowers in the other group received no reminder. In the reminder group, 246 of the 300 borrowers returned the book on time. In the no-reminder group, 222 of the 300 borrowers returned the book on time.\n\nAt the $\\alpha = 0.05$ level of significance, complete the appropriate inference procedure to determine whether there is convincing statistical evidence that a text-message reminder increases the proportion of books returned on time, for borrowers like these.\n\nUse the given information to respond to parts A, B, C, and D.',
    totalPoints: 10,
    timeRecommendation: '~23 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: 'A',
        prompt: 'Identify and classify the variables in the study.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Variables identified: the explanatory variable is the reminder condition (text reminder or no reminder); the response variable is whether the book was returned on time.',
            keywords: ['explanatory'],
          },
          {
            points: 1,
            description: 'Variables classified: both variables are categorical.',
            keywords: ['both categorical', 'both are categorical', 'both variables are categorical', 'categorical and categorical'],
          },
        ],
        sampleAnswer:
          'The explanatory variable is the reminder condition (text reminder or no reminder). The response variable is whether the borrower returned the book on time (yes or no). Both variables are categorical.',
      },
      {
        label: 'B',
        prompt: 'Identify the appropriate inference procedure.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'A two-sample z-test for a difference between two population proportions.',
            keywords: ['two-sample z', 'two sample z', '2-sample z', '2 sample z', '2-prop', '2 prop', 'two-proportion z', 'two proportion z'],
          },
        ],
        sampleAnswer: 'A two-sample z-test for a difference between two proportions, $p_R - p_N$.',
      },
      {
        label: 'C',
        prompt:
          'Complete the inference procedure, including stating hypotheses, checking conditions, and calculating the test statistic and p-value.',
        maxPoints: 6,
        rubric: [
          {
            points: 1,
            description:
              'Hypotheses: $H_0: p_R - p_N = 0$ and $H_a: p_R - p_N > 0$ (or $H_0: p_R = p_N$, $H_a: p_R > p_N$). The alternative is one-sided because the question asks whether reminders increase the proportion.',
            keywords: ['p_r > p_n', 'pr > pn', 'p1 > p2', 'p_1 > p_2', 'p_r - p_n > 0', 'pr - pn > 0', 'p1 - p2 > 0', 'p_1 - p_2 > 0'],
          },
          {
            points: 1,
            description:
              'Parameters defined in context: $p_R$ and $p_N$ are the true proportions of books returned on time by borrowers like these who receive a reminder and who receive no reminder, respectively.',
            keywords: ['true proportion', 'population proportion'],
          },
          {
            points: 1,
            description:
              'Randomization condition: borrowers were randomly assigned to the two groups. (The 10% condition is not needed in a randomized experiment.)',
            keywords: ['randomly assigned', 'random assignment'],
          },
          {
            points: 1,
            description:
              'Large counts condition: 246, 54, 222, and 78 are all at least 10 (or, with the pooled proportion 0.78, the expected counts 234 and 66 in each group are at least 10).',
            keywords: ['large counts', 'at least 10', '>= 10', '≥ 10'],
          },
          {
            points: 1,
            description:
              'Test statistic and p-value: $\\hat{p}_R = 0.82$, $\\hat{p}_N = 0.74$, pooled $\\hat{p}_c = 468/600 = 0.78$. $z = \\dfrac{0.82 - 0.74}{\\sqrt{0.78(0.22)(\\frac{1}{300} + \\frac{1}{300})}} \\approx \\dfrac{0.08}{0.0338} \\approx 2.37$, p-value $\\approx 0.009$.',
            keywords: ['2.37', '2.36', '0.009'],
          },
          {
            points: 1,
            description: 'Comparison: because the p-value (about 0.009) is less than $\\alpha = 0.05$, reject $H_0$. (A two-sided test, p-value about 0.018, does not match the question’s "increases" but leads to the same decision.)',
            keywords: ['reject h0', 'reject the null', 'reject h_0', 'reject $h_0$', 'reject h₀', 'reject ho'],
          },
        ],
        sampleAnswer:
          '$H_0: p_R - p_N = 0$, $H_a: p_R - p_N > 0$, where $p_R$ is the true proportion of books returned on time by borrowers like these who get a text reminder and $p_N$ is the true proportion for borrowers like these who get no reminder.\n\nConditions: Random: the borrowers were randomly assigned to the two groups. Large counts: the successes and failures 246, 54, 222, and 78 are all at least 10.\n\n$\\hat{p}_R = 246/300 = 0.82$, $\\hat{p}_N = 222/300 = 0.74$, pooled $\\hat{p}_c = 468/600 = 0.78$.\n\n$z = \\dfrac{0.82 - 0.74}{\\sqrt{0.78(0.22)\\left(\\frac{1}{300} + \\frac{1}{300}\\right)}} = \\dfrac{0.08}{0.0338} \\approx 2.37$, so p-value $= P(Z \\geq 2.37) \\approx 0.009$.\n\nBecause 0.009 < 0.05, reject $H_0$.',
      },
      {
        label: 'D',
        prompt: 'Justify a conclusion in context.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'There is convincing statistical evidence that a text-message reminder increases the proportion of books returned on time, for borrowers like those in the study. Because the treatments were randomly assigned, the increase can be attributed to the reminder.',
            keywords: ['convincing evidence', 'convincing statistical evidence'],
          },
        ],
        sampleAnswer:
          'Because the p-value (0.009) is less than 0.05, there is convincing statistical evidence that receiving a text-message reminder increases the proportion of books returned on time for borrowers like those in the study. Because the reminders were randomly assigned, we can conclude the reminder caused the increase.',
      },
    ],
  },

  // =========================================================================
  // Q3 (Inference) — 2: Paired t-interval for a mean difference
  // =========================================================================
  {
    id: 'stats-frq-q3-2',
    type: 'inference',
    unit: 4,
    title: 'Inference: Running Shoes and 5-Kilometer Times',
    prompt:
      'A running coach wants to estimate how much a new racing shoe changes 5-kilometer times. Twelve runners on her team each ran a 5-kilometer time trial once in their old shoes and once in the new shoes, on two days one week apart. For each runner, the order of the two shoes was determined by a coin flip. The times, in seconds, and the differences (old − new) are shown. A dotplot of the 12 differences is roughly symmetric with no outliers.\n\nUse the given information to respond to parts A, B, C, D, and E.',
    totalPoints: 10,
    timeRecommendation: '~23 minutes',
    calculatorAllowed: true,
    dataTableHtml:
      '<table><tr><th>Runner</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th></tr><tr><td>Old shoes (s)</td><td>1260</td><td>1325</td><td>1198</td><td>1410</td><td>1288</td><td>1342</td><td>1225</td><td>1380</td><td>1302</td><td>1255</td><td>1336</td><td>1290</td></tr><tr><td>New shoes (s)</td><td>1252</td><td>1322</td><td>1186</td><td>1412</td><td>1282</td><td>1333</td><td>1220</td><td>1380</td><td>1295</td><td>1244</td><td>1332</td><td>1284</td></tr><tr><td>Difference (old − new)</td><td>8</td><td>3</td><td>12</td><td>−2</td><td>6</td><td>9</td><td>5</td><td>0</td><td>7</td><td>11</td><td>4</td><td>6</td></tr></table>',
    parts: [
      {
        label: 'A',
        prompt: 'Identify and classify the variables in the study.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Variables identified: the explanatory variable is the type of shoe (old or new); the response variable is the 5-kilometer time.',
            keywords: ['explanatory'],
          },
          {
            points: 1,
            description: 'Variables classified: shoe type is categorical; 5-kilometer time is quantitative.',
            keywords: ['quantitative'],
          },
        ],
        sampleAnswer:
          'The explanatory variable is the shoe type (old or new), which is categorical. The response variable is the runner’s 5-kilometer time in seconds, which is quantitative.',
      },
      {
        label: 'B',
        prompt: 'Identify the appropriate inference procedure for estimating the mean difference.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'A one-sample t-interval for a mean difference (a paired t-interval). Each runner used both shoes, so the data are paired; a two-sample procedure is not correct.',
            keywords: ['paired t', 'matched pairs t', 'matched-pairs t', 't-interval for the mean difference', 't interval for the mean difference', 't-interval for a mean difference', 't interval for a mean difference'],
          },
        ],
        sampleAnswer:
          'A paired t-interval: a one-sample t-interval for $\\mu_d$, the mean of the differences (old − new). Each runner ran in both shoes, so the two sets of times are paired, not independent.',
      },
      {
        label: 'C',
        prompt:
          'Complete the procedure to construct a 95% confidence interval, including defining the parameter, checking conditions, and calculating the interval.',
        maxPoints: 5,
        rubric: [
          {
            points: 1,
            description:
              'Parameter defined in context: $\\mu_d$ is the true mean difference (old − new) in 5-kilometer time, in seconds, for runners like these.',
            keywords: ['mean difference'],
          },
          {
            points: 1,
            description: 'Randomization condition: the order of the two shoes was randomly assigned (coin flip) for each runner.',
            keywords: ['coin flip', 'random order', 'randomly assigned', 'random assignment', 'order was random'],
          },
          {
            points: 1,
            description:
              'Normality condition: the sample of 12 differences is small, but its dotplot is roughly symmetric with no outliers, so it is reasonable to use t procedures.',
            keywords: ['no outliers', 'roughly symmetric', 'no strong skew'],
          },
          {
            points: 1,
            description:
              'Sample statistics and critical value: $\\bar{x}_d = 5.75$ s, $s_d \\approx 4.137$ s, $df = 11$, $t^* \\approx 2.201$.',
            keywords: ['5.75', '4.137', '4.14', '2.201'],
          },
          {
            points: 1,
            description:
              'Interval: $5.75 \\pm 2.201 \\cdot \\dfrac{4.137}{\\sqrt{12}} = 5.75 \\pm 2.63$, about (3.12, 8.38) seconds.',
            keywords: ['3.12', '8.38', '2.63'],
          },
        ],
        sampleAnswer:
          'Parameter: $\\mu_d$ = the true mean difference (old − new) in 5-kilometer time, in seconds, for runners like these.\n\nConditions: Random: for each runner, the order of the shoes was randomly assigned by a coin flip. Normal: $n = 12$ is less than 30, but the dotplot of the differences is roughly symmetric with no outliers, so the t procedure is reasonable.\n\n$\\bar{x}_d = 69/12 = 5.75$ s, $s_d \\approx 4.137$ s, $df = 11$, $t^* = 2.201$.\n\n$5.75 \\pm 2.201 \\cdot \\dfrac{4.137}{\\sqrt{12}} = 5.75 \\pm 2.201(1.194) = 5.75 \\pm 2.63$, giving about (3.12, 8.38) seconds.',
      },
      {
        label: 'D',
        prompt: 'Interpret the interval in context.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'We are 95% confident that the interval from 3.12 to 8.38 seconds captures the true mean difference (old − new) in 5-kilometer time for runners like these; that is, the new shoes reduce times by between about 3.1 and 8.4 seconds on average.',
            keywords: ['95% confident', '95 percent confident'],
          },
        ],
        sampleAnswer:
          'We are 95% confident that the interval from 3.12 to 8.38 seconds captures the true mean difference (old − new) in 5-kilometer time for runners like these. In other words, the new shoes reduce the average 5-kilometer time by somewhere between about 3.1 and 8.4 seconds.',
      },
      {
        label: 'E',
        prompt:
          'The shoe company claims that its new shoe reduces 5-kilometer times by an average of 10 seconds. Does the interval support the claim? Explain.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'No: 10 seconds is not in the interval (it is above 8.38), so 10 is not a plausible value of the mean reduction for runners like these. The interval gives evidence that the average reduction is less than 10 seconds, although it does suggest the shoes reduce times (0 is not in the interval).',
            keywords: ['not in the interval', 'not contained', 'not within the interval', 'outside the interval', 'above the interval', 'not a plausible'],
          },
        ],
        sampleAnswer:
          'No. The value 10 is not in the interval (3.12, 8.38): every plausible value for the mean reduction is less than 10 seconds. The interval does suggest the new shoes help, because all plausible values are positive, but it does not support a 10-second average reduction for runners like these.',
      },
    ],
  },

  // =========================================================================
  // Q4 (Practices 2, 3 & 4) — 1: Two-way table, binomial, sampling distribution
  // =========================================================================
  {
    id: 'stats-frq-q4-1',
    type: 'practices-2-3-4',
    unit: 2,
    title: 'Practices 2, 3 & 4: How Students Get to School',
    prompt:
      'A large high school has 5,000 students. A simple random sample of 400 of them was asked about their grade level (underclassman or upperclassman) and their usual way of getting to school. The results are shown in the two-way table.\n\nUse the given information to respond to parts A, B, C, D, and E. Show all work for calculations.',
    totalPoints: 10,
    timeRecommendation: '~23 minutes',
    calculatorAllowed: true,
    dataTableHtml:
      '<table><tr><th></th><th>Car</th><th>Bus</th><th>Walk/Bike</th><th>Total</th></tr><tr><td>Underclassman</td><td>60</td><td>120</td><td>40</td><td>220</td></tr><tr><td>Upperclassman</td><td>110</td><td>45</td><td>25</td><td>180</td></tr><tr><td>Total</td><td>170</td><td>165</td><td>65</td><td>400</td></tr></table>',
    parts: [
      {
        label: 'A',
        prompt:
          'One of the 400 students is selected at random. (i) Calculate the probability that the student is an upperclassman who gets to school by car. (ii) Given that the student rides the bus, calculate the probability that the student is an underclassman.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'P(upperclassman and car) = 110/400 = 0.275.',
            keywords: ['0.275', '110/400'],
          },
          {
            points: 1,
            description: 'P(underclassman | bus) = 120/165 ≈ 0.727.',
            keywords: ['0.727', '120/165', '0.73'],
          },
        ],
        sampleAnswer:
          '(i) P(upperclassman and car) = 110/400 = 0.275.\n\n(ii) P(underclassman | bus) = 120/165 ≈ 0.727.',
      },
      {
        label: 'B',
        prompt:
          'For a student selected at random from the 400, are the events "the student is an upperclassman" and "the student gets to school by car" independent? Justify your answer using probabilities.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Correct relevant probabilities, for example P(car) = 170/400 = 0.425 and P(car | upperclassman) = 110/180 ≈ 0.611 (or P(upper) × P(car) = 0.45 × 0.425 ≈ 0.191 versus P(upper and car) = 0.275).',
            keywords: ['0.425', '0.611', '0.191'],
          },
          {
            points: 1,
            description:
              'Not independent, with the comparison stated: P(car | upperclassman) ≈ 0.611 ≠ P(car) = 0.425 (or 0.275 ≠ 0.191).',
            keywords: ['not independent'],
          },
        ],
        sampleAnswer:
          'P(car) = 170/400 = 0.425 and P(car | upperclassman) = 110/180 ≈ 0.611.\n\nBecause 0.611 ≠ 0.425, knowing that the student is an upperclassman changes the probability that the student gets to school by car. The events are not independent.',
      },
      {
        label: 'C',
        prompt:
          'The school’s transportation office states that 40% of all its students ride the bus. Suppose that is true, and 8 students are selected at random from the school. Let $X$ be the number of the 8 students who ride the bus. (i) Identify the probability distribution of $X$, including its parameters. (ii) Calculate $P(X \\geq 5)$. (iii) Calculate the mean of $X$ and interpret it in context.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'Binomial with $n = 8$ and $p = 0.40$ (fixed number of trials, each a success or failure, constant probability; independence is reasonable because 8 is less than 10% of 5,000).',
            keywords: ['binomial'],
          },
          {
            points: 1,
            description:
              '$P(X \\geq 5) = \\sum_{k=5}^{8} \\binom{8}{k}(0.4)^k(0.6)^{8-k} \\approx 0.174$ (or 1 − binomcdf(8, 0.4, 4)).',
            keywords: ['0.174', '0.1737', '0.17'],
          },
          {
            points: 1,
            description:
              '$\\mu_X = np = 8(0.4) = 3.2$ students. Interpretation as a long-run average: if many random samples of 8 students were taken, the average number of bus riders per sample would be about 3.2.',
            keywords: ['3.2'],
          },
        ],
        sampleAnswer:
          '(i) $X$ is binomial with $n = 8$ and $p = 0.40$. Each student either rides the bus or does not, and the 8 selections are nearly independent because 8 is far less than 10% of the 5,000 students.\n\n(ii) $P(X \\geq 5) = P(5) + P(6) + P(7) + P(8) \\approx 0.1239 + 0.0413 + 0.0079 + 0.0007 \\approx 0.174$, or 1 − binomcdf(8, 0.4, 4) ≈ 0.174.\n\n(iii) $\\mu_X = 8(0.4) = 3.2$. If we took many random samples of 8 students from this school, the average number of bus riders per sample would be about 3.2.',
      },
      {
        label: 'D',
        prompt:
          'In the survey, 165 of the 400 students (41.25%) said they ride the bus. Assume the transportation office’s 40% figure is correct. (i) Describe the sampling distribution of the sample proportion of bus riders for random samples of 400 students from this school, including its shape, center, and variability. (ii) Calculate the probability that a random sample of 400 students would have a sample proportion of 0.4125 or greater.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Approximately normal (np = 160 and n(1 − p) = 240 are both at least 10), with mean $\\mu_{\\hat{p}} = 0.40$ and standard deviation $\\sigma_{\\hat{p}} = \\sqrt{0.4(0.6)/400} \\approx 0.0245$ (400 is less than 10% of 5,000).',
            keywords: ['0.0245', '0.024', 'approximately normal'],
          },
          {
            points: 1,
            description: '$z = (0.4125 - 0.40)/0.0245 \\approx 0.51$, so $P(\\hat{p} \\geq 0.4125) \\approx 0.305$.',
            keywords: ['0.305', '0.30', '0.31'],
          },
        ],
        sampleAnswer:
          '(i) Because $np = 400(0.4) = 160$ and $n(1 - p) = 240$ are both at least 10, the sampling distribution of $\\hat{p}$ is approximately normal. Its mean is $0.40$ and, because 400 is less than 10% of 5,000, its standard deviation is $\\sqrt{0.4(0.6)/400} \\approx 0.0245$.\n\n(ii) $z = (0.4125 - 0.40)/0.0245 \\approx 0.51$, so $P(\\hat{p} \\geq 0.4125) \\approx 0.305$.',
      },
      {
        label: 'E',
        prompt:
          'Based on your answer to part D, does the survey give convincing evidence that more than 40% of the school’s students ride the bus? Explain.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'No: if 40% of students ride the bus, a sample proportion of 0.4125 or higher would happen about 30% of the time, which is not unusual, so the survey does not give convincing evidence that more than 40% ride the bus.',
            keywords: ['not convincing', 'not unusual', 'no convincing', 'not surprising', 'not unlikely'],
          },
        ],
        sampleAnswer:
          'No. If the true proportion is 0.40, a sample proportion of 0.4125 or higher occurs about 30.5% of the time by chance. That is not unusual, so the survey does not give convincing evidence that more than 40% of the school’s students ride the bus.',
      },
    ],
  },

  // =========================================================================
  // Q4 (Practices 2, 3 & 4) — 2: Normal model and the sampling distribution of x-bar
  // =========================================================================
  {
    id: 'stats-frq-q4-2',
    type: 'practices-2-3-4',
    unit: 4,
    title: 'Practices 2, 3 & 4: Cereal Box Fill Weights',
    prompt:
      'A machine fills cereal boxes labeled "16 ounces." When the machine is working properly, the fill weights are approximately normally distributed with mean 16.2 ounces and standard deviation 0.15 ounce. The machine fills 600 boxes each hour.\n\nUse the given information to respond to parts A, B, C, D, and E. Show all work for calculations.',
    totalPoints: 10,
    timeRecommendation: '~23 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: 'A',
        prompt: 'Calculate the probability that a randomly selected box from a properly working machine contains less than the labeled 16 ounces.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Correct setup with a normal model: $z = (16 - 16.2)/0.15 \\approx -1.33$, or normalcdf with lower bound $-\\infty$, upper 16, mean 16.2, SD 0.15.',
            keywords: ['-1.33', '−1.33', 'normalcdf'],
          },
          {
            points: 1,
            description: 'Correct probability: about 0.091.',
            keywords: ['0.091', '0.0912', '0.0918'],
          },
        ],
        sampleAnswer:
          '$z = \\dfrac{16 - 16.2}{0.15} \\approx -1.33$, so $P(X < 16) = P(Z < -1.33) \\approx 0.091$. About 9.1% of boxes are underfilled.',
      },
      {
        label: 'B',
        prompt:
          'The company wants only 1% of boxes to contain less than 16 ounces. The standard deviation cannot be changed. Calculate the mean fill weight the machine should be set to.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Uses the z-score for the 1st percentile: $z \\approx -2.326$ (invNorm(0.01)).',
            keywords: ['2.326', '2.33', 'invnorm'],
          },
          {
            points: 1,
            description: 'Solves $16 = \\mu - 2.326(0.15)$: $\\mu \\approx 16.35$ ounces.',
            keywords: ['16.35', '16.349'],
          },
        ],
        sampleAnswer:
          'The 1st percentile of the standard normal distribution is $z \\approx -2.326$. We need $\\dfrac{16 - \\mu}{0.15} = -2.326$, so $\\mu = 16 + 2.326(0.15) \\approx 16.35$ ounces.',
      },
      {
        label: 'C',
        prompt:
          'Each hour, an inspector selects a random sample of 9 boxes and computes the sample mean fill weight $\\bar{x}$. Assume the machine is working properly. (i) Describe the shape of the sampling distribution of $\\bar{x}$ and explain why. (ii) Calculate the mean and standard deviation of the sampling distribution of $\\bar{x}$. (iii) Calculate the probability that $\\bar{x}$ is less than 16.1 ounces.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'Approximately normal, because the population of fill weights is approximately normal (even though $n = 9$ is small).',
            keywords: ['population of fill weights is approximately normal', 'population of fill weights is normal', 'population is normal', 'population is approximately normal', 'population distribution is normal', 'population distribution is approximately normal', 'fill weights are normal', 'fill weights are approximately normal', 'weights are normally distributed', 'weights are approximately normally'],
          },
          {
            points: 1,
            description:
              '$\\mu_{\\bar{x}} = 16.2$ ounces and $\\sigma_{\\bar{x}} = 0.15/\\sqrt{9} = 0.05$ ounce (9 boxes is less than 10% of the 600 boxes filled in an hour).',
            keywords: ['0.05'],
          },
          {
            points: 1,
            description: '$z = (16.1 - 16.2)/0.05 = -2$, so $P(\\bar{x} < 16.1) \\approx 0.023$.',
            keywords: ['0.023', '0.0228', '0.0227'],
          },
        ],
        sampleAnswer:
          '(i) The sampling distribution of $\\bar{x}$ is approximately normal, because the population of fill weights is approximately normal. (The sample size of 9 is small, so the central limit theorem alone would not justify this.)\n\n(ii) $\\mu_{\\bar{x}} = 16.2$ ounces and $\\sigma_{\\bar{x}} = 0.15/\\sqrt{9} = 0.05$ ounce. (The 9 boxes are less than 10% of the 600 boxes filled in an hour.)\n\n(iii) $z = (16.1 - 16.2)/0.05 = -2.00$, so $P(\\bar{x} < 16.1) \\approx 0.023$.',
      },
      {
        label: 'D',
        prompt: 'Describe how the inspector could use a random number generator to select the random sample of 9 boxes from the 600 boxes filled in an hour.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Number the boxes 1 to 600 in the order they are filled, use a random number generator to choose 9 different integers from 1 to 600 (ignoring repeats), and weigh the boxes with those numbers.',
            keywords: ['1 to 600', '1-600', '1 through 600', '001 to 600', '001-600'],
          },
        ],
        sampleAnswer:
          'Number the boxes 1 to 600 in the order they come off the machine during the hour. Use a random number generator to produce integers from 1 to 600, ignoring repeats, until there are 9 different numbers. Weigh the 9 boxes with those numbers and compute their mean.',
      },
      {
        label: 'E',
        prompt:
          'One hour, the inspector’s sample of 9 boxes has a mean fill weight of 16.08 ounces. Does this give convincing evidence that the machine is not working properly and the mean fill weight has dropped below 16.2 ounces? Support your answer with a probability calculation.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Probability: if the machine were working properly, $z = (16.08 - 16.2)/0.05 = -2.4$ and $P(\\bar{x} \\leq 16.08) \\approx 0.008$.',
            keywords: ['0.008', '0.0082'],
          },
          {
            points: 1,
            description:
              'Conclusion: yes. A sample mean this low would be very unlikely by chance if the machine were working properly, so this is convincing evidence that the mean fill weight has dropped below 16.2 ounces.',
            keywords: ['convincing evidence', 'unlikely', 'unusual'],
          },
        ],
        sampleAnswer:
          '$z = (16.08 - 16.2)/0.05 = -2.4$, so $P(\\bar{x} \\leq 16.08) \\approx 0.008$ if the machine is working properly. A sample mean this low would happen only about 8 times in 1,000 hours by chance, so this is convincing evidence that the machine’s mean fill weight has dropped below 16.2 ounces.',
      },
    ],
  },
]

// ============================================================================
// Accessor functions
// ============================================================================

export function getStatsFRQs(): StatsFRQ[] {
  return statsFRQs
}

export function getStatsFRQsByType(type: StatsFRQType): StatsFRQ[] {
  return statsFRQs.filter((q) => q.type === type)
}

/** One FRQ of each real type, in exam order (Q1–Q4): 40 points in 90 minutes. */
export function generateFullExamFRQs(): {
  questions: StatsFRQ[]
  totalPoints: number
  totalMinutes: number
} {
  const questions = STATS_FRQ_TYPES.map(({ type }) => shuffleArray(getStatsFRQsByType(type))[0])
  return {
    questions,
    totalPoints: questions.reduce((sum, q) => sum + q.totalPoints, 0),
    totalMinutes: 90,
  }
}
