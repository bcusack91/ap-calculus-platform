/**
 * Entrance Quiz — Public Opinion and Political Socialization (AP US Government and Politics) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: dimensions of public opinion; types of polls
  {
    id: 'gov-public-opinion-ent-1a',
    question: "Polls show that 80 percent of Americans support a proposed policy, yet it fails in Congress year after year. Few supporters name the issue as important to their vote, while most of the 20 percent who oppose it say they will vote on this issue alone. Which dimensions of public opinion best explain the outcome?",
    options: ["Stability and sampling error", "Intensity and salience", "Party identification and turnout", "Framing and question order"],
    correctIndex: 1,
    explanation: "Intensity is how strongly people hold a view and salience is how important the issue is to them; an intense minority for whom the issue is salient can outweigh a large but lukewarm majority. Sampling error concerns how a poll is measured, not why policy diverges from it.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'gov-public-opinion-ent-1b',
    question: "In the final month of a campaign, a pollster interviews a fresh sample every night and reports a rolling three-night average, dropping the oldest night's interviews each day, to follow shifts in support. What kind of poll is this?",
    options: ["A benchmark poll", "An exit poll", "A push poll", "A tracking poll"],
    correctIndex: 3,
    explanation: "A tracking poll measures opinion repeatedly over time, often as a rolling average, to show trends late in a campaign. A benchmark poll sets a starting point, an exit poll surveys voters as they leave the polls, and a push poll is disguised campaigning.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Key Processes: question wording; house effects and averages
  {
    id: 'gov-public-opinion-ent-2a',
    question: "Two polls taken the same week, with similar random samples, ask about the same federal program. Poll A asks about \"assistance to the poor\" and finds 65 percent support; Poll B asks about \"welfare\" and finds 40 percent support. What best explains the difference?",
    options: ["The wording of each question shaped answers", "One sample was too small to be reliable", "Opinion changed sharply within a single week", "Poll B surveyed only registered party members"],
    correctIndex: 0,
    explanation: "When samples are comparable, a gap this large on the same policy reflects question wording, since terms carry different connotations for respondents. The scenario gives no sign of a small sample or a restricted population.",
    partNumber: 2,
    partTitle: "Key Processes",
  },
  {
    id: 'gov-public-opinion-ent-2b',
    question: "Over a full year, one polling firm's results consistently show Party R about 4 points better than the average of all other polls taken at the same time. Which concept describes this pattern, and how should a reader respond?",
    options: ["Margin of error, so readers should discard the firm's polls entirely", "Push polling, so readers should report the firm to election officials", "A house effect, so readers should check it against other firms' results", "Social desirability bias, so readers should trust only that one firm"],
    correctIndex: 2,
    explanation: "A house effect is a consistent lean in one pollster's results caused by its methods, such as weighting or likely-voter screens; comparing with averages of many polls helps offset it. Margin of error describes random variation, which would not lean the same way every time.",
    partNumber: 2,
    partTitle: "Key Processes",
  },

  // Part 3 — Patterns & Examples: generational differences; gender and marriage gaps
  {
    id: 'gov-public-opinion-ent-3a',
    question: "A hypothetical survey reports support for legalizing marijuana by generation:\n- Born before 1946: 35 percent\n- Born 1946 to 1964: 52 percent\n- Born 1981 to 1996: 74 percent\nIf individual views stay stable, what does this pattern suggest about national opinion over the coming decades?",
    options: ["Support will fall as younger people adopt their parents' views", "Support will stay the same, since generations offset each other", "Generational differences have no effect on national opinion", "Support will tend to rise as younger cohorts replace older ones"],
    correctIndex: 3,
    explanation: "When views are stable and younger cohorts hold different opinions, generational replacement gradually shifts overall opinion toward the younger groups' position. This process helped drive rapid changes in opinion on issues such as same-sex marriage.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },
  {
    id: 'gov-public-opinion-ent-3b',
    question: "Hypothetical exit-poll data on the share voting for the Democratic candidate:\n- Women: 55 percent; men: 44 percent\n- Unmarried voters: 58 percent; married voters: 45 percent\nWhich conclusion do these data best support?",
    options: ["Men and married voters leaned more Democratic than others", "Women and single voters leaned more Democratic than others", "Marital status mattered but women and men voted alike", "The Democratic candidate lost every group listed"],
    correctIndex: 1,
    explanation: "Women backed the Democrat by 11 more points than men did, a gender gap, and unmarried voters by 13 more points than married voters, a marriage gap. Both differences appear in the data, so neither factor can be dismissed.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },

  // Part 4 — Connections & Interactions: party identification; media effects
  {
    id: 'gov-public-opinion-ent-4a',
    question: "Over two administrations, unemployment falls by the same amount under a president of each party. Surveys show that partisans rate the economy as improving only when their own party holds the White House. Which concept best explains this pattern?",
    options: ["Political efficacy, as partisans feel they can shape policy", "Random sampling error in surveys about the national economy", "Partisan loyalty acting as a filter on how people see facts", "Agenda-setting by the media during each administration"],
    correctIndex: 2,
    explanation: "Party identification works as a perceptual screen: through motivated reasoning, people interpret the same conditions in ways that favor their own side. Sampling error would not produce a consistent partisan pattern.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },
  {
    id: 'gov-public-opinion-ent-4b',
    question: "A study finds that campaign advertising rarely changes whom viewers support; instead, it mostly strengthens the preferences viewers already held. Which view of media influence do these findings support?",
    options: ["Agenda-setting", "Horse-race coverage", "Hostile media perception", "Minimal effects"],
    correctIndex: 3,
    explanation: "The minimal-effects view holds that media messages mainly reinforce existing opinions rather than converting people. Agenda-setting concerns which issues people consider important, and horse-race coverage focuses on who is ahead.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },

  // Part 5 — Change Over Time: polling history; declining trust in government
  {
    id: 'gov-public-opinion-ent-5a',
    question: "In 1948, major polls predicted that Thomas Dewey would defeat Harry Truman. The pollsters had filled demographic quotas rather than drawing random samples and had stopped polling weeks before Election Day. Which lesson did the polling industry draw?",
    options: ["Polls should rely on much larger mail-in samples instead of random ones", "Polls need random samples and should keep going until ballots are cast", "Polls should survey only voters registered with the two major parties", "Polls cannot measure opinion and should be replaced by straw polls"],
    correctIndex: 1,
    explanation: "Quota sampling let interviewers choose whom to survey, and stopping early missed late-deciding voters, so pollsters adopted random sampling and kept polling until the election. Large volunteer samples were the flaw behind the 1936 Literary Digest failure.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },
  {
    id: 'gov-public-opinion-ent-5b',
    question: "Hypothetical survey data on the share of adults who trust the national government to do what is right most of the time:\n- Year 1: 70 percent\n- Year 12: 35 percent\n- Year 20 (weeks after a foreign attack): 60 percent\n- Year 24: 25 percent\nWhich conclusion do these data best support?",
    options: ["Trust rose steadily across the whole period", "The foreign attack caused a lasting recovery in trust", "Trust never fell below half of adults in the period", "A crisis lifted trust briefly within a long decline"],
    correctIndex: 3,
    explanation: "Trust fell from 70 to 35 percent, jumped to 60 percent just after the attack, then dropped to 25 percent: a short crisis rally inside a long decline, the same shape as the real post-1964 record. The rise did not last, and trust fell well below half.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },

  // Part 6 — Problem-Solving Workshop: evaluating poll quality; required documents
  {
    id: 'gov-public-opinion-ent-6a',
    question: "A student must decide which of four polls on a Senate race to trust most. Which poll is most likely to give an accurate picture of the electorate?",
    options: ["A random sample of a thousand likely voters by an independent university with its wording published", "An online poll on a candidate's website that drew 50,000 responses from site visitors", "A poll paid for by one campaign that surveyed 300 people and kept its wording private", "A set of 200 street interviews with shoppers conducted at one mall on a weekday"],
    correctIndex: 0,
    explanation: "A random sample of adequate size, an independent sponsor, and transparent wording are marks of a quality poll. Self-selected online respondents, small campaign-sponsored samples, and mall interviews are not representative, no matter how many responses they collect.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },
  {
    id: 'gov-public-opinion-ent-6b',
    question: "An essay argues that in a vast country, representatives will be too distant to know or share the views of the people, so government should stay small and close to public opinion. Which required document makes this argument?",
    options: ["Federalist No. 10", "Federalist No. 51", "Brutus No. 1", "Federalist No. 78"],
    correctIndex: 2,
    explanation: "Brutus No. 1 argues that a free republic must be small so that representatives reflect the people. Federalist No. 10 takes the opposite view, that representation in a large republic refines and filters popular opinion.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },

  // Part 7 — AP Review: sampling vs. non-sampling error; models of representation
  {
    id: 'gov-public-opinion-ent-7a',
    question: "A poll reports a margin of error of plus or minus 3 percentage points. Which source of error does that margin account for?",
    options: ["Loaded or confusing question wording", "Groups that refuse to answer pollsters", "Respondents giving socially acceptable answers", "Chance variation from surveying a sample"],
    correctIndex: 3,
    explanation: "The margin of error measures only random sampling error, the chance that a sample differs from the population. Wording problems, nonresponse bias, and social desirability bias are non-sampling errors that the margin does not capture.",
    partNumber: 7,
    partTitle: "AP Review",
  },
  {
    id: 'gov-public-opinion-ent-7b',
    question: "A member of Congress follows the clear wishes of her constituents on highly visible issues such as gun policy, but relies on her own judgment when voting on technical banking rules that few voters follow. Which model of representation does she follow?",
    options: ["The trustee model", "The politico model", "The delegate model", "The partisan model"],
    correctIndex: 1,
    explanation: "The politico model blends the two roles, acting as a delegate on salient issues and as a trustee on low-visibility ones. A pure delegate would follow constituents on every vote, and a pure trustee would rely on personal judgment throughout.",
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
