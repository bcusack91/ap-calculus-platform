import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const topicContent: Record<string, { textContent: string; description: string }> = {
  'basic-probability-rules': {
    description: 'Apply addition and multiplication rules, and understand complements and mutually exclusive events.',
    textContent: `# Basic Probability Rules

## Sample Spaces and Events

- **Sample space** $S$: The set of all possible outcomes
- **Event**: A subset of the sample space

## Probability Axioms

For any event $A$:
1. $0 \\leq P(A) \\leq 1$
2. $P(S) = 1$
3. For mutually exclusive events $A$ and $B$: $P(A \\cup B) = P(A) + P(B)$

## Complement Rule

$$P(A^c) = 1 - P(A)$$

The probability that event $A$ does **not** occur equals 1 minus the probability that it does.

## Addition Rule (General)

$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$

This accounts for **double-counting** when events overlap.

**Special case — Mutually Exclusive Events** ($A \\cap B = \\emptyset$):
$$P(A \\cup B) = P(A) + P(B)$$

## Multiplication Rule (General)

$$P(A \\cap B) = P(A) \\cdot P(B|A)$$

**Special case — Independent Events**:
$$P(A \\cap B) = P(A) \\cdot P(B)$$

## Mutually Exclusive vs. Independent

| Property | Mutually Exclusive | Independent |
|----------|-------------------|-------------|
| Definition | Cannot occur together | Occurrence of one doesn't affect the other |
| Formula | $P(A \\cap B) = 0$ | $P(A \\cap B) = P(A) \\cdot P(B)$ |
| Can both be true? | Only if $P(A) = 0$ or $P(B) = 0$ | |

> **Important**: If two events have non-zero probabilities and are mutually exclusive, they **cannot** be independent (and vice versa).

## Probability Models

A **probability model** lists all outcomes and their probabilities:
- Every probability is between 0 and 1
- All probabilities sum to 1

> **AP Tip**: The most common mistake is confusing "or" (addition rule) with "and" (multiplication rule). "Or" → add; "And" → multiply.`
  },

  'conditional-probability': {
    description: 'Calculate conditional probabilities using formulas and two-way tables.',
    textContent: `# Conditional Probability

## Definition

The **conditional probability** of event $A$ given that event $B$ has occurred:

$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}, \\quad P(B) > 0$$

**Read as**: "the probability of A given B"

## Using Two-Way Tables

Two-way tables are the easiest way to compute conditional probabilities.

**Example**: Students by grade and sport participation:

| | Plays Sport | No Sport | Total |
|---|---|---|---|
| **Grade 9** | 40 | 60 | 100 |
| **Grade 10** | 55 | 45 | 100 |
| **Total** | 95 | 105 | 200 |

$$P(\\text{Sport} | \\text{Grade 9}) = \\frac{40}{100} = 0.40$$
$$P(\\text{Grade 9} | \\text{Sport}) = \\frac{40}{95} \\approx 0.421$$

Notice: $P(A|B) \\neq P(B|A)$ in general!

## Tree Diagrams

Tree diagrams visualize sequential events:
1. First branch: probabilities of first event
2. Second branch: conditional probabilities given the first event
3. Multiply along branches for joint probabilities
4. Add final probabilities for total

## General Multiplication Rule

$$P(A \\cap B) = P(A) \\cdot P(B|A) = P(B) \\cdot P(A|B)$$

## Bayes' Theorem

$$P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}$$

Expanded form:
$$P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B|A) \\cdot P(A) + P(B|A^c) \\cdot P(A^c)}$$

## Law of Total Probability

$$P(B) = P(B|A) \\cdot P(A) + P(B|A^c) \\cdot P(A^c)$$

> **AP Tip**: On the AP exam, always show your work with conditional probability. Label what each probability represents and use proper notation $P(A|B)$.`
  },

  'independence': {
    description: 'Test for independence using probability rules and understand its implications.',
    textContent: `# Independence

## Definition

Two events $A$ and $B$ are **independent** if knowing that one occurred does **not** change the probability of the other:

$$P(A|B) = P(A) \\quad \\text{and} \\quad P(B|A) = P(B)$$

Equivalently:
$$P(A \\cap B) = P(A) \\cdot P(B)$$

## Testing for Independence

To check if events are independent, verify one of these:
1. $P(A|B) = P(A)$
2. $P(B|A) = P(B)$
3. $P(A \\cap B) = P(A) \\cdot P(B)$

If **any one** of these holds, all three hold.

## Example with Two-Way Table

| | Pass | Fail | Total |
|---|---|---|---|
| **Studied** | 72 | 8 | 80 |
| **Didn't Study** | 12 | 8 | 20 |
| **Total** | 84 | 16 | 100 |

Check: Is passing independent of studying?
- $P(\\text{Pass}) = 84/100 = 0.84$
- $P(\\text{Pass} | \\text{Studied}) = 72/80 = 0.90$
- Since $0.90 \\neq 0.84$, the events are **not independent**

## Independence vs. Mutually Exclusive

These are **different** concepts:
- **Mutually exclusive**: $P(A \\cap B) = 0$ — events cannot both occur
- **Independent**: $P(A \\cap B) = P(A) \\cdot P(B)$ — events don't affect each other

If $P(A) > 0$ and $P(B) > 0$:
- Mutually exclusive events are **never** independent
- Independent events are **never** mutually exclusive

## Independent Trials

When sampling **with replacement** or from a very large population, successive selections are independent.

**Rule of thumb**: Selections are approximately independent if the sample is less than 10% of the population (the **10% condition**).

> **AP Tip**: Don't confuse "independent events" with "independent variable" — they are different concepts in statistics.`
  },

  'discrete-random-variables': {
    description: 'Define discrete random variables, calculate expected value, variance, and standard deviation.',
    textContent: `# Discrete Random Variables

## What Is a Random Variable?

A **random variable** $X$ assigns a numerical value to each outcome in a sample space.

A **discrete random variable** takes a countable number of values (often integers).

## Probability Distribution

A probability distribution lists all possible values and their probabilities:

| $x_i$ | $x_1$ | $x_2$ | $\\cdots$ | $x_k$ |
|--------|--------|--------|-----------|--------|
| $P(X = x_i)$ | $p_1$ | $p_2$ | $\\cdots$ | $p_k$ |

Requirements:
- $0 \\leq p_i \\leq 1$ for all $i$
- $\\sum p_i = 1$

## Expected Value (Mean)

$$\\mu_X = E(X) = \\sum x_i \\cdot P(X = x_i)$$

The expected value is the **long-run average** — what you'd expect on average over many repetitions.

**Example**: Roll a fair die. $E(X) = 1(\\frac{1}{6}) + 2(\\frac{1}{6}) + 3(\\frac{1}{6}) + 4(\\frac{1}{6}) + 5(\\frac{1}{6}) + 6(\\frac{1}{6}) = 3.5$

## Variance and Standard Deviation

$$\\sigma_X^2 = \\text{Var}(X) = \\sum (x_i - \\mu_X)^2 \\cdot P(X = x_i)$$

$$\\sigma_X = SD(X) = \\sqrt{\\text{Var}(X)}$$

## Rules for Transformations

If $Y = a + bX$:
- $E(Y) = a + b \\cdot E(X)$
- $\\text{Var}(Y) = b^2 \\cdot \\text{Var}(X)$
- $SD(Y) = |b| \\cdot SD(X)$

## Rules for Combining Random Variables

If $X$ and $Y$ are independent:
- $E(X + Y) = E(X) + E(Y)$ *(always true, even if not independent)*
- $E(X - Y) = E(X) - E(Y)$ *(always true)*
- $\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y)$ *(only if independent)*
- $\\text{Var}(X - Y) = \\text{Var}(X) + \\text{Var}(Y)$ *(only if independent — **ADD** variances!)*

> **Key Insight**: Variances always **add**, even when subtracting random variables. This is because the variability of a difference is just as large as the variability of a sum.

> **AP Tip**: The most common mistake is subtracting variances when computing $\\text{Var}(X - Y)$. Always ADD variances!`
  },

  'binomial-distribution': {
    description: 'Apply the binomial distribution to count successes in fixed trials with conditions BINS.',
    textContent: `# Binomial Distribution

## Binomial Setting (BINS)

A random variable $X$ follows a binomial distribution if:
- **B**inary: Each trial has exactly two outcomes (success/failure)
- **I**ndependent: Trials are independent of each other
- **N**umber: Fixed number of trials $n$
- **S**uccess: Same probability of success $p$ on each trial

Notation: $X \\sim B(n, p)$ or $X \\sim \\text{Binomial}(n, p)$

## Binomial Probability Formula

The probability of exactly $k$ successes in $n$ trials:

$$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$$

where $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ is the **binomial coefficient** ("n choose k").

## Mean and Standard Deviation

$$\\mu_X = np$$

$$\\sigma_X = \\sqrt{np(1-p)}$$

## Calculator Commands

- $P(X = k)$: binompdf($n$, $p$, $k$)
- $P(X \\leq k)$: binomcdf($n$, $p$, $k$)
- $P(X \\geq k)$: 1 − binomcdf($n$, $p$, $k-1$)

## The 10% Condition

When sampling **without replacement**, trials are not truly independent. However, we can treat them as approximately independent if:

$$n < 0.10 \\cdot N$$

where $N$ is the population size. This is the **10% condition**.

## Example

A basketball player makes 75% of free throws. In 10 attempts, what's the probability of making exactly 8?

$$P(X = 8) = \\binom{10}{8}(0.75)^8(0.25)^2 = 45(0.1001)(0.0625) \\approx 0.2816$$

## Shape of Binomial Distribution

- If $p = 0.5$: symmetric
- If $p < 0.5$: skewed right
- If $p > 0.5$: skewed left
- As $n$ increases, the distribution becomes more symmetric

## Normal Approximation

When $np \\geq 10$ and $n(1-p) \\geq 10$, the binomial distribution is approximately Normal:
$$X \\approx N(np, \\sqrt{np(1-p)})$$

> **AP Tip**: Always verify the BINS conditions before using the binomial distribution. State each condition explicitly on free-response questions.`
  },

  'geometric-distribution': {
    description: 'Use the geometric distribution to model the number of trials until the first success.',
    textContent: `# Geometric Distribution

## Geometric Setting

A random variable $X$ follows a geometric distribution if:
- Each trial has exactly two outcomes (success/failure)
- Trials are independent
- The probability of success $p$ is the same on each trial
- The variable counts the **number of trials until the first success**

Notation: $X \\sim \\text{Geometric}(p)$

The key difference from binomial: geometric has **no fixed number of trials**.

## Geometric Probability

The probability that the first success occurs on the $k$th trial:

$$P(X = k) = (1-p)^{k-1} \\cdot p, \\quad k = 1, 2, 3, \\ldots$$

**Interpretation**: Fail $k-1$ times, then succeed.

## Mean and Standard Deviation

$$\\mu_X = E(X) = \\frac{1}{p}$$

$$\\sigma_X = \\frac{\\sqrt{1-p}}{p}$$

**Interpretation of the mean**: On average, it takes $\\frac{1}{p}$ trials to get the first success.

## Cumulative Probabilities

$$P(X \\leq k) = 1 - (1-p)^k$$

$$P(X > k) = (1-p)^k$$

This is useful: the probability that you have to wait more than $k$ trials is simply $(1-p)^k$.

## Calculator

- geometpdf($p$, $k$): Probability of first success on trial $k$
- geometcdf($p$, $k$): Probability of first success on or before trial $k$

## Shape

The geometric distribution is always **skewed right** — most of the probability is concentrated on small values of $X$.

## Example

A baseball player has a batting average of .300 (probability of a hit). What's the probability his first hit comes on his 3rd at-bat?

$$P(X = 3) = (0.7)^2(0.3) = 0.147$$

What's the expected number of at-bats until his first hit?

$$E(X) = \\frac{1}{0.3} \\approx 3.33 \\text{ at-bats}$$

> **AP Tip**: Remember that geometric distributions count the trial number OF the first success (including the success), not the number of failures before the first success.`
  },

  'continuous-random-variables': {
    description: 'Understand continuous random variables, probability density functions, and uniform distributions.',
    textContent: `# Continuous Random Variables

## Definition

A **continuous random variable** can take any value in an interval. Examples: height, weight, temperature, time.

## Probability Density Function (PDF)

For a continuous random variable, probability is represented by **area under a curve** called the probability density function $f(x)$.

Properties of a PDF:
1. $f(x) \\geq 0$ for all $x$
2. Total area under the curve equals 1: $\\int_{-\\infty}^{\\infty} f(x) \\, dx = 1$
3. $P(a \\leq X \\leq b) = \\int_a^b f(x) \\, dx$ (area under curve from $a$ to $b$)

## Key Property

For continuous random variables:
$$P(X = a) = 0 \\text{ for any single value } a$$

Therefore:
$$P(X \\leq a) = P(X < a)$$

This is different from discrete random variables!

## Uniform Distribution

The simplest continuous distribution. $X \\sim \\text{Uniform}(a, b)$:

$$f(x) = \\frac{1}{b-a} \\text{ for } a \\leq x \\leq b$$

$$\\mu = \\frac{a + b}{2}, \\quad \\sigma = \\frac{b - a}{\\sqrt{12}}$$

$$P(c \\leq X \\leq d) = \\frac{d - c}{b - a}$$

## Cumulative Distribution Function (CDF)

$$F(x) = P(X \\leq x) = \\int_{-\\infty}^{x} f(t) \\, dt$$

Properties:
- $F(x)$ is non-decreasing
- $0 \\leq F(x) \\leq 1$
- $P(a < X < b) = F(b) - F(a)$

## Mean and Variance

$$\\mu_X = E(X) = \\int_{-\\infty}^{\\infty} x \\cdot f(x) \\, dx$$

$$\\sigma_X^2 = \\int_{-\\infty}^{\\infty} (x - \\mu)^2 \\cdot f(x) \\, dx$$

## Normal Distribution Revisited

The Normal distribution $N(\\mu, \\sigma)$ is the most important continuous distribution:

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$

> **AP Tip**: For continuous distributions, always think "area = probability." For the AP exam, you mainly need Normal and Uniform distributions.`
  },

  'sampling-distributions': {
    description: 'Understand sampling distributions and the variability of sample statistics.',
    textContent: `# Sampling Distributions

## What Is a Sampling Distribution?

A **sampling distribution** is the distribution of a statistic (like $\\bar{x}$ or $\\hat{p}$) computed from all possible samples of a given size from a population.

## Key Idea

Individual statistics vary from sample to sample. The sampling distribution describes this variability.

## Sampling Distribution of the Sample Proportion $\\hat{p}$

For a sample of size $n$ from a population with proportion $p$:

$$\\mu_{\\hat{p}} = p$$

$$\\sigma_{\\hat{p}} = \\sqrt{\\frac{p(1-p)}{n}}$$

**Conditions for approximate Normality**:
1. **Random**: Data comes from a random sample or experiment
2. **10% Condition**: $n < 0.10N$ (for independence)
3. **Large Counts**: $np \\geq 10$ and $n(1-p) \\geq 10$

When conditions are met:
$$\\hat{p} \\approx N\\left(p, \\sqrt{\\frac{p(1-p)}{n}}\\right)$$

## Sampling Distribution of the Sample Mean $\\bar{x}$

For a sample of size $n$ from a population with mean $\\mu$ and standard deviation $\\sigma$:

$$\\mu_{\\bar{x}} = \\mu$$

$$\\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}}$$

$\\sigma_{\\bar{x}}$ is called the **standard error** of the mean.

## Unbiased Estimators

A statistic is an **unbiased estimator** of a parameter if its sampling distribution is centered at the parameter value.

- $\\bar{x}$ is unbiased for $\\mu$
- $\\hat{p}$ is unbiased for $p$
- $s^2$ is unbiased for $\\sigma^2$
- $s$ is **slightly biased** for $\\sigma$

## Effect of Sample Size

As $n$ increases:
- The sampling distribution becomes **less spread out** (more precise)
- $\\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}}$ decreases
- The distribution becomes **more Normal** (CLT)

## Variability vs. Bias

- **Bias**: Systematic error — is the center of the sampling distribution at the right place?
- **Variability**: Random error — how spread out is the sampling distribution?

> **AP Tip**: The concept of sampling distributions is the foundation for inference. Understand that we're not talking about the distribution of the data, but the distribution of a statistic across many samples.`
  },

  'central-limit-theorem': {
    description: 'Apply the Central Limit Theorem to approximate sampling distributions as Normal.',
    textContent: `# Central Limit Theorem

## Statement of the CLT

The **Central Limit Theorem (CLT)** states:

> For a random sample of size $n$ from **any** population with mean $\\mu$ and standard deviation $\\sigma$, the sampling distribution of $\\bar{x}$ is approximately Normal when $n$ is **sufficiently large**:

$$\\bar{x} \\approx N\\left(\\mu, \\frac{\\sigma}{\\sqrt{n}}\\right) \\text{ for large } n$$

## Why Is the CLT Important?

1. It works for **any** population shape — even skewed or bimodal!
2. It justifies using Normal-based methods for inference
3. It's the theoretical foundation for confidence intervals and hypothesis tests

## How Large Is "Large Enough"?

The required sample size depends on the population shape:

| Population Shape | Required $n$ |
|-----------------|-------------|
| Normal | Any $n$ (already Normal!) |
| Slightly skewed | $n \\geq 15$ |
| Strongly skewed | $n \\geq 30$ |
| Extremely skewed or with outliers | $n \\geq 40+$ |

**Rule of thumb**: $n \\geq 30$ is generally sufficient for the CLT to apply.

## CLT for Sample Proportions

The CLT also applies to $\\hat{p}$. When $np \\geq 10$ and $n(1-p) \\geq 10$:

$$\\hat{p} \\approx N\\left(p, \\sqrt{\\frac{p(1-p)}{n}}\\right)$$

## Visual Understanding

As $n$ increases, the sampling distribution of $\\bar{x}$:
1. **Shape**: Becomes more Normal (bell-shaped)
2. **Center**: Stays at $\\mu$ (unbiased)
3. **Spread**: Decreases (proportional to $\\frac{1}{\\sqrt{n}}$)

## Example

A population has $\\mu = 100$ and $\\sigma = 20$ (not Normal).

For samples of $n = 50$:
$$\\bar{x} \\approx N\\left(100, \\frac{20}{\\sqrt{50}}\\right) = N(100, 2.83)$$

$P(\\bar{x} > 105) = P\\left(Z > \\frac{105 - 100}{2.83}\\right) = P(Z > 1.77) \\approx 0.0384$

## Common Misconception

The CLT says the **sampling distribution** becomes Normal. It does NOT say the population becomes Normal or the sample data becomes Normal.

> **AP Tip**: On the AP exam, always check whether the CLT applies by verifying sample size conditions. State: "Since $n = 50 \\geq 30$, the CLT tells us the sampling distribution of $\\bar{x}$ is approximately Normal."`
  },

  'ci-proportions': {
    description: 'Construct and interpret confidence intervals for a population proportion.',
    textContent: `# Confidence Intervals for Proportions

## One-Sample z-Interval for $p$

A **confidence interval** gives a range of plausible values for a population parameter.

$$\\hat{p} \\pm z^* \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$$

where:
- $\\hat{p}$ = sample proportion
- $z^*$ = critical value from the Standard Normal distribution
- $\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$ = **standard error** of $\\hat{p}$

## Common Critical Values

| Confidence Level | $z^*$ |
|-----------------|-------|
| 90% | 1.645 |
| 95% | 1.960 |
| 99% | 2.576 |

## Conditions (Check These!)

1. **Random**: Data comes from a random sample or randomized experiment
2. **10% Condition**: $n < 0.10N$ (sample is less than 10% of population)
3. **Large Counts**: $n\\hat{p} \\geq 10$ and $n(1-\\hat{p}) \\geq 10$

## Interpretation

**Correct**: "We are [C]% confident that the true proportion of [context] is between [lower bound] and [upper bound]."

**Incorrect**: "There is a [C]% probability that $p$ is in this interval." (The parameter is fixed; the interval either contains it or it doesn't.)

## What Does "95% Confident" Mean?

If we repeated the sampling process many times, approximately 95% of the resulting confidence intervals would contain the true population proportion $p$.

## Margin of Error

$$ME = z^* \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$$

The margin of error decreases when:
- $n$ increases (more data)
- Confidence level decreases (narrower interval)

## Determining Sample Size

To achieve a desired margin of error $ME$ with confidence level $z^*$:

$$n = \\left(\\frac{z^*}{ME}\\right)^2 \\hat{p}(1-\\hat{p})$$

If $\\hat{p}$ is unknown, use $\\hat{p} = 0.5$ for the most conservative (largest) sample size.

## Four-Step Process for AP

1. **State**: Identify the parameter and confidence level
2. **Plan**: Name the procedure, check conditions
3. **Do**: Calculate the interval
4. **Conclude**: Interpret in context

> **AP Tip**: You MUST check all three conditions (Random, 10%, Large Counts) and interpret the interval in context to receive full credit on free-response questions.`
  },

  'ci-means': {
    description: 'Construct and interpret confidence intervals for a population mean using the t-distribution.',
    textContent: `# Confidence Intervals for Means

## Why Not z? The t-Distribution

When we estimate a population mean, we usually don't know $\\sigma$, so we estimate it with $s$ (sample standard deviation). This introduces extra uncertainty, so we use the **t-distribution** instead of the Normal distribution.

## One-Sample t-Interval for $\\mu$

$$\\bar{x} \\pm t^* \\frac{s}{\\sqrt{n}}$$

where:
- $\\bar{x}$ = sample mean
- $t^*$ = critical value from the $t$-distribution with $df = n - 1$
- $\\frac{s}{\\sqrt{n}}$ = **standard error** of $\\bar{x}$

## The t-Distribution

Properties:
- Symmetric and bell-shaped (like Normal)
- More spread out than the Normal (heavier tails)
- Characterized by **degrees of freedom** ($df$)
- As $df \\to \\infty$, the $t$-distribution approaches the Normal

## Conditions

1. **Random**: Data from a random sample or randomized experiment
2. **10% Condition**: $n < 0.10N$
3. **Normal/Large Sample**: Population is Normal, OR $n \\geq 30$ (CLT)
   - For $n < 30$: Check for strong skewness or outliers (use graphs)
   - If the sample has extreme outliers, the t-interval is not reliable

## Interpretation

"We are [C]% confident that the true mean [context] is between [lower] and [upper]."

## Paired t-Interval

For **matched pairs** data (before/after, twin studies):
1. Calculate the differences $d_i = x_{1i} - x_{2i}$
2. Apply the one-sample t-interval to the differences

$$\\bar{d} \\pm t^* \\frac{s_d}{\\sqrt{n}}$$

## t-Table Values (Selected)

| df | 90% ($t^*$) | 95% ($t^*$) | 99% ($t^*$) |
|----|------------|------------|------------|
| 5  | 2.015 | 2.571 | 4.032 |
| 10 | 1.812 | 2.228 | 3.169 |
| 20 | 1.725 | 2.086 | 2.845 |
| 30 | 1.697 | 2.042 | 2.750 |
| $\\infty$ | 1.645 | 1.960 | 2.576 |

## Choosing Between z and t

| Situation | Use |
|-----------|-----|
| $\\sigma$ known (rare) | z-interval |
| $\\sigma$ unknown | t-interval |
| Proportion | z-interval |
| Mean | t-interval |

> **AP Tip**: On the AP exam, always use the **t-distribution** for means unless explicitly told $\\sigma$ is known. The z-interval for means is almost never used in practice.`
  },

  'interpreting-ci': {
    description: 'Correctly interpret confidence intervals and understand confidence level meaning.',
    textContent: `# Interpreting Confidence Intervals

## Correct Interpretation

A 95% confidence interval of $(0.42, 0.58)$ for a proportion means:

✅ "We are 95% confident that the true population proportion is between 0.42 and 0.58."

## Incorrect Interpretations

❌ "There is a 95% probability that $p$ is between 0.42 and 0.58."
- The parameter $p$ is a fixed number. It either is or isn't in the interval.

❌ "95% of the data falls between 0.42 and 0.58."
- Confidence intervals are about parameters, not individual data values.

❌ "If we sample again, there's a 95% chance the new $\\hat{p}$ will be in this interval."
- The CI is about where $p$ is, not where future $\\hat{p}$'s will fall.

## What "95% Confidence" Really Means

If we were to take many samples and construct a 95% CI from each one, approximately 95% of those intervals would contain the true parameter.

This is a statement about the **method**, not about any single interval.

## Factors That Affect CI Width

### 1. Confidence Level
- Higher confidence → wider interval
- Lower confidence → narrower interval
- Trade-off: more confidence = less precision

### 2. Sample Size
- Larger $n$ → narrower interval (more precision)
- Width decreases proportionally to $\\frac{1}{\\sqrt{n}}$
- To halve the width, quadruple $n$

### 3. Variability
- More variability in data → wider interval
- Less variability → narrower interval

## Margin of Error

$$\\text{CI} = \\text{point estimate} \\pm \\text{margin of error}$$

The margin of error captures the maximum likely estimation error at the given confidence level.

## Confidence Interval and Hypothesis Test Connection

A 95% CI contains all values of the parameter that would **not** be rejected by a two-sided hypothesis test at $\\alpha = 0.05$.

If a hypothesized value falls:
- **Inside** the CI → fail to reject $H_0$
- **Outside** the CI → reject $H_0$

> **AP Tip**: The AP exam specifically tests whether you can distinguish between correct and incorrect interpretations. Memorize the correct phrasing and practice using it in context.`
  },

  'hypothesis-testing-framework': {
    description: 'Set up hypothesis tests with null and alternative hypotheses, significance level, and p-values.',
    textContent: `# Hypothesis Testing Framework

## The Logic of Hypothesis Testing

1. Assume the **null hypothesis** ($H_0$) is true
2. Collect data and compute a test statistic
3. Determine how likely (or unlikely) the data is under $H_0$
4. Make a decision: reject or fail to reject $H_0$

## Hypotheses

**Null Hypothesis** ($H_0$): The "no effect" or "no difference" claim. Always includes $=$.

**Alternative Hypothesis** ($H_a$): What we're trying to find evidence for.

Types of alternative hypotheses:
- **Two-sided**: $H_a: p \\neq p_0$ or $H_a: \\mu \\neq \\mu_0$
- **One-sided (right)**: $H_a: p > p_0$ or $H_a: \\mu > \\mu_0$
- **One-sided (left)**: $H_a: p < p_0$ or $H_a: \\mu < \\mu_0$

## Significance Level ($\\alpha$)

The **significance level** $\\alpha$ is the threshold for deciding when to reject $H_0$.

Common values: $\\alpha = 0.05$ (most common), $\\alpha = 0.01$, $\\alpha = 0.10$

## Test Statistic

The test statistic measures how far the sample result is from what $H_0$ predicts:

$$\\text{test statistic} = \\frac{\\text{statistic} - \\text{parameter under } H_0}{\\text{standard error}}$$

## P-Value

The **p-value** is the probability of obtaining a test statistic as extreme as (or more extreme than) the observed value, **assuming $H_0$ is true**.

- Small p-value → evidence against $H_0$
- Large p-value → no convincing evidence against $H_0$

## Decision Rule

- If $p\\text{-value} \\leq \\alpha$: **Reject** $H_0$. There is convincing evidence for $H_a$.
- If $p\\text{-value} > \\alpha$: **Fail to reject** $H_0$. There is not convincing evidence for $H_a$.

> **Never say "accept $H_0$"** — we only fail to reject it.

## Statistical Significance

A result is **statistically significant** at level $\\alpha$ if the p-value $\\leq \\alpha$.

Statistical significance ≠ practical significance. A very large sample can detect tiny, meaningless differences.

## Four-Step Process (AP)

1. **State**: Define parameter, state hypotheses, choose $\\alpha$
2. **Plan**: Name the test, check conditions
3. **Do**: Calculate test statistic and p-value
4. **Conclude**: Compare p-value to $\\alpha$, state conclusion in context

> **AP Tip**: Always state your conclusion in context: "Since the p-value of 0.03 is less than $\\alpha = 0.05$, we reject $H_0$. There is convincing evidence that [context about $H_a$]."`
  },

  'type-errors': {
    description: 'Understand Type I and Type II errors, their probabilities, and the concept of power.',
    textContent: `# Type I and Type II Errors

## The Two Types of Errors

| | $H_0$ True | $H_0$ False |
|---|---|---|
| **Reject $H_0$** | Type I Error ❌ | Correct decision ✅ |
| **Fail to reject $H_0$** | Correct decision ✅ | Type II Error ❌ |

### Type I Error (False Positive)
Rejecting $H_0$ when it is actually **true**.

$$P(\\text{Type I Error}) = \\alpha$$

**Example**: Concluding a drug works when it actually doesn't.

### Type II Error (False Negative)
Failing to reject $H_0$ when it is actually **false**.

$$P(\\text{Type II Error}) = \\beta$$

**Example**: Concluding a drug doesn't work when it actually does.

## Consequences in Context

Always describe errors in context on the AP exam:
- Type I: "We would conclude that [Ha in context] when in reality [H0 in context]."
- Type II: "We would fail to find evidence that [Ha in context] when in reality [Ha is true]."

## The Relationship Between $\\alpha$ and $\\beta$

- Decreasing $\\alpha$ → increases $\\beta$ (fewer Type I errors, more Type II errors)
- Increasing $\\alpha$ → decreases $\\beta$ (more Type I errors, fewer Type II errors)
- There's always a trade-off!

## Power

**Power** = probability of correctly rejecting $H_0$ when it is false

$$\\text{Power} = 1 - \\beta = P(\\text{Reject } H_0 | H_0 \\text{ is false})$$

**Higher power = better test** (more likely to detect a real effect)

## Factors That Affect Power

| Factor | Effect on Power |
|--------|----------------|
| Increase $\\alpha$ | ↑ Power (but more Type I errors) |
| Increase $n$ | ↑ Power (more data = better detection) |
| Increase true effect size | ↑ Power (larger difference easier to detect) |
| Decrease $\\sigma$ | ↑ Power (less noise = clearer signal) |

## Choosing $\\alpha$

Consider the consequences:
- If Type I error is very costly → use smaller $\\alpha$ (e.g., 0.01)
- If Type II error is very costly → use larger $\\alpha$ (e.g., 0.10)
- **Medical testing**: Missing a disease (Type II) is often worse → larger $\\alpha$
- **Criminal justice**: Convicting an innocent person (Type I) is worse → smaller $\\alpha$

> **AP Tip**: You will be asked to describe Type I and Type II errors **in context**. Don't just say "rejecting a true null hypothesis" — explain what that means for the specific problem.`
  },

  'tests-proportions': {
    description: 'Perform one-sample and two-sample z-tests for proportions.',
    textContent: `# Significance Tests for Proportions

## One-Sample z-Test for $p$

**Hypotheses**:
- $H_0: p = p_0$
- $H_a: p \\neq p_0$ (or $>$ or $<$)

**Test Statistic**:
$$z = \\frac{\\hat{p} - p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n}}}$$

Note: We use $p_0$ (not $\\hat{p}$) in the standard error because we assume $H_0$ is true.

**Conditions**:
1. **Random** sample or randomized experiment
2. **10% Condition**: $n < 0.10N$
3. **Large Counts**: $np_0 \\geq 10$ and $n(1-p_0) \\geq 10$

## Two-Sample z-Test for $p_1 - p_2$

**Hypotheses**:
- $H_0: p_1 = p_2$ (equivalently, $p_1 - p_2 = 0$)
- $H_a: p_1 \\neq p_2$ (or $>$ or $<$)

**Pooled Proportion** (used because $H_0$ assumes $p_1 = p_2$):
$$\\hat{p}_c = \\frac{x_1 + x_2}{n_1 + n_2}$$

**Test Statistic**:
$$z = \\frac{(\\hat{p}_1 - \\hat{p}_2) - 0}{\\sqrt{\\hat{p}_c(1-\\hat{p}_c)\\left(\\frac{1}{n_1} + \\frac{1}{n_2}\\right)}}$$

**Conditions** (check for BOTH samples):
1. **Random**: Both samples are random/independent
2. **10%**: $n_1 < 0.10N_1$ and $n_2 < 0.10N_2$
3. **Large Counts**: $n_1\\hat{p}_c \\geq 10$, $n_1(1-\\hat{p}_c) \\geq 10$, $n_2\\hat{p}_c \\geq 10$, $n_2(1-\\hat{p}_c) \\geq 10$

## Finding the P-Value

- **Right-tailed** ($H_a: p > p_0$): $P(Z > z)$
- **Left-tailed** ($H_a: p < p_0$): $P(Z < z)$
- **Two-tailed** ($H_a: p \\neq p_0$): $2 \\cdot P(Z > |z|)$

## Two-Sample z-Interval for $p_1 - p_2$

$$( \\hat{p}_1 - \\hat{p}_2 ) \\pm z^* \\sqrt{\\frac{\\hat{p}_1(1-\\hat{p}_1)}{n_1} + \\frac{\\hat{p}_2(1-\\hat{p}_2)}{n_2}}$$

Note: For the CI, we do NOT pool — we use each sample's $\\hat{p}$.

> **AP Tip**: For tests, use the **pooled proportion** $\\hat{p}_c$. For confidence intervals, use the **individual** sample proportions. This is a common source of errors.`
  },

  'tests-means': {
    description: 'Perform one-sample and two-sample t-tests for means.',
    textContent: `# Significance Tests for Means

## One-Sample t-Test for $\\mu$

**Hypotheses**:
- $H_0: \\mu = \\mu_0$
- $H_a: \\mu \\neq \\mu_0$ (or $>$ or $<$)

**Test Statistic**:
$$t = \\frac{\\bar{x} - \\mu_0}{s / \\sqrt{n}}$$

**Degrees of freedom**: $df = n - 1$

**Conditions**:
1. **Random** sample or randomized experiment
2. **10% Condition**: $n < 0.10N$
3. **Normal/Large Sample**: Population is Normal, or $n \\geq 30$ (CLT), or graph shows no strong skewness/outliers

## Two-Sample t-Test for $\\mu_1 - \\mu_2$

**Hypotheses**:
- $H_0: \\mu_1 = \\mu_2$ (equivalently, $\\mu_1 - \\mu_2 = 0$)
- $H_a: \\mu_1 \\neq \\mu_2$ (or $>$ or $<$)

**Test Statistic**:
$$t = \\frac{(\\bar{x}_1 - \\bar{x}_2) - 0}{\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}}$$

**Degrees of freedom**: Use the calculator's value (Welch's approximation), or conservatively use $df = \\min(n_1 - 1, n_2 - 1)$.

**Conditions** (check for BOTH samples):
1. **Random**: Both samples are independently random
2. **10%**: Both $n_1 < 0.10N_1$ and $n_2 < 0.10N_2$
3. **Normal/Large Sample**: Both populations Normal, or both $n \\geq 30$

## Two-Sample t-Interval for $\\mu_1 - \\mu_2$

$$(\\bar{x}_1 - \\bar{x}_2) \\pm t^* \\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}$$

## Paired t-Test

For matched pairs or before/after data:
1. Compute differences: $d_i = x_{1i} - x_{2i}$
2. Apply one-sample t-test to the differences

$$t = \\frac{\\bar{d} - 0}{s_d / \\sqrt{n}}$$

with $df = n - 1$ (number of pairs minus 1)

## Important Notes

- **Do not pool** standard deviations for the two-sample t-test (pooled t-test is rarely used)
- The two samples must be **independent** of each other
- If subjects are matched or measured twice, use the **paired t-test**

## Summary: Which Test?

| Situation | Test |
|-----------|------|
| One sample, unknown $\\sigma$ | One-sample t-test |
| Two independent samples | Two-sample t-test |
| Matched pairs | Paired t-test |
| One proportion | One-sample z-test |
| Two proportions | Two-sample z-test |

> **AP Tip**: On the AP exam, always use the t-test for means (not z-test). Show all four steps: State, Plan, Do, Conclude.`
  },

  'paired-data': {
    description: 'Analyze paired data using the paired t-test and matched pairs designs.',
    textContent: `# Paired Data

## When to Use Paired Analysis

Use a **paired t-test** when:
- The same subjects are measured **twice** (before/after)
- Subjects are **matched** in pairs based on similar characteristics
- Each observation in one group has a natural pairing with an observation in the other group

## Setting Up the Paired t-Test

1. **Calculate differences**: $d_i = x_{\\text{after}} - x_{\\text{before}}$ (or $d_i = x_{1i} - x_{2i}$)
2. **State hypotheses about the mean difference $\\mu_d$**:
   - $H_0: \\mu_d = 0$ (no difference on average)
   - $H_a: \\mu_d \\neq 0$ (or $>$ or $<$)

3. **Compute**:
$$\\bar{d} = \\frac{\\sum d_i}{n}, \\quad s_d = \\sqrt{\\frac{\\sum(d_i - \\bar{d})^2}{n-1}}$$

4. **Test statistic**:
$$t = \\frac{\\bar{d} - 0}{s_d / \\sqrt{n}}, \\quad df = n - 1$$

## Conditions for Paired t-Test

1. **Random**: Pairs are randomly selected or treatments randomly assigned within pairs
2. **10%**: Number of pairs $< 10\\%$ of all possible pairs
3. **Normal**: The **differences** are approximately Normal (check with graph of differences)

## Paired t-Confidence Interval

$$\\bar{d} \\pm t^* \\frac{s_d}{\\sqrt{n}}$$

## Paired vs. Two-Sample: How to Decide

| Feature | Paired | Two-Sample |
|---------|--------|------------|
| Data structure | Natural pairing exists | Independent groups |
| Examples | Before/after, twins, left/right | Men vs. women, drug vs. placebo (different people) |
| Analyze | Differences | Separate groups |
| Advantage | Controls for subject variability | Simpler design |

## Why Pairing Helps

Pairing **reduces variability** by controlling for individual differences. Each subject serves as their own control, so person-to-person variation is removed.

**Example**: Testing a new study method
- **Paired design**: Same students take two tests (before and after method)
- **Two-sample design**: Different students use different methods
- The paired design is more powerful because it eliminates student-to-student variability

## Common Mistakes

1. Using a two-sample test when data is paired
2. Forgetting to check Normality of the **differences** (not the original data)
3. Computing differences inconsistently (always subtract in the same direction)

> **AP Tip**: If the data has a natural pairing, you MUST use a paired t-test. Using a two-sample t-test on paired data is incorrect and will cost points.`
  },

  'chi-square-tests': {
    description: 'Perform chi-square tests for goodness of fit, homogeneity, and independence.',
    textContent: `# Chi-Square Tests

## Overview

Chi-square ($\\chi^2$) tests are used for **categorical data**. There are three types:

| Test | Purpose |
|------|---------|
| Goodness of Fit | Does a distribution match a claimed distribution? |
| Homogeneity | Do different populations have the same distribution? |
| Independence | Are two categorical variables independent? |

## Chi-Square Test Statistic

$$\\chi^2 = \\sum \\frac{(\\text{Observed} - \\text{Expected})^2}{\\text{Expected}}$$

Always calculated the same way for all three tests.

## 1. Goodness of Fit Test

**Purpose**: Test whether a categorical variable follows a specified distribution.

**Hypotheses**:
- $H_0$: The data follows the specified distribution
- $H_a$: The data does not follow the specified distribution

**Degrees of freedom**: $df = k - 1$ (where $k$ = number of categories)

**Expected counts**: $E_i = n \\cdot p_i$ (sample size × hypothesized proportion)

## 2. Test for Homogeneity

**Purpose**: Test whether the distribution of a categorical variable is the same across different populations.

**Hypotheses**:
- $H_0$: The distributions are the same for all populations
- $H_a$: The distributions are not all the same

**Degrees of freedom**: $df = (r-1)(c-1)$

**Expected counts**: $E = \\frac{\\text{row total} \\times \\text{column total}}{\\text{grand total}}$

## 3. Test for Independence

**Purpose**: Test whether two categorical variables are independent within a single population.

**Hypotheses**:
- $H_0$: The two variables are independent
- $H_a$: The two variables are not independent

**Degrees of freedom**: $df = (r-1)(c-1)$

**Expected counts**: Same formula as homogeneity

## Conditions for All Chi-Square Tests

1. **Random**: Data from a random sample or randomized experiment
2. **10%**: $n < 0.10N$
3. **Large Counts**: All expected counts $\\geq 5$

## Properties of the Chi-Square Distribution

- Always $\\geq 0$
- Right-skewed (becomes less skewed as $df$ increases)
- P-value is always from the **right tail**
- Different shape for each $df$

## Follow-Up Analysis

If you reject $H_0$, identify which cells contribute most to $\\chi^2$ by examining:
$$\\frac{(O - E)^2}{E}$$
for each cell. Large contributions indicate where the biggest discrepancies are.

> **AP Tip**: Chi-square tests are ALWAYS right-tailed. There is no "left-tailed" or "two-tailed" chi-square test. Show expected counts and verify they are all ≥ 5.`
  },

  'scatterplots-correlation': {
    description: 'Create scatterplots and calculate the correlation coefficient r to describe linear relationships.',
    textContent: `# Scatterplots and Correlation

## Scatterplots

A **scatterplot** displays the relationship between two quantitative variables. Each point represents one individual.

- **Explanatory variable** ($x$): plotted on the horizontal axis
- **Response variable** ($y$): plotted on the vertical axis

## Describing Scatterplots (DOFS)

1. **Direction**: Positive, negative, or no association
2. **Outliers**: Unusual points
3. **Form**: Linear, curved, clusters
4. **Strength**: Weak, moderate, strong

## Correlation Coefficient ($r$)

The **correlation** $r$ measures the strength and direction of a **linear** relationship.

$$r = \\frac{1}{n-1} \\sum \\left(\\frac{x_i - \\bar{x}}{s_x}\\right)\\left(\\frac{y_i - \\bar{y}}{s_y}\\right)$$

## Properties of $r$

1. $-1 \\leq r \\leq 1$
2. $r > 0$: positive association
3. $r < 0$: negative association
4. $|r|$ close to 1: strong linear relationship
5. $|r|$ close to 0: weak or no linear relationship
6. $r$ has **no units** (dimensionless)
7. $r$ is not affected by changes in units (adding, multiplying)
8. $r$ is the same regardless of which variable is $x$ or $y$

## Interpreting $r$

| $|r|$ | Strength |
|-------|----------|
| 0.8 – 1.0 | Strong |
| 0.5 – 0.8 | Moderate |
| 0.0 – 0.5 | Weak |

## Cautions About Correlation

1. **Correlation ≠ Causation**: Association does not imply cause-and-effect
2. $r$ only measures **linear** relationships (a curved pattern may have $r \\approx 0$)
3. $r$ is sensitive to **outliers**
4. $r$ should only be used for **quantitative** variables
5. Always **look at the scatterplot** — don't rely on $r$ alone

## Influential Points

An **influential point** substantially changes the regression line or correlation when removed.

- Points with extreme $x$-values are often influential
- **Outliers** may or may not be influential

> **AP Tip**: Always plot the data before calculating $r$. The correlation coefficient can be misleading without seeing the actual pattern (recall Anscombe's quartet).`
  },

  'least-squares-regression': {
    description: 'Find and interpret the least-squares regression line (LSRL) and make predictions.',
    textContent: `# Least-Squares Regression

## The Regression Line

The **least-squares regression line (LSRL)** is the line that minimizes the sum of squared residuals:

$$\\hat{y} = a + bx$$

where:
- $\\hat{y}$ = predicted value of $y$
- $b$ = slope
- $a$ = y-intercept

## Computing the LSRL

**Slope**:
$$b = r \\cdot \\frac{s_y}{s_x}$$

**Y-intercept**:
$$a = \\bar{y} - b\\bar{x}$$

The LSRL always passes through the point $(\\bar{x}, \\bar{y})$.

## Interpreting the Slope

"For each additional [unit of x], the predicted [y variable] changes by [b] [units of y]."

**Example**: If $\\hat{y} = 2.5 + 0.8x$ where $x$ = study hours and $y$ = exam score:
"For each additional hour of studying, the predicted exam score increases by 0.8 points."

## Interpreting the Y-Intercept

"When [x variable] = 0, the predicted [y variable] is [a] [units]."

**Caution**: The y-intercept often doesn't have practical meaning (e.g., 0 hours of studying may not make sense in context).

## Making Predictions

Substitute the $x$-value into the equation to get $\\hat{y}$.

## Extrapolation

**Extrapolation** = predicting $y$ for $x$-values outside the range of the data. This is **dangerous** because the linear pattern may not continue.

## Residuals

$$\\text{residual} = y - \\hat{y} = \\text{observed} - \\text{predicted}$$

- Positive residual: actual > predicted (point above line)
- Negative residual: actual < predicted (point below line)
- $\\sum \\text{residuals} = 0$ for the LSRL

## Properties of LSRL

1. Minimizes $\\sum(y_i - \\hat{y}_i)^2$
2. Passes through $(\\bar{x}, \\bar{y})$
3. Sum of residuals = 0
4. $r$ and $b$ have the same sign
5. Regression toward the mean: predicted values are closer to $\\bar{y}$ than observed values

> **AP Tip**: When interpreting slope, always use "predicted" — not "will increase by." The relationship is an estimate, not a guarantee.`
  },

  'residuals-residual-plots': {
    description: 'Analyze residual plots to assess the fit of a regression model.',
    textContent: `# Residuals and Residual Plots

## What Are Residuals?

$$\\text{residual} = y - \\hat{y} = \\text{observed} - \\text{predicted}$$

A residual measures how far each observation is from the regression line.

## Residual Plots

A **residual plot** graphs residuals (vertical axis) against the explanatory variable $x$ or the predicted values $\\hat{y}$ (horizontal axis).

## Interpreting Residual Plots

### Good Fit (Linear Model Appropriate)
- Points scattered **randomly** around the horizontal line $y = 0$
- No obvious pattern
- Roughly equal spread throughout

### Curved Pattern
- Indicates the relationship is **not linear**
- A curved model (quadratic, exponential, etc.) may be more appropriate
- Consider transforming the data

### Fan Shape (Heteroscedasticity)
- Spread of residuals **increases** (or decreases) as $x$ increases
- Indicates **non-constant variability**
- May need a transformation

### Outliers in Residuals
- Points with **large residuals** (far from 0) are regression outliers
- These may indicate unusual observations worth investigating

## Using Residual Plots to Assess Models

| Residual Plot Pattern | Assessment |
|----------------------|------------|
| Random scatter | Linear model is appropriate ✅ |
| Curved pattern | Need a nonlinear model ❌ |
| Fan/funnel shape | Non-constant variance ❌ |
| Clusters | Possibly missing a variable |

## Standard Deviation of Residuals ($s$)

$$s = \\sqrt{\\frac{\\sum(y_i - \\hat{y}_i)^2}{n - 2}}$$

**Interpretation**: "The actual [y-values] typically differ from the values predicted by the LSRL by about $s$ [units]."

We divide by $n - 2$ because we estimated two parameters ($a$ and $b$).

## Key Properties of Residuals

1. The mean of residuals is always 0: $\\bar{e} = 0$
2. The residuals have no linear relationship with $x$
3. The sum of squared residuals is minimized by the LSRL

> **AP Tip**: On the AP exam, when asked "Is a linear model appropriate?", always refer to the **residual plot** (not the scatterplot or $r$). A residual plot showing random scatter indicates the linear model is appropriate.`
  },

  'coefficient-determination': {
    description: 'Interpret r² as the proportion of variability explained by the regression model.',
    textContent: `# Coefficient of Determination ($r^2$)

## Definition

$$r^2 = \\text{(correlation coefficient)}^2$$

$r^2$ measures the **proportion of variability** in the response variable ($y$) that is explained by the linear relationship with the explanatory variable ($x$).

## Interpretation

"$r^2 \\times 100\\%$ of the variability in [y variable] is explained by the linear relationship with [x variable]."

**Example**: If $r = 0.85$, then $r^2 = 0.7225$.
"72.25% of the variability in exam scores is explained by the linear relationship with hours studied."

## Understanding $r^2$ Visually

$r^2$ compares two models:
1. **No model**: Use $\\bar{y}$ to predict every observation (total variability = $\\sum(y_i - \\bar{y})^2$)
2. **Regression model**: Use $\\hat{y} = a + bx$ (remaining variability = $\\sum(y_i - \\hat{y}_i)^2$)

$$r^2 = 1 - \\frac{\\sum(y_i - \\hat{y}_i)^2}{\\sum(y_i - \\bar{y})^2} = 1 - \\frac{SS_{\\text{residual}}}{SS_{\\text{total}}}$$

## Properties of $r^2$

1. $0 \\leq r^2 \\leq 1$
2. $r^2 = 1$: Perfect linear fit (all points on the line)
3. $r^2 = 0$: No linear relationship
4. Higher $r^2$ = better linear model fit
5. $r^2$ doesn't tell you about the direction (use $r$ for that)

## What $r^2$ Doesn't Tell You

1. Whether the relationship is truly linear (check residual plot)
2. Whether there is causation
3. Whether extrapolation is valid
4. Whether there are influential points

## $r^2$ in Context

| $r^2$ | Quality of Linear Fit |
|-------|----------------------|
| 0.90+ | Excellent |
| 0.70–0.90 | Good |
| 0.50–0.70 | Moderate |
| Below 0.50 | Weak |

## Connection to Regression Output

In computer regression output, $r^2$ is often labeled:
- "R-sq" or "R-squared"
- "Coefficient of determination"
- The square root gives $|r|$ (check the slope for sign)

> **AP Tip**: The most common error is confusing $r$ and $r^2$. Remember: $r$ is the correlation (direction + strength), and $r^2$ is the proportion of variability explained. Always interpret $r^2$ as a percentage in context.`
  },

  'transformations-linearity': {
    description: 'Use power, logarithmic, and exponential transformations to achieve linearity.',
    textContent: `# Transformations to Achieve Linearity

## Why Transform?

When the relationship between $x$ and $y$ is **not linear**, we can transform one or both variables to make the relationship linear. This allows us to use linear regression methods.

## Common Nonlinear Patterns

### Exponential Growth: $y = ab^x$

Take the **logarithm of y**:
$$\\ln(y) = \\ln(a) + x \\cdot \\ln(b)$$

This is linear in $x$ vs. $\\ln(y)$.

### Power Model: $y = ax^b$

Take the **logarithm of both x and y**:
$$\\ln(y) = \\ln(a) + b \\cdot \\ln(x)$$

This is linear in $\\ln(x)$ vs. $\\ln(y)$.

## Steps for Transformation

1. **Examine the scatterplot**: Identify the type of curve
2. **Apply the appropriate transformation**
3. **Check the residual plot**: Should show random scatter
4. **Check $r^2$**: Should be high
5. **Write the model**: In transformed and original form

## Logarithmic Transformation Summary

| Original Model | Transform | Linear Form |
|----------------|-----------|-------------|
| $y = ab^x$ (exponential) | $\\ln(y)$ | $\\ln(y) = \\ln(a) + (\\ln b)x$ |
| $y = ax^b$ (power) | $\\ln(x)$ and $\\ln(y)$ | $\\ln(y) = \\ln(a) + b \\cdot \\ln(x)$ |

## Making Predictions with Transformed Models

After fitting a model to $\\ln(y)$:
1. Find $\\widehat{\\ln(y)}$ using the regression equation
2. **Back-transform**: $\\hat{y} = e^{\\widehat{\\ln(y)}}$

## Example: Exponential Model

Data suggests exponential growth. After plotting $x$ vs. $\\ln(y)$:

Regression: $\\widehat{\\ln(y)} = 1.2 + 0.5x$

To predict $y$ when $x = 3$:
1. $\\widehat{\\ln(y)} = 1.2 + 0.5(3) = 2.7$
2. $\\hat{y} = e^{2.7} \\approx 14.88$

## Evaluating the Transformation

A good transformation produces:
- A **linear** scatterplot (in the transformed variables)
- A **random** residual plot
- A **high** $r^2$ value
- A **reasonable** model in context

## Square Root Transformation

Sometimes $\\sqrt{y}$ vs. $x$ works well for count data or data where variability increases with the mean.

> **AP Tip**: On the AP exam, you may be given transformed data and asked to interpret the regression. Be comfortable going back and forth between $\\ln(y)$ and $y$ using the exponential function.`
  },

  'inference-regression': {
    description: 'Perform inference for the slope of a regression line using t-tests and confidence intervals.',
    textContent: `# Inference for Regression

## The Regression Model

The population regression line:
$$\\mu_y = \\alpha + \\beta x$$

We estimate this with the sample regression line:
$$\\hat{y} = a + bx$$

The key question: **Is there a significant linear relationship?** (Is $\\beta \\neq 0$?)

## Conditions for Regression Inference

**LINE conditions**:
- **L**inear: The true relationship is linear (check residual plot)
- **I**ndependent: Observations are independent (10% condition)
- **N**ormal: For each value of $x$, the responses are Normally distributed (check Normal probability plot of residuals)
- **E**qual variance: The standard deviation of $y$ is the same for all $x$ (check residual plot for constant spread)

## Hypothesis Test for the Slope

**Hypotheses**:
- $H_0: \\beta = 0$ (no linear relationship)
- $H_a: \\beta \\neq 0$ (there is a linear relationship)

**Test Statistic**:
$$t = \\frac{b - 0}{SE_b}$$

where $SE_b = \\frac{s}{\\sqrt{\\sum(x_i - \\bar{x})^2}}$ and $s = \\sqrt{\\frac{\\sum(y_i - \\hat{y}_i)^2}{n-2}}$

**Degrees of freedom**: $df = n - 2$

## Confidence Interval for $\\beta$

$$b \\pm t^* \\cdot SE_b$$

with $df = n - 2$

**Interpretation**: "We are [C]% confident that the true slope of the relationship between [x] and [y] is between [lower] and [upper]."

## Reading Computer Output

A typical regression output includes:

| | Coef | SE Coef | T | P |
|---|---|---|---|---|
| Constant | $a$ | $SE_a$ | $t_a$ | $p_a$ |
| [x variable] | $b$ | $SE_b$ | $t_b$ | $p_b$ |

$S = $ [standard deviation of residuals]
$R\\text{-}sq = $ [$r^2$ value]

The row for the **x-variable** gives you everything you need:
- $b$ = slope estimate
- $SE_b$ = standard error of slope
- $t$ = test statistic for $H_0: \\beta = 0$
- $P$ = p-value for the test

## Interpreting Regression Output

1. **Slope** ($b$): For each 1-unit increase in $x$, the predicted $y$ changes by $b$ units
2. **Standard error** ($SE_b$): Measures the precision of the slope estimate
3. **t-statistic**: How many SEs the slope is from 0
4. **P-value**: Probability of observing this slope (or more extreme) if $\\beta = 0$

## Example Conclusion

"Since the p-value of 0.002 is less than $\\alpha = 0.05$, we reject $H_0$. There is convincing evidence of a linear relationship between [x] and [y]."

> **AP Tip**: You MUST be able to read computer regression output. Practice identifying $b$, $SE_b$, $t$, $p$, $s$, and $r^2$ from output tables. Also, always check LINE conditions before doing inference.`
  }
}

async function main() {
  console.log('📊 Filling AP Statistics content — Batch 2 (Probability + CI + Hypothesis Testing + Regression)...\n')
  let count = 0
  for (const [slug, data] of Object.entries(topicContent)) {
    try {
      await prisma.topic.update({
        where: { slug },
        data: { textContent: data.textContent, description: data.description }
      })
      console.log('  ✅ ' + slug)
      count++
    } catch (e: any) {
      console.log('  ❌ ' + slug + ': ' + e.message)
    }
  }
  console.log('\n🎉 Updated ' + count + ' topics')
}

main().catch(console.error).finally(() => prisma.$disconnect())
