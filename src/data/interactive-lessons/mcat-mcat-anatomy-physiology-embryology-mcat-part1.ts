export const mcatEmbryoPart1Data = {
  topicSlug: 'mcat-anatomy-physiology-embryology-mcat',
  sections: [
    {
      id: 'emb1-intro',
      type: 'text' as const,
      content: `# Early Embryology: Fertilization to Germ Layers

**Part 1 of 2 — Fertilization, Cleavage & Implantation**

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

The sperm-triggered Ca²⁺ wave is also the **egg-activation signal**: it releases the oocyte from its metaphase II arrest so it completes **meiosis II**; only then do the two pronuclei combine their chromosomes on the first spindle, forming the diploid **zygote**.

### Cleavage: Division Without Growth

Cleavage is a series of **rapid mitotic divisions with NO overall growth**: the embryo stays roughly the same size while cell number climbs, so individual cells (**blastomeres**) get progressively **smaller** and the **nuclear-to-cytoplasmic (N:C) ratio rises**. Cell cycles are fast because G1 and G2 are largely skipped.

- **Indeterminate cleavage**: blastomeres remain capable of forming a complete organism if separated — the basis of **monozygotic twinning**. Early human blastomeres are indeterminate.
- **Determinate cleavage**: blastomere fates are already committed; a separated cell cannot form a whole embryo.

### Morula → Blastocyst → Implantation

- **Morula**: a solid ball of cells, still inside the zona pellucida.
- **Blastocyst**: a fluid-filled cavity (blastocoel) appears, dividing cells into two lineages you must keep straight:
  - **Trophoblast** (outer ring) → placenta (fetal portion) and chorion; secretes **hCG**
  - **Inner cell mass (ICM)** → the embryo proper (plus amnion and yolk sac)
- **Implantation** (about one week after fertilization): the blastocyst hatches from the zona and the trophoblast burrows into the **endometrium**. Trophoblast-derived **hCG** maintains the corpus luteum (so progesterone keeps the endometrium intact) and is the hormone detected by pregnancy tests.

<!-- yield:low -->
- Day counts after fertilization: morula ~day 3-4, blastocyst ~day 5, hatching ~day 5-6, implantation ~days 6-10.
<!-- /yield -->

### Twinning

- **Dizygotic (fraternal)** twins: two eggs, two sperm — always two chorions and two amnions; genetically ordinary siblings.
- **Monozygotic (identical)** twins: one zygote splits. Concept-level rule: the **later** the split, the **more structures are shared**. A very early split (before trophoblast commitment) gives separate chorions and amnions; a split after the blastocyst forms gives a shared chorion; a still later split gives a shared chorion AND amnion.`
    },
    {
      id: 'emb1-worked',
      type: 'text' as const,
      content: `### Worked Example — Reading a Fertilization Experiment

**Problem 1.** In Condition A, mouse oocytes are mixed with sperm taken straight from the epididymis: almost no eggs are fertilized. In Condition B, sperm first incubated for several hours in oviduct-like fluid fertilize untreated oocytes normally.

- **(a)** Which preparatory step have the Condition A sperm missed?
- **(b)** Which event at the zona pellucida therefore fails?
- **(c)** Is the defect in the sperm or in the egg, and how does Condition B show it?

**(a) The missing step.** Capacitation: biochemical maturation (membrane changes, hyperactivated motility) that happens normally in the female tract (in a dish, in capacitating medium). The Condition A sperm never had that exposure.

**(b) The zona step.** Without capacitation, sperm cannot undergo a productive acrosome reaction at the zona pellucida, so no enzymes digest a path through it and no sperm reaches the oocyte membrane.

**(c) Sperm or egg?** The sperm. Untreated oocytes are fertilized normally once the sperm have been incubated (Condition B), so the eggs are competent; only the sperm's readiness differs.

**Problem 2.** In Condition C, sperm prepared as in Condition B are added to oocytes pretreated with a drug that blocks Ca²⁺ release from the endoplasmic reticulum. Fertilization occurs, but polyspermy rises sharply and the eggs arrest early.

- **(a)** Which block to polyspermy depends on the Ca²⁺ the drug withholds?
- **(b)** Does the other block still work? How do extra sperm get in?
- **(c)** Why do these eggs fail to develop even though fertilization occurred?

**(a) The block that needs Ca²⁺.** The slow block. The Ca²⁺ wave triggers the cortical reaction: cortical granules exocytose enzymes that harden the zona into the fertilization envelope. With no wave, the envelope never forms.

**(b) The fast block.** It still fires, because membrane depolarization does not need the Ca²⁺ wave. But it is transient, so sperm arriving after it fades get in. Fast block intact, slow block broken: the MCAT's test that the two blocks are separate mechanisms.

**(c) Why development stops.** Each extra sperm adds a paternal chromosome set, so the zygote is triploid or worse (3n = 69 in a human) and nonviable. The Ca²⁺ wave is also how sperm fusion activates the egg to finish meiosis II, so blocking it stalls development too.`
    },
    {
      id: 'emb1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Fertilization, Cleavage & Implantation** 🎯`,
      exercise: {
        questions: [
          {
            question: `Early in pregnancy, a woman takes a drug that blocks the receptor through which hCG acts on the corpus luteum. What is the most likely result?`,
            options: [`The blastocyst can no longer hatch from the zona pellucida`, `Cleavage halts because the blastomeres stop dividing`, `Progesterone falls as the corpus luteum regresses; the lining sheds`, `The pituitary releases an LH surge and a second egg ovulates`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Trophoblast hCG is what rescues the corpus luteum after implantation. Block its receptor and the corpus luteum regresses as it would in a non-pregnant cycle, progesterone falls, and the endometrium the embryo is implanted in breaks down. Hatching from the zona and cleavage both happen before implantation and do not depend on hCG. Blocking hCG's receptor does not by itself produce a new LH surge: the result is loss of luteal progesterone, not a second ovulation.`
          },
          {
            question: `Which statement about cleavage-stage divisions is correct?`,
            options: [`Cell number increases while total embryo size stays roughly constant`, `Each blastomere grows to full size before dividing, so the embryo enlarges steadily`, `Cleavage divisions are meiotic, halving the chromosome number each round`, `Cleavage begins only after the blastocyst has implanted`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Cleavage is rapid mitosis WITHOUT growth: G1/G2 are minimal, cytoplasm is partitioned among more and more cells, so blastomeres shrink and the N:C ratio climbs. The divisions are mitotic (diploid throughout), and cleavage happens in the fallopian tube DURING transit — days before implantation.`
          },
          {
            question: `In the blastocyst, the inner cell mass and trophoblast give rise, respectively, to:`,
            options: [`The chorion and fetal placenta; the embryo proper`, `The yolk sac and the amnion; the maternal decidua`, `The maternal decidua; the yolk sac and the amnion`, `The embryo proper; the chorion and fetal placenta`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `The ICM becomes the embryo itself (plus amnion and yolk sac contributions), while the outer trophoblast becomes the chorion and the fetal side of the placenta and secretes hCG. Reversing the two lineages is the classic error. The amnion and yolk sac come from the ICM, not the trophoblast, and the decidua is MATERNAL uterine tissue that neither embryonic lineage builds — the trophoblast invades it.`
          },
          {
            question: `Monozygotic twins are found to share a single chorion but have two separate amnions. Compared with monozygotic twins who have two chorions and two amnions, the single-chorion twins' embryo most likely split:`,
            options: [`Earlier, at the two-cell stage before the morula formed`, `Later, after the trophoblast lineage was set`, `At fertilization, when two sperm entered one egg`, `Never, since one shared chorion means dizygotic twins`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `The rule is: the later the split, the more extraembryonic structures are shared. Splitting after the blastocyst's trophoblast (chorion precursor) is set means both embryos sit inside ONE chorion; because they split before amnion formation, each still gets its own amnion. An earlier split gives fully separate membranes. Dizygotic twins always have two chorions, and dispermy produces a nonviable triploid, not twins.`
          },
          {
            question: `A human blastocyst reaches the uterus on schedule and develops normally, but it cannot hatch from its zona pellucida. The most likely consequence is:`,
            options: [`Normal implantation, because the zona itself adheres to the endometrium`, `Polyspermy, because the zona can no longer exclude late-arriving sperm`, `Failed implantation, because the trophoblast cannot contact the endometrium`, `Implantation in the fallopian tube, because the trapped embryo stalls there`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `The zona pellucida surrounds the embryo through cleavage and the morula stage, and its non-adhesive coat keeps the embryo from implanting too early. Once it reaches the uterus, the blastocyst must hatch so its outer trophoblast can attach to and invade the endometrium (implantation, about a week after fertilization). A blastocyst still trapped in its zona cannot implant. The zona does not adhere to the endometrium; polyspermy is irrelevant because fertilization finished days earlier; and an embryo already in the uterus cannot implant back in the tube.`
          }
        ]
      }
    },
    {
      id: 'emb1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Ampulla, after capacitation.** Fertilization happens in the ampulla; sperm must capacitate, then undergo the acrosome reaction.
- **Two polyspermy blocks.** Fast block = transient depolarization; slow block = Ca²⁺-triggered cortical reaction, a permanent envelope.
- **Cleavage without growth.** Rapid mitoses shrink blastomeres and raise the N:C ratio; indeterminate cleavage allows identical twins.
- **Two blastocyst lineages.** Trophoblast invades the endometrium (~1 week), forms placenta and makes hCG for the corpus luteum; ICM: embryo.

**Common traps**

- **Fertilizing in the uterus.** Fertilization happens in the ampulla of the fallopian tube; the uterus is where the blastocyst implants.
- **Fast block as permanent.** Depolarization is transient; only the Ca²⁺-driven cortical reaction keeps extra sperm out for good.
- **Swapping the lineages.** The trophoblast builds chorion and placenta; the inner cell mass builds the embryo, amnion and yolk sac.
- **Early split, shared membranes.** The LATER a monozygotic split, the more membranes the twins share; an early split shares none.

<!-- yield:low -->
**Low-yield extras**

- Exact day counts after fertilization: morula ~day 3-4, blastocyst ~day 5, hatching ~day 5-6, implantation ~days 6-10.
<!-- /yield -->`
    }
  ]
};
