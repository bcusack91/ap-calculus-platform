/**
 * Entrance Quiz — Civil Rights (AP US Government and Politics) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: equal protection from separate-but-equal to Brown; constitutional vs. statutory sources
  {
    id: 'gov-civil-rights-ent-1a',
    question: "In 1896 the Supreme Court upheld segregated railroad cars as long as the facilities were equal. In 1954 it struck down segregated public schools. What was the key change in the Court's reasoning?",
    options: ["It held that states could keep segregation only with Congress's approval", "It held that separating students by race is itself unequal treatment", "It held that the Equal Protection Clause now covered private schools", "It held that school segregation broke the 15th Amendment's guarantees"],
    correctIndex: 1,
    explanation: "*Brown v. Board of Education* rejected the separate-but-equal idea, holding that separate educational facilities are inherently unequal under the Equal Protection Clause even when buildings and resources are similar. The ruling concerned public schools run by states, not private ones.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'gov-civil-rights-ent-1b',
    question: "Which of the following protections comes from an act of Congress rather than from the text of the Constitution?",
    options: ["A ban on states denying citizens the vote on account of sex", "A ban on charging a poll tax to vote in federal elections", "A guarantee that no state may deny equal protection of the laws", "A ban on sex discrimination in federally funded school sports"],
    correctIndex: 3,
    explanation: "Title IX of the Education Amendments of 1972 is a federal statute barring sex discrimination in federally funded education programs, including athletics. The other protections come from the 19th, 24th, and 14th Amendments.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Key Processes: movement strategies; affirmative action
  {
    id: 'gov-civil-rights-ent-2a',
    question: "The civil rights movement combined litigation, direct action, voter registration, and lobbying. Which of the following is an example of the litigation strategy?",
    options: ["NAACP lawyers suing to admit Black students to segregated law schools", "College students sitting in at whites-only lunch counters until served", "Volunteers registering Black voters in Mississippi during the summer", "Activists pressing members of Congress to pass a public accommodations bill"],
    correctIndex: 0,
    explanation: "The NAACP Legal Defense Fund brought a series of court challenges to segregated graduate and law schools that laid the groundwork for *Brown v. Board of Education*. Sit-ins were direct action, registration drives were electoral work, and pressing Congress was lobbying.",
    partNumber: 2,
    partTitle: "Key Processes",
  },
  {
    id: 'gov-civil-rights-ent-2b',
    question: "A public university announces that, starting next year, it will award extra admissions points to applicants based on their race in order to build a more diverse class. Based on the Supreme Court's 2023 ruling on college admissions, how would this policy most likely fare if challenged?",
    options: ["It would be upheld, since diversity justifies any racial preference", "It would be upheld, since admissions are a reserved power of the states", "It would be struck down as a violation of equal protection", "It would be struck down as a violation of the commerce clause"],
    correctIndex: 2,
    explanation: "In 2023 the Court held that race-conscious admissions at Harvard and the University of North Carolina violated equal protection and Title VI, effectively ending the use of race as an admissions factor. State universities remain bound by the Fourteenth Amendment.",
    partNumber: 2,
    partTitle: "Key Processes",
  },

  // Part 3 — Patterns & Examples: voting rights, women's rights, Article V
  {
    id: 'gov-civil-rights-ent-3a',
    question: "In 1944 the Court struck down a party's whites-only primary election; in 1964 an amendment banned poll taxes in federal elections; and in 1965 Congress suspended literacy tests in many Southern states. What do these developments have in common?",
    options: ["Each one moved election administration from the states to Congress", "Each one lowered the voting age for citizens in federal elections", "Each one extended the right to vote to women for the first time", "Each one removed a legal device used to keep Black citizens from voting"],
    correctIndex: 3,
    explanation: "White primaries, poll taxes, and literacy tests were tools used under Jim Crow to disenfranchise Black voters, and the Court, the amendment process, and the Voting Rights Act each dismantled one of them. States still administer most elections.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },
  {
    id: 'gov-civil-rights-ent-3b',
    question: "The Equal Rights Amendment, which would bar denying equal rights on account of sex, passed both chambers of Congress by two-thirds in 1972, yet it has never been certified as part of the Constitution. Which explanation best fits?",
    options: ["The President vetoed it after Congress passed it", "Too few states ratified it before the deadline", "The Supreme Court struck it down as unconstitutional", "A national referendum on the amendment failed to pass"],
    correctIndex: 1,
    explanation: "An amendment needs ratification by three-fourths of the states, and the ERA did not reach 38 ratifications within the deadline Congress set; the status of later ratifications remains disputed. Presidents have no role in the amendment process, and there are no national referendums.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },

  // Part 4 — Connections & Interactions: interest groups, Congress, and the courts
  {
    id: 'gov-civil-rights-ent-4a',
    question: "In the 1940s and early 1950s, the NAACP concentrated on lawsuits rather than on lobbying Congress for civil rights laws. Which explanation best accounts for this choice?",
    options: ["Federal courts were then required to rule for civil rights plaintiffs", "Lobbying Congress was illegal for organizations of that time", "Southern senators could block bills, making courts the better venue", "Congress had no constitutional power to pass civil rights laws then"],
    correctIndex: 2,
    explanation: "Southern senators used the filibuster and seniority-based committee chairs to stop civil rights bills, so the courts, which are insulated from majorities, offered a more promising access point. Congress did have power to legislate, as the 1964 and 1965 acts later showed.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },
  {
    id: 'gov-civil-rights-ent-4b',
    question: "After a Supreme Court justice suggested that the Court reconsider its precedent protecting same-sex marriage, Congress passed a law requiring states to recognize same-sex and interracial marriages legally performed in other states. What does this sequence illustrate?",
    options: ["Lawmakers can secure rights by statute without relying on the Court", "Congress can overturn Supreme Court precedents by passing ordinary laws", "The Court must approve any statute that concerns rights it has recognized", "States may refuse to recognize marriages unless the Court orders them to"],
    correctIndex: 0,
    explanation: "The Respect for Marriage Act of 2022 gave statutory protection to marriage recognition so that it would not depend solely on a court precedent. Congress cannot overturn a constitutional ruling by statute, but it can add protections of its own.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },

  // Part 5 — Change Over Time: Reconstruction to Jim Crow; the Voting Rights Act's effect
  {
    id: 'gov-civil-rights-ent-5a',
    question: "After the Compromise of 1877, federal troops withdrew from the South. Which development most directly followed over the next two decades?",
    options: ["Congress passed the Voting Rights Act to protect Black voters", "Former Confederate states adopted Jim Crow segregation laws", "The Supreme Court ended segregation in public transportation", "The 15th Amendment was adopted to protect voting by race"],
    correctIndex: 1,
    explanation: "With federal enforcement gone, Southern states built Jim Crow through segregation laws, literacy tests, and poll taxes, and in 1896 the Court upheld segregation under the separate-but-equal doctrine. The 15th Amendment came earlier, in 1870, and the Voting Rights Act much later.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },
  {
    id: 'gov-civil-rights-ent-5b',
    question: "Data from a hypothetical Deep South county:\n- Share of voting-age Black residents registered to vote, 1964: 8 percent\n- Share registered, 1968: 55 percent\nWhich development best explains this change?",
    options: ["The 19th Amendment extended voting rights to women", "The 26th Amendment lowered the voting age to 18", "Federal courts ordered states to hold all-mail elections", "A 1965 law suspended literacy tests in covered areas"],
    correctIndex: 3,
    explanation: "The Voting Rights Act of 1965 suspended literacy tests and sent federal examiners to register voters in covered Southern jurisdictions, producing a sharp rise in Black registration. The 19th Amendment came in 1920 and the 26th in 1971.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },

  // Part 6 — Problem-Solving Workshop: the five-step framework; required documents
  {
    id: 'gov-civil-rights-ent-6a',
    question: "A privately owned restaurant that serves many interstate travelers refuses to seat Black customers, and a customer sues under the Equal Protection Clause. Applying the framework step that asks whether there is state action, what is the best advice?",
    options: ["File under the Civil Rights Act of 1964, which Congress based on its commerce power", "Sue under the Fifteenth Amendment, since the refusal denies a voting right", "Drop the case, since federal law cannot reach any privately owned business", "Continue under equal protection, since that clause reaches all businesses"],
    correctIndex: 0,
    explanation: "The Fourteenth Amendment restricts only government action, so a private restaurant is reached instead through Title II of the Civil Rights Act of 1964, which Congress based on its commerce power. The Fifteenth Amendment concerns voting.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },
  {
    id: 'gov-civil-rights-ent-6b',
    question: "A short speech delivered at a Civil War battlefield cemetery describes the nation as \"conceived in Liberty, and dedicated to the proposition that all men are created equal\" and calls for \"a new birth of freedom.\" Which required document is this?",
    options: ["The Letter from a Birmingham Jail", "The Emancipation Proclamation", "The Gettysburg Address", "The Declaration of Independence"],
    correctIndex: 2,
    explanation: "Lincoln's Gettysburg Address (1863) reframes the war as a test of the Declaration's principle of equality and calls for a new birth of freedom. The Declaration itself is the source of the equality language but is not a battlefield speech.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },

  // Part 7 — AP Review: required case comparison; de jure vs. de facto
  {
    id: 'gov-civil-rights-ent-7a',
    question: "In a 1950 case that is not on the required list, the Court ordered a state law school to admit a Black applicant, ruling that a hastily created separate law school could not offer an equal legal training. Which required case later applied similar reasoning to public elementary and secondary schools?",
    options: ["*Shaw v. Reno*", "*Brown v. Board of Education*", "*Baker v. Carr*", "*Gideon v. Wainwright*"],
    correctIndex: 1,
    explanation: "*Brown v. Board of Education* (1954) extended the reasoning of the graduate-school cases, holding that segregated public schools are inherently unequal under the Equal Protection Clause. *Shaw v. Reno* concerns race in drawing election districts.",
    partNumber: 7,
    partTitle: "AP Review",
  },
  {
    id: 'gov-civil-rights-ent-7b',
    question: "A school district has never passed a law assigning students by race, but its schools are sharply separated by race because of neighborhood housing patterns. Which term describes this situation?",
    options: ["De jure segregation", "Separate but equal", "Majority-minority districting", "De facto segregation"],
    correctIndex: 3,
    explanation: "De facto segregation arises from social and economic patterns rather than from law. De jure segregation is segregation required by law, as under Jim Crow.",
    partNumber: 7,
    partTitle: "AP Review",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Key Processes" },
    { partNumber: 3, partTitle: "Patterns & Examples" },
    { partNumber: 4, partTitle: "Connections & Interactions" },
    { partNumber: 5, partTitle: "Change Over Time" },
    { partNumber: 6, partTitle: "Problem-Solving Workshop" },
    { partNumber: 7, partTitle: "AP Review" },
  ]
}
