export const mcatMolBioPart4Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mb4-intro',
      type: 'text' as const,
      content: `# Molecular Biology for the MCAT

**Part 4 of 7 — Gene Regulation**

### Why Gene Regulation Matters

Every cell has the same DNA, but a neuron looks and acts nothing like a liver cell. **Differential gene expression** — not different genes — explains cell specialization. The MCAT tests regulation at every level.

### Prokaryotic Gene Regulation: The Operon Model

**Lac Operon** (inducible — normally OFF):
- Structural genes include lacZ (beta-galactosidase) and lacY (permease), transcribed together as one mRNA

<!-- yield:low -->
- The third structural gene is lacA (transacetylase).
<!-- /yield -->

- **Without lactose**: Repressor (lacI product) binds operator → blocks RNA Pol → genes OFF
- **With lactose**: Allolactose (isomer of lactose) binds repressor → conformational change → repressor falls off → genes ON
- **Dual control**: Low glucose → high cAMP → cAMP-CAP binds promoter → enhanced transcription
- **Maximum expression**: lactose present (repressor off) + glucose absent (cAMP-CAP active)

**Trp Operon** (repressible — normally ON):
- **Without tryptophan**: Repressor inactive → genes ON (cell makes tryptophan)
- **With tryptophan**: Trp acts as **corepressor** → binds repressor → activates it → repressor binds operator → genes OFF

<!-- yield:low -->
- Also regulated by **attenuation**: Secondary structures in mRNA leader sequence cause premature termination when trp is abundant
<!-- /yield -->

### Eukaryotic Gene Regulation — Five Levels

| Level | Mechanism | Effect | Example |
|-------|-----------|--------|---------|
| **Epigenetic** | DNA methylation, histone modification, chromatin remodeling | Long-term silencing or activation | X-inactivation, genomic imprinting |
| **Transcriptional** | Transcription factors, enhancers, silencers, Mediator | Turn genes on/off | Steroid hormone receptors |
| **Post-transcriptional** | Alternative splicing, mRNA stability, miRNA | Control which mRNAs are translated | Tissue-specific splice isoforms |
| **Translational** | mRNA availability, initiation factor regulation | Control rate of protein synthesis | Stored mRNAs translated on a signal |
| **Post-translational** | Phosphorylation, ubiquitination, proteolysis | Modify protein activity or target for degradation | p53 stabilization, cyclin degradation |

<!-- yield:low -->
- Named examples: miR-21, an miRNA overexpressed in many cancers; the iron-response element (IRE), an mRNA hairpin bound by iron-regulatory proteins (IRPs) that controls ferritin translation according to iron supply.
<!-- /yield -->

### Epigenetics — HIGH YIELD

| Modification | Effect on Transcription | Mechanism |
|-------------|------------------------|-----------|
| DNA methylation (CpG islands) | **Silencing** | Methyl groups block transcription factor binding |
| Histone acetylation | **Activation** | Neutralizes positive lysine charges → loosens DNA-histone interaction → euchromatin |
| Histone deacetylation | **Silencing** | Tightens chromatin → heterochromatin |
| Histone methylation | **Variable** | Activating or silencing depending on which residue is methylated |

<!-- yield:low -->
- Histone-methylation marks: H3K4me3 = activation; H3K27me3 = silencing.
<!-- /yield -->

**Key enzymes**: HATs (histone acetyltransferases) = activate. HDACs (histone deacetylases) = silence. HDAC inhibitors are used as cancer drugs.`
    },
    {
      id: 'mb4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Gene Regulation** 🎯`,
      exercise: {
        questions: [
          {
            question: `In the lac operon, the presence of glucose AND lactose results in:`,
            options: [`Low transcription, because low cAMP leaves CAP inactive`, `Maximum transcription, because allolactose removes the repressor`, `No transcription, because the repressor stays bound to the operator`, `High transcription, because glucose raises cAMP levels`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `With lactose: repressor removed (allolactose binds it). But with glucose present: cAMP is LOW → CAP inactive → promoter only weakly active. Maximum expression requires: (1) lactose present (repressor off) AND (2) glucose absent (cAMP high → CAP-cAMP activates promoter). Glucose is the preferred carbon source.`
          },
          {
            question: `A drug that inhibits histone deacetylases (HDACs) would most likely cause:`,
            options: [`Increased gene expression from more open, acetylated chromatin`, `Decreased gene expression from tighter chromatin packaging`, `Increased CpG methylation that silences nearby promoters`, `Decreased expression as histones gain positive charge`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `HDACs remove acetyl groups from histones → tighter chromatin → gene silencing. Inhibiting HDACs → histones stay acetylated → chromatin remains open (euchromatin) → increased transcription. HDAC inhibitors are used as epigenetic cancer therapies to reactivate silenced tumor suppressor genes.`
          },
          {
            question: `The trp operon differs from the lac operon in that it is:`,
            options: [`Repressible: normally ON, turned OFF when tryptophan builds up`, `Inducible: normally OFF, turned ON when tryptophan is present`, `Regulated only by CAP-cAMP activation, not by a repressor`, `Controlled by a repressor that is active without any corepressor`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Trp operon is repressible: normally ON because the cell needs to make tryptophan. When trp accumulates, it acts as a corepressor — binding the inactive repressor, activating it, which then binds the operator to shut off transcription. Lac operon is inducible: normally OFF, turned ON by allolactose.`
          }
        ]
      }
    },
    {
      id: 'mb4-deep',
      type: 'text' as const,
      content: `### microRNA (miRNA) and siRNA — Post-Transcriptional Silencing

- **miRNA**: Endogenous ~22 nt RNAs that bind complementary sequences in 3' UTR of target mRNAs
  - Partial complementarity → translational repression (mRNA not translated)
  - High complementarity → mRNA degradation
  - A protein-RNA silencing complex carries the small RNA to its target
- **siRNA**: Exogenous or synthetic small RNAs → same silencing pathway → mRNA degradation
- Both are mechanisms of **RNA interference (RNAi)** — a major research tool and potential therapy

<!-- yield:low -->
- The silencing complex is RISC (RNA-induced silencing complex).
<!-- /yield -->

### X-Inactivation (Barr Body)

- In females (XX), one X chromosome is randomly inactivated in each cell → **Barr body** (dense heterochromatin)
- Results in dosage compensation (males and females express ~same amount of X-linked genes)
- Random inactivation → mosaicism (e.g., calico cats, manifesting carriers of X-linked diseases)

<!-- yield:low -->
- **XIST RNA**: the long non-coding RNA that coats the inactive X and recruits silencing complexes.
<!-- /yield -->

### Genomic Imprinting

- Some genes are expressed from only ONE parental allele (the other is silenced by methylation)
- **Imprinting is parent-of-origin specific**: which allele is silent depends on whether it came from the mother or the father
- Deletion of the active allele → disease (even though the other allele is intact, it is silenced)
- The same chromosomal deletion can therefore cause DIFFERENT diseases depending on which parent passed it on: **Prader-Willi syndrome** when the deletion is paternal, **Angelman syndrome** when it is maternal (different imprinted genes lose their only active copy)

<!-- yield:low -->
- The deleted region is 15q11-13. Another named imprinted gene: IGF2 is expressed from the paternal allele only.
<!-- /yield -->

### Epigenetics and Cancer

- Cancer cells often show **global hypomethylation** (genome-wide) + **local hypermethylation** (at tumor suppressor promoters)
- Hypomethylation → genomic instability, oncogene activation
- Hypermethylation at CpG islands → tumor suppressor silencing

<!-- yield:low -->
- Promoter methylation commonly silences BRCA1 and p16 in tumors.
<!-- /yield -->`
    },
    {
      id: 'mb4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Advanced Regulation** 🎯`,
      exercise: {
        questions: [
          {
            question: `A female carrier of an X-linked recessive disorder shows mild symptoms in some tissues. This is best explained by:`,
            options: [`Random X-inactivation leaving only the mutant X active in some cells`, `Incomplete dominance of the mutant allele in every cell of the body`, `Both X chromosomes remaining active in all of her somatic cells`, `Inactivation of the mutant X in every cell during early development`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `X-inactivation is random in each cell. A female carrier has one normal and one mutant X. In cells where the normal X is inactivated (Barr body), only the mutant X is expressed → those cells show the disease phenotype. This mosaicism explains why some carriers have mild manifestations (manifesting carriers).`
          },
          {
            question: `Researchers find that a tumor suppressor gene has a normal DNA sequence but its promoter CpG island is heavily methylated. The gene is:`,
            options: [`Epigenetically silenced, with its DNA sequence left unchanged`, `Mutated in its coding sequence, producing a truncated protein`, `Overexpressed, since promoter methylation recruits activators`, `Silenced by deletion of the promoter region from the genome`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `This is epigenetic silencing: the DNA sequence is intact but methylation at the promoter prevents transcription factors from binding → gene is effectively "off." This is a common mechanism in cancer. Unlike mutations, epigenetic silencing is potentially reversible with demethylating drugs.`
          }
        ]
      }
    },
    {
      id: 'mb4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Lac operon: inducible (normally OFF); max expression = lactose ON + glucose OFF (high cAMP-CAP)
- Trp operon: repressible (normally ON); trp = corepressor that activates the repressor
- Eukaryotic regulation: epigenetic → transcriptional → post-transcriptional → translational → post-translational
- Epigenetics: DNA methylation = silencing; histone acetylation = activation; HDAC inhibitors = cancer therapy
- miRNA/siRNA: post-transcriptional silencing by RNA interference (RNAi)
- X-inactivation: random → Barr body → dosage compensation and mosaicism in females
- Genomic imprinting: parent-of-origin allele silencing — one deletion, different disease depending on the parent (Prader-Willi if paternal, Angelman if maternal)
- Cancer epigenetics: global hypomethylation + local hypermethylation at tumor suppressor promoters

<!-- yield:low -->
- Low-yield extras: lacA (transacetylase) is the third lac gene; trp attenuation via the mRNA leader; named examples miR-21 (cancer) and the iron-response element (IRE/IRP); histone marks H3K4me3 (active) and H3K27me3 (silent); RISC is the RNAi silencing complex; XIST RNA coats the inactive X; IGF2 is paternally expressed; the Prader-Willi/Angelman deletion lies at 15q11-13; BRCA1 and p16 promoter methylation in tumors
<!-- /yield -->`
    }
  ]
};
