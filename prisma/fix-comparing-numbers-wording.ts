import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Updating comparing-ordering-numbers topic content...')

  const updatedContent = `# Comparing and Ordering Numbers

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

- **Thousands:** Both have 5 ✓ (same)
- **Hundreds:** One has 8, the other has 7 → 8 > 7!
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

Answer: **8,920 > 892 > 89**

## Using a Number Line

Number lines help visualize comparisons:

\`\`\`
0 ―――――― 250 ―――――― 500 ―――――― 750 ―――――― 1,000
           ↑                              ↑
          325                            867
\`\`\`

Numbers to the RIGHT are bigger! So **867 > 325**

## Comparing with Zeros

Don't forget about zeros!

**234 vs 204:**
- Hundreds: 2 = 2 ✓
- Tens: 3 vs 0 → 3 > 0
- Answer: **234 > 204**

**Leading zeros don't matter:**
- 0,567 = 567
- 00,045 = 45

## Real-World Applications

**Money:** Which is more: $4,567 or $4,756?
- Compare: 5 hundreds vs 7 hundreds
- **$4,756 is more!** ✓

**Distances:** Which is farther: 12,405 miles or 12,450 miles?
- Compare: 0 tens vs 5 tens
- **12,450 miles is farther!** ✓

**Scores:** Order these game scores: 89,540  |  89,450  |  98,540
- Greatest: 98,540 (biggest ten-thousands)
- Middle: 89,540 (next)
- Least: 89,450

## Practice Strategy

Use this checklist:

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

  const topic = await prisma.topic.update({
    where: {
      slug: 'comparing-ordering-numbers'
    },
    data: {
      textContent: updatedContent
    }
  })

  console.log('✅ Updated comparing-ordering-numbers topic!')
  console.log(`   Topic: ${topic.title}`)
}

main()
  .catch((e) => {
    console.error('Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
