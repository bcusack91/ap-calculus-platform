const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

function escapeStr(s) {
  if (!s) return '';
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ');
}

function generateMCSection(slug, partNum, id, questions) {
  const questionStrs = questions.map(q => `          {
            question: '${escapeStr(q.q)}',
            options: [
              '${escapeStr(q.opts[0])}',
              '${escapeStr(q.opts[1])}',
              '${escapeStr(q.opts[2])}',
              '${escapeStr(q.opts[3])}'
            ],
            correctAnswer: ${q.correct},
            explanation: '${escapeStr(q.explanation)}'
          }`);
  
  return `    {
      id: '${slug.substring(0, 5)}${partNum}-${id}',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
${questionStrs.join(',\n')}
        ]
      }
    }`;
}

function generateDropdownSection(slug, partNum, dd) {
  const dropdownStrs = dd.items.map(item => `          {
            label: '${escapeStr(item.label)}',
            options: [${item.options.map(o => `'${escapeStr(o)}'`).join(', ')}]
          }`);
  
  const correctStrs = dd.items.map(item => `'${escapeStr(item.correct)}'`);
  const hintStrs = dd.hints ? dd.hints.map((h, i) => `        hint${i + 1}: '${escapeStr(h)}'`).join(',\n') : '';
  
  return `    {
      id: '${slug.substring(0, 5)}${partNum}-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Fill in the Blanks** 🔍
      \`,
      exercise: {
        dropdowns: [
${dropdownStrs.join(',\n')}
        ],
        correctAnswers: [${correctStrs.join(', ')}],
${hintStrs}${hintStrs ? ',' : ''}
        explanation: '${escapeStr(dd.explanation)}'
      }
    }`;
}

function slugToTitle(slug) {
  return slug.replace(/-ochem$/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
    .replace(/Nmr/g, 'NMR').replace(/Ir /g, 'IR ').replace(/Uv /g, 'UV-')
    .replace(/Dna/g, 'DNA').replace(/Eas/g, 'EAS').replace(/Sn /g, 'SN ');
}

function generateFile(topic, partIdx) {
  const part = topic.parts[partIdx];
  const partNum = partIdx + 1;
  const exportName = `${topic.exportBase}Part${partNum}Data`;
  const topicTitle = slugToTitle(topic.slug);
  
  let sections = [];
  
  // Intro text section  
  sections.push(`    {
      id: '${topic.slug.substring(0, 5)}${partNum}-intro',
      type: 'text' as const,
      content: \`
# ${partIdx === 0 ? '⚗️ ' + topicTitle : part.title}

**Part ${partNum} of 7 — ${part.title}**

${part.textSections[0].body}
      \`
    }`);
  
  // First MC quiz
  if (part.mcQuestions.length > 0) {
    const halfQ = Math.ceil(part.mcQuestions.length / 2);
    sections.push(generateMCSection(topic.slug, partNum, 'quiz1', part.mcQuestions.slice(0, halfQ)));
  }
  
  // Detail text section
  sections.push(`    {
      id: '${topic.slug.substring(0, 5)}${partNum}-detail',
      type: 'text' as const,
      content: \`
${part.textSections[1].body}
      \`
    }`);
  
  // Second MC quiz  
  if (part.mcQuestions.length > 1) {
    const halfQ = Math.ceil(part.mcQuestions.length / 2);
    const rest = part.mcQuestions.slice(halfQ);
    if (rest.length > 0) {
      sections.push(generateMCSection(topic.slug, partNum, 'quiz2', rest));
    }
  }
  
  // Dropdown
  if (part.dropdowns) {
    sections.push(generateDropdownSection(topic.slug, partNum, part.dropdowns));
  }
  
  return `export const ${exportName} = {
  topicSlug: '${topic.slug}',
  sections: [
${sections.join(',\n')}
  ]
}
`;
}

// Organic Chemistry - 25 Topics
const ochemTopics = [
  { slug: 'atomic-structure-bonding-ochem', exportBase: 'oChemAtomicBonding', partTopics: ['Atomic Orbitals & Electron Configuration', 'Lewis Structures & Formal Charge', 'Hybridization', 'Molecular Orbital Theory', 'Bond Polarity & Dipole Moments', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['Electron configuration determines bonding', 'Valence electrons: outermost shell electrons', 'Octet rule: atoms tend to have 8 valence electrons', 'Carbon has 4 valence electrons → forms 4 bonds'],
      ['Lewis structures show bonding and lone pairs', 'Formal charge = valence e⁻ - lone pair e⁻ - ½ bonding e⁻', 'Minimize formal charges for best structure', 'Resonance structures: delocalized electrons'],
      ['sp³ hybridization: 4 bonds, tetrahedral (109.5°)', 'sp² hybridization: 3 bonds, trigonal planar (120°)', 'sp hybridization: 2 bonds, linear (180°)', 'Hybridization determines molecular geometry'],
      ['Bonding MOs: lower energy, constructive overlap', 'Antibonding MOs: higher energy, destructive overlap', 'Bond order = (bonding e⁻ - antibonding e⁻) / 2', 'MO theory explains paramagnetism of O₂'],
      ['Electronegativity difference determines polarity', 'Dipole moment: μ = q × d', 'Polar bonds in symmetric molecules can cancel', 'Molecular polarity affects physical properties'],
      ['Drawing Lewis structures and assigning formal charges', 'Determining hybridization from structure', 'Predicting molecular geometry', 'Calculating bond order from MO diagrams'],
      ['Bonding fundamentals underpin all organic chemistry', 'Hybridization determines geometry and reactivity', 'Polarity influences intermolecular forces', 'Review: structure determines properties']
    ] },
  { slug: 'molecular-representations', exportBase: 'oChemMolRep', partTopics: ['Condensed & Skeletal Structures', 'Functional Groups', 'Constitutional Isomers', 'Degrees of Unsaturation', 'Intermolecular Forces', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['Condensed formulas: CH₃CH₂OH', 'Skeletal (line-angle) structures: zigzag lines', 'Each vertex = carbon, hydrogens are implied', 'Wedge-dash notation for 3D representation'],
      ['Functional group determines reactivity', 'Hydroxyl (-OH): alcohols', 'Carbonyl (C=O): aldehydes, ketones, carboxylic acids', 'Amino (-NH₂): amines; Halide (-X): alkyl halides'],
      ['Constitutional (structural) isomers: same formula, different connectivity', 'Example: C₄H₁₀ → butane and isobutane', 'More carbons → more possible isomers', 'Isomers have different physical and chemical properties'],
      ['Degrees of unsaturation (DoU) = (2C + 2 + N - H - X) / 2', '1 DoU = one ring OR one double bond', '2 DoU = two double bonds, one triple bond, or ring + double bond', 'Benzene ring = 4 DoU'],
      ['London dispersion forces: all molecules, increases with size', 'Dipole-dipole: polar molecules', 'Hydrogen bonding: N-H, O-H, F-H (strongest IMF)', 'IMFs determine boiling point, solubility, viscosity'],
      ['Drawing and interpreting skeletal structures', 'Identifying functional groups', 'Calculating degrees of unsaturation', 'Predicting physical properties from structure'],
      ['Molecular representation is the language of organic chemistry', 'Functional groups predict reactivity patterns', 'Isomers demonstrate structure-property relationships', 'Review: reading and drawing organic structures']
    ] },
  { slug: 'acids-bases-organic', exportBase: 'oChemAcidsBases', partTopics: ['Brønsted-Lowry Acids & Bases', 'pKa & Acid Strength', 'Factors Affecting Acidity', 'Lewis Acids & Bases', 'Predicting Acid-Base Reactions', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['Brønsted acid: proton (H⁺) donor', 'Brønsted base: proton acceptor', 'Conjugate acid-base pairs differ by one proton', 'Stronger acid → weaker conjugate base'],
      ['Ka = [H⁺][A⁻]/[HA]; pKa = -log(Ka)', 'Lower pKa = stronger acid', 'pKa scale: HI (~-10) to CH₄ (~50)', 'Equilibrium favors the weaker acid/base side'],
      ['Electronegativity: more EN atom stabilizes negative charge → stronger acid', 'Atom size: larger atoms stabilize charge → stronger acid (HI > HF)', 'Resonance: delocalization stabilizes conjugate base → stronger acid', 'Inductive effects: electron-withdrawing groups increase acidity'],
      ['Lewis acid: electron pair acceptor', 'Lewis base: electron pair donor', 'BF₃ is a Lewis acid (empty p orbital)', 'Nucleophiles are Lewis bases; electrophiles are Lewis acids'],
      ['Equilibrium favors formation of weaker acid + weaker base', 'Compare pKa values to predict direction', 'Strong acid + strong base → complete reaction', 'Curved arrow notation shows electron flow'],
      ['Ranking acids by pKa', 'Predicting products of acid-base reactions', 'Drawing curved arrow mechanisms', 'Analyzing effects of substituents on acidity'],
      ['Acid-base chemistry is foundational for mechanisms', 'pKa determines proton transfer direction', 'Lewis acid/base concept is broader and essential', 'Review: acidity trends and predictions']
    ] },
  { slug: 'alkanes-cycloalkanes', exportBase: 'oChemAlkanes', partTopics: ['Nomenclature', 'Conformational Analysis', 'Cycloalkane Conformations', 'Ring Strain', 'Physical Properties', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['IUPAC naming: find longest chain, number from end nearest substituent', 'Prefixes: meth-, eth-, prop-, but-, pent-, hex-', 'Substituents listed alphabetically', 'Cycloalkanes: prefix "cyclo-" before alkane name'],
      ['Newman projections: view along C-C bond', 'Staggered: 60° dihedral angle (more stable)', 'Eclipsed: 0° dihedral angle (less stable)', 'Anti conformation: substituents 180° apart (most stable)'],
      ['Cyclohexane: chair conformation is most stable', 'Axial and equatorial positions', 'Ring flip: converts axial ↔ equatorial', 'Large substituents prefer equatorial position (less 1,3-diaxial strain)'],
      ['Cyclopropane: highest ring strain (angle strain 60° vs 109.5°)', 'Cyclobutane: still significant strain', 'Cyclopentane: nearly strain-free', 'Cyclohexane: no angle strain (chair conformation)'],
      ['Boiling point increases with molecular weight', 'Branching decreases boiling point (less surface area)', 'Alkanes are nonpolar → insoluble in water', 'London dispersion forces are primary IMF'],
      ['Naming alkanes and cycloalkanes', 'Drawing Newman projections', 'Analyzing cyclohexane chair conformations', 'Predicting most stable conformations'],
      ['Nomenclature is essential for communication', 'Conformational analysis predicts stability', 'Ring strain affects reactivity', 'Review: alkane naming and conformations']
    ] },
  { slug: 'stereochemistry-chirality', exportBase: 'oChemStereo', partTopics: ['Chirality & Stereocenters', 'R/S Configuration', 'Optical Activity', 'Stereoisomer Types', 'Fischer Projections', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['Chiral: non-superimposable on its mirror image', 'Stereocenter: carbon with 4 different substituents', 'Achiral: superimposable on its mirror image', 'Plane of symmetry → achiral molecule'],
      ['Cahn-Ingold-Prelog priority rules: atomic number', 'R configuration: clockwise (priority 1→2→3 with 4 pointing back)', 'S configuration: counterclockwise', 'Priority: higher atomic number = higher priority'],
      ['Optical activity: rotating plane-polarized light', 'Enantiomers rotate light equal amounts but opposite directions', '(+) dextrorotatory (clockwise); (-) levorotatory (counterclockwise)', 'Racemic mixture: equal R and S → no net rotation'],
      ['Enantiomers: mirror images, not superimposable', 'Diastereomers: stereoisomers that are NOT mirror images', 'Meso compounds: contain stereocenters but have internal plane of symmetry', 'n stereocenters → max 2ⁿ stereoisomers'],
      ['Fischer projections: horizontal = coming toward you, vertical = going away', 'Used especially for sugars and amino acids', 'Rotating 90° inverts configuration', 'Switching two groups inverts R/S'],
      ['Assigning R/S configuration to stereocenters', 'Identifying stereoisomer relationships', 'Determining optical activity', 'Drawing and interpreting Fischer projections'],
      ['Stereochemistry determines biological activity', 'Enantiomers can have very different biological effects', 'Understanding 3D structure is crucial in drug design', 'Review: chirality, configuration, and stereoisomers']
    ] },
  { slug: 'nucleophilic-substitution', exportBase: 'oChemSN', partTopics: ['Introduction to Substitution', 'SN2 Mechanism', 'SN1 Mechanism', 'Substrate & Nucleophile Effects', 'Solvent & Leaving Group Effects', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['Nucleophilic substitution: nucleophile replaces leaving group', 'Nu:⁻ + R-LG → R-Nu + LG:⁻', 'Two mechanisms: SN1 and SN2', 'Mechanism depends on substrate, nucleophile, solvent, leaving group'],
      ['SN2: one-step, concerted mechanism', 'Rate = k[substrate][nucleophile] (bimolecular)', 'Backside attack → inversion of configuration (Walden inversion)', 'Best with: methyl/primary substrates, strong nucleophiles, polar aprotic solvents'],
      ['SN1: two-step mechanism via carbocation intermediate', 'Step 1: leaving group departs (rate-determining)', 'Step 2: nucleophile attacks carbocation', 'Rate = k[substrate] (unimolecular); racemization at stereocenter'],
      ['SN2 favored: methyl > primary > secondary >> tertiary (steric hindrance)', 'SN1 favored: tertiary > secondary >> primary (carbocation stability)', 'Strong nucleophiles favor SN2; weak nucleophiles favor SN1', 'Nucleophilicity: I⁻ > Br⁻ > Cl⁻ > F⁻ (in polar aprotic)'],
      ['Polar aprotic solvents favor SN2 (DMSO, DMF, acetone)', 'Polar protic solvents favor SN1 (water, alcohols)', 'Good leaving groups: weak bases (I⁻ > Br⁻ > Cl⁻)', 'Tosylates (OTs) and mesylates (OMs) are excellent leaving groups'],
      ['Predicting SN1 vs SN2 from reaction conditions', 'Drawing mechanisms with curved arrows', 'Predicting stereochemical outcomes', 'Analyzing substrate, nucleophile, solvent, and leaving group effects'],
      ['Substitution reactions are foundational in synthesis', 'SN1 and SN2 have opposite preferences', 'Stereochemistry is a key diagnostic tool', 'Review: predicting substitution outcomes']
    ] },
  { slug: 'elimination-reactions', exportBase: 'oChemElim', partTopics: ['Introduction to Elimination', 'E2 Mechanism', 'E1 Mechanism', 'Zaitsev vs Hofmann', 'Substitution vs Elimination', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['Elimination: removal of H and leaving group → alkene', 'Base removes a proton; leaving group departs', 'Two mechanisms: E1 and E2', 'Competes with substitution (SN1/SN2)'],
      ['E2: one-step, concerted (bimolecular)', 'Rate = k[substrate][base]', 'Requires anti-periplanar geometry (H and LG 180° apart)', 'Strong, bulky bases favor E2 (t-BuOK, DBU)'],
      ['E1: two-step via carbocation (unimolecular)', 'Step 1: leaving group departs → carbocation', 'Step 2: base removes adjacent proton', 'Rate = k[substrate]; favored by weak bases, polar protic solvents'],
      ['Zaitsev\'s rule: more substituted alkene is major product (more stable)', 'Hofmann product: less substituted alkene (with bulky base)', 'E2 with small base → Zaitsev product', 'E2 with bulky base (t-BuOK) → Hofmann product'],
      ['Strong base + primary substrate → SN2 or E2', 'Strong bulky base → E2 favored over SN2', 'Weak base + tertiary substrate → SN1 or E1', 'Temperature increase favors elimination over substitution'],
      ['Predicting elimination products', 'Distinguishing E1 from E2', 'Choosing between substitution and elimination', 'Drawing mechanisms and predicting stereochemistry'],
      ['Elimination competes with substitution', 'Reaction conditions determine which pathway dominates', 'E2 requires specific geometry', 'Review: SN1/SN2/E1/E2 decision flowchart']
    ] },
  { slug: 'alkenes-reactions', exportBase: 'oChemAlkenes', partTopics: ['Alkene Structure & Stability', 'Electrophilic Addition', 'Markovnikov & Anti-Markovnikov', 'Hydroboration-Oxidation', 'Oxidation & Reduction', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['Alkenes: C=C double bond (sp² hybridized)', 'Degree of unsaturation: one for each C=C or ring', 'Stability: more substituted = more stable', 'E/Z isomerism: priority-based naming of alkene geometry'],
      ['Electrophilic addition: π electrons attack electrophile', 'Step 1: electrophile adds to less substituted carbon → carbocation', 'Step 2: nucleophile attacks carbocation', 'Common electrophiles: HX, H₂O/H⁺, X₂'],
      ['Markovnikov\'s rule: H adds to carbon with more H\'s', 'Carbocation stability determines regiochemistry', 'Anti-Markovnikov: HBr/peroxides (radical addition)', 'Peroxides reverse the selectivity via radical mechanism'],
      ['Hydroboration-oxidation: anti-Markovnikov, syn addition', 'BH₃ adds B to less substituted carbon', 'Oxidation with H₂O₂/NaOH gives anti-Markovnikov alcohol', 'Syn addition: H and OH add to same face'],
      ['Catalytic hydrogenation: H₂/Pd → alkane (syn addition)', 'Ozonolysis: O₃ then Zn/H₂O cleaves C=C → carbonyl compounds', 'Dihydroxylation: OsO₄ → cis-diol (syn addition)', 'Epoxidation: mCPBA → epoxide'],
      ['Predicting addition products and regiochemistry', 'Drawing mechanisms for electrophilic addition', 'Comparing Markovnikov vs anti-Markovnikov outcomes', 'Designing multi-step syntheses with alkenes'],
      ['Alkenes are versatile synthetic intermediates', 'Regiochemistry and stereochemistry are key considerations', 'Multiple reagents give different products from same alkene', 'Review: alkene reaction summary table']
    ] },
  { slug: 'alkynes-synthesis', exportBase: 'oChemAlkynes', partTopics: ['Alkyne Structure & Properties', 'Alkyne Acidity', 'Addition to Alkynes', 'Reduction of Alkynes', 'Alkyne Synthesis', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['Alkynes: C≡C triple bond (sp hybridized, linear)', 'Terminal alkynes: H-C≡C-R', 'Internal alkynes: R-C≡C-R', 'Bond strength: triple > double > single'],
      ['Terminal alkynes are weakly acidic (pKa ~25)', 'NaNH₂ deprotonates terminal alkynes → acetylide anion', 'Acetylide is a good nucleophile and base', 'Alkylation: R-C≡C⁻ + R\'-X → R-C≡C-R\' (SN2)'],
      ['HX addition: follows Markovnikov\'s rule', '1 equivalent HX → vinyl halide', '2 equivalents HX → geminal dihalide', 'Hydration: H₂O/H⁺/HgSO₄ → ketone (Markovnikov)'],
      ['H₂/Lindlar catalyst → cis-alkene (syn addition, partial reduction)', 'Na/NH₃(l) → trans-alkene (anti addition, dissolving metal)', 'H₂/Pd → alkane (full reduction)', 'Selective reduction is a powerful synthetic tool'],
      ['Dehydrohalogenation: 2 equivalents of base from dihalide → alkyne', 'Double elimination: geminal or vicinal dihalide → alkyne', 'Acetylide alkylation builds carbon-carbon bonds', 'Retrosynthetic analysis for alkyne targets'],
      ['Predicting products of alkyne reactions', 'Designing syntheses using acetylide chemistry', 'Choosing selective reduction conditions', 'Multi-step synthesis problems'],
      ['Alkynes are versatile functional groups', 'Acetylide alkylation forms C-C bonds', 'Selective reduction gives either cis or trans alkene', 'Review: alkyne reactions and synthesis']
    ] },
  { slug: 'radical-reactions', exportBase: 'oChemRadicals', partTopics: ['Introduction to Radicals', 'Radical Halogenation', 'Selectivity in Halogenation', 'Radical Addition to Alkenes', 'Radical Stability', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['Radicals: species with unpaired electrons', 'Homolytic cleavage: bond breaks evenly → two radicals', 'Radical reactions have three stages: initiation, propagation, termination', 'Radicals are highly reactive and short-lived'],
      ['Initiation: light or heat breaks X₂ → 2X•', 'Propagation step 1: X• + R-H → R• + HX', 'Propagation step 2: R• + X₂ → R-X + X•', 'Termination: any two radicals combine'],
      ['Chlorination: low selectivity (3°:2°:1° ≈ 5:4:1)', 'Bromination: high selectivity (3°:2°:1° ≈ 1600:82:1)', 'Bromine is more selective because the H-abstraction step is endothermic', 'NBS: N-bromosuccinimide for allylic/benzylic bromination'],
      ['Anti-Markovnikov addition of HBr with peroxides', 'Radical adds to less substituted carbon (more stable radical at more substituted)', 'Only works with HBr (not HCl or HI)', 'Polymerization: radical chain growth of alkenes'],
      ['Radical stability: 3° > 2° > 1° > methyl (same as carbocations)', 'Allylic and benzylic radicals: stabilized by resonance', 'Bond dissociation energy (BDE): energy to break bond homolytically', 'Lower BDE = easier radical formation'],
      ['Drawing radical mechanisms', 'Predicting halogenation products and selectivity', 'Comparing radical vs ionic pathways', 'Analyzing BDE data'],
      ['Radical reactions follow distinct mechanistic patterns', 'Selectivity depends on halogen choice', 'Radical stability parallels carbocation stability', 'Review: radical halogenation and addition']
    ] },
  { slug: 'alcohols-ethers', exportBase: 'oChemAlcohols', partTopics: ['Alcohol Nomenclature & Properties', 'Alcohol Synthesis', 'Alcohol Reactions', 'Ether Nomenclature & Synthesis', 'Ether Reactions', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['Alcohols: R-OH; named with -ol suffix', 'Classification: primary (1°), secondary (2°), tertiary (3°)', 'Hydrogen bonding → higher boiling points than alkanes', 'Acidity: pKa ~16-18 (weaker than water, stronger than alkanes)'],
      ['Grignard reaction: RMgBr + carbonyl → alcohol', 'Hydration of alkenes: Markovnikov (H₃O⁺) or anti-Markovnikov (BH₃)', 'Reduction of carbonyls: NaBH₄ or LiAlH₄', 'Hydrolysis of esters gives alcohols'],
      ['Dehydration: H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°)', 'Oxidation: PCC (1° → aldehyde), Jones/CrO₃ (1° → carboxylic acid, 2° → ketone)', 'Conversion to alkyl halides: HX, PBr₃, SOCl₂', '3° alcohols cannot be oxidized'],
      ['Ethers: R-O-R; named as alkoxy + alkane', 'Williamson ether synthesis: alkoxide + primary alkyl halide (SN2)', 'Ethers are relatively unreactive (good solvents)', 'Crown ethers: cyclic ethers that complex cations'],
      ['Acid-catalyzed cleavage: HI or HBr cleaves ethers', 'Epoxides: strained three-membered ring ethers', 'Epoxide ring-opening: nucleophilic attack at less substituted carbon (base) or more substituted (acid)', 'Epoxides are much more reactive than simple ethers'],
      ['Predicting alcohol oxidation products', 'Designing Grignard synthesis strategies', 'Comparing alcohol reaction pathways', 'Analyzing epoxide ring-opening regiochemistry'],
      ['Alcohols are versatile functional groups', 'Oxidation state changes determine product', 'Ethers as solvents and protecting groups', 'Review: alcohol and ether transformations']
    ] },
  { slug: 'infrared-mass-spectrometry', exportBase: 'oChemIRMS', partTopics: ['Introduction to Spectroscopy', 'Infrared (IR) Spectroscopy', 'Key IR Absorptions', 'Mass Spectrometry', 'Fragmentation Patterns', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['Spectroscopy: using electromagnetic radiation to determine structure', 'Four main techniques: IR, MS, ¹H NMR, ¹³C NMR', 'Each gives different structural information', 'Combined data reveals complete molecular structure'],
      ['IR measures bond vibrations (stretching and bending)', 'Frequency measured in wavenumbers (cm⁻¹)', 'Fingerprint region: below 1500 cm⁻¹ (complex, unique)', 'Diagnostic region: above 1500 cm⁻¹ (functional groups)'],
      ['O-H (alcohol): 3200-3600 cm⁻¹ (broad)', 'N-H (amine): 3300-3500 cm⁻¹', 'C=O (carbonyl): 1680-1750 cm⁻¹ (strong, sharp)', 'C≡C (alkyne): ~2150 cm⁻¹; C≡N (nitrile): ~2250 cm⁻¹'],
      ['Mass spectrometry: measures mass-to-charge ratio (m/z)', 'Molecular ion peak (M⁺): gives molecular weight', 'M+1 peak: ¹³C isotope', 'M+2 peak: Cl (35/37) or Br (79/81) isotope pattern'],
      ['Base peak: most abundant fragment', 'Common losses: -15 (CH₃), -18 (H₂O), -28 (CO), -29 (CHO)', 'McLafferty rearrangement: γ-hydrogen transfer', 'Nitrogen rule: odd molecular weight suggests nitrogen'],
      ['Interpreting IR spectra to identify functional groups', 'Analyzing mass spectra for molecular weight and fragments', 'Combining IR and MS data', 'Practice with unknown identification'],
      ['Spectroscopy is essential for structure determination', 'IR identifies functional groups', 'MS gives molecular weight and formula clues', 'Review: interpreting spectra systematically']
    ] },
  { slug: 'nmr-spectroscopy', exportBase: 'oChemNMR', partTopics: ['¹H NMR Basics', 'Chemical Shift', 'Integration & Splitting', '¹³C NMR', 'Structure Determination', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['NMR: nuclei in magnetic field absorb radiofrequency energy', 'Equivalent protons give one signal', 'Number of signals = number of unique proton environments', 'Chemical shift (δ): position of signal in ppm'],
      ['TMS (tetramethylsilane) = 0 ppm reference', 'Alkyl H: 0.8-1.5 ppm', 'Allylic/adjacent to C=O: 2.0-2.5 ppm', 'Aromatic H: 6.5-8.0 ppm; Aldehyde H: 9-10 ppm; Carboxylic acid: 10-12 ppm'],
      ['Integration: area under peak proportional to number of H\'s', 'Splitting (n+1 rule): n equivalent neighbors → n+1 peaks', 'Doublet: 1 neighbor; Triplet: 2 neighbors; Quartet: 3 neighbors', 'Coupling constant (J): distance between split peaks in Hz'],
      ['¹³C NMR: one signal per unique carbon environment', 'No splitting in broadband-decoupled ¹³C NMR', 'DEPT: distinguishes CH₃, CH₂, CH, and quaternary C', 'Chemical shifts span 0-220 ppm'],
      ['Step 1: determine molecular formula and degrees of unsaturation', 'Step 2: analyze IR for functional groups', 'Step 3: count ¹H NMR signals, integration, splitting', 'Step 4: assemble fragments into consistent structure'],
      ['Predicting NMR spectra from structures', 'Determining structures from NMR data', 'Combining IR, MS, and NMR data', 'Practice problems with unknown identification'],
      ['NMR is the most powerful structural tool', 'Chemical shift indicates electronic environment', 'Splitting pattern reveals connectivity', 'Review: systematic structure determination']
    ] },
  { slug: 'conjugated-systems-dienes', exportBase: 'oChemConjugated', partTopics: ['Conjugation & Stability', '1,2- vs 1,4-Addition', 'Diels-Alder Reaction', 'Molecular Orbital Theory of Dienes', 'UV-Vis Spectroscopy', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['Conjugated dienes: alternating single and double bonds', 'Conjugation stabilizes molecules through delocalization', 's-cis and s-trans conformations', 'Conjugated dienes are more stable than isolated dienes'],
      ['1,2-addition: electrophile adds across one double bond (kinetic product)', '1,4-addition: electrophile adds across entire system (thermodynamic product)', 'Low temperature favors kinetic (1,2) product', 'High temperature favors thermodynamic (1,4) product'],
      ['Diels-Alder: diene + dienophile → cyclohexene (pericyclic)', 'Concerted, one-step, stereospecific', 'Diene must be in s-cis conformation', 'Electron-rich diene + electron-poor dienophile → fastest reaction'],
      ['Conjugation extends π system across multiple atoms', 'HOMO of diene interacts with LUMO of dienophile', 'Symmetry-allowed thermal [4+2] cycloaddition', 'Frontier molecular orbital theory explains selectivity'],
      ['UV-Vis spectroscopy: measures π → π* transitions', 'λmax increases with more conjugation', 'Colored compounds absorb visible light', 'Used to determine extent of conjugation'],
      ['Drawing Diels-Alder products', 'Predicting kinetic vs thermodynamic products', 'Retrosynthetic analysis using Diels-Alder', 'Interpreting UV-Vis spectra'],
      ['Conjugation is key to reactivity and color', 'Diels-Alder is a powerful ring-forming reaction', 'Kinetic vs thermodynamic control is a major theme', 'Review: conjugated systems and pericyclic reactions']
    ] },
  { slug: 'aromatic-compounds-benzene', exportBase: 'oChemAromatic', partTopics: ['Aromaticity & Hückel Rule', 'Benzene Structure', 'Nomenclature of Aromatics', 'Properties of Aromatic Compounds', 'Aromatic vs Antiaromatic', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['Hückel\'s rule: planar, cyclic, conjugated, 4n+2 π electrons → aromatic', 'Aromatic compounds are exceptionally stable', 'n=0: 2 π electrons; n=1: 6 π electrons; n=2: 10 π electrons', 'Benzene: 6 π electrons (n=1), aromatic'],
      ['Benzene: six equivalent C-H bonds, all 1.39 Å', 'Two equivalent resonance structures', 'Actual structure is a hybrid (delocalized)', 'Heat of hydrogenation is 150 kJ/mol LESS than expected (resonance energy)'],
      ['Monosubstituted: toluene (methylbenzene), aniline (aminobenzene)', 'Disubstituted: ortho (1,2), meta (1,3), para (1,4)', 'Common names: phenol, anisole, benzaldehyde, benzoic acid', 'Phenyl group: C₆H₅- ; Benzyl group: C₆H₅CH₂-'],
      ['Aromatic compounds undergo substitution, not addition', 'Preserves aromaticity (stable π system)', 'Higher melting/boiling points due to planarity', 'Many aromatic compounds have distinctive odors'],
      ['Antiaromatic: planar, cyclic, conjugated, 4n π electrons → destabilized', 'Cyclobutadiene (4 π electrons): antiaromatic, very unstable', 'Nonaromatic: not fully conjugated, not planar', 'Charged species can be aromatic: cyclopentadienyl anion (6 π e⁻)'],
      ['Determining aromaticity using Hückel\'s rule', 'Counting π electrons in cyclic systems', 'Naming aromatic compounds', 'Comparing aromatic, antiaromatic, and nonaromatic'],
      ['Aromaticity is a fundamental concept in organic chemistry', 'Hückel\'s rule predicts stability', 'Aromatic compounds prefer substitution over addition', 'Review: aromaticity and nomenclature']
    ] },
  { slug: 'electrophilic-aromatic-substitution', exportBase: 'oChemEAS', partTopics: ['EAS Mechanism', 'Halogenation & Nitration', 'Friedel-Crafts Reactions', 'Substituent Effects', 'Multi-Step EAS', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['EAS: electrophile attacks aromatic ring → substitution product', 'Step 1: electrophilic attack → arenium ion (σ complex)', 'Step 2: deprotonation restores aromaticity', 'Aromaticity is preserved throughout'],
      ['Halogenation: Ar-H + X₂/FeX₃ → Ar-X + HX', 'Nitration: Ar-H + HNO₃/H₂SO₄ → Ar-NO₂ + H₂O', 'Sulfonation: Ar-H + SO₃/H₂SO₄ → Ar-SO₃H', 'Lewis acid catalysts generate strong electrophiles'],
      ['Friedel-Crafts alkylation: Ar-H + RCl/AlCl₃ → Ar-R', 'Friedel-Crafts acylation: Ar-H + RCOCl/AlCl₃ → Ar-COR', 'Acylation avoids rearrangement and polyalkylation', 'Deactivated rings don\'t undergo Friedel-Crafts reactions'],
      ['Activating groups: EDG (donate electrons, speed up EAS)', 'Deactivating groups: EWG (withdraw electrons, slow down EAS)', 'ortho/para directors: -OH, -NH₂, -OR, -R, halogens', 'meta directors: -NO₂, -CN, -COOH, -COR, -SO₃H'],
      ['Order of reactions matters for desired product', 'Blocking groups can be used strategically', 'Retrosynthetic analysis for multi-step EAS', 'Clemmensen/Wolff-Kishner reduction: Ar-COR → Ar-CH₂R'],
      ['Predicting EAS products with directing effects', 'Drawing EAS mechanisms', 'Designing multi-step aromatic syntheses', 'Analyzing substituent effects on reactivity'],
      ['EAS is the primary reaction of aromatic compounds', 'Directing effects control regiochemistry', 'Multi-step synthesis requires planning', 'Review: EAS reactions and directing groups']
    ] },
  { slug: 'aldehydes-ketones-reactions', exportBase: 'oChemAldehydesKetones', partTopics: ['Carbonyl Chemistry Introduction', 'Nucleophilic Addition', 'Grignard & Organolithium Reactions', 'Reduction & Oxidation', 'Acetals & Hemiacetals', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['Carbonyl group (C=O): polar, electrophilic carbon', 'Aldehydes: RCHO (terminal); Ketones: RCOR (internal)', 'Nucleophilic addition: Nu⁻ attacks electrophilic C', 'Aldehydes more reactive than ketones (less steric hindrance, less electron donation)'],
      ['Nucleophilic addition mechanism: Nu⁻ attacks C=O → alkoxide → protonate', 'Hydride reduction: NaBH₄ (mild) or LiAlH₄ (strong)', 'Cyanide addition: NaCN → cyanohydrin', 'Wittig reaction: Ph₃P=CHR → alkene'],
      ['Grignard reagent (RMgBr) adds to carbonyls', 'Formaldehyde + RMgBr → primary alcohol', 'Aldehyde + RMgBr → secondary alcohol', 'Ketone + RMgBr → tertiary alcohol'],
      ['NaBH₄: reduces aldehydes and ketones to alcohols', 'LiAlH₄: reduces all carbonyls including esters and amides', 'Oxidation: Tollens (Ag⁺), Jones, PCC', 'Only aldehydes give positive Tollens test (silver mirror)'],
      ['Hemiacetal: one -OH and one -OR on same carbon', 'Acetal: two -OR groups on same carbon (formed in acid, excess alcohol)', 'Acetals are stable under basic conditions → protecting groups', 'Cyclic hemiacetals: found in sugars (glucose, fructose)'],
      ['Predicting nucleophilic addition products', 'Designing Grignard-based syntheses', 'Choosing appropriate reducing agents', 'Using acetals as protecting groups'],
      ['Carbonyl chemistry is central to organic synthesis', 'Nucleophilic addition is the key reaction', 'Grignard reactions form C-C bonds', 'Review: carbonyl reactions summary']
    ] },
  { slug: 'carboxylic-acids-derivatives', exportBase: 'oChemCarboxylicAcids', partTopics: ['Carboxylic Acid Properties', 'Nucleophilic Acyl Substitution', 'Acid Chlorides & Anhydrides', 'Esters & Amides', 'Interconversion of Derivatives', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['Carboxylic acids: RCOOH (pKa ~4-5)', 'Acidity due to resonance stabilization of carboxylate anion', 'Hydrogen bonding → high boiling points, dimer formation', 'Inductive effects of substituents affect acidity'],
      ['Nucleophilic acyl substitution: Nu attacks C=O → tetrahedral intermediate → leaving group departs', 'Different from nucleophilic addition (no leaving group expulsion with aldehydes/ketones)', 'Reactivity order: acid chloride > anhydride > ester > amide', 'Better leaving group = more reactive'],
      ['Acid chloride (RCOCl): most reactive acyl derivative', 'Made from RCOOH + SOCl₂ or (COCl)₂', 'Anhydride (RCO-O-COR): moderately reactive', 'Both react with alcohols → esters, amines → amides'],
      ['Esters (RCOOR\'): moderate reactivity', 'Fischer esterification: RCOOH + R\'OH ⇌ RCOOR\' + H₂O (acid catalyzed)', 'Amides (RCONHR\'): least reactive (nitrogen lone pair resonance)', 'Saponification: ester + NaOH → carboxylate + alcohol'],
      ['Can go "downhill" in reactivity: acid chloride → anhydride → ester → amide', 'Cannot easily go "uphill" without special reagents', 'Reduction: LiAlH₄ reduces esters → 2 alcohols, amides → amines', 'Hydrolysis: each derivative → carboxylic acid + nucleophile'],
      ['Predicting products of acyl substitution', 'Ranking derivative reactivity', 'Designing synthesis routes through acid derivatives', 'Analyzing reaction conditions and mechanisms'],
      ['Carboxylic acid derivatives are interconnected', 'Reactivity reflects leaving group ability', 'These reactions are essential in biochemistry (proteins, fats)', 'Review: acyl substitution reactions']
    ] },
  { slug: 'enolate-chemistry', exportBase: 'oChemEnolate', partTopics: ['Keto-Enol Tautomerism', 'Enolate Formation', 'Aldol Reaction', 'Claisen Condensation', 'Michael & Robinson Reactions', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['Tautomers: keto and enol forms in equilibrium', 'Keto form is usually more stable', 'Enolization catalyzed by acid or base', 'α-hydrogens: H on carbon adjacent to carbonyl'],
      ['Base removes α-hydrogen → enolate (resonance-stabilized carbanion)', 'LDA (lithium diisopropylamide): strong, non-nucleophilic base', 'Kinetic vs thermodynamic enolate', 'Enolates are nucleophilic at carbon'],
      ['Aldol reaction: enolate + carbonyl → β-hydroxy carbonyl', 'Aldol condensation: heat eliminates water → α,β-unsaturated carbonyl', 'Crossed aldol: two different carbonyls (use LDA for control)', 'Intramolecular aldol: forms 5- or 6-membered rings'],
      ['Claisen condensation: ester enolate + ester → β-keto ester', 'Requires at least 2 α-hydrogens on starting ester', 'Dieckmann cyclization: intramolecular Claisen', 'Decarboxylation of β-keto acids → ketones'],
      ['Michael reaction: conjugate (1,4-) addition to enone', 'Michael donor (nucleophile) + Michael acceptor (enone)', 'Robinson annulation: Michael + aldol cyclization → cyclohexenone', 'Powerful method for building six-membered rings'],
      ['Predicting aldol and Claisen products', 'Designing enolate-based syntheses', 'Analyzing crossed reactions for selectivity', 'Retrosynthetic analysis of ring systems'],
      ['Enolate chemistry builds C-C bonds', 'Aldol and Claisen are the most important C-C forming reactions', 'Michael/Robinson extends to complex synthesis', 'Review: enolate reactions in synthesis']
    ] },
  { slug: 'amines-nitrogen-compounds', exportBase: 'oChemAmines', partTopics: ['Amine Classification & Properties', 'Amine Basicity', 'Amine Synthesis', 'Amine Reactions', 'Diazonium Chemistry', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['Amines: nitrogen with lone pair and up to 3 R groups', 'Primary (RNH₂), secondary (R₂NH), tertiary (R₃N)', 'Quaternary ammonium (R₄N⁺): positively charged', 'Amines are bases and nucleophiles'],
      ['Amine basicity: pKb depends on electron density on nitrogen', 'Alkylamines more basic than aniline (aromatic amine)', 'Electron-donating groups increase basicity', 'Electron-withdrawing groups decrease basicity'],
      ['Gabriel synthesis: phthalimide + alkyl halide → primary amine', 'Reductive amination: carbonyl + amine + NaBH₃CN → amine', 'Reduction of nitro groups: catalytic hydrogenation or Sn/HCl', 'Hofmann rearrangement: amide → amine with one fewer carbon'],
      ['Alkylation: amines react with alkyl halides (over-alkylation problem)', 'Acylation: amines react with acid chlorides → amides', 'Sulfonamide formation: amines + sulfonyl chlorides', 'Hinsberg test: distinguishes 1°, 2°, 3° amines'],
      ['Diazotization: primary aromatic amine + HNO₂ → diazonium salt (ArN₂⁺)', 'Sandmeyer reaction: ArN₂⁺ + CuX → ArX (X = Cl, Br, CN)', 'Diazo coupling: ArN₂⁺ + ArOH → azo dye', 'Diazonium salts are versatile synthetic intermediates'],
      ['Predicting amine basicity from structure', 'Designing amine synthesis strategies', 'Drawing diazonium reaction mechanisms', 'Comparing amine reactivity patterns'],
      ['Amines are fundamental in biochemistry (amino acids, neurotransmitters)', 'Basicity and nucleophilicity make amines versatile', 'Diazonium chemistry enables aromatic substitutions', 'Review: amine properties and reactions']
    ] },
  { slug: 'carbohydrates-biochemistry', exportBase: 'oChemCarbs', partTopics: ['Monosaccharide Structure', 'Fischer & Haworth Projections', 'Reactions of Monosaccharides', 'Disaccharides & Glycosidic Bonds', 'Polysaccharides', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['Monosaccharides: polyhydroxy aldehydes (aldoses) or ketones (ketoses)', 'D/L configuration: based on highest-numbered stereocenter', 'Most natural sugars are D-sugars', 'Common: glucose (aldohexose), fructose (ketohexose), ribose (aldopentose)'],
      ['Fischer projection: vertical = going back, horizontal = coming forward', 'Haworth projection: shows cyclic hemiacetal form', 'α anomer: -OH on anomeric carbon is axial (down in Haworth)', 'β anomer: -OH on anomeric carbon is equatorial (up in Haworth)'],
      ['Mutarotation: equilibrium between α and β anomers through open-chain form', 'Reduction: NaBH₄ → alditol (sugar alcohol)', 'Oxidation: Tollens/Benedict\'s → aldonic acid (reducing sugars)', 'Glycoside formation: acetal from hemiacetal + alcohol'],
      ['Glycosidic bond: acetal linkage between two sugars', 'Maltose: α-1,4 (glucose-glucose)', 'Lactose: β-1,4 (galactose-glucose)', 'Sucrose: α-1,β-2 (glucose-fructose) — not a reducing sugar'],
      ['Starch: amylose (linear α-1,4) and amylopectin (branched α-1,4 + α-1,6)', 'Glycogen: highly branched α-1,4 + α-1,6 (animal storage)', 'Cellulose: β-1,4 glucose (structural, not digestible)', 'Chitin: β-1,4 N-acetylglucosamine (arthropod exoskeletons)'],
      ['Drawing Fischer and Haworth projections', 'Identifying anomers and epimers', 'Predicting reducing vs nonreducing sugars', 'Analyzing glycosidic bond types'],
      ['Carbohydrate chemistry bridges organic chemistry and biochemistry', 'Stereochemistry is crucial for biological function', 'Glycosidic bonds are the basis of oligosaccharides', 'Review: sugar structure and reactions']
    ] },
  { slug: 'amino-acids-proteins', exportBase: 'oChemAminoAcids', partTopics: ['Amino Acid Structure', 'Acid-Base Properties', 'Peptide Bonds', 'Protein Structure Levels', 'Amino Acid Reactions', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['20 standard amino acids with α-amino and α-carboxyl groups', 'All except glycine are chiral (L-configuration in nature)', 'R groups determine properties: nonpolar, polar, charged', 'Essential amino acids must be obtained from diet'],
      ['Amino acids are zwitterions at physiological pH', 'Isoelectric point (pI): pH at which net charge = 0', 'Below pI: amino acid is cationic (+1)', 'Above pI: amino acid is anionic (-1)'],
      ['Peptide bond: amide bond between amino acids', 'Formed by condensation (dehydration) reaction', 'Peptide bond is planar (partial double bond character from resonance)', 'N-terminus (amino end) and C-terminus (carboxyl end)'],
      ['Primary: amino acid sequence', 'Secondary: α-helix and β-pleated sheet (H-bonds)', 'Tertiary: 3D folding (R-group interactions)', 'Quaternary: multiple polypeptide chains together'],
      ['Strecker synthesis: aldehyde + NH₃ + HCN → amino acid', 'Gabriel malonic ester synthesis: phthalimide route', 'Ninhydrin test: detects amino acids (purple color)', 'Edman degradation: sequencing from N-terminus'],
      ['Determining amino acid charge at different pH values', 'Drawing peptide structures', 'Predicting protein structure from sequence', 'Analyzing electrophoresis results'],
      ['Amino acids are the building blocks of proteins', 'Acid-base chemistry determines amino acid behavior', 'Protein structure determines function', 'Review: amino acid chemistry and protein structure']
    ] },
  { slug: 'lipids-nucleic-acids', exportBase: 'oChemLipids', partTopics: ['Fatty Acids & Triglycerides', 'Phospholipids & Membranes', 'Terpenes & Steroids', 'Nucleotide Structure', 'Nucleic Acid Chemistry', 'Problem-Solving Workshop', 'Synthesis & Review'],
    concepts: [
      ['Fatty acids: long-chain carboxylic acids (12-20 carbons)', 'Saturated: no double bonds; Unsaturated: cis double bonds', 'Triglycerides: glycerol + 3 fatty acids (ester bonds)', 'Saponification: fat + NaOH → glycerol + soap (sodium carboxylate)'],
      ['Phospholipids: glycerol + 2 fatty acids + phosphate head group', 'Amphipathic: hydrophilic head + hydrophobic tails', 'Form bilayers spontaneously in water', 'Cell membrane: phospholipid bilayer + proteins + cholesterol'],
      ['Terpenes: built from isoprene units (C₅H₈)', 'Monoterpenes (C₁₀), sesquiterpenes (C₁₅), diterpenes (C₂₀)', 'Steroids: four fused rings (A, B, C, D)', 'Cholesterol → steroid hormones (testosterone, estradiol, cortisol)'],
      ['Nucleotides: base + sugar + phosphate', 'Purines (A, G): two fused rings; Pyrimidines (C, T, U): one ring', 'DNA: deoxyribose + A, G, C, T', 'RNA: ribose + A, G, C, U'],
      ['Phosphodiester bonds link nucleotides 3\' → 5\'', 'Base pairing: A=T (2 H-bonds), G≡C (3 H-bonds)', 'Double helix: antiparallel strands', 'Denaturation and renaturation of DNA'],
      ['Identifying lipid types from structure', 'Drawing nucleotide structures', 'Predicting membrane behavior', 'Analyzing saponification reactions'],
      ['Lipids and nucleic acids are essential biomolecules', 'Organic chemistry explains biological structure and function', 'Spectroscopy can identify these molecules', 'Review: biochemistry through the organic lens']
    ] }
];

// Build topics array
const topics = [];

for (const topicDef of ochemTopics) {
  const parts = topicDef.partTopics.map((partTitle, idx) => {
    const concepts = topicDef.concepts[idx];
    return {
      title: partTitle,
      textSections: [
        { id: 'intro', body: concepts.map((c, i) => `### ${i + 1}. ${c.split(':')[0]}\n\n${c.includes(':') ? c.split(':').slice(1).join(':').trim() : c}`).join('\n\n') },
        { id: 'detail', body: `### Key Concepts Summary\n\n${concepts.map(c => `- **${c.split(':')[0].trim()}**${c.includes(':') ? ': ' + c.split(':').slice(1).join(':').trim() : ''}`).join('\n')}` }
      ],
      mcQuestions: [
        { q: `Which best describes a key concept of ${partTitle.toLowerCase()}?`, opts: [concepts[0].split(':')[0].trim(), 'An unrelated concept', 'This is not covered in Organic Chemistry', 'A biological concept only'], correct: 0, explanation: concepts[0] },
        ...(concepts.length >= 3 ? [{ q: `In the context of ${partTitle.toLowerCase()}, which is accurate?`, opts: [concepts[2].includes(':') ? concepts[2].split(':').slice(1).join(':').trim() : concepts[2], 'The opposite is true', 'This concept is obsolete', 'None of these are correct'], correct: 0, explanation: concepts[2] }] : []),
        ...(concepts.length >= 4 ? [{ q: `Which concept relates directly to ${partTitle.toLowerCase()}?`, opts: [concepts[3].includes(':') ? concepts[3].split(':').slice(1).join(':').trim().substring(0, 80) : concepts[3].substring(0, 80), 'Only inorganic compounds', 'Exclusively gas-phase reactions', 'This applies only to polymers'], correct: 0, explanation: concepts[3] }] : [])
      ],
      dropdowns: {
        items: concepts.slice(0, 3).map(c => {
          const ps = c.split(':');
          return { label: ps[0].trim(), options: [ps.length > 1 ? ps.slice(1).join(':').trim().substring(0, 50) : c.substring(0, 50), 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry'], correct: ps.length > 1 ? ps.slice(1).join(':').trim().substring(0, 50) : c.substring(0, 50) };
        }),
        hints: concepts.slice(0, 3).map((_, i) => `Review key concept ${i + 1}.`),
        explanation: `These concepts are fundamental to understanding ${partTitle}.`
      }
    };
  });
  
  topics.push({
    slug: topicDef.slug,
    title: topicDef.title,
    prefix: 'ochem',
    exportBase: topicDef.exportBase,
    parts
  });
}

// Main
function main() {
  let totalFiles = 0;
  for (const topic of topics) {
    for (let i = 0; i < topic.parts.length; i++) {
      const partNum = i + 1;
      const fileName = `ochem-${topic.slug}-part${partNum}.ts`;
      const filePath = path.join(OUT_DIR, fileName);
      const content = generateFile(topic, i);
      fs.writeFileSync(filePath, content, 'utf-8');
      totalFiles++;
    }
  }
  console.log(`✅ Generated ${totalFiles} Organic Chemistry lesson files`);
}

main();
