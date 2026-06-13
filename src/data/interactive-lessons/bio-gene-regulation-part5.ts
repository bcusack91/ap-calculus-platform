export const bioGeneRegPart5Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'grp5-intro',
      type: 'text' as const,
      content: `
## RNA Interference

**Part 5 of 7**

Not all gene regulation is done by proteins. Cells also use **small RNA molecules** to control which mRNAs get translated — a system called **RNA interference (RNAi)**. Because these RNAs act *after* an mRNA is already made, RNAi is a form of **post-transcriptional** regulation: it does not stop transcription; it controls the fate of the transcript.

The two main players are **microRNAs (miRNAs)** and **small interfering RNAs (siRNAs)** — short (~21-23 nucleotide) RNAs that guide a protein complex to complementary mRNAs and shut them down. The discovery of RNAi reshaped our understanding of gene regulation and handed researchers a precise tool for switching genes off.

> **AP trap (bank it now):** **RNAi acts post-transcriptionally** — on the mRNA, not the DNA. It does not change the DNA sequence and (in the AP-canonical view) does not block transcription itself; it degrades or silences transcripts that already exist.
      `
    },
    {
      id: 'grp5-biogenesis',
      type: 'text' as const,
      content: `
### Biogenesis — Where the Small RNAs Come From

Both miRNAs and siRNAs are processed from double-stranded RNA precursors and loaded into the same effector machinery, but their origins differ:

- **miRNAs** are encoded by the organism's **own genome**. They are transcribed as longer precursors that fold into hairpins, then trimmed by the enzyme **Dicer** into short double-stranded fragments.
- **siRNAs** typically derive from **longer double-stranded RNA**, often of viral or experimental (exogenous) origin, also diced by **Dicer** into short duplexes.

The shared downstream pathway:

1. **Dicer** cuts the precursor into a short (~21-23 nt) RNA duplex.
2. One strand (the **guide strand**) is loaded into **RISC** (the RNA-Induced Silencing Complex), whose catalytic core is an **Argonaute** protein. The other strand is discarded.
3. The guide RNA base-pairs with complementary sequences in target mRNAs, directing RISC to silence them.

| Feature | miRNA | siRNA |
|---|---|---|
| Source | Cell's own genome (endogenous) | Long dsRNA, often viral or lab-introduced (exogenous) |
| Processing enzyme | **Dicer** | **Dicer** |
| Effector complex | **RISC** (Argonaute) | **RISC** (Argonaute) |
| Typical complementarity to target | Often **partial** | Usually **perfect/extensive** |
| Typical outcome | Translational repression (and/or destabilization) | mRNA **cleavage/degradation** |

> **One enzyme, one complex, two inputs:** Remember the pipeline **Dicer → RISC/Argonaute**. Whether a small RNA came from your own genes (miRNA) or from outside (siRNA), it ends up steering the same silencing machine.
      `
    },
    {
      id: 'grp5-mechanism',
      type: 'text' as const,
      content: `
### Mechanism — Degrade or Repress? It Depends on the Match

Once a guide RNA inside RISC finds a target mRNA, the *degree of base-pairing complementarity* determines the outcome:

- **Extensive / perfect complementarity** → Argonaute **cleaves** the mRNA, which is then degraded. The target is destroyed. (Typical of siRNAs.)
- **Partial complementarity** → RISC does not cut; instead it **blocks translation** and/or promotes mRNA destabilization, so the mRNA persists but is poorly translated. (Typical of many animal miRNAs binding the $3'$ UTR.)

Either way, the net effect is the **same direction**: **less protein** from the targeted gene. The two routes differ in *how* — destroying the message vs. silencing it — and in whether the mRNA disappears or merely goes quiet.

This makes RNAi a versatile dimmer switch. A single miRNA can have **many** target mRNAs (any transcript with a matching sequence), so one small RNA can coordinate the dampening of a whole set of genes — a counterpart to how one transcription factor regulates many genes.

> **Quantitative intuition (fold-change):** If a miRNA represses its target to one-fourth of normal, that is roughly a $4\\times$ drop, a fold-change of about $0.25$. Remove that miRNA and the target rebounds toward $1\\times$. RNAi outcomes are usually described as *relative* changes in protein/mRNA level, not absolute on/off.
      `
    },
    {
      id: 'grp5-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Predicting RNAi Outcomes
      `,
      exercise: {
        questions: [
          {
            question: 'A miRNA represses gene X by binding the 3\' UTR of X\'s mRNA. A mutation causes the cell to OVER-express this miRNA (much more than normal). What is the predicted effect on protein X?',
            options: [
              'Protein X increases, because more miRNA means more transcription of X',
              'Protein X decreases, because more miRNA-loaded RISC silences more of X\'s mRNA',
              'Protein X is unchanged, because miRNAs act only on DNA',
              'Protein X increases, because miRNAs stabilize their target mRNAs'
            ],
            correctAnswer: 1,
            explanation: 'A miRNA silences its target, so over-expressing it drives MORE silencing and LESS protein X. Option A inverts the logic and wrongly claims miRNA boosts transcription. Option C misplaces RNAi at the DNA level (it is post-transcriptional, acting on mRNA). Option D contradicts the repressive function — miRNAs destabilize or block their targets, they do not stabilize them.'
          },
          {
            question: 'Conversely, gene Y is normally kept partly repressed by a miRNA. A knockout removes that miRNA entirely. What happens to protein Y, and why?',
            options: [
              'Protein Y decreases, because the miRNA was needed for translation',
              'Protein Y increases, because removing the repressing miRNA relieves silencing of Y\'s mRNA',
              'Protein Y is unchanged, because the gene sequence is intact',
              'The Y gene is deleted along with the miRNA'
            ],
            correctAnswer: 1,
            explanation: 'Removing a repressor (here, the miRNA) de-represses its target, so protein Y rises. Option A reverses the relationship (the miRNA represses, it is not required for translation). Option C is a trap: an intact gene can still be repressed or de-repressed — sequence intactness does not fix expression level. Option D confuses removing a regulatory RNA with deleting the target gene.'
          },
          {
            question: 'An siRNA shows perfect complementarity to its target mRNA, whereas a particular miRNA shows only partial complementarity to its target. What is the expected difference in outcome?',
            options: [
              'The siRNA causes mRNA cleavage/degradation; the partially matched miRNA mainly blocks translation — but both reduce protein output',
              'The siRNA increases protein while the miRNA decreases it',
              'Only the miRNA reduces protein; the siRNA has no effect',
              'Both stop transcription of the gene in the nucleus'
            ],
            correctAnswer: 0,
            explanation: 'Degree of complementarity sets the route: perfect match (siRNA) → cleavage; partial match (miRNA) → translational repression — yet both lower protein. Option B wrongly has siRNA raising protein. Option C wrongly says siRNA does nothing. Option D is the post-transcriptional trap: RNAi acts on mRNA in the cytoplasm, not on transcription in the nucleus.'
          }
        ]
      }
    },
    {
      id: 'grp5-tool',
      type: 'text' as const,
      content: `
### RNAi as a Laboratory Tool — Targeted Knockdown

Because siRNAs silence whatever mRNA they match, researchers exploit RNAi to **knock down** a gene of interest on demand. The workflow:

1. Design a synthetic siRNA (or an expressed short-hairpin RNA) complementary to the target gene's mRNA.
2. Introduce it into cells. Dicer/RISC processing loads the guide strand into RISC.
3. RISC finds and silences the target mRNA, reducing the gene's protein output — without altering the genome.

This is a **loss-of-function** experiment: by lowering one protein and watching what changes, scientists infer that protein's normal role. Note the contrast with a true genetic knockout:

| | RNAi knockdown | Genetic knockout |
|---|---|---|
| Target | mRNA (post-transcriptional) | The gene itself (DNA) |
| Effect | Reduces protein (partial) | Eliminates the gene/protein |
| DNA sequence changed? | **No** | **Yes** |
| Reversibility | Often transient/tunable | Permanent |

Because RNAi leaves the DNA untouched and usually produces a *partial, dose-dependent* reduction, it is ideal for asking "what happens when there is *less* of protein X?" while keeping the gene intact.

> **Connecting the unit:** RNAi is a regulatory layer that *the cell itself uses* (miRNAs fine-tuning developmental genes) and that *scientists borrow* (siRNA knockdowns). In both cases the action is post-transcriptional — controlling the message after the gene has been read.
      `
    },
    {
      id: 'grp5-roles-context',
      type: 'text' as const,
      content: `
### miRNA in the Cell vs. siRNA in the Lab — and Where RNAi Fits

It helps to separate the **biological role** of each small RNA from its **experimental use**, because AP questions probe both.

**miRNA — an endogenous regulatory layer.** The genome encodes hundreds of miRNAs. Each fine-tunes its targets, and because a miRNA needs only partial complementarity, **one miRNA can dampen dozens of different mRNAs** that share a short matching seed sequence. This makes miRNAs powerful coordinators of programs such as development and the cell cycle — a single miRNA can lower the output of a whole functional group of genes at once, the post-transcriptional counterpart to a transcription factor that activates many genes.

**siRNA / RNAi as antiviral defense and as a tool.** siRNAs often originate from **double-stranded RNA**, a molecular signature of viral replication. Dicing that dsRNA into siRNAs and silencing the matching (viral) mRNAs is a built-in **antiviral defense** in many organisms. Researchers co-opt the same pathway by introducing synthetic dsRNA/siRNA to knock down *any* chosen gene.

**Placing RNAi among the regulatory levels (the whole unit on one axis):**

| Regulatory event | Acts on | Level |
|---|---|---|
| Repressor blocks operator (lac/trp) | DNA (operator) | Transcriptional |
| Activators + enhancers (eukaryotic) | DNA (enhancer) | Transcriptional |
| DNA methylation / histone marks | Chromatin | Transcriptional (epigenetic) |
| **miRNA / siRNA via RISC** | **mRNA** | **Post-transcriptional** |
| Translation-initiation control | mRNA / ribosome | Translational |
| Phosphorylation, ubiquitination | Protein | Post-translational |

RNAi occupies the **post-transcriptional** slot: the gene has been transcribed, the mRNA exists, and RNAi decides how much of it survives to be translated. That placement is exactly what distinguishes it from a repressor (which prevents the mRNA from being made) and from a phosphorylation event (which modifies a protein already made).

> **AP framing:** If a question says a treatment "lowered the protein but the mRNA was destroyed and the DNA was unchanged," that is **RNAi (post-transcriptional)** — not transcriptional repression and not mutation. The destroyed-mRNA-plus-intact-DNA signature is the giveaway.
      `
    },
    {
      id: 'grp5-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — RNAi Reasoning
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher introduces a synthetic siRNA targeting gene Z into cultured cells. A Northern blot later shows the level of gene Z\'s mRNA has dropped sharply, while sequencing of gene Z shows no change. What level of regulation has the researcher engineered, and what does the unchanged sequence tell you?',
            options: [
              'Transcriptional regulation; the siRNA mutated the promoter',
              'Post-transcriptional regulation; the siRNA directed cleavage/degradation of Z\'s mRNA without altering the DNA',
              'Translational regulation only; the mRNA level should not have changed',
              'Epigenetic regulation; the siRNA methylated the gene'
            ],
            correctAnswer: 1,
            explanation: 'siRNA with good complementarity triggers mRNA cleavage and degradation — post-transcriptional control — and the intact sequence confirms no mutation occurred. Option A wrongly claims a sequence change. Option C is inconsistent with the observed mRNA drop (pure translational control would leave mRNA level unchanged). Option D misattributes the effect to DNA methylation rather than mRNA targeting.'
          },
          {
            question: 'During normal development, a miRNA is needed to keep a certain "stem-cell" gene repressed so cells can differentiate. A mutation inactivates this miRNA. What is the most likely consequence?',
            options: [
              'The stem-cell gene is silenced even more strongly',
              'The stem-cell gene is over-expressed because its repressing miRNA is gone, which can interfere with normal differentiation',
              'The stem-cell gene\'s DNA sequence changes',
              'Transcription of all genes stops'
            ],
            correctAnswer: 1,
            explanation: 'Losing a repressing miRNA de-represses its target, so the stem-cell gene is over-expressed, potentially blocking differentiation. Option A inverts the effect (removing a repressor cannot increase repression). Option C confuses regulation with mutation of the target. Option D wildly overstates the scope — one miRNA loss does not halt all transcription.'
          }
        ]
      }
    }
  ]
};
