import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP English Language & Composition — 45 MCQs in 60 minutes.
 * Matches the CED split: 24 reading questions (Passages 1–3, 8 each) and
 * 21 writing questions (Passage 4: 10, Passage 5: 11).
 * Passages are original/simulated to avoid copyright.
 *
 * Passages 1–3: Reading (rhetorical analysis of nonfiction).
 * Passages 4–5: Writing (revision/editing of student drafts).
 */

const PASSAGE_1 = `**Passage 1 — Adapted from an early twentieth-century commencement address by an American educator.**

(1) Tonight, as you cross this stage and step into a world you have only glimpsed through textbooks, I would urge you not to mistake the diploma in your hand for an ending. (2) It is, instead, a permission slip — a small paper assurance that you may now begin the longer education that no professor can supervise. (3) The classroom you are leaving was kind to you; it offered the comfort of a syllabus, of clearly marked exits and predictable examinations. (4) The world, I assure you, will offer no such kindness. (5) It will not tell you which chapter to read, nor when to expect the test, and the test, when it comes, will not always be marked. (6) You will be tempted, in this confusion, to grasp for certainty wherever it is offered: in slogans, in the loud opinions of strangers, in the easy comfort of unexamined belief. (7) Resist. (8) The most dangerous person in any room is not the one who knows nothing — that person at least knows that he does not know — but the one who knows a single thing with complete and unshakeable conviction.`

const PASSAGE_2 = `**Passage 2 — Adapted from a contemporary essay on urban design.**

(1) Ask any city planner what makes a sidewalk work, and you will not hear, first, about width or paving material or the spacing of streetlamps. (2) You will hear, first, about people. (3) A sidewalk thrives when it is occupied — densely, irregularly, and at all hours — by the small motions of ordinary life: a vendor unfolding her cart, a parent steering a stroller around an unexpected puddle, a teenager pretending not to notice the teenager across the street. (4) The writer and activist Jane Jacobs called this dance of strangers the "ballet of the good city sidewalk," and it is a peculiar choreography indeed: improvised, repetitive, and yet never quite the same on any two mornings. (5) When planners forget this — when they widen a road for traffic that does not yet exist, or replace a bench with a bollard because someone, somewhere, complained — the sidewalk falls silent. (6) And a silent sidewalk, in a city, is a kind of small bereavement. (7) The block has lost its witness. (8) The cars roll past faster, the storefronts grow shy, and the few remaining pedestrians walk a little quicker, as though they too have begun to suspect that no one is watching.`

const PASSAGE_3 = `**Passage 3 — Adapted from a personal letter (1946) by a journalist to her younger sister.**

(1) Ruth, I am writing this from a hotel room in Paris that smells faintly of pipe tobacco and disappointment, and I want very much to tell you that the great peace conference is going splendidly. (2) I cannot. (3) The men in the great hall speak in the careful, weightless voice of diplomats, which is to say they speak as if every sentence might one day be quoted against them. (4) Yesterday a delegate from a country I will not name spent forty-three minutes — I timed him — explaining why a single comma in the draft treaty was either an act of profound generosity or a calculated insult, depending entirely upon who was listening. (5) When he sat down he was applauded. (6) I do not know who applauds a comma, but apparently it is the custom here. (7) I think often, in this room, of our father at the kitchen table, settling our disputes with three sentences and a piece of pie. (8) Whatever else the great powers possess, they do not possess our father, and the world is the worse for it.`

const PASSAGE_4 = `**Passage 4 — Student draft on community gardens (early draft for revision).**

(1) Across the United States, community gardens have become very popular in recent years. (2) These are gardens that members of a neighborhood share. (3) People grow vegetables, fruits, and flowers in them. (4) Some gardens are on land that the city owns and others are on private lots that the owner has let the community use. (5) People in the neighborhood get to grow their own food which is healthier and cheaper. (6) Also, neighbors who would otherwise never meet end up working side by side, which builds community. (7) Critics say the gardens take up land that could be used for housing. (8) However, this is not really a fair argument. (9) Cities have many vacant lots and most of them are not being used for housing anyway. (10) Therefore, community gardens should be supported by city governments because they are good.`

const PASSAGE_5 = `**Passage 5 — Student draft on screen time and adolescent sleep (early draft for revision).**

(1) Many studies have shown that adolescents in the United States are not getting enough sleep. (2) The American Academy of Pediatrics recommends that teenagers get between eight and ten hours of sleep per night, but surveys consistently find that most high school students get fewer than eight. (3) One major reason for this is the use of personal electronic devices in the hours before bed. (4) The light from screens, particularly in the blue wavelengths, suppresses the production of melatonin, a hormone that helps the body prepare for sleep. (5) In addition, the social and emotional content of phones — text messages, notifications, the constant pull of social media — keeps the brain in a state of alertness that is incompatible with falling asleep quickly. (6) Some critics argue that blaming phones is overly simplistic, and that other factors like early school start times and academic pressure also play a role. (7) These critics have a point. (8) Nevertheless, the evidence linking screen use to delayed sleep onset is strong, and any serious effort to address adolescent sleep deprivation must include a conversation about phones in the bedroom.`


export const MCQS: MCQItem[] = [
  /* ---------------- PASSAGE 1: Commencement address (Q1–Q8) ---------------- */
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_1,
    question: 'The contrast drawn between "The classroom" (sentence 3) and "The world" (sentences 4–5) primarily functions to',
    options: [
      'praise the rigor of formal schooling at the expense of practical experience.',
      'emphasize how unstructured and unforgiving life after graduation will be.',
      'suggest that the speaker himself was poorly prepared by his own schooling.',
      'argue that colleges should redesign their courses to mirror real conditions.',
    ],
    correctAnswer: 1,
    explanation: 'The classroom offered "a syllabus," "clearly marked exits," and "predictable examinations"; the world will name no chapter, announce no test, and leave some tests unmarked. The speaker calls the classroom "kind" rather than rigorous, so the contrast stresses the difficulty ahead, not the superiority of schooling.',
  },
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_1,
    question: 'The one-word sentence "Resist." (sentence 7) achieves which rhetorical effect?',
    options: [
      'It softens the warning of sentence 6 by reducing it to one gentle word.',
      'It gives emphatic, commanding force to the warning built up in sentence 6.',
      'It marks a turn to a new topic that redirects the audience\'s attention.',
      'It signals a lighter tone meant to relieve the seriousness of the address.',
    ],
    correctAnswer: 1,
    explanation: 'After a long sentence cataloging the temptations of certainty, a bare imperative isolated as its own sentence lands with maximum emphasis. It completes the warning of sentence 6 rather than changing the subject, since sentence 8 goes on to explain why resistance matters.',
  },
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_1,
    question: 'In sentence 8, the speaker draws a contrast in order to argue that',
    options: [
      'ignorance is the greater danger, since it cannot be corrected by experience.',
      'unshakeable certainty is more dangerous than ignorance that is aware of itself.',
      'all strong conviction is dangerous and should be avoided in public life.',
      'true expertise is impossible to attain in any single field of study.',
    ],
    correctAnswer: 1,
    explanation: 'The person who knows nothing "at least knows that he does not know," while the most dangerous person holds "a single thing with complete and unshakeable conviction." The warning targets certainty that admits no doubt, not conviction as such, so the claim that all strong conviction is dangerous overextends it.',
  },
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_1,
    question: 'The phrase "the loud opinions of strangers" (sentence 6) primarily appeals to',
    options: [
      'the audience\'s nostalgia for the trusted authority of their professors.',
      'the audience\'s wariness of noisy, unsolicited voices claiming authority.',
      'the audience\'s fear of being cut off from the community they have known.',
      'the audience\'s longing for the clear structure of the classroom.',
    ],
    correctAnswer: 1,
    explanation: '"Loud" and "strangers" connote unwelcome, unearned intrusion, priming the graduates to treat such opinions with suspicion. The speaker acknowledges that graduates may miss the classroom\'s structure, but this phrase names a false substitute for it, not the structure itself.',
  },
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_1,
    question: 'The metaphor of a "permission slip" (sentence 2) characterizes the diploma as',
    options: [
      'a modest document whose chief value lies in what it allows.',
      'an authoritative credential that confers expert standing on its holder.',
      'a binding contract that obligates its bearer to a lifetime of service.',
      'a cherished keepsake valued mainly as a record of past achievement.',
    ],
    correctAnswer: 0,
    explanation: 'A permission slip is a humble, almost childlike paper whose only purpose is to allow something else; the speaker says it lets graduates "begin the longer education." The metaphor deliberately shrinks the diploma\'s grandeur, the opposite of treating it as a mark of expertise.',
  },
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_1,
    question: 'The speaker\'s tone in the passage is best described as',
    options: [
      'festive and congratulatory',
      'earnest and cautionary',
      'mournful and resigned',
      'sardonic and dismissive',
    ],
    correctAnswer: 1,
    explanation: 'The speaker sincerely warns the graduates about the temptations ahead ("Resist.") in service of their continued growth. A commencement setting invites congratulation, but the address spends nearly all its energy on caution, and its call to "begin the longer education" is hopeful rather than resigned.',
  },
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_1,
    question: 'Which rhetorical device is most prominent in sentences 3–5?',
    options: [
      'Hyperbole that exaggerates how difficult academic life has been',
      'Personification that lends human traits to both settings',
      'Allusion to a historical event the graduates would recognize',
      'Understatement that minimizes the speaker\'s own credentials',
    ],
    correctAnswer: 1,
    explanation: 'The classroom "was kind to you" and "offered" comfort; the world "will offer no such kindness" and "will not tell you" what to read. Both are given human intentions. The sentences make the classroom sound easy, not hard, so hyperbole about academic difficulty misreads them.',
  },
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_1,
    question: 'The speaker\'s primary purpose in the passage is to',
    options: [
      'warn the graduates against easy certainty and urge humble, continued inquiry.',
      'persuade graduates to pursue advanced degrees before entering the world.',
      'lament that formal schooling has left graduates unprepared for real life.',
      'celebrate the institutions that have given the graduates their education.',
    ],
    correctAnswer: 0,
    explanation: 'The address reframes the diploma as the start of a "longer education" and spends its climax warning against grasping for certainty. The speaker never faults the schooling, calling the classroom "kind," so the passage is not a lament about inadequate preparation.',
  },

  /* ---------------- PASSAGE 2: Urban design essay (Q9–Q16) ---------------- */
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_2,
    question: 'The author\'s opening strategy in sentences 1–2 primarily functions to',
    options: [
      'establish the author\'s own credentials as a practicing urban planner.',
      'overturn the reader\'s expectations by putting people ahead of infrastructure.',
      'criticize planners for neglecting the technical details of sidewalk design.',
      'introduce a historical anecdote that the essay will go on to develop.',
    ],
    correctAnswer: 1,
    explanation: 'The author predicts what a reader expects to hear first (width, paving, streetlamps) and then answers "people," reframing the essay around human use. The author reports what planners say rather than claiming to be one, so the opening is not a statement of credentials.',
  },
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_2,
    question: 'The series of images in sentence 3 ("a vendor unfolding her cart … a teenager pretending not to notice the teenager across the street") primarily serves to',
    options: [
      'document the range of occupations to be found in a modern city.',
      'illustrate the ordinary motions that bring a sidewalk to life.',
      'argue that young people are the most important users of public space.',
      'criticize vendors and strollers for crowding the pedestrian walkway.',
    ],
    correctAnswer: 1,
    explanation: 'Each image is a small, everyday action by an ordinary person, so the catalog enacts the "small motions of ordinary life" the sentence names. Only the vendor is shown at work; the parent and teenagers are simply living their lives, which rules out a survey of occupations.',
  },
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_2,
    question: 'The phrase Jacobs coined, the "ballet of the good city sidewalk" (sentence 4), most directly characterizes street life as',
    options: [
      'a rigid choreography of steps that leaves no room for improvisation.',
      'an art that is patterned and graceful yet improvised and ever-changing.',
      'a chaotic disturbance that disrupts the orderly flow of city streets.',
      'a quaint relic of the era before cars that now survives only as nostalgia.',
    ],
    correctAnswer: 1,
    explanation: 'A ballet implies pattern and grace, and the author immediately glosses it as "improvised, repetitive, and yet never quite the same." A reader who stops at "choreography" might see rigidity, but the gloss explicitly stresses improvisation.',
  },
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_2,
    question: 'The phrase "a kind of small bereavement" (sentence 6) functions primarily to',
    options: [
      'soften the criticism of planners by granting their good intentions.',
      'introduce religious imagery that the rest of the passage develops.',
      'lend the emotional weight of grief to the loss of a street\'s daily life.',
      'suggest that the author has personally lost a neighbor to traffic.',
    ],
    correctAnswer: 2,
    explanation: '"Bereavement" names the loss of a loved one; applied to a silent sidewalk, it borrows the weight of mourning for the loss of street life. The surrounding sentences criticize planners sharply ("because someone, somewhere, complained"), so the phrase does not soften that criticism.',
  },
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_2,
    question: 'The personification of storefronts that "grow shy" (sentence 8) reinforces which idea?',
    options: [
      'That shop owners deliberately discourage customers on quiet streets',
      'That architects design storefronts to discourage casual interaction',
      'That an emptied street sets off a cycle of further withdrawal',
      'That commercial businesses are by nature hostile to street life',
    ],
    correctAnswer: 2,
    explanation: 'Faster cars, shy storefronts, and hurrying pedestrians describe emptiness producing more emptiness. The shyness is a figurative response to the silent sidewalk, not a choice by shop owners or architects.',
  },
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_2,
    question: 'The example of replacing "a bench with a bollard because someone, somewhere, complained" (sentence 5) is offered as evidence of',
    options: [
      'thoughtful planning that responds appropriately to public feedback.',
      'small decisions that together drain public space of its life.',
      'the practical advantages of sturdier modern street furniture.',
      'a deliberate campaign by officials to drive pedestrians away.',
    ],
    correctAnswer: 1,
    explanation: 'The vague "someone, somewhere" trivializes the cause while the next clause shows the outsized effect: "the sidewalk falls silent." The author treats the decision as careless rather than as a plot, so a deliberate campaign overstates the charge.',
  },
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_2,
    question: 'Across the passage, the author\'s argument depends most heavily on which kind of evidence?',
    options: [
      'Quantitative data drawn from peer-reviewed urban-planning studies',
      'Personal anecdotes from the author\'s own career as a city planner',
      'Concrete sensory images reinforced by the authority of a named expert',
      'Historical records documenting the founding of American cities',
    ],
    correctAnswer: 2,
    explanation: 'The passage offers no statistics; its force comes from vivid scenes (the stroller and the puddle, the shy storefronts) backed by Jacobs\'s authority. The scenes are generalized types, not episodes from the author\'s own working life, so they are not personal anecdotes.',
  },
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_2,
    question: 'The author\'s overall purpose in the passage is best described as',
    options: [
      'to argue that human use should be the central measure of urban design.',
      'to propose specific limits on the width of roads and city sidewalks.',
      'to lament that American cities are no longer built for walking.',
      'to defend pedestrians against drivers in disputes over street space.',
    ],
    correctAnswer: 0,
    explanation: 'The opening reframe (people before paving) and the closing image of a bereaved, silent block together argue that occupation by people is what makes a sidewalk work. The passage mourns specific planning failures but never claims that cities have stopped being walkable altogether.',
  },

  /* ---------------- PASSAGE 3: Paris letter (Q17–Q24) ---------------- */
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_3,
    question: 'The detail that the hotel room "smells faintly of pipe tobacco and disappointment" (sentence 1) primarily serves to',
    options: [
      'record a literal odor that was typical of European hotels just after the war.',
      'pair a real scent with an abstract one to convey the writer\'s low spirits.',
      'criticize the shabby lodgings provided to the visiting press corps.',
      'foreshadow a later description of the delegates\' private habits.',
    ],
    correctAnswer: 1,
    explanation: 'Pairing a real smell with an abstract one turns the room into a reflection of the writer\'s mood about the conference. "Disappointment" cannot be a literal odor, so the phrase is not chiefly a description of the hotel itself.',
  },
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_3,
    question: 'The sentence "I cannot." (sentence 2) achieves which effect?',
    options: [
      'It reveals that official censors have forbidden her to report on the proceedings.',
      'It undercuts the cheerful report she wishes to give and signals candor to come.',
      'It expresses doubt about whether she is qualified to judge diplomacy at all.',
      'It defers politely to the diplomats whose work she goes on to describe.',
    ],
    correctAnswer: 1,
    explanation: 'After "I want very much to tell you that the great peace conference is going splendidly," the bare "I cannot." breaks the polite pattern and promises honesty. She goes on to describe the proceedings in detail, so she has not been forbidden to report them; she simply cannot report them as splendid.',
  },
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_3,
    question: 'The interjection "I timed him" (sentence 4) primarily contributes which effect?',
    options: [
      'It adds a dry, exact detail that mocks the delegate\'s long-windedness.',
      'It establishes the writer\'s reliability as an official recorder of the talks.',
      'It shows her admiration for the delegate\'s thoroughness and stamina.',
      'It reveals her impatience to finish the letter and return to her work.',
    ],
    correctAnswer: 0,
    explanation: 'The aside is deadpan: she was unimpressed enough to clock a forty-three-minute speech about a comma. The precision does lend accuracy, but in a private letter to her sister its function is comic, not documentary.',
  },
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_3,
    question: 'The remark "I do not know who applauds a comma, but apparently it is the custom here" (sentence 6) achieves its effect primarily through',
    options: [
      'mild understatement that lets the absurdity speak for itself.',
      'sincere puzzlement at a custom she hopes to learn.',
      'open insult delivered in a deliberately formal register.',
      'an extended comparison between punctuation and warfare.',
    ],
    correctAnswer: 0,
    explanation: 'Her polite bemusement ("I do not know," "apparently") makes the absurdity of applauding a punctuation mark plain without raising her voice. The puzzlement is affected rather than sincere: the surrounding sentences make clear she finds the custom ridiculous.',
  },
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_3,
    question: 'The image of "our father at the kitchen table, settling our disputes with three sentences and a piece of pie" (sentence 7) functions to',
    options: [
      'argue that international disputes could be settled by hospitality.',
      'introduce a nostalgic memory that distracts her from the conference.',
      'offer a domestic standard of plain judgment that Paris fails to meet.',
      'assert the superiority of American family life over European custom.',
    ],
    correctAnswer: 2,
    explanation: 'Three sentences against forty-three minutes on a comma: the father\'s plain, decisive judgment makes the great hall look absurd by contrast. The pie is part of a figurative comparison, not a literal proposal that hospitality could settle treaties.',
  },
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_3,
    question: 'The closing assertion that "the great powers… do not possess our father, and the world is the worse for it" (sentence 8) is best described as',
    options: [
      'a figurative claim that plain, decisive judgment is sorely missing.',
      'a literal regret that their father cannot serve as a diplomat himself.',
      'a criticism of their father for refusing to take part in public life.',
      'an apology to Ruth for being away from the family for so long.',
    ],
    correctAnswer: 0,
    explanation: 'The father stands for the plain speech and moral seriousness the conference lacks; the writer mourns the absence of those qualities. Read literally, the line would be a wish to send him to Paris, but the comparison works only as a figure.',
  },
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_3,
    question: 'The form of a private letter ("Ruth, I am writing this…") shapes the passage\'s rhetoric by',
    options: [
      'requiring strict factual reporting that discourages personal opinion.',
      'permitting a frankness that a public dispatch would not allow.',
      'concealing the writer\'s actual political views from her own reader.',
      'limiting its audience to readers who share the writer\'s profession.',
    ],
    correctAnswer: 1,
    explanation: 'Writing to her sister licenses asides ("I timed him"), family comparisons, and frank judgments that a published report would have to suppress. Far from concealing her views, the letter states them openly.',
  },
  {
    type: 'mcq',
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_3,
    question: 'The writer\'s overall purpose in the passage is best described as',
    options: [
      'to give Ruth an objective account of the conference\'s official proceedings.',
      'to persuade Ruth that the conference will soon produce a lasting peace.',
      'to express her disillusionment with the bloated, evasive conduct of diplomacy.',
      'to defend the diplomats against unfair criticism in the popular press.',
    ],
    correctAnswer: 2,
    explanation: 'The disappointed hotel room, the guarded speech, the applause for a comma, and the absent father all build disillusionment with how the great powers conduct themselves. The letter reports events, but its selection and wit are openly judgmental rather than objective.',
  },

  /* ---------------- PASSAGE 4: Community gardens draft (Q25–Q34) ---------------- */
  {
    type: 'mcq',
    topic: 'composition-revision',
    stimulus: PASSAGE_4,
    question: 'In sentence 1, the writer wants to replace "have become very popular in recent years" with a phrase that conveys the gardens\' growth more precisely. Which choice best accomplishes this goal?',
    options: [
      'have become extremely and increasingly popular with many different people across the whole country',
      'have spread from a few scattered lots to most large cities, where plots often have waiting lists',
      'are something that just about everyone everywhere seems to be talking about these days',
      'have started to attract a great deal of attention and interest from all kinds of people',
    ],
    correctAnswer: 1,
    explanation: 'The revision replaces the vague intensifier "very popular" with concrete markers of growth: spread across cities and demand that exceeds supply. The other choices pile on intensifiers ("extremely and increasingly," "a great deal") that sound emphatic but remain just as vague as the original.',
  },
  {
    type: 'mcq',
    topic: 'composition-revision',
    stimulus: PASSAGE_4,
    question: 'The writer wants to add a sentence after sentence 1 that clearly states the position the draft will argue. Which choice best accomplishes this goal?',
    options: [
      'These gardens can be found on public and private land, in large cities as well as small towns.',
      'City governments should support these gardens, which turn neglected lots into food and friendship.',
      'Community gardens should replace new housing projects, which do far less for neighborhoods.',
      'Many people enjoy gardening as a hobby, and some even prefer growing flowers to vegetables.',
    ],
    correctAnswer: 1,
    explanation: 'The draft\'s conclusion calls on city governments to support community gardens, and its body argues for food and community benefits; this sentence states that position up front. The housing choice overreaches: the draft argues that gardens and housing need not conflict, not that gardens should replace housing.',
  },
  {
    type: 'mcq',
    topic: 'composition-revision',
    stimulus: PASSAGE_4,
    question: 'The writer wants to combine sentences 2 and 3 to eliminate redundancy. Which choice is the best revision?',
    options: [
      'The gardens are ones that members of a neighborhood share, where people grow vegetables, fruits, and flowers.',
      'These are shared gardens where neighborhood members grow vegetables, fruits, and flowers.',
      'They are shared, and in them people grow many things, like vegetables, fruits, and flowers.',
      'Members of a neighborhood share them, and they grow vegetables, fruits, and flowers in them.',
    ],
    correctAnswer: 1,
    explanation: 'The best revision folds "share" into the adjective "shared" and names who does the growing in one clean clause. The alternatives keep wordy or vague constructions such as "These are gardens that…," the indefinite "many things," or the doubled "them… in them."',
  },
  {
    type: 'mcq',
    topic: 'composition-revision',
    stimulus: PASSAGE_4,
    question: 'Which revision of sentence 5 best maintains a formal, academic register?',
    options: [
      'People in the neighborhood get to grow their own food, which is healthier and also a lot cheaper.',
      'Folks who live nearby get to garden their own grub, which is way better for them and way cheaper.',
      'Residents can grow their own produce, which is healthier and less costly than store-bought.',
      'Neighborhood people are able to grow stuff, which is more healthy and not nearly as expensive.',
    ],
    correctAnswer: 2,
    explanation: 'Precise diction ("Residents," "produce," "less costly") gives the revision an academic register while keeping both of the original claims, health and cost. The others rely on conversational phrasing such as "get to," "a lot," "grub," and "stuff."',
  },
  {
    type: 'mcq',
    topic: 'composition-revision',
    stimulus: PASSAGE_4,
    question: 'The writer wants to replace "Also" at the beginning of sentence 6 with a transition that better clarifies the relationship between sentences 5 and 6. Which choice is most effective?',
    options: [
      'In contrast to these individual benefits,',
      'Beyond these benefits to diet and budget,',
      'As a direct result of these savings,',
      'For example, in many neighborhoods,',
    ],
    correctAnswer: 1,
    explanation: 'Sentence 5 names benefits to health and cost; sentence 6 adds a different, social benefit. The best transition marks that move from one kind of benefit to another. "As a direct result" wrongly implies that cheaper food causes neighbors to meet, and the contrast and example choices misstate the relationship.',
  },
  {
    type: 'mcq',
    topic: 'composition-revision',
    stimulus: PASSAGE_4,
    question: 'The writer is considering adding the following sentence after sentence 6: "In one city\'s garden network, nearly two-thirds of members said they knew more of their neighbors by name after a single season." Should the writer add this sentence?',
    options: [
      'Yes, because it offers specific evidence for the claim that gardens build community ties.',
      'Yes, since it proves that community gardens are more popular than their critics believe.',
      'No, because evidence from one city cannot support any claim about gardens in general.',
      'No, because it interrupts the discussion of food costs that sentence 5 has just begun.',
    ],
    correctAnswer: 0,
    explanation: 'Sentence 6 asserts that working side by side "builds community" but offers no support; the survey result supplies exactly that. Evidence from one city cannot settle the question everywhere, but it can still support a claim, and the draft has moved on from food costs by sentence 6.',
  },
  {
    type: 'mcq',
    topic: 'composition-revision',
    stimulus: PASSAGE_4,
    question: 'In sentence 8, the writer wants to acknowledge the critics\' concern more substantively before responding to it. Which revision is most effective?',
    options: [
      'However, this is not really a fair argument at all, and the critics should probably reconsider it.',
      'This concern is fair where housing is scarce, but it overstates the conflict between the two uses.',
      'However, this concern is silly and should be dismissed by anyone who has visited a garden.',
      'However, the writer of this essay disagrees with this argument very strongly and completely.',
    ],
    correctAnswer: 1,
    explanation: 'The revision concedes that the concern is reasonable, names when it applies, and then qualifies it, which prepares the response in sentence 9. The other choices dismiss the critics without engaging them, and one shifts awkwardly into the third person ("the writer of this essay").',
  },
  {
    type: 'mcq',
    topic: 'composition-revision',
    stimulus: PASSAGE_4,
    question: 'In sentence 9, the phrase "most of them are not being used for housing anyway" weakens the argument. Which revision most strengthens it?',
    options: [
      'most of them are not really good for anything else, at least in the opinion of this writer',
      'many have sat empty for years because they are too small or oddly shaped for housing',
      'most of them might be used for housing someday, though no one can say exactly when',
      'most of them are owned by people who would rather see gardens, which they find prettier',
    ],
    correctAnswer: 1,
    explanation: 'The original asserts without explaining; the revision gives a concrete reason the lots are unsuitable for housing, which answers the critics directly. Owners\' preferences say nothing about whether the land could house people, so that choice leaves the critics\' point standing.',
  },
  {
    type: 'mcq',
    topic: 'composition-revision',
    stimulus: PASSAGE_4,
    question: 'Sentence 10 ends with the phrase "because they are good." Which revision of this phrase provides the most substantive conclusion?',
    options: [
      'because they are good for everyone, young and old, and have many benefits for nearby residents',
      'because they turn neglected land into affordable food, stronger neighborhoods, and civic space',
      'because they are nice, pleasant places that people seem to enjoy, especially in summer',
      'because gardens are good, and good things are what city governments ought to support',
    ],
    correctAnswer: 1,
    explanation: 'A strong conclusion gathers the draft\'s actual claims (food, community, unused land) into one specific statement. The other choices restate "good" in different words or argue in a circle, adding no substance.',
  },
  {
    type: 'mcq',
    topic: 'composition-revision',
    stimulus: PASSAGE_4,
    question: 'Which of the following best describes the primary weakness of the draft as a whole?',
    options: [
      'It relies too heavily on direct quotations from outside sources.',
      'It makes broad claims without specific evidence to support them.',
      'It spends too long on the critics and too little on its own claims.',
      'It focuses too narrowly on the gardens of a single American city.',
    ],
    correctAnswer: 1,
    explanation: 'The draft asserts that gardens are "very popular," "healthier and cheaper," and "good" without figures, examples, or sources. The critics receive only one sentence, so the draft\'s problem is unsupported assertion, not an imbalance toward the opposing side.',
  },

  /* ---------------- PASSAGE 5: Adolescent sleep draft (Q35–Q45) ---------------- */
  {
    type: 'mcq',
    topic: 'composition-revision',
    stimulus: PASSAGE_5,
    question: 'The writer wants to revise sentence 1 so that it states the problem more directly. Which choice is best?',
    options: [
      'It is the case that, according to many studies, American adolescents do not get enough sleep.',
      'Most American adolescents do not get enough sleep.',
      'Many studies have shown and confirmed that American adolescents are not getting enough sleep.',
      'American adolescents may perhaps lack some sleep.',
    ],
    correctAnswer: 1,
    explanation: 'The revision states the claim plainly, and sentence 2 immediately supplies the data that support it. The other choices bury the claim in filler ("It is the case that"), stack hedges ("may perhaps"), or add redundancy ("shown and confirmed").',
  },
  {
    type: 'mcq',
    topic: 'composition-revision',
    stimulus: PASSAGE_5,
    question: 'In sentence 2, the writer wants to replace "surveys consistently find" with a specific source that most strengthens the credibility of the claim. Which choice is most effective?',
    options: [
      'a recent poll of about 200 students at the writer\'s own high school found',
      'the CDC\'s 2021 national survey of over 17,000 high school students found',
      'a 2021 article on teen wellness in a popular parenting magazine reported',
      'many surveys conducted by researchers over the past several years have found',
    ],
    correctAnswer: 1,
    explanation: 'A national federal survey of more than 17,000 students is both authoritative and representative, which suits a claim about most U.S. high school students. A poll of one school is specific but far too small and local to support a national claim, and a magazine article is a secondary, less authoritative source.',
  },
  {
    type: 'mcq',
    topic: 'composition-revision',
    stimulus: PASSAGE_5,
    question: 'The writer wants sentence 4 to explain the scientific claim accurately while remaining clear to a general audience. Which version of sentence 4 is best?',
    options: [
      'The light from screens, particularly in the blue wavelengths, suppresses the production of melatonin, a hormone that helps the body prepare for sleep.',
      'Screens emit short-wavelength photons, which act on melanopsin-containing retinal ganglion cells, thereby signaling the suprachiasmatic nucleus.',
      'Screen light is bad for sleep, because it messes with a chemical in the body that most people have never heard of.',
      'Light from phones and tablets makes it harder for teens to fall asleep at night, for reasons that scientists, doctors, and parents are still debating.',
    ],
    correctAnswer: 0,
    explanation: 'The current sentence is already the best version: it names the mechanism (blue light suppressing melatonin) and glosses the one technical term for a lay reader. The highly technical version is accurate but would lose a general audience, while the casual versions drop the mechanism entirely.',
  },
  {
    type: 'mcq',
    topic: 'composition-revision',
    stimulus: PASSAGE_5,
    question: 'The writer wants to add a sentence after sentence 4 that explains to a general reader why suppressed melatonin matters. Which choice best accomplishes this goal?',
    options: [
      'Melatonin is also sold as a dietary supplement, and some teenagers take it to help them sleep.',
      'Low melatonin delays the body\'s shift toward sleep, so teens lie awake past their bedtime.',
      'Blue light falls roughly between 400 and 500 nanometers, near the short end of the spectrum.',
      'Many adolescents enjoy using their phones before bed because it helps them unwind after school.',
    ],
    correctAnswer: 1,
    explanation: 'The added sentence should connect the mechanism (less melatonin) to the consequence the paragraph cares about (delayed sleep), and only this choice does so. The supplement sentence mentions melatonin but drifts to a different topic.',
  },
  {
    type: 'mcq',
    topic: 'composition-revision',
    stimulus: PASSAGE_5,
    question: 'In sentence 5, the writer wants the description of phone use to be vivid, specific, and concise. Which version of sentence 5 is best?',
    options: [
      'In addition, the social and emotional content of phones — text messages, notifications, the constant pull of social media — keeps the brain in a state of alertness that is incompatible with falling asleep quickly.',
      'In addition, the many things teenagers do on their phones late at night, from chatting to scrolling to watching videos, keep their brains busy and awake for a long time, which makes falling asleep much harder for them.',
      'In addition, phone use — in adolescent populations especially — has been associated with elevated levels of cognitive arousal, which may in some cases be incompatible with rapid sleep onset.',
      'In addition, looking at phones is, in many cases and for many different reasons, a significant contributor to the wakefulness that teenagers so often experience at bedtime.',
    ],
    correctAnswer: 0,
    explanation: 'The current sentence names concrete sources of stimulation (texts, notifications, "the constant pull of social media") and the precise effect on the brain. The version about chatting and scrolling gestures at specifics but stays general and wordy, while the others retreat into abstraction.',
  },
  {
    type: 'mcq',
    topic: 'composition-revision',
    stimulus: PASSAGE_5,
    question: 'The writer wants to add a transition at the beginning of sentence 6 that signals a turn to opposing views. Which choice is most effective?',
    options: [
      'Furthermore, the evidence is mounting.',
      'Of course, the picture is not so simple.',
      'For instance, consider one recent study.',
      'In conclusion, phones are the main cause.',
    ],
    correctAnswer: 1,
    explanation: 'Sentence 6 introduces critics who call the phone explanation too simple, and this transition anticipates exactly that complication. The other choices add to the writer\'s case, introduce an example, or conclude prematurely; none signals a counterargument.',
  },
  {
    type: 'mcq',
    topic: 'composition-revision',
    stimulus: PASSAGE_5,
    question: 'The writer wants to revise sentence 6 so that it represents the critics\' position fairly. Which version is best?',
    options: [
      'Some people who clearly do not understand the science at all insist that blaming phones is far too simplistic.',
      'Some critics, mostly people who sell phones for a living, claim that blaming phones is far too simplistic an answer.',
      'Some critics argue that phones have nothing whatsoever to do with sleep and that all of the studies are simply wrong.',
      'Some researchers argue that phones are only part of the story, as early start times also cut into sleep.',
    ],
    correctAnswer: 3,
    explanation: 'The fair version attributes the view to researchers and states their actual reasoning: other factors, such as early school start times, also matter. The other choices attack the critics\' motives or competence, or exaggerate their claim into a denial that phones matter at all.',
  },
  {
    type: 'mcq',
    topic: 'composition-revision',
    stimulus: PASSAGE_5,
    question: 'The writer wants to add a sentence after sentence 6 that provides evidence for the critics\' point about school start times. Which choice best accomplishes this goal?',
    options: [
      'Because many high schools begin classes before 8:00 a.m., students often must wake before their bodies are ready.',
      'Many teenagers say they check their phones within minutes of waking, often before they even get out of bed.',
      'Adults who work early shifts also report trouble sleeping, which suggests the problem is not limited to teens.',
      'Many people have strong opinions about when school should start, and the debate over the question has continued for years.',
    ],
    correctAnswer: 0,
    explanation: 'Only this choice links early start times to lost sleep, which is the critics\' specific point. The sentence about checking phones on waking supports the writer\'s phone argument instead, and the sentence about adults widens the topic beyond adolescents.',
  },
  {
    type: 'mcq',
    topic: 'composition-revision',
    stimulus: PASSAGE_5,
    question: 'The writer is considering deleting sentence 7 ("These critics have a point."). Should the writer make this deletion?',
    options: [
      'Yes, because conceding ground to the critics weakens the paragraph\'s central argument.',
      'No, because the brief concession builds the writer\'s credibility before "Nevertheless."',
      'Yes, because a sentence that short cannot work as a transition in formal academic prose.',
      'No, because it introduces new evidence about start times that the writer then develops.',
    ],
    correctAnswer: 1,
    explanation: 'A brief concession followed by "Nevertheless" shows fairness and then returns to the writer\'s position, strengthening the writer\'s ethos. Conceding a partial point does not weaken the argument, because sentence 8 still holds that the phone evidence is strong.',
  },
  {
    type: 'mcq',
    topic: 'composition-revision',
    stimulus: PASSAGE_5,
    question: 'The writer wants to revise sentence 8 so that the paragraph ends with a specific, practical recommendation. Which version is best?',
    options: [
      'In summary, adolescent sleep is a complicated issue, since many factors are at play and there is no single answer.',
      'Therefore, families should set screen-free bedtime routines, though such limits alone will not solve the problem.',
      'In conclusion, screens are simply bad for teenagers, and adolescents should stop looking at them at night entirely.',
      'Therefore, more research is needed before anyone can say whether phones play any role in adolescent sleep at all.',
    ],
    correctAnswer: 1,
    explanation: 'The best version turns the argument into a concrete action (screen-free bedtime routines) while keeping the qualification the concession earned. Calling for more research contradicts the writer\'s claim that the evidence is strong, and the "simply bad" version abandons the nuance of sentences 6–7.',
  },
  {
    type: 'mcq',
    topic: 'composition-revision',
    stimulus: PASSAGE_5,
    question: 'Which of the following best describes the writer\'s overall strategy in this paragraph?',
    options: [
      'Presenting both sides evenly and declining to take any clear position on the issue',
      'Stating a problem with data, naming a cause, conceding complexity, and closing with a claim',
      'Ridiculing opposing views, dismissing the critics, and restating the claim more forcefully',
      'Relying chiefly on personal anecdote, rather than on scientific evidence, to persuade readers',
    ],
    correctAnswer: 1,
    explanation: 'The paragraph establishes the problem with data (sentences 1–2), identifies a cause (3–5), concedes other factors (6–7), and closes with a qualified claim (8). It takes a clear position in its final sentence, so it is not an even-handed survey that declines to choose.',
  },
]
