import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function updateTopic(slug: string, textContent: string) {
  try {
    await prisma.topic.update({
      where: { slug },
      data: { textContent }
    })
    console.log(`✅ ${slug}`)
  } catch (e) {
    console.warn(`⚠️  ${slug}: ${(e as Error).message}`)
  }
}

async function main() {
  console.log('📊 Expanding AP Stats textContent (Part 3/4)…\n')

  await updateTopic('geometric-distribution', `# 🎲 Geometric Distribution

## When to Use Geometric Distribution

The geometric distribution models the number of trials needed to achieve the **first success** in a sequence of independent Bernoulli trials.

**Key Difference from Binomial:**
- **Binomial:** Fixed number of trials, count successes (X = # successes in n trials)
- **Geometric:** Fixed target (1 success), count trials until we get it

## Conditions for Geometric Distribution (BIS minus Fixed n)

1. **B**ernoulli trials: each trial has two outcomes (success/failure)
2. **I**ndependence: trials are independent
3. **S**ame probability: probability p of success is constant on each trial
4. ~~**Fixed n:**~~ **NOT fixed** — we stop when we get first success

## Probability Formula

For X = number of trials until first success:

$$P(X = k) = (1 - p)^{k-1} \\cdot p$$

where:
- $k$ = 1, 2, 3, ... (the trial number on which first success occurs)
- $p$ = probability of success on each trial
- $(1 - p)^{k-1}$ = (k−1) failures before the first success

## Mean and Standard Deviation

$$E(X) = \\frac{1}{p}$$

$$SD(X) = \\sqrt{\\frac{1-p}{p^2}} = \\frac{\\sqrt{1-p}}{p}$$

## Worked Example

A basketball player makes 60% of free throws. What is the probability that her first made free throw occurs on the 3rd attempt?

**Given:** p = 0.60, k = 3

**Calculation:**
$$P(X = 3) = (0.40)^{3-1} \\cdot (0.60) = (0.40)^2 \\cdot 0.60 = 0.16 \\cdot 0.60 = 0.096$$

**Interpretation:** There is a 9.6% chance her first made free throw occurs on the 3rd attempt (meaning she misses the first two and makes the third).

**Mean:** $E(X) = \\frac{1}{0.60} \\approx 1.67$ attempts on average

## Common Mistakes

1. **Using k instead of (k−1):** Always use $(1-p)^{k-1}$, not $(1-p)^k$
2. **Confusing with binomial:** "First success on trial k" is geometric, "k successes in n trials" is binomial
3. **Forgetting that k starts at 1:** On the first trial (k=1), $P(X=1) = p$ (immediate success)
4. **Not recognizing when to use it:** Look for phrases like "first," "until success," "wait for"

## Decision Rule / When to Apply

Use geometric distribution when:
- Asked for probability of first success occurring on trial k
- Asked for expected number of trials until first success
- Sampling until you find one item with a desired property

## AP Exam Tip

Geometric problems often appear in free-response questions about quality control, customer service (first complaint), or medical applications (first positive test). Watch for cumulative probability questions: $P(X \\leq k)$ requires summing individual probabilities or recognizing the cumulative geometric formula.`)

  await updateTopic('continuous-random-variables', `# 📈 Continuous Random Variables

## What is a Continuous Random Variable?

A **continuous random variable** takes any value in an interval. Unlike discrete random variables (which take specific values like 1, 2, 3), continuous variables can be any real number within a range.

**Examples:**
- Height of students (150 cm to 210 cm)
- Time to complete a test (0 to 180 minutes)
- Temperature (could be 20.5°C, 20.57°C, 20.571°C, ...)

## Probability Density Functions (PDF)

Instead of listing probabilities at specific values, continuous distributions use a **probability density function f(x)**.

**Key Properties:**
1. $f(x) \\geq 0$ for all x (function is non-negative)
2. **Total area under the curve = 1:** $\\int_{-\\infty}^{\\infty} f(x) \\, dx = 1$
3. **Probability is area:** $P(a \\leq X \\leq b) = \\int_a^b f(x) \\, dx$
4. **Point probability is zero:** $P(X = c) = 0$ for any single value

## Why Area Under Curve = Probability

For continuous variables, probability is determined by area, not by the height of the function at a point.

**Graphically:**
- The total area under the curve represents 100% probability (or 1.0)
- The area between two x-values represents the probability the variable falls in that range
- A curve that never touches the x-axis means those x-values have zero probability

## Uniform Distribution

The **uniform distribution** on interval [a, b] has constant density.

$$f(x) = \\frac{1}{b - a} \\text{ for } a \\leq x \\leq b$$

**Mean:** $\\mu = \\frac{a + b}{2}$ (midpoint)

**Standard Deviation:** $\\sigma = \\frac{b - a}{\\sqrt{12}}$

**Probability:** $P(c \\leq X \\leq d) = \\frac{d - c}{b - a}$ (rectangular area)

## Uniform Distribution Example

Buses arrive every 15 minutes. Your arrival time is uniformly distributed between buses. What is the probability you wait less than 5 minutes?

**Given:** X ~ Uniform(0, 15) where X = wait time in minutes

$$P(0 \\leq X \\leq 5) = \\frac{5 - 0}{15 - 0} = \\frac{5}{15} = \\frac{1}{3} \\approx 0.333$$

## Normal Distribution as Continuous RV

The **normal distribution** (bell curve) is the most important continuous distribution in statistics.

**Properties:**
- Symmetric about the mean μ
- Determined by two parameters: μ (mean) and σ (standard deviation)
- Approximately 68% of data within 1σ, 95% within 2σ, 99.7% within 3σ
- Used to model many natural phenomena (heights, test scores, errors)

**Notation:** $X \\sim N(\\mu, \\sigma^2)$

## Common Mistakes

1. **Confusing PDF height with probability:** The y-axis value is not probability; only area is
2. **Thinking $P(X = c) \\neq 0$:** For continuous distributions, the probability of any exact value is always 0
3. **Not recognizing when to use continuous vs discrete:** Discrete has specific values; continuous has intervals

## AP Exam Tip

When dealing with continuous variables on the AP exam, always think "area under the curve." If asked for a probability, you need to find an area (using tables, calculators, or normal approximation). Never calculate probability for a single point; always use an interval.`)

  await updateTopic('sampling-distributions', `# 📊 Sampling Distributions

## What is a Sampling Distribution?

A **sampling distribution** is the probability distribution of a sample statistic (like $\\bar{x}$ or $\\hat{p}$) calculated from all possible samples of the same size drawn from a population.

**Key Insight:** If you repeatedly take samples of size n and calculate the statistic each time, the results vary. That variation follows a sampling distribution.

## Distribution of Sample Proportion $\\hat{p}$

For a sample proportion $\\hat{p}$:

**Mean of the sampling distribution:**
$$\\mu_{\\hat{p}} = p$$

The sample proportion centers on the true population proportion.

**Standard Error (SE) of $\\hat{p}$:**
$$SE(\\hat{p}) = \\sqrt{\\frac{p(1-p)}{n}}$$

**Conditions for approximation by normal distribution:**
- $np \\geq 10$ (at least 10 successes)
- $n(1-p) \\geq 10$ (at least 10 failures)
- Sample is random
- 10% rule: n ≤ 0.10N (sample ≤ 10% of population)

## Distribution of Sample Mean $\\bar{x}$

For a sample mean $\\bar{x}$:

**Mean of the sampling distribution:**
$$\\mu_{\\bar{x}} = \\mu$$

The sample mean centers on the true population mean.

**Standard Error (SE) of $\\bar{x}$:**
$$SE(\\bar{x}) = \\frac{\\sigma}{\\sqrt{n}}$$

where σ is the population standard deviation.

**Conditions for approximation by normal distribution:**
- If population is normal: any sample size works
- If population shape unknown: n ≥ 30 (Central Limit Theorem)
- Sample is random
- 10% rule: n ≤ 0.10N

## Key Properties of Sampling Distributions

1. **Center:** Both $\\hat{p}$ and $\\bar{x}$ are unbiased (centered on true parameter)
2. **Spread:** SE decreases as n increases; larger samples give less variable statistics
3. **Shape:** Approximately normal under appropriate conditions
4. **Variability formula:** SE depends on population variability and sample size

## Worked Example

Suppose 40% of customers prefer Brand A. You take a random sample of 100 customers.

**For $\\hat{p}$:**
- $\\mu_{\\hat{p}} = 0.40$
- $SE(\\hat{p}) = \\sqrt{\\frac{0.40 \\cdot 0.60}{100}} = \\sqrt{\\frac{0.24}{100}} = \\sqrt{0.0024} = 0.049$
- Check conditions: np = 40 ≥ 10 ✓, n(1−p) = 60 ≥ 10 ✓

The sampling distribution of $\\hat{p}$ is approximately $N(0.40, 0.049^2)$.

## Common Mistakes

1. **Confusing SE with standard deviation:** SE is smaller than σ because of the $\\sqrt{n}$ in denominator
2. **Forgetting conditions:** Always verify the sample size conditions before using normal approximation
3. **Not recognizing center:** Sample statistics are unbiased; they center on the true parameter

## AP Exam Tip

Sampling distribution questions require you to identify whether you're working with $\\bar{x}$ or $\\hat{p}$, then apply correct formula. Know the SE formulas and always check conditions. If conditions fail, state the issue rather than proceeding with the normal approximation.`)

  await updateTopic('central-limit-theorem', `# 🔔 Central Limit Theorem

## What is the Central Limit Theorem?

The **Central Limit Theorem (CLT)** is one of the most powerful theorems in statistics:

**If samples of size n are drawn from ANY population distribution with mean μ and standard deviation σ, then:**
- The distribution of sample means $\\bar{x}$ is approximately normal
- This approximation improves as n increases
- This holds regardless of the shape of the original population

## Formal Statement

$$\\bar{x} \\sim N\\left(\\mu, \\frac{\\sigma^2}{n}\\right) \\text{ for large n}$$

**In words:**
- Sample means are normally distributed
- Mean of distribution: μ (same as population)
- Standard deviation of distribution: $\\frac{\\sigma}{\\sqrt{n}}$ (decreases with larger samples)

## The n ≥ 30 Rule of Thumb

As a practical guideline:
- **If n ≥ 30:** Normal approximation is reasonable for almost any population
- **If n < 30:** Check if the population is approximately normal
- **If population is known to be normal:** Any sample size works

## Why Population Shape Doesn't Matter (Large n)

For large samples:
1. Sample means from non-normal populations still form a bell curve
2. Averaging "smooths out" skewness in the population
3. Extreme values are balanced by more central values
4. The aggregation effect creates normality

**Visual Example:** Even if the population is heavily skewed or multimodal, sample means concentrate near μ and form a symmetric, bell-shaped curve.

## Demonstration with Worked Example

**Scenario:** Population has exponential distribution (right-skewed), mean = 5, SD = 5

**n = 5 sample means:**
- Still right-skewed, similar to population
- Standard error: $SE = \\frac{5}{\\sqrt{5}} \\approx 2.24$

**n = 30 sample means:**
- Approximately normal (CLT kicks in)
- Standard error: $SE = \\frac{5}{\\sqrt{30}} \\approx 0.91$
- Distribution clearly bell-shaped

**n = 100 sample means:**
- Very close to normal
- Standard error: $SE = \\frac{5}{\\sqrt{100}} = 0.5$
- Narrow, concentrated around 5

## Application: Probability Involving Sample Means

**Example:** IQ scores have mean 100 and SD 15. You test 36 students. What's the probability their mean IQ exceeds 105?

$$SE = \\frac{15}{\\sqrt{36}} = \\frac{15}{6} = 2.5$$

$$z = \\frac{105 - 100}{2.5} = \\frac{5}{2.5} = 2$$

$$P(\\bar{x} > 105) = P(Z > 2) \\approx 0.0228 = 2.28\\%$$

## Common Mistakes

1. **Thinking CLT applies to individual values:** It applies to means, not to individual data points
2. **Using population SD instead of SE:** In CLT formulas, use $\\frac{\\sigma}{\\sqrt{n}}$, not σ
3. **Ignoring the requirement for randomness:** CLT requires independent, identically distributed samples

## Why CLT is Powerful

- Inference about means doesn't require knowing population distribution
- Allows use of z-scores and normal tables for diverse populations
- Foundation for confidence intervals and hypothesis tests

## AP Exam Tip

CLT questions often ask you to verify conditions (n ≥ 30 or population approximately normal) and then make probability calculations. Always identify what you're finding: P(individual value), P(sample mean), or P(sample proportion). Each requires a different approach.`)

  await updateTopic('ci-proportions', `# 📐 Confidence Intervals for Proportions

## Confidence Interval Formula

A confidence interval for a population proportion p is:

$$\\hat{p} \\pm z^* \\cdot SE(\\hat{p})$$

where:
- $\\hat{p}$ = sample proportion (point estimate)
- $z^*$ = critical z-value (depends on confidence level)
- $SE(\\hat{p}) = \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$

**Common critical values:**
- 90% CI: $z^* = 1.645$
- 95% CI: $z^* = 1.96$
- 99% CI: $z^* = 2.576$

## Conditions for Validity

Before constructing CI for proportions, verify:

1. **Random sample:** Data collected randomly
2. **Independence:** Sampling without replacement; use 10% rule (n ≤ 0.10N)
3. **Success/failure rule:** Both $n\\hat{p} \\geq 10$ and $n(1-\\hat{p}) \\geq 10$

If these fail, don't use the standard formula.

## Worked Example

A poll of 400 likely voters finds 220 support Candidate A. Construct a 95% CI for the population proportion.

**Step 1:** $\\hat{p} = \\frac{220}{400} = 0.55$

**Step 2:** Check conditions:
- Random sample ✓
- n = 400 ≤ 0.10(population) ✓ (assume population is large)
- $n\\hat{p} = 400(0.55) = 220 \\geq 10$ ✓
- $n(1-\\hat{p}) = 400(0.45) = 180 \\geq 10$ ✓

**Step 3:** Calculate SE:
$$SE = \\sqrt{\\frac{0.55 \\cdot 0.45}{400}} = \\sqrt{\\frac{0.2475}{400}} = \\sqrt{0.00061875} \\approx 0.0249$$

**Step 4:** Calculate margin of error (ME):
$$ME = 1.96 \\times 0.0249 \\approx 0.0488$$

**Step 5:** Confidence interval:
$$0.55 \\pm 0.0488 = (0.5012, 0.5988)$$

**Interpretation:** We are 95% confident that between 50.1% and 59.9% of likely voters support Candidate A.

## Margin of Error

The **margin of error (ME)** represents the uncertainty in the point estimate:

$$ME = z^* \\cdot SE(\\hat{p}) = z^* \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$$

Larger ME means wider CI (less precise). Smaller ME means narrower CI (more precise).

## Sample Size for Desired Margin of Error

To find the sample size needed for margin ME:

$$n = \\frac{(z^*)^2 \\cdot p(1-p)}{ME^2}$$

**If p is unknown, use p = 0.5** (gives maximum sample size; most conservative).

**Example:** You want 95% CI with ME = 0.03. How large must the sample be?

$$n = \\frac{(1.96)^2 \\cdot 0.5(0.5)}{(0.03)^2} = \\frac{3.8416 \\cdot 0.25}{0.0009} = \\frac{0.9604}{0.0009} \\approx 1068$$

## Common Mistakes

1. **Wrong formula:** Using $z^*$ instead of $t^*$ (t-values are for means, not proportions)
2. **Forgetting to check conditions:** Missing the success/failure rule or 10% rule
3. **Using p instead of $\\hat{p}$:** The SE formula uses the sample proportion, not the population proportion

## AP Exam Tip

Know the margin of error formula cold. Many free-response questions ask you to find the sample size needed to achieve a specific margin. Always verify conditions before calculating; if conditions fail, state which ones and explain why the interval is not valid.`)

  await updateTopic('ci-means', `# 📏 Confidence Intervals for Means

## When to Use t-Interval vs z-Interval

- **Use t-interval:** When σ (population SD) is unknown (almost always in practice)
- **Use z-interval:** Only when σ is known (rare in real applications)

## One-Sample t-Interval Formula

$$\\bar{x} \\pm t^* \\cdot \\frac{s}{\\sqrt{n}}$$

where:
- $\\bar{x}$ = sample mean
- $t^*$ = critical t-value (depends on confidence level and degrees of freedom)
- $s$ = sample standard deviation
- $n$ = sample size
- $df = n - 1$

## Conditions for t-Interval

1. **Random sample:** Data collected randomly
2. **Independence:** Sampling without replacement; use 10% rule (n ≤ 0.10N)
3. **Normality:** Either population is normal OR n ≥ 30 (CLT)

## Finding $t^*$ Values

- df = n − 1
- Look up $t^*$ in t-table using df and confidence level

**Common values (df = large, approximately normal):**
- 90% CI: $t^* \\approx 1.645$
- 95% CI: $t^* \\approx 1.96$
- 99% CI: $t^* \\approx 2.576$

**For small samples:**
- df = 9, 95% CI: $t^* = 2.262$ (larger than z)
- df = 4, 95% CI: $t^* = 2.776$ (even larger)

Smaller df → larger $t^*$ → wider CI.

## One-Sample Example

A random sample of 16 students has mean test score $\\bar{x} = 78$ with sample SD s = 8. Find a 95% CI for the population mean.

**Check conditions:**
- Random sample ✓
- n = 16 < 30, but assume population approximately normal ✓
- Independence ✓

**Calculate:**
- $df = 16 - 1 = 15$
- From t-table: $t^* = 2.131$ (95% CI, df = 15)
- $SE = \\frac{8}{\\sqrt{16}} = \\frac{8}{4} = 2$
- $ME = 2.131 \\times 2 = 4.262$
- CI: $78 \\pm 4.262 = (73.738, 82.262)$

**Interpretation:** We are 95% confident the mean score is between 73.7 and 82.3.

## Two-Sample t-Interval

Comparing two population means $\\mu_1$ and $\\mu_2$:

$$(\\bar{x}_1 - \\bar{x}_2) \\pm t^* \\cdot SE(\\bar{x}_1 - \\bar{x}_2)$$

where:

$$SE(\\bar{x}_1 - \\bar{x}_2) = \\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}$$

(Use technology to find df; approximately $min(n_1 - 1, n_2 - 1)$ or more complex formula)

## Common Mistakes

1. **Confusing df:** Always use df = n − 1, not n
2. **Using s instead of SE:** The standard error is $\\frac{s}{\\sqrt{n}}$, not just s
3. **Wrong critical value:** Look up $t^*$, not z, from the t-table
4. **Forgetting conditions:** Particularly the normality condition; state why it's satisfied

## AP Exam Tip

Free-response questions often ask you to construct a t-interval. Show all steps: state formula, check conditions, identify $\\bar{x}$, s, n, df, and $t^*$, calculate ME, and state the CI with interpretation. Partial credit is generous if you show correct understanding.`)

  await updateTopic('interpreting-ci', `# 🎯 Interpreting Confidence Intervals

## What "95% Confident" Really Means

**CORRECT interpretation:**
"If we repeated the sampling procedure many times, approximately 95% of the confidence intervals constructed would capture the true population parameter."

**In other words:** It's about the procedure, not the parameter. The confidence level describes the long-run success rate of the method.

**WRONG interpretation (very common):**
❌ "There is a 95% probability the parameter is in this interval"
❌ "95% of the data fall in this interval"
❌ "The parameter is definitely in this interval"

Once a CI is calculated, the parameter is either in it or it isn't—the probability is either 1 or 0.

## Procedure Interpretation

Think of CI construction like a net:
- Each sample produces a different CI (different $\\bar{x}$ or $\\hat{p}$)
- 95% of these nets will capture the fish (parameter)
- 5% will miss

We never know if our one net caught the fish, but we know the method works 95% of the time.

## Common Misinterpretations to Avoid

1. **Reversed confidence:** "The population is 95% confident the sample mean is in the interval"
   - ❌ Backwards. We're confident about the population, not that the sample fits.

2. **Parameter varies:** "There's a 95% chance the parameter is between 45 and 55"
   - ❌ The parameter is fixed (though unknown). The interval varies across samples.

3. **Confusing with confidence level:** Confidence level (95%) ≠ data range
   - ❌ Don't say "95% of observations fall in this interval"

## Overlapping Confidence Intervals vs Hypothesis Tests

**When two 95% CIs overlap:**
- At the 5% significance level, the difference may not be statistically significant
- But you CAN'T conclude no difference; overlap doesn't guarantee non-significance

**Rule of thumb (approximate):**
- Non-overlapping 95% CIs → significant at 5% level (two-sided)
- Overlapping CIs → difference is **not necessarily** non-significant

**When to use:**
- Overlapping CIs suggest possible non-significance, but do a formal test to be sure
- Non-overlapping CIs strongly suggest significance

## Example: Interpreting a Confidence Interval

**Survey result:** A 95% CI for the proportion of adults who support a policy is (0.52, 0.60).

**CORRECT statement:**
"We are 95% confident that the true proportion of adults supporting the policy is between 52% and 60%. This means if we repeated the survey many times, about 95% of the intervals we construct would contain the true parameter."

**INCORRECT statement:**
"There is a 95% probability that the true proportion is between 52% and 60%." (Once calculated, the parameter is either there or not—no probability involved)

## Interpreting Width and Margin of Error

**Wider CI:**
- Less precise (greater margin of error)
- But higher confidence (if comparing two intervals with same data)
- Results from larger $t^*$ or $z^*$ value OR smaller sample size

**Narrower CI:**
- More precise (smaller margin of error)
- But lower confidence (if comparing intervals from same data)
- Results from larger sample size or lower confidence level

## Factors Affecting CI Width

$$\\text{Width} = 2 \\cdot z^* \\cdot SE$$

1. **Sample size:** Larger n → smaller SE → narrower CI
2. **Confidence level:** Higher confidence → larger $z^*$ → wider CI
3. **Population variability:** Larger σ → larger SE → wider CI

## AP Exam Tip

Interpretation questions require careful language. Never say probability about a fixed parameter; use "confident" or "procedure" language. If asked to compare CIs, discuss precision vs confidence. If asked what would narrow a CI, state: "increase sample size" or "decrease confidence level."`)

  await updateTopic('hypothesis-testing-framework', `# ⚖️ Hypothesis Testing Framework

## Setting Up Hypotheses

**Null Hypothesis ($H_0$):**
- Statement of "no effect," "no difference," or "no change"
- What we assume true unless evidence suggests otherwise
- Always uses = sign

**Alternative Hypothesis ($H_a$):**
- Statement we're testing for
- What we'd conclude if $H_0$ is rejected
- Can be one-sided (<, >) or two-sided (≠)

## Types of Hypotheses: One-Sided vs Two-Sided

**Two-sided test (most common initially):**
- $H_0: p = 0.5$ vs $H_a: p \\neq 0.5$
- Tests for any difference (either direction)
- Uses both tails of distribution

**One-sided test (left):**
- $H_0: p = 0.5$ vs $H_a: p < 0.5$
- Tests if parameter less than null value
- Uses left tail only

**One-sided test (right):**
- $H_0: p = 0.5$ vs $H_a: p > 0.5$
- Tests if parameter greater than null value
- Uses right tail only

## Test Statistic

The **test statistic** measures how far the sample statistic is from the null value, in standard errors.

**For proportions (z-test):**
$$z = \\frac{\\hat{p} - p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n}}}$$

**For means (t-test):**
$$t = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}$$

## p-Value

The **p-value** is:
- Probability of observing test statistic as extreme or more extreme, given $H_0$ is true
- Measures evidence against $H_0$
- Smaller p-value → stronger evidence against $H_0$

**Interpretation:**
- p-value = 0.03 means: If $H_0$ were true, we'd see results this extreme 3% of the time

## Significance Level (α)

The **significance level** is the threshold for rejecting $H_0$.

**Common choices:**
- α = 0.05 (most common; 5% risk of Type I error)
- α = 0.01 (more stringent; 1% risk)
- α = 0.10 (less stringent; 10% risk)

## Decision Rule

Compare p-value to α:
- **If p-value < α:** Reject $H_0$ (statistically significant; evidence for $H_a$)
- **If p-value ≥ α:** Fail to reject $H_0$ (not enough evidence)

## Worked Example

**Claim:** A coin is fair. Test at α = 0.05.

- $H_0: p = 0.5$ (fair coin)
- $H_a: p \\neq 0.5$ (unfair coin, two-sided)
- Flip 100 times, get 62 heads

**Calculate test statistic:**
$$z = \\frac{0.62 - 0.5}{\\sqrt{\\frac{0.5 \\cdot 0.5}{100}}} = \\frac{0.12}{\\sqrt{0.0025}} = \\frac{0.12}{0.05} = 2.4$$

**Find p-value:** For z = 2.4 (two-sided): p-value ≈ 0.0164

**Decision:** p-value (0.0164) < α (0.05) → Reject $H_0$

**Conclusion:** There is significant evidence that the coin is not fair.

## Conclusion in Context

Always state conclusion in terms of original problem:
- ✅ "At the 5% significance level, there is sufficient evidence that the mean GPA has increased."
- ❌ "We reject the null hypothesis."

Include context; address the original claim.

## Common Mistakes

1. **Confusing p-value with probability of $H_0$:** p-value is conditional on $H_0$ being true
2. **Stating wrong hypotheses:** $H_a$ should match the research question
3. **One-sided vs two-sided:** Determine direction before collecting data
4. **Ignoring assumptions:** Check independence, randomness, and normality

## AP Exam Tip

Free-response hypothesis test questions follow a four-step format:
1. **State:** $H_0$ and $H_a$ (or state conditions and parameter)
2. **Plan:** Name the test and check conditions
3. **Do:** Calculate test statistic and p-value
4. **Conclude:** Decision and interpretation in context

Show all work and use appropriate notation.`)

  await updateTopic('type-errors', `# ⚠️ Type I and Type II Errors

## Type I Error (α)

A **Type I error** occurs when we **reject a true null hypothesis**.

**In words:** We conclude there's an effect/difference when actually there isn't one.

**Probability of Type I error = α** (the significance level)

**Example:**
- $H_0$: The defendant is innocent (truth)
- $H_a$: The defendant is guilty
- **Type I error:** Convicting an innocent person (reject true $H_0$)
- **Consequence:** Innocent person punished

**In medical testing:**
- $H_0$: Patient does not have disease
- **Type I error:** Diagnosing disease when patient is healthy
- **Consequence:** Unnecessary treatment, patient anxiety

## Type II Error (β)

A **Type II error** occurs when we **fail to reject a false null hypothesis**.

**In words:** We conclude there's no effect/difference when actually there is one.

**Probability of Type II error = β** (often unknown)

**Example:**
- $H_0$: The defendant is innocent (false; they actually committed crime)
- **Type II error:** Acquitting a guilty person (fail to reject false $H_0$)
- **Consequence:** Criminal goes free

**In medical testing:**
- $H_0$: Patient does not have disease
- **Type II error:** Saying patient is healthy when they actually have disease
- **Consequence:** Missed diagnosis, delayed treatment

## Power of a Test

The **power** of a test is the probability of correctly rejecting $H_0$ when $H_a$ is true.

$$\\text{Power} = 1 - \\beta$$

- High power (close to 1): Good chance of detecting true effect if it exists
- Low power (close to 0): High risk of missing true effect

**Interpretation:** If the alternative is true, power is the probability we'll find it.

## Error Summary Table

|  | $H_0$ True | $H_0$ False |
|---|---|---|
| **Reject $H_0$** | **Type I Error** (prob = α) | **Correct** (prob = power) |
| **Fail to Reject $H_0$** | **Correct** (prob = 1 − α) | **Type II Error** (prob = β) |

## Worked Example

**Scenario:** Testing if a new drug is effective.
- $H_0$: Drug has no effect
- $H_a$: Drug has effect
- α = 0.05

**Type I error (α = 0.05):** Conclude drug works when it doesn't. Risk: 5% (set by significance level)

**Type II error (β):** Conclude drug doesn't work when it actually does. Risk: Unknown, but reduced by:
- Larger sample size
- Larger effect size
- Less variable data

**Power = 1 − β:** Probability we detect the drug's effect if it exists. Should be high (0.80 or 0.90 typical targets)

## Factors Affecting Type I and Type II Errors

| Factor | Effect on α | Effect on β |
|---|---|---|
| Increase α (e.g., 0.05 → 0.10) | Increases Type I risk | Decreases Type II risk |
| Increase n (sample size) | No effect | Decreases (higher power) |
| Increase effect size | No effect | Decreases (easier to detect) |
| Increase confidence (reduce α) | Decreases | Increases (lower power) |

## Trade-off Between Errors

Lowering α (e.g., from 0.05 to 0.01) automatically increases β. You can't simultaneously minimize both errors with fixed sample size.

**Strategy depends on consequence:**
- **High Type I cost** (e.g., convicting innocent): Use low α (e.g., 0.01)
- **High Type II cost** (e.g., missing disease): Use higher α (e.g., 0.10) or larger n

## Sample Size and Power

To increase power for fixed α:
- **Increase sample size n:** More data provides stronger evidence
- **Formula:** Larger n → smaller SE → larger test statistic → higher power

**Example:** If power is too low (say 0.60), increasing n to 200 might increase power to 0.85.

## AP Exam Tip

Know the definitions of Type I and II errors cold; these appear frequently. Context matters: identify which error is worse, then design accordingly. Power problems ask: "What sample size gives power = 0.90?" Use technology or power tables. Always interpret in context (what does rejecting/failing to reject mean for the actual situation?).`)

  console.log('✅ All 9 topics expanded.\n')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
