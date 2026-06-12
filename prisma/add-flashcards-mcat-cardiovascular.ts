import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding MCAT cardiovascular flashcards...\n');

  const slug = 'mcat-organ-systems-cardiovascular-mcat';
  const topic = await prisma.topic.findFirst({ where: { slug } });
  if (!topic) { console.log(`⚠ Topic not found: ${slug}`); return; }
  await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic.id, front: 'Trace the path of blood through the heart and circulation.', back: 'Body → vena cavae → **RA → tricuspid → RV → pulmonary valve → pulmonary artery → lungs** (oxygenated) → pulmonary veins → **LA → mitral (bicuspid) → LV → aortic valve → aorta** → body.\n\nRight side = deoxygenated; left side = oxygenated.', hint: 'RA→RV→lungs→LA→LV→body. Right is deoxygenated.' },
      { topicId: topic.id, front: 'What is the cardiac conduction pathway?', back: '**SA node** (pacemaker, ~60–100 bpm) → **AV node** (delays signal) → **Bundle of His** → **bundle branches** → **Purkinje fibers** (ventricular contraction).\n\nThe AV delay lets ventricles fill before contracting.', hint: 'SA → AV → His → bundle branches → Purkinje. SA sets the pace.' },
      { topicId: topic.id, front: 'What does each ECG wave represent?', back: '**P wave** = atrial depolarization.\n**QRS complex** = ventricular depolarization (atrial repolarization is hidden here).\n**T wave** = ventricular repolarization.\n\nThe PR interval reflects the AV nodal delay.', hint: 'P = atria depolarize; QRS = ventricles depolarize; T = ventricles repolarize.' },
      { topicId: topic.id, front: 'Define systole and diastole and the "lub-dub" heart sounds.', back: '**Systole** = ventricular contraction (ejection). **Diastole** = ventricular relaxation (filling).\n\n**S1 ("lub")** = closure of AV valves (mitral/tricuspid) at start of systole.\n**S2 ("dub")** = closure of semilunar valves (aortic/pulmonary) at start of diastole.', hint: 'Lub (S1) = AV valves close = systole; dub (S2) = semilunar close = diastole.' },
      { topicId: topic.id, front: 'What is cardiac output and its equation?', back: '$CO = HR \\times SV$\n\nCardiac output (L/min) = heart rate (bpm) × stroke volume (mL/beat). Typical resting CO ≈ 5 L/min.\n\n**Stroke volume** = end-diastolic volume − end-systolic volume (EDV − ESV).', hint: 'CO = HR × SV. SV = EDV − ESV.' },
      { topicId: topic.id, front: 'State the Frank-Starling mechanism.', back: 'Increased **venous return** → increased **end-diastolic volume** (preload) → greater ventricular stretch → **stronger contraction** and larger stroke volume.\n\n"The heart pumps out what it receives." More filling = more forceful ejection (up to a limit).', hint: 'More filling (preload) = more forceful contraction = bigger SV.' },
      { topicId: topic.id, front: 'Define preload and afterload.', back: '**Preload** = ventricular wall tension/stretch at end of diastole (related to EDV / venous return).\n\n**Afterload** = the resistance/pressure the ventricle must overcome to eject blood (related to aortic/arterial pressure, i.e., TPR).', hint: 'Preload = filling stretch (before); afterload = pressure to eject against (after).' },
      { topicId: topic.id, front: 'How do pressures compare across the systemic circulation?', back: 'Pressure is **highest in the aorta/arteries** and falls progressively: arteries > arterioles (biggest pressure drop, main resistance) > capillaries > venules > veins (lowest).\n\nArterioles are the main site of **resistance** and blood pressure regulation.', hint: 'Aorta highest, veins lowest. Arterioles = main resistance/pressure drop.' },
      { topicId: topic.id, front: 'Where is blood flow slowest and why is that functionally important?', back: '**Capillaries** have the slowest flow because they have the **largest total cross-sectional area**.\n\nSlow flow maximizes time for **gas, nutrient, and waste exchange** across the thin (single-cell) capillary walls.', hint: 'Capillaries: largest total area → slowest flow → best for exchange.' },
      { topicId: topic.id, front: 'How does the autonomic nervous system regulate heart rate?', back: '**Sympathetic** (norepinephrine, beta-1 receptors): **increases** HR and contractility ("fight or flight").\n\n**Parasympathetic** (vagus nerve, acetylcholine, muscarinic): **decreases** HR ("rest and digest"). At rest, vagal (parasympathetic) tone dominates.', hint: 'Sympathetic speeds up (β1); vagus/parasympathetic slows down.' },
      { topicId: topic.id, front: 'What governs capillary fluid exchange (Starling forces)?', back: 'Balance of **hydrostatic pressure** (pushes fluid out) and **oncotic/colloid osmotic pressure** (pulls fluid in, due to plasma proteins like albumin).\n\nArteriolar end: hydrostatic wins → filtration out. Venular end: oncotic wins → reabsorption in. Excess fluid drains via the **lymphatic system**.', hint: 'Hydrostatic pushes out, oncotic (albumin) pulls in; lymph collects leftovers.' },
      { topicId: topic.id, front: 'How is oxygen transported in blood, and what shifts the hemoglobin curve right?', back: 'Most $\\text{O}_2$ binds **hemoglobin** (sigmoidal curve, cooperative); little is dissolved.\n\n**Right shift** (lower affinity, unloads $\\text{O}_2$ to tissues): ↑$\\text{CO}_2$, ↑H⁺ (low pH, **Bohr effect**), ↑temperature, ↑2,3-BPG.', hint: 'Right shift = unload O₂: hot, acidic, high CO₂, high BPG (active tissue).' },
      { topicId: topic.id, front: 'How is most CO₂ transported in the blood?', back: 'Most (~70%) travels as **bicarbonate ($\\text{HCO}_3^-$)**, formed by **carbonic anhydrase** in RBCs:\n$\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^-$\n\nThe rest is bound to hemoglobin (carbaminohemoglobin) or dissolved.', hint: 'CO₂ mostly travels as bicarbonate (carbonic anhydrase).' },
      { topicId: topic.id, front: 'What is unique about the cardiac action potential (plateau phase)?', back: 'Cardiac myocytes have a prolonged **plateau phase** due to slow $\\text{Ca}^{2+}$ influx (L-type channels) balancing K⁺ efflux.\n\nThis lengthens the **refractory period**, preventing tetanus (sustained contraction) so the heart can refill. Pacemaker cells show automaticity (funny Na⁺ current).', hint: 'Ca²⁺ plateau lengthens refractory period → no tetanus, allows refilling.' },
    ],
  });

  console.log('✅ Created 14 MCAT cardiovascular flashcards');
  console.log('\n✅ All MCAT cardiovascular flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
