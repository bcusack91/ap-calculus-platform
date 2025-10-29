import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Expanding Algebra 1 topics - Batch 4 FINAL (2 topics)...\n');

  // Topic 1: Completing the Square (currently 29 chars, expand to 6000+)
  // NOTE: We created content for completing-the-square-algebra1 in batch 8,
  // but this is a different slug: completing-the-square (without -algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'completing-the-square' },
    data: {
      textContent: `# Completing the Square

## What is Completing the Square?

**Completing the square** is a method to rewrite a quadratic expression as a perfect square trinomial.

**Goal:** Transform ax² + bx + c into a(x - h)² + k form

**Why learn it?**
- Solve quadratic equations
- Find vertex of parabola
- Derive quadratic formula
- Convert to vertex form

**Key idea:** Add and subtract a special value to make a perfect square

## Perfect Square Trinomials Review

**Pattern:** (x + a)² = x² + 2ax + a²

**Examples:**
- (x + 3)² = x² + 6x + 9
- (x - 5)² = x² - 10x + 25
- (x + 7)² = x² + 14x + 49

**Key observation:** The constant term is the square of half the coefficient of x

In x² + 6x + 9:
- Coefficient of x is 6
- Half of 6 is 3
- 3² = 9 (the constant!)

**General pattern for x² + bx + ?:**

Complete the square by adding (b/2)²

## The Completing the Square Process

**For x² + bx:**

**Step 1:** Find half of b → b/2

**Step 2:** Square it → (b/2)²

**Step 3:** Add and subtract (b/2)²

**Step 4:** Factor the perfect square

**Step 5:** Simplify

**Example 1:** Complete the square for x² + 8x

Step 1: Half of 8 = 4
Step 2: 4² = 16
Step 3: x² + 8x + 16 - 16
Step 4: (x + 4)² - 16

**Check:** (x + 4)² - 16 = x² + 8x + 16 - 16 = x² + 8x ✓

**Example 2:** Complete the square for x² - 6x

Half of -6 = -3
(-3)² = 9

x² - 6x + 9 - 9 = (x - 3)² - 9

**Example 3:** Complete the square for x² + 10x

Half of 10 = 5
5² = 25

x² + 10x + 25 - 25 = (x + 5)² - 25

## Solving Equations by Completing the Square

**Steps:**
1. Move constant to right side
2. Complete the square on left side
3. Factor perfect square trinomial
4. Take square root of both sides
5. Solve for x

**Example 1:** Solve x² + 6x + 5 = 0

Step 1: Move constant
x² + 6x = -5

Step 2: Complete the square
Half of 6 = 3, 3² = 9
Add 9 to both sides:
x² + 6x + 9 = -5 + 9
x² + 6x + 9 = 4

Step 3: Factor
(x + 3)² = 4

Step 4: Square root both sides
x + 3 = ±2

Step 5: Solve
x + 3 = 2  or  x + 3 = -2
x = -1  or  x = -5

**Check:** (-1)² + 6(-1) + 5 = 1 - 6 + 5 = 0 ✓
(-5)² + 6(-5) + 5 = 25 - 30 + 5 = 0 ✓

**Example 2:** Solve x² - 4x - 12 = 0

Move constant:
x² - 4x = 12

Complete the square:
Half of -4 = -2, (-2)² = 4
x² - 4x + 4 = 12 + 4
x² - 4x + 4 = 16

Factor:
(x - 2)² = 16

Square root:
x - 2 = ±4

Solve:
x = 2 + 4 = 6  or  x = 2 - 4 = -2

**Example 3:** Solve x² + 8x + 7 = 0

x² + 8x = -7

Half of 8 = 4, 4² = 16
x² + 8x + 16 = -7 + 16
(x + 4)² = 9

x + 4 = ±3
x = -4 + 3 = -1  or  x = -4 - 3 = -7

## When Leading Coefficient is Not 1

**If ax² + bx + c where a ≠ 1:**

**Step 1:** Factor out a from x² and x terms
**Step 2:** Complete the square inside parentheses
**Step 3:** Distribute a back through
**Step 4:** Simplify

**Example 1:** Complete the square for 2x² + 12x + 10

Step 1: Factor out 2 from first two terms
2(x² + 6x) + 10

Step 2: Complete inside parentheses
Half of 6 = 3, 3² = 9
2(x² + 6x + 9 - 9) + 10
2(x² + 6x + 9) - 18 + 10

Step 3: Factor and simplify
2(x + 3)² - 8

**Example 2:** Solve 3x² + 12x - 15 = 0

Move constant:
3x² + 12x = 15

Factor out 3:
3(x² + 4x) = 15

Divide by 3:
x² + 4x = 5

Complete the square:
Half of 4 = 2, 2² = 4
x² + 4x + 4 = 5 + 4
(x + 2)² = 9

x + 2 = ±3
x = -2 + 3 = 1  or  x = -2 - 3 = -5

**Example 3:** 2x² - 8x + 6 = 0

2x² - 8x = -6
2(x² - 4x) = -6
x² - 4x = -3

Half of -4 = -2, (-2)² = 4
x² - 4x + 4 = -3 + 4
(x - 2)² = 1

x - 2 = ±1
x = 3  or  x = 1

## Converting to Vertex Form

**Vertex form:** y = a(x - h)² + k
- Vertex at (h, k)
- Opens up if a > 0, down if a < 0

**Use completing the square to find vertex!**

**Example 1:** Convert y = x² + 6x + 5 to vertex form

Complete the square:
y = x² + 6x + 9 - 9 + 5
y = (x + 3)² - 4

**Vertex form:** y = (x + 3)² - 4
**Vertex:** (-3, -4)

**Example 2:** Convert y = x² - 8x + 10 to vertex form

y = x² - 8x + 16 - 16 + 10
y = (x - 4)² - 6

**Vertex:** (4, -6)

**Example 3:** Convert y = 2x² + 8x + 3 to vertex form

Factor out 2:
y = 2(x² + 4x) + 3

Complete the square:
y = 2(x² + 4x + 4 - 4) + 3
y = 2(x + 2)² - 8 + 3
y = 2(x + 2)² - 5

**Vertex:** (-2, -5)

## Deriving the Quadratic Formula

**Start with:** ax² + bx + c = 0

**Divide by a:**
x² + (b/a)x + c/a = 0

**Move constant:**
x² + (b/a)x = -c/a

**Complete the square:**
Half of b/a is b/(2a)
Square: b²/(4a²)

x² + (b/a)x + b²/(4a²) = -c/a + b²/(4a²)

**Factor:**
(x + b/(2a))² = -c/a + b²/(4a²)

**Common denominator:**
(x + b/(2a))² = (-4ac + b²)/(4a²)
(x + b/(2a))² = (b² - 4ac)/(4a²)

**Square root:**
x + b/(2a) = ±√(b² - 4ac)/(2a)

**Solve for x:**
x = -b/(2a) ± √(b² - 4ac)/(2a)

**Quadratic Formula:**
x = (-b ± √(b² - 4ac))/(2a)

**This is how we derive it!**

## When to Use Completing the Square

**Best when:**
- Coefficient of x is even (makes fractions easier)
- Converting to vertex form
- Deriving formulas
- Understanding parabola properties

**Maybe not best when:**
- Easy to factor (use factoring instead)
- Messy fractions (quadratic formula easier)
- Leading coefficient is large

**Always works:** Even when factoring doesn't!

## Completing the Square with Fractions

**Example:** x² + 5x + 3 = 0

x² + 5x = -3

Half of 5 = 5/2
(5/2)² = 25/4

x² + 5x + 25/4 = -3 + 25/4
x² + 5x + 25/4 = -12/4 + 25/4
(x + 5/2)² = 13/4

x + 5/2 = ±√(13/4) = ±√13/2

x = -5/2 ± √13/2 = (-5 ± √13)/2

**Tip:** Fractions are OK! Don't fear them.

## Finding Maximum/Minimum Values

**Once in vertex form y = a(x - h)² + k:**

**If a > 0 (opens up):**
Minimum value is k at x = h

**If a < 0 (opens down):**
Maximum value is k at x = h

**Example:** y = x² - 6x + 11

Complete the square:
y = x² - 6x + 9 - 9 + 11
y = (x - 3)² + 2

Opens up (a = 1 > 0)
**Minimum value:** 2 (at x = 3)

**Example 2:** y = -2x² + 8x - 3

y = -2(x² - 4x) - 3
y = -2(x² - 4x + 4 - 4) - 3
y = -2(x - 2)² + 8 - 3
y = -2(x - 2)² + 5

Opens down (a = -2 < 0)
**Maximum value:** 5 (at x = 2)

## Real-World Applications

**Example 1: Projectile Motion**

Height: h(t) = -16t² + 64t + 5

Find maximum height:

h(t) = -16(t² - 4t) + 5
h(t) = -16(t² - 4t + 4 - 4) + 5
h(t) = -16(t - 2)² + 64 + 5
h(t) = -16(t - 2)² + 69

**Maximum height:** 69 feet (at t = 2 seconds)

**Example 2: Profit Function**

P(x) = -2x² + 80x - 600

Find maximum profit:

P(x) = -2(x² - 40x) - 600
P(x) = -2(x² - 40x + 400) + 800 - 600
P(x) = -2(x - 20)² + 200

**Maximum profit:** 200 dollars (when x = 20 items)

**Example 3: Fencing Problem**

Area: A = x(100 - 2x) = 100x - 2x² = -2x² + 100x

A = -2(x² - 50x)
A = -2(x² - 50x + 625) + 1250
A = -2(x - 25)² + 1250

**Maximum area:** 1,250 square feet (when x = 25 feet)

## Common Mistakes to Avoid

1. **Forgetting to add to both sides**
   Must maintain equation balance!

2. **Wrong value to add**
   Must be (b/2)², not b/2!

3. **Sign errors**
   (x - 3)² ≠ (x + 3)²

4. **Not factoring out leading coefficient first**
   If a ≠ 1, factor it out before completing square

5. **Arithmetic errors with fractions**
   Be careful with (b/2)² when b is odd

6. **Forgetting ± when taking square root**
   √4 gives ±2, not just 2!

7. **Distributing a incorrectly**
   2(x² + 4x + 4) - 8 ≠ 2(x + 2)² - 8
   Should be 2(x + 2)² - 8 (the 2×4 = 8 came out!)

## Completing the Square: Step-by-Step Summary

**For solving ax² + bx + c = 0:**

1. If a ≠ 1, divide everything by a
2. Move constant to right side
3. Take half of coefficient of x
4. Square that value
5. Add to both sides
6. Factor left side as perfect square
7. Take square root of both sides (don't forget ±)
8. Solve for x

**For converting to vertex form:**

1. If a ≠ 1, factor it out from x² and x terms
2. Complete the square inside parentheses
3. Remember: a(x² + bx + (b/2)²) = a(x + b/2)² but you added a·(b/2)²
4. Adjust constant outside to compensate
5. Write as a(x - h)² + k

## Practice Problems Strategy

**Level 1:** Complete the square for x² + bx (even b)
- x² + 4x, x² + 10x, x² - 8x

**Level 2:** Solve equations with a = 1
- x² + 6x + 5 = 0

**Level 3:** Complete the square with odd b
- x² + 3x, x² + 7x (practice fractions!)

**Level 4:** Solve with a ≠ 1
- 2x² + 8x + 6 = 0

**Level 5:** Convert to vertex form
- y = 3x² - 12x + 5

**Level 6:** Applications
- Maximum/minimum problems

## Comparing Methods

**Completing the Square vs Factoring:**
- Factoring: Faster when factors are obvious
- Completing square: Works even when can't factor

**Completing the Square vs Quadratic Formula:**
- Quadratic formula: Memorize once, use always
- Completing square: Understand process, find vertex

**All three methods work!** Choose based on situation.

## Verification

**Always check by expanding back:**

If you get (x + 3)² - 5 from x² + 6x + 4:

Expand: (x + 3)² - 5 = x² + 6x + 9 - 5 = x² + 6x + 4 ✓

**Or substitute solutions back into original equation**

## Quick Reference

**To complete x² + bx:**
Add (b/2)²

**Perfect square result:**
(x + b/2)²

**If a ≠ 1:**
Factor out a first

**Vertex form:**
y = a(x - h)² + k
Vertex: (h, k)

**Don't forget ±**
When taking square roots!

**Value added = value subtracted**
To maintain balance

## Tips for Success

- Practice finding (b/2)² quickly
- Master working with fractions
- Check work by expanding
- Remember to maintain balance (add to both sides)
- Factor out leading coefficient before completing square
- Don't forget the ± when square rooting
- Use completing the square to understand vertex form
- Connect to graphing parabolas
- Verify vertex by substitution
- Practice with even and odd coefficients
- Understand why it works, not just how
- Apply to real-world optimization problems
- Compare with other solution methods

Completing the square is a powerful technique that unlocks understanding of quadratics, parabolas, and optimization. Master it and you'll have deep insight into quadratic functions!`
    }
  });

  console.log('✅ Updated: completing-the-square');

  // Topic 2: Outliers in Data (currently 24 chars, expand to 6000+)
  await prisma.topic.updateMany({
    where: { slug: 'outliers-in-data' },
    data: {
      textContent: `# Outliers in Data

## What is an Outlier?

An **outlier** is a data value that is significantly different from the other values in a data set.

**Think of it as:** A data point that "stands out" or "doesn't fit"

**Examples:**
- Test scores: 78, 82, 85, 79, 83, 15 (15 is an outlier!)
- Heights: 65, 67, 64, 68, 120 (120 inches is an outlier!)
- Prices: 10, 12, 11, 13, 95 (95 is an outlier!)

**Key point:** Outliers are unusually high OR unusually low

## Why Outliers Matter

**1. Affect mean (average)**
Mean is sensitive to outliers!

**Example:** Salaries: 40k, 42k, 45k, 43k, 200k
- With outlier: Mean = 74k
- Without outlier: Mean = 42.5k

**Big difference!**

**2. Don't affect median much**
Median is resistant to outliers

Same example:
- With outlier: Median = 43k
- Without outlier: Median = 42.5k

**Small difference!**

**3. Can indicate errors**
- Measurement mistakes
- Data entry errors
- Recording problems

**4. Can reveal important information**
- Exceptional cases
- New discoveries
- Special circumstances

## Identifying Outliers: The IQR Method

**Most common method:** 1.5 × IQR rule

**Steps:**

**Step 1:** Find Q1 and Q3

**Step 2:** Calculate IQR = Q3 - Q1

**Step 3:** Calculate boundaries
- Lower boundary: Q1 - 1.5(IQR)
- Upper boundary: Q3 + 1.5(IQR)

**Step 4:** Any value outside boundaries is an outlier

**Example:** Data: 2, 5, 7, 8, 9, 10, 12, 15, 40

Q1 = 7 (25th percentile)
Q3 = 12 (75th percentile)
IQR = 12 - 7 = 5

Lower boundary: 7 - 1.5(5) = 7 - 7.5 = -0.5
Upper boundary: 12 + 1.5(5) = 12 + 7.5 = 19.5

**Outlier:** 40 (greater than 19.5)

**Example 2:** Test scores: 65, 70, 72, 75, 78, 80, 82, 85, 88, 20

Order: 20, 65, 70, 72, 75, 78, 80, 82, 85, 88

Q1 = 70
Q3 = 82
IQR = 12

Lower: 70 - 1.5(12) = 70 - 18 = 52
Upper: 82 + 1.5(12) = 82 + 18 = 100

**Outlier:** 20 (less than 52)

## Why 1.5 × IQR?

**The 1.5 multiplier is a convention:**
- Widely accepted in statistics
- Balances sensitivity (finding real outliers) with specificity (not flagging too many)
- Works well for many distributions
- Used by box plots

**Alternatives exist:**
- 2 × IQR (more conservative, fewer outliers)
- 3 × IQR (very conservative, extreme outliers only)
- Standard deviation method (for normal distributions)

**In Algebra 1:** Stick with 1.5 × IQR unless told otherwise

## Visual Identification

**From dot plots, histograms, box plots:**

Look for values far separated from the main cluster

**Example: Dot plot**

Values 10 through 15 have most of the data points clustered together, but value 25 has a single point far separated from the cluster. The point at 25 is separated from cluster at 10-15 and is likely an outlier.

**From box plots:**
Outliers often shown as individual points beyond whiskers

**From scatter plots:**
Points far from the trend line or main cluster

## Types of Outliers

**1. Mild outliers:**
- Between 1.5 and 3 IQRs from Q1/Q3
- Somewhat unusual

**2. Extreme outliers:**
- More than 3 IQRs from Q1/Q3
- Very unusual

**Example:** Q1 = 10, Q3 = 20, IQR = 10

Mild outlier range:
- Lower: 10 - 1.5(10) to 10 - 3(10) = -5 to -20
- Upper: 20 + 1.5(10) to 20 + 3(10) = 35 to 50

Extreme outlier:
- Below -20 or above 50

## Effect on Measures of Center

**Mean:**
- Very sensitive to outliers
- Pulled toward outlier
- Can be misleading with outliers

**Example:** 10, 12, 13, 14, 15, 100

Mean with outlier: (10+12+13+14+15+100)/6 = 27.3
Mean without: (10+12+13+14+15)/5 = 12.8

**Huge difference!**

**Median:**
- Resistant to outliers
- Not pulled significantly
- Better measure when outliers present

Same example:
Median with outlier: 13.5
Median without: 13

**Small difference!**

**Mode:**
- Not affected by outliers
- Only shows most frequent value

## Effect on Measures of Spread

**Range:**
- Very sensitive (uses min and max)
- Outliers inflate range

**Example:** 5, 7, 8, 9, 10, 50

Range with outlier: 50 - 5 = 45
Range without: 10 - 5 = 5

**IQR:**
- Resistant to outliers
- Only uses middle 50%
- Better measure when outliers present

Same example:
IQR with outlier: Q3 - Q1 = 10 - 7 = 3
IQR without: 9 - 7 = 2

**Less dramatic change**

**Standard deviation:**
- Sensitive to outliers (in advanced statistics)
- Outliers increase variability

## Causes of Outliers

**1. Measurement error:**
- Instrument malfunction
- Human error reading/recording
- Transcription mistake

**Example:** Recording 150 instead of 15.0

**2. Data entry error:**
- Typo when entering data
- Extra or missing digit
- Wrong decimal place

**Example:** Typing 1000 instead of 100

**3. Sampling error:**
- Wrong population sampled
- Non-random selection

**4. Natural variation:**
- True extreme value
- Rare but real occurrence

**Example:** Unusually tall person, genius IQ, record temperature

**5. Different population:**
- Value from different group

**Example:** Adult height in data of children's heights

## What to Do with Outliers

**Option 1: Investigate**
- Check for errors
- Verify measurement
- Look for explanation

**Option 2: Keep**
- If legitimate data point
- If represents true variation
- Document its presence

**Option 3: Remove**
- If proven error
- If not from target population
- Report that you removed it!

**NEVER:** Remove without reason or justification!

**Best practice:**
- Analyze data both with and without outlier
- Report both results
- Explain any removal decision

## Reporting Outliers

**When writing about data:**

"The data set contains one outlier (value = 95), which is more than 1.5 IQRs above Q3. This value appears to be a data entry error based on the source document, so it was excluded from further analysis."

**OR:**

"One outlier (150) was identified but retained because it represents a legitimate extreme value."

**Be transparent!**

## Real-World Examples

**Example 1: Income Data**

Incomes: 35k, 40k, 42k, 38k, 45k, 2M (CEO)

2M is an outlier
- Median better than mean for "typical" income
- Outlier is real (some people earn much more)
- Keep it, but use median for reporting

**Example 2: Test Scores**

Scores: 78, 82, 85, 88, 90, 15

15 is an outlier
- Likely student left early or didn't try
- Or answer sheet error
- Investigate before deciding

**Example 3: Product Weights**

Weights (grams): 100, 101, 99, 102, 150

150 is an outlier
- Possible production error
- Check batch records
- May need quality control adjustment

**Example 4: Reaction Times**

Times (seconds): 0.8, 0.9, 0.85, 0.82, 5.2

5.2 is an outlier
- Person distracted?
- Timer error?
- Investigate before removing

## Outliers in Different Contexts

**Science experiments:**
- May indicate errors
- Could be breakthrough discovery
- Repeat to verify

**Quality control:**
- Often indicate defects
- Trigger inspection
- May lead to process improvement

**Sports statistics:**
- Record-breaking performances
- Exceptional talent
- Keep for historical record

**Economic data:**
- Market crashes/booms
- Unusual events
- Important to analyze separately

## Multiple Outliers

**Data can have more than one!**

**Example:** 5, 8, 10, 12, 15, 18, 75, 80

Both 75 and 80 are outliers (using IQR method)

**Clustered outliers:**
- Multiple outliers grouped together
- May indicate subpopulation
- Consider separate analysis

## Outliers in Box Plots

**Standard representation:**
- Draw whiskers to last non-outlier
- Mark outliers as individual points (dots)
- Clearly visible

**Example:**
In a box plot, an outlier would be marked as a dot beyond the whiskers, with the whiskers extending only to the last non-outlier value in the normal data range.

**Benefits:**
- Quick visual identification
- See number of outliers
- See if high or low

## Z-Score Method (Preview)

**Alternative method using standard deviation:**

z = (value - mean) / standard deviation

**Rule:** If |z| > 3, likely outlier
(In some contexts, |z| > 2)

**Example:** Mean = 50, SD = 5

Value = 70
z = (70 - 50) / 5 = 4

Since 4 > 3, value 70 is an outlier

**Note:** This is more common in advanced statistics

## Practice Identifying Outliers

**Example 1:** 12, 15, 18, 20, 22, 25, 28, 65

Order: Already ordered
Q1 = 16.5, Q3 = 26.5, IQR = 10

Lower: 16.5 - 15 = 1.5
Upper: 26.5 + 15 = 41.5

**Outlier:** 65 (> 41.5)

**Example 2:** 2, 3, 5, 7, 8, 9, 10, 11, 12

Q1 = 5, Q3 = 10, IQR = 5

Lower: 5 - 7.5 = -2.5
Upper: 10 + 7.5 = 17.5

**No outliers** (all values between -2.5 and 17.5)

**Example 3:** 50, 55, 60, 62, 65, 68, 70, 72, 120

Q1 = 60, Q3 = 70, IQR = 10

Lower: 60 - 15 = 45
Upper: 70 + 15 = 85

**Outlier:** 120 (> 85)

## Common Mistakes to Avoid

1. **Automatically removing outliers**
   Must investigate first!

2. **Using range instead of IQR**
   IQR is resistant to outliers, range is not

3. **Wrong IQR calculation**
   IQR = Q3 - Q1 (not max - min!)

4. **Forgetting both boundaries**
   Check both lower and upper limits

5. **Calculation errors with 1.5**
   1.5 × IQR, not 1.5 + IQR!

6. **Not considering context**
   Is the outlier meaningful or an error?

7. **Not reporting removals**
   Always document if you exclude data

## Outliers and Technology

**Calculators:**
- Many show outliers on box plots
- Can calculate quartiles automatically

**Spreadsheets:**
- Use QUARTILE function
- Create formulas for boundaries
- Conditional formatting to highlight

**Statistical software:**
- Automatic outlier detection
- Multiple methods available
- Visual displays

## When Outliers Are Most Important

**Quality control:**
Outliers indicate defects

**Medical data:**
Unusual values may indicate health issues

**Fraud detection:**
Unusual transactions flagged

**Climate data:**
Extreme values important for planning

**Safety analysis:**
Worst-case scenarios matter

## Outliers vs Extreme Values

**Not all extreme values are outliers!**

**Extreme value:** At the far end of distribution
**Outlier:** Statistically defined as beyond 1.5 IQR

**Example:** Tallest person in class

Might be extreme (tallest) but not outlier (still within 1.5 IQR)

**Example 2:** Record high temperature

Extreme and probably an outlier

## Quick Reference

**Outlier:** Data value far from others

**IQR Method:**
- Lower boundary: Q1 - 1.5(IQR)
- Upper boundary: Q3 + 1.5(IQR)
- Outside boundaries = outlier

**Effects:**
- Mean: Very sensitive
- Median: Resistant
- Range: Sensitive
- IQR: Resistant

**Actions:**
1. Investigate
2. Keep if legitimate
3. Remove if error (and report!)

**Never:** Remove without reason

**In box plots:** Shown as individual points

## Practice Strategy

- Calculate IQR carefully
- Don't forget the 1.5 multiplier
- Check both upper and lower boundaries
- Consider context and cause
- Practice with various data sets
- Learn to identify visually from graphs
- Understand effect on mean vs median
- Compare statistics with and without outliers
- Read real-world examples
- Use technology to verify
- Always investigate before removing
- Document your decisions
- Understand that outliers aren't always errors
- Practice explaining outliers to others
- Apply to real data from your life

Understanding outliers is crucial for accurate data analysis. They can reveal errors, exceptional cases, or important patterns. Master this skill and you'll be a more critical and careful data analyst!`
    }
  });

  console.log('✅ Updated: outliers-in-data');

  console.log('\n✨ Successfully expanded content for final 2 topics!');
  console.log('🎉 EXPANSION PHASE COMPLETE! All Algebra 1 topics now have 6,000+ character content!');
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
