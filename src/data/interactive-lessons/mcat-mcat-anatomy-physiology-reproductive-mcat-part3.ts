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
- **Sustained HIGH estrogen** (produced only by a large dominant follicle) **flips to positive feedback**, triggering the massive **LH surge** → ovulation around day 14.

<!-- yield:low -->
- "Sustained" means estrogen held above a threshold for roughly 36-48 hours.
<!-- /yield -->

- After ovulation, **progesterone** from the corpus luteum restores strong negative feedback (no second surge in one cycle) and maintains the secretory endometrium while raising basal body temperature slightly.
- If no pregnancy occurs, the corpus luteum degenerates after ~14 days (luteolysis) → progesterone falls → the endometrium loses hormonal support → menstruation. The luteal phase length (~14 days) is more constant than the follicular phase.

### Fertilization: An Ordered Checklist

1. **Capacitation**: hours in the female tract destabilize the sperm membrane, a prerequisite for fertilization
2. **Acrosome reaction**: contact with the **zona pellucida** releases acrosomal enzymes that digest a path
3. Membrane fusion; the sperm nucleus enters
4. **Cortical reaction**: calcium waves trigger cortical granule exocytosis, hardening the zona — the **slow block to polyspermy**
5. The secondary oocyte finally **completes meiosis II**, extrudes the second polar body, and the pronuclei unite → diploid zygote

Before the cortical reaction, many species use a **fast block**: sperm fusion opens Na+ channels and depolarizes the egg membrane within seconds, briefly preventing further fusion. In mammals the fast block is minor, and the cortical (slow) block does most of the work.

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

**Problem 1.** A woman with a regular 28-day cycle has intercourse on day 14. A home test for hCG is negative on day 18 (about 4 days post-ovulation) and positive on day 30 (about 2 days after her missed period).

- **(a)** Why was the day-18 test negative even if she conceived?
- **(b)** Without a pregnancy, what would have happened around days 26-28?
- **(c)** How does rising hCG prevent her period, and what does the missed period show?

**(a) Not yet implanted.** At 4 days post-fertilization the conceptus is a morula/early blastocyst, still free in the tube or uterine cavity. Meaningful hCG secretion begins only after implantation (days 6-10), so this is a false negative of timing, not chemistry.

**(b) Luteolysis.** The corpus luteum would degenerate around days 26-28, crashing progesterone and triggering menstruation.

**(c) The rescue.** Without hCG the corpus luteum would regress; hCG, a structural LH analog, acts through **LH receptors** on the corpus luteum and sustains its progesterone. Progesterone maintains the secretory endometrium and suppresses uterine contractions: the missed period IS the rescue, observed from outside.

**Problem 2.** The home test's monoclonal antibodies bind the beta subunit of hCG, not its alpha subunit.

- **(a)** Which other hormones share hCG's alpha subunit?
- **(b)** Why does the assay target beta, and what would an anti-alpha antibody detect by mistake, and when?

**(a) A shared alpha subunit.** hCG, LH, FSH, and TSH share a common **alpha subunit**; only their beta subunits are unique.

**(b) Avoiding LH.** Only the beta subunit identifies hCG. An anti-alpha antibody would cross-react with the mid-cycle LH surge and produce false positives around ovulation.`
    },
    {
      id: 'rep3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Cycle, Fertilization & Pregnancy** 🎯`,
      exercise: {
        questions: [
          {
            question: `The mid-cycle LH surge is triggered by:`,
            options: [`Falling estrogen levels removing negative feedback`, `Progesterone secretion from the newly formed corpus luteum`, `A fall in FSH once a dominant follicle is selected`, `Sustained high estrogen switching to positive feedback`],
            correctAnswer: 3,
            yield: 'ULTRA_HIGH',
            explanation: `Moderate estrogen suppresses LH, but the sustained high estrogen produced by a mature dominant follicle FLIPS the feedback to positive, unleashing the LH surge that causes ovulation. Falling estrogen describes menstruation's trigger logic, not the surge; the corpus luteum and its progesterone exist only AFTER ovulation. FSH does dip as a dominant follicle is selected, but that fall does not trigger the surge — FSH actually rises alongside LH at mid-cycle.`
          },
          {
            question: `The cortical reaction that follows sperm-egg fusion functions primarily to:`,
            options: [`Complete the oocyte's first meiotic division and expel a polar body`, `Harden the zona pellucida against additional sperm`, `Trigger the acrosome reaction in the fertilizing sperm`, `Initiate implantation of the zygote in the uterine wall`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Calcium release drives cortical granule exocytosis, which modifies and hardens the zona pellucida — the slow block to polyspermy. Meiosis I finished before ovulation (fertilization completes meiosis II, not I). The acrosome reaction PRECEDES fusion, and implantation is days away and involves the blastocyst, not the zygote.`
          },
          {
            question: `On day 20 of a non-pregnant cycle, a woman takes a drug that blocks progesterone receptors in the endometrium. What is the most likely result within days?`,
            options: [`The lining sheds early, as if the corpus luteum had regressed`, `hCG secretion rises and rescues the corpus luteum`, `The lining keeps thickening, since estrogen is still present`, `Menses is delayed, because the corpus luteum persists longer`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `The secretory endometrium is maintained by luteal progesterone; menstruation normally follows when the corpus luteum regresses and progesterone falls. Blocking the receptors removes that support just as luteolysis would, so the functional layer sheds early. Estrogen alone cannot keep a secretory lining in place, hCG comes only from an implanted trophoblast (absent in a non-pregnant cycle), and blocking progesterone's action in the uterus does nothing to prolong the corpus luteum.`
          },
          {
            question: `A woman who is 5 weeks pregnant has her corpus luteum removed surgically and receives no progesterone. What is the most likely outcome?`,
            options: [`The placenta already supplies enough progesterone, so nothing changes`, `Rising hCG maintains the endometrium directly, so nothing changes`, `Progesterone falls and the endometrium sheds, ending the pregnancy`, `Placental estrogen alone keeps the lining secretory`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `In early pregnancy hCG works only by rescuing the corpus luteum, whose PROGESTERONE maintains the endometrium. Remove the corpus luteum at 5 weeks and progesterone collapses, so the lining sheds and the pregnancy is lost. The placenta does not take over steroid synthesis until near the end of the first trimester, hCG has no direct effect on the lining, and estrogen without progesterone cannot keep the endometrium secretory.`
          },
          {
            question: `A nursing mother notices milk release when her infant cries, before any suckling occurs. The hormone responsible for this milk ejection is:`,
            options: [`Prolactin, released by the anterior pituitary`, `Oxytocin, released by the posterior pituitary`, `Progesterone from residual corpus luteum activity`, `Estrogen acting on myoepithelial cells`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Oxytocin contracts myoepithelial cells around alveoli to EJECT milk, and its release is a neuroendocrine reflex that can be conditioned to cues like a cry. Prolactin drives milk SYNTHESIS, not let-down — the classic role swap. Estrogen and progesterone actually inhibit lactation during pregnancy; their postpartum fall permits it.`
          }
        ]
      }
    },
    {
      id: 'rep3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Follicular vs. luteal.** FSH grows a follicle that makes rising estrogen; after ovulation the corpus luteum makes progesterone.
- **The feedback switch.** Moderate estrogen is negative feedback; sustained high estrogen flips it positive → LH surge, ovulation.
- **Fertilization order.** Capacitation → acrosome reaction → fusion → cortical reaction → the oocyte completes meiosis II.
- **The hCG rescue.** Trophoblast hCG, an LH analog, sustains the corpus luteum until the placenta takes over by the end of the first trimester.

**Common traps**

- **Falling estrogen triggers the surge.** Only sustained HIGH estrogen flips feedback to positive; moderate estrogen suppresses LH.
- **hCG builds the lining.** hCG acts on the corpus luteum; its progesterone, not hCG itself, maintains the endometrium.
- **An early negative rules out pregnancy.** hCG is secreted only after implantation (days 6-10), so a very early test can miss it.
- **Prolactin ejects milk.** Prolactin drives milk synthesis; oxytocin ejects milk and drives labor's positive-feedback contractions.

<!-- yield:low -->
**Low-yield extras**

- "Sustained" high estrogen means roughly 36-48 hours above threshold.
<!-- /yield -->`
    }
  ]
};
