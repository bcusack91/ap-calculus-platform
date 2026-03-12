export const mcatAnatPhysPart6Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'ap6-intro',
      type: 'text' as const,
      content: `# Anatomy & Physiology for the MCAT

**Part 6 of 7 — Blood & Lymphatic System**

### Blood Components

| Component | % of Blood | Function |
|-----------|-----------|----------|
| Plasma | ~55% | Water, proteins (albumin, fibrinogen, antibodies), electrolytes |
| RBCs (erythrocytes) | ~45% | O$_2$ transport (hemoglobin) |
| WBCs (leukocytes) | <1% | Immune defense |
| Platelets (thrombocytes) | <1% | Clotting |

### Hemostasis (Blood Clotting)

1. **Vascular spasm**: Blood vessel constricts
2. **Platelet plug**: Platelets adhere to collagen, aggregate
3. **Coagulation cascade**: Fibrinogen → Fibrin (via thrombin) → stable clot

### Hematocrit

$$\\text{Hematocrit} = \\frac{\\text{Volume of RBCs}}{\\text{Total blood volume}} \\times 100$$

Normal: ~45%. Elevated in dehydration or polycythemia. Decreased in anemia.

### Lymphatic System

- Returns excess interstitial fluid to blood
- **Lymph nodes**: Filter lymph, contain B and T cells
- **Spleen**: Filters blood, removes old RBCs
- **Thymus**: T cell maturation`
    },
    {
      id: 'ap6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Blood & Lymph** 🎯`,
      exercise: {
        questions: [
          {
            question: `A patient is severely dehydrated. Their hematocrit would be:`,
            options: [`Elevated — plasma volume decreases, but RBC count stays the same (relative polycythemia)`, `Decreased`, `Normal`, `Zero`],
            correctAnswer: 0,
            explanation: `Dehydration decreases plasma volume. Since hematocrit = RBC volume / total blood volume, the RBC percentage increases (even though absolute RBC count hasn't changed). This is called relative polycythemia.`
          }
        ]
      }
    },
    {
      id: 'ap6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Blood: 55% plasma + 45% RBCs (hematocrit) + <1% WBCs/platelets
- Clotting cascade: vascular spasm → platelet plug → fibrin mesh
- Lymphatic system: returns fluid, filters pathogens, T cell maturation (thymus)
- Spleen filters blood; lymph nodes filter lymph`
    }
  ]
};
