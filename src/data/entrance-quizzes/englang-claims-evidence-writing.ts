/**
 * Entrance Quiz — Claims and Evidence in Writing (AP English Language) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englang-claims-evidence-writing-ent-1a',
    question: "Which claim would be most defensible as the thesis of an argument essay on school dress codes?",
    options: [
      "Dress codes are the worst policy schools have ever adopted and must be ended everywhere.",
      "Most public high schools in the country have some form of written dress code.",
      "Schools should limit dress codes to safety rules and drop rules about style.",
      "This essay will discuss several of the arguments people make about school dress codes.",
    ],
    correctIndex: 2,
    explanation: "The safety-not-style claim is clear, specific and arguable, and it limits itself to what it can defend. The first is absolute and easy to attack, the second is a fact that needs no defense, and the last announces a topic.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englang-claims-evidence-writing-ent-1b',
    question: "A student's essay arguing that her city should expand bus service supports every body paragraph with a story about the same person, her neighbor, who rides the bus to work. Which revision would most strengthen the essay's evidence?",
    options: [
      "Adding ridership figures that show her experience is typical",
      "Adding more details about the neighbor's daily commute",
      "Replacing the neighbor's stories with general remarks about civic duty",
      "Adding the opinions of several friends who also like riding the bus",
    ],
    correctIndex: 0,
    explanation: "One person's story is vivid but cannot show a pattern; data that shows her experience is common adds a different, complementary kind of evidence. More detail about the same person, general remarks or friends' opinions leave the evidence just as narrow.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — A Thesis That Earns Row A, in All Three Essays
  {
    id: 'englang-claims-evidence-writing-ent-2a',
    question: "A rhetorical analysis prompt asks students to analyze the choices a retiring fire chief makes in a farewell letter urging residents to fund a new fire station. Which thesis would earn the Row A point?",
    options: [
      "The chief argues that the town needs a new fire station before the old one finally fails.",
      "The chief's farewell letter was printed in the town newspaper during his final week of work.",
      "The chief uses ethos, pathos and logos throughout his farewell letter to the town's residents.",
      "The chief sets memories of past fires beside plain budget figures, so funding feels like a duty.",
    ],
    correctIndex: 3,
    explanation: "A rhetorical analysis thesis must analyze the writer's choices, and only this one names choices and what they accomplish. The first summarizes the chief's argument, the third lists labels and the last states a fact.",
    partNumber: 2,
    partTitle: "A Thesis That Earns Row A, in All Three Essays",
  },
  {
    id: 'englang-claims-evidence-writing-ent-2b',
    question: "An argument prompt asks students to evaluate the claim that \"the best way to learn something is to teach it.\" A student's draft thesis reads, \"This claim is partly true and partly false.\" Which revision turns it into a qualified, defensible thesis?",
    options: [
      "Teaching helps those who know the basics learn more, but beginners must be taught first.",
      "The claim is true in some important ways, and it is also false in some other ways.",
      "Many teachers and students hold strong opinions about whether this claim is really true.",
      "The claim is completely true for every kind of learner in every school subject there is.",
    ],
    correctIndex: 0,
    explanation: "The revision commits to a position and says exactly where its limit lies, which is what separates qualifying from fence-sitting. The first still sits on the fence, the third names a debate and the last overstates the claim.",
    partNumber: 2,
    partTitle: "A Thesis That Earns Row A, in All Three Essays",
  },

  // Part 3 — Building the Body Paragraph: Choosing and Placing Evidence
  {
    id: 'englang-claims-evidence-writing-ent-3a',
    question: "Prompt: *Write an essay that argues your position on the extent to which failure is necessary for success.*\n\nWhich piece of evidence is most specific and most relevant to this prompt?",
    options: [
      "Many successful people have failed at something important before they finally succeeded.",
      "Success is a goal that nearly everyone hopes to reach at some point in life.",
      "After failing his road test twice, my brother drilled his weak turns and passed.",
      "Some well-known inventors are remembered mainly for their many inventions.",
    ],
    correctIndex: 2,
    explanation: "The brother's road test names who, what and how, and it includes both terms of the prompt: the failure and the success it led to. The others are general, leave out failure or say nothing about how failure figured in success.",
    partNumber: 3,
    partTitle: "Building the Body Paragraph: Choosing and Placing Evidence",
  },
  {
    id: 'englang-claims-evidence-writing-ent-3b',
    question: "A mayor's speech after a flood includes the sentence \"We will not let this river decide who we are.\" Which sentence integrates the mayor's words most effectively for a rhetorical analysis essay?",
    options: [
      "The mayor talks about the river in his speech. \"We will not let this river decide who we are.\"",
      "The mayor won't let the river \"decide who we are\" and makes the disaster a test of will.",
      "The mayor has a quote about the river: \"We will not let this river decide who we are.\"",
      "In the speech there is the line \"decide who we are,\" which is about the river and the town.",
    ],
    correctIndex: 1,
    explanation: "The embedded phrase becomes part of the student's own claim about what the mayor does, which sets up analysis. The other sentences drop the quotation in or announce it without making any claim about it.",
    partNumber: 3,
    partTitle: "Building the Body Paragraph: Choosing and Placing Evidence",
  },

  // Part 4 — Commentary That Scores: Revising a Paragraph From 2 to 4
  {
    id: 'englang-claims-evidence-writing-ent-4a',
    question: "A celebrated chef writes to the mayor of his city: *You have my thanks for the medal, Mr. Mayor; it arrived, I noticed, the week after the newspaper reviews did.*\n\nWhich sentence of commentary goes furthest beyond paraphrase?",
    options: [
      "The polite remark on timing hints the honor followed publicity, not merit.",
      "The chef is saying that the medal arrived after the newspaper reviews about him came out.",
      "This sentence is very effective because it really grabs the reader's attention right away.",
      "The chef uses the word \"noticed,\" which makes the sentence stand out to readers.",
    ],
    correctIndex: 0,
    explanation: "The strongest commentary explains the mechanism: a courteous remark about timing carries an accusation the mayor cannot easily answer. The others restate the sentence, offer a generic effect or name a word without explaining what it does.",
    partNumber: 4,
    partTitle: "Commentary That Scores: Revising a Paragraph From 2 to 4",
  },
  {
    id: 'englang-claims-evidence-writing-ent-4b',
    question: "A student argues that cities should plant trees first in their hottest neighborhoods. Her evidence: in one city's summer survey, tree-lined blocks measured several degrees cooler than bare blocks nearby. Which sentence of commentary best states the warrant connecting this evidence to her claim?",
    options: [
      "This shows that planting trees is a very interesting idea for any city.",
      "This proves that every city must plant trees on every one of its streets.",
      "The survey took place during one summer in a single American city.",
      "If shade cools streets that much, it helps most where heat is deadliest.",
    ],
    correctIndex: 3,
    explanation: "The warrant explains why the evidence supports this particular claim: cooling matters most where heat is most dangerous, so the hottest neighborhoods should come first. The others are vague, overstate the evidence or describe the survey.",
    partNumber: 4,
    partTitle: "Commentary That Scores: Revising a Paragraph From 2 to 4",
  },

  // Part 5 — Qualifying Your Own Claims Without Losing Your Position
  {
    id: 'englang-claims-evidence-writing-ent-5a',
    question: "A student's draft claims, \"Smartphones ruin family dinners.\" Which revision most effectively qualifies the claim?",
    options: [
      "Smartphones might perhaps sometimes affect certain family dinners somewhat.",
      "Smartphones make family dinners better in nearly every home that has them.",
      "Phones left out on the table cut short the talk at family dinners.",
      "Smartphones completely ruin every single family dinner in every home.",
    ],
    correctIndex: 2,
    explanation: "The revision adds one precise limit (phones left on the table) and stays committed within it. The first stacks hedges until nothing is claimed, the second reverses the claim and the last makes it more absolute.",
    partNumber: 5,
    partTitle: "Qualifying Your Own Claims Without Losing Your Position",
  },
  {
    id: 'englang-claims-evidence-writing-ent-5b',
    question: "A student argues that teachers should assign nightly homework. Which sentence best grants a strong objection and refines the claim to absorb it?",
    options: [
      "Critics say homework widens gaps between students, but they are simply and plainly wrong.",
      "Critics rightly say homework widens gaps, so schools should offer a quiet place to do it.",
      "Critics say homework widens gaps between students, so I now agree it should be banned.",
      "Critics say homework widens gaps, but one survey found the gap has existed for decades.",
    ],
    correctIndex: 1,
    explanation: "Granting the objection and building a condition into the claim makes the position more precise without giving it up. Dismissing critics answers nothing, adopting a ban abandons the thesis, and citing a long-standing gap sidesteps the objection rather than absorbing it.",
    partNumber: 5,
    partTitle: "Qualifying Your Own Claims Without Losing Your Position",
  },

  // Part 6 — Exam Practice: Revising a Draft and Scoring an Argument
  {
    id: 'englang-claims-evidence-writing-ent-6a',
    question: "*(1) Many towns have community gardens. (2) A shared garden can build trust between neighbors who would otherwise never speak. (3) When our block started a garden, two neighbors who had argued for years over a fence ended up sharing a tomato bed. (4) Gardens also give children a place to learn where food comes from. (5) Towns should support community gardens on public land.*\n\nWhich sentence, placed right after sentence 3, best explains why the story of the two neighbors shows trust being built?",
    options: [
      "The two neighbors grew several kinds of tomatoes and peppers that summer.",
      "Fences are a common cause of disputes between neighbors in many towns.",
      "Working one bed gave the rivals a goal in common that their fence never had.",
      "Getting along with the people around us matters in many areas of life.",
    ],
    correctIndex: 2,
    explanation: "The commentary explains why the story shows trust being built: a shared task gave the rivals a common purpose. The other choices add unrelated detail, a general fact about fences or a truism.",
    partNumber: 6,
    partTitle: "Exam Practice: Revising a Draft and Scoring an Argument",
  },
  {
    id: 'englang-claims-evidence-writing-ent-6b',
    question: "*(1) Many towns have community gardens. (2) A shared garden can build trust between neighbors who would otherwise never speak. (3) When our block started a garden, two neighbors who had argued for years over a fence ended up sharing a tomato bed. (4) Gardens also give children a place to learn where food comes from. (5) Towns should support community gardens on public land.*\n\nSentence 4 makes a claim that the paragraph never backs up. Which detail would give it the most specific support?",
    options: [
      "Last summer second graders weighed and charted the beans they grew.",
      "Children can learn about many subjects both inside school and outside it.",
      "Food comes from many places, including farms, backyard gardens and stores.",
      "Some children are very interested in gardening, and others are not at all.",
    ],
    correctIndex: 0,
    explanation: "The second-grade class is a specific example of children learning from a garden, which is exactly what sentence 4 claims. The other choices are general statements that support nothing in particular.",
    partNumber: 6,
    partTitle: "Exam Practice: Revising a Draft and Scoring an Argument",
  },

  // Part 7 — Review: Writing Claims, Evidence and Commentary Under Time
  {
    id: 'englang-claims-evidence-writing-ent-7a',
    question: "A student's draft paragraph reads:\n\n*(1) Schools should require community service because it is very important. (2) Many people volunteer in their communities. (3) \"To serve is to belong,\" as a saying goes. (4) Therefore, all students should have to serve.*\n\nWhich problem most limits this paragraph's Row B score?",
    options: [
      "It places its claim in the very first sentence",
      "Nothing explains how any of its evidence proves the claim",
      "It includes too many quotations for one paragraph",
      "It is written in the third person instead of the first",
    ],
    correctIndex: 1,
    explanation: "The evidence is general and the last sentence only restates the claim, so nothing explains why the evidence proves it; Row B rewards that commentary. Opening with the claim is fine, one quotation is not too many, and point of view is not scored.",
    partNumber: 7,
    partTitle: "Review: Writing Claims, Evidence and Commentary Under Time",
  },
  {
    id: 'englang-claims-evidence-writing-ent-7b',
    question: "With five minutes left, a student rereads her thesis: \"Every teenager should have a part-time job.\" Which single change would best fix the claim's chief weakness?",
    options: [
      "Adding the words \"perhaps\" and \"possibly\" so that the claim sounds careful",
      "Changing \"every teenager\" to \"absolutely every teenager\" for added force",
      "Deleting the thesis and opening the essay with evidence instead",
      "Adding one precise limit, such as a cap of ten work hours a week",
    ],
    correctIndex: 3,
    explanation: "The absolute claim invites the obvious objection about schoolwork, and one precise limit answers it while keeping the position. Stacked hedges weaken it, more force makes it easier to attack, and deleting the thesis forfeits Row A.",
    partNumber: 7,
    partTitle: "Review: Writing Claims, Evidence and Commentary Under Time",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "A Thesis That Earns Row A, in All Three Essays" },
    { partNumber: 3, partTitle: "Building the Body Paragraph: Choosing and Placing Evidence" },
    { partNumber: 4, partTitle: "Commentary That Scores: Revising a Paragraph From 2 to 4" },
    { partNumber: 5, partTitle: "Qualifying Your Own Claims Without Losing Your Position" },
    { partNumber: 6, partTitle: "Exam Practice: Revising a Draft and Scoring an Argument" },
    { partNumber: 7, partTitle: "Review: Writing Claims, Evidence and Commentary Under Time" },
  ]
}
