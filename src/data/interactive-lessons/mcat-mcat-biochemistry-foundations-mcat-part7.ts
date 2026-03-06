export const mcatBiochemPart7Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'bc7-intro',
      type: 'text' as const,
      content: `# Biochemistry Foundations

**Part 7 of 7 — Metabolic Regulation & Integration**

### Fed vs. Fasting State

| State | Insulin | Glucagon | Active Pathways |
|-------|---------|----------|----------------|
| Fed | High | Low | Glycolysis, glycogenesis, lipogenesis, protein synthesis |
| Fasting | Low | High | Gluconeogenesis, glycogenolysis, $\\beta$-oxidation, ketogenesis |

### Key Regulatory Hormones

- **Insulin**: promotes anabolism (storage). Activates PFK-1, pyruvate kinase, glycogen synthase.
- **Glucagon**: promotes catabolism (mobilization). Activates glycogen phosphorylase, lipase.
- **Epinephrine**: fight-or-flight. Similar to glucagon + increases heart rate.

### Metabolic Integration

- High ATP/NADH → inhibits TCA, glycolysis (feedback)
- Acetyl-CoA activates pyruvate carboxylase (gluconeogenesis) and inhibits PDH
- Malonyl-CoA (from fatty acid synthesis) inhibits CPT-I (blocks $\\beta$-oxidation)
- You can't do fatty acid synthesis AND $\\beta$-oxidation simultaneously!

Integrated MCAT passages often ask you to infer dominant pathways from hormone state plus one metabolite signal (ATP, acetyl-CoA, or malonyl-CoA).`
    },
    {
      id: 'bc7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Metabolic Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `After a 24-hour fast, which metabolic pathway is MOST active in the liver?`,
            options: [`Gluconeogenesis`, `Glycolysis`, `Fatty acid synthesis`, `Glycogenesis`],
            correctAnswer: 0,
            explanation: `After 24 hours, liver glycogen is depleted. Glucagon stimulates gluconeogenesis (making glucose from lactate, amino acids, glycerol) to maintain blood glucose for the brain.`
          },
          {
            question: `Insulin deficiency (Type 1 diabetes) leads to ketoacidosis because:`,
            options: [`Uncontrolled lipolysis floods the liver with fatty acids, producing excess ketone bodies`, `The liver cannot perform glycolysis`, `Excess glucose is converted to ketones`, `Muscle cells produce too much lactate`],
            correctAnswer: 0,
            explanation: `Without insulin: uncontrolled lipolysis → excess fatty acids → hepatic $\\beta$-oxidation → excess acetyl-CoA → ketone bodies (acetoacetate, $\\beta$-hydroxybutyrate, acetone). These are acids that lower blood pH.`
          },
          {
            question: `In the fed state, high insulin most directly promotes:`,
            options: [`Glycogenolysis`, `Gluconeogenesis`, `Glycogenesis and lipogenesis`, `Ketogenesis`],
            correctAnswer: 2,
            explanation: `Insulin signals nutrient abundance and promotes storage/anabolic pathways like glycogenesis and fatty acid synthesis.`
          },
          {
            question: `High hepatic malonyl-CoA is most consistent with:`,
            options: [`Active beta-oxidation`, `Inhibited CPT-I and reduced mitochondrial fatty acid entry`, `Low fatty acid synthesis`, `Fasting glucagon dominance`],
            correctAnswer: 1,
            explanation: `Malonyl-CoA inhibits CPT-I, suppressing long-chain fatty acid entry into mitochondria and reducing beta-oxidation.`
          }
        ]
      }
    },
    {
      id: 'bc7-summary',
      type: 'text' as const,
      content: `### Biochemistry Foundations — Complete! ✅

Key themes: Fed state = insulin = anabolism. Fasting = glucagon = catabolism. Know how pathways are coordinated and regulated — the MCAT loves integrative metabolic questions.`
    }
  ]
};
