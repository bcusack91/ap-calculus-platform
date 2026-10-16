/**
 * Entrance Quiz — Movements & Debates (AP African American Studies)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'aasmd-ent-1a',
    question: 'A 1920s organizer urges people of African descent in the United States, the Caribbean and Africa to take pride in a shared heritage and to work for a free Africa that could protect Black people everywhere. This idea is best described as',
    options: ['Pan-Africanism', 'African colonization run by white reformers', 'accommodation to segregation in the South', 'intersectional analysis of race and gender'],
    correctIndex: 0,
    explanation: 'Pan-Africanism holds that people of African descent worldwide share a history and political future, as Garvey\'s UNIA and Du Bois\'s congresses argued in different ways. The other terms describe different debates.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'aasmd-ent-1b',
    question: 'A court rejects a Black woman\'s job-discrimination claim, finding no race bias because the employer hired Black men and no sex bias because it hired white women. Kimberlé Crenshaw\'s concept of intersectionality would describe her situation as',
    options: ['a case in which sex bias mattered and race bias played no role', 'proof that existing law already protected Black women well', 'an injury from race and sex combined, which a single-axis legal test cannot see', 'a class conflict that had nothing to do with race or sex'],
    correctIndex: 2,
    explanation: 'Crenshaw argued that law treating race and sex separately misses the distinct discrimination Black women face where the two meet, like a person hit from two directions at an intersection. The court\'s two separate tests are exactly the problem she named.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Stay or Go? Emigration, Nationalism and Garvey (1850–1927)
  // source: Martin R. Delany, The Condition, Elevation, Emigration, and Destiny of the Colored People of the United States, 1852 (Appendix); verbatim
  {
    id: 'aasmd-ent-2a',
    question: '"We are a nation within a nation;—as the Poles in Russia, the Hungarians in Austria, the Welsh, Irish, and Scotch in the British dominions. ... The claims of no people, according to established policy and usage, are respected by any nation, until they are presented in a national capacity."\n— Martin R. Delany (1852)\n\nDelany uses these comparisons mainly to argue that Black Americans should',
    options: ['join the American Colonization Society\'s settlement in Liberia', 'appeal to white voters through moral suasion and the antislavery press', 'move west to claim farmland in the new territory of Kansas', 'organize as a distinct group seeking a self-governing homeland'],
    correctIndex: 3,
    explanation: 'By likening Black Americans to subject peoples in European empires, Delany argued that they would be respected only by acting as a political body, which led him to plan a Black-led homeland abroad. He rejected the white-run Colonization Society.',
    partNumber: 2,
    partTitle: 'Stay or Go? Emigration, Nationalism and Garvey (1850–1927)',
  },
  {
    id: 'aasmd-ent-2b',
    question: 'Support for emigration among Black Americans rose in the 1850s, the 1890s and the years around 1920. Which factor best links these three periods?',
    options: ['Congress paid for passage to Africa in each of them.', 'Hopes for citizenship at home had collapsed.', 'European empires offered land to Black settlers.', 'Cotton prices had risen sharply in the South.'],
    correctIndex: 1,
    explanation: 'The Fugitive Slave Act and Dred Scott, the end of Reconstruction and the rise of lynching and disfranchisement, and the Red Summer each made citizenship seem out of reach. Congress never funded these movements.',
    partNumber: 2,
    partTitle: 'Stay or Go? Emigration, Nationalism and Garvey (1850–1927)',
  },
  // Part 3: Comparing Cases: Accommodation vs. Agitation (1892–1915) and the Self-Help Lineage
  // source: W. E. B. Du Bois, The Souls of Black Folk, 1903 ("Of Mr. Booker T. Washington and Others"); verbatim
  {
    id: 'aasmd-ent-3a',
    question: '"Is it possible, and probable, that nine millions of men can make effective progress in economic lines if they are deprived of political rights, made a servile caste, and allowed only the most meagre chance for developing their exceptional men? If history and reason give any distinct answer to these questions, it is an emphatic No."\n— W. E. B. Du Bois, The Souls of Black Folk (1903)\n\nDu Bois\'s argument here is that',
    options: ['economic training should replace political protest entirely', 'political rights matter less than thrift and industrial skill', 'without the vote, any economic gains they made would not last', 'exceptional men should leave the South for Northern colleges'],
    correctIndex: 2,
    explanation: 'Du Bois held that a people without the ballot or civil rights could not protect the property and schools they built, so Washington\'s program contradicted itself. He supported industrial training for many but would not trade away rights.',
    partNumber: 3,
    partTitle: 'Comparing Cases: Accommodation vs. Agitation (1892–1915) and the Self-Help Lineage',
  },
  {
    id: 'aasmd-ent-3b',
    question: 'Ida B. Wells showed that the 1892 Memphis lynching targeted three Black men whose grocery competed successfully with a white-owned store. This finding most directly challenged which position?',
    options: ['Booker T. Washington\'s view that property and good conduct would bring Black Southerners security and respect', 'Martin Delany\'s plan for a Black homeland in West Africa', 'Marcus Garvey\'s call for a Black-owned steamship line', 'Anna Julia Cooper\'s claim about Black women\'s dignity'],
    correctIndex: 0,
    explanation: 'If prosperous, law-abiding men could be lynched for their success, then economic progress alone did not protect Black people, the premise of Washington\'s program. The case did not address emigration, the Black Star Line or Cooper\'s argument.',
    partNumber: 3,
    partTitle: 'Comparing Cases: Accommodation vs. Agitation (1892–1915) and the Self-Help Lineage',
  },
  // Part 4: Connections: Pan-Africanism, Black Internationalism and the Art-and-Politics Debate (1900–1957)
  {
    id: 'aasmd-ent-4a',
    question: 'Which statement best describes how Pan-African meetings changed between the 1900 London conference and the 1945 Manchester congress?',
    options: ['They moved from mass rallies of workers to closed meetings of scholars.', 'They moved from calls for emigration to demands for integration inside the United States.', 'They moved from Harlem to Paris as Négritude replaced Pan-Africanism.', 'They moved from petitions for reform under colonial rule to demands for independence.'],
    correctIndex: 3,
    explanation: 'The 1900 address asked colonial powers to respect Africans\' rights, while the Manchester congress, organized by Padmore and Nkrumah, demanded self-rule as World War II weakened the empires. Many delegates\' countries won independence within two decades.',
    partNumber: 4,
    partTitle: 'Connections: Pan-Africanism, Black Internationalism and the Art-and-Politics Debate (1900–1957)',
  },
  // source: W. E. B. Du Bois, "Criteria of Negro Art," The Crisis, October 1926 (short phrase); verbatim
  {
    id: 'aasmd-ent-4b',
    question: 'In the mid-1920s Alain Locke hoped Black art would win the respect that politics had not, while W. E. B. Du Bois declared that "all Art is propaganda." Their disagreement was mainly over',
    options: ['whether Black Americans had a distinct culture of their own at all', 'whether art should earn recognition through achievement or serve the struggle for rights directly', 'whether Harlem writers should publish in Black magazines or white ones', 'whether jazz and the blues counted as art'],
    correctIndex: 1,
    explanation: 'Locke treated art as a bridge to recognition, and Du Bois treated it as a weapon for justice. Schuyler, not Locke or Du Bois, denied that a distinct Black art existed.',
    partNumber: 4,
    partTitle: 'Connections: Pan-Africanism, Black Internationalism and the Art-and-Politics Debate (1900–1957)',
  },
  // Part 5: Continuity & Change: Self-Defense and Separatism (1850–1966)
  // source: Ida B. Wells, Southern Horrors: Lynch Law in All Its Phases, 1892 ("Self-Help"; short phrase in explanation); verbatim
  {
    id: 'aasmd-ent-5a',
    question: 'Which statement identifies a continuity in arguments for armed self-defense from Ida B. Wells (1892) to the Deacons for Defense and Justice (1964–65)?',
    options: ['Each rested on the law\'s failure to protect Black lives.', 'Each called for organized armed revolt to overthrow state governments in the South.', 'Each was endorsed by the national leadership of the NAACP at the time.', 'Each argued that self-defense should replace voting as the movement\'s main goal.'],
    correctIndex: 0,
    explanation: 'Wells wrote that a rifle should give "that protection which the law refuses to give," and the Deacons guarded organizers where police would not. What changed was scale, from households to organized groups.',
    partNumber: 5,
    partTitle: 'Continuity & Change: Self-Defense and Separatism (1850–1966)',
  },
  {
    id: 'aasmd-ent-5b',
    question: 'The Nation of Islam under Elijah Muhammad and Garvey\'s UNIA both rejected integration. How did the Nation of Islam\'s program differ?',
    options: ['It urged members to join the NAACP\'s lawsuits against segregation.', 'It rejected Black-owned businesses as a betrayal of the faith.', 'It grounded separation in religion instead of an African homeland.', 'It limited membership to college-educated leaders in the North.'],
    correctIndex: 2,
    explanation: 'The Nation of Islam built a religious Black nationalism of self-reliance, Black businesses and a demand for separate territory, while Garvey\'s movement centered on race pride and a free African nation. Both promoted Black enterprise.',
    partNumber: 5,
    partTitle: 'Continuity & Change: Self-Defense and Separatism (1850–1966)',
  },
  // Part 6: Source Workshop: Black Women's Thought from Cooper to Crenshaw (1892–1989)
  {
    id: 'aasmd-ent-6a',
    question: 'The Combahee River Collective Statement (1977, paraphrased) argued that the liberation of Black women would free everyone. What reasoning supported this claim?',
    options: ['Black women made up a majority of the voters in most large cities.', 'Black women\'s churches already controlled most of the civil rights groups.', 'Federal courts had begun to rule in favor of Black women\'s claims.', 'Freeing Black women would require dismantling all systems of oppression.'],
    correctIndex: 3,
    explanation: 'Because racism, sexism, class oppression and homophobia are interlocking in Black women\'s lives, the Collective argued, ending their oppression would mean destroying all of these systems. The other options are unsupported claims about numbers or courts.',
    partNumber: 6,
    partTitle: 'Source Workshop: Black Women\'s Thought from Cooper to Crenshaw (1892–1989)',
  },
  {
    id: 'aasmd-ent-6b',
    question: 'Which statement best describes a change in Black women\'s thought from the National Association of Colored Women (1896) to the Combahee River Collective (1977)?',
    options: ['The focus shifted from defending Black women\'s dignity to abandoning racial politics altogether.', 'The focus shifted from uplift through clubs and respectability to a critique of interlocking systems, including sexuality.', 'The focus shifted from critiques of the law to a sole emphasis on charity and home missions.', 'The focus shifted from independent organizing to full reliance on white feminist groups.'],
    correctIndex: 1,
    explanation: 'The NACW pursued "lifting as we climb" through kindergartens, homes and respectable conduct, while Combahee named race, sex, class and heterosexism as interlocking systems. The continuity was the claim that Black women were overlooked by both race and gender movements.',
    partNumber: 6,
    partTitle: 'Source Workshop: Black Women\'s Thought from Cooper to Crenshaw (1892–1989)',
  },
  // Part 7: AP Review: The Debates Side by Side
  {
    id: 'aasmd-ent-7a',
    question: 'Which example best shows that individuals sometimes crossed sides in these debates?',
    options: ['Washington defended industrial education at Tuskegee throughout his long public career.', 'Garvey promoted race pride and the Black Star Line from 1919 on.', 'Du Bois helped found the integrationist NAACP yet urged voluntary separation in 1934.', 'The Deacons for Defense guarded civil rights workers in Louisiana in 1965.'],
    correctIndex: 2,
    explanation: 'Du Bois moved from the NAACP\'s integration program toward voluntary separate institutions and resigned as editor of The Crisis; Douglass and Malcolm X also shifted at times. The other options show people holding consistent positions.',
    partNumber: 7,
    partTitle: 'AP Review: The Debates Side by Side',
  },
  {
    id: 'aasmd-ent-7b',
    question: 'Garvey and Du Bois became bitter rivals in the 1920s. What shared ground lay beneath their rivalry?',
    options: ['Pan-African unity and race pride', 'A plan to settle all Black Americans in Liberia', 'Faith in the courts as the main path to equality', 'Opposition to any Black-owned business enterprise'],
    correctIndex: 0,
    explanation: 'Both promoted the unity of people of African descent and a free Africa, as Du Bois\'s Pan-African Congresses and Garvey\'s UNIA show. They split over whether Black Americans had a future in the United States, over methods and over leadership.',
    partNumber: 7,
    partTitle: 'AP Review: The Debates Side by Side',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Stay or Go? Emigration, Nationalism and Garvey (1850–1927)' },
    { partNumber: 3, partTitle: 'Comparing Cases: Accommodation vs. Agitation (1892–1915) and the Self-Help Lineage' },
    { partNumber: 4, partTitle: 'Connections: Pan-Africanism, Black Internationalism and the Art-and-Politics Debate (1900–1957)' },
    { partNumber: 5, partTitle: 'Continuity & Change: Self-Defense and Separatism (1850–1966)' },
    { partNumber: 6, partTitle: 'Source Workshop: Black Women\'s Thought from Cooper to Crenshaw (1892–1989)' },
    { partNumber: 7, partTitle: 'AP Review: The Debates Side by Side' },
  ]
}
