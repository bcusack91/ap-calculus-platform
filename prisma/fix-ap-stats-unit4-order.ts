import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Final desired Unit 4 (probability) ordering per CED:
//   1. basic-probability-rules
//   2. conditional-probability
//   3. independence
//   4. discrete-random-variables
//   5. mean-sd-random-variables
//   6. combining-random-variables
//   7. continuous-random-variables
//   8. binomial-distribution
//   9. geometric-distribution
const orderMap: Record<string, number> = {
  'basic-probability-rules': 1,
  'conditional-probability': 2,
  'independence': 3,
  'discrete-random-variables': 4,
  'mean-sd-random-variables': 5,
  'combining-random-variables': 6,
  'continuous-random-variables': 7,
  'binomial-distribution': 8,
  'geometric-distribution': 9,
};

async function main() {
  console.log('Fixing AP Statistics Unit 4 topic ordering...');
  for (const [slug, order] of Object.entries(orderMap)) {
    const t = await prisma.topic.findUnique({ where: { slug } });
    if (!t) {
      console.warn(`  ⚠ topic not found: ${slug}`);
      continue;
    }
    await prisma.topic.update({ where: { id: t.id }, data: { order } });
    console.log(`✓ ${slug} → order ${order}`);
  }
  console.log('✓ Unit 4 reorder complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
