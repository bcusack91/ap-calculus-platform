export const mcatOrganSysPart2Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'os2-intro',
      type: 'text' as const,
      content: `# Organ Systems for the MCAT

**Part 2 of 7 — Respiratory System**

### Gas Exchange

$$\\text{O}_2: \\text{Alveoli} \\to \\text{Blood} \\to \\text{Tissues}$$
$$\\text{CO}_2: \\text{Tissues} \\to \\text{Blood} \\to \\text{Alveoli}$$

- Driven by PARTIAL PRESSURE gradients (Fick's law)
- Alveoli maximize surface area for diffusion

### Oxygen Transport

- 98.5% bound to hemoglobin (Hb), 1.5% dissolved in plasma
- Each Hb binds 4 O$_2$ molecules
- **Cooperative binding**: Binding of first O$_2$ increases affinity for subsequent O$_2$ (sigmoidal curve)

### The Bohr Effect (MCAT FAVORITE)

Conditions that RIGHT-shift the O$_2$-Hb dissociation curve (promote O$_2$ unloading):
- Increased CO$_2$ (metabolically active tissue)
- Decreased pH (acidic — more CO$_2$)
- Increased temperature
- Increased 2,3-BPG

**Mnemonic**: Right shift = Release O$_2$ to tissues

### CO$_2$ Transport

- 70% as bicarbonate (HCO$_3^-$)
- 23% bound to Hb (carbaminohemoglobin)
- 7% dissolved in plasma`
    },
    {
      id: 'os2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Respiratory** 🎯',
      exercise: {
        questions: [
          {
            question: 'During intense exercise, the O$_2$-hemoglobin dissociation curve shifts RIGHT because:',
            options: ['Increased CO$_2$, lower pH, and higher temperature all promote O$_2$ release to working muscles', 'Muscles need less oxygen', 'Hemoglobin concentration increases', 'The lungs absorb more oxygen'],
            correctAnswer: 0,
            explanation: 'Active muscles produce CO$_2$ and heat, lowering local pH. All three factors right-shift the curve (Bohr effect), causing Hb to release more O$_2$ exactly where it\'s needed most.'
          }
        ]
      }
    },
    {
      id: 'os2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Gas exchange driven by partial pressure gradients
- O$_2$ transport: 98.5% on hemoglobin (cooperative binding, sigmoidal curve)
- Bohr effect: right shift = more O$_2$ release (higher CO$_2$, lower pH, higher temp)
- CO$_2$ transport: mostly as bicarbonate (70%)`
    }
  ]
};
