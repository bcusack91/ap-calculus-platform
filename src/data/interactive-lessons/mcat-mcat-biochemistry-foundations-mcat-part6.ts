export const mcatBiochemPart6Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'bc6-intro',
      type: 'text' as const,
      content: `# Biochemistry Foundations

**Part 6 of 7 — Nucleic Acids & Molecular Biology**

### DNA vs RNA

| Feature | DNA | RNA |
|---------|-----|-----|
| Sugar | Deoxyribose | Ribose ($2'-OH$) |
| Bases | A, T, G, C | A, U, G, C |
| Structure | Double-stranded | Usually single-stranded |
| Stability | More stable | Less stable ($2'-OH$ makes it prone to hydrolysis) |

### Base Pairing (Chargaff's Rules)

- A-T: 2 hydrogen bonds
- G-C: 3 hydrogen bonds → higher GC content = higher melting temp ($T_m$)

### Central Dogma

$$\\text{DNA} \\xrightarrow{\\text{Transcription}} \\text{mRNA} \\xrightarrow{\\text{Translation}} \\text{Protein}$$

### Key Enzymes

| Process | Key Enzyme | Function |
|---------|-----------|----------|
| Replication | DNA polymerase III | Synthesizes new DNA strand ($5' \\to 3'$) |
| Replication | Helicase | Unwinds double helix |
| Replication | Primase | Makes RNA primer |
| Transcription | RNA polymerase | Synthesizes mRNA from DNA template |
| Translation | Ribosome | Reads mRNA, assembles protein |

Directionality is crucial: polymerases synthesize nucleic acid in the 5' to 3' direction by adding to a free 3'-OH.`
    },
    {
      id: 'bc6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Nucleic Acids** 🎯`,
      exercise: {
        questions: [
          {
            question: `If a DNA sample is 30% adenine, what percent is guanine?`,
            options: [`20%`, `30%`, `40%`, `25%`],
            correctAnswer: 0,
            explanation: `By Chargaff: A = T = 30%. So A + T = 60%. G + C = 40%. Since G = C: G = 20%.`
          },
          {
            question: `DNA polymerase requires:`,
            options: [`A free $3\`-OH$ group to add nucleotides (needs a primer!)`, `A $5\`-OH$ group`, `No primer — it can start de novo`, `Only single-stranded DNA`],
            correctAnswer: 0,
            explanation: `DNA polymerase can only add nucleotides to an existing $3'-OH$ group. This is why primase must first lay down an RNA primer. RNA polymerase, in contrast, can start de novo.`
          },
          {
            question: `Higher GC content usually increases DNA melting temperature because:`,
            options: [`GC bases are larger`, `GC pairs have three hydrogen bonds`, `GC pairs are uncharged`, `GC prevents base stacking`],
            correctAnswer: 1,
            explanation: `G-C pairs form three hydrogen bonds versus two for A-T, increasing duplex stability.`
          },
          {
            question: `During replication, DNA polymerase reads the template strand in which direction?`,
            options: [`5' to 3'`, `3' to 5'`, `Both simultaneously`, `Random direction`],
            correctAnswer: 1,
            explanation: `Because synthesis is 5' to 3', the template must be read 3' to 5'.`
          }
        ]
      }
    },
    {
      id: 'bc6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- GC content correlates with $T_m$ (3 H-bonds vs 2 for AT)
- DNA polymerase: $5' \\to 3'$ synthesis, needs primer, has proofreading
- RNA polymerase: no primer needed, reads template $3' \\to 5'$
- Chargaff: A=T, G=C in double-stranded DNA`
    },
    {
      id: 'bc6-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Nucleic Acids & Molecular Biology

<details>
<summary><b>Example 1: Apply Chargaff's rules quickly</b></summary>

**Question:** A double-stranded DNA sample has 18% guanine. What are the percentages of all four bases?

**Solution:**
1. In dsDNA, G = C and A = T.
2. If G is 18%, then C is 18%.
3. G + C is 36%, so A + T is 64%.
4. Therefore A is 32% and T is 32%.

Final composition: **A 32%, T 32%, G 18%, C 18%**.

**MCAT tip:** Solve these in two moves: pair equalities first, then total to 100%.
</details>

<details>
<summary><b>Example 2: Determine complement and strand direction</b></summary>

**Question:** If the template DNA strand is 3'-TAC GGA TTT-5', what mRNA sequence is transcribed?

**Solution:**
1. RNA polymerase reads template 3' to 5'.
2. mRNA is synthesized 5' to 3'.
3. Apply base pairing with U instead of T in RNA:
   - T to A
   - A to U
   - C to G
   - G to C
4. Result: **5'-AUG CCU AAA-3'**.

**MCAT tip:** Always write orientation marks first to avoid reversing the final answer.
</details>

<details>
<summary><b>Example 3: Compare melting temperatures from GC content</b></summary>

**Question:** Which fragment has higher melting temperature, and why?

Fragment A: 5'-GCGCGCAAAT-3'
Fragment B: 5'-ATATATATGC-3'

**Solution:**
1. Fragment A has higher GC fraction.
2. GC pairs have three H-bonds and stronger stacking interactions than AT-rich regions.
3. More thermal energy is needed to separate the duplex.

So **Fragment A has higher $T_m$**.

**MCAT tip:** GC content is a fast proxy for duplex stability in PCR and denaturation questions.
</details>`
    }
  ]
};
