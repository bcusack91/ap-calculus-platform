/**
 * Entrance Quiz — Describing Distributions (AP Statistics)
 * Lesson: describing-distributions-apstats
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Shape, Center, Spread'
const P2 = 'Histograms & Dotplots'
const P3 = 'Mean vs Median'
const P4 = 'Standard Deviation'
const P5 = 'Normal Distribution'
const P6 = 'Problem-Solving Workshop'
const P7 = 'Review & Applications'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'dd-ent-1a',
    question: 'A dotplot of last night\'s sleep for 25 students shows most values between 6 and 8 hours, a long tail stretching down to 2 hours, and nothing above 9 hours. Which pair of statistics best summarizes the center and spread?',
    options: ['Median and IQR', 'Mean and SD', 'Range and median', 'Mean and IQR'],
    correctIndex: 0,
    explanation: 'The long tail toward low values makes the distribution skewed left, so resistant measures fit: the median for center and the IQR for spread. The mean and SD are pulled by the tail, and the range is not resistant.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'dd-ent-1b',
    question: 'Waiting times (minutes) for 10 patients at a clinic: 4, 6, 6, 7, 7, 7, 8, 8, 10, 22. Which statement is correct?',
    options: ['The median is 8.5 and 22 is an outlier', 'The median is 7 and 22 is an outlier', 'The median is 7 and there are no outliers', 'The median is 7 and both 4 and 22 are outliers'],
    correctIndex: 1,
    explanation: 'The median averages the 5th and 6th values, $(7 + 7)/2 = 7$. With $Q_1 = 6$ and $Q_3 = 8$, the fences are $6 - 3 = 3$ and $8 + 3 = 11$, so 22 is an outlier but 4 is not; 8.5 is the mean, not the median.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'dd-ent-2a',
    question: 'A dotplot of the number of pets in 20 households shows: 0 pets: 2 dots, 1 pet: 5 dots, 2 pets: 6 dots, 3 pets: 4 dots, 4 pets: 2 dots, 9 pets: 1 dot. What is the median number of pets?',
    options: ['2.3', '1', '2', '3'],
    correctIndex: 2,
    explanation: 'With 20 values the median averages the 10th and 11th. Positions 8 through 13 are all 2 pets, so the median is 2. The value 2.3 is the mean, $46/20$.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'dd-ent-2b',
    question: 'A histogram of 500 apartment rents drawn with 3 very wide bins looks roughly symmetric. Redrawn with 15 bins, it shows two distinct peaks with a dip between them. What is the best conclusion?',
    options: ['The wide bins hid a bimodal pattern in the data', 'The 15-bin graph is distorted by random noise', 'Changing the bins also changed the median rent', 'The two graphs describe the shape equally well'],
    correctIndex: 0,
    explanation: 'Too few bins lump values together and can hide features such as two peaks; the 15-bin graph reveals that the rents are bimodal. Bin width changes only the picture, not the data or their median.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'dd-ent-3a',
    question: 'The mean salary of the 10 people at a small firm is \\$60,000. The owner, one of the 10, earns \\$195,000. What is the mean salary of the other 9 people?',
    options: ['\\$40,500', '\\$46,500', '\\$60,000', '\\$45,000'],
    correctIndex: 3,
    explanation: 'All 10 salaries total $10 \\times 60{,}000 = 600{,}000$; removing the owner leaves $405{,}000$ for 9 people, and $405{,}000 / 9 = 45{,}000$. Dividing by 10 instead of 9 gives \\$40,500.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'dd-ent-3b',
    question: 'Data: 3, 8, 9, 11, 14. The value 14 is changed to 64. How do the mean and median change?',
    options: ['The mean and median both rise by 10', 'The mean rises by 10; the median is unchanged', 'The median rises by 10; the mean is the same', 'The mean rises by 50; the median is the same'],
    correctIndex: 1,
    explanation: 'The total rises by 50, so the mean rises by $50/5 = 10$ (from 9 to 19). The median is still the third value, 9, because the order of the middle values is unchanged.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'dd-ent-4a',
    question: 'What is the sample standard deviation $s$ of the data 2, 4, 6, 8? (rounded to two decimals)',
    options: ['2.24', '6.67', '2.58', '5.00'],
    correctIndex: 2,
    explanation: 'The mean is 5 and the squared deviations are 9, 1, 1, 9, which sum to 20. Then $s^2 = 20/3 \\approx 6.67$ and $s = \\sqrt{6.67} \\approx 2.58$; dividing by 4 instead of 3 gives 2.24, and 6.67 is the variance.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'dd-ent-4b',
    question: 'Set A: 10, 20, 30, 40, 50. Set B: 28, 29, 30, 31, 32. Set C: 10, 10, 30, 50, 50. All three have mean 30. How do their standard deviations rank from largest to smallest?',
    options: ['A > C > B', 'C > B > A', 'A > B > C', 'C > A > B'],
    correctIndex: 3,
    explanation: 'C puts four of its five values 20 units from the mean, A has values 10 and 20 units away, and B\'s values are within 2 units, so C has the largest SD and B the smallest.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'dd-ent-5a',
    question: 'Battery lifetimes are approximately normal with mean 40 hours and standard deviation 4 hours. By the empirical rule, about what percent of batteries last between 36 and 48 hours?',
    options: ['68%', '81.5%', '95%', '97.5%'],
    correctIndex: 1,
    explanation: '36 is one SD below the mean and 48 is two SDs above. That is $34\\% + 47.5\\% = 81.5\\%$; 97.5% is the share below 48, and 68% and 95% are symmetric intervals.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'dd-ent-5b',
    question: 'Maya scored 82 on a history test where the class mean was 74 and the SD was 4. Jon scored 88 on a chemistry test where the mean was 79 and the SD was 6. Relative to their own classes, who did better?',
    options: ['Maya, whose z-score is 2.0', 'Jon, whose z-score is 1.5', 'Jon, whose raw score is higher', 'Neither; the tests cannot be compared'],
    correctIndex: 0,
    explanation: 'Maya\'s z-score is $(82 - 74)/4 = 2.0$ and Jon\'s is $(88 - 79)/6 = 1.5$, so Maya stands farther above her class mean. Raw scores from different tests are not comparable, but z-scores are.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'dd-ent-6a',
    question: 'Adult women\'s heights are approximately normal with mean 64.5 inches and SD 2.5 inches. By the empirical rule, about what percent of women are either shorter than 59.5 inches or taller than 67 inches?',
    options: ['18.5%', '16.15%', '21%', '36.5%'],
    correctIndex: 0,
    explanation: '59.5 inches is two SDs below the mean (2.5% below) and 67 inches is one SD above (16% above), so the total is $2.5\\% + 16\\% = 18.5\\%$. Using 5% for the lower tail double-counts both tails.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'dd-ent-6b',
    question: 'Nine delivery times (minutes): 18, 20, 21, 22, 23, 24, 25, 27, 52. Which summary is most appropriate?',
    options: ['Mean 25.8 min, IQR 5.5 min, with no outliers', 'Median 23 min, IQR 5.5 min, with no outliers', 'Median 25.8 min, IQR 5.5 min, with 52 min an outlier', 'Median 23 min, IQR 5.5 min, with 52 min an outlier'],
    correctIndex: 3,
    explanation: 'The median is the 5th value, 23. With $Q_1 = 20.5$ and $Q_3 = 26$, $IQR = 5.5$ and the upper fence is $26 + 8.25 = 34.25$, so 52 is an outlier; 25.8 is the mean, which the outlier inflates.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'dd-ent-7a',
    question: 'A data set has mean 30, SD 5 and IQR 6. Every value is transformed by $y = 50 - 2x$. What are the new mean, SD and IQR?',
    options: ['Mean 10, SD 10, IQR 12', 'Mean -10, SD 40, IQR 38', 'Mean -10, SD 10, IQR 12', 'Mean -10, SD -10, IQR -12'],
    correctIndex: 2,
    explanation: 'The mean goes through the whole rule: $50 - 2(30) = -10$. Spread is multiplied by $|-2| = 2$ and is unaffected by adding 50, so the SD becomes 10 and the IQR 12; measures of spread are never negative.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'dd-ent-7b',
    question: 'A student summarizes 40 house sizes as "mean 2,150 sq ft, SD 900 sq ft." A histogram of the sizes is strongly skewed right, with several very large homes. What is the best revision?',
    options: ['Use the mean and the range', 'Keep the summary, since n is above 30', 'Use the mean and the IQR', 'Use the median and IQR'],
    correctIndex: 3,
    explanation: 'Strong skew and very large values pull the mean and SD, so resistant measures, the median and IQR, describe a typical size and spread better. Sample size does not fix skewed summaries, and the range is not resistant.',
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
