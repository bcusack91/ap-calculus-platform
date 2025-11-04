import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Fixing rounding numbers content...')

  const updatedContent = `# Rounding Numbers

## Why Round Numbers?

**Rounding** makes numbers easier to work with by making them simpler.

**Real-life examples:**
- "About 30 students in class" instead of "27 students"
- "Around \\$50" instead of "\\$47.82"
- "Nearly 100 people" instead of "96 people"

## Rounding Rules

**The basic rule:**
- If the digit you're looking at is **5 or more**, round UP
- If the digit is **4 or less**, round DOWN

**Remember:** "Five or more? Raise the score! Four or less? Let it rest!"

## Rounding to the Nearest 10

When rounding to the nearest 10, you're rounding **the tens digit** (or adding a new tens digit).

**Steps:**
1. Find the **tens place** (the digit you're rounding)
2. Look at the digit to the **right** (the ones place)
3. If it's 5 or more → round the tens digit up
4. If it's 4 or less → keep the tens digit the same
5. Replace the ones digit with 0

**Examples:**
- **27** → Rounding the **2** in the tens place → Look at 7 (ones) → 7 ≥ 5 → Round up to **30**
- **43** → Rounding the **4** in the tens place → Look at 3 (ones) → 3 < 5 → Keep as **40**
- **85** → Rounding the **8** in the tens place → Look at 5 (ones) → 5 = 5 → Round up to **90**
- **92** → Rounding the **9** in the tens place → Look at 2 (ones) → 2 < 5 → Keep as **90**

## Rounding to the Nearest 100

When rounding to the nearest 100, you're rounding **the hundreds digit** (or adding a new hundreds digit).

**Steps:**
1. Find the **hundreds place** (the digit you're rounding)
2. Look at the digit to the **right** (the tens place)
3. If it's 5 or more → round the hundreds digit up
4. If it's 4 or less → keep the hundreds digit the same
5. Replace tens and ones with 0

**Examples:**
- **347** → Rounding the **3** in the hundreds place → Look at 4 (tens) → 4 < 5 → Keep as **300**
- **682** → Rounding the **6** in the hundreds place → Look at 8 (tens) → 8 ≥ 5 → Round up to **700**
- **450** → Rounding the **4** in the hundreds place → Look at 5 (tens) → 5 = 5 → Round up to **500**
- **199** → Rounding the **1** in the hundreds place → Look at 9 (tens) → 9 ≥ 5 → Round up to **200**

## Rounding to the Nearest 1,000

When rounding to the nearest 1,000, you're rounding **the thousands digit** (or adding a new thousands digit).

**Steps:**
1. Find the **thousands place** (the digit you're rounding)
2. Look at the digit to the **right** (the hundreds place)
3. Apply the rounding rule to the thousands digit
4. Replace hundreds, tens, and ones with 0

**Examples:**
- **3,621** → Rounding the **3** in the thousands place → Look at 6 (hundreds) → 6 ≥ 5 → Round up to **4,000**
- **7,389** → Rounding the **7** in the thousands place → Look at 3 (hundreds) → 3 < 5 → Keep as **7,000**
- **5,500** → Rounding the **5** in the thousands place → Look at 5 (hundreds) → 5 = 5 → Round up to **6,000**

## Using a Number Line

A number line helps you see which number is closer:

For 27:
\`\`\`
20 ←―――27―――→ 30
\`\`\`
27 is closer to 30, so round to 30 ✓

For 43:
\`\`\`
40 ←―43――――→ 50
\`\`\`
43 is closer to 40, so round to 40 ✓

## Practice Strategy

**Quick method:**
1. Underline the place you're rounding to
2. Circle the digit to the right
3. Use the rule: 5+ up, 4- down
4. Change all digits to the right to zeros

**Example:** Round 3,678 to nearest hundred
- Underline: 3,**6**78 (rounding the 6 in hundreds place)
- Circle: 3,6**7**8 (looking at the 7 in tens place)
- 7 ≥ 5, so round the hundreds digit up: 6 → 7
- Answer: **3,700**

## Common Mistakes

❌ Looking at the wrong digit
❌ Forgetting to change digits to the right to zero
❌ Rounding 5 down instead of up

✅ Always look ONE place to the right of where you're rounding
✅ Remember: 5 rounds UP
✅ Replace all digits to the right with zeros`

  const topic = await prisma.topic.update({
    where: {
      slug: 'rounding-numbers'
    },
    data: {
      textContent: updatedContent
    }
  })

  console.log('✅ Fixed rounding numbers content!')
  console.log(`   Topic: ${topic.title}`)
  console.log('   - Fixed "instead of" formatting with escaped dollar signs')
  console.log('   - Clarified which digit is being rounded vs which digit to look at')
}

main()
  .catch((e) => {
    console.error('Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
