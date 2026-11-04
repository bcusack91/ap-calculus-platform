export const mcatSpectroscopyAssaysPart3Data = {
  topicSlug: 'mcat-lab-methods-spectroscopy-assays-mcat',
  sections: [
    {
      id: 'lm5-intro',
      type: 'text' as const,
      content: `# Lab Methods: Centrifugation, Spectroscopy & Assays

**Part 3 of 3 — Molecular & Immunological Assays + Review**

This part covers the detection/amplification methods that follow separations, plus a method-selection review.

### Nucleic Acid & Protein Detection (Know the Blots)

| Technique | Target | Detection | Note |
|-----------|--------|-----------|------|
| **Southern blot** | DNA | Labeled DNA probe | S = DNA |
| **Northern blot** | RNA | Labeled probe | N = RNA |
| **Western blot** | Protein | Antibody | W = Protein |
| **PCR** | DNA (amplify) | — | Exponential copies |
| **ELISA** | Antigen/antibody | Enzyme-linked color | Quantitative |

**Mnemonic — SNoW DRoP:** Southern = DNA, Northern = RNA, Western = Protein.

### PCR Logic

Copies after $n$ cycles of ideal doubling: $\\text{Copies} = N_0 \\times 2^{n}$. Steps per cycle:
1. **Denature** (~95 °C): separate strands.
2. **Anneal** (~50–65 °C): primers bind.
3. **Extend** (~72 °C): heat-stable Taq polymerase synthesizes.

**qPCR** quantifies in real time; reverse-transcription (RT-PCR) starts from RNA (via complementary DNA, cDNA).

### ELISA & Antibody Specificity

- **Direct ELISA:** antigen bound, enzyme-linked primary antibody → color.
- **Sandwich ELISA:** capture antibody traps antigen; detection antibody reports it (high specificity).
- Signal (color/absorbance via Beer's law) ∝ amount of antigen.

### Method-Selection Cheat Sheet

SDS-PAGE (sorts proteins by size) and affinity chromatography (binds one tagged molecule) are from the *Lab Methods: Separations & Electrophoresis* lesson.

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
            options: [`Western blot, probed with an antibody against it`, `Southern blot, probed with a labeled DNA strand`, `Northern blot, probed with a labeled nucleic acid`, `PCR, amplifying its coding gene with flanking primers`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Western blot detects PROTEINS: proteins are separated by SDS-PAGE, transferred to a membrane, and probed with a specific antibody. Southern = DNA, Northern = RNA, PCR amplifies DNA — none detect a protein directly (SNoW DRoP).`
          },
          {
            question: `Starting from 1000 copies of a target, how many copies exist after 5 ideal PCR cycles?`,
            options: [`32,000`, `10,000`, `16,000`, `64,000`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `PCR ideally doubles each cycle: copies = $N_0 \\times 2^n = 1000 \\times 2^5 = 1000 \\times 32 = 32{,}000$. Stopping one doubling short gives 16,000 and adding an extra one gives 64,000, while 10,000 multiplies by $2 \\times 5$ instead of $2^5$. The exponential factor $2^n$ is why PCR can amplify a tiny starting sample into a detectable amount in a few dozen cycles.`
          },
          {
            question: `In a sandwich ELISA, the measured color intensity (absorbance) is proportional to:`,
            options: [`The amount of antigen captured by the two antibodies`, `The molecular weight of the antigen being detected`, `The number of unbound detection antibodies washed away`, `The amount of capture antibody coated on the well`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `In a sandwich ELISA, a capture antibody binds antigen, and an enzyme-linked detection antibody generates color via its substrate. More antigen → more bound detection antibody → more enzyme → more color, and absorbance (Beer's law) scales with antigen concentration, allowing quantitation. Unbound detection antibody is washed away and contributes no color, capture antibody is supplied in excess, and antigen size does not set the signal.`
          }
        ]
      }
    },
    {
      id: 'lm5-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Molecular Assays

**Problem 1.** A lab wants to know whether a gene is being TRANSCRIBED (made into mRNA) in a tumor sample, and to measure how much.

- **(a)** Which molecule must the assay measure?
- **(b)** Which method measures it quantitatively?
- **(c)** Why would a Western blot not answer the question?

**(a) The molecule.** Transcription produces mRNA, so the assay must measure RNA. Map the molecule of interest (DNA / RNA / protein) to the assay before anything else.

**(b) RT-qPCR.** Reverse-transcribe the mRNA to complementary DNA (cDNA), then run quantitative PCR. A Northern blot also detects RNA, but qPCR quantifies it precisely.

**(c) Not a Western.** A Western blot measures PROTEIN, not mRNA. A gene could be transcribed while its protein is degraded, so a Western answers a different question.

**Problem 2.** A single template molecule is to be amplified to over one million copies, assuming ideal doubling every cycle.

- **(a)** What inequality must the cycle number $n$ satisfy?
- **(b)** About how many cycles is that?
- **(c)** Will a real reaction reach the ideal copy number?

**(a) The inequality.** Starting from one copy, $n$ cycles give $2^n$ copies, so $2^n > 10^6$.

**(b) Cycles.** $n > \\log_2(10^6) = \\dfrac{6}{\\log_{10}2} \\approx \\dfrac{6}{0.301} \\approx 20$, so **about 20 cycles** exceed one million copies ($2^{20} \\approx 1.05 \\times 10^6$).

**(c) Real PCR.** No: real PCR plateaus as reagents deplete and efficiency drops below 2× per cycle, so practical yields fall short of the ideal.

**Problem 3.** A sandwich ELISA gives absorbances of 0.2, 0.4 and 0.6 for antigen standards of 10, 20 and 30 ng/mL. A patient sample reads 0.5.

- **(a)** What is the slope of the standard curve?
- **(b)** What is the antigen concentration in the patient sample?

**(a) Slope.** The standards are linear: 0.02 absorbance units per ng/mL (0.2/10).

**(b) Patient.** With the slope of 0.02 from (a): $c = 0.5 / 0.02 = 25$ ng/mL. This mirrors the Beer's-law standard curve in Part 2 of this lesson: ELISA turns antigen amount into a colored signal read by a spectrophotometer.`
    },
    {
      id: 'lm5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3 (and Lesson Review)

- **SNoW DRoP.** Southern blots detect DNA, Northern blots RNA, and Western blots protein.
- **PCR doubles each cycle.** Copies $= N_{0} \\times 2^{n}$ after $n$ denature, anneal and extend cycles; RT-PCR starts from RNA.
- **Match molecule to method.** MW: SDS-PAGE; protein: Western or ELISA; DNA: PCR; mRNA level: RT-qPCR; concentration: UV-Vis.
- **Signal tracks amount.** ELISA and UV-Vis read concentration off a standard curve, because signal is proportional to amount.

**Common traps**

- **Western for transcription.** mRNA is measured by RT-qPCR or a Northern blot; a Western blot measures protein.
- **Linear PCR growth.** Five cycles multiply the copies by $2^5 = 32$, not by $2 \\times 5 = 10$.
- **Ideal yield in real PCR.** Real reactions plateau as reagents run out, so they fall short of $2^{n}$.
- **Unbound antibody adds color.** Unbound detection antibody is washed away; only antibody bound to antigen gives signal.`
    }
  ]
};
