import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP Microeconomics flashcards...\n');

  const topicSlugs = [
    'micro-supply-demand', 'micro-elasticity',
    'micro-perfect-competition', 'micro-monopoly',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'micro-supply-demand' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'What is the Law of Demand?', back: 'As **price increases**, **quantity demanded decreases** (and vice versa), ceteris paribus.\n\nExplained by:\n• **Substitution effect**: consumers switch to cheaper alternatives\n• **Income effect**: higher price reduces purchasing power', hint: 'Inverse relationship: price ↑, Qd ↓.' },
        { topicId: t1.id, front: 'What shifts the demand curve?', back: 'Demand **shifters** (change the entire curve):\n• **T**astes/preferences\n• **R**elated goods (substitutes/complements)\n• **I**ncome (normal vs. inferior goods)\n• **B**uyer expectations\n• **E**number of buyers\n\nMnemonic: **TRIBE**', hint: 'TRIBE — Tastes, Related, Income, Buyers, Expectations.' },
        { topicId: t1.id, front: 'What is consumer surplus?', back: 'The **difference** between what consumers are **willing to pay** and what they **actually pay**.\n\nGraphically: the area **below the demand curve** and **above the equilibrium price**.', hint: 'Willingness to pay minus actual price.' },
      ],
    });
    console.log('✅ Supply & Demand flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'micro-elasticity' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'Price Elasticity of Demand formula?', back: 'PED = **% change in Qd ÷ % change in P**\n\n|PED| > 1 → **elastic** (responsive)\n|PED| = 1 → **unit elastic**\n|PED| < 1 → **inelastic** (unresponsive)\n\nAlways negative (law of demand), but we use absolute value.', hint: '% ΔQd / % ΔP.' },
        { topicId: t2.id, front: 'Determinants of elasticity?', back: '**More elastic** if:\n• Many **substitutes** available\n• **Luxury** good (not necessity)\n• **Large share** of budget\n• **Long time** to adjust\n\n**More inelastic** if opposite.', hint: 'Substitutes, luxury, budget share, time.' },
        { topicId: t2.id, front: 'What is total revenue test?', back: 'If price ↑ and TR ↑ → demand is **inelastic**\nIf price ↑ and TR ↓ → demand is **elastic**\nIf price ↑ and TR unchanged → **unit elastic**\n\nTR = Price × Quantity', hint: 'Price and TR move same direction = inelastic.' },
      ],
    });
    console.log('✅ Elasticity flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'micro-perfect-competition' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'What are the characteristics of perfect competition?', back: '• **Many** buyers and sellers\n• **Identical** (homogeneous) products\n• **Free entry and exit**\n• **Perfect information**\n• Firms are **price takers** (MR = P = D = AR)\n\nExamples: agricultural markets', hint: 'Many firms, identical products, price takers.' },
        { topicId: t3.id, front: 'Profit-maximizing rule?', back: 'All firms maximize profit where **MR = MC** (marginal revenue = marginal cost).\n\nIf MR > MC → produce more\nIf MR < MC → produce less\n\nIn perfect competition: P = MR = MC at profit max.', hint: 'MR = MC for every market structure.' },
        { topicId: t3.id, front: 'Shutdown rule vs. exit rule?', back: '**Short-run shutdown**: if **P < AVC** (price below average variable cost), produce zero\n\n**Long-run exit**: if **P < ATC** (price below average total cost), leave the market', hint: 'Short run: P vs. AVC. Long run: P vs. ATC.' },
      ],
    });
    console.log('✅ Perfect Competition flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'micro-monopoly' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'What are the characteristics of a monopoly?', back: '• **Single seller** controls the market\n• **Unique product** with no close substitutes\n• **High barriers to entry** (legal, resource, economies of scale)\n• Firm is a **price maker**\n• **MR < P** (must lower price to sell more)', hint: 'One firm, no substitutes, high barriers.' },
        { topicId: t4.id, front: 'What is deadweight loss in a monopoly?', back: 'Monopolists produce **less output** and charge **higher prices** than competitive firms.\n\nThe resulting loss of consumer and producer surplus that **no one captures** = deadweight loss.\n\nSociety loses efficiency → allocative inefficiency.', hint: 'Less output, higher price → lost surplus.' },
        { topicId: t4.id, front: 'What is price discrimination?', back: 'Charging **different prices** to different consumers for the **same product** based on willingness to pay.\n\nConditions needed:\n• **Market power** (price maker)\n• Ability to **separate markets**\n• Prevent **resale**', hint: 'Different prices for the same good.' },
      ],
    });
    console.log('✅ Monopoly flashcards');
  }

  console.log('\n✅ All AP Microeconomics flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
