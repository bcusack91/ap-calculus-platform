import path from 'path'
import { defineConfig } from 'prisma/config'

export default defineConfig({
  schema: path.join(__dirname, 'prisma', 'schema.prisma'),
  seed: 'tsx prisma/seed.ts',
})
