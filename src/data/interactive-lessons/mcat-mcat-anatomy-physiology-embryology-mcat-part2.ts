export const mcatEmbryoPart2Data = {
  topicSlug: 'mcat-anatomy-physiology-embryology-mcat',
  sections: [
    {
      id: 'emb2-intro',
      type: 'text' as const,
      content: `# Early Embryology: Fertilization to Germ Layers

**Part 2 of 2 — Gastrulation, Neurulation & Germ-Layer Derivatives**

### Gastrulation: From Disc to Three Layers

After implantation, the inner cell mass organizes into a **bilaminar disc** (epiblast + hypoblast). **Gastrulation** converts this into a **trilaminar disc** with three primary germ layers. The choreography:

1. A groove called the **primitive streak** appears on the epiblast surface, defining the body axes.
2. Epiblast cells migrate toward the streak and **ingress** (dive inward) through it.
3. The first wave of ingressing cells displaces the hypoblast to form **endoderm**; the next wave spreads between the layers as **mesoderm**; cells remaining on the surface become **ectoderm**.

### THE Germ-Layer Derivative Table (highest-yield item in embryology)

| Layer | Memory hook | Derivatives |
|-------|-------------|-------------|
| Ectoderm | "Attracto-derm" (what you see + what senses) | Epidermis, hair, nails; lens of the eye; inner ear; entire nervous system (via neuroectoderm); **adrenal MEDULLA** (via neural crest) |
| Mesoderm | "Means" (middle: what moves and pumps) | Muscle, bone, connective tissue; heart, blood vessels, blood cells; kidneys and gonads; dermis; **adrenal CORTEX** |
| Endoderm | "Endernal linings" | EPITHELIAL LININGS of the GI and respiratory tracts; liver; pancreas; thyroid; bladder lining |

**The classic traps — learn them as pairs:**

- **Adrenal MEDULLA = ectoderm** (neural crest), but **adrenal CORTEX = mesoderm**. One organ, two layers.
- **Lens of the eye = surface ectoderm** (students guess "part of the brain"; the retina IS neuroectoderm, but the lens is induced from overlying surface ectoderm).
- **Pancreas and liver = endoderm** (they bud from the gut tube), even though they feel like "internal organs" and tempt a mesoderm answer.
- Endoderm supplies the **lining epithelium** of gut and lungs; the smooth muscle and connective tissue AROUND those tubes is mesoderm.

### Neurulation: Notochord → Neural Tube

The **notochord** — a mesodermal rod along the midline — releases inductive signals that instruct the overlying ectoderm to become the **neural plate** (this is a textbook case of **induction**: one tissue directing the fate of its neighbor). The plate's edges rise as neural folds and fuse into the **neural tube**, which becomes the **CNS**: brain and spinal cord.

- Failure of neural tube closure → **neural tube defects** (spina bifida if caudal, anencephaly if cranial). Maternal **folate (folic acid)** taken before and during early pregnancy sharply reduces the risk — a favorite discrete question.

<!-- yield:low -->
- The notochord itself mostly degenerates, persisting as the **nucleus pulposus** of intervertebral discs.
<!-- /yield -->

- After inducing the neural plate, the notochord keeps signaling: its **Sonic hedgehog (Shh)** induces the **floor plate** at the tube's ventral midline, and graded Shh specifies ventral cell types such as **motor neurons**. Dorsally, **BMPs** from the overlying surface ectoderm induce the **roof plate** and dorsal (sensory) cell types.

### Neural Crest: The "Fourth Germ Layer"

As the neural tube closes, cells at the crest of the folds — the **neural crest** — break away and **migrate** throughout the embryo. They are ectodermal in origin but so versatile they are nicknamed the fourth germ layer. High-yield derivative list:

- **Peripheral nervous system**: sensory (dorsal root) ganglia, autonomic ganglia, Schwann cells
- **Melanocytes** (skin pigment cells)
- **Adrenal medulla chromaffin cells**
- **Facial bones and cartilage** (the one "skeletal" exception to mesoderm)

If an MCAT answer choice pairs a migratory, far-flung derivative (pigment cell in skin, ganglion near the gut) with an ectodermal origin, think neural crest.`
    },
    {
      id: 'emb2-worked',
      type: 'text' as const,
      content: `### Worked Example — Tracing a Lineage Through the Layers

**Problem 1.** One patient has a pheochromocytoma, a catecholamine-secreting tumor of the adrenal medulla; another has an adrenocortical carcinoma, a tumor of the cortisol-making adrenal cortex. A student says both share one embryonic origin.

- **(a)** Which germ layer gives rise to the adrenal cortex?
- **(b)** Which cells colonize the adrenal medulla, and from which layer do they come?
- **(c)** Is the student's claim correct?
- **(d)** What does each region's physiology suggest about where it came from?
- **(e)** What rule does this suggest for a tissue you have not memorized?

**(a) The cortex.** Intermediate mesoderm, the same territory that yields the kidneys and gonads. That is why the steroid-making cortex (cortisol, aldosterone, androgens) sits beside the kidney and shares steroid chemistry with the gonads.

**(b) The medulla.** Migrating neural crest cells, which are ectodermal. They become chromaffin cells: in effect, postganglionic sympathetic neurons without axons that secrete epinephrine and norepinephrine straight into blood.

**(c) The claim.** No. The adrenal gland is a composite organ: adrenocortical carcinoma is mesodermal in origin, pheochromocytoma ectodermal (neural crest). Shared location does not imply shared lineage.

**(d) Function as a check.** The medulla acts like the sympathetic nervous system (preganglionic fibers synapse directly on chromaffin cells, using acetylcholine), fitting an ectodermal origin. The cortex makes steroids, like the mesodermal gonads.

**(e) The general rule.** Ask what the tissue acts like: nerve, skin or sense organ (ectoderm); muscle, blood, skeleton or urogenital organ (mesoderm); gut-tube lining or gut-derived gland (endoderm). Function usually betrays origin.

**Problem 2.** A newborn has an open defect over the lower back that exposes part of the spinal cord. Her mother learned she was pregnant at week 6 and began prenatal vitamins then.

- **(a)** Which embryonic structure failed to close normally?
- **(b)** From which germ layer does that structure come, and what induced it?
- **(c)** What is this defect called, and what is its cranial counterpart?
- **(d)** What maternal step would have cut the risk?

**(a) The structure.** The neural tube, which becomes the brain and spinal cord (the CNS). Its caudal end did not close, leaving the cord open.

**(b) Origin and induction.** Ectoderm. Signals from the notochord, a midline mesodermal rod, induce the overlying ectoderm to form the neural plate, whose folds rise and fuse into the tube.

**(c) Naming the defect.** Spina bifida, a failure of closure at the caudal end. Failure at the cranial end is anencephaly.

**(d) Prevention.** Maternal folate (folic acid) sharply reduces the risk of neural tube defects, but the tube closes by about day 28, before most women know they are pregnant. Folate begun at week 6 is too late; it must start before conception.`
    },
    {
      id: 'emb2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Germ Layers & Neurulation** 🎯`,
      exercise: {
        questions: [
          {
            question: `A full-thickness skin biopsy contains the epidermis, the dermis beneath it, and the small blood vessels running through the dermis. Which origins, in that order, are correct?`,
            options: [`Surface ectoderm, mesoderm, mesoderm`, `Ectoderm, ectoderm, endoderm`, `Mesoderm, mesoderm, neural crest`, `Endoderm, mesoderm, ectoderm`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Skin is a two-layer organ: the epidermis (with hair and nails) is surface ectoderm, and the dermis is mesoderm, as are all blood vessels. "Ectoderm, ectoderm, endoderm" lumps the dermis with the epidermis above it and gives the vessels an endodermal origin, though endoderm only lines the gut and airway tubes. "Mesoderm, mesoderm, neural crest" makes the epidermis mesodermal and the vessels neural crest. "Endoderm, mesoderm, ectoderm" gives skin an endodermal layer and the vessels an ectodermal one.`
          },
          {
            question: `The lens of the eye develops from:`,
            options: [`Neuroectoderm of the optic vesicle`, `Mesoderm, like other transparent connective tissues`, `Surface ectoderm over the optic vesicle`, `Endoderm of the pharyngeal pouches`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The optic vesicle (an outgrowth of the brain, neuroectoderm) INDUCES the overlying surface ectoderm to thicken and pinch off as the lens. Students who remember "eye = brain outgrowth" wrongly pick neuroectoderm — that is true of the RETINA, not the lens. The lens is neither mesodermal nor endodermal.`
          },
          {
            question: `Which set contains ONLY endoderm derivatives?`,
            options: [`Pancreatic islets, dermis, thyroid`, `Lung epithelium, liver, pancreas`, `Liver, adrenal cortex, bladder lining`, `Thyroid, epidermis, gastric epithelium`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Lung lining, liver, and pancreas all bud from the endodermal gut tube. In the wrong choices: dermis and adrenal cortex are mesoderm, and epidermis is ectoderm. Note the precision the MCAT expects — endoderm gives the epithelial LININGS of gut and airway; the surrounding smooth muscle is mesodermal.`
          },
          {
            question: `In a chick embryo, the notochord is removed at the early neural plate stage, after neural induction but before the neural tube closes. Which cell population of the developing neural tube is most likely to be missing?`,
            options: [`Dorsal sensory interneurons, because roof-plate BMP signaling is lost`, `Neural crest cells, because the neural folds can no longer fuse`, `Roof plate cells, because the notochord is the source of dorsal BMP`, `Ventral motor neurons, because Shh no longer induces the floor plate`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `The neural plate was already induced, so neural tissue still forms. What the notochord still supplies at this stage is Sonic hedgehog (Shh), which induces the floor plate at the ventral midline; the floor plate and graded Shh then specify ventral cell types such as motor neurons. Without the notochord, the tube lacks a floor plate and ventral motor neurons. The dorsal side is patterned by BMP from the overlying surface ectoderm, not the notochord, so the roof plate and the dorsal interneurons it helps specify are untouched. Neural crest arises from the dorsal neural folds independently of notochord Shh.`
          },
          {
            question: `Which derivative pair correctly matches neural crest cells?`,
            options: [`Cerebral cortex neurons and spinal cord interneurons`, `Kidney nephrons and gonads`, `Melanocytes and Schwann cells of peripheral nerves`, `Epithelial lining of the trachea and thyroid follicular cells`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Neural crest cells are the migratory ectodermal population that yields melanocytes, the PNS (Schwann cells, sensory and autonomic ganglia), adrenal medulla chromaffin cells, and facial skeleton. Brain and spinal cord neurons come from the neural TUBE itself (CNS, not crest); kidneys/gonads are mesoderm; tracheal lining and thyroid are endoderm.`
          }
        ]
      }
    },
    {
      id: 'emb2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Gastrulation makes three layers.** Epiblast cells ingress through the primitive streak: first endoderm, then mesoderm; the rest is ectoderm.
- **The germ-layer table.** Ectoderm: skin, lens, nervous system; mesoderm: muscle, bone, blood, kidneys, gonads; endoderm: gut and airway linings.
- **Notochord induces the neural tube.** The induced neural plate folds into the tube (CNS); failed closure causes spina bifida, cut by folate.
- **Neural crest migrates.** This ectodermal "fourth germ layer" makes PNS ganglia, Schwann cells, melanocytes, adrenal medulla and facial bones.

**Common traps**

- **One organ, one layer.** The adrenal medulla is ectoderm (neural crest), but the adrenal cortex is mesoderm.
- **Lens from the brain.** The retina is neuroectoderm, but the lens comes from surface ectoderm induced by the optic vesicle.
- **Liver and pancreas as mesoderm.** Both bud from the gut tube, so they are endoderm; endoderm lines tubes, mesoderm wraps them.
- **Notochord patterns the dorsal tube.** Notochord Shh sets the ventral floor plate and motor neurons; dorsal fates come from ectoderm BMPs.

<!-- yield:low -->
**Low-yield extras**

- The notochord's remnant is the nucleus pulposus.
<!-- /yield -->

**Next up:** the *Organogenesis, Fetal Circulation & Developmental Mechanisms* lesson — the extraembryonic membranes and placenta, fetal circulation and its shunts, teratogens, then potency, induction and the experiments that reveal them.`
    }
  ]
};
