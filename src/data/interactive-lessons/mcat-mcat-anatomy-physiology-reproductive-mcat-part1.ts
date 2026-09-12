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

### Spermatogenesis (continuous from puberty, ~64 days per cycle)

Location: the **seminiferous tubules** of the testes, which sit in the scrotum because sperm production requires a temperature **2-4 degrees C below core body temperature**.

1. **Spermatogonium** (2n) — diploid stem cell; divides mitotically to self-renew AND to produce cells committed to meiosis
2. **Primary spermatocyte** (2n, 4c after S phase) — undergoes **meiosis I**
3. **Two secondary spermatocytes** (n, 2c) — undergo **meiosis II** quickly
4. **Four spermatids** (n, 1c) — haploid but round and immature
5. **Spermiogenesis**: spermatids remodel into **spermatozoa** (no further division)

Support cells:
- **Sertoli cells** (inside tubules): nurse developing sperm, form the blood-testis barrier, respond to FSH, secrete inhibin
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

**Passage-style problem.** A researcher biopsies a seminiferous tubule and a fetal ovary. In the tubule she identifies a cell that has completed meiosis I but not meiosis II. In the ovary (from a fetus at 7 months gestation) she examines the most mature germ cells present. Human somatic cells have 46 chromosomes.

**Question 1 — Identify each cell, with chromosome and chromatid counts.**
The testicular cell is a **secondary spermatocyte**: haploid, so **23 chromosomes**, each still composed of two sister chromatids → **46 chromatids** (n, 2c). The fetal ovarian cells are **primary oocytes arrested in prophase I**: mitotic proliferation of oogonia ends before birth, and every oocyte has already replicated its DNA → **46 chromosomes, 92 chromatids** (2n, 4c).

**Question 2 — How many functional gametes will each lineage yield?**
The secondary spermatocyte completes meiosis II to give **2 spermatids** (its sibling gives the other 2, so one primary spermatocyte yields 4 sperm). The primary oocyte, if it is ever ovulated and fertilized, yields exactly **1 ovum**; the polar bodies receive half the chromosomes but almost no cytoplasm and degenerate.

**Question 3 — The passage notes that men treated with drugs that raise scrotal temperature show reduced sperm counts. Why?**
Spermatogenesis is temperature-sensitive and requires the scrotum's 2-4 degrees C below core temperature; warming impairs the meiotic and spermiogenic steps. Testosterone production by Leydig cells is far less temperature-sensitive, so such patients typically keep normal secondary sex characteristics — a classic dissociation the MCAT likes.`
    },
    {
      id: 'rep1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Gametogenesis** 🎯`,
      exercise: {
        questions: [
          {
            question: `At what stage is the oocyte arrested at the moment of ovulation?`,
            options: [`Prophase I`, `Anaphase I`, `Metaphase II`, `It has completed meiosis and is a mature ovum`],
            correctAnswer: 2,
            explanation: `Primary oocytes arrest in prophase I from fetal life; the LH surge drives completion of meiosis I, and the resulting secondary oocyte arrests in METAPHASE II. It stays there until fertilization triggers completion of meiosis II. Prophase I is the pre-ovulation arrest, and calling the ovulated cell a finished ovum is the classic trap.`
          },
          {
            question: `A cell in the seminiferous tubule is haploid but each of its chromosomes consists of two sister chromatids. This cell is a:`,
            options: [`Secondary spermatocyte`, `Spermatogonium`, `Primary spermatocyte`, `Spermatid`],
            correctAnswer: 0,
            explanation: `Meiosis I separates homologs, halving ploidy while leaving sister chromatids attached — that describes a secondary spermatocyte (n, 2c). A spermatogonium is 2n2c, a primary spermatocyte is 2n4c, and a spermatid is n1c after chromatids separate in meiosis II.`
          },
          {
            question: `Which cell type directly synthesizes testosterone in response to LH?`,
            options: [`Sertoli cells within the seminiferous tubules`, `Spermatogonia`, `Anterior pituitary gonadotrophs`, `Leydig cells in the testicular interstitium`],
            correctAnswer: 3,
            explanation: `Leydig (interstitial) cells carry LH receptors and make testosterone. Sertoli cells are the FSH targets that nurture sperm and secrete inhibin — swapping the two is the most common error. The pituitary makes LH itself, and spermatogonia are the stem cells being supported, not endocrine cells.`
          },
          {
            question: `One primary oocyte that is ovulated and fertilized ultimately gives rise to how many functional gametes, and why?`,
            options: [`Four, because meiosis produces four haploid products`, `One, because unequal cytokinesis shunts nearly all cytoplasm into a single cell`, `Two, one from each meiotic division`, `One, because the other three products are diploid`],
            correctAnswer: 1,
            explanation: `Both meiotic divisions in oogenesis are grossly asymmetric: the polar bodies receive chromosomes but almost no cytoplasm and degenerate, concentrating nutrients in one ovum. The "four products" logic applies to spermatogenesis. The polar bodies are haploid, not diploid — they are discarded for cytoplasm, not ploidy.`
          },
          {
            question: `The midpiece of a mature spermatozoon is densely packed with mitochondria. The most direct functional reason is:`,
            options: [`Mitochondria carry the paternal genome into the egg`, `Mitochondria store the digestive enzymes needed to penetrate the zona pellucida`, `Mitochondria supply the ATP that powers flagellar motility`, `Mitochondria maintain the low temperature required for sperm survival`],
            correctAnswer: 2,
            explanation: `The flagellum's dynein motors consume large amounts of ATP, generated by midpiece mitochondria (fueled largely by fructose from seminal fluid). Penetration enzymes are in the ACROSOME, a Golgi-derived cap on the head. Sperm mitochondria are generally degraded after fertilization (mitochondrial DNA is maternally inherited), and organelles do not regulate temperature.`
          }
        ]
      }
    },
    {
      id: 'rep1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Spermatogenesis: continuous from puberty, ~64 days, 4 sperm per primary spermatocyte, in seminiferous tubules at below-core temperature
- Sertoli cells (FSH target) nurse sperm and secrete inhibin; Leydig cells (LH target) make testosterone
- Oogenesis arrests TWICE: prophase I from fetal life until ovulation, then metaphase II until fertilization — meiosis II finishes only if a sperm arrives
- Unequal cytokinesis → 1 ovum + polar bodies; bookkeeping: primary cells are 2n4c, secondary cells n2c, final gametes n1c
- Sperm design: acrosome (enzymes) on the head, mitochondria in the midpiece, flagellar tail`
    }
  ]
};
