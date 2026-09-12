export const mcatCellOrganellesPart2Data = {
  topicSlug: 'mcat-cell-biology-organelles-mcat',
  sections: [
    {
      id: 'org2-intro',
      type: 'text' as const,
      content: `# Organelles for the MCAT

**Part 2 of 4 — Protein Sorting & the Secretory Pathway**

### Every Protein Carries a Zip Code

Translation always **starts** on free cytosolic ribosomes. The protein's own sequence then decides its destination:

| Signal | Destination | Import style |
|--------|-------------|--------------|
| N-terminal **signal sequence** (hydrophobic) | ER → secretory pathway | **Co-translational** (while being made) |
| No signal | Cytosol (default) | — |
| **NLS** (nuclear localization signal, basic residues) | Nucleus | Through nuclear pores, FOLDED, via importins; Ran-GTP powers directionality |
| N-terminal amphipathic **presequence** | Mitochondrial matrix | **Post-translational**, UNFOLDED, through TOM/TIM channels; chaperones required |
| C-terminal **SKL** tripeptide | Peroxisome | Post-translational, can import folded proteins |
| **Mannose-6-phosphate** (added sugar tag, not a sequence) | Lysosome | Sorted at the trans-Golgi |

### The SRP Cycle — Getting Into the ER

1. Ribosome begins translating; a hydrophobic **signal sequence** emerges
2. **SRP** (signal recognition particle) binds the signal AND **pauses translation**
3. SRP docks on the **SRP receptor** at the ER; translation resumes through the **translocon** (Sec61 channel) into the lumen
4. **Signal peptidase** clips the signal sequence; the protein folds in the lumen
5. For membrane proteins, hydrophobic **stop-transfer** sequences exit the translocon sideways and become transmembrane segments — their number and order fix the protein's final topology

**In the ER lumen**: chaperones (BiP) assist folding; **protein disulfide isomerase** forms disulfides (oxidizing lumen only); **N-linked glycosylation** adds a preassembled 14-sugar block to asparagine. Misfolded proteins are retro-translocated to the cytosol and destroyed by the proteasome (**ERAD**); overload triggers the **unfolded protein response** (expand ER capacity or die).

### ER → Golgi → Sorting

- COPII vesicles carry cargo ER → Golgi (**anterograde**); COPI returns escaped ER residents (**retrograde**, reading the **KDEL** retrieval tag)
- Golgi processes N-glycans, adds O-linked sugars, and at the **cis-Golgi** phosphorylates mannose on lysosomal hydrolases → **M6P**
- **Trans-Golgi network** sorts: M6P receptors divert hydrolases to endosomes/lysosomes (acidic endosome releases cargo; receptor recycles); regulated secretory cargo condenses into granules awaiting Ca$^{2+}$; everything else defaults to constitutive secretion

### I-Cell Disease — The Experiment Nature Ran

Loss of the phosphotransferase that creates M6P → hydrolases are **secreted into the blood instead of reaching lysosomes** → lysosomes fill with undigested substrates ("inclusion cells"). Diagnostic pattern: **high lysosomal enzymes in serum, empty lysosomes** — the definitive proof that M6P is the lysosomal address label.`
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
            explanation: `Signal sequences are both necessary and sufficient: SRP reads the emerging hydrophobic stretch regardless of what follows, so the passenger protein is co-translationally threaded into the ER. The reciprocal experiment (deleting the signal from a secreted protein) leaves it stranded in the cytosol. Sufficiency-by-fusion is the canonical evidence style for every targeting signal — expect it with NLS and mitochondrial presequences too.`
          },
          {
            question: `Mitochondrial matrix proteins must be kept unfolded by cytosolic chaperones before import, while nuclear proteins are imported fully folded. This difference exists because:`,
            options: [`Mitochondrial proteins cannot fold in any compartment`, `Folded proteins are too dense to cross any membrane`, `The nucleus contains no chaperone proteins at all`, `TOM/TIM are narrow channels; nuclear pores are wide gates`],
            correctAnswer: 3,
            explanation: `Import machinery dictates cargo state. The mitochondrial translocases are protein-conducting channels only wide enough for an unfolded chain (matrix Hsp70 then ratchets it in and the presequence is cleaved). The nuclear pore complex is a huge gated aperture passing intact complexes — even assembled ribosomal subunits exit through it. Linking transport mechanism to cargo requirements is a favorite discrete question.`
          },
          {
            question: `In I-cell disease, lysosomal hydrolases appear at high levels in the patient's serum. This mis-localization occurs because:`,
            options: [`Untagged hydrolases take the default secretory route`, `Lysosomes rupture and spill their enzymes into blood`, `Free ribosomes make the hydrolases, which skip the ER`, `Serum proteases generate hydrolases from precursors`],
            correctAnswer: 0,
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
| Attachment | Asparagine (Asn-X-Ser/Thr) | Serine/threonine OH |
| Where added | ER (en bloc, 14-sugar core), trimmed in ER/Golgi | Golgi (sugar-by-sugar) |
| Special role | Folding quality control (calnexin cycle) | Mucins, proteoglycans |

### Experimental Probes of the Pathway

| Tool | Effect | Use |
|------|--------|-----|
| **Tunicamycin** | Blocks N-glycosylation | Protein runs lighter on SDS-PAGE; may misfold → UPR |
| **Brefeldin A** | Collapses Golgi into the ER (blocks ER → Golgi transport) | Secreted proteins accumulate intracellularly with ER-type glycans |
| **Endo H sensitivity** | Cleaves only high-mannose (pre-medial-Golgi) N-glycans | Endo H-resistant = protein has reached the medial Golgi — a molecular odometer |
| Protease protection | Added protease digests only exposed (cytosolic-facing) domains of vesicle preparations | Maps topology: protected = luminal |
| Microsome +/- during in vitro translation | Signal cleavage and glycosylation occur only with membranes present | Reconstitutes co-translational import |

> Protease-protection logic: if a domain survives protease treatment of intact microsomes but is digested after detergent, it was inside the vesicle — the biochemical mirror of the topology rule.`
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
            explanation: `Microsomes are inside-out fragments of nobody — they preserve ER topology: luminal contents are shielded from added protease until detergent dissolves the membrane. Since the ER lumen becomes the extracellular face after transport to the plasma membrane, protease protection here predicts an extracellular ligand-binding domain (sensible for a receptor). This assay-and-inference chain appears in MCAT passages almost verbatim.`
          },
          {
            question: `A secreted glycoprotein from cells treated with brefeldin A remains fully Endo H-sensitive and is not secreted. These observations indicate that the protein:`,
            options: [`Was secreted and then degraded outside the cell`, `Reached the ER but never the medial Golgi`, `Never entered the secretory pathway at all`, `Lacks a functional signal sequence`],
            correctAnswer: 1,
            explanation: `Endo H sensitivity is a location stamp: high-mannose (ER-type) N-glycans are Endo H substrates; medial-Golgi processing makes them resistant. Persistent sensitivity plus failed secretion under brefeldin A places the block between ER and Golgi — exactly the drug's known action. The protein clearly entered the ER (it is glycosylated), ruling out a missing signal sequence. Reading glycan processing as an itinerary is a high-yield skill.`
          }
        ]
      }
    },
    {
      id: 'org2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Zip codes: signal sequence → ER (co-translational, SRP pauses translation); NLS → nucleus (folded, importins/Ran); presequence → mitochondria (unfolded, TOM/TIM, post-translational); SKL → peroxisome; M6P sugar tag → lysosome
- Fusion experiments prove signals are sufficient; deletion proves necessity
- ER lumen work: signal peptidase, BiP folding, disulfides (PDI), N-glycosylation on Asn; failures → ERAD (proteasome) or UPR
- COPII forward, COPI backward (KDEL retrieval); trans-Golgi sorts M6P cargo to lysosomes, granules for regulated secretion, default = constitutive secretion
- I-cell disease: no M6P tag → hydrolases secreted to serum, lysosomes stuffed — nature's proof of the pathway
- Topology rule: luminal = future extracellular; glycans and disulfides mark luminal/extracellular domains; kinase domains stay cytosolic forever
- Probes: tunicamycin (no N-glycans), brefeldin A (ER-Golgi block), Endo H resistance (reached medial Golgi), protease protection (maps topology)`
    }
  ]
};
