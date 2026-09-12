export const mcatCellCyclePart3Data = {
  topicSlug: 'mcat-cell-biology-cell-cycle-mcat',
  sections: [
    {
      id: 'cc3-intro',
      type: 'text' as const,
      content: `# The Cell Cycle for the MCAT

**Part 3 of 4 — p53, Apoptosis & Cancer**

### p53 — Guardian of the Genome

**p53** is a transcription factor kept scarce in healthy cells: the E3 ubiquitin ligase **MDM2** continuously tags it for proteasomal destruction. DNA damage (via ATM/ATR kinases) phosphorylates p53, blocking MDM2 binding — p53 **stabilizes and accumulates** (regulation by degradation, not synthesis).

Accumulated p53 transcribes a triage program:

| Target | Outcome |
|--------|---------|
| **p21** | CDK inhibition → G$_1$ arrest (pause to repair) |
| DNA repair genes | Fix the damage |
| **PUMA, BAX** | If damage is irreparable → apoptosis |
| MDM2 itself | Negative feedback — the alarm resets once damage clears |

- **TP53 is mutated in over half of human cancers** — the single most commonly mutated cancer gene
- **Li-Fraumeni syndrome**: inherited one bad TP53 allele → early cancers of many tissues (the second allele is lost somatically)

### Apoptosis — Ordered Self-Destruction

Apoptosis is ATP-dependent, non-inflammatory, and executed by **caspases** (cysteine proteases cleaving after aspartate, made as inactive zymogens):

**Intrinsic (mitochondrial) pathway** — the cell-cycle-relevant one:
1. Stress/damage shifts the balance of **Bcl-2 family** proteins: pro-apoptotic **BAX/BAK** overcome anti-apoptotic **Bcl-2/Bcl-xL**
2. BAX/BAK permeabilize the outer mitochondrial membrane → **cytochrome c** escapes to the cytosol
3. Cytochrome c + Apaf-1 assemble the **apoptosome**, activating initiator **caspase-9**
4. Caspase-9 activates executioner **caspases-3/7** → controlled demolition

**Extrinsic (death receptor) pathway**: Fas ligand or TNF binds surface death receptors → initiator **caspase-8** → executioners. Used by cytotoxic T cells and immune homeostasis.

**Morphology (vs. necrosis)**: cell shrinkage, chromatin condensation, DNA laddering (internucleosomal cleavage), membrane blebbing, **phosphatidylserine flipped to the outer leaflet** ("eat me"), packaging into apoptotic bodies eaten by macrophages — no lysis, no inflammation. **Necrosis** = swelling, rupture, contents spill, inflammation.

### The Two-Gene-Class Logic of Cancer

| | Oncogene (from proto-oncogene) | Tumor suppressor |
|--|-------------------------------|------------------|
| Mutation type | Gain of function | Loss of function |
| Alleles needed | One (dominant at cell level) | Both (recessive at cell level; "two hits") |
| Analogy | Stuck accelerator | Cut brake line |
| Examples | RAS, MYC, HER2, BCR-ABL, cyclin D | RB, TP53, p16, PTEN, APC, BRCA1/2 |

**Knudson's two-hit insight**: hereditary retinoblastoma (one RB hit inherited, one somatic) is early and bilateral; sporadic (two somatic hits in one cell) is late and unilateral. Statistics of hits, not different genes.`
    },
    {
      id: 'cc3-quiz1',
      type: 'multiple-choice' as const,
      content: `**p53 & Apoptosis** 🎯`,
      exercise: {
        questions: [
          {
            question: `In unstressed cells p53 protein is nearly undetectable, yet within an hour of irradiation it is abundant — without any increase in TP53 mRNA. The mechanism is:`,
            options: [`Damage signaling blocks MDM2-mediated ubiquitination, so existing p53 escapes proteasomal degradation and accumulates`, `Radiation directly activates TP53 transcription`, `p53 is imported from neighboring cells`, `Radiation inhibits all protein synthesis except p53`],
            correctAnswer: 0,
            explanation: `p53 is constitutively made and constitutively destroyed; its steady-state level is set by MDM2-driven turnover. ATM/ATR phosphorylation of p53 (and MDM2) breaks the interaction, so half-life jumps from minutes to hours with no transcriptional change. Regulation-by-stabilization is faster than transcription — appropriate for an emergency responder — and the constant mRNA with rising protein is the passage giveaway.`
          },
          {
            question: `A lymphoma overexpresses Bcl-2 due to a chromosomal translocation. These tumor cells resist chemotherapy primarily because:`,
            options: [`Excess Bcl-2 prevents BAX/BAK-mediated mitochondrial permeabilization, blocking cytochrome c release and apoptosome formation`, `Bcl-2 pumps chemotherapy drugs out of the cell`, `Bcl-2 repairs DNA damage directly`, `Bcl-2 accelerates the cell cycle past checkpoints`],
            correctAnswer: 0,
            explanation: `Most chemotherapies kill by damaging cells badly enough that the intrinsic apoptotic pathway executes them. Bcl-2 guards the mitochondrial outer membrane; overexpression raises the threshold for BAX/BAK pore formation, so cytochrome c stays inside and caspase-9 is never activated — damaged cells survive. This is follicular lymphoma's t(14;18) lesion: an oncogene that works by blocking death rather than driving proliferation.`
          },
          {
            question: `A child develops bilateral retinoblastoma at age one; an unrelated adult develops a single unilateral tumor at 25. Knudson's two-hit model explains the difference because the child:`,
            options: [`Inherited one mutant RB allele in every cell, so a single somatic hit in any retinal cell suffices — making tumors earlier and multiple`, `Was exposed to more radiation`, `Carries an activated oncogene that is dominant`, `Has defective apoptosis in all tissues`],
            correctAnswer: 0,
            explanation: `RB is a tumor suppressor: both alleles must be lost. In hereditary cases every retinoblast starts one hit deep, and with millions of target cells, several will independently take the second hit — early, bilateral, often multifocal tumors. Sporadic disease needs two rare hits in the SAME cell: later onset, single tumor. The kinetics of tumor appearance were Knudson's actual data — a statistics argument establishing a molecular mechanism.`
          }
        ]
      }
    },
    {
      id: 'cc3-deep',
      type: 'text' as const,
      content: `### Hallmarks of the Transformed Cell (Culture Signatures)

| Normal cell in culture | Cancer cell in culture |
|------------------------|------------------------|
| Divides only with serum growth factors | Reduced/absent growth-factor requirement (autocrine loops, constitutive pathways) |
| **Contact inhibition** — stops at confluent monolayer | Piles into foci (multilayered clumps) |
| **Anchorage dependence** — must attach to divide | Grows in soft agar suspension |
| Senesces after ~50 divisions (**Hayflick limit**) | Immortal — usually by reactivating **telomerase** |
| Intact checkpoints | Checkpoint loss → genomic instability, aneuploidy |

> Soft-agar colony formation is the standard in-vitro transformation assay — expect it in passages testing whether a manipulated gene is oncogenic.

### Senescence — The Third Fate

Besides cycling and apoptosis, damaged or telomere-exhausted cells can enter **senescence**: permanent G$_1$ exit enforced by p16/Rb and p53/p21, cells remain metabolically alive. Senescence is a tumor-suppressive barrier (oncogene-induced senescence explains why benign moles with BRAF mutations stop growing).

### Metastasis in One Paragraph

Invasion requires loss of **E-cadherin** (epithelial cell-cell adhesion) — part of the epithelial-to-mesenchymal transition (EMT) — then basement-membrane degradation (matrix metalloproteinases), intravasation, survival in circulation, extravasation, and colonization. Tumors also secrete **VEGF** to recruit blood vessels (angiogenesis); without new vessels a tumor stalls at ~1-2 mm (diffusion limit).

### Therapy Logic Preview

- Traditional chemo (spindle poisons, antimetabolites, alkylators) targets **proliferation itself** → toxic to gut/marrow/hair
- Targeted agents exploit specific lesions: imatinib (BCR-ABL), trastuzumab (HER2), CDK4/6 inhibitors (palbociclib — only useful when Rb is intact, a beautiful pathway-logic question)
- **Synthetic lethality**: PARP inhibitors kill BRCA-mutant cells because losing BOTH single-strand repair (drug) and homologous recombination (mutation) is lethal, while normal cells retain one route`
    },
    {
      id: 'cc3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Cancer Logic** 🎯`,
      exercise: {
        questions: [
          {
            question: `CDK4/6 inhibitors benefit breast cancers with cyclin D overexpression but fail entirely in tumors that have deleted the RB gene. The reason for the failure is that:`,
            options: [`Without Rb, E2F is constitutively free, so S-phase entry no longer depends on the CDK4/6 activity the drug blocks`, `RB deletion increases drug efflux`, `CDK4/6 inhibitors require Rb as a cofactor for binding CDK4`, `RB-deleted cells cannot enter the cell cycle at all`],
            correctAnswer: 0,
            explanation: `The drug works upstream of Rb: it prevents Rb phosphorylation, keeping E2F sequestered. If Rb itself is gone, E2F is permanently liberated and the pathway's control node has vanished — blocking the kinase that would have phosphorylated a nonexistent brake accomplishes nothing. Drug-sensitivity-depends-on-downstream-intactness is a signature MCAT reasoning pattern.`
          },
          {
            question: `Fibroblasts transfected with an activated RAS gene form colonies in soft agar, while untransfected fibroblasts do not. This result demonstrates that the transfected cells have:`,
            options: [`Lost anchorage dependence — a hallmark of transformation`, `Gained contact inhibition`, `Become dependent on higher serum concentrations`, `Entered permanent senescence`],
            correctAnswer: 0,
            explanation: `Normal adherent cells require integrin-mediated attachment signals to pass the restriction point; suspended in agar, they arrest. Growth as free-floating colonies means proliferation signaling has become attachment-independent — constitutive Ras output substitutes for the missing adhesion and growth-factor inputs. Soft agar is the classic functional read-out that a gene is transforming (oncogenic).`
          }
        ]
      }
    },
    {
      id: 'cc3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- p53 is regulated by degradation: MDM2 destroys it continuously; damage signaling (ATM/ATR) stabilizes it → p21 (arrest), repair genes, or PUMA/BAX (apoptosis); mutated in >50% of cancers; Li-Fraumeni = inherited first hit
- Intrinsic apoptosis: Bcl-2 family balance → BAX/BAK pores → cytochrome c → apoptosome → caspase-9 → caspases-3/7; extrinsic: death receptors → caspase-8
- Apoptosis is tidy (shrinkage, laddering, PS exposure, no inflammation); necrosis is messy (swelling, lysis, inflammation)
- Oncogenes = stuck accelerator, one allele, gain-of-function (RAS, MYC, HER2, Bcl-2); tumor suppressors = cut brakes, two hits, loss-of-function (RB, TP53, PTEN, BRCA)
- Two-hit model: inherited first hit → early, multiple, bilateral tumors; sporadic → late, single
- Transformation signatures: no contact inhibition, anchorage independence (soft agar), immortality via telomerase, reduced growth-factor need
- Therapy logic: targeted drugs need their pathway node intact (CDK4/6 inhibitors need Rb); synthetic lethality (PARP + BRCA) kills only doubly-deficient cells`
    }
  ]
};
