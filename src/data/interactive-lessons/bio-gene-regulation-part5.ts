export const bioGeneRegPart5Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'grp5-intro',
      type: 'text' as const,
      content: `
## RNA Interference

**Part 5 of 7**

Not all gene regulation is done by proteins. The CED states that **certain small RNA molecules have roles in regulating gene expression**. These short RNAs pair with complementary mRNAs and shut them down, a process called **RNA interference (RNAi)**. Because they act *after* an mRNA is already made, they are a form of **post-transcriptional** regulation: they do not stop transcription; they control the fate of the transcript.

You will often see two names: **microRNAs (miRNAs)**, which a cell makes from its own genes, and **small interfering RNAs (siRNAs)**, which often come from double-stranded RNA such as a viral genome or a molecule introduced in the lab. Both work the same basic way.

> **AP trap (bank it now):** **Small regulatory RNAs act post-transcriptionally** — on the mRNA, not the DNA. They do not change the DNA sequence and do not block transcription itself; they reduce how much protein is made from transcripts that already exist.
      `
    },
    {
      id: 'grp5-biogenesis',
      type: 'text' as const,
      content: `
### How a Small RNA Silences an mRNA

1. **Production.** A longer RNA molecule folds back on itself (or pairs with a complementary RNA) to form a double-stranded region. Enzymes cut it into short pieces about 20 nucleotides long.
2. **Loading.** One strand of each short piece joins a protein complex.
3. **Targeting.** The small RNA in the complex **base-pairs** with any mRNA that has a complementary sequence. This is the same base-pairing logic as DNA replication and transcription.
4. **Silencing.** The bound mRNA is either **broken down** or **blocked from being translated**.

Either way, the net effect is the **same direction**: **less protein** from the targeted gene.

| Feature | Small regulatory RNA (miRNA or siRNA) |
|---|---|
| What it is | A short, single-stranded RNA, about 20 nucleotides |
| What it binds | A complementary sequence in a target **mRNA** |
| Where it acts | Cytoplasm, after transcription and processing |
| Outcome | mRNA degraded or not translated → less protein |
| DNA sequence changed? | **No** |

(The names of the enzymes and protein complexes involved are beyond the scope of the AP exam.)
      `
    },
    {
      id: 'grp5-mechanism',
      type: 'text' as const,
      content: `
### One Small RNA, Many Targets

A small RNA needs only a matching stretch of sequence to find its target, so **one miRNA can dampen many different mRNAs** that share that stretch. This makes small RNAs powerful coordinators: a single miRNA can lower the output of a whole group of genes at once, the post-transcriptional counterpart of a transcription factor that switches on many genes.

### Worked Example: Predicting Protein Levels

A miRNA called miR-X pairs with the mRNAs of genes A and B but not gene C. Predict each protein's level in three cell types.

| Cell type | miR-X level | Protein A | Protein B | Protein C |
|---|---|---|---|---|
| Normal | Moderate | Moderate | Moderate | Normal |
| miR-X overproduced | High | **Low** | **Low** | Normal |
| miR-X gene deleted | None | **High** | **High** | Normal |

**Step 1 — Find the targets.** Only mRNAs with a sequence complementary to miR-X (A and B) are affected.

**Step 2 — Apply the direction.** More miR-X means more silencing and less protein; no miR-X means no silencing and more protein.

**Step 3 — Check the mRNA level of the gene itself.** Transcription of A, B and C is unchanged in all three cell types; only the amount of protein made from A and B differs.

> **Quantitative intuition (fold-change):** If a miRNA represses its target to one-fourth of normal, that is a fold-change of about $0.25$. Remove that miRNA and the target rebounds toward $1\\times$. Small-RNA effects are usually described as *relative* changes in protein level, not absolute on/off.
      `
    },
    {
      id: 'grp5-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Predicting Small-RNA Outcomes
      `,
      exercise: {
        questions: [
          {
            question: 'A miRNA represses gene X by binding X\'s mRNA. A mutation causes the cell to OVER-express this miRNA (much more than normal). What is the predicted effect on protein X?',
            options: [
              'Protein X increases, because more miRNA means more transcription of X',
              'Protein X decreases, because more miRNA silences more of X\'s mRNA',
              'Protein X is unchanged, because miRNAs act only on DNA, not mRNA',
              'Protein X increases, because miRNAs stabilize their target mRNAs'
            ],
            correctAnswer: 1,
            explanation: 'A miRNA silences its target, so over-expressing it drives MORE silencing and LESS protein X. The "more transcription of X" option inverts the logic and wrongly claims miRNA boosts transcription. The "act only on DNA" option misplaces small RNAs at the DNA level (they are post-transcriptional, acting on mRNA). The "stabilize their target mRNAs" option contradicts the repressive function — miRNAs destabilize or block their targets, they do not stabilize them.'
          },
          {
            question: 'Conversely, gene Y is normally kept partly repressed by a miRNA. A knockout removes that miRNA entirely. What happens to protein Y, and why?',
            options: [
              'Protein Y decreases, because the miRNA was needed for translation',
              'Protein Y increases, because Y\'s mRNA is no longer silenced',
              'Protein Y is unchanged, because the gene sequence is intact',
              'The Y gene itself is deleted from the genome along with the miRNA'
            ],
            correctAnswer: 1,
            explanation: 'Removing a repressor (here, the miRNA) de-represses its target, so protein Y rises. The "needed for translation" option reverses the relationship (the miRNA represses, it is not required for translation). The "gene sequence is intact" option is a trap: an intact gene can still be repressed or de-repressed — sequence intactness does not fix expression level. The gene-deletion option confuses removing a regulatory RNA with deleting the target gene.'
          },
          {
            question: 'In which part of the gene-expression pathway do small regulatory RNAs such as miRNAs act?',
            options: [
              'Before transcription, by pairing with the gene\'s promoter DNA',
              'After transcription, by pairing with a complementary mRNA',
              'During replication, by pairing with the lagging strand',
              'After translation, by pairing with the finished protein'
            ],
            correctAnswer: 1,
            explanation: 'Small regulatory RNAs base-pair with complementary sequences in mRNA, so they act after transcription and before or during translation, lowering how much protein is made. They do not bind promoter DNA or replicating DNA, and RNA cannot base-pair with a protein.'
          }
        ]
      }
    },
    {
      id: 'grp5-tool',
      type: 'text' as const,
      content: `
### Small RNAs in Experiments — Lowering One Protein

Because a small RNA silences whatever mRNA it matches, researchers can introduce a synthetic small RNA that matches a gene of interest and **knock down** that gene's protein, without changing the genome. This is a **loss-of-function** experiment: by lowering one protein and watching what changes, scientists infer that protein's normal role.

How to read such an experiment:
- **mRNA of the target falls (or protein falls while transcription is normal)** → the small RNA is working post-transcriptionally.
- **The gene's DNA sequence is unchanged** → this is not a mutation.
- **The phenotype changes** → the protein normally contributes to that trait.

> **Connecting the unit:** Small regulatory RNAs are a layer that *the cell itself uses* (miRNAs fine-tuning developmental genes) and that *scientists borrow* (introduced siRNAs). In both cases the action is post-transcriptional — controlling the message after the gene has been read.
      `
    },
    {
      id: 'grp5-roles-context',
      type: 'text' as const,
      content: `
### Where Small RNAs Fit Among the Regulatory Levels

**Antiviral defense.** Many viruses make **double-stranded RNA** while they replicate. Cutting that RNA into small pieces and silencing the matching viral mRNAs is a built-in **defense** in many organisms, which is one reason the small-RNA system is so widespread.

**Placing small RNAs among the regulatory levels (the whole unit on one axis):**

| Regulatory event | Acts on | Level |
|---|---|---|
| Repressor blocks operator (lac/trp) | DNA (operator) | Transcriptional |
| Activators + enhancers (eukaryotic) | DNA (enhancer) | Transcriptional |
| DNA methylation / histone marks | Chromatin | Transcriptional (epigenetic) |
| **Small regulatory RNAs (miRNA / siRNA)** | **mRNA** | **Post-transcriptional** |
| Control of translation start | mRNA / ribosome | Translational |
| Phosphorylation, protein breakdown | Protein | Post-translational |

Small RNAs occupy the **post-transcriptional** slot: the gene has been transcribed, the mRNA exists, and the small RNA decides how much of it is translated. That placement is exactly what distinguishes it from a repressor (which prevents the mRNA from being made) and from a phosphorylation event (which modifies a protein already made).

> **AP framing:** If a question says a treatment "lowered the protein, the mRNA was destroyed, and the DNA was unchanged," that is **small-RNA silencing (post-transcriptional)** — not transcriptional repression and not mutation. The destroyed-mRNA-plus-intact-DNA signature is the giveaway.
      `
    },
    {
      id: 'grp5-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Small-RNA Reasoning
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher introduces a synthetic siRNA matching gene Z into cultured cells. Measurements later show that gene Z\'s mRNA level has dropped sharply, while sequencing of gene Z shows no change. What level of regulation has the researcher engineered, and what does the unchanged sequence tell you?',
            options: [
              'Transcriptional regulation; the siRNA mutated the promoter',
              'Post-transcriptional regulation; the siRNA led to breakdown of Z\'s mRNA',
              'Translational regulation only; the mRNA level should not have changed',
              'Epigenetic regulation; the siRNA methylated the gene\'s DNA'
            ],
            correctAnswer: 1,
            explanation: 'A matching siRNA pairs with the target mRNA and leads to its breakdown — post-transcriptional control — and the intact sequence confirms no mutation occurred. The mutated-promoter option wrongly claims a sequence change. The translational-only option is inconsistent with the observed mRNA drop (pure translational control would leave mRNA level unchanged). The methylation option misattributes the effect to DNA methylation rather than mRNA targeting.'
          },
          {
            question: 'During normal development, a miRNA is needed to keep a certain "stem-cell" gene repressed so cells can differentiate. A mutation inactivates this miRNA. What is the most likely consequence?',
            options: [
              'The stem-cell gene is silenced even more strongly than before',
              'The stem-cell gene is over-expressed and may stall tissue maturation',
              'The stem-cell gene\'s DNA sequence changes to an active allele',
              'Transcription of all genes in the cell stops until it divides'
            ],
            correctAnswer: 1,
            explanation: 'Losing a repressing miRNA de-represses its target, so the stem-cell gene is over-expressed, potentially blocking differentiation. The "silenced even more strongly" option inverts the effect (removing a repressor cannot increase repression). The DNA-change option confuses regulation with mutation of the target. The "all transcription stops" option wildly overstates the scope — one miRNA loss does not halt all transcription.'
          }
        ]
      }
    }
  ]
};
