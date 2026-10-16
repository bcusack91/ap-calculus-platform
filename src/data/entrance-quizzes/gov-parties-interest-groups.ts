/**
 * Entrance Quiz — Political Parties and Interest Groups (AP US Government and Politics) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: the free-rider problem; third parties in a two-party system
  {
    id: 'gov-parties-interest-groups-ent-1a',
    question: "A national environmental group's policy victories benefit everyone who breathes cleaner air, yet only a small share of its supporters pay dues. The group responds by offering dues-paying members a magazine, outdoor trips, and gear discounts. What problem is the group addressing, and how?",
    options: ["Hyperpluralism, by reducing the number of competing groups", "Agency capture, by hiring former regulators as staff", "Astroturfing, by recruiting supporters through paid ads", "Free riding, countered with selective incentives"],
    correctIndex: 3,
    explanation: "Because people can enjoy a public good without paying for it, groups struggle to recruit members; offering benefits available only to members is a standard solution, often called selective benefits. Agency capture and astroturfing describe different problems entirely.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'gov-parties-interest-groups-ent-1b',
    question: "A third-party presidential candidate wins 19 percent of the national popular vote but no electoral votes. In the following years, both major parties adopt his signature issue of balancing the federal budget. What does this episode best illustrate?",
    options: ["Third parties can win electoral votes only through proportional rules", "Third parties rarely win but can steer big parties' agendas", "Third parties lose votes mainly because ballot access is barred to them", "Third parties replace a major party after a strong showing like this one"],
    correctIndex: 1,
    explanation: "Winner-take-all rules denied the candidate any electors, yet the major parties absorbed his issue to win back his voters, a common way third parties shape policy. He was on the ballot, so access was not the barrier.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Key Processes: lobbying tactics; litigation strategy
  {
    id: 'gov-parties-interest-groups-ent-2a',
    question: "A trade association hires a consulting firm that uses paid online ads to recruit people, then sends thousands of nearly identical emails to Congress signed by these \"concerned citizens.\" Which tactic is this?",
    options: ["Astroturf lobbying", "Direct lobbying", "The revolving door", "Filing an amicus brief"],
    correctIndex: 0,
    explanation: "Astroturfing is a professionally manufactured campaign designed to look like spontaneous grassroots pressure. Direct lobbying means meeting officials face to face, and the revolving door refers to officials moving into lobbying jobs.",
    partNumber: 2,
    partTitle: "Key Processes",
  },
  {
    id: 'gov-parties-interest-groups-ent-2b',
    question: "A civil rights organization searches for a sympathetic plaintiff whose facts make the strongest case, then files a lawsuit it hopes will reach the Supreme Court and overturn an earlier precedent. Which strategy is the organization using?",
    options: ["Grassroots lobbying of members of Congress", "Filing a class action on behalf of shareholders", "Bringing a test case meant to change the law", "Running issue ads during a general election campaign"],
    correctIndex: 2,
    explanation: "A test case is litigation deliberately chosen to set a precedent, the approach the NAACP used in the cases leading to *Brown v. Board of Education*. The other choices target legislators or voters rather than the courts.",
    partNumber: 2,
    partTitle: "Key Processes",
  },

  // Part 3 — Patterns & Examples: theories of group influence; issue networks
  {
    id: 'gov-parties-interest-groups-ent-3a',
    question: "Groups representing farmers, food processors, environmentalists and consumer advocates each lobby on a farm bill, and the final law gives each of them part of what it wanted while none gets everything. Which theory does this outcome best fit?",
    options: ["Elite theory", "Pluralist theory", "Hyperpluralism", "Duverger's law"],
    correctIndex: 1,
    explanation: "Pluralism holds that many groups compete and bargain, so policy reflects compromise among them rather than domination by one. Elite theory predicts that a small wealthy group prevails, and hyperpluralism that so many demands leave government unable to act coherently.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },
  {
    id: 'gov-parties-interest-groups-ent-3b',
    question: "The debate over regulating artificial intelligence involves dozens of technology firms, university experts, civil liberties groups, think tanks, journalists, and several congressional committees and agencies, with alliances that shift from one question to the next. Which concept best describes this policy community?",
    options: ["An iron triangle", "A party machine", "A closed primary", "An issue network"],
    correctIndex: 3,
    explanation: "An issue network is a loose, open, and changing web of many participants in a policy area. An iron triangle is a stable, closed alliance of just one committee, one agency, and one interest group.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },

  // Part 4 — Connections & Interactions: parties and opinion; groups and the bureaucracy
  {
    id: 'gov-parties-interest-groups-ent-4a',
    question: "Within a few months after a party's presidential nominee came out against a trade agreement, the share of that party's voters who opposed the agreement doubled, while views in the other party barely changed. Which concept best explains this shift?",
    options: ["Random error in the polls taken before the nominee spoke", "Dealignment, as voters left the party over the issue", "Elite cues, as party leaders shaped how followers saw the deal", "Hyperpluralism, as many groups lobbied on trade"],
    correctIndex: 2,
    explanation: "Partisans often take cues from their party's leaders on new or complex issues, so a nominee's stance can move followers' opinions quickly. A one-sided shift among only that party's voters points to leadership cues rather than polling error.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },
  {
    id: 'gov-parties-interest-groups-ent-4b',
    question: "An understaffed federal agency writing a complex new rule relies heavily on data, studies, and detailed comments supplied by a well-funded industry association, while consumer groups submit only brief comments. What concern does this situation most directly raise?",
    options: ["Unequal expertise may tilt the rule toward wealthier interests", "The agency has acted outside the notice-and-comment process", "Consumer groups have been barred from commenting by the agency", "Congress has lost its power to oversee the agency's work"],
    correctIndex: 0,
    explanation: "When agencies depend on technical information from well-resourced groups, the resulting rules may favor those groups, a step toward agency capture. Comments are part of normal notice-and-comment rulemaking, and nothing suggests anyone was barred.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },

  // Part 5 — Change Over Time: the advocacy explosion; dealignment
  {
    id: 'gov-parties-interest-groups-ent-5a',
    question: "Since the 1960s, membership groups with local chapters that brought people of different classes together face to face have declined, while Washington-based groups run by professional staff and supported by mailed-in dues have multiplied. Which consequence do scholars most often draw from this shift?",
    options: ["Interest groups now have far less influence on national policy", "Political parties have absorbed most interest groups' functions", "Local chapters now control the agendas of national organizations", "Advocacy grew more remote and less tied to civic life"],
    correctIndex: 3,
    explanation: "The move from federated membership groups to staff-driven advocacy organizations professionalized interest-group politics and weakened face-to-face civic participation. Group influence in Washington grew rather than shrank.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },
  {
    id: 'gov-parties-interest-groups-ent-5b',
    question: "White Southern voters, who had backed Democrats almost without exception for nearly a century, became mostly Republican between the 1960s and the 1990s, giving Republicans a durable base in the region. Which concept best describes this change?",
    options: ["Dealignment", "Realignment", "Divided government", "Split-ticket voting"],
    correctIndex: 1,
    explanation: "A lasting shift of a large group from one party's coalition to the other's is a realignment, here a gradual one driven by civil rights and other issues. Dealignment is a weakening of party ties without a new coalition taking shape.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },

  // Part 6 — Problem-Solving Workshop: analyzing outside spending; evidence for competing theories
  {
    id: 'gov-parties-interest-groups-ent-6a',
    question: "A national interest group's super PAC spends millions of dollars in a House primary to defeat an incumbent who opposed the group's position, running ads that focus mostly on local issues. Which concern about representation would an analyst most likely raise?",
    options: ["Members may avoid crossing well-funded groups, which magnifies one faction's power", "The spending was illegal, since super PACs may not take part in primary elections", "Primaries reduce the influence of interest groups compared with general elections", "Local issue ads show that national groups have little interest in House races"],
    correctIndex: 0,
    explanation: "Heavy independent spending against members who cross a group can make other lawmakers reluctant to oppose it, raising the concern about factions that Federalist No. 10 addressed. Super PACs may legally spend in primaries if they do not coordinate with candidates.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },
  {
    id: 'gov-parties-interest-groups-ent-6b',
    question: "A student argues that the campaign finance system since 2010 supports the elitist critique of American politics rather than the pluralist view. Which piece of evidence would best support this argument?",
    options: ["Thousands of PACs representing very different interests now give to candidates", "Interest groups on both sides of most issues file amicus briefs in major cases", "A tiny fraction of donors supplies a huge share of all reported donations", "Voters who belong to several groups face cross-pressures from different sides"],
    correctIndex: 2,
    explanation: "Concentration of political money among a very small number of wealthy donors fits the elitist claim that a narrow group dominates. Many competing PACs and briefs on both sides of issues are evidence for pluralism instead.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },

  // Part 7 — AP Review: required campaign finance case; primary types
  {
    id: 'gov-parties-interest-groups-ent-7a',
    question: "Which of the following activities remains prohibited after the Supreme Court's decision in *Citizens United v. FEC* (2010)?",
    options: ["A union paying for its own ads that oppose a candidate", "A corporation giving treasury funds straight to a candidate", "A corporation funding a super PAC that supports a candidate", "A nonprofit group airing a film that criticizes a candidate"],
    correctIndex: 1,
    explanation: "*Citizens United* protected independent spending by corporations and unions, but the long-standing ban on corporate contributions directly to federal candidates still stands. Funding a super PAC and independent ads are permitted.",
    partNumber: 7,
    partTitle: "AP Review",
  },
  {
    id: 'gov-parties-interest-groups-ent-7b',
    question: "In State R, candidates of every party appear on a single primary ballot open to all voters, and the two top vote-getters advance to the general election even if both belong to the same party. What kind of primary does State R use?",
    options: ["A closed primary", "A caucus", "An open primary", "A top-two primary"],
    correctIndex: 3,
    explanation: "A top-two, or blanket, primary puts all candidates on one ballot and advances the two leaders regardless of party. A closed primary is limited to party members, and an open primary lets any voter choose one party's ballot.",
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
