const fs = require('fs');
const path = require('path');

const LESSONS_DIR = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

function getExportName(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const match = content.match(/export const (\w+)/);
  return match ? match[1] : null;
}

// Bio topics (from generator)
const bioPartTitles = {
  'water-properties-biochemistry': ['Water Properties', 'Hydrogen Bonding', 'Cohesion & Adhesion', 'Thermal Properties', 'pH & Buffers', 'Problem-Solving Workshop', 'AP Review'],
  'biological-macromolecules': ['Introduction to Macromolecules', 'Carbohydrates', 'Lipids', 'Proteins', 'Nucleic Acids', 'Problem-Solving Workshop', 'AP Review'],
  'enzyme-structure-function': ['Enzyme Basics', 'Active Site & Substrate', 'Factors Affecting Enzymes', 'Inhibition', 'Enzyme Kinetics', 'Problem-Solving Workshop', 'AP Review'],
  'cell-structure-organelles': ['Cell Theory', 'Prokaryotes vs Eukaryotes', 'Membrane-Bound Organelles', 'Endomembrane System', 'Energy Organelles', 'Problem-Solving Workshop', 'AP Review'],
  'membrane-transport': ['Membrane Structure', 'Passive Transport', 'Osmosis', 'Active Transport', 'Bulk Transport', 'Problem-Solving Workshop', 'AP Review'],
  'cell-compartmentalization': ['Compartmentalization Overview', 'Organelle Functions', 'Membrane Surfaces', 'Intracellular Transport', 'Endosymbiotic Theory', 'Problem-Solving Workshop', 'AP Review'],
  'cellular-respiration': ['Overview of Cell Respiration', 'Glycolysis', 'Pyruvate Oxidation', 'Citric Acid Cycle', 'Oxidative Phosphorylation', 'Problem-Solving Workshop', 'AP Review'],
  'photosynthesis': ['Light Reactions', 'Photosystems', 'Calvin Cycle', 'C3 vs C4 vs CAM', 'Photosynthesis Factors', 'Problem-Solving Workshop', 'AP Review'],
  'fitness-environment': ['Natural Selection & Fitness', 'Adaptation', 'Phenotypic Plasticity', 'Trade-offs', 'Environmental Variation', 'Problem-Solving Workshop', 'AP Review'],
  'cell-communication-signaling': ['Cell Signaling Overview', 'Signal Transduction', 'Second Messengers', 'Response to Signals', 'Feedback Loops', 'Problem-Solving Workshop', 'AP Review'],
  'cell-cycle-mitosis': ['Cell Cycle Phases', 'Interphase', 'Mitosis', 'Cytokinesis', 'Cell Cycle Regulation', 'Problem-Solving Workshop', 'AP Review'],
  'feedback-mechanisms': ['Positive Feedback', 'Negative Feedback', 'Homeostasis', 'Hormonal Regulation', 'Thermoregulation', 'Problem-Solving Workshop', 'AP Review'],
  'meiosis-genetic-diversity': ['Meiosis Overview', 'Meiosis I', 'Meiosis II', 'Crossing Over', 'Independent Assortment', 'Problem-Solving Workshop', 'AP Review'],
  'mendelian-genetics': ['Mendel\'s Laws', 'Monohybrid Crosses', 'Dihybrid Crosses', 'Probability in Genetics', 'Pedigree Analysis', 'Problem-Solving Workshop', 'AP Review'],
  'non-mendelian-genetics': ['Incomplete Dominance', 'Codominance', 'Multiple Alleles', 'Polygenic Traits', 'Epistasis', 'Problem-Solving Workshop', 'AP Review'],
  'dna-replication': ['DNA Structure', 'Semiconservative Replication', 'Enzymes of Replication', 'Leading vs Lagging Strand', 'Proofreading & Repair', 'Problem-Solving Workshop', 'AP Review'],
  'transcription-translation': ['Gene Expression Overview', 'Transcription', 'RNA Processing', 'Translation', 'Post-Translational Modification', 'Problem-Solving Workshop', 'AP Review'],
  'gene-regulation': ['Gene Regulation Overview', 'Prokaryotic Regulation', 'Eukaryotic Regulation', 'Epigenetics', 'RNA Interference', 'Problem-Solving Workshop', 'AP Review'],
  'biotechnology': ['Restriction Enzymes', 'Gel Electrophoresis', 'PCR', 'Gene Cloning', 'CRISPR & Gene Editing', 'Problem-Solving Workshop', 'AP Review'],
  'evidence-evolution': ['Fossil Record', 'Homologous Structures', 'Molecular Evidence', 'Biogeography', 'Direct Observation', 'Problem-Solving Workshop', 'AP Review'],
  'natural-selection-adaptation': ['Darwin\'s Theory', 'Types of Selection', 'Sexual Selection', 'Adaptation Mechanisms', 'Hardy-Weinberg', 'Problem-Solving Workshop', 'AP Review'],
  'speciation-macroevolution': ['Species Concepts', 'Allopatric Speciation', 'Sympatric Speciation', 'Reproductive Isolation', 'Macroevolution Patterns', 'Problem-Solving Workshop', 'AP Review'],
  'ecology-ecosystems': ['Ecosystem Components', 'Energy Flow', 'Biogeochemical Cycles', 'Community Interactions', 'Ecological Succession', 'Problem-Solving Workshop', 'AP Review'],
  'energy-flow-nutrient-cycling': ['Trophic Levels', 'Food Webs', 'Ecological Pyramids', 'Carbon Cycle', 'Nitrogen Cycle', 'Problem-Solving Workshop', 'AP Review'],
  'population-community-ecology': ['Population Growth', 'Carrying Capacity', 'r vs K Selection', 'Community Ecology', 'Biodiversity', 'Problem-Solving Workshop', 'AP Review'],
};

const psychPartTitles = {
  'history-approaches-psychology': ['Origins of Psychology', 'Major Perspectives', 'Research Methods', 'Ethics in Research', 'Statistics in Psychology', 'Problem-Solving Workshop', 'AP Review'],
  'biological-bases-brain': ['Neural Communication', 'Brain Structure', 'Cerebral Cortex', 'Brain Imaging', 'Nervous System Divisions', 'Problem-Solving Workshop', 'AP Review'],
  'genetics-behavior': ['Behavioral Genetics', 'Twin Studies', 'Gene-Environment Interaction', 'Evolutionary Psychology', 'Nature vs Nurture', 'Problem-Solving Workshop', 'AP Review'],
  'sensation-sensory-processing': ['Sensation Basics', 'Vision', 'Hearing', 'Chemical Senses', 'Somatosensation', 'Problem-Solving Workshop', 'AP Review'],
  'perception-attention': ['Perceptual Organization', 'Depth Perception', 'Visual Illusions', 'Attention', 'Selective Attention', 'Problem-Solving Workshop', 'AP Review'],
  'classical-conditioning': ['Pavlov\'s Experiments', 'Acquisition & Extinction', 'Generalization & Discrimination', 'Higher-Order Conditioning', 'Applications', 'Problem-Solving Workshop', 'AP Review'],
  'operant-conditioning': ['Thorndike & Skinner', 'Reinforcement Types', 'Punishment', 'Schedules of Reinforcement', 'Shaping', 'Problem-Solving Workshop', 'AP Review'],
  'observational-learning-cognition': ['Bandura\'s Bobo Doll', 'Mirror Neurons', 'Cognitive Maps', 'Latent Learning', 'Insight Learning', 'Problem-Solving Workshop', 'AP Review'],
  'memory-encoding-storage': ['Memory Models', 'Sensory Memory', 'Short-Term & Working Memory', 'Long-Term Memory', 'Encoding Strategies', 'Problem-Solving Workshop', 'AP Review'],
  'retrieval-forgetting': ['Retrieval Cues', 'Recall vs Recognition', 'Forgetting Curve', 'Interference Theory', 'Memory Distortion', 'Problem-Solving Workshop', 'AP Review'],
  'thinking-problem-solving': ['Concepts & Prototypes', 'Problem-Solving Strategies', 'Heuristics & Biases', 'Decision Making', 'Creativity', 'Problem-Solving Workshop', 'AP Review'],
  'language-intelligence': ['Language Development', 'Language Theories', 'Intelligence Theories', 'IQ Testing', 'Nature vs Nurture in Intelligence', 'Problem-Solving Workshop', 'AP Review'],
  'prenatal-childhood-development': ['Prenatal Development', 'Piaget\'s Theory', 'Attachment', 'Parenting Styles', 'Moral Development', 'Problem-Solving Workshop', 'AP Review'],
  'adolescence-adulthood': ['Adolescent Development', 'Identity Formation', 'Adulthood & Aging', 'Cognitive Changes', 'Social Development', 'Problem-Solving Workshop', 'AP Review'],
  'motivation-theories': ['Drive Theory', 'Maslow\'s Hierarchy', 'Intrinsic vs Extrinsic', 'Hunger & Eating', 'Achievement Motivation', 'Problem-Solving Workshop', 'AP Review'],
  'emotion-stress': ['Theories of Emotion', 'Emotional Expression', 'Stress & Health', 'Coping Strategies', 'Positive Psychology', 'Problem-Solving Workshop', 'AP Review'],
  'personality-theories': ['Psychoanalytic Theory', 'Trait Theories', 'Humanistic Theories', 'Social-Cognitive Theory', 'Personality Assessment', 'Problem-Solving Workshop', 'AP Review'],
  'psychological-disorders-overview': ['Defining Abnormality', 'DSM-5 Classification', 'Anxiety Disorders', 'OCD & PTSD', 'Somatic Disorders', 'Problem-Solving Workshop', 'AP Review'],
  'mood-psychotic-disorders': ['Major Depression', 'Bipolar Disorder', 'Schizophrenia', 'Dissociative Disorders', 'Personality Disorders', 'Problem-Solving Workshop', 'AP Review'],
  'treatment-therapy': ['Psychotherapy Approaches', 'Cognitive-Behavioral Therapy', 'Biomedical Therapies', 'Group & Family Therapy', 'Evaluating Treatments', 'Problem-Solving Workshop', 'AP Review'],
  'social-influence-conformity': ['Conformity & Obedience', 'Asch & Milgram', 'Group Influence', 'Social Facilitation', 'Deindividuation', 'Problem-Solving Workshop', 'AP Review'],
  'attitudes-persuasion': ['Attitude Formation', 'Cognitive Dissonance', 'Persuasion Techniques', 'Central vs Peripheral', 'Attitude Change', 'Problem-Solving Workshop', 'AP Review'],
  'group-behavior-prejudice': ['Prejudice & Discrimination', 'Stereotypes', 'In-Group/Out-Group', 'Aggression', 'Prosocial Behavior', 'Problem-Solving Workshop', 'AP Review'],
};

const ochemPartTitles = {
  'atomic-structure-bonding-ochem': ['Atomic Orbitals & Electron Configuration', 'Lewis Structures & Formal Charge', 'Hybridization', 'Molecular Orbital Theory', 'Bond Polarity & Dipole Moments', 'Problem-Solving Workshop', 'Synthesis & Review'],
  'molecular-representations': ['Condensed & Skeletal Structures', 'Functional Groups', 'Constitutional Isomers', 'Degrees of Unsaturation', 'Intermolecular Forces', 'Problem-Solving Workshop', 'Synthesis & Review'],
  'acids-bases-organic': ['Brønsted-Lowry Acids & Bases', 'pKa & Acid Strength', 'Factors Affecting Acidity', 'Lewis Acids & Bases', 'Predicting Acid-Base Reactions', 'Problem-Solving Workshop', 'Synthesis & Review'],
  'alkanes-cycloalkanes': ['Nomenclature', 'Conformational Analysis', 'Cycloalkane Conformations', 'Ring Strain', 'Physical Properties', 'Problem-Solving Workshop', 'Synthesis & Review'],
  'stereochemistry-chirality': ['Chirality & Stereocenters', 'R/S Configuration', 'Optical Activity', 'Stereoisomer Types', 'Fischer Projections', 'Problem-Solving Workshop', 'Synthesis & Review'],
  'nucleophilic-substitution': ['Introduction to Substitution', 'SN2 Mechanism', 'SN1 Mechanism', 'Substrate & Nucleophile Effects', 'Solvent & Leaving Group Effects', 'Problem-Solving Workshop', 'Synthesis & Review'],
  'elimination-reactions': ['Introduction to Elimination', 'E2 Mechanism', 'E1 Mechanism', 'Zaitsev vs Hofmann', 'Substitution vs Elimination', 'Problem-Solving Workshop', 'Synthesis & Review'],
  'alkenes-reactions': ['Alkene Structure & Stability', 'Electrophilic Addition', 'Markovnikov & Anti-Markovnikov', 'Hydroboration-Oxidation', 'Oxidation & Reduction', 'Problem-Solving Workshop', 'Synthesis & Review'],
  'alkynes-synthesis': ['Alkyne Structure & Properties', 'Alkyne Acidity', 'Addition to Alkynes', 'Reduction of Alkynes', 'Alkyne Synthesis', 'Problem-Solving Workshop', 'Synthesis & Review'],
  'radical-reactions': ['Introduction to Radicals', 'Radical Halogenation', 'Selectivity in Halogenation', 'Radical Addition to Alkenes', 'Radical Stability', 'Problem-Solving Workshop', 'Synthesis & Review'],
  'alcohols-ethers': ['Alcohol Nomenclature & Properties', 'Alcohol Synthesis', 'Alcohol Reactions', 'Ether Nomenclature & Synthesis', 'Ether Reactions', 'Problem-Solving Workshop', 'Synthesis & Review'],
  'infrared-mass-spectrometry': ['Introduction to Spectroscopy', 'Infrared (IR) Spectroscopy', 'Key IR Absorptions', 'Mass Spectrometry', 'Fragmentation Patterns', 'Problem-Solving Workshop', 'Synthesis & Review'],
  'nmr-spectroscopy': ['¹H NMR Basics', 'Chemical Shift', 'Integration & Splitting', '¹³C NMR', 'Structure Determination', 'Problem-Solving Workshop', 'Synthesis & Review'],
  'conjugated-systems-dienes': ['Conjugation & Stability', '1,2- vs 1,4-Addition', 'Diels-Alder Reaction', 'Molecular Orbital Theory of Dienes', 'UV-Vis Spectroscopy', 'Problem-Solving Workshop', 'Synthesis & Review'],
  'aromatic-compounds-benzene': ['Aromaticity & Hückel Rule', 'Benzene Structure', 'Nomenclature of Aromatics', 'Properties of Aromatic Compounds', 'Aromatic vs Antiaromatic', 'Problem-Solving Workshop', 'Synthesis & Review'],
  'electrophilic-aromatic-substitution': ['EAS Mechanism', 'Halogenation & Nitration', 'Friedel-Crafts Reactions', 'Substituent Effects', 'Multi-Step EAS', 'Problem-Solving Workshop', 'Synthesis & Review'],
  'aldehydes-ketones-reactions': ['Carbonyl Chemistry Introduction', 'Nucleophilic Addition', 'Grignard & Organolithium Reactions', 'Reduction & Oxidation', 'Acetals & Hemiacetals', 'Problem-Solving Workshop', 'Synthesis & Review'],
  'carboxylic-acids-derivatives': ['Carboxylic Acid Properties', 'Nucleophilic Acyl Substitution', 'Acid Chlorides & Anhydrides', 'Esters & Amides', 'Interconversion of Derivatives', 'Problem-Solving Workshop', 'Synthesis & Review'],
  'enolate-chemistry': ['Keto-Enol Tautomerism', 'Enolate Formation', 'Aldol Reaction', 'Claisen Condensation', 'Michael & Robinson Reactions', 'Problem-Solving Workshop', 'Synthesis & Review'],
  'amines-nitrogen-compounds': ['Amine Classification & Properties', 'Amine Basicity', 'Amine Synthesis', 'Amine Reactions', 'Diazonium Chemistry', 'Problem-Solving Workshop', 'Synthesis & Review'],
  'carbohydrates-biochemistry': ['Monosaccharide Structure', 'Fischer & Haworth Projections', 'Reactions of Monosaccharides', 'Disaccharides & Glycosidic Bonds', 'Polysaccharides', 'Problem-Solving Workshop', 'Synthesis & Review'],
  'amino-acids-proteins': ['Amino Acid Structure', 'Acid-Base Properties', 'Peptide Bonds', 'Protein Structure Levels', 'Amino Acid Reactions', 'Problem-Solving Workshop', 'Synthesis & Review'],
  'lipids-nucleic-acids': ['Fatty Acids & Triglycerides', 'Phospholipids & Membranes', 'Terpenes & Steroids', 'Nucleotide Structure', 'Nucleic Acid Chemistry', 'Problem-Solving Workshop', 'Synthesis & Review'],
};

function generateRegistryEntries() {
  let output = '\n  // ===== AP Biology (25 topics) =====\n';
  
  for (const [slug, titles] of Object.entries(bioPartTitles)) {
    output += `  '${slug}': {\n    completionDestination: 'competitive',\n    parts: [\n`;
    for (let i = 0; i < 7; i++) {
      const partNum = i + 1;
      const fileName = `bio-${slug}-part${partNum}`;
      const filePath = path.join(LESSONS_DIR, `${fileName}.ts`);
      const exportName = getExportName(filePath);
      output += `      { title: '${titles[i].replace(/'/g, "\\'")}', loader: () => import('./${fileName}').then(m => m.${exportName}) },\n`;
    }
    output += '    ],\n  },\n';
  }
  
  output += '\n  // ===== AP Psychology (23 topics) =====\n';
  
  for (const [slug, titles] of Object.entries(psychPartTitles)) {
    output += `  '${slug}': {\n    completionDestination: 'competitive',\n    parts: [\n`;
    for (let i = 0; i < 7; i++) {
      const partNum = i + 1;
      const fileName = `psych-${slug}-part${partNum}`;
      const filePath = path.join(LESSONS_DIR, `${fileName}.ts`);
      const exportName = getExportName(filePath);
      output += `      { title: '${titles[i].replace(/'/g, "\\'")}', loader: () => import('./${fileName}').then(m => m.${exportName}) },\n`;
    }
    output += '    ],\n  },\n';
  }
  
  output += '\n  // ===== Organic Chemistry (23 topics) =====\n';
  
  for (const [slug, titles] of Object.entries(ochemPartTitles)) {
    output += `  '${slug}': {\n    completionDestination: 'competitive',\n    parts: [\n`;
    for (let i = 0; i < 7; i++) {
      const partNum = i + 1;
      const fileName = `ochem-${slug}-part${partNum}`;
      const filePath = path.join(LESSONS_DIR, `${fileName}.ts`);
      const exportName = getExportName(filePath);
      output += `      { title: '${titles[i].replace(/'/g, "\\'")}', loader: () => import('./${fileName}').then(m => m.${exportName}) },\n`;
    }
    output += '    ],\n  },\n';
  }
  
  return output;
}

const entries = generateRegistryEntries();
fs.writeFileSync(path.join(__dirname, 'registry-entries.txt'), entries, 'utf-8');
console.log('✅ Registry entries generated to scripts/registry-entries.txt');
console.log(`Total topics: ${Object.keys(bioPartTitles).length + Object.keys(psychPartTitles).length + Object.keys(ochemPartTitles).length}`);
