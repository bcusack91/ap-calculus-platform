import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Fixing multi-digit multiplication math formatting...')

  const updatedContent = `# Multi-Digit Multiplication

## Multiplying by One Digit

When you multiply a multi-digit number by a single digit, work from right to left and remember to carry!

**Example:** $23 \\times 4$

$$
\\begin{array}{r}
  23 \\\\
\\times \\quad 4 \\\\
\\hline
  92
\\end{array}
$$

**Steps:**
1. Multiply ones: $3 \\times 4 = 12$ (write 2, carry 1)
2. Multiply tens: $2 \\times 4 = 8$, plus carried 1 = $9$
3. Result: $92$

## Multiplying by Two Digits

When multiplying by a two-digit number, you multiply twice and then add the results.

**Example:** $25 \\times 13$

$$
\\begin{array}{r}
  25 \\\\
\\times \\quad 13 \\\\
\\hline
  75 \\quad \\text{(multiply by 3)} \\\\
+ \\quad 250 \\quad \\text{(multiply by 10)} \\\\
\\hline
  325
\\end{array}
$$

**Steps:**
1. Multiply by the ones digit: $25 \\times 3 = 75$
2. Multiply by the tens digit: $25 \\times 10 = 250$ (notice the zero!)
3. Add the two products: $75 + 250 = 325$

## The Standard Algorithm

**Key steps to remember:**

1. **Start from the right** - Always begin with the ones place
2. **Carry when needed** - If a product is 10 or more, carry to the next place
3. **Add zeros for place value** - When multiplying by tens, add a zero; by hundreds, add two zeros
4. **Add all partial products** - Sum up all the rows to get your final answer

## Tips to Remember

- **Line up your numbers carefully** - Keep digits in the correct columns
- **Remember to add zeros** - When multiplying by the tens place, put a zero first
- **Check your work** - Use estimation to see if your answer makes sense
- **Practice regrouping** - Carrying is essential for accuracy!

## Real-World Applications

Multiplication helps us solve everyday problems:

- **Shopping:** If one toy costs \\$24 and you buy 15 toys, how much total?
  - $24 \\times 15 = \\$360$

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

  console.log('✅ Fixed multi-digit multiplication math formatting!')
  console.log(`   Topic: ${topic.title}`)
  console.log('   - Fixed LaTeX alignment syntax')
  console.log('   - Improved explanations and structure')
  console.log('   - Added clearer step-by-step examples')
}

main()
  .catch((e) => {
    console.error('Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
