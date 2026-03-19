/**
 * Entrance Quiz — Feedback Mechanisms (AP Biology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'fm-ent-1a', question: 'What characterizes a positive feedback mechanism?', options: ['It reduces the output to restore a setpoint', 'It amplifies the response, driving the system further from the starting state', 'It maintains a constant internal temperature', 'It inhibits hormone production'], correctIndex: 1, explanation: 'Positive feedback amplifies the response, pushing the system further from its initial state. A classic example is oxytocin release during labor, which intensifies contractions.', partNumber: 1, partTitle: 'Positive Feedback' },
  { id: 'fm-ent-1b', question: 'Blood clotting is an example of which type of feedback?', options: ['Negative feedback', 'Positive feedback', 'No feedback involved', 'Antagonistic feedback'], correctIndex: 1, explanation: 'Blood clotting is positive feedback — activated platelets release chemicals that recruit and activate more platelets, amplifying the clotting response until the wound is sealed.', partNumber: 1, partTitle: 'Positive Feedback' },
  // Part 2
  { id: 'fm-ent-2a', question: 'How does negative feedback maintain homeostasis?', options: ['By amplifying the stimulus until the process completes', 'By reducing the output to maintain the setpoint', 'By permanently shutting down the signaling pathway', 'By reversing all metabolic reactions'], correctIndex: 1, explanation: 'Negative feedback reduces the output when a variable deviates from its setpoint, bringing the system back to equilibrium.', partNumber: 2, partTitle: 'Negative Feedback' },
  { id: 'fm-ent-2b', question: 'A thermostat turns off the heater when the room reaches the set temperature. This is analogous to which biological concept?', options: ['Positive feedback', 'Competitive inhibition', 'Negative feedback', 'Signal amplification'], correctIndex: 2, explanation: 'A thermostat is a classic analogy for negative feedback: the heating system turns off once the temperature reaches the setpoint, preventing further deviation.', partNumber: 2, partTitle: 'Negative Feedback' },
  // Part 3
  { id: 'fm-ent-3a', question: 'What is homeostasis?', options: ['The tendency of organisms to grow continuously', 'The maintenance of stable internal conditions despite external changes', 'The ability of cells to divide without regulation', 'The process of adapting to a new environment permanently'], correctIndex: 1, explanation: 'Homeostasis is the maintenance of a relatively stable internal environment (e.g., temperature, pH, glucose levels) even as external conditions change.', partNumber: 3, partTitle: 'Homeostasis' },
  { id: 'fm-ent-3b', question: 'In blood glucose regulation, insulin and glucagon play opposite roles. Which statement is correct?', options: ['Insulin raises blood glucose; glucagon lowers it', 'Insulin lowers blood glucose; glucagon raises it', 'Both insulin and glucagon raise blood glucose', 'Both insulin and glucagon lower blood glucose'], correctIndex: 1, explanation: 'Insulin lowers blood glucose by promoting glucose uptake into cells, while glucagon raises blood glucose by stimulating glycogen breakdown in the liver.', partNumber: 3, partTitle: 'Homeostasis' },
  // Part 4
  { id: 'fm-ent-4a', question: 'What are hormones?', options: ['Structural proteins found in cell membranes', 'Chemical messengers transported via the bloodstream to target cells', 'Enzymes that catalyze metabolic reactions in cells', 'Lipids that form the cell membrane bilayer'], correctIndex: 1, explanation: 'Hormones are chemical messengers produced by endocrine glands and transported through the bloodstream to act on distant target cells.', partNumber: 4, partTitle: 'Hormonal Regulation' },
  { id: 'fm-ent-4b', question: 'The hypothalamus-pituitary axis is best described as:', options: ['A positive feedback loop that always amplifies signals', 'A control system that regulates many endocrine functions via feedback', 'An independent system with no feedback regulation', 'A structural connection between the brain and spinal cord'], correctIndex: 1, explanation: 'The hypothalamus-pituitary axis is a major control center that regulates many endocrine functions. The hypothalamus signals the pituitary, which releases hormones, and feedback from target glands modulates the system.', partNumber: 4, partTitle: 'Hormonal Regulation' },
  // Part 5
  { id: 'fm-ent-5a', question: 'What is the key difference between endotherms and ectotherms?', options: ['Endotherms are always larger than ectotherms', 'Endotherms generate heat internally; ectotherms rely on environmental heat sources', 'Ectotherms have higher metabolic rates than endotherms', 'Endotherms cannot regulate body temperature'], correctIndex: 1, explanation: 'Endotherms (e.g., mammals, birds) generate body heat through metabolism, while ectotherms (e.g., reptiles, amphibians) rely on external environmental sources to regulate body temperature.', partNumber: 5, partTitle: 'Thermoregulation' },
  { id: 'fm-ent-5b', question: 'Which of the following are thermoregulatory mechanisms?', options: ['Shivering, sweating, and vasodilation/vasoconstriction', 'Mitosis, meiosis, and cytokinesis', 'Transcription, translation, and replication', 'Osmosis, diffusion, and active transport'], correctIndex: 0, explanation: 'Shivering generates heat, sweating cools via evaporation, and vasodilation/vasoconstriction adjust blood flow near the skin surface to regulate heat exchange.', partNumber: 5, partTitle: 'Thermoregulation' },
  // Part 6
  { id: 'fm-ent-6a', question: 'If thyroid hormone levels in the blood are abnormally high, what would you predict happens to TSH levels?', options: ['TSH increases to stimulate more thyroid hormone', 'TSH decreases due to negative feedback', 'TSH is unaffected by thyroid hormone levels', 'TSH is converted into thyroid hormone'], correctIndex: 1, explanation: 'High thyroid hormone levels inhibit TSH release from the anterior pituitary via negative feedback, reducing further stimulation of the thyroid gland.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'fm-ent-6b', question: 'Why doesn\'t positive feedback continue indefinitely?', options: ['Because negative feedback always overrides it', 'Because the stimulus that initiated the loop is eventually removed', 'Because cells become resistant to all signals over time', 'Because ATP runs out during the process'], correctIndex: 1, explanation: 'Positive feedback loops are self-limiting because the stimulus that started the process is eventually removed (e.g., birth of the baby ends oxytocin release during labor).', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  // Part 7
  { id: 'fm-ent-7a', question: 'Which statement best compares positive and negative feedback?', options: ['Positive feedback is more common than negative feedback in biological systems', 'Negative feedback is more common; positive feedback drives rapid completion of a process', 'Both types of feedback are equally common', 'Negative feedback always involves hormones; positive feedback does not'], correctIndex: 1, explanation: 'Negative feedback is far more common and maintains homeostasis. Positive feedback is rarer and used when a rapid, decisive outcome is needed (e.g., blood clotting, childbirth).', partNumber: 7, partTitle: 'AP Review' },
  { id: 'fm-ent-7b', question: 'On the AP Biology exam, feedback mechanisms are commonly tested using:', options: ['Microscope identification questions', 'Hormone pathway diagrams where students trace cause and effect', 'DNA sequencing data', 'Fossil record analysis'], correctIndex: 1, explanation: 'The AP Bio exam frequently presents hormone pathway diagrams and asks students to predict outcomes of increases or decreases in specific hormones, testing understanding of feedback loops.', partNumber: 7, partTitle: 'AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Positive Feedback' },
    { partNumber: 2, partTitle: 'Negative Feedback' },
    { partNumber: 3, partTitle: 'Homeostasis' },
    { partNumber: 4, partTitle: 'Hormonal Regulation' },
    { partNumber: 5, partTitle: 'Thermoregulation' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
