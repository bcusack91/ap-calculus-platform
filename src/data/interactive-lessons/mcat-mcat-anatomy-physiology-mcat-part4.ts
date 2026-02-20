export const mcatAnatPhysPart4Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'ap4-intro',
      type: 'text' as const,
      content: `# Anatomy & Physiology for the MCAT

**Part 4 of 7 — Skin & Integumentary System**

### Skin Layers

From outside to inside:
1. **Epidermis** (epithelial): Keratinocytes, melanocytes, no blood vessels
2. **Dermis**: Connective tissue, blood vessels, hair follicles, nerve endings, sweat glands
3. **Hypodermis** (subcutaneous): Fat storage, insulation

### Skin Functions

| Function | Mechanism |
|----------|-----------|
| Protection | Barrier against pathogens, UV (melanin) |
| Thermoregulation | Sweat (evaporative cooling), vasoconstriction/vasodilation |
| Sensation | Mechanoreceptors, thermoreceptors, nociceptors |
| Vitamin D synthesis | UV converts 7-dehydrocholesterol → cholecalciferol |
| Excretion | Sweat removes small amounts of waste |

### Thermoregulation

**Hot environment**:
- Vasodilation (increased blood flow to skin → heat loss)
- Sweating (evaporative cooling)

**Cold environment**:
- Vasoconstriction (reduced blood flow to skin → conserves heat)
- Shivering (muscle contraction generates heat)
- Piloerection (goosebumps — minimal effect in humans)`
    },
    {
      id: 'ap4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Integumentary** 🎯',
      exercise: {
        questions: [
          {
            question: 'A burn that destroys the epidermis and part of the dermis is classified as:',
            options: ['Second-degree (partial thickness) — blistering occurs because fluid leaks between layers', 'First-degree (superficial)', 'Third-degree (full thickness)', 'Fourth-degree'],
            correctAnswer: 0,
            explanation: 'First-degree = epidermis only (sunburn). Second-degree = epidermis + partial dermis (blistering). Third-degree = through the full dermis (painless because nerve endings destroyed). Second-degree burns are actually the most painful.'
          }
        ]
      }
    },
    {
      id: 'ap4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Epidermis = outer, no blood vessels. Dermis = inner, blood supply.
- Thermoregulation: vasodilation + sweating (hot) or vasoconstriction + shivering (cold)
- Vitamin D synthesis begins in skin with UV exposure
- Melanin protects against UV damage`
    }
  ]
};
