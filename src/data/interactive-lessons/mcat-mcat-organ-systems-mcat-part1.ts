export const mcatOrganSysPart1Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'os1-intro',
      type: 'text' as const,
      content: `# Organ Systems for the MCAT

**Part 1 of 7 — Cardiovascular System**

### Heart Structure

- 4 chambers: RA → RV → Lungs → LA → LV → Body
- Right side: deoxygenated blood to lungs (pulmonary circulation)
- Left side: oxygenated blood to body (systemic circulation)
- LV has thickest walls (pumps against systemic resistance)

### Cardiac Cycle

| Phase | AV Valves | Semilunar Valves | What happens |
|-------|-----------|-----------------|-------------|
| Atrial systole | Open | Closed | Atria contract, blood into ventricles |
| Ventricular systole | Closed (S1) | Open | Ventricles contract, blood into arteries |
| Diastole | Open | Closed (S2) | Ventricles relax, fill with blood |

### Key Equations

$$\\text{Cardiac Output} = \\text{HR} \\times \\text{Stroke Volume}$$

$$\\text{Blood Pressure} = \\text{CO} \\times \\text{Total Peripheral Resistance}$$

### Blood Vessel Types

- **Arteries**: Thick walls, elastic, carry blood FROM heart
- **Veins**: Thin walls, valves, carry blood TO heart
- **Capillaries**: Single cell thick, site of exchange`
    },
    {
      id: 'os1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Cardiovascular** 🎯',
      exercise: {
        questions: [
          {
            question: 'During exercise, cardiac output increases primarily through:',
            options: ['Increased heart rate AND increased stroke volume', 'Increased heart rate only', 'Decreased peripheral resistance only', 'Increased blood vessel diameter only'],
            correctAnswer: 0,
            explanation: 'CO = HR $\\times$ SV. During exercise, sympathetic activation increases both HR (via SA node stimulation) and SV (via increased contractility and venous return). Both contribute to the ~4-5x increase in CO during vigorous exercise.'
          }
        ]
      }
    },
    {
      id: 'os1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- CO = HR $\\times$ SV; BP = CO $\\times$ TPR
- Left ventricle = thickest (systemic pressure)
- S1 = AV valves close (lub); S2 = semilunar valves close (dub)
- Capillaries = site of gas/nutrient exchange (largest total cross-sectional area)`
    }
  ]
};
