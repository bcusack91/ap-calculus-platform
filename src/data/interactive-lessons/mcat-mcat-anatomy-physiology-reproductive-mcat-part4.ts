export const mcatReproPart4Data = {
  topicSlug: 'mcat-anatomy-physiology-reproductive-mcat',
  sections: [
    {
      id: 'rep4-intro',
      type: 'text' as const,
      content: `# Reproductive System — Deep Dive

**Part 4 of 4 — MCAT Integration: Hormonal Logic, Contraception & Passage Data**

### The Master Skill: Predict the Perturbation

Reproductive passages rarely ask you to recite the axis — they perturb it and ask what happens downstream. Work every problem with the same loop: locate the intervention on the axis → ask which feedback signals rise or fall → propagate.

### Case Library (learn these as worked patterns)

**Combined hormonal contraception (estrogen + progestin).** Steady moderate steroid levels clamp the axis in negative-feedback mode. Estrogen never reaches the sustained high level needed for the positive-feedback flip → **no LH surge → no ovulation**. Progestin adds backup effects: thickened cervical mucus and an endometrium unreceptive to implantation.

**Continuous GnRH agonists (e.g., leuprolide).** The paradox: an agonist that SHUTS DOWN the axis. Gonadotrophs require **pulsatile** GnRH; continuous exposure downregulates GnRH receptors, so LH/FSH and gonadal steroids crash after a brief initial flare. Used to suppress sex steroids (prostate cancer, endometriosis, precocious puberty). Pulsatile administration would do the opposite.

**Anabolic steroid abuse.** Exogenous androgens exert negative feedback on GnRH/LH/FSH. Low LH → Leydig cells idle → LOW intratesticular testosterone (systemic levels are high, local levels fall); low FSH → poor Sertoli support. Result: **testicular atrophy and low sperm count** in a highly virilized patient — the classic dissociation question.

**Menopause.** Follicles (and their granulosa cells) are depleted → estrogen and inhibin fall → **negative feedback is LOST** → **FSH and LH rise** (FSH classically highest). The lab-values trap: students expect low hormones across the board; gonadotropins go UP because the brake, not the pedal, disappeared. Same logic as primary testicular failure.

**IVF logic.** Give FSH analogs to super-ovulate multiple follicles; give a GnRH antagonist (or agonist protocol) to PREVENT a premature endogenous LH surge; then trigger final oocyte maturation on schedule with an hCG injection (the LH analog). Every step is axis arithmetic.

### Reading Hormone Graphs

Given traces of LH, FSH, estrogen, progesterone across a cycle:

- The **LH spike** is the landmark: ovulation is ~day of the spike; the estrogen **peak precedes** it
- **Progesterone elevated** → you are in the luteal phase (only the corpus luteum makes much progesterone)
- **Both estrogen and progesterone low + FSH creeping up** → menstruation/early follicular
- A **small FSH rise at cycle start** reflects reduced inhibin/estrogen after luteolysis — it recruits the next cohort

### Passage Garnish You Should Recognize

- **Ectopic pregnancy**: implantation outside the uterus, usually in the fallopian tube — hCG rises but slower than expected; the tube cannot support placentation
- **Rh incompatibility**: an Rh-negative mother sensitized by a first Rh-positive fetus makes anti-Rh IgG that crosses the placenta in later pregnancies (immune system meets reproduction — a favorite crossover)`
    },
    {
      id: 'rep4-worked',
      type: 'text' as const,
      content: `### Worked Example — A Drug Perturbation Passage

**Passage-style problem.** Researchers test compound X in healthy women with regular cycles. Daily hormone sampling shows that treated subjects have: estrogen rising normally through days 1-12, reaching typical pre-ovulatory peak levels; NO mid-cycle LH spike; progesterone remaining at baseline through day 28; menstrual bleeding at ~day 30. Untreated controls show the normal pattern.

**Step 1 — Locate the block.** Estrogen rises normally, so FSH-driven follicular development and granulosa aromatase are intact — the ovary and the FSH limb work. The missing event is the **LH surge** despite adequate sustained estrogen. Compound X must block the positive-feedback limb: a plausible mechanism is antagonism of estrogen receptors in the hypothalamus/pituitary surge circuitry, or direct suppression of pituitary LH release (e.g., GnRH antagonism at surge time).

**Step 2 — Propagate downstream.** No surge → **no ovulation** → no corpus luteum → **no progesterone rise** — exactly the flat progesterone trace observed. The luteal-phase data are a CONSEQUENCE, not a second drug effect.

**Step 3 — Explain the bleeding.** Without progesterone, the estrogen-primed endometrium eventually breaks down when the follicle's estrogen output wanes — estrogen-withdrawal-type bleeding. Menstruation does not prove ovulation occurred; only a progesterone rise (or a detected LH surge) does.

**Step 4 — Distinguish from continuous GnRH agonist.** A continuous agonist would have suppressed the WHOLE axis: estrogen would stay low from the start because LH/FSH support of the follicle disappears. The normal estrogen rise here excludes that mechanism — always use the earliest abnormal (or normal) trace to localize the lesion.`
    },
    {
      id: 'rep4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Hormonal Logic & Perturbations** 🎯`,
      exercise: {
        questions: [
          {
            question: `Combined oral contraceptives (estrogen + progestin) prevent pregnancy primarily by:`,
            options: [`Blocking sperm capacitation in the female tract`, `Maintaining steady negative feedback that prevents the LH surge, so ovulation never occurs`, `Inducing continuous menstruation that sheds any implanted embryo`, `Raising estrogen high enough to trigger daily LH surges that exhaust the ovary`],
            correctAnswer: 1,
            explanation: `Steady moderate steroid levels keep the axis in negative-feedback mode; estrogen never makes the sustained-high excursion that flips to positive feedback, so there is no LH surge and no ovulation. Option D inverts the mechanism — the pill prevents the surge, it does not multiply it. Mucus thickening is a secondary progestin effect, and the pill does not act by continuous shedding.`
          },
          {
            question: `A man abusing high-dose anabolic steroids for two years is heavily muscled but presents with small testes and a very low sperm count. The best explanation is:`,
            options: [`Exogenous androgens directly poison Sertoli cells`, `High systemic androgens are converted to estrogen, which enlarges the testes`, `Negative feedback from exogenous androgens suppresses LH and FSH, collapsing intratesticular testosterone and Sertoli support`, `Steroids raise scrotal temperature above the permissive range`],
            correctAnswer: 2,
            explanation: `Exogenous androgens shut down GnRH/LH/FSH. Without LH, Leydig cells stop making the very high LOCAL testosterone spermatogenesis needs (systemic levels are high, intratesticular levels crash), and without FSH, Sertoli function declines — hence atrophy and oligospermia. No direct toxicity or temperature mechanism is needed; the axis arithmetic suffices.`
          },
          {
            question: `A 52-year-old woman has hot flashes and no menses for a year. Which hormone pattern is expected?`,
            options: [`High FSH and LH with low estrogen`, `Low FSH and LH with low estrogen`, `High estrogen with low FSH`, `Normal FSH with high progesterone`],
            correctAnswer: 0,
            explanation: `Menopause is follicle depletion: no granulosa cells → low estrogen AND low inhibin → the pituitary loses its brakes → FSH (especially) and LH rise. Option B describes a hypothalamic/pituitary failure, not ovarian failure. Progesterone is low too — no ovulation means no corpus luteum. High-gonadotropin-with-low-steroid always means the END ORGAN failed.`
          },
          {
            question: `Leuprolide, a GnRH agonist, is given as a continuous (non-pulsatile) depot to men with prostate cancer. After an initial flare, testosterone falls to near-castrate levels because:`,
            options: [`The agonist is converted to a GnRH antagonist in plasma`, `Continuous receptor stimulation downregulates pituitary GnRH receptors, suppressing LH release`, `Leuprolide directly inhibits Leydig cell steroidogenesis`, `Continuous GnRH selectively stimulates FSH, which inhibits testosterone`],
            correctAnswer: 1,
            explanation: `Gonadotrophs respond only to PULSATILE GnRH; continuous agonist exposure desensitizes and downregulates their receptors, so LH secretion collapses and Leydig testosterone follows. No chemical conversion to an antagonist occurs (option A), the drug acts at the pituitary rather than the testis, and FSH does not inhibit testosterone.`
          },
          {
            question: `On a hormone graph of one menstrual cycle, day X shows: progesterone high and near its plateau, estrogen at a moderate secondary peak, LH and FSH low. Day X is most likely in the:`,
            options: [`Early follicular phase`, `Day of ovulation`, `Mid-luteal phase (~day 21)`, `First day of menstruation`],
            correctAnswer: 2,
            explanation: `Only the corpus luteum produces high progesterone, so elevated progesterone places you after ovulation; the mid-luteal plateau (~day 21) also features a modest secondary estrogen rise and suppressed gonadotropins from progesterone's negative feedback. At ovulation LH would be spiking; in the early follicular phase and at menses, progesterone is at baseline.`
          }
        ]
      }
    },
    {
      id: 'rep4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Solve perturbation questions by locating the intervention on the axis, then propagating feedback changes downstream
- Combined contraception = steady negative feedback → no estrogen flip → no LH surge → no ovulation
- Continuous GnRH agonist = receptor downregulation = axis shutdown (pulsatility is mandatory); anabolic steroids = high systemic but LOW intratesticular androgen → atrophy
- Menopause and primary gonadal failure share a signature: low end-organ steroid with HIGH FSH/LH (lost negative feedback)
- Graph reading: LH spike marks ovulation, estrogen peaks just before it, high progesterone = luteal phase, bleeding alone does not prove ovulation
- Garnish: ectopic pregnancy (tubal implantation, sluggish hCG rise), Rh incompatibility (maternal IgG in later pregnancies)`
    }
  ]
};
