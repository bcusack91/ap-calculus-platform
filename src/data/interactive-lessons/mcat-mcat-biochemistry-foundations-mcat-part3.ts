export const mcatBiochemPart3Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'bc3-intro',
      type: 'text' as const,
      content: `# Biochemistry Foundations

**Part 3 of 7 — Glycolysis & Gluconeogenesis**

### Glycolysis (Cytoplasm, Anaerobic)

$$\\text{Glucose} \\xrightarrow{10\\text{ steps}} 2\\text{ Pyruvate}$$

**Net yield per glucose**: 2 ATP, 2 NADH, 2 Pyruvate

### Key Regulatory Enzymes (HIGH YIELD!)

| Enzyme | Step | Activated by | Inhibited by |
|--------|------|-------------|-------------|
| Hexokinase | Glucose → G6P | — | G6P (product inhibition) |
| PFK-1 | F6P → F-1,6-BP | AMP, fructose-2,6-BP | ATP, citrate |
| Pyruvate kinase | PEP → Pyruvate | F-1,6-BP | ATP, alanine |

**PFK-1 is the PRIMARY rate-limiting step of glycolysis!**

### Pyruvate Fates

| Condition | Pathway | Product |
|-----------|---------|---------|
| Aerobic | Pyruvate dehydrogenase | Acetyl-CoA → TCA |
| Anaerobic (muscle) | Lactate dehydrogenase | Lactate (regenerates NAD$^+$) |
| Anaerobic (yeast) | Pyruvate decarboxylase | Ethanol + CO$_2$ |

Gluconeogenesis bypasses the three irreversible glycolysis steps using pyruvate carboxylase/PEPCK, fructose-1,6-bisphosphatase, and glucose-6-phosphatase.`
    },
    {
      id: 'bc3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Glycolysis** 🎯`,
      exercise: {
        questions: [
          {
            question: `A cell is exposed to high levels of ATP and citrate. The DIRECT effect on glycolysis is:`,
            options: [`PFK-1 is inhibited, slowing glycolysis`, `Hexokinase is activated`, `Pyruvate kinase is activated`, `Glycolysis speeds up`],
            correctAnswer: 0,
            explanation: `Both ATP and citrate are allosteric inhibitors of PFK-1, the rate-limiting enzyme. This signals that the cell has plenty of energy and TCA intermediates.`
          },
          {
            question: `During vigorous exercise, muscle cells produce lactate primarily to:`,
            options: [`Regenerate NAD$^+$ to continue glycolysis`, `Produce more ATP`, `Feed into the TCA cycle`, `Prevent acidosis`],
            correctAnswer: 0,
            explanation: `Lactate dehydrogenase converts pyruvate → lactate while oxidizing NADH → NAD$^+$. The regenerated NAD$^+$ is needed for glyceraldehyde-3-P dehydrogenase (step 6) to keep glycolysis running anaerobically.`
          },
          {
            question: `The primary rate-limiting enzyme of glycolysis is:`,
            options: [`Hexokinase`, `PFK-1`, `Pyruvate kinase`, `Lactate dehydrogenase`],
            correctAnswer: 1,
            explanation: `PFK-1 is the committed, major regulatory step and the classic rate-limiting enzyme for glycolysis.`
          },
          {
            question: `High fructose-2,6-bisphosphate tends to:`,
            options: [`Inhibit glycolysis`, `Activate glycolysis`, `Block pyruvate kinase`, `Activate glycogenolysis only`],
            correctAnswer: 1,
            explanation: `Fructose-2,6-bisphosphate activates PFK-1 and promotes glycolytic flux.`
          }
        ]
      }
    },
    {
      id: 'bc3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Glycolysis: glucose → 2 pyruvate + 2 ATP + 2 NADH (cytoplasm)
- PFK-1 is the key regulatory enzyme — know its activators and inhibitors
- Lactate production regenerates NAD$^+$ for anaerobic glycolysis to continue
- Gluconeogenesis bypasses the 3 irreversible steps with different enzymes`
    }
  ]
};
