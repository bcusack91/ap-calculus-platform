export const mcatCellBioPart2Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'cb2-intro',
      type: 'text' as const,
      content: `# Cell Biology for the MCAT

**Part 2 of 7 — Cell Membrane & Transport**

### Membrane Structure (Fluid Mosaic Model)

- **Phospholipid bilayer**: Hydrophilic heads out, hydrophobic tails in
- **Cholesterol**: Regulates fluidity (prevents crystallization at low T, prevents too much fluidity at high T)
- **Integral proteins**: Span the membrane (channels, receptors)
- **Peripheral proteins**: Loosely attached to surface

### Transport Mechanisms

| Type | Energy? | Direction | Examples |
|------|---------|-----------|---------|
| Simple diffusion | No | High → Low | O$_2$, CO$_2$, small nonpolar |
| Facilitated diffusion | No | High → Low | Glucose (GLUT), ions (channels) |
| Active transport | Yes (ATP) | Low → High | Na$^+$/K$^+$ ATPase |
| Endocytosis | Yes | Into cell | Phagocytosis, pinocytosis |
| Exocytosis | Yes | Out of cell | Neurotransmitter release |

### Na$^+$/K$^+$ ATPase (ULTRA HIGH YIELD)

Per ATP hydrolyzed: **3 Na$^+$ out, 2 K$^+$ in**
- Creates electrochemical gradient
- Maintains resting membrane potential (~$-70$ mV)
- Electrogenic (net positive charge moved out)`
    },
    {
      id: 'cb2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Membrane Transport** 🎯',
      exercise: {
        questions: [
          {
            question: 'A cell is placed in a hypertonic solution. The cell will:',
            options: ['Shrink (crenation) — water moves out by osmosis', 'Swell and potentially lyse', 'Remain unchanged', 'Divide'],
            correctAnswer: 0,
            explanation: 'Hypertonic = higher solute concentration outside. Water follows solute (moves out by osmosis) → cell shrinks. In RBCs, this is called crenation.'
          },
          {
            question: 'The Na$^+$/K$^+$ ATPase pumps:',
            options: ['3 Na$^+$ out and 2 K$^+$ in per ATP', '2 Na$^+$ out and 3 K$^+$ in per ATP', '3 Na$^+$ in and 2 K$^+$ out per ATP', 'Equal numbers of Na$^+$ and K$^+$'],
            correctAnswer: 0,
            explanation: '3 Na$^+$ out, 2 K$^+$ in per ATP. This makes the pump electrogenic (net positive charge moved outside), contributing to the negative resting membrane potential (~$-70$ mV).'
          }
        ]
      }
    },
    {
      id: 'cb2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Fluid mosaic model: phospholipids + cholesterol + proteins
- Small nonpolar molecules cross membranes freely; ions and large molecules need help
- Na$^+$/K$^+$ ATPase: 3 Na$^+$ out, 2 K$^+$ in (electrogenic)
- Osmosis: water moves toward higher solute concentration`
    }
  ]
};
