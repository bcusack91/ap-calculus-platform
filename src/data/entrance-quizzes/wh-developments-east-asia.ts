/**
 * Entrance Quiz - Developments in East Asia (c. 1200-1450) (AP World History)
 * 14 questions - 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'whdea-ent-1a',
    question: 'Which feature most clearly characterized Song China?',
    options: ['Decentralized feudal military rule', 'Commercial expansion and exam-based bureaucracy', 'Permanent Mongol administration', 'Industrial factory production'],
    correctIndex: 1,
    explanation: 'Song China is known for commercialization, urban growth, and strong bureaucratic governance through civil service exams.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'whdea-ent-1b',
    question: 'Which statement best describes East Asia in this period?',
    options: ['Politically uniform due to Chinese rule', 'Culturally connected but institutionally diverse', 'Completely isolated from exchange networks', 'Dominated by constitutional monarchies'],
    correctIndex: 1,
    explanation: 'Chinese influence was significant, but states retained different political systems.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'whdea-ent-2a',
    question: 'What was a major function of the Chinese civil service exams?',
    options: ['Selecting officials through Confucian learning', 'Electing emperors by popular vote', 'Training only military commanders', 'Assigning hereditary lordship'],
    correctIndex: 0,
    explanation: 'The exam system recruited scholar-officials and supported centralized bureaucracy.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'whdea-ent-2b',
    question: 'The tributary system is best understood as:',
    options: ['Direct political annexation of all neighbors', 'A ritualized diplomatic hierarchy and exchange framework', 'A ban on regional diplomacy', 'A European-style parliamentary alliance'],
    correctIndex: 1,
    explanation: 'Tributary relations signaled status and legitimacy while often coexisting with local autonomy.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'whdea-ent-3a',
    question: 'Which example best illustrates selective adaptation in East Asia?',
    options: ['Japan copied Chinese bureaucracy exactly', 'Japan adopted some Chinese cultural forms but retained feudal military rule', 'Korea rejected all Chinese influence', 'China adopted Japanese shogunate institutions'],
    correctIndex: 1,
    explanation: 'Selective adaptation means borrowing some models while preserving local institutions.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'whdea-ent-3b',
    question: 'Which is a strong indicator of Song commercialization?',
    options: ['Decline of all urban life', 'Expansion of paper money and market towns', 'Elimination of merchant activity', 'Replacement of trade with tribute only'],
    correctIndex: 1,
    explanation: 'Paper currency and urban-market growth are high-yield Song economic evidence.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'whdea-ent-4a',
    question: 'How did Mongol rule under the Yuan affect East Asia?',
    options: ['It isolated China from transregional connections', 'It contributed to wider movement and exchange across imperial networks', 'It ended all overland trade permanently', 'It removed all social hierarchy'],
    correctIndex: 1,
    explanation: 'Mongol integration facilitated cross-regional movement of goods, people, and ideas.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'whdea-ent-4b',
    question: 'Which connection between economy and politics is most accurate?',
    options: ['Commercial activity could strengthen state fiscal capacity', 'Trade always weakened governments', 'Urban growth removed need for administration', 'Markets and governance were unrelated'],
    correctIndex: 0,
    explanation: 'Expanded commerce often increased taxable activity and state resources.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'whdea-ent-5a',
    question: 'Which is best categorized as a continuity in East Asia c. 1200-1450?',
    options: ['Persistent influence of Confucian political ethics', 'Permanent Mongol rule in China', 'Complete disappearance of trade routes', 'Universal constitutional governance'],
    correctIndex: 0,
    explanation: 'Confucian political culture remained influential across dynastic transitions.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'whdea-ent-5b',
    question: 'Which is best categorized as a change over time?',
    options: ['Long-term use of scholar-official traditions', 'Shift from Song to Yuan political rule in China', 'Continued regional exchange', 'Ongoing social hierarchy'],
    correctIndex: 1,
    explanation: 'The Song-to-Yuan transition is a major political change driven by conquest.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'whdea-ent-6a',
    question: 'For an SAQ, which method is strongest?',
    options: ['List broad claims without examples', 'Use one specific example and explain how it supports your claim', 'Use only dates', 'Avoid analytical verbs'],
    correctIndex: 1,
    explanation: 'Specific evidence plus reasoning is the core of high-scoring AP short responses.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'whdea-ent-6b',
    question: 'Which sentence best demonstrates AP-level historical reasoning?',
    options: ['East Asia changed a lot', 'Japanese feudal institutions show political divergence despite shared Chinese cultural influence', 'China was important', 'History is complicated'],
    correctIndex: 1,
    explanation: 'The sentence makes a comparative claim and ties evidence to significance.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'whdea-ent-7a',
    question: 'Which thesis is strongest for a comparison prompt?',
    options: ['China and Japan were politically identical', 'Shared cultural influence coexisted with different state structures', 'No influence moved across East Asia', 'All states were decentralized feudal monarchies'],
    correctIndex: 1,
    explanation: 'The best thesis captures both similarity and difference.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'whdea-ent-7b',
    question: 'Which term is most essential for this topic?',
    options: ['Mercantilism', 'Tributary system', 'Atlantic plantation complex', 'Industrial proletariat'],
    correctIndex: 1,
    explanation: 'The tributary framework is central to diplomatic and symbolic hierarchy in East Asian regional relations.',
    partNumber: 7,
    partTitle: 'AP Review'
  }
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
