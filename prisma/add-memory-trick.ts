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

  // Find where to insert the new section (before the table)
  const tableIndex = topic.textContent.indexOf('<UnitCircleTable />')
  
  if (tableIndex === -1) {
    console.log('Table marker not found')
    return
  }

  // Insert the memory trick section before the table
  const beforeTable = topic.textContent.substring(0, tableIndex)
  const afterTable = topic.textContent.substring(tableIndex)
  
  const memoryTrickSection = `### Easy Memory Trick: The Counting Method

Many students find it challenging to memorize all the coordinate values on the unit circle. Here's a simple trick that works for the most common angles (0°, 30°, 45°, 60°, and 90°):

**Step 1: Start by counting from 0 to 4**

Simply write down: **0, 1, 2, 3, 4**

These numbers are the foundation of our memory trick. In the next steps, we'll transform these into the exact coordinates you need!

`

  const updatedContent = beforeTable + memoryTrickSection + afterTable
  
  await prisma.topic.update({
    where: { id: topic.id },
    data: { textContent: updatedContent }
  })
  
  console.log('✅ Added memory trick section to unit circle topic')
  await prisma.$disconnect()
}

addMemoryTrick()
