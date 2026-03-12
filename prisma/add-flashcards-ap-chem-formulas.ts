import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP Chemistry formula flashcards...\n');

  const topicSlugs = [
    'ideal-gas-law',
    'moles-molar-mass',
    'enthalpy-calorimetry',
    'entropy-second-law',
    'gibbs-free-energy',
    'chemical-equilibrium',
    'acid-base-theories-ph',
    'reaction-rates-and-rate-laws',
    'electrochemistry',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'ideal-gas-law' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'Ideal Gas Law formula?', back: '$PV = nRT$\n\nP = pressure (atm), V = volume (L), n = moles, R = 0.0821 L·atm/(mol·K), T = temperature (K)', hint: 'PV = nRT is the most-used gas equation.' },
        { topicId: t1.id, front: "What is Dalton's Law of Partial Pressures?", back: '$P_{\\text{total}} = P_1 + P_2 + P_3 + \\cdots$\n\nThe total pressure is the sum of individual gas partial pressures.', hint: 'Each gas contributes independently.' },
        { topicId: t1.id, front: "What is Graham's Law of Effusion?", back: '$\\frac{\\text{rate}_1}{\\text{rate}_2} = \\sqrt{\\frac{M_2}{M_1}}$\n\nLighter gases effuse faster.', hint: 'Rate is inversely proportional to square root of molar mass.' },
      ],
    });
    console.log('✅ Ideal Gas Law flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'moles-molar-mass' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: "What is Avogadro's number?", back: "$6.022 \\times 10^{23}$ particles per mole.", hint: 'This defines a mole of any substance.' },
        { topicId: t2.id, front: 'How do you convert grams to moles?', back: '$n = \\frac{\\text{mass (g)}}{\\text{molar mass (g/mol)}}$', hint: 'Divide mass by molar mass.' },
      ],
    });
    console.log('✅ Moles & Molar Mass flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'enthalpy-calorimetry' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'Calorimetry formula?', back: '$q = mc\\Delta T$\n\nq = heat (J), m = mass (g), c = specific heat capacity, $\\Delta T$ = temperature change', hint: 'Heat = mass × specific heat × change in temperature.' },
        { topicId: t3.id, front: "State Hess's Law.", back: 'The total enthalpy change for a reaction is the sum of the enthalpy changes for individual steps, regardless of the pathway.', hint: 'Enthalpy is a state function — path independent.' },
        { topicId: t3.id, front: 'Standard enthalpy of formation equation?', back: '$\\Delta H^\\circ_{\\text{rxn}} = \\sum \\Delta H^\\circ_f(\\text{products}) - \\sum \\Delta H^\\circ_f(\\text{reactants})$', hint: 'Products minus reactants.' },
      ],
    });
    console.log('✅ Enthalpy & Calorimetry flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'gibbs-free-energy' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'Gibbs Free Energy equation?', back: '$\\Delta G = \\Delta H - T\\Delta S$\n\n$\\Delta G < 0$: spontaneous\n$\\Delta G > 0$: non-spontaneous\n$\\Delta G = 0$: equilibrium', hint: 'Negative ΔG means favorable.' },
        { topicId: t4.id, front: 'Relationship between $\\Delta G$ and equilibrium constant $K$?', back: '$\\Delta G^\\circ = -RT\\ln K$\n\nIf $K > 1$, $\\Delta G^\\circ < 0$ (products favored).\nIf $K < 1$, $\\Delta G^\\circ > 0$ (reactants favored).', hint: 'Large K = negative ΔG°.' },
      ],
    });
    console.log('✅ Gibbs Free Energy flashcards');
  }

  const t5 = await prisma.topic.findFirst({ where: { slug: 'chemical-equilibrium' } });
  if (t5) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t5.id, front: 'Equilibrium expression for $aA + bB \\rightleftharpoons cC + dD$?', back: '$K = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$\n\nProducts over reactants, each raised to their stoichiometric coefficient.', hint: 'Pure solids and liquids are excluded.' },
        { topicId: t5.id, front: "State Le Chatelier's Principle.", back: 'When a stress is applied to a system at equilibrium, the system shifts to partially counteract the stress.', hint: 'Add reactant → shifts right. Increase T for endothermic → shifts right.' },
      ],
    });
    console.log('✅ Chemical Equilibrium flashcards');
  }

  const t6 = await prisma.topic.findFirst({ where: { slug: 'acid-base-theories-ph' } });
  if (t6) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t6.id, front: 'pH formula?', back: '$\\text{pH} = -\\log[\\text{H}^+]$\n\n$\\text{pOH} = -\\log[\\text{OH}^-]$\n\n$\\text{pH} + \\text{pOH} = 14$ (at 25°C)', hint: 'Lower pH = more acidic.' },
        { topicId: t6.id, front: 'What is $K_w$ at 25°C?', back: '$K_w = [\\text{H}^+][\\text{OH}^-] = 1.0 \\times 10^{-14}$', hint: 'Autoionization constant of water.' },
        { topicId: t6.id, front: 'Henderson-Hasselbalch equation?', back: '$\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{A}^-]}{[\\text{HA}]}$', hint: 'Used for buffer pH calculations.' },
      ],
    });
    console.log('✅ Acid-Base & pH flashcards');
  }

  const t7 = await prisma.topic.findFirst({ where: { slug: 'reaction-rates-and-rate-laws' } });
  if (t7) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t7.id, front: 'General rate law form?', back: '$\\text{Rate} = k[A]^m[B]^n$\n\nk = rate constant, m and n = reaction orders (determined experimentally).', hint: 'Orders are NOT from balanced equation coefficients.' },
        { topicId: t7.id, front: 'Arrhenius equation?', back: '$k = Ae^{-E_a/RT}$\n\nA = frequency factor, $E_a$ = activation energy, R = 8.314 J/(mol·K), T = temperature (K)', hint: 'Higher temperature → larger k → faster reaction.' },
      ],
    });
    console.log('✅ Rate Laws flashcards');
  }

  const t8 = await prisma.topic.findFirst({ where: { slug: 'electrochemistry' } });
  if (t8) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t8.id, front: 'Standard cell potential formula?', back: '$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$\n\nPositive $E^\\circ_{\\text{cell}}$ means the reaction is spontaneous.', hint: 'Cathode minus anode.' },
        { topicId: t8.id, front: 'Nernst equation?', back: '$E = E^\\circ - \\frac{RT}{nF}\\ln Q$\n\nAt 25°C: $E = E^\\circ - \\frac{0.0592}{n}\\log Q$', hint: 'Adjusts cell potential for non-standard conditions.' },
        { topicId: t8.id, front: 'Relationship between $\\Delta G^\\circ$ and $E^\\circ$?', back: '$\\Delta G^\\circ = -nFE^\\circ$\n\nn = moles of electrons, F = 96485 C/mol (Faraday constant)', hint: 'Positive E° gives negative ΔG° (spontaneous).' },
      ],
    });
    console.log('✅ Electrochemistry flashcards');
  }

  console.log('\n✅ All AP Chemistry formula flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
