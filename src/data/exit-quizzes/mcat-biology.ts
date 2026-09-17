/**
 * MCAT Cell Biology & Molecular Biology Exit Quiz
 */

import { authoredFor } from './mcat-authored-pool'
import { mcatSubtopicPool } from './mcat-subtopic-pool'
import type { MCATQuizQuestion } from './mcat-general-chemistry'
import type { ExitQuizQuestion } from './sat-linear-equations-inequalities'

const questionPool: MCATQuizQuestion[] = [
  {
    question: 'Which phase of the cell cycle is characterized by DNA replication?',
    options: ['G1 phase', 'S phase', 'G2 phase', 'M phase'],
    correctAnswer: 1,
    explanation: 'The S (synthesis) phase is when DNA replication occurs. G1 prepares for replication, G2 prepares for mitosis, and M phase is mitosis/cell division.',
    difficulty: 'easy',
  },
  {
    question: 'The lac operon is an example of:',
    options: ['Positive regulation by CAP alone', 'Negative regulation by the repressor alone', 'Both positive and negative regulation', 'Constitutive, unregulated expression'],
    correctAnswer: 2,
    explanation: 'The lac operon has both negative regulation (lac repressor blocks transcription without lactose) and positive regulation (CAP-cAMP activates transcription when glucose is low). Neither CAP nor the repressor alone accounts for its control, and its expression is regulated rather than constitutive.',
    difficulty: 'medium',
  },
  {
    question: 'During oxidative phosphorylation, the final electron acceptor in the electron transport chain is:',
    options: ['$NAD^{+}$', 'Cytochrome c', '$O_{2}$', '$CO_{2}$'],
    correctAnswer: 2,
    explanation: 'Molecular oxygen $(O_{2})$ is the final electron acceptor in the ETC. It receives electrons from Complex IV and combines with $H^{+}$ to form water. Cytochrome c is a mobile carrier that passes electrons on to Complex IV, $NAD^{+}$ is the oxidized carrier regenerated when NADH donates electrons at the start of the chain, and $CO_{2}$ is a waste product of the TCA cycle.',
    difficulty: 'easy',
  },
  {
    question: 'Which type of RNA carries amino acids to the ribosome during translation?',
    options: ['mRNA', 'tRNA', 'rRNA', 'snRNA'],
    correctAnswer: 1,
    explanation: 'Transfer RNA (tRNA) carries specific amino acids to the ribosome. Each tRNA has an anticodon that matches a codon on mRNA, ensuring correct amino acid placement.',
    difficulty: 'easy',
  },
  {
    question: 'A mutation that changes a codon from UAC to UAA would result in:',
    options: ['A missense mutation', 'A silent mutation', 'A nonsense mutation', 'A frameshift mutation'],
    correctAnswer: 2,
    explanation: 'UAA is a stop codon. Changing from UAC (tyrosine) to UAA (stop) creates a premature termination signal, producing a truncated protein — this is a nonsense mutation.',
    difficulty: 'medium',
  },
  {
    question: 'The rough endoplasmic reticulum is "rough" because it is studded with:',
    options: ['Mitochondria', 'Peroxisomes', 'Ribosomes', 'Centrioles'],
    correctAnswer: 2,
    explanation: 'The rough ER has ribosomes attached to its cytoplasmic surface, giving it a "rough" appearance. These ribosomes synthesize proteins destined for secretion, membranes, or lysosomes.',
    difficulty: 'easy',
  },
  {
    question: 'In DNA replication, Okazaki fragments are found on the:',
    options: ['Leading strand', 'Lagging strand', 'Both strands', 'Template strand'],
    correctAnswer: 1,
    explanation: 'Okazaki fragments are short DNA segments synthesized on the lagging strand. DNA polymerase can only synthesize in the 5′ → 3′ direction, so the lagging strand, which must be built away from the moving replication fork, is made discontinuously in pieces that are later joined by ligase.',
    difficulty: 'easy',
  },
  {
    question: 'What is the role of p53 in the cell cycle?',
    options: ['It drives cells past the G1/S checkpoint', 'It halts the cell cycle when DNA is damaged', 'It is an oncogene that fuels growth', 'It repairs damaged DNA bases directly'],
    correctAnswer: 1,
    explanation: 'p53 is a tumor suppressor that acts as a "guardian of the genome." It can halt the cell cycle at G1/S checkpoint to allow DNA repair, or trigger apoptosis if damage is irreparable. It is a transcription factor that switches on repair genes rather than repairing DNA itself, and it restrains growth rather than driving it as an oncogene would.',
    difficulty: 'medium',
  },
  {
    question: 'Which organelle is responsible for the modification, sorting, and packaging of proteins?',
    options: ['Endoplasmic reticulum', 'Golgi apparatus', 'Lysosome', 'Peroxisome'],
    correctAnswer: 1,
    explanation: 'The Golgi apparatus (Golgi body) receives proteins from the ER, further modifies them (glycosylation, phosphorylation), sorts them, and packages them into vesicles for secretion or delivery to other organelles.',
    difficulty: 'easy',
  },
  {
    question: 'During meiosis, crossing over occurs in:',
    options: ['Prophase I', 'Metaphase I', 'Anaphase II', 'Telophase II'],
    correctAnswer: 0,
    explanation: 'Crossing over (recombination) occurs during prophase I of meiosis, when homologous chromosomes pair up (synapsis) and exchange genetic material at chiasmata.',
    difficulty: 'easy',
  },
  {
    question: 'The wobble hypothesis explains why:',
    options: ['Three of the 64 codons serve as stop signals', 'The genetic code is shared by nearly all life', 'Fewer than 61 tRNAs can read all 61 sense codons', 'First-position codon mutations are silent'],
    correctAnswer: 2,
    explanation: 'The wobble hypothesis (Crick) explains that the 3rd position of the codon allows non-standard base pairing with the 1st position (wobble position) of the anticodon, so fewer tRNAs are needed. Stop codons and the near-universality of the code are real features but are not what wobble explains, and it is third-position (not first-position) changes that are most often silent.',
    difficulty: 'medium',
  },
  {
    question: 'Which process involves the conversion of mRNA to protein?',
    options: ['Transcription', 'Translation', 'DNA replication', 'RNA splicing'],
    correctAnswer: 1,
    explanation: 'Translation is the process by which ribosomes decode mRNA to synthesize proteins. Transcription converts DNA to mRNA, replication copies DNA, and splicing removes introns from pre-mRNA.',
    difficulty: 'easy',
  },
  {
    question: 'Programmed cell death is known as:',
    options: ['Necrosis', 'Apoptosis', 'Autophagy', 'Cell lysis'],
    correctAnswer: 1,
    explanation: 'Apoptosis is programmed cell death — a controlled, orderly process involving caspases. Necrosis is uncontrolled cell death from injury. Autophagy is self-digestion of cellular components.',
    difficulty: 'easy',
  },
  {
    question: 'A silent mutation:',
    options: ['Always occurs in non-coding DNA', 'Changes one amino acid in the protein', 'Changes a codon but not its amino acid', 'Creates a premature stop codon'],
    correctAnswer: 2,
    explanation: 'A silent mutation changes a codon to a synonymous codon (one that codes for the same amino acid) due to the degeneracy of the genetic code. The protein sequence is unchanged. Changing one amino acid is a missense mutation, creating a premature stop codon is a nonsense mutation, and silent mutations occur within coding sequence.',
    difficulty: 'easy',
  },
  {
    question: 'The endosymbiotic theory proposes that mitochondria evolved from:',
    options: ['Endoplasmic reticulum', 'Ancient aerobic prokaryotes', 'Free-living cyanobacteria', 'Infolded plasma membrane'],
    correctAnswer: 1,
    explanation: 'The endosymbiotic theory proposes that mitochondria were once free-living aerobic bacteria engulfed by ancestral eukaryotic cells. Evidence includes their double membrane, own DNA, and bacterial-size ribosomes. Cyanobacteria are the proposed ancestors of chloroplasts, not mitochondria, and origin from internal membranes such as infolded plasma membrane or ER is the rejected alternative to endosymbiosis.',
    difficulty: 'medium',
  },
]

// Bacterial genetics — exact-tagged for mcat-microbiology-genetics-mcat (the
// keyword match on "genetics" was serving meiosis / silent-mutation items).
const microbialGeneticsPool: MCATQuizQuestion[] = [
  {
    question: 'A tryptophan auxotroph (trp−) gains the ability to make tryptophan after co-culture with a trp+ strain, but only when the two strains can touch; a filter that keeps the cells apart blocks the transfer. The mechanism is:',
    options: ['Conjugation', 'Transformation', 'Transduction', 'Binary fission'],
    correctAnswer: 0,
    explanation: 'Conjugation requires direct cell-to-cell contact through a pilus. Transformation (uptake of free DNA) and transduction (phage-mediated transfer) both work across a filter that separates cells, and binary fission is reproduction, not gene exchange.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-microbiology-genetics-mcat',
  },
  {
    question: 'Purified DNA from a heat-killed virulent strain converts living non-virulent bacteria into virulent ones. The process is:',
    options: ['Transformation', 'Conjugation via a pilus', 'Generalized transduction', 'Lysogenic conversion'],
    correctAnswer: 0,
    explanation: 'Uptake of naked DNA from the environment is transformation (Griffith and Avery). No living donor cell or phage is involved, which rules out conjugation, transduction, and prophage-driven lysogenic conversion.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-microbiology-genetics-mcat',
  },
  {
    question: 'During lytic growth, a bacteriophage accidentally packages a random fragment of host chromosomal DNA and injects it into a new host cell, where it recombines into the chromosome. This process is:',
    options: ['Generalized transduction', 'Specialized transduction', 'Transformation by free DNA', 'Conjugation via a pilus'],
    correctAnswer: 0,
    explanation: 'Generalized transduction moves any random host gene via a mispackaged phage head during lytic growth. Specialized transduction moves only genes adjacent to the prophage integration site after imprecise excision of a temperate phage.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-microbiology-genetics-mcat',
  },
  {
    question: 'A temperate phage excises imprecisely from the host chromosome and carries the adjacent gal genes into the next cell it infects. This process is:',
    options: ['Specialized transduction', 'Generalized transduction', 'Transposition of a mobile element', 'Conjugation via a pilus'],
    correctAnswer: 0,
    explanation: 'Specialized (restricted) transduction transfers only the host genes flanking the prophage insertion site, because they are excised along with the phage genome. Generalized transduction packages random chromosomal fragments during a lytic cycle instead.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-microbiology-genetics-mcat',
  },
  {
    question: 'An F+ cell conjugates with an F− cell. Which statement describes the recipient afterward?',
    options: ['It becomes F+, having received a copy of the F plasmid', 'It becomes Hfr, with the F factor in its chromosome', 'It remains F−, since only chromosomal genes transfer', 'It loses its own chromosome and dies'],
    correctAnswer: 0,
    explanation: 'In an F+ × F− cross, the F plasmid is replicated by rolling-circle synthesis and one copy is transferred, so the recipient becomes F+ (and the donor stays F+). Integration into the chromosome would make an Hfr cell, which does not happen in a routine F+ transfer.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-microbiology-genetics-mcat',
  },
  {
    question: 'An Hfr strain conjugates with an F− recipient. Compared with an F+ × F− mating, this cross most often results in:',
    options: ['Transfer of chromosomal genes, with the recipient remaining F−', 'Transfer of the whole F plasmid, converting the recipient to F+', 'Transfer of no genetic material', 'Fusion of the two cells into one'],
    correctAnswer: 0,
    explanation: 'In an Hfr cell the F factor is integrated into the chromosome, so conjugation drags chromosomal genes into the recipient. The mating bridge usually breaks before the whole chromosome, including the distal end of the F factor, is transferred, so the recipient gains chromosomal genes but stays F−.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-microbiology-genetics-mcat',
  },
  {
    question: 'A resistance gene moves from a plasmid into the bacterial chromosome of the same cell without any sequence homology between the two. The element responsible is a:',
    options: ['Transposon', 'F factor', 'Prophage', 'Bacteriophage'],
    correctAnswer: 0,
    explanation: 'Transposons ("jumping genes") encode a transposase that moves them between DNA molecules without homologous recombination. The F factor integrates by homologous recombination at insertion sequences, a prophage is an integrated phage genome, and a bacteriophage transfers DNA between cells rather than within one.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-microbiology-genetics-mcat',
  },
  {
    question: 'E. coli is grown with lactose present and glucose absent. Transcription of the lac operon is high because:',
    options: ['Allolactose inactivates the repressor and CAP–cAMP is bound', 'The repressor stays bound to the operator while CAP–cAMP is unbound', 'High glucose induces CAP–cAMP binding at the promoter', 'Lactose itself directly activates RNA polymerase'],
    correctAnswer: 0,
    explanation: 'Two conditions must both be met for maximal lac transcription: allolactose (made from lactose) binds the lac repressor and pulls it off the operator, and low glucose raises cAMP so the CAP–cAMP complex binds and recruits RNA polymerase. Glucose lowers cAMP, and lactose does not touch the polymerase directly.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-microbiology-genetics-mcat',
  },
  {
    question: 'In the trp operon, a high intracellular tryptophan concentration reduces transcription because tryptophan:',
    options: ['Acts as a corepressor that activates the trp repressor', 'Binds the operator directly to block RNA polymerase', 'Is an inducer that releases the repressor from the operator', 'Degrades trp mRNA through RNase recruitment'],
    correctAnswer: 0,
    explanation: 'The trp operon is repressible: the repressor is inactive on its own and binds the operator only when tryptophan (the corepressor) is attached. A small molecule does not bind DNA by itself, an inducer would turn the operon ON, and the effect is on transcription initiation, not on mRNA degradation.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-microbiology-genetics-mcat',
  },
  {
    question: 'R plasmids are clinically important mainly because they:',
    options: ['Carry resistance genes transferable by conjugation', 'Encode the essential enzymes of chromosomal DNA replication', 'Are required for binary fission', 'Integrate permanently into the host chromosome'],
    correctAnswer: 0,
    explanation: 'R (resistance) plasmids often carry several antibiotic-resistance genes plus the transfer genes needed for conjugation, so resistance can spread rapidly, even between species. Replication and division enzymes are chromosomal, and plasmids replicate independently rather than integrating permanently.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-microbiology-genetics-mcat',
  },
  {
    question: 'In the Luria–Delbrück fluctuation test, the large variation in the number of phage-resistant colonies across parallel cultures showed that resistance mutations:',
    options: ['Arise spontaneously before exposure to the phage', 'Are induced by contact with the phage', 'Are acquired by transformation from lysed cells', 'Occur at a fixed rate only after phage exposure'],
    correctAnswer: 0,
    explanation: 'If the phage induced resistance, every culture would yield a similar number of resistant colonies. Instead the counts fluctuated wildly, which is expected only if mutations happened at random times BEFORE plating: an early mutation gives a "jackpot" culture, a late one gives few resistant cells.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-microbiology-genetics-mcat',
  },
  {
    question: 'A bacterium carrying a prophage in its chromosome gains the ability to produce a toxin encoded by the phage genome. This phenomenon is:',
    options: ['Lysogenic conversion', 'Generalized transduction', 'Transformation by free DNA', 'Conjugation via a pilus'],
    correctAnswer: 0,
    explanation: 'Lysogenic (phage) conversion is a change in host phenotype caused by genes expressed from an integrated prophage; diphtheria, cholera, and Shiga toxins are classic examples. No host DNA is being moved between cells, so this is not transduction, transformation, or conjugation.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-microbiology-genetics-mcat',
  },
  {
    question: 'A point mutation in a ribosomal-protein gene makes one bacterium resistant to streptomycin. Within a population, this resistance is most likely to spread by:',
    options: ['Clonal expansion of the mutant through binary fission', 'Conjugative transfer of the mutated ribosomal gene on a plasmid', 'Secretion of the altered ribosomal protein into the medium', 'Transposition of the gene into neighboring cells'],
    correctAnswer: 0,
    explanation: 'A chromosomal point mutation is inherited vertically: under streptomycin selection the mutant divides and its descendants take over. Chromosomal ribosomal genes are not on conjugative plasmids, proteins are not transferred as heritable traits, and transposition occurs within a cell, not between cells.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-microbiology-genetics-mcat',
  },
]

// Antimicrobials & resistance — exact-tagged for mcat-microbiology-antimicrobials-mcat
// (a diagnostic-recommendable slug that was serving general microbiology items).
const antimicrobialsPool: MCATQuizQuestion[] = [
  {
    question: 'Penicillin is selectively toxic to bacteria because it inhibits:',
    options: ['Peptidoglycan cross-linking, absent in human cells', 'Ribosomal protein synthesis, absent in humans', 'DNA gyrase, which human cells also use', 'Ergosterol synthesis in the cell membrane'],
    correctAnswer: 0,
    explanation: 'Beta-lactams acylate the transpeptidase (penicillin-binding protein) that cross-links peptidoglycan. Human cells have no cell wall, so the target simply does not exist in the host. Human cells do make proteins on ribosomes (a different, 80S, ribosome), do not use bacterial gyrase, and make cholesterol rather than ergosterol.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-microbiology-antimicrobials-mcat',
  },
  {
    question: 'A Gram-negative rod is resistant to amoxicillin alone but susceptible to amoxicillin combined with clavulanate. The most likely resistance mechanism is:',
    options: ['Production of a beta-lactamase', 'An altered penicillin-binding protein', 'An efflux pump exporting the drug', 'Loss of outer-membrane porins'],
    correctAnswer: 0,
    explanation: 'Clavulanate is a beta-lactamase inhibitor with little antibacterial activity of its own. Restoring susceptibility by adding it shows the organism was destroying the drug enzymatically. An altered target, an efflux pump, or reduced porin entry would not be overcome by inhibiting beta-lactamase.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-microbiology-antimicrobials-mcat',
  },
  {
    question: 'Vancomycin prevents bacterial cell-wall synthesis by:',
    options: ['Binding the D-Ala-D-Ala end of wall precursors', 'Inactivating transpeptidase as a suicide substrate', 'Blocking folate synthesis needed for wall precursors', 'Disrupting the outer membrane of Gram-negatives'],
    correctAnswer: 0,
    explanation: 'Vancomycin caps the terminal D-alanyl-D-alanine of the peptidoglycan precursor so that transpeptidase cannot use it; it blocks the substrate rather than the enzyme. Suicide-substrate inhibition of transpeptidase describes beta-lactams, folate antagonism describes sulfonamides, and membrane disruption describes polymyxins.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-microbiology-antimicrobials-mcat',
  },
  {
    question: 'Vancomycin is ineffective against most Gram-negative bacteria because:',
    options: ['It cannot cross the outer membrane to reach the peptidoglycan', 'Gram-negative bacteria lack peptidoglycan', 'Gram-negatives use D-Lac instead of D-Ala terminal residues', 'It is inactivated by the low pH of the periplasm'],
    correctAnswer: 0,
    explanation: 'Vancomycin is a large glycopeptide that cannot pass through the porins of the Gram-negative outer membrane, so it never reaches its target in the periplasm. Gram-negatives do have a thin peptidoglycan layer; the D-Ala-to-D-Lac switch is an acquired resistance mechanism in enterococci, not a general Gram-negative feature.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-microbiology-antimicrobials-mcat',
  },
  {
    question: 'Aminoglycosides and tetracyclines both act on the bacterial ribosome. Which statement is accurate?',
    options: ['Both bind the 30S subunit', 'Both bind the 50S subunit of the ribosome', 'Aminoglycosides bind 50S; tetracyclines bind 30S', 'Both block the peptidyl transferase center'],
    correctAnswer: 0,
    explanation: 'The 30S drugs are aminoglycosides and tetracyclines ("buy AT 30"): aminoglycosides cause misreading of mRNA and tetracyclines block aminoacyl-tRNA entry to the A site. The 50S drugs (chloramphenicol, macrolides, clindamycin, linezolid) act at or near the peptidyl transferase center or the exit tunnel.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-microbiology-antimicrobials-mcat',
  },
  {
    question: 'Macrolides such as erythromycin inhibit bacterial protein synthesis by binding the:',
    options: ['50S subunit, blocking translocation', '30S subunit, blocking tRNA binding', 'DNA-dependent RNA polymerase', 'Peptidoglycan transpeptidase'],
    correctAnswer: 0,
    explanation: 'Macrolides bind the 23S rRNA of the 50S subunit near the exit tunnel and block translocation of the growing peptide, halting elongation. Tetracyclines are the 30S drugs that block tRNA binding, rifampin binds RNA polymerase, and beta-lactams hit transpeptidase.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-microbiology-antimicrobials-mcat',
  },
  {
    question: 'Antibiotics that target the bacterial ribosome can also harm human mitochondria because:',
    options: ['Mitochondrial ribosomes resemble bacterial 70S ribosomes', 'Mitochondria import bacterial proteins', 'Human cytosolic ribosomes are identical to bacterial ones', 'Mitochondria synthesize peptidoglycan'],
    correctAnswer: 0,
    explanation: 'Consistent with their endosymbiotic origin, mitochondria carry bacterial-type ribosomes, so drugs such as aminoglycosides and chloramphenicol can inhibit mitochondrial protein synthesis (ototoxicity, bone-marrow suppression). Cytosolic ribosomes are 80S and structurally distinct, which is the basis of selective toxicity.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-microbiology-antimicrobials-mcat',
  },
  {
    question: 'Sulfonamides are selectively toxic to bacteria because humans:',
    options: ['Take up dietary folate rather than making it', 'Lack dihydrofolate reductase', 'Do not need folate for nucleotide synthesis', 'Metabolize sulfonamides to inactive forms'],
    correctAnswer: 0,
    explanation: 'Sulfonamides are PABA analogs that inhibit dihydropteroate synthase, an enzyme of de novo folate synthesis. Bacteria must build folate; humans absorb it from food and have no dihydropteroate synthase to inhibit. Humans do have dihydrofolate reductase (the target of trimethoprim and methotrexate) and do need folate for nucleotides.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-microbiology-antimicrobials-mcat',
  },
  {
    question: 'Trimethoprim and sulfamethoxazole are given together because the two drugs:',
    options: ['Block consecutive steps of folate synthesis', 'Bind the same enzyme at two different sites', 'Target the cell wall and ribosome simultaneously', 'Have identical mechanisms with additive effects'],
    correctAnswer: 0,
    explanation: 'Sulfamethoxazole inhibits dihydropteroate synthase and trimethoprim inhibits dihydrofolate reductase, two sequential enzymes in the same pathway. Blocking both steps is synergistic (a bactericidal combination from two bacteriostatic drugs) and makes resistance harder to acquire.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-microbiology-antimicrobials-mcat',
  },
  {
    question: 'Ciprofloxacin kills bacteria by inhibiting:',
    options: ['DNA gyrase and topoisomerase IV', 'Bacterial DNA-dependent RNA polymerase', 'DNA polymerase III holoenzyme', 'Dihydropteroate synthase of folate synthesis'],
    correctAnswer: 0,
    explanation: 'Fluoroquinolones trap DNA gyrase (topoisomerase II) and topoisomerase IV on DNA, blocking supercoil management and chromosome segregation and creating lethal double-strand breaks. RNA polymerase is the rifampin target, and dihydropteroate synthase is the sulfonamide target.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-microbiology-antimicrobials-mcat',
  },
  {
    question: 'Rifampin blocks bacterial transcription by binding:',
    options: ['Bacterial RNA polymerase', 'The 30S ribosomal subunit', 'DNA gyrase (topoisomerase II)', 'The peptidyl transferase center'],
    correctAnswer: 0,
    explanation: 'Rifampin binds the beta subunit of bacterial DNA-dependent RNA polymerase and blocks elongation of the RNA chain; it does not bind the structurally different human enzyme. Ribosomal and gyrase targets belong to other drug classes.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-microbiology-antimicrobials-mcat',
  },
  {
    question: 'Polymyxins are reserved for multidrug-resistant Gram-negative infections despite their nephrotoxicity because they:',
    options: ['Disrupt membranes by binding LPS', 'Inhibit peptidoglycan cross-linking', 'Block bacterial synthesis of folate', 'Inhibit the 50S ribosomal subunit'],
    correctAnswer: 0,
    explanation: 'Polymyxins are cationic detergents that bind lipopolysaccharide and disrupt the outer and inner membranes of Gram-negative bacteria. Because membranes are chemically similar across organisms, selectivity is poor and toxicity to human cells (kidney, nerve) is significant, which is why they are last-line agents.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-microbiology-antimicrobials-mcat',
  },
  {
    question: 'Methicillin-resistant Staphylococcus aureus (MRSA) is resistant to beta-lactams because it expresses:',
    options: ['PBP2a, a low-affinity target protein', 'A beta-lactamase that hydrolyzes methicillin', 'An efflux pump specific for beta-lactams', 'A thickened peptidoglycan layer'],
    correctAnswer: 0,
    explanation: 'The mecA gene encodes an alternative penicillin-binding protein (PBP2a) that keeps cross-linking peptidoglycan even when beta-lactams have inactivated the normal PBPs: resistance by target modification. Methicillin was designed to resist staphylococcal beta-lactamase, so enzymatic destruction does not explain MRSA.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-microbiology-antimicrobials-mcat',
  },
  {
    question: 'A hospital finds that resistance to a new antibiotic appeared in several unrelated bacterial species within a few months. This pattern is best explained by:',
    options: ['Horizontal transfer of a resistance plasmid', 'Independent chromosomal mutations in each species', 'Vertical inheritance within each species', 'Induction of resistance by the antibiotic'],
    correctAnswer: 0,
    explanation: 'The same resistance appearing across species in a short time points to a mobile element (an R plasmid or transposon) moving by conjugation. Independent mutations in several species would be far slower and would not produce identical mechanisms, vertical inheritance stays within a lineage, and antibiotics select for resistance rather than inducing it.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-microbiology-antimicrobials-mcat',
  },
  {
    question: 'A bacteriostatic antibiotic is best described as one that:',
    options: ['Halts growth without directly killing the cells', 'Kills bacteria directly', 'Lyses bacterial cells by disrupting the membrane', 'Prevents spore formation'],
    correctAnswer: 0,
    explanation: 'Bacteriostatic drugs (such as tetracyclines and sulfonamides) stop replication so that the host immune system can clear the infection; bacteria resume growth if the drug is removed early. Bactericidal drugs (beta-lactams, aminoglycosides, fluoroquinolones) kill outright.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-microbiology-antimicrobials-mcat',
  },
  {
    question: 'Azole antifungals are selectively toxic because they inhibit synthesis of:',
    options: ['Ergosterol, absent from human membranes', 'Cholesterol, absent from fungal membranes', 'Peptidoglycan, absent from human cells', 'Chitin, present in both fungi and humans'],
    correctAnswer: 0,
    explanation: 'Azoles inhibit a fungal cytochrome P450 (lanosterol 14-alpha-demethylase) required to make ergosterol, the sterol of fungal membranes; human membranes use cholesterol. The same selective-toxicity logic as antibacterials applies: hit a structure or pathway the host does not share. Fungi have no peptidoglycan, and humans make no chitin.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-microbiology-antimicrobials-mcat',
  },
]

// Deep pool: local questions + the authored competitive bank for this area
// (audit F1). Authored items carry subtopic tags the selector prefers.
const fullPool = [...questionPool, ...microbialGeneticsPool, ...antimicrobialsPool, ...authoredFor(['mcat-biology-'])]

// Uniform Fisher–Yates shuffle (the old `.sort(() => Math.random() - 0.5)`
// comparator is biased and engine-dependent).
function shuffleArray<T>(items: T[]): T[] {
  const shuffled = [...items]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function generateExitQuiz(count: number = 10, topicSlug?: string): ExitQuizQuestion[] {
  const source = topicSlug ? mcatSubtopicPool(fullPool, 'cell-mol-bio', topicSlug) : fullPool
  const shuffled = shuffleArray(source)
  return shuffled.slice(0, Math.min(count, shuffled.length)).map((q, i) => ({
    id: `biology-${i}`,
    question: q.question,
    options: q.options,
    correctIndex: q.correctAnswer,
    explanation: q.explanation,
    category: q.subtopicSlug ?? 'mcat-biology',
  }))
}
