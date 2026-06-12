import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding MCAT genetics flashcards...\n');

  const slug = 'mcat-genetics-evolution-mendelian-mcat';
  const topic = await prisma.topic.findFirst({ where: { slug } });
  if (!topic) { console.log(`⚠ Topic not found: ${slug}`); return; }
  await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic.id, front: 'State Mendel\'s law of segregation and law of independent assortment.', back: '**Segregation**: the two alleles of a gene separate during gamete formation (each gamete gets one).\n\n**Independent assortment**: alleles of different genes sort independently (true for genes on different chromosomes / far apart).', hint: 'Segregation = alleles split into gametes; independent assortment = genes sort separately.' },
      { topicId: topic.id, front: 'What is the expected phenotypic ratio of a monohybrid and a dihybrid cross (heterozygous parents)?', back: '**Monohybrid** (Aa × Aa): **3:1** phenotypic ratio (1:2:1 genotypic).\n\n**Dihybrid** (AaBb × AaBb): **9:3:3:1** phenotypic ratio.', hint: 'Monohybrid 3:1; dihybrid 9:3:3:1.' },
      { topicId: topic.id, front: 'How is autosomal recessive inheritance recognized in a pedigree?', back: 'Trait can **skip generations**; affected children can have unaffected (carrier) parents.\n\nAffects males and females **equally**. Two carriers (Aa × Aa) → 25% affected. Examples: cystic fibrosis, sickle cell, Tay-Sachs.', hint: 'Skips generations; carriers are unaffected; sexes equal.' },
      { topicId: topic.id, front: 'How is X-linked recessive inheritance recognized?', back: 'Affects **males much more than females** (males are hemizygous — one X).\n\n**No male-to-male transmission** (fathers pass Y to sons). Carrier mothers pass to ~50% of sons. Examples: hemophilia, red-green color blindness, Duchenne muscular dystrophy.', hint: 'Mostly males, no father-to-son transmission. Color blindness/hemophilia.' },
      { topicId: topic.id, front: 'Distinguish complete dominance, incomplete dominance, and codominance.', back: '**Complete dominance**: heterozygote shows the dominant phenotype.\n**Incomplete dominance**: heterozygote is a **blend** (red × white → pink).\n**Codominance**: both alleles fully expressed simultaneously (AB blood type; both A and B antigens).', hint: 'Incomplete = blend (pink); codominant = both shown (AB blood).' },
      { topicId: topic.id, front: 'State the Hardy-Weinberg equations and conditions.', back: '$p + q = 1$ and $p^2 + 2pq + q^2 = 1$\n\n- $p^2$ = homozygous dominant, $2pq$ = heterozygous, $q^2$ = homozygous recessive.\n\nAssumes: no mutation, no migration, no selection, random mating, large population (no genetic drift).', hint: 'p² + 2pq + q² = 1. 2pq = carriers. Equilibrium needs 5 conditions met.' },
      { topicId: topic.id, front: 'If 1 in 10,000 people has an autosomal recessive disease, what is the carrier frequency?', back: '$q^2 = \\frac{1}{10000}$ → $q = 0.01$, so $p = 0.99$.\n\nCarrier frequency $= 2pq = 2(0.99)(0.01) \\approx 0.0198 \\approx$ **~2% (about 1 in 50)**.', hint: 'Take sqrt of disease freq for q, then 2pq for carriers.' },
      { topicId: topic.id, front: 'Distinguish point mutations: silent, missense, nonsense.', back: '**Silent**: codon change, **same** amino acid (no effect, due to degeneracy).\n**Missense**: codon change → **different** amino acid.\n**Nonsense**: codon change → **premature stop codon** (truncated protein).', hint: 'Silent = same AA; missense = different AA; nonsense = stop codon.' },
      { topicId: topic.id, front: 'What is a frameshift mutation and why is it often severe?', back: 'An **insertion or deletion** of nucleotides **not** a multiple of 3, shifting the **reading frame**.\n\nAll downstream codons change, usually producing a nonfunctional protein and often a premature stop. Generally more damaging than a point substitution.', hint: 'Indel not divisible by 3 shifts the frame; everything downstream is garbled.' },
      { topicId: topic.id, front: 'What is genetic linkage and how does recombination frequency relate to distance?', back: 'Genes **physically close** on the same chromosome are **linked** — inherited together, violating independent assortment.\n\nThe farther apart, the more **crossing over** between them. **1 map unit (centimorgan) = 1% recombination frequency** (max ~50% = unlinked).', hint: 'Closer genes = less recombination. 1% recombination = 1 cM.' },
      { topicId: topic.id, front: 'Distinguish nondisjunction, aneuploidy, and give an example.', back: '**Nondisjunction**: failure of chromosomes to separate in meiosis → gametes with wrong chromosome number.\n\n**Aneuploidy**: abnormal chromosome count (e.g., trisomy 21 = Down syndrome, monosomy X = Turner syndrome, XXY = Klinefelter).', hint: 'Nondisjunction (failed separation) causes aneuploidy like trisomy 21.' },
      { topicId: topic.id, front: 'Distinguish the sources of genetic variation in meiosis.', back: '**Crossing over (recombination)** in prophase I — exchanges segments between homologs.\n**Independent assortment** of homologs in metaphase I ($2^{23}$ combinations in humans).\n**Random fertilization** combines two unique gametes.', hint: 'Crossing over + independent assortment + random fertilization.' },
      { topicId: topic.id, front: 'What is pleiotropy vs. polygenic inheritance vs. epistasis?', back: '**Pleiotropy**: one gene affects **multiple** traits (e.g., sickle cell).\n**Polygenic**: one trait from **many** genes (e.g., height, skin color — continuous variation).\n**Epistasis**: one gene **masks/modifies** the expression of another gene.', hint: 'Pleiotropy = 1 gene→many traits; polygenic = many genes→1 trait; epistasis = gene masks gene.' },
      { topicId: topic.id, front: 'What is a test cross and what is its purpose?', back: 'Crossing an individual of **unknown genotype** (dominant phenotype) with a **homozygous recessive** (aa).\n\nIf any recessive offspring appear, the unknown parent was heterozygous (Aa); if all offspring show the dominant phenotype, it was homozygous (AA).', hint: 'Cross with aa to reveal whether the dominant parent is AA or Aa.' },
    ],
  });

  console.log('✅ Created 14 MCAT genetics flashcards');
  console.log('\n✅ All MCAT genetics flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
