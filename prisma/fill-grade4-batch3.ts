import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling 2 more Grade 4 Math topics...\n');

  const grade4Course = await prisma.course.findUnique({
    where: { slug: 'grade-4-math' }
  });

  if (!grade4Course) {
    throw new Error('Grade 4 Math course not found');
  }

  const updates = [
    {
      slug: 'adding-subtracting-decimals',
      content: `# Adding and Subtracting Decimals

## What Are Decimals?

**Decimals** are another way to show parts of a whole, like fractions.

The **decimal point** (.) separates the whole number from the part that's less than one.

**Example:** 3.5 = 3 and 5 tenths = 3 5/10

## Place Value Review

Understanding place value is KEY to adding and subtracting decimals!

\`\`\`
  Ones | Decimal | Tenths | Hundredths
    3  |    .    |   4    |     5
\`\`\`

**This is 3.45:**
- 3 ones
- 4 tenths (4/10)
- 5 hundredths (5/100)

## The Golden Rule: Line Up the Decimal Points!

**Most important rule:** Always line up the decimal points vertically!

**Example:** 4.3 + 2.6

**CORRECT way:**
\`\`\`
  4.3
+ 2.6
-----
  6.9 ✓
\`\`\`

**WRONG way:**
\`\`\`
  4.3
+  2.6
-----
  (decimal points not lined up - will give wrong answer!)
\`\`\`

## Adding Decimals: Step-by-Step

**Example:** 5.4 + 3.8

**Step 1:** Write the numbers vertically, lining up decimal points
\`\`\`
  5.4
+ 3.8
-----
\`\`\`

**Step 2:** Add from right to left, just like whole numbers
\`\`\`
  5.4
+ 3.8
-----
  9.2
\`\`\`

**Step 3:** Bring the decimal point straight down
\`\`\`
  5.4
+ 3.8
-----
  9.2 ✓
\`\`\`

## Adding with Different Decimal Places

**Example:** 6.5 + 2.34

**Step 1:** Line up decimal points
\`\`\`
  6.5
+ 2.34
------
\`\`\`

**Step 2:** Add placeholder zeros to help
\`\`\`
  6.50  ← Added a zero
+ 2.34
------
\`\`\`

**Step 3:** Add normally
\`\`\`
  6.50
+ 2.34
------
  8.84 ✓
\`\`\`

## Adding with Regrouping (Carrying)

**Example:** 7.8 + 5.6

\`\`\`
    ¹
  7.8
+ 5.6
-----
 13.4 ✓
\`\`\`

**Steps:**
- Tenths: 8 + 6 = 14 tenths = 1.4
- Write 4, carry 1
- Ones: 7 + 5 + 1 = 13
- Answer: 13.4

## Subtracting Decimals: Step-by-Step

**Example:** 8.7 - 3.2

**Step 1:** Line up decimal points
\`\`\`
  8.7
- 3.2
-----
\`\`\`

**Step 2:** Subtract from right to left
\`\`\`
  8.7
- 3.2
-----
  5.5 ✓
\`\`\`

**Step 3:** Bring decimal point straight down

## Subtracting with Different Decimal Places

**Example:** 9.3 - 4.67

**Step 1:** Line up decimals and add zeros
\`\`\`
  9.30  ← Added zero
- 4.67
------
\`\`\`

**Step 2:** Subtract
\`\`\`
  9.30
- 4.67
------
  4.63 ✓
\`\`\`

## Subtracting with Regrouping (Borrowing)

**Example:** 5.4 - 2.8

**Step 1:** Line up decimals
\`\`\`
  5.4
- 2.8
-----
\`\`\`

**Step 2:** Can't subtract 8 from 4, so borrow!
\`\`\`
  ⁴¹⁴
  5.4  → Think: 5.4 = 4.14
- 2.8
-----
  2.6 ✓
\`\`\`

**Borrowing explained:**
- 5 ones = 4 ones + 10 tenths
- 4 tenths + 10 tenths = 14 tenths
- Now: 14 tenths - 8 tenths = 6 tenths ✓

## Adding Three or More Decimals

**Example:** 2.5 + 3.8 + 1.4

**Line them all up:**
\`\`\`
  2.5
  3.8
+ 1.4
-----
  7.7 ✓
\`\`\`

## Real-World Examples: Money

**Example:** You have $5.75. You earn $3.50 more. How much now?

\`\`\`
  $5.75
+ $3.50
-------
  $9.25 ✓
\`\`\`

**You have $9.25!**

**Example:** You have $10.00. You spend $6.47. How much left?

\`\`\`
 $10.00
-  $6.47
--------
  $3.53 ✓
\`\`\`

**You have $3.53 left!**

## Real-World Examples: Measurement

**Running:**
- Monday: 1.3 miles
- Tuesday: 2.7 miles
- Total: 1.3 + 2.7 = 4.0 miles ✓

**Rainfall:**
- Week 1: 2.8 inches
- Week 2: 1.6 inches
- Difference: 2.8 - 1.6 = 1.2 inches ✓

## Using Estimation to Check

**Before solving, estimate:**

**Example:** 7.8 + 4.3 ≈ ?
- Round: 8 + 4 = 12
- So answer should be close to 12

**Actual:** 7.8 + 4.3 = 12.1 ✓ (Close to 12!)

**Example:** 9.6 - 3.2 ≈ ?
- Round: 10 - 3 = 7
- So answer should be close to 7

**Actual:** 9.6 - 3.2 = 6.4 ✓ (Close to 7!)

## Adding Whole Numbers and Decimals

**Example:** 5 + 3.7

**Add decimal point and zeros:**
\`\`\`
  5.0  ← 5 = 5.0
+ 3.7
-----
  8.7 ✓
\`\`\`

## Subtracting from Whole Numbers

**Example:** 8 - 3.4

**Add decimal point and zero:**
\`\`\`
  8.0  ← 8 = 8.0
- 3.4
-----
  4.6 ✓
\`\`\`

## Word Problems

**Problem 1:**
Sarah ran 2.5 miles on Saturday and 3.8 miles on Sunday. How many miles did she run in total?

**Solution:**
\`\`\`
  2.5
+ 3.8
-----
  6.3 miles ✓
\`\`\`

**Problem 2:**
A bottle holds 1.5 liters. You drink 0.7 liters. How much is left?

**Solution:**
\`\`\`
  1.5
- 0.7
-----
  0.8 liters ✓
\`\`\`

**Problem 3:**
You buy a toy for $12.95 and a book for $8.50. You pay with $25. How much change?

**Solution:**
\`\`\`
Step 1: Find total cost
  $12.95
+  $8.50
--------
  $21.45

Step 2: Find change
  $25.00
- $21.45
--------
  $3.55 change ✓
\`\`\`

## Using a Number Line

**Adding 2.3 + 1.5:**

\`\`\`
0 ―――1―――2―――2.3―――3―――3.8―――4
              ↑        ↑
            Start    +1.5
              └────────→
\`\`\`

Start at 2.3, move right 1.5 → Land at 3.8 ✓

## Common Mistakes

❌ Not lining up decimal points
\`\`\`
WRONG:     RIGHT:
  4.5        4.5
+ 2.34     + 2.34
------     ------
\`\`\`

❌ Forgetting to bring decimal point down
- Must keep decimal in same place!

❌ Adding/subtracting decimal points
- The decimal point doesn't move, just goes straight down!

❌ Not adding zeros as placeholders
- 5.3 + 2.47 → Write as 5.30 + 2.47

✅ Always line up the decimal points
✅ Add zeros to help line up columns
✅ Bring decimal straight down
✅ Check your answer with estimation

## Practice Strategy

**Before you start:**
1. Write numbers vertically
2. Line up decimal points
3. Add zeros if needed to make same length

**As you work:**
1. Add or subtract from right to left
2. Regroup (carry/borrow) if needed
3. Bring decimal point straight down

**After you finish:**
1. Does your decimal point line up?
2. Does your answer make sense?
3. Check with estimation

## Decimal Addition and Subtraction Rules

**Key Rules:**
1. **Always line up the decimal points**
2. **Add zeros to make decimals the same length**
3. **Bring the decimal point straight down**
4. **Add or subtract like you do with whole numbers**
5. **Check your answer makes sense**

## Think About the Size

**Adding decimals:**
- Sum is always BIGGER than each number
- 3.5 + 2.8 should be more than 3.5 ✓

**Subtracting decimals:**
- Difference is always SMALLER than the first number
- 5.7 - 2.3 should be less than 5.7 ✓

## Special Cases

**When the answer is a whole number:**
- 3.7 + 2.3 = 6.0 = 6 ✓
- Can drop the .0 at the end

**When decimals "cancel out":**
- 5.8 - 3.8 = 2.0 = 2 ✓

## Remember!

**The decimal point is like a fence post:**
- It stays in one place
- Everything lines up on either side
- It goes straight down in your answer
- Never moves left or right!

**Think of money:**
- Adding/subtracting decimals is just like adding/subtracting dollars and cents
- $3.50 + $2.75 = $6.25
- Line up the dollar signs (and decimal points!)

✅ Line up decimal points = Success!`
    },
    {
      slug: 'converting-units-measurement',
      content: `# Converting Units of Measurement

## Why Convert Units?

Sometimes we need to change measurements from one unit to another:
- Your height: 4 feet = ? inches
- A recipe: 2 cups = ? pints
- Your weight: 70 pounds = ? ounces

**Converting** means changing from one unit to another without changing the actual amount!

## Customary Length Units

**Remember these:**
- **1 foot (ft) = 12 inches (in)**
- **1 yard (yd) = 3 feet (ft)**
- **1 yard (yd) = 36 inches (in)**
- **1 mile (mi) = 5,280 feet (ft)**

### Converting Larger to Smaller Units

**Rule:** When going from a LARGER unit to a SMALLER unit, MULTIPLY!

**Example:** 3 feet = ? inches

**Think:** 1 foot = 12 inches, so 3 feet = ?
- 3 × 12 = 36 inches ✓

**Example:** 2 yards = ? feet

**Think:** 1 yard = 3 feet, so 2 yards = ?
- 2 × 3 = 6 feet ✓

### Converting Smaller to Larger Units

**Rule:** When going from a SMALLER unit to a LARGER unit, DIVIDE!

**Example:** 24 inches = ? feet

**Think:** 12 inches = 1 foot, so 24 inches = ?
- 24 ÷ 12 = 2 feet ✓

**Example:** 9 feet = ? yards

**Think:** 3 feet = 1 yard, so 9 feet = ?
- 9 ÷ 3 = 3 yards ✓

## Customary Weight Units

**Remember these:**
- **1 pound (lb) = 16 ounces (oz)**
- **1 ton (T) = 2,000 pounds (lb)**

### Weight Conversions

**Example:** 3 pounds = ? ounces
- Larger → smaller, so multiply!
- 3 × 16 = 48 ounces ✓

**Example:** 32 ounces = ? pounds
- Smaller → larger, so divide!
- 32 ÷ 16 = 2 pounds ✓

**Example:** 4,000 pounds = ? tons
- Smaller → larger, so divide!
- 4,000 ÷ 2,000 = 2 tons ✓

## Customary Capacity (Liquid) Units

**Remember these:**
- **1 cup (c) = 8 fluid ounces (fl oz)**
- **1 pint (pt) = 2 cups (c)**
- **1 quart (qt) = 2 pints (pt)**
- **1 quart (qt) = 4 cups (c)**
- **1 gallon (gal) = 4 quarts (qt)**

### Capacity Conversions

**Example:** 3 cups = ? fluid ounces
- Larger → smaller, multiply!
- 3 × 8 = 24 fluid ounces ✓

**Example:** 2 quarts = ? pints
- Larger → smaller, multiply!
- 2 × 2 = 4 pints ✓

**Example:** 16 cups = ? quarts
- Smaller → larger, divide!
- 16 ÷ 4 = 4 quarts ✓

**Example:** 8 quarts = ? gallons
- Smaller → larger, divide!
- 8 ÷ 4 = 2 gallons ✓

## Memory Tricks

**For Capacity (Liquid Measurements):**

Think of the word "**G-Q-P-C**" (Gallons, Quarts, Pints, Cups)
- Going DOWN the list (big → small): Multiply
- Going UP the list (small → big): Divide

**Gallon Man** (visual helper):
\`\`\`
        G
    ----+----
    Q   |   Q
   -----|-----
   P P  |  P P
  ------+------
 C C C C|C C C C
\`\`\`
- 1 Gallon = 4 Quarts
- 1 Quart = 2 Pints  
- 1 Pint = 2 Cups

## Two-Step Conversions

Sometimes you need to convert twice!

**Example:** 2 yards = ? inches

**Step 1:** Yards to feet
- 2 yards × 3 = 6 feet

**Step 2:** Feet to inches
- 6 feet × 12 = 72 inches ✓

**Example:** 48 fluid ounces = ? pints

**Step 1:** Fluid ounces to cups
- 48 ÷ 8 = 6 cups

**Step 2:** Cups to pints
- 6 ÷ 2 = 3 pints ✓

## Real-World Problems

**Height:**
Your little brother is 40 inches tall. How tall is he in feet?
- 40 ÷ 12 = 3 feet 4 inches
- (40 ÷ 12 = 3 remainder 4)
- Answer: 3 feet 4 inches ✓

**Recipe:**
A recipe needs 3 cups of milk. How many pints is that?
- 3 cups ÷ 2 = 1.5 pints
- Or: 1 pint 1 cup ✓

**Swimming Pool:**
A pool holds 200 gallons. How many quarts is that?
- 200 × 4 = 800 quarts ✓

## Metric System (Introduction)

**Length:**
- **1 meter (m) = 100 centimeters (cm)**
- **1 kilometer (km) = 1,000 meters (m)**

**Mass:**
- **1 kilogram (kg) = 1,000 grams (g)**

**Capacity:**
- **1 liter (L) = 1,000 milliliters (mL)**

**Metric is easier because everything is based on 10s!**

### Metric Conversions

**Example:** 3 meters = ? centimeters
- 3 × 100 = 300 centimeters ✓

**Example:** 5,000 grams = ? kilograms
- 5,000 ÷ 1,000 = 5 kilograms ✓

## Time Conversions

**Remember these:**
- **1 minute (min) = 60 seconds (sec)**
- **1 hour (hr) = 60 minutes (min)**
- **1 day = 24 hours (hr)**
- **1 week = 7 days**
- **1 year = 365 days (366 in leap years)**
- **1 year = 52 weeks**
- **1 year = 12 months**

### Time Examples

**Example:** 3 minutes = ? seconds
- 3 × 60 = 180 seconds ✓

**Example:** 120 minutes = ? hours
- 120 ÷ 60 = 2 hours ✓

**Example:** 2 hours = ? minutes
- 2 × 60 = 120 minutes ✓

## Conversion Strategy Chart

**Question to ask:** Am I going from big to small, or small to big?

\`\`\`
BIG unit → SMALL unit = MULTIPLY (more of them!)
Examples:
- Feet → Inches (multiply by 12)
- Yards → Feet (multiply by 3)
- Gallons → Quarts (multiply by 4)

SMALL unit → BIG unit = DIVIDE (fewer of them!)
Examples:
- Inches → Feet (divide by 12)
- Feet → Yards (divide by 3)
- Quarts → Gallons (divide by 4)
\`\`\`

## Practice Tips

**Before converting:**
1. Identify the units (what you have, what you want)
2. Ask: Bigger to smaller or smaller to bigger?
3. Remember the conversion fact (like 1 ft = 12 in)
4. Choose multiply or divide

**Check your answer:**
- Does it make sense?
- Should it be bigger or smaller than you started?
- 5 feet = 60 inches ✓ (more inches than feet makes sense!)

## Common Conversions to Memorize

**Length:**
- 1 ft = 12 in
- 1 yd = 3 ft
- 1 yd = 36 in

**Weight:**
- 1 lb = 16 oz
- 1 ton = 2,000 lb

**Capacity:**
- 1 gal = 4 qt
- 1 qt = 2 pt
- 1 pt = 2 c
- 1 c = 8 fl oz

**Time:**
- 1 hr = 60 min
- 1 min = 60 sec

## Word Problems

**Problem 1:**
A rope is 5 yards long. How many feet is that?
- 5 × 3 = 15 feet ✓

**Problem 2:**
You buy 2 gallons of juice. How many quarts is that?
- 2 × 4 = 8 quarts ✓

**Problem 3:**
A movie is 120 minutes long. How many hours?
- 120 ÷ 60 = 2 hours ✓

**Problem 4:**
You need 4 cups of water for a recipe. How many pints?
- 4 ÷ 2 = 2 pints ✓

## Comparing Measurements

**Which is more: 50 inches or 4 feet?**

**Convert to same unit:**
- 4 feet = 4 × 12 = 48 inches
- 50 inches > 48 inches
- So 50 inches is more! ✓

**Which is less: 3 cups or 1 pint?**

**Convert to same unit:**
- 1 pint = 2 cups
- 3 cups > 2 cups
- So 1 pint is less! ✓

## Common Mistakes

❌ Multiplying when you should divide
- Going smaller to bigger needs division!

❌ Dividing when you should multiply
- Going bigger to smaller needs multiplication!

❌ Using wrong conversion fact
- Make sure you know: 1 foot = 12 inches (not 10!)

❌ Not checking if answer makes sense
- 2 gallons should equal MORE quarts (not fewer!)

✅ Remember: Big → Small = Multiply
✅ Small → Big = Divide
✅ Memorize key conversions
✅ Check your answer makes sense

## Quick Reference Table

| From → To | Operation | Conversion |
|-----------|-----------|------------|
| Feet → Inches | Multiply | × 12 |
| Inches → Feet | Divide | ÷ 12 |
| Yards → Feet | Multiply | × 3 |
| Feet → Yards | Divide | ÷ 3 |
| Pounds → Ounces | Multiply | × 16 |
| Ounces → Pounds | Divide | ÷ 16 |
| Gallons → Quarts | Multiply | × 4 |
| Quarts → Gallons | Divide | ÷ 4 |
| Pints → Cups | Multiply | × 2 |
| Cups → Pints | Divide | ÷ 2 |

**Remember:** The key to conversions is knowing your facts and whether to multiply or divide!`
    }
  ];

  let updatedCount = 0;
  for (const update of updates) {
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
      console.log(`✅ Updated: ${update.slug}`);
      updatedCount++;
    }
  }

  console.log(`\n✨ Successfully updated ${updatedCount} topics!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
