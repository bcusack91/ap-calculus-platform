export const mcatReproPart3Data = {
  topicSlug: 'mcat-anatomy-physiology-reproductive-mcat',
  sections: [
    {
      id: 'rep3-intro',
      type: 'text' as const,
      content: `# Reproductive System — Deep Dive

**Part 3 of 4 — The Menstrual Cycle, Fertilization & Pregnancy**

### The 28-Day Cycle, Phase by Phase

| Phase (days) | Ovary | Dominant hormones | Endometrium |
|--------------|-------|-------------------|-------------|
| Follicular (1-13) | FSH recruits follicles; one becomes dominant | Rising **estrogen** (granulosa) | Proliferates (rebuilds) |
| Ovulation (~14) | **LH surge** ruptures the follicle | Estrogen peak → LH spike | — |
| Luteal (15-28) | Corpus luteum forms from the ruptured follicle | **Progesterone** (+ estrogen) | Secretory: glands, vessels, ready for implantation |
| Menstruation (1-5 of next cycle) | Corpus luteum degenerates | Progesterone and estrogen crash | Functional layer sheds |

### The Feedback Switch (the single most-tested fact)

- **Moderate estrogen** exerts **negative** feedback on GnRH/LH/FSH — the axis idles through most of the follicular phase.
- **Sustained HIGH estrogen** (roughly above a threshold for ~36-48 hours, produced only by a large dominant follicle) **flips to positive feedback**, triggering the massive **LH surge** → ovulation around day 14.
- After ovulation, **progesterone** from the corpus luteum restores strong negative feedback (no second surge in one cycle) and maintains the secretory endometrium while raising basal body temperature slightly.
- If no pregnancy occurs, the corpus luteum degenerates after ~14 days (luteolysis) → progesterone falls → the endometrium loses hormonal support → menstruation. The luteal phase length (~14 days) is more constant than the follicular phase.

### Fertilization: An Ordered Checklist

1. **Capacitation**: hours in the female tract destabilize the sperm membrane, a prerequisite for fertilization
2. **Acrosome reaction**: contact with the **zona pellucida** releases acrosomal enzymes that digest a path
3. Membrane fusion; the sperm nucleus enters
4. **Cortical reaction**: calcium waves trigger cortical granule exocytosis, hardening the zona — the **slow block to polyspermy** (a fast, depolarization-based block occurs first in many species)
5. The secondary oocyte finally **completes meiosis II**, extrudes the second polar body, and the pronuclei unite → diploid zygote

### Implantation and the hCG Rescue

- Cleavage divisions produce a morula, then a **blastocyst** (trophoblast shell + inner cell mass) that implants in the endometrium around **days 6-10** post-fertilization
- The trophoblast secretes **human chorionic gonadotropin (hCG)**, an LH analog that **rescues the corpus luteum** so progesterone keeps flowing — this is why the endometrium is NOT shed, and why urine/serum **pregnancy tests detect hCG**
- By the **end of the first trimester**, the **placenta** takes over progesterone and estrogen synthesis; the corpus luteum regresses and hCG declines from its ~week-10 peak

### Parturition and Lactation (briefly)

- Labor: stretch and fetal signals → **oxytocin** → uterine contractions → more stretch → more oxytocin — a rare true **positive feedback** loop that terminates with delivery
- Lactation: **prolactin** drives milk **synthesis**; **oxytocin** drives milk **ejection** (let-down) via myoepithelial contraction. During pregnancy, high estrogen/progesterone block prolactin's action; their fall at delivery permits lactation.`
    },
    {
      id: 'rep3-worked',
      type: 'text' as const,
      content: `### Worked Example — Why a Pregnancy Test Works, and When It Lies

**Passage-style problem.** A home pregnancy test uses monoclonal antibodies against the beta subunit of hCG. A woman with a regular 28-day cycle has intercourse on day 14 and tests on day 18 (about 4 days post-ovulation); the test is negative. She retests on day 30 (about 2 days after her missed period); the test is positive.

**Question 1 — Why was the day-18 test negative even if she conceived?**
At 4 days post-fertilization the conceptus is a morula/early blastocyst still traveling the tube — it has **not implanted**, and meaningful hCG secretion requires the trophoblast to contact maternal blood after implantation (days 6-10). Testing before implantation cannot detect a real pregnancy: a false negative of timing, not chemistry.

**Question 2 — Physiologically, what has the rising hCG accomplished by day 30?**
Without pregnancy, luteolysis around day 26-28 would have crashed progesterone and triggered menstruation. hCG, acting through **LH receptors** on the corpus luteum (it is a structural LH analog sharing the alpha subunit — hence antibodies target beta), sustains luteal progesterone. Progesterone maintains the secretory endometrium and suppresses uterine contractions — the missed period IS the rescue, observed from outside.

**Question 3 — The passage notes the assay targets the beta subunit specifically. Why?**
hCG, LH, FSH, and TSH share a common **alpha subunit**; only beta subunits are unique. An anti-alpha antibody would cross-react with the mid-cycle LH surge and produce false positives around ovulation.

**Question 4 — Predict hCG at week 30 of a healthy pregnancy.**
Lower than the first-trimester peak: once the placenta assumes steroid synthesis (~end of first trimester), the corpus luteum is dispensable and hCG falls from its ~week-10 maximum to a moderate plateau.`
    },
    {
      id: 'rep3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Cycle, Fertilization & Pregnancy** 🎯`,
      exercise: {
        questions: [
          {
            question: `The mid-cycle LH surge is triggered by:`,
            options: [`Falling estrogen levels removing negative feedback`, `Progesterone secretion from the newly formed corpus luteum`, `A drop in FSH below threshold`, `Sustained high estrogen switching from negative to positive feedback on the hypothalamus and pituitary`],
            correctAnswer: 3,
            explanation: `Moderate estrogen suppresses LH, but the sustained high estrogen produced by a mature dominant follicle FLIPS the feedback to positive, unleashing the LH surge that causes ovulation. Falling estrogen (option A) describes menstruation's trigger logic, not the surge; the corpus luteum and its progesterone exist only AFTER ovulation.`
          },
          {
            question: `The cortical reaction that follows sperm-egg fusion functions primarily to:`,
            options: [`Complete the oocyte's first meiotic division`, `Harden the zona pellucida, blocking additional sperm from entering`, `Trigger the acrosome reaction in the fertilizing sperm`, `Initiate implantation of the zygote`],
            correctAnswer: 1,
            explanation: `Calcium release drives cortical granule exocytosis, which modifies and hardens the zona pellucida — the slow block to polyspermy. Meiosis I finished before ovulation (fertilization completes meiosis II, not I). The acrosome reaction PRECEDES fusion, and implantation is days away and involves the blastocyst, not the zygote.`
          },
          {
            question: `In a non-pregnant cycle, menstruation is most directly caused by:`,
            options: [`Degeneration of the corpus luteum and the resulting fall in progesterone`, `The LH surge`, `Rising FSH at the start of the cycle`, `Peak estrogen levels damaging the endometrium`],
            correctAnswer: 0,
            explanation: `The secretory endometrium is maintained by luteal progesterone. When the corpus luteum degenerates (~14 days after ovulation, absent hCG), progesterone collapses and the functional layer is shed. The LH surge causes ovulation, not menses; rising FSH recruits the next cohort; estrogen builds the endometrium rather than destroying it.`
          },
          {
            question: `hCG from the trophoblast prevents menstruation in early pregnancy by:`,
            options: [`Directly stimulating the endometrium to proliferate`, `Suppressing FSH so no new follicles are recruited`, `Acting on LH receptors of the corpus luteum to sustain progesterone secretion`, `Stimulating the placenta to secrete progesterone during week 2`],
            correctAnswer: 2,
            explanation: `hCG is an LH analog: it rescues the corpus luteum, whose PROGESTERONE maintains the endometrium — hCG's effect on the lining is indirect. The placenta cannot supply steroids until it matures near the end of the first trimester, which is exactly why the rescue is needed. Gonadotropin suppression happens but is not what preserves the lining.`
          },
          {
            question: `A nursing mother notices milk release when her infant cries, before any suckling occurs. The hormone responsible for this milk ejection is:`,
            options: [`Prolactin, released by the anterior pituitary`, `Oxytocin, released by the posterior pituitary`, `Progesterone from residual corpus luteum activity`, `Estrogen acting on myoepithelial cells`],
            correctAnswer: 1,
            explanation: `Oxytocin contracts myoepithelial cells around alveoli to EJECT milk, and its release is a neuroendocrine reflex that can be conditioned to cues like a cry. Prolactin drives milk SYNTHESIS, not let-down — the classic role swap. Estrogen and progesterone actually inhibit lactation during pregnancy; their postpartum fall permits it.`
          }
        ]
      }
    },
    {
      id: 'rep3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Follicular phase: FSH → follicle → rising estrogen; luteal phase: corpus luteum → progesterone; luteal length (~14 days) is the constant one
- THE switch: moderate estrogen = negative feedback, sustained high estrogen = positive feedback → LH surge → ovulation ~day 14
- Fertilization order: capacitation → acrosome reaction → fusion → cortical reaction (slow polyspermy block) → completion of meiosis II
- Blastocyst implants days 6-10; trophoblast hCG (an LH analog, unique beta subunit) rescues the corpus luteum — the basis of pregnancy tests
- Placenta takes over steroid production by the end of the first trimester; hCG peaks ~week 10 then falls
- Parturition = oxytocin positive feedback; lactation = prolactin makes milk, oxytocin ejects it`
    }
  ]
};
