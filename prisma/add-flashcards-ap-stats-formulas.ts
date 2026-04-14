import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP Statistics formula & concept flashcards...\n');

  const topicSlugs = [
    'types-data-sampling',
    'displaying-distributions-graphs',
    'describing-distributions',
    'measures-of-center',
    'measures-of-spread',
    'normal-distributions',
    'sampling-methods',
    'observational-vs-experiments',
    'experimental-design',
    'bias-sampling-surveys',
    'basic-probability-rules',
    'conditional-probability',
    'independence',
    'discrete-random-variables',
    'binomial-distribution',
    'geometric-distribution',
    'continuous-random-variables',
    'sampling-distributions',
    'central-limit-theorem',
    'ci-proportions',
    'ci-means',
    'interpreting-ci',
    'hypothesis-testing-framework',
    'type-errors',
    'tests-proportions',
    'tests-means',
    'paired-data',
    'chi-square-tests',
    'scatterplots-correlation',
    'least-squares-regression',
    'residuals-residual-plots',
    'coefficient-determination',
    'transformations-linearity',
    'inference-regression',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) {
      console.log(`⚠ Topic not found: ${slug}`);
      continue;
    }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  // Types of Data & Sampling
  const t1 = await prisma.topic.findFirst({ where: { slug: 'types-data-sampling' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'What is the difference between categorical and quantitative variables?', back: 'Categorical variables place individuals into groups (e.g., gender, color). Quantitative variables take numerical values for which arithmetic operations make sense (e.g., height, income).', hint: 'Think about whether you can meaningfully average the values.' },
        { topicId: t1.id, front: 'What is the difference between a population and a sample?', back: 'A population is the entire group of individuals we want information about. A sample is a subset of the population from which we actually collect data.', hint: 'We study samples to learn about populations.' },
        { topicId: t1.id, front: 'What is the difference between a parameter and a statistic?', back: 'A parameter is a number that describes the population (e.g., $\\mu$, $p$). A statistic is a number computed from sample data (e.g., $\\bar{x}$, $\\hat{p}$).', hint: 'Parameters → Population; Statistics → Sample.' },
      ],
    });
    console.log('✅ Types of Data & Sampling flashcards');
  }

  // Displaying Distributions
  const t2 = await prisma.topic.findFirst({ where: { slug: 'displaying-distributions-graphs' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'When should you use a histogram vs. a bar chart?', back: 'Histograms are for quantitative data (bars touch, representing continuous intervals). Bar charts are for categorical data (bars separated, representing distinct categories).', hint: 'Touching bars = quantitative.' },
        { topicId: t2.id, front: 'What is a stemplot (stem-and-leaf plot)?', back: 'A display where each observation is split into a stem (leading digits) and a leaf (trailing digit). Shows individual values and overall shape of the distribution.', hint: 'Preserves actual data values while showing shape.' },
        { topicId: t2.id, front: 'What features should you describe when comparing distributions?', back: 'Shape (symmetric, skewed left/right, bimodal), Center (mean, median), Spread (range, IQR, standard deviation), and any Outliers. Use the acronym SOCS.', hint: 'SOCS: Shape, Outliers, Center, Spread.' },
      ],
    });
    console.log('✅ Displaying Distributions flashcards');
  }

  // Measures of Center
  const t4 = await prisma.topic.findFirst({ where: { slug: 'measures-of-center' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'When is the median preferred over the mean?', back: 'The median is preferred when the data is skewed or contains outliers, because it is resistant to extreme values. The mean is pulled toward the tail in skewed distributions.', hint: 'Resistance to outliers is key.' },
        { topicId: t4.id, front: 'In a right-skewed distribution, how do mean and median compare?', back: 'Mean > Median. The mean is pulled toward the long right tail. In a left-skewed distribution, Mean < Median.', hint: 'The mean chases the tail.' },
      ],
    });
    console.log('✅ Measures of Center flashcards');
  }

  // Measures of Spread
  const t5 = await prisma.topic.findFirst({ where: { slug: 'measures-of-spread' } });
  if (t5) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t5.id, front: 'What is the formula for standard deviation?', back: '$s = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n-1}}$ for a sample. We divide by $n-1$ (degrees of freedom) to get an unbiased estimate of the population standard deviation.', hint: 'Sum of squared deviations from the mean, divided by n−1, then square root.' },
        { topicId: t5.id, front: 'What is the IQR and how is it used to detect outliers?', back: 'IQR = Q3 − Q1. An observation is a potential outlier if it falls more than 1.5 × IQR below Q1 or above Q3. This is the 1.5 × IQR rule (fences).', hint: 'Q1 − 1.5·IQR and Q3 + 1.5·IQR are the fences.' },
        { topicId: t5.id, front: 'What is the five-number summary?', back: 'Minimum, Q1 (25th percentile), Median (Q2), Q3 (75th percentile), Maximum. It is the basis for boxplots.', hint: 'Min, Q1, Median, Q3, Max.' },
      ],
    });
    console.log('✅ Measures of Spread flashcards');
  }

  // Normal Distributions
  const t6 = await prisma.topic.findFirst({ where: { slug: 'normal-distributions' } });
  if (t6) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t6.id, front: 'State the 68-95-99.7 (Empirical) Rule.', back: 'For a normal distribution: ~68% of data falls within 1 SD of the mean, ~95% within 2 SDs, ~99.7% within 3 SDs.', hint: 'Also called the Empirical Rule.' },
        { topicId: t6.id, front: 'What is a z-score and how is it calculated?', back: '$z = \\frac{x - \\mu}{\\sigma}$. It tells how many standard deviations an observation is above or below the mean. Negative z → below; positive z → above.', hint: 'Standardize: subtract mean, divide by SD.' },
        { topicId: t6.id, front: 'How do you assess normality?', back: 'Use a Normal Probability Plot (Q-Q plot): if points roughly follow a straight line, the data is approximately normal. Also check for symmetric, bell-shaped histogram and Empirical Rule fit.', hint: 'Straight line on Q-Q plot = normal.' },
      ],
    });
    console.log('✅ Normal Distributions flashcards');
  }

  // Sampling Methods
  const t7 = await prisma.topic.findFirst({ where: { slug: 'sampling-methods' } });
  if (t7) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t7.id, front: 'What is a Simple Random Sample (SRS)?', back: 'A sample chosen so that every possible sample of size $n$ has an equal chance of being selected. Every individual also has an equal chance. Use a random number generator or table.', hint: 'Equal chance for every possible sample.' },
        { topicId: t7.id, front: 'What is stratified random sampling?', back: 'Divide the population into homogeneous groups (strata), then take a separate SRS from each stratum. Reduces variability by ensuring representation from each group.', hint: 'Divide into groups first, then SRS from each.' },
        { topicId: t7.id, front: 'What is cluster sampling?', back: 'Divide the population into clusters (often geographic), randomly select entire clusters, then survey all individuals in chosen clusters. Useful when a complete list of individuals is impractical.', hint: 'Select whole groups randomly.' },
        { topicId: t7.id, front: 'What is systematic sampling?', back: 'Select every $k$th individual from a list after a random starting point. For example, every 10th name from an alphabetical list.', hint: 'Pick every kth item.' },
      ],
    });
    console.log('✅ Sampling Methods flashcards');
  }

  // Experimental Design
  const t9 = await prisma.topic.findFirst({ where: { slug: 'experimental-design' } });
  if (t9) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t9.id, front: 'What are the three principles of experimental design?', back: '1. Control (compare treatments to a control/placebo). 2. Randomization (randomly assign subjects to treatments to balance lurking variables). 3. Replication (use enough subjects for results to be reliable).', hint: 'Control, Randomize, Replicate.' },
        { topicId: t9.id, front: 'What is a confounding variable?', back: 'A variable whose effect on the response cannot be distinguished from the effect of the explanatory variable. Randomization helps prevent confounding.', hint: 'Two variables whose effects are mixed together.' },
        { topicId: t9.id, front: 'What is a double-blind experiment?', back: 'Neither the subjects nor those measuring the response know which treatment each subject received. This prevents placebo effects and experimenter bias.', hint: 'Both parties are "blind" to group assignment.' },
      ],
    });
    console.log('✅ Experimental Design flashcards');
  }

  // Basic Probability Rules
  const t11 = await prisma.topic.findFirst({ where: { slug: 'basic-probability-rules' } });
  if (t11) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t11.id, front: 'State the Addition Rule for probability.', back: '$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. If $A$ and $B$ are mutually exclusive (disjoint), then $P(A \\cap B) = 0$ and $P(A \\cup B) = P(A) + P(B)$.', hint: 'Add, then subtract the overlap to avoid double-counting.' },
        { topicId: t11.id, front: 'What is the complement rule?', back: '$P(A^c) = 1 - P(A)$. The probability of an event NOT happening is 1 minus the probability that it does.', hint: 'Everything not in A.' },
        { topicId: t11.id, front: 'State the Multiplication Rule for independent events.', back: 'If $A$ and $B$ are independent, $P(A \\cap B) = P(A) \\cdot P(B)$. For dependent events, $P(A \\cap B) = P(A) \\cdot P(B|A)$.', hint: 'Independent = multiply directly.' },
      ],
    });
    console.log('✅ Basic Probability Rules flashcards');
  }

  // Conditional Probability
  const t12 = await prisma.topic.findFirst({ where: { slug: 'conditional-probability' } });
  if (t12) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t12.id, front: 'What is the formula for conditional probability?', back: '$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$, where $P(B) > 0$. Read as "the probability of A given B."', hint: 'Restrict the sample space to B.' },
        { topicId: t12.id, front: "State Bayes' Theorem (simple form).", back: "$P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}$. It lets you reverse the conditioning — find $P(A|B)$ from $P(B|A)$.", hint: 'Flip the conditional using prior probabilities.' },
      ],
    });
    console.log('✅ Conditional Probability flashcards');
  }

  // Binomial Distribution
  const t15 = await prisma.topic.findFirst({ where: { slug: 'binomial-distribution' } });
  if (t15) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t15.id, front: 'What are the conditions for a binomial setting (BINS)?', back: 'B: Binary outcomes (success/failure). I: Independent trials. N: Fixed number of trials $n$. S: Same probability of success $p$ on each trial.', hint: 'BINS: Binary, Independent, Number fixed, Same p.' },
        { topicId: t15.id, front: 'What are the mean and standard deviation of a binomial distribution?', back: 'Mean: $\\mu = np$. Standard deviation: $\\sigma = \\sqrt{np(1-p)}$.', hint: 'np and square root of np(1−p).' },
        { topicId: t15.id, front: 'What is the binomial probability formula?', back: '$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$, where $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$.', hint: 'Choose k successes, raise p and (1−p) to appropriate powers.' },
      ],
    });
    console.log('✅ Binomial Distribution flashcards');
  }

  // Geometric Distribution
  const t16 = await prisma.topic.findFirst({ where: { slug: 'geometric-distribution' } });
  if (t16) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t16.id, front: 'What is the geometric probability formula?', back: '$P(X = k) = (1-p)^{k-1} p$, where $k$ is the trial on which the first success occurs.', hint: 'Fail k−1 times, then succeed.' },
        { topicId: t16.id, front: 'What is the mean of a geometric distribution?', back: '$\\mu = \\frac{1}{p}$. On average, you expect to wait $1/p$ trials for the first success.', hint: 'Reciprocal of the success probability.' },
      ],
    });
    console.log('✅ Geometric Distribution flashcards');
  }

  // Sampling Distributions
  const t18 = await prisma.topic.findFirst({ where: { slug: 'sampling-distributions' } });
  if (t18) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t18.id, front: 'What is a sampling distribution?', back: 'The distribution of a statistic (like $\\bar{x}$ or $\\hat{p}$) computed from all possible samples of the same size from a population. It describes how the statistic varies from sample to sample.', hint: 'Distribution of a statistic, not individual data.' },
        { topicId: t18.id, front: 'What are the mean and SD of the sampling distribution of $\\hat{p}$?', back: 'Mean: $\\mu_{\\hat{p}} = p$. Standard deviation: $\\sigma_{\\hat{p}} = \\sqrt{\\frac{p(1-p)}{n}}$. Conditions: $np \\ge 10$ and $n(1-p) \\ge 10$ for approximate normality.', hint: 'Mean equals population proportion; SD decreases with larger n.' },
      ],
    });
    console.log('✅ Sampling Distributions flashcards');
  }

  // Central Limit Theorem
  const t19 = await prisma.topic.findFirst({ where: { slug: 'central-limit-theorem' } });
  if (t19) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t19.id, front: 'State the Central Limit Theorem.', back: 'For a sufficiently large sample size ($n \\ge 30$ as a guideline), the sampling distribution of $\\bar{x}$ is approximately normal with mean $\\mu$ and standard deviation $\\frac{\\sigma}{\\sqrt{n}}$, regardless of the population shape.', hint: 'Large samples → normal sampling distribution.' },
        { topicId: t19.id, front: 'What is the standard error of the sample mean?', back: '$SE_{\\bar{x}} = \\frac{s}{\\sqrt{n}}$, where $s$ is the sample standard deviation. This estimates $\\frac{\\sigma}{\\sqrt{n}}$.', hint: 'Use s (sample) instead of σ (population).' },
      ],
    });
    console.log('✅ Central Limit Theorem flashcards');
  }

  // Confidence Intervals for Proportions
  const t20 = await prisma.topic.findFirst({ where: { slug: 'ci-proportions' } });
  if (t20) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t20.id, front: 'What is the formula for a confidence interval for a proportion?', back: '$\\hat{p} \\pm z^* \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$. Common $z^*$ values: 1.645 (90%), 1.96 (95%), 2.576 (99%).', hint: 'Estimate ± margin of error.' },
        { topicId: t20.id, front: 'What conditions must be checked for a one-proportion z-interval?', back: '1. Random sample. 2. 10% condition: $n < 0.10N$ (sample less than 10% of population). 3. Large counts: $n\\hat{p} \\ge 10$ and $n(1-\\hat{p}) \\ge 10$.', hint: 'Random, 10%, Large Counts.' },
        { topicId: t20.id, front: 'How do you find the sample size needed for a desired margin of error $E$?', back: '$n = \\left(\\frac{z^*}{E}\\right)^2 \\hat{p}(1-\\hat{p})$. If $\\hat{p}$ is unknown, use $\\hat{p} = 0.5$ for the most conservative (largest) $n$.', hint: 'Use p̂ = 0.5 if unknown — gives largest sample size.' },
      ],
    });
    console.log('✅ CI for Proportions flashcards');
  }

  // Confidence Intervals for Means
  const t21 = await prisma.topic.findFirst({ where: { slug: 'ci-means' } });
  if (t21) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t21.id, front: 'What is the formula for a confidence interval for a mean (t-interval)?', back: '$\\bar{x} \\pm t^* \\frac{s}{\\sqrt{n}}$, where $t^*$ is the critical value from the $t$-distribution with $df = n - 1$.', hint: 'Use t* instead of z* because σ is unknown.' },
        { topicId: t21.id, front: 'When do you use a $t$-distribution instead of a $z$-distribution?', back: 'Use $t$ when the population standard deviation $\\sigma$ is unknown and you estimate it with the sample standard deviation $s$. The $t$-distribution has heavier tails and depends on degrees of freedom $df = n - 1$.', hint: 'Unknown σ → use t. As n increases, t approaches z.' },
      ],
    });
    console.log('✅ CI for Means flashcards');
  }

  // Hypothesis Testing Framework
  const t23 = await prisma.topic.findFirst({ where: { slug: 'hypothesis-testing-framework' } });
  if (t23) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t23.id, front: 'What are $H_0$ and $H_a$?', back: '$H_0$ (null hypothesis): a statement of no effect or no difference—the status quo. $H_a$ (alternative hypothesis): what we suspect is true—there IS an effect or difference.', hint: 'H₀ = no change; Hₐ = yes change.' },
        { topicId: t23.id, front: 'What is a p-value?', back: 'The probability of obtaining a test statistic as extreme as (or more extreme than) the observed value, assuming $H_0$ is true. A small p-value provides evidence against $H_0$.', hint: 'How surprising is the data if H₀ were true?' },
        { topicId: t23.id, front: 'What does it mean to reject $H_0$ at significance level $\\alpha$?', back: 'If p-value $\\le \\alpha$, we reject $H_0$ and conclude there is statistically significant evidence for $H_a$. Common $\\alpha$ values: 0.01, 0.05, 0.10.', hint: 'p ≤ α → reject; p > α → fail to reject.' },
      ],
    });
    console.log('✅ Hypothesis Testing Framework flashcards');
  }

  // Type Errors
  const t24 = await prisma.topic.findFirst({ where: { slug: 'type-errors' } });
  if (t24) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t24.id, front: 'What is a Type I error?', back: 'Rejecting $H_0$ when $H_0$ is actually true (false positive). The probability of a Type I error is $\\alpha$ (the significance level).', hint: 'Convicting an innocent person.' },
        { topicId: t24.id, front: 'What is a Type II error?', back: 'Failing to reject $H_0$ when $H_a$ is actually true (false negative). The probability is denoted $\\beta$. Power $= 1 - \\beta$.', hint: 'Letting a guilty person go free.' },
        { topicId: t24.id, front: 'What is the power of a test and how can you increase it?', back: 'Power $= 1 - \\beta$ = probability of correctly rejecting $H_0$ when $H_a$ is true. Increase power by: increasing $n$, increasing $\\alpha$, increasing effect size, or decreasing variability.', hint: 'Probability of detecting a real effect.' },
      ],
    });
    console.log('✅ Type Errors flashcards');
  }

  // Tests for Proportions
  const t25 = await prisma.topic.findFirst({ where: { slug: 'tests-proportions' } });
  if (t25) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t25.id, front: 'What is the test statistic for a one-proportion z-test?', back: '$z = \\frac{\\hat{p} - p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n}}}$, where $p_0$ is the hypothesized proportion.', hint: 'Use p₀ (not p̂) in the denominator because we assume H₀ is true.' },
        { topicId: t25.id, front: 'What is the test statistic for a two-proportion z-test?', back: '$z = \\frac{\\hat{p}_1 - \\hat{p}_2}{\\sqrt{\\hat{p}_C(1-\\hat{p}_C)\\left(\\frac{1}{n_1}+\\frac{1}{n_2}\\right)}}$, where $\\hat{p}_C = \\frac{x_1+x_2}{n_1+n_2}$ is the combined (pooled) proportion.', hint: 'Pool the proportions under H₀.' },
      ],
    });
    console.log('✅ Tests for Proportions flashcards');
  }

  // Tests for Means
  const t26 = await prisma.topic.findFirst({ where: { slug: 'tests-means' } });
  if (t26) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t26.id, front: 'What is the test statistic for a one-sample t-test?', back: '$t = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}$ with $df = n - 1$.', hint: 'Same as CI formula rearranged to isolate the test statistic.' },
        { topicId: t26.id, front: 'What is the test statistic for a two-sample t-test?', back: '$t = \\frac{\\bar{x}_1 - \\bar{x}_2}{\\sqrt{\\frac{s_1^2}{n_1}+\\frac{s_2^2}{n_2}}}$. Use the conservative $df = \\min(n_1-1, n_2-1)$ or calculator df.', hint: 'Difference of means divided by combined standard error.' },
      ],
    });
    console.log('✅ Tests for Means flashcards');
  }

  // Chi-Square Tests
  const t28 = await prisma.topic.findFirst({ where: { slug: 'chi-square-tests' } });
  if (t28) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t28.id, front: 'What is the chi-square test statistic formula?', back: '$\\chi^2 = \\sum \\frac{(O - E)^2}{E}$, where $O$ = observed count and $E$ = expected count.', hint: 'Sum of (observed − expected)² / expected.' },
        { topicId: t28.id, front: 'What are the three types of chi-square tests?', back: '1. Goodness of Fit: one variable, comparing observed distribution to a claimed distribution ($df = k-1$). 2. Homogeneity: same variable across different populations ($df = (r-1)(c-1)$). 3. Independence: two variables in one population ($df = (r-1)(c-1)$).', hint: 'GoF, Homogeneity, Independence — same formula, different setups.' },
        { topicId: t28.id, front: 'What conditions must be checked for a chi-square test?', back: '1. Random sample or random assignment. 2. All expected counts $E \\ge 5$. 3. Independent observations (10% condition for sampling).', hint: 'Expected counts ≥ 5 is the key condition.' },
      ],
    });
    console.log('✅ Chi-Square Tests flashcards');
  }

  // Scatterplots & Correlation
  const t29 = await prisma.topic.findFirst({ where: { slug: 'scatterplots-correlation' } });
  if (t29) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t29.id, front: 'What does the correlation coefficient $r$ measure?', back: 'The strength and direction of the linear relationship between two quantitative variables. $-1 \\le r \\le 1$. Near ±1 = strong linear; near 0 = weak linear. Sign indicates direction.', hint: 'r only measures LINEAR association.' },
        { topicId: t29.id, front: 'What properties does $r$ have?', back: '$r$ has no units. It is not affected by changes in units, adding/subtracting constants, or switching $x$ and $y$. It only measures linear association — not curved relationships.', hint: 'Unit-free, symmetric in x and y.' },
      ],
    });
    console.log('✅ Scatterplots & Correlation flashcards');
  }

  // Least Squares Regression
  const t30 = await prisma.topic.findFirst({ where: { slug: 'least-squares-regression' } });
  if (t30) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t30.id, front: 'What is the least-squares regression line (LSRL)?', back: '$\\hat{y} = a + bx$, where $b = r \\cdot \\frac{s_y}{s_x}$ and $a = \\bar{y} - b\\bar{x}$. It minimizes the sum of squared residuals.', hint: 'The line passes through $(\\bar{x}, \\bar{y})$.' },
        { topicId: t30.id, front: 'How do you interpret the slope $b$ of a regression line?', back: 'For each 1-unit increase in $x$, the predicted value of $y$ changes by $b$ units, on average. Always include context (variable names, units).', hint: 'Predicted change in y per unit change in x.' },
        { topicId: t30.id, front: 'What is extrapolation and why is it dangerous?', back: 'Making predictions for $x$-values outside the range of the data. The LSRL may not apply beyond the observed range. Always note the limitations.', hint: 'Predicting beyond your data is risky.' },
      ],
    });
    console.log('✅ Least Squares Regression flashcards');
  }

  // Coefficient of Determination
  const t32 = await prisma.topic.findFirst({ where: { slug: 'coefficient-determination' } });
  if (t32) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t32.id, front: 'What is $r^2$ (coefficient of determination)?', back: '$r^2$ is the proportion of variance in $y$ explained by the linear regression on $x$. Example: $r^2 = 0.85$ means 85% of the variability in $y$ is accounted for by the linear model.', hint: 'Percent of variation explained.' },
        { topicId: t32.id, front: 'How do you interpret $r^2$ in context?', back: '"Approximately [r² × 100]% of the variability in [response variable] is explained by the linear relationship with [explanatory variable]."', hint: 'Always name the variables.' },
      ],
    });
    console.log('✅ Coefficient of Determination flashcards');
  }

  // Inference for Regression
  const t34 = await prisma.topic.findFirst({ where: { slug: 'inference-regression' } });
  if (t34) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t34.id, front: 'What is the test statistic for regression slope inference?', back: '$t = \\frac{b - \\beta_0}{SE_b}$ with $df = n - 2$. Usually $H_0: \\beta = 0$ (no linear relationship), so $t = \\frac{b}{SE_b}$.', hint: 'Slope estimate divided by its standard error.' },
        { topicId: t34.id, front: 'What conditions must hold for inference on regression slope?', back: '**LINE**: Linear relationship (check residual plot), Independent observations, Normal residuals (check histogram/Q-Q of residuals), Equal variance (constant scatter in residual plot).', hint: 'LINE: Linear, Independent, Normal, Equal variance.' },
      ],
    });
    console.log('✅ Inference for Regression flashcards');
  }

  console.log('\n🎉 All AP Statistics flashcards added successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
