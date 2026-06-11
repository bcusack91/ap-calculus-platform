import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Grade 5 Math topics - Batch 1 (3 topics)...\n');

  const grade5Course = await prisma.course.findUnique({
    where: { slug: 'grade-5-math' }
  });

  if (!grade5Course) {
    throw new Error('Grade 5 Math course not found');
  }

  const updates = [
    {
      slug: 'order-of-operations',
      content: `# Order of Operations

## What is Order of Operations?

**Order of Operations** tells us the correct order to solve math problems that have more than one operation.

Without a set order, people might get different answers to the same problem!

**Example:**
6 + 3 × 2 = ?

- If you add first: 6 + 3 = 9, then 9 × 2 = **18** ❌
- If you multiply first: 3 × 2 = 6, then 6 + 6 = **12** ✓

The correct answer is 12! We need rules to know which way is right.

## PEMDAS - The Order

We use **PEMDAS** to remember the order:

**P** - Parentheses ( )
**E** - Exponents (powers like 3²)
**M** - Multiplication
**D** - Division
**A** - Addition
**S** - Subtraction

**Memory tricks:**
- "**P**lease **E**xcuse **M**y **D**ear **A**unt **S**ally"
- "**P**urple **E**lephants **M**arch **D**own **A**venues **S**moking"

## The Rules

**Rule 1:** Do operations inside **Parentheses** first
**Rule 2:** Then do **Exponents** (powers)
**Rule 3:** Then **Multiply** and **Divide** from LEFT to RIGHT
**Rule 4:** Finally **Add** and **Subtract** from LEFT to RIGHT

**Important:** Multiplication and Division are equal (do left to right)
**Important:** Addition and Subtraction are equal (do left to right)

## Step-by-Step Examples

### Example 1: Simple Problem
**Problem:** 8 + 5 × 2

**Step 1:** Check for parentheses - None ✓
**Step 2:** Check for exponents - None ✓
**Step 3:** Multiply: 5 × 2 = 10
**Step 4:** Add: 8 + 10 = 18

**Answer: 18** ✓

### Example 2: With Parentheses
**Problem:** (6 + 2) × 3

**Step 1:** Parentheses first: 6 + 2 = 8
**Step 2:** Multiply: 8 × 3 = 24

**Answer: 24** ✓

### Example 3: Multiple Operations
**Problem:** 20 - 3 × 4 + 6

**Step 1:** Multiply: 3 × 4 = 12
**Step 2:** Now we have: 20 - 12 + 6
**Step 3:** Subtract and add from left to right:
  - 20 - 12 = 8
  - 8 + 6 = 14

**Answer: 14** ✓

### Example 4: With Division
**Problem:** 12 ÷ 3 + 4 × 2

**Step 1:** Multiply AND divide (left to right):
  - 12 ÷ 3 = 4
  - 4 × 2 = 8
  
**Step 2:** Now we have: 4 + 8
**Step 3:** Add: 4 + 8 = 12

**Answer: 12** ✓

### Example 5: Everything Together
**Problem:** 5 + (8 - 3) × 2² - 1

**Step 1:** Parentheses: 8 - 3 = 5
**Step 2:** Exponents: 2² = 4
**Step 3:** Now we have: 5 + 5 × 4 - 1
**Step 4:** Multiply: 5 × 4 = 20
**Step 5:** Now we have: 5 + 20 - 1
**Step 6:** Add and subtract (left to right):
  - 5 + 20 = 25
  - 25 - 1 = 24

**Answer: 24** ✓

## Common Mistakes

❌ **Mistake 1:** Doing operations from left to right without following PEMDAS

Wrong: 6 + 3 × 2 = 9 × 2 = 18 ✗
Right: 6 + 3 × 2 = 6 + 6 = 12 ✓

❌ **Mistake 2:** Forgetting parentheses change everything

Wrong: 2 × (3 + 4) = 6 + 4 = 10 ✗
Right: 2 × (3 + 4) = 2 × 7 = 14 ✓

❌ **Mistake 3:** Doing addition before multiplication

Wrong: 5 + 2 × 3 = 7 × 3 = 21 ✗
Right: 5 + 2 × 3 = 5 + 6 = 11 ✓

## Left to Right Rule

When operations are EQUAL in order, go from LEFT to RIGHT:

**Example:** 12 ÷ 3 × 2
- Multiply and divide are equal
- Go left to right: 12 ÷ 3 = 4, then 4 × 2 = 8 ✓

**Example:** 10 - 3 + 2
- Subtract and add are equal  
- Go left to right: 10 - 3 = 7, then 7 + 2 = 9 ✓

## Why Parentheses Matter

Parentheses can completely change an answer!

**Without parentheses:** 3 + 4 × 2 = 3 + 8 = **11**
**With parentheses:** (3 + 4) × 2 = 7 × 2 = **14**

Same numbers, different answer!

## Practice Strategy

**When solving:**

**Step 1:** Underline or circle parentheses - do these first!
**Step 2:** Look for exponents - do these next
**Step 3:** Find all × and ÷ - do left to right
**Step 4:** Find all + and - - do left to right
**Step 5:** Check your work!

## Real-World Applications

**Shopping:**
You buy 3 notebooks at $2 each plus a $5 backpack.
Cost = 3 × $2 + $5 = $6 + $5 = $11 ✓

**Cooking:**
Recipe says: (2 cups sugar + 1 cup) × 2 (to double it)
= 3 cups × 2 = 6 cups ✓

## Using Parentheses to Show Work

You can add parentheses to show what you did:

**Problem:** 10 + 2 × 5

**Show your work:**
= 10 + (2 × 5)    [multiply first]
= 10 + 10         [then add]
= 20 ✓

## Exponents Review

**Exponents** show repeated multiplication:

- 2³ = 2 × 2 × 2 = 8
- 5² = 5 × 5 = 25
- 3² = 3 × 3 = 9

Do these AFTER parentheses but BEFORE multiply/divide!

## The No-PEMDAS Problems

Some problems don't need PEMDAS because they only have one operation:

- 5 + 3 + 2 = 10 (just addition)
- 20 - 5 - 3 = 12 (just subtraction, left to right)
- 4 × 2 × 3 = 24 (just multiplication)

## Checking Your Work

**Method 1:** Do it again following PEMDAS carefully
**Method 2:** Use a calculator (it follows PEMDAS!)
**Method 3:** Ask: Does my answer make sense?

## Tips for Success

✅ Write out each step
✅ Cross out operations as you do them
✅ Use parentheses to show your thinking
✅ Double-check you followed PEMDAS order
✅ Practice, practice, practice!

## Summary

**Remember PEMDAS:**
1. **P**arentheses first
2. **E**xponents second
3. **M**ultiply and **D**ivide from left to right
4. **A**dd and **S**ubtract from left to right

**The Golden Rule:** Follow the order every time, and you'll get the right answer! ✓`
    },
    {
      slug: 'multiplying-dividing-fractions',
      content: `# Multiplying and Dividing Fractions

## Multiplying Fractions

### The Rule

To multiply fractions:
**Multiply the numerators (tops)**
**Multiply the denominators (bottoms)**

Formula: a/b × c/d = (a × c)/(b × d)

### Basic Example

**Problem:** 1/2 × 1/3 = ?

**Step 1:** Multiply numerators: 1 × 1 = 1
**Step 2:** Multiply denominators: 2 × 3 = 6
**Step 3:** Write answer: 1/6

**Answer: 1/6** ✓

**Visual:** If you take 1/2 of 1/3, you get 1/6!

### More Examples

**Example 1:** 2/3 × 3/4

2 × 3 = 6 (numerators)
3 × 4 = 12 (denominators)

Answer: 6/12 = 1/2 (simplified) ✓

**Example 2:** 3/5 × 2/7

3 × 2 = 6
5 × 7 = 35

Answer: 6/35 ✓ (can't simplify)

### Simplifying Before You Multiply

**Smart trick:** Cancel common factors BEFORE multiplying!

**Example:** 2/3 × 3/4

Notice: 3 appears in numerator AND denominator
Cancel the 3s:

2/~~3~~ × ~~3~~/4 = 2/4 = 1/2 ✓

This makes the math easier!

**Example:** 4/5 × 5/8

Cancel the 5s:
4/~~5~~ × ~~5~~/8 = 4/8 = 1/2 ✓

### Multiplying with Whole Numbers

To multiply a fraction by a whole number:
**Put the whole number over 1**

**Example:** 3 × 2/5

Write as: 3/1 × 2/5

3 × 2 = 6
1 × 5 = 5

Answer: 6/5 = 1 1/5 ✓

### Multiplying Mixed Numbers

**Step 1:** Convert mixed numbers to improper fractions
**Step 2:** Multiply
**Step 3:** Convert back to mixed number (if needed)

**Example:** 1 1/2 × 2 1/3

**Step 1:** Convert
- 1 1/2 = 3/2
- 2 1/3 = 7/3

**Step 2:** Multiply
3/2 × 7/3 = 21/6

**Step 3:** Simplify
21/6 = 7/2 = 3 1/2 ✓

## Dividing Fractions

### The Rule: Keep, Change, Flip (KCF)

To divide fractions:
1. **Keep** the first fraction
2. **Change** ÷ to ×
3. **Flip** the second fraction (reciprocal)

Then multiply!

### What's a Reciprocal?

The reciprocal flips a fraction upside down:
- Reciprocal of 2/3 is 3/2
- Reciprocal of 5/1 is 1/5
- Reciprocal of 4/7 is 7/4

**Trick:** Swap the numerator and denominator!

### Basic Example

**Problem:** 1/2 ÷ 1/4 = ?

**Step 1:** Keep: 1/2
**Step 2:** Change: ÷ becomes ×
**Step 3:** Flip: 1/4 becomes 4/1

Now multiply: 1/2 × 4/1 = 4/2 = 2 ✓

**Answer: 2** ✓

**Think:** How many 1/4s fit in 1/2? Two! ✓

### More Examples

**Example 1:** 3/4 ÷ 1/2

Keep-Change-Flip:
3/4 × 2/1 = 6/4 = 3/2 = 1 1/2 ✓

**Example 2:** 2/3 ÷ 4/5

Keep-Change-Flip:
2/3 × 5/4 = 10/12 = 5/6 ✓

**Example 3:** 5/6 ÷ 2/3

Keep-Change-Flip:
5/6 × 3/2 = 15/12 = 5/4 = 1 1/4 ✓

### Dividing by a Whole Number

**Put the whole number over 1, then flip it!**

**Example:** 3/4 ÷ 2

**Step 1:** Write 2 as 2/1
**Step 2:** Keep-Change-Flip: 3/4 × 1/2
**Step 3:** Multiply: 3/8 ✓

### Dividing with Mixed Numbers

**Example:** 2 1/2 ÷ 1 1/4

**Step 1:** Convert to improper fractions
- 2 1/2 = 5/2
- 1 1/4 = 5/4

**Step 2:** Keep-Change-Flip
5/2 × 4/5

**Step 3:** Cancel and multiply
~~5~~/2 × 4/~~5~~ = 4/2 = 2 ✓

## Why Does "Flip and Multiply" Work?

Think about: 1/2 ÷ 1/4

**Question:** How many 1/4s are in 1/2?

**Visual:** Two 1/4 pieces fit perfectly into 1/2!

When you flip and multiply (1/2 × 4/1 = 2), you get the same answer! ✓

## Word Problems

### Multiplication Problem

**Problem:** A recipe needs 2/3 cup of sugar. You want to make 1/2 of the recipe. How much sugar?

**Solution:** 2/3 × 1/2 = 2/6 = 1/3 cup ✓

### Division Problem

**Problem:** You have 3/4 yard of ribbon. You need to cut it into pieces that are 1/8 yard each. How many pieces?

**Solution:** 3/4 ÷ 1/8
= 3/4 × 8/1
= 24/4 = 6 pieces ✓

## Common Mistakes

❌ **Mistake 1:** Multiplying denominators when dividing
Wrong: 1/2 ÷ 1/4 = 1/8 ✗
Right: 1/2 ÷ 1/4 = 1/2 × 4/1 = 2 ✓

❌ **Mistake 2:** Forgetting to flip the second fraction
Wrong: 3/4 ÷ 1/2 = 3/4 × 1/2 ✗
Right: 3/4 ÷ 1/2 = 3/4 × 2/1 = 3/2 ✓

❌ **Mistake 3:** Flipping the wrong fraction
Wrong: 1/2 ÷ 3/4 = 2/1 × 3/4 ✗
Right: 1/2 ÷ 3/4 = 1/2 × 4/3 ✓

## Multiplication vs. Division

**Multiplication** makes fractions smaller (usually):
- 1/2 × 1/3 = 1/6 (smaller than both!)

**Division** makes fractions bigger (usually):
- 1/2 ÷ 1/4 = 2 (bigger than both!)

## Quick Reference

**Multiplying Fractions:**
- Multiply tops
- Multiply bottoms
- Simplify

**Dividing Fractions:**
- Keep first fraction
- Change ÷ to ×
- Flip second fraction
- Multiply
- Simplify

## Tips for Success

✅ Always simplify your final answer
✅ Look for common factors to cancel before multiplying
✅ Convert mixed numbers to improper fractions first
✅ Remember: KCF (Keep, Change, Flip) for division
✅ Check: Does my answer make sense?

## Practice Checklist

When multiplying:
☐ Multiply numerators
☐ Multiply denominators
☐ Simplify the answer

When dividing:
☐ Keep the first fraction
☐ Change ÷ to ×
☐ Flip the second fraction
☐ Multiply
☐ Simplify the answer

## Summary

**Multiplying fractions:** Multiply across (tops and bottoms)

**Dividing fractions:** Keep-Change-Flip, then multiply!

**Remember:** Division is just multiplication by the reciprocal! ✓`
    },
    {
      slug: 'factors-and-multiples',
      content: `# Factors and Multiples

## What are Factors?

**Factors** are numbers that divide evenly into another number (no remainder).

**Example:** Factors of 12

What numbers divide evenly into 12?
- 12 ÷ 1 = 12 ✓
- 12 ÷ 2 = 6 ✓
- 12 ÷ 3 = 4 ✓
- 12 ÷ 4 = 3 ✓
- 12 ÷ 5 = 2.4 ✗ (not a whole number!)
- 12 ÷ 6 = 2 ✓
- 12 ÷ 12 = 1 ✓

**Factors of 12: 1, 2, 3, 4, 6, 12** ✓

### Finding Factors - The Pair Method

Find factors in pairs that multiply to make the number!

**Example: Factors of 24**

1 × 24 = 24 → Factors: 1, 24
2 × 12 = 24 → Factors: 2, 12
3 × 8 = 24 → Factors: 3, 8
4 × 6 = 24 → Factors: 4, 6

**All factors of 24: 1, 2, 3, 4, 6, 8, 12, 24** ✓

**Tip:** Write them in order from smallest to largest!

### Factor Rules

**Rule 1:** Every number has at least TWO factors: 1 and itself
- Factors of 7: 1, 7

**Rule 2:** 1 is a factor of every number
- 1 is a factor of 5, 10, 99, 1000...

**Rule 3:** The number itself is always a factor
- 15 is a factor of 15

## What are Multiples?

**Multiples** are what you get when you multiply a number by whole numbers (1, 2, 3, 4...).

**Example:** Multiples of 3

3 × 1 = 3
3 × 2 = 6
3 × 3 = 9
3 × 4 = 12
3 × 5 = 15...

**Multiples of 3: 3, 6, 9, 12, 15, 18, 21...** ✓

**Important:** Multiples go on forever! ∞

### Finding Multiples

Just keep multiplying by 1, 2, 3, 4, 5...

**Example: First 6 multiples of 5**

5 × 1 = 5
5 × 2 = 10
5 × 3 = 15
5 × 4 = 20
5 × 5 = 25
5 × 6 = 30

**Answer: 5, 10, 15, 20, 25, 30** ✓

### Multiple Rules

**Rule 1:** Every number is a multiple of itself
- 7 is a multiple of 7 (7 × 1 = 7)

**Rule 2:** Every number is a multiple of 1
- 1 × 20 = 20, so 20 is a multiple of 1

**Rule 3:** Multiples get bigger and bigger
- They go to infinity!

## Factors vs. Multiples

**Think of it this way:**

**Factors** are SMALL (smaller than or equal to the number)
- Factors of 12: 1, 2, 3, 4, 6, 12 (all ≤ 12)

**Multiples** are BIG (bigger than or equal to the number)
- Multiples of 12: 12, 24, 36, 48... (all ≥ 12)

**Factors** divide INTO a number
**Multiples** are what you GET when multiplying

## Common Factors

**Common factors** are factors that two numbers share.

**Example:** Common factors of 12 and 18

Factors of 12: 1, 2, 3, 4, 6, 12
Factors of 18: 1, 2, 3, 6, 9, 18

**Common factors: 1, 2, 3, 6** ✓ (appear in both lists)

### Greatest Common Factor (GCF)

The **largest** factor that two numbers share.

**Example:** GCF of 12 and 18

Common factors: 1, 2, 3, 6

**GCF = 6** ✓ (the biggest!)

**We'll learn more about GCF in the next lesson!**

## Common Multiples

**Common multiples** are multiples that two numbers share.

**Example:** Common multiples of 3 and 4

Multiples of 3: 3, 6, 9, **12**, 15, 18, 21, **24**, 27, 30...
Multiples of 4: 4, 8, **12**, 16, 20, **24**, 28...

**Common multiples: 12, 24, 36...** ✓

### Least Common Multiple (LCM)

The **smallest** multiple that two numbers share (not counting 0).

**Example:** LCM of 3 and 4

**LCM = 12** ✓ (the smallest common multiple)

**We'll learn more about LCM in the next lesson!**

## Finding All Factors - Organized Method

**Example: Find all factors of 36**

**Step 1:** Start with 1
1 × 36 = 36 → Write: 1, ___, ___, 36

**Step 2:** Try 2
2 × 18 = 36 → Write: 1, 2, ___, 18, 36

**Step 3:** Try 3
3 × 12 = 36 → Write: 1, 2, 3, ___, 12, 18, 36

**Step 4:** Try 4
4 × 9 = 36 → Write: 1, 2, 3, 4, 9, 12, 18, 36

**Step 5:** Try 5
36 ÷ 5 = 7.2 ✗ Not a factor!

**Step 6:** Try 6
6 × 6 = 36 → Write: 1, 2, 3, 4, 6, 9, 12, 18, 36

**Stop when pairs repeat!**

**Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36** ✓

## Factor Pairs

Factors often come in **pairs** that multiply together.

**Example: Factor pairs of 20**

1 × 20 = 20
2 × 10 = 20
4 × 5 = 20

**Factor pairs: (1,20), (2,10), (4,5)** ✓

## Divisibility Tricks

Quick ways to check if a number is a factor:

**Factor 2:** Ends in 0, 2, 4, 6, or 8 (even)
- 24 → Yes! (ends in 4) ✓

**Factor 3:** Digit sum divisible by 3
- 24 → 2+4=6, and 6÷3=2 ✓ Yes!

**Factor 5:** Ends in 0 or 5
- 24 → No (ends in 4) ✗

**Factor 10:** Ends in 0
- 24 → No ✗

## Real-World Examples

### Factors in Real Life

**Problem:** You have 24 cupcakes. What are all the ways you can arrange them in equal rows?

**Solution:** Find factors of 24!

Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24

You could make:
- 1 row of 24 cupcakes
- 2 rows of 12 cupcakes
- 3 rows of 8 cupcakes
- 4 rows of 6 cupcakes
- 6 rows of 4 cupcakes
- 8 rows of 3 cupcakes
- 12 rows of 2 cupcakes
- 24 rows of 1 cupcake

### Multiples in Real Life

**Problem:** Hot dogs come in packs of 8. How many hot dogs will you have if you buy 1, 2, 3, or 4 packs?

**Solution:** Find multiples of 8!

8 × 1 = 8 hot dogs
8 × 2 = 16 hot dogs
8 × 3 = 24 hot dogs
8 × 4 = 32 hot dogs

## Practice Strategy

**To find factors:**
1. Start with 1
2. Test each number: Does it divide evenly?
3. Write factor pairs
4. Stop when pairs repeat
5. List in order

**To find multiples:**
1. Multiply by 1, 2, 3, 4, 5...
2. Keep going as many as you need
3. Remember they go on forever!

## Common Mistakes

❌ **Mistake 1:** Forgetting 1 and the number itself
Wrong: Factors of 10 are 2, 5 ✗
Right: Factors of 10 are 1, 2, 5, 10 ✓

❌ **Mistake 2:** Mixing up factors and multiples
Factors are small, multiples are big!

❌ **Mistake 3:** Listing factors out of order
Always write them from smallest to largest!

## Quick Check

**Is 4 a factor of 20?**
20 ÷ 4 = 5 ✓ Yes! (no remainder)

**Is 20 a multiple of 4?**
4 × 5 = 20 ✓ Yes!

**Both are true!** 4 is a factor of 20, AND 20 is a multiple of 4.

## Summary

**Factors:**
- Numbers that divide evenly into another number
- Small (≤ the number)
- Limited amount
- Example: Factors of 12 are 1, 2, 3, 4, 6, 12

**Multiples:**
- Products of a number multiplied by 1, 2, 3...
- Big (≥ the number)
- Infinite (go on forever)
- Example: Multiples of 12 are 12, 24, 36, 48...

**Remember:** Factors divide IN, multiples multiply OUT! ✓`
    }
  ];

  let updatedCount = 0;
  for (const update of updates) {
    const updated = await prisma.topic.updateMany({
      where: {
        slug: update.slug,
        category: {
          course: { slug: 'grade-5-math' }
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
