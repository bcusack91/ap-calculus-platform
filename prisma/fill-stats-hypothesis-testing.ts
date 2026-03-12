import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📝 Filling AP Statistics: Hypothesis Testing (6 topics)...\n');

  // Topic 1: Hypothesis Testing Framework
  await prisma.topic.update({
    where: { slug: 'hypothesis-testing-framework' },
    data: {
      textContent: `# Hypothesis Testing Framework

## What is Hypothesis Testing?

**Hypothesis Test:** Formal procedure to decide between two competing claims about a population parameter

**Two hypotheses:**
- **Null hypothesis (H₀):** Status quo, no effect, no difference
- **Alternative hypothesis (Hₐ or H₁):** What we're trying to show

**Goal:** Determine if data provides sufficient evidence to reject H₀ in favor of Hₐ

## Setting Up Hypotheses

**H₀:** Always includes equality (=, ≤, ≥)

**Hₐ:** Can be:
- **Two-sided:** μ ≠ μ₀ (different from)
- **Right-sided:** μ > μ₀ (greater than)
- **Left-sided:** μ < μ₀ (less than)

**Examples:**

**Claim: Mean height > 68 inches**
- H₀: μ = 68 or μ ≤ 68
- Hₐ: μ > 68

**Claim: Proportion ≠ 0.5**
- H₀: p = 0.5
- Hₐ: p ≠ 0.5

## The Four-Step Process

**Step 1: STATE**
- Parameter of interest
- Hypotheses (H₀ and Hₐ)
- Significance level α

**Step 2: PLAN**
- Choose appropriate test
- Check conditions

**Step 3: DO**
- Calculate test statistic
- Find P-value

**Step 4: CONCLUDE**
- Compare P-value to α
- State conclusion in context

## Test Statistic

**General form:**

$$\\text{Test statistic} = \\frac{\\text{statistic} - \\text{parameter}}{\\text{standard error}}$$

**For means (t-test):**

$$t = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}$$

**For proportions (z-test):**

$$z = \\frac{\\hat{p} - p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n}}}$$

**Measures:** How many standard errors the statistic is from hypothesized parameter

## P-Value

**P-value:** Probability of getting results as extreme or more extreme than observed, **assuming H₀ is true**

**Interpretation:**
- Small P-value → data inconsistent with H₀ → evidence against H₀
- Large P-value → data consistent with H₀ → insufficient evidence against H₀

**Finding P-value:**
- **Two-sided:** P(|test statistic| ≥ observed)
- **Right-sided:** P(test statistic ≥ observed)
- **Left-sided:** P(test statistic ≤ observed)

## Significance Level (α)

**α:** Threshold for rejecting H₀

**Common values:** 0.05, 0.01, 0.10

**Decision rule:**
- If P-value ≤ α → Reject H₀
- If P-value > α → Fail to reject H₀

**Note:** "Fail to reject" ≠ "accept" H₀ (lack of evidence against ≠ evidence for)

## Example: Complete Test

**Claim:** Mean score exceeds 75. Sample: n = 30, $$\\bar{x}$$ = 78, s = 10

**STATE:**
- Parameter: μ = true mean score
- H₀: μ = 75
- Hₐ: μ > 75
- α = 0.05

**PLAN:**
- One-sample t-test
- Conditions: Random ✓, n = 30 ≥ 30 ✓, n < 10%N ✓

**DO:**
$$t = \\frac{78 - 75}{10/\\sqrt{30}} = \\frac{3}{1.826} \\approx 1.64$$

df = 29, P-value ≈ 0.056 (from tcdf)

**CONCLUDE:**
P-value = 0.056 > 0.05, fail to reject H₀. Insufficient evidence that mean exceeds 75.

## One-Sided vs Two-Sided Tests

**Two-sided:** Looking for any difference
- Hₐ: μ ≠ μ₀
- P-value = 2 × P(|t| ≥ observed)

**One-sided:** Looking for specific direction
- Hₐ: μ > μ₀ or μ < μ₀
- P-value = P(t ≥ observed) or P(t ≤ observed)

**Choose before seeing data!** One-sided only if direction specified in advance

## Statistical Significance

**Statistically significant:** P-value ≤ α

**Interpretation:** Result unlikely to occur by chance alone if H₀ true

**NOT the same as practically significant!**
- Can have statistically significant but tiny effect
- Large sample can detect trivial differences

## Relationship to Confidence Intervals

**For two-sided test at α = 0.05:**

**Equivalent to checking if (1-α) CI contains H₀ value**
- If μ₀ in 95% CI → P-value > 0.05
- If μ₀ not in 95% CI → P-value ≤ 0.05

**CI gives more information:** Range of plausible values, not just yes/no

## Common Misconceptions

**❌ "P-value is probability H₀ is true"**
- No! It's P(data | H₀), not P(H₀ | data)

**❌ "Fail to reject H₀ means H₀ is true"**
- No! Just insufficient evidence against it

**❌ "Significant means important"**
- No! Statistically significant ≠ practically important

**❌ "P-value is probability of error"**
- No! That's α (if we reject H₀)

## Writing Conclusions

**✓ Good:** "We have sufficient evidence to conclude the mean exceeds 75."

**✓ Good:** "There is insufficient evidence that the proportion differs from 0.5."

**✗ Bad:** "We prove the mean is 75."

**✗ Bad:** "We accept H₀."

**✗ Bad:** "The probability H₀ is true is 0.056."

## Quick Reference

**Hypotheses:**
- H₀: includes =
- Hₐ: what we're testing for

**Test statistic:** (statistic - parameter) / SE

**P-value:** P(as extreme | H₀ true)

**Decision:**
- P ≤ α: Reject H₀
- P > α: Fail to reject H₀

**Remember:** Hypothesis testing is about evidence, not proof. Small P-value = strong evidence against H₀, but never proves Hₐ!
`
    }
  });
  console.log('✅ Filled Hypothesis Testing Framework\n');

  // Topic 2: Type I and Type II Errors
  await prisma.topic.update({
    where: { slug: 'type-errors' },
    data: {
      textContent: `# Type I and Type II Errors

## The Four Possible Outcomes

| Decision \ Reality | H₀ True | H₀ False |
|-------------------|---------|----------|
| Fail to reject H₀ | ✓ Correct | **Type II Error** |
| Reject H₀ | **Type I Error** | ✓ Correct |

**Type I Error:** Reject H₀ when it's actually true (false positive)

**Type II Error:** Fail to reject H₀ when it's actually false (false negative)

## Type I Error (α)

**Definition:** Rejecting true null hypothesis

**Probability:** α (significance level)

**Example:** Medical test
- H₀: Patient healthy
- Type I: Diagnose disease when patient is healthy

**Consequences:** False alarm, unnecessary treatment, wasted resources

**Control:** Set α before testing (0.05, 0.01, etc.)

## Type II Error (β)

**Definition:** Failing to reject false null hypothesis

**Probability:** β (depends on true parameter value, sample size, α)

**Example:** Medical test
- H₀: Patient healthy
- Type II: Miss disease in sick patient

**Consequences:** Miss real effect, fail to treat, potential harm

**Control:** Increase sample size, increase α (trade-off!)

## Power

**Power:** Probability of correctly rejecting false H₀

$$\\text{Power} = 1 - \\beta$$

**Higher power = better test** (more likely to detect real effect)

**Factors increasing power:**
1. **Larger sample size (n)**
2. **Larger effect size** (further from H₀)
3. **Less variability** (smaller σ)
4. **Higher α** (but increases Type I risk)

## Example: Coin Testing

**Test if coin is fair:**
- H₀: p = 0.5 (fair)
- Hₐ: p ≠ 0.5 (biased)
- Flip 20 times, α = 0.05

**Type I Error:**
- Coin actually fair (p = 0.5)
- Get unusual result (like 15 heads)
- Reject H₀ (conclude biased)
- **Error:** Called fair coin biased

**Type II Error:**
- Coin actually biased (say p = 0.7)
- Get result that looks reasonable for fair coin (like 11 heads)
- Fail to reject H₀
- **Error:** Failed to detect biased coin

## Calculating Type I Error Probability

**Type I Error probability = α** (by design)

**Example:** If α = 0.05, P(Type I Error) = 0.05

**Interpretation:** 5% of the time we reject H₀, H₀ is actually true

## Calculating Power (Advanced)

**Requires:**
- Specific alternative value
- Sample size
- Variability
- α

**Example:** Test H₀: μ = 100 vs Hₐ: μ > 100
- α = 0.05, n = 25, σ = 15
- True μ = 106

**Power calculation:**
1. Find critical value for rejection
2. Find probability of exceeding it when μ = 106
3. This is the power

**Typically use software for exact power calculations**

## Trade-offs

**Decreasing α (stricter):**
- ↓ Type I Error risk
- ↑ Type II Error risk
- ↓ Power

**Increasing α:**
- ↑ Type I Error risk
- ↓ Type II Error risk
- ↑ Power

**Can't minimize both simultaneously with fixed n!**

**Solution:** Increase n (decreases both error types)

## Choosing α

**Common practice:** α = 0.05

**More conservative (α = 0.01):** When Type I Error very costly
- Example: Approving new drug (don't want false positive)

**Less conservative (α = 0.10):** When Type II Error very costly
- Example: Screening test (don't want to miss cases)

**Balance:** Consider consequences of each error type

## Real-World Examples

**Criminal Trial:**
- H₀: Defendant innocent
- Type I: Convict innocent person (false conviction)
- Type II: Acquit guilty person (false acquittal)
- System prioritizes avoiding Type I (innocent until proven guilty)

**Medical Screening:**
- H₀: Patient disease-free
- Type I: False positive (unnecessary worry, follow-up tests)
- Type II: False negative (miss disease, delayed treatment)
- Balance depends on disease severity

**Quality Control:**
- H₀: Process working properly
- Type I: Stop working process (wasted time, money)
- Type II: Miss defective process (bad products shipped)

## Relationship Between Errors

**For fixed n:**
- Lowering α → higher β (inverse relationship)
- Can't have both low α and low β

**Increasing n:**
- Can lower both α and β
- Only way to improve both

**Increasing effect size:**
- β decreases (easier to detect large effects)
- α unchanged (still set by us)

## Power Analysis for Sample Size

**Before study:** Determine n needed for desired power

**Typical goal:** Power = 0.80 (80% chance of detecting effect)

**Requires specifying:**
- Minimum important effect size
- Desired α
- Estimated variability
- Desired power

**Software:** G*Power, R, online calculators

## Common Misconceptions

**❌ "P-value is probability of Type I Error"**
- No! α is P(Type I Error)
- P-value is P(data | H₀)

**❌ "Can eliminate both error types"**
- No! Trade-off exists (for fixed n)

**❌ "Type II Error is 1 - α"**
- No! That's only if specific alternative value is exactly on boundary

**❌ "High power means H₀ is false"**
- No! Power is property of test, not evidence about H₀

## Practical Advice

**Before study:**
1. Consider consequences of each error type
2. Choose α appropriately
3. Do power analysis to determine n

**After study:**
1. Report P-value (not just "significant" or "not")
2. Consider practical significance, not just statistical
3. Recognize limitations (Type II error possible if fail to reject)

## Quick Reference

**Type I Error (α):**
- Reject true H₀
- P(Type I) = α
- False positive

**Type II Error (β):**
- Fail to reject false H₀
- P(Type II) = β
- False negative

**Power = 1 - β:**
- Probability of detecting real effect
- Increase with: larger n, larger effect, smaller σ, larger α

**Trade-off:**
- Can't minimize both errors with fixed n
- Increase n to reduce both

**Remember:** All hypothesis tests risk errors. Understanding and balancing these risks is key to good statistical practice!
`
    }
  });
  console.log('✅ Filled Type I and Type II Errors\n');

  // Topic 3: Tests for Proportions
  await prisma.topic.update({
    where: { slug: 'tests-proportions' },
    data: {
      textContent: `# Hypothesis Tests for Proportions

## One-Sample z-Test for Proportion

**Test:** Does sample provide evidence that population proportion differs from claimed value?

**Hypotheses:**
- H₀: p = p₀
- Hₐ: p ≠ p₀ (or p > p₀ or p < p₀)

**Conditions:**
- Random sample
- np₀ ≥ 10 and n(1-p₀) ≥ 10 (use p₀, not p̂!)
- n < 10% of population

## Test Statistic

$$z = \\frac{\\hat{p} - p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n}}}$$

**Note:** Use p₀ (null value) in SE, not p̂

**Under H₀:** z follows standard normal distribution

## P-Value Calculation

**Two-sided (Hₐ: p ≠ p₀):**
P-value = 2 × P(Z ≥ |z|)

**Right-sided (Hₐ: p > p₀):**
P-value = P(Z ≥ z)

**Left-sided (Hₐ: p < p₀):**
P-value = P(Z ≤ z)

**Calculator:** normalcdf

## Example 1: Two-Sided Test

**Claim:** Coin is fair. Flip 100 times, get 58 heads. Test at α = 0.05.

**STATE:**
- Parameter: p = true proportion of heads
- H₀: p = 0.5
- Hₐ: p ≠ 0.5
- α = 0.05

**PLAN:**
- One-sample z-test for proportion
- Random: Assume ✓
- Normal: 100(0.5) = 50 ≥ 10, 100(0.5) = 50 ≥ 10 ✓
- Independent: 100 < all possible flips ✓

**DO:**

$$\\hat{p} = \\frac{58}{100} = 0.58$$

$$z = \\frac{0.58 - 0.5}{\\sqrt{\\frac{0.5(0.5)}{100}}} = \\frac{0.08}{0.05} = 1.6$$

P-value = 2 × P(Z ≥ 1.6) = 2(0.0548) ≈ 0.1096

**CONCLUDE:**
P-value = 0.1096 > 0.05, fail to reject H₀. Insufficient evidence coin is unfair.

## Example 2: One-Sided Test

**Company claims > 80% customer satisfaction. Survey 200, find 168 satisfied.**

**STATE:**
- p = true proportion satisfied
- H₀: p = 0.8
- Hₐ: p > 0.8
- α = 0.05

**PLAN:**
- One-sample z-test for proportion
- Conditions: ✓ (check all three)

**DO:**

$$\\hat{p} = \\frac{168}{200} = 0.84$$

$$z = \\frac{0.84 - 0.8}{\\sqrt{\\frac{0.8(0.2)}{200}}} = \\frac{0.04}{0.0283} \\approx 1.41$$

P-value = P(Z ≥ 1.41) ≈ 0.079

**CONCLUDE:**
P-value = 0.079 > 0.05, fail to reject H₀. Insufficient evidence satisfaction exceeds 80%.

## Two-Sample z-Test for Proportions

**Compare two proportions:**

**Hypotheses:**
- H₀: p₁ = p₂ (or p₁ - p₂ = 0)
- Hₐ: p₁ ≠ p₂ (or p₁ > p₂ or p₁ < p₂)

**Test Statistic:**

$$z = \\frac{(\\hat{p}_1 - \\hat{p}_2) - 0}{\\sqrt{\\hat{p}_c(1-\\hat{p}_c)\\left(\\frac{1}{n_1} + \\frac{1}{n_2}\\right)}}$$

Where **pooled proportion:**

$$\\hat{p}_c = \\frac{x_1 + x_2}{n_1 + n_2}$$

**Key:** Pool data under assumption p₁ = p₂ (H₀)

## Conditions for Two-Sample Test

**Both samples:**
- Random/independent
- n₁p̂c ≥ 10, n₁(1-p̂c) ≥ 10
- n₂p̂c ≥ 10, n₂(1-p̂c) ≥ 10
- n₁ < 10%N₁, n₂ < 10%N₂

## Example 3: Two-Sample Test

**Treatment vs Placebo:**
- Treatment: 45/100 improved
- Placebo: 30/100 improved

**STATE:**
- p₁ = proportion improved with treatment
- p₂ = proportion improved with placebo
- H₀: p₁ = p₂
- Hₐ: p₁ > p₂
- α = 0.05

**PLAN:**
- Two-sample z-test
- Conditions: ✓

**DO:**

$$\\hat{p}_1 = 0.45, \\quad \\hat{p}_2 = 0.30$$

$$\\hat{p}_c = \\frac{45 + 30}{100 + 100} = \\frac{75}{200} = 0.375$$

$$z = \\frac{0.45 - 0.30}{\\sqrt{0.375(0.625)(\\frac{1}{100} + \\frac{1}{100})}} = \\frac{0.15}{\\sqrt{0.0047}} \\approx 2.19$$

P-value = P(Z ≥ 2.19) ≈ 0.014

**CONCLUDE:**
P-value = 0.014 < 0.05, reject H₀. Sufficient evidence treatment proportion exceeds placebo.

## Calculator Commands (TI-83/84)

**One-sample:**
STAT → TESTS → 5:1-PropZTest
- p₀, x, n, direction
- Calculate

**Two-sample:**
STAT → TESTS → 6:2-PropZTest
- x₁, n₁, x₂, n₂, direction
- Calculate

## Common Mistakes

❌ Using p̂ instead of p₀ in SE for one-sample  
❌ Not pooling for two-sample test  
❌ Checking conditions with p̂ instead of p₀  
❌ Wrong P-value for one-sided vs two-sided  
❌ Forgetting to check conditions

## When to Use

**One-sample:** Comparing proportion to claimed value

**Two-sample:** Comparing two independent groups

**Paired:** If data paired, analyze differences (not proportions)

## Quick Reference

**One-sample:**
- Test statistic: $$z = \\frac{\\hat{p} - p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n}}}$$
- Use p₀ in SE

**Two-sample:**
- Test statistic uses pooled p̂c
- Pool assuming H₀: p₁ = p₂ is true

**Conditions:** Random, normal (np ≥ 10, n(1-p) ≥ 10), independent

**Remember:** For proportions, use z-test (not t). Check conditions with null hypothesis values!
`
    }
  });
  console.log('✅ Filled Tests for Proportions\n');

  // Topic 4: Tests for Means
  await prisma.topic.update({
    where: { slug: 'tests-means-stats' },
    data: {
      textContent: `# Hypothesis Tests for Means

## One-Sample t-Test

**Test:** Does sample provide evidence that population mean differs from claimed value?

**Hypotheses:**
- H₀: μ = μ₀
- Hₐ: μ ≠ μ₀ (or μ > μ₀ or μ < μ₀)

**Conditions:**
- Random sample
- Population approximately normal OR n ≥ 30 (CLT)
- n < 10% of population

**Test Statistic:**

$$t = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}$$

**df = n - 1**

## P-Value for t-Test

**Use t-distribution with df = n - 1**

**Two-sided:** P(|t| ≥ observed)  
**Right-sided:** P(t ≥ observed)  
**Left-sided:** P(t ≤ observed)

**Calculator:** tcdf

## Example 1: One-Sample t-Test

**Company claims mean wait time is 5 minutes. Sample: n = 25, $$\\bar{x}$$ = 5.8, s = 1.5. Test at α = 0.05.**

**STATE:**
- μ = true mean wait time
- H₀: μ = 5
- Hₐ: μ ≠ 5
- α = 0.05

**PLAN:**
- One-sample t-test
- Random: Assume ✓
- Normal: n = 25, assume roughly normal ✓
- Independent: 25 < 10% of all customers ✓

**DO:**

$$t = \\frac{5.8 - 5}{1.5/\\sqrt{25}} = \\frac{0.8}{0.3} \\approx 2.67$$

df = 24

P-value = 2 × P(t ≥ 2.67) ≈ 2(0.0067) ≈ 0.013

**CONCLUDE:**
P-value = 0.013 < 0.05, reject H₀. Sufficient evidence mean wait time differs from 5 minutes.

## Two-Sample t-Test

**Compare two independent groups:**

**Hypotheses:**
- H₀: μ₁ = μ₂ (or μ₁ - μ₂ = 0)
- Hₐ: μ₁ ≠ μ₂ (or μ₁ > μ₂ or μ₁ < μ₂)

**Test Statistic:**

$$t = \\frac{(\\bar{x}_1 - \\bar{x}_2) - 0}{\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}}$$

**df:** Use calculator (Welch's approximation) or conservative min(n₁-1, n₂-1)

**Note:** Do NOT pool (unlike proportions)

## Conditions for Two-Sample t-Test

**Both groups:**
- Random/independent samples
- Each approximately normal OR both n ≥ 30
- Each n < 10% of population

## Example 2: Two-Sample t-Test

**Compare new vs old teaching method:**
- New: n₁ = 30, $$\\bar{x}_1$$ = 85, s₁ = 8
- Old: n₂ = 28, $$\\bar{x}_2$$ = 80, s₂ = 10

**STATE:**
- μ₁ = mean score with new method
- μ₂ = mean score with old method
- H₀: μ₁ = μ₂
- Hₐ: μ₁ > μ₂
- α = 0.05

**PLAN:**
- Two-sample t-test
- Conditions: Both n ≥ 30, random, independent ✓

**DO:**

$$t = \\frac{85 - 80}{\\sqrt{\\frac{64}{30} + \\frac{100}{28}}} = \\frac{5}{\\sqrt{2.13 + 3.57}} = \\frac{5}{2.39} \\approx 2.09$$

df ≈ 50 (calculator gives exact)

P-value = P(t ≥ 2.09) ≈ 0.021

**CONCLUDE:**
P-value = 0.021 < 0.05, reject H₀. Sufficient evidence new method produces higher scores.

## t vs z

**Use t-test when:**
- Population σ unknown (almost always!)
- Using sample s

**Use z-test when:**
- Population σ known (rare)
- Proportions (different formula)

**For large n:** t ≈ z (distributions nearly identical)

## Checking Normality

**Small samples (n < 15):**
- Data must be close to normal
- Check with dotplot, boxplot, normal probability plot
- No outliers, roughly symmetric

**Medium samples (15 ≤ n < 30):**
- Can tolerate slight skew
- No extreme outliers

**Large samples (n ≥ 30):**
- CLT applies
- Can proceed unless severe outliers/skew

## Robustness

**t-procedures fairly robust** to normality if:
- n reasonably large
- No extreme outliers
- Not severely skewed

**Less robust with:**
- Very small n
- Extreme outliers (affect $$\\bar{x}$$ and s)

## One-Sided vs Two-Sided

**Choose before seeing data!**

**Two-sided:** Looking for any difference  
**One-sided:** Specific direction predicted

**One-sided has more power** (for that direction) but:
- Can't detect effect in other direction
- Generally less conservative

## Calculator Commands (TI-83/84)

**One-sample:**
STAT → TESTS → 2:T-Test
- μ₀, $$\\bar{x}$$, s, n, direction
- Calculate

**Two-sample:**
STAT → TESTS → 4:2-SampTTest
- $$\\bar{x}_1$$, s₁, n₁, $$\\bar{x}_2$$, s₂, n₂
- Pooled: No
- Calculate

## Relationship to CI

**For two-sided test at α:**

**Equivalent:** (1-α) CI contains μ₀?
- If yes → fail to reject
- If no → reject

**CI more informative:** Shows range of plausible values

## Common Mistakes

❌ Using z when should use t  
❌ Pooling variances in two-sample t-test  
❌ Not checking normality with small samples  
❌ Confusing one-sample with paired  
❌ Using wrong df

## Practical Significance

**Statistical significance ≠ practical importance**

**Example:** Large sample (n = 10,000) finds mean = 100.2 vs claimed 100
- Might be statistically significant
- But is 0.2 difference practically important?

**Always consider:**
- Effect size (magnitude of difference)
- Context (what matters in practice)
- Cost/benefit

## Quick Reference

**One-sample:**
$$t = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}$$, df = n - 1

**Two-sample:**
$$t = \\frac{\\bar{x}_1 - \\bar{x}_2}{\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}}$$

**Conditions:** Random, approximately normal (or n ≥ 30), independent

**Use t (not z)** when σ unknown

**Remember:** t-tests are workhorses of statistics. Check conditions, especially normality for small samples. Use calculator for exact P-values and df!
`
    }
  });
  console.log('✅ Filled Tests for Means\n');

  // Topic 5: Paired Data
  await prisma.topic.update({
    where: { slug: 'paired-data' },
    data: {
      textContent: `# Paired Data and Matched Pairs

## What is Paired Data?

**Paired data:** Two measurements on same subject or matched subjects

**Examples:**
- Before/after measurements on same people
- Twins (one gets treatment A, other gets treatment B)
- Matched subjects (similar age, gender, etc.)
- Same subjects under two conditions

**Key:** Natural pairing creates dependence

## Why Pair?

**Reduces variability** by controlling for subject-to-subject differences

**Example:** Blood pressure
- People naturally have different BP
- Before/after on same person: eliminates person-to-person variation
- More sensitive to treatment effect

**Pairing is powerful!** Can detect smaller effects than two independent samples

## Paired vs Two-Sample

**Paired:**
- Same subjects (or matched pairs)
- Analyze differences
- Use one-sample t-test on differences

**Two-sample:**
- Different subjects in each group
- Independent samples
- Use two-sample t-test

**MUST identify which before analyzing!**

## Paired t-Test Procedure

**1. Calculate differences:**
d = measurement₁ - measurement₂ for each pair

**2. Hypotheses about mean difference:**
- H₀: μ_d = 0 (no mean difference)
- Hₐ: μ_d ≠ 0 (or μ_d > 0 or μ_d < 0)

**3. Use one-sample t-test on differences:**

$$t = \\frac{\\bar{d} - 0}{s_d/\\sqrt{n}}$$

Where:
- $$\\bar{d}$$ = mean of differences
- s_d = standard deviation of differences
- n = number of pairs (not total observations!)
- df = n - 1

## Conditions for Paired t-Test

- **Random:** Pairs randomly selected
- **Normal:** Differences approximately normal OR n ≥ 30
- **Independent:** Pairs independent of each other

**Note:** Measurements within pair are dependent (that's the point!), but pairs themselves must be independent

## Example 1: Before/After

**Blood pressure before and after medication (10 patients):**

| Patient | Before | After | Difference (Before - After) |
|---------|--------|-------|---------------------------|
| 1       | 145    | 138   | 7                         |
| 2       | 152    | 145   | 7                         |
| ...     | ...    | ...   | ...                       |

$$\\bar{d} = 8.5$$, s_d = 4.2, n = 10

**STATE:**
- μ_d = true mean reduction in BP
- H₀: μ_d = 0
- Hₐ: μ_d > 0
- α = 0.05

**PLAN:**
- Paired t-test
- Random: Assume ✓
- Normal: n = 10, check plot of differences (assume ok) ✓
- Independent: Patients independent ✓

**DO:**

$$t = \\frac{8.5 - 0}{4.2/\\sqrt{10}} = \\frac{8.5}{1.33} \\approx 6.39$$

df = 9

P-value = P(t ≥ 6.39) < 0.001

**CONCLUDE:**
P-value < 0.05, reject H₀. Medication significantly reduces blood pressure.

## Example 2: Matched Pairs

**Twins study - Math scores (twin₁ gets tutoring, twin₂ doesn't):**

n = 15 twin pairs  
$$\\bar{d}$$ = 5.2 (tutored - control)  
s_d = 6.8

**Test if tutoring helps:**

**STATE:**
- μ_d = true mean difference (tutored - control)
- H₀: μ_d = 0
- Hₐ: μ_d > 0
- α = 0.05

**DO:**

$$t = \\frac{5.2 - 0}{6.8/\\sqrt{15}} = \\frac{5.2}{1.76} \\approx 2.95$$

df = 14

P-value ≈ 0.005

**CONCLUDE:**
Reject H₀. Significant evidence tutoring increases scores.

## Direction of Differences

**Consistent subtraction order matters!**

**Common choices:**
- Before - After (positive means decrease)
- After - Before (positive means increase)
- Treatment - Control (positive means treatment better)

**Be consistent and interpret accordingly!**

## Advantages of Pairing

**1. Controls for confounding variables**
- Each subject is own control
- Eliminates between-subject variation

**2. Increases power**
- Reduced variability → easier to detect effects
- Can use smaller sample size

**3. More efficient**
- Need fewer total subjects than two independent samples

## When NOT to Pair

**Don't pair if:**
- No natural pairing exists
- Pairing is artificial or forced
- Want to generalize to unpaired populations

**Pairing must be meaningful and appropriate!**

## Paired CI

**Confidence interval for mean difference:**

$$\\bar{d} \\pm t^* \\frac{s_d}{\\sqrt{n}}$$

**Interpretation:** Range of plausible values for true mean difference

**Example:** Earlier BP study

90% CI: $$8.5 \\pm 1.833(1.33) = 8.5 \\pm 2.44 = (6.06, 10.94)$$

We're 90% confident mean BP reduction is between 6.06 and 10.94 points.

## Checking Normality of Differences

**Important:** Check normality of DIFFERENCES, not original data

**Methods:**
- Dotplot of differences
- Boxplot of differences
- Normal probability plot of differences

**For small n:** Must be close to normal  
**For large n (≥30):** CLT applies to differences

## Common Mistakes

❌ Using two-sample t-test on paired data (loses power!)  
❌ Using paired test on independent samples  
❌ Counting total observations instead of pairs for df  
❌ Not checking normality of differences  
❌ Inconsistent subtraction order

## Identifying Paired Data

**Ask yourself:**
1. Are there two measurements per subject?
2. Is there natural pairing/matching?
3. Would it make sense to calculate differences?

**If yes → Paired data**  
**If no → Independent samples**

## Calculator Commands (TI-83/84)

**Method 1: Enter differences directly**
- Calculate differences, enter in list
- STAT → TESTS → 2:T-Test
- Use difference list

**Method 2: Use paired test**
- Enter both measurements in separate lists
- STAT → TESTS → 2:T-Test
- Specify list₁ - list₂

## Real-World Applications

**Medical:** Before/after treatment  
**Education:** Pre-test/post-test  
**Psychology:** Same subjects under different conditions  
**Agriculture:** Adjacent plots (control for soil variation)  
**Marketing:** Same consumers rating two products

## Quick Reference

**Key idea:** Analyze differences, not separate groups

**Test statistic:** $$t = \\frac{\\bar{d}}{s_d/\\sqrt{n}}$$, df = n - 1

**n = number of pairs** (not total measurements)

**Conditions:** Random pairs, differences normal (or n ≥ 30), pairs independent

**Remember:** Pairing is powerful! Use it when available. Analyze differences with one-sample t-test. Don't use two-sample test on paired data!
`
    }
  });
  console.log('✅ Filled Paired Data\n');

  // Topic 6: Chi-Square Tests
  await prisma.topic.update({
    where: { slug: 'chi-square-tests' },
    data: {
      textContent: `# Chi-Square Tests

## Chi-Square Goodness of Fit Test

**Purpose:** Test if observed frequencies match expected distribution

**Example:** Die rolled 60 times. Are outcomes equally likely?

**Hypotheses:**
- H₀: Distribution matches expected (die is fair)
- Hₐ: Distribution doesn't match expected (die is biased)

**Test Statistic:**

$$\\chi^2 = \\sum \\frac{(O - E)^2}{E}$$

Where:
- O = observed count
- E = expected count
- Sum over all categories

**df = number of categories - 1**

## Example 1: Goodness of Fit

**Roll die 60 times:**

| Outcome | 1  | 2  | 3  | 4  | 5  | 6  |
|---------|----|----|----|----|----|----|
| Observed| 8  | 12 | 9  | 11 | 15 | 5  |
| Expected| 10 | 10 | 10 | 10 | 10 | 10 |

**STATE:**
- H₀: Die is fair (all outcomes equally likely)
- Hₐ: Die is not fair
- α = 0.05

**PLAN:**
- Chi-square goodness of fit
- Conditions: All expected ≥ 5 ✓

**DO:**

$$\\chi^2 = \\frac{(8-10)^2}{10} + \\frac{(12-10)^2}{10} + ... + \\frac{(5-10)^2}{10}$$

$$= \\frac{4}{10} + \\frac{4}{10} + \\frac{1}{10} + \\frac{1}{10} + \\frac{25}{10} + \\frac{25}{10} = 6.0$$

df = 6 - 1 = 5

P-value = P(χ² ≥ 6.0) ≈ 0.306 (from chi2cdf)

**CONCLUDE:**
P-value = 0.306 > 0.05, fail to reject H₀. No evidence die is biased.

## Conditions for Goodness of Fit

1. **Random sample**
2. **All expected counts ≥ 5**
3. **Independent observations**

**If expected < 5:** Combine categories if makes sense

## Chi-Square Distribution

**Properties:**
- Always positive (squared differences)
- Right-skewed
- Shape depends on df
- As df increases, approaches normal

**P-value:** Always upper tail (larger χ² = worse fit)

## Chi-Square Test of Independence

**Purpose:** Test if two categorical variables are independent

**Setup:** Two-way table (contingency table)

**Hypotheses:**
- H₀: Variables are independent
- Hₐ: Variables are associated (dependent)

## Expected Counts for Independence

**For each cell:**

$$E = \\frac{(\\text{row total})(\\text{column total})}{\\text{grand total}}$$

**If independent:** Expected count = what we'd expect by chance alone

## Example 2: Test of Independence

**Relationship between gender and favorite sport (200 students):**

|        | Baseball | Basketball | Soccer | Total |
|--------|----------|------------|--------|-------|
| Male   | 30       | 40         | 30     | 100   |
| Female | 20       | 30         | 50     | 100   |
| Total  | 50       | 70         | 80     | 200   |

**Expected for Male/Baseball:**

$$E = \\frac{100 \\times 50}{200} = 25$$

**All expected counts:**

|        | Baseball | Basketball | Soccer |
|--------|----------|------------|--------|
| Male   | 25       | 35         | 40     |
| Female | 25       | 35         | 40     |

**STATE:**
- H₀: Gender and sport preference are independent
- Hₐ: Gender and sport preference are associated
- α = 0.05

**DO:**

$$\\chi^2 = \\frac{(30-25)^2}{25} + \\frac{(40-35)^2}{35} + ... + \\frac{(50-40)^2}{40}$$

$$= 1 + 0.714 + 2.5 + 1 + 0.714 + 2.5 = 8.43$$

df = (rows - 1)(columns - 1) = (2-1)(3-1) = 2

P-value = P(χ² ≥ 8.43) ≈ 0.015

**CONCLUDE:**
P-value = 0.015 < 0.05, reject H₀. Significant association between gender and sport preference.

## Degrees of Freedom

**Goodness of fit:** df = k - 1 (k = number of categories)

**Test of independence:** df = (r - 1)(c - 1)
- r = number of rows
- c = number of columns

## Conditions for Test of Independence

1. **Random sample**
2. **All expected counts ≥ 5**
3. **Independent observations**

**Check expected counts, not observed!**

## Chi-Square vs Other Tests

**Use chi-square when:**
- Categorical variables (not quantitative)
- Comparing distributions
- Testing independence

**Use t-test when:**
- Quantitative variable
- Comparing means

**Use z-test for proportions when:**
- Single proportion or comparing two proportions
- Binary outcome (special case of categorical)

## Interpreting Results

**Large χ²:**
- Observed far from expected
- Evidence against H₀

**Small χ²:**
- Observed close to expected
- Consistent with H₀

**Always use P-value for decision!**

## Calculator Commands (TI-83/84)

**Goodness of fit:**
- Enter observed in list
- STAT → TESTS → D:χ²GOF-Test
- Enter expected counts

**Test of independence:**
- Enter observed in matrix
- STAT → TESTS → C:χ²-Test
- Calculator computes expected

**P-value:** chi2cdf(χ², 99999, df)

## Relationship Between Variables

**If reject H₀ in test of independence:**
- Variables are associated
- But doesn't tell us HOW they're related
- Examine cell contributions and patterns

**Cell contribution:** (O - E)²/E for that cell
- Large contribution → cell differs most from expected

## Chi-Square for Homogeneity

**Test if distribution is same across multiple populations**

**Setup:** Same as independence (two-way table)  
**Difference:** Conceptual (comparing populations vs testing independence)  
**Calculation:** Identical to test of independence

**Example:** Do three schools have same distribution of favorite colors?

## Common Mistakes

❌ Using chi-square for quantitative data  
❌ Checking observed instead of expected counts  
❌ Wrong df formula  
❌ Two-tail P-value (always use upper tail!)  
❌ Confusing goodness of fit with independence

## Quick Reference

**Goodness of Fit:**
- Tests if observed matches expected distribution
- df = k - 1

**Test of Independence:**
- Tests if two categorical variables independent
- df = (r - 1)(c - 1)
- Expected: (row total × column total) / grand total

**Test Statistic:** $$\\chi^2 = \\sum \\frac{(O - E)^2}{E}$$

**Conditions:** Random, all expected ≥ 5, independent observations

**Remember:** Chi-square tests work with counts/frequencies of categorical variables. Large χ² = poor fit or strong association. Always check expected counts!
`
    }
  });
  console.log('✅ Filled Chi-Square Tests\n');

  console.log('\n🎉 HYPOTHESIS TESTING COMPLETE!');
  console.log('📊 Progress: 28/34 AP Statistics topics complete (82%)');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
