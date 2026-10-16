/**
 * Entrance Quiz — Short Fiction II (AP English Literature) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englit-short-fiction-2-ent-1a',
    question: "Read the passage below.\n\n*At the reading of the will, Aunt Celia's three nephews learned that her house, her savings and her silver would go to the cats' home. The nephews agreed that she had always been eccentric. The lawyer, who had visited her every Sunday for nine years, said nothing at all.*\n\nWhat does the passage most strongly imply?",
    options: [
      "Her nephews' neglect explains the will better than her oddness.",
      "The lawyer persuaded Celia to change her will in his own favor.",
      "Celia had lost her reason during her final years of life.",
      "The nephews had cared for their aunt with great devotion.",
    ],
    correctIndex: 0,
    explanation: "The passage never states the reason, but the lawyer's nine years of Sunday visits, set beside the nephews' quick verdict of \"eccentric,\" implies who stayed close to her and who did not. Implication asks the reader to infer what the text withholds.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englit-short-fiction-2-ent-1b',
    question: "Read the passage below, which reports what a group of schoolchildren said about their teacher.\n\n*The new teacher, the children's report went, was strict and strange: she made them wash their hands, she read to them from books with no pictures, and she cried once, at her desk, when she thought they had all gone out to play.*\n\nThe final detail chiefly serves to",
    options: [
      "confirm the children's view that she is strict and strange",
      "reveal a sorrow the children notice but do not understand",
      "suggest that she cried because the class had misbehaved",
      "show that the teacher herself is narrating the passage",
    ],
    correctIndex: 1,
    explanation: "Filtered through the children's perspective, the crying is listed as one more strange habit, yet it reveals a private grief they cannot interpret. The gap between what they report and what readers infer is where the meaning lies.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Narrator Perspective and Reliability
  {
    id: 'englit-short-fiction-2-ent-2a',
    question: "Read the passage below.\n\n*I am not a jealous man. I want that understood. When my wife began taking the long way home from the library, past the Halvorsens' house, I noticed only because I notice everything, and when I began timing her walks I did so purely out of scientific interest.*\n\nWhich feature most clearly signals that the narrator is unreliable?",
    options: [
      "He denies a trait his own actions show.",
      "He reports other characters' speech word for word.",
      "He describes his wife's route in accurate detail.",
      "He narrates in the past tense, looking back on events.",
    ],
    correctIndex: 0,
    explanation: "He insists he is not jealous and then describes timing his wife's walks, so he protests too much and his conduct contradicts his claim. Accurate detail or past-tense narration does not by itself cast doubt on a narrator.",
    partNumber: 2,
    partTitle: "Narrator Perspective and Reliability",
  },
  {
    id: 'englit-short-fiction-2-ent-2b',
    question: "The narrator of a story, recovering from a fever, believes the nurse is poisoning her soup. She also reports, word for word, the doctor telling her husband, \"Keep her calm, and keep her away from the letters.\"\n\nHow should a reader treat this narrator's account?",
    options: [
      "Trust every part of her account equally, since she is the narrator",
      "Dismiss every part of her account as the product of her fever",
      "Doubt her suspicions while trusting her account of others' words",
      "Assume that she invented the doctor's words to win sympathy",
    ],
    correctIndex: 2,
    explanation: "Reliability is not all or nothing: her interpretation of the soup may come from fear, but her exact report of the doctor's words lets readers judge the situation for themselves. Dismissing or trusting everything ignores that split.",
    partNumber: 2,
    partTitle: "Narrator Perspective and Reliability",
  },

  // Part 3 — Character Change and the Character–Setting Relationship
  {
    id: 'englit-short-fiction-2-ent-3a',
    question: "In a short story, a clerk spends the whole narrative imagining, in rich and conflicted detail, how he will tell his overbearing employer that he is quitting. In the final scene he hands in the monthly accounts, wishes the employer good evening, and goes home.\n\nThe clerk is best described as",
    options: [
      "flat and static, defined by a single trait from start to finish",
      "round and dynamic, transformed by what he imagines",
      "flat but dynamic, simple in mind yet greatly changed by the end",
      "round but static, complex in thought yet unchanged in action",
    ],
    correctIndex: 3,
    explanation: "His inner life is rich and divided, which makes him round, but he ends exactly where he began, which makes him static. The two pairs of terms measure different things: complexity and change.",
    partNumber: 3,
    partTitle: "Character Change and the Character–Setting Relationship",
  },
  {
    id: 'englit-short-fiction-2-ent-3b',
    question: "Read the passage below.\n\n*Every evening Nora walked to the end of the pier, where the boats left for the mainland, and every evening she walked back. The planks were so worn by now that her steps had made two shallow grooves, one going out and one coming home.*\n\nThe detail of the two grooves chiefly suggests",
    options: [
      "Nora's work as the caretaker responsible for keeping up the old pier",
      "a habit of nearing escape and turning back, worn into the place",
      "that the pier has grown too old and worn to be safe to walk",
      "that Nora has made her plans to leave the island quite soon",
    ],
    correctIndex: 1,
    explanation: "The setting records her character: years of walking toward the departing boats and returning have literally shaped the planks. The place reflects a woman held by a habit of almost leaving.",
    partNumber: 3,
    partTitle: "Character Change and the Character–Setting Relationship",
  },

  // Part 4 — Significant Events and Conflict
  {
    id: 'englit-short-fiction-2-ent-4a',
    question: "Early in a story, a young doctor tells his colleagues that he would treat any patient, rich or poor, exactly alike. That night two patients arrive at once: the mayor, with a sprained wrist, and a laborer with a dangerously high fever.\n\nThe arrival of the two patients functions chiefly to",
    options: [
      "begin a romance between the young doctor and one of the patients",
      "show that the small hospital is badly understaffed at night",
      "test the principle the doctor has just claimed to hold",
      "resolve the doctor's quarrel with his skeptical colleagues",
    ],
    correctIndex: 2,
    explanation: "A significant event forces a stated value into the open: the doctor must now choose between a powerful man's minor injury and a poor man's serious illness. The story plants the claim so that the event can test it.",
    partNumber: 4,
    partTitle: "Significant Events and Conflict",
  },
  {
    id: 'englit-short-fiction-2-ent-4b',
    question: "Read the passage below.\n\n*After the argument, when her brother had slammed out of the house, Ruth sat alone at the kitchen table and found that she was still arguing with him, only now she was making his case for him, and making it rather well.*\n\nThe passage chiefly shows",
    options: [
      "Ruth winning the argument once her brother has left the house",
      "Ruth planning how she will apologize to her brother tomorrow",
      "a family conflict that has now been fully and finally resolved",
      "an outer quarrel becoming an inner one",
    ],
    correctIndex: 3,
    explanation: "With her brother gone, the dispute moves inside Ruth, who now argues his side against herself. External and internal conflict braid together, and the quarrel is far from resolved.",
    partNumber: 4,
    partTitle: "Significant Events and Conflict",
  },

  // Part 5 — Symbol and Imagery in Prose
  {
    id: 'englit-short-fiction-2-ent-5a',
    question: "In a story, a boy is given his grandfather's pocket watch and winds it proudly every morning. After the grandfather's funeral he stops winding it. In the last scene, before leaving for his first job, he sets it running again.\n\nThe watch's development most likely suggests",
    options: [
      "the boy's growing interest in repairing mechanical things",
      "his passage through grief toward carrying on what he inherited",
      "that the old watch had in fact been broken from the very start",
      "the family's money troubles in the months after the funeral",
    ],
    correctIndex: 1,
    explanation: "The watch gathers meaning through repetition and change: wound with pride, left stopped in mourning, restarted at a new beginning. Its changes track the boy's grief and recovery.",
    partNumber: 5,
    partTitle: "Symbol and Imagery in Prose",
  },
  {
    id: 'englit-short-fiction-2-ent-5b',
    question: "Read the passage below.\n\n*The new apartment smelled of fresh paint and someone else's cooking. Through the thin wall a radio played a language Mira did not know, and the radiator knocked twice, like someone asking to come in.*\n\nThe imagery in the passage chiefly conveys",
    options: [
      "Mira's sense of being a stranger in a space others have shaped",
      "Mira's delight in the comforts of her new home",
      "the danger and decay of a building near collapse",
      "Mira's fond memories of the home of her childhood",
    ],
    correctIndex: 0,
    explanation: "Smell and sound carry the effect: another family's cooking, an unknown language and a radiator that knocks like a visitor all make the apartment feel inhabited by others. The images are sensory evidence of her unfamiliarity, not of danger or nostalgia.",
    partNumber: 5,
    partTitle: "Symbol and Imagery in Prose",
  },

  // Part 6 — The Prose Fiction Analysis Essay (Q2)
  {
    id: 'englit-short-fiction-2-ent-6a',
    question: "A Question 2 prompt asks students to analyze how an author conveys the complexity of a son's response to visiting his estranged father in a nursing home.\n\nWhich thesis best responds to the prompt?",
    options: [
      "The author uses imagery, dialogue and diction to convey the complexity of the son's response.",
      "The son visits his father in the nursing home, and the two of them talk about baseball.",
      "As the visit moves from stiff small talk to a shared joke, the author shows a son whose resentment softens into a pity he resents feeling.",
      "The son should forgive his father, because family matters more than any old grievance.",
    ],
    correctIndex: 2,
    explanation: "This thesis names a movement through the passage and a tension in the son's response, so it sets up a line of reasoning. The others restate the prompt, summarize, or moralize.",
    partNumber: 6,
    partTitle: "The Prose Fiction Analysis Essay (Q2)",
  },
  {
    id: 'englit-short-fiction-2-ent-6b',
    question: "A Question 2 passage includes the sentence: *The father's hands, which had once seemed enormous, lay on the blanket like two dry leaves.*\n\nWhich sentence offers the strongest commentary on this detail?",
    options: [
      "This simile compares the father's hands to two dry leaves.",
      "The father's hands are lying on top of the nursing-home blanket.",
      "The author uses a great deal of vivid imagery in this passage.",
      "The simile shrinks hands that once loomed, so fear yields to pity.",
    ],
    correctIndex: 3,
    explanation: "Strong commentary explains how a detail creates meaning: the contrast between \"enormous\" and \"dry leaves\" shows the son's old fear giving way to pity. The others label the device, summarize, or make a general remark.",
    partNumber: 6,
    partTitle: "The Prose Fiction Analysis Essay (Q2)",
  },

  // Part 7 — Unit 4 Synthesis: Reading a Passage with Every Tool
  {
    id: 'englit-short-fiction-2-ent-7a',
    question: "Read the passage below.\n\n*Of course I was happy for her. I helped with the flowers. I wrote the place cards myself, in the good ink. When they asked me to say a few words I stood and said that Clara had always been the lucky one, the pretty one, the one Thomas noticed first, at the harvest dance, when I had worn the green dress and—I raised my glass.*\n\nThe change in sentence structure across the passage chiefly serves to",
    options: [
      "show the guests growing restless during the long toast",
      "signal a shift from one narrator to another partway through",
      "enact her composure slipping as she nears an old hurt",
      "reflect the narrator's careful honesty about the dance",
    ],
    correctIndex: 2,
    explanation: "Short, controlled sentences give way to a long run of clauses that breaks off mid-phrase, so the syntax loses control as she approaches the memory of the dance. Form enacts content.",
    partNumber: 7,
    partTitle: "Unit 4 Synthesis: Reading a Passage with Every Tool",
  },
  {
    id: 'englit-short-fiction-2-ent-7b',
    question: "Read the passage below.\n\n*Of course I was happy for her. I helped with the flowers. I wrote the place cards myself, in the good ink. When they asked me to say a few words I stood and said that Clara had always been the lucky one, the pretty one, the one Thomas noticed first, at the harvest dance, when I had worn the green dress and—I raised my glass.*\n\nWhich reading best accounts for both the narrator's opening claim and the passage's final sentence?",
    options: [
      "She is wholly happy for her sister, as the raised glass confirms.",
      "Her composure breaks, and she hides behind the ritual toast.",
      "She plans revenge, and the careful place cards prove it.",
      "Thomas has already guessed her feelings and is mocking her.",
    ],
    correctIndex: 1,
    explanation: "The opening insists on happiness, but she cuts herself off before finishing the memory and retreats into raising her glass, so the ritual gesture becomes evidence of feeling she cannot say. Nothing in the passage shows a plan for revenge or what Thomas knows.",
    partNumber: 7,
    partTitle: "Unit 4 Synthesis: Reading a Passage with Every Tool",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Narrator Perspective and Reliability" },
    { partNumber: 3, partTitle: "Character Change and the Character–Setting Relationship" },
    { partNumber: 4, partTitle: "Significant Events and Conflict" },
    { partNumber: 5, partTitle: "Symbol and Imagery in Prose" },
    { partNumber: 6, partTitle: "The Prose Fiction Analysis Essay (Q2)" },
    { partNumber: 7, partTitle: "Unit 4 Synthesis: Reading a Passage with Every Tool" },
  ]
}
