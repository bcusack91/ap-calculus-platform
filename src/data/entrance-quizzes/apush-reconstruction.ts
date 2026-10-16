/**
 * Entrance Quiz — Reconstruction (AP US History)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'apushrec-ent-1a',
    question: 'A Black man living in South Carolina in 1868 could most likely do which of the following that he could not have done under the state government Johnson restored in 1865?',
    options: ['Vote for delegates and officials under a new constitution', 'Claim forty acres of farmland guaranteed to him by federal statute', 'Enroll his children in public schools integrated by federal order', 'Sue Klan members under the Civil Rights Act passed in 1875'],
    correctIndex: 0,
    explanation: 'The Reconstruction Acts of 1867 required new state constitutions written by conventions elected by Black and white men, and Black men voted and held office from 1868. No federal law guaranteed land, schools were mostly segregated, and the 1875 act came years later.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'apushrec-ent-1b',
    question: 'The removal of federal troops from Southern statehouses in 1877 most directly led to',
    options: ['the ratification of the Fifteenth Amendment by the Southern states', 'the founding of the Freedmen\'s Bureau to aid formerly enslaved people', 'the fall of the last Republican state governments', 'the readmission of Tennessee as the first restored Confederate state'],
    correctIndex: 2,
    explanation: 'Without troops, the Republican governments of South Carolina and Louisiana collapsed and Democrats took over. The Fifteenth Amendment was ratified in 1870, the Freedmen\'s Bureau dated from 1865, and Tennessee was readmitted in 1866.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: The Fight Over Who Controls Reconstruction, 1863–1870
  {
    id: 'apushrec-ent-2a',
    question: 'Which development did the most to unite moderate Republicans with the Radicals against Andrew Johnson in 1866?',
    options: ['His decision to confiscate planters\' estates and divide them among freedpeople', 'His support for Black male suffrage as a condition of readmitting the states', 'His vetoes of a Freedmen\'s Bureau extension and of the Civil Rights Act of 1866', 'His refusal to pardon any high Confederate officials or wealthy planters at all'],
    correctIndex: 2,
    explanation: 'Johnson vetoed even moderate measures to protect freedpeople, and Congress overrode him on the Civil Rights Act in April 1866, the first time moderates and Radicals acted together against him. He returned land to planters, opposed Black suffrage, and pardoned thousands of high Confederates.',
    partNumber: 2,
    partTitle: 'The Fight Over Who Controls Reconstruction, 1863–1870',
  },
  // source: Civil Rights Act of 1866, Section 1 (14 Stat. 27); verbatim
  {
    id: 'apushrec-ent-2b',
    question: '"All persons born in the United States and not subject to any foreign power, excluding Indians not taxed, are hereby declared to be citizens of the United States."\n— Civil Rights Act of 1866, Section 1\n\nRepublicans sent the Fourteenth Amendment to the states soon after passing this law mainly in order to',
    options: ['extend the law\'s protections to women seeking the right to vote', 'give the president sole power to enforce the law through the army', 'replace the law with a narrower definition of national citizenship', 'put its guarantees beyond the reach of a later Congress or court'],
    correctIndex: 3,
    explanation: 'A statute could be repealed or struck down, so Republicans wrote birthright citizenship and equal protection into the Constitution itself. The amendment added the word "male," gave enforcement power to Congress rather than the president, and kept the same broad definition of citizenship.',
    partNumber: 2,
    partTitle: 'The Fight Over Who Controls Reconstruction, 1863–1870',
  },
  // Part 3: Freedom in Practice: Freedpeople's Voices and the Land Question
  {
    id: 'apushrec-ent-3a',
    question: 'In 1865 many freedpeople left white-controlled churches, searched for relatives who had been sold away, and refused to work in gangs under overseers. These actions most directly show that freedpeople',
    options: ['defined liberty as authority over their own families, faith and labor', 'hoped to restore the protection that planters had offered under slavery', 'planned to leave the South for colonies in West Africa as soon as possible', 'relied on the Freedmen\'s Bureau to make their decisions for them'],
    correctIndex: 0,
    explanation: 'Independent churches, reunited families and the rejection of gang labor were ways freedpeople claimed authority over their own lives. They acted on their own initiative rather than waiting for the Bureau, and few sought either the old plantation order or emigration.',
    partNumber: 3,
    partTitle: 'Freedom in Practice: Freedpeople\'s Voices and the Land Question',
  },
  {
    id: 'apushrec-ent-3b',
    question: 'In the late 1860s, Black Southerners placed thousands of "Information Wanted" notices in newspapers asking for news of particular relatives. A historian would find these notices most useful as evidence that',
    options: ['most freedpeople moved to Northern cities within a few years of emancipation', 'freedpeople preferred wage work in towns to farming land of their own', 'freedpeople worked to rebuild families that slavery had torn apart', 'the Freedmen\'s Bureau supplied all of the aid that freedpeople needed'],
    correctIndex: 2,
    explanation: 'The notices record people searching for spouses, children and parents sold away under slavery, which shows family reunification as a central goal of freedom. They say nothing about migration, work preferences or the adequacy of Bureau aid.',
    partNumber: 3,
    partTitle: 'Freedom in Practice: Freedpeople\'s Voices and the Land Question',
  },
  // Part 4: From Slavery to Sharecropping and the Reconstruction Governments
  {
    id: 'apushrec-ent-4a',
    question: 'A sharecropping family\'s half of its cotton crop sold for \\$150. During the year the family had bought \\$110 of supplies on credit from a merchant who charged 20 percent interest on the advance. How much did the family have left at settlement?',
    options: ['\\$40', '\\$128', '\\$10', '\\$18'],
    correctIndex: 3,
    explanation: 'Interest is 20 percent of \\$110, or \\$22, so the family owed \\$132 and kept \\$150 − \\$132 = \\$18. Forgetting the interest gives \\$40, charging interest on the whole crop gives \\$10, and subtracting only the interest gives \\$128.',
    partNumber: 4,
    partTitle: 'From Slavery to Sharecropping and the Reconstruction Governments',
  },
  {
    id: 'apushrec-ent-4b',
    question: 'White Democrats regained control of Virginia and Tennessee by about 1870, but not of South Carolina and Louisiana until 1877. Which factor best explains the difference?',
    options: ['Klan violence was stronger in Virginia and Tennessee than anywhere else', 'Black majorities or near majorities lived in South Carolina and Louisiana', 'South Carolina and Louisiana had rejoined the Union before Tennessee', 'The Panic of 1873 hit Virginia and Tennessee years before other states'],
    correctIndex: 1,
    explanation: 'States with white majorities were redeemed early through elections plus intimidation, while states with Black majorities held out until organized violence and the withdrawal of federal troops. Tennessee was readmitted first, in 1866, and the Panic of 1873 came after Virginia and Tennessee were already redeemed.',
    partNumber: 4,
    partTitle: 'From Slavery to Sharecropping and the Reconstruction Governments',
  },
  // Part 5: The Retreat from Reconstruction, Women's Suffrage, and Historians' Debates
  {
    id: 'apushrec-ent-5a',
    question: 'Which of the following best reflects the strategy of the American Woman Suffrage Association after 1869?',
    options: ['Opposing the Fifteenth Amendment unless it was rewritten to include women', 'Campaigning for women\'s votes state by state and backing the Fifteenth Amendment', 'Refusing to cooperate with any organization led by former abolitionists', 'Demanding that Black men wait to vote until women had won the ballot'],
    correctIndex: 1,
    explanation: 'Lucy Stone\'s association accepted that Black men\'s suffrage should come first and campaigned for women\'s votes in individual states. Opposing the amendment unless women were included was the position of Stanton and Anthony\'s National Woman Suffrage Association, and the American association\'s own leaders were former abolitionists.',
    partNumber: 5,
    partTitle: 'The Retreat from Reconstruction, Women\'s Suffrage, and Historians\' Debates',
  },
  {
    id: 'apushrec-ent-5b',
    question: 'Which evidence would most weaken the Dunning School\'s claim that Reconstruction governments were a "tragic era" of misrule?',
    options: ['State debts rose as legislatures subsidized railroad construction', 'Some officials accepted bribes in connection with railroad charters', 'Democrats won control of the U.S. House in the elections of 1874', 'The new legislatures created the South\'s first statewide public education systems'],
    correctIndex: 3,
    explanation: 'Building statewide public school systems was a lasting achievement that cuts against the picture of incompetent misrule. Rising debts and bribery are the evidence Dunning\'s followers stressed, and the 1874 election says nothing about the quality of Southern governments.',
    partNumber: 5,
    partTitle: 'The Retreat from Reconstruction, Women\'s Suffrage, and Historians\' Debates',
  },
  // Part 6: Problem-Solving Workshop
  // source: Justice John Marshall Harlan, dissent, Plessy v. Ferguson, 163 U.S. 537 (1896); verbatim
  {
    id: 'apushrec-ent-6a',
    question: '"The arbitrary separation of citizens, on the basis of race, while they are on a public highway, is a badge of servitude wholly inconsistent with the civil freedom and the equality before the law established by the Constitution."\n— Justice John Marshall Harlan, dissent in Plessy v. Ferguson, 1896\n\nHarlan\'s argument most directly drew on which earlier development?',
    options: ['The Compromise of 1877 and the withdrawal of federal troops', 'The Fourteenth Amendment\'s limits on discriminatory state laws', 'The vagrancy provisions of the Mississippi Black Code of 1865', 'The Tenure of Office Act and the impeachment of Andrew Johnson'],
    correctIndex: 1,
    explanation: '"Equality before the law established by the Constitution" points to the Fourteenth Amendment, which forbade states to deny any person equal protection. The other choices either undermined that equality or had nothing to do with it.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'apushrec-ent-6b',
    question: 'An SAQ asks: "Briefly explain one way freedpeople shaped Reconstruction." Which response would earn the point?',
    options: ['Black voters elected hundreds of officials who helped found public schools, shaping state policy', 'Freedpeople were helped by the Freedmen\'s Bureau, a federal agency that Congress created in 1865', 'Freedpeople wrote the Black Codes in 1865 to protect the labor contracts they signed with planters', 'Freedpeople received forty acres each under federal law, which made most of them landowners'],
    correctIndex: 0,
    explanation: 'This response names a specific action by freedpeople and explains how it changed policy. The Bureau answer treats freedpeople as passive recipients, Southern white legislatures wrote the Black Codes, and no federal law gave freedpeople forty acres.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: AP Review
  {
    id: 'apushrec-ent-7a',
    question: 'Why do many historians describe the Compromise of 1877 as the end of a retreat from Reconstruction rather than its cause?',
    options: ['Northern resolve had been fading from 1872 on amid scandal, depression and narrow court rulings', 'Federal troops had already left every former Confederate state by 1870', 'The Compromise restored Republican governments that Democrats had overthrown in 1876', 'The Supreme Court had already ordered the troops withdrawn in Plessy v. Ferguson'],
    correctIndex: 0,
    explanation: 'The Liberal Republican revolt, Grant-era scandals, the Panic of 1873, Democratic gains in 1874 and rulings such as Cruikshank had already weakened Reconstruction before 1877. Troops remained in a few states until 1877, the Compromise ended Republican governments, and Plessy came in 1896.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'apushrec-ent-7b',
    question: 'Which evidence best supports the argument that Reconstruction left a lasting constitutional legacy despite its political defeat?',
    options: ['Mississippi\'s constitution of 1890 imposed a poll tax and literacy test', 'The Supreme Court upheld state segregation laws in Plessy v. Ferguson', 'Brown v. Board of Education rested on the equal protection clause', 'The Dawes Act of 1887 divided reservation land into individual plots'],
    correctIndex: 2,
    explanation: 'The Court relied on the Fourteenth Amendment\'s equal protection clause to strike down school segregation in 1954, showing that Reconstruction\'s amendments outlived its politics. Mississippi\'s constitution and Plessy show the retreat, and the Dawes Act concerns Native policy.',
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
    { partNumber: 2, partTitle: 'The Fight Over Who Controls Reconstruction, 1863–1870' },
    { partNumber: 3, partTitle: 'Freedom in Practice: Freedpeople\'s Voices and the Land Question' },
    { partNumber: 4, partTitle: 'From Slavery to Sharecropping and the Reconstruction Governments' },
    { partNumber: 5, partTitle: 'The Retreat from Reconstruction, Women\'s Suffrage, and Historians\' Debates' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
