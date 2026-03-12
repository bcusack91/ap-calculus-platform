import path from 'path'
import dotenv from 'dotenv'
import { defineConfig } from 'prisma/config'

// Prisma config files skip automatic .env loading, so load it manually
dotenv.config({ path: path.join(__dirname, '.env') })

export default defineConfig({
  schema: path.join(__dirname, 'prisma', 'schema.prisma'),
  seed: 'tsx prisma/seed.ts',
})
