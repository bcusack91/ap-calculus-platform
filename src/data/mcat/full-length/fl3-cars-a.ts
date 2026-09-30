import type { MCATPassage } from '../types'

/**
 * MCAT Full-Length Form 3 — CARS, file A (passages 1–5, 6 questions each).
 *
 * Five original argument-driven passages (500–600 words) across humanities and
 * social-science genres: art / aesthetics (photography and truth), economics
 * (app-based work and what counts as employment), literary criticism (poetry
 * in translation), history / historiography (monuments and public memory), and
 * philosophy (solitude and society, in a mid-nineteenth-century essayist
 * voice). Every key is derivable from the passage alone; no outside knowledge
 * is needed.
 */
export const FL3_CARS_A_PASSAGES: MCATPassage[] = [
  {
    id: 'fl3-cars-a-01',
    section: 'cars',
    discipline: 'art / aesthetics',
    title: 'The Frame and the Fact',
    passageText:
      'There is an old and comforting idea that a photograph, unlike a painting, cannot lie, because it is not made but taken. The painter decides where every line goes; the camera merely receives the light that the world sends it. On this view the photograph is less a picture than a trace, related to its subject the way a footprint is related to a foot. It may be blurred or badly lit, but it cannot show a foot that was never there.\n\nI do not think this idea is false so much as incomplete, and its incompleteness has made us poor readers of photographs. The trace is real, but it is only the raw material. Before any light reaches the film, someone has chosen where to stand, which way to point, what to leave outside the edge of the frame, and which of the ten thousand instants of an afternoon to keep. None of these choices adds anything false to the image. Each of them, however, subtracts, and what is subtracted is as much a part of the photograph’s meaning as what remains. A crowd photographed from its thin edge looks sparse; the same crowd photographed from a rooftop looks like a sea. Both pictures are traces. Neither is neutral.\n\nThe defender of the trace will say that this merely shows that photographs can be misleading, as any evidence can, and that the remedy is more photographs, not a new theory of them. But the difficulty is not occasional. Every photograph excludes almost everything, and it does so silently: the frame does not announce itself as a choice. A painting wears its making openly; no one mistakes a portrait for the sitter. A photograph conceals its making behind its accuracy, and so it persuades while appearing only to report. That is what I mean when I say that a photograph argues. It makes a claim—this is what the scene was like—and it supports that claim with the one kind of evidence we find hardest to question, because the evidence is the scene itself, or a piece of it.\n\nTo say that photographs argue is not to say that they lie. Arguments can be sound. The picture of the sparse crowd may be the fair one, if the rooftop view flattered a gathering made up mostly of passersby on their way elsewhere. The point is that the question of fairness cannot be settled by pointing to the trace. It has to be settled the way we settle any claim: by asking who made it, what they wanted us to conclude, and what else we would need to see before we agreed.\n\nThis is a harder way of looking, and it costs us something. We lose the relief of believing that here, at least, is an image that asks nothing of our judgment. But the relief was always paid for by someone—usually by whoever stood just outside the frame. The photographer who shows a hungry child and not the aid truck parked beside her has told us something true and withheld something true, and the choice between them was hers. We honor photographs more, not less, when we treat them as testimony rather than as windows: as statements by a witness who was present, whose presence we value precisely because it was a presence—located, partial, and answerable for what it chose to see.',
    questions: [
      {
        question: 'Which of the following best captures the author’s central thesis?',
        options: [
          'Photographs are no more reliable than paintings, since both are made by an artist rather than taken.',
          'Because photographs can mislead, viewers should trust only images confirmed by other photographs.',
          'A photograph’s genuine link to its subject does not make it neutral, so it must be weighed as a claim.',
          'The idea that a photograph is a physical trace of its subject is false and ought to be abandoned.',
        ],
        correctAnswer: 2,
        explanation:
          'The author accepts that the trace is real but insists that framing and selection make every photograph a claim to be judged “the way we settle any claim.” The paintings option contradicts the author’s acceptance that the camera really does receive light from the scene; photographs differ from paintings in concealing their making. The confirmation option is the defender’s remedy (“more photographs”), which the author rejects because every photograph excludes almost everything. The false-and-abandoned option overstates the author, who calls the trace idea “not … false so much as incomplete.”',
        skill: 'main-idea',
      },
      {
        question: 'The author’s example of a crowd photographed from its edge and from a rooftop primarily serves to:',
        options: [
          'show that two images, each a genuine trace, can support opposite impressions of the same scene.',
          'demonstrate that aerial photographs are generally more accurate than those taken at ground level.',
          'suggest that crowds are harder to photograph fairly than most other subjects.',
          'illustrate the kind of outright falsification that the author says photographs almost never contain.',
        ],
        correctAnswer: 0,
        explanation:
          'The example follows the claim that framing choices subtract without adding anything false, and it ends “Both pictures are traces. Neither is neutral”: two faithful images yield a sparse crowd and a sea. The aerial-accuracy option is contradicted by the fourth paragraph, where the street-level picture may be the fair one. The crowds-are-harder option generalizes from a single illustration the author uses for all photographs. The falsification option inverts the point: the example shows how an image can mislead without any falsification at all.',
        skill: 'function',
      },
      {
        question: 'The author’s claim that a photograph “persuades while appearing only to report” relies most on which of the following assumptions?',
        options: [
          'Most photographers intend to mislead the people who will eventually see their pictures.',
          'Paintings of a scene generally persuade viewers more effectively than photographs of it.',
          'Viewers understand more about how photographs are made than about how paintings are made.',
          'People scrutinize evidence less when they do not see it as having been selected.',
        ],
        correctAnswer: 3,
        explanation:
          'The author reasons from “the frame does not announce itself as a choice” to “it persuades”; that step holds only if evidence not perceived as selected escapes the scrutiny a recognized argument would receive. The intent-to-mislead option is unneeded — the author says arguments “can be sound” and choices add “nothing false.” The paintings-persuade-more option runs against the argument, which gives photographs the more persuasive position. The viewers-understand-more option reverses the contrast: paintings wear their making openly, while photographs conceal theirs.',
        skill: 'assumption',
      },
      {
        question: 'Suppose a news agency required every published photograph to be accompanied by a second photograph of the same scene taken from a different position. The author would most likely regard this rule as:',
        options: [
          'unnecessary, since a single photograph is already a trustworthy trace of its subject.',
          'helpful but insufficient, because both images would still embody choices that call for judgment.',
          'a complete remedy, since two traces taken together would leave nothing of the scene excluded.',
          'counterproductive, since pairs of images would encourage viewers to treat photographs as testimony.',
        ],
        correctAnswer: 1,
        explanation:
          'A second angle supplies some of “what else we would need to see,” but the author holds that every photograph “excludes almost everything,” so two images remain selections whose fairness must still be judged. The unnecessary option adopts the trace view the author calls incomplete. The complete-remedy option is the defender’s “more photographs” answer, which the author says misses a difficulty that is “not occasional.” The counterproductive option misreads the passage, which recommends treating photographs as testimony.',
        skill: 'application',
      },
      {
        question: 'The author’s attitude toward the view that a photograph is a trace of its subject is best described as:',
        options: [
          'qualified acceptance: the view is correct as far as it goes but misleads when taken as complete.',
          'outright rejection: the view rests on a mistaken understanding of how a camera records light.',
          'enthusiastic endorsement: the view explains why photographs deserve more of our trust than paintings.',
          'indifference: the view has no bearing on whether a particular photograph is fair or unfair.',
        ],
        correctAnswer: 0,
        explanation:
          'The author grants that “the trace is real” but calls the idea incomplete, the source of poor reading when treated as the whole story — qualified acceptance. Outright rejection ignores that concession; the author never disputes how a camera works. Enthusiastic endorsement contradicts the argument that photographs deserve scrutiny, not extra trust. Indifference misses that the author engages the view throughout and argues that pointing to the trace cannot settle fairness — a claim about the view’s limits, not its irrelevance.',
        skill: 'tone',
      },
      {
        question: 'Which of the following findings, if true, would most weaken the author’s argument?',
        options: [
          'Photographs taken from elevated positions are published more often than street-level ones.',
          'Photographers usually take dozens of pictures of an event before choosing one for publication.',
          'Viewers shown a news photograph routinely ask what was left outside its frame.',
          'Many professional photographers say that they try to frame their scenes so as to represent them fairly.',
        ],
        correctAnswer: 2,
        explanation:
          'The argument depends on viewers not registering the frame as a choice, so that photographs persuade “while appearing only to report”; if viewers routinely question what the frame excluded, that premise fails. The elevated-positions option does not bear on whether viewers notice selection. The dozens-of-pictures option strengthens the argument by showing how much choosing precedes publication. The fair-framing option is compatible with the author, who says arguments “can be sound” and that the question is how to judge fairness, not whether photographers intend it.',
        skill: 'strengthen-weaken',
      },
    ],
  },
  {
    id: 'fl3-cars-a-02',
    section: 'cars',
    discipline: 'economics',
    title: 'Freedom Over When',
    passageText:
      'When a person delivers groceries by way of an app, is she working? The question sounds absurd—of course she is working; she is carrying bags up stairs—but the law in many places has answered it with a careful no, or at least a not quite. She is not an employee of the company that runs the app. She is an independent contractor, a small business of one, who happens to have found her customers through a piece of software. The company, on this account, no more employs its drivers than a telephone directory employs the plumbers listed in it.\n\nThe defense of this arrangement rests on a real feature of the work: its flexibility. The driver chooses when to log on and when to log off. No manager sets her schedule or reprimands her for leaving early. For a student, a parent, or someone between jobs, the ability to earn in the gaps of a life is genuinely valuable, and the platforms are right to say that the traditional job did not offer it. If the price of that flexibility is the loss of the protections that come with employment, the argument goes, it is a price that workers have freely chosen to pay.\n\nI think this argument mistakes the dimension along which control has moved. The old test of employment asked whether someone else directed how the work was done: whether a supervisor told you which tasks to do, in what order, at what pace. The platforms have indeed removed the supervisor. But they have not removed direction; they have automated it. The app decides which orders the driver is offered and what each will pay. It sets the price the customer is charged and keeps the difference. It measures how often the driver accepts the orders she is shown and how her customers rate her, and it may cut her off—“deactivate” her, in the industry’s gentle word—when those numbers fall. A person who can choose her hours but not her rates, her assignments, or the standards by which she is judged has been given freedom over when, and denied it over nearly everything else.\n\nNor is the comparison with independent tradespeople as flattering as it looks. A plumber listed in a directory sets his own prices, turns down jobs he dislikes without penalty, and builds a reputation that belongs to him and travels with him. The driver can do none of these things. Her ratings live on the company’s servers; if she leaves, her history stays behind. What she has built, she has built for someone else.\n\nNone of this requires denying that flexibility matters. It requires only noticing that flexibility over timing and independence in the economic sense are different goods, and that the first has been offered as though it were the second. Whether we call these workers employees or invent some new category for them, their classification should follow the question the old test was really asking: who sets the terms? By that measure, the driver is working, and she is working for the company. The label “gig,” with its suggestion of something occasional and freely chosen, describes her schedule. It does not describe her position.',
    questions: [
      {
        question: 'The author’s primary purpose in the passage is to:',
        options: [
          'defend the flexibility of app-based work against critics who would impose fixed, traditional schedules on it.',
          'argue that app-based workers should be classified according to who controls the terms of their work.',
          'show that app-based drivers earn less than workers who hold comparable traditional jobs.',
          'propose a new legal category to replace both employment and independent contracting.',
        ],
        correctAnswer: 1,
        explanation:
          'The author grants the value of flexibility but argues that classification “should follow the question … who sets the terms?” and concludes the driver works for the company. The defend-flexibility option describes the platforms’ position, which the author answers rather than advances. The earnings option introduces a comparison the passage never makes. The new-category option misreads “Whether we call these workers employees or invent some new category”: the author is indifferent to the label so long as the terms test governs.',
        skill: 'main-idea',
      },
      {
        question: 'The author distinguishes the app-based driver from the plumber listed in a directory in all of the following ways EXCEPT:',
        options: [
          'the driver cannot set the prices that are charged for her work.',
          'the driver risks losing access to work if she declines too many jobs.',
          'the driver’s reputation does not accompany her when she leaves.',
          'the driver obtains her customers by way of an intermediary that lists her.',
        ],
        correctAnswer: 3,
        explanation:
          'Finding customers through an intermediary is what the driver and the plumber have in common — the telephone directory is itself an intermediary — so it is not a point of difference. The author does contrast the plumber, who “sets his own prices,” with a driver whose pay the app decides; the plumber turns down jobs “without penalty,” while the app tracks how often the driver accepts orders and may deactivate her; and the plumber’s reputation travels with him, while the driver’s “history stays behind.”',
        skill: 'detail',
      },
      {
        question: 'The author calls “deactivate” “the industry’s gentle word” most likely in order to:',
        options: [
          'suggest that the term softens what amounts to being dismissed from work.',
          'praise the platforms for treating workers more gently than employers do.',
          'indicate that deactivation is a rare and temporary measure.',
          'show that the author has adopted the platforms’ own terminology.',
        ],
        correctAnswer: 0,
        explanation:
          'The remark appears where the author is showing that the app exercises an employer’s powers, including cutting a worker off; calling the word “gentle” implies it cushions a harsher reality — losing one’s work. The praise option misreads an ironic phrase as a compliment. The rare-and-temporary option has no support; the passage says deactivation follows whenever the numbers fall. The adopted-terminology option ignores the distancing quotation marks and the qualifier, which mark the word as the industry’s, not the author’s.',
        skill: 'function',
      },
      {
        question: 'Which of the following workers would the author most likely regard as independent in the economic sense?',
        options: [
          'A warehouse worker who chooses her own shifts from a schedule that an algorithm posts each week',
          'A driver whose app sets every fare but lets him refuse rides without any effect on his standing',
          'A tutor who sets her own rates and keeps her client list when she changes agencies',
          'A courier who is paid according to customer ratings that he may see but may not dispute',
        ],
        correctAnswer: 2,
        explanation:
          'The author measures independence by “who sets the terms,” citing control of prices, freedom to decline work, and a reputation that travels; the tutor who sets her rates and keeps her clients has these. The warehouse worker has only freedom over when, which the author distinguishes from economic independence. The driver who may refuse rides still has every fare set by the app. The courier is judged by standards he cannot contest, one of the controls the author says marks the driver as working for the company.',
        skill: 'application',
      },
      {
        question: 'Which of the following, if true, would most challenge the author’s contention about who controls app-based work?',
        options: [
          'Many drivers use the app only a few hours a week, to supplement income from other jobs.',
          'Customers tend to rate delivery drivers more harshly than they rate other service workers.',
          'Most drivers report that they value the ability to choose their own hours very highly.',
          'On most platforms, drivers set their own prices and may decline any order without effect on their standing.',
        ],
        correctAnswer: 3,
        explanation:
          'The author’s case rests on the app deciding pay and penalizing refusals; if drivers set their own prices and could decline freely, the terms would be theirs and the directory comparison would hold. The part-time option bears only on the schedule, which the author says the label “gig” does describe. The harsh-ratings option leaves untouched the question of who sets the standards. The value-of-hours option restates a point the author concedes (“None of this requires denying that flexibility matters”).',
        skill: 'strengthen-weaken',
      },
      {
        question: 'Suppose a platform began letting drivers export their ratings and display them on competing apps. The author would most likely view this change as:',
        options: [
          'irrelevant, since ratings have no bearing on whether a driver is economically independent.',
          'a real but partial step toward independence, since drivers would own something they build.',
          'decisive evidence that drivers had become independent contractors in the full economic sense.',
          'harmful to drivers, since their records would then be visible to more companies.',
        ],
        correctAnswer: 1,
        explanation:
          'A portable reputation is one of the three marks of independence the author assigns to the plumber, so the change would remove one grievance (“What she has built, she has built for someone else”) while leaving prices and assignments with the app. The irrelevant option contradicts the author’s use of reputation as a criterion. The decisive-evidence option ignores that the app would still set rates and assignments. The harmful option introduces a concern about exposure the passage never raises.',
        skill: 'new-information',
      },
    ],
  },
  {
    id: 'fl3-cars-a-03',
    section: 'cars',
    discipline: 'literary criticism',
    title: 'The Signpost at the Fork',
    passageText:
      'It is often said that poetry is what gets lost in translation, and the saying has the ring of something so obviously true that it hardly needs defending. A poem, unlike a set of instructions, is not separable from its words. Its meaning lives in the length of its vowels, the knock of its consonants, the way a line breaks just before a word the reader did not see coming. Change the words and you have changed the poem; change the language and you have, it seems, written another poem altogether, one that merely shares a subject with the first.\n\nI accept every premise of this argument and reject its tone. Something is certainly lost. The sound of the original cannot be carried across, and the translator who pretends otherwise, who strains to reproduce a rhyme scheme at the expense of sense, usually loses both. But the lament treats the original poem as a finished object and the translation as a damaged copy of it, and this is not how poems exist. A poem exists in its readings, and every reader makes choices that the text does not make for her. Does a word mean “still” in the sense of “motionless” or in the sense of “even now”? The original may hold both meanings in suspension, and a reader in the original language may never notice that she has chosen one.\n\nThe translator cannot avoid noticing. She may have no single word in her own language that holds both senses, and so she must decide, and her decision is written down where anyone can see it. This is the first thing that translation gains: it makes a reading visible. The ambiguity that the native reader passed over becomes, in the translation, a fork in the road with a signpost at it. Set two translations of the same poem side by side and you have something that the original alone could never give you—a record of the places where the poem could go two ways, and evidence of what two careful readers found there.\n\nThe second gain is subtler. A poem carried into a new language meets words that carry their own histories, and some of those histories will enlarge it. The translator’s word for “harvest” may have, in her language, an echo of a festival or a funeral that the original word lacked, and a reader who hears that echo is hearing something the poet did not put there. Purists call this distortion. I would call it the poem continuing to live, which is what we want poems to do. No one complains that a play staged three centuries after its writing means things its author could not have intended; we call that the play’s vitality.\n\nThe honest description of a translated poem, then, is neither “the original, damaged” nor “a new poem on an old subject.” It is an argument about the original, conducted in another language, and like any good argument it shows us something about its subject that we would not have seen had no one made it. We should read translations as we read criticism—never as a substitute for the thing itself, but as one of the ways that thing becomes more fully known.',
    questions: [
      {
        question: 'The author’s disagreement with the familiar saying about poetry and translation is directed chiefly at:',
        options: [
          'its view of the original as complete before anyone reads it.',
          'its claim that the sound of a poem cannot survive a change of language.',
          'its assumption that a poem’s meaning cannot be separated from the words of the poem.',
          'its failure to see that rhyme can be reproduced in translation with enough effort.',
        ],
        correctAnswer: 0,
        explanation:
          'The author “accept[s] every premise” but objects that the lament pictures the original as a finished object, whereas “a poem exists in its readings” — so the target is the idea that the poem is complete apart from its readers. The sound option and the inseparability option are premises the author explicitly accepts. The rhyme option contradicts the author, who says the translator who strains after a rhyme scheme “usually loses both” sound and sense.',
        skill: 'detail',
      },
      {
        question: 'The author’s discussion of a word that could mean “motionless” or “even now” functions mainly to:',
        options: [
          'show that translators frequently misunderstand the poems they have undertaken to translate.',
          'establish that a poem in its original language has only one correct meaning.',
          'illustrate how a reader of the original may settle an ambiguity without realizing it.',
          'argue that poets who hope to be translated should avoid using ambiguous words.',
        ],
        correctAnswer: 2,
        explanation:
          'The example sets up the contrast on which the first gain depends: the native reader may choose between two senses without noticing, while the translator is forced to choose visibly. The misunderstanding option has no support; the passage treats the translator’s choice as a reading, not an error. The one-correct-meaning option reverses the point that the original may “hold both meanings in suspension.” The avoid-ambiguity option offers advice the author never gives and that runs against the author’s valuing of ambiguity made visible.',
        skill: 'function',
      },
      {
        question: 'Based on the passage, which of the following would the author most likely consider the most valuable resource for a reader who cannot read a poem’s original language?',
        options: [
          'A single translation that reproduces the original’s rhyme scheme as closely as possible',
          'Several translations of the poem, read together with close attention to the places where they diverge',
          'A prose paraphrase that states the poem’s subject without attempting to imitate its form',
          'A recording of the poem read aloud in its original language by a native speaker',
        ],
        correctAnswer: 1,
        explanation:
          'The author says that translations set side by side give “something that the original alone could never give you” — a record of where the poem could go two ways — and that translations should be read as criticism; comparing several applies both claims. The rhyme option describes the strategy the author says usually loses sound and sense. The paraphrase option reduces the poem to its subject, the thin view of translation the author rejects. The recording option preserves sound but gives a non-speaker none of the readings the author values.',
        skill: 'application',
      },
      {
        question: 'The author’s claim that the echo of a festival or funeral represents “the poem continuing to live” depends on the assumption that:',
        options: [
          'most poets intend their work to be translated into other languages.',
          'the translator’s language is inherently richer in meaning than the original language of the poem.',
          'readers of a translation can usually tell which of its echoes the poet intended.',
          'meanings a work acquires beyond its author’s intention can legitimately belong to it.',
        ],
        correctAnswer: 3,
        explanation:
          'The echo is “something the poet did not put there,” so calling it the poem’s life rather than distortion requires that unintended meanings can rightly count as part of a work — the same premise behind the play’s “vitality.” The intention-to-be-translated option is unnecessary, since the argument explicitly concerns what the poet did not intend. The inherently-richer option overstates: the author says only that some histories will enlarge the poem. The readers-can-tell option is irrelevant, because the author’s point holds even if readers cannot separate intended from acquired echoes.',
        skill: 'assumption',
      },
      {
        question: 'Which of the following, if true, would most weaken the author’s account of the first thing translation gains?',
        options: [
          'Several poets are known to have revised their own poems after reading translations of them.',
          'Native readers of a poem often disagree with one another about what its key words mean.',
          'Translators can usually find words that keep the original’s double meanings intact.',
          'Translations of the same poem made in the same decade tend to differ widely in wording.',
        ],
        correctAnswer: 2,
        explanation:
          'The first gain depends on the translator being forced to choose because her language lacks a word holding both senses; if such words are usually available, the ambiguity can be carried over and no reading is made visible. The revising-poets option is at most consistent with the author’s view that translations illuminate originals. The disagreement option supports the claim that readers make choices the text does not make. The differing-translations option supports the value of comparing translations to see where they diverge.',
        skill: 'strengthen-weaken',
      },
      {
        question: 'The author’s reference to a play staged three centuries after it was written suggests that the author:',
        options: [
          'regards the passage of time and the change of language as comparable ways a work gains meaning.',
          'believes that plays are easier to translate than poems because they are meant for performance.',
          'thinks that modern productions of old plays usually distort what their authors intended.',
          'holds that translations should be read aloud if they are to preserve anything of the original’s sound.',
        ],
        correctAnswer: 0,
        explanation:
          'The author uses the play to argue that the purists’ complaint is inconsistent: we welcome new meanings acquired over time, so we should welcome those acquired in a new language. The easier-to-translate option misreads the example, which is about time, not translation. The distortion option reverses the author, who calls such meanings “vitality.” The read-aloud option contradicts the author’s concession that the sound of the original “cannot be carried across.”',
        skill: 'inference',
      },
    ],
  },
  {
    id: 'fl3-cars-a-04',
    section: 'cars',
    discipline: 'history / historiography',
    title: 'The Empty Pedestal',
    passageText:
      'Whenever a city proposes to take down a statue, someone objects that it is erasing history. The objection deserves a better answer than it usually gets, because it contains a real confusion and a real insight, and the two are so tangled that both sides tend to argue past them.\n\nThe confusion is about what a monument is. A bronze general on a granite base is not a piece of the war in which he fought. It is a piece of the decade in which the bronze was cast, and it records what the people of that decade—or, more precisely, the people with the money and standing to commission bronze—wished their neighbors to believe about the war. Its inscription tells us less about the general than about the committee. Monuments, in other words, are not history; they are arguments about history, made at a particular time for particular purposes, and fixed in materials chosen precisely because they resist revision. To remove one is to decline to go on making its argument in public. That is a political act, and it may be a wise or a foolish one, but it no more erases history than taking down an old campaign poster erases the election.\n\nSo much for the confusion. The insight is harder to see, because those who hold it rarely state it well. A monument, I have said, is a document of the moment of its making. But documents can be destroyed, and a society that removes every trace of what it once chose to celebrate will find it strangely easy to forget that it ever celebrated such things. The statue in the square is evidence—uncomfortable, partial, frequently ugly evidence—of what a community once wanted remembered, and of who got to decide. Melt it down and put nothing in its place, and in two generations the town’s children may believe that their great-grandparents never honored the man at all. That is not an erasure of the general’s history. It is an erasure of the town’s.\n\nWhat, then, does a society owe its past? Not reverence; the past has no claim on our admiration, and many of its heroes were chosen by people who did not consult the rest of the town. Not permanence either; the public square belongs to the living, who are entitled to decide what it will say on their behalf. What a society owes its past is an accurate record, and that includes a record of its own mistakes of memory. The obligation can be met in many ways. A statue may be moved to a museum, where it can be labeled as the argument it always was. A plaque may be left on an empty pedestal saying who stood there, who put him there, and when and why he was taken down.\n\nWhat cannot be justified is the silent removal, which treats a change of mind as though it had been the town’s opinion all along. The critics of removal are wrong to call it an erasure of history. They would be right to call it an erasure of evidence—if we allowed it to become one.',
    questions: [
      {
        question: 'Which of the following best states the main point of the passage?',
        options: [
          'Monuments to disputed figures should stay in place so that citizens can go on debating them in public.',
          'Removing a monument does erase history, though a community is sometimes right to accept that cost.',
          'The public square belongs to the living, who owe the past neither reverence nor any other obligation.',
          'Taking down a monument does not erase history, but a community must keep a record of what it removed.',
        ],
        correctAnswer: 3,
        explanation:
          'The author argues that removal “no more erases history than taking down an old campaign poster erases the election,” yet insists that a society owes its past an accurate record and that silent removal cannot be justified. The stay-in-place option contradicts the author’s denial that the past is owed permanence. The does-erase option adopts the very claim the author calls a confusion. The no-obligation option distorts the fourth paragraph, which rejects reverence and permanence but affirms an obligation to accuracy.',
        skill: 'main-idea',
      },
      {
        question: 'Based on the passage, which of the following actions would the author regard as meeting a society’s obligation to its past?\n\nI. Leaving a statue in place but adding a panel that explains who commissioned it and for what purpose\n\nII. Moving a statue to a historical society’s building and displaying it beside the records of the committee that paid for it\n\nIII. Replacing a statue overnight with a fountain and leaving no indication of what had stood there',
        options: ['I only', 'I and II only', 'II and III only', 'I, II, and III'],
        correctAnswer: 1,
        explanation:
          'The obligation is “an accurate record,” which “can be met in many ways.” Action I keeps the monument but labels it as the argument it was, so it meets the obligation; the author denies the past is owed permanence but does not forbid keeping a statue. Action II preserves the statue together with evidence of “who got to decide.” Action III is the “silent removal” the author says cannot be justified. So I and II only; the options including III, or omitting II, are wrong.',
        skill: 'application',
      },
      {
        question: 'The author’s comparison of removing a monument to taking down “an old campaign poster” is used to:',
        options: [
          'suggest that most monuments were commissioned in the course of political campaigns.',
          'show that monuments, like posters, are too fragile to serve as lasting records.',
          'support the claim that removing a persuasive message does not undo the events it concerned.',
          'argue that a society should preserve every political document it has ever produced.',
        ],
        correctAnswer: 2,
        explanation:
          'Having recast monuments as “arguments about history,” the author uses the poster, another piece of persuasion about an event, to show that withdrawing the persuasion leaves the event itself untouched. The campaigns option takes the analogy literally; the monuments in the passage are commissioned by committees long after the war. The fragile option contradicts the passage, which says monuments are made of materials chosen to resist revision. The preserve-everything option overstates the author, who says the square “belongs to the living.”',
        skill: 'function',
      },
      {
        question: 'Suppose that a town removed a statue from its main square and that, forty years later, most residents were surprised to learn it had ever stood there. The author would most likely interpret this outcome as:',
        options: [
          'evidence that the removal was carried out without an adequate record of what the town had honored.',
          'proof that the statue ought to have been left standing in the square where it was first erected.',
          'a sign that the town had successfully freed itself from an argument that it no longer accepted.',
          'a loss of knowledge about the life and deeds of the person whom the statue had depicted.',
        ],
        correctAnswer: 0,
        explanation:
          'The scenario matches the author’s warning that a town that “put[s] nothing in its place” may forget it ever honored the man — an erasure of the town’s history caused by removal without a record. The left-standing option contradicts the author’s view that the past is not owed permanence and that museums or plaques can meet the obligation. The freed-itself option treats the forgetting as a success, whereas the author condemns silent removal. The life-and-deeds option is the trap the author names: the loss is not “of the general’s history” but “of the town’s.”',
        skill: 'new-information',
      },
      {
        question: 'In describing a monument’s sponsors as “the people with the money and standing to commission bronze,” the author implies that:',
        options: [
          'most monuments of the period were paid for out of public taxes.',
          'a monument need not reflect the views of its whole community.',
          'wealthy citizens tended to hold more accurate views of the past.',
          'bronze was chosen for monuments chiefly because it was costly.',
        ],
        correctAnswer: 1,
        explanation:
          'By narrowing “the people of that decade” to those with money and standing, the author signals that a monument records the wishes of a subset of the community; the later remark that heroes were chosen by people “who did not consult the rest of the town” confirms this. The public-taxes option is unsupported. The more-accurate-views option runs against the author’s treatment of monuments as partial arguments. The costly-bronze option contradicts the stated reason for the materials: they “resist revision.”',
        skill: 'inference',
      },
      {
        question: 'The author’s attitude toward those who object that removing statues “is erasing history” is best described as:',
        options: [
          'dismissive, since the author holds that the objection rests entirely on a confusion.',
          'admiring, since the author holds that the objectors alone understand what a monument is.',
          'hostile, since the author holds that the objectors wish to keep arguments that deserve rejection.',
          'partly sympathetic, since the author holds that the objection garbles a legitimate concern.',
        ],
        correctAnswer: 3,
        explanation:
          'The author says the objection “contains a real confusion and a real insight,” that its holders “rarely state it well,” and that they “would be right” to warn against an erasure of evidence — partial sympathy for a concern badly expressed. The dismissive option ignores the insight. The admiring option ignores the confusion, which the author spends a paragraph correcting. The hostile option imputes motives the passage never assigns to the objectors.',
        skill: 'tone',
      },
    ],
  },
  {
    id: 'fl3-cars-a-05',
    section: 'cars',
    discipline: 'philosophy',
    title: 'Of Solitude, and the Return',
    passageText:
      'There is a kind of man, common enough in our towns and not unknown in our pulpits, who cannot bear to be alone for the space of an afternoon. He must have a companion at his elbow, a newspaper in his hand, or at the least a grievance to rehearse; and when all these fail him he grows restless, as though silence were an accusation to which he had no answer. We call such a man sociable, and suppose that society is much beholden to him. I am persuaded that it is not. He brings to every gathering only what the last gathering left in him, and so passes the same small coin of opinion from hand to hand until its face is worn smooth.\n\nIt is the fashion among certain reformers of the present day to answer this man by despising society altogether, and to commend the hermit’s cabin as the only honest dwelling. I cannot follow them there. The solitary who has gone into the woods to escape his neighbors has commonly carried the chief of them with him, namely his own vanity; and I have observed that the loudest praises of solitude are generally published, and addressed to a very large audience. A man does not become wise by being alone, any more than a field becomes fruitful by being fenced. The fence is a condition of the harvest; it is not the harvest.\n\nWhat, then, is solitude good for? I answer, that it is good for exactly what it returns. The mind, like the sea, has its ebb and its flood. In company it spends itself; it is drawn out, answers, agrees, disputes, and is carried along upon the current of other minds, which is pleasant and often profitable, but which leaves it at evening with nothing that is quite its own. In solitude it is permitted to fill again—not with new facts, for these are more readily had in conversation, but with its own sense of what the facts are worth. The man who has sat an hour alone with a question comes back to his friends with something to offer them, and not merely something to repeat.\n\nIt follows that the value of a man’s solitude is to be judged not by himself but by those to whom he returns. If he comes back gentler, clearer, readier to hear what he did not expect, his retirement was well spent, though it were only a walk before breakfast. If he comes back prouder, holding his neighbors cheap because they have not seen what he has seen, then his solitude was merely a longer sort of company, in which he kept the society of his own good opinion and was flattered by it the whole while.\n\nI would not, therefore, have a young person choose between the crowd and the cell. I would have him learn the rhythm of both, as a sailor learns the tides—neither cursing the ebb nor trusting that the flood will last for ever. Society without solitude is an echo; solitude without society is a mirror; and a man may starve in either, though he be surrounded by voices or by his own reflection.',
    questions: [
      {
        question: 'The central claim of the passage is that:',
        options: [
          'solitude is superior to society because it frees the mind from the opinions of other people.',
          'the sociable man serves society better than the reformer who praises the hermit’s life.',
          'the worth of time spent alone lies chiefly in what it enables a person to bring back to others.',
          'a young person ought to decide early whether to live among others or apart from them.',
        ],
        correctAnswer: 2,
        explanation:
          'The author holds that solitude “is good for exactly what it returns” and that its value is judged by those to whom the solitary returns. The superiority option is the reformers’ view, which the author declines to follow. The sociable-man option ignores the first paragraph, where the author denies that society is “beholden to him.” The decide-early option contradicts the final paragraph, which urges a young person not to choose between the crowd and the cell.',
        skill: 'main-idea',
      },
      {
        question: 'The author’s observation that “the loudest praises of solitude are generally published, and addressed to a very large audience” serves primarily to:',
        options: [
          'suggest that some professed lovers of solitude still crave the regard of others.',
          'show that books praising solitude are more widely read than other kinds of books.',
          'argue that writers ought not to publish their reflections on private matters.',
          'concede that the reformers’ view of solitude has won wide support among readers.',
        ],
        correctAnswer: 0,
        explanation:
          'The remark follows the claim that the solitary carries “his own vanity” into the woods; publishing one’s love of solitude to a large audience is offered as ironic evidence of that vanity. The more-widely-read option treats an ironic aside as a claim about sales. The ought-not-publish option draws a rule the author never states, and the essay is itself published reflection. The concede option misreads the tone, which is critical of the reformers rather than conciliatory.',
        skill: 'function',
      },
      {
        question: 'In the author’s comparison of solitude to a fenced field, the “harvest” most nearly corresponds to:',
        options: [
          'the freedom from interruption that a solitary person enjoys.',
          'the esteem that a solitary person wins from his neighbors.',
          'the store of new facts that a person gathers in conversation.',
          'the judgment a mind forms for itself when left alone.',
        ],
        correctAnswer: 3,
        explanation:
          'The analogy says being alone does not by itself make a man wise; the third paragraph identifies what solitude can yield — the mind’s “own sense of what the facts are worth.” Freedom from interruption is the fence, the condition, not the harvest. Esteem from neighbors is not what the author values; the returning man is judged by whether he is gentler and readier to listen, not by applause. New facts are said to be “more readily had in conversation,” not in solitude.',
        skill: 'inference',
      },
      {
        question: 'A scholar spends a year alone writing a book and, on her return, dismisses her colleagues’ questions as naive. The author would most likely judge her year of solitude to have been:',
        options: [
          'well spent, since she has evidently come to see what her colleagues have not.',
          'poorly spent, since she came back less able to receive what others offer her.',
          'beyond judgment, since only the scholar herself can know what it gave her.',
          'well spent, provided that the book she wrote is filled with new facts.',
        ],
        correctAnswer: 1,
        explanation:
          'The author says that one who “comes back prouder, holding his neighbors cheap” has spent his solitude as “merely a longer sort of company,” and that the test is whether he returns “readier to hear what he did not expect.” The well-spent option accepts the very pride the author condemns. The beyond-judgment option contradicts the claim that solitude is judged “not by himself but by those to whom he returns.” The new-facts option misplaces solitude’s value, which the author locates in judgment rather than facts.',
        skill: 'application',
      },
      {
        question: 'Which of the following observations would most challenge the author’s view of the sociable man described in the first paragraph?',
        options: [
          'People who are seldom alone often originate the ideas their circles discuss.',
          'Many people who dislike being alone also dislike reading the daily newspapers.',
          'Hermits who publish praises of solitude rarely return to live among their neighbors.',
          'Most people grow restless after an afternoon spent without company or occupation.',
        ],
        correctAnswer: 0,
        explanation:
          'The author claims the man who is never alone brings to company only “what the last gathering left in him,” passing around worn opinion; if such people often originate new ideas, that claim fails. The newspaper option concerns a detail of his habits, not his contribution. The hermits option concerns the reformers, not the sociable man. The restlessness option, if anything, generalizes the behavior the author describes without touching the author’s judgment of its worth.',
        skill: 'strengthen-weaken',
      },
      {
        question: 'Suppose a reader objects that several of history’s most admired thinkers spent nearly all their lives in seclusion. The author could most consistently reply that:',
        options: [
          'such thinkers are exceptions whose lives no ordinary person should attempt to imitate.',
          'seclusion of that length is always a form of vanity, however admired its results may be.',
          'what their seclusion was worth is shown by what their work gave others, not by the seclusion.',
          'the admiration they receive proves that solitude is, in itself, the source of wisdom.',
        ],
        correctAnswer: 2,
        explanation:
          'Because the author holds that solitude is “good for exactly what it returns” and must be judged by those to whom the solitary returns, the thinkers’ seclusion would be vindicated by what their work offered others. The exceptions option dodges the objection with a claim the passage never makes. The always-vanity option overstates the author, who says the solitary “commonly” carries vanity, not always, and who values retirement well spent. The source-of-wisdom option contradicts “A man does not become wise by being alone.”',
        skill: 'new-information',
      },
    ],
  },
]
