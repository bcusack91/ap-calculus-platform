export const mcatSciPassagePart6Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'sp6-intro',
      type: 'text' as const,
      content: `# Science Passage Strategy for the MCAT

**Part 6 of 7 — Biology & Biochemistry Passage Tactics**

### Bio/Biochem Passage Features

- Experimental passages dominate (Western blots, PCR, gene knockouts)
- Figures often show gel electrophoresis, enzyme kinetics, or metabolic pathways
- Questions integrate multiple biological concepts

### Common Experimental Techniques in Passages

| Technique | What It Shows | How to Read |
|-----------|-------------|-------------|
| SDS-PAGE / Western blot | Protein size/expression | Bands = proteins; darker = more |
| PCR / gel electrophoresis | DNA fragment size | Lower bands = smaller fragments |
| ELISA | Protein concentration | Higher absorbance = more protein |
| Flow cytometry | Cell surface markers | Shifted peaks = marker present |

### Bio/Biochem Passage Strategy

1. **Identify the biological system**: What organ/pathway/molecule is being studied?
2. **Find the perturbation**: What was changed (knockout, drug, mutation)?
3. **Predict the effect**: Before looking at data, predict what should happen
4. **Compare to actual results**: Do they match? If not, why?

### Enzyme Kinetics in Passages

- **Lineweaver-Burk plots**: Double reciprocal ($1/V$ vs $1/[S]$)
- Competitive inhibitor: $K_m$ increases, $V_{max}$ unchanged
- Uncompetitive: Both $K_m$ and $V_{max}$ decrease
- Noncompetitive: $V_{max}$ decreases, $K_m$ unchanged`
    },
    {
      id: 'sp6-worked',
      type: 'text' as const,
      content: `### Worked Example — Reasoning from a Knockout + Western Blot

> *"To map a signaling pathway, researchers measured levels of phosphorylated Protein C (active form) by Western blot. They compared wild-type cells to cells lacking Kinase A and to cells lacking Kinase B. Growth factor was added to all groups."*

| Condition | Phospho-Protein C band |
|-----------|------------------------|
| Wild-type + growth factor | Strong |
| Kinase A knockout + growth factor | Absent |
| Kinase B knockout + growth factor | Strong |

**Step 1 — Identify the readout.** The band reports the **active (phosphorylated)** form of Protein C. Strong band = pathway active; absent band = pathway blocked upstream of Protein C.

**Step 2 — Interpret each knockout.**
- Removing **Kinase A** abolishes phospho-Protein C → Kinase A is **required** for Protein C activation; it lies **upstream** of Protein C.
- Removing **Kinase B** has no effect → Kinase B is **not required** on this branch (parallel pathway, downstream, or unrelated).

**Step 3 — Order the pathway.** Supported model: Growth factor → Kinase A → phosphorylation of Protein C. Kinase B is not placed between the growth factor and Protein C.

**Step 4 — Stay within the data.** The blot shows *necessity* of Kinase A, not that Kinase A *directly* phosphorylates Protein C (an intermediate could exist). The MCAT-correct answer says "required/upstream," not "directly phosphorylates," unless a direct assay is shown.`
    },
    {
      id: 'sp6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Bio/Biochem Tactics** 🎯`,
      exercise: {
        questions: [
          {
            question: `A passage shows a Western blot with a band present in wild-type but absent in a mutant strain. The most likely conclusion is:`,
            options: [`The mutant strain does not express the target protein (gene knockout or loss of expression)`, `The mutant has MORE protein`, `The experiment failed`, `The antibody is nonspecific`],
            correctAnswer: 0,
            explanation: `In a Western blot, a missing band means the protein isn't expressed (or is too small/large to appear at expected position). In a passage context, this usually means the gene was knocked out, the promoter is mutated, or the protein is rapidly degraded.`
          },
          {
            question: `In the knockout worked example, the absence of phospho-Protein C in Kinase A knockouts indicates that Kinase A is:`,
            options: [`Required for Protein C activation and acts upstream of Protein C`, `Downstream of Protein C in the pathway`, `Irrelevant to the pathway`, `An inhibitor of Protein C phosphorylation`],
            correctAnswer: 0,
            explanation: `Losing Kinase A eliminates the active form of Protein C, so Kinase A is necessary and lies upstream. If it were downstream or irrelevant, removing it would not block Protein C activation.`
          },
          {
            question: `Because Kinase B knockout left the phospho-Protein C band strong, the best supported statement is that Kinase B:`,
            options: [`Is not required for Protein C activation on this branch of the pathway`, `Directly phosphorylates Protein C`, `Is the most important kinase in the cell`, `Destroys Protein C`],
            correctAnswer: 0,
            explanation: `No change upon removing Kinase B means it is not necessary for this activation step. It could act elsewhere, but the data only license the conclusion that it is dispensable for activating Protein C here.`
          }
        ]
      }
    },
    {
      id: 'sp6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Techniques & Kinetics** 🎯`,
      exercise: {
        questions: [
          {
            question: `On a DNA gel, a sample's band migrates FARTHER from the well than a 500 bp marker. The sample fragment is most likely:`,
            options: [`Smaller than 500 bp — shorter fragments migrate farther`, `Larger than 500 bp`, `Exactly 500 bp`, `Not DNA at all`],
            correctAnswer: 0,
            explanation: `In gel electrophoresis, smaller fragments move faster and travel farther toward the positive electrode. A band that migrates beyond the 500 bp marker corresponds to a fragment smaller than 500 bp.`
          },
          {
            question: `A passage's Lineweaver-Burk plot shows an inhibitor that raises $K_m$ but leaves $V_{max}$ unchanged. This is:`,
            options: [`Competitive inhibition`, `Noncompetitive inhibition`, `Uncompetitive inhibition`, `Irreversible inhibition`],
            correctAnswer: 0,
            explanation: `Competitive inhibitors compete for the active site, increasing apparent $K_m$ while $V_{max}$ is unchanged (excess substrate outcompetes the inhibitor). Noncompetitive lowers $V_{max}$ with unchanged $K_m$; uncompetitive lowers both.`
          },
          {
            question: `Before reading a passage's experimental results, the strongest habit is to:`,
            options: [`Predict the expected outcome from the perturbation, then check whether the data match`, `Memorize every band intensity for later`, `Assume the result confirms the hypothesis`, `Skip the methods and read only the conclusion`],
            correctAnswer: 0,
            explanation: `Predicting the outcome turns data-reading into hypothesis-testing: when results match, you confirm understanding fast; when they don't, the surprise points you straight to the question's key insight.`
          }
        ]
      }
    },
    {
      id: 'sp6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Bio/Biochem passages often present experiments with gels, blots, or kinetics
- Always predict the outcome BEFORE reading the data
- Knockouts reveal necessity and pathway order: lost signal = required & upstream
- Western blot: protein levels. PCR/gel: DNA size (smaller runs farther). ELISA: concentration.
- Know enzyme kinetics patterns for competitive, uncompetitive, noncompetitive inhibitors`
    }
  ]
};
