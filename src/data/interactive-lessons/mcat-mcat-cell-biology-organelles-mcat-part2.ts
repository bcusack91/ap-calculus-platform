export const mcatCellOrganellesPart2Data = {
  topicSlug: 'mcat-cell-biology-organelles-mcat',
  sections: [
    {
      id: 'org2-intro',
      type: 'text' as const,
      content: `# Organelles for the MCAT

**Part 2 of 4 — Protein Sorting & the Secretory Pathway**

### Every Protein Carries a Zip Code

Translation always **starts** on free cytosolic ribosomes; the protein's own sequence then decides its destination:

| Signal | Destination | Import style |
|--------|-------------|--------------|
| N-terminal hydrophobic **signal sequence** | ER → secretory pathway | **Co-translational** (while being made) |
| No signal | Cytosol (default) | — |
| **NLS** (nuclear localization signal, basic residues) | Nucleus | Through nuclear pores, FOLDED, via importins; Ran-GTP directs |
| N-terminal amphipathic **presequence** | Mitochondrial matrix | **Post-translational**, UNFOLDED, via TOM/TIM channels; needs chaperones |
| C-terminal targeting tripeptide | Peroxisome | Post-translational; folded proteins allowed |
| **Mannose-6-phosphate** (a sugar tag, not a sequence) | Lysosome | Sorted at the trans-Golgi |

<!-- yield:low -->
- The classic peroxisomal tripeptide is **SKL** (Ser-Lys-Leu).
<!-- /yield -->

### The SRP Cycle — Getting Into the ER

1. Ribosome begins translating; a hydrophobic **signal sequence** emerges
2. **SRP** (signal recognition particle) binds the signal AND **pauses translation**
3. SRP docks on the **SRP receptor** at the ER; translation resumes through the **translocon** channel into the lumen
4. **Signal peptidase** clips the signal sequence; the protein folds in the lumen
5. For membrane proteins, hydrophobic **stop-transfer** sequences exit the translocon sideways and become transmembrane segments — their number and order fix the protein's final topology

**In the ER lumen**: chaperones assist folding; disulfide bonds form (oxidizing lumen only); **N-linked glycosylation** adds a preassembled sugar block to asparagine. Misfolded proteins are retro-translocated to the cytosol and destroyed by the proteasome (**ERAD**); overload triggers the **unfolded protein response** (expand ER capacity or die).

<!-- yield:low -->
- Machinery names: the translocon is the **Sec61** channel; the main luminal chaperone is **BiP**; **protein disulfide isomerase** forms and reshuffles disulfides; the N-linked block is a 14-sugar core.
<!-- /yield -->

### ER → Golgi → Sorting

- Vesicles carry cargo ER → Golgi (**anterograde**); other vesicles return escaped ER residents (**retrograde**), recognized by a C-terminal retrieval tag

<!-- yield:low -->
- Coat names: **COPII** coats anterograde ER → Golgi vesicles; **COPI** coats retrograde vesicles, whose receptors read the **KDEL** retrieval tag.
<!-- /yield -->

- Golgi processes N-glycans, adds O-linked sugars, and at the **cis-Golgi** phosphorylates mannose on lysosomal hydrolases → **M6P**
- **Trans-Golgi network** sorts: M6P receptors divert hydrolases to endosomes/lysosomes (acidic endosome releases cargo; receptor recycles); regulated secretory cargo condenses into granules awaiting Ca$^{2+}$; everything else defaults to constitutive secretion

### I-Cell Disease — The Experiment Nature Ran

Loss of the phosphotransferase that creates M6P → hydrolases are **secreted into the blood instead of reaching lysosomes** → lysosomes fill with undigested substrates ("inclusion cells"). Diagnostic pattern: **high lysosomal enzymes in serum, enzyme-poor lysosomes swollen with substrate** — the definitive proof that M6P is the lysosomal address label.`
    },
    {
      id: 'org2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Sorting Signals** 🎯`,
      exercise: {
        questions: [
          {
            question: `The signal sequence of a secreted protein is experimentally fused onto the N-terminus of a normally cytosolic protein. The hybrid protein will be found:`,
            options: [`Still in the cytosol, since the mature fold sets its fate`, `In the ER lumen and the secretory pathway beyond`, `Degraded by the proteasome immediately after synthesis`, `In the nucleus, carried in by the basic signal`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Signal sequences are both necessary and sufficient: SRP reads the emerging hydrophobic stretch regardless of what follows, so the passenger protein is co-translationally threaded into the ER. The reciprocal experiment (deleting the signal from a secreted protein) leaves it stranded in the cytosol. Sufficiency-by-fusion is the canonical evidence style for every targeting signal — expect it with NLS and mitochondrial presequences too.`
          },
          {
            question: `Mitochondrial matrix proteins must be kept unfolded by cytosolic chaperones before import, while nuclear proteins are imported fully folded. This difference exists because:`,
            options: [`Mitochondrial proteins cannot fold in any compartment`, `Folded proteins are too dense to cross any membrane`, `The nucleus contains no chaperone proteins at all`, `TOM/TIM are narrow channels; nuclear pores are wide gates`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Import machinery dictates cargo state. The mitochondrial translocases are protein-conducting channels only wide enough for an unfolded chain (matrix Hsp70 then ratchets it in and the presequence is cleaved). The nuclear pore complex is a huge gated aperture passing intact complexes — even assembled ribosomal subunits exit through it. Linking transport mechanism to cargo requirements is a favorite discrete question.`
          },
          {
            question: `In I-cell disease, lysosomal hydrolases appear at high levels in the patient's serum. This mis-localization occurs because:`,
            options: [`Untagged hydrolases take the default secretory route`, `Lysosomes rupture and spill their enzymes into blood`, `Free ribosomes make the hydrolases, which skip the ER`, `Serum proteases generate hydrolases from precursors`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `The hydrolases still enter the ER (they have signal sequences) and transit the Golgi normally — they simply miss their exit. Untagged proteins in the trans-Golgi default to constitutive secretion, so the enzymes leave the cell while lysosomes, starved of hydrolases, engorge with substrate (inclusion bodies). The disease elegantly proves both the M6P pathway and the existence of a secretion default route.`
          }
        ]
      }
    },
    {
      id: 'org2-deep',
      type: 'text' as const,
      content: `### Topology — The Rule That Answers Whole Passages

**A compartment's lumen is topologically "outside."** Once a protein's domain faces the ER lumen, that domain faces the Golgi lumen, the vesicle lumen, and finally the extracellular space — without ever crossing another membrane.

- N-glycosylation happens only on **luminal** domains → a glycosylated domain of a plasma-membrane protein is the extracellular one
- Disulfide bonds form in the ER lumen → found in extracellular domains and secreted proteins, rare in cytosolic ones
- A receptor's kinase domain must be **cytosolic** — it stays cytosolic through every trafficking step

### Glycosylation Contrast Table

| Feature | N-linked | O-linked |
|---------|----------|----------|
| Attachment | Asparagine side-chain N | Serine/threonine OH |
| Where added | ER (en bloc, preassembled core), trimmed in ER/Golgi | Golgi (sugar-by-sugar) |
| Special role | Folding quality control in the ER | Mucins, proteoglycans |

<!-- yield:low -->
- N-glycosylation details: the acceptor sequence is Asn-X-Ser/Thr; the core is 14 sugars; the lectin chaperone **calnexin** holds glycoproteins until they fold.
<!-- /yield -->

### Experimental Probes of the Pathway

| Tool | Effect | Use |
|------|--------|-----|
| Protease protection | Added protease digests only cytosol-facing domains of intact vesicles | Protected = luminal |
| Microsomes +/− during in vitro translation | Signal cleavage and glycosylation need membranes present | Reconstitutes ER import |
| Glycan processing | ER-type (high-mannose) N-glycans are remodeled in the medial Golgi | Glycan form = how far it got |
| Blocking N-glycosylation | Protein runs lighter on SDS-PAGE; may misfold → UPR | Are N-glycans needed to fold? |
| Blocking ER → Golgi transport | Cargo piles up in the cell with ER-type glycans | Before or after the Golgi? |

<!-- yield:low -->
- Named drug and enzyme probes: **tunicamycin** is the drug that blocks N-glycosylation; **brefeldin A** collapses the Golgi into the ER, blocking ER → Golgi transport; **Endo H** cleaves only high-mannose (pre-medial-Golgi) N-glycans, so Endo H resistance means the protein reached the medial Golgi — a molecular odometer.
<!-- /yield -->

> Protease-protection logic: if a domain survives protease treatment of intact microsomes but is digested after detergent, it was inside the vesicle — the biochemical mirror of the topology rule.`
    },
    {
      id: 'org2-worked',
      type: 'text' as const,
      content: `### Worked Example — Tracing a Receptor Through the Secretory Pathway

**Problem 1.** A single-pass plasma-membrane receptor has an N-terminal hydrophobic signal sequence and one stop-transfer sequence. Its ligand-binding domain carries N-glycans and a disulfide bond; its other domain is a kinase.

- **(a)** How does the receptor get into the ER membrane?
- **(b)** Which domain faces the ER lumen, and which side of the plasma membrane will it end up on?
- **(c)** Microsomes from the same cells also hold a newly made secreted protein. Is it digested by added protease without detergent, and with it?
- **(d)** If ER → Golgi transport is blocked, where does the receptor pile up, and with what kind of N-glycans?

**(a) Co-translational entry.** Translation starts on a free ribosome. SRP binds the emerging signal sequence, pauses translation and docks on the SRP receptor; the chain then enters through the translocon and signal peptidase clips the signal. The stop-transfer sequence exits sideways and becomes the transmembrane segment.

**(b) Topology.** N-glycans and disulfides form only in the ER lumen, so the ligand-binding domain is luminal. The lumen is topologically outside, so that domain ends up extracellular; the kinase domain stays cytosolic through every step.

**(c) Protease protection.** A secreted protein lies wholly in the lumen, so added protease cannot reach it in intact microsomes. Detergent dissolves the membrane, and then it is digested. Protected = luminal — the biochemical mirror of the topology rule.

**(d) The stalled station.** The receptor piles up in the ER, with ER-type (high-mannose) N-glycans, because N-glycans leave the high-mannose (ER-type) form only in the medial Golgi. Its glycan form shows how far along the pathway it got.`
    },
    {
      id: 'org2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Topology & Pathway Probes** 🎯`,
      exercise: {
        questions: [
          {
            question: `A single-pass plasma-membrane receptor is translated in vitro with microsomes, then the vesicles are treated with protease. The receptor's ligand-binding domain is protected from digestion unless detergent is added. In the intact cell, this domain will face:`,
            options: [`The mitochondrial matrix, imported after translation is done`, `The cytosol, where added protease can reach it`, `The extracellular space, outside the plasma membrane`, `The nuclear interior, behind the pore complex`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Rough microsomes are sealed ER fragments that keep the ER's orientation (cytosolic face out, lumen in), so they preserve ER topology: luminal contents are shielded from added protease until detergent dissolves the membrane. Since the ER lumen becomes the extracellular face after transport to the plasma membrane, protease protection here predicts an extracellular ligand-binding domain (sensible for a receptor). This assay-and-inference chain appears in MCAT passages almost verbatim.`
          },
          {
            question: `The enzyme Endo H removes only ER-type N-glycans, which are processed into a resistant form in the medial Golgi. A secreted glycoprotein from cells treated with a transport-blocking drug remains fully Endo H-sensitive and is not secreted. These observations indicate that the protein:`,
            options: [`Was secreted and then degraded outside the cell`, `Reached the ER but never the medial Golgi`, `Never entered the secretory pathway at all`, `Lacks the N-terminal signal sequence for ER entry`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Endo H sensitivity is a location stamp: high-mannose (ER-type) N-glycans are Endo H substrates; medial-Golgi processing makes them resistant. Persistent sensitivity plus failed secretion places the block between ER and Golgi — exactly the action of a drug that blocks ER-to-Golgi transport. The protein clearly entered the ER (it is glycosylated), ruling out a missing signal sequence. Reading glycan processing as an itinerary is a high-yield skill.`
          }
        ]
      }
    },
    {
      id: 'org2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **The sequence is the zip code.** Signal sequence → ER, NLS → nucleus, presequence → mitochondria, C-terminal tripeptide → peroxisome.
- **Fusion and deletion tests.** Fusion shows a signal is sufficient; deletion shows it is necessary.
- **Trans-Golgi sorts three ways.** M6P cargo → lysosomes, regulated cargo → Ca$^{2+}$-triggered granules, the rest → constitutive secretion.
- **The lumen is outside.** A luminal domain ends up extracellular, carrying glycans and disulfides; kinase domains stay cytosolic.

**Common traps**

- **Starting translation on the ER.** All translation starts on free ribosomes; a signal sequence then brings the ribosome to the ER.
- **Treating M6P as a sequence.** M6P is a sugar tag added in the Golgi; without it (I-cell disease) hydrolases are secreted to serum.
- **Importing mitochondrial proteins folded.** TOM/TIM pass only unfolded chains; nuclear pores import proteins fully folded.
- **Reading protease protection backwards.** A domain protected in intact microsomes is luminal; a digested one faces the cytosol.

<!-- yield:low -->
- Low-yield extras: SKL is the peroxisomal tripeptide; Sec61 = translocon, BiP = luminal chaperone, PDI makes disulfides, the N-linked core has 14 sugars on Asn-X-Ser/Thr and calnexin runs folding quality control; COPII = anterograde coat, COPI = retrograde coat reading KDEL; tunicamycin blocks N-glycosylation, brefeldin A blocks ER → Golgi transport, Endo H resistance = reached the medial Golgi
<!-- /yield -->`
    }
  ]
};
