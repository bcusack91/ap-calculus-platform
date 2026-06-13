export const bioGeneRegPart7Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'grp7-intro',
      type: 'text' as const,
      content: `
## AP Review — Gene Regulation Synthesis

**Part 7 of 7**

You now have the full toolkit: levels of control (Part 1), prokaryotic operons (Part 2), eukaryotic chromatin and combinatorial control (Part 3), epigenetics (Part 4), RNA interference (Part 5), and operon-mutant genetics (Part 6). This part stitches them into the few **load-bearing ideas** the AP exam tests over and over, then drills the application reasoning.

**The unifying thesis:** All cells of an organism share one genome; **differential gene expression** — regulating *which* genes are on and *how much* — produces cell types, responses to the environment, and development. Regulation can act at **any step** from DNA to functional protein, and the cell chooses the step that fits the job.

| Where the exam usually tests it | Core mechanism | Direction of effect |
|---|---|---|
| Prokaryotic, catabolic | *lac* operon: inducible; LacI repressor (−) + CAP-cAMP (+) | Lactose ON; glucose holds it down |
| Prokaryotic, anabolic | *trp* operon: repressible; Trp corepressor | Tryptophan turns it OFF |
| Eukaryotic transcription | Enhancers + combinatorial TFs; chromatin state | Right TF combination → ON |
| Heritable, no sequence change | Epigenetics: methylation, histone marks | Methylation/HDAC → OFF; acetylation → ON |
| Post-transcriptional | RNAi: miRNA/siRNA via Dicer → RISC | Less protein from target |
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

6. **RNAi acts POST-TRANSCRIPTIONALLY.** miRNAs/siRNAs target **mRNA** (cleavage or translational repression) in the cytoplasm; they do not change DNA and (canonically) do not block transcription. More repressing miRNA → less protein; remove it → more protein.

7. **Cis vs. trans.** A *cis* defect (operator $O^c$, promoter $P^-$) affects **only the operon on its own DNA molecule** and cannot be rescued in trans. A *trans* defect (repressor $I^-$, $I^s$) involves a **diffusible protein** that affects **all** target operons in the cell.

> **Exam tactic:** When two answers look plausible, pick the one that names a **specific mechanism** *and* states the **direction** of the effect (on vs. off, more vs. less protein). Vague "it regulates the gene" answers are usually distractors.
      `
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
| mRNA level changes (e.g., on a Northern blot) | Transcriptional OR mRNA-stability control |
| mRNA level unchanged but protein changes | Translational or post-translational control |
| Protein present but inactive until a signal | Post-translational (e.g., phosphorylation) |
| Heritable expression change, sequence intact | Epigenetic |
| mRNA destroyed after a small RNA is introduced | Post-transcriptional (RNAi) |

**Template B — "What does the mutant predict?" Walk the cis/trans checklist** (from Part 6): Is the repressor functional and inducible? Can it reach *this* operator (only if $O^+$)? Is the promoter intact and the reporter gene functional? In a partial diploid, remember a good **trans** product (repressor) rescues both operons, while a **cis** defect (operator/promoter) is confined to its own molecule.

**Putting them together — a model answer shape:** *"Because [signal] acts on [specific molecule], the cell regulates [gene] at the [level] step; therefore I predict [more/less] [mRNA/protein], which the data confirm by [assay result]."* Naming the molecule, the level, and the direction is what earns the points.

> **Synthesis:** Prokaryotes and eukaryotes share the *logic* — read a signal, set gene output — but differ in *architecture* (operons + coupled transcription/translation vs. chromatin + combinatorial TFs + RNA processing + RNAi + epigenetics). Master the cis/trans and inducible/repressible distinctions, keep the "no sequence change" and "post-transcriptional" flags handy, and the unit's questions become predictable.
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
| Extra layer | CAP-cAMP positive control | Attenuation |

**2. Negative vs. positive control (within lac)**

| | Negative control | Positive control |
|---|---|---|
| Regulatory protein | LacI **repressor** | CAP **activator** |
| Default action | Blocks transcription | Enables transcription |
| Signal | Allolactose removes repressor | cAMP (high when glucose low) enables CAP |
| "Glucose effect" | — | High glucose → low cAMP → CAP off → low output |

**3. cis vs. trans (operon mutants)**

| | cis ($O^c$, $P^-$) | trans ($I^-$, $I^s$) |
|---|---|---|
| Nature | DNA sequence | Diffusible protein |
| Affects | Only its own operon | All operons in the cell |
| Rescued in partial diploid? | **No** (cis-acting) | $I^-$ yes (recessive); $I^s$ no (dominant) |

**4. Epigenetic vs. genetic change**

| | Epigenetic | Genetic |
|---|---|---|
| DNA sequence changed? | **No** | **Yes** |
| Mechanism | Methylation, histone marks | Base substitution/indel |
| Heritable through mitosis? | Yes | Yes |
| Reversible? | Often | Generally no |

**5. miRNA/siRNA (RNAi) vs. a transcriptional repressor**

| | RNAi (miRNA/siRNA) | Transcriptional repressor |
|---|---|---|
| Acts on | **mRNA** (post-transcriptional) | **DNA** (operator/silencer) |
| Effect | Degrades or blocks translation of existing mRNA | Prevents mRNA from being made |
| Net result | Less protein | Less protein |

> **Last word:** Almost every gene-regulation question reduces to placing a mechanism in one of these grids and stating the **direction** of its effect. If you can fill these five tables from memory, you can reason through the unit's traps cold.
      `
    },
    {
      id: 'grp7-quiz1',
      type: 'multiple-choice' as const,
      content: `
### AP-Style Application — Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'AP-style mutant prediction: An E. coli strain has the partial-diploid genotype I⁻ Oᶜ Z⁺ / I⁺ O⁺ Z⁻. Will functional β-galactosidase be produced in the ABSENCE of inducer?',
            options: [
              'No — without inducer the operon cannot be expressed',
              'Yes — the Z⁺ gene sits on the Oᶜ (operator-constitutive) operon, which is transcribed regardless of inducer or repressor, so functional enzyme is made constitutively',
              'No — the I⁺ on the plasmid makes a repressor that shuts off both operons',
              'Yes — but only because inducer is secretly present'
            ],
            correctAnswer: 1,
            explanation: 'The functional Z⁺ is linked to Oᶜ, a cis-acting operator that the repressor cannot bind, so that operon is constitutive and makes β-gal even without inducer. Option C is the key trap: although I⁺ makes a good repressor, a cis-acting Oᶜ cannot be rescued in trans, so the repressor cannot silence the Oᶜ Z⁺ operon. Option A ignores constitutivity, and option D invents an inducer not in the problem.'
          },
          {
            question: 'A eukaryotic gene becomes heritably silenced in a cell lineage. Researchers find heavy DNA methylation of its promoter CpG island and deacetylated histones, but no change in its nucleotide sequence. Which statement is correct?',
            options: [
              'This is a mutation, because the gene is now nonfunctional',
              'This is epigenetic silencing — methylation and histone deacetylation repress the gene and are inherited through mitosis without altering the DNA sequence',
              'This is operon repression by a corepressor',
              'This is RNA interference acting on the gene\'s DNA'
            ],
            correctAnswer: 1,
            explanation: 'Heritable silencing with promoter methylation, deacetylated histones, and an intact sequence is the definition of epigenetic repression. Option A is the central trap — epigenetic changes are not mutations (no sequence change). Option C imports the prokaryotic trp operon, which does not apply to a eukaryotic gene. Option D misplaces RNAi: RNAi acts on mRNA post-transcriptionally, not on the gene\'s DNA.'
          },
          {
            question: 'Wild-type E. coli is shifted from glucose-only medium to medium with lactose but no glucose. Which sequence of events best explains the resulting strong induction of the lac operon?',
            options: [
              'Glucose loss raises cAMP, so CAP-cAMP binds and recruits RNA polymerase; meanwhile allolactose from lactose removes the LacI repressor — both switches now favor ON, giving HIGH transcription',
              'Lactose lowers cAMP, freeing CAP to repress the operon',
              'Loss of glucose causes the repressor to fall off the operator directly',
              'The operon was already maximally expressed on glucose alone'
            ],
            correctAnswer: 0,
            explanation: 'Removing glucose raises cAMP (positive switch: CAP-cAMP recruits polymerase) while lactose-derived allolactose releases LacI (negative switch off) — both conditions for HIGH expression are met. Option B inverts the cAMP relationship and miscasts CAP as a repressor. Option C wrongly couples glucose to the repressor (glucose acts via cAMP/CAP, lactose acts via the repressor). Option D is false: with glucose present, catabolite repression held the operon low.'
          }
        ]
      }
    }
  ]
};
