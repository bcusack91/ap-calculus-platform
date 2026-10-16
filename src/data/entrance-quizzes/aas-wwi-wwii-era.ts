/**
 * Entrance Quiz — African Americans in the World Wars (AP African American Studies)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'aasww-ent-1a',
    question: 'In 1943 a Black welder is refused work at a defense plant, and a Black draftee is assigned to an all-Black unit. Which statement correctly describes the federal policies that applied to each?',
    options: ['Both could appeal under Executive Order 9981, which Roosevelt issued in 1941.', 'The welder could complain under EO 8802, but no order covered the draftee until EO 9981 in 1948.', 'Neither had any federal policy to cite, since EO 8802 covered only government offices.', 'The draftee could cite EO 8802, but the welder had to wait for EO 9981.'],
    correctIndex: 1,
    explanation: 'EO 8802 (1941) banned discrimination in defense industries and government and created the FEPC, but it did not touch the armed forces; Truman\'s EO 9981 (1948) began military desegregation. Mixing up the two orders is a common error.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'aasww-ent-1b',
    question: 'Which statement best captures the contradiction that Black military service in both world wars exposed?',
    options: ['Black soldiers were barred from serving in either war until near its end.', 'Black leaders opposed both wars and urged young men to refuse the draft.', 'The military was integrated while civilian life stayed segregated.', 'The nation fought for democracy abroad while denying it at home.'],
    correctIndex: 3,
    explanation: 'Black Americans served in segregated units while Jim Crow, disfranchisement and lynching continued at home, the gap the Double V campaign named in 1942. The military itself stayed segregated until 1948.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: World War I: Service and Segregation (1917–1919)
  {
    id: 'aasww-ent-2a',
    question: 'Rough figures for World War I: about 380,000 Black men served in the Army; about 200,000 were sent to France; about 40,000 served in the two Black combat divisions, the 92nd and 93rd.\n\nWhich conclusion do these figures support?',
    options: ['Most of the Black troops in France served outside combat units.', 'Most Black soldiers who served were sent to combat units in France.', 'Fewer than one in ten Black soldiers ever left the United States.', 'The 92nd and 93rd held about half of all Black soldiers.'],
    correctIndex: 0,
    explanation: '40,000 of about 200,000 in France is about one in five, so most served in labor and stevedore units. About half of those who served went to France, and the two divisions held about a tenth of the total.',
    partNumber: 2,
    partTitle: 'World War I: Service and Segregation (1917–1919)',
  },
  // source: W. E. B. Du Bois, "Close Ranks," The Crisis, July 1918, and "Returning Soldiers," The Crisis, May 1919 (title and short phrase); verbatim
  {
    id: 'aasww-ent-2b',
    question: 'In July 1918 W. E. B. Du Bois urged Black Americans in The Crisis to "forget our special grievances" while the war lasted. Which criticism did opponents of this "Close Ranks" editorial raise?',
    options: ['It called on Black men to refuse the draft until the Army ended segregation.', 'It urged Black families to emigrate to France after the war had ended.', 'It asked Black people to defer their demands as lynching went on.', 'It endorsed the Army\'s plan to lend Black regiments to the British.'],
    correctIndex: 2,
    explanation: 'Critics such as Hubert Harrison objected that Black Americans should not set aside their demands while mobs were still lynching, and they noted that Du Bois was being considered for an Army commission. Within a year he published "Returning Soldiers."',
    partNumber: 2,
    partTitle: 'World War I: Service and Segregation (1917–1919)',
  },
  // Part 3: The Home Front in Crisis: East St. Louis to the Red Summer (1917–1921)
  // source: Moore v. Dempsey, 261 U.S. 86 (1923), opinion of Justice Oliver Wendell Holmes; verbatim
  {
    id: 'aasww-ent-3a',
    question: '"But if the case is that the whole proceeding is a mask—that counsel, jury and judge were swept to the fatal end by an irresistible wave of public passion, and that the State Courts failed to correct the wrong, neither perfection in the machinery for correction nor the possibility that the trial court and counsel saw no other way of avoiding an immediate outbreak of the mob can prevent this Court from securing to the petitioners their constitutional rights."\n— Moore v. Dempsey (1923), the appeal of the Elaine defendants\n\nThe principle stated here is that',
    options: ['states may refuse any federal review of trials held in their own courts', 'lynching is a federal crime that federal courts must always punish', 'a trial judge\'s ordinary mistakes of law justify a new federal trial', 'federal courts may act when mob pressure made a fair trial impossible'],
    correctIndex: 3,
    explanation: 'Holmes held that a trial dominated by a mob, which state courts failed to correct, violates due process, so the Supreme Court could protect the Elaine defendants. The opinion says ordinary legal mistakes are not enough, and no federal anti-lynching law passed in this era.',
    partNumber: 3,
    partTitle: 'The Home Front in Crisis: East St. Louis to the Red Summer (1917–1921)',
  },
  {
    id: 'aasww-ent-3b',
    question: 'Historians argue that the violence at Elaine, Arkansas, in 1919 was a response to Black economic organizing, not only to migration. Which evidence best supports this argument?',
    options: ['Elaine\'s sharecroppers were mostly recent migrants from Northern cities.', 'The attacks began at a meeting of a sharecroppers\' union that was suing planters for fair crop settlements.', 'Federal troops were sent to Elaine to protect Black residents from mobs.', 'Black veterans in Elaine had organized to demand the right to vote.'],
    correctIndex: 1,
    explanation: 'Shots were fired at a meeting of the Progressive Farmers and Household Union, which had hired a lawyer to win fair settlements, and planters then called the union an "insurrection." Federal troops did not protect Black residents, and the conflict centered on crops, not voting.',
    partNumber: 3,
    partTitle: 'The Home Front in Crisis: East St. Louis to the Red Summer (1917–1921)',
  },
  // Part 4: Depression and New Deal: Labor, Relief and Political Realignment (1925–1940)
  {
    id: 'aasww-ent-4a',
    question: 'Why did many New Deal programs treat Black Americans unequally, even though a few, such as the WPA, hired them more fairly?',
    options: ['Roosevelt left hiring, wages and relief in local hands to keep the support of Southern Democrats in Congress.', 'The Supreme Court ruled that federal relief could not be paid to Black workers.', 'Black leaders asked that relief go first to white families hit by the Depression.', 'Congress required every program to be run by the Black Cabinet\'s advisers.'],
    correctIndex: 0,
    explanation: 'Southern Democrats chaired key committees, so programs were written to leave control with local officials, who often paid Black families less or excluded their jobs. The Black Cabinet pressed for fairness from inside but did not run the programs.',
    partNumber: 4,
    partTitle: 'Depression and New Deal: Labor, Relief and Political Realignment (1925–1940)',
  },
  {
    id: 'aasww-ent-4b',
    question: 'A table gives estimates for Black voters in Northern cities: in 1932, most voted for Hoover; in 1936, roughly 70 percent or more voted for Roosevelt. Which reading of this table is most careful?',
    options: ['It shows exactly how every Black American voted in both of these elections.', 'It proves that most Black Southerners voted for Roosevelt in 1936.', 'The direction of change is clear, though the exact figures are uncertain.', 'It shows that Black voters left the Democrats for the Republicans.'],
    correctIndex: 2,
    explanation: 'Ballots were secret and early polls rarely sampled Black voters, so historians estimate from mostly Black precincts; the shift toward Roosevelt holds across every estimate. Most Black Southerners could not vote at all, and the shift ran toward the Democrats.',
    partNumber: 4,
    partTitle: 'Depression and New Deal: Labor, Relief and Political Realignment (1925–1940)',
  },
  // Part 5: World War II: The Double V in Practice (1941–1945)
  {
    id: 'aasww-ent-5a',
    question: 'At Pearl Harbor on December 7, 1941, Navy mess attendant Doris Miller carried wounded sailors and fired an anti-aircraft gun he had never been trained to use. His story is most often used as evidence that',
    options: ['the Navy had already integrated its gun crews before the war began', 'the Navy confined Black sailors to service roles despite their ability', 'Black sailors were barred from serving aboard any of the Navy\'s warships', 'the Navy commissioned its first Black officers in the days after the attack'],
    correctIndex: 1,
    explanation: 'Before 1942 the Navy accepted Black men only in the messman branch, so Miller had been trained to serve meals, not to fight. General ratings opened in 1942 and the first Black officers were commissioned in 1944.',
    partNumber: 5,
    partTitle: 'World War II: The Double V in Practice (1941–1945)',
  },
  {
    id: 'aasww-ent-5b',
    question: 'In June 1943 white workers at Detroit\'s Packard plant walked out when Black workers were promoted. This "hate strike" best illustrates',
    options: ['a CIO campaign to keep Black workers out of the auto plants', 'the Fair Employment Practice Committee\'s power to fine employers', 'a federal order that barred Black workers from war production', 'resistance by some employees to Black wartime job gains'],
    correctIndex: 3,
    explanation: 'Labor shortages and EO 8802 opened industrial jobs to Black workers, and some white workers struck to block their hiring or promotion. The FEPC could not fine anyone, and the CIO generally recruited Black workers.',
    partNumber: 5,
    partTitle: 'World War II: The Double V in Practice (1941–1945)',
  },
  // Part 6: Source Workshop: War, Protest and Federal Power (1941–1948)
  {
    id: 'aasww-ent-6a',
    question: 'Which statement identifies a continuity between Executive Order 8802 (1941) and Executive Order 9981 (1948)?',
    options: ['Both followed threats of mass action by A. Philip Randolph and used presidential power without Congress.', 'Both were passed by Congress over the objections of Southern Democrats.', 'Both ended segregation in the armed forces within a single year.', 'Both were issued by Truman during his campaign for reelection.'],
    correctIndex: 0,
    explanation: 'Randolph\'s march threat preceded EO 8802 and his draft-resistance threat preceded EO 9981; both were presidential orders that promised more than they enforced at first. Roosevelt issued the first, and Congress passed neither.',
    partNumber: 6,
    partTitle: 'Source Workshop: War, Protest and Federal Power (1941–1948)',
  },
  {
    id: 'aasww-ent-6b',
    question: 'The Pittsburgh Courier, which ran the Double V campaign, was a commercial newspaper. How does this fact help a historian explain the campaign\'s rapid spread?',
    options: ['Federal censors required every commercial paper to print the emblem.', 'Commercial papers could not legally be mailed to readers in the South.', 'The campaign also sold papers, giving the Courier reason to push it.', 'Advertisers forced the Courier to drop the campaign within a few weeks.'],
    correctIndex: 2,
    explanation: 'Pins, clubs and an emblem in every issue served the cause and the paper\'s circulation at once, which helps explain the campaign\'s reach. Sourcing a document includes asking what its creator gained.',
    partNumber: 6,
    partTitle: 'Source Workshop: War, Protest and Federal Power (1941–1948)',
  },
  // Part 7: Synthesis and AP Review: Comparing the Two Wars
  {
    id: 'aasww-ent-7a',
    question: 'Which development best shows a continuity in Black Americans\' military experience from World War I through World War II?',
    options: ['Black soldiers were kept out of every combat role in both world wars', 'The Black press backed both wars without any criticism', 'NAACP membership stayed about the same through both wars', 'The armed forces kept Black troops in segregated units in both wars'],
    correctIndex: 3,
    explanation: 'The armed forces stayed segregated through both wars, from the 369th Infantry in 1918 to the Tuskegee Airmen, until Truman\'s order of 1948. Black units fought in combat in both wars, the Black press ran the Double V campaign, and the NAACP grew to about 450,000 members.',
    partNumber: 7,
    partTitle: 'Synthesis and AP Review: Comparing the Two Wars',
  },
  {
    id: 'aasww-ent-7b',
    question: 'A student argues that Black Americans moved from no wartime protest in World War I to protest in World War II. Which evidence best complicates that claim?',
    options: ['The Double V campaign launched in 1942', 'The 1917 silent march down Fifth Avenue', 'Randolph\'s 1941 call to march on Washington', 'The founding of CORE in Chicago in 1942'],
    correctIndex: 1,
    explanation: 'Thousands marched down Fifth Avenue in July 1917 to protest the East St. Louis killings, so the change was from moral appeals to organized political pressure, not from silence to protest. The other three are World War II protests.',
    partNumber: 7,
    partTitle: 'Synthesis and AP Review: Comparing the Two Wars',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'World War I: Service and Segregation (1917–1919)' },
    { partNumber: 3, partTitle: 'The Home Front in Crisis: East St. Louis to the Red Summer (1917–1921)' },
    { partNumber: 4, partTitle: 'Depression and New Deal: Labor, Relief and Political Realignment (1925–1940)' },
    { partNumber: 5, partTitle: 'World War II: The Double V in Practice (1941–1945)' },
    { partNumber: 6, partTitle: 'Source Workshop: War, Protest and Federal Power (1941–1948)' },
    { partNumber: 7, partTitle: 'Synthesis and AP Review: Comparing the Two Wars' },
  ]
}
