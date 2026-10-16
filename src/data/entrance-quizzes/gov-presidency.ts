/**
 * Entrance Quiz — The Presidency (AP US Government and Politics) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: Article II grants, formal vs. informal powers, Federalist 70
  {
    id: 'gov-presidency-ent-1a',
    question: "Which of the following presidential actions relies on an informal power rather than a formal power granted by the Constitution?",
    options: ["Granting a pardon to a person convicted of a federal crime", "Nominating an ambassador and sending the name to the Senate", "Directing agencies by order how to set enforcement priorities", "Returning a bill to Congress with a veto and written objections"],
    correctIndex: 2,
    explanation: "Executive orders and directives to agencies developed through practice and rest on the vesting and take-care clauses rather than an express grant. Pardons, nominations, and vetoes are formal powers listed in the Constitution.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'gov-presidency-ent-1b',
    question: "A president orders federal agencies to stop enforcing a law that she considers unwise but that no court has found unconstitutional. Critics say she is ignoring a duty Article II places on the President. Which duty?",
    options: ["To take care that the laws be faithfully executed", "To give Congress information on the state of the union", "To receive ambassadors and other public ministers", "To grant reprieves and pardons for federal crimes"],
    correctIndex: 0,
    explanation: "Article II requires the President to take care that the laws be faithfully executed, which critics say forbids refusing to enforce a valid law. The State of the Union, receiving ambassadors and pardons are separate Article II provisions.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Key Processes: veto, treaties vs. executive agreements, signing statements
  {
    id: 'gov-presidency-ent-2a',
    question: "The President signs a defense bill into law but issues a written statement declaring that one provision unconstitutionally limits the commander-in-chief power and that the administration will interpret it narrowly. What has the President issued?",
    options: ["A signing statement", "A line-item veto", "A pocket veto", "An executive agreement"],
    correctIndex: 0,
    explanation: "A signing statement accompanies the signing of a bill and explains how the President interprets it or which parts raise constitutional concerns. The bill still becomes law in full; there is no line-item veto, and a pocket veto applies only to unsigned bills.",
    partNumber: 2,
    partTitle: "Key Processes",
  },
  {
    id: 'gov-presidency-ent-2b',
    question: "While Congress drafts a spending bill, the President announces that she will veto any version containing a certain provision. Leaders, lacking the votes to override, remove the provision before final passage. What does this episode show?",
    options: ["A veto threat can shape a bill without a veto ever being cast", "The President may strike single provisions from a passed bill", "Congress needs the President's approval before it drafts a bill", "A signing statement can cancel parts of a law after it passes"],
    correctIndex: 0,
    explanation: "Because Congress usually cannot muster a two-thirds override, the threat of a veto gives the President leverage over the content of bills before they reach her desk. Presidents have no line-item veto, and signing statements do not cancel provisions.",
    partNumber: 2,
    partTitle: "Key Processes",
  },

  // Part 3 — Patterns & Examples: patterns of modern presidential power expansion
  {
    id: 'gov-presidency-ent-3a',
    question: "The Executive Office of the President, created in 1939 with a small staff, now includes offices such as the Office of Management and Budget and the National Security Council and employs well over a thousand people. Which development does this growth best reflect?",
    options: ["A constitutional amendment that enlarged Article II", "A shift of policy planning from the President to Congress", "A court ruling that required presidents to hire more aides", "The centralizing of policymaking inside the White House itself"],
    correctIndex: 3,
    explanation: "The growth of the EOP, including offices such as OMB and the National Security Council, created an institutional presidency that runs policy from the White House. No amendment or court ruling required it, and it moved planning toward the President, not away.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },
  {
    id: 'gov-presidency-ent-3b',
    question: "A president's top bill is stalled in the Senate. The president travels to several swing states, gives televised speeches, and urges voters to call their senators and demand a vote. Which strategy is the president using?",
    options: ["Bargaining with members of Congress", "Going public to pressure Congress", "Unilateral action through an order", "Logrolling among the senators"],
    correctIndex: 1,
    explanation: "Going public means mobilizing public opinion so that voters pressure lawmakers, as the President does here with speeches and calls to action. Bargaining involves direct deals with members, and logrolling is vote trading among legislators.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },

  // Part 4 — Connections & Interactions: presidency and the bureaucracy, Congress, the public
  {
    id: 'gov-presidency-ent-4a',
    question: "A newly elected president wants to replace thousands of career staff at a federal agency with political supporters. What most limits the president's ability to do this?",
    options: ["Civil service rules that let merit employees be fired only for cause", "The 22nd Amendment's limit on the number of officials a president may appoint", "A rule that the Senate must confirm every person hired by a federal agency", "The Supreme Court's power to approve each personnel decision in advance"],
    correctIndex: 0,
    explanation: "Since the Pendleton Act of 1883, most federal employees are hired on merit and can be removed only for cause, which limits a president's control over the career bureaucracy. Only about 1,200 top positions require Senate confirmation, and the 22nd Amendment concerns presidential terms.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },
  {
    id: 'gov-presidency-ent-4b',
    question: "A study compares two presidents during their second year in office:\n- President A: average approval 64 percent; Congress passed 72 percent of the bills A publicly backed\n- President B: average approval 39 percent; Congress passed 31 percent of the bills B publicly backed\nWhich conclusion do these data best support?",
    options: ["Low approval ratings legally limit the number of bills a president may propose", "Congress passes most bills a president backs regardless of the president's popularity", "Higher approval is associated with more legislative success for a president", "President B faced divided government, while President A had a unified one"],
    correctIndex: 2,
    explanation: "The more popular president saw a much higher share of backed bills pass, consistent with public approval serving as an informal resource that strengthens a president's hand with Congress. The data say nothing about party control, and approval places no legal limit on proposals.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },

  // Part 5 — Change Over Time: stewardship vs. literal theory, wartime expansion
  {
    id: 'gov-presidency-ent-5a',
    question: "A president sets aside millions of acres of public land for conservation, arguing that he may take any action for the public good that the Constitution and the laws do not forbid, even without a statute authorizing it. Which view of presidential power is he expressing?",
    options: ["The literal view, which confines presidents to powers the law expressly grants", "The stewardship view, which lets presidents act unless a law prohibits it", "The congressional view, which treats the President as Congress's agent", "The plural view, which divides executive power among several officials"],
    correctIndex: 1,
    explanation: "Theodore Roosevelt's stewardship theory held that a president may do anything for the nation not forbidden by the Constitution or laws. William Howard Taft's literal view held the opposite, that a president may act only where a specific grant of power exists.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },
  {
    id: 'gov-presidency-ent-5b',
    question: "During the Civil War, Lincoln suspended habeas corpus and ordered a blockade of Southern ports before Congress acted, and Congress later approved several of these steps. Which long-term pattern does this episode best illustrate?",
    options: ["Presidential power shrinking during wartime as Congress takes the lead", "The courts gaining power over military decisions during national emergencies", "Wartime presidents asking the states to approve each emergency measure", "War and crisis enlarging presidential power and setting precedents for future presidents"],
    correctIndex: 3,
    explanation: "Lincoln's wartime actions expanded presidential authority and became precedents that later presidents cited in their own crises, a recurring pattern from the Civil War through the World Wars and after September 11. Congress largely ratified rather than led.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },

  // Part 6 — Problem-Solving Workshop: the five-step framework; required documents in argument
  {
    id: 'gov-presidency-ent-6a',
    question: "During a foreign crisis, a president orders Navy ships to the region, gives a televised address urging public support, and signs an executive agreement with an allied government. Which of these actions rests on a formal power listed in the Constitution?",
    options: ["The televised address alone", "The deployment and the executive agreement", "The military deployment alone", "All three, since each is part of the job"],
    correctIndex: 2,
    explanation: "Commanding the armed forces is a formal Article II power. Executive agreements and appeals to the public are informal powers that developed through practice, even though presidents use them constantly.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },
  {
    id: 'gov-presidency-ent-6b',
    question: "A student argues that a single elected president is more accountable to voters than a committee of executive officials would be. Which pairing of evidence best supports this claim?",
    options: ["Federalist No. 70 on how plurality hides blame, and the chance to oust a president at reelection", "Brutus No. 1's warning about consolidated power, and the growth of the Executive Office staff", "Federalist No. 10's case for a large republic, and the number of agencies a president oversees", "Article I's war-declaration clause, and the frequency of presidential vetoes in divided government"],
    correctIndex: 0,
    explanation: "Federalist No. 70 argues that a plural executive conceals responsibility while a single executive can be clearly blamed, and reelection lets voters act on that blame. Brutus No. 1 supports the opposing worry about concentrated power, and the other pairings do not address accountability.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },

  // Part 7 — AP Review: formal powers and limits; FRQ congressional responses
  {
    id: 'gov-presidency-ent-7a',
    question: "After Congress fails to pass an immigration bill, a president directs the Department of Homeland Security to defer deportations for a group of young immigrants. Which of the following is a constitutional response available to Congress?",
    options: ["Cancel the directive by a vote of the Senate alone", "Ask the Supreme Court for an advisory opinion on it", "Remove the President by a majority vote of the House", "Pass a law barring funds for carrying it out"],
    correctIndex: 3,
    explanation: "The power of the purse lets Congress prohibit spending on a program, subject to the President's veto and a two-thirds override. One chamber cannot cancel a directive, federal courts do not give advisory opinions, and removal requires House impeachment plus a two-thirds Senate conviction.",
    partNumber: 7,
    partTitle: "AP Review",
  },
  {
    id: 'gov-presidency-ent-7b',
    question: "Which use of the pardon power would be unconstitutional?",
    options: ["Pardoning a person before any federal charges are filed", "Pardoning an official to block removal after impeachment", "Pardoning someone convicted of federal tax evasion", "Shortening a federal prison sentence without a full pardon"],
    correctIndex: 1,
    explanation: "Article II grants the power to pardon offenses against the United States except in cases of impeachment, so a pardon cannot stop impeachment or removal. Pardons may be issued before charges, cover any federal crime, and include commuting a sentence.",
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
