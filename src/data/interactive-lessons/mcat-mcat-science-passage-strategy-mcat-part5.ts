export const mcatSciPassagePart5Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'sp5-intro',
      type: 'text' as const,
      content: `# Science Passage Strategy for the MCAT

**Part 5 of 7 — Chemistry & Physics Passage Tactics**

### Chem/Phys Passage Features

- Heavy on calculations, equations, and graphs
- Often present novel experiments with familiar chemistry/physics concepts
- Reaction mechanisms and energy diagrams are common

### Calculation Strategy

1. **Estimate first**: Round numbers to make mental math easier
2. **Use scientific notation**: Convert large/small numbers
3. **Check units**: Answer must have correct units (dimensional analysis)
4. **Sanity check**: Does the answer make physical sense?

### Common Chem/Phys Passage Topics

| Topic | What to Look For |
|-------|-----------------|
| Acid-base | Henderson-Hasselbalch, titration curves, buffer capacity |
| Kinetics | Rate laws, Arrhenius equation, reaction order from data |
| Thermodynamics | $\\Delta G = \\Delta H - T\\Delta S$, spontaneity, coupled reactions |
| Circuits | Ohm's law, series vs. parallel, power |
| Optics | Snell's law, lens/mirror equations |

### Math Shortcuts

- $\\log(2) \\approx 0.3$, $\\log(3) \\approx 0.5$
- $e \\approx 2.718$
- For pH: $-\\log(2 \\times 10^{-3}) = 3 - \\log(2) \\approx 3 - 0.3 = 2.7$`
    },
    {
      id: 'sp5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Chem/Phys Tactics** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the pH of a $5 \\times 10^{-4}$ M HCl solution? (Use $\\log(5) \\approx 0.7$)',
            options: ['3.3 ($-\\log(5 \\times 10^{-4}) = 4 - 0.7 = 3.3$)', '4.0', '3.7', '2.3'],
            correctAnswer: 0,
            explanation: '$\\text{pH} = -\\log[\\text{H}^+] = -\\log(5 \\times 10^{-4}) = -(\\log 5 + \\log 10^{-4}) = -(0.7 - 4) = 3.3$. HCl is a strong acid (complete dissociation), so $[H^+] = 5 \\times 10^{-4}$ M directly.'
          }
        ]
      }
    },
    {
      id: 'sp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Estimate calculations — you have a calculator but mental math saves time
- Always check units and do sanity checks
- Know log shortcuts: $\\log 2 \\approx 0.3$, $\\log 3 \\approx 0.5$, $\\log 5 \\approx 0.7$
- Henderson-Hasselbalch, $\\Delta G$, Ohm's law are the most common equations`
    }
  ]
};
