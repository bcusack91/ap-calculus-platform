/**
 * Entrance Quiz — East Asian Empires & Isolation (AP World History)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'whea-ent-1a', question: 'Which development best reflects Song Dynasty economic innovation?', options: ['Expansion of civil service exams', 'Use of paper money and growth of commercial cities', 'Adoption of Christianity as state religion', 'Complete closure of all ports'], correctIndex: 1, explanation: 'Song China is known for major commercial growth, including paper money, urbanization, and increasing specialization.', partNumber: 1, partTitle: 'Core Concepts' },
  { id: 'whea-ent-1b', question: 'Why is Zheng He frequently used in AP World comparison prompts?', options: ['His voyages prove Europe led maritime exploration first', 'His voyages show East Asian maritime capability before a policy shift away from sustained expansion', 'He founded the Qing Dynasty', 'He ended all Indian Ocean trade'], correctIndex: 1, explanation: 'Zheng He illustrates that state policy choices, not only technology, shaped global maritime outcomes.', partNumber: 1, partTitle: 'Core Concepts' },
  { id: 'whea-ent-2a', question: 'Which policy best exemplifies Confucian state-building?', options: ['Hereditary rule with no administrative exams', 'Exam-based bureaucratic recruitment grounded in Confucian classics', 'Direct democracy at village level', 'Rule by merchant councils'], correctIndex: 1, explanation: 'The civil service exam system tied governance legitimacy to Confucian learning and bureaucratic service.', partNumber: 2, partTitle: 'Key Processes' },
  { id: 'whea-ent-2b', question: 'Tokugawa sakoku is best understood as:', options: ['Total and permanent end of all foreign contact', 'A strategic regulation of trade and religion to preserve social and political order', 'Immediate adoption of European imperialism', 'A policy focused only on tax collection'], correctIndex: 1, explanation: 'Tokugawa leaders restricted destabilizing foreign influences while maintaining controlled channels of contact.', partNumber: 2, partTitle: 'Key Processes' },
  { id: 'whea-ent-3a', question: 'Which pair is most useful for a comparison of political organization in East Asia?', options: ['Ming China and Tokugawa Japan', 'Ming China and the Aztec Empire', 'Tokugawa Japan and Mughal India', 'Qing China and Ottoman Egypt'], correctIndex: 0, explanation: 'This pair enables direct regional comparison of centralized bureaucracy versus decentralized military governance.', partNumber: 3, partTitle: 'Patterns & Examples' },
  { id: 'whea-ent-3b', question: 'Which statement best captures selective adaptation in East Asia?', options: ['Korea adopted Chinese institutions but also developed hangul for vernacular literacy', 'Japan copied Chinese governance exactly with no local change', 'Vietnam rejected all Chinese cultural influence', 'Ming China adopted European parliamentary systems'], correctIndex: 0, explanation: 'Selective adaptation means borrowing while preserving or creating distinct local institutions.', partNumber: 3, partTitle: 'Patterns & Examples' },
  { id: 'whea-ent-4a', question: 'Which is the strongest cross-unit connection?', options: ['Ming maritime withdrawal helps explain later European influence in oceanic trade networks', 'East Asian history had no impact on global patterns', 'Tokugawa policy only matters for Japanese local history', 'Qing governance is unrelated to land-based empire themes'], correctIndex: 0, explanation: 'The best synthesis links East Asian policy decisions to broader global patterns over time.', partNumber: 4, partTitle: 'Connections & Interactions' },
  { id: 'whea-ent-4b', question: 'A reinforcing cycle in Tokugawa policy is:', options: ['More openness caused more openness', 'Restrictions preserved order, and preserved order justified continuing restrictions', 'Merchant expansion ended state authority immediately', 'Foreign missionaries controlled the shogunate'], correctIndex: 1, explanation: 'This shows feedback logic: outcomes helped sustain the original policy regime.', partNumber: 4, partTitle: 'Connections & Interactions' },
  { id: 'whea-ent-5a', question: 'Which is a strong continuity claim for Chinese governance across dynasties?', options: ['Long-term use of scholar-official administration rooted in Confucian norms', 'Permanent abolition of state bureaucracy', 'Complete social equality across classes', 'No role for ideology in legitimacy'], correctIndex: 0, explanation: 'Dynasties changed, but exam-based and Confucian governance traditions persisted in important ways.', partNumber: 5, partTitle: 'Change Over Time' },
  { id: 'whea-ent-5b', question: 'Which is best treated as a turning point in East Asian maritime history?', options: ['Routine tax reforms', 'Ming termination of large state-sponsored voyages after Zheng He', 'Annual rice harvest variations', 'Court ceremonial reforms'], correctIndex: 1, explanation: 'This policy shift had broad long-term implications for regional and global maritime trajectories.', partNumber: 5, partTitle: 'Change Over Time' },
  { id: 'whea-ent-6a', question: 'In AP source analysis, what comes first?', options: ['Immediate interpretation without evidence', 'Identify what the source directly shows before inferring causes', 'Write the conclusion first', 'Ignore source limitations'], correctIndex: 1, explanation: 'Strong analysis starts with accurate reading of source claims, scope, and limits.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'whea-ent-6b', question: 'Which response best uses claim-evidence-reasoning?', options: ['East Asia was important. End of argument.', 'Tokugawa regulation of foreign contact supported political stability by limiting potentially destabilizing religious and external influences.', 'Many things happened in East Asia over time.', 'Historians disagree about everything.'], correctIndex: 1, explanation: 'The answer provides a clear claim, specific evidence, and explicit causal reasoning.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'whea-ent-7a', question: 'For a prompt asking to "evaluate the extent" of East Asian isolation, best strategy is to:', options: ['Take an absolute position with no qualification', 'Present a qualified argument with evidence of both regulation and continued interaction', 'Only define isolation', 'Ignore chronology'], correctIndex: 1, explanation: 'Extent/evaluation prompts reward nuance, qualification, and balanced evidence.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'whea-ent-7b', question: 'Which move most improves AP LEQ quality?', options: ['List many terms without argument', 'Use a defensible thesis, specific East Asia evidence, and reasoning tied to the prompt', 'Write only broad thematic statements', 'Avoid comparisons to stay safe'], correctIndex: 1, explanation: 'AP rubrics reward argumentation, specificity, and clear historical reasoning.', partNumber: 7, partTitle: 'AP Review' }
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
