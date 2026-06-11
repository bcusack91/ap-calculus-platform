import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📝 Filling AP Statistics: Confidence Intervals (5 topics)...\n');

  // Topic 1: Sampling Distributions
  await prisma.topic.update({
    where: { slug: 'sampling-distributions' },
    data: {
      textContent: `# Sampling Distributions

## What is a Sampling Distribution?

**Statistic:** Number calculated from sample (e.g., sample mean $$\\bar{x}$$, sample proportion $$\\hat{p}$$)

**Sampling Distribution:** Distribution of a statistic across all possible samples of size n

**Key insight:** Statistics vary from sample to sample (sampling variability). Sampling distribution describes this variability.

## Example: Sampling Distribution of $$\\bar{x}$$

**Population:** All students, μ = 70, σ = 10

Take many samples of n = 25:
- Sample 1: $$\\bar{x}_1$$ = 72
- Sample 2: $$\\bar{x}_2$$ = 68
- Sample 3: $$\\bar{x}_3$$ = 71
- ...

Plot all sample means → **Sampling distribution of $$\\bar{x}$$**

## Properties of Sampling Distribution of $$\\bar{x}$$

**Center:**

$$\\mu_{\\bar{x}} = \\mu$$

Sample mean is unbiased estimator of population mean

**Spread:**

$$\\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}}$$

Called **standard error** (SE)

**Key:** Larger sample → smaller standard error (more precise estimates)

**Shape:**
- If population normal → sampling distribution exactly normal
- If population not normal → approximately normal if n large enough (CLT)

## Sampling Distribution of Sample Proportion

**Population proportion:** p  
**Sample proportion:** $$\\hat{p} = \\frac{\\text{count}}{n}$$

**Center:**

$$\\mu_{\\hat{p}} = p$$

**Spread:**

$$\\sigma_{\\hat{p}} = \\sqrt{\\frac{p(1-p)}{n}}$$

**Shape:** Approximately normal if np ≥ 10 and n(1-p) ≥ 10

## Example: Coin Flips

**Fair coin (p = 0.5), n = 100 flips**

**Center:** $$\\mu_{\\hat{p}}$$ = 0.5

**Spread:** $$\\sigma_{\\hat{p}} = \\sqrt{\\frac{0.5(0.5)}{100}} = \\sqrt{0.0025} = 0.05$$

**Shape:** np = 50 ≥ 10, n(1-p) = 50 ≥ 10 → approximately normal

**Interpretation:** Sample proportions typically within 0.05 of true value 0.5

## Bias vs Variability

**Bias:** Systematic over- or under-estimation  
- $$\\mu_{statistic} \\neq$$ parameter

**Variability:** Spread of sampling distribution  
- Measured by standard error

**Ideal:** Low bias AND low variability (unbiased with small SE)

**Increase n:**
- Doesn't reduce bias
- DOES reduce variability (SE decreases)

## Standard Error

**Standard Error (SE):** Standard deviation of sampling distribution

**For sample mean:** $$SE_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}}$$

**For sample proportion:** $$SE_{\\hat{p}} = \\sqrt{\\frac{p(1-p)}{n}}$$

**Key pattern:** SE ∝ 1/√n

To cut SE in half, need 4× sample size

## Using Sampling Distributions

**Find probabilities about statistics:**

**Example:** Population μ = 100, σ = 15. Sample n = 25.

P($$\\bar{x}$$ > 105) = ?

$$\\bar{x} \\sim N(100, 15/\\sqrt{25}) = N(100, 3)$$

Standardize: $$z = \\frac{105-100}{3} = 1.67$$

P(Z > 1.67) ≈ 0.0475

## Difference Between Two Means

**Two independent samples:**

$$\\mu_{\\bar{x}_1 - \\bar{x}_2} = \\mu_1 - \\mu_2$$

$$\\sigma_{\\bar{x}_1 - \\bar{x}_2} = \\sqrt{\\frac{\\sigma_1^2}{n_1} + \\frac{\\sigma_2^2}{n_2}}$$

**Shape:** Approximately normal if both samples meet conditions

## Difference Between Two Proportions

$$\\mu_{\\hat{p}_1 - \\hat{p}_2} = p_1 - p_2$$

$$\\sigma_{\\hat{p}_1 - \\hat{p}_2} = \\sqrt{\\frac{p_1(1-p_1)}{n_1} + \\frac{p_2(1-p_2)}{n_2}}$$

**Conditions:** Each sample meets np ≥ 10 and n(1-p) ≥ 10

## Simulating Sampling Distributions

**Steps:**
1. Take sample of size n from population
2. Calculate statistic
3. Repeat many times
4. Plot distribution of statistics

**Result:** Empirical approximation of theoretical sampling distribution

## Common Misconceptions

❌ Confusing population distribution with sampling distribution  
❌ Thinking larger sample reduces bias (only reduces variability)  
❌ Forgetting √n in denominator of SE  
❌ Using σ instead of σ/√n for $$\\bar{x}$$

## Quick Reference

**Sampling Distribution of $$\\bar{x}$$:**
- Center: μ
- Spread: σ/√n
- Shape: Normal (if population normal or n large)

**Sampling Distribution of $$\\hat{p}$$:**
- Center: p
- Spread: √(p(1-p)/n)
- Shape: Normal (if np ≥ 10 and n(1-p) ≥ 10)

**Remember:** Statistics vary from sample to sample. Sampling distribution describes this variability!
`
    }
  });
  console.log('✅ Filled Sampling Distributions\n');

  // Topic 2: Central Limit Theorem
  await prisma.topic.update({
    where: { slug: 'central-limit-theorem' },
    data: {
      textContent: `# Central Limit Theorem

## What is the Central Limit Theorem?

**Central Limit Theorem (CLT):** For large enough n, sampling distribution of $$\\bar{x}$$ is approximately normal, **regardless of population shape**

**This is remarkable!** Population can be skewed, uniform, bimodal, anything → sampling distribution still approximately normal

## Formal Statement

**If:**
- Take random samples of size n
- From ANY population with mean μ and standard deviation σ
- n is "sufficiently large"

**Then:** $$\\bar{x}$$ is approximately distributed as:

$$\\bar{x} \\sim N\\left(\\mu, \\frac{\\sigma}{\\sqrt{n}}\\right)$$

## How Large is "Large Enough"?

**Rule of thumb:**
- Population roughly normal → n ≥ 10 okay
- Population moderately skewed → n ≥ 30
- Population heavily skewed or has outliers → n ≥ 40+

**Key:** More skewed population → need larger n

**In practice:** n = 30 often cited as general threshold

## Why CLT Matters

**Problem:** Real populations rarely normal

**Solution:** CLT lets us use normal distribution for inference anyway (if n large enough)

**Applications:**
- Confidence intervals for means
- Hypothesis tests for means
- Control charts in quality control

**Power:** Works for ANY population distribution!

## Example: Uniform Population

**Population:** Uniform on [0, 10]
- μ = 5
- σ = 10/√12 ≈ 2.89
- Shape: Rectangular (not normal!)

**Sample n = 30:**

$$\\bar{x} \\sim N\\left(5, \\frac{2.89}{\\sqrt{30}}\\right) \\approx N(5, 0.528)$$

**Even though population uniform, $$\\bar{x}$$ approximately normal!**

## Visualizing CLT

**Population:** Right-skewed (e.g., salaries)

**Sampling distributions for different n:**
- n = 2: Still skewed
- n = 5: Less skewed
- n = 10: Nearly symmetric
- n = 30: Very close to normal

**Pattern:** As n increases, sampling distribution becomes more normal

## CLT for Proportions

**Also applies to sample proportions!**

**If:** np ≥ 10 and n(1-p) ≥ 10

**Then:** $$\\hat{p}$$ approximately normal:

$$\\hat{p} \\sim N\\left(p, \\sqrt{\\frac{p(1-p)}{n}}\\right)$$

**This is why binomial → normal for large n!**

## Using CLT in Practice

**Example:** Battery life μ = 50 hours, σ = 8 hours (unknown distribution). Sample n = 40.

P($$\\bar{x}$$ > 52) = ?

**By CLT (n = 40 ≥ 30):**

$$\\bar{x} \\sim N(50, 8/\\sqrt{40}) = N(50, 1.265)$$

$$z = \\frac{52-50}{1.265} \\approx 1.58$$

P(Z > 1.58) ≈ 0.057

## CLT vs Normal Population

**If population already normal:**
- Sampling distribution of $$\\bar{x}$$ is **exactly** normal for any n
- Don't need CLT

**If population not normal:**
- Need CLT to justify normal approximation
- Require "large enough" n

## Standard Error from CLT

**Population σ usually unknown**

**Use sample standard deviation s:**

$$SE = \\frac{s}{\\sqrt{n}}$$

**For large n, s ≈ σ, so:**

$$\\bar{x} \\sim N\\left(\\mu, \\frac{s}{\\sqrt{n}}\\right)$$

**This is basis for t-procedures!**

## Implications of CLT

**1. Large samples good:** Overcome non-normality

**2. Can make inferences:** Use normal probabilities for $$\\bar{x}$$

**3. Justifies methods:** Confidence intervals, hypothesis tests work even if population not normal

**4. Sample size planning:** Can determine n needed for desired precision

## CLT Limitations

**Doesn't apply if:**
- Sample not random
- Population infinite variance (very rare)
- n too small relative to skewness

**Doesn't fix:**
- Bias in sampling
- Non-random samples
- Measurement errors

**Remember:** CLT is about shape of sampling distribution, not about making bad samples good!

## Historical Context

**Discovered:** 18th century  
**Pierre-Simon Laplace:** Proved for binomial (1812)  
**Lindeberg-Lévy:** General version (1920s)

**One of most important theorems in statistics!**

## Sum vs Mean

**CLT applies to both:**

**Sum:** $$S = \\sum X_i$$  
$$S \\sim N(n\\mu, \\sigma\\sqrt{n})$$

**Mean:** $$\\bar{X} = S/n$$  
$$\\bar{X} \\sim N(\\mu, \\sigma/\\sqrt{n})$$

**Relationship:** $$\\bar{X} = S/n$$, so properties related

## Checking Conditions

**Before using CLT:**

1. **Random sample?** (Independence)
2. **10% condition?** (If sampling without replacement)
3. **Large enough n?** (Depends on population shape)

**If all met → Proceed with normal approximation**

## Common Mistakes

❌ Using CLT with small n from skewed population  
❌ Thinking CLT makes population normal (it doesn't!)  
❌ Forgetting to divide by √n  
❌ Applying CLT when sampling not random

## Quick Reference

**CLT:** For large n, $$\\bar{x} \\sim N(\\mu, \\sigma/\\sqrt{n})$$ regardless of population shape

**Conditions:**
- Random sample
- n ≥ 30 (general rule)
- 10% condition if without replacement

**Power:** Works for ANY population distribution!

**Remember:** CLT is the foundation for much of statistical inference. It's why we can use normal-based methods even when populations aren't normal!
`
    }
  });
  console.log('✅ Filled Central Limit Theorem\n');

  // Topic 3: Confidence Intervals for Proportions
  await prisma.topic.update({
    where: { slug: 'ci-proportions' },
    data: {
      textContent: `# Confidence Intervals for Proportions

## What is a Confidence Interval?

**Confidence Interval (CI):** Range of plausible values for population parameter

**Form:** statistic ± margin of error

**Interpretation:** We are C% confident the interval contains the true parameter

**Example:** 95% CI for p: (0.52, 0.58)  
We are 95% confident true population proportion is between 0.52 and 0.58

## One-Sample CI for Proportion

**Formula:**

$$\\hat{p} \\pm z^* \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$$

Where:
- $$\\hat{p}$$ = sample proportion
- z* = critical value (from confidence level)
- n = sample size

## Critical Values

**Common confidence levels:**

| Confidence Level | z* |
|------------------|-----|
| 90%             | 1.645 |
| 95%             | 1.96 |
| 99%             | 2.576 |

**Higher confidence → wider interval**

## Example 1: Simple CI

**Survey: 400 voters, 220 support candidate**

$$\\hat{p} = \\frac{220}{400} = 0.55$$

**95% CI:**

$$SE = \\sqrt{\\frac{0.55(0.45)}{400}} = \\sqrt{0.0006188} \\approx 0.0249$$

$$CI = 0.55 \\pm 1.96(0.0249) = 0.55 \\pm 0.049$$

$$(0.501, 0.599)$$

**Interpretation:** We are 95% confident between 50.1% and 59.9% of voters support the candidate.

## Conditions for CI

**Random:** Random sample  
**Normal:** np̂ ≥ 10 and n(1-p̂) ≥ 10  
**Independent:** n ≤ 10% of population

**Check ALL before proceeding!**

## Margin of Error

**Margin of Error (ME):**

$$ME = z^* \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$$

**Factors affecting ME:**
- Larger z* (higher confidence) → larger ME
- Larger n → smaller ME
- p̂ near 0.5 → larger ME (maximum variability)

## Sample Size for Desired ME

**To achieve margin of error m:**

$$n = \\left(\\frac{z^*}{m}\\right)^2 \\hat{p}(1-\\hat{p})$$

**Conservative approach (if no estimate):** Use p̂ = 0.5

$$n = \\left(\\frac{z^*}{m}\\right)^2 (0.25)$$

**Example:** Want ME = 0.03 with 95% confidence

$$n = \\left(\\frac{1.96}{0.03}\\right)^2 (0.25) = (65.33)^2(0.25) \\approx 1068$$

Need at least 1068 people!

## Interpreting Confidence Level

**95% confidence means:**
- If we repeated sampling many times and built 95% CI each time
- About 95% of intervals would contain true p
- About 5% would miss true p

**NOT:**
- "95% chance p is in our interval" (p is fixed!)
- "95% of data is in interval"

**Our specific interval either contains p or it doesn't** (we just don't know which)

## Increasing Confidence

**Want higher confidence (say 99% instead of 95%):**
- Use larger z* (2.576 instead of 1.96)
- Interval becomes wider
- Trade-off: More confidence but less precision

## Example 2: With Interpretation

**Survey of 500 students: 285 have jobs**

$$\\hat{p} = \\frac{285}{500} = 0.57$$

**Conditions:**
- Random: Assume random sample ✓
- Normal: 500(0.57) = 285 ≥ 10, 500(0.43) = 215 ≥ 10 ✓
- Independent: 500 < 10% of all students (assume) ✓

**90% CI:**

$$SE = \\sqrt{\\frac{0.57(0.43)}{500}} \\approx 0.0221$$

$$CI = 0.57 \\pm 1.645(0.0221) = 0.57 \\pm 0.036$$

$$(0.534, 0.606)$$

**Interpretation:** We are 90% confident that between 53.4% and 60.6% of all students have jobs.

## Common Mistakes

❌ Saying "95% of data in interval"  
❌ Saying "95% chance p in interval"  
❌ Not checking conditions  
❌ Using t* instead of z* for proportions  
❌ Rounding p̂ too early

## Two-Sample CI for Difference in Proportions

**Comparing two groups:**

$$(\\hat{p}_1 - \\hat{p}_2) \\pm z^* \\sqrt{\\frac{\\hat{p}_1(1-\\hat{p}_1)}{n_1} + \\frac{\\hat{p}_2(1-\\hat{p}_2)}{n_2}}$$

**Conditions:** Each group meets conditions separately

**Interpretation:** If interval contains 0, no significant difference

## Calculator Commands (TI-83/84)

**STAT → TESTS → A:1-PropZInt**

Enter:
- x (count of successes)
- n (sample size)
- C-Level (confidence level as decimal)

Calculate → gives interval

## Relationship to Hypothesis Testing

**If testing H₀: p = p₀ at significance level α:**

**Equivalent:** Check if (1-α)% CI contains p₀
- If p₀ in CI → fail to reject H₀
- If p₀ not in CI → reject H₀

## Quick Reference

**Formula:** $$\\hat{p} \\pm z^* \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$$

**Conditions:** Random, np̂ ≥ 10 and n(1-p̂) ≥ 10, n < 10%N

**Common z*:** 1.645 (90%), 1.96 (95%), 2.576 (99%)

**Sample size:** $$n = \\left(\\frac{z^*}{m}\\right)^2 p(1-p)$$

**Remember:** Higher confidence → wider interval. Larger sample → narrower interval. Always check conditions and interpret in context!
`
    }
  });
  console.log('✅ Filled Confidence Intervals for Proportions\n');

  // Topic 4: Confidence Intervals for Means
  await prisma.topic.update({
    where: { slug: 'ci-means' },
    data: {
      textContent: `# Confidence Intervals for Means

## Why t-Distribution?

**Problem:** Population σ usually unknown

**Solution:** Use sample standard deviation s, but this adds uncertainty

**Result:** Use t-distribution instead of normal

**t-distribution:**
- Similar to normal (symmetric, bell-shaped)
- Heavier tails (accounts for extra uncertainty from using s)
- Depends on degrees of freedom (df = n - 1)
- As df increases, approaches normal

## One-Sample t-Interval for Mean

**Formula:**

$$\\bar{x} \\pm t^* \\frac{s}{\\sqrt{n}}$$

Where:
- $$\\bar{x}$$ = sample mean
- s = sample standard deviation
- n = sample size
- t* = critical value from t-distribution with df = n - 1

## Conditions for t-Interval

**Random:** Random sample  
**Normal:** Population approximately normal OR n ≥ 30 (CLT)  
**Independent:** n < 10% of population (if sampling without replacement)

**For normality:**
- If n < 15: Data must be very close to normal (check with plot)
- If 15 ≤ n < 30: Data should be roughly symmetric, no outliers
- If n ≥ 30: Can proceed unless severe outliers or extreme skew

## Finding t* Critical Value

**Calculator:** invT(area to left, df)

**Example:** 95% CI with n = 20 (df = 19)
- Area to left = (1 + 0.95)/2 = 0.975
- invT(0.975, 19) ≈ 2.093

**Table:** Look up df and confidence level

## Example 1: Simple t-Interval

**Test scores: n = 25, $$\\bar{x}$$ = 78, s = 12**

**95% CI:**

**Conditions:**
- Random: Assume ✓
- Normal: n = 25, assume roughly normal ✓
- Independent: 25 < 10% of students ✓

**Calculate:**
- df = 25 - 1 = 24
- t* = 2.064 (from table/calculator)
- SE = 12/√25 = 2.4

$$CI = 78 \\pm 2.064(2.4) = 78 \\pm 4.95$$

$$(73.05, 82.95)$$

**Interpretation:** We are 95% confident the true mean score is between 73.05 and 82.95.

## t vs z

**Use z when:**
- Known population σ (rare!)
- Working with proportions

**Use t when:**
- Unknown σ, using sample s (almost always for means!)

**Key difference:** t has heavier tails → wider intervals (more conservative)

## Sample Size for Desired ME

**Challenge:** ME depends on s, which we don't know in advance

**Approach:**
1. Estimate s from pilot study or similar data
2. Use conservative t* (larger than final value)
3. Calculate n
4. Round up

**Formula:**

$$n = \\left(\\frac{t^* s}{m}\\right)^2$$

## Example 2: Checking Normality

**Small sample (n = 12):**
- MUST check for approximate normality
- Use dotplot, boxplot, or normal probability plot
- Look for: symmetric shape, no outliers, no severe skew

**If data skewed or has outliers with small n:** t-procedures NOT appropriate

## Two-Sample t-Interval

**Comparing two means:**

$$(\\bar{x}_1 - \\bar{x}_2) \\pm t^* \\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}$$

**df:** Use calculator (complex formula) or conservative: min(n₁-1, n₂-1)

**Conditions:** Both samples meet conditions

**Interpretation:** If interval contains 0, no significant difference

## Paired Data

**When data naturally paired:**
- Before/after on same subjects
- Twins, matched pairs

**Analyze differences:**
1. Calculate difference for each pair: d = x₁ - x₂
2. One-sample t-interval on differences

$$\\bar{d} \\pm t^* \\frac{s_d}{\\sqrt{n}}$$

Where n = number of pairs, df = n - 1

## Example 3: Paired Data

**Blood pressure before/after medication (n = 15 patients):**
- $$\\bar{d}$$ = 8.2 (average decrease)
- s_d = 5.1

**90% CI for mean decrease:**

- df = 14
- t* = 1.761
- SE = 5.1/√15 ≈ 1.317

$$CI = 8.2 \\pm 1.761(1.317) = 8.2 \\pm 2.32$$

$$(5.88, 10.52)$$

**Interpretation:** We are 90% confident medication reduces blood pressure by 5.88 to 10.52 points on average.

## Interpreting Confidence Level

**Same as for proportions:**

95% means if we repeated sampling many times, about 95% of intervals would contain true μ

**NOT:** "95% of data in interval" or "95% chance μ in interval"

## Effect of Sample Size

**Larger n:**
- Smaller SE (dividing by √n)
- More df → smaller t* (approaches z*)
- **Result:** Narrower CI (more precise)

**Trade-off:** Cost and time of collecting larger sample

## Robustness of t-Procedures

**t-procedures fairly robust** to violations of normality if:
- n reasonably large (≥ 30)
- No extreme outliers

**Less robust for:**
- Small samples with skewness
- Extreme outliers (affect both $$\\bar{x}$$ and s)

## Calculator Commands (TI-83/84)

**STAT → TESTS → 8:TInterval**

Enter:
- Data or Stats
- If Stats: $$\\bar{x}$$, s, n
- C-Level
- Calculate

**For two-sample:** 0:2-SampTInt

## Common Mistakes

❌ Using z* instead of t*  
❌ Using t* from wrong df  
❌ Not checking normality with small samples  
❌ Confusing paired with two-sample  
❌ Misinterpreting confidence level

## Quick Reference

**Formula:** $$\\bar{x} \\pm t^* \\frac{s}{\\sqrt{n}}$$ with df = n - 1

**Conditions:** Random, approximately normal (or n ≥ 30), independent

**Use t (not z)** when σ unknown, using s

**Paired data:** Analyze differences with one-sample t

**Remember:** t-distribution accounts for extra uncertainty from estimating σ with s. Always check conditions, especially normality for small samples!
`
    }
  });
  console.log('✅ Filled Confidence Intervals for Means\n');

  // Topic 5: Interpreting Confidence Intervals
  await prisma.topic.update({
    where: { slug: 'interpreting-ci' },
    data: {
      textContent: `# Interpreting Confidence Intervals

## What Does "95% Confident" Mean?

**Confidence level** describes the method, not a specific interval

**Correct interpretation:**
"If we repeated this sampling process many times and constructed a 95% CI each time, about 95% of those intervals would contain the true parameter."

**NOT:**
- "95% chance the parameter is in this interval" (parameter is fixed!)
- "95% of the data falls in this interval"
- "We are 95% sure this interval contains the parameter"

## Visualizing Confidence Level

**Imagine 100 different samples:**
- Each produces different CI
- About 95 capture true parameter (green)
- About 5 miss true parameter (red)

**Our interval is one of these** – we don't know if it's green or red!

## Example: Correct vs Incorrect

**95% CI for mean: (45, 55)**

**✓ Correct:** "We are 95% confident the true mean is between 45 and 55."

**✓ Correct:** "If we repeated sampling many times, 95% of intervals would capture the true mean."

**✗ Incorrect:** "There is a 95% probability the mean is between 45 and 55."

**✗ Incorrect:** "95% of data values are between 45 and 55."

**✗ Incorrect:** "The sample mean has a 95% chance of being in this interval."

## Components of Interpretation

**Good interpretation includes:**

1. **Confidence level:** "We are 95% confident..."
2. **Parameter (not statistic):** "...the true mean (or proportion)..."
3. **Context:** "...test score for all students..."
4. **Interval:** "...is between 73 and 82."

**Template:** "We are [C]% confident that the true [parameter in context] is between [lower bound] and [upper bound]."

## Context Matters

**Generic:** "We are 95% confident μ is between 45 and 55."

**Better:** "We are 95% confident the mean height of adult males is between 45 and 55 inches."

**Even better:** "We are 95% confident the mean height of adult males in California is between 45 and 55 inches."

**Always state parameter in context of the problem!**

## Margin of Error Interpretation

**CI = statistic ± ME**

**Interpretation of ME:** "We estimate the parameter is within [ME] of [statistic] with [C]% confidence."

**Example:** ME = 3, $$\\bar{x}$$ = 50, 95% confidence

"We estimate the true mean is within 3 of our sample mean of 50 with 95% confidence."

## Width of Interval

**Narrower interval:**
- More precise estimate
- But requires larger sample or lower confidence

**Wider interval:**
- Less precise
- But higher confidence or smaller sample

**Trade-off:** Precision vs confidence

**Factors affecting width:**
1. **Confidence level:** Higher → wider
2. **Sample size:** Larger → narrower
3. **Population variability:** More variable → wider

## Comparing Intervals

**Two non-overlapping intervals suggests difference**

**Example:**
- Group 1: (52, 58)
- Group 2: (65, 71)

No overlap → strong evidence of difference

**Two overlapping intervals:**
- May or may not be significant difference
- Need formal hypothesis test to determine

## Using CI for Decisions

**Testing H₀: μ = μ₀ at α significance level**

**Equivalent to:** Check if μ₀ is in (1-α) CI

**Example:** H₀: μ = 50, α = 0.05, 95% CI: (52, 58)

50 not in interval → Reject H₀

**But:** CI gives MORE information than test (plausible range of values)

## Two-Sided vs One-Sided

**Two-sided CI:** Interval (L, U)
- Most common
- Symmetric around estimate

**One-sided CI:** 
- Upper bound: (-∞, U)
- Lower bound: (L, ∞)
- Less common
- For directional questions

## Practical vs Statistical Significance

**Statistically significant:** Interval doesn't contain null value

**Practically significant:** Interval contains values that matter in practice

**Example:** CI for improvement: (0.5, 2.5) points on 100-point test
- Statistically significant (doesn't contain 0)
- But practically? Is 0.5-2.5 point improvement meaningful?

**Always consider both statistical AND practical significance!**

## Common Misinterpretations

**❌ "95% of the data is in the interval"**
- No! Interval is for parameter (mean/proportion), not individual values
- Prediction interval for individuals (different calculation)

**❌ "There's a 95% probability μ is in the interval"**
- No! μ is fixed (not random). Interval is random.
- Either μ is in it (probability 1) or not (probability 0)

**❌ "We are 95% confident the sample mean is in the interval"**
- No! We KNOW sample mean (it's the center of the interval!)
- Confident about population mean, not sample mean

**❌ "95% of all samples will give this interval"**
- No! Different samples give different intervals
- 95% of intervals (not samples) capture μ

## Confidence vs Probability

**Probability:** Long-run frequency (objective)
- Coin has 50% probability of heads

**Confidence:** Measure of method reliability
- Method produces correct intervals 95% of the time
- But specific interval either right or wrong

**Subtle but important distinction!**

## Reporting Confidence Intervals

**In writing:**
- State interval with confidence level
- Interpret in context
- Include units

**Example report:**
"Based on a random sample of 100 students, the 95% confidence interval for mean study time is (8.2, 10.8) hours per week. We are 95% confident that the true mean study time for all students is between 8.2 and 10.8 hours per week."

## Limitations of Confidence Intervals

**CI only valid if:**
- Conditions met (random, normal, independent)
- No bias in data collection
- No measurement errors
- Proper statistical procedure used

**CI doesn't account for:**
- Sampling bias
- Response bias
- Measurement error
- Non-random sampling

**Garbage in, garbage out!** CI from biased sample is meaningless.

## Choosing Confidence Level

**Common choices:**
- 90% (less stringent, narrower)
- 95% (standard in many fields)
- 99% (very stringent, wider)

**Higher confidence:**
- Safer (more likely to capture parameter)
- But less precise (wider interval)

**Choice depends on:**
- Consequences of being wrong
- Field conventions
- Desired precision

## Quick Reference

**Correct interpretation template:**
"We are [C]% confident that the true [parameter in context] is between [L] and [U]."

**Common mistakes to avoid:**
- Probability statements about parameter
- Statements about data/sample
- Forgetting context
- Confusing confidence with probability

**Remember:** Confidence describes the method's reliability, not probability that this specific interval is correct. Always interpret in context with proper terminology!
`
    }
  });
  console.log('✅ Filled Interpreting Confidence Intervals\n');

  console.log('\n🎉 CONFIDENCE INTERVALS COMPLETE!');
  console.log('📊 Progress: 22/34 AP Statistics topics complete (65%)');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
