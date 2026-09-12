export const mcatBiotechnologyPart3Data = {
  topicSlug: 'mcat-molecular-biology-biotechnology-mcat',
  sections: [
    {
      id: 'biot3-intro',
      type: 'text' as const,
      content: `# Biotechnology for the MCAT

**Part 3 of 4 — Manipulating Genes in Cells & Organisms**

### Turning Genes Off (and Down)

| Method | Level | Mechanism | Reversible? |
|--------|-------|-----------|-------------|
| **Knockout** | DNA | Delete/disrupt the gene (homologous recombination in ES cells, or CRISPR) | No — permanent, complete |
| **Knockdown (RNAi)** | RNA | siRNA/shRNA guides RISC to cleave or repress complementary mRNA | Yes — partial, transient |
| **Dominant negative** | Protein | Express a mutant that poisons the wild-type protein's complex | While expressed |
| **CRISPR interference / small-molecule inhibitor** | Transcription / activity | Block without altering sequence | Yes |

Interpretation rules: knockouts reveal what a gene is REQUIRED for (but beware developmental compensation and lethality); knockdown's residual expression can mask phenotypes; a knockout phenotype rescued by re-introducing the gene proves causality (the rescue is the control that eliminates off-target explanations).

### CRISPR-Cas9 — Programmable Cutting

- A **guide RNA** base-pairs with a chosen ~20 bp genomic sequence (adjacent to a PAM motif); **Cas9** makes a double-strand break there. Targeting is by RNA-DNA base pairing — reprogramming means changing a 20-nt RNA, not engineering a new protein (why CRISPR displaced zinc-finger nucleases).
- The CELL's repair choice determines the outcome (DNA replication lesson crossover): **NHEJ** = error-prone indels → frameshift knockout; **HDR with a supplied template** = precise edits/insertions (efficient mainly in dividing cells).
- Origin: a bacterial adaptive immune system storing phage sequence "mug shots" — recognize the endosymbiosis-style repurposing narrative.

### Transgenics, Knock-ins & Conditional Control

- **Transgenic** organism: foreign/extra DNA added (often random insertion; expression depends on the promoter you attach — a tissue-specific promoter confines expression to that tissue).
- **Knock-in**: precise replacement at the endogenous locus (keeps native regulation).
- **Cre-lox conditional knockout**: the target gene is flanked by loxP sites ("floxed"); **Cre recombinase** excises it — but ONLY in cells where Cre is expressed. Cre under a liver-specific promoter = gene deleted in liver alone. Solves embryonic lethality and isolates tissue-specific function; the exam loves asking WHY conditional systems are needed.
- **Reporter fusions**: GFP fused to a protein reports localization; a promoter driving GFP alone reports WHERE/WHEN the promoter is active — different constructs, different questions.

### Gene Therapy — Delivery Is the Hard Part

- Add a working gene copy (viral vectors: AAV — small capacity, low immunogenicity, largely non-integrating; retro/lentivirus — integrates into the genome = durable but **insertional mutagenesis risk**, the early SCID-trial leukemias).
- Ex vivo strategy: remove patient cells (e.g., hematopoietic stem cells), correct them in culture, verify, reinfuse — sickle cell and SCID successes; safer because correction is checked before return.
- Somatic editing affects the patient only; germline changes are heritable — the ethical bright line passages probe.`
    },
    {
      id: 'biot3-worked',
      type: 'text' as const,
      content: `### Worked Example — Designing the Right Perturbation

**Passage-style problem.** Gene Q is hypothesized to drive pathological cardiac hypertrophy in adult mice. Complication: Q-null embryos die at day 10 from failed heart tube formation.

**Question 1 — Why is a conventional knockout the wrong tool, and what replaces it?** The gene has an EARLIER essential function: constitutive deletion kills the embryo before adult hypertrophy can be studied — the lethality masks the phenotype of interest. Solution: **conditional knockout** — flox Q, and supply Cre under a cardiomyocyte-specific promoter that is additionally drug-inducible (tamoxifen-activated CreER), so deletion happens only in heart muscle AND only when the adult mouse is dosed. Space and time are separate switches; the design needs both.

**Question 2 — The team also tries siRNA against Q in cultured cardiomyocytes and sees only a 60% mRNA reduction with no phenotype. A colleague concludes Q is not involved. Critique.** Knockdown is not knockout: 40% residual protein may exceed the functional threshold, especially for catalytic proteins where a little enzyme suffices. Absence of phenotype under PARTIAL loss cannot exclude the hypothesis — only complete (conditional) deletion, or a dominant-negative, tests requirement cleanly.

**Question 3 — Conditional deletion in adult hearts prevents hypertrophy after pressure overload. What single further experiment most strengthens causality?** **Rescue**: re-express Q (knock-in or viral delivery) in the deleted hearts and show hypertrophy returns. Rescue excludes off-target Cre effects, floxing artifacts, and strain background — the perturbation-rescue pair is the causal gold standard, exactly parallel to reintroducing a cloned gene into a knockout line.

**Question 4 — To ask whether Q acts in cardiomyocytes themselves versus cardiac fibroblasts, what feature of the Cre system is decisive?** Promoter choice: Cre driven by a cardiomyocyte promoter deletes Q only there; a fibroblast-promoter Cre line deletes it only in fibroblasts. If hypertrophy persists in the first and disappears in the second, Q acts in fibroblasts (cell-non-autonomous). Tissue-specific promoters convert a molecular tool into a cell-biology scalpel — and this promoter-defines-place logic is identical for GFP reporters and transgenes.`
    },
    {
      id: 'biot3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Gene Manipulation** 🎯`,
      exercise: {
        questions: [
          {
            question: `CRISPR-Cas9 is retargeted to a new genomic site by:`,
            options: [`Evolving a new Cas9 protein with different DNA-binding domains`, `Changing the ~20-nucleotide guide RNA sequence to base-pair with the new target`, `Methylating the old target site`, `Using a different restriction enzyme`],
            correctAnswer: 1,
            explanation: `Specificity lives in the guide RNA's Watson-Crick pairing with the target (plus the adjacent PAM); Cas9 is a constant cutting chassis. Reprogramming is therefore an oligonucleotide-design problem — cheap and fast — where earlier tools (zinc fingers, TALENs) required engineering a new PROTEIN for every site. This protein-vs-RNA recognition distinction is the conceptual heart of every CRISPR question; restriction enzymes, with fixed recognition sites, cannot be retargeted at all.`
          },
          {
            question: `After Cas9 creates a double-strand break in a gene, researchers who want a precise point-mutation knock-in must supply a homologous repair template and use dividing cells, because:`,
            options: [`Cas9 itself writes the new sequence into the break`, `NHEJ requires a template to work`, `Precise editing uses homology-directed repair, which needs a template and is active mainly in S/G2 — otherwise error-prone NHEJ dominates and produces random indels`, `Non-dividing cells lack DNA entirely`],
            correctAnswer: 2,
            explanation: `Cas9 only cuts; the CELL repairs, and the repair pathway decides the product. NHEJ — templateless, active all cycle — glues ends with occasional indels (great for knockouts, useless for precision). HDR copies a provided donor template but essentially requires S/G2, when its machinery and (normally) a sister chromatid are available. This is the DNA-repair lesson operating as an engineering constraint: to control the edit, you must bias the pathway competition.`
          },
          {
            question: `A gene is essential for embryonic development, but its function in adult liver is unknown. The most appropriate strategy is:`,
            options: [`A conditional knockout — loxP-flanked gene plus Cre recombinase expressed from a liver-specific (ideally inducible) promoter`, `A conventional whole-body knockout`, `Overexpressing the gene in all tissues`, `A transgenic mouse carrying a second copy of the gene`],
            correctAnswer: 0,
            explanation: `Constitutive deletion never yields an adult: the embryonic requirement kills first, hiding all later functions — the standard motivation for conditional systems. Floxing the gene and restricting Cre expression by promoter (liver) and timing (drug-inducible CreER) deletes the gene only where and when you choose. The generalizable exam skill: when a phenotype of interest is downstream of an earlier lethality, look for the answer that separates deletion in SPACE and TIME from deletion per se.`
          },
          {
            question: `In early gene-therapy trials using retroviral vectors, some treated SCID patients later developed leukemia. The mechanistic basis of this adverse outcome was:`,
            options: [`The therapeutic gene product was directly oncogenic`, `Patients rejected the vector immunologically`, `The corrected T cells could not proliferate`, `Retroviral integration into the genome near a proto-oncogene activated it — insertional mutagenesis`],
            correctAnswer: 3,
            explanation: `Integration is a double-edged sword: it makes correction permanent in dividing cells, but the insertion site is poorly controlled, and a strong viral promoter/enhancer landing beside a proto-oncogene (LMO2 in the actual trials) can drive it — a somatic gain-of-function event, connecting to the cancer framework of the cell-cycle lesson. Non-integrating vectors like AAV trade durability for this safety; expect questions weighing that exact trade-off. The therapy worked — cells proliferated all too well.`
          },
          {
            question: `A mouse line expresses GFP under the control of gene X's promoter (promoter-GFP, no X coding sequence). Green fluorescence appears only in kidney tubules. This experiment demonstrates:`,
            options: [`That protein X localizes to the tubule cell membrane`, `Where and when gene X's promoter is transcriptionally active — kidney tubules — but nothing about protein X's localization or function`, `That GFP is required for kidney development`, `That gene X has been knocked out in all other tissues`],
            correctAnswer: 1,
            explanation: `Construct anatomy determines the claim: promoter-GFP borrows only X's regulatory switch, so fluorescence maps promoter ACTIVITY (which cells transcribe X). To ask where protein X GOES, you need a FUSION of GFP to X's coding sequence — a different construct whose fluorescence follows the protein (its subcellular address, its trafficking). Confusing the two constructs is the designed trap whenever GFP appears in a passage; neither reports function, and no endogenous gene was altered.`
          }
        ]
      }
    },
    {
      id: 'biot3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Perturbation hierarchy: knockout = permanent DNA-level absence (requirement); knockdown (RNAi) = partial, reversible RNA-level reduction — residual protein can hide phenotypes; dominant negative poisons at the protein level
- CRISPR: guide RNA base-pairing (not protein engineering) targets Cas9's cut; the cell's repair choice sets the outcome — NHEJ indels = knockout, HDR + template (S/G2, dividing cells) = precise knock-in
- Conditional (Cre-lox) systems separate deletion in space (tissue-specific promoter) and time (inducible CreER) — the answer whenever early lethality masks a later function
- Promoter-GFP reports where a promoter fires; GFP-protein fusions report where the protein goes — match construct to claim
- Rescue experiments (re-express the gene, phenotype reverts) are the causality gold standard against off-target effects
- Gene therapy: integrating vectors (retro/lenti) = durable + insertional mutagenesis risk (SCID leukemias, proto-oncogene activation); AAV = safer, non-integrating, small capacity; ex vivo correction allows verification before reinfusion
- Somatic editing stays with the patient; germline edits are heritable — the ethical boundary passages test`
    }
  ]
};
