import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP Environmental Science flashcards...\n');

  const topicSlugs = [
    'apes-ecosystem-structure', 'apes-biodiversity',
    'apes-atmosphere-climate', 'apes-energy',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'apes-ecosystem-structure' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'What is a trophic level?', back: 'The **position** an organism occupies in a food chain:\n• **Level 1**: Producers (plants, algae)\n• **Level 2**: Primary consumers (herbivores)\n• **Level 3**: Secondary consumers (carnivores)\n• **Level 4**: Tertiary consumers (top predators)\n\nEnergy decreases ~**90%** at each level (10% rule).', hint: 'Position in the food chain — 10% rule.' },
        { topicId: t1.id, front: 'What is net primary productivity (NPP)?', back: 'The rate at which producers **store energy** after accounting for their own respiration.\n\nNPP = GPP − Respiration\n\nNPP is what\'s **available to consumers**.', hint: 'Energy stored by producers minus what they use.' },
        { topicId: t1.id, front: 'Biotic vs. abiotic factors?', back: '**Biotic**: living components — plants, animals, fungi, bacteria, competition, predation\n\n**Abiotic**: non-living components — temperature, water, sunlight, soil, pH, wind, minerals\n\nBoth interact to shape ecosystems.', hint: 'Living vs. non-living.' },
      ],
    });
    console.log('✅ Ecosystem Structure flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'apes-biodiversity' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'Three levels of biodiversity?', back: '1. **Genetic diversity**: variation in genes within a species\n2. **Species diversity**: variety of species in an area\n3. **Ecosystem diversity**: variety of ecosystems in a region\n\nAll three are important for resilience.', hint: 'Genes, species, ecosystems.' },
        { topicId: t2.id, front: 'What are ecosystem services?', back: 'Benefits humans receive from ecosystems:\n• **Provisioning**: food, water, timber, medicine\n• **Regulating**: climate regulation, flood control, pollination\n• **Cultural**: recreation, aesthetics, spiritual value\n• **Supporting**: nutrient cycling, soil formation, photosynthesis', hint: 'Provisioning, regulating, cultural, supporting.' },
        { topicId: t2.id, front: 'What are the main threats to biodiversity?', back: '**HIPPCO**:\n• **H**abitat destruction (biggest threat)\n• **I**nvasive species\n• **P**opulation growth (human)\n• **P**ollution\n• **C**limate change\n• **O**verexploitation', hint: 'HIPPCO.' },
      ],
    });
    console.log('✅ Biodiversity flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'apes-atmosphere-climate' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'What is the greenhouse effect?', back: '**Natural process**: greenhouse gases (CO₂, CH₄, N₂O, H₂O) **trap heat** in the atmosphere by absorbing and re-emitting infrared radiation.\n\nWithout it, Earth would be ~33°C colder.\n\n**Enhanced greenhouse effect**: human emissions increase GHGs → global warming.', hint: 'Natural warming process, enhanced by human emissions.' },
        { topicId: t3.id, front: 'What are the major greenhouse gases?', back: '• **CO₂** (carbon dioxide): fossil fuels, deforestation — most abundant\n• **CH₄** (methane): agriculture, landfills — 80× more potent than CO₂ (20-year)\n• **N₂O** (nitrous oxide): fertilizers, industry\n• **CFCs**: refrigerants — also destroy ozone', hint: 'CO₂, methane, nitrous oxide, CFCs.' },
        { topicId: t3.id, front: 'Ocean acidification?', back: 'CO₂ dissolves in ocean water → forms **carbonic acid** → lowers ocean pH.\n\npH has dropped ~**0.1 units** since pre-industrial times (30% more acidic).\n\nHarms organisms with **calcium carbonate** shells/skeletons: coral, shellfish, plankton.', hint: 'CO₂ + ocean = acid → harms shells and coral.' },
      ],
    });
    console.log('✅ Atmosphere & Climate Change flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'apes-energy' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'Renewable vs. nonrenewable energy?', back: '**Renewable**: replenished on human timescales — solar, wind, hydroelectric, geothermal, biomass\n\n**Nonrenewable**: finite supply — coal, oil, natural gas, nuclear (uranium)\n\nFossil fuels = nonrenewable, formed over millions of years.', hint: 'Replenished vs. finite.' },
        { topicId: t4.id, front: 'What is energy efficiency?', back: 'The **percentage of energy input** that is converted to **useful work**.\n\nEfficiency = (useful energy output ÷ total energy input) × 100\n\nIncandescent bulb: ~5% efficient\nLED bulb: ~80% efficient\nCar engine: ~20-25% efficient', hint: 'Useful output / total input × 100.' },
      ],
    });
    console.log('✅ Energy Concepts flashcards');
  }

  console.log('\n✅ All AP Environmental Science flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
