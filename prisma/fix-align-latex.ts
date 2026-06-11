import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Fixing broken \\begin{align} LaTeX in grade-school math topics...\n')

  // 1. Long Division
  const longDivisionContent = `# Long Division

## The Steps: Divide, Multiply, Subtract, Bring Down

**Remember the order:** DMSB — Dad, Mom, Sister, Brother!

**Example:** $84 \\div 4$

$$84 \\div 4 = 21$$

**Steps:**
1. **Divide:** How many times does 4 go into 8? → $8 \\div 4 = 2$
2. **Multiply:** $2 \\times 4 = 8$
3. **Subtract:** $8 - 8 = 0$
4. **Bring down** the 4
5. **Repeat:** $4 \\div 4 = 1$

Final answer: $84 \\div 4 = 21$

> **Check your work:** Multiply your answer by the divisor: $21 \\times 4 = 84$ ✓

## Remainders

Sometimes there's a number left over — that's the **remainder**.

**Example:** $17 \\div 3$

| Step | Calculation |
|------|------------|
| How many 3s fit in 17? | $3 \\times 5 = 15$ (fits!) |
| What's left over? | $17 - 15 = 2$ |
| Answer | $17 \\div 3 = 5$ R $2$ |

This means: 3 goes into 17 five times with 2 left over.

## Larger Numbers

**Example:** $156 \\div 6$

1. $15 \\div 6 = 2$ (remainder $3$)
2. Bring down the $6$ → $36$
3. $36 \\div 6 = 6$ (no remainder)
4. Answer: $156 \\div 6 = 26$

**Check:** $26 \\times 6 = 156$ ✓

## Checking Your Answer

You can always verify your division:

$$\\text{Quotient} \\times \\text{Divisor} + \\text{Remainder} = \\text{Dividend}$$

- $84 \\div 4 = 21$ → Check: $21 \\times 4 = 84$ ✓
- $17 \\div 3 = 5$ R $2$ → Check: $5 \\times 3 + 2 = 17$ ✓

## Tips to Remember

- **Follow the steps in order:** Divide, Multiply, Subtract, Bring Down
- **Estimate first:** Think about what the answer should be close to
- **Always check** by multiplying back
- **Watch for remainders** — they must be smaller than the divisor`

  // 2. Adding and Subtracting Decimals
  const addSubDecimalsContent = `# Adding and Subtracting Decimals

## The Golden Rule

**Always line up the decimal points!**

This is the most important thing to remember when adding or subtracting decimals.

## Adding Decimals

**Example:** $3.45 + 12.8$

| Step | What to do |
|------|-----------|
| 1. Line up decimals | Stack the numbers with decimal points aligned |
| 2. Add placeholder zeros | Write $12.8$ as $12.80$ |
| 3. Add column by column | Start from the right |
| **Answer** | $3.45 + 12.80 = 16.25$ |

$$3.45 + 12.8 = 16.25$$

**Tip:** Add zeros as placeholders so both numbers have the same number of decimal places!

## Subtracting Decimals

**Example:** $15.6 - 7.38$

| Step | What to do |
|------|-----------|
| 1. Line up decimals | Stack the numbers with decimal points aligned |
| 2. Add placeholder zeros | Write $15.6$ as $15.60$ |
| 3. Subtract column by column | Borrow when needed |
| **Answer** | $15.60 - 7.38 = 8.22$ |

$$15.6 - 7.38 = 8.22$$

## Money Problems

Decimals are used with money all the time!

**Example:** You have $\\$20.00$ and spend $\\$12.75$. How much is left?

$$20.00 - 12.75 = 7.25$$

You have $\\$7.25$ left.

**Example:** You buy items for $\\$3.49$, $\\$5.25$, and $\\$1.99$. What's the total?

$$3.49 + 5.25 + 1.99 = 10.73$$

Total: $\\$10.73$

## Word Problem Strategy

1. **Read carefully** — decide whether to add or subtract
2. **Line up the decimal points** — always!
3. **Add placeholder zeros** if the numbers have different decimal places
4. **Check your answer** — does it make sense?
5. **Label your answer** — include units (dollars, meters, etc.)

## Practice Tips

- **Estimation helps:** Round to whole numbers first to check if your answer is reasonable
- **Common mistake:** Forgetting to line up the decimals — this leads to wrong answers every time!
- **Money is great practice:** Use receipts and price tags to practice adding decimals`

  // 3. Working with Decimals
  const workingWithDecimalsContent = `# Working with Decimals

## Understanding Decimals

Decimals are another way to represent parts of a whole.

**Place value chart:**

| Ones | . | Tenths | Hundredths | Thousandths |
|------|---|--------|------------|-------------|
| 3 | . | 4 | 7 | 5 |

So $3.475$ means: 3 ones + 4 tenths + 7 hundredths + 5 thousandths.

## Adding and Subtracting Decimals

**Rule:** Line up the decimal points, then add or subtract normally.

**Example:** $3.45 + 2.7$

Add a zero: $3.45 + 2.70 = 6.15$

$$3.45 + 2.70 = 6.15$$

## Multiplying Decimals

**Steps:**
1. Multiply as if they're whole numbers (ignore the decimals)
2. Count the total number of decimal places in both numbers
3. Put that many decimal places in the answer

**Example:** $2.5 \\times 0.3$

| Step | Work |
|------|------|
| Multiply without decimals | $25 \\times 3 = 75$ |
| Count decimal places | $2.5$ has 1, $0.3$ has 1 → total: 2 |
| Place the decimal | $0.75$ |

$$2.5 \\times 0.3 = 0.75$$

## Dividing Decimals

**Steps:**
1. Move the decimal in the divisor to make it a whole number
2. Move the decimal in the dividend the same number of places
3. Divide normally
4. Place the decimal point in the quotient

**Example:** $6.5 \\div 0.5$

Move both decimals one place right: $65 \\div 5 = 13$

$$6.5 \\div 0.5 = 13$$

## Converting Between Fractions and Decimals

**Fraction → Decimal:** Divide the numerator by the denominator

| Fraction | Division | Decimal |
|----------|----------|---------|
| $\\frac{1}{2}$ | $1 \\div 2$ | $0.5$ |
| $\\frac{3}{4}$ | $3 \\div 4$ | $0.75$ |
| $\\frac{1}{5}$ | $1 \\div 5$ | $0.2$ |

**Decimal → Fraction:** Use place value

| Decimal | Fraction | Simplified |
|---------|----------|-----------|
| $0.75$ | $\\frac{75}{100}$ | $\\frac{3}{4}$ |
| $0.6$ | $\\frac{6}{10}$ | $\\frac{3}{5}$ |
| $0.125$ | $\\frac{125}{1000}$ | $\\frac{1}{8}$ |

## Comparing Decimals

To compare decimals, look at each place value from left to right:

- $0.5$ vs $0.35$? Since $0.50 > 0.35$, we have $0.5 > 0.35$
- $3.14$ vs $3.2$? Compare tenths: $1 < 2$, so $3.14 < 3.2$

**Tip:** Add zeros so both numbers have the same number of decimal places, then compare!`

  // Update all three topics
  const updates = [
    { slug: 'long-division-grade4', content: longDivisionContent, name: 'Long Division' },
    { slug: 'adding-subtracting-decimals-grade5', content: addSubDecimalsContent, name: 'Adding and Subtracting Decimals' },
    { slug: 'working-with-decimals', content: workingWithDecimalsContent, name: 'Working with Decimals' },
  ]

  for (const { slug, content } of updates) {
    const topic = await prisma.topic.update({
      where: { slug },
      data: { textContent: content },
    })
    console.log(`  ✅ Fixed: ${topic.title} (${slug})`)
  }

  console.log('\n✅ All topics with broken \\begin{align} LaTeX have been fixed!')
}

main()
  .catch((e) => {
    console.error('Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
