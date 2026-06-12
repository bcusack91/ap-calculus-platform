import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding MCAT renal & respiratory flashcards...\n');

  const slug = 'mcat-organ-systems-renal-mcat';
  const topic = await prisma.topic.findFirst({ where: { slug } });
  if (!topic) { console.log(`⚠ Topic not found: ${slug}`); return; }
  await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic.id, front: 'What is the order of structures in the nephron?', back: '**Glomerulus (Bowman\'s capsule) → proximal convoluted tubule (PCT) → descending loop of Henle → ascending loop of Henle → distal convoluted tubule (DCT) → collecting duct**.\n\nFiltration at glomerulus; bulk reabsorption at PCT.', hint: 'Glomerulus → PCT → loop of Henle → DCT → collecting duct.' },
      { topicId: topic.id, front: 'Name the three basic processes of urine formation.', back: '**Filtration** (glomerulus → Bowman\'s, pressure-driven, nonspecific).\n**Reabsorption** (tubule → blood, recovers water/nutrients/ions).\n**Secretion** (blood → tubule, adds wastes/drugs/H⁺/K⁺).\n\nExcretion = filtration − reabsorption + secretion.', hint: 'Filter, reabsorb, secrete. Excretion = filtered − reabsorbed + secreted.' },
      { topicId: topic.id, front: 'What is reabsorbed in the proximal convoluted tubule (PCT)?', back: 'The **bulk** of reabsorption: ~65% of $\\text{Na}^+$ and water, plus essentially **all glucose and amino acids** (via secondary active transport), and bicarbonate.\n\nNormal urine has no glucose; glucose appears only when transporters are saturated (e.g., diabetes).', hint: 'PCT = workhorse: all glucose/amino acids + most Na⁺/water.' },
      { topicId: topic.id, front: 'How do the limbs of the loop of Henle differ in permeability?', back: '**Descending limb**: permeable to **water** (not solutes) → water leaves, filtrate concentrates.\n\n**Ascending limb**: permeable to **solutes (Na⁺/K⁺/Cl⁻ actively pumped out)**, impermeable to water → filtrate dilutes. Creates the medullary concentration gradient (countercurrent multiplier).', hint: 'Descending = water out; ascending = salt out. Builds the medullary gradient.' },
      { topicId: topic.id, front: 'What does ADH (vasopressin) do and where?', back: 'Released by the **posterior pituitary** when blood is concentrated (high osmolarity) or volume is low.\n\nIncreases water permeability of the **collecting duct** (inserts aquaporins) → more water reabsorbed → **concentrated urine**, conserving water.', hint: 'ADH = "Add water back." Aquaporins in collecting duct → concentrated urine.' },
      { topicId: topic.id, front: 'Describe the renin-angiotensin-aldosterone system (RAAS).', back: 'Low BP/volume → **renin** (from juxtaglomerular cells) → angiotensinogen → angiotensin I → (**ACE** in lungs) → **angiotensin II** (vasoconstrictor) → stimulates **aldosterone** (adrenal cortex).\n\nAldosterone acts on the DCT/collecting duct: **reabsorb Na⁺ (and water), secrete K⁺** → raises BP.', hint: 'RAAS raises BP: renin→AngII→aldosterone→reabsorb Na⁺/water.' },
      { topicId: topic.id, front: 'What does aldosterone do vs. ADH?', back: '**Aldosterone**: reabsorbs **Na⁺** (water follows) and secretes K⁺/H⁺ at the DCT/collecting duct → increases blood volume/pressure.\n\n**ADH**: reabsorbs **free water** (via aquaporins) at the collecting duct → concentrates urine.', hint: 'Aldosterone = salt (Na⁺); ADH = water. Both raise volume.' },
      { topicId: topic.id, front: 'What is glomerular filtration rate (GFR) and renal clearance?', back: '**GFR** = volume of plasma filtered per minute (~125 mL/min).\n\n**Clearance** $C = \\frac{U \\times V}{P}$ (U = urine conc, V = urine flow, P = plasma conc). **Inulin** clearance estimates GFR (freely filtered, not reabsorbed/secreted); **creatinine** is the clinical estimate.', hint: 'Inulin clearance = GFR. C = UV/P.' },
      { topicId: topic.id, front: 'How do the kidneys regulate blood pH?', back: 'They **reabsorb bicarbonate ($\\text{HCO}_3^-$)** and **secrete H⁺** into the urine.\n\nIn acidosis, kidneys excrete more H⁺ and reabsorb more $\\text{HCO}_3^-$. This is the **slow** (hours–days) arm of acid-base balance; the lungs (CO₂) handle the fast arm.', hint: 'Kidneys: reabsorb HCO₃⁻, secrete H⁺. Slow pH control; lungs are fast.' },
      { topicId: topic.id, front: 'What is the countercurrent multiplier system?', back: 'The loop of Henle and vasa recta set up and preserve a **hyperosmotic medullary gradient** (~300 → ~1200 mOsm).\n\nThe ascending limb pumps out salt; the descending limb loses water. This gradient lets the collecting duct (with ADH) concentrate urine. The **vasa recta** is the countercurrent exchanger that preserves it.', hint: 'Loop builds the medullary salt gradient; vasa recta preserves it.' },
      { topicId: topic.id, front: '(Respiratory) Where does gas exchange occur and what drives it?', back: 'Gas exchange occurs across the **alveoli** (thin, moist, huge surface area) into pulmonary capillaries.\n\nDriven by **partial pressure gradients** (simple diffusion): $\\text{O}_2$ diffuses from alveoli (high $P_{O_2}$) into blood; $\\text{CO}_2$ diffuses from blood into alveoli.', hint: 'Alveoli; diffusion down partial-pressure gradients. O₂ in, CO₂ out.' },
      { topicId: topic.id, front: '(Respiratory) What controls the rate of breathing?', back: 'The **medulla oblongata** (respiratory center) sets the rhythm.\n\nThe strongest drive is **rising CO₂ / falling pH** (central chemoreceptors detect CSF H⁺). Peripheral chemoreceptors (carotid/aortic bodies) respond mainly to very low $\\text{O}_2$.', hint: 'Medulla; CO₂/pH is the main drive, not O₂.' },
      { topicId: topic.id, front: '(Respiratory) Explain respiratory compensation for acid-base balance.', back: '$\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^-$\n\n**Acidosis** → hyperventilate to blow off CO₂ → raises pH.\n**Alkalosis** → hypoventilate to retain CO₂ → lowers pH.\n\nFast (minutes), unlike renal compensation.', hint: 'Acidic → breathe faster (blow off CO₂). Fast lung compensation.' },
      { topicId: topic.id, front: '(Respiratory) What is the role of surfactant?', back: 'Surfactant (secreted by **type II alveolar cells**) **reduces surface tension** in alveoli.\n\nThis prevents alveolar collapse (atelectasis) and eases inflation. Deficiency in premature infants causes **neonatal respiratory distress syndrome**.', hint: 'Surfactant lowers surface tension → keeps alveoli open. Made by type II cells.' },
    ],
  });

  console.log('✅ Created 14 MCAT renal & respiratory flashcards');
  console.log('\n✅ All MCAT renal & respiratory flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
