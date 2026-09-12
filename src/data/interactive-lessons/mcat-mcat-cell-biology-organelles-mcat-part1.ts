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
| Nucleus | 2 (envelope continuous with ER) | DNA storage, replication, transcription, splicing | Nuclear pores gate traffic; nucleolus = rRNA synthesis + ribosome assembly (not membrane-bound) |
| Rough ER | 1 | Synthesis of secreted, membrane, and lysosomal proteins; N-glycosylation begins | "Rough" = bound ribosomes; abundant in plasma cells, pancreatic acinar cells |
| Smooth ER | 1 | Lipid/steroid synthesis, detoxification (cytochrome P450), Ca$^{2+}$ storage | Abundant in hepatocytes, adrenal cortex, gonads; SR = muscle's Ca$^{2+}$ tank |
| Golgi | 1 (stacked cisternae) | Modifies, sorts, ships (cis face receives from ER, trans face ships) | O-glycosylation; mannose-6-phosphate tagging of lysosomal enzymes |
| Lysosome | 1 | Acid hydrolases digest macromolecules; autophagy endpoint | V-type H$^+$ ATPase keeps pH ~4.5-5; enzymes work poorly if they leak out |
| Peroxisome | 1 | Beta-oxidation of **very-long-chain** fatty acids; H$_2$O$_2$ metabolism | Catalase: 2 H$_2$O$_2$ → 2 H$_2$O + O$_2$; plasmalogen synthesis |
| Mitochondrion | 2 | ATP by oxidative phosphorylation; TCA cycle (matrix); apoptosis trigger | Own circular DNA + 70S-like ribosomes; maternal inheritance |
| Ribosome | 0 | Translation | Free = cytosolic proteins; ER-bound = secretory pathway (same ribosome pool!) |
| Cytoskeleton | 0 | Shape, transport, division | Microfilaments (actin), intermediate filaments, microtubules |

> **Not membrane-bound**: ribosomes, nucleolus, centrioles, proteasomes. A passage calling the nucleolus an organelle "compartment" is testing exactly this.

### Cell Fractionation — Taking the Cell Apart

1. **Homogenize** cells gently (osmotic or mechanical) → a slurry of organelles
2. **Differential centrifugation** — spin at increasing speeds; bigger/denser things pellet first:

| Spin | Pellet contains |
|------|------------------|
| Low speed (~1,000 g) | Nuclei, unbroken cells |
| Medium (~10,000-20,000 g) | Mitochondria, lysosomes, peroxisomes |
| High (~100,000 g) | "Microsomes" (ER fragments), small vesicles |
| Very high, long | Ribosomes, large complexes |

3. **Density-gradient (equilibrium) centrifugation** separates the mixed medium-speed pellet by buoyant density
4. **Marker enzymes** identify fractions: catalase = peroxisome; acid phosphatase = lysosome; succinate dehydrogenase/cytochrome oxidase = mitochondria; glucose-6-phosphatase = ER; lactate dehydrogenase = cytosol`
    },
    {
      id: 'org1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Compartments & Fractionation** 🎯`,
      exercise: {
        questions: [
          {
            question: `A liver homogenate fraction shows high catalase activity and little succinate dehydrogenase or acid phosphatase. The fraction is enriched in:`,
            options: [`Peroxisomes`, `Mitochondria`, `Lysosomes`, `Rough ER`],
            correctAnswer: 0,
            explanation: `Marker-enzyme logic is pure elimination: catalase is the peroxisomal signature (H$_2$O$_2$ disposal), succinate dehydrogenase marks the mitochondrial inner membrane, and acid phosphatase marks lysosomes. Because mitochondria, lysosomes, and peroxisomes co-pellet at medium speed, marker enzymes — not centrifugation speed — are what distinguish them; a density gradient would then separate them physically.`
          },
          {
            question: `Cells of the adrenal cortex, which secrete steroid hormones, are dominated by which organelle?`,
            options: [`Smooth ER — the site of steroid synthesis from cholesterol`, `Rough ER — because hormones are proteins`, `Lysosomes — to degrade cholesterol`, `A large Golgi devoted to packaging steroid vesicles`],
            correctAnswer: 0,
            explanation: `Steroids are lipids built by smooth-ER (and mitochondrial) enzymes, not proteins — so no rough ER, no signal sequence, and critically no secretory vesicles: steroids diffuse out across the membrane as they are made (which is also why steroid-secreting cells cannot store hormone and why blood levels track synthesis rate). Rough-ER-dominated cells (plasma cells, acinar cells) secrete proteins instead — form follows function on organelle questions.`
          },
          {
            question: `Lysosomal enzymes that leak into the cytosol cause relatively little immediate damage. The main protective factor is that:`,
            options: [`Acid hydrolases have sharp acidic pH optima and are largely inactive at the cytosol's pH of ~7.2`, `The cytosol contains no substrates for hydrolases`, `Cytosolic ATP instantly repels the enzymes`, `Leaked enzymes are re-imported by the lysosome within seconds`],
            correctAnswer: 0,
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
| Microfilaments | Actin (polar, ATP) | ~7 nm | Contractile ring, microvilli, cell crawling, muscle (with myosin) | Cytochalasin blocks polymerization; phalloidin stabilizes |
| Intermediate filaments | Keratin, vimentin, lamins, desmin (nonpolar) | ~10 nm | Tensile strength, nuclear lamina, desmosome anchoring | Cell-type specific — pathologists type tumors by IF (keratin = epithelial origin) |
| Microtubules | Alpha/beta-tubulin dimers (polar, GTP) | ~25 nm | Vesicle highways, spindle, cilia/flagella, centrioles | Dynamic instability; colchicine/taxol targets |

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
      id: 'org1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Cytoskeleton & EM Logic** 🎯`,
      exercise: {
        questions: [
          {
            question: `In a fresh homogenate, acid phosphatase activity is low; after adding a mild detergent, measured activity rises five-fold with no new enzyme added. This latency indicates that:`,
            options: [`The enzyme is enclosed in a membrane compartment that normally separates it from its substrate`, `Detergent is a direct allosteric activator of acid phosphatase`, `The enzyme was synthesized in response to detergent`, `Acid phosphatase requires lipids as substrates`],
            correctAnswer: 0,
            explanation: `Substrate added to the assay cannot reach an enzyme sealed inside intact lysosomes; lysing the membrane with detergent (or freeze-thaw, or aging) unmasks full activity. De Duve used exactly this reasoning to infer a new organelle before anyone had imaged it. Latency-relieved-by-membrane-disruption is the standard experimental fingerprint of "this enzyme lives inside a compartment."`
          },
          {
            question: `A patient has chronic respiratory infections, immotile sperm, and organs mirrored left-to-right. The underlying molecular defect is most likely in:`,
            options: [`Axonemal dynein — the motor that powers ciliary and flagellar bending`, `Actin polymerization`, `Keratin intermediate filaments`, `Kinesin-based vesicle transport`],
            correctAnswer: 0,
            explanation: `The triad of Kartagener syndrome (primary ciliary dyskinesia) unites three cilia jobs: airway mucociliary clearance (infections), the sperm flagellum (infertility), and embryonic nodal cilia whose beating establishes left-right asymmetry (situs inversus — ~50% of patients, since without ciliary flow the axis is randomized). All depend on dynein arms sliding adjacent doublets of the 9+2 axoneme.`
          }
        ]
      }
    },
    {
      id: 'org1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Compartments buy incompatible chemistry: acidic lysosome, oxidizing ER lumen (disulfides), proton-tight mitochondrial inner membrane
- Membrane count: double = nucleus, mitochondria; single = ER, Golgi, lysosome, peroxisome; none = ribosome, nucleolus, centriole, proteasome
- Cell specialization is organelle census: plasma cell = rough ER; hepatocyte/steroid gland = smooth ER; steroid cells secrete by diffusion, not vesicles
- Differential centrifugation orders by size/density (nuclei → mitochondria/lysosomes/peroxisomes → microsomes → ribosomes); marker enzymes name the fraction (catalase, acid phosphatase, SDH, G6Pase)
- Enzyme latency (activity unmasked by detergent) = the enzyme is inside a membrane compartment — De Duve's lysosome logic
- Cytoskeleton: actin (7 nm, contraction/crawling), intermediate filaments (10 nm, strength, cell-type markers), microtubules (25 nm, transport highways, spindle, 9+2 cilia)
- Motors: kinesin (+, anterograde), dynein (−, retrograde and ciliary beat — Kartagener), myosin (actin)`
    }
  ]
};
