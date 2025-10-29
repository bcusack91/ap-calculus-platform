import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Pre-Algebra topics - Batch 7 (FINAL CONTENT BATCH - 1 topic)...\n');

  // Topic 1: Integers and Operations (the remaining topic needing content)
  await prisma.topic.updateMany({
    where: {
      slug: 'integers-and-operations'
    },
    data: {
      textContent: `# Integers and Operations

What are integers and how do we work with them? Understanding integers and their operations is fundamental for algebra and all advanced mathematics!

---

## What Are Integers?

**Integers** are whole numbers and their opposites.

**Set of integers:** {..., -3, -2, -1, 0, 1, 2, 3, ...}

**Includes:**
- Positive whole numbers (1, 2, 3, ...)
- Zero (0)
- Negative whole numbers (-1, -2, -3, ...)

**Does NOT include:**
- Fractions (1/2, 3/4)
- Decimals (0.5, 2.7)

**Think:** Counting numbers, zero, and their opposites!

---

## Types of Integers

**Positive integers:** 1, 2, 3, 4, 5, ...
- Greater than zero
- To the right of zero on number line
- Also called natural numbers or counting numbers

**Zero:** 0
- Neither positive nor negative
- The dividing point

**Negative integers:** -1, -2, -3, -4, -5, ...
- Less than zero
- To the left of zero on number line
- Opposites of positive integers

---

## The Number Line

**Number line shows integers visually:**

On a number line: -4, -3, -2, -1, 0, 1, 2, 3, 4 and continues in both directions

**Key features:**
- Zero in the middle
- Positive numbers to the right
- Negative numbers to the left
- Equal spacing between consecutive integers
- Arrows show it continues forever

**Number line helps visualize operations!**

---

## Opposites

**Every integer has an opposite:**

**Opposite of 5 is -5**
**Opposite of -3 is 3**
**Opposite of 0 is 0** (special case!)

**Properties:**
- Same distance from zero
- Opposite sides of zero
- Sum to zero: 5 + (-5) = 0

**Symbol:** -n means "opposite of n"
- If n = 5, then -n = -5
- If n = -3, then -n = 3

---

## Absolute Value Review

**Absolute value** = distance from zero

**|5| = 5** (5 units from zero)
**|-5| = 5** (5 units from zero)
**|0| = 0** (0 units from zero)

**Opposites have the same absolute value!**

**Key:** Absolute value is always ≥ 0

---

## Comparing Integers

**On the number line:**
- Numbers to the RIGHT are GREATER
- Numbers to the LEFT are LESSER

**Comparing positive integers:**
5 > 3 (5 is right of 3)

**Comparing negative integers:**
-2 > -5 (closer to zero is greater!)
Think: -2 is to the right of -5

**Positive vs Negative:**
Any positive > any negative
3 > -100

---

## Adding Integers: Same Signs

**When signs are the SAME:**

**Rule:** Add absolute values, keep the sign

**Positive + Positive:**
5 + 3 = 8
(both positive, add, result positive)

**Negative + Negative:**
-5 + (-3) = -8
Add: 5 + 3 = 8
Keep negative sign: -8

**Think:** Moving in same direction on number line!

---

## Adding Integers: Different Signs

**When signs are DIFFERENT:**

**Rule:** Subtract absolute values, use sign of larger

**Example 1:** 8 + (-3)
Subtract: 8 - 3 = 5
Larger absolute value (8) is positive
Answer: 5

**Example 2:** -7 + 4
Subtract: 7 - 4 = 3
Larger absolute value (7) is negative
Answer: -3

**Example 3:** 6 + (-6)
Subtract: 6 - 6 = 0
Opposites always sum to zero!

---

## Adding on the Number Line

**Visual approach:**

**5 + 3:**
Start at 5, move 3 right → 8

**-4 + (-2):**
Start at -4, move 2 left → -6

**7 + (-3):**
Start at 7, move 3 left → 4

**-5 + 8:**
Start at -5, move 8 right → 3

**Positive = move right, Negative = move left!**

---

## Subtracting Integers

**Key rule: Subtraction = Adding the opposite**

**a - b = a + (-b)**

**Change subtraction to adding the opposite!**

**Example 1:** 8 - 5
= 8 + (-5)
= 3

**Example 2:** 3 - 7
= 3 + (-7)
= -4

**Example 3:** -4 - 6
= -4 + (-6)
= -10

---

## Subtracting on the Number Line

**Subtraction = move opposite direction:**

**9 - 4:**
Start at 9, move 4 left → 5

**5 - 8:**
Start at 5, move 8 left → -3

**-2 - 3:**
Start at -2, move 3 left → -5

**-6 - (-4):**
Subtracting negative = move right!
Start at -6, move 4 right → -2

---

## Double Negatives

**Subtracting a negative = adding a positive!**

**Example 1:** 5 - (-3)
= 5 + 3
= 8

**Example 2:** -7 - (-2)
= -7 + 2
= -5

**Example 3:** -1 - (-1)
= -1 + 1
= 0

**"Minus a negative" becomes "plus a positive"!**

---

## Multiplying Integers: Same Signs

**When signs are SAME:**

**Result is POSITIVE**

**Positive × Positive = Positive:**
5 × 3 = 15

**Negative × Negative = Positive:**
(-5) × (-3) = 15

**Think:** Two negatives make a positive!

**Multiply absolute values, result is positive.**

---

## Multiplying Integers: Different Signs

**When signs are DIFFERENT:**

**Result is NEGATIVE**

**Positive × Negative = Negative:**
5 × (-3) = -15

**Negative × Positive = Negative:**
(-5) × 3 = -15

**Multiply absolute values, result is negative.**

---

## Sign Rules for Multiplication

**Quick reference:**

**(+) × (+) = (+)**
Example: 6 × 4 = 24

**(−) × (−) = (+)**
Example: (-6) × (-4) = 24

**(+) × (−) = (−)**
Example: 6 × (-4) = -24

**(−) × (+) = (−)**
Example: (-6) × 4 = -24

**Same signs → positive**
**Different signs → negative**

---

## Dividing Integers

**Division follows SAME sign rules as multiplication!**

**Same signs → positive:**
12 ÷ 3 = 4
(-12) ÷ (-3) = 4

**Different signs → negative:**
12 ÷ (-3) = -4
(-12) ÷ 3 = -4

**Important:** Cannot divide by zero!
Any number ÷ 0 = undefined

---

## Sign Rules for Division

**Quick reference:**

**(+) ÷ (+) = (+)**
Example: 20 ÷ 4 = 5

**(−) ÷ (−) = (+)**
Example: (-20) ÷ (-4) = 5

**(+) ÷ (−) = (−)**
Example: 20 ÷ (-4) = -5

**(−) ÷ (+) = (−)**
Example: (-20) ÷ 4 = -5

**Same as multiplication rules!**

---

## Multiple Operations

**Order of operations still applies (PEMDAS)!**

**Example 1:** -3 + 5 × 2
Multiply first: 5 × 2 = 10
Then add: -3 + 10 = 7

**Example 2:** (-4 + 8) ÷ 2
Parentheses: -4 + 8 = 4
Divide: 4 ÷ 2 = 2

**Example 3:** -2 × (6 - 10)
Parentheses: 6 - 10 = -4
Multiply: -2 × (-4) = 8

---

## Powers of Integers

**Exponents with integers:**

**Positive base:**
3² = 9
3³ = 27

**Negative base with parentheses:**
(-3)² = (-3) × (-3) = 9 (even exponent → positive)
(-3)³ = (-3) × (-3) × (-3) = -27 (odd exponent → negative)

**Without parentheses:**
-3² = -(3²) = -9 (negative applied after)

**Parentheses matter!**

---

## Even vs Odd Exponents

**Negative base:**

**Even exponent → positive:**
(-2)² = 4
(-2)⁴ = 16
(-5)² = 25

**Odd exponent → negative:**
(-2)³ = -8
(-2)⁵ = -32
(-5)³ = -125

**Even number of negatives = positive**
**Odd number of negatives = negative**

---

## Real-World Applications

**Temperature:**
- Above zero: positive
- Below zero: negative
- -5°F is 5 degrees below zero

**Elevation:**
- Above sea level: positive
- Below sea level: negative
- Death Valley: -282 feet

**Money:**
- Credit: positive
- Debt: negative
- Owe $50: -$50

**Golf:**
- Under par: negative (-3)
- Over par: positive (+2)

---

## Bank Account Example

**Starting balance: $200**

**Deposit $50:** 200 + 50 = $250
**Withdraw $75:** 250 - 75 = $175
**Withdraw $200:** 175 - 200 = -$25 (overdrawn!)

**Negative balance = debt/overdraft**

**Adding = deposits**
**Subtracting = withdrawals**

---

## Temperature Change Example

**Morning: -5°F**
**Afternoon: rises 12°F**

**New temperature:**
-5 + 12 = 7°F

**Change from -5°F to 7°F:**
7 - (-5) = 7 + 5 = 12°F increase

**Integers describe temperature and change!**

---

## Elevation Example

**Submarine at -300 feet (below sea level)**
**Ascends 150 feet**

**New depth:**
-300 + 150 = -150 feet

**Still 150 feet below surface!**

**Further ascent of 200 feet:**
-150 + 200 = 50 feet (above sea level!)

---

## Properties of Integer Operations

**Commutative Property (Addition & Multiplication):**
a + b = b + a
3 + (-5) = (-5) + 3 = -2

a × b = b × a
(-4) × 5 = 5 × (-4) = -20

**Associative Property:**
(a + b) + c = a + (b + c)
(-2 + 3) + 5 = -2 + (3 + 5)

**Identity Property:**
a + 0 = a (additive identity)
a × 1 = a (multiplicative identity)

---

## Inverse Properties

**Additive Inverse (Opposite):**
a + (-a) = 0
7 + (-7) = 0

**Every integer has an opposite!**

**Multiplicative Inverse:**
For integers ≠ 0, 1, -1, inverse is NOT an integer
(comes later with fractions)

**Zero has no multiplicative inverse!**

---

## Distributive Property with Integers

**a(b + c) = ab + ac**

**Example 1:** 3(4 + (-2))
= 3(4) + 3(-2)
= 12 + (-6)
= 6

**Example 2:** -2(5 - 8)
= -2(5) + (-2)(-8)
= -10 + 16
= 6

**Works with all integers!**

---

## Patterns in Integer Operations

**Adding consecutive integers:**
1 + 2 + 3 + 4 + 5 = 15

**Adding opposite pairs:**
(-3) + (-2) + (-1) + 0 + 1 + 2 + 3 = 0
(opposites cancel!)

**Powers of -1:**
(-1)¹ = -1 (odd)
(-1)² = 1 (even)
(-1)³ = -1 (odd)
(-1)⁴ = 1 (even)

**Alternates between -1 and 1!**

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Adding when should subtract
- -3 + (-5) = -8 (not -2)
- Same signs → add absolute values

❌ **Mistake 2:** Sign errors in subtraction
- 5 - (-3) = 8 (not 2)
- Subtracting negative = adding positive

❌ **Mistake 3:** Wrong sign in multiplication/division
- (-6) × (-2) = 12 (not -12)
- Same signs → positive!

❌ **Mistake 4:** Forgetting parentheses with negatives
- (-3)² = 9 but -3² = -9
- Big difference!

❌ **Mistake 5:** Comparing negatives incorrectly
- -2 > -5 (closer to zero is greater!)
- Not like positive numbers

---

## Problem-Solving Strategy

**For addition:**
1. Check if signs are same or different
2. Same signs: add, keep sign
3. Different signs: subtract, use larger sign

**For subtraction:**
1. Change to adding the opposite
2. Follow addition rules

**For multiplication/division:**
1. Multiply/divide absolute values
2. Same signs → positive
3. Different signs → negative

**For mixed operations:**
1. Follow order of operations (PEMDAS)
2. Handle signs carefully at each step
3. Check answer makes sense

---

## Working with Parentheses

**Simplify signs:**

**+(+) = +**
Example: 5 + (+3) = 5 + 3 = 8

**+(−) = −**
Example: 5 + (-3) = 5 - 3 = 2

**(−)(+) = −**
Example: 5 - (+3) = 5 - 3 = 2

**(−)(−) = +**
Example: 5 - (-3) = 5 + 3 = 8

**Two negatives make a positive!**

---

## Quick Reference

**Integer types:**
- Positive: 1, 2, 3, ...
- Zero: 0
- Negative: -1, -2, -3, ...

**Addition:**
- Same signs: add, keep sign
- Different signs: subtract, use larger sign

**Subtraction:**
- Change to adding opposite: a - b = a + (-b)

**Multiplication/Division:**
- Same signs: positive
- Different signs: negative

**Comparing:**
- Further right = greater
- Closer to zero > farther from zero (for negatives)

---

## Practice Tips

**Tip 1:** Use number line
- Visual helps with addition/subtraction
- Shows direction and distance

**Tip 2:** Memorize sign rules
- Same → positive
- Different → negative
- Applies to both × and ÷

**Tip 3:** Change subtraction to addition
- Makes it easier
- Less chance of sign errors

**Tip 4:** Check with real-world context
- Temperature, money, elevation
- Does answer make sense?

**Tip 5:** Practice, practice, practice!
- Integer operations are fundamental
- Need to be automatic
- Foundation for all algebra

---

## Summary

**Integers are whole numbers and their opposites:**

**Set:** {..., -3, -2, -1, 0, 1, 2, 3, ...}

**Operations:**

**Addition:**
- Same signs: add absolute values, keep sign
- Different signs: subtract absolute values, use sign of larger
- Identity: a + 0 = a
- Inverse: a + (-a) = 0

**Subtraction:**
- Convert to adding opposite: a - b = a + (-b)
- Double negative becomes positive: a - (-b) = a + b

**Multiplication:**
- Same signs → positive result
- Different signs → negative result
- Identity: a × 1 = a
- Zero property: a × 0 = 0

**Division:**
- Same sign rules as multiplication
- Cannot divide by zero

**Comparing:**
- Use number line (right = greater)
- Any positive > any negative
- For negatives: closer to zero is greater

**Applications:**
- Temperature (above/below zero)
- Elevation (above/below sea level)
- Money (credit/debt)
- Sports (above/below par)

**Key skills:**
- Adding/subtracting with different signs
- Multiplying/dividing with sign rules
- Comparing negative numbers
- Using number line
- Order of operations with integers
- Recognizing opposites and absolute value

Mastering integer operations is essential for success in algebra and all higher mathematics!`
    }
  });
  console.log('✅ Updated: integers-and-operations');

  console.log('\n🎉 CONTENT PHASE COMPLETE! All 19 Pre-Algebra topics now have comprehensive content!');
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
