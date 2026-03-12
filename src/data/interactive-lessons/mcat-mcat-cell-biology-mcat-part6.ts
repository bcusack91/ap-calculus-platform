export const mcatCellBioPart6Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'cb6-intro',
      type: 'text' as const,
      content: `# Cell Biology for the MCAT

**Part 6 of 7 — Apoptosis & Cellular Processes**

### Apoptosis (Programmed Cell Death)

Apoptosis is an **orderly, energy-requiring** process — fundamentally different from necrosis:
- Cell shrinks, chromatin condenses, DNA fragments into 180 bp ladder
- Membrane blebs form (but does NOT rupture — no inflammation)
- "Eat me" signals (phosphatidylserine on outer leaflet) attract phagocytes
- Regulated by **caspases** — a protease cascade

### Apoptosis Pathways

| Pathway | Trigger | Initiator Caspase | Key Steps |
|---------|---------|-------------------|-----------|
| Intrinsic (mitochondrial) | DNA damage, oxidative stress, growth factor withdrawal | Caspase-9 | Mitochondria release cytochrome c → apoptosome forms → caspase-9 activation |
| Extrinsic (death receptor) | Death ligands (FasL, TNF, TRAIL) | Caspase-8 | Ligand binds Fas → DISC forms → caspase-8 activation |
| Both pathways converge → | | **Caspase-3** (executioner) | Cleaves cellular substrates → cell death |

### Key Regulators of Apoptosis

| Protein | Role | Clinical Connection |
|---------|------|-------------------|
| **Bcl-2** | Anti-apoptotic (blocks cytochrome c release) | Overexpressed in follicular lymphoma |
| **Bax, Bak** | Pro-apoptotic (form pores in mitochondria → cytochrome c release) | Promote apoptosis |
| **p53** | Pro-apoptotic (upregulates Bax, activates intrinsic pathway) | Mutated in >50% of cancers |
| **IAPs** | Inhibitors of apoptosis (bind and inhibit caspases) | Can contribute to cancer survival |
| **Smac/DIABLO** | Inhibits IAPs → promotes apoptosis | Released from mitochondria with cytochrome c |

### Apoptosis vs. Necrosis

| Feature | Apoptosis | Necrosis |
|---------|-----------|---------|
| Trigger | Internal signals, death receptors | Trauma, toxins, ischemia |
| Process | Orderly, controlled shrinkage | Chaotic cell swelling and lysis |
| Membrane | Intact (blebs but no rupture) | Ruptures → contents leak out |
| Inflammation | **No** | **Yes** (leaking contents trigger immune response) |
| Energy (ATP) | Required | Not required |
| DNA | Fragmented in ~180 bp ladders (nucleosomal) | Random degradation/smear |`
    },
    {
      id: 'cb6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Apoptosis** 🎯`,
      exercise: {
        questions: [
          {
            question: `A cancer cell overexpresses Bcl-2 protein. The most direct effect is:`,
            options: [`Resistance to apoptosis — Bcl-2 prevents cytochrome c release from mitochondria`, `Increased apoptosis due to enhanced caspase activity`, `Arrested cell cycle at G$_1$/S checkpoint`, `Increased sensitivity to death receptor ligands`],
            correctAnswer: 0,
            explanation: `Bcl-2 is anti-apoptotic — it stabilizes the outer mitochondrial membrane, preventing Bax/Bak from forming pores and blocking cytochrome c release. This blocks the intrinsic apoptotic pathway. Overexpression in follicular lymphoma (due to t(14;18) translocation) prevents B-cell apoptosis → lymphoma.`
          },
          {
            question: `During apoptosis, phosphatidylserine (PS) appears on the outer leaflet of the plasma membrane. The function of this is:`,
            options: [`An "eat me" signal that marks the cell for phagocytic removal`, `To increase membrane fluidity for cell division`, `To activate intracellular caspases`, `To release cytochrome c from mitochondria`],
            correctAnswer: 0,
            explanation: `PS is normally kept on the inner leaflet by flippases. During apoptosis, scramblases expose PS on the outer surface. Macrophages have PS receptors and recognize this as an "eat me" signal → phagocytosis of apoptotic bodies without inflammation. This is why apoptosis does not trigger an immune response.`
          },
          {
            question: `A researcher observes DNA fragmented into a distinct ladder pattern of ~180 bp repeats on gel electrophoresis. This indicates:`,
            options: [`Apoptosis — endonucleases cut between nucleosomes at regular ~180 bp intervals`, `Necrosis — random DNA degradation`, `Normal DNA replication`, `Viral infection causing random DNA breaks`],
            correctAnswer: 0,
            explanation: `During apoptosis, caspase-activated DNase (CAD) cleaves DNA between nucleosomes. Since DNA wraps around nucleosomes every ~180 bp, this creates a characteristic "ladder" pattern on gel electrophoresis. Necrotic DNA degradation is random and appears as a continuous smear, not a ladder.`
          }
        ]
      }
    },
    {
      id: 'cb6-deep',
      type: 'text' as const,
      content: `### Autophagy — Self-Eating for Survival

Autophagy is distinct from apoptosis — it is a **survival mechanism**, not a death pathway:
- Cell digests its own damaged organelles or misfolded proteins
- Double-membrane vesicle (autophagosome) engulfs target → fuses with lysosome → contents degraded
- Activated by nutrient deprivation, stress, mTOR inhibition
- Provides amino acids and energy during starvation

**MCAT distinction**: Apoptosis = programmed cell DEATH. Autophagy = programmed cell SURVIVAL under stress.

### Necroptosis — Programmed Necrosis

- A regulated form of necrosis (combines features of both)
- Triggered by death receptors (like extrinsic apoptosis) but when caspase-8 is inhibited
- RIPK1 → RIPK3 → MLKL → membrane rupture
- Results in inflammation (like necrosis) but is genetically programmed (like apoptosis)

### Clinical Connections — MCAT Favorites

| Condition | Apoptosis Connection |
|-----------|---------------------|
| Cancer | Too little apoptosis (Bcl-2 overexpression, p53 loss) |
| Autoimmune disease | Too little apoptosis of self-reactive lymphocytes |
| Alzheimer's, Parkinson's | Excessive neuronal apoptosis |
| HIV/AIDS | Excessive CD4+ T cell apoptosis |
| Development | Apoptosis removes webbing between fingers, shapes organs |

### During Development — Apoptosis Is Essential

- Removes cells between developing fingers and toes
- Eliminates self-reactive T cells in the thymus (negative selection)
- Shapes the nervous system by removing neurons without proper connections
- The tadpole tail resorbs during metamorphosis via apoptosis`
    },
    {
      id: 'cb6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Cell Death Mechanisms** 🎯`,
      exercise: {
        questions: [
          {
            question: `A cell deprived of growth factors for an extended period activates the intrinsic apoptotic pathway. The key mitochondrial event that initiates the caspase cascade is:`,
            options: [`Release of cytochrome c into the cytoplasm through Bax/Bak pores`, `ATP production ceases in the mitochondria`, `Mitochondrial DNA is degraded`, `The outer mitochondrial membrane fuses with the ER`],
            correctAnswer: 0,
            explanation: `Without growth factor survival signals, pro-apoptotic Bax and Bak oligomerize in the outer mitochondrial membrane, forming pores. Cytochrome c (normally in the intermembrane space for the ETC) leaks out into the cytoplasm → binds Apaf-1 → forms the apoptosome → activates caspase-9 → caspase-3 → cell death.`
          },
          {
            question: `During T cell development in the thymus, T cells that strongly react to self-antigens undergo apoptosis. This process is called:`,
            options: [`Negative selection — eliminating self-reactive T cells to prevent autoimmunity`, `Positive selection — choosing T cells that recognize self-MHC`, `Clonal expansion — proliferating antigen-specific cells`, `Anergy — rendering T cells unresponsive`],
            correctAnswer: 0,
            explanation: `Negative selection occurs in the thymic medulla: T cells that bind self-antigens too strongly are eliminated by apoptosis. This is clonal deletion — a key mechanism of central tolerance. Failure of negative selection → self-reactive T cells escape → autoimmune disease. Positive selection (in the cortex) eliminates T cells that cannot recognize self-MHC at all.`
          }
        ]
      }
    },
    {
      id: 'cb6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Apoptosis: orderly, ATP-requiring, no inflammation. Necrosis: chaotic, membrane rupture, inflammation.
- Intrinsic: stress → Bax/Bak pores → cytochrome c released → caspase-9. Extrinsic: death ligand → caspase-8. Both → caspase-3.
- Bcl-2 = anti-apoptotic (cancer when overexpressed); p53 and Bax = pro-apoptotic
- DNA ladder (~180 bp) = apoptosis. DNA smear = necrosis.
- PS exposure on outer membrane = "eat me" signal for phagocytes
- Autophagy = survival mechanism (self-digestion under stress), NOT death
- Apoptosis essential in development (digit separation, thymic negative selection, neural pruning)
- Too little apoptosis → cancer; too much → neurodegeneration, immunodeficiency`
    }
  ]
};
