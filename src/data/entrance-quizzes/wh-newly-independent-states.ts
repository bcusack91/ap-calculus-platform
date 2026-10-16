/**
 * Entrance Quiz — Newly Independent States After 1945 (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'whnis-ent-1a',
    question: 'Which of the following best illustrates the one-party state model of post-independence government?',
    options: ['India holding competitive national elections from 1951 on', 'Botswana holding regular multiparty elections after 1966', 'Nigeria ruled directly by army officers after the 1966 coups', 'Tanzania under Nyerere, where only one political organization was legal'],
    correctIndex: 3,
    explanation: 'Under Nyerere, the ruling party was the only legal one, justified as the vehicle of national unity and African socialism. India and Botswana kept multiparty democracy, and Nigeria\'s officers represent military rule.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'whnis-ent-1b',
    question: 'After 1947, India\'s leaders worked to bring more than 500 princely states into the new republic. This effort best illustrates which post-independence challenge?',
    options: ['Choosing between the American and Soviet blocs in the Cold War', 'Building dams and steel mills to modernize a colonial economy', 'Turning a patchwork colonial unit into one national community', 'Repaying loans owed to the International Monetary Fund'],
    correctIndex: 2,
    explanation: 'Absorbing hundreds of semi-autonomous states was a task of nation-building, creating one political community out of a colonial patchwork. Alignment, modernization, and debt were separate challenges.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Key Processes
  {
    id: 'whnis-ent-2a',
    question: 'Under the "License Raj," India shielded its own factories with high tariffs and required permits for new production. Which problem did this approach most often produce?',
    options: ['Sheltered firms grew inefficient and slow to innovate', 'Foreign companies took over most Indian industries', 'Exports of manufactured goods rose faster than in Korea', 'Farmers were forced into collective farms run by the state'],
    correctIndex: 0,
    explanation: 'Import substitution protected firms from competition, so many stayed costly and technologically behind until reforms in 1991. Protection kept foreign firms out, Korea\'s exports grew far faster, and India did not collectivize agriculture.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  {
    id: 'whnis-ent-2b',
    question: 'Mexico under Lázaro Cárdenas in the 1930s and Egypt under the Free Officers after 1952 both redistributed large landholdings. Which political result did these reforms share?',
    options: ['They provoked famines that toppled both governments', 'They built rural support for the ruling regime', 'They returned the land to former colonial owners', 'They ended all state involvement in agriculture'],
    correctIndex: 1,
    explanation: 'Ejido grants tied peasants to Mexico\'s ruling party for decades, and Nasser\'s land caps strengthened the new regime in the countryside. Neither reform caused a regime-ending famine, returned land to colonizers, or removed the state from farming.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  // Part 3: Patterns & Examples
  {
    id: 'whnis-ent-3a',
    question: 'The creation of Bangladesh in 1971 is best used as an exception to which pattern among newly independent states?',
    options: ['Founding leaders were usually overthrown in military coups', 'Most new states joined either NATO or the Warsaw Pact', 'Colonial-era borders mostly stayed in place after colonial rule ended', 'Economies shifted from state planning to open markets'],
    correctIndex: 2,
    explanation: 'Bangladesh\'s break from Pakistan was one of the few successful changes to postcolonial borders, along with Eritrea in 1993. Coups were common, most new states avoided the military blocs, and the shift to markets came later and has no bearing on borders.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  {
    id: 'whnis-ent-3b',
    question: 'Ghana under Nkrumah and Tanzania under Nyerere both pursued forms of African socialism. Which difference between the two cases is most accurate?',
    options: ['Nkrumah fell in a coup, while Nyerere stepped down peacefully', 'Nkrumah allied with Britain, while Nyerere joined the Warsaw Pact', 'Nkrumah held free multiparty elections, while Nyerere never did', 'Nkrumah rejected Pan-Africanism, while Nyerere championed it'],
    correctIndex: 0,
    explanation: 'Ghana\'s army overthrew Nkrumah in 1966, while Nyerere retired from the presidency in 1985. Neither joined a Cold War bloc, Nkrumah declared a one-party state in 1964, and he was a leading Pan-Africanist.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  // Part 4: Connections & Interactions
  {
    id: 'whnis-ent-4a',
    question: 'Caribbean migration to Britain after 1948 and Algerian migration to France from the 1950s to the 1970s best illustrate which pattern?',
    options: ['Movement from former colonies to the old imperial centers', 'Refugees fleeing Soviet occupation of Eastern Europe', 'Settlers returning to farm land in newly independent states', 'Indentured laborers sent to plantations under contract'],
    correctIndex: 0,
    explanation: 'Migrants from former colonies moved to Britain and France for work, reshaping both societies. The movement was not from Eastern Europe, ran toward rather than away from Europe, and was not plantation indenture.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'whnis-ent-4b',
    question: 'China\'s construction of the Tanzania-Zambia Railway between 1970 and 1975 is best understood as',
    options: ['a condition of an IMF structural adjustment loan', 'a railway built to carry Chinese settlers into Zambia', 'a project of the British colonial government in Africa', 'aid used to build influence among new African states'],
    correctIndex: 3,
    explanation: 'Beijing financed and built TAZARA to win friends in Africa and compete with both superpowers for influence. It was not an IMF program, it came after British rule ended, and it served Zambian copper exports rather than settlement.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  // Part 5: Change Over Time
  {
    id: 'whnis-ent-5a',
    question: 'The 1966 coup that ousted Nkrumah in Ghana and the army\'s sidelining of Sukarno in Indonesia (1965–1967) best illustrate which change?',
    options: ['Cold War superpowers withdrawing all aid from Africa and Asia', 'The spread of multiparty democracy across the new nations', 'The first multiracial elections in formerly colonized states', 'Founding leaders and their state-led projects losing power'],
    correctIndex: 3,
    explanation: 'In the second phase of post-independence history, militaries overthrew many charismatic founders whose economies had stalled. Superpower aid continued, and the coups replaced civilian rule with military regimes rather than expanding democracy.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  {
    id: 'whnis-ent-5b',
    question: 'India\'s economic reforms of 1991 are best described as',
    options: ['a turn from protected industry toward global markets', 'the start of five-year plans modeled on the Soviet Union', 'a return to colonial rule under British economic advisers', 'the nationalization of foreign companies operating in India'],
    correctIndex: 0,
    explanation: 'The 1991 reforms dismantled much of the License Raj and opened India to foreign investment and trade. Five-year plans and nationalization belong to the earlier state-led era, and there was no return to colonial rule.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  // Part 6: Problem-Solving Workshop
  // source: original
  {
    id: 'whnis-ent-6a',
    question: 'The following summary was written for this question.\n\nIn 1967, Tanzania\'s ruling party declared that the nation would build its future on the work of its own people and land rather than on foreign money, and would organize farmers into cooperative villages.\n\nThe declaration is best understood in the context of',
    options: ['the IMF\'s demand that Tanzania cut social spending', 'efforts to create African socialism and lessen reliance on outsiders', 'Tanzania\'s decision to join the Warsaw Pact as a full member', 'the British government\'s plan to restore colonial rule in East Africa'],
    correctIndex: 1,
    explanation: 'The Arusha Declaration launched Ujamaa, Nyerere\'s program of village socialism and self-reliance. Structural adjustment came in the 1980s, Tanzania was non-aligned, and Britain did not try to reclaim the colony.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'whnis-ent-6b',
    question: 'A student writes: "After independence, the new states of Africa and Asia became democracies." Which evidence best corrects this claim?',
    options: ['India held national elections with universal adult suffrage from 1951', 'Botswana held regular elections from its independence in 1966', 'Ghana turned into a one-party regime in 1964, and Nigeria\'s army seized power in 1966', 'The Non-Aligned Movement was founded in Belgrade in 1961'],
    correctIndex: 2,
    explanation: 'One-party and military rule were common within a decade of independence, as Ghana and Nigeria show. India and Botswana were exceptions that would seem to support the student, and the founding of the Non-Aligned Movement says nothing about forms of government.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: AP Review
  {
    id: 'whnis-ent-7a',
    question: 'Which comparison of India and South Korea from the 1950s to the 1980s is most accurate?',
    options: ['India exported under army rule, while Korea protected industry under democracy', 'India protected industry under democracy, while Korea exported under military-led rule', 'India and Korea both relied on Soviet-style planning and collective farms', 'India and Korea both kept their economies closed to trade with the United States'],
    correctIndex: 1,
    explanation: 'India protected domestic industry within a parliamentary democracy, while South Korea\'s military-led governments pushed export industries tied to U.S. markets. The reversed pairing is wrong, neither collectivized, and Korea traded heavily with the United States.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'whnis-ent-7b',
    question: 'Which statement describes a change between 1950 and 2000 in the politics of many newly independent states?',
    options: ['Religious movements disappeared from public life after 1960', 'Colonial powers regained control of most former colonies', 'Secular nationalism gave ground to religious movements', 'Every state abandoned the borders drawn under colonial rule'],
    correctIndex: 2,
    explanation: 'Secular leaders like Nasser and Nehru dominated the early decades, but religious movements such as Iran\'s 1979 revolution and Hindu nationalism gained strength later. Religion grew in importance, colonizers did not return, and colonial borders mostly survived.',
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
