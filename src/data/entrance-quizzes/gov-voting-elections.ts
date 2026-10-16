/**
 * Entrance Quiz — Voting and Elections (AP US Government and Politics) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: models of voting behavior; turnout patterns
  {
    id: 'gov-voting-elections-ent-1a',
    question: "Before an election, a voter studies each candidate's plans for the next four years and chooses the one whose agenda she expects will work best for the country, regardless of how the current officeholders have performed. Which model of voting behavior does this illustrate?",
    options: ["Retrospective voting", "Straight-ticket voting", "Prospective voting", "Party-line voting"],
    correctIndex: 2,
    explanation: "Prospective voting bases a choice on predictions of how candidates will perform in the future. Retrospective voting judges the party in power by its past record, and straight-ticket voting means backing one party for every office.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'gov-voting-elections-ent-1b',
    question: "Hypothetical turnout data from a recent presidential election:\n- Ages 18 to 29: 50 percent; ages 65 and older: 75 percent\n- College graduates: 78 percent; no college degree: 52 percent\nWhich conclusion do these data best support?",
    options: ["Older and better-educated citizens were more likely to vote", "Younger citizens voted at higher rates than older citizens", "Education made little difference in who turned out to vote", "Turnout was roughly equal across every group shown"],
    correctIndex: 0,
    explanation: "Turnout was 25 points higher for the oldest group than the youngest and 26 points higher for college graduates than for those without degrees, consistent with age and education being strong predictors of voting.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Key Processes: campaign finance; delegate allocation in primaries
  {
    id: 'gov-voting-elections-ent-2a',
    question: "A group raises \\$20 million from a handful of wealthy donors and one corporation, then runs television ads supporting a Senate candidate. It never coordinates its spending with the candidate's campaign. How is the group best classified under current law?",
    options: ["An illegal group, since contributions to a campaign are capped", "A party committee, since it spends to help one candidate win", "A traditional PAC, which may accept unlimited corporate funds", "A super PAC, which may collect unlimited sums if it acts independently"],
    correctIndex: 3,
    explanation: "Since *Citizens United v. FEC* and a related 2010 lower-court ruling, independent-expenditure-only committees, or super PACs, may raise unlimited amounts from individuals, corporations, and unions as long as they do not coordinate with candidates. Traditional PACs remain subject to contribution limits.",
    partNumber: 2,
    partTitle: "Key Processes",
  },
  {
    id: 'gov-voting-elections-ent-2b',
    question: "A party awards primary delegates in proportion to the vote, but only to candidates who win at least 15 percent. In one state's primary, Candidate A wins 45 percent, B wins 40 percent, C wins 10 percent, and D wins 5 percent. How are the state's delegates divided?",
    options: ["All delegates go to Candidate A as the plurality winner", "A and B split the delegates roughly by their vote shares", "All four candidates receive delegates matching their shares", "The delegates are held until the national convention votes"],
    correctIndex: 1,
    explanation: "Only A and B clear the 15 percent threshold, so they divide the delegates roughly in proportion to their shares, with A receiving somewhat more. Winner-take-all allocation would give everything to A.",
    partNumber: 2,
    partTitle: "Key Processes",
  },

  // Part 3 — Patterns & Examples: realigning elections; battleground states
  {
    id: 'gov-voting-elections-ent-3a',
    question: "Black voters, who had mostly supported the Republican Party since the Civil War, shifted heavily toward the Democrats during the 1930s. Which development best explains this shift?",
    options: ["The Democrats' adoption of the Voting Rights Act in that decade", "The Republican Party's abandonment of its Northern supporters", "The economic relief programs of Franklin Roosevelt's New Deal", "A constitutional amendment that ended segregation in the South"],
    correctIndex: 2,
    explanation: "New Deal relief and jobs programs drew Black voters into the Democratic coalition by 1936, part of the realignment that began in 1932. The Voting Rights Act came in 1965, and no amendment ended segregation.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },
  {
    id: 'gov-voting-elections-ent-3b',
    question: "In recent presidential elections, only about seven states have been truly competitive, while the rest vote reliably for one party. Given that 48 states award all their electoral votes to the statewide winner, how does this pattern most likely shape campaigns?",
    options: ["Candidates focus their visits and ad spending on a few swing states", "Candidates spend evenly in every state to win the national popular vote", "Candidates campaign mainly in the largest states, whatever their lean", "Candidates avoid swing states, since those states split their electors"],
    correctIndex: 0,
    explanation: "Under winner-take-all rules, extra votes in a safe state add no electors, so campaigns concentrate resources where the statewide result is in doubt. Maine and Nebraska are the only states that can split their electoral votes.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },

  // Part 4 — Connections & Interactions: interest groups and parties in elections
  {
    id: 'gov-voting-elections-ent-4a',
    question: "Before each election, an advocacy organization publishes letter grades for every member of Congress based on their votes on its issues and endorses the candidates with the highest grades. How does this activity most directly influence elections?",
    options: ["It sets the legal limit on how much each candidate may spend", "It decides which candidates will appear on the general election ballot", "It replaces party identification as most voters' main guide", "It gives voters a shortcut for judging where candidates stand"],
    correctIndex: 3,
    explanation: "Ratings and endorsements act as cues, especially for voters with limited information, signaling which candidates share the group's views. Groups do not control ballot access or spending limits, and party identification remains the strongest guide for most voters.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },
  {
    id: 'gov-voting-elections-ent-4b',
    question: "A hypothetical study tracks how often states choose the same party in a Senate race and the presidential race held in the same year:\n- 1980s: 55 percent of such contests\n- 2020s: 95 percent of such contests\nWhich conclusion do these data best support?",
    options: ["Voters became more likely to choose different parties for different offices", "Split-ticket voting declined as loyalty to one side grew stronger", "Senate races came to depend mostly on candidates' local reputations", "Presidential coattails disappeared as a factor in Senate elections"],
    correctIndex: 1,
    explanation: "When nearly every state picks the same party for both offices, voters are rarely splitting their tickets, consistent with partisan sorting and the nationalization of elections. The data point toward stronger, not weaker, links between presidential and Senate voting.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },

  // Part 5 — Change Over Time: media and campaigns; campaign finance law
  {
    id: 'gov-voting-elections-ent-5a',
    question: "In the first televised presidential debate in 1960, according to accounts at the time, radio listeners thought Richard Nixon had done well, while many television viewers favored John Kennedy, who appeared calm and rested. What change in campaigning does this episode best illustrate?",
    options: ["The new TV era made a candidate's on-screen image far more important", "Radio replaced newspapers as the main source of campaign information", "Debates stopped mattering because voters had already made up their minds", "Televised debates required candidates to accept public campaign funding"],
    correctIndex: 0,
    explanation: "The 1960 debate is a classic example of how television shifted attention toward candidates' visual presentation, a change that shaped campaigns from then on. Debates were not tied to public funding.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },
  {
    id: 'gov-voting-elections-ent-5b',
    question: "Federal campaign finance rules changed in three steps: a 1971 law set contribution limits and disclosure rules, a 2002 law banned unlimited \"soft money\" gifts to national parties, and a 2010 Supreme Court ruling allowed unlimited independent spending by corporations and unions. Which statement best describes this pattern?",
    options: ["Congress tightened rules, then the Court loosened them for outside groups", "Congress steadily removed limits, and the Court then restored them", "The rules have stayed basically the same since the 1970s", "The Court has banned corporate involvement in elections since 2010"],
    correctIndex: 0,
    explanation: "The 1971 and 2002 laws expanded regulation, while *Citizens United v. FEC* (2010) treated independent spending as protected speech, opening the way for super PACs. Direct corporate contributions to candidates remain banned, but outside spending is now unlimited.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },

  // Part 6 — Problem-Solving Workshop: question types; required documents
  {
    id: 'gov-voting-elections-ent-6a',
    question: "A free-response question asks: \"Should states join the National Popular Vote Interstate Compact?\" Using the problem-solving framework, what type of question is this, and what does a strong answer need?",
    options: ["A causal explanation, needing several reasons why the compact was proposed", "A comparison, needing a parallel description of two different elections", "An evaluation, needing clear criteria and a weighing of pros and cons", "A prediction, needing a forecast of the next presidential election result"],
    correctIndex: 2,
    explanation: "A should-question asks for a judgment, so it is an evaluation that requires stating criteria and weighing arguments on both sides before reaching a conclusion. Causal, comparison, and prediction questions ask for different kinds of reasoning.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },
  {
    id: 'gov-voting-elections-ent-6b',
    question: "An essay defends the framers' choice of indirect methods for selecting some officials, arguing that passing public views through a chosen body of citizens will refine and enlarge them and help control the effects of faction. Which required document does the essay draw on?",
    options: ["Brutus No. 1", "Federalist No. 10", "Federalist No. 78", "Federalist No. 70"],
    correctIndex: 1,
    explanation: "Federalist No. 10 argues that representation refines and enlarges public views and that a large republic controls the effects of faction. Brutus No. 1 argues instead that representatives in a large republic will be too distant from the people.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },

  // Part 7 — AP Review: required case comparison; why turnout is low
  {
    id: 'gov-voting-elections-ent-7a',
    question: "In a case that is not on the required list, the Supreme Court strikes down a state law that barred corporations from spending their own money on advertisements about ballot measures, reasoning that such spending is protected political speech. Which required case does this ruling most closely resemble?",
    options: ["*Baker v. Carr*", "*Shaw v. Reno*", "*Schenck v. United States*", "*Citizens United v. FEC*"],
    correctIndex: 3,
    explanation: "*Citizens United v. FEC* held that the First Amendment protects independent political spending by corporations, the same reasoning applied here. *Baker v. Carr* and *Shaw v. Reno* concern how election districts are drawn.",
    partNumber: 7,
    partTitle: "AP Review",
  },
  {
    id: 'gov-voting-elections-ent-7b',
    question: "Turnout in U.S. presidential elections is lower than in many other democracies. Which pair of factors best helps explain this?",
    options: ["Required advance registration and holding elections on a weekday", "Compulsory voting laws and a fixed national election day", "Automatic registration and long early-voting periods", "Proportional representation and a large number of parties"],
    correctIndex: 0,
    explanation: "Many democracies register voters automatically and vote on weekends or holidays, while most Americans must register in advance and vote on a Tuesday. Compulsory voting and automatic registration raise turnout rather than lower it.",
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
