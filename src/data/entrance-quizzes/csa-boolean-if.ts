/**
 * Entrance Quiz — Boolean Expressions & If Statements (AP Computer Science A)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'csab-ent-1a', question: 'Which of the following best describes the main focus of Boolean Expressions & If Statements?', options: ['An unrelated topic', 'The core principles and patterns within Boolean Expressions & If Statements', 'A mathematical formula', 'A literary technique'], correctIndex: 1, explanation: 'Boolean Expressions & If Statements focuses on understanding key principles and patterns within AP Computer Science A.', partNumber: 1, partTitle: 'Core Concepts' },
  { id: 'csab-ent-1b', question: 'Why is Boolean Expressions & If Statements important in AP Computer Science A?', options: ['It is not important', 'It connects to multiple units and is frequently tested on the AP exam', 'It is only relevant to one question', 'It has been removed from the curriculum'], correctIndex: 1, explanation: 'Boolean Expressions & If Statements is a key topic in AP Computer Science A that connects to multiple course themes.', partNumber: 1, partTitle: 'Core Concepts' },
  { id: 'csab-ent-2a', question: 'Which best describes a key process in Boolean Expressions & If Statements?', options: ['A random event', 'A systematic mechanism that produces predictable patterns', 'An unexplainable phenomenon', 'A one-time occurrence'], correctIndex: 1, explanation: 'Key processes are systematic mechanisms that produce identifiable, often predictable patterns.', partNumber: 2, partTitle: 'Key Processes' },
  { id: 'csab-ent-2b', question: 'Understanding cause and effect in Boolean Expressions & If Statements helps students:', options: ['Memorize dates', 'Explain why patterns exist rather than just describing them', 'Avoid analysis', 'Skip exam questions'], correctIndex: 1, explanation: 'Cause-and-effect reasoning helps explain WHY patterns exist — a higher-order skill tested on the AP exam.', partNumber: 2, partTitle: 'Key Processes' },
  { id: 'csab-ent-3a', question: 'Why do geographers/analysts use case studies?', options: ['They are easier than analysis', 'They provide concrete examples that illustrate abstract concepts', 'They replace all other methods', 'They are required by law'], correctIndex: 1, explanation: 'Case studies ground abstract concepts in specific, real-world examples that are easier to understand and remember.', partNumber: 3, partTitle: 'Patterns & Examples' },
  { id: 'csab-ent-3b', question: 'Comparing examples of Boolean Expressions & If Statements across regions helps:', options: ['Nothing', 'Identify universal patterns and unique local variations', 'Confuse students', 'Waste time'], correctIndex: 1, explanation: 'Comparison reveals both common patterns (generalizable) and unique local factors (context-dependent).', partNumber: 3, partTitle: 'Patterns & Examples' },
  { id: 'csab-ent-4a', question: 'Boolean Expressions & If Statements connects to other course topics through:', options: ['No connections exist', 'Shared processes, causes, and outcomes', 'Random coincidence', 'Administrative categories only'], correctIndex: 1, explanation: 'Topics in AP Computer Science A are interconnected through shared processes, causes, and outcomes.', partNumber: 4, partTitle: 'Connections & Interactions' },
  { id: 'csab-ent-4b', question: 'A feedback loop in Boolean Expressions & If Statements means:', options: ['The process stops', 'Outcomes reinforce or modify the original process', 'Nothing changes', 'The exam skips this topic'], correctIndex: 1, explanation: 'Feedback loops occur when outcomes influence the conditions that created them — either reinforcing or moderating the original process.', partNumber: 4, partTitle: 'Connections & Interactions' },
  { id: 'csab-ent-5a', question: 'Studying change over time in Boolean Expressions & If Statements helps:', options: ['Only with history classes', 'Explain current patterns and predict future developments', 'Nothing', 'Memorize dates'], correctIndex: 1, explanation: 'Understanding how things have changed reveals the forces shaping current conditions and likely future trends.', partNumber: 5, partTitle: 'Change Over Time' },
  { id: 'csab-ent-5b', question: 'Continuity in Boolean Expressions & If Statements means:', options: ['Everything changes', 'Some aspects have remained stable despite other changes', 'Nothing ever happened', 'The topic is boring'], correctIndex: 1, explanation: 'Continuity refers to elements that persist even as other aspects change — an important analytical concept.', partNumber: 5, partTitle: 'Change Over Time' },
  { id: 'csab-ent-6a', question: 'When interpreting data about Boolean Expressions & If Statements, the first step is:', options: ['Jump to conclusions', 'Identify what the data shows and note any patterns or trends', 'Ignore the data', 'Only look at the title'], correctIndex: 0, explanation: 'Data interpretation should begin with identifying what is shown and noting visible patterns before drawing conclusions.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'csab-ent-6b', question: 'An evidence-based argument about Boolean Expressions & If Statements requires:', options: ['Just opinions', 'A clear claim supported by specific evidence and reasoning', 'No evidence', 'Only emotional appeals'], correctIndex: 1, explanation: 'Evidence-based arguments need a claim (thesis), supporting evidence (data, examples), and reasoning (explanation).', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'csab-ent-7a', question: 'The most important exam strategy for Boolean Expressions & If Statements is:', options: ['Guess randomly', 'Know key terms, use specific examples, and connect to course themes', 'Skip these questions', 'Only memorize definitions'], correctIndex: 1, explanation: 'Effective exam strategy combines vocabulary knowledge, specific examples, and connections to broader themes.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'csab-ent-7b', question: 'AP multiple-choice questions about Boolean Expressions & If Statements often test:', options: ['Random trivia', 'Application of concepts to new scenarios', 'Spelling', 'Personal opinions'], correctIndex: 1, explanation: 'AP multiple-choice questions typically present a new scenario and ask students to apply concepts rather than just recall facts.', partNumber: 7, partTitle: 'AP Review' }
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
