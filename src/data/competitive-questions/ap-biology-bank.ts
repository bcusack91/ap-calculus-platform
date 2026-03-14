// AP Biology question bank for competitive mode
// ~10 questions per topic across all AP Biology topics

export interface ApBiologyQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  topicSlug: string
}

const allQuestions: ApBiologyQuestion[] = [
  // ============ WATER & BIOLOGICAL MACROMOLECULES ============
  { id: 1, question: 'Water is a good solvent because it is:', options: ['Polar', 'Non-polar', 'Ionic', 'Metallic'], correctAnswer: 0, explanation: 'Polarity lets water dissolve many substances.', difficulty: 'easy', topicSlug: 'water-biological-macromolecules' },
  { id: 2, question: 'Which macromolecule stores genetic information?', options: ['Nucleic acids', 'Lipids', 'Carbohydrates', 'Proteins'], correctAnswer: 0, explanation: 'DNA and RNA store/transmit genetic info.', difficulty: 'easy', topicSlug: 'water-biological-macromolecules' },
  { id: 3, question: 'Monomers of proteins:', options: ['Amino acids', 'Nucleotides', 'Monosaccharides', 'Fatty acids'], correctAnswer: 0, explanation: '20 amino acids linked by peptide bonds.', difficulty: 'easy', topicSlug: 'water-biological-macromolecules' },
  { id: 4, question: 'Hydrogen bonds in water explain:', options: ['High specific heat', 'Low boiling point', 'Non-polarity', 'Inability to dissolve ions'], correctAnswer: 0, explanation: 'Many H-bonds → lots of energy to change temperature.', difficulty: 'medium', topicSlug: 'water-biological-macromolecules' },
  { id: 5, question: 'Dehydration synthesis:', options: ['Removes water to form bonds', 'Adds water to break bonds', 'Requires ATP', 'Only occurs in lipids'], correctAnswer: 0, explanation: 'Monomers join, releasing H₂O.', difficulty: 'medium', topicSlug: 'water-biological-macromolecules' },
  { id: 6, question: 'Enzymes are which type of macromolecule?', options: ['Proteins', 'Carbohydrates', 'Lipids', 'Nucleic acids'], correctAnswer: 0, explanation: 'Most enzymes are protein catalysts.', difficulty: 'easy', topicSlug: 'water-biological-macromolecules' },

  // ============ CELL STRUCTURE & ORGANELLES ============
  { id: 7, question: 'Which organelle makes ATP?', options: ['Mitochondria', 'Ribosome', 'Golgi apparatus', 'Lysosome'], correctAnswer: 0, explanation: 'Mitochondria = cellular respiration.', difficulty: 'easy', topicSlug: 'cell-structure-organelles' },
  { id: 8, question: 'Ribosomes are the site of:', options: ['Protein synthesis', 'Lipid synthesis', 'DNA replication', 'Cell division'], correctAnswer: 0, explanation: 'Ribosomes translate mRNA into protein.', difficulty: 'easy', topicSlug: 'cell-structure-organelles' },
  { id: 9, question: 'Plant cells have ___ that animal cells lack:', options: ['Cell wall and chloroplasts', 'Mitochondria', 'Ribosomes', 'ER'], correctAnswer: 0, explanation: 'Cell wall (cellulose) and chloroplasts (photosynthesis).', difficulty: 'easy', topicSlug: 'cell-structure-organelles' },
  { id: 10, question: 'Prokaryotes lack:', options: ['Membrane-bound nucleus', 'Ribosomes', 'Cell membrane', 'DNA'], correctAnswer: 0, explanation: 'No nucleus or membrane-bound organelles.', difficulty: 'easy', topicSlug: 'cell-structure-organelles' },
  { id: 11, question: 'The endomembrane system includes:', options: ['ER, Golgi, lysosomes, vesicles', 'Mitochondria & chloroplasts', 'Ribosomes only', 'Cytoskeleton'], correctAnswer: 0, explanation: 'Connected membrane system for protein/lipid processing.', difficulty: 'medium', topicSlug: 'cell-structure-organelles' },
  { id: 12, question: 'Endosymbiotic theory explains origin of:', options: ['Mitochondria and chloroplasts', 'Nucleus', 'Cell wall', 'Ribosomes'], correctAnswer: 0, explanation: 'They were once independent prokaryotes.', difficulty: 'medium', topicSlug: 'cell-structure-organelles' },

  // ============ CELL MEMBRANE & TRANSPORT ============
  { id: 13, question: 'Cell membrane model:', options: ['Fluid mosaic', 'Rigid wall', 'Lipid monolayer', 'Protein shell'], correctAnswer: 0, explanation: 'Phospholipid bilayer with embedded proteins.', difficulty: 'easy', topicSlug: 'cell-membrane-transport' },
  { id: 14, question: 'Osmosis is movement of:', options: ['Water across a semipermeable membrane', 'Solute down gradient', 'Ions via pumps', 'Glucose via channels'], correctAnswer: 0, explanation: 'Water moves to equalize solute concentrations.', difficulty: 'easy', topicSlug: 'cell-membrane-transport' },
  { id: 15, question: 'Active transport requires:', options: ['ATP energy', 'No energy', 'Only concentration gradient', 'Osmotic pressure'], correctAnswer: 0, explanation: 'Moves against concentration gradient.', difficulty: 'easy', topicSlug: 'cell-membrane-transport' },
  { id: 16, question: 'In a hypertonic solution, animal cells:', options: ['Shrink (crenate)', 'Swell and lyse', 'Stay same', 'Divide'], correctAnswer: 0, explanation: 'Water leaves cell → shrinkage.', difficulty: 'medium', topicSlug: 'cell-membrane-transport' },
  { id: 17, question: 'Facilitated diffusion uses:', options: ['Channel/carrier proteins, no ATP', 'ATP pumps', 'Vesicles', 'No proteins'], correctAnswer: 0, explanation: 'Passive but protein-assisted.', difficulty: 'medium', topicSlug: 'cell-membrane-transport' },
  { id: 18, question: 'Na⁺/K⁺ pump moves:', options: ['3 Na⁺ out, 2 K⁺ in per ATP', '2 Na⁺ out, 3 K⁺ in', 'Equal numbers', 'Only Na⁺'], correctAnswer: 0, explanation: 'Electrogenic pump: 3 out, 2 in.', difficulty: 'hard', topicSlug: 'cell-membrane-transport' },

  // ============ ENZYMES & METABOLISM ============
  { id: 19, question: 'Enzymes lower:', options: ['Activation energy', 'Free energy', 'Temperature', 'pH'], correctAnswer: 0, explanation: 'Catalysts lower Ea without being consumed.', difficulty: 'easy', topicSlug: 'enzymes-metabolism' },
  { id: 20, question: 'Enzyme-substrate interaction model:', options: ['Induced fit', 'Random collision', 'Permanent binding', 'Ionic bonding'], correctAnswer: 0, explanation: 'Active site changes shape to fit substrate.', difficulty: 'easy', topicSlug: 'enzymes-metabolism' },
  { id: 21, question: 'Competitive inhibitor binds to:', options: ['Active site', 'Allosteric site', 'Substrate', 'Product'], correctAnswer: 0, explanation: 'Competes with substrate for active site.', difficulty: 'medium', topicSlug: 'enzymes-metabolism' },
  { id: 22, question: 'Allosteric regulation:', options: ['Binding at non-active site changes enzyme shape', 'Blocking the active site', 'Changing pH', 'Denaturing'], correctAnswer: 0, explanation: 'Allosteric effectors bind elsewhere, alter conformation.', difficulty: 'medium', topicSlug: 'enzymes-metabolism' },
  { id: 23, question: 'Feedback inhibition:', options: ['End product inhibits earlier enzyme', 'Substrate inhibits enzyme', 'ATP inhibits all', 'pH stops all enzymes'], correctAnswer: 0, explanation: 'Prevents overproduction of product.', difficulty: 'medium', topicSlug: 'enzymes-metabolism' },
  { id: 24, question: 'Denaturing an enzyme changes its:', options: ['3D shape → loses function', 'Primary sequence', 'Amino acid types', 'Gene'], correctAnswer: 0, explanation: 'Tertiary/quaternary structure disrupted.', difficulty: 'medium', topicSlug: 'enzymes-metabolism' },

  // ============ PHOTOSYNTHESIS ============
  { id: 25, question: 'Photosynthesis overall equation:', options: ['$6CO_2 + 6H_2O → C_6H_{12}O_6 + 6O_2$', '$C_6H_{12}O_6 + 6O_2 → 6CO_2 + 6H_2O$', '$CO_2 + H_2O → CH_4 + O_2$', '$6O_2 → 6CO_2$'], correctAnswer: 0, explanation: 'Light energy drives carbon fixation.', difficulty: 'easy', topicSlug: 'photosynthesis' },
  { id: 26, question: 'Light reactions occur in:', options: ['Thylakoid membranes', 'Stroma', 'Cytoplasm', 'Mitochondria'], correctAnswer: 0, explanation: 'Photosystems embedded in thylakoid membranes.', difficulty: 'easy', topicSlug: 'photosynthesis' },
  { id: 27, question: 'Calvin cycle occurs in:', options: ['Stroma', 'Thylakoid lumen', 'Cytoplasm', 'Inner membrane'], correctAnswer: 0, explanation: 'Carbon fixation happens in stroma.', difficulty: 'easy', topicSlug: 'photosynthesis' },
  { id: 28, question: 'O₂ from photosynthesis comes from:', options: ['Water (H₂O)', 'CO₂', 'Glucose', 'Air'], correctAnswer: 0, explanation: 'Photolysis of water releases O₂.', difficulty: 'medium', topicSlug: 'photosynthesis' },
  { id: 29, question: 'RuBisCO fixes:', options: ['CO₂ to RuBP', 'O₂ to glucose', 'N₂ to NH₃', 'H₂O to H₂'], correctAnswer: 0, explanation: 'Key enzyme of Calvin cycle.', difficulty: 'medium', topicSlug: 'photosynthesis' },
  { id: 30, question: 'C4 plants fix CO₂ first into:', options: ['4-carbon compound (OAA)', '3-carbon compound (3-PGA)', 'Glucose', 'RuBP'], correctAnswer: 0, explanation: 'PEP carboxylase fixes CO₂ → OAA in mesophyll.', difficulty: 'hard', topicSlug: 'photosynthesis' },
  { id: 31, question: 'Products of light reactions used in Calvin cycle:', options: ['ATP and NADPH', 'O₂ and H₂O', 'Glucose and CO₂', 'ADP and NADP⁺'], correctAnswer: 0, explanation: 'Light reactions supply energy carriers.', difficulty: 'medium', topicSlug: 'photosynthesis' },

  // ============ CELLULAR RESPIRATION ============
  { id: 32, question: 'Glycolysis occurs in:', options: ['Cytoplasm', 'Mitochondria', 'Nucleus', 'ER'], correctAnswer: 0, explanation: 'Does not require organelles.', difficulty: 'easy', topicSlug: 'cellular-respiration' },
  { id: 33, question: 'Net ATP from glycolysis:', options: ['2 ATP', '4 ATP', '36 ATP', '0 ATP'], correctAnswer: 0, explanation: 'Produces 4, uses 2 → net 2.', difficulty: 'easy', topicSlug: 'cellular-respiration' },
  { id: 34, question: 'Krebs cycle occurs in:', options: ['Mitochondrial matrix', 'Cytoplasm', 'Thylakoid', 'Nucleus'], correctAnswer: 0, explanation: 'Acetyl-CoA enters Krebs in the matrix.', difficulty: 'easy', topicSlug: 'cellular-respiration' },
  { id: 35, question: 'Most ATP is made during:', options: ['Oxidative phosphorylation (ETC)', 'Glycolysis', 'Krebs cycle', 'Fermentation'], correctAnswer: 0, explanation: 'ETC produces ~30-32 ATP per glucose.', difficulty: 'medium', topicSlug: 'cellular-respiration' },
  { id: 36, question: 'Final electron acceptor in aerobic respiration:', options: ['O₂', 'CO₂', 'H₂O', 'NADH'], correctAnswer: 0, explanation: 'O₂ accepts electrons → H₂O.', difficulty: 'medium', topicSlug: 'cellular-respiration' },
  { id: 37, question: 'Fermentation produces:', options: ['Ethanol or lactate (+ NAD⁺)', 'ATP from ETC', 'CO₂ only', 'Acetyl-CoA'], correctAnswer: 0, explanation: 'Recycles NAD⁺ without O₂.', difficulty: 'medium', topicSlug: 'cellular-respiration' },
  { id: 38, question: 'Total ATP from one glucose (aerobic):', options: ['30-32', '2', '4', '100'], correctAnswer: 0, explanation: 'Modern estimate: 30-32 ATP.', difficulty: 'hard', topicSlug: 'cellular-respiration' },

  // ============ DNA STRUCTURE & REPLICATION ============
  { id: 39, question: 'DNA bases pair: A with ___, C with ___:', options: ['T, G', 'G, T', 'U, G', 'C, A'], correctAnswer: 0, explanation: 'A-T (2 H-bonds), C-G (3 H-bonds).', difficulty: 'easy', topicSlug: 'dna-structure-replication' },
  { id: 40, question: 'DNA replication is:', options: ['Semiconservative', 'Conservative', 'Dispersive', 'Random'], correctAnswer: 0, explanation: 'Each new double helix has one old + one new strand.', difficulty: 'easy', topicSlug: 'dna-structure-replication' },
  { id: 41, question: 'Helicase:', options: ['Unwinds DNA double helix', 'Adds nucleotides', 'Joins fragments', 'Removes primers'], correctAnswer: 0, explanation: 'Breaks hydrogen bonds between base pairs.', difficulty: 'easy', topicSlug: 'dna-structure-replication' },
  { id: 42, question: 'DNA polymerase adds nucleotides in ___ direction:', options: ['5\' to 3\'', '3\' to 5\'', 'Both directions', 'Random'], correctAnswer: 0, explanation: 'New strand grows 5\' → 3\'.', difficulty: 'medium', topicSlug: 'dna-structure-replication' },
  { id: 43, question: 'Okazaki fragments are on the:', options: ['Lagging strand', 'Leading strand', 'Both strands', 'Template only'], correctAnswer: 0, explanation: 'Lagging strand synthesized in short pieces.', difficulty: 'medium', topicSlug: 'dna-structure-replication' },
  { id: 44, question: 'Telomerase:', options: ['Extends telomeres at chromosome ends', 'Starts replication', 'Removes introns', 'Fixes mutations'], correctAnswer: 0, explanation: 'Prevents chromosome shortening.', difficulty: 'hard', topicSlug: 'dna-structure-replication' },

  // ============ TRANSCRIPTION & TRANSLATION ============
  { id: 45, question: 'Transcription produces:', options: ['mRNA from DNA template', 'DNA from RNA', 'Protein from mRNA', 'tRNA from rRNA'], correctAnswer: 0, explanation: 'RNA polymerase reads DNA → makes mRNA.', difficulty: 'easy', topicSlug: 'transcription-translation' },
  { id: 46, question: 'Translation occurs at:', options: ['Ribosomes', 'Nucleus', 'Golgi', 'Lysosome'], correctAnswer: 0, explanation: 'Ribosomes read mRNA → build protein.', difficulty: 'easy', topicSlug: 'transcription-translation' },
  { id: 47, question: 'A codon has ___ nucleotides:', options: ['3', '1', '2', '4'], correctAnswer: 0, explanation: 'Triplet code: 3 bases = 1 amino acid.', difficulty: 'easy', topicSlug: 'transcription-translation' },
  { id: 48, question: 'Start codon AUG codes for:', options: ['Methionine', 'Stop', 'Alanine', 'Glycine'], correctAnswer: 0, explanation: 'AUG = start + methionine.', difficulty: 'medium', topicSlug: 'transcription-translation' },
  { id: 49, question: 'tRNA\'s role:', options: ['Brings amino acids to ribosome', 'Makes mRNA', 'Splices introns', 'Copies DNA'], correctAnswer: 0, explanation: 'Anticodon matches codon; carries amino acid.', difficulty: 'medium', topicSlug: 'transcription-translation' },
  { id: 50, question: 'Post-transcriptional modification in eukaryotes:', options: ['5\' cap, poly-A tail, intron splicing', 'Nothing', 'Methylation only', 'Translation'], correctAnswer: 0, explanation: 'mRNA processing before export.', difficulty: 'hard', topicSlug: 'transcription-translation' },

  // ============ GENE REGULATION ============
  { id: 51, question: 'Lac operon is induced by:', options: ['Allolactose (when lactose present)', 'Glucose', 'tryptophan', 'ATP'], correctAnswer: 0, explanation: 'Allolactose binds repressor → transcription on.', difficulty: 'medium', topicSlug: 'gene-regulation' },
  { id: 52, question: 'Eukaryotic gene regulation can occur at:', options: ['Multiple levels (transcription, post-transcription, translation, post-translation)', 'Only transcription', 'Only translation', 'Only in nucleus'], correctAnswer: 0, explanation: 'Complex multi-level regulation.', difficulty: 'medium', topicSlug: 'gene-regulation' },
  { id: 53, question: 'Epigenetics involves:', options: ['Heritable changes without DNA sequence change', 'Mutations', 'Recombination', 'Crossing over'], correctAnswer: 0, explanation: 'DNA methylation, histone modification.', difficulty: 'hard', topicSlug: 'gene-regulation' },
  { id: 54, question: 'Transcription factors:', options: ['Proteins that help RNA polymerase bind', 'tRNA molecules', 'Ribozymes', 'Histones'], correctAnswer: 0, explanation: 'Bind promoter/enhancer regions.', difficulty: 'medium', topicSlug: 'gene-regulation' },
  { id: 55, question: 'RNA interference (RNAi):', options: ['Small RNAs silence gene expression', 'RNA replicates', 'RNA translates itself', 'RNA splices DNA'], correctAnswer: 0, explanation: 'siRNA/miRNA degrade or block mRNA.', difficulty: 'hard', topicSlug: 'gene-regulation' },

  // ============ CELL CYCLE & MITOSIS ============
  { id: 56, question: 'Chromosomes line up at equator during:', options: ['Metaphase', 'Anaphase', 'Prophase', 'Telophase'], correctAnswer: 0, explanation: 'Metaphase plate alignment.', difficulty: 'easy', topicSlug: 'cell-cycle-mitosis' },
  { id: 57, question: 'DNA replication occurs during:', options: ['S phase', 'G1', 'G2', 'M phase'], correctAnswer: 0, explanation: 'S = synthesis of DNA.', difficulty: 'easy', topicSlug: 'cell-cycle-mitosis' },
  { id: 58, question: 'Sister chromatids separate during:', options: ['Anaphase', 'Metaphase', 'Prophase', 'Telophase'], correctAnswer: 0, explanation: 'Spindle fibers pull chromatids apart.', difficulty: 'easy', topicSlug: 'cell-cycle-mitosis' },
  { id: 59, question: 'Mitosis produces:', options: ['2 identical diploid cells', '4 haploid cells', '1 cell', '2 haploid cells'], correctAnswer: 0, explanation: 'Genetically identical daughter cells.', difficulty: 'easy', topicSlug: 'cell-cycle-mitosis' },
  { id: 60, question: 'Cyclin-CDK complexes:', options: ['Drive cell cycle progression', 'Build chromosomes', 'Make ATP', 'Form spindles'], correctAnswer: 0, explanation: 'Phosphorylate targets to advance through checkpoints.', difficulty: 'hard', topicSlug: 'cell-cycle-mitosis' },
  { id: 61, question: 'Cancer results from:', options: ['Uncontrolled cell division', 'Too little cell division', 'No mutations', 'Apoptosis'], correctAnswer: 0, explanation: 'Mutations in oncogenes/tumor suppressors.', difficulty: 'medium', topicSlug: 'cell-cycle-mitosis' },

  // ============ MEIOSIS & GENETIC DIVERSITY ============
  { id: 62, question: 'Meiosis produces:', options: ['4 haploid cells', '2 diploid cells', '4 diploid cells', '2 haploid cells'], correctAnswer: 0, explanation: 'Two divisions → 4 unique haploid gametes.', difficulty: 'easy', topicSlug: 'meiosis-genetic-diversity' },
  { id: 63, question: 'Crossing over occurs during:', options: ['Prophase I', 'Metaphase I', 'Anaphase II', 'Telophase II'], correctAnswer: 0, explanation: 'Homologs exchange segments.', difficulty: 'easy', topicSlug: 'meiosis-genetic-diversity' },
  { id: 64, question: 'Independent assortment:', options: ['Homologs orient randomly at metaphase I', 'Chromatids always go left', 'No randomness', 'Occurs in mitosis'], correctAnswer: 0, explanation: 'Random orientation → 2ⁿ combinations.', difficulty: 'medium', topicSlug: 'meiosis-genetic-diversity' },
  { id: 65, question: 'Nondisjunction causes:', options: ['Aneuploidy (wrong chromosome number)', 'Polyploidy', 'Normal division', 'Crossing over'], correctAnswer: 0, explanation: 'Chromosomes fail to separate → trisomy/monosomy.', difficulty: 'medium', topicSlug: 'meiosis-genetic-diversity' },
  { id: 66, question: 'Down syndrome (trisomy 21) is caused by:', options: ['Nondisjunction of chromosome 21', 'Deletion', 'Translocation always', 'Point mutation'], correctAnswer: 0, explanation: '3 copies of chromosome 21.', difficulty: 'medium', topicSlug: 'meiosis-genetic-diversity' },

  // ============ MENDELIAN GENETICS ============
  { id: 67, question: 'Heterozygous genotype:', options: ['Aa', 'AA', 'aa', 'AB'], correctAnswer: 0, explanation: 'Two different alleles.', difficulty: 'easy', topicSlug: 'mendelian-genetics' },
  { id: 68, question: 'Aa × Aa offspring ratio:', options: ['1:2:1 (AA:Aa:aa)', '3:1', '1:1', '2:2'], correctAnswer: 0, explanation: '¼ AA, ½ Aa, ¼ aa.', difficulty: 'easy', topicSlug: 'mendelian-genetics' },
  { id: 69, question: 'Law of Segregation:', options: ['Alleles separate during gamete formation', 'Genes are linked', 'Alleles blend', 'Traits skip generations'], correctAnswer: 0, explanation: 'Each gamete gets one allele per gene.', difficulty: 'easy', topicSlug: 'mendelian-genetics' },
  { id: 70, question: 'Test cross uses which genotype?', options: ['Homozygous recessive (aa)', 'Heterozygous', 'Homozygous dominant', 'Unknown'], correctAnswer: 0, explanation: 'Reveals unknown genotype of dominant phenotype.', difficulty: 'medium', topicSlug: 'mendelian-genetics' },
  { id: 71, question: 'Incomplete dominance produces:', options: ['Intermediate phenotype', 'Dominant only', 'Recessive only', 'Codominant'], correctAnswer: 0, explanation: 'Red × white → pink (blended).', difficulty: 'medium', topicSlug: 'mendelian-genetics' },
  { id: 72, question: 'Codominance: both alleles are:', options: ['Fully expressed simultaneously', 'Blended', 'One masks other', 'Neither expressed'], correctAnswer: 0, explanation: 'Both phenotypes visible (e.g., AB blood type).', difficulty: 'medium', topicSlug: 'mendelian-genetics' },

  // ============ HEREDITY & GENE EXPRESSION ============
  { id: 73, question: 'Sex-linked traits are carried on:', options: ['X chromosome (usually)', 'Y chromosome', 'Autosomes', 'Mitochondria'], correctAnswer: 0, explanation: 'X-linked recessive: color blindness, hemophilia.', difficulty: 'easy', topicSlug: 'heredity-gene-expression' },
  { id: 74, question: 'Polygenic traits show:', options: ['Continuous variation', 'Two phenotypes only', 'Mendelian ratios', 'No environmental effects'], correctAnswer: 0, explanation: 'Multiple genes → bell curve distribution.', difficulty: 'medium', topicSlug: 'heredity-gene-expression' },
  { id: 75, question: 'Epistasis:', options: ['One gene masks another gene\'s expression', 'Codominance', 'Multiple alleles', 'Incomplete dominance'], correctAnswer: 0, explanation: 'Gene interaction where one controls another.', difficulty: 'hard', topicSlug: 'heredity-gene-expression' },
  { id: 76, question: 'Linked genes:', options: ['On the same chromosome; inherited together', 'On different chromosomes', 'Always separate', 'Never recombine'], correctAnswer: 0, explanation: 'Close genes on same chromosome rarely separate.', difficulty: 'medium', topicSlug: 'heredity-gene-expression' },

  // ============ NATURAL SELECTION & EVOLUTION ============
  { id: 77, question: 'Natural selection requires:', options: ['Variation, heritability, differential reproduction', 'Identical organisms', 'No competition', 'Constant environment'], correctAnswer: 0, explanation: 'Darwin\'s three conditions.', difficulty: 'easy', topicSlug: 'natural-selection-evolution' },
  { id: 78, question: 'Fitness in biology means:', options: ['Reproductive success', 'Physical strength', 'Speed', 'Size'], correctAnswer: 0, explanation: 'Fitness = ability to pass genes to next generation.', difficulty: 'easy', topicSlug: 'natural-selection-evolution' },
  { id: 79, question: 'Homologous structures indicate:', options: ['Common ancestry', 'Similar function', 'Convergent evolution', 'No relation'], correctAnswer: 0, explanation: 'Same structure, different function = shared ancestor.', difficulty: 'medium', topicSlug: 'natural-selection-evolution' },
  { id: 80, question: 'Analogous structures result from:', options: ['Convergent evolution', 'Divergent evolution', 'Common ancestry', 'Gene flow'], correctAnswer: 0, explanation: 'Similar function, different origin.', difficulty: 'medium', topicSlug: 'natural-selection-evolution' },
  { id: 81, question: 'Stabilizing selection favors:', options: ['Average phenotypes', 'One extreme', 'Both extremes', 'Random phenotypes'], correctAnswer: 0, explanation: 'Reduces variation around the mean.', difficulty: 'medium', topicSlug: 'natural-selection-evolution' },
  { id: 82, question: 'Directional selection shifts the population toward:', options: ['One phenotypic extreme', 'The average', 'Both extremes', 'No change'], correctAnswer: 0, explanation: 'Mean shifts in one direction.', difficulty: 'medium', topicSlug: 'natural-selection-evolution' },

  // ============ HARDY-WEINBERG & POPULATION GENETICS ============
  { id: 83, question: 'Hardy-Weinberg equation:', options: ['$p² + 2pq + q² = 1$', '$p + q = 2$', '$pq = 1$', '$p² + q² = 1$'], correctAnswer: 0, explanation: 'Genotype frequencies in equilibrium.', difficulty: 'easy', topicSlug: 'hardy-weinberg-population-genetics' },
  { id: 84, question: 'Hardy-Weinberg conditions (5):', options: ['No mutation, random mating, no selection, no drift, no gene flow', 'Large population only', 'Mutations required', 'Natural selection occurring'], correctAnswer: 0, explanation: 'Idealized conditions for no evolution.', difficulty: 'medium', topicSlug: 'hardy-weinberg-population-genetics' },
  { id: 85, question: 'Genetic drift is strongest in:', options: ['Small populations', 'Large populations', 'Any population', 'Infinite populations'], correctAnswer: 0, explanation: 'Random sampling effects amplified in small N.', difficulty: 'medium', topicSlug: 'hardy-weinberg-population-genetics' },
  { id: 86, question: 'Founder effect:', options: ['Small group colonizes new area with limited alleles', 'Large population evolves', 'Mutation rate increases', 'Natural selection'], correctAnswer: 0, explanation: 'Type of genetic drift.', difficulty: 'medium', topicSlug: 'hardy-weinberg-population-genetics' },
  { id: 87, question: 'If q = 0.3, what is p?', options: ['0.7', '0.3', '0.09', '0.49'], correctAnswer: 0, explanation: '$p + q = 1 → p = 0.7$.', difficulty: 'easy', topicSlug: 'hardy-weinberg-population-genetics' },
  { id: 88, question: 'Frequency of heterozygotes when p=0.6, q=0.4:', options: ['0.48', '0.36', '0.16', '0.24'], correctAnswer: 0, explanation: '$2pq = 2(0.6)(0.4) = 0.48$.', difficulty: 'medium', topicSlug: 'hardy-weinberg-population-genetics' },

  // ============ SPECIATION ============
  { id: 89, question: 'Allopatric speciation requires:', options: ['Geographic isolation', 'Sympatric conditions', 'No barriers', 'Artificial selection'], correctAnswer: 0, explanation: 'Physical barrier separates populations.', difficulty: 'easy', topicSlug: 'speciation' },
  { id: 90, question: 'Sympatric speciation can occur through:', options: ['Polyploidy or habitat differentiation', 'Geographic isolation', 'Random chance only', 'Inbreeding'], correctAnswer: 0, explanation: 'No geographic barrier; often polyploidy in plants.', difficulty: 'medium', topicSlug: 'speciation' },
  { id: 91, question: 'Reproductive isolation includes:', options: ['Prezygotic and postzygotic barriers', 'Only habitat separation', 'Only temporal isolation', 'No barriers'], correctAnswer: 0, explanation: 'Multiple mechanisms prevent gene flow.', difficulty: 'medium', topicSlug: 'speciation' },
  { id: 92, question: 'Adaptive radiation:', options: ['One ancestor diversifies into many species', 'Many species converge', 'Extinction event', 'No change'], correctAnswer: 0, explanation: 'Darwin\'s finches from one ancestor.', difficulty: 'medium', topicSlug: 'speciation' },

  // ============ ECOLOGY & ECOSYSTEMS ============
  { id: 93, question: 'Primary producers:', options: ['Autotrophs (make own food)', 'Heterotrophs', 'Decomposers', 'Consumers'], correctAnswer: 0, explanation: 'Plants/algae/cyanobacteria.', difficulty: 'easy', topicSlug: 'ecology-ecosystems' },
  { id: 94, question: 'Energy transfer between trophic levels ~:', options: ['10%', '100%', '50%', '90%'], correctAnswer: 0, explanation: '10% rule — most energy lost as heat.', difficulty: 'easy', topicSlug: 'ecology-ecosystems' },
  { id: 95, question: 'Primary succession starts on:', options: ['Bare rock (no soil)', 'After a fire', 'Existing soil', 'In water only'], correctAnswer: 0, explanation: 'Pioneer species (lichens) colonize bare surfaces.', difficulty: 'medium', topicSlug: 'ecology-ecosystems' },
  { id: 96, question: 'Keystone species:', options: ['Disproportionate effect on ecosystem', 'Most abundant species', 'Largest organism', 'Smallest organism'], correctAnswer: 0, explanation: 'Remove it → ecosystem collapses.', difficulty: 'medium', topicSlug: 'ecology-ecosystems' },
  { id: 97, question: 'The phosphorus cycle lacks an:', options: ['Atmospheric component', 'Aquatic component', 'Biological component', 'Geological component'], correctAnswer: 0, explanation: 'Phosphorus stays in rock/water/soil.', difficulty: 'medium', topicSlug: 'ecology-ecosystems' },
  { id: 98, question: 'Nitrogen fixation converts:', options: ['$N_2$ to $NH_3$', '$NH_3$ to $NO_3^-$', '$NO_3^-$ to $N_2$', '$N_2$ to $NO_2$'], correctAnswer: 0, explanation: 'Bacteria fix atmospheric N₂.', difficulty: 'hard', topicSlug: 'ecology-ecosystems' },

  // ============ SIGNAL TRANSDUCTION ============
  { id: 99, question: 'Signal transduction pathway order:', options: ['Reception → transduction → response', 'Response → reception → transduction', 'Transduction → reception → response', 'Random'], correctAnswer: 0, explanation: 'Ligand binds → cascade → cellular response.', difficulty: 'easy', topicSlug: 'signal-transduction' },
  { id: 100, question: 'Second messengers like cAMP:', options: ['Amplify the signal inside the cell', 'Bind receptors on surface', 'Are always proteins', 'Transport hormones'], correctAnswer: 0, explanation: 'Small molecules relay and amplify signals.', difficulty: 'medium', topicSlug: 'signal-transduction' },
  { id: 101, question: 'G protein-coupled receptors:', options: ['Activate G proteins when ligand binds', 'Are ion channels', 'Work without ligands', 'Only in bacteria'], correctAnswer: 0, explanation: 'Largest family of cell-surface receptors.', difficulty: 'medium', topicSlug: 'signal-transduction' },
  { id: 102, question: 'Apoptosis is:', options: ['Programmed cell death', 'Cell growth', 'Cell division', 'Cell migration'], correctAnswer: 0, explanation: 'Controlled self-destruction vital for development.', difficulty: 'easy', topicSlug: 'signal-transduction' },

  // ============ BIOTECHNOLOGY ============
  { id: 103, question: 'PCR amplifies:', options: ['DNA segments', 'Proteins', 'RNA only', 'Lipids'], correctAnswer: 0, explanation: 'Polymerase chain reaction copies DNA exponentially.', difficulty: 'easy', topicSlug: 'biotechnology' },
  { id: 104, question: 'Gel electrophoresis separates by:', options: ['Size (smaller moves faster)', 'Color', 'Weight only', 'Random'], correctAnswer: 0, explanation: 'Electric field pulls DNA through gel matrix.', difficulty: 'easy', topicSlug: 'biotechnology' },
  { id: 105, question: 'CRISPR-Cas9:', options: ['Edits specific DNA sequences', 'Amplifies DNA', 'Sequences genomes', 'Clones organisms'], correctAnswer: 0, explanation: 'Precise gene editing using guide RNA.', difficulty: 'medium', topicSlug: 'biotechnology' },
  { id: 106, question: 'Restriction enzymes:', options: ['Cut DNA at specific sequences', 'Join DNA fragments', 'Copy DNA', 'Denature proteins'], correctAnswer: 0, explanation: 'Molecular scissors from bacteria.', difficulty: 'easy', topicSlug: 'biotechnology' },
  { id: 107, question: 'Transformation in bacteria:', options: ['Uptake of foreign DNA', 'Virus-mediated transfer', 'Conjugation', 'Binary fission'], correctAnswer: 0, explanation: 'Bacteria take in plasmid DNA.', difficulty: 'medium', topicSlug: 'biotechnology' },
]

export function getApBiologyQuestions(count: number = 10, topicSlug?: string): ApBiologyQuestion[] {
  let pool = allQuestions
  if (topicSlug) {
    const filtered = pool.filter(q => q.topicSlug === topicSlug)
    if (filtered.length > 0) pool = filtered
  }
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
