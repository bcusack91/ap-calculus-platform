import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Pre-Algebra topics - Batch 3 (3 topics)...\n');

  // Topic 1: Distributive Property
  await prisma.topic.updateMany({
    where: {
      slug: 'distributive-property'
    },
    data: {
      textContent: `# Distributive Property

How do you multiply a number by a sum? The distributive property is one of the most important properties in algebra - it helps simplify expressions and solve equations!

---

## What Is the Distributive Property?

The **distributive property** says you can distribute multiplication over addition (or subtraction).

**Formula:** a(b + c) = ab + ac

**In words:** Multiply the outside number by EACH term inside the parentheses.

**Example:** 3(4 + 5)

Method 1: Add first
3(4 + 5) = 3(9) = 27

Method 2: Distribute
3(4 + 5) = 3(4) + 3(5) = 12 + 15 = 27

**Both give the same answer!**

---

## Why It Works

**Visual example:** 3(4 + 5)

Think: 3 groups of (4 + 5)

(4 + 5) + (4 + 5) + (4 + 5)

Rearrange:
(4 + 4 + 4) + (5 + 5 + 5)

Which is:
3(4) + 3(5) = 12 + 15 = 27

**The property lets us break apart and recombine!**

---

## Basic Examples

**Example 1:** 5(2 + 3)

Distribute the 5:
5(2) + 5(3) = 10 + 15 = 25

**Check:** 5(5) = 25 ✓

**Example 2:** 7(6 + 1)

7(6) + 7(1) = 42 + 7 = 49

**Example 3:** 4(10 + 2)

4(10) + 4(2) = 40 + 8 = 48

---

## Distributive Property with Subtraction

**Works the same with subtraction!**

**Formula:** a(b - c) = ab - ac

**Example:** 6(8 - 3)

Distribute:
6(8) - 6(3) = 48 - 18 = 30

**Check:** 6(5) = 30 ✓

**Important:** Keep the subtraction sign with the second term!

---

## Step-by-Step Process

**Example:** Simplify 8(x + 4)

**Step 1:** Multiply outside number by first term
8 × x = 8x

**Step 2:** Multiply outside number by second term
8 × 4 = 32

**Step 3:** Combine with the operation (+ or -)
8x + 32

**Answer: 8(x + 4) = 8x + 32**

---

## Distributing with Variables

**Example 1:** 5(x + 3)

5(x) + 5(3) = 5x + 15

**Example 2:** 7(y - 2)

7(y) - 7(2) = 7y - 14

**Example 3:** 3(2n + 5)

3(2n) + 3(5) = 6n + 15

**Note:** When distributing to a variable term, multiply the coefficients!

---

## Negative Outside the Parentheses

**Be careful with negative signs!**

**Example 1:** -2(x + 5)

-2(x) + (-2)(5) = -2x - 10

**Both terms become negative!**

**Example 2:** -3(y - 4)

-3(y) - (-3)(4) = -3y + 12

**Negative times negative gives positive!**

**Example 3:** -(a + 6)

This means -1(a + 6):
-1(a) + (-1)(6) = -a - 6

**The negative distributes to all terms!**

---

## More Complex Expressions

**Example 1:** 4(2x + 3y)

4(2x) + 4(3y) = 8x + 12y

**Example 2:** 5(3a - 2b + 1)

5(3a) + 5(-2b) + 5(1) = 15a - 10b + 5

**Distribute to EVERY term inside!**

**Example 3:** -2(4m - 3n + 7)

-2(4m) + (-2)(-3n) + (-2)(7) = -8m + 6n - 14

---

## Distributive Property with Fractions

**Example 1:** 1/2(6 + 4)

1/2(6) + 1/2(4) = 3 + 2 = 5

**Example 2:** 2/3(9x + 6)

2/3(9x) + 2/3(6) = 6x + 4

**Example 3:** -1/4(8y - 12)

-1/4(8y) - 1/4(-12) = -2y + 3

---

## Reverse: Factoring Out

**The distributive property works backwards too!**

**Example:** 6x + 9

Factor out the GCF (3):
3(2x + 3)

**Check by distributing:**
3(2x) + 3(3) = 6x + 9 ✓

**This is called factoring!**

**Example 2:** 12a - 8

Factor out 4:
4(3a - 2)

**Check:** 4(3a) - 4(2) = 12a - 8 ✓

---

## Mental Math with Distributive Property

**Example:** Calculate 7 × 98

Think: 98 = 100 - 2

7 × 98 = 7(100 - 2)
= 7(100) - 7(2)
= 700 - 14
= 686

**Much easier than 7 × 98 directly!**

**Example 2:** Calculate 5 × 103

5 × 103 = 5(100 + 3)
= 500 + 15
= 515

---

## Combining Like Terms After Distributing

**Example:** 3(x + 2) + 4(x + 1)

**Step 1:** Distribute both
3x + 6 + 4x + 4

**Step 2:** Combine like terms
(3x + 4x) + (6 + 4)
7x + 10

**Answer: 7x + 10**

---

## Using Distributive Property in Equations

**Example:** Solve 2(x + 3) = 14

**Step 1:** Distribute
2x + 6 = 14

**Step 2:** Subtract 6
2x = 8

**Step 3:** Divide by 2
x = 4

**Check:** 2(4 + 3) = 2(7) = 14 ✓

---

## Common Patterns

**Pattern 1:** a(x + y) = ax + ay

**Pattern 2:** a(x - y) = ax - ay

**Pattern 3:** -a(x + y) = -ax - ay

**Pattern 4:** -(x - y) = -x + y

**Pattern 5:** a(bx + c) = abx + ac

**Recognizing patterns speeds up your work!**

---

## Multiple Terms Outside

**What about (2 + 3)(4 + 5)?**

This uses the distributive property twice!

Method 1: Add first
(2 + 3)(4 + 5) = 5 × 9 = 45

Method 2: Distribute each term
2(4 + 5) + 3(4 + 5)
= 2(9) + 3(9)
= 18 + 27
= 45

**Note:** Full FOIL method comes later in algebra!

---

## Real-World Applications

**Shopping:**
3 items at $5 each + 3 items at $2 each
= 3($5 + $2)
= 3($7)
= $21

**Or:** 3($5) + 3($2) = $15 + $6 = $21

**Area:**
Rectangle split in two parts
Total area = width × (length₁ + length₂)
= width × length₁ + width × length₂

**Grouping:**
5 groups with 3 boys and 4 girls each
Total people = 5(3 + 4) = 5(7) = 35
Or: 5(3) + 5(4) = 15 + 20 = 35

---

## Order of Operations

**Remember PEMDAS!**

**With parentheses:** 2(3 + 4)
1. Add inside: 2(7)
2. Multiply: 14

**With distributive property:** 2(3 + 4)
1. Distribute: 2(3) + 2(4)
2. Multiply: 6 + 8
3. Add: 14

**Same answer both ways!**

**Choose the easier method for the problem!**

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Forgetting to distribute to all terms
- Wrong: 3(x + 4) = 3x + 4
- Right: 3(x + 4) = 3x + 12

❌ **Mistake 2:** Not distributing negative signs
- Wrong: -2(x + 3) = -2x + 3
- Right: -2(x + 3) = -2x - 6

❌ **Mistake 3:** Distributing when you should add first
- Don't always need to distribute!
- 5(10) is easier than distributing 5(6 + 4)

❌ **Mistake 4:** Sign errors with subtraction
- Wrong: 4(x - 2) = 4x - 2
- Right: 4(x - 2) = 4x - 8

❌ **Mistake 5:** Forgetting to multiply coefficients
- Wrong: 3(2x) = 2x
- Right: 3(2x) = 6x

---

## When to Use Distributive Property

**Use when:**
- Variables inside parentheses: 5(x + 2)
- Simplifying expressions: 3(2a + 1) + 4
- Solving equations: 2(x + 3) = 10
- Mental math: 6 × 99

**Don't need to use when:**
- Simple numbers: 4(10) = 40
- Can add first easily: 5(3 + 2) = 5(5) = 25

**Choose the easiest path!**

---

## Problem-Solving Strategy

**To distribute:**
1. Identify what's outside parentheses
2. Multiply it by EACH term inside
3. Keep track of + and - signs
4. Simplify the result

**To solve equations with parentheses:**
1. Distribute first
2. Combine like terms
3. Solve using inverse operations
4. Check your answer

**For mental math:**
1. Break number into easier parts
2. Use distributive property
3. Calculate mentally

---

## Practice Patterns

**a(b + c) patterns:**
- 2(x + 5) = 2x + 10
- 3(y + 1) = 3y + 3
- 7(m + 4) = 7m + 28

**a(b - c) patterns:**
- 4(x - 2) = 4x - 8
- 5(n - 3) = 5n - 15
- 6(p - 1) = 6p - 6

**Negative outside:**
- -3(x + 4) = -3x - 12
- -2(y - 5) = -2y + 10
- -(a + 3) = -a - 3

---

## Quick Reference

**Basic Formula:**
a(b + c) = ab + ac
a(b - c) = ab - ac

**With Variables:**
a(x + b) = ax + ab

**Negative Outside:**
-a(b + c) = -ab - ac
-a(b - c) = -ab + ac

**Steps:**
1. Multiply outside by first term
2. Multiply outside by each other term
3. Keep the operations (+ or -)
4. Simplify

**Remember:** Distribute to EVERY term!

---

## Practice Tips

**Tip 1:** Write out each step
- Don't try to do it all in your head
- Helps avoid sign errors

**Tip 2:** Check by substituting
- Pick a value for the variable
- Check that both sides equal

**Tip 3:** Watch those signs!
- Negative outside affects all terms
- Negative × Negative = Positive

**Tip 4:** Use it for mental math
- Break hard numbers into easier parts
- 8 × 97 = 8(100 - 3) = 800 - 24 = 776

**Tip 5:** Practice reverse (factoring)
- Helps understand the property deeper
- Useful for future algebra

---

## Summary

**The distributive property:**
- Multiplies outside number by each term inside
- Works with addition and subtraction
- Essential for algebra

**Formula:**
a(b + c) = ab + ac

**Key points:**
- Distribute to ALL terms
- Keep track of signs (negative × negative = positive)
- Works forward (distributing) and backward (factoring)
- Useful for simplifying, solving, and mental math

**Applications:**
- Simplifying algebraic expressions
- Solving equations with parentheses
- Mental math tricks
- Area problems
- Real-world calculations

The distributive property is a foundation for all future algebra - master it now!`
    }
  });
  console.log('✅ Updated: distributive-property');

  // Topic 2: Solving Two-Step Equations
  await prisma.topic.updateMany({
    where: {
      slug: 'solving-two-step-equations'
    },
    data: {
      textContent: `# Solving Two-Step Equations

How do you solve equations that require two operations? Two-step equations build on one-step equations and are essential for solving real-world problems!

---

## What Is a Two-Step Equation?

A **two-step equation** requires TWO inverse operations to solve.

**Examples:**
- 2x + 5 = 13 (multiply and add)
- 3x - 7 = 11 (multiply and subtract)
- x/4 + 3 = 8 (divide and add)

**Goal:** Isolate the variable (get x by itself)

---

## Review: Inverse Operations

**Inverse operations undo each other:**

Addition ↔ Subtraction
Multiplication ↔ Division

**To isolate a variable, use inverse operations to undo what's been done to it!**

---

## General Strategy

**Order matters! Work backwards from PEMDAS:**

**Step 1:** Undo addition or subtraction (work backwards from order of operations)
**Step 2:** Undo multiplication or division

**Think:** Reverse order of operations!

---

## Solving: Addition First

**Example:** 2x + 5 = 13

**Step 1:** Subtract 5 from both sides
2x + 5 - 5 = 13 - 5
2x = 8

**Step 2:** Divide both sides by 2
2x/2 = 8/2
x = 4

**Check:** 2(4) + 5 = 8 + 5 = 13 ✓

**Answer: x = 4**

---

## Solving: Subtraction First

**Example:** 3x - 7 = 11

**Step 1:** Add 7 to both sides
3x - 7 + 7 = 11 + 7
3x = 18

**Step 2:** Divide both sides by 3
3x/3 = 18/3
x = 6

**Check:** 3(6) - 7 = 18 - 7 = 11 ✓

**Answer: x = 6**

---

## Solving: Division Then Addition

**Example:** x/4 + 3 = 8

**Step 1:** Subtract 3 from both sides
x/4 + 3 - 3 = 8 - 3
x/4 = 5

**Step 2:** Multiply both sides by 4
4 × (x/4) = 5 × 4
x = 20

**Check:** 20/4 + 3 = 5 + 3 = 8 ✓

**Answer: x = 20**

---

## Solving: Division Then Subtraction

**Example:** x/5 - 2 = 4

**Step 1:** Add 2 to both sides
x/5 - 2 + 2 = 4 + 2
x/5 = 6

**Step 2:** Multiply both sides by 5
x = 30

**Check:** 30/5 - 2 = 6 - 2 = 4 ✓

**Answer: x = 30**

---

## When Variable Is Negative

**Example:** -2x + 6 = 14

**Step 1:** Subtract 6 from both sides
-2x + 6 - 6 = 14 - 6
-2x = 8

**Step 2:** Divide both sides by -2
-2x/-2 = 8/-2
x = -4

**Check:** -2(-4) + 6 = 8 + 6 = 14 ✓

**Answer: x = -4**

**Remember:** Negative ÷ Negative = Positive!

---

## When Coefficient Is a Fraction

**Example:** (1/2)x + 4 = 9

**Step 1:** Subtract 4 from both sides
(1/2)x = 5

**Step 2:** Multiply both sides by 2 (reciprocal of 1/2)
x = 10

**Check:** (1/2)(10) + 4 = 5 + 4 = 9 ✓

**Answer: x = 10**

**Tip:** Multiply by the reciprocal to undo fraction multiplication!

---

## When Constant Is Negative

**Example:** 5x - 8 = -13

**Step 1:** Add 8 to both sides
5x - 8 + 8 = -13 + 8
5x = -5

**Step 2:** Divide both sides by 5
x = -1

**Check:** 5(-1) - 8 = -5 - 8 = -13 ✓

**Answer: x = -1**

---

## Variable on the Right Side

**Example:** 12 = 4 + 2x

**Can solve as is, or flip the equation!**

**Method 1: Solve as is**
12 - 4 = 4 + 2x - 4
8 = 2x
4 = x

**Method 2: Flip equation**
2x + 4 = 12
(now solve normally)

**Answer: x = 4**

---

## More Complex Examples

**Example 1:** 7x + 15 = 50

**Step 1:** Subtract 15
7x = 35

**Step 2:** Divide by 7
x = 5

**Answer: x = 5**

**Example 2:** x/3 - 6 = -2

**Step 1:** Add 6
x/3 = 4

**Step 2:** Multiply by 3
x = 12

**Answer: x = 12**

**Example 3:** -4x + 20 = 4

**Step 1:** Subtract 20
-4x = -16

**Step 2:** Divide by -4
x = 4

**Answer: x = 4**

---

## Checking Your Answer

**ALWAYS check by substituting back!**

**Example:** Solution is x = 3 for equation 2x + 1 = 7

**Check:**
2(3) + 1 = 7
6 + 1 = 7
7 = 7 ✓

**If both sides equal, your answer is correct!**

---

## Real-World Applications

**Shopping:**
A shirt costs $5 more than twice the price of a hat. Together they cost $35. Find hat price.

Let h = hat price
2h + 5 = 35
2h = 30
h = 15

**Hat costs $15**

**Age Problem:**
Maria is 3 years older than twice Juan's age. Maria is 19. How old is Juan?

Let j = Juan's age
2j + 3 = 19
2j = 16
j = 8

**Juan is 8 years old**

**Savings:**
You save $15 per week plus an initial $20. After how many weeks will you have $140?

Let w = weeks
15w + 20 = 140
15w = 120
w = 8

**8 weeks**

---

## Writing Equations from Words

**Phrase:** "5 more than 3 times a number is 20"

**Translate:**
- "a number" → x
- "3 times a number" → 3x
- "5 more than" → + 5
- "is" → =

**Equation:** 3x + 5 = 20

**Solve:**
3x = 15
x = 5

---

## Common Phrases to Equations

**Addition:**
- "more than" → +
- "increased by" → +
- "sum of" → +

**Subtraction:**
- "less than" → -
- "decreased by" → -
- "difference" → -

**Multiplication:**
- "times" → ×
- "product of" → ×
- "twice" → 2×

**Division:**
- "divided by" → ÷
- "quotient" → ÷

---

## Step-by-Step Process

**For any two-step equation:**

**Step 1:** Identify operations on the variable
**Step 2:** Undo addition/subtraction first
**Step 3:** Undo multiplication/division second
**Step 4:** Check your answer

**Key:** Whatever you do to one side, do to the other!

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Wrong order of operations
- Wrong: Divide first in 2x + 5 = 13
- Right: Subtract first, then divide

❌ **Mistake 2:** Only operating on one side
- Wrong: 2x + 3 = 9 → 2x = 9
- Right: 2x + 3 = 9 → 2x + 3 - 3 = 9 - 3

❌ **Mistake 3:** Sign errors with negatives
- Be careful: -2x ÷ -2 = x (not -x)
- Negative ÷ Negative = Positive

❌ **Mistake 4:** Not checking answer
- Always substitute back!
- Catches arithmetic errors

❌ **Mistake 5:** Forgetting to flip with fractions
- To undo ×(1/2), multiply by 2 (reciprocal)

---

## Special Cases

**No variable after solving:**

**Example:** 2x + 3 = 2x + 7

Subtract 2x from both sides:
3 = 7 (FALSE!)

**This means NO SOLUTION** (inconsistent equation)

**Always true:**

**Example:** 3x + 2 = 3x + 2

Subtract 3x from both sides:
2 = 2 (TRUE!)

**This means INFINITE SOLUTIONS** (identity)

---

## Comparison: One-Step vs Two-Step

**One-Step:** x + 5 = 12
- One operation to undo
- x = 7

**Two-Step:** 2x + 5 = 13
- Two operations to undo
- First subtract 5, then divide by 2
- x = 4

**Two-step builds on one-step skills!**

---

## Problem-Solving Strategy

**Reading the problem:**
1. Identify what the variable represents
2. Look for key words (more than, less than, times, etc.)
3. Write the equation
4. Solve using two-step method
5. Check in context

**Solving the equation:**
1. Undo addition/subtraction
2. Undo multiplication/division  
3. Check your answer
4. Write answer with units if applicable

---

## Quick Reference

**Standard Form:** ax + b = c

**Solution Steps:**
1. Subtract (or add) b from both sides
2. Divide (or multiply) both sides by a

**Example:** 3x + 7 = 22
1. 3x = 15 (subtract 7)
2. x = 5 (divide by 3)

**Remember:**
- Work backwards from order of operations
- Do the same thing to both sides
- Always check your answer!

---

## Practice Tips

**Tip 1:** Write out every step
- Don't skip steps mentally
- Helps avoid errors

**Tip 2:** Keep equals signs aligned
- Makes it easier to read
- Less likely to make mistakes

**Tip 3:** Check with substitution
- Plug answer back into original equation
- Both sides should be equal

**Tip 4:** Practice translating words
- Real problems are in words
- Translating is a key skill

**Tip 5:** Draw diagrams when helpful
- Visual models aid understanding
- Especially for word problems

---

## Summary

**Two-step equations require two inverse operations to solve:**

**Standard form:** ax + b = c

**Solution method:**
1. Undo addition/subtraction first
2. Undo multiplication/division second
3. Check your answer

**Key principles:**
- Do the same operation to both sides
- Work backwards from order of operations
- Addition/subtraction before multiplication/division

**Applications:**
- Shopping and money problems
- Age problems
- Savings and budget
- Geometry (perimeter, area)
- Distance and rate

**Skills needed:**
- Inverse operations
- Order of operations
- Working with negatives
- Checking solutions

Mastering two-step equations prepares you for multi-step equations and algebraic problem solving!`
    }
  });
  console.log('✅ Updated: solving-two-step-equations');

  // Topic 3: Combining Like Terms
  await prisma.topic.updateMany({
    where: {
      slug: 'combining-like-terms'
    },
    data: {
      textContent: `# Combining Like Terms

How do you simplify expressions with multiple variables? Combining like terms is essential for simplifying algebraic expressions and solving equations efficiently!

---

## What Are Terms?

A **term** is a number, variable, or product of numbers and variables.

**Examples of terms:**
- 5 (constant term)
- x (variable term)
- 3x (coefficient 3, variable x)
- -2y (coefficient -2, variable y)
- 7ab (coefficient 7, variables a and b)

**Terms are separated by + or - signs**

**Expression:** 3x + 5 - 2y + 8
**Terms:** 3x, 5, -2y, 8 (four terms)

---

## What Are Like Terms?

**Like terms** have the SAME variable(s) raised to the SAME power.

**Like terms:**
- 3x and 5x (both have x)
- 7y and -2y (both have y)
- 4 and 9 (both are constants)
- 2ab and 5ab (both have ab)

**NOT like terms:**
- 3x and 3y (different variables)
- x and x² (different powers)
- 2a and 2ab (different variables)

**Think:** Can only combine apples with apples, not apples with oranges!

---

## Why Combine Like Terms?

**Combining like terms simplifies expressions.**

**Before:** 3x + 2 + 5x + 7
**After:** 8x + 9

**Simpler = easier to work with!**

**Benefits:**
- Shorter expressions
- Easier to evaluate
- Necessary for solving equations
- Reduces chance of errors

---

## How to Combine Like Terms

**Rule:** Add or subtract the COEFFICIENTS, keep the variable part the same.

**Example 1:** 4x + 3x

Coefficients: 4 + 3 = 7
Variable: x

**Answer: 7x**

**Think:** 4 apples + 3 apples = 7 apples

**Example 2:** 8y - 5y

Coefficients: 8 - 5 = 3
Variable: y

**Answer: 3y**

---

## Combining Multiple Like Terms

**Example:** 2x + 5x + 3x

Add coefficients: 2 + 5 + 3 = 10

**Answer: 10x**

**Example 2:** 7a - 3a + 4a

Combine: 7 - 3 + 4 = 8

**Answer: 8a**

---

## Expressions with Different Variables

**Example:** 3x + 4y + 2x + y

**Step 1:** Identify like terms
- x terms: 3x and 2x
- y terms: 4y and y

**Step 2:** Combine each group
- 3x + 2x = 5x
- 4y + y = 5y (remember y = 1y)

**Answer: 5x + 5y**

---

## Including Constants

**Example:** 5x + 3 + 2x + 7

**Step 1:** Group like terms
- x terms: 5x + 2x
- Constants: 3 + 7

**Step 2:** Combine
- 5x + 2x = 7x
- 3 + 7 = 10

**Answer: 7x + 10**

**Remember:** Constants (numbers alone) are like terms with each other!

---

## With Subtraction

**Example:** 8m - 3m + 5

**Think of subtraction as adding a negative:**
8m + (-3m) + 5

Combine m terms: 8 + (-3) = 5

**Answer: 5m + 5**

**Example 2:** 6 - 2n + 3 - 5n

Rearrange: 6 + 3 - 2n - 5n

Constants: 6 + 3 = 9
n terms: -2n - 5n = -7n

**Answer: 9 - 7n** (or -7n + 9)

---

## Negative Coefficients

**Example:** -4x + 7x - 2x

Combine: -4 + 7 - 2 = 1

**Answer: 1x = x**

**Remember:** When coefficient is 1, we usually just write the variable!

**Example 2:** 3y - 5y + y

Combine: 3 - 5 + 1 = -1

**Answer: -1y = -y**

---

## Multiple Variables in One Expression

**Example:** 4a + 3b - 2a + 5b - 1

**Step 1:** Identify groups
- a terms: 4a - 2a
- b terms: 3b + 5b
- Constants: -1

**Step 2:** Combine
- 4a - 2a = 2a
- 3b + 5b = 8b
- Constant: -1

**Answer: 2a + 8b - 1**

---

## More Complex Examples

**Example 1:** 7x + 2y - 3x + 8y - 4

Group and combine:
- x: 7x - 3x = 4x
- y: 2y + 8y = 10y
- Constant: -4

**Answer: 4x + 10y - 4**

**Example 2:** 10 - 3m + 5 + 7m - 2

Combine:
- Constants: 10 + 5 - 2 = 13
- m terms: -3m + 7m = 4m

**Answer: 13 + 4m** (or 4m + 13)

---

## When Terms Are Not Like Terms

**Example:** 3x + 4y + 2

**Cannot combine!** Different variables and a constant.

**Answer: 3x + 4y + 2** (already simplified)

**Example 2:** 5a + 3b

Different variables, cannot combine.

**Answer: 5a + 3b** (already simplified)

**Important:** Only combine like terms! Don't combine different variables.

---

## Identifying Like Terms

**Practice identifying:**

**Which are like terms with 5x?**
- 3x ✓ (same variable)
- -2x ✓ (same variable)
- 5y ✗ (different variable)
- x ✓ (same as 1x)
- 5 ✗ (constant, no variable)

**Which are like terms with 7?**
- -3 ✓ (both constants)
- 10 ✓ (both constants)
- 7x ✗ (has variable)

---

## Combining in Equations

**Example:** Solve 3x + 5x = 24

**Step 1:** Combine like terms
8x = 24

**Step 2:** Solve
x = 3

**Combining made it a one-step equation!**

**Example 2:** Solve 4y - y + 6 = 15

**Step 1:** Combine like terms
3y + 6 = 15

**Step 2:** Solve (two-step)
3y = 9
y = 3

---

## Distributive Property Then Combine

**Example:** 2(x + 3) + 3(x + 1)

**Step 1:** Distribute
2x + 6 + 3x + 3

**Step 2:** Combine like terms
5x + 9

**Answer: 5x + 9**

**Example 2:** 5(2a - 1) - 3(a + 2)

**Step 1:** Distribute
10a - 5 - 3a - 6

**Step 2:** Combine
7a - 11

**Answer: 7a - 11**

---

## Rearranging Before Combining

**Example:** 5 + 3x - 2 + 7x

**Rearrange to group like terms:**
3x + 7x + 5 - 2

**Combine:**
10x + 3

**Tip:** Grouping like terms helps avoid mistakes!

---

## Real-World Applications

**Perimeter:**
Rectangle with length (2x + 3) and width (x + 5)

Perimeter = 2(length) + 2(width)
= 2(2x + 3) + 2(x + 5)
= 4x + 6 + 2x + 10
= 6x + 16

**Shopping:**
Buy 3 shirts at $x each and 5 more at $x each
Total: 3x + 5x = 8x

**Total shirts:** 8 shirts at $x each

---

## Order Doesn't Matter

**Commutative Property:** Can rearrange terms

5x + 3y = 3y + 5x (same thing!)

**Standard form:** Usually write in alphabetical order
- 5x + 3y (not 3y + 5x)
- Constants at the end: 2x + 5 (not 5 + 2x)

**But mathematically equivalent!**

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Combining unlike terms
- Wrong: 3x + 4y = 7xy
- Right: 3x + 4y (cannot combine)

❌ **Mistake 2:** Forgetting coefficient of 1
- Wrong: 5x + x = 5x
- Right: 5x + x = 5x + 1x = 6x

❌ **Mistake 3:** Sign errors
- Wrong: 8x - 5x = 13x
- Right: 8x - 5x = 3x

❌ **Mistake 4:** Combining different powers
- Wrong: x + x² = x³
- Right: x + x² (cannot combine)

❌ **Mistake 5:** Changing the variable
- Wrong: 3x + 2x = 5 (lost the x!)
- Right: 3x + 2x = 5x

---

## Problem-Solving Strategy

**To simplify expressions:**
1. Identify all like terms
2. Group like terms together
3. Add or subtract coefficients
4. Keep variable part the same
5. Write in standard form

**To solve equations:**
1. Distribute if needed
2. Combine like terms on each side
3. Use inverse operations to solve
4. Check your answer

---

## Quick Reference

**Like Terms:** Same variable(s) and power(s)

**Combining:**
- Add/subtract coefficients only
- Keep variable part unchanged

**Examples:**
- 4x + 3x = 7x
- 8y - 5y = 3y
- 3 + 7 = 10
- 2a + 3b cannot combine

**Steps:**
1. Identify like terms
2. Group them
3. Combine coefficients
4. Simplify

**Remember:** Only like terms can be combined!

---

## Practice Tips

**Tip 1:** Circle or underline like terms
- Helps visually group them
- Reduces errors

**Tip 2:** Use different colors
- One color for x terms
- Another for y terms
- Another for constants

**Tip 3:** Write coefficients clearly
- Remember x = 1x
- Don't forget negative signs!

**Tip 4:** Check by substituting
- Pick a value for variables
- Evaluate before and after combining
- Should get same result

**Tip 5:** Practice identifying
- Before combining, make sure terms are actually like
- "Same variable and power?"

---

## Summary

**Like terms have the same variable(s) and power(s):**
- 5x and 3x are like terms
- 2y and 7z are NOT like terms

**Combining like terms:**
- Add or subtract coefficients
- Keep variable part the same
- Simplifies expressions

**Process:**
1. Identify like terms
2. Group them together
3. Combine coefficients
4. Write simplified expression

**Applications:**
- Simplifying expressions
- Solving equations more easily
- Working with formulas
- Real-world problem solving

**Key skill:** Recognizing which terms can be combined is essential for all future algebra!

Mastering combining like terms makes algebra much easier and is used in every equation you'll solve!`
    }
  });
  console.log('✅ Updated: combining-like-terms');

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
