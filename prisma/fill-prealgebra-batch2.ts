import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Pre-Algebra topics - Batch 2 (3 topics)...\n');

  // Topic 1: Exponents and Powers
  await prisma.topic.updateMany({
    where: {
      slug: 'exponents-and-powers'
    },
    data: {
      textContent: `# Exponents and Powers

What does it mean to raise a number to a power? Exponents are a shorthand way to show repeated multiplication - and they're everywhere in math, science, and the real world!

---

## What Is an Exponent?

An **exponent** tells you how many times to multiply the base by itself.

**Notation:** bⁿ

- **b** = base (the number being multiplied)
- **n** = exponent or power (how many times)

**Read as:** "b to the nth power" or "b to the n"

**Example:** 2⁵
- Base: 2
- Exponent: 5
- Meaning: 2 × 2 × 2 × 2 × 2 = 32

---

## Understanding Powers

**Powers show repeated multiplication:**

2¹ = 2 (one factor of 2)
2² = 2 × 2 = 4 (two factors of 2)
2³ = 2 × 2 × 2 = 8 (three factors of 2)
2⁴ = 2 × 2 × 2 × 2 = 16 (four factors of 2)
2⁵ = 2 × 2 × 2 × 2 × 2 = 32 (five factors of 2)

**Pattern:** Each power is double the previous one!

---

## Special Names for Powers

**Squared (power of 2):**
- 5² = "five squared" = 5 × 5 = 25
- Called "squared" because it's the area of a square

**Cubed (power of 3):**
- 4³ = "four cubed" = 4 × 4 × 4 = 64
- Called "cubed" because it's the volume of a cube

**Higher powers:**
- n⁴ = "n to the fourth power"
- n⁵ = "n to the fifth power"
- And so on...

---

## Evaluating Powers

**Example 1:** Calculate 3⁴

3⁴ = 3 × 3 × 3 × 3
= 9 × 3 × 3
= 27 × 3
= 81

**Answer: 3⁴ = 81**

**Example 2:** Calculate 5³

5³ = 5 × 5 × 5
= 25 × 5
= 125

**Answer: 5³ = 125**

**Example 3:** Calculate 10⁴

10⁴ = 10 × 10 × 10 × 10
= 100 × 10 × 10
= 1,000 × 10
= 10,000

**Answer: 10⁴ = 10,000**

---

## Powers of 10

**Powers of 10 are especially important!**

10¹ = 10
10² = 100
10³ = 1,000
10⁴ = 10,000
10⁵ = 100,000
10⁶ = 1,000,000

**Pattern:** The exponent tells you how many zeros!

**This is the basis for place value and scientific notation!**

---

## Base of 1

**Any power of 1 equals 1:**

1¹ = 1
1² = 1 × 1 = 1
1³ = 1 × 1 × 1 = 1
1¹⁰⁰ = 1

**Why?** Multiplying 1 by itself always gives 1!

---

## Exponent of 1

**Any number to the first power equals itself:**

5¹ = 5
100¹ = 100
n¹ = n

**Why?** Using the number once means just the number!

---

## Exponent of 0

**Any non-zero number to the power of 0 equals 1:**

5⁰ = 1
100⁰ = 1
n⁰ = 1 (where n ≠ 0)

**This seems strange, but it's consistent with exponent rules you'll learn later!**

**Exception:** 0⁰ is undefined (special case)

---

## Negative Bases

**Be careful with negative numbers!**

**Even exponent:**
(-2)² = (-2) × (-2) = 4 (positive!)
(-2)⁴ = (-2) × (-2) × (-2) × (-2) = 16 (positive!)

**Odd exponent:**
(-2)³ = (-2) × (-2) × (-2) = -8 (negative!)
(-2)⁵ = (-2) × (-2) × (-2) × (-2) × (-2) = -32 (negative!)

**Rule:**
- Even exponent → Positive result
- Odd exponent → Negative result

---

## Parentheses Matter!

**With parentheses:** (-3)²
= (-3) × (-3) = 9

**Without parentheses:** -3²
= -(3 × 3) = -9

**BIG DIFFERENCE!**

(-3)² means square the negative number
-3² means find 3² then make it negative

**Always use parentheses with negative bases!**

---

## Order of Operations (PEMDAS)

**Exponents come BEFORE multiplication and addition!**

**Example 1:** 2 + 3²
= 2 + 9 (exponent first!)
= 11

**Example 2:** 2 × 3²
= 2 × 9
= 18

**Example 3:** (2 + 3)²
= 5² (parentheses first!)
= 25

**Remember:** P-E-MDAS (Exponents are second!)

---

## Comparing Powers

**Which is larger: 2⁵ or 5²?**

2⁵ = 32
5² = 25

**So 2⁵ > 5²**

**Can't always tell just by looking - calculate if needed!**

**Example:** Which is larger: 3⁴ or 4³?
3⁴ = 81
4³ = 64

**So 3⁴ > 4³**

---

## Exponential Growth

**Powers grow VERY fast!**

Compare:
- 2¹ = 2
- 2² = 4
- 2³ = 8
- 2⁴ = 16
- 2⁵ = 32
- 2⁶ = 64
- 2⁷ = 128
- 2⁸ = 256
- 2⁹ = 512
- 2¹⁰ = 1,024

**Just 10 doublings gets you over 1,000!**

**This is why exponential growth is so powerful (and sometimes dangerous, like with debt!)**

---

## Powers in Formulas

**Area of a square:**
A = s²
Where s = side length

**Volume of a cube:**
V = s³
Where s = side length

**Surface area of a cube:**
SA = 6s²

**Powers appear in many formulas!**

---

## Real-World Applications

**Computer Science:**
- Data storage: 2¹⁰ = 1,024 bytes = 1 kilobyte
- Binary: 2⁸ = 256 possible values in a byte

**Population Growth:**
- Bacteria doubling: starts at 1, after n doublings = 2ⁿ

**Finance:**
- Compound interest uses exponents
- Money growing over time

**Geometry:**
- Areas use power of 2 (square units)
- Volumes use power of 3 (cubic units)

**Physics:**
- Distance: d = 16t² (falling objects)
- Energy: E = mc²

---

## Perfect Powers to Memorize

**Perfect Squares (n²):**
1² = 1, 2² = 4, 3² = 9, 4² = 16, 5² = 25
6² = 36, 7² = 49, 8² = 64, 9² = 81, 10² = 100
11² = 121, 12² = 144

**Perfect Cubes (n³):**
1³ = 1, 2³ = 8, 3³ = 27, 4³ = 64, 5³ = 125
6³ = 216, 7³ = 343, 8³ = 512, 9³ = 729, 10³ = 1,000

**Powers of 2:**
2¹ = 2, 2² = 4, 2³ = 8, 2⁴ = 16, 2⁵ = 32
2⁶ = 64, 2⁷ = 128, 2⁸ = 256, 2⁹ = 512, 2¹⁰ = 1,024

**Powers of 10:**
10¹ = 10, 10² = 100, 10³ = 1,000, 10⁴ = 10,000, etc.

---

## Fractional Bases

**Fractions can have exponents too!**

**Example:** (1/2)³

(1/2)³ = (1/2) × (1/2) × (1/2)
= 1/8

**Rule:** Raise numerator and denominator separately
(a/b)ⁿ = aⁿ/bⁿ

**Example:** (2/3)²
= 2²/3²
= 4/9

---

## Decimal Bases

**Decimals with exponents:**

**Example:** (0.5)²
= 0.5 × 0.5
= 0.25

**Example:** (0.1)³
= 0.1 × 0.1 × 0.1
= 0.001

**Notice:** Powers of decimals less than 1 get smaller!

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Multiplying instead of using power
- Wrong: 3⁴ = 3 × 4 = 12
- Right: 3⁴ = 3 × 3 × 3 × 3 = 81

❌ **Mistake 2:** Forgetting parentheses with negatives
- Wrong: -3² = 9
- Right: -3² = -9, but (-3)² = 9

❌ **Mistake 3:** Confusing exponent with multiplication
- 2³ ≠ 2 × 3
- 2³ = 8, not 6

❌ **Mistake 4:** Wrong order of operations
- Wrong: 2 + 3² = 5² = 25
- Right: 2 + 3² = 2 + 9 = 11

❌ **Mistake 5:** Thinking 0⁰ = 1
- 0⁰ is undefined (special case)
- But n⁰ = 1 for any n ≠ 0

---

## Problem-Solving Strategy

**To evaluate a power:**
1. Identify base and exponent
2. Write out repeated multiplication
3. Calculate step by step
4. Check: Does the answer make sense?

**With order of operations:**
1. Do what's in parentheses first
2. Then evaluate exponents
3. Then multiply/divide
4. Finally add/subtract

**With negative bases:**
1. Use parentheses!
2. Count factors
3. Even factors → positive
4. Odd factors → negative

---

## Using a Calculator

**Most calculators have a power button:**
- Often labeled: ^ or yx or xʸ
- Some: Use shift + another key

**Example:** Calculate 7⁵
- Enter: 7
- Press: ^ (or power key)
- Enter: 5
- Press: =
- Result: 16,807

**Check your calculator's manual for exact steps!**

---

## Quick Reference

**Key Rules:**
- bⁿ = b × b × ... × b (n times)
- b¹ = b
- b⁰ = 1 (if b ≠ 0)
- 1ⁿ = 1

**Negative Bases:**
- Even exponent → positive
- Odd exponent → negative
- Use parentheses!

**Special Powers:**
- n² = "squared"
- n³ = "cubed"
- 10ⁿ has n zeros

**Order:** Exponents before × ÷ + -

---

## Practice Tips

**Tip 1:** Memorize common powers
- Squares through 12²
- Cubes through 5³
- Powers of 2 through 2¹⁰
- Powers of 10

**Tip 2:** Write it out
- Don't try to do big powers in your head
- Write the repeated multiplication
- Calculate step by step

**Tip 3:** Check with smaller examples
- If confused, try with exponent 2 or 3
- Pattern usually becomes clear

**Tip 4:** Watch for negative signs
- Are parentheses there?
- Count the factors to check sign

---

## Summary

**Exponents show repeated multiplication:**
- bⁿ means multiply b by itself n times
- Base = number being multiplied
- Exponent = how many times

**Special cases:**
- b⁰ = 1
- b¹ = b
- 1ⁿ = 1
- n² = squared (area)
- n³ = cubed (volume)

**Important rules:**
- Negative base with even exponent → positive
- Negative base with odd exponent → negative
- Exponents in PEMDAS come after parentheses, before multiplication
- Powers grow very quickly!

**Applications:**
- Geometry (area, volume)
- Science (E = mc²)
- Finance (compound interest)
- Computer science (binary, data)
- Real-world growth

Mastering exponents is essential for algebra, science, and understanding how quantities grow and change!`
    }
  });
  console.log('✅ Updated: exponents-and-powers');

  // Topic 2: Unit Rates
  await prisma.topic.updateMany({
    where: {
      slug: 'unit-rates'
    },
    data: {
      textContent: `# Unit Rates

How do you compare prices, speeds, or other rates? Unit rates show the amount per ONE unit - making it easy to compare and make smart decisions!

---

## What Is a Rate?

A **rate** compares two quantities with different units.

**Examples:**
- 120 miles in 2 hours
- $6 for 3 pounds
- 300 words in 5 minutes

**Written as:** quantity₁/quantity₂ or quantity₁ per quantity₂

**Key:** The units are DIFFERENT (miles and hours, dollars and pounds, etc.)

---

## What Is a Unit Rate?

A **unit rate** is a rate where the second quantity is 1.

**Examples:**
- 60 miles per 1 hour (60 mph)
- $2 per 1 pound
- 60 words per 1 minute

**The "per" means "for each one"**

**Unit rates make comparing easy!**

---

## Finding Unit Rates

**Method:** Divide the first quantity by the second quantity

**Formula:** Unit Rate = First Quantity ÷ Second Quantity

**Example 1:** 120 miles in 2 hours

Unit Rate = 120 miles ÷ 2 hours = 60 miles/hour

**Answer: 60 miles per hour (60 mph)**

**Example 2:** $15 for 3 books

Unit Rate = $15 ÷ 3 books = $5/book

**Answer: $5 per book**

---

## Step-by-Step: Finding Unit Rates

**Example:** 180 students in 6 buses. Find students per bus.

**Step 1:** Identify quantities
- First quantity: 180 students
- Second quantity: 6 buses

**Step 2:** Divide
180 ÷ 6 = 30

**Step 3:** Write with units
30 students per bus

**Answer: 30 students/bus**

---

## Unit Price

**Unit price** is a special unit rate used for shopping.

**It shows price per ONE item (or per one unit like ounce, pound, etc.)**

**Example:** $8 for 4 cans

Unit price = $8 ÷ 4 = $2 per can

**Why useful?** Compare different package sizes!

---

## Comparing Unit Prices

**Example:** Which is the better buy?
- Option A: 3 bottles for $6
- Option B: 5 bottles for $9

**Find unit price for each:**

Option A: $6 ÷ 3 = $2 per bottle
Option B: $9 ÷ 5 = $1.80 per bottle

**Option B is better! ($1.80 < $2)**

**Rule:** Lower unit price = better deal (for same product)

---

## Speed as a Unit Rate

**Speed is distance per unit of time.**

**Example 1:** 240 miles in 4 hours

Speed = 240 miles ÷ 4 hours = 60 mph

**Example 2:** 150 meters in 25 seconds

Speed = 150 m ÷ 25 s = 6 m/s

**Common speed units:**
- mph (miles per hour)
- km/h (kilometers per hour)
- m/s (meters per second)
- ft/s (feet per second)

---

## Unit Rate with Fractions

**Sometimes you get fractional unit rates.**

**Example:** 3 pizzas for 8 people

Unit rate = 3 ÷ 8 = 3/8 pizza per person

**Each person gets 3/8 of a pizza**

**Or flip it:**
8 ÷ 3 = 8/3 = 2⅔ people per pizza

**Choose the perspective that makes sense for the problem!**

---

## Rate vs Unit Rate

**Rate:** Any comparison of quantities
- 120 miles in 2 hours
- $12 for 4 pounds

**Unit Rate:** Second quantity is 1
- 60 miles per 1 hour
- $3 per 1 pound

**To convert rate to unit rate: DIVIDE!**

---

## Real-World Examples

**Grocery Shopping:**
- Brand A: 24 oz for $4.80 → $0.20 per oz
- Brand B: 16 oz for $3.84 → $0.24 per oz
- Brand A is better value!

**Gas Mileage:**
- Car travels 360 miles on 12 gallons
- 360 ÷ 12 = 30 miles per gallon (mpg)

**Typing Speed:**
- 450 words in 10 minutes
- 450 ÷ 10 = 45 words per minute (wpm)

**Heart Rate:**
- 150 beats in 2 minutes
- 150 ÷ 2 = 75 beats per minute (bpm)

**Wages:**
- Earned $84 in 7 hours
- $84 ÷ 7 = $12 per hour

---

## Complex Comparisons

**Example:** Which copy shop is cheaper?
- Shop A: 75 copies for $3.75
- Shop B: 120 copies for $5.40

**Find unit prices:**
Shop A: $3.75 ÷ 75 = $0.05 per copy
Shop B: $5.40 ÷ 120 = $0.045 per copy

**Shop B is cheaper!** (by half a cent per copy)

**Even small differences add up with large quantities!**

---

## Unit Rates in Recipes

**Scaling recipes uses unit rates!**

**Example:** Recipe uses 6 cups flour for 4 loaves

Unit rate = 6 ÷ 4 = 1.5 cups per loaf

**To make 7 loaves:**
7 × 1.5 = 10.5 cups of flour

**Unit rate helps scale up or down!**

---

## Different Rate Formats

**All these mean the same:**
- 60 miles per hour
- 60 mph
- 60 miles/hour
- 60 mi/hr

**The "/" means "per"**

**Example formats:**
- $5 per pound = $5/lb
- 30 miles per gallon = 30 mpg
- 65 words per minute = 65 wpm

---

## When Unit Rate Has Decimals

**Example:** 5 pounds for $7

Unit price = $7 ÷ 5 = $1.40 per pound

**Money is usually rounded to 2 decimal places (cents)**

**Example:** 3 items for $5

Unit price = $5 ÷ 3 = $1.666...

**Round:** $1.67 per item (round up for money)

---

## Population Density

**Population density is people per square mile (or km).**

**Example:** City has 450,000 people in 150 square miles

Density = 450,000 ÷ 150 = 3,000 people per square mile

**Higher density = more crowded!**

---

## Efficiency and Productivity

**Work rate:** Tasks per hour
**Fuel efficiency:** Miles per gallon
**Production rate:** Items per day

**Example:** Factory makes 1,200 widgets in 8 hours

Rate = 1,200 ÷ 8 = 150 widgets per hour

**Unit rates help measure efficiency!**

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Dividing in wrong order
- Wrong: $2 per 8 oz → 8 ÷ 2 = 4
- Right: $2 per 8 oz → 2 ÷ 8 = $0.25 per oz

❌ **Mistake 2:** Comparing without unit rates
- Can't directly compare "3 for $6" vs "5 for $9"
- Must find unit price first!

❌ **Mistake 3:** Forgetting units
- Always include units in your answer!
- Not "60" but "60 mph"

❌ **Mistake 4:** Rounding too early
- Keep extra decimals during calculation
- Round only in final answer

❌ **Mistake 5:** Choosing higher price
- Lower unit price = better deal
- Don't just look at total cost!

---

## Using Unit Rates to Solve Problems

**Problem:** If 4 pizzas cost $36, how much do 7 pizzas cost?

**Step 1:** Find unit rate
$36 ÷ 4 = $9 per pizza

**Step 2:** Multiply by new quantity
7 × $9 = $63

**Answer: $63 for 7 pizzas**

---

## Problem-Solving Strategy

**To find unit rate:**
1. Identify the two quantities
2. Divide first by second
3. Write answer with correct units
4. Check: Does it make sense?

**To compare options:**
1. Find unit rate for each option
2. Compare the unit rates
3. Choose lower for price, higher for value
4. Consider quality too!

**To use unit rate:**
1. Find the unit rate
2. Multiply by desired quantity
3. Calculate final answer

---

## Quick Reference

**Unit Rate Formula:**
First Quantity ÷ Second Quantity

**Common Unit Rates:**
- Speed: distance ÷ time
- Unit price: price ÷ quantity
- Wage: money ÷ hours
- Mileage: miles ÷ gallons
- Typing: words ÷ minutes

**Comparing:**
- Find unit rate for each
- Lower unit price = better buy
- Higher unit value = better performance

**Remember:** Always include UNITS!

---

## Practice Tips

**Tip 1:** Set up division carefully
- What do you want "per one"?
- That goes in denominator

**Tip 2:** Check reasonableness
- If car goes 240 miles in 4 hours
- Should be around 60 mph (reasonable)
- Not 960 mph (unreasonable!)

**Tip 3:** Use calculator for complex division
- Especially with money
- Round money to 2 decimal places

**Tip 4:** Compare apples to apples
- Same units (both $/oz or both $/lb)
- Same quality if possible
- Consider other factors (freshness, brand, etc.)

---

## Summary

**Unit rate shows amount per ONE unit:**
- Makes comparisons easy
- Found by dividing
- Always include units

**Finding unit rates:**
Unit Rate = First Quantity ÷ Second Quantity

**Common uses:**
- Shopping (unit price)
- Travel (speed, mileage)
- Work (productivity, wages)
- Sports (stats per game)

**Benefits:**
- Compare different options
- Make informed decisions
- Calculate scaled quantities
- Understand efficiency

**Key skill:** Unit rates help you make smart choices in everyday life - from shopping to planning trips to budgeting time!

Mastering unit rates empowers you to analyze and compare rates in the real world!`
    }
  });
  console.log('✅ Updated: unit-rates');

  // Topic 3: Percent Applications
  await prisma.topic.updateMany({
    where: {
      slug: 'percent-applications'
    },
    data: {
      textContent: `# Percent Applications

How do you calculate tips, sales tax, discounts, and interest? Percent applications are everywhere in daily life - from shopping to banking to understanding statistics!

---

## Review: What Is a Percent?

**Percent** means "per hundred" or "out of 100."

**Symbol:** %

**Examples:**
- 25% = 25/100 = 0.25
- 50% = 50/100 = 0.5 = 1/2
- 100% = 100/100 = 1 (the whole thing)

**Converting:**
- Percent to decimal: Divide by 100 (move decimal 2 left)
- Decimal to percent: Multiply by 100 (move decimal 2 right)

---

## Finding Percent of a Number

**Question:** What is 30% of 80?

**Method 1: Convert to decimal**
30% = 0.30
0.30 × 80 = 24

**Method 2: Use fraction**
30% = 30/100
(30/100) × 80 = 2,400/100 = 24

**Answer: 24**

**Formula:** Percent of Number = (Percent as decimal) × Number

---

## Three Types of Percent Problems

**Type 1:** Find the part
"What is 20% of 50?"
Answer: 0.20 × 50 = 10

**Type 2:** Find the percent
"12 is what percent of 60?"
Answer: 12/60 = 0.20 = 20%

**Type 3:** Find the whole
"15 is 30% of what number?"
Answer: 15 ÷ 0.30 = 50

**Identifying the type is key to solving!**

---

## Sales Tax

**Sales tax** is a percent added to the price.

**Example:** Item costs $40, sales tax is 8%. Find total.

**Step 1:** Find tax amount
8% of $40 = 0.08 × $40 = $3.20

**Step 2:** Add to original price
$40 + $3.20 = $43.20

**Answer: Total is $43.20**

**Shortcut:** Multiply by 1.08
$40 × 1.08 = $43.20

**Why?** 100% + 8% = 108% = 1.08

---

## Tips and Gratuity

**Tip** is a percent of the bill given for service.

**Common tip percentages:**
- 15% = good service
- 18-20% = excellent service
- 10% = poor service

**Example:** Restaurant bill is $45. Leave 18% tip.

**Step 1:** Find tip
18% of $45 = 0.18 × $45 = $8.10

**Step 2:** Find total
$45 + $8.10 = $53.10

**Answer: Total with tip is $53.10**

**Quick tip calculation:**
- 10% = move decimal left once ($45 → $4.50)
- 20% = double the 10% ($4.50 × 2 = $9)
- 15% = halfway between 10% and 20%

---

## Discounts and Sales

**Discount** is a percent subtracted from the original price.

**Example:** Shirt originally $50, now 25% off. Find sale price.

**Step 1:** Find discount amount
25% of $50 = 0.25 × $50 = $12.50

**Step 2:** Subtract from original
$50 - $12.50 = $37.50

**Answer: Sale price is $37.50**

**Shortcut:** Multiply by 0.75
$50 × 0.75 = $37.50

**Why?** 100% - 25% = 75% = 0.75 (you pay 75%)

---

## Multiple Discounts

**Example:** Item is $100, first 20% off, then additional 10% off.

**IMPORTANT:** Discounts are applied sequentially, not added!

**Step 1:** First discount (20% off)
$100 × 0.80 = $80

**Step 2:** Second discount (10% off the new price)
$80 × 0.90 = $72

**Answer: Final price is $72**

**Note:** NOT 30% off! (That would be $70)
Sequential discounts give $72, which is 28% off total.

---

## Sales Tax AND Discount

**When both apply, do discount FIRST, then tax!**

**Example:** $60 item, 20% off, 7% tax

**Step 1:** Apply discount
$60 × 0.80 = $48

**Step 2:** Apply tax to discounted price
$48 × 1.07 = $51.36

**Answer: Final total is $51.36**

**Tax is always on the sale price, not original price!**

---

## Simple Interest

**Simple interest** is money earned (or owed) on principal.

**Formula:** I = Prt

Where:
- I = Interest earned/owed
- P = Principal (starting amount)
- r = Rate (as decimal)
- t = Time (in years)

**Example:** $500 in savings at 3% per year for 2 years

I = $500 × 0.03 × 2
I = $30

**Total after 2 years:** $500 + $30 = $530

---

## Percent Increase

**Percent increase shows how much something grew.**

**Formula:** Percent Increase = (New - Original)/Original × 100%

**Example:** Price rose from $20 to $25. Find percent increase.

Percent Increase = (25 - 20)/20 × 100%
= 5/20 × 100%
= 0.25 × 100%
= 25%

**Answer: 25% increase**

---

## Percent Decrease

**Percent decrease shows how much something fell.**

**Formula:** Percent Decrease = (Original - New)/Original × 100%

**Example:** Population dropped from 5,000 to 4,500. Find percent decrease.

Percent Decrease = (5,000 - 4,500)/5,000 × 100%
= 500/5,000 × 100%
= 0.10 × 100%
= 10%

**Answer: 10% decrease**

---

## Markup

**Markup** is percent added to cost to get selling price.

**Example:** Store buys item for $30, marks up 40%. Find selling price.

Markup = 40% of $30 = 0.40 × $30 = $12

Selling price = $30 + $12 = $42

**Or use shortcut:** $30 × 1.40 = $42

**Markup helps businesses make profit!**

---

## Commission

**Commission** is percent of sales earned as payment.

**Example:** Salesperson earns 6% commission. Sells $8,000 worth. How much commission?

Commission = 6% of $8,000
= 0.06 × $8,000
= $480

**Answer: $480 commission**

**Total pay might be commission + base salary**

---

## Percent Error

**Percent error** measures accuracy of estimates.

**Formula:** Percent Error = |Estimated - Actual|/Actual × 100%

**Example:** Estimated 50 people, actually 45. Find percent error.

Percent Error = |50 - 45|/45 × 100%
= 5/45 × 100%
≈ 11.1%

**Answer: About 11.1% error**

**Lower percent error = more accurate!**

---

## Percent of Change Formula

**General formula for increase OR decrease:**

Percent Change = (New - Original)/Original × 100%

**Positive result** = increase
**Negative result** = decrease

**Example:** Changed from 80 to 60

(60 - 80)/80 × 100% = -20/80 × 100% = -25%

**Answer: 25% decrease** (negative shows decrease)

---

## Real-World Applications

**Shopping:**
- Original price: $80
- 30% off sale
- Sale price: $80 × 0.70 = $56
- With 6% tax: $56 × 1.06 = $59.36

**Banking:**
- Deposit $1,000 at 2% annual interest
- After 1 year: $1,000 × 1.02 = $1,020
- Earned $20 interest

**Nutrition:**
- Food label: 15% daily value of vitamin C
- Daily need: 60 mg
- This food: 15% of 60 = 9 mg

**Statistics:**
- Survey: 240 out of 300 people agree
- Percent: 240/300 = 0.80 = 80%

---

## Tips for Different Situations

**Finding final price with tax:**
Multiply by (1 + tax rate)
Example: 8% tax → multiply by 1.08

**Finding sale price with discount:**
Multiply by (1 - discount rate)
Example: 25% off → multiply by 0.75

**Finding tip quickly:**
- 10%: move decimal left
- 20%: double the 10%
- 15%: average of 10% and 20%

**Finding percent change:**
(New - Old)/Old × 100%

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Adding percentages for sequential discounts
- Wrong: 20% off then 10% off = 30% off
- Right: Calculate each separately

❌ **Mistake 2:** Applying tax before discount
- Wrong: Tax on original price
- Right: Tax on sale price

❌ **Mistake 3:** Using wrong base for percent change
- Use ORIGINAL as denominator
- (New - Original)/Original, not (New - Original)/New

❌ **Mistake 4:** Forgetting to convert percent to decimal
- Remember: 25% = 0.25, not 25

❌ **Mistake 5:** Rounding too early
- Keep decimals during calculation
- Round final answer to cents

---

## Problem-Solving Strategy

**For price calculations:**
1. Identify original price
2. Determine if adding (tax, tip, markup) or subtracting (discount)
3. Calculate amount
4. Apply to original price
5. Check reasonableness

**For percent change:**
1. Find difference (New - Original)
2. Divide by original
3. Multiply by 100%
4. Check if increase (positive) or decrease (negative)

**For multi-step:**
1. Do one step at a time
2. Order matters! (discount before tax)
3. Show all work
4. Verify final answer

---

## Quick Reference

**Basic Formula:**
Percent of Number = (Percent ÷ 100) × Number

**Sales Tax:**
Total = Price × (1 + tax rate)

**Discount:**
Sale Price = Original × (1 - discount rate)

**Tip:**
Total = Bill × (1 + tip rate)

**Simple Interest:**
I = Prt

**Percent Change:**
(New - Original)/Original × 100%

**Increase:** multiply by (1 + percent)
**Decrease:** multiply by (1 - percent)

---

## Practice Tips

**Tip 1:** Always convert percent to decimal
- Move decimal 2 places left
- 35% → 0.35

**Tip 2:** Use shortcuts when possible
- 1.08 for 8% tax
- 0.75 for 25% off

**Tip 3:** Check with estimation
- 20% of $50 should be around $10
- If you get $100, something's wrong!

**Tip 4:** Round money to 2 decimals
- Always include cents
- Round to nearest penny if needed

**Tip 5:** Draw diagrams for complex problems
- Visual helps track multiple steps
- Especially for multiple discounts/increases

---

## Summary

**Percent applications are everywhere:**
- Shopping: discounts, sales tax
- Service: tips, commission
- Finance: interest, investments
- Statistics: changes, comparisons

**Key formulas:**
- Part = Percent × Whole
- Tax/Tip: multiply by (1 + rate)
- Discount: multiply by (1 - rate)
- Change: (New - Old)/Old × 100%

**Important skills:**
- Converting percents to decimals
- Identifying problem type
- Following correct order (discount before tax)
- Checking answers for reasonableness

**Mastering percent applications helps you:**
- Shop smarter
- Calculate tips quickly
- Understand financial products
- Analyze data and statistics

Percent applications are one of the most practical math skills you'll use throughout your life!`
    }
  });
  console.log('✅ Updated: percent-applications');

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
