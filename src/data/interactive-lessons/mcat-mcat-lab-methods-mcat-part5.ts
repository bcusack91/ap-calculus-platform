export const mcatLabMethodsPart5Data = {
  topicSlug: 'mcat-lab-methods-mcat',
  sections: [
    {
      id: 'lm5-intro',
      type: 'text' as const,
      content: `# Laboratory Methods & Separations

**Part 5 of 5 — Molecular & Immunological Assays + Review**

This part covers the detection/amplification methods that follow separations, plus a method-selection review.

### Nucleic Acid & Protein Detection (Know the Blots)

| Technique | Target | Detection | Mnemonic |
|-----------|--------|-----------|----------|
| **Southern blot** | DNA | Labeled DNA probe | SNoW DRoP |
| **Northern blot** | RNA | Labeled probe | — |
| **Western blot** | Protein | Antibody | — |
| **PCR** | DNA (amplify) | — | Exponential copies |
| **ELISA** | Antigen/antibody | Enzyme-linked color | Quantitative |

**Mnemonic — SNoW DRoP:** Southern = DNA, Northern = RNA, Western = Protein.

### PCR Logic

$$\\text{Copies} = N_0 \\times 2^{n}$$

after $n$ cycles (ideal doubling). Steps per cycle:
1. **Denature** (~95 °C): separate strands.
2. **Anneal** (~50–65 °C): primers bind.
3. **Extend** (~72 °C): Taq polymerase synthesizes.

**qPCR** quantifies in real time; reverse-transcription (RT-PCR) starts from RNA (via cDNA).

### ELISA & Antibody Specificity

- **Direct ELISA:** antigen bound, enzyme-linked primary antibody → color.
- **Sandwich ELISA:** capture antibody traps antigen; detection antibody reports it (high specificity).
- Signal (color/absorbance via Beer's law) ∝ amount of antigen.

### Method-Selection Cheat Sheet

| Goal | Best method |
|------|-------------|
| Estimate protein MW | SDS-PAGE |
| Detect a specific protein | Western blot / ELISA |
| Amplify a DNA sequence | PCR |
| Quantify mRNA expression | RT-qPCR |
| Measure concentration of a colored species | UV-Vis (Beer's law) |
| Purify a tagged protein | Affinity chromatography |
| Separate organelles | Differential centrifugation |`
    },
    {
      id: 'lm5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Molecular Assays Review** 🎯`,
      exercise: {
        questions: [
          {
            question: `A researcher wants to detect a SPECIFIC protein in a tissue lysate. The appropriate technique is:`,
            options: [`Western blot (separate by SDS-PAGE, then probe with antibody)`, `Southern blot`, `Northern blot`, `PCR`],
            correctAnswer: 0,
            explanation: `Western blot detects PROTEINS: proteins are separated by SDS-PAGE, transferred to a membrane, and probed with a specific antibody. Southern = DNA, Northern = RNA, PCR amplifies DNA — none detect a protein directly (SNoW DRoP).`
          },
          {
            question: `Starting from 1000 copies of a target, how many copies exist after 5 ideal PCR cycles?`,
            options: [`32,000`, `5000`, `10,000`, `2000`],
            correctAnswer: 0,
            explanation: `PCR ideally doubles each cycle: copies = $N_0 \\times 2^n = 1000 \\times 2^5 = 1000 \\times 32 = 32{,}000$. The exponential factor $2^n$ is why PCR can amplify a tiny starting sample into a detectable amount in a few dozen cycles.`
          },
          {
            question: `In a sandwich ELISA, the measured color intensity (absorbance) is proportional to:`,
            options: [`The amount of antigen captured between the two antibodies`, `The number of PCR cycles run`, `The molecular weight of the antigen`, `The gel's pH gradient`],
            correctAnswer: 0,
            explanation: `In a sandwich ELISA, a capture antibody binds antigen, and an enzyme-linked detection antibody generates color via its substrate. More antigen → more bound detection antibody → more enzyme → more color, and absorbance (Beer's law) scales with antigen concentration, allowing quantitation.`
          }
        ]
      }
    },
    {
      id: 'lm5-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Molecular Assays

<details>
<summary><b>Example 1: Choose the right method for a research goal</b></summary>

**Question:** A lab wants to know whether a gene is being TRANSCRIBED (made into mRNA) in a tumor sample, and to measure how much. Which method, and why not a Western blot?

**Solution:**
1. Transcription produces mRNA → measure RNA → **RT-qPCR** (reverse-transcribe mRNA to cDNA, then quantitative PCR). A Northern blot also detects RNA but qPCR quantifies it precisely. ✓
2. A Western blot measures PROTEIN, not mRNA — a gene could be transcribed but the protein degraded, so Western answers a different question.

**MCAT skill:** Map the molecule of interest (DNA / RNA / protein) to the assay before anything else.
</details>

<details>
<summary><b>Example 2: Reason about PCR cycle number</b></summary>

**Question:** How many cycles are needed to amplify a single template molecule to over one million copies (assume ideal doubling)?

**Solution:**
$$2^n > 10^6 \\Rightarrow n > \\log_2(10^6) = \\frac{6}{\\log_{10}2} \\approx \\frac{6}{0.301} \\approx 20$$
So **about 20 cycles** exceed one million copies ($2^{20} \\approx 1.05 \\times 10^6$). ✓

**Note:** Real PCR plateaus as reagents deplete and efficiency drops below 2×, so practical yields fall short of the ideal — a common experimental caveat.
</details>

<details>
<summary><b>Example 3: Interpret an ELISA standard curve</b></summary>

**Question:** A sandwich ELISA gives absorbances of 0.2, 0.4, 0.6 for antigen standards of 10, 20, 30 ng/mL. A patient sample reads 0.5. Estimate the antigen concentration.

**Solution:**
1. The standards are linear: 0.02 absorbance units per ng/mL (0.2/10). ✓
2. Patient: $c = 0.5 / 0.02 = 25$ ng/mL. ✓

**Connection:** This mirrors the Beer's-law standard curve from Part 4 — ELISA converts antigen amount into a colorimetric signal read by a spectrophotometer.
</details>`
    },
    {
      id: 'lm5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5 (and Suite Review)

- Blots: Southern = DNA, Northern = RNA, Western = protein (SNoW DRoP); ELISA = antibody-based quantitation.
- PCR amplifies DNA exponentially: copies = N₀ × 2ⁿ; steps = denature/anneal/extend; RT-PCR starts from RNA.
- Match the molecule to the method: MW → SDS-PAGE; specific protein → Western/ELISA; amplify DNA → PCR; mRNA level → RT-qPCR; concentration → UV-Vis.
- Detection assays (ELISA, UV-Vis) report concentration via signal proportional to amount (Beer's law).`
    }
  ]
};
