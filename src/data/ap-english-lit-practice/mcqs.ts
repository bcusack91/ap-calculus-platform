import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP English Literature & Composition — 55 MCQs in 60 minutes.
 * 5 passages × 11 questions: 2 poems, 2 prose fiction, 1 drama.
 * Passages are original/simulated to avoid copyright issues.
 */

const POEM_1 = `**Passage 1 — Poem (early twentieth century, original).**

(1)  The kettle on the stove begins to sing,
(2)  a thin domestic music, half complaint,
(3)  half something like a hymn — the kind of thing
(4)  one hears at evening, low and almost faint,

(5)  that holds a house together. Outside, the snow
(6)  has settled on the porch and on the wire
(7)  the line birds left an hour or so ago;
(8)  inside, the cat has dozed beside the fire.

(9)  My mother, who is gone, would lift the lid
(10) and, with the same small motion every year,
(11) measure the water out, as though she did
(12) some sacred thing the world need not know here.

(13) I do it now, alone, and find it strange
(14) how much, in losing her, I haven\'t lost:
(15) the kettle, and the pouring, and the change
(16) of season at the window — and the cost.`

const PROSE_1 = `**Passage 2 — From a novel set in a New England mill town, c. 1955 (original).**

(1) Mrs. Hadley arrived at the church basement at six minutes past seven, which was, by the standards of the Ladies\' Aid, a small scandal. (2) She had stopped to retrieve her gloves from the seat of the bus, and then, having retrieved them, she had stood for some moments on the sidewalk in front of the Universalist meeting hall, looking up at a sky the color of weak tea, and thinking how strange it was, that one could be sixty-three years old and have buried a husband and two sisters and still feel, in the cold March wind, like a child who has been sent on an errand and forgotten what for. (3) When she at last came down the basement stairs, the women were already arranged at the long table, their hats in their laps, their hands folded over their hats. (4) Margaret Atwell, who had been the chairwoman of the Aid for nineteen years, looked up and said, "We had begun to wonder, Edith." (5) She did not say it unkindly. (6) She said it as one says a small barometric reading, a fact about the weather; but Mrs. Hadley felt the temperature of the room adjust by perhaps half a degree, and she sat down quickly, in the chair that had been left for her, and unbuttoned the top button of her coat. (7) "I missed the seven o\'clock," she said, which was not quite true. (8) Margaret nodded, as if this had been the answer she expected, and turned back to the minutes of the previous meeting.`

const POEM_2 = `**Passage 3 — Poem (mid-twentieth century, original).**

(1)  We bought the field in March, and walked it once
(2)  before the snow had finished going down.
(3)  My father said: a man could spend his life
(4)  on twenty acres and not learn the half of it.

(5)  He meant, I think, the trees along the line —
(6)  the oak that had been struck by lightning twice
(7)  and split, and gone on living, the small stand
(8)  of pine that someone\'s father, someone\'s

(9)  father had set out in 1910 perhaps,
(10) for windbreak, for the future, for the sound.
(11) He meant the way the field ran down to water,
(12) and how the water, when the rain was hard,

(13) ran back into the field. He meant the rocks,
(14) which had been there, of course, before the field,
(15) and would be there, of course, after; and the deer
(16) that crossed it, morning and at fall of light,

(17) without consulting any of the deeds.
(18) He did not mean — he never said — the price
(19) we paid, in March, for twenty acres
(20) and a lifetime of not learning the half of it.`

const PROSE_2 = `**Passage 4 — From a short story set in a London office, c. 1928 (original).**

(1) Mr. Pemberton had occupied the same desk in the same back office of Greaves & Greaves, Solicitors, for forty-one years, and in that time he had developed a complete system of small dignities. (2) He had a particular fountain pen, refilled on the first Monday of each month; he had a particular blotter, replaced on the first Monday of each January; he had a brown ceramic cup, brought from home in 1898, which the office boy was instructed to wash but never to dry. (3) He had, also, the conviction — quietly held, never quite spoken — that the firm could not function without him, and that should he be absent for so much as a single morning, the partners would feel it as one feels a cold draft from a door left slightly ajar. (4) On a Tuesday in November of 1928, Mr. Pemberton was absent. (5) He had a cold, an ordinary one, and his sister had insisted on bed and broth and three telegrams, the last of which informed Mr. Greaves the younger of the necessity. (6) The morning passed, and then the afternoon, and at half past four Mr. Greaves the younger walked back through the offices toward the door, and noticed, in passing, that the empty desk in the back office looked very tidy, very tidy indeed; and he thought, but did not quite say, what a pleasant thing it was, after all, that the room could be so clean.`

const DRAMA_1 = `**Passage 5 — From a contemporary one-act play. The scene is a kitchen at midnight; ELLA, 35, a chef, has come home late from her restaurant. Her father, MARTIN, 70, sits at the kitchen table with the lights off and a cup of cold tea in front of him.**

(1) **MARTIN.** You\'re home late.

(2) **ELLA.** *(switching on the lamp; not the overhead)* I\'m always home late, Dad. That\'s what restaurants are.

(3) **MARTIN.** Your mother used to wait up.

(4) **ELLA.** I know she did.

(5) *(A pause. ELLA puts down her bag, very carefully, as though the bag contained something breakable.)*

(6) **MARTIN.** I made the tea at — I don\'t know. Eight, perhaps.

(7) **ELLA.** It\'s cold now.

(8) **MARTIN.** Yes.

(9) **ELLA.** Would you like me to make some more?

(10) **MARTIN.** *(after a moment)* No. I\'d only forget about it.

(11) *(ELLA sits down across from him. She does not take off her coat.)*

(12) **ELLA.** I want to tell you something. I want to tell you tonight, while it\'s only us.

(13) **MARTIN.** All right.

(14) **ELLA.** I\'ve sold the restaurant.

(15) *(MARTIN does not move. After a long moment, he picks up the cup of cold tea and sets it down again, in a very slightly different place on the table.)*

(16) **MARTIN.** Well. That\'s a piece of news.

(17) **ELLA.** Aren\'t you going to ask me why?

(18) **MARTIN.** No. *(beat)* I expect you\'ll tell me, in your own time.

(19) **ELLA.** *(her voice changing)* I sometimes think you don\'t want to know anything about my life, Dad. I sometimes think you decided years ago that the less you knew, the less you\'d have to disapprove of.

(20) **MARTIN.** *(quietly)* Or the less I\'d have to lose.`

export const MCQS: MCQItem[] = [
  /* ---------------- POEM 1 (Q1–Q11) ---------------- */
  {
    topic: 'poetry-analysis',
    stimulus: POEM_1,
    question: 'The kettle\'s song is described in line 2 as "a thin domestic music," a phrase that primarily characterizes the music as',
    options: [
      'loud, intrusive, and impossible to ignore.',
      'modest, household-scale, and unassuming.',
      'professional, formal, and ceremonial.',
      'discordant, harsh, and unpleasant.',
    ],
    correctAnswer: 1,
    explanation: '"Thin" suggests slightness, "domestic" places the music firmly in the home. Together they characterize the kettle\'s sound as small, ordinary, and bound to the household.',
  },
  {
    topic: 'poetry-analysis',
    stimulus: POEM_1,
    question: 'The juxtaposition of "complaint" and "hymn" in lines 2–3 functions to',
    options: [
      'argue that domestic life is fundamentally a religious experience.',
      'capture the dual emotional register of an ordinary, evening sound.',
      'suggest that the kettle is producing a deliberately discordant sound.',
      'establish the speaker\'s preference for sacred over secular music.',
    ],
    correctAnswer: 1,
    explanation: 'The kettle is "half complaint, / half something like a hymn." The pairing acknowledges both the petulant whistle and the soothing ritual; it is descriptive rather than doctrinal.',
  },
  {
    topic: 'poetry-analysis',
    stimulus: POEM_1,
    question: 'In stanza 2 (lines 5–8), the contrast between "outside" and "inside" primarily serves to',
    options: [
      'criticize the speaker for failing to attend to the natural world.',
      'establish the home as a small enclosure of warmth within an indifferent winter.',
      'introduce a metaphor in which the cat represents the speaker\'s mother.',
      'foreshadow a literal storm that will damage the house in the next stanza.',
    ],
    correctAnswer: 1,
    explanation: 'Outside: cold snow, departed birds, a bare wire. Inside: a fire, a sleeping cat, a singing kettle. The contrast establishes the room as a small island of warmth, a recurring motif in domestic poems of seasonal change.',
  },
  {
    topic: 'poetry-analysis',
    stimulus: POEM_1,
    question: 'The phrase "the line birds left / an hour or so ago" (lines 6–7) primarily contributes which effect?',
    options: [
      'It introduces an extended ornithological description that will dominate the poem.',
      'It supplies a small, precise detail that locates the speaker in time and emphasizes absence.',
      'It establishes the speaker as an avid amateur birdwatcher.',
      'It functions as a religious allusion to the birds of the Book of Genesis.',
    ],
    correctAnswer: 1,
    explanation: 'The detail is narrowly observational ("an hour or so ago") and adds the idea of a recently emptied space — birds gone, mother gone. The small absence prepares the larger one.',
  },
  {
    topic: 'poetry-analysis',
    stimulus: POEM_1,
    question: 'In stanza 3 (lines 9–12), the speaker characterizes her mother\'s preparation of the kettle as',
    options: [
      'a tedious chore that the mother resented performing.',
      'a small, ritualized act invested with quiet sacredness.',
      'an impractical and inefficient way of boiling water.',
      'a duty imposed on the mother by her husband.',
    ],
    correctAnswer: 1,
    explanation: '"With the same small motion every year… as though she did / some sacred thing the world need not know here." The diction "sacred" and "every year" elevates a domestic act into a private rite.',
  },
  {
    topic: 'poetry-analysis',
    stimulus: POEM_1,
    question: 'The phrase "the world need not know here" (line 12) suggests that the mother\'s ritual is',
    options: [
      'shameful and deliberately concealed from outsiders.',
      'meaningful precisely because it is private and unwitnessed.',
      'evidence that the mother distrusted her neighbors.',
      'a public performance of religious observance.',
    ],
    correctAnswer: 1,
    explanation: 'The ritual is sacred to the woman and her household; its meaning does not require an audience. The line valorizes the small private act over the visible public one.',
  },
  {
    topic: 'poetry-analysis',
    stimulus: POEM_1,
    question: 'The transition signaled by "I do it now, alone" (line 13) primarily achieves which effect?',
    options: [
      'It shifts the poem from past observation to present inheritance.',
      'It introduces a new and unrelated speaker for the final stanza.',
      'It signals that the speaker has rejected her mother\'s example.',
      'It marks the moment the mother enters the kitchen.',
    ],
    correctAnswer: 0,
    explanation: 'The first three stanzas describe a remembered scene; line 13 brings the speaker into the present, performing the ritual herself. The transition is the structural pivot.',
  },
  {
    topic: 'poetry-analysis',
    stimulus: POEM_1,
    question: 'The paradox in lines 13–14 ("how much, in losing her, I haven\'t lost") is best understood as the speaker\'s recognition that',
    options: [
      'she did not actually love her mother as much as she claimed.',
      'her mother\'s death has been emotionally easier than she expected.',
      'the rituals and patterns of her mother\'s life persist in her own.',
      'all human beings are eventually replaced by their successors.',
    ],
    correctAnswer: 2,
    explanation: 'The speaker has lost her mother (line 9) but still has the kettle, the pouring, the seasonal change at the window. Inheritance is partial recovery: what is gone has also remained.',
  },
  {
    topic: 'poetry-analysis',
    stimulus: POEM_1,
    question: 'The last word of the poem, "the cost" (line 16), introduces a tonal turn that suggests',
    options: [
      'unambiguous celebration of the inheritance just described.',
      'a sober acknowledgment of grief beneath the catalog of preserved things.',
      'a concern that the kettle will eventually wear out and need to be replaced.',
      'a sudden anxiety about the financial expense of running a household.',
    ],
    correctAnswer: 1,
    explanation: 'The dash before "and the cost" pulls the catalog up short. After enumerating what has been kept, the poem admits, finally, what was paid for it. The grief had been suspended; the last word releases it.',
  },
  {
    topic: 'poetry-analysis',
    stimulus: POEM_1,
    question: 'The poem\'s rhyme scheme (ABAB throughout) most strongly contributes to which effect?',
    options: [
      'It produces a deliberately disorienting sound texture.',
      'It enacts the regularity and pattern that the poem thematically celebrates.',
      'It signals that the poem belongs to the tradition of comic light verse.',
      'It is too irregular to produce any consistent effect.',
    ],
    correctAnswer: 1,
    explanation: 'The poem\'s subject is recurrence — the same kettle, the same gesture, every year. A regular ABAB scheme makes the form mimic the content: ritual itself.',
  },
  {
    topic: 'poetry-analysis',
    stimulus: POEM_1,
    question: 'The poem as a whole is best characterized as',
    options: [
      'a satirical treatment of domestic ritual.',
      'a meditation on inheritance, in which loss and continuity are inseparable.',
      'a denunciation of a previous generation\'s gendered domestic labor.',
      'a celebration of pure happiness that contains no element of grief.',
    ],
    correctAnswer: 1,
    explanation: 'The poem holds two truths together: the mother is gone (loss); the kettle still sings, the pouring continues (continuity). Neither cancels the other — that is the poem\'s argument.',
  },

  /* ---------------- PROSE 1: Mrs. Hadley (Q12–Q22) ---------------- */
  {
    topic: 'prose-analysis',
    stimulus: PROSE_1,
    question: 'The opening detail that Mrs. Hadley arrived "at six minutes past seven, which was, by the standards of the Ladies\' Aid, a small scandal" (sentence 1) primarily serves to',
    options: [
      'introduce a violent crime that will be investigated in the chapter.',
      'establish the meticulous social conventions of the community in a tone of mild irony.',
      'criticize Mrs. Hadley as a fundamentally selfish person.',
      'foreshadow a major conflict between Mrs. Hadley and Margaret Atwell.',
    ],
    correctAnswer: 1,
    explanation: 'A six-minute lateness as "a small scandal" relies on the wry distance between the narrator and the world she describes. The phrase "by the standards of the Ladies\' Aid" is the clue: the standards are local and disproportionately strict.',
  },
  {
    topic: 'prose-analysis',
    stimulus: PROSE_1,
    question: 'The lengthy second sentence, in which Mrs. Hadley pauses on the sidewalk, primarily characterizes her as',
    options: [
      'a lifelong widow who has lost interest in the meetings of the Ladies\' Aid.',
      'a woman who, despite age and loss, remains susceptible to a child\'s sense of bewilderment.',
      'a confused old woman whose mental faculties are failing her.',
      'a deeply religious person reflecting on her recent churchgoing.',
    ],
    correctAnswer: 1,
    explanation: 'The simile is precise: "like a child who has been sent on an errand and forgotten what for." The narrator is not diagnosing dementia; she is reporting an emotional residue — the small disorientation of a long life.',
  },
  {
    topic: 'prose-analysis',
    stimulus: PROSE_1,
    question: 'The phrase "a sky the color of weak tea" (sentence 2) is best described as',
    options: [
      'a literal description that has no figurative weight.',
      'a domestic simile that aligns the natural world with the feminine, household register of the story.',
      'a hyperbolic image meant to amuse the reader.',
      'an allusion to a famous poem about teatime in New England.',
    ],
    correctAnswer: 1,
    explanation: 'The story\'s social world is one of women, china cups, parish meetings. To describe a sky as "weak tea" is to render even the cosmos in domestic terms — a quiet but consistent narrative choice.',
  },
  {
    topic: 'prose-analysis',
    stimulus: PROSE_1,
    question: 'The arrangement of the women in sentence 3 ("their hats in their laps, their hands folded over their hats") functions primarily to',
    options: [
      'document the unusual fashion habits of mid-century New England.',
      'convey through still, parallel detail the regimented decorum of the meeting.',
      'introduce a comic image that ridicules the women\'s appearance.',
      'foreshadow the violent removal of the hats later in the scene.',
    ],
    correctAnswer: 1,
    explanation: 'The phrase is structural — three repeated possessives, two parallel small actions. The women have arranged themselves in identical ways: the meeting is a small choreography of order.',
  },
  {
    topic: 'prose-analysis',
    stimulus: PROSE_1,
    question: 'Margaret Atwell\'s remark "We had begun to wonder, Edith" (sentence 4) is most accurately characterized as',
    options: [
      'a sincere expression of concern for Mrs. Hadley\'s wellbeing.',
      'a polite formulation that nonetheless registers a public note of disapproval.',
      'an outright accusation of laziness or moral failing.',
      'an attempt at lighthearted humor that breaks the tension.',
    ],
    correctAnswer: 1,
    explanation: 'The narrator immediately glosses the remark: "She did not say it unkindly… as one says a small barometric reading." The form is courteous; the content registers a small public censure that the room understands.',
  },
  {
    topic: 'prose-analysis',
    stimulus: PROSE_1,
    question: 'The image of the room\'s temperature adjusting "by perhaps half a degree" (sentence 6) primarily serves to',
    options: [
      'literally describe a thermostat in the church basement.',
      'render Mrs. Hadley\'s subjective experience of social chill in measured, almost scientific language.',
      'criticize the church for failing to heat its basement adequately.',
      'introduce a meteorological digression unrelated to the meeting.',
    ],
    correctAnswer: 1,
    explanation: 'The narrator borrows the language of measurement (half a degree, barometric reading) to convey a social atmosphere so subtle no one in the room would name it — but Mrs. Hadley feels it precisely.',
  },
  {
    topic: 'prose-analysis',
    stimulus: PROSE_1,
    question: 'The brief sentence "She did not say it unkindly" (sentence 5) is most important to the passage because it',
    options: [
      'absolves Margaret Atwell of any wrongdoing in the scene.',
      'identifies the precise nature of small-town civility: a courtesy that does not soften an underlying judgment.',
      'introduces a major shift in the narrator\'s perspective on Margaret.',
      'reveals that Mrs. Hadley misunderstood the comment entirely.',
    ],
    correctAnswer: 1,
    explanation: 'The sentence holds two truths in tension: the form is not unkind; the effect is nonetheless cold. That tension — civility without warmth — is the social texture the whole passage is mapping.',
  },
  {
    topic: 'prose-analysis',
    stimulus: PROSE_1,
    question: 'Mrs. Hadley\'s statement "I missed the seven o\'clock" (sentence 7), explicitly noted by the narrator as "not quite true," primarily reveals that',
    options: [
      'Mrs. Hadley is a habitual liar with a history of deceiving the Aid.',
      'Mrs. Hadley participates in the social fiction of an acceptable excuse rather than confess her real reason.',
      'Mrs. Hadley has begun to lose her grip on reality and cannot recall the truth.',
      'Mrs. Hadley intends to embarrass Margaret in front of the other women.',
    ],
    correctAnswer: 1,
    explanation: 'The real reason — pausing on a sidewalk to look at a tea-colored sky — is too private and too strange to offer. A small acceptable lie is the price of staying inside the social compact.',
  },
  {
    topic: 'prose-analysis',
    stimulus: PROSE_1,
    question: 'The narrator\'s perspective in this passage is best described as',
    options: [
      'a first-person account from Mrs. Hadley\'s adult daughter.',
      'a third-person omniscient narrator who moves freely between Mrs. Hadley\'s interior and the room\'s social surface.',
      'a strictly objective camera that records only external action and dialogue.',
      'an unreliable narrator whose distortions undermine the reader\'s trust.',
    ],
    correctAnswer: 1,
    explanation: 'The narrator reports both the public exchange and Mrs. Hadley\'s private feelings (the simile of the child on an errand, the felt half-degree drop), while also stepping back to gloss the social meaning of Margaret\'s remark — the stance is third-person omniscient with shifting focalization.',
  },
  {
    topic: 'prose-analysis',
    stimulus: PROSE_1,
    question: 'The passage\'s final action — Margaret turning back to "the minutes of the previous meeting" (sentence 8) — primarily contributes which effect?',
    options: [
      'It introduces dramatic uncertainty about whether the meeting will continue.',
      'It restores institutional order and signals that the small disturbance has been absorbed without comment.',
      'It reveals that Margaret has not been listening to Mrs. Hadley\'s excuse.',
      'It indicates that Mrs. Hadley will be expelled from the Aid.',
    ],
    correctAnswer: 1,
    explanation: 'The closure is procedural. The minutes of the previous meeting are exactly what one returns to in order to indicate that the present interruption is over and need not be recorded.',
  },
  {
    topic: 'prose-analysis',
    stimulus: PROSE_1,
    question: 'Which best describes a central concern of the passage as a whole?',
    options: [
      'The criminal investigation of a wrongful death in a New England town.',
      'The way small social codes register, without naming, both belonging and the cost of belonging.',
      'A satirical exposé of small-town religion as fundamentally hypocritical.',
      'The supernatural visitations experienced by elderly women in church basements.',
    ],
    correctAnswer: 1,
    explanation: 'Six minutes\' lateness, half a degree\'s social drop, "We had begun to wonder, Edith," a small lie offered and accepted: the passage maps the smallest gradations by which a community signals to one of its members where the lines are.',
  },

  /* ---------------- POEM 2 (Q23–Q33) ---------------- */
  {
    topic: 'poetry-analysis',
    stimulus: POEM_2,
    question: 'The father\'s observation in lines 3–4 ("a man could spend his life / on twenty acres and not learn the half of it") establishes which central idea?',
    options: [
      'Twenty acres is too small a parcel for a man to make a living from.',
      'The natural world contains an inexhaustible richness that human attention can only partly grasp.',
      'A man who buys land should sell it as quickly as possible.',
      'Land ownership is a foolish ambition.',
    ],
    correctAnswer: 1,
    explanation: 'The father\'s remark is the poem\'s thematic spine. A lifetime is not enough to know twenty acres — the field exceeds knowing. The rest of the poem fills out what he meant.',
  },
  {
    topic: 'poetry-analysis',
    stimulus: POEM_2,
    question: 'The repeated phrase "He meant" (lines 5, 11, 13) primarily functions to',
    options: [
      'demonstrate that the speaker is unsure what the father meant.',
      'enact the speaker\'s reconstruction of his father\'s meaning by accumulation of specific details.',
      'establish the father as a famous philosopher whose statements require interpretation.',
      'argue that the father did not say what he meant.',
    ],
    correctAnswer: 1,
    explanation: 'The anaphora ("He meant") gathers details — the lightning-struck oak, the pines, the water, the rocks, the deer — into a slow inventory. The speaker is, in effect, decoding a remark he heard once into the world it referred to.',
  },
  {
    topic: 'poetry-analysis',
    stimulus: POEM_2,
    question: 'The image of the oak that "had been struck by lightning twice / and split, and gone on living" (lines 6–7) functions primarily as',
    options: [
      'a literal botanical detail with no figurative significance.',
      'an emblem of resilience that subtly reflects on the human inhabitants of the land.',
      'a warning that the speaker should never plant trees in lightning-prone areas.',
      'a religious symbol drawn directly from the Book of Job.',
    ],
    correctAnswer: 1,
    explanation: 'The oak is split but living. In a poem about the persistence of land beyond human time, the image carries an obvious second meaning: things break and continue. The poem invites, without insisting on, the resonance.',
  },
  {
    topic: 'poetry-analysis',
    stimulus: POEM_2,
    question: 'The repetition "someone\'s / father, someone\'s / father had set out in 1910 perhaps" (lines 8–9) achieves which effect?',
    options: [
      'It corrects an error and clarifies that two specific fathers planted the trees.',
      'It dramatizes, through hesitation and recurrence, the depth of generational time embedded in the land.',
      'It indicates that the speaker cannot remember the names of his ancestors.',
      'It is a typographical error and contributes nothing to meaning.',
    ],
    correctAnswer: 1,
    explanation: 'The stutter — "someone\'s / father, someone\'s / father" — pulls the reader back through generations the speaker cannot name. The repetition does what the speaker cannot: it counts the distance.',
  },
  {
    topic: 'poetry-analysis',
    stimulus: POEM_2,
    question: 'The triplet of motives "for windbreak, for the future, for the sound" (line 10) is best described as',
    options: [
      'a list of contradictions that undermines the speaker\'s argument.',
      'a movement from practical to far-reaching to almost aesthetic justifications for planting.',
      'evidence that the planters were uncertain why they planted at all.',
      'a humorous catalog of trivial reasons for an absurd act.',
    ],
    correctAnswer: 1,
    explanation: 'The list moves outward: windbreak (immediate utility), the future (long-term), the sound (an almost gratuitous, sensory good). The progression is the poem\'s view of why anyone tends to land — for use, for descendants, and finally for its sheer being.',
  },
  {
    topic: 'poetry-analysis',
    stimulus: POEM_2,
    question: 'The chiasmus in lines 11–13 ("the way the field ran down to water, / and how the water… ran back into the field") primarily emphasizes',
    options: [
      'the literal danger of seasonal flooding on the property.',
      'the reciprocity and circularity of natural processes that exceed simple ownership.',
      'the speaker\'s confusion about basic geography.',
      'the father\'s unreasonable fear of rainstorms.',
    ],
    correctAnswer: 1,
    explanation: 'The mirrored structure (field-to-water, water-to-field) enacts a process that has no fixed direction. The land is not static; it gives and receives. Ownership is a flat term for a thing that moves.',
  },
  {
    topic: 'poetry-analysis',
    stimulus: POEM_2,
    question: 'The deer "that crossed it, morning and at fall of light, / without consulting any of the deeds" (lines 16–17) function primarily to',
    options: [
      'criticize state laws that permit hunters to trespass.',
      'remind the reader, with quiet wit, that the legal fiction of ownership is invisible to the field\'s actual users.',
      'introduce an unrelated complaint about local wildlife management.',
      'foreshadow a hunting accident later in the poem.',
    ],
    correctAnswer: 1,
    explanation: 'The deer have not consulted the deeds — a phrase whose dry humor punctures the centrality of legal ownership. The land has its own residents who do not need permission.',
  },
  {
    topic: 'poetry-analysis',
    stimulus: POEM_2,
    question: 'The lines "the rocks, / which had been there, of course, before the field, / and would be there, of course, after" (lines 13–15) primarily contribute',
    options: [
      'a geological digression unrelated to the poem\'s argument.',
      'a vision of deep time in which the field is a brief human frame around something far older.',
      'evidence that the property is unsuitable for farming.',
      'a literal description of a rock collection in the speaker\'s house.',
    ],
    correctAnswer: 1,
    explanation: 'The repeated "of course" is offhand: the rocks predate and will outlast the field. The poem widens its temporal frame to a scale on which "twenty acres" and even ownership become very small things.',
  },
  {
    topic: 'poetry-analysis',
    stimulus: POEM_2,
    question: 'The shift in the final stanza from "He meant" to "He did not mean — he never said —" (lines 18) primarily achieves which effect?',
    options: [
      'It contradicts the rest of the poem and undermines its argument.',
      'It introduces what the poem must say for the father, who could not.',
      'It accuses the father of having lied throughout the poem.',
      'It signals that the poem is being narrated by someone other than the original speaker.',
    ],
    correctAnswer: 1,
    explanation: 'The structural turn moves from what the father meant (which the speaker has been reconstructing) to what he did not say. The unsaid thing — "the price / we paid… and a lifetime of not learning" — is the speaker\'s gift to a man who would not have spoken it.',
  },
  {
    topic: 'poetry-analysis',
    stimulus: POEM_2,
    question: 'In lines 19–20, the recurrence of the father\'s opening line ("twenty acres / and a lifetime of not learning the half of it") functions to',
    options: [
      'demonstrate that the poem has gone in a circle and reached no conclusion.',
      'transform a casual remark into the elegiac thesis of the poem itself.',
      'show that the speaker did not understand what his father said.',
      'reveal that the speaker plans to sell the land immediately.',
    ],
    correctAnswer: 1,
    explanation: 'A throwaway sentence at the start of the poem returns at the end as the poem\'s central claim: a lifetime is not enough. What was offhand becomes elegy.',
  },
  {
    topic: 'poetry-analysis',
    stimulus: POEM_2,
    question: 'Which best describes the poem\'s central concern?',
    options: [
      'The proper legal procedures for purchasing rural property.',
      'The inadequacy of human knowing and ownership in the face of a place\'s richness and depth of time.',
      'A celebration of modern mechanized agriculture.',
      'A practical guide to assessing twenty-acre parcels for purchase.',
    ],
    correctAnswer: 1,
    explanation: 'The poem repeatedly stages the field as something larger than its deed: deeper in time (the rocks, the planted pines), wider in residents (the deer), and more reciprocal in process (water and field). The speaker concludes by naming the cost of trying to know it at all.',
  },

  /* ---------------- PROSE 2: Mr. Pemberton (Q34–Q44) ---------------- */
  {
    topic: 'prose-analysis',
    stimulus: PROSE_2,
    question: 'The catalog of Mr. Pemberton\'s habits in sentence 2 (the fountain pen, the blotter, the brown ceramic cup) primarily characterizes him as',
    options: [
      'a man whose orderly habits have hardened into rituals over four decades.',
      'a careless employee who frequently misplaces office supplies.',
      'a recent hire still learning the routines of the firm.',
      'a man whose mental health is rapidly deteriorating.',
    ],
    correctAnswer: 0,
    explanation: 'Each item has a precise temporal regimen — the first Monday of the month, the first Monday of January, since 1898. These are not ordinary habits; they are observances. They take forty-one years to acquire.',
  },
  {
    topic: 'prose-analysis',
    stimulus: PROSE_2,
    question: 'The detail that the cup is "brought from home in 1898, which the office boy was instructed to wash but never to dry" (sentence 2) achieves which effect?',
    options: [
      'It documents an unsanitary office practice that would later cause illness.',
      'It captures, in a single eccentric instruction, the hyper-specific authority Mr. Pemberton has carved out for himself.',
      'It accuses Mr. Pemberton of mistreating the office boy.',
      'It is unrelated to the rest of the passage and contributes nothing.',
    ],
    correctAnswer: 1,
    explanation: 'The instruction is small, idiosyncratic, and deeply Pembertonian. The reader is invited to see, in this one detail, the entire shape of the man\'s domain.',
  },
  {
    topic: 'prose-analysis',
    stimulus: PROSE_2,
    question: 'The phrase "quietly held, never quite spoken" (sentence 3) primarily characterizes Mr. Pemberton\'s conviction as',
    options: [
      'an assertion he repeatedly broadcasts to his colleagues.',
      'a private belief that has never been tested against external reality.',
      'a religious doctrine to which he subscribes formally.',
      'a paranoid delusion that the firm\'s partners share.',
    ],
    correctAnswer: 1,
    explanation: 'The conviction is internal and unspoken. Because it has never been tested by absence, it has been free to grow without challenge — which sets up the painful test in sentences 4–6.',
  },
  {
    topic: 'prose-analysis',
    stimulus: PROSE_2,
    question: 'Mr. Pemberton\'s belief that "should he be absent for so much as a single morning, the partners would feel it as one feels a cold draft from a door left slightly ajar" (sentence 3) is best described as an example of',
    options: [
      'literal description of office air circulation.',
      'a self-flattering metaphor that the action of the passage will quietly disprove.',
      'a sober and accurate assessment of the firm\'s dependence on him.',
      'an allusion to a popular nineteenth-century novel.',
    ],
    correctAnswer: 1,
    explanation: 'The simile is grand and almost meteorological. The story\'s next four sentences will demonstrate, with cool precision, that no draft is felt — not even slightly. The metaphor exists in order to be undone.',
  },
  {
    topic: 'prose-analysis',
    stimulus: PROSE_2,
    question: 'The transition "On a Tuesday in November of 1928, Mr. Pemberton was absent." (sentence 4) achieves its effect primarily through',
    options: [
      'extravagant ornament that prepares the reader for melodrama.',
      'flat declarative brevity that pivots the passage from interior reflection to exterior event.',
      'extended figurative language that elaborates the sister\'s authority.',
      'a sudden shift to first-person narration.',
    ],
    correctAnswer: 1,
    explanation: 'After the looping, qualifying sentences of paragraph 1, the bare statement lands like a switch flipping. The narrator becomes briefly factual; the action of the story has begun.',
  },
  {
    topic: 'prose-analysis',
    stimulus: PROSE_2,
    question: 'The detail of "three telegrams, the last of which informed Mr. Greaves the younger of the necessity" (sentence 5) primarily contributes',
    options: [
      'a comic suggestion of disproportion between Mr. Pemberton\'s self-image and the actual fuss made.',
      'a tragic note that emphasizes the seriousness of Mr. Pemberton\'s illness.',
      'an irrelevant aside about postal services in 1928.',
      'evidence that Mr. Pemberton was on the verge of death.',
    ],
    correctAnswer: 0,
    explanation: 'Three telegrams for an ordinary cold is funny — the sister\'s anxiety, perhaps, or the household\'s self-importance. The detail also licenses Greaves\'s eventual mild and indifferent response: the world had been made aware.',
  },
  {
    topic: 'prose-analysis',
    stimulus: PROSE_2,
    question: 'The slowed, pausing pace of "The morning passed, and then the afternoon" (sentence 6) primarily contributes',
    options: [
      'dramatic suspense as the firm awaits an emergency.',
      'a quiet enactment, in syntax, of an ordinary day continuing without disturbance.',
      'a sudden change in narrative point of view.',
      'a comic exaggeration of the length of the workday.',
    ],
    correctAnswer: 1,
    explanation: 'The two clauses move time forward without incident. The very ordinariness of that movement — morning, afternoon, half past four — is the cruelty: nothing in the firm has registered Mr. Pemberton\'s absence.',
  },
  {
    topic: 'prose-analysis',
    stimulus: PROSE_2,
    question: 'Mr. Greaves the younger\'s noticing that "the empty desk in the back office looked very tidy, very tidy indeed" (sentence 6) primarily achieves which effect?',
    options: [
      'It establishes that Mr. Greaves is a meticulous and observant employer.',
      'It registers, with devastating mildness, that the absence is felt as relief rather than as loss.',
      'It introduces a plot of theft involving the empty desk.',
      'It demonstrates that Mr. Greaves is too distracted to register Mr. Pemberton\'s absence at all.',
    ],
    correctAnswer: 1,
    explanation: 'The repetition "very tidy, very tidy indeed" hovers around an unsayable thing. Greaves does not say "Pemberton is gone, what a relief"; he says, "how clean the room is." That displacement is the heart of the irony.',
  },
  {
    topic: 'prose-analysis',
    stimulus: PROSE_2,
    question: 'The phrase "thought, but did not quite say" (sentence 6) reveals that Mr. Greaves',
    options: [
      'is afraid of being overheard by Mr. Pemberton.',
      'is partly aware of the unkindness of his own pleasure and prefers not to articulate it.',
      'has lost the ability to speak after a recent illness.',
      'is rehearsing a speech he plans to deliver later.',
    ],
    correctAnswer: 1,
    explanation: 'The qualification is precise: he thinks the thought; he does not quite say it. Greaves preserves his decency by leaving the pleasure unspoken — a small act of restraint that nonetheless does not contradict the pleasure itself.',
  },
  {
    topic: 'prose-analysis',
    stimulus: PROSE_2,
    question: 'The structural relationship between the first paragraph (Mr. Pemberton\'s self-conception) and the second (his actual absence) is best described as',
    options: [
      'continuous reinforcement, in which the second paragraph confirms the first.',
      'ironic refutation, in which the action of the second paragraph quietly undoes the claims of the first.',
      'narrative non sequitur, in which the two paragraphs concern unrelated subjects.',
      'temporal flashback, in which the second paragraph precedes the first chronologically.',
    ],
    correctAnswer: 1,
    explanation: 'Paragraph 1: Pemberton believes the firm cannot function without him. Paragraph 2: the firm functions, and his absence is mistaken for a clean room. The structure is the irony.',
  },
  {
    topic: 'prose-analysis',
    stimulus: PROSE_2,
    question: 'The narrator\'s tone toward Mr. Pemberton can best be described as',
    options: [
      'openly contemptuous.',
      'sentimental and adoring.',
      'ironic but not unkind, mixing sympathy with quiet exposure.',
      'detached and entirely without judgment.',
    ],
    correctAnswer: 2,
    explanation: 'The narrator catalogs Pemberton\'s rituals with affection and exposes his self-delusion without cruelty. The result is a familiar mode in literary fiction: tenderness and irony co-existing in the same sentences.',
  },

  /* ---------------- DRAMA: Ella & Martin (Q45–Q55) ---------------- */
  {
    topic: 'drama-analysis',
    stimulus: DRAMA_1,
    question: 'The opening stage direction that Martin sits "with the lights off and a cup of cold tea in front of him" primarily characterizes him as',
    options: [
      'a man who has fallen asleep waiting for his daughter.',
      'a man who has been waiting for some time, in a stillness that is not quite peaceful.',
      'a man who is hiding from an intruder in the house.',
      'a man practicing meditation as part of a daily routine.',
    ],
    correctAnswer: 1,
    explanation: 'The lights are off, the tea has gone cold — both details register duration and a kind of static patience. Martin has been there for a while, and the stillness is loaded.',
  },
  {
    topic: 'drama-analysis',
    stimulus: DRAMA_1,
    question: 'Ella\'s choice to switch on "the lamp; not the overhead" (line 2) functions primarily to',
    options: [
      'indicate that the overhead light is broken.',
      'reveal Ella\'s wish to soften the encounter and not expose her father (or herself) under bright light.',
      'demonstrate that Ella is afraid of waking her mother upstairs.',
      'criticize the wiring of the kitchen.',
    ],
    correctAnswer: 1,
    explanation: 'The choice is a small act of staging. A lamp is intimate; an overhead is interrogative. Ella is not yet ready for the harder light.',
  },
  {
    topic: 'drama-analysis',
    stimulus: DRAMA_1,
    question: 'Martin\'s remark "Your mother used to wait up" (line 3) most strongly suggests',
    options: [
      'that he is criticizing Ella for not having a mother around to greet her.',
      'that he is identifying with the role his wife once played and gesturing at his own grief.',
      'that he is warning Ella about a strict household curfew.',
      'that he is reminding Ella to telephone her mother in the morning.',
    ],
    correctAnswer: 1,
    explanation: 'The wife is gone (the past-tense "used to"). Martin is, in some sense, taking up her vigil — and the line is his quiet way of admitting both her absence and his own inheritance of the wait.',
  },
  {
    topic: 'drama-analysis',
    stimulus: DRAMA_1,
    question: 'The stage direction in line 5 — Ella putting down her bag "very carefully, as though the bag contained something breakable" — primarily contributes which effect?',
    options: [
      'It signals that the bag literally contains expensive china.',
      'It externalizes Ella\'s interior tension before any dialogue reveals it.',
      'It introduces a comic prop that will be used in a later scene.',
      'It demonstrates that Ella is exhausted from carrying heavy items all day.',
    ],
    correctAnswer: 1,
    explanation: 'The bag is a stand-in for what Ella is about to say. The careful gesture is a piece of physical preparation: she is bracing herself, and the action lets the audience see the bracing before she speaks.',
  },
  {
    topic: 'drama-analysis',
    stimulus: DRAMA_1,
    question: 'Martin\'s offer of cold tea and his refusal of fresh tea (lines 6–10) primarily characterize him as',
    options: [
      'a fastidious man who refuses anything not prepared exactly to his liking.',
      'a man whose small refusals reveal a quiet, intransigent withdrawal from ordinary care.',
      'a person suffering from a digestive condition that makes hot drinks unpleasant.',
      'a man who is testing his daughter\'s patience for theatrical purposes.',
    ],
    correctAnswer: 1,
    explanation: 'He made tea hours ago; he will not let her make more, because he\'d "only forget about it." The exchange is small, sad, and quietly self-defeating — a portrait of withdrawal.',
  },
  {
    topic: 'drama-analysis',
    stimulus: DRAMA_1,
    question: 'Ella\'s decision to sit down "across from him" while not removing her coat (line 11) primarily suggests',
    options: [
      'that she is uncomfortably cold in the kitchen.',
      'that she has not committed fully to the visit and may flee at any moment.',
      'that she is preparing to leave for another restaurant immediately.',
      'that she has forgotten how to remove her coat.',
    ],
    correctAnswer: 1,
    explanation: 'The coat is a stage signal. Removing it would mean settling in; keeping it on means the encounter is provisional. Ella is half-committed — already braced for retreat.',
  },
  {
    topic: 'drama-analysis',
    stimulus: DRAMA_1,
    question: 'Ella\'s announcement "I\'ve sold the restaurant" (line 14) functions in the scene primarily as',
    options: [
      'a casual aside that the audience need not take seriously.',
      'the climactic disclosure toward which the entire scene\'s small business has been moving.',
      'a comic punchline that releases the scene\'s tension into laughter.',
      'an unrelated piece of news that Martin has no reason to find significant.',
    ],
    correctAnswer: 1,
    explanation: 'Every preceding gesture — the bag, the coat, the request to make new tea — has been preparation for one piece of news. The line is the scene\'s structural pivot.',
  },
  {
    topic: 'drama-analysis',
    stimulus: DRAMA_1,
    question: 'Martin\'s small action in line 15 — picking up the cold tea and "set[ting] it down again, in a very slightly different place on the table" — primarily achieves which effect?',
    options: [
      'It shows that Martin is preparing to drink the tea after all.',
      'It conveys, through a precisely useless gesture, the seismic interior shift that Martin will not allow himself to express in words.',
      'It signals that Martin is going to throw the tea at Ella.',
      'It reveals that the table is unsteady and the cup needed to be moved for safety.',
    ],
    correctAnswer: 1,
    explanation: 'The gesture is exact: not drunk, not pushed away, just moved a fraction. It is the body refusing to be still and refusing, also, to declare anything. Stagecraft of suppressed feeling at its most precise.',
  },
  {
    topic: 'drama-analysis',
    stimulus: DRAMA_1,
    question: 'Martin\'s reply "Well. That\'s a piece of news." (line 16) is best characterized as',
    options: [
      'an enthusiastic and unguarded expression of delight at his daughter\'s decision.',
      'a deliberately flat phrase that withholds judgment in order to avoid giving offense — or relief.',
      'a sincere request for more details about the financial transaction.',
      'a confused statement indicating that Martin has misunderstood the announcement.',
    ],
    correctAnswer: 1,
    explanation: 'The phrase "a piece of news" is one of the language\'s most neutral receptacles. It refuses to register either pleasure or pain. That refusal is itself the character.',
  },
  {
    topic: 'drama-analysis',
    stimulus: DRAMA_1,
    question: 'Ella\'s accusation in line 19 ("you decided years ago that the less you knew, the less you\'d have to disapprove of") and Martin\'s reply in line 20 ("Or the less I\'d have to lose") together reveal that',
    options: [
      'father and daughter have entirely opposite interpretations of the same long pattern of distance.',
      'each interprets the same long pattern through a different and equally true emotional lens — disapproval, fear of loss.',
      'Ella is correct and Martin is lying about his motives.',
      'Martin has never noticed Ella\'s career until tonight.',
    ],
    correctAnswer: 1,
    explanation: 'Ella reads silence as judgment. Martin reads silence as protection — he kept distance to keep her. The exchange does not resolve which reading is correct; it suggests both can be true at once, which is why the scene ends where it does.',
  },
  {
    topic: 'drama-analysis',
    stimulus: DRAMA_1,
    question: 'Which best describes a central concern of the scene as a whole?',
    options: [
      'The financial logistics of selling a small business.',
      'The way two people can love each other and nonetheless construct a relationship out of small, accumulated withholdings.',
      'A satirical attack on the restaurant industry.',
      'A supernatural visitation experienced by an aging widower.',
    ],
    correctAnswer: 1,
    explanation: 'The scene is built almost entirely out of small refusals — the overhead light, the fresh tea, the coat, the moved cup, the unasked question. Father and daughter clearly love each other; the scene is the architecture of how they have agreed not to say so.',
  },
]
