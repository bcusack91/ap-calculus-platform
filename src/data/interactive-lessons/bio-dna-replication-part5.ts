export const bioDnaReplicationPart5Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dr5-intro',
      type: 'text' as const,
      content: `
## Telomeres and the End Replication Problem

**Part 5 of 7**

Linear chromosomes in eukaryotes face a unique challenge: the **end replication problem**.  This problem does not exist in prokaryotes because their chromosomes are circular.
      `
    },
    {
      id: 'dr5-problem',
      type: 'text' as const,
      content: `
### The End Replication Problem

**The problem:**
- On the lagging strand, an RNA primer must initiate each Okazaki fragment
- At the very end of the chromosome (3' end of the template), the last RNA primer is synthesized, and DNA polymerase extends from it
- When this primer is removed, there is a short gap at the 5' end of the new strand that CANNOT be filled — there is no upstream 3'-OH for DNA polymerase to extend from
- Result: the daughter strand is slightly shorter than the parent

**Consequence:** With each round of replication, chromosomes get shorter at both ends.  After many divisions, essential genes near the ends would be lost.

### Telomeres — The Protective Solution

**Telomeres** are repetitive, non-coding DNA sequences at the ends of linear chromosomes:
- Human telomere repeat: **TTAGGG** (repeated 1000-2000 times, totaling 5-15 kb)
- Telomeres provide a "buffer zone" of expendable sequence — shortening removes repeats, not genes
- Telomeres also form a protective structure called a **T-loop** (the 3' overhang folds back and invades the double-stranded region) with a protein complex called **shelterin** that prevents the cell from recognizing chromosome ends as DNA breaks

> **Hayflick Limit:** Normal somatic cells can divide approximately **50-70 times** before telomeres become critically short.  At this point, cells enter **replicative senescence** (a permanent G$_0$ state) or undergo apoptosis.  This is a tumor-suppression mechanism.
      `
    },
    {
      id: 'dr5-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint
      `,
      exercise: {
        questions: [
          {
            question: 'Why does the end replication problem only affect eukaryotes, not prokaryotes?',
            options: [
              'Prokaryotic genomes are small enough to copy before the ends erode',
              'Prokaryotic chromosomes are circular, so there are no ends to lose',
              'Prokaryotes make no Okazaki fragments, so no primer gaps ever form',
              'Prokaryotic polymerases can build strands in both the 5’-3’ and 3’-5’ directions'
            ],
            correctAnswer: 1,
            explanation: 'Circular chromosomes have no free ends. The last Okazaki fragment on the lagging strand can be completed by extending from the adjacent fragment or by closing the circle. Only linear chromosomes have terminal sequences that cannot be fully replicated.'
          },
          {
            question: 'What would happen if telomeres were removed from a chromosome?',
            options: [
              'Nothing, because telomeres carry no genes and serve no function',
              'Ends would be treated as DNA breaks, causing fusions or cell death',
              'The chromosome would replicate faster with less DNA to copy',
              'The cell would become cancerous at once from unchecked division'
            ],
            correctAnswer: 1,
            explanation: 'Without telomeres and their associated shelterin complex, chromosome ends resemble DSBs. The cell tries to "repair" them by fusing chromosomes together (creating dicentric chromosomes) or by triggering checkpoint-mediated apoptosis. Additionally, essential genes near the ends would be eroded.'
          }
        ]
      }
    },
    {
      id: 'dr5-telomerase',
      type: 'text' as const,
      content: `
### Telomerase — Extending the Ends

**Telomerase** is a specialized enzyme that extends telomeres, counteracting the end replication problem:

**Structure:**
- Telomerase is a **ribonucleoprotein** (protein + RNA)
- Contains **TERT** (telomerase reverse transcriptase) — the catalytic protein subunit
- Contains **TERC** (telomerase RNA component) — includes a template sequence complementary to the telomeric repeat

**Mechanism:**
1. The TERC template (3'-AAUCCC-5') base-pairs with the 3' overhang of the telomere
2. TERT extends the 3' end using the RNA template (reverse transcription — RNA → DNA)
3. Telomerase translocates and repeats, adding multiple TTAGGG repeats
4. Primase then synthesizes a primer on the extended 3' overhang
5. DNA polymerase fills in the complementary strand
6. The primer is removed, leaving a slightly extended chromosome

**Telomerase expression:**
- **Active** in: germ cells, stem cells, early embryonic cells — these cells must divide indefinitely
- **Inactive** in: most somatic cells — contributes to the Hayflick limit and aging
- **Reactivated** in: ~85-90% of cancers — telomerase reactivation grants immortality

> **Cancer Connection:** Telomerase reactivation is one of the hallmarks of cancer. Drugs targeting telomerase (e.g., imetelstat) are being developed as potential cancer therapies.  However, targeting telomerase could also affect stem cells, posing a therapeutic challenge.
      `
    },
    {
      id: 'dr5-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Telomerase
      `,
      exercise: {
        questions: [
          {
            question: 'Telomerase contains an RNA component (TERC). Why is this RNA essential?',
            options: [
              'It serves only to stabilize the enzyme and plays no part in the reaction',
              'It serves as the template that TERT copies into telomeric DNA repeats',
              'It is the catalytic core that adds new nucleotides to the telomere end',
              'It shields TERT from protease degradation inside the nucleus'
            ],
            correctAnswer: 1,
            explanation: 'TERC contains a short template sequence (complementary to the telomere repeat) that TERT uses to synthesize new telomeric DNA. This makes telomerase a reverse transcriptase — it copies RNA into DNA. Without TERC, TERT has no template and cannot extend telomeres.'
          },
          {
            question: 'If telomerase is inhibited in cancer cells, what is the predicted long-term effect?',
            options: [
              'The cells would die at once, as soon as telomerase activity stops',
              'Telomeres would shorten each division until cells senesce or die',
              'The cells would switch to conservative replication to protect their ends',
              'Nothing, because cancer cells never lose DNA from their chromosome ends'
            ],
            correctAnswer: 1,
            explanation: 'Telomerase inhibition does not kill cells immediately. Rather, with each division, telomeres shorten further. After many divisions (depends on initial telomere length), telomeres become critically short, triggering checkpoint-mediated senescence or apoptosis. This is why telomerase inhibitors require prolonged treatment.'
          }
        ]
      }
    },
    {
      id: 'dr5-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — Telomeres
      `,
      exercise: {
        questions: [
          {
            question: 'The repetitive DNA sequence at human chromosome ends:',
            answer: 'TTAGGG',
            acceptableAnswers: ['TTAGGG', 'ttaggg'],
            placeholder: 'e.g. AATCGG'
          },
          {
            question: 'The approximate maximum number of times a normal somatic cell can divide:',
            answer: '50-70',
            acceptableAnswers: ['50-70', '50', '50 to 70', 'about 50', 'approximately 50'],
            placeholder: 'e.g. 100'
          },
          {
            question: 'The protein subunit of telomerase that acts as a reverse transcriptase:',
            answer: 'TERT',
            acceptableAnswers: ['TERT', 'tert', 'telomerase reverse transcriptase'],
            placeholder: 'e.g. TERC'
          }
        ]
      }
    },
    {
      id: 'dr5-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket
      `,
      exercise: {
        questions: [
          {
            question: 'Dolly the sheep (the first mammal cloned from an adult somatic cell) had shortened telomeres compared to age-matched naturally born sheep. Why?',
            options: [
              'Cloning from an adult cell damaged her DNA, and the damaged ends were trimmed',
              'Her nucleus came from an adult cell whose telomeres had already shortened',
              'Sheep lack telomerase, so all sheep telomeres shorten with age',
              'Dolly carried different alleles that encode a shorter telomere repeat'
            ],
            correctAnswer: 1,
            explanation: 'The donor nucleus had the shortened telomeres characteristic of an adult somatic cell. During reprogramming and subsequent development, telomeres were not fully restored to embryonic length. This meant Dolly effectively started life with "older" chromosomes, which may have contributed to her premature aging.'
          }
        ]
      }
    }
  ]
};