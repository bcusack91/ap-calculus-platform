export const mcatBiochemPart5Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'bc5-intro',
      type: 'text' as const,
      content: `# Biochemistry Foundations

**Part 5 of 7 — Lipids & Fatty Acid Metabolism**

### Lipid Classification

| Type | Structure | Function |
|------|-----------|----------|
| Triglycerides | 3 fatty acids + glycerol | Energy storage |
| Phospholipids | 2 fatty acids + glycerol + phosphate head | Membranes |
| Steroids | 4 fused rings | Hormones (cholesterol, testosterone, estrogen) |
| Sphingolipids | Sphingosine backbone | Myelin, cell signaling |

### $\\beta$-Oxidation (Mitochondrial Matrix)

Each cycle removes 2 carbons and produces:
- 1 NADH, 1 FADH$_2$, 1 Acetyl-CoA

$$\\text{Palmitate (C16)} \\to 7\\text{ cycles} \\to 8\\text{ Acetyl-CoA} + 7\\text{ NADH} + 7\\text{ FADH}_2$$

Total ATP from palmitate: $8(10) + 7(2.5) + 7(1.5) - 2 = 106$ ATP

### Why Fats Store More Energy Than Carbs

Fats are more reduced (more C-H bonds) → more electrons to donate to ETC → more ATP per gram (~9 kcal/g vs ~4 kcal/g for carbs).

In fasting, lipolysis and beta-oxidation increase while fatty acid synthesis decreases due to hormonal regulation (low insulin, high glucagon).`
    },
    {
      id: 'bc5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Lipid Metabolism** 🎯`,
      exercise: {
        questions: [
          {
            question: `Carnitine shuttle is required for $\\beta$-oxidation because:`,
            options: [`Long-chain fatty acyl-CoA cannot cross the inner mitochondrial membrane without it`, `It activates fatty acids in the cytoplasm`, `It is the rate-limiting enzyme`, `Short-chain fatty acids need it for transport`],
            correctAnswer: 0,
            explanation: `The inner mitochondrial membrane is impermeable to long-chain acyl-CoA. Carnitine acyltransferase I (CPT-I) transfers the acyl group to carnitine for transport. CPT-I is also the rate-limiting step, inhibited by malonyl-CoA.`
          },
          {
            question: `Malonyl-CoA inhibits CPT-I primarily to:`,
            options: [`Stimulate beta-oxidation`, `Prevent simultaneous fatty acid synthesis and oxidation`, `Increase ketone production`, `Activate carnitine transport`],
            correctAnswer: 1,
            explanation: `Malonyl-CoA is a fatty-acid synthesis signal and inhibits CPT-I to prevent futile cycling.`
          },
          {
            question: `Each round of beta-oxidation directly yields:`,
            options: [`2 NADH`, `1 NADH and 1 FADH$_2$`, `2 acetyl-CoA always`, `1 ATP directly`],
            correctAnswer: 1,
            explanation: `Each cycle produces 1 NADH, 1 FADH$_2$, and shortens chain by 2 carbons, releasing one acetyl-CoA (except final cleavage yields two acetyl-CoA).`
          }
        ]
      }
    },
    {
      id: 'bc5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- $\\beta$-oxidation: each cycle yields 1 NADH + 1 FADH$_2$ + 1 acetyl-CoA
- Carnitine shuttle: required for long-chain FA entry into mitochondria
- CPT-I is rate-limiting, inhibited by malonyl-CoA (fed state)
- Fats yield ~9 kcal/g vs ~4 kcal/g for carbs/protein`
    }
  ]
};
