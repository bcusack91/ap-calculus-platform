/**
 * Entrance Quiz — Chi-Square Tests (AP Statistics)
 * Lesson: chi-square-tests-apstats (also rendered by chi-square-independence-homogeneity).
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'The Chi-Square Statistic and Its Distribution'
const P2 = 'Chi-Square Test for Independence'
const P3 = 'Chi-Square Test for Homogeneity'
const P4 = 'Conditions and Degrees of Freedom'
const P5 = 'Interpreting Results'
const P6 = 'Problem-Solving Workshop'
const P7 = 'Review & Applications'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'chi-ent-1a',
    question: 'In a two-way table, one cell has row total 120 and column total 75, and the table total is 300. The observed count in that cell is 36. What is the cell\'s contribution to $\\chi^2$?',
    options: ['0.20', '1.00', '36.00', '1.20'],
    correctIndex: 3,
    explanation: 'The expected count is $120 \\times 75/300 = 30$, so the contribution is $(36 - 30)^2/30 = 36/30 = 1.20$. Dividing by the observed count gives 1.00, and 0.20 forgets to square the difference.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'chi-ent-1b',
    question: 'Which statement about chi-square distributions is true?',
    options: ['They are skewed right, less so as df grows', 'They are symmetric about 0', 'They can take negative values', 'They are skewed left when df is small'],
    correctIndex: 0,
    explanation: 'A chi-square statistic is a sum of nonnegative terms, so its distributions start at 0 and are skewed right; the skew lessens as the degrees of freedom increase.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'chi-ent-2a',
    question: 'A random sample of 500 adults is classified by age group and by preferred news source. Which null hypothesis fits a chi-square test of these data?',
    options: ['There is an association between age and news source', 'Age group and news source are not associated', 'The mean age is the same for every news source', 'Every age group likes each news source equally'],
    correctIndex: 1,
    explanation: 'One sample classified on two categorical variables calls for a test of independence, whose null hypothesis is no association. Association is the alternative, and the test is not about means or equal popularity.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'chi-ent-2b',
    question: 'In a random sample of 250 students, 100 are athletes and 80 prefer online classes. If athletic status and class preference are independent, what is the expected number of athletes who prefer online classes?',
    options: ['32', '40', '80', '20'],
    correctIndex: 0,
    explanation: 'The expected count is (row total)(column total)/(table total) $= 100 \\times 80/250 = 32$. Equivalently, 40% of students are athletes, and 40% of the 80 is 32.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'chi-ent-3a',
    question: 'Researchers take separate random samples of 100 customers at each of four store locations and record each customer\'s payment method (cash, card or phone). Which test fits?',
    options: ['A test for independence', 'A two-sample t-test', 'A two-proportion z-test', 'A test for homogeneity'],
    correctIndex: 3,
    explanation: 'Several independent samples compared on the distribution of one categorical variable call for a chi-square test of homogeneity. A test of independence uses a single sample classified on two variables.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'chi-ent-3b',
    question: 'For the four-store study (separate random samples, payment method recorded), what is the null hypothesis?',
    options: ['Payment method and location are associated', 'Each store has the same payment-method distribution', 'Most customers at every store pay by card', 'The four stores have the same number of customers'],
    correctIndex: 1,
    explanation: 'A homogeneity test\'s null hypothesis says the distribution of the categorical variable is the same in every population. Association is the alternative, and the sample sizes were fixed by design.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'chi-ent-4a',
    question: 'A 2 × 3 table has expected counts 12.0, 8.5, 4.2, 18.0, 12.7 and 6.3. Which statement about the expected counts condition is correct?',
    options: ['It fails, since 4.2 is not greater than 5', 'It holds, since the counts total more than 50', 'It holds, since every count is positive', 'It can be judged only from observed counts'],
    correctIndex: 0,
    explanation: 'Every expected count must be greater than 5, and one cell expects only 4.2, so the condition is not met and the chi-square p-value may be inaccurate. The check uses expected counts, not observed ones.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'chi-ent-4b',
    question: 'A homogeneity test compares 5 randomly assigned treatment groups on an outcome with 3 categories. How many degrees of freedom does the test have?',
    options: ['15', '12', '8', '10'],
    correctIndex: 2,
    explanation: '$df = (\\text{rows} - 1)(\\text{columns} - 1) = (5 - 1)(3 - 1) = 8$. 15 counts the cells, and 12 uses $(5-1) \\times 3$.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'chi-ent-5a',
    question: 'A chi-square test gives $\\chi^2 = 8.1$ with 3 degrees of freedom. The table gives critical values 7.815 for a right-tail area of 0.05 and 9.348 for 0.025. Which range contains the p-value?',
    options: ['0.05 < p < 0.10', 'p > 0.10', '0.01 < p < 0.025', '0.025 < p < 0.05'],
    correctIndex: 3,
    explanation: '8.1 lies between 7.815 and 9.348, so the right-tail area is between 0.025 and 0.05. A larger statistic means a smaller tail area.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'chi-ent-5b',
    question: 'A significant chi-square test compares Groups A and B on a yes/no answer. The cell contributions are A–yes 0.4, A–no 0.5, B–yes 5.2 and B–no 6.1, and the observed B–no count is above its expected count. Which follow-up statement is best?',
    options: ['Group A said no more often than H0 predicts', 'Group B said no less often than H0 predicts', 'Group B said no more often than H0 predicts', 'Every cell contributed about equally to χ²'],
    correctIndex: 2,
    explanation: 'The B cells have by far the largest contributions, and the B–no observed count exceeds its expected count, so Group B answered no more often than independence predicts.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'chi-ent-6a',
    question: 'A 2 × 2 table has observed counts 30 and 20 in the first row and 20 and 30 in the second, so every row and column total is 50. What is $\\chi^2$?',
    options: ['1.0', '2.0', '8.0', '4.0'],
    correctIndex: 3,
    explanation: 'Every expected count is $50 \\times 50/100 = 25$, and each cell contributes $(5)^2/25 = 1$. The four cells sum to $\\chi^2 = 4.0$.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'chi-ent-6b',
    question: 'A random sample of 400 adults is classified by education level and by whether they voted in the last election. A chi-square test gives $p < 0.001$. Which conclusion is justified?',
    options: ['More education causes people to vote', 'Education and voting are associated', 'Voting is unrelated to education level', 'The data show no relationship at all'],
    correctIndex: 1,
    explanation: 'The tiny p-value gives convincing evidence of an association among adults. The data are observational, so the test cannot show that education causes voting.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'chi-ent-7a',
    question: 'A researcher wants to know whether 10% of a city\'s adults are left-handed, using one random sample. Which procedure fits?',
    options: ['A chi-square test for independence', 'A chi-square test for homogeneity', 'A one-proportion z-test', 'A two-sample t-test for means'],
    correctIndex: 2,
    explanation: 'One categorical (yes/no) variable compared with a claimed proportion calls for a one-proportion z-test. Chi-square tests in this course need a two-way table.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'chi-ent-7b',
    question: 'Why is the p-value of a chi-square test always a right-tail area?',
    options: ['The chi-square curve is symmetric about 0', 'Small χ² values show a strong association', 'Only large χ² values are evidence against H0', 'The left tail always has an area of 0.5'],
    correctIndex: 2,
    explanation: 'A large $\\chi^2$ means observed counts sit far from the expected counts, which is what contradicts $H_0$; values near 0 mean the data fit $H_0$ well.',
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
