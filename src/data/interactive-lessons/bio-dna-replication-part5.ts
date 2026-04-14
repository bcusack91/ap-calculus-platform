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

> **Hayflick Limit:** Normal somatic cells can divide approximately **50-70 times** before telomeres become critically short.  At this point, cells enter **replicative senescence** (a permanent G\\(_0\\) state) or undergo apoptosis.  This is a tumor-suppression mechanism.
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
              'Prokaryotes have smaller genomes',
              'Prokaryotic chromosomes are circular — there are no "ends" where incomplete replication can occur; the lagging strand is eventually completed all the way around',
              'Prokaryotes do not use Okazaki fragments',
              'Prokaryotic DNA polymerase can synthesize in both directions'
            ],
            correctAnswer: 1,
            explanation: 'Circular chromosomes have no free ends. The last Okazaki fragment on the lagging strand can be completed by extending from the adjacent fragment or by closing the circle. Only linear chromosomes have terminal sequences that cannot be fully replicated.'
          },
          {
            question: 'What would happen if telomeres were removed from a chromosome?',
            options: [
              'Nothing — telomeres have no function',
              'The chromosome ends would be recognized as double-strand breaks, triggering DNA repair (end-to-end fusions via NHEJ) or apoptosis; coding genes at the ends would also be lost during replication',
              'The chromosome would replicate faster',
              'The cell would become cancerous immediately'
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
              'It provides structural stability only',
              'The RNA serves as a template for synthesizing the telomeric DNA repeat — TERT (the enzyme) uses the RNA template to add TTAGGG repeats to the chromosome end via reverse transcription',
              'It catalyzes the reaction',
              'It protects TERT from degradation'
            ],
            correctAnswer: 1,
            explanation: 'TERC contains a short template sequence (complementary to the telomere repeat) that TERT uses to synthesize new telomeric DNA. This makes telomerase a reverse transcriptase — it copies RNA into DNA. Without TERC, TERT has no template and cannot extend telomeres.'
          },
          {
            question: 'If telomerase is inhibited in cancer cells, what is the predicted long-term effect?',
            options: [
              'The cells would die immediately',
              'Over multiple divisions, telomeres would progressively shorten until they reach critical length, triggering senescence or apoptosis — the cancer cells would eventually stop dividing',
              'The cells would switch to a different replication mechanism',
              'Nothing — cancer cells do not need telomerase'
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
              'Cloning damages DNA',
              'The nucleus used for cloning came from an adult cell that had already undergone many divisions and had shortened telomeres; the telomeres were not fully restored during cloning',
              'Sheep do not have telomerase',
              'Dolly was genetically different from normal sheep'
            ],
            correctAnswer: 1,
            explanation: 'The donor nucleus had the shortened telomeres characteristic of an adult somatic cell. During reprogramming and subsequent development, telomeres were not fully restored to embryonic length. This meant Dolly effectively started life with "older" chromosomes, which may have contributed to her premature aging.'
          }
        ]
      }
    }
  ]
};