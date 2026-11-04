/**
 * Entrance Quiz — Microbiology (MCAT)
 * 14 questions · 7 parts (2 per part)
 * Part titles match the interactive lesson's "Part N of 7" lines
 * (re-aligned Nov 2026 so each part tests the lesson part of the same number).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Bacteria: Structure & Classification'
const P2 = 'Bacterial Growth & Metabolism'
const P3 = 'Bacterial Genetics & Antibiotic Resistance'
const P4 = 'Viruses'
const P5 = 'Fungi, Parasites & Prions'
const P6 = 'Immune Response to Infection'
const P7 = 'Immune Disorders & Clinical Microbiology'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Bacteria: Structure & Classification
  { id: 'mmicro-ent-1a', question: 'Compared with a Gram-positive cell wall, the envelope of a Gram-negative bacterium has:', options: ['A thick peptidoglycan layer and no outer membrane', 'Thin peptidoglycan plus an outer membrane with LPS', 'No peptidoglycan, and a wall made of chitin', 'A thick outer layer built from teichoic acid'], correctIndex: 1, explanation: 'Gram-negative bacteria have a thin peptidoglycan layer and an outer membrane containing lipopolysaccharide, which is why they lose the crystal violet and stain pink. A thick peptidoglycan wall with no outer membrane describes Gram-positive bacteria, and chitin walls belong to fungi.', partNumber: 1, partTitle: P1 },
  { id: 'mmicro-ent-1b', question: 'Penicillin kills bacteria by blocking the synthesis of which structure?', options: ['The 70S ribosome', 'The plasma membrane', 'The peptidoglycan wall', 'The LPS-rich outer membrane'], correctIndex: 2, explanation: 'Penicillin and other beta-lactams block cross-linking of peptidoglycan, a structure human cells lack, so the weakened wall bursts. Drugs such as tetracyclines and macrolides act on the 70S ribosome instead, and penicillin does not build or break membranes or LPS.', partNumber: 1, partTitle: P1 },

  // Part 2 — Bacterial Growth & Metabolism
  { id: 'mmicro-ent-2a', question: 'A bacterium divides every 20 minutes. Starting from a single cell in log phase, how many cells are present after 2 hours?', options: ['12', '32', '64', '128'], correctIndex: 2, explanation: 'Two hours is 120 minutes, or 6 generations of 20 minutes, so $N = 1 \\times 2^6 = 64$. Multiplying 6 by 2 gives 12, which treats growth as linear, and 32 and 128 count one generation too few or too many.', partNumber: 2, partTitle: P2 },
  { id: 'mmicro-ent-2b', question: 'An organism grows with or without $O_{2}$ but grows best when $O_{2}$ is present, using it for aerobic respiration. It is a(n):', options: ['Facultative anaerobe', 'Obligate aerobe', 'Obligate anaerobe', 'Aerotolerant anaerobe'], correctIndex: 0, explanation: 'A facultative anaerobe (such as E. coli) respires aerobically when $O_{2}$ is available and switches to fermentation without it. Obligate aerobes cannot grow without $O_{2}$, obligate anaerobes are killed by it, and aerotolerant anaerobes tolerate $O_{2}$ but never use it, so they grow equally with or without it.', partNumber: 2, partTitle: P2 },

  // Part 3 — Bacterial Genetics & Antibiotic Resistance
  { id: 'mmicro-ent-3a', question: 'Which pairing of a gene-transfer mechanism with how DNA moves is correct?', options: ['Transformation: DNA passed through a pilus', 'Conjugation: naked DNA taken up from the medium', 'Transduction: plasmid passed by direct contact', 'Transduction: DNA carried by a bacteriophage'], correctIndex: 3, explanation: 'In transduction a bacteriophage carries bacterial DNA from one cell to another. Transformation is uptake of naked DNA from the surroundings, and conjugation passes a plasmid through a pilus during direct cell contact.', partNumber: 3, partTitle: P3 },
  { id: 'mmicro-ent-3b', question: 'Which change would NOT make a bacterium more resistant to an antibiotic?', options: ['Pumping the drug out with efflux proteins', 'Destroying the drug with an enzyme', 'Adding porins that let more drug enter', 'Altering the protein the drug binds'], correctIndex: 2, explanation: 'More porins would increase drug entry and make the cell more susceptible; resistant strains often lose porins instead. Efflux pumps, drug-inactivating enzymes (such as beta-lactamase) and target modification are the classic resistance mechanisms.', partNumber: 3, partTitle: P3 },

  // Part 4 — Viruses
  { id: 'mmicro-ent-4a', question: "A virus's genome can consist of:", options: ['Both DNA and RNA, packaged together', 'DNA or RNA, but never both in one virion', 'Only DNA, since RNA is too unstable', 'Only RNA, copied by host DNA polymerase'], correctIndex: 1, explanation: 'A virion carries either DNA or RNA (single- or double-stranded), never both. Many viruses, such as influenza and HIV, have RNA genomes, and many others, such as herpesviruses, have DNA genomes.', partNumber: 4, partTitle: P4 },
  { id: 'mmicro-ent-4b', question: 'Viruses are obligate intracellular parasites mainly because they:', options: ['Lack ribosomes and their own metabolism', 'Are too large to survive outside a cell', 'Lose their capsids in extracellular fluid', 'Copy their genomes only by binary fission'], correctIndex: 0, explanation: 'Viruses have no ribosomes and no energy-producing metabolism, so they can only replicate by using a host cell’s machinery. They are far smaller than cells, virions remain intact outside hosts (naked viruses especially), and binary fission is how bacteria divide.', partNumber: 4, partTitle: P4 },

  // Part 5 — Fungi, Parasites & Prions
  { id: 'mmicro-ent-5a', question: 'Echinocandin antifungal drugs target:', options: ['Ergosterol in the fungal cell membrane', 'Peptidoglycan in the fungal cell wall', '70S ribosomes in the fungal cytoplasm', 'Glucan synthesis in the fungal cell wall'], correctIndex: 3, explanation: 'Echinocandins block synthesis of glucan, a fungal wall polysaccharide. Azoles and amphotericin B act on ergosterol, fungi have no peptidoglycan (which is why beta-lactams fail), and fungi are eukaryotes with 80S ribosomes.', partNumber: 5, partTitle: P5 },
  { id: 'mmicro-ent-5b', question: 'Fungi differ from bacteria in that fungi:', options: ['Are prokaryotes with peptidoglycan walls', 'Are eukaryotes with walls made of chitin', 'Have no nucleus and reproduce only sexually', 'Cannot grow anywhere outside a host cell'], correctIndex: 1, explanation: 'Fungi are eukaryotes whose walls contain chitin and whose membranes contain ergosterol instead of cholesterol. Peptidoglycan walls and the lack of a nucleus describe bacteria, and most fungi grow freely in the environment and can reproduce asexually (yeast bud).', partNumber: 5, partTitle: P5 },

  // Part 6 — Immune Response to Infection
  { id: 'mmicro-ent-6a', question: 'Which pairing of an MHC class with the T cell that recognizes it is correct?', options: ['MHC I with $CD4^{+}$ helper T cells', 'MHC II with $CD8^{+}$ cytotoxic T cells', 'MHC II with $CD4^{+}$ helper T cells', 'MHC I with B-cell antigen receptors'], correctIndex: 2, explanation: 'By the rule of 8, MHC II (exogenous antigen on antigen-presenting cells) pairs with $CD4^{+}$ helper T cells ($2 \\times 4 = 8$), and MHC I (endogenous antigen on all nucleated cells) pairs with $CD8^{+}$ cytotoxic T cells ($1 \\times 8$). B-cell receptors bind free antigen and do not need MHC.', partNumber: 6, partTitle: P6 },
  { id: 'mmicro-ent-6b', question: 'Which cells carry out the adaptive (rather than innate) immune response?', options: ['Neutrophils and macrophages', 'Natural killer cells', 'Mast cells and eosinophils', 'B cells and T cells'], correctIndex: 3, explanation: 'Adaptive immunity is antigen-specific and forms memory, and it is carried out by B and T lymphocytes. Neutrophils, macrophages, NK cells, mast cells and eosinophils are all part of the innate response.', partNumber: 6, partTitle: P6 },

  // Part 7 — Immune Disorders & Clinical Microbiology
  { id: 'mmicro-ent-7a', question: 'Which antibody class is the most abundant in serum?', options: ['IgM', 'IgG', 'IgA', 'IgE'], correctIndex: 1, explanation: 'IgG is the most plentiful serum antibody and dominates secondary responses. IgM is the first class made in a primary response, IgA protects mucosal surfaces, and IgE drives allergies and antiparasite responses.', partNumber: 7, partTitle: P7 },
  { id: 'mmicro-ent-7b', question: 'Which antibody class serves mainly as an antigen receptor on the surface of naive B cells?', options: ['IgD', 'IgE', 'IgA', 'IgG'], correctIndex: 0, explanation: 'IgD sits on the surface of mature naive B cells (alongside monomeric IgM) and acts as part of the B-cell receptor. IgE binds mast cells, IgA is secreted onto mucosal surfaces, and IgG circulates in the blood.', partNumber: 7, partTitle: P7 },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
    { partNumber: 4, partTitle: P4 },
    { partNumber: 5, partTitle: P5 },
    { partNumber: 6, partTitle: P6 },
    { partNumber: 7, partTitle: P7 },
  ]
}
