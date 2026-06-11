import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to AP Statistics - Batch 5: Complete CI (3/5) + HT Start (3/6)...\n');

  // Find topics
  const ciMeans = await prisma.topic.findFirst({
    where: { slug: 'ci-means' }
  });

  const interpretingCI = await prisma.topic.findFirst({
    where: { slug: 'interpreting-ci' }
  });

  const htFramework = await prisma.topic.findFirst({
    where: { slug: 'hypothesis-testing-framework' }
  });

  const typeErrors = await prisma.topic.findFirst({
    where: { slug: 'type-errors' }
  });

  const testsProportions = await prisma.topic.findFirst({
    where: { slug: 'tests-proportions' }
  });

  const testsMeans = await prisma.topic.findFirst({
    where: { slug: 'tests-means-stats' }
  });

  if (!ciMeans || !interpretingCI || !htFramework || !typeErrors || !testsProportions || !testsMeans) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Confidence Intervals for Means
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: ciMeans.id,
        question: 'A random sample of 25 students has a mean study time of 18.5 hours per week with a standard deviation of 4.2 hours. Construct a 95% confidence interval for the mean study time. Assume the population is approximately normal.',
        solution: `Step 1: Identify given information
n = 25
x̄ = 18.5 hours
s = 4.2 hours
Confidence level = 95%

Step 2: Check conditions
RANDOM: Random sample ✓
NORMAL: Population approximately normal (given) ✓
  - Since n = 25 < 30, need this assumption
INDEPENDENT: Assume n ≤ 0.10N ✓

Step 3: Use t-distribution (not z)
We use t because:
- σ is unknown (only have s)
- Even though normality assumed

Degrees of freedom: df = n - 1 = 24

Step 4: Find t* critical value
From t-table with df = 24, 95% confidence:
t* = 2.064

Step 5: Calculate standard error
SE = s/√n
   = 4.2/√25
   = 4.2/5
   = 0.84

Step 6: Calculate margin of error
ME = t* × SE
   = 2.064 × 0.84
   ≈ 1.73

Step 7: Construct confidence interval
CI = x̄ ± ME
   = 18.5 ± 1.73
   = (16.77, 20.23)
   ≈ (16.8, 20.2)

Step 8: Interpret
We are 95% confident that the true mean study time for all students is between 16.8 and 20.2 hours per week.

Answer: 95% CI: (16.8, 20.2) hours

We use the t-distribution because the population standard deviation is unknown.`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: ciMeans.id,
        question: 'Why do we use the t-distribution instead of the z-distribution for confidence intervals for means?',
        solution: `Step 1: Understand the key difference
Z-distribution: Used when σ (population SD) is KNOWN
T-distribution: Used when σ is UNKNOWN, use s (sample SD)

Step 2: Why σ is usually unknown
In practice:
- Rarely know true population standard deviation
- If we knew σ, we'd probably know μ too!
- Almost always must estimate from sample

Step 3: What using s instead of σ does
Using s adds extra variability:
- s varies from sample to sample
- s is random, σ is fixed
- More uncertainty → wider intervals

Step 4: T-distribution accounts for this
T-distribution has:
- Heavier tails than normal
- More probability in extremes
- Depends on sample size (df = n-1)

This compensates for extra uncertainty from estimating σ

Step 5: Compare z and t
For 95% confidence:
- z* = 1.96 (always)
- t* depends on df:
  * df = 5: t* = 2.571 (much larger!)
  * df = 10: t* = 2.228
  * df = 20: t* = 2.086
  * df = 30: t* = 2.042
  * df = ∞: t* → 1.96 (approaches z)

Step 6: As n increases
Small n:
- s is unreliable estimate of σ
- Need large t* for extra safety
- Wide intervals

Large n:
- s becomes good estimate of σ
- t* approaches z*
- T-distribution → Normal

Step 7: When to use which?
USE Z:
- σ known (rare!)
- Large sample (n ≥ 30) and any distribution
- Proportions (different formula)

USE T:
- σ unknown (almost always!)
- Small sample and population approximately normal
- Means with sample SD

Answer: Use t-distribution when σ is unknown and we must estimate it with s. The t-distribution has heavier tails to account for the extra uncertainty from estimating σ. As sample size increases, t approaches the normal distribution.`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: ciMeans.id,
        question: 'A researcher measures reaction times (in seconds) for 40 subjects: x̄ = 0.38s, s = 0.12s. Construct a 99% confidence interval for the mean reaction time.',
        solution: `Step 1: Given information
n = 40
x̄ = 0.38 seconds
s = 0.12 seconds
Confidence level = 99%

Step 2: Check conditions
RANDOM: Assume random sample ✓
NORMAL: n = 40 ≥ 30, can apply CLT ✓
INDEPENDENT: Assume 40 ≤ 0.10N ✓

Step 3: Find t* critical value
df = n - 1 = 39
99% confidence

From t-table: t* ≈ 2.708
(or use calculator/software)

Step 4: Calculate SE
SE = s/√n
   = 0.12/√40
   = 0.12/6.325
   ≈ 0.0190

Step 5: Calculate ME
ME = t* × SE
   = 2.708 × 0.0190
   ≈ 0.0514

Step 6: Construct CI
CI = 0.38 ± 0.051
   = (0.329, 0.431)
   ≈ (0.33, 0.43) seconds

Step 7: Interpret
We are 99% confident that the true mean reaction time is between 0.33 and 0.43 seconds.

Answer: 99% CI: (0.33, 0.43) seconds`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: ciMeans.id,
        question: 'Compare 90%, 95%, and 99% confidence intervals for the same data: n = 36, x̄ = 50, s = 12. What happens to interval width as confidence level increases?',
        solution: `Step 1: Set up
n = 36, x̄ = 50, s = 12
df = 35

Step 2: Calculate SE (same for all)
SE = s/√n = 12/√36 = 12/6 = 2

Step 3: Find t* values
90% CI: t* ≈ 1.690
95% CI: t* ≈ 2.030
99% CI: t* ≈ 2.724

Step 4: Calculate MEs
ME₉₀ = 1.690 × 2 = 3.38
ME₉₅ = 2.030 × 2 = 4.06
ME₉₉ = 2.724 × 2 = 5.45

Step 5: Construct intervals
90% CI: 50 ± 3.38 = (46.62, 53.38), width = 6.76
95% CI: 50 ± 4.06 = (45.94, 54.06), width = 8.12
99% CI: 50 ± 5.45 = (44.55, 55.45), width = 10.90

Step 6: Compare widths
90% → 95%: width increases by 20%
95% → 99%: width increases by 34%
90% → 99%: width increases by 61%

Higher confidence = wider interval!

Step 7: The tradeoff
Higher confidence level:
+ More confident interval captures μ
- Less precise (wider interval)

Lower confidence level:
+ More precise (narrower interval)
- Less confident interval captures μ

Cannot have both high confidence AND high precision!

Answer: 
90% CI: (46.6, 53.4)
95% CI: (45.9, 54.1)
99% CI: (44.6, 55.4)

As confidence increases from 90% to 99%, interval width increases by 61%. This is the precision-confidence tradeoff.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: ciMeans.id,
        question: 'A 95% CI for mean weight is (150, 170) lbs based on n = 25. If we want to cut the margin of error in half with the same confidence level, what sample size is needed?',
        solution: `Step 1: Find current ME
CI = (150, 170)
Width = 170 - 150 = 20
ME = width/2 = 10 lbs

Step 2: Want new ME
ME_new = 10/2 = 5 lbs

Step 3: Understand ME formula
ME = t* × (s/√n)

For same confidence and approximately same s:
ME ∝ 1/√n

Step 4: Set up proportion
ME₁/ME₂ = √(n₂/n₁)

10/5 = √(n₂/25)
2 = √(n₂/25)
4 = n₂/25
n₂ = 100

Step 5: Why quadruple?
To halve ME, must quadruple n:
- ME ∝ 1/√n
- Half the ME → √n must double
- If √n doubles, n must quadruple

General rule:
- To reduce ME by factor k → multiply n by k²
- To halve ME (k=2) → multiply n by 4
- To third ME (k=3) → multiply n by 9

Step 6: Verify
Original: ME = t*/√25 = t*/5
New: ME = t*/√100 = t*/10

Ratio: (t*/5)/(t*/10) = 10/5 = 2 ✓

ME is indeed halved!

Answer: n = 100

Need to quadruple the sample size from 25 to 100 to halve the margin of error. This is because ME ∝ 1/√n, so halving ME requires quadrupling n.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: ciMeans.id,
        front: 'What is the formula for a confidence interval for a mean?',
        back: 'x̄ ± t*(s/√n), where x̄ = sample mean, t* = critical value from t-distribution with df = n-1, s = sample SD, n = sample size. Use t (not z) because σ is unknown.',
        hint: 'x̄ ± t*(s/√n)',
        isPremium: false
      },
      {
        topicId: ciMeans.id,
        front: 'What conditions must be met for a CI for a mean?',
        back: 'Random sample, Normal (population approximately normal if n < 30, or n ≥ 30 for CLT), Independent (10% condition). Use t-distribution when σ unknown.',
        hint: 'Random, Normal, Independent',
        isPremium: false
      },
      {
        topicId: ciMeans.id,
        front: 'When do we use t-distribution vs z-distribution?',
        back: 'T-distribution: σ unknown (use s), almost always for means. Z-distribution: σ known (rare), or proportions. T has heavier tails, approaches normal as n increases.',
        hint: 'T when σ unknown; Z when σ known',
        isPremium: false
      },
      {
        topicId: ciMeans.id,
        front: 'What are degrees of freedom for a t-interval?',
        back: 'df = n - 1. Used to find t* critical value from t-table. Smaller df → larger t* → wider interval. As df increases, t* approaches z*.',
        hint: 'df = n - 1',
        isPremium: false
      },
      {
        topicId: ciMeans.id,
        front: 'How does confidence level affect interval width?',
        back: 'Higher confidence → larger t* → wider interval. Lower confidence → smaller t* → narrower interval. Precision-confidence tradeoff: can\'t have both high confidence and narrow interval.',
        hint: 'Higher confidence = wider interval',
        isPremium: false
      },
      {
        topicId: ciMeans.id,
        front: 'How does sample size affect margin of error for means?',
        back: 'ME = t*(s/√n). Larger n → smaller ME (more precise). ME ∝ 1/√n. To halve ME, must quadruple n. To reduce ME by factor k, multiply n by k².',
        hint: 'ME ∝ 1/√n; halve ME → quadruple n',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: ci-means (now has 5 problems, 6 flashcards)');

  // TOPIC 2: Interpreting Confidence Intervals
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: interpretingCI.id,
        question: 'A 95% confidence interval for mean SAT score is (1180, 1220). Which of the following interpretations is correct?\n\nA) There is a 95% probability that the true mean is between 1180 and 1220.\nB) 95% of students scored between 1180 and 1220.\nC) We are 95% confident that the true mean SAT score is between 1180 and 1220.\nD) If we took many samples, 95% would have means between 1180 and 1220.',
        solution: `Step 1: Evaluate option A
"There is a 95% probability that the true mean is between 1180 and 1220."

INCORRECT! ✗

Why wrong:
- μ is a fixed parameter (not random)
- Either μ is in interval or it isn't
- Can't assign probability to fixed value
- The INTERVAL is random, not μ

Step 2: Evaluate option B
"95% of students scored between 1180 and 1220."

INCORRECT! ✗

Why wrong:
- This describes INDIVIDUAL scores
- CI is about the MEAN, not individuals
- Individual scores have much more variability
- Confuses parameter with population values

Step 3: Evaluate option C
"We are 95% confident that the true mean SAT score is between 1180 and 1220."

CORRECT! ✓

Why correct:
- Properly describes confidence in the interval
- "Confident" (not "probability")
- About the parameter μ
- Standard correct interpretation

Step 4: Evaluate option D
"If we took many samples, 95% would have means between 1180 and 1220."

INCORRECT! ✗

Why wrong:
- This describes sampling distribution of x̄
- NOT what CI says
- Different samples give different intervals
- Confuses interval for μ with distribution of x̄

Step 5: Proper understanding of "95% confident"
Means:
- Our METHOD captures true μ 95% of the time
- If we repeated sampling many times
- About 95% of resulting CIs would contain μ
- This PARTICULAR interval either does or doesn't

NOT:
- 95% probability μ is in this interval
- μ moves around randomly
- We're describing μ's distribution

Step 6: Visual explanation
Imagine 100 different samples:
- Each produces different CI
- About 95 intervals contain true μ
- About 5 intervals miss μ

We have one interval from one sample
We're 95% confident it's one of the "good" intervals

Step 7: Common misconceptions
WRONG: "95% probability μ is in (1180, 1220)"
- μ is fixed, not random

WRONG: "95% of data is in (1180, 1220)"
- CI is for μ, not for individuals

WRONG: "95% of sample means are in (1180, 1220)"
- CI is for μ, not for x̄

RIGHT: "95% confident μ is in (1180, 1220)"
- Confidence in our method

Answer: C is correct

"We are 95% confident that the true mean SAT score is between 1180 and 1220."

This correctly describes confidence in the interval containing the parameter, not a probability statement about where the parameter is.`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: interpretingCI.id,
        question: 'Explain what "95% confidence" means in the context of confidence intervals.',
        solution: `Step 1: The correct interpretation
"95% confidence" means:
If we repeated our sampling procedure many times and constructed a CI each time, approximately 95% of those intervals would contain the true parameter value.

Step 2: What confidence is about
Confidence describes:
- The RELIABILITY of the method
- The LONG-RUN success rate
- The PROCEDURE, not a single interval

Confidence does NOT describe:
- Probability the parameter is in THIS interval
- Where the parameter "probably" is
- How likely different values are

Step 3: The random element
What's random:
- The SAMPLE we get
- The INTERVAL we construct
- Which intervals capture μ

What's NOT random:
- The true parameter μ
- Whether μ is in our interval
- The population

Step 4: Simulation example
Imagine we:
1. Take 100 different random samples
2. Construct 95% CI from each
3. See which intervals contain true μ

Result:
- About 95 intervals contain μ ✓
- About 5 intervals miss μ ✗
- Some intervals higher than μ
- Some intervals lower than μ
- But ~95% capture it

Step 5: Our single interval
We have ONE interval from ONE sample
We don't know if it's "good" or "bad"
But we're "95% confident" because:
- Our method is right 95% of the time
- We used a reliable procedure
- Probably one of the 95%, not the 5%

Step 6: Common mistakes
WRONG: "95% probability μ is in the interval"
- μ doesn't move around
- Can't assign probability to fixed value

WRONG: "μ is definitely in the interval"
- Could be in the unlucky 5%
- Not absolute certainty

RIGHT: "95% confident μ is in the interval"
- Describes reliability of method
- Long-run interpretation

Step 7: Analogy
Like quality control:
"95% of products meet specifications"

Doesn't mean:
- THIS product has 95% chance of being good
- Each part of product is 95% good

Means:
- 95% of products pass inspection
- Good manufacturing process
- Confident in the process

Step 8: Why this matters
Understanding confidence:
- Prevents overconfidence
- Acknowledges uncertainty
- Recognizes sampling variability
- Proper statistical reasoning

Answer: "95% confidence" means that if we repeated the sampling process many times, about 95% of the resulting confidence intervals would contain the true parameter value. It describes the reliability of our method, not the probability that this specific interval contains the parameter (which either does or doesn't, with no probability about it).`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: interpretingCI.id,
        question: 'A news report states: "A poll shows 52% support the policy, with a margin of error of ±3%." What does this mean? Can we conclude the policy has majority support?',
        solution: `Step 1: Interpret the statement
Point estimate: p̂ = 0.52 (52%)
Margin of error: ME = 0.03 (3%)
Implied CI: 52% ± 3% = (49%, 55%)

Usually implies 95% confidence (though should be stated!)

Step 2: What the interval means
We are 95% confident (assuming 95% CI) that:
The true proportion of support is between 49% and 55%

Step 3: Does this prove majority support?
Majority means p > 0.50 (more than 50%)

The interval is (0.49, 0.55)
- Some values are below 50% (like 49%)
- Some values are above 50% (like 55%)

We CANNOT conclusively say majority supports!

Step 4: Why not conclusive?
True p could be:
- 49% (minority support) ✗
- 50% (exactly half)
- 51% (slight majority)
- 55% (clear majority) ✓

All are plausible values within our CI!

Step 5: What can we say?
We CAN say:
- Support is CLOSE to 50%
- Could be slightly below or above majority
- Not enough evidence to conclusively claim majority
- "Statistical tie" or "too close to call"

We CANNOT say:
- Definitely has majority support
- Definitely lacks majority support
- 52% is the exact true value

Step 6: The 50% threshold
Since 50% is IN the interval (0.49, 0.55):
- 50% is a plausible value for true p
- Can't rule out "exactly half"
- Not statistically significant above 50%

If interval were (0.51, 0.57):
- All values above 50%
- Could claim majority support
- Statistically significant

Step 7: Reporting considerations
Responsible reporting should say:
"Support appears close to 50%, but we cannot conclusively determine if a majority supports the policy. The true level of support is likely between 49% and 55%."

Misleading to claim:
"52% support, so majority supports"
(Ignores margin of error!)

Step 8: Connection to hypothesis testing
This relates to testing:
H₀: p = 0.50
Hₐ: p > 0.50

Since 0.50 is in the CI:
- Don't reject H₀
- Insufficient evidence for majority
- Results "not statistically significant"

Answer: The poll estimates 52% support with 95% confidence interval (49%, 55%). We CANNOT conclusively claim majority support because the interval includes values both below and above 50%. True support could be as low as 49% (minority) or as high as 55% (clear majority). This is a "statistical tie" - too close to call with certainty.`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: interpretingCI.id,
        question: 'Two studies estimate mean height: Study A gives CI (66, 70) inches, Study B gives (65, 71) inches. Which study is more precise? Can we tell which is more accurate?',
        solution: `Step 1: Define precision vs accuracy
PRECISION: How narrow the interval is
- Narrower interval = more precise
- Less uncertainty
- Smaller margin of error

ACCURACY: How close to true value
- Does interval contain true μ?
- Can't know from CI alone!

Step 2: Compare precision
Study A: (66, 70)
Width = 70 - 66 = 4 inches
ME = 2 inches

Study B: (65, 71)
Width = 71 - 65 = 6 inches
ME = 3 inches

Study A is MORE PRECISE (narrower interval)

Step 3: Why different precision?
Possible reasons:
1. Different sample sizes
   - Study A might have larger n
   - ME ∝ 1/√n

2. Different variability
   - Study A might have smaller s
   - Less variable population/sample

3. Different confidence levels
   - Study A might use 90% confidence
   - Study B might use 99% confidence

Most likely: Study A has larger sample size

Step 4: Compare accuracy
We CANNOT determine which is more accurate!

Why?
- Don't know true μ
- Both intervals might contain μ
- One might contain μ, other might not
- Neither might contain μ (both in unlucky 5%)

Accuracy requires knowing truth

Step 5: Possible scenarios
Scenario 1: True μ = 68 inches
- Both intervals contain 68 ✓
- Both accurate!
- Study A more precise

Scenario 2: True μ = 72 inches
- Neither interval contains 72 ✗
- Neither accurate!
- Study A more precise but still wrong

Scenario 3: True μ = 65.5 inches
- Only Study B contains 65.5
- Study B accurate, Study A not
- Study A more precise but less accurate!

Step 6: The tradeoff
Precision vs Coverage:
- Can have precise but wrong interval
- Can have wide but correct interval
- Want both: precise AND accurate

Confidence level affects this:
- Higher confidence → wider interval → more likely to be accurate
- Lower confidence → narrower interval → more precise but riskier

Step 7: What we can say
About precision:
✓ Study A is more precise (narrower interval)
✓ Study A has smaller margin of error
✓ Study A probably had larger sample

About accuracy:
✗ Cannot determine which is more accurate
✗ Don't know if either contains true μ
✗ Would need to know true population mean

Step 8: Practical implications
If both studies are well-conducted:
- Prefer Study A (more precise)
- Assuming same confidence level
- Gives more specific estimate

But if Study A used 80% confidence and Study B used 99%:
- Study B more reliable (higher confidence)
- Tradeoff between precision and confidence

Answer:
PRECISION: Study A is more precise. Its interval (66, 70) is narrower with margin of error of 2 inches compared to Study B's margin of error of 3 inches.

ACCURACY: Cannot determine which is more accurate without knowing the true population mean. Both intervals could contain μ, one could, or neither could. Precision (narrowness) doesn't guarantee accuracy (containing the truth).`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: interpretingCI.id,
        question: 'A researcher constructs a 95% CI for difference in means: (2, 8). Can we conclude there is a significant difference between the groups? What if the CI were (-1, 7)?',
        solution: `Step 1: Understand CI for difference
CI = (2, 8) for μ₁ - μ₂

This means:
- We're 95% confident true difference is between 2 and 8
- All values in interval are plausible

Step 2: Test for significant difference
"Significant difference" means:
- μ₁ ≠ μ₂
- Equivalently: μ₁ - μ₂ ≠ 0
- Zero is NOT a plausible difference

Key question: Is 0 in the confidence interval?

Step 3: Analyze CI = (2, 8)
Is 0 in the interval?
2 < 0? No
0 < 8? Yes
So 0 is NOT in (2, 8)

Conclusion: YES, significant difference!

Why?
- All plausible values are positive
- Difference is at least 2
- Could be as much as 8
- Cannot be 0 (no difference)

Step 4: Interpret (2, 8)
μ₁ - μ₂ is between 2 and 8
This means μ₁ > μ₂

We're confident:
- Group 1 mean is higher
- Difference is real, not due to chance
- Statistically significant at α = 0.05

Step 5: Analyze CI = (-1, 7)
Is 0 in this interval?
-1 < 0 < 7? YES

Conclusion: NO significant difference

Why?
- Zero is plausible
- Difference could be negative (-1)
- Difference could be zero (0)
- Difference could be positive (7)
- Cannot rule out "no difference"

Step 6: Interpret (-1, 7)
This means:
- μ₁ might be slightly less than μ₂ (diff = -1)
- μ₁ might equal μ₂ (diff = 0)
- μ₁ might be greater than μ₂ (diff = 7)

We're NOT confident in direction!
- Difference not statistically significant
- Could be due to random chance

Step 7: Connection to hypothesis testing
Testing: H₀: μ₁ = μ₂ (difference = 0)

CI = (2, 8): 0 not in interval
- Reject H₀
- Significant at α = 0.05
- p-value < 0.05

CI = (-1, 7): 0 in interval
- Fail to reject H₀
- Not significant at α = 0.05
- p-value > 0.05

Step 8: General rule
For 95% confidence interval:

If 0 NOT in interval:
✓ Significant difference (α = 0.05)
✓ Reject H₀: μ₁ = μ₂
✓ p < 0.05

If 0 IS in interval:
✗ Not significant (α = 0.05)
✗ Fail to reject H₀
✗ p > 0.05

Step 9: Other examples
CI = (3, 5): 0 not in interval → significant
CI = (-2, -0.5): 0 not in interval → significant (group 1 lower)
CI = (-3, 3): 0 in interval → not significant
CI = (0.1, 4): 0 not in interval → significant (barely!)

Answer:
CI = (2, 8): YES, significant difference at α = 0.05 level. Zero is not in the interval, so we can confidently say the groups differ. Group 1 has a higher mean, with difference between 2 and 8.

CI = (-1, 7): NO, not significant. Zero is in the interval, meaning "no difference" is plausible. We cannot conclude the groups differ - the observed difference could be due to random chance.

General rule: If a 95% CI for a difference includes 0, the difference is not statistically significant at α = 0.05.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: interpretingCI.id,
        front: 'What is the correct interpretation of a 95% confidence interval?',
        back: 'We are 95% confident that the true parameter is in the interval. Means: our method captures the parameter 95% of the time. NOT: 95% probability parameter is in this interval.',
        hint: '95% confident true parameter is in interval',
        isPremium: false
      },
      {
        topicId: interpretingCI.id,
        front: 'What does "95% confidence" actually mean?',
        back: 'If we repeated sampling many times, about 95% of resulting CIs would contain the true parameter. Describes long-run success rate of the method, not probability for this specific interval.',
        hint: 'Long-run: 95% of intervals capture parameter',
        isPremium: false
      },
      {
        topicId: interpretingCI.id,
        front: 'What is the difference between precision and accuracy of a CI?',
        back: 'Precision: how narrow the interval is (smaller ME = more precise). Accuracy: whether interval contains true parameter (can\'t know from CI alone). Can be precise but inaccurate!',
        hint: 'Precision = narrow; Accuracy = contains truth',
        isPremium: false
      },
      {
        topicId: interpretingCI.id,
        front: 'How do you determine statistical significance from a CI for a difference?',
        back: 'If 0 is NOT in the CI for (μ₁ - μ₂), difference is significant. If 0 IS in the CI, difference is not significant. Corresponds to hypothesis test at same α level.',
        hint: '0 not in CI → significant',
        isPremium: false
      },
      {
        topicId: interpretingCI.id,
        front: 'What does margin of error tell you?',
        back: 'Maximum likely distance between sample estimate and true parameter. Half the width of CI. Smaller ME = more precise estimate. ME depends on confidence level, sample size, and variability.',
        hint: 'Max likely distance from truth; half of CI width',
        isPremium: false
      },
      {
        topicId: interpretingCI.id,
        front: 'Why is "95% probability the parameter is in the interval" WRONG?',
        back: 'The parameter is fixed (not random) - it either is or isn\'t in the interval. The INTERVAL is random (varies by sample). Can\'t assign probability to where a fixed value is. Correct: "95% confident".',
        hint: 'Parameter is fixed, not random',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: interpreting-ci (now has 5 problems, 6 flashcards)');

  // TOPIC 3: Hypothesis Testing Framework
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: htFramework.id,
        question: 'A manufacturer claims their batteries last an average of 500 hours. You suspect they last less than claimed. Set up appropriate hypotheses to test this claim.',
        solution: `Step 1: Identify the claim
Manufacturer claims: μ = 500 hours

Step 2: Identify what we suspect
We suspect: μ < 500 hours
(Batteries last LESS than claimed)

Step 3: Set up null hypothesis H₀
H₀: μ = 500

The null hypothesis:
- Assumes the claim is true
- "Status quo" or "no effect"
- Equality statement
- What we're testing against

Step 4: Set up alternative hypothesis Hₐ
Hₐ: μ < 500

The alternative hypothesis:
- What we suspect/want to show
- Research hypothesis
- What we have evidence for
- Inequality statement

Step 5: Determine test type
This is a ONE-TAILED (left-tailed) test

Why?
- Hₐ: μ < 500 (less than)
- Only interested in one direction
- Looking for evidence batteries last LESS
- Not testing if they last MORE

Step 6: Why this setup?
Burden of proof on us:
- Manufacturer claims 500 hours
- We must provide evidence against claim
- Start assuming claim is true (H₀)
- Collect data to see if claim is unreasonable

Step 7: Connection to significance
Will collect sample data:
- Calculate x̄ and s
- If x̄ is MUCH less than 500
- Evidence against H₀
- Might reject H₀

If x̄ is close to 500:
- Insufficient evidence against H₀
- Fail to reject H₀
- Can't conclude batteries last less

Answer:
H₀: μ = 500 hours (null hypothesis: claim is true)
Hₐ: μ < 500 hours (alternative: batteries last less than claimed)

This is a one-tailed (left-tailed) test because we're only testing if the mean is less than 500, not different from 500.`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: htFramework.id,
        question: 'Explain the difference between null and alternative hypotheses. Why do we set them up this way?',
        solution: `Step 1: Null Hypothesis (H₀)
Definition: Statement of "no effect" or "no difference"
- Assumes status quo
- Contains equality (=, ≤, ≥)
- What we test against
- Presumed true until evidence says otherwise

Examples:
- μ = 50 (parameter equals specific value)
- μ₁ = μ₂ (two means are equal)
- p = 0.5 (proportion equals 0.5)

Step 2: Alternative Hypothesis (Hₐ or H₁)
Definition: Statement of what we want to show
- Research hypothesis
- What we suspect is true
- Contains inequality (<, >, ≠)
- Needs evidence to support

Examples:
- μ < 50 (one-tailed)
- μ > 50 (one-tailed)
- μ ≠ 50 (two-tailed)
- μ₁ > μ₂ (one group higher)

Step 3: Why this setup? (Legal analogy)
Like a trial:

H₀ = "Defendant is innocent"
- Presumed true (innocent until proven guilty)
- Status quo

Hₐ = "Defendant is guilty"
- What prosecutor wants to show
- Needs strong evidence

We don't prove innocence!
We either:
- Find enough evidence for guilty (reject H₀)
- Don't find enough evidence (fail to reject H₀)

Step 4: Types of alternative hypotheses

TWO-TAILED (≠):
Hₐ: μ ≠ 50
- Parameter is different (either direction)
- Don't know which way
- Testing for ANY difference

ONE-TAILED, RIGHT (>):
Hₐ: μ > 50
- Parameter is greater
- Specific direction
- Only interested in increase

ONE-TAILED, LEFT (<):
Hₐ: μ < 50
- Parameter is less
- Specific direction
- Only interested in decrease

Step 5: How they work together
Must be:
- Complementary (cover all possibilities)
- Mutually exclusive (can't both be true)

Examples:
H₀: μ = 50  and  Hₐ: μ ≠ 50 ✓
H₀: μ ≥ 50  and  Hₐ: μ < 50 ✓
H₀: μ ≤ 50  and  Hₐ: μ > 50 ✓

Step 6: Burden of proof
Null hypothesis:
- Assumed true
- Skeptical position
- "Nothing is happening"

Alternative hypothesis:
- Must provide evidence
- Burden of proof on us
- Need convincing data

Step 7: Decision framework
After collecting data:

If evidence is strong (p-value small):
→ Reject H₀
→ Support Hₐ
→ "Significant" result

If evidence is weak (p-value large):
→ Fail to reject H₀
→ Don't support Hₐ
→ "Not significant"

Step 8: Why can't we "accept" H₀?
We NEVER "accept" or "prove" H₀

Why?
- Absence of evidence ≠ evidence of absence
- Maybe we just didn't have enough data
- Maybe our sample wasn't sensitive enough
- Just means: insufficient evidence against H₀

Say "fail to reject H₀" not "accept H₀"

Answer: 
NULL HYPOTHESIS (H₀): Statement of no effect or no difference, assumed true, contains equality. Represents status quo.

ALTERNATIVE HYPOTHESIS (Hₐ): What we want to show, needs evidence, contains inequality. Represents research question.

We set them up this way to put burden of proof on the researcher - must provide convincing evidence to overturn the assumed status quo. Like "innocent until proven guilty" in law.`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: htFramework.id,
        question: 'A company claims 40% of customers prefer their product. You survey 200 customers and find 68 prefer it. Test at α = 0.05 level if the true proportion differs from 40%.',
        solution: `Step 1: Set up hypotheses
H₀: p = 0.40 (claim is true)
Hₐ: p ≠ 0.40 (proportion differs)

This is TWO-TAILED (≠)

Step 2: Check conditions
n = 200, p₀ = 0.40

Random: Assume random survey ✓
Normal: np₀ = 200(0.40) = 80 ≥ 10 ✓
       n(1-p₀) = 200(0.60) = 120 ≥ 10 ✓
Independent: 200 ≤ 0.10N (assume) ✓

Step 3: Calculate sample proportion
p̂ = 68/200 = 0.34

Step 4: Calculate test statistic
z = (p̂ - p₀)/√(p₀(1-p₀)/n)
  = (0.34 - 0.40)/√(0.40(0.60)/200)
  = -0.06/√(0.24/200)
  = -0.06/√0.0012
  = -0.06/0.0346
  ≈ -1.73

Step 5: Find p-value (two-tailed)
From z-table:
P(Z < -1.73) ≈ 0.0418

Two-tailed p-value:
p-value = 2 × 0.0418 = 0.0836

Step 6: Compare to α
p-value = 0.0836
α = 0.05

Is 0.0836 < 0.05? NO

Step 7: Make decision
Since p-value > α:
FAIL TO REJECT H₀

Step 8: State conclusion
At the α = 0.05 significance level, there is insufficient evidence to conclude that the true proportion differs from 40%.

The observed 34% could reasonably occur by chance if the true proportion is 40%.

Step 9: Interpret p-value
p-value = 0.0836 means:

If true proportion really is 40%, there's an 8.36% chance of getting a sample proportion as extreme as 34% (or more extreme) just by random chance.

Since this is > 5%, not unusual enough to reject claim.

Answer: 
Test statistic: z = -1.73
P-value: 0.084
Decision: Fail to reject H₀ at α = 0.05
Conclusion: Insufficient evidence that proportion differs from 40%`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: htFramework.id,
        question: 'What is a p-value? Interpret a p-value of 0.032 in the context of testing H₀: μ = 100 vs Hₐ: μ > 100.',
        solution: `Step 1: Define p-value
P-value: Probability of getting results as extreme as (or more extreme than) what we observed, ASSUMING H₀ IS TRUE.

In symbols:
p-value = P(getting our data or more extreme | H₀ is true)

Step 2: What "extreme" means
Depends on Hₐ:

For Hₐ: μ > 100 (right-tailed):
"Extreme" = values ≥ observed

For Hₐ: μ < 100 (left-tailed):
"Extreme" = values ≤ observed

For Hₐ: μ ≠ 100 (two-tailed):
"Extreme" = values in both tails

Step 3: Interpret p-value = 0.032
Context: H₀: μ = 100, Hₐ: μ > 100

Interpretation:
"If the true mean really is 100, there is a 3.2% chance of getting a sample mean as large as (or larger than) what we observed, just by random sampling variability."

Step 4: What this tells us
p = 0.032 = 3.2% is fairly small

Means:
- Our result is somewhat unusual under H₀
- Would rarely happen if H₀ true
- Evidence against H₀
- Sample mean is higher than expected

Step 5: Making a decision
Compare to significance level α

If α = 0.05:
p = 0.032 < 0.05
→ REJECT H₀
→ Statistically significant
→ Evidence that μ > 100

If α = 0.01:
p = 0.032 > 0.01
→ FAIL TO REJECT H₀
→ Not significant at 0.01 level
→ Insufficient evidence

Step 6: Common misconceptions
P-value is NOT:
✗ Probability that H₀ is true
✗ Probability that Hₐ is true
✗ Probability results are due to chance
✗ Probability of making an error

P-value IS:
✓ Probability of data given H₀
✓ How surprising data is under H₀
✓ Measure of evidence against H₀

Step 7: The logic
Small p-value (like 0.032):
→ Data unlikely if H₀ true
→ Either:
  a) H₀ is true and we got unlucky, OR
  b) H₀ is false
→ More reasonable to conclude H₀ is false
→ Reject H₀

Large p-value (like 0.50):
→ Data common if H₀ true
→ Consistent with H₀
→ No reason to doubt H₀
→ Fail to reject H₀

Step 8: Strength of evidence
P-value scale (rough guideline):

p > 0.10: Little/no evidence against H₀
p = 0.05 to 0.10: Weak evidence against H₀
p = 0.01 to 0.05: Moderate evidence against H₀
p = 0.001 to 0.01: Strong evidence against H₀
p < 0.001: Very strong evidence against H₀

Our p = 0.032:
Moderate evidence against H₀

Step 9: Full interpretation for our problem
p-value = 0.032

"Assuming the true mean is 100, there is only a 3.2% probability of obtaining a sample mean as large as (or larger than) what we observed. Since this probability is small (less than our significance level of 0.05), we have sufficient evidence to reject the null hypothesis and conclude that the true mean is greater than 100."

Answer: 
A p-value is the probability of getting results as extreme as what we observed, assuming H₀ is true.

P-value = 0.032 means: If μ really equals 100, there's only a 3.2% chance of getting a sample mean as large as (or larger than) ours. This is fairly unlikely, providing moderate evidence against H₀. At α = 0.05, we would reject H₀ and conclude μ > 100.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: htFramework.id,
        question: 'A researcher finds p = 0.048 when testing H₀: μ₁ = μ₂ vs Hₐ: μ₁ ≠ μ₂. At α = 0.05, what decision is made? What if α = 0.01? Explain the relationship between p-value, α, and the decision.',
        solution: `Step 1: The decision rule
General rule:
- If p-value < α → REJECT H₀
- If p-value ≥ α → FAIL TO REJECT H₀

The significance level α is our cutoff!

Step 2: Decision at α = 0.05
p-value = 0.048
α = 0.05

Is 0.048 < 0.05? YES

Decision: REJECT H₀

Conclusion: At the 0.05 significance level, there IS sufficient evidence that the means differ (μ₁ ≠ μ₂).

Step 3: Decision at α = 0.01
p-value = 0.048
α = 0.01

Is 0.048 < 0.01? NO

Decision: FAIL TO REJECT H₀

Conclusion: At the 0.01 significance level, there is NOT sufficient evidence that the means differ.

Step 4: Why different decisions?
α = significance level = "how much evidence we require"

α = 0.05 (5%):
- Willing to accept more risk
- Less stringent standard
- Easier to reject H₀

α = 0.01 (1%):
- Want stronger evidence
- More stringent standard
- Harder to reject H₀

Our p = 0.048 (4.8%):
- Strong enough for 5% standard ✓
- Not strong enough for 1% standard ✗

Step 5: Understanding α
α represents:
- Maximum acceptable error rate
- How rare results must be to reject H₀
- Probability of Type I error (rejecting true H₀)

Common values:
- α = 0.05 (most common)
- α = 0.01 (more conservative)
- α = 0.10 (less conservative)

Step 6: The relationship
Think of α as a threshold:

p-value = strength of evidence against H₀
α = required strength to reject H₀

If p-value < α:
Evidence is strong enough → reject H₀

If p-value ≥ α:
Evidence not strong enough → fail to reject H₀

Step 7: Borderline case
p = 0.048 is borderline!
- Just barely significant at 0.05
- Not significant at 0.01

Shows importance of:
1. Choosing α BEFORE seeing data
2. Not treating 0.05 as magic cutoff
3. Reporting actual p-value

Better to report:
"p = 0.048" than just "significant"
Lets reader judge strength of evidence

Step 8: Multiple comparisons
Same data, different standards:

At α = 0.10: 0.048 < 0.10 → Reject H₀ ✓
At α = 0.05: 0.048 < 0.05 → Reject H₀ ✓
At α = 0.01: 0.048 > 0.01 → Fail to reject ✗

This doesn't mean results are contradictory!
Just means: evidence moderate, not overwhelming

Step 9: Practical interpretation
p = 0.048 means:
- About 4.8% chance of this data if H₀ true
- Moderate evidence against H₀
- Results fairly unlikely under H₀
- Probably a real difference, but not certain

Should we be confident?
- Depends on context
- Depends on consequences of error
- Consider practical significance too

Step 10: Fixed vs reported p-value
CORRECT approach:
1. Choose α before collecting data
2. Collect data
3. Calculate p-value
4. Compare to α
5. Make decision

INCORRECT approach:
1. Collect data
2. Calculate p-value
3. Choose α to get desired result
This is p-hacking!

Answer:
AT α = 0.05: REJECT H₀ (p = 0.048 < 0.05)
Sufficient evidence that means differ.

AT α = 0.01: FAIL TO REJECT H₀ (p = 0.048 > 0.01)
Insufficient evidence at this stricter standard.

RELATIONSHIP: α is the threshold for decision. If p-value < α, evidence is strong enough to reject H₀. The same data can lead to different decisions depending on how stringent our evidence requirement (α) is. Always choose α before seeing data!`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: htFramework.id,
        front: 'What is the null hypothesis (H₀)?',
        back: 'Statement of no effect or no difference. Assumed true until evidence says otherwise. Contains equality (=, ≤, ≥). Status quo position that we test against.',
        hint: 'No effect; assumed true; equality',
        isPremium: false
      },
      {
        topicId: htFramework.id,
        front: 'What is the alternative hypothesis (Hₐ)?',
        back: 'Statement we want to show evidence for. Contains inequality (<, >, ≠). Research hypothesis. Can be one-tailed (< or >) or two-tailed (≠).',
        hint: 'What we want to show; inequality',
        isPremium: false
      },
      {
        topicId: htFramework.id,
        front: 'What is a p-value?',
        back: 'Probability of getting results as extreme as (or more extreme than) observed, ASSUMING H₀ IS TRUE. Small p-value = evidence against H₀. NOT the probability H₀ is true!',
        hint: 'P(data or more extreme | H₀ true)',
        isPremium: false
      },
      {
        topicId: htFramework.id,
        front: 'What is the significance level α?',
        back: 'Threshold for decision. If p-value < α, reject H₀. Common: α = 0.05. Represents maximum acceptable Type I error rate. Must be chosen BEFORE seeing data.',
        hint: 'Decision threshold; often 0.05',
        isPremium: false
      },
      {
        topicId: htFramework.id,
        front: 'What is the decision rule for hypothesis testing?',
        back: 'If p-value < α: REJECT H₀ (statistically significant). If p-value ≥ α: FAIL TO REJECT H₀ (not significant). Never "accept" H₀ - only fail to reject.',
        hint: 'p < α → reject; p ≥ α → fail to reject',
        isPremium: false
      },
      {
        topicId: htFramework.id,
        front: 'What is the difference between one-tailed and two-tailed tests?',
        back: 'One-tailed: Hₐ: μ < k or μ > k (specific direction). Two-tailed: Hₐ: μ ≠ k (any difference). Two-tailed tests split α between both tails; one-tailed puts all α in one tail.',
        hint: 'One-tailed: specific direction; two-tailed: ≠',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: hypothesis-testing-framework (now has 5 problems, 6 flashcards)');

  // TOPIC 4: Type I and Type II Errors
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: typeErrors.id,
        question: 'Define Type I and Type II errors. What are the consequences of each in the context of testing a new medical treatment?',
        solution: `Step 1: Define Type I Error
TYPE I ERROR: Reject H₀ when H₀ is actually TRUE
- "False positive"
- Conclude effect exists when it doesn't
- Probability = α (significance level)

Step 2: Define Type II Error
TYPE II ERROR: Fail to reject H₀ when H₀ is FALSE
- "False negative"  
- Miss a real effect
- Probability = β (depends on true parameter)

Step 3: Medical treatment context
Testing new treatment effectiveness:
H₀: Treatment has no effect
Hₐ: Treatment is effective

Step 4: Type I Error consequences (medical)
Type I Error = Reject H₀ when true
Means: Conclude treatment works when it DOESN'T

Consequences:
- Approve ineffective treatment
- Patients get useless treatment
- Waste money on ineffective drug
- False hope for patients
- Delay in finding real treatment
- Potential side effects with no benefit

Example: Approve sugar pill thinking it cures disease

Step 5: Type II Error consequences (medical)
Type II Error = Fail to reject H₀ when false
Means: Conclude no effect when treatment DOES work

Consequences:
- Reject effective treatment
- Patients denied beneficial treatment
- Miss opportunity to help people
- Effective drug never reaches market
- People continue suffering unnecessarily

Example: Reject life-saving drug due to small sample

Step 6: Which is worse? (Depends on context!)
In medical testing:

Type I often considered worse:
- Do no harm principle
- Better safe than sorry
- Can't give ineffective/harmful treatment

But Type II also serious:
- People miss out on cure
- Disease continues unchecked

Step 7: The tradeoff
Cannot minimize both simultaneously!

Lower α (reduce Type I):
- Less likely false positive
- But MORE likely Type II error
- More conservative

Higher α (reduce Type II):
- Less likely to miss real effect
- But MORE likely Type I error
- More liberal

Step 8: Decision table
                    H₀ True         H₀ False
                 (No effect)    (Has effect)
              ┌─────────────┬──────────────┐
Reject H₀     │  Type I ✗   │  Correct ✓   │
              │  (α)        │  (Power)     │
              ├─────────────┼──────────────┤
Fail to       │  Correct ✓  │  Type II ✗   │
Reject H₀     │  (1-α)      │  (β)         │
              └─────────────┴──────────────┘

Step 9: Summary
TYPE I ERROR:
- Reject true H₀
- False positive
- P(Type I) = α
- Medical: Approve bad treatment

TYPE II ERROR:
- Fail to reject false H₀
- False negative
- P(Type II) = β
- Medical: Reject good treatment

Answer:
TYPE I ERROR: Rejecting H₀ when it's true (false positive). In medicine: concluding treatment works when it doesn't, leading to approval of ineffective treatments. Probability = α.

TYPE II ERROR: Failing to reject H₀ when it's false (false negative). In medicine: concluding no effect when treatment actually works, denying patients effective treatment. Probability = β.`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: typeErrors.id,
        question: 'In hypothesis testing with α = 0.05, explain what this significance level represents in terms of Type I error.',
        solution: `Step 1: Recall Type I error
Type I Error: Reject H₀ when H₀ is TRUE
(False positive)

Step 2: Connection to α
α = P(Type I Error)
α = P(Reject H₀ | H₀ is true)

Step 3: What α = 0.05 means
α = 0.05 = 5%

Interpretation:
"If we repeated this test many times when H₀ is actually true, we would incorrectly reject H₀ about 5% of the time."

Step 4: Long-run interpretation
Imagine 100 tests where H₀ is TRUE:
- About 95 tests: Correctly fail to reject H₀ ✓
- About 5 tests: Incorrectly reject H₀ ✗

Those 5 incorrect rejections = Type I errors

Step 5: Single test interpretation
For ONE test with α = 0.05:

If we reject H₀:
- Either we made correct decision (H₀ false)
- OR we made Type I error (H₀ true)
- If H₀ true, had 5% chance of this error

We accept this 5% risk!

Step 6: Why 5%?
α = 0.05 is convention
Balances:
- Not too lenient (avoiding false positives)
- Not too strict (not missing real effects)

Other common values:
- α = 0.01 (more conservative, less Type I)
- α = 0.10 (less conservative, more Type I)

Step 7: Choosing α
Depends on consequences:

When Type I error is serious:
- Use smaller α (like 0.01)
- Example: Drug approval
- Better safe than sorry

When Type I error less serious:
- Can use larger α (like 0.10)
- Example: Preliminary research
- Don't want to miss potential findings

Step 8: Example scenario
Testing if coin is unfair:
H₀: p = 0.5 (coin is fair)
Hₐ: p ≠ 0.5 (coin is unfair)
α = 0.05

Type I error:
- Conclude coin is unfair when it's actually fair
- Accuse someone of cheating when coin is fair
- Will happen 5% of time even with fair coin!

Step 9: Cannot eliminate Type I errors
As long as α > 0:
- Some chance of Type I error
- Inherent in hypothesis testing
- Due to random sampling variation

Only way to eliminate:
- Set α = 0 (never reject H₀)
- But then can't detect any real effects!

Step 10: Summary interpretation
α = 0.05 means:

1. If H₀ is true, 5% chance we'll reject it
2. Maximum Type I error rate we're willing to accept
3. In long run, 5% of true nulls will be rejected
4. Trade-off: protecting against false positives while still detecting real effects

Answer:
α = 0.05 means there is a 5% probability of making a Type I error - incorrectly rejecting H₀ when it is actually true. In the long run, if H₀ is true and we repeat the test many times, we would reject it about 5% of the time just by chance. This is the maximum false positive rate we are willing to accept.`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: typeErrors.id,
        question: 'A significance test has α = 0.05 and power = 0.80. What is β? Interpret what power = 0.80 means in context.',
        solution: `Step 1: Relationship between Power and β
Power = 1 - β
β = 1 - Power

Step 2: Calculate β
Power = 0.80
β = 1 - 0.80 = 0.20

Step 3: Define Power
Power = P(Reject H₀ | H₀ is false)
- Probability of correctly rejecting false H₀
- Probability of detecting real effect
- Sensitivity of the test
- "True positive rate"

Step 4: Define β
β = P(Type II Error)
β = P(Fail to reject H₀ | H₀ is false)
- Probability of missing real effect
- "False negative rate"

Step 5: Interpret Power = 0.80
"If there really is an effect (H₀ is false), we have an 80% chance of detecting it (rejecting H₀)."

OR

"If the true parameter is different from the null value, our test will correctly identify this 80% of the time."

Step 6: Interpret β = 0.20
"If there really is an effect, we have a 20% chance of missing it (failing to reject H₀)."

Type II error happens 20% of time when effect exists.

Step 7: Complete error picture
α = 0.05 (Type I error rate)
β = 0.20 (Type II error rate)
Power = 0.80

When H₀ TRUE:
- 5% chance: Type I error ✗
- 95% chance: Correct decision ✓

When H₀ FALSE:
- 20% chance: Type II error ✗
- 80% chance: Correct decision ✓ (Power!)

Step 8: Is 80% power good?
Power = 0.80 is often considered:
- Adequate for most studies
- Good balance of resources and detection
- Standard goal in research

Power = 0.90 or higher:
- Excellent
- More likely to detect effects
- May require larger sample

Power = 0.50:
- Poor (coin flip!)
- Likely to miss real effects

Step 9: Factors affecting power
Higher power when:
+ Larger sample size (n ↑)
+ Larger effect size (true difference from H₀)
+ Larger α (but more Type I errors!)
+ Less variability (σ ↓)

Step 10: Practical interpretation
With power = 0.80:

If treatment truly works:
- 80% chance study will show it works
- 20% chance study will miss the effect

Better than:
- 50% power (might as well flip coin)

Not as good as:
- 95% power (almost always detect)
- But 95% might require huge sample

Step 11: Power analysis
Before study:
Calculate needed n for desired power

After study:
If fail to reject H₀, check power
- High power + no rejection = probably no effect
- Low power + no rejection = inconclusive (might have missed effect)

Answer:
β = 0.20 (20%)

POWER = 0.80 means: If there truly is an effect (H₀ is false), we have an 80% probability of correctly detecting it and rejecting H₀. This is considered adequate power for most studies.

β = 0.20 means: There is a 20% chance of Type II error - missing a real effect that exists.`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: typeErrors.id,
        question: 'A researcher increases sample size from 50 to 200. How does this affect the probabilities of Type I error (α), Type II error (β), and power?',
        solution: `Step 1: Effect on Type I error (α)
ANSWER: NO CHANGE

α is set by researcher:
- Choose α before collecting data
- α = 0.05, 0.01, etc.
- Independent of sample size
- Controlled directly

α stays the same regardless of n!

Step 2: Why α doesn't change
α = P(Reject H₀ | H₀ true)

This is our decision threshold:
- We set it (like 0.05)
- Not affected by n
- Design choice, not data-driven

Example:
n = 50, α = 0.05
n = 200, α = still 0.05

Step 3: Effect on Type II error (β)
ANSWER: DECREASES

β = P(Fail to reject H₀ | H₀ false)

Larger n → smaller β:
- More data = more information
- Easier to detect real effect
- Less likely to miss true difference

Step 4: Why β decreases with larger n
Standard error decreases:
SE = σ/√n

n = 50: SE = σ/√50 ≈ 0.141σ
n = 200: SE = σ/√200 ≈ 0.071σ

Smaller SE:
- Test statistic more precise
- Better able to distinguish from H₀
- Less overlap between null and true distribution

Step 5: Effect on Power
ANSWER: INCREASES

Power = 1 - β

Since β decreases:
Power must increase!

Larger n → Higher power:
- More likely to detect effect
- More sensitive test
- Better discrimination

Step 6: Numerical example
Suppose initially:
n = 50
β = 0.40
Power = 0.60

After increase to n = 200:
n = 200
β ≈ 0.10 (decreased!)
Power ≈ 0.90 (increased!)

Step 7: The relationship
Sample size quadruples (50 → 200):

SE halves:
SE ∝ 1/√n
√200/√50 = √4 = 2
SE reduced by factor of 2

Power substantially increases:
Often from ~60% to ~90%
Much better chance of detecting effect

Step 8: Summary table
                n = 50      n = 200     Change
              ┌──────────┬───────────┬──────────┐
α (Type I)    │  0.05    │   0.05    │  None    │
              ├──────────┼───────────┼──────────┤
β (Type II)   │  0.40    │   0.10    │ Decrease │
              ├──────────┼───────────┼──────────┤
Power         │  0.60    │   0.90    │ Increase │
              └──────────┴───────────┴──────────┘

Step 9: Why this matters
Larger sample size:
✓ More powerful test
✓ Better able to detect effects
✓ Lower risk of Type II error
✗ More expensive/time consuming
✓ No increase in Type I error (α stays same)

Step 10: Trade-offs
Want high power?
→ Need large n

Limited resources?
→ Accept lower power
→ Risk missing real effects

BUT:
α is always controlled at chosen level!

Step 11: General principle
Increasing sample size:
- α: Unchanged (set by researcher)
- β: Decreases (less likely to miss effect)
- Power: Increases (more likely to detect effect)
- SE: Decreases (more precision)
- Cost: Increases

Step 12: Mathematical explanation
For detecting difference d from H₀:

Power depends on:
(d - 0)/(σ/√n) = d√n/σ

As n increases:
- Numerator increases
- Easier to detect d
- Higher power

Answer:
TYPE I ERROR (α): NO CHANGE - α is set by the researcher and doesn't depend on sample size. Still 0.05 (or whatever chosen level).

TYPE II ERROR (β): DECREASES - Larger sample provides more information, making it easier to detect a real effect. Less likely to miss true difference.

POWER: INCREASES - Since Power = 1 - β and β decreases, power must increase. With n = 200 instead of 50, much more likely to correctly detect real effects.

Increasing sample size makes the test more powerful without increasing Type I error rate!`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: typeErrors.id,
        question: 'In criminal trials, the null hypothesis is "defendant is innocent." Type I error is convicting an innocent person, Type II error is acquitting a guilty person. If we want to minimize Type I errors (protecting innocent people), what happens to Type II errors? Explain the relationship.',
        solution: `Step 1: Set up hypotheses
H₀: Defendant is innocent
Hₐ: Defendant is guilty

Step 2: Identify errors
TYPE I ERROR: Reject H₀ when true
- Convict innocent person
- "False positive"
- Wrong conviction
- P(Type I) = α

TYPE II ERROR: Fail to reject H₀ when false
- Acquit guilty person
- "False negative"  
- Guilty goes free
- P(Type II) = β

Step 3: Current legal system
"Innocent until proven guilty"
"Beyond reasonable doubt"

This means:
- Very small α (low Type I error)
- Prefer to free guilty than convict innocent
- Better that 10 guilty go free than 1 innocent convicted

Step 4: How to minimize Type I errors
To reduce α (Type I error rate):

1. Require stronger evidence
   - Need overwhelming proof
   - Higher standard (beyond reasonable doubt)
   - Make it harder to reject H₀

2. Use smaller α
   - α = 0.01 or even 0.001
   - Not just α = 0.05

Step 5: What happens to Type II errors
As we minimize Type I (reduce α):
→ Type II errors INCREASE (β increases)

WHY?
- Making it harder to convict
- Stricter evidence requirements
- More guilty people will be acquitted
- More "false negatives"

Step 6: The fundamental tradeoff
Cannot minimize BOTH simultaneously!

Lower α (protect innocent):
→ Higher β (more guilty go free)

Lower β (catch guilty):
→ Higher α (more innocent convicted)

Step 7: Visualization
              Convict (Reject H₀)
                      ↓
         Easier ←──────────→ Harder
                             
Type I:    HIGH              LOW
(convict   ────→         ←────
innocent)                       

Type II:   LOW               HIGH
(free      ────→         ←────
guilty)

As we move right (protect innocent):
- Type I decreases ✓
- Type II increases ✗

Step 8: Numeric example
Standard: α = 0.05, β = 0.20

Protect innocent more: α = 0.01
→ Stricter standard
→ β might increase to 0.40
→ More guilty people acquitted

Be more aggressive: α = 0.10  
→ Easier to convict
→ β might decrease to 0.10
→ But more innocent convicted

Step 9: Why the tradeoff exists
Same evidence, different thresholds:

EVIDENCE SCALE: 0 (clearly innocent) to 100 (clearly guilty)

If threshold = 80 (high standard):
- Few innocents convicted (low α) ✓
- Many guilty acquitted (high β) ✗

If threshold = 50 (lower standard):
- More innocents convicted (high α) ✗
- Fewer guilty acquitted (low β) ✓

Can't avoid tradeoff!

Step 10: Societal choice
Legal system chooses:
- Minimize Type I (protect innocent)
- Accept higher Type II (guilty go free)

Values statement:
"Better that 10 guilty escape than 1 innocent suffer"

Different context might choose differently!

Step 11: Ways to reduce BOTH errors
Only solution: MORE EVIDENCE
- Better investigation
- More witnesses
- Better forensics
- Like increasing sample size in statistics!

With better evidence:
- Can maintain strict standard (low α)
- While also convicting more guilty (lower β)

But requires resources!

Step 12: Statistical parallel
In hypothesis testing:

Conservative approach (α = 0.01):
- Hard to reject H₀
- Low Type I error ✓
- High Type II error ✗
- Might miss real effects

Liberal approach (α = 0.10):
- Easy to reject H₀
- High Type I error ✗
- Low Type II error ✓
- Might claim false effects

Balanced approach (α = 0.05):
- Compromise
- Moderate both errors

Step 13: The iron law
For fixed sample size/evidence:

α and β are inversely related:
- Decrease α → Increase β
- Decrease β → Increase α

Only way to decrease both:
- Increase sample size
- Get more evidence
- Costs more resources

Answer:
If we minimize Type I errors (convicting innocent), Type II errors INCREASE (more guilty acquitted).

This is the fundamental tradeoff: You cannot simultaneously minimize both error types with fixed evidence. As we make it harder to convict (protecting innocent people), we inevitably let more guilty people go free.

The legal system accepts this tradeoff, explicitly choosing to minimize Type I errors even though it means higher Type II errors. We'd rather free guilty people than convict innocent ones.

The only way to reduce BOTH errors is to gather MORE evidence (analogous to increasing sample size in statistics), but this requires more resources.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: typeErrors.id,
        front: 'What is a Type I error?',
        back: 'Rejecting H₀ when it is actually true. False positive. Concluding an effect exists when it doesn\'t. Probability = α (significance level).',
        hint: 'Reject true H₀; false positive; P = α',
        isPremium: false
      },
      {
        topicId: typeErrors.id,
        front: 'What is a Type II error?',
        back: 'Failing to reject H₀ when it is actually false. False negative. Missing a real effect. Probability = β. Related to power: Power = 1 - β.',
        hint: 'Fail to reject false H₀; false negative; P = β',
        isPremium: false
      },
      {
        topicId: typeErrors.id,
        front: 'What is power in hypothesis testing?',
        back: 'Power = 1 - β = P(Reject H₀ | H₀ is false). Probability of correctly detecting a real effect. Higher power = better test. Increases with larger n.',
        hint: 'P(correctly reject false H₀); 1 - β',
        isPremium: false
      },
      {
        topicId: typeErrors.id,
        front: 'What is the relationship between α and β?',
        back: 'Inverse relationship for fixed sample size. Decreasing α (fewer Type I errors) increases β (more Type II errors). Can only decrease both by increasing sample size.',
        hint: 'Inverse: ↓α means ↑β (fixed n)',
        isPremium: false
      },
      {
        topicId: typeErrors.id,
        front: 'How does increasing sample size affect α, β, and power?',
        back: 'α: No change (set by researcher). β: Decreases (less likely to miss effect). Power: Increases (more likely to detect effect). Larger n makes test more powerful!',
        hint: 'α same; β↓; power↑',
        isPremium: false
      },
      {
        topicId: typeErrors.id,
        front: 'What factors increase power?',
        back: 'Larger sample size (n↑), larger effect size (bigger true difference), larger α (but more Type I errors!), less variability (σ↓). Power = 0.80 often considered adequate.',
        hint: '↑n, ↑effect size, ↑α, ↓σ',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: type-errors (now has 5 problems, 6 flashcards)');

  // TOPIC 5: Hypothesis Tests for Proportions
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: testsProportions.id,
        question: 'A company claims 30% of customers prefer their new product. In a random sample of 200 customers, 48 prefer it. Test at α = 0.05 if the true proportion is less than 30%.',
        solution: `Step 1: Set up hypotheses
Claim: p = 0.30
Suspect: p < 0.30

H₀: p = 0.30
Hₐ: p < 0.30 (one-tailed, left)

Step 2: Check conditions
n = 200, p₀ = 0.30

RANDOM: Random sample ✓
NORMAL: np₀ = 200(0.30) = 60 ≥ 10 ✓
       n(1-p₀) = 200(0.70) = 140 ≥ 10 ✓
INDEPENDENT: 200 ≤ 0.10N (assume) ✓

Can use z-test!

Step 3: Calculate sample proportion
p̂ = 48/200 = 0.24

Step 4: Calculate test statistic
z = (p̂ - p₀)/√(p₀(1-p₀)/n)
  = (0.24 - 0.30)/√(0.30(0.70)/200)
  = -0.06/√(0.21/200)
  = -0.06/√0.00105
  = -0.06/0.0324
  ≈ -1.85

Step 5: Find p-value (one-tailed)
Left-tailed test (Hₐ: p < 0.30)

From z-table:
P(Z < -1.85) = 0.0322

p-value = 0.0322

Step 6: Make decision
p-value = 0.0322
α = 0.05

Is 0.0322 < 0.05? YES

REJECT H₀

Step 7: State conclusion
At the α = 0.05 significance level, there is sufficient evidence to conclude that the true proportion who prefer the new product is less than 30%.

The sample data (24%) provides convincing evidence that preference is lower than the company's claim.

Step 8: Interpret in context
Evidence suggests:
- Fewer than 30% prefer new product
- Company's claim may be overstated
- Sample result (24%) is significantly lower
- Not just due to random chance

Answer:
H₀: p = 0.30, Hₐ: p < 0.30
Test statistic: z = -1.85
P-value: 0.032
Decision: Reject H₀ at α = 0.05
Conclusion: Sufficient evidence that true proportion is less than 30%`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: testsProportions.id,
        question: 'In 2020, 45% of voters supported a candidate. In 2024, a poll of 400 voters shows 200 support the candidate. Test if support has changed from 45%.',
        solution: `Step 1: Set up hypotheses
Previous: p = 0.45
Question: Has it changed?

H₀: p = 0.45 (support unchanged)
Hₐ: p ≠ 0.45 (support has changed)

TWO-TAILED test!

Step 2: Check conditions
n = 400, p₀ = 0.45

RANDOM: Assume random sample ✓
NORMAL: np₀ = 400(0.45) = 180 ≥ 10 ✓
       n(1-p₀) = 400(0.55) = 220 ≥ 10 ✓
INDEPENDENT: 400 ≤ 0.10N ✓

Step 3: Calculate sample proportion
p̂ = 200/400 = 0.50

Step 4: Calculate standard error
SE = √(p₀(1-p₀)/n)
   = √(0.45(0.55)/400)
   = √(0.2475/400)
   = √0.00061875
   ≈ 0.0249

Step 5: Calculate test statistic
z = (p̂ - p₀)/SE
  = (0.50 - 0.45)/0.0249
  = 0.05/0.0249
  ≈ 2.01

Step 6: Find p-value (two-tailed!)
Right tail: P(Z > 2.01) ≈ 0.0222
Left tail: P(Z < -2.01) ≈ 0.0222

Two-tailed p-value:
p-value = 2 × 0.0222 = 0.0444

Step 7: Make decision
p-value = 0.0444
α = 0.05

Is 0.0444 < 0.05? YES (barely!)

REJECT H₀

Step 8: State conclusion
At the α = 0.05 significance level, there is sufficient evidence that support has changed from 45%. The current support appears to be different from 2020 levels.

Step 9: Additional interpretation
Current support: 50%
Previous support: 45%
Change: +5 percentage points

This increase is statistically significant:
- Not just random variation
- Real change in support
- Though p-value (0.044) is close to α (0.05)
- Borderline significance

Answer:
H₀: p = 0.45, Hₐ: p ≠ 0.45
Test statistic: z = 2.01
P-value: 0.044 (two-tailed)
Decision: Reject H₀ at α = 0.05
Conclusion: Support has changed significantly from 45% (appears higher at 50%)`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: testsProportions.id,
        question: 'A quality control manager wants to test if the defect rate is greater than 2%. She samples 500 items and finds 15 defects. Conduct the test at α = 0.01.',
        solution: `Step 1: Set up hypotheses
Claim: p = 0.02 (2% defect rate)
Concern: p > 0.02 (higher than acceptable)

H₀: p = 0.02
Hₐ: p > 0.02 (one-tailed, right)

Step 2: Check conditions
n = 500, p₀ = 0.02

RANDOM: Assume random sample ✓
NORMAL: np₀ = 500(0.02) = 10 ≥ 10 ✓ (exactly!)
       n(1-p₀) = 500(0.98) = 490 ≥ 10 ✓
INDEPENDENT: 500 ≤ 0.10N ✓

Conditions met (barely for np₀)

Step 3: Calculate sample proportion
p̂ = 15/500 = 0.03 (3%)

Step 4: Calculate SE
SE = √(p₀(1-p₀)/n)
   = √(0.02(0.98)/500)
   = √(0.0196/500)
   = √0.0000392
   ≈ 0.00626

Step 5: Calculate test statistic
z = (p̂ - p₀)/SE
  = (0.03 - 0.02)/0.00626
  = 0.01/0.00626
  ≈ 1.60

Step 6: Find p-value
Right-tailed test (Hₐ: p > 0.02)

P(Z > 1.60) ≈ 0.0548

p-value = 0.0548

Step 7: Make decision
p-value = 0.0548
α = 0.01

Is 0.0548 < 0.01? NO

FAIL TO REJECT H₀

Step 8: State conclusion
At the α = 0.01 significance level, there is insufficient evidence to conclude that the defect rate exceeds 2%.

The observed 3% defect rate could reasonably occur by chance if the true rate is 2%.

Step 9: Context and interpretation
Observed: 3% defects
Standard: 2% defects
Difference: 1 percentage point

This difference is:
- Not statistically significant at α = 0.01
- p = 0.055 > 0.01
- Could be random variation
- Not enough evidence for concern

Step 10: Additional notes
If α = 0.05 instead:
- 0.0548 > 0.05 (still fail to reject, barely!)
- Borderline case
- Might warrant further monitoring

Conservative conclusion:
- Insufficient evidence of problem
- But keep monitoring
- Sample evidence suggestive but not conclusive

Answer:
H₀: p = 0.02, Hₐ: p > 0.02
Test statistic: z = 1.60
P-value: 0.055
Decision: Fail to reject H₀ at α = 0.01
Conclusion: Insufficient evidence that defect rate exceeds 2%`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: testsProportions.id,
        question: 'A researcher finds p̂ = 0.58 from n = 100. She wants to test H₀: p = 0.50 vs Hₐ: p > 0.50. Check the conditions and determine if a z-test is appropriate.',
        solution: `Step 1: List the conditions for z-test
For one-sample z-test for proportion:

1. RANDOM: Random sample
2. NORMAL: np₀ ≥ 10 AND n(1-p₀) ≥ 10
3. INDEPENDENT: n ≤ 0.10N

Step 2: Check RANDOM condition
Statement: Need random sample

Given: "researcher finds" - not stated
Assume: Random sample ✓

Note: Should be explicitly stated!

Step 3: Check NORMAL condition
Use p₀ = 0.50 (from H₀, not p̂!)

np₀ = 100(0.50) = 50 ≥ 10 ✓
n(1-p₀) = 100(0.50) = 50 ≥ 10 ✓

Both satisfied!
Sampling distribution approximately normal

Step 4: Check INDEPENDENT condition
Need: n ≤ 0.10N

n = 100
Need: 100 ≤ 0.10N
      N ≥ 1000

If population has at least 1000:
Independent ✓

Assumption: Reasonable for most populations

Step 5: Common mistake to avoid
DON'T use p̂ to check normal condition!
USE p₀ (from null hypothesis)

WRONG: np̂ = 100(0.58) = 58
RIGHT: np₀ = 100(0.50) = 50

Why? Because we're testing under assumption H₀ is true!

Step 6: Is z-test appropriate?
YES, if:
✓ Sample is random
✓ np₀ = 50 ≥ 10
✓ n(1-p₀) = 50 ≥ 10
✓ Population reasonably large (N ≥ 1000)

All conditions met!
Can proceed with z-test

Step 7: Additional consideration
Sample size n = 100:
- Moderate sample size
- Sufficient for normal approximation
- SE will be reasonably small

SE = √(p₀(1-p₀)/n)
   = √(0.50(0.50)/100)
   = √0.0025
   = 0.05

Step 8: Conduct the test (since appropriate)
z = (p̂ - p₀)/SE
  = (0.58 - 0.50)/0.05
  = 0.08/0.05
  = 1.60

p-value = P(Z > 1.60) ≈ 0.0548

Step 9: When z-test might NOT be appropriate
Fails if:
✗ np₀ < 10 (too few successes expected)
✗ n(1-p₀) < 10 (too few failures expected)
✗ Not random sample
✗ Sample from small population without replacement

Example of failure:
n = 15, p₀ = 0.10
np₀ = 1.5 < 10 ✗
Cannot use z-test!

Step 10: Summary of condition checking
Given information:
n = 100 ✓
p̂ = 0.58 
p₀ = 0.50

Conditions:
Random: Assumed ✓
Normal: 50 ≥ 10 and 50 ≥ 10 ✓
Independent: Assumed N ≥ 1000 ✓

Conclusion: Z-test IS appropriate

Answer:
YES, z-test is appropriate.

CONDITIONS CHECK:
1. Random: Assume random sample ✓
2. Normal: np₀ = 100(0.50) = 50 ≥ 10 ✓
          n(1-p₀) = 100(0.50) = 50 ≥ 10 ✓
3. Independent: Assume N ≥ 1000 so n ≤ 0.10N ✓

All conditions satisfied. Can use z-test for proportion.

Key: Use p₀ (not p̂) when checking normal condition!`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: testsProportions.id,
        question: 'A coin is flipped 100 times, resulting in 60 heads. Test at α = 0.05 if the coin is biased. Then, determine how many heads would be needed for the result to be significant.',
        solution: `PART 1: Test with 60 heads

Step 1: Set up hypotheses
H₀: p = 0.50 (coin is fair)
Hₐ: p ≠ 0.50 (coin is biased)

Two-tailed test!

Step 2: Check conditions
n = 100, p₀ = 0.50

Random: Assume random flips ✓
Normal: np₀ = 50 ≥ 10 ✓
       n(1-p₀) = 50 ≥ 10 ✓
Independent: Flips independent ✓

Step 3: Calculate
p̂ = 60/100 = 0.60

SE = √(0.50(0.50)/100)
   = √0.0025 = 0.05

z = (0.60 - 0.50)/0.05
  = 0.10/0.05 = 2.00

Step 4: Find p-value
P(Z > 2.00) = 0.0228
Two-tailed: p = 2(0.0228) = 0.0456

Step 5: Decision
p = 0.0456 < 0.05
REJECT H₀

Conclusion: Coin appears biased!

PART 2: How many heads needed?

Step 6: Find critical values
For α = 0.05, two-tailed:
α/2 = 0.025 in each tail

z* = ±1.96

Step 7: Set up inequality
Reject H₀ if:
|z| ≥ 1.96

|(p̂ - 0.50)/0.05| ≥ 1.96

Step 8: Solve for p̂ (upper tail)
(p̂ - 0.50)/0.05 ≥ 1.96
p̂ - 0.50 ≥ 0.098
p̂ ≥ 0.598

Step 9: Convert to number of heads
p̂ = x/100 ≥ 0.598
x ≥ 59.8
x ≥ 60 (since x must be integer)

Step 10: Check lower tail
(p̂ - 0.50)/0.05 ≤ -1.96
p̂ - 0.50 ≤ -0.098
p̂ ≤ 0.402

x/100 ≤ 0.402
x ≤ 40.2
x ≤ 40

Step 11: Rejection regions
Reject H₀ if:
x ≥ 60 heads (too many) OR
x ≤ 40 heads (too few)

Fail to reject if:
41 ≤ x ≤ 59 (consistent with fair coin)

Step 12: Verify with 60
x = 60 is exactly at boundary
p̂ = 0.60
z = 2.00
p-value = 0.0456 < 0.05 ✓

Just barely significant!

Step 13: Verify with 59
x = 59
p̂ = 0.59
z = (0.59 - 0.50)/0.05 = 1.80
p-value = 2(0.0359) = 0.0718 > 0.05
Not significant ✓

Step 14: Interpretation
For 100 flips, α = 0.05:

Significantly too many heads: ≥ 60
Significantly too few heads: ≤ 40
Consistent with fair coin: 41-59

Pretty wide range!
Only extreme results reject fairness

Step 15: Connection to confidence interval
95% CI for fair coin:
p̂ ± 1.96(SE)
0.50 ± 1.96(0.05)
0.50 ± 0.098
(0.402, 0.598)
(40.2, 59.8) heads

Values outside this = significant!

Answer:
PART 1: With 60 heads:
z = 2.00, p-value = 0.046
Reject H₀ at α = 0.05
Coin appears biased (barely significant)

PART 2: Need for significance:
≥ 60 heads (too many) OR ≤ 40 heads (too few)
Range 41-59 is consistent with fair coin

60 heads is the minimum to show bias on the high side at α = 0.05 level.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: testsProportions.id,
        front: 'What are the conditions for a z-test for one proportion?',
        back: 'Random sample, Normal (np₀ ≥ 10 AND n(1-p₀) ≥ 10 using H₀ value!), Independent (n ≤ 0.10N). Use p₀ from H₀, not p̂!',
        hint: 'Random, Normal (use p₀!), Independent',
        isPremium: false
      },
      {
        topicId: testsProportions.id,
        front: 'What is the test statistic for a proportion test?',
        back: 'z = (p̂ - p₀)/√(p₀(1-p₀)/n), where p̂ = sample proportion, p₀ = null hypothesis value, n = sample size. SE uses p₀ (not p̂) under assumption H₀ is true.',
        hint: 'z = (p̂ - p₀)/√(p₀(1-p₀)/n)',
        isPremium: false
      },
      {
        topicId: testsProportions.id,
        front: 'How do you find p-value for a proportion test?',
        back: 'One-tailed (< or >): Area beyond z in one direction. Two-tailed (≠): 2 × area beyond |z|. Use z-table or calculator. Small p-value = evidence against H₀.',
        hint: 'One-tailed: one area; two-tailed: 2× area',
        isPremium: false
      },
      {
        topicId: testsProportions.id,
        front: 'What is the difference between one-tailed and two-tailed proportion tests?',
        back: 'One-tailed: Hₐ: p < p₀ or p > p₀ (specific direction), p-value from one tail. Two-tailed: Hₐ: p ≠ p₀ (any difference), p-value = 2 × one tail.',
        hint: 'One direction vs either direction',
        isPremium: false
      },
      {
        topicId: testsProportions.id,
        front: 'Why use p₀ (not p̂) when checking normal condition?',
        back: 'Check np₀ ≥ 10 using null hypothesis value because we test ASSUMING H₀ is true. SE also uses p₀: √(p₀(1-p₀)/n). Testing under null assumption!',
        hint: 'Testing assumes H₀ true; use p₀',
        isPremium: false
      },
      {
        topicId: testsProportions.id,
        front: 'How do you conclude a hypothesis test for proportion?',
        back: 'State conclusion in context: "At α = ___ level, there is [sufficient/insufficient] evidence that [interpret Hₐ in context]." Always reference significance level and context.',
        hint: 'Significance level + evidence statement + context',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: tests-proportions (now has 5 problems, 6 flashcards)');

  // TOPIC 6: Hypothesis Tests for Means
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: testsMeans.id,
        question: 'A machine fills bottles with mean 500 mL. A sample of 25 bottles has x̄ = 497 mL, s = 6 mL. Test at α = 0.05 if mean fill is less than 500 mL. Assume normality.',
        solution: `Step 1: Set up hypotheses
Claim: μ = 500 mL
Suspect: μ < 500 mL (underfilling)

H₀: μ = 500
Hₐ: μ < 500 (one-tailed, left)

Step 2: Check conditions
n = 25

RANDOM: Assume random sample ✓
NORMAL: Population normal (given) ✓
  - With n = 25 < 30, need this assumption
INDEPENDENT: Assume 25 ≤ 0.10N ✓

Use t-test (σ unknown)

Step 3: Calculate test statistic
df = n - 1 = 24

SE = s/√n
   = 6/√25
   = 6/5
   = 1.2

t = (x̄ - μ₀)/SE
  = (497 - 500)/1.2
  = -3/1.2
  = -2.50

Step 4: Find p-value
Left-tailed test
df = 24, t = -2.50

From t-table:
P(t < -2.50) ≈ 0.01

p-value ≈ 0.01

Step 5: Make decision
p-value ≈ 0.01
α = 0.05

Is 0.01 < 0.05? YES

REJECT H₀

Step 6: State conclusion
At the α = 0.05 significance level, there is sufficient evidence that the mean fill is less than 500 mL. The machine appears to be underfilling bottles.

Step 7: Practical interpretation
Sample mean: 497 mL
Target: 500 mL
Difference: -3 mL

This 3 mL shortage is:
- Statistically significant
- Not just random variation
- Machine needs adjustment

Answer:
H₀: μ = 500, Hₐ: μ < 500
Test statistic: t = -2.50 (df = 24)
P-value: 0.01
Decision: Reject H₀ at α = 0.05
Conclusion: Mean fill is significantly less than 500 mL`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: testsMeans.id,
        question: 'Explain when to use a t-test versus a z-test for testing a mean.',
        solution: `Step 1: The key difference
Z-TEST: Population SD (σ) is KNOWN
T-TEST: Population SD (σ) is UNKNOWN (use s)

Step 2: When to use Z-TEST for mean
Conditions:
1. σ is known (rare!)
2. Random sample
3. Normal population OR n ≥ 30

Test statistic:
z = (x̄ - μ₀)/(σ/√n)

Use z-table for p-value

Step 3: When to use T-TEST for mean
Conditions:
1. σ is unknown (almost always!)
2. Random sample
3. Normal population (if n < 30)
   OR n ≥ 30 (can use CLT)
4. Independent observations

Test statistic:
t = (x̄ - μ₀)/(s/√n)

Use t-table with df = n - 1

Step 4: Why σ is rarely known
In practice:
- If we knew σ, we'd probably know μ
- Population parameters rarely known
- Must estimate from sample
- Use s as estimate of σ

Real-world: Almost always use t-test!

Step 5: Small vs large samples

SMALL SAMPLE (n < 30):
Must use T-TEST:
- Need normality assumption
- T-distribution accounts for uncertainty in s
- Heavier tails than z
- More conservative

LARGE SAMPLE (n ≥ 30):
Can use T-TEST (preferred):
- CLT applies
- t-distribution → normal
- Still use t because σ unknown

Could use Z-TEST if σ known (very rare)

Step 6: T-distribution properties
Depends on df = n - 1:
- Heavier tails when df small
- More probability in extremes
- Approaches normal as df → ∞

Examples:
df = 5: Very heavy tails
df = 30: Close to normal
df = 100: Essentially normal

Step 7: Comparison for 95% critical values
Z*: Always 1.96

T* depends on df:
df = 5: t* = 2.571 (much larger!)
df = 10: t* = 2.228
df = 20: t* = 2.086
df = 30: t* = 2.042
df = ∞: t* → 1.96

Step 8: Decision flowchart for means
Is σ known?
├─ YES → Z-test (rare)
│         Need: random, normal or n≥30
│
└─ NO → T-test (almost always)
          Need: random, normal (if n<30), independent

Step 9: Common scenarios

SCENARIO 1: n = 20, s = 5, σ unknown
→ T-TEST (df = 19)
Need normality assumption

SCENARIO 2: n = 100, s = 12, σ unknown
→ T-TEST (df = 99)
CLT applies, t ≈ z

SCENARIO 3: n = 50, σ = 8 known
→ Z-TEST
But this is very rare!

SCENARIO 4: n = 15, s = 3, σ unknown, skewed population
→ T-TEST not appropriate!
n too small, population not normal

Step 10: Summary table
                    Z-TEST          T-TEST
              ┌────────────────┬─────────────────┐
When to use   │ σ known (rare) │ σ unknown       │
              ├────────────────┼─────────────────┤
Test stat     │ z=(x̄-μ₀)/(σ/√n)│ t=(x̄-μ₀)/(s/√n)│
              ├────────────────┼─────────────────┤
Reference     │ z-table        │ t-table (df=n-1)│
              ├────────────────┼─────────────────┤
Sample size   │ n≥30 if not    │ n≥30 OR normal  │
requirement   │ normal         │ population      │
              └────────────────┴─────────────────┘

Answer:
USE T-TEST when:
- σ is unknown (use sample s)
- Almost all real-world situations
- Need: random, normal (n<30) or n≥30, independent
- Test statistic: t = (x̄ - μ₀)/(s/√n)
- Use t-distribution with df = n-1

USE Z-TEST when:
- σ is KNOWN (very rare!)
- Population SD given in problem
- Test statistic: z = (x̄ - μ₀)/(σ/√n)
- Use standard normal distribution

In practice, almost always use t-test because σ is rarely known!`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: testsMeans.id,
        question: 'Students claim they study an average of 20 hours per week. A random sample of 36 students shows x̄ = 18.5 hours, s = 6 hours. Test at α = 0.01 if the mean is less than 20.',
        solution: `Step 1: Set up hypotheses
Claim: μ = 20 hours
Test: μ < 20 (students study less)

H₀: μ = 20
Hₐ: μ < 20 (one-tailed, left)

Step 2: Check conditions
n = 36

RANDOM: Random sample (given) ✓
NORMAL: n = 36 ≥ 30, CLT applies ✓
INDEPENDENT: Assume 36 ≤ 0.10N ✓

Use t-test (σ unknown)

Step 3: Calculate SE
SE = s/√n
   = 6/√36
   = 6/6
   = 1

Step 4: Calculate test statistic
df = n - 1 = 35

t = (x̄ - μ₀)/SE
  = (18.5 - 20)/1
  = -1.5/1
  = -1.50

Step 5: Find p-value
Left-tailed test
df = 35, t = -1.50

From t-table:
P(t < -1.50) ≈ 0.07

p-value ≈ 0.07

Step 6: Make decision
p-value = 0.07
α = 0.01

Is 0.07 < 0.01? NO

FAIL TO REJECT H₀

Step 7: State conclusion
At the α = 0.01 significance level, there is insufficient evidence that students study less than 20 hours per week.

The observed difference could reasonably occur by chance.

Step 8: Additional interpretation
Sample mean: 18.5 hours
Claimed mean: 20 hours
Difference: -1.5 hours

While students in sample study less:
- Not statistically significant at α = 0.01
- p-value (0.07) >> α (0.01)
- Could be sampling variation
- Cannot reject claim

Step 9: What if α = 0.10?
If we used α = 0.10:
p = 0.07 < 0.10
Would reject H₀!

But with strict α = 0.01:
Need stronger evidence
This result not convincing enough

Answer:
H₀: μ = 20, Hₐ: μ < 20
Test statistic: t = -1.50 (df = 35)
P-value: 0.07
Decision: Fail to reject H₀ at α = 0.01
Conclusion: Insufficient evidence mean is less than 20 hours`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: testsMeans.id,
        question: 'A researcher tests H₀: μ = 100 vs Hₐ: μ ≠ 100 with n = 16, x̄ = 105, s = 8. Find the test statistic and p-value. What conclusion at α = 0.05?',
        solution: `Step 1: Identify test type
H₀: μ = 100
Hₐ: μ ≠ 100 (TWO-TAILED!)
σ unknown → use t-test

Step 2: Check conditions (assume met)
RANDOM: Assume ✓
NORMAL: n = 16 < 30, need normality assumption ✓
INDEPENDENT: Assume ✓

Step 3: Calculate SE
SE = s/√n
   = 8/√16
   = 8/4
   = 2

Step 4: Calculate test statistic
df = n - 1 = 15

t = (x̄ - μ₀)/SE
  = (105 - 100)/2
  = 5/2
  = 2.50

Step 5: Find p-value (TWO-TAILED!)
df = 15, t = 2.50

From t-table:
P(t > 2.50) ≈ 0.012

TWO-TAILED p-value:
p = 2 × 0.012 = 0.024

Step 6: Make decision
p-value = 0.024
α = 0.05

Is 0.024 < 0.05? YES

REJECT H₀

Step 7: State conclusion
At the α = 0.05 significance level, there is sufficient evidence that the true mean differs from 100.

The sample data suggests μ ≠ 100.

Step 8: Direction of difference
x̄ = 105 > 100
Evidence suggests μ > 100

But we tested two-tailed:
- Could be μ > 100 or μ < 100
- Data suggests higher
- Significant in either direction

Step 9: Strength of evidence
p = 0.024 fairly small

Interpretation:
- If μ really = 100
- Only 2.4% chance of x̄ this far from 100
- Fairly unlikely under H₀
- Moderate evidence against H₀

Step 10: What if one-tailed?
If we had tested Hₐ: μ > 100:
One-tailed p = 0.012
Even stronger evidence!

But problem states ≠ (two-tailed)
Must use p = 0.024

Step 11: Connection to CI
95% CI for μ:
t* = 2.131 (df = 15)
CI = 105 ± 2.131(2)
   = 105 ± 4.26
   = (100.74, 109.26)

100 is NOT in this interval:
Confirms rejection at α = 0.05!

Answer:
Test statistic: t = 2.50 (df = 15)
P-value: 0.024 (two-tailed)
Decision: Reject H₀ at α = 0.05
Conclusion: Sufficient evidence that μ ≠ 100

The mean differs significantly from 100, appearing to be higher based on x̄ = 105.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: testsMeans.id,
        question: 'Two students test H₀: μ = 50. Student A uses α = 0.05, Student B uses α = 0.01. Both get the same data: t = 2.15, df = 20. What decision does each make? Explain why decisions differ.',
        solution: `Step 1: Find the p-value (same for both)
df = 20, t = 2.15

Need to know: one-tailed or two-tailed?
Assume TWO-TAILED (testing μ ≠ 50)

From t-table:
P(t > 2.15) ≈ 0.022

Two-tailed p-value:
p = 2 × 0.022 = 0.044

Step 2: Student A's decision (α = 0.05)
p-value = 0.044
α = 0.05

Is 0.044 < 0.05? YES

Student A: REJECT H₀

Conclusion: Sufficient evidence at 0.05 level that μ ≠ 50

Step 3: Student B's decision (α = 0.01)
p-value = 0.044
α = 0.01

Is 0.044 < 0.01? NO

Student B: FAIL TO REJECT H₀

Conclusion: Insufficient evidence at 0.01 level that μ ≠ 50

Step 4: Why different decisions?
Same data, same p-value, different standards!

p = 0.044 is:
- Small enough for α = 0.05 (less stringent)
- NOT small enough for α = 0.01 (more stringent)

Step 5: Understanding α as threshold
Think of α as "evidence requirement"

α = 0.05: Need p < 0.05
- Willing to accept 5% error rate
- Less strict
- Easier to reject H₀

α = 0.01: Need p < 0.01  
- Want stronger evidence
- More strict
- Harder to reject H₀

Step 6: Interpret p-value
p = 0.044 = 4.4%

Meaning:
"If H₀ true, 4.4% chance of results this extreme"

Student A thinks:
- 4.4% is rare enough (< 5%)
- Unlikely under H₀
- Reject H₀

Student B thinks:
- 4.4% not rare enough (not < 1%)
- Not convincing enough
- Don't reject H₀

Step 7: Neither is "wrong"!
Both are correct for their chosen α!

Different standards:
- Student A uses conventional α = 0.05
- Student B uses stricter α = 0.01

Appropriate α depends on context

Step 8: When to use different α levels
α = 0.10 (liberal):
- Preliminary research
- Exploratory studies
- Don't want to miss potential effects

α = 0.05 (standard):
- Most common
- Good balance
- Convention in many fields

α = 0.01 (conservative):
- High-stakes decisions
- Medical treatments
- Want strong evidence

α = 0.001 (very conservative):
- Particle physics
- Exceptional claims
- Need extraordinary evidence

Step 9: This is a borderline case!
p = 0.044 is close to 0.05

Barely significant at α = 0.05
Not significant at α = 0.01

Shows importance of:
1. Choosing α BEFORE seeing data
2. Reporting actual p-value
3. Not treating 0.05 as magic cutoff

Step 10: Better reporting
Instead of just "significant" or "not":

Report: "t(20) = 2.15, p = 0.044"

Lets reader judge:
- Evidence is moderate
- Borderline significance
- Just below conventional α
- Not overwhelming evidence

Step 11: Practical advice
When results are borderline:
- Report exact p-value
- Don't just say "significant"
- Consider practical significance
- May need more data
- Be cautious in conclusions

Step 12: What both students agree on
Both agree:
- Data shows t = 2.15
- This is fairly unusual if H₀ true
- Evidence leans against H₀
- But evidence is not overwhelming

Disagree:
- Is evidence strong ENOUGH?
- Depends on chosen standard

Answer:
STUDENT A (α = 0.05): REJECT H₀
p = 0.044 < 0.05 → Significant
Sufficient evidence μ ≠ 50

STUDENT B (α = 0.01): FAIL TO REJECT H₀  
p = 0.044 > 0.01 → Not significant
Insufficient evidence at stricter standard

WHY DIFFERENT? α is the threshold for decision. Same p-value (0.044) meets less strict standard (0.05) but not stricter standard (0.01). Both decisions are correct for their chosen significance level. This shows that α = 0.05 is not a magic cutoff - it's a conventional standard that can be adjusted based on context and consequences of errors.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: testsMeans.id,
        front: 'What are the conditions for a t-test for one mean?',
        back: 'Random sample, Normal (population approximately normal if n < 30, OR n ≥ 30 for CLT), Independent (n ≤ 0.10N). Use when σ unknown (almost always).',
        hint: 'Random, Normal (or n≥30), Independent; σ unknown',
        isPremium: false
      },
      {
        topicId: testsMeans.id,
        front: 'What is the test statistic for a t-test for mean?',
        back: 't = (x̄ - μ₀)/(s/√n), where x̄ = sample mean, μ₀ = null value, s = sample SD, n = sample size. Use t-distribution with df = n - 1.',
        hint: 't = (x̄ - μ₀)/(s/√n); df = n-1',
        isPremium: false
      },
      {
        topicId: testsMeans.id,
        front: 'When do you use t-test vs z-test for a mean?',
        back: 'T-test: σ unknown (use s) - almost always! Z-test: σ known (rare). Both need random sample and normality (n < 30) or n ≥ 30.',
        hint: 'T when σ unknown (almost always)',
        isPremium: false
      },
      {
        topicId: testsMeans.id,
        front: 'How do you find p-value for a t-test?',
        back: 'Use t-distribution with df = n-1. One-tailed: area beyond t. Two-tailed: 2 × area beyond |t|. Use t-table or calculator. Compare to α to decide.',
        hint: 'T-table with df; one vs two tails',
        isPremium: false
      },
      {
        topicId: testsMeans.id,
        front: 'What is the relationship between CI and hypothesis test?',
        back: 'If value is NOT in (1-α)×100% CI, reject H₀ at α level. If value IS in CI, fail to reject. 95% CI corresponds to α = 0.05 test.',
        hint: 'Value not in CI → reject H₀',
        isPremium: false
      },
      {
        topicId: testsMeans.id,
        front: 'How do you state conclusion for a hypothesis test?',
        back: 'At α = ___ level, there is [sufficient/insufficient] evidence that [interpret Hₐ in context]. Always include significance level, decision, and context. Never "prove" or "accept" H₀.',
        hint: 'Level + evidence + context; never "accept H₀"',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: tests-means-stats (now has 5 problems, 6 flashcards)');

  console.log('\n🎉 Batch 5 Complete! CI Complete (5/5) + HT (4/6)');
  console.log('Progress: 24/34 AP Statistics topics complete (71%)');
  
  await prisma.$disconnect();
}

main();
