import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const achievements = [
  // === LEARNING MILESTONES ===
  {
    name: 'First Steps',
    description: 'Complete your first topic',
    icon: '👣',
    category: 'learning',
    criteria: JSON.stringify({ type: 'topics_completed', count: 1 }),
  },
  {
    name: 'Getting Started',
    description: 'Complete 5 topics',
    icon: '📖',
    category: 'learning',
    criteria: JSON.stringify({ type: 'topics_completed', count: 5 }),
  },
  {
    name: 'Dedicated Learner',
    description: 'Complete 25 topics',
    icon: '🎓',
    category: 'learning',
    criteria: JSON.stringify({ type: 'topics_completed', count: 25 }),
  },
  {
    name: 'Knowledge Seeker',
    description: 'Complete 50 topics',
    icon: '🏅',
    category: 'learning',
    criteria: JSON.stringify({ type: 'topics_completed', count: 50 }),
  },
  {
    name: 'Scholar',
    description: 'Complete 100 topics',
    icon: '🏆',
    category: 'learning',
    criteria: JSON.stringify({ type: 'topics_completed', count: 100 }),
  },

  // === MASTERY ===
  {
    name: 'First Mastery',
    description: 'Master your first topic',
    icon: '⭐',
    category: 'mastery',
    criteria: JSON.stringify({ type: 'topics_mastered', count: 1 }),
  },
  {
    name: 'Rising Star',
    description: 'Master 10 topics',
    icon: '🌟',
    category: 'mastery',
    criteria: JSON.stringify({ type: 'topics_mastered', count: 10 }),
  },
  {
    name: 'Master Mind',
    description: 'Master 50 topics',
    icon: '🧠',
    category: 'mastery',
    criteria: JSON.stringify({ type: 'topics_mastered', count: 50 }),
  },

  // === FLASHCARDS ===
  {
    name: 'Card Collector',
    description: 'Study 10 flashcards',
    icon: '🎴',
    category: 'flashcards',
    criteria: JSON.stringify({ type: 'flashcards_studied', count: 10 }),
  },
  {
    name: 'Flash Master',
    description: 'Study 100 flashcards',
    icon: '⚡',
    category: 'flashcards',
    criteria: JSON.stringify({ type: 'flashcards_studied', count: 100 }),
  },
  {
    name: 'Memory Champion',
    description: 'Study 500 flashcards',
    icon: '🏆',
    category: 'flashcards',
    criteria: JSON.stringify({ type: 'flashcards_studied', count: 500 }),
  },

  // === STREAKS ===
  {
    name: 'Consistent',
    description: 'Maintain a 3-day study streak',
    icon: '🔥',
    category: 'streaks',
    criteria: JSON.stringify({ type: 'streak_days', count: 3 }),
  },
  {
    name: 'Week Warrior',
    description: 'Maintain a 7-day study streak',
    icon: '💪',
    category: 'streaks',
    criteria: JSON.stringify({ type: 'streak_days', count: 7 }),
  },
  {
    name: 'Two-Week Champion',
    description: 'Maintain a 14-day study streak',
    icon: '🏅',
    category: 'streaks',
    criteria: JSON.stringify({ type: 'streak_days', count: 14 }),
  },
  {
    name: 'Monthly Master',
    description: 'Maintain a 30-day study streak',
    icon: '👑',
    category: 'streaks',
    criteria: JSON.stringify({ type: 'streak_days', count: 30 }),
  },

  // === COMPETITIVE ===
  {
    name: 'Challenger',
    description: 'Complete your first competitive match',
    icon: '⚔️',
    category: 'competitive',
    criteria: JSON.stringify({ type: 'matches_completed', count: 1 }),
  },
  {
    name: 'Veteran',
    description: 'Complete 10 competitive matches',
    icon: '🎖️',
    category: 'competitive',
    criteria: JSON.stringify({ type: 'matches_completed', count: 10 }),
  },
  {
    name: 'First Victory',
    description: 'Win your first competitive match',
    icon: '🥇',
    category: 'competitive',
    criteria: JSON.stringify({ type: 'matches_won', count: 1 }),
  },
  {
    name: 'Win Streak',
    description: 'Win 5 competitive matches in a row',
    icon: '🔥',
    category: 'competitive',
    criteria: JSON.stringify({ type: 'win_streak', count: 5 }),
  },

  // === COURSES ===
  {
    name: 'Course Explorer',
    description: 'Start topics in 3 different courses',
    icon: '🗺️',
    category: 'exploration',
    criteria: JSON.stringify({ type: 'courses_started', count: 3 }),
  },
  {
    name: 'Renaissance Student',
    description: 'Start topics in 5 different courses',
    icon: '🌍',
    category: 'exploration',
    criteria: JSON.stringify({ type: 'courses_started', count: 5 }),
  },
  {
    name: 'Polymath',
    description: 'Start topics in 10 different courses',
    icon: '🎯',
    category: 'exploration',
    criteria: JSON.stringify({ type: 'courses_started', count: 10 }),
  },

  // === SOCIAL ===
  {
    name: 'Team Player',
    description: 'Join a classroom',
    icon: '🏫',
    category: 'social',
    criteria: JSON.stringify({ type: 'classrooms_joined', count: 1 }),
  },
  {
    name: 'Assignment Ace',
    description: 'Complete 5 assignments',
    icon: '📋',
    category: 'social',
    criteria: JSON.stringify({ type: 'assignments_completed', count: 5 }),
  },
]

async function main() {
  console.log('Seeding achievements...')
  
  for (const achievement of achievements) {
    await prisma.achievement.upsert({
      where: {
        id: achievement.name.toLowerCase().replace(/\s+/g, '-'),
      },
      update: achievement,
      create: {
        id: achievement.name.toLowerCase().replace(/\s+/g, '-'),
        ...achievement,
      },
    })
  }

  console.log(`Seeded ${achievements.length} achievements`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
