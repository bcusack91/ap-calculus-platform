/**
 * Entrance Quiz — The Federal Judiciary (AP US Government and Politics) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: Article III, jurisdiction, judicial review, activism vs. restraint
  {
    id: 'gov-judiciary-ent-1a',
    question: "Which of the following cases would the Supreme Court hear under its original jurisdiction rather than on appeal?",
    options: ["A defendant's challenge to a conviction in a federal district court", "A lawsuit between two states over rights to water from a shared river", "A state supreme court ruling on a question about freedom of speech", "A federal appeals court decision interpreting a federal environmental law"],
    correctIndex: 1,
    explanation: "Article III gives the Supreme Court original jurisdiction in cases involving ambassadors and those in which a state is a party, such as a dispute between two states. Almost all of its other cases, including those from lower federal courts and state supreme courts, reach it on appeal.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'gov-judiciary-ent-1b',
    question: "The Supreme Court strikes down a popular state law and, to do so, overturns one of its own precedents that had stood for 40 years. Critics of the ruling would most likely describe it as an example of which approach?",
    options: ["Judicial restraint", "Stare decisis", "Original jurisdiction", "Judicial activism"],
    correctIndex: 3,
    explanation: "Judicial activism describes rulings that overturn precedent or strike down acts of the elected branches. Judicial restraint and stare decisis point the other way, toward deferring to legislatures and following precedent.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Key Processes: opinions, amicus briefs, precedent
  {
    id: 'gov-judiciary-ent-2a',
    question: "A justice agrees that the defendant should win the case but writes separately, arguing that the decision should rest on the First Amendment rather than on the due process reasoning the majority used. What kind of opinion has the justice written?",
    options: ["A concurring opinion", "A dissenting opinion", "A plurality opinion", "A per curiam opinion"],
    correctIndex: 0,
    explanation: "A concurring opinion agrees with the Court's result but offers different reasoning. A dissent disagrees with the result, and a per curiam opinion is an unsigned opinion of the whole Court.",
    partNumber: 2,
    partTitle: "Key Processes",
  },
  {
    id: 'gov-judiciary-ent-2b',
    question: "Before the Supreme Court hears a challenge to a state firearms law, a national gun-rights organization and a gun-safety organization each file written arguments with the Court, though neither group is a party to the case. What are these filings, and what do they show?",
    options: ["Writs of certiorari, showing that interest groups decide which cases the Court hears", "Dissenting opinions, showing that outside groups may vote on the Court's final decision", "Amicus curiae briefs, showing that interest groups use the courts to try to influence policy", "Class-action complaints, showing that groups must join a case before they may comment"],
    correctIndex: 2,
    explanation: "Amicus curiae, or friend-of-the-court, briefs let interest groups that are not parties present arguments and information to the justices, one of the main ways groups try to shape policy through the courts. The justices alone decide which cases to hear and how to rule.",
    partNumber: 2,
    partTitle: "Key Processes",
  },

  // Part 3 — Patterns & Examples: Court eras; activism across ideologies
  {
    id: 'gov-judiciary-ent-3a',
    question: "In 1905 the Supreme Court struck down a state law limiting bakers' working hours as a violation of liberty of contract. In the 1960s it struck down state practices that denied rights to criminal defendants. What do these rulings together suggest?",
    options: ["Judicial activism has been used only by courts with liberal majorities", "Judicial activism can serve either conservative or liberal policy goals", "Judicial activism ended once the Court deferred to states", "The Court has protected economic rights in every era since 1905"],
    correctIndex: 1,
    explanation: "The Court of the early 1900s struck down economic regulations to protect business, while the Warren Court struck down state practices to protect individual rights; both actively overrode elected governments for opposite purposes. Activism is a description of method, not of ideology.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },
  {
    id: 'gov-judiciary-ent-3b',
    question: "A historian describes one Supreme Court era as a \"rights revolution\" in which the Court applied most of the Bill of Rights to the states and greatly expanded the rights of people accused of crimes. Which required case is most characteristic of that era?",
    options: ["*McCulloch v. Maryland*", "*United States v. Lopez*", "*Citizens United v. FEC*", "*Gideon v. Wainwright*"],
    correctIndex: 3,
    explanation: "*Gideon v. Wainwright* (1963), which required states to provide lawyers to poor felony defendants, is a hallmark of the Warren Court's rights revolution. *McCulloch* belongs to the Marshall Court, *Lopez* to the Rehnquist Court, and *Citizens United* to the Roberts Court.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },

  // Part 4 — Connections & Interactions: checks on the Court; courts and the bureaucracy
  {
    id: 'gov-judiciary-ent-4a',
    question: "The Supreme Court rules that a federal law lowering the voting age to 18 in state elections exceeds Congress's constitutional power. Within a year, three-fourths of the states approve a change to the Constitution setting a voting age of 18 in all elections. Which check on the judiciary does this sequence illustrate?",
    options: ["An amendment that overrides the Court's interpretation", "A new statute that rewrites a law the Court had interpreted too narrowly", "A law that removes the Court's power to hear appeals on voting cases", "A plan to add justices so that the Court's majority will change"],
    correctIndex: 0,
    explanation: "When the Court rests a ruling on the Constitution, only an amendment can override it, as the 26th Amendment did here. A new statute can override only a ruling about what a statute means.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },
  {
    id: 'gov-judiciary-ent-4b',
    question: "A trade association sues a federal agency, arguing that a new rule goes beyond what the agency's enabling statute authorizes, and a federal court sets the rule aside. What does this episode best illustrate?",
    options: ["Agencies may issue rules only after a court approves them in advance", "Federal courts may write new regulations when an agency's rule fails", "Courts check the bureaucracy and give groups another point of access", "Interest groups may lobby Congress but are barred from suing agencies"],
    correctIndex: 2,
    explanation: "Lawsuits claiming that an agency exceeded its statute let courts hold the bureaucracy accountable, and they give groups that lost at the agency another place to press their case. Courts review rules after they are issued; they do not write regulations themselves.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },

  // Part 5 — Change Over Time: Taney Court, Reconstruction, Gilded Age narrowing
  {
    id: 'gov-judiciary-ent-5a',
    question: "In 1857 the Supreme Court held that African Americans could not be citizens of the United States. Which development most directly overturned that holding?",
    options: ["The 13th Amendment, abolishing slavery", "The 14th Amendment, defining national citizenship", "The 15th Amendment, barring race limits on citizens' votes", "The Civil Rights Act of 1964"],
    correctIndex: 1,
    explanation: "The 14th Amendment's Citizenship Clause made all persons born or naturalized in the United States citizens, directly reversing the 1857 holding. The 13th Amendment ended slavery but did not define citizenship.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },
  {
    id: 'gov-judiciary-ent-5b',
    question: "Between 1873 and 1896, the Supreme Court narrowly read the 14th Amendment, struck down a federal civil rights law, and upheld \"separate but equal\" segregation. Which statement best describes the Court's role in this period?",
    options: ["It led the expansion of civil rights after the Civil War", "It stayed out of race questions and left them to Congress", "It weakened Reconstruction's protections and enabled Jim Crow", "It applied the full Bill of Rights to the Southern states"],
    correctIndex: 2,
    explanation: "Gilded Age rulings, ending with the 1896 separate-but-equal decision, limited the Reconstruction Amendments and let states build legal segregation. Incorporation of the Bill of Rights against the states came much later.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },

  // Part 6 — Problem-Solving Workshop: five-step framework; required documents
  {
    id: 'gov-judiciary-ent-6a',
    question: "An analyst writing about a campaign-finance ruling notes that, in the years after the decision, spending by outside groups that are independent of candidates rose sharply. Which step of the five-step framework for analyzing a Supreme Court ruling is the analyst carrying out?",
    options: ["Identifying the constitutional provision at issue", "Identifying the relevant precedents", "Classifying the judicial approach", "Assessing the practical impact"],
    correctIndex: 3,
    explanation: "Describing real-world consequences that followed a decision, such as a rise in outside spending, is the practical-impact step. The other steps concern the clause at issue, earlier cases, and whether the Court acted with activism or restraint.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },
  {
    id: 'gov-judiciary-ent-6b',
    question: "A student argues that national courts, independent of the states and enforcing national laws that override state law, will gradually absorb the work of state courts and help concentrate power in the national government. Which required document most directly supports this argument?",
    options: ["Brutus No. 1", "Federalist No. 78", "Federalist No. 51", "Federalist No. 70"],
    correctIndex: 0,
    explanation: "Brutus No. 1 warns that the national government would consolidate power at the states' expense, and that its courts, independent of the states, would swallow up the powers of state courts. Federalist No. 78 makes the opposite case, calling the judiciary the least dangerous branch.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },

  // Part 7 — AP Review: required cases, judicial review of the executive
  {
    id: 'gov-judiciary-ent-7a',
    question: "A state has not redrawn its legislative districts in 60 years, so some rural districts now have one-tenth the population of some urban districts. Urban voters sue, and a federal court agrees to hear the challenge rather than dismissing it as a political question. Which required case made such challenges possible?",
    options: ["*Shaw v. Reno*", "*Marbury v. Madison*", "*Baker v. Carr*", "*Wisconsin v. Yoder*"],
    correctIndex: 2,
    explanation: "*Baker v. Carr* (1962) held that challenges to unequal legislative apportionment are justiciable, opening the door to the one-person, one-vote principle. *Shaw v. Reno* concerns districts drawn mainly on the basis of race, not unequal populations.",
    partNumber: 7,
    partTitle: "AP Review",
  },
  {
    id: 'gov-judiciary-ent-7b',
    question: "A president orders an agency to stop paying a benefit that a federal statute requires. A federal court orders the payments to resume, stating that it is the duty of the courts to say what the law is, even when the executive disagrees. Which required case is the source of that principle?",
    options: ["*Baker v. Carr*", "*Marbury v. Madison*", "*McCulloch v. Maryland*", "*Citizens United v. FEC*"],
    correctIndex: 1,
    explanation: "*Marbury v. Madison* (1803) declared that it is emphatically the duty of the judicial department to say what the law is, establishing judicial review; the case itself arose from the executive's refusal to deliver a commission. *McCulloch* concerned implied powers and state taxation of a federal bank.",
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
