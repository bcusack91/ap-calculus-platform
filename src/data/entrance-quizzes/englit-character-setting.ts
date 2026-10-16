/**
 * Entrance Quiz — Character and Setting (AP English Literature) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englit-character-setting-ent-1a',
    question: "Read the passage below.\n\n*The flood had taken the lower road, and the only way to the doctor lay across the Pelham footbridge, which the town had condemned in March. Owen stood at the rail a long time, looking down at the brown water. Then he took off his boots, tied them around his neck, and started across.*\n\nOwen's choice, made under the pressure of the setting, most clearly reveals that",
    options: [
      "he is reckless and gives little thought to physical danger",
      "he distrusts the town's warnings and thinks the bridge is safe",
      "the urgency of his errand outweighs a danger he plainly sees",
      "he hopes to impress the people watching him from the bank",
    ],
    correctIndex: 2,
    explanation: "The long pause at the rail shows he understands the risk, and the practical preparation shows resolve, so the choice reveals what he values most: getting to the doctor. Recklessness is ruled out by that long, deliberate look at the water.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englit-character-setting-ent-1b',
    question: "A student's essay on a novel includes this sentence: \"The story takes place in a mining town during a long strike.\"\n\nWhich revision best turns the sentence into analysis?",
    options: [
      "Explain how the strike forces the hero to choose between family and friends",
      "Add the year the strike took place and the name of the mine involved",
      "Describe the town's streets, houses and mine in more vivid detail",
      "Note that many real towns went through similar strikes at the time",
    ],
    correctIndex: 0,
    explanation: "Setting becomes analysis when it is tied to the pressures and choices it creates for a character. Dates, description and historical parallels add information about the setting without explaining what it does in the novel.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Building a Character: The Channels of Characterization
  {
    id: 'englit-character-setting-ent-2a',
    question: "Read the passage below.\n\n*Miss Ambler's sitting room held forty-one clocks, and she wound every one of them each morning before breakfast, beginning with the tall clock that had been her father's. Visitors who called after ten were told, kindly, that she was not at home, although everyone in the lane knew she never left the house.*\n\nWhich inference about Miss Ambler rests most securely on these details?",
    options: [
      "She is bitter toward neighbors who once wronged her family",
      "She has too little money for furnishings beyond the clocks",
      "She longs for company but is too shy to let callers inside",
      "She lives by a ritual that keeps other people out",
    ],
    correctIndex: 3,
    explanation: "Her habits (winding every clock in a fixed order) and her treatment of visitors support a modest, one-step inference: a life arranged around routine and kept closed to others. Bitterness or a hidden longing for company climbs too high, since no detail supports either.",
    partNumber: 2,
    partTitle: "Building a Character: The Channels of Characterization",
  },
  {
    id: 'englit-character-setting-ent-2b',
    question: "Read the passage below.\n\n*In Halloway they said the widow Crane had a heart like a flint, and children crossed the road rather than pass her gate. But it was her lamp that burned in the schoolhouse window all that February, the winter the teacher fell ill, and it was her firewood, people found out later, that had kept the stove going.*\n\nThe contrast between the town's talk and the widow's actions chiefly suggests that",
    options: [
      "the widow has changed her character after some recent crisis",
      "the town's verdict reflects reputation more than truth",
      "the children's fear of her is justified by her harsh temper",
      "the townspeople admire her and spread rumors to protect her",
    ],
    correctIndex: 1,
    explanation: "Community talk is evidence about the place as much as the person, and here her quiet actions contradict the town's label. Nothing suggests a recent change in her; the story simply shows the gossip was wrong.",
    partNumber: 2,
    partTitle: "Building a Character: The Channels of Characterization",
  },

  // Part 3 — Setting as a Social World
  {
    id: 'englit-character-setting-ent-3a',
    question: "Read the passage below.\n\n*In Corley a girl who married outside the parish was spoken of in the past tense. Her mother still set a place for her at Christmas; her father did not say her name. When Agnes received the letter from Liverpool asking her to come, she read it twice, folded it into her prayer book, and went down to help with the milking.*\n\nAgnes's response to the letter is best explained as a result of",
    options: [
      "a community that treats those who leave as lost",
      "her indifference to the person who wrote the letter to her",
      "a firm religious belief that marriage itself is sinful",
      "her fear that Liverpool is too dangerous for a girl alone",
    ],
    correctIndex: 0,
    explanation: "The first sentences set the rule of the place: leaving means being spoken of as dead. Agnes keeps the letter, so she is not indifferent, but she returns to her chores, a choice shaped by that rule.",
    partNumber: 3,
    partTitle: "Setting as a Social World",
  },
  {
    id: 'englit-character-setting-ent-3b',
    question: "A student argues: \"In the novel, the village's debts and isolation leave the farmer no real choice, so his decision to stay on the land is not truly his own.\"\n\nWhich detail from the novel would most effectively complicate this claim?",
    options: [
      "The village lies three days' journey from the nearest railway station.",
      "The farmer's land is mortgaged for more than it could sell for.",
      "The farmer refuses a fair offer to keep a promise to his father.",
      "The farmer's neighbors also struggle through long, hard winters.",
    ],
    correctIndex: 2,
    explanation: "A refused fair offer shows that the farmer could have left and chose not to, so the setting narrows his choices without making them for him. The distance, the mortgage and the hard winters all support the student's claim rather than complicating it.",
    partNumber: 3,
    partTitle: "Setting as a Social World",
  },

  // Part 4 — Setting as Atmosphere, Mirror and Antagonist
  {
    id: 'englit-character-setting-ent-4a',
    question: "Read the passage below.\n\n*The orchard had not been pruned in years. Branches crossed and recrossed until the trees seemed to be strangling one another, and the fruit, what little there was, split on the bough before it ripened. Inside the house, the two sisters had not spoken since the funeral.*\n\nThe description of the orchard primarily functions as",
    options: [
      "an antagonist the sisters must overcome in order to survive",
      "a mirror of the tangled, stunted bond between the sisters",
      "an ironic contrast with the sisters' warm reconciliation",
      "a pathetic fallacy in which the trees grieve for the dead",
    ],
    correctIndex: 1,
    explanation: "Trees that seem to strangle one another and fruit that splits before ripening fit the sisters' silent estrangement, so the setting mirrors their relationship. The trees are given no feelings such as grief, and the sisters have not reconciled.",
    partNumber: 4,
    partTitle: "Setting as Atmosphere, Mirror and Antagonist",
  },
  {
    id: 'englit-character-setting-ent-4b',
    question: "Read the passage below.\n\n*The sea did not care about the boat. It lifted the little hull as easily as it lifted the driftwood beside it, and set it down a yard from the rocks, and lifted it again.*\n\nWhich best describes the function of the sea in this passage?",
    options: [
      "A hostile enemy that deliberately sets out to wreck the boat",
      "A mirror of the sailors' calm and orderly frame of mind",
      "A pathetic fallacy that shares the sailors' fear and despair",
      "A force made more frightening by its indifference",
    ],
    correctIndex: 3,
    explanation: "The first sentence denies the sea any feeling, and treating the boat like driftwood makes its power impersonal, an antagonist without intent. That rules out both a deliberate enemy and a sea that shares human emotion.",
    partNumber: 4,
    partTitle: "Setting as Atmosphere, Mirror and Antagonist",
  },

  // Part 5 — Characters in Relationship, and Setting Inside Character
  {
    id: 'englit-character-setting-ent-5a',
    question: "Read the passage below.\n\n*Every evening Tomas read the newspaper aloud to his father, who had been a printer and could no longer see the type. His father still corrected his pronunciation, as he had once corrected apprentices, and Tomas, who was forty, said “Yes, Papa” and read the word again.*\n\nThe details best characterize the relationship as one in which",
    options: [
      "the father's blindness has made him bitter toward his son",
      "Tomas resents a duty he feels unable to refuse",
      "the son tenderly keeps alive his father's old authority",
      "the father pretends to be blind to keep his son at home",
    ],
    correctIndex: 2,
    explanation: "The father now depends on his son, yet Tomas, at forty, submits to correction as if he were still an apprentice, preserving his father's old role. Nothing in his obedient \"Yes, Papa\" suggests resentment, and nothing suggests bitterness in the father.",
    partNumber: 5,
    partTitle: "Characters in Relationship, and Setting Inside Character",
  },
  {
    id: 'englit-character-setting-ent-5b',
    question: "Read the passage below.\n\n*Marguerite had lived above the bakery for thirty years, and the smell of bread had soaked into her coats, her hair, her letters. When her nephew offered her a flat by the sea, she said she would never be able to sleep without the ovens starting at four.*\n\nMarguerite's relationship to the place is best described as one in which she",
    options: [
      "has been shaped by the place so deeply she cannot leave it",
      "defines herself against a place she has long hoped to leave",
      "is drawn into the neighborhood through her nephew's care",
      "values the place mostly for the income the bakery earns",
    ],
    correctIndex: 0,
    explanation: "The smell has entered her clothes and letters and the ovens set the rhythm of her sleep, so the place has shaped her until leaving seems impossible. She refuses the nephew's offer, which rules out both resisting the place and being drawn in by him.",
    partNumber: 5,
    partTitle: "Characters in Relationship, and Setting Inside Character",
  },

  // Part 6 — Character and Setting on the Exam
  {
    id: 'englit-character-setting-ent-6a',
    question: "A Question 2 prompt asks students to analyze how an author portrays the complex relationship between a woman and the city she has returned to after many years away.\n\nWhich thesis best responds to the prompt?",
    options: [
      "The author uses imagery, diction and setting to portray the woman's complex relationship with the city.",
      "The woman returns to the city where she grew up and walks through streets she remembers as a girl.",
      "The author shows that the woman should never have left, since the years away brought only loneliness.",
      "The author makes the city both refuge and reproach, so her homecoming is comfort and accusation at once.",
    ],
    correctIndex: 3,
    explanation: "This thesis makes a defensible interpretation and answers \"complex\" by naming a tension the essay can trace. The others restate the prompt, summarize, or pass judgment on the character's life instead of analyzing the portrayal.",
    partNumber: 6,
    partTitle: "Character and Setting on the Exam",
  },
  {
    id: 'englit-character-setting-ent-6b',
    question: "A student is planning a Question 2 essay on a passage that describes an old fisherman's cottage on the morning he must sell it.\n\nWhich plan for the body paragraphs is most likely to build a strong line of reasoning?",
    options: [
      "Walk through the cottage's details in the order the passage gives them",
      "Group the details by what each reveals about his bond with the home",
      "Summarize the events of his life that led up to selling the cottage",
      "Give each device its own paragraph, defining it before quoting it",
    ],
    correctIndex: 1,
    explanation: "Organizing details by what they show about the character's relationship to the place makes the setting do argumentative work. Walking through the passage in order is a setting inventory, and life-story summary and device-by-device paragraphs replace analysis with description.",
    partNumber: 6,
    partTitle: "Character and Setting on the Exam",
  },

  // Part 7 — Character and Setting Synthesis
  {
    id: 'englit-character-setting-ent-7a',
    question: "Read the passage below.\n\n*After the mill closed, the Brandt family kept the mill's calendar on the kitchen wall, still turned to the October it shut. Mrs. Brandt dusted it every Saturday along with the photographs, and when her grandson pinned a school notice over it, she took the notice down without a word and laid it on the table.*\n\nThe calendar detail chiefly suggests",
    options: [
      "that the Brandts cannot afford to buy a newer calendar",
      "that the grandson is careless with the family's things",
      "that the mill is expected to reopen the next October",
      "a family clinging hard to a past the town has already lost",
    ],
    correctIndex: 3,
    explanation: "A calendar kept on a month that ended years ago, dusted with the photographs and protected from the grandson's notice, turns the kitchen into a shrine to the mill's last days. Nothing suggests poverty, carelessness or hope of reopening; the detail shows a family that will not let the date move.",
    partNumber: 7,
    partTitle: "Character and Setting Synthesis",
  },
  {
    id: 'englit-character-setting-ent-7b',
    question: "Read the passage below.\n\n*The new tenants painted the kitchen yellow the week they arrived and hung a birdfeeder in the dead pear tree. Old Mr. Roth, next door, watched them from behind his curtain. “They won't last the winter,” he told his sister on the telephone, and then asked her, twice, whether she thought yellow was a cheerful color.*\n\nWhich reading best accounts for the tension in Mr. Roth's behavior?",
    options: [
      "He is sure the tenants will fail and wants his sister to agree",
      "He dislikes the color yellow and is offended by their choice",
      "His scornful prediction hides an interest in what they bring",
      "He plans to help the new tenants get through the coming winter",
    ],
    correctIndex: 2,
    explanation: "His prediction is dismissive, but asking twice whether yellow is cheerful shows he is drawn to what the tenants bring to the street. A reading that takes only his words or only his question misses the tension between them.",
    partNumber: 7,
    partTitle: "Character and Setting Synthesis",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Building a Character: The Channels of Characterization" },
    { partNumber: 3, partTitle: "Setting as a Social World" },
    { partNumber: 4, partTitle: "Setting as Atmosphere, Mirror and Antagonist" },
    { partNumber: 5, partTitle: "Characters in Relationship, and Setting Inside Character" },
    { partNumber: 6, partTitle: "Character and Setting on the Exam" },
    { partNumber: 7, partTitle: "Character and Setting Synthesis" },
  ]
}
