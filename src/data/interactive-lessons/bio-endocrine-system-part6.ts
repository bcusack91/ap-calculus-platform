export const bioEndocrineSystemPart6Data = {
  topicSlug: 'endocrine-system',
  sections: [
    {
      id: 'end6-intro',
      type: 'text' as const,
      content: `
# 🧬 Reproductive & Other Hormones

Beyond the hypothalamic-pituitary axis and stress/glucose regulation, several other hormones play critical roles in reproduction, growth, metabolism, and calcium homeostasis.

### What You'll Learn
- Reproductive hormones: estrogen, progesterone, testosterone
- Melatonin and circadian rhythms
- Growth hormone and its effects
- Thyroid hormones and metabolic rate
- Calcium regulation: PTH vs. calcitonin
      `
    },
    {
      id: 'end6-reproductive',
      type: 'text' as const,
      content: `
## Reproductive Hormones

The **gonads** (ovaries and testes) produce steroid hormones that regulate reproductive development, function, and secondary sex characteristics. These hormones are controlled by **FSH** and **LH** from the anterior pituitary, which are in turn regulated by **GnRH** from the hypothalamus.

### Key Reproductive Hormones
| Hormone | Source | Type | Major Functions |
|---------|--------|------|----------------|
| **Estrogen** | Ovaries (follicle cells) | Steroid | Development of female secondary sex characteristics; thickens endometrium; regulates menstrual cycle |
| **Progesterone** | Ovaries (corpus luteum) | Steroid | Maintains endometrium for implantation; supports early pregnancy; inhibits uterine contractions |
| **Testosterone** | Testes (Leydig cells) | Steroid | Development of male secondary sex characteristics; spermatogenesis; muscle/bone growth |

### The Menstrual Cycle (Hormonal Control)
| Phase | Days (approx.) | Key Hormones | Events |
|-------|---------------|-------------|--------|
| **Follicular** | 1–13 | FSH, Estrogen (rising) | Follicle develops; endometrium rebuilds |
| **Ovulation** | Day 14 | LH surge (triggered by high estrogen) | Mature egg released from ovary |
| **Luteal** | 15–28 | Progesterone (from corpus luteum) | Endometrium maintained; if no implantation, corpus luteum degrades |
| **Menstruation** | Day 1 | Drop in progesterone and estrogen | Endometrial lining shed |

> 🔑 **Feedback switch:** During the follicular phase, low estrogen exerts negative feedback on LH. When estrogen reaches a critical threshold, it switches to positive feedback, triggering the LH surge that causes ovulation. After ovulation, progesterone returns to negative feedback.
      `
    },
    {
      id: 'end6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which event directly triggers ovulation in the menstrual cycle?',
            options: [
              'A drop in progesterone levels',
              'A surge in FSH from the anterior pituitary',
              'A surge in LH triggered by high estrogen levels',
              'The release of GnRH inhibitors from the hypothalamus'
            ],
            correctAnswer: 2,
            explanation: 'Ovulation is triggered by a massive surge of LH from the anterior pituitary. This LH surge is caused by high estrogen levels switching from negative to positive feedback. FSH helps develop the follicle but does not directly trigger ovulation.'
          },
          {
            question: 'A researcher removes the corpus luteum from a pregnant animal early in gestation. What would most likely happen?',
            options: [
              'Estrogen levels would increase dramatically',
              'The pregnancy would fail due to loss of progesterone',
              'FSH levels would decrease',
              'Testosterone production would increase'
            ],
            correctAnswer: 1,
            explanation: 'The corpus luteum produces progesterone, which maintains the endometrium and supports early pregnancy. Removing it eliminates the progesterone source, causing the endometrium to break down and the pregnancy to fail (in early pregnancy, before the placenta takes over progesterone production).'
          }
        ]
      }
    },
    {
      id: 'end6-other',
      type: 'text' as const,
      content: `
## Melatonin, Growth Hormone & Thyroid Hormones

### Melatonin
| Feature | Detail |
|---------|--------|
| **Source** | Pineal gland (in the brain) |
| **Type** | Amino acid-derived (from tryptophan) |
| **Function** | Regulates circadian rhythms (sleep-wake cycle) |
| **Regulation** | Secretion increases in darkness; light inhibits release |
| **AP relevance** | Connects to biological rhythms and environmental cues |

### Growth Hormone (GH)
| Feature | Detail |
|---------|--------|
| **Source** | Anterior pituitary |
| **Type** | Peptide hormone |
| **Function** | Stimulates cell growth, protein synthesis, and fat metabolism |
| **Target** | Liver (produces IGF-1), bone, muscle |
| **Regulation** | GHRH stimulates; Somatostatin inhibits |
| **Disorders** | Excess in children → gigantism; Excess in adults → acromegaly; Deficiency → dwarfism |

### Thyroid Hormones (T3 and T4)
| Feature | Detail |
|---------|--------|
| **Source** | Thyroid gland (requires iodine) |
| **Type** | Amino acid-derived (modified tyrosine with iodine) |
| **Function** | Increase basal metabolic rate; stimulate oxygen consumption and heat production |
| **Regulation** | TRH → TSH → T3/T4 → negative feedback |
| **Disorders** | Hypothyroidism: low metabolism, weight gain, fatigue; Hyperthyroidism: high metabolism, weight loss, heat intolerance |

> 📝 **AP Note:** T3 (triiodothyronine) is the more biologically active form. T4 (thyroxine) is produced in greater quantities but is converted to T3 in target tissues.
      `
    },
    {
      id: 'end6-calcium',
      type: 'text' as const,
      content: `
## Calcium Regulation: PTH vs. Calcitonin

Blood calcium levels are regulated by two **antagonistic hormones** — a pattern similar to insulin/glucagon for glucose.

### Parathyroid Hormone (PTH)
| Feature | Detail |
|---------|--------|
| **Source** | Parathyroid glands (4 small glands behind the thyroid) |
| **Released when** | Blood calcium is LOW |
| **Effect** | RAISES blood calcium |
| **Mechanisms** | Stimulates osteoclasts to release $Ca^{2+}$ from bone; Increases $Ca^{2+}$ reabsorption in kidneys; Activates vitamin D → increases $Ca^{2+}$ absorption in intestines |

### Calcitonin
| Feature | Detail |
|---------|--------|
| **Source** | Thyroid gland (C cells / parafollicular cells) |
| **Released when** | Blood calcium is HIGH |
| **Effect** | LOWERS blood calcium |
| **Mechanisms** | Inhibits osteoclasts; Promotes $Ca^{2+}$ deposition into bone; Increases $Ca^{2+}$ excretion by kidneys |

### Calcium Homeostasis Summary
\`\`\`
Blood $Ca^{2+}$ LOW → PTH released → $Ca^{2+}$ released from bone,
                                   reabsorbed in kidneys,
                                   absorbed in intestines → $Ca^{2+}$ rises

Blood $Ca^{2+}$ HIGH → Calcitonin released → $Ca^{2+}$ deposited in bone,
                                          excreted by kidneys → $Ca^{2+}$ falls
\`\`\`

> 🔑 **PTH is the dominant regulator** of blood calcium in humans. Calcitonin plays a more significant role in other vertebrates (like fish and rodents) and is less critical in adult humans, but it is still tested on the AP exam as the antagonistic partner of PTH.
      `
    },
    {
      id: 'end6-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The corpus luteum primarily produces ___, which maintains the endometrium.',
            options: ['estrogen', 'testosterone', 'progesterone', 'FSH']
          },
          {
            label: 'Melatonin secretion by the pineal gland is highest during ___.',
            options: ['daylight', 'darkness', 'exercise', 'eating']
          },
          {
            label: 'When blood calcium is low, ___ is released to raise calcium levels.',
            options: ['calcitonin', 'PTH', 'insulin', 'aldosterone']
          },
          {
            label: 'Thyroid hormones require the mineral ___ for their synthesis.',
            options: ['calcium', 'iron', 'iodine', 'zinc']
          }
        ],
        correctAnswers: ['progesterone', 'darkness', 'PTH', 'iodine'],
        hint1: 'The corpus luteum forms from the ruptured follicle after ovulation.',
        hint2: 'Think about what happens to melatonin release when lights go off at night.',
        hint3: 'Iodine deficiency can cause goiter — an enlarged thyroid.',
        explanation: 'Progesterone from the corpus luteum maintains the endometrium for potential implantation. Melatonin is secreted in response to darkness, helping regulate the sleep-wake cycle. PTH (parathyroid hormone) raises low blood calcium by stimulating bone resorption, kidney reabsorption, and intestinal absorption. Thyroid hormones (T3 and T4) require iodine — deficiency causes hypothyroidism and goiter.'
      }
    }
  ]
}
