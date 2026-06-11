import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding MCAT amino acid flashcards...\n');

  const slug = 'mcat-biochemistry-amino-acids-proteins-mcat';
  const topic = await prisma.topic.findFirst({ where: { slug } });
  if (!topic) { console.log(`⚠ Topic not found: ${slug}`); return; }
  await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic.id, front: 'What are the 4 nonpolar aliphatic amino acids you must know?', back: '**Glycine (G)** — smallest, no chirality\n**Alanine (A)** — simple methyl group\n**Valine (V)** — branched chain\n**Leucine (L)** — branched chain\n**Isoleucine (I)** — branched chain\n\nAll are **hydrophobic** and found in protein interiors.', hint: 'GAVLI — think "Gavel I"' },
      { topicId: topic.id, front: 'Which amino acids are positively charged (basic) at pH 7?', back: '**Lysine (K)** — pKa ~10.5\n**Arginine (R)** — pKa ~12.5\n**Histidine (H)** — pKa ~6.0 (partially charged at pH 7)\n\nAll have nitrogen-containing side chains.', hint: 'KRH — "Kinda Really Happy" (positive)' },
      { topicId: topic.id, front: 'Which amino acids are negatively charged (acidic) at pH 7?', back: '**Aspartate (D)** — pKa ~3.7\n**Glutamate (E)** — pKa ~4.1\n\nBoth have carboxyl groups in side chains.', hint: 'DE — "Darn Electrons" (negative)' },
      { topicId: topic.id, front: 'Which amino acid contains a thiol (-SH) group and can form disulfide bonds?', back: '**Cysteine (C)**\n\nTwo cysteines can be oxidized to form a **disulfide bond** (–S–S–), important for stabilizing protein tertiary/quaternary structure.', hint: 'C for Cysteine, C-S-S-C for disulfide.' },
      { topicId: topic.id, front: 'Which amino acid is an imino acid with a cyclic side chain?', back: '**Proline (P)**\n\nIts side chain bonds to both the alpha-carbon and the amino group, creating a ring. This introduces **rigid kinks** in proteins and is common in collagen.', hint: 'Proline = ring = structural disruption.' },
      { topicId: topic.id, front: 'What is the isoelectric point (pI)?', back: 'The pH at which an amino acid has **zero net charge**.\n\nFor neutral amino acids: $pI = \\frac{pK_{a1} + pK_{a2}}{2}$\nFor basic: average the two highest pKa values.\nFor acidic: average the two lowest pKa values.', hint: 'The pH where the molecule won\'t migrate in an electric field.' },
      { topicId: topic.id, front: 'What are the 4 levels of protein structure?', back: '1. **Primary**: Sequence of amino acids\n2. **Secondary**: Local folding (α-helix, β-sheet) via H-bonds\n3. **Tertiary**: 3D shape of single polypeptide (hydrophobic, ionic, disulfide)\n4. **Quaternary**: Multiple polypeptide subunits together', hint: '1° = sequence, 2° = H-bonds, 3° = folding, 4° = subunits.' },
      { topicId: topic.id, front: 'Which amino acids are aromatic?', back: '**Phenylalanine (F)** — benzene ring, nonpolar\n**Tyrosine (Y)** — hydroxylated benzene, polar\n**Tryptophan (W)** — indole ring, largest, absorbs UV at 280 nm', hint: 'FYW — all have ring structures.' },
      { topicId: topic.id, front: 'What is the peptide bond?', back: 'A covalent bond between the carboxyl group of one amino acid and the amino group of another, releasing $\\text{H}_2\\text{O}$ (dehydration synthesis).\n\n**Planar and rigid** due to partial double-bond character. **Trans** configuration is favored.', hint: 'C–N bond with restricted rotation.' },
      { topicId: topic.id, front: 'How do you identify amino acids by one-letter code? (mnemonic for tricky ones)', back: '**D** = aspartate (D for aspartic aciD)\n**E** = glutamate (glutamatE)\n**K** = lysine (lysinK? — just memorize)\n**W** = tryptophan (tWo rings)\n**F** = phenylalanine (Fenylalanine)\n**Y** = tyrosine (tYrosine)', hint: 'Some one-letter codes are non-obvious — memorize the exceptions.' },
    ],
  });

  console.log('✅ Created 10 MCAT amino acid flashcards');
  console.log('\n✅ All MCAT amino acid flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
