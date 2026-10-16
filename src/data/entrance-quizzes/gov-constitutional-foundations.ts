/**
 * Entrance Quiz — Constitutional Foundations (AP US Government and Politics) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: Enlightenment ideas, founding documents, Federalists vs. Anti-Federalists
  {
    id: 'gov-constitutional-foundations-ent-1a',
    question: "A 1770s pamphlet argues: \"People hold rights to life, liberty, and property before any government exists. They create government only to protect those rights, and when a ruler destroys them, the people may replace him.\" Which set of ideas does the passage express?",
    options: ["Separation of powers among three distinct, coequal branches", "Majority rule checked by courts that protect minority rights", "Natural rights and a social contract based on consent", "A strong sovereign that keeps order in a state of nature"],
    correctIndex: 2,
    explanation: "Pre-political rights, government created to protect them, and a right to replace a government that violates them are Locke's natural rights and social contract, which the Declaration of Independence adopted. Hobbes also used a social contract but argued for a powerful sovereign, not a right to replace one.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'gov-constitutional-foundations-ent-1b',
    question: "At a 1788 ratifying convention, a delegate argues that a list of rights is unnecessary because the new national government holds only the powers granted to it, and that listing some rights might imply that unlisted rights are unprotected. Which statement best identifies the delegate and how the concern was later addressed?",
    options: ["A Federalist; the Ninth Amendment later said naming some rights does not deny others", "An Anti-Federalist; the Tenth Amendment later listed every right the states could not violate", "A Federalist; the First Amendment later barred Congress from adding any rights to the list", "An Anti-Federalist; the Supremacy Clause later made state bills of rights binding on Congress"],
    correctIndex: 0,
    explanation: "Calling a bill of rights unnecessary under a government of enumerated powers was the Federalist position. The Ninth Amendment answered the worry about unlisted rights by stating that the enumeration of certain rights does not deny others retained by the people.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Key Processes: branch powers, checks and balances, Article V
  {
    id: 'gov-constitutional-foundations-ent-2a',
    question: "A proposed amendment passes the House 300 to 135 and the Senate 70 to 30. Congress sends it to the state legislatures, and before the deadline 36 of the 50 legislatures ratify it. What is the amendment's status?",
    options: ["It is part of the Constitution, because a majority of states approved it", "It returns to Congress, because the President must now sign or veto it", "It is part of the Constitution, because both chambers passed it by two-thirds", "It has failed for now, because it needs approval from 38 of the 50 states"],
    correctIndex: 3,
    explanation: "Both chambers cleared the two-thirds proposal threshold, but ratification requires three-fourths of the states, which is 38 of 50, so 36 is not enough. The President plays no formal role in the amendment process.",
    partNumber: 2,
    partTitle: "Key Processes",
  },
  {
    id: 'gov-constitutional-foundations-ent-2b',
    question: "The House votes 230 to 200 to impeach a federal judge for taking bribes. At the Senate trial, 62 of the 100 senators vote to convict and 38 vote to acquit. What is the result?",
    options: ["The judge is removed, since a majority of senators voted to convict", "The judge stays, since conviction requires two-thirds of the Senate", "The judge is removed, since the House impeached by a majority", "The case goes to the Supreme Court, which decides on removal"],
    correctIndex: 1,
    explanation: "The House impeaches by a simple majority, but removal requires conviction by two-thirds of the senators present; 62 of 100 falls short of 67. The Chief Justice presides only over a president's trial, and the Supreme Court does not decide removal.",
    partNumber: 2,
    partTitle: "Key Processes",
  },

  // Part 3 — Patterns & Examples: Federalist 10, Federalist 51, Brutus 1, the founding compromises
  {
    id: 'gov-constitutional-foundations-ent-3a',
    question: "A senator urges colleagues to slow down a popular bill the House passed in a single day, arguing that the framers split Congress into two chambers because the legislature is the strongest branch and must be divided so that its parts check one another. Which required document's argument is the senator drawing on?",
    options: ["Brutus No. 1, on why a large republic cannot represent its people", "Federalist No. 51, on making ambition counteract ambition", "Federalist No. 10, on how a large republic dilutes factions", "The Declaration of Independence, on the right to alter government"],
    correctIndex: 1,
    explanation: "Federalist No. 51 argues that the legislative branch necessarily predominates and so must be divided into two chambers, part of a design in which ambition is made to counteract ambition. Federalist No. 10 addresses factions in society, not internal divisions of Congress.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },
  {
    id: 'gov-constitutional-foundations-ent-3b',
    question: "A state contains about 1 percent of the U.S. population. Under the Great (Connecticut) Compromise as it operates today, how is that state represented in Congress?",
    options: ["1 senator and about 4 representatives", "2 senators and 1 representative", "2 senators and about 4 representatives", "4 senators and about 4 representatives"],
    correctIndex: 2,
    explanation: "The compromise gave every state two senators regardless of population and apportioned House seats by population; 1 percent of the 435 House seats is about 4. That pairing of equal and proportional representation is the core of the compromise.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },

  // Part 4 — Connections & Interactions: power types, incorporation, implied powers, judicial review
  {
    id: 'gov-constitutional-foundations-ent-4a',
    question: "A state court convicts a defendant who could not afford a lawyer and was given none. On appeal, the defendant argues that the state violated the Sixth Amendment right to counsel. Through what constitutional route does that Sixth Amendment protection bind a state government?",
    options: ["The Fourteenth Amendment's Due Process Clause, through selective incorporation", "The Supremacy Clause, which makes all federal rights binding on state courts", "The Tenth Amendment, which leaves criminal procedure to the states", "Article III, which places state criminal trials under federal judges"],
    correctIndex: 0,
    explanation: "The Bill of Rights originally limited only the national government; the Court has applied most of its protections to the states one at a time through the Fourteenth Amendment's Due Process Clause, as it did for the right to counsel in *Gideon v. Wainwright*.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },
  {
    id: 'gov-constitutional-foundations-ent-4b',
    question: "Congress creates a national corporation to insure bank deposits, citing its enumerated powers over currency and commerce, though no clause mentions insurance. A state then imposes a special tax on the corporation's local office. Applying *McCulloch v. Maryland*, how would a court most likely rule?",
    options: ["The corporation is invalid, since only enumerated powers may be used", "The corporation is valid, and the state may tax it as a concurrent power", "The corporation is invalid, since the Tenth Amendment reserves banking", "The corporation is valid, and the state may not tax this federal entity"],
    correctIndex: 3,
    explanation: "*McCulloch* held that the Necessary and Proper Clause lets Congress choose reasonable means, such as a bank, to carry out enumerated powers, and that the Supremacy Clause bars states from taxing a federal instrumentality. Taxation is a concurrent power in general, but not when it targets a federal entity.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },

  // Part 5 — Change Over Time: amendment eras, change without amendment
  {
    id: 'gov-constitutional-foundations-ent-5a',
    question: "Which of the following changes in American government came about through custom and practice rather than through a formal constitutional amendment?",
    options: ["Senators came to be elected directly by each state's voters", "Citizens aged 18 to 20 gained the right to vote in all elections", "The Cabinet became the President's standing group of advisers", "Poll taxes were banned as a condition of voting for federal office"],
    correctIndex: 2,
    explanation: "The Constitution never creates a Cabinet; it developed as a convention beginning with Washington. Direct election of senators (17th), the 18-year-old vote (26th), and the federal poll-tax ban (24th) each required a formal amendment.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },
  {
    id: 'gov-constitutional-foundations-ent-5b',
    question: "A historian argues that the Progressive Era amendments (1913 to 1920) shifted power toward ordinary voters and away from political elites. Which pair of amendments best supports that claim?",
    options: ["The 13th, ending slavery, and the 16th, allowing an income tax", "The 17th, electing senators directly, and the 19th, barring sex limits on voting", "The 21st, repealing Prohibition, and the 22nd, limiting presidents to two terms", "The 18th, banning liquor, and the 20th, moving the start of new terms"],
    correctIndex: 1,
    explanation: "The 17th Amendment took the choice of senators away from state legislatures and gave it to voters, and the 19th barred states from denying the vote on account of sex; both expanded direct popular participation. The 13th and 16th were not about who chooses officials, and the 21st and 22nd came later.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },

  // Part 6 — Problem-Solving Workshop: applying required documents; argument-essay structure
  {
    id: 'gov-constitutional-foundations-ent-6a',
    question: "A student's essay claims that the thousands of competing interest groups lobbying in Washington actually protect liberty, since no single group can assemble a national majority to oppress others. Which required document provides the strongest support for this claim?",
    options: ["Brutus No. 1", "Federalist No. 51", "The Articles of Confederation", "Federalist No. 10"],
    correctIndex: 3,
    explanation: "Federalist No. 10 argues that factions cannot be removed without destroying liberty, so a large republic should control their effects by multiplying competing interests until no single faction can form an oppressive majority. Federalist No. 51 focuses on checks among branches of government rather than competition among groups in society.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },
  {
    id: 'gov-constitutional-foundations-ent-6b',
    question: "A student's argument essay states a clear thesis, supports it with Federalist No. 51 and a specific example of a Senate check on the President, and explains how the evidence supports the thesis. The essay never mentions an opposing view. Under the AP argument-essay rubric, which point does it fail to earn?",
    options: ["Responding to an alternative perspective", "Stating a defensible claim or thesis", "Using a required foundational document", "Explaining reasoning that links evidence"],
    correctIndex: 0,
    explanation: "The rubric awards a separate point for identifying an opposing or alternative perspective and responding to it by refuting, conceding, or rebutting. The essay already has a thesis, required-document evidence, and reasoning.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },

  // Part 7 — AP Review: required cases, core terms, free-response strategy
  {
    id: 'gov-constitutional-foundations-ent-7a',
    question: "Congress makes it a federal crime to carry a hunting knife within 500 feet of a public park, citing its power to regulate interstate commerce. The Supreme Court strikes down the law, reasoning that carrying a knife near a park is not an economic activity that substantially affects interstate commerce. Which required case does this ruling most closely resemble?",
    options: ["*McCulloch v. Maryland*", "*United States v. Lopez*", "*McDonald v. Chicago*", "*Marbury v. Madison*"],
    correctIndex: 1,
    explanation: "*United States v. Lopez* struck down a federal ban on guns near schools because simple possession was not economic activity substantially affecting interstate commerce, the same reasoning applied here. *McDonald* concerned incorporation of the Second Amendment, not the limits of the commerce power.",
    partNumber: 7,
    partTitle: "AP Review",
  },
  {
    id: 'gov-constitutional-foundations-ent-7b',
    question: "Prompt: \"Develop an argument that explains whether the system of checks and balances makes the national government too slow to address national problems.\" Which thesis is defensible and establishes a line of reasoning?",
    options: ["Checks and balances rarely slow anything, since the President can make any law alone by executive order", "There are many arguments on both sides of whether checks and balances make the national government too slow today", "The Constitution creates a legislative, an executive, and a judicial branch, and it gives each one its own distinct powers", "Requiring both chambers and the President to agree leaves government too slow, since any one can block action"],
    correctIndex: 3,
    explanation: "A defensible thesis takes a clear position and previews the reason for it, as the claim that multiple veto points let one institution block majority action does. Restating that there are two sides takes no position, describing the three branches makes no claim, and executive orders cannot substitute for legislation.",
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
