import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP English Language & Composition — 45 MCQs in 60 minutes.
 * 5 passages × 9 questions each. Passages are original/simulated to avoid copyright.
 *
 * Passages 1–3: Reading (rhetorical analysis of nonfiction).
 * Passages 4–5: Writing (revision/editing of student drafts).
 */

const PASSAGE_1 = `**Passage 1 — Adapted from a 1903 commencement address by an American educator.**

(1) Tonight, as you cross this stage and step into a world you have only glimpsed through textbooks, I would urge you not to mistake the diploma in your hand for an ending. (2) It is, instead, a permission slip — a small paper assurance that you may now begin the longer education that no professor can supervise. (3) The classroom you are leaving was kind to you; it offered the comfort of a syllabus, of clearly marked exits and predictable midterms. (4) The world, I assure you, will offer no such kindness. (5) It will not tell you which chapter to read, nor when to expect the test, and the test, when it comes, will not always be marked. (6) You will be tempted, in this confusion, to grasp for certainty wherever it is offered: in slogans, in the loud opinions of strangers, in the easy comfort of unexamined belief. (7) Resist. (8) The most dangerous person in any room is not the one who knows nothing — that person at least knows that he does not know — but the one who knows a single thing with complete and unshakeable conviction.`

const PASSAGE_2 = `**Passage 2 — Adapted from a contemporary essay on urban design.**

(1) Ask any city planner what makes a sidewalk work, and you will not hear, first, about width or paving material or the spacing of streetlamps. (2) You will hear, first, about people. (3) A sidewalk thrives when it is occupied — densely, irregularly, and at all hours — by the small motions of ordinary life: a vendor unfolding her cart, a parent steering a stroller around an unexpected puddle, a teenager pretending not to notice the teenager across the street. (4) The architect Jane Jacobs called this dance of strangers the "ballet of the good city sidewalk," and it is a peculiar choreography indeed: improvised, repetitive, and yet never quite the same on any two mornings. (5) When planners forget this — when they widen a road for traffic that does not yet exist, or replace a bench with a bollard because someone, somewhere, complained — the sidewalk falls silent. (6) And a silent sidewalk, in a city, is a kind of small bereavement. (7) The block has lost its witness. (8) The cars roll past faster, the storefronts grow shy, and the few remaining pedestrians walk a little quicker, as though they too have begun to suspect that no one is watching.`

const PASSAGE_3 = `**Passage 3 — Adapted from a personal letter (1947) by a journalist to her younger sister.**

(1) Ruth, I am writing this from a hotel room in Geneva that smells faintly of pipe tobacco and disappointment, and I want very much to tell you that the great peace conference is going splendidly. (2) I cannot. (3) The men in the great hall speak in the careful, weightless voice of diplomats, which is to say they speak as if every sentence might one day be quoted against them. (4) Yesterday a delegate from a country I will not name spent forty-three minutes — I timed him — explaining why a single comma in the draft treaty was either an act of profound generosity or a calculated insult, depending entirely upon who was listening. (5) When he sat down he was applauded. (6) I do not know who applauds a comma, but apparently it is the custom here. (7) I think often, in this room, of our father at the kitchen table, settling our disputes with three sentences and a piece of pie. (8) Whatever else the great powers possess, they do not possess our father, and the world is the worse for it.`

const PASSAGE_4 = `**Passage 4 — Student draft on community gardens (early draft for revision).**

(1) Across the United States, community gardens have become very popular in recent years. (2) These are gardens that members of a neighborhood share. (3) People grow vegetables, fruits, and flowers in them. (4) Some gardens are on land that the city owns and others are on private lots that the owner has let the community use. (5) People in the neighborhood get to grow their own food which is healthier and cheaper. (6) Also, neighbors who would otherwise never meet end up working side by side, which builds community. (7) Critics say the gardens take up land that could be used for housing. (8) However, this is not really a fair argument. (9) Cities have many vacant lots and most of them are not being used for housing anyway. (10) Therefore, community gardens should be supported by city governments because they are good.`

const PASSAGE_5 = `**Passage 5 — Student draft on screen time and adolescent sleep (early draft for revision).**

(1) Many studies have shown that adolescents in the United States are not getting enough sleep. (2) The American Academy of Pediatrics recommends that teenagers get between eight and ten hours of sleep per night, but surveys consistently find that the average teenager gets fewer than seven. (3) One major reason for this is the use of personal electronic devices in the hours before bed. (4) The light from screens, particularly in the blue wavelengths, suppresses the production of melatonin, a hormone that helps the body prepare for sleep. (5) In addition, the social and emotional content of phones — text messages, notifications, the constant pull of social media — keeps the brain in a state of alertness that is incompatible with falling asleep quickly. (6) Some critics argue that blaming phones is overly simplistic, and that other factors like early school start times and academic pressure also play a role. (7) These critics have a point. (8) Nevertheless, the evidence linking screen use to delayed sleep onset is strong, and any serious effort to address adolescent sleep deprivation must include a conversation about phones in the bedroom.`

export const MCQS: MCQItem[] = [
  /* ---------------- PASSAGE 1: Commencement address (Q1–Q9) ---------------- */
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_1,
    question: 'The speaker characterizes the diploma primarily as',
    options: [
      'an achievement that should be celebrated as the culmination of years of effort.',
      'a credential that grants the bearer authority over those without one.',
      'a beginning rather than an ending, granting permission for further self-education.',
      'a symbolic object whose practical value is largely overstated by educators.',
    ],
    correctAnswer: 2,
    explanation: 'Sentence 2 explicitly reframes the diploma as "a permission slip — a small paper assurance that you may now begin the longer education." The metaphor establishes the diploma as a beginning, not an ending.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_1,
    question: 'The contrast drawn between the "classroom" (sentence 3) and "the world" (sentences 4–5) primarily functions to',
    options: [
      'praise the rigor of formal schooling at the expense of practical experience.',
      'emphasize the unstructured and unforgiving nature of post-graduation life.',
      'suggest that the speaker himself was poorly served by his own education.',
      'argue that universities should redesign their curricula to mirror real-world conditions.',
    ],
    correctAnswer: 1,
    explanation: 'The classroom offers comfort, syllabi, and predictable exits; the world offers no such kindness, no chapter assignments, and no marked tests. The contrast highlights the unstructured difficulty ahead.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_1,
    question: 'The single-word sentence "Resist." (sentence 7) achieves which rhetorical effect?',
    options: [
      'It softens the urgency of the preceding warning by isolating it from context.',
      'It introduces a new and unrelated topic to redirect the audience\'s attention.',
      'It lends emphatic, command-like force to the warning developed in sentence 6.',
      'It signals a humorous shift in tone meant to relieve the seriousness of the speech.',
    ],
    correctAnswer: 2,
    explanation: 'A bare imperative isolated as a one-word sentence creates emphasis through brevity. It punctuates the warning in sentence 6 with a direct command.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_1,
    question: 'In sentence 8, the speaker draws a contrast in order to argue that',
    options: [
      'ignorance is more dangerous than misplaced certainty.',
      'misplaced certainty is more dangerous than acknowledged ignorance.',
      'all forms of conviction are equally dangerous in public life.',
      'true expertise is impossible to attain in any single field.',
    ],
    correctAnswer: 1,
    explanation: 'The "person who knows nothing" at least knows he does not know; the truly dangerous one is the dogmatist with "complete and unshakeable conviction." Acknowledged ignorance is preferable to false certainty.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_1,
    question: 'The phrase "loud opinions of strangers" (sentence 6) primarily appeals to',
    options: [
      'the audience\'s nostalgia for traditional academic authority.',
      'the audience\'s skepticism of unsolicited and noisy public discourse.',
      'the audience\'s desire to belong to a clearly defined community.',
      'the audience\'s longing for the structure of the classroom.',
    ],
    correctAnswer: 1,
    explanation: 'The diction "loud" and "strangers" carries connotations of unwelcome, noisy intrusion. It primes the audience to view such opinions skeptically as a temptation to be resisted.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_1,
    question: 'The metaphor of a "permission slip" (sentence 2) characterizes the diploma as',
    options: [
      'an authoritative credential that confers expert status.',
      'a modest, almost trivial document whose chief value is what it allows.',
      'a binding contract that obligates the bearer to specific duties.',
      'a sentimental keepsake to be valued primarily for its emotional weight.',
    ],
    correctAnswer: 1,
    explanation: 'A permission slip is a humble, almost childlike document. The metaphor diminishes the diploma\'s grandeur and emphasizes that its value lies in what it permits — further learning — not in itself.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_1,
    question: 'The speaker\'s overall tone in the passage is best described as',
    options: [
      'congratulatory and uncritical.',
      'mournful and resigned.',
      'admonitory yet ultimately encouraging.',
      'detached and academic.',
    ],
    correctAnswer: 2,
    explanation: 'The speaker warns the graduates ("admonitory") about temptations and dangers ahead, but the warning is offered in service of their growth — the speech opens with congratulation and frames its caution as guidance.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_1,
    question: 'Which rhetorical device is most prominent in sentences 3–5?',
    options: [
      'Hyperbole that exaggerates the difficulty of academic life.',
      'Personification that gives the classroom and world human qualities.',
      'Allusion to a specific historical event familiar to the audience.',
      'Understatement that minimizes the speaker\'s own credentials.',
    ],
    correctAnswer: 1,
    explanation: 'The classroom is described as "kind," offering "comfort"; the world will not be kind nor will it "tell you which chapter to read." Both abstractions are given human attributes — personification.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_1,
    question: 'The speaker\'s primary rhetorical purpose in this passage is to',
    options: [
      'persuade graduates to pursue advanced academic degrees.',
      'warn graduates against the seductions of intellectual certainty and urge continued, humble inquiry.',
      'lament the inadequacy of contemporary education.',
      'celebrate the institutions and traditions of formal schooling.',
    ],
    correctAnswer: 1,
    explanation: 'The speech consistently warns against grasping for certainty (sentences 6–8) and reframes education as an ongoing, lifelong project (sentence 2). The two themes together define the rhetorical purpose.',
  },

  /* ---------------- PASSAGE 2: Urban design essay (Q10–Q18) ---------------- */
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_2,
    question: 'The author\'s opening strategy in sentences 1–2 primarily functions to',
    options: [
      'establish the author\'s credentials as a trained urban planner.',
      'subvert reader expectations by foregrounding people rather than infrastructure.',
      'criticize city planners for ignoring the technical specifications of sidewalks.',
      'introduce a historical anecdote that will be developed throughout the essay.',
    ],
    correctAnswer: 1,
    explanation: 'A reader expects an answer about width, materials, or lighting. The author defers and answers, "people." The reversal is a deliberate rhetorical move that reframes the entire essay around human use.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_2,
    question: 'The series of images in sentence 3 ("a vendor unfolding her cart … a teenager pretending not to notice…") primarily serves to',
    options: [
      'document the diversity of professions found in modern cities.',
      'illustrate the small, ordinary, and varied human activities that animate a sidewalk.',
      'argue that adolescents are the most important users of public space.',
      'criticize commercial vendors for cluttering pedestrian walkways.',
    ],
    correctAnswer: 1,
    explanation: 'Each image is a small, mundane action ("unfolding," "steering," "pretending not to notice") of an ordinary person. The catalog enacts the very "small motions of ordinary life" the sentence names.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_2,
    question: 'The allusion to Jane Jacobs in sentence 4 primarily functions to',
    options: [
      'discredit a famous opponent of the author\'s position.',
      'lend authority to the author\'s claim by invoking a respected expert.',
      'introduce an extended biographical sketch of an influential planner.',
      'establish that the author\'s ideas are entirely original.',
    ],
    correctAnswer: 1,
    explanation: 'Jacobs is a canonical voice in urban-planning discourse. Quoting her phrase "ballet of the good city sidewalk" borrows her authority and signals the author\'s position is rooted in established thinking.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_2,
    question: 'The metaphor "ballet of the good city sidewalk" (sentence 4) most directly characterizes pedestrian life as',
    options: [
      'a rigidly choreographed sequence of steps that brooks no improvisation.',
      'an art form that is patterned and graceful yet improvised and ever-changing.',
      'a chaotic and unpredictable disturbance to the order of city streets.',
      'a quaint relic of a pre-automobile era that survives only in nostalgia.',
    ],
    correctAnswer: 1,
    explanation: 'A ballet implies pattern and grace; the immediately following sentence calls the dance "improvised, repetitive, and yet never quite the same." The metaphor captures both order and spontaneity.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_2,
    question: 'The phrase "a kind of small bereavement" (sentence 6) functions primarily to',
    options: [
      'literally describe a death that occurred on the sidewalk.',
      'apply the emotional weight of grief to the loss of a vital street.',
      'soften the criticism of planners by acknowledging their good intentions.',
      'introduce religious imagery that will dominate the rest of the passage.',
    ],
    correctAnswer: 1,
    explanation: '"Bereavement" is the loss of a loved person; applied to a silent sidewalk, the diction borrows the emotional weight of mourning to dramatize what an empty street represents.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_2,
    question: 'The personification of storefronts that "grow shy" (sentence 8) reinforces which idea?',
    options: [
      'That commercial businesses are inherently antisocial.',
      'That a depopulated street produces a self-reinforcing cycle of withdrawal.',
      'That architects intentionally design buildings to discourage interaction.',
      'That sidewalks should be reserved exclusively for residential use.',
    ],
    correctAnswer: 1,
    explanation: 'The shy storefronts, faster cars, and quicker pedestrians together describe a positive feedback loop: emptiness produces more emptiness. The personification dramatizes how absence breeds further absence.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_2,
    question: 'The example of replacing "a bench with a bollard" (sentence 5) is offered as evidence of',
    options: [
      'thoughtful planning informed by community feedback.',
      'small bureaucratic decisions that, in aggregate, drain public space of life.',
      'the technical superiority of modern street furniture.',
      'a deliberate conspiracy among city officials to eliminate pedestrians.',
    ],
    correctAnswer: 1,
    explanation: 'The detail "because someone, somewhere, complained" trivializes the cause and emphasizes the disproportionate effect: a small administrative gesture that nonetheless removes a place to sit and thereby silences the sidewalk.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_2,
    question: 'Across the passage, the author\'s argument depends most heavily on which type of evidence?',
    options: [
      'Quantitative data drawn from peer-reviewed urban-planning studies.',
      'Personal anecdotes from the author\'s own time as a planner.',
      'Concrete sensory imagery and the authority of a named expert.',
      'Historical documents from the founding of major American cities.',
    ],
    correctAnswer: 2,
    explanation: 'There is no statistical evidence; the persuasive force comes from vivid sensory imagery (the parent and stroller, the shy storefronts) reinforced by Jacobs\'s authority. The combination is characteristic of the literary essay form.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_2,
    question: 'The author\'s overall purpose in the passage is best described as',
    options: [
      'to propose specific policy reforms for sidewalk widths.',
      'to argue that the human use of sidewalks should be the central concern of urban design.',
      'to lament that great cities are no longer being built in the United States.',
      'to defend automobile traffic against the encroachment of pedestrian advocates.',
    ],
    correctAnswer: 1,
    explanation: 'The opening reframe (people, not infrastructure) and the closing description of bereavement together argue that human presence — not technical specification — is the proper measure of a sidewalk and, by extension, of design.',
  },

  /* ---------------- PASSAGE 3: Geneva letter (Q19–Q27) ---------------- */
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_3,
    question: 'The detail that the hotel room "smells faintly of pipe tobacco and disappointment" (sentence 1) primarily serves to',
    options: [
      'document a literal odor that pervaded postwar European hotels.',
      'establish through sensory and figurative detail the writer\'s jaded mood.',
      'criticize the hygiene standards of the Geneva hotel industry.',
      'foreshadow a forthcoming description of the hotel\'s renovation.',
    ],
    correctAnswer: 1,
    explanation: 'Pairing a real smell ("pipe tobacco") with an abstract one ("disappointment") is a small synesthetic flourish that establishes mood. The room itself reflects the writer\'s state of mind about the conference.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_3,
    question: 'The two-word sentence "I cannot." (sentence 2) achieves which effect?',
    options: [
      'It introduces an unexpected limitation that contradicts the writer\'s usual cheerfulness.',
      'It abruptly undercuts the polite report the reader expected and signals candor to come.',
      'It expresses uncertainty about whether the writer is qualified to comment on diplomacy.',
      'It politely defers to the authority of the diplomats described later in the passage.',
    ],
    correctAnswer: 1,
    explanation: 'After the conventional opening of sentence 1 ("I want very much to tell you that…"), the bare "I cannot." breaks the politeness pattern. The brevity signals that what follows will be honest rather than diplomatic.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_3,
    question: 'The writer\'s description of diplomatic speech as "careful, weightless" (sentence 3) functions primarily as',
    options: [
      'literal admiration for the precision of trained diplomats.',
      'oxymoronic critique that pairs care with insubstantiality to suggest evasion.',
      'an objective observation drawn from linguistic research.',
      'praise for the tact required to manage international disputes.',
    ],
    correctAnswer: 1,
    explanation: '"Careful" and "weightless" pull in opposite directions: language so guarded against future quotation that it ends up saying nothing. The juxtaposition is the criticism.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_3,
    question: 'The parenthetical "I timed him" (sentence 4) primarily contributes which effect?',
    options: [
      'It establishes the writer\'s credentials as a stenographer.',
      'It injects a dry, sardonic specificity that ridicules the delegate\'s long-windedness.',
      'It provides documentary evidence to be used in the official record.',
      'It signals the writer\'s admiration for the delegate\'s thoroughness.',
    ],
    correctAnswer: 1,
    explanation: 'The aside is unnecessary for the argument but adds a deadpan note: the writer was so unimpressed she literally clocked the speech. The detail is comic and devastating.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_3,
    question: 'The remark "I do not know who applauds a comma, but apparently it is the custom here" (sentence 6) achieves its effect through',
    options: [
      'sincere admiration for European diplomatic protocol.',
      'gentle understatement that lets absurdity speak for itself.',
      'overt insult delivered in formal register.',
      'metaphorical comparison between commas and weapons.',
    ],
    correctAnswer: 1,
    explanation: 'The writer affects polite bemusement ("I do not know," "apparently it is the custom"). The flat tone makes the absurdity of applauding a punctuation mark plain without raising the writer\'s voice — classic understatement.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_3,
    question: 'The image of "our father at the kitchen table, settling our disputes with three sentences and a piece of pie" (sentence 7) functions to',
    options: [
      'argue that international disputes can literally be solved by serving baked goods.',
      'provide a domestic standard against which the bloated diplomacy of Geneva is found wanting.',
      'introduce an unrelated nostalgic anecdote disconnected from the letter\'s theme.',
      'assert the superiority of American family life over European institutions.',
    ],
    correctAnswer: 1,
    explanation: 'The father resolves disputes with three sentences; the delegate spent forty-three minutes on a comma. The juxtaposition is the rhetorical engine: a small domestic image that makes the great hall look ridiculous by contrast.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_3,
    question: 'The closing assertion that "the great powers… do not possess our father, and the world is the worse for it" (sentence 8) is best described as',
    options: [
      'literal lament that the writer\'s father is unavailable for diplomatic service.',
      'figurative claim that the world lacks a model of plain, decisive moral judgment.',
      'criticism of the writer\'s father for refusing to serve internationally.',
      'an apology to Ruth for the writer\'s long absence from home.',
    ],
    correctAnswer: 1,
    explanation: 'The father is being used metonymically: he stands for the qualities of plain speech and moral seriousness that the conference lacks. The writer is mourning the absence of those qualities, not the man himself.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_3,
    question: 'The intimate epistolary form ("Ruth, I am writing this…") shapes the passage\'s rhetoric by',
    options: [
      'requiring strict factual reporting and discouraging personal opinion.',
      'permitting a candor and informality that a public dispatch would not allow.',
      'concealing the writer\'s actual political views from the reader.',
      'limiting the audience to other journalists who share the writer\'s background.',
    ],
    correctAnswer: 1,
    explanation: 'A letter to a sister is a private register. It licenses asides ("I timed him"), domestic comparisons (the father), and frank judgments that a wire-service dispatch would have to suppress.',
  },
  {
    topic: 'rhetorical-analysis',
    stimulus: PASSAGE_3,
    question: 'The writer\'s overall purpose in the passage is best described as',
    options: [
      'to provide an objective transcript of the proceedings of the peace conference.',
      'to persuade Ruth to apply for a position at the Geneva conference.',
      'to express personal disillusionment with the bloated, evasive form of contemporary diplomacy.',
      'to defend the work of diplomats against unfair criticism in the popular press.',
    ],
    correctAnswer: 2,
    explanation: 'The cumulative effect — the disappointed hotel, the weightless speech, the comma applause, the absent father-figure — is one of disillusionment with how the great powers conduct themselves.',
  },

  /* ---------------- PASSAGE 4: Community gardens draft (Q28–Q36) ---------------- */
  {
    topic: 'composition-revision',
    stimulus: PASSAGE_4,
    question: 'The writer wants to combine sentences 2 and 3 to eliminate redundancy. Which of the following is the best revision?',
    options: [
      'These are gardens that members of a neighborhood share, where people grow vegetables, fruits, and flowers.',
      'These are shared gardens where neighborhood members grow vegetables, fruits, and flowers.',
      'They are shared, and people grow vegetables, fruits, and flowers in them.',
      'Members share these gardens with their neighbors, growing vegetables, fruits, and flowers in them.',
    ],
    correctAnswer: 1,
    explanation: 'Option B is the most concise: it eliminates the repetitive "These are" and the wordy "members of a neighborhood" and the dangling "in them." A is wordier; C uses vague pronouns; D introduces awkward phrasing.',
  },
  {
    topic: 'composition-revision',
    stimulus: PASSAGE_4,
    question: 'In sentence 1, the writer wants to replace "have become very popular in recent years" with a more precise phrase. Which revision provides the most useful specificity?',
    options: [
      'have grown enormously popular in recent years.',
      'have more than doubled in number since 2010, growing from roughly 10,000 to over 25,000 today.',
      'are something that everyone seems to be talking about lately.',
      'have started to attract a great deal of public attention.',
    ],
    correctAnswer: 1,
    explanation: 'AP Lang composition questions reward concrete, quantifiable evidence. B replaces the vague intensifier "very popular" with specific figures and a date range, sharpening the claim.',
  },
  {
    topic: 'composition-revision',
    stimulus: PASSAGE_4,
    question: 'The writer wants to add a transition word at the beginning of sentence 6 to clarify its relationship to sentence 5. Which is most appropriate?',
    options: [
      'However,',
      'Beyond the obvious nutritional benefits,',
      'In contrast,',
      'For example,',
    ],
    correctAnswer: 1,
    explanation: 'Sentence 5 covers nutrition (food); sentence 6 introduces a separate, social benefit (community). "Beyond the obvious nutritional benefits" signals the move from one type of benefit to another. "However" and "In contrast" wrongly imply opposition; "For example" wrongly implies illustration.',
  },
  {
    topic: 'composition-revision',
    stimulus: PASSAGE_4,
    question: 'In sentence 9, the phrase "most of them are not being used for housing anyway" weakens the writer\'s argument. Which revision strengthens it most?',
    options: [
      'most of them have remained vacant for over a decade because they are too small or oddly shaped to support housing development.',
      'most of them are not really good for anything else, in the writer\'s opinion.',
      'most of them might possibly be used for housing someday in the future.',
      'most of them are owned by people who would rather see gardens.',
    ],
    correctAnswer: 0,
    explanation: 'The original is a vague, unsupported assertion. Option A supplies concrete reasons (decade-long vacancy, unsuitable lot dimensions) that explain WHY the lots are not housing-suitable, converting an opinion into a defensible claim.',
  },
  {
    topic: 'composition-revision',
    stimulus: PASSAGE_4,
    question: 'Sentence 10 ends with the phrase "because they are good." The writer revises it to provide a more substantive conclusion. Which revision is best?',
    options: [
      'because they are good for everyone.',
      'because they are nice and have a lot of benefits for people.',
      'because they convert under-used land into healthier food, stronger neighborhoods, and shared civic space — at minimal public cost.',
      'because they are pretty and people seem to enjoy them in the summertime.',
    ],
    correctAnswer: 2,
    explanation: 'A conclusion should crystallize the essay\'s claims. C synthesizes all three of the writer\'s earlier points (food, community, vacant land) into a single, specific final sentence; the others restate "good" in equally vague language.',
  },
  {
    topic: 'composition-revision',
    stimulus: PASSAGE_4,
    question: 'The writer is considering adding the following sentence after sentence 4: "A 2019 USDA survey identified more than 29,000 community gardens in the 100 largest U.S. cities alone." Should the writer add this sentence?',
    options: [
      'Yes, because it provides authoritative, specific evidence for the claim that community gardens have grown in number.',
      'Yes, because it shifts the focus of the essay away from the gardens themselves.',
      'No, because the essay should avoid statistics that might confuse readers.',
      'No, because the sentence belongs in the conclusion rather than the introduction.',
    ],
    correctAnswer: 0,
    explanation: 'Citing a federal agency by year and figure adds concrete authority to a paragraph that is otherwise heavy on vague generalization. AP Lang revision questions consistently favor adding such evidence early.',
  },
  {
    topic: 'composition-revision',
    stimulus: PASSAGE_4,
    question: 'Which revision of sentence 5 best maintains a formal, academic register?',
    options: [
      'People in the neighborhood get to grow their own food which is healthier and cheaper.',
      'Residents can grow fresh produce more cheaply than they could buy it at a supermarket, an especially valuable benefit in low-income neighborhoods.',
      'Folks who live nearby get to garden their own grub, which is way better and cheaper.',
      'Neighborhood people are able to grow stuff that is more healthy and not as expensive.',
    ],
    correctAnswer: 1,
    explanation: 'B uses precise diction ("Residents," "fresh produce," "low-income neighborhoods") and adds a specific qualifier. The others are conversational ("get to," "folks," "stuff") or imprecise ("more healthy").',
  },
  {
    topic: 'composition-revision',
    stimulus: PASSAGE_4,
    question: 'In sentence 8, the writer wants to acknowledge the critics\' concern more substantively before refuting it. Which revision is most effective?',
    options: [
      'However, this is not really a fair argument.',
      'However, this concern is silly and should be dismissed.',
      'This concern is understandable, particularly in cities facing acute housing shortages, but it overstates the conflict between the two uses.',
      'However, the writer disagrees with this argument very strongly.',
    ],
    correctAnswer: 2,
    explanation: 'C concedes ("understandable," with a specific reason) before pivoting to refute. This pattern — concede, then qualify — is the rhetorical move AP Lang rewards. A and D dismiss without engaging; B is overtly hostile.',
  },
  {
    topic: 'composition-revision',
    stimulus: PASSAGE_4,
    question: 'Which of the following best describes the primary weakness of the draft as a whole?',
    options: [
      'It relies excessively on direct quotations from outside sources.',
      'It uses a tone that is too informal and emotional for an academic argument.',
      'It makes broad claims without supplying specific evidence to support them.',
      'It is too narrowly focused on a single city\'s community gardens.',
    ],
    correctAnswer: 2,
    explanation: 'The draft repeatedly asserts ("very popular," "healthier and cheaper," "good") without supplying figures, examples, or studies. The most useful revisions across the passage all involve adding specific, concrete evidence.',
  },

  /* ---------------- PASSAGE 5: Adolescent sleep draft (Q37–Q45) ---------------- */
  {
    topic: 'composition-revision',
    stimulus: PASSAGE_5,
    question: 'In sentence 1, the writer is considering revising "Many studies have shown that adolescents in the United States are not getting enough sleep" to be more direct. Which revision is best?',
    options: [
      'It is the case that adolescents in the United States, according to many studies, do not get enough sleep.',
      'American adolescents are chronically sleep-deprived.',
      'Many studies have indicated, in various ways, that perhaps American adolescents may not be sleeping sufficiently.',
      'Adolescents in the United States, the studies have shown, do not get enough sleep, many studies say.',
    ],
    correctAnswer: 1,
    explanation: 'B replaces the verbose, hedged construction with a direct claim that names the subject ("American adolescents") and the condition ("chronically sleep-deprived"). The other options add wordiness or hedging.',
  },
  {
    topic: 'composition-revision',
    stimulus: PASSAGE_5,
    question: 'The writer wants to add a citation to sentence 2 to strengthen the credibility of the survey data. Which addition is most effective?',
    options: [
      'a survey from a major source.',
      'a 2022 CDC Youth Risk Behavior Survey of more than 17,000 high-school students.',
      'a survey that some people have done in the past.',
      'one of the many surveys that have been conducted on this issue over the years.',
    ],
    correctAnswer: 1,
    explanation: 'B names the agency, year, instrument, and sample size — the four marks of a credible citation. AP Lang revision rewards converting vague references ("a survey") into specific, verifiable ones.',
  },
  {
    topic: 'composition-revision',
    stimulus: PASSAGE_5,
    question: 'In sentence 4, the writer wants to clarify the technical claim for a general audience. Which revision is best?',
    options: [
      'The light from screens, particularly in the blue wavelengths, suppresses the production of melatonin, a hormone that helps the body prepare for sleep.',
      'Screens emit photons in various frequencies that interact with photoreceptive ganglion cells in the retina, modulating circadian rhythm.',
      'Screen light is bad for sleep.',
      'Light from devices makes it harder to sleep, somehow.',
    ],
    correctAnswer: 0,
    explanation: 'A (the original) already strikes the right balance: technical enough to be credible (melatonin, blue wavelengths), accessible enough for a general reader. B is over-jargoned; C and D underspecify.',
  },
  {
    topic: 'composition-revision',
    stimulus: PASSAGE_5,
    question: 'The writer is considering deleting sentence 7 ("These critics have a point."). Should the writer keep it?',
    options: [
      'Delete it, because it weakens the writer\'s argument by conceding ground unnecessarily.',
      'Keep it, because acknowledging the critics\' point strengthens the writer\'s ethos before the qualifying "Nevertheless."',
      'Delete it, because it is too short to function as a complete paragraph transition.',
      'Keep it, because it introduces a new piece of evidence that the writer will develop.',
    ],
    correctAnswer: 1,
    explanation: 'A short concession ("These critics have a point") followed by "Nevertheless" is a textbook rhetorical move: it demonstrates fairness, then pivots back to the writer\'s position. Removing it makes the writer seem dismissive.',
  },
  {
    topic: 'composition-revision',
    stimulus: PASSAGE_5,
    question: 'In sentence 5, the writer wants to make the description of phone use more vivid and specific. Which revision is best?',
    options: [
      'In addition, the social and emotional content of phones — text messages, notifications, the constant pull of social media — keeps the brain in a state of alertness that is incompatible with falling asleep quickly.',
      'In addition, the things on phones keep the brain awake.',
      'In addition, phone usage causes brain alertness in adolescent populations.',
      'In addition, looking at phones is, in many cases, a contributor to wakefulness.',
    ],
    correctAnswer: 0,
    explanation: 'The original (A) is already the most vivid: the dash-set list ("text messages, notifications, the constant pull of social media") supplies specific examples. The alternatives strip away the imagery.',
  },
  {
    topic: 'composition-revision',
    stimulus: PASSAGE_5,
    question: 'The writer wants to add a transition between sentence 5 and sentence 6 that signals a turn to opposing viewpoints. Which is most effective?',
    options: [
      'Furthermore,',
      'Of course, the picture is not so simple.',
      'In conclusion,',
      'For instance,',
    ],
    correctAnswer: 1,
    explanation: 'Sentence 6 introduces critics. "Of course, the picture is not so simple" anticipates and invites the counter-position, modeling intellectual honesty. The other options either reinforce ("Furthermore"), conclude, or illustrate — none introduce opposition.',
  },
  {
    topic: 'composition-revision',
    stimulus: PASSAGE_5,
    question: 'Which revision of sentence 8 most effectively closes the paragraph by translating the argument into a recommendation?',
    options: [
      'Nevertheless, the evidence linking screen use to delayed sleep onset is strong, and any serious effort to address adolescent sleep deprivation must include a conversation about phones in the bedroom.',
      'In summary, this is a complicated issue with many factors at play.',
      'Therefore, parents and policymakers should consider screen-free bedtime routines and policies that delay phone use until after lights-out — without pretending such measures will solve the problem alone.',
      'In conclusion, screens are bad and adolescents should not look at them.',
    ],
    correctAnswer: 2,
    explanation: 'C builds on the original\'s argument and converts it into a concrete, actionable recommendation while preserving the qualifying clause that prevents overclaim. A is the unchanged original; B retreats into vagueness; D oversimplifies.',
  },
  {
    topic: 'composition-revision',
    stimulus: PASSAGE_5,
    question: 'Which of the following best describes the writer\'s overall rhetorical strategy in this paragraph?',
    options: [
      'Ridiculing opposing viewpoints in order to dismiss them quickly.',
      'Establishing a problem with credible data, identifying a major cause, conceding nuance, and arriving at a qualified recommendation.',
      'Relying entirely on personal anecdotes rather than scientific evidence.',
      'Offering a balanced presentation in which no clear position is taken.',
    ],
    correctAnswer: 1,
    explanation: 'The structure is: (1) establish the problem with data (sentences 1–2), (2) name a cause (3–5), (3) concede (6–7), (4) recommend with qualification (8). This is the canonical AP Lang argumentative paragraph shape.',
  },
  {
    topic: 'composition-revision',
    stimulus: PASSAGE_5,
    question: 'The writer wants to add a sentence after sentence 4 that helps a general reader understand the consequence of suppressed melatonin. Which addition is best?',
    options: [
      'Melatonin is sometimes available as a dietary supplement.',
      'When melatonin levels stay low, the body delays its natural transition to sleep, making it harder to fall asleep at the intended bedtime.',
      'Many adolescents like to use their phones before bed because it is enjoyable.',
      'Blue light is a wavelength that ranges from approximately 380 to 500 nanometers.',
    ],
    correctAnswer: 1,
    explanation: 'The added sentence should bridge the technical claim (melatonin suppression) and the practical consequence (delayed sleep). B does exactly this in plain language. The others are tangential or off-topic.',
  },
]
