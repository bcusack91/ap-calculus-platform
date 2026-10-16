/**
 * Entrance Quiz — Writing for Audience (AP English Language) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englang-writing-for-audience-ent-1a',
    question: "A student is revising an argument for an audience of town voters. Which revision crosses the line from adapting to the audience into manipulating it?",
    options: [
      "Opening with figures from the town itself in place of national figures",
      "Defining a technical term that general readers are unlikely to know",
      "Cutting the one study that hurt her case so voters never see it",
      "Answering the objection she expects voters to raise before making her second point",
    ],
    correctIndex: 2,
    explanation: "Hiding contrary evidence because it might persuade readers is cherry-picking, which adaptation must not do. Choosing local figures, defining terms and answering a likely objection all fit the argument to the reader honestly.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englang-writing-for-audience-ent-1b',
    question: "A student is writing to local restaurant owners in support of a city ban on plastic straws. Which sentence best anticipates this audience's likely resistance?",
    options: [
      "Owners who resist the ban simply do not care what happens to the ocean or its wildlife.",
      "Owners fear the cost of paper straws, so the ban starts with a grace period.",
      "Plastic straws harm sea turtles and many other forms of marine life every single year.",
      "The ban is supported by a clear majority of the residents surveyed across the city.",
    ],
    correctIndex: 1,
    explanation: "Cost is the objection restaurant owners are most likely to raise, and the grace period answers it while keeping the claim. Insulting the owners, repeating environmental harms they may already know and citing public opinion all leave their real concern unmet.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — A Theory of Persuasion: Lincoln's Temperance Address, 1842
  {
    id: 'englang-writing-for-audience-ent-2a',
    question: "A real-estate agent writes to her neighbors in support of rezoning a vacant lot for apartments. Many neighbors assume she supports the plan to earn commissions. Which opening sentence best answers their suspicion?",
    options: [
      "Let me say plainly that I will not earn a cent from this project, whoever buys or sells.",
      "As an agent with twenty years of sales here, I know this market better than anyone on the street.",
      "Anyone who thinks I am in this for the money does not know me or my family at all.",
      "Rezoning will raise the value of every home on our street within the next five years.",
    ],
    correctIndex: 0,
    explanation: "Readers judge why a writer speaks before they judge what she says, so showing that she gains nothing removes the motive they suspect. Stressing her sales career or promising higher home values feeds the suspicion, and a defensive retort answers it with heat rather than facts.",
    partNumber: 2,
    partTitle: "A Theory of Persuasion: Lincoln's Temperance Address, 1842",
  },
  {
    id: 'englang-writing-for-audience-ent-2b',
    question: "A student council member wants classmates to start carrying reusable water bottles. Several classmates say one student's choice will make no difference to how much plastic the school throws away. Which sentence best answers that doubt?",
    options: [
      "Studies show that social influence shapes human behavior in a wide range of settings.",
      "Anyone who believes one person cannot matter should be ashamed of that attitude.",
      "Remember how the whole lunch table had the new snack within a week of one of us trying it.",
      "The principal has already made clear that every student is expected to bring a bottle.",
    ],
    correctIndex: 2,
    explanation: "An example from the classmates' own lunch table lets them see for themselves that one person's habit spreads, so they reach the conclusion on their own. A general study is distant, shaming hardens resistance and invoking the principal commands rather than persuades.",
    partNumber: 2,
    partTitle: "A Theory of Persuasion: Lincoln's Temperance Address, 1842",
  },

  // Part 3 — Writing to an Angry Audience: Washington at Newburgh, 1783
  {
    id: 'englang-writing-for-audience-ent-3a',
    question: "Players and parents in a youth soccer league are angry that the town turned their only practice field into a parking lot. The parks director must open a crowded meeting with them. Which opening best suits this audience?",
    options: [
      "Before I explain anything, I want to hear from the coaches who lost their field.",
      "People who shout at public meetings only make it harder for anyone to help them.",
      "The parking lot is finished, so there is no point in discussing the field tonight.",
      "Anyone who disrupts this meeting will be asked by security to leave the room.",
    ],
    correctIndex: 0,
    explanation: "Inviting the people most affected to speak first shows respect for their grievance and lowers the temperature before any explanation. Scolding, closing the subject or threatening removal would confirm the audience's anger.",
    partNumber: 3,
    partTitle: "Writing to an Angry Audience: Washington at Newburgh, 1783",
  },
  {
    id: 'englang-writing-for-audience-ent-3b',
    question: "A transit director addresses riders at a packed public meeting:\n\n*You are right that the Number 6 has been late two mornings out of three since March. Our drivers have seen it too. Here is why it happened, and here is what changes on Monday.*\n\nOpening with \"You are right\" is effective chiefly because",
    options: [
      "it signals that the director doubts the new plan will work",
      "it shifts the blame for the delays onto the bus drivers",
      "it hints that nothing will change for several months",
      "admitting what everyone already knew keeps her believable",
    ],
    correctIndex: 3,
    explanation: "Angry riders who lived through the delays would stop listening to anyone who denied them; conceding the true grievance earns the trust her explanation and plan need. She expresses no doubt, blames no one and promises change on Monday.",
    partNumber: 3,
    partTitle: "Writing to an Angry Audience: Washington at Newburgh, 1783",
  },

  // Part 4 — Writing for Distant Readers: Chief Joseph (1879) and Stanton (1892)
  {
    id: 'englang-writing-for-audience-ent-4a',
    question: "A farmer writes to a city newspaper about a new rule letting a bottling company pump water from beneath her land:\n\n*Imagine your neighbor ran a hose from your kitchen tap to fill his pool, and the town told you this was legal because he had filed the right form. That is what the new rule allows.*\n\nThe hose comparison is effective for city readers mainly because it",
    options: [
      "shows the farmer's detailed knowledge of local water law",
      "turns a distant dispute into a wrong they would feel at home",
      "proves that the new rule was passed through illegal means",
      "reminds readers that water grows scarce in the summer",
    ],
    correctIndex: 1,
    explanation: "Readers who have never owned a well can still see that a neighbor tapping their kitchen line is wrong, so the analogy lets them judge the rule by a standard they already hold. It displays no legal expertise, claims nothing about how the rule passed and says nothing about seasons.",
    partNumber: 4,
    partTitle: "Writing for Distant Readers: Chief Joseph (1879) and Stanton (1892)",
  },
  {
    id: 'englang-writing-for-audience-ent-4b',
    question: "A student is writing to a school board that has heard complaints about the student parking lot at nearly every meeting for years. Which opening best addresses this audience?",
    options: [
      "Parking at our school is a serious problem that affects every student who drives here.",
      "I am going to explain once again why the student lot needs more parking spaces.",
      "Rather than repeat old complaints, I want to propose a fix no one has tried yet.",
      "Students have complained about parking for years, and the board has done nothing about it.",
    ],
    correctIndex: 2,
    explanation: "A board worn out by the same case needs the writer to acknowledge its fatigue and offer something new. Restating the problem or promising to explain it \"once again\" feeds that fatigue, and blaming the board turns tired listeners into hostile ones.",
    partNumber: 4,
    partTitle: "Writing for Distant Readers: Chief Joseph (1879) and Stanton (1892)",
  },

  // Part 5 — One Argument, Three Audiences: Adapting Your Own Writing
  {
    id: 'englang-writing-for-audience-ent-5a',
    question: "A student argues that the town should light the high school track and open it to the public until 9 p.m. She is revising the argument for residents whose homes border the track and who worry about glare and noise. Which point should she lead with for this audience?",
    options: [
      "Evening hours would let student athletes train after their part-time jobs.",
      "The parks department has offered to share the cost of the new lights.",
      "Night running builds a sense of community in any town that allows it.",
      "The new lamps aim straight down and switch off at closing time.",
    ],
    correctIndex: 3,
    explanation: "Neighbors need their specific worry settled first, so the design and shut-off time should lead. Training time matters to students and shared cost to the board, and a general claim about community answers no one's concern.",
    partNumber: 5,
    partTitle: "One Argument, Three Audiences: Adapting Your Own Writing",
  },
  {
    id: 'englang-writing-for-audience-ent-5b',
    question: "A student is writing to residents who oppose a shelter planned for their street. Their main worry is safety, so she decides to leave safety out of the letter entirely in order not to \"remind them of it.\" What is the main problem with this decision?",
    options: [
      "An unspoken objection still shapes how readers judge the letter.",
      "Safety concerns belong in a conclusion rather than in the body of a letter.",
      "Residents will assume that the shelter's own staff wrote the letter for her.",
      "The letter will be too brief to persuade an audience of property owners.",
    ],
    correctIndex: 0,
    explanation: "Readers bring their objection with them whether or not the writer names it, so silence leaves it unanswered; naming it lets her respond. Where safety appears, who wrote the letter and its length are not the issue.",
    partNumber: 5,
    partTitle: "One Argument, Three Audiences: Adapting Your Own Writing",
  },

  // Part 6 — Exam Practice: Audience Revisions and an Argument Essay
  {
    id: 'englang-writing-for-audience-ent-6a',
    question: "A student is writing to the members of a garden club, who have tended the town's rose garden for decades, proposing that a science class plant a wildflower bed for pollinators beside it. Several members fear the wildflowers will spread into the roses. The writer wants to add a sentence that names the members' concern and answers it. Which choice best accomplishes this goal?",
    options: [
      "Some members fear bees would sting visitors, but bees are rarely aggressive when left alone.",
      "Some members dislike wildflowers, and we fully respect their right to hold that opinion.",
      "Some members worry about the roses, but a few stray plants are a small price for helping bees.",
      "Some members fear the flowers would creep into the roses, so we would edge the bed with stone.",
    ],
    correctIndex: 3,
    explanation: "Only this choice names the members' actual fear and answers it with a specific plan. Stings are a different worry, respecting a dislike answers nothing, and calling the risk a small price dismisses what these gardeners care about.",
    partNumber: 6,
    partTitle: "Exam Practice: Audience Revisions and an Argument Essay",
  },
  {
    id: 'englang-writing-for-audience-ent-6b',
    question: "An argument prompt asks students to take a position on the extent to which people can be judged by the company they keep. Which thesis best anticipates a skeptical reader?",
    options: [
      "People can always be judged by the company they keep, and this is true in every case.",
      "There are many different opinions about whether our friends reveal our character.",
      "Our friends often reveal our values, but judging by company alone ignores friends we keep to change them.",
      "This essay will discuss friendship, character and the ways people judge one another.",
    ],
    correctIndex: 2,
    explanation: "The qualified thesis takes a position and builds in the doubting reader's best objection, the friendships people keep for other reasons. The absolute claim invites easy counterexamples, and the other two take no position at all.",
    partNumber: 6,
    partTitle: "Exam Practice: Audience Revisions and an Argument Essay",
  },

  // Part 7 — Review: Choosing the Right Move for the Reader in Front of You
  {
    id: 'englang-writing-for-audience-ent-7a',
    question: "Residents of Elm Street have heard three mayors in a row promise to fix its potholes. Which sentence from the new mayor's letter would best suit these readers?",
    options: [
      "I will repave the six worst blocks by October and post weekly updates.",
      "I promise that every road in this city will be in perfect shape by next year.",
      "Potholes are a problem that nearly every city in the country has to face.",
      "Earlier mayors failed you, but I am a very different kind of leader.",
    ],
    correctIndex: 0,
    explanation: "Readers who distrust big promises respond to a bounded, checkable one. A sweeping pledge repeats the pattern they distrust, a general remark dodges the issue, and claiming to be different without proof is just another promise.",
    partNumber: 7,
    partTitle: "Review: Choosing the Right Move for the Reader in Front of You",
  },
  {
    id: 'englang-writing-for-audience-ent-7b',
    question: "A union leader, addressing a meeting of factory owners about wages, opens with \"Every one of you started with a single shop and a bank loan.\" Which sentence from a student's rhetorical analysis offers the strongest commentary on this choice?",
    options: [
      "The leader uses ethos and pathos in this opening in order to persuade the factory owners.",
      "By recalling their modest starts, the leader casts a raise as the ladder they once climbed.",
      "The leader tells the owners they started with one shop, which is an interesting fact about them.",
      "This opening is effective because it captures the owners' attention right from the start.",
    ],
    correctIndex: 1,
    explanation: "Strong commentary names the choice, the audience's own experience and the effect: owners who rose from little are invited to see better wages as the same opportunity they had. The others label appeals, summarize or call the line effective without explaining it.",
    partNumber: 7,
    partTitle: "Review: Choosing the Right Move for the Reader in Front of You",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "A Theory of Persuasion: Lincoln's Temperance Address, 1842" },
    { partNumber: 3, partTitle: "Writing to an Angry Audience: Washington at Newburgh, 1783" },
    { partNumber: 4, partTitle: "Writing for Distant Readers: Chief Joseph (1879) and Stanton (1892)" },
    { partNumber: 5, partTitle: "One Argument, Three Audiences: Adapting Your Own Writing" },
    { partNumber: 6, partTitle: "Exam Practice: Audience Revisions and an Argument Essay" },
    { partNumber: 7, partTitle: "Review: Choosing the Right Move for the Reader in Front of You" },
  ]
}
