/**
 * Entrance Quiz — Argument Structure (AP English Language) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englang-argument-structure-ent-1a',
    question: "In a speech urging a town to build a new bridge, one paragraph reads:\n\n*Some will say the town cannot afford a new bridge. But the town is already paying for the old one, in repairs every spring and in detours every flood.*\n\nIn classical arrangement, this paragraph serves as",
    options: [
      "the narration, setting out the background facts",
      "the refutation, answering an expected objection",
      "the exordium, winning the audience's goodwill",
      "the peroration, moving the audience to act",
    ],
    correctIndex: 1,
    explanation: "The paragraph states an opposing claim (\"Some will say\") and answers it, which is the work of the refutation. It does not lay out background, open the speech or close it with a call to act.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englang-argument-structure-ent-1b',
    question: "\"Electric scooters should be banned downtown, because three pedestrians were injured by them last month.\" Which unstated warrant does this argument rely on?",
    options: [
      "Electric scooters are more popular than bicycles downtown.",
      "The injury figures came from the city's main hospital.",
      "Pedestrians walk downtown more often than they drive there.",
      "Harm to pedestrians justifies banning what caused it.",
    ],
    correctIndex: 3,
    explanation: "The injuries lead to a ban only if harm to pedestrians is a good enough reason to ban its cause; that general rule is the warrant. Popularity and walking habits are irrelevant, and the source of the figures belongs to the grounds.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Classical Arrangement in a Real Speech: Lincoln at Cooper Union, 1860
  {
    id: 'englang-argument-structure-ent-2a',
    question: "A student argues that her town should keep its old courthouse rather than move to new offices. She first shows, with the town's own records, that the old building costs less to maintain than the new offices would. Only then does she answer the charge that preservationists \"care more about the past than about taxpayers.\" Placing the reply after the cost records is effective chiefly because",
    options: [
      "her answer can rest on the cost figures already proven",
      "classical rules forbid answering any objection early in an essay",
      "the charge is weaker than the evidence and deserves less space",
      "readers tend to forget objections that come before the evidence",
    ],
    correctIndex: 0,
    explanation: "Once the records show the old building is cheaper, the charge that preservation ignores taxpayers can be answered with proof rather than assertion. No rule fixes where objections go, and the placement is about using evidence, not about space or memory.",
    partNumber: 2,
    partTitle: "Classical Arrangement in a Real Speech: Lincoln at Cooper Union, 1860",
  },
  {
    id: 'englang-argument-structure-ent-2b',
    question: "A student's speech to the school board opens with a story about falling asleep in first-period chemistry, then presents research on teenage sleep, then answers the objection about bus costs and ends by asking the board to vote yes on a later start. In classical arrangement, the opening story serves mainly as",
    options: [
      "the exordium, drawing listeners in before the case begins",
      "the confirmation, proving the central claim with research",
      "the refutation, answering the board's objection about cost",
      "the peroration, calling on the board to take a final vote",
    ],
    correctIndex: 0,
    explanation: "The story comes first and wins the board's attention and sympathy, which is the work of the exordium. The research is the confirmation, the cost answer is the refutation and the closing request is the peroration.",
    partNumber: 2,
    partTitle: "Classical Arrangement in a Real Speech: Lincoln at Cooper Union, 1860",
  },

  // Part 3 — Toulmin Analysis: Franklin's Closing Speech to the Constitutional Convention, 1787
  {
    id: 'englang-argument-structure-ent-3a',
    question: "\"Applications to the school's art program fell by a third this year, so students are losing interest in art.\" Which challenge would most directly test this argument's warrant?",
    options: [
      "Showing that art is an essential part of a full education",
      "Showing that the art program has a long and respected history",
      "Showing that the writer once took art classes at the school",
      "Showing that a new fee better explains the drop in sign-ups",
    ],
    correctIndex: 3,
    explanation: "The argument treats falling applications as a sign of falling interest, so another cause for the drop breaks that link. The value of art, the writer's history and the program's reputation leave the inference untouched.",
    partNumber: 3,
    partTitle: "Toulmin Analysis: Franklin's Closing Speech to the Constitutional Convention, 1787",
  },
  {
    id: 'englang-argument-structure-ent-3b',
    question: "\"The new bus lanes will likely cut downtown traffic for a decade or so, unless the city keeps adding parking garages downtown.\" In Toulmin's terms, the clause \"unless the city keeps adding parking garages downtown\" functions as",
    options: [
      "grounds offered as evidence for the claim",
      "a rebuttal naming when the claim fails",
      "backing that supports the warrant itself",
      "a warrant linking the grounds to the claim",
    ],
    correctIndex: 1,
    explanation: "The clause states the condition under which the claim would not hold, which is Toulmin's rebuttal (\"likely\" and \"for a decade or so\" are the qualifiers). It offers no evidence, supports no warrant and is not the rule linking evidence to claim.",
    partNumber: 3,
    partTitle: "Toulmin Analysis: Franklin's Closing Speech to the Constitutional Convention, 1787",
  },

  // Part 4 — Common Ground and Rogerian Structure: Jane Addams, "Why Women Should Vote," 1910
  {
    id: 'englang-argument-structure-ent-4a',
    question: "A speaker addresses a meeting of farmers who oppose new rules on fertilizer runoff:\n\n*Every farmer in this county knows that land must be handed on in better shape than it was received; it is the first thing our parents taught us. That is exactly why I ask you to look again at the runoff rules. The creek our grandchildren will fish in runs downstream of every one of us.*\n\nThe speaker's opening sentence primarily serves to",
    options: [
      "affirm a value the farmers hold before extending it to the new rules",
      "criticize the farmers whose land has polluted the county's creek",
      "introduce the history of farming practices in the county",
      "concede that the runoff rules would cause farmers real harm",
    ],
    correctIndex: 0,
    explanation: "The speaker states the farmers' own value in their terms and then argues that it leads to the rules, which is common-ground structure. He blames no one, gives no history and concedes no harm.",
    partNumber: 4,
    partTitle: "Common Ground and Rogerian Structure: Jane Addams, \"Why Women Should Vote,\" 1910",
  },
  {
    id: 'englang-argument-structure-ent-4b',
    question: "A writer who values parks mainly for children's health persuades a group of skeptical shop owners to support a new downtown park by arguing only that it will bring more customers to their stores. A thoughtful analysis of this common-ground strategy might observe that it",
    options: [
      "proves beyond doubt that the park will raise the shops' sales",
      "abandons the writer's claim that the park should be built",
      "wins this audience but sets aside reasons the writer cares about more",
      "insults the shop owners by assuming they care only for profit",
    ],
    correctIndex: 2,
    explanation: "The claim stays the same, but fitting the route to one audience narrows the reasons offered; naming that tension is the kind of nuance a strong analysis shows. The strategy proves nothing beyond doubt, keeps the claim, and addresses the owners' interests without insulting them.",
    partNumber: 4,
    partTitle: "Common Ground and Rogerian Structure: Jane Addams, \"Why Women Should Vote,\" 1910",
  },

  // Part 5 — Problem-Solution Structure, Hybrids, and Misconceptions: Theodore Roosevelt, 1908
  {
    id: 'englang-argument-structure-ent-5a',
    question: "Read the passage below.\n\n*Every week the city's crews pull four tons of trash from Mill Creek. Every year that cleanup costs more than it would cost, in total, to replace the park's open bins with lidded ones. The city should buy the lidded bins.*\n\nThe passage is organized primarily by",
    options: [
      "comparing the creek with another park in the city",
      "telling the cleanup's events in the order they happened",
      "moving from a costly problem to a cheaper remedy",
      "classifying the kinds of trash found in the creek",
    ],
    correctIndex: 2,
    explanation: "The passage establishes a problem and its yearly cost, then offers a remedy that costs less, the basic shape of a problem-solution argument. It compares no parks, tells no story in sequence and does not sort the trash into kinds.",
    partNumber: 5,
    partTitle: "Problem-Solution Structure, Hybrids, and Misconceptions: Theodore Roosevelt, 1908",
  },
  {
    id: 'englang-argument-structure-ent-5b',
    question: "An essay on school lunches opens by following one student through a day on which she skips lunch because the line is too long. It then shows how common the problem is and proposes adding a second serving line. Which statement best describes the essay's structure?",
    options: [
      "A pure narrative that never states an argument",
      "A comparison of two schools' lunch programs",
      "A story opening joined to an argument for a fix",
      "A list of facts presented in no particular order",
    ],
    correctIndex: 2,
    explanation: "The story draws readers in, and the essay then turns into a problem-solution argument with a proposal, so the structure is a hybrid. It does argue, compares no schools and follows a clear order.",
    partNumber: 5,
    partTitle: "Problem-Solution Structure, Hybrids, and Misconceptions: Theodore Roosevelt, 1908",
  },

  // Part 6 — Exam Practice: A Section I Passage Set and a Structured Argument Essay
  {
    id: 'englang-argument-structure-ent-6a',
    question: "From a school board member's statement on merging two high schools:\n\n*[1] The district's own figures show that enrollment has fallen for six straight years, and the budget cannot carry two half-empty high schools.*\n\n*[2] I graduated from Central High, as did my mother. I know what it means to lose a school. But I would rather our children share one strong school than divide two weak ones.*\n\nThe shift from paragraph 1 to paragraph 2 is best described as a move from",
    options: [
      "figures to a personal appeal that grants the audience's grief",
      "a personal story to a set of district enrollment figures",
      "a concession to a refutation of that very same concession",
      "a call to action to a history of the district's schools",
    ],
    correctIndex: 0,
    explanation: "Paragraph 1 argues from figures; paragraph 2 turns to the speaker's own connection, grants the pain of losing a school and then restates the choice. The order is not story then figures, paragraph 1 concedes nothing, and there is no history of the district.",
    partNumber: 6,
    partTitle: "Exam Practice: A Section I Passage Set and a Structured Argument Essay",
  },
  {
    id: 'englang-argument-structure-ent-6b',
    question: "A student's position on an argument prompt is that competition improves performance, but only when the stakes are low. Which essay plan best fits this position?",
    options: [
      "A thesis, three examples of competition helping, and a conclusion restating it",
      "Common ground with readers, three stories, and a thesis held for the conclusion",
      "A thesis with its condition, evidence for the benefit, then for the limit",
      "A history of competition, a definition of performance, and an open question",
    ],
    correctIndex: 2,
    explanation: "A qualified position needs a plan that supports both halves: the benefit and the condition that limits it. Three one-sided examples ignore the limit, delaying the thesis suits a resistant audience rather than this claim, and a history with an open question takes no position.",
    partNumber: 6,
    partTitle: "Exam Practice: A Section I Passage Set and a Structured Argument Essay",
  },

  // Part 7 — Review: Choosing, Reading, and Building Structures
  {
    id: 'englang-argument-structure-ent-7a',
    question: "A writer must persuade a city council to fund a river cleanup. The council members are open-minded, but none of them has heard that the river is polluted. Which structure best fits this situation?",
    options: [
      "Common ground, holding the claim until the very end",
      "Problem-solution, proving the harm before the fix",
      "Classical, opening the speech with a refutation",
      "Narrative, telling one family's story and nothing else",
    ],
    correctIndex: 1,
    explanation: "An audience will not weigh a cleanup until it believes there is a problem, so the writer should establish the pollution first and then propose the solution. Nothing suggests resistance that would call for common ground, there is no objection to open with, and one story alone cannot prove the pollution.",
    partNumber: 7,
    partTitle: "Review: Choosing, Reading, and Building Structures",
  },
  {
    id: 'englang-argument-structure-ent-7b',
    question: "A student's rhetorical analysis says, \"The writer uses common-ground structure.\" Which revision would most improve this sentence as analysis?",
    options: [
      "Adding a second label, such as Toulmin, to describe the essay's logic too",
      "Quoting the essay's title and its date at the end of the sentence",
      "Replacing \"uses\" with a more formal verb such as \"employs\"",
      "Explaining how opening with the readers' value lowers their resistance",
    ],
    correctIndex: 3,
    explanation: "Analysis explains why the arrangement works on this audience, not just what it is called. More labels, a citation or a fancier verb still leave the effect unexplained.",
    partNumber: 7,
    partTitle: "Review: Choosing, Reading, and Building Structures",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Classical Arrangement in a Real Speech: Lincoln at Cooper Union, 1860" },
    { partNumber: 3, partTitle: "Toulmin Analysis: Franklin's Closing Speech to the Constitutional Convention, 1787" },
    { partNumber: 4, partTitle: "Common Ground and Rogerian Structure: Jane Addams, \"Why Women Should Vote,\" 1910" },
    { partNumber: 5, partTitle: "Problem-Solution Structure, Hybrids, and Misconceptions: Theodore Roosevelt, 1908" },
    { partNumber: 6, partTitle: "Exam Practice: A Section I Passage Set and a Structured Argument Essay" },
    { partNumber: 7, partTitle: "Review: Choosing, Reading, and Building Structures" },
  ]
}
