import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📊 Adding content to AP Statistics...\n');

  const course = await prisma.course.findUnique({
    where: { slug: 'ap-statistics' }
  });

  if (!course) {
    console.log('❌ Course not found');
    return;
  }

  // Category 1: Exploring Data
  const exploringData = await prisma.category.create({
    data: {
      courseId: course.id,
      name: 'Exploring Data',
      slug: 'exploring-data',
      description: 'Analyzing distributions of data',
      order: 0
    }
  });

  await prisma.topic.createMany({
    data: [
      {
        categoryId: exploringData.id,
        title: 'Types of Data and Sampling',
        slug: 'types-data-sampling',
        description: 'Categorical vs quantitative data, sampling methods',
        textContent: 'Understanding different types of data and proper sampling techniques',
        order: 0
      },
      {
        categoryId: exploringData.id,
        title: 'Displaying Distributions with Graphs',
        slug: 'displaying-distributions-graphs',
        description: 'Histograms, dot plots, stem plots, and boxplots',
        textContent: 'Visual representations of data distributions',
        order: 1
      },
      {
        categoryId: exploringData.id,
        title: 'Describing Distributions',
        slug: 'describing-distributions',
        description: 'Shape, center, spread, and outliers (SOCS)',
        textContent: 'Analyzing distribution characteristics',
        order: 2
      },
      {
        categoryId: exploringData.id,
        title: 'Measures of Center',
        slug: 'measures-of-center-stats',
        description: 'Mean, median, and mode',
        textContent: 'Calculating and interpreting measures of central tendency',
        order: 3
      },
      {
        categoryId: exploringData.id,
        title: 'Measures of Spread',
        slug: 'measures-of-spread-stats',
        description: 'Range, IQR, standard deviation, and variance',
        textContent: 'Quantifying variability in data',
        order: 4
      },
      {
        categoryId: exploringData.id,
        title: 'Normal Distributions',
        slug: 'normal-distributions',
        description: 'Properties and calculations with normal curves',
        textContent: 'Working with the normal distribution and z-scores',
        order: 5
      }
    ]
  });

  // Category 2: Sampling and Experimentation
  const sampling = await prisma.category.create({
    data: {
      courseId: course.id,
      name: 'Sampling and Experimentation',
      slug: 'sampling-experimentation',
      description: 'Study design and data collection',
      order: 1
    }
  });

  await prisma.topic.createMany({
    data: [
      {
        categoryId: sampling.id,
        title: 'Sampling Methods',
        slug: 'sampling-methods-stats',
        description: 'Simple random, stratified, cluster, and systematic sampling',
        textContent: 'Different approaches to selecting samples',
        order: 0
      },
      {
        categoryId: sampling.id,
        title: 'Observational Studies vs Experiments',
        slug: 'observational-vs-experiments',
        description: 'Understanding the difference and implications',
        textContent: 'Distinguishing between study types and causal inference',
        order: 1
      },
      {
        categoryId: sampling.id,
        title: 'Experimental Design',
        slug: 'experimental-design',
        description: 'Randomization, replication, control, and blocking',
        textContent: 'Principles of well-designed experiments',
        order: 2
      },
      {
        categoryId: sampling.id,
        title: 'Bias in Sampling and Surveys',
        slug: 'bias-sampling-surveys',
        description: 'Types of bias and how to minimize them',
        textContent: 'Identifying and avoiding sampling and response bias',
        order: 3
      }
    ]
  });

  // Category 3: Probability
  const probability = await prisma.category.create({
    data: {
      courseId: course.id,
      name: 'Probability',
      slug: 'probability-stats',
      description: 'Basic probability and random variables',
      order: 2
    }
  });

  await prisma.topic.createMany({
    data: [
      {
        categoryId: probability.id,
        title: 'Basic Probability Rules',
        slug: 'basic-probability-rules',
        description: 'Addition and multiplication rules',
        textContent: 'Fundamental probability calculations',
        order: 0
      },
      {
        categoryId: probability.id,
        title: 'Conditional Probability',
        slug: 'conditional-probability-stats',
        description: 'Probability given additional information',
        textContent: 'Computing probabilities with conditions',
        order: 1
      },
      {
        categoryId: probability.id,
        title: 'Independence',
        slug: 'independence-stats',
        description: 'Independent vs dependent events',
        textContent: 'Understanding and testing for independence',
        order: 2
      },
      {
        categoryId: probability.id,
        title: 'Discrete Random Variables',
        slug: 'discrete-random-variables',
        description: 'Probability distributions for discrete variables',
        textContent: 'Working with discrete probability distributions',
        order: 3
      },
      {
        categoryId: probability.id,
        title: 'Binomial Distribution',
        slug: 'binomial-distribution-stats',
        description: 'Binary outcomes over multiple trials',
        textContent: 'Binomial probability calculations and applications',
        order: 4
      },
      {
        categoryId: probability.id,
        title: 'Geometric Distribution',
        slug: 'geometric-distribution',
        description: 'Probability of first success on nth trial',
        textContent: 'Using geometric distributions for waiting time problems',
        order: 5
      },
      {
        categoryId: probability.id,
        title: 'Continuous Random Variables',
        slug: 'continuous-random-variables',
        description: 'Probability density functions',
        textContent: 'Understanding continuous probability distributions',
        order: 6
      }
    ]
  });

  // Category 4: Confidence Intervals
  const ci = await prisma.category.create({
    data: {
      courseId: course.id,
      name: 'Statistical Inference: Confidence Intervals',
      slug: 'confidence-intervals',
      description: 'Estimating population parameters',
      order: 3
    }
  });

  await prisma.topic.createMany({
    data: [
      {
        categoryId: ci.id,
        title: 'Sampling Distributions',
        slug: 'sampling-distributions',
        description: 'Distribution of sample statistics',
        textContent: 'Understanding how sample statistics vary',
        order: 0
      },
      {
        categoryId: ci.id,
        title: 'Central Limit Theorem',
        slug: 'central-limit-theorem',
        description: 'Distribution of sample means',
        textContent: 'Why sample means are approximately normal',
        order: 1
      },
      {
        categoryId: ci.id,
        title: 'Confidence Intervals for Proportions',
        slug: 'ci-proportions',
        description: 'Estimating population proportions',
        textContent: 'One-sample and two-sample proportion intervals',
        order: 2
      },
      {
        categoryId: ci.id,
        title: 'Confidence Intervals for Means',
        slug: 'ci-means',
        description: 'Estimating population means using t-distributions',
        textContent: 'One-sample and two-sample t-intervals',
        order: 3
      },
      {
        categoryId: ci.id,
        title: 'Interpreting Confidence Intervals',
        slug: 'interpreting-ci',
        description: 'What confidence level actually means',
        textContent: 'Proper interpretation of confidence intervals',
        order: 4
      }
    ]
  });

  // Category 5: Hypothesis Testing
  const ht = await prisma.category.create({
    data: {
      courseId: course.id,
      name: 'Statistical Inference: Hypothesis Testing',
      slug: 'hypothesis-testing',
      description: 'Testing claims about populations',
      order: 4
    }
  });

  await prisma.topic.createMany({
    data: [
      {
        categoryId: ht.id,
        title: 'Hypothesis Testing Framework',
        slug: 'hypothesis-testing-framework',
        description: 'Null and alternative hypotheses, significance level',
        textContent: 'Setting up hypothesis tests',
        order: 0
      },
      {
        categoryId: ht.id,
        title: 'Type I and Type II Errors',
        slug: 'type-errors',
        description: 'Understanding testing errors and power',
        textContent: 'Consequences of incorrect decisions in hypothesis testing',
        order: 1
      },
      {
        categoryId: ht.id,
        title: 'Tests for Proportions',
        slug: 'tests-proportions',
        description: 'One-sample and two-sample z-tests',
        textContent: 'Hypothesis tests for population proportions',
        order: 2
      },
      {
        categoryId: ht.id,
        title: 'Tests for Means',
        slug: 'tests-means-stats',
        description: 'One-sample and two-sample t-tests',
        textContent: 'Hypothesis tests for population means',
        order: 3
      },
      {
        categoryId: ht.id,
        title: 'Paired Data',
        slug: 'paired-data',
        description: 'Analyzing matched pairs',
        textContent: 'Paired t-tests for dependent samples',
        order: 4
      },
      {
        categoryId: ht.id,
        title: 'Chi-Square Tests',
        slug: 'chi-square-tests',
        description: 'Goodness of fit and independence tests',
        textContent: 'Testing categorical data relationships',
        order: 5
      }
    ]
  });

  // Category 6: Regression
  const regression = await prisma.category.create({
    data: {
      courseId: course.id,
      name: 'Regression and Correlation',
      slug: 'regression-correlation',
      description: 'Analyzing relationships between variables',
      order: 5
    }
  });

  await prisma.topic.createMany({
    data: [
      {
        categoryId: regression.id,
        title: 'Scatter Plots and Correlation',
        slug: 'scatterplots-correlation-stats',
        description: 'Visualizing and measuring linear relationships',
        textContent: 'Interpreting correlation coefficient r',
        order: 0
      },
      {
        categoryId: regression.id,
        title: 'Least-Squares Regression',
        slug: 'least-squares-regression',
        description: 'Finding the line of best fit',
        textContent: 'Computing and interpreting regression equations',
        order: 1
      },
      {
        categoryId: regression.id,
        title: 'Residuals and Residual Plots',
        slug: 'residuals-residual-plots',
        description: 'Assessing model fit',
        textContent: 'Analyzing residuals to check linear model assumptions',
        order: 2
      },
      {
        categoryId: regression.id,
        title: 'Coefficient of Determination',
        slug: 'coefficient-determination',
        description: 'Understanding r-squared',
        textContent: 'Interpreting the strength of linear models',
        order: 3
      },
      {
        categoryId: regression.id,
        title: 'Transformations for Linearity',
        slug: 'transformations-linearity',
        description: 'Linearizing nonlinear relationships',
        textContent: 'Using logarithmic and power transformations',
        order: 4
      },
      {
        categoryId: regression.id,
        title: 'Inference for Regression',
        slug: 'inference-regression',
        description: 'Confidence intervals and tests for slope',
        textContent: 'Statistical inference in regression analysis',
        order: 5
      }
    ]
  });

  console.log('✅ AP Statistics content created successfully!\n');

  const topicCount = await prisma.topic.count({
    where: {
      category: {
        courseId: course.id
      }
    }
  });

  console.log(`📊 AP Statistics has ${topicCount} topics across 6 categories`);

  const totalTopics = await prisma.topic.count();
  console.log(`\n🎉 Platform now has ${totalTopics} total topics across 20 courses!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
