export const mcatCellCyclePart3Data = {
  topicSlug: 'mcat-cell-biology-cell-cycle-mcat',
  sections: [
    {
      id: 'cc3-intro',
      type: 'text' as const,
      content: `# The Cell Cycle for the MCAT

**Part 3 of 4 — p53, Apoptosis & Cancer**

### p53 — Guardian of the Genome

**p53** is a transcription factor kept scarce in healthy cells: the E3 ubiquitin ligase **MDM2** continuously tags it for proteasomal destruction. DNA damage signaling (checkpoint kinases) phosphorylates p53, blocking MDM2 binding — p53 **stabilizes and accumulates** (regulation by degradation, not synthesis).

<!-- yield:low -->
- The damage-sensing kinases are ATM and ATR.
<!-- /yield -->

Accumulated p53 transcribes a triage program:

| Target | Outcome |
|--------|---------|
| **p21** | CDK inhibition → G$_1$ arrest (pause to repair) |
| DNA repair genes | Fix the damage |
| **BAX** and other pro-apoptotic genes | If damage is irreparable → apoptosis |
| MDM2 (its own ubiquitin ligase) | Negative feedback — the alarm resets once damage clears |

<!-- yield:low -->
- PUMA is the other classic pro-apoptotic p53 target.
<!-- /yield -->

- **TP53 is mutated in over half of human cancers** — the single most commonly mutated cancer gene
- **Li-Fraumeni syndrome**: inherited one bad TP53 allele → early cancers of many tissues (the second allele is lost somatically)

### Apoptosis — Ordered Self-Destruction

Apoptosis is ATP-dependent, non-inflammatory, and executed by **caspases** (cysteine proteases cleaving after aspartate, made as inactive zymogens):

**Intrinsic (mitochondrial) pathway** — the cell-cycle-relevant one:
1. Stress/damage shifts the balance of **Bcl-2 family** proteins: pro-apoptotic **BAX/BAK** overcome anti-apoptotic **Bcl-2**
2. BAX/BAK permeabilize the outer mitochondrial membrane → **cytochrome c** escapes to the cytosol
3. Cytochrome c assembles the **apoptosome**, activating initiator **caspase-9**
4. Caspase-9 activates executioner **caspases-3/7** → controlled demolition

<!-- yield:low -->
- Bcl-xL is a second anti-apoptotic family member, and the adaptor that cytochrome c binds to build the apoptosome is Apaf-1.
<!-- /yield -->

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
            options: [`MDM2 can no longer ubiquitinate p53, which accumulates`, `Radiation directly switches on transcription of the TP53 gene`, `Radiation halts all protein synthesis except that of p53`, `p53 protein is imported from neighboring damaged cells`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `p53 is constitutively made and constitutively destroyed; its steady-state level is set by MDM2-driven turnover. Checkpoint-kinase phosphorylation of p53 (and MDM2) breaks the interaction, so half-life jumps from minutes to hours with no transcriptional change. Regulation-by-stabilization is faster than transcription — appropriate for an emergency responder — and the constant mRNA with rising protein is the passage giveaway.`
          },
          {
            question: `A lymphoma overexpresses Bcl-2 due to a chromosomal translocation. These tumor cells resist chemotherapy primarily because:`,
            options: [`Bcl-2 directly repairs the DNA damage caused by the drugs`, `Bcl-2 drives cells past checkpoints faster than the drug`, `Bcl-2 blocks BAX/BAK pores, so cytochrome c stays in`, `Bcl-2 pumps chemotherapeutic drugs back out of the cell`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Most chemotherapies kill by damaging cells badly enough that the intrinsic apoptotic pathway executes them. Bcl-2 guards the mitochondrial outer membrane; overexpression raises the threshold for BAX/BAK pore formation, so cytochrome c stays inside and caspase-9 is never activated — damaged cells survive. This is follicular lymphoma's t(14;18) lesion: an oncogene that works by blocking death rather than driving proliferation.`
          },
          {
            question: `A child develops bilateral retinoblastoma at age one; an unrelated adult develops a single unilateral tumor at 25. Knudson's two-hit model explains the difference because the child:`,
            options: [`Was exposed to far more ionizing radiation in utero`, `Inherited one mutant RB allele in every cell of the body`, `Carries a dominant activating oncogene in the retina`, `Has defective apoptosis in every tissue of the body`],
            correctAnswer: 1,
            yield: 'HIGH',
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

Besides cycling and apoptosis, damaged or telomere-exhausted cells can enter **senescence**: permanent G$_1$ exit enforced by p16/Rb and p53/p21, cells remain metabolically alive. Senescence is a tumor-suppressive barrier: an activated oncogene can itself trigger senescence (oncogene-induced senescence), halting a lesion before it becomes a cancer.

<!-- yield:low -->
- Benign moles are the classic example: they carry activating BRAF mutations, yet stop growing because of oncogene-induced senescence.
<!-- /yield -->

### Metastasis in One Paragraph

Invasion requires loss of **E-cadherin** (epithelial cell-cell adhesion) — part of the epithelial-to-mesenchymal transition (EMT) — then basement-membrane degradation (matrix metalloproteinases), intravasation, survival in circulation, extravasation, and colonization. Tumors also secrete **VEGF** to recruit blood vessels (angiogenesis); without new vessels a tumor stalls at a small size, set by the diffusion limit for oxygen and nutrients.

<!-- yield:low -->
- That avascular limit is roughly 1-2 mm.
<!-- /yield -->

### Therapy Logic Preview

- Traditional chemo (spindle poisons, antimetabolites, alkylators) targets **proliferation itself** → toxic to gut/marrow/hair
- Targeted agents exploit specific lesions: imatinib (BCR-ABL), trastuzumab (HER2), CDK4/6 inhibitors (only useful when Rb is intact, a beautiful pathway-logic question)

<!-- yield:low -->
- Palbociclib is the prototype CDK4/6 inhibitor.
<!-- /yield -->

- **Synthetic lethality**: PARP inhibitors kill BRCA-mutant cells because losing BOTH single-strand repair (drug) and homologous recombination (mutation) is lethal, while normal cells retain one route`
    },
    {
      id: 'cc3-worked',
      type: 'text' as const,
      content: `### Worked Example — Reading a Tumor's Lesions

**Problem.** Sequencing a colon tumor finds one activated RAS allele beside a normal copy, and loss-of-function mutations in both TP53 alleles. The tumor cells are then treated with a DNA-damaging drug.

- **(a)** Classify each lesion, and explain why one shows a single mutant allele and the other two.
- **(b)** Would adding back one normal RAS copy, or one wild-type TP53 copy, restore control?
- **(c)** Will the drug-treated cells arrest in G$_1$ to repair the damage?
- **(d)** Will the drug kill these cells by apoptosis as well as it kills normal cells?

**(a) Two gene classes.** Activated RAS is an oncogene: a gain of function, a stuck accelerator, so one hyperactive allele is enough. TP53 is a tumor suppressor: a loss of function, a cut brake, so both alleles must go (two hits).

**(b) Add-back.** A normal RAS copy would not help: the hyperactive allele acts dominantly whatever the normal copy does. One wild-type TP53 copy would restore the brake, because tumor-suppressor loss is recessive at the cell level.

**(c) Arrest.** No. Damage normally stabilizes p53, which transcribes p21 to inhibit CDKs and pause the cycle for repair. With no working p53, p21 is not induced, so the cells pass into S phase carrying the damage; only the p53-independent G$_2$/M gate is left.

**(d) Apoptosis.** No. Irreparable damage normally makes p53 transcribe BAX, tipping the Bcl-2 balance toward cytochrome c release. That route is lost, so damaged cells survive. Losing arrest, repair and death at once is why TP53 is the most commonly mutated cancer gene.`
    },
    {
      id: 'cc3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Cancer Logic** 🎯`,
      exercise: {
        questions: [
          {
            question: `CDK4/6 inhibitors benefit breast cancers with cyclin D overexpression but fail entirely in tumors that have deleted the RB gene. The reason for the failure is that:`,
            options: [`RB deletion raises drug efflux through ABC transporters`, `CDK4/6 inhibitors need Rb as a cofactor to bind CDK4`, `RB-deleted cells cannot enter the cell cycle at all`, `Without Rb, E2F is free regardless of CDK4/6 activity`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `The drug works upstream of Rb: it prevents Rb phosphorylation, keeping E2F sequestered. If Rb itself is gone, E2F is permanently liberated and the pathway's control node has vanished — blocking the kinase that would have phosphorylated a nonexistent brake accomplishes nothing. Drug-sensitivity-depends-on-downstream-intactness is a signature MCAT reasoning pattern.`
          },
          {
            question: `Fibroblasts transfected with an activated RAS gene form colonies in soft agar, while untransfected fibroblasts do not. This result demonstrates that the transfected cells have:`,
            options: [`Lost their dependence on anchorage for growth`, `Gained contact inhibition and stopped dividing`, `Become dependent on much higher serum levels`, `Entered permanent replicative senescence early`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Normal adherent cells require integrin-mediated attachment signals to pass the restriction point; suspended in agar, they arrest. Growth as free-floating colonies means proliferation signaling has become attachment-independent — constitutive Ras output substitutes for the missing adhesion and growth-factor inputs. Soft agar is the classic functional read-out that a gene is transforming (oncogenic).`
          }
        ]
      }
    },
    {
      id: 'cc3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **p53 is set by degradation.** MDM2 destroys p53 continuously; damage stabilizes it to induce p21, repair genes or BAX.
- **Intrinsic apoptosis.** BAX/BAK pores release cytochrome c → apoptosome → caspase-9 → caspases-3/7; death receptors use caspase-8.
- **Oncogenes vs. suppressors.** Oncogenes gain function in one allele; tumor suppressors lose function in both (two hits).
- **Transformation signatures.** Lost contact inhibition, soft-agar growth, telomerase immortality and less need for growth factors.

**Common traps**

- **p53 rising by transcription.** p53 accumulates by escaping MDM2 degradation, with no increase in TP53 mRNA.
- **Apoptosis as necrosis.** Apoptosis shrinks the cell tidily with no inflammation; necrosis swells, lyses and inflames.
- **Two hits, two genes.** Hereditary and sporadic retinoblastoma share one gene; inherited cases simply start one hit deep.
- **Drug without its node.** CDK4/6 inhibitors fail in Rb-null tumors; a targeted drug needs its downstream node intact.

<!-- yield:low -->
**Low-yield extras**

- ATM/ATR are the damage kinases; PUMA is a second pro-apoptotic p53 target; Bcl-xL is another anti-apoptotic Bcl-2 member; Apaf-1 is the apoptosome adaptor; BRAF-mutant moles illustrate oncogene-induced senescence; the avascular tumor limit is ~1-2 mm; palbociclib is the prototype CDK4/6 inhibitor
<!-- /yield -->`
    }
  ]
};
