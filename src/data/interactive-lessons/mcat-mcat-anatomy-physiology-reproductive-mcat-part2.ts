export const mcatReproPart2Data = {
  topicSlug: 'mcat-anatomy-physiology-reproductive-mcat',
  sections: [
    {
      id: 'rep2-intro',
      type: 'text' as const,
      content: `# Reproductive System — Deep Dive

**Part 2 of 4 — Anatomy & the HPG Axis**

### Male Tract: SEVEN UP

Sperm travel: **S**eminiferous tubules → **E**pididymis (maturation and storage; sperm gain motility here) → **V**as deferens → **E**jaculatory duct → (**N**othing) → **U**rethra → **P**enis.

Semen is mostly glandular fluid, not sperm:

| Gland | Contribution |
|-------|--------------|
| Seminal vesicles | ~60% of volume; **fructose** (sperm fuel), prostaglandins, alkaline fluid |
| Prostate | Milky, **alkaline** fluid that buffers the acidic vagina |
| Bulbourethral (Cowper's) glands | Pre-ejaculatory mucus that clears and lubricates the urethra |

### Female Anatomy

- **Ovary**: houses follicles; not directly connected to the tube — the **fimbriae** sweep the ovulated oocyte in
- **Fallopian (uterine) tube**: fertilization normally occurs in the **ampulla**, the wide upper region; cilia and peristalsis move the conceptus toward the uterus
- **Uterus**: inner **endometrium** (glandular lining that thickens each cycle and is shed at menstruation) vs. muscular **myometrium** (contracts during labor)
- **Cervix**: gateway to the vagina; its mucus thins at ovulation

### The Hypothalamic-Pituitary-Gonadal (HPG) Axis

The hypothalamus releases **GnRH in pulses** into the portal system; the anterior pituitary responds with **LH** and **FSH**. Pulsatility matters — continuous GnRH exposure desensitizes gonadotrophs and SHUTS DOWN the axis (Part 4 exploits this).

**Male wiring:**
- LH → **Leydig cells** → testosterone (systemic effects + high local concentration in tubules)
- FSH + testosterone → **Sertoli cells** → support spermatogenesis
- Feedback: testosterone inhibits GnRH and LH; **inhibin** (from Sertoli cells) selectively suppresses **FSH**

**Female wiring — the two-cell model:**
- LH → **theca cells** → synthesize **androgens** from cholesterol
- FSH → **granulosa cells** → express **aromatase**, converting thecal androgens to **estrogen**
- Neither cell type can make estrogen alone: theca lacks aromatase; granulosa lacks the enzymes to make androgens. Cooperation is the point.
- Feedback: moderate estrogen and progesterone are negative on GnRH/LH/FSH; inhibin again targets FSH (the positive-feedback exception is Part 3's story)

### Puberty and Sex Determination

- Childhood: the axis idles; puberty begins when hypothalamic GnRH pulses ramp up, raising LH/FSH and gonadal steroids
- **Testosterone** → male secondary sex characteristics (facial/axillary hair, voice deepening, muscle mass, libido); **estrogen** → breast development, fat redistribution, and (with growth hormone) the growth spurt followed by epiphyseal plate closure
- Genetic sex: the **SRY gene on the Y chromosome** triggers testis development; testosterone and Mullerian inhibitory factor then masculinize the internal tract. Absent SRY, the default developmental pathway is ovarian/female.`
    },
    {
      id: 'rep2-worked',
      type: 'text' as const,
      content: `### Worked Example — Localizing a Lesion in the Axis

**Passage-style problem.** Three adult male patients present with low sperm counts. Serum hormone panels show:

| Patient | GnRH response test | LH | FSH | Testosterone |
|---------|--------------------|----|-----|--------------|
| A | Normal pituitary response | Low | Low | Low |
| B | — | High | High | Low |
| C | — | Normal | High | Normal |

**Patient A** has low gonadotropins AND low testosterone, yet his pituitary responds normally when synthetic GnRH is injected. The lesion is **hypothalamic** (deficient endogenous GnRH pulses). Everything downstream is quiet only because nothing upstream is signaling — secondary (central) hypogonadism.

**Patient B** has LOW testosterone despite HIGH LH and FSH. The pituitary is working overtime; the testes are not answering. This is **primary testicular failure**: with little testosterone and little inhibin, negative feedback is lost and both gonadotropins rise. High LH/FSH with low end-organ hormone always points to the gland itself.

**Patient C** has normal LH and testosterone (so Leydig cells are fine) but **isolated high FSH**. FSH's selective brake is **inhibin from Sertoli cells** — so a Sertoli-cell/seminiferous-tubule problem (impaired spermatogenesis, low inhibin) explains an isolated FSH rise with preserved virilization.

**The transferable rule.** Read the axis like a circuit: hormone levels downstream of a lesion fall, while upstream regulators rise if (and only if) their negative-feedback signal is the one that disappeared. Identifying WHICH feedback signal is missing (testosterone vs. inhibin) localizes the lesion to Leydig vs. Sertoli compartments.`
    },
    {
      id: 'rep2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Anatomy & HPG Axis** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which structure do sperm pass through immediately after leaving the seminiferous tubules, and what happens there?`,
            options: [`The vas deferens, where they are stored until ejaculation`, `The epididymis, where they mature and gain motility`, `The prostate, where they acquire fructose`, `The ejaculatory duct, where capacitation occurs`],
            correctAnswer: 1,
            explanation: `SEVEN UP: Seminiferous tubules → Epididymis → Vas deferens → Ejaculatory duct → Urethra → Penis. The epididymis is the maturation/storage site where sperm become motile. Fructose comes from the SEMINAL VESICLES (not the prostate), and capacitation happens later, inside the female tract.`
          },
          {
            question: `In the ovarian two-cell model, estrogen synthesis requires both theca and granulosa cells because:`,
            options: [`Theca cells make androgens under LH; granulosa cells aromatize them to estrogen under FSH`, `Granulosa cells make androgens under FSH; theca cells aromatize them under LH`, `Theca cells secrete GnRH that activates granulosa aromatase`, `Both cell types independently synthesize estrogen, and their products simply add`],
            correctAnswer: 0,
            explanation: `LH drives theca cells to convert cholesterol to androgens; FSH induces aromatase in granulosa cells, which convert those androgens to estrogen. The reversed assignment (option B) is the standard trap. GnRH is hypothalamic, not ovarian, and neither cell type has the full pathway alone — that is exactly why the model exists.`
          },
          {
            question: `Fertilization most commonly occurs in the:`,
            options: [`Uterine endometrium, just before implantation`, `Cervix, where sperm first encounter female-tract mucus`, `Ampulla of the fallopian tube`, `Surface of the ovary at the moment of ovulation`],
            correctAnswer: 2,
            explanation: `The ovulated secondary oocyte is swept into the tube by the fimbriae and is typically fertilized in the ampulla, the wide upper portion. The EMBRYO then travels to the uterus and implants in the endometrium days later — implantation site is not fertilization site. Sperm meet cervical mucus early, but the gametes do not unite there.`
          },
          {
            question: `Inhibin, secreted by Sertoli cells (male) and granulosa cells (female), acts primarily to:`,
            options: [`Stimulate GnRH release from the hypothalamus`, `Suppress LH secretion while sparing FSH`, `Stimulate aromatase activity in theca cells`, `Selectively suppress FSH secretion from the anterior pituitary`],
            correctAnswer: 3,
            explanation: `Inhibin's defining feature is SELECTIVE negative feedback on FSH, letting the gonad tune gamete-supporting drive separately from steroid drive (which testosterone/estrogen regulate mainly via GnRH and LH). Option B inverts the selectivity, and inhibin inhibits — it never stimulates the axis. Theca cells lack aromatase entirely.`
          },
          {
            question: `An embryo carries one X and one Y chromosome, but its Y chromosome bears a deletion of the SRY gene. The gonads will most likely:`,
            options: [`Develop as testes, because the remaining Y genes suffice`, `Develop along the ovarian pathway, because SRY is required to initiate testis formation`, `Fail to form at all`, `Develop as one testis and one ovary`],
            correctAnswer: 1,
            explanation: `SRY is the master switch that commits the bipotential gonad to become a testis; without it, development follows the ovarian (default) pathway regardless of the rest of the Y chromosome. The gonad still forms — SRY directs its fate, it does not create it — and the switch acts on both gonads the same way.`
          }
        ]
      }
    },
    {
      id: 'rep2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- SEVEN UP for the male path; seminal vesicles = fructose and ~60% of volume, prostate = alkaline buffer, bulbourethral = lubricating mucus
- Female: fimbriae capture the oocyte; fertilization in the tube's ampulla; endometrium is shed, myometrium contracts
- GnRH must be PULSATILE; LH → Leydig/theca (steroid side), FSH → Sertoli/granulosa (gamete-support side)
- Two-cell model: theca androgens (LH) + granulosa aromatase (FSH) = estrogen
- Sex steroids feed back on GnRH/LH; inhibin selectively suppresses FSH — use which-hormone-is-high to localize axis lesions
- SRY on the Y chromosome initiates testis development; without it, the ovarian pathway is the default`
    }
  ]
};
