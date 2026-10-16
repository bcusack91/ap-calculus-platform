/**
 * Entrance Quiz — Linear Regression (AP Statistics)
 * Lesson: linear-regression-apstats (also rendered by least-squares-regression,
 * residuals-residual-plots, coefficient-determination).
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Scatterplots and Correlation'
const P2 = 'Least-Squares Regression Line'
const P3 = 'Residuals and Residual Plots'
const P4 = 'Coefficient of Determination'
const P5 = 'Unusual Points, Extrapolation and Interpreting the Line'
const P6 = 'Problem-Solving Workshop'
const P7 = 'Review & Applications'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'lr-ent-1a',
    question: 'A scatterplot of a car\'s fuel efficiency against its speed rises smoothly from 20 to 50 mph and then falls smoothly from 50 to 80 mph, with little scatter; $r = 0.05$. Which conclusion is correct?',
    options: ['Speed has almost no effect on fuel efficiency', 'The variables are strongly related, but not linearly', 'There is a weak positive linear relationship', 'The data must contain a recording error'],
    correctIndex: 1,
    explanation: 'The correlation measures only linear association. A tight arch is a strong curved relationship that still gives $r$ near 0, so a near-zero $r$ does not mean speed has little effect.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'lr-ent-1b',
    question: 'For 30 students, the correlation between hours of sleep and number of caffeinated drinks per day is $r = -0.74$, and the scatterplot is linear with no unusual points. Which statement is correct?',
    options: ['A moderately strong negative linear association', 'A strong positive linear association', 'Proof that caffeine reduces students\' sleep', 'A weak association, since r is negative'],
    correctIndex: 0,
    explanation: 'The sign of $r$ gives the direction and its size gives the strength, so $-0.74$ is a moderately strong negative linear association. A negative $r$ is not weak, and correlation from observational data cannot prove causation.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'lr-ent-2a',
    question: 'Technology gives the slope of the least-squares line for predicting $y$ from $x$ as $b = 2.4$. The means are $\\bar{x} = 15$ and $\\bar{y} = 50$. What is the predicted $y$ when $x = 20$?',
    options: ['98', '134', '62', '48'],
    correctIndex: 2,
    explanation: 'The line passes through $(\\bar{x}, \\bar{y})$, so $a = 50 - 2.4(15) = 14$ and $\\hat{y} = 14 + 2.4(20) = 62$. Equivalently, $x$ is 5 above its mean, so $\\hat{y}$ is $2.4(5) = 12$ above 50.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'lr-ent-2b',
    question: 'A regression of monthly electricity cost (dollars) on home size (hundreds of square feet) gives $\\hat{y} = 18 + 6.5x$. Which is the correct interpretation of 6.5?',
    options: ['Each extra 100 sq ft adds \\$6.50 to every home\'s cost', 'Each extra square foot adds \\$6.50 to the predicted cost', 'Each extra 100 sq ft adds \\$6.50 to the predicted cost', 'Each extra 100 sq ft adds \\$18 to the predicted cost'],
    correctIndex: 2,
    explanation: 'Because $x$ is measured in hundreds of square feet, the slope is the predicted increase in monthly cost per extra 100 square feet. It describes predicted values, not a guaranteed change for every home, and \\$18 is the intercept.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'lr-ent-3a',
    question: 'The line $\\hat{y} = 4.2 + 0.9x$ predicts a plant\'s height (cm) from days of growth. On day 20, one plant is 20.5 cm tall. What is its residual, and what does it say?',
    options: ['1.7 cm; the line underpredicts its height', '-1.7 cm; the line underpredicts its height', '1.7 cm; the line overpredicts its height', '-1.7 cm; the line overpredicts its height'],
    correctIndex: 3,
    explanation: 'The prediction is $4.2 + 0.9(20) = 22.2$ cm, so the residual is $20.5 - 22.2 = -1.7$ cm. A negative residual means the point lies below the line: the model predicted more than the plant actually grew.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'lr-ent-3b',
    question: 'A line is fit to a drug\'s blood concentration over time, and $r = 0.93$. The residual plot shows positive residuals at small and large times and negative residuals in the middle. What is the best conclusion?',
    options: ['The linear model fits well because r is close to 1', 'The positive residuals mean the slope should be larger', 'A linear model is not appropriate despite the high r', 'The data have no unusual points, so the line works'],
    correctIndex: 2,
    explanation: 'A curved pattern in the residual plot shows the relationship is not linear, so a linear model is not the most appropriate one even though $r$ is high. A large $r$ never overrides a curved residual plot.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'lr-ent-4a',
    question: 'A regression of used-car price on mileage has $r = -0.9$. Which interpretation of $r^2$ is correct?',
    options: ['About 81% of the cars have prices that fall on the regression line', 'About 90% of the variation in price is explained by the linear model with mileage', 'About 81% of the variation in price is caused by differences in mileage', 'About 81% of the variation in price is explained by the linear model with mileage'],
    correctIndex: 3,
    explanation: '$r^2 = (-0.9)^2 = 0.81$, the proportion of variation in price explained by the linear relationship with mileage. It is not the share of points on the line, 90% is $|r|$ rather than $r^2$, and association does not show causation.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'lr-ent-4b',
    question: 'Data set 1 has $r = 0.5$ and data set 2 has $r = -0.7$, each fit with a least-squares line. Which statement is correct?',
    options: ['The second line explains less because r is negative', 'The second line explains 70% of the variation in y', 'The two lines explain the same share of variation', 'The second line explains nearly twice as much'],
    correctIndex: 3,
    explanation: 'The shares explained are the $r^2$ values: $0.5^2 = 0.25$ and $(-0.7)^2 = 0.49$, so the second line explains about twice as much. The sign of $r$ does not matter for $r^2$, and 70% confuses $|r|$ with $r^2$.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'lr-ent-5a',
    question: 'A model fit to children aged 2 to 10 years predicts shoe size from age: $\\hat{y} = 3.1 + 0.95x$. Which use of the model is most trustworthy?',
    options: ['Predicting the shoe size of a 6-year-old', 'Predicting the shoe size of a 16-year-old', 'Reading 3.1 as the shoe size of a newborn', 'Predicting the shoe size of a 30-year-old'],
    correctIndex: 0,
    explanation: 'Age 6 lies inside the 2-to-10 range of the data, so that prediction is an interpolation. Ages 16 and 30, and age 0 for the intercept, are all outside the data, so those uses are extrapolations.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'lr-ent-5b',
    question: 'A scatterplot of hours studied versus exam score for 25 students shows a strong upward linear pattern, except for one student who studied 2 hours and scored 95. Which statement about that student is correct?',
    options: ['The student has a large negative residual', 'The student has a large positive residual', 'The student makes r closer to 1', 'The student shows the pattern is curved'],
    correctIndex: 1,
    explanation: 'With only 2 hours studied, the line predicts a low score, so the actual 95 lies far above the line and the residual is large and positive. A point far off the pattern weakens $r$; it does not show curvature.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'lr-ent-6a',
    question: 'Technology output for predicting resting heart rate (beats/min) from weekly hours of exercise: Constant 78.4, Exercise $-1.6$, R-sq 52%. A student who exercises 6 hours a week has a resting rate of 70. What is the residual?',
    options: ['8.4 beats/min', '-17.4 beats/min', '1.2 beats/min', '-1.2 beats/min'],
    correctIndex: 2,
    explanation: 'The prediction is $78.4 - 1.6(6) = 68.8$, so the residual is $70 - 68.8 = 1.2$ beats/min. Reversing the subtraction gives $-1.2$, and $-17.4$ comes from adding $1.6(6)$ instead of subtracting.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'lr-ent-6b',
    question: 'In the same output (Constant 78.4, Exercise $-1.6$), the students in the data exercised between 0 and 12 hours per week. Which statement about the intercept 78.4 is correct?',
    options: ['It is the predicted rate for a student who never works out', 'It is meaningless, since a heart rate cannot be 78.4', 'It is the mean heart rate of all the students sampled', 'It is an extrapolation, so it should not be interpreted'],
    correctIndex: 0,
    explanation: 'Zero hours is inside the 0-to-12 range of the data, so the intercept is a reasonable prediction: about 78.4 beats/min for a student who does not exercise. The line passes through the mean heart rate at the mean exercise time, not at $x = 0$.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'lr-ent-7a',
    question: 'Technology gives the slope of the least-squares line as $b = -0.8$. The means are $\\bar{x} = 40$ and $\\bar{y} = 30$. Which is the equation of the line?',
    options: ['$\\hat{y} = -2 - 0.8x$', '$\\hat{y} = 62 - 0.8x$', '$\\hat{y} = 30 - 0.8x$', '$\\hat{y} = 70 - 0.8x$'],
    correctIndex: 1,
    explanation: 'The line passes through $(\\bar{x}, \\bar{y})$, so $a = \\bar{y} - b\\bar{x} = 30 - (-0.8)(40) = 30 + 32 = 62$. Getting $-2$ drops the negative sign on the slope.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'lr-ent-7b',
    question: 'Across 50 cities, the correlation between the number of hospitals and the number of deaths per year is $r = 0.88$. Which explanation is best?',
    options: ['Hospitals cause deaths, since r is close to 1', 'Deaths cause new hospitals to be built in a city', 'The data must contain an error, since r is so high', 'Larger populations lead to more of both'],
    correctIndex: 3,
    explanation: 'Population size is a confounding variable: bigger cities have both more hospitals and more deaths. A strong correlation alone does not show that either variable causes the other.',
    partNumber: 7,
    partTitle: P7,
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [P1, P2, P3, P4, P5, P6, P7].map((partTitle, i) => ({ partNumber: i + 1, partTitle }))
}
