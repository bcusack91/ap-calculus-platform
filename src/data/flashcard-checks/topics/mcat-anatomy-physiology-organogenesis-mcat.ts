import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-anatomy-physiology-organogenesis-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What is induction in development?`]: {
    question: r`Embryonic kidney mesenchyme cultured alone forms no tubules. Cultured in contact with ureteric bud tissue, the same mesenchyme forms tubules, while the bud tissue itself contributes no cells to them. The action of the bud tissue is best described as:`,
    options: [
      r`Determination: a tissue commits to its fate with no outside signal`,
      r`Differentiation: a tissue builds its own final specialized proteins`,
      r`Induction: a signal from one tissue changes the fate of a neighbor`,
      r`Apoptosis: one tissue removes the unneeded cells of its neighbor`,
    ],
    correctAnswer: 2,
    explanation: r`The mesenchyme changes its fate only when the bud tissue is next to it, which is induction: one tissue signaling a neighbor to change its developmental path. Determination and differentiation describe what happens inside the responding cells, not the action of the signaling tissue, and nothing here involves cell death.`,
  },
  [r`Define determination vs. differentiation.`]: {
    question: r`A drug blocks differentiation but leaves determination untouched. It is applied to embryonic cells that are already determined to form lens. What is the expected result?`,
    options: [
      r`They stay committed to a lens fate but never make crystallin proteins`,
      r`They make crystallin proteins but lose their commitment to a lens fate`,
      r`They lose their commitment to a lens fate and become neural cells`,
      r`They make crystallin proteins and only afterward commit to a lens fate`,
    ],
    correctAnswer: 0,
    explanation: r`Determination is the invisible commitment to a fate, and differentiation is the later appearance of the specialized structure and proteins, here the crystallins of the lens. Blocking only differentiation leaves the commitment in place without the specialized products. The other answers either remove the commitment or put differentiation before determination.`,
  },
  [r`What is the role of apoptosis in development?`]: {
    question: r`In a normal chick embryo, about half of the motor neurons made in the spinal cord die before hatching. If one limb bud is removed early, so that those neurons have far less muscle to innervate, what is expected on that side?`,
    options: [
      r`Fewer motor neurons die by apoptosis, sparing the extra cells`,
      r`More motor neurons die by necrosis, with local inflammation`,
      r`The same number die, because the death ignores target size`,
      r`More motor neurons die by apoptosis, matching the small target`,
    ],
    correctAnswer: 3,
    explanation: r`Development overproduces neurons and then prunes by apoptosis those that fail to connect with a target, so a smaller target means more neurons are removed. Fewer deaths would be expected with a larger target, not a smaller one. The pruning is programmed cell death, not necrosis, and it does depend on target size.`,
  },
  [r`What are the fetal circulatory shunts?`]: {
    question: r`Oxygen-rich blood enters the fetus through the umbilical vein and takes the most direct route to the left side of the heart and then the brain. Which shunts does it pass through, in order?`,
    options: [
      r`Foramen ovale, then ductus venosus`,
      r`Ductus venosus, then foramen ovale`,
      r`Ductus venosus, then ductus arteriosus`,
      r`Ductus arteriosus, then foramen ovale`,
    ],
    correctAnswer: 1,
    explanation: r`The ductus venosus carries umbilical vein blood past the liver to the inferior vena cava, and the foramen ovale then passes it from the right atrium to the left atrium, from which it reaches the brain. The ductus arteriosus instead carries blood from the pulmonary artery into the aorta, so it is not on this route, and the reversed order puts the heart before the liver bypass.`,
  },
  [r`What are stem cell potency levels?`]: {
    question: r`Cell X sits in the basal layer of the epidermis and produces only keratinocytes. Cell Y sits in bone marrow and produces every type of blood cell but nothing else. How are X and Y classified?`,
    options: [
      r`Multipotent and pluripotent, respectively`,
      r`Unipotent and pluripotent, respectively`,
      r`Multipotent and totipotent, respectively`,
      r`Unipotent and multipotent, respectively`,
    ],
    correctAnswer: 3,
    explanation: r`A cell that makes a single cell type is unipotent, and a cell limited to one family of related types, such as the blood lineages, is multipotent. Pluripotent cells can form any cell of the body and totipotent cells can also form placenta, so neither label fits a cell restricted to blood.`,
  },
  [r`Pluripotent stem cells can form:`]: {
    question: r`A laboratory grows a pluripotent embryonic stem cell line taken from the inner cell mass of a blastocyst. Which cell type should the line NOT be expected to produce?`,
    options: [
      r`Trophoblast cells of the placenta`,
      r`Neurons of the cerebral cortex`,
      r`Hepatocytes of the adult liver`,
      r`Muscle cells of the heart wall`,
    ],
    correctAnswer: 0,
    explanation: r`Pluripotent cells can form any cell of the body, from all three germ layers, but not the placental trophoblast, which requires totipotency. Neurons (ectoderm), hepatocytes (endoderm) and cardiac muscle (mesoderm) are all body cell types within their range.`,
  },
  [r`How can one morphogen gradient specify several distinct cell types?`]: {
    question: r`Cells respond to a morphogen as follows: a sensed level above 8 units gives fate A, 3 to 8 units gives fate B, and below 3 units gives fate C. A mutant cell has half the normal number of receptors, so it senses half of the true concentration. Placed where the true concentration is 10 units, which fate does it adopt?`,
    options: [
      r`Fate A, because it senses 10 units`,
      r`Fate C, because it senses 5 units`,
      r`Fate B, because it senses 5 units`,
      r`Fate A, because it senses 20 units`,
    ],
    correctAnswer: 2,
    explanation: r`The mutant senses 10 ÷ 2 = 5 units, which falls between the two thresholds, so it turns on the program for fate B. Sensing 10 units ignores the receptor defect and sensing 20 doubles instead of halving. A sensed level of 5 units is above the 3 unit threshold, so it is not low enough for fate C.`,
  },
  [r`A cell is {{c1::determined}} once its fate stays fixed even after transplantation to a new region, a commitment preceding visible differentiation.`]: {
    question: r`Cells from the future leg region of a chick embryo look unspecialized. They are grafted into the wing bud of a host, where they go on to form clawed toes. At the time of the graft, these cells were:`,
    options: [
      r`Differentiated but not yet determined`,
      r`Determined but not yet differentiated`,
      r`Specified but not yet determined`,
      r`Neither specified nor yet determined`,
    ],
    correctAnswer: 1,
    explanation: r`The cells kept their leg fate in a new location, which is the test for determination, and they had no visible specialization yet, so they were not differentiated. Cells that were only specified would have adopted the fate of the wing site. Determination always comes before differentiation, never after it.`,
  },
  [r`Rank the potency of a zygote, an inner cell mass cell, and a hematopoietic stem cell.`]: {
    question: r`Three cells are tested. Cell X alone can produce a whole conceptus, placenta included. Cell Y yields tissues of all three germ layers but no trophoblast. Cell Z yields red cells, white cells and platelets only. Which identification is correct?`,
    options: [
      r`X inner cell mass cell, Y zygote, Z hematopoietic stem cell`,
      r`X zygote, Y hematopoietic stem cell, Z inner cell mass cell`,
      r`X hematopoietic stem cell, Y inner cell mass cell, Z zygote`,
      r`X zygote, Y inner cell mass cell, Z hematopoietic stem cell`,
    ],
    correctAnswer: 3,
    explanation: r`Only the totipotent zygote can make both embryo and placenta, the pluripotent inner cell mass cell makes all three germ layers without trophoblast, and the multipotent hematopoietic stem cell is limited to blood lineages. The other answers swap these levels, for example by giving an inner cell mass cell the ability to form placenta.`,
  },
  [r`Why must the conceptus secrete hCG, and what hormonal handoff follows?`]: {
    question: r`In week 5 of a pregnancy, an antibody that neutralizes all circulating hCG is given. What is the most direct consequence?`,
    options: [
      r`The corpus luteum regresses, progesterone falls, and the endometrium is shed`,
      r`The corpus luteum enlarges, progesterone rises, and the endometrium thickens`,
      r`The corpus luteum regresses, but placental progesterone holds the endometrium`,
      r`The placenta regresses, estrogen falls, and the pituitary releases an LH surge`,
    ],
    correctAnswer: 0,
    explanation: r`hCG acts like LH to keep the corpus luteum alive, and at week 5 luteal progesterone is what maintains the endometrium, so removing hCG causes luteal regression and loss of the lining. The placenta does not make enough progesterone to take over until about weeks 8 to 10. Removing the rescue signal cannot enlarge the corpus luteum, and hCG does not sustain the placenta itself.`,
  },
  [r`Spemann's organizer (dorsal blastopore lip) induces a second body axis when transplanted, secreting BMP antagonists such as {{c1::noggin}} and chordin.`]: {
    question: r`Ectoderm cut from an early frog embryo normally becomes epidermis in culture because its own cells signal to one another with BMP. If purified noggin is added to the culture, with no organizer tissue present, the ectoderm becomes:`,
    options: [
      r`Epidermis, because BMP signaling is blocked`,
      r`Neural tissue, because BMP signaling is blocked`,
      r`Neural tissue, because BMP signaling is boosted`,
      r`Epidermis, because BMP signaling is boosted`,
    ],
    correctAnswer: 1,
    explanation: r`Noggin is a BMP antagonist secreted by the organizer. With BMP signaling blocked, ectoderm follows its default neural fate, which is how the organizer induces a nervous system. BMP signaling is what drives the epidermal fate, so blocking it cannot give epidermis, and noggin inhibits BMP instead of boosting it.`,
  },
  [r`Weeks {{c1::3-8}} of development (organogenesis) are the window of peak teratogen susceptibility; weeks 1-2 follow the all-or-none rule.`]: {
    question: r`The same teratogenic drug is taken in three pregnancies: on day 10, in week 5, and in week 20 after fertilization. Which pairing of exposure and likely outcome is correct?`,
    options: [
      r`Week 20: a major structural malformation; week 5: only slowed growth`,
      r`Day 10: a major structural malformation; week 5: death or no effect`,
      r`Week 5: a major structural malformation; week 20: slowed growth or functional deficits`,
      r`Week 5: a major structural malformation; week 20: death or no effect at all`,
    ],
    correctAnswer: 2,
    explanation: r`Organs form in weeks 3 to 8, so a week 5 exposure is the one most likely to cause a gross malformation, while fetal-period exposure such as week 20 mainly restricts growth or impairs function. The all-or-none outcome of death or full recovery belongs to weeks 1 to 2, which is where the day 10 exposure falls.`,
  },
  [r`Give the signature defects of thalidomide, isotretinoin, alcohol, and ACE inhibitors.`]: {
    question: r`A clinic reviews four newborns, each exposed before birth to a single agent. Which pairing of agent and finding matches that agent's signature defect?`,
    options: [
      r`Thalidomide: absent or shortened limbs`,
      r`Isotretinoin: absent or shortened limbs`,
      r`ACE inhibitor: smooth philtrum, thin lip`,
      r`Alcohol: kidney damage, low amniotic fluid`,
    ],
    correctAnswer: 0,
    explanation: r`Thalidomide causes limb reduction defects when taken in about weeks 4 to 6. Isotretinoin causes craniofacial, cardiac and CNS malformations, not limb loss. A smooth philtrum and thin upper lip belong to fetal alcohol syndrome, and fetal kidney damage with low amniotic fluid belongs to ACE inhibitors, so those two pairings are swapped.`,
  },
  [r`What is the chorion made of, and which prenatal test samples it?`]: {
    question: r`At 11 weeks, a physician removes a small piece of placental villi through the cervix to karyotype the fetus. Which statement correctly identifies the tissue sampled?`,
    options: [
      r`Amnion: epiblast and extraembryonic mesoderm, carrying the fetal genome`,
      r`Decidua: endometrial stroma and glands, carrying the maternal genome`,
      r`Chorion: endometrial stroma and trophoblast, carrying the maternal genome`,
      r`Chorion: trophoblast and extraembryonic mesoderm, carrying the fetal genome`,
    ],
    correctAnswer: 3,
    explanation: r`Chorionic villus sampling takes villi of the chorion, which is trophoblast plus extraembryonic mesoderm. Both come from the conceptus, so the cells carry the fetal genome and can be sampled at 10 to 13 weeks. The amnion is sampled indirectly by amniocentesis later on, and the decidua and endometrial stroma are maternal tissue that would not report the fetal karyotype.`,
  },
  [r`What are the functions of the amnion, and what is its fluid made of over time?`]: {
    question: r`Amniotic fluid is sampled in one pregnancy at week 8 and again at week 30. What is the main source of the fluid at each time?`,
    options: [
      r`Fetal urine early; a filtrate of maternal plasma later`,
      r`A filtrate of maternal plasma early; fetal urine later`,
      r`Fetal lung fluid early; a filtrate of fetal plasma later`,
      r`A filtrate of maternal plasma early; maternal urine later`,
    ],
    correctAnswer: 1,
    explanation: r`Early amniotic fluid is a transudate of maternal plasma, and once the fetal kidneys are working it is mostly fetal urine, which the fetus swallows and excretes again. The reversed order puts fetal urine before the kidneys function. Maternal urine never enters the amniotic cavity, and fetal lung fluid is not the main early source.`,
  },
  [r`The {{c1::yolk sac}} is the first site of hematopoiesis and the origin of primordial germ cells, which migrate to the gonadal ridge.`]: {
    question: r`In an embryo, the wall of the yolk sac fails to develop during weeks 3 and 4, while the embryonic disc itself is normal. Which two cell populations would be missing first?`,
    options: [
      r`The first blood cells and the first motor neurons`,
      r`The first heart cells and the primordial germ cells`,
      r`The first blood cells and the primordial germ cells`,
      r`The first kidney cells and the first motor neurons`,
    ],
    correctAnswer: 2,
    explanation: r`Blood islands in the yolk sac wall are the first site of hematopoiesis in week 3, and primordial germ cells arise there in week 4 before migrating to the gonadal ridge. Motor neurons, heart cells and kidney cells form within the embryo proper and do not come from the yolk sac.`,
  },
  [r`The {{c1::allantois}} becomes the urachus; when this duct stays patent, urine leaks from the umbilicus.`]: {
    question: r`A newborn has clear fluid draining from the umbilicus, and testing shows the fluid is urine. The channel responsible is a persisting remnant of which embryonic structure?`,
    options: [
      r`The allantois, whose duct runs from the bladder to the umbilicus`,
      r`The vitelline duct, which runs from the ileum to the umbilicus`,
      r`The ductus venosus, which runs from the umbilical vein to the cava`,
      r`The yolk sac, whose duct runs from the bladder to the umbilicus`,
    ],
    correctAnswer: 0,
    explanation: r`The allantois becomes the urachus, which links the bladder to the umbilicus and normally closes to form the median umbilical ligament. If it stays open, urine drains at the umbilicus. The vitelline duct belongs to the yolk sac and connects to the ileum, so its persistence leaks intestinal contents, and the ductus venosus carries blood, not urine.`,
  },
  [r`How does the placenta exchange gases and nutrients without mixing maternal and fetal blood?`]: {
    question: r`An oxygen molecule leaves a maternal spiral artery at the placenta and ends up bound to hemoglobin in a fetal red cell. Which path did it take, in order?`,
    options: [
      r`Intervillous space, then fetal capillary endothelium, then syncytiotrophoblast`,
      r`Amniotic cavity, then syncytiotrophoblast, then fetal capillary endothelium`,
      r`Maternal capillary endothelium, then amniotic cavity, then syncytiotrophoblast`,
      r`Intervillous space, then syncytiotrophoblast, then fetal capillary endothelium`,
    ],
    correctAnswer: 3,
    explanation: r`Spiral arteries empty maternal blood into the intervillous space, where it bathes the chorionic villi. Oxygen then crosses the syncytiotrophoblast on the villus surface and the fetal capillary endothelium inside it, so the two bloods never mix. The syncytiotrophoblast is the outer layer, so it comes before the endothelium, and the amniotic cavity is not part of the exchange route.`,
  },
  [r`Define induction and competence, and give a classic inductive pair.`]: {
    question: r`An optic vesicle placed under the head ectoderm of an early embryo makes that ectoderm form a lens. The same vesicle, still releasing its signal normally, is placed under head ectoderm of a much older embryo, and no lens forms. What is the best explanation?`,
    options: [
      r`The optic vesicle has lost the competence to send its signal`,
      r`The older ectoderm has gained the ability to induce the vesicle`,
      r`The older ectoderm has lost the competence to respond to the signal`,
      r`The older ectoderm was never determined to form any epidermis`,
    ],
    correctAnswer: 2,
    explanation: r`Induction needs a signal and a responding tissue that is competent, meaning it has the receptors and machinery to answer, and competence fades with time. The signal here is normal, so the failure lies in the older ectoderm's ability to respond. Competence describes the responder, not the sender, and the ectoderm's commitment to epidermis is the result, not the cause.`,
  },
  [r`Around week 6 the midgut normally herniates into the umbilical cord and returns by week {{c1::10}} after rotating 270 degrees.`]: {
    question: r`A routine ultrasound at week 8 shows a loop of intestine lying in the base of the umbilical cord. How should this finding be interpreted?`,
    options: [
      r`Abnormal: the loop should have returned by about week 6`,
      r`Normal: the loop should return by about week 10`,
      r`Normal: the loop should stay there until about week 20`,
      r`Abnormal: the bowel never normally enters the cord`,
    ],
    correctAnswer: 1,
    explanation: r`The midgut normally herniates into the umbilical cord at about week 6, because the abdomen is too small for it, and returns by about week 10 after rotating. At week 8 the loop is expected to be in the cord. Week 6 is when the herniation begins, not when it ends, and bowel still outside the abdomen long after week 10 would be an omphalocele.`,
  },
  [r`A ventricular septal defect shunts {{c1::left to right}} at first because pulmonary vascular resistance is lower than systemic resistance.`]: {
    question: r`A 2-month-old has a hole in the wall between the ventricles. Peak pressure is 90 mmHg in the left ventricle and 30 mmHg in the right ventricle. Which statement describes the shunt and its effect?`,
    options: [
      r`Right to left: deoxygenated blood enters the aorta, so the infant is cyanotic`,
      r`Left to right: deoxygenated blood enters the aorta, so the infant is cyanotic`,
      r`Right to left: oxygenated blood returns to the lungs, so there is no cyanosis`,
      r`Left to right: oxygenated blood returns to the lungs, so there is no cyanosis`,
    ],
    correctAnswer: 3,
    explanation: r`Blood flows from high to low pressure, so it moves from the left ventricle (90 mmHg) to the right (30 mmHg), reflecting the low resistance of the pulmonary circuit. Oxygenated blood is simply sent around the lungs again, so there is no cyanosis. A right-to-left shunt appears only if pulmonary resistance later rises above systemic resistance.`,
  },
  [r`Indomethacin closes a patent ductus arteriosus by blocking {{c1::prostaglandin}} synthesis, while prostaglandin E1 holds it open.`]: {
    question: r`A woman takes high doses of an NSAID that inhibits cyclooxygenase during the last weeks of pregnancy. Which risk to the fetus follows most directly from the drug's mechanism?`,
    options: [
      r`Early closure of the ductus arteriosus before birth`,
      r`Lasting patency of the ductus arteriosus after birth`,
      r`Early closure of the ductus venosus before birth`,
      r`Lasting patency of the foramen ovale after birth`,
    ],
    correctAnswer: 0,
    explanation: r`Prostaglandins keep the ductus arteriosus open, so a drug that blocks their synthesis can make it constrict before birth, while the fetus still depends on it. Lasting patency is the opposite effect and is what giving prostaglandin E1 produces. The ductus venosus and foramen ovale are not held open by prostaglandins in this way.`,
  },
  [r`Why is tetralogy of Fallot cyanotic while an isolated septal defect is not?`]: {
    question: r`A toddler with tetralogy of Fallot turns blue while crying, then squats and quickly improves. Why does squatting help?`,
    options: [
      r`It lowers systemic resistance, so less blood shunts right to left`,
      r`It raises pulmonary resistance, so more blood shunts left to right`,
      r`It raises systemic resistance, so less blood shunts right to left`,
      r`It raises systemic resistance, so more blood shunts right to left`,
    ],
    correctAnswer: 2,
    explanation: r`In tetralogy, the obstructed pulmonary outflow pushes deoxygenated blood from the right ventricle across the septal defect into the aorta. Squatting kinks the leg arteries and raises systemic resistance, which opposes that right-to-left flow and sends more blood to the lungs. Lower systemic resistance or higher pulmonary resistance would both worsen the shunt.`,
  },
  [r`A congenital diaphragmatic hernia kills mainly through {{c1::pulmonary hypoplasia}}, not through the displaced bowel itself.`]: {
    question: r`A full-term newborn has a hole in the left side of the diaphragm with bowel in the chest. Surgeons return the bowel to the abdomen and close the hole, and the bowel works normally, yet the infant remains severely hypoxemic. What is the main reason?`,
    options: [
      r`The bowel was injured by its time spent inside the chest`,
      r`The lungs never grew enough airways and alveoli before birth`,
      r`The lungs lack surfactant because the infant is premature`,
      r`The repaired diaphragm can no longer contract at all`,
    ],
    correctAnswer: 1,
    explanation: r`Abdominal contents in the fetal chest take up the space the lungs need for airway branching and vascular growth, so the lungs are hypoplastic and repair after birth cannot restore them. The bowel is described as working normally, the infant is full term so surfactant is not the issue, and loss of diaphragm movement is not what limits oxygenation here.`,
  },
  [r`Why does esophageal atresia cause polyhydramnios?`]: {
    question: r`A fetus has a neuromuscular disorder that prevents swallowing, while its kidneys work normally. What happens to the volume of amniotic fluid?`,
    options: [
      r`It rises, since urine is still added but fluid is no longer removed`,
      r`It falls, since swallowing is what normally adds fluid to the cavity`,
      r`It is unchanged, since the placenta alone sets the fluid volume`,
      r`It falls, since urine output stops whenever swallowing stops`,
    ],
    correctAnswer: 0,
    explanation: r`Amniotic fluid volume is the balance between fetal urine going in and fetal swallowing taking fluid out, so losing the swallowing arm lets fluid build up, exactly as a blocked esophagus does. Swallowing removes fluid and does not add it, urine production continues with normal kidneys, and the placenta does not set the volume alone.`,
  },
  [r`Bilateral renal agenesis causes {{c1::oligohydramnios}}, which then compresses the fetus and prevents lung development.`]: {
    question: r`A male fetus has a complete blockage of the urethra from early in the second trimester, so no urine reaches the amniotic cavity. Which set of findings is expected at birth?`,
    options: [
      r`High amniotic fluid, a flattened face and limb deformities, small lungs`,
      r`Low amniotic fluid, a normal face and normal limbs, overinflated lungs`,
      r`High amniotic fluid, a normal face and normal limbs, normal lungs`,
      r`Low amniotic fluid, a flattened face and limb deformities, small lungs`,
    ],
    correctAnswer: 3,
    explanation: r`After the first trimester amniotic fluid is mostly fetal urine, so no urine output means very little fluid, just as with absent kidneys. The uterus then compresses the fetus, flattening the face and deforming the limbs, and the lungs cannot develop. High fluid would follow from failed swallowing instead, and low fluid does not spare the lungs.`,
  },
  [r`Cleft lip versus cleft palate: which fusion failure produces each?`]: {
    question: r`A newborn has a completely intact upper lip but an opening in the roof of the mouth that connects the oral and nasal cavities. Which fusion failed during development?`,
    options: [
      r`The maxillary prominence with the medial nasal prominence`,
      r`The palatine shelves with each other and the primary palate`,
      r`The two mandibular prominences with each other in the midline`,
      r`The two medial nasal prominences with each other in the midline`,
    ],
    correctAnswer: 1,
    explanation: r`A gap in the roof of the mouth is a cleft palate, caused by failure of the palatine shelves to fuse with each other and with the primary palate. Failed fusion of the maxillary prominence with the medial nasal prominence gives a cleft lip, which this infant does not have. The mandibular prominences form the lower jaw, and the medial nasal prominences form the middle of the upper lip.`,
  },
  [r`Why does an undescended testis impair sperm production but not testosterone production?`]: {
    question: r`A 25-year-old man has testes that have remained in the abdomen since birth and were never treated. Which combination of findings is expected?`,
    options: [
      r`Low testosterone and absent male secondary traits, with a normal sperm count`,
      r`Low testosterone and absent male secondary traits, with a very low sperm count`,
      r`Normal testosterone and male secondary traits, with a very low sperm count`,
      r`Normal testosterone and male secondary traits, with a normal sperm count`,
    ],
    correctAnswer: 2,
    explanation: r`Spermatogenesis needs a temperature a few degrees below core, so germ cells in abdominal testes degenerate and the sperm count is very low. Leydig cells are not temperature-sensitive, so testosterone and the traits that depend on it are normal. Answers with low testosterone assume the whole testis fails, and a normal sperm count ignores the temperature requirement.`,
  },
  [r`Interdigital webbing is removed by programmed cell death, so failed {{c1::apoptosis}} leaves syndactyly.`]: {
    question: r`A caspase inhibitor that prevents programmed cell death is applied to the developing paw of a mouse embryo just after the digit rays have formed. What does the paw look like at birth?`,
    options: [
      r`A normal number of digits that are joined by webbing`,
      r`Extra digits that formed in the gaps between the rays`,
      r`A normal number of digits that are abnormally short`,
      r`Missing digits, because the rays failed to condense`,
    ],
    correctAnswer: 0,
    explanation: r`The tissue between the digit rays is normally removed by apoptosis, so blocking programmed cell death leaves the digits joined by webbing (syndactyly). The rays had already formed, so the number of digits is unchanged. Apoptosis removes the webbing here and does not set digit length or create new digits.`,
  },
  [r`Fetal surfactant becomes adequate near week {{c1::34}}, and a lecithin-to-sphingomyelin ratio above 2 predicts lung maturity.`]: {
    question: r`A woman at 30 weeks is expected to deliver within a few days. Amniotic fluid shows a lecithin-to-sphingomyelin ratio of 1.2. What does this mean, and what is the appropriate response?`,
    options: [
      r`The lungs are mature; no treatment is needed before the delivery`,
      r`The lungs are immature; give the mother indomethacin to mature them`,
      r`The lungs are mature; give the infant prostaglandin E1 after birth`,
      r`The lungs are immature; give the mother betamethasone to mature them`,
    ],
    correctAnswer: 3,
    explanation: r`A ratio above 2 predicts mature lungs, so 1.2 at 30 weeks, well before surfactant is adequate near week 34, signals a high risk of respiratory distress. Maternal betamethasone speeds surfactant synthesis by type II pneumocytes. Indomethacin and prostaglandin E1 act on the ductus arteriosus and do nothing for surfactant.`,
  },
  [r`The switch from fetal hemoglobin to HbA finishes around {{c1::6 months}} of age, which is why sickle cell disease is silent in early infancy.`]: {
    question: r`An infant with two mutant beta-globin alleles for sickle cell disease is entirely well at 2 months and has a first painful crisis at 8 months. What best explains the timing?`,
    options: [
      r`Alpha chains were replaced by mutant beta chains by about 6 months`,
      r`Gamma chains were replaced by mutant beta chains by about 6 months`,
      r`Beta chains were replaced by mutant gamma chains by about 6 months`,
      r`Maternal red cells in the infant were used up by about 6 months`,
    ],
    correctAnswer: 1,
    explanation: r`Fetal hemoglobin is α₂γ₂ and has no beta chains, so it cannot sickle. As gamma chains are replaced by beta chains, a switch finished at about 6 months, the mutant beta-globin comes to dominate and symptoms begin. Alpha chains are present in both hemoglobins and are not replaced, the mutation is in beta and not gamma, and the infant's red cells are its own.`,
  },
  [r`A persistent {{c1::vitelline}} duct leaves a Meckel diverticulum on the ileum, sometimes lined with ectopic gastric mucosa.`]: {
    question: r`A 4-year-old has painless rectal bleeding. A scan that detects acid-secreting gastric mucosa lights up a small pouch on the ileum. The pouch is a remnant of which embryonic connection?`,
    options: [
      r`The allantois, which joined the bladder to the umbilicus`,
      r`The vitelline duct, which joined the hindgut to the allantois`,
      r`The vitelline duct, which joined the midgut to the yolk sac`,
      r`The urachus, which joined the midgut to the yolk sac`,
    ],
    correctAnswer: 2,
    explanation: r`A pouch on the ileum containing gastric mucosa is a Meckel diverticulum, a remnant of the vitelline duct that connected the midgut to the yolk sac. Acid from the ectopic mucosa ulcerates nearby ileum and causes the bleeding. The allantois and its urachus connect the bladder to the umbilicus, and their persistence leaks urine instead.`,
  },
  [r`Hypospadias, a urethral opening on the ventral penis, reflects failed fusion of the {{c1::urethral folds}}, a DHT-dependent step.`]: {
    question: r`A 46,XY fetus has a partial deficiency of 5α-reductase, so testosterone is normal but DHT is low. Which finding follows most directly?`,
    options: [
      r`A urethral opening on the upper surface of the penis, from unfused genital swellings`,
      r`A urethral opening on the underside of the penis, from unfused urethral folds`,
      r`Absent testes, because the gonads need DHT in order to form from the genital ridge`,
      r`A uterus and uterine tubes, because DHT normally removes the Müllerian ducts`,
    ],
    correctAnswer: 1,
    explanation: r`Fusion of the urethral folds along the underside of the penis depends on DHT, so low DHT leaves a ventral urethral opening, which is hypospadias. An opening on the upper surface is a different defect and is not due to the urethral folds. Testis formation does not need DHT, and the Müllerian ducts are removed by anti-Müllerian hormone from Sertoli cells.`,
  },
}
