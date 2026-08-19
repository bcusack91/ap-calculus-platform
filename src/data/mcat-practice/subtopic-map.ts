/**
 * Missed-question → specific-curriculum-topic attribution for the MCAT
 * diagnostic.
 *
 * The diagnostic's questions are tagged only with a broad DOMAIN (gen-chem,
 * organ-systems, …), which is why recommendations used to say "work on
 * Chemistry" instead of "study Thermodynamics". This table lets the scorer
 * attribute each missed question to a specific curriculum topic by matching
 * its text against concept keywords, scoped PER DOMAIN so shared words can't
 * cross-route (a "rate" question in gen-chem is kinetics; in psych-soc it
 * isn't). Within a domain, ORDER MATTERS: the first matching entry wins, so
 * specific concepts are listed before ones with broader vocabulary.
 *
 * Every slug here must be (a) a real mcat-prep Topic (live lesson page) and
 * (b) resolvable by the exit-quiz registry, or the remediation credit loop —
 * pass the exit quiz ≥80% or ace the entrance quiz — could never clear it and
 * the diagnostic retake gate would jam. scripts checks enforce both.
 */

export interface SubtopicRule {
  slug: string
  title: string
  pattern: RegExp
}

export const MCAT_SUBTOPIC_MAP: Record<string, SubtopicRule[]> = {
  'gen-chem': [
    { slug: 'mcat-general-chemistry-kinetics-mcat', title: 'Chemical Kinetics',
      pattern: /rate law|reaction rate|activation energy|arrhenius|catalys|rate constant|order of (the )?reaction|rate-determining|collision theory/i },
    { slug: 'mcat-general-chemistry-thermodynamics-mcat', title: 'Thermodynamics',
      pattern: /enthalp|entrop|gibbs|spontaneo|exothermic|endothermic|calorimet|heat capacity|free energy|hess|\bΔG\b|\bΔH\b|\bΔS\b/i },
    { slug: 'mcat-general-chemistry-acid-base-equilibrium-mcat', title: 'Acid-Base & Equilibrium',
      pattern: /\bpH\b|\bpKa\b|\bpOH\b|acid|base\b|buffer|titrat|equilibri|le chatelier|\bKa\b|\bKb\b|\bKeq\b|\bKsp\b|conjugate/i },
    { slug: 'mcat-general-chemistry-atomic-structure-mcat', title: 'Atomic Structure & Periodic Trends',
      pattern: /electron configuration|orbital|quantum number|periodic trend|ionization energy|electronegativ|atomic radius|isotope|photoelectron|valence electron|effective nuclear/i },
    { slug: 'mcat-general-chemistry-stoichiometry-mcat', title: 'Stoichiometry & Chemical Reactions',
      pattern: /stoichiometr|limiting (reagent|reactant)|molar mass|empirical formula|percent yield|molarity|dilution|balanced equation|moles of/i },
  ],

  'org-chem': [
    { slug: 'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat', title: 'Substitution & Elimination',
      pattern: /\bSN1\b|\bSN2\b|\bE1\b|\bE2\b|nucleophilic substitution|elimination reaction|leaving group|carbocation|backside attack/i },
    { slug: 'mcat-organic-chemistry-stereochemistry-mcat', title: 'Stereochemistry',
      pattern: /chiral|enantiomer|diastereomer|stereocenter|racemic|optically activ|meso compound|epimer|anomer|\(R\)|\(S\)/i },
    { slug: 'mcat-organic-chemistry-spectroscopy-mcat', title: 'Spectroscopy',
      pattern: /\bNMR\b|IR spectr|infrared|mass spectr|chemical shift|wavenumber|spectroscop/i },
    { slug: 'mcat-organic-chemistry-carbonyls-mcat', title: 'Carbonyl Chemistry',
      pattern: /aldehyde|ketone|carboxylic|ester|amide|acyl|aldol|enol|carbonyl|grignard|imine|acetal/i },
    { slug: 'mcat-organic-chemistry-functional-groups-mcat', title: 'Functional Groups & Nomenclature',
      pattern: /functional group|nomenclature|IUPAC|alcohol|ether\b|amine\b|alkene|alkyne|hydroxyl|substituent/i },
  ],

  physics: [
    { slug: 'mcat-physics-electricity-circuits-mcat', title: 'Circuits',
      pattern: /circuit|resistor|ohm'?s law|current of|voltage|in series|in parallel|kirchhoff|capacitor.*(charg|circuit)/i },
    { slug: 'mcat-physics-electricity-electrochemistry-mcat', title: 'Electrochemistry',
      pattern: /electrochem|galvanic|electrolytic|cathode|anode|electrode|cell potential|nernst|redox|oxidation state/i },
    { slug: 'mcat-physics-electricity-electrostatics-mcat', title: 'Electrostatics',
      pattern: /coulomb|electric field|point charge|electric potential|electrostatic/i },
    { slug: 'mcat-physics-electricity-magnetism-mcat', title: 'Magnetism & Electromagnetic Induction',
      pattern: /magnet|induction|flux|solenoid|lorentz/i },
    { slug: 'mcat-physics-electricity-optics-mcat', title: 'Optics',
      pattern: /lens|mirror|refract|reflect|snell|focal|diffraction|interference|polariz|optic/i },
    { slug: 'mcat-physics-mechanics-fluids-waves-mcat', title: 'Fluids & Waves',
      pattern: /fluid|buoyan|bernoulli|viscos|pascal|archimedes|wavelength|sound wave|doppler|resonan|harmonic|standing wave/i },
    { slug: 'mcat-physics-mechanics-momentum-collisions-mcat', title: 'Momentum & Collisions',
      pattern: /momentum|collision|impulse|elastic|inelastic/i },
    { slug: 'mcat-physics-mechanics-work-energy-power-mcat', title: 'Work, Energy, and Power',
      pattern: /work[- ]energy|kinetic energy|potential energy|power output|conservation of energy|\bjoule|\bwatt/i },
    { slug: 'mcat-physics-mechanics-forces-newton-laws-mcat', title: "Forces & Newton's Laws",
      pattern: /newton'?s|net force|friction|normal force|inclined plane|tension|free.?body/i },
    { slug: 'mcat-physics-mechanics-kinematics-mcat', title: 'Kinematics',
      pattern: /velocity|acceleration|projectile|displacement|free fall|kinematic/i },
  ],

  'biochem-cp': [
    { slug: 'mcat-biochemistry-enzymes-kinetics-mcat', title: 'Enzymes & Kinetics',
      pattern: /enzyme|michaelis|menten|\bKm\b|\bVmax\b|inhibit|allosteric|active site|cofactor|lineweaver/i },
    { slug: 'mcat-biochemistry-bioenergetics-mcat', title: 'Bioenergetics & ETC',
      pattern: /electron transport|oxidative phosphorylation|ATP synthase|proton gradient|chemiosmo|NADH|FADH/i },
    { slug: 'mcat-biochemistry-carbohydrate-metabolism-mcat', title: 'Carbohydrate Metabolism',
      pattern: /glycolysis|gluconeogenesis|glycogen|pentose phosphate|pyruvate|krebs|citric acid|TCA cycle/i },
    { slug: 'mcat-biochemistry-lipid-metabolism-mcat', title: 'Lipid Metabolism',
      pattern: /fatty acid|beta.?oxidation|lipid|cholesterol|ketone bod|triacylglycer|lipoprotein/i },
    { slug: 'mcat-biochemistry-amino-acids-proteins-mcat', title: 'Amino Acids & Proteins',
      pattern: /amino acid|peptide|protein (structure|folding)|side chain|isoelectric|zwitterion|alpha helix|beta sheet|denatur/i },
  ],

  cars: [
    { slug: 'mcat-cars-reasoning-mcat', title: 'CARS Logical Reasoning',
      pattern: /argument|assumption|strengthen|weaken|logical|conclusion|premise|infer/i },
    { slug: 'mcat-cars-passages-mcat', title: 'CARS Passage Types',
      pattern: /passage|author|tone|main idea/i },
  ],

  'cell-mol-bio': [
    { slug: 'mcat-molecular-biology-dna-replication-mcat', title: 'DNA Replication & Repair',
      pattern: /replication|helicase|DNA polymerase|okazaki|primase|ligase|telomer|proofreading|mismatch repair/i },
    { slug: 'mcat-molecular-biology-transcription-mcat', title: 'Transcription & RNA Processing',
      pattern: /transcription|RNA polymerase|promoter|splic|intron|exon|poly.?A tail|5.? cap/i },
    { slug: 'mcat-molecular-biology-translation-mcat', title: 'Translation & Protein Synthesis',
      pattern: /translation|tRNA|codon|anticodon|elongation factor|start codon|protein synthesis/i },
    { slug: 'mcat-molecular-biology-biotechnology-mcat', title: 'Biotechnology Methods',
      pattern: /\bPCR\b|electrophoresis|western blot|southern blot|CRISPR|cloning|plasmid|restriction enzyme|sequencing/i },
    { slug: 'mcat-cell-biology-membrane-transport-mcat', title: 'Membrane Transport',
      pattern: /membrane transport|diffusion|osmosis|active transport|symport|antiport|ion channel|carrier protein|facilitated|Na.?\/?K.?.?ATPase|sodium.?potassium pump/i },
    { slug: 'mcat-cell-biology-signaling-mcat', title: 'Cell Signaling',
      pattern: /signal(ing)? (pathway|cascade|transduction)|receptor|second messenger|G.?protein|kinase cascade|ligand|cAMP/i },
    { slug: 'mcat-cell-biology-cell-cycle-mcat', title: 'Cell Cycle & Apoptosis',
      pattern: /cell cycle|mitosis|meiosis|apoptosis|checkpoint|cyclin|interphase/i },
    { slug: 'mcat-microbiology-viruses-mcat', title: 'Viruses',
      pattern: /virus|viral|bacteriophage|capsid|retrovirus|lytic|lysogenic/i },
    { slug: 'mcat-microbiology-antimicrobials-mcat', title: 'Antimicrobials & Resistance',
      pattern: /antibiotic|antimicrobial|drug resistance/i },
    { slug: 'mcat-microbiology-bacteria-mcat', title: 'Bacteria',
      pattern: /bacteri|prokaryot|gram.?(positive|negative)|binary fission|operon|conjugation|transformation|transduction/i },
    { slug: 'mcat-cell-biology-organelles-mcat', title: 'Cell Structure & Organelles',
      pattern: /organelle|mitochondri|lysosome|golgi|endoplasmic|peroxisome|cytoskeleton|vesicle|nuclear envelope/i },
  ],

  'organ-systems': [
    { slug: 'mcat-anatomy-physiology-musculoskeletal-mcat', title: 'Musculoskeletal System',
      pattern: /muscle|sarcomere|actin|myosin|sarcoplasmic|troponin|tropomyosin|bone|osteo|skeletal/i },
    { slug: 'mcat-organ-systems-cardiovascular-mcat', title: 'Cardiovascular System',
      pattern: /cardiac|heart|blood pressure|artery|vein\b|capillar|cardiac output|stroke volume|systol|diastol|hemoglobin/i },
    { slug: 'mcat-organ-systems-respiratory-mcat', title: 'Respiratory System',
      pattern: /respirat|lung|alveol|ventilation|bohr effect|surfactant|gas exchange/i },
    { slug: 'mcat-organ-systems-renal-mcat', title: 'Renal System',
      pattern: /kidney|renal|nephron|glomerul|loop of henle|filtrat|reabsorpt|urine|\bADH\b|aldosterone/i },
    { slug: 'mcat-anatomy-physiology-reproductive-mcat', title: 'Reproductive System',
      pattern: /reproduct|menstrual|estrogen|progesterone|testosterone|spermato|oogene|ovulat/i },
    { slug: 'mcat-anatomy-physiology-sensory-mcat', title: 'Sensory Systems',
      pattern: /retina|cochlea|auditory|photorecept|olfact|taste bud|vestibular/i },
    { slug: 'mcat-anatomy-physiology-embryology-mcat', title: 'Embryology & Development',
      pattern: /embryo|gastrul|neurulat|germ layer|ectoderm|mesoderm|endoderm|blastocyst/i },
    { slug: 'mcat-organ-systems-endocrine-nervous-mcat', title: 'Endocrine & Nervous Systems',
      pattern: /hormone|endocrine|insulin|glucagon|thyroid|cortisol|pituitary|neuron|action potential|synap|neurotransmit|myelin|acetylcholine/i },
  ],

  genetics: [
    { slug: 'mcat-genetics-evolution-population-genetics-mcat', title: 'Population Genetics',
      pattern: /hardy.?weinberg|allele frequen|population genetic|genetic drift|gene flow|founder effect|bottleneck/i },
    { slug: 'mcat-genetics-evolution-natural-selection-mcat', title: 'Natural Selection & Speciation',
      pattern: /natural selection|speciation|fitness|adaptive radiation|divergent|convergent evolution|reproductive isolation/i },
    { slug: 'mcat-genetics-evolution-immunology-mcat', title: 'Immunology Basics',
      pattern: /immun|antibod|antigen|T.?cell|B.?cell|lymphocyte|\bMHC\b|vaccine/i },
    { slug: 'mcat-genetics-evolution-mendelian-mcat', title: 'Mendelian & Non-Mendelian Genetics',
      pattern: /mendel|punnett|dominant|recessive|dihybrid|monohybrid|pedigree|autosomal|X.?linked|genotype|phenotype/i },
  ],

  'psych-soc': [
    // Disorders first: vignettes mention conditioning/memory/development terms
    // that would otherwise be swallowed by the broader rules below.
    { slug: 'mcat-psychology-behavior-disorders-mcat', title: 'Psychological Disorders',
      pattern: /depressi|bipolar|mani[ac]|schizophreni|psychosis|psychotic|antipsychotic|panic (attack|disorder)|phobia|anxiety disorder|obsessive.?compulsive|\bOCD\b|\bPTSD\b|dissociat|anorexia|bulimia|eating disorder|\bADHD\b|autism|personality disorder|antidepressant|\bSSRI\b/i },
    { slug: 'mcat-psychology-behavior-learning-memory-mcat', title: 'Learning & Memory',
      pattern: /classical conditioning|operant|reinforc|memory|encoding|retrieval|amnesia|long.?term potentiation|habituat/i },
    { slug: 'mcat-psychology-behavior-sensation-perception-mcat', title: 'Sensation & Perception',
      pattern: /sensation|perception|threshold|weber|signal detection|gestalt|depth cue|bottom.?up|top.?down/i },
    { slug: 'mcat-psychology-behavior-development-mcat', title: 'Development & Personality',
      pattern: /erikson|piaget|attachment|personality|freud|identity (formation|development)|adolescen/i },
    { slug: 'mcat-psychology-behavior-cognition-language-mcat', title: 'Cognition & Language',
      pattern: /cognit|language acquisition|problem.?solving|heuristic|cognitive bias|broca|wernicke/i },
    { slug: 'mcat-sociology-health-disparities-mcat', title: 'Health Disparities',
      pattern: /health disparit|access to.*care|social determinant/i },
    { slug: 'mcat-sociology-groups-interaction-mcat', title: 'Groups & Social Interaction',
      pattern: /conformity|obedience|bystander|social facilitation|in.?group|out.?group|discriminat|prejudic|stereotype|group think/i },
    { slug: 'mcat-sociology-structure-stratification-mcat', title: 'Social Structure & Stratification',
      pattern: /stratif|social class|socioeconomic|inequality|social mobility|meritocra/i },
    { slug: 'mcat-sociology-culture-socialization-mcat', title: 'Culture & Socialization',
      pattern: /culture|socializ|social norm|assimilat|subculture|ethnocentri/i },
  ],
}

/**
 * Attribute one missed question to a specific curriculum topic, or null when
 * nothing in its domain's table matches (the scorer then falls back to the
 * domain-level recommendation, which is never wrong — just less specific).
 * Tries question + options first; the explanation only as a fallback, since
 * explanations sometimes name adjacent concepts.
 */
export function matchSubtopic(
  domainId: string,
  question: string,
  options: string[],
  explanation: string,
): SubtopicRule | null {
  const table = MCAT_SUBTOPIC_MAP[domainId]
  if (!table) return null
  const primary = `${question} ${options.join(' ')}`
  for (const rule of table) if (rule.pattern.test(primary)) return rule
  for (const rule of table) if (rule.pattern.test(explanation)) return rule
  return null
}
