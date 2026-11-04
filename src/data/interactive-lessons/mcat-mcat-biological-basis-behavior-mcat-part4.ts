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
      id: 'bbb4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Endocrine & Stress

**Problem 1.** A patient takes high-dose synthetic glucocorticoids for months.

- **(a)** What happens to the patient's own CRH and ACTH output?
- **(b)** What happens to the adrenal cortex?
- **(c)** Why is abrupt withdrawal of the drug dangerous?
- **(d)** How should the drug be stopped?

**(a) Both fall.** The drug mimics cortisol, so it exerts strong NEGATIVE feedback on the hypothalamus (CRH↓) and the anterior pituitary (ACTH↓).

**(b) Atrophy.** With ACTH low, the adrenal cortex is understimulated and atrophies.

**(c) Adrenal insufficiency.** Abrupt withdrawal removes the drug before the suppressed axis recovers, leaving too little cortisol: an adrenal crisis.

**(d) Taper it.** Steroids are TAPERED so the axis can recover. Negative feedback means giving the end product downregulates the whole upstream axis.

**Problem 2.** A patient's adrenal medullae were surgically removed; the adrenal cortex is intact. The patient has a near car accident, and blood is drawn 1 minute and 20 minutes later.

- **(a)** How will the 1-minute sample differ from a healthy person's?
- **(b)** Will the patient's heart still race at once?
- **(c)** What should the 20-minute sample show, and through what chain?
- **(d)** What does this case show about the two stress axes?

**(a) Little circulating epinephrine.** The adrenal medulla is the main source of circulating epinephrine (the SAM axis), so the usual surge in the blood is missing.

**(b) Yes.** Sympathetic nerves release norepinephrine directly onto the heart and pupils, so the neural fight-or-flight response survives; only its hormonal boost is lost.

**(c) A normal cortisol rise.** CRH → ACTH → cortisol runs through the adrenal CORTEX, which is intact, so cortisol rises over minutes as usual.

**(d) Two separate arms.** The SAM axis (nerves + medulla) gives the immediate jolt in seconds; the HPA axis (hormones + cortex) sustains the response over minutes.

**Problem 3.** A study finds that chronically stressed caregivers have more infections and slower wound healing than controls.

- **(a)** Which hormone stays elevated under chronic stress, and through which axis?
- **(b)** How could that hormone explain the infections and slow healing?
- **(c)** What is this cumulative physiological wear called, and which stage of Selye's model does its extreme resemble?

**(a) Cortisol (HPA axis).** Chronic stress means sustained HPA activation and persistently elevated cortisol.

**(b) Immune suppression.** Cortisol SUPPRESSES immune function (less inflammation and lymphocyte activity), so chronic elevation impairs defense and wound healing.

**(c) Allostatic load.** At its extreme it parallels the exhaustion stage of Selye's General Adaptation Syndrome. This links the stress axis to real health outcomes, a favorite Psych/Soc integration.`
    },
    {
      id: 'bbb4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Endocrine & Stress** 🎯`,
      exercise: {
        questions: [
          {
            question: `After surgical removal of the anterior pituitary, with no hormone replacement, a patient's HPA-axis hormones would most likely be:`,
            options: [`High CRH, low ACTH, low cortisol`, `Low CRH, normal ACTH, low cortisol`, `High CRH, high ACTH, low cortisol`, `Low CRH, high ACTH, high cortisol`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The anterior pituitary is the source of ACTH, so ACTH falls, and without ACTH the adrenal cortex makes little cortisol. Low cortisol removes the negative feedback on the hypothalamus, so CRH rises. Low CRH with normal ACTH and low cortisol ignores both the missing ACTH source and the lost feedback. High ACTH is impossible once the gland that makes it is gone, and high cortisol cannot occur without ACTH to drive the adrenal cortex.`
          },
          {
            question: `Several weeks into a demanding residency, a doctor's cortisol stays elevated, yet she keeps functioning well and has not fallen ill. In Selye's General Adaptation Syndrome, she is most likely in the:`,
            options: [`Resistance stage, sustaining a raised response`, `Alarm stage, mounting the first shock response`, `Exhaustion stage, with her reserves depleted`, `Recovery stage, after the stressor has ended`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `In the resistance stage the stressor continues and the body copes by keeping its stress response, including cortisol, raised above normal. The alarm stage is the initial shock and mobilization in the first moments of a stressor, not weeks later. The exhaustion stage comes only once reserves are depleted and illness becomes likely, which has not happened here. A recovery stage after the stressor has ended is not one of Selye's three stages, and her stressor is still ongoing.`
          },
          {
            question: `Chronically elevated cortisol from prolonged stress is associated with damage to which structure, impairing memory?`,
            options: [`The hippocampus`, `The medulla oblongata`, `The occipital cortex`, `The adrenal medulla`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `The hippocampus is rich in cortisol (glucocorticoid) receptors and is vulnerable to prolonged high cortisol, which can damage neurons and impair the formation of new explicit memories. This links chronic stress to memory deficits and is a common integration point.`
          }
        ]
      }
    },
    {
      id: 'bbb4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Hormones vs. transmitters.** Endocrine signals are slow, broad, and prolonged; neural signals are fast, brief, and targeted.
- **HPA axis (slow).** CRH → ACTH → cortisol; cortisol mobilizes glucose, suppresses immunity, and feeds back negatively.
- **SAM axis (fast).** Sympathetic activation → adrenal medulla → epinephrine and norepinephrine within seconds.
- **Chronic stress.** Sustained cortisol impairs immunity and harms the hippocampus; Selye's GAS: alarm → resistance → exhaustion.

**Common traps**

- **Cortisol comes from the medulla.** The adrenal cortex makes cortisol (HPA axis); the adrenal medulla makes epinephrine (SAM axis).
- **The pituitary starts the cascade.** The hypothalamus releases CRH first, then the anterior pituitary ACTH, then the adrenal cortex cortisol.
- **Steroid drugs raise ACTH.** Cortisol-like drugs suppress CRH and ACTH by negative feedback, so the adrenal cortex atrophies.
- **Steroids can stop at once.** The suppressed axis needs time to recover, so steroids are tapered to avoid adrenal insufficiency.`
    }
  ]
};
