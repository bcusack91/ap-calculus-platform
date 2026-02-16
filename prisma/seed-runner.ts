import { glob } from 'glob'
import path from 'path'

/**
 * Universal seed runner that discovers and runs all seed files in the prisma/seeds/ directory.
 * 
 * Usage:
 *   npx tsx prisma/seed-runner.ts                    # Run ALL seeds
 *   npx tsx prisma/seed-runner.ts physics2           # Run only physics2 seeds
 *   npx tsx prisma/seed-runner.ts physics2/optics    # Run only optics seeds
 * 
 * File structure:
 *   prisma/seeds/
 *   ├── physics2/
 *   │   └── optics/
 *   │       └── reflection-and-refraction/
 *   │           └── index.ts  <- Discovered and executed
 *   └── chemistry/
 *       └── acids-bases/
 *           └── buffers/
 *               └── index.ts  <- Discovered and executed
 */
async function main() {
  const filter = process.argv[2] || '**'
  const seedPattern = path.join(__dirname, 'seeds', filter, '**/index.ts')
  
  console.log('🔍 Searching for seed files...')
  console.log(`   Pattern: ${seedPattern}\n`)
  
  const seedFiles = await glob(seedPattern, {
    ignore: ['**/node_modules/**', '**/dist/**']
  })
  
  if (seedFiles.length === 0) {
    console.log('⚠️  No seed files found matching pattern.')
    console.log('   Make sure you have index.ts files in your seed directories.')
    return
  }
  
  console.log(`📦 Found ${seedFiles.length} seed file(s):\n`)
  seedFiles.forEach((file, i) => {
    const relativePath = path.relative(path.join(__dirname, 'seeds'), file)
    console.log(`   ${i + 1}. ${relativePath}`)
  })
  console.log()
  
  let successCount = 0
  let failCount = 0
  
  for (const seedFile of seedFiles) {
    const relativePath = path.relative(__dirname, seedFile)
    console.log(`\n${'='.repeat(80)}`)
    console.log(`🌱 Running: ${relativePath}`)
    console.log('='.repeat(80))
    
    try {
      // Dynamically import and run the seed file
      const seedModule = await import(seedFile)
      
      // Most seed files export a default function or main function
      if (typeof seedModule.default === 'function') {
        await seedModule.default()
      } else if (typeof seedModule.main === 'function') {
        await seedModule.main()
      } else {
        console.log('⚠️  Seed file has no default or main export, skipping...')
      }
      
      successCount++
      console.log(`✅ Completed: ${relativePath}`)
    } catch (error) {
      failCount++
      console.error(`❌ Failed: ${relativePath}`)
      console.error(error)
    }
  }
  
  console.log(`\n${'='.repeat(80)}`)
  console.log('📊 SUMMARY')
  console.log('='.repeat(80))
  console.log(`   Total: ${seedFiles.length}`)
  console.log(`   ✅ Success: ${successCount}`)
  console.log(`   ❌ Failed: ${failCount}`)
  
  if (failCount > 0) {
    process.exit(1)
  }
}

main()
  .catch((e) => {
    console.error('Fatal error:', e)
    process.exit(1)
  })
