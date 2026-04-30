import { PrismaClient, Difficulty } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Statistics new CED topics...');

  // Get course
  const course = await prisma.course.findUnique({
    where: { slug: 'ap-statistics' },
    include: { categories: true },
  });

  if (!course) {
    throw new Error('AP Statistics course not found');
  }

  // Build category map by slug
  const categoryMap: Record<string, string> = {};
  for (const cat of course.categories) {
    categoryMap[cat.slug] = cat.id;
  }

  const topicsData = [
    {
      categorySlug: 'probability',
      slug: 'mean-sd-random-variables',
      title: 'Mean and Standard Deviation of a Discrete Random Variable',
      description:
        'Compute and interpret the expected value, variance, and standard deviation of a discrete random variable from its probability distribution.',
      order: 5,
      textContent: `# 📊 Mean and Standard Deviation of a Discrete Random Variable

When working with a discrete random variable $X$, the **expected value** (or mean) $\\mu = E(X)$ and the **standard deviation** $\\sigma$ summarize the center and spread of the probability distribution. These measures are essential for understanding long-run behavior and making predictions about random outcomes.

## The Expected Value (Mean)

The expected value of a discrete random variable $X$ is the long-run average value. It is computed as:

$$E(X) = \\mu = \\sum_{i} x_i \\cdot P(X = x_i)$$

This is a weighted average where each value $x_i$ is weighted by its probability. If you repeat the random experiment many times, the average of observed values approaches $E(X)$.

## Variance and Standard Deviation

**Variance** measures the average squared deviation from the mean:

$$\\text{Var}(X) = \\sigma^2 = E[(X - \\mu)^2] = E(X^2) - [E(X)]^2$$

The second formula, $E(X^2) - [E(X)]^2$, is often easier to compute:
- Compute $E(X^2) = \\sum x_i^2 \\cdot P(X = x_i)$
- Subtract $[E(X)]^2$

**Standard Deviation** is the square root of variance:

$$\\sigma = \\sqrt{\\text{Var}(X)}$$

Standard deviation measures spread in the same units as $X$, making it more interpretable than variance.

## Key Interpretations

- **Small $\\sigma$**: Values cluster near the mean; outcomes are predictable.
- **Large $\\sigma$**: Values spread far from the mean; outcomes are highly variable.
- **Rule of Thumb**: In many distributions, roughly 68% of values fall within $\\mu \\pm \\sigma$.

## Worked Example: Discrete Probability Distribution

Consider a discrete random variable $X$ representing the payout (in dollars) from a lottery ticket with the following distribution:

| $X$ | $P(X)$ |
|-----|--------|
| 0   | 0.90   |
| 5   | 0.07   |
| 20  | 0.02   |
| 100 | 0.01   |

**Step 1: Calculate $E(X)$**

$$E(X) = 0(0.90) + 5(0.07) + 20(0.02) + 100(0.01) = 0 + 0.35 + 0.40 + 1.00 = 1.75$$

So the expected payout is \$1.75 per ticket.

**Step 2: Calculate $E(X^2)$**

$$E(X^2) = 0^2(0.90) + 5^2(0.07) + 20^2(0.02) + 100^2(0.01) = 0 + 1.75 + 8.00 + 100 = 109.75$$

**Step 3: Calculate Variance**

$$\\text{Var}(X) = E(X^2) - [E(X)]^2 = 109.75 - (1.75)^2 = 109.75 - 3.0625 = 106.6875$$

**Step 4: Calculate Standard Deviation**

$$\\sigma = \\sqrt{106.6875} \\approx 10.33$$

Most tickets return \$0 or a modest prize, but the rare \$100 win creates high variability (SD ≈ \$10.33).

## Second Example: Fair Die Roll

Roll a fair six-sided die; let $X$ be the outcome (1–6).

- $E(X) = 1 \\cdot \\frac{1}{6} + 2 \\cdot \\frac{1}{6} + \\cdots + 6 \\cdot \\frac{1}{6} = \\frac{21}{6} = 3.5$
- $E(X^2) = 1 \\cdot \\frac{1}{6} + 4 \\cdot \\frac{1}{6} + \\cdots + 36 \\cdot \\frac{1}{6} = \\frac{91}{6} \\approx 15.167$
- $\\text{Var}(X) = 15.167 - (3.5)^2 = 15.167 - 12.25 = 2.917$
- $\\sigma = \\sqrt{2.917} \\approx 1.71$

## Common Pitfalls

> ⚠️ **Variance vs. Standard Deviation Confusion**: Variance is in squared units (e.g., dollars²), while standard deviation is in the original units (dollars). Always report standard deviation when describing spread. Also, don't forget to take the square root of $E(X^2) - [E(X)]^2$ to get $\\sigma$.

> ⚠️ **Probability Must Sum to 1**: Before calculating, verify that $\\sum P(X = x_i) = 1$. If not, you have an error in your probability table.

> ⚠️ **Expected Value ≠ Most Likely Value**: The expected value is a weighted average and may not be a value the random variable can actually take. For the die, $E(X) = 3.5$ is not an outcome.

## Calculator Tip

> 💡 **TI-84 / TI-Nspire**: Enter values in L1 and probabilities in L2. Use **1-Var Stats L1, L2** (with frequency list L2) to compute mean and standard deviation directly. The calculator uses the given probabilities as weights.`,
      examples: [
        {
          question:
            'A discrete random variable $X$ has distribution: $P(X=1) = 0.2$, $P(X=3) = 0.5$, $P(X=5) = 0.3$. Compute $E(X)$ and $\\sigma(X)$.',
          solution: `**Step 1: Calculate $E(X)$**
$$E(X) = 1(0.2) + 3(0.5) + 5(0.3) = 0.2 + 1.5 + 1.5 = 3.2$$

**Step 2: Calculate $E(X^2)$**
$$E(X^2) = 1^2(0.2) + 3^2(0.5) + 5^2(0.3) = 0.2 + 4.5 + 7.5 = 12.2$$

**Step 3: Calculate Variance**
$$\\text{Var}(X) = 12.2 - (3.2)^2 = 12.2 - 10.24 = 1.96$$

**Step 4: Calculate Standard Deviation**
$$\\sigma = \\sqrt{1.96} = 1.4$$

**Answer:** $E(X) = 3.2$ and $\\sigma(X) = 1.4$.`,
          difficulty: 'EASY' as Difficulty,
        },
        {
          question:
            'A spinner shows payoffs: \$0 with probability 0.6, \$10 with probability 0.3, and \$50 with probability 0.1. Find the mean and standard deviation of the payout.',
          solution: `**Calculate $E(X)$:**
$$E(X) = 0(0.6) + 10(0.3) + 50(0.1) = 0 + 3 + 5 = 8$$

**Calculate $E(X^2)$:**
$$E(X^2) = 0^2(0.6) + 10^2(0.3) + 50^2(0.1) = 0 + 30 + 250 = 280$$

**Variance:**
$$\\text{Var}(X) = 280 - 8^2 = 280 - 64 = 216$$

**Standard Deviation:**
$$\\sigma = \\sqrt{216} \\approx 14.70$$

The mean payout is \$8, but with high variability ($\\sigma \\approx$ \$14.70) due to the rare but substantial \$50 outcome.`,
          difficulty: 'MEDIUM' as Difficulty,
        },
        {
          question:
            'For a geometric random variable with success probability $p = 0.4$ (number of trials until first success), verify that $\\mu = 1/p = 2.5$ by computing $E(X)$ directly from the first few terms of the geometric series (round to 2 decimals). Also compute $\\sigma$.',
          solution: `For a geometric distribution, $P(X = k) = (1-p)^{k-1} \\cdot p$ for $k = 1, 2, 3, \\ldots$ with $p = 0.4$ and $1-p = 0.6$.

**Compute $E(X)$ from first few terms:**
$$E(X) = 1(0.4) + 2(0.6)(0.4) + 3(0.6)^2(0.4) + 4(0.6)^3(0.4) + \\cdots$$
$$= 0.4 + 0.48 + 0.432 + 0.3456 + \\cdots$$
$$\\approx 2.50 (converges to 1/0.4 = 2.5)$$

**For geometric distribution, variance and standard deviation:**
$$\\sigma^2 = \\frac{1-p}{p^2} = \\frac{0.6}{0.16} = 3.75$$
$$\\sigma = \\sqrt{3.75} \\approx 1.94$$

This shows high relative variability: $\\sigma/\\mu \\approx 1.94/2.5 \\approx 0.78$, reflecting the unpredictability of when the first success occurs.`,
          difficulty: 'HARD' as Difficulty,
        },
      ],
      flashcards: [
        {
          front: 'What is the expected value of a discrete random variable $X$?',
          back:
            'The expected value is $E(X) = \\sum x_i \\cdot P(X = x_i)$, the weighted average of all possible values.',
        },
        {
          front: 'What formula is often easier for computing variance than $E[(X-\\mu)^2]$?',
          back: 'Use $\\text{Var}(X) = E(X^2) - [E(X)]^2$.',
        },
        {
          front: 'Why is standard deviation preferred over variance for interpretation?',
          back:
            'Standard deviation is in the same units as the original random variable, making it more intuitive; variance is in squared units.',
        },
        {
          front: 'Can the expected value of a discrete random variable equal a value that $X$ cannot actually take?',
          back:
            'Yes. For example, rolling a fair die has $E(X) = 3.5$, which is not a possible outcome.',
        },
        {
          front: 'If all values of $X$ are equal (e.g., $X = 5$ always), what is $\\sigma(X)$?',
          back: '$\\sigma(X) = 0$ because there is no variability; the distribution is degenerate.',
        },
        {
          front: 'How do you interpret a small standard deviation in a probability distribution?',
          back:
            'A small $\\sigma$ indicates that outcomes cluster near the mean; the random variable is predictable with low variability.',
        },
        {
          front: 'In a probability distribution table, what condition must always be satisfied?',
          back:
            'The sum of all probabilities must equal 1: $\\sum P(X = x_i) = 1$.',
        },
        {
          front: 'If $E(X) = 10$ and $E(X^2) = 110$, what is $\\text{Var}(X)$?',
          back:
            '$\\text{Var}(X) = 110 - 10^2 = 110 - 100 = 10$.',
        },
        {
          front: 'What does it mean if $\\sigma$ is twice as large for distribution A as for distribution B?',
          back:
            'Distribution A has roughly twice the spread; outcomes in A are more dispersed around the mean than in B.',
        },
        {
          front: 'For a discrete random variable, how is $E(X^2)$ calculated?',
          back:
            '$E(X^2) = \\sum x_i^2 \\cdot P(X = x_i)$—each squared value is weighted by its probability and summed.',
        },
      ],
    },

    {
      categorySlug: 'probability',
      slug: 'combining-random-variables',
      title: 'Combining Random Variables (Sums and Differences)',
      description:
        'Apply rules for the mean and variance of sums/differences of independent random variables, including linear transformations aX + b.',
      order: 6,
      textContent: `# ➕ Combining Random Variables (Sums and Differences)

Often in statistics, we work with linear combinations of random variables. For example, total profit might be the sum of profits from two stores, or net gain might be a difference. Understanding how means and variances combine under these operations is critical for inference and prediction.

## Linear Transformations: $aX + b$

For a random variable $X$ with mean $\\mu_X$ and standard deviation $\\sigma_X$, any linear transformation $Y = aX + b$ has:

$$E(Y) = E(aX + b) = aE(X) + b = a\\mu_X + b$$

$$\\text{Var}(Y) = \\text{Var}(aX + b) = a^2 \\text{Var}(X) = a^2 \\sigma_X^2$$

$$\\sigma_Y = |a| \\sigma_X$$

**Key insight:** Adding/subtracting a constant shifts the mean but does NOT change the variance or standard deviation. Multiplying by a constant $a$ scales both mean and variability; the standard deviation scales by $|a|$.

## Sums and Differences of Two Independent Variables

For **independent** random variables $X$ and $Y$:

$$E(X + Y) = E(X) + E(Y) = \\mu_X + \\mu_Y$$

$$E(X - Y) = E(X) - E(Y) = \\mu_X - \\mu_Y$$

$$\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y) = \\sigma_X^2 + \\sigma_Y^2$$

$$\\text{Var}(X - Y) = \\text{Var}(X) + \\text{Var}(Y) = \\sigma_X^2 + \\sigma_Y^2$$

Note: Variance **adds** for both sums and differences (the variance of $X - Y$ is the same as for $X + Y$).

$$\\sigma_{X \\pm Y} = \\sqrt{\\sigma_X^2 + \\sigma_Y^2}$$

## Weighted Sums and Multiple Variables

For independent variables $X_1, X_2, \\ldots, X_n$:

$$E(c_1 X_1 + c_2 X_2 + \\cdots + c_n X_n) = c_1 \\mu_1 + c_2 \\mu_2 + \\cdots + c_n \\mu_n$$

$$\\text{Var}(c_1 X_1 + c_2 X_2 + \\cdots + c_n X_n) = c_1^2 \\sigma_1^2 + c_2^2 \\sigma_2^2 + \\cdots + c_n^2 \\sigma_n^2$$

## Conditions for Independence

These rules **require independence**. If variables are dependent (e.g., high values of $X$ tend to occur with high values of $Y$), the variance formula must account for covariance, which is beyond the AP Statistics scope.

## Worked Example 1: Linear Transformation

A store's daily revenue is $R = 50P + 200$, where $P$ is the number of items sold. Suppose $E(P) = 100$ and $\\sigma(P) = 20$.

**Find $E(R)$ and $\\sigma(R)$:**

$$E(R) = 50 \\cdot 100 + 200 = 5000 + 200 = 5200$$

$$\\sigma(R) = |50| \\cdot 20 = 1000$$

The mean revenue is \$5200 per day, with standard deviation of \$1000. Multiplying by 50 scaled the variability proportionally.

## Worked Example 2: Sum of Independent Variables

Two independent vending machines have daily revenues: Machine 1 with $\\mu_1 = 100$, $\\sigma_1 = 15$; Machine 2 with $\\mu_2 = 120$, $\\sigma_2 = 20$. Let $T = R_1 + R_2$ be the total.

**Mean of sum:**
$$E(T) = 100 + 120 = 220$$

**Variance of sum:**
$$\\text{Var}(T) = 15^2 + 20^2 = 225 + 400 = 625$$

**Standard deviation of sum:**
$$\\sigma(T) = \\sqrt{625} = 25$$

Even though Machine 2 alone is more variable ($\\sigma_2 = 20$ vs. $\\sigma_1 = 15$), the combined standard deviation is smaller than the sum of individual SDs ($15 + 20 = 35$) because variance adds, not standard deviation.

## Common Pitfalls

> ⚠️ **Variances Add, Not Standard Deviations**: A common mistake is to add standard deviations: $\\sigma_{X+Y} \\neq \\sigma_X + \\sigma_Y$. Instead, $\\sigma_{X+Y} = \\sqrt{\\sigma_X^2 + \\sigma_Y^2}$, which is always less than the simple sum.

> ⚠️ **Variance of Difference = Variance of Sum**: Do not forget that $\\text{Var}(X - Y) = \\text{Var}(X) + \\text{Var}(Y)$, not subtraction. Negative values don't reduce variance.

> ⚠️ **Independence Assumption**: These rules assume independence. If $X$ and $Y$ are correlated, the formulas are invalid. Always verify or state the independence assumption.

## Calculator Tip

> 💡 **TI-84 / TI-Nspire**: To work with combined variables, define mean and variance for each component, then use the rules above manually (e.g., $E(2X + 3Y) = 2 \\times E(X) + 3 \\times E(Y)$). There is no built-in function; apply the formulas by hand and verify your arithmetic.`,
      examples: [
        {
          question:
            'A linear transformation is $Y = 3X - 5$. If $\\mu_X = 10$ and $\\sigma_X = 4$, find $\\mu_Y$ and $\\sigma_Y$.',
          solution: `**Apply transformation rules:**

$$\\mu_Y = 3(10) - 5 = 30 - 5 = 25$$

$$\\sigma_Y = |3| \\times 4 = 12$$

**Answer:** $\\mu_Y = 25$ and $\\sigma_Y = 12$.`,
          difficulty: 'EASY' as Difficulty,
        },
        {
          question:
            'Two independent random variables: $X$ with $\\mu_X = 50$, $\\sigma_X = 8$; and $Y$ with $\\mu_Y = 40$, $\\sigma_Y = 6$. Find the mean and standard deviation of $Z = X + Y$ and $W = X - Y$.',
          solution: `**For $Z = X + Y$:**

Mean:
$$\\mu_Z = 50 + 40 = 90$$

Variance (adding):
$$\\sigma_Z^2 = 8^2 + 6^2 = 64 + 36 = 100$$

Standard deviation:
$$\\sigma_Z = \\sqrt{100} = 10$$

**For $W = X - Y$:**

Mean:
$$\\mu_W = 50 - 40 = 10$$

Variance (variance adds for differences too):
$$\\sigma_W^2 = 8^2 + 6^2 = 64 + 36 = 100$$

Standard deviation:
$$\\sigma_W = \\sqrt{100} = 10$$

**Answer:** For both $Z$ and $W$: mean is 90 and 10 respectively; standard deviation is 10 for both.`,
          difficulty: 'MEDIUM' as Difficulty,
        },
        {
          question:
            'Three independent machines produce items with defect rates: $X_1 \\sim (\\mu=2, \\sigma=0.5)$, $X_2 \\sim (\\mu=3, \\sigma=0.7)$, $X_3 \\sim (\\mu=1.5, \\sigma=0.4)$. Total defects are $T = X_1 + 2X_2 + 0.5X_3$. Find $E(T)$ and $\\sigma(T)$.',
          solution: `**Mean of weighted sum:**
$$E(T) = E(X_1) + 2E(X_2) + 0.5E(X_3) = 2 + 2(3) + 0.5(1.5)$$
$$= 2 + 6 + 0.75 = 8.75$$

**Variance of weighted sum:**
$$\\text{Var}(T) = (1)^2(0.5)^2 + (2)^2(0.7)^2 + (0.5)^2(0.4)^2$$
$$= 1(0.25) + 4(0.49) + 0.25(0.16)$$
$$= 0.25 + 1.96 + 0.04 = 2.25$$

**Standard deviation:**
$$\\sigma(T) = \\sqrt{2.25} = 1.5$$

**Answer:** $E(T) = 8.75$ defects and $\\sigma(T) = 1.5$ defects.`,
          difficulty: 'HARD' as Difficulty,
        },
      ],
      flashcards: [
        {
          front: 'For a linear transformation $Y = aX + b$, how does the mean change?',
          back: '$\\mu_Y = a\\mu_X + b$; the transformation shifts and scales the mean.',
        },
        {
          front: 'For a linear transformation $Y = aX + b$, how does the standard deviation change?',
          back: '$\\sigma_Y = |a| \\sigma_X$; adding $b$ does not affect standard deviation.',
        },
        {
          front: 'For independent $X$ and $Y$, does $\\text{Var}(X + Y)$ equal $\\text{Var}(X - Y)$?',
          back:
            'Yes, both equal $\\sigma_X^2 + \\sigma_Y^2$. Variance adds for both sums and differences.',
        },
        {
          front: 'Why is $\\sigma_{X+Y} \\neq \\sigma_X + \\sigma_Y$?',
          back:
            'Because variances add, not standard deviations. $\\sigma_{X+Y} = \\sqrt{\\sigma_X^2 + \\sigma_Y^2} < \\sigma_X + \\sigma_Y$ (unless one is zero).',
        },
        {
          front: 'For $Z = 2X - 3Y + 5$, write the formula for $\\text{Var}(Z)$ assuming $X$ and $Y$ are independent.',
          back: '$\\text{Var}(Z) = 2^2 \\sigma_X^2 + (-3)^2 \\sigma_Y^2 = 4\\sigma_X^2 + 9\\sigma_Y^2$.',
        },
        {
          front:
            'Two independent random variables have means 10 and 15, and standard deviations 2 and 3. What is the standard deviation of their sum?',
          back:
            '$\\sigma_{X+Y} = \\sqrt{2^2 + 3^2} = \\sqrt{13} \\approx 3.61$.',
        },
        {
          front: 'If $X$ and $Y$ are positively correlated, does $\\text{Var}(X - Y)$ still equal $\\sigma_X^2 + \\sigma_Y^2$?',
          back:
            'No. The formula $\\text{Var}(X - Y) = \\sigma_X^2 + \\sigma_Y^2$ assumes independence. Correlation requires adjusting for covariance.',
        },
        {
          front: 'What happens to variance when you add a constant $c$ to a random variable?',
          back:
            'Variance does not change: $\\text{Var}(X + c) = \\text{Var}(X)$. Adding a constant shifts the distribution but does not affect spread.',
        },
        {
          front: 'For a linear combination $T = 3X_1 + 2X_2 + X_3$ of independent variables, write the variance formula.',
          back:
            '$\\text{Var}(T) = 3^2 \\sigma_1^2 + 2^2 \\sigma_2^2 + 1^2 \\sigma_3^2 = 9\\sigma_1^2 + 4\\sigma_2^2 + \\sigma_3^2$.',
        },
        {
          front: 'Why do the rules for combining random variables require the assumption of independence?',
          back:
            'Independence ensures that the variance formula $\\text{Var}(X+Y) = \\sigma_X^2 + \\sigma_Y^2$ holds. Dependence introduces covariance terms that modify the formula.',
        },
      ],
    },

    {
      categorySlug: 'sampling-distributions-unit',
      slug: 'sampling-distribution-sample-mean',
      title: 'Sampling Distribution of the Sample Mean',
      description:
        'Properties of the sampling distribution of x̄: mean μ, standard error σ/√n, and shape via the Central Limit Theorem.',
      order: 3,
      textContent: `# 📈 Sampling Distribution of the Sample Mean

The **sampling distribution of the sample mean** $\\bar{x}$ is the distribution of all possible values of $\\bar{x}$ when repeatedly drawing samples of size $n$ from a population. Understanding this distribution is the foundation of inference.

## Key Properties of the Sampling Distribution of $\\bar{x}$

For a population with mean $\\mu$ and standard deviation $\\sigma$, when drawing samples of size $n$:

1. **Mean of the sampling distribution:**
   $$\\mu_{\\bar{x}} = \\mu$$
   The sample mean is an unbiased estimator of the population mean.

2. **Standard error (standard deviation of $\\bar{x}$):**
   $$\\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}}$$
   Larger samples produce less variability in $\\bar{x}$.

3. **Shape of the sampling distribution:**
   - If the population is **Normal**, then $\\bar{x}$ is **exactly Normal** for any $n$.
   - If the population is **not Normal**, then $\\bar{x}$ is approximately Normal for **large $n$** (Central Limit Theorem, typically $n \\geq 30$).

## Central Limit Theorem (CLT)

The **Central Limit Theorem** states: No matter the shape of the population distribution, the sampling distribution of $\\bar{x}$ approaches a Normal distribution as $n$ increases.

$$\\bar{x} \\sim N(\\mu, \\frac{\\sigma}{\\sqrt{n}})$$

**Practical implications:**
- For $n \\geq 30$, even if the population is skewed or multimodal, $\\bar{x}$ is approximately Normal.
- Smaller samples may suffice if the population is already approximately Normal.
- The approximation improves as $n$ increases.

## The Standard Error and Sample Size

The standard error decreases with the square root of $n$:

$$\\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}} \\propto \\frac{1}{\\sqrt{n}}$$

This means:
- To cut the standard error in half, you must increase $n$ by a factor of 4.
- Larger samples yield more precise estimates of $\\mu$.

## Worked Example 1: Normal Population

A population has $\\mu = 100$ and $\\sigma = 15$ (Normal). Draw samples of size $n = 25$. What is the sampling distribution of $\\bar{x}$?

**Solution:**
- $\\mu_{\\bar{x}} = \\mu = 100$
- $\\sigma_{\\bar{x}} = \\frac{15}{\\sqrt{25}} = \\frac{15}{5} = 3$
- Shape: Normal (population is Normal)

So $\\bar{x} \\sim N(100, 3)$.

**Find $P(\\bar{x} > 103)$:**
$$Z = \\frac{103 - 100}{3} = 1$$
$$P(Z > 1) \\approx 0.1587$$

About 15.87% of sample means exceed 103.

## Worked Example 2: Non-Normal Population and CLT

A population is heavily skewed with $\\mu = 50$ and $\\sigma = 20$. Draw samples of size $n = 100$. Describe the sampling distribution of $\\bar{x}$.

**Solution:**
- Population is skewed, but $n = 100 \\geq 30$ is large.
- By CLT, $\\bar{x}$ is approximately Normal.
- $\\mu_{\\bar{x}} = 50$
- $\\sigma_{\\bar{x}} = \\frac{20}{\\sqrt{100}} = \\frac{20}{10} = 2$

So $\\bar{x} \\sim N(50, 2)$ approximately.

**Find $P(49 < \\bar{x} < 51)$:**
$$Z_{low} = \\frac{49 - 50}{2} = -0.5; \\quad Z_{high} = \\frac{51 - 50}{2} = 0.5$$
$$P(-0.5 < Z < 0.5) \\approx 0.3830$$

About 38.3% of sample means fall between 49 and 51.

## Conditions and Assumptions

| Condition | Requirement |
|-----------|-------------|
| **Random sampling** | Sample must be randomly selected from the population. |
| **Independence** | When sampling without replacement, $n < 0.1N$ (10% condition). |
| **Normality / CLT** | Population is Normal, OR $n \\geq 30$ (or sample data shows approximate normality). |

## Common Pitfalls

> ⚠️ **Confusing $\\sigma$ and $\\sigma_{\\bar{x}}$**: The population SD is $\\sigma$; the standard error is $\\sigma_{\\bar{x}} = \\sigma/\\sqrt{n}$. They are very different! Standard error decreases as $n$ increases; population SD does not.

> ⚠️ **Forgetting the Square Root of $n$**: When computing standard error, always divide $\\sigma$ by $\\sqrt{n}$, not by $n$.

> ⚠️ **CLT Threshold**: While $n \\geq 30$ is a rule of thumb, it's not a hard cutoff. If the population is already Normal, CLT applies for any $n$. If the population is very skewed, you may need $n > 30$.

## Calculator Tip

> 💡 **TI-84 / TI-Nspire**: Use **normalcdf()** to find probabilities for $\\bar{x}$. For $P(\\bar{x} < 103)$ with $\\mu_{\\bar{x}} = 100$ and $\\sigma_{\\bar{x}} = 3$, enter: normalcdf(-999999, 103, 100, 3).`,
      examples: [
        {
          question:
            'A population has $\\mu = 80$ and $\\sigma = 12$. Samples of size $n = 36$ are drawn. Find $\\mu_{\\bar{x}}$ and $\\sigma_{\\bar{x}}$.',
          solution: `**Mean of sampling distribution:**
$$\\mu_{\\bar{x}} = \\mu = 80$$

**Standard error:**
$$\\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}} = \\frac{12}{\\sqrt{36}} = \\frac{12}{6} = 2$$

**Answer:** $\\mu_{\\bar{x}} = 80$ and $\\sigma_{\\bar{x}} = 2$.`,
          difficulty: 'EASY' as Difficulty,
        },
        {
          question:
            'A population is Normally distributed with $\\mu = 200$ and $\\sigma = 30$. A sample of $n = 25$ is drawn. Find $P(\\bar{x} < 190)$.',
          solution: `**Sampling distribution:**
- $\\mu_{\\bar{x}} = 200$
- $\\sigma_{\\bar{x}} = \\frac{30}{\\sqrt{25}} = \\frac{30}{5} = 6$
- Shape: Normal (population is Normal)

**Standardize:**
$$Z = \\frac{190 - 200}{6} = \\frac{-10}{6} \\approx -1.67$$

**Find probability:**
$$P(Z < -1.67) \\approx 0.0475$$

About 4.75% of sample means are below 190.`,
          difficulty: 'MEDIUM' as Difficulty,
        },
        {
          question:
            'A skewed population has $\\mu = 60$ and $\\sigma = 16$. Samples of $n = 64$ are drawn. By the Central Limit Theorem, approximately what percentage of sample means fall within $\\pm 4$ units of the population mean?',
          solution: `**By CLT (since $n = 64 \\geq 30$):**
- $\\mu_{\\bar{x}} = 60$
- $\\sigma_{\\bar{x}} = \\frac{16}{\\sqrt{64}} = \\frac{16}{8} = 2$
- $\\bar{x} \\sim N(60, 2)$ approximately

**Find $P(56 < \\bar{x} < 64)$:**
$$Z_{low} = \\frac{56 - 60}{2} = -2; \\quad Z_{high} = \\frac{64 - 60}{2} = 2$$

**Probability:**
$$P(-2 < Z < 2) \\approx 0.9545$$

About 95.45% of sample means fall within $\\pm 4$ units (or within $\\pm 2$ standard errors).`,
          difficulty: 'HARD' as Difficulty,
        },
      ],
      flashcards: [
        {
          front: 'What is the mean of the sampling distribution of $\\bar{x}$?',
          back:
            '$\\mu_{\\bar{x}} = \\mu$, the population mean. The sample mean is an unbiased estimator.',
        },
        {
          front: 'What is the standard error of $\\bar{x}$, and what does it measure?',
          back:
            '$\\sigma_{\\bar{x}} = \\sigma / \\sqrt{n}$. It measures the standard deviation (variability) of the sample mean.',
        },
        {
          front:
            'If you quadruple the sample size (increase $n$ by a factor of 4), what happens to the standard error?',
          back:
            'The standard error is cut in half, because $\\sigma_{\\bar{x}}$ is proportional to $1/\\sqrt{n}$.',
        },
        {
          front: 'State the Central Limit Theorem.',
          back:
            'The sampling distribution of $\\bar{x}$ is approximately Normal for large $n$ (typically $n \\geq 30$), regardless of the population shape.',
        },
        {
          front: 'When is the sampling distribution of $\\bar{x}$ exactly Normal?',
          back:
            'When the population itself is Normal, the sampling distribution of $\\bar{x}$ is exactly Normal for any sample size $n$.',
        },
        {
          front:
            'How large does $n$ need to be for the CLT to apply to a skewed population?',
          back:
            'As a rule of thumb, $n \\geq 30$ is often sufficient, but this depends on how skewed the population is.',
        },
        {
          front:
            'If the standard error is 2.5 and you want to reduce it to 1.25, what should you do to $n$?',
          back:
            'Multiply $n$ by 4, since $\\sigma_{\\bar{x}}$ is proportional to $1/\\sqrt{n}$.',
        },
        {
          front: 'What is the 10% condition, and why is it important?',
          back:
            'When sampling without replacement, $n$ should be less than 10% of the population size ($n < 0.1N$) to ensure approximate independence.',
        },
        {
          front: 'Is it possible for $\\sigma_{\\bar{x}} > \\sigma$ (standard error larger than population SD)?',
          back:
            'No. $\\sigma_{\\bar{x}} = \\sigma / \\sqrt{n} < \\sigma$ for any $n > 1$. The standard error is always smaller than the population SD.',
        },
        {
          front: 'For a Normal population with $\\mu = 100$ and $\\sigma = 10$, if $n = 25$, what is $\\sigma_{\\bar{x}}$?',
          back:
            '$\\sigma_{\\bar{x}} = 10 / \\sqrt{25} = 10 / 5 = 2$.',
        },
      ],
    },

    {
      categorySlug: 'sampling-distributions-unit',
      slug: 'sampling-distribution-sample-proportion',
      title: 'Sampling Distribution of the Sample Proportion',
      description:
        'Properties of the sampling distribution of p̂: mean p, standard error √(p(1-p)/n), Large Counts condition, and normal approximation.',
      order: 4,
      textContent: `# 🎯 Sampling Distribution of the Sample Proportion

The **sample proportion** $\\hat{p}$ is the fraction of successes in a sample. Just as the sample mean has a sampling distribution, so does $\\hat{p}$. This distribution is central to inference about population proportions.

## Key Properties

For a population with true proportion $p$ of successes, when drawing samples of size $n$:

1. **Mean of the sampling distribution:**
   $$\\mu_{\\hat{p}} = p$$
   The sample proportion is unbiased for the population proportion.

2. **Standard error of $\\hat{p}$:**
   $$\\sigma_{\\hat{p}} = \\sqrt{\\frac{p(1-p)}{n}}$$
   Larger $n$ and values of $p$ closer to 0 or 1 yield smaller standard errors.

3. **Shape of the sampling distribution:**
   When the **Large Counts condition** is met, $\\hat{p}$ is approximately Normal:
   - $np \\geq 10$ AND $n(1-p) \\geq 10$
   
   If these conditions hold, $\\hat{p} \\sim N(p, \\sqrt{p(1-p)/n})$ approximately.

## Large Counts Condition

The **Large Counts condition** ensures that the binomial distribution is sufficiently symmetric and bell-shaped to approximate normality:

- **Count of successes:** $np \\geq 10$
- **Count of failures:** $n(1-p) \\geq 10$

If either count falls below 10, use exact binomial probabilities instead of the normal approximation.

## Standard Error and Sample Size

Just as with $\\bar{x}$, the standard error of $\\hat{p}$ decreases with the square root of $n$:

$$\\sigma_{\\hat{p}} = \\sqrt{\\frac{p(1-p)}{n}} \\propto \\frac{1}{\\sqrt{n}}$$

To cut the standard error in half, multiply $n$ by 4.

## Effect of $p$ on Variability

The term $p(1-p)$ is maximized when $p = 0.5$. This means:
- Proportions near 0.5 have maximum variability.
- Proportions near 0 or 1 (rare events) have less variability.
- For $p = 0.1$, $p(1-p) = 0.09$; for $p = 0.5$, $p(1-p) = 0.25$ (2.78 times larger).

## Worked Example 1: Checking Large Counts Condition

In a population, 30% of voters support a candidate. A sample of $n = 80$ is drawn. Is the Large Counts condition met?

**Check:**
- $np = 80 \\times 0.3 = 24 \\geq 10$ ✓
- $n(1-p) = 80 \\times 0.7 = 56 \\geq 10$ ✓

Both counts exceed 10, so the normal approximation applies.

**Sampling distribution of $\\hat{p}$:**
- $\\mu_{\\hat{p}} = 0.3$
- $\\sigma_{\\hat{p}} = \\sqrt{\\frac{0.3 \\times 0.7}{80}} = \\sqrt{\\frac{0.21}{80}} = \\sqrt{0.002625} \\approx 0.0512$
- $\\hat{p} \\sim N(0.3, 0.0512)$ approximately

**Find $P(\\hat{p} > 0.35)$:**
$$Z = \\frac{0.35 - 0.3}{0.0512} \\approx 0.98$$
$$P(Z > 0.98) \\approx 0.164$$

About 16.4% of samples have a proportion above 0.35.

## Worked Example 2: Small Proportion (Rare Event)

In a population, 5% of items are defective. A sample of $n = 150$ is drawn. Check normality and find $P(\\hat{p} \\leq 0.02)$.

**Check Large Counts:**
- $np = 150 \\times 0.05 = 7.5 < 10$ ✗
- $n(1-p) = 150 \\times 0.95 = 142.5 \\geq 10$ ✓

The condition is NOT met (insufficient defectives). Use binomial distribution, not normal approximation.

**Correct approach:** Count $X =$ number of defectives $\\sim \\text{Binomial}(n=150, p=0.05)$.

$P(\\hat{p} \\leq 0.02) = P(X \\leq 3)$ (since $\\hat{p} = 3/150 = 0.02$).

Using binomial: $P(X \\leq 3) \\approx 0.094$ (exact calculation).

## Conditions and Assumptions

| Condition | Requirement |
|-----------|-------------|
| **Random sampling** | Sample must be randomly selected. |
| **Independence (10%)** | $n < 0.1N$; observations are independent. |
| **Large Counts** | $np \\geq 10$ AND $n(1-p) \\geq 10$ for normal approximation. |
| **Fixed $p$** | Population proportion does not change during sampling. |

## Common Pitfalls

> ⚠️ **Forgetting to Check Large Counts**: Never use the normal approximation without verifying both $np \\geq 10$ and $n(1-p) \\geq 10$. If either fails, use exact binomial probabilities or report that the approximation is invalid.

> ⚠️ **Confusing $p$ and $\\hat{p}$**: $p$ is the population parameter (unknown); $\\hat{p}$ is the sample statistic (observed). The standard error formula uses the parameter $p$, not the sample proportion.

> ⚠️ **Mixing Up Notation**: Do not confuse $\\sigma_{\\hat{p}}$ with $\\sigma_p$ or other notations. Always use consistent terminology.

## Calculator Tip

> 💡 **TI-84 / TI-Nspire**: For small samples or when Large Counts fails, use **binompdf()** and **binomcdf()** for exact probabilities. For large samples meeting the condition, use **normalcdf()** with mean $p$ and SD $\\sqrt{p(1-p)/n}$.`,
      examples: [
        {
          question:
            'In a population, $p = 0.40$. A sample of $n = 100$ is drawn. Find $\\mu_{\\hat{p}}$ and $\\sigma_{\\hat{p}}$. Does the Large Counts condition hold?',
          solution: `**Mean:**
$$\\mu_{\\hat{p}} = p = 0.40$$

**Standard error:**
$$\\sigma_{\\hat{p}} = \\sqrt{\\frac{0.40 \\times 0.60}{100}} = \\sqrt{\\frac{0.24}{100}} = \\sqrt{0.0024} \\approx 0.049$$

**Check Large Counts:**
- $np = 100 \\times 0.40 = 40 \\geq 10$ ✓
- $n(1-p) = 100 \\times 0.60 = 60 \\geq 10$ ✓

Both conditions are satisfied. Normal approximation is appropriate.

**Answer:** $\\mu_{\\hat{p}} = 0.40$, $\\sigma_{\\hat{p}} \\approx 0.049$, and Large Counts condition holds.`,
          difficulty: 'EASY' as Difficulty,
        },
        {
          question:
            'A survey of $n = 200$ shoppers finds that 52% support a new policy. If the true population proportion is $p = 0.50$, what is the probability of observing $\\hat{p} \\geq 0.52$ (or more extreme)?',
          solution: `**Set up sampling distribution with $p = 0.50$:**
- $\\mu_{\\hat{p}} = 0.50$
- $\\sigma_{\\hat{p}} = \\sqrt{\\frac{0.50 \\times 0.50}{200}} = \\sqrt{\\frac{0.25}{200}} = \\sqrt{0.00125} \\approx 0.0354$

**Check Large Counts:**
- $np = 200 \\times 0.50 = 100 \\geq 10$ ✓
- $n(1-p) = 200 \\times 0.50 = 100 \\geq 10$ ✓

**Standardize:**
$$Z = \\frac{0.52 - 0.50}{0.0354} \\approx 0.565$$

**Find $P(Z \\geq 0.565)$:**
$$P(Z \\geq 0.565) \\approx 1 - 0.714 = 0.286$$

About 28.6% probability of observing $\\hat{p} \\geq 0.52$ if $p = 0.50$ is true.`,
          difficulty: 'MEDIUM' as Difficulty,
        },
        {
          question:
            'A population has $p = 0.08$ (8% defect rate). For what sample size $n$ will the standard error of $\\hat{p}$ equal 0.02?',
          solution: `**Set up equation:**
$$\\sigma_{\\hat{p}} = 0.02 = \\sqrt{\\frac{0.08 \\times 0.92}{n}}$$

**Square both sides:**
$$0.0004 = \\frac{0.0736}{n}$$

**Solve for $n$:**
$$n = \\frac{0.0736}{0.0004} = 184$$

**Verify Large Counts (with $n = 184$):**
- $np = 184 \\times 0.08 = 14.72 \\geq 10$ ✓
- $n(1-p) = 184 \\times 0.92 = 169.28 \\geq 10$ ✓

**Answer:** $n = 184$ (or approximately 184–190, accounting for rounding in practice).`,
          difficulty: 'HARD' as Difficulty,
        },
      ],
      flashcards: [
        {
          front: 'What is the mean of the sampling distribution of $\\hat{p}$?',
          back:
            '$\\mu_{\\hat{p}} = p$, the true population proportion. The sample proportion is unbiased.',
        },
        {
          front: 'Write the formula for the standard error of $\\hat{p}$.',
          back:
            '$\\sigma_{\\hat{p}} = \\sqrt{\\frac{p(1-p)}{n}}$.',
        },
        {
          front: 'What is the Large Counts condition, and why is it important?',
          back:
            'Need $np \\geq 10$ AND $n(1-p) \\geq 10$ to ensure the sampling distribution of $\\hat{p}$ is approximately Normal. Without it, use exact binomial methods.',
        },
        {
          front:
            'When $p = 0.5$, is $p(1-p)$ at its maximum or minimum? What does this mean?',
          back:
            'Maximum ($p(1-p) = 0.25$ when $p = 0.5$). Proportions near 50% have the most variability; extreme proportions (near 0 or 1) have less.',
        },
        {
          front: 'If you increase the sample size from 100 to 400, how does the standard error change?',
          back:
            'The standard error is cut in half, since $\\sigma_{\\hat{p}} \\propto 1/\\sqrt{n}$.',
        },
        {
          front:
            'For a population with $p = 0.20$ and $n = 50$, is the Large Counts condition met?',
          back:
            'Check: $np = 50 \\times 0.20 = 10$ (meets); $n(1-p) = 50 \\times 0.80 = 40$ (meets). Yes, the condition is met.',
        },
        {
          front: 'What should you do if the Large Counts condition is not satisfied?',
          back:
            'Use the exact binomial distribution instead of the normal approximation.',
        },
        {
          front: 'For a rare event with $p = 0.02$ and $n = 100$, why would the normal approximation fail?',
          back:
            'Because $np = 100 \\times 0.02 = 2 < 10$. The number of successes is too small; use binomial instead.',
        },
        {
          front: 'How does the formula for $\\sigma_{\\hat{p}}$ differ from the formula for $\\sigma_{\\bar{x}}$?',
          back:
            '$\\sigma_{\\hat{p}} = \\sqrt{\\frac{p(1-p)}{n}}$ (binomial-based), while $\\sigma_{\\bar{x}} = \\sigma / \\sqrt{n}$ (general). The factor $p(1-p)$ arises from binomial variability.',
        },
        {
          front: 'Is the sampling distribution of $\\hat{p}$ always approximately Normal?',
          back:
            'Only if the Large Counts condition is satisfied. For small samples or extreme proportions, normality does not hold.',
        },
      ],
    },

    {
      categorySlug: 'confidence-intervals',
      slug: 'two-sample-proportions',
      title: 'Inference for Two Sample Proportions (CI and Test)',
      description:
        'Two-sample z-interval and z-test for the difference in two population proportions p1 - p2, including conditions and pooled vs unpooled SE.',
      order: 3,
      textContent: `# 🔍 Inference for Two Sample Proportions (CI and Test)

Comparing proportions between two populations—such as treatment vs. control groups, or two demographic groups—is a common inferential task. We use two-sample z-procedures to estimate and test the difference $p_1 - p_2$.

## Setting Up the Problem

Let $p_1$ and $p_2$ be the true proportions in two independent populations. We draw independent samples of sizes $n_1$ and $n_2$, obtaining sample proportions $\\hat{p}_1$ and $\\hat{p}_2$.

We focus on the **difference** $\\hat{p}_1 - \\hat{p}_2$.

## Sampling Distribution of $\\hat{p}_1 - \\hat{p}_2$

When conditions are met, $\\hat{p}_1 - \\hat{p}_2$ is approximately Normal with:

- **Mean:** $\\mu_{\\hat{p}_1 - \\hat{p}_2} = p_1 - p_2$
- **Standard deviation:** Depends on context (see below)

## Two-Sample z-Interval for $p_1 - p_2$ (Unpooled SE)

For a **confidence interval**, we use the unpooled standard error:

$$SE_{\\text{unpooled}} = \\sqrt{\\frac{\\hat{p}_1(1-\\hat{p}_1)}{n_1} + \\frac{\\hat{p}_2(1-\\hat{p}_2)}{n_2}}$$

**Confidence Interval:**
$$(\\hat{p}_1 - \\hat{p}_2) \\pm z^* \\cdot SE_{\\text{unpooled}}$$

Where $z^*$ is the critical value (e.g., $z^* = 1.96$ for 95% confidence).

## Two-Sample z-Test for $p_1 = p_2$ (Pooled SE)

For a **hypothesis test** (usually testing $H_0: p_1 = p_2$), we use a **pooled standard error** that assumes the null hypothesis:

$$\\hat{p}_{\\text{pool}} = \\frac{\\text{successes}_1 + \\text{successes}_2}{n_1 + n_2}$$

$$SE_{\\text{pooled}} = \\sqrt{\\hat{p}_{\\text{pool}}(1 - \\hat{p}_{\\text{pool}}) \\left( \\frac{1}{n_1} + \\frac{1}{n_2} \\right)}$$

**Test Statistic:**
$$z = \\frac{(\\hat{p}_1 - \\hat{p}_2) - 0}{SE_{\\text{pooled}}}$$

Compare to the standard Normal distribution to find the p-value.

## Conditions for Two-Sample z-Procedures

Both methods require:

| Condition | Requirement |
|-----------|-------------|
| **Random samples** | Both samples randomly selected. |
| **Independence** | Samples independent; within samples, $n_1 < 0.1N_1$ and $n_2 < 0.1N_2$. |
| **Large Counts** (CI) | $n_1\\hat{p}_1 \\geq 10$, $n_1(1-\\hat{p}_1) \\geq 10$, $n_2\\hat{p}_2 \\geq 10$, $n_2(1-\\hat{p}_2) \\geq 10$. |
| **Large Counts** (Test) | $n_1\\hat{p}_{pool} \\geq 10$, $n_1(1-\\hat{p}_{pool}) \\geq 10$, $n_2\\hat{p}_{pool} \\geq 10$, $n_2(1-\\hat{p}_{pool}) \\geq 10$. |

## Worked Example 1: Two-Sample z-Interval

In a clinical trial:
- Treatment group: 35 successes out of 100 patients → $\\hat{p}_1 = 0.35$
- Control group: 20 successes out of 100 patients → $\\hat{p}_2 = 0.20$

Construct a 95% confidence interval for $p_1 - p_2$.

**Check conditions:**
- $n_1 \\hat{p}_1 = 100(0.35) = 35 \\geq 10$ ✓
- $n_1(1-\\hat{p}_1) = 100(0.65) = 65 \\geq 10$ ✓
- $n_2 \\hat{p}_2 = 100(0.20) = 20 \\geq 10$ ✓
- $n_2(1-\\hat{p}_2) = 100(0.80) = 80 \\geq 10$ ✓

**Calculate unpooled SE:**
$$SE = \\sqrt{\\frac{0.35(0.65)}{100} + \\frac{0.20(0.80)}{100}} = \\sqrt{\\frac{0.2275}{100} + \\frac{0.16}{100}} = \\sqrt{0.003875} \\approx 0.0622$$

**95% CI (z* = 1.96):**
$$(0.35 - 0.20) \\pm 1.96(0.0622) = 0.15 \\pm 0.122 = (0.028, 0.272)$$

We are 95% confident that $p_1 - p_2$ is between 0.028 and 0.272 (2.8% to 27.2% difference).

## Worked Example 2: Two-Sample z-Test

Test $H_0: p_1 = p_2$ vs. $H_a: p_1 \\neq p_2$ at $\\alpha = 0.05$ using the data above.

**Calculate pooled proportion:**
$$\\hat{p}_{pool} = \\frac{35 + 20}{100 + 100} = \\frac{55}{200} = 0.275$$

**Calculate pooled SE:**
$$SE = \\sqrt{0.275(0.725) \\left( \\frac{1}{100} + \\frac{1}{100} \\right)} = \\sqrt{0.199375 \\times 0.02} = \\sqrt{0.00399} \\approx 0.0631$$

**Test statistic:**
$$z = \\frac{0.35 - 0.20}{0.0631} = \\frac{0.15}{0.0631} \\approx 2.378$$

**p-value (two-tailed):**
$$p\\text{-value} = 2 \\times P(Z \\geq 2.378) \\approx 2(0.0087) \\approx 0.0174$$

Since $p\\text{-value} = 0.0174 < 0.05$, we **reject** $H_0$. Significant evidence that $p_1 \\neq p_2$.

## Common Pitfalls

> ⚠️ **Pooled vs. Unpooled**: Use unpooled SE for confidence intervals (we estimate both $p_1$ and $p_2$ separately). Use pooled SE for hypothesis tests under $H_0: p_1 = p_2$ (assumes they are equal).

> ⚠️ **Forgetting the 10% Condition**: Always check $n < 0.1N$ within each population to ensure independence of observations.

> ⚠️ **Large Counts with Pooled Proportion**: For tests, check counts using $\\hat{p}_{pool}$, not individual $\\hat{p}_i$.

## Calculator Tip

> 💡 **TI-84 / TI-Nspire**: Use **2-PropZInt** for confidence intervals and **2-PropZTest** for hypothesis tests. Input $x_1$, $n_1$, $x_2$, $n_2$ and the alternative hypothesis. The calculator will compute the interval or test statistic automatically.`,
      examples: [
        {
          question:
            'A survey shows 60% of 200 men and 55% of 250 women favor a ballot measure. Find a 90% confidence interval for the difference $p_{\\text{men}} - p_{\\text{women}}$.',
          solution: `**Sample proportions:**
- $\\hat{p}_1 = 0.60$ (men), $n_1 = 200$
- $\\hat{p}_2 = 0.55$ (women), $n_2 = 250$

**Check Large Counts:**
- $n_1 \\hat{p}_1 = 200(0.60) = 120 \\geq 10$ ✓
- All four counts pass.

**Unpooled SE:**
$$SE = \\sqrt{\\frac{0.60(0.40)}{200} + \\frac{0.55(0.45)}{250}} = \\sqrt{\\frac{0.24}{200} + \\frac{0.2475}{250}}$$
$$= \\sqrt{0.0012 + 0.0099} = \\sqrt{0.0111} \\approx 0.0505$$

**90% CI (z* = 1.645):**
$$(0.60 - 0.55) \\pm 1.645(0.0505) = 0.05 \\pm 0.083 = (-0.033, 0.133)$$

We are 90% confident the true difference is between −3.3% and 13.3%.`,
          difficulty: 'EASY' as Difficulty,
        },
        {
          question:
            'A drug trial: 48 of 150 patients in the treatment group recovered, versus 35 of 150 in the control group. Test $H_0: p_1 = p_2$ vs. $H_a: p_1 > p_2$ at $\\alpha = 0.05$.',
          solution: `**Sample proportions:**
- $\\hat{p}_1 = 48/150 = 0.32$ (treatment)
- $\\hat{p}_2 = 35/150 = 0.233$ (control)

**Pooled proportion:**
$$\\hat{p}_{pool} = \\frac{48 + 35}{150 + 150} = \\frac{83}{300} \\approx 0.2767$$

**Check Large Counts (with pooled):**
- $n_1 \\hat{p}_{pool} = 150(0.2767) \\approx 41.5 \\geq 10$ ✓
- All four counts pass.

**Pooled SE:**
$$SE = \\sqrt{0.2767(0.7233) \\left( \\frac{1}{150} + \\frac{1}{150} \\right)} = \\sqrt{0.2 \\times 0.00133} \\approx 0.0516$$

**Test statistic:**
$$z = \\frac{0.32 - 0.233}{0.0516} \\approx 1.68$$

**p-value (one-tailed, $H_a: p_1 > p_2$):**
$$P(Z > 1.68) \\approx 0.0465$$

Since $p\\text{-value} \\approx 0.0465 < 0.05$, we **reject** $H_0$. Significant evidence that treatment is more effective.`,
          difficulty: 'MEDIUM' as Difficulty,
        },
        {
          question:
            'To detect a difference of at least 10 percentage points between two proportions ($p_1 = 0.60$, $p_2 = 0.50$) with 80% power at $\\alpha = 0.05$ (two-tailed), approximately how many participants are needed in each group?',
          solution: `This is a sample size calculation for a two-sample proportion test. Use the formula:

$$n \\approx \\frac{(z_{\\alpha/2} + z_{\\beta})^2 [p_1(1-p_1) + p_2(1-p_2)]}{(p_1 - p_2)^2}$$

**Values:**
- $z_{\\alpha/2} = 1.96$ (two-tailed, $\\alpha = 0.05$)
- $z_{\\beta} = 0.84$ (80% power)
- $p_1 = 0.60$, $p_2 = 0.50$
- $p_1 - p_2 = 0.10$

**Compute:**
$$p_1(1-p_1) + p_2(1-p_2) = 0.60(0.40) + 0.50(0.50) = 0.24 + 0.25 = 0.49$$

$$n \\approx \\frac{(1.96 + 0.84)^2 \\times 0.49}{0.10^2} = \\frac{(2.80)^2 \\times 0.49}{0.01}$$
$$= \\frac{7.84 \\times 0.49}{0.01} = \\frac{3.84}{0.01} = 384$$

**Answer:** Approximately 384 participants per group (768 total) are needed.`,
          difficulty: 'HARD' as Difficulty,
        },
      ],
      flashcards: [
        {
          front: 'What is the difference between unpooled and pooled standard errors for two-sample proportion tests?',
          back:
            'Unpooled SE uses each sample proportion separately; pooled SE combines all data assuming $H_0: p_1 = p_2$ is true. Use unpooled for CI, pooled for hypothesis tests.',
        },
        {
          front: 'Write the formula for the pooled proportion $\\hat{p}_{pool}$.',
          back:
            '$\\hat{p}_{pool} = \\frac{x_1 + x_2}{n_1 + n_2}$, where $x_i$ is the number of successes in sample $i$.',
        },
        {
          front: 'What are the Large Counts conditions for a two-sample proportion z-interval?',
          back:
            '$n_1 \\hat{p}_1 \\geq 10$, $n_1(1-\\hat{p}_1) \\geq 10$, $n_2 \\hat{p}_2 \\geq 10$, $n_2(1-\\hat{p}_2) \\geq 10$.',
        },
        {
          front:
            'In a two-sample z-test, why do we use the pooled proportion instead of the individual sample proportions?',
          back:
            'The pooled proportion reflects the null hypothesis assumption that $p_1 = p_2$. It combines data under this assumption for a more stable estimate of SE.',
        },
        {
          front:
            'If a 95% CI for $p_1 - p_2$ is $(−0.05, 0.15)$, can you conclude that $H_0: p_1 = p_2$ should be rejected at $\\alpha = 0.05$?',
          back:
            'No, because 0 (the null hypothesis value) is inside the CI. There is not enough evidence to reject $H_0$ at $\\alpha = 0.05$.',
        },
        {
          front: 'What is the relationship between a 95% CI for $p_1 - p_2$ and a two-tailed test at $\\alpha = 0.05$?',
          back:
            'If 0 is not in the CI, we reject $H_0: p_1 = p_2$ at $\\alpha = 0.05$. If 0 is in the CI, we fail to reject.',
        },
        {
          front: 'When should you use a one-tailed vs. two-tailed test for comparing two proportions?',
          back:
            'One-tailed: if you specifically predict which proportion is larger (e.g., $p_1 > p_2$). Two-tailed: if testing only whether they differ (e.g., $p_1 \\neq p_2$).',
        },
        {
          front: 'How does increasing sample size affect the width of a two-sample CI for $p_1 - p_2$?',
          back:
            'Larger samples decrease SE, narrowing the CI. The CI width is proportional to $1/\\sqrt{n}$.',
        },
        {
          front: 'What does a p-value of 0.032 mean in a two-sample proportion test?',
          back:
            'If $H_0$ is true, there is a 3.2% probability of observing a test statistic as extreme as (or more extreme than) what we obtained.',
        },
        {
          front: 'Can the difference $\\hat{p}_1 - \\hat{p}_2$ be used directly to make an inference without approximation?',
          back:
            'It can, but only if the large counts condition is satisfied. Otherwise, use exact binomial methods (beyond AP scope).',
        },
      ],
    },

    {
      categorySlug: 'hypothesis-testing',
      slug: 'two-sample-means',
      title: 'Inference for Two Sample Means (CI and Test)',
      description:
        'Two-sample t-interval and t-test for the difference in two population means μ1 - μ2 using independent samples.',
      order: 7,
      textContent: `# 📊 Inference for Two Sample Means (CI and Test)

Comparing the means of two populations—such as treatment vs. control, or two manufacturing processes—is one of the most common inference problems. We use two-sample t-procedures to estimate and test the difference $\\mu_1 - \\mu_2$.

## Setting Up the Problem

Let $\\mu_1$ and $\\mu_2$ be the true means of two independent populations. We draw independent samples of sizes $n_1$ and $n_2$, obtaining sample means $\\bar{x}_1$ and $\\bar{x}_2$, and sample standard deviations $s_1$ and $s_2$.

We focus on the difference $\\bar{x}_1 - \\bar{x}_2$.

## Sampling Distribution of $\\bar{x}_1 - \\bar{x}_2$

When conditions are met:

- **Mean:** $\\mu_{\\bar{x}_1 - \\bar{x}_2} = \\mu_1 - \\mu_2$
- **Standard error:** $SE = \\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}$
- **Distribution:** Approximately $t$ with complicated degrees of freedom (calculator handles this)

## Two-Sample t-Interval for $\\mu_1 - \\mu_2$

**Confidence Interval:**
$$(\\bar{x}_1 - \\bar{x}_2) \\pm t^* \\cdot SE$$

where $SE = \\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}$ and $t^*$ is the critical $t$-value based on the degrees of freedom.

**Degrees of Freedom (Welch's adjustment):**
$$df = \\frac{\\left( \\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2} \\right)^2}{\\frac{(s_1^2/n_1)^2}{n_1-1} + \\frac{(s_2^2/n_2)^2}{n_2-1}}$$

(Most calculators compute this automatically; always use the more conservative estimate if doing by hand.)

## Two-Sample t-Test for $\\mu_1 = \\mu_2$

**Null Hypothesis:** $H_0: \\mu_1 = \\mu_2$ (or equivalently, $\\mu_1 - \\mu_2 = 0$)

**Test Statistic:**
$$t = \\frac{(\\bar{x}_1 - \\bar{x}_2) - 0}{SE}$$

Compare to the $t$-distribution with the appropriate df to find the p-value.

**Alternative Hypotheses:**
- Two-tailed: $H_a: \\mu_1 \\neq \\mu_2$
- One-tailed: $H_a: \\mu_1 > \\mu_2$ or $H_a: \\mu_1 < \\mu_2$

## Conditions for Two-Sample t-Procedures

All methods require:

| Condition | Requirement |
|-----------|-------------|
| **Random samples** | Both samples randomly selected. |
| **Independence** | Samples are independent of each other; within each sample, observations are independent (10% condition if sampling without replacement). |
| **Nearly Normal** | Each sample is approximately Normal (large sample or no extreme outliers). For $n \\geq 30$, use t-procedures even if distribution is somewhat non-normal. |

## Robustness of t-Tests

t-procedures are **robust** to departures from Normality, especially for large samples and balanced designs ($n_1 \\approx n_2$). However:
- With very small samples ($n < 15$) and skewed data, be cautious.
- With very large samples ($n > 100$), slight departures from Normality are not a concern.

## Worked Example 1: Two-Sample t-Interval

Two high schools compare math proficiency test scores:
- School A: $n_1 = 25$, $\\bar{x}_1 = 78$, $s_1 = 8$
- School B: $n_2 = 30$, $\\bar{x}_2 = 75$, $s_2 = 10$

Construct a 95% CI for $\\mu_A - \\mu_B$.

**Standard error:**
$$SE = \\sqrt{\\frac{8^2}{25} + \\frac{10^2}{30}} = \\sqrt{\\frac{64}{25} + \\frac{100}{30}} = \\sqrt{2.56 + 3.333} = \\sqrt{5.893} \\approx 2.427$$

**Degrees of freedom (conservative estimate: use $n - 1 = 24$ from smaller sample):**
Using $df = 24$ and 95% confidence, $t^* \\approx 2.064$.

**CI:**
$$(78 - 75) \\pm 2.064(2.427) = 3 \\pm 5.008 = (-2.008, 8.008)$$

We are 95% confident that School A's mean exceeds School B's by between −2.0 and +8.0 points.

## Worked Example 2: Two-Sample t-Test

Test $H_0: \\mu_1 = \\mu_2$ vs. $H_a: \\mu_1 \\neq \\mu_2$ at $\\alpha = 0.05$ using the data above.

**Test statistic:**
$$t = \\frac{3 - 0}{2.427} \\approx 1.236$$

**p-value (two-tailed with $df \\approx 24$):**
$$p\\text{-value} = 2 \\times P(T > 1.236) \\approx 2(0.114) \\approx 0.228$$

Since $p\\text{-value} = 0.228 > 0.05$, we **fail to reject** $H_0$. Insufficient evidence that the school means differ.

## Common Pitfalls

> ⚠️ **Confusing SE with $s$**: $SE = \\sqrt{s_1^2/n_1 + s_2^2/n_2}$ is the standard error of $\\bar{x}_1 - \\bar{x}_2$. Do not use the sample standard deviations directly as if they were the population SDs.

> ⚠️ **Forgetting Independence**: Two-sample t-tests require independent samples. If the samples are paired (same individuals measured twice), use a paired t-test instead.

> ⚠️ **Misinterpreting CI**: A 95% CI does not mean there is a 95% probability that $\\mu_1 - \\mu_2$ is in the interval for this specific data. Rather, the method has 95% long-run success rate.

## Calculator Tip

> 💡 **TI-84 / TI-Nspire**: Use **2-SampTInt** for confidence intervals and **2-SampTTest** for hypothesis tests. Enter the summary statistics ($\\bar{x}_1, s_1, n_1, \\bar{x}_2, s_2, n_2$) and the alternative hypothesis. The calculator computes df and the interval or test automatically (with or without assuming equal variances).`,
      examples: [
        {
          question:
            'Two basketball teams have mean shooting percentages: Team A ($n=20$, $\\bar{x}=45\\%$, $s=8\\%$) and Team B ($n=25$, $\\bar{x}=42\\%$, $s=10\\%$). Construct a 90% CI for $\\mu_A - \\mu_B$.',
          solution: `**Standard error:**
$$SE = \\sqrt{\\frac{8^2}{20} + \\frac{10^2}{25}} = \\sqrt{\\frac{64}{20} + \\frac{100}{25}} = \\sqrt{3.2 + 4} = \\sqrt{7.2} \\approx 2.683$$

**Degrees of freedom (conservative: $\\min(n_1 - 1, n_2 - 1) = 19$):**
For $df = 19$ and 90% confidence, $t^* \\approx 1.729$.

**CI:**
$$(45 - 42) \\pm 1.729(2.683) = 3 \\pm 4.637 = (-1.637, 7.637)$$

We are 90% confident that Team A's mean shooting % exceeds Team B's by between −1.6% and +7.6%.`,
          difficulty: 'EASY' as Difficulty,
        },
        {
          question:
            'A sleep study compares two treatments: Placebo ($n=15$, $\\bar{x}=6.2$ hours, $s=1.1$) and Drug ($n=15$, $\\bar{x}=7.4$ hours, $s=1.3$). Test $H_0: \\mu_{placebo} = \\mu_{drug}$ vs. $H_a: \\mu_{placebo} < \\mu_{drug}$ at $\\alpha = 0.05$.',
          solution: `**Standard error:**
$$SE = \\sqrt{\\frac{1.1^2}{15} + \\frac{1.3^2}{15}} = \\sqrt{\\frac{1.21}{15} + \\frac{1.69}{15}} = \\sqrt{\\frac{2.9}{15}} \\approx 0.440$$

**Test statistic:**
$$t = \\frac{(6.2 - 7.4) - 0}{0.440} = \\frac{-1.2}{0.440} \\approx -2.727$$

**Degrees of freedom (conservative: $df = 14$):**
For one-tailed, $H_a: \\mu_1 < \\mu_2$:
$$P(T < -2.727 \\mid df = 14) \\approx 0.008$$

Since $p\\text{-value} \\approx 0.008 < 0.05$, we **reject** $H_0$. Significant evidence that the drug increases sleep compared to placebo.`,
          difficulty: 'MEDIUM' as Difficulty,
        },
        {
          question:
            'In a quality control study, Product A ($n_1=50$, $\\bar{x}_1=100$, $s_1=12$) and Product B ($n_2=50$, $\\bar{x}_2=102$, $s_2=15$) are compared. Calculate the 99% CI for $\\mu_A - \\mu_B$ and interpret whether the products differ significantly.',
          solution: `**Standard error:**
$$SE = \\sqrt{\\frac{12^2}{50} + \\frac{15^2}{50}} = \\sqrt{\\frac{144}{50} + \\frac{225}{50}} = \\sqrt{\\frac{369}{50}} = \\sqrt{7.38} \\approx 2.717$$

**Degrees of freedom (approximate, using Welch's formula or conservative $df = 49$):**
For $df = 49$ (or even $\\infty$ for large samples) and 99% confidence, $t^* \\approx 2.681$.

**CI:**
$$(100 - 102) \\pm 2.681(2.717) = -2 \\pm 7.286 = (-9.286, 5.286)$$

**Interpretation:** At 99% confidence, the true difference $\\mu_A - \\mu_B$ is between −9.286 and +5.286. Since 0 is in the interval, there is no significant difference between the products at the 0.01 level. The observed 2-unit difference in samples could easily be due to random variation.`,
          difficulty: 'HARD' as Difficulty,
        },
      ],
      flashcards: [
        {
          front: 'For a two-sample t-interval, what is the standard error formula?',
          back:
            '$SE = \\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}$.',
        },
        {
          front: 'How do you determine the degrees of freedom for a two-sample t-test?',
          back:
            "Use Welch's adjustment (calculator does this), or conservatively use $\\min(n_1 - 1, n_2 - 1)$ for a lower bound on df.",
        },
        {
          front: 'What is the relationship between a two-sample t-test and a two-sample t-interval?',
          back:
            'If a 95% CI for $\\mu_1 - \\mu_2$ does not contain 0, you reject $H_0: \\mu_1 = \\mu_2$ at $\\alpha = 0.05$. If 0 is in the CI, fail to reject.',
        },
        {
          front: 'When should you use a paired t-test instead of a two-sample t-test?',
          back:
            'Use paired t-test when the two samples are dependent (e.g., pre/post measurements on the same individuals, matched pairs). Use two-sample t for independent samples.',
        },
        {
          front: 'Why are two-sample t-procedures said to be "robust" to departures from Normality?',
          back:
            'Because the t-test performs reasonably well even if the populations are not perfectly Normal, especially for larger samples ($n \\geq 30$) or when samples are balanced.',
        },
        {
          front: 'If sample sizes are very unequal (e.g., $n_1 = 10$, $n_2 = 100$), does the formula for SE still apply?',
          back:
            'Yes, the formula $SE = \\sqrt{s_1^2/n_1 + s_2^2/n_2}$ applies regardless. However, robustness to non-Normality may be reduced for the smaller sample.',
        },
        {
          front:
            'How does the two-sample t-interval change if you increase the confidence level from 90% to 99%?',
          back:
            'The interval widens, because a larger $t^*$ is used. Higher confidence requires a wider interval.',
        },
        {
          front: 'What does the 10% condition mean for two-sample t-procedures?',
          back:
            'If sampling without replacement, both $n_1 < 0.1 N_1$ and $n_2 < 0.1 N_2$ to ensure observations within each sample are independent.',
        },
        {
          front:
            'Can you use a two-sample t-test for comparing more than two populations simultaneously?',
          back:
            'No, use ANOVA (Analysis of Variance) instead. The two-sample t-test is designed for exactly two independent groups.',
        },
        {
          front: 'If the 95% CI for $\\mu_1 - \\mu_2$ is $(2, 8)$, what can you conclude about $H_0: \\mu_1 = \\mu_2$?',
          back:
            'Reject $H_0$ at $\\alpha = 0.05$, because 0 is not in the interval. There is significant evidence that $\\mu_1 > \\mu_2$.',
        },
      ],
    },

    {
      categorySlug: 'inference-chi-square',
      slug: 'chi-square-independence-homogeneity',
      title: 'Chi-Square Tests for Independence and Homogeneity',
      description:
        'Chi-square test for independence (one sample, two categorical variables) and for homogeneity (multiple independent samples), including expected counts, degrees of freedom, and conditions.',
      order: 2,
      textContent: `# 🔲 Chi-Square Tests for Independence and Homogeneity

Chi-square tests are used to analyze the relationship between two categorical variables. Two common scenarios are tested: **independence** (one sample, two categorical variables) and **homogeneity** (multiple independent samples, one categorical variable each).

## The Chi-Square Test Statistic

Both tests use the same test statistic:

$$\\chi^2 = \\sum_{\\text{all cells}} \\frac{(\\text{Observed} - \\text{Expected})^2}{\\text{Expected}}$$

where:
- **Observed** = actual count in each cell of the contingency table
- **Expected** = count predicted under the null hypothesis

The test statistic follows a **chi-square distribution** with degrees of freedom depending on the context.

## Test for Independence

**Purpose:** Test whether two categorical variables in a single population are independent.

**Hypotheses:**
- $H_0$: The two variables are **independent** (no association)
- $H_a$: The two variables are **associated** (not independent)

**Expected Cell Counts (under $H_0$ of independence):**
$$E_{ij} = \\frac{(\\text{Row total}_i) \\times (\\text{Column total}_j)}{\\text{Grand total}}$$

**Degrees of Freedom:**
$$df = (r - 1)(c - 1)$$
where $r$ = number of rows, $c$ = number of columns in the contingency table.

## Test for Homogeneity

**Purpose:** Test whether the distribution of a categorical variable is the **same** across multiple independent groups (samples).

**Hypotheses:**
- $H_0$: The distribution of the variable is **the same** in all groups (homogeneous)
- $H_a$: The distribution of the variable **differs** across groups (not homogeneous)

**Expected Cell Counts (under $H_0$ of homogeneity):**
$$E_{ij} = \\frac{(\\text{Row total}_i) \\times (\\text{Column total}_j)}{\\text{Grand total}}$$

Note: Formula is identical to the independence test, but interpretation differs.

**Degrees of Freedom:**
$$df = (r - 1)(c - 1)$$
where $r$ = number of categories in the variable, $c$ = number of groups/samples.

## Conditions for Chi-Square Tests

| Condition | Requirement |
|-----------|-------------|
| **Random sampling** | Data must be from random samples. |
| **Independence** | Observations are independent within each cell. |
| **Large Counts** | All expected cell counts must be $\\geq 5$ (some allow $\\geq 1$ if no more than 20% of cells are $< 5$). |
| **Sample Size** | Usually $n \\geq 20$ to ensure reliable results. |

## Worked Example 1: Test for Independence

A study of 200 college students asks about **Gender** (M/F) and **Exercise Habit** (Regular/Irregular). The data:

|  | Regular | Irregular | Total |
|---|---------|-----------|-------|
| Male | 40 | 30 | 70 |
| Female | 60 | 70 | 130 |
| Total | 100 | 100 | 200 |

Test $H_0$: Gender and Exercise are independent, at $\\alpha = 0.05$.

**Calculate expected counts:**
- $E_{M,R} = \\frac{70 \\times 100}{200} = 35$
- $E_{M,I} = \\frac{70 \\times 100}{200} = 35$
- $E_{F,R} = \\frac{130 \\times 100}{200} = 65$
- $E_{F,I} = \\frac{130 \\times 100}{200} = 65$

All expected counts $\\geq 5$ ✓

**Calculate $\\chi^2$:**
$$\\chi^2 = \\frac{(40-35)^2}{35} + \\frac{(30-35)^2}{35} + \\frac{(60-65)^2}{65} + \\frac{(70-65)^2}{65}$$
$$= \\frac{25}{35} + \\frac{25}{35} + \\frac{25}{65} + \\frac{25}{65} = 0.714 + 0.714 + 0.385 + 0.385 = 2.198$$

**Degrees of freedom:**
$$df = (2-1)(2-1) = 1$$

**p-value:**
For $\\chi^2 = 2.198$ with $df = 1$, $P(\\chi^2 > 2.198) \\approx 0.138$.

Since $p\\text{-value} \\approx 0.138 > 0.05$, **fail to reject** $H_0$. No significant evidence that gender and exercise are associated.

## Worked Example 2: Test for Homogeneity

Compare the distribution of **Political Party** (Democrat/Republican/Independent) across three **Age Groups** (18–30, 31–50, 50+). Sample of 600 people:

| Party | 18–30 | 31–50 | 50+ | Total |
|-------|-------|-------|-----|-------|
| Dem. | 80 | 90 | 70 | 240 |
| Rep. | 50 | 100 | 110 | 260 |
| Ind. | 20 | 30 | 30 | 80 |
| Total | 150 | 220 | 230 | 600 |

Test $H_0$: Political party distribution is the same across age groups, at $\\alpha = 0.05$.

**Calculate expected counts (sample):**
- $E_{D,1} = \\frac{240 \\times 150}{600} = 60$
- $E_{D,2} = \\frac{240 \\times 220}{600} = 88$
- ... (all $\\geq 5$) ✓

**Calculate $\\chi^2$ (simplified; full calculation omitted):**
$$\\chi^2 \\approx 15.38$$

**Degrees of freedom:**
$$df = (3-1)(3-1) = 4$$

**p-value:**
For $\\chi^2 \\approx 15.38$ with $df = 4$, $P(\\chi^2 > 15.38) \\approx 0.0036$.

Since $p\\text{-value} \\approx 0.0036 < 0.05$, **reject** $H_0$. Significant evidence that political party distribution differs across age groups.

## Common Pitfalls

> ⚠️ **Using Observed Instead of Expected Counts**: The chi-square statistic compares observed counts to expected counts under $H_0$. Always compute expected counts carefully; a mistake here invalidates the entire test.

> ⚠️ **Ignoring the Large Counts Condition**: If expected counts are too small (typically $< 5$), the chi-square distribution is not a good approximation. Combine categories or use Fisher's exact test if appropriate.

> ⚠️ **Confusing Independence and Homogeneity**: Both use the same $\\chi^2$ statistic and formula, but test different hypotheses. Independence: one sample, two variables. Homogeneity: multiple samples, one variable.

## Calculator Tip

> 💡 **TI-84 / TI-Nspire**: Use **$\\chi^2$ Goodness-of-Fit** or **$\\chi^2$ Test**. Enter the observed counts in a matrix, then calculate. The calculator computes expected counts, $\\chi^2$, df, and p-value automatically. (Some calculators use "Chi2 Test" for homogeneity/independence and "Chi2 GOF" for goodness-of-fit.)`,
      examples: [
        {
          question:
            'In a $2 \\times 3$ contingency table with row totals (100, 150) and column totals (80, 110, 60), find the expected count for the cell in row 1, column 2.',
          solution: `**Grand total:**
$$\\text{Grand Total} = 100 + 150 = 250$$

**Expected count:**
$$E_{1,2} = \\frac{(\\text{Row 1 Total}) \\times (\\text{Column 2 Total})}{\\text{Grand Total}} = \\frac{100 \\times 110}{250} = \\frac{11000}{250} = 44$$

**Answer:** Expected count = 44.`,
          difficulty: 'EASY' as Difficulty,
        },
        {
          question:
            'A contingency table for **Color** (Red/Blue) and **Size** (Small/Large) has observed counts: (30, 20, 25, 40). Row totals: (50, 65), Column totals: (55, 55). Compute $\\chi^2$ and determine whether to reject $H_0: \\text{independence}$ at $\\alpha = 0.05$.',
          solution: `**Organize:**
|  | Red | Blue | Total |
|---|-----|------|-------|
| Small | 30 | 20 | 50 |
| Large | 25 | 40 | 65 |
| Total | 55 | 55 | 110 |

**Expected counts:**
- $E_{S,R} = \\frac{50 \\times 55}{110} = 25$
- $E_{S,B} = \\frac{50 \\times 55}{110} = 25$
- $E_{L,R} = \\frac{65 \\times 55}{110} = 32.5$
- $E_{L,B} = \\frac{65 \\times 55}{110} = 32.5$

All $\\geq 5$ ✓

**Chi-square:**
$$\\chi^2 = \\frac{(30-25)^2}{25} + \\frac{(20-25)^2}{25} + \\frac{(25-32.5)^2}{32.5} + \\frac{(40-32.5)^2}{32.5}$$
$$= \\frac{25}{25} + \\frac{25}{25} + \\frac{56.25}{32.5} + \\frac{56.25}{32.5} = 1 + 1 + 1.73 + 1.73 = 5.46$$

**Degrees of freedom:** $df = (2-1)(2-1) = 1$

**p-value:** $P(\\chi^2 > 5.46 \\mid df=1) \\approx 0.019$

Since $0.019 < 0.05$, **reject** $H_0$. Significant evidence that Size and Color are associated.`,
          difficulty: 'MEDIUM' as Difficulty,
        },
        {
          question:
            'A test of homogeneity compares **Preference** (Yes/No) across four **Groups** (A, B, C, D). The observed $\\chi^2 = 8.45$. With $df = 3$ and $\\alpha = 0.05$, find the critical value and determine the conclusion.',
          solution: `**Critical value from chi-square table:**
For $df = 3$ and $\\alpha = 0.05$, the critical value is $\\chi^2_{0.05,3} \\approx 7.815$.

**Decision:**
Since the observed $\\chi^2 = 8.45 > 7.815$, we **reject** $H_0$.

**Alternatively, using p-value:**
$P(\\chi^2 > 8.45 \\mid df=3) \\approx 0.038$

Since $p\\text{-value} \\approx 0.038 < 0.05$, we **reject** $H_0$.

**Conclusion:** There is significant evidence that the distribution of preferences (Yes/No) differs across the four groups. At least one group has a different preference distribution than the others.`,
          difficulty: 'HARD' as Difficulty,
        },
      ],
      flashcards: [
        {
          front: 'What is the formula for expected cell counts in a chi-square test?',
          back:
            '$E_{ij} = \\frac{(\\text{Row total}_i) \\times (\\text{Column total}_j)}{\\text{Grand total}}$.',
        },
        {
          front: 'How do you calculate degrees of freedom for a chi-square test of independence?',
          back:
            '$df = (r - 1)(c - 1)$, where $r$ is the number of rows and $c$ is the number of columns.',
        },
        {
          front:
            'What is the difference between a chi-square test for independence and a test for homogeneity?',
          back:
            'Independence: one sample, two categorical variables. Homogeneity: multiple independent samples, one categorical variable. The test statistic and df formula are the same; the hypotheses and interpretation differ.',
        },
        {
          front: 'Why must all expected cell counts be at least 5?',
          back:
            'If expected counts are too small, the chi-square distribution does not accurately approximate the distribution of the test statistic.',
        },
        {
          front: 'What does $\\chi^2 = 0$ indicate about the relationship between two variables?',
          back:
            'Perfect agreement between observed and expected counts; the variables conform exactly to the null hypothesis (no association/homogeneity holds perfectly).',
        },
        {
          front:
            'If $\\chi^2$ is very large, what does this suggest about the null hypothesis?',
          back:
            'Large $\\chi^2$ indicates substantial disagreement between observed and expected counts, suggesting the null hypothesis is false.',
        },
        {
          front: 'Can you combine small-count cells in a contingency table before computing $\\chi^2$?',
          back:
            'Yes, combining adjacent rows or columns is acceptable if it makes sense contextually and ensures expected counts $\\geq 5$.',
        },
        {
          front: 'What is the null hypothesis in a test for homogeneity?',
          back:
            '$H_0$: The distribution of the categorical variable is the same across all groups (populations).',
        },
        {
          front: 'What is the null hypothesis in a test for independence?',
          back:
            '$H_0$: The two categorical variables are independent (no association) in the population.',
        },
        {
          front: 'What does the chi-square statistic measure?',
          back:
            'It measures the discrepancy between observed and expected cell counts. Larger values indicate greater disagreement with the null hypothesis.',
        },
      ],
    },
  ];

  // ─── Main seeding logic ───

  for (const topicData of topicsData) {
    const categoryId = categoryMap[topicData.categorySlug];
    if (!categoryId) {
      console.error(
        `❌ Category not found: ${topicData.categorySlug}. Skipping topic.`
      );
      continue;
    }

    // Upsert topic
    const topic = await prisma.topic.upsert({
      where: { slug: topicData.slug },
      update: {
        title: topicData.title,
        description: topicData.description,
        order: topicData.order,
        textContent: topicData.textContent,
        categoryId,
      },
      create: {
        slug: topicData.slug,
        title: topicData.title,
        description: topicData.description,
        order: topicData.order,
        textContent: topicData.textContent,
        isPremium: false,
        categoryId,
      },
    });

    // Dedup and create flashcards
    const existingFlashcards = await prisma.flashcard.findMany({
      where: { topicId: topic.id },
      select: { front: true },
    });
    const existingFronts = new Set(
      existingFlashcards.map((fc) => fc.front.trim())
    );
    const flashcardsToCreate = topicData.flashcards
      .filter((fc) => !existingFronts.has(fc.front.trim()))
      .map((fc) => ({
        topicId: topic.id,
        ...fc,
      }));

    if (flashcardsToCreate.length > 0) {
      await prisma.flashcard.createMany({ data: flashcardsToCreate });
    }

    // Dedup and create example problems with proper order
    const existingProblems = await prisma.exampleProblem.findMany({
      where: { topicId: topic.id },
      select: { question: true, order: true },
    });
    const existingQuestions = new Set(
      existingProblems.map((p) => p.question.trim())
    );
    const maxOrder = existingProblems.reduce(
      (m, p) => Math.max(m, p.order ?? 0),
      0
    );

    const problemsToCreate = topicData.examples
      .filter((ex) => !existingQuestions.has(ex.question.trim()))
      .map((ex, i) => ({
        topicId: topic.id,
        order: maxOrder + i + 1,
        ...ex,
      }));

    if (problemsToCreate.length > 0) {
      await prisma.exampleProblem.createMany({ data: problemsToCreate });
    }

    // Log progress
    const flashcardCount = await prisma.flashcard.count({
      where: { topicId: topic.id },
    });
    const problemCount = await prisma.exampleProblem.count({
      where: { topicId: topic.id },
    });

    console.log(`✓ ${topic.title}`);
    console.log(`  Flashcards: ${flashcardCount} | Problems: ${problemCount}`);
  }

  console.log('✓ AP Statistics CED topics seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
