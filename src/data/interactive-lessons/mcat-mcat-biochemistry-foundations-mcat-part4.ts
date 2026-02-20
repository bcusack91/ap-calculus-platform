export const mcatBiochemPart4Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'bc4-intro',
      type: 'text' as const,
      content: `# Biochemistry Foundations

**Part 4 of 7 — TCA Cycle & Oxidative Phosphorylation**

### TCA Cycle (Mitochondrial Matrix)

$$\\text{Acetyl-CoA} + \\text{OAA} \\to \\text{Citrate} \\to \\cdots \\to \\text{OAA (regenerated)}$$

**Per acetyl-CoA**: 3 NADH, 1 FADH$_2$, 1 GTP

**Per glucose** (2 acetyl-CoA): 6 NADH, 2 FADH$_2$, 2 GTP from TCA

### Electron Transport Chain (Inner Mitochondrial Membrane)

| Complex | Accepts from | Pumps H$^+$ |
|---------|-------------|-------------|
| I (NADH dehydrogenase) | NADH | Yes (4 H$^+$) |
| II (Succinate dehydrogenase) | FADH$_2$ | No |
| III (Cytochrome bc1) | CoQ | Yes (4 H$^+$) |
| IV (Cytochrome c oxidase) | Cyt c → O$_2$ | Yes (2 H$^+$) |
| ATP Synthase (V) | H$^+$ gradient | Makes ATP |

### ATP Yield Per Glucose (approximate)

- Glycolysis: 2 ATP + 2 NADH (~3-5 ATP)
- PDH: 2 NADH (~5 ATP)
- TCA: 6 NADH (~15 ATP) + 2 FADH$_2$ (~3 ATP) + 2 GTP
- **Total: ~30-32 ATP per glucose**`
    },
    {
      id: 'bc4-quiz1',
      type: 'multiple-choice' as const,
      content: `**TCA & ETC** 🎯`,
      exercise: {
        questions: [
          {
            question: `Cyanide poisoning inhibits Complex IV. The IMMEDIATE effect is:`,
            options: [`NADH accumulates, ETC stops, no proton gradient, no ATP synthesis`, `Only Complex IV stops, others continue normally`, `ATP synthase runs in reverse`, `Glycolysis is inhibited`],
            correctAnswer: 0,
            explanation: `If Complex IV is blocked, electrons cannot pass to O$_2$. All upstream complexes become fully reduced and stop. No proton pumping → no gradient → no oxidative phosphorylation. NADH and FADH$_2$ accumulate.`
          },
          {
            question: `FADH$_2$ produces fewer ATP than NADH because:`,
            options: [`FADH$_2$ enters at Complex II, bypassing Complex I (fewer protons pumped)`, `FADH$_2$ has less energy than NADH`, `FADH$_2$ cannot cross the membrane`, `$FADH_2$ is used only in the TCA cycle`],
            correctAnswer: 0,
            explanation: `FADH$_2$ donates electrons to Complex II, which does NOT pump protons. NADH enters at Complex I, which DOES pump protons. So FADH$_2$ contributes to fewer H$^+$ pumped → fewer ATP (~1.5 vs ~2.5 per electron pair).`
          }
        ]
      }
    },
    {
      id: 'bc4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- TCA: 3 NADH + 1 FADH$_2$ + 1 GTP per acetyl-CoA
- ETC: NADH → Complex I; FADH$_2$ → Complex II (fewer ATP)
- Poisons: Rotenone (I), Antimycin A (III), Cyanide/CO (IV), Oligomycin (ATP synthase)
- ~30-32 ATP per glucose total (aerobic metabolism)`
    }
  ]
};
