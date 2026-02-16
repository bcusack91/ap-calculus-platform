import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding Organic Chemistry course, categories, and topics...')

  // Ensure the course exists
  const course = await prisma.course.upsert({
    where: { slug: 'organic-chemistry' },
    update: {},
    create: {
      slug: 'organic-chemistry',
      name: 'Organic Chemistry',
      icon: '⚗️',
      description: 'Master organic molecular structure, functional groups, reaction mechanisms, synthesis strategies, and spectroscopy.',
      order: 11,
      color: 'lime',
    },
  })
  console.log(`✓ Course: ${course.name}`)

  // ─── Unit 1: Structure & Bonding ───
  const unit1 = await prisma.category.upsert({
    where: { slug: 'ochem-structure-bonding' },
    update: {},
    create: {
      slug: 'ochem-structure-bonding',
      name: 'Structure & Bonding',
      description: 'Atomic structure, bonding, molecular representations, and acid-base chemistry',
      order: 1,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Structure & Bonding')

  await prisma.topic.upsert({
    where: { slug: 'atomic-structure-bonding-ochem' },
    update: {},
    create: {
      slug: 'atomic-structure-bonding-ochem',
      title: 'Atomic Structure & Bonding',
      description: 'Atomic orbitals, Lewis structures, hybridization, molecular orbital theory, and bond polarity',
      order: 1,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# ⚗️ Atomic Structure & Bonding\n\nLearn about electron configuration, Lewis structures, formal charge, hybridization (sp³, sp², sp), molecular orbital theory, and bond polarity/dipole moments.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'molecular-representations' },
    update: {},
    create: {
      slug: 'molecular-representations',
      title: 'Molecular Representations',
      description: 'Condensed and skeletal structures, functional groups, isomers, degrees of unsaturation, and intermolecular forces',
      order: 2,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# 🔬 Molecular Representations\n\nMaster condensed and skeletal (line-angle) structures, functional group identification, constitutional isomers, degrees of unsaturation, and intermolecular forces.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'acids-bases-organic' },
    update: {},
    create: {
      slug: 'acids-bases-organic',
      title: 'Acids & Bases in Organic Chemistry',
      description: 'Brønsted-Lowry and Lewis acid-base theory, pKa, factors affecting acidity, and predicting reactions',
      order: 3,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# ⚖️ Acids & Bases in Organic Chemistry\n\nStudy Brønsted-Lowry and Lewis acid-base definitions, pKa and acid strength, factors affecting acidity (electronegativity, size, resonance, inductive effects), and predicting acid-base reactions.`,
    },
  })

  // ─── Unit 2: Alkanes & Stereochemistry ───
  const unit2 = await prisma.category.upsert({
    where: { slug: 'ochem-alkanes-stereochem' },
    update: {},
    create: {
      slug: 'ochem-alkanes-stereochem',
      name: 'Alkanes & Stereochemistry',
      description: 'Alkane nomenclature, conformational analysis, chirality, and stereoisomers',
      order: 2,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Alkanes & Stereochemistry')

  await prisma.topic.upsert({
    where: { slug: 'alkanes-cycloalkanes' },
    update: {},
    create: {
      slug: 'alkanes-cycloalkanes',
      title: 'Alkanes & Cycloalkanes',
      description: 'IUPAC nomenclature, conformational analysis, Newman projections, cyclohexane chairs, and ring strain',
      order: 1,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 🔗 Alkanes & Cycloalkanes\n\nLearn IUPAC nomenclature, Newman projections, staggered vs eclipsed conformations, cyclohexane chair conformations, axial/equatorial positions, and ring strain.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'stereochemistry-chirality' },
    update: {},
    create: {
      slug: 'stereochemistry-chirality',
      title: 'Stereochemistry & Chirality',
      description: 'Chirality, R/S configuration, optical activity, enantiomers, diastereomers, meso compounds, and Fischer projections',
      order: 2,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 🔄 Stereochemistry & Chirality\n\nMaster chirality, stereocenters, Cahn-Ingold-Prelog priority rules, R/S configuration, optical activity, enantiomers, diastereomers, meso compounds, and Fischer projections.`,
    },
  })

  // ─── Unit 3: Substitution & Elimination ───
  const unit3 = await prisma.category.upsert({
    where: { slug: 'ochem-substitution-elimination' },
    update: {},
    create: {
      slug: 'ochem-substitution-elimination',
      name: 'Substitution & Elimination',
      description: 'SN1, SN2, E1, E2 mechanisms and their competition',
      order: 3,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Substitution & Elimination')

  await prisma.topic.upsert({
    where: { slug: 'nucleophilic-substitution' },
    update: {},
    create: {
      slug: 'nucleophilic-substitution',
      title: 'Nucleophilic Substitution (SN1 & SN2)',
      description: 'SN2 and SN1 mechanisms, substrate/nucleophile effects, solvent effects, and leaving groups',
      order: 1,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# 🔀 Nucleophilic Substitution\n\nStudy SN2 (backside attack, inversion, bimolecular) and SN1 (carbocation intermediate, racemization, unimolecular) mechanisms. Understand how substrate, nucleophile, solvent, and leaving group determine the pathway.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'elimination-reactions' },
    update: {},
    create: {
      slug: 'elimination-reactions',
      title: 'Elimination Reactions (E1 & E2)',
      description: 'E2 and E1 mechanisms, Zaitsev vs Hofmann products, and substitution vs elimination competition',
      order: 2,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# ➡️ Elimination Reactions\n\nLearn E2 (anti-periplanar, concerted) and E1 (carbocation intermediate) mechanisms. Understand Zaitsev's rule, Hofmann products with bulky bases, and the SN1/SN2/E1/E2 decision framework.`,
    },
  })

  // ─── Unit 4: Alkenes, Alkynes & Radicals ───
  const unit4 = await prisma.category.upsert({
    where: { slug: 'ochem-alkenes-alkynes' },
    update: {},
    create: {
      slug: 'ochem-alkenes-alkynes',
      name: 'Alkenes, Alkynes & Radicals',
      description: 'Reactions of alkenes and alkynes, radical mechanisms',
      order: 4,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Alkenes, Alkynes & Radicals')

  await prisma.topic.upsert({
    where: { slug: 'alkenes-reactions' },
    update: {},
    create: {
      slug: 'alkenes-reactions',
      title: 'Alkene Reactions',
      description: 'Electrophilic addition, Markovnikov/anti-Markovnikov, hydroboration-oxidation, oxidation, and reduction',
      order: 1,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 🟢 Alkene Reactions\n\nMaster electrophilic addition (HX, H₂O, X₂), Markovnikov's rule, anti-Markovnikov addition (HBr/peroxides), hydroboration-oxidation, catalytic hydrogenation, ozonolysis, and epoxidation.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'alkynes-synthesis' },
    update: {},
    create: {
      slug: 'alkynes-synthesis',
      title: 'Alkynes & Synthesis',
      description: 'Alkyne acidity, acetylide chemistry, addition reactions, selective reduction, and synthesis strategies',
      order: 2,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 🔵 Alkynes & Synthesis\n\nStudy terminal alkyne acidity, acetylide anion formation and alkylation (C-C bond formation), addition reactions (HX, H₂O), and selective reduction (Lindlar → cis; Na/NH₃ → trans).`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'radical-reactions' },
    update: {},
    create: {
      slug: 'radical-reactions',
      title: 'Radical Reactions',
      description: 'Radical halogenation, selectivity, anti-Markovnikov HBr addition, and radical stability',
      order: 3,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# ⚡ Radical Reactions\n\nLearn radical chain mechanisms (initiation, propagation, termination), halogenation selectivity (Br₂ >> Cl₂), NBS allylic bromination, anti-Markovnikov radical addition of HBr, and radical stability.`,
    },
  })

  // ─── Unit 5: Alcohols, Ethers & Spectroscopy ───
  const unit5 = await prisma.category.upsert({
    where: { slug: 'ochem-alcohols-spectroscopy' },
    update: {},
    create: {
      slug: 'ochem-alcohols-spectroscopy',
      name: 'Alcohols, Ethers & Spectroscopy',
      description: 'Alcohol and ether chemistry, IR, mass spectrometry, and NMR',
      order: 5,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Alcohols, Ethers & Spectroscopy')

  await prisma.topic.upsert({
    where: { slug: 'alcohols-ethers' },
    update: {},
    create: {
      slug: 'alcohols-ethers',
      title: 'Alcohols & Ethers',
      description: 'Alcohol synthesis and reactions, oxidation, Williamson ether synthesis, and epoxide ring-opening',
      order: 1,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# 🍷 Alcohols & Ethers\n\nStudy alcohol synthesis (Grignard, hydration, reduction), reactions (dehydration, oxidation, conversion to halides), Williamson ether synthesis, and epoxide ring-opening reactions.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'infrared-mass-spectrometry' },
    update: {},
    create: {
      slug: 'infrared-mass-spectrometry',
      title: 'IR & Mass Spectrometry',
      description: 'IR spectroscopy fundamentals, key absorptions, mass spectrometry, and fragmentation patterns',
      order: 2,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# 📡 IR & Mass Spectrometry\n\nLearn IR spectroscopy (O-H, C=O, N-H absorptions), fingerprint vs diagnostic regions, mass spectrometry (molecular ion, fragmentation patterns), and isotope patterns for Cl/Br.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'nmr-spectroscopy' },
    update: {},
    create: {
      slug: 'nmr-spectroscopy',
      title: 'NMR Spectroscopy',
      description: '¹H NMR chemical shift, integration, splitting, ¹³C NMR, and structure determination',
      order: 3,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# 🧲 NMR Spectroscopy\n\nMaster ¹H NMR (chemical shift, integration, n+1 splitting, coupling constants), ¹³C NMR and DEPT, and systematic structure determination combining IR, MS, and NMR data.`,
    },
  })

  // ─── Unit 6: Aromatic Chemistry ───
  const unit6 = await prisma.category.upsert({
    where: { slug: 'ochem-aromatic' },
    update: {},
    create: {
      slug: 'ochem-aromatic',
      name: 'Aromatic Chemistry',
      description: 'Aromaticity, conjugation, and electrophilic aromatic substitution',
      order: 6,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Aromatic Chemistry')

  await prisma.topic.upsert({
    where: { slug: 'conjugated-systems-dienes' },
    update: {},
    create: {
      slug: 'conjugated-systems-dienes',
      title: 'Conjugated Systems & Dienes',
      description: 'Conjugation, 1,2- vs 1,4-addition, Diels-Alder reaction, MO theory, and UV-Vis spectroscopy',
      order: 1,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# 🌈 Conjugated Systems & Dienes\n\nStudy conjugation stability, kinetic (1,2) vs thermodynamic (1,4) addition, Diels-Alder [4+2] cycloaddition, frontier molecular orbital theory, and UV-Vis spectroscopy.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'aromatic-compounds-benzene' },
    update: {},
    create: {
      slug: 'aromatic-compounds-benzene',
      title: 'Aromatic Compounds & Benzene',
      description: 'Aromaticity, Hückel\'s rule, benzene structure, nomenclature, and aromatic vs antiaromatic',
      order: 2,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# 💎 Aromatic Compounds & Benzene\n\nLearn Hückel's rule (4n+2 π electrons), benzene resonance and stability, aromatic nomenclature (ortho/meta/para), and distinguishing aromatic, antiaromatic, and nonaromatic compounds.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'electrophilic-aromatic-substitution' },
    update: {},
    create: {
      slug: 'electrophilic-aromatic-substitution',
      title: 'Electrophilic Aromatic Substitution',
      description: 'EAS mechanism, halogenation, nitration, Friedel-Crafts, directing effects, and multi-step synthesis',
      order: 3,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# ⚡ Electrophilic Aromatic Substitution\n\nMaster the EAS mechanism (arenium ion intermediate), halogenation, nitration, Friedel-Crafts alkylation/acylation, activating/deactivating groups, ortho/para vs meta directors, and multi-step synthesis.`,
    },
  })

  // ─── Unit 7: Carbonyl Chemistry ───
  const unit7 = await prisma.category.upsert({
    where: { slug: 'ochem-carbonyl' },
    update: {},
    create: {
      slug: 'ochem-carbonyl',
      name: 'Carbonyl Chemistry',
      description: 'Aldehydes, ketones, carboxylic acids, and their derivatives',
      order: 7,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Carbonyl Chemistry')

  await prisma.topic.upsert({
    where: { slug: 'aldehydes-ketones-reactions' },
    update: {},
    create: {
      slug: 'aldehydes-ketones-reactions',
      title: 'Aldehydes & Ketones',
      description: 'Nucleophilic addition, Grignard reactions, reduction/oxidation, and acetals',
      order: 1,
      categoryId: unit7.id,
      isPremium: false,
      textContent: `# 🔷 Aldehydes & Ketones\n\nStudy nucleophilic addition to carbonyls, Grignard and Wittig reactions, reduction (NaBH₄, LiAlH₄), oxidation (Tollens test), and acetal formation/protecting groups.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'carboxylic-acids-derivatives' },
    update: {},
    create: {
      slug: 'carboxylic-acids-derivatives',
      title: 'Carboxylic Acids & Derivatives',
      description: 'Nucleophilic acyl substitution, acid chlorides, anhydrides, esters, amides, and interconversion',
      order: 2,
      categoryId: unit7.id,
      isPremium: false,
      textContent: `# 🔶 Carboxylic Acids & Derivatives\n\nLearn nucleophilic acyl substitution, reactivity order (acid chloride > anhydride > ester > amide), Fischer esterification, saponification, and derivative interconversion.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'enolate-chemistry' },
    update: {},
    create: {
      slug: 'enolate-chemistry',
      title: 'Enolate Chemistry',
      description: 'Keto-enol tautomerism, enolate formation, aldol reaction, Claisen condensation, Michael, and Robinson reactions',
      order: 3,
      categoryId: unit7.id,
      isPremium: false,
      textContent: `# 🔄 Enolate Chemistry\n\nMaster keto-enol tautomerism, LDA enolate formation, aldol reaction/condensation, Claisen condensation, Michael conjugate addition, and Robinson annulation for ring synthesis.`,
    },
  })

  // ─── Unit 8: Amines & Biochemistry ───
  const unit8 = await prisma.category.upsert({
    where: { slug: 'ochem-amines-biochem' },
    update: {},
    create: {
      slug: 'ochem-amines-biochem',
      name: 'Amines & Biochemistry',
      description: 'Amine chemistry, carbohydrates, amino acids, lipids, and nucleic acids',
      order: 8,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Amines & Biochemistry')

  await prisma.topic.upsert({
    where: { slug: 'amines-nitrogen-compounds' },
    update: {},
    create: {
      slug: 'amines-nitrogen-compounds',
      title: 'Amines & Nitrogen Compounds',
      description: 'Amine classification, basicity, synthesis, reactions, and diazonium chemistry',
      order: 1,
      categoryId: unit8.id,
      isPremium: false,
      textContent: `# 🟣 Amines & Nitrogen Compounds\n\nStudy amine classification (1°, 2°, 3°), basicity trends, synthesis (Gabriel, reductive amination), reactions (alkylation, acylation), and diazonium salt chemistry (Sandmeyer, azo dyes).`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'carbohydrates-biochemistry' },
    update: {},
    create: {
      slug: 'carbohydrates-biochemistry',
      title: 'Carbohydrates',
      description: 'Monosaccharide structure, Fischer/Haworth projections, disaccharides, and polysaccharides',
      order: 2,
      categoryId: unit8.id,
      isPremium: false,
      textContent: `# 🍬 Carbohydrates\n\nLearn monosaccharide structure (aldoses, ketoses), D/L configuration, Fischer and Haworth projections, anomers (α/β), glycosidic bonds, disaccharides (maltose, lactose, sucrose), and polysaccharides (starch, cellulose).`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'amino-acids-proteins' },
    update: {},
    create: {
      slug: 'amino-acids-proteins',
      title: 'Amino Acids & Proteins',
      description: 'Amino acid structure, acid-base properties, peptide bonds, protein structure levels, and reactions',
      order: 3,
      categoryId: unit8.id,
      isPremium: false,
      textContent: `# 🧬 Amino Acids & Proteins\n\nMaster amino acid structure (20 standard), zwitterions and isoelectric point, peptide bond formation, protein structure levels (primary through quaternary), and amino acid synthesis/analysis.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'lipids-nucleic-acids' },
    update: {},
    create: {
      slug: 'lipids-nucleic-acids',
      title: 'Lipids & Nucleic Acids',
      description: 'Fatty acids, triglycerides, phospholipids, terpenes, steroids, nucleotides, and DNA/RNA',
      order: 4,
      categoryId: unit8.id,
      isPremium: false,
      textContent: `# 🧪 Lipids & Nucleic Acids\n\nStudy fatty acids and triglycerides, saponification, phospholipid bilayers, terpenes and steroids, nucleotide structure, phosphodiester bonds, base pairing, and the DNA double helix.`,
    },
  })

  console.log('\n🎉 Organic Chemistry seeding complete!')
  console.log(`  📚 ${8} categories, ${23} topics created`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
