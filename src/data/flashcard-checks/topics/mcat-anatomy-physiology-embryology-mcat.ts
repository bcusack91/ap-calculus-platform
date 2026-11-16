import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-anatomy-physiology-embryology-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`Name derivatives of each germ layer.`]: {
    question: r`At the end of gastrulation, a tracer dye is injected so that it marks only the endoderm. In the adult animal, which set of tissues should carry the dye?`,
    options: [
      r`Skeletal muscle, bone and the kidneys`,
      r`The gut lining, liver and pancreas`,
      r`Epidermis, brain and the spinal cord`,
      r`Blood cells, gonads and heart muscle`,
    ],
    correctAnswer: 1,
    explanation: r`Endoderm forms the lining of the gut and the organs that bud from it, including the liver, pancreas and lungs. Muscle, bone, kidneys, blood, gonads and heart are all mesodermal, and the epidermis and nervous system are ectodermal.`,
  },
  [r`What happens during gastrulation?`]: {
    question: r`A researcher compares an embryo fixed just before gastrulation with one fixed just after it. Which change is the direct result of gastrulation itself?`,
    options: [
      r`Cells divided rapidly without growth, producing a solid morula`,
      r`Ectoderm folded along the back, producing a hollow neural tube`,
      r`Fluid collected between the cells, producing a blastocyst cavity`,
      r`Cells migrated inward, producing the three primary germ layers`,
    ],
    correctAnswer: 3,
    explanation: r`Gastrulation is the inward migration of cells that lays down ectoderm, mesoderm and endoderm and so sets up the body plan. Rapid division without growth is cleavage, the fluid-filled cavity belongs to the earlier blastocyst stage, and folding of ectoderm into a tube is neurulation, which comes afterward.`,
  },
  [r`Put early development stages in order.`]: {
    question: r`Four embryos of one species are examined. P is a solid ball of 16 cells. Q has three germ layers but no neural folds. R is a hollow sphere with a fluid-filled cavity. S has neural folds that are fusing into a tube. Which order runs from youngest to oldest?`,
    options: [r`P, R, Q, S`, r`P, Q, R, S`, r`R, P, Q, S`, r`P, R, S, Q`],
    correctAnswer: 0,
    explanation: r`The solid ball is a morula, the hollow sphere is a blastula (blastocyst), three germ layers mark a gastrula, and fusing neural folds mark a neurula, so the order is P, R, Q, S. Orders that put Q before R place gastrulation before the blastula, the order starting with R puts the blastula before the morula, and the order ending in Q puts neurulation before gastrulation.`,
  },
  [r`The primitive streak marks:`]: {
    question: r`In a two-week embryo, a narrow groove appears on the epiblast surface along the midline at the caudal end, and epiblast cells begin moving down through it. What does the appearance of this groove tell an observer?`,
    options: [
      r`Neurulation has begun and the neural folds are about to fuse`,
      r`Cleavage has ended and the blastocyst cavity is about to form`,
      r`Gastrulation has begun and the left and right sides are set`,
      r`Implantation has begun and the trophoblast is about to invade`,
    ],
    correctAnswer: 2,
    explanation: r`The groove is the primitive streak, which marks the start of gastrulation and defines the midline, giving the embryo bilateral symmetry as cells pass through it to form mesoderm and endoderm. Cleavage, blastocyst formation and implantation are all finished before the streak appears, and neurulation follows gastrulation.`,
  },
  [r`Which germ layer forms the nervous system?`]: {
    question: r`A genetic marker is switched on in a single germ layer of a mouse embryo and is later found in every neuron of the brain. In which other tissue of the same mouse should the marker appear, and why?`,
    options: [
      r`Epidermis, since both are ectodermal`,
      r`Vertebrae, since both are mesodermal`,
      r`Gut lining, since both are endodermal`,
      r`Dermis, since both are ectodermal`,
    ],
    correctAnswer: 0,
    explanation: r`The nervous system comes from ectoderm, the same layer that forms the epidermis, hair and nails, so the marker appears in the epidermis. The brain is not mesodermal or endodermal, and the dermis is a mesodermal tissue even though it lies just under the ectodermal epidermis.`,
  },
  [r`The inner cell mass of the blastocyst becomes:`]: {
    question: r`Fluorescent cells are injected into a mouse blastocyst and join only its inner cell mass. Assuming normal development, where should fluorescence be found at birth?`,
    options: [
      r`In the placental trophoblast, but not in the tissues of the pup's body`,
      r`Equally in the pup's body tissues and in the placental trophoblast`,
      r`Only in the mother's uterine lining, and not in the pup or placenta`,
      r`In the tissues of the pup's body, but not in the placental trophoblast`,
    ],
    correctAnswer: 3,
    explanation: r`The inner cell mass becomes the embryo proper, so its descendants populate the pup's body. The placental contribution of the conceptus comes from the trophoblast, the outer layer of the blastocyst, so answers that place the label there confuse the two lineages. Embryonic cells do not become maternal uterine lining.`,
  },
  [r`Conjoined twins result from:`]: {
    question: r`Twins are born joined at the chest and share a single liver. Which account of their origin is correct?`,
    options: [
      r`Two embryos from separate eggs implanted close together and fused`,
      r`One embryo began to split unusually late and never fully separated`,
      r`One embryo split at the two-cell stage and its halves later rejoined`,
      r`Two sperm fertilized one egg and each directed half of the body`,
    ],
    correctAnswer: 1,
    explanation: r`Conjoined twins come from a single embryo whose division starts very late (after about day 13) and is left incomplete, so the twins share tissue. They are not two separate embryos that fused, an early split gives two fully separate twins, and fertilization by two sperm gives a nonviable triploid zygote.`,
  },
  [r`The notochord induces:`]: {
    question: r`A second notochord is grafted just beneath the ectoderm on the flank of an early host embryo, where the ectoderm would normally become skin. What is the most likely fate of the ectoderm lying directly over the graft?`,
    options: [
      r`It thins out and forms extra epidermis`,
      r`It sinks inward and forms extra mesoderm`,
      r`It thickens and forms an extra neural plate`,
      r`It rolls up and forms an extra notochord`,
    ],
    correctAnswer: 2,
    explanation: r`The notochord signals the ectoderm above it to become neural plate, so competent ectoderm over a grafted notochord forms an extra neural plate. Forming epidermis is what that ectoderm does without the signal. The notochord does not turn ectoderm into mesoderm or into more notochord.`,
  },
  [r`Cleavage is characterized by:`]: {
    question: r`A zygote has volume V. It goes through three rounds of cleavage inside its zona pellucida. About how many cells are present, and what is the approximate volume of each?`,
    options: [
      r`8 cells, each about V/8`,
      r`8 cells, each about V`,
      r`6 cells, each about V/6`,
      r`3 cells, each about V/3`,
    ],
    correctAnswer: 0,
    explanation: r`Each round doubles the cell number, so three rounds give 2 × 2 × 2 = 8 cells, and because cleavage has no growth phase the total volume stays near V, leaving about V/8 per cell. Cells of volume V would require growth between divisions. Counting 6 or 3 cells treats the divisions as adding cells instead of doubling them.`,
  },
  [r`Why is the neural crest nicknamed the fourth germ layer, and what happens when it fails?`]: {
    question: r`A drug blocks the epithelial-to-mesenchymal transition in cells at the edges of the closing neural folds and has no other effect. What is the direct consequence?`,
    options: [
      r`Neural tube cells lose their contacts and scatter through the body`,
      r`Crest cells reach their targets but cannot divide after arriving`,
      r`Notochord cells stay epithelial and never signal to the ectoderm`,
      r`Crest cells stay in the neural folds and never reach their targets`,
    ],
    correctAnswer: 3,
    explanation: r`Neural crest cells must switch from an epithelial to a mesenchymal state to detach and migrate, so blocking that switch traps them at the neural folds and their many derivatives are lost. The transition is what lets cells leave, so it does not act after arrival, and it concerns crest cells, not the neural tube or the notochord.`,
  },
  [r`Why are dizygotic twins always dichorionic and diamniotic?`]: {
    question: r`An ultrasound of boy-girl twins shows a single fused placental mass. A student concludes that the twins must share one chorion. Is the student correct?`,
    options: [
      r`Yes: a single placental mass means one chorion encloses both of the twins`,
      r`Yes: fused placentas show that both twins came from one fertilized egg`,
      r`No: the placentas fused, but each twin keeps its own chorion and amnion`,
      r`No: the twins share one chorion, but each keeps a separate amnion`,
    ],
    correctAnswer: 2,
    explanation: r`Boy-girl twins are dizygotic, so each came from its own egg and built its own chorion and amnion. Their placentas can fuse secondarily, but the membranes stay separate. A fused placenta therefore does not prove a shared chorion or a single egg, and a shared chorion with two amnions is a monozygotic arrangement.`,
  },
  [r`Monozygotic splitting at days {{c1::4-8}} (inner cell mass stage) yields monochorionic-diamniotic twins, the most common MZ arrangement.`]: {
    question: r`A single embryo splits on day 6 after fertilization, once the trophoblast has formed but before the amnion exists. Which membrane arrangement results?`,
    options: [
      r`Two chorions and two amnions, with separate placentas`,
      r`One chorion and two amnions, with a shared placenta`,
      r`One chorion and one amnion, with a shared placenta`,
      r`Two chorions and one amnion, with separate placentas`,
    ],
    correctAnswer: 1,
    explanation: r`A split on days 4 to 8 divides the inner cell mass after the trophoblast is committed, so the twins share one chorion and placenta, but each later forms its own amnion. Two chorions need a split before day 4, a single shared amnion needs a split after day 8, and two chorions with one amnion does not occur.`,
  },
  [r`The pituitary has dual origin: the anterior lobe from {{c1::Rathke's pouch}} (oral ectoderm), the posterior lobe from a downgrowth of the diencephalon.`]: {
    question: r`A child has a cystic tumor near the pituitary that arose from remnants of a pouch of oral ectoderm that grew upward from the roof of the embryonic mouth. In normal development, that pouch forms the:`,
    options: [
      r`Posterior pituitary, which releases oxytocin`,
      r`Pineal gland, which secretes melatonin`,
      r`Hypothalamus, which makes releasing hormones`,
      r`Anterior pituitary, which secretes growth hormone`,
    ],
    correctAnswer: 3,
    explanation: r`The pouch of oral ectoderm is Rathke's pouch, which becomes the hormone-secreting anterior pituitary. The posterior pituitary is a downgrowth of the diencephalon, and the hypothalamus and pineal gland are also neural tissue, so none of them comes from oral ectoderm.`,
  },
  [r`Endoderm builds more than gut lining. List its high-yield organ derivatives.`]: {
    question: r`A mouse line expresses a reporter in every cell descended from endoderm and in no other cell. In which set of adult tissues would every member carry the reporter?`,
    options: [
      r`Thyroid follicular cells, bladder lining, thymic epithelium`,
      r`Thyroid C cells, bladder lining, thymic epithelium`,
      r`Thyroid follicular cells, gut smooth muscle, liver cells`,
      r`Parathyroid cells, kidney tubules, pancreatic cells`,
    ],
    correctAnswer: 0,
    explanation: r`Thyroid follicular cells, the bladder lining and thymic epithelium are all endodermal. Each other set has one outsider: thyroid C cells come from neural crest, gut smooth muscle is mesodermal even though the gut lining is endodermal, and kidney tubules come from intermediate mesoderm.`,
  },
  [r`Give the neurulation timeline and the defects caused by failure of each neuropore to close.`]: {
    question: r`A fetus has no forebrain and no skull vault, while its lower spine is completely normal. Which closure failed, and at about what time after fertilization should it have occurred?`,
    options: [
      r`Posterior neuropore, at about day 27`,
      r`Anterior neuropore, at about day 60`,
      r`Anterior neuropore, at about day 25`,
      r`Posterior neuropore, at about day 10`,
    ],
    correctAnswer: 2,
    explanation: r`Absence of the forebrain and skull vault is anencephaly, which follows failure of the anterior neuropore to close at about day 25. The posterior neuropore closes about day 27 to 28 and its failure gives spina bifida, which the normal spine rules out. Day 60 is far too late and day 10 is before the neural plate even forms.`,
  },
  [r`Neural crest forms PNS ganglia, Schwann cells, melanocytes, adrenal medulla, facial skeleton, thyroid {{c1::C cells}}, and the {{c2::aorticopulmonary}} septum.`]: {
    question: r`In a mouse embryo, neural crest cells fail to reach the heart and the thyroid, while every other cell population develops normally. Which pair of findings is expected?`,
    options: [
      r`One undivided ventricle and no thyroxine-secreting cells`,
      r`One undivided outflow vessel and no calcitonin-secreting cells`,
      r`One undivided outflow vessel and no thyroxine-secreting cells`,
      r`One undivided atrium and no calcitonin-secreting cells`,
    ],
    correctAnswer: 1,
    explanation: r`Crest cells build the aorticopulmonary septum, which splits the outflow tract into aorta and pulmonary trunk, and they form the thyroid C cells that secrete calcitonin. Thyroxine comes from follicular cells, which are endodermal, and the septa dividing the atria and ventricles are not the crest-derived outflow septum.`,
  },
  [r`Which mesoderm subdivision yields kidneys and gonads, and what do the other two subdivisions form?`]: {
    question: r`A newborn has no kidneys and malformed gonads, but normal vertebrae, skeletal muscles, heart and limb bones. The primary defect most likely lay in which embryonic tissue?`,
    options: [
      r`Paraxial mesoderm`,
      r`Lateral plate mesoderm`,
      r`Neural crest ectoderm`,
      r`Intermediate mesoderm`,
    ],
    correctAnswer: 3,
    explanation: r`Intermediate mesoderm forms the urogenital system, so losing it removes kidneys and gonads. Paraxial mesoderm forms the somites, which give vertebrae and skeletal muscle, and lateral plate mesoderm gives the heart and limb skeleton, all of which are normal here. Neural crest does not build the kidneys or gonads.`,
  },
  [r`Cleavage divisions multiply cells without growth, so each blastomere's {{c1::nuclear-to-cytoplasmic}} ratio rises toward adult values.`]: {
    question: r`During three rounds of cleavage, each cell keeps a nucleus of about the same volume while the cytoplasm of the zygote is shared out among the daughter cells. Compared with the zygote, the nuclear-to-cytoplasmic ratio of one cell at the 8-cell stage is:`,
    options: [
      r`About 8 times higher, since each cell has 1/8 of the cytoplasm`,
      r`About 8 times lower, since each cell has 1/8 of the cytoplasm`,
      r`Unchanged, since nucleus and cytoplasm are divided equally`,
      r`About 3 times higher, since three divisions have taken place`,
    ],
    correctAnswer: 0,
    explanation: r`With no growth between divisions, each of the 8 cells holds about 1/8 of the original cytoplasm but still has a full-sized nucleus, so the nuclear-to-cytoplasmic ratio is about 8 times higher. Calling it lower inverts the ratio, the nucleus is replicated and not divided down like the cytoplasm, and three divisions give a factor of 2³ = 8, not 3.`,
  },
  [r`What is compaction, when does it occur, and which adhesion molecule drives it?`]: {
    question: r`A loosely arranged 8-cell embryo is cultured with an antibody that blocks E-cadherin. Which event is the first to fail?`,
    options: [
      r`Blastomeres dividing by mitosis to reach the 8-cell stage`,
      r`Blastocyst hatching out of the surrounding zona pellucida`,
      r`Blastomeres flattening together into inner and outer cells`,
      r`Epiblast cells moving inward through the primitive streak`,
    ],
    correctAnswer: 2,
    explanation: r`Compaction happens at about the 8-cell stage, when E-cadherin pulls blastomeres tightly together and creates inside and outside cells, so it is the first step lost. The embryo has already reached 8 cells, and hatching and gastrulation come days later and would only fail as downstream effects.`,
  },
  [r`Describe the week-2 bilaminar disc and the two cavities flanking it.`]: {
    question: r`In a week-2 human embryo, a fine probe enters the cavity that borders the hypoblast side of the embryonic disc. Which cavity has the probe entered, and what lies on the far side of the disc?`,
    options: [
      r`The amniotic cavity; the yolk sac lies beyond the epiblast`,
      r`The yolk sac; the amniotic cavity lies beyond the epiblast`,
      r`The yolk sac; the blastocyst cavity lies beyond the epiblast`,
      r`The amniotic cavity; the yolk sac lies beyond the hypoblast`,
    ],
    correctAnswer: 1,
    explanation: r`The hypoblast is the ventral layer of the disc and faces the primary yolk sac, while the epiblast is the dorsal layer and faces the amniotic cavity. Answers naming the amniotic cavity put it on the wrong side of the disc, and the cavity above the epiblast is the amniotic cavity, not the blastocyst cavity.`,
  },
  [r`What does each somite compartment become?`]: {
    question: r`A mutation destroys the sclerotome of every somite but leaves the myotome and dermatome intact. Which structures fail to form?`,
    options: [
      r`The vertebrae and ribs of the axial skeleton`,
      r`The skeletal muscles of the trunk and limbs`,
      r`The dermis under the skin along the back`,
      r`The sensory ganglia beside the spinal cord`,
    ],
    correctAnswer: 0,
    explanation: r`The sclerotome forms the vertebrae and ribs. Skeletal muscle comes from the myotome and the dermis of the back from the dermatome, both of which are spared here. Sensory ganglia come from neural crest, not from somites.`,
  },
  [r`The {{c1::notochord}} induces overlying ectoderm to form the neural plate and persists in adults only as the nucleus pulposus.`]: {
    question: r`In a herniated intervertebral disc, the gel-like core bulges out through the fibrous ring around it. That core is the adult remnant of an embryonic structure. What did that structure do in the early embryo?`,
    options: [
      r`It folded and fused to form the hollow neural tube itself`,
      r`It segmented into the blocks that formed vertebrae and ribs`,
      r`It migrated from the neural folds to form the nerve ganglia`,
      r`It signalled the ectoderm above it to form the neural plate`,
    ],
    correctAnswer: 3,
    explanation: r`The gel-like core is the nucleus pulposus, the only adult remnant of the notochord, a midline mesodermal rod that induces the overlying ectoderm to form the neural plate. The neural plate, not the notochord, folds into the neural tube. Segmented blocks are somites, and migrating cells from the neural folds are neural crest.`,
  },
  [r`Neural tube patterning: {{c1::SHH}} from the notochord and floor plate ventralizes (motor); {{c2::BMPs}} from the roof plate dorsalize (sensory).`]: {
    question: r`A mouse embryo makes no functional Sonic hedgehog, while BMP secretion from the roof plate is normal. How is the pattern of cell types in its spinal neural tube most likely altered?`,
    options: [
      r`Dorsal sensory fates are lost and ventral motor fates spread`,
      r`Ventral motor fates are lost and dorsal sensory fates spread`,
      r`Ventral sensory fates are lost and dorsal motor fates spread`,
      r`Dorsal motor fates are lost and ventral sensory fates spread`,
    ],
    correctAnswer: 1,
    explanation: r`Sonic hedgehog from the notochord and floor plate specifies ventral motor identities, so without it those fates are lost and the unopposed BMP signal lets dorsal sensory identities spread. Losing dorsal fates would follow from losing BMPs instead. The other two answers swap the positions, since motor neurons are ventral and sensory cell types are dorsal.`,
  },
  [r`MZ twin timing map: split at days 0-4 gives di-di; days 4-8 mono-di; days 8-13 mono-{{c1::amniotic}}; after day 13 {{c2::conjoined}} twins.`]: {
    question: r`Monozygotic twins are found lying together in a single amniotic sac inside a single chorion, and their bodies are completely separate. When did the embryo most likely split?`,
    options: [
      r`On days 0 to 4, before the trophoblast had formed`,
      r`On days 4 to 8, before the amnion had formed`,
      r`On days 8 to 13, after the amnion had formed`,
      r`After day 13, when the disc split incompletely`,
    ],
    correctAnswer: 2,
    explanation: r`One chorion and one amnion means the split came after both membranes existed, which is days 8 to 13. A split on days 0 to 4 gives two chorions and two amnions, and a split on days 4 to 8 gives one chorion with two amnions. A split after day 13 is incomplete and gives conjoined twins, but these twins are fully separate.`,
  },
  [r`Why must folate supplementation begin before conception rather than at the first missed period?`]: {
    question: r`A woman discovers she is pregnant 35 days after fertilization and starts taking folate that same day. Why does this give little protection against neural tube defects?`,
    options: [
      r`The neural tube finished closing about a week earlier, by day 28`,
      r`The neural tube does not begin to close until about week 12`,
      r`Folate cannot cross the placenta until the second trimester`,
      r`Folate acts only on the oocyte before it has been fertilized`,
    ],
    correctAnswer: 0,
    explanation: r`The neuropores close on about days 25 to 28, so by day 35 the window in which folate lowers risk has already passed. Placing closure at week 12 gets the timeline far too late. Folate does reach the embryo and does act after fertilization, which is why it must already be on board during week 4.`,
  },
  [r`Give the day-by-day sequence from fertilization to the start of implantation.`]: {
    question: r`An IVF clinic wants to place an embryo in the uterus at the moment that matches natural timing for the start of implantation. About how long after fertilization is that, and what must the embryo have done just beforehand?`,
    options: [
      r`About day 2, after hatching from its zona pellucida`,
      r`About day 6, after shedding its trophoblast layer`,
      r`About day 14, after forming its primitive streak`,
      r`About day 6, after hatching from its zona pellucida`,
    ],
    correctAnswer: 3,
    explanation: r`The blastocyst forms and hatches from the zona pellucida on about day 5 and begins implanting on days 6 to 7. On day 2 the embryo is still a few cleaving cells in the uterine tube. The trophoblast is the layer that does the implanting, so it is not shed, and the primitive streak appears only after implantation is complete.`,
  },
  [r`The invasive {{c1::syncytiotrophoblast}} erodes the endometrium and secretes hCG; the cytotrophoblast is the mitotic inner layer that feeds it cells.`]: {
    question: r`A toxin kills only cells that are actively dividing. In an implanting blastocyst, which trophoblast layer does it kill directly, and what follows?`,
    options: [
      r`Syncytiotrophoblast, so the inner dividing layer stops gaining cells`,
      r`Cytotrophoblast, so the invasive syncytium stops gaining new cells`,
      r`Cytotrophoblast, so hCG release from that same layer stops at once`,
      r`Syncytiotrophoblast, so the inner cell mass stops gaining new cells`,
    ],
    correctAnswer: 1,
    explanation: r`The cytotrophoblast is the mitotic layer, and its cells fuse into the syncytiotrophoblast, a multinucleate mass that does not divide, so killing dividing cells cuts off the supply to the invasive syncytium. The syncytiotrophoblast is not dividing and so is not hit directly, and hCG is secreted by the syncytiotrophoblast, not the cytotrophoblast.`,
  },
  [r`Split the high-yield ectoderm derivatives between surface ectoderm and neuroectoderm.`]: {
    question: r`A reporter gene is active in surface ectoderm and all of its descendants, but never in the neural tube or its descendants. Which pair of adult structures would both express the reporter?`,
    options: [
      r`Posterior pituitary and sweat glands`,
      r`Pineal gland and mammary glands`,
      r`Anterior pituitary and tooth enamel`,
      r`Spinal cord and the epidermis`,
    ],
    correctAnswer: 2,
    explanation: r`The anterior pituitary (through Rathke's pouch) and tooth enamel both come from surface ectoderm. Sweat glands, mammary glands and epidermis are surface ectoderm too, but each is paired here with a neuroectoderm structure: the posterior pituitary, the pineal gland or the spinal cord.`,
  },
  [r`The adrenal {{c1::cortex}} is mesodermal, while the adrenal {{c2::medulla}} arises from neural crest chromaffin precursors.`]: {
    question: r`An embryo forms no neural crest derivatives at all, but its mesoderm develops normally. Which statement best describes hormone production by its adrenal glands?`,
    options: [
      r`Cortisol is made, but epinephrine is not`,
      r`Epinephrine is made, but cortisol is not`,
      r`Aldosterone is made, but cortisol is not`,
      r`Neither cortisol nor epinephrine is made`,
    ],
    correctAnswer: 0,
    explanation: r`The adrenal cortex is mesodermal, so it still forms and makes its steroids, including cortisol and aldosterone. The medulla comes from neural crest chromaffin precursors, so epinephrine is missing. Answers that keep epinephrine or remove cortisol assign the two parts of the gland to the wrong origins.`,
  },
  [r`Maternal serum alpha-fetoprotein runs {{c1::high}} with open neural tube defects and low with trisomy 21.`]: {
    question: r`At 16 weeks of a correctly dated singleton pregnancy, the mother's serum alpha-fetoprotein is well above the normal range. Which fetal condition fits this result best?`,
    options: [
      r`A spina bifida occulta covered by intact skin`,
      r`A trisomy 21 fetus with no structural defect`,
      r`A closed neural tube with intact body walls`,
      r`An open spina bifida with exposed neural tissue`,
    ],
    correctAnswer: 3,
    explanation: r`Fetal alpha-fetoprotein leaks into amniotic fluid and then maternal blood through an open neural tube defect, so the maternal level is high. A skin-covered defect such as spina bifida occulta does not leak, a normal fetus gives a normal level, and trisomy 21 is associated with a low level.`,
  },
  [r`DiGeorge syndrome deletes structures derived from pharyngeal pouches {{c1::3 and 4}}, causing T cell deficiency and hypocalcemia.`]: {
    question: r`In a newborn, the derivatives of the third and fourth pharyngeal pouches failed to form. Which set of laboratory findings is expected?`,
    options: [
      r`Low B cell count, low PTH, low serum calcium`,
      r`Low T cell count, low PTH, low serum calcium`,
      r`Low T cell count, high PTH, high serum calcium`,
      r`Low B cell count, high PTH, low serum calcium`,
    ],
    correctAnswer: 1,
    explanation: r`Pouch 3 forms the thymus and the inferior parathyroids and pouch 4 forms the superior parathyroids, so T cells cannot mature and PTH is low, which lowers serum calcium. B cells mature in bone marrow and are not the primary deficit. High PTH with high calcium would describe overactive parathyroids, the opposite of absent ones.`,
  },
  [r`Hirschsprung disease reflects failed {{c1::neural crest}} migration, leaving a distal colon segment without enteric ganglia.`]: {
    question: r`A newborn passes no meconium, and a biopsy of the rectal wall shows no ganglion cells. Which statement correctly explains why the rectum is always involved and how the affected segment behaves?`,
    options: [
      r`Crest cells migrate caudal to rostral, so the rectum is reached last; it stays dilated`,
      r`Crest cells migrate rostral to caudal, so the rectum is reached first; it stays dilated`,
      r`Crest cells migrate rostral to caudal, so the rectum is reached last; it stays contracted`,
      r`Mesoderm cells migrate rostral to caudal, so the rectum is reached last; it stays contracted`,
    ],
    correctAnswer: 2,
    explanation: r`Enteric ganglia come from neural crest cells that colonize the gut from rostral to caudal, so an arrested migration always leaves the rectum without ganglia. The aganglionic segment cannot relax and stays contracted, while the normal bowel upstream of it dilates. Enteric neurons are not mesodermal, and the rectum is the last region reached, not the first.`,
  },
  [r`The thyroid begins at the {{c1::foramen cecum}} of the tongue and descends through the neck, trailing the thyroglossal duct.`]: {
    question: r`A child has a lump in the exact midline of the neck that moves upward when she sticks out her tongue. The lump lies along the path taken by which developing gland?`,
    options: [
      r`The thyroid, descending from the foramen cecum of the tongue`,
      r`The thymus, descending from the third pharyngeal pouch`,
      r`The parathyroids, descending from the fourth pharyngeal pouch`,
      r`The anterior pituitary, ascending from the roof of the mouth`,
    ],
    correctAnswer: 0,
    explanation: r`The thyroid starts at the foramen cecum of the tongue and descends in the midline, trailing the thyroglossal duct, so a remnant cyst stays tethered to the tongue and rises when it is protruded. The thymus and parathyroids arise from the lateral pharyngeal pouches and are not attached to the tongue, and the anterior pituitary moves up toward the brain, not down the neck.`,
  },
}
