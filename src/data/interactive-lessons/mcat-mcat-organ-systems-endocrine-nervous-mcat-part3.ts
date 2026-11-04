export const mcatEndoNervSubPart3Data = {
  topicSlug: 'mcat-organ-systems-endocrine-nervous-mcat',
  sections: [
    {
      id: 'endn3-intro',
      type: 'text' as const,
      content: `# Endocrine & Nervous Systems

**Part 3 of 4 — The Major Hormone Systems in Action**

### Blood Glucose — The Insulin/Glucagon See-Saw

| | **Insulin** (pancreatic beta cells) | **Glucagon** (alpha cells) |
|---|-------------------------------------|----------------------------|
| Released when | Glucose HIGH (fed) | Glucose LOW (fasting) |
| Receptor | Tyrosine kinase | GPCR → cAMP |
| Actions | GLUT4 insertion (muscle, fat) → glucose uptake; glycogen, fat, protein **synthesis** | Liver glycogenolysis + gluconeogenesis → glucose release; lipolysis |
| Mnemonic | The **storage** hormone | The **mobilization** hormone |

- The **liver and brain** take up glucose without insulin (brain is insulin-independent — why hypoglycemia is a neural emergency).
- **Type 1 diabetes:** autoimmune beta-cell destruction → no insulin. **Type 2:** receptor/post-receptor **resistance**, insulin initially high. Both starve cells amid plenty; unopposed glucagon-like metabolism in type 1 drives ketogenesis (DKA).
- Epinephrine, cortisol, and GH also raise glucose — insulin stands alone against four counter-regulators, which is why the failure mode is almost always hyperglycemia.

### Thyroid — The Metabolic Thermostat

- Axis: TRH → TSH → thyroid follicles make **T4/T3** (iodinated tyrosines on thyroglobulin; T3 is the active form, mostly converted peripherally). Nuclear receptors → transcription of metabolic machinery.
- Effects: ↑ basal metabolic rate, heat production, beta-receptor sensitivity (tachycardia in excess); essential for **CNS development** (congenital deficiency → irreversible intellectual disability — why newborns are screened).
- **Hypothyroid:** cold intolerance, weight gain, lethargy, slow reflexes. **Hyperthyroid:** heat intolerance, weight loss, tremor, tachycardia.
- Iodine deficiency → low T4 → no feedback brake → TSH climbs → the overstimulated gland enlarges: **goiter**.

### Calcium — A Two-Hormone Tug of War

| Hormone | Source | Trigger | Net effect on plasma Ca$^{2+}$ |
|---------|--------|---------|-------------------------------|
| **PTH** | Parathyroids | LOW Ca$^{2+}$ | ↑ — bone resorption (osteoclasts), renal Ca$^{2+}$ reabsorption + phosphate excretion, activates **vitamin D** (→ gut absorption) |
| **Calcitonin** | Thyroid C cells | HIGH Ca$^{2+}$ | ↓ — "tones down" bone resorption (minor in adult humans) |

PTH is the hormone that matters clinically: losing the parathyroids (thyroid surgery accident) → hypocalcemia → neuronal hyperexcitability → tetany. (Low Ca$^{2+}$ lowers the threshold for Na$^+$-channel opening — connect to Part 2.)

### Adrenal Gland — Two Organs in One Capsule

- **Cortex** (steroids, zones from outside in — "salt, sugar, sex"):
  - **Aldosterone** (mineralocorticoid): Na$^+$ retention, K$^+$/H$^+$ excretion — controlled by RAAS, not ACTH.
  - **Cortisol** (glucocorticoid, via CRH → ACTH): gluconeogenesis, protein/fat mobilization, vascular tone permissiveness, **immune suppression** (why it's a drug); the long-term stress hormone with a morning-peaked circadian rhythm.
  - Weak androgens.

<!-- yield:low -->
  - The main adrenal androgen is DHEA.
<!-- /yield -->

- **Medulla** (modified sympathetic ganglion): **epinephrine** — the short-term stress broadcast.
- **Stress response, two waves:** seconds = sympathetic + epinephrine (HR, glucose, blood to muscle); minutes-to-days = HPA axis + cortisol (sustained fuel mobilization at the cost of immunity, healing, memory circuits).

### Growth Hormone & Prolactin (the Direct-Acting Duo)

- **GH:** pulsatile, ↑ in deep sleep/exercise/fasting; acts directly (lipolysis, anti-insulin) and via liver **IGF-1** (bone/cartilage growth). Excess before growth plates close → gigantism; after → **acromegaly** (jaw, hands, brow). Deficiency in childhood → proportionate short stature.
- **Prolactin:** milk **production** (oxytocin handles ejection); unusual control — hypothalamic **dopamine tonically inhibits** it, so cutting the pituitary stalk RAISES prolactin while every other anterior hormone falls.`
    },
    {
      id: 'endn3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Systems Under Load

**Problem 1.** An untreated type 1 diabetic has a blood glucose of 500 mg/dL, yet is losing weight and producing ketones.

- **(a)** Why do muscle and fat cells starve while glucose stays high in the blood?
- **(b)** What does unopposed glucagon do in the liver?
- **(c)** How does the patient's breathing change, and why?
- **(d)** Why is the patient losing weight?

**(a) No GLUT4.** Without insulin, muscle and fat cannot insert GLUT4, so glucose stays in blood and the cells run a fasting program despite hyperglycemia.

**(b) Unopposed glucagon.** The liver adds MORE glucose (gluconeogenesis) and shunts liberated fatty acids to **ketone bodies**, producing ketoacidosis, a metabolic acidosis.

**(c) Kussmaul breathing.** The ketoacidosis from (b) drives deep, rapid breaths that blow off CO$_2$ to partially compensate.

**(d) Weight loss.** Fat and muscle are being catabolized, and glucose above the renal $T_m$ spills into urine, wasting calories and water. One hormone's absence links four organ systems, the MCAT's favorite kind of question.

**Problem 2.** A pituitary tumor destroys the TSH-secreting cells.

- **(a)** What happens to TSH and T4?
- **(b)** What happens to hypothalamic TRH?
- **(c)** Does a goiter form?
- **(d)** How do these labs differ from those of primary hypothyroidism?

**(a) TSH and T4.** TSH falls because its source is destroyed, so the understimulated thyroid makes less hormone: **T4 low**.

**(b) TRH.** Low T4 removes feedback at the hypothalamus, so **TRH is high**, but the pituitary cannot answer.

**(c) Gland size.** With TSH low there is no trophic drive, so the gland **shrinks**; no goiter forms.

**(d) The secondary signature.** In a SECONDARY (central) disorder the final hormone and its pituitary tropic hormone are low TOGETHER. Primary hypothyroidism shows low T4 with HIGH TSH.

**Problem 3.** Rats exposed to a sudden stressor show a faster heart rate within seconds and a rise in blood glucose in two phases: immediate and sustained (hours).

- **(a)** What produces the immediate phase?
- **(b)** What produces the sustained phase?
- **(c)** Which phase does blocking ACTH abolish, and which does ganglionic blockade abolish?

**(a) Seconds.** Sympathetic nerves plus adrenal **medulla** epinephrine: beta-1 cardiac acceleration and instant glycogenolysis (GPCR/cAMP speed).

**(b) Hours.** CRH → ACTH → adrenal **cortex** cortisol: transcription-level induction of gluconeogenic enzymes (steroid/nuclear-receptor speed).

**(c) Double dissociation.** Blocking ACTH abolishes only the sustained phase; ganglionic blockade abolishes only the immediate one. Passages love this clean double dissociation.`
    },
    {
      id: 'endn3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Hormone Systems** 🎯`,
      exercise: {
        questions: [
          {
            question: `Hours into strenuous fasting exercise, blood glucose remains stable. Which hormone pattern maintains it?`,
            options: [`Rising insulin that drives glucose uptake into working muscle`, `Low insulin with high glucagon, epinephrine, and cortisol`, `High insulin and high glucagon acting synergistically on muscle`, `Low glucagon with suppressed epinephrine to spare glycogen`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Fasting exercise is a mobilization state: insulin falls (sparing glucose for insulin-independent tissues like brain and working muscle, whose contraction-stimulated GLUT4 uptake does not need insulin), while glucagon and epinephrine drive hepatic glycogenolysis and gluconeogenesis, with cortisol supporting substrate supply. Rising insulin would push storage and hypoglycemia — exactly wrong — and suppressing glucagon or epinephrine would remove the very signals that mobilize hepatic glucose. Four counter-regulatory hormones (glucagon, epinephrine, cortisol, plus growth hormone) versus one storage hormone is the design.`
          },
          {
            question: `A patient in a region with severely iodine-deficient soil develops a large goiter with LOW thyroid hormone levels. The gland enlarged because:`,
            options: [`Low T4 raised TRH, which directly stimulated follicular growth`, `Calcitonin secretion from C cells expanded the gland`, `Loss of T4 feedback raised TSH, which stimulated gland growth`, `Iodine deficiency triggers autoimmune destruction that swells the gland`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `No iodine → no T4/T3 → the pituitary never receives its inhibitory feedback → TSH secretion climbs relentlessly. TSH is trophic as well as tropic: it drives both hormone synthesis (futile without iodine) and tissue growth — hence a big, underproducing gland. TRH does rise too, but it acts on the pituitary thyrotrophs, not directly on thyroid follicles. Feedback loops explain gland SIZE as reliably as they explain hormone levels.`
          },
          {
            question: `During thyroid surgery, all four parathyroid glands are accidentally removed. Within days the patient develops muscle spasms and perioral tingling. The mechanism is:`,
            options: [`Loss of calcitonin causing calcium to accumulate in neurons`, `Falling plasma calcium increasing nerve excitability (tetany)`, `Rising phosphate directly stimulating muscle contraction`, `Loss of PTH lowering potassium excretion, depolarizing muscle`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Without PTH, bone resorption, renal calcium reclamation, and vitamin D activation all fade — plasma Ca$^{2+}$ falls. Extracellular calcium normally stabilizes voltage-gated Na$^+$ channels; hypocalcemia lowers their effective threshold, so nerves fire spontaneously: tingling, cramps, tetany. Calcitonin loss is clinically silent — PTH is the hormone that defends calcium.`
          }
        ]
      }
    },
    {
      id: 'endn3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Insulin versus four.** Insulin stores via GLUT4; glucagon, epinephrine, cortisol, GH mobilize. Type 1: no insulin (DKA); type 2: resistance.
- **Thyroid sets the pace.** T3/T4 act on nuclear receptors to raise metabolic rate and are essential for CNS development.
- **PTH defends calcium.** PTH raises plasma Ca²⁺ through bone resorption, renal reabsorption and vitamin D activation.
- **Adrenal: two organs.** The cortex makes aldosterone (RAAS) and cortisol (HPA); the medulla releases epinephrine in seconds.

**Common traps**

- **Brain needs insulin.** The brain and liver take up glucose without insulin, which is why hypoglycemia is a neural emergency.
- **Every hypothyroid gland shrinking.** In primary (e.g. iodine-deficient) hypothyroidism TSH climbs and the gland enlarges into a goiter; central causes shrink it.
- **Overrating calcitonin.** Calcitonin is a minor brake in adults; losing the parathyroids is what causes hypocalcemic tetany.
- **Stalk section lowers prolactin.** Dopamine tonically inhibits prolactin, so cutting the stalk raises it while other anterior hormones fall.

<!-- yield:low -->
**Low-yield extras**

- The main adrenal androgen is DHEA.
<!-- /yield -->`
    }
  ]
};
