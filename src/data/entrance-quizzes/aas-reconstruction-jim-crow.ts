/**
 * Entrance Quiz — Reconstruction & Jim Crow (AP African American Studies)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'aasrjc-ent-1a',
    question: 'In 1892 a Black farmer in Mississippi is turned away from registering after a white registrar rules that he cannot "understand" a section of the state constitution. His experience best illustrates which development?',
    options: ['Congress repealed the voting protections of the 15th Amendment in the 1880s.', 'The Freedmen\'s Bureau set the voting rules in the former Confederate states.', 'The Black Codes of 1865 still barred Black men from voting in Mississippi.', 'States evaded the 15th Amendment with voting rules that never named race.'],
    correctIndex: 3,
    explanation: 'Mississippi\'s 1890 constitution added a literacy test with an "understanding clause" judged by white registrars, which kept Black men from voting without mentioning race. The 15th Amendment was never repealed, and the Bureau closed in 1872.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'aasrjc-ent-1b',
    question: 'The Freedmen\'s Bureau (1865–1872) could not give land to most freedpeople mainly because',
    options: ['Congress had banned it from running schools and hospitals', 'President Johnson restored abandoned land to pardoned owners', 'freedpeople refused to farm land that had belonged to planters', 'the 14th Amendment forbade any transfer of private property'],
    correctIndex: 1,
    explanation: 'Johnson\'s 1865 amnesty returned property to pardoned Confederates, and he ordered the Bureau to give back land it had begun to set aside. The Bureau did run schools, and freedpeople wanted land above all.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Freedom's First Years: Land, Labor and Family (1865–1867)
  {
    id: 'aasrjc-ent-2a',
    question: 'A sharecropping family raises 10 bales of cotton at 500 pounds each. Cotton sells for 8 cents a pound, the landowner takes half, and the merchant\'s account is \\$150 plus a 20% markup. At settlement, the family',
    options: ['clears about \\$20', 'owes the merchant about \\$20', 'clears about \\$200 after paying the store', 'owes the landowner about \\$180 for the year'],
    correctIndex: 0,
    explanation: '5,000 pounds at \\$0.08 is \\$400; the family\'s half is \\$200; the account is \\$150 × 1.2 = \\$180; so \\$20 is left. A drop of a cent or two in the price would have left the family in debt.',
    partNumber: 2,
    partTitle: 'Freedom\'s First Years: Land, Labor and Family (1865–1867)',
  },
  {
    id: 'aasrjc-ent-2b',
    question: 'Under Mississippi\'s 1865 Black Codes, a freedperson fined for vagrancy who could not pay could be hired out to whoever paid the fine. This provision is best understood as',
    options: ['a relief program that found jobs for freedpeople left homeless by the war', 'a federal requirement written into the Civil Rights Act of 1866', 'a use of criminal law to force freedpeople into labor on white terms', 'a measure that applied equally to white and Black workers in practice'],
    correctIndex: 2,
    explanation: 'The codes made unemployment a crime and then sold the labor of those who could not pay, keeping freedpeople a controlled workforce; the same logic led to convict leasing. Congress passed the 1866 act partly in reaction against the codes.',
    partNumber: 2,
    partTitle: 'Freedom\'s First Years: Land, Labor and Family (1865–1867)',
  },
  // Part 3: Black Political Power in Reconstruction (1867–1877)
  {
    id: 'aasrjc-ent-3a',
    question: 'A 1905 textbook describes Reconstruction as a time of "Negro rule." Which evidence most directly contradicts this description?',
    options: ['More than 1,500 Black men held local, state and federal offices during the period.', 'Black men held a majority only in South Carolina\'s lower house, and no state elected a Black governor.', 'Black delegates helped write new state constitutions that created public schools.', 'Hiram Revels and Blanche K. Bruce represented Mississippi in the U.S. Senate.'],
    correctIndex: 1,
    explanation: 'Black officeholding was real but never amounted to control: white Republicans held most top offices, and Black men held a legislative majority only in South Carolina\'s lower house. The other facts are true but show Black participation rather than refuting the claim of domination.',
    partNumber: 3,
    partTitle: 'Black Political Power in Reconstruction (1867–1877)',
  },
  {
    id: 'aasrjc-ent-3b',
    question: 'Black women could neither vote nor hold office during Reconstruction. Which activity best shows them shaping its politics anyway?',
    options: ['Serving as delegates to the 1868 state constitutional conventions', 'Running for local office under the new state constitutions', 'Voting in Republican primaries under the 1867 Reconstruction Acts', 'Packing mass meetings and pressing men to vote Republican'],
    correctIndex: 3,
    explanation: 'Black women attended mass meetings and conventions, debated from the galleries and pressured men to vote Republican, sometimes shunning those who did not. They could not serve as delegates, hold office or vote.',
    partNumber: 3,
    partTitle: 'Black Political Power in Reconstruction (1867–1877)',
  },
  // Part 4: The Overthrow of Reconstruction: Violence, Courts and Compromise (1866–1883)
  {
    id: 'aasrjc-ent-4a',
    question: 'After United States v. Cruikshank (1876), why would a Black family in Louisiana attacked by a private white mob find it hard to bring the attackers to trial in federal court?',
    options: ['The justices read the 14th Amendment as binding governments, not people.', 'The Court had declared the 14th Amendment void in the former Confederacy.', 'Congress had repealed every Enforcement Act after the Compromise of 1877.', 'Federal courts could hear only cases that involved interstate commerce.'],
    correctIndex: 0,
    explanation: 'Cruikshank overturned the Colfax convictions by holding that the 14th Amendment restrains state action, leaving private violence to state governments that would not prosecute it. The Court narrowed the amendment rather than voiding it.',
    partNumber: 4,
    partTitle: 'The Overthrow of Reconstruction: Violence, Courts and Compromise (1866–1883)',
  },
  {
    id: 'aasrjc-ent-4b',
    question: 'In 1875 Mississippi\'s Republican governor asked for federal troops before the state elections. Federal officials declined to send them, replying that the Northern public had grown tired of yearly autumn outbreaks in the South. Which statement best explains the election\'s outcome?',
    options: ['Black voters stayed home because the 15th Amendment had not yet been ratified.', 'Northern Republicans sent new troops, and Democrats lost every county they contested.', 'Democratic rifle clubs used violence unchecked by Washington, and Democrats swept the vote.', 'Mississippi adopted its literacy test that year, which kept Black men from registering.'],
    correctIndex: 2,
    explanation: 'Under the "Mississippi Plan," armed Democratic clubs broke up Republican meetings and threatened Black voters, and without federal troops Democrats won in November 1875. The literacy test came in 1890, and the 15th Amendment dated from 1870.',
    partNumber: 4,
    partTitle: 'The Overthrow of Reconstruction: Violence, Courts and Compromise (1866–1883)',
  },
  // Part 5: Building Jim Crow, 1877–1910
  // source: Plessy v. Ferguson, 163 U.S. 537 (1896), majority opinion of Justice Henry Billings Brown; verbatim
  {
    id: 'aasrjc-ent-5a',
    question: '"We consider the underlying fallacy of the plaintiff\'s argument to consist in the assumption that the enforced separation of the two races stamps the colored race with a badge of inferiority. If this be so, it is not by reason of anything found in the act, but solely because the colored race chooses to put that construction upon it."\n— Plessy v. Ferguson (1896), majority opinion\n\nIn this passage, the Court argues that',
    options: ['segregation laws violated the 14th Amendment but could stand until Congress acted', 'Louisiana must provide railroad cars of equal quality or the law would fall', 'Homer Plessy could not be classified as belonging to either race under the act', 'any stigma came from Black citizens\' own interpretation, not from the statute'],
    correctIndex: 3,
    explanation: 'Justice Brown denied that the Separate Car Act itself implied inferiority and blamed any such meaning on Black people\'s reading of it, which let the Court uphold "separate but equal." Harlan\'s dissent rejected that reasoning.',
    partNumber: 5,
    partTitle: 'Building Jim Crow, 1877–1910',
  },
  {
    id: 'aasrjc-ent-5b',
    question: 'Louisiana registered voters: 1896, about 130,000 Black and 164,000 white; 1900, about 5,000 Black and 125,000 white.\n\nWhich statement about the change is accurate?',
    options: ['Black voters stayed about half of all registrants in both years.', 'Black share of registrants fell from about 44% to about 4%.', 'White registration rose as Black registration fell to near zero.', 'Both groups lost about the same number of registered voters.'],
    correctIndex: 1,
    explanation: '130,000 of 294,000 is about 44%, and 5,000 of 130,000 is about 4%. White registration fell by about 39,000 while Black registration fell by about 125,000, a drop that straddles the 1898 constitution.',
    partNumber: 5,
    partTitle: 'Building Jim Crow, 1877–1910',
  },
  // Part 6: Source Workshop: Testimony, Protest and Accommodation
  // source: Booker T. Washington, Atlanta Exposition Address, 1895, as printed in Up from Slavery, 1901; verbatim
  {
    id: 'aasrjc-ent-6a',
    question: '"The wisest among my race understand that the agitation of questions of social equality is the extremest folly, and that progress in the enjoyment of all the privileges that will come to us must be the result of severe and constant struggle rather than of artificial forcing. ... The opportunity to earn a dollar in a factory just now is worth infinitely more than the opportunity to spend a dollar in an opera-house."\n— Booker T. Washington, Atlanta address (1895)\n\nWhich statement best contrasts this position with Ida B. Wells\'s in Southern Horrors (1892)?',
    options: ['Washington set aside protest for economic gains, while Wells openly protested lynching and urged self-defense.', 'Washington demanded integrated railroad cars, while Wells accepted separate ones for now.', 'Washington called for a federal antilynching law, while Wells urged Black voters to stay home.', 'Washington urged migration to Kansas, while Wells urged Black families to remain in Memphis.'],
    correctIndex: 0,
    explanation: 'Washington told a white business audience that pressing for social equality was folly and that economic progress came first, while Wells exposed lynching\'s false pretexts and advised armed self-defense. Wells herself left Memphis after a mob destroyed her paper.',
    partNumber: 6,
    partTitle: 'Source Workshop: Testimony, Protest and Accommodation',
  },
  // source: original
  {
    id: 'aasrjc-ent-6b',
    question: 'The following description, written for this question, summarizes a kind of visual source: an 1868 cartoon in a Democratic newspaper shows Black legislators lounging with their feet on desks while a white taxpayer weeps outside. How is this source most useful to a historian?',
    options: ['As a record of how Black legislators behaved during sessions', 'As proof that Southern taxes fell under Republican rule', 'As evidence of opponents\' propaganda against Reconstruction', 'As a neutral report printed for readers of both parties'],
    correctIndex: 2,
    explanation: 'A partisan cartoon shows how white Democrats portrayed Black officeholders to turn voters against Reconstruction, the image later repeated by the Dunning School. It is not reliable evidence of how legislators actually behaved.',
    partNumber: 6,
    partTitle: 'Source Workshop: Testimony, Protest and Accommodation',
  },
  // Part 7: Synthesis and AP Review
  {
    id: 'aasrjc-ent-7a',
    question: 'Historians say Reconstruction was overthrown through three channels: violence, the courts and Northern politics. Which set of evidence shows all three?',
    options: ['The Black Codes, the Freedmen\'s Bureau and the Southern Homestead Act', 'The 13th, 14th and 15th Amendments, ratified from 1865 to 1870', 'Field Order 15, Johnson\'s pardons and the Edisto Island petition', 'The Colfax massacre, Cruikshank and the Democrats\' 1874 House victory'],
    correctIndex: 3,
    explanation: 'Colfax was paramilitary violence, Cruikshank narrowed the 14th Amendment, and the 1874 elections showed Northern voters turning away after the Panic of 1873. The other sets concern the early land and labor struggles or the amendments themselves.',
    partNumber: 7,
    partTitle: 'Synthesis and AP Review',
  },
  {
    id: 'aasrjc-ent-7b',
    question: 'A historian divides the retreat from Reconstruction into two phases. Which pair best represents them?',
    options: ['The overthrow of Republican state governments (1873–1877) and the legal construction of Jim Crow (1890–1910)', 'The Black Codes (1865–1866) and the Reconstruction Acts (1867)', 'The Freedmen\'s Bureau (1865–1872) and the Exoduster movement (1879)', 'The 15th Amendment (1870) and the Civil Rights Act (1875)'],
    correctIndex: 0,
    explanation: 'Violence and federal withdrawal toppled the Reconstruction governments by 1877, and from 1890 states wrote disfranchisement and segregation into law. The other pairs include measures that advanced rather than reversed Reconstruction.',
    partNumber: 7,
    partTitle: 'Synthesis and AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Freedom\'s First Years: Land, Labor and Family (1865–1867)' },
    { partNumber: 3, partTitle: 'Black Political Power in Reconstruction (1867–1877)' },
    { partNumber: 4, partTitle: 'The Overthrow of Reconstruction: Violence, Courts and Compromise (1866–1883)' },
    { partNumber: 5, partTitle: 'Building Jim Crow, 1877–1910' },
    { partNumber: 6, partTitle: 'Source Workshop: Testimony, Protest and Accommodation' },
    { partNumber: 7, partTitle: 'Synthesis and AP Review' },
  ]
}
