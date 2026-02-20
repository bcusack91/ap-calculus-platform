export const mcatPhysElecPart7Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'pe7-intro',
      type: 'text' as const,
      content: `# Physics: Electricity, Magnetism & Optics

**Part 7 of 7 — Atomic & Nuclear Physics**

### Atomic Models on the MCAT

- **Bohr model**: Electrons in quantized orbits. $E_n = -13.6/n^2$ eV (for hydrogen).
- Photon emitted when electron drops levels: $E = hf = E_{high} - E_{low}$

### Nuclear Physics

$$^A_Z X \\qquad A = \\text{mass number}, Z = \\text{atomic number}$$

### Radioactive Decay Types

| Type | Particle | Change in $A$ | Change in $Z$ |
|------|----------|--------------|--------------|
| Alpha ($\\alpha$) | $^4_2\\text{He}$ | $-4$ | $-2$ |
| Beta$^-$ ($\\beta^-$) | Electron | $0$ | $+1$ |
| Beta$^+$ ($\\beta^+$) | Positron | $0$ | $-1$ |
| Gamma ($\\gamma$) | Photon | $0$ | $0$ |

### Half-Life

$$N = N_0\\left(\\frac{1}{2}\\right)^{t/t_{1/2}}$$

After $n$ half-lives: $N = N_0/2^n$`
    },
    {
      id: 'pe7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Nuclear Physics** 🎯',
      exercise: {
        questions: [
          {
            question: 'A radioactive sample has a half-life of 8 days. After 24 days, what fraction remains?',
            options: ['$1/8$ (3 half-lives: $1/2^3$)', '$1/4$', '$1/16$', '$1/3$'],
            correctAnswer: 0,
            explanation: 'Number of half-lives = $24/8 = 3$. Remaining = $(1/2)^3 = 1/8$.'
          },
          {
            question: '$^{238}_{92}\\text{U}$ undergoes alpha decay. The daughter nucleus is:',
            options: ['$^{234}_{90}\\text{Th}$ ($A - 4$, $Z - 2$)', '$^{238}_{93}\\text{Np}$', '$^{234}_{92}\\text{U}$', '$^{238}_{90}\\text{Th}$'],
            correctAnswer: 0,
            explanation: 'Alpha decay emits $^4_2\\text{He}$: $A$ decreases by 4 (238→234) and $Z$ decreases by 2 (92→90). Element 90 = Thorium.'
          }
        ]
      }
    },
    {
      id: 'pe7-summary',
      type: 'text' as const,
      content: `### Physics E&M/Optics — Complete! ✅

Master circuits, optics (lens/mirror equation), and nuclear decay. These are the most tested physics topics. Remember: the MCAT is more conceptual than computational — understand WHY, not just how to calculate.`
    }
  ]
};
