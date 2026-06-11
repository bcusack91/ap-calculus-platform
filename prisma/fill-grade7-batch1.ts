import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Grade 7 Math topics - Batch 1 (3 topics)...\n');

  // Topic 1: Multiplying and Dividing Integers
  await prisma.topic.updateMany({
    where: {
      slug: 'multiplying-dividing-integers'
    },
    data: {
      textContent: `# Multiplying and Dividing Integers

In Grade 6, you learned about integers and how to add and subtract them. Now it's time to master multiplication and division with positive and negative numbers!

---

## Review: What Are Integers?

**Integers** are whole numbers and their opposites: ..., -3, -2, -1, 0, 1, 2, 3, ...

- Positive integers: 1, 2, 3, 4, ... (to the right of zero)
- Negative integers: -1, -2, -3, -4, ... (to the left of zero)
- Zero is neither positive nor negative

---

## The Rules for Multiplying Integers

The rules for multiplying integers depend on the **signs** of the numbers.

### Rule 1: Positive × Positive = Positive

When you multiply two positive numbers, the answer is positive.

**Examples:**
- 5 × 3 = 15
- 8 × 4 = 32
- 12 × 6 = 72

This is what you've always known!

### Rule 2: Negative × Negative = Positive

When you multiply two negative numbers, the answer is **positive**.

**Examples:**
- (-5) × (-3) = 15
- (-8) × (-4) = 32
- (-12) × (-6) = 72

**Why?** Think of it this way: A negative times a negative "reverses the reverse," bringing you back to positive!

**Memory trick:** "Two negatives make a positive!"

### Rule 3: Positive × Negative = Negative

When you multiply a positive and a negative number, the answer is **negative**.

**Examples:**
- 5 × (-3) = -15
- (-8) × 4 = -32
- 12 × (-6) = -72

**Order doesn't matter:** (-3) × 5 = 5 × (-3) = -15 (commutative property still works!)

### Rule 4: Negative × Positive = Negative

Same as Rule 3! One positive and one negative always give a negative product.

**Examples:**
- (-7) × 2 = -14
- 9 × (-5) = -45
- (-10) × 8 = -80

---

## Sign Rules Summary for Multiplication

**Same signs → Positive product**
- (+) × (+) = (+)
- (-) × (-) = (+)

**Different signs → Negative product**
- (+) × (-) = (-)
- (-) × (+) = (-)

**Simple shortcut:** 
- Like signs (same) → Positive
- Unlike signs (different) → Negative

---

## Multiplying with More Than Two Integers

When multiplying multiple integers, count the negative signs!

**Rule:** 
- **Even number of negatives** → Positive result
- **Odd number of negatives** → Negative result

### Examples:

**Example 1:** (-2) × (-3) × (-4)
- Three negatives (odd number)
- Answer will be negative
- Calculate: 2 × 3 × 4 = 24, make it negative
- **Answer: -24**

**Example 2:** (-2) × (-3) × 4
- Two negatives (even number)
- Answer will be positive
- Calculate: 2 × 3 × 4 = 24
- **Answer: 24**

**Example 3:** (-1) × (-1) × (-1) × (-1)
- Four negatives (even number)
- Answer will be positive
- **Answer: 1**

---

## The Rules for Dividing Integers

Great news! **Division uses the SAME sign rules as multiplication!**

### Rule 1: Positive ÷ Positive = Positive

**Examples:**
- 20 ÷ 4 = 5
- 36 ÷ 6 = 6
- 100 ÷ 25 = 4

### Rule 2: Negative ÷ Negative = Positive

**Examples:**
- (-20) ÷ (-4) = 5
- (-36) ÷ (-6) = 6
- (-100) ÷ (-25) = 4

### Rule 3: Positive ÷ Negative = Negative

**Examples:**
- 20 ÷ (-4) = -5
- 36 ÷ (-6) = -6
- 100 ÷ (-25) = -4

### Rule 4: Negative ÷ Positive = Negative

**Examples:**
- (-20) ÷ 4 = -5
- (-36) ÷ 6 = -6
- (-100) ÷ 25 = -4

---

## Sign Rules Summary for Division

**Same signs → Positive quotient**
- (+) ÷ (+) = (+)
- (-) ÷ (-) = (+)

**Different signs → Negative quotient**
- (+) ÷ (-) = (-)
- (-) ÷ (+) = (-)

**Remember:** Division and multiplication use the SAME sign rules!

---

## Properties That Still Work with Integers

### Commutative Property of Multiplication

Order doesn't matter when multiplying!

**Examples:**
- 5 × (-3) = (-3) × 5 = -15
- (-4) × (-7) = (-7) × (-4) = 28

**Note:** Division is NOT commutative!
- 12 ÷ 3 = 4, but 3 ÷ 12 = 0.25 (different!)

### Associative Property of Multiplication

Grouping doesn't matter when multiplying!

**Example:**
- [(-2) × 3] × 4 = (-6) × 4 = -24
- (-2) × [3 × 4] = (-2) × 12 = -24
- Same answer!

### Multiplication by Zero

Any number times zero equals zero!

**Examples:**
- 0 × 5 = 0
- (-7) × 0 = 0
- 0 × (-100) = 0

### Multiplication by One

Any number times one equals itself!

**Examples:**
- 1 × 8 = 8
- (-6) × 1 = -6
- 1 × (-15) = -15

### Multiplication by Negative One

Multiplying by -1 gives you the opposite!

**Examples:**
- (-1) × 5 = -5
- (-1) × (-8) = 8
- (-1) × 0 = 0

---

## Real-World Applications

### Temperature Changes

**Problem:** The temperature drops 3°F per hour for 4 hours. What's the total change?

**Solution:** 
- Drop means negative: -3°F per hour
- For 4 hours: 4 × (-3) = -12°F
- **Answer: The temperature dropped 12°F total**

### Banking (Debt)

**Problem:** You withdraw $25 from your account 3 times. What's the total change in your balance?

**Solution:**
- Withdrawal is negative: -$25
- Three times: 3 × (-25) = -$75
- **Answer: Your balance decreased by $75**

### Elevators (Going Down)

**Problem:** An elevator descends 5 floors per minute for 3 minutes. Where is it relative to the starting floor?

**Solution:**
- Descending is negative: -5 floors
- For 3 minutes: 3 × (-5) = -15 floors
- **Answer: 15 floors below the starting point**

### Sharing Debt

**Problem:** Four friends owe $60 total. If they split it equally, what does each person owe?

**Solution:**
- Debt is negative: -$60
- Divide by 4: (-60) ÷ 4 = -$15
- **Answer: Each person owes $15 (or has -$15)**

---

## Order of Operations with Integers

Remember PEMDAS still applies!

**Example:** -3 × 5 - (-2) × 4

**Step 1:** Multiply first (left to right)
- -3 × 5 = -15
- (-2) × 4 = -8

**Step 2:** Rewrite
- -15 - (-8)

**Step 3:** Subtract (subtracting a negative = add)
- -15 + 8 = -7

**Answer: -7**

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Thinking negative × negative = negative
- **Wrong:** (-3) × (-4) = -12
- **Right:** (-3) × (-4) = 12 (two negatives make a positive!)

❌ **Mistake 2:** Forgetting the sign with zero
- **Wrong:** 0 ÷ (-5) = -0 (there's no negative zero!)
- **Right:** 0 ÷ (-5) = 0

❌ **Mistake 3:** Mixing up multiplication and addition rules
- Addition: -3 + (-4) = -7 (add and keep negative)
- Multiplication: (-3) × (-4) = 12 (different rule - makes positive!)

❌ **Mistake 4:** Not counting negatives in long problems
- **Wrong:** (-1) × (-2) × (-3) = 6
- **Right:** (-1) × (-2) × (-3) = -6 (three negatives = odd = negative!)

❌ **Mistake 5:** Forgetting parentheses with negatives
- 5 × -3 (ambiguous!)
- 5 × (-3) = -15 (clear!)

---

## Practice Strategies

**Strategy 1: Determine the sign first**
1. Look at the signs (same or different?)
2. Decide if answer is positive or negative
3. Then multiply/divide the numbers normally
4. Apply the sign

**Example:** (-12) ÷ 4
1. Different signs → negative answer
2. 12 ÷ 4 = 3
3. Make it negative: -3

**Strategy 2: Use patterns**
- 5 × 3 = 15
- 5 × (-3) = -15
- (-5) × 3 = -15
- (-5) × (-3) = 15

See the pattern? Only the last one (two negatives) is positive!

**Strategy 3: Think of real-world scenarios**
- Debt (negative) shared among people (division)
- Temperature dropping (negative) over time (multiplication)
- These make the rules make sense!

---

## Connection to Fractions

These same sign rules apply when multiplying and dividing fractions!

**Examples:**
- (-1/2) × (-1/3) = 1/6 (two negatives = positive)
- (3/4) ÷ (-1/2) = -3/2 (different signs = negative)

You'll use these rules throughout algebra!

---

## Why These Rules Work

**Multiplication by -1:**
- Think of -1 × 5 as "the opposite of 5" = -5
- Then -1 × (-5) is "the opposite of the opposite of 5" = 5
- That's why negative × negative = positive!

**Pattern thinking:**
- 3 × 2 = 6
- 3 × 1 = 3
- 3 × 0 = 0
- 3 × (-1) = -3 (decreasing by 3 each time)
- 3 × (-2) = -6 (pattern continues!)

---

## Quick Reference Chart

| Operation | Signs | Result | Example |
|-----------|-------|--------|---------|
| Multiply | Same | + | (-5) × (-3) = 15 |
| Multiply | Different | - | 5 × (-3) = -15 |
| Divide | Same | + | (-20) ÷ (-4) = 5 |
| Divide | Different | - | 20 ÷ (-4) = -5 |

**Master these rules and you'll be ready for algebra, equations, and advanced math!**`
    }
  });
  console.log('✅ Updated: multiplying-dividing-integers');

  // Topic 2: Rational Number Operations
  await prisma.topic.updateMany({
    where: {
      slug: 'rational-number-operations'
    },
    data: {
      textContent: `# Rational Number Operations

A **rational number** is any number that can be written as a fraction of two integers. This includes integers, fractions, and terminating or repeating decimals. In this topic, you'll learn to add, subtract, multiply, and divide all types of rational numbers!

---

## What Are Rational Numbers?

**Definition:** A rational number can be written as a/b where a and b are integers and b ≠ 0.

**Examples of Rational Numbers:**
- Integers: 5 = 5/1, -3 = -3/1, 0 = 0/1
- Fractions: 2/3, -5/8, 7/4
- Decimals that terminate: 0.5 = 1/2, 0.75 = 3/4
- Decimals that repeat: 0.333... = 1/3, 0.666... = 2/3

**NOT Rational:**
- π (pi = 3.14159..., never ends, never repeats)
- √2 (square root of 2 = 1.41421..., never ends, never repeats)

---

## Adding and Subtracting Rational Numbers

The key is to work with common denominators!

### Adding Fractions (Same Denominator)

When denominators are the same, just add the numerators!

**Example:** 2/7 + 3/7 = (2 + 3)/7 = 5/7

**With negatives:** -1/5 + 3/5 = (-1 + 3)/5 = 2/5

### Adding Fractions (Different Denominators)

Find a common denominator first!

**Example:** 1/3 + 1/4

**Step 1:** Find LCD (Least Common Denominator) = 12

**Step 2:** Convert both fractions
- 1/3 = 4/12
- 1/4 = 3/12

**Step 3:** Add
- 4/12 + 3/12 = 7/12

**Answer: 7/12**

### Subtracting Fractions

Same process as addition!

**Example:** 5/6 - 1/4

**Step 1:** LCD = 12

**Step 2:** Convert
- 5/6 = 10/12
- 1/4 = 3/12

**Step 3:** Subtract
- 10/12 - 3/12 = 7/12

**Answer: 7/12**

### Adding and Subtracting with Negative Fractions

Use the integer rules you learned!

**Example 1:** -2/5 + (-1/5) = (-2 + -1)/5 = -3/5

**Example 2:** -3/4 - 1/4 = (-3 - 1)/4 = -4/4 = -1

**Example 3:** 2/3 - (-1/3) = 2/3 + 1/3 = 3/3 = 1

**Remember:** Subtracting a negative = adding a positive!

---

## Multiplying Rational Numbers

Multiplying fractions is easier than adding them - no common denominator needed!

### Basic Fraction Multiplication

**Rule:** Multiply numerators, multiply denominators

**Example:** 2/3 × 3/5 = (2 × 3)/(3 × 5) = 6/15 = 2/5 (simplified)

### Simplifying Before Multiplying

Cancel common factors first to make calculation easier!

**Example:** 4/9 × 3/8

**Before canceling:** (4 × 3)/(9 × 8) = 12/72 = 1/6

**After canceling:**
- 4 and 8 share factor 4: 4/8 = 1/2
- 3 and 9 share factor 3: 3/9 = 1/3
- (1 × 1)/(3 × 2) = 1/6 (much easier!)

### Multiplying with Negative Fractions

Use the sign rules from integer multiplication!

**Same signs → Positive:**
- (2/3) × (1/4) = 2/12 = 1/6
- (-2/3) × (-1/4) = 2/12 = 1/6

**Different signs → Negative:**
- (2/3) × (-1/4) = -2/12 = -1/6
- (-2/3) × (1/4) = -2/12 = -1/6

### Multiplying Mixed Numbers

Convert to improper fractions first!

**Example:** 2 1/3 × 1 1/2

**Step 1:** Convert
- 2 1/3 = 7/3
- 1 1/2 = 3/2

**Step 2:** Multiply
- (7 × 3)/(3 × 2) = 21/6

**Step 3:** Simplify
- 21/6 = 7/2 = 3 1/2

**Answer: 3 1/2**

---

## Dividing Rational Numbers

Remember: Dividing by a fraction means multiplying by its reciprocal!

### Basic Fraction Division

**Rule:** Keep, Change, Flip (KCF)
1. Keep the first fraction
2. Change division to multiplication
3. Flip the second fraction (find reciprocal)

**Example:** 2/3 ÷ 4/5

**Step 1:** KCF
- 2/3 × 5/4

**Step 2:** Multiply
- (2 × 5)/(3 × 4) = 10/12 = 5/6

**Answer: 5/6**

### Dividing with Negative Fractions

Use the division sign rules!

**Same signs → Positive:**
- (3/4) ÷ (1/2) = 3/4 × 2/1 = 6/4 = 3/2
- (-3/4) ÷ (-1/2) = 3/4 × 2/1 = 3/2

**Different signs → Negative:**
- (3/4) ÷ (-1/2) = 3/4 × (-2/1) = -6/4 = -3/2
- (-3/4) ÷ (1/2) = -3/4 × 2/1 = -3/2

### Dividing Mixed Numbers

Convert to improper fractions, then use KCF!

**Example:** 3 1/4 ÷ 1 1/2

**Step 1:** Convert
- 3 1/4 = 13/4
- 1 1/2 = 3/2

**Step 2:** KCF
- 13/4 × 2/3

**Step 3:** Multiply
- (13 × 2)/(4 × 3) = 26/12 = 13/6

**Step 4:** Convert back
- 13/6 = 2 1/6

**Answer: 2 1/6**

---

## Working with Decimals

Decimals are rational numbers too!

### Adding and Subtracting Decimals

**Rule:** Line up the decimal points!

**Example:** 3.45 + 12.8 - 5.23

Step 1: Line up
  3.45
 12.80
+ -5.23
-------
 10.02

**Answer: 10.02**

### Multiplying Decimals

Multiply as if they were whole numbers, then place the decimal!

**Example:** 2.5 × 1.3

**Step 1:** Multiply 25 × 13 = 325

**Step 2:** Count decimal places (1 + 1 = 2)

**Step 3:** Place decimal: 3.25

**Answer: 3.25**

### Dividing Decimals

Make the divisor a whole number!

**Example:** 7.2 ÷ 0.8

**Step 1:** Multiply both by 10
- 72 ÷ 8

**Step 2:** Divide
- 72 ÷ 8 = 9

**Answer: 9**

---

## Converting Between Forms

### Decimal to Fraction

**Terminating Decimal:**

Example: 0.75
- Place over power of 10: 75/100
- Simplify: 3/4

**Repeating Decimal:**

Example: 0.333... = 1/3 (you'll learn the method for this later!)

Common ones to memorize:
- 0.333... = 1/3
- 0.666... = 2/3
- 0.111... = 1/9

### Fraction to Decimal

Divide the numerator by the denominator!

**Example:** 3/8
- 3 ÷ 8 = 0.375

**Example:** 1/3
- 1 ÷ 3 = 0.333...

---

## Order of Operations with Rational Numbers

PEMDAS still applies!

**Example:** 1/2 + 3/4 × 2/3

**Step 1:** Multiply first
- 3/4 × 2/3 = 6/12 = 1/2

**Step 2:** Add
- 1/2 + 1/2 = 1

**Answer: 1**

**Example with parentheses:** (2/5 + 1/5) × 3

**Step 1:** Parentheses first
- 2/5 + 1/5 = 3/5

**Step 2:** Multiply
- 3/5 × 3 = 9/5 = 1 4/5

**Answer: 1 4/5**

---

## Real-World Applications

### Cooking (Scaling Recipes)

**Problem:** A recipe calls for 2/3 cup of flour. You want to make 1.5 times the recipe. How much flour?

**Solution:**
- 2/3 × 1.5 = 2/3 × 3/2 = 6/6 = 1 cup

**Answer: 1 cup**

### Shopping (Discounts)

**Problem:** A $45 shirt is on sale for 2/5 off. What's the discount amount?

**Solution:**
- 45 × 2/5 = 90/5 = $18 discount

**Answer: $18 off (sale price = $27)**

### Construction (Board Cutting)

**Problem:** A 10.5-foot board is cut into pieces 1.75 feet long. How many pieces?

**Solution:**
- 10.5 ÷ 1.75 = 6

**Answer: 6 pieces**

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Adding denominators
- **Wrong:** 1/4 + 1/4 = 2/8
- **Right:** 1/4 + 1/4 = 2/4 = 1/2

❌ **Mistake 2:** Not finding LCD
- **Wrong:** 1/3 + 1/4 = 2/7
- **Right:** 1/3 + 1/4 = 4/12 + 3/12 = 7/12

❌ **Mistake 3:** Forgetting to flip when dividing
- **Wrong:** 2/3 ÷ 1/2 = (2 × 1)/(3 × 2) = 2/6
- **Right:** 2/3 ÷ 1/2 = 2/3 × 2/1 = 4/3

❌ **Mistake 4:** Decimal placement errors
- **Wrong:** 2.5 × 1.3 = 32.5
- **Right:** 2.5 × 1.3 = 3.25

❌ **Mistake 5:** Sign errors with negatives
- **Wrong:** -1/2 + (-1/2) = 1
- **Right:** -1/2 + (-1/2) = -1

---

## Practice Strategy

**For Fractions:**
1. Check if you need common denominators (add/subtract = yes, multiply/divide = no)
2. Simplify before calculating when possible
3. Convert mixed numbers to improper fractions
4. Simplify your final answer

**For Decimals:**
1. Line up decimal points (add/subtract)
2. Count decimal places (multiply)
3. Move decimals to make whole numbers (divide)
4. Check that your answer makes sense

**For Signs:**
1. Determine sign of answer first (same → +, different → -)
2. Then do the operation
3. Apply the sign

---

## Summary

**Rational numbers** include all fractions, integers, and terminating/repeating decimals.

**Operations:**
- **Add/Subtract:** Need common denominators for fractions, line up decimals
- **Multiply:** Multiply across, no common denominator needed
- **Divide:** Use Keep-Change-Flip (multiply by reciprocal)

**Sign Rules:** Same as integers!
- Same signs → Positive
- Different signs → Negative

Master rational number operations and you're ready for solving equations, working with ratios, and tackling algebra!`
    }
  });
  console.log('✅ Updated: rational-number-operations');

  // Topic 3: Percent of Change
  await prisma.topic.updateMany({
    where: {
      slug: 'percent-of-change'
    },
    data: {
      textContent: `# Percent of Change

Have you ever wondered how much something increased or decreased? Percent of change tells us exactly that - how much a quantity changed relative to its original amount. This is everywhere in real life: price changes, population growth, sale discounts, and more!

---

## What Is Percent of Change?

**Percent of change** tells us how much a quantity has increased or decreased as a percentage of the original amount.

**Formula:**

Percent of Change = (Amount of Change / Original Amount) × 100%

Or: (New - Original) / Original × 100%

---

## Two Types of Percent of Change

### Percent Increase

When a value gets **larger**.

**Examples:**
- Population grows from 5,000 to 5,500
- Price raises from $20 to $25
- Temperature rises from 60°F to 75°F

### Percent Decrease

When a value gets **smaller**.

**Examples:**
- Price drops from $50 to $40 (sale!)
- Population shrinks from 10,000 to 8,000
- Weight reduces from 150 lbs to 135 lbs

---

## Calculating Percent Increase

**Steps:**
1. Find the amount of increase (New - Original)
2. Divide by the original amount
3. Multiply by 100 to convert to percent

### Example 1: Price Increase

A shirt costs $20. The price increases to $25. What is the percent increase?

**Step 1:** Amount of increase
- $25 - $20 = $5

**Step 2:** Divide by original
- $5 / $20 = 0.25

**Step 3:** Convert to percent
- 0.25 × 100% = 25%

**Answer: The price increased by 25%**

### Example 2: Population Growth

A town's population was 8,000 last year. This year it's 8,800. Find the percent increase.

**Step 1:** Increase
- 8,800 - 8,000 = 800

**Step 2:** Divide by original
- 800 / 8,000 = 0.1

**Step 3:** Convert to percent
- 0.1 × 100% = 10%

**Answer: Population increased by 10%**

### Example 3: Test Score Improvement

Maria scored 72 on her first test and 90 on her second test. What was her percent increase?

**Step 1:** Increase
- 90 - 72 = 18 points

**Step 2:** Divide by original
- 18 / 72 = 0.25

**Step 3:** Convert to percent
- 0.25 × 100% = 25%

**Answer: Her score increased by 25%**

---

## Calculating Percent Decrease

**Steps:**
1. Find the amount of decrease (Original - New)
2. Divide by the original amount
3. Multiply by 100 to convert to percent

### Example 1: Sale Price

A jacket originally costs $80 but is on sale for $60. What is the percent decrease?

**Step 1:** Amount of decrease
- $80 - $60 = $20

**Step 2:** Divide by original
- $20 / $80 = 0.25

**Step 3:** Convert to percent
- 0.25 × 100% = 25%

**Answer: The price decreased by 25% (25% off!)**

### Example 2: Weight Loss

Sam weighed 180 pounds and now weighs 162 pounds. Find the percent decrease.

**Step 1:** Decrease
- 180 - 162 = 18 pounds

**Step 2:** Divide by original
- 18 / 180 = 0.1

**Step 3:** Convert to percent
- 0.1 × 100% = 10%

**Answer: Weight decreased by 10%**

### Example 3: Temperature Drop

The temperature was 85°F and dropped to 68°F. What was the percent decrease?

**Step 1:** Decrease
- 85 - 68 = 17°F

**Step 2:** Divide by original
- 17 / 85 = 0.2

**Step 3:** Convert to percent
- 0.2 × 100% = 20%

**Answer: Temperature decreased by 20%**

---

## Important: Always Use the ORIGINAL Amount!

**Common mistake:** Using the new amount as the denominator.

**Example:** Price drops from $50 to $40.

❌ **WRONG:** $10 / $40 = 0.25 = 25%

✓ **RIGHT:** $10 / $50 = 0.20 = 20%

**Always divide by the original (starting) amount!**

---

## Finding the New Amount After a Percent Change

Sometimes you know the percent change and need to find the new amount.

### Percent Increase

**Method:** New Amount = Original × (1 + percent increase as decimal)

**Example:** A $40 item increases by 15%. What's the new price?

**Solution:**
- 15% = 0.15
- New price = $40 × (1 + 0.15) = $40 × 1.15 = $46

**Answer: $46**

**Why it works:** 100% of original + 15% increase = 115% of original = 1.15 × original

### Percent Decrease

**Method:** New Amount = Original × (1 - percent decrease as decimal)

**Example:** A $60 item decreases by 20%. What's the new price?

**Solution:**
- 20% = 0.20
- New price = $60 × (1 - 0.20) = $60 × 0.80 = $48

**Answer: $48**

**Why it works:** 100% of original - 20% decrease = 80% of original = 0.80 × original

---

## Real-World Applications

### Shopping (Sales)

**Problem:** A $120 coat is on sale for 35% off. What's the sale price?

**Solution:**
- Sale price = $120 × (1 - 0.35) = $120 × 0.65 = $78

**Answer: $78**

### Investing (Gains)

**Problem:** You invest $1,000 and it grows by 8%. What's your new total?

**Solution:**
- New total = $1,000 × (1 + 0.08) = $1,000 × 1.08 = $1,080

**Answer: $1,080**

### Sports Statistics

**Problem:** A player's average went from 15 points per game to 18 points per game. What's the percent increase?

**Solution:**
- Increase: 18 - 15 = 3 points
- Percent: (3 / 15) × 100% = 0.2 × 100% = 20%

**Answer: 20% increase**

### Population Changes

**Problem:** A city's population was 250,000 and decreased to 225,000. What's the percent decrease?

**Solution:**
- Decrease: 250,000 - 225,000 = 25,000
- Percent: (25,000 / 250,000) × 100% = 0.1 × 100% = 10%

**Answer: 10% decrease**

---

## Markup and Markdown

### Markup (Percent Increase)

**Markup** is when a store adds to the cost to set a selling price.

**Example:** A store buys a shirt for $20 and marks it up 60%. What's the selling price?

**Solution:**
- Selling price = $20 × (1 + 0.60) = $20 × 1.60 = $32

**Answer: $32**

### Markdown (Percent Decrease)

**Markdown** is when a store reduces the price (a discount).

**Example:** A $50 item is marked down 30%. What's the sale price?

**Solution:**
- Sale price = $50 × (1 - 0.30) = $50 × 0.70 = $35

**Answer: $35**

---

## Multiple Percent Changes

When something changes multiple times, you can't just add the percents!

**Example:** A $100 item increases by 10%, then decreases by 10%. What's the final price?

**Wrong way:** +10% - 10% = 0%, so still $100? NO!

**Right way:**
- After first change: $100 × 1.10 = $110
- After second change: $110 × 0.90 = $99

**Answer: $99 (not $100!)**

**Why?** The 10% decrease is calculated from $110, not $100!
- 10% of $110 = $11, so $110 - $11 = $99

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Using the new amount as the original
- **Wrong:** $60 increases to $75. Change = $15 / $75 = 20%
- **Right:** $15 / $60 = 25%

❌ **Mistake 2:** Forgetting to multiply by 100
- **Wrong:** Percent change = 0.25 (this is a decimal, not a percent!)
- **Right:** Percent change = 0.25 × 100% = 25%

❌ **Mistake 3:** Adding percents for multiple changes
- **Wrong:** +20% then -10% = +10% total
- **Right:** Calculate each change separately!

❌ **Mistake 4:** Confusing increase vs decrease
- Increase: New > Original (divide by original)
- Decrease: New < Original (divide by original)
- Always divide by ORIGINAL!

❌ **Mistake 5:** Sign errors
- Amount of change should always be positive
- The word "increase" or "decrease" tells you the direction

---

## Practice Tips

**Tip 1: Use the formula relationship**

Think of it like this: Amount of Change = Original × Percent

If you know any two values, you can find the third!

**Tip 2: Check reasonableness**
- 50% increase means adding half the original (50 → 75)
- 50% decrease means subtracting half the original (50 → 25)
- 100% increase means doubling (50 → 100)
- Does your answer make sense?

**Tip 3: Identify what's given**
- Original amount?
- New amount?
- Percent change?
- What are you finding?

**Tip 4: Set up carefully**
- Write the formula
- Identify the original amount
- Calculate the change
- Show all steps

---

## Quick Reference Formulas

**Finding Percent of Change:**
- Percent Change = (Amount of Change / Original) × 100%
- Percent Change = (|New - Original| / Original) × 100%

**Finding New Amount:**
- Percent Increase: New = Original × (1 + rate)
- Percent Decrease: New = Original × (1 - rate)

**Finding Original Amount:**
- From Increase: Original = New / (1 + rate)
- From Decrease: Original = New / (1 - rate)

---

## Summary

**Percent of change** measures how much something increased or decreased compared to the original amount.

**Key Points:**
- Always divide by the **original** amount
- Percent increase: new is larger
- Percent decrease: new is smaller
- Multiple changes are calculated separately
- Used everywhere: sales, sports, population, stocks, etc.

Master percent of change and you'll be able to analyze real-world data, understand sales and discounts, and make informed decisions about money and statistics!`
    }
  });
  console.log('✅ Updated: percent-of-change');

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
