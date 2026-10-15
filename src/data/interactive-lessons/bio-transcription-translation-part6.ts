export const bioTranscriptionPart6Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran6-intro-p6',
      type: 'text' as const,
      content: `
## Transcription & Translation: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

This workshop combines Parts 2–5 into the multi-step problems the AP exam favors: go from DNA to protein, predict what a mutation does, and interpret experiments that block one step of gene expression.

### The DNA → protein routine

1. **Identify the strand.** Is the given DNA the template or the coding strand? Check the 5′/3′ labels.
2. **Write the mRNA** 5′ → 3′ (complement of the template, or coding strand with U for T).
3. **Find the first AUG** from the 5′ end; that sets the **reading frame**.
4. **Read codons** in triplets with the codon chart until a stop codon.
5. **Count and check:** number of amino acids = number of codons before the stop.
      `
    },
    {
      id: 'tran6-worked1',
      type: 'text' as const,
      content: `
### Worked problem 1: template to polypeptide

**Problem.** A gene's template strand reads \`3′ – TAC AAA CTT CCG ATT – 5′\` (spaces mark triplets). Give the mRNA and the polypeptide.

**Step 1–2.** Complement each base of the template:

\`mRNA: 5′ – AUG UUU GAA GGC UAA – 3′\`

**Step 3–4.** AUG starts the frame.

| Codon | AUG | UUU | GAA | GGC | UAA |
|-------|-----|-----|-----|-----|-----|
| Amino acid | Met | Phe | Glu | Gly | Stop |

**Answer.** Met – Phe – Glu – Gly (4 amino acids).

We will use this "wild-type" sequence to see what different mutations do.
      `
    },
    {
      id: 'tran6-mutations',
      type: 'text' as const,
      content: `
### Worked problem 2: classifying mutations

Each row changes one thing in the wild-type mRNA \`AUG UUU GAA GGC UAA\`.

| Mutation | New mRNA | New polypeptide | Type |
|----------|----------|-----------------|------|
| GAA → GA**G** | AUG UUU GAG GGC UAA | Met–Phe–Glu–Gly | **Silent:** same amino acid, because the code is redundant |
| GAA → G**U**A | AUG UUU GUA GGC UAA | Met–Phe–**Val**–Gly | **Missense:** one amino acid changes |
| GAA → **U**AA | AUG UUU UAA ... | Met–Phe | **Nonsense:** a stop codon appears early, giving a short protein |
| Insert A after AUG | AUG **A**UU UGA AGG CUA A | Met–Ile | **Frameshift:** every codon after the insertion is read in a new frame; here a stop appears at once |

**What to notice.**

- A substitution affects **one codon**. Its effect ranges from none (silent) to severe (nonsense).
- An insertion or deletion of 1 or 2 bases shifts the **reading frame**, scrambling every codon downstream and often creating an early stop. Inserting or deleting **3** bases adds or removes one amino acid but keeps the frame.
- Effects on the **phenotype** depend on where the change falls: a missense change in a crucial region can be as harmful as a nonsense mutation, while one in a flexible surface loop may have no effect.

**Real case: sickle cell disease.** In the β-globin gene, codon 6 changes from GAG to GUG, a missense change from glutamic acid (charged, hydrophilic) to valine (nonpolar). The hydrophobic valine makes hemoglobin molecules stick together when oxygen is low, forming fibers that distort red blood cells into a sickle shape.
      `
    },
    {
      id: 'tran6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Reasoning: Mutations** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which change to a gene is most likely to alter every amino acid encoded after the change?',
            options: [
              'Substitution of one base in the third position of a codon',
              'Deletion of one base near the start of the coding region',
              'Deletion of three adjacent bases making up one whole codon',
              'Substitution of one base within an intron of the gene'
            ],
            correctAnswer: 1,
            explanation: 'Deleting a single base shifts the reading frame, so every downstream codon is read differently. Removing a whole codon keeps the frame, and intron changes are usually spliced out.'
          },
          {
            question: 'A substitution changes the mRNA codon CCU to CCC. Using the codon table, what is the effect on the protein?',
            options: [
              'Proline is replaced by a different amino acid',
              'The amino acid sequence stays exactly the same',
              'Translation ends at this codon with a short chain',
              'Every following codon is read in a shifted frame'
            ],
            correctAnswer: 1,
            explanation: 'CCU and CCC both code for proline, so this is a silent mutation. The redundancy of the code means many third-position changes do not alter the protein.'
          },
          {
            question: 'In sickle cell disease, why does replacing one glutamic acid with valine change the behavior of hemoglobin?',
            options: [
              'Valine adds a stop signal that shortens the hemoglobin chain',
              'Valine is nonpolar, so the molecules stick together at low oxygen',
              'Valine prevents the hemoglobin gene from being transcribed',
              'Valine causes the mRNA to be spliced into a shorter message'
            ],
            correctAnswer: 1,
            explanation: 'Swapping a charged amino acid for a nonpolar one creates a hydrophobic patch on the protein surface, so deoxygenated hemoglobin molecules aggregate into fibers that deform red blood cells.'
          }
        ]
      }
    },
    {
      id: 'tran6-experiment',
      type: 'text' as const,
      content: `
### Worked problem 3: locating a block in gene expression

Cells are treated with one of two drugs, then given a labeled precursor. New mRNA and new protein are measured after 30 minutes (100 = untreated level).

| Treatment | New mRNA made | New protein made |
|-----------|---------------|------------------|
| None | 100 | 100 |
| Drug A | 4 | 70 |
| Drug B | 98 | 3 |

**Reasoning.**

- **Drug B:** mRNA is made normally, but almost no protein. The block is in **translation**.
- **Drug A:** almost no new mRNA. The block is in **transcription**. Protein synthesis is only partly reduced after 30 minutes because mRNAs made **before** the drug was added are still being translated. Over a longer time, protein synthesis would also fall as those mRNAs are degraded.

> 📝 **AP Connection:** The trap is to say Drug A "blocks both steps." The evidence shows the drug acts on transcription; the drop in protein is a **downstream consequence** that lags because existing mRNAs persist.

### Worked problem 4: mutations outside the coding sequence

| Location of mutation | Likely effect |
|----------------------|---------------|
| Promoter | Less (or no) mRNA made; the protein is normal but scarce |
| Splice site at an intron edge | Exon skipped or intron kept; a large change in the protein, often an early stop |
| Middle of an intron | Usually none, since the intron is removed |
| Start codon (AUG → AUA) | Translation may not start at the usual site; little or no normal protein |
      `
    },
    {
      id: 'tran6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Reasoning: Experiments** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'In worked problem 3, which prediction about Drug A after 6 hours is best supported?',
            options: [
              'Protein synthesis will recover as cells adapt to the drug over time',
              'Protein synthesis will fall further as existing mRNAs are degraded',
              'New mRNA levels will rise to double the normal level as cells compensate',
              'Protein synthesis will stay near 70 because ribosomes are unaffected'
            ],
            correctAnswer: 1,
            explanation: 'Drug A stops new mRNA from being made. As the mRNAs present before treatment break down, fewer templates remain, so protein synthesis keeps dropping.'
          },
          {
            question: 'A mutation at the edge of an intron causes that intron to stay in the mature mRNA. Which outcome is most likely?',
            options: [
              'The protein is unchanged because intron sequences are never read',
              'Extra codons are translated and an early stop codon may appear',
              'The mRNA is not transcribed because the promoter is disrupted',
              'The mutation is silent because it falls outside any exon'
            ],
            correctAnswer: 1,
            explanation: 'If the intron is retained, the ribosome translates it as though it were coding sequence, adding amino acids and often hitting an in-frame stop codon or shifting the frame.'
          }
        ]
      }
    },
    {
      id: 'tran6-frq',
      type: 'text' as const,
      content: `
### FRQ practice: a model response

**Prompt (AP style).** A mutation deletes a single nucleotide from the tenth codon of a gene that encodes a 300-amino-acid enzyme. (a) **Describe** the effect on the mRNA. (b) **Predict** the effect on the enzyme. (c) **Justify** your prediction.

**Model response.**

(a) The mRNA will be one nucleotide shorter, missing one base in codon 10.

(b) The enzyme will be nonfunctional.

(c) Deleting one base shifts the reading frame from codon 10 onward, so every later codon is read incorrectly. This changes the amino acid sequence after position 9 and is likely to create a premature stop codon, producing a short polypeptide that cannot fold into the enzyme's active shape.
      `
    },
    {
      id: 'tran6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Mutation** 🔍

Wild-type mRNA: \`AUG AAA UGG GGC UAA\` (Met–Lys–Trp–Gly–Stop).
      `,
      exercise: {
        dropdowns: [
          {
            label: 'AAA → AAG',
            options: ['Silent', 'Missense', 'Nonsense', 'Frameshift']
          },
          {
            label: 'UGG → UGA',
            options: ['Silent', 'Missense', 'Nonsense', 'Frameshift']
          },
          {
            label: 'GGC → GCC',
            options: ['Silent', 'Missense', 'Nonsense', 'Frameshift']
          },
          {
            label: 'One extra U inserted after AUG',
            options: ['Silent', 'Missense', 'Nonsense', 'Frameshift']
          }
        ],
        correctAnswers: ['Silent', 'Nonsense', 'Missense', 'Frameshift'],
        hint1: 'UGA is one of the three stop codons.',
        hint2: 'GGC codes for Gly and GCC codes for Ala.',
        hint3: 'Adding one base changes the grouping of every later codon.',
        explanation: 'AAG still codes for Lys (silent); UGA is a stop (nonsense); GCC codes for Ala instead of Gly (missense); an inserted base shifts the reading frame.'
      }
    }
  ]
}
