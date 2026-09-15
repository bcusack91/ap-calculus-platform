/**
 * MCAT Bio/Biochem discrete (standalone, no passage) bank — wave 2.
 *
 * Expands BIO_BIOCHEM_DISCRETES so each full-length form can draw a distinct
 * set of ~15 discretes. Discipline spread mirrors the real exam (biochemistry,
 * molecular biology, cell biology, genetics/evolution, physiology,
 * microbiology). Keys are position-balanced and explanations reference
 * options by CONTENT only, because the passage runner does not shuffle.
 */
import type { MCATDiscreteQuestion } from '../types'

export const BIO_BIOCHEM_DISCRETES_2: MCATDiscreteQuestion[] = [
  // ---------------------------------------------------------------- biochemistry
  {
    id: 'bbd2-01',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question:
      'The effect of a reversible enzyme inhibitor can be completely overcome by raising the substrate concentration high enough. How does this inhibitor change the Michaelis–Menten parameters?',
    options: [
      "$K_m$ is unchanged and $V_{max}$ decreases",
      "$K_m$ increases and $V_{max}$ is unchanged",
      "$K_m$ and $V_{max}$ decrease by the same factor",
      "$K_m$ decreases and $V_{max}$ is unchanged"
    ],
    correctAnswer: 1,
    explanation:
      "An inhibitor that is outcompeted by excess substrate is a competitive inhibitor: it binds the free enzyme at the active site, so more substrate is needed to reach half-maximal velocity (apparent $K_m$ rises), but at saturating substrate the inhibitor is displaced and the same $V_{max}$ is reached. An unchanged $K_m$ with a lower $V_{max}$ describes pure noncompetitive inhibition, which substrate cannot overcome. Both parameters falling by the same factor describes uncompetitive inhibition, which also lowers $V_{max}$ and so cannot be overcome. A lower $K_m$ would mean the enzyme binds substrate more readily, the opposite of competition for the active site.",
    skill: 'Enzyme kinetics',
  },
  {
    id: 'bbd2-02',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question:
      'Which interaction is primarily responsible for stabilizing an $\\alpha$-helix within a protein?',
    options: [
      "Disulfide bonds between nearby cysteine side chains",
      "Ionic bonds between oppositely charged side chains",
      "Hydrophobic packing of nonpolar side chains together",
      "Hydrogen bonds between backbone C=O and N–H groups"
    ],
    correctAnswer: 3,
    explanation:
      "Secondary structure is defined by the peptide backbone: in an $\\alpha$-helix, the carbonyl oxygen of residue $i$ hydrogen-bonds to the amide hydrogen of residue $i+4$, and these regularly repeating backbone hydrogen bonds stabilize the helix. Disulfide bonds, ionic bonds (salt bridges), and hydrophobic packing all involve side chains and chiefly stabilize tertiary (or quaternary) structure rather than the helix itself.",
    skill: 'Protein structure',
  },
  {
    id: 'bbd2-03',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question:
      'Compared with a saturated fatty acid of the same chain length, a fatty acid containing cis double bonds has which property?',
    options: [
      "A lower melting point, because its kinks limit tight packing",
      "A higher melting point, because double bonds are more rigid",
      "More ATP per carbon oxidized, because it is more reduced",
      "Tighter packing in membranes, because its chains are straighter"
    ],
    correctAnswer: 0,
    explanation:
      "Each cis double bond puts a kink in the hydrocarbon chain, which prevents neighboring chains from packing closely; weaker van der Waals contacts mean a lower melting point, which is why unsaturated fats are liquid at room temperature and increase membrane fluidity. Although a double bond itself does not rotate, the kink lowers rather than raises the melting point. The unsaturated chain is less reduced (it has fewer hydrogens), so it yields slightly less, not more, ATP per carbon. Its chains are bent, not straighter, so they pack more loosely.",
    skill: 'Lipids',
  },
  {
    id: 'bbd2-04',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question:
      'Which of the following sugars is a non-reducing sugar that gives a negative Benedict’s test?',
    options: ['Maltose', 'Lactose', 'Sucrose', 'Glucose'],
    correctAnswer: 2,
    explanation:
      "A reducing sugar has a free anomeric carbon that can open to an aldehyde and reduce $\\text{Cu}^{2+}$ in Benedict’s reagent. In sucrose, the glycosidic bond joins the anomeric carbon of glucose (C1) to the anomeric carbon of fructose (C2), so neither ring can open and sucrose is non-reducing. Glucose is a free aldose and is reducing. Maltose ($\\alpha$1→4) and lactose ($\\beta$1→4) each leave one anomeric carbon free, so both are reducing disaccharides.",
    skill: 'Carbohydrates',
  },
  {
    id: 'bbd2-05',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question:
      'In hepatocytes, which change most directly increases the activity of phosphofructokinase-1, the committed step of glycolysis?',
    options: [
      "A rise in the cytosolic citrate concentration",
      "A rise in hepatic fructose 2,6-bisphosphate",
      "A rise in the ATP-to-AMP concentration ratio",
      "A rise in glucagon-stimulated cAMP signaling"
    ],
    correctAnswer: 1,
    explanation:
      "Fructose 2,6-bisphosphate, made by PFK-2 when insulin is high and glucose is plentiful, is the most potent allosteric activator of PFK-1 in the liver. Citrate signals abundant TCA intermediates and inhibits PFK-1. A high ATP-to-AMP ratio signals high energy charge; ATP binds an inhibitory allosteric site, and AMP (an activator) is low. Glucagon raises cAMP and activates protein kinase A, which phosphorylates the bifunctional PFK-2/FBPase-2 enzyme, lowering fructose 2,6-bisphosphate and thereby decreasing PFK-1 activity.",
    skill: 'Glycolysis regulation',
  },
  // ----------------------------------------------------------- molecular biology
  {
    id: 'bbd2-06',
    section: 'bio-biochem',
    discipline: 'molecular biology',
    question:
      'Why is the lagging strand synthesized discontinuously, as Okazaki fragments, during DNA replication?',
    options: [
      "DNA polymerase only extends a 3′-OH, so it builds strands 5′→3′",
      "DNA polymerase builds new strands only in the 3′→5′ direction",
      "Helicase unwinds the lagging strand template in short bursts",
      "The lagging strand is copied only after the leading strand"
    ],
    correctAnswer: 0,
    explanation:
      "DNA polymerase can only add a nucleotide to an existing 3′-OH, so every new strand grows 5′→3′ while the template is read 3′→5′. On one template this direction matches fork movement (the continuous leading strand); on the other it runs away from the fork, so synthesis must restart repeatedly from new primers as the fork opens, producing Okazaki fragments. Polymerase never synthesizes 3′→5′. Helicase unwinds the duplex continuously for both strands, not in strand-specific bursts. Leading- and lagging-strand synthesis occur concurrently at the same fork, not one after the other.",
    skill: 'DNA replication',
  },
  {
    id: 'bbd2-07',
    section: 'bio-biochem',
    discipline: 'molecular biology',
    question:
      'An E. coli strain carries a lacI mutation whose repressor has a normal DNA-binding domain but cannot bind allolactose. In medium containing lactose and no glucose, what will lac operon transcription be?',
    options: [
      "High, because CAP–cAMP overrides the bound repressor",
      "High, because lactose itself releases the repressor",
      "High at all times, whether or not lactose is present",
      "Low, because the repressor remains on the operator"
    ],
    correctAnswer: 3,
    explanation:
      "Normally allolactose binds the lac repressor and releases it from the operator. A repressor that cannot bind the inducer remains on the operator even when lactose is present, physically blocking RNA polymerase (a noninducible, super-repressor phenotype). Low glucose does raise cAMP so CAP–cAMP binds, but CAP only enhances polymerase recruitment and cannot overcome a bound repressor. Lactose itself is not the physiological inducer; it must be converted to allolactose, which this repressor ignores. Constitutive high expression results from the opposite kind of defect, such as a repressor that cannot bind DNA or an operator the repressor cannot recognize.",
    skill: 'Gene regulation in prokaryotes',
  },
  {
    id: 'bbd2-08',
    section: 'bio-biochem',
    discipline: 'molecular biology',
    question:
      'A single-base substitution changes a codon in an mRNA from UAC (tyrosine) to UAA. What is the most likely effect on the encoded protein?',
    options: [
      "One tyrosine is replaced by a different amino acid",
      "Every amino acid after that codon is altered",
      "Translation stops early, giving a truncated protein",
      "No change results, because the code is degenerate"
    ],
    correctAnswer: 2,
    explanation:
      "UAA is one of the three stop codons (UAA, UAG, UGA), so this is a nonsense mutation: release factors terminate translation at that position and the polypeptide is truncated. Replacing tyrosine with another amino acid would be a missense mutation, which requires the new codon to encode an amino acid. Altering every downstream residue describes a frameshift from an insertion or deletion, not a one-base substitution. A silent mutation occurs only when the new codon specifies the same amino acid, which a stop codon does not.",
    skill: 'Mutations',
  },
  {
    id: 'bbd2-09',
    section: 'bio-biochem',
    discipline: 'molecular biology',
    question:
      'Histone acetyltransferases generally increase transcription of nearby genes. What is the main mechanism?',
    options: [
      "Acetylation neutralizes lysine charges, loosening DNA binding",
      "Acetylation adds negative charge to DNA, repelling nucleosomes",
      "Acetylation cleaves histone tails, removing nucleosomes entirely",
      "Acetylation tightens histone binding to the DNA phosphate backbone"
    ],
    correctAnswer: 0,
    explanation:
      "Histone tails are rich in positively charged lysines that attract the negatively charged DNA phosphate backbone. Adding acetyl groups to those lysines neutralizes their positive charge, weakening histone–DNA attraction and opening chromatin (euchromatin) so transcription factors and RNA polymerase gain access. Histone acetyltransferases modify histone lysines, not the DNA itself. Acetylation is a covalent addition, not a cleavage of the tails. Strengthening histone–DNA binding would condense chromatin and silence genes, the effect of deacetylation.",
    skill: 'Epigenetics',
  },
  // ---------------------------------------------------------------- cell biology
  {
    id: 'bbd2-10',
    section: 'bio-biochem',
    discipline: 'cell biology',
    question:
      'A newly made protein has an N-terminal ER signal sequence but no other sorting or retention signals. Where will this protein most likely end up?',
    options: [
      "In the mitochondrial matrix",
      "Secreted outside the cell",
      "Remaining in the cytosol",
      "Imported into the nucleus"
    ],
    correctAnswer: 1,
    explanation:
      "The signal sequence directs cotranslational import into the rough ER lumen. With no ER-retention signal (such as KDEL), lysosomal tag, or transmembrane anchor, the protein follows the default secretory pathway: ER to Golgi to secretory vesicles to exocytosis. Mitochondrial matrix proteins use a distinct N-terminal mitochondrial targeting sequence and are imported after translation in the cytosol. Remaining free in the cytosol is the fate of proteins lacking any signal sequence. Nuclear proteins require a nuclear localization signal and are also made on free ribosomes.",
    skill: 'Protein targeting',
  },
  {
    id: 'bbd2-11',
    section: 'bio-biochem',
    discipline: 'cell biology',
    question:
      'Paclitaxel binds microtubules and prevents their depolymerization. At which stage are treated dividing cells most likely to arrest?',
    options: [
      "G1, before the restriction point",
      "S phase, during DNA replication",
      "G2, before chromosomes condense",
      "Mitosis, at the spindle checkpoint"
    ],
    correctAnswer: 3,
    explanation:
      "A functional mitotic spindle requires microtubules to grow and shrink dynamically so kinetochores can attach and chromosomes can align. Locking microtubules in the polymerized state prevents proper attachment and tension, so the spindle assembly checkpoint holds cells before anaphase, in mitosis. G1 progression past the restriction point, DNA synthesis in S phase, and the G2 preparations for division do not depend on spindle dynamics, so the drug does not arrest cells at those stages.",
    skill: 'Cell cycle',
  },
  {
    id: 'bbd2-12',
    section: 'bio-biochem',
    discipline: 'cell biology',
    question:
      'Cardiac muscle cells depolarize in a coordinated wave because ions flow directly from the cytoplasm of one cell into the next. Which structure makes this possible?',
    options: ['Tight junctions', 'Desmosomes', 'Gap junctions', 'Hemidesmosomes'],
    correctAnswer: 2,
    explanation:
      "Gap junctions are channels built from connexin proteins that connect the cytoplasms of adjacent cells, letting ions and small molecules pass so electrical current spreads cell to cell; in the heart they sit in the intercalated discs. Tight junctions seal the space between epithelial cells to limit paracellular flow but do not connect cytoplasms. Desmosomes are anchoring junctions that link the intermediate filaments of neighboring cells mechanically (they are also found in intercalated discs) without forming aqueous channels. Hemidesmosomes anchor a cell to the basement membrane rather than to another cell, so they cannot pass ions between cells.",
    skill: 'Cell junctions',
  },
  // ---------------------------------------------------------- genetics/evolution
  {
    id: 'bbd2-13',
    section: 'bio-biochem',
    discipline: 'genetics',
    question:
      'An autosomal recessive disorder affects 1 in 10,000 people in a population in Hardy–Weinberg equilibrium. Approximately what proportion of the population are heterozygous carriers?',
    options: ['0.0198', '0.0100', '0.0002', '0.0001'],
    correctAnswer: 0,
    explanation:
      "Affected individuals are $q^2 = 1/10{,}000 = 0.0001$, so $q = 0.01$ and $p = 0.99$. Carriers are $2pq = 2(0.99)(0.01) = 0.0198$, about 1 in 50. The value 0.0100 is $q$, the recessive allele frequency, not a genotype frequency. The value 0.0002 comes from doubling $q^2$ rather than using $2pq$. The value 0.0001 is the frequency of affected homozygotes.",
    skill: 'Hardy–Weinberg equilibrium',
  },
  {
    id: 'bbd2-14',
    section: 'bio-biochem',
    discipline: 'genetics',
    question:
      'Recombination frequencies among three genes on the same chromosome are A–B, 12%; A–C, 5%; and B–C, 7%. What is the order of the genes?',
    options: [
      "A lies between B and C",
      "C lies between A and B",
      "B lies between A and C",
      "B and C are unlinked"
    ],
    correctAnswer: 1,
    explanation:
      "Recombination frequency is roughly proportional to map distance, so the two genes with the largest frequency (A and B, 12 map units) are the outer genes. The other distances add up to it: A–C (5) plus C–B (7) equals 12, placing C between A and B. Putting A in the middle would require B–C to be the largest distance, and putting B in the middle would require A–C to be the largest, neither of which matches the data. A recombination frequency of 7% is well below 50%, so B and C are linked.",
    skill: 'Gene mapping',
  },
  {
    id: 'bbd2-15',
    section: 'bio-biochem',
    discipline: 'evolution',
    question:
      'A few dozen people colonize a remote island. An allele that is rare on the mainland happens to be common among them and remains common in their descendants, although it has no effect on fitness. Which process best explains this?',
    options: ['Natural selection', 'Gene flow', 'Recurrent mutation', 'Founder effect'],
    correctAnswer: 3,
    explanation:
      "When a small group establishes a new population, its allele frequencies can differ from the source population purely by chance sampling; this founder effect is a form of genetic drift and does not depend on fitness. Natural selection requires the allele to affect survival or reproduction, which the stem rules out. Gene flow from the mainland would pull the island frequency back toward the mainland’s low value, not raise it. Recurrent mutation is far too slow to raise a rare allele to high frequency, and the allele was already common among the founders themselves.",
    skill: 'Mechanisms of evolution',
  },
  // ------------------------------------------------------------------ physiology
  {
    id: 'bbd2-16',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'Antidiuretic hormone (vasopressin) reduces urine volume primarily through which action?',
    options: [
      "Inserting aquaporin-2 channels into collecting duct cells",
      "Increasing sodium reabsorption in the proximal tubule",
      "Stimulating aldosterone release from the adrenal cortex",
      "Raising the glomerular filtration rate of each nephron"
    ],
    correctAnswer: 0,
    explanation:
      "ADH binds V2 receptors on principal cells of the collecting duct, and cAMP signaling moves aquaporin-2 channels into the apical membrane; water then leaves the duct into the hypertonic medulla, concentrating the urine. Proximal tubule sodium reabsorption is not a primary ADH target. Aldosterone secretion is driven mainly by angiotensin II and plasma $\\text{K}^+$, not by ADH. Raising the glomerular filtration rate would, if anything, increase urine volume.",
    skill: 'Renal physiology',
  },
  {
    id: 'bbd2-17',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'Which change shifts the oxyhemoglobin dissociation curve to the right?',
    options: [
      "A drop in core body temperature",
      "A rise in blood pH (alkalosis)",
      "More 2,3-BPG in red blood cells",
      "Carbon monoxide bound to heme"
    ],
    correctAnswer: 2,
    explanation:
      "2,3-Bisphosphoglycerate binds deoxyhemoglobin and stabilizes the low-affinity T state, shifting the curve right so $\\text{O}_2$ is unloaded more readily; this is why 2,3-BPG rises at high altitude. Lower temperature and higher pH increase hemoglobin’s $\\text{O}_2$ affinity, shifting the curve left (a right shift comes from warmth, acidosis, and high $\\text{CO}_2$). Carbon monoxide occupies heme sites and makes the remaining sites hold $\\text{O}_2$ more tightly, also shifting the curve left.",
    skill: 'Oxygen transport',
  },
  {
    id: 'bbd2-18',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'Tetrodotoxin blocks voltage-gated sodium channels. What is its most direct effect on a neuron exposed to it?',
    options: [
      "Its resting membrane potential depolarizes to near 0 mV",
      "It cannot produce the rising phase of an action potential",
      "Its repolarization slows since $\\text{K}^+$ efflux stops",
      "Its action potentials travel faster down the axon"
    ],
    correctAnswer: 1,
    explanation:
      "The rapid depolarizing (rising) phase of the action potential is carried by $\\text{Na}^+$ influx through voltage-gated sodium channels, so blocking them abolishes action potentials. The resting potential is set mainly by $\\text{K}^+$ leak channels and the $\\text{Na}^+/\\text{K}^+$-ATPase, which tetrodotoxin does not affect, so the cell does not depolarize to 0 mV. Repolarization depends on voltage-gated $\\text{K}^+$ channels, which the toxin does not block. With no action potentials there is no conduction at all, let alone faster conduction.",
    skill: 'Neurophysiology',
  },
  {
    id: 'bbd2-19',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'Autoimmune destruction of the thyroid gland causes primary hypothyroidism. Which laboratory pattern is expected?',
    options: [
      "High free $T_4$ and low TSH",
      "Low free $T_4$ and low TSH",
      "High free $T_4$ and high TSH",
      "Low free $T_4$ and high TSH"
    ],
    correctAnswer: 3,
    explanation:
      "In primary hypothyroidism the gland itself fails, so $T_4$ falls; the loss of negative feedback on the hypothalamus and anterior pituitary raises TRH and TSH. High $T_4$ with low TSH is the pattern of primary hyperthyroidism, such as Graves’ disease. Low $T_4$ with low TSH indicates secondary (pituitary) or tertiary (hypothalamic) hypothyroidism, where the stimulus to the gland is missing. High $T_4$ with high TSH suggests a TSH-secreting pituitary tumor.",
    skill: 'Endocrine feedback',
  },
  {
    id: 'bbd2-20',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'In skeletal muscle, how does calcium released from the sarcoplasmic reticulum initiate contraction?',
    options: [
      "It binds troponin, shifting tropomyosin off actin sites",
      "It binds calmodulin, activating myosin light-chain kinase",
      "It binds myosin heads, directly powering the power stroke",
      "It binds tropomyosin, which then hydrolyzes ATP on actin"
    ],
    correctAnswer: 0,
    explanation:
      "In skeletal muscle, $\\text{Ca}^{2+}$ binds troponin C, causing a conformational change that shifts tropomyosin away from the myosin-binding sites on actin so cross-bridges can form. Calcium binding calmodulin to activate myosin light-chain kinase is the mechanism in smooth muscle. The power stroke is driven by ATP hydrolysis and phosphate release in the myosin head, not by calcium binding myosin. Tropomyosin has no ATPase activity; ATP is hydrolyzed by myosin.",
    skill: 'Muscle contraction',
  },
  // ---------------------------------------------------------------- microbiology
  {
    id: 'bbd2-21',
    section: 'bio-biochem',
    discipline: 'microbiology',
    question:
      'Two auxotrophic E. coli strains produce prototrophic recombinants when mixed together, but not when kept apart by a filter that passes free DNA and bacteriophages yet blocks whole cells. Which process most likely transfers the genes?',
    options: ['Transformation', 'Mutation', 'Conjugation', 'Transduction'],
    correctAnswer: 2,
    explanation:
      "Conjugation requires direct cell-to-cell contact through a pilus, so a filter that keeps the cells apart blocks it. Transformation (uptake of free DNA) and transduction (phage-carried DNA) would both still work across a filter that passes DNA and phages. Spontaneous reversion mutations would appear even in separated cultures and would not depend on the strains being mixed.",
    skill: 'Bacterial genetics',
  },
  {
    id: 'bbd2-22',
    section: 'bio-biochem',
    discipline: 'microbiology',
    question:
      'Why do Gram-negative bacteria appear pink rather than purple at the end of a Gram stain?',
    options: [
      "They lack peptidoglycan, so no dye can bind to their cell walls",
      "Their thin peptidoglycan layer loses crystal violet in alcohol",
      "Their thick peptidoglycan wall traps safranin over crystal violet",
      "Their teichoic acids hold safranin more tightly than violet dye"
    ],
    correctAnswer: 1,
    explanation:
      "Gram-negative cells have only a thin peptidoglycan layer beneath an outer membrane; the alcohol decolorizer disrupts the outer membrane and the crystal violet–iodine complex washes out of the thin layer, so the cells take up the pink safranin counterstain. They do have peptidoglycan, just a thin layer. A thick peptidoglycan wall is the Gram-positive feature, and it retains crystal violet, making those cells purple. Teichoic acids are found in Gram-positive walls, not Gram-negative ones.",
    skill: 'Bacterial structure',
  },
]
