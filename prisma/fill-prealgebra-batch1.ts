import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Pre-Algebra topics - Batch 1 (3 topics)...\n');

  // Topic 1: Comparing and Ordering Rational Numbers
  await prisma.topic.updateMany({
    where: {
      slug: 'comparing-ordering-rational'
    },
    data: {
      textContent: `# Comparing and Ordering Rational Numbers

How do you compare different types of numbers - positive, negative, fractions, and decimals? Understanding how to order rational numbers is essential for working with real-world quantities like temperatures, debts, and measurements!

---

## What Are Rational Numbers?

**Rational numbers** are numbers that can be written as a fraction a/b where a and b are integers and b ≠ 0.

**Examples of rational numbers:**
- Integers: 5 = 5/1, -3 = -3/1, 0 = 0/1
- Fractions: 1/2, -3/4, 7/8
- Decimals: 0.5 = 1/2, -2.25 = -9/4, 0.333... = 1/3

**Think of it as:** Any number you can write as a fraction!

---

## The Number Line

The **number line** helps us visualize and compare numbers.

**Key features:**
- Zero (0) in the middle
- Positive numbers to the right
- Negative numbers to the left
- Numbers increase as you move right
- Numbers decrease as you move left

**Example number line:**
   -3  -2  -1   0   1   2   3

**Rule:** The number farther to the RIGHT is greater!

---

## Comparing Positive Numbers

For positive numbers, compare as usual:

**Whole numbers:**
Compare digit by digit from left to right
- 24 > 18 (2 tens > 1 ten)
- 135 < 247

**Decimals:**
Compare place by place
- 3.7 > 3.5 (7 tenths > 5 tenths)
- 2.45 < 2.5 (because 2.50 > 2.45)

**Fractions:**
- Same denominator: Compare numerators
  * 5/8 > 3/8
- Different denominators: Find common denominator or convert to decimals
  * 1/2 vs 2/5: Convert to 5/10 vs 4/10, so 1/2 > 2/5

---

## Comparing Negative Numbers

**KEY RULE:** For negative numbers, the one closer to zero is GREATER!

**Think:** Owing $5 is better than owing $10

**Examples:**
- -5 > -10 (negative 5 is greater than negative 10)
- -2 > -8
- -1.5 > -2.3

**On the number line:**
   -10  -8  -5  -2  -1.5  0
  (smaller numbers)   →  (larger numbers)

**Common mistake:** Don't just compare the numbers without the negative signs!

---

## Comparing Positive and Negative

**RULE:** Any positive number is GREATER than any negative number!

**Examples:**
- 1 > -100 (even though 100 > 1)
- 0.001 > -5
- 1/4 > -10

**Remember:** Zero is greater than any negative, but less than any positive
- 0 > -5
- 3 > 0

---

## Strategies for Comparing

**Strategy 1: Use the number line**
- Plot both numbers
- The one to the right is greater

**Strategy 2: Convert to same form**
- Convert fractions to decimals
- Or convert all to fractions with common denominator

**Strategy 3: Think about context**
- Temperature: 5° is warmer than -3°
- Money: $5 is more than owing $3 (or -$3)
- Elevation: 100 ft above sea level > 50 ft below (-50 ft)

---

## Ordering Multiple Numbers

**To order from least to greatest:**

**Step 1:** Separate positives and negatives
**Step 2:** Order negatives (remember: more negative = smaller!)
**Step 3:** Include zero if present
**Step 4:** Order positives (as normal)
**Step 5:** Combine: negatives, zero, positives

**Example:** Order: 3, -5, 0, -2, 7, -1

Negatives: -5, -2, -1
Zero: 0
Positives: 3, 7

**Answer: -5, -2, -1, 0, 3, 7**

---

## Comparing Fractions and Decimals

**Method 1: Convert fractions to decimals**

Example: Compare 3/4 and 0.7

3/4 = 3 ÷ 4 = 0.75
0.75 > 0.7

**So 3/4 > 0.7**

**Method 2: Convert decimals to fractions**

Example: Compare 0.6 and 2/3

0.6 = 6/10 = 3/5
2/3 vs 3/5

Common denominator: 15
2/3 = 10/15
3/5 = 9/15

**So 2/3 > 0.6**

---

## Comparing Mixed Numbers

**Mixed numbers** combine whole numbers and fractions.

**Strategy:** Compare whole number parts first!

**Example:** 3 1/4 vs 2 3/4

Whole parts: 3 > 2

**So 3 1/4 > 2 3/4** (no need to compare fractions!)

**If whole parts are equal, compare fractions:**

2 3/4 vs 2 1/2
Whole parts equal, so compare 3/4 vs 1/2
3/4 > 2/4

**So 2 3/4 > 2 1/2**

---

## Using Inequality Symbols

**Symbols:**
- **>** means "greater than"
- **<** means "less than"
- **≥** means "greater than or equal to"
- **≤** means "less than or equal to"

**Remember:**
- The symbol points to the smaller number
- Think of it as an alligator eating the bigger number!

**Examples:**
- 5 > 3 (5 is greater than 3)
- -2 < 1 (negative 2 is less than 1)
- 7 ≥ 7 (7 is greater than or equal to 7)

---

## Absolute Value and Comparing

**Absolute value** is the distance from zero (always positive or zero).

**Symbol:** |x|

**Be careful:** |-5| = 5, which is GREATER than -5!

**Comparing with absolute value:**
- |-8| vs -8: 8 > -8 (absolute value made it positive)
- |-3| vs |3|: 3 = 3 (equal)
- |-6| vs |-2|: 6 > 2

---

## Real-World Applications

**Temperature:**
- Which is colder: -10°F or -5°F?
- Answer: -10°F (more negative = colder)

**Elevation:**
- Death Valley: -282 feet (below sea level)
- Denver: 5,280 feet (above sea level)
- Denver is higher (5,280 > -282)

**Money/Debt:**
- Bank balance: -$50 (overdrawn)
- vs Bank balance: $20
- $20 > -$50 (having money > owing money)

**Golf scores:**
- Under par: -3 (3 under)
- vs -5 (5 under)
- -5 < -3 (more negative is better in golf!)

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Thinking -10 > -5
- Wrong: Larger number without sign
- Right: -5 > -10 (closer to zero is greater)

❌ **Mistake 2:** Confusing symbols
- Wrong: 3 < 5 means "3 greater than 5"
- Right: 3 < 5 means "3 is less than 5"

❌ **Mistake 3:** Forgetting zero counts!
- Zero is greater than any negative
- Zero is less than any positive

❌ **Mistake 4:** Comparing only numerators
- Wrong: 1/8 > 1/4 (8 > 4)
- Right: 1/4 > 1/8 (must consider whole fraction!)

---

## Problem-Solving Strategy

**To compare two numbers:**
1. Identify signs (positive/negative)
2. If different signs, positive is greater
3. If same sign:
   - Both positive: Compare normally
   - Both negative: Number closer to zero is greater
4. Convert to same form if needed (decimals or fractions)
5. Use number line if unsure

**To order multiple numbers:**
1. Separate into negatives, zero, positives
2. Order each group
3. Combine: negatives (least to greatest), zero, positives (least to greatest)

---

## Quick Reference

**Positive vs Negative:**
Any positive > zero > any negative

**Two Negatives:**
-2 > -5 (less negative is greater)

**Fraction Comparison:**
Same denominator → compare numerators
Different denominators → find common denominator or convert to decimals

**Ordering:**
Negatives → Zero → Positives

**Symbols:**
- < points to smaller
- > points to smaller  
- Think: alligator eats bigger number

---

## Practice Tips

**Tip 1:** Use a number line
- Draw it out when unsure
- Visualize the position

**Tip 2:** Convert to decimals
- Often easier than finding common denominators
- Use calculator if allowed

**Tip 3:** Think real-world
- Temperature, money, elevation
- Makes negative numbers more intuitive

**Tip 4:** Double-check negatives
- Most common source of errors!
- Remember: closer to zero = greater

---

## Summary

**Comparing rational numbers:**
- Use the number line (right = greater)
- Positive > zero > negative
- For negatives: closer to zero is greater
- Convert to same form when needed

**Ordering rational numbers:**
1. Separate by sign
2. Order each group
3. Combine: negatives, zero, positives

**Key skills:**
- Understanding the number line
- Comparing positive and negative numbers
- Converting between fractions and decimals
- Using inequality symbols correctly

Mastering these skills helps you work with all types of real numbers in mathematics and real life!`
    }
  });
  console.log('✅ Updated: comparing-ordering-rational');

  // Topic 2: Fraction and Decimal Conversions
  await prisma.topic.updateMany({
    where: {
      slug: 'fraction-decimal-conversions'
    },
    data: {
      textContent: `# Fraction and Decimal Conversions

How do you switch between fractions and decimals? These two forms represent the same values but in different ways - and being able to convert between them is a fundamental math skill!

---

## Why Convert Between Forms?

**Different situations call for different forms:**
- **Fractions:** Better for exact values (1/3, 2/5)
- **Decimals:** Easier to compare and compute (0.5, 0.75)
- **Real life:** Mix of both (recipes use fractions, money uses decimals)

**Being fluent in both gives you flexibility!**

---

## Converting Fractions to Decimals

**Method:** Divide the numerator by the denominator

**Rule:** a/b = a ÷ b

---

## Easy Fraction to Decimal Conversions

**Memorize these common fractions:**

**Halves:**
- 1/2 = 0.5

**Fourths:**
- 1/4 = 0.25
- 3/4 = 0.75

**Fifths:**
- 1/5 = 0.2
- 2/5 = 0.4
- 3/5 = 0.6
- 4/5 = 0.8

**Eighths:**
- 1/8 = 0.125
- 3/8 = 0.375
- 5/8 = 0.625
- 7/8 = 0.875

**Tenths:**
- 1/10 = 0.1
- 3/10 = 0.3
- 7/10 = 0.7
- 9/10 = 0.9

---

## Step-by-Step: Fraction to Decimal

**Example 1:** Convert 3/8 to a decimal

**Step 1:** Divide numerator by denominator
3 ÷ 8 = 0.375

**Answer: 3/8 = 0.375**

**Example 2:** Convert 7/20 to a decimal

**Step 1:** Divide
7 ÷ 20 = 0.35

**Answer: 7/20 = 0.35**

**Example 3:** Convert 5/6 to a decimal

**Step 1:** Divide
5 ÷ 6 = 0.8333...

**This creates a repeating decimal!**

**Answer: 5/6 = 0.83̄ or 0.833...**

---

## Terminating vs Repeating Decimals

**Terminating decimal:**
- Ends after a finite number of digits
- Example: 1/4 = 0.25

**Repeating decimal:**
- Digits repeat forever in a pattern
- Example: 1/3 = 0.333... = 0.3̄

**Notation for repeating:**
- Bar over repeating digit(s): 0.3̄
- Three dots: 0.333...

**Which fractions terminate?**
Fractions terminate when the denominator (in lowest terms) has ONLY factors of 2 and/or 5.

**Examples:**
- 1/2: Terminates (2 is a factor of 10)
- 1/5: Terminates (5 is a factor of 10)
- 1/8: Terminates (8 = 2³)
- 1/3: Repeats (3 is not a factor of 10)
- 1/6: Repeats (6 = 2×3, has factor 3)

---

## Converting Decimals to Fractions

**Method:** Use place value!

**Steps:**
1. Write digits as numerator
2. Write place value as denominator
3. Simplify if possible

---

## Step-by-Step: Decimal to Fraction

**Example 1:** Convert 0.6 to a fraction

**Step 1:** 6 is in tenths place
0.6 = 6/10

**Step 2:** Simplify
6/10 = 3/5

**Answer: 0.6 = 3/5**

**Example 2:** Convert 0.75 to a fraction

**Step 1:** 75 is in hundredths place
0.75 = 75/100

**Step 2:** Simplify
75/100 = 3/4

**Answer: 0.75 = 3/4**

**Example 3:** Convert 0.125 to a fraction

**Step 1:** 125 is in thousandths place
0.125 = 125/1000

**Step 2:** Simplify
125/1000 = 1/8

**Answer: 0.125 = 1/8**

---

## Place Value Review

**Decimal places and denominators:**
- Tenths (0.#): denominator is 10
- Hundredths (0.##): denominator is 100
- Thousandths (0.###): denominator is 1,000
- Ten-thousandths (0.####): denominator is 10,000

**Example:** 0.345
- 345 in the numerator
- Thousandths place (3 digits after decimal)
- Denominator is 1,000
- 0.345 = 345/1000 = 69/200 (simplified)

---

## Converting Repeating Decimals

**For simple repeating decimals like 0.333...:**

**Shortcut:** Know common patterns
- 0.333... = 1/3
- 0.666... = 2/3
- 0.111... = 1/9
- 0.222... = 2/9

**For other repeating decimals, use algebra (advanced):**

Example: 0.454545... = 45/99 = 5/11

---

## Mixed Numbers and Decimals

**Converting mixed numbers to decimals:**

**Example:** 2 3/4 to decimal

**Step 1:** Keep whole number: 2
**Step 2:** Convert fraction: 3/4 = 0.75  
**Step 3:** Combine: 2 + 0.75 = 2.75

**Answer: 2 3/4 = 2.75**

**Converting decimals to mixed numbers:**

**Example:** 3.6 to mixed number

**Step 1:** Whole number is 3
**Step 2:** Decimal part: 0.6 = 6/10 = 3/5
**Step 3:** Combine: 3 3/5

**Answer: 3.6 = 3 3/5**

---

## Simplifying Fractions from Decimals

**Always simplify your final answer!**

**Example:** 0.50

0.50 = 50/100

Simplify by dividing both by 50:
50/100 = 1/2

**Shortcuts for simplifying:**
- Both even? Divide by 2
- End in 0 or 5? Divide by 5
- Find GCF (Greatest Common Factor)

---

## Real-World Applications

**Money:**
- $0.25 = 1/4 of a dollar (quarter)
- $0.50 = 1/2 of a dollar (half dollar)
- $0.75 = 3/4 of a dollar

**Measurements:**
- 0.5 inches = 1/2 inch
- 2.25 pounds = 2 1/4 pounds
- 0.333 miles = about 1/3 mile

**Sports:**
- Batting average .250 = 1/4 (hit 1 out of 4 times)
- Free throw percentage 0.75 = 3/4

**Cooking:**
- 0.5 cup = 1/2 cup
- 1.25 cups = 1 1/4 cups

---

## Using a Calculator

**To convert fraction to decimal:**
- Divide numerator by denominator
- Example: 3/8 → Enter 3 ÷ 8 = 0.375

**To convert decimal to fraction:**
- Calculator won't do this automatically!
- Use place value method by hand
- Or use online converters for complex decimals

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Wrong place value
- Wrong: 0.5 = 5/100
- Right: 0.5 = 5/10 = 1/2

❌ **Mistake 2:** Forgetting to simplify
- Wrong: 0.4 = 4/10 (not simplified)
- Right: 0.4 = 4/10 = 2/5

❌ **Mistake 3:** Misplacing decimal point
- Wrong: 3/4 = 3 ÷ 4 = 3.4
- Right: 3/4 = 3 ÷ 4 = 0.75

❌ **Mistake 4:** Treating whole and decimal separately
- Wrong: 2.5 = 2 and 5/10 kept separate
- Right: 2.5 = 2 5/10 = 2 1/2

---

## Problem-Solving Strategy

**Fraction to Decimal:**
1. Divide numerator by denominator
2. Watch for terminating or repeating patterns
3. Round if asked (e.g., to nearest hundredth)

**Decimal to Fraction:**
1. Identify place value
2. Write as fraction
3. Simplify completely
4. Convert to mixed number if improper

**Choosing which form:**
- Need exact value? Use fraction
- Need to compare/compute? Use decimal
- Follow problem instructions!

---

## Quick Reference

**Common Fractions to Decimals:**
- 1/2 = 0.5
- 1/4 = 0.25, 3/4 = 0.75
- 1/5 = 0.2, 2/5 = 0.4, 3/5 = 0.6, 4/5 = 0.8
- 1/8 = 0.125
- 1/3 = 0.333...

**Decimal Place Values:**
- Tenths → /10
- Hundredths → /100
- Thousandths → /1000

**Conversion Methods:**
- Fraction → Decimal: Divide
- Decimal → Fraction: Use place value, simplify

---

## Practice Tips

**Tip 1:** Memorize common conversions
- Saves time and builds fluency
- Focus on halves, fourths, fifths, eighths

**Tip 2:** Always simplify fractions
- Makes answers cleaner
- Easier to recognize equivalent forms

**Tip 3:** Check your work
- Convert back to verify
- 1/4 → 0.25 → 25/100 → 1/4 ✓

**Tip 4:** Understand the "why"
- Dividing makes sense: 1/4 means 1 divided into 4 parts
- Place value tells you the denominator

---

## Summary

**Fraction to Decimal:**
- Divide numerator by denominator
- May terminate or repeat
- Memorize common ones

**Decimal to Fraction:**
- Use place value for denominator
- Simplify the result
- Check that it makes sense

**Both forms are useful:**
- Fractions show exact relationships
- Decimals are easier to compare
- Being fluent in both is essential!

Mastering conversions between fractions and decimals unlocks flexibility in solving all kinds of math problems!`
    }
  });
  console.log('✅ Updated: fraction-decimal-conversions');

  // Topic 3: Square Roots and Perfect Squares
  await prisma.topic.updateMany({
    where: {
      slug: 'square-roots-perfect-squares'
    },
    data: {
      textContent: `# Square Roots and Perfect Squares

What number times itself equals 25? Understanding squares and square roots helps you work with area, the Pythagorean theorem, and many algebra problems!

---

## What Is a Square?

**Squaring a number** means multiplying it by itself.

**Notation:** n² = n × n

**Examples:**
- 3² = 3 × 3 = 9
- 5² = 5 × 5 = 25
- 10² = 10 × 10 = 100

**Read as:** "three squared" or "three to the second power"

**Why "squared"?**
If you make a square with side length n, the area is n².

Example: Square with side 4 → Area = 4² = 16 square units

---

## Perfect Squares

**Perfect squares** are numbers that result from squaring whole numbers.

**List of perfect squares:**
- 1² = 1
- 2² = 4
- 3² = 9
- 4² = 16
- 5² = 25
- 6² = 36
- 7² = 49
- 8² = 64
- 9² = 81
- 10² = 100
- 11² = 121
- 12² = 144
- 13² = 169
- 14² = 196
- 15² = 225

**Memorize at least 1² through 12²!**

---

## What Is a Square Root?

**Square root** is the INVERSE (opposite) of squaring.

**Question it answers:** "What number, when squared, gives me this?"

**Symbol:** √ (radical symbol)

**Definition:** √n is the number that, when squared, equals n

**Example:** √25 = 5 because 5² = 25

---

## Finding Square Roots

**For perfect squares:**

√1 = 1 (because 1² = 1)
√4 = 2 (because 2² = 4)
√9 = 3 (because 3² = 9)
√16 = 4 (because 4² = 16)
√25 = 5 (because 5² = 25)
√36 = 6 (because 6² = 36)
√49 = 7 (because 7² = 49)
√64 = 8 (because 8² = 8)
√81 = 9 (because 9² = 81)
√100 = 10 (because 10² = 100)

**Pattern:** √(n²) = n

---

## Squares and Square Roots Are Opposites

**Think of them as inverse operations:**

Square: Start with 5 → 5² → 25
Square root: Start with 25 → √25 → 5

**They undo each other:**
- √(n²) = n
- (√n)² = n

**Example:**
- √(7²) = √49 = 7
- (√16)² = 4² = 16

---

## Non-Perfect Squares

**What about √20?**

20 is NOT a perfect square.
√20 is between √16 = 4 and √25 = 5

**So √20 ≈ 4.47...**

**For non-perfect squares:**
- Answer is NOT a whole number
- Often left in radical form: √20
- Or approximated: √20 ≈ 4.47
- Is an irrational number (decimal never ends or repeats)

---

## Estimating Square Roots

**To estimate √50:**

**Step 1:** Find perfect squares it's between
49 < 50 < 64
√49 < √50 < √64
7 < √50 < 8

**Step 2:** See which it's closer to
50 is close to 49
So √50 is a little more than 7

**Estimate: √50 ≈ 7.1** (actual: 7.07...)

**Example 2:** Estimate √30

25 < 30 < 36
5 < √30 < 6

30 is between 25 and 36, closer to 25
**Estimate: √30 ≈ 5.5** (actual: 5.48...)

---

## Simplifying Square Roots

**Goal:** Find any perfect square factors

**Example 1:** Simplify √20

**Step 1:** Factor 20
20 = 4 × 5

**Step 2:** Take out perfect squares
√20 = √(4 × 5) = √4 × √5 = 2√5

**Answer: √20 = 2√5**

**Example 2:** Simplify √48

48 = 16 × 3
√48 = √16 × √3 = 4√3

**Answer: √48 = 4√3**

**Strategy:** Look for largest perfect square factor!

---

## Perfect Square Factors

**Common perfect squares to look for:**
- 4, 9, 16, 25, 36, 49, 64, 81, 100

**Example:** √72

Try factors:
- 72 = 4 × 18 → √72 = 2√18 (can simplify more!)
- 18 = 9 × 2 → √18 = 3√2
- So √72 = 2 × 3√2 = 6√2

**Better:** Find largest perfect square
- 72 = 36 × 2
- √72 = √36 × √2 = 6√2 (done in one step!)

---

## Square Roots in Equations

**Example:** Solve x² = 49

**Take square root of both sides:**
x = √49
x = ±7

**Wait, why ±?**

Both 7² = 49 AND (-7)² = 49!

**So x = 7 or x = -7**

**Written:** x = ±7 (read as "plus or minus 7")

---

## Negative Numbers and Square Roots

**Can you square root a negative?**

In pre-algebra: **NO!**

**Why?** No real number squared gives a negative.
- Positive × Positive = Positive
- Negative × Negative = Positive

**So √(-25) has no real answer!**

(In advanced math, you learn about "imaginary numbers," but not yet!)

---

## Square Roots and Area

**Finding side from area:**

**Problem:** A square has area 144 square inches. Find the side length.

**Solution:**
Area = side²
144 = s²
s = √144
s = 12 inches

**Answer: Each side is 12 inches**

---

## Real-World Applications

**Construction:**
- Square room with area 400 sq ft
- Side length = √400 = 20 feet

**Pythagorean Theorem:**
- Right triangle: a² + b² = c²
- If a = 3, b = 4, then c² = 9 + 16 = 25
- c = √25 = 5

**Physics:**
- Distance fallen: d = 16t² (feet, where t is seconds)
- If d = 144 ft, then 144 = 16t², so t² = 9, t = 3 seconds

**Geometry:**
- Diagonal of square with side s: d = s√2
- If side = 10, diagonal = 10√2 ≈ 14.14

---

## Order of Operations with Radicals

**PEMDAS still applies!**

**Remember:** √ is like division (in P for Parentheses/grouping)

**Example:** 2 + √16
= 2 + 4
= 6

**Example:** √(9 + 16)
= √25
= 5

**Note:** √9 + √16 ≠ √(9 + 16)
- √9 + √16 = 3 + 4 = 7
- √(9 + 16) = √25 = 5

**Rule:** Do what's inside the radical first!

---

## Using a Calculator

**To find square roots:**
- Look for √ button
- Some calculators: 2nd function + x²

**Examples:**
- √64 → Enter √64 = 8
- √50 → Enter √50 ≈ 7.071...

**For non-perfect squares, calculator gives decimal approximation**

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Forgetting ± in equations
- Wrong: x² = 16, so x = 4 only
- Right: x² = 16, so x = ±4

❌ **Mistake 2:** Adding radicals incorrectly
- Wrong: √4 + √9 = √13
- Right: √4 + √9 = 2 + 3 = 5

❌ **Mistake 3:** Confusing square and square root
- 5² = 25 (multiply)
- √25 = 5 (find original number)

❌ **Mistake 4:** Not simplifying radicals
- Leaving √20 instead of 2√5
- Not finding perfect square factors

---

## Problem-Solving Strategy

**Finding square roots:**
1. Check if it's a perfect square (memorize list!)
2. If yes, find the whole number
3. If no, estimate or leave in radical form

**Simplifying radicals:**
1. Factor the number
2. Look for perfect square factors
3. Pull out perfect squares
4. Simplify

**Solving equations:**
1. Isolate x²
2. Take square root of both sides
3. Remember ±

---

## Quick Reference

**Perfect Squares (memorize!):**
1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144

**Square Root Properties:**
- √(a × b) = √a × √b
- √(a²) = a (for positive a)
- (√a)² = a

**Key Concepts:**
- Square: n² = n × n
- Square root: inverse of squaring
- Perfect squares: result from squaring whole numbers
- ±: equations have two solutions

---

## Practice Tips

**Tip 1:** Memorize perfect squares 1-144
- Makes everything faster!
- Recognize them instantly

**Tip 2:** Look for patterns
- Units digit can hint at square
- Numbers ending in 2, 3, 7, 8 are never perfect squares

**Tip 3:** Estimate before calculating
- Helps catch errors
- Builds number sense

**Tip 4:** Simplify radicals completely
- Find largest perfect square factor
- Check your answer by squaring back

---

## Summary

**Squares:**
- n² means n × n
- Creates perfect squares (1, 4, 9, 16, 25...)
- Used for area of squares

**Square roots:**
- Inverse operation of squaring
- √n asks "what squared equals n?"
- Symbol: √

**Perfect squares:**
- Results from squaring whole numbers
- Memorize at least 1² through 12²
- Square roots of perfect squares are whole numbers

**Non-perfect squares:**
- Square roots are irrational
- Estimate or leave in radical form
- Simplify by factoring out perfect squares

Mastering squares and square roots is essential for algebra, geometry, and many real-world applications!`
    }
  });
  console.log('✅ Updated: square-roots-perfect-squares');

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
