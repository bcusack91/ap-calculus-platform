import { execSync } from 'child_process'

const seedFiles = [
  // Limits (12 topics)
  'seed-limits-micro.ts',
  'seed-limits-micro-part2.ts',
  'seed-limits-micro-part3.ts',
  
  // Derivatives (16 topics)
  'seed-derivatives-part1.ts',
  'seed-derivatives-part2.ts',
  'seed-derivatives-part3.ts',
  'seed-derivatives-part4.ts',
  'seed-derivatives-part5.ts',
  
  // Applications of Derivatives (10 topics)
  'seed-applications-part1.ts',
  'seed-applications-part2.ts',
  'seed-applications-part3.ts',
  'seed-applications-part4.ts',
  'seed-applications-part5.ts',
  
  // Integration (10 topics)
  'seed-integration-part1.ts',
  'seed-integration-part2.ts',
  'seed-integration-part3.ts',
  'seed-integration-part4.ts',
  'seed-integration-part5.ts',
  
  // Advanced Integration BC (2 topics)
  'seed-advanced-integration-part1.ts',
  
  // Parametric & Polar BC (4 topics)
  'seed-parametric-polar-part1.ts',
  'seed-parametric-polar-part2.ts',
  
  // Sequences & Series BC (6 topics)
  'seed-sequences-series-part1.ts',
  'seed-sequences-series-part2.ts',
  'seed-sequences-series-part3.ts',
  
  // Power & Taylor Series BC (4 topics)
  'seed-power-taylor-part1.ts',
  'seed-power-taylor-part2.ts',
]

console.log('🌱 Starting to seed all topics...\n')

for (const file of seedFiles) {
  console.log(`📝 Running ${file}...`)
  try {
    execSync(`npx tsx prisma/${file}`, { stdio: 'inherit' })
    console.log(`✅ Completed ${file}\n`)
  } catch (error) {
    console.error(`❌ Failed ${file}`)
    console.error(error)
    process.exit(1)
  }
}

console.log('✨ All topics seeded successfully!')
