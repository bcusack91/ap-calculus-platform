/**
 * Entrance Quiz — Progressivism & World War I (AP US History)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'apushpro-ent-1a',
    question: 'Which pair of reforms most directly aimed to weaken party bosses\' control over who held office?',
    options: ['The Federal Reserve Act and the Clayton Act', 'The Eighteenth and Nineteenth Amendments', 'The Meat Inspection Act and the Pure Food Act', 'The secret ballot and primary elections'],
    correctIndex: 3,
    explanation: 'Secret ballots kept machine workers from watching how people voted, and direct primaries let voters rather than party conventions choose nominees. The other pairs regulated banking, business, food, alcohol or the franchise rather than nominations.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'apushpro-ent-1b',
    question: 'Woodrow Wilson won reelection in 1916 on the slogan "He kept us out of war," yet asked Congress for war in April 1917. Which development did the most to change his course?',
    options: ['The sinking of the Lusitania with 128 Americans aboard', 'Pancho Villa\'s raid on Columbus, New Mexico', 'Germany\'s return to unrestricted submarine warfare', 'The Russian Revolution\'s overthrow of the tsar'],
    correctIndex: 2,
    explanation: 'Germany\'s decision of February 1917 to sink merchant ships without warning killed Americans and broke the Sussex pledge, forcing Wilson to choose between war and giving up neutral rights. The Lusitania (1915) and Villa\'s raid (1916) came before the election, and the tsar\'s fall made entry easier to justify but did not cause it.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Becoming a World Power (1890–1914)
  {
    id: 'apushpro-ent-2a',
    question: 'Which pair of motives best explains why the United States kept the Philippines after the war with Spain?',
    options: ['Access to Asian markets and a belief in a civilizing mission', 'Fear of Cuban independence and support for Filipino self-rule', 'Pressure from Spain and a defense treaty signed with Japan', 'A shortage of farmland at home and a plan to settle colonists'],
    correctIndex: 0,
    explanation: 'Expansionists wanted a base for trade with China and argued, as Beveridge did, that Americans had a duty to govern peoples they considered unready for self-rule. The United States fought Filipino independence, and the other pairs misstate the situation.',
    partNumber: 2,
    partTitle: 'Becoming a World Power (1890–1914)',
  },
  {
    id: 'apushpro-ent-2b',
    question: 'Secretary of State John Hay\'s Open Door notes of 1899 and 1900 most directly aimed to',
    options: ['keep China open to American trade without taking colonies', 'secure the Philippines from Spain at the peace conference', 'win the rights to build a canal across Central America', 'end Japanese immigration to Hawaii and the Pacific coast'],
    correctIndex: 0,
    explanation: 'Hay asked the powers to keep trade in China open to all and to respect China\'s territorial integrity, protecting American commerce without an American colony there. The Philippines came by treaty in 1898, and the canal and immigration questions were handled separately.',
    partNumber: 2,
    partTitle: 'Becoming a World Power (1890–1914)',
  },
  // Part 3: Progressive Voices: Reading the Sources
  // source: Jacob A. Riis, How the Other Half Lives, Introduction, 1890; verbatim
  {
    id: 'apushpro-ent-3a',
    question: '"The half that was on top cared little for the struggles, and less for the fate of those who were underneath, so long as it was able to hold them there and keep its own seat."\n— Jacob Riis, How the Other Half Lives, 1890\n\nRiis\'s book was most likely intended to',
    options: ['move comfortable readers to back tenement reform', 'persuade recent immigrants to return to Europe', 'defend city landlords against new building codes', 'recruit factory workers into the Socialist Party'],
    correctIndex: 0,
    explanation: 'Riis used words and photographs to show middle-class New Yorkers how the poor lived, and his work helped produce tenement laws. He did not urge immigrants to leave, he attacked rather than defended slum landlords, and he was a reformer, not a socialist organizer.',
    partNumber: 3,
    partTitle: 'Progressive Voices: Reading the Sources',
  },
  {
    id: 'apushpro-ent-3b',
    question: 'The fight over damming the Hetch Hetchy valley in Yosemite National Park to supply San Francisco with water best illustrates',
    options: ['a conflict between reformers and railroads over freight rates', 'Western states\' opposition to every kind of federal land policy', 'a split between managed-use conservation and wilderness preservation', 'agreement among reformers that public lands should be sold off'],
    correctIndex: 2,
    explanation: 'Gifford Pinchot backed the dam as wise use of resources for the public, while John Muir fought to keep the valley as wilderness; the dam was approved in 1913. Railroads, blanket state opposition and land sales were not the issue.',
    partNumber: 3,
    partTitle: 'Progressive Voices: Reading the Sources',
  },
  // Part 4: World War I: From Neutrality to Mobilization (1914–1918)
  // source: Woodrow Wilson, address to Congress requesting a declaration of war, April 2, 1917; verbatim
  {
    id: 'apushpro-ent-4a',
    question: '"The world must be made safe for democracy. Its peace must be planted upon the tested foundations of political liberty."\n— Woodrow Wilson, address to Congress, April 2, 1917\n\nWhich development of March 1917 made it easier for Wilson to present the Allies as a league of democracies?',
    options: ['The armistice signed on the Western Front', 'The founding of the League of Nations in Geneva', 'The overthrow of the Russian tsar', 'The sinking of the British liner Lusitania'],
    correctIndex: 2,
    explanation: 'The March revolution replaced the tsar with a provisional government, so the Allies no longer included an autocracy. The armistice came in November 1918, the League in 1919–1920, and the Lusitania was sunk in 1915.',
    partNumber: 4,
    partTitle: 'World War I: From Neutrality to Mobilization (1914–1918)',
  },
  {
    id: 'apushpro-ent-4b',
    question: 'Which wartime body is the best evidence of continuity between Progressive reform and the American war effort?',
    options: ['The American Expeditionary Forces, which fought under Pershing in France', 'The Selective Service System, which registered about 24 million men', 'The 369th Infantry, which fought under French command on the Western Front', 'The War Industries Board, which used experts to set production priorities'],
    correctIndex: 3,
    explanation: 'Progressives trusted experts and federal agencies to manage the economy, and the War Industries Board did exactly that by allocating materials and setting priorities. The other choices were military units or the draft rather than economic management.',
    partNumber: 4,
    partTitle: 'World War I: From Neutrality to Mobilization (1914–1918)',
  },
  // Part 5: Peace, Backlash and Legacy (1918–1920)
  {
    id: 'apushpro-ent-5a',
    question: 'A causation argument about the Senate\'s failure to approve the Treaty of Versailles would be strongest if it',
    options: ['blamed only the Irreconcilables, who held a majority of the Senate', 'credited public demand that the nation withdraw from all of Europe', 'argued that senators thought the treaty was too lenient toward Germany', 'weighed Lodge\'s reservations against Wilson\'s refusal to compromise'],
    correctIndex: 3,
    explanation: 'Lodge\'s reservations on Article X and Wilson\'s order that Democrats vote against the treaty with reservations together blocked a two-thirds majority that could probably have been assembled. The Irreconcilables numbered only about 14 to 16 senators, and the other choices misstate the objections.',
    partNumber: 5,
    partTitle: 'Peace, Backlash and Legacy (1918–1920)',
  },
  {
    id: 'apushpro-ent-5b',
    question: 'The Red Scare of 1919–1920 most directly contributed to which development of the 1920s?',
    options: ['United States membership in the League of Nations', 'Immigration quotas aimed at southern and eastern Europeans', 'The repeal of national prohibition of alcoholic drinks', 'Passage of a federal anti-lynching law by Congress'],
    correctIndex: 1,
    explanation: 'Because many radicals were immigrants, the scare fed nativism that produced the quota laws of the 1920s. The United States never joined the League, prohibition was repealed in 1933, and no federal anti-lynching law passed.',
    partNumber: 5,
    partTitle: 'Peace, Backlash and Legacy (1918–1920)',
  },
  // Part 6: Problem-Solving Workshop
  // source: Upton Sinclair, "What Life Means to Me," Cosmopolitan, October 1906; verbatim
  {
    id: 'apushpro-ent-6a',
    question: 'Upton Sinclair wrote in 1906 that with The Jungle "I aimed at the public\'s heart, and by accident I hit it in the stomach." His comment best shows that',
    options: ['the novel sold poorly outside the city of Chicago', 'readers cared more about tainted meat than about workers', 'Congress banned the novel as a danger to public morals', 'Sinclair himself opposed the Meat Inspection Act'],
    correctIndex: 1,
    explanation: 'Sinclair, a socialist, meant to expose the exploitation of immigrant packinghouse workers, but the public responded to his descriptions of filthy meat, which led to the Meat Inspection and Pure Food and Drug Acts. The book was a best seller and was not banned.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'apushpro-ent-6b',
    question: 'Which fact about Theodore Roosevelt\'s 1910 "New Nationalism" speech is most useful for explaining its purpose?',
    options: ['Roosevelt had once served as assistant secretary of the navy', 'Roosevelt had led the Rough Riders at San Juan Hill in 1898', 'Roosevelt was breaking with Taft and preparing a new run', 'Roosevelt had won the Nobel Peace Prize for his 1905 mediation'],
    correctIndex: 2,
    explanation: 'The speech laid out a program of federal regulation and social reform that set Roosevelt apart from Taft and became the basis of his 1912 Progressive Party campaign. The other facts are true but do not explain why he gave this speech.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: AP Review
  {
    id: 'apushpro-ent-7a',
    question: 'Which development best supports the claim that Wilson\'s New Freedom ended up expanding federal regulatory power?',
    options: ['He signed laws creating the central bank and the FTC', 'He broke up the Northern Securities railroad company in 1904', 'He fired Gifford Pinchot as chief of the Forest Service', 'He signed the Payne-Aldrich Tariff, which kept rates high'],
    correctIndex: 0,
    explanation: 'Although Wilson campaigned on restoring competition, he created two permanent federal regulators, the Federal Reserve (1913) and the Federal Trade Commission (1914). Northern Securities was Roosevelt\'s case, and Taft fired Pinchot and signed Payne-Aldrich.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'apushpro-ent-7b',
    question: 'Which claim best describes continuity and change between the Gilded Age and the Progressive Era?',
    options: ['Pro-business courts disappeared after 1900, so reform laws were never struck down', 'Concern about corporate power persisted, but reformers relied more on federal regulation', 'Political machines vanished by 1905, so city reform was no longer needed', 'Immigration fell to almost nothing after 1890, so nativism faded quickly'],
    correctIndex: 1,
    explanation: 'Worries about trusts and inequality carried over from the Gilded Age, but Progressives turned to federal agencies and laws such as the FTC and the Meat Inspection Act. Courts still struck down laws (Lochner, Hammer v. Dagenhart), machines survived, and immigration peaked after 1900.',
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
    { partNumber: 2, partTitle: 'Becoming a World Power (1890–1914)' },
    { partNumber: 3, partTitle: 'Progressive Voices: Reading the Sources' },
    { partNumber: 4, partTitle: 'World War I: From Neutrality to Mobilization (1914–1918)' },
    { partNumber: 5, partTitle: 'Peace, Backlash and Legacy (1918–1920)' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
