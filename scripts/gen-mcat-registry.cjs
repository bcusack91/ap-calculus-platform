const fs = require('fs');

const mcatTopics = [
  { slug: 'mcat-general-chemistry-mcat', exportBase: 'mcatGenChem', parts: ['Atomic Structure & Periodic Trends','Chemical Bonding','Stoichiometry & Solutions','Acids, Bases & Buffers','Chemical Kinetics','Thermodynamics & Equilibrium','Review & MCAT Practice'] },
  { slug: 'mcat-organic-chemistry-mcat', exportBase: 'mcatOrgChem', parts: ['Functional Groups & Nomenclature','Stereochemistry','Substitution & Elimination','Carbonyl Chemistry','Carboxylic Acid Derivatives','Spectroscopy & Structure','Review & MCAT Practice'] },
  { slug: 'mcat-physics-mechanics-mcat', exportBase: 'mcatPhysMech', parts: ['Kinematics & Motion','Forces & Newtons Laws','Work, Energy & Power','Momentum & Collisions','Fluids & Pressure','Waves & Sound','Review & MCAT Practice'] },
  { slug: 'mcat-physics-electricity-mcat', exportBase: 'mcatPhysElec', parts: ['Electrostatics & Coulombs Law','Electric Circuits','Magnetism & EM Induction','Optics & Light','Nuclear Physics & Radioactivity','Electrochemistry','Review & MCAT Practice'] },
  { slug: 'mcat-biochemistry-foundations-mcat', exportBase: 'mcatBiochem', parts: ['Amino Acids & Protein Structure','Enzyme Kinetics','Carbohydrate Metabolism','Lipids & Membranes','Nucleic Acids & DNA','Bioenergetics & ATP','Review & MCAT Practice'] },
  { slug: 'mcat-cars-strategy-mcat', exportBase: 'mcatCarsStrat', parts: ['CARS Overview & Approach','Active Reading Techniques','Main Idea & Argument','Inference & Application','Tone & Author Perspective','Question Types & Traps','Review & MCAT Practice'] },
  { slug: 'mcat-cars-passages-mcat', exportBase: 'mcatCarsPsg', parts: ['Humanities Passages','Social Science Passages','Ethics & Philosophy','Arts & Culture Passages','Comparative & Contrasting','Time Management','Review & MCAT Practice'] },
  { slug: 'mcat-cars-reasoning-mcat', exportBase: 'mcatCarsReason', parts: ['Logical Reasoning','Strengthening & Weakening Arguments','Assumption Identification','Evaluating Evidence','Analogical Reasoning','Common Logical Fallacies','Review & MCAT Practice'] },
  { slug: 'mcat-cell-biology-mcat', exportBase: 'mcatCellBio', parts: ['Cell Structure & Organelles','Membrane Transport','Cell Signaling','Cell Cycle & Division','Apoptosis & Regulation','Stem Cells & Differentiation','Review & MCAT Practice'] },
  { slug: 'mcat-molecular-biology-mcat', exportBase: 'mcatMolBio', parts: ['DNA Replication','Transcription & RNA Processing','Translation & Protein Synthesis','Gene Regulation','Mutations & Repair','Biotechnology & Lab Techniques','Review & MCAT Practice'] },
  { slug: 'mcat-organ-systems-mcat', exportBase: 'mcatOrganSys', parts: ['Cardiovascular System','Respiratory System','Renal & Excretory System','Digestive System','Endocrine System','Nervous System','Review & MCAT Practice'] },
  { slug: 'mcat-genetics-evolution-mcat', exportBase: 'mcatGenetics', parts: ['Mendelian Genetics','Non-Mendelian Inheritance','Population Genetics','Natural Selection','Speciation & Phylogeny','Immune System','Review & MCAT Practice'] },
  { slug: 'mcat-anatomy-physiology-mcat', exportBase: 'mcatAnatPhys', parts: ['Musculoskeletal System','Reproductive System','Integumentary System','Lymphatic & Immune','Sensory Systems','Embryology & Development','Review & MCAT Practice'] },
  { slug: 'mcat-microbiology-mcat', exportBase: 'mcatMicro', parts: ['Bacteria Structure & Function','Viruses & Prions','Fungi & Parasites','Microbial Genetics','Antimicrobial Agents','Host-Pathogen Interactions','Review & MCAT Practice'] },
  { slug: 'mcat-psychology-behavior-mcat', exportBase: 'mcatPsychBehav', parts: ['Sensation & Perception','Learning & Memory','Cognition & Language','Motivation & Emotion','Developmental Psychology','Personality & Disorders','Review & MCAT Practice'] },
  { slug: 'mcat-sociology-mcat', exportBase: 'mcatSociology', parts: ['Social Structure & Stratification','Culture & Socialization','Social Interaction & Self','Group Dynamics & Deviance','Health Disparities','Demographics & Population','Review & MCAT Practice'] },
  { slug: 'mcat-science-passage-strategy-mcat', exportBase: 'mcatSciPassage', parts: ['Reading Science Passages','Data Interpretation','Experimental Design','Discrete Questions','Integrating Content Knowledge','Common Traps & Pitfalls','Review & MCAT Practice'] },
  { slug: 'mcat-test-day-strategy-mcat', exportBase: 'mcatTestDay', parts: ['MCAT Format & Scoring','Study Planning','Section-by-Section Strategy','Practice Test Analysis','Test Day Preparation','Score Goals & Applications','Review & MCAT Practice'] },
];

let output = `  // ═══════════════════════════════════════════
  // MCAT Prep — 18 Topics
  // ═══════════════════════════════════════════
`;

for (const t of mcatTopics) {
  output += `  '${t.slug}': {\n    parts: [\n`;
  for (let i = 0; i < 7; i++) {
    const p = i + 1;
    const filename = `mcat-${t.slug}-part${p}`;
    const exportName = `${t.exportBase}Part${p}Data`;
    output += `      { title: '${t.parts[i]}', loader: () => import('./${filename}').then(m => m.${exportName}) },\n`;
  }
  output += `    ],\n  },\n`;
}

fs.writeFileSync('/tmp/mcat-registry.txt', output);
console.log(`Generated registry entries for ${mcatTopics.length} MCAT topics`);
