/**
 * Entrance Quiz — Complex Poetic Analysis (AP English Literature) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — From Paraphrase to Interpretation
  {
    id: 'englit-complex-poetic-analysis-ent-1a',
    question: "Read the lines below.\n\n*Every Sunday we drove past the house\nthat used to be our home, and Father\nslowed the car, and no one spoke.*\n\nThe distinction between \"house\" and \"home\" chiefly suggests",
    options: [
      "that the family has moved to a better neighborhood",
      "that the old house has since been torn down",
      "that Father is a careful and nervous driver",
      "a place that remains but no longer belongs to them",
    ],
    correctIndex: 3,
    explanation: "\"House\" names the structure and \"home\" names belonging, so the phrase \"used to be our home\" marks a loss the family still feels as they slow down in silence. The loaded word choice carries the meaning.",
    partNumber: 1,
    partTitle: "From Paraphrase to Interpretation",
  },
  {
    id: 'englit-complex-poetic-analysis-ent-1b',
    question: "A poem describes a man at his brother's funeral with the line *cold, cracked, clenched, he would not let it out.*\n\nWhich statement names a technique, its effect and its meaning?",
    options: [
      "The poet uses alliteration in the third line of the poem.",
      "The alliteration in this line is very effective and memorable.",
      "The clipped alliteration of the hard c sounds tightens the line, enacting his refusal to grieve aloud.",
      "The poem is about a man who refuses to cry at his brother's funeral.",
    ],
    correctIndex: 2,
    explanation: "This statement identifies the device, says what it does to the line and connects that effect to the poem's meaning. The others stop at a label, a vague judgment or a summary.",
    partNumber: 1,
    partTitle: "From Paraphrase to Interpretation",
  },

  // Part 2 — Rhythm & Emphasis: Where the Beat Breaks
  {
    id: 'englit-complex-poetic-analysis-ent-2a',
    question: "Read the lines below.\n\n*The evening settled softly on the town,\nthe lamps came on, the windows turned to gold,\nand then—Fire! Fire!—down the street, the bell.*\n\nThe disruption in the third line chiefly serves to",
    options: [
      "jolt the calm rhythm to enact a sudden alarm",
      "continue the soft, even beat of the quiet evening",
      "slow the poem down into a peaceful closing image",
      "show that the poet has lost control of the meter",
    ],
    correctIndex: 0,
    explanation: "Two smooth lines set up a gentle beat, and the dashes and crowded stresses of \"Fire! Fire!\" break it at the moment of danger. A break in an established rhythm creates emphasis where the meaning turns.",
    partNumber: 2,
    partTitle: "Rhythm & Emphasis: Where the Beat Breaks",
  },
  {
    id: 'englit-complex-poetic-analysis-ent-2b',
    question: "Read the lines below, spoken by a farmhand far from his family.\n\n*I'll go back home when the harvest's in,\nwhen the barn is full and the wheat is thin.\nI'll go back home. I'll go back home.*\n\nThe repetition in the last line most likely serves to",
    options: [
      "confirm that the speaker has already arrived home",
      "make a plan sound like a wish that may never come",
      "speed the poem toward a cheerful and certain ending",
      "introduce a second speaker who answers the first",
    ],
    correctIndex: 1,
    explanation: "Said once, the line is a plan; said again in the same even beat, it sounds like a promise the speaker keeps making to himself. Repetition in a steady rhythm can deepen and darken a line's meaning.",
    partNumber: 2,
    partTitle: "Rhythm & Emphasis: Where the Beat Breaks",
  },

  // Part 3 — Sound: Rhyme, Alliteration & Sonic Texture
  {
    id: 'englit-complex-poetic-analysis-ent-3a',
    question: "Read the stanza below.\n\n*We said our vows beneath the summer sun\nand swore that we would never be undone;\nnow winter finds us speaking as we can,\nand neither of us quite the one.*\n\nThe near rhyme of \"can\" and \"one\" chiefly serves to",
    options: [
      "confirm the couple's lasting and complete happiness",
      "speed the stanza toward a cheerful, settled close",
      "signal that a second speaker has begun to talk",
      "deny the expected chime, as their union frays",
    ],
    correctIndex: 3,
    explanation: "The first lines chime exactly (sun / undone), but the last pair only nearly rhymes, so the ear feels something slightly off, just as the marriage has slipped. Slant rhyme can carry a sense of the unresolved.",
    partNumber: 3,
    partTitle: "Sound: Rhyme, Alliteration & Sonic Texture",
  },
  {
    id: 'englit-complex-poetic-analysis-ent-3b',
    question: "Read the line below.\n\n*Lull, little lamb, in the long, low light of the lane.*\n\nThe sound of the line chiefly creates",
    options: [
      "a soft and lulling smoothness suited to the scene",
      "a harsh clatter that suggests sudden danger nearby",
      "a quick, jittery rhythm of rising panic and fear",
      "a cold, clinical flatness that removes all feeling",
    ],
    correctIndex: 0,
    explanation: "Repeated liquid l sounds and long vowels make the line glide like a lullaby, so the sound reinforces the gentle sense. This is euphony: smooth sound matched to calm meaning.",
    partNumber: 3,
    partTitle: "Sound: Rhyme, Alliteration & Sonic Texture",
  },

  // Part 4 — Figurative Language & Imagery
  {
    id: 'englit-complex-poetic-analysis-ent-4a',
    question: "Read the lines below.\n\n*O Hunger, you old landlord of this street,\nyou come to collect at every door before the rent.*\n\nThe address to Hunger chiefly serves to",
    options: [
      "describe a real landlord who owns the whole street",
      "praise the thrift of the families on the street",
      "make poverty a familiar oppressor of the street",
      "mock the tenants for eating more than they need",
    ],
    correctIndex: 2,
    explanation: "Apostrophe and personification turn hunger into an old landlord who calls at every door ahead of the rent, so want becomes a powerful, intimate tyrant. Reading the figure literally misses its point.",
    partNumber: 4,
    partTitle: "Figurative Language & Imagery",
  },
  {
    id: 'englit-complex-poetic-analysis-ent-4b',
    question: "A poem about a long marriage returns again and again to \"the cracked cup,\" \"the fraying hem,\" \"the hinge that will not close\" and \"the clock we never wind.\"\n\nThe pattern of images most directly suggests",
    options: [
      "a household far too poor to replace its belongings",
      "a relationship wearing out through small neglects",
      "a couple happily renovating their home together",
      "the speaker's pride in her skill at mending things",
    ],
    correctIndex: 1,
    explanation: "Each image is something small left broken or untended, and together they form a motif of slow wear that mirrors the marriage. The pattern, not any single image, creates the meaning.",
    partNumber: 4,
    partTitle: "Figurative Language & Imagery",
  },

  // Part 5 — Form, Structure & Syntax
  {
    id: 'englit-complex-poetic-analysis-ent-5a',
    question: "Read the lines below.\n\n*She held the letter over the stove, then let it\nfall.*\n\nThe line break after \"let it\" chiefly serves to",
    options: [
      "suspend the act so the reader falls into the next line too",
      "mark a caesura that slows the reader before the word \"stove\"",
      "create an end-stopped line that closes off her thought",
      "signal the poem's final rhymed couplet and its summary",
    ],
    correctIndex: 0,
    explanation: "The enjambment holds the sentence open at its most tense point, and the reader's eye must fall to the next line just as the letter falls. The break enacts the action it describes.",
    partNumber: 5,
    partTitle: "Form, Structure & Syntax",
  },
  {
    id: 'englit-complex-poetic-analysis-ent-5b',
    question: "The first twelve lines of a sonnet praise a city's bright towers and busy markets. The closing couplet reads:\n\n*And yet, for all its light, I cannot see\none window there that ever looked for me.*\n\nThe couplet chiefly serves to",
    options: [
      "sum up the many attractions the city has to offer",
      "introduce a second city for the reader to compare",
      "confirm that the speaker loves the city's crowds",
      "turn admiration into a confession of loneliness",
    ],
    correctIndex: 3,
    explanation: "\"And yet\" marks the turn: after twelve lines of admiration, the couplet reveals that none of the city's light reaches the speaker. A closing couplet can twist rather than summarize.",
    partNumber: 5,
    partTitle: "Form, Structure & Syntax",
  },

  // Part 6 — Speaker, Tone & the Ambiguous Poem
  {
    id: 'englit-complex-poetic-analysis-ent-6a',
    question: "Read the lines below.\n\n*My father's hands were large and slow and kind.\nHe never once raised one of them to me.\nHe never once raised one of them at all.*\n\nThe tone of the final line is best described as",
    options: [
      "purely grateful, without any reservation at all",
      "admiring, yet shadowed by regret for what he never did",
      "openly bitter and accusing toward the father",
      "detached and indifferent toward the father",
    ],
    correctIndex: 1,
    explanation: "The repeated phrase first praises a gentle father, then widens to suggest he never reached out at all, so admiration and regret share one line. A precise tone word holds both attitudes.",
    partNumber: 6,
    partTitle: "Speaker, Tone & the Ambiguous Poem",
  },
  {
    id: 'englit-complex-poetic-analysis-ent-6b',
    question: "Read the line below, spoken by a grieving speaker.\n\n*The more I forget you, the more you are here.*\n\nThe line is best described as",
    options: [
      "verbal irony in which the speaker means the opposite",
      "a simile that compares memory to an unwelcome visitor",
      "a paradox in which losing memory deepens the presence",
      "situational irony in which the lost person returns",
    ],
    correctIndex: 2,
    explanation: "The statement seems to contradict itself, yet it points to a truth: the effort to forget makes the absence more vivid. That self-contradiction with a resolution is a paradox, not irony or simile.",
    partNumber: 6,
    partTitle: "Speaker, Tone & the Ambiguous Poem",
  },

  // Part 7 — Synthesis: The Full Close Reading & Exit Quiz
  {
    id: 'englit-complex-poetic-analysis-ent-7a',
    question: "Read the poem below.\n\n*In March my mother planted rows of beans\nand talked to them like children: grow, grow straight.\nIn August, when the doctors said the word,\nshe went out to the garden anyway\nand staked each vine, and tied it, and was late\nfor every appointment after that.*\n\nWhich thesis best accounts for the poem?",
    options: [
      "The poem uses imagery and enjambment to describe a garden.",
      "The mother plants beans in March and becomes ill in August.",
      "Through her stubborn tending after the diagnosis, the poem shows a care that is at once defiance and denial.",
      "The poem teaches that gardening helps people cope with illness.",
    ],
    correctIndex: 2,
    explanation: "This thesis names the turn (the diagnosis), the action that follows and the tension within it. The others list devices, summarize, or reduce the poem to a moral.",
    partNumber: 7,
    partTitle: "Synthesis: The Full Close Reading & Exit Quiz",
  },
  {
    id: 'englit-complex-poetic-analysis-ent-7b',
    question: "Read the poem below.\n\n*In March my mother planted rows of beans\nand talked to them like children: grow, grow straight.\nIn August, when the doctors said the word,\nshe went out to the garden anyway\nand staked each vine, and tied it, and was late\nfor every appointment after that.*\n\nThe series \"and staked each vine, and tied it, and was late\" chiefly serves to",
    options: [
      "show that the mother is a careless gardener",
      "pile up chores to hold off the news",
      "speed the poem toward a cheerful harvest",
      "describe the steps of her medical treatment",
    ],
    correctIndex: 1,
    explanation: "The repeated \"and\" stacks up her tasks right after the diagnosis, and the last item, being \"late\" for appointments, shows the work becoming a way of not facing what she has been told.",
    partNumber: 7,
    partTitle: "Synthesis: The Full Close Reading & Exit Quiz",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "From Paraphrase to Interpretation" },
    { partNumber: 2, partTitle: "Rhythm & Emphasis: Where the Beat Breaks" },
    { partNumber: 3, partTitle: "Sound: Rhyme, Alliteration & Sonic Texture" },
    { partNumber: 4, partTitle: "Figurative Language & Imagery" },
    { partNumber: 5, partTitle: "Form, Structure & Syntax" },
    { partNumber: 6, partTitle: "Speaker, Tone & the Ambiguous Poem" },
    { partNumber: 7, partTitle: "Synthesis: The Full Close Reading & Exit Quiz" },
  ]
}
