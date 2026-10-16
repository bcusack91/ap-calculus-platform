/**
 * Entrance Quiz — Separation of Powers and Checks and Balances (AP US Government and Politics) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: Montesquieu and Madison, vesting clauses, partial (shared) separation
  {
    id: 'gov-separation-of-powers-ent-1a',
    question: "A proposed state constitution would abolish the legislature and let the governor write the state's criminal laws and also direct the police and prosecutors who enforce them. Which objection would Montesquieu and Madison most likely raise?",
    options: ["Combining the power to make and to carry out laws in one person endangers liberty", "Placing criminal law under a state official violates the federal Supremacy Clause", "Letting one official make laws denies citizens the right to vote on every statute", "Removing the legislature leaves the state courts without power of judicial review"],
    correctIndex: 0,
    explanation: "Montesquieu argued that when legislative and executive powers are united in the same person there can be no liberty, and Madison built that warning into the Constitution's separate branches. Criminal law is largely a reserved state power, so the Supremacy Clause is not the problem.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'gov-separation-of-powers-ent-1b',
    question: "Which feature of the Constitution best shows that the United States has a system of shared powers rather than a pure separation of powers?",
    options: ["Each branch is created by its own article, with its own vesting clause", "Federal judges keep their offices for life during good behavior", "The President's veto gives the executive branch a formal role in lawmaking", "Members of Congress cannot serve in the executive branch at once"],
    correctIndex: 2,
    explanation: "The veto lets the executive take part in the legislative process, an overlap that gives each branch a way to check the others. Separate articles, life tenure, and the bar on holding two offices keep the branches apart rather than making them share a power.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Key Processes: the checks matrix (veto, override, purse, confirmation, statutory response)
  {
    id: 'gov-separation-of-powers-ent-2a',
    question: "The President vetoes a bill. With all members voting, the House votes 290 to 140 to override the veto. What must happen next for the bill to become law?",
    options: ["The bill becomes law at once, since the House reached two-thirds", "The President must sign a revised version of the bill", "The Supreme Court must rule on whether the veto was valid", "The Senate must also pass it again by a two-thirds vote"],
    correctIndex: 3,
    explanation: "290 of 430 is just over two-thirds, so the House vote succeeds, but an override requires two-thirds of both chambers, so the bill becomes law only if the Senate also overrides. Courts do not review vetoes, and no presidential signature is needed after an override.",
    partNumber: 2,
    partTitle: "Key Processes",
  },
  {
    id: 'gov-separation-of-powers-ent-2b',
    question: "In a hypothetical case, the Supreme Court reads the filing deadline in a federal job-discrimination statute narrowly and rules that a worker's pay-discrimination complaint came too late. Many members of Congress believe the Court misread what the statute intended. What is the most direct way for Congress to respond?",
    options: ["Propose an amendment, the only way to undo any Court ruling", "Pass a new law that spells out what lawmakers originally meant", "Impeach the justices in the majority for misreading the law", "Override the ruling by a two-thirds vote of both chambers"],
    correctIndex: 1,
    explanation: "When the Court interprets a statute rather than the Constitution, Congress can simply rewrite the statute to make its meaning clear; an amendment is needed only to reverse a constitutional ruling. There is no procedure for overriding a ruling by a two-thirds vote, and disagreement with a decision is not grounds for impeachment.",
    partNumber: 2,
    partTitle: "Key Processes",
  },

  // Part 3 — Patterns & Examples: landmark conflicts, patterns of branch dominance
  {
    id: 'gov-separation-of-powers-ent-3a',
    question: "After weeks of hearings focused on a Supreme Court nominee's judicial philosophy, the Senate votes 42 to 58 against confirmation. Which check does this vote illustrate?",
    options: ["Judicial review of the President's choices", "The Senate's power to try impeached judges", "Senate advice and consent on appointments", "Congress's power to set the size of the Court"],
    correctIndex: 2,
    explanation: "Rejecting a nominee is the Senate's advice-and-consent power checking the President's appointment power and shaping the courts, as in the 1987 rejection of Robert Bork. Impeachment applies to sitting officials, and the size of the Court is set by statute.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },
  {
    id: 'gov-separation-of-powers-ent-3b',
    question: "Historians point to the Civil War, the Great Depression and World War II, and the years after the September 11 attacks as periods when the balance among the branches shifted. Which generalization best fits all three?",
    options: ["National crises have tended to move power toward the President and agencies", "The federal courts gained the most power during each of these crises", "Each crisis ended with an amendment that cut back executive power", "Each crisis strengthened Congress at the expense of the presidency"],
    correctIndex: 0,
    explanation: "In each crisis, the need for fast, unified action expanded presidential power, often through broad congressional delegation. Restoring balance afterward usually came through politics and scandal, as after Watergate, not through amendments.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },

  // Part 4 — Connections & Interactions: parties and divided government, the administrative state
  {
    id: 'gov-separation-of-powers-ent-4a',
    question: "A study counts major laws enacted in four consecutive Congresses:\n- Congress A (one party controls the presidency and both chambers): 12\n- Congress B (the parties split control): 5\n- Congress C (one party controls all three): 11\n- Congress D (the parties split control): 4\nWhich conclusion do these data best support?",
    options: ["Unified government removes every check that Congress holds over the President", "Split party control is associated with fewer major laws, consistent with gridlock", "Presidents veto more bills under unified government than under split party control", "Major legislation depends mainly on the number of seats held by the minority party"],
    correctIndex: 1,
    explanation: "The two Congresses with split control passed far fewer major laws than the two with unified control, consistent with the gridlock that divided government tends to produce. The data say nothing about vetoes or minority-party seats, and unified government weakens checks without removing them.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },
  {
    id: 'gov-separation-of-powers-ent-4b',
    question: "A federal agency issues a new rule that many members of Congress dislike. Which response would be a legislative check on the agency?",
    options: ["The President orders the agency head to revise the rule", "A business group sues, claiming the rule exceeds the statute", "A federal court blocks the rule while a lawsuit proceeds", "Lawmakers hold oversight hearings and cut the agency's funds"],
    correctIndex: 3,
    explanation: "Oversight hearings and the power of the purse are Congress's main tools for holding agencies accountable. A presidential order is an executive check, and a lawsuit or court order is a judicial one.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },

  // Part 5 — Change Over Time: shifting balance from the founding to the present
  {
    id: 'gov-separation-of-powers-ent-5a',
    question: "Andrew Jackson vetoed more bills than all six earlier presidents combined, often because he disagreed with their policy rather than because he thought them unconstitutional. What change in the separation of powers did this begin?",
    options: ["The veto became a lever that gave presidents more say in lawmaking", "Congress gained the power to pass laws without presenting them to the President", "The courts began reviewing every veto for its constitutional justification", "Presidents lost the power to veto bills that passed by large margins"],
    correctIndex: 0,
    explanation: "Early presidents mostly reserved the veto for bills they thought unconstitutional; Jackson used it to block policies he opposed, making the veto a regular lever in lawmaking. Every bill still goes to the President, and courts do not review vetoes.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },
  {
    id: 'gov-separation-of-powers-ent-5b',
    question: "The 22nd Amendment was ratified in 1951, a few years after one president had won four elections in a row. What concern does the amendment most directly reflect?",
    options: ["A worry that Congress was absorbing too much of the President's power", "A worry that vice presidents lacked a clear way to replace a disabled president", "A worry about the steady growth of presidential power over many decades", "A worry that voters could not easily remove a president between elections"],
    correctIndex: 2,
    explanation: "By turning the two-term tradition into a constitutional limit, the 22nd Amendment reflected concern about the growth of presidential power after the New Deal and World War II. Presidential disability is addressed by the 25th Amendment.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },

  // Part 6 — Problem-Solving Workshop: applying required documents; argument-essay structure
  {
    id: 'gov-separation-of-powers-ent-6a',
    question: "An essay argues that federal judges need life tenure so they can strike down popular but unconstitutional laws without fearing for their jobs, and that the courts are the weakest branch because they control neither the sword nor the purse. Which required document best supports this essay?",
    options: ["Federalist No. 70", "Federalist No. 78", "Federalist No. 10", "Brutus No. 1"],
    correctIndex: 1,
    explanation: "Federalist No. 78 defends judicial independence and life tenure, argues for judicial review, and calls the judiciary the least dangerous branch because it has neither force nor will, only judgment. Federalist No. 70 concerns an energetic single executive.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },
  {
    id: 'gov-separation-of-powers-ent-6b',
    question: "A student's essay argues that frequent use of executive orders undermines the framers' design. Which sentence would best earn credit for responding to an alternative perspective?",
    options: ["Executive orders have become far more common in recent decades than they were at any earlier point in the nation's history", "Some people disagree with this argument about executive orders, and that shows the issue is still a very controversial one", "Federalist No. 51 says ambition must counteract ambition, and that line shows the framers wanted each branch to check the others", "Defenders say orders let presidents act when Congress stalls, but the next president can simply erase them and revive the gridlock"],
    correctIndex: 3,
    explanation: "Credit for an alternative perspective requires stating a specific opposing view and then rebutting, refuting, or conceding it, as the sentence about orders being erased by the next president does. The other sentences offer evidence or a vague nod to disagreement without engaging it.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },

  // Part 7 — AP Review: required case, core terms, FRQ application
  {
    id: 'gov-separation-of-powers-ent-7a',
    question: "Congress passes a bill and sends it to the President, and Congress stays in session. The President neither signs nor returns the bill, and twelve days, not counting Sundays, go by. What happens to the bill?",
    options: ["It becomes law without a signature", "It dies by pocket veto", "It returns to Congress for an override vote", "It goes to the Supreme Court for review"],
    correctIndex: 0,
    explanation: "While Congress is in session, a bill the President neither signs nor returns within ten days (Sundays excepted) becomes law without a signature. A pocket veto happens only when Congress's adjournment prevents the bill from being returned.",
    partNumber: 7,
    partTitle: "AP Review",
  },
  {
    id: 'gov-separation-of-powers-ent-7b',
    question: "A federal court rules that a section of a statute letting a single chamber of Congress cancel executive decisions is unconstitutional, because it bypasses the Constitution's requirement that laws pass both chambers and go to the President. Which required case established the power the court used?",
    options: ["*McCulloch v. Maryland*", "*Citizens United v. FEC*", "*Marbury v. Madison*", "*Baker v. Carr*"],
    correctIndex: 2,
    explanation: "Voiding an act of Congress for conflicting with the Constitution is judicial review, which *Marbury v. Madison* established. *McCulloch* concerned implied powers and federal supremacy, and *Baker v. Carr* made apportionment disputes justiciable.",
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
