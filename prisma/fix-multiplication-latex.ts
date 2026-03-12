import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Fixing LaTeX formatting in multiplication topic...')

  const updatedContent = `# Multi-Digit Multiplication

## Multiplying by One Digit

When you multiply a multi-digit number by a single digit, work from right to left and remember to carry!

**Example:** $23 \\times 4$

<MultiplicationAnimation multiplicand="23" multiplier="4" result="92" />

**Written Steps:**
1. Multiply ones: $3 \\times 4 = 12$ (write 2, carry 1)
2. Multiply tens: $2 \\times 4 = 8$, plus carried 1 = $9$
3. Result: $92$

## Multiplying by Two Digits

When multiplying by a two-digit number, you multiply twice and then add the results.

**Example:** $34 \\times 26$

<TwoDigitMultiplicationAnimation multiplicand="34" multiplier="26" result="884" />

**Written Steps:**
1. Multiply by the ones digit: $34 \\times 6 = 204$
2. Multiply by the tens digit: $34 \\times 2 = 68$ (shifted one place left = 680)
3. Add the two products: $204 + 680 = 884$

## The Standard Algorithm

**Key steps to remember:**

1. **Start from the right** - Always begin with the ones place
2. **Carry when needed** - If a product is 10 or more, carry to the next place
3. **Shift for place value** - When multiplying by tens, shift one place left
4. **Add all partial products** - Sum up all the rows to get your final answer

## Tips to Remember

- **Line up your numbers carefully** - Keep digits in the correct columns
- **Remember to shift** - When multiplying by the tens place, shift one position left
- **Check your work** - Use estimation to see if your answer makes sense
- **Practice regrouping** - Carrying is essential for accuracy!

## Real-World Applications

Multiplication helps us solve everyday problems:

- **Shopping:** If one toy costs \\$24 and you buy 15 toys, how much total?
  - $24 \\times 15 = 360$ (so \\$360)

- **Area:** A rectangle is 18 feet long and 12 feet wide. What's the area?
  - $18 \\times 12 = 216$ square feet

- **Groups:** If each class has 28 students and there are 4 classes, how many students?
  - $28 \\times 4 = 112$ students`

  const topic = await prisma.topic.update({
    where: {
      slug: 'multi-digit-multiplication'
    },
    data: {
      textContent: updatedContent
    }
  })

  console.log('✅ Fixed LaTeX formatting!')
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
