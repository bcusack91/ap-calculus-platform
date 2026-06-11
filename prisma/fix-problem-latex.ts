import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Problem 1: Fix alignment syntax
  await prisma.exampleProblem.update({
    where: { id: 'cmhapv2wo00040fxusoqn79mo' },
    data: {
      solution: `**Solution:**

$$
\\begin{array}{r}
34 \\\\
\\times 5 \\\\
\\hline
170
\\end{array}
$$

Step by step:
- $4 \\times 5 = 20$ (write 0, carry 2)
- $3 \\times 5 = 15$, plus carried 2 = 17

**Answer:** 170`
    }
  })

  // Problem 2: Fix alignment syntax
  await prisma.exampleProblem.update({
    where: { id: 'cmhapv2wo00050fxuae2erx9e' },
    data: {
      solution: `**Solution:**

Multiply: $24 \\times 6$

$$
\\begin{array}{r}
24 \\\\
\\times 6 \\\\
\\hline
144
\\end{array}
$$

**Answer:** 144 crayons`
    }
  })

  // Problem 3: Fix alignment syntax
  await prisma.exampleProblem.update({
    where: { id: 'cmhapv2wo00060fxu4v6g2nhn' },
    data: {
      solution: `**Solution:**

$$
\\begin{array}{r}
46 \\\\
\\times 23 \\\\
\\hline
138 \\quad \\text{(46 × 3)} \\\\
+ \\; 920 \\quad \\text{(46 × 20)} \\\\
\\hline
1058
\\end{array}
$$

**Answer:** 1,058`
    }
  })

  console.log('✅ Fixed LaTeX formatting in all 3 practice problems')
  console.log('Changed from align environment to array environment for better compatibility')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
