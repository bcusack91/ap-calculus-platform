import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getUserStats() {
  try {
    // Total user count
    const totalUsers = await prisma.user.count()
    
    // Users created in last 7 days
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
    const recentUsers = await prisma.user.count({
      where: {
        createdAt: {
          gte: sevenDaysAgo
        }
      }
    })

    // Users created in last 30 days
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
    const monthlyUsers = await prisma.user.count({
      where: {
        createdAt: {
          gte: thirtyDaysAgo
        }
      }
    })

    // Users with premium subscriptions
    const premiumUsers = await prisma.user.count({
      where: {
        role: 'PREMIUM'
      }
    })

    // Competitive matches played
    const totalMatches = await prisma.competitiveMatch.count()
    
    // Quiz attempts (practice sessions)
    const quizAttempts = await prisma.quizAttempt.count()

    console.log('\n📊 User Statistics:\n')
    console.log(`Total Accounts Created: ${totalUsers}`)
    console.log(`New Users (Last 7 Days): ${recentUsers}`)
    console.log(`New Users (Last 30 Days): ${monthlyUsers}`)
    console.log(`Premium Subscribers: ${premiumUsers}`)
    console.log('\n🎮 Engagement Statistics:\n')
    console.log(`Total Competitive Matches: ${totalMatches}`)
    console.log(`Total Quiz Attempts: ${quizAttempts}`)
    console.log('\n')

  } catch (error) {
    console.error('Error fetching stats:', error)
  } finally {
    await prisma.$disconnect()
  }
}

getUserStats()
