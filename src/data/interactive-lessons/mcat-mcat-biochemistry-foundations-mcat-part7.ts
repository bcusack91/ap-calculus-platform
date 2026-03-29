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
    },
    {
      id: 'bc7-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Metabolic Integration

<details>
<summary><b>Example 1: Predict pathway dominance after an overnight fast</b></summary>

**Question:** A healthy person has fasted for 14 hours. Which liver pathways are upregulated?

**Solution:**
1. Hormone state shifts to low insulin and higher glucagon.
2. Glycogenolysis is active early in fasting.
3. Gluconeogenesis rises as fasting continues.
4. Lipolysis in adipose tissue increases fatty acid delivery to liver.
5. Hepatic beta-oxidation rises to provide ATP for gluconeogenesis.

**MCAT tip:** Pair fasting with glucagon, glucose output, and increased fatty acid use.
</details>

<details>
<summary><b>Example 2: Connect malonyl-CoA to fat oxidation</b></summary>

**Question:** Why is beta-oxidation low in the fed state even when fatty acids are available?

**Solution:**
1. Insulin promotes acetyl-CoA carboxylase activity.
2. Malonyl-CoA concentration rises.
3. Malonyl-CoA inhibits CPT-I.
4. Long-chain fatty acids cannot enter mitochondria efficiently.
5. Fat oxidation drops while synthesis/storage pathways dominate.

**MCAT tip:** High malonyl-CoA is a direct signal that mitochondrial fatty acid entry is blocked.
</details>

<details>
<summary><b>Example 3: Explain diabetic ketoacidosis mechanism</b></summary>

**Question:** In untreated Type 1 diabetes, why do ketone bodies rise despite hyperglycemia?

**Solution:**
1. Absolute insulin deficiency makes cells unable to use glucose effectively.
2. Counterregulatory hormones rise, especially glucagon.
3. Adipose lipolysis releases large amounts of fatty acids.
4. Liver increases beta-oxidation, generating excess acetyl-CoA.
5. Oxaloacetate is diverted to gluconeogenesis, limiting TCA flux.
6. Excess acetyl-CoA is shunted to ketogenesis.

Result: elevated acetoacetate and beta-hydroxybutyrate, causing metabolic acidosis.

**MCAT tip:** DKA is a hormone-signaling problem first, glucose concentration problem second.
</details>`
    }
  ]
};
