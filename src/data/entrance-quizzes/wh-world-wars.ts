/**
 * Entrance Quiz — Causes & Conduct of the World Wars (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'whww-ent-1a',
    question: 'In an essay on the causes of World War I, which of the following is best classified as an immediate trigger rather than a long-term cause?',
    options: ['The Anglo-German naval race that began after 1906', 'The rival blocs of the Triple Entente and Triple Alliance', 'Austria-Hungary\'s ultimatum to Serbia in July 1914', 'Pan-Slavic nationalism spreading through the Balkans'],
    correctIndex: 2,
    explanation: 'The ultimatum followed the Sarajevo assassination by a few weeks and set the alliance commitments in motion. The naval race, the alliance blocs, and Balkan nationalism built up over years and are background causes.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'whww-ent-1b',
    question: 'Germany\'s Schlieffen Plan called for a rapid attack on France through Belgium if war with Russia began. The plan helps explain the spread of the war in 1914 mainly because it',
    options: ['guaranteed that Belgium would remain neutral throughout the conflict', 'turned an eastern crisis into fighting in the west', 'ensured that Britain would stay out of a continental war', 'placed Italy at the center of the fighting from the start'],
    correctIndex: 1,
    explanation: 'Once Russia mobilized, the plan required Germany to strike France first, and the invasion of Belgium brought Britain into the war. It violated Belgian neutrality, drew Britain in, and had nothing to do with Italy, which stayed neutral in 1914.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Key Processes
  // source: original
  {
    id: 'whww-ent-2a',
    question: 'Described image: a British poster from World War II shows a family dinner table with modest portions and urges citizens to grow their own vegetables and waste nothing.\n\nThe poster is best understood as evidence of',
    options: ['a government managing civilian consumption during total war', 'a private company advertising a new line of canned foods', 'a protest against the government\'s decision to go to war', 'the return of free markets to Britain once fighting began'],
    correctIndex: 0,
    explanation: 'Rationing and grow-your-own campaigns extended state control into the household so that food and shipping could serve the war effort. The poster is official, supports rather than protests the war, and reflects state control rather than free markets.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  {
    id: 'whww-ent-2b',
    question: 'Korean and Taiwanese conscripts served Japan in World War II, much as the Indian Army served Britain. Which conclusion does this comparison best support?',
    options: ['Only European empires relied on soldiers from their colonies', 'Britain stopped recruiting colonial soldiers after World War I', 'Japan\'s colonial soldiers were volunteers who chose to fight', 'Asian and European empires alike drew colonial subjects into war'],
    correctIndex: 3,
    explanation: 'Japan, like Britain and France, mobilized colonial populations for its war effort. Conscription was not limited to European empires, it was compulsory, and India supplied about 2.5 million soldiers to Britain in World War II.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  // Part 3: Patterns & Examples
  {
    id: 'whww-ent-3a',
    question: 'The Battle of the Somme (1916) produced about one million casualties, and Verdun (1916) about 700,000, while front lines moved only a few miles. Which best explains this pattern?',
    options: ['Defensive firepower outmatched the tactics used to attack', 'Armies lacked enough soldiers to mount large offensives', 'Generals avoided major battles to save their troops\' lives', 'Tanks and aircraft had already made infantry useless by 1916'],
    correctIndex: 0,
    explanation: 'Machine guns, artillery, and barbed wire let defenders cut down attackers, producing attrition without breakthroughs. Both sides had millions of soldiers, generals launched huge offensives, and tanks first appeared only late in the Somme.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  {
    id: 'whww-ent-3b',
    question: 'Which statement best describes how the world wars affected women\'s work?',
    options: ['Women were barred from factory jobs to protect them from danger', 'Women\'s roles stayed largely unchanged in every country at war', 'Labor shortages opened industrial and military roles to women', 'Only Soviet women entered paid work during the two world wars'],
    correctIndex: 2,
    explanation: 'With men at the front, women filled munitions factories in Britain, war plants in the United States, and combat roles in the Soviet Union. Their roles changed sharply, and the shift was not limited to one country.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  // Part 4: Connections & Interactions
  // source: Atlantic Charter, August 14, 1941; verbatim
  {
    id: 'whww-ent-4a',
    question: '"...they respect the right of all peoples to choose the form of government under which they will live..."\n— Atlantic Charter, issued by Franklin Roosevelt and Winston Churchill, 1941\n\nColonized peoples such as Indian nationalists could most effectively use this statement to',
    options: ['justify Japan\'s expansion across East and Southeast Asia', 'argue that self-determination should apply to them', 'defend the Treaty of Versailles against German critics', 'support the return of colonies taken from Germany in 1919'],
    correctIndex: 1,
    explanation: 'Nationalists seized on the Allies\' own language to demand independence, even though Churchill said the clause was meant for Nazi-occupied Europe. The statement did not support Japanese expansion, Versailles, or restoring German colonies.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'whww-ent-4b',
    question: 'Which best explains why the Bolsheviks were able to seize power in Russia in 1917?',
    options: ['A German invasion had already removed the tsar from his throne', 'The Western Allies sent troops to install Lenin in Petrograd', 'Russia had won the war and its soldiers demanded rewards', 'War losses and food shortages had discredited the old order'],
    correctIndex: 3,
    explanation: 'Military defeats, mass casualties, and hunger brought down the tsar in February 1917 and undermined the provisional government that followed, opening the way for the October Revolution. The tsar fell to revolution at home, Russia was losing, and the Allies opposed the Bolsheviks.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  // Part 5: Change Over Time
  // source: Treaty of Versailles, Article 231, 1919; verbatim
  {
    id: 'whww-ent-5a',
    question: '"The Allied and Associated Governments affirm and Germany accepts the responsibility of Germany and her allies for causing all the loss and damage to which the Allied and Associated Governments and their nationals have been subjected as a consequence of the war..."\n— Treaty of Versailles, Article 231, 1919\n\nGerman resentment of this clause is best used as evidence for which argument?',
    options: ['The settlement made a second world war certain on its own', 'Germans accepted the settlement as fair once reparations began', 'The postwar settlement left grievances that nationalists exploited', 'The League of Nations was created mainly to collect reparations'],
    correctIndex: 2,
    explanation: 'The war-guilt clause fed a lasting grievance that Hitler and other nationalists used, though the Depression and the failure of collective security were also needed to produce war. The treaty alone did not make war certain, Germans bitterly rejected it, and the League was not a collection agency.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  {
    id: 'whww-ent-5b',
    question: 'Which statement best describes a change from the peace settlement after World War I to the settlement after World War II?',
    options: ['Victors moved from punishing the defeated to rebuilding them', 'Victors dropped the idea of an international peace organization', 'Victors imposed heavier reparations after 1945 than in 1919', 'Victors returned all conquered land to Germany and Japan'],
    correctIndex: 0,
    explanation: 'Versailles imposed reparations and blame, while after 1945 the United States funded reconstruction through the Marshall Plan and helped found the United Nations. The U.N. continued the idea of the League, and the defeated powers lost territory.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  // Part 6: Problem-Solving Workshop
  {
    id: 'whww-ent-6a',
    question: 'Which evidence best supports the claim that the failure of collective security contributed to World War II?',
    options: ['Gavrilo Princip assassinated Franz Ferdinand in Sarajevo', 'The United States dropped atomic bombs on two Japanese cities', 'The League did not stop Italy\'s invasion of Ethiopia in 1935', 'Britain placed private factories under state control in 1915'],
    correctIndex: 2,
    explanation: 'The League\'s weak response to Italy, like its failure over Manchuria and the Rhineland, showed aggressors that they would face little resistance. The assassination began World War I, the atomic bombs ended World War II, and the 1915 act concerned war production.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'whww-ent-6b',
    question: 'A former British officer\'s memoir, published in 1929, describes the Battle of the Somme as pointless slaughter. When using it as evidence, a historian should first consider that the author',
    options: ['could not have seen any fighting because officers stayed far behind the lines', 'wrote a decade later, amid widespread postwar disillusion', 'must be accurate because published memoirs are checked for errors', 'wrote too long after the war for the memoir to have any value'],
    correctIndex: 1,
    explanation: 'Writing in the late 1920s, the author was shaped by a growing mood of disillusion, which affects how he remembered and framed events. Junior officers fought at the front, publication does not guarantee accuracy, and a later memoir still has value.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: AP Review
  // source: Woodrow Wilson, Fourteen Points address to Congress, January 8, 1918; verbatim
  {
    id: 'whww-ent-7a',
    question: '"A general association of nations must be formed under specific covenants for the purpose of affording mutual guarantees of political independence and territorial integrity to great and small states alike."\n— Woodrow Wilson, address to Congress, 1918\n\nWhich comparison of the organization that grew from this proposal and the United Nations founded in 1945 is most accurate?',
    options: ['Each was designed mainly to punish Germany for starting a world war', 'The first included the United States, while the second excluded it', 'The first covered only Europe, while the second covered the world', 'Each sought collective security, but the U.S. joined only the second'],
    correctIndex: 3,
    explanation: 'The League of Nations and the United Nations both aimed to keep peace through collective security, but the Senate kept the United States out of the League. Neither existed to punish Germany, and the League had members from Asia, Africa, and Latin America.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'whww-ent-7b',
    question: 'An essay on decolonization after 1945 would be best contextualized by noting that',
    options: ['the world wars drained European empires and weakened their legitimacy', 'European empires reached their greatest strength in the late 1940s', 'colonial troops took no part in either of the two world wars', 'the Atlantic Charter promised to keep all colonies under European rule'],
    correctIndex: 0,
    explanation: 'Two wars exhausted Britain and France, colonial soldiers and laborers expected rewards, and Allied rhetoric about self-determination undercut imperial claims. Empires were weakened, not strengthened, colonial troops fought in both wars, and the Charter spoke of self-government.',
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
