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

Semen is mostly glandular fluid, not sperm — the seminal vesicles and prostate add their secretions downstream of the vas deferens:

| Gland | Contribution |
|-------|--------------|
| Seminal vesicles | Most of the volume; **fructose** (sperm fuel), prostaglandins, and the **alkaline** fluid that buffers the acidic vagina |
| Prostate | Thin, milky fluid rich in citrate and enzymes (e.g., PSA) that liquefy semen |
| Bulbourethral (Cowper's) glands | Pre-ejaculatory mucus that clears and lubricates the urethra |

<!-- yield:low -->
- The seminal vesicles supply about 60% of semen volume.
<!-- /yield -->

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
- Genetic sex: the **SRY gene on the Y chromosome** triggers testis development; testosterone maintains the Wolffian ducts, and Müllerian inhibitory factor (from Sertoli cells) makes the Müllerian ducts regress. Absent SRY, the default developmental pathway is ovarian/female.`
    },
    {
      id: 'rep2-worked',
      type: 'text' as const,
      content: `### Worked Example — Localizing a Lesion in the Axis

**Problem 1.** Patient A, an adult man with a low sperm count, has low LH, low FSH and low testosterone. When synthetic GnRH is injected, his pituitary responds normally.

- **(a)** What does the normal response to injected GnRH tell you?
- **(b)** Where is the lesion, and what is this pattern called?

**(a) The pituitary works.** Given GnRH, his gonadotrophs release LH and FSH normally, so the pituitary is not the problem. Everything downstream is quiet only because nothing upstream is signaling.

**(b) Hypothalamic lesion.** The lesion is **hypothalamic**: deficient endogenous GnRH pulses. Low gonadotropins with low testosterone from an upstream cause is secondary (central) hypogonadism.

**Problem 2.** Patient B, an adult man with a low sperm count, has HIGH LH, HIGH FSH and LOW testosterone.

- **(a)** Is the pituitary or the testis failing?
- **(b)** Why are both gonadotropins high?
- **(c)** What general rule localizes a lesion from a hormone panel?

**(a) The testis.** The pituitary is working overtime; the testes are not answering. This is **primary testicular failure**.

**(b) Lost feedback.** With little testosterone and little inhibin, negative feedback is lost and both gonadotropins rise. High LH/FSH with low end-organ hormone always points to the gland itself.

**(c) The transferable rule.** Read the axis like a circuit: hormones downstream of a lesion fall, while upstream regulators rise if (and only if) their negative-feedback signal is the one that disappeared. Which signal is missing (testosterone vs. inhibin) separates Leydig from Sertoli lesions (e.g., isolated high FSH with normal testosterone = Sertoli/tubule lesion).

**Problem 3.** Patient C, an adult man with a low sperm count, has normal LH, normal testosterone and an isolated HIGH FSH.

- **(a)** Which testicular cells are working normally?
- **(b)** Which feedback signal is missing, and which cells make it?
- **(c)** What lesion explains the panel?

**(a) Leydig cells are fine.** Normal LH and normal testosterone show that the LH → Leydig limb, and virilization, are intact.

**(b) Missing inhibin.** FSH's selective brake is **inhibin from Sertoli cells**. With testosterone normal, inhibin is the signal that disappeared.

**(c) Sertoli/tubule lesion.** A Sertoli-cell/seminiferous-tubule problem (impaired spermatogenesis, low inhibin) explains an isolated FSH rise with preserved virilization.`
    },
    {
      id: 'rep2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Anatomy & HPG Axis** 🎯`,
      exercise: {
        questions: [
          {
            question: `After leaving the seminiferous tubules and crossing the rete testis and efferent ductules, sperm next enter which structure, and what happens there?`,
            options: [`The vas deferens, where they are stored until ejaculation`, `The epididymis, where they mature and gain motility`, `The prostate, where they acquire fructose`, `The ejaculatory duct, where capacitation occurs`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `SEVEN UP: Seminiferous tubules → Epididymis → Vas deferens → Ejaculatory duct → (Nothing) → Urethra → Penis. (The short rete testis and efferent ductules only conduct sperm; the epididymis is the first major duct and the first site of maturation.) The epididymis is the maturation/storage site where sperm become motile. Fructose comes from the SEMINAL VESICLES (not the prostate), and capacitation happens later, inside the female tract.`
          },
          {
            question: `In the ovarian two-cell model, estrogen synthesis requires both theca and granulosa cells because:`,
            options: [`Theca cells make androgens under LH; granulosa cells aromatize them under FSH`, `Granulosa cells make androgens under FSH; theca cells aromatize them under LH`, `Theca cells make androgens under FSH; granulosa cells aromatize them under LH`, `Both cell types independently synthesize estrogen, and their products simply add`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `LH drives theca cells to convert cholesterol to androgens; FSH induces aromatase in granulosa cells, which convert those androgens to estrogen. Reversing which cell makes androgens is the standard trap. Keeping the cells right but swapping the hormones also fails: theca cells are the LH target, and granulosa aromatase is induced by FSH. Neither cell type has the full pathway alone — that is exactly why the model exists.`
          },
          {
            question: `Fertilization most commonly occurs in the:`,
            options: [`Uterine cavity, before implantation`, `Cervix, as sperm cross the mucus barrier`, `Ampulla of the fallopian tube`, `Surface of the ovary at ovulation`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The ovulated secondary oocyte is swept into the tube by the fimbriae and is typically fertilized in the ampulla, the wide upper portion. The EMBRYO then travels to the uterus and implants in the endometrium days later — implantation site is not fertilization site. Sperm meet cervical mucus early, but the gametes do not unite there.`
          },
          {
            question: `Inhibin, secreted by Sertoli cells (male) and granulosa cells (female), acts primarily to:`,
            options: [`Stimulate hypothalamic GnRH release`, `Suppress LH secretion while sparing FSH`, `Stimulate aromatase activity in theca cells`, `Selectively suppress pituitary FSH secretion`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Inhibin's defining feature is SELECTIVE negative feedback on FSH, letting the gonad tune gamete-supporting drive separately from steroid drive (which testosterone/estrogen regulate mainly via GnRH and LH). Suppressing LH while sparing FSH inverts the selectivity, and inhibin inhibits — it never stimulates the axis. Theca cells lack aromatase entirely.`
          },
          {
            question: `An embryo carries one X and one Y chromosome, but its Y chromosome bears a deletion of the SRY gene. The gonads will most likely:`,
            options: [`Develop as testes, because the other Y-linked genes are sufficient`, `Take the ovarian pathway, because SRY is required to form testes`, `Fail to form, because no gonad can develop without SRY`, `Develop as one testis and one ovary, as SRY acts on one side`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `SRY is the master switch that commits the bipotential gonad to become a testis; without it, development follows the ovarian (default) pathway regardless of the rest of the Y chromosome, whose other genes cannot substitute. The gonad still forms — SRY directs its fate, it does not create it — and the switch acts on both gonads the same way rather than on one side. In real XY SRY deletion (Swyer syndrome) development defaults to the female pathway, though the gonads typically end up as nonfunctional streak gonads rather than working ovaries.`
          }
        ]
      }
    },
    {
      id: 'rep2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **SEVEN UP.** The male sperm path; sperm mature in the epididymis, and seminal vesicles add most of the semen volume.
- **Pulsatile GnRH.** Only pulsed GnRH drives LH (Leydig/theca, steroids) and FSH (Sertoli/granulosa); continuous GnRH shuts the axis down.
- **Two-cell model.** Theca cells make androgens under LH; granulosa aromatase, induced by FSH, turns them into estrogen.
- **Feedback localizes lesions.** High LH/FSH with low end-organ hormone means the gonad failed; low everything points upstream.

**Common traps**

- **Fertilizing in the uterus.** Fertilization occurs in the ampulla of the tube; the uterus is where the blastocyst implants.
- **Fructose from the prostate.** Fructose and the alkaline buffer come from the seminal vesicles; the prostate adds milky fluid.
- **Inhibin brakes LH.** Inhibin selectively suppresses FSH; sex steroids feed back mainly on GnRH and LH.
- **Other Y genes make testes.** Without SRY the gonad takes the ovarian pathway, whatever the rest of the Y chromosome carries.

<!-- yield:low -->
**Low-yield extras**

- The seminal vesicles supply about 60% of semen volume.
<!-- /yield -->`
    }
  ]
};
