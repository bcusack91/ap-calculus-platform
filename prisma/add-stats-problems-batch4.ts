import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to AP Statistics - Batch 4: CLT + CI Proportions (2 topics)...\n');

  // Find topics
  const clt = await prisma.topic.findFirst({
    where: { slug: 'central-limit-theorem' }
  });

  const ciProportions = await prisma.topic.findFirst({
    where: { slug: 'ci-proportions' }
  });

  if (!clt || !ciProportions) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Central Limit Theorem
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: clt.id,
        question: 'State the Central Limit Theorem and explain what conditions must be met for it to apply.',
        solution: `Step 1: State the Central Limit Theorem
For a random sample of size n from a population with mean μ and standard deviation σ:

As n increases, the sampling distribution of x̄ (sample mean) approaches a normal distribution with:
- Mean: μₓ̄ = μ
- Standard deviation: σₓ̄ = σ/√n

This happens REGARDLESS of the shape of the population distribution!

Step 2: Conditions that must be met
1. RANDOMNESS:
   - Sample must be randomly selected
   - Each member has equal chance of selection
   - Ensures sample is representative

2. INDEPENDENCE:
   - Observations must be independent
   - 10% condition: n ≤ 0.10N (sample ≤ 10% of population)
   - If sampling without replacement from small population, need correction

3. SAMPLE SIZE:
   - Larger n → more normal
   - Rule of thumb: n ≥ 30 usually sufficient
   - If population is normal: works for ANY n
   - If population is skewed: need larger n (maybe 40+)
   - If population has extreme outliers: need even larger n

Step 3: Why randomness matters
Non-random samples:
- Convenience sample → biased
- Voluntary response → biased
- Cannot apply CLT to biased samples

Random selection ensures:
- Sample represents population
- Results can be generalized

Step 4: Why independence matters
Independence violated when:
- Sampling without replacement from small population (>10%)
- Clustered sampling (family members, same class)
- Time series data (measurements over time)

Effects of dependence:
- Standard formulas don't apply
- Need special methods

Step 5: Why sample size matters
Small n:
- x̄ distribution looks like population distribution
- If population is skewed, x̄ is skewed
- If population is bimodal, x̄ is bimodal

Large n:
- CLT "kicks in"
- x̄ distribution becomes normal
- Averaging smooths out population shape

Step 6: Examples of CLT conditions check
VALID: n = 50 from random digit table
✓ Random
✓ Independent (infinite population)
✓ n = 50 ≥ 30

INVALID: n = 100 from class of 200 students without replacement
✓ Could be random
✗ Not independent (100 > 0.10 × 200 = 20)
✓ n = 100 ≥ 30
Conclusion: 10% condition violated

VALID: n = 20 from normal population
✓ Random (assumed)
✓ Independent (assumed)
✓ Population is normal (works for any n)

Answer:
CENTRAL LIMIT THEOREM: The sampling distribution of x̄ approaches Normal(μ, σ/√n) as n increases, regardless of population shape.

CONDITIONS:
1. Random sample from population
2. Independent observations (10% condition: n ≤ 0.10N)
3. Large enough sample (n ≥ 30, or any n if population is normal)

All three conditions must be met to apply CLT and use normal probability calculations.`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: clt.id,
        question: 'A population has a right-skewed distribution with μ = 25 and σ = 8. For samples of size n = 64, describe the sampling distribution of x̄ and calculate P(24 < x̄ < 26).',
        solution: `Step 1: Check CLT conditions
Population: Right-skewed (not normal)
Sample size: n = 64

Is n ≥ 30? Yes, 64 ≥ 30 ✓
By CLT: x̄ is approximately normally distributed

Step 2: Find parameters of sampling distribution
Mean: μₓ̄ = μ = 25

Standard deviation (standard error):
σₓ̄ = σ/√n
    = 8/√64
    = 8/8
    = 1

Step 3: Describe the sampling distribution
x̄ ~ Normal(μ = 25, σ = 1) approximately

Key points:
- Shape: approximately normal (due to CLT)
- Center: μₓ̄ = 25 (same as population)
- Spread: σₓ̄ = 1 (much less than population σ = 8)

Even though population is right-skewed, x̄ is approximately normal!

Step 4: Calculate P(24 < x̄ < 26)
Standardize to z-scores:

z₁ = (24 - 25)/1 = -1/1 = -1
z₂ = (26 - 25)/1 = 1/1 = 1

P(24 < x̄ < 26) = P(-1 < Z < 1)

Step 5: Use empirical rule or table
From empirical rule:
About 68% of normal distribution is within 1 SD of mean

P(-1 < Z < 1) ≈ 0.68

More precisely from table:
P(Z < 1) = 0.8413
P(Z < -1) = 0.1587
P(-1 < Z < 1) = 0.8413 - 0.1587 = 0.6826

Step 6: Interpret the result
About 68.3% of all samples of size 64 will have sample means between 24 and 26.

This range is μ ± 1σₓ̄ = 25 ± 1
Very common for x̄ to fall in this range!

Step 7: Compare to individual values
For individual value X from population:
- Can't use normal (population is skewed)
- Can't easily find P(24 < X < 26)
- Would need actual population distribution

For sample mean x̄:
- CAN use normal (CLT applies)
- Easy to calculate probabilities
- CLT is powerful!

Step 8: Effect of sample size
If we used n = 16 instead:
σₓ̄ = 8/√16 = 2
P(24 < x̄ < 26) = P(-0.5 < Z < 0.5) ≈ 0.38
Less likely to be close to μ with smaller sample

If we used n = 256 instead:
σₓ̄ = 8/√256 = 0.5
P(24 < x̄ < 26) = P(-2 < Z < 2) ≈ 0.95
More likely to be close to μ with larger sample

Answer:
Sampling distribution: x̄ ~ Normal(μ = 25, σ = 1) approximately

Despite the right-skewed population, the large sample size (n = 64) allows CLT to apply, making x̄ approximately normal.

P(24 < x̄ < 26) ≈ 0.683 or 68.3%

About 68% of samples will have means within 1 unit of the population mean.`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: clt.id,
        question: 'The weights of carry-on luggage at an airport are heavily right-skewed with μ = 18 lbs and σ = 6 lbs. A flight has 100 passengers. What is the probability that the average luggage weight for these 100 passengers exceeds 19 lbs?',
        solution: `Step 1: Set up the problem
Population (luggage weights):
- Heavily right-skewed
- μ = 18 lbs
- σ = 6 lbs

Sample:
- n = 100 passengers
- Find: P(x̄ > 19)

Step 2: Check CLT conditions
Random: Assume passengers are representative sample ✓
Independent: 100 passengers << all passengers (10% rule) ✓
Sample size: n = 100 ≥ 30, even with heavy skew ✓

CLT applies!

Step 3: Find sampling distribution parameters
μₓ̄ = μ = 18 lbs

σₓ̄ = σ/√n
    = 6/√100
    = 6/10
    = 0.6 lbs

x̄ ~ Normal(18, 0.6) approximately

Step 4: Calculate P(x̄ > 19)
Standardize:
z = (19 - 18)/0.6
  = 1/0.6
  = 5/3
  ≈ 1.67

P(x̄ > 19) = P(Z > 1.67)

Step 5: Look up probability
From standard normal table:
P(Z < 1.67) ≈ 0.9525

Therefore:
P(Z > 1.67) = 1 - 0.9525
            = 0.0475

Step 6: Interpret
Only about 4.75% chance (less than 5%) that average luggage weight exceeds 19 lbs.

Even though population is heavily skewed:
- Individual bags vary a lot (σ = 6)
- Average of 100 bags is much more stable (σₓ̄ = 0.6)
- Large sample "averages out" the skewness

Step 7: Why this matters for airlines
Airline might set weight limit based on average:
- If average > 19 lbs, might have safety concerns
- Probability < 5% means this is rare
- Can plan accordingly

Individual approach would be harder:
- Individual weights range widely
- Many over 19 lbs (population is skewed right)
- But average is more predictable!

Step 8: Compare to individual luggage
For one random bag:
P(X > 19) = ?

Can't easily calculate - population is skewed, not normal.
But probably much higher than 4.75%!
Maybe 30-40% of bags exceed 19 lbs.

But average of 100 bags rarely exceeds 19 lbs.

Step 9: Check reasonableness
19 lbs is 1 lb above mean
In terms of SE: 19 = 18 + 1(0.6) = 18 + 1.67σₓ̄
About 1.67 SE above mean
Should be fairly unlikely ✓

Answer: P(x̄ > 19) ≈ 0.048 or 4.8%

There's only about a 4.8% chance that the average luggage weight for 100 passengers exceeds 19 lbs. The Central Limit Theorem allows us to treat the sample mean as approximately normal despite the heavily skewed population, and the large sample size (n = 100) makes the sample mean much less variable than individual values.`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: clt.id,
        question: 'A factory produces batteries with lifetimes that have μ = 500 hours and σ = 100 hours. Quality control tests samples of 50 batteries. What is the probability that a sample mean is more than 25 hours away from the true mean (in either direction)?',
        solution: `Step 1: Translate the question
"More than 25 hours away from true mean" means:
Either x̄ < 475 or x̄ > 525

Find: P(|x̄ - μ| > 25) = P(x̄ < 475) + P(x̄ > 525)

Step 2: Set up sampling distribution
μ = 500 hours
σ = 100 hours
n = 50

Check CLT: n = 50 ≥ 30 ✓

Step 3: Find sampling distribution parameters
μₓ̄ = μ = 500

σₓ̄ = σ/√n
    = 100/√50
    = 100/7.07
    ≈ 14.14 hours

x̄ ~ Normal(500, 14.14) approximately

Step 4: Use symmetry
By symmetry of normal distribution:
P(x̄ < 475) = P(x̄ > 525)

So: P(x̄ < 475 or x̄ > 525) = 2 × P(x̄ > 525)

Step 5: Calculate P(x̄ > 525)
Standardize:
z = (525 - 500)/14.14
  = 25/14.14
  ≈ 1.77

P(x̄ > 525) = P(Z > 1.77)

Step 6: Look up probability
From table:
P(Z < 1.77) ≈ 0.9616

Therefore:
P(Z > 1.77) = 1 - 0.9616
            = 0.0384

Step 7: Find total probability
P(more than 25 away) = 2 × 0.0384
                      = 0.0768
                      ≈ 0.077

Step 8: Interpret
About 7.7% of samples will have means more than 25 hours from the true mean.

This means:
- 92.3% of samples within 25 hours of μ = 500
- Quality control can use this to set thresholds
- If x̄ is more than 25 away, might indicate problem

Step 9: Express in terms of standard errors
25 hours = 1.77 × 14.14 ≈ 1.77 SE

So we're asking: P(more than 1.77 SE from mean)

From 68-95-99.7 rule:
- Within 1 SE: ≈68%
- Within 2 SE: ≈95%
- Within 1.77 SE: ≈92.3%

Outside 1.77 SE: ≈7.7% ✓

Step 10: Decision rule for quality control
Factory might use rule:
"Flag sample if x̄ < 475 or x̄ > 525"

False alarm rate: 7.7%
About 1 in 13 good samples will be flagged
Reasonable tradeoff for quality control

Answer: P(|x̄ - μ| > 25) ≈ 0.077 or 7.7%

There's about a 7.7% probability that a sample mean will be more than 25 hours away from the true mean of 500 hours. This represents being more than 1.77 standard errors from the mean. Quality control can use this threshold to identify unusual samples that might indicate production problems.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: clt.id,
        question: 'An elevator has a maximum safe weight of 2000 lbs. If adult weights are normally distributed with μ = 180 lbs and σ = 30 lbs, what is the probability that 10 randomly selected adults will exceed the elevator\'s limit? What about 12 adults?',
        solution: `Step 1: Understand what we\'re finding
For n adults, total weight = n × x̄
Want: P(total weight > 2000)
Equivalently: P(n × x̄ > 2000)
Or: P(x̄ > 2000/n)

Step 2: Set up for n = 10
Maximum average weight: 2000/10 = 200 lbs per person

Find: P(x̄ > 200) when n = 10

Step 3: Sampling distribution for n = 10
Population is normal, so x̄ is normal for ANY n (don\'t need CLT!)

μₓ̄ = μ = 180 lbs

σₓ̄ = σ/√n
    = 30/√10
    = 30/3.16
    ≈ 9.49 lbs

x̄ ~ Normal(180, 9.49)

Step 4: Calculate P(x̄ > 200) for n = 10
Standardize:
z = (200 - 180)/9.49
  = 20/9.49
  ≈ 2.11

P(x̄ > 200) = P(Z > 2.11)

From table:
P(Z < 2.11) ≈ 0.9826

P(Z > 2.11) = 1 - 0.9826
            = 0.0174

Step 5: Interpret n = 10 result
About 1.74% chance that 10 adults exceed 2000 lbs
Fairly safe - less than 2% risk

Step 6: Set up for n = 12
Maximum average weight: 2000/12 ≈ 166.67 lbs per person

Find: P(x̄ > 166.67) when n = 12

Step 7: Sampling distribution for n = 12
μₓ̄ = 180 lbs

σₓ̄ = σ/√n
    = 30/√12
    = 30/3.46
    ≈ 8.66 lbs

x̄ ~ Normal(180, 8.66)

Step 8: Calculate P(x̄ > 166.67) for n = 12
Standardize:
z = (166.67 - 180)/8.66
  = -13.33/8.66
  ≈ -1.54

P(x̄ > 166.67) = P(Z > -1.54)

From table:
P(Z < -1.54) ≈ 0.0618

P(Z > -1.54) = 1 - 0.0618
             = 0.9382

Step 9: Interpret n = 12 result
About 93.8% chance that 12 adults exceed 2000 lbs!
Very risky - almost certain to exceed limit

Step 10: Why such a big difference?
n = 10: Need average > 200 lbs (20 lbs above μ)
        = 2.11 SE above mean
        Unlikely!

n = 12: Need average > 166.67 lbs (13.33 lbs below μ)
        = 1.54 SE below mean  
        Very likely!

Step 11: Find maximum safe capacity
At what n does P(exceed) = 0.05 (5% risk)?

Need: P(x̄ > 2000/n) = 0.05
P(Z > z) = 0.05 means z = 1.645

(2000/n - 180)/(30/√n) = -1.645

Solving:
2000/n = 180 - 1.645(30/√n)
2000 = 180n - 49.35√n

Approximately n ≈ 10.6

So maximum safe capacity is about 10 adults for 5% risk level.

Answer:
n = 10: P(exceed 2000 lbs) ≈ 0.017 or 1.7%
n = 12: P(exceed 2000 lbs) ≈ 0.938 or 93.8%

With 10 adults, there's only about 1.7% chance of exceeding the limit (relatively safe). With 12 adults, there's about 93.8% chance of exceeding the limit (very dangerous!). The maximum average weight needed drops from 200 lbs (n=10) to 166.67 lbs (n=12), and 166.67 is well below the population mean of 180, making it very likely to exceed.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: clt.id,
        front: 'State the Central Limit Theorem.',
        back: 'For samples of size n from ANY population with mean μ and SD σ: As n increases, sampling distribution of x̄ approaches Normal(μ, σ/√n), regardless of population shape. Usually n ≥ 30 sufficient.',
        hint: 'x̄ becomes normal with μ and σ/√n',
        isPremium: false
      },
      {
        topicId: clt.id,
        front: 'What three conditions must be met to apply the Central Limit Theorem?',
        back: '1) Random sample. 2) Independent observations (10% rule: n ≤ 0.10N). 3) Large enough sample (n ≥ 30, or any n if population is normal). All three required!',
        hint: 'Random, Independent, Large sample',
        isPremium: false
      },
      {
        topicId: clt.id,
        front: 'What is the 10% condition for independence?',
        back: 'When sampling without replacement, need n ≤ 10% of population (n ≤ 0.10N). If violated, observations aren\'t truly independent. Ensures sampling doesn\'t significantly deplete population.',
        hint: 'Sample ≤ 10% of population',
        isPremium: false
      },
      {
        topicId: clt.id,
        front: 'How does sample size affect when CLT applies?',
        back: 'Population normal: CLT works for ANY n. Population moderately skewed: n ≥ 15-30. Population heavily skewed: n ≥ 40+. Population with outliers: may need n > 100. More skew → need larger n.',
        hint: 'More skewed → need larger n',
        isPremium: false
      },
      {
        topicId: clt.id,
        front: 'Why is the Central Limit Theorem so important?',
        back: 'Allows using normal distribution for x̄ even when population isn\'t normal! Foundation for: confidence intervals, hypothesis tests, inference. Works for almost any population distribution. Most important theorem in statistics.',
        hint: 'Can use normal for x̄ regardless of population',
        isPremium: false
      },
      {
        topicId: clt.id,
        front: 'How do you find P(x̄ in some range) using CLT?',
        back: '1) Check conditions (random, independent, n ≥ 30). 2) Find μₓ̄ = μ and σₓ̄ = σ/√n. 3) Standardize to z = (x̄ - μ)/(σ/√n). 4) Use normal table/calculator. CLT makes x̄ approximately normal.',
        hint: 'Check conditions, find μₓ̄ and σₓ̄, standardize, use normal',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: central-limit-theorem (now has 5 problems, 6 flashcards)');

  // TOPIC 2: Confidence Intervals for Proportions
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: ciProportions.id,
        question: 'In a random sample of 400 voters, 220 support a proposition. Construct a 95% confidence interval for the true proportion of voters who support the proposition.',
        solution: `Step 1: Identify the information
n = 400 (sample size)
x = 220 (number of successes)
p̂ = 220/400 = 0.55 (sample proportion)

Confidence level: 95%

Step 2: Check conditions for proportion CI
RANDOM: Sample is random ✓
NORMAL: np̂ ≥ 10 and n(1-p̂) ≥ 10
  400(0.55) = 220 ≥ 10 ✓
  400(0.45) = 180 ≥ 10 ✓
INDEPENDENT: n ≤ 0.10N
  400 ≤ 0.10(all voters) - assume yes ✓

All conditions met!

Step 3: Find critical value
95% confidence → α = 0.05
z* = 1.96 (from table for 95% CI)

Step 4: Calculate standard error
SE = √[p̂(1-p̂)/n]
   = √[0.55(0.45)/400]
   = √[0.2475/400]
   = √0.00061875
   ≈ 0.0249

Step 5: Calculate margin of error
ME = z* × SE
   = 1.96 × 0.0249
   ≈ 0.0488

Step 6: Construct confidence interval
CI = p̂ ± ME
   = 0.55 ± 0.049
   = (0.501, 0.599)

Or: (0.50, 0.60) rounded

Step 7: Interpret the interval
We are 95% confident that the true proportion of voters who support the proposition is between 0.50 and 0.60 (or 50% and 60%).

This means:
- If we repeated this sampling process many times
- About 95% of intervals would contain true p
- This specific interval either contains p or doesn't
- But the process is reliable 95% of the time

Answer: 95% CI for p: (0.50, 0.60)

We are 95% confident that between 50% and 60% of all voters support the proposition.`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: ciProportions.id,
        question: 'A quality control inspector finds 8 defects in a sample of 200 items. Construct a 90% confidence interval for the defect rate.',
        solution: `Step 1: Calculate sample proportion
n = 200
x = 8
p̂ = 8/200 = 0.04

Step 2: Check conditions
RANDOM: Assume random sample ✓
NORMAL:
  np̂ = 200(0.04) = 8 < 10 ✗
  n(1-p̂) = 200(0.96) = 192 ≥ 10 ✓

Condition fails! But let's proceed with caution.
(In practice, might use exact binomial method)

Step 3: Find z* for 90% confidence
90% confidence → z* = 1.645

Step 4: Calculate SE
SE = √[p̂(1-p̂)/n]
   = √[0.04(0.96)/200]
   = √[0.0384/200]
   = √0.000192
   ≈ 0.0139

Step 5: Calculate ME
ME = 1.645 × 0.0139
   ≈ 0.023

Step 6: Construct CI
CI = 0.04 ± 0.023
   = (0.017, 0.063)
   = (1.7%, 6.3%)

Step 7: Interpret with caution
We are 90% confident the true defect rate is between 1.7% and 6.3%.

Note: This interval may not be as reliable since np̂ < 10.

Answer: 90% CI: (0.017, 0.063) or (1.7%, 6.3%)

Caution: The success-failure condition is marginally violated (only 8 successes), so this normal-based interval may not be fully reliable.`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: ciProportions.id,
        question: 'A researcher wants to estimate the proportion of defective items with a margin of error no more than 0.03 at 90% confidence. How large a sample is needed if no prior estimate exists?',
        solution: `Step 1: Identify what we need
ME = 0.03
Confidence level = 90% → z* = 1.645
No prior estimate → use p̂ = 0.5

Step 2: Use sample size formula
n = (z*)²p̂(1-p̂)/ME²

Step 3: Calculate
n = (1.645)²(0.5)(0.5)/(0.03)²
  = 2.706(0.25)/0.0009
  = 0.6765/0.0009
  ≈ 751.67

Step 4: Round UP
Always round UP to ensure ME is no larger than desired
n = 752

Step 5: Why use p̂ = 0.5?
The product p̂(1-p̂) is maximized at p̂ = 0.5
This gives the most conservative (largest) sample size
Guarantees ME ≤ 0.03 regardless of true p

Answer: n = 752

Need a sample of at least 752 items to achieve a margin of error no more than 0.03 at 90% confidence.`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: ciProportions.id,
        question: 'Two polls: Poll A (n=500, p̂=0.52) and Poll B (n=1000, p̂=0.51). Both use 95% confidence. Which poll has a smaller margin of error? Calculate both.',
        solution: `Step 1: Recall margin of error formula
ME = z*√[p̂(1-p̂)/n]

For 95% CI: z* = 1.96

Step 2: Calculate ME for Poll A
p̂ = 0.52, n = 500

ME_A = 1.96√[0.52(0.48)/500]
     = 1.96√[0.2496/500]
     = 1.96√0.0004992
     = 1.96(0.0223)
     ≈ 0.044

Step 3: Calculate ME for Poll B
p̂ = 0.51, n = 1000

ME_B = 1.96√[0.51(0.49)/1000]
     = 1.96√[0.2499/1000]
     = 1.96√0.0002499
     = 1.96(0.0158)
     ≈ 0.031

Step 4: Compare
Poll A: ME ≈ 0.044 or 4.4%
Poll B: ME ≈ 0.031 or 3.1%

Poll B has smaller margin of error!

Step 5: Why is Poll B better?
Larger sample size (1000 vs 500)
ME ∝ 1/√n
Doubling n reduces ME by factor of √2 ≈ 1.41

500 × 2 = 1000
ME_A/ME_B = √(1000/500) = √2 ≈ 1.41
0.044/0.031 ≈ 1.42 ✓

Step 6: Effect of p̂
Poll B also has p̂ closer to 0.5
But this increases ME slightly
Effect of larger n dominates

Answer: Poll B has smaller ME (0.031 vs 0.044)

Poll B's larger sample size (1000 vs 500) gives more precision despite having p̂ closer to 0.5.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: ciProportions.id,
        question: 'Explain why we can\'t construct a valid confidence interval for a proportion when the sample proportion is 0 or 1.',
        solution: `Step 1: Recall CI formula
CI = p̂ ± z*√[p̂(1-p̂)/n]

SE = √[p̂(1-p̂)/n]

Step 2: What happens when p̂ = 0?
SE = √[0(1)/n] = 0
CI = 0 ± 0 = (0, 0)

This says we're 100% certain p = 0
Unreasonable from a sample!

Step 3: What happens when p̂ = 1?
SE = √[1(0)/n] = 0
CI = 1 ± 0 = (1, 1)

This says we're 100% certain p = 1
Also unreasonable!

Step 4: Normal approximation fails
Need: np̂ ≥ 10 AND n(1-p̂) ≥ 10

When p̂ = 0: np̂ = 0 < 10 ✗
When p̂ = 1: n(1-p̂) = 0 < 10 ✗

Can't use normal-based method!

Step 5: What to do instead
Use: Wilson score interval, Agresti-Coull, or exact binomial methods
These give reasonable intervals even with extreme values

Answer: When p̂ = 0 or 1, SE = 0, giving a degenerate interval. Normal approximation conditions fail. Alternative methods should be used.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: ciProportions.id,
        front: 'What is the formula for a confidence interval for a proportion?',
        back: 'p̂ ± z*√[p̂(1-p̂)/n], where p̂ = sample proportion, z* = critical value, n = sample size. Also written as p̂ ± ME where ME = z*×SE.',
        hint: 'p̂ ± z*√[p̂(1-p̂)/n]',
        isPremium: false
      },
      {
        topicId: ciProportions.id,
        front: 'What conditions must be met to construct a CI for a proportion?',
        back: 'Random sample, Normal approximation (np̂ ≥ 10 AND n(1-p̂) ≥ 10), Independence (10% condition: n ≤ 0.10N). All three required for valid interval.',
        hint: 'Random, Normal (np̂ and n(1-p̂) ≥ 10), Independent',
        isPremium: false
      },
      {
        topicId: ciProportions.id,
        front: 'What are common confidence levels and their z* values?',
        back: '90% CI: z* = 1.645. 95% CI: z* = 1.96. 99% CI: z* = 2.576. Higher confidence → larger z* → wider interval. Most common is 95%.',
        hint: '90%: 1.645, 95%: 1.96, 99%: 2.576',
        isPremium: false
      },
      {
        topicId: ciProportions.id,
        front: 'How do you find required sample size for a proportion?',
        back: 'n = (z*)²p̂(1-p̂)/ME². If no prior estimate, use p̂ = 0.5 (conservative). Always round UP. Smaller ME or higher confidence → larger n needed.',
        hint: 'n = (z*)²p̂(1-p̂)/ME², use p̂=0.5 if unknown',
        isPremium: false
      },
      {
        topicId: ciProportions.id,
        front: 'How do you correctly interpret a 95% confidence interval?',
        back: 'We are 95% confident that the true population proportion is in the interval. Means: our method captures true p 95% of times. NOT: "95% probability p is in interval" (p is fixed, not random).',
        hint: '95% confident true p is in interval',
        isPremium: false
      },
      {
        topicId: ciProportions.id,
        front: 'Why use p̂ = 0.5 when planning sample size with no prior estimate?',
        back: 'p(1-p) is maximized at p = 0.5, giving maximum variability and largest required sample size. This is conservative - guarantees ME will be no larger than desired regardless of actual p.',
        hint: 'Maximizes p(1-p), most conservative',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: ci-proportions (now has 5 problems, 6 flashcards)');

  console.log('\n🎉 Batch 4 Complete! CI topics: CLT + CI Proportions (2/5)');
  console.log('Progress: 20/34 AP Statistics topics complete (59%)');
  
  await prisma.$disconnect();
}

main();
