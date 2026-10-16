/**
 * Entrance Quiz — Exploratory Data Analysis (AP Statistics)
 * Lesson: exploratory-data-apstats (also rendered by types-data-sampling,
 * displaying-distributions-graphs, measures-of-center, measures-of-spread).
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Exploratory Data Analysis Overview'
const P2 = 'Graphical Displays'
const P3 = 'Measures of Center'
const P4 = 'Measures of Spread'
const P5 = 'Outliers and Shape'
const P6 = 'Problem-Solving Workshop'
const P7 = 'Mixed Review'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'eda-ent-1a',
    question: 'For each of 40 dogs at a shelter, a volunteer records its breed, its weight in kilograms, and the number of days it has been at the shelter. Which of these variables are quantitative?',
    options: ['Breed and weight', 'Weight and number of days', 'Breed and number of days', 'All three variables'],
    correctIndex: 1,
    explanation: 'Weight and number of days are measured or counted amounts that can be averaged, so both are quantitative. Breed is a category label, so any choice that includes it is wrong.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'eda-ent-1b',
    question: 'A club records each member\'s six-digit membership number. A member proposes making a histogram of these numbers to describe the club. What is the problem with this plan?',
    options: ['The numbers are labels, so they are categorical', 'The numbers are discrete, so no histogram is allowed', 'A histogram needs at least 100 values to be drawn', 'The numbers should be shown in a boxplot instead'],
    correctIndex: 0,
    explanation: 'Membership numbers identify members; averaging them or describing their shape means nothing, so the variable is categorical even though it is written in digits. Discrete quantitative data can go in a histogram, and a boxplot has the same problem as a histogram.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'eda-ent-2a',
    question: 'A teacher wants to compare the exam scores of her two sections (28 and 31 students) in one display that still shows every individual score. Which display fits best?',
    options: ['Side-by-side boxplots', 'A pair of pie charts', 'A back-to-back stemplot', 'A segmented bar chart'],
    correctIndex: 2,
    explanation: 'A back-to-back stemplot puts the two groups on one shared set of stems and keeps each individual value. Boxplots show only five-number summaries, and pie charts and segmented bar charts are for categorical data.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'eda-ent-2b',
    question: 'A histogram of 200 commute times uses 10-minute bins with these counts: 0–10 min: 30, 10–20 min: 70, 20–30 min: 50, 30–40 min: 30, 40–50 min: 20. What proportion of the commutes took at least 30 minutes?',
    options: ['0.15', '0.40', '0.50', '0.25'],
    correctIndex: 3,
    explanation: 'The bins at or above 30 minutes hold $30 + 20 = 50$ commutes, and $50/200 = 0.25$. The value 0.15 uses only the 30–40 bin, and 0.50 is the share under 20 minutes.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'eda-ent-3a',
    question: 'The mean of 8 quiz scores is 15. A ninth student scores 24. What is the mean of all 9 scores?',
    options: ['18', '16', '19.5', '15'],
    correctIndex: 1,
    explanation: 'The 8 scores total $8(15) = 120$; adding 24 gives 144, and $144/9 = 16$. Dividing 144 by 8 gives 18, and 19.5 just averages 15 and 24 as if they had equal weight.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'eda-ent-3b',
    question: 'Home sale prices in a town last year had a mean of \\$410,000 and a median of \\$325,000. What does this suggest about the distribution of prices?',
    options: ['Roughly symmetric, since both are large', 'Skewed left, pulled down by a few cheap homes', 'Uniform, since prices spread out evenly', 'Skewed right, pulled up by a few costly homes'],
    correctIndex: 3,
    explanation: 'A mean well above the median signals a long right tail: a few very expensive homes pull the mean up while the median stays near the middle. Left skew would put the mean below the median.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'eda-ent-4a',
    question: 'A data set has $Q_1 = 34$ and $Q_3 = 50$. Which of these values would the $1.5 \\times IQR$ rule flag as an outlier?',
    options: ['11', '73', '75', '40'],
    correctIndex: 2,
    explanation: '$IQR = 16$, so the fences are $34 - 24 = 10$ and $50 + 24 = 74$. Only 75 lies beyond a fence; 11 and 73 are just inside them.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'eda-ent-4b',
    question: 'A teacher adds 5 bonus points to every score on a test. Before the bonus, the scores had a median of 72 and an IQR of 14. What are the median and IQR after the bonus?',
    options: ['Median 72, IQR 14', 'Median 77, IQR 19', 'Median 77, IQR 14', 'Median 72, IQR 19'],
    correctIndex: 2,
    explanation: 'Adding a constant shifts every value, so the median rises by 5 to 77. Both quartiles also rise by 5, so their difference, the IQR, stays 14.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'eda-ent-5a',
    question: 'A boxplot of reaction times has its median line close to $Q_1$, a long right whisker, and two points plotted beyond the right whisker. Which description fits?',
    options: ['Skewed right with two high outliers', 'Skewed left with two low outliers', 'Skewed right with two low outliers', 'Skewed right with no outliers at all'],
    correctIndex: 0,
    explanation: 'The long right whisker and a median sitting near $Q_1$ show a stretched upper half, which is right skew, and points plotted past the whisker are outliers. Those points are on the high side, not the low side, so the low-outlier descriptions do not fit.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'eda-ent-5b',
    question: 'At a children\'s birthday party, most guests are 5 to 8 years old, and a second group of guests (the parents) are 30 to 40 years old. Which shape best describes the distribution of guests\' ages?',
    options: ['Uniform in shape', 'Bimodal', 'Skewed left', 'Symmetric and unimodal'],
    correctIndex: 1,
    explanation: 'Two separate clusters of ages give two peaks, so the distribution is bimodal. A uniform shape would need ages spread evenly, and neither skew nor a single peak describes two distinct groups.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'eda-ent-6a',
    question: 'Daily screen time for two groups: Group A has median 3.1 h and IQR 1.2 h; Group B has median 4.5 h and IQR 2.8 h. Both distributions are roughly symmetric with no outliers. Which comparison is best?',
    options: ['B has a higher median and more variability than A', 'B has a higher median but less spread than A', 'Every member of B uses more screen time than A', 'The groups cannot be compared without the means'],
    correctIndex: 0,
    explanation: 'B\'s median is higher (4.5 h versus 3.1 h) and its IQR is larger (2.8 h versus 1.2 h), so B is centered higher and more spread out. A higher median says nothing about every individual, and medians and IQRs are enough to compare.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'eda-ent-6b',
    question: 'Five-number summary of 30 river lengths (km): Min 12, $Q_1$ 40, Median 55, $Q_3$ 70, Max 160. Which statement about outliers is correct?',
    options: ['The minimum alone is an outlier', 'Both extremes are outliers', 'The maximum alone is an outlier', 'Neither extreme is an outlier'],
    correctIndex: 2,
    explanation: '$IQR = 30$, so the fences are $40 - 45 = -5$ and $70 + 45 = 115$. The maximum, 160, is above 115, while the minimum, 12, is above $-5$, so only the maximum is an outlier.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'eda-ent-7a',
    question: 'Daily high temperatures for a week have a mean of 20°C and a standard deviation of 3°C. After converting with $F = 1.8C + 32$, what are the mean and standard deviation in °F?',
    options: ['Mean 68°F, SD 37.4°F', 'Mean 36°F, SD 5.4°F', 'Mean 68°F, SD 3°F', 'Mean 68°F, SD 5.4°F'],
    correctIndex: 3,
    explanation: 'The mean goes through the whole conversion: $1.8(20) + 32 = 68$. The SD is multiplied by 1.8 but not shifted by 32, so it becomes $1.8(3) = 5.4$.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'eda-ent-7b',
    question: 'Which change to the data set 4, 6, 8, 10, 12 would increase the standard deviation but leave the median unchanged?',
    options: ['Replace 4 with 8', 'Add 5 to every value', 'Replace 8 with 9', 'Replace 12 with 20'],
    correctIndex: 3,
    explanation: 'Changing 12 to 20 moves an extreme value farther from the center, so the SD grows, while the middle value stays 8. Replacing 4 with 8 shrinks the spread, and the other two changes move the median.',
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
