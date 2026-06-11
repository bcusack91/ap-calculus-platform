import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📝 Filling AP Statistics: Exploring Data (Part 3 - Final)...\n');

  // Topic 5: Measures of Spread
  await prisma.topic.update({
    where: { slug: 'measures-of-spread-stats' },
    data: {
      textContent: `# Measures of Spread

## Introduction

While measures of center tell us the "typical" value, **measures of spread** (also called measures of variability or dispersion) tell us how spread out or variable the data is. Two datasets can have the same mean but very different spreads!

**Example:**
- Class A scores: 70, 72, 73, 74, 75 (Mean = 72.8, very consistent)
- Class B scores: 50, 60, 73, 80, 100 (Mean = 72.6, highly variable)

Both classes have similar means, but Class B has much more spread!

## Range

### Definition

**Range:** The difference between the maximum and minimum values

**Formula:** $$Range = Max - Min$$

### Calculating Range

**Example 1:** Test scores: 68, 75, 82, 91, 88

- Max = 91
- Min = 68
- Range = 91 - 68 = 23 points

**Example 2:** Temperatures (°F): 45, 52, 58, 51, 62, 48

- Max = 62
- Min = 45
- Range = 62 - 45 = 17°F

### Properties of Range

**Advantages:**
✓ Very easy to calculate and understand  
✓ Gives sense of total spread  
✓ Useful for quick assessment

**Disadvantages:**
❌ Only uses two values (ignores all others)  
❌ Extremely sensitive to outliers  
❌ Doesn't tell us about distribution between min and max  
❌ Increases with sample size (larger samples tend to have more extreme values)

**Example of outlier sensitivity:**

Without outlier: 10, 12, 13, 14, 15  
Range = 15 - 10 = 5

With outlier: 10, 12, 13, 14, 15, 50  
Range = 50 - 10 = 40

One outlier dramatically changed the range!

### When to Use Range

**Appropriate for:**
- Quick, rough sense of spread
- Knowing the extreme values matters
- Quality control (acceptable range of values)

**Not appropriate when:**
- Outliers present
- Need precise measure of variability
- Comparing datasets of different sizes

## Interquartile Range (IQR)

### Definition

**IQR:** The range of the middle 50% of data

**Formula:** $$IQR = Q3 - Q1$$

Where:
- Q1 = First quartile (25th percentile)
- Q3 = Third quartile (75th percentile)

### Finding Quartiles and IQR

**Step 1:** Order data from smallest to largest

**Step 2:** Find median (Q2)

**Step 3:** Find median of lower half = Q1

**Step 4:** Find median of upper half = Q3

**Step 5:** Calculate IQR = Q3 - Q1

### Example

Data: 12, 15, 17, 19, 20, 22, 25, 28, 30, 35, 40

**Step 1:** Already ordered

**Step 2:** Median (Q2) = 22 (middle value, n=11)

**Step 3:** Lower half: 12, 15, 17, 19, 20  
Q1 = 17 (median of lower half)

**Step 4:** Upper half: 25, 28, 30, 35, 40  
Q3 = 30 (median of upper half)

**Step 5:** IQR = 30 - 17 = 13

**Interpretation:** The middle 50% of data spans 13 units

### Properties of IQR

**Advantages:**
✓ Resistant to outliers (uses middle 50% only)  
✓ More stable than range  
✓ Useful with skewed data  
✓ Basis for outlier detection (1.5 × IQR rule)

**Disadvantages:**
❌ Ignores 50% of data (lowest 25%, highest 25%)  
❌ Less mathematically useful than standard deviation  
❌ Harder to calculate than range

### Using IQR to Identify Outliers

**1.5 × IQR Rule:**

**Lower fence:** $$Q1 - 1.5 \\times IQR$$  
**Upper fence:** $$Q3 + 1.5 \\times IQR$$

**Outliers:** Values below lower fence or above upper fence

**Example (from previous):**
- Q1 = 17, Q3 = 30, IQR = 13
- Lower fence = 17 - 1.5(13) = 17 - 19.5 = -2.5
- Upper fence = 30 + 1.5(13) = 30 + 19.5 = 49.5
- Any values < -2.5 or > 49.5 are outliers

### When to Use IQR

**Appropriate when:**
✓ Distribution is skewed  
✓ Outliers are present  
✓ Want resistant measure  
✓ Describing boxplots

**Paired with:** Median (both resistant measures)

## Variance and Standard Deviation

### Why We Need Them

Range and IQR don't use all data values. **Variance** and **standard deviation** measure average distance from the mean using ALL data points.

### Variance ($$s^2$$)

**Definition:** Average squared deviation from the mean

**Formula (sample variance):**
$$s^2 = \\frac{\\sum(x_i - \\bar{x})^2}{n-1}$$

**Steps to calculate:**
1. Find mean ($$\\bar{x}$$)
2. Find each deviation: $$(x_i - \\bar{x})$$
3. Square each deviation: $$(x_i - \\bar{x})^2$$
4. Sum squared deviations: $$\\sum(x_i - \\bar{x})^2$$
5. Divide by $$n-1$$

**Note:** We divide by $$n-1$$ (not $$n$$) for sample variance. This is called Bessel's correction and gives a better estimate of population variance.

### Standard Deviation ($$s$$)

**Definition:** Square root of variance

**Formula (sample standard deviation):**
$$s = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n-1}}$$

**Why take square root?**
- Variance is in squared units (points², dollars²)
- Standard deviation returns to original units (points, dollars)
- More interpretable!

### Example Calculation

Data: 10, 12, 14, 16, 18

**Step 1:** Find mean
$$\\bar{x} = \\frac{10+12+14+16+18}{5} = \\frac{70}{5} = 14$$

**Step 2:** Find deviations and square them

| $$x_i$$ | $$x_i - \\bar{x}$$ | $$(x_i - \\bar{x})^2$$ |
|---------|---------------------|------------------------|
| 10      | -4                  | 16                     |
| 12      | -2                  | 4                      |
| 14      | 0                   | 0                      |
| 16      | 2                   | 4                      |
| 18      | 4                   | 16                     |

**Step 3:** Sum squared deviations
$$\\sum(x_i - \\bar{x})^2 = 16 + 4 + 0 + 4 + 16 = 40$$

**Step 4:** Calculate variance
$$s^2 = \\frac{40}{5-1} = \\frac{40}{4} = 10$$

**Step 5:** Calculate standard deviation
$$s = \\sqrt{10} \\approx 3.16$$

**Interpretation:** On average, values deviate from the mean by about 3.16 units.

### Properties of Standard Deviation

**Interpretation:**
- Typical distance from mean
- Larger SD = more spread out
- Smaller SD = more clustered around mean
- SD = 0 only when all values are identical

**Properties:**
- Always ≥ 0
- Same units as original data
- Sensitive to outliers (because we square deviations)
- Used in many statistical procedures

**Empirical Rule (for roughly normal distributions):**
- About 68% of data within 1 SD of mean
- About 95% of data within 2 SD of mean
- About 99.7% of data within 3 SD of mean

### When to Use Standard Deviation

**Appropriate when:**
✓ Distribution is roughly symmetric  
✓ No extreme outliers  
✓ Want to use all data  
✓ Need for statistical inference  
✓ Describing normal distributions

**Paired with:** Mean (both use all data, both sensitive to outliers)

**Not appropriate when:**
❌ Distribution is heavily skewed  
❌ Outliers present  
❌ Want resistant measure

## Choosing the Right Measure

### Decision Framework

**Distribution Shape:**

**Symmetric, no outliers:**
- Center: **Mean**
- Spread: **Standard deviation**
- "The mean is [value] with a standard deviation of [value]"

**Skewed or outliers present:**
- Center: **Median**
- Spread: **IQR**
- "The median is [value] with an IQR of [value]"

### Comparison Table

| Measure              | Resistant? | Uses All Data? | Units           |
|----------------------|------------|----------------|-----------------|
| Range                | No         | No (only 2)    | Original        |
| IQR                  | Yes        | No (middle 50%)| Original        |
| Variance             | No         | Yes            | Squared         |
| Standard Deviation   | No         | Yes            | Original        |

## Effect of Transformations

### Adding/Subtracting a Constant

**Adding $$c$$ to every value:**
- Range: **Unchanged**
- IQR: **Unchanged**
- SD: **Unchanged**

**Example:** Convert test scores from points to percent by adding 50
- Original SD = 5 points
- New SD = 5 percent
- Spread didn't change, just units!

### Multiplying/Dividing by a Constant

**Multiplying every value by $$c$$:**
- Range: **Multiplied by** $$|c|$$
- IQR: **Multiplied by** $$|c|$$
- SD: **Multiplied by** $$|c|$$
- Variance: **Multiplied by** $$c^2$$

**Example:** Convert heights from inches to centimeters (multiply by 2.54)
- Original SD = 3 inches
- New SD = 3 × 2.54 = 7.62 cm

## Coefficient of Variation

### Definition

**Coefficient of Variation (CV):** Ratio of standard deviation to mean

**Formula:** $$CV = \\frac{s}{\\bar{x}} \\times 100\\%$$

### Purpose

**Compare variability across different units or scales**

**Example:**
- Heights: Mean = 66 inches, SD = 3 inches  
  CV = (3/66) × 100% = 4.5%

- Weights: Mean = 150 lbs, SD = 20 lbs  
  CV = (20/150) × 100% = 13.3%

Weights are more variable relative to their mean than heights!

### When to Use CV

✓ Comparing datasets with different units  
✓ Comparing datasets with very different means  
✓ Wanting relative (not absolute) measure of spread

## Common Mistakes

❌ **Using SD with skewed data**  
Use IQR instead!

❌ **Forgetting units**  
Range, IQR, SD all have units!

❌ **Confusing variance and SD**  
Variance is squared units, SD is original units

❌ **Dividing by** $$n$$ **instead of** $$n-1$$  
Sample SD uses $$n-1$$ (degrees of freedom)

❌ **Reporting spread without center**  
Always report both!

❌ **Comparing SDs of very different datasets**  
Consider CV for fair comparison

## Quick Reference

**Range:**
- Formula: $$Max - Min$$
- When: Quick assessment
- Property: Sensitive to outliers

**IQR:**
- Formula: $$Q3 - Q1$$
- When: Skewed data, outliers
- Property: Resistant

**Standard Deviation:**
- Formula: $$s = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n-1}}$$
- When: Symmetric, no outliers
- Property: Uses all data

**Choosing:**
- Symmetric → Mean & SD
- Skewed → Median & IQR

**Outlier Rule:**
- Outliers beyond $$Q1 - 1.5 \\times IQR$$ or $$Q3 + 1.5 \\times IQR$$

**Remember:** Spread is just as important as center! Two datasets can have the same mean but completely different spreads. Always report both center AND spread when describing data!
`
    }
  });

  console.log('✅ Filled Measures of Spread\n');

  // Topic 6: Normal Distributions
  await prisma.topic.update({
    where: { slug: 'normal-distributions' },
    data: {
      textContent: `# Normal Distributions

## Introduction

The **normal distribution** (also called Gaussian distribution or bell curve) is the most important probability distribution in statistics. Many natural phenomena approximately follow a normal distribution, and it forms the foundation for much of statistical inference.

## Characteristics of Normal Distributions

### Shape Properties

**1. Bell-shaped curve:**
- Symmetric around the center
- Single peak at the mean
- Tails extend infinitely in both directions (approaching but never touching the x-axis)

**2. Symmetric:**
- Left side mirrors right side
- Mean = Median = Mode
- If folded at center, both halves match perfectly

**3. Unimodal:**
- Single peak (at the mean)
- Highest point at center
- Decreases smoothly on both sides

**4. Asymptotic:**
- Tails get closer and closer to x-axis
- Never actually reach zero
- Theoretically extends to $$-\\infty$$ and $$+\\infty$$

### The Normal Curve Equation

**Probability density function:**

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}$$

**Don't memorize this!** Just know:
- Defined by two parameters: $$\\mu$$ (mean) and $$\\sigma$$ (standard deviation)
- Shape determined entirely by $$\\mu$$ and $$\\sigma$$

## Parameters: Mean and Standard Deviation

### Mean ($$\\mu$$)

**Controls location:**
- Center of distribution
- Peak of curve
- Balance point

**Changing $$\\mu$$:**
- Shifts distribution left or right
- Doesn't change shape
- Doesn't change spread

**Example:**
- Distribution A: $$\\mu = 50$$, centered at 50
- Distribution B: $$\\mu = 70$$, centered at 70
- B is shifted 20 units right from A

### Standard Deviation ($$\\sigma$$)

**Controls spread:**
- How spread out distribution is
- Width of bell curve
- Distance from mean to inflection points

**Changing $$\\sigma$$:**
- Larger $$\\sigma$$ → wider, flatter curve
- Smaller $$\\sigma$$ → narrower, taller curve
- Doesn't change center
- Total area under curve stays 1.0

**Example:**
- Distribution A: $$\\sigma = 5$$, narrow and tall
- Distribution B: $$\\sigma = 15$$, wide and flat
- Both centered at same $$\\mu$$, but B more spread out

## The Empirical Rule (68-95-99.7 Rule)

**For normal distributions:**

**68% of data** within **1 standard deviation** of mean  
$$\\mu - 1\\sigma$$ to $$\\mu + 1\\sigma$$

**95% of data** within **2 standard deviations** of mean  
$$\\mu - 2\\sigma$$ to $$\\mu + 2\\sigma$$

**99.7% of data** within **3 standard deviations** of mean  
$$\\mu - 3\\sigma$$ to $$\\mu + 3\\sigma$$

### Example Application

**IQ scores:** $$\\mu = 100$$, $$\\sigma = 15$$

**68% of people have IQ between:**
$$100 - 15 = 85$$ and $$100 + 15 = 115$$

**95% of people have IQ between:**
$$100 - 30 = 70$$ and $$100 + 30 = 130$$

**99.7% of people have IQ between:**
$$100 - 45 = 55$$ and $$100 + 45 = 145$$

### Using the Empirical Rule

**Quick mental calculations:**

**Example:** Heights of adult males: $$\\mu = 70$$ inches, $$\\sigma = 3$$ inches

**Q:** What percentage between 67 and 73 inches?  
**A:** 67 to 73 is $$\\mu \\pm 1\\sigma$$ → **68%**

**Q:** What percentage above 76 inches?  
**A:** 76 is $$\\mu + 2\\sigma$$, so 95% are between 64 and 76  
Above 76 = (100% - 95%) / 2 = **2.5%**

**Q:** What percentage below 64 inches?  
**A:** 64 is $$\\mu - 2\\sigma$$  
Below 64 = (100% - 95%) / 2 = **2.5%**

## The Standard Normal Distribution (Z-distribution)

### Definition

**Standard Normal:** Normal distribution with $$\\mu = 0$$ and $$\\sigma = 1$$

**Denoted:** $$N(0, 1)$$ or Z-distribution

**Why it matters:**
- Reference distribution
- All normal distributions can be standardized to this
- Tables and calculators use standard normal

### Z-Scores

**Z-score (standardized score):** Number of standard deviations from the mean

**Formula:** $$z = \\frac{x - \\mu}{\\sigma}$$

Where:
- $$x$$ = observed value
- $$\\mu$$ = mean
- $$\\sigma$$ = standard deviation

**Interpretation:**
- $$z = 0$$: At the mean
- $$z = 1$$: One SD above mean
- $$z = -1$$: One SD below mean
- $$z = 2.5$$: 2.5 SD above mean

### Calculating Z-Scores

**Example:** Test scores with $$\\mu = 75$$, $$\\sigma = 8$$

**Score of 83:**
$$z = \\frac{83 - 75}{8} = \\frac{8}{8} = 1$$

Score is 1 SD above mean

**Score of 67:**
$$z = \\frac{67 - 75}{8} = \\frac{-8}{8} = -1$$

Score is 1 SD below mean

**Score of 91:**
$$z = \\frac{91 - 75}{8} = \\frac{16}{8} = 2$$

Score is 2 SD above mean

### Using Z-Scores

**Purposes:**
1. **Standardize** different distributions for comparison
2. **Find probabilities** using standard normal table
3. **Identify unusual values** (typically |z| > 2 or 3)
4. **Compare** across different scales

**Example comparison:**

Student A: Math score 85 (class $$\\mu = 75$$, $$\\sigma = 8$$)  
$$z = \\frac{85-75}{8} = 1.25$$

Student B: English score 88 (class $$\\mu = 80$$, $$\\sigma = 5$$)  
$$z = \\frac{88-80}{5} = 1.6$$

Student B performed better relative to their class (higher z-score)!

## Finding Areas Under the Normal Curve

### Methods

**1. Empirical Rule** (for z = ±1, ±2, ±3)

**2. Standard Normal Table** (z-table)
- Gives area to LEFT of z-score
- Also called cumulative probability

**3. Calculator**
- normalcdf function
- More accurate, easier

### Using the Table

**Area to the left of z:**
- Look up z in table directly
- Example: z = 1.23 → area = 0.8907
- Meaning: 89.07% of data below z = 1.23

**Area to the right of z:**
- Area to right = 1 - area to left
- Example: z = 1.23 → area to left = 0.8907
- Area to right = 1 - 0.8907 = 0.1093 (10.93%)

**Area between two z-scores:**
- Find area to left of each
- Subtract smaller from larger
- Example: Between z = -1 and z = 1
  - Area left of 1: 0.8413
  - Area left of -1: 0.1587
  - Between: 0.8413 - 0.1587 = 0.6826 (68.26%)

### Calculator Method

**TI-83/84:**

normalcdf(lower, upper, mean, SD)

**Examples:**

**Area between 65 and 75** ($$\\mu = 70$$, $$\\sigma = 5$$):  
normalcdf(65, 75, 70, 5) → 0.6827

**Area above 80:**  
normalcdf(80, 999999, 70, 5) → 0.0228

**Area below 60:**  
normalcdf(-999999, 60, 70, 5) → 0.0228

## Finding Values from Areas (Inverse Normal)

### The Inverse Problem

**Given:** Probability (area)  
**Find:** Corresponding x-value or z-score

**Example:** Find the score such that 90% of students score below it

### Calculator Method

**TI-83/84:**

invNorm(area to left, mean, SD)

**Examples:**

**90th percentile** ($$\\mu = 70$$, $$\\sigma = 5$$):  
invNorm(0.90, 70, 5) → 76.4

Meaning: 90% score below 76.4

**25th percentile (Q1):**  
invNorm(0.25, 70, 5) → 66.6

**75th percentile (Q3):**  
invNorm(0.75, 70, 5) → 73.4

## Assessing Normality

### Why It Matters

Many statistical methods assume normality. We need to check if data is approximately normal before applying these methods.

### Methods to Assess Normality

**1. Histogram/Dotplot:**
- Look for bell shape
- Check for symmetry
- Quick visual check

**2. Normal Probability Plot (Q-Q Plot):**
- Plot observed values vs. expected normal values
- **If roughly linear** → approximately normal
- **If curved or non-linear** → not normal

**3. Numerical Checks:**
- Mean ≈ Median (symmetry)
- Few outliers by 1.5 × IQR rule
- Most data within $$\\mu \\pm 2\\sigma$$

### What to Look For

**Approximately normal:**
✓ Bell-shaped histogram  
✓ Linear normal probability plot  
✓ Mean ≈ Median  
✓ About 68% within 1 SD, 95% within 2 SD

**Not normal:**
❌ Skewed histogram  
❌ Curved normal probability plot  
❌ Mean ≠ Median  
❌ Many outliers  
❌ Gaps or multiple peaks

## Common Mistakes

❌ **Assuming all data is normal**  
Many distributions are NOT normal!

❌ **Confusing z-scores with original values**  
z-scores are standardized, no units

❌ **Using empirical rule for non-normal data**  
Only valid for normal distributions

❌ **Forgetting to standardize before using table**  
Must convert to z-scores first

❌ **Reading wrong side of table**  
Most tables give area to LEFT

❌ **Not checking normality assumption**  
Methods based on normality won't work if data isn't normal

## Quick Reference

**Normal Distribution:**
- Parameters: $$\\mu$$ (mean), $$\\sigma$$ (SD)
- Notation: $$N(\\mu, \\sigma)$$
- Properties: Symmetric, bell-shaped, unimodal

**Empirical Rule (68-95-99.7):**
- 68% within $$\\mu \\pm 1\\sigma$$
- 95% within $$\\mu \\pm 2\\sigma$$
- 99.7% within $$\\mu \\pm 3\\sigma$$

**Z-Score:**
- Formula: $$z = \\frac{x - \\mu}{\\sigma}$$
- Interpretation: # of SDs from mean
- Standard normal: $$\\mu = 0$$, $$\\sigma = 1$$

**Calculator Commands:**
- normalcdf(lower, upper, μ, σ) for area/probability
- invNorm(area, μ, σ) for x-value

**Assessing Normality:**
- Histogram: bell-shaped?
- Normal plot: linear?
- Mean ≈ Median?

**Remember:** The normal distribution is powerful but not universal. Always check if the normality assumption is reasonable before using methods that require it!
`
    }
  });

  console.log('✅ Filled Normal Distributions\n');

  console.log('🎉🎉🎉 EXPLORING DATA COMPLETE! 🎉🎉🎉');
  console.log('✅ All 6 Exploring Data topics filled with comprehensive content');
  console.log('📊 Progress: 6/34 AP Statistics topics complete (18%)');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
