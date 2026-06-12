import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding MCAT endocrine & hormones flashcards...\n');

  // Requested slug 'mcat-organ-systems-endocrine-mcat' does not exist;
  // closest real slug in /tmp/topic-slugs.txt is the combined endocrine-nervous topic.
  const slug = 'mcat-organ-systems-endocrine-nervous-mcat';
  const topic = await prisma.topic.findFirst({ where: { slug } });
  if (!topic) { console.log(`⚠ Topic not found: ${slug}`); return; }
  await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic.id, front: 'Contrast peptide and steroid hormones (mechanism of action).', back: '**Peptide hormones** (e.g., insulin): hydrophilic, bind **cell-surface receptors**, act via **second messengers** (cAMP) — fast, short-lived.\n\n**Steroid hormones** (e.g., cortisol, sex hormones): lipophilic, cross the membrane, bind **intracellular/nuclear receptors**, alter **gene transcription** — slow, long-lasting.', hint: 'Peptide = surface receptor + 2nd messenger (fast); steroid = nuclear receptor + transcription (slow).' },
      { topicId: topic.id, front: 'What do insulin and glucagon do (source/target/action)?', back: '**Insulin** (pancreatic **beta** cells): lowers blood glucose — promotes uptake (GLUT4), glycogenesis, fat storage. Released when glucose is high.\n\n**Glucagon** (pancreatic **alpha** cells): raises blood glucose — glycogenolysis, gluconeogenesis. Released when glucose is low.', hint: 'Insulin (beta) lowers glucose; glucagon (alpha) raises it.' },
      { topicId: topic.id, front: 'What are the anterior pituitary hormones?', back: '**FLAT PEG**: **FSH, LH, ACTH, TSH, Prolactin, Endorphins, GH.**\n\nThe anterior pituitary makes/releases these tropic hormones in response to hypothalamic releasing factors (e.g., GnRH, CRH, TRH).', hint: 'FLAT PEG = anterior pituitary hormones.' },
      { topicId: topic.id, front: 'What does the posterior pituitary release?', back: '**ADH (vasopressin)** and **oxytocin** — but it does **not** make them; they are synthesized in the **hypothalamus** and stored/released here.\n\nADH → water reabsorption; oxytocin → uterine contraction & milk let-down.', hint: 'Posterior pituitary stores (not makes) ADH + oxytocin from hypothalamus.' },
      { topicId: topic.id, front: 'What are the thyroid hormones and their effects?', back: '**T3 and T4** (thyroxine): raise **basal metabolic rate**, heat production, and growth/development (require iodine).\n\n**Calcitonin** (from thyroid C cells): **lowers blood calcium** (tones it down) by inhibiting osteoclasts. Controlled by TSH (anterior pituitary).', hint: 'T3/T4 = metabolic rate up; calcitonin lowers Ca²⁺ ("tones" it down).' },
      { topicId: topic.id, front: 'How is blood calcium regulated (PTH vs. calcitonin)?', back: '**Parathyroid hormone (PTH)**: **raises** blood Ca²⁺ — stimulates osteoclasts (bone resorption), renal Ca²⁺ reabsorption, and activates vitamin D (gut absorption).\n\n**Calcitonin**: **lowers** blood Ca²⁺.\n\nPTH and calcitonin are antagonists.', hint: 'PTH raises Ca²⁺ (Pulls calcium from bone); calcitonin lowers it.' },
      { topicId: topic.id, front: 'What hormones does the adrenal CORTEX produce?', back: 'The "3 S\'s" by layer (GFR):\n**Zona Glomerulosa → mineralocorticoids (aldosterone — Salt)**\n**Zona Fasciculata → glucocorticoids (cortisol — Sugar)**\n**Zona Reticularis → androgens (Sex hormones)**.\n\nCortisol raises blood glucose and is anti-inflammatory (stress response, controlled by ACTH).', hint: 'GFR = Salt, Sugar, Sex (going deeper). Cortex = steroids.' },
      { topicId: topic.id, front: 'What does the adrenal MEDULLA secrete?', back: '**Epinephrine and norepinephrine** (catecholamines) — the "fight or flight" hormones.\n\nIncrease HR, blood glucose, and blood flow to muscles. The medulla acts as a modified sympathetic ganglion (fast, short-acting amine hormones).', hint: 'Medulla = epinephrine/norepinephrine = fast fight-or-flight.' },
      { topicId: topic.id, front: 'How does negative feedback control hormone levels (HPA axis example)?', back: 'Hypothalamus (**CRH**) → anterior pituitary (**ACTH**) → adrenal cortex (**cortisol**).\n\nRising **cortisol** feeds back to **inhibit** both the hypothalamus and pituitary, shutting off further release. Most endocrine axes use this negative feedback.', hint: 'End hormone (cortisol) inhibits the glands above it. Self-limiting loop.' },
      { topicId: topic.id, front: 'What are the key female reproductive hormones and their roles?', back: '**Estrogen** (follicle/ovary): develops uterine lining, secondary sex characteristics; **LH surge** triggers ovulation.\n**Progesterone** (corpus luteum): maintains the endometrium for pregnancy.\n\nFSH grows follicles; LH triggers ovulation/corpus luteum.', hint: 'Estrogen builds lining; LH surge = ovulation; progesterone maintains pregnancy.' },
      { topicId: topic.id, front: 'What is the role of testosterone and its control?', back: '**Testosterone** (Leydig cells of testes, stimulated by **LH**): male secondary sex characteristics, spermatogenesis (with FSH on Sertoli cells), libido.\n\nA steroid hormone — acts via intracellular receptors on gene transcription; regulated by hypothalamic GnRH and negative feedback.', hint: 'LH → Leydig cells → testosterone. FSH → Sertoli cells → sperm.' },
      { topicId: topic.id, front: 'What does aldosterone do and how is it triggered?', back: '**Aldosterone** (zona glomerulosa, a mineralocorticoid): acts on the kidney **DCT/collecting duct** to **reabsorb Na⁺ (and water) and secrete K⁺**, raising blood pressure.\n\nTriggered by the **RAAS** (low BP → renin → angiotensin II) and high blood K⁺.', hint: 'Aldosterone = save salt/water, dump K⁺. Raises BP (via RAAS).' },
      { topicId: topic.id, front: 'What hormones regulate appetite and metabolism balance?', back: '**Leptin** (from fat/adipose): signals satiety → **decreases** appetite.\n**Ghrelin** (from stomach): signals hunger → **increases** appetite.\n\nLeptin and ghrelin are antagonists in body-weight homeostasis (act on the hypothalamus).', hint: 'Leptin = "leave it" (full); ghrelin = "growling" stomach (hungry).' },
      { topicId: topic.id, front: 'What is the difference between endocrine, paracrine, and autocrine signaling?', back: '**Endocrine**: hormone travels via **bloodstream** to distant targets.\n**Paracrine**: signal acts on **nearby** cells (local diffusion).\n**Autocrine**: cell signals **itself** (same cell that secreted it).', hint: 'Endocrine = far (blood); paracrine = neighbors; autocrine = self.' },
    ],
  });

  console.log('✅ Created 14 MCAT endocrine & hormone flashcards');
  console.log('\n✅ All MCAT endocrine & hormone flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
