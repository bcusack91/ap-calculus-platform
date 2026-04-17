/**
 * Entrance Quiz — Silk Roads & Mongol Empires (AP World History)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'whsi-ent-1a', question: 'Which of the following best describes the main focus of Silk Roads & Mongol Empires?', options: ['An unrelated topic', 'The core principles and patterns within Silk Roads & Mongol Empires', 'A mathematical formula', 'A literary technique'], correctIndex: 1, explanation: 'Silk Roads & Mongol Empires focuses on understanding key principles and patterns within AP World History.', partNumber: 1, partTitle: 'Core Concepts' },
  { id: 'whsi-ent-1b', question: 'Why is Silk Roads & Mongol Empires important in AP World History?', options: ['It is not important', 'It connects to multiple units and is frequently tested on the AP exam', 'It is only relevant to one question', 'It has been removed from the curriculum'], correctIndex: 1, explanation: 'Silk Roads & Mongol Empires is a key topic in AP World History that connects to multiple course themes.', partNumber: 1, partTitle: 'Core Concepts' },
  { id: 'whsi-ent-2a', question: 'Which best describes a key process in Silk Roads & Mongol Empires?', options: ['A random event', 'A systematic mechanism that produces predictable patterns', 'An unexplainable phenomenon', 'A one-time occurrence'], correctIndex: 1, explanation: 'Key processes are systematic mechanisms that produce identifiable, often predictable patterns.', partNumber: 2, partTitle: 'Key Processes' },
  { id: 'whsi-ent-2b', question: 'Understanding cause and effect in Silk Roads & Mongol Empires helps students:', options: ['Memorize dates', 'Explain why patterns exist rather than just describing them', 'Avoid analysis', 'Skip exam questions'], correctIndex: 1, explanation: 'Cause-and-effect reasoning helps explain WHY patterns exist — a higher-order skill tested on the AP exam.', partNumber: 2, partTitle: 'Key Processes' },
  { id: 'whsi-ent-3a', question: 'Why do geographers/analysts use case studies?', options: ['They are easier than analysis', 'They provide concrete examples that illustrate abstract concepts', 'They replace all other methods', 'They are required by law'], correctIndex: 1, explanation: 'Case studies ground abstract concepts in specific, real-world examples that are easier to understand and remember.', partNumber: 3, partTitle: 'Patterns & Examples' },
  { id: 'whsi-ent-3b', question: 'Comparing examples of Silk Roads & Mongol Empires across regions helps:', options: ['Nothing', 'Identify universal patterns and unique local variations', 'Confuse students', 'Waste time'], correctIndex: 1, explanation: 'Comparison reveals both common patterns (generalizable) and unique local factors (context-dependent).', partNumber: 3, partTitle: 'Patterns & Examples' },
  { id: 'whsi-ent-4a', question: 'Silk Roads & Mongol Empires connects to other course topics through:', options: ['No connections exist', 'Shared processes, causes, and outcomes', 'Random coincidence', 'Administrative categories only'], correctIndex: 1, explanation: 'Topics in AP World History are interconnected through shared processes, causes, and outcomes.', partNumber: 4, partTitle: 'Connections & Interactions' },
  { id: 'whsi-ent-4b', question: 'A feedback loop in Silk Roads & Mongol Empires means:', options: ['The process stops', 'Outcomes reinforce or modify the original process', 'Nothing changes', 'The exam skips this topic'], correctIndex: 1, explanation: 'Feedback loops occur when outcomes influence the conditions that created them — either reinforcing or moderating the original process.', partNumber: 4, partTitle: 'Connections & Interactions' },
  { id: 'whsi-ent-5a', question: 'Studying change over time in Silk Roads & Mongol Empires helps:', options: ['Only with history classes', 'Explain current patterns and predict future developments', 'Nothing', 'Memorize dates'], correctIndex: 1, explanation: 'Understanding how things have changed reveals the forces shaping current conditions and likely future trends.', partNumber: 5, partTitle: 'Change Over Time' },
  { id: 'whsi-ent-5b', question: 'Continuity in Silk Roads & Mongol Empires means:', options: ['Everything changes', 'Some aspects have remained stable despite other changes', 'Nothing ever happened', 'The topic is boring'], correctIndex: 1, explanation: 'Continuity refers to elements that persist even as other aspects change — an important analytical concept.', partNumber: 5, partTitle: 'Change Over Time' },
  { id: 'whsi-ent-6a', question: 'When interpreting data about Silk Roads & Mongol Empires, the first step is:', options: ['Jump to conclusions', 'Identify what the data shows and note any patterns or trends', 'Ignore the data', 'Only look at the title'], correctIndex: 0, explanation: 'Data interpretation should begin with identifying what is shown and noting visible patterns before drawing conclusions.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'whsi-ent-6b', question: 'An evidence-based argument about Silk Roads & Mongol Empires requires:', options: ['Just opinions', 'A clear claim supported by specific evidence and reasoning', 'No evidence', 'Only emotional appeals'], correctIndex: 1, explanation: 'Evidence-based arguments need a claim (thesis), supporting evidence (data, examples), and reasoning (explanation).', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'whsi-ent-7a', question: 'The most important exam strategy for Silk Roads & Mongol Empires is:', options: ['Guess randomly', 'Know key terms, use specific examples, and connect to course themes', 'Skip these questions', 'Only memorize definitions'], correctIndex: 1, explanation: 'Effective exam strategy combines vocabulary knowledge, specific examples, and connections to broader themes.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'whsi-ent-7b', question: 'AP multiple-choice questions about Silk Roads & Mongol Empires often test:', options: ['Random trivia', 'Application of concepts to new scenarios', 'Spelling', 'Personal opinions'], correctIndex: 1, explanation: 'AP multiple-choice questions typically present a new scenario and ask students to apply concepts rather than just recall facts.', partNumber: 7, partTitle: 'AP Review' }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Change Over Time' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
