export const mcatReproPart1Data = {
  topicSlug: 'mcat-anatomy-physiology-reproductive-mcat',
  sections: [
    {
      id: 'rep1-intro',
      type: 'text' as const,
      content: `# Reproductive System — Deep Dive

**Part 1 of 4 — Gametogenesis: Meiosis Applied**

### The Common Blueprint

Both sexes convert diploid germ cells into haploid gametes through meiosis, but the two programs differ radically in **timing**, **yield**, and **symmetry**. Those three differences are the highest-yield facts in this topic.

### Spermatogenesis (continuous from puberty, about two months per cycle)

Location: the **seminiferous tubules** of the testes, which sit in the scrotum because sperm production requires a temperature **2-4 degrees C below core body temperature**.

<!-- yield:low -->
- One full cycle, from spermatogonium to spermatozoon, takes about 64 days.
<!-- /yield -->

1. **Spermatogonium** (2n) — diploid stem cell; divides mitotically to self-renew AND to produce cells committed to meiosis
2. **Primary spermatocyte** (2n, 4c after S phase) — undergoes **meiosis I**
3. **Two secondary spermatocytes** (n, 2c) — undergo **meiosis II** quickly
4. **Four spermatids** (n, 1c) — haploid but round and immature
5. **Spermiogenesis**: spermatids remodel into **spermatozoa** (no further division)

- **Sertoli cells** (support cells inside the tubules): nurse developing sperm, form the blood-testis barrier, respond to FSH, secrete inhibin
- **Leydig cells** (interstitium, between tubules): respond to LH and synthesize **testosterone**

### Oogenesis (discontinuous, front-loaded, asymmetric)

1. **Oogonia** (2n) multiply mitotically ONLY during fetal life
2. All become **primary oocytes** (2n, 4c) before birth and arrest in **prophase I** — they wait there for 12 to 50 years
3. Each month after puberty, ovulatory hormones drive one primary oocyte to finish meiosis I → one **secondary oocyte** (n, 2c) plus a tiny **first polar body**
4. The secondary oocyte arrests in **metaphase II** and is ovulated in that state
5. Meiosis II is completed **only if a sperm fertilizes the oocyte**, yielding the ovum plus a second polar body

**Unequal cytokinesis** conserves cytoplasm: one primary oocyte → **one ovum** (plus 2-3 polar bodies that degenerate), while one primary spermatocyte → **four sperm**.

### Ploidy and Chromatid Bookkeeping

| Cell | Ploidy | DNA content | Arrested? |
|------|--------|-------------|-----------|
| Spermatogonium / oogonium | 2n | 2c | No |
| Primary spermatocyte / oocyte | 2n | 4c | Oocyte: prophase I |
| Secondary spermatocyte / oocyte | n | 2c | Oocyte: metaphase II |
| Spermatid / ovum | n | 1c | No |

Note the trap: a secondary oocyte is **haploid** even though each chromosome still has two sister chromatids (n, 2c). Homolog separation in meiosis I is what halves ploidy.

### Sperm Architecture

- **Head**: condensed haploid nucleus capped by the **acrosome** (Golgi-derived vesicle of digestive enzymes for penetrating the egg's coats)
- **Midpiece**: packed with **mitochondria** that power the flagellum (sperm burn fructose supplied by seminal fluid)
- **Tail**: a single flagellum (9+2 microtubule axoneme)`
    },
    {
      id: 'rep1-worked',
      type: 'text' as const,
      content: `### Worked Example — Counting Cells and Chromatids in a Fertility Passage

**Problem 1.** A researcher biopsies a seminiferous tubule and finds a cell that has completed meiosis I but not meiosis II. Human somatic cells have 46 chromosomes.

- **(a)** What type of cell is this?
- **(b)** How many chromosomes and chromatids does it contain?
- **(c)** How many spermatids will it produce, and how many sperm does one primary spermatocyte yield?

**(a) Cell type.** Meiosis I is finished and meiosis II is not, so this is a **secondary spermatocyte**.

**(b) Counts.** Meiosis I separated the homologs, so the cell is haploid: **23 chromosomes**, each still composed of two sister chromatids → **46 chromatids** (n, 2c).

**(c) Yield.** Meiosis II splits it into **2 spermatids**. Its sibling secondary spermatocyte gives the other 2, so one primary spermatocyte yields **4 sperm**.

**Problem 2.** The researcher also examines the most mature germ cells present in the ovary of a fetus at 7 months gestation. Human somatic cells have 46 chromosomes.

- **(a)** What are these cells, and at what stage are they arrested?
- **(b)** How many chromosomes and chromatids does each one contain?
- **(c)** If one is ever ovulated and fertilized, how many functional gametes will it yield?

**(a) Cell type.** By 7 months the most mature germ cells have entered meiosis I and stalled there: these are **primary oocytes arrested in prophase I**.

**(b) Counts.** Every primary oocyte has already replicated its DNA but has not yet separated its homologs: **46 chromosomes, 92 chromatids** (2n, 4c).

**(c) Yield.** Exactly **1 ovum**. The polar bodies receive half the chromosomes but almost no cytoplasm, and they degenerate.

**Problem 3.** Men treated with drugs that raise scrotal temperature show reduced sperm counts.

- **(a)** Why does warming the scrotum lower the sperm count?
- **(b)** What happens to these men's secondary sex characteristics, and why?

**(a) Temperature-sensitive steps.** Spermatogenesis requires the scrotum's 2-4 degrees C below core temperature; warming impairs the meiotic and spermiogenic steps.

**(b) Androgens spared.** Testosterone production by Leydig cells is far less temperature-sensitive, so these men typically keep normal secondary sex characteristics — a classic dissociation the MCAT likes.`
    },
    {
      id: 'rep1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Gametogenesis** 🎯`,
      exercise: {
        questions: [
          {
            question: `At what stage is the oocyte arrested at the moment of ovulation?`,
            options: [`Prophase I`, `Anaphase I`, `Metaphase II`, `Telophase II`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Primary oocytes arrest in prophase I from fetal life; the LH surge drives completion of meiosis I, and the resulting secondary oocyte arrests in METAPHASE II. It stays there until fertilization triggers completion of meiosis II. Prophase I is the pre-ovulation arrest; anaphase I would mean meiosis I is still under way, and telophase II would mean meiosis II has nearly finished, which happens only after fertilization.`
          },
          {
            question: `In a species whose somatic cells have 2n = 8 chromosomes, which describes the DNA of a secondary spermatocyte?`,
            options: [`4 chromosomes, each with two sister chromatids`, `8 chromosomes, each with two sister chromatids`, `4 chromosomes, each a single chromatid`, `8 chromosomes, each a single chromatid`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Meiosis I separates homologs, halving ploidy while leaving sister chromatids attached, so a secondary spermatocyte holds n = 4 chromosomes of two chromatids each, 8 chromatids in all (n, 2c). Eight chromosomes of two chromatids each is the primary spermatocyte (2n, 4c) before meiosis I. Four single-chromatid chromosomes is a spermatid, after meiosis II splits the sisters (n, 1c). Eight single-chromatid chromosomes is an unreplicated diploid cell such as a spermatogonium (2n, 2c).`
          },
          {
            question: `Which cell type directly synthesizes testosterone in response to LH?`,
            options: [`Sertoli cells within the seminiferous tubules`, `Spermatogonia along the basement membrane`, `Gonadotrophs of the anterior pituitary`, `Leydig cells in the testicular interstitium`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Leydig (interstitial) cells carry LH receptors and make testosterone. Sertoli cells are the FSH targets that nurture sperm and secrete inhibin — swapping the two is the most common error. The pituitary makes LH itself, and spermatogonia are the stem cells being supported, not endocrine cells.`
          },
          {
            question: `In oogenesis, each meiotic division gives one daughter cell almost all of the cytoplasm. What is the main consequence of this asymmetry?`,
            options: [`Each polar body stays diploid and is later reabsorbed`, `One well-stocked ovum, with polar bodies that degenerate`, `Two functional eggs, one from each meiotic division`, `Four unequal eggs, all of which can be fertilized`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Unequal cytokinesis concentrates the cytoplasm, and its nutrients, in a single ovum; the polar bodies receive a haploid set of chromosomes but almost no cytoplasm and degenerate. The polar bodies are haploid, not diploid — they are discarded for lack of cytoplasm, not for their ploidy. Neither division yields a second egg, since each sheds a polar body, and "four gametes" is the spermatogenesis count misapplied to the oocyte.`
          },
          {
            question: `The midpiece of a mature spermatozoon is densely packed with mitochondria. The most direct functional reason is:`,
            options: [`Mitochondria carry the paternal chromosomes into the egg at fertilization`,`Mitochondria store the digestive enzymes needed to penetrate the zona pellucida`, `Mitochondria supply the ATP that powers flagellar motility`, `Mitochondria maintain the low temperature required for sperm survival`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The flagellum's dynein motors consume large amounts of ATP, generated by midpiece mitochondria (fueled largely by fructose from seminal fluid). Penetration enzymes are in the ACROSOME, a Golgi-derived cap on the head, and the paternal chromosomes travel in the head's nucleus. Sperm mitochondria are generally degraded after fertilization (mitochondrial DNA is maternally inherited), and organelles do not regulate temperature.`
          }
        ]
      }
    },
    {
      id: 'rep1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Spermatogenesis.** Continuous from puberty in the seminiferous tubules, below core temperature; 4 sperm per primary spermatocyte.
- **Sertoli vs. Leydig.** Sertoli cells (FSH target) nurse sperm and secrete inhibin; Leydig cells (LH target) make testosterone.
- **Two oocyte arrests.** Prophase I from fetal life until ovulation, then metaphase II until a sperm triggers meiosis II.
- **Chromatid bookkeeping.** Primary cells are 2n4c, secondary cells n2c, final gametes n1c.

**Common traps**

- **Haploid means one chromatid.** A secondary spermatocyte or oocyte is haploid yet still n2c; meiosis I is what halves ploidy.
- **Four eggs per oocyte.** Unequal cytokinesis gives one ovum plus polar bodies; only spermatogenesis yields four gametes.
- **Enzymes in the midpiece.** Penetration enzymes sit in the acrosome on the head; midpiece mitochondria power the flagellum.
- **Heat lowers testosterone.** Scrotal warming impairs sperm production, but Leydig testosterone and virilization are spared.

<!-- yield:low -->
**Low-yield extras**

- One spermatogenic cycle takes about 64 days.
<!-- /yield -->`
    }
  ]
};
