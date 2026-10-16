/**
 * Entrance Quiz — The Federal Bureaucracy (AP US Government and Politics) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: agency types, merit vs. appointees, iron triangles
  {
    id: 'gov-bureaucracy-ent-1a',
    question: "A federal entity generates and sells electricity to customers across several states and pays for most of its operations from those sales rather than from annual appropriations. Which type of federal agency is it?",
    options: ["A government corporation", "A Cabinet department", "An independent regulatory commission", "An independent executive agency"],
    correctIndex: 0,
    explanation: "Government corporations, such as the Tennessee Valley Authority and the Postal Service, operate like businesses and charge for their services. Cabinet departments and independent executive agencies rely on appropriations, and regulatory commissions regulate a sector of the economy rather than sell to it.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'gov-bureaucracy-ent-1b',
    question: "For decades, a House agriculture subcommittee, the agency office that runs a crop-subsidy program, and a national growers' association have worked together: the association backs subcommittee members' campaigns, the subcommittee protects the program's funding, and the agency administers it generously. Which concept does this relationship illustrate?",
    options: ["An issue network", "A revolving door", "An iron triangle", "A logroll"],
    correctIndex: 2,
    explanation: "An iron triangle is a stable, mutually beneficial alliance among a congressional committee, an executive agency, and an interest group in one policy area. An issue network is a looser and shifting web of many actors, and logrolling is vote trading among legislators.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Key Processes: notice-and-comment rulemaking, adjudication, enforcement
  {
    id: 'gov-bureaucracy-ent-2a',
    question: "An agency publishes a proposed drinking-water rule in the Federal Register. An environmental group wants to shape the final version. Which action uses the access point that the rulemaking process itself provides?",
    options: ["Asking the Supreme Court for an advisory opinion on the draft", "Calling for a national referendum on whether to adopt the rule", "Petitioning the Senate to hold a confirmation vote on the rule", "Filing written comments during the period set aside for outside input"],
    correctIndex: 3,
    explanation: "Under the Administrative Procedure Act, a proposed rule is open to public comment, and the agency must respond to significant comments before issuing a final rule. Courts do not give advisory opinions, and rules are not put to referendums or Senate votes.",
    partNumber: 2,
    partTitle: "Key Processes",
  },
  {
    id: 'gov-bureaucracy-ent-2b',
    question: "A worker is denied Social Security disability benefits and appeals. An administrative law judge employed by the agency holds a hearing, takes evidence, and rules in her favor. Which bureaucratic function does this illustrate?",
    options: ["Adjudication, as the agency settles an individual dispute", "Rulemaking, as the agency writes a general regulation", "Oversight, as the agency reviews how Congress spends money", "Judicial review by a life-tenured Article III court"],
    correctIndex: 0,
    explanation: "Agency adjudication resolves individual cases, such as benefit claims, through hearings before administrative law judges inside the agency. Rulemaking produces general rules for everyone, and administrative law judges are not Article III judges.",
    partNumber: 2,
    partTitle: "Key Processes",
  },

  // Part 3 — Patterns & Examples: major agencies and what they do; modern control debates
  {
    id: 'gov-bureaucracy-ent-3a',
    question: "A candidate's campaign accepts contributions above the legal limit and fails to report several donors. Which federal agency writes and enforces the rules the campaign has broken?",
    options: ["The Securities and Exchange Commission", "The Federal Election Commission", "The Federal Communications Commission", "The Federal Energy Regulatory Commission"],
    correctIndex: 1,
    explanation: "The Federal Election Commission, an independent regulatory commission, writes and enforces campaign-finance contribution and disclosure rules. The SEC regulates securities markets and the FCC regulates broadcasting and communications.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },
  {
    id: 'gov-bureaucracy-ent-3b',
    question: "A law grants an intelligence agency new surveillance authority but provides that the authority expires automatically after five years unless Congress votes to renew it. What is this provision, and what does it accomplish?",
    options: ["A signing statement, letting the President limit the law", "A pocket veto, letting the law lapse without a vote", "A categorical grant, attaching strict rules to the funds", "A sunset clause, forcing lawmakers to review the program"],
    correctIndex: 3,
    explanation: "A sunset clause ends a program or power on a set date unless it is reauthorized, which forces Congress to revisit how the agency has used its authority. Signing statements and pocket vetoes are presidential tools, and a categorical grant is a form of federal aid to states.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },

  // Part 4 — Connections & Interactions: interest groups, Congress, and the bureaucracy
  {
    id: 'gov-bureaucracy-ent-4a',
    question: "Over ten years, three successive heads of a federal mine-safety office came from mining companies and returned to industry jobs after leaving. Critics say inspections grew lax and penalties shrank. Which concept best describes their concern?",
    options: ["A revolving door that leads to regulatory capture", "Compliance monitoring that checks how funds are spent", "Patronage that rewards loyal campaign volunteers", "Delegated discretion that Congress grants by statute"],
    correctIndex: 0,
    explanation: "The movement of officials between an industry and the agency that regulates it, known as the revolving door, can lead to regulatory capture, in which the agency serves the industry rather than the public. Patronage concerns jobs given to political supporters, not industry ties.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },
  {
    id: 'gov-bureaucracy-ent-4b',
    question: "A veteran's claim for health benefits has been stalled for a year. She calls her representative's district office, and a staff member contacts the agency to find out what is holding it up. Which practice does this illustrate?",
    options: ["Oversight hearings held by a full committee", "Senate confirmation of an agency head", "Casework, a service that also builds support for incumbents", "A discharge petition to move a stalled bill"],
    correctIndex: 2,
    explanation: "Casework is help that members of Congress and their staffs give constituents in dealing with federal agencies, and it builds the loyalty that contributes to incumbency advantage. Oversight hearings examine an agency's overall performance rather than one person's case.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },

  // Part 5 — Change Over Time: spoils to merit, Hatch Act, deregulation era
  {
    id: 'gov-bureaucracy-ent-5a',
    question: "In 1881 a disappointed office seeker assassinated President James Garfield. Two years later, Congress required that many federal jobs be filled by competitive examination and barred firing those workers for political reasons. What did this law begin?",
    options: ["Limits on federal workers' partisan campaign activity", "A move from patronage toward a merit-based civil service", "A notice-and-comment process for writing agency rules", "Presidential power to fire any federal employee at will"],
    correctIndex: 1,
    explanation: "The Pendleton Act of 1883 replaced the spoils system for many jobs with hiring by examination and protection from political firing, the start of the merit system. Limits on partisan activity came with the Hatch Act of 1939, and notice-and-comment rulemaking with the Administrative Procedure Act of 1946.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },
  {
    id: 'gov-bureaucracy-ent-5b',
    question: "Historians describe 1980 to 2000 as an era when presidents of both parties tried to shrink or streamline the federal bureaucracy. Which pair of developments best fits that description?",
    options: ["The New Deal's alphabet agencies and the wartime production boards", "The creation of the Department of Homeland Security and the TSA", "The Pendleton Act and the first independent regulatory commission", "Deregulation of trucking and airlines and a 1990s drive to cut government jobs"],
    correctIndex: 3,
    explanation: "Reagan-era deregulation and the Clinton administration's \"reinventing government\" job cuts both reduced the bureaucracy's reach. The New Deal and the post-9/11 reorganization expanded it, and the Pendleton Act era built the merit system.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },

  // Part 6 — Problem-Solving Workshop: the five-step agency framework; argument evidence
  {
    id: 'gov-bureaucracy-ent-6a',
    question: "A law lets an agency regulate pollution in \"navigable waters.\" The agency issues a rule covering seasonal ponds on dry farmland, and a court sets the rule aside. Using the five-step framework for agency actions, which step identifies the rule's flaw?",
    options: ["Statutory authority, since the rule reached beyond what Congress granted", "Procedural compliance, since the agency skipped the public comment period", "Stakeholders, since farm groups lobbied the committee that wrote the law", "Practical impact, since the rule raised costs for farmers in many states"],
    correctIndex: 0,
    explanation: "The court's reason is that the agency went beyond the authority the statute delegated, which is the statutory-authority step. Nothing in the scenario suggests the agency skipped notice and comment, and costs or lobbying do not by themselves make a rule unlawful.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },
  {
    id: 'gov-bureaucracy-ent-6b',
    question: "A student's thesis claims that congressional oversight can change how an agency behaves even when the President disagrees. Which piece of evidence best supports this thesis?",
    options: ["Presidents of both parties have reversed their predecessors' orders to agencies on their first day", "The Pendleton Act replaced patronage hiring with competitive examinations for most federal jobs", "House hearings and a contempt vote pushed out an EPA chief and led lawmakers to rewrite a cleanup law", "Federalist No. 70 argues that a single energetic executive is essential to good government"],
    correctIndex: 2,
    explanation: "In the 1982 to 1983 Superfund controversy, House investigations and a contempt vote forced the EPA administrator to resign despite the President's support, and Congress later reshaped the program. Presidential order reversals and Federalist No. 70 point toward presidential control instead.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },

  // Part 7 — AP Review: FRQ responses; required documents
  {
    id: 'gov-bureaucracy-ent-7a',
    question: "The Senate votes down the President's nominee to head a federal regulatory agency. Which response is constitutionally available to the President?",
    options: ["Install the nominee anyway once ninety days have passed", "Nominate a different candidate for Senate approval", "Ask the House to confirm the nominee in the Senate's place", "Have the Supreme Court order the Senate to vote again"],
    correctIndex: 1,
    explanation: "Appointments to head agencies require the Senate's advice and consent, so after a rejection the President's remedy is to nominate someone else. No waiting period lets a rejected nominee take office, the House has no role in confirmations, and courts do not order Senate votes.",
    partNumber: 7,
    partTitle: "AP Review",
  },
  {
    id: 'gov-bureaucracy-ent-7b',
    question: "A student argues that the President should be able to direct federal agencies firmly, because the Constitution places executive power in one person who must see that the laws are faithfully executed. Which required document best supports this argument?",
    options: ["Federalist No. 78", "Federalist No. 10", "Brutus No. 1", "Federalist No. 70"],
    correctIndex: 3,
    explanation: "Federalist No. 70 argues for energy in a single executive, which supports strong presidential direction of the agencies that carry out the laws. Federalist No. 78 concerns the judiciary, and Brutus No. 1 warns against concentrated national power.",
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
