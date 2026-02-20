export const mcatAnatPhysPart5Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'ap5-intro',
      type: 'text' as const,
      content: `# Anatomy & Physiology for the MCAT

**Part 5 of 7 — Special Senses**

### Vision

| Structure | Function |
|-----------|----------|
| Cornea | Refracts light (most refraction here!) |
| Lens | Fine-tunes focus (accommodation) |
| Retina | Contains photoreceptors |
| Rods | Dim light, peripheral vision (no color) |
| Cones | Color vision, high acuity (3 types: R, G, B) |
| Fovea | Highest cone density = sharpest vision |

### Hearing

Sound waves → Pinna → Ear canal → Tympanic membrane (vibrates) → Ossicles (malleus, incus, stapes) → Oval window → Cochlea → Hair cells → Auditory nerve → Brain

- **Cochlea**: Tonotopic organization (base = high frequency, apex = low frequency)
- **Hair cells**: Stereocilia bend → mechanotransduction → neural signal

### Taste & Smell

- **Taste**: 5 basic modalities (sweet, salty, sour, bitter, umami)
- **Smell**: Olfactory receptors in nasal epithelium → olfactory bulb → limbic system
- Smell is the ONLY sense that bypasses the thalamus (connects directly to limbic system → emotional memories)`
    },
    {
      id: 'ap5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Senses** 🎯`,
      exercise: {
        questions: [
          {
            question: `A person with damage to the fovea would have difficulty with:`,
            options: [`Detailed central vision (reading, face recognition) — the fovea has the highest concentration of cones`, `Peripheral vision`, `Night vision`, `Hearing`],
            correctAnswer: 0,
            explanation: `The fovea contains the highest density of cones (responsible for color and fine detail vision). Foveal damage destroys central/sharp vision while peripheral vision (rod-dependent) may be preserved — this is macular degeneration.`
          }
        ]
      }
    },
    {
      id: 'ap5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Rods = dim light/peripheral. Cones = color/acuity (concentrated in fovea).
- Hearing: sound → ossicles → cochlea → hair cells (mechanotransduction)
- Smell is unique: bypasses thalamus, connects directly to limbic system
- Cornea does most light refraction; lens fine-tunes it`
    }
  ]
};
