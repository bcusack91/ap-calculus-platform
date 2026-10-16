/**
 * Entrance Quiz — Rhetorical Devices (AP English Language) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — What Rhetoric Is and Why Devices Matter
  {
    id: 'englang-rhetorical-devices-ent-1a',
    question: "A council member urging immediate road repairs says:\n\n*Every week we wait, another family loses a tire. Every week we wait, the repair bill grows. Every week we wait, we tell these families they can wait too.*\n\nWhich sentence about the passage does what the AP exam rewards?",
    options: [
      "The council member says the same four words at the start of three sentences.",
      "The insistent opening makes each delay feel costly, pressing for action.",
      "The council member uses anaphora, a device found in many famous speeches.",
      "The passage is about families and repair bills while the council keeps delaying.",
    ],
    correctIndex: 1,
    explanation: "The strong sentence connects the choice to its effect on the audience and to the speaker's purpose of getting repairs started. The others count words, attach a label or summarize the topic.",
    partNumber: 1,
    partTitle: "What Rhetoric Is and Why Devices Matter",
  },
  {
    id: 'englang-rhetorical-devices-ent-1b',
    question: "A scientist explains the same discovery twice: once in a journal article for other scientists and once in a talk at an elementary school. Which change between the two is best explained by the shift in audience?",
    options: [
      "She trades technical terms for a comparison to a playground game.",
      "She changes the year of the discovery to make it seem more recent.",
      "She reports a different result in the talk than in the journal article.",
      "She leaves her name out of the talk so the children focus on the data.",
    ],
    correctIndex: 0,
    explanation: "Young listeners lack the technical vocabulary, so a familiar comparison serves the same purpose for a new audience. Changing dates or results distorts the facts, and dropping her name has nothing to do with what children can understand.",
    partNumber: 1,
    partTitle: "What Rhetoric Is and Why Devices Matter",
  },

  // Part 2 — The Three Appeals: Ethos, Pathos, Logos
  {
    id: 'englang-rhetorical-devices-ent-2a',
    question: "Writing against a new pesticide, a beekeeper begins: *I have kept bees on this hillside for twenty-two years, and I have never lost a hive the way I lost six this spring.*\n\nThe opening clause of her sentence chiefly persuades by",
    options: [
      "citing a measured study of hive losses across the county",
      "asking readers to picture the suffering of dying bees",
      "establishing her long firsthand knowledge of the local bees",
      "mocking officials who doubt that the pesticide is harmful",
    ],
    correctIndex: 2,
    explanation: "Twenty-two years on the same hillside gives the beekeeper standing to judge what is unusual, which is an appeal through credibility. She cites no study, paints no image of suffering and mocks no one.",
    partNumber: 2,
    partTitle: "The Three Appeals: Ethos, Pathos, Logos",
  },
  {
    id: 'englang-rhetorical-devices-ent-2b',
    question: "In a debate over a teen driving curfew, which sentence uses emotion in place of reasoning rather than in support of it?",
    options: [
      "Anyone who opposes the curfew must not care whether our children live.",
      "Last year two teens were hit by cars after midnight on Route 9.",
      "A mother described to the council the night her son did not come home.",
      "Towns with curfews saw late-night crashes among teens fall by a third.",
    ],
    correctIndex: 0,
    explanation: "Accusing opponents of not caring about children stirs feeling while skipping any argument about the curfew itself. A mother's account can honestly show what is at stake, and the crash facts and figures support the case with evidence.",
    partNumber: 2,
    partTitle: "The Three Appeals: Ethos, Pathos, Logos",
  },

  // Part 3 — Arrangement Choices: Repetition, Parallel Structure, and Contrast
  {
    id: 'englang-rhetorical-devices-ent-3a',
    question: "A student is writing to support a new crosswalk and wants her sentence to stress the safety benefit rather than the drawback. Which version best achieves this goal?",
    options: [
      "Although the crosswalk delays traffic, it will protect children walking to school.",
      "Although it will protect children walking to school, the crosswalk delays traffic.",
      "The crosswalk delays traffic, and it will protect children walking to school.",
      "The crosswalk will protect children, and traffic will be delayed by it as well.",
    ],
    correctIndex: 0,
    explanation: "Placing the drawback in the subordinate clause makes it secondary, and the main clause about protecting children lands at the end with the emphasis. The reversed version stresses the delay, and the joined versions give both ideas equal weight.",
    partNumber: 3,
    partTitle: "Arrangement Choices: Repetition, Parallel Structure, and Contrast",
  },
  {
    id: 'englang-rhetorical-devices-ent-3b',
    question: "Read the sentence below from a tribute to a retiring librarian.\n\n*She wrote the grant, and she painted the walls, and she hauled the shelves up three flights, and she stayed late to shelve the books.*\n\nThe repeated \"and\" chiefly serves to",
    options: [
      "speed the list so the work seems quick and effortless",
      "set her efforts against the efforts of her coworkers",
      "suggest the jobs were done in no particular order",
      "give each job its own weight as her labor piles higher",
    ],
    correctIndex: 3,
    explanation: "Each added conjunction makes the reader pause on one more job, so the effort accumulates. Dropping the conjunctions would speed the list, and the sentence draws no contrast with coworkers and keeps a clear order.",
    partNumber: 3,
    partTitle: "Arrangement Choices: Repetition, Parallel Structure, and Contrast",
  },

  // Part 4 — Figurative Choices: Comparison, Exaggeration, and Irony
  {
    id: 'englang-rhetorical-devices-ent-4a',
    question: "A health official is urging a room of longtime farmers to get flu shots before winter. Which comparison is most likely to persuade this audience?",
    options: [
      "Skipping the shot is like ignoring a warning light on a jet's dashboard.",
      "Skipping the shot is like putting off a phone's security update.",
      "Skipping the shot is like leaving the barn door open before a storm.",
      "Skipping the shot is like holding only one stock in a retirement fund.",
    ],
    correctIndex: 2,
    explanation: "A comparison persuades only when the audience knows the familiar thing and feels about it as the speaker expects, and farmers know exactly what an open barn door costs in a storm. The other comparisons draw on worlds this audience may not share.",
    partNumber: 4,
    partTitle: "Figurative Choices: Comparison, Exaggeration, and Irony",
  },
  {
    id: 'englang-rhetorical-devices-ent-4b',
    question: "Read the passage below from a letter to a city newspaper.\n\n*Congratulations to the city council, which has solved the problem of crowded buses by canceling half the routes. After all, no bus can be crowded if there is no bus.*\n\nWhat does the writer actually believe?",
    options: [
      "The council deserves praise for a creative fix to a hard problem.",
      "Canceling half the routes was a foolish answer to the problem of crowding.",
      "Bus riders should stop complaining and find other ways to commute.",
      "The routes were canceled before any rider had complained of crowding.",
    ],
    correctIndex: 1,
    explanation: "The praise is ironic, and the absurd logic of the second sentence shows the writer thinks the fix defeats the purpose of a bus system. The writer mocks the council rather than praising it or scolding riders.",
    partNumber: 4,
    partTitle: "Figurative Choices: Comparison, Exaggeration, and Irony",
  },

  // Part 5 — Diction, Tone, and Syntax
  {
    id: 'englang-rhetorical-devices-ent-5a',
    question: "Read the passage below.\n\n*The developers promised us \"luxury living.\" What they delivered is a parking garage, a chain coffee shop and a lobby so polished you can watch your rent go up in it.*\n\nThe tone of the passage is best described as",
    options: [
      "quiet admiration for the design of the new building",
      "neutral reporting on the features of the project",
      "anxious confusion about what was actually built",
      "mocking scorn for the gap between pitch and product",
    ],
    correctIndex: 3,
    explanation: "The quotation marks around the developers' phrase, the deflating list and the joke about rising rent all signal scorn for the promise. Nothing in the diction admires, stays neutral or sounds confused.",
    partNumber: 5,
    partTitle: "Diction, Tone, and Syntax",
  },
  {
    id: 'englang-rhetorical-devices-ent-5b',
    question: "A student's draft ends with this sentence:\n\n*The team won the title after three losing seasons and a winter of dawn practices.*\n\nShe wants the sentence to build suspense and land hard on the outcome. Which revision best achieves this goal?",
    options: [
      "The team won the title after three losing seasons and many dawn practices.",
      "The team, after three losing seasons and dawn practices, won the title.",
      "After three losing seasons and a winter of practice, the team won the title.",
      "The team won the title. It came after three losing seasons and a winter of work.",
    ],
    correctIndex: 2,
    explanation: "Holding the main clause until the end makes the reader wait through the struggle before the win arrives. The other versions reveal the victory early or bury it mid-sentence.",
    partNumber: 5,
    partTitle: "Diction, Tone, and Syntax",
  },

  // Part 6 — Putting It Together: Analyzing a Passage
  {
    id: 'englang-rhetorical-devices-ent-6a',
    question: "Read the passage below from a letter opposing a highway widening.\n\n*They tell us the new lanes will end the traffic. They told us that in 1998, when they added two lanes. They told us that in 2011, when they added two more. The traffic is still here. So are they.*\n\nWhich statement best explains how the passage's choices work together?",
    options: [
      "The dates supply statistical proof that wider roads always create more traffic.",
      "Each echoed promise meets a flat fact that exposes how often the planners failed.",
      "The short sentences show that the writer is too angry to argue the point clearly.",
      "The echoing sentences leave readers unsure which road project the writer opposes.",
    ],
    correctIndex: 1,
    explanation: "Each repetition of the same promise is followed by its failure, and the blunt closing sentences make that record hard to ignore. The dates are not statistics, the anger is controlled and the target of the letter is clear.",
    partNumber: 6,
    partTitle: "Putting It Together: Analyzing a Passage",
  },
  {
    id: 'englang-rhetorical-devices-ent-6b',
    question: "In the same highway letter, the final sentence is *So are they.*\n\nThis closing sentence chiefly serves to",
    options: [
      "admit that the planners have at last solved the problem",
      "raise a new argument about how much the planners earn",
      "soften the criticism by ending on a hopeful note",
      "pin blame on planners who persist like the traffic",
    ],
    correctIndex: 3,
    explanation: "Placing the planners beside the traffic that never left suggests they are as stubborn as the problem they keep failing to fix. The line admits no success, says nothing about pay and sharpens rather than softens the attack.",
    partNumber: 6,
    partTitle: "Putting It Together: Analyzing a Passage",
  },

  // Part 7 — Mixed Practice & Mastery Check
  {
    id: 'englang-rhetorical-devices-ent-7a',
    question: "The morning after a storm flattened half the trees in town, the mayor began her address with *We've had a rough week.* The mayor's understatement most likely serves to",
    options: [
      "show calm resolve and leave listeners to feel the loss",
      "suggest that the storm did little real damage to the town",
      "compare this storm with earlier and worse storms in town",
      "mock the residents who complained loudly about the storm",
    ],
    correctIndex: 0,
    explanation: "Downplaying an obvious disaster signals steadiness and leaves the audience to feel its full weight. Listeners know the damage is real, and the line makes no comparison and mocks no one.",
    partNumber: 7,
    partTitle: "Mixed Practice & Mastery Check",
  },
  {
    id: 'englang-rhetorical-devices-ent-7b',
    question: "A resident asks the town council: *Can we really call ourselves a reading town when our library closes at five?*\n\nWhich sentence offers the most complete analysis of this choice?",
    options: [
      "The resident uses a rhetorical question in order to persuade the town council.",
      "The resident asks a question about the hours that the town library is open.",
      "The question shames listeners by exposing the gap between pride and hours.",
      "This shows that the resident does not know when the library closes.",
    ],
    correctIndex: 2,
    explanation: "A full analysis points to the text, explains the effect on the audience and ties it to the purpose of extending the hours. The others name a device without its effect, summarize the line or misread it as a real question.",
    partNumber: 7,
    partTitle: "Mixed Practice & Mastery Check",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "What Rhetoric Is and Why Devices Matter" },
    { partNumber: 2, partTitle: "The Three Appeals: Ethos, Pathos, Logos" },
    { partNumber: 3, partTitle: "Arrangement Choices: Repetition, Parallel Structure, and Contrast" },
    { partNumber: 4, partTitle: "Figurative Choices: Comparison, Exaggeration, and Irony" },
    { partNumber: 5, partTitle: "Diction, Tone, and Syntax" },
    { partNumber: 6, partTitle: "Putting It Together: Analyzing a Passage" },
    { partNumber: 7, partTitle: "Mixed Practice & Mastery Check" },
  ]
}
