import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Expanding Algebra 1 topics - Batch 1 (3 topics)...\n');

  // Topic 1: Solving Linear Equations (currently 1464 chars, expand to 6000+)
  await prisma.topic.updateMany({
    where: { slug: 'solving-linear-equations' },
    data: {
      textContent: `# Solving Linear Equations

## What is a Linear Equation?

A **linear equation** is an equation where the variable appears to the first power (no exponents like x² or x³).

**Examples of linear equations:**
- x + 5 = 12
- 3x - 7 = 14
- 2(x + 3) = 10
- 4x + 1 = 2x + 9

**Not linear equations:**
- x² + 5 = 12 (has x²)
- 1/x = 3 (x in denominator)
- √x = 4 (has square root)

## Standard Form

**ax + b = c** where a, b, and c are constants

**Goal:** Isolate x on one side of the equation

## One-Step Equations

**Addition/Subtraction:**

**Example 1:** x + 7 = 15

Subtract 7 from both sides:
x + 7 - 7 = 15 - 7
x = 8

**Check:** 8 + 7 = 15 ✓

**Example 2:** x - 4 = 11

Add 4 to both sides:
x - 4 + 4 = 11 + 4
x = 15

**Check:** 15 - 4 = 11 ✓

**Multiplication/Division:**

**Example 3:** 3x = 21

Divide both sides by 3:
3x/3 = 21/3
x = 7

**Check:** 3(7) = 21 ✓

**Example 4:** x/5 = 8

Multiply both sides by 5:
(x/5) · 5 = 8 · 5
x = 40

**Check:** 40/5 = 8 ✓

## Two-Step Equations

**Form:** ax + b = c

**Steps:**
1. Add or subtract to move constant term
2. Multiply or divide to isolate variable

**Example 1:** 2x + 5 = 17

Step 1: Subtract 5
2x + 5 - 5 = 17 - 5
2x = 12

Step 2: Divide by 2
2x/2 = 12/2
x = 6

**Check:** 2(6) + 5 = 12 + 5 = 17 ✓

**Example 2:** 3x - 8 = 13

Step 1: Add 8
3x - 8 + 8 = 13 + 8
3x = 21

Step 2: Divide by 3
x = 7

**Check:** 3(7) - 8 = 21 - 8 = 13 ✓

**Example 3:** x/4 + 3 = 10

Step 1: Subtract 3
x/4 = 7

Step 2: Multiply by 4
x = 28

**Check:** 28/4 + 3 = 7 + 3 = 10 ✓

**Example 4:** -5x + 2 = -18

Step 1: Subtract 2
-5x = -20

Step 2: Divide by -5
x = 4

**Check:** -5(4) + 2 = -20 + 2 = -18 ✓

## Multi-Step Equations

**With parentheses - use distributive property:**

**Example 1:** 3(x + 4) = 21

Distribute 3:
3x + 12 = 21

Subtract 12:
3x = 9

Divide by 3:
x = 3

**Check:** 3(3 + 4) = 3(7) = 21 ✓

**Example 2:** 2(x - 5) + 3 = 13

Distribute 2:
2x - 10 + 3 = 13

Combine like terms:
2x - 7 = 13

Add 7:
2x = 20

Divide by 2:
x = 10

**Check:** 2(10 - 5) + 3 = 2(5) + 3 = 13 ✓

**Example 3:** -4(2x + 1) = 20

Distribute -4:
-8x - 4 = 20

Add 4:
-8x = 24

Divide by -8:
x = -3

**Check:** -4(2(-3) + 1) = -4(-6 + 1) = -4(-5) = 20 ✓

## Variables on Both Sides

**Strategy:** Collect all variable terms on one side, constants on the other

**Example 1:** 5x + 3 = 2x + 12

Subtract 2x from both sides:
3x + 3 = 12

Subtract 3:
3x = 9

Divide by 3:
x = 3

**Check:** 5(3) + 3 = 15 + 3 = 18, and 2(3) + 12 = 6 + 12 = 18 ✓

**Example 2:** 7x - 4 = 3x + 8

Subtract 3x:
4x - 4 = 8

Add 4:
4x = 12

Divide by 4:
x = 3

**Check:** 7(3) - 4 = 17, and 3(3) + 8 = 17 ✓

**Example 3:** 2x + 9 = 6x - 3

Subtract 2x:
9 = 4x - 3

Add 3:
12 = 4x

Divide by 4:
x = 3

**Example 4:** 8 - 3x = 2x + 13

Add 3x:
8 = 5x + 13

Subtract 13:
-5 = 5x

Divide by 5:
x = -1

**Check:** 8 - 3(-1) = 8 + 3 = 11, and 2(-1) + 13 = -2 + 13 = 11 ✓

## Equations with Fractions

**Method 1: Clear fractions by multiplying by LCD**

**Example 1:** (x/3) + 2 = 5

Method 1 - Clear fraction:
Multiply everything by 3:
3 · (x/3) + 3 · 2 = 3 · 5
x + 6 = 15
x = 9

Method 2 - Work with fraction:
Subtract 2:
x/3 = 3
Multiply by 3:
x = 9

**Example 2:** (2x/5) - 1 = 3

Multiply by 5:
5 · (2x/5) - 5 · 1 = 5 · 3
2x - 5 = 15
2x = 20
x = 10

**Example 3:** (x/2) + (x/3) = 5

LCD = 6, multiply everything by 6:
6 · (x/2) + 6 · (x/3) = 6 · 5
3x + 2x = 30
5x = 30
x = 6

**Check:** 6/2 + 6/3 = 3 + 2 = 5 ✓

**Example 4:** (x + 2)/4 = 3

Multiply by 4:
x + 2 = 12
x = 10

## Equations with Decimals

**Method: Clear decimals by multiplying by power of 10**

**Example 1:** 0.5x + 1.2 = 3.7

Multiply by 10 (move decimal 1 place):
5x + 12 = 37
5x = 25
x = 5

**Check:** 0.5(5) + 1.2 = 2.5 + 1.2 = 3.7 ✓

**Example 2:** 0.25x - 0.5 = 1.75

Multiply by 100 (move decimal 2 places):
25x - 50 = 175
25x = 225
x = 9

**Example 3:** 1.5x + 2.4 = 0.3x + 8.4

Multiply by 10:
15x + 24 = 3x + 84
12x = 60
x = 5

## Combining Like Terms First

**Example 1:** 3x + 2x - 4 = 11

Combine 3x + 2x:
5x - 4 = 11
5x = 15
x = 3

**Example 2:** 7x - 2x + 5 = 3x + 17

Combine 7x - 2x:
5x + 5 = 3x + 17

Subtract 3x:
2x + 5 = 17
2x = 12
x = 6

**Example 3:** 4(x + 2) + 3(x - 1) = 26

Distribute:
4x + 8 + 3x - 3 = 26

Combine like terms:
7x + 5 = 26
7x = 21
x = 3

## Special Cases

**Identity (infinite solutions):**

**Example:** 2x + 4 = 2(x + 2)

Distribute:
2x + 4 = 2x + 4

Subtract 2x:
4 = 4 (always true!)

**Solution:** All real numbers (infinite solutions)

**Contradiction (no solution):**

**Example:** 3x + 5 = 3x + 8

Subtract 3x:
5 = 8 (never true!)

**Solution:** No solution (empty set)

## Checking Your Answer

**Why check?** Catch arithmetic mistakes!

**How to check:**
1. Substitute answer back into original equation
2. Simplify both sides
3. Verify left side equals right side

**Example:** If x = 4 in 2x + 3 = 11

Check: 2(4) + 3 = 8 + 3 = 11 ✓

## Real-World Applications

**Example 1: Age Problem**

Maria is 3 years older than twice John's age. If Maria is 23, how old is John?

Let x = John's age
2x + 3 = 23
2x = 20
x = 10

John is 10 years old.

**Example 2: Shopping**

You buy 3 shirts at the same price and pay 8 dollars for shipping. Total cost is 53 dollars. What is the price per shirt?

Let x = price per shirt
3x + 8 = 53
3x = 45
x = 15

Each shirt costs 15 dollars.

**Example 3: Temperature Conversion**

Convert 77°F to Celsius using C = (5/9)(F - 32)

C = (5/9)(77 - 32)
C = (5/9)(45)
C = 25°C

**Example 4: Perimeter**

A rectangle has perimeter 40 feet. Length is 2 feet more than width. Find the width.

Let w = width, then length = w + 2
Perimeter: 2w + 2(w + 2) = 40
2w + 2w + 4 = 40
4w + 4 = 40
4w = 36
w = 9

Width is 9 feet, length is 11 feet.

## Common Mistakes to Avoid

1. **Not doing same operation to both sides**
   WRONG: 2x + 3 = 11 → 2x = 11 - 3 (forgot to subtract from left!)
   CORRECT: 2x + 3 = 11 → 2x = 8

2. **Sign errors with negatives**
   Dividing both sides by -5:
   -5x = 20 → x = -4 (not +4!)

3. **Not distributing to all terms**
   3(x + 4) = 3x + 12 (not 3x + 4!)

4. **Forgetting to combine like terms first**
   5x + 2x = 14 → 7x = 14 → x = 2

5. **Arithmetic mistakes**
   Always check your answer!

## Step-by-Step Strategy

**General process:**
1. Simplify each side (distribute, combine like terms)
2. Move variable terms to one side (add/subtract)
3. Move constant terms to other side (add/subtract)
4. Isolate variable (multiply/divide)
5. Check your answer

**Remember:** Whatever you do to one side, do to the other!

## Quick Reference

**One-step:** Just add, subtract, multiply, or divide

**Two-step:** Move constant, then coefficient

**With parentheses:** Distribute first

**Variables both sides:** Collect all x's on one side

**With fractions:** Multiply by LCD to clear

**With decimals:** Multiply by 10, 100, or 1000

**Always check:** Substitute back into original equation

## Practice Tips

- Start with simpler equations, build up to complex
- Show all steps even if you can do them mentally
- Write neatly to avoid sign errors
- Check every answer
- Use opposite operations (addition ↔ subtraction, multiplication ↔ division)
- Keep equations balanced (both sides equal)
- Practice with word problems to see real applications
- Don't rush - accuracy over speed
- If stuck, go back to basics
- Master this foundation - it appears everywhere in algebra!

Linear equations are the building blocks of algebra. Master them now and everything else becomes easier!`
    }
  });

  console.log('✅ Updated: solving-linear-equations');

  // Topic 2: Scatter Plots (currently 949 chars, expand to 6000+)
  await prisma.topic.updateMany({
    where: { slug: 'scatter-plots-algebra1' },
    data: {
      textContent: `# Scatter Plots and Correlations

## What is a Scatter Plot?

A **scatter plot** is a graph showing the relationship between two variables.

Each point represents one data pair (x, y).

**Purpose:** Identify patterns and correlations between variables

**Example data:**
Study hours vs. test scores for 5 students:
- (1, 65): 1 hour study, score 65
- (2, 70): 2 hours study, score 70
- (3, 80): 3 hours study, score 80
- (4, 85): 4 hours study, score 85
- (5, 95): 5 hours study, score 95

Plot these points to see the relationship!

## Creating a Scatter Plot

**Steps:**
1. Draw axes (x-axis = independent variable, y-axis = dependent variable)
2. Label axes with variable names and units
3. Choose appropriate scale
4. Plot each ordered pair as a point
5. Title the graph

**Example:** Height vs. Shoe Size

Data:
- Height 60 inches, Size 7
- Height 64 inches, Size 8
- Height 68 inches, Size 9
- Height 72 inches, Size 10

Plot each point: (60, 7), (64, 8), (68, 9), (72, 10)

## Types of Correlation

**Positive Correlation:**
- As x increases, y increases
- Points trend upward from left to right
- Slope is positive

**Example:** Study time vs. test score
More studying → higher scores

**Negative Correlation:**
- As x increases, y decreases
- Points trend downward from left to right
- Slope is negative

**Example:** Speed vs. travel time
Higher speed → less time

**No Correlation:**
- No clear pattern
- Points scattered randomly
- No relationship between variables

**Example:** Shoe size vs. math score
No connection!

## Strength of Correlation

**Strong Correlation:**
- Points close to a line
- Clear, tight pattern
- Strong relationship

**Moderate Correlation:**
- Points somewhat close to a line
- Pattern visible but not tight
- Moderate relationship

**Weak Correlation:**
- Points loosely scattered
- Vague pattern
- Weak relationship

**Measuring strength:** How close points are to forming a line

## Correlation vs. Causation

**Correlation:** Two variables related (change together)

**Causation:** One variable CAUSES the other to change

**KEY POINT:** Correlation does NOT prove causation!

**Example 1:** Ice cream sales and drowning deaths

Correlation: Both increase in summer
Causation? NO! Heat causes both, not each other

**Example 2:** Study time and test scores

Correlation: Positive
Causation? Likely YES! Studying helps scores

**Example 3:** Shoe size and reading ability in children

Correlation: Positive (both increase with age)
Causation? NO! Age causes both

**Critical thinking:** Always ask "Could there be another factor?"

## Line of Best Fit (Trend Line)

A line that best represents the data pattern.

**Purpose:** Make predictions from data

**Characteristics:**
- Passes through or near most points
- Equal points above and below line (balanced)
- Minimizes distance to all points

**Drawing by hand:**
1. Identify the pattern (positive/negative)
2. Draw a line through the "middle" of points
3. Balance points above and below

**Example:** Study hours vs. scores

Points: (1, 65), (2, 70), (3, 80), (4, 85), (5, 95)

Line approximately: y = 8x + 57

## Making Predictions

Use the line of best fit to predict values.

**Interpolation:** Predict within data range

**Example:** If line is y = 8x + 57
Predict score for 2.5 hours study:
y = 8(2.5) + 57 = 20 + 57 = 77

Expected score: 77

**Extrapolation:** Predict outside data range

**Example:** Predict score for 10 hours study:
y = 8(10) + 57 = 137

**Warning:** Extrapolation less reliable! (Can't score 137!)

## Outliers in Scatter Plots

**Outlier:** Point far from the general pattern

**Example:** Study hours vs. scores

Most points follow pattern, but one student:
(4, 50) - studied 4 hours but scored only 50

This is an outlier!

**Reasons for outliers:**
- Measurement error
- Unusual circumstance (student was sick)
- Special case
- Data entry mistake

**Effect on correlation:**
- Outliers can weaken correlation
- May affect line of best fit
- Consider removing if justified

## Linear vs. Nonlinear Patterns

**Linear pattern:** Points form roughly a straight line

**Nonlinear patterns:**

**Quadratic:** Points form a curve (parabola)
Example: Height of thrown ball vs. time

**Exponential:** Points show rapid increase/decrease
Example: Bacterial growth vs. time

**No pattern:** Random scatter
Example: Phone number vs. height

**For Algebra 1:** Focus on linear patterns!

## Correlation Coefficient (r)

**Measures strength and direction of linear correlation**

**Range:** -1 to +1

**r = +1:** Perfect positive correlation (all points on upward line)
**r = 0:** No correlation
**r = -1:** Perfect negative correlation (all points on downward line)

**Interpreting r:**
- 0.8 to 1.0 or -0.8 to -1.0: Strong
- 0.5 to 0.8 or -0.5 to -0.8: Moderate
- 0 to 0.5 or 0 to -0.5: Weak

**Example:**
r = 0.92 → Strong positive correlation
r = -0.73 → Moderate negative correlation
r = 0.15 → Weak positive correlation

## Real-World Examples

**Example 1: Temperature vs. Ice Cream Sales**

Data shows positive correlation:
Higher temperature → more sales

Makes sense! (causation likely)

**Example 2: Car Age vs. Value**

Negative correlation:
Older car → lower value

Clear causation!

**Example 3: Height vs. Arm Span**

Strong positive correlation:
Taller people have longer arms

Biological relationship!

**Example 4: TV Hours vs. GPA**

Negative correlation:
More TV → lower GPA

Correlation? Yes. Causation? Maybe! (could be other factors)

## Analyzing Scatter Plots

**Questions to ask:**
1. Is there a correlation? (positive/negative/none)
2. How strong is the correlation? (strong/moderate/weak)
3. Are there outliers?
4. Is the pattern linear or nonlinear?
5. Could there be causation?
6. Are there lurking variables?

**Lurking variable:** Hidden factor affecting both variables

Example: Study time and scores both affected by student motivation

## Creating Scatter Plots from Data Tables

**Example:** Hours of sleep vs. energy level (1-10 scale)

Data:
Student A: 5 hours, energy 4
Student B: 7 hours, energy 7
Student C: 6 hours, energy 5
Student D: 8 hours, energy 8
Student E: 4 hours, energy 3

Points: (5, 4), (7, 7), (6, 5), (8, 8), (4, 3)

Pattern: Positive correlation
More sleep → more energy

## Using Technology

**Graphing calculators:**
- Enter data in lists
- Create scatter plot
- Calculate correlation coefficient
- Find line of best fit equation

**Example:** TI-84
1. STAT → Edit → Enter data in L1 and L2
2. 2nd → STAT PLOT → Turn on Plot1
3. ZOOM → ZoomStat
4. STAT → CALC → LinReg (calculate r and equation)

**Spreadsheet software:**
- Excel, Google Sheets
- Create chart → Scatter plot
- Add trendline
- Display equation and R² value

## Common Mistakes to Avoid

1. **Confusing correlation with causation**
   Just because two things correlate doesn't mean one causes the other!

2. **Ignoring outliers**
   Outliers can significantly affect the line of best fit

3. **Extrapolating too far**
   Predictions far outside data range are unreliable

4. **Wrong variable on wrong axis**
   Independent variable (x) should be on horizontal axis

5. **Poor scale choices**
   Scale should show pattern clearly without distortion

6. **Not labeling axes**
   Always label with variable names and units!

## Interpreting Slope in Context

The slope of the line of best fit has real meaning!

**Example:** Study hours vs. test scores
Line: y = 8x + 57

Slope = 8 means: Each additional hour of study increases score by about 8 points

**Example:** Temperature vs. ice cream sales
Line: y = 12x + 50

Slope = 12 means: Each degree increase in temperature adds about 12 sales

## Y-Intercept in Context

**Example:** y = 8x + 57 (study hours vs. score)

Y-intercept = 57: Predicted score with 0 hours study

Does this make sense? Maybe! (represents prior knowledge)

**Example:** y = 12x + 50 (temperature vs. sales)

Y-intercept = 50: Predicted sales at 0°F

May not make sense! (shop might be closed)

**Lesson:** Interpret intercept carefully in context!

## Quick Reference

**Positive correlation:** Both variables increase together

**Negative correlation:** One increases, other decreases

**No correlation:** No relationship

**Strong:** Points close to line

**Weak:** Points scattered loosely

**Outlier:** Point far from pattern

**Line of best fit:** Line representing overall trend

**Interpolation:** Predict within data range

**Extrapolation:** Predict outside data range

**Correlation ≠ Causation!**

## Practice Tips

- Always label axes with variable names and units
- Start with independent variable on x-axis
- Look for overall pattern before drawing line
- Balance points above and below the line
- Identify and note outliers
- Consider whether correlation makes sense
- Don't assume causation without evidence
- Practice reading scatter plots from different contexts
- Use technology to check your work
- Think critically about lurking variables
- Apply to real-world situations
- Understand the difference between interpolation and extrapolation
- Remember: Scatter plots are about relationships!

Scatter plots are powerful tools for visualizing relationships between variables. Master this skill and you'll be able to analyze data in science, social studies, business, and everyday life!`
    }
  });

  console.log('✅ Updated: scatter-plots-algebra1');

  // Topic 3: Percent Problems (currently 856 chars, expand to 6000+)
  await prisma.topic.updateMany({
    where: { slug: 'percent-problems-algebra1' },
    data: {
      textContent: `# Percent Problems

## What is a Percent?

**Percent** means "per hundred" or "out of 100"

**Symbol:** %

**Key concept:** 50% = 50/100 = 0.50 = 1/2

**Converting:**
- Percent to decimal: Divide by 100 (move decimal 2 left)
- Decimal to percent: Multiply by 100 (move decimal 2 right)
- Percent to fraction: Write over 100, simplify

**Examples:**
- 25% = 0.25 = 25/100 = 1/4
- 0.75 = 75%
- 3/4 = 0.75 = 75%
- 150% = 1.50 = 1.5 = 3/2

## Three Types of Percent Problems

**Type 1: Find the part**
What is 30% of 80?

**Type 2: Find the percent**
12 is what percent of 40?

**Type 3: Find the whole**
15 is 25% of what number?

**Key equation:** Part = Percent × Whole
Or: is = % × of

## Finding the Part

**Question form:** What is P% of W?

**Equation:** Part = (P/100) × W

**Example 1:** What is 20% of 50?

Part = 0.20 × 50 = 10

Answer: 10

**Example 2:** Find 35% of 200

Part = 0.35 × 200 = 70

Answer: 70

**Example 3:** What is 8% of 125?

Part = 0.08 × 125 = 10

Answer: 10

**Example 4:** Calculate 150% of 60

Part = 1.50 × 60 = 90

Answer: 90 (yes, more than 100%!)

## Finding the Percent

**Question form:** A is what percent of B?

**Equation:** Percent = (Part/Whole) × 100

**Example 1:** 15 is what percent of 60?

Percent = (15/60) × 100 = 0.25 × 100 = 25%

Answer: 25%

**Example 2:** What percent of 80 is 20?

Percent = (20/80) × 100 = 0.25 × 100 = 25%

Answer: 25%

**Example 3:** 33 is what percent of 150?

Percent = (33/150) × 100 = 0.22 × 100 = 22%

Answer: 22%

**Example 4:** What percent of 25 is 30?

Percent = (30/25) × 100 = 1.2 × 100 = 120%

Answer: 120% (more than the whole!)

## Finding the Whole

**Question form:** A is P% of what number?

**Equation:** Whole = Part / (P/100) = Part / Percent (as decimal)

**Example 1:** 20 is 25% of what number?

Whole = 20 / 0.25 = 80

Answer: 80

**Example 2:** 15 is 30% of what number?

Whole = 15 / 0.30 = 50

Answer: 50

**Example 3:** 12 is 8% of what number?

Whole = 12 / 0.08 = 150

Answer: 150

**Example 4:** 45 is 150% of what number?

Whole = 45 / 1.50 = 30

Answer: 30

## Using Proportions

**Alternative method:** Set up proportion

**Form:** Part/Whole = Percent/100

**Example 1:** What is 40% of 70?

x/70 = 40/100

Cross multiply: 100x = 2800
x = 28

**Example 2:** 18 is what percent of 72?

18/72 = x/100

Cross multiply: 72x = 1800
x = 25

Answer: 25%

**Example 3:** 24 is 60% of what number?

24/x = 60/100

Cross multiply: 60x = 2400
x = 40

Answer: 40

## Percent Increase and Decrease

**Percent Change Formula:**

Percent Change = (New - Original) / Original × 100

**Increase:** New > Original (positive result)
**Decrease:** New < Original (negative result)

**Example 1: Percent Increase**

Original price: 50 dollars
New price: 60 dollars

Percent Increase = (60 - 50)/50 × 100 = 10/50 × 100 = 20%

Price increased by 20%

**Example 2: Percent Decrease**

Original price: 80 dollars
Sale price: 64 dollars

Percent Decrease = (64 - 80)/80 × 100 = -16/80 × 100 = -20%

Price decreased by 20% (negative indicates decrease)

**Example 3: Population Growth**

Original population: 5,000
New population: 6,500

Percent Increase = (6,500 - 5,000)/5,000 × 100 = 1,500/5,000 × 100 = 30%

Population grew by 30%

**Example 4: Test Score Improvement**

First score: 70
Second score: 84

Percent Increase = (84 - 70)/70 × 100 = 14/70 × 100 = 20%

Score improved by 20%

## Finding New Amount After Percent Change

**Increase:** New = Original × (1 + percent increase as decimal)

**Decrease:** New = Original × (1 - percent decrease as decimal)

**Example 1: 15% Increase**

Original: 200
Increase by 15%

New = 200 × (1 + 0.15) = 200 × 1.15 = 230

**Example 2: 20% Decrease**

Original: 150
Decrease by 20%

New = 150 × (1 - 0.20) = 150 × 0.80 = 120

**Example 3: Price After Discount**

Original price: 85 dollars
30% off discount

Sale price = 85 × (1 - 0.30) = 85 × 0.70 = 59.50 dollars

**Example 4: Population After Growth**

Current population: 8,000
Expected 12% growth

New population = 8,000 × (1 + 0.12) = 8,000 × 1.12 = 8,960

## Sales Tax Problems

**Total Cost = Original Price + Tax**
**Tax = Original Price × Tax Rate**

**Example 1:** 6% sales tax

Item cost: 50 dollars
Tax = 50 × 0.06 = 3 dollars
Total = 50 + 3 = 53 dollars

**Shortcut:** Total = 50 × 1.06 = 53 dollars

**Example 2:** 8.5% sales tax

Item cost: 120 dollars
Total = 120 × 1.085 = 130.20 dollars

**Example 3: Finding Original Price**

Total with tax: 84.80 dollars
Tax rate: 6%

Original price = 84.80 / 1.06 = 80 dollars

## Discount Problems

**Sale Price = Original Price - Discount**
**Discount = Original Price × Discount Rate**

**Example 1:** 25% off

Original: 80 dollars
Discount = 80 × 0.25 = 20 dollars
Sale price = 80 - 20 = 60 dollars

**Shortcut:** Sale price = 80 × 0.75 = 60 dollars

**Example 2:** 40% off

Original: 150 dollars
Sale price = 150 × 0.60 = 90 dollars

**Example 3: Multiple Discounts**

Original: 100 dollars
20% off, then additional 10% off

After first discount: 100 × 0.80 = 80 dollars
After second discount: 80 × 0.90 = 72 dollars

**Note:** NOT the same as 30% off! (that would be 70 dollars)

## Tip and Commission Problems

**Tip = Bill Amount × Tip Percentage**

**Example 1: Restaurant Tip**

Bill: 45 dollars
Tip 20%

Tip = 45 × 0.20 = 9 dollars
Total = 45 + 9 = 54 dollars

**Example 2: Commission**

Sales: 12,000 dollars
Commission rate: 5%

Commission = 12,000 × 0.05 = 600 dollars

**Example 3: Finding Sales from Commission**

Commission earned: 450 dollars
Commission rate: 6%

Sales = 450 / 0.06 = 7,500 dollars

## Simple Interest

**Formula:** I = Prt

Where:
- I = Interest earned
- P = Principal (initial amount)
- r = Rate (as decimal)
- t = Time (in years)

**Total Amount:** A = P + I = P(1 + rt)

**Example 1:**

Principal: 1,000 dollars
Rate: 5% per year
Time: 3 years

Interest = 1,000 × 0.05 × 3 = 150 dollars
Total = 1,000 + 150 = 1,150 dollars

**Example 2:**

Borrow 2,500 dollars at 4% for 2 years

Interest = 2,500 × 0.04 × 2 = 200 dollars
Total owed = 2,500 + 200 = 2,700 dollars

**Example 3: Finding Rate**

Principal: 800 dollars
Time: 5 years
Interest earned: 200 dollars

200 = 800 × r × 5
200 = 4,000r
r = 0.05 = 5%

## Percent of a Percent

**Multiply the decimals**

**Example 1:** 20% of 50% of 200

First: 50% of 200 = 0.50 × 200 = 100
Then: 20% of 100 = 0.20 × 100 = 20

**Shortcut:** 0.20 × 0.50 × 200 = 20

**Example 2:** 10% of 30% of 500

0.10 × 0.30 × 500 = 15

## Markup Problems

**Selling Price = Cost + Markup**
**Markup = Cost × Markup Percentage**

**Example 1:** Store markup

Cost to store: 40 dollars
Markup: 60%

Markup amount = 40 × 0.60 = 24 dollars
Selling price = 40 + 24 = 64 dollars

**Shortcut:** Selling price = 40 × 1.60 = 64 dollars

**Example 2: Finding Cost**

Selling price: 120 dollars
Markup: 50%

Cost = 120 / 1.50 = 80 dollars

## Successive Percents

**Apply percentages one at a time**

**Example 1:** Price increases 10%, then decreases 10%

Original: 100 dollars
After increase: 100 × 1.10 = 110 dollars
After decrease: 110 × 0.90 = 99 dollars

**NOT back to original!** Lost 1 dollar overall

**Example 2:** Successive Growth

Population: 1,000
Grows 5% first year, 8% second year

After year 1: 1,000 × 1.05 = 1,050
After year 2: 1,050 × 1.08 = 1,134

Total growth: 13.4% (not 13%!)

## Common Mistakes to Avoid

1. **Confusing part and whole**
   "25% of 80" → 80 is the whole, not the part!

2. **Wrong formula for percent change**
   Use (New - Original)/Original, not (Original - New)/New

3. **Adding percents incorrectly**
   20% off then 10% off ≠ 30% off!

4. **Forgetting to convert percent to decimal**
   30% = 0.30 (not 30 in calculations!)

5. **Percent of percent errors**
   50% of 50% = 25% (not 100%!)

6. **Using whole instead of original**
   After 20% increase: use original as base for percent change

## Mental Math Tricks

**10%:** Move decimal one place left
50 → 5

**1%:** Move decimal two places left
50 → 0.5

**5%:** Half of 10%
10% of 50 = 5, so 5% = 2.5

**25%:** Divide by 4
25% of 80 = 80/4 = 20

**50%:** Divide by 2
50% of 60 = 30

**Double:** Same as 200%
200% of 15 = 30

## Real-World Applications

**Shopping:** Calculate discounts, sales tax, total cost

**Finance:** Interest, investments, loans

**Statistics:** Survey results, data analysis

**Science:** Percent error, concentration, growth rates

**Business:** Profit margins, commission, markup

**Everyday:** Tips, grades (percent correct), batting averages

## Quick Reference

**Part = Percent × Whole** (is = % × of)

**Percent = (Part/Whole) × 100**

**Whole = Part / Percent (as decimal)**

**Percent Change = (New - Original) / Original × 100**

**After Increase: New = Original × (1 + r)**

**After Decrease: New = Original × (1 - r)**

**Simple Interest: I = Prt**

## Practice Strategy

- Start with basic "find the part" problems
- Master conversions (percent ↔ decimal ↔ fraction)
- Use proportions if formula confuses you
- Practice percent change in both directions
- Work real-world problems (shopping, tips, interest)
- Check answers for reasonableness
- Use mental math for common percents
- Understand the three types of problems
- Don't just memorize - understand the relationships
- Practice successive percents carefully
- Apply to real life whenever possible!

Percent problems are everywhere in daily life. Master them and you'll be a more informed consumer, investor, and decision-maker!`
    }
  });

  console.log('✅ Updated: percent-problems-algebra1');

  console.log('\n✨ Successfully expanded content for 3 topics!');
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
