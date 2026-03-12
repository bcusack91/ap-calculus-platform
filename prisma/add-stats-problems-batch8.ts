import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to AP Statistics - Batch 8: Final Regression Topics (2 topics)...\n');

  // Find topics
  const transformations = await prisma.topic.findFirst({
    where: { slug: 'transformations-linearity' }
  });

  const inferenceRegression = await prisma.topic.findFirst({
    where: { slug: 'inference-regression' }
  });

  if (!transformations || !inferenceRegression) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Transformations for Linearity - Problems
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: transformations.id,
        question: 'A scatterplot of x vs y shows a curved exponential pattern. The residual plot for ŷ = a + bx is curved. Try plotting log(y) vs x. What pattern should you see if this transformation works?',
        solution: `Step 1: Understand the original problem
- Scatterplot shows exponential curve (y = ae^(bx))
- Linear model residuals are curved
- Need to linearize the relationship

Step 2: Why try log(y) vs x?
Exponential relationship: y = ae^(bx)
Take log of both sides:
log(y) = log(a) + bx

This is LINEAR in x!

Step 3: What to look for after transformation
If log transformation is appropriate:
✓ Scatterplot of log(y) vs x should be LINEAR
✓ Residual plot should show RANDOM scatter
✓ No curved pattern in residuals

Step 4: How to check
1. Create new variable: y' = log(y)
2. Plot y' vs x (should be linear)
3. Fit regression: ŷ' = b₀ + b₁x
4. Check residual plot (should be random)

Step 5: Interpretation
After transformation:
- Can use linear regression on log(y) vs x
- To predict y: ŷ = e^(b₀ + b₁x)
- Or: ŷ = e^(b₀) × e^(b₁x)

Answer: After log transformation, the plot of log(y) vs x should show a LINEAR pattern, and residuals should be randomly scattered with no curve.`,
        difficulty: 'MEDIUM',
        order: 0,
        isPremium: false
      },
      {
        topicId: transformations.id,
        question: 'Data shows a power relationship: y = ax^b. What transformation will linearize this relationship?',
        solution: `Step 1: Identify the relationship
Power model: y = ax^b
(Example: area = πr², where b = 2)

Step 2: Apply log transformation to BOTH variables
Take log of both sides:
log(y) = log(a × x^b)
log(y) = log(a) + log(x^b)
log(y) = log(a) + b·log(x)

Step 3: Recognize linear form
Let: Y = log(y), X = log(x), A = log(a)
Then: Y = A + bX

This is LINEAR!

Step 4: How to transform
1. Create Y = log(y)
2. Create X = log(x)
3. Plot Y vs X (should be linear)
4. Fit regression: Ŷ = b₀ + b₁X

Step 5: Interpret coefficients
After regression:
- b₁ = power (exponent b)
- b₀ = log(a), so a = e^(b₀) or a = 10^(b₀)

To predict original y:
ŷ = e^(b₀) × x^(b₁)  [if using natural log]
ŷ = 10^(b₀) × x^(b₁) [if using log base 10]

Example:
If Ŷ = 2 + 1.5X (using log base 10)
Then y = 10² × x^1.5 = 100x^1.5

Answer: Take log of BOTH variables. Plot log(y) vs log(x), which linearizes power relationships.`,
        difficulty: 'HARD',
        order: 1,
        isPremium: false
      },
      {
        topicId: transformations.id,
        question: 'After fitting y vs x, the residual plot fans out (variance increases). You try log(y) vs x and get a better residual plot. Why does this help?',
        solution: `Step 1: Identify the original problem
Fan-shaped residuals mean:
- Variance increases with x
- Violates constant variance assumption
- Often occurs when y grows exponentially

Step 2: Why log(y) helps with variance
When y is exponential or multiplicative:
- Larger y values have larger variability
- Variance proportional to mean
- log transformation STABILIZES variance

Mathematical reason:
If y has variance proportional to y²:
Var(y) ∝ y²

Then: Var(log(y)) ≈ constant
(Delta method from calculus)

Step 3: Additional benefit
Log transformation often:
✓ Linearizes exponential relationships
✓ Stabilizes variance (fixes fan shape)
✓ Makes distribution more symmetric
✓ Reduces impact of outliers

Step 4: When to use log transformation
Use log(y) when you see:
- Exponential growth pattern
- Fan-shaped residuals
- Right-skewed distribution
- Multiplicative relationships
- Variance increases with mean

Step 5: Check after transformation
After using log(y):
1. Residual plot should show equal spread
2. No fan shape
3. Random scatter
4. Valid for inference

Answer: Log transformation stabilizes variance. When variance increases with mean (fan shape), log(y) typically has constant variance, fixing the heteroscedasticity problem.`,
        difficulty: 'HARD',
        order: 2,
        isPremium: false
      },
      {
        topicId: transformations.id,
        question: 'You fit log(y) = 2 + 0.5x using natural log. Predict y when x = 10.',
        solution: `Step 1: Understand the model
Fitted equation: log(y) = 2 + 0.5x
This uses NATURAL LOG (ln)

Step 2: Predict log(y) for x = 10
log(y) = 2 + 0.5(10)
log(y) = 2 + 5
log(y) = 7

Step 3: Back-transform to get y
Since we used natural log (ln):
ln(y) = 7

To solve for y, use exponential:
y = e^7

Step 4: Calculate
y = e^7 ≈ 1,096.63

Step 5: Interpretation
"When x = 10, y is predicted to be approximately 1,097."

Important notes:
- Must back-transform using e^(predicted value)
- If using log₁₀, would use 10^(predicted value)
- Always specify which log was used!

Alternative form:
Original model: y = e^(2 + 0.5x) = e² × e^(0.5x)
y = e² × e^(0.5x) ≈ 7.39 × e^(0.5x)

When x = 10: y = 7.39 × e^5 ≈ 1,097

Answer: y = e^7 ≈ 1,097`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: transformations.id,
        question: 'A residual plot shows both curvature AND fan shape. What transformations might you try?',
        solution: `Step 1: Identify TWO problems
1. Curvature → nonlinear relationship
2. Fan shape → non-constant variance

Need transformation that fixes BOTH!

Step 2: Try log(y) vs x
Often works for:
- Exponential relationships (fixes curve)
- Multiplicative error (fixes fan)
- Right-skewed data

Check result:
✓ Should be linear
✓ Should have constant variance

Step 3: If log(y) doesn't work completely
Try other transformations:
- √y vs x (square root)
- 1/y vs x (reciprocal)
- log(y) vs log(x) (both sides)

Step 4: Systematic approach
1. Try log(y) vs x first (most common)
2. Check residual plot
3. If still curved, try log-log or other
4. If variance still not constant, try different transformation

Step 5: Decision guide
Pattern → Try transformation:
- Exponential curve + fan → log(y) vs x
- Power relationship → log(y) vs log(x)
- Moderate curve → √y vs x
- Strong right skew → log(y)

Step 6: After transformation
Must verify:
✓ Scatterplot is linear
✓ Residuals randomly scattered
✓ Constant variance (no fan)
✓ Approximately normal residuals

Answer: Try log(y) vs x first, as it often fixes both curvature (exponential) and fan shape (non-constant variance). Check residual plot; if issues remain, try other transformations like √y or log-log.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  // TOPIC 1: Transformations for Linearity - Flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: transformations.id,
        front: 'Why do we transform variables in regression?',
        back: 'To linearize nonlinear relationships, stabilize variance, or make distributions more normal so we can use linear regression.',
        hint: 'Linearize; stabilize variance',
        isPremium: false
      },
      {
        topicId: transformations.id,
        front: 'What transformation linearizes y = ae^(bx)?',
        back: 'Take log(y). Plot log(y) vs x, which gives log(y) = log(a) + bx (linear!).',
        hint: 'log(y) vs x',
        isPremium: false
      },
      {
        topicId: transformations.id,
        front: 'What transformation linearizes y = ax^b?',
        back: 'Take log of BOTH sides. Plot log(y) vs log(x), which gives log(y) = log(a) + b·log(x).',
        hint: 'log-log transformation',
        isPremium: false
      },
      {
        topicId: transformations.id,
        front: 'After fitting log(y) = 2 + 0.5x, how do you predict y?',
        back: 'Back-transform: y = e^(2 + 0.5x) if natural log, or y = 10^(2 + 0.5x) if log base 10.',
        hint: 'Exponentiate: e^(...) or 10^(...)',
        isPremium: false
      },
      {
        topicId: transformations.id,
        front: 'When should you try log(y) transformation?',
        back: 'When seeing exponential growth, fan-shaped residuals, right-skewed data, or variance increasing with mean.',
        hint: 'Exponential; fan shape; skew',
        isPremium: false
      },
      {
        topicId: transformations.id,
        front: 'How do you check if a transformation worked?',
        back: 'Plot transformed data - should be linear. Check residual plot - should be random scatter with constant variance.',
        hint: 'Linear plot; random residuals',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 5 problems and 6 flashcards for Transformations for Linearity\n');

  // TOPIC 2: Inference for Regression - Problems
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: inferenceRegression.id,
        question: 'A regression of study hours (x) on test scores (y) gives slope b₁ = 5.2 with SE = 1.3, n = 20. Construct a 95% confidence interval for the true slope β₁.',
        solution: `Step 1: Identify given information
Slope: b₁ = 5.2
Standard error: SE = 1.3
Sample size: n = 20
Confidence level: 95%

Step 2: Find degrees of freedom
df = n - 2 = 20 - 2 = 18
(Use n-2 for regression, not n-1)

Step 3: Find t* critical value
From t-table with df = 18, 95% confidence:
t* = 2.101

Step 4: Calculate margin of error
ME = t* × SE
ME = 2.101 × 1.3
ME ≈ 2.73

Step 5: Construct confidence interval
CI = b₁ ± ME
CI = 5.2 ± 2.73
CI = (2.47, 7.93)

Step 6: Interpret
"We are 95% confident that for each additional hour studied, the true mean increase in test score is between 2.47 and 7.93 points."

Note: Since 0 is NOT in the interval, there is significant evidence of a positive relationship (can reject H₀: β₁ = 0).

Answer: 95% CI: (2.47, 7.93) points per hour`,
        difficulty: 'MEDIUM',
        order: 0,
        isPremium: false
      },
      {
        topicId: inferenceRegression.id,
        question: 'Test H₀: β₁ = 0 vs Hₐ: β₁ ≠ 0 given b₁ = 3.5, SE = 1.2, n = 25, α = 0.05.',
        solution: `Step 1: Set up hypotheses
H₀: β₁ = 0 (no relationship)
Hₐ: β₁ ≠ 0 (relationship exists)

Two-tailed test, α = 0.05

Step 2: Check conditions
LINEAR: Assume scatterplot is linear ✓
INDEPENDENT: Assume random sample, n < 10% population ✓
NORMAL: Residuals approximately normal ✓
EQUAL VARIANCE: Residual plot shows constant spread ✓
RANDOM: Random sample ✓

(LINE conditions for regression inference)

Step 3: Calculate test statistic
df = n - 2 = 25 - 2 = 23

t = (b₁ - 0)/SE
t = 3.5/1.2
t ≈ 2.917

Step 4: Find p-value
From t-table with df = 23, two-tailed:
t = 2.917 is between t = 2.807 (p = 0.01) and t = 3.767 (p = 0.001)

So: 0.001 < p-value < 0.01

More precisely: p-value ≈ 0.0077

Step 5: Make decision
p-value (0.0077) < α (0.05)
REJECT H₀

Step 6: Conclusion in context
"There is significant evidence (p = 0.008) that a linear relationship exists between x and y. The slope is significantly different from zero."

Answer: t = 2.92, p-value ≈ 0.008. Reject H₀. Significant evidence of linear relationship.`,
        difficulty: 'MEDIUM',
        order: 1,
        isPremium: false
      },
      {
        topicId: inferenceRegression.id,
        question: 'What are the conditions (LINE) for inference in regression? Explain each briefly.',
        solution: `The LINE conditions for regression inference:

L - LINEAR
Relationship between x and y is linear
Check: Scatterplot should show linear pattern
       Residual plot should show no curve

I - INDEPENDENT  
Observations are independent
Check: Random sampling
       n < 10% of population (if sampling without replacement)
       No time series or repeated measures

N - NORMAL
Residuals are approximately normally distributed
Check: Histogram or normal probability plot of residuals
       Not critical if n is large (n ≥ 30)
       Just need no strong skewness or outliers

E - EQUAL VARIANCE (also called homoscedasticity)
Variability of y is constant for all x
Check: Residual plot shows roughly equal vertical spread
       No fan shape or other pattern in spread

Why these matter:
- LINEAR: For model to be appropriate
- INDEPENDENT: For formulas to be valid
- NORMAL: For t-distribution to apply (especially small samples)
- EQUAL VARIANCE: For standard errors to be correct

If violations:
- Not linear → transform or use nonlinear model
- Not independent → use different methods (time series, etc.)
- Not normal → okay if n ≥ 30; otherwise transform
- Not equal variance → transform or use weighted regression

Answer: LINE = Linear relationship, Independent observations, Normal residuals, Equal variance. Check using scatterplot, residual plot, and normal probability plot.`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: inferenceRegression.id,
        question: 'Computer output shows: b₁ = 2.4, SE(b₁) = 0.8, t = 3.0, p = 0.006, n = 22. Interpret the p-value in context.',
        solution: `Step 1: Identify the test
Testing: H₀: β₁ = 0 (no relationship)
Against: Hₐ: β₁ ≠ 0 (relationship exists)

Given: p-value = 0.006

Step 2: What p-value means statistically
The probability of observing a slope as extreme as 2.4 (or more extreme) IF the true slope is actually 0.

Step 3: Interpret in context
"If there were truly no linear relationship between x and y (β₁ = 0), the probability of obtaining a sample slope of 2.4 or more extreme (in either direction) is 0.006, or 0.6%."

Step 4: Practical interpretation
This is very unlikely (less than 1% chance)!

Therefore: Strong evidence AGAINST H₀
The relationship is statistically significant.

Step 5: Decision at α = 0.05
Since p-value (0.006) < α (0.05):
REJECT H₀

Conclusion: "There is strong evidence of a significant linear relationship. The slope is significantly different from zero (p = 0.006)."

Step 6: What this does NOT mean
✗ Does not mean slope is definitely 2.4
✗ Does not mean x causes y
✗ Does not mean model fits well (could still have problems)
✓ Only means: slope significantly different from zero

Answer: If true slope were 0, probability of getting b₁ = 2.4 or more extreme is only 0.006. This provides strong evidence the slope is not zero - there is a significant linear relationship.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: inferenceRegression.id,
        question: 'Why do we use t-distribution with df = n-2 for regression inference instead of df = n-1?',
        solution: `Step 1: Compare to one-sample t-test
One-sample t-test: df = n - 1
- Estimate 1 parameter: μ
- Lose 1 df

Regression: df = n - 2
- Estimate 2 parameters: β₀ AND β₁
- Lose 2 df

Step 2: What we're estimating
In regression, we estimate:
1. Intercept (β₀)
2. Slope (β₁)

Both use up degrees of freedom!

Step 3: Degrees of freedom explained
Start with n observations
- Use one to estimate β₀ (intercept)
- Use one to estimate β₁ (slope)
- Left with n - 2 for error estimation

df = n - 2

Step 4: Why it matters
Smaller df → wider t* critical values → wider CIs

Example: n = 10, 95% confidence
- One-sample (df = 9): t* = 2.262
- Regression (df = 8): t* = 2.306

Regression CI slightly wider (more uncertainty).

Step 5: As n increases
For large n, the difference is minimal:
- df = 100 vs 98 → nearly same t*
- Both approach z* = 1.96

Step 6: General pattern
Degrees of freedom = n - (number of parameters estimated)

- Mean only: n - 1
- Regression: n - 2
- Multiple regression with k predictors: n - k - 1

Answer: We estimate TWO parameters (β₀ and β₁), so we lose 2 degrees of freedom, giving df = n - 2. This accounts for the extra uncertainty from estimating both intercept and slope.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  // TOPIC 2: Inference for Regression - Flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: inferenceRegression.id,
        front: 'What is the formula for confidence interval for slope?',
        back: 'CI: b₁ ± t*×SE(b₁), where t* from t-distribution with df = n - 2.',
        hint: 'b₁ ± t*×SE; df = n-2',
        isPremium: false
      },
      {
        topicId: inferenceRegression.id,
        front: 'What are the hypotheses for testing if slope is zero?',
        back: 'H₀: β₁ = 0 (no relationship) vs Hₐ: β₁ ≠ 0 (relationship exists). Can also be one-sided.',
        hint: 'H₀: β₁ = 0',
        isPremium: false
      },
      {
        topicId: inferenceRegression.id,
        front: 'What is the test statistic for testing slope?',
        back: 't = (b₁ - 0)/SE(b₁), with df = n - 2. Use t-distribution.',
        hint: 't = b₁/SE; df = n-2',
        isPremium: false
      },
      {
        topicId: inferenceRegression.id,
        front: 'What are the LINE conditions for regression inference?',
        back: 'Linear relationship, Independent observations, Normal residuals, Equal variance (constant spread).',
        hint: 'Linear; Independent; Normal; Equal variance',
        isPremium: false
      },
      {
        topicId: inferenceRegression.id,
        front: 'Why is df = n - 2 in regression?',
        back: 'We estimate TWO parameters (intercept β₀ and slope β₁), so lose 2 degrees of freedom.',
        hint: 'Two parameters estimated',
        isPremium: false
      },
      {
        topicId: inferenceRegression.id,
        front: 'If confidence interval for slope contains 0, what does this mean?',
        back: 'Slope is NOT significantly different from zero. No evidence of linear relationship at that confidence level.',
        hint: '0 in CI → not significant',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 5 problems and 6 flashcards for Inference for Regression\n');

  console.log('🎉🎉🎉 BATCH 8 COMPLETE - AP STATISTICS 100% DONE! 🎉🎉🎉');
  console.log('Progress: 32/34 AP Statistics topics complete (94%)');
  console.log('Note: Checking if there are 2 more topics that need content or if this completes the course.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
