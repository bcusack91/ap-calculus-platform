export const mcatCellOrganellesPart1Data = {
  topicSlug: 'mcat-cell-biology-organelles-mcat',
  sections: [
    {
      id: 'org1-intro',
      type: 'text' as const,
      content: `# Organelles for the MCAT

**Part 1 of 4 — The Compartment Map & How We Isolate It**

### Why Compartments Exist

Eukaryotic organelles create **dedicated chemical environments**: the lysosome runs acid hydrolysis at pH ~4.5-5 that would be fatal in the cytosol (pH ~7.2); the mitochondrial inner membrane maintains the proton gradient oxidative phosphorylation spends; the ER lumen is oxidizing enough to form disulfide bonds that the reducing cytosol forbids.

### The Inventory (Membranes Count!)

| Organelle | Membranes | Core functions | High-yield details |
|-----------|-----------|----------------|--------------------|
| Nucleus | 2 (continuous with ER) | DNA replication, transcription, splicing | Pores gate traffic; nucleolus (no membrane) makes rRNA and ribosomes |
| Rough ER | 1 | Secreted, membrane and lysosomal proteins; N-glycosylation begins | Bound ribosomes; plasma cells, pancreatic acinar cells |
| Smooth ER | 1 | Lipid/steroid synthesis, P450 detox, Ca$^{2+}$ storage | Hepatocytes, adrenal cortex, gonads; SR = muscle's Ca$^{2+}$ tank |
| Golgi | 1 (stacked cisternae) | Modifies, sorts, ships: cis receives, trans ships | O-glycosylation; M6P tag on lysosomal enzymes |
| Lysosome | 1 | Acid hydrolases digest macromolecules; autophagy endpoint | V-type H$^+$ ATPase holds pH ~4.5-5; leaked enzymes barely work |
| Peroxisome | 1 | Beta-oxidation of **very-long-chain** fatty acids; H$_2$O$_2$ metabolism | Catalase: 2 H$_2$O$_2$ → 2 H$_2$O + O$_2$; plasmalogen synthesis |
| Mitochondrion | 2 | Oxidative phosphorylation; TCA cycle (matrix); apoptosis trigger | Own circular DNA, 70S-like ribosomes; maternal inheritance |
| Ribosome | 0 | Translation | Free = cytosolic proteins; ER-bound = secretory pathway (one shared pool) |

> **Not membrane-bound**: ribosomes, nucleolus, centrioles, proteasomes, the cytoskeleton. A passage calling the nucleolus an organelle "compartment" is testing exactly this.

### Cell Fractionation — Taking the Cell Apart

1. **Homogenize** cells gently → a slurry of organelles
2. **Differential centrifugation** — spin at increasing speeds; bigger/denser things pellet first:

| Spin | Pellet contains |
|------|------------------|
| Low speed (~1,000 g) | Nuclei, unbroken cells |
| Medium (~10,000-20,000 g) | Mitochondria, lysosomes, peroxisomes |
| High (~100,000 g) | "Microsomes" (ER fragments), small vesicles |
| Very high, long | Ribosomes, large complexes |

- **Density-gradient centrifugation** then separates the mixed medium-speed pellet by buoyant density
- **Marker enzymes** name fractions: catalase = peroxisome; acid phosphatase = lysosome; succinate dehydrogenase = mitochondria

<!-- yield:low -->
- More marker enzymes: glucose-6-phosphatase = ER; lactate dehydrogenase = cytosol.
<!-- /yield -->`
    },
    {
      id: 'org1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Compartments & Fractionation** 🎯`,
      exercise: {
        questions: [
          {
            question: `A liver homogenate fraction shows high catalase activity and little succinate dehydrogenase or acid phosphatase. The fraction is enriched in:`,
            options: [`Mitochondria`, `Lysosomes`, `Peroxisomes`, `Rough ER`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Marker-enzyme logic is pure elimination: catalase is the peroxisomal signature (H$_2$O$_2$ disposal), succinate dehydrogenase marks the mitochondrial inner membrane, and acid phosphatase marks lysosomes. Because mitochondria, lysosomes, and peroxisomes co-pellet at medium speed, marker enzymes — not centrifugation speed — are what distinguish them; a density gradient would then separate them physically.`
          },
          {
            question: `Cells of the adrenal cortex, which secrete steroid hormones, are dominated by which organelle?`,
            options: [`Smooth ER, where steroids are made from cholesterol`, `Rough ER, because hormones are secreted proteins`, `Lysosomes, which degrade cholesterol precursors`, `A large Golgi for packaging steroid vesicles`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Steroids are lipids built by smooth-ER (and mitochondrial) enzymes, not proteins — so no rough ER, no signal sequence, and critically no secretory vesicles: steroids diffuse out across the membrane as they are made (which is also why steroid-secreting cells cannot store hormone and why blood levels track synthesis rate). Rough-ER-dominated cells (plasma cells, acinar cells) secrete proteins instead — form follows function on organelle questions.`
          },
          {
            question: `Lysosomal enzymes that leak into the cytosol cause relatively little immediate damage. The main protective factor is that:`,
            options: [`Cytosolic ATP binds the leaked enzymes and inactivates them`, `The cytosol contains no substrates for these hydrolases`, `Leaked enzymes are re-imported by lysosomes at once`, `Acid hydrolases are largely inactive at cytosolic pH`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `The lysosome's V-type H$^+$ ATPase maintains pH ~4.5-5, and its hydrolases evolved optima to match — a built-in safety: the enzyme and its compartment are a matched pair, so escape neutralizes the threat. (Massive lysosomal rupture still kills cells, as in gout, where urate crystals destabilize lysosomal membranes.) Compartment-specific pH as a control mechanism recurs with the endosome and the mitochondrial intermembrane space.`
          }
        ]
      }
    },
    {
      id: 'org1-deep',
      type: 'text' as const,
      content: `### The Cytoskeleton — Three Systems, Three Jobs

| Filament | Subunit | Size | Functions | Drugs/notes |
|----------|---------|------|-----------|-------------|
| Microfilaments | Actin (polar, ATP) | ~7 nm | Contractile ring, microvilli, cell crawling, muscle (with myosin) | Polymerize at a faster (+) end |
| Intermediate filaments | Keratin, vimentin, lamins, desmin (nonpolar) | ~10 nm | Tensile strength, nuclear lamina, desmosome anchoring | Cell-type specific (keratin = epithelial cells) |
| Microtubules | Alpha/beta-tubulin dimers (polar, GTP) | ~25 nm | Vesicle highways, spindle, cilia/flagella, centrioles | Dynamic instability; colchicine/taxol targets |

<!-- yield:low -->
- Actin research drugs: cytochalasin blocks actin polymerization; phalloidin stabilizes filaments (and stains them in microscopy).
- Pathologists type tumors by their intermediate filaments: keratin marks an epithelial origin.
<!-- /yield -->

- **Motors**: kinesin walks toward microtubule (+) ends (generally outward/anterograde); dynein toward (−) ends (inward/retrograde; also powers ciliary bending); myosin moves on actin
- **Cilia/flagella**: 9+2 microtubule axoneme with dynein arms; basal body = 9×3 like a centriole. **Kartagener syndrome** (dynein arm defect): immotile cilia → chronic sinusitis/bronchiectasis, infertility, and situs inversus (embryonic nodal cilia set left-right asymmetry)

### Reading Electron Micrographs (Passage Skill)

- Studded parallel membranes = rough ER; smooth tubular network = smooth ER
- Stacked flattened sacs with budding vesicles = Golgi
- Double membrane + internal folds (cristae) = mitochondrion; double membrane + pores = nuclear envelope
- Dense, uniform granular body inside the nucleus = nucleolus
- Very dense small dots free or on ER = ribosomes

### First Fractionation Story: De Duve

Lysosomes were **discovered by fractionation**, not microscopy: acid phosphatase activity in a fraction increased after aging or detergent — because intact lysosomes hide their enzymes from substrate (**enzyme latency**). Increased marker activity after membrane disruption is evidence the enzyme lives inside a membrane-bound compartment — a logic MCAT passages reuse constantly.`
    },
    {
      id: 'org1-worked',
      type: 'text' as const,
      content: `### Worked Example — Naming the Fractions of a Liver Homogenate

**Problem 1.** A liver homogenate's 10,000-20,000 g pellet is separated on a density gradient into three bands: X is rich in succinate dehydrogenase, Y in catalase, and Z in acid phosphatase.

- **(a)** Why is a density gradient needed after the medium-speed spin?
- **(b)** Which organelle is in each band?
- **(c)** Where did the nuclei and the microsomes of the homogenate go?

**(a) A mixed pellet.** Mitochondria, lysosomes and peroxisomes all pellet together at medium speed. Density-gradient centrifugation separates that mix by buoyant density, and marker enzymes then name each band.

**(b) Marker enzymes.** Succinate dehydrogenase marks mitochondria, so X is mitochondria. Catalase marks peroxisomes, so Y is peroxisomes. Acid phosphatase marks lysosomes, so Z is lysosomes.

**(c) The other pellets.** Nuclei are big and dense, so they pelleted earlier, at low speed (~1,000 g). Microsomes (ER fragments) stay in the supernatant until the high-speed spin (~100,000 g).`
    },
    {
      id: 'org1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Cytoskeleton & EM Logic** 🎯`,
      exercise: {
        questions: [
          {
            question: `In a fresh homogenate, acid phosphatase activity is low; after adding a mild detergent, measured activity rises five-fold with no new enzyme added. This latency indicates that:`,
            options: [`Detergent allosterically activates acid phosphatase`, `The enzyme is sealed inside a membrane compartment`, `The enzyme is newly synthesized in response to detergent`, `Acid phosphatase uses membrane lipids as its substrate`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Substrate added to the assay cannot reach an enzyme sealed inside intact lysosomes; lysing the membrane with detergent (or freeze-thaw, or aging) unmasks full activity. De Duve used exactly this reasoning to infer a new organelle before anyone had imaged it. Latency-relieved-by-membrane-disruption is the standard experimental fingerprint of "this enzyme lives inside a compartment."`
          },
          {
            question: `A patient has chronic respiratory infections, immotile sperm, and organs mirrored left-to-right. The underlying molecular defect is most likely in:`,
            options: [`Kinesin-based transport of vesicles along axons`, `Actin polymerization at the cell cortex`, `Axonemal dynein, the motor that bends cilia`, `Keratin intermediate filament assembly`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `The triad of Kartagener syndrome (primary ciliary dyskinesia) unites three cilia jobs: airway mucociliary clearance (infections), the sperm flagellum (infertility), and embryonic nodal cilia whose beating establishes left-right asymmetry (situs inversus — ~50% of patients, since without ciliary flow the axis is randomized). All depend on dynein arms sliding adjacent doublets of the 9+2 axoneme.`
          }
        ]
      }
    },
    {
      id: 'org1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Count the membranes.** Two: nucleus, mitochondria; one: ER, Golgi, lysosome, peroxisome; none: ribosome, nucleolus, proteasome.
- **Organelle census is the job.** Plasma and acinar cells are rich in rough ER; hepatocytes and steroid glands in smooth ER.
- **Spin, then mark.** Nuclei pellet first, then mitochondria/lysosomes/peroxisomes, then microsomes; marker enzymes name each.
- **Cytoskeleton by size.** Actin 7 nm (myosin), intermediate filaments 10 nm (strength), microtubules 25 nm (kinesin +, dynein −).

**Common traps**

- **Calling the nucleolus a compartment.** The nucleolus has no membrane; neither do ribosomes, centrioles or proteasomes.
- **Leaked hydrolases digesting the cytosol.** Acid hydrolases are nearly inactive at cytosolic pH ~7.2; the acid compartment is the safety.
- **Putting steroids in vesicles.** Steroids are lipids made by smooth-ER (and mitochondrial) enzymes; they diffuse out, no vesicles.
- **Reading latency as activation.** Activity that rises after detergent means the enzyme was sealed inside a membrane compartment.

<!-- yield:low -->
- Low-yield extras: glucose-6-phosphatase marks the ER fraction and lactate dehydrogenase the cytosol; cytochalasin blocks actin polymerization and phalloidin stabilizes actin filaments; tumors are typed by their intermediate filaments (keratin = epithelial origin)
<!-- /yield -->`
    }
  ]
};
