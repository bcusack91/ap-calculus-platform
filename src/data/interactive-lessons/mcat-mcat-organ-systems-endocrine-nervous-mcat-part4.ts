export const mcatEndoNervSubPart4Data = {
  topicSlug: 'mcat-organ-systems-endocrine-nervous-mcat',
  sections: [
    {
      id: 'endn4-intro',
      type: 'text' as const,
      content: `# Endocrine & Nervous Systems

**Part 4 of 4 — MCAT Integration: Neuroendocrine Control, Disorder Logic & Passage Data**

### Where the Two Systems Fuse

The hypothalamus is the anatomical answer to "how do neurons control hormones?" — it is a piece of brain that secretes. Three fusion points recur in passages:

1. **Posterior pituitary**: hypothalamic NEURONS extend axons into the gland and release ADH and oxytocin directly into blood — a **neuroendocrine reflex** with no intermediate tropic hormone. Suckling → mechanoreceptors → hypothalamus → oxytocin → milk ejection is a neural afferent limb with a hormonal efferent limb (and one of the body's few POSITIVE feedback loops, like ferguson reflex labor contractions).
2. **Adrenal medulla**: a modified sympathetic ganglion — preganglionic sympathetic fibers (ACh, nicotinic) synapse directly on chromaffin cells, which dump epinephrine into blood. One synapse, then a hormone.
3. **Anterior pituitary**: neurons release RELEASING hormones into the hypophyseal PORTAL system — neural timing (pulsatility, circadian rhythm) imposed on an endocrine cascade.

### The Disorder-Localization Algorithm (Primary vs. Secondary)

For any axis (hypothalamus → pituitary → gland), read the FINAL hormone and its TROPIC hormone as a pair:

| Final hormone | Tropic hormone | Lesion level | Name |
|---------------|----------------|--------------|------|
| Low | High | The gland itself | Primary hypofunction |
| Low | Low | Pituitary (or hypothalamus) | Secondary/central hypofunction |
| High | Low | Gland autonomously overactive (or exogenous hormone) | Primary hyperfunction |
| High | High | Pituitary tumor (or ectopic tropic source) | Secondary hyperfunction |

The logic is pure negative feedback: an intact pituitary always moves its tropic hormone OPPOSITE to the final hormone. When both move in the SAME direction, the pituitary itself (or something mimicking it) is the problem.

### Suppression & Stimulation Tests — Feedback as a Probe

- **Stimulation test** (suspected HYPOfunction): give the tropic hormone; if the gland responds, the gland is fine and the lesion is upstream. Give ACTH — cortisol rises → adrenal is healthy → the problem is pituitary.
- **Suppression test** (suspected HYPERfunction): give negative-feedback input (e.g., dexamethasone, a cortisol mimic); a NORMAL axis suppresses. Autonomous tumors ignore feedback — failure to suppress localizes autonomy.
- Exogenous hormone abuse mimics primary hyperfunction with one giveaway: the GLAND ATROPHIES (no tropic support), e.g., anabolic steroid users with low LH and shrunken testes.

### Speed, Specificity & Duration — The Comparison Table Passages Build On

| Feature | Nervous | Endocrine |
|---------|---------|-----------|
| Signal | Action potentials + neurotransmitter at a synapse | Hormone broadcast in blood |
| Speed | Milliseconds | Seconds (peptides) to hours (steroids) |
| Specificity | Anatomical (wiring) | Chemical (receptor expression) |
| Duration | Brief, rapidly terminated | Prolonged; limited by half-life and clearance |
| Best for | Reflexes, movement, rapid perception | Growth, metabolism, reproduction, sustained states |

A cell with no receptor is deaf to a hormone no matter the plasma level — receptor DENSITY and AFFINITY are the endocrine analog of synaptic wiring, and up-/down-regulation is the analog of synaptic plasticity.`
    },
    {
      id: 'endn4-worked-examples',
      type: 'text' as const,
      content: `### Worked Example — An Endocrine Passage, Read Like a Scientist

**Passage.** Researchers study four patients with abnormal cortisol physiology. Each undergoes measurement of morning plasma cortisol and ACTH, followed by a high-dose dexamethasone suppression test (dexamethasone is a synthetic glucocorticoid that binds glucocorticoid receptors, including those mediating hypothalamic-pituitary feedback).

| Patient | Cortisol | ACTH | Cortisol after dexamethasone |
|---------|----------|------|------------------------------|
| 1 | High | High | Suppressed |
| 2 | High | Low | Not suppressed |
| 3 | Low | High | (not performed) |
| 4 | High | High | Not suppressed |

**Step 1 — pair the hormones before touching the third column.**
- Patient 1 and 4: cortisol and ACTH BOTH high → the drive is coming from ACTH (secondary hyperfunction — pituitary source or ectopic ACTH).
- Patient 2: high cortisol with SUPPRESSED ACTH → the pituitary is behaving (feedback intact there); the cortisol source ignores ACTH → primary adrenal autonomy (adrenal tumor) or exogenous glucocorticoid.
- Patient 3: low cortisol, high ACTH → pituitary is shouting at a gland that cannot answer → primary adrenal failure.

**Step 2 — use dexamethasone to separate the two "both high" patients.** A pituitary ACTH tumor usually RETAINS partial feedback sensitivity — high-dose dexamethasone suppresses it (Patient 1). An ECTOPIC ACTH source (e.g., a lung tumor secreting ACTH) has no hypothalamic-pituitary machinery to inhibit — no suppression (Patient 4). Patient 2's non-suppression is expected: her ACTH is already floored; the adrenal source never listened to ACTH in the first place.

**Step 3 — anticipate the anatomy question.** Which patients have ENLARGED adrenal cortices? Patients 1 and 4 — chronic ACTH is trophic. Patient 2's contralateral adrenal ATROPHIES (its ACTH support is suppressed), a favorite trap: high cortisol with a shrunken gland on one side.

**The transferable strategy:** in any endocrine data table, (1) pair final + tropic hormone to localize, (2) treat suppression/stimulation rows as feedback probes, (3) predict gland size from chronic tropic exposure. The hormone names change; this algorithm does not.`
    },
    {
      id: 'endn4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Neuroendocrine Integration & Disorder Logic** 🎯`,
      exercise: {
        questions: [
          {
            question: `Milk ejection during suckling is triggered within seconds. Which feature of this reflex identifies it as neuroendocrine rather than purely neural or purely endocrine?`,
            options: [`Oxytocin is released from the anterior pituitary under portal-system control`, `The efferent limb uses a sympathetic postganglionic neuron releasing norepinephrine`, `A neural afferent limb drives hypothalamic neurons to secrete a hormone (oxytocin) directly from axon terminals in the posterior pituitary`, `Milk ejection is controlled entirely by local mechanical stretch of the mammary ducts`],
            correctAnswer: 2,
            explanation: `The sensory (neural) limb — nipple mechanoreceptors to hypothalamus — is wired like any reflex, but the output is hormonal: magnocellular hypothalamic neurons fire action potentials down axons ending in the posterior pituitary and release oxytocin into blood. Option A misplaces oxytocin in the anterior pituitary, which receives releasing hormones via the portal system instead of housing hypothalamic axon terminals.`
          },
          {
            question: `A patient has low free T4 with a LOW TSH. A TRH stimulation test produces a robust rise in TSH. The lesion is most likely in the:`,
            options: [`Hypothalamus, because the pituitary responds normally when given TRH`, `Thyroid gland, because T4 is low`, `Pituitary, because TSH failed to rise before the test`, `Peripheral tissues, from deiodinase deficiency`],
            correctAnswer: 0,
            explanation: `Low T4 with low TSH is central (same-direction pair): gland failure would drive TSH UP. The stimulation test then splits the two central levels — a pituitary that answers exogenous TRH is healthy but understimulated, so the missing signal is hypothalamic TRH (tertiary hypofunction). Option B ignores the tropic-hormone pairing; option C is refuted by the positive TRH response.`
          },
          {
            question: `An athlete self-administers testosterone for a year. Compared with a patient whose Leydig-cell tumor autonomously secretes the same amount of testosterone, the athlete uniquely shows:`,
            options: [`High LH driving both testes to enlarge`, `Low LH — but so does the tumor patient, so LH cannot distinguish them; the distinguishing finding is atrophy of BOTH testes rather than a unilateral mass`, `Normal testes, because exogenous testosterone does not enter the feedback loop`, `High GnRH with low LH`],
            correctAnswer: 1,
            explanation: `Both scenarios flood the circulation with androgen, so both suppress GnRH/LH — the tropic hormone is low in each. The difference is anatomical: the tumor keeps one testis (its own) active and enlarging while feedback shrinks the other, whereas exogenous hormone supports NO testicular tissue, so both atrophy. Exogenous steroids absolutely engage feedback — that is why option C fails.`
          },
          {
            question: `A drug blocks nicotinic acetylcholine receptors at autonomic ganglia. Which stress response component survives the blockade?`,
            options: [`Epinephrine release from the adrenal medulla`, `Sympathetic acceleration of heart rate via cardiac nerves`, `Cortisol secretion driven by the CRH-ACTH axis`, `Norepinephrine release from postganglionic sympathetic terminals`],
            correctAnswer: 2,
            explanation: `Ganglionic blockade silences everything downstream of preganglionic neurons: postganglionic sympathetic firing (B, D) and the adrenal medulla (A), which is itself innervated by preganglionic fibers acting on nicotinic receptors. The HPA axis is humoral — CRH travels in portal blood, ACTH in systemic blood — no autonomic synapse required, so cortisol still rises. This is the double-dissociation logic passages use to separate the two stress waves.`
          },
          {
            question: `In an endocrine passage, patients W and X both have elevated hormone H. Patient W's tropic hormone T is elevated; patient X's is nearly undetectable. Without any further tests, the best conclusion is:`,
            options: [`W has a primary disorder of the gland; X has a pituitary tumor`, `Both have primary gland disorders differing in severity`, `W's gland is autonomously hypersecreting; X's pituitary is hypersecreting T`, `W's excess H is driven from the pituitary level or an ectopic T source, while X's gland (or an exogenous source) is producing H autonomously`],
            correctAnswer: 3,
            explanation: `Same-direction pair (H high, T high) means the drive is T itself — pituitary or ectopic — because an intact pituitary would have suppressed T in response to high H. Opposite-direction pair (H high, T low) means feedback is working at the pituitary while the gland (or an outside source of H) acts on its own. Options A and C each assign the patterns backwards — the single most tested reversal in endocrinology.`
          }
        ]
      }
    },
    {
      id: 'endn4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Neuroendocrine fusion points: posterior pituitary (hypothalamic axons secrete ADH/oxytocin), adrenal medulla (one preganglionic synapse, then a hormone), anterior pituitary (portal releasing hormones impose neural rhythms)
- Localize lesions by PAIRING final and tropic hormones: opposite directions = intact pituitary, problem at the gland (primary); same direction = problem at the pituitary level or ectopic/exogenous source
- Stimulation tests probe suspected HYPOfunction (does the gland answer its tropic hormone?); suppression tests probe HYPERfunction (does the axis obey feedback?); autonomous tissue ignores feedback
- Exogenous hormone mimics primary hyperfunction but ATROPHIES the native gland — low tropic hormone plus a shrunken gland is the signature
- Nervous system = fast, wired, brief; endocrine = slower, broadcast, sustained; receptor expression is the endocrine version of anatomical specificity — and every passage table yields to the pair-then-probe algorithm`
    }
  ]
};
