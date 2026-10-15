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
    type: 'mcq',
    topic: 'poetry-analysis',
    stimulus: POEM_1,
    question: 'The kettle\'s song is described in line 2 as "a thin domestic music," a phrase that primarily characterizes the sound as',
    options: [
      'shrill and grating, a noise that disturbs the quiet of the house.',
      'faint and ordinary, a sound that belongs to the household.',
      'solemn and devotional, a sound that turns the kitchen into a church.',
      'lilting and cheerful, a sound that lifts the mood of the evening.',
    ],
    correctAnswer: 1,
    explanation: '"Thin" suggests slightness and "domestic" places the music in the home, so the phrase presents a small, everyday household sound. The devotional reading borrows from "hymn" in line 3, but line 2 itself stresses modesty, and the hymn is only "half" of the sound.',
  },
  {
    type: 'mcq',
    topic: 'poetry-analysis',
    stimulus: POEM_1,
    question: 'The juxtaposition of "complaint" and "hymn" in lines 2–3 functions to',
    options: [
      'suggest that the speaker finds domestic chores tedious and spiritually empty.',
      'capture the mixed register of a sound at once fretful and consoling.',
      'establish that the speaker prefers sacred music to the noise of daily life.',
      'show that the kettle\'s sound grows more pleasant as the water nears a boil.',
    ],
    correctAnswer: 1,
    explanation: 'The kettle is "half complaint, / half something like a hymn": the pairing holds a fretful whistle and a soothing, almost devotional quality in a single sound. Nothing in the lines describes a change over time, so reading the pair as a progression toward a pleasant boil imposes a sequence the poem does not give.',
  },
  {
    type: 'mcq',
    topic: 'poetry-analysis',
    stimulus: POEM_1,
    question: 'In stanza 2 (lines 5–8), the contrast between "Outside" and "inside" primarily serves to',
    options: [
      'contrast the speaker\'s restless mood with the calm of the snowy porch outside.',
      'set the sheltered warmth of the room against the cold and emptied world beyond it.',
      'suggest that winter has begun to invade the house the mother once kept warm.',
      'show the speaker\'s longing to leave the house and rejoin the world outside.',
    ],
    correctAnswer: 1,
    explanation: 'Outside are settled snow and a wire the birds have left; inside are a fire and a dozing cat. The contrast frames the house as a small shelter of warmth against a cold, emptied world. The lines never show the cold entering the house, so the reading of winter invading the home is unsupported.',
  },
  {
    type: 'mcq',
    topic: 'poetry-analysis',
    stimulus: POEM_1,
    question: 'The description of the wire as the one "the line birds left an hour or so ago" (line 7) primarily',
    options: [
      'adds a precise detail of recent departure that anticipates a larger absence.',
      'presents the birds as a symbol of the mother\'s soul rising away after her death.',
      'establishes that the speaker has been standing at the window for an hour.',
      'emphasizes the bleakness of winter, which the speaker blames for her grief.',
    ],
    correctAnswer: 0,
    explanation: 'The offhand, exact time ("an hour or so ago") records a space only recently emptied, which quietly prepares the poem\'s central absence, the mother who "is gone." Reading the birds as the mother\'s rising soul overstates a small observational detail into an allegory the poem never builds.',
  },
  {
    type: 'mcq',
    topic: 'poetry-analysis',
    stimulus: POEM_1,
    question: 'In stanza 3 (lines 9–12), the speaker presents the mother\'s preparation of the kettle as',
    options: [
      'a burdensome chore she performed out of duty to the family.',
      'a small, repeated gesture she performed as a private rite.',
      'a careful lesson she taught to the child who watched her work.',
      'a fussy habit that puzzled the speaker as a young child.',
    ],
    correctAnswer: 1,
    explanation: '"The same small motion every year" and "as though she did / some sacred thing" turn a household act into a quiet ritual. The stanza never mentions teaching or a watching child, so the reading of the act as a lesson adds something the lines do not say.',
  },
  {
    type: 'mcq',
    topic: 'poetry-analysis',
    stimulus: POEM_1,
    question: 'The phrase "the world need not know here" (line 12) suggests that the mother\'s ritual is',
    options: [
      'meaningful in itself, its value not dependent on anyone else\'s notice.',
      'a secret the mother kept from her family out of embarrassment.',
      'too humble to deserve remembrance once the mother had died.',
      'an obligation the mother resented but would not admit openly.',
    ],
    correctAnswer: 0,
    explanation: 'The act is "sacred" to the mother, yet it needs no audience: its worth does not depend on being seen. The secrecy reading confuses privacy with concealment, and the poem attaches no shame to the act, which the speaker now repeats.',
  },
  {
    type: 'mcq',
    topic: 'poetry-analysis',
    stimulus: POEM_1,
    question: 'The phrase "I do it now, alone" (line 13) primarily achieves which effect?',
    options: [
      'It moves the poem from a remembered past into the speaker\'s present repetition of the act.',
      'It reveals that the speaker has only now, after the death, learned to use the kettle at all.',
      'It turns the poem from praise of the mother toward a complaint about the speaker\'s isolation.',
      'It signals the speaker\'s resolve to give up the ritual now that no one is left to share it.',
    ],
    correctAnswer: 0,
    explanation: 'Stanza 3 recalls the mother at the kettle; line 13 brings the speaker into the present, performing the same act. "Alone" registers loneliness, but the stanza goes on to dwell on what remains rather than to complain, so the poem does not turn into a lament about isolation.',
  },
  {
    type: 'mcq',
    topic: 'poetry-analysis',
    stimulus: POEM_1,
    question: 'The paradox in lines 13–14 ("how much, in losing her, I haven\'t lost") is best understood as the speaker\'s recognition that',
    options: [
      'grief for the mother has faded faster than the speaker expected.',
      'the mother\'s habits survive in the speaker\'s own daily life.',
      'the speaker never truly understood the mother while she lived.',
      'the objects in the house matter more than the mother herself did.',
    ],
    correctAnswer: 1,
    explanation: 'The speaker lists what remains: "the kettle, and the pouring, and the change / of season," so the mother\'s patterns persist in the speaker\'s life. The reading that grief has faded is undone by the closing "and the cost," which insists that the loss still weighs.',
  },
  {
    type: 'mcq',
    topic: 'poetry-analysis',
    stimulus: POEM_1,
    question: 'The poem\'s closing phrase, "and the cost" (line 16), introduces a turn that suggests',
    options: [
      'a quiet triumph over loss, now that the ritual has been fully mastered.',
      'a practical worry about keeping up the house the mother has left behind.',
      'an admission that what endures does not cancel the grief of what was lost.',
      'a sudden bitterness toward the mother for leaving the speaker so alone.',
    ],
    correctAnswer: 2,
    explanation: 'The dash before the phrase pulls the catalog of preserved things up short: after naming what remains, the poem admits what was paid. The tone is sober rather than bitter; nothing in the poem blames the mother, whose ritual the speaker lovingly continues.',
  },
  {
    type: 'mcq',
    topic: 'poetry-analysis',
    stimulus: POEM_1,
    question: 'The poem\'s rhyme scheme (ABAB in every stanza) most strongly contributes to which effect?',
    options: [
      'It creates a singsong lightness that undercuts the poem\'s grief.',
      'It mimics the uneven bubbling of water as it boils in the kettle.',
      'It enacts in form the steady recurrence the poem describes.',
      'It seals each stanza off as a separate, self-contained memory.',
    ],
    correctAnswer: 2,
    explanation: 'The poem\'s subject is recurrence: the same kettle, the same motion "every year." A regular, repeating rhyme lets the form mirror that ritual. The scheme is steady rather than uneven, and the enjambment across stanzas 1–2 ("faint, / that holds a house together") shows the stanzas are not sealed off from one another.',
  },
  {
    type: 'mcq',
    topic: 'poetry-analysis',
    stimulus: POEM_1,
    question: 'The poem as a whole is best characterized as',
    options: [
      'an elegy that mourns the mother while rejecting the rituals she kept.',
      'a meditation on how inheritance holds loss and continuity together.',
      'a nostalgic celebration of a domestic past that grief has not touched.',
      'a lament for a way of life that ended with the mother\'s generation.',
    ],
    correctAnswer: 1,
    explanation: 'The mother is gone, yet the kettle still sings and the speaker still pours; the poem holds both truths at once. The lament reading fails because the way of life has not ended: the speaker carries it on in the present tense.',
  },

  /* ---------------- PROSE 1: Mrs. Hadley (Q12–Q22) ---------------- */
  {
    type: 'mcq',
    topic: 'prose-analysis',
    stimulus: PROSE_1,
    question: 'The opening detail that Mrs. Hadley arrived "at six minutes past seven, which was, by the standards of the Ladies\' Aid, a small scandal" (sentence 1) primarily serves to',
    options: [
      'convey the group\'s exacting codes of conduct with gentle irony.',
      'establish that Mrs. Hadley is habitually late and widely disliked.',
      'suggest that the Aid is about to discipline one of its own members.',
      'present the narrator\'s own disapproval of Mrs. Hadley\'s carelessness.',
    ],
    correctAnswer: 0,
    explanation: 'Calling a six-minute delay "a small scandal" and qualifying it "by the standards of the Ladies\' Aid" shows the narrator\'s wry distance from the group\'s strict codes. Nothing suggests the lateness is habitual; the scene treats it as a rare lapse that the room notices precisely because it is unusual.',
  },
  {
    type: 'mcq',
    topic: 'prose-analysis',
    stimulus: PROSE_1,
    question: 'The long second sentence, in which Mrs. Hadley pauses on the sidewalk, primarily characterizes her as',
    options: [
      'a widow who has grown indifferent to the meetings of the Ladies\' Aid.',
      'a woman whom age and loss have not freed from a child\'s bewilderment.',
      'an elderly woman whose memory is beginning to fail her in public.',
      'a devout woman who finds spiritual comfort in the March landscape.',
    ],
    correctAnswer: 1,
    explanation: 'Despite being sixty-three and having "buried a husband and two sisters," she feels "like a child who has been sent on an errand and forgotten what for." The simile describes an emotional disorientation, not memory loss: she knows exactly where she is going and why.',
  },
  {
    type: 'mcq',
    topic: 'prose-analysis',
    stimulus: PROSE_1,
    question: 'The phrase "a sky the color of weak tea" (sentence 2) is best described as',
    options: [
      'a prediction of the rain that will soon fall on the evening\'s meeting.',
      'a symbol of the bitterness Mrs. Hadley feels toward the women of the Aid.',
      'an image that renders the natural world in the drab, domestic terms of the women\'s lives.',
      'an instance of the narrator mocking Mrs. Hadley\'s plain and homely tastes.',
    ],
    correctAnswer: 2,
    explanation: 'Describing the sky through a pale household drink frames even the heavens in the domestic vocabulary of church basements and teacups, and "weak" adds a drabness that suits the March evening. The bitterness reading misses that the image is muted and that Mrs. Hadley shows no hostility toward the Aid.',
  },
  {
    type: 'mcq',
    topic: 'prose-analysis',
    stimulus: PROSE_1,
    question: 'The description of the women in sentence 3 ("their hats in their laps, their hands folded over their hats") functions primarily to',
    options: [
      'convey through parallel, static detail the meeting\'s rigid decorum.',
      'suggest the women\'s impatience and their eagerness to leave the basement.',
      'mock the women\'s old-fashioned clothing through comic exaggeration.',
      'show the women\'s reverence for the church in which the meeting is held.',
    ],
    correctAnswer: 0,
    explanation: 'The repeated possessives and matching gestures present the women as identically arranged and motionless, a small choreography of order. The tone is wry, but the detail exaggerates nothing about their clothing; its target is the group\'s uniform composure.',
  },
  {
    type: 'mcq',
    topic: 'prose-analysis',
    stimulus: PROSE_1,
    question: 'Margaret Atwell\'s remark "We had begun to wonder, Edith" (sentence 4) is most accurately characterized as',
    options: [
      'a sincere expression of worry that something had happened to Mrs. Hadley.',
      'a direct rebuke meant to humiliate Mrs. Hadley before the other women.',
      'a joking remark intended to put the late arrival at ease among friends.',
      'a courteous remark that nonetheless registers a note of public reproach.',
    ],
    correctAnswer: 3,
    explanation: 'The narrator glosses the remark at once: "She did not say it unkindly," yet the room\'s temperature drops "half a degree." The words are polite while the effect is a mild censure. Reading it as a direct rebuke ignores the narrator\'s insistence on its mildness.',
  },
  {
    type: 'mcq',
    topic: 'prose-analysis',
    stimulus: PROSE_1,
    question: 'The sentence "She did not say it unkindly" (sentence 5) matters to the passage chiefly because it',
    options: [
      'proves that Mrs. Hadley has misread a remark that carried no criticism.',
      'separates the courtesy of Margaret\'s tone from the judgment it carries.',
      'reveals that the narrator regards Margaret as the story\'s true heroine.',
      'signals that Margaret privately sympathizes with Mrs. Hadley\'s lateness.',
    ],
    correctAnswer: 1,
    explanation: 'The sentence concedes that the manner was not unkind, while the next sentence shows the remark still chilled the room; civility and censure coexist. The misreading option fails because the narrator confirms the chill rather than dismissing it as Mrs. Hadley\'s mistake.',
  },
  {
    type: 'mcq',
    topic: 'prose-analysis',
    stimulus: PROSE_1,
    question: 'The image of the room\'s temperature adjusting "by perhaps half a degree" (sentence 6) primarily serves to',
    options: [
      'contrast the warmth of the meeting with the cold March wind outside.',
      'render a subtle social chill in precise, almost scientific language.',
      'mark the moment at which Mrs. Hadley resolves to confront Margaret.',
      'show that the women resent Mrs. Hadley\'s friendship with Margaret.',
    ],
    correctAnswer: 1,
    explanation: 'Measured terms ("half a degree," "barometric reading") describe an atmosphere so faint that no one would name it, though Mrs. Hadley feels it exactly. The temperature is figurative, so the reading that sets it against the literal wind outside mistakes a social chill for weather.',
  },
  {
    type: 'mcq',
    topic: 'prose-analysis',
    stimulus: PROSE_1,
    question: 'Mrs. Hadley\'s statement "I missed the seven o\'clock" (sentence 7), which the narrator notes "was not quite true," primarily reveals that',
    options: [
      'she offers an acceptable excuse in place of her more private real reason.',
      'she is too embarrassed by a lapse of memory to admit she forgot the time.',
      'she habitually lies to the Aid and expects her lies to be quietly forgiven.',
      'she hopes to provoke Margaret into questioning her in front of the group.',
    ],
    correctAnswer: 0,
    explanation: 'Her real reason, standing on the sidewalk looking at the sky, is too private and strange to offer, so she gives a conventional excuse that Margaret accepts. She did not forget the time; the passage shows her pausing deliberately, and nothing suggests lying is a habit.',
  },
  {
    type: 'mcq',
    topic: 'prose-analysis',
    stimulus: PROSE_1,
    question: 'The narrative perspective of the passage is best described as',
    options: [
      'a third-person narrator who enters the private thoughts of every woman present.',
      'a first-person narrator, one of the women of the Aid, recalling the evening.',
      'an objective narrator who records only what the characters say and visibly do.',
      'a third-person narrator close to Mrs. Hadley\'s feelings who adds wry commentary.',
    ],
    correctAnswer: 3,
    explanation: 'The narrator reports Mrs. Hadley\'s inner sensations (the child on an errand, the half-degree chill) and adds commentary such as "which was not quite true." Margaret is seen only from outside ("as if this had been the answer she expected"), so the narration does not enter every woman\'s mind.',
  },
  {
    type: 'mcq',
    topic: 'prose-analysis',
    stimulus: PROSE_1,
    question: 'The passage\'s final action, Margaret turning back to "the minutes of the previous meeting" (sentence 8), primarily contributes which effect?',
    options: [
      'It shows that Margaret has privately dismissed the excuse as a transparent lie.',
      'It restores the evening\'s routine, absorbing the disruption without comment.',
      'It suggests Margaret is too absorbed in procedure to notice anyone.',
      'It signals that the Aid will formally discipline Mrs. Hadley later.',
    ],
    correctAnswer: 1,
    explanation: 'Returning to the minutes signals that the small disturbance is over and need not be recorded; order resumes. Margaret nods "as if this had been the answer she expected," which shows acceptance of the excuse rather than open disbelief.',
  },
  {
    type: 'mcq',
    topic: 'prose-analysis',
    stimulus: PROSE_1,
    question: 'Which best describes a central concern of the passage as a whole?',
    options: [
      'The quiet codes that let a community mark belonging and its cost.',
      'The loneliness of widowhood in a town that ignores its older women.',
      'The hypocrisy of churchwomen who preach kindness but practice cruelty.',
      'The conflict between personal freedom and the duties of religious faith.',
    ],
    correctAnswer: 0,
    explanation: 'Six minutes\' lateness, a half-degree chill, a courteous reproach and a small accepted lie together map how a group signals where its lines are. The hypocrisy reading overstates the tone: no one is cruel, and the narrator stresses that Margaret "did not say it unkindly."',
  },

  /* ---------------- POEM 2 (Q23–Q33) ---------------- */
  {
    type: 'mcq',
    topic: 'poetry-analysis',
    stimulus: POEM_2,
    question: 'The father\'s observation in lines 3–4 ("a man could spend his life / on twenty acres and not learn the half of it") establishes which central idea?',
    options: [
      'The land holds more than a lifetime of attention can ever grasp.',
      'Twenty acres is too small a parcel to support a working family.',
      'Owning land is a burden that will consume a man\'s whole working life.',
      'A farmer must study his fields for years before they turn a profit.',
    ],
    correctAnswer: 0,
    explanation: 'The remark claims that even a small field exceeds what one life can know, and the rest of the poem fills in what the father meant: the trees, water, rocks and deer. The "burden" reading misses that the poem treats this inexhaustibility with wonder rather than complaint.',
  },
  {
    type: 'mcq',
    topic: 'poetry-analysis',
    stimulus: POEM_2,
    question: 'The repeated phrase "He meant" (lines 5, 11, 13) primarily functions to',
    options: [
      'suggest that the father\'s words were vague enough to mean almost anything at all.',
      'emphasize the father\'s authority as the one who defines what the land is.',
      'build the speaker\'s reconstruction of the father\'s meaning one detail at a time.',
      'show that the speaker doubts whether the father understood his own remark.',
    ],
    correctAnswer: 2,
    explanation: 'The anaphora gathers specific things (the oak, the pines, the water, the rocks, the deer) into an inventory that unpacks one brief remark. The details are concrete and consistent, so the repetition clarifies the father\'s meaning rather than presenting it as vague.',
  },
  {
    type: 'mcq',
    topic: 'poetry-analysis',
    stimulus: POEM_2,
    question: 'The image of the oak that "had been struck by lightning twice / and split, and gone on living" (lines 6–7) functions primarily as',
    options: [
      'a sign of nature\'s violence, which the family must now learn to fear.',
      'an emblem of endurance through damage that resonates beyond the tree itself.',
      'a reminder that the land was damaged and worth less than they paid.',
      'an omen of the father\'s death, which the closing lines go on to reveal.',
    ],
    correctAnswer: 1,
    explanation: 'Split twice yet still living, the oak suggests a persistence that resonates with the human lives the poem traces across generations. The final lines concern what the father "never said," not his death, so the omen reading finds an event the poem never mentions.',
  },
  {
    type: 'mcq',
    topic: 'poetry-analysis',
    stimulus: POEM_2,
    question: 'The repetition "someone\'s father, someone\'s / father had set out in 1910 perhaps" (lines 8–9) achieves which effect?',
    options: [
      'It reveals that the speaker cannot recall which of his own ancestors planted the pines.',
      'It enacts in a halting stammer how far back into the past the generations reach.',
      'It conveys the speaker\'s resentment of the earlier owners who shaped the land.',
      'It creates a halting rhythm that mirrors the father\'s difficulty in speaking.',
    ],
    correctAnswer: 1,
    explanation: 'The stutter across a line and stanza break pulls the reader back through unnamed generations, measuring the depth of time in the land. "Someone\'s" marks the planters as strangers, not the speaker\'s own forebears, so the poem is not about a lapse in family memory.',
  },
  {
    type: 'mcq',
    topic: 'poetry-analysis',
    stimulus: POEM_2,
    question: 'The series of motives "for windbreak, for the future, for the sound" (line 10) is best described as',
    options: [
      'a set of competing motives that exposes the planters\' confusion about their aims.',
      'a progression from practical use to long-term hope to almost aesthetic pleasure.',
      'a descent from serious reasons to trivial ones that mocks the planters\' foresight.',
      'a list of practical benefits that the father hopes to gain from the purchase.',
    ],
    correctAnswer: 1,
    explanation: 'The list widens from immediate utility (windbreak) to posterity (the future) to a purely sensory good (the sound of wind in pines). The last item caps the series with something valued for its own sake, which is why reading it as a mocking slide into triviality misjudges the tone.',
  },
  {
    type: 'mcq',
    topic: 'poetry-analysis',
    stimulus: POEM_2,
    question: 'The chiasmus in lines 11–13 ("the way the field ran down to water, / and how the water… ran back into the field") primarily emphasizes',
    options: [
      'the threat of flooding that makes the field a poor and risky investment.',
      'the father\'s careful study of drainage before deciding to buy the land.',
      'the reciprocal, cyclical movement of natural forces that no deed can fix in place.',
      'the steady erosion by which the rising water is slowly claiming the field.',
    ],
    correctAnswer: 2,
    explanation: 'The mirrored order (field to water, water to field) enacts an exchange that runs both ways, a process no property line can hold still. The flooding reading treats as a hazard what the poem presents as one more thing the father "meant" with wonder.',
  },
  {
    type: 'mcq',
    topic: 'poetry-analysis',
    stimulus: POEM_2,
    question: 'The lines "the rocks, / which had been there, of course, before the field, / and would be there, of course, after" (lines 13–15) primarily contribute',
    options: [
      'a sense of deep time that shrinks the field to a brief human frame.',
      'a practical complaint that the rocky field will be hard to farm.',
      'a reminder of the labor the family must spend clearing the land.',
      'an image of the father\'s stubbornness, as fixed as stone itself.',
    ],
    correctAnswer: 0,
    explanation: 'The rocks precede and will outlast "the field," a human category, so the poem widens its timescale until ownership looks brief. The lines mention no farming or clearing, and the casual "of course" sounds like acceptance rather than complaint.',
  },
  {
    type: 'mcq',
    topic: 'poetry-analysis',
    stimulus: POEM_2,
    question: 'The deer "that crossed it, morning and at fall of light, / without consulting any of the deeds" (lines 16–17) function primarily to',
    options: [
      'complain that wild animals trespass freely on property the family has bought.',
      'note wryly that a deed means nothing to the field\'s other residents.',
      'warn that the deer will damage any crops the family tries to plant.',
      'contrast the deer\'s freedom with the speaker\'s sense of being trapped by debt.',
    ],
    correctAnswer: 1,
    explanation: 'Imagining deer that might "consult" deeds is gently comic, and the joke punctures the importance of legal title. The tone is amused rather than aggrieved, so the trespass reading takes literally what the poem offers as wit.',
  },
  {
    type: 'mcq',
    topic: 'poetry-analysis',
    stimulus: POEM_2,
    question: 'The shift in line 18 from "He meant" to "He did not mean — he never said —" primarily achieves which effect?',
    options: [
      'It reveals that the speaker has misunderstood the father\'s remark from the start.',
      'It turns from reconstructing the father\'s meaning to voicing what he left unsaid.',
      'It undercuts the father\'s wonder by exposing it as a cover for his greed.',
      'It hands the poem\'s voice from the speaker to the father, who now speaks.',
    ],
    correctAnswer: 1,
    explanation: 'After four stanzas of "He meant," the poem names what the father did not say: the price paid and the lifetime of not knowing. The speaker does not retract the earlier reconstruction; the turn adds what was left out rather than correcting a misunderstanding.',
  },
  {
    type: 'mcq',
    topic: 'poetry-analysis',
    stimulus: POEM_2,
    question: 'In lines 19–20, the return of the father\'s words ("twenty acres / and a lifetime of not learning the half of it") functions to',
    options: [
      'show that the father\'s claim about the land has been proved wrong.',
      'transform a casual remark into the poem\'s weighty conclusion.',
      'suggest that the speaker has come to regret buying the field.',
      'suggest that the speaker now finds the father\'s wonder naive.',
    ],
    correctAnswer: 1,
    explanation: 'An offhand sentence from line 4 returns as the poem\'s closing claim, now weighted with loss: the lifetime is itself part of what was paid. "The price we paid" admits a cost, but the line folds the lifetime of not knowing into what was bought, so the ending deepens the father\'s wonder rather than regretting the purchase.',
  },
  {
    type: 'mcq',
    topic: 'poetry-analysis',
    stimulus: POEM_2,
    question: 'Which best describes the poem\'s central concern?',
    options: [
      'The conflict between a father\'s practical values and a child\'s idealism.',
      'The grief of a speaker whose family has lost the land it once farmed.',
      'The limits of human knowing and ownership before a place\'s depth of time.',
      'The economic hardship that owning land imposes on small rural families.',
    ],
    correctAnswer: 2,
    explanation: 'The poem repeatedly shows the field exceeding its deed: deeper in time (the rocks, the pines), wider in residents (the deer), and moving in ways no owner controls (the water). The family has just bought the land rather than lost it, which rules out the reading of dispossession.',
  },

  /* ---------------- PROSE 2: Mr. Pemberton (Q34–Q44) ---------------- */
  {
    type: 'mcq',
    topic: 'prose-analysis',
    stimulus: PROSE_2,
    question: 'The catalog of Mr. Pemberton\'s possessions in sentence 2 (the fountain pen, the blotter, the brown ceramic cup) primarily characterizes him as',
    options: [
      'a man whose orderly habits have hardened over decades into rituals.',
      'a thrifty clerk who refuses to waste even the smallest office supplies.',
      'an anxious man whose fear of change is isolating him from his colleagues.',
      'a proud man who uses his personal possessions to display his seniority.',
    ],
    correctAnswer: 0,
    explanation: 'Each object has a fixed schedule (the first Monday of each month, of each January, a cup kept since 1898), turning habit into observance. Thrift is not the point: he replaces the blotter on schedule whether or not it is worn, which shows ritual rather than economy.',
  },
  {
    type: 'mcq',
    topic: 'prose-analysis',
    stimulus: PROSE_2,
    question: 'The detail that the office boy was "instructed to wash but never to dry" the cup (sentence 2) achieves which effect?',
    options: [
      'It reveals his distrust of the office boy, whom he suspects of breaking things.',
      'It distills into one eccentric rule the small domain of authority he has built.',
      'It shows his concern for hygiene in an office he considers poorly kept.',
      'It suggests a sentimental attachment to the home he left as a young man.',
    ],
    correctAnswer: 1,
    explanation: 'The oddly specific instruction captures in a single stroke the private regime of "small dignities" that sentence 1 announces. The cup did come from home, but the detail\'s emphasis falls on the rule he imposes rather than on homesickness.',
  },
  {
    type: 'mcq',
    topic: 'prose-analysis',
    stimulus: PROSE_2,
    question: 'The phrase "quietly held, never quite spoken" (sentence 3) primarily characterizes Mr. Pemberton\'s conviction as',
    options: [
      'a private belief that has never been voiced or tested against reality.',
      'a widely shared view that his colleagues are too polite to say aloud.',
      'a fear that he conceals from others because it embarrasses him.',
      'a modest hope that he dares not voice for fear of seeming vain.',
    ],
    correctAnswer: 0,
    explanation: 'The conviction lives only inside him, and because it has never been spoken or tested by an absence, it has grown unchallenged until the events of sentences 4–6 test it. The phrase describes his belief, not his colleagues\' opinion, and the ending shows they do not share it.',
  },
  {
    type: 'mcq',
    topic: 'prose-analysis',
    stimulus: PROSE_2,
    question: 'Mr. Pemberton\'s belief that the partners "would feel it as one feels a cold draft from a door left slightly ajar" (sentence 3) is best described as',
    options: [
      'an accurate prediction that the firm will struggle badly in his absence.',
      'a self-flattering comparison that the passage\'s events quietly disprove.',
      'a sign of his fear that the partners are planning to replace him soon.',
      'an image of the drafty, neglected office the firm has given him to use.',
    ],
    correctAnswer: 1,
    explanation: 'The simile imagines his absence as something everyone would feel, yet when he is away the day passes without incident and the empty desk merely looks "very tidy." The passage never suggests he fears replacement; his conviction is that he is indispensable.',
  },
  {
    type: 'mcq',
    topic: 'prose-analysis',
    stimulus: PROSE_2,
    question: 'The sentence "On a Tuesday in November of 1928, Mr. Pemberton was absent." (sentence 4) achieves its effect primarily through',
    options: [
      'a sudden shift in tone from gentle comedy to genuine tragedy.',
      'precise dating that signals the historical importance of the day.',
      'a flat, brief statement that turns from his beliefs to events.',
      'an abrupt flashback to an earlier absence the firm remembers.',
    ],
    correctAnswer: 2,
    explanation: 'After three long, qualified sentences about his habits and convictions, a short declarative lands like a switch: the story moves from what he believes to what happens. The date fixes the event without claiming wider significance, and the cause turns out to be "an ordinary" cold, which keeps the tone comic.',
  },
  {
    type: 'mcq',
    topic: 'prose-analysis',
    stimulus: PROSE_2,
    question: 'The detail of "three telegrams, the last of which informed Mr. Greaves the younger of the necessity" (sentence 5) primarily contributes',
    options: [
      'a sign that his illness is more serious than the narrator admits.',
      'evidence that the firm requires formal notice of every absence.',
      'a comic disproportion between the fuss and its ordinary cause.',
      'proof that the firm will feel his absence as keenly as he imagined.',
    ],
    correctAnswer: 2,
    explanation: 'Three telegrams for "an ordinary" cold is gently absurd, and the fuss mirrors his inflated sense of his own importance. The narrator explicitly calls the cold ordinary, which rules out the reading of a hidden, serious illness.',
  },
  {
    type: 'mcq',
    topic: 'prose-analysis',
    stimulus: PROSE_2,
    question: 'The clause "The morning passed, and then the afternoon" (sentence 6) primarily contributes',
    options: [
      'a quiet enactment of a day passing without disturbance.',
      'a sense of mounting suspense as the firm waits for his return.',
      'a hint that the partners spend the day looking for his files.',
      'a shift into Mr. Pemberton\'s feverish sense of time at home.',
    ],
    correctAnswer: 0,
    explanation: 'The plain clauses move time forward with nothing happening, which is the point: the firm functions normally without him. No one in the passage waits for him or searches for anything, so there is no suspense for the syntax to build.',
  },
  {
    type: 'mcq',
    topic: 'prose-analysis',
    stimulus: PROSE_2,
    question: 'Mr. Greaves the younger\'s noticing that "the empty desk in the back office looked very tidy, very tidy indeed" (sentence 6) primarily achieves which effect?',
    options: [
      'It shows that Mr. Greaves admires the neat habits of his oldest clerk.',
      'It registers with devastating mildness that the absence is felt as relief.',
      'It suggests Mr. Greaves suspects someone has quietly cleared out the desk.',
      'It reveals that Mr. Greaves has failed to notice the clerk\'s absence at all.',
    ],
    correctAnswer: 1,
    explanation: 'What pleases Greaves is the "empty" desk and that "the room could be so clean," so the tidiness is a polite displacement of his relief at the clerk\'s absence. He is not praising Pemberton\'s neatness; the pleasure comes from the man being gone.',
  },
  {
    type: 'mcq',
    topic: 'prose-analysis',
    stimulus: PROSE_2,
    question: 'The phrase "thought, but did not quite say" (sentence 6) reveals that Mr. Greaves',
    options: [
      'is half aware of the unkindness of his pleasure and leaves it unspoken.',
      'fears that the other clerks will repeat his words to Mr. Pemberton.',
      'is too reserved by nature to praise any employee openly at work.',
      'has not yet decided whether to dismiss Mr. Pemberton for good.',
    ],
    correctAnswer: 0,
    explanation: 'He has the thought but stops short of voicing it, a restraint that suggests he senses it would sound unkind. The thought is relief at an empty room, not praise, so reading his silence as reticence about complimenting staff misreads what he holds back.',
  },
  {
    type: 'mcq',
    topic: 'prose-analysis',
    stimulus: PROSE_2,
    question: 'The relationship between sentences 1–3 (Mr. Pemberton\'s view of himself) and sentences 4–6 (the day of his absence) is best described as',
    options: [
      'steady confirmation, as the later events bear out his sense of importance.',
      'cause and effect, as his rigid habits are what finally make him fall ill.',
      'ironic refutation, as the later events quietly undo the earlier claims.',
      'parallel portraits, as the partner turns out to share his love of routine.',
    ],
    correctAnswer: 2,
    explanation: 'The first half builds his conviction that the firm needs him; the second shows the firm passing an untroubled day and finding his absence pleasant. Greaves values a clean room, not routine, so the parallel-portrait reading misses the contrast that drives the irony.',
  },
  {
    type: 'mcq',
    topic: 'prose-analysis',
    stimulus: PROSE_2,
    question: 'The narrator\'s attitude toward Mr. Pemberton is best described as',
    options: [
      'scornful and mocking, exposing a petty and self-important man.',
      'ironic but not unkind, mixing sympathy with quiet exposure.',
      'admiring and nostalgic, honoring his decades of loyal service.',
      'detached and neutral, recording his habits without judgment.',
    ],
    correctAnswer: 1,
    explanation: 'The narrator catalogs his "small dignities" with evident affection while letting the ending expose his self-importance gently. The irony is too pointed for neutrality, since the passage is built to undo his conviction, yet too tender for scorn.',
  },

  /* ---------------- DRAMA: Ella & Martin (Q45–Q55) ---------------- */
  {
    type: 'mcq',
    topic: 'drama-analysis',
    stimulus: DRAMA_1,
    question: 'The opening stage direction that Martin sits "with the lights off and a cup of cold tea in front of him" primarily characterizes him as',
    options: [
      'a man who has waited a long while in a stillness that is not quite peace.',
      'a man who has fallen asleep at the table while waiting for his daughter.',
      'a man too frail now to manage even the ordinary tasks of the household.',
      'a man who has deliberately staged a scene to make his daughter feel guilty.',
    ],
    correctAnswer: 0,
    explanation: 'Cold tea and a dark room mark the passage of hours and a loaded, watchful stillness. He speaks the moment Ella enters, which tells against sleep, and the dialogue gives no sign of calculated staging.',
  },
  {
    type: 'mcq',
    topic: 'drama-analysis',
    stimulus: DRAMA_1,
    question: 'Ella\'s choice to switch on "the lamp; not the overhead" (line 2) functions primarily to',
    options: [
      'show her concern that a bright light might wake others in the house.',
      'suggest her wish to keep the encounter soft rather than harshly exposed.',
      'signal her irritation that her father has been sitting alone in the dark.',
      'indicate that she means to stay only a moment before going up to bed.',
    ],
    correctAnswer: 1,
    explanation: 'A lamp gives intimate, partial light where an overhead would be glaring; the choice quietly sets the terms of a delicate conversation. Her line that follows is matter-of-fact rather than annoyed, so irritation is not what the gesture conveys.',
  },
  {
    type: 'mcq',
    topic: 'drama-analysis',
    stimulus: DRAMA_1,
    question: 'Martin\'s remark "Your mother used to wait up" (line 3) most strongly suggests',
    options: [
      'that he expects Ella to keep the earlier hours her mother once insisted on.',
      'that he wants Ella to telephone her mother, who still waits up for her.',
      'that he is taking up the vigil his wife once kept and acknowledging her absence.',
      'that he is proud of having preserved the household\'s old customs alone.',
    ],
    correctAnswer: 2,
    explanation: '"Used to" places the mother\'s waiting in the past, while Martin, sitting up in the dark, is now doing exactly what she did. The line obliquely admits both her absence and his own inheritance of the wait. Nothing mentions a curfew, so reading it as a demand for earlier hours adds a rule the scene never states.',
  },
  {
    type: 'mcq',
    topic: 'drama-analysis',
    stimulus: DRAMA_1,
    question: 'The stage direction in line 5, in which Ella puts down her bag "very carefully, as though the bag contained something breakable," primarily contributes which effect?',
    options: [
      'It shows that the bag holds something fragile she has brought home.',
      'It externalizes Ella\'s inner tension before her words reveal it.',
      'It suggests Ella is too exhausted to move at her usual speed.',
      'It suggests that Ella fears a scolding for coming home so late.',
    ],
    correctAnswer: 1,
    explanation: '"As though" signals that the care is not about the bag\'s contents; the gesture lets the audience see Ella bracing herself before she announces her news. Exhaustion would make movements heavy or careless, not deliberately delicate.',
  },
  {
    type: 'mcq',
    topic: 'drama-analysis',
    stimulus: DRAMA_1,
    question: 'The exchange about the tea (lines 6–10), in which Martin declines a fresh cup, primarily characterizes him as',
    options: [
      'a fastidious man who will accept nothing not prepared to his liking.',
      'a man withdrawing by small refusals from even ordinary comforts.',
      'a proud man who resents being looked after by his own grown daughter.',
      'a forgetful man whose failing memory is the true subject of the scene.',
    ],
    correctAnswer: 1,
    explanation: 'He made tea hours ago, let it go cold, and declines more because he would "only forget about it": a small, self-defeating refusal of care. His forgetfulness is a symptom of preoccupation, but the scene\'s subject is what father and daughter withhold, not his memory.',
  },
  {
    type: 'mcq',
    topic: 'drama-analysis',
    stimulus: DRAMA_1,
    question: 'Ella sits down "across from him" but "does not take off her coat" (line 11). This direction primarily suggests',
    options: [
      'that she is still chilled from the late trip home and has not warmed up.',
      'that she plans to drive back to the restaurant once she has spoken.',
      'that she treats the conversation as provisional and is braced to cut it short.',
      'that she wants her father to notice how tired and chilled she is tonight.',
    ],
    correctAnswer: 2,
    explanation: 'Taking off a coat means settling in; keeping it on makes her presence provisional, as if she might need to leave the conversation quickly. It is midnight and she has just come home, so nothing suggests a return to the restaurant.',
  },
  {
    type: 'mcq',
    topic: 'drama-analysis',
    stimulus: DRAMA_1,
    question: 'Ella\'s announcement "I\'ve sold the restaurant" (line 14) functions in the scene primarily as',
    options: [
      'the disclosure that all the scene\'s small gestures have led to.',
      'a sudden reversal that resolves the conflict between father and daughter.',
      'a confession that Ella has failed at the career her father chose for her.',
      'an aside that matters less to the scene than Martin\'s grief for his wife.',
    ],
    correctAnswer: 0,
    explanation: 'The careful bag, the coat kept on, and "I want to tell you tonight" all prepare this one piece of news. Far from resolving anything, it opens the sharper exchange of lines 19–20.',
  },
  {
    type: 'mcq',
    topic: 'drama-analysis',
    stimulus: DRAMA_1,
    question: 'In line 15, Martin picks up the cold tea and sets it down "in a very slightly different place on the table." This action primarily',
    options: [
      'shows that he has decided, after all, to drink the tea he made hours earlier.',
      'signals his anger at Ella and his wish to end the conversation at once.',
      'conveys through a nearly useless gesture a shock he will not put into words.',
      'reveals his confusion, since he cannot recall why he picked up the cup.',
    ],
    correctAnswer: 2,
    explanation: 'The cup is neither drunk nor pushed away, only moved a fraction; the body registers a jolt that his words ("Well. That\'s a piece of news.") refuse to express. He continues the conversation calmly, which rules out anger or a wish to end it.',
  },
  {
    type: 'mcq',
    topic: 'drama-analysis',
    stimulus: DRAMA_1,
    question: 'Martin\'s reply "Well. That\'s a piece of news." (line 16) is best characterized as',
    options: [
      'an expression of quiet relief that Ella will at last work less.',
      'a deliberately neutral phrase that withholds both approval and dismay.',
      'a sarcastic dismissal suggesting he expected her to fail all along.',
      'a sign that he has not yet understood what Ella has told him.',
    ],
    correctAnswer: 1,
    explanation: '"A piece of news" is about as noncommittal as language gets; it registers the announcement while revealing no judgment of it. Ella\'s frustration in line 19 shows that he has given her nothing to read, including relief.',
  },
  {
    type: 'mcq',
    topic: 'drama-analysis',
    stimulus: DRAMA_1,
    question: 'Martin\'s reply in line 20 ("Or the less I\'d have to lose") responds to Ella\'s accusation in line 19 chiefly by',
    options: [
      'conceding her charge and admitting he has long disapproved of her life.',
      'rejecting her charge as unfair and refusing to explain his long silence.',
      'recasting the silence she reads as judgment as his fear of losing her.',
      'revealing that he knows far more about her life than she has realized.',
    ],
    correctAnswer: 2,
    explanation: 'Ella reads his distance as disapproval; "Or" offers another motive for the same distance: the less he knew, the less he could lose. He neither concedes disapproval nor dismisses her; he quietly supplies an explanation she had not considered.',
  },
  {
    type: 'mcq',
    topic: 'drama-analysis',
    stimulus: DRAMA_1,
    question: 'Which best describes a central concern of the scene as a whole?',
    options: [
      'How a daughter\'s ambition finally frees her from her father\'s control.',
      'How grief for a wife and mother has driven a family permanently apart.',
      'How two people who love each other build a relationship out of what they withhold.',
      'How a father\'s disapproval of his daughter\'s career turns into acceptance.',
    ],
    correctAnswer: 2,
    explanation: 'The scene is built from small withholdings (the lamp, the declined tea, the coat, the moved cup, the unasked question) between two people who clearly care for each other. The final exchange reframes Martin\'s silence as fear of loss rather than disapproval, and nothing shows a change from disapproval to acceptance.',
  },
]
