export const bioDnaReplicationPart4Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dr4-intro',
      type: 'text' as const,
      content: `
## Proofreading and DNA Repair

**Part 4 of 7**

DNA replication must be extraordinarily accurate — the error rate is approximately **1 mistake per 10\\(^{10}\\) base pairs** in E. coli.  This remarkable fidelity is achieved through three layers of error correction.
      `
    },
    {
      id: 'dr4-fidelity',
      type: 'text' as const,
      content: `
### Three Layers of Replication Fidelity

**Layer 1: Base selection by DNA polymerase (~10\\(^5\\) accuracy)**
- DNA polymerase has a tight active site that favors correct Watson-Crick base pairs (A-T, G-C)
- Incorrect bases fit poorly and are rejected before incorporation
- Error rate: ~1 in 100,000

**Layer 2: Proofreading (3' → 5' exonuclease activity, ~10\\(^2\\) improvement)**
- DNA polymerase has a built-in editor: if a wrong nucleotide is incorporated, the polymerase detects the mismatch (distortion in the helix)
- The polymerase reverses direction and removes the incorrect nucleotide using **3' → 5' exonuclease** activity
- A correct nucleotide is then inserted
- Combined error rate: ~1 in 10\\(^7\\)

**Layer 3: Mismatch repair (MMR, ~10\\(^3\\) improvement)**
- After replication, mismatch repair proteins scan the newly synthesized DNA
- They detect and correct remaining mismatches
- The key challenge: distinguishing which strand has the error (old vs. new strand)
  - In E. coli: the parental strand is methylated (GATC sites); the new strand is not yet methylated, so repair enzymes know to fix the new strand
  - In eukaryotes: the new strand is identified by the presence of nicks (gaps not yet sealed)
- Combined final error rate: ~1 in 10\\(^{10}\\)
      `
    },
    {
      id: 'dr4-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Proofreading and Repair
      `,
      exercise: {
        questions: [
          {
            question: 'A mutant DNA polymerase lacks 3\\u2019 to 5\\u2019 exonuclease activity but retains normal polymerase activity. What is the predicted effect on mutation rates?',
            options: [
              'No effect — other repair systems compensate completely',
              'The mutation rate increases approximately 100-fold, as the proofreading step is lost; base selection and post-replication repair still function',
              'DNA replication stops entirely',
              'The mutation rate decreases because the polymerase works more carefully'
            ],
            correctAnswer: 1,
            explanation: 'Proofreading (3\\u2019-5\\u2019 exonuclease) typically provides a 100-fold improvement in accuracy. Losing it increases the error rate from ~1/10^10 to ~1/10^8 (base selection and mismatch repair still operate). This is a significant increase in mutation rate.'
          },
          {
            question: 'In mismatch repair, how does the cell distinguish the parental (correct) strand from the daughter (potentially incorrect) strand in E. coli?',
            options: [
              'The parental strand is longer',
              'The parental strand is methylated at GATC sequences; the newly synthesized strand is not yet methylated, directing repair to the unmethylated (new) strand',
              'The parental strand is made of RNA',
              'The cell cannot distinguish them'
            ],
            correctAnswer: 1,
            explanation: 'E. coli uses Dam methylase to add methyl groups to GATC sequences. Immediately after replication, only the parental strand is methylated (the new strand has not yet been methylated). Mismatch repair proteins use this asymmetry to determine which strand to repair.'
          }
        ]
      }
    },
    {
      id: 'dr4-damage',
      type: 'text' as const,
      content: `
### DNA Damage and Additional Repair Mechanisms

Beyond replication errors, DNA is constantly damaged by environmental and metabolic factors:

**Types of DNA damage:**
- **Deamination:** Spontaneous loss of an amino group from cytosine, converting it to uracil (if not repaired, G-C becomes A-T after replication)
- **Depurination:** Loss of a purine base (A or G) from the sugar-phosphate backbone (~5000 per cell per day)
- **Thymine dimers:** UV light causes adjacent thymines to form covalent bonds (pyrimidine dimers), distorting the helix
- **Oxidative damage:** Reactive oxygen species (ROS) modify bases (e.g., 8-oxoguanine mispairs with adenine)
- **Alkylation:** Chemical agents add alkyl groups to bases

**Repair pathways:**

| Pathway | Damage type | Mechanism |
|---------|------------|-----------|
| **Base excision repair (BER)** | Modified/damaged single bases | Glycosylase removes damaged base → AP endonuclease cuts backbone → polymerase fills gap → ligase seals |
| **Nucleotide excision repair (NER)** | Bulky lesions (thymine dimers, crosslinks) | Endonucleases cut on both sides of damage → ~12 nt oligonucleotide removed → polymerase fills → ligase seals |
| **Homologous recombination (HR)** | Double-strand breaks (DSBs) | Uses sister chromatid as template for accurate repair — only in S/G\\(_2\\) phase |
| **Non-homologous end joining (NHEJ)** | Double-strand breaks | Directly ligates broken ends — faster but error-prone (may lose bases) |

> **Xeroderma pigmentosum (XP):** A genetic disease caused by mutations in NER genes.  Patients cannot repair UV-induced thymine dimers and are extremely sensitive to sunlight, with high rates of skin cancer.
      `
    },
    {
      id: 'dr4-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — DNA Repair
      `,
      exercise: {
        questions: [
          {
            question: 'A patient with xeroderma pigmentosum develops skin cancer after minimal sun exposure. Which DNA repair pathway is defective?',
            options: [
              'Mismatch repair',
              'Nucleotide excision repair (NER) — the pathway that removes UV-induced thymine dimers and other bulky DNA lesions',
              'Base excision repair',
              'Homologous recombination'
            ],
            correctAnswer: 1,
            explanation: 'XP is caused by mutations in genes encoding NER proteins. NER removes thymine dimers caused by UV radiation. Without functional NER, these dimers persist, block replication, and if bypassed by error-prone polymerases, cause mutations that lead to cancer.'
          }
        ]
      }
    },
    {
      id: 'dr4-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — DNA Repair
      `,
      exercise: {
        questions: [
          {
            question: 'The UV-induced lesion where adjacent pyrimidines become covalently linked:',
            answer: 'thymine dimer',
            acceptableAnswers: ['thymine dimer', 'Thymine dimer', 'pyrimidine dimer', 'thymine dimers'],
            placeholder: 'e.g. deletion mutation'
          },
          {
            question: 'The repair pathway that uses a sister chromatid as a template for accurate double-strand break repair:',
            answer: 'homologous recombination',
            acceptableAnswers: ['homologous recombination', 'HR', 'Homologous recombination', 'homologous recombination repair'],
            placeholder: 'e.g. NHEJ'
          }
        ]
      }
    },
    {
      id: 'dr4-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket
      `,
      exercise: {
        questions: [
          {
            question: 'Why is homologous recombination (HR) a more accurate repair mechanism for double-strand breaks than non-homologous end joining (NHEJ)?',
            options: [
              'HR is faster than NHEJ',
              'HR uses the sister chromatid (perfect copy) as a template to restore the original sequence; NHEJ simply ligates broken ends without a template, often losing or adding nucleotides at the junction',
              'NHEJ only works in prokaryotes',
              'HR does not require any enzymes'
            ],
            correctAnswer: 1,
            explanation: 'HR uses the intact sister chromatid as a template for synthesis across the break, restoring the original sequence exactly. NHEJ processes and ligates the broken ends directly, often resulting in small deletions or insertions at the repair site. However, HR is only available in S/G2 phase when a sister chromatid exists.'
          }
        ]
      }
    }
  ]
};