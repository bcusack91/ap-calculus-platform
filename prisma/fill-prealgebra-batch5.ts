import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Pre-Algebra topics - Batch 5 (3 topics)...\n');

  // Topic 1: Volume of Rectangular Prisms
  await prisma.topic.updateMany({
    where: {
      slug: 'volume-rectangular-prisms'
    },
    data: {
      textContent: `# Volume of Rectangular Prisms

How do we measure the space inside a three-dimensional box? Understanding volume is essential for real-world applications from packing to construction!

---

## What Is Volume?

**Volume** is the amount of space inside a three-dimensional object.

**Think:** How many cubes would fill the box?

**Units:** Cubic units (cubic inches, cubic feet, cubic meters, cm³, etc.)

**Volume measures capacity - what fits inside!**

---

## What Is a Rectangular Prism?

A **rectangular prism** is a 3D shape with:
- 6 rectangular faces
- All angles are right angles (90°)
- Opposite faces are congruent and parallel

**Common examples:**
- Boxes
- Rooms
- Shipping containers
- Books
- Bricks

**Also called:** Rectangular solid, cuboid, or simply "box"

---

## Dimensions of a Rectangular Prism

**Three dimensions:**

**Length (l):** How long (usually longest dimension)
**Width (w):** How wide (usually middle dimension)
**Height (h):** How tall (usually vertical dimension)

**Also can be called:**
- Length, width, depth
- Base, width, height
- l, w, h or l × w × h

**Any orientation works - labels are flexible!**

---

## Volume Formula

**Volume of rectangular prism = length × width × height**

**V = l × w × h**

**Or:** V = lwh

**Think:** Area of base × height

**Base area (l × w)** times **how many layers (h)**

---

## Basic Example

**Rectangular prism:**
- Length = 5 cm
- Width = 3 cm
- Height = 4 cm

**Volume:**
V = l × w × h
V = 5 × 3 × 4
V = 60 cm³

**Read as:** "60 cubic centimeters"

**Meaning:** 60 unit cubes fit inside!

---

## Understanding Cubic Units

**1 cubic centimeter (1 cm³):**
- A cube with each edge 1 cm
- 1 cm × 1 cm × 1 cm = 1 cm³

**Volume counts these unit cubes:**
- 5 cm × 3 cm × 4 cm box
- Bottom layer: 5 × 3 = 15 cubes
- 4 layers high
- Total: 15 × 4 = 60 cubes = 60 cm³

**Volume = number of unit cubes that fit!**

---

## What Is a Cube?

A **cube** is a special rectangular prism where:
- All edges are equal length
- All 6 faces are squares

**Volume of cube = edge × edge × edge**

**V = s³**

Where s = side length

**Example:** Cube with edge 4 inches

V = 4³
V = 4 × 4 × 4
V = 64 in³

---

## Step-by-Step Process

**To find volume:**

**Step 1:** Identify the three dimensions
- Length, width, height

**Step 2:** Make sure units are the same
- Convert if needed

**Step 3:** Multiply all three dimensions
- V = l × w × h

**Step 4:** Write answer with cubic units
- Don't forget units!

---

## Example: Box Problem

**Box dimensions:**
- Length: 8 feet
- Width: 5 feet
- Height: 3 feet

**Find volume:**

V = 8 × 5 × 3
V = 40 × 3
V = 120 ft³

**The box holds 120 cubic feet!**

**Application:** How much stuff can you pack inside?

---

## Finding Missing Dimensions

**If you know volume and two dimensions:**

**Example:** Volume = 240 m³, length = 10 m, width = 6 m, find height

V = l × w × h
240 = 10 × 6 × h
240 = 60h
h = 240 ÷ 60
h = 4 m

**The height is 4 meters!**

---

## Order Doesn't Matter

**Multiplication is commutative:**

5 × 3 × 4 = 60
3 × 5 × 4 = 60
4 × 5 × 3 = 60

**All give the same volume!**

**Any order works - pick what's easiest to calculate!**

---

## Volume with Different Units

**Important:** All dimensions must use the SAME units!

**Example:** Length = 2 feet, Width = 18 inches, Height = 1 foot

**Must convert first!**

Convert to feet:
- Length = 2 ft
- Width = 18 in ÷ 12 = 1.5 ft
- Height = 1 ft

**Then calculate:**
V = 2 × 1.5 × 1
V = 3 ft³

---

## Common Unit Conversions

**Length conversions:**
- 1 foot = 12 inches
- 1 yard = 3 feet
- 1 meter = 100 centimeters

**Volume conversions:**
- 1 ft³ = 12 × 12 × 12 = 1,728 in³
- 1 m³ = 100 × 100 × 100 = 1,000,000 cm³
- 1 yd³ = 3 × 3 × 3 = 27 ft³

**Cubing the conversion factor!**

---

## Real-World Applications

**Packing and Shipping:**
- How much fits in a box?
- Shipping container capacity

**Construction:**
- Amount of concrete needed
- Volume of a room
- Storage space

**Aquariums:**
- How much water needed?
- Fish tank capacity

**Cooking:**
- Pan or container capacity
- Recipe scaling

---

## Aquarium Example

**Fish tank:**
- Length: 50 cm
- Width: 30 cm
- Height: 40 cm

**Volume:**
V = 50 × 30 × 40
V = 60,000 cm³

**Convert to liters:**
1 liter = 1,000 cm³
60,000 ÷ 1,000 = 60 liters

**Tank holds 60 liters of water!**

---

## Swimming Pool Example

**Rectangular pool:**
- Length: 25 meters
- Width: 10 meters
- Depth: 2 meters

**Volume:**
V = 25 × 10 × 2
V = 500 m³

**Each cubic meter = 1,000 liters**
500 × 1,000 = 500,000 liters!

**That's a lot of water!**

---

## Concrete for a Driveway

**Driveway slab:**
- Length: 20 feet
- Width: 12 feet
- Thickness: 0.5 feet (6 inches)

**Volume of concrete needed:**
V = 20 × 12 × 0.5
V = 120 ft³

**Convert to cubic yards (concrete sold by cubic yards):**
120 ft³ ÷ 27 = 4.44 yd³

**Need about 4.5 cubic yards of concrete!**

---

## Comparing Volumes

**Box A:** 10 × 5 × 4 = 200 cm³
**Box B:** 8 × 5 × 5 = 200 cm³

**Same volume, different dimensions!**

**Different shapes can have equal volumes.**

**Think:** Different boxes hold the same amount!

---

## Doubling Dimensions Effect

**Original box:** 2 × 3 × 4 = 24 units³

**Double all dimensions:** 4 × 6 × 8 = 192 units³

**192 ÷ 24 = 8**

**Volume multiplied by 8! (2³)**

**Doubling dimensions multiplies volume by 8!**

**Tripling dimensions multiplies volume by 27! (3³)**

---

## Surface Area vs Volume

**Surface area:** Area of all 6 faces (outside)
**Volume:** Space inside

**Different measurements!**

**Surface Area = 2lw + 2lh + 2wh**
**Volume = lwh**

**Example:** Box 3 × 4 × 5

Surface Area = 2(12) + 2(15) + 2(20) = 94 units²
Volume = 60 units³

**Different values, different meanings!**

---

## Composite Volumes

**L-shaped prism:** Break into two rectangular prisms

**Method:**
1. Divide into simple boxes
2. Find volume of each
3. Add them together

**Example:** 
- Box A: 10 × 5 × 3 = 150 cm³
- Box B: 6 × 4 × 3 = 72 cm³
- Total: 150 + 72 = 222 cm³

---

## Volume of Hollow Box

**Hollow box:** Like a box with a smaller box cut out inside

**Method:**
1. Find volume of outer box
2. Find volume of inner box (hollow part)
3. Subtract: Outer - Inner

**Example:**
- Outer: 10 × 8 × 6 = 480 cm³
- Inner: 8 × 6 × 4 = 192 cm³
- Volume of material: 480 - 192 = 288 cm³

**This is the volume of the walls!**

---

## Stacking Boxes

**How many small boxes fit in a large box?**

**Large box:** 12 × 9 × 8 = 864 cm³
**Small box:** 3 × 3 × 2 = 18 cm³

**Number of boxes:**
864 ÷ 18 = 48 small boxes fit!

**Or count by dimensions:**
- Length: 12 ÷ 3 = 4 boxes
- Width: 9 ÷ 3 = 3 boxes
- Height: 8 ÷ 2 = 4 boxes
- Total: 4 × 3 × 4 = 48 boxes

**Same answer both ways!**

---

## Capacity and Volume

**Volume = capacity** (how much it holds)

**Common capacity units:**
- Liters (L) and milliliters (mL)
- Gallons, quarts, cups

**Conversions:**
- 1 L = 1,000 mL = 1,000 cm³
- 1 gallon ≈ 3,785 cm³ ≈ 231 in³
- 1 ft³ ≈ 7.48 gallons

---

## Practical Problem: Moving Boxes

**Moving truck:** 10 ft × 8 ft × 6 ft
**Volume:** 10 × 8 × 6 = 480 ft³

**Box:** 2 ft × 2 ft × 2 ft = 8 ft³

**How many boxes fit?**
480 ÷ 8 = 60 boxes

**Note:** In reality, fewer fit due to irregular packing!

---

## Volume in Metric vs Imperial

**Metric:**
- Cubic centimeters (cm³)
- Cubic meters (m³)
- Liters (1 L = 1,000 cm³)

**Imperial:**
- Cubic inches (in³)
- Cubic feet (ft³)
- Cubic yards (yd³)
- Gallons

**Know which system you're using!**

---

## Estimation Strategy

**Estimate before calculating:**

**Box:** About 10 × 5 × 4
**Estimate:** 10 × 5 = 50, then 50 × 4 = 200

**If actual dimensions:** 9.8 × 4.7 × 3.9
**Exact:** 179.634 ≈ 180 (close to estimate!)

**Estimation helps catch errors!**

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Using square units instead of cubic
- Volume uses cubic units (cm³, ft³, m³)
- NOT square units!

❌ **Mistake 2:** Multiplying only two dimensions
- Must multiply all THREE dimensions
- Length × width is area, not volume!

❌ **Mistake 3:** Mixing units
- All dimensions must be in same units
- Convert first!

❌ **Mistake 4:** Confusing volume with surface area
- Volume = inside space (cubic units)
- Surface area = outside covering (square units)

❌ **Mistake 5:** Wrong formula for cubes
- Cube: V = s³ (not 3s)
- Must multiply s × s × s

---

## Problem-Solving Strategy

**Word problems:**

1. **Read carefully** - what are you finding?
2. **Identify dimensions** - length, width, height
3. **Check units** - convert if needed
4. **Write formula** - V = lwh
5. **Substitute and solve**
6. **Check answer** - reasonable? Correct units?
7. **Answer in context** - complete sentence if needed

---

## Formulas Summary

**Rectangular Prism:**
V = l × w × h

**Cube:**
V = s³ (where s = edge length)

**Finding missing dimension:**
- If V, l, and w are known: h = V ÷ (l × w)
- Divide volume by product of known dimensions

**Remember:** All dimensions in same units!

---

## Quick Reference

**Volume:**
- Space inside 3D object
- Cubic units (cm³, m³, in³, ft³)
- How much it holds

**Formula:**
- Rectangular prism: V = lwh
- Cube: V = s³

**Units:**
- Linear (length): cm, m, ft, in
- Square (area): cm², m², ft², in²
- Cubic (volume): cm³, m³, ft³, in³

**Conversions:**
- 1 ft = 12 in → 1 ft³ = 1,728 in³
- 1 m = 100 cm → 1 m³ = 1,000,000 cm³

---

## Practice Tips

**Tip 1:** Visualize the shape
- Draw it if needed
- Label all three dimensions

**Tip 2:** Check units first
- Convert before calculating
- All must match!

**Tip 3:** Remember it's 3D
- Three dimensions, not two
- Cubic units, not square

**Tip 4:** Use estimation
- Round to check reasonableness
- Catches calculation errors

**Tip 5:** Practice with real objects
- Measure boxes at home
- Calculate room volume
- Makes concept concrete!

---

## Summary

**Volume measures the space inside a three-dimensional object:**

**Rectangular prism:**
- Has length, width, and height
- Volume = l × w × h
- Measured in cubic units

**Key concepts:**
- Three dimensions multiplied together
- All dimensions must have same units
- Cubic units for volume (cm³, m³, ft³, in³)
- Different from area (square units)

**Applications:**
- Packing and shipping (box capacity)
- Construction (concrete, room size)
- Containers (aquariums, pools, tanks)
- Storage (how much fits)

**Special cases:**
- Cube: V = s³
- Composite shapes: add or subtract volumes
- Missing dimension: divide volume by other two

**Problem-solving:**
- Identify all three dimensions
- Convert units to match
- Multiply: V = lwh
- Include cubic units in answer
- Check reasonableness

Understanding volume is essential for working with three-dimensional space in math and everyday life!`
    }
  });
  console.log('✅ Updated: volume-rectangular-prisms');

  // Topic 2: Mean, Median, and Mode
  await prisma.topic.updateMany({
    where: {
      slug: 'mean-median-mode'
    },
    data: {
      textContent: `# Mean, Median, and Mode

How do we describe the "center" or "typical value" of a data set? These three measures help us understand data and make comparisons!

---

## What Are Measures of Central Tendency?

**Measures of central tendency** describe the center or typical value of a data set.

**Three main measures:**
- **Mean:** The average
- **Median:** The middle value
- **Mode:** The most frequent value

**Each tells us something different about the data!**

---

## What Is the Mean?

The **mean** is the arithmetic average of all values.

**Formula:** Mean = Sum of all values ÷ Number of values

**Symbol:** x̄ (read as "x bar")

**Process:**
1. Add all values
2. Divide by how many values there are

**The mean is what people usually mean by "average"!**

---

## Calculating the Mean

**Example:** Test scores: 85, 90, 78, 92, 85

**Step 1:** Add all values
85 + 90 + 78 + 92 + 85 = 430

**Step 2:** Count how many values
5 scores

**Step 3:** Divide
Mean = 430 ÷ 5 = 86

**The mean score is 86!**

---

## Mean with Different Numbers

**Example:** Ages: 12, 15, 13, 11, 14, 15

Sum = 12 + 15 + 13 + 11 + 14 + 15 = 80
Count = 6
Mean = 80 ÷ 6 ≈ 13.33 years

**Mean can be a decimal even if all data are whole numbers!**

---

## What Is the Median?

The **median** is the middle value when data is arranged in order.

**Process:**
1. Arrange data from smallest to largest
2. Find the middle value
3. If two middle values, take their average

**The median divides the data in half!**

---

## Finding the Median (Odd Number of Values)

**Example:** 7, 3, 9, 5, 1

**Step 1:** Arrange in order
1, 3, 5, 7, 9

**Step 2:** Find the middle
1, 3, **5**, 7, 9

**Median = 5** (middle value)

**With odd number of values, there's one middle value!**

---

## Finding the Median (Even Number of Values)

**Example:** 8, 4, 6, 2

**Step 1:** Arrange in order
2, 4, 6, 8

**Step 2:** Find the two middle values
2, **4, 6**, 8

**Step 3:** Average the two middle values
Median = (4 + 6) ÷ 2 = 10 ÷ 2 = 5

**Median = 5**

**With even number of values, average the two middle values!**

---

## What Is the Mode?

The **mode** is the value that appears most frequently.

**Example:** 5, 7, 3, 7, 9, 7, 4

**7 appears three times** (more than any other)

**Mode = 7**

**The mode is the most common value!**

---

## No Mode

**Some data sets have no mode:**

**Example:** 5, 8, 11, 14, 17

Each value appears only once.

**No mode** (or all values are modes)

**This is perfectly fine!**

---

## Multiple Modes (Bimodal or Multimodal)

**Data can have more than one mode:**

**Example:** 3, 5, 5, 7, 9, 9, 11

Both 5 and 9 appear twice.

**Modes = 5 and 9** (bimodal)

**Bimodal** = two modes
**Multimodal** = more than two modes

---

## Comparing Mean, Median, and Mode

**Data:** 2, 4, 4, 5, 7, 9

**Mean:** (2 + 4 + 4 + 5 + 7 + 9) ÷ 6 = 31 ÷ 6 ≈ 5.17

**Median:** 2, 4, **4, 5**, 7, 9 → (4 + 5) ÷ 2 = 4.5

**Mode:** 4 (appears twice)

**All different! Each measures "center" differently.**

---

## When to Use Each Measure

**Mean:**
- Use when data is fairly symmetric
- All values contribute
- Sensitive to extreme values

**Median:**
- Use with skewed data or outliers
- Not affected by extreme values
- Better for income, home prices

**Mode:**
- Use for categorical data
- Most common or popular item
- Favorite color, shoe size, etc.

---

## Effect of Outliers on Mean

**Outlier:** A value much larger or smaller than others

**Example:** Salaries: $30,000, $32,000, $35,000, $33,000, $200,000

**Mean:** ($30,000 + $32,000 + $35,000 + $33,000 + $200,000) ÷ 5
= $330,000 ÷ 5 = $66,000

**Median:** $30,000, $32,000, **$33,000**, $35,000, $200,000
= $33,000

**The outlier ($200,000) pulls the mean way up!**
**The median ($33,000) better represents typical salary.**

---

## Symmetric Data

**In symmetric data, mean ≈ median:**

**Example:** 10, 12, 14, 16, 18

Mean = 70 ÷ 5 = 14
Median = 14 (middle value)

**When distribution is balanced, mean and median are similar!**

---

## Skewed Data

**Right-skewed (positive skew):** Few large values
- Mean > Median
- Large values pull mean higher

**Left-skewed (negative skew):** Few small values
- Mean < Median
- Small values pull mean lower

**Median is more resistant to skewness!**

---

## Real-World Example: Test Scores

**Class test scores:**
65, 70, 75, 75, 80, 80, 80, 85, 90, 95

**Mean:** 795 ÷ 10 = 79.5

**Median:** 
65, 70, 75, 75, **80, 80**, 80, 85, 90, 95
= (80 + 80) ÷ 2 = 80

**Mode:** 80 (appears three times)

**Most students scored around 80!**

---

## Real-World Example: Home Prices

**Home prices in neighborhood:**
$150K, $160K, $170K, $175K, $180K, $900K

**Mean:** $1,735K ÷ 6 ≈ $289K

**Median:** 
$150K, $160K, **$170K, $175K**, $180K, $900K
= ($170K + $175K) ÷ 2 = $172.5K

**Median ($172.5K) better represents typical home!**
**Mean ($289K) inflated by the $900K mansion.**

---

## Finding Missing Value Given Mean

**Problem:** Four numbers have mean of 15. Three numbers are 12, 14, and 18. Find the fourth.

**Solution:**
Mean = 15, Count = 4
Sum of all four = 15 × 4 = 60

Known sum: 12 + 14 + 18 = 44
Missing value: 60 - 44 = 16

**The fourth number is 16!**

---

## Mode for Categorical Data

**Mode works great for non-numerical data:**

**Favorite colors:** Blue, Red, Blue, Green, Blue, Yellow, Red, Blue

**Mode = Blue** (appears 4 times)

**Can't calculate mean or median for colors!**

**Mode is the only measure that works for categorical data.**

---

## Data Set with All Three Equal

**Example:** 10, 10, 10, 10, 10

**Mean:** 50 ÷ 5 = 10
**Median:** 10 (middle value)
**Mode:** 10 (appears five times)

**When all values are the same, all three measures equal that value!**

---

## Adding a Value to Data Set

**Original:** 5, 7, 9 (Mean = 7, Median = 7)

**Add 11:**
**New data:** 5, 7, 9, 11

**New mean:** 32 ÷ 4 = 8
**New median:** (7 + 9) ÷ 2 = 8

**Adding values changes mean and median!**

---

## Range (Quick Introduction)

**Range** measures spread, not center:

**Range = Largest value - Smallest value**

**Example:** 3, 7, 9, 12, 14

Range = 14 - 3 = 11

**Range tells how spread out the data is!**

---

## Step-by-Step: Finding All Three

**Data:** 15, 12, 18, 12, 20, 15, 12

**Mean:**
Sum = 15 + 12 + 18 + 12 + 20 + 15 + 12 = 104
Count = 7
Mean = 104 ÷ 7 ≈ 14.86

**Median:**
Order: 12, 12, 12, 15, 15, 18, 20
Middle (4th value) = 15

**Mode:**
12 appears three times (most frequent)
Mode = 12

---

## Mean of Grouped Data

**When data is already grouped:**

**Example:** 
- Score 70: 2 students
- Score 80: 5 students  
- Score 90: 3 students

**Calculate:**
(70×2 + 80×5 + 90×3) ÷ (2 + 5 + 3)
= (140 + 400 + 270) ÷ 10
= 810 ÷ 10
= 81

**Mean score = 81**

---

## Using Mean to Find Total

**If mean = 12 and there are 8 values:**

Sum of all values = Mean × Count
= 12 × 8
= 96

**Useful for reverse problems!**

---

## Weighted Mean

**Different values have different importance:**

**Example:** Final grade
- Tests (worth 3): 80, 85, 90
- Homework (worth 1): 95

**Weighted mean:**
(80×3 + 85×3 + 90×3 + 95×1) ÷ (3 + 3 + 3 + 1)
= (240 + 255 + 270 + 95) ÷ 10
= 860 ÷ 10
= 86

**Some values count more!**

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Not ordering data for median
- Must arrange in order first!

❌ **Mistake 2:** Forgetting to average two middle values
- When even count, take mean of two middle values

❌ **Mistake 3:** Confusing mode with median
- Mode = most frequent
- Median = middle value

❌ **Mistake 4:** Thinking there must be a mode
- Data can have no mode (all different)
- Or multiple modes

❌ **Mistake 5:** Rounding too early
- Keep decimals until final answer
- Then round appropriately

---

## Which Measure to Report?

**Use mean when:**
- Data is symmetric
- No extreme outliers
- All values matter equally

**Use median when:**
- Data has outliers
- Data is skewed
- Want "typical" value (salaries, home prices)

**Use mode when:**
- Data is categorical
- Want most common value
- Finding most popular item

**Context determines the best choice!**

---

## Real-World Applications

**Education:**
- Average test scores
- Median GPA
- Most common grade

**Business:**
- Mean sales per day
- Median customer spend
- Most popular product (mode)

**Sports:**
- Average points per game
- Median batting average
- Most common score

**Economics:**
- Median household income
- Average price
- Most common purchase

---

## Problem-Solving Strategy

**To find mean:**
1. Add all values
2. Divide by count
3. Round if appropriate

**To find median:**
1. Order from smallest to largest
2. Find middle value(s)
3. If even count, average the two middle

**To find mode:**
1. Look for most frequent value
2. Can be none, one, or multiple
3. Count carefully!

**To choose which to use:**
1. Look at data distribution
2. Consider outliers
3. Think about context

---

## Quick Reference

**Mean (Average):**
- Sum ÷ Count
- Affected by all values
- Sensitive to outliers

**Median (Middle):**
- Middle value when ordered
- Resistant to outliers
- Better for skewed data

**Mode (Most Common):**
- Most frequent value
- Can be none or multiple
- Only measure for categorical data

**Remember:**
- Mean uses all values
- Median uses position
- Mode uses frequency

---

## Practice Tips

**Tip 1:** Always organize data first
- Makes finding median easier
- Helps spot mode
- Reduces errors

**Tip 2:** Check your work
- Does mean make sense?
- Is median actually in the middle?
- Did you count mode frequencies?

**Tip 3:** Consider outliers
- Look at data before choosing measure
- Think about what outliers mean

**Tip 4:** Practice with real data
- Sports statistics
- Grade averages
- Allowance or spending

**Tip 5:** Understand what each measures
- Mean = balance point
- Median = middle
- Mode = most popular

---

## Summary

**Three measures describe the center of data:**

**Mean:**
- Arithmetic average: sum ÷ count
- Uses all values
- Sensitive to outliers
- Best for symmetric data

**Median:**
- Middle value when ordered
- Position-based measure
- Resistant to outliers
- Best for skewed data or outliers

**Mode:**
- Most frequent value
- Can be none, one, or multiple
- Only measure for categorical data
- Shows most common value

**Key concepts:**
- Each measures "center" differently
- Context determines best choice
- Outliers strongly affect mean
- Median more resistant to extremes

**Applications:**
- Comparing data sets
- Understanding typical values
- Making decisions based on data
- Describing distributions

**Problem-solving:**
- Calculate all three when possible
- Compare to understand data better
- Choose appropriate measure for context
- Consider outliers and distribution

Understanding mean, median, and mode is fundamental for data analysis and statistics!`
    }
  });
  console.log('✅ Updated: mean-median-mode');

  // Topic 3: Range and Outliers
  await prisma.topic.updateMany({
    where: {
      slug: 'range-and-outliers'
    },
    data: {
      textContent: `# Range and Outliers

How spread out is data? How do we identify unusual values? Understanding range and outliers helps us analyze data variation and spot anomalies!

---

## What Is Range?

**Range** measures how spread out the data is.

**Range = Maximum value - Minimum value**

**Formula:** Range = Max - Min

**Range tells you the span of the data!**

**Example:** Data: 5, 8, 12, 15, 20

Max = 20, Min = 5
Range = 20 - 5 = 15

**The data spans 15 units!**

---

## Understanding Range

**Range measures variability:**
- **Large range:** Data is spread out
- **Small range:** Data is clustered together
- **Range of 0:** All values are the same

**Example 1:** 10, 12, 14, 16, 18
Range = 18 - 10 = 8

**Example 2:** 10, 10, 10, 10, 10
Range = 10 - 10 = 0

**Different spreads!**

---

## Finding the Range

**Step-by-step:**

**Step 1:** Find the largest value (maximum)
**Step 2:** Find the smallest value (minimum)
**Step 3:** Subtract: Max - Min

**Example:** Test scores: 78, 85, 92, 88, 95, 81

Max = 95
Min = 78
Range = 95 - 78 = 17

**Scores range across 17 points!**

---

## Range Units

**Range has the SAME units as the data.**

**Temperature:** 65°F, 70°F, 80°F, 85°F
Range = 85 - 65 = 20°F (degrees)

**Height:** 150 cm, 165 cm, 172 cm
Range = 172 - 150 = 22 cm

**Always include units with your answer!**

---

## Comparing Ranges

**Class A scores:** 70, 75, 80, 85, 90
Range = 90 - 70 = 20

**Class B scores:** 78, 79, 80, 81, 82
Range = 82 - 78 = 4

**Class A has more variability (larger range)!**
**Class B is more consistent (smaller range)!**

**Range helps compare data sets!**

---

## Limitation of Range

**Range only uses two values:**
- Only considers max and min
- Ignores everything in between
- Sensitive to extreme values

**Example:** 10, 11, 12, 13, 50
Range = 50 - 10 = 40

**One extreme value (50) makes range large!**
**Doesn't show that most values are 10-13.**

---

## What Is an Outlier?

An **outlier** is a value that is much larger or much smaller than the other values.

**Outlier:** Unusually far from the rest of the data

**Think:** A value that "stands out" or seems unusual

**Examples:**
- Most ages are 10-12, but one is 45 (outlier!)
- Most test scores are 70-90, but one is 15 (outlier!)

---

## Identifying Outliers Visually

**Look at the data:**

**Data:** 12, 15, 14, 13, 16, 45

**Most values:** 12-16 (clustered)
**One value:** 45 (far away)

**45 is an outlier!**

**Graph or number line makes this obvious!**

---

## Common Rule for Outliers

**Simple rule:** A value is an outlier if it's far from the rest

**More specific:** 
- Much more than 1.5 times the range from the median
- Outside the "typical" cluster

**For pre-algebra, visual inspection is usually enough!**

**Ask:** "Does this value seem way different?"

---

## Outliers Can Be High or Low

**High outlier:** Much larger than others

**Example:** 10, 12, 11, 13, 98
98 is a high outlier

**Low outlier:** Much smaller than others

**Example:** 85, 90, 88, 92, 15
15 is a low outlier

**Outliers can be on either end!**

---

## Effect of Outliers on Range

**Outliers increase the range dramatically!**

**Without outlier:** 10, 12, 14, 16, 18
Range = 18 - 10 = 8

**With outlier:** 10, 12, 14, 16, 18, 50
Range = 50 - 10 = 40

**Outlier multiplied the range by 5!**

**Range is very sensitive to outliers!**

---

## Effect of Outliers on Mean

**Outliers pull the mean toward them!**

**Example:** 20, 22, 24, 26, 100

**Without 100:** Mean = (20+22+24+26) ÷ 4 = 23

**With 100:** Mean = (20+22+24+26+100) ÷ 5 = 38.4

**The outlier (100) increased mean from 23 to 38.4!**

**Mean is sensitive to outliers!**

---

## Effect of Outliers on Median

**Median is resistant to outliers!**

**Example:** 20, 22, 24, 26, 100

**Median:** 20, 22, **24**, 26, 100 = 24

**If we change 100 to 1000:**
Median: 20, 22, **24**, 26, 1000 = 24 (same!)

**Outlier doesn't affect median much!**

**This is why median is often better than mean!**

---

## Causes of Outliers

**Measurement error:**
- Typo entering data (18 typed as 180)
- Broken measuring tool
- Recording mistake

**Natural variation:**
- Actually an unusual event
- Rare but real occurrence

**Different population:**
- Adult in group of children
- Professional among amateurs

**Must investigate to determine cause!**

---

## What to Do with Outliers

**Option 1: Keep the outlier**
- If it's a real value
- Part of the story
- Shows the full picture

**Option 2: Remove the outlier**
- If it's a measurement error
- When analyzing typical cases
- Report separately

**Always explain what you did!**

---

## Real-World Example: Test Scores

**Test scores:** 85, 88, 90, 92, 87, 25

**Range:** 92 - 25 = 67

**Analysis:**
- Most scores: 85-92 (doing well!)
- One score: 25 (outlier - maybe student was sick?)

**Without outlier:**
Range = 92 - 85 = 7 (much smaller!)

**The outlier hides that most students did well!**

---

## Real-World Example: Home Prices

**Home prices on a street:**
$200K, $220K, $230K, $210K, $2.5M

**Range:** $2.5M - $200K = $2.3M

**Analysis:**
- Most homes: $200K-$230K (similar)
- One home: $2.5M (mansion - outlier!)

**Median price ($220K) better represents typical home!**
**Mean price ($672K) inflated by mansion!**

---

## Multiple Outliers

**Data can have more than one outlier!**

**Example:** 5, 7, 8, 9, 10, 11, 50, 52

**Two high outliers:** 50 and 52
**Main cluster:** 5-11

**Multiple outliers possible on same side or both sides!**

---

## Box Plot and Outliers

**Box plots (box-and-whisker plots) show outliers!**

**Structure:**
- Box shows middle 50% of data
- Whiskers extend to min/max (within limits)
- Outliers shown as individual points beyond whiskers

**Visual way to identify outliers!**

---

## Interquartile Range (IQR) Preview

**IQR is another measure of spread:**
- More resistant to outliers than range
- Uses middle 50% of data
- IQR = Q3 - Q1 (quartiles)

**Detailed IQR typically in later courses!**

**For now:** Know that range isn't the only spread measure!

---

## Range in Sports

**Basketball scores in a season:**
Lowest: 82 points
Highest: 115 points

**Range:** 115 - 82 = 33 points

**Interpretation:** 
Team's scoring varies by 33 points game to game.
**Shows consistency or inconsistency!**

---

## Range in Weather

**Daily high temperatures (°F):**
Monday: 65°, Tuesday: 70°, Wednesday: 68°, 
Thursday: 72°, Friday: 67°

**Range:** 72 - 65 = 7°F

**Small range = stable weather!**
**Large range = changing conditions!**

---

## Comparing Data Sets Using Range

**Store A daily sales:** $500-$800 (Range = $300)
**Store B daily sales:** $600-$650 (Range = $50)

**Analysis:**
- Store A: More variable sales
- Store B: More consistent sales

**Range reveals different patterns!**

---

## Finding Missing Value Given Range

**Problem:** Range is 20. Values are 5, 10, 15, and x. Find possible values for x.

**Solution:**

**If x is maximum:**
x - 5 = 20
x = 25

**If x is minimum:**
15 - x = 20
x = -5

**x could be 25, -5, or anything outside 5-15 that gives range 20!**

---

## Data Distribution and Spread

**Three data sets with same range:**

**Set A:** 0, 25, 50
**Set B:** 0, 10, 20, 30, 40, 50
**Set C:** 0, 0, 0, 50, 50, 50

**All have range = 50!**

**But distributed very differently!**

**Range doesn't tell the whole story!**

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Subtracting in wrong order
- Range = Max - Min (not Min - Max)
- Range is always positive or zero

❌ **Mistake 2:** Forgetting to order data first
- Easy to miss true max or min
- Order data to be sure!

❌ **Mistake 3:** Assuming one unusual value is an error
- Could be real!
- Investigate before removing

❌ **Mistake 4:** Using range as only spread measure
- Range very sensitive to outliers
- Consider other measures too

❌ **Mistake 5:** Forgetting units
- Range has same units as data
- Include in answer!

---

## Problem-Solving Strategy

**To find range:**
1. Order data (optional but helpful)
2. Identify maximum value
3. Identify minimum value
4. Subtract: Max - Min
5. Include units

**To identify outliers:**
1. Look at data distribution
2. Find values far from cluster
3. Consider context (is it reasonable?)
4. Investigate cause if possible
5. Decide whether to keep or remove

**To analyze spread:**
1. Calculate range
2. Look for outliers
3. Consider other measures (IQR, standard deviation in later courses)
4. Interpret in context

---

## Quick Reference

**Range:**
- Measures spread or variability
- Range = Max - Min
- Same units as data
- Sensitive to outliers

**Outlier:**
- Value much larger or smaller than others
- "Stands out" from the rest
- Can be high or low
- Affects mean and range, not median

**Effects:**
- Outliers increase range
- Outliers pull mean
- Outliers don't affect median much

**When to use:**
- Range: Quick measure of spread
- With median: More complete picture
- Identify outliers: Understand data better

---

## Practice Tips

**Tip 1:** Always look at your data
- Plot on number line or graph
- Visual inspection helps spot outliers

**Tip 2:** Order data first
- Makes finding max/min easier
- Helps spot outliers

**Tip 3:** Consider context
- Is outlier reasonable?
- What might have caused it?

**Tip 4:** Report outliers
- Don't hide them
- Explain what you did with them

**Tip 5:** Use multiple measures
- Range alone doesn't tell whole story
- Combine with mean, median, mode

---

## Summary

**Range measures how spread out data is:**

**Formula:** Range = Maximum - Minimum

**Characteristics:**
- Simple measure of variability
- Uses only two values (max and min)
- Same units as original data
- Very sensitive to outliers

**Outliers are unusual values:**

**Definition:** Values much larger or smaller than others

**Effects:**
- Dramatically increase range
- Pull mean toward them
- Little effect on median
- Important to identify and investigate

**Key concepts:**
- Large range = spread out data
- Small range = clustered data
- Outliers can be measurement errors or real unusual values
- Different measures needed for complete picture

**Applications:**
- Comparing consistency of data sets
- Identifying unusual events
- Quality control
- Understanding variability

**Problem-solving:**
- Order data to find max/min easily
- Look for values far from cluster
- Consider context and investigate outliers
- Use range with other measures for better understanding

Understanding range and outliers is essential for data analysis and recognizing patterns and anomalies!`
    }
  });
  console.log('✅ Updated: range-and-outliers');

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
