export const bioDnaReplicationPart7Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dr7-intro',
      type: 'text' as const,
      content: `
## AP Review — DNA Replication

**Part 7 of 7**

Comprehensive AP-exam-style questions integrating all DNA replication concepts.
      `
    },
    {
      id: 'dr7-summary',
      type: 'text' as const,
      content: `
### Key Principles Summary

1. DNA replication is **semiconservative** — each daughter molecule has one parental and one new strand (Meselson-Stahl)
2. Replication is **bidirectional** from origins and proceeds in the **5' → 3' direction** only
3. The **leading strand** is continuous; the **lagging strand** is discontinuous (Okazaki fragments)
4. **Primase** provides RNA primers; **DNA Polymerase III** extends; **Pol I** removes primers; **Ligase** seals nicks
5. Three layers of fidelity: base selection, proofreading (3'→5' exonuclease), and mismatch repair
6. Multiple DNA repair pathways (BER, NER, HR, NHEJ) protect against different types of damage
7. **Telomeres** protect chromosome ends; **telomerase** counteracts the end replication problem
      `
    },
    {
      id: 'dr7-quiz1',
      type: 'multiple-choice' as const,
      content: `
### AP-Style Questions — Set 1
      `,
      exercise: {
        questions: [
          {
            question: 'A segment of single-stranded DNA template reads 3\\u2019-TACGAATTCCAT-5\\u2019. What is the sequence of the complementary strand synthesized by DNA polymerase?',
            options: [
              '5\\u2019-TACGAATTCCAT-3\\u2019',
              '5\\u2019-ATGCTTAAGGTA-3\\u2019',
              '3\\u2019-ATGCTTAAGGTA-5\\u2019',
              '5\\u2019-UACGAAUUCCAU-3\\u2019'
            ],
            correctAnswer: 1,
            explanation: 'DNA polymerase synthesizes in the 5\\u2019 to 3\\u2019 direction, reading the template 3\\u2019 to 5\\u2019. Complementary pairing: T-A, A-T, C-G, G-C, A-T, A-T, T-A, T-A, C-G, C-G, A-T, T-A. New strand: 5\\u2019-ATGCTTAAGGTA-3\\u2019.'
          },
          {
            question: 'BRCA1 and BRCA2 are important for homologous recombination repair of double-strand breaks. Mutations in these genes increase breast and ovarian cancer risk. Which of the following best explains this connection?',
            options: [
              'BRCA mutations directly cause cells to grow faster',
              'Without functional HR repair, double-strand breaks are either left unrepaired or repaired by error-prone NHEJ, leading to increased genomic instability and accumulation of cancer-causing mutations',
              'BRCA proteins prevent all mutations',
              'BRCA mutations only affect germ cells'
            ],
            correctAnswer: 1,
            explanation: 'BRCA1/2 are essential for homologous recombination, the most accurate DSB repair pathway. Without them, cells rely on error-prone NHEJ or leave breaks unrepaired. This causes accumulating mutations and chromosomal rearrangements — genomic instability that drives cancer development.'
          }
        ]
      }
    },
    {
      id: 'dr7-quiz2',
      type: 'multiple-choice' as const,
      content: `
### AP-Style Questions — Set 2
      `,
      exercise: {
        questions: [
          {
            question: 'Aphidicolin is a drug that specifically inhibits eukaryotic DNA polymerase alpha and delta but not mitochondrial DNA polymerase gamma. If aphidicolin is applied to dividing cells, which is most accurate?',
            options: [
              'Both nuclear and mitochondrial DNA replication stop',
              'Nuclear DNA replication is inhibited (cells arrest in S phase), but mitochondrial DNA continues to replicate because it uses a different, unaffected polymerase',
              'Only mitochondrial DNA replication stops',
              'Protein synthesis is blocked'
            ],
            correctAnswer: 1,
            explanation: 'Aphidicolin specifically targets replicative polymerases alpha and delta in the nucleus. Mitochondrial DNA polymerase gamma is structurally distinct and unaffected. This differential sensitivity reflects the endosymbiotic origin of mitochondria — their replication machinery derives from ancestral bacteria.'
          },
          {
            question: 'A researcher sequences a newly replicated DNA strand and finds that ~5% of the nucleotides are ribonucleotides (RNA). What is the most likely explanation?',
            options: [
              'DNA polymerase incorporated the wrong nucleotides',
              'The RNA primers have not yet been completely removed and replaced with DNA by the repair/replacement mechanism',
              'Reverse transcription occurred',
              'The cell is undergoing transcription, not replication'
            ],
            correctAnswer: 1,
            explanation: 'During lagging strand synthesis, each Okazaki fragment starts with an RNA primer (~5-10 ribonucleotides). If the observed strand still contains ribonucleotides, it indicates that DNA Pol I has not yet fully removed all primers and replaced them with DNA. In a completed strand, no ribonucleotides should remain.'
          },
          {
            question: 'Werner syndrome is caused by a mutation in a RecQ helicase involved in various DNA repair and replication processes. Patients show premature aging. How might this relate to DNA replication?',
            options: [
              'Werner syndrome only affects RNA processing',
              'Defective helicase leads to impaired DNA repair, replication fork stalling, genomic instability, and accelerated telomere shortening — all contributing to premature cellular aging and senescence',
              'Werner syndrome causes cells to divide too quickly',
              'The mutation increases telomerase activity'
            ],
            correctAnswer: 1,
            explanation: 'RecQ helicases are crucial for resolving DNA structures during replication and repair. Without WRN helicase, replication forks stall more frequently, DNA damage accumulates, and telomere maintenance is impaired. The resulting genomic instability causes cells to senesce prematurely, explaining the accelerated aging phenotype.'
          }
        ]
      }
    },
    {
      id: 'dr7-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Comprehensive Matching
      `,
      exercise: {
        questions: [
          {
            question: 'Unwinds the double helix by breaking hydrogen bonds:',
            options: ['DNA polymerase III', 'Helicase', 'Primase', 'Ligase', 'Topoisomerase'],
            correctAnswer: 'Helicase'
          },
          {
            question: 'Synthesizes the RNA primer:',
            options: ['DNA polymerase III', 'Helicase', 'Primase', 'Ligase', 'Topoisomerase'],
            correctAnswer: 'Primase'
          },
          {
            question: 'Relieves supercoiling ahead of the fork:',
            options: ['DNA polymerase III', 'Helicase', 'Primase', 'Ligase', 'Topoisomerase'],
            correctAnswer: 'Topoisomerase'
          },
          {
            question: 'Joins Okazaki fragments by sealing phosphodiester bonds:',
            options: ['DNA polymerase III', 'Helicase', 'Primase', 'Ligase', 'Topoisomerase'],
            correctAnswer: 'Ligase'
          },
          {
            question: 'Main replicative polymerase that extends primers:',
            options: ['DNA polymerase I', 'Helicase', 'Primase', 'Ligase', 'DNA polymerase III'],
            correctAnswer: 'DNA polymerase III'
          }
        ]
      }
    },
    {
      id: 'dr7-input',
      type: 'input-boxes' as const,
      content: `
### Final Review
      `,
      exercise: {
        questions: [
          {
            question: 'The genetic disease caused by defective nucleotide excision repair:',
            answer: 'xeroderma pigmentosum',
            acceptableAnswers: ['xeroderma pigmentosum', 'Xeroderma pigmentosum', 'XP', 'xeroderma'],
            placeholder: 'e.g. cystic fibrosis'
          },
          {
            question: 'The experiment that proved semiconservative replication (last names of researchers):',
            answer: 'Meselson-Stahl',
            acceptableAnswers: ['Meselson-Stahl', 'Meselson and Stahl', 'meselson-stahl', 'Meselson Stahl'],
            placeholder: 'e.g. Watson-Crick'
          }
        ]
      }
    },
    {
      id: 'dr7-exit',
      type: 'multiple-choice' as const,
      content: `
### Final Exit Ticket
      `,
      exercise: {
        questions: [
          {
            question: 'Integration: A pharmaceutical company develops a drug that inhibits primase. What effects would this drug have on DNA replication?',
            options: [
              'Only the leading strand would be affected',
              'DNA replication would be almost completely blocked — no primers can be synthesized, so neither the leading strand (needs one primer) nor the lagging strand (needs many primers) can be initiated. DNA polymerase cannot start synthesis without a primer.',
              'Only Okazaki fragment synthesis would stop',
              'DNA would replicate normally using DNA polymerase alone'
            ],
            correctAnswer: 1,
            explanation: 'Both the leading and lagging strands require RNA primers to initiate synthesis. The leading strand needs one primer; the lagging strand needs a primer for every Okazaki fragment. Inhibiting primase would prevent ANY new DNA synthesis, completely blocking replication. This effects both strands.'
          }
        ]
      }
    }
  ]
};