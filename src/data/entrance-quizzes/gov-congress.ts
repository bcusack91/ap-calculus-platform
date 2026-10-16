/**
 * Entrance Quiz — Congress (AP US Government and Politics) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: House vs. Senate, Article I powers, models of representation
  {
    id: 'gov-congress-ent-1a',
    question: "A representative personally favors a gas-tax increase to repair roads, but she votes against it after a survey shows that 70 percent of her district opposes it, explaining that her job is to carry out her constituents' wishes. Which model of representation is she following?",
    options: ["The trustee model", "The politico model", "The partisan model", "The delegate model"],
    correctIndex: 3,
    explanation: "A delegate votes as constituents want even against her own judgment. A trustee would follow her own judgment, and a politico switches between the two roles depending on the issue.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'gov-congress-ent-1b',
    question: "Senators tend to be less responsive than House members to sudden swings in public opinion. Which feature of the Constitution best explains this difference?",
    options: ["Senators are still chosen by state legislatures rather than by voters", "Their six-year staggered terms put only a third before voters at once", "Senators may not be reelected more than twice under the Constitution", "Senators represent single districts drawn to protect incumbents"],
    correctIndex: 1,
    explanation: "Six-year, staggered terms mean only about a third of senators face voters in any one election, insulating the Senate from short-term swings as the framers intended. Senators have been elected directly since the 17th Amendment, face no term limit, and represent whole states.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Key Processes: lawmaking steps, committees, chamber rules
  {
    id: 'gov-congress-ent-2a',
    question: "A bill reaches the Senate floor with 57 senators in favor and 43 opposed. The minority leader announces that his party will filibuster. If no senator changes position, what happens?",
    options: ["The bill passes, since a simple majority of senators supports it", "The bill goes to a conference committee to settle the dispute", "The bill stalls, since cloture takes 60 votes and it has 57", "The Vice President casts a vote that breaks the filibuster"],
    correctIndex: 2,
    explanation: "A filibuster can be ended only by a cloture vote of 60 senators, so 57 supporters cannot force a final vote. A conference committee reconciles House and Senate versions of a bill, and the Vice President votes only to break a tie.",
    partNumber: 2,
    partTitle: "Key Processes",
  },
  {
    id: 'gov-congress-ent-2b',
    question: "A bill has the public support of 225 members of the House, but the chair of the committee to which it was referred refuses to schedule a hearing or a vote. Which procedure could the bill's supporters use to bring it to the floor?",
    options: ["A discharge petition", "A cloture motion", "A Senate hold", "A conference committee"],
    correctIndex: 0,
    explanation: "A discharge petition signed by a majority of House members (218) forces a bill out of committee and onto the floor. Cloture and holds are Senate procedures, and a conference committee comes only after both chambers pass a bill.",
    partNumber: 2,
    partTitle: "Key Processes",
  },

  // Part 3 — Patterns & Examples: apportionment, redistricting, gerrymandering, incumbency
  {
    id: 'gov-congress-ent-3a',
    question: "In a state with five House districts, the majority party draws a map that places as many of the opposing party's voters as possible into a single district, which the opposing party then wins with 90 percent of the vote. Which tactic does this map use?",
    options: ["Cracking", "Reapportionment", "Majority-minority districting", "Packing"],
    correctIndex: 3,
    explanation: "Packing concentrates the opposing party's voters into a few districts so their extra votes are wasted, leaving the other districts safer for the map-drawing party. Cracking does the reverse, splitting those voters across many districts.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },
  {
    id: 'gov-congress-ent-3b',
    question: "After a census, State M's population has grown more slowly than the nation's, so State M will have one fewer seat in the House. Which pair of processes follows?",
    options: ["Reapportionment shifts the seat away, and the state redraws its district lines", "Redistricting shifts the seat away, and Congress redraws the state's lines", "Gerrymandering shifts the seat away, and courts redraw the state's lines", "The state keeps its old districts, since reapportionment moved the seat"],
    correctIndex: 0,
    explanation: "Reapportionment divides the 435 House seats among the states by population after each census; the state, usually through its legislature, then redistricts to create one fewer district of equal population. Congress does not draw state districts, and the old map cannot be kept with fewer seats.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },

  // Part 4 — Connections & Interactions: Congress and the President, courts, bureaucracy
  {
    id: 'gov-congress-ent-4a',
    question: "A president sends troops into combat abroad without congressional authorization and formally notifies Congress within 48 hours. Under the War Powers Resolution, what is required if Congress neither declares war nor authorizes the mission?",
    options: ["The forces must be withdrawn within 60 to 90 days", "The mission may continue as long as the President wishes", "The Supreme Court must approve the mission within 30 days", "The House alone may vote to extend the mission for a year"],
    correctIndex: 0,
    explanation: "The War Powers Resolution of 1973 requires the President to end the use of force within 60 days, with up to 30 more days to withdraw, unless Congress authorizes it. Presidents have often disputed the law, but it gives Congress a statutory check; the courts and the House alone have no such role.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },
  {
    id: 'gov-congress-ent-4b',
    question: "A Senate committee wants an independent audit of whether a federal agency spent its grant money as the law requires. Which body would Congress most likely ask to conduct the audit?",
    options: ["The White House Office of Management and Budget", "The Congressional Budget Office", "The Government Accountability Office", "The House Rules Committee"],
    correctIndex: 2,
    explanation: "The Government Accountability Office audits and investigates federal agencies on behalf of Congress. The Congressional Budget Office estimates costs of legislation, and the Office of Management and Budget is part of the executive branch.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },

  // Part 5 — Change Over Time: cloture, the conservative coalition, reforms
  {
    id: 'gov-congress-ent-5a',
    question: "In 1964, ending a Senate filibuster required two-thirds of senators voting (67 if all 100 vote); since 1975 it has required 60. Suppose a bill has the firm support of 64 senators and faces a filibuster. How would its fate differ under the two rules?",
    options: ["It would pass under both rules, since 64 is a majority", "It could not get a final vote in 1964 but could get one under today's rule", "It could reach a final vote in 1964 but could not reach one today", "It would fail under both rules, since cloture requires 75 votes"],
    correctIndex: 1,
    explanation: "Sixty-four senators fall short of the 67 that cloture required before 1975 but exceed today's 60, so the filibuster would have blocked the bill then and could be broken now. A simple majority is not enough to end a filibuster under either rule.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },
  {
    id: 'gov-congress-ent-5b',
    question: "From the late 1930s into the 1960s, Democrats held majorities in both chambers of Congress, yet many liberal proposals, including civil rights bills, repeatedly failed. Which explanation best fits this pattern?",
    options: ["Republican presidents vetoed every civil rights bill that passed in those decades", "Senate rules then barred Congress from voting on any bill opposed by a single state", "The Supreme Court struck down each civil rights law soon after Congress passed it", "A Southern bloc allied with Republicans and used seniority-based chairs to block them"],
    correctIndex: 3,
    explanation: "The conservative coalition of Southern Democrats and Republicans could outvote liberal Democrats, and Southern members who held committee chairs through seniority bottled up civil rights bills. Majority party status alone did not guarantee a working majority.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },

  // Part 6 — Problem-Solving Workshop: the five-step framework; argument evidence
  {
    id: 'gov-congress-ent-6a',
    question: "An analyst explains why a bill failed: although the majority party controlled both chambers, several members from closely divided districts feared a backlash from voters back home and voted no. Which step of the congressional-analysis framework does this explanation mainly use?",
    options: ["Institutional, since lawmakers acted on reelection incentives", "Constitutional, since Article I barred the bill's passage", "Procedural, since a committee rule kept the bill off the floor", "Historical, since the vote repeated a pattern from the New Deal"],
    correctIndex: 0,
    explanation: "Explaining votes by members' desire to win reelection and respond to constituents is the institutional-incentives step. No constitutional bar or procedural rule is involved, and the analysis draws on no historical pattern.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },
  {
    id: 'gov-congress-ent-6b',
    question: "A student's thesis claims that Congress's design still forces broad compromise before major laws pass. Which piece of evidence would best support this thesis?",
    options: ["House members serve two-year terms, while senators serve staggered six-year terms", "Most members of Congress are reelected even when approval of Congress as a whole is low", "A landmark civil rights bill passed only once a bipartisan coalition ended a filibuster", "Congress has the power to declare war but has not formally done so since World War II"],
    correctIndex: 2,
    explanation: "The Civil Rights Act of 1964 passed only after Republicans and Democrats together reached the votes needed for cloture, showing the design requiring a broad coalition. The other facts are accurate but do not show compromise being forced.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },

  // Part 7 — AP Review: required districting case; FRQ application (power of the purse)
  {
    id: 'gov-congress-ent-7a',
    question: "A state legislature draws a congressional district shaped like a thin ribbon that winds 150 miles to connect neighborhoods where most residents belong to one racial group, and race was the predominant factor in drawing it. Voters sue under the Equal Protection Clause. Which required case is the most relevant precedent?",
    options: ["*Baker v. Carr*", "*Shaw v. Reno*", "*Brown v. Board of Education*", "*Citizens United v. FEC*"],
    correctIndex: 1,
    explanation: "*Shaw v. Reno* held that a district drawn with race as the predominant factor can be challenged under the Equal Protection Clause. *Baker v. Carr* made unequal apportionment justiciable but did not address racial line-drawing.",
    partNumber: 7,
    partTitle: "AP Review",
  },
  {
    id: 'gov-congress-ent-7b',
    question: "Annual appropriations expire, and Congress and the President cannot agree on a new spending bill or a short-term continuing resolution. What happens next?",
    options: ["The President may spend on any program while Congress is deadlocked", "The Supreme Court sets temporary spending levels for each agency", "Every federal program halts, including Social Security payments", "Agencies funded each year shut down, while mandatory programs keep paying"],
    correctIndex: 3,
    explanation: "Without appropriations, operations that depend on annual discretionary funding shut down, but mandatory spending such as Social Security continues under existing law. The President cannot spend money Congress has not appropriated, which is the core of the power of the purse.",
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
