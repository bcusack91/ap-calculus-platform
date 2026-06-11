import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function updateTopic(slug: string, textContent: string) {
  try {
    await prisma.topic.update({ where: { slug }, data: { textContent } })
    console.log(`✅ ${slug}`)
  } catch (e) {
    console.warn(`⚠️  ${slug}: ${(e as Error).message}`)
  }
}

async function main() {
  console.log('📊 Expanding AP Stats textContent (part 1/4)…')

  await updateTopic('types-data-sampling', `
# Types of Data and Sampling

## Types of Data

**Categorical (Qualitative) Data**
- Data that describes qualities or characteristics
- Cannot be ordered meaningfully (not about size/amount)
- Examples: color, political party, type of fruit
- Divided into:
  - **Nominal:** no natural ordering (red/blue/green)
  - **Ordinal:** natural ordering (small/medium/large, freshman/sophomore/junior/senior)

**Quantitative (Numerical) Data**
- Data that represents measurements or amounts
- Can be ordered and arithmetic makes sense
- Examples: height, weight, age, test score
- Divided into:
  - **Discrete:** counts, whole numbers (number of siblings, cars sold)
  - **Continuous:** measured, any value in a range (height, time, weight)

## Key Definitions

**Population:** entire group of individuals we want information about
- Example: all AP Statistics students in the United States

**Sample:** subset of the population we actually collect data from
- Example: 500 randomly selected AP Statistics students

**Parameter:** numerical summary of a population (unknown, fixed)
- Notation: usually Greek letters (μ, σ, p)
- Example: true mean score of all AP Stat students

**Statistic:** numerical summary of a sample (known, varies sample to sample)
- Notation: usually letters (\\\\(\bar{x}\\\\), s, \\\\(\hat{p}\\\\))
- Example: mean score of 500 sampled students

## Sampling Methods

**Simple Random Sample (SRS)**
- Every individual has equal chance of selection
- Best method when population is accessible
- Use random number generator or table
- Eliminates selection bias

**Stratified Random Sample**
- Divide population into homogeneous groups (strata)
- Randomly sample from each stratum proportionally
- Better representation of subgroups
- Example: stratify by grade level, then randomly select from each

**Cluster Sample**
- Divide population into clusters (typically geographic)
- Randomly select entire clusters
- Less expensive than SRS; useful when population spread out
- Risk: clusters not representative

**Systematic Sample**
- Select every \\\\(k\\\\)-th individual from ordered list
- Simple to implement
- Risk: hidden pattern in list

**Convenience Sample** (avoid for inference)
- Sample whoever is easiest to reach
- Biased; generally not representative

## Common Sampling Biases

**Sampling bias (selection bias):** certain individuals more likely to be selected
- Convenience sample at mall (misses online shoppers)

**Response bias:** individuals respond untruthfully or refuse
- Loaded question: "Don't you agree this policy is wasteful?"
- Shy respondents not answering honestly

**Non-response bias:** some selected individuals don't respond
- Mail survey with 40% return rate

**Undercoverage:** some part of population not accessible
- Phone survey (misses homeless)

## Worked Example

**Scenario:** A school wants to estimate mean SAT score for all 1,200 seniors.

**Method 1 (SRS):** Generate 100 random student IDs from 1–1200, compute mean score for those students.

**Method 2 (Stratified):** Divide into 3 strata by gender (400 male, 500 female, 300 nonbinary). From each stratum, randomly select 33–34 students. Compute mean.

**Method 3 (Systematic):** Generate random starting point (say, 5), then select students 5, 17, 29, 41, ... until 100 selected.

## Decision Rule: When to Use Each

- **SRS:** population list available, want unbiased sample, resources sufficient
- **Stratified:** important subgroups exist, want equal representation of subgroups
- **Cluster:** population geographically spread, population list unavailable, budget limited
- **Avoid convenience/systematic:** if inference accuracy is important

## AP Exam Tip

On FRQ prompt about study design, identify:
1. **Population** (who are we studying?)
2. **Sample method** (how were subjects selected?)
3. **Bias present?** (selection, response, non-response, undercoverage?)
4. **Why this method?** (explain trade-offs)

Common error: assuming \\\\(\bar{x}\\\\) = μ just because you have a large sample. Sampling bias can produce bad estimates even with large n.
`)

  await updateTopic('displaying-distributions-graphs', `
# Displaying Distributions with Graphs

## Choosing a Display

| Data Type | Best Graph | Why |
|-----------|-----------|-----|
| One quantitative variable, small n | **Dotplot** | shows individual values |
| One quantitative variable, medium n | **Stemplot** | organizes and shows shape |
| One quantitative variable, large n | **Histogram** | groups into bins |
| One quantitative variable, compare groups | **Parallel boxplots** | side-by-side comparison |
| Cumulative distribution | **Ogive** | shows percentiles |
| Two quantitative variables | **Scatterplot** | shows relationship |
| Categorical variable | **Bar chart / Pie chart** | shows proportions |

## Dotplot

**Structure:**
- Horizontal axis: values of variable
- Dots stacked vertically for each value
- One dot = one data point

**Advantages:** sees every individual value, shows gaps and clusters
**Disadvantages:** crowded with large datasets

## Stemplot (Stem-and-Leaf Plot)

**Structure:**
- Stem: tens digit (left side)
- Leaf: ones digit (right side)
- Leaves ordered left-to-right

**Example:** Dataset 12, 15, 18, 21, 23, 25
\`\`\`
1 | 2 5 8
2 | 1 3 5
\`\`\`

Interpreting: stem = 1, leaf = 2 means 12

**Back-to-back stemplot:** compare two distributions
\`\`\`
Group A | stem | Group B
  8 5 2 |  1   | 3 4 7
    1 0 |  2   | 2 5 8
\`\`\`

## Histogram

**Structure:**
- Bins (class intervals) on x-axis
- Frequency (count) on y-axis
- Bars touch (data is continuous)
- Height = frequency (or relative frequency ÷ width)

**Key choice:** width of bins
- Too wide: lose detail
- Too narrow: too fragmented

**Important:** area of bar = relative frequency when using density scale

## Boxplot

**Structure:**
- **Box:** from Q1 to Q3 (middle 50%)
- **Line in box:** median (Q2)
- **Whiskers:** extend to minimum/maximum (or 1.5·IQR rule)
- **Dots:** outliers beyond whiskers

**Formula for outlier detection:**
- Lower fence: \\\\(Q1 - 1.5(IQR)\\\\)
- Upper fence: \\\\(Q3 + 1.5(IQR)\\\\)
- Points outside fences are outliers

## Ogive (Cumulative Distribution)

**Structure:**
- x-axis: values
- y-axis: cumulative relative frequency (0 to 1 or 0% to 100%)
- Points connected by line segments
- Always increasing (non-decreasing)

**Use:** find percentiles
- Read up from x-value to curve, then left to y-axis
- Or read left from y-axis to curve, then down to x-axis

## Worked Example

**Data:** Test scores for 20 students: 62, 68, 71, 74, 74, 75, 77, 78, 80, 81, 82, 83, 85, 86, 87, 88, 90, 92, 94, 98

**Stemplot:**
\`\`\`
6 | 2 8
7 | 1 4 4 5 7 8
8 | 0 1 2 3 5 6 7 8
9 | 0 2 4 8
\`\`\`

**Histogram (bins 60-70, 70-80, 80-90, 90-100):**
- [60, 70): 2 students
- [70, 80): 6 students
- [80, 90): 8 students
- [90, 100]: 4 students

**Boxplot:** Q1 ≈ 74.5, Q2 ≈ 82.5, Q3 ≈ 87.5, range 62–98, no outliers

## Common Mistakes

1. **Histogram bars not touching:** bars should touch (continuous data)
2. **Mislabeling x-axis in stemplot:** leaves must be single digit
3. **Ignoring class width in histogram:** density = frequency ÷ width
4. **Outlier calculation:** use 1.5·IQR rule (not "looks far away")
5. **Confusing relative vs. cumulative:** ogive uses cumulative, histogram uses frequency

## AP Exam Tip

When asked to "display" data, choose the method that best shows the feature in question:
- Comparing shapes of two distributions? → **Parallel boxplots or back-to-back stemplots**
- Seeing exact values? → **Dotplot or stemplot**
- Large dataset? → **Histogram**
- Finding a percentile? → **Ogive**

Always label axes and title your graph.
`)

  await updateTopic('describing-distributions', `
# Describing Distributions

## SOCS Framework

Always describe a distribution using **S–O–C–S**:
1. **Shape**
2. **Outliers**
3. **Center**
4. **Spread**

## Shape

**Symmetry:**
- **Symmetric:** left and right halves mirror each other (mean ≈ median)
- **Skewed left (negatively skewed):** tail extends left, peak right (mean < median)
- **Skewed right (positively skewed):** tail extends right, peak left (mean > median)

**Modality:**
- **Unimodal:** one peak
- **Bimodal:** two peaks (often two subpopulations)
- **Multimodal:** more than two peaks
- **Uniform:** roughly equal height across range

**Peakedness:**
- **Roughly normal** (bell curve)
- **Flatter than normal** (platykurtic)
- **Sharper than normal** (leptokurtic)

## Outliers

**Definition:** observations unusually far from the rest
- Identify using boxplot (beyond whiskers using 1.5·IQR rule)
- Or context: "100 hours of TV watching" when most watch <20

**Impact:**
- Pull mean toward outlier (mean not resistant)
- Median unaffected (median is resistant)
- Increase standard deviation and range

**Investigation:** is it a genuine measurement, data entry error, or unusual case?

## Center

**Mean (\\\\(\\bar{x}\\\\)):** arithmetic average
- \\\\(\\bar{x} = \\frac{\\sum x_i}{n}\\\\)
- Pulled by outliers (not resistant)

**Median:** middle value when ordered
- 50th percentile
- Resistant to outliers
- Preferred for skewed distributions

**Mode:** most frequent value
- Used for categorical or discrete data

**Rule of thumb:**
- Symmetric distribution: mean ≈ median
- Skewed distribution: prefer median

## Spread

**Range:** max − min
- Simplest measure
- Affected by outliers
- Not resistant

**Interquartile Range (IQR):** \\\\(Q3 - Q1\\\\)
- Middle 50% of data
- Resistant to outliers
- Preferred for skewed distributions

**Variance (\\\\(s^2\\\\)):** average squared deviation from mean
- \\\\(s^2 = \\frac{\\sum(x_i - \\bar{x})^2}{n-1}\\\\) (sample variance, divide by n−1)

**Standard Deviation (\\\\(s\\\\)):** square root of variance
- \\\\(s = \\sqrt{s^2}\\\\)
- Same units as data
- Measures typical distance from mean
- Estimated: in roughly normal data, about 68% within 1s of mean

## Worked Example

**Data:** Heights (inches) of 10 students: 62, 64, 65, 66, 67, 68, 69, 71, 72, 75

**SOCS Description:**

1. **Shape:** roughly unimodal and symmetric (slight right skew due to 75)
2. **Outliers:** boxplot Q1 ≈ 65.5, Q3 ≈ 70.5, IQR = 5; fences at 65.5 − 7.5 = 58 and 70.5 + 7.5 = 78. No outliers.
3. **Center:** mean = \\\\(\\frac{62+64+...+75}{10} = 67.9\\\\) inches; median = \\\\(\\frac{67+68}{2} = 67.5\\\\) inches (very close, confirming near symmetry)
4. **Spread:** range = 75 − 62 = 13 inches; IQR = 5 inches; \\\\(s \\approx 3.7\\\\) inches

## Comparison Language

When comparing two distributions:

**Shape:** "Distribution A is symmetric while Distribution B is right-skewed."

**Center:** "The median for Group X is approximately _____ inches, compared to _____ inches for Group Y, so Group X tends to be taller."

**Spread:** "Group X has an IQR of _____, while Group Y has IQR of _____, so Group Y is more variable."

**Outliers:** "Distribution A has one outlier at _____, while Distribution B has no outliers."

## Common Mistakes

1. Saying "mean = 50" when you haven't calculated it
2. Forgetting to identify shape when asked to describe
3. Confusing resistant vs. non-resistant (median is resistant; mean is not)
4. Using mean and median interchangeably in skewed data

## AP Exam Tip

On free response, examiners want to see you use **SOCS** explicitly. Write:
- "**Shape:** ..."
- "**Outliers:** ..."
- "**Center:** ..."
- "**Spread:** ..."

Use appropriate statistics for the shape (median/IQR for skewed; mean/std dev for symmetric).
`)

  await updateTopic('measures-of-center', `
# Measures of Center

## Mean (\\\\(\\bar{x}\\\\))

**Formula:**
$$\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n}$$

**Interpretation:** balance point of the data; if data were balanced on a fulcrum at \\\\(\\bar{x}\\\\), it would balance

**Properties:**
- Uses every value in dataset
- **Not resistant:** one extreme value shifts mean significantly
- Pulled toward outliers and skewed tail
- For symmetric distributions: mean ≈ median

**When to use:** symmetric, unimodal data with no extreme outliers

## Median

**Definition:** middle value when data ordered from smallest to largest
- If n is odd: middle value is at position \\\\(\\frac{n+1}{2}\\\\)
- If n is even: average of two middle values at positions \\\\(\\frac{n}{2}\\\\) and \\\\(\\frac{n+1}{2}\\\\)

**Properties:**
- **Resistant:** unaffected by extreme outliers
- Divides data in half: 50% below, 50% above (50th percentile)
- For skewed data: median is more representative than mean

**When to use:** skewed distributions, data with outliers

## Mode

**Definition:** value that appears most frequently

**Properties:**
- Only measure for categorical data
- Can have multiple modes (bimodal, multimodal)
- Not useful if all values appear once (no mode)

**When to use:** categorical data; for quantitative data, usually less informative

## Effect of Outliers

**Example:** Dataset: 10, 12, 14, 16, 18 (mean = 14, median = 14)

Add outlier 50:
- New dataset: 10, 12, 14, 16, 18, 50
- New mean = \\\\(\\frac{10+12+14+16+18+50}{6} = \\frac{120}{6} = 20\\\\)
- New median = \\\\(\\frac{14+16}{2} = 15\\\\)

**Conclusion:** mean shifted from 14 to 20 (43% change); median only shifted from 14 to 15 (7% change)

## Worked Example

**Scenario:** Customer wait times (minutes) at service desk: 3, 5, 5, 7, 8, 10, 11, 45

**Mean:** \\\\(\\bar{x} = \\frac{3+5+5+7+8+10+11+45}{8} = \\frac{94}{8} = 11.75\\\\) minutes

**Median:** Ordered list has 8 values. Middle two are 7 and 8. Median = \\\\(\\frac{7+8}{2} = 7.5\\\\) minutes

**Mode:** 5 (appears twice; all others appear once)

**Outlier effect:** The 45-minute wait is an outlier. Mean (11.75) is pulled up; median (7.5) remains representative.

**Decision:** Report median (7.5 min) to customers. Investigate why 45 happened.

## Decision Rule: When to Use Each

| Situation | Use | Why |
|-----------|-----|-----|
| Symmetric, no outliers | Mean | uses all data, standard choice |
| Skewed or outliers present | Median | resistant to extreme values |
| Categorical data | Mode | only option for categories |
| Reporting to general audience | Median | easier to interpret (50th percentile) |
| Research/statistical inference | Mean | mathematical properties |

## Common Mistakes

1. **Calculating mean incorrectly:** divide by n, not n−1
2. **Confusing median and mode:** median is middle value; mode is most frequent
3. **Ignoring outliers:** use median when extreme values present
4. **Using mean with categorical data:** not meaningful

## AP Exam Tip

When asked "which measure is best?" answer:
1. Identify if data is skewed or has outliers (look at boxplot/histogram/stemplot)
2. If yes: use **median** ("resistant to outliers")
3. If no (symmetric): either **mean or median** is fine (mention both are close)
4. Cite the shape or presence of outliers in your justification

Example response: "Use median (8 minutes) because the distribution is right-skewed with an outlier at 45 minutes, and the median is resistant to extreme values."
`)

  await updateTopic('measures-of-spread', `
# Measures of Spread

## Range

**Formula:**
$$\\text{Range} = \\text{max} - \\text{min}$$

**Properties:**
- Simplest measure
- Uses only two values (min, max)
- **Not resistant:** one outlier inflates range
- Affected by sample size: larger samples tend to have larger range

**Example:** data 5, 8, 10, 12, 15 → range = 15 − 5 = 10

## Interquartile Range (IQR)

**Definitions:**
- Q1 (first quartile): 25th percentile
- Q2 (second quartile): 50th percentile = median
- Q3 (third quartile): 75th percentile

**Formula:**
$$IQR = Q3 - Q1$$

**Interpretation:** spread of middle 50% of data

**Properties:**
- **Resistant:** unaffected by outliers (only uses middle half)
- Paired with median to describe center and spread of skewed data
- Comparable across datasets

**Finding Q1 and Q3:**
1. Order data
2. Find median (divides into lower and upper halves)
3. Q1 = median of lower half
4. Q3 = median of upper half

## Sample Variance (\\\\(s^2\\\\))

**Formula:**
$$s^2 = \\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n-1}$$

**Why n−1?** (not n)
- Use n−1 for **sample variance** (estimating population)
- Corrects for underestimation (Bessel's correction)
- Use n only for population variance \\\\(\\sigma^2\\\\)

**Properties:**
- Measures average squared deviation from mean
- Squared units (e.g., if data in inches, variance in square inches)
- Not resistant: affected by outliers
- Larger dataset → typically larger variance

## Sample Standard Deviation (\\\\(s\\\\))

**Formula:**
$$s = \\sqrt{s^2} = \\sqrt{\\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n-1}}$$

**Interpretation:**
- Typical (rough average) distance of data points from mean
- Same units as original data
- In approximately normal data: roughly 68% within 1s, 95% within 2s, 99.7% within 3s

**Properties:**
- **Not resistant:** affected by outliers
- Paired with mean (for symmetric data)
- Larger s → more spread

## Worked Example

**Data:** Test scores: 60, 70, 75, 80, 85, 90, 95
- n = 7, mean = \\\\(\\bar{x} = \\frac{595}{7} = 85\\\\)

**IQR calculation:**
- Lower half: 60, 70, 75 → Q1 = 70
- Upper half: 85, 90, 95 → Q3 = 90
- IQR = 90 − 70 = 20

**Variance calculation:**
$$s^2 = \\frac{(60-85)^2 + (70-85)^2 + (75-85)^2 + (80-85)^2 + (85-85)^2 + (90-85)^2 + (95-85)^2}{6}$$
$$= \\frac{625 + 225 + 100 + 25 + 0 + 25 + 100}{6} = \\frac{1100}{6} \\approx 183.33$$

**Standard deviation:**
$$s = \\sqrt{183.33} \\approx 13.54$$

Interpretation: Scores vary by about 13.54 points from the mean.

## Computational Shortcut for \\\\(s^2\\\\)

$$s^2 = \\frac{\\sum x_i^2 - \\frac{(\\sum x_i)^2}{n}}{n-1}$$

Avoids computing \\\\(\\bar{x}\\\\) explicitly; useful for calculators or spreadsheets.

## Resistance to Outliers

**Example:** Dataset 5, 8, 10, 12, 15

- Range: 15 − 5 = 10
- IQR: Q1 = 8, Q3 = 12 → IQR = 4
- s ≈ 3.74

Add outlier 100:
- New range: 100 − 5 = 95 (increased 9×)
- New IQR: 8 to 12 (unchanged)
- New s ≈ 37.6 (increased 10×)

**Conclusion:** IQR is resistant; range and s are not.

## Common Mistakes

1. **Dividing by n instead of n−1:** use n−1 for sample variance
2. **Forgetting to square deviations:** variance formula uses \\\\((x_i - \\bar{x})^2\\\\)
3. **Confusing variance and std dev:** std dev = \\\\(\\sqrt{\\text{variance}}\\\\)
4. **Misinterpreting s:** s is not "maximum distance from mean"; it's typical distance

## AP Exam Tip

When comparing spread:
- **Symmetric data, no outliers:** compare standard deviations
- **Skewed data or outliers:** compare IQR (resistant)
- Statement: "Distribution A (s = 5) is less spread than Distribution B (s = 8)."

Justify why you chose std dev vs. IQR based on shape of distributions.
`)

  await updateTopic('normal-distributions', `
# Normal Distributions

## Properties of Normal Distributions

**The Normal Curve:**
- Bell-shaped and symmetric around mean
- Mean = median = mode
- Defined by two parameters: mean μ and standard deviation σ
- Total area under curve = 1 (100% of probability)

**Visual Summary:**
- Center: mean μ
- Width: controlled by σ (larger σ → wider, flatter)
- Asymptotic: tails approach x-axis but never touch

## The 68-95-99.7 Rule

For normally distributed data:
- **68%** of data within 1σ of mean: μ ± σ
- **95%** of data within 2σ of mean: μ ± 2σ
- **99.7%** of data within 3σ of mean: μ ± 3σ
- (remaining 0.3% split equally in two tails)

**Example:** SAT scores normally distributed with μ = 1000, σ = 200

- 68% score between 800 and 1200
- 95% score between 600 and 1400
- 99.7% score between 400 and 1600

## Z-Scores (Standardization)

**Formula:**
$$z = \\frac{x - \\mu}{\\sigma}$$

**Interpretation:**
- z-score = number of standard deviations away from mean
- z > 0: above mean
- z < 0: below mean
- z = 0: at mean

**Standardization benefit:** transforms any normal distribution into **standard normal** (μ = 0, σ = 1)

**Example:** Score x = 1200 on SAT (μ = 1000, σ = 200):
$$z = \\frac{1200 - 1000}{200} = \\frac{200}{200} = 1$$

Score is 1 standard deviation above mean.

## Finding Normal Probabilities

**Using normalcdf(lower, upper, μ, σ):**
- Calculates \\\\(P(a < X < b)\\\\) for normal distribution
- Returns area under curve between a and b

**Example:** SAT scores X ~ N(1000, 200)
- \\\\(P(X < 1200) = P(Z < 1) =\\\\) normalcdf(−999, 1, 0, 1) ≈ 0.8413

## Finding Percentiles with invNorm

**Using invNorm(percentile, μ, σ):**
- Returns value corresponding to given percentile
- Inverse of normalcdf

**Example:** 90th percentile of SAT scores:
- invNorm(0.90, 1000, 200) ≈ 1256
- 90% of test-takers score below 1256

## Worked Example

**Scenario:** Adult female heights normally distributed with μ = 64 inches, σ = 2.5 inches.

**Question 1:** What percent of women are taller than 69 inches?

Step 1: Standardize
$$z = \\frac{69 - 64}{2.5} = \\frac{5}{2.5} = 2$$

Step 2: Find probability
\\\\(P(X > 69) = P(Z > 2) =\\\\) 1 − normalcdf(−999, 2, 0, 1) ≈ 1 − 0.9772 = 0.0228 or **2.28%**

**Question 2:** What height separates the shortest 25% from the rest?

Step 1: Use invNorm(0.25, 64, 2.5) ≈ **62.32 inches**

Interpretation: 25% of women are shorter than 62.32 inches.

## Common Student Mistakes

1. **Wrong z-score direction:** \\\\(z = \\frac{x - \\mu}{\\sigma}\\\\), not \\\\(\\frac{\\mu - x}{\\sigma}\\\\)
2. **Confusing normalcdf and invNorm:** normalcdf(value) → probability; invNorm(probability) → value
3. **Forgetting to standardize:** must convert to z-score before using standard normal table
4. **Area mistakes:** P(Z > 2) ≠ P(Z < 2); use complement if needed
5. **Ignoring context:** answer "0.0228" instead of "2.28% of women"

## When NOT to Use Normal Model

- Data is clearly skewed (check histogram/boxplot)
- Sample size too small (rule of thumb: n ≥ 30, or visually normal)
- Data has multiple peaks
- Outliers present

## AP Exam Tip

**On calculator problems:**
- Clearly state the distribution: "Let X ~ N(μ, σ)"
- Show your z-score: \\\\(z = \\frac{x - \\mu}{\\sigma}\\\\) = ...
- State calculator function: "Using normalcdf(lower, upper, μ, σ)..."
- Interpret result in context: "Therefore, approximately _____% of SAT scores fall between ___ and ___."

**Common FRQ mistake:** Not showing work on calculator commands. Examiners want to see setup even if you use calc.
`)

  await updateTopic('scatterplots-correlation', `
# Scatterplots and Correlation

## Scatterplots

**Structure:**
- x-axis: explanatory (independent) variable
- y-axis: response (dependent) variable
- Each point: one observation with both x and y values
- Use: explore relationship between two quantitative variables

**Reading a scatterplot:**
1. **Trend:** do points generally move up or down?
2. **Strength:** how tightly clustered around trend?
3. **Form:** is pattern linear, curved, or no pattern?
4. **Outliers:** any isolated points?

## Describing Relationships: Direction, Form, Strength

**Direction:**
- **Positive association:** as x increases, y tends to increase
- **Negative association:** as x increases, y tends to decrease
- **No association:** no discernible trend

**Form:**
- **Linear:** points cluster around straight line
- **Curved:** points follow curved pattern
- **No pattern:** points scattered randomly

**Strength:**
- **Strong:** points tightly clustered
- **Moderate:** visible trend with some scatter
- **Weak:** scatter with little visible trend

## The Correlation Coefficient (\\\\(r\\\\))

**Formula:**
$$r = \\frac{1}{n-1} \\sum_{i=1}^{n} \\left( \\frac{x_i - \\bar{x}}{s_x} \\right) \\left( \\frac{y_i - \\bar{y}}{s_y} \\right)$$

**Properties:**
- **Range:** −1 ≤ r ≤ 1
- **r = 1:** perfect positive linear relationship
- **r = −1:** perfect negative linear relationship
- **r = 0:** no linear relationship
- **r > 0:** positive association
- **r < 0:** negative association
- **Unitless:** r doesn't depend on units (inches vs. cm give same r)
- **Symmetric:** r(x, y) = r(y, x)

**Interpretation of |r|:**
- |r| ≥ 0.9: very strong
- 0.7 ≤ |r| < 0.9: strong
- 0.5 ≤ |r| < 0.7: moderate
- 0.3 ≤ |r| < 0.5: weak
- |r| < 0.3: very weak/negligible

## Limitations of \\\\(r\\\\)

1. **Measures linear association only**
   - Two variables may have strong curved relationship but r ≈ 0
   - Always plot scatterplot; don't rely on r alone

2. **Sensitive to outliers**
   - One extreme point can dramatically change r
   - Example: With outlier, r might change from 0.2 to 0.8

3. **r only quantifies strength, not causation**
   - Strong r doesn't prove x causes y
   - Confounding variables often explain relationship

4. **Restricted range reduces r**
   - If data shows only part of potential relationship, r is weaker

## Correlation ≠ Causation

**Example:** Ice cream sales and drowning deaths
- Both increase in summer
- Strong positive correlation (r ≈ 0.9)
- But neither causes the other; temperature is confounding variable

**Possible explanations for correlation:**
- **Causation:** x causes y (rare without experiment)
- **Reverse causation:** y causes x
- **Confounding variable:** third variable causes both x and y
- **Coincidence:** random correlation in unrelated variables

**Rule:** Correlation suggests association; prove causation with **randomized experiment**, not observational data.

## Worked Example

**Data:** 6 students, hours studied (x) vs. exam score (y)
| Hours | Score |
|-------|-------|
| 2 | 65 |
| 3 | 78 |
| 4 | 82 |
| 5 | 88 |
| 6 | 90 |
| 8 | 95 |

- \\\\(\\bar{x} = 4.67, s_x ≈ 1.97\\\\)
- \\\\(\\bar{y} = 83, s_y ≈ 10.05\\\\)
- \\\\(r ≈ 0.97\\\\) (very strong positive linear relationship)

**Interpretation:** Strong positive correlation suggests more study hours associated with higher scores.

## Common Mistakes

1. **Assuming r = 0.4 means no relationship:** relationship exists; it's just weak
2. **Claiming causation from strong r:** r alone doesn't prove causation
3. **Ignoring scatterplot:** r = 0.5 could be weak linear + curved pattern (plot it!)
4. **Confusing r and slope:** different concepts; strong r doesn't mean steep slope

## AP Exam Tip

When asked about relationship:
1. **Describe scatterplot:** direction, form, strength, outliers
2. **Calculate r:** state value (e.g., r ≈ 0.82)
3. **Interpret r:** "Strong positive linear correlation"
4. **Caveat:** "Correlation does not imply causation. A confounding variable such as _____ may explain the relationship."

Example: "There is a strong positive correlation (r ≈ 0.85) between hours studied and exam score. Students who study more tend to score higher. However, this does not prove studying causes higher scores; student motivation might influence both variables."
`)

  await updateTopic('least-squares-regression', `
# Least-Squares Regression

## Regression Line (Line of Best Fit)

**Purpose:** predict response variable y from explanatory variable x

**Goal:** minimize vertical distances (residuals) from points to line

**Form:**
$$\\hat{y} = a + bx$$

where:
- \\\\(\\hat{y}\\\\) = predicted y value (not actual y)
- a = y-intercept
- b = slope

## Finding the Regression Line

**Slope:**
$$b = r \\cdot \\frac{s_y}{s_x}$$

where r = correlation, \\\\(s_x\\\\) = std dev of x, \\\\(s_y\\\\) = std dev of y

**Y-intercept:**
$$a = \\bar{y} - b\\bar{x}$$

**Key fact:** regression line always passes through \\\\((\\bar{x}, \\bar{y})\\\\)

## Interpreting Slope and Intercept

**Slope (b):** predicted change in y for each 1-unit increase in x
- **Positive slope:** as x increases, predicted y increases
- **Negative slope:** as x increases, predicted y decreases
- **Units:** same ratio as y-units per x-unit

**Example:** \\\\(\\hat{\\text{Score}} = 60 + 5 \\cdot \\text{Hours}\\\\)
- Slope b = 5: for each additional hour studied, predicted score increases by 5 points
- Intercept a = 60: predicted score if 0 hours studied (often not meaningful in context)

**Y-intercept (a):** predicted y value when x = 0
- Meaningful only if x = 0 is reasonable in context
- Example: predicted exam score with 0 hours studied may not make sense

## Making Predictions

**Prediction for given x:**
1. Substitute x into regression equation
2. Calculate \\\\(\\hat{y}\\\\)
3. Caveat: only valid for x-values in range of data

**Extrapolation:** predicting beyond range of data
- **Risky:** relationship may not hold outside observed range
- Avoid extrapolation unless strong theoretical reason

**Example:** If data ranges 1–6 hours, predicting score for 50 hours is extrapolation (unreliable)

## Worked Example

**Data:** 6 students, hours studied (x) vs. exam score (y)
| Hours (x) | Score (y) |
|-----------|-----------|
| 2 | 65 |
| 3 | 78 |
| 4 | 82 |
| 5 | 88 |
| 6 | 90 |
| 8 | 95 |

**Given:** \\\\(\\bar{x} = 4.67, \\bar{y} = 83, s_x ≈ 1.97, s_y ≈ 10.05, r ≈ 0.97\\\\)

**Step 1: Calculate slope**
$$b = 0.97 \\cdot \\frac{10.05}{1.97} ≈ 0.97 \\cdot 5.10 ≈ 4.95$$

**Step 2: Calculate intercept**
$$a = 83 - 4.95 \\cdot 4.67 ≈ 83 - 23.1 ≈ 59.9$$

**Regression line:** \\\\(\\hat{\\text{Score}} ≈ 59.9 + 4.95 \\cdot \\text{Hours}\\\\)

**Prediction:** If student studies 7 hours:
$$\\hat{\\text{Score}} = 59.9 + 4.95(7) = 59.9 + 34.65 = 94.55 ≈ 94.6\\text{ points}$$

(This is interpolation; 7 hours is within data range 2–8)

## Residuals and Residual Plots

**Residual:** actual y − predicted y = \\\\(y - \\hat{y}\\\\)

**Residual plot:** scatterplot of residuals vs. x values
- If residuals randomly scattered around 0 → linear model is appropriate
- If residuals show pattern (curved, increasing) → linear model inadequate

**Sum of residuals:** always ≈ 0 for least-squares regression

## Common Mistakes

1. **Swapping x and y:** regression of y on x ≠ regression of x on y
2. **Over-interpreting intercept:** a = 60 (x = 0) may have no real meaning
3. **Extrapolating recklessly:** don't predict far outside data range
4. **Confusing \\\\(\\hat{y}\\\\) with y:** \\\\(\\hat{y}\\\\) is prediction, not actual value
5. **Ignoring residuals:** always check residual plot to validate linear assumption

## AP Exam Tip

**FRQ response format:**
1. **Show work:** state formula for slope \\\\(b = r \\cdot \\frac{s_y}{s_x}\\\\) and intercept \\\\(a = \\bar{y} - b\\bar{x}\\\\)
2. **Write regression equation:** \\\\(\\hat{\\text{variable}} = a + b \\cdot \\text{variable}\\\\)
3. **Interpret slope in context:** "For each additional [x-unit], predicted [y-variable] increases by [slope value] [y-units]."
4. **Caveat on predictions:** "This prediction assumes the linear relationship continues in this range" or note if extrapolating

Example: "\\\\(\\hat{\\text{Score}} = 59.9 + 4.95 \\cdot \\text{Hours}\\\\). For each additional hour studied, we predict the exam score increases by 4.95 points."
`)

  await updateTopic('coefficient-determination', `
# The Coefficient of Determination (\\\\(r^2\\\\))

## Definition and Interpretation

**Coefficient of determination (\\\\(r^2\\\\)):** proportion of variation in response variable y explained by linear relationship with x

**Formula:**
$$r^2 = (r)^2$$

where r = correlation coefficient

**Range:** 0 ≤ \\\\(r^2\\\\) ≤ 1 (always non-negative)

**Interpretation:**
- \\\\(r^2 = 0.81\\\\) means 81% of variation in y explained by linear model; 19% due to other factors
- \\\\(r^2 = 0.40\\\\) means 40% of variation explained; model captures less than half

## Understanding Variation

**Total variation in y:** measured by sum of squared deviations from mean
$$\\text{Variation} = \\sum(y_i - \\bar{y})^2$$

**Variation explained by regression:** measured by sum of squared deviations of predicted values from mean
$$\\text{Explained variation} = \\sum(\\hat{y}_i - \\bar{y})^2$$

**Variation not explained (residual):** 
$$\\text{Residual variation} = \\sum(y_i - \\hat{y}_i)^2$$

**Decomposition:**
$$\\text{Total variation} = \\text{Explained variation} + \\text{Residual variation}$$

$$r^2 = \\frac{\\text{Explained variation}}{\\text{Total variation}}$$

## Worked Example

**Scenario:** 5 students, hours studied (x) vs. exam score (y)
| Hours | Score | \\\\(\\hat{y}\\\\) | \\\\(y - \\bar{y}\\\\) | \\\\(\\hat{y} - \\bar{y}\\\\) | \\\\(y - \\hat{y}\\\\) |
|-------|-------|--------|-----------|------------|---------|
| 1 | 55 | 60 | -15 | -20 | -5 |
| 2 | 65 | 67 | -5 | -13 | -2 |
| 3 | 72 | 74 | 2 | -6 | -2 |
| 4 | 83 | 81 | 13 | 7 | 2 |
| 5 | 90 | 88 | 20 | 14 | 2 |

Mean score \\\\(\\bar{y} = 73\\\\). Regression line: \\\\(\\hat{y} = 53 + 7x\\\\), so \\\\(r ≈ 0.98\\\\)

**Total variation:**
$$\\sum(y_i - \\bar{y})^2 = (-15)^2 + (-5)^2 + 2^2 + 13^2 + 20^2 = 225 + 25 + 4 + 169 + 400 = 823$$

**Explained variation:** approximately equal to total variation when \\\\(r\\\\) is near 1.

**Simplified calculation:** \\\\(r^2 = (0.98)^2 = 0.9604 ≈ 0.96\\\\)

**Interpretation:** 96% of variation in exam scores is explained by hours studied; 4% due to other factors (test difficulty, student ability, etc.).

## Relationship Between \\\\(r\\\\) and \\\\(r^2\\\\)

- \\\\(r = 0.9 → r^2 = 0.81\\\\) (81% variation explained)
- \\\\(r = 0.8 → r^2 = 0.64\\\\) (64% variation explained)
- \\\\(r = 0.7 → r^2 = 0.49\\\\) (49% variation explained)
- \\\\(r = 0.5 → r^2 = 0.25\\\\) (25% variation explained)

**Note:** small increase in r causes larger increase in \\\\(r^2\\\\) (quadratic relationship)

## Context: When to Report \\\\(r^2\\\\)

**Use \\\\(r^2\\\\) when:**
- Describing how well regression model predicts (goodness of fit)
- Comparing models: larger \\\\(r^2\\\\) → better fit
- Assessing practical significance: is 42% explained variation enough for our purpose?

**Caution:** high \\\\(r^2\\\\) doesn't prove causation; still need experimental design

## Common Mistakes

1. **Confusing r and \\\\(r^2\\\\):** r = correlation (−1 to 1); \\\\(r^2\\\\) = proportion (0 to 1)
2. **Claiming "85% of y equals x":** \\\\(r^2 = 0.85\\\\) means "85% of variation in y is explained by x," not "y is 85% determined by x"
3. **Reporting \\\\(r^2\\\\) as percentage but computing as decimal:** if \\\\(r^2 = 0.72\\\\), report as 72%, not 0.72%
4. **Ignoring other factors:** \\\\(r^2 = 0.60\\\\) means 40% of variation NOT explained; other variables matter

## AP Exam Tip

**When asked to interpret \\\\(r^2\\\\):**

Template: "[r²]% of the variation in [y-variable] is explained by the linear regression model with [x-variable]. The remaining [100−r²]% is due to other factors."

**Example response:** "\\\\(r^2 = 0.84\\\\) means that 84% of the variation in exam scores can be explained by the linear relationship with hours studied. The remaining 16% of variation is attributable to other factors such as prior knowledge, test difficulty, or sleep quality."

**On calculator:** \\\\(r^2 = \\text{coefficient of determination}\\\\) displayed when you fit linear regression (alongside slope, intercept, r).
`)

  console.log('Done.')
}

main().catch(e => { console.error(e); process.exit(1) }).finally(() => prisma.$disconnect())
