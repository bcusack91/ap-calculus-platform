/**
 * Entrance Quiz — Cell Compartmentalization (AP Biology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'cc-ent-1a', question: 'What is the primary advantage of compartmentalization in eukaryotic cells?', options: ['It allows different chemical environments to exist simultaneously within one cell', 'It increases the overall size of the cell', 'It eliminates the need for enzymes', 'It prevents the cell from dividing'], correctIndex: 0, explanation: 'Compartmentalization allows different organelles to maintain distinct chemical environments (pH, ion concentration, enzyme sets), enabling incompatible reactions to occur simultaneously in the same cell.', partNumber: 1, partTitle: 'Compartmentalization Overview' },
  { id: 'cc-ent-1b', question: 'Why is it essential that lysosomal enzymes are separated from the cytoplasm by a membrane?', options: ['Lysosomal enzymes require sunlight to function', 'Lysosomal enzymes are alkaline and would raise cytoplasmic pH', 'Lysosomal digestive enzymes would degrade cytoplasmic components if released', 'Lysosomal enzymes produce oxygen that is toxic to the cell'], correctIndex: 2, explanation: 'Lysosomes contain hydrolytic enzymes that function at acidic pH. If released into the cytoplasm, these enzymes could digest essential cellular structures, so membrane separation is critical.', partNumber: 1, partTitle: 'Compartmentalization Overview' },

  // Part 2
  { id: 'cc-ent-2a', question: 'What is the functional difference between rough ER and smooth ER?', options: ['Rough ER stores lipids; smooth ER stores carbohydrates', 'Rough ER synthesizes proteins for export; smooth ER synthesizes lipids and detoxifies drugs', 'Rough ER produces ATP; smooth ER produces NADH', 'Rough ER is found only in plant cells; smooth ER only in animal cells'], correctIndex: 1, explanation: 'Rough ER has ribosomes on its surface that synthesize proteins destined for secretion or membrane insertion. Smooth ER lacks ribosomes and is involved in lipid synthesis, detoxification, and calcium storage.', partNumber: 2, partTitle: 'Organelle Functions' },
  { id: 'cc-ent-2b', question: 'Which best describes the primary function of the Golgi apparatus?', options: ['Synthesizing DNA for the nucleus', 'Generating ATP through oxidative phosphorylation', 'Modifying, sorting, and packaging proteins for transport', 'Breaking down worn-out organelles'], correctIndex: 2, explanation: 'The Golgi apparatus receives proteins from the ER, modifies them (e.g., glycosylation), sorts them by destination, and packages them into vesicles for secretion or delivery to other organelles.', partNumber: 2, partTitle: 'Organelle Functions' },

  // Part 3
  { id: 'cc-ent-3a', question: 'How do cristae in mitochondria and thylakoid stacks in chloroplasts increase organelle efficiency?', options: ['They reduce the organelle\'s need for water', 'They increase membrane surface area, providing more space for reactions', 'They allow the organelle to move faster within the cell', 'They prevent molecules from leaking out of the organelle'], correctIndex: 1, explanation: 'Cristae (mitochondria) and thylakoid stacks (chloroplasts) are membrane folds that dramatically increase surface area. More surface area means more embedded enzymes and electron transport chains, increasing the rate of ATP production.', partNumber: 3, partTitle: 'Membrane Surfaces' },
  { id: 'cc-ent-3b', question: 'The inner and outer mitochondrial membranes differ in function. What is unique about the inner membrane?', options: ['It is freely permeable to all ions', 'It contains the electron transport chain and ATP synthase', 'It is composed entirely of carbohydrates', 'It surrounds the nucleus'], correctIndex: 1, explanation: 'The inner mitochondrial membrane is highly selective and houses the electron transport chain complexes and ATP synthase. The outer membrane is more permeable and allows small molecules to pass through porins.', partNumber: 3, partTitle: 'Membrane Surfaces' },

  // Part 4
  { id: 'cc-ent-4a', question: 'What is the primary role of transport vesicles in eukaryotic cells?', options: ['They synthesize new proteins from amino acids', 'They transport materials between organelles such as the ER and Golgi', 'They digest food particles brought in by phagocytosis', 'They anchor the cell to neighboring cells'], correctIndex: 1, explanation: 'Transport vesicles bud from one compartment (e.g., the ER) and fuse with another (e.g., the Golgi), carrying proteins and lipids between organelles as part of the endomembrane system.', partNumber: 4, partTitle: 'Intracellular Transport' },
  { id: 'cc-ent-4b', question: 'How are vesicles moved along cytoskeletal tracks within the cell?', options: ['By osmotic pressure', 'By motor proteins such as kinesin and dynein that walk along microtubules', 'By random Brownian motion only', 'By contraction of the cell membrane'], correctIndex: 1, explanation: 'Motor proteins like kinesin and dynein use ATP hydrolysis to "walk" along microtubule tracks, actively transporting vesicles and organelles to specific locations within the cell.', partNumber: 4, partTitle: 'Intracellular Transport' },

  // Part 5
  { id: 'cc-ent-5a', question: 'Which of the following is NOT evidence supporting the endosymbiotic theory?', options: ['Mitochondria and chloroplasts have their own circular DNA', 'Mitochondria and chloroplasts have double membranes', 'Mitochondria and chloroplasts contain 80S ribosomes like the host cell', 'Mitochondria and chloroplasts are similar in size to bacteria'], correctIndex: 2, explanation: 'Mitochondria and chloroplasts have 70S ribosomes (like bacteria), not 80S ribosomes (like the eukaryotic cytoplasm). This bacterial-type ribosome is key evidence for endosymbiosis. Having 80S ribosomes would NOT support the theory.', partNumber: 5, partTitle: 'Endosymbiotic Theory' },
  { id: 'cc-ent-5b', question: 'How do mitochondria and chloroplasts reproduce within a cell?', options: ['They are assembled from scratch by the nucleus', 'They undergo meiosis', 'They reproduce by binary fission, similar to bacteria', 'They bud off from the Golgi apparatus'], correctIndex: 2, explanation: 'Mitochondria and chloroplasts divide by binary fission, the same process used by bacteria. This independent replication supports the endosymbiotic theory that these organelles were once free-living prokaryotes.', partNumber: 5, partTitle: 'Endosymbiotic Theory' },

  // Part 6
  { id: 'cc-ent-6a', question: 'A drug disrupts vesicle formation in a cell. What is the most likely immediate consequence?', options: ['DNA replication stops', 'Protein secretion from the cell is blocked', 'The cell begins photosynthesis', 'Mitochondria stop producing ATP'], correctIndex: 1, explanation: 'Vesicles are essential for transporting proteins from the ER to the Golgi and from the Golgi to the plasma membrane for secretion. Disrupting vesicle formation would block the secretory pathway, preventing protein export.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'cc-ent-6b', question: 'Mature red blood cells (RBCs) in mammals lack mitochondria. How do they produce ATP?', options: ['They rely entirely on anaerobic glycolysis in the cytoplasm', 'They use chloroplasts absorbed from dietary plants', 'They import ATP directly from the bloodstream', 'They do not need ATP to function'], correctIndex: 0, explanation: 'Without mitochondria, RBCs cannot perform oxidative phosphorylation. They rely solely on glycolysis (anaerobic) to produce ATP. This also prevents them from consuming the oxygen they carry, maximizing delivery to tissues.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7
  { id: 'cc-ent-7a', question: 'Compartmentalization is considered a key evolutionary advantage of eukaryotic cells over prokaryotic cells because it:', options: ['Eliminates the need for a plasma membrane', 'Allows simultaneous, specialized biochemical processes in distinct environments', 'Reduces the total number of genes needed', 'Makes cells smaller and more efficient'], correctIndex: 1, explanation: 'Compartmentalization in eukaryotes allows different organelles to maintain optimal conditions for their specific functions, enabling complex biochemical processes that prokaryotes—which lack membrane-bound organelles—cannot easily achieve.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'cc-ent-7b', question: 'Which organelle is NOT part of the endomembrane system?', options: ['Endoplasmic reticulum', 'Golgi apparatus', 'Mitochondria', 'Lysosomes'], correctIndex: 2, explanation: 'The endomembrane system includes the nuclear envelope, ER, Golgi apparatus, lysosomes, vesicles, and plasma membrane. Mitochondria (and chloroplasts) are NOT part of this system; they have independent origins via endosymbiosis.', partNumber: 7, partTitle: 'AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Compartmentalization Overview' },
    { partNumber: 2, partTitle: 'Organelle Functions' },
    { partNumber: 3, partTitle: 'Membrane Surfaces' },
    { partNumber: 4, partTitle: 'Intracellular Transport' },
    { partNumber: 5, partTitle: 'Endosymbiotic Theory' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
