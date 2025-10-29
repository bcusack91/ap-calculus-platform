import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Algebra 1 topics - Batch 9 (3 topics)...\n');

  // Topic 1: Mean, Median, and Mode (mean-median-mode-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'mean-median-mode-algebra1' },
    data: {
      textContent: `# Mean, Median, and Mode

## Measures of Central Tendency

**Measures of central tendency** describe the "center" or "typical value" of a data set.

**Three main measures:**
- **Mean** (average)
- **Median** (middle value)
- **Mode** (most frequent)

Each tells us something different about the data!

## The Mean (Average)

The **mean** is the sum of all values divided by the number of values.

**Formula:** Mean = (sum of all values) / (number of values)

Or: x̄ = (x₁ + x₂ + x₃ + ... + xₙ) / n

**Example 1:** Find the mean of 5, 8, 12, 15, 20

Sum: 5 + 8 + 12 + 15 + 20 = 60
Count: 5 values
Mean: 60 ÷ 5 = 12

**Example 2:** Find the mean of 3, 7, 9, 10, 11

Sum: 3 + 7 + 9 + 10 + 11 = 40
Count: 5 values
Mean: 40 ÷ 5 = 8

**Example 3:** Test scores: 85, 90, 78, 92, 88, 95

Sum: 528
Count: 6
Mean: 528 ÷ 6 = 88

The average test score is 88.

## Properties of the Mean

**The mean:**
- Uses ALL data values
- Can be affected by extreme values (outliers)
- May not be an actual data value
- Is used in further statistical calculations
- Represents "balance point" of data

**Example with outlier:**
Data: 10, 12, 14, 15, 16, 100

Mean = 167 ÷ 6 = 27.83

The 100 pulls the mean up significantly!

## The Median

The **median** is the middle value when data is arranged in order.

**Steps to find median:**
1. Arrange data in order (least to greatest)
2. If odd number of values: median is the middle value
3. If even number of values: median is average of two middle values

**Example 1 (odd):** Find median of 7, 3, 9, 5, 11

Step 1: Order: 3, 5, 7, 9, 11
Step 2: 5 values (odd), so middle is 3rd value
Median: 7

**Example 2 (even):** Find median of 4, 8, 12, 15, 20, 25

Step 1: Already ordered
Step 2: 6 values (even), so average 3rd and 4th values
Middle values: 12 and 15
Median: (12 + 15) ÷ 2 = 13.5

**Example 3:** Data: 85, 90, 78, 92, 88, 95

Ordered: 78, 85, 88, 90, 92, 95
Middle values: 88 and 90
Median: (88 + 90) ÷ 2 = 89

## Properties of the Median

**The median:**
- Not affected by extreme values (resistant to outliers)
- Always a value that divides data in half
- May or may not be an actual data value
- Better than mean when data has outliers
- Represents the 50th percentile

**Example with outlier:**
Data: 10, 12, 14, 15, 16, 100

Median: (14 + 15) ÷ 2 = 14.5

The outlier (100) doesn't affect the median!

## The Mode

The **mode** is the value that appears most frequently.

**Example 1:** Find mode of 3, 5, 7, 5, 9, 5, 11

5 appears three times (most frequent)
Mode: 5

**Example 2:** Test scores: 85, 90, 85, 92, 88, 85, 95

85 appears three times
Mode: 85

**Example 3:** 2, 4, 6, 8, 10

All values appear once
No mode (or all values are modes)

**Example 4:** 1, 2, 2, 3, 3, 4

Both 2 and 3 appear twice
Bimodal: modes are 2 and 3

## Properties of the Mode

**The mode:**
- Always an actual data value
- Can have no mode, one mode, or multiple modes
- Useful for categorical data (colors, types, etc.)
- Not affected by extreme values
- Easy to identify in small data sets

**Terms:**
- **Unimodal:** one mode
- **Bimodal:** two modes
- **Multimodal:** more than two modes
- **No mode:** all values appear same number of times

## Comparing Mean, Median, and Mode

**Example:** 2, 3, 4, 4, 5, 6, 7, 20

Mean: (2+3+4+4+5+6+7+20) ÷ 8 = 51 ÷ 8 = 6.375
Median: (4+5) ÷ 2 = 4.5
Mode: 4

**Observations:**
- Mean is pulled up by outlier (20)
- Median better represents "typical" value here
- Mode is most frequent value

## When to Use Each Measure

**Use MEAN when:**
- Data has no extreme outliers
- You want to use all data values
- Data is numerical and roughly symmetric
- You need it for further calculations

**Use MEDIAN when:**
- Data has outliers or is skewed
- You want the "middle" value
- Income, home prices (often skewed data)
- You want a resistant measure

**Use MODE when:**
- Data is categorical
- You want the most popular/common value
- Multiple modes are meaningful
- Shoe sizes, favorite colors, etc.

## Weighted Mean

A **weighted mean** gives different values different importance.

**Formula:** Weighted mean = Σ(value × weight) / Σ(weights)

**Example:** Test scores with different weights

Homework (10%): 90
Quiz (20%): 85
Test (70%): 92

Weighted mean = (90×10 + 85×20 + 92×70) / (10+20+70)
= (900 + 1700 + 6440) / 100
= 9040 / 100
= 90.4

Overall grade: 90.4%

**Example 2:** GPA calculation

Course A (3 credits): 4.0
Course B (3 credits): 3.5
Course C (4 credits): 3.0

GPA = (4.0×3 + 3.5×3 + 3.0×4) / (3+3+4)
= (12 + 10.5 + 12) / 10
= 34.5 / 10
= 3.45

## Finding a Missing Value

**Example:** Five test scores have mean 85. Four scores are 80, 85, 90, 88. Find the fifth score.

Let x = fifth score
Mean = (80 + 85 + 90 + 88 + x) / 5 = 85

Solve:
343 + x = 425
x = 82

The fifth score is 82.

**Example 2:** Three numbers have mean 12 and median 10. Two numbers are 8 and 10. Find the third.

Since median is 10, and we have 8 and 10, the third number must be ≥ 10.

Order will be: 8, 10, x (where x ≥ 10)

Mean: (8 + 10 + x) / 3 = 12
18 + x = 36
x = 18

## Range

The **range** measures spread (not central tendency).

**Formula:** Range = maximum value - minimum value

**Example:** 3, 7, 12, 15, 20

Range = 20 - 3 = 17

The data spans 17 units.

## Effect of Outliers

**Example:** Compare with and without outlier

Original data: 5, 6, 7, 8, 9
Mean: 7
Median: 7
Mode: none

Add outlier: 5, 6, 7, 8, 9, 50
Mean: 85 ÷ 6 = 14.17 (changed significantly!)
Median: (7 + 8) ÷ 2 = 7.5 (barely changed)
Mode: none

**Conclusion:** Median is more resistant to outliers.

## Symmetric vs. Skewed Data

**Symmetric distribution:**
Mean ≈ Median ≈ Mode
Example: 2, 4, 6, 8, 10
Mean = Median = 6

**Right-skewed (positive skew):**
Mode < Median < Mean
Few large values pull mean up
Example: 1, 2, 3, 4, 20

**Left-skewed (negative skew):**
Mean < Median < Mode
Few small values pull mean down
Example: 1, 17, 18, 19, 20

## Real-World Applications

**Example 1: Salaries**
Company salaries: $30k, $32k, $35k, $38k, $40k, $250k (CEO)

Mean: $70.83k (misleading due to CEO)
Median: $36.5k (better represents typical salary)

**Example 2: Test Scores**
Class scores: 65, 70, 75, 80, 85, 90, 95

Mean = 80 (class average)
Median = 80 (middle score)
No mode (good distribution)

**Example 3: Shoe Sizes**
Sizes sold: 7, 8, 8, 9, 9, 9, 9, 10, 10, 11

Mode = 9 (stock more size 9s!)
Mean = 9 (but can't have size 9.0 shoe)

## Data with Frequency Tables

**Example:** Frequency table of quiz scores

| Score | Frequency |
|-------|-----------|
| 7     | 2         |
| 8     | 5         |
| 9     | 8         |
| 10    | 3         |

**Mean:**
Sum = (7×2) + (8×5) + (9×8) + (10×3) = 14 + 40 + 72 + 30 = 156
Count = 2 + 5 + 8 + 3 = 18
Mean = 156 ÷ 18 = 8.67

**Median:**
18 values, so median is average of 9th and 10th values
Looking at cumulative: 2, 7, 15, 18
9th and 10th values are both 9
Median = 9

**Mode:**
9 appears 8 times (most frequent)
Mode = 9

## Quartiles (Preview)

**Quartiles** divide data into four parts:
- Q1: 25th percentile (lower quartile)
- Q2: 50th percentile (median)
- Q3: 75th percentile (upper quartile)

**Example:** 2, 4, 6, 8, 10, 12, 14, 16, 18

Median (Q2) = 10
Lower half: 2, 4, 6, 8 → Q1 = 5
Upper half: 12, 14, 16, 18 → Q3 = 15

## Common Mistakes to Avoid

1. **Forgetting to order data for median**
   Always sort first!

2. **Not averaging two middle values for even count**
   With 6 values, median = average of 3rd and 4th

3. **Confusing mean with median**
   Mean = average, Median = middle

4. **Saying "no mode" when values appear once**
   Either say "no mode" or "all values are modes"

5. **Not using all data values for mean**
   Include every value in the sum

6. **Arithmetic errors**
   Double-check calculations!

## Choosing the Best Measure

**Scenario 1:** Average income in a neighborhood with one billionaire
→ Use MEDIAN (outliers present)

**Scenario 2:** Average test score for class
→ Use MEAN (symmetric data, no outliers)

**Scenario 3:** Most popular ice cream flavor
→ Use MODE (categorical data)

**Scenario 4:** Typical home price
→ Use MEDIAN (often skewed data)

## Effect of Transformations

**Adding a constant to all values:**
Mean, median, and mode all increase by that constant

Example: 2, 4, 6, 8 (mean = 5)
Add 3 to each: 5, 7, 9, 11 (mean = 8)

**Multiplying all values by constant:**
Mean, median, and mode all multiply by that constant

Example: 2, 4, 6, 8 (mean = 5)
Multiply by 2: 4, 8, 12, 16 (mean = 10)

## Box Plots Connection

**Box plot (box-and-whisker plot)** shows:
- Minimum
- Q1 (lower quartile)
- Median (Q2)
- Q3 (upper quartile)
- Maximum

The median is the line inside the box!

## Calculator Tips

Most calculators have statistical functions:
- Enter data into lists
- Calculate 1-variable statistics
- Get mean (x̄), median (Med), etc.

**Verify by hand for small datasets!**

## Quick Reference

**Mean:** Sum ÷ Count

**Median:** Middle value (ordered data)
- Odd count: middle value
- Even count: average of two middle values

**Mode:** Most frequent value

**Best measure:**
- Symmetric data → Mean
- Skewed/outliers → Median
- Categorical → Mode

## Practice Strategy

**Level 1:** Small datasets (5-7 values)
Find mean, median, mode

**Level 2:** Even vs. odd counts
Practice both median cases

**Level 3:** Data with outliers
Compare mean and median

**Level 4:** Find missing values
Given mean or median, find unknown

**Level 5:** Real-world applications
Decide which measure to use

## Tips for Success

- Always organize data first
- Check if count is odd or even for median
- Remember mean uses ALL values
- Median is resistant to outliers
- Mode can be "none" or multiple values
- Double-check arithmetic
- Think about which measure makes sense for the context
- Practice with real-world examples
- Understand when each measure is most useful
- Use estimation to check if answers are reasonable`
    }
  });

  console.log('✅ Updated: mean-median-mode-algebra1');

  // Topic 2: Data Analysis (data-analysis-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'data-analysis-algebra1' },
    data: {
      textContent: `# Data Analysis

## What is Data Analysis?

**Data analysis** is the process of inspecting, organizing, and interpreting data to discover useful information and make informed decisions.

**Key components:**
- Collecting data
- Organizing data
- Displaying data visually
- Calculating statistics
- Drawing conclusions

Data analysis helps us understand patterns, trends, and relationships!

## Types of Data

**Quantitative data:** Numerical measurements
- **Discrete:** Counted (whole numbers)
  - Number of students: 25
  - Cars in parking lot: 42
- **Continuous:** Measured (any value)
  - Height: 5.7 feet
  - Temperature: 72.3°F

**Qualitative data:** Categories or descriptions
- Favorite color: blue, red, green
- Type of car: sedan, SUV, truck
- Letter grades: A, B, C, D, F

## Organizing Data: Frequency Tables

A **frequency table** shows how often each value occurs.

**Example:** Survey of favorite sports (20 students)

| Sport      | Tally      | Frequency |
|------------|------------|-----------|
| Basketball | ////       | 5         |
| Soccer     | //// //    | 7         |
| Baseball   | ///        | 3         |
| Football   | //// /     | 5         |

Total: 20 students

**Relative frequency:** Frequency ÷ Total
- Basketball: 5/20 = 0.25 = 25%
- Soccer: 7/20 = 0.35 = 35%

## Grouped Frequency Tables

For continuous data, use **intervals** or **classes**.

**Example:** Test scores (0-100)

| Score Range | Frequency |
|-------------|-----------|
| 90-100      | 8         |
| 80-89       | 12        |
| 70-79       | 15        |
| 60-69       | 7         |
| Below 60    | 3         |

**Class width:** Upper bound - Lower bound
90-100 has width of 10

## Histograms

A **histogram** is a bar graph showing frequency distribution.

**Key features:**
- Bars touch (no gaps)
- x-axis: data values or intervals
- y-axis: frequency
- Shows shape of distribution

**Example interpretation:**
Height histogram shows:
- Most students 5'4" to 5'8"
- Few very short or very tall
- Roughly symmetric (bell-shaped)

## Shapes of Distributions

**Symmetric (bell-shaped):**
- Mean ≈ Median
- Data balanced around center
- Example: heights, test scores

**Right-skewed (positive skew):**
- Mean > Median
- Tail extends right
- Example: income, home prices

**Left-skewed (negative skew):**
- Mean < Median
- Tail extends left
- Example: age at retirement

**Uniform:**
- All values equally likely
- Flat histogram
- Example: random number generator

**Bimodal:**
- Two peaks
- Two distinct groups
- Example: heights of men and women combined

## Box Plots (Box-and-Whisker Plots)

A **box plot** displays five-number summary:
1. Minimum
2. Q1 (lower quartile, 25th percentile)
3. Median (Q2, 50th percentile)
4. Q3 (upper quartile, 75th percentile)
5. Maximum

**Example:** Test scores: 55, 60, 65, 70, 75, 80, 85, 90, 95

Minimum: 55
Q1: 62.5 (average of 60 and 65)
Median: 75
Q3: 87.5 (average of 85 and 90)
Maximum: 95

**Interpreting box plots:**
- Box contains middle 50% of data
- Line in box is median
- Whiskers show range
- Longer whisker = more spread

## Interquartile Range (IQR)

**IQR** measures spread of middle 50% of data.

**Formula:** IQR = Q3 - Q1

**Example:** Q1 = 65, Q3 = 85
IQR = 85 - 65 = 20

**Uses:**
- Measures variability
- Not affected by outliers
- Used to identify outliers

## Identifying Outliers

An **outlier** is an unusually high or low value.

**1.5 × IQR Rule:**
- Lower outliers: below Q1 - 1.5(IQR)
- Upper outliers: above Q3 + 1.5(IQR)

**Example:** Q1 = 60, Q3 = 80, IQR = 20

Lower fence: 60 - 1.5(20) = 60 - 30 = 30
Upper fence: 80 + 1.5(20) = 80 + 30 = 110

Values below 30 or above 110 are outliers.

**Test value 125:**
125 > 110, so 125 is an outlier ✓

## Scatter Plots

A **scatter plot** shows relationship between two variables.

**Components:**
- x-axis: independent variable
- y-axis: dependent variable
- Each point: one data pair (x, y)

**Example:** Hours studied vs. test score
Points: (2, 75), (3, 80), (5, 90), (6, 95)

## Types of Correlation

**Positive correlation:**
- As x increases, y increases
- Points trend upward
- Example: study time vs. grades

**Negative correlation:**
- As x increases, y decreases
- Points trend downward
- Example: absences vs. grades

**No correlation:**
- No clear pattern
- Points scattered randomly
- Example: shoe size vs. test scores

**Strength:**
- **Strong:** Points close to line
- **Moderate:** Some scatter
- **Weak:** Much scatter

## Line of Best Fit

A **line of best fit** (trend line) approximates the relationship.

**Characteristics:**
- Roughly equal points above and below
- Minimizes distances to points
- Can make predictions

**Example:** y = 5x + 60 for study time vs. score

If x = 4 hours:
Predicted score: y = 5(4) + 60 = 80

## Misleading Graphs

Watch for misleading representations!

**Broken y-axis:**
- Starts above zero
- Exaggerates differences
- Always check scale!

**Different scales:**
- Comparing graphs with different scales
- Makes comparison invalid

**Cherry-picking data:**
- Selecting only favorable data
- Ignoring contradictory information

**3D effects:**
- Distorts proportions
- Hard to read accurately

**Always:** Check axes, scales, labels, and data source!

## Measures of Spread

**Range:** Max - Min
- Simple but affected by outliers

**Interquartile Range (IQR):** Q3 - Q1
- Middle 50% spread
- Resistant to outliers

**Standard Deviation:** (advanced topic)
- Average distance from mean
- Used with normal distributions

## Comparing Data Sets

**Example:** Compare two classes' test scores

Class A: Mean = 75, Median = 76, IQR = 12
Class B: Mean = 75, Median = 75, IQR = 20

**Interpretation:**
- Same mean (overall average)
- Class B has more variability (larger IQR)
- Class A scores more consistent

## Percentiles

A **percentile** tells what percent of data falls below a value.

**Example:** 70th percentile score of 85 means:
- 70% of scores are at or below 85
- 30% of scores are above 85

**Common percentiles:**
- 25th percentile = Q1
- 50th percentile = Median
- 75th percentile = Q3

## Z-Scores (Preview)

A **z-score** tells how many standard deviations a value is from the mean.

**Formula:** z = (x - mean) / standard deviation

**Interpretation:**
- z = 0: at the mean
- z = 1: one standard deviation above mean
- z = -2: two standard deviations below mean

Helps compare values from different distributions!

## Two-Way Tables

**Two-way tables** organize data by two categories.

**Example:** Survey of 100 students

|          | Like Math | Don't Like Math | Total |
|----------|-----------|-----------------|-------|
| Male     | 30        | 20              | 50    |
| Female   | 25        | 25              | 50    |
| Total    | 55        | 45              | 100   |

**Marginal totals:** Row/column totals
**Joint frequencies:** Interior cells

**Calculations:**
- P(Male and Likes Math) = 30/100 = 0.30
- P(Likes Math | Male) = 30/50 = 0.60
- P(Female | Likes Math) = 25/55 ≈ 0.45

## Stem-and-Leaf Plots

**Stem-and-leaf plot** displays data while preserving individual values.

**Example:** Test scores
65, 68, 72, 74, 75, 78, 82, 85, 85, 90, 92

| Stem | Leaf    |
|------|---------|
| 6    | 5 8     |
| 7    | 2 4 5 8 |
| 8    | 2 5 5   |
| 9    | 0 2     |

Key: 6|5 = 65

**Advantages:**
- Shows all data values
- Shows shape of distribution
- Easy to find median

## Dot Plots

**Dot plot** shows each data point as a dot above a number line.

**Example:** Number of pets
0, 0, 1, 1, 1, 2, 2, 3

Visual representation:
- 0 pets: 2 dots
- 1 pet: 3 dots
- 2 pets: 2 dots
- 3 pets: 1 dot

**Uses:**
- Small datasets
- Shows clusters and gaps
- Easy to see mode

## Sampling Methods

**Random sample:** Every member has equal chance
- Best for unbiased results

**Stratified sample:** Divide into groups, sample from each
- Ensures representation

**Systematic sample:** Select every nth member
- Easy but can introduce bias

**Convenience sample:** Easiest to reach
- Often biased!

**Example:** School survey
- Random: Use random number generator for student IDs
- Stratified: Sample from each grade level
- Convenience: Survey only lunch period (biased!)

## Bias in Data Collection

**Selection bias:** Sample not representative
**Response bias:** Question wording influences answers
**Nonresponse bias:** Certain groups don't respond

**Example of biased question:**
"Don't you agree that homework is excessive?"
→ Leads respondent to agree

**Better:**
"What is your opinion on the amount of homework?"

## Making Predictions

Use data analysis to make predictions:

**Example:** Sales trend
Monthly sales increasing by $500

Current: $10,000
Prediction next month: $10,500

**Caution:**
- Trends may not continue
- External factors matter
- Past performance ≠ future results

## Real-World Applications

**Business:** Sales analysis, market research
**Medicine:** Clinical trials, disease patterns
**Sports:** Player statistics, team performance
**Education:** Test scores, student progress
**Weather:** Temperature trends, precipitation
**Economics:** Stock prices, unemployment rates

## Common Mistakes to Avoid

1. **Confusing correlation with causation**
   Correlation doesn't prove one causes the other!

2. **Ignoring outliers**
   They may be important or indicate errors

3. **Using wrong measure of center**
   Use median for skewed data

4. **Misreading graphs**
   Always check axes and labels

5. **Small sample size**
   Larger samples more reliable

6. **Assuming trends continue**
   Extrapolation can be risky

## Statistical Literacy

**Ask critical questions:**
- Where did data come from?
- How was sample selected?
- What's the sample size?
- Are graphs misleading?
- Who conducted the study?
- What are they trying to show?

Be a smart consumer of statistics!

## Technology Tools

**Graphing calculators:**
- Create histograms, box plots
- Calculate statistics
- Find regression lines

**Spreadsheets:**
- Organize large datasets
- Create various charts
- Perform calculations

**Statistical software:**
- Advanced analysis
- Multiple visualizations
- Hypothesis testing

## Quick Reference

**Organize:** Frequency tables, stem-and-leaf
**Visualize:** Histograms, box plots, scatter plots
**Summarize:** Mean, median, mode, range, IQR
**Interpret:** Shape, center, spread, outliers
**Compare:** Multiple data sets
**Predict:** Trends and patterns

## Practice Strategy

**Level 1:** Create and interpret frequency tables
**Level 2:** Make histograms and box plots
**Level 3:** Analyze scatter plots, find correlations
**Level 4:** Compare multiple data sets
**Level 5:** Identify bias and misleading graphs

## Tips for Success

- Organize data before analyzing
- Choose appropriate visualizations
- Consider context when interpreting
- Look for patterns and outliers
- Question data sources and methods
- Use technology to handle large datasets
- Practice interpreting real-world data
- Understand when statistics can be misleading
- Always label graphs clearly
- Check your work with different methods`
    }
  });

  console.log('✅ Updated: data-analysis-algebra1');

  // Topic 3: Probability Basics (probability-basics-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'probability-basics-algebra1' },
    data: {
      textContent: `# Probability Basics

## What is Probability?

**Probability** is the measure of how likely an event is to occur.

**Scale:** 0 to 1 (or 0% to 100%)
- **0 (or 0%):** Impossible event
- **1 (or 100%):** Certain event
- **0.5 (or 50%):** Equally likely to happen or not

**Real-life examples:**
- Probability of rain: 70%
- Probability of heads on coin flip: 50%
- Probability of rolling a 6: 1/6 ≈ 16.67%

## Basic Probability Formula

**Formula:** P(event) = (number of favorable outcomes) / (total number of possible outcomes)

**Example 1:** Rolling a standard die
What's the probability of rolling a 4?

Favorable outcomes: 1 (only the 4)
Total outcomes: 6 (numbers 1-6)
P(rolling 4) = 1/6 ≈ 0.167 or 16.67%

**Example 2:** Drawing a card from standard deck (52 cards)
What's the probability of drawing a heart?

Favorable: 13 hearts
Total: 52 cards
P(heart) = 13/52 = 1/4 = 0.25 or 25%

## Expressing Probability

Probability can be written as:
- **Fraction:** 1/4
- **Decimal:** 0.25
- **Percent:** 25%
- **Ratio:** 1:3 (1 success to 3 failures)

All express the same likelihood!

## Sample Space

The **sample space** is the set of ALL possible outcomes.

**Example 1:** Flipping a coin
Sample space: {Heads, Tails}
Total outcomes: 2

**Example 2:** Rolling a die
Sample space: {1, 2, 3, 4, 5, 6}
Total outcomes: 6

**Example 3:** Spinning spinner with colors
Sample space: {Red, Blue, Green, Yellow}
Total outcomes: 4

## Simple Events

A **simple event** is a single outcome.

**Example:** Rolling a die
- Rolling a 3 is a simple event
- P(3) = 1/6

## Compound Events

A **compound event** combines two or more simple events.

**Example:** Rolling a die
- Rolling an even number: {2, 4, 6}
- P(even) = 3/6 = 1/2

**Example 2:** Drawing a card
- Drawing a face card (J, Q, K)
- Favorable: 12 cards (4 Jacks, 4 Queens, 4 Kings)
- P(face card) = 12/52 = 3/13

## Theoretical vs. Experimental Probability

**Theoretical probability:** Based on reasoning and math
- Formula: favorable/total
- Example: P(heads) = 1/2

**Experimental probability:** Based on actual experiments
- Formula: successes/trials
- Example: Flipped coin 100 times, got 48 heads
  - P(heads) = 48/100 = 0.48

**Law of Large Numbers:** As trials increase, experimental approaches theoretical.

## Complementary Events

**Complement** of event A: all outcomes that are NOT A
Notation: A' or Ā (read as "not A")

**Formula:** P(A') = 1 - P(A)

**Example 1:** Rolling a die
P(rolling 5) = 1/6
P(NOT rolling 5) = 1 - 1/6 = 5/6

**Example 2:** Drawing a card
P(heart) = 1/4
P(not heart) = 1 - 1/4 = 3/4

**Why useful?** Sometimes easier to find P(not happening)!

## Probability of Impossible and Certain Events

**Impossible event:** P = 0
- Example: Rolling a 7 on standard die
- P(rolling 7) = 0/6 = 0

**Certain event:** P = 1
- Example: Rolling a number 1-6 on standard die
- P(1-6) = 6/6 = 1

**Between:** All other probabilities
- 0 < P < 1

## "AND" vs. "OR" Probability

**"AND" (both events happen):**
- More restrictive
- Usually smaller probability
- Example: Drawing Ace AND Heart = 1/52

**"OR" (at least one event happens):**
- Less restrictive
- Usually larger probability
- Example: Drawing Ace OR Heart = 16/52

(We'll explore these more in compound probability!)

## Equally Likely Outcomes

Basic probability formula assumes **equally likely outcomes**.

**Example 1:** Fair coin
Each outcome (H or T) equally likely
P(H) = P(T) = 1/2

**Example 2:** Biased coin (70% heads)
Outcomes NOT equally likely
P(H) = 0.7, P(T) = 0.3

**When to use basic formula:**
- Fair dice, coins
- Random selection
- Each outcome has same chance

## Probability with Spinners

**Example:** Spinner divided into 8 equal sections:
3 red, 2 blue, 2 green, 1 yellow

P(red) = 3/8
P(blue) = 2/8 = 1/4
P(green) = 2/8 = 1/4
P(yellow) = 1/8

Check: 3/8 + 2/8 + 2/8 + 1/8 = 8/8 = 1 ✓

## Probability with Marbles

**Example:** Bag contains 5 red, 3 blue, 2 green marbles

Total: 10 marbles

P(red) = 5/10 = 1/2
P(blue) = 3/10
P(green) = 2/10 = 1/5
P(not green) = 1 - 1/5 = 4/5

## Multiple Trials

**Example:** Roll die twice
How many total outcomes?

First roll: 6 outcomes
Second roll: 6 outcomes
Total: 6 × 6 = 36 outcomes

**Sample space size:** 36 different pairs (1,1), (1,2), ..., (6,6)

## Tree Diagrams

**Tree diagram** shows all possible outcomes visually.

**Example:** Flip coin twice

Possible paths:
- First flip H, Second flip H → Outcome: HH
- First flip H, Second flip T → Outcome: HT
- First flip T, Second flip H → Outcome: TH
- First flip T, Second flip T → Outcome: TT

Sample space: {HH, HT, TH, TT}
Total outcomes: 4
P(both heads) = 1/4
P(exactly one head) = 2/4 = 1/2

## Counting Principle

**Multiplication Principle:** If one event has m outcomes and another has n outcomes, together they have m × n outcomes.

**Example:** Choose outfit
- 3 shirts
- 4 pants
Total outfits: 3 × 4 = 12

**Example 2:** Create PIN
- 4 digits
- Each digit: 0-9 (10 choices)
Total PINs: 10 × 10 × 10 × 10 = 10,000

## Odds

**Odds** compare favorable to unfavorable outcomes.

**Odds in favor:** favorable : unfavorable

**Example:** Rolling 5 on die
Favorable: 1
Unfavorable: 5
Odds in favor: 1:5

**Odds against:** unfavorable : favorable
Odds against: 5:1

**Converting between probability and odds:**
If P(A) = 1/6, then odds = 1:5

## Independent vs. Dependent Events

**Independent:** One event doesn't affect the other
- Example: Flip coin twice
- First flip doesn't change second flip

**Dependent:** One event affects the other
- Example: Draw two cards without replacement
- First card removed affects second draw

(We'll explore more in compound probability!)

## Real-World Applications

**Weather:** 60% chance of rain
- P(rain) = 0.6
- P(no rain) = 0.4

**Medicine:** 95% effective treatment
- P(success) = 0.95
- P(failure) = 0.05

**Games:** Lottery odds
- Mega Millions: about 1 in 302 million
- P(winning) ≈ 0.0000000033

**Quality control:** 2% defect rate
- P(defective) = 0.02
- P(not defective) = 0.98

## Probability in Games

**Example 1:** Standard deck of cards
- P(Ace) = 4/52 = 1/13
- P(Spade) = 13/52 = 1/4
- P(Red card) = 26/52 = 1/2

**Example 2:** Roulette (American)
- 38 slots (1-36, 0, 00)
- 18 red, 18 black, 2 green
- P(red) = 18/38 ≈ 0.474

## Simulations

**Simulation:** Using random process to model probability.

**Example:** Simulate coin flips
- Use random number generator
- 0-4 = Heads, 5-9 = Tails
- Run 100 trials
- Count heads: experimental probability

**Why simulate?**
- Test theoretical predictions
- Model complex situations
- Cheaper than real experiments

## Common Misconceptions

**Gambler's Fallacy:**
"Coin landed heads 5 times, so tails is due!"
→ FALSE: Each flip is independent, still 50/50

**Law of Averages:**
"If I keep playing, I'll eventually win!"
→ FALSE: Past outcomes don't guarantee future results

**Hot Hand:**
"I'm on a winning streak, so I'll keep winning!"
→ FALSE: In random events, past luck doesn't predict future

## Probability Rules

**Rule 1:** 0 ≤ P(A) ≤ 1 for any event A

**Rule 2:** P(certain event) = 1

**Rule 3:** P(impossible event) = 0

**Rule 4:** P(A) + P(A') = 1

**Rule 5:** Sum of all probabilities in sample space = 1

## Making Predictions

**Expected frequency** = Probability × Number of trials

**Example:** Roll die 60 times. How many 4s expected?
P(4) = 1/6
Expected: (1/6) × 60 = 10 times

**Note:** This is EXPECTED, not guaranteed!
Actual results will vary.

## Probability in Surveys

**Example:** Survey of 500 students
- 200 prefer pizza
- 150 prefer burgers
- 150 prefer tacos

If one student chosen randomly:
P(pizza) = 200/500 = 2/5 = 0.4
P(burger) = 150/500 = 3/10 = 0.3
P(taco) = 150/500 = 3/10 = 0.3

## Geometric Probability

**Geometric probability:** Based on area, length, or volume.

**Example:** Dartboard
- Circle radius 10 (area = 100π)
- Bullseye radius 2 (area = 4π)
- P(bullseye) = 4π/100π = 4/100 = 1/25

**Example 2:** Number line 0-10
Target region: 3-5 (length = 2)
P(landing in target) = 2/10 = 1/5

## Common Mistakes to Avoid

1. **Adding probabilities incorrectly**
   P(A or B) ≠ always P(A) + P(B) when events overlap

2. **Assuming independence**
   Drawing cards without replacement = dependent

3. **Confusing probability with certainty**
   70% chance ≠ "will definitely happen"

4. **Forgetting to simplify fractions**
   Express 5/10 as 1/2

5. **Using wrong denominator**
   Make sure you count ALL possible outcomes

6. **Negative probability**
   Probability can never be negative!

## Quick Reference

**Basic Formula:**
P(event) = favorable/total

**Complement:**
P(not A) = 1 - P(A)

**Range:**
0 ≤ P ≤ 1

**Certain event:** P = 1
**Impossible event:** P = 0

**Expected frequency:**
Probability × trials

## Practice Strategy

**Level 1:** Single events (coin, die, card)
**Level 2:** Compound events (even number, face card)
**Level 3:** Complements (not rolling 5)
**Level 4:** Multiple trials (two coins, two dice)
**Level 5:** Real-world applications

## Tips for Success

- List all possible outcomes first
- Make sure outcomes are equally likely
- Simplify fractions
- Check that probability is between 0 and 1
- Use complement when easier
- Draw tree diagrams for multiple events
- Practice with dice, cards, and coins
- Understand theoretical vs. experimental
- Don't fall for gambler's fallacy
- Remember: probability predicts long-term trends, not individual events`
    }
  });

  console.log('✅ Updated: probability-basics-algebra1');

  console.log('\n✨ Successfully created content for 3 topics!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
