export const mcatAnatPhysPart3Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'ap3-intro',
      type: 'text' as const,
      content: `# Anatomy & Physiology for the MCAT

**Part 3 of 7 — Embryology & Development**

### Early Development

| Stage | Description | Timing |
|-------|-------------|--------|
| Fertilization | Sperm + egg → zygote | Day 0 |
| Cleavage | Mitotic divisions (no growth) | Days 1-4 |
| Morula | Solid ball of 16+ cells | Day 3-4 |
| Blastula/Blastocyst | Hollow ball, inner cell mass + trophoblast | Day 5-6 |
| Implantation | Blastocyst embeds in endometrium | Day 6-12 |
| Gastrulation | 3 germ layers form | Week 3 |

### Three Germ Layers (ULTRA HIGH YIELD)

| Layer | Becomes |
|-------|---------|
| **Ectoderm** | Nervous system (brain, spinal cord), skin (epidermis), hair, nails, lens of eye |
| **Mesoderm** | Muscle, bone, cardiovascular, kidneys, gonads, blood |
| **Endoderm** | GI tract lining, lungs, liver, pancreas, thyroid |

### Mnemonic for Germ Layers

- **Ectoderm**: Everything you can see or think with (skin + nervous system)
- **Mesoderm**: "Meso-derm" = Middle = Muscle, bone, blood
- **Endoderm**: Endoderm = Inner lining = digestive/respiratory lining`
    },
    {
      id: 'ap3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Embryology** 🎯',
      exercise: {
        questions: [
          {
            question: 'The nervous system develops from which germ layer?',
            options: ['Ectoderm — via neurulation (neural plate → neural tube)', 'Mesoderm', 'Endoderm', 'Trophoblast'],
            correctAnswer: 0,
            explanation: 'The ectoderm forms the neural plate, which folds into the neural tube (future brain and spinal cord). This process is neurulation. Neural crest cells (also from ectoderm) form PNS, melanocytes, adrenal medulla.'
          }
        ]
      }
    },
    {
      id: 'ap3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Fertilization → Cleavage → Morula → Blastocyst → Gastrulation
- Three germ layers: Ecto (skin/nervous), Meso (muscle/bone/blood), Endo (GI/lung lining)
- Neurulation: neural plate → neural tube (from ectoderm)
- Germ layer derivatives are GUARANTEED MCAT questions`
    }
  ]
};
