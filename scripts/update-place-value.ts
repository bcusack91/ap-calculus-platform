import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function updatePlaceValueTopic() {
  const topic = await prisma.topic.findUnique({
    where: { slug: 'place-value-millions' }
  })

  if (!topic) {
    console.error('Topic not found')
    return
  }

  const updatedContent = `# Place Value to Millions

## Understanding Big Numbers

When we write large numbers, we use **commas** to separate groups of three digits. This makes them easier to read!

**Example:** 123,456,789

Notice the commas? They separate the number into groups called **periods**.

## What is a Period?

A **period** is a group of three digits in a number. Think of it like organizing your number into small chunks that are easier to understand.

Each period has the same pattern: **ones, tens, hundreds** - but at different sizes!

## The Three Main Periods

Notice the pattern - every three places we group with a comma:

**Ones period:** Ones, Tens, Hundreds

**Thousands period:** Thousands, Ten thousands, Hundred thousands

**Millions period:** Millions, Ten millions, Hundred millions

Each place is **10 times bigger** than the one to its right!

---

## Let's See It with a Real Number

Take the number: **345,678,912**

We can break it down by periods:

| Period | Digits | Value |
|--------|--------|-------|
| **Millions** | 345 | Three hundred forty-five million |
| **Thousands** | 678 | Six hundred seventy-eight thousand |
| **Ones** | 912 | Nine hundred twelve |

**Read together:** "Three hundred forty-five million, six hundred seventy-eight thousand, nine hundred twelve"

---

## Place Value Chart

Here's how each digit's position gives it value:

\`\`\`
Hundred   Ten      Millions | Hundred    Ten       Thousands | Hundreds  Tens  Ones
Millions  Millions          | Thousands  Thousands           |
   3        4         5     |    6         7          8      |    9       1     2
\`\`\`

**Breaking it down:**
- The **3** is in the hundred millions place = 300,000,000
- The **4** is in the ten millions place = 40,000,000  
- The **5** is in the millions place = 5,000,000
- The **6** is in the hundred thousands place = 600,000
- The **7** is in the ten thousands place = 70,000
- The **8** is in the thousands place = 8,000
- The **9** is in the hundreds place = 900
- The **1** is in the tens place = 10
- The **2** is in the ones place = 2

**Add them all up:** 300,000,000 + 40,000,000 + 5,000,000 + 600,000 + 70,000 + 8,000 + 900 + 10 + 2 = **345,678,912**

---

## The Pattern Within Each Period

Within every period, the same pattern repeats:

1. **Ones** (rightmost digit in the period)
2. **Tens** (middle digit) - 10 times bigger than ones
3. **Hundreds** (leftmost digit) - 10 times bigger than tens

**Example in the Thousands period (678):**
- 6 is in the **hundred thousands** place
- 7 is in the **ten thousands** place  
- 8 is in the **thousands** place

---

## Why Commas Matter

Commas help us **read numbers correctly**!

**Without commas:** 123456789  
❌ Hard to read! Is this 1 million or 12 million?

**With commas:** 123,456,789  
✅ Easy to read! "One hundred twenty-three million, four hundred fifty-six thousand, seven hundred eighty-nine"

---

## Quick Tips

✓ **Read from left to right**, period by period  
✓ **Say the period name** after reading each group (millions, thousands)  
✓ **Don't say "ones"** at the end - just read the last three digits  
✓ **Commas separate every 3 digits** starting from the right

**Practice:** Try reading these numbers out loud!
- 5,432,100
- 78,900,456
- 123,000,789
`

  await prisma.topic.update({
    where: { slug: 'place-value-millions' },
    data: {
      textContent: updatedContent
    }
  })

  console.log('✅ Topic updated successfully!')
}

updatePlaceValueTopic()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
