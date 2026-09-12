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
  - Weak androgens (DHEA).
- **Medulla** (modified sympathetic ganglion): **epinephrine** — the short-term stress broadcast.
- **Stress response, two waves:** seconds = sympathetic + epinephrine (HR, glucose, blood to muscle); minutes-to-days = HPA axis + cortisol (sustained fuel mobilization at the cost of immunity, healing, memory circuits).

### Growth Hormone & Prolactin (the Direct-Acting Duo)

- **GH:** pulsatile, ↑ in deep sleep/exercise/fasting; acts directly (lipolysis, anti-insulin) and via liver **IGF-1** (bone/cartilage growth). Excess before growth plates close → gigantism; after → **acromegaly** (jaw, hands, brow). Deficiency in childhood → proportionate short stature.
- **Prolactin:** milk **production** (oxytocin handles ejection); unusual control — hypothalamic **dopamine tonically inhibits** it, so cutting the pituitary stalk RAISES prolactin while every other anterior hormone falls.`
    },
    {
      id: 'endn3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Hormone Systems** 🎯`,
      exercise: {
        questions: [
          {
            question: `Hours into strenuous fasting exercise, blood glucose remains stable. Which hormone pattern maintains it?`,
            options: [`High insulin and low glucagon, promoting glucose storage`, `Low insulin with elevated glucagon, epinephrine, and cortisol mobilizing hepatic glucose`, `High insulin and high glucagon acting synergistically on muscle`, `Suppressed epinephrine to conserve glycogen stores`],
            correctAnswer: 1,
            explanation: `Fasting exercise is a mobilization state: insulin falls (sparing glucose for insulin-independent tissues like brain and working muscle), while glucagon and epinephrine drive hepatic glycogenolysis and gluconeogenesis, with cortisol supporting substrate supply. High insulin would push storage — exactly wrong. Four counter-regulatory hormones versus one storage hormone is the design.`
          },
          {
            question: `A patient in a region with severely iodine-deficient soil develops a large goiter with LOW thyroid hormone levels. The gland enlarged because:`,
            options: [`Excess T4 directly stimulated follicular growth`, `Calcitonin secretion from C cells expanded the gland`, `Without T4-mediated negative feedback, TSH rose and chronically overstimulated (trophic effect) the thyroid`, `Iodine deficiency triggers autoimmune destruction that swells the gland`],
            correctAnswer: 2,
            explanation: `No iodine → no T4/T3 → the pituitary never receives its inhibitory feedback → TSH secretion climbs relentlessly. TSH is trophic as well as tropic: it drives both hormone synthesis (futile without iodine) and tissue growth — hence a big, underproducing gland. Feedback loops explain gland SIZE as reliably as they explain hormone levels.`
          },
          {
            question: `During thyroid surgery, all four parathyroid glands are accidentally removed. Within days the patient develops muscle spasms and perioral tingling. The mechanism is:`,
            options: [`Loss of calcitonin causing calcium to accumulate in neurons`, `Falling plasma calcium increasing neuronal sodium-channel excitability, producing tetany`, `Rising phosphate directly stimulating muscle contraction`, `Loss of PTH reducing potassium excretion, depolarizing muscle`],
            correctAnswer: 1,
            explanation: `Without PTH, bone resorption, renal calcium reclamation, and vitamin D activation all fade — plasma Ca$^{2+}$ falls. Extracellular calcium normally stabilizes voltage-gated Na$^+$ channels; hypocalcemia lowers their effective threshold, so nerves fire spontaneously: tingling, cramps, tetany. Calcitonin loss is clinically silent — PTH is the hormone that defends calcium.`
          }
        ]
      }
    },
    {
      id: 'endn3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Systems Under Load

<details>
<summary><b>Example 1: Type 1 diabetes as "starvation amid plenty"</b></summary>

**Question:** An untreated type 1 diabetic has glucose of 500 mg/dL yet is losing weight and producing ketones. Reconcile.

**Solution:**
1. No insulin → muscle and fat cannot insert GLUT4 → glucose stays in blood; cells run a fasting program despite hyperglycemia.
2. Unopposed glucagon: liver adds MORE glucose (gluconeogenesis) and shunts liberated fatty acids to **ketone bodies** → ketoacidosis (metabolic acidosis → Kussmaul breathing, from the respiratory lesson).
3. Weight loss: fat and muscle are being catabolized, and glucose above the renal $T_m$ spills into urine, wasting calories and water (renal lesson). ✓

**Integration note:** one hormone's absence links four organ systems — the MCAT's favorite kind of question.
</details>

<details>
<summary><b>Example 2: Predict labs in secondary hypothyroidism</b></summary>

**Question:** A pituitary tumor destroys TSH-secreting cells. Predict T4, TSH, TRH, and whether a goiter forms.

**Solution:**
1. TSH falls (source destroyed) → thyroid understimulated → **T4 low**.
2. Low T4 removes feedback at the hypothalamus → **TRH high** (but the pituitary cannot answer).
3. TSH is low → no trophic drive → the gland **shrinks**; no goiter. ✓
4. Signature of a SECONDARY (central) disorder: final hormone and its pituitary tropic hormone are low TOGETHER. Compare primary hypothyroidism: low T4 with HIGH TSH and possible goiter.
</details>

<details>
<summary><b>Example 3: The two-wave stress response, experimentally</b></summary>

**Question:** Rats exposed to a sudden stressor show elevated heart rate within seconds and elevated blood glucose in two phases — immediate and sustained (hours). Attribute each phase.

**Solution:**
1. Seconds: sympathetic nerves + adrenal **medulla** epinephrine — beta-1 cardiac acceleration and instant glycogenolysis (GPCR/cAMP speed).
2. Hours: CRH → ACTH → adrenal **cortex** cortisol — transcription-level induction of gluconeogenic enzymes (steroid/nuclear-receptor speed).
3. Blocking ACTH abolishes only the sustained phase; ganglionic blockade abolishes only the immediate one — a clean double dissociation passages love. ✓
</details>`
    },
    {
      id: 'endn3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Insulin stores (RTK, GLUT4); glucagon + epinephrine + cortisol + GH mobilize. Brain is insulin-independent. Type 1 = no insulin; Type 2 = resistance; unopposed mobilization → ketoacidosis.
- Thyroid: TRH → TSH → T4/T3 (nuclear receptors) sets metabolic rate and enables CNS development; iodine deficiency → low T4, high TSH, goiter. Feedback explains gland size.
- Calcium: PTH (bone resorption, renal reabsorption, vitamin D activation) defends low Ca²⁺; calcitonin is a minor brake. No PTH → hypocalcemic tetany.
- Adrenal: cortex = aldosterone (RAAS-run), cortisol (HPA, long-term stress, immunosuppression), androgens; medulla = epinephrine (seconds). Stress = two waves, two mechanisms, two timescales.
- GH acts via IGF-1 (gigantism vs. acromegaly by growth-plate status); prolactin is dopamine-inhibited — stalk section raises it uniquely.`
    }
  ]
};
