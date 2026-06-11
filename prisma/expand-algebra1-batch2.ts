import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Expanding Algebra 1 topics - Batch 2 (3 topics)...\n');

  // Topic 1: Ratios and Rates (currently 836 chars, expand to 6000+)
  await prisma.topic.updateMany({
    where: { slug: 'ratios-rates-algebra1' },
    data: {
      textContent: `# Ratios and Rates

## What is a Ratio?

A **ratio** is a comparison of two quantities by division.

**Forms of writing ratios:**
- 3 to 4
- 3:4
- 3/4

**All mean the same thing!**

**Example 1:** Class has 12 boys and 15 girls

Ratio of boys to girls: 12:15 or 12/15

**Simplified:** 4:5 (divide both by 3)

**Example 2:** Recipe uses 2 cups flour and 1 cup sugar

Ratio of flour to sugar: 2:1

## Parts of a Ratio

**Ratio a:b**
- First term: a
- Second term: b
- **Order matters!** 2:3 ≠ 3:2

**Example:** Ratio of red marbles to blue marbles is 5:3

This means:
- For every 5 red, there are 3 blue
- NOT 3 red and 5 blue!

## Simplifying Ratios

**Process:** Divide both terms by their GCF (Greatest Common Factor)

**Example 1:** 8:12

GCF of 8 and 12 is 4
8÷4 : 12÷4 = 2:3

**Simplified form:** 2:3

**Example 2:** 15:25

GCF is 5
15÷5 : 25÷5 = 3:5

**Example 3:** 18:24:30 (three-term ratio)

GCF of all three is 6
18÷6 : 24÷6 : 30÷6 = 3:4:5

**Example 4:** 100:150

GCF is 50
100÷50 : 150÷50 = 2:3

## Equivalent Ratios

**Ratios that represent the same relationship**

Like equivalent fractions: 1/2 = 2/4 = 3/6

**Example:** 2:3 is equivalent to:
- 4:6 (multiply both by 2)
- 6:9 (multiply both by 3)
- 8:12 (multiply both by 4)
- 10:15 (multiply both by 5)

**To find equivalent ratio:**
Multiply or divide both terms by the same number

**Example:** Find three ratios equivalent to 5:7

- 10:14 (×2)
- 15:21 (×3)
- 20:28 (×4)

## Part-to-Part vs. Part-to-Whole Ratios

**Part-to-Part:** Compares two parts

**Example:** 3 apples and 5 oranges
Part-to-part: 3:5 (apples to oranges)

**Part-to-Whole:** Compares one part to the total

**Example:** Same 3 apples and 5 oranges
Total fruit: 8
Part-to-whole: 3:8 (apples to total fruit)
Or: 5:8 (oranges to total fruit)

**Example Problem:** Class has boys and girls in ratio 2:3

Part-to-part: 2:3 (boys to girls)

If total is 30 students:
- Boys: 2/(2+3) × 30 = 2/5 × 30 = 12
- Girls: 3/(2+3) × 30 = 3/5 × 30 = 18

Part-to-whole:
- Boys to total: 12:30 = 2:5
- Girls to total: 18:30 = 3:5

## Finding Unknown Terms

**Using equivalent ratios**

**Example 1:** 3:5 = x:20

Set up proportion: 3/5 = x/20

Cross multiply: 5x = 60
x = 12

**Example 2:** 7:x = 21:15

7/x = 21/15

Cross multiply: 7 × 15 = 21x
105 = 21x
x = 5

**Example 3:** If 4:9 = 12:y

4/9 = 12/y

4y = 108
y = 27

## What is a Rate?

A **rate** is a ratio that compares two quantities with **different units**.

**Common rates:**
- Speed: miles per hour (mi/h)
- Price: dollars per pound ($/lb)
- Wage: dollars per hour ($/h)
- Density: grams per cubic centimeter (g/cm³)

**Example 1:** Drive 150 miles in 3 hours

Rate: 150 miles / 3 hours = 50 miles/hour

**Example 2:** Earn 80 dollars in 5 hours

Rate: 80 dollars / 5 hours = 16 dollars/hour

## Unit Rate

A **unit rate** has a denominator of 1.

**"Per one unit"**

**Example 1:** 120 miles in 3 hours

Unit rate: 120 ÷ 3 = 40 miles per 1 hour = 40 mi/h

**Example 2:** 5 pounds for 2.50 dollars

Unit rate: 2.50 ÷ 5 = 0.50 dollars per pound

Or: 5 ÷ 2.50 = 2 pounds per dollar

**Example 3:** 240 words typed in 4 minutes

Unit rate: 240 ÷ 4 = 60 words per minute

**Example 4:** 12 apples cost 6 dollars

Unit rate: 6 ÷ 12 = 0.50 dollars per apple

Or: 12 ÷ 6 = 2 apples per dollar

## Unit Price (Best Buy Problems)

**Unit price** = Total price / Number of units

Use to compare which is the better deal!

**Example:** Which is the better buy?

Option A: 12 oz for 3.60 dollars
Option B: 16 oz for 4.00 dollars

**Option A unit price:** 3.60 ÷ 12 = 0.30 dollars/oz
**Option B unit price:** 4.00 ÷ 16 = 0.25 dollars/oz

**Better buy:** Option B (cheaper per ounce)

**Example 2:** Compare cereal prices

Brand A: 20 oz for 5.00 dollars → 0.25 dollars/oz
Brand B: 24 oz for 5.50 dollars → 0.229 dollars/oz (approximately 0.23)

**Better buy:** Brand B

**Example 3:** Juice comparison

Small: 32 oz for 2.56 dollars → 0.08 dollars/oz
Large: 64 oz for 4.48 dollars → 0.07 dollars/oz

**Better buy:** Large size

## Speed, Distance, and Time

**Formula:** Distance = Rate × Time
**Or:** d = rt

**Rearranged:**
- Rate = Distance / Time → r = d/t
- Time = Distance / Rate → t = d/r

**Example 1:** Car travels 50 mph for 3 hours

Distance = 50 × 3 = 150 miles

**Example 2:** Train travels 240 miles in 4 hours

Speed = 240 ÷ 4 = 60 mph

**Example 3:** How long to drive 180 miles at 60 mph?

Time = 180 ÷ 60 = 3 hours

**Example 4:** Plane flies 1,500 miles in 2.5 hours

Speed = 1,500 ÷ 2.5 = 600 mph

## Converting Rates

**Change units while keeping the ratio equivalent**

**Example 1:** Convert 60 mi/h to mi/min

60 miles per 60 minutes = 1 mile per minute

**Example 2:** Convert 5 m/s to m/min

5 meters per second × 60 seconds = 300 meters per minute

**Example 3:** Convert 12 dollars/hour to cents/minute

12 dollars/hour = 1,200 cents/hour
1,200 cents per 60 minutes = 20 cents/minute

**Example 4:** Convert 88 ft/s to mi/h

88 ft/s × 60 s/min × 60 min/h = 316,800 ft/h
316,800 ft/h ÷ 5,280 ft/mi = 60 mi/h

## Ratios with Different Units

**Must convert to same units first!**

**Example 1:** Ratio of 2 feet to 8 inches

Convert 2 feet to inches: 2 × 12 = 24 inches

Ratio: 24:8 = 3:1

**Example 2:** Ratio of 3 hours to 45 minutes

Convert 3 hours to minutes: 3 × 60 = 180 minutes

Ratio: 180:45 = 4:1

**Example 3:** Ratio of 1 yard to 2 feet

Convert 1 yard to feet: 3 feet

Ratio: 3:2

## Scale and Scale Drawings

**Scale ratio:** Relates drawing size to actual size

**Example 1:** Map scale is 1 inch : 50 miles

Drawing: 3 inches
Actual distance: 3 × 50 = 150 miles

**Example 2:** Blueprint scale is 1:100

Drawing: 5 cm
Actual size: 5 × 100 = 500 cm = 5 meters

**Example 3:** Model car scale 1:24

Model length: 8 inches
Actual car: 8 × 24 = 192 inches = 16 feet

**Example 4:** Finding scale

Model: 6 cm
Actual: 180 m = 18,000 cm

Scale: 6:18,000 = 1:3,000

## Proportional Reasoning with Ratios

**If ratio is constant, quantities are proportional**

**Example:** Recipe for 4 servings uses 2 cups flour

For 10 servings, how much flour?

Ratio: 2 cups / 4 servings = x cups / 10 servings

Cross multiply: 4x = 20
x = 5 cups

**Example 2:** 3 pizzas feed 8 people

How many pizzas for 24 people?

3/8 = x/24

8x = 72
x = 9 pizzas

**Example 3:** Car uses 2 gallons to drive 50 miles

How far on 7 gallons?

2/50 = 7/x

2x = 350
x = 175 miles

## Ratios in Geometry

**Example 1: Similar Triangles**

Small triangle sides: 3, 4, 5
Large triangle sides: 6, 8, 10

Ratio: 3:6 = 1:2 (scale factor)

All corresponding sides have same ratio!

**Example 2: Circle**

Circumference : Diameter = π : 1 (approximately 3.14:1)

**Example 3: Rectangle dimensions**

Length:Width = 3:2

If width is 10:
3/2 = L/10
2L = 30
L = 15

## Mixture Problems

**Example 1:** Concrete mix ratio of cement:sand:gravel is 1:2:3

For 12 cubic feet total:

Total parts: 1+2+3 = 6

Cement: 1/6 × 12 = 2 cubic feet
Sand: 2/6 × 12 = 4 cubic feet
Gravel: 3/6 × 12 = 6 cubic feet

**Example 2:** Paint mix ratio blue:yellow = 2:3

Need 15 gallons total:

Blue: 2/5 × 15 = 6 gallons
Yellow: 3/5 × 15 = 9 gallons

**Example 3:** Fruit punch ratio orange:pineapple = 5:2

Have 10 cups orange, how much pineapple?

5/2 = 10/x
5x = 20
x = 4 cups pineapple

## Gear Ratios

**Compares rotations of connected gears**

**Example:** Gear ratio 3:1

Driver gear makes 1 rotation
Driven gear makes 3 rotations

**Example 2:** Bike gears 42:14 = 3:1

Pedal 1 revolution → wheel turns 3 revolutions

## Common Mistakes to Avoid

1. **Reversing the order**
   Ratio of boys to girls: 4:5 (not 5:4!)

2. **Not simplifying**
   10:15 should be simplified to 2:3

3. **Mixing up part-to-part and part-to-whole**
   Ratio 2:3 means 2 out of 5 total (not 2 out of 3!)

4. **Different units in ratio**
   Must convert to same units first!

5. **Forgetting unit labels in rates**
   60 (what?) vs 60 miles/hour (clear!)

6. **Adding ratios incorrectly**
   If ratio is 2:3, DON'T assume 2+3=5 of each!

## Complex Ratio Problems

**Example:** Three siblings share money in ratio 2:3:5

Total: 200 dollars

Parts: 2+3+5 = 10

First sibling: 2/10 × 200 = 40 dollars
Second sibling: 3/10 × 200 = 60 dollars
Third sibling: 5/10 × 200 = 100 dollars

Check: 40+60+100 = 200 ✓

**Example 2:** Angles in triangle ratio 2:3:4

Total angles in triangle: 180 degrees
Parts: 2+3+4 = 9

First angle: 2/9 × 180 = 40°
Second angle: 3/9 × 180 = 60°
Third angle: 4/9 × 180 = 80°

Check: 40+60+80 = 180 ✓

## Real-World Applications

**Cooking:** Recipe ratios (flour:sugar:butter)

**Construction:** Concrete mixes, scale drawings

**Finance:** Exchange rates (dollars to euros)

**Sports:** Win-loss ratios, batting averages

**Medicine:** Drug concentrations

**Business:** Profit-to-cost ratios

**Chemistry:** Molecular ratios

**Geography:** Map scales

## Quick Reference

**Ratio:** Comparison of two quantities (a:b)

**Rate:** Ratio with different units (mi/h)

**Unit Rate:** Rate with denominator of 1

**Unit Price:** Cost per one item

**Simplify:** Divide both terms by GCF

**Equivalent Ratios:** Multiply or divide both terms by same number

**Part-to-whole:** One part / Total

**Finding unknown:** Set up proportion, cross multiply

**Different units:** Convert to same units first

**Scale:** Drawing : Actual

## Practice Tips

- Always simplify ratios to lowest terms
- Label units clearly for rates
- Check if units match before comparing
- Use proportions to find unknowns
- Remember order matters in ratios!
- For part-to-whole, find total parts first
- Practice unit conversions
- Compare unit prices when shopping
- Draw pictures for complex problems
- Verify answers make sense in context
- Master cross multiplication for proportions
- Apply to real-life situations daily
- Remember: rates have different units, ratios can have same units
- Practice with recipes, maps, and scale models
- Understand the difference between ratio and fraction

Ratios and rates are fundamental to understanding relationships between quantities. Master these skills and you'll excel in algebra, science, cooking, and countless real-world situations!`
    }
  });

  console.log('✅ Updated: ratios-rates-algebra1');

  // Topic 2: Direct and Inverse Variation (currently 790 chars, expand to 6000+)
  await prisma.topic.updateMany({
    where: { slug: 'variation-algebra1' },
    data: {
      textContent: `# Direct and Inverse Variation

## What is Direct Variation?

**Direct variation:** As one variable increases, the other increases proportionally.

**Formula:** y = kx

Where:
- k = constant of variation (constant of proportionality)
- k ≠ 0
- Relationship is linear through origin

**Key phrase:** "y varies directly as x"

**Example 1:** Distance varies directly with time (at constant speed)

If speed = 50 mph (this is k):
d = 50t

Travel 2 hours: d = 50(2) = 100 miles
Travel 5 hours: d = 50(5) = 250 miles

**Example 2:** Cost varies directly with pounds

If apples cost 2 dollars per pound (k = 2):
C = 2p

Buy 3 pounds: C = 2(3) = 6 dollars
Buy 7 pounds: C = 2(7) = 14 dollars

## Characteristics of Direct Variation

**1. Passes through origin (0, 0)**

When x = 0, y = k(0) = 0

**2. Constant ratio y/x = k**

**Example:** y = 3x

x = 1 → y = 3 → ratio: 3/1 = 3
x = 2 → y = 6 → ratio: 6/2 = 3
x = 4 → y = 12 → ratio: 12/4 = 3

The ratio is always k!

**3. Graph is a straight line through origin**

Slope = k

**4. As x doubles, y doubles**

If y = 5x:
x = 2 → y = 10
x = 4 (doubled) → y = 20 (doubled)

## Finding the Constant k

**Given one pair of values (x, y)**

**Step 1:** Use y = kx
**Step 2:** Substitute known values
**Step 3:** Solve for k
**Step 4:** Write equation

**Example 1:** y varies directly as x. When x = 4, y = 12

12 = k(4)
k = 3

Equation: y = 3x

**Example 2:** y varies directly as x. When x = 5, y = 30

30 = k(5)
k = 6

Equation: y = 6x

**Example 3:** Distance d varies directly with time t. When t = 3, d = 165

165 = k(3)
k = 55

Equation: d = 55t (speed is 55 mph)

## Using Direct Variation to Solve Problems

**Example 1:** y varies directly as x. If y = 15 when x = 3, find y when x = 7

Step 1: Find k
15 = k(3)
k = 5

Step 2: Use k to find new y
y = 5(7) = 35

**Example 2:** The cost C of bananas varies directly with weight w. If 2 pounds cost 3 dollars, find the cost of 5 pounds

Find k:
3 = k(2)
k = 1.5

Find new cost:
C = 1.5(5) = 7.50 dollars

**Example 3:** Earnings E vary directly with hours h worked. If you earn 120 dollars for 8 hours, how much for 12 hours?

Find k:
120 = k(8)
k = 15 (hourly wage)

For 12 hours:
E = 15(12) = 180 dollars

## What is Inverse Variation?

**Inverse variation:** As one variable increases, the other decreases proportionally.

**Formula:** y = k/x or xy = k

Where:
- k = constant of variation
- k ≠ 0
- Relationship is hyperbola (curve)

**Key phrase:** "y varies inversely as x"

**Example 1:** Time varies inversely with speed

To travel 120 miles (k = 120):
t = 120/r

At 30 mph: t = 120/30 = 4 hours
At 60 mph: t = 120/60 = 2 hours
Faster speed → less time!

**Example 2:** Workers and time to complete job

To paint house requiring 24 worker-hours (k = 24):
t = 24/w

1 worker: t = 24 hours
2 workers: t = 12 hours
4 workers: t = 6 hours

More workers → less time!

## Characteristics of Inverse Variation

**1. Product xy is constant**

xy = k (always the same)

**2. Does NOT pass through origin**

Cannot have x = 0 (division by zero!)

**3. Graph is a hyperbola**

Two curves in opposite quadrants

**4. As x increases, y decreases**

**Example:** y = 12/x

x = 1 → y = 12
x = 2 → y = 6 (x doubled, y halved)
x = 3 → y = 4
x = 4 → y = 3 (x doubled again, y halved again)

**5. Asymptotes at x = 0 and y = 0**

Graph approaches but never touches axes

## Finding k for Inverse Variation

**Given one pair (x, y)**

**Use:** k = xy

**Example 1:** y varies inversely as x. When x = 3, y = 8

k = 3 × 8 = 24

Equation: y = 24/x or xy = 24

**Example 2:** y varies inversely as x. When x = 6, y = 2

k = 6 × 2 = 12

Equation: y = 12/x

**Example 3:** Time t varies inversely with speed r. When r = 40, t = 5

k = 40 × 5 = 200

Equation: t = 200/r (200-mile trip)

## Using Inverse Variation to Solve Problems

**Example 1:** y varies inversely as x. If y = 6 when x = 4, find y when x = 8

Find k:
k = 4 × 6 = 24

Find new y:
y = 24/8 = 3

**Example 2:** Time to complete a job varies inversely with workers. 3 workers take 8 hours. How long for 6 workers?

Find k:
k = 3 × 8 = 24 worker-hours

Find new time:
t = 24/6 = 4 hours

**Example 3:** Pressure and volume inversely related (Boyle's Law). When volume is 20 liters, pressure is 5 atmospheres. Find pressure at 10 liters.

Find k:
k = 20 × 5 = 100

Find new pressure:
P = 100/10 = 10 atmospheres

## Direct vs. Inverse Variation Comparison

**Direct Variation (y = kx):**
- Both increase together
- Both decrease together
- Ratio y/x is constant
- Graph: line through origin
- Example: More hours → more pay

**Inverse Variation (y = k/x):**
- One increases, other decreases
- Product xy is constant
- Graph: hyperbola
- Example: More speed → less time

**How to identify:**

"Varies directly" or "proportional to" → y = kx

"Varies inversely" or "inversely proportional" → y = k/x

## Joint Variation

**One variable varies directly as the product of two or more variables**

**Formula:** z = kxy

**Example:** Area of rectangle varies jointly as length and width

A = lw (here k = 1)

If l = 5 and w = 3: A = 15
If l = 10 and w = 3: A = 30 (length doubled, area doubled)

**Example 2:** Volume of cylinder varies jointly as radius squared and height

V = πr²h (k = π)

## Combined Variation

**Mix of direct and inverse variation**

**Formula:** z = kx/y

z varies directly as x and inversely as y

**Example:** Speed varies directly as distance and inversely as time

s = d/t (k = 1)

More distance → more speed (direct)
More time → less speed (inverse)

**Example 2:** z = kxy/w

z varies jointly as x and y, and inversely as w

Given: When x = 2, y = 3, w = 6, z = 4

Find k:
4 = k(2)(3)/6
4 = k
k = 4

Equation: z = 4xy/w

## Real-World Applications of Direct Variation

**1. Wages:** Pay varies directly with hours worked
E = rh (r = hourly rate)

**2. Distance:** Distance varies directly with time (constant speed)
d = rt

**3. Spring stretch:** Force varies directly with distance stretched (Hooke's Law)
F = kx

**4. Currency exchange:** Dollars vary directly with euros
d = ke

**5. Perimeter and side:** Perimeter of square varies directly with side
P = 4s (k = 4)

**6. Cost and quantity:** Total cost varies directly with items purchased
C = px (p = price per item)

## Real-World Applications of Inverse Variation

**1. Travel time:** Time varies inversely with speed
t = d/r (d = distance is constant)

**2. Work completion:** Time varies inversely with workers
t = k/w (k = total worker-hours)

**3. Gas law (Boyle's):** Pressure varies inversely with volume (constant temperature)
P = k/V

**4. Brightness:** Light intensity varies inversely with distance squared
I = k/d²

**5. Gear ratios:** Speed varies inversely with number of teeth
s = k/n

**6. Seesaw balance:** Weight varies inversely with distance from fulcrum
w₁d₁ = w₂d₂

## Recognizing Variation from Tables

**Direct Variation Test:** Check if y/x is constant

x | y | y/x
1 | 3 | 3
2 | 6 | 3
3 | 9 | 3
4 | 12 | 3

Constant ratio → Direct variation! (y = 3x)

**Inverse Variation Test:** Check if xy is constant

x | y | xy
1 | 12 | 12
2 | 6 | 12
3 | 4 | 12
4 | 3 | 12

Constant product → Inverse variation! (y = 12/x)

**Neither:**

x | y | y/x | xy
1 | 5 | 5 | 5
2 | 8 | 4 | 16
3 | 11 | 3.67 | 33

Neither constant → Not direct or inverse variation

## Graphing Variation

**Direct Variation (y = kx):**
- Straight line
- Passes through (0, 0)
- Slope = k
- If k > 0: line rises left to right
- If k < 0: line falls left to right

**Inverse Variation (y = k/x):**
- Hyperbola (two curves)
- If k > 0: curves in quadrants I and III
- If k < 0: curves in quadrants II and IV
- Never touches axes (asymptotes)
- Symmetric about origin

## Common Mistakes to Avoid

1. **Confusing direct and inverse**
   Direct: y = kx (multiply)
   Inverse: y = k/x (divide)

2. **Forgetting to find k first**
   Always find k before solving for new values!

3. **Using wrong formula**
   Read carefully: "directly" vs "inversely"

4. **Arithmetic errors with fractions**
   Be careful with division in inverse variation

5. **Thinking direct variation has y-intercept**
   Must pass through origin! (0, 0)

6. **Not checking units**
   Ensure units make sense in context

## Problem-Solving Strategy

**For Direct Variation:**
1. Write y = kx
2. Substitute known pair to find k
3. Write equation with k value
4. Use equation to find unknown

**For Inverse Variation:**
1. Write y = k/x or xy = k
2. Substitute known pair to find k
3. Write equation with k value
4. Use equation to find unknown

**Identifying type:**
- "Varies directly" or "proportional" → y = kx
- "Varies inversely" or "inversely proportional" → y = k/x
- Check if y/x constant (direct) or xy constant (inverse)

## Quick Reference

**Direct Variation:**
- Formula: y = kx
- Graph: line through origin
- Test: y/x = k (constant ratio)
- As x ↑, y ↑

**Inverse Variation:**
- Formula: y = k/x or xy = k
- Graph: hyperbola
- Test: xy = k (constant product)
- As x ↑, y ↓

**Finding k:**
- Direct: k = y/x
- Inverse: k = xy

**Joint:** z = kxy (varies jointly as x and y)

**Combined:** z = kx/y (direct in x, inverse in y)

## Practice Tips

- Always identify variation type first
- Find k before finding other values
- Check if answer makes sense (direct: both increase, inverse: opposite)
- Practice with real-world contexts
- Graph to visualize relationships
- Use tables to test for variation type
- Remember formulas: y = kx vs y = k/x
- Master fraction operations for inverse variation
- Verify by checking if ratio or product is constant
- Apply to physics, chemistry, economics problems
- Don't confuse with linear equations (direct variation is special case)
- Understand the meaning of k in each context
- Practice converting word problems to equations

Understanding variation helps you model real-world relationships mathematically. These concepts appear throughout science, economics, and engineering!`
    }
  });

  console.log('✅ Updated: variation-algebra1');

  // Topic 3: Solving Proportions (currently 672 chars, expand to 6000+)
  await prisma.topic.updateMany({
    where: { slug: 'proportions-algebra1' },
    data: {
      textContent: `# Solving Proportions

## What is a Proportion?

A **proportion** is an equation stating that two ratios are equal.

**General form:** a/b = c/d

**Read as:** "a is to b as c is to d"

**Example:** 2/3 = 4/6

This is a true proportion because both ratios equal 2/3 when simplified.

**Example 2:** 3/5 = 6/10

True proportion: 3/5 = 6/10 = 0.6

**Example 3:** 1/2 ≠ 2/3

NOT a proportion: 0.5 ≠ 0.67

## Parts of a Proportion

**In a/b = c/d:**

**Means:** b and c (middle terms)
**Extremes:** a and d (outer terms)

**Example:** 2/3 = 8/12

Extremes: 2 and 12
Means: 3 and 8

**Cross Products Property:** In a true proportion, the product of the means equals the product of the extremes.

a/b = c/d → ad = bc

**Example:** 2/3 = 8/12

Extremes: 2 × 12 = 24
Means: 3 × 8 = 24 ✓

## Testing if Ratios Form a Proportion

**Method 1: Simplify both ratios**

**Example 1:** Does 6/9 = 10/15?

6/9 = 2/3 (divide by 3)
10/15 = 2/3 (divide by 5)

Yes, both equal 2/3! ✓

**Example 2:** Does 4/7 = 12/21?

4/7 is already simplified
12/21 = 4/7 (divide by 3)

Yes, proportion! ✓

**Method 2: Cross multiply**

If ad = bc, then a/b = c/d

**Example:** Does 3/4 = 9/12?

Cross products: 3 × 12 = 36 and 4 × 9 = 36

Equal products → Yes! ✓

**Example 2:** Does 5/6 = 7/8?

Cross products: 5 × 8 = 40 and 6 × 7 = 42

Not equal → No! ✗

## Solving Proportions with One Variable

**Use cross multiplication!**

**Step 1:** Cross multiply
**Step 2:** Solve the resulting equation

**Example 1:** x/5 = 3/15

Cross multiply:
15x = 5 × 3
15x = 15
x = 1

**Check:** 1/5 = 3/15? Both equal 1/5 ✓

**Example 2:** 4/x = 2/7

Cross multiply:
4 × 7 = 2x
28 = 2x
x = 14

**Check:** 4/14 = 2/7? Both equal 2/7 ✓

**Example 3:** 6/8 = x/12

Cross multiply:
6 × 12 = 8x
72 = 8x
x = 9

**Check:** 6/8 = 9/12? Both equal 3/4 ✓

**Example 4:** 5/x = 15/27

Cross multiply:
5 × 27 = 15x
135 = 15x
x = 9

## Proportions with Variable in Different Positions

**Variable in numerator (x/b = c/d):**

**Example:** x/7 = 4/14

Cross multiply: 14x = 28
x = 2

**Variable in denominator (a/x = c/d):**

**Example:** 6/x = 3/5

Cross multiply: 6 × 5 = 3x
30 = 3x
x = 10

**Variable on right side (a/b = x/d):**

**Example:** 2/5 = x/20

Cross multiply: 2 × 20 = 5x
40 = 5x
x = 8

**Variable in extreme right (a/b = c/x):**

**Example:** 3/4 = 9/x

Cross multiply: 3x = 36
x = 12

## Proportions with Larger Numbers

**Example 1:** x/35 = 12/15

Cross multiply:
15x = 35 × 12
15x = 420
x = 28

**Example 2:** 18/24 = 27/x

Cross multiply:
18x = 24 × 27
18x = 648
x = 36

**Example 3:** 45/x = 9/16

Cross multiply:
45 × 16 = 9x
720 = 9x
x = 80

## Proportions with Decimals

**Example 1:** 0.5/x = 2/8

Cross multiply:
0.5 × 8 = 2x
4 = 2x
x = 2

**Example 2:** x/3 = 1.5/4.5

Cross multiply:
4.5x = 3 × 1.5
4.5x = 4.5
x = 1

**Tip:** Can convert decimals to fractions first

1.5 = 3/2, so x/3 = (3/2)/(9/2)

Or just work with decimals!

## Proportions with Fractions

**Example 1:** (1/2)/x = (1/4)/(1/3)

Cross multiply:
(1/2) × (1/3) = x × (1/4)
1/6 = x/4
x = 4/6 = 2/3

**Example 2:** x/(2/3) = 6/4

Cross multiply:
4x = 6 × (2/3)
4x = 4
x = 1

**Tip:** May be easier to clear fractions first by multiplying!

## Word Problems with Proportions

**Step 1:** Identify the two ratios
**Step 2:** Set up proportion
**Step 3:** Cross multiply and solve
**Step 4:** Check answer in context

**Example 1: Recipe Scaling**

Recipe for 4 servings uses 3 cups flour. How much for 10 servings?

Set up: 3 cups / 4 servings = x cups / 10 servings

Cross multiply:
3 × 10 = 4x
30 = 4x
x = 7.5 cups

**Example 2: Map Scale**

Map scale: 2 inches = 50 miles. How many miles for 7 inches?

Set up: 2 in / 50 mi = 7 in / x mi

Cross multiply:
2x = 350
x = 175 miles

**Example 3: Unit Price**

5 pounds of apples cost 8 dollars. How much for 8 pounds?

Set up: 5 lb / 8 dollars = 8 lb / x dollars

Wait! This is backwards. Rewrite:

8 dollars / 5 lb = x dollars / 8 lb

Cross multiply:
8 × 8 = 5x
64 = 5x
x = 12.80 dollars

**Example 4: Similar Figures**

Two similar triangles. Small triangle base is 6 cm, height is 4 cm. Large triangle base is 15 cm. Find height.

Set up: 6/4 = 15/x

Cross multiply:
6x = 60
x = 10 cm

## Rate Problems Using Proportions

**Example 1: Speed**

Car travels 120 miles in 2 hours. How far in 5 hours (at same speed)?

Set up: 120 mi / 2 h = x mi / 5 h

Cross multiply:
120 × 5 = 2x
600 = 2x
x = 300 miles

**Example 2: Work Rate**

3 workers take 8 hours to paint a house. How long for 6 workers?

This is INVERSE proportion (more workers, less time):

Set up: 3 workers / 6 workers = x hours / 8 hours

Cross multiply:
3 × 8 = 6x
24 = 6x
x = 4 hours

Or flip: 6 workers / 3 workers = 8 hours / x hours
6x = 24, x = 4

**Example 3: Typing**

Type 240 words in 4 minutes. How many words in 10 minutes?

Set up: 240 words / 4 min = x words / 10 min

Cross multiply:
240 × 10 = 4x
2400 = 4x
x = 600 words

## Percent Problems as Proportions

**Form:** part/whole = percent/100

**Example 1:** What is 30% of 80?

x/80 = 30/100

Cross multiply:
100x = 2400
x = 24

**Example 2:** 15 is what percent of 60?

15/60 = x/100

Cross multiply:
60x = 1500
x = 25%

**Example 3:** 12 is 40% of what number?

12/x = 40/100

Cross multiply:
40x = 1200
x = 30

## Similar Figures and Proportions

**Corresponding sides of similar figures are proportional**

**Example 1: Similar Rectangles**

Small rectangle: 4 by 6
Large rectangle: x by 15

Set up: 4/6 = x/15

Cross multiply:
6x = 60
x = 10

**Example 2: Similar Triangles**

Triangle 1 sides: 3, 4, 5
Triangle 2 sides: 9, x, y

Find x (corresponds to 4):
3/4 = 9/x
3x = 36
x = 12

Find y (corresponds to 5):
3/5 = 9/y
3y = 45
y = 15

## Proportions in Geometry

**Example 1: Angle Bisector Theorem**

Angle bisector divides opposite side proportionally

**Example 2: Golden Ratio**

a/b = (a+b)/a ≈ 1.618

**Example 3: Trigonometric Ratios**

In similar right triangles, ratios of sides are equal
(foundation of trig!)

## Converting Units with Proportions

**Example 1: Feet to inches**

5 feet = ? inches

Set up: 1 ft / 12 in = 5 ft / x in

Cross multiply:
x = 60 inches

**Example 2: Dollars to cents**

25 dollars = ? cents

1 dollar / 100 cents = 25 dollars / x cents

x = 2,500 cents

**Example 3: Metric conversion**

1 kilometer = 1000 meters
5.5 km = ? meters

1 km / 1000 m = 5.5 km / x m

x = 5,500 meters

## Setting Up Proportions Correctly

**Key:** Make sure units match on each side!

**Correct:** miles/hours = miles/hours

**WRONG:** miles/hours = hours/miles

**Example:** Car goes 150 miles in 3 hours. How far in 5 hours?

**Correct:** 150 mi / 3 h = x mi / 5 h

**Also correct:** 3 h / 150 mi = 5 h / x mi

**WRONG:** 150 mi / 3 h = 5 h / x mi (units don't match!)

## Common Mistakes to Avoid

1. **Setting up proportion incorrectly**
   Make sure corresponding parts align!

2. **Cross multiplying wrong**
   a/b = c/d → ad = bc (not ab = cd!)

3. **Arithmetic errors**
   Double-check multiplication and division

4. **Not simplifying**
   x = 20/5 → x = 4 (don't stop at 20/5!)

5. **Units confusion**
   Keep same units on same sides of equation

6. **Forgetting to check**
   Substitute back to verify!

7. **Inverse vs direct confusion**
   More workers → less time (flip ratio!)

## Advanced Proportion Problems

**Example 1: Three-way proportion**

If a:b = 2:3 and b:c = 4:5, find a:c

Make b the same in both:
a:b = 2:3 = 8:12
b:c = 4:5 = 12:15

So a:c = 8:15

**Example 2: Continued proportion**

a/b = b/c (b is geometric mean)

If a = 4 and c = 9:
4/b = b/9
b² = 36
b = 6

**Example 3: Extended proportion**

a/b = c/d = e/f = k (common ratio)

Then a = bk, c = dk, e = fk

## Real-World Applications

**Cooking:** Scale recipes up or down

**Construction:** Scale drawings, blueprints

**Finance:** Exchange rates, tax calculations

**Medicine:** Dosage calculations

**Geography:** Map scales, distances

**Shopping:** Unit prices, best deals

**Art:** Scaling images, maintaining proportions

**Science:** Dilutions, mixtures, conversions

**Sports:** Statistics, batting averages

## Quick Reference

**Proportion:** a/b = c/d

**Cross Products:** ad = bc

**To solve:** Cross multiply, then solve equation

**To test:** Check if ad = bc

**Setting up:** Make sure units correspond

**Means:** Middle terms (b and c)

**Extremes:** Outer terms (a and d)

**Word problems:** Identify two equal ratios

## Practice Strategy

- Start with simple numerical proportions
- Practice cross multiplication
- Work on identifying ratios from word problems
- Set up proportions carefully (units matter!)
- Check answers by substituting back
- Distinguish direct vs inverse relationships
- Practice with real-world contexts
- Use proportions for percent problems
- Apply to similar figures in geometry
- Master unit conversions
- Draw pictures to visualize relationships
- Verify answers make sense in context
- Practice mental estimation first
- Work backwards from answer to check

Proportions are one of the most practical tools in algebra. They appear everywhere from cooking to construction, medicine to map reading. Master proportions and you'll solve countless real-world problems with confidence!`
    }
  });

  console.log('✅ Updated: proportions-algebra1');

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
