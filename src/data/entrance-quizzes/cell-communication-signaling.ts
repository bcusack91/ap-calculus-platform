/**
 * Entrance Quiz — Cell Communication & Signaling (AP Biology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'ccs-ent-1a', question: 'What are the three stages of cell signaling?', options: ['Replication, transcription, translation', 'Reception, transduction, response', 'Glycolysis, Krebs cycle, ETC', 'Prophase, metaphase, anaphase'], correctIndex: 1, explanation: 'Cell signaling involves three sequential stages: (1) reception — a signaling molecule binds a receptor, (2) transduction — the signal is relayed and often amplified through a cascade, and (3) response — the cell changes its behavior.', partNumber: 1, partTitle: 'Cell Signaling Overview' },
  { id: 'ccs-ent-1b', question: 'In cell signaling, what is a ligand?', options: ['A type of organelle that processes signals', 'A signaling molecule that binds specifically to a receptor protein', 'An enzyme that breaks down hormones', 'A membrane channel that transports ions'], correctIndex: 1, explanation: 'A ligand is any molecule (hormone, neurotransmitter, growth factor) that binds specifically to a receptor protein. The receptor is the protein that detects the ligand and initiates the signaling cascade.', partNumber: 1, partTitle: 'Cell Signaling Overview' },

  // Part 2
  { id: 'ccs-ent-2a', question: 'Signal transduction typically involves which type of molecular event?', options: ['DNA replication by helicase', 'Relay proteins, often organized as phosphorylation (kinase) cascades', 'Direct transport of the ligand into the nucleus', 'Hydrolysis of glucose for energy'], correctIndex: 1, explanation: 'During transduction, relay proteins pass the signal along. Many pathways use kinase cascades, where each kinase phosphorylates the next protein in the series, activating it and relaying the signal.', partNumber: 2, partTitle: 'Signal Transduction' },
  { id: 'ccs-ent-2b', question: 'How do phosphorylation cascades benefit cell signaling?', options: ['They slow down the signal so the cell has time to respond', 'They amplify the signal — each step activates many molecules at the next step', 'They prevent the signal from reaching the nucleus', 'They degrade the original ligand'], correctIndex: 1, explanation: 'At each step of a phosphorylation cascade, one activated kinase can phosphorylate many target proteins. This amplification means a single ligand-receptor binding event can trigger a large cellular response.', partNumber: 2, partTitle: 'Signal Transduction' },

  // Part 3
  { id: 'ccs-ent-3a', question: 'Which molecules are common second messengers in cell signaling?', options: ['DNA and RNA', 'Glucose and fructose', 'cAMP and $Ca^{2+}$', 'Hemoglobin and myoglobin'], correctIndex: 2, explanation: 'cAMP (cyclic AMP) and $Ca^{2+}$ (calcium ions) are the most common second messengers. They are small, rapidly diffusible molecules released inside the cell after receptor activation to relay and amplify the signal.', partNumber: 3, partTitle: 'Second Messengers' },
  { id: 'ccs-ent-3b', question: 'Why are second messengers important for signal amplification?', options: ['Each receptor produces only one second messenger molecule', 'One activated receptor can trigger the production of many second messenger molecules, amplifying the signal', 'Second messengers directly bind DNA to change genes', 'Second messengers travel between cells to spread the signal'], correctIndex: 1, explanation: 'When a receptor activates an enzyme (e.g., adenylyl cyclase), that enzyme can produce many cAMP molecules. Each cAMP can activate further downstream proteins, creating enormous amplification from a single receptor event.', partNumber: 3, partTitle: 'Second Messengers' },

  // Part 4
  { id: 'ccs-ent-4a', question: 'Which of the following can be a cellular response to a signaling pathway?', options: ['Only changes in gene expression', 'Changes in gene expression, enzyme activity, or cell shape', 'Only changes in cell shape', 'Only changes in enzyme activity'], correctIndex: 1, explanation: 'Cellular responses to signaling are diverse: they can include turning genes on/off (transcription factors), activating or inhibiting enzymes, changing cell shape (cytoskeletal rearrangement), triggering cell division, or initiating apoptosis.', partNumber: 4, partTitle: 'Response to Signals' },
  { id: 'ccs-ent-4b', question: 'Two different cell types receive the same hormone but produce different responses. What explains this?', options: ['The hormone changes its structure depending on the cell', 'Different cells have different receptors, relay proteins, or effector proteins, leading to different responses', 'One cell type is alive and the other is dead', 'Hormones only affect one cell type at a time'], correctIndex: 1, explanation: 'The same signal can produce different responses in different cells because each cell type has its own set of receptors, signal transduction components, and target proteins. For example, epinephrine causes heart muscle to contract faster but liver cells to break down glycogen.', partNumber: 4, partTitle: 'Response to Signals' },

  // Part 5
  { id: 'ccs-ent-5a', question: 'In negative feedback, what happens when the response reaches a threshold?', options: ['The signal is amplified further', 'The response inhibits further signaling, maintaining homeostasis', 'The cell undergoes apoptosis', 'A new ligand is synthesized to enhance the signal'], correctIndex: 1, explanation: 'Negative feedback occurs when the output of a process inhibits the process itself. For example, in thermoregulation, when body temperature returns to normal, the cooling or heating response is turned off, maintaining homeostasis.', partNumber: 5, partTitle: 'Feedback Loops' },
  { id: 'ccs-ent-5b', question: 'Which is an example of positive feedback?', options: ['Body temperature returns to 37°C after a fever', 'Blood glucose decreases after insulin release', 'During childbirth, oxytocin stimulates contractions, which increase oxytocin release', 'Sweating cools the body, reducing the stimulus for more sweating'], correctIndex: 2, explanation: 'Positive feedback amplifies the response: oxytocin causes uterine contractions → contractions stimulate more oxytocin → stronger contractions, continuing until delivery. Other examples include blood clotting and fruit ripening.', partNumber: 5, partTitle: 'Feedback Loops' },

  // Part 6
  { id: 'ccs-ent-6a', question: 'A mutation causes a kinase in a signaling pathway to be constitutively (always) active. What is a likely consequence?', options: ['The pathway is permanently shut off', 'The cell receives constant growth signals, potentially leading to uncontrolled division (cancer)', 'The ligand can no longer bind its receptor', 'The cell becomes resistant to all hormones'], correctIndex: 1, explanation: 'A constitutively active kinase means the pathway is always on regardless of ligand binding. If this pathway promotes cell growth, the cell divides continuously — this is a common mechanism in cancer (e.g., Ras oncogene).', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ccs-ent-6b', question: 'Phosphodiesterase is an enzyme that breaks down cAMP. If a drug blocks phosphodiesterase, what is the predicted effect?', options: ['cAMP levels decrease rapidly', 'cAMP levels remain elevated, prolonging the signaling response', 'The receptor is destroyed', 'No second messengers are produced'], correctIndex: 1, explanation: 'Phosphodiesterase normally degrades cAMP, terminating the signal. Blocking this enzyme means cAMP accumulates and persists, keeping the signaling pathway active longer than normal (e.g., caffeine partially works this way).', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7
  { id: 'ccs-ent-7a', question: 'Match the signaling type: autocrine, paracrine, and endocrine.', options: ['Autocrine = self; paracrine = nearby cells; endocrine = distant cells via bloodstream', 'Autocrine = distant; paracrine = self; endocrine = nearby', 'All three types involve signaling to distant cells only', 'Autocrine = between species; paracrine = within organelles; endocrine = between organs'], correctIndex: 0, explanation: 'Autocrine signaling: a cell signals itself. Paracrine signaling: signals act on nearby cells (e.g., neurotransmitters). Endocrine signaling: hormones travel through the bloodstream to distant target cells.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'ccs-ent-7b', question: 'AP Biology frequently asks students to trace a signal through a pathway. Which sequence is correct?', options: ['Response → transduction → reception', 'Transduction → reception → response', 'Reception → transduction → response', 'Response → reception → transduction'], correctIndex: 2, explanation: 'The correct order is always: (1) Reception — ligand binds receptor, (2) Transduction — signal is relayed/amplified through intracellular molecules, (3) Response — the cell changes behavior (gene expression, enzyme activation, etc.).', partNumber: 7, partTitle: 'AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Cell Signaling Overview' },
    { partNumber: 2, partTitle: 'Signal Transduction' },
    { partNumber: 3, partTitle: 'Second Messengers' },
    { partNumber: 4, partTitle: 'Response to Signals' },
    { partNumber: 5, partTitle: 'Feedback Loops' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
