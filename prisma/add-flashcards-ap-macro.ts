import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP Macroeconomics flashcards...\n');

  const topicSlugs = [
    'macro-gdp-growth', 'macro-ad-as',
    'macro-monetary-policy', 'macro-fiscal-policy',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'macro-gdp-growth' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'What is GDP?', back: '**Gross Domestic Product**: the total market value of all **final goods and services** produced within a country in a given year.\n\nGDP = C + I + G + (X − M)', hint: 'Total output of the economy in a year.' },
        { topicId: t1.id, front: 'Real GDP vs. Nominal GDP?', back: '**Nominal GDP**: measured in **current prices** (includes inflation)\n**Real GDP**: adjusted for **inflation** using a base year\n\nReal GDP = Nominal GDP ÷ GDP Deflator × 100\n\nReal GDP is better for comparing output over time.', hint: 'Real removes inflation; nominal does not.' },
        { topicId: t1.id, front: 'What is the GDP deflator?', back: 'A price index measuring the **average price level** of all goods in GDP.\n\nGDP Deflator = (Nominal GDP ÷ Real GDP) × 100\n\nA deflator > 100 means prices have risen since the base year.', hint: 'Price index for all GDP goods.' },
      ],
    });
    console.log('✅ GDP & Growth flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'macro-ad-as' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'What shifts Aggregate Demand?', back: 'AD = C + I + G + (X−M). Shifts RIGHT (increase) from:\n• ↑ Consumer confidence/wealth\n• ↑ Investment spending\n• ↑ Government spending\n• ↑ Net exports\n• ↑ Money supply\n\nShifts LEFT for the opposite.', hint: 'Anything that increases total spending shifts AD right.' },
        { topicId: t2.id, front: 'Short-Run vs. Long-Run AS?', back: '**SRAS**: upward-sloping — higher prices → more output (short run)\n• Shifts from input costs, supply shocks\n\n**LRAS**: vertical at **full-employment output** (potential GDP)\n• Only shifts from changes in resources, technology, productivity', hint: 'SRAS slopes up; LRAS is vertical at full employment.' },
        { topicId: t2.id, front: 'What is stagflation?', back: '**Stagnation + inflation**: simultaneous high **unemployment** and high **inflation**.\n\nCaused by a **leftward shift of SRAS** (supply shock).\n\nDifficult to fix: expansionary policy worsens inflation; contractionary policy worsens unemployment.', hint: 'Supply shock → high unemployment AND high prices.' },
      ],
    });
    console.log('✅ AD-AS Model flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'macro-monetary-policy' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'What are the Fed\'s three tools?', back: '1. **Open Market Operations** (most used): buy/sell government bonds\n2. **Discount Rate**: interest rate the Fed charges banks\n3. **Reserve Requirement**: fraction of deposits banks must hold\n\nBuying bonds / lowering rates / lowering RR = **expansionary**', hint: 'OMO, discount rate, reserve requirement.' },
        { topicId: t3.id, front: 'What is the money multiplier?', back: 'Money Multiplier = **1 ÷ Reserve Requirement**\n\nMaximum money created = Initial deposit × Money multiplier\n\nExample: RR = 10% → multiplier = 10 → $1,000 deposit can create up to $10,000 in checkable deposits.', hint: '1 / RR = multiplier.' },
        { topicId: t3.id, front: 'Expansionary vs. contractionary monetary policy?', back: '**Expansionary** (fight recession):\n• Buy bonds → ↑ money supply → ↓ interest rates → ↑ investment → ↑ AD\n\n**Contractionary** (fight inflation):\n• Sell bonds → ↓ money supply → ↑ interest rates → ↓ investment → ↓ AD', hint: 'Buy bonds = expand; Sell bonds = contract.' },
      ],
    });
    console.log('✅ Monetary Policy flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'macro-fiscal-policy' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'What is fiscal policy?', back: 'Government use of **spending and taxation** to influence the economy.\n\n**Expansionary**: ↑ G or ↓ taxes → ↑ AD (fight recession)\n**Contractionary**: ↓ G or ↑ taxes → ↓ AD (fight inflation)\n\nConducted by **Congress and the President** (not the Fed).', hint: 'Government spending and taxes — not the Fed.' },
        { topicId: t4.id, front: 'What is the spending multiplier?', back: 'Spending multiplier = **1 ÷ (1 − MPC)** = **1 ÷ MPS**\n\nMPC = Marginal Propensity to Consume\n\nExample: MPC = 0.8 → multiplier = 5. $100 in government spending → $500 increase in GDP.', hint: '1/(1-MPC) for government spending.' },
        { topicId: t4.id, front: 'What is crowding out?', back: 'When government borrowing **increases interest rates**, which **reduces private investment**.\n\nGovernment deficit spending → ↑ demand for loanable funds → ↑ interest rates → ↓ private investment\n\nPartially offsets the expansionary effect of fiscal policy.', hint: 'Government borrowing crowds out private investment.' },
      ],
    });
    console.log('✅ Fiscal Policy flashcards');
  }

  console.log('\n✅ All AP Macroeconomics flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
