import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding MCAT carbohydrate metabolism flashcards...\n');

  const slug = 'mcat-biochemistry-carbohydrate-metabolism-mcat';
  const topic = await prisma.topic.findFirst({ where: { slug } });
  if (!topic) { console.log(`⚠ Topic not found: ${slug}`); return; }
  await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic.id, front: 'What are the net products of glycolysis (per glucose)?', back: 'Glucose → **2 pyruvate** + **2 ATP (net)** + **2 NADH**.\n\n(4 ATP made − 2 ATP invested = 2 net.) Occurs in the **cytoplasm**, anaerobic, in essentially all cells.', hint: 'Glycolysis nets 2 ATP, 2 NADH, 2 pyruvate. Cytoplasm.' },
      { topicId: topic.id, front: 'What is the rate-limiting (committed) enzyme of glycolysis and how is it regulated?', back: '**Phosphofructokinase-1 (PFK-1)**.\n\n- **Inhibited** by ATP and citrate (energy abundant)\n- **Activated** by AMP and fructose-2,6-bisphosphate (energy needed)\n\nThis is the key control point of glycolysis.', hint: 'PFK-1 is the committed step. ATP/citrate inhibit; AMP/F2,6BP activate.' },
      { topicId: topic.id, front: 'What does pyruvate dehydrogenase do, and what does it produce?', back: 'Links glycolysis to the TCA cycle: **pyruvate → acetyl-CoA** in the **mitochondrial matrix**.\n\nPer pyruvate: releases **1 $\\text{CO}_2$** and makes **1 NADH**. Irreversible; inhibited by acetyl-CoA and NADH.', hint: 'PDH: pyruvate → acetyl-CoA + CO₂ + NADH. Irreversible, in matrix.' },
      { topicId: topic.id, front: 'What are the products of ONE turn of the TCA (Krebs) cycle?', back: 'Per acetyl-CoA: **3 NADH, 1 FADH₂, 1 GTP (≈ATP), 2 $\\text{CO}_2$**.\n\nPer glucose (2 acetyl-CoA): double it → 6 NADH, 2 FADH₂, 2 GTP, 4 CO₂. Occurs in the mitochondrial matrix.', hint: 'Per acetyl-CoA: 3 NADH, 1 FADH₂, 1 GTP, 2 CO₂.' },
      { topicId: topic.id, front: 'How many ATP per NADH and FADH₂ in oxidative phosphorylation?', back: '**NADH ≈ 2.5 ATP**; **FADH₂ ≈ 1.5 ATP** (older texts use 3 and 2).\n\nFADH₂ yields less because it enters the electron transport chain at **Complex II**, bypassing Complex I and pumping fewer protons.', hint: 'NADH ~2.5, FADH₂ ~1.5. FADH₂ enters later (Complex II).' },
      { topicId: topic.id, front: 'What is the total ATP yield from complete aerobic oxidation of one glucose?', back: '**~30–32 ATP** (modern estimate; ~36–38 in older texts).\n\nBreakdown: glycolysis (2 ATP + 2 NADH), PDH (2 NADH), TCA (2 GTP + 6 NADH + 2 FADH₂), all NADH/FADH₂ feeding the ETC.', hint: '~30–32 ATP total per glucose (aerobic).' },
      { topicId: topic.id, front: 'Where does the electron transport chain occur and what is the final electron acceptor?', back: 'On the **inner mitochondrial membrane**.\n\nElectrons pass through Complexes I–IV; the **final electron acceptor is $\\text{O}_2$**, reduced to water. Proton pumping builds a gradient used by **ATP synthase** (chemiosmosis, Complex V).', hint: 'Inner mito membrane; O₂ is the final acceptor → water.' },
      { topicId: topic.id, front: 'What happens to pyruvate under anaerobic conditions (fermentation)?', back: 'In humans: pyruvate + NADH → **lactate** (lactate dehydrogenase), regenerating **NAD⁺** so glycolysis can continue.\n\nIn yeast: pyruvate → ethanol + $\\text{CO}_2$. The point is to **regenerate NAD⁺**, not to make ATP.', hint: 'Fermentation regenerates NAD⁺. Humans → lactate; yeast → ethanol.' },
      { topicId: topic.id, front: 'What is gluconeogenesis and which tissues perform it?', back: 'Synthesis of **glucose from non-carbohydrate precursors** (lactate, glycerol, glucogenic amino acids).\n\nOccurs mainly in the **liver** (and kidney). It is NOT simply reverse glycolysis — it bypasses the 3 irreversible steps with unique enzymes (e.g., PEP carboxykinase, fructose-1,6-bisphosphatase, glucose-6-phosphatase).', hint: 'Liver makes glucose from lactate/glycerol/amino acids; bypasses 3 irreversible steps.' },
      { topicId: topic.id, front: 'Contrast glycogenesis and glycogenolysis and their hormonal control.', back: '**Glycogenesis** = building glycogen (glycogen synthase); stimulated by **insulin** (fed state).\n**Glycogenolysis** = breaking down glycogen (glycogen phosphorylase); stimulated by **glucagon/epinephrine** (fasting).', hint: 'Insulin stores (synthesis); glucagon/epinephrine breaks down.' },
      { topicId: topic.id, front: 'What is the purpose of the pentose phosphate pathway (HMP shunt)?', back: 'Produces **NADPH** (for reductive biosynthesis and antioxidant defense, e.g., regenerating glutathione) and **ribose-5-phosphate** (for nucleotide synthesis).\n\nOccurs in the cytoplasm; does NOT make ATP. Rate-limiting enzyme: glucose-6-phosphate dehydrogenase (G6PD).', hint: 'PPP makes NADPH + ribose-5-P, not ATP. G6PD is rate-limiting.' },
      { topicId: topic.id, front: 'How do insulin and glucagon oppositely regulate blood glucose?', back: '**Insulin** (from beta cells, high glucose): lowers blood glucose — promotes uptake (GLUT4), glycogenesis, lipogenesis.\n\n**Glucagon** (from alpha cells, low glucose): raises blood glucose — promotes glycogenolysis and gluconeogenesis.', hint: 'Insulin lowers glucose (stores it); glucagon raises it (releases it).' },
      { topicId: topic.id, front: 'How is the malate-aspartate vs glycerol-phosphate shuttle relevant?', back: 'Cytoplasmic NADH can\'t cross the inner mitochondrial membrane directly, so shuttles transfer its electrons.\n\n**Malate-aspartate shuttle** (liver/heart): delivers as NADH (~2.5 ATP).\n**Glycerol-3-phosphate shuttle** (muscle/brain): delivers as FADH₂ (~1.5 ATP), lowering net yield.', hint: 'Shuttles move cytosolic NADH electrons in; glycerol-P shuttle costs ATP (→FADH₂).' },
      { topicId: topic.id, front: 'Which TCA intermediates and enzymes are key regulatory/exam points?', back: '**Citrate synthase, isocitrate dehydrogenase (rate-limiting), and alpha-ketoglutarate dehydrogenase** are the regulated steps.\n\nInhibited by ATP, NADH; activated by ADP, $\\text{Ca}^{2+}$. Isocitrate dehydrogenase and alpha-KG dehydrogenase release the $\\text{CO}_2$.', hint: 'Isocitrate dehydrogenase is the TCA rate-limiter; ATP/NADH inhibit.' },
    ],
  });

  console.log('✅ Created 14 MCAT carbohydrate metabolism flashcards');
  console.log('\n✅ All MCAT carbohydrate metabolism flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
