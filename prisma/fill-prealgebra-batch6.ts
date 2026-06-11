import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Pre-Algebra topics - Batch 6 (3 topics)...\n');

  // Topic 1: Reading Graphs and Charts
  await prisma.topic.updateMany({
    where: {
      slug: 'reading-graphs-charts'
    },
    data: {
      textContent: `# Reading Graphs and Charts

How do we display data visually? Graphs and charts help us see patterns, compare values, and communicate information quickly and effectively!

---

## Why Use Graphs and Charts?

**Visual representation of data makes it:**
- Easier to understand at a glance
- Simple to compare values
- Clear to see patterns and trends
- Effective for communication

**"A picture is worth a thousand words!"**

**Graphs turn numbers into visual stories!**

---

## Types of Graphs and Charts

**Common types:**
- **Bar graphs:** Compare categories
- **Line graphs:** Show change over time
- **Pie charts:** Show parts of a whole
- **Pictographs:** Use pictures to represent data
- **Histograms:** Show frequency distributions
- **Scatter plots:** Show relationships between two variables

**Each type serves a different purpose!**

---

## Parts of a Graph

**Most graphs have:**

**Title:** What the graph shows
**Axes:** Horizontal (x-axis) and vertical (y-axis)
**Labels:** What each axis represents
**Scale:** Number intervals on axes
**Data points/bars:** The actual data
**Legend/Key:** Explains symbols or colors (if needed)

**Always check these parts to understand the graph!**

---

## Bar Graphs

**Bar graphs compare quantities across categories.**

**Features:**
- Rectangular bars
- Height (or length) shows value
- Bars can be vertical or horizontal
- Spaces between bars
- Each bar represents a category

**Example:** Student favorite fruits
- Apples: 8 students (bar height = 8)
- Bananas: 5 students
- Oranges: 12 students
- Grapes: 6 students

**Easy to compare at a glance!**

---

## Reading Bar Graphs

**To read a bar graph:**

**Step 1:** Read the title (what is being shown?)
**Step 2:** Check axis labels (what do they represent?)
**Step 3:** Look at the scale (what are the intervals?)
**Step 4:** Read bar heights/lengths
**Step 5:** Compare and interpret

**Example question:** "Which fruit is most popular?"
**Answer:** Oranges (tallest bar = 12 students)

---

## Line Graphs

**Line graphs show how data changes over time.**

**Features:**
- Points connected by lines
- x-axis usually shows time
- y-axis shows measured quantity
- Shows trends (increasing, decreasing, stable)
- Good for continuous data

**Example:** Temperature throughout the day
- 6 AM: 60°F
- 12 PM: 75°F
- 6 PM: 70°F
- Line shows gradual change

**Perfect for showing trends!**

---

## Reading Line Graphs

**To read a line graph:**

**Step 1:** Identify what changes over time (y-axis)
**Step 2:** Check time intervals (x-axis)
**Step 3:** Find specific points on the line
**Step 4:** Look for trends (going up? down? staying flat?)
**Step 5:** Interpret changes

**Example question:** "What was temperature at noon?"
**Find 12 PM on x-axis, go up to line, read y-value: 75°F**

---

## Pie Charts (Circle Graphs)

**Pie charts show parts of a whole.**

**Features:**
- Circle divided into slices (sectors)
- Each slice represents a category
- Slice size shows proportion
- All slices add to 100%
- Good for showing percentages

**Example:** School budget
- Teachers: 50%
- Supplies: 20%
- Building: 20%
- Activities: 10%
- Total: 100%

**Shows how whole is divided!**

---

## Reading Pie Charts

**To read a pie chart:**

**Step 1:** Check title (what whole does chart represent?)
**Step 2:** Look at labels (what are the categories?)
**Step 3:** Read percentages or values
**Step 4:** Compare slice sizes
**Step 5:** Verify parts add to whole

**Example question:** "What's the largest expense?"
**Answer:** Teachers (50% - biggest slice)

**Note:** All percentages should add to 100%!

---

## Pictographs

**Pictographs use pictures/symbols to represent quantities.**

**Features:**
- Pictures represent values
- Key shows what each picture equals
- Multiple pictures show larger amounts
- Easy to understand
- Visual appeal

**Example:** Ice cream sales
🍦 = 10 sales
Monday: 🍦🍦🍦 (30 sales)
Tuesday: 🍦🍦🍦🍦 (40 sales)

**Key is critical - tells value of each symbol!**

---

## Reading Pictographs

**To read a pictograph:**

**Step 1:** Read the key (what does each symbol equal?)
**Step 2:** Count symbols for each category
**Step 3:** Multiply: symbols × value per symbol
**Step 4:** Compare quantities

**Example:** Books read
📚 = 5 books
Student A: 📚📚📚 = 3 × 5 = 15 books
Student B: 📚📚 = 2 × 5 = 10 books

**Student A read more!**

---

## Partial Symbols in Pictographs

**Sometimes symbols are cut in half or parts:**

**Half symbol = half the value**

**Example:**
🌟 = 4 points
Team A: 🌟🌟⭐ (half star)
= 2 × 4 + (1/2 × 4) = 8 + 2 = 10 points

**Pay attention to partial symbols!**

---

## Double Bar Graphs

**Compare two sets of data side by side.**

**Features:**
- Two bars per category
- Different colors for each set
- Legend shows what each color represents
- Easy comparison

**Example:** Boys vs Girls favorite subjects
- Math: Boys 10, Girls 12
- Science: Boys 8, Girls 9
- English: Boys 7, Girls 11

**Shows differences between groups!**

---

## Histograms

**Histograms show frequency distributions.**

**Features:**
- Look like bar graphs
- No spaces between bars
- x-axis shows ranges (intervals)
- y-axis shows frequency (count)
- Shows distribution of data

**Example:** Test scores
- 60-69: 3 students
- 70-79: 8 students
- 80-89: 12 students
- 90-100: 7 students

**Different from bar graph - shows continuous data ranges!**

---

## Scatter Plots

**Scatter plots show relationship between two variables.**

**Features:**
- Points plotted on coordinate grid
- x-axis: one variable
- y-axis: another variable
- Shows correlation (if any)
- Points may show pattern

**Example:** Study time vs test score
- More study time → higher scores (positive correlation)
- Points trend upward

**Shows if variables are related!**

---

## Scale and Intervals

**Scale matters!**

**Example 1:** Scale by 1s
0, 1, 2, 3, 4, 5...

**Example 2:** Scale by 5s
0, 5, 10, 15, 20...

**Example 3:** Scale by 100s
0, 100, 200, 300...

**Always check the scale before reading values!**

**Small intervals → more detail**
**Large intervals → broader overview**

---

## Misleading Graphs

**Graphs can mislead if not careful!**

**Common tricks:**
- **Not starting at zero:** Makes differences look bigger
- **Unequal intervals:** Distorts comparison
- **Wrong graph type:** Confuses message
- **Cherry-picked data:** Doesn't show full picture

**Always check:**
- Does y-axis start at zero?
- Are intervals equal?
- Is this the right graph type?
- Am I seeing all the data?

---

## Interpreting Trends

**Looking at line graphs:**

**Increasing trend:** Line going up
- Temperature rising
- Sales growing
- Population increasing

**Decreasing trend:** Line going down
- Temperature falling
- Prices dropping
- Inventory decreasing

**Constant/Stable:** Flat line
- No change
- Staying the same

**Fluctuating:** Up and down
- Variable changes
- Inconsistent pattern

---

## Making Comparisons

**Using graphs to compare:**

**Example - Bar graph of sales:**
- Store A: $500
- Store B: $800
- Store C: $300

**Comparisons:**
- Store B has highest sales
- Store C has lowest sales
- Store B sells $300 more than A
- Store B sells more than A and C combined

**Graphs make comparisons obvious!**

---

## Finding Differences

**Calculate differences from graphs:**

**Example - Line graph of temperature:**
- 8 AM: 65°F
- 2 PM: 80°F

**Difference:** 80 - 65 = 15°F increase

**Percentage change:**
(15 ÷ 65) × 100% ≈ 23% increase

**Graphs provide data for calculations!**

---

## Reading Multiple Data Sets

**Graphs can show several things at once:**

**Example - Double line graph:**
- Red line: January temperatures
- Blue line: July temperatures
- x-axis: Days of month

**Comparisons:**
- July always warmer than January
- July varies less than January
- Specific day differences

**Legend tells you what each represents!**

---

## Real-World Applications

**Business:**
- Sales trends over time
- Market share pie charts
- Comparing product performance

**Science:**
- Experiment results
- Growth over time
- Relationships between variables

**Sports:**
- Player statistics
- Team performance trends
- Season comparisons

**School:**
- Grade distributions
- Attendance patterns
- Test score trends

---

## Creating Data Tables from Graphs

**Extract data from graph to table:**

**Bar graph shows:**
- Red: 15
- Blue: 22
- Green: 18

**Table:**
| Color | Value |
|-------|-------|
| Red   | 15    |
| Blue  | 22    |
| Green | 18    |

**Tables organize graph data clearly!**

---

## Choosing the Right Graph Type

**For comparing categories:** Bar graph
**For change over time:** Line graph
**For parts of whole:** Pie chart
**For relationship between variables:** Scatter plot
**For frequency distribution:** Histogram

**Match graph type to your data and purpose!**

---

## Coordinate Planes and Graphs

**Many graphs use coordinate planes:**

**Origin:** (0, 0) where axes meet
**x-axis:** Horizontal
**y-axis:** Vertical
**Points:** (x, y) coordinates

**Example point:** (3, 7)
- 3 units right on x-axis
- 7 units up on y-axis

**Foundation for line graphs and scatter plots!**

---

## Interpolation and Extrapolation

**Interpolation:** Estimating between known points
**Extrapolation:** Estimating beyond known points

**Example line graph:**
- Known: Hour 2 = 50°, Hour 4 = 60°
- Interpolate: Hour 3 ≈ 55° (between points)
- Extrapolate: Hour 6 ≈ 70° (beyond points)

**Extrapolation less reliable - assumes trend continues!**

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Not reading the scale
- Always check intervals!
- Don't assume scale by 1s

❌ **Mistake 2:** Ignoring the key/legend
- In pictographs, key is essential
- In multi-data graphs, legend identifies lines/bars

❌ **Mistake 3:** Misreading axis labels
- Check what each axis represents
- Units matter (dollars vs thousands of dollars)

❌ **Mistake 4:** Comparing wrong values
- Make sure you're comparing same categories
- Check you're reading correct graph if multiple

❌ **Mistake 5:** Not checking the title
- Title tells you what data represents
- Essential for interpretation

---

## Problem-Solving Strategy

**To answer questions about graphs:**

**Step 1:** Read title and all labels
**Step 2:** Check scale and intervals
**Step 3:** Locate relevant data
**Step 4:** Read values carefully
**Step 5:** Perform calculations if needed
**Step 6:** Interpret in context
**Step 7:** Check answer makes sense

**Example:** "How many more apples than oranges?"
1. Find apple bar (height 8)
2. Find orange bar (height 5)
3. Subtract: 8 - 5 = 3
4. Answer: 3 more apples

---

## Converting Between Graph Types

**Same data, different graphs:**

**Data:** Red: 40%, Blue: 35%, Green: 25%

**As pie chart:** Circle with 3 slices
**As bar graph:** 3 bars of different heights
**As pictograph:** Different numbers of symbols

**Different representations, same information!**

---

## Analyzing Graph Features

**What to notice:**

**Highest/Lowest values:**
- Which bar is tallest?
- Which point is highest?

**Range:**
- Difference between max and min

**Total:**
- Sum of all values (if makes sense)

**Patterns:**
- Trends over time
- Relationships between variables

**Outliers:**
- Values far from others

---

## Quick Reference

**Graph Types:**
- Bar: Compare categories
- Line: Show change over time
- Pie: Parts of whole
- Pictograph: Visual comparison
- Histogram: Frequency distribution
- Scatter plot: Relationship between variables

**Reading Steps:**
1. Title - what's shown
2. Axes/Labels - what they represent
3. Scale - intervals
4. Key/Legend - if present
5. Data - read values
6. Interpret - what it means

**Key Features:**
- Always check scale
- Read axis labels
- Use key/legend
- Look for patterns
- Compare values

---

## Practice Tips

**Tip 1:** Practice reading all parts
- Don't jump straight to data
- Check title, labels, scale first

**Tip 2:** Make your own graphs
- Take data and graph it
- Try different graph types
- See which works best

**Tip 3:** Find graphs in real life
- Newspapers, magazines
- Online articles
- Sports statistics
- Weather reports

**Tip 4:** Ask questions of graphs
- What's the highest/lowest?
- What changed over time?
- What patterns do you see?

**Tip 5:** Check your work
- Does answer match graph?
- Is value reasonable?
- Did you read correct bar/point?

---

## Summary

**Graphs and charts display data visually:**

**Main types:**
- **Bar graphs:** Compare categories with rectangular bars
- **Line graphs:** Show trends over time with connected points
- **Pie charts:** Show parts of whole with circle slices
- **Pictographs:** Use symbols/pictures with a key
- **Histograms:** Show frequency with touching bars
- **Scatter plots:** Show relationships between two variables

**Reading graphs:**
1. Check title, labels, and scale
2. Use key/legend if present
3. Locate and read values carefully
4. Compare and interpret data
5. Calculate if needed
6. Answer in context

**Key skills:**
- Reading scales accurately
- Comparing values
- Identifying trends
- Calculating differences
- Choosing appropriate graph type
- Recognizing misleading graphs

**Applications:**
- Business and economics
- Science and research
- Sports and statistics
- Everyday decision-making

**Important points:**
- Scale intervals can vary
- Always check axis labels
- Graphs can mislead if not careful
- Different graph types serve different purposes
- Visual representation aids understanding

Mastering graph reading is essential for understanding data in all subjects and everyday life!`
    }
  });
  console.log('✅ Updated: reading-graphs-charts');

  // Topic 2: Decimals and Percents
  await prisma.topic.updateMany({
    where: {
      slug: 'decimals-and-percents'
    },
    data: {
      textContent: `# Decimals and Percents

How do we convert between decimals and percents? Understanding this relationship is essential for working with proportions, discounts, and real-world calculations!

---

## What Are Decimals?

**Decimals** represent parts of a whole using place value.

**Place values to the right of decimal point:**
- Tenths (0.1)
- Hundredths (0.01)
- Thousandths (0.001)
- And so on...

**Examples:**
- 0.5 = five tenths
- 0.25 = twenty-five hundredths
- 0.375 = three hundred seventy-five thousandths

**Decimals show parts using powers of 10!**

---

## What Are Percents?

**Percent** means "per hundred" or "out of 100."

**Symbol:** %

**Examples:**
- 50% = 50 per hundred = 50/100
- 25% = 25 per hundred = 25/100
- 100% = 100 per hundred = whole thing

**Percent compares to 100!**

**Think:** If something was divided into 100 equal parts, how many parts?

---

## The Relationship

**Key concept:**
- **Percent** = parts per 100
- **Decimal** = parts per 1

**They represent the same value, different forms!**

**Example:**
- 0.5 (decimal) = 50% (percent)
- Both mean "half"
- Just written differently

---

## Converting Percent to Decimal

**To convert percent to decimal:**

**Divide by 100** (or move decimal point 2 places left)

**Method 1: Divide**
50% = 50 ÷ 100 = 0.5

**Method 2: Move decimal**
50% = 50.% → move 2 left → 0.50 = 0.5

**Remove the % sign when converting!**

---

## Examples: Percent to Decimal

**Example 1:** 75%
75 ÷ 100 = 0.75
Or: 75.% → 0.75

**Example 2:** 8%
8 ÷ 100 = 0.08
Or: 8.% → 0.08 (needs zero placeholder!)

**Example 3:** 100%
100 ÷ 100 = 1.00 = 1
Or: 100.% → 1.00

**Example 4:** 150%
150 ÷ 100 = 1.50 = 1.5
Or: 150.% → 1.50

**Works for any percent!**

---

## Converting Decimal to Percent

**To convert decimal to percent:**

**Multiply by 100** (or move decimal point 2 places right)

**Add the % sign!**

**Method 1: Multiply**
0.6 = 0.6 × 100 = 60%

**Method 2: Move decimal**
0.6 = 0.60 → move 2 right → 60.% = 60%

---

## Examples: Decimal to Percent

**Example 1:** 0.25
0.25 × 100 = 25%
Or: 0.25 → 25.% = 25%

**Example 2:** 0.08
0.08 × 100 = 8%
Or: 0.08 → 08.% = 8%

**Example 3:** 1.5
1.5 × 100 = 150%
Or: 1.50 → 150.% = 150%

**Example 4:** 0.375
0.375 × 100 = 37.5%
Or: 0.375 → 37.5% (decimal in percent!)

---

## Percents Greater Than 100%

**Percents can be more than 100%!**

**100% = the whole thing**
**More than 100% = more than the whole**

**Example:** 250%
= 250 ÷ 100 = 2.5
= 2.5 times the original
= 2½ times as much

**Common in:**
- Growth rates (population increased 150%)
- Price increases
- Comparisons ("sales are 200% of last year")

---

## Percents Less Than 1%

**Percents can be less than 1%!**

**Example 1:** 0.5%
= 0.5 ÷ 100 = 0.005

**Example 2:** 0.25%
= 0.25 ÷ 100 = 0.0025

**Very small amounts:**
- Interest rates (0.5% APR)
- Chemical concentrations
- Statistical probabilities

---

## Common Conversions to Memorize

**Essential conversions:**

**Halves:**
- 50% = 0.5 = 1/2

**Fourths:**
- 25% = 0.25 = 1/4
- 75% = 0.75 = 3/4

**Tenths:**
- 10% = 0.1 = 1/10
- 20% = 0.2 = 1/5
- 30% = 0.3 = 3/10
- And so on...

**Whole:**
- 100% = 1.0 = 1

**Knowing these speeds up calculations!**

---

## Moving the Decimal Point

**Key pattern:**

**Percent → Decimal:** Move 2 places LEFT
- 45% → 0.45
- 8% → 0.08
- 150% → 1.50

**Decimal → Percent:** Move 2 places RIGHT
- 0.35 → 35%
- 0.08 → 8%
- 1.2 → 120%

**Remember the direction!**

---

## Why Does This Work?

**Percent means per 100:**

**Converting TO decimal divides by 100:**
- Moving decimal 2 left = dividing by 100
- 50% = 50/100 = 0.50

**Converting FROM decimal multiplies by 100:**
- Moving decimal 2 right = multiplying by 100
- 0.50 = 0.50 × 100 = 50%

**It's all about that relationship with 100!**

---

## Adding Zeros When Needed

**Sometimes need placeholder zeros:**

**Example 1:** 5% to decimal
5% = 05% = 0.05 (need zero in tenths place)

**Example 2:** 0.3 to percent
0.3 = 0.30 = 30% (add zero to move decimal)

**Don't be afraid to add zeros for clarity!**

---

## Decimal Percents

**Percents can have decimals:**

**Example 1:** 12.5%
= 12.5 ÷ 100 = 0.125

**Example 2:** 6.25%
= 6.25 ÷ 100 = 0.0625

**Example 3:** 0.5%
= 0.5 ÷ 100 = 0.005

**Still move decimal 2 places left!**

---

## Real-World: Sales Tax

**Sales tax is a percent:**

**Example:** 8% sales tax
Convert to decimal: 8% = 0.08

**To calculate tax on $50:**
$50 × 0.08 = $4.00 tax

**Total:** $50 + $4 = $54

**Or use shortcut:** $50 × 1.08 = $54
(1.08 represents 100% + 8%)

---

## Real-World: Discounts

**Discounts are percents:**

**Example:** 25% off $80 item

**Method 1: Find discount amount**
25% = 0.25
Discount: $80 × 0.25 = $20
Sale price: $80 - $20 = $60

**Method 2: Direct calculation**
Pay 75% (100% - 25% = 75%)
0.75 × $80 = $60

**Both work!**

---

## Real-World: Test Scores

**Scores often as percents:**

**Example:** 18 out of 20 correct

**As decimal:**
18/20 = 0.9

**As percent:**
0.9 = 90%

**Scored 90% on the test!**

**Convert: fraction → decimal → percent**

---

## Comparing Decimals and Percents

**Which is larger?**

**Example:** 0.45 or 40%

**Convert to same form:**
0.45 = 45%

**Compare:** 45% > 40%

**So 0.45 > 40%**

**Convert to same form to compare!**

---

## Using Percents in Calculations

**To find percent of a number:**

**Step 1:** Convert percent to decimal
**Step 2:** Multiply

**Example:** Find 35% of 60
35% = 0.35
0.35 × 60 = 21

**35% of 60 is 21**

---

## Fractions, Decimals, and Percents

**All three forms connected:**

**Example: One half**
- Fraction: 1/2
- Decimal: 0.5
- Percent: 50%

**Convert between any two:**
- Fraction → Decimal: Divide
- Decimal → Percent: × 100
- Percent → Decimal: ÷ 100
- Decimal → Fraction: Use place value

---

## Percent Increase and Decrease

**Percent change uses decimals:**

**Increase:** Original increases by percent
- 20% increase on $50
- Increase: $50 × 0.20 = $10
- New value: $50 + $10 = $60
- Or: $50 × 1.20 = $60

**Decrease:** Original decreases by percent
- 15% decrease on $80
- Decrease: $80 × 0.15 = $12
- New value: $80 - $12 = $68
- Or: $80 × 0.85 = $68

---

## Finding What Percent One Number Is of Another

**Example:** 15 is what % of 60?

**Step 1:** Write as fraction
15/60

**Step 2:** Convert to decimal
15/60 = 0.25

**Step 3:** Convert to percent
0.25 = 25%

**Answer: 15 is 25% of 60**

---

## Benchmark Percents

**Useful percents to know:**

**10% = 0.1** (one tenth)
- Easy to find: move decimal one left
- 10% of $50 = $5

**50% = 0.5** (half)
- Divide by 2
- 50% of $80 = $40

**25% = 0.25** (one quarter)
- Divide by 4
- 25% of $80 = $20

**Use these to estimate!**

---

## Mental Math Tricks

**Finding 10%:** Move decimal one place left
- 10% of 45 = 4.5

**Finding 1%:** Move decimal two places left
- 1% of 45 = 0.45

**Finding 5%:** Find 10%, then divide by 2
- 10% of 60 = 6
- 5% of 60 = 3

**Finding 20%:** Find 10%, then double
- 10% of 40 = 4
- 20% of 40 = 8

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Moving decimal wrong direction
- Percent → Decimal: LEFT 2 places
- Decimal → Percent: RIGHT 2 places

❌ **Mistake 2:** Forgetting the % sign
- 0.5 ≠ 5 (that's 0.5 and 500%!)
- Always include % when writing percent

❌ **Mistake 3:** Not adding placeholder zeros
- 5% = 0.05 (not 0.5!)
- Need that zero in tenths place

❌ **Mistake 4:** Confusing percent with decimal
- 0.15 is NOT 0.15%
- 0.15 = 15%

❌ **Mistake 5:** Wrong calculation
- Don't multiply when should divide
- Percent to decimal: ÷ 100

---

## Problem-Solving Strategy

**For conversion problems:**

**Percent → Decimal:**
1. Divide by 100 (or move decimal 2 left)
2. Remove % sign
3. Add zeros if needed

**Decimal → Percent:**
1. Multiply by 100 (or move decimal 2 right)
2. Add % sign
3. Add zeros if needed

**For applications:**
1. Identify what you're finding
2. Convert percent to decimal
3. Multiply or calculate as needed
4. Interpret in context

---

## Quick Reference

**Conversions:**
- **Percent → Decimal:** ÷ 100 (move 2 left)
- **Decimal → Percent:** × 100 (move 2 right)

**Common values:**
- 100% = 1.0
- 50% = 0.5
- 25% = 0.25
- 10% = 0.1
- 1% = 0.01

**Remember:**
- Percent means "per 100"
- Always check which direction
- Add zeros when needed
- Include % sign for percents

**Applications:**
- Tax: multiply price by tax rate
- Discount: multiply price by discount rate
- Change: new - old, then convert

---

## Practice Tips

**Tip 1:** Practice both directions
- Percent to decimal AND decimal to percent
- Builds flexibility

**Tip 2:** Memorize common conversions
- 10%, 25%, 50%, 75%, 100%
- Makes problems faster

**Tip 3:** Visualize the movement
- Picture decimal point jumping 2 places
- Remember which direction

**Tip 4:** Check reasonableness
- 50% should be 0.5, not 5 or 0.05
- Does answer make sense?

**Tip 5:** Use real-world examples
- Store discounts
- Test scores
- Sports statistics
- Makes it concrete!

---

## Summary

**Decimals and percents are two ways to express the same value:**

**Percent:**
- Per hundred (out of 100)
- Uses % symbol
- Examples: 25%, 50%, 100%

**Decimal:**
- Place value based
- Uses decimal point
- Examples: 0.25, 0.5, 1.0

**Converting Percent to Decimal:**
- Divide by 100
- Move decimal 2 places LEFT
- Remove % sign
- Example: 45% = 0.45

**Converting Decimal to Percent:**
- Multiply by 100
- Move decimal 2 places RIGHT
- Add % sign
- Example: 0.45 = 45%

**Key concepts:**
- Both represent parts of a whole
- Can convert between them easily
- Percents greater than 100% possible
- Percents less than 1% possible
- Add placeholder zeros when needed

**Applications:**
- Sales tax and discounts
- Test scores and grades
- Interest rates
- Statistical data
- Comparisons and proportions

**Skills needed:**
- Understanding place value
- Moving decimal points
- Multiplying and dividing by 100
- Recognizing equivalent forms

Mastering decimal-percent conversions is essential for working with real-world percentages and proportions!`
    }
  });
  console.log('✅ Updated: decimals-and-percents');

  // Topic 3: Absolute Value
  await prisma.topic.updateMany({
    where: {
      slug: 'absolute-value'
    },
    data: {
      textContent: `# Absolute Value

How far is a number from zero? Absolute value measures distance on the number line, always giving a positive result!

---

## What Is Absolute Value?

**Absolute value** is the distance a number is from zero on the number line.

**Key concept:** Distance is ALWAYS positive or zero!

**Symbol:** | | (vertical bars around the number)

**Read:** |5| as "the absolute value of 5"

**Think:** "How far from zero?"

---

## Absolute Value on the Number Line

**Number line helps visualize:**

**Example:** |5| and |-5|

On number line:
- 5 is 5 units to the RIGHT of 0
- -5 is 5 units to the LEFT of 0
- Both are 5 units from 0

**Therefore:**
- |5| = 5
- |-5| = 5

**Same distance, different directions!**

---

## Definition

**Formal definition:**

|x| = x if x ≥ 0 (positive or zero stays same)
|x| = -x if x < 0 (negative becomes positive)

**In simple terms:**
- If number is positive or zero → stays same
- If number is negative → drop the negative sign

**Absolute value "removes" the negative!**

---

## Basic Examples

**Example 1:** |7| = 7
(7 is 7 units from zero)

**Example 2:** |-7| = 7
(-7 is 7 units from zero)

**Example 3:** |0| = 0
(0 is 0 units from zero)

**Example 4:** |-15| = 15
(-15 is 15 units from zero)

**Example 5:** |100| = 100
(positive stays positive)

---

## Absolute Value Is Always Non-Negative

**Key property:** |x| ≥ 0 for all x

**Absolute value is NEVER negative!**

**Examples:**
- |8| = 8 (positive)
- |-8| = 8 (positive)
- |0| = 0 (zero, not negative)

**Even if input is negative, output is positive or zero!**

---

## Opposite Numbers Have Same Absolute Value

**Opposites are same distance from zero!**

**Examples:**
- |6| = 6 and |-6| = 6 (same!)
- |25| = 25 and |-25| = 25 (same!)
- |100| = 100 and |-100| = 100 (same!)

**Different numbers, same absolute value!**

**Think:** Mirror images across zero

---

## Comparing with Absolute Value

**Compare |3| and |-5|:**

|3| = 3
|-5| = 5

**So:** |-5| > |3|

**Even though -5 < 3, the absolute value of -5 is greater!**

**Absolute value ignores which side of zero!**

---

## Absolute Value of Zero

**|0| = 0**

**Zero is the ONLY number whose absolute value equals itself AND its opposite!**

**Why?** Zero is exactly 0 units from zero!

**Special case to remember!**

---

## Solving Absolute Value Equations

**Simple equation:** |x| = 5

**Meaning:** "What number is 5 units from zero?"

**Answer:** x = 5 or x = -5 (both!)

**Both 5 and -5 are 5 units from zero.**

**Absolute value equations often have TWO solutions!**

---

## Example: Solving |x| = 8

**Question:** What values of x make |x| = 8?

**Think:** What numbers are 8 units from zero?

**Answer:**
x = 8 (8 units right of zero)
x = -8 (8 units left of zero)

**Check:**
|8| = 8 ✓
|-8| = 8 ✓

**Both work!**

---

## No Solution Cases

**Equation:** |x| = -3

**Think:** Can a distance be negative?

**NO!** Distance is never negative.

**Therefore:** No solution!

**|x| = negative number has NO solution!**

---

## Absolute Value in Expressions

**Evaluate:** |6 - 10|

**Step 1:** Calculate inside first
6 - 10 = -4

**Step 2:** Take absolute value
|-4| = 4

**Answer: 4**

**Always do operations inside | | first!**

---

## More Expression Examples

**Example 1:** |-3| + |5|
= 3 + 5
= 8

**Example 2:** |8| - |-2|
= 8 - 2
= 6

**Example 3:** |7 - 9| + |2 + 1|
= |-2| + |3|
= 2 + 3
= 5

**Evaluate each absolute value separately!**

---

## Absolute Value and Multiplication

**Property:** |a × b| = |a| × |b|

**Example:** |-3 × 4|
= |-12|
= 12

**Or:** |-3| × |4|
= 3 × 4
= 12

**Same answer!**

**Example 2:** |5 × (-2)|
= |-10| = 10
Or: |5| × |-2| = 5 × 2 = 10

---

## Absolute Value and Addition

**Note:** |a + b| does NOT always equal |a| + |b|

**Example:** |-3 + 5|
= |2|
= 2

**But:** |-3| + |5|
= 3 + 5
= 8

**Different answers!**

**Must evaluate inside absolute value FIRST!**

---

## Distance Between Two Numbers

**Distance between a and b:**

**Distance = |a - b|** or **|b - a|**

**Same result either way!**

**Example:** Distance between 8 and 3
|8 - 3| = |5| = 5
Or: |3 - 8| = |-5| = 5

**Both give 5 units apart!**

---

## Real-World: Temperature

**Temperature change uses absolute value:**

**Started:** -5°F
**Ended:** 10°F

**Change:** |10 - (-5)| = |10 + 5| = |15| = 15°F

**Temperature changed by 15 degrees!**

**Absolute value shows magnitude of change!**

---

## Real-World: Elevation

**Elevation differences:**

**Death Valley:** -282 feet (below sea level)
**Mt. Whitney:** 14,505 feet (above sea level)

**Difference:** |14,505 - (-282)|
= |14,505 + 282|
= |14,787|
= 14,787 feet

**Absolute value gives total distance!**

---

## Real-World: Error/Deviation

**Estimated:** 100
**Actual:** 95

**Error:** |100 - 95| = |5| = 5

**Don't care if over or under estimate!**
**Just care HOW FAR off!**

**Absolute value measures error magnitude!**

---

## Comparing Absolute Values

**Which is greater?**

**Compare:** |-20| and |15|

|-20| = 20
|15| = 15

**20 > 15**

**So |-20| > |15|**

**Even though -20 < 15, its absolute value is greater!**

---

## Nested Absolute Values

**Example:** | |-6| |

**Step 1:** Inside first
|-6| = 6

**Step 2:** Outside
|6| = 6

**Answer: 6**

**Work from inside out!**

---

## Absolute Value with Fractions

**Example 1:** |-3/4| = 3/4

**Example 2:** |1/2 - 3/4|
= |-1/4|
= 1/4

**Example 3:** |-2.5| = 2.5

**Works with any number type!**

---

## Order of Operations with Absolute Value

**Absolute value acts like parentheses:**

**Do inside first, then take absolute value!**

**Example:** 2 + |3 - 8|

**Step 1:** Inside absolute value
3 - 8 = -5

**Step 2:** Absolute value
|-5| = 5

**Step 3:** Add
2 + 5 = 7

**Answer: 7**

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Thinking |-5| = -5
- Wrong! |-5| = 5
- Absolute value makes it positive!

❌ **Mistake 2:** |a + b| = |a| + |b|
- Not always true!
- Must evaluate inside first

❌ **Mistake 3:** Forgetting two solutions
- |x| = 7 has TWO solutions: 7 and -7
- Don't forget the negative!

❌ **Mistake 4:** Thinking |x| can be negative
- Absolute value is NEVER negative
- |x| ≥ 0 always!

❌ **Mistake 5:** Not doing inside operations first
- Always evaluate inside | | before taking absolute value

---

## Properties of Absolute Value

**Always non-negative:**
|x| ≥ 0 for all x

**Zero only for zero:**
|x| = 0 only if x = 0

**Same for opposites:**
|x| = |-x| for all x

**Triangle inequality:**
|a + b| ≤ |a| + |b|

**Multiplication:**
|a × b| = |a| × |b|

---

## Solving Strategy

**For |x| = a:**
- If a > 0: Two solutions (x = a or x = -a)
- If a = 0: One solution (x = 0)
- If a < 0: No solution

**For expressions:**
1. Calculate inside | | first
2. Take absolute value of result
3. Continue with other operations

**For comparisons:**
1. Find each absolute value
2. Compare the results

---

## Quick Reference

**Definition:**
- Distance from zero
- Always ≥ 0
- Symbol: | |

**Basic:**
- |positive| = positive
- |negative| = positive (drop sign)
- |0| = 0

**Solving |x| = a:**
- a > 0: x = a or x = -a
- a = 0: x = 0
- a < 0: no solution

**Properties:**
- |-x| = |x|
- |x × y| = |x| × |y|
- Do inside first!

**Applications:**
- Distance
- Error/deviation
- Temperature change
- Elevation difference

---

## Practice Tips

**Tip 1:** Visualize on number line
- Helps understand distance concept
- Makes it concrete

**Tip 2:** Remember two solutions
- For equations, check both positive and negative
- Both might work!

**Tip 3:** Work inside out
- Always evaluate inside | | first
- Then take absolute value

**Tip 4:** Check reasonableness
- Answer should be ≥ 0
- If negative, you made a mistake!

**Tip 5:** Practice with real situations
- Temperature changes
- Distances
- Errors in measurements

---

## Summary

**Absolute value measures distance from zero:**

**Definition:**
- |x| = distance of x from 0 on number line
- Always positive or zero
- Symbol: | | (vertical bars)

**Key properties:**
- |positive| = positive (stays same)
- |negative| = positive (becomes positive)
- |0| = 0
- |x| = |-x| (opposites have same absolute value)
- |x| ≥ 0 (never negative)

**Solving equations:**
- |x| = a (where a > 0) has two solutions: x = a and x = -a
- |x| = 0 has one solution: x = 0
- |x| = negative has no solution

**In expressions:**
- Evaluate inside absolute value first
- Then take absolute value
- Then continue with operations

**Applications:**
- Finding distance between numbers
- Measuring change (temperature, elevation)
- Calculating error or deviation
- Any situation where magnitude matters, not direction

**Important skills:**
- Understanding distance concept
- Working with negative numbers
- Solving equations with two solutions
- Order of operations

Mastering absolute value is essential for understanding distance, magnitude, and working with positive and negative numbers!`
    }
  });
  console.log('✅ Updated: absolute-value (integers-and-rational-numbers)');

  console.log('\n✨ Successfully updated 3 topics!');
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
