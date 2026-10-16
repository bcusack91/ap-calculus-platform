/**
 * Entrance Quiz — Imperialism & Its Effects (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'whim-ent-1a',
    question: 'In the late 1800s, British investors owned most of Argentina\'s railways and much of its export trade, yet Britain never governed Argentina. This arrangement is best described as',
    options: ['a colony ruled directly by officials sent from London', 'a protectorate whose local rulers answered to a resident', 'economic imperialism without formal political control', 'a sphere of influence carved out by treaty among rivals'],
    correctIndex: 2,
    explanation: 'Foreign capital shaped Argentina\'s economy while Argentines kept their own government, the pattern called economic imperialism. A colony or protectorate would involve British political authority, and no treaty divided Argentina among powers as China was divided.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'whim-ent-1b',
    question: 'By 1914, Ethiopia and Liberia were the only independent states in Africa. Ethiopia\'s independence is best explained by',
    options: ['its army\'s defeat of an Italian invasion at Adwa in 1896', 'a guarantee of its borders signed at the Berlin Conference', 'British protection granted when it became a protectorate', 'its lack of any land or resources that Europeans wanted'],
    correctIndex: 0,
    explanation: 'Menelik II\'s well-armed forces crushed the Italians at Adwa, forcing Italy to recognize Ethiopian independence. The Berlin Conference guaranteed nothing to Africans, Ethiopia was never a British protectorate, and Italy plainly wanted its land.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Key Processes
  // source: Rudyard Kipling, "The White Man's Burden," 1899; verbatim
  {
    id: 'whim-ent-2a',
    question: '"Take up the White Man\'s burden—\nSend forth the best ye breed—\nGo bind your sons to exile\nTo serve your captives\' need"\n— Rudyard Kipling, 1899\n\nA historian who argues that economic interests, not ideals, drove imperial expansion would most likely treat this poem as',
    options: ['proof that colonial rule was a costly act of selfless charity', 'a justification that cast conquest as duty and hid material aims', 'a protest by colonized peoples against foreign occupation', 'evidence that Britain and the United States opposed expansion'],
    correctIndex: 1,
    explanation: 'For such a historian, the language of sacrifice served to make expansion look noble while profit and power drove it. Kipling wrote as a supporter of empire, not a colonized critic, and the poem urged expansion rather than opposing it.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  {
    id: 'whim-ent-2b',
    question: 'Germany, unified in 1871, acquired colonies in Africa and the Pacific in the 1880s, although most of them earned little profit. This pattern best supports which claim?',
    options: ['Investors in Berlin demanded colonies that would pay them high returns', 'Germany needed colonies to supply the cotton that its mills used', 'African rulers invited Germany to protect them from the British', 'Rivalry and prestige mattered as much as economic gain'],
    correctIndex: 3,
    explanation: 'Unprofitable colonies show that great-power status and competition with Britain and France mattered alongside economics. The low returns undercut the investor and cotton explanations, and African rulers did not invite German rule.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  // Part 3: Patterns & Examples
  {
    id: 'whim-ent-3a',
    question: 'In northern Nigeria, British officials governed through the existing emirs, who collected taxes and kept order under British supervision. Which best explains this approach?',
    options: ['It cost far less than running a colony with European staff', 'British law required that African rulers keep their full authority', 'The emirs had defeated the British and dictated terms of peace', 'It was meant to prepare Nigeria for independence within a decade'],
    correctIndex: 0,
    explanation: 'Indirect rule let a small number of British officers control a huge territory by using existing rulers, holding down costs. The emirs\' authority was limited, they had been conquered, and independence was not the goal.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  {
    id: 'whim-ent-3b',
    question: 'Which pairing of a technology with its role in the conquest of Africa is most accurate?',
    options: ['The telegraph carried troops and supplies up the Niger', 'Steamboats sent orders between distant offices in minutes', 'The Maxim gun protected soldiers from tropical fevers', 'Quinine let Europeans survive malaria in the interior'],
    correctIndex: 3,
    explanation: 'Quinine sharply reduced malaria deaths, opening the interior to European soldiers and officials. Steamboats moved people up rivers, the telegraph sped communication, and the Maxim gun gave firepower, not disease protection.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  // Part 4: Connections & Interactions
  {
    id: 'whim-ent-4a',
    question: 'Many founders of the Indian National Congress in 1885 were lawyers trained in English law. This fact best illustrates',
    options: ['the success of British efforts to keep Indians out of public life', 'colonial schooling giving elites tools to challenge colonial rule', 'the Congress\'s plan to drive out the British by armed rebellion', 'the rejection of all Western ideas by India\'s educated classes'],
    correctIndex: 1,
    explanation: 'English education gave Indian professionals the language of rights and representative government, which they used to press for self-rule. The early Congress petitioned rather than rebelled, and its members used Western ideas instead of rejecting them.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'whim-ent-4b',
    question: 'Which was a direct result of the revolt of 1857 in India?',
    options: ['Parliament ended Company rule and placed India under the Crown', 'India gained self-governing dominion status within the empire', 'Britain withdrew its troops from the princely states of India', 'The Indian National Congress was banned throughout India'],
    correctIndex: 0,
    explanation: 'The Government of India Act of 1858 abolished the East India Company\'s authority and created direct Crown rule. Dominion status never came before independence, British forces were expanded, and the Congress was founded only in 1885.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  // Part 5: Change Over Time
  {
    id: 'whim-ent-5a',
    question: 'In many African colonies, colonial courts tried criminal cases while customary courts settled disputes over marriage and land. This arrangement best illustrates',
    options: ['the complete replacement of African law by European codes', 'African courts gaining authority over European settlers', 'the refusal of colonial states to govern African subjects at all', 'new colonial institutions layered over surviving local ones'],
    correctIndex: 3,
    explanation: 'Legal dualism kept customary law alive in family and land matters while colonial law governed crime and the state. African law was not wholly replaced, colonial states did govern, and customary courts had no power over settlers.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  {
    id: 'whim-ent-5b',
    question: 'A nineteenth-century British travel account describes Asian societies as unchanging, irrational, and in need of European guidance. A historian using it should',
    options: ['accept it as an accurate picture of Asian life in that century', 'reject it, since travelers never visited the places they described', 'read it as evidence of the writer\'s views, not of Asia', 'use it only to date the author\'s journey from one place to another'],
    correctIndex: 2,
    explanation: 'Such accounts reveal the assumptions that helped justify colonial rule, so they are better evidence of the writer\'s worldview than of the societies described. They are neither reliable portraits nor worthless, and they offer far more than travel dates.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  // Part 6: Problem-Solving Workshop
  {
    id: 'whim-ent-6a',
    question: 'The Boxer Rebellion in China (1899–1901) and the Maji Maji Rebellion in German East Africa (1905–1907) are best compared as',
    options: ['peaceful petition movements that won reforms', 'uprisings crushed by modern firepower', 'revolts that ended foreign control of each region', 'movements led by Western-educated lawyers'],
    correctIndex: 1,
    explanation: 'Both drew mass support against foreign intrusion and both were suppressed by better-armed forces, an eight-nation army in China and German troops in East Africa. Neither was peaceful, neither ended foreign control, and neither was led by Western-trained professionals.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'whim-ent-6b',
    question: 'The Mahdist state that ruled Sudan from 1885 to 1898 drew its strength mainly from',
    options: ['an alliance with Germany against British power in Egypt', 'Western-educated lawyers organized in a nationalist party', 'a religious movement that united followers against foreign rule', 'a Christian revival led by missionaries along the upper Nile'],
    correctIndex: 2,
    explanation: 'Muhammad Ahmad, proclaimed the Mahdi, rallied Sudanese Muslims against Egyptian and British control until the defeat at Omdurman in 1898. There was no German alliance, no lawyers\' party, and no Christian revival behind the state.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: AP Review
  {
    id: 'whim-ent-7a',
    question: 'Which evidence best supports the claim that industrialization drove the New Imperialism?',
    options: ['Kipling urged Americans to take up a civilizing duty', 'Germany sought colonies as symbols of its new status', 'Zulu forces defeated a British army at Isandlwana in 1879', 'European factories demanded rubber from the Congo and Malaya'],
    correctIndex: 3,
    explanation: 'Industrial demand for raw materials such as rubber tied expansion directly to factory production. Kipling\'s poem shows ideology, German prestige shows nationalism, and Isandlwana is evidence about resistance.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'whim-ent-7b',
    question: 'Which statement best describes a change in European imperialism in Africa between 1850 and 1914?',
    options: ['European control shrank as African states expanded their borders', 'European powers lost interest in African raw materials after 1880', 'Coastal posts gave way to colonial rule over almost all of Africa', 'Britain withdrew from Egypt and Sudan to concentrate on India'],
    correctIndex: 2,
    explanation: 'Europeans held roughly a tenth of Africa around 1870 and nearly all of it by 1914. Control grew rather than shrank, demand for raw materials rose, and Britain occupied Egypt in 1882 and reconquered Sudan in 1898.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Change Over Time' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
