import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Fixing multi-digit multiplication content...')

  const updatedContent = `# Multi-Digit Multiplication

## Multiplying by One Digit

When you multiply a multi-digit number by a single digit, work from right to left and remember to carry!

**Example:** $23 \\times 4$

$$23 \\times 4 = 92$$

**Steps:**
1. Multiply ones: $3 \\times 4 = 12$ (write 2, carry 1)
2. Multiply tens: $2 \\times 4 = 8$, plus carried $1 = 9$
3. Result: $92$

> **Try it:** Cover the answer above and work through each step yourself!

## Multiplying by Two Digits

When multiplying by a two-digit number, you create **partial products** and then add them.

**Example:** $25 \\times 13$

$$25 \\times 13 = 325$$

**Steps:**
1. Multiply by the ones digit: $25 \\times 3 = 75$
2. Multiply by the tens digit: $25 \\times 1 = 25$ (shifted one place left → $250$)
3. Add the partial products: $75 + 250 = 325$

> **Key idea:** When you multiply by the tens digit, the result shifts one place to the left (which is the same as multiplying by 10).

## The Standard Algorithm

Here's the step-by-step process for any multiplication:

1. **Start from the right** — always begin with the ones place
2. **Carry when needed** — if a product is 10 or more, write the ones digit and carry the tens digit
3. **Shift for place value** — when multiplying by tens, shift one place left; by hundreds, shift two places
4. **Add all partial products** — sum up all the rows to get your final answer

**Another example:** $34 \\times 26$

| Step | Calculation | Result |
|------|------------|--------|
| Multiply by 6 (ones) | $34 \\times 6$ | $204$ |
| Multiply by 2 (tens) | $34 \\times 20$ | $680$ |
| Add partial products | $204 + 680$ | $884$ |

So $34 \\times 26 = 884$.

## Tips to Remember

- **Line up your numbers carefully** — keep digits in the correct columns
- **Remember to shift** — when multiplying by the tens place, shift one position left
- **Check your work** — use estimation to see if your answer makes sense (e.g., $34 \\times 26 \\approx 30 \\times 25 = 750$, so $884$ is reasonable)
- **Practice carrying** — regrouping is essential for accuracy!

## Real-World Applications

Multiplication helps us solve everyday problems:

- **Shopping:** If one toy costs $\\$24$ and you buy 3 toys, how much total?
  - $24 \\times 3 = 72$, so $\\$72$

- **Area:** A rectangle is 18 feet long and 12 feet wide. What's the area?
  - $18 \\times 12 = 216$ square feet

- **Groups:** If each class has 28 students and there are 4 classes, how many students total?
  - $28 \\times 4 = 112$ students`

  const topic = await prisma.topic.update({
    where: {
      slug: 'multi-digit-multiplication'
    },
    data: {
      textContent: updatedContent
    }
  })

  console.log('✅ Fixed multi-digit multiplication content!')
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
