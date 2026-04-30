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
  console.log('📊 Expanding AP Statistics textContent (part 4/4)…\n')

  await updateTopic('tests-proportions', `
# 🔍 Tests of Significance for Proportions

## Hypothesis Tests for Proportions

A **hypothesis test** for a proportion uses sample data to evaluate claims about a population proportion.

**Key question:** Is the observed proportion significantly different from the hypothesized value?

## One-Sample z-Test for a Proportion

**When to use:** One sample, testing whether $p = p_0$ (null hypothesis)

**Test statistic:**
$$z = \\frac{\\hat{p} - p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n}}}$$

Where:
- $\\hat{p}$ = sample proportion
- $p_0$ = hypothesized population proportion
- $n$ = sample size

**Conditions (must check all):**
1. **Random sample:** Data collected randomly
2. **Independence:** Observations are independent (or $n \\leq 0.1N$)
3. **Large counts:** Both $np_0 \\geq 10$ and $n(1-p_0) \\geq 10$

**Worked Example:**
A company claims 80% of customers are satisfied. In a random sample of 150 customers, 115 were satisfied. Test at $\\alpha = 0.05$.

- $\\hat{p} = 115/150 = 0.767$
- $z = \\frac{0.767 - 0.80}{\\sqrt{\\frac{0.80(0.20)}{150}}} = \\frac{-0.033}{0.0327} = -1.01$
- From z-table: p-value = 0.312 (two-tailed)
- Conclusion: Fail to reject $H_0$ (insufficient evidence)

## Two-Sample z-Test for Difference of Proportions

**When to use:** Comparing two populations; testing $p_1 - p_2 = 0$

**Test statistic:**
$$z = \\frac{(\\hat{p}_1 - \\hat{p}_2) - 0}{\\sqrt{\\hat{p}_c(1-\\hat{p}_c)\\left(\\frac{1}{n_1} + \\frac{1}{n_2}\\right)}}$$

Where:
- $\\hat{p}_c = \\frac{x_1 + x_2}{n_1 + n_2}$ (pooled proportion)

**Conditions:**
1. **Random samples** from both populations
2. **Independence:** Both samples independent; each $\\leq 10\\%$ of population
3. **Large counts:** $n_1\\hat{p}_c \\geq 10$, $n_1(1-\\hat{p}_c) \\geq 10$, etc.

## Common Mistakes

❌ Using $\\hat{p}$ instead of $p_0$ in SE for one-sample test
❌ Forgetting to pool proportions in two-sample test
❌ Using t-distribution for proportions (always use z)
❌ Not checking conditions before testing

## Decision Rule

- If $|z| > z_{\\alpha/2}$, reject $H_0$
- If p-value $< \\alpha$, reject $H_0$

## AP Exam Tip

State conditions first. Graders award partial credit for checking them. Name the test: "z-test for a proportion" or "two-sample z-test for difference of proportions."
`)

  await updateTopic('tests-means', `
# 📈 Tests of Significance for Means

## One-Sample t-Test

**When to use:** One sample, testing whether $\\mu = \\mu_0$

**Test statistic:**
$$t = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}$$

Where:
- $\\bar{x}$ = sample mean
- $\\mu_0$ = hypothesized population mean
- $s$ = sample standard deviation
- $n$ = sample size
- **Degrees of freedom:** $df = n - 1$

**Conditions:**
1. **Random sample** from population
2. **Independent observations** (or $n \\leq 0.1N$)
3. **Approximately normal:** Data roughly normal OR $n \\geq 30$ (CLT)

**Worked Example:**
A coffee shop claims their average cup is 16 oz. A random sample of 25 cups has mean $\\bar{x} = 15.2$ oz, SD $s = 1.8$ oz. Test at $\\alpha = 0.05$.

- $t = \\frac{15.2 - 16}{1.8/\\sqrt{25}} = \\frac{-0.8}{0.36} = -2.22$
- $df = 24$; two-tailed critical value $t^* = 2.064$
- Since $|-2.22| > 2.064$, reject $H_0$
- Conclusion: Average cup is significantly below 16 oz

## Two-Sample t-Test (Welch's Test)

**When to use:** Comparing two populations; testing $\\mu_1 - \\mu_2 = 0$

**Test statistic:**
$$t = \\frac{(\\bar{x}_1 - \\bar{x}_2) - 0}{\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}}$$

**Degrees of freedom** (Welch): Complex formula (calculators handle this)

**Conditions:** Both samples random, independent, approximately normal

**Use:** When sample sizes unequal or variances appear different

## Common Mistakes

❌ Using z-test instead of t-test for means (unknown $\\sigma$)
❌ Using pooled t-test when variances unequal (use Welch)
❌ Confusing $SE = s/\\sqrt{n}$ with $s$ (the standard deviation)
❌ Assuming normality without checking

## Decision Rule

- If $|t| > t^*_{df, \\alpha/2}$, reject $H_0$
- If p-value $< \\alpha$, reject $H_0$

## AP Exam Tip

Always specify degrees of freedom. Name the test clearly: "one-sample t-test" or "two-sample t-test." Mention whether conditions are met.
`)

  await updateTopic('paired-data', `
# 🔗 Tests with Paired Data

## When Data Are Paired

Data are **paired** when observations are linked:
- **Matched subjects:** Same person/object measured twice
- **Pre-test/post-test:** Before and after intervention
- **Twins or siblings:** Natural matching
- **Repeated measures:** Same individual under different conditions

**Key insight:** Pairing reduces variability, improving power of test.

## Paired t-Test

**When to use:** Testing whether mean difference equals zero

**Test statistic:**
$$t = \\frac{\\bar{d} - 0}{s_d/\\sqrt{n}}$$

Where:
- $\\bar{d}$ = mean of differences (for each pair: $d_i = x_{1i} - x_{2i}$)
- $s_d$ = standard deviation of differences
- $n$ = number of pairs
- **Degrees of freedom:** $df = n - 1$

**Worked Example:**
A coach tests 12 runners' 100m sprint times before and after training.

| Runner | Before | After | Difference ($d$) |
|--------|--------|-------|------------------|
| 1      | 12.4   | 12.1  | -0.3             |
| 2      | 11.8   | 11.5  | -0.3             |
| ...    | ...    | ...   | ...              |

$\\bar{d} = -0.25$ sec, $s_d = 0.18$ sec

$$t = \\frac{-0.25}{0.18/\\sqrt{12}} = \\frac{-0.25}{0.052} = -4.81$$

$df = 11$; $t^* = 2.201$ (two-tailed, $\\alpha = 0.05$)

Since $|-4.81| > 2.201$, reject $H_0$: Training significantly improves sprint time.

## Conditions for Paired t-Test

1. **Random sample** of pairs
2. **Independence** between pairs
3. **Differences approximately normal** (or $n \\geq 30$)

## Mean Difference vs. Difference of Means

**Do NOT confuse:**
- **Mean of differences:** $\\bar{d} = \\sum d_i / n$ (what we use for paired t-test)
- **Difference of means:** $\\bar{x}_1 - \\bar{x}_2$ (used for two-sample t-test on unpaired data)

For paired data, we always work with the **mean of differences**.

## Common Mistakes

❌ Using two-sample t-test on paired data (loses power)
❌ Computing $\\bar{x}_1 - \\bar{x}_2$ instead of $\\bar{d}$
❌ Not pairing the data when possible
❌ Forgetting that $n$ = number of pairs, not total observations

## AP Exam Tip

State "paired t-test" not just "t-test." Define $d$ clearly: "Let $d$ = time after minus time before." Show one or two differences calculated.
`)

  await updateTopic('chi-square-tests', `
# 📊 Chi-Square Tests

## When to Use Chi-Square

Chi-square tests work with **categorical data** (counts in categories).

$$\\chi^2 = \\sum \\frac{(O - E)^2}{E}$$

Where $O$ = observed count, $E$ = expected count

## Three Flavors of Chi-Square Tests

### 1. Goodness-of-Fit Test
**Question:** Does sample match hypothesized distribution?

**Example:** Is a die fair? (each face should appear 1/6 of rolls)

**Degrees of freedom:** $df = k - 1$ (where $k$ = number of categories)

### 2. Test of Independence
**Question:** Are two categorical variables independent?

**Example:** Are smoking status and lung cancer independent?

**Degrees of freedom:** $df = (r - 1)(c - 1)$ (rows and columns)

### 3. Test of Homogeneity
**Question:** Do multiple populations have the same distribution?

**Example:** Do males and females have the same opinion distribution?

**Degrees of freedom:** $df = (r - 1)(c - 1)$ (same formula as independence)

## Worked Example: Test of Independence

Data on 400 students (exercise habit vs. GPA):

|           | Low GPA | High GPA | Total |
|-----------|---------|----------|-------|
| Exercise  | 40      | 160      | 200   |
| No exercise | 100   | 100      | 200   |
| Total     | 140     | 260      | 400   |

Expected (if independent): $E = \\frac{\\text{row total} \\times \\text{column total}}{n}$

$E_{\\text{Exercise, Low}} = \\frac{200 \\times 140}{400} = 70$

$\\chi^2 = \\frac{(40-70)^2}{70} + \\frac{(160-130)^2}{130} + \\frac{(100-70)^2}{70} + \\frac{(100-130)^2}{130}$

$\\chi^2 = 12.86$; $df = (2-1)(2-1) = 1$; p-value $< 0.001$

Conclusion: Exercise and GPA are NOT independent.

## Conditions for Chi-Square Tests

1. **Random sample**
2. **Independence** between observations
3. **Expected counts $\\geq 5$** in all cells

If condition 3 fails, don't use chi-square!

## Common Mistakes

❌ Using observed counts instead of expected in formula
❌ Not checking expected count condition
❌ Mixing up df formulas
❌ Using chi-square with continuous data

## Decision Rule

- If $\\chi^2 > \\chi^2_{df, \\alpha}$, reject $H_0$
- If p-value $< \\alpha$, reject $H_0$

## AP Exam Tip

Always create a table. Show calculation of at least two expected counts. Name the test: "chi-square test of independence" (or goodness-of-fit/homogeneity). Check all conditions before concluding.
`)

  await updateTopic('residuals-residual-plots', `
# 📉 Residuals and Residual Plots

## What Is a Residual?

**Residual:** The difference between observed and predicted value

$$\\text{residual} = \\text{observed} - \\text{predicted} = y - \\hat{y}$$

**Interpretation:**
- Positive residual: actual value *above* regression line
- Negative residual: actual value *below* regression line
- Small residuals: good fit; large residuals: poor fit

## Reading Residual Plots

A **residual plot** graphs residuals on y-axis vs. predicted values (or x-values) on x-axis.

### ✅ Good Residual Plot (Random Scatter)
- Residuals scattered randomly around 0
- No clear pattern
- Equal vertical spread (homoscedasticity)
- **Conclusion:** Linear model is appropriate

### ❌ Pattern in Residual Plot (Non-linearity)
- Residuals form a U-shape or inverted U
- Or systematic curve
- **Conclusion:** Relationship is NOT linear; try transformation

### ❌ Increasing Spread (Heteroscedasticity)
- Residuals spread wider as x increases
- **Conclusion:** Variance is not constant; may need transformation or weighted regression

## Worked Example

Data: Height vs. Weight (n = 30 students)

Regression line: $\\hat{\\text{Weight}} = 50 + 3.2 \\cdot \\text{Height}$

One student: Height = 70 in, actual weight = 240 lbs

$\\hat{\\text{Weight}} = 50 + 3.2(70) = 274$ lbs

Residual $= 240 - 274 = -34$ lbs (actual weight below prediction)

If residual plot shows random scatter, linear model fits well.

## Conditions for Linear Regression (LINER)

1. **L**inear: Scatterplot shows linear trend
2. **I**ndependent: Observations independent
3. **N**ormal: Residuals approximately normal
4. **E**qual SD: Constant vertical spread (homoscedasticity)
5. **R**andom: Random sample

**Residual plots help check conditions 1, 3, 4.**

## Common Mistakes

❌ Confusing residuals with errors (same thing, different context)
❌ Ignoring patterns; thinking a small curve is "close enough"
❌ Not checking residuals before making predictions
❌ Using residuals to predict; they should center on 0

## AP Exam Tip

Say "The residual plot shows random scatter with no pattern, so a linear model is appropriate." Or "The residual plot shows a curved pattern, indicating the relationship is non-linear."
`)

  await updateTopic('transformations-linearity', `
# 🔄 Transformations to Achieve Linearity

## When and Why Transform

**Problem:** Scatterplot or residual plot shows curved (non-linear) pattern.

**Solution:** Transform one or both variables to "straighten" the relationship.

**Common growth patterns:**
- **Exponential:** $y = a \\cdot b^x$ (rapid growth)
- **Power:** $y = a \\cdot x^p$ (slower, curved growth)
- **Logarithmic:** $y = a + b \\ln(x)$ (rapid growth at first, then levels off)

## Log Transformation of y (for Exponential Growth)

**When:** Scatterplot shows exponential shape; residuals curve upward.

**Transform:** Let $y' = \\log(y)$ or $y' = \\ln(y)$

**Now:** $y' = a + bx$ is approximately linear

**Regression:** Fit $y' = a + bx$

**Back-transformation (for predictions):**
$$y = 10^{a+bx} \\quad \\text{or} \\quad y = e^{a+bx}$$

## Log-Log Transformation (for Power Relationships)

**When:** Both variables show exponential/power growth; need $y = a \\cdot x^p$

**Transform:** Let $x' = \\log(x)$ and $y' = \\log(y)$

**Now:** $y' = \\log(a) + p \\cdot x'$ is linear

**Back-transformation:**
$$y = 10^{\\log(a)} \\cdot x^p$$

## Worked Example: Exponential Transformation

Data: Bacteria population vs. time (hours)

| Hours | Count |
|-------|-------|
| 0     | 100   |
| 1     | 150   |
| 2     | 225   |
| 3     | 340   |

Scatterplot shows rapid growth (exponential).

**Transform:** $y' = \\ln(\\text{Count})$

| Hours | $y'$ |
|-------|------|
| 0     | 4.61 |
| 1     | 5.01 |
| 2     | 5.42 |
| 3     | 5.83 |

Linear regression on $y'$ vs. Hours: $y' = 4.61 + 0.407 \\cdot \\text{Hours}$

**Prediction:** At hour 4: $y' = 4.61 + 0.407(4) = 6.238$

**Back-transform:** $y = e^{6.238} \\approx 508$ bacteria

## Common Mistakes

❌ Transforming without checking scatterplot first
❌ Forgetting to back-transform predictions
❌ Using log base 10 and natural log inconsistently
❌ Log(negative number) — ensure all values positive!

## AP Exam Tip

Show the original scatterplot. State "The relationship appears exponential, so I used ln(y)." Show the transformed scatterplot. Report $R^2$ for the transformed data. Always back-transform final predictions.
`)

  await updateTopic('inference-regression', `
# 📈 Inference for the Slope of a Regression Line

## Test of Significance for Slope

**Null hypothesis:** $H_0: \\beta = 0$ (no linear relationship)

**Test statistic:**
$$t = \\frac{b - 0}{SE(b)} = \\frac{b}{SE(b)}$$

Where:
- $b$ = slope of regression line
- $SE(b)$ = standard error of slope
- **Degrees of freedom:** $df = n - 2$

**Interpretation:**
- If $|t| > t^*$, reject $H_0$: slope is significantly different from 0
- If we reject, there IS a significant linear relationship

## Conditions (LINER)

1. **L**inear: Scatterplot shows linear trend
2. **I**ndependent: Observations independent
3. **N**ormal: Residuals approximately normal (histogram or QQ-plot)
4. **E**qual SD: Constant vertical spread (residual plot shows homogeneity)
5. **R**andom: Random sample or random assignment

**Never skip:** Always state all five conditions and explain how you checked each.

## Worked Example

Data: Study hours vs. Exam score (n = 20 students)

Regression: $\\hat{\\text{Score}} = 65 + 4.2 \\cdot \\text{Hours}$

$SE(b) = 1.1$, so $t = \\frac{4.2}{1.1} = 3.82$

$df = 18$; $t^* = 2.101$ (two-tailed, $\\alpha = 0.05$)

Since $|3.82| > 2.101$, reject $H_0$.

**Conclusion:** There is significant evidence of a linear relationship between hours studied and exam score.

## Confidence Interval for Slope

$$b \\pm t^* \\cdot SE(b)$$

**Example:** $4.2 \\pm 2.101(1.1) = 4.2 \\pm 2.31 = (1.89, 6.51)$

**Interpretation:** We are 95% confident the true slope is between 1.89 and 6.51 points per hour.

## Common Mistakes

❌ Not checking LINER conditions (major point deduction)
❌ Using $\\alpha = 0.05$ without stating it
❌ Confusing test for slope with correlation significance (similar but different)
❌ Forgetting $df = n - 2$ (not $n - 1$)

## Decision Rule

- If $|t| > t^*_{n-2, \\alpha/2}$, reject $H_0$
- If p-value $< \\alpha$, reject $H_0$

## AP Exam Tip

State all five conditions and HOW you checked each (e.g., "Residual plot shows random scatter, supporting linearity"). Name the test: "t-test for the slope." Report the test statistic, degrees of freedom, and p-value (or critical value). Always conclude in context.
`)

  console.log('\n✅ All 7 topics updated successfully.')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.\$disconnect())
