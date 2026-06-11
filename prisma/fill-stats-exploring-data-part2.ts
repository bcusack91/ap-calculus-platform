import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📝 Filling AP Statistics: Exploring Data (Part 2)...\n');

  // Topic 3: Describing Distributions
  await prisma.topic.update({
    where: { slug: 'describing-distributions' },
    data: {
      textContent: `# Describing Distributions

## Introduction

Looking at a graph is just the first step. To fully understand data, we must **describe** what we see using precise statistical language. The framework **SOCS** (Shape, Outliers, Center, Spread) provides a systematic approach to describing any distribution.

## Shape

Shape describes the overall pattern of the distribution.

### Symmetry

**Symmetric Distribution:**
- Left side mirrors right side
- Mean ≈ Median
- Balanced around center

**Examples:**
- Normal (bell-shaped) distributions
- Uniform distributions
- Heights of adult males

**How to identify:** If you fold the distribution at the center, both sides match

### Skewness

**Right-Skewed (Positively Skewed):**
- Tail extends to the right
- Mean > Median
- Most data on left, few high values pull mean right

**Examples:**
- Income (most people earn moderate amounts, few earn very high)
- Home prices
- Test scores when test is easy (most score high, few score low)

**Visual:** Peak on left, tail stretches right

**Left-Skewed (Negatively Skewed):**
- Tail extends to the left
- Mean < Median
- Most data on right, few low values pull mean left

**Examples:**
- Age at death (most live to old age, few die young)
- Test scores when test is hard (most score low, few score high)

**Visual:** Peak on right, tail stretches left

**Memory aid:** Skewness direction = direction of the tail (not the peak!)

### Modality

**Number of peaks (modes) in distribution:**

**Unimodal:** One clear peak
- Most common pattern
- Examples: heights, standardized test scores

**Bimodal:** Two distinct peaks
- Suggests two different groups
- Examples: Heights of adults (male peak and female peak)

**Multimodal:** More than two peaks
- Multiple distinct groups
- Less common

**Uniform:** No peaks, all values equally likely
- Flat distribution
- Example: Rolling a fair die

**How to determine:** Count prominent "humps" in the distribution

### Special Shapes

**Normal (Bell-Shaped):**
- Symmetric
- Unimodal
- Mean = Median = Mode
- Most data near center, decreasing towards extremes
- Follows empirical rule (68-95-99.7)

**Uniform:**
- All values equally likely
- Rectangular shape
- No mode

**Exponential:**
- Decreasing pattern
- Extremely right-skewed
- Many small values, few large values

## Outliers

**Outliers** are observations that fall notably far from the overall pattern.

### Identifying Outliers

**Visual method:**
- Look for isolated points
- Values separated from main cluster

**1.5 × IQR Rule (for boxplots):**
- Calculate $$IQR = Q3 - Q1$$
- Lower fence: $$Q1 - 1.5 \\times IQR$$
- Upper fence: $$Q3 + 1.5 \\times IQR$$
- Outliers fall beyond fences

**Example:**
- Q1 = 65, Q3 = 85
- IQR = 85 - 65 = 20
- Lower fence: 65 - 1.5(20) = 65 - 30 = 35
- Upper fence: 85 + 1.5(20) = 85 + 30 = 115
- Values below 35 or above 115 are outliers

**Standard deviation method:**
- Outliers > 2 or 3 standard deviations from mean
- Less commonly used
- Appropriate for symmetric distributions

### Reporting Outliers

**Always:**
- Note their presence: "There is one outlier at 150"
- Give actual values if possible
- Consider potential causes

**Potential causes:**
- **Measurement error:** Mistake in recording
- **Data entry error:** Typo when entering data
- **Legitimate extreme value:** Unusual but real observation
- **Different population:** Doesn't belong in this group

**What to do:**
- Investigate cause if possible
- Report with and without outliers (if they affect conclusions)
- Don't automatically delete (unless proven error)

## Center

Center describes the "typical" or "middle" value.

### Mean vs. Median

**When to use each:**

**Mean ($$\\bar{x}$$):**
- Symmetric distributions
- No outliers
- Want to use all data values
- Mathematical properties needed

**Median:**
- Skewed distributions
- Presence of outliers
- Want resistant measure
- Ordinal data

**Relationship to shape:**
- **Symmetric:** Mean ≈ Median
- **Right-skewed:** Mean > Median (mean pulled right by tail)
- **Left-skewed:** Mean < Median (mean pulled left by tail)

### Mode

**Definition:** Most frequently occurring value

**When reported:**
- Categorical data
- Describing bimodal distributions
- Identifying popular values

**Limitations:**
- May not exist (all values occur once)
- May not be unique (multiple modes)
- Not useful for continuous data with no repeated values

## Spread

Spread describes the variability or dispersion of data.

### Range

**Definition:** Maximum - Minimum

**Formula:** $$Range = Max - Min$$

**Advantages:**
- Easy to calculate
- Easy to understand
- Gives sense of total spread

**Disadvantages:**
- Affected by outliers
- Ignores distribution between extremes
- Only uses two values

**Example:**
- Data: 12, 15, 18, 20, 22, 25, 100
- Range = 100 - 12 = 88
- Dominated by outlier (100)

### Interquartile Range (IQR)

**Definition:** Range of middle 50% of data

**Formula:** $$IQR = Q3 - Q1$$

**Advantages:**
- Resistant to outliers
- Focuses on middle of distribution
- Useful for boxplots

**Disadvantages:**
- Ignores lowest 25% and highest 25%
- Less intuitive than range

**Example:**
- Q1 = 65, Q3 = 85
- IQR = 85 - 65 = 20
- Middle 50% of data spans 20 points

**Interpretation:** "Half the data falls within [IQR] points"

### Standard Deviation

**Definition:** Average distance from the mean

**Interpretation:** Typical deviation from mean

**Advantages:**
- Uses all data values
- Has important mathematical properties
- Basis for many statistical methods

**Disadvantages:**
- Affected by outliers
- Less intuitive than range
- Only meaningful for roughly symmetric distributions

**When to report:**
- Symmetric distributions
- No extreme outliers
- Want to use standard statistical methods

## Context Matters!

### Units

**Always include units in descriptions:**

❌ "The mean is 68"  
✓ "The mean height is 68 inches"

❌ "The standard deviation is 3.5"  
✓ "The standard deviation of test scores is 3.5 points"

### Comparison

**Describe in context of:**
- What you'd expect
- Other groups
- Previous studies

**Examples:**
- "Students averaged 85%, which is higher than last year's 78%"
- "The standard deviation of 15 points shows high variability"

## Complete Description Template

**A complete distribution description includes:**

**Shape:**
"The distribution of [variable] is [symmetric/right-skewed/left-skewed] and [unimodal/bimodal/etc.]"

**Outliers:**
"There is/are [number] outlier(s) at [value(s)]" or "There are no apparent outliers"

**Center:**
"The [mean/median] [variable] is [value with units]"

**Spread:**
"The [variable] ranges from [min] to [max] [units]" or "The standard deviation is [value] [units]"

**Example:**

*Data: Test scores in AP Statistics class*

"The distribution of test scores is slightly right-skewed and unimodal with one outlier at 45%. The median score is 82%, indicating that half the students scored below 82%. Scores range from 45% to 98%, with an IQR of 12 percentage points, meaning the middle 50% of students scored within a 12-point range. The outlier at 45% is notably below the main cluster of scores between 70% and 98%."

## Common Patterns and Interpretations

### What Shape Tells Us

**Symmetric:**
- Process or measurement is balanced
- Natural variation around center
- Use mean and standard deviation

**Right-skewed:**
- Floor effect (minimum limit)
- Most values small, few very large
- Use median and IQR

**Left-skewed:**
- Ceiling effect (maximum limit)
- Most values large, few very small
- Use median and IQR

**Bimodal:**
- Two distinct groups mixed together
- Consider separating and analyzing separately

### What Outliers Tell Us

**Potential meanings:**
- Errors (investigate and possibly correct)
- Unusual but legitimate cases
- Different population mixed in
- Rare but important events

**Impact:**
- Affect mean more than median
- Affect standard deviation more than IQR
- Can change conclusions if not addressed

### What Spread Tells Us

**Large spread:**
- High variability
- Data quite different from typical value
- Less predictability

**Small spread:**
- Low variability
- Data close to typical value
- More consistency, predictability

## Comparing Distributions

**When comparing two or more distributions:**

**Address each of SOCS:**

**Shape:**
- "Group A is symmetric while Group B is right-skewed"

**Outliers:**
- "Both groups have outliers, but Group A's are more extreme"

**Center:**
- "Group A has a higher median (75) than Group B (68)"

**Spread:**
- "Group A shows more variability (SD = 12) than Group B (SD = 8)"

**Example comparison:**

"Both male and female height distributions are roughly symmetric and unimodal. Males have a higher mean height (70 inches) compared to females (64 inches), a difference of 6 inches. Both distributions have similar spreads, with standard deviations of approximately 3 inches. Neither distribution shows outliers."

## Common Mistakes

❌ **Confusing skewness direction** (it's the tail, not the peak!)  
❌ **Using mean with skewed data** (median is more appropriate)  
❌ **Reporting center without spread** (both are needed!)  
❌ **Ignoring units** (always include them)  
❌ **Incomplete descriptions** (use full SOCS framework)  
❌ **Not describing in context** (relate to actual situation)  
❌ **Confusing SD and IQR** (they measure spread differently)

## Quick Reference

**SOCS Framework:**
- **S**hape: Symmetric? Skewed (which direction)? Unimodal/bimodal?
- **O**utliers: Present? Where? How many?
- **C**enter: Mean or median (with units!)
- **S**pread: Range, IQR, or SD (with units!)

**Mean vs. Median:**
- Symmetric, no outliers → Use mean
- Skewed or outliers → Use median

**SD vs. IQR:**
- Symmetric, no outliers → Use SD
- Skewed or outliers → Use IQR

**Skewness:**
- Right-skewed: Mean > Median, tail to right
- Left-skewed: Mean < Median, tail to left
- Symmetric: Mean ≈ Median

**Remember:** A complete description tells the story of the data. Don't just report numbers — interpret them in context and explain what they mean!
`
    }
  });

  console.log('✅ Filled Describing Distributions\n');

  // Topic 4: Measures of Center
  await prisma.topic.update({
    where: { slug: 'measures-of-center-stats' },
    data: {
      textContent: `# Measures of Center

## Introduction

Measures of center describe the "typical" or "middle" value in a dataset. They help us answer: "What is a representative value?" The three main measures — mean, median, and mode — each have different properties and appropriate uses.

## The Mean

### Definition

**Mean ($$\\bar{x}$$):** The arithmetic average

**Formula:** $$\\bar{x} = \\frac{\\sum x_i}{n} = \\frac{x_1 + x_2 + ... + x_n}{n}$$

Where:
- $$\\sum x_i$$ = sum of all values
- $$n$$ = number of observations

### Calculating the Mean

**Example 1:** Test scores: 85, 90, 78, 92, 88

$$\\bar{x} = \\frac{85 + 90 + 78 + 92 + 88}{5} = \\frac{433}{5} = 86.6$$

Mean test score = 86.6 points

**Example 2:** Heights (in inches): 64, 67, 65, 70, 64

$$\\bar{x} = \\frac{64 + 67 + 65 + 70 + 64}{5} = \\frac{330}{5} = 66$$

Mean height = 66 inches

### Properties of the Mean

**Uses all data:**
- Every value contributes
- Change any value, mean changes
- Adding up all deviations from mean = 0

**Balance point:**
- If data were on a number line with equal weights, mean is where it would balance
- Sum of distances below mean = sum of distances above mean

**Sensitive to outliers:**
- Extreme values pull mean toward them
- One very high/low value can change mean substantially

**Example showing outlier effect:**

Without outlier: 10, 12, 11, 13, 12  
$$\\bar{x} = \\frac{58}{5} = 11.6$$

With outlier: 10, 12, 11, 13, 12, 100  
$$\\bar{x} = \\frac{158}{6} = 26.3$$

The outlier (100) dramatically increased the mean from 11.6 to 26.3!

### When to Use the Mean

**Appropriate when:**
✓ Distribution is roughly symmetric  
✓ No extreme outliers  
✓ Need to use all data values  
✓ Want mathematical properties (use in further calculations)

**Not appropriate when:**
❌ Distribution is heavily skewed  
❌ Outliers present  
❌ Want resistant measure  
❌ Data is ordinal (ranked) only

## The Median

### Definition

**Median:** The middle value when data is ordered

- 50th percentile
- Splits data in half
- Half values below, half above

### Finding the Median

**Step 1:** Order data from smallest to largest

**Step 2:** Find middle position

**If $$n$$ is odd:** Median = middle value  
Position = $$\\frac{n+1}{2}$$

**If $$n$$ is even:** Median = average of two middle values  
Positions = $$\\frac{n}{2}$$ and $$\\frac{n}{2} + 1$$

### Examples

**Example 1 (odd n):** Scores: 78, 85, 90, 82, 88

**Step 1: Order:** 78, 82, 85, 88, 90  
**Step 2:** $$n = 5$$ (odd), position = $$\\frac{5+1}{2} = 3$$  
**Median =** 85 (the 3rd value)

**Example 2 (even n):** Scores: 78, 85, 90, 82, 88, 92

**Step 1: Order:** 78, 82, 85, 88, 90, 92  
**Step 2:** $$n = 6$$ (even), positions = 3 and 4  
**Step 3:** Values are 85 and 88  
**Median =** $$\\frac{85 + 88}{2} = 86.5$$

### Properties of the Median

**Resistant to outliers:**
- Position-based, not value-based
- Extreme values don't affect it much
- More stable measure for skewed data

**Example:**
Data: 10, 12, 11, 13, 12 → Median = 12  
With outlier: 10, 12, 11, 13, 12, 100 → Median = 12  

The outlier didn't change the median!

**50-50 split:**
- Half the data ≤ median
- Half the data ≥ median
- Useful for understanding data distribution

**Not affected by exact values:**
- Only needs order and middle position
- Works well for ordinal data (rankings)

### When to Use the Median

**Appropriate when:**
✓ Distribution is skewed  
✓ Outliers are present  
✓ Want resistant measure  
✓ Data is ordinal (ordered categories)  
✓ Interested in "typical" individual

**Examples where median is better:**
- Income (right-skewed, few very high earners)
- Home prices (right-skewed, few very expensive homes)
- Reaction times (right-skewed, occasional very slow responses)

## The Mode

### Definition

**Mode:** The most frequently occurring value

- Can have one mode (unimodal)
- Can have multiple modes (bimodal, multimodal)
- Can have no mode (all values occur once)

### Finding the Mode

**Count frequency of each value, identify most common**

**Example 1:** Scores: 85, 90, 85, 92, 88, 85

- 85 appears 3 times
- 90, 92, 88 each appear once
- **Mode = 85**

**Example 2:** Scores: 85, 90, 85, 92, 90, 88

- 85 appears twice
- 90 appears twice
- **Modes = 85 and 90** (bimodal)

**Example 3:** Scores: 85, 90, 92, 88, 82

- All values appear once
- **No mode**

### When to Use the Mode

**Appropriate when:**
✓ Categorical data  
✓ Want most common value  
✓ Describing bimodal distributions

**Examples:**
- "The most common car color is white" (mode of categorical data)
- "The distribution is bimodal with peaks at 65 and 72" (describing shape)

**Not very useful for:**
❌ Continuous numerical data (values rarely repeat)  
❌ Summarizing center of distribution

## Comparing Mean and Median

### Relationship to Distribution Shape

**Symmetric distribution:**
$$Mean \\approx Median$$

Both measures give similar values, either can be used

**Right-skewed distribution:**
$$Mean > Median$$

Mean pulled right by high values in tail  
Median more representative of "typical" value

**Left-skewed distribution:**
$$Mean < Median$$

Mean pulled left by low values in tail  
Median more representative of "typical" value

### Visual Representation

**Symmetric:** Mean and median at same location (center of distribution)

**Right-skewed:** Mean to the right of median (toward tail)

**Left-skewed:** Mean to the left of median (toward tail)

### Choosing Between Mean and Median

**Use Mean when:**
- Distribution is symmetric
- No outliers or extreme skewness
- Want to use all data
- Need for further calculations (variance, hypothesis tests)

**Use Median when:**
- Distribution is skewed
- Outliers are present
- Want resistant measure
- Ordinal data
- Interested in "typical" individual rather than arithmetic average

**Real-world example: Income**

Town income data:
- Median income: 45,000 dollars
- Mean income: 75,000 dollars

Mean is much higher because a few very wealthy residents pull it up. The median of 45,000 dollars better represents the "typical" resident's income.

## Weighted Mean

### Definition

**Weighted Mean:** When values have different importance or frequency

**Formula:** $$\\bar{x}_w = \\frac{\\sum w_i x_i}{\\sum w_i}$$

Where:
- $$w_i$$ = weight for each value
- $$x_i$$ = data value

### Example: Course Grade

Your course grade is calculated as:
- Tests: 60% of grade (weight = 0.60)
- Homework: 25% of grade (weight = 0.25)
- Final: 15% of grade (weight = 0.15)

Scores:
- Test average: 85
- Homework average: 92
- Final exam: 78

**Weighted mean:**
$$\\bar{x}_w = 0.60(85) + 0.25(92) + 0.15(78)$$
$$= 51 + 23 + 11.7 = 85.7$$

Course grade = 85.7%

**Note:** Cannot just average 85, 92, and 78 because they have different weights!

## Trimmed Mean

### Definition

**Trimmed Mean:** Mean calculated after removing extreme values

**Common:** 5% trimmed mean (remove lowest 5% and highest 5%)

### Purpose

- More resistant than regular mean
- Still uses most of data
- Compromise between mean and median

### Example

Data (ordered): 10, 12, 13, 14, 15, 16, 17, 18, 19, 100

**Regular mean:** $$\\frac{234}{10} = 23.4$$ (affected by outlier 100)

**10% trimmed mean:** Remove lowest 10% (10) and highest 10% (100)  
$$\\frac{12+13+14+15+16+17+18+19}{8} = 15.5$$

Trimmed mean (15.5) more representative than regular mean (23.4)

## Common Mistakes

❌ **Using mean with skewed data**  
Use median instead!

❌ **Forgetting to order data for median**  
Always sort first!

❌ **Reporting mode for continuous data**  
Usually not meaningful when values don't repeat

❌ **Not specifying units**  
Always include units (inches, dollars, points, etc.)

❌ **Confusing which measure to use**  
Consider shape and outliers

❌ **Calculating mean of percentages**  
May need weighted mean if groups are different sizes

## Quick Reference

**Mean:**
- **Formula:** $$\\bar{x} = \\frac{\\sum x_i}{n}$$
- **When:** Symmetric, no outliers
- **Property:** Uses all data, sensitive to extremes
- **Symbol:** $$\\bar{x}$$ (sample), $$\\mu$$ (population)

**Median:**
- **Method:** Middle value when ordered
- **When:** Skewed, outliers present
- **Property:** Resistant, 50-50 split
- **Symbol:** M or $$\\tilde{x}$$

**Mode:**
- **Method:** Most frequent value
- **When:** Categorical data, describe shape
- **Property:** Can have multiple or none

**Relationship to shape:**
- Symmetric: Mean ≈ Median
- Right-skewed: Mean > Median
- Left-skewed: Mean < Median

**Remember:** The best measure of center depends on the distribution's shape and the presence of outliers. When in doubt, report both mean and median!
`
    }
  });

  console.log('✅ Filled Measures of Center\n');

  console.log('🎉 AP Statistics Exploring Data Batch 2 - 2 topics complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
