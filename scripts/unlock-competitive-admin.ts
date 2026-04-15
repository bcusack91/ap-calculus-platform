import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const email = 'brendan@cusackprep.com'
  
  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true, name: true, email: true, competitiveProfile: true }
  })

  if (!user) {
    console.error(`User not found: ${email}`)
    process.exit(1)
  }

  console.log(`Found user: ${user.name} (${user.email}) — id: ${user.id}`)

  if (user.competitiveProfile) {
    // Update existing profile
    const updated = await prisma.competitiveProfile.update({
      where: { userId: user.id },
      data: { competitiveModeUnlocked: true }
    })
    console.log(`Updated CompetitiveProfile: competitiveModeUnlocked = ${updated.competitiveModeUnlocked}`)
  } else {
    // Create new profile
    const created = await prisma.competitiveProfile.create({
      data: {
        userId: user.id,
        competitiveModeUnlocked: true,
        unitCircleMMR: 1000,
        overallMMR: 1000
      }
    })
    console.log(`Created CompetitiveProfile: id=${created.id}, competitiveModeUnlocked=${created.competitiveModeUnlocked}`)
  }

  console.log('Done! Competitive mode fully unlocked.')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
