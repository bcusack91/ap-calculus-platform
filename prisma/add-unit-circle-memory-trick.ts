import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function addMemoryTrick() {
  const topic = await prisma.topic.findFirst({
    where: { slug: 'the-unit-circle' }
  })

  if (!topic) {
    console.log('Topic not found')
    return
  }

  // Find the position to insert (right before the table)
  const tableMarker = '<UnitCircleTable />'
  const tableIndex = topic.textContent.indexOf(tableMarker)

  if (tableIndex === -1) {
    console.log('Table marker not found')
    return
  }

  const memoryTrickSection = `

### Memory Trick: The Square Root Pattern

Here's a simple trick that works for the most common angles (0°, 30°, 45°, 60°, and 90°):

**Step 1: Count from 0 to 4**

Start by writing the numbers: **0, 1, 2, 3, 4**

These numbers are the foundation of our memory trick. In the next steps, we'll transform these simple counting numbers into the exact coordinates you need for the unit circle!

`

  // Insert the memory trick section before the table
  const beforeTable = topic.textContent.substring(0, tableIndex)
  const afterTable = topic.textContent.substring(tableIndex)
  
  const newContent = beforeTable + memoryTrickSection + afterTable

  await prisma.topic.update({
    where: { id: topic.id },
    data: { textContent: newContent }
  })

  console.log('✅ Added memory trick section to unit circle topic')
}

addMemoryTrick()
  .then(() => prisma.$disconnect())
  .catch((error) => {
    console.error(error)
    prisma.$disconnect()
  })
