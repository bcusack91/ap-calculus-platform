import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Grade 4-5 Math thin topics...\n');

  // Find the courses
  const grade4Course = await prisma.course.findUnique({
    where: { slug: 'grade-4-math' }
  });

  const grade5Course = await prisma.course.findUnique({
    where: { slug: 'grade-5-math' }
  });

  if (!grade4Course || !grade5Course) {
    throw new Error('Grade 4 or 5 Math course not found');
  }

  // Grade 4 topics to fill
  const grade4Updates = [
    {
      slug: 'symmetry',
      content: `# Symmetry

## What is Symmetry?

**Symmetry** means a shape looks the same on both sides when you fold it or flip it.

Think of a butterfly - if you draw a line down the middle, both sides look the same!

## Line Symmetry (Reflection Symmetry)

**Line of symmetry:** An imaginary line where you can fold a shape and both halves match perfectly.

**Examples:**
- A heart has 1 line of symmetry (vertical)
- A rectangle has 2 lines of symmetry (horizontal and vertical)
- A square has 4 lines of symmetry
- A circle has infinite lines of symmetry!

**How to find lines of symmetry:**
1. Imagine folding the shape
2. If both halves match exactly, you found a line of symmetry
3. Try folding different ways

## Shapes and Their Lines of Symmetry

**No lines of symmetry:**
- Scalene triangle (all sides different)
- Most letters (like F, G, J, L, N, P, Q, R, S, Z)

**1 line of symmetry:**
- Isosceles triangle
- Letters A, B, C, D, E, M, T, U, V, W, Y

**2 lines of symmetry:**
- Rectangle

**3 lines of symmetry:**
- Equilateral triangle

**4 lines of symmetry:**
- Square

**Many lines of symmetry:**
- Regular pentagon (5 lines)
- Regular hexagon (6 lines)
- Circle (infinite)

## Rotational Symmetry

**Rotational symmetry:** When you can turn (rotate) a shape and it looks the same before you turn it all the way around.

**Examples:**
- A square has rotational symmetry - turn it 90° and it looks the same
- A rectangle has rotational symmetry - turn it 180° and it looks the same
- A five-pointed star has rotational symmetry

## Real-World Symmetry

**Nature:**
- Butterfly wings
- Flowers (like daisies)
- Snowflakes
- Leaves

**Man-made:**
- Road signs (stop sign has 8 lines!)
- Buildings
- Logos
- Decorative patterns

## Practice Tips

**To check for symmetry:**
1. Use a mirror - place it on the shape
2. If the mirror reflection completes the shape, that's a line of symmetry
3. Try the mirror in different positions

**Drawing symmetric shapes:**
1. Draw one half
2. Fold your paper on the line of symmetry
3. Trace the shape to make the other half
4. Unfold to see your symmetric shape!

## Common Mistakes

❌ Thinking all shapes have symmetry (they don't!)
❌ Forgetting to check all possible lines
❌ Confusing line symmetry with rotational symmetry

✅ Remember: Line symmetry = fold and match
✅ Rotational symmetry = turn and it looks the same`
    },
    {
      slug: 'rounding-numbers',
      content: `# Rounding Numbers

## Why Round Numbers?

**Rounding** makes numbers easier to work with by making them simpler.

**Real-life examples:**
- "About 30 students in class" instead of "27 students"
- "Around $50" instead of "$47.82"
- "Nearly 100 people" instead of "96 people"

## Rounding Rules

**The basic rule:**
- If the digit you're looking at is **5 or more**, round UP
- If the digit is **4 or less**, round DOWN

**Remember:** "Five or more? Raise the score! Four or less? Let it rest!"

## Rounding to the Nearest 10

**Steps:**
1. Find the ones place
2. Look at that digit
3. If it's 5 or more → round up
4. If it's 4 or less → round down
5. Replace the ones digit with 0

**Examples:**
- 27 → Look at 7 → 7 ≥ 5 → Round up → **30**
- 43 → Look at 3 → 3 < 5 → Round down → **40**
- 85 → Look at 5 → 5 = 5 → Round up → **90**
- 92 → Look at 2 → 2 < 5 → Round down → **90**

## Rounding to the Nearest 100

**Steps:**
1. Find the tens place
2. Look at that digit
3. If it's 5 or more → round up
4. If it's 4 or less → round down
5. Replace tens and ones with 0

**Examples:**
- 347 → Look at 4 (tens) → 4 < 5 → Round down → **300**
- 682 → Look at 8 (tens) → 8 ≥ 5 → Round up → **700**
- 450 → Look at 5 (tens) → 5 = 5 → Round up → **500**
- 199 → Look at 9 (tens) → 9 ≥ 5 → Round up → **200**

## Rounding to the Nearest 1,000

**Steps:**
1. Find the hundreds place
2. Look at that digit
3. Apply the rounding rule
4. Replace hundreds, tens, and ones with 0

**Examples:**
- 3,621 → Look at 6 (hundreds) → 6 ≥ 5 → Round up → **4,000**
- 7,389 → Look at 3 (hundreds) → 3 < 5 → Round down → **7,000**
- 5,500 → Look at 5 (hundreds) → 5 = 5 → Round up → **6,000**

## Using a Number Line

A number line helps you see which number is closer:

For 27:
\`\`\`
20 ←―――27―――→ 30
\`\`\`
27 is closer to 30, so round to 30 ✓

For 43:
\`\`\`
40 ←―43――――→ 50
\`\`\`
43 is closer to 40, so round to 40 ✓

## Practice Strategy

**Quick method:**
1. Underline the place you're rounding to
2. Circle the digit to the right
3. Use the rule: 5+ up, 4- down
4. Change all digits to the right to zeros

**Example:** Round 3,678 to nearest hundred
- Underline: 3,**6**78
- Circle: 3,6**7**8
- 7 ≥ 5, so round up
- Answer: **3,700**

## Common Mistakes

❌ Looking at the wrong digit
❌ Forgetting to change digits to the right to zero
❌ Rounding 5 down instead of up

✅ Always look ONE place to the right of where you're rounding
✅ Remember: 5 rounds UP
✅ Replace all digits to the right with zeros`
    },
    {
      slug: 'place-value-millions',
      content: `# Place Value to Millions

## Understanding Large Numbers

**Place value** tells us what each digit in a number means based on its position.

In 4th grade, we work with numbers up to **millions**!

## Place Value Chart

\`\`\`
Millions | Hundred Thousands | Ten Thousands | Thousands | Hundreds | Tens | Ones
   3     |        5          |      2        |     7     |    4     |  6   |  1
\`\`\`

This number is: **3,527,461** = Three million, five hundred twenty-seven thousand, four hundred sixty-one

## The Pattern of Place Values

Notice the pattern - every three places we group with a comma:

**Ones period:** Ones, Tens, Hundreds
**Thousands period:** Thousands, Ten thousands, Hundred thousands  
**Millions period:** Millions, Ten millions, Hundred millions

Each place is **10 times** bigger than the one to its right!

## Reading Large Numbers

**Steps to read large numbers:**
1. Start from the left
2. Read the number in each period (group of 3)
3. Say the period name (million, thousand)
4. Don't say "and" - save that for decimals!

**Examples:**
- 4,582,301 = "Four million, five hundred eighty-two thousand, three hundred one"
- 7,000,429 = "Seven million, four hundred twenty-nine"
- 1,234,567 = "One million, two hundred thirty-four thousand, five hundred sixty-seven"

## Writing Numbers in Different Forms

**Standard form:** 3,456,789
**Word form:** Three million, four hundred fifty-six thousand, seven hundred eighty-nine
**Expanded form:** 3,000,000 + 400,000 + 50,000 + 6,000 + 700 + 80 + 9

## Comparing Large Numbers

**Strategy:**
1. Compare digit by digit from LEFT to RIGHT
2. The first digit that's different tells you which is bigger

**Example:** Which is bigger: 3,456,789 or 3,492,103?
- Same millions digit (3)
- Same hundred thousands (4)
- Different ten thousands: **5** vs **9**
- 9 > 5, so 3,492,103 is bigger ✓

## Value vs Digit

**Important distinction:**
- The **digit** is the number itself (like 5)
- The **value** is what it represents based on position

In 5,234,678:
- The digit 5 has a VALUE of 5,000,000 (five million)
- The digit 2 has a VALUE of 200,000 (two hundred thousand)
- The digit 3 has a VALUE of 30,000 (thirty thousand)

## Powers of 10

Understanding place value helps with multiplying by 10, 100, 1,000:

**Multiply by 10:** Move each digit one place LEFT (add a zero)
- 345 × 10 = 3,450

**Multiply by 100:** Move each digit two places LEFT
- 345 × 100 = 34,500

**Multiply by 1,000:** Move each digit three places LEFT
- 345 × 1,000 = 345,000

## Real-World Examples

**Population:**
- New York City: about 8,000,000 people (8 million)

**Money:**
- A millionaire has: $1,000,000 or more

**Distance:**
- Distance to the moon: about 240,000 miles

**Big numbers in nature:**
- Grains of sand on a beach: millions!
- Stars in the sky: billions!

## Practice Tips

**To remember place values:**
1. Use commas to separate periods (every 3 digits)
2. Practice saying numbers out loud
3. Write numbers in different forms
4. Use a place value chart

**Common patterns:**
- 1,000 = 1 thousand
- 10,000 = 10 thousand
- 100,000 = 100 thousand
- 1,000,000 = 1 million

## Common Mistakes

❌ Forgetting commas when writing large numbers
❌ Saying "and" when reading whole numbers
❌ Mixing up the order of periods

✅ Use commas every 3 digits from the right
✅ Read each period separately, then say its name
✅ Remember the order: ones, thousands, millions`
    },
    {
      slug: 'comparing-ordering-numbers',
      content: `# Comparing and Ordering Numbers

## Comparing Two Numbers

**Comparing** means figuring out which number is bigger or if they're equal.

We use three symbols:
- **>** means "greater than" (bigger)
- **<** means "less than" (smaller)  
- **=** means "equal to" (the same)

**Memory trick:** The symbol opens to the BIGGER number, like an alligator mouth eating the bigger number!

## Steps to Compare Numbers

**1. Line up the numbers by place value**
**2. Start from the LEFT (biggest place)**
**3. Compare digit by digit**
**4. The first different digit tells you which is bigger**

**Example:** Compare 5,847 and 5,792

\`\`\`
5,847
5,792
\`\`\`

- Thousands: Both have 5 ✓ (same)
- Hundreds: Both have 7 or 8... 8 > 7!
- Since 8 > 7, we know: **5,847 > 5,792** ✓

## Comparing Different-Sized Numbers

**Quick rule:** If numbers have different amounts of digits, the one with MORE digits is bigger!

**Examples:**
- 9,999 < 10,000 (4 digits vs 5 digits)
- 999,999 < 1,000,000 (6 digits vs 7 digits)
- 45 < 100 (2 digits vs 3 digits)

## Using Place Value to Compare

Always compare the **highest place value first**:

**56,432 vs 56,891**
- Ten thousands: 5 = 5 ✓
- Thousands: 6 = 6 ✓
- Hundreds: 4 vs 8 → 4 < 8
- Answer: **56,432 < 56,891**

## Ordering Numbers (Least to Greatest)

**Ordering** means arranging numbers from smallest to largest (or largest to smallest).

**Example:** Order these: 4,521  |  4,215  |  4,512

**Step 1:** Compare all the numbers
**Step 2:** Find the smallest
**Step 3:** Find the next smallest
**Step 4:** Continue until done

\`\`\`
All have 4 thousands, so compare hundreds:
- 4,521 has 5 hundreds
- 4,215 has 2 hundreds (smallest!)
- 4,512 has 5 hundreds

For the two with 5 hundreds, compare tens:
- 4,521 has 2 tens
- 4,512 has 1 ten (this one is next!)

Final order: 4,215 < 4,512 < 4,521 ✓
\`\`\`

## Greatest to Least

Same process, but arrange from biggest to smallest!

**Example:** Order from greatest to least: 892, 8,920, 89

**Step 1:** Find the biggest (most digits): 8,920
**Step 2:** Find the next: 892  
**Step 3:** What's left: 89

**Answer: 8,920 > 892 > 89**

## Using a Number Line

Number lines help visualize comparisons:

\`\`\`
0 ―――――― 250 ―――――― 500 ―――――― 750 ―――――― 1,000
           ↑                              ↑
          325                            867
\`\`\`

Numbers to the RIGHT are bigger!
So 867 > 325

## Comparing with Zeros

**Don't forget about zeros!**

234 vs 204:
- Hundreds: 2 = 2 ✓
- Tens: 3 vs 0 → 3 > 0
- Answer: **234 > 204**

**Leading zeros don't matter:**
- 0,567 = 567
- 00,045 = 45

## Real-World Applications

**Money:** Which is more: $4,567 or $4,756?
- Compare: 5 hundreds vs 7 hundreds
- $4,756 is more! ✓

**Distances:** Which is farther: 12,405 miles or 12,450 miles?
- Compare: 0 tens vs 5 tens  
- 12,450 miles is farther! ✓

**Scores:** Order these game scores: 89,540  |  89,450  |  98,540
- Greatest: 98,540 (biggest ten-thousands)
- Middle: 89,540 (next)
- Least: 89,450

## Practice Strategy

**Use this checklist:**
1. ☐ Count the digits (more = bigger)
2. ☐ Line up by place value
3. ☐ Start comparing from the left
4. ☐ Stop at the first different digit
5. ☐ Use >, <, or = correctly

**Remember the symbols:**
- 5 < 8 means "5 is less than 8"
- 8 > 5 means "8 is greater than 5"
- The arrow points to the smaller number!

## Common Mistakes

❌ Comparing from the right instead of left
❌ Thinking more digits always means bigger (0,005 is NOT bigger than 5!)
❌ Forgetting to line up place values
❌ Getting < and > confused

✅ Always start from the LEFT (highest place value)
✅ The number with more digits is usually bigger
✅ Make sure place values line up
✅ The symbol "eats" the bigger number!`
    },
    {
      slug: 'lines-and-angles',
      content: `# Lines and Angles

## What is a Line?

**Line:** A straight path that goes on forever in both directions
- Has NO endpoints
- Named with two points and a line symbol: ↔
- Example: Line AB (written as AB with line symbol)

**Line segment:** Part of a line with TWO endpoints
- Has a definite length you can measure
- Example: Segment AB (written as AB with a bar)

**Ray:** Part of a line with ONE endpoint and goes on forever in one direction
- Like a sun ray!
- Example: Ray AB (written as AB with arrow on top)

## Types of Lines

**Parallel lines:** Lines that never cross (intersect)
- Always the same distance apart
- Like railroad tracks: ═══
- Symbol: ∥

**Perpendicular lines:** Lines that cross at right angles (90°)
- They make a square corner where they meet
- Like a plus sign: +
- Symbol: ⊥

**Intersecting lines:** Lines that cross each other
- They meet at one point
- Example: X

## What is an Angle?

**Angle:** Formed when two rays share the same endpoint

**Parts of an angle:**
- **Vertex:** The point where two rays meet
- **Rays:** The two sides of the angle
- **Measure:** How far apart the rays are (measured in degrees °)

## Types of Angles

**Right angle:** Exactly 90°
- Makes a square corner
- Like the corner of a book: L
- Symbol: Small square in the corner

**Acute angle:** Less than 90°
- A "cute" little angle (small)
- Sharp and pointy: /

**Obtuse angle:** More than 90° but less than 180°
- A big, wide angle: \\

**Straight angle:** Exactly 180°
- Makes a straight line: ―

## Measuring Angles

We measure angles with a **protractor**

**Steps to use a protractor:**
1. Place the center hole on the vertex
2. Line up one ray with the 0° line
3. Read where the other ray points
4. That number is your angle measure!

**Remember:**
- Most protractors have two sets of numbers
- Use the set that starts at 0° where your first ray is
- Read from inside to outside

## Drawing Angles

**To draw an angle:**
1. Draw one ray (use a ruler)
2. Place protractor at the endpoint
3. Find your degree measurement
4. Mark a point there
5. Connect the endpoint to the mark
6. Label your angle!

## Angle Pairs

**Adjacent angles:** Angles next to each other that share a ray
- Like two puzzle pieces side-by-side

**Vertical angles:** Opposite angles formed when two lines cross
- They're always equal!
- Like an X - the opposite angles are the same

## Real-World Examples

**Right angles (90°):**
- Corners of a room
- Corner of a piece of paper
- Where the floor meets the wall

**Acute angles:**
- Hands on a clock at 1:00
- Roof of a house
- Piece of pizza slice

**Obtuse angles:**
- Hands on a clock at 10:00
- Open laptop
- Reclined chair

**Straight angles:**
- Horizon line
- Flat road
- Ruler edge

## Practice Tips

**To identify angle types:**
- Compare to a square corner (right angle = 90°)
- If smaller than square corner → acute
- If exactly a square corner → right  
- If bigger than square corner → obtuse
- If makes a straight line → straight

**Estimating angles:**
- Right angle = 90° (easy to remember!)
- Half a right angle ≈ 45°
- One and a half right angles ≈ 135°
- Two right angles = 180° (straight line)

## Common Mistakes

❌ Measuring from the wrong 0° on the protractor
❌ Reading the wrong set of numbers
❌ Calling any corner a "right angle" (it must be exactly 90°!)
❌ Thinking all angles in a shape are the same

✅ Always start from 0° when measuring
✅ Check which set of numbers to use
✅ Use the square symbol to mark right angles
✅ Measure carefully!`
    },
    {
      slug: 'area-and-perimeter',
      content: `# Area and Perimeter

## What is Perimeter?

**Perimeter** is the distance AROUND the outside of a shape.

Think of it like a fence around your yard - you're measuring the total length of the fence!

**How to find perimeter:**
Add up ALL the side lengths

## Perimeter of Common Shapes

**Rectangle:**
- Perimeter = Length + Length + Width + Width
- Or: P = 2 × Length + 2 × Width
- Or: P = 2(L + W)

**Example:** Rectangle with L = 8 cm, W = 5 cm
- P = 8 + 8 + 5 + 5 = 26 cm
- OR P = 2(8) + 2(5) = 16 + 10 = 26 cm ✓

**Square:**
- All four sides are equal!
- Perimeter = Side + Side + Side + Side
- Or: P = 4 × Side

**Example:** Square with side = 6 inches
- P = 6 + 6 + 6 + 6 = 24 inches
- OR P = 4 × 6 = 24 inches ✓

**Triangle:**
- Perimeter = Side 1 + Side 2 + Side 3
- Add all three sides

**Example:** Triangle with sides 5 cm, 7 cm, 9 cm
- P = 5 + 7 + 9 = 21 cm ✓

**Any polygon:**
- Just add up ALL the sides!

## What is Area?

**Area** is the amount of space INSIDE a shape.

Think of it like covering your floor with tiles - how many tiles do you need?

**Units for area:** Always SQUARE units
- Square inches (in²)
- Square feet (ft²)
- Square centimeters (cm²)
- Square meters (m²)

## Area of Common Shapes

**Rectangle:**
- Area = Length × Width
- A = L × W

**Example:** Rectangle 8 cm by 5 cm
- A = 8 × 5 = 40 cm² ✓

**Square:**
- Area = Side × Side
- A = s × s = s²

**Example:** Square with side 6 inches
- A = 6 × 6 = 36 in² ✓

**Triangle:**
- Area = ½ × Base × Height
- A = ½ × b × h

**Important:** Height must be perpendicular (straight up) from the base!

**Example:** Triangle with base 10 ft, height 6 ft
- A = ½ × 10 × 6 = ½ × 60 = 30 ft² ✓

## Perimeter vs Area - What's the Difference?

**Perimeter:**
- Measures the OUTSIDE (distance around)
- Uses regular units (cm, in, ft)
- Like putting a ribbon around a present

**Area:**
- Measures the INSIDE (space covered)
- Uses SQUARE units (cm², in², ft²)
- Like putting wrapping paper ON a present

## Real-World Examples

**Perimeter:**
- Fence around a garden
- Border around a picture frame
- Track around a playground
- Trim around a room

**Area:**
- Carpet needed for a floor
- Paint needed for a wall
- Grass seed for a lawn
- Fabric for a blanket

## Problem-Solving Strategy

**For perimeter problems:**
1. Find all the side lengths
2. Add them all up
3. Use the correct unit (no squared!)

**For area problems:**
1. Identify the shape
2. Find the measurements you need
3. Use the correct formula
4. Don't forget square units!

## Composite Shapes

**What if the shape isn't simple?**

**For perimeter:**
- Add up ALL the outside edges
- Don't count inside edges!

**For area:**
- Break the shape into rectangles
- Find the area of each piece
- Add the areas together

**Example:** L-shaped figure
- Break into two rectangles
- Rectangle 1: 4 × 3 = 12 cm²
- Rectangle 2: 6 × 2 = 12 cm²
- Total area: 12 + 12 = 24 cm² ✓

## Estimating Area

**You can count squares!**
- Draw a grid over the shape
- Count full squares
- Estimate partial squares (two halves = one whole)
- Add them up

## Practice Tips

**Remember:**
- Perimeter = ADD all sides (around the outside)
- Area = MULTIPLY length × width (inside space)
- Always use the right units!
- Draw a picture to help visualize

**Check your work:**
- Does your answer make sense?
- Did you use square units for area?
- Did you add all the sides for perimeter?

## Common Mistakes

❌ Using square units for perimeter
❌ Adding sides for area
❌ Forgetting to multiply by ½ for triangle area
❌ Using the slant height instead of perpendicular height for triangles

✅ Perimeter = add (regular units)
✅ Area = multiply (square units)
✅ Triangle area needs perpendicular height
✅ Double-check your formula!`
    }
  ];

  // Grade 5 topics to fill
  const grade5Updates = [
    {
      slug: 'multiplying-decimals',
      content: `# Multiplying Decimals

## Why Multiply Decimals?

We multiply decimals for real-world situations:
- Money: 4 items cost $2.50 each → 4 × $2.50
- Measurements: 3.5 yards of fabric times 2
- Recipes: Making 1.5 times a recipe

## The Basic Rule

**When multiplying decimals:**
1. Ignore the decimal points and multiply like whole numbers
2. Count the total decimal places in BOTH numbers
3. Put that many decimal places in your answer

## Step-by-Step Process

**Example:** 3.2 × 1.5

**Step 1:** Multiply as if they were whole numbers
- 32 × 15 = 480

**Step 2:** Count decimal places
- 3.2 has 1 decimal place
- 1.5 has 1 decimal place  
- Total: 1 + 1 = 2 decimal places

**Step 3:** Put decimal point in answer
- Start from the right
- Count 2 places to the left
- 480 → 4.80 = **4.8** ✓

## Multiplying by Whole Numbers

**Example:** 4.56 × 3

**Step 1:** Multiply like whole numbers
- 456 × 3 = 1,368

**Step 2:** Count decimal places
- 4.56 has 2 decimal places
- 3 has 0 decimal places
- Total: 2 decimal places

**Step 3:** Place the decimal
- 1,368 → 13.68 ✓

## Multiplying by 10, 100, 1,000

**Quick rule:** Move the decimal point to the RIGHT!

**Multiply by 10:** Move decimal 1 place right
- 3.45 × 10 = 34.5

**Multiply by 100:** Move decimal 2 places right
- 3.45 × 100 = 345

**Multiply by 1,000:** Move decimal 3 places right
- 3.45 × 1,000 = 3,450

**Why?** Each zero adds one place value!

## Multiplying Decimals Less Than 1

**Example:** 0.3 × 0.4

**Step 1:** Multiply like whole numbers
- 3 × 4 = 12

**Step 2:** Count decimal places
- 0.3 has 1 decimal place
- 0.4 has 1 decimal place
- Total: 2 decimal places

**Step 3:** Place decimal (might need extra zeros!)
- 12 → 0.12 ✓

**Important:** When multiplying numbers less than 1, the answer is SMALLER than both numbers!

## Money Problems

**Example:** You buy 3 notebooks for $2.75 each. How much total?

**Solve:** 3 × $2.75

**Step 1:** Multiply
- 3 × 275 = 825

**Step 2:** Count decimals
- 2.75 has 2 decimal places
- Total: 2 decimal places

**Step 3:** Place decimal
- 825 → $8.25 ✓

**Check:** Does $8.25 make sense? Yes! About 3 × $3 = $9 ✓

## Estimation to Check Your Work

**Before multiplying, estimate:**

**Example:** 4.8 × 3.2 ≈ ?
- Round: 5 × 3 = 15
- So answer should be close to 15

**Actual calculation:** 4.8 × 3.2 = 15.36 ✓ (Close to 15!)

## Partial Products Method

**Example:** 2.4 × 1.3

Break into parts:
\`\`\`
    2.4
  × 1.3
  -----
    0.12  (0.4 × 0.3)
    0.60  (2.0 × 0.3)
    0.40  (0.4 × 1.0)
  + 2.00  (2.0 × 1.0)
  -----
    3.12 ✓
\`\`\`

## Array/Area Model

**Visual way to multiply:** 2.3 × 1.4

\`\`\`
        2    +    0.3
    ____________
1   |  2    |  0.3   |  = 2.3
    |_______|________|
0.4 |  0.8  |  0.12  |  = 0.92
    |_______|________|
    = 2.8   = 0.42
\`\`\`

Add all sections: 2 + 0.3 + 0.8 + 0.12 = 3.22 ✓

## Real-World Applications

**Gas prices:** 12.5 gallons × $3.89 per gallon
- 125 × 389 = 48,625
- 3 total decimal places
- $48.625 → $48.63 (round to cents) ✓

**Recipe scaling:** Recipe calls for 2.5 cups flour. You're making 1.5 times the recipe
- 2.5 × 1.5 = 3.75 cups ✓

## Practice Tips

**Steps to remember:**
1. Multiply like whole numbers (ignore decimals)
2. Count total decimal places in problem
3. Count that many places from right in answer
4. Add zeros if needed at the front

**Check your work:**
- Estimate first
- Does the decimal placement make sense?
- Is the answer reasonable for the problem?

## Common Mistakes

❌ Forgetting to count decimal places
❌ Counting decimal places in the answer instead of the problem
❌ Putting decimal in the wrong place
❌ Not adding leading zeros when needed (like 0.12)

✅ Always count decimals in BOTH original numbers
✅ Start from the right and count left
✅ Estimate to check if your answer is reasonable
✅ Add zeros in front if you need more decimal places

## Special Cases

**Multiplying by 0.1, 0.01, 0.001:**
Move decimal to the LEFT!

- 45.6 × 0.1 = 4.56 (move 1 left)
- 45.6 × 0.01 = 0.456 (move 2 left)
- 45.6 × 0.001 = 0.0456 (move 3 left)

**Zero in the product:**
- 0.5 × 0.2 = 0.10 = 0.1 (can drop final zero)
- But keep zeros between digits: 0.05 × 2 = 0.10 ✓`
    },
    {
      slug: 'dividing-decimals',
      content: `# Dividing Decimals

## Why Divide Decimals?

We divide decimals in many real-world situations:
- Splitting a bill: $45.75 ÷ 3 people
- Finding unit price: $6.75 for 5 items
- Sharing measurements: 12.5 feet ÷ 5 sections

## Dividing Decimal by Whole Number

**Example:** 12.6 ÷ 3

**Steps:**
1. Set up division normally
2. Bring the decimal point straight up into the answer
3. Divide as usual

\`\`\`
    4.2
  ------
3 | 12.6
    12
    --
     06
      6
     --
      0 ✓
\`\`\`

**Answer: 4.2**

## The Key Rule: Make the Divisor a Whole Number

**When dividing by a decimal, move the decimal point to make the divisor (outside number) a whole number.**

Then move the decimal the SAME number of places in the dividend (inside number)!

## Dividing by a Decimal

**Example:** 7.2 ÷ 0.4

**Step 1:** Make divisor a whole number
- Move decimal in 0.4 one place right → 4
- Move decimal in 7.2 one place right too → 72

**Step 2:** Divide
- 72 ÷ 4 = 18 ✓

**Answer: 18**

## Longer Example with Steps

**Example:** 4.68 ÷ 0.6

**Step 1:** Move decimals to make 0.6 a whole number
- 0.6 → 6 (moved 1 place)
- 4.68 → 46.8 (moved 1 place)

**Step 2:** Divide

\`\`\`
    7.8
  ------
6 | 46.8
    42
    --
     4 8
     4 8
     ---
       0 ✓
\`\`\`

**Answer: 7.8**

## Adding Zeros When Needed

Sometimes you need to add zeros to keep dividing!

**Example:** 15 ÷ 0.4

**Step 1:** Move decimals
- 0.4 → 4
- 15 → 150 (moved 1, can write as 150.0)

**Step 2:** Divide

\`\`\`
    37.5
  ------
4 | 150.0
    12
    --
     30
     28
     --
      20
      20
      --
       0 ✓
\`\`\`

**Answer: 37.5**

## Dividing by 10, 100, 1,000

**Quick rule:** Move the decimal point to the LEFT!

**Divide by 10:** Move decimal 1 place left
- 34.5 ÷ 10 = 3.45

**Divide by 100:** Move decimal 2 places left
- 34.5 ÷ 100 = 0.345

**Divide by 1,000:** Move decimal 3 places left
- 34.5 ÷ 1,000 = 0.0345

## Money Problems

**Example:** Three friends split a $47.85 bill evenly. How much does each person pay?

**Solve:** $47.85 ÷ 3

\`\`\`
    15.95
  -------
3 | 47.85
     3
    --
    17
    15
    --
     28
     27
     --
      15
      15
      --
       0 ✓
\`\`\`

**Answer: $15.95 each**

## Finding Unit Price

**Example:** 4 apples cost $3.96. How much is one apple?

**Solve:** $3.96 ÷ 4 = $0.99 per apple ✓

This helps compare prices in stores!

## Estimation

**Always estimate first!**

**Example:** 47.6 ÷ 7.8 ≈ ?
- Round: 48 ÷ 8 = 6
- So answer should be close to 6

**Actual:** 47.6 ÷ 7.8 ≈ 6.1 ✓ (Close!)

## Repeating Decimals

Sometimes decimals repeat forever!

**Example:** 10 ÷ 3 = 3.333...

**Options:**
1. Round to a specific place
2. Write with a bar: 3.3̄ (means 3 repeats)
3. Use a fraction instead: 10/3

## Real-World Applications

**Gas mileage:** You drove 345.6 miles on 12.8 gallons
- 345.6 ÷ 12.8 = 27 miles per gallon ✓

**Rate of pay:** Earned $156.25 for 12.5 hours of work
- $156.25 ÷ 12.5 = $12.50 per hour ✓

## Practice Strategy

**Steps for dividing decimals:**
1. Move decimal in divisor to make it a whole number
2. Move decimal in dividend the same number of places
3. Place decimal point in answer directly above
4. Divide normally
5. Add zeros if needed to continue dividing

**Check your work:**
- Multiply your answer by the divisor
- Should get the dividend back!
- Example: If 12.6 ÷ 3 = 4.2, then 4.2 × 3 should equal 12.6 ✓

## Visual Model: Sharing Equally

**Think of division as sharing!**

$4.50 ÷ 3 means sharing $4.50 among 3 people

\`\`\`
Person 1: $1.50
Person 2: $1.50
Person 3: $1.50
Total: $4.50 ✓
\`\`\`

## Common Mistakes

❌ Forgetting to move the decimal point in both numbers
❌ Moving the decimals different amounts
❌ Not bringing the decimal straight up in the answer
❌ Stopping too soon and not adding zeros to continue

✅ Move decimal same number of places in BOTH numbers
✅ Divisor (outside) must become a whole number
✅ Bring decimal straight up before you start dividing
✅ Add zeros as needed to finish division or round

## Rounding Decimal Quotients

**Sometimes answers go on forever!**

**Example:** 22 ÷ 7 = 3.142857142857...

**Round to nearest tenth:** 3.1
**Round to nearest hundredth:** 3.14
**Round to nearest thousandth:** 3.143

**For money:** Always round to the nearest cent (hundredth)
- $5.678 → $5.68 ✓

## Division Vocabulary

- **Dividend:** The number being divided (inside)
- **Divisor:** The number you're dividing by (outside)
- **Quotient:** The answer
- **Remainder:** What's left over (with decimals, we can keep dividing!)

Remember: **Dividend ÷ Divisor = Quotient**`
    }
  ];

  // Update Grade 4 topics
  let updatedCount = 0;
  for (const update of grade4Updates) {
    const updated = await prisma.topic.updateMany({
      where: {
        slug: update.slug,
        category: {
          courseId: grade4Course.id
        }
      },
      data: {
        textContent: update.content
      }
    });
    
    if (updated.count > 0) {
      console.log(`✅ Updated Grade 4: ${update.slug}`);
      updatedCount++;
    }
  }

  // Update Grade 5 topics  
  for (const update of grade5Updates) {
    const updated = await prisma.topic.updateMany({
      where: {
        slug: update.slug,
        category: {
          courseId: grade5Course.id
        }
      },
      data: {
        textContent: update.content
      }
    });
    
    if (updated.count > 0) {
      console.log(`✅ Updated Grade 5: ${update.slug}`);
      updatedCount++;
    }
  }

  console.log(`\n✨ Successfully updated ${updatedCount} topics!`);
  console.log('\nTopics filled:');
  console.log('Grade 4: symmetry, rounding-numbers, place-value-millions,');
  console.log('         comparing-ordering-numbers, lines-and-angles, area-and-perimeter');
  console.log('Grade 5: multiplying-decimals, dividing-decimals');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
