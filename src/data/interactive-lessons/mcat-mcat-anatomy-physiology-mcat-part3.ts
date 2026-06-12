export const mcatAnatPhysPart3Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'ap3-intro',
      type: 'text' as const,
      content: `# Anatomy & Physiology for the MCAT

**Part 3 of 7 — Embryology & Development**

### Early Development

| Stage | Description | Timing |
|-------|-------------|--------|
| Fertilization | Sperm + egg → zygote (2n); cortical reaction blocks polyspermy | Day 0 |
| Cleavage | Rapid mitotic divisions, **no net growth** (↑ nuclear:cytoplasm ratio) | Days 1–4 |
| Morula | Solid ball of ~16 cells | Day 3–4 |
| Blastocyst | Hollow ball: **inner cell mass** (→ embryo) + **trophoblast** (→ placenta) | Day 5–6 |
| Implantation | Blastocyst embeds in endometrium; trophoblast secretes hCG | Day 6–12 |
| Gastrulation | Three germ layers form via the **primitive streak** | Week 3 |
| Neurulation | Notochord induces neural plate → neural tube | Week 3–4 |

### Cleavage Geometry

\`\`\`
Zygote → 2-cell → 4-cell → 8-cell → Morula (solid) → Blastocyst (hollow)
                                                 ┌── trophoblast (outer)
                                                 └── inner cell mass (embryo)
\`\`\`

- **Indeterminate cleavage** (humans): early cells retain totipotency — split → identical twins.
- **Determinate cleavage**: cell fate fixed early; a separated cell cannot form a whole organism.

### Three Germ Layers (ULTRA HIGH YIELD)

| Layer | Becomes |
|-------|---------|
| **Ectoderm** | Nervous system (brain, spinal cord), epidermis, hair, nails, lens of eye, **adrenal medulla**, inner ear |
| **Mesoderm** | Muscle, bone, connective tissue, cardiovascular system, kidneys, gonads, blood, **adrenal cortex** |
| **Endoderm** | GI tract lining, respiratory lining (lungs), liver, pancreas, thyroid, bladder lining |

**Mnemonics**
- **Ecto**derm = "**Ecto** = outer/attracto" — everything you see (skin) or think with (nervous system).
- **Meso**derm = "**Meso** = means" — Muscle, bone, blood, gonads (the middle, structural stuff).
- **Endo**derm = "**Endo** = inner lining" — gut and respiratory lining + their derivative glands.

> **MCAT trap — the adrenal gland is split:** cortex (steroids) is **mesoderm**; medulla (catecholamines, modified neurons) is **ectoderm** via neural crest.

### Neural Crest Cells (Ectoderm's "fourth lineage")

Migratory cells that delaminate from the neural tube edges → form **PNS ganglia, Schwann cells, melanocytes, adrenal medulla, and craniofacial bone/cartilage**. A favorite MCAT topic because their derivatives seem unrelated.

### Induction & Determination

- **Induction**: one tissue secretes signals (e.g., notochord → Sonic hedgehog) that direct the fate of a neighbor (neural plate). Loss of an inducer → loss of the induced structure.
- **Determination** precedes **differentiation**: a cell is *committed* (determined) before it visibly *specializes* (differentiates). Commitment can be revealed by transplant experiments.

### Fetal Circulation Shunts (high-yield)

| Shunt | Connects | Bypasses |
|-------|----------|----------|
| Ductus venosus | Umbilical vein → IVC | Liver |
| Foramen ovale | Right atrium → left atrium | Lungs |
| Ductus arteriosus | Pulmonary artery → aorta | Lungs |

These close at birth when the lungs inflate and pressures shift; a patent ductus arteriosus is a common congenital defect.

**Clinical correlations:** Neural tube defects (spina bifida, anencephaly) from failed neural tube closure — folate-preventable; teratogens (alcohol, retinoic acid) act most severely during the embryonic period (weeks 3–8) when organogenesis occurs.`
    },
    {
      id: 'ap3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Embryology** 🎯`,
      exercise: {
        questions: [
          {
            question: `In a frog embryo, a researcher surgically removes the notochord before the overlying ectoderm has formed a neural plate. The most likely result is:`,
            options: [`The neural plate fails to form, because the notochord normally induces it`, `The neural plate forms early from mesoderm instead`, `Two neural tubes form due to loss of inhibition`, `The ectoderm differentiates into endoderm`],
            correctAnswer: 0,
            explanation: `The notochord is the classic inducer of neurulation: it secretes signals (e.g., Sonic hedgehog) that instruct the overlying ectoderm to become the neural plate/tube. Remove the inducer and the induced structure fails to form. The neural plate is ectodermal (not mesodermal), and removing an inducer causes loss, not duplication, of the structure.`
          },
          {
            question: `A patient is born with the adrenal cortex intact but a defective adrenal medulla. From a developmental standpoint, which other tissue is most likely affected by the same underlying defect?`,
            options: [`Melanocytes, because both derive from neural crest (ectoderm)`, `Skeletal muscle, because both derive from mesoderm`, `Liver, because both derive from endoderm`, `Kidney tubules, because both derive from mesoderm`],
            correctAnswer: 0,
            explanation: `The adrenal medulla and melanocytes are both neural crest derivatives (ectoderm), so a neural-crest defect could affect both. The adrenal *cortex*, in contrast, is mesodermal — which is the trap behind the muscle and kidney options. Liver is endoderm. This "split adrenal gland" is a high-yield discrimination point.`
          },
          {
            question: `During cleavage, the total volume of the early embryo stays roughly constant even though cell number rises sharply. What is the direct consequence most relevant to development?`,
            options: [`The nuclear-to-cytoplasmic ratio increases as cells get smaller`, `Each cell accumulates more cytoplasm, increasing totipotency`, `The embryo grows substantially in mass before implantation`, `DNA replication halts to conserve resources`],
            correctAnswer: 0,
            explanation: `Cleavage is mitosis without growth: the same cytoplasm is partitioned into more, smaller cells, so the nuclear:cytoplasmic ratio rises — a prerequisite for normal gene-expression control later. Cells get *less* cytoplasm (not more), the embryo does not gain mass during cleavage, and DNA replication continues every cycle (that's how cell number rises).`
          }
        ]
      }
    },
    {
      id: 'ap3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Embryology

<details>
<summary><b>Example 1: Assign organs to germ layers</b></summary>

**Question:** Classify each by germ layer: (a) epidermis, (b) cardiac muscle, (c) pancreas, (d) adrenal medulla, (e) lining of the small intestine.

**Solution:**
- (a) Epidermis → **ectoderm**.
- (b) Cardiac muscle → **mesoderm** (all muscle/cardiovascular).
- (c) Pancreas → **endoderm** (gut-derived glandular organ).
- (d) Adrenal medulla → **ectoderm** (neural crest!) — note the cortex is mesoderm.
- (e) Intestinal lining → **endoderm**. ✓

**MCAT note:** When two parts of one organ split layers (adrenal gland; teeth: enamel = ectoderm vs. dentin/pulp = neural-crest mesenchyme), that's exactly where exams probe.
</details>

<details>
<summary><b>Example 2: Distinguish morula, blastocyst, and inner cell mass</b></summary>

**Question:** A specimen is a hollow sphere with a fluid cavity, an outer cell layer, and a clump of cells at one pole. Name the stage, the outer layer, and the inner clump, and give each one's fate.

**Solution:**
1. Hollow + fluid cavity + two cell populations = **blastocyst** (not the solid morula).
2. Outer layer = **trophoblast** → placenta/chorion; secretes hCG.
3. Inner clump = **inner cell mass** → the embryo proper (and is the source of embryonic stem cells). ✓

**High-yield connection:** Implantation is mediated by the trophoblast, not the inner cell mass — a common point of confusion.
</details>

<details>
<summary><b>Example 3: Predict an induction-experiment outcome</b></summary>

**Question:** A second notochord is transplanted beneath the ectoderm on the flank of an early embryo. Predict the developmental outcome and state the principle.

**Solution:**
1. The transplanted notochord acts as an ectopic **inducer**.
2. The overlying flank ectoderm, receiving the inducing signal, forms a **second neural tube** (a secondary axis).
3. Principle: **induction** — competent tissue adopts a new fate when exposed to an inducing signal from a neighbor. ✓

**Interpretation:** This is the logic of the classic Spemann–Mangold organizer experiment. Removing an inducer → structure absent (Example/quiz above); adding one ectopically → structure duplicated.
</details>`
    },
    {
      id: 'ap3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Fertilization → Cleavage (no growth) → Morula → Blastocyst (ICM + trophoblast) → Gastrulation → Neurulation.
- Germ layers: **Ecto** (skin/nervous), **Meso** (muscle/bone/blood/gonads/adrenal cortex), **Endo** (GI & respiratory lining + liver/pancreas/thyroid).
- Neural crest (ectoderm) → PNS, melanocytes, **adrenal medulla** — the split-adrenal trap.
- Induction: the notochord induces the neural plate (remove → no neural tube; add → extra one).
- Trophoblast → placenta + hCG; inner cell mass → embryo.`
    }
  ]
};
