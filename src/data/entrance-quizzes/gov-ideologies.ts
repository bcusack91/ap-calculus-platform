/**
 * Entrance Quiz — Political Ideologies (AP US Government and Politics) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: core ideologies; agents of political socialization
  {
    id: 'gov-ideologies-ent-1a',
    question: "A voter wants to cut income taxes, remove most regulations on business, legalize recreational drug use, and keep government out of decisions about marriage. Which ideology best describes this voter?",
    options: ["Modern conservatism", "Modern liberalism", "Libertarianism", "Populism"],
    correctIndex: 2,
    explanation: "Libertarians favor minimal government in both the economy and personal life, combining low taxes and deregulation with personal freedom on social issues. Modern conservatives share the economic views but usually favor more government support for traditional social values.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'gov-ideologies-ent-1b',
    question: "A student raised in a home where politics was rarely discussed joins a campus environmental club. After four years of discussions and activism with fellow members, she identifies as a strong liberal. Which agent of political socialization does this best illustrate?",
    options: ["Generational events in a cohort", "Peer groups she chose to join", "Media coverage of election campaigns", "Her family's political loyalties"],
    correctIndex: 1,
    explanation: "Friends and groups people join, especially in young adulthood, can shape political views, as the club members did here. Her family offered little political direction, and no shared historical event or media source is described.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Key Processes: polling and margin of error; Keynesian vs. supply-side policy
  {
    id: 'gov-ideologies-ent-2a',
    question: "A random-sample poll of 1,000 likely voters finds 58 percent support Candidate A and 38 percent support Candidate B, with a margin of error of plus or minus 3 percentage points. Which conclusion is best supported?",
    options: ["Candidate A is certain to win, since polls measure the vote exactly", "The poll is invalid, since 1,000 people cannot represent millions of voters", "The race is too close to call, since every poll has some error", "Candidate A likely leads, since the gap far exceeds the possible error"],
    correctIndex: 3,
    explanation: "Even at the edges of the margin, Candidate A (at least 55 percent) stays well ahead of Candidate B (at most 41 percent), so the poll supports a real lead, though not certainty about the outcome. A random sample of about 1,000 can represent a national electorate.",
    partNumber: 2,
    partTitle: "Key Processes",
  },
  {
    id: 'gov-ideologies-ent-2b',
    question: "The economy is booming and inflation is rising quickly. Which fiscal policy would Keynesian economics recommend?",
    options: ["Cut taxes sharply to spur still more business investment", "Reduce government spending or raise taxes to cool demand", "Increase government spending to keep the boom going", "End the central bank's control over interest rates"],
    correctIndex: 1,
    explanation: "Keynesian theory calls for countercyclical fiscal policy: spending more in recessions and, when demand is overheating, spending less or taxing more to slow it. Tax cuts to spur investment are a supply-side prescription.",
    partNumber: 2,
    partTitle: "Key Processes",
  },

  // Part 3 — Patterns & Examples: sorting, demographic patterns, realignment
  {
    id: 'gov-ideologies-ent-3a',
    question: "In the 1970s, Congress included many conservative Southern Democrats and liberal Northeastern Republicans. Today almost none remain, and nearly every Democrat is more liberal than nearly every Republican. Which concept best describes this change?",
    options: ["Partisan sorting", "The gender gap", "Issue ownership", "Split-ticket voting"],
    correctIndex: 0,
    explanation: "Partisan sorting is the process by which people's ideologies line up more closely with their party, leaving few conservatives among Democrats or liberals among Republicans. The gender gap concerns differences between men and women, and issue ownership concerns which party voters trust on an issue.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },
  {
    id: 'gov-ideologies-ent-3b',
    question: "Hypothetical exit-poll data on the share of white voters choosing the Democratic candidate:\n- College graduates: 45 percent in Election 1, 53 percent in Election 2\n- Non-college voters: 40 percent in Election 1, 33 percent in Election 2\nWhich conclusion do these data best support?",
    options: ["Non-college voters moved toward the Democrats while graduates did not", "Both groups moved toward the Democrats by the same amount", "The gap in party backing by education widened over time", "Education stopped mattering to how white voters chose a party"],
    correctIndex: 2,
    explanation: "The gap grew from 5 points to 20 points as graduates moved toward the Democrats and non-college voters moved away, the pattern often called the diploma divide. Non-college voters moved toward the Republicans, not the Democrats.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },

  // Part 4 — Connections & Interactions: minor parties, media, and polarization
  {
    id: 'gov-ideologies-ent-4a',
    question: "The Libertarian Party has run candidates in nearly every presidential election since the 1970s but rarely wins any office. Which feature of the U.S. electoral system best explains this?",
    options: ["Federal law bars minor parties from appearing on ballots", "The Constitution permits only two parties to hold office", "Minor parties are not allowed to raise campaign money", "Winner-take-all districts reward only first place"],
    correctIndex: 3,
    explanation: "When only the top vote-getter in each district or state wins, a party that finishes second or third everywhere earns no seats, so voters often avoid backing it. Minor parties are legal, can raise money, and appear on many ballots.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },
  {
    id: 'gov-ideologies-ent-4b',
    question: "A study finds that conservatives increasingly get their news from one cable network and liberals from another, and that over the same years both groups came to view the opposing party more negatively. Which explanation do these findings best support?",
    options: ["Partisan media may have lowered public interest in political news", "Selective exposure to like-minded media may deepen polarization", "Cable networks are now required to present both sides equally", "Ideology no longer affects which news sources people choose"],
    correctIndex: 1,
    explanation: "Choosing outlets that match one's views, known as selective exposure, creates echo chambers that can reinforce partisan hostility. The findings show ideology shaping news choices more, not less, and the fairness doctrine that once required balance was abolished in 1987.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },

  // Part 5 — Change Over Time: critical elections; the conservative resurgence
  {
    id: 'gov-ideologies-ent-5a',
    question: "In 1896, the Republican Party's urban and industrial coalition decisively defeated a Democratic and Populist coalition of farmers, and Republicans then dominated national politics for more than three decades. How is this election best described?",
    options: ["As a midterm wave that changed control of Congress", "As an example of divided government after an election", "As a critical election that reshuffled voter loyalties", "As a case of dealignment, with voters leaving both parties"],
    correctIndex: 2,
    explanation: "A critical election produces a lasting shift in which groups support which party, as 1896 did and as 1932 did later. Dealignment describes voters drifting away from party loyalty altogether.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },
  {
    id: 'gov-ideologies-ent-5b',
    question: "Which set of policies best represents the conservative resurgence that began with Ronald Reagan's election in 1980?",
    options: ["Tax cuts, deregulation, and more state control of programs", "Medicare, federal aid to schools, and the War on Poverty", "Social Security, federal labor protections, and jobs programs", "A national health plan, higher top tax rates, and new agencies"],
    correctIndex: 0,
    explanation: "Reagan's agenda cut taxes, reduced regulation, and pursued a new federalism that shifted responsibility to the states. Medicare and the War on Poverty belong to the Great Society, and Social Security and labor protections to the New Deal.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },

  // Part 6 — Problem-Solving Workshop: required documents; the five-step framework
  {
    id: 'gov-ideologies-ent-6a',
    question: "An essay argues that individuals pursuing their own self-interest in competitive markets allocate resources efficiently, so government should keep its regulation of the economy limited. Which required document best supports this argument?",
    options: ["Federalist No. 10", "Letter from a Birmingham Jail", "Federalist No. 70", "The core principles of *The Wealth of Nations*"],
    correctIndex: 3,
    explanation: "Adam Smith's *The Wealth of Nations* is the source of the free-enterprise principles of self-interest, competition, and limited government regulation of markets, a root of conservative and libertarian economic views. Federalist No. 10 concerns factions, not markets.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },
  {
    id: 'gov-ideologies-ent-6b',
    question: "An analyst explaining a candidate's victory lists the racial, religious, educational, and regional groups and the interest groups that lined up behind each side. Which step of the five-step framework for ideological analysis is this?",
    options: ["Identifying the ideological stake", "Mapping the coalitions on each side", "Finding a historical precedent", "Analyzing the channels of influence"],
    correctIndex: 1,
    explanation: "Listing which demographic groups, interest groups, and regions support each side is the coalition-mapping step. Identifying the stake concerns the underlying beliefs, and the channels step concerns parties, media, and policymaking.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },

  // Part 7 — AP Review: polling failures; how party identification forms
  {
    id: 'gov-ideologies-ent-7a',
    question: "In a hypothetical election, state polls underestimated a candidate because their samples included too few voters without college degrees, a group that strongly favored him. Which fix did pollsters most likely adopt afterward?",
    options: ["Surveying many more people the same way, since a bigger sample cures bias", "Weighting each education level by its actual share of turnout", "Switching to online panels that any visitor can choose to join", "Asking respondents only about the candidates they dislike most"],
    correctIndex: 1,
    explanation: "When a group is underrepresented, pollsters weight the responses so each group counts in proportion to its share of the electorate, as many did by education after missing non-college voters. A larger biased sample stays biased, and opt-in panels add self-selection.",
    partNumber: 7,
    partTitle: "AP Review",
  },
  {
    id: 'gov-ideologies-ent-7b',
    question: "Which statement best describes how party identification typically develops over a person's life?",
    options: ["It is set by school civics classes and rarely changes after high school", "It forms only after a person casts a first vote and shifts every election", "It begins in the family and firms up in young adulthood, then mostly holds", "It is determined mainly by income and changes whenever income rises"],
    correctIndex: 2,
    explanation: "Children usually pick up a party attachment from their families, young adulthood experiences crystallize it, and it tends to stay fairly stable through midlife. Family is the strongest single influence, not schooling or income.",
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
