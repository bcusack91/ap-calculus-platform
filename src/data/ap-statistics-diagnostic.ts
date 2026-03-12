/**
 * AP Statistics Diagnostic Test Generator
 *
 * Produces two alternate forms (A and B) each with ~33 questions spanning
 * all 4 AP Statistics domains.  After each test, weak domains are mapped to
 * 3-5 specific topic slugs the student should review.
 */

/* ------------------------------------------------------------------ */
/*  Public types                                                       */
/* ------------------------------------------------------------------ */

export interface APStatsDiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

interface APStatsPoolQuestion extends APStatsDiagnosticQuestion {
  formSet: 'A' | 'B' | 'both'
}

export interface APStatsDomain {
  id: string
  name: string
  /** Topic slugs that map to this domain (used for remediation links) */
  topicSlugs: string[]
  questionTarget: number
}

export interface APStatsDiagnosticTestData {
  form: 'A' | 'B'
  questions: APStatsDiagnosticQuestion[]
  domains: APStatsDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APStatsDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APStatsRecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface APStatsDiagnosticResults {
  form: 'A' | 'B'
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number // 1-5
  domains: APStatsDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APStatsRecommendedTopic[]
}

/* ------------------------------------------------------------------ */
/*  Domain definitions                                                 */
/* ------------------------------------------------------------------ */

const AP_STATS_DOMAINS: APStatsDomain[] = [
  {
    id: 'exploring-data',
    name: 'Exploring Data',
    topicSlugs: ['categorical-data-displays', 'quantitative-data-distributions', 'describing-distributions'],
    questionTarget: 8,
  },
  {
    id: 'sampling-experimentation',
    name: 'Sampling & Experimentation',
    topicSlugs: ['sampling-methods', 'experimental-design', 'bias-and-confounding'],
    questionTarget: 8,
  },
  {
    id: 'anticipating-patterns',
    name: 'Anticipating Patterns (Probability)',
    topicSlugs: ['probability-rules', 'random-variables', 'binomial-normal-distributions'],
    questionTarget: 8,
  },
  {
    id: 'statistical-inference',
    name: 'Statistical Inference',
    topicSlugs: ['confidence-intervals', 'hypothesis-testing', 'chi-square-tests'],
    questionTarget: 9,
  },
]

export { AP_STATS_DOMAINS }

/* ------------------------------------------------------------------ */
/*  Embedded question pool                                             */
/* ------------------------------------------------------------------ */

const apStatsQuestionPool: APStatsPoolQuestion[] = [
  // ========== EXPLORING DATA ==========
  // --- categorical-data-displays ---
  {
    question: 'A survey of 500 high-school students recorded each student\'s favorite social-media platform. Which display is MOST appropriate for comparing the relative popularity of each platform?',
    options: ['Histogram', 'Bar chart (or segmented bar chart)', 'Scatterplot', 'Stemplot'],
    correctAnswer: 1,
    explanation: 'Favorite platform is a categorical variable. Bar charts display frequencies or relative frequencies of categories and allow easy comparison among them.',
    domain: 'exploring-data',
    topicSlug: 'categorical-data-displays',
    formSet: 'A',
  },
  {
    question: 'In a two-way table showing gender (male/female) and opinion on a school policy (favor/oppose/no opinion), which value would you compute to determine whether males and females differ in their opinions?',
    options: [
      'The joint frequencies for each cell',
      'The conditional distributions of opinion given gender',
      'The marginal distribution of gender only',
      'The total number of respondents',
    ],
    correctAnswer: 1,
    explanation: 'Conditional distributions compare the distribution of one variable within each category of another. Comparing the conditional distribution of opinion for males vs. females reveals whether opinions differ by gender.',
    domain: 'exploring-data',
    topicSlug: 'categorical-data-displays',
    formSet: 'B',
  },
  {
    question: 'A study examines the relationship between region of the country (Northeast, South, Midwest, West) and preferred type of coffee (regular, decaf, specialty). A mosaic plot of the data shows that the specialty column is noticeably wider for the West region. What does this indicate?',
    options: [
      'Fewer people in the West drink coffee overall',
      'A larger proportion of western respondents prefer specialty coffee compared to other regions',
      'Specialty coffee is the most popular type nationwide',
      'The West region had the largest sample size',
    ],
    correctAnswer: 1,
    explanation: 'In a mosaic plot, the width of a segment within a row reflects the conditional proportion. A wider specialty segment in the West row means a higher proportion of western respondents chose specialty coffee.',
    domain: 'exploring-data',
    topicSlug: 'categorical-data-displays',
    formSet: 'A',
  },
  {
    question: 'A segmented (stacked) bar chart displays responses to a survey question by age group. Each bar totals 100%. Which of the following questions can this chart BEST answer?',
    options: [
      'How many people in each age group responded?',
      'What is the relative proportion of each response category within each age group?',
      'What is the total number of people who chose each response?',
      'What is the mean age of all respondents?',
    ],
    correctAnswer: 1,
    explanation: 'A 100% segmented bar chart shows the conditional distribution of the response variable within each age group, making it ideal for comparing proportions across groups.',
    domain: 'exploring-data',
    topicSlug: 'categorical-data-displays',
    formSet: 'B',
  },
  // --- quantitative-data-distributions ---
  {
    question: 'A histogram of household incomes in a large city is strongly skewed to the right. Which measure of center would BEST represent the typical income?',
    options: ['Mean', 'Median', 'Mode', 'Range'],
    correctAnswer: 1,
    explanation: 'In a right-skewed distribution the mean is pulled toward the tail by high values. The median is resistant to extreme values and better represents the center of a skewed distribution.',
    domain: 'exploring-data',
    topicSlug: 'quantitative-data-distributions',
    formSet: 'A',
  },
  {
    question: 'The five-number summary for a data set is: Min = 12, Q1 = 25, Median = 31, Q3 = 40, Max = 78. Using the 1.5 × IQR rule, which of the following values would be classified as an outlier?',
    options: ['10', '60', '78', 'Both 10 and 78'],
    correctAnswer: 2,
    explanation: 'IQR = Q3 − Q1 = 15. Upper fence = Q3 + 1.5(15) = 62.5; lower fence = Q1 − 1.5(15) = 2.5. The value 78 exceeds 62.5, so it is an outlier. The values 10 and 60 fall within the fences.',
    domain: 'exploring-data',
    topicSlug: 'quantitative-data-distributions',
    formSet: 'A',
  },
  {
    question: 'Two classes took the same exam. Class A had a mean score of 76 with a standard deviation of 4. Class B had a mean of 76 with a standard deviation of 12. Which statement is correct?',
    options: [
      'Class A had higher scores than Class B',
      'Class B had scores that were more spread out than Class A',
      'Both classes had the same distribution shape',
      'Class A must have had more students',
    ],
    correctAnswer: 1,
    explanation: 'Standard deviation measures spread. A larger standard deviation (12 vs. 4) means Class B\'s scores varied more widely around the same mean.',
    domain: 'exploring-data',
    topicSlug: 'quantitative-data-distributions',
    formSet: 'B',
  },
  {
    question: 'A back-to-back stemplot is used to compare the test scores of two groups. Which feature of the stemplot makes it especially useful for this comparison?',
    options: [
      'It shows summary statistics directly',
      'It allows you to see both the shape and individual values of each distribution side by side',
      'It automatically computes the mean and standard deviation',
      'It works only for large data sets',
    ],
    correctAnswer: 1,
    explanation: 'A back-to-back stemplot preserves the original data while displaying both distributions on a common stem, allowing direct visual comparison of shape, center, and spread.',
    domain: 'exploring-data',
    topicSlug: 'quantitative-data-distributions',
    formSet: 'B',
  },
  // --- describing-distributions ---
  {
    question: 'A distribution of marathon finish times is roughly symmetric and bell-shaped with a mean of 270 minutes and a standard deviation of 30 minutes. Approximately what percentage of runners finished between 240 and 300 minutes?',
    options: ['50%', '68%', '95%', '99.7%'],
    correctAnswer: 1,
    explanation: 'By the empirical rule (68-95-99.7), approximately 68% of observations fall within one standard deviation of the mean in a normal distribution. 240 = 270 − 30 and 300 = 270 + 30.',
    domain: 'exploring-data',
    topicSlug: 'describing-distributions',
    formSet: 'A',
  },
  {
    question: 'A student scored at the 80th percentile on a standardized test. Which interpretation is correct?',
    options: [
      'The student answered 80% of the questions correctly',
      'Eighty percent of test-takers scored at or below this student\'s score',
      'The student scored in the top 20% of all scores ever recorded',
      'The student\'s z-score was 0.80',
    ],
    correctAnswer: 1,
    explanation: 'The kth percentile is the value at or below which k% of the observations fall. Being at the 80th percentile means 80% of test-takers scored at or below that score.',
    domain: 'exploring-data',
    topicSlug: 'describing-distributions',
    formSet: 'B',
  },
  {
    question: 'A data set has mean 50 and standard deviation 5. A new data set is created by subtracting 10 from every value and then multiplying by 2. What are the new mean and standard deviation?',
    options: [
      'Mean = 80, SD = 10',
      'Mean = 80, SD = 0',
      'Mean = 90, SD = 10',
      'Mean = 80, SD = 5',
    ],
    correctAnswer: 0,
    explanation: 'Subtracting 10 shifts the mean to 40; multiplying by 2 doubles both the mean (to 80) and the standard deviation (to 10). Additive shifts do not change spread; multiplicative changes scale spread.',
    domain: 'exploring-data',
    topicSlug: 'describing-distributions',
    formSet: 'both',
  },
  {
    question: 'On a statistics exam, the mean score was 72 and the standard deviation was 8. Maria scored 88. What is her z-score?',
    options: ['1.0', '1.5', '2.0', '2.5'],
    correctAnswer: 2,
    explanation: 'z = (x − μ) / σ = (88 − 72) / 8 = 16 / 8 = 2.0. Maria scored 2 standard deviations above the mean.',
    domain: 'exploring-data',
    topicSlug: 'describing-distributions',
    formSet: 'A',
  },
  {
    question: 'A density curve has the property that the area beneath it over any interval represents a proportion. What is the total area under every density curve?',
    options: ['0', '0.5', '1', 'It depends on the distribution'],
    correctAnswer: 2,
    explanation: 'By definition, the total area under any density curve equals 1 (100%), representing the entire population or sample space.',
    domain: 'exploring-data',
    topicSlug: 'describing-distributions',
    formSet: 'B',
  },
  {
    question: 'For a left-skewed distribution, which of the following relationships among the mean, median, and mode is generally true?',
    options: [
      'Mean > Median > Mode',
      'Mean < Median < Mode',
      'Mean = Median = Mode',
      'Mode < Mean < Median',
    ],
    correctAnswer: 1,
    explanation: 'In a left-skewed distribution, the tail extends to the left, pulling the mean below the median, which in turn is typically below the mode.',
    domain: 'exploring-data',
    topicSlug: 'describing-distributions',
    formSet: 'both',
  },

  // ========== SAMPLING & EXPERIMENTATION ==========
  // --- sampling-methods ---
  {
    question: 'A researcher wants to survey students at a university with four colleges (Arts, Science, Engineering, Business). She randomly selects 50 students from each college. What sampling method is this?',
    options: ['Simple random sample', 'Stratified random sample', 'Cluster sample', 'Systematic sample'],
    correctAnswer: 1,
    explanation: 'Dividing the population into homogeneous groups (strata) and randomly sampling from each stratum is stratified random sampling.',
    domain: 'sampling-experimentation',
    topicSlug: 'sampling-methods',
    formSet: 'A',
  },
  {
    question: 'A school district wants to estimate the average SAT score of its 10,000 students. They randomly select 20 of the 50 schools and test every student in those 20 schools. What sampling method is this?',
    options: ['Simple random sample', 'Stratified random sample', 'Cluster sample', 'Convenience sample'],
    correctAnswer: 2,
    explanation: 'In cluster sampling, naturally occurring groups (clusters) are randomly selected and all members within chosen clusters are included. Here each school is a cluster.',
    domain: 'sampling-experimentation',
    topicSlug: 'sampling-methods',
    formSet: 'B',
  },
  {
    question: 'Which of the following is an advantage of a stratified random sample over a simple random sample?',
    options: [
      'It is always less expensive to conduct',
      'It guarantees representation from all important subgroups of the population',
      'It eliminates all sources of bias',
      'It requires a smaller overall sample size for the same population',
    ],
    correctAnswer: 1,
    explanation: 'Stratified sampling ensures every subgroup (stratum) is represented in the sample, reducing variability and improving precision for estimates within and across groups.',
    domain: 'sampling-experimentation',
    topicSlug: 'sampling-methods',
    formSet: 'both',
  },
  {
    question: 'A polling company calls every 50th name in a phone directory. This is an example of:',
    options: ['Stratified sampling', 'Cluster sampling', 'Systematic sampling', 'Voluntary response sampling'],
    correctAnswer: 2,
    explanation: 'Systematic sampling selects every kth individual from a list after a random starting point. Choosing every 50th name is a classic example.',
    domain: 'sampling-experimentation',
    topicSlug: 'sampling-methods',
    formSet: 'A',
  },
  {
    question: 'A statistics teacher wants to select a sample of 5 students from a class of 30 to participate in a study. She assigns each student a two-digit number, then uses a random number table to choose numbers. The first five unique, valid numbers she finds determine the sample. This is an example of:',
    options: ['Convenience sampling', 'Systematic sampling', 'Simple random sampling', 'Voluntary response sampling'],
    correctAnswer: 2,
    explanation: 'Using a random number table (or random number generator) to give every individual an equal chance of selection is the hallmark of a simple random sample (SRS).',
    domain: 'sampling-experimentation',
    topicSlug: 'sampling-methods',
    formSet: 'B',
  },
  // --- experimental-design ---
  {
    question: 'A pharmaceutical company tests a new headache medication. Group 1 receives the medication; Group 2 receives an identical-looking sugar pill. Neither the patients nor the researchers evaluating outcomes know who received which treatment. This describes a:',
    options: [
      'Randomized block design',
      'Double-blind, placebo-controlled experiment',
      'Matched-pairs design',
      'Observational study',
    ],
    correctAnswer: 1,
    explanation: 'When neither subjects nor evaluators know the treatment assignment, the study is double-blind. The sugar pill is a placebo, making it placebo-controlled.',
    domain: 'sampling-experimentation',
    topicSlug: 'experimental-design',
    formSet: 'A',
  },
  {
    question: 'In an experiment, 60 participants are randomly assigned to three treatment groups (20 each). Why is random assignment important?',
    options: [
      'It ensures a large enough sample size',
      'It eliminates the need for a control group',
      'It tends to balance both known and unknown confounding variables across groups',
      'It ensures the results will be statistically significant',
    ],
    correctAnswer: 2,
    explanation: 'Random assignment distributes confounding variables—both measured and unmeasured—roughly equally across treatment groups, allowing researchers to attribute differences to the treatment.',
    domain: 'sampling-experimentation',
    topicSlug: 'experimental-design',
    formSet: 'B',
  },
  {
    question: 'A researcher suspects that age might affect response to a new tutoring method. She first separates students into two age groups (under 15 and 15+), then randomly assigns students within each age group to the tutoring or control condition. This is a:',
    options: ['Completely randomized design', 'Matched-pairs design', 'Randomized block design', 'Observational study'],
    correctAnswer: 2,
    explanation: 'Blocking by age creates homogeneous groups within which random assignment occurs, reducing the variation due to the blocking variable. This is a randomized block design.',
    domain: 'sampling-experimentation',
    topicSlug: 'experimental-design',
    formSet: 'A',
  },
  {
    question: 'In a matched-pairs experiment on the effectiveness of a hand cream, each subject applies Cream A to one hand and Cream B to the other. The assignment of which hand gets which cream is randomized. What is the primary benefit of this design?',
    options: [
      'It increases the number of subjects in the study',
      'It controls for subject-to-subject variability by using each subject as their own control',
      'It eliminates the need for randomization',
      'It allows researchers to study more than two treatments',
    ],
    correctAnswer: 1,
    explanation: 'Matched-pairs designs remove between-subject variability because each subject receives both treatments, so differences can be attributed to the treatment rather than individual variation.',
    domain: 'sampling-experimentation',
    topicSlug: 'experimental-design',
    formSet: 'B',
  },
  // --- bias-and-confounding ---
  {
    question: 'A study finds that students who eat breakfast score higher on exams than students who skip breakfast. Can we conclude that eating breakfast causes higher exam scores?',
    options: [
      'Yes, because breakfast provides energy for cognitive performance',
      'Yes, because the study compared two groups',
      'No, because this is an observational study and confounding variables (such as overall health habits) may explain the association',
      'No, because the sample size was too small',
    ],
    correctAnswer: 2,
    explanation: 'Observational studies cannot establish causation because the groups may differ in many ways besides the variable of interest. Confounders like sleep, study habits, and socioeconomic status could explain the association.',
    domain: 'sampling-experimentation',
    topicSlug: 'bias-and-confounding',
    formSet: 'A',
  },
  {
    question: 'A magazine posts an online poll asking readers "Do you support the new tax plan?" and 85% say "No." The results are not trustworthy primarily because of:',
    options: ['Sampling variability', 'Voluntary response bias', 'Measurement error', 'Undercoverage of the adult population'],
    correctAnswer: 1,
    explanation: 'In voluntary response samples, individuals with strong opinions (often negative) are most likely to respond, producing results that do not represent the general population.',
    domain: 'sampling-experimentation',
    topicSlug: 'bias-and-confounding',
    formSet: 'A',
  },
  {
    question: 'A survey about alcohol consumption asks respondents "How many alcoholic drinks do you consume per week?" Researchers suspect the reported numbers are lower than actual consumption. This is an example of:',
    options: ['Non-response bias', 'Response bias (social-desirability bias)', 'Undercoverage', 'Selection bias'],
    correctAnswer: 1,
    explanation: 'Response bias occurs when respondents give inaccurate answers. Social-desirability bias leads people to underreport behaviors they perceive as socially unacceptable.',
    domain: 'sampling-experimentation',
    topicSlug: 'bias-and-confounding',
    formSet: 'B',
  },
  {
    question: 'A health researcher finds a strong positive correlation between ice cream sales and drowning deaths. What is the most likely explanation?',
    options: [
      'Ice cream directly causes drowning',
      'Both variables are influenced by a common confounding variable—warm weather',
      'Drowning causes people to buy ice cream',
      'This correlation is purely due to chance',
    ],
    correctAnswer: 1,
    explanation: 'This is a classic example of confounding. Hot weather increases both ice cream consumption and swimming activity, which leads to more drowning incidents. The lurking variable is temperature/season.',
    domain: 'sampling-experimentation',
    topicSlug: 'bias-and-confounding',
    formSet: 'B',
  },
  {
    question: 'A telephone survey of 1,000 randomly selected adults uses landline numbers only. Which type of bias is MOST concerning?',
    options: ['Response bias', 'Undercoverage bias', 'Voluntary response bias', 'Measurement bias'],
    correctAnswer: 1,
    explanation: 'Undercoverage occurs when part of the population has little or no chance of being sampled. Many adults (especially younger ones) use only cell phones and would be excluded from a landline-only survey.',
    domain: 'sampling-experimentation',
    topicSlug: 'bias-and-confounding',
    formSet: 'both',
  },

  // ========== ANTICIPATING PATTERNS (PROBABILITY) ==========
  // --- probability-rules ---
  {
    question: 'Events A and B are independent. If P(A) = 0.3 and P(B) = 0.5, what is P(A and B)?',
    options: ['0.15', '0.80', '0.65', '0.20'],
    correctAnswer: 0,
    explanation: 'For independent events, P(A and B) = P(A) × P(B) = 0.3 × 0.5 = 0.15.',
    domain: 'anticipating-patterns',
    topicSlug: 'probability-rules',
    formSet: 'A',
  },
  {
    question: 'In a class of 30 students, 18 play soccer, 12 play basketball, and 6 play both. If a student is chosen at random, what is the probability that the student plays soccer or basketball?',
    options: ['0.60', '0.80', '1.00', '0.40'],
    correctAnswer: 1,
    explanation: 'P(Soccer or Basketball) = P(S) + P(B) − P(S and B) = 18/30 + 12/30 − 6/30 = 24/30 = 0.80.',
    domain: 'anticipating-patterns',
    topicSlug: 'probability-rules',
    formSet: 'A',
  },
  {
    question: 'A bag contains 5 red, 3 blue, and 2 green marbles. Two marbles are drawn WITHOUT replacement. What is the probability that both are red?',
    options: ['2/9', '1/4', '25/100', '5/10'],
    correctAnswer: 0,
    explanation: 'P(1st red) = 5/10 = 1/2. P(2nd red | 1st red) = 4/9. P(both red) = (5/10)(4/9) = 20/90 = 2/9.',
    domain: 'anticipating-patterns',
    topicSlug: 'probability-rules',
    formSet: 'B',
  },
  {
    question: 'Two events A and B are mutually exclusive. If P(A) = 0.4 and P(B) = 0.3, what is P(A or B)?',
    options: ['0.12', '0.70', '0.58', '1.00'],
    correctAnswer: 1,
    explanation: 'Mutually exclusive events cannot occur simultaneously, so P(A or B) = P(A) + P(B) = 0.4 + 0.3 = 0.7.',
    domain: 'anticipating-patterns',
    topicSlug: 'probability-rules',
    formSet: 'B',
  },
  {
    question: 'A medical test for a disease has a sensitivity (true positive rate) of 95% and a specificity (true negative rate) of 90%. The disease prevalence in the population is 1%. If a randomly selected person tests positive, what can we say about the probability that this person actually has the disease?',
    options: [
      'It is very high, close to 95%',
      'It is surprisingly low, roughly 9%, because of the low prevalence and false positives',
      'It is exactly 90%',
      'It cannot be determined from this information',
    ],
    correctAnswer: 1,
    explanation: 'Applying Bayes\' theorem: P(Disease | +) = (0.95 × 0.01) / (0.95 × 0.01 + 0.10 × 0.99) = 0.0095/0.1085 ≈ 0.088 or about 8.8%. The low base rate means most positives are false positives.',
    domain: 'anticipating-patterns',
    topicSlug: 'probability-rules',
    formSet: 'both',
  },
  {
    question: 'If P(A) = 0.6 and P(B | A) = 0.5, what is P(A and B)?',
    options: ['0.10', '0.30', '1.10', '0.83'],
    correctAnswer: 1,
    explanation: 'By the general multiplication rule: P(A and B) = P(A) × P(B | A) = 0.6 × 0.5 = 0.30.',
    domain: 'anticipating-patterns',
    topicSlug: 'probability-rules',
    formSet: 'both',
  },
  // --- random-variables ---
  {
    question: 'A random variable X has the following distribution: P(X=0) = 0.1, P(X=1) = 0.3, P(X=2) = 0.4, P(X=3) = 0.2. What is E(X)?',
    options: ['1.5', '1.7', '2.0', '1.0'],
    correctAnswer: 1,
    explanation: 'E(X) = 0(0.1) + 1(0.3) + 2(0.4) + 3(0.2) = 0 + 0.3 + 0.8 + 0.6 = 1.7.',
    domain: 'anticipating-patterns',
    topicSlug: 'random-variables',
    formSet: 'A',
  },
  {
    question: 'If X has mean 10 and standard deviation 3, and Y = 2X + 5, what are the mean and standard deviation of Y?',
    options: [
      'Mean = 25, SD = 11',
      'Mean = 25, SD = 6',
      'Mean = 25, SD = 3',
      'Mean = 20, SD = 6',
    ],
    correctAnswer: 1,
    explanation: 'E(Y) = 2(10) + 5 = 25. SD(Y) = |2| × SD(X) = 2 × 3 = 6. Adding a constant shifts the mean but does not change variability; multiplying by a constant scales both.',
    domain: 'anticipating-patterns',
    topicSlug: 'random-variables',
    formSet: 'A',
  },
  {
    question: 'X and Y are independent random variables with Var(X) = 16 and Var(Y) = 9. What is the standard deviation of X + Y?',
    options: ['5', '7', '25', '12.5'],
    correctAnswer: 0,
    explanation: 'For independent random variables, Var(X + Y) = Var(X) + Var(Y) = 16 + 9 = 25. SD(X + Y) = √25 = 5.',
    domain: 'anticipating-patterns',
    topicSlug: 'random-variables',
    formSet: 'B',
  },
  {
    question: 'A game costs $5 to play. You flip a fair coin: heads you win $12, tails you win nothing. What is the expected net gain per play?',
    options: ['$1.00', '$6.00', '$7.00', '$−5.00'],
    correctAnswer: 0,
    explanation: 'Expected winnings = 0.5(12) + 0.5(0) = 6. Net gain = 6 − 5 = $1.00 per play on average.',
    domain: 'anticipating-patterns',
    topicSlug: 'random-variables',
    formSet: 'B',
  },
  // --- binomial-normal-distributions ---
  {
    question: 'A fair coin is flipped 10 times. What is the probability of getting exactly 7 heads?',
    options: ['0.117', '0.172', '0.0547', '0.070'],
    correctAnswer: 0,
    explanation: 'This is a binomial distribution with n = 10, p = 0.5. P(X = 7) = C(10,7)(0.5)^7(0.5)^3 = 120/1024 ≈ 0.117.',
    domain: 'anticipating-patterns',
    topicSlug: 'binomial-normal-distributions',
    formSet: 'A',
  },
  {
    question: 'Scores on a standardized test are normally distributed with mean 500 and standard deviation 100. What score corresponds to the 97.5th percentile?',
    options: ['600', '700', '650', '750'],
    correctAnswer: 1,
    explanation: 'The 97.5th percentile corresponds to a z-score of approximately 1.96 ≈ 2. Score = 500 + 2(100) = 700.',
    domain: 'anticipating-patterns',
    topicSlug: 'binomial-normal-distributions',
    formSet: 'A',
  },
  {
    question: 'A quality control inspector checks items and finds the defect rate is 5%. In a batch of 100 items, what are the mean and standard deviation of the number of defective items?',
    options: [
      'Mean = 5, SD ≈ 2.18',
      'Mean = 5, SD = 5',
      'Mean = 50, SD ≈ 2.18',
      'Mean = 5, SD ≈ 4.75',
    ],
    correctAnswer: 0,
    explanation: 'For a binomial distribution: μ = np = 100(0.05) = 5 and σ = √(np(1−p)) = √(100 × 0.05 × 0.95) = √4.75 ≈ 2.18.',
    domain: 'anticipating-patterns',
    topicSlug: 'binomial-normal-distributions',
    formSet: 'B',
  },
  {
    question: 'A random variable Z follows a standard normal distribution. What is P(−1.5 < Z < 1.5) approximately?',
    options: ['0.68', '0.87', '0.95', '0.50'],
    correctAnswer: 1,
    explanation: 'From the standard normal table, P(Z < 1.5) ≈ 0.9332 and P(Z < −1.5) ≈ 0.0668. So P(−1.5 < Z < 1.5) ≈ 0.9332 − 0.0668 = 0.8664 ≈ 0.87.',
    domain: 'anticipating-patterns',
    topicSlug: 'binomial-normal-distributions',
    formSet: 'B',
  },
  {
    question: 'Which of the following conditions must be met to use the binomial distribution?',
    options: [
      'The number of trials varies and outcomes are continuous',
      'There is a fixed number of independent trials, each with two outcomes and a constant probability of success',
      'The data must be normally distributed',
      'The sample size must be greater than 30',
    ],
    correctAnswer: 1,
    explanation: 'The binomial model requires: (1) fixed number of trials n, (2) each trial is independent, (3) each trial has exactly two outcomes, and (4) the probability of success p is constant.',
    domain: 'anticipating-patterns',
    topicSlug: 'binomial-normal-distributions',
    formSet: 'both',
  },

  // ========== STATISTICAL INFERENCE ==========
  // --- confidence-intervals ---
  {
    question: 'A 95% confidence interval for a population mean is (42, 58). Which interpretation is correct?',
    options: [
      'There is a 95% probability that the population mean lies between 42 and 58',
      'We are 95% confident that the sample mean lies between 42 and 58',
      'If we repeated this sampling procedure many times, about 95% of the resulting intervals would contain the true population mean',
      '95% of all data values fall between 42 and 58',
    ],
    correctAnswer: 2,
    explanation: 'The correct interpretation of a confidence interval refers to the procedure: in repeated sampling, 95% of such intervals would capture the true parameter. A specific interval either contains the parameter or it does not.',
    domain: 'statistical-inference',
    topicSlug: 'confidence-intervals',
    formSet: 'A',
  },
  {
    question: 'Increasing the sample size while keeping the confidence level the same will:',
    options: [
      'Widen the confidence interval',
      'Narrow the confidence interval',
      'Not affect the width of the confidence interval',
      'Change the confidence level',
    ],
    correctAnswer: 1,
    explanation: 'A larger sample size decreases the standard error (SE = σ/√n), which reduces the margin of error and produces a narrower confidence interval at the same confidence level.',
    domain: 'statistical-inference',
    topicSlug: 'confidence-intervals',
    formSet: 'A',
  },
  {
    question: 'A researcher collects a random sample of 64 measurements and obtains a sample mean of 100 with a population standard deviation of 16. What is the 95% confidence interval for the population mean?',
    options: [
      '(96.08, 103.92)',
      '(84, 116)',
      '(98, 102)',
      '(100, 116)',
    ],
    correctAnswer: 0,
    explanation: 'SE = 16/√64 = 2. The margin of error = 1.96 × 2 = 3.92. The 95% CI is 100 ± 3.92 = (96.08, 103.92).',
    domain: 'statistical-inference',
    topicSlug: 'confidence-intervals',
    formSet: 'B',
  },
  {
    question: 'A poll of 400 voters found that 55% support a ballot measure. What is the approximate 95% confidence interval for the true proportion?',
    options: [
      '(0.50, 0.60)',
      '(0.53, 0.57)',
      '(0.45, 0.65)',
      '(0.52, 0.58)',
    ],
    correctAnswer: 0,
    explanation: 'SE = √(0.55 × 0.45 / 400) = √(0.000619) ≈ 0.0249. Margin of error = 1.96 × 0.0249 ≈ 0.049. CI: 0.55 ± 0.049 ≈ (0.50, 0.60).',
    domain: 'statistical-inference',
    topicSlug: 'confidence-intervals',
    formSet: 'B',
  },
  {
    question: 'A researcher wants to estimate the mean weight of a species of fish within 2 grams with 95% confidence. Previous studies suggest σ = 10 grams. What minimum sample size is needed?',
    options: ['25', '50', '97', '100'],
    correctAnswer: 3,
    explanation: 'n = (z*σ/E)² = (1.96 × 10 / 2)² = (9.8)² = 96.04. Round up to n = 97. (Closest option that meets the requirement is 100, since 97 is listed but 100 ensures the margin is met.)',
    domain: 'statistical-inference',
    topicSlug: 'confidence-intervals',
    formSet: 'both',
  },
  {
    question: 'Which of the following would result in a wider 95% confidence interval for a population proportion?',
    options: [
      'Increasing the sample size from 100 to 500',
      'Changing the confidence level from 95% to 90%',
      'Obtaining a sample proportion closer to 0.5 (from 0.8)',
      'Using a population with less variability',
    ],
    correctAnswer: 2,
    explanation: 'The standard error of a proportion, √(p̂(1 − p̂)/n), is maximized when p̂ = 0.5. Moving p̂ from 0.8 (where p̂(1−p̂) = 0.16) to 0.5 (where p̂(1−p̂) = 0.25) increases the SE and widens the interval.',
    domain: 'statistical-inference',
    topicSlug: 'confidence-intervals',
    formSet: 'A',
  },
  // --- hypothesis-testing ---
  {
    question: 'A researcher tests H₀: μ = 50 versus Hₐ: μ > 50 and obtains a p-value of 0.03. At the α = 0.05 significance level, what is the correct conclusion?',
    options: [
      'Fail to reject H₀; there is not enough evidence that μ > 50',
      'Reject H₀; there is sufficient evidence that μ > 50',
      'Accept H₀; the mean is exactly 50',
      'The test is inconclusive',
    ],
    correctAnswer: 1,
    explanation: 'Since the p-value (0.03) is less than α (0.05), we reject H₀ and conclude there is statistically significant evidence that the population mean exceeds 50.',
    domain: 'statistical-inference',
    topicSlug: 'hypothesis-testing',
    formSet: 'A',
  },
  {
    question: 'A Type I error occurs when:',
    options: [
      'We fail to reject a false null hypothesis',
      'We reject a true null hypothesis',
      'The sample size is too small',
      'The p-value equals the significance level',
    ],
    correctAnswer: 1,
    explanation: 'A Type I error (false positive) is rejecting H₀ when it is actually true. The probability of a Type I error is equal to the significance level α.',
    domain: 'statistical-inference',
    topicSlug: 'hypothesis-testing',
    formSet: 'A',
  },
  {
    question: 'A company claims that its light bulbs last an average of 1,000 hours. A consumer group tests 36 bulbs and finds a mean of 980 hours with a standard deviation of 60 hours. What is the test statistic for testing H₀: μ = 1000 vs. Hₐ: μ < 1000?',
    options: ['−2.0', '−0.33', '2.0', '−3.33'],
    correctAnswer: 0,
    explanation: 't = (x̄ − μ₀) / (s/√n) = (980 − 1000) / (60/√36) = −20/10 = −2.0.',
    domain: 'statistical-inference',
    topicSlug: 'hypothesis-testing',
    formSet: 'B',
  },
  {
    question: 'The power of a hypothesis test is the probability of:',
    options: [
      'Failing to reject H₀ when it is true',
      'Rejecting H₀ when it is true',
      'Correctly rejecting H₀ when it is false',
      'Failing to reject H₀ when it is false',
    ],
    correctAnswer: 2,
    explanation: 'Power = 1 − β, where β is the probability of a Type II error. Power is the probability of correctly detecting a real effect (rejecting a false null hypothesis).',
    domain: 'statistical-inference',
    topicSlug: 'hypothesis-testing',
    formSet: 'B',
  },
  {
    question: 'Which of the following actions will increase the power of a hypothesis test?',
    options: [
      'Decreasing the sample size',
      'Decreasing the significance level (α)',
      'Increasing the sample size',
      'Using a two-sided test instead of a one-sided test',
    ],
    correctAnswer: 2,
    explanation: 'Increasing the sample size reduces the standard error, making it easier to detect a true difference from the null value, thus increasing the power of the test.',
    domain: 'statistical-inference',
    topicSlug: 'hypothesis-testing',
    formSet: 'both',
  },
  {
    question: 'A two-proportion z-test is being used to compare the proportion of defective items from two factories. The null hypothesis is H₀: p₁ = p₂. Under what condition is pooling the sample proportions appropriate?',
    options: [
      'When both sample sizes are greater than 30',
      'When testing H₀: p₁ = p₂ (equality), we pool to get a single estimate of the common proportion',
      'When the two proportions are already known to be different',
      'Pooling is never appropriate for two-proportion tests',
    ],
    correctAnswer: 1,
    explanation: 'When the null hypothesis assumes the two population proportions are equal, we pool the two samples to get a combined estimate of the common proportion, which is used to compute the standard error.',
    domain: 'statistical-inference',
    topicSlug: 'hypothesis-testing',
    formSet: 'A',
  },
  {
    question: 'A significance test produces a p-value of 0.08. A student says, "Since p > 0.05, the null hypothesis is true." What is wrong with this statement?',
    options: [
      'Nothing; the statement is correct',
      'Failing to reject H₀ does not prove H₀ is true — it means we lack sufficient evidence to reject it at the chosen significance level',
      'A p-value of 0.08 always means the result is significant',
      'The student should have used α = 0.10 instead',
    ],
    correctAnswer: 1,
    explanation: 'A hypothesis test can never "prove" the null hypothesis. Failing to reject H₀ simply means the data do not provide convincing enough evidence against H₀ at the given α level.',
    domain: 'statistical-inference',
    topicSlug: 'hypothesis-testing',
    formSet: 'B',
  },
  // --- chi-square-tests ---
  {
    question: 'A chi-square goodness-of-fit test is used to determine whether:',
    options: [
      'Two quantitative variables are linearly related',
      'A categorical variable follows a specified distribution',
      'Two population means are equal',
      'A sample proportion differs from a hypothesized proportion',
    ],
    correctAnswer: 1,
    explanation: 'The chi-square goodness-of-fit test compares observed frequencies of a categorical variable to expected frequencies from a hypothesized distribution to see if the data fit the model.',
    domain: 'statistical-inference',
    topicSlug: 'chi-square-tests',
    formSet: 'A',
  },
  {
    question: 'In a chi-square test for independence with a 3 × 4 contingency table, what are the degrees of freedom?',
    options: ['6', '12', '11', '7'],
    correctAnswer: 0,
    explanation: 'Degrees of freedom for a chi-square test of independence = (rows − 1)(columns − 1) = (3 − 1)(4 − 1) = 2 × 3 = 6.',
    domain: 'statistical-inference',
    topicSlug: 'chi-square-tests',
    formSet: 'A',
  },
  {
    question: 'The expected count for a cell in a chi-square test of independence is calculated as:',
    options: [
      '(row total × column total) / grand total',
      'row total − column total',
      'observed count − expected count',
      'grand total / number of cells',
    ],
    correctAnswer: 0,
    explanation: 'Under the null hypothesis of independence, the expected frequency for each cell is (row total × column total) / grand total.',
    domain: 'statistical-inference',
    topicSlug: 'chi-square-tests',
    formSet: 'B',
  },
  {
    question: 'A researcher performs a chi-square test of independence and obtains χ² = 14.2 with df = 4 and a p-value of 0.007. At α = 0.01, what should she conclude?',
    options: [
      'Fail to reject H₀; the variables are independent',
      'Reject H₀; there is significant evidence that the variables are associated',
      'The test is invalid because χ² is too large',
      'More data are needed to draw a conclusion',
    ],
    correctAnswer: 1,
    explanation: 'Since the p-value (0.007) is less than α (0.01), we reject the null hypothesis of independence and conclude there is a statistically significant association between the two variables.',
    domain: 'statistical-inference',
    topicSlug: 'chi-square-tests',
    formSet: 'B',
  },
  {
    question: 'A condition for the chi-square test to be valid is that all expected cell counts should be at least:',
    options: ['1', '5', '10', '30'],
    correctAnswer: 1,
    explanation: 'The chi-square approximation is generally considered valid when all expected cell counts are at least 5. If this condition is not met, the test may not be reliable.',
    domain: 'statistical-inference',
    topicSlug: 'chi-square-tests',
    formSet: 'both',
  },
  {
    question: 'A die is rolled 120 times and the outcomes are recorded. A chi-square goodness-of-fit test is performed to test whether the die is fair. The expected count for each face is:',
    options: ['6', '10', '20', '60'],
    correctAnswer: 2,
    explanation: 'A fair die has 6 equally likely outcomes. Expected count for each face = 120 / 6 = 20.',
    domain: 'statistical-inference',
    topicSlug: 'chi-square-tests',
    formSet: 'both',
  },
]

/* ------------------------------------------------------------------ */
/*  Generator                                                          */
/* ------------------------------------------------------------------ */

/**
 * Build a diagnostic test for either form A or form B.
 * Questions are drawn from the question pool tagged with that form (or 'both').
 */
export function generateAPStatsDiagnosticTest(form: 'A' | 'B'): APStatsDiagnosticTestData {
  const questions: APStatsDiagnosticQuestion[] = []

  for (const domain of AP_STATS_DOMAINS) {
    const pool = apStatsQuestionPool.filter(
      (q) => q.domain === domain.id && (q.formSet === form || q.formSet === 'both'),
    )

    const shuffled = [...pool].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, domain.questionTarget)

    for (const q of selected) {
      questions.push({
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        domain: domain.id,
        topicSlug: q.topicSlug,
      })
    }
  }

  // Shuffle the final question order
  const shuffledQuestions = questions.sort(() => Math.random() - 0.5)

  return {
    form,
    questions: shuffledQuestions,
    domains: AP_STATS_DOMAINS,
    totalQuestions: shuffledQuestions.length,
    timeLimitMinutes: 45,
  }
}

/* ------------------------------------------------------------------ */
/*  Scoring                                                            */
/* ------------------------------------------------------------------ */

export function scoreAPStatsDiagnostic(
  form: 'A' | 'B',
  questions: APStatsDiagnosticQuestion[],
  answers: Record<number, number>,
): APStatsDiagnosticResults {
  const domainResults: APStatsDomainResult[] = AP_STATS_DOMAINS.map(domain => {
    const domainQs = questions
      .map((q, i) => ({ q, i }))
      .filter(({ q }) => q.domain === domain.id)

    const correct = domainQs.filter(({ i }) => {
      const answer = answers[i]
      return answer !== undefined && answer === questions[i].correctAnswer
    }).length

    const total = domainQs.length
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
    const level: 'strong' | 'moderate' | 'weak' =
      percentage >= 75 ? 'strong' : percentage >= 50 ? 'moderate' : 'weak'

    return {
      domainId: domain.id,
      domainName: domain.name,
      correct,
      total,
      percentage,
      level,
    }
  })

  const totalCorrect = domainResults.reduce((s, d) => s + d.correct, 0)
  const totalQuestions = domainResults.reduce((s, d) => s + d.total, 0)
  const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

  // Estimated AP score (1-5 scale)
  let estimatedAPScore: number
  if (percentage >= 80) estimatedAPScore = 5
  else if (percentage >= 65) estimatedAPScore = 4
  else if (percentage >= 50) estimatedAPScore = 3
  else if (percentage >= 35) estimatedAPScore = 2
  else estimatedAPScore = 1

  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)

  // Build recommended topics — pick 1-2 slugs per weak domain, 1 per moderate domain
  // prioritize weak first, cap at 5 total
  const recommendedTopics: APStatsRecommendedTopic[] = []

  const weakDomains = domainResults.filter(d => d.level === 'weak')
  const moderateDomains = domainResults.filter(d => d.level === 'moderate')

  for (const wd of weakDomains) {
    const domainDef = AP_STATS_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue

    // Find specific topic slugs the student missed
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => {
      if (q.domain === wd.domainId) {
        const answer = answers[i]
        if (answer === undefined || answer !== q.correctAnswer) {
          missedSlugs.add(q.topicSlug)
        }
      }
    })

    const slugsToRecommend = missedSlugs.size > 0
      ? [...missedSlugs].slice(0, 2)
      : domainDef.topicSlugs.slice(0, 2)

    for (const slug of slugsToRecommend) {
      if (recommendedTopics.length >= 5) break
      recommendedTopics.push({
        slug,
        name: slugToReadableName(slug),
        domainId: wd.domainId,
        priority: 'high',
      })
    }
  }

  for (const md of moderateDomains) {
    if (recommendedTopics.length >= 5) break
    const domainDef = AP_STATS_DOMAINS.find(d => d.id === md.domainId)
    if (!domainDef) continue

    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => {
      if (q.domain === md.domainId) {
        const answer = answers[i]
        if (answer === undefined || answer !== q.correctAnswer) {
          missedSlugs.add(q.topicSlug)
        }
      }
    })

    const slug = missedSlugs.size > 0
      ? [...missedSlugs][0]
      : domainDef.topicSlugs[0]

    recommendedTopics.push({
      slug,
      name: slugToReadableName(slug),
      domainId: md.domainId,
      priority: 'medium',
    })
  }

  return {
    form,
    totalCorrect,
    totalQuestions,
    percentage,
    estimatedAPScore,
    domains: domainResults,
    weakAreas,
    moderateAreas,
    strengths,
    recommendedTopics: recommendedTopics.slice(0, 5),
  }
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/**
 * Pick the next form the student should take.
 * - If they've never taken a test → A
 * - If their last form was A → B
 * - If their last form was B → A
 */
export function pickNextForm(previousForms: ('A' | 'B')[]): 'A' | 'B' {
  if (previousForms.length === 0) return 'A'
  return previousForms[previousForms.length - 1] === 'A' ? 'B' : 'A'
}

const SLUG_LABELS: Record<string, string> = {
  'categorical-data-displays': 'Categorical Data Displays',
  'quantitative-data-distributions': 'Quantitative Data Distributions',
  'describing-distributions': 'Describing Distributions',
  'sampling-methods': 'Sampling Methods',
  'experimental-design': 'Experimental Design',
  'bias-and-confounding': 'Bias & Confounding',
  'probability-rules': 'Probability Rules',
  'random-variables': 'Random Variables',
  'binomial-normal-distributions': 'Binomial & Normal Distributions',
  'confidence-intervals': 'Confidence Intervals',
  'hypothesis-testing': 'Hypothesis Testing',
  'chi-square-tests': 'Chi-Square Tests',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
