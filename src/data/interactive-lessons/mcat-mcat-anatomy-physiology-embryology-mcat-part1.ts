export const mcatEmbryoPart1Data = {
  topicSlug: 'mcat-anatomy-physiology-embryology-mcat',
  sections: [
    {
      id: 'emb1-intro',
      type: 'text' as const,
      content: `# Embryology — Deep Dive

**Part 1 of 4 — Fertilization, Cleavage & Implantation**

### Fertilization: Where and How

Fertilization normally occurs in the **ampulla** of the fallopian (uterine) tube — the widest section, closest to the ovary — NOT in the uterus. Before a sperm can fertilize anything, two preparatory events must occur:

1. **Capacitation**: biochemical maturation of sperm in the female reproductive tract (membrane changes that destabilize the acrosomal cap and hyperactivate motility). Freshly ejaculated sperm cannot fertilize.
2. **Acrosome reaction**: on contact with the zona pellucida (the glycoprotein coat around the oocyte), the sperm's acrosome releases hydrolytic enzymes that digest a path through the zona so the sperm membrane can fuse with the oocyte membrane.

### Blocks to Polyspermy

Fertilization by more than one sperm produces a nonviable triploid zygote, so the egg mounts two defenses:

| Block | Timing | Mechanism | Duration |
|-------|--------|-----------|----------|
| Fast block | Seconds | **Depolarization** of the oocyte membrane (ion influx) repels additional sperm | Transient |
| Slow block | Minutes | **Cortical reaction**: Ca²⁺ wave triggers cortical granule exocytosis; enzymes harden the zona pellucida into the **fertilization envelope** | Permanent |

Sperm–egg fusion also triggers the oocyte to complete **meiosis II** (it had been arrested in metaphase II); only then do the pronuclei fuse to form the diploid **zygote**.

### Cleavage: Division Without Growth

Cleavage is a series of **rapid mitotic divisions with NO overall growth**: the embryo stays roughly the same size while cell number climbs, so individual cells (**blastomeres**) get progressively **smaller** and the **nuclear-to-cytoplasmic (N:C) ratio rises**. Cell cycles are fast because G1 and G2 are largely skipped.

- **Indeterminate cleavage**: blastomeres remain capable of forming a complete organism if separated — the basis of **monozygotic twinning**. Early human blastomeres are indeterminate.
- **Determinate cleavage**: blastomere fates are already committed; a separated cell cannot form a whole embryo.

### Morula → Blastocyst → Implantation

- **Morula** (~day 3-4): a solid ball of cells, still inside the zona pellucida.
- **Blastocyst** (~day 5): a fluid-filled cavity (blastocoel) appears, dividing cells into two lineages you must keep straight:
  - **Trophoblast** (outer ring) → placenta (fetal portion) and chorion; secretes **hCG**
  - **Inner cell mass (ICM)** → the embryo proper (plus amnion and yolk sac)
- **Implantation** (~day 6-10): the blastocyst hatches from the zona and the trophoblast burrows into the **endometrium**. Trophoblast-derived **hCG** maintains the corpus luteum (so progesterone keeps the endometrium intact) and is the hormone detected by pregnancy tests.

### Twinning

- **Dizygotic (fraternal)** twins: two eggs, two sperm — always two chorions and two amnions; genetically ordinary siblings.
- **Monozygotic (identical)** twins: one zygote splits. Concept-level rule: the **later** the split, the **more structures are shared**. A very early split (before trophoblast commitment) gives separate chorions and amnions; a split after the blastocyst forms gives a shared chorion; a still later split gives a shared chorion AND amnion.`
    },
    {
      id: 'emb1-worked',
      type: 'text' as const,
      content: `### Worked Example — Reading a Fertilization Experiment

**Passage-style problem.** Researchers incubate mouse oocytes with sperm under three conditions and score the percentage of eggs that are fertilized by exactly one sperm (monospermic), by multiple sperm (polyspermic), or not at all.

- **Condition A**: sperm taken directly from the epididymis, never exposed to female-tract fluid → almost no fertilization at all.
- **Condition B**: capacitated sperm + oocytes pretreated with a drug that blocks Ca²⁺ release from the endoplasmic reticulum → fertilization occurs, but the polyspermy rate is dramatically elevated and eggs arrest early.
- **Condition C**: capacitated sperm + untreated oocytes → high monospermic fertilization.

**Question 1 — Why does Condition A fail?** The sperm were never **capacitated**. Without the membrane changes acquired in the female tract, sperm cannot undergo a productive acrosome reaction at the zona pellucida, so they cannot penetrate. The defect is in the SPERM's readiness, not the egg.

**Question 2 — Which block is broken in Condition B, and why is polyspermy the result?** The drug prevents the intracellular **Ca²⁺ wave**, which is the trigger for the **cortical reaction** (the slow block). Without cortical granule exocytosis, the zona pellucida never hardens into a fertilization envelope. The fast electrical block still fires, but it is transient — so late-arriving sperm get in. This dissociation (fast block intact, slow block broken) is exactly how the MCAT tests whether you know the two blocks are separate mechanisms.

**Question 3 — Predict the ploidy problem.** Polyspermic eggs receive extra paternal chromosome sets (e.g., triploid, 3n = 69 in humans). Extra centrosomes also produce multipolar spindles, so cleavage divisions missegregate chromosomes and the embryo arrests — which is why the eggs in Condition B fail to develop even though "fertilization" occurred.`
    },
    {
      id: 'emb1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Fertilization, Cleavage & Implantation** 🎯`,
      exercise: {
        questions: [
          {
            question: `The slow block to polyspermy is best described as:`,
            options: [`Depolarization of the oocyte plasma membrane immediately upon sperm binding`, `Completion of meiosis II by the oocyte`, `A calcium-triggered cortical reaction that hardens the zona pellucida into a fertilization envelope`, `Digestion of the zona pellucida by acrosomal enzymes`],
            correctAnswer: 2,
            explanation: `The slow block is the cortical reaction: a Ca²⁺ wave causes cortical granules to exocytose enzymes that crosslink and harden the zona into an impenetrable fertilization envelope. Depolarization is the FAST block (transient, seconds). Completing meiosis II is triggered by fertilization but does not exclude sperm, and acrosomal digestion is how sperm get IN, not how they are kept out.`
          },
          {
            question: `Which statement about cleavage-stage divisions is correct?`,
            options: [`Cell number increases while total embryo size stays roughly constant, so each blastomere's nuclear-to-cytoplasmic ratio rises`, `Each blastomere grows to full size before dividing, so the embryo enlarges steadily`, `Cleavage divisions are meiotic, halving the chromosome number each round`, `Cleavage cannot begin until after implantation`],
            correctAnswer: 0,
            explanation: `Cleavage is rapid mitosis WITHOUT growth: G1/G2 are minimal, cytoplasm is partitioned among more and more cells, so blastomeres shrink and the N:C ratio climbs. The divisions are mitotic (diploid throughout), and cleavage happens in the fallopian tube DURING transit — days before implantation.`
          },
          {
            question: `In the blastocyst, the inner cell mass and trophoblast give rise, respectively, to:`,
            options: [`The placenta; the embryo proper`, `The zona pellucida; the endometrium`, `The corpus luteum; the chorion`, `The embryo proper; the fetal portion of the placenta and chorion`],
            correctAnswer: 3,
            explanation: `The ICM becomes the embryo itself (plus amnion and yolk sac contributions), while the outer trophoblast becomes the chorion and the fetal side of the placenta and secretes hCG. Choice A reverses the two — the classic error. The zona pellucida is maternal-oocyte-derived coating that is shed, and the corpus luteum is an ovarian structure, not an embryonic one.`
          },
          {
            question: `Monozygotic twins are found to share a single chorion but have two separate amnions. Compared with monozygotic twins who have two chorions and two amnions, the single-chorion twins' embryo most likely split:`,
            options: [`Earlier, before the blastocyst formed`, `Later, after the trophoblast/chorion lineage had already been established`, `At fertilization, when two sperm entered one egg`, `They must actually be dizygotic twins`],
            correctAnswer: 1,
            explanation: `The rule is: the later the split, the more extraembryonic structures are shared. Splitting after the blastocyst's trophoblast (chorion precursor) is set means both embryos sit inside ONE chorion; because they split before amnion formation, each still gets its own amnion. An earlier split gives fully separate membranes. Dizygotic twins always have two chorions, and dispermy produces a nonviable triploid, not twins.`
          },
          {
            question: `Home pregnancy tests detect hCG. Which cells produce this hormone, and what is its physiological role in early pregnancy?`,
            options: [`The corpus luteum produces hCG to stimulate the trophoblast`, `The inner cell mass produces hCG to trigger implantation`, `The trophoblast produces hCG, which maintains the corpus luteum so progesterone secretion continues`, `The maternal hypothalamus produces hCG to suppress ovulation`],
            correctAnswer: 2,
            explanation: `hCG comes from the TROPHOBLAST (later the placenta) and acts like LH on the corpus luteum, rescuing it from degeneration so it keeps secreting progesterone and the endometrium is not shed. The corpus luteum is the TARGET of hCG, not its source — the reversal in choice A is the standard trap.`
          }
        ]
      }
    },
    {
      id: 'emb1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Fertilization happens in the AMPULLA of the fallopian tube; sperm need capacitation first, then the acrosome reaction to cross the zona pellucida
- Two blocks to polyspermy: fast = membrane depolarization (transient); slow = Ca²⁺-triggered cortical reaction → hardened fertilization envelope (permanent)
- Cleavage = rapid mitosis with NO growth: blastomeres shrink, N:C ratio rises; indeterminate cleavage (uncommitted blastomeres) enables monozygotic twinning
- Morula (solid) → blastocyst (hollow): trophoblast → chorion/fetal placenta + hCG; inner cell mass → embryo proper
- Implantation into the endometrium ~day 6-10; trophoblast hCG rescues the corpus luteum → progesterone maintained
- Twinning timing rule: the later a monozygotic split, the more membranes shared (separate everything → shared chorion → shared chorion and amnion)`
    }
  ]
};
