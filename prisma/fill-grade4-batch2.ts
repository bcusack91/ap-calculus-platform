import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling 3 Grade 4 Math topics...\n');

  const grade4Course = await prisma.course.findUnique({
    where: { slug: 'grade-4-math' }
  });

  if (!grade4Course) {
    throw new Error('Grade 4 Math course not found');
  }

  const updates = [
    {
      slug: 'division-with-remainders',
      content: `# Division with Remainders

## What is a Remainder?

A **remainder** is what's left over when you can't divide evenly.

**Example:** 13 ÷ 4 = 3 with a remainder of 1
- You can make 3 groups of 4 (3 × 4 = 12)
- You have 1 left over that doesn't make a complete group
- We write: 13 ÷ 4 = 3 R1

## Real-World Examples

**Sharing cookies:**
- You have 17 cookies
- 5 friends want to share them equally
- 17 ÷ 5 = 3 R2
- Each friend gets 3 cookies
- 2 cookies are left over

**Packing boxes:**
- You have 26 books
- Each box holds 4 books
- 26 ÷ 4 = 6 R2
- You can fill 6 complete boxes
- 2 books don't fit in a full box

## How to Find the Remainder

**Step-by-step:** 23 ÷ 5

**Step 1:** How many 5s go into 23?
- 5 × 4 = 20 ✓ (This works!)
- 5 × 5 = 25 ✗ (Too big!)
- So 4 groups of 5

**Step 2:** Multiply: 4 × 5 = 20

**Step 3:** Subtract: 23 - 20 = 3

**Answer: 23 ÷ 5 = 4 R3**

## Long Division with Remainders

**Example:** 47 ÷ 6

\`\`\`
      7 R5
   -------
 6 | 47
     42    (6 × 7 = 42)
    ---
      5    (47 - 42 = 5)
\`\`\`

**Steps:**
1. How many 6s in 47? → 7 (because 6 × 7 = 42)
2. Write 7 on top
3. Multiply: 7 × 6 = 42
4. Subtract: 47 - 42 = 5
5. The remainder is 5

**Answer: 47 ÷ 6 = 7 R5** ✓

## Checking Your Answer

**Important rule:** The remainder must be SMALLER than the divisor!

**To check your division with remainders:**
1. Multiply: quotient × divisor
2. Add the remainder
3. Should equal the original number!

**Example:** Check 23 ÷ 5 = 4 R3
- Multiply: 4 × 5 = 20
- Add remainder: 20 + 3 = 23 ✓
- Correct!

## What To Do With Remainders

**Different situations need different solutions:**

**1. Drop the remainder** (when you can't use a partial item)
- "How many 6-packs can you make from 50 cans?"
- 50 ÷ 6 = 8 R2
- Answer: 8 six-packs (ignore the 2 extra cans)

**2. Round up** (when you need one more)
- "How many cars for 23 people if each car holds 5?"
- 23 ÷ 5 = 4 R3
- Answer: 5 cars needed (those 3 people need a ride too!)

**3. Use the remainder as the answer**
- "You have 17 pencils. You give 5 to each friend. How many left over?"
- 17 ÷ 5 = 3 R2
- Answer: 2 pencils left over

**4. Write as a fraction** (in later grades)
- 17 ÷ 5 = 3 2/5

## Practice Problems

**Easy:**
- 14 ÷ 3 = 4 R2 (Check: 4 × 3 + 2 = 14 ✓)
- 19 ÷ 4 = 4 R3 (Check: 4 × 4 + 3 = 19 ✓)
- 25 ÷ 6 = 4 R1 (Check: 4 × 6 + 1 = 25 ✓)

**Medium:**
- 37 ÷ 5 = 7 R2
- 58 ÷ 7 = 8 R2
- 43 ÷ 9 = 4 R7

**Story problem:**
You have 38 stickers. You want to put 5 stickers on each page.
- How many pages can you fill completely? 
- 38 ÷ 5 = 7 R3
- Answer: 7 complete pages, with 3 stickers left over

## Visual Model

**18 ÷ 4 using circles:**

\`\`\`
Group 1: ○ ○ ○ ○
Group 2: ○ ○ ○ ○
Group 3: ○ ○ ○ ○
Group 4: ○ ○ ○ ○
Left over: ○ ○
\`\`\`

**Answer: 4 groups with 2 left over → 18 ÷ 4 = 4 R2**

## Remainders vs No Remainders

**No remainder** = Divides evenly
- 20 ÷ 4 = 5 (perfect! No remainder)
- 18 ÷ 6 = 3 (evenly divided)

**With remainder** = Doesn't divide evenly
- 21 ÷ 4 = 5 R1
- 19 ÷ 6 = 3 R1

## Common Mistakes

❌ Having a remainder bigger than the divisor
- If dividing by 5 and you get R6, you made a mistake!
- The remainder must be less than 5

❌ Forgetting to write the remainder
- 23 ÷ 5 = 4 is WRONG
- Must write: 23 ÷ 5 = 4 R3 ✓

❌ Not checking your answer
- Always check: (quotient × divisor) + remainder = dividend

✅ Remainder is always smaller than the divisor
✅ Always write "R" before the remainder
✅ Check your work by multiplying and adding back

## Division Vocabulary Review

- **Dividend:** The number being divided (inside the house)
- **Divisor:** The number you're dividing by (outside)
- **Quotient:** The answer (on top)
- **Remainder:** What's left over

**Example:** 17 ÷ 5 = 3 R2
- 17 = dividend
- 5 = divisor
- 3 = quotient
- 2 = remainder

## Why Remainders Matter

**In real life, remainders help us:**
- Know how many items are left over
- Decide if we need more supplies
- Split things fairly
- Solve everyday problems

**Remember:** Not everything divides evenly, and that's okay! The remainder tells us important information.`
    },
    {
      slug: 'adding-fractions-like-denominators',
      content: `# Adding Fractions with Like Denominators

## What Are Like Denominators?

**Like denominators** means the bottom numbers (denominators) are the same.

**Examples of like denominators:**
- 1/4 and 3/4 (both have 4 on bottom)
- 2/5 and 4/5 (both have 5 on bottom)
- 3/8 and 5/8 (both have 8 on bottom)

## The Simple Rule

**When denominators are the same:**
1. Add the numerators (top numbers)
2. Keep the denominator the same
3. Simplify if needed

**Think of it like:** You're counting the same type of pieces!

## Visual Model: Pizza Slices

**Problem:** 1/8 + 3/8

**Picture it:**
- Pizza cut into 8 slices
- You eat 1 slice: 1/8
- Your friend eats 3 slices: 3/8
- Together you ate: 1/8 + 3/8 = 4/8

**All the slices are the same size (eighths), so just count them!**

\`\`\`
You:    [■] out of 8 slices = 1/8
Friend: [■ ■ ■] out of 8 slices = 3/8
Total:  [■ ■ ■ ■] out of 8 slices = 4/8 = 1/2 ✓
\`\`\`

## Step-by-Step Examples

**Example 1:** 2/5 + 1/5

**Step 1:** Check denominators → Both are 5 ✓
**Step 2:** Add numerators → 2 + 1 = 3
**Step 3:** Keep denominator → 5
**Step 4:** Write answer → 3/5

**Answer: 2/5 + 1/5 = 3/5** ✓

**Example 2:** 3/10 + 4/10

**Step 1:** Denominators both 10 ✓
**Step 2:** Add numerators → 3 + 4 = 7
**Step 3:** Keep denominator → 10
**Step 4:** Answer → 7/10

**Answer: 3/10 + 4/10 = 7/10** ✓

## When the Answer Needs Simplifying

**Example:** 2/6 + 2/6

**Step 1:** Add numerators → 2 + 2 = 4
**Step 2:** Keep denominator → 6
**Step 3:** Write answer → 4/6
**Step 4:** Simplify! → 4/6 = 2/3

**Answer: 2/6 + 2/6 = 4/6 = 2/3** ✓

**How to simplify:**
- Find a number that divides both top and bottom
- 4 and 6 are both divisible by 2
- 4 ÷ 2 = 2 and 6 ÷ 2 = 3
- So 4/6 = 2/3

## When You Get an Improper Fraction

**Example:** 5/8 + 4/8

**Step 1:** Add numerators → 5 + 4 = 9
**Step 2:** Keep denominator → 8
**Step 3:** Answer → 9/8

**9/8 is bigger than 1 whole!**

**Can also write as:** 1 1/8 (one and one-eighth)
- 8/8 = 1 whole
- Plus 1/8 more = 1 1/8

**Answer: 5/8 + 4/8 = 9/8 = 1 1/8** ✓

## Using Number Lines

**Adding 1/4 + 2/4:**

\`\`\`
0 ―――¼―――2/4―――¾―――1
     ↑    ↑
   Start  +2/4
     └─────→ End at 3/4
\`\`\`

- Start at 1/4
- Jump 2 more fourths
- Land on 3/4

**Answer: 1/4 + 2/4 = 3/4** ✓

## Real-World Examples

**Measuring cups:**
- Recipe needs 1/3 cup oil and 2/3 cup oil
- Total: 1/3 + 2/3 = 3/3 = 1 cup ✓

**Walking distance:**
- Walk 2/10 mile to park
- Walk 3/10 mile further
- Total: 2/10 + 3/10 = 5/10 = 1/2 mile ✓

**Time:**
- Study math for 1/4 hour
- Study reading for 2/4 hour  
- Total: 1/4 + 2/4 = 3/4 hour (45 minutes) ✓

## Three or More Fractions

**Example:** 1/8 + 3/8 + 2/8

**Just keep adding numerators:**
- 1 + 3 + 2 = 6
- Keep denominator: 8
- Answer: 6/8 = 3/4 ✓

## The Pattern

**Notice the pattern:**
- 1/5 + 2/5 = 3/5
- 2/7 + 4/7 = 6/7
- 3/10 + 5/10 = 8/10 = 4/5

**Rule:** Numerators add, denominators stay the same!

## Why It Works

**Think of fractions as counting:**
- 2/8 means "2 eighths"
- 3/8 means "3 eighths"
- Adding them: "2 eighths + 3 eighths = 5 eighths"
- Just like: 2 apples + 3 apples = 5 apples!

**You're counting the same-sized pieces.**

## Practice Strategy

**Before you start:**
1. Check: Are the denominators the same?
2. If YES → Add numerators, keep denominator
3. If NO → This is a different lesson (unlike denominators)

**After you solve:**
1. Can you simplify?
2. Is it an improper fraction?
3. Does your answer make sense?

## Common Mistakes

❌ Adding denominators too
- WRONG: 1/4 + 2/4 = 3/8
- RIGHT: 1/4 + 2/4 = 3/4

❌ Forgetting to simplify
- 2/8 + 2/8 = 4/8 → Should simplify to 1/2

❌ Changing the denominator
- Keep it the same!

✅ Only add the numerators
✅ The denominator never changes
✅ Simplify your final answer
✅ Check if it's an improper fraction (can convert to mixed number)

## Mental Math Tricks

**When adding to make 1 whole:**
- 1/4 + ?/4 = 4/4 → Need 3/4 more
- 2/5 + ?/5 = 5/5 → Need 3/5 more
- 3/8 + ?/8 = 8/8 → Need 5/8 more

**Remember:** The denominator tells you how many pieces make one whole!

## Check Your Work

**Two ways to check:**

**1. Use pictures**
- Draw the fractions
- Count the total shaded parts
- Compare to your answer

**2. Think about size**
- Is 1/4 + 2/4 more than 1/2?
- 3/4 is bigger than 1/2 ✓
- Makes sense!

## Key Takeaways

✅ Like denominators = same bottom number
✅ Add tops, keep bottom the same
✅ Always simplify if you can
✅ Check if you got more than one whole (improper fraction)
✅ Your answer should make sense!

**Remember:** Fractions with the same denominator are like counting the same type of thing. Just add them up!`
    },
    {
      slug: 'multiplying-fractions-whole-numbers',
      content: `# Multiplying Fractions by Whole Numbers

## What Does It Mean?

**Multiplying a fraction by a whole number means adding that fraction multiple times.**

**Example:** 3 × 1/4 means "1/4 + 1/4 + 1/4"

Think of it as: "I want 3 groups of 1/4"

## Visual Model: Repeated Addition

**Problem:** 4 × 1/5

**Picture it as adding:**
1/5 + 1/5 + 1/5 + 1/5 = 4/5

\`\`\`
[■][□][□][□][□]  ← 1/5
[■][□][□][□][□]  ← 1/5
[■][□][□][□][□]  ← 1/5
[■][□][□][□][□]  ← 1/5
─────────────
[■][■][■][■][□]  = 4/5 total
\`\`\`

**Answer: 4 × 1/5 = 4/5** ✓

## The Simple Method

**Rule:** Multiply the whole number by the numerator (top number)

**Steps:**
1. Multiply whole number × numerator
2. Keep the denominator the same
3. Simplify if needed

**Example:** 5 × 2/3

**Step 1:** Multiply: 5 × 2 = 10
**Step 2:** Keep denominator: 3
**Step 3:** Write answer: 10/3 = 3 1/3

**Answer: 5 × 2/3 = 10/3 = 3 1/3** ✓

## Step-by-Step Examples

**Example 1:** 3 × 1/4

- Multiply: 3 × 1 = 3
- Keep denominator: 4
- Answer: 3/4 ✓

**Example 2:** 6 × 2/5

- Multiply: 6 × 2 = 12
- Keep denominator: 5
- Answer: 12/5 = 2 2/5 ✓

**Example 3:** 4 × 3/8

- Multiply: 4 × 3 = 12
- Keep denominator: 8
- Simplify: 12/8 = 3/2 = 1 1/2 ✓

## Writing Whole Numbers as Fractions

**Another way to think about it:**

Any whole number can be written as a fraction with denominator 1.
- 3 = 3/1
- 5 = 5/1
- 7 = 7/1

**Then multiply numerators and denominators:**

**Example:** 4 × 2/3
- Write as: 4/1 × 2/3
- Multiply tops: 4 × 2 = 8
- Multiply bottoms: 1 × 3 = 3
- Answer: 8/3 = 2 2/3 ✓

(Same answer, different method!)

## Real-World Examples

**Recipes:**
You're making 3 batches of cookies. Each batch needs 2/3 cup of sugar.
- 3 × 2/3 = 6/3 = 2 cups of sugar ✓

**Running:**
You run 3/4 mile each day for 5 days.
- 5 × 3/4 = 15/4 = 3 3/4 miles total ✓

**Ribbon:**
You need 4 pieces of ribbon, each 5/8 yard long.
- 4 × 5/8 = 20/8 = 2 4/8 = 2 1/2 yards ✓

## Converting to Mixed Numbers

**When numerator > denominator:**

**Example:** 7 × 3/4 = 21/4

**Convert to mixed number:**
- How many 4s in 21? → 5 (with remainder 1)
- 21 ÷ 4 = 5 R1
- Write as: 5 1/4

**Answer: 21/4 = 5 1/4** ✓

## Using Arrays and Area Models

**Problem:** 3 × 2/5

**Visual:**
\`\`\`
Row 1: [■■][□□□]  ← 2/5
Row 2: [■■][□□□]  ← 2/5
Row 3: [■■][□□□]  ← 2/5
        ────
Total:  6 shaded out of 15 parts
But we're counting fifths!
3 groups of 2/5 = 6/5
\`\`\`

**Answer: 3 × 2/5 = 6/5 = 1 1/5** ✓

## Number Lines

**Adding 1/3 four times:**

\`\`\`
0 ―――⅓―――⅔―――1―――1⅓―――
     ↑    ↑   ↑    ↑
     1st  2nd 3rd  4th
\`\`\`

**4 × 1/3 = 4/3 = 1 1/3** ✓

## Simplifying Your Answer

**Always check if you can simplify:**

**Example:** 6 × 2/4
- Multiply: 6 × 2 = 12
- Denominator: 4
- Answer: 12/4
- Simplify: 12 ÷ 4 = 3
- Final: **3** ✓

**Or simplify before multiplying:**
- 2/4 = 1/2
- 6 × 1/2 = 6/2 = 3 ✓
- Same answer!

## Multiplying by Numbers Greater Than 1

**Pattern to notice:**

- 2 × 1/3 = 2/3 (smaller than 1)
- 3 × 1/3 = 3/3 = 1 (equals 1)
- 4 × 1/3 = 4/3 = 1 1/3 (greater than 1)

**As the whole number gets bigger, the answer gets bigger!**

## Order Doesn't Matter

**Commutative property works with fractions:**

- 3 × 2/5 = 6/5
- 2/5 × 3 = 6/5

**Same answer either way!** ✓

## Practice Strategy

**Before solving:**
1. Identify the whole number
2. Identify the fraction
3. Multiply whole number × numerator
4. Keep denominator the same

**After solving:**
1. Can you simplify?
2. Is it an improper fraction? (Convert to mixed number)
3. Does your answer make sense?

## Common Mistakes

❌ Multiplying the denominator too
- WRONG: 3 × 2/4 = 6/12
- RIGHT: 3 × 2/4 = 6/4 = 3/2 = 1 1/2

❌ Forgetting to simplify
- 4 × 2/8 = 8/8 → Should simplify to 1

❌ Not converting improper fractions
- Leave answer as 7/3 instead of 2 1/3

✅ Only multiply the numerator
✅ The denominator stays the same
✅ Always simplify
✅ Convert improper fractions to mixed numbers

## Mental Math Tricks

**Multiplying by small numbers:**

**Times 2:** Double the numerator
- 2 × 3/5 = 6/5 ✓

**Times 3:** Triple the numerator  
- 3 × 2/7 = 6/7 ✓

**Times 4:** Quadruple the numerator
- 4 × 1/8 = 4/8 = 1/2 ✓

## Word Problems

**Problem 1:**
Each person gets 3/4 cup of juice. How much juice for 5 people?
- 5 × 3/4 = 15/4 = 3 3/4 cups ✓

**Problem 2:**
A recipe calls for 2/3 teaspoon of vanilla. You're making 6 batches.
- 6 × 2/3 = 12/3 = 4 teaspoons ✓

**Problem 3:**
Each book is 5/8 inch thick. How tall is a stack of 8 books?
- 8 × 5/8 = 40/8 = 5 inches ✓

## Check Your Work

**Method 1: Use repeated addition**
- 4 × 2/5 should equal 2/5 + 2/5 + 2/5 + 2/5 = 8/5 ✓

**Method 2: Draw a picture**
- Shade the fraction multiple times
- Count total shaded parts

**Method 3: Does it make sense?**
- 6 × 1/2 should be 3 (half of 6)
- 6 × 1/2 = 6/2 = 3 ✓ Correct!

## Key Takeaways

✅ Whole number × numerator
✅ Denominator stays the same
✅ Simplify when possible
✅ Convert improper fractions to mixed numbers
✅ Think of it as repeated addition

**Remember:** Multiplying by a whole number makes the fraction bigger (you're adding it that many times)!`
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
