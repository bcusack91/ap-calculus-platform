export const bioGeneRegPart7Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'grp7-intro',
      type: 'text' as const,
      content: `
## AP Review — Gene Regulation Synthesis

**Part 7 of 7**

You now have the full toolkit: levels of control (Part 1), prokaryotic operons (Part 2), eukaryotic chromatin and combinatorial control (Part 3), epigenetics (Part 4), small regulatory RNAs (Part 5), and operon mutants (Part 6). This part stitches them into the few **load-bearing ideas** the AP exam tests over and over, then drills the application reasoning.

**The unifying thesis:** All cells of an organism share one genome; **differential gene expression** — regulating *which* genes are on and *how much* — produces cell types, responses to the environment, and development. Regulation can act at **any step** from DNA to functional protein, and the cell chooses the step that fits the job.

| Where the exam usually tests it | Core mechanism | Direction of effect |
|---|---|---|
| Prokaryotic, catabolic | *lac* operon: inducible; LacI repressor (−) + CAP-cAMP (+) | Lactose ON; glucose holds it down |
| Prokaryotic, anabolic | *trp* operon: repressible; Trp corepressor | Tryptophan turns it OFF |
| Eukaryotic transcription | Enhancers + combinatorial TFs; chromatin state | Right TF combination → ON |
| Heritable, no sequence change | Epigenetics: methylation, histone marks | Methylation/deacetylation → OFF; acetylation → ON |
| Post-transcriptional | Small regulatory RNAs (miRNA/siRNA) pair with mRNA | Less protein from target |
      `
    },
    {
      id: 'grp7-traps',
      type: 'text' as const,
      content: `
### The High-Yield AP Traps (Memorize These)

Most missed gene-regulation questions come from a handful of predictable confusions. Pre-load the corrections:

1. **Operons are PROKARYOTIC.** Eukaryotic genes are regulated individually and coordinated by *shared transcription factors*, not bundled into operons. Any "eukaryotic operon" in a stem is a red flag.

2. **Repressible ≠ inducible.**
   - *Inducible* (lac): default **OFF**, a substrate-derived **inducer** turns it **ON** by removing the repressor.
   - *Repressible* (trp): default **ON**, an end-product **corepressor** turns it **OFF** by activating the repressor.

3. **CAP is POSITIVE control.** Catabolite repression sounds negative, but CAP is an **activator**; "repression" by glucose works by *lowering cAMP and withdrawing the CAP activator*, not by adding a repressor. **Glucose LOWERS cAMP** (high glucose → low cAMP → no CAP binding).

4. **Full lac expression needs BOTH switches.** Lactose present (repressor off) **and** glucose absent (CAP-cAMP on). Lactose alone with glucose present gives only LOW output.

5. **Epigenetic changes do NOT alter the DNA sequence.** Methylation, histone modification, and chromatin remodeling change *how genes are read*, are heritable through mitosis, yet leave the nucleotide sequence intact. Do not call them mutations.

6. **Small RNAs act POST-TRANSCRIPTIONALLY.** miRNAs/siRNAs pair with **mRNA** (leading to its breakdown or blocking its translation) in the cytoplasm; they do not change DNA and do not block transcription. More repressing miRNA → less protein; remove it → more protein.

7. **Regulatory sequence vs. regulatory protein.** A broken **regulatory sequence** (operator, promoter) affects only the gene it is attached to, and supplying more regulatory protein cannot fix it. A broken **regulatory protein** (such as the repressor) can be replaced by a working copy made from a gene elsewhere in the cell, because the protein diffuses.

> **Exam tactic:** When two answers look plausible, pick the one that names a **specific mechanism** *and* states the **direction** of the effect (on vs. off, more vs. less protein). Vague "it regulates the gene" answers are usually distractors.
      `
    },
    {
      id: 'grp7-quiz1',
      type: 'multiple-choice' as const,
      content: `
### AP-Style Application — Set 1
      `,
      exercise: {
        questions: [
          {
            question: 'A eukaryotic gene becomes heritably silenced in a cell lineage. Researchers find heavy DNA methylation of its promoter and deacetylated histones, but no change in its nucleotide sequence. Which statement is correct?',
            options: [
              'This is a mutation, because the gene is now permanently nonfunctional',
              'This is epigenetic control, passed on through mitosis with intact DNA',
              'This is operon repression by a corepressor, as in the trp operon',
              'This is RNA interference acting directly on the gene\'s DNA'
            ],
            correctAnswer: 1,
            explanation: 'Heritable silencing with promoter methylation, deacetylated histones, and an intact sequence is the definition of epigenetic repression. The mutation option is the central trap — epigenetic changes are not mutations (no sequence change). The corepressor option imports the prokaryotic trp operon, which does not apply to a eukaryotic gene. The RNA-interference option misplaces RNAi: RNAi acts on mRNA post-transcriptionally, not on the gene\'s DNA.'
          },
          {
            question: 'Wild-type E. coli is shifted from glucose-only medium to medium with lactose but no glucose. Which sequence of events best explains the resulting strong induction of the lac operon?',
            options: [
              'cAMP rises so CAP-cAMP recruits polymerase, and allolactose removes LacI',
              'Lactose lowers cAMP, which frees CAP to bind and repress the operon',
              'Loss of glucose causes the repressor to fall off the operator directly',
              'The operon was already maximally expressed on glucose, so nothing changes'
            ],
            correctAnswer: 0,
            explanation: 'Removing glucose raises cAMP (positive switch: CAP-cAMP recruits polymerase) while lactose-derived allolactose releases LacI (negative switch off) — both conditions for HIGH expression are met. The "lactose lowers cAMP" option inverts the cAMP relationship and miscasts CAP as a repressor. The "repressor falls off when glucose is lost" option wrongly couples glucose to the repressor (glucose acts via cAMP/CAP, lactose acts via the repressor). The "already maximally expressed" option is false: with glucose present, catabolite repression held the operon low.'
          }
        ]
      }
    },
    {
      id: 'grp7-experiment',
      type: 'text' as const,
      content: `
### Reading Experiments — The Skill the FRQs Reward

AP free-response and data questions almost always hand you an experiment and ask *which level of regulation* is involved or *what a mutant predicts*. Two reasoning templates carry most of the load.

**Template A — "Which level?" Use the assay to localize the control point:**

| Observation | Inference about the control level |
|---|---|
| Measured mRNA level changes | Transcriptional OR mRNA-stability control |
| mRNA level unchanged but protein changes | Translational or post-translational control |
| Protein present but inactive until a signal | Post-translational (e.g., phosphorylation) |
| Heritable expression change, sequence intact | Epigenetic |
| mRNA destroyed after a small RNA is introduced | Post-transcriptional (small regulatory RNA) |

**Template B — "What does the mutant predict?" Walk the checklist** (from Part 6): Is the repressor made, and can it both bind the operator and respond to its signal? Can it reach the operator (is the operator intact)? Is the promoter intact, and can CAP-cAMP boost it? Is the enzyme gene itself functional? Remember that a working repressor supplied from elsewhere (for example, on a plasmid) can replace a missing one, but cannot fix a damaged operator.

**Putting them together — a model answer shape:** *"Because [signal] acts on [specific molecule], the cell regulates [gene] at the [level] step; therefore I predict [more/less] [mRNA/protein], which the data confirm by [assay result]."* Naming the molecule, the level, and the direction is what earns the points.

> **Synthesis:** Prokaryotes and eukaryotes share the *logic* — read a signal, set gene output — but differ in *architecture* (operons + coupled transcription/translation vs. chromatin + combinatorial TFs + RNA processing + small RNAs + epigenetics). Master the regulatory-sequence vs. regulatory-protein and inducible/repressible distinctions, keep the "no sequence change" and "post-transcriptional" flags handy, and the unit's questions become predictable.
      `
    },
    {
      id: 'grp7-compare-tables',
      type: 'text' as const,
      content: `
### Rapid-Fire Compare-and-Contrast (Exam Cram)

The exam loves to juxtapose two things that students blur together. Run these side-by-sides until each distinction is automatic.

**1. lac vs. trp operon**

| | lac | trp |
|---|---|---|
| Inducible or repressible? | **Inducible** (default OFF) | **Repressible** (default ON) |
| Pathway | Catabolic (digest lactose) | Anabolic (build tryptophan) |
| Signal molecule | Inducer (allolactose) | Corepressor (tryptophan) |
| Signal's effect on repressor | **Inactivates** it (falls off operator) | **Activates** it (binds operator) |
| Extra layer | CAP-cAMP positive control | None needed: the end product shuts it off |

**2. Negative vs. positive control (within lac)**

| | Negative control | Positive control |
|---|---|---|
| Regulatory protein | LacI **repressor** | CAP **activator** |
| Default action | Blocks transcription | Enables transcription |
| Signal | Allolactose removes repressor | cAMP (high when glucose low) enables CAP |
| "Glucose effect" | — | High glucose → low cAMP → CAP off → low output |

**3. Regulatory sequence vs. regulatory protein (operon mutants)**

| | Regulatory sequence (operator, promoter) | Regulatory protein (repressor) |
|---|---|---|
| Nature | DNA sequence next to the genes | Diffusible protein made from its own gene |
| Broken operator / missing repressor | Constitutive: repressor cannot bind | Constitutive: no repressor to bind |
| Broken promoter / repressor that cannot release | Always OFF | Always OFF |
| Fixed by a working repressor gene on a plasmid? | **No** | **Yes**, if the repressor was missing |

**4. Epigenetic vs. genetic change**

| | Epigenetic | Genetic |
|---|---|---|
| DNA sequence changed? | **No** | **Yes** |
| Mechanism | Methylation, histone marks | Base substitution/indel |
| Heritable through mitosis? | Yes | Yes |
| Reversible? | Often | Generally no |

**5. Small regulatory RNA (miRNA/siRNA) vs. a transcriptional repressor**

| | Small RNA (miRNA/siRNA) | Transcriptional repressor |
|---|---|---|
| Acts on | **mRNA** (post-transcriptional) | **DNA** (operator/silencer) |
| Effect | Degrades or blocks translation of existing mRNA | Prevents mRNA from being made |
| Net result | Less protein | Less protein |

> **Last word:** Almost every gene-regulation question reduces to placing a mechanism in one of these grids and stating the **direction** of its effect. If you can fill these five tables from memory, you can reason through the unit's traps cold.
      `
    },
    {
      id: 'grp7-quiz2',
      type: 'multiple-choice' as const,
      content: `
### AP-Style Application — Set 2
      `,
      exercise: {
        questions: [
          {
            question: 'An E. coli strain makes the lactose-digesting enzyme at a high level in every medium, with or without lactose. Adding a plasmid that carries a normal repressor gene does NOT change this. Which part of the lac operon is most likely defective?',
            options: [
              'The repressor gene, which no longer makes a protein',
              'The operator, which the repressor can no longer bind',
              'The promoter, which RNA polymerase can no longer bind',
              'The CAP site, which CAP-cAMP can no longer bind'
            ],
            correctAnswer: 1,
            explanation: 'Constant high expression means the "off" switch has failed. A missing repressor would be replaced by the repressor made from the plasmid, so the defect must be in the operator: a regulatory DNA sequence that extra repressor protein cannot fix. A broken promoter would prevent expression entirely, and a CAP-site defect would lower expression rather than make it constitutive.'
          },
          {
            question: 'Cells are treated with molecule M. Afterward, the mRNA of gene G falls sharply, the rate of G transcription is unchanged, and the sequence of gene G is unchanged. Molecule M is most likely:',
            options: [
              'A repressor protein that binds G\'s promoter and blocks polymerase',
              'A small RNA that pairs with G\'s mRNA and leads to its breakdown',
              'A chemical that adds methyl groups to the promoter of gene G',
              'A mutagen that introduces a premature stop codon into gene G'
            ],
            correctAnswer: 1,
            explanation: 'Transcription is normal but the mRNA disappears, so the control acts after transcription: a small regulatory RNA pairing with the mRNA fits. A repressor or promoter methylation would lower the transcription rate, and a mutagen would change the gene\'s sequence, which did not happen.'
          }
        ]
      }
    }
  ]
};
