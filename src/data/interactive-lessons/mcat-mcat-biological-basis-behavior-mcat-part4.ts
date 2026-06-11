export const mcatBioBasisBehaviorPart4Data = {
  topicSlug: 'mcat-biological-basis-behavior-mcat',
  sections: [
    {
      id: 'bbb4-intro',
      type: 'text' as const,
      content: `# Biological Basis of Behavior

**Part 4 of 5 — Endocrine System & Behavior + Stress (HPA Axis)**

Hormones modulate behavior more slowly and diffusely than neurotransmitters, but with longer-lasting effects.

### Nervous vs. Endocrine Signaling

| Feature | Nervous | Endocrine |
|---------|---------|-----------|
| Messenger | Neurotransmitter | Hormone |
| Speed | Fast (ms) | Slow (sec–hr) |
| Duration | Brief | Prolonged |
| Specificity | Targeted synapse | Broad (any cell with receptor) |

### Behaviorally Relevant Hormones

| Hormone | Source | Behavioral role |
|---------|--------|------------------|
| **Cortisol** | Adrenal cortex | Stress response, metabolism, memory effects |
| **Epinephrine/norepinephrine** | Adrenal medulla | Fight-or-flight, arousal |
| **Oxytocin** | Posterior pituitary | Bonding, trust, social behavior |
| **Testosterone/estrogen** | Gonads | Sexual behavior, aggression, development |
| **Melatonin** | Pineal | Sleep–wake (circadian) |
| **Thyroid hormone** | Thyroid | Metabolism, energy, mood |

### The HPA Axis (Slow Stress Response)

$$\\text{Hypothalamus (CRH)} \\to \\text{Anterior pituitary (ACTH)} \\to \\text{Adrenal cortex (cortisol)}$$

- Cortisol mobilizes glucose, suppresses immune function, and provides **negative feedback** on the hypothalamus and pituitary to shut the axis off.
- **Chronic stress** → sustained cortisol → impaired immunity, hippocampal damage/memory problems, and metabolic effects (allostatic load).

### The SAM Axis (Fast Stress Response)

$$\\text{Sympathetic nervous system} \\to \\text{Adrenal medulla} \\to \\text{epinephrine/norepinephrine}$$

Immediate fight-or-flight: ↑ heart rate, ↑ blood pressure, ↑ blood glucose, pupil dilation.

### General Adaptation Syndrome (Selye)

$$\\text{Alarm} \\to \\text{Resistance} \\to \\text{Exhaustion}$$

Prolonged stress depletes resources, increasing disease vulnerability.`
    },
    {
      id: 'bbb4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Endocrine & Stress** 🎯`,
      exercise: {
        questions: [
          {
            question: `In the HPA axis, the correct order of signaling molecules is:`,
            options: [`CRH → ACTH → cortisol`, `ACTH → CRH → cortisol`, `Cortisol → ACTH → CRH`, `Epinephrine → ACTH → cortisol`],
            correctAnswer: 0,
            explanation: `The hypothalamus releases CRH (corticotropin-releasing hormone), which stimulates the anterior pituitary to release ACTH (adrenocorticotropic hormone), which stimulates the adrenal CORTEX to release cortisol. Cortisol then feeds back negatively to suppress CRH and ACTH.`
          },
          {
            question: `The immediate, rapid "fight-or-flight" surge (↑ heart rate, pupil dilation within seconds) is driven by:`,
            options: [`The sympathetic nervous system stimulating the adrenal medulla to release epinephrine`, `The slow HPA axis releasing cortisol`, `Oxytocin from the posterior pituitary`, `Melatonin from the pineal gland`],
            correctAnswer: 0,
            explanation: `The fast stress response is the SAM axis: sympathetic activation triggers the adrenal MEDULLA to release epinephrine/norepinephrine within seconds, producing the acute fight-or-flight changes. The HPA axis (cortisol) is the slower, longer-lasting arm of the stress response.`
          },
          {
            question: `Chronically elevated cortisol from prolonged stress is associated with damage to which structure, impairing memory?`,
            options: [`The hippocampus`, `The cerebellum`, `The occipital cortex`, `The adrenal medulla`],
            correctAnswer: 0,
            explanation: `The hippocampus is rich in cortisol (glucocorticoid) receptors and is vulnerable to prolonged high cortisol, which can damage neurons and impair the formation of new explicit memories. This links chronic stress to memory deficits and is a frequently tested connection.`
          }
        ]
      }
    },
    {
      id: 'bbb4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Endocrine & Stress

<details>
<summary><b>Example 1: Apply negative feedback to a lab result</b></summary>

**Question:** A patient takes high-dose synthetic glucocorticoids for months. What happens to their endogenous CRH, ACTH, and adrenal output, and why is abrupt withdrawal dangerous?

**Solution:**
1. Exogenous glucocorticoids mimic cortisol → strong NEGATIVE feedback on hypothalamus (CRH↓) and pituitary (ACTH↓). ✓
2. Low ACTH → the adrenal cortex atrophies (less stimulation). ✓
3. Abrupt withdrawal removes the drug before the suppressed axis recovers → adrenal insufficiency (no cortisol) → crisis. Hence steroids are TAPERED. ✓

**MCAT key:** Negative feedback means giving the end product downregulates the whole upstream axis.
</details>

<details>
<summary><b>Example 2: Distinguish the fast and slow stress responses</b></summary>

**Question:** A person is startled by a near car accident. Describe the sequence of responses over seconds versus minutes.

**Solution:**
1. Within SECONDS: the **SAM axis** fires — sympathetic activation → adrenal medulla → epinephrine → racing heart, dilated pupils, raised blood glucose. ✓
2. Over MINUTES: the **HPA axis** ramps up — CRH → ACTH → cortisol → sustained glucose mobilization and immune suppression. ✓

**Connection:** Two complementary axes: SAM for the immediate jolt, HPA for the sustained response.
</details>

<details>
<summary><b>Example 3: Interpret a stress-and-illness study (allostatic load)</b></summary>

**Question:** A study finds chronically stressed caregivers have more infections and slower wound healing than controls. Propose the hormonal mechanism.

**Solution:**
1. Chronic stress → sustained HPA activation → persistently elevated cortisol. ✓
2. Cortisol SUPPRESSES immune function (reduces inflammation and lymphocyte activity), so chronic elevation impairs immune defense and wound healing. ✓
3. This cumulative wear is "allostatic load" — Selye's exhaustion stage. ✓

**Why it matters:** This links the biological stress axis to real health outcomes — a favorite Psych/Soc integration.
</details>`
    },
    {
      id: 'bbb4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Endocrine signaling = slow, broad, prolonged vs. fast/targeted neurotransmission.
- HPA axis (slow): CRH → ACTH → cortisol; cortisol mobilizes glucose, suppresses immunity, and gives negative feedback.
- SAM axis (fast): sympathetic → adrenal medulla → epinephrine → immediate fight-or-flight.
- Chronic stress/high cortisol → impaired immunity + hippocampal damage; Selye's GAS = alarm → resistance → exhaustion.`
    }
  ]
};
