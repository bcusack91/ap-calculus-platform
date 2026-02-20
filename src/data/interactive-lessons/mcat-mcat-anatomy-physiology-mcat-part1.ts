export const mcatAnatPhysPart1Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'ap1-intro',
      type: 'text' as const,
      content: `# Anatomy & Physiology for the MCAT

**Part 1 of 7 — Musculoskeletal System**

### Muscle Contraction: Sliding Filament Theory

1. Ca$^{2+}$ released from sarcoplasmic reticulum (SR)
2. Ca$^{2+}$ binds troponin → tropomyosin moves → exposes actin binding sites
3. Myosin heads bind actin (cross-bridge formation)
4. Power stroke: myosin pulls actin toward center (uses ATP)
5. ATP binds myosin → detachment → cycle repeats

### Sarcomere Structure

| Band/Zone | Changes during contraction? | What it contains |
|-----------|---------------------------|------------------|
| A band | NO (stays same length) | Full myosin length (+ overlap region) |
| I band | DECREASES | Actin only (no myosin overlap) |
| H zone | DECREASES | Myosin only (no actin overlap) |
| Z line | Move closer together | Boundary of sarcomere |

**Mnemonic**: "**H**appy **I** **S**hrink" — H zone and I band shrink during contraction. A band stays the same.

### Bone Structure

- **Osteoblasts**: BUILD bone (deposit calcium)
- **Osteoclasts**: Break down (CLAST = break) bone (resorb calcium)
- **Osteocytes**: Mature bone cells (maintenance)

Bone remodeling regulated by PTH (stimulates osteoclasts → Ca$^{2+}$ into blood) and calcitonin (stimulates osteoblasts → Ca$^{2+}$ into bone).`
    },
    {
      id: 'ap1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Muscle & Bone** 🎯`,
      exercise: {
        questions: [
          {
            question: `During muscle contraction, the A band:`,
            options: [`Stays the same length — it represents the full length of thick filaments`, `Gets shorter`, `Gets longer`, `Disappears`],
            correctAnswer: 0,
            explanation: `The A band = full length of myosin (thick filaments). Since neither actin nor myosin gets shorter (they slide past each other), the A band doesn't change. Only H zone and I band decrease.`
          },
          {
            question: `Rigor mortis occurs because:`,
            options: [`No ATP is available to detach myosin from actin after death`, `Calcium leaks back into the SR`, `Muscles receive excess nervous stimulation`, `Tropomyosin permanently covers binding sites`],
            correctAnswer: 0,
            explanation: `ATP is needed for myosin to release from actin (and for Ca$^{2+}$ pump to return Ca$^{2+}$ to SR). After death, ATP production stops → myosin locked to actin → muscles remain stiff.`
          }
        ]
      }
    },
    {
      id: 'ap1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Sliding filament: Ca$^{2+}$ → troponin → tropomyosin moves → cross-bridge cycling
- A band = constant. H zone and I band shrink during contraction.
- Osteoblasts build. Osteoclasts break. PTH raises blood Ca$^{2+}$.
- ATP needed for both contraction AND relaxation (rigor mortis!)`
    }
  ]
};
