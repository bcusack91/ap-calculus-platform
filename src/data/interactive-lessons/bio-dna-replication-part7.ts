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
4. **Helicase** unwinds; **topoisomerase** relieves overwinding ahead of the fork; **DNA polymerase** extends RNA primers 5' → 3'; **ligase** joins the lagging-strand fragments
5. Three layers of fidelity: base selection, proofreading by DNA polymerase, and mismatch repair
6. Errors that escape repair, and damage from radiation and reactive chemicals, become **mutations**, the source of new alleles
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
            question: 'A segment of single-stranded DNA template reads 3\u2019-TACGAATTCCAT-5\u2019. What is the sequence of the complementary strand synthesized by DNA polymerase?',
            options: [
              '5\u2019-TACGAATTCCAT-3\u2019',
              '5\u2019-ATGCTTAAGGTA-3\u2019',
              '3\u2019-ATGCTTAAGGTA-5\u2019',
              '5\u2019-UACGAAUUCCAU-3\u2019'
            ],
            correctAnswer: 1,
            explanation: 'DNA polymerase synthesizes in the 5\u2019 to 3\u2019 direction, reading the template 3\u2019 to 5\u2019. Complementary pairing: T-A, A-T, C-G, G-C, A-T, A-T, T-A, T-A, C-G, C-G, A-T, T-A. New strand: 5\u2019-ATGCTTAAGGTA-3\u2019.'
          },
          {
            question: 'A cell is exposed to a reactive chemical that alters one guanine so that it pairs with thymine instead of cytosine. The damage is not repaired. After two more rounds of replication, what is the most likely result?',
            options: [
              'All descendant DNA is unchanged, since the original strand is conserved',
              'Some descendant DNA has an A-T pair in place of the original G-C pair',
              'The altered guanine is translated directly into the wrong amino acid',
              'Replication stops, since DNA polymerase cannot pair with any altered base'
            ],
            correctAnswer: 1,
            explanation: 'In the next round, the altered guanine pairs with T. In the round after that, the T serves as a template and pairs with A, so one descendant molecule carries an A-T pair where a G-C pair used to be: a point mutation caused by a reactive chemical. The parental strand is conserved, but its altered base is what causes the mispairing; DNA is transcribed, not translated; and polymerase keeps copying the damaged strand.'
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
            question: 'A drug blocks DNA polymerase in a population of dividing cells. At which stage of the cell cycle will the drug first stop the cells\' progress?',
            options: [
              'G1, when the cell grows before it copies its DNA',
              'S phase, when the DNA is being replicated',
              'Anaphase, when sister chromatids separate',
              'Cytokinesis, when the cytoplasm divides'
            ],
            correctAnswer: 1,
            explanation: 'DNA polymerase builds the new DNA strands during S phase, so cells with the drug cannot finish replicating and stall there. G1 growth does not require DNA polymerase, and cells never reach anaphase or cytokinesis because their DNA has not been copied.'
          },
          {
            question: 'A researcher sequences a newly replicated DNA strand and finds that ~5% of the nucleotides are ribonucleotides (RNA). What is the most likely explanation?',
            options: [
              'DNA polymerase misincorporated ribonucleotides in place of dNTPs',
              'RNA primers have not yet been removed and replaced with DNA',
              'Reverse transcriptase copied an RNA template into the new strand',
              'The cell was transcribing this region rather than replicating it'
            ],
            correctAnswer: 1,
            explanation: 'During lagging strand synthesis, each Okazaki fragment starts with an RNA primer (~5-10 ribonucleotides). If the observed strand still contains ribonucleotides, it indicates that the RNA primers have not yet been removed and replaced with DNA. In a completed strand, no ribonucleotides should remain.'
          },
          {
            question: 'A mutation leaves helicase unable to separate the two strands of DNA. Which step of replication is blocked first?',
            options: [
              'Unwinding at the fork, so no single-stranded template is exposed',
              'Joining of Okazaki fragments, so the lagging strand stays in pieces',
              'Relief of overwinding ahead of the fork, so the fork stalls later',
              'Removal of RNA primers, so the new strands keep RNA segments'
            ],
            correctAnswer: 0,
            explanation: 'Helicase opens the double helix at the fork. If the strands cannot be separated, there is no single-stranded template, so primers cannot be laid down and DNA polymerase has nothing to copy. Joining fragments (ligase), relieving overwinding (topoisomerase) and replacing primers all come later or are done by other enzymes.'
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
            options: ['DNA polymerase', 'Helicase', 'RNA primer', 'Ligase', 'Topoisomerase'],
            correctAnswer: 'Helicase'
          },
          {
            question: 'Builds new DNA in the 5′ → 3′ direction, starting from a primer:',
            options: ['DNA polymerase', 'Helicase', 'RNA primer', 'Ligase', 'Topoisomerase'],
            correctAnswer: 'DNA polymerase'
          },
          {
            question: 'Relieves supercoiling ahead of the fork:',
            options: ['DNA polymerase', 'Helicase', 'RNA primer', 'Ligase', 'Topoisomerase'],
            correctAnswer: 'Topoisomerase'
          },
          {
            question: 'Joins Okazaki fragments by sealing the sugar-phosphate backbone:',
            options: ['DNA polymerase', 'Helicase', 'RNA primer', 'Ligase', 'Topoisomerase'],
            correctAnswer: 'Ligase'
          },
          {
            question: 'Must be laid down before DNA polymerase can begin a new strand:',
            options: ['DNA polymerase', 'Helicase', 'RNA primer', 'Ligase', 'Topoisomerase'],
            correctAnswer: 'RNA primer'
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
            question: 'The model of replication in which each new DNA molecule keeps one parental strand:',
            answer: 'semiconservative',
            acceptableAnswers: ['semiconservative', 'Semiconservative', 'semi-conservative', 'Semi-conservative'],
            placeholder: 'e.g. dispersive'
          },
          {
            question: 'The enzyme that relieves overwinding ahead of the replication fork:',
            answer: 'topoisomerase',
            acceptableAnswers: ['topoisomerase', 'Topoisomerase', 'DNA topoisomerase'],
            placeholder: 'e.g. ligase'
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
            question: 'Integration: A pharmaceutical company develops a drug that prevents RNA primers from being made. What effects would this drug have on DNA replication?',
            options: [
              'Only the leading strand would stop, since it needs one long primer',
              'Replication would be blocked on both strands, since neither can be primed',
              'Only lagging-strand synthesis would stop, since it needs many primers',
              'DNA would replicate normally, since polymerase can start strands alone'
            ],
            correctAnswer: 1,
            explanation: 'Both the leading and lagging strands require RNA primers to initiate synthesis. The leading strand needs one primer; the lagging strand needs a primer for every Okazaki fragment. Blocking primer synthesis would prevent ANY new DNA synthesis, completely blocking replication on both strands, because DNA polymerase cannot start a strand without a primer.'
          }
        ]
      }
    }
  ]
};