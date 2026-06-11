import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Expanding Algebra 1 topics - Batch 3 (2 topics)...\n');

  // Topic 1: Domain and Range (currently 24 chars, expand to 6000+)
  await prisma.topic.updateMany({
    where: { slug: 'domain-and-range' },
    data: {
      textContent: `# Domain and Range

## What is Domain?

The **domain** of a function is the set of all possible input values (x-values).

**Think of it as:** All the x-values that "work" in the function

**Example 1:** f(x) = 2x + 3

Domain: All real numbers
Any x-value works! (-∞, ∞)

**Example 2:** f(x) = 1/x

Domain: All real numbers except 0
Can't divide by zero! (-∞, 0) ∪ (0, ∞)

**Example 3:** f(x) = √x

Domain: x ≥ 0
Can't take square root of negative! [0, ∞)

## What is Range?

The **range** of a function is the set of all possible output values (y-values).

**Think of it as:** All the y-values the function can produce

**Example 1:** f(x) = x²

Range: y ≥ 0 or [0, ∞)
Squaring never gives negative result

**Example 2:** f(x) = 3

Range: {3}
Constant function, only outputs 3

**Example 3:** f(x) = |x|

Range: y ≥ 0 or [0, ∞)
Absolute value is never negative

## Domain Restrictions

**Common restrictions:**

**1. Division by zero**
If denominator can equal zero, exclude that x-value

**Example:** f(x) = 1/(x - 5)

x - 5 = 0 when x = 5
Domain: x ≠ 5 or (-∞, 5) ∪ (5, ∞)

**2. Square roots (even roots)**
Expression under square root must be non-negative

**Example:** f(x) = √(x + 3)

x + 3 ≥ 0
x ≥ -3
Domain: [-3, ∞)

**3. Logarithms** (in advanced courses)
Argument must be positive

**4. Real-world constraints**
Time can't be negative, number of people must be whole numbers, etc.

## Finding Domain from Equations

**Step 1:** Look for restrictions
**Step 2:** Set up conditions
**Step 3:** Solve inequalities
**Step 4:** Write domain

**Example 1:** f(x) = 3x - 7

No restrictions!
Domain: All real numbers or (-∞, ∞)

**Example 2:** f(x) = 1/(x + 2)

Restriction: x + 2 ≠ 0
x ≠ -2
Domain: (-∞, -2) ∪ (-2, ∞)

**Example 3:** f(x) = √(2x - 6)

Restriction: 2x - 6 ≥ 0
2x ≥ 6
x ≥ 3
Domain: [3, ∞)

**Example 4:** f(x) = 1/(x² - 9)

x² - 9 = 0
x² = 9
x = ±3

Domain: (-∞, -3) ∪ (-3, 3) ∪ (3, ∞)

**Example 5:** f(x) = √(x - 1)/(x - 4)

Two restrictions:
1. x - 1 ≥ 0 → x ≥ 1
2. x - 4 ≠ 0 → x ≠ 4

Domain: [1, 4) ∪ (4, ∞)

## Finding Range from Equations

**For Algebra 1, often use graphing or logic**

**Linear functions:** f(x) = mx + b (m ≠ 0)
Range: All real numbers (-∞, ∞)

**Example:** f(x) = 2x + 1
Range: (-∞, ∞)

**Quadratic functions:** f(x) = ax² + bx + c

**If a > 0 (opens up):**
Range: [minimum y-value, ∞)

**If a < 0 (opens down):**
Range: (-∞, maximum y-value]

**Example 1:** f(x) = x²
Opens up, vertex at (0, 0)
Range: [0, ∞)

**Example 2:** f(x) = -x² + 4
Opens down, vertex at (0, 4)
Range: (-∞, 4]

**Example 3:** f(x) = (x - 2)² + 1
Opens up, vertex at (2, 1)
Range: [1, ∞)

**Absolute value:** f(x) = a|x - h| + k

**If a > 0:**
Range: [k, ∞)

**If a < 0:**
Range: (-∞, k]

**Example:** f(x) = |x| - 3
Range: [-3, ∞)

## Interval Notation

**Used to express domain and range concisely**

**Symbols:**
- ( or ) : Does NOT include endpoint (open)
- [ or ] : INCLUDES endpoint (closed)
- ∞ : Always use ( or ) never [ or ]

**Examples:**

(3, 7) : 3 < x < 7 (3 and 7 not included)
[3, 7] : 3 ≤ x ≤ 7 (3 and 7 included)
[3, 7) : 3 ≤ x < 7 (3 included, 7 not)
(-∞, 5] : x ≤ 5 (all numbers up to and including 5)
[2, ∞) : x ≥ 2 (all numbers from 2 onward)
(-∞, ∞) : All real numbers

**Union symbol ∪:** Combines separate intervals

**Example:** (-∞, 2) ∪ (2, ∞)
All real numbers except 2

**Example:** [-3, 0) ∪ (0, 5]
From -3 to 5, but excluding 0

## Set Notation

**Alternative to interval notation**

**Examples:**

{x | x > 3} : "The set of all x such that x is greater than 3"
{x | x ≠ 0} : "All real numbers except 0"
{x | -2 ≤ x ≤ 5} : "All x between -2 and 5, inclusive"

**For all real numbers:**
ℝ or {x | x ∈ ℝ}

## Finding Domain and Range from Graphs

**Domain:** Look at x-values covered (left to right)

**Range:** Look at y-values covered (bottom to top)

**Example 1:** Line from (-2, 1) to (3, 4)

Domain: [-2, 3] (endpoints included if dots are solid)
Range: [1, 4]

**Example 2:** Parabola y = x² - 4

Graph extends infinitely left and right
Domain: (-∞, ∞)

Lowest point at y = -4, extends up infinitely
Range: [-4, ∞)

**Example 3:** Horizontal line at y = 2

Extends infinitely left and right
Domain: (-∞, ∞)

Only y-value is 2
Range: {2}

**Example 4:** Circle (not a function!)

If center (0, 0) and radius 3:
Domain: [-3, 3]
Range: [-3, 3]

Note: Circle fails vertical line test (not a function)

## Domain and Range from Tables

**Domain:** List all x-values (inputs)
**Range:** List all y-values (outputs)

**Example:**

x | y
--|--
1 | 5
2 | 7
3 | 9
4 | 11

Domain: {1, 2, 3, 4}
Range: {5, 7, 9, 11}

**Example 2:**

x | y
--|--
0 | 3
1 | 3
2 | 3
3 | 3

Domain: {0, 1, 2, 3}
Range: {3} (only one y-value!)

## Common Function Types

**Linear (y = mx + b):**
Domain: (-∞, ∞)
Range: (-∞, ∞) if m ≠ 0
Range: {b} if m = 0 (horizontal line)

**Quadratic (y = ax²):**
Domain: (-∞, ∞)
Range: [0, ∞) if a > 0
Range: (-∞, 0] if a < 0

**Absolute Value (y = |x|):**
Domain: (-∞, ∞)
Range: [0, ∞)

**Square Root (y = √x):**
Domain: [0, ∞)
Range: [0, ∞)

**Reciprocal (y = 1/x):**
Domain: (-∞, 0) ∪ (0, ∞)
Range: (-∞, 0) ∪ (0, ∞)

**Constant (y = c):**
Domain: (-∞, ∞)
Range: {c}

## Real-World Contexts

**Example 1: Area of square**

A(s) = s² where s = side length

Domain: s > 0 (can't have negative or zero side)
Range: A > 0 (area is positive)

**Example 2: Cost function**

C(n) = 5n + 20 where n = number of items

Domain: n ≥ 0 (can't buy negative items)
Often: n is whole number (0, 1, 2, 3, ...)
Range: C ≥ 20 (minimum cost is 20)

**Example 3: Projectile height**

h(t) = -16t² + 64t where t = time in seconds

Domain: 0 ≤ t ≤ 4 (from launch until it hits ground)
Range: 0 ≤ h ≤ 64 (ground to maximum height)

**Example 4: Temperature over 24 hours**

T(h) where h = hour (0 to 24)

Domain: [0, 24]
Range: Depends on actual temperatures, maybe [45, 75]

## Discrete vs Continuous

**Discrete:** Separate points (often integers)

**Example:** Number of students in class
Domain: {0, 1, 2, 3, ..., 30} (whole numbers only)

**Continuous:** Unbroken interval

**Example:** Height of plant over time
Domain: [0, ∞) (any non-negative time)

**In Algebra 1:** Often assume continuous unless context requires discrete

## Determining if Value is in Domain

**Substitute and check if result is defined**

**Example:** Is x = 3 in domain of f(x) = 1/(x - 3)?

Try x = 3: f(3) = 1/(3 - 3) = 1/0 (undefined!)

No, x = 3 is NOT in domain

**Example 2:** Is x = -2 in domain of f(x) = √(x + 5)?

Try x = -2: f(-2) = √(-2 + 5) = √3 (defined!)

Yes, x = -2 IS in domain

## Determining if Value is in Range

**Check if there's an x-value that produces that y-value**

**Example:** Is y = 4 in range of f(x) = x²?

Set 4 = x²
x = ±2 (solutions exist!)

Yes, y = 4 IS in range

**Example 2:** Is y = -1 in range of f(x) = x²?

Set -1 = x²
No real solutions!

No, y = -1 is NOT in range

## Multiple Restrictions

**Example:** f(x) = √x / (x - 4)

Restriction 1: x ≥ 0 (square root)
Restriction 2: x ≠ 4 (division by zero)

Combined: [0, 4) ∪ (4, ∞)

Must satisfy BOTH conditions!

**Example 2:** f(x) = √(9 - x²)

9 - x² ≥ 0
x² ≤ 9
-3 ≤ x ≤ 3

Domain: [-3, 3]

## Common Mistakes to Avoid

1. **Forgetting to check for division by zero**
   Always set denominator ≠ 0!

2. **Square root of negative**
   Under square root must be ≥ 0

3. **Confusing domain and range**
   Domain = inputs (x), Range = outputs (y)

4. **Wrong inequality direction**
   √(x - 3) requires x - 3 ≥ 0, so x ≥ 3 (not x ≤ 3!)

5. **Including infinity with square bracket**
   ALWAYS use ∞ with ( or )
   NEVER [∞ or ∞]

6. **Not simplifying**
   x² - 4 ≠ 0 means x ≠ ±2 (factor!)

7. **Forgetting real-world constraints**
   Time can't be negative, people must be whole numbers

## Piecewise Functions

**Different rules for different parts of domain**

**Example:**

f(x) = {x + 1 if x < 0
       {2x if x ≥ 0

Domain: All real numbers (-∞, ∞)
Range: Depends on both pieces

For x < 0: outputs are less than 1
For x ≥ 0: outputs are ≥ 0

Combined range: (-∞, ∞)

## Restricting Domain

**Sometimes we artificially limit domain**

**Example:** f(x) = x² with domain [-2, 3]

Even though x² works for all real numbers, we restrict to [-2, 3]

Range: [0, 9]
(minimum at x = 0 gives y = 0, maximum at x = 3 gives y = 9)

## Practical Applications

**Domain considerations:**
- Can time be negative? (usually no)
- Can quantity be fractional? (sometimes no)
- Are there physical limits? (height, weight, distance)
- Are there legal limits? (age, speed limit)

**Range considerations:**
- What are minimum/maximum values?
- Can output be negative?
- Are there practical limits?

## Quick Reference

**Domain:** All possible x-values (inputs)

**Range:** All possible y-values (outputs)

**Restrictions:**
- Division by zero: denominator ≠ 0
- Square root: expression ≥ 0
- Real-world: context-dependent

**Interval Notation:**
- ( ) : not included
- [ ] : included
- ∪ : union (combine)
- ∞ : always with ( or )

**All real numbers:** (-∞, ∞)

**From graph:**
- Domain: look left to right
- Range: look bottom to top

## Practice Strategy

- Always check for division by zero first
- Look for square roots (even roots)
- Consider real-world context
- Practice interval notation
- Graph to verify domain and range
- Test boundary values
- Check if endpoints included or excluded
- Work with various function types
- Understand discrete vs continuous
- Remember: domain is INPUT, range is OUTPUT
- Use test points to verify
- Draw number lines to visualize
- Master inequality solving
- Practice reading domains/ranges from graphs

Understanding domain and range is crucial for working with functions throughout algebra and beyond. These concepts appear in calculus, statistics, and real-world applications everywhere!`
    }
  });

  console.log('✅ Updated: domain-and-range');

  // Topic 2: Box Plots (currently 17 chars, expand to 6000+)
  await prisma.topic.updateMany({
    where: { slug: 'box-plots' },
    data: {
      textContent: `# Box Plots

## What is a Box Plot?

A **box plot** (also called box-and-whisker plot) is a visual way to display the distribution of data using five key numbers.

**Purpose:**
- Show spread of data
- Identify center of data
- Spot outliers
- Compare multiple data sets

**Visual:** A box with lines (whiskers) extending from each side

## The Five-Number Summary

Box plots are based on five key values:

**1. Minimum:** Smallest value
**2. Q1 (First Quartile):** 25th percentile
**3. Median (Q2):** 50th percentile (middle value)
**4. Q3 (Third Quartile):** 75th percentile
**5. Maximum:** Largest value

**Example data:** 2, 4, 6, 8, 10, 12, 14, 16, 18

Minimum: 2
Q1: 6 (25% of data below this)
Median: 10 (middle value)
Q3: 14 (75% of data below this)
Maximum: 18

## Finding the Five-Number Summary

**Step 1: Order the data** (smallest to largest)

**Step 2: Find the median (Q2)**
- If odd number of values: middle value
- If even number of values: average of two middle values

**Step 3: Find Q1**
- Median of lower half (below Q2)

**Step 4: Find Q3**
- Median of upper half (above Q2)

**Step 5: Find minimum and maximum**
- Smallest and largest values

**Example 1:** 3, 7, 8, 10, 12, 15, 18, 20, 21

Already ordered
n = 9 (odd)

Median (Q2): 5th value = 12

Lower half: 3, 7, 8, 10
Q1: Average of 7 and 8 = 7.5

Upper half: 15, 18, 20, 21
Q3: Average of 18 and 20 = 19

Five-number summary:
Min: 3, Q1: 7.5, Median: 12, Q3: 19, Max: 21

**Example 2:** 5, 8, 10, 12, 15, 18

n = 6 (even)

Median: Average of 10 and 12 = 11

Lower half: 5, 8, 10
Q1: 8

Upper half: 12, 15, 18
Q3: 15

Five-number summary:
Min: 5, Q1: 8, Median: 11, Q3: 15, Max: 18

## Drawing a Box Plot

**Step 1:** Draw a number line with appropriate scale

**Step 2:** Mark the five-number summary above the line

**Step 3:** Draw a box from Q1 to Q3

**Step 4:** Draw a vertical line at the median inside the box

**Step 5:** Draw whiskers from box to min and max

**Example:** Five-number summary: 2, 5, 8, 12, 16

Number line from 0 to 20
Box from 5 to 12
Line at 8 inside box
Left whisker from 5 to 2
Right whisker from 12 to 16

## Parts of a Box Plot

**The Box:**
- Left edge: Q1
- Right edge: Q3
- Line inside: Median
- Width of box: Interquartile Range (IQR)

**The Whiskers:**
- Left whisker: From Q1 to minimum
- Right whisker: From Q3 to maximum
- Show range of lower and upper 25% of data

**Important:** 50% of data is inside the box!

## Interquartile Range (IQR)

**IQR = Q3 - Q1**

**Meaning:** Middle 50% of data spread

**Example:** Q1 = 6, Q3 = 14

IQR = 14 - 6 = 8

**Use:** Measure of spread (variation)

Larger IQR = more spread out data
Smaller IQR = more concentrated data

## Reading Information from Box Plots

**1. Center (Median):**
Where is the line inside the box?

**2. Spread (Range and IQR):**
How far do whiskers extend? How wide is the box?

**3. Symmetry:**
Is median in center of box? Are whiskers equal length?

**4. Skewness:**
If right whisker longer → right-skewed (positive skew)
If left whisker longer → left-skewed (negative skew)

**Example:** Box plot with:
- Longer right whisker
- Median closer to Q1

This is right-skewed (tail to the right)
Most data on lower end

## Outliers in Box Plots

**Outlier:** Value unusually far from the rest

**Rule:** A value is an outlier if:
- Less than Q1 - 1.5(IQR), OR
- Greater than Q3 + 1.5(IQR)

**Example:** Q1 = 8, Q3 = 16, IQR = 8

Lower boundary: 8 - 1.5(8) = 8 - 12 = -4
Upper boundary: 16 + 1.5(8) = 16 + 12 = 28

Any value below -4 or above 28 is an outlier

**Displaying outliers:**
- Mark with individual points (dots or asterisks)
- Draw whiskers to last non-outlier value

**Example data:** 5, 7, 9, 11, 13, 15, 40

40 is an outlier (way above the rest)
- Draw whisker to 15 (last non-outlier)
- Mark 40 as separate point

## Modified Box Plot

**Standard box plot:** Whiskers extend to min and max

**Modified box plot:** Whiskers extend to last non-outlier
- Outliers shown as individual points
- More accurate representation when outliers present

**Use modified when:** Data contains outliers

## Comparing Box Plots

**Multiple box plots on same scale**

**Can compare:**

**1. Centers:**
Which median is higher?

**2. Spreads:**
Which IQR is larger? Which range is larger?

**3. Symmetry:**
Which is more symmetric?

**4. Outliers:**
Which has outliers?

**Example:** Compare test scores for two classes

Class A: Median = 75, IQR = 10
Class B: Median = 80, IQR = 20

**Analysis:**
- Class B has higher median (better average)
- Class A has smaller IQR (more consistent)
- Class B more variable (some very high, some very low)

## Advantages of Box Plots

**1. Show five-number summary visually**

**2. Easy to compare multiple groups**

**3. Clearly identify outliers**

**4. Show skewness**

**5. Good for large data sets**

**6. Compact display**

## Disadvantages of Box Plots

**1. Don't show individual values** (except outliers)

**2. Don't show frequency** (how many at each value)

**3. Don't show gaps** in data

**4. Can hide multiple modes** (bimodal data)

**5. Arbitrary outlier rule** (1.5 IQR is convention)

**Better for:** Overall distribution and comparison
**Not as good for:** Detailed frequency information

## Creating Box Plot from Frequency Table

**Example:**

Value | Frequency
------|----------
10    | 2
15    | 3
20    | 4
25    | 2
30    | 1

**Step 1:** List all values in order
10, 10, 15, 15, 15, 20, 20, 20, 20, 25, 25, 30

**Step 2:** Find five-number summary
n = 12
Min: 10
Q1: 15 (median of first 6)
Median: Average of 6th and 7th = (15+20)/2 = 17.5
Q3: 25 (median of last 6)
Max: 30

**Step 3:** Draw box plot using these values

## Percentiles and Box Plots

**Box plot divides data into four parts (quartiles):**

**0% to 25%:** Below Q1 (left whisker)
**25% to 50%:** Q1 to Median (left half of box)
**50% to 75%:** Median to Q3 (right half of box)
**75% to 100%:** Above Q3 (right whisker)

**Each section contains 25% of the data!**

**Example:** If there are 20 data points:
- 5 values below Q1
- 5 values from Q1 to median
- 5 values from median to Q3
- 5 values above Q3

## Skewness from Box Plots

**Symmetric:**
- Median in center of box
- Equal whisker lengths
- Data evenly distributed

**Right-skewed (positively skewed):**
- Right whisker longer than left
- Median closer to Q1
- Tail extends to the right
- Example: Income data (few very high earners)

**Left-skewed (negatively skewed):**
- Left whisker longer than right
- Median closer to Q3
- Tail extends to the left
- Example: Test scores (few very low scores)

## Real-World Applications

**1. Comparing groups:**
Test scores across different classes
Salaries across different companies
Heights across different age groups

**2. Quality control:**
Identify defective products (outliers)
Monitor consistency (IQR)

**3. Scientific data:**
Compare experimental results
Analyze measurement variation

**4. Sports statistics:**
Compare player performance
Analyze team statistics

**5. Business:**
Sales data across regions
Customer satisfaction scores

## Example Problem: Complete Analysis

**Data:** Daily temperatures (°F) for two weeks
68, 70, 72, 74, 75, 76, 78, 80, 81, 82, 83, 85, 88, 90

**Find five-number summary:**

Min: 68
Q1: 73 (average of 72 and 74)
Median: 78.5 (average of 78 and 80)
Q3: 83.5 (average of 83 and 85)
Max: 90

**Find IQR:**
IQR = 83.5 - 73 = 10.5

**Check for outliers:**
Lower boundary: 73 - 1.5(10.5) = 73 - 15.75 = 57.25
Upper boundary: 83.5 + 1.5(10.5) = 83.5 + 15.75 = 99.25

No outliers (all data between 57.25 and 99.25)

**Describe distribution:**
- Right-skewed (right whisker slightly longer)
- No outliers
- IQR of 10.5 shows moderate variation
- Median of 78.5 is typical temperature

## Double Box Plots

**Two box plots on same scale for comparison**

**Example:** Boys vs. Girls test scores

Boys: Min 60, Q1 70, Med 78, Q3 85, Max 92
Girls: Min 65, Q1 75, Med 82, Q3 88, Max 95

**Draw both on same number line (vertically stacked)**

**Compare:**
- Girls have higher median (82 vs 78)
- Girls have slightly larger IQR (13 vs 15)
- Girls have higher minimum and maximum
- Overall, girls performed better

## Common Mistakes to Avoid

1. **Not ordering data first**
   Must arrange in order before finding quartiles!

2. **Confusing median and mean**
   Box plot uses median, not mean

3. **Wrong quartile calculation**
   Different methods exist, be consistent

4. **Misidentifying outliers**
   Use 1.5 IQR rule correctly

5. **Drawing to scale incorrectly**
   Number line must be evenly spaced

6. **Forgetting to label**
   Always label number line and title graph

7. **Misreading whiskers**
   Whiskers go to actual min/max (or last non-outlier)

## Box Plot vs Other Displays

**Box Plot vs Histogram:**
- Box plot: Shows five-number summary, quartiles
- Histogram: Shows frequency, shape of distribution

**Box Plot vs Dot Plot:**
- Box plot: Summary, good for large data
- Dot plot: Individual values, good for small data

**Box Plot vs Stem-and-Leaf:**
- Box plot: Visual summary
- Stem-and-leaf: Preserves actual values

**Use box plot when:** Comparing groups, showing quartiles, large data sets

## Technology for Box Plots

**Graphing calculators:**
- TI-84: STAT → PLOT → Modified Box Plot
- Enter data in lists
- Adjust window
- TRACE to see five-number summary

**Software:**
- Excel: Insert → Chart → Box and Whisker
- Google Sheets: Similar feature
- Online tools: Many free box plot generators

**Advantages:** Quick, accurate, can handle large data sets

## Quick Reference

**Five-Number Summary:**
Min, Q1, Median, Q3, Max

**IQR:** Q3 - Q1 (middle 50% spread)

**Outlier Rule:**
Below Q1 - 1.5(IQR) or above Q3 + 1.5(IQR)

**Box:** From Q1 to Q3 (contains middle 50%)

**Whiskers:** From box to min and max (or last non-outlier)

**Median line:** Inside box

**Skewness:**
- Right-skewed: Right whisker longer
- Left-skewed: Left whisker longer
- Symmetric: Whiskers roughly equal

## Practice Tips

- Always order data first
- Practice finding quartiles with odd and even data sets
- Draw to scale carefully
- Label all parts clearly
- Check for outliers using 1.5 IQR rule
- Compare multiple box plots for practice
- Understand what each part represents
- Relate to percentiles (25%, 50%, 75%)
- Practice reading and creating box plots
- Connect to real-world contexts
- Use technology to verify hand calculations
- Remember: 50% of data is in the box!
- Practice identifying skewness
- Work with both standard and modified box plots

Box plots are powerful tools for understanding data distribution and making comparisons. Master this skill and you'll have a valuable technique for analyzing data in statistics, science, and many other fields!`
    }
  });

  console.log('✅ Updated: box-plots');

  console.log('\n✨ Successfully expanded content for 2 topics!');
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
