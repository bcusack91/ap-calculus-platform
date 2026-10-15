export const bioBiotechPart4Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'bio-biotechnology-p4-s1-intro',
      type: 'text' as const,
      content: `# 🧬 Biotechnology

**Part 4 of 7 — Bacterial Transformation and Gene Cloning**

---

### Topics in This Part

| Section |
|---------|
| Plasmids as Vectors |
| The Transformation Procedure |
| Worked Example: the Four-Plate Experiment |
| Transformation Efficiency |
| Making a Human Protein in Bacteria |

> 🔑 **Key Concept:** **Bacterial transformation introduces DNA into bacterial cells** (EK 6.8.A.1). A gene placed in a plasmid can be taken up by bacteria, copied every time they divide, and, with the right promoter, expressed as protein. Selection with an antibiotic finds the few cells that took the plasmid in.

## Plasmids as Vectors

**Plasmids** are small, circular, double-stranded DNA molecules found in many bacteria, separate from the main chromosome. They replicate on their own and often carry useful genes, such as genes for antibiotic resistance. A plasmid used to carry a gene into a cell is called a **vector**.

| Feature of a cloning plasmid | What it is | Why it is needed |
|---|---|---|
| **Origin of replication** | Sequence where replication begins | Lets the plasmid be copied inside the host and passed to daughter cells |
| **Selectable marker** | Usually an antibiotic-resistance gene | Only cells holding the plasmid survive on antibiotic plates |
| **Restriction sites** | One or more unique cut sites | Where the gene of interest is inserted (Part 1) |
| **Promoter** (expression plasmids) | Sequence where RNA polymerase binds | Drives transcription of the inserted gene |

Transformation also happens in nature. Some bacteria take up DNA released by dead cells, which is how a harmless strain can acquire genes from a disease-causing one. This uptake, along with transduction by viruses and conjugation between cells, is one source of genetic variation in prokaryotes.`
    },
    {
      id: 'bio-biotechnology-p4-s2-procedure',
      type: 'text' as const,
      content: `## The Transformation Procedure

Most laboratory bacteria do not take up DNA easily, so the procedure first treats them to make their membranes briefly permeable to DNA.

| Stage | What happens | Why |
|---|---|---|
| 1. Prepare the cells | Cells are treated so DNA can cross the cell envelope | Uptake of large DNA molecules is otherwise rare |
| 2. Add the plasmid | Plasmid DNA is mixed with the cells, and some cells take it in | This is the transformation itself |
| 3. Recovery | Cells grow briefly without antibiotic | Transformed cells begin **expressing** the plasmid's resistance gene |
| 4. Selection | Cells are spread on plates, some containing antibiotic | Only cells carrying the plasmid survive on the antibiotic |

(The specific chemicals, temperatures and timings used in the laboratory procedure are beyond the scope of the AP exam.)

Only a tiny fraction of cells, often well under 1%, actually take up a plasmid. That is why selection matters: on a plate with antibiotic, untransformed cells die and **every colony that grows comes from a single transformed cell** that then divided many times.`
    },
    {
      id: 'bio-biotechnology-p4-s3-mcq-procedure',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Plasmids and Transformation** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A plasmid is engineered without an origin of replication and is used to transform bacteria. Which result is most likely?',
            options: [
              'Transformed cells cannot express the resistance gene at all',
              'The plasmid inserts into the chromosome at its restriction sites',
              'The plasmid is gradually lost from daughter cells as the cells divide',
              'The plasmid is copied normally using the chromosome\'s origin'
            ],
            correctAnswer: 2,
            explanation: 'Without an origin of replication, the plasmid is not copied, so daughter cells do not inherit it and the population cannot keep it. Each plasmid needs its own origin; it does not borrow the chromosome\'s.'
          },
          {
            question: 'After transformation, cells are spread on a plate containing ampicillin. Why can every colony that grows be assumed to carry the plasmid?',
            options: [
              'Ampicillin causes the bacteria to take up plasmids from the plate',
              'Only cells with the plasmid\'s resistance gene survive to divide',
              'The plasmid makes every cell divide faster than untransformed cells',
              'Untransformed cells form colonies too small to be counted on agar'
            ],
            correctAnswer: 1,
            explanation: 'The plasmid carries an ampicillin-resistance gene, so ampicillin kills cells without it, and each surviving cell divides into a colony of plasmid-carrying cells. Ampicillin does not cause plasmid uptake, the plasmid does not speed division, and untransformed cells do not form colonies on ampicillin at all.'
          }
        ]
      }
    },
    {
      id: 'bio-biotechnology-p4-s4-plates',
      type: 'text' as const,
      content: `## Worked Example: the Four-Plate Experiment

A common AP lab uses a plasmid that carries two genes: an **ampicillin-resistance gene** (always expressed) and the gene for **green fluorescent protein (GFP)**, which is controlled by a promoter that switches on only when the sugar **arabinose** is present. Cells with no plasmid (−) and cells given the plasmid (+) are spread on four kinds of plates.

| Plate | Cells | Prediction | Reasoning |
|---|---|---|---|
| A: LB | − plasmid | **Lawn** (continuous growth), not fluorescent | No antibiotic, so every cell grows |
| B: LB + ampicillin | − plasmid | **No growth** | No resistance gene; ampicillin kills all cells |
| C: LB + ampicillin | + plasmid | **Some colonies**, not fluorescent | Only transformed cells survive; without arabinose the GFP gene is off |
| D: LB + ampicillin + arabinose | + plasmid | **Some colonies that glow green under UV** | Transformed cells survive, and arabinose switches on GFP |

### What each comparison tells you

| Compare | Shows that… |
|---|---|
| A vs B | Ampicillin kills these bacteria (and that the cells were alive) |
| B vs C | The plasmid is what lets cells survive ampicillin: transformation worked |
| C vs D | GFP expression depends on arabinose: the gene is **regulated**, not just present |

The C-versus-D comparison is a link to gene regulation. Cells on both plates carry the same GFP gene, but only cells exposed to arabinose transcribe it. Arabinose acts like an **inducer**, much as lactose switches on the *lac* operon: a regulatory protein bound to arabinose activates transcription from the promoter.

### Phenotype change
Glowing colonies show that transformation changed the bacteria's **phenotype** by adding new genetic information. The new trait is heritable: every cell in a colony glows because all of them inherited the plasmid.`
    },
    {
      id: 'bio-biotechnology-p4-s5-efficiency',
      type: 'text' as const,
      content: `## Transformation Efficiency

Transformation efficiency measures how well the procedure worked:

$$\\text{transformation efficiency} = \\frac{\\text{number of transformed colonies}}{\\mu\\text{g of plasmid DNA spread on the plate}}$$

### Worked Example
- 0.5 µg of plasmid is mixed into a final cell suspension of 500 µL.
- 100 µL of that suspension is spread on an ampicillin plate.
- 240 colonies grow.

**Step 1. DNA actually spread.** The plate received $\\frac{100}{500} = 0.2$ of the suspension, so
$$0.2 \\times 0.5\\ \\mu\\text{g} = 0.1\\ \\mu\\text{g}$$

**Step 2. Divide.**
$$\\frac{240 \\text{ colonies}}{0.1\\ \\mu\\text{g}} = 2{,}400 = 2.4 \\times 10^{3} \\text{ transformants per } \\mu\\text{g}$$

The most common mistake is dividing by the total DNA used (0.5 µg) rather than the DNA on the plate (0.1 µg), which understates efficiency fivefold.

Note that colonies are counted on the **antibiotic** plate. Colonies on a plate without antibiotic include untransformed cells, so they say nothing about transformation.`
    },
    {
      id: 'bio-biotechnology-p4-s6-input',
      type: 'input-boxes' as const,
      content: `**Efficiency and Prediction Practice** 🧮`,
      exercise: {
        questions: [
          {
            question: 'A plate receives 0.05 µg of plasmid DNA and grows 150 colonies on ampicillin. What is the transformation efficiency in transformants per µg?',
            answer: '3000',
            acceptableAnswers: ['3,000', '3x10^3', '3×10^3'],
            explanation: '150 ÷ 0.05 µg = 3,000 transformants per µg.'
          },
          {
            question: '1 µg of plasmid is mixed into 1,000 µL of cells, and 250 µL is spread on an ampicillin plate. How many µg of DNA were spread?',
            answer: '0.25',
            explanation: '250 ÷ 1,000 = 0.25 of the suspension, so 0.25 × 1 µg = 0.25 µg.'
          },
          {
            question: 'In the four-plate experiment, which plate (A, B, C or D) is the only one with fluorescent colonies?',
            answer: 'D',
            acceptableAnswers: ['plate D'],
            explanation: 'Plate D has both ampicillin (only transformed cells grow) and arabinose (GFP is switched on).'
          }
        ]
      }
    },
    {
      id: 'bio-biotechnology-p4-s7-insulin',
      type: 'text' as const,
      content: `## Making a Human Protein in Bacteria

Before recombinant DNA, people with diabetes injected insulin purified from the pancreases of pigs and cattle. Since the early 1980s, human insulin has been produced by genetically engineered microbes. The case shows how the steps of this lesson fit together, and one problem that must be solved.

### The intron problem
The human insulin gene contains **introns**. Eukaryotic cells remove introns from pre-mRNA by **splicing**, but bacteria have no splicing machinery. If the genomic insulin gene were placed in a bacterium, the introns would be transcribed and translated, and the protein would be wrong.

### The solution: start from mRNA

| Step | What is done | Why |
|---|---|---|
| 1 | Collect mature mRNA from cells that make the protein | Mature mRNA has already had its introns removed |
| 2 | Use **reverse transcriptase** (from retroviruses) to copy the mRNA into DNA | The product, **complementary DNA (cDNA)**, is an intron-free copy of the gene |
| 3 | Cut the cDNA and an expression plasmid with the same restriction enzyme; ligate | Places the coding sequence after a **bacterial promoter** |
| 4 | Transform bacteria and select on antibiotic | Only cells with the plasmid grow |
| 5 | Grow large cultures and purify the protein | Bacteria transcribe and translate the human coding sequence |

Step 3 matters too: bacterial RNA polymerase does not recognize most human promoters, so the plasmid must supply a promoter the host can use.

### Genetically modified organisms
An organism whose DNA has been changed by genetic engineering is a **genetically modified organism (GMO)**. One carrying a gene from another species is **transgenic**.

| Example | Gene added | Result |
|---|---|---|
| Insect-resistant crops | A bacterial gene for a protein toxic to certain insect larvae | Plants make their own insecticide |
| Vitamin-A-enriched rice | Genes for the pathway that makes β-carotene | Rice grains contain a vitamin A precursor |
| Transgenic livestock | A human gene expressed in milk-producing cells | A human protein is harvested from milk |

> 🔑 **AP Connection:** "Why must cDNA be used?" is a classic question. A complete answer has three links: the eukaryotic gene has introns, bacteria cannot splice them out, and cDNA made from mature mRNA already lacks them.`
    },
    {
      id: 'bio-biotechnology-p4-s8-mcq-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A team inserts the full genomic DNA of a human gene into an expression plasmid and transforms bacteria. Colonies grow on ampicillin, but the protein they make is nonfunctional. What is the most likely explanation?',
            options: [
              'Introns in the gene are never spliced out of the mRNA',
              'Bacterial ribosomes read human codons as different amino acids',
              'Ampicillin damaged the human gene during selection',
              'The plasmid lost its origin of replication during ligation'
            ],
            correctAnswer: 0,
            explanation: 'The genomic gene contains introns, and bacteria lack splicing machinery, so intron sequences end up in the mRNA and the protein. The genetic code is nearly universal, and growth on ampicillin shows the plasmid is being maintained.'
          },
          {
            question: 'In the four-plate experiment, colonies grow on plate C (LB + ampicillin, + plasmid) but none of them glow. Which conclusion is best supported?',
            options: [
              'The cells took up the plasmid but failed to keep it',
              'The cells lost the GFP gene during the transformation step',
              'The cells carry the plasmid, but the GFP gene is not induced',
              'The cells are not transformed and resist ampicillin naturally'
            ],
            correctAnswer: 2,
            explanation: 'Growth on ampicillin shows the cells carry the plasmid, and the GFP gene is transcribed only when arabinose is present, which plate C lacks. Plate B shows these bacteria are not naturally resistant.'
          },
          {
            question: 'Which result would show that a transformation experiment\'s ampicillin stock had lost its activity?',
            options: [
              'Colonies on plate C but no colonies on plate D',
              'A lawn on plate B, which held cells given no plasmid',
              'Glowing colonies on plate D but not on plate C',
              'A lawn on plate A, which held cells given no plasmid'
            ],
            correctAnswer: 1,
            explanation: 'Cells with no plasmid should die on ampicillin, so a lawn on plate B means the antibiotic is not working. A lawn on plate A is expected because it has no antibiotic, and glowing only on plate D is the normal result.'
          }
        ]
      }
    }
  ]
};
