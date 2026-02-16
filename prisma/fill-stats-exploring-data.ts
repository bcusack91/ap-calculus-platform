import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📝 Filling AP Statistics: Exploring Data topics...\n');

  // Topic 1: Types of Data and Sampling
  await prisma.topic.update({
    where: { slug: 'types-data-sampling' },
    data: {
      textContent: `# Types of Data and Sampling

## Introduction

Statistics is the science of collecting, organizing, analyzing, and interpreting data. Understanding the different types of data and proper sampling methods is fundamental to conducting valid statistical analyses.

## Types of Data

### Categorical vs. Quantitative

**Categorical (Qualitative) Data:**
- Describes characteristics or qualities
- Places individuals into categories
- Cannot be measured numerically in a meaningful way

**Examples:**
- Eye color (blue, brown, green)
- Political party (Democrat, Republican, Independent)
- Type of car (sedan, SUV, truck)
- Opinion rating (agree, neutral, disagree)

**Quantitative (Numerical) Data:**
- Consists of numerical measurements or counts
- Can be added, averaged, or otherwise manipulated mathematically

**Examples:**
- Height (68 inches, 72 inches)
- Test score (85, 92, 78)
- Number of siblings (0, 1, 2, 3)
- Temperature (72°F, 85°F)

### Discrete vs. Continuous

**Within quantitative data, we distinguish:**

**Discrete Data:**
- Countable values
- Usually whole numbers
- Often from counting

**Examples:**
- Number of students in a class (25, 30, 18)
- Number of cars owned (0, 1, 2, 3)
- Number of errors on a test (2, 5, 0)

**Continuous Data:**
- Can take any value in an interval
- Usually from measuring
- Infinite possible values between any two points

**Examples:**
- Height (5.7 feet, 5.75 feet, 5.752 feet...)
- Weight (142.3 lbs, 142.35 lbs...)
- Time (3.2 seconds, 3.25 seconds...)

## Levels of Measurement

Understanding the level of measurement helps determine appropriate statistical analyses.

### Nominal

**Characteristics:**
- Categories with no inherent order
- Most basic level
- Can only count frequencies

**Examples:**
- Blood type (A, B, AB, O)
- Gender (male, female, non-binary)
- Favorite color (red, blue, green)

**Valid operations:** Count, mode

### Ordinal

**Characteristics:**
- Categories with meaningful order
- Differences between ranks not necessarily equal
- Cannot measure exact distance between values

**Examples:**
- Class rank (1st, 2nd, 3rd)
- Letter grades (A, B, C, D, F)
- Satisfaction rating (very satisfied, satisfied, neutral, dissatisfied)

**Valid operations:** Count, mode, median

### Interval

**Characteristics:**
- Numerical scale with equal intervals
- No true zero point
- Zero doesn't mean "absence of"

**Examples:**
- Temperature in Celsius or Fahrenheit (0°F doesn't mean "no temperature")
- IQ scores
- Calendar years (year 0 is arbitrary)

**Valid operations:** Count, mode, median, mean, addition/subtraction

### Ratio

**Characteristics:**
- Numerical scale with equal intervals
- Has true zero point
- Zero means complete absence
- Can form ratios (twice as much, half as big)

**Examples:**
- Height (0 inches = no height)
- Weight (0 lbs = no weight)
- Age (0 years = newborn)
- Income (0 dollars = no money)

**Valid operations:** All mathematical operations

## Populations vs. Samples

### Population

**Definition:** The entire group of individuals or items we want to study

**Characteristics:**
- Complete collection
- Often too large or expensive to study completely
- Denoted by $$N$$ for size

**Examples:**
- All students in the United States
- All adults registered to vote in California
- Every car manufactured by Toyota in 2024

**Parameters:** Numerical characteristics of populations
- Population mean: $$\\mu$$ (mu)
- Population standard deviation: $$\\sigma$$ (sigma)
- Population proportion: $$p$$

### Sample

**Definition:** A subset of the population, selected for study

**Characteristics:**
- Representative portion of population
- Practical and economical to study
- Denoted by $$n$$ for size

**Examples:**
- 500 randomly selected U.S. students
- 1,000 California voters surveyed
- 100 Toyota cars tested from 2024 production

**Statistics:** Numerical characteristics of samples
- Sample mean: $$\\bar{x}$$ (x-bar)
- Sample standard deviation: $$s$$
- Sample proportion: $$\\hat{p}$$ (p-hat)

**Key relationship:** We use **statistics** from samples to make inferences about **parameters** of populations.

## Sampling Methods

### Random Sampling

**Simple Random Sample (SRS):**
- Every individual has equal chance of selection
- Every group of size $$n$$ has equal chance
- "Gold standard" of sampling

**How to obtain:**
- Assign numbers to all population members
- Use random number generator
- Select corresponding individuals

**Example:** Put all 500 student names in a hat, mix thoroughly, draw 50 names

**Advantages:**
- Unbiased
- Simple to understand
- Known probability of selection

**Disadvantages:**
- Requires complete list of population
- May not represent subgroups well
- Can be impractical for large populations

### Stratified Random Sample

**Method:**
- Divide population into homogeneous groups (strata)
- Take SRS from each stratum
- Combine samples

**Example:** Divide school by grade level (9th, 10th, 11th, 12th), randomly sample 25 students from each grade

**When to use:**
- Want to ensure representation of subgroups
- Strata are internally similar but different from each other
- Interested in comparing groups

**Advantages:**
- Guarantees representation from each stratum
- More precise estimates
- Can compare strata

**Disadvantages:**
- Requires knowledge of population characteristics
- More complex than SRS

### Cluster Sample

**Method:**
- Divide population into groups (clusters)
- Randomly select some clusters
- Study ALL individuals in selected clusters

**Example:** Divide city into neighborhoods (clusters), randomly select 5 neighborhoods, survey all households in those 5

**When to use:**
- No complete population list available
- Geographically dispersed population
- Cost-effective approach needed

**Advantages:**
- Practical and economical
- No need for complete population list
- Reduces travel/contact costs

**Disadvantages:**
- Less precise than SRS
- Clusters should be heterogeneous (like mini-populations)

### Systematic Sample

**Method:**
- Select every $$k$$th individual from list
- Random starting point
- $$k = \\frac{N}{n}$$ (population size / sample size)

**Example:** From 1000 students, select every 10th student (random start between 1-10), get sample of 100

**When to use:**
- Have organized list
- Want easy implementation
- Population not cyclical

**Advantages:**
- Simple to implement
- Spreads sample across population
- Often as good as SRS

**Disadvantages:**
- Problems if list has hidden patterns
- Not truly random

## Sampling Bias

### Types of Bias

**Selection Bias:**
- Some individuals more likely to be selected
- Sample not representative of population

**Example:** Surveying only people in shopping mall (excludes those who don't shop there)

**Voluntary Response Bias:**
- Individuals choose to participate
- Often those with strong opinions respond

**Example:** Online poll where anyone can vote (those who care most will participate)

**Undercoverage:**
- Some groups systematically excluded
- Sampling frame incomplete

**Example:** Phone survey excludes those without phones

**Nonresponse Bias:**
- Selected individuals don't respond
- Respondents differ from non-respondents

**Example:** Survey with 20% response rate (80% non-response)

## Best Practices

**For Valid Sampling:**

✓ **Use random selection** when possible  
✓ **Define population clearly**  
✓ **Ensure sampling frame matches population**  
✓ **Minimize nonresponse**  
✓ **Watch for sources of bias**  
✓ **Use stratification** when subgroups matter  
✓ **Make sample size adequate** for precision needed

**Common Mistakes to Avoid:**

❌ Convenience sampling (just because it's easy)  
❌ Voluntary response (self-selection bias)  
❌ Assuming bigger is always better (quality > quantity)  
❌ Ignoring nonresponse  
❌ Using outdated sampling frame

## Quick Reference

**Data Type Decision Tree:**
1. Is it numerical? → **Quantitative** (otherwise Categorical)
2. Can it be counted? → **Discrete** (otherwise Continuous)
3. Does it have true zero? → **Ratio** (otherwise Interval)

**Sampling Method Selection:**
- Want simplicity and have complete list → **SRS**
- Need to ensure subgroup representation → **Stratified**
- Population spread out geographically → **Cluster**
- Have organized list, want efficiency → **Systematic**

**Remember:** Good sampling is the foundation of valid statistical inference. A biased sample, no matter how large, leads to invalid conclusions!
`
    }
  });

  console.log('✅ Filled Types of Data and Sampling\n');

  // Topic 2: Displaying Distributions with Graphs
  await prisma.topic.update({
    where: { slug: 'displaying-distributions-graphs' },
    data: {
      textContent: `# Displaying Distributions with Graphs

## Introduction

"A picture is worth a thousand words" — especially in statistics! Graphs help us visualize data distributions, identify patterns, spot outliers, and communicate findings effectively. Choosing the right graph type depends on your data type and what you want to show.

## Graphs for Categorical Data

### Bar Graph (Bar Chart)

**Purpose:** Compare frequencies or percentages across categories

**Structure:**
- Categorical variable on x-axis
- Frequency or percentage on y-axis
- Bars have gaps between them (not touching)
- Heights represent frequencies

**When to use:**
- Categorical data
- Comparing categories
- Showing frequencies or percentages

**Example:** Favorite ice cream flavors among students
- Chocolate: 45 students
- Vanilla: 32 students  
- Strawberry: 18 students
- Other: 15 students

**Key features:**
- Bars can be ordered (by frequency) or kept in natural order
- Easy to compare categories visually
- Clear and simple

### Pie Chart

**Purpose:** Show parts of a whole

**Structure:**
- Circle divided into slices
- Each slice represents a category
- Slice size proportional to percentage

**When to use:**
- Want to show proportions
- Have relatively few categories (3-6 ideal)
- Emphasizing "part of whole" relationship

**Example:** Student transportation methods
- Bus: 40%
- Car: 30%
- Walk: 20%
- Bike: 10%

**Advantages:**
- Shows proportions clearly
- Visually appealing
- Good for presentations

**Disadvantages:**
- Hard to compare similar-sized slices
- Difficult with many categories
- Can be misleading with 3D effects

### Segmented Bar Chart

**Purpose:** Compare distributions across multiple groups

**Structure:**
- Bars divided into segments
- Each segment represents a category
- Can show counts or percentages

**When to use:**
- Comparing categorical distributions across groups
- Two categorical variables
- Want to see both totals and breakdowns

**Example:** Transportation method by grade level
- Each grade has a bar
- Bars divided by transportation type
- Can compare both across and within grades

## Graphs for Quantitative Data

### Dotplot

**Purpose:** Display individual values for small to moderate datasets

**Structure:**
- Number line showing possible values
- Dot for each observation
- Dots stack when values repeat

**When to use:**
- Small datasets (n < 50)
- Want to see individual values
- Looking for clusters, gaps, outliers

**Example:** Test scores: 75, 80, 80, 82, 85, 85, 85, 90, 95
- Stack three dots above 85
- Stack two dots above 80
- Single dots for 75, 82, 90, 95

**Advantages:**
- Shows every data point
- Easy to create
- Good for small datasets

**Disadvantages:**
- Impractical for large datasets
- Can become cluttered

### Stemplot (Stem-and-Leaf Plot)

**Purpose:** Display data while retaining actual values

**Structure:**
- Split each value into "stem" (leading digit(s)) and "leaf" (trailing digit)
- Stems listed vertically
- Leaves listed horizontally

**When to use:**
- Small to moderate datasets
- Want to preserve actual data values
- Quick hand-drawn analysis

**Example:** Test scores: 67, 72, 75, 78, 81, 83, 85, 85, 92

\`\`\`
Stem  Leaf
6     7
7     2 5 8
8     1 3 5 5
9     2
\`\`\`

**Key:** 7 | 2 represents 72

**Back-to-back stemplot:** Compare two distributions
- Shared stems in middle
- One dataset's leaves on left
- Other dataset's leaves on right

**Advantages:**
- Retains actual values
- Shows distribution shape
- Can reconstruct original data

**Disadvantages:**
- Tedious for large datasets
- Choice of stems affects appearance

### Histogram

**Purpose:** Display distribution of continuous data

**Structure:**
- Quantitative variable on x-axis (divided into bins)
- Frequency or relative frequency on y-axis
- Bars touching (continuous data)
- Bar height = frequency in that interval

**When to use:**
- Large datasets
- Continuous or discrete quantitative data
- Want to see distribution shape

**Example:** Heights of students (in inches)
- 60-62: 5 students
- 62-64: 12 students
- 64-66: 23 students
- 66-68: 18 students
- 68-70: 8 students

**Important considerations:**

**Bin width:**
- Too narrow → choppy, hard to see pattern
- Too wide → lose detail, miss features
- Experiment to find appropriate width

**Number of bins:**
- General rule: $$\\sqrt{n}$$ or $$\\log_2(n) + 1$$
- 5-20 bins usually works well
- More data → can use more bins

**Advantages:**
- Shows distribution shape clearly
- Handles large datasets
- Identifies outliers, gaps, clusters

**Disadvantages:**
- Appearance depends on bin choices
- Loses individual data values
- Can mislead if bins chosen poorly

### Boxplot (Box-and-Whisker Plot)

**Purpose:** Display five-number summary and identify outliers

**Structure:**
- Box from Q1 to Q3 (contains middle 50%)
- Line at median inside box
- Whiskers extend to min and max (excluding outliers)
- Outliers plotted individually

**Five-number summary:**
1. Minimum (excluding outliers)
2. Q1 (first quartile, 25th percentile)
3. Median (50th percentile)
4. Q3 (third quartile, 75th percentile)
5. Maximum (excluding outliers)

**Outlier definition:**
- Below: $$Q1 - 1.5 \\times IQR$$
- Above: $$Q3 + 1.5 \\times IQR$$
- Where $$IQR = Q3 - Q1$$

**When to use:**
- Comparing multiple distributions
- Identifying outliers
- Showing spread and center
- Large datasets

**Modified boxplot:**
- Whiskers go to last value within 1.5 × IQR
- Outliers plotted as individual points
- More informative than regular boxplot

**Side-by-side boxplots:**
- Compare distributions across groups
- Same scale for all boxes
- Easy to see differences in center, spread, shape

**Advantages:**
- Compact display
- Shows spread clearly
- Easy to compare groups
- Identifies outliers automatically

**Disadvantages:**
- Doesn't show distribution shape well
- Can hide bimodality or other features
- Less detail than histogram

### Cumulative Frequency Plot (Ogive)

**Purpose:** Show cumulative frequencies or percentages

**Structure:**
- Data values on x-axis
- Cumulative frequency/percentage on y-axis
- Line connects points
- Always increasing (or flat)

**When to use:**
- Want to find percentiles
- Show how data accumulates
- Identify median and quartiles

**Uses:**
- Read off percentiles directly
- See what percentage falls below a value
- Identify quartile locations

## Describing Distributions (SOCS)

When analyzing any graph, describe using **SOCS:**

### S - Shape

**Symmetric:** Balanced around center (mirror image)
- Normal (bell-shaped)
- Uniform (flat, rectangular)

**Skewed:**
- **Right-skewed (positive):** Tail extends to right, mean > median
- **Left-skewed (negative):** Tail extends to left, mean < median

**Modality:**
- **Unimodal:** One peak
- **Bimodal:** Two peaks
- **Multimodal:** Multiple peaks
- **Uniform:** No peaks

### O - Outliers

**Outliers:** Observations unusually far from bulk of data

**Identify:**
- Visual inspection (far from others)
- 1.5 × IQR rule (for boxplots)
- More than 2-3 standard deviations from mean

**Report:**
- Note presence
- Give values if possible
- Consider causes (error? legitimate?)

### C - Center

**Typical value:** Where data tends to cluster

**Measures:**
- Median (middle value)
- Mean (average)
- Mode (most common)

**In description:** "The center is around [value]" or "The median is [value]"

### S - Spread

**Variability:** How spread out data is

**Measures:**
- Range (max - min)
- IQR (Q3 - Q1)
- Standard deviation

**In description:** "Values range from [min] to [max]" or "Most values fall between [Q1] and [Q3]"

## Choosing the Right Graph

### Decision Guide

**Categorical data:**
- Few categories, show proportions → **Pie chart**
- Compare categories → **Bar graph**
- Compare across groups → **Segmented bar chart**

**Quantitative data:**
- Small dataset (n < 30) → **Dotplot or stemplot**
- Show distribution shape → **Histogram**
- Compare groups → **Side-by-side boxplots**
- Identify outliers → **Boxplot**
- Find percentiles → **Cumulative frequency plot**

### Common Mistakes to Avoid

❌ **Pie charts for quantitative data**  
❌ **3D or decorative effects** (distort perception)  
❌ **Inconsistent scales** when comparing  
❌ **Too many/too few bins** in histograms  
❌ **Bar graph with touching bars** (that's a histogram!)  
❌ **Missing labels** on axes  
❌ **No scale** on axes

## Best Practices

✓ **Label axes clearly** with variable names and units  
✓ **Include title** describing what graph shows  
✓ **Use consistent scales** when comparing  
✓ **Choose appropriate graph type** for data  
✓ **Make it readable** (not too small, cluttered)  
✓ **Describe using SOCS** in analysis  
✓ **Note any outliers** or unusual features

## Quick Reference

**Graph Selection:**
- **Categorical:** Bar graph or pie chart
- **Small quantitative:** Dotplot or stemplot  
- **Large quantitative:** Histogram or boxplot
- **Comparisons:** Side-by-side boxplots or segmented bar charts
- **Percentiles:** Cumulative frequency plot

**SOCS Description:**
- **S**hape: symmetric, skewed (left/right), unimodal/bimodal
- **O**utliers: identify and report
- **C**enter: median, mean
- **S**pread: range, IQR, standard deviation

**Remember:** The best graph clearly communicates the story in your data. When in doubt, try multiple types and choose the one that reveals the most!
`
    }
  });

  console.log('✅ Filled Displaying Distributions with Graphs\n');

  console.log('🎉 AP Statistics Exploring Data Batch 1 - 2 topics complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
