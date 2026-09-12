export const mcatCellOrganellesPart3Data = {
  topicSlug: 'mcat-cell-biology-organelles-mcat',
  sections: [
    {
      id: 'org3-intro',
      type: 'text' as const,
      content: `# Organelles for the MCAT

**Part 3 of 4 — Mitochondria, Lysosomes & Peroxisomes in Depth**

### Mitochondria — Architecture Maps to Function

| Compartment | Contents / jobs |
|-------------|------------------|
| Outer membrane | Porins (VDAC) — freely permeable to molecules < ~5 kDa |
| Intermembrane space | Cytochrome c (apoptosis trigger when released); high H$^+$ during respiration |
| Inner membrane | Electron transport chain, ATP synthase; folded into **cristae** (surface area); impermeable — everything crosses by transporter |
| Matrix | TCA cycle, beta-oxidation, mtDNA, mitochondrial ribosomes |

- The inner membrane's impermeability IS the point: the ETC pumps H$^+$ out of the matrix, and the only easy way back is **ATP synthase** — chemiosmosis
- Key inner-membrane transporters: ADP/ATP translocase, pyruvate carrier, carnitine shuttle (fatty acids), and the shuttles (malate-aspartate, glycerol-3-phosphate) that move cytosolic NADH equivalents in
- Tissues scale mitochondria to demand: cardiac muscle, brown fat (uncoupling protein UCP1 makes heat by short-circuiting the gradient), proximal tubule

### The Endosymbiotic Theory — Evidence List

1. **Own circular DNA**, no histones — like a bacterial chromosome
2. **Own ribosomes**, bacterial-sized (~70S) and sensitive to some antibacterial antibiotics — the basis of aminoglycoside/linezolid mitochondrial side effects
3. **Double membrane** — inner membrane resembles bacterial membranes (cardiolipin)
4. **Divide by fission**, independent of the cell cycle
5. Sequence phylogeny places mtDNA among alpha-proteobacteria

**Genetics consequences**: mtDNA is **maternally inherited** (sperm mitochondria are eliminated); each cell carries many genome copies → **heteroplasmy** (mixtures of mutant and normal mtDNA), and disease severity tracks the mutant fraction and the tissue's energy demand (nerve, muscle first — e.g., MELAS, LHON). Most mitochondrial proteins are **nuclear-encoded** and imported (Part 2), so "mitochondrial disease" can be Mendelian too.

### Lysosomes — Degradation Central

Substrates arrive by three routes: **endocytosis** (extracellular material), **phagocytosis** (particles; the phagosome fuses with lysosomes), and **autophagy** (a double membrane engulfs worn organelles → autophagosome → fuses with lysosome). Starvation strongly induces autophagy (recycling amino acids; mTOR inhibition is the trigger).

**Storage diseases** — a missing hydrolase means its substrate accumulates:

| Disease | Deficient enzyme | Accumulates |
|---------|------------------|-------------|
| Tay-Sachs | Hexosaminidase A | GM2 ganglioside (neurons → neurodegeneration) |
| Gaucher | Glucocerebrosidase | Glucocerebroside (macrophages → hepatosplenomegaly) |
| Pompe | Acid alpha-glucosidase | Glycogen **in lysosomes** (a glycogen storage disease that is really lysosomal) |
| I-cell | M6P phosphotransferase (a *trafficking* defect) | Everything — all hydrolases missing |

### Peroxisomes — The Other Oxidizers

- **Very-long-chain fatty acids (VLCFA, >22C)** and branched-chain (phytanic acid) lipids are oxidized here FIRST, then handed to mitochondria; peroxisomal beta-oxidation transfers electrons to O$_2$ making **H$_2$O$_2$** (no ATP directly)
- **Catalase** disposes of H$_2$O$_2$; peroxisomes also synthesize **plasmalogens** (myelin lipids) and contribute to bile acid synthesis
- **Zellweger syndrome**: defective peroxisome assembly (empty "ghosts") → VLCFA accumulate, plasmalogens missing → severe neurologic disease; **adrenoleukodystrophy**: defective VLCFA transporter into peroxisomes`
    },
    {
      id: 'org3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Organelle Pathophysiology** 🎯`,
      exercise: {
        questions: [
          {
            question: `A toxin makes the inner mitochondrial membrane freely permeable to protons. Electron transport continues, but the immediate consequence is:`,
            options: [`The gradient collapses, ATP synthesis stops, heat is made`, `Electron flow through the chain stops almost at once`, `The ATP yield per glucose rises above normal levels`, `The TCA cycle is relocated into the cytosol`],
            correctAnswer: 0,
            explanation: `Uncoupling separates the two halves of chemiosmosis: the ETC keeps pumping (indeed runs faster, since back-pressure is gone), but protons leak back without turning ATP synthase, dissipating the gradient as heat. This is the mechanism of dinitrophenol toxicity and, in controlled physiologic form, of brown fat's UCP1. Distinguish uncouplers (O$_2$ use continues) from ETC inhibitors like cyanide (O$_2$ use stops).`
          },
          {
            question: `A child of an affected mother has a mitochondrial DNA disease; the child's affected sibling has much milder symptoms. The severity difference is best explained by:`,
            options: [`Differences in diet and exercise after birth`, `Paternal mtDNA rescuing one of the siblings`, `Heteroplasmy: differing mutant mtDNA loads`, `X-linked dominant inheritance of the trait`],
            correctAnswer: 2,
            explanation: `Each oocyte carries thousands of mtDNA copies, and the mutant fraction segregates randomly into eggs (the mitochondrial bottleneck). Offspring therefore inherit different mutant loads, and phenotype appears once the load in a high-demand tissue crosses its threshold. Paternal mitochondria are degraded after fertilization, so father-to-child transmission of mtDNA disease argues against a mitochondrial locus entirely.`
          },
          {
            question: `Pompe disease features glycogen accumulation inside lysosomes, even though the cytosolic enzymes of glycogenolysis are fully functional. Lysosomal glycogen persists because:`,
            options: [`Cytosolic glycogenolysis makes lysosomal glycogen as waste`, `Cytosolic phosphorylase cannot reach lysosomal glycogen`, `The acidic lysosomal pH drives glycogen synthesis`, `The disease also inactivates cytosolic phosphorylase`],
            correctAnswer: 1,
            explanation: `Compartmentalization cuts both ways: membranes that protect the cytosol from hydrolases also bar cytosolic enzymes from lysosomal contents. Glycogen delivered by autophagy can be degraded only by acid alpha-glucosidase; without it, the substrate is trapped regardless of how healthy the cytosolic pathway is. Any "enzyme X is normal, yet substrate accumulates" stem should trigger a where-is-the-substrate compartment check.`
          }
        ]
      }
    },
    {
      id: 'org3-deep',
      type: 'text' as const,
      content: `### Mitochondria as the Apoptosis Switchboard

The organelle that powers life also licenses death (integrates with the cell-cycle lesson):

- **Cytochrome c** normally shuttles electrons between complexes III and IV
- Intrinsic apoptotic signals let BAX/BAK permeabilize the **outer** membrane → cytochrome c enters the cytosol → apoptosome → caspase-9
- The **mitochondrial permeability transition** in severe injury (Ca$^{2+}$ overload, ROS) swells and ruptures mitochondria → necrosis instead
- One protein, two jobs, two compartments: location determines function — an MCAT-favorite principle

### Reactive Oxygen Species — Made and Managed

| Step | Molecule/enzyme |
|------|------------------|
| Electron leak at ETC complexes I/III | Superoxide (O$_2^-$) |
| Superoxide dismutase (SOD) | O$_2^-$ → H$_2$O$_2$ |
| Catalase (peroxisome) / glutathione peroxidase (needs NADPH via PPP) | H$_2$O$_2$ → H$_2$O |

> Connect across topics: the pentose phosphate pathway's NADPH maintains reduced glutathione — why G6PD deficiency causes oxidative hemolysis, and why rapidly respiring tissues need robust antioxidant systems.

### Organelle Cooperation Case Study — Fatty Acid Handling

1. Dietary VLCFA enter the **peroxisome** (ABCD1 transporter), shortened by peroxisomal beta-oxidation (electrons → H$_2$O$_2$ → catalase)
2. Medium-length products transfer to the **mitochondrion** via the carnitine shuttle for standard beta-oxidation → acetyl-CoA → TCA
3. Excess acetyl-CoA in liver → ketone bodies (mitochondrial matrix) or → cytosolic fatty acid synthesis (citrate shuttle out)
4. New phospholipids are assembled on the **smooth ER**, distributed by vesicles and lipid-transfer proteins

A single metabolic thread crossing four organelles — passages that name an accumulating intermediate are asking which hand-off broke.`
    },
    {
      id: 'org3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Mitochondrial Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `Cytochrome c performs electron transport in healthy cells but triggers caspase activation during apoptosis. The switch between these roles is accomplished by:`,
            options: [`Phosphorylation converts it into an active protease`, `Oxygen binding at high concentrations switches it`, `A distinct apoptotic isoform is transcribed`, `Its location changes, moving it into the cytosol`],
            correctAnswer: 3,
            explanation: `The protein is unchanged; its address changes. Sequestered in the intermembrane space it can only ferry electrons; released through BAX/BAK pores it encounters Apaf-1 and nucleates the apoptosome. Compartmentalization-as-regulation — the same chemistry with different neighbors — is among the most transferable concepts organelle passages test.`
          },
          {
            question: `In X-linked adrenoleukodystrophy, VLCFA accumulate although all peroxisomal beta-oxidation enzymes are catalytically normal. The defect is in a transporter that imports VLCFA into peroxisomes. This situation is most analogous to:`,
            options: [`I-cell disease, where enzyme and cargo never meet up`, `Tay-Sachs disease, where the hydrolase is absent`, `Cyanide poisoning, where an enzyme is inhibited`, `Zellweger syndrome, where peroxisomes are absent`],
            correctAnswer: 0,
            explanation: `Both ALD and I-cell disease are logistics failures, not catalytic ones: functional enzymes are useless if substrate (ALD) or the enzymes themselves (I-cell) cannot reach the compartment where the reaction must occur. Tay-Sachs is a true enzyme deficiency, and Zellweger removes the whole organelle. Classifying diseases as enzyme-broken vs. delivery-broken vs. compartment-missing organizes a surprising number of MCAT answers.`
          }
        ]
      }
    },
    {
      id: 'org3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Mitochondrial map: porous outer membrane (VDAC), proton-tight inner membrane (ETC, ATP synthase, cristae), matrix (TCA, beta-oxidation, mtDNA); uncouplers dissipate the gradient as heat (UCP1, DNP) while O$_2$ use continues
- Endosymbiosis evidence: circular histone-free DNA, 70S-like ribosomes (antibiotic side effects), double membrane, fission; mtDNA = maternal inheritance + heteroplasmy → variable severity by mutant load and tissue demand
- Lysosome inputs: endocytosis, phagocytosis, autophagy (starvation-induced, mTOR-gated); storage diseases = substrate of the missing hydrolase accumulates (Tay-Sachs/GM2, Gaucher/glucocerebroside, Pompe/lysosomal glycogen)
- Compartment logic: normal cytosolic enzymes cannot rescue substrate trapped in a lysosome (Pompe), and normal enzymes fail without delivery (I-cell, ALD)
- Peroxisomes: VLCFA and branched-lipid oxidation → H$_2$O$_2$ → catalase; plasmalogen synthesis; Zellweger = assembly failure, ALD = import failure
- ROS chain: ETC leak → superoxide → SOD → H$_2$O$_2$ → catalase/glutathione peroxidase (NADPH from PPP)
- Cytochrome c: electron carrier in place, apoptosis trigger displaced — location is function`
    }
  ]
};
