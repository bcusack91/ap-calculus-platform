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
  return slug.replace(/-mcat$/, '').replace(/^mcat-/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function generateFile(topic, partIdx) {
  const part = topic.parts[partIdx];
  const partNum = partIdx + 1;
  const exportName = `${topic.exportBase}Part${partNum}Data`;
  const topicTitle = slugToTitle(topic.slug);

  let sections = [];

  sections.push(`    {
      id: '${topic.slug.substring(0, 5)}${partNum}-intro',
      type: 'text' as const,
      content: \`
# ${partIdx === 0 ? '🏥 ' + topicTitle : part.title}

**Part ${partNum} of 7 — ${part.title}**

${part.textSections[0].body}
      \`
    }`);

  if (part.mcQuestions.length > 0) {
    const halfQ = Math.ceil(part.mcQuestions.length / 2);
    sections.push(generateMCSection(topic.slug, partNum, 'quiz1', part.mcQuestions.slice(0, halfQ)));
  }

  sections.push(`    {
      id: '${topic.slug.substring(0, 5)}${partNum}-detail',
      type: 'text' as const,
      content: \`
${part.textSections[1].body}
      \`
    }`);

  if (part.mcQuestions.length > 1) {
    const halfQ = Math.ceil(part.mcQuestions.length / 2);
    const rest = part.mcQuestions.slice(halfQ);
    if (rest.length > 0) {
      sections.push(generateMCSection(topic.slug, partNum, 'quiz2', rest));
    }
  }

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

// ═══════════════════════════════════════════════════════════════
// MCAT Prep — 20 Topics across all 4 MCAT Sections
// Section 1: Chemical & Physical Foundations (Topics 1-5)
// Section 2: CARS — Critical Analysis & Reasoning (Topics 6-8)
// Section 3: Biological & Biochemical Foundations (Topics 9-14)
// Section 4: Psychological, Social & Biological Foundations (Topics 15-18)
// Strategy & Test Day (Topics 19-20)
// ═══════════════════════════════════════════════════════════════

const mcatTopics = [
  // ─── SECTION 1: Chem/Phys Foundations ───
  {
    slug: 'mcat-general-chemistry-mcat', exportBase: 'mcatGenChem',
    partTopics: ['Atomic Structure & Periodic Trends','Chemical Bonding','Stoichiometry & Solutions','Acids, Bases & Buffers','Chemical Kinetics','Thermodynamics & Equilibrium','Review & MCAT Practice'],
    concepts: [
      ['Electron configuration determines chemical behavior: 1s2 2s2 2p6 3s2 ...','Periodic trends: electronegativity, ionization energy, and atomic radius follow predictable patterns across periods and groups','Effective nuclear charge (Zeff) increases across a period as electrons are added to the same shell','Quantum numbers (n, l, ml, ms) describe the state of each electron — no two electrons share all four (Pauli exclusion)'],
      ['Ionic bonds form between metals and nonmetals via electron transfer; covalent bonds share electrons','VSEPR theory predicts molecular geometry from electron pair repulsion around the central atom','Electronegativity differences determine bond polarity: <0.5 nonpolar, 0.5-1.7 polar covalent, >1.7 ionic','Hybridization (sp, sp2, sp3) determines geometry: linear, trigonal planar, tetrahedral respectively'],
      ['Molarity (M) = moles of solute / liters of solution — the most common concentration unit on the MCAT','Dilution: M1V1 = M2V2 — moles of solute remain constant','Limiting reagent: the reactant that runs out first determines the maximum product','Percent yield = (actual yield / theoretical yield) x 100'],
      ['Bronsted-Lowry: acids donate H+, bases accept H+; Lewis: acids accept electron pairs, bases donate them','pH = -log[H+]; pOH = -log[OH-]; pH + pOH = 14 at 25C','Buffer = weak acid + conjugate base (or weak base + conjugate acid) — resists pH change','Henderson-Hasselbalch: pH = pKa + log([A-]/[HA]) — critical for MCAT buffer calculations'],
      ['Rate = k[A]^m[B]^n — rate law is determined experimentally, not from stoichiometry','Arrhenius equation: k = Ae^(-Ea/RT) — higher temperature increases rate constant k','Catalysts lower activation energy (Ea) without being consumed — enzymes are biological catalysts','Rate-determining step: the slowest step in a mechanism controls the overall rate']
    ]
  },
  {
    slug: 'mcat-organic-chemistry-mcat', exportBase: 'mcatOrgChem',
    partTopics: ['Functional Groups & Nomenclature','Stereochemistry','Substitution & Elimination','Carbonyl Chemistry','Carboxylic Acid Derivatives','Spectroscopy & Structure','Review & MCAT Practice'],
    concepts: [
      ['Key functional groups: hydroxyl (-OH), carbonyl (C=O), carboxyl (-COOH), amino (-NH2), thiol (-SH)','Naming: find the longest carbon chain, number from the end nearest the first substituent','Degree of unsaturation (DoU) = (2C + 2 + N - H - X) / 2 — predicts rings and double bonds','Functional group interconversions are heavily tested: alcohol to aldehyde to carboxylic acid'],
      ['Chirality: a carbon with 4 different substituents is a chiral center (stereocenter)','R/S configuration: assign priorities by atomic number (Cahn-Ingold-Prelog rules)','Enantiomers: nonsuperimposable mirror images with identical physical properties but opposite optical rotation','Diastereomers: stereoisomers that are NOT mirror images — different physical properties'],
      ['SN1: two steps, carbocation intermediate, racemization, favored by 3-degree substrate and polar protic solvent','SN2: one step, backside attack, inversion of configuration, favored by 1-degree substrate and strong nucleophile','E1: two steps, carbocation, Zaitsev product (more substituted alkene), competes with SN1','E2: one step, anti-periplanar geometry required, strong base needed, Zaitsev product preferred'],
      ['Aldehydes (RCHO) are more reactive than ketones (RCOR) due to less steric hindrance','Nucleophilic addition: nucleophile attacks electrophilic carbonyl carbon','Aldol condensation: alpha-carbon of one aldehyde attacks another to form beta-hydroxy carbonyl','Hemiacetal/acetal formation: important for cyclic sugar chemistry on the MCAT'],
      ['Order of reactivity: acid halide > anhydride > ester > amide (most to least reactive)','Nucleophilic acyl substitution: the leaving group departs as the nucleophile attacks','Esters undergo hydrolysis (saponification with base) — critical for lipid metabolism','Amide bond formation: condensation of carboxylic acid + amine — this is the peptide bond'],
      ['IR spectroscopy: O-H broad ~3300, N-H sharp ~3300, C=O sharp ~1700, C-H ~2900 cm-1','1H NMR: chemical shift indicates electronic environment; splitting follows n+1 rule','Mass spectrometry: molecular ion peak gives molecular weight; fragmentation reveals structure','UV-Vis: conjugated systems absorb longer wavelengths — more conjugation = lower energy transition']
    ]
  },
  {
    slug: 'mcat-physics-mechanics-mcat', exportBase: 'mcatPhysMech',
    partTopics: ['Kinematics & Motion','Forces & Newtons Laws','Work, Energy & Power','Momentum & Collisions','Fluids & Pressure','Waves & Sound','Review & MCAT Practice'],
    concepts: [
      ['v = v0 + at; x = x0 + v0t + (1/2)at2; v2 = v02 + 2a(x-x0) — the Big 3 kinematic equations','Projectile motion: horizontal velocity is constant; vertical acceleration = g = 9.8 m/s2','Vectors: break into components using sin and cos; add components separately','Displacement is a vector (direction matters); distance is a scalar (total path length)'],
      ['F = ma — net force equals mass times acceleration (Newtons second law)','Normal force is perpendicular to the contact surface; friction is parallel and opposes motion','Inclined plane: weight component along plane = mg sin(theta); perpendicular = mg cos(theta)','Static friction (fs <= us*N) prevents motion; kinetic friction (fk = uk*N) acts during motion'],
      ['Work = Fd cos(theta) — only the component of force along displacement does work','Kinetic energy KE = (1/2)mv2; Work-energy theorem: Wnet = delta KE','Potential energy: gravitational PE = mgh; elastic PE = (1/2)kx2','Conservation of energy: KE1 + PE1 = KE2 + PE2 (when no non-conservative forces)'],
      ['Momentum p = mv; Impulse J = F*delta-t = delta-p','Conservation of momentum: total momentum before = total momentum after (isolated system)','Elastic collision: both momentum and KE conserved; Inelastic: only momentum conserved','Center of mass: x_cm = (m1x1 + m2x2)/(m1 + m2) — moves as if all mass is concentrated there'],
      ['Pressure P = F/A; units: Pascal (Pa) = N/m2; 1 atm = 101,325 Pa','Hydrostatic pressure: P = P0 + rho*g*h — pressure increases with depth','Buoyancy (Archimedes): Fb = rho_fluid * V_displaced * g — object floats if Fb >= weight','Bernoulli equation: P + (1/2)rho*v2 + rho*g*h = constant along a streamline'],
      ['Wave speed v = f*lambda; frequency f = 1/T where T is the period','Sound is a longitudinal wave; light is a transverse electromagnetic wave','Doppler effect: frequency increases when source and observer approach each other','Intensity follows inverse-square law: I is proportional to 1/r2; decibels: beta = 10*log(I/I0)']
    ]
  },
  {
    slug: 'mcat-physics-electricity-mcat', exportBase: 'mcatPhysElec',
    partTopics: ['Electrostatics & Coulombs Law','Electric Circuits','Magnetism & EM Induction','Optics & Light','Nuclear Physics & Radioactivity','Electrochemistry','Review & MCAT Practice'],
    concepts: [
      ['Coulombs law: F = kq1q2/r2 — force between charges; like charges repel, opposite attract','Electric field E = F/q = kQ/r2 — field points away from positive, toward negative charges','Electric potential V = kQ/r; Voltage = energy per unit charge (J/C = Volt)','Capacitance C = Q/V; parallel plate: C = epsilon0*A/d; energy stored = (1/2)CV2'],
      ['Ohms law: V = IR; Power P = IV = I2R = V2/R','Series: resistances add (Rtotal = R1+R2+...); current is same through all','Parallel: 1/Rtotal = 1/R1 + 1/R2 + ...; voltage is same across all branches','Kirchhoffs laws: junction rule (currents in = currents out); loop rule (voltage drops sum to zero)'],
      ['Moving charges create magnetic fields; F = qvB sin(theta) — force on a moving charge','Right-hand rule: point fingers in direction of v, curl toward B, thumb points to F (for positive charge)','Faradays law: changing magnetic flux induces EMF; Lenzs law: induced current opposes the change','Electromagnetic spectrum: radio, microwave, IR, visible, UV, X-ray, gamma — increasing frequency/energy'],
      ['Refraction: Snells law n1*sin(theta1) = n2*sin(theta2) — light bends toward normal in denser medium','Lenses: converging (convex) focuses light; diverging (concave) spreads light','Thin lens equation: 1/f = 1/do + 1/di; magnification m = -di/do','Total internal reflection occurs when angle of incidence > critical angle (only going from dense to less dense)'],
      ['Radioactive decay: alpha (He-4 nucleus), beta (electron or positron), gamma (photon)','Half-life: t1/2 = ln(2)/lambda; N(t) = N0*(1/2)^(t/t1/2)','Mass-energy equivalence: E = mc2 — mass defect converts to binding energy','Nuclear fission splits heavy nuclei; fusion combines light nuclei — both release energy'],
      ['Galvanic (voltaic) cells: spontaneous redox, positive Ecell, negative delta-G','Electrolytic cells: non-spontaneous, require external voltage, used for plating/purification','Nernst equation: E = E0 - (RT/nF)*ln(Q) — adjusts cell potential for non-standard conditions','Standard reduction potentials: more positive = stronger oxidizing agent (wants to be reduced)']
    ]
  },
  {
    slug: 'mcat-biochemistry-foundations-mcat', exportBase: 'mcatBiochem',
    partTopics: ['Amino Acids & Protein Structure','Enzyme Kinetics','Carbohydrate Metabolism','Lipids & Membranes','Nucleic Acids & DNA','Bioenergetics & ATP','Review & MCAT Practice'],
    concepts: [
      ['20 standard amino acids: nonpolar (G,A,V,L,I,P,F,W,M), polar (S,T,C,Y,N,Q), charged (D,E,K,R,H)','Protein structure: primary (sequence), secondary (alpha-helix, beta-sheet), tertiary (3D fold), quaternary (subunits)','Peptide bond: planar, partial double-bond character, trans configuration preferred','pI = isoelectric point — pH where net charge = 0; average of flanking pKa values'],
      ['Michaelis-Menten: v = Vmax[S]/(Km+[S]); Km = substrate concentration at half-Vmax','Lineweaver-Burk plot: 1/v vs 1/[S] — y-intercept = 1/Vmax, x-intercept = -1/Km','Competitive inhibitor: binds active site, increases apparent Km, Vmax unchanged','Non-competitive inhibitor: binds allosteric site, decreases Vmax, Km unchanged'],
      ['Glycolysis: glucose to 2 pyruvate, net 2 ATP + 2 NADH (cytoplasm, anaerobic)','Pyruvate dehydrogenase: pyruvate to acetyl-CoA + CO2 + NADH (mitochondrial matrix)','Citric acid cycle (Krebs): acetyl-CoA to 2 CO2 + 3 NADH + 1 FADH2 + 1 GTP per turn','Gluconeogenesis: essentially reverse glycolysis with 4 bypass enzymes — occurs in liver'],
      ['Fatty acids: saturated (no double bonds, straight) vs unsaturated (double bonds, kinked)','Beta-oxidation: fatty acid to acetyl-CoA units, producing FADH2 and NADH per cycle','Cell membrane: phospholipid bilayer with cholesterol for fluidity and integral/peripheral proteins','Lipid-soluble signals (steroids) cross the membrane; water-soluble signals need receptors'],
      ['DNA: deoxyribose sugar, A-T (2 H-bonds), G-C (3 H-bonds), antiparallel double helix','Replication: semiconservative, 5-to-3 direction, DNA polymerase III, leading/lagging strands','Transcription: DNA to mRNA by RNA polymerase; processing includes 5-cap, poly-A tail, splicing','Translation: mRNA to protein at ribosome; tRNA brings amino acids; codons read 5-to-3'],
      ['Oxidative phosphorylation: ETC creates proton gradient; ATP synthase uses it to make ATP','NADH yields ~2.5 ATP; FADH2 yields ~1.5 ATP (via Complex I and II respectively)','Complete glucose oxidation: ~30-32 ATP total (glycolysis + Krebs + ETC)','Chemiosmotic theory (Peter Mitchell): proton motive force drives ATP synthesis across inner mitochondrial membrane']
    ]
  },

  // ─── SECTION 2: CARS (Critical Analysis & Reasoning Skills) ───
  {
    slug: 'mcat-cars-strategy-mcat', exportBase: 'mcatCarsStrat',
    partTopics: ['CARS Overview & Approach','Active Reading Techniques','Main Idea & Argument','Inference & Application','Tone & Author Perspective','Question Types & Traps','Review & MCAT Practice'],
    concepts: [
      ['CARS = 53 questions in 90 minutes across 9 passages — NO outside knowledge needed','Passages come from humanities, social sciences, ethics, philosophy, and cultural studies','Read the passage FIRST, then answer questions — do not skim','Build a mental outline: what is each paragraphs purpose?'],
      ['Annotate mentally: identify the thesis, supporting arguments, and counterarguments','Look for transition words: however, moreover, nevertheless, conversely — they signal shifts','Note the authors tone: is it critical, supportive, neutral, ironic, or ambivalent?','Paraphrase each paragraph in one sentence to ensure comprehension'],
      ['The main idea is the central claim the author is making — not just the topic','Distinguish main idea from supporting details — details support the main idea','Wrong answers are often too narrow (one detail) or too broad (beyond the passage)','The thesis is usually in the first or last paragraph — but not always'],
      ['Inference = what must be true based on the passage (not explicitly stated)','Application: how would the author respond to a new scenario?','Stay close to the text — MCAT inferences are conservative, not speculative','Strongly supported > possibly true; eliminate answers that go too far'],
      ['Author attitude: positive, negative, neutral, mixed, or ironic','Word choice reveals tone: clinical vs. passionate, dismissive vs. respectful','Distinguish the authors view from views they are describing or critiquing','Rhetorical purpose: why did the author include this example or argument?'],
      ['Foundation: answer is directly stated in the passage','Reasoning Beyond the Text: apply passage ideas to new situations','Reasoning Within the Text: evaluate the logic and structure of the argument','Common traps: extreme language, out of scope, opposite of the authors view, partially correct']
    ]
  },
  {
    slug: 'mcat-cars-passages-mcat', exportBase: 'mcatCarsPsg',
    partTopics: ['Humanities Passages','Social Science Passages','Ethics & Philosophy','Arts & Culture Passages','Comparative & Contrasting','Time Management','Review & MCAT Practice'],
    concepts: [
      ['Humanities: history, literature, philosophy, religion — often argumentative or interpretive','These passages may present competing historical or philosophical interpretations','Look for the authors thesis and the evidence used to support it','Cultural context clues help identify the time period and perspective'],
      ['Social science: psychology, sociology, anthropology, economics, political science','Data or studies may be described — evaluate the methodology and conclusions','Correlation vs. causation: does the author conflate the two?','Identify assumptions: what does the author take for granted?'],
      ['Ethics passages present moral dilemmas or competing ethical frameworks','Common frameworks: utilitarianism (outcomes), deontology (duties), virtue ethics (character)','Identify the authors position and the strongest counterargument','MCAT does not test your personal ethics — only your comprehension of the argument'],
      ['Art, music, architecture, and literary criticism passages appear on CARS','Focus on the authors evaluation: what makes this work significant?','Aesthetic arguments may be subjective — track the authors reasoning, not your own opinion','These passages often explore cultural significance and historical context'],
      ['Some passages present two perspectives — identify areas of agreement and disagreement','Track each authors main claim and supporting evidence separately','Questions may ask how one author would respond to the others argument','Create a brief mental comparison chart: Author A says X because...; Author B says Y because...'],
      ['10 minutes per passage (9 passages x 10 min = 90 min total)','Spend ~4 minutes reading, ~6 minutes answering the ~6 questions','If stuck on a question for >90 seconds, flag it and move on','Do all passages — there is no penalty for wrong answers, never leave blanks']
    ]
  },
  {
    slug: 'mcat-cars-reasoning-mcat', exportBase: 'mcatCarsReason',
    partTopics: ['Logical Reasoning','Strengthening & Weakening Arguments','Assumption Identification','Evaluating Evidence','Analogical Reasoning','Common Logical Fallacies','Review & MCAT Practice'],
    concepts: [
      ['Arguments have premises (evidence) and conclusions (claims) — identify both','Valid reasoning: if the premises are true, the conclusion must follow','Sound reasoning: valid AND the premises are actually true','Deductive: general to specific (if all X are Y, and Z is X, then Z is Y)'],
      ['Strengthen: find evidence that supports the conclusion or fills a gap','Weaken: find evidence that undermines a premise or provides a counterexample','The correct answer addresses the specific connection between evidence and conclusion','Be careful of answers that are true but irrelevant to the argument'],
      ['An assumption is an unstated premise the argument relies on','Necessary assumption: without it, the argument falls apart','Sufficient assumption: with it, the conclusion definitely follows','Test by negation: if negating the answer choice destroys the argument, it is a necessary assumption'],
      ['Evaluate the quality of evidence: anecdotal vs. empirical, sample size, controls','Distinguish facts from opinions — the MCAT will test whether you can tell the difference','Look for cherry-picking: does the author ignore contradictory evidence?','Consider alternative explanations for the data presented'],
      ['Analogical reasoning: situation A is like situation B, so what is true of A should be true of B','Strength depends on the relevance of the similarities between the two cases','Identify the key similarity the analogy relies on — then assess if it holds','Weak analogies are a common MCAT trap: superficial similarity, deep differences'],
      ['Ad hominem: attacking the person instead of the argument','Straw man: misrepresenting an opponents position to make it easier to attack','False dichotomy: presenting only two options when more exist','Appeal to authority: citing an authority figure rather than evidence (can be valid or fallacious)']
    ]
  },

  // ─── SECTION 3: Biological & Biochemical Foundations ───
  {
    slug: 'mcat-cell-biology-mcat', exportBase: 'mcatCellBio',
    partTopics: ['Cell Structure & Organelles','Membrane Transport','Cell Signaling','Cell Cycle & Division','Apoptosis & Regulation','Stem Cells & Differentiation','Review & MCAT Practice'],
    concepts: [
      ['Eukaryotic cells have membrane-bound organelles; prokaryotic cells do not','Nucleus: contains DNA; Mitochondria: ATP via oxidative phosphorylation; ER: protein/lipid synthesis','Rough ER: ribosome-studded, protein synthesis; Smooth ER: lipid synthesis, detoxification','Golgi apparatus: modifies, sorts, and packages proteins for secretion or intracellular use'],
      ['Passive transport: diffusion, osmosis, facilitated diffusion — no energy required, down concentration gradient','Active transport: Na+/K+ ATPase (3 Na+ out, 2 K+ in per ATP), against gradient','Endocytosis: phagocytosis (solids), pinocytosis (fluids), receptor-mediated (specific molecules)','Exocytosis: vesicles fuse with membrane to release contents (neurotransmitters, hormones)'],
      ['Signal transduction: ligand binds receptor, activates intracellular cascade, produces cellular response','G-protein coupled receptors (GPCRs): activate G proteins which activate effector enzymes','Receptor tyrosine kinases (RTKs): dimerize and autophosphorylate upon ligand binding','Second messengers: cAMP, IP3, DAG, Ca2+ — amplify the signal inside the cell'],
      ['Cell cycle: G1 (growth), S (DNA synthesis), G2 (prep for division), M (mitosis)','Mitosis: prophase, metaphase, anaphase, telophase — produces 2 identical diploid cells','Meiosis: two divisions producing 4 haploid gametes; crossing over creates genetic diversity','Checkpoints: G1/S (DNA damage?), G2/M (replication complete?), metaphase (all chromosomes attached?)'],
      ['Apoptosis: programmed cell death — caspase cascade leads to orderly cell dismantling','Intrinsic pathway: mitochondrial stress releases cytochrome c, activating caspase-9','Extrinsic pathway: death ligands (FasL, TNF) bind death receptors, activating caspase-8','Cancer: loss of apoptosis regulation + gain of proliferation signals = uncontrolled growth'],
      ['Stem cells: self-renewing, can differentiate into specialized cell types','Totipotent: can become any cell (zygote); Pluripotent: any cell except placenta (embryonic stem cells)','Multipotent: limited range (hematopoietic stem cells make blood cells)','Differentiation is controlled by gene expression — same DNA, different genes active']
    ]
  },
  {
    slug: 'mcat-molecular-biology-mcat', exportBase: 'mcatMolBio',
    partTopics: ['DNA Replication','Transcription & RNA Processing','Translation & Protein Synthesis','Gene Regulation','Mutations & Repair','Biotechnology & Lab Techniques','Review & MCAT Practice'],
    concepts: [
      ['Replication is semiconservative: each new DNA molecule has one old and one new strand','Helicase unwinds, primase lays RNA primer, DNA pol III extends 5-to-3, ligase seals gaps','Leading strand: continuous synthesis; Lagging strand: Okazaki fragments','Telomerase extends telomeres in germ cells and stem cells — prevents chromosome shortening'],
      ['Transcription: RNA polymerase reads template 3-to-5, synthesizes mRNA 5-to-3','Promoter: TATA box ~25 bp upstream; transcription factors help RNA pol II bind','Post-transcriptional processing: 5-cap (7-methylguanosine), 3-poly-A tail, intron splicing','Alternative splicing: one gene can produce multiple mRNA variants and thus multiple proteins'],
      ['Ribosome: small subunit reads mRNA; large subunit catalyzes peptide bond formation','Start codon AUG (methionine) initiates translation; 3 stop codons: UAA, UAG, UGA','tRNA anticodon pairs with mRNA codon; aminoacyl-tRNA synthetase charges tRNA with correct amino acid','Post-translational modifications: phosphorylation, glycosylation, ubiquitination, proteolytic cleavage'],
      ['Operon model (prokaryotes): lac operon (inducible), trp operon (repressible)','Eukaryotic regulation: enhancers, silencers, transcription factors, chromatin remodeling','Epigenetics: DNA methylation silences genes; histone acetylation activates genes','miRNA and siRNA: small RNAs that silence gene expression post-transcriptionally'],
      ['Point mutations: silent, missense, nonsense, frameshift (insertion/deletion)','Missense: different amino acid; Nonsense: premature stop codon; Silent: same amino acid','DNA repair: mismatch repair, base excision repair, nucleotide excision repair','Mutagens: UV light (thymine dimers), chemicals (alkylating agents), radiation (double-strand breaks)'],
      ['PCR: amplifies specific DNA sequences using primers, Taq polymerase, and thermal cycling','Gel electrophoresis: separates DNA/protein by size; smaller fragments migrate faster','CRISPR-Cas9: gene editing using guide RNA to target specific sequences','Southern blot (DNA), Northern blot (RNA), Western blot (protein) — remember SNOWdrop']
    ]
  },
  {
    slug: 'mcat-organ-systems-mcat', exportBase: 'mcatOrganSys',
    partTopics: ['Cardiovascular System','Respiratory System','Renal & Excretory System','Digestive System','Endocrine System','Nervous System','Review & MCAT Practice'],
    concepts: [
      ['Heart: 4 chambers; right side pumps to lungs (pulmonary), left side pumps to body (systemic)','Cardiac cycle: SA node pacemaker, atrial contraction, AV node delay, ventricular contraction','Blood pressure: systolic/diastolic; regulated by baroreceptors, RAAS, and ANP','Blood components: RBCs (O2 transport), WBCs (immunity), platelets (clotting), plasma (fluid)'],
      ['Ventilation: diaphragm contracts (inhalation), relaxes (exhalation); negative pressure breathing','Gas exchange: O2 diffuses into blood in alveoli; CO2 diffuses out — driven by partial pressure gradients','Hemoglobin: cooperative binding, sigmoid curve; Bohr effect: low pH/high CO2 shifts curve right (releases O2)','Lung volumes: tidal volume, vital capacity, residual volume, total lung capacity'],
      ['Nephron: glomerulus (filtration), PCT (reabsorption), loop of Henle (concentration), DCT/CD (fine-tuning)','GFR = glomerular filtration rate; filtered = all small molecules, not proteins/cells','ADH (from posterior pituitary): increases water reabsorption in collecting duct','Aldosterone: increases Na+ reabsorption (and thus water) in DCT; RAAS regulates blood pressure'],
      ['Mechanical digestion (mouth, stomach) + chemical digestion (enzymes, bile)','Stomach: HCl activates pepsinogen to pepsin (protein digestion), pH ~2','Small intestine: pancreatic enzymes (trypsin, lipase, amylase) + bile salts emulsify fats','Absorption: amino acids and sugars via villi in small intestine; water absorbed in large intestine'],
      ['Hypothalamus controls pituitary; anterior pituitary releases FSH, LH, TSH, ACTH, GH, prolactin','Thyroid: T3/T4 increase metabolic rate; Parathyroid: PTH increases blood Ca2+','Adrenal cortex: cortisol (stress), aldosterone (Na+ retention); Adrenal medulla: epinephrine','Pancreas: insulin (lowers glucose, promotes storage) vs glucagon (raises glucose, promotes breakdown)'],
      ['Central nervous system: brain + spinal cord; Peripheral: somatic + autonomic','Autonomic: sympathetic (fight or flight) vs parasympathetic (rest and digest)','Neuron: dendrites receive, axon transmits, synaptic terminal releases neurotransmitters','Action potential: resting (-70mV), depolarization (Na+ in), repolarization (K+ out), refractory period']
    ]
  },
  {
    slug: 'mcat-genetics-evolution-mcat', exportBase: 'mcatGenetics',
    partTopics: ['Mendelian Genetics','Non-Mendelian Inheritance','Population Genetics','Natural Selection','Speciation & Phylogeny','Immune System','Review & MCAT Practice'],
    concepts: [
      ['Mendels laws: segregation (alleles separate in meiosis) and independent assortment (genes on different chromosomes)','Dominant/recessive: heterozygote shows dominant phenotype; homozygous recessive shows recessive','Punnett squares: predict offspring ratios; monohybrid cross Aa x Aa = 1:2:1 genotype, 3:1 phenotype','Test cross: cross with homozygous recessive to determine unknown genotype'],
      ['Incomplete dominance: heterozygote is intermediate (red x white = pink)','Codominance: both alleles fully expressed (AB blood type)','X-linked: gene on X chromosome; males are hemizygous (one copy determines phenotype)','Polygenic traits: multiple genes contribute (height, skin color); continuous distribution'],
      ['Hardy-Weinberg equilibrium: p2 + 2pq + q2 = 1; p + q = 1 (allele frequencies)','Conditions: no mutation, no selection, no migration, random mating, large population','Genetic drift: random changes in allele frequency, stronger in small populations','Bottleneck effect and founder effect: reduce genetic diversity'],
      ['Natural selection: differential reproductive success based on heritable traits','Fitness: reproductive success, not physical strength','Directional, stabilizing, and disruptive selection — different effects on trait distribution','Sexual selection: traits favored in mate choice (peacock tail) vs survival'],
      ['Speciation: formation of new species via reproductive isolation','Allopatric: geographic barrier; Sympatric: same location, different niches or timing','Phylogenetic trees: show evolutionary relationships; most recent common ancestor at branch point','Homologous structures: shared ancestry; Analogous: similar function, different origin (convergent evolution)'],
      ['Innate immunity: skin, mucous membranes, phagocytes, complement, inflammation — fast, nonspecific','Adaptive immunity: B cells (antibodies, humoral) and T cells (cell-mediated) — slow, specific, memory','MHC I: on all nucleated cells, presents to CD8+ cytotoxic T cells','MHC II: on antigen-presenting cells (macrophages, dendritic cells, B cells), presents to CD4+ helper T cells']
    ]
  },
  {
    slug: 'mcat-anatomy-physiology-mcat', exportBase: 'mcatAnatPhys',
    partTopics: ['Musculoskeletal System','Reproductive System','Integumentary System','Lymphatic & Immune','Sensory Systems','Embryology & Development','Review & MCAT Practice'],
    concepts: [
      ['Skeletal muscle: voluntary, striated, multinucleated; Smooth muscle: involuntary, non-striated; Cardiac: involuntary, striated, intercalated discs','Sarcomere: functional unit of muscle; actin (thin) + myosin (thick); sliding filament theory','Muscle contraction: Ca2+ released from SR, binds troponin, exposes binding sites, myosin pulls actin','Bone: osteoblasts build, osteoclasts break down; regulated by PTH (resorption) and calcitonin (deposition)'],
      ['Male: testes produce sperm + testosterone; pathway: seminiferous tubules, epididymis, vas deferens','Female: ovaries produce eggs + estrogen/progesterone; follicle matures, ovulation, corpus luteum','Menstrual cycle: follicular phase (FSH, estrogen), ovulation (LH surge), luteal phase (progesterone)','Fertilization: sperm capacitation, acrosome reaction, cortical reaction prevents polyspermy'],
      ['Skin layers: epidermis (keratinocytes, melanocytes), dermis (connective tissue), hypodermis (fat)','Functions: protection, thermoregulation, sensation, vitamin D synthesis, immune defense','Thermoregulation: vasodilation/vasoconstriction, sweating, shivering','Wound healing: hemostasis, inflammation, proliferation, remodeling'],
      ['Lymphatic system: returns interstitial fluid to blood; lymph nodes filter pathogens','Spleen: filters blood, recycles old RBCs, reservoir of monocytes and platelets','Thymus: T cell maturation; Bone marrow: B cell maturation','Vaccines: expose immune system to antigen, generating memory cells without disease'],
      ['Vision: cornea + lens focus light on retina; rods (dim light) and cones (color)','Hearing: sound waves vibrate tympanic membrane, ossicles amplify, cochlea transduces','Vestibular system: semicircular canals detect rotational acceleration; otolith organs detect linear','Taste and smell: chemoreceptors; Somatosensory: mechanoreceptors, thermoreceptors, nociceptors'],
      ['Cleavage: rapid mitotic divisions of zygote; morula, then blastocyst (inner cell mass + trophoblast)','Gastrulation: three germ layers form — ectoderm (skin, nervous system), mesoderm (muscle, bone, blood), endoderm (GI, lungs, liver)','Neurulation: ectoderm folds to form neural tube (becomes CNS)','Organogenesis: germ layers differentiate into organs; teratogens can disrupt development']
    ]
  },
  {
    slug: 'mcat-microbiology-mcat', exportBase: 'mcatMicro',
    partTopics: ['Bacteria Structure & Function','Viruses & Prions','Fungi & Parasites','Microbial Genetics','Antimicrobial Agents','Host-Pathogen Interactions','Review & MCAT Practice'],
    concepts: [
      ['Bacteria: prokaryotic, cell wall (peptidoglycan), no membrane-bound organelles','Gram-positive: thick peptidoglycan, stains purple; Gram-negative: thin peptidoglycan + outer membrane, stains pink','Bacterial shapes: cocci (spheres), bacilli (rods), spirilla (spirals)','Binary fission: asexual reproduction; doubling time can be as short as 20 minutes'],
      ['Viruses: obligate intracellular parasites; DNA or RNA genome, protein capsid, some have envelope','Lytic cycle: virus replicates immediately, lyses host cell; Lysogenic: integrates into host genome','Retroviruses (HIV): RNA genome, reverse transcriptase makes DNA, integrates as provirus','Prions: misfolded proteins that cause other proteins to misfold — no nucleic acid (e.g., CJD, mad cow)'],
      ['Fungi: eukaryotic, cell walls of chitin, heterotrophic, reproduce by spores','Parasites: organisms that live on/in hosts; protozoa (single-celled) and helminths (worms)','Opportunistic infections: normally harmless microbes cause disease in immunocompromised hosts','Symbiosis: mutualism (both benefit), commensalism (one benefits, other neutral), parasitism (one benefits, other harmed)'],
      ['Transformation: uptake of free DNA from environment; Transduction: DNA transfer via bacteriophage','Conjugation: direct DNA transfer via pilus (F-plasmid); horizontal gene transfer','Plasmids: extrachromosomal DNA, often carry antibiotic resistance genes','Transposons: jumping genes that can move within and between genomes'],
      ['Antibiotics: target cell wall (penicillin), protein synthesis (tetracycline), DNA replication (fluoroquinolones)','Antivirals: target viral entry, replication, or assembly (e.g., acyclovir, protease inhibitors)','Antibiotic resistance: mutation or acquired via horizontal gene transfer; a growing global threat','Antiseptics (on living tissue) vs disinfectants (on surfaces) vs sterilization (complete elimination)'],
      ['Virulence factors: toxins (exotoxins, endotoxins), adhesins, capsule, biofilm','Exotoxins: secreted proteins (botulism, cholera, diphtheria); Endotoxins: lipid A of Gram-negative outer membrane','Koch postulates: criteria to establish a microorganism as the cause of a disease','Immune evasion: antigenic variation, intracellular hiding, capsule to resist phagocytosis']
    ]
  },

  // ─── SECTION 4: Psych/Soc Foundations ───
  {
    slug: 'mcat-psychology-behavior-mcat', exportBase: 'mcatPsychBehav',
    partTopics: ['Sensation & Perception','Learning & Memory','Cognition & Language','Motivation & Emotion','Developmental Psychology','Personality & Disorders','Review & MCAT Practice'],
    concepts: [
      ['Sensation: detection of stimuli by sensory receptors; Perception: interpretation by the brain','Absolute threshold: minimum stimulus intensity detected 50% of the time','Signal detection theory: ability to detect signal depends on sensitivity and response bias','Weber law: just noticeable difference (JND) is proportional to stimulus magnitude (delta-I/I = constant)'],
      ['Classical conditioning (Pavlov): CS + UCS = CR; extinction, spontaneous recovery, generalization','Operant conditioning (Skinner): reinforcement increases behavior, punishment decreases it','Memory encoding: elaborative rehearsal > rote memorization; levels of processing theory','Memory types: sensory (brief), short-term/working (7 +/- 2 items), long-term (unlimited capacity)'],
      ['Problem solving: algorithms (systematic) vs heuristics (shortcuts — availability, representativeness)','Language development: Chomsky (innate LAD) vs Skinner (operant conditioning)','Brocas area: speech production (damage = nonfluent aphasia); Wernickes area: comprehension (damage = fluent aphasia)','Cognitive biases: confirmation bias, anchoring, framing effect, hindsight bias'],
      ['Drive reduction theory: biological needs create drives that motivate behavior','Maslows hierarchy: physiological, safety, belonging, esteem, self-actualization','James-Lange theory: event causes physiological arousal, then emotion; Cannon-Bard: simultaneous','Schachter-Singer (two-factor): arousal + cognitive label = emotion'],
      ['Piagets stages: sensorimotor (0-2), preoperational (2-7), concrete operational (7-11), formal operational (11+)','Erikson: 8 psychosocial stages from trust vs mistrust to integrity vs despair','Kohlberg: preconventional (reward/punishment), conventional (social norms), postconventional (universal principles)','Attachment: Ainsworth — secure, anxious-avoidant, anxious-ambivalent, disorganized'],
      ['Big Five (OCEAN): openness, conscientiousness, extraversion, agreeableness, neuroticism','Freud: id (pleasure), ego (reality), superego (morality); defense mechanisms (repression, projection, etc.)','Psychological disorders: anxiety, mood, psychotic, personality, trauma-related','DSM-5 classification: categorical diagnosis based on symptom criteria and duration']
    ]
  },
  {
    slug: 'mcat-sociology-mcat', exportBase: 'mcatSociology',
    partTopics: ['Social Structure & Stratification','Culture & Socialization','Social Interaction & Self','Group Dynamics & Deviance','Health Disparities','Demographics & Population','Review & MCAT Practice'],
    concepts: [
      ['Social stratification: unequal distribution of resources based on class, race, gender','Social class: upper, middle, working, lower — defined by income, education, occupation, and wealth','Social mobility: intragenerational (within lifetime) vs intergenerational (across generations)','Intersectionality: race, class, gender, and other identities overlap to create unique experiences'],
      ['Culture: shared beliefs, values, norms, and material objects of a group','Socialization: process of learning norms and values; agents: family, peers, media, school, religion','Ethnocentrism: judging other cultures by your own standards; Cultural relativism: understanding in context','Material culture: physical objects (technology, buildings); Non-material: ideas, beliefs, values'],
      ['Symbolic interactionism: meaning is created through social interaction and shared symbols','Dramaturgy (Goffman): life as a stage — front stage (public self) vs backstage (private self)','Looking-glass self (Cooley): self-concept based on how we think others perceive us','Social identity theory (Tajfel): in-group favoritism and out-group discrimination'],
      ['Conformity (Asch): people conform to group pressure even when the group is wrong','Obedience (Milgram): people obey authority figures even when causing harm','Groupthink: desire for harmony leads to poor decision-making; bystander effect: diffusion of responsibility','Deviance: violation of social norms; labeling theory: societal reaction creates deviant identity'],
      ['Social determinants of health: income, education, race, environment, access to healthcare','Health disparities: unequal health outcomes across socioeconomic and demographic groups','Sick role (Parsons): society expects sick people to seek help and try to get well','Healthcare access: uninsured populations have worse outcomes; preventive care reduces disparities'],
      ['Demographic transition: pre-industrial (high birth/death), transitional, industrial (low birth/death)','Urbanization: movement to cities; impacts health, social networks, and resource distribution','Globalization: increased interconnection affects disease spread, economic opportunity, and cultural change','Fertility rate, mortality rate, and migration determine population growth']
    ]
  },

  // ─── Strategy & Test Day ───
  {
    slug: 'mcat-science-passage-strategy-mcat', exportBase: 'mcatSciPassage',
    partTopics: ['Reading Science Passages','Data Interpretation','Experimental Design','Discrete Questions','Integrating Content Knowledge','Common Traps & Pitfalls','Review & MCAT Practice'],
    concepts: [
      ['MCAT science passages are 4-7 paragraphs with figures, graphs, and experimental data','Read the passage first, note the main experiment and hypothesis','Identify variables: independent (manipulated), dependent (measured), controlled (held constant)','Dont memorize every detail — focus on the experimental logic and refer back as needed'],
      ['Read axis labels, units, and scales on all graphs before interpreting data','Identify trends: direct relationship, inverse relationship, no correlation','Extrapolation vs interpolation: extending beyond data vs estimating between known points','Tables: cross-reference rows and columns to find specific values'],
      ['Control group: baseline for comparison; Experimental group: receives the treatment','Positive control: expected to produce a result (validates the assay); Negative control: expected to produce no result','Randomization and blinding reduce bias in experiments','Statistical significance (p < 0.05): the result is unlikely due to chance alone'],
      ['Discrete questions: standalone, not linked to a passage — test pure content knowledge','These are often the quickest points — do them if you have solid content mastery','Use process of elimination: cross out answers that are clearly wrong','Educated guessing: if you can eliminate 2 options, you have a 50% chance'],
      ['Connect passage info to your content knowledge — the MCAT tests integration','Amino acid chemistry appears in biochem, organic, and biology passages','Physics concepts (pressure, flow, electrical signals) apply to organ system passages','General chemistry (acids, bases, equilibrium) appears throughout all science sections'],
      ['Extreme answer choices are usually wrong — the MCAT favors nuanced answers','Just because data is presented in a passage does not mean it supports the answer','Answer the question being asked, not the question you think they should ask','If two answers are opposites, one of them is likely correct']
    ]
  },
  {
    slug: 'mcat-test-day-strategy-mcat', exportBase: 'mcatTestDay',
    partTopics: ['MCAT Format & Scoring','Study Planning','Section-by-Section Strategy','Practice Test Analysis','Test Day Preparation','Score Goals & Applications','Review & MCAT Practice'],
    concepts: [
      ['4 sections: Chem/Phys (59Q, 95 min), CARS (53Q, 90 min), Bio/Biochem (59Q, 95 min), Psych/Soc (59Q, 95 min)','Total: 230 questions in ~6 hours 15 minutes (with breaks)','Scoring: each section 118-132, total 472-528; median ~500','Optional breaks: 10 min after sections 1 and 3; 30-min lunch break after section 2'],
      ['3-6 month study timeline is typical for most students','Content review: 1-2 months; Practice passages: 2-3 months; Full-length tests: final month','Use spaced repetition (Anki) for high-yield facts and formulas','Track your performance by topic to identify and target weak areas'],
      ['Chem/Phys: strong on calculations — practice dimensional analysis and unit conversion','CARS: practice daily — 1 passage per day minimum; focus on timing and accuracy','Bio/Biochem: most content-heavy section — amino acids, metabolism, and organ systems are highest yield','Psych/Soc: often the easiest to improve — terminology-heavy, less application'],
      ['Review every wrong answer on practice tests — categorize errors as content, reasoning, or careless','Content gap: you didnt know the material — go back and study','Reasoning error: you knew the content but applied it incorrectly — practice passage strategy','Careless mistake: you knew the answer but misread — slow down, read carefully'],
      ['Week before: light review, no new material, focus on rest and confidence','Night before: prepare materials, set alarms, get 8+ hours of sleep','Bring: valid ID, confirmation email, snacks/drinks for breaks, layers for temperature','During breaks: eat, hydrate, stretch, use the restroom — do NOT review material'],
      ['Competitive scores: 510+ for MD, 505+ for DO, 515+ for top-25 schools','Retake policy: can take 3 times per year, 4 times in 2 years, 7 times lifetime','Schools see all scores — aim to take it once and do well','Balanced scores matter: a 128 in each section (512) is generally viewed more favorably than a 132 + 124 + 128 + 128 (512)']
    ]
  },
];

// Generate parts from concepts (same pattern as ACT/SAT generators)
mcatTopics.forEach(topic => {
  topic.parts = topic.partTopics.map((title, i) => {
    const c = topic.concepts[Math.min(i, topic.concepts.length - 1)];
    const section = topic.slug.includes('cars') ? 'CARS' :
                    topic.slug.includes('psych') || topic.slug.includes('socio') ? 'Psych/Soc' :
                    topic.slug.includes('cell') || topic.slug.includes('molecular') || topic.slug.includes('organ') || topic.slug.includes('genetics') || topic.slug.includes('anatomy') || topic.slug.includes('micro') ? 'Bio/Biochem' :
                    topic.slug.includes('strategy') || topic.slug.includes('test-day') ? 'Strategy' : 'Chem/Phys';

    return {
      title,
      textSections: [
        { body: `${c[0]}.\n\n${c[1]}.` },
        { body: `**Key Insight:** ${c[2]}.\n\n**MCAT Tip:** ${c[3]}.` }
      ],
      mcQuestions: [
        {
          q: `Which of the following best describes a key concept in ${title.toLowerCase()}?`,
          opts: [
            c[0].substring(0, 120),
            'This topic is not tested on the MCAT',
            'This applies only to clinical practice, not the MCAT',
            'None of the above'
          ],
          correct: 0,
          explanation: escapeStr(c[0])
        },
        {
          q: `What is an important principle for MCAT ${section} related to ${title.toLowerCase()}?`,
          opts: [
            escapeStr(c[2].substring(0, 120)),
            'Memorize without understanding — the MCAT only tests recall',
            'This concept is only relevant to graduate-level courses',
            'Skip this topic — it rarely appears on the MCAT'
          ],
          correct: 0,
          explanation: escapeStr(c[2])
        },
      ],
      dropdowns: {
        items: [
          { label: `Core concept for ${title}:`, options: [c[0].substring(0, 60), c[1].substring(0, 60), 'Not MCAT-relevant', 'Cannot be determined'], correct: c[0].substring(0, 60) },
          { label: 'MCAT application:', options: [c[2].substring(0, 60), 'Skip this topic', 'Only on practice tests', 'Not applicable'], correct: c[2].substring(0, 60) },
        ],
        hints: [`Think about ${title.toLowerCase()}`, 'Consider the MCAT application'],
        explanation: `${escapeStr(c[0])}. ${escapeStr(c[2])}.`
      }
    };
  });
});

// Generate files
let count = 0;
mcatTopics.forEach(topic => {
  for (let i = 0; i < 7; i++) {
    const filename = `mcat-${topic.slug}-part${i + 1}.ts`;
    const filepath = path.join(OUT_DIR, filename);
    const content = generateFile(topic, i);
    fs.writeFileSync(filepath, content);
    count++;
  }
});

console.log(`Generated ${count} MCAT Prep lesson files for ${mcatTopics.length} topics`);
