/**
 * Entrance Quiz — Sound Devices (AP English Literature) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englit-sound-devices-ent-1a',
    question: "Read the line below.\n\n*The drill bit bites the brick; the dust drifts down.*\n\nThe sound of the line chiefly serves to",
    options: [
      "soften a harsh scene into gentle, flowing music",
      "slow the line down to suggest a peaceful rest",
      "ring as hard and percussive as its action",
      "imitate the soft pattering of rain on a window",
    ],
    correctIndex: 2,
    explanation: "The clustered b, t and d sounds strike like the drill against brick, so the line's sound enacts its action. Nothing in the line is gentle or restful.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englit-sound-devices-ent-1b',
    question: "Read the line below, spoken by a grieving speaker.\n\n*Alone, alone, I hold the cold stone close.*\n\nThe repeated long o sound chiefly serves to",
    options: [
      "draw the line out into a slow, mournful moan",
      "quicken the line with bright, light syllables",
      "create a harsh noise like breaking glass",
      "make the speaker sound cheerful and calm",
    ],
    correctIndex: 0,
    explanation: "The assonance of \"alone,\" \"hold,\" \"cold,\" \"stone\" and \"close\" makes the voice linger on held vowels, slowing the line into a sound like lament. The effect supports the speaker's grief.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — The Sound Toolkit: Consonance, Onomatopoeia, Internal Rhyme, Euphony and Cacophony
  {
    id: 'englit-sound-devices-ent-2a',
    question: "Which line relies chiefly on onomatopoeia?",
    options: [
      "The willow wept above the weary well.",
      "The kettle hissed and the floorboards creaked.",
      "Night fell, light fell, and all the bright town slept.",
      "Cold old roads go slowly home.",
    ],
    correctIndex: 1,
    explanation: "\"Hissed\" and \"creaked\" imitate the sounds they name. The other lines rely on alliteration (w), internal rhyme (night/light/bright) and assonance (long o).",
    partNumber: 2,
    partTitle: "The Sound Toolkit: Consonance, Onomatopoeia, Internal Rhyme, Euphony and Cacophony",
  },
  {
    id: 'englit-sound-devices-ent-2b',
    question: "A poem's first stanza ends: *Soft lamplight lingered on the linen and the lilies.* Its second stanza ends: *Cracked bricks, black slag, the clanking stacks.*\n\nCompared with the first line, the second chiefly",
    options: [
      "keeps the same gentle mood while adding new images",
      "slows to a whisper as night falls over the town",
      "introduces a cheerful, musical tone to the poem",
      "replaces smooth calm with harsh, clanging noise",
    ],
    correctIndex: 3,
    explanation: "The first line flows on liquid l sounds (euphony); the second is packed with hard k sounds and clusters (cacophony), so the sound turns from calm to industrial clamor along with the scene.",
    partNumber: 2,
    partTitle: "The Sound Toolkit: Consonance, Onomatopoeia, Internal Rhyme, Euphony and Cacophony",
  },

  // Part 3 — Close Readings: Sound Working with Sense
  {
    id: 'englit-sound-devices-ent-3a',
    question: "Read the stanza below.\n\n*The meadow murmured, mild and slow,\nthe brook ran on in liquid light—\nthen, crack: the rifle, and the crow\ntore black across the white.*\n\nThe change in sound in lines 3–4 chiefly serves to",
    options: [
      "break the soft calm with a sudden violent burst",
      "continue the gentle music that the meadow has made",
      "slow the poem down into a quiet and drowsy close",
      "imitate the sound of the running brook more closely",
    ],
    correctIndex: 0,
    explanation: "Murmuring m and liquid l sounds give way to the hard k sounds of \"crack,\" \"crow\" and \"black,\" so the sound changes exactly when the scene turns violent. A sound pattern that shifts usually marks a shift in the poem.",
    partNumber: 3,
    partTitle: "Close Readings: Sound Working with Sense",
  },
  {
    id: 'englit-sound-devices-ent-3b',
    question: "Read the lines below.\n\n*Grandmother's kitchen hummed: the simmering pan,\nthe murmuring radio, the drowsing cat.*\n\nThe repeated m and n sounds chiefly serve to",
    options: [
      "suggest a menace hidden beneath the domestic scene",
      "speed the lines toward a sudden shock at the end",
      "build a warm, humming calm that fits the room",
      "imitate the sharp clatter of dishes in the sink",
    ],
    correctIndex: 2,
    explanation: "The nasal sounds of \"hummed,\" \"simmering\" and \"murmuring\" make the lines hum like the room they describe, and \"drowsing\" confirms the mood. Sound supports the sense rather than working against it.",
    partNumber: 3,
    partTitle: "Close Readings: Sound Working with Sense",
  },

  // Part 4 — Pace and Weight: How Sound Speeds Up and Slows Down a Line
  {
    id: 'englit-sound-devices-ent-4a',
    question: "Which line would most likely be read most slowly?",
    options: [
      "The swallow flickered over the rippling water.",
      "Stark, black, the cliff's cracked crust stood fast.",
      "Merrily, merrily, over the meadow she ran.",
      "Lightly the little leaves are lifting in the breeze.",
    ],
    correctIndex: 1,
    explanation: "Stressed one-syllable words, commas and consonant clusters where words meet (\"cliff's cracked crust\") force the voice to stop and restart. The other lines run on light syllables and smooth sounds.",
    partNumber: 4,
    partTitle: "Pace and Weight: How Sound Speeds Up and Slows Down a Line",
  },
  {
    id: 'englit-sound-devices-ent-4b',
    question: "Read the line below.\n\n*He hauled the drowned net, rope by wet rope, up the steep stone slip.*\n\nThe sound of the line chiefly serves to",
    options: [
      "speed the line to show how easily he does the work",
      "create a cheerful, songlike lilt as he hauls",
      "imitate the splashing of fish inside the net",
      "make reading the line as hard as hauling the net",
    ],
    correctIndex: 3,
    explanation: "Heavy monosyllables and clustered stops (\"wet rope,\" \"steep stone slip\") make the line hard to say quickly, so the reader's effort echoes the man's. Sound and sense move together.",
    partNumber: 4,
    partTitle: "Pace and Weight: How Sound Speeds Up and Slows Down a Line",
  },

  // Part 5 — Repetition and Syntax as Sound
  {
    id: 'englit-sound-devices-ent-5a',
    question: "Read the sentence below.\n\n*And we packed, and we waited, and we packed again, and the trains did not come, and the trains did not come.*\n\nThe repeated \"and\" chiefly serves to",
    options: [
      "speed the passage toward a sudden rescue",
      "list the family's belongings in a cheerful inventory",
      "make the waiting feel endless and wearying",
      "show the speaker confused about the order of events",
    ],
    correctIndex: 2,
    explanation: "Polysyndeton links each identical action to the next, and the repeated final clause goes nowhere, so the sentence itself feels like days of waiting piled on one another.",
    partNumber: 5,
    partTitle: "Repetition and Syntax as Sound",
  },
  {
    id: 'englit-sound-devices-ent-5b',
    question: "Read the passage below.\n\n*She walked the length of the hall, past the portraits, past the long windows full of evening, past the door where her father had once stood waiting for her, and opened it. Empty.*\n\nThe one-word final sentence chiefly serves to",
    options: [
      "state the loss bluntly after the long sentence",
      "continue the slow, flowing rhythm of the long sentence",
      "describe the portraits she has passed along the hall",
      "suggest that her father is still waiting in the room",
    ],
    correctIndex: 0,
    explanation: "After a long sentence built on repeated \"past\" phrases, the single word stops the rhythm dead, so the absence hits with force. A short sentence after a long one gains weight from the contrast.",
    partNumber: 5,
    partTitle: "Repetition and Syntax as Sound",
  },

  // Part 6 — Writing About Sound on the Exam
  {
    id: 'englit-sound-devices-ent-6a',
    question: "A Question 1 poem includes the line *the slow, sad slosh of the tide against the sea wall.*\n\nWhich sentence offers the strongest commentary on this line?",
    options: [
      "This line contains both alliteration and onomatopoeia.",
      "The sounds in this line create a powerful mood for the reader.",
      "The line describes the tide moving against a sea wall.",
      "The heavy s sounds make the tide sound weary, like the grieving speaker.",
    ],
    correctIndex: 3,
    explanation: "Strong commentary ties a specific sound to a specific meaning: the slow s sounds and the onomatopoeic \"slosh\" make the tide sound tired, matching the speaker's grief. The others name devices, offer a generic effect, or summarize.",
    partNumber: 6,
    partTitle: "Writing About Sound on the Exam",
  },
  {
    id: 'englit-sound-devices-ent-6b',
    question: "A student is writing a Question 1 essay on a poem in which a wife's contentment gradually turns to resentment.\n\nWhich thesis best uses sound to support a line of reasoning?",
    options: [
      "The poet uses alliteration, assonance and onomatopoeia throughout the poem.",
      "As humming sounds give way to clipped and grating ones, the speaker's calm hardens into bitterness.",
      "The poem is about a woman who slowly grows angry with her husband.",
      "The poem's sounds create a mood that every reader is sure to feel.",
    ],
    correctIndex: 1,
    explanation: "This thesis uses a change in sound to track the change in attitude, which gives the essay a line of reasoning. The others list devices, summarize, or offer a generic effect.",
    partNumber: 6,
    partTitle: "Writing About Sound on the Exam",
  },

  // Part 7 — Sound Synthesis: Reading "Break, Break, Break"
  {
    id: 'englit-sound-devices-ent-7a',
    question: "Read the poem below.\n\n*Grind of the gears, the crunch of the dumping truck,\nclank of the crane against the cracking stone:\nall day they broke the old street block by block.\nThen dusk, and hush, and over the hollowed lot\na single thrush, and slow soft rain alone.*\n\nThe sounds of lines 1–3 differ from those of lines 4–5 chiefly in that",
    options: [
      "the rhyme scheme changes from couplets to quatrains",
      "lines 1–3 are quiet and lines 4–5 grow steadily louder",
      "lines 4–5 imitate the sounds of the machines more closely",
      "harsh stops give way to soft, open sounds as the work ends",
    ],
    correctIndex: 3,
    explanation: "Lines 1–3 pile up hard k and g sounds (grind, crunch, clank, crack, block), while lines 4–5 turn to hushed sh, s and l sounds (hush, thrush, slow soft). The sound shifts from harsh to gentle as the demolition stops.",
    partNumber: 7,
    partTitle: "Sound Synthesis: Reading \"Break, Break, Break\"",
  },
  {
    id: 'englit-sound-devices-ent-7b',
    question: "Read the poem below.\n\n*Grind of the gears, the crunch of the dumping truck,\nclank of the crane against the cracking stone:\nall day they broke the old street block by block.\nThen dusk, and hush, and over the hollowed lot\na single thrush, and slow soft rain alone.*\n\nThe shift in sound chiefly reinforces",
    options: [
      "the speaker's joy that the old street has been rebuilt",
      "the speaker's anger at the rain for halting the work",
      "the steady sameness of the workday from dawn to night",
      "a turn from destruction to a fragile, unexpected peace",
    ],
    correctIndex: 3,
    explanation: "The cacophony of the machines matches the breaking of the street, and the soft sounds of the last lines carry the quiet that follows over the empty lot. Nothing is rebuilt, and the rain is welcomed, not resented.",
    partNumber: 7,
    partTitle: "Sound Synthesis: Reading \"Break, Break, Break\"",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "The Sound Toolkit: Consonance, Onomatopoeia, Internal Rhyme, Euphony and Cacophony" },
    { partNumber: 3, partTitle: "Close Readings: Sound Working with Sense" },
    { partNumber: 4, partTitle: "Pace and Weight: How Sound Speeds Up and Slows Down a Line" },
    { partNumber: 5, partTitle: "Repetition and Syntax as Sound" },
    { partNumber: 6, partTitle: "Writing About Sound on the Exam" },
    { partNumber: 7, partTitle: "Sound Synthesis: Reading \"Break, Break, Break\"" },
  ]
}
