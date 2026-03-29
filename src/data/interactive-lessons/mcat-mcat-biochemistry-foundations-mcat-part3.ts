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
    },
    {
      id: 'bc3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Glycolysis & Gluconeogenesis

<details>
<summary><b>Example 1: Predict glycolysis flux from metabolite levels</b></summary>

**Question:** A hepatocyte has high ATP, high citrate, and low AMP. What happens to glycolysis?

**Solution:**
1. ATP and citrate both inhibit PFK-1.
2. Low AMP removes a major activator of PFK-1.
3. PFK-1 activity falls, so F6P to F-1,6-BP slows.
4. Net effect: glycolytic flux decreases and glucose is conserved.

**MCAT tip:** If ATP and citrate are both high, think "energy abundant" and downregulate glycolysis.
</details>

<details>
<summary><b>Example 2: Explain lactate production during exercise</b></summary>

**Question:** Why do muscle cells convert pyruvate to lactate during sprinting?

**Solution:**
1. Electron transport cannot oxidize NADH fast enough under low oxygen delivery.
2. Glycolysis still needs NAD+ at glyceraldehyde-3-phosphate dehydrogenase.
3. Lactate dehydrogenase converts pyruvate to lactate and regenerates NAD+.
4. This allows ATP production from glycolysis to continue short term.

**MCAT tip:** Lactate formation is about NAD+ regeneration, not ATP gain from that step itself.
</details>

<details>
<summary><b>Example 3: Match irreversible glycolysis steps to bypass enzymes</b></summary>

**Question:** Which enzymes bypass the three irreversible glycolysis steps in gluconeogenesis?

**Solution:**
1. Hexokinase/glucokinase bypass: **glucose-6-phosphatase**.
2. PFK-1 bypass: **fructose-1,6-bisphosphatase**.
3. Pyruvate kinase bypass: **pyruvate carboxylase** then **PEP carboxykinase (PEPCK)**.

**MCAT tip:** The PFK-1 and fructose-1,6-bisphosphatase pair is a common regulation target in passage questions.
</details>`
    }
  ]
};
