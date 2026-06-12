import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding MCAT cell biology flashcards...\n');

  const slug = 'mcat-cell-biology-organelles-mcat';
  const topic = await prisma.topic.findFirst({ where: { slug } });
  if (!topic) { console.log(`⚠ Topic not found: ${slug}`); return; }
  await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic.id, front: 'What is the function of the mitochondrion and why is it unusual?', back: 'Site of **oxidative phosphorylation / ATP production** (the "powerhouse").\n\nHas its **own circular DNA**, double membrane, and ribosomes — supporting the **endosymbiotic theory**. Inherited **maternally**. The inner membrane (cristae) houses the ETC.', hint: 'ATP factory; own DNA, double membrane, maternally inherited.' },
      { topicId: topic.id, front: 'Distinguish rough vs. smooth endoplasmic reticulum.', back: '**Rough ER** (ribosome-studded): synthesizes/folds **secretory and membrane proteins**.\n\n**Smooth ER**: **lipid/steroid synthesis**, **detoxification** (liver), and $\\text{Ca}^{2+}$ storage (sarcoplasmic reticulum in muscle).', hint: 'Rough = proteins (ribosomes); Smooth = lipids + detox + Ca²⁺.' },
      { topicId: topic.id, front: 'What does the Golgi apparatus do?', back: 'Modifies, sorts, packages, and ships proteins/lipids from the ER.\n\nAdds carbohydrate tags (**glycosylation**) and directs molecules to their destinations via vesicles. **Cis face** receives from ER; **trans face** ships out.', hint: 'Golgi = post office: modify, package, ship. Cis in, trans out.' },
      { topicId: topic.id, front: 'Compare lysosomes and peroxisomes.', back: '**Lysosome**: acidic (pH ~5) hydrolytic enzymes for **digestion** of macromolecules, autophagy, apoptosis.\n\n**Peroxisome**: **beta-oxidation of very-long-chain fatty acids** and breakdown of $\\text{H}_2\\text{O}_2$ (via catalase) and other reactive species.', hint: 'Lysosome = acidic digestion; peroxisome = fatty acids + H₂O₂ (catalase).' },
      { topicId: topic.id, front: 'Compare simple diffusion, facilitated diffusion, and active transport.', back: '**Simple diffusion**: small/nonpolar molecules cross directly, down gradient, no protein, no ATP.\n**Facilitated diffusion**: via channel/carrier proteins, **down** gradient, no ATP.\n**Active transport**: via pumps, **against** gradient, requires energy (ATP = primary; ion gradient = secondary).', hint: 'Down gradient = passive (no ATP); against gradient = active (needs energy).' },
      { topicId: topic.id, front: 'How does the Na⁺/K⁺-ATPase pump work?', back: 'Primary active transport pump: exports **3 Na⁺ out**, imports **2 K⁺ in**, per ATP hydrolyzed.\n\nMaintains the resting membrane potential and the Na⁺ gradient that powers secondary active transport. It is **electrogenic** (net + charge out).', hint: '3 Na⁺ out, 2 K⁺ in, per ATP. Drives the membrane potential.' },
      { topicId: topic.id, front: 'Define tonicity: hypertonic, hypotonic, isotonic.', back: 'Describes solute concentration relative to the cell:\n\n- **Hypertonic** solution → water leaves → cell **shrinks (crenates)**\n- **Hypotonic** solution → water enters → cell **swells/lyses**\n- **Isotonic** → no net water movement\n\nWater moves toward higher solute (osmosis).', hint: 'Hyper = shrink; hypo = swell/burst; iso = no change.' },
      { topicId: topic.id, front: 'What are the phases of the cell cycle?', back: '**Interphase** = G₁ (growth) → S (DNA replication) → G₂ (growth, prep).\n**M phase** = mitosis (PMAT) + cytokinesis.\n\nNon-dividing cells exit to **G₀**. DNA is copied only once, in S phase.', hint: 'G₁ → S → G₂ → M. DNA copied in S. Quiescent cells = G₀.' },
      { topicId: topic.id, front: 'What happens at the G₁/S (restriction) checkpoint?', back: 'Cell verifies adequate **size, nutrients, growth signals, and DNA integrity** before committing to replication.\n\nKey regulators: **p53** (halts cycle / triggers repair or apoptosis if DNA is damaged) and the Rb protein. This is the main "point of no return."', hint: 'G₁/S = restriction point; p53 guards DNA before committing to S.' },
      { topicId: topic.id, front: 'What is checked at the G₂/M and spindle (M) checkpoints?', back: '**G₂/M checkpoint**: ensures DNA fully replicated and undamaged before mitosis.\n\n**Spindle (metaphase) checkpoint**: ensures all chromosomes are properly attached to the spindle (kinetochores) before anaphase, preventing nondisjunction.', hint: 'G₂/M = DNA done & intact; spindle checkpoint = chromosomes attached before anaphase.' },
      { topicId: topic.id, front: 'How do cyclins and CDKs drive the cell cycle?', back: '**Cyclin-dependent kinases (CDKs)** are active only when bound to a **cyclin**.\n\nCyclin levels rise and fall across the cycle, activating CDKs at the right phase to phosphorylate targets and push the cell forward. Cyclin-CDK complexes control the checkpoints.', hint: 'CDK needs a cyclin partner; cyclin levels oscillate to time each phase.' },
      { topicId: topic.id, front: 'What is the role of the cytoskeleton components?', back: '**Microfilaments (actin)**: cell shape, movement, cytokinesis cleavage furrow.\n**Intermediate filaments**: tensile strength, structural support.\n**Microtubules (tubulin)**: tracks for motor proteins, mitotic spindle, cilia/flagella (9+2), made of alpha/beta-tubulin.', hint: 'Actin = movement; intermediate = strength; microtubules = spindle/transport.' },
      { topicId: topic.id, front: 'Distinguish endocytosis from exocytosis.', back: '**Endocytosis** = cell takes material IN via vesicles: phagocytosis (solids), pinocytosis (fluids), receptor-mediated (specific, e.g., LDL).\n\n**Exocytosis** = vesicle fuses with membrane to release contents OUT (e.g., neurotransmitters, secreted proteins).', hint: 'Endo = into the cell; exo = exits the cell.' },
      { topicId: topic.id, front: 'What distinguishes prokaryotic from eukaryotic cells?', back: '**Prokaryotes**: no membrane-bound nucleus or organelles, circular DNA in nucleoid, 70S ribosomes, often a cell wall (peptidoglycan in bacteria).\n\n**Eukaryotes**: true nucleus, membrane-bound organelles, linear chromosomes, 80S ribosomes.', hint: 'Pro = no nucleus, 70S ribosomes; Eu = true nucleus, 80S ribosomes.' },
    ],
  });

  console.log('✅ Created 14 MCAT cell biology flashcards');
  console.log('\n✅ All MCAT cell biology flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
