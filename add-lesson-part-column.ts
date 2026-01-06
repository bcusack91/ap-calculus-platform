import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Adding lessonPart column to Flashcard table...')
  
  try {
    // Add the column using raw SQL
    await prisma.$executeRawUnsafe(`
      ALTER TABLE "Flashcard" 
      ADD COLUMN IF NOT EXISTS "lessonPart" INTEGER;
    `)
    
    console.log('✅ Column added successfully')
    
    // Verify it was added
    const result = await prisma.$queryRawUnsafe(`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'Flashcard' 
      AND column_name = 'lessonPart';
    `)
    
    console.log('Verification:', result)
  } catch (error) {
    console.error('Error:', error)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
