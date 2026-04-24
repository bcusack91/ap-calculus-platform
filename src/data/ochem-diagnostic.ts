/**
 * Organic Chemistry Diagnostic Test Generator
 *
 * 10 alternate forms (1–10), ~33 questions covering major OChem topics.
 * Weak areas map to topic slugs for targeted review.
 */

export const TOTAL_FORMS = 10

export interface OChemDiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface OChemDomain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export interface OChemDiagnosticTestData {
  form: number
  questions: OChemDiagnosticQuestion[]
  domains: OChemDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface OChemDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface OChemRecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface OChemDiagnosticResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedScore: number
  domains: OChemDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: OChemRecommendedTopic[]
}

const OCHEM_DOMAINS: OChemDomain[] = [
  { id: 'structure-bonding', name: 'Structure & Bonding', topicSlugs: ['atomic-structure-bonding-ochem'], questionTarget: 5 },
  { id: 'stereochemistry', name: 'Stereochemistry', topicSlugs: ['stereochemistry-chirality'], questionTarget: 5 },
  { id: 'reactions-mechanisms', name: 'Reactions & Mechanisms', topicSlugs: ['nucleophilic-substitution', 'elimination-reactions'], questionTarget: 6 },
  { id: 'functional-groups', name: 'Functional Groups & Nomenclature', topicSlugs: ['molecular-representations', 'alkenes-reactions'], questionTarget: 5 },
  { id: 'carbonyl-chemistry', name: 'Carbonyl Chemistry', topicSlugs: ['aldehydes-ketones-reactions', 'carboxylic-acids-derivatives'], questionTarget: 5 },
  { id: 'spectroscopy', name: 'Spectroscopy & Analysis', topicSlugs: ['nmr-spectroscopy', 'infrared-mass-spectrometry'], questionTarget: 4 },
  { id: 'aromatic-chemistry', name: 'Aromatic Chemistry', topicSlugs: ['electrophilic-aromatic-substitution', 'aromatic-compounds-benzene'], questionTarget: 4 },
]

export { OCHEM_DOMAINS }

interface PoolQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
  formSet: 'A' | 'B' | 'both'
}

const questionPool: PoolQuestion[] = [
  // ---- Structure & Bonding ----
  { question: 'A carbon with sp³ hybridization has what geometry?', options: ['Linear', 'Trigonal planar', 'Tetrahedral', 'Octahedral'], correctAnswer: 2, explanation: 'sp³ hybridization gives a tetrahedral geometry with ~109.5° bond angles.', domain: 'structure-bonding', topicSlug: 'atomic-structure-bonding-ochem', formSet: 'A' },
  { question: 'Which bond is the shortest?', options: ['C−C', 'C=C', 'C≡C', 'C−O'], correctAnswer: 2, explanation: 'Triple bonds (C≡C) are the shortest due to the greatest electron density between the atoms.', domain: 'structure-bonding', topicSlug: 'atomic-structure-bonding-ochem', formSet: 'A' },
  { question: 'In a π bond, orbitals overlap:', options: ['Head-to-head', 'Side-by-side', 'At 109.5°', 'Not at all'], correctAnswer: 1, explanation: 'π bonds form from side-by-side (lateral) overlap of p orbitals, above and below the internuclear axis.', domain: 'structure-bonding', topicSlug: 'atomic-structure-bonding-ochem', formSet: 'A' },
  { question: 'An sp² hybridized carbon is involved in how many π bonds?', options: ['0', '1', '2', '3'], correctAnswer: 1, explanation: 'sp² leaves one unhybridized p orbital available for one π bond (as in alkenes or carbonyls).', domain: 'structure-bonding', topicSlug: 'atomic-structure-bonding-ochem', formSet: 'B' },
  { question: 'Electronegativity increases going:', options: ['Down a group and left across a period', 'Up a group and right across a period', 'Down a group and right across a period', 'It stays constant'], correctAnswer: 1, explanation: 'Electronegativity increases up a group (smaller atoms hold electrons tighter) and right across a period.', domain: 'structure-bonding', topicSlug: 'atomic-structure-bonding-ochem', formSet: 'B' },
  { question: 'Formal charge is calculated as:', options: ['Valence e⁻ − (lone pair e⁻ + bonding e⁻)', 'Valence e⁻ − (lone pair e⁻ + ½ bonding e⁻)', 'Total e⁻ − bonding e⁻', 'Atomic number − electrons'], correctAnswer: 1, explanation: 'FC = valence electrons − lone pair electrons − ½(shared bonding electrons).', domain: 'structure-bonding', topicSlug: 'atomic-structure-bonding-ochem', formSet: 'B' },
  { question: 'A carbon-carbon double bond consists of:', options: ['Two σ bonds', 'One σ bond and one π bond', 'Two π bonds', 'One σ bond only'], correctAnswer: 1, explanation: 'A double bond = one σ (head-to-head overlap) + one π (side-by-side overlap).', domain: 'structure-bonding', topicSlug: 'atomic-structure-bonding-ochem', formSet: 'both' },
  { question: 'The most electronegative element commonly found in organic molecules is:', options: ['Carbon', 'Nitrogen', 'Oxygen', 'Fluorine'], correctAnswer: 3, explanation: 'Fluorine is the most electronegative element (EN ≈ 4.0).', domain: 'structure-bonding', topicSlug: 'atomic-structure-bonding-ochem', formSet: 'both' },

  // ---- Stereochemistry ----
  { question: 'Enantiomers are molecules that are:', options: ['Identical', 'Non-superimposable mirror images', 'Structural isomers', 'Geometric isomers'], correctAnswer: 1, explanation: 'Enantiomers are stereoisomers that are non-superimposable mirror images of each other.', domain: 'stereochemistry', topicSlug: 'stereochemistry-chirality', formSet: 'A' },
  { question: 'A chiral center (stereocenter) typically has:', options: ['Two identical substituents', 'Four different substituents', 'At least one double bond', 'A plane of symmetry'], correctAnswer: 1, explanation: 'A chiral center is a carbon with four different groups attached, making it asymmetric.', domain: 'stereochemistry', topicSlug: 'stereochemistry-chirality', formSet: 'A' },
  { question: 'Diastereomers differ from enantiomers because they:', options: ['Are mirror images', 'Are NOT mirror images but are still stereoisomers', 'Have different molecular formulas', 'Have identical physical properties'], correctAnswer: 1, explanation: 'Diastereomers are stereoisomers that are NOT mirror images. They have different physical properties.', domain: 'stereochemistry', topicSlug: 'stereochemistry-chirality', formSet: 'A' },
  { question: 'A meso compound has chiral centers but is optically inactive because:', options: ['It has no chiral centers', 'It has an internal plane of symmetry', 'It is a racemic mixture', 'It is achiral by definition'], correctAnswer: 1, explanation: 'A meso compound has chiral centers but an internal mirror plane makes the whole molecule achiral.', domain: 'stereochemistry', topicSlug: 'stereochemistry-chirality', formSet: 'B' },
  { question: 'R and S configurations are assigned using:', options: ['Fischer projections only', 'Cahn-Ingold-Prelog priority rules', 'The number of carbons', 'Newman projections'], correctAnswer: 1, explanation: 'R/S assignment uses CIP priority rules: rank substituents by atomic number, then determine rotation.', domain: 'stereochemistry', topicSlug: 'stereochemistry-chirality', formSet: 'B' },
  { question: 'A racemic mixture contains:', options: ['Only one enantiomer', 'Equal amounts of both enantiomers', 'Only the meso form', 'Diastereomers'], correctAnswer: 1, explanation: 'A racemic mixture (±) is a 50:50 mixture of both enantiomers, resulting in no net optical rotation.', domain: 'stereochemistry', topicSlug: 'stereochemistry-chirality', formSet: 'B' },
  { question: 'cis/trans isomerism requires:', options: ['Four different groups', 'A double bond or ring and two different groups on each carbon', 'An asymmetric carbon', 'Only single bonds'], correctAnswer: 1, explanation: 'cis/trans (geometric) isomers arise from restricted rotation around double bonds or rings.', domain: 'stereochemistry', topicSlug: 'stereochemistry-chirality', formSet: 'both' },
  { question: 'Optical activity is measured using:', options: ['A spectrometer', 'A polarimeter', 'A calorimeter', 'NMR'], correctAnswer: 1, explanation: 'A polarimeter measures the rotation of plane-polarized light by chiral compounds.', domain: 'stereochemistry', topicSlug: 'stereochemistry-chirality', formSet: 'both' },

  // ---- Reactions & Mechanisms ----
  { question: 'SN2 reactions are characterized by:', options: ['A two-step mechanism with a carbocation intermediate', 'A one-step concerted mechanism with backside attack', 'Lack of stereochemistry change', 'Rearrangement of the carbon skeleton'], correctAnswer: 1, explanation: 'SN2: one step, backside attack, inversion of stereochemistry, favored by strong nucleophiles and primary substrates.', domain: 'reactions-mechanisms', topicSlug: 'nucleophilic-substitution', formSet: 'A' },
  { question: 'SN1 reactions proceed through:', options: ['Concerted mechanism', 'A carbocation intermediate (two steps)', 'A carbanion intermediate', 'Radical intermediates'], correctAnswer: 1, explanation: 'SN1: step 1 = formation of carbocation (rate-limiting), step 2 = nucleophilic attack on carbocation.', domain: 'reactions-mechanisms', topicSlug: 'nucleophilic-substitution', formSet: 'A' },
  { question: 'E2 elimination requires:', options: ['A weak base', 'A strong base and anti-periplanar arrangement', 'A carbocation intermediate', 'Room temperature only'], correctAnswer: 1, explanation: 'E2: one-step mechanism requiring a strong base and anti-periplanar geometry of H and leaving group.', domain: 'reactions-mechanisms', topicSlug: 'elimination-reactions', formSet: 'A' },
  { question: 'Zaitsev\'s rule predicts that elimination favors:', options: ['The least substituted alkene', 'The most substituted alkene', 'Only terminal alkenes', 'Cyclic products'], correctAnswer: 1, explanation: 'Zaitsev\'s rule: the major product is the more substituted (more stable) alkene.', domain: 'reactions-mechanisms', topicSlug: 'elimination-reactions', formSet: 'B' },
  { question: 'Which substrate best undergoes SN1?', options: ['Methyl halide', 'Primary alkyl halide', 'Tertiary alkyl halide', 'Vinyl halide'], correctAnswer: 2, explanation: 'SN1 favors tertiary substrates because they form the most stable carbocation intermediate.', domain: 'reactions-mechanisms', topicSlug: 'nucleophilic-substitution', formSet: 'B' },
  { question: 'A Markovnikov addition of HBr to propene gives:', options: ['1-bromopropane', '2-bromopropane', 'A mixture of both equally', 'Cyclopropane'], correctAnswer: 1, explanation: 'Markovnikov: H goes to the less substituted carbon, Br to the more substituted → 2-bromopropane.', domain: 'reactions-mechanisms', topicSlug: 'nucleophilic-substitution', formSet: 'B' },
  { question: 'E1 elimination shares a rate-determining step with:', options: ['SN2', 'E2', 'SN1', 'Free radical halogenation'], correctAnswer: 2, explanation: 'Both E1 and SN1 begin with the same rate-limiting step: formation of a carbocation.', domain: 'reactions-mechanisms', topicSlug: 'elimination-reactions', formSet: 'B' },
  { question: 'In SN2, the rate law is:', options: ['Rate = k[substrate]', 'Rate = k[nucleophile]', 'Rate = k[substrate][nucleophile]', 'Rate = k[substrate]²'], correctAnswer: 2, explanation: 'SN2 is bimolecular: rate depends on both substrate and nucleophile concentrations.', domain: 'reactions-mechanisms', topicSlug: 'nucleophilic-substitution', formSet: 'both' },
  { question: 'A primary substrate with a strong base and bulky nucleophile typically undergoes:', options: ['SN1', 'SN2', 'E2', 'E1'], correctAnswer: 2, explanation: 'Bulky strong bases favor E2 elimination even on primary substrates (steric hindrance reduces SN2).', domain: 'reactions-mechanisms', topicSlug: 'elimination-reactions', formSet: 'both' },

  // ---- Functional Groups & Nomenclature ----
  { question: 'The IUPAC name for CH₃CH₂OH is:', options: ['Methanol', 'Ethanol', 'Propanol', 'Ethanal'], correctAnswer: 1, explanation: 'Two carbons (eth-) with an -OH group: ethanol.', domain: 'functional-groups', topicSlug: 'molecular-representations', formSet: 'A' },
  { question: 'A ketone functional group is:', options: ['−CHO', 'C=O between two carbons', '−COOH', '−NH₂'], correctAnswer: 1, explanation: 'A ketone has C=O flanked by two carbon groups (R−CO−R\').', domain: 'functional-groups', topicSlug: 'alkenes-reactions', formSet: 'A' },
  { question: 'Which functional group has the highest priority in IUPAC naming?', options: ['Alcohol (−OH)', 'Amine (−NH₂)', 'Carboxylic acid (−COOH)', 'Aldehyde (−CHO)'], correctAnswer: 2, explanation: 'Carboxylic acid has the highest IUPAC naming priority among common functional groups.', domain: 'functional-groups', topicSlug: 'molecular-representations', formSet: 'A' },
  { question: 'The suffix "-al" in IUPAC nomenclature indicates:', options: ['An alcohol', 'An aldehyde', 'An alkene', 'A carboxylic acid'], correctAnswer: 1, explanation: '-al indicates an aldehyde (e.g., ethanal = CH₃CHO).', domain: 'functional-groups', topicSlug: 'molecular-representations', formSet: 'B' },
  { question: 'Ethers have the general structure:', options: ['R−OH', 'R−O−R\'', 'R−CO−R\'', 'R−NH₂'], correctAnswer: 1, explanation: 'Ethers: R−O−R\' (two organic groups linked by an oxygen).', domain: 'functional-groups', topicSlug: 'alkenes-reactions', formSet: 'B' },
  { question: 'An amide contains which bond?', options: ['C−O−C', 'C(=O)−N', 'C≡N', 'C−S−H'], correctAnswer: 1, explanation: 'An amide has a carbonyl (C=O) bonded directly to a nitrogen: C(=O)−N.', domain: 'functional-groups', topicSlug: 'alkenes-reactions', formSet: 'B' },
  { question: 'The IUPAC name for CH₃COCH₃ is:', options: ['Propanal', 'Propanone', 'Propanol', 'Propanoic acid'], correctAnswer: 1, explanation: 'CH₃COCH₃ is a ketone (three carbons), IUPAC: propanone (common name: acetone).', domain: 'functional-groups', topicSlug: 'molecular-representations', formSet: 'both' },
  { question: 'An ester is formed from:', options: ['Two alcohols', 'A carboxylic acid and an alcohol', 'Two ketones', 'An amine and a ketone'], correctAnswer: 1, explanation: 'Ester formation (Fischer esterification): carboxylic acid + alcohol → ester + water.', domain: 'functional-groups', topicSlug: 'alkenes-reactions', formSet: 'both' },

  // ---- Carbonyl Chemistry ----
  { question: 'In a nucleophilic addition to a carbonyl, the nucleophile attacks:', options: ['The oxygen', 'The carbon of C=O', 'The α-carbon', 'The leaving group'], correctAnswer: 1, explanation: 'The carbonyl carbon is electrophilic (δ+) due to the electronegative oxygen, so nucleophiles attack it.', domain: 'carbonyl-chemistry', topicSlug: 'aldehydes-ketones-reactions', formSet: 'A' },
  { question: 'Aldehydes differ from ketones in that aldehydes have:', options: ['No carbonyl group', 'At least one hydrogen on the carbonyl carbon', 'Two alkyl groups on the carbonyl', 'A carboxyl group'], correctAnswer: 1, explanation: 'Aldehydes: R−CHO (at least one H on carbonyl carbon); ketones: R−CO−R\' (no H on carbonyl C).', domain: 'carbonyl-chemistry', topicSlug: 'aldehydes-ketones-reactions', formSet: 'A' },
  { question: 'The Grignard reagent (RMgBr) acts as:', options: ['An electrophile', 'A nucleophile / source of carbanion', 'A radical', 'An acid'], correctAnswer: 1, explanation: 'Grignard reagents (RMgBr) are strong nucleophiles/bases, effectively delivering R⁻ to electrophilic carbons.', domain: 'carbonyl-chemistry', topicSlug: 'aldehydes-ketones-reactions', formSet: 'A' },
  { question: 'Acyl chlorides are more reactive than esters toward nucleophilic acyl substitution because:', options: ['They have weaker C=O bonds', 'Cl⁻ is a better leaving group than OR⁻', 'Esters are more electrophilic', 'Acyl chlorides are more sterically hindered'], correctAnswer: 1, explanation: 'Cl⁻ is an excellent leaving group (weak base), making acyl chlorides the most reactive carboxylic acid derivatives.', domain: 'carbonyl-chemistry', topicSlug: 'carboxylic-acids-derivatives', formSet: 'B' },
  { question: 'In an aldol condensation, the key bond formed is between:', options: ['Two carboxylic acids', 'An enolate α-carbon and another carbonyl carbon', 'An amine and a ketone', 'Two alcohols'], correctAnswer: 1, explanation: 'Aldol: the enolate (from one carbonyl) attacks the carbonyl carbon of another, forming a β-hydroxy carbonyl.', domain: 'carbonyl-chemistry', topicSlug: 'aldehydes-ketones-reactions', formSet: 'B' },
  { question: 'Hydrolysis of an ester gives:', options: ['Two alcohols', 'A carboxylic acid and an alcohol', 'An aldehyde and water', 'A ketone and an amine'], correctAnswer: 1, explanation: 'Ester hydrolysis (acid or base catalyzed) reverses esterification: ester + H₂O → acid + alcohol.', domain: 'carbonyl-chemistry', topicSlug: 'carboxylic-acids-derivatives', formSet: 'B' },
  { question: 'The order of reactivity of carboxylic acid derivatives toward nucleophilic acyl substitution is:', options: ['Ester > anhydride > acyl chloride > amide', 'Acyl chloride > anhydride > ester > amide', 'Amide > ester > anhydride > acyl chloride', 'All are equally reactive'], correctAnswer: 1, explanation: 'Reactivity: acyl chloride > anhydride > ester > amide (based on leaving group ability).', domain: 'carbonyl-chemistry', topicSlug: 'carboxylic-acids-derivatives', formSet: 'both' },
  { question: 'Reduction of a ketone with NaBH₄ gives:', options: ['A primary alcohol', 'A secondary alcohol', 'An aldehyde', 'A carboxylic acid'], correctAnswer: 1, explanation: 'NaBH₄ reduces ketones to secondary alcohols (R₂CO → R₂CHOH).', domain: 'carbonyl-chemistry', topicSlug: 'aldehydes-ketones-reactions', formSet: 'both' },

  // ---- Spectroscopy ----
  { question: 'In ¹H NMR, the number of signals indicates:', options: ['The molecular weight', 'The number of distinct hydrogen environments', 'The number of carbons', 'The boiling point'], correctAnswer: 1, explanation: 'Each signal in ¹H NMR represents a set of chemically equivalent (non-equivalent) hydrogens.', domain: 'spectroscopy', topicSlug: 'nmr-spectroscopy', formSet: 'A' },
  { question: 'A broad O−H stretch in IR spectroscopy appears around:', options: ['1700 cm⁻¹', '2200 cm⁻¹', '3200-3500 cm⁻¹', '1000 cm⁻¹'], correctAnswer: 2, explanation: 'O−H stretch: broad absorption ~3200-3500 cm⁻¹. Hydrogen bonding causes the broadness.', domain: 'spectroscopy', topicSlug: 'infrared-mass-spectrometry', formSet: 'A' },
  { question: 'An NMR signal split into a triplet indicates the proton has ___ neighboring non-equivalent H\'s.', options: ['1', '2', '3', '4'], correctAnswer: 1, explanation: 'n+1 rule: a triplet means n = 2 neighboring non-equivalent protons.', domain: 'spectroscopy', topicSlug: 'nmr-spectroscopy', formSet: 'A' },
  { question: 'In mass spectrometry, the molecular ion (M⁺) indicates:', options: ['The number of functional groups', 'The molecular weight of the compound', 'The number of protons', 'Bond strength'], correctAnswer: 1, explanation: 'The M⁺ peak in mass spec corresponds to the molecular weight of the intact molecule.', domain: 'spectroscopy', topicSlug: 'infrared-mass-spectrometry', formSet: 'B' },
  { question: 'A carbonyl C=O stretch in IR appears near:', options: ['3000 cm⁻¹', '2200 cm⁻¹', '1700 cm⁻¹', '1000 cm⁻¹'], correctAnswer: 2, explanation: 'C=O stretch: strong absorption ~1700 cm⁻¹ (varies slightly with type of carbonyl).', domain: 'spectroscopy', topicSlug: 'infrared-mass-spectrometry', formSet: 'B' },
  { question: 'In ¹H NMR, protons on an aromatic ring typically appear at:', options: ['0-1 ppm', '1-2 ppm', '3-4 ppm', '6.5-8.5 ppm'], correctAnswer: 3, explanation: 'Aromatic protons are deshielded by the ring current and appear downfield at ~6.5-8.5 ppm.', domain: 'spectroscopy', topicSlug: 'nmr-spectroscopy', formSet: 'B' },
  { question: 'Chemical shift in NMR is measured in:', options: ['Hertz', 'ppm (parts per million)', 'cm⁻¹', 'Wavelength'], correctAnswer: 1, explanation: 'Chemical shift (δ) is expressed in ppm, relative to a reference standard (TMS).', domain: 'spectroscopy', topicSlug: 'nmr-spectroscopy', formSet: 'both' },
  { question: 'The "degree of unsaturation" (index of hydrogen deficiency) for C₆H₆ is:', options: ['1', '2', '3', '4'], correctAnswer: 3, explanation: 'IHD = (2×6 + 2 − 6)/2 = (14 − 6)/2 = 4. Benzene has 3 double bonds + 1 ring = 4.', domain: 'spectroscopy', topicSlug: 'infrared-mass-spectrometry', formSet: 'both' },

  // ---- Aromatic Chemistry ----
  { question: 'Hückel\'s rule states that aromatic compounds have ___ π electrons.', options: ['4n', '4n + 2', '2n', '2n + 1'], correctAnswer: 1, explanation: 'Hückel\'s rule: aromatic compounds have 4n+2 π electrons (where n = 0, 1, 2, ...) in a cyclic, planar, conjugated system.', domain: 'aromatic-chemistry', topicSlug: 'aromatic-compounds-benzene', formSet: 'A' },
  { question: 'In electrophilic aromatic substitution (EAS), the first step is:', options: ['Loss of a proton', 'Attack of the electrophile on the π system', 'Formation of a carbanion', 'Nucleophilic addition'], correctAnswer: 1, explanation: 'EAS step 1: electrophile attacks the electron-rich aromatic ring, forming an arenium ion (σ complex).', domain: 'aromatic-chemistry', topicSlug: 'electrophilic-aromatic-substitution', formSet: 'A' },
  { question: 'Nitration of benzene uses which electrophile?', options: ['NO₂⁺ (nitronium ion)', 'NO₃⁻', 'NH₃', 'N₂'], correctAnswer: 0, explanation: 'Nitration: HNO₃ + H₂SO₄ → NO₂⁺ (nitronium ion), the active electrophile.', domain: 'aromatic-chemistry', topicSlug: 'electrophilic-aromatic-substitution', formSet: 'A' },
  { question: 'An electron-donating group (e.g., −OH) on benzene:', options: ['Deactivates the ring and is meta-directing', 'Activates the ring and is ortho/para-directing', 'Has no effect on reactivity', 'Prevents all substitution'], correctAnswer: 1, explanation: 'EDGs (like −OH, −NH₂) activate the ring by increasing electron density and direct to ortho/para positions.', domain: 'aromatic-chemistry', topicSlug: 'electrophilic-aromatic-substitution', formSet: 'B' },
  { question: 'A nitro group (−NO₂) on benzene is:', options: ['Activating, ortho/para-directing', 'Deactivating, meta-directing', 'Activating, meta-directing', 'Has no directing effect'], correctAnswer: 1, explanation: '−NO₂ is a strong electron-withdrawing group: deactivates the ring and directs incoming electrophiles to meta.', domain: 'aromatic-chemistry', topicSlug: 'electrophilic-aromatic-substitution', formSet: 'B' },
  { question: 'Cyclopentadienyl anion (C₅H₅⁻) is aromatic because:', options: ['It has 4 π electrons', 'It has 6 π electrons in a planar cyclic system', 'It has 8 π electrons', 'It is not aromatic'], correctAnswer: 1, explanation: 'C₅H₅⁻ has 6 π electrons (4n+2, n=1), is cyclic, planar, and fully conjugated — aromatic.', domain: 'aromatic-chemistry', topicSlug: 'aromatic-compounds-benzene', formSet: 'B' },
  { question: 'Benzene undergoes substitution rather than addition because:', options: ['It lacks double bonds', 'Substitution preserves aromaticity', 'Addition is sterically impossible', 'Benzene is too unreactive for addition'], correctAnswer: 1, explanation: 'Aromatic stabilization energy makes substitution (preserving the aromatic ring) more favorable than addition.', domain: 'aromatic-chemistry', topicSlug: 'aromatic-compounds-benzene', formSet: 'both' },
  { question: 'Friedel-Crafts alkylation requires:', options: ['Only benzene and an alkyl halide', 'A Lewis acid catalyst (e.g., AlCl₃)', 'An oxidizing agent', 'UV light'], correctAnswer: 1, explanation: 'Friedel-Crafts alkylation needs a Lewis acid (AlCl₃) to generate the electrophilic carbocation from the alkyl halide.', domain: 'aromatic-chemistry', topicSlug: 'electrophilic-aromatic-substitution', formSet: 'both' },
]

function mulberry32(seed: number): () => number {
  return () => { let t = (seed += 0x6d2b79f5); t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }
}

function seededShuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a;
}

export function generateOChemDiagnosticTest(form: number): OChemDiagnosticTestData {
  const rng = mulberry32(form * 7919)
  const questions: OChemDiagnosticQuestion[] = []
  for (const domain of OCHEM_DOMAINS) {
    const pool = questionPool.filter(q => q.domain === domain.id)
    const shuffled = seededShuffle(pool, rng)
    for (const q of shuffled.slice(0, domain.questionTarget)) {
      questions.push({ question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation, domain: domain.id, topicSlug: q.topicSlug })
    }
  }
  return { form, questions: seededShuffle(questions, rng), domains: OCHEM_DOMAINS, totalQuestions: questions.length, timeLimitMinutes: 45 }
}

export function scoreOChemDiagnostic(form: number, questions: OChemDiagnosticQuestion[], answers: Record<number, number>): OChemDiagnosticResults {
  const domainResults: OChemDomainResult[] = OCHEM_DOMAINS.map(domain => {
    const domainQs = questions.map((q, i) => ({ q, i })).filter(({ q }) => q.domain === domain.id)
    const correct = domainQs.filter(({ i }) => answers[i] !== undefined && answers[i] === questions[i].correctAnswer).length
    const total = domainQs.length
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
    const level: 'strong' | 'moderate' | 'weak' = percentage >= 75 ? 'strong' : percentage >= 50 ? 'moderate' : 'weak'
    return { domainId: domain.id, domainName: domain.name, correct, total, percentage, level }
  })

  const totalCorrect = domainResults.reduce((s, d) => s + d.correct, 0)
  const totalQuestions = domainResults.reduce((s, d) => s + d.total, 0)
  const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

  // Estimated score on a 1-5 scale (like a course grade)
  let estimatedScore: number
  if (percentage >= 80) estimatedScore = 5
  else if (percentage >= 65) estimatedScore = 4
  else if (percentage >= 50) estimatedScore = 3
  else if (percentage >= 35) estimatedScore = 2
  else estimatedScore = 1

  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)

  const recommendedTopics: OChemRecommendedTopic[] = []
  // Prioritize by exam weight (questionTarget) so highest-impact topics surface first.
  const examWeight = (id: string) => OCHEM_DOMAINS.find(d => d.id === id)?.questionTarget ?? 0
  const weakDomainResults = [...domainResults.filter(d => d.level === 'weak')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  const moderateDomainResults = [...domainResults.filter(d => d.level === 'moderate')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  for (const wd of weakDomainResults) {
    const domainDef = OCHEM_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => { if (q.domain === wd.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })
    const slugs = missedSlugs.size > 0 ? [...missedSlugs].slice(0, 2) : domainDef.topicSlugs.slice(0, 2)
    for (const slug of slugs) { if (recommendedTopics.length < 5) recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: wd.domainId, priority: 'high' }) }
  }
  for (const md of moderateDomainResults) {
    if (recommendedTopics.length >= 5) break
    const domainDef = OCHEM_DOMAINS.find(d => d.id === md.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => { if (q.domain === md.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })
    const slug = missedSlugs.size > 0 ? [...missedSlugs].values().next().value : domainDef.topicSlugs[0]
    if (slug) recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: md.domainId, priority: 'medium' })
  }

  return { form, totalCorrect, totalQuestions, percentage, estimatedScore, domains: domainResults, weakAreas, moderateAreas, strengths, recommendedTopics: recommendedTopics.slice(0, 5) }
}

export function pickNextForm(previousForms: number[]): number {
  if (previousForms.length === 0) return 1
  const last = previousForms[previousForms.length - 1]
  return last >= TOTAL_FORMS ? 1 : last + 1
}

const SLUG_LABELS: Record<string, string> = {
  'atomic-structure-bonding-ochem': 'MO Theory, Hybridization & Geometry',
  'stereochemistry-chirality': 'Chirality, Enantiomers & Meso Compounds',
  'nucleophilic-substitution': 'SN1 & SN2 Reactions',
  'elimination-reactions': 'E1 & E2 Elimination',
  'molecular-representations': 'IUPAC Nomenclature',
  'alkenes-reactions': 'Functional Group Chemistry',
  'aldehydes-ketones-reactions': 'Aldehydes & Ketones',
  'carboxylic-acids-derivatives': 'Carboxylic Acid Derivatives',
  'nmr-spectroscopy': 'NMR Spectroscopy',
  'infrared-mass-spectrometry': 'IR & Mass Spectrometry',
  'electrophilic-aromatic-substitution': 'Electrophilic Aromatic Substitution',
  'aromatic-compounds-benzene': 'Aromaticity & Hückel\'s Rule',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
