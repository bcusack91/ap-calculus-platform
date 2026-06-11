import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function addMemorySteps() {
  const topic = await prisma.topic.findFirst({
    where: { slug: 'the-unit-circle' }
  })

  if (!topic) {
    console.log('Topic not found')
    return
  }

  // Find Step 1 to add the remaining steps after it
  const step1Text = 'These numbers are the foundation of our memory trick. In the next steps, we\'ll transform these into the exact coordinates you need!'
  const step1Index = topic.textContent.indexOf(step1Text)

  if (step1Index === -1) {
    console.log('Step 1 not found')
    return
  }

  const insertPosition = step1Index + step1Text.length

  const additionalSteps = `

**Step 2: Put each number under a square root**

$$\\sqrt{0}, \\sqrt{1}, \\sqrt{2}, \\sqrt{3}, \\sqrt{4}$$

**Step 3: Simplify the perfect squares**

$$\\sqrt{0} = 0, \\sqrt{1} = 1, \\sqrt{2}, \\sqrt{3}, \\sqrt{4} = 2$$

**Step 4: Divide everything by 2**

$$\\frac{0}{2}, \\frac{1}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}, \\frac{2}{2}$$

Which simplifies to:

$$0, \\frac{1}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}, 1$$

**These are your sine values for 0°, 30°, 45°, 60°, and 90°!**

For cosine values, just reverse the order: read from right to left!
`

  const beforeInsert = topic.textContent.substring(0, insertPosition)
  const afterInsert = topic.textContent.substring(insertPosition)
  
  const newContent = beforeInsert + additionalSteps + afterInsert

  await prisma.topic.update({
    where: { id: topic.id },
    data: { textContent: newContent }
  })

  console.log('✅ Added Steps 2, 3, and 4 to unit circle memory trick')
}

addMemorySteps()
  .then(() => prisma.$disconnect())
  .catch((error) => {
    console.error(error)
    prisma.$disconnect()
  })
