/**
 * Splits the legacy `organic-chemistry` course into two college-level
 * organic chemistry courses with AP-equivalent rigor:
 *
 *   • organic-chemistry-1 → first-semester organic chemistry
 *   • organic-chemistry-2 → second-semester organic chemistry
 *
 * What this seed does (idempotent — safe to re-run):
 *   1. Creates the two new Course rows.
 *   2. Creates new Category (unit) rows under each course mirroring a
 *      standard two-semester college organic chemistry sequence.
 *   3. Re-parents existing topics into the new categories so the 161 interactive
 *      lesson files (which key off topic.slug) keep working without any rewrites.
 *   4. Adds NEW advanced topics for Organic Chemistry 2 (pericyclic, retrosynthesis,
 *      aldol/Claisen, Michael/Robinson, NAS, phenols/quinones, advanced 2D NMR) to
 *      bring depth onto AP-equivalent footing.
 *   5. Cleans up empty legacy categories and demotes the legacy course so it no
 *      longer appears prominently in course listings.
 *
 * Run with:
 *   npx tsx prisma/seed-organic-chemistry-split.ts
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// ────────────────────────────────────────────────────────────────────────────
// Topic mapping
// ────────────────────────────────────────────────────────────────────────────
//
// Existing topic slugs (from prisma/seed-organic-chemistry.ts) that we re-home:
//
//  Organic Chemistry 1:
//    - atomic-structure-bonding-ochem
//    - molecular-representations
//    - acids-bases-organic
//    - alkanes-cycloalkanes
//    - stereochemistry-chirality
//    - nucleophilic-substitution
//    - elimination-reactions
//    - alkenes-reactions
//    - alkynes-synthesis
//    - radical-reactions
//    - alcohols-ethers
//    - infrared-mass-spectrometry
//    - nmr-spectroscopy
//
//  Organic Chemistry 2:
//    - conjugated-systems-dienes
//    - aromatic-compounds-benzene
//    - electrophilic-aromatic-substitution
//    - aldehydes-ketones-reactions
//    - carboxylic-acids-derivatives
//    - enolate-chemistry
//    - amines-nitrogen-compounds
//    - carbohydrates-biochemistry
//    - amino-acids-proteins
//    - lipids-nucleic-acids
//
// New OChem 2 topics added below to reach AP-equivalent depth.

async function main() {
  console.log('Splitting Organic Chemistry into OChem 1 & OChem 2...\n')

  // ─── 1. Create the two new courses ───
  const ochem1 = await prisma.course.upsert({
    where: { slug: 'organic-chemistry-1' },
    update: {
      name: 'Organic Chemistry 1',
      icon: '⚗️',
      description:
        'First-semester organic chemistry: structure, bonding, stereochemistry, substitution & elimination, alkene/alkyne/radical reactions, alcohols, and introductory spectroscopy. AP-equivalent rigor with a 1–5 score predictor.',
      order: 11,
      color: 'lime',
    },
    create: {
      slug: 'organic-chemistry-1',
      name: 'Organic Chemistry 1',
      icon: '⚗️',
      description:
        'First-semester organic chemistry: structure, bonding, stereochemistry, substitution & elimination, alkene/alkyne/radical reactions, alcohols, and introductory spectroscopy. AP-equivalent rigor with a 1–5 score predictor.',
      order: 11,
      color: 'lime',
    },
  })
  console.log(`✓ Course: ${ochem1.name} (${ochem1.slug})`)

  const ochem2 = await prisma.course.upsert({
    where: { slug: 'organic-chemistry-2' },
    update: {
      name: 'Organic Chemistry 2',
      icon: '🧪',
      description:
        'Second-semester organic chemistry: aromatic chemistry, full carbonyl/acyl chemistry, enolate condensations, amines, biomolecules, advanced spectroscopy, and multi-step retrosynthesis. AP-equivalent rigor with a 1–5 score predictor.',
      order: 12,
      color: 'emerald',
    },
    create: {
      slug: 'organic-chemistry-2',
      name: 'Organic Chemistry 2',
      icon: '🧪',
      description:
        'Second-semester organic chemistry: aromatic chemistry, full carbonyl/acyl chemistry, enolate condensations, amines, biomolecules, advanced spectroscopy, and multi-step retrosynthesis. AP-equivalent rigor with a 1–5 score predictor.',
      order: 12,
      color: 'emerald',
    },
  })
  console.log(`✓ Course: ${ochem2.name} (${ochem2.slug})\n`)

  // ─── 2. Create new categories (units) ───
  // OChem 1 — 5 units mirroring a standard first-semester sequence
  const o1u1 = await upsertCategory('ochem1-structure-bonding', 'Structure, Bonding & Acid-Base', 'Atomic structure, hybridization, Lewis structures, resonance, intermolecular forces, organic acid-base chemistry', 1, ochem1.id)
  const o1u2 = await upsertCategory('ochem1-alkanes-stereochem', 'Alkanes & Stereochemistry', 'Alkane and cycloalkane nomenclature, conformational analysis, chirality, R/S, stereoisomers', 2, ochem1.id)
  const o1u3 = await upsertCategory('ochem1-substitution-elimination', 'Substitution & Elimination (Alkyl Halides)', 'SN1, SN2, E1, E2 mechanisms; substrate, nucleophile, base, leaving group, and solvent effects', 3, ochem1.id)
  const o1u4 = await upsertCategory('ochem1-alkenes-alkynes-radicals', 'Alkenes, Alkynes & Radicals', 'Electrophilic addition to π systems, Markovnikov/anti-Markovnikov regiochemistry, alkyne chemistry, radical reactions', 4, ochem1.id)
  const o1u5 = await upsertCategory('ochem1-alcohols-spectroscopy', 'Alcohols, Ethers & Spectroscopy', 'Alcohol/ether synthesis and reactions, IR, mass spectrometry, and 1D NMR (¹H, ¹³C)', 5, ochem1.id)

  // OChem 2 — 6 units mirroring a standard second-semester sequence (expanded for AP depth)
  const o2u1 = await upsertCategory('ochem2-conjugation-aromatics', 'Conjugation, Pericyclic & Aromatic Chemistry', 'Conjugated dienes, Diels-Alder pericyclic reactions, aromaticity, EAS, NAS, phenol/quinone chemistry', 1, ochem2.id)
  const o2u2 = await upsertCategory('ochem2-carbonyls', 'Carbonyl Chemistry: Aldehydes, Ketones & Acyl Substitution', 'Nucleophilic addition, organometallic reagents, reduction/oxidation, nucleophilic acyl substitution at carboxylic acid derivatives', 2, ochem2.id)
  const o2u3 = await upsertCategory('ochem2-enolates-condensations', 'Enolates & Carbonyl α-Substitution', 'Enol/enolate formation, alpha-halogenation/alkylation, aldol & Claisen condensations, Michael additions, Robinson annulation', 3, ochem2.id)
  const o2u4 = await upsertCategory('ochem2-amines-nitrogen', 'Amines & Heterocyclic Nitrogen Chemistry', 'Amine basicity & synthesis, Hofmann elimination, diazonium chemistry, intro to heterocycles', 4, ochem2.id)
  const o2u5 = await upsertCategory('ochem2-biomolecules', 'Biomolecules', 'Carbohydrates, amino acids/peptides/proteins, lipids and nucleic acids — through an organic-mechanism lens', 5, ochem2.id)
  const o2u6 = await upsertCategory('ochem2-advanced-spectroscopy-synthesis', 'Advanced Spectroscopy & Multi-Step Synthesis', 'Advanced 2D NMR (COSY, HSQC, HMBC), structure elucidation, retrosynthetic analysis, multi-step total synthesis', 6, ochem2.id)

  // ─── 3. Re-parent existing topics into the new categories ───
  console.log('\nRe-parenting existing topics into new units...')
  await reparent('atomic-structure-bonding-ochem', o1u1.id, 1)
  await reparent('molecular-representations',       o1u1.id, 2)
  await reparent('acids-bases-organic',             o1u1.id, 3)

  await reparent('alkanes-cycloalkanes',            o1u2.id, 1)
  await reparent('stereochemistry-chirality',       o1u2.id, 2)

  await reparent('nucleophilic-substitution',       o1u3.id, 1)
  await reparent('elimination-reactions',           o1u3.id, 2)

  await reparent('alkenes-reactions',               o1u4.id, 1)
  await reparent('alkynes-synthesis',               o1u4.id, 2)
  await reparent('radical-reactions',               o1u4.id, 3)

  await reparent('alcohols-ethers',                 o1u5.id, 1)
  await reparent('infrared-mass-spectrometry',      o1u5.id, 2)
  await reparent('nmr-spectroscopy',                o1u5.id, 3)

  await reparent('conjugated-systems-dienes',          o2u1.id, 1)
  await reparent('aromatic-compounds-benzene',         o2u1.id, 2)
  await reparent('electrophilic-aromatic-substitution', o2u1.id, 3)

  await reparent('aldehydes-ketones-reactions',     o2u2.id, 1)
  await reparent('carboxylic-acids-derivatives',    o2u2.id, 2)

  await reparent('enolate-chemistry',               o2u3.id, 1)

  await reparent('amines-nitrogen-compounds',       o2u4.id, 1)

  await reparent('carbohydrates-biochemistry',      o2u5.id, 1)
  await reparent('amino-acids-proteins',            o2u5.id, 2)
  await reparent('lipids-nucleic-acids',            o2u5.id, 3)

  // ─── 4. Add NEW advanced OChem 2 topics for AP-equivalent rigor ───
  console.log('\nAdding new advanced OChem 2 topics for AP-grade rigor...')

  await prisma.topic.upsert({
    where: { slug: 'pericyclic-diels-alder' },
    update: { categoryId: o2u1.id, order: 4 },
    create: {
      slug: 'pericyclic-diels-alder',
      title: 'Pericyclic Reactions & the Diels-Alder',
      description: 'Frontier molecular orbital analysis, [4+2] cycloadditions, endo selectivity, electrocyclic reactions, and sigmatropic rearrangements',
      order: 4,
      categoryId: o2u1.id,
      isPremium: false,
      textContent:
        '# 🔄 Pericyclic Reactions & the Diels-Alder\n\n' +
        'Master concerted, single-step pericyclic reactions through a frontier-molecular-orbital (FMO) framework: HOMO–LUMO interactions, the Woodward–Hoffmann rules, and orbital symmetry control of stereochemistry.\n\n' +
        '**Diels-Alder [4+2] cycloaddition**\n' +
        '- Diene must adopt the s-cis conformation\n' +
        '- Electron-rich diene + electron-poor dienophile\n' +
        '- Suprafacial/suprafacial; concerted; stereospecific (syn addition on both partners)\n' +
        '- The endo rule (kinetic preference) and how secondary orbital interactions explain it\n' +
        '- Regiochemistry (ortho/para products from EDG/EWG patterns)\n\n' +
        '**Electrocyclic reactions** — 4π conrotatory (thermal) vs disrotatory (photochemical), 6π disrotatory (thermal) vs conrotatory (photochemical).\n\n' +
        '**Sigmatropic rearrangements** — Claisen [3,3] of allyl vinyl ethers and Cope [3,3] of 1,5-hexadienes; the chair-like transition state.',
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'nucleophilic-aromatic-substitution' },
    update: { categoryId: o2u1.id, order: 5 },
    create: {
      slug: 'nucleophilic-aromatic-substitution',
      title: 'Nucleophilic Aromatic Substitution',
      description: 'SNAr addition-elimination through the Meisenheimer complex, benzyne mechanism, and substituent effects',
      order: 5,
      categoryId: o2u1.id,
      isPremium: false,
      textContent:
        '# 🎯 Nucleophilic Aromatic Substitution (SNAr)\n\n' +
        'Aromatic rings can undergo nucleophilic substitution when (a) a strong electron-withdrawing group (NO₂, CN, C=O) is positioned ortho or para to the leaving group, or (b) very harsh conditions form a benzyne intermediate.\n\n' +
        '**Addition–Elimination (SNAr) mechanism**\n' +
        '1. Nucleophile attacks the ring carbon bearing the leaving group → Meisenheimer (σ-complex)\n' +
        '2. Resonance delocalizes negative charge onto the ortho/para EWGs\n' +
        '3. Leaving group departs, restoring aromaticity\n\n' +
        'Reactivity order of leaving groups in SNAr: F > Cl > Br > I (opposite of SN2; rate-determining step is nucleophilic addition, not C–LG cleavage).\n\n' +
        '**Benzyne (elimination-addition) mechanism** — strong base (NaNH₂) on aryl halides without activating EWGs. Goes through a strained benzyne intermediate; nucleophile can add to either sp carbon, giving substitution at both positions.',
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'phenols-quinones' },
    update: { categoryId: o2u1.id, order: 6 },
    create: {
      slug: 'phenols-quinones',
      title: 'Phenols & Quinones',
      description: 'Phenol acidity, oxidation to quinones, redox biology, antioxidants, and Kolbe-Schmitt synthesis',
      order: 6,
      categoryId: o2u1.id,
      isPremium: false,
      textContent:
        '# 🌿 Phenols & Quinones\n\n' +
        'Phenols (ArOH) bridge alcohols and aromatic chemistry. Phenoxide stabilization by resonance into the ring makes phenols ~10⁶× more acidic than alcohols (pKa ≈ 10).\n\n' +
        '**Substituent effects on phenol acidity** — EWGs at the ortho/para positions stabilize the conjugate base (picric acid pKa ≈ 0.4); EDGs raise the pKa.\n\n' +
        '**Reactions**\n' +
        '- Williamson ether synthesis with alkyl halides\n' +
        '- Kolbe-Schmitt carboxylation (phenol → salicylic acid → aspirin)\n' +
        '- Bromination (no FeBr₃ needed; tribromophenol forms)\n' +
        '- Oxidation to quinones (1,4-benzoquinone)\n\n' +
        '**Quinones in biology** — coenzyme Q, vitamin K, plastoquinone. Reversible 2e⁻/2H⁺ redox couple underlies the electron-transport chain.',
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'aldol-claisen-condensations' },
    update: { categoryId: o2u3.id, order: 2 },
    create: {
      slug: 'aldol-claisen-condensations',
      title: 'Aldol & Claisen Condensations',
      description: 'Crossed and intramolecular aldol reactions, Claisen and Dieckmann condensations, directed enolates with LDA',
      order: 2,
      categoryId: o2u3.id,
      isPremium: false,
      textContent:
        '# 🔗 Aldol & Claisen Condensations\n\n' +
        'Carbon–carbon bond formation between two carbonyl partners through the α-carbon enolate.\n\n' +
        '**Aldol reaction (β-hydroxy carbonyl)** vs. **aldol condensation (α,β-unsaturated carbonyl)** — heat or base drives E1cb dehydration after the aldol step.\n\n' +
        '**Crossed aldol strategies**\n' +
        '- Use a non-enolizable partner (benzaldehyde, formaldehyde, di-substituted ketone) as the electrophile.\n' +
        '- Pre-form the enolate with LDA at −78 °C to suppress equilibration (kinetic enolate of unsymmetrical ketones).\n' +
        '- Mukaiyama aldol — silyl enol ether + Lewis acid for full regiocontrol.\n\n' +
        '**Intramolecular aldol** — 5- and 6-membered rings dominate (entropic and ring-strain drivers).\n\n' +
        '**Claisen condensation** — two ester molecules combine to give a β-ketoester (Acetoacetic ester from ethyl acetate + NaOEt). Requires ≥ 2 α-Hs on the donor and an alkoxide base matched to the ester (no transesterification).\n\n' +
        '**Dieckmann condensation** — intramolecular Claisen of a 1,6- or 1,7-diester to give cyclic β-ketoesters.',
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'michael-robinson' },
    update: { categoryId: o2u3.id, order: 3 },
    create: {
      slug: 'michael-robinson',
      title: 'Michael Addition & Robinson Annulation',
      description: 'Conjugate (1,4) addition to α,β-unsaturated carbonyls, soft vs hard nucleophiles, and the Robinson annulation ring-forming sequence',
      order: 3,
      categoryId: o2u3.id,
      isPremium: false,
      textContent:
        '# 🔁 Michael Addition & Robinson Annulation\n\n' +
        '**1,2- vs 1,4-addition (HSAB)** — hard nucleophiles (RLi, RMgBr, LiAlH₄) attack the carbonyl carbon (1,2); soft, stabilized nucleophiles (enolates, malonate, RCu, thiols, amines) attack the β-carbon of an α,β-unsaturated carbonyl (1,4 / Michael).\n\n' +
        '**Michael donors** — β-ketoesters, malonate esters, β-diketones, nitroalkanes, enamines.\n\n' +
        '**Robinson annulation = Michael + intramolecular aldol condensation**\n' +
        '1. Michael of a 1,3-dicarbonyl onto methyl vinyl ketone (or another enone)\n' +
        '2. Base-mediated intramolecular aldol of the resulting 1,5-diketone\n' +
        '3. Dehydration → cyclohexenone (Wieland–Miescher ketone, steroid AB-ring synthon)\n\n' +
        'This sequence is the workhorse for building 6-membered carbocycles in steroid and terpenoid total synthesis.',
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'multistep-synthesis-retrosynthesis' },
    update: { categoryId: o2u6.id, order: 2 },
    create: {
      slug: 'multistep-synthesis-retrosynthesis',
      title: 'Multi-Step Synthesis & Retrosynthetic Analysis',
      description: 'Disconnection approach, synthons, functional group interconversions, protecting groups, and route planning',
      order: 2,
      categoryId: o2u6.id,
      isPremium: false,
      textContent:
        '# 🧠 Multi-Step Synthesis & Retrosynthetic Analysis\n\n' +
        'E. J. Corey\'s retrosynthetic logic: work backward from the target, applying disconnections to reveal simpler precursors and recognized synthons.\n\n' +
        '**Core moves**\n' +
        '- **Disconnection** — break a strategic bond; ⇒ arrow indicates "is made from".\n' +
        '- **Synthons** — idealized cation/anion fragments (acyl cation = RCO⁺, enolate = ⁻CH₂COR).\n' +
        '- **Synthetic equivalents** — real reagents that deliver a synthon (acyl chloride for RCO⁺, lithium enolate for the α-anion).\n' +
        '- **Functional Group Interconversion (FGI)** — rewrite a hard-to-disconnect FG into one that disconnects cleanly.\n\n' +
        '**Strategic bonds to target first**\n' +
        '1. Bonds α,β to a carbonyl (aldol/Michael disconnections)\n' +
        '2. Bonds to a ring (Diels-Alder, EAS, intramolecular aldol)\n' +
        '3. C–heteroatom bonds (SN2, reductive amination, Williamson)\n\n' +
        '**Protecting groups** — when to use and remove acetals (carbonyls), TMS/TBS ethers (alcohols), Boc/Cbz (amines), and the principle of orthogonal protection.\n\n' +
        '**Convergent vs linear synthesis** — convergent routes (separate fragments joined late) carry far higher overall yield than long linear sequences.',
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'advanced-2d-nmr' },
    update: { categoryId: o2u6.id, order: 1 },
    create: {
      slug: 'advanced-2d-nmr',
      title: 'Advanced & 2D NMR Spectroscopy',
      description: 'DEPT, COSY, HSQC, HMBC, NOESY, and integrated structure elucidation from combined IR/MS/NMR data',
      order: 1,
      categoryId: o2u6.id,
      isPremium: false,
      textContent:
        '# 🧲 Advanced & 2D NMR Spectroscopy\n\n' +
        'Move beyond 1D ¹H/¹³C: solve real natural-product structures by integrating 2D experiments.\n\n' +
        '**DEPT-135** — distinguishes CH₃ (up), CH (up), CH₂ (down), and quaternary C (absent) in ¹³C.\n\n' +
        '**COSY (¹H–¹H correlation)** — diagonal + cross-peaks identify J-coupled protons (³J most prominent). Walk along a spin system to map a chain.\n\n' +
        '**HSQC (¹H–¹³C, one-bond)** — each cross-peak ties a proton to its directly attached carbon. Resolves overlapping ¹H signals via the ¹³C dimension.\n\n' +
        '**HMBC (¹H–¹³C, multi-bond)** — 2- and 3-bond correlations across heteroatoms and quaternary carbons; the key tool for connecting fragments through carbonyls and across ring junctions.\n\n' +
        '**NOESY** — through-space (~5 Å) interactions; assigns relative stereochemistry and conformation.\n\n' +
        '**Workflow** — molecular formula from MS + degree of unsaturation → IR for functional groups → ¹H integration/multiplicity for fragments → COSY/HSQC to wire fragments → HMBC to bridge across heteroatoms → NOESY for stereochem.',
    },
  })

  // ─── 5. Clean up legacy categories and demote the legacy course ───
  console.log('\nCleaning up legacy `organic-chemistry` categories...')
  const legacySlugs = [
    'ochem-structure-bonding',
    'ochem-alkanes-stereochem',
    'ochem-substitution-elimination',
    'ochem-alkenes-alkynes',
    'ochem-alcohols-spectroscopy',
    'ochem-aromatic',
    'ochem-carbonyl',
    'ochem-amines-biochem',
  ]
  for (const slug of legacySlugs) {
    const cat = await prisma.category.findUnique({
      where: { slug },
      include: { _count: { select: { topics: true } } },
    })
    if (cat && cat._count.topics === 0) {
      await prisma.category.delete({ where: { id: cat.id } })
      console.log(`  ✓ Deleted empty legacy category: ${slug}`)
    } else if (cat) {
      console.log(`  ⚠ Skipping ${slug} — still has ${cat._count.topics} topic(s) attached`)
    }
  }

  // Demote the legacy course but keep the row so any code referencing the
  // 'organic-chemistry' slug (cached references, old links) doesn't 500.
  await prisma.course.update({
    where: { slug: 'organic-chemistry' },
    data: {
      name: 'Organic Chemistry (legacy — see OChem 1 & 2)',
      description: 'Replaced by Organic Chemistry 1 and Organic Chemistry 2. This entry is retained for backwards compatibility only.',
      order: 999,
    },
  }).catch(() => {
    console.log('  (Legacy `organic-chemistry` course not found — already removed)')
  })

  // ─── Done ───
  const [o1Cats, o1Topics, o2Cats, o2Topics] = await Promise.all([
    prisma.category.count({ where: { courseId: ochem1.id } }),
    prisma.topic.count({ where: { category: { courseId: ochem1.id } } }),
    prisma.category.count({ where: { courseId: ochem2.id } }),
    prisma.topic.count({ where: { category: { courseId: ochem2.id } } }),
  ])

  console.log('\n🎉 Organic Chemistry split complete!')
  console.log(`  📚 ${ochem1.name}: ${o1Cats} units, ${o1Topics} topics`)
  console.log(`  📚 ${ochem2.name}: ${o2Cats} units, ${o2Topics} topics`)
}

// ────────────────────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────────────────────

async function upsertCategory(
  slug: string,
  name: string,
  description: string,
  order: number,
  courseId: number,
) {
  const cat = await prisma.category.upsert({
    where: { slug },
    update: { name, description, order, courseId },
    create: { slug, name, description, order, courseId },
  })
  console.log(`  ✓ Category: ${name}`)
  return cat
}

async function reparent(topicSlug: string, categoryId: number, order: number) {
  const existing = await prisma.topic.findUnique({ where: { slug: topicSlug } })
  if (!existing) {
    console.log(`  ⚠ Topic ${topicSlug} not found — skipping reparent`)
    return
  }
  await prisma.topic.update({
    where: { slug: topicSlug },
    data: { categoryId, order },
  })
  console.log(`    → Reparented ${topicSlug}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
