export const mcatAnatPhysPart2Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'ap2-intro',
      type: 'text' as const,
      content: `# Anatomy & Physiology for the MCAT

**Part 2 of 7 — Reproductive System**

### Male Reproductive System

- **Testes**: Spermatogenesis in seminiferous tubules. **Sertoli cells** form the blood–testis barrier and nourish developing sperm (respond to FSH); **Leydig cells** in the interstitium produce **testosterone** (respond to LH).
- **Epididymis**: Sperm maturation (gain motility) and storage.
- **Vas deferens**: Transports sperm to the ejaculatory duct.
- **Seminal vesicles**: **Fructose** (energy for sperm) + prostaglandins.
- **Prostate**: Alkaline fluid (neutralizes acidic vaginal tract).
- **Bulbourethral (Cowper's) glands**: Pre-ejaculate lubrication.

**Spermatogenesis path:** spermatogonium (2n) → primary spermatocyte (2n) → [meiosis I] → secondary spermatocyte (n) → [meiosis II] → spermatid (n) → spermatozoon (n). Spermiogenesis adds the acrosome, flagellum, and midpiece (packed with mitochondria).

### Female Reproductive System

- **Ovaries**: Oogenesis; secrete estrogen and progesterone.
- **Fallopian tubes (oviduct)**: Usual site of **fertilization**.
- **Uterus / endometrium**: Implantation and fetal development; lining shed during menstruation.

**Oogenesis path:** oogonium → primary oocyte (arrested in **prophase I** from before birth) → [completes meiosis I at ovulation] → secondary oocyte (arrested in **metaphase II**) + first polar body → [completes meiosis II only if fertilized] → ovum + second polar body. Asymmetric division conserves cytoplasm for the egg.

### Spermatogenesis vs. Oogenesis

| Feature | Spermatogenesis | Oogenesis |
|---------|-----------------|-----------|
| Products per meiosis | 4 functional sperm | 1 ovum + 2–3 polar bodies |
| Timing | Continuous from puberty | Cyclical; arrests prophase I & metaphase II |
| Cytoplasm division | Equal | Unequal (egg keeps it) |
| Completion | ~64 days, continuous | Finished only if fertilized |

### Menstrual Cycle (~28 days)

| Phase | Days | Hormones | Events |
|-------|------|----------|--------|
| Menstruation | 1–5 | Estrogen & progesterone low | Endometrium shed |
| Follicular | 1–13 | FSH → estrogen ↑ | Follicle matures, endometrium proliferates |
| Ovulation | ~Day 14 | **LH surge** | Secondary oocyte released |
| Luteal | 15–28 | Progesterone ↑ (corpus luteum) | Endometrium maintained (secretory) |

\`\`\`
Estrogen:   low ──rising──▲(peak)──┐ (LH surge) ──── moderate (luteal)
LH/FSH:     baseline ──────────────▲▲ surge ──────── decline
Endometrium: shed → proliferative → ───── secretory ─────
\`\`\`

### MCAT Key Fact: The Estrogen → LH Surge (Positive Feedback)

- During most of the cycle, estrogen exerts **negative feedback** on the hypothalamus/pituitary.
- But when estrogen rises **above a threshold** late in the follicular phase, feedback flips to **positive** → GnRH and LH spike → **LH surge** triggers ovulation. This sign reversal is a favorite MCAT concept.
- After ovulation the ruptured follicle becomes the **corpus luteum**, secreting progesterone (+ some estrogen), which restores negative feedback and maintains the endometrium.

### Pregnancy & hCG

- If fertilization occurs, the implanting blastocyst's trophoblast secretes **hCG**, which mimics LH and **rescues the corpus luteum** so it keeps making progesterone until the placenta takes over (~week 8–12). hCG is the molecule pregnancy tests detect.
- No pregnancy → corpus luteum degenerates → progesterone falls → menstruation.

**Clinical correlations:** Ectopic pregnancy (implantation in the fallopian tube — a surgical emergency); polycystic ovary syndrome (anovulation, elevated LH:FSH ratio); the combined oral contraceptive uses estrogen + progestin to maintain negative feedback, suppressing the FSH/LH surge and preventing ovulation.`
    },
    {
      id: 'ap2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Reproductive System** 🎯`,
      exercise: {
        questions: [
          {
            question: `A combined oral contraceptive delivers steady estrogen + progestin throughout the cycle. The most direct reason it prevents pregnancy is that it:`,
            options: [`Maintains negative feedback on the pituitary, suppressing the LH surge and preventing ovulation`, `Causes positive feedback that prematurely depletes all follicles`, `Directly blocks fertilization in the fallopian tube`, `Stimulates the corpus luteum to overproduce progesterone`],
            correctAnswer: 0,
            explanation: `Constant exogenous estrogen/progestin keeps hypothalamic–pituitary feedback in the *negative* mode, so the mid-cycle estrogen threshold that normally flips feedback to positive is never reached. Without the LH surge, no ovulation occurs. The "positive feedback" and "block fertilization" options describe the wrong mechanism — the pill works upstream by preventing egg release, not by acting at the tube.`
          },
          {
            question: `In an IVF clinic, a researcher examines an oocyte arrested at metaphase II that has just been penetrated by a sperm. What completes next, and what is the immediate product?`,
            options: [`Meiosis II completes, yielding a mature ovum and a second polar body`, `Meiosis I completes, yielding a secondary oocyte and first polar body`, `Mitosis begins immediately, producing two identical daughter cells`, `Meiosis II completes, yielding two functional ova`],
            correctAnswer: 0,
            explanation: `The secondary oocyte is arrested in metaphase II and only finishes meiosis II upon fertilization, producing one ovum (keeping the cytoplasm) and a small second polar body. Meiosis I already finished at ovulation, so that option is too early. Oogenesis never yields two functional ova — unequal division conserves resources for a single egg.`
          },
          {
            question: `A pregnant patient's blood is sampled at week 6. Which finding best explains why her endometrium has NOT been shed despite the time elapsed since her last period?`,
            options: [`Trophoblast-derived hCG is sustaining the corpus luteum, keeping progesterone high`, `The LH surge is being repeated monthly to maintain the lining`, `FSH is elevated, driving continued endometrial proliferation`, `Calcitonin is preventing endometrial breakdown`],
            correctAnswer: 0,
            explanation: `In pregnancy the blastocyst's trophoblast secretes hCG, an LH analog that rescues the corpus luteum so it continues secreting progesterone — and progesterone maintains the secretory endometrium, preventing menstruation. There is no repeated monthly LH surge during pregnancy, FSH is suppressed, and calcitonin regulates calcium, not the endometrium — all distractors.`
          }
        ]
      }
    },
    {
      id: 'ap2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Reproductive Physiology

<details>
<summary><b>Example 1: Map hormones to phases</b></summary>

**Question:** A blood panel on cycle day 22 shows high progesterone, moderate estrogen, and low LH/FSH. Identify the phase and the dominant structure producing these hormones.

**Solution:**
1. High progesterone with low gonadotropins points to the **luteal phase** (days ~15–28).
2. The structure responsible is the **corpus luteum**, formed from the ruptured follicle after ovulation.
3. Progesterone exerts negative feedback → low LH/FSH; it maintains the secretory endometrium. ✓

**MCAT note:** If progesterone were *low* with moderate rising estrogen and an impending LH spike, you'd instead be in the late follicular/peri-ovulatory window.
</details>

<details>
<summary><b>Example 2: Why does the LH surge happen?</b></summary>

**Question:** Estrogen suppresses LH for most of the cycle, yet LH spikes just before ovulation. Explain the apparent contradiction.

**Solution:**
1. At low–moderate levels, estrogen gives **negative feedback** on the hypothalamus/pituitary → keeps LH low.
2. Late in the follicular phase, the dominant follicle drives estrogen **above a threshold**.
3. Above that threshold, feedback **reverses to positive** → GnRH/LH surge → ovulation. ✓

**High-yield connection:** This is one of the few clear examples of physiological positive feedback (others: oxytocin in labor, the action potential's Na⁺ phase). Recognize the *sign reversal*, not just "estrogen high."
</details>

<details>
<summary><b>Example 3: Trace a sperm and count chromosomes</b></summary>

**Question:** Starting from a diploid (2n = 46) spermatogonium, give the ploidy and chromosome number of the primary spermatocyte, secondary spermatocyte, and spermatid.

**Solution:**
- Primary spermatocyte: **2n = 46** (before meiosis I; DNA replicated but not divided).
- Secondary spermatocyte: **n = 23** (after meiosis I; homologs separated, sister chromatids still joined).
- Spermatid: **n = 23** (after meiosis II; sister chromatids separated). ✓

**Interpretation:** Meiosis I reduces ploidy (2n→n); meiosis II separates sister chromatids without changing ploidy. One spermatogonium yields **4** spermatids — contrast with oogenesis (1 ovum + polar bodies).
</details>`
    },
    {
      id: 'ap2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Follicular phase: FSH + estrogen (follicle grows). Luteal phase: progesterone (corpus luteum).
- LH surge → ovulation, driven by **positive feedback** when estrogen crosses a threshold.
- Sertoli cells (FSH) support sperm; Leydig cells (LH) make testosterone.
- Spermatogenesis → 4 sperm (equal division); oogenesis → 1 ovum + polar bodies (unequal). Oocyte arrests in prophase I, then metaphase II until fertilized.
- No pregnancy → corpus luteum dies → progesterone drops → menstruation. Pregnancy → hCG rescues the corpus luteum.`
    }
  ]
};
