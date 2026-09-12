export const mcatEmbryoPart2Data = {
  topicSlug: 'mcat-anatomy-physiology-embryology-mcat',
  sections: [
    {
      id: 'emb2-intro',
      type: 'text' as const,
      content: `# Embryology — Deep Dive

**Part 2 of 4 — Gastrulation, Neurulation & Germ-Layer Derivatives**

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

The **notochord** — a mesodermal rod along the midline — releases inductive signals that instruct the overlying ectoderm to become the **neural plate** (this is a textbook case of **induction**, developed further in Part 4). The plate's edges rise as neural folds and fuse into the **neural tube**, which becomes the **CNS**: brain and spinal cord.

- Failure of neural tube closure → **neural tube defects** (spina bifida if caudal, anencephaly if cranial). Maternal **folate (folic acid)** taken before and during early pregnancy sharply reduces the risk — a favorite discrete question.
- The notochord itself mostly degenerates, persisting as the **nucleus pulposus** of intervertebral discs.

### Neural Crest: The "Fourth Germ Layer"

As the neural tube closes, cells at the crest of the folds — the **neural crest** — break away and **migrate** throughout the embryo. They are ectodermal in origin but so versatile they are nicknamed the fourth germ layer. High-yield derivative list:

- **Peripheral nervous system**: sensory (dorsal root) ganglia, autonomic ganglia, Schwann cells
- **Melanocytes** (skin pigment cells)
- **Adrenal medulla chromaffin cells** (the reason the medulla is ectodermal — it is essentially a modified sympathetic ganglion)
- **Facial bones and cartilage** (the one "skeletal" exception to mesoderm)

If an MCAT answer choice pairs a migratory, far-flung derivative (pigment cell in skin, ganglion near the gut) with an ectodermal origin, think neural crest.`
    },
    {
      id: 'emb2-worked',
      type: 'text' as const,
      content: `### Worked Example — Tracing a Lineage Through the Layers

**Passage-style problem.** A patient has a pheochromocytoma — a catecholamine-secreting tumor of the adrenal medulla. A second patient has an adrenocortical carcinoma, a tumor of the cortisol-producing outer adrenal gland. A student claims both tumors "arise from the same embryonic tissue because they are in the same organ."

**Step 1 — Break the organ into its lineages.** The adrenal gland is a composite organ. Its **cortex** (steroid-producing: cortisol, aldosterone, androgens) develops from intermediate **mesoderm**, the same general territory that yields kidneys and gonads — which is why cortex, gonads, and kidney sit near each other and all make steroid-handling or urogenital tissue. Its **medulla** (catecholamine-producing: epinephrine, norepinephrine) is colonized by migrating **neural crest** cells, which differentiate into chromaffin cells — functionally, postganglionic sympathetic neurons that lost their axons and secrete straight into blood.

**Step 2 — Evaluate the claim.** The student is wrong. The two tumors arise from different germ layers: adrenocortical carcinoma is mesodermal in origin; pheochromocytoma is ectodermal (neural crest). Shared location does not imply shared lineage.

**Step 3 — Use physiology as the cross-check.** The medulla behaves like the sympathetic nervous system (preganglionic sympathetic fibers synapse directly on chromaffin cells using acetylcholine) — nervous-system behavior signals nervous-system (ectodermal) origin. The cortex responds to ACTH, a hormonal axis, consistent with a gland built from mesoderm.

**MCAT payoff.** When a question gives you a tissue you have not memorized, ask: does it act like nerve/skin/sense organ (ectoderm), like muscle/blood/skeleton/urogenital (mesoderm), or like a gut-tube lining or gut-derived gland (endoderm)? Function usually betrays origin.`
    },
    {
      id: 'emb2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Germ Layers & Neurulation** 🎯`,
      exercise: {
        questions: [
          {
            question: `A tumor derived from adrenal medulla chromaffin cells traces back to which embryonic origin?`,
            options: [`Neural crest (ectoderm)`, `Intermediate mesoderm`, `Endoderm of the gut tube`, `The notochord`],
            correctAnswer: 0,
            explanation: `The adrenal medulla is populated by migrating neural crest cells, making it ectodermal — it is essentially a modified sympathetic ganglion. Intermediate mesoderm is the origin of the adrenal CORTEX (the trap: one organ, two germ layers). The gland has no endodermal component, and the notochord is a signaling rod that becomes the nucleus pulposus.`
          },
          {
            question: `The lens of the eye develops from:`,
            options: [`Neuroectoderm of the optic vesicle`, `Mesoderm, like other transparent connective tissues`, `Surface ectoderm induced by the underlying optic vesicle`, `Endoderm of the pharyngeal region`],
            correctAnswer: 2,
            explanation: `The optic vesicle (an outgrowth of the brain, neuroectoderm) INDUCES the overlying surface ectoderm to thicken and pinch off as the lens. Students who remember "eye = brain outgrowth" wrongly pick neuroectoderm — that is true of the RETINA, not the lens. The lens is neither mesodermal nor endodermal.`
          },
          {
            question: `Which set contains ONLY endoderm derivatives?`,
            options: [`Pancreas, dermis, thyroid`, `Epithelial lining of the lungs, liver, pancreas`, `Liver, adrenal cortex, bladder lining`, `Thyroid, epidermis, GI lining`],
            correctAnswer: 1,
            explanation: `Lung lining, liver, and pancreas all bud from the endodermal gut tube. In the wrong choices: dermis and adrenal cortex are mesoderm, and epidermis is ectoderm. Note the precision the MCAT expects — endoderm gives the epithelial LININGS of gut and airway; the surrounding smooth muscle is mesodermal.`
          },
          {
            question: `In an experiment, the notochord is surgically removed from an early embryo before neurulation. The most likely direct consequence is:`,
            options: [`The gut tube fails to form because its endodermal precursor is lost`, `Somites differentiate into neurons in place of muscle`, `The heart fails to loop`, `The overlying ectoderm fails to form a neural plate, disrupting CNS development`],
            correctAnswer: 3,
            explanation: `The notochord (mesoderm) is the inducer that signals the overlying ectoderm to become neural plate; without the signal, that ectoderm defaults toward epidermis and the neural tube does not form properly. The notochord is not the gut precursor (endoderm is), it does not convert somites into neurons, and cardiac looping is not its direct target.`
          },
          {
            question: `Which derivative pair correctly matches neural crest cells?`,
            options: [`Cerebral cortex neurons and spinal cord interneurons`, `Kidney nephrons and gonads`, `Melanocytes and Schwann cells of peripheral nerves`, `Epithelial lining of the trachea and thyroid follicular cells`],
            correctAnswer: 2,
            explanation: `Neural crest cells are the migratory ectodermal population that yields melanocytes, the PNS (Schwann cells, sensory and autonomic ganglia), adrenal medulla chromaffin cells, and facial skeleton. Brain and spinal cord neurons come from the neural TUBE itself (CNS, not crest); kidneys/gonads are mesoderm; tracheal lining and thyroid are endoderm.`
          }
        ]
      }
    },
    {
      id: 'emb2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Gastrulation: epiblast cells ingress through the primitive streak — first wave → endoderm, second wave → mesoderm, surface remainder → ectoderm (bilaminar → trilaminar disc)
- Ectoderm = "attracto-": epidermis/hair/nails, lens, inner ear, all nervous tissue, adrenal MEDULLA; Mesoderm = "means": musculoskeletal, heart/blood/vessels, kidneys/gonads, dermis, adrenal CORTEX; Endoderm = linings of GI/respiratory tracts + liver, pancreas, thyroid, bladder lining
- Trap pairs: adrenal medulla (ectoderm) vs cortex (mesoderm); lens = surface ectoderm while retina = neuroectoderm; pancreas/liver = endoderm; endoderm lines tubes, mesoderm wraps them
- Notochord (mesoderm) induces neural plate → neural tube → CNS; incomplete closure → spina bifida/anencephaly, risk cut by maternal folate; notochord remnant = nucleus pulposus
- Neural crest ("fourth germ layer") = migratory ectoderm → PNS ganglia and Schwann cells, melanocytes, adrenal medulla chromaffin cells, facial bones and cartilage`
    }
  ]
};
