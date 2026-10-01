import type { MCATPassage } from '../types'

/**
 * MCAT Full-Length Form 6 — CARS, file B (passages 6–9; 6, 6, 6, 5 questions = 23).
 *
 * Four original argument-driven passages (500–600 words each) written to the
 * Form 5/6 blueprint: history / historiography (writing the history of
 * ordinary people), popular culture (whether video games are an art form),
 * linguistics (how words die), and literary criticism (how short stories
 * should end). Every item is answerable from the passage alone; no outside
 * knowledge is required.
 */
export const FL6_CARS_B_PASSAGES: MCATPassage[] = [
  {
    id: 'fl6-cars-b-06',
    section: 'cars',
    discipline: 'history / historiography',
    title: 'The Usual and the Possible',
    passageText:
      'For most of the time that history has been written, it has been the history of people who left papers: kings, bishops, generals, and the clerks who served them. The ambition to write instead about those who left none — the ploughman, the laundress, the apprentice — is recent, and it is honourable. But an ambition is not a method, and the two methods on which this kind of history has chiefly relied each fail in a way its practitioners have been slow to admit.\n\nThe first is the method of the count. The historian gathers what the ordinary did leave behind in bulk — baptisms and burials entered in parish registers, the price of bread, the size of holdings — and from thousands of entries distils a village that married at twenty-six, buried two children in five, and ate meat on feast days. Everything in this portrait is true, and no one in it ever lived. The average villager is a figure whom no neighbour would have recognised, because she is made of what her neighbours had in common, and people are not known to one another by what they have in common.\n\nThe second is the method of the case. Now and then an ordinary person fell into the machinery of record: a miller questioned at length by a church court, a servant whose petition survives entire. Here at last is a voice, and historians have fallen on such documents with a gratitude that is easy to understand. Yet consider how the voice reached us. The miller was interrogated because he had said things his neighbours did not say; the servant petitioned because something had gone wrong that usually did not. The archive preserves the ordinary person at precisely the moment he ceased to be ordinary. To let the miller speak for the mill is to mistake the reason he was recorded for the reason he matters.\n\nIt is tempting to conclude that the two methods should simply be added together, the count supplying what is typical and the case supplying what is alive. I think this too easy. A voice laid beside an average does not become typical, and an average laid beside a voice does not begin to speak. What the two can do together is something neither aims at alone. The count tells us what was usual; the case, exactly because it is unusual, tells us what was possible — what a person in that station could think, say, or refuse, and what it cost. Between the usual and the possible lies the thing we were looking for all along: the range within which a life was actually lived. The widow who did not remarry, when the registers show that most widows of her age did, has told us something without leaving a word, and the miller’s court supplies what the register cannot — what such a refusal may have been made of.\n\nThis asks the historian to give up a flattering picture of the work. We like to say that we are giving the voiceless their voice. We are not; we are making inferences about people who would not recognise our questions, and the honest name for that is reconstruction, not rescue. Nor should the phrase “ordinary people” pass unexamined. No one has ever been ordinary to herself. The word describes a view from above, and a history that truly meant to leave that vantage would begin by noticing that it is still using its vocabulary.',
    questions: [
      {
        question: 'Which of the following best states the main point of the passage?',
        options: [
          'Histories of ordinary people cannot succeed, because surviving records capture only exceptional individuals.',
          'Aggregate evidence gives a truer account of ordinary lives than the individual testimony preserved by courts.',
          'Counts and cases, each inadequate alone, can jointly mark out the range within which ordinary lives were led.',
          'Historians should stop writing about ordinary people until the term itself has been given a clearer meaning.',
        ],
        correctAnswer: 2,
        explanation:
          'The passage faults the count (true of everyone, descriptive of no one) and the case (a voice preserved because it was unusual), then argues in the fourth paragraph that together they show “the range within which a life was actually lived.” The cannot-succeed option stops at the criticism and ignores that constructive turn. The aggregate-evidence option takes a side the author refuses to take, since the count is criticized as sharply as the case. The stop-writing option inflates the closing caution about the phrase “ordinary people” into a recommendation the author never makes.',
        skill: 'main-idea',
      },
      {
        question: 'The author mentions the widow who did not remarry primarily in order to:',
        options: [
          'show how a count can make one unrecorded choice visible as a choice.',
          'illustrate the kind of exceptional person whom church courts interrogated.',
          'demonstrate that parish registers are more reliable than records of trials.',
          'suggest that averages conceal how often widows defied the customs of a village.',
        ],
        correctAnswer: 0,
        explanation:
          'The widow “has told us something without leaving a word” only because “the registers show that most widows of her age did” remarry: the usual, established by counting, is what makes her departure from it legible. The church-court option confuses her with the miller; she appears in no interrogation. The more-reliable option invents a ranking of sources, whereas the sentence goes on to say the court “supplies what the register cannot.” The defied-customs option reverses the example, in which the registers reveal her exception rather than hide a frequent one.',
        skill: 'function',
      },
      {
        question: 'The author’s statement that the archive “preserves the ordinary person at precisely the moment he ceased to be ordinary” implies that:',
        options: [
          'court officials chose unusual defendants deliberately, in order to make examples of them before their neighbours.',
          'ordinary people became exceptional only through the attention later paid to them by historians.',
          'records of single individuals are less accurate than records compiled from many thousands of entries.',
          'the survival of a detailed record of an individual is itself a sign that the individual was unrepresentative.',
        ],
        correctAnswer: 3,
        explanation:
          'The miller was questioned “because he had said things his neighbours did not say” and the servant petitioned because something unusual had gone wrong, so whatever produced the record also set its subject apart; the existence of the record is therefore evidence of untypicality. The make-examples option adds a motive for the officials that the passage never discusses. The later-attention option misplaces the cause: the passage locates the exceptionality in the event that generated the document, not in historians’ interest. The less-accurate option raises accuracy, but the author’s concern is typicality — the case is never said to be false.',
        skill: 'inference',
      },
      {
        question: 'Which of the following research projects would best exemplify the approach the author recommends?',
        options: [
          'Compiling wage entries for ten thousand labourers to establish what a typical labourer earned in a year',
          'Reading one apprentice’s lawsuit against his master beside indenture rolls showing how seldom apprentices sued',
          'Publishing the full diary of a weaver so that a labouring voice can be heard without any historian’s commentary',
          'Printing a farmer’s letters beside tax-roll averages so that the letters lend life to the figures they typify',
        ],
        correctAnswer: 1,
        explanation:
          'The author wants the count to establish what was usual and the unusual case to show what was possible, each read against the other. The lawsuit set beside rolls showing how rare such suits were does exactly this: the rolls measure the apprentice’s departure from the usual, and the suit shows what such a departure involved. The wage compilation is the count alone and yields only an average. The diary published without commentary is the case alone, offered in the spirit of “giving the voiceless their voice” that the author disowns. The letters-and-averages project is the simple addition the author calls “too easy,” since it treats the voice as typical and the figures as merely needing life.',
        skill: 'application',
      },
      {
        question: 'Suppose newly discovered records showed that the opinions for which the miller was interrogated were voiced freely by many of his neighbours, none of whom was ever questioned. This discovery would most directly challenge the author’s claim that:',
        options: [
          'individual cases reach the archive because their subjects differed from the people around them.',
          'the count yields a portrait in which every detail is accurate and yet no person appears.',
          'historians reconstruct ordinary lives by inference and do not restore their voices.',
          'the term “ordinary” reflects the standpoint of the observer, not of the observed.',
        ],
        correctAnswer: 0,
        explanation:
          'The author’s criticism of the case method rests on the premise that the miller was recorded because he “had said things his neighbours did not say.” If his neighbours said the same things, his record did not arise from his being unlike them, and he might be typical after all. The portrait option concerns the count, which a finding about one interrogation does not touch. The inference option describes how historians work and would hold whether or not the miller was typical. The standpoint option concerns the vocabulary of the field, which the discovery leaves untouched.',
        skill: 'new-information',
      },
      {
        question: 'The author raises each of the following objections to prevailing ways of writing about ordinary people EXCEPT that:',
        options: [
          'the composite figure produced from aggregate records corresponds to no person who lived.',
          'the claim to be restoring lost voices misdescribes what historians are in fact doing.',
          'the bulk records left by ordinary people were too carelessly kept to be trusted.',
          'the label attached to such people carries the perspective the field hopes to escape.',
        ],
        correctAnswer: 2,
        explanation:
          'The author never questions the accuracy of the bulk records; on the contrary, “everything in this portrait is true.” The other three objections are all made. The composite-figure objection is the second paragraph’s point that “no one in it ever lived.” The restoring-voices objection is the final paragraph’s insistence that the work is “reconstruction, not rescue.” The label objection is the closing remark that “ordinary” describes “a view from above” whose vocabulary the field still uses.',
        skill: 'detail',
      },
    ],
  },
  {
    id: 'fl6-cars-b-07',
    section: 'cars',
    discipline: 'popular culture',
    title: 'What the Hands Are Asked to Do',
    passageText:
      'The question whether video games can be art is usually argued on ground chosen by their defenders, and chosen badly. They point to games with orchestral scores, painterly landscapes, and scripts performed by trained actors, and they ask how a work containing so much art could fail to be art itself. The sceptic’s answer is quick and, I think, correct: these are the virtues of music, painting, and drama, on loan. A game that deserves admiration only for the hour of film scattered through it is a film with interruptions. If games are an art form, it must be on account of something that only games do.\n\nWhat only games do is hand the audience something to decide. A novel may describe a betrayal and a film may show one, but a game can require one: it can place the player where the loyal course and the profitable course part, and wait. Everything distinctive about the form follows from this. The designer’s materials are not images or sentences but rules — what may be done, what it costs, what follows — and the designer’s craft is the shaping of a choice so that making it means something.\n\nHere the sceptic has a deeper objection, and it deserves better than the scorn it usually receives. A work of art, he says, is the product of an artist’s control. Every word in the poem is there because the poet put it there. But a game surrenders control to whoever happens to be holding the controller; two players come away having seen different things, and a work that differs for every member of its audience is not a work at all but an occasion.\n\nThe objection mistakes what is being controlled. An architect does not decide where a visitor will walk. She decides what walking will be like: that the corridor narrows before the hall opens, that the stair turns its back on the door. No two visits are the same, and no one supposes the building to be unauthored. The designer of a game works likewise. He does not write what the player does; he writes the situation in which doing it will feel like something — and that feeling, far more than the route, is what players of the same game turn out to share.\n\nThere remains the matter of winning. Games can be won, it is said, and nothing that can be won is art; no one finishes a symphony ahead of the rest of the audience. I grant that most games are contests and nothing more, as most photographs are records and nothing more. But the argument proves less than it seems to. In the games that matter, the wish to win is not the point of the work but its instrument. The player wants to advance, and the game lets her — on terms. Later it shows her what those terms were. I know of no other form that can do this. A tragedy can make its audience pity a crime or dread one; only a game can leave its audience answerable for one, because only here did the audience act.\n\nNone of this means that many games are art, or that the celebrated ones are the right ones; the titles most often praised are, in my view, praised mostly for their borrowed clothes. It means only that the question has an answer, and that the answer will be found by looking at what the player’s hands are asked to do.',
    questions: [
      {
        question: 'According to the passage, the usual defense of games as art is flawed because it:',
        options: [
          'overstates how many games display any real artistic ambition.',
          'credits games with merits that belong to other art forms.',
          'ignores the sceptic’s point that games are meant to be won.',
          'assumes that all players experience a game in the same way.',
        ],
        correctAnswer: 1,
        explanation:
          'The first paragraph endorses the sceptic’s reply that scores, landscapes, and acted scripts are “the virtues of music, painting, and drama, on loan,” so praising a game for them does not show that games as such are art. The overstates option names a point the author himself makes about games in general, not a flaw he finds in the defenders’ reasoning. The winning option concerns a separate objection taken up in the fifth paragraph. The same-way option reverses the passage: variation among players is the sceptic’s objection, not an assumption of the defenders.',
        skill: 'detail',
      },
      {
        question: 'The author’s reply to the objection about the artist’s control depends on the assumption that:',
        options: [
          'architects exercise less control over their buildings than poets exercise over their poems.',
          'most players of a given game make the same decisions when they are offered a choice.',
          'a work must be experienced identically by all of its audience in order to count as art.',
          'differences among players’ paths through a game are of the same kind as differences among visits to a building.',
        ],
        correctAnswer: 3,
        explanation:
          'The reply is an argument by analogy: because varied visits do not make a building unauthored, varied play does not make a game unauthored. That inference holds only if the two kinds of variation are relevantly alike, which the author takes for granted (“The designer of a game works likewise”). The less-control option compares architects with poets, a ranking the reply does not need. The same-decisions option is not required, since the author says players share the feeling “far more than the route.” The identical-experience option is the sceptic’s premise, which the reply is designed to reject rather than assume.',
        skill: 'assumption',
      },
      {
        question: 'Which of the following features of a game would the author most likely count as evidence of the artistry that is distinctive to games?\n\nI. A rule that makes the quickest route to victory depend on abandoning a companion the player has relied on\nII. Filmed interludes whose acting and photography rival those of an acclaimed motion picture\nIII. A closing sequence that reveals what the player’s earlier profitable decisions cost other characters',
        options: [
          'I and III only',
          'I only',
          'II only',
          'I, II, and III',
        ],
        correctAnswer: 0,
        explanation:
          'Feature I is a designed choice in which “the loyal course and the profitable course part,” the author’s own picture of what only games do. Feature III matches the account of winning as an instrument: the game lets the player advance “on terms” and “later it shows her what those terms were.” Feature II is the borrowed virtue the first paragraph dismisses — a game admired for it “is a film with interruptions.” Hence I and III only; “I only” omits the later reckoning the author singles out, and the options containing II credit the game with another art’s merits.',
        skill: 'application',
      },
      {
        question: 'The author’s remark that “most photographs are records and nothing more” serves primarily to:',
        options: [
          'suggest that photography, like game design, has borrowed its merits from older arts.',
          'argue that contests and records are both forms of art that critics have undervalued.',
          'concede that most games lack artistic standing without conceding that the form must lack it.',
          'imply that games will be accepted as art once they have existed for as long as photography has.',
        ],
        correctAnswer: 2,
        explanation:
          'The remark accompanies “I grant that most games are contests and nothing more” and is followed by “But the argument proves less than it seems to”: the fact that most instances of a form are not art does not settle whether the form can be. The borrowed-merits option attaches to photography a charge the author makes only about praised games. The undervalued option contradicts “nothing more,” which denies artistic standing to ordinary contests and records. The age option introduces a claim about time and acceptance that appears nowhere in the passage.',
        skill: 'function',
      },
      {
        question: 'Suppose a study found that players of a much-admired game who had all made the same pivotal choice described sharply different reactions to it: some remorse, some amusement, some indifference. This finding would most weaken the author’s:',
        options: [
          'claim that defenders of games rely on merits borrowed from the other arts.',
          'reply to the objection that a game surrenders the control of its maker.',
          'concession that most games are nothing more than contests to be won.',
          'observation that a designer’s materials are rules and not images.',
        ],
        correctAnswer: 1,
        explanation:
          'The reply to the control objection holds that the designer authors “the situation in which doing it will feel like something” and that this feeling “is what players of the same game turn out to share.” If players who made the same choice feel very different things, the shared element on which the designer’s authorship was said to rest is missing. The borrowed-merits option concerns what defenders praise, which the study does not address. The concession about contests is a claim about ordinary games, not about how players of an admired one respond. The materials option describes what a designer works with, which is unaffected by how reactions vary.',
        skill: 'new-information',
      },
      {
        question: 'A critic argues that a certain game is a masterpiece because its story, if printed as a novel, would win literary prizes. The author would most likely respond that this argument:',
        options: [
          'is sound, since narrative is the element that games share with the established arts.',
          'fails, since no story written for a game could meet the standards applied to novels.',
          'overlooks that players, and not designers, determine how the story of a game unfolds.',
          'praises the game for something that a novel could have supplied equally well.',
        ],
        correctAnswer: 3,
        explanation:
          'The author insists that if games are art “it must be on account of something that only games do”; a story that would succeed equally as a novel is, by the critic’s own description, not such a thing, just as a game admired for its film is “a film with interruptions.” The is-sound option adopts the defenders’ strategy the author calls badly chosen. The no-story option makes a claim about the quality of game writing that the author never advances; his point holds even if the story is excellent. The players-determine option hands the author the sceptic’s control objection, which he answers rather than endorses.',
        skill: 'application',
      },
    ],
  },
  {
    id: 'fl6-cars-b-08',
    section: 'cars',
    discipline: 'linguistics',
    title: 'No One Attends the Funeral',
    passageText:
      'We know, often to the year, when a word was born. Someone needed a name for a new machine or a new habit, someone coined it, and the first printed use sits in the dictionary like a date of birth. The deaths of words are a different matter. No one records the last time a word was spoken in earnest, because no one present knew it was the last. A word does not die as a person does, at a moment; it dies as a path does, by being walked less.\n\nThe popular account of this process is a moral one. Words die, we are told, of neglect: careless speakers, with lazy habits and small vocabularies, let fine old terms slip away, and the language is the poorer for each one. I think nearly every part of this account is mistaken, and the mistake begins with its picture of the speaker. People do not abandon words out of idleness. They abandon them because the words have stopped doing work.\n\nConsider the ways a word can lose its employment. Sometimes the thing it named goes out of the world; the vocabulary of the horse-drawn carriage did not decay, it was simply left with nothing to point at. Sometimes a rival takes the work — a shorter word, a more fashionable one, a word without unfortunate associations — and for a generation or two the pair live side by side until the older one begins to sound like a costume. And sometimes speakers cease to care about the distinction a word existed to draw. When the difference between two kinds of cousin no longer decides who inherits, the word for one of them has nothing left to do, however useful it once was.\n\nWhat happens next is the curious part. A word that has lost its work seldom vanishes outright. It retreats into a few fixed phrases and goes on being said there by people who could not tell you what it means. We still speak of being “at loggerheads” and of giving “short shrift,” but no one now asks for a loggerhead or offers a longer shrift. Such words are not alive; they can no longer be moved into a new sentence, and a word that cannot be moved is a fossil, however often it is pronounced. The dictionary, which prints the fossil and the living word in the same type, hides this from us. It is a register of everything that has been said, and we mistake it for an inventory of what can be.\n\nIt follows that the mourners have the arithmetic wrong. A language does not grow poorer when a word falls idle, any more than a town grows poorer when a blacksmith’s shop becomes a garage. The work has moved. A language that kept every word in active service would not be rich; it would be a museum in which nothing could be found.\n\nI would make one exception, and it is not the one the mourners make. The loss worth regretting occurs when a word’s spelling survives and its distinction does not — when two words that once divided a territory between them come to be used as one. Then nothing appears to have died; the obituary is never written; and speakers who still need the distinction must build it out of a phrase each time, where once a single word would have served. That is a real cost. But it is the cost of a word that stayed, not of one that left.',
    questions: [
      {
        question: 'Which of the following best captures the author’s main argument?',
        options: [
          'Words fall out of use when they lose their function, which is a loss only when a needed distinction goes with them.',
          'Words fall out of use because speakers grow careless, and dictionaries disguise how much the language has lost.',
          'Words never truly die, since even the oldest terms live on in fixed phrases that speakers go on repeating.',
          'Words fall out of use at moments that can be dated as exactly as their first appearance in print.',
        ],
        correctAnswer: 0,
        explanation:
          'The passage replaces the “moral” account with a functional one — words are abandoned “because the words have stopped doing work” — denies that this impoverishes a language, and then admits one exception, when a distinction disappears while the word remains. The careless-speakers option is the popular account the author calls mistaken in “nearly every part.” The never-die option contradicts the fourth paragraph, where words surviving only in fixed phrases “are not alive.” The dated-exactly option reverses the opening, which contrasts datable births with unrecorded deaths.',
        skill: 'main-idea',
      },
      {
        question: 'The statement that a word dies “as a path does, by being walked less” most nearly means that the death of a word is:',
        options: [
          'a deliberate choice made in common by a community of speakers.',
          'a reversible decline that renewed use is always able to undo.',
          'a gradual lapse that has no identifiable final moment.',
          'a process visible only to those who study old documents.',
        ],
        correctAnswer: 2,
        explanation:
          'The comparison is set against dying “as a person does, at a moment,” and follows the observation that no one knows which utterance of a word is the last: a path disappears by degrees as use thins, with no instant of ending. The deliberate-choice option adds a collective decision, whereas a path falls out of use without anyone resolving to close it. The reversible option introduces recovery, which the passage does not discuss. The old-documents option restricts who can observe the process, but the author’s point is that no one observes the end at all.',
        skill: 'detail',
      },
      {
        question: 'It can be inferred that the author would regard a word as fully alive only if speakers:',
        options: [
          'can give its definition when they are asked to explain what it means.',
          'can use it freely in sentences they have never heard before.',
          'use it at least as often as they use its nearest rival.',
          'find it printed in a current dictionary without comment.',
        ],
        correctAnswer: 1,
        explanation:
          'The author’s test for a dead word is that it “can no longer be moved into a new sentence,” and he adds that frequency does not matter: such a word is a fossil “however often it is pronounced.” A living word, then, is one that remains movable. The definition option picks up the remark that speakers of fossil phrases cannot say what the words mean, but the author makes mobility, not definability, the criterion. The as-often option makes frequency the test, which the author explicitly sets aside. The dictionary option relies on the very source the author says conceals the difference between living words and fossils.',
        skill: 'inference',
      },
      {
        question: 'The author’s attitude toward those who lament the death of words is best described as:',
        options: [
          'amused contempt for a view held only by the uneducated.',
          'broad agreement tempered by doubt about their evidence.',
          'indifference, since the question seems to him unanswerable.',
          'firm disagreement that still allows a real loss of another kind.',
        ],
        correctAnswer: 3,
        explanation:
          'The author says the popular account is mistaken in “nearly every part” and that “the mourners have the arithmetic wrong,” yet he ends by granting “a real cost” — though “not the one the mourners make.” That is disagreement combined with a relocated concession. The contempt option misreads the tone, which argues with the mourners and nowhere describes them as uneducated. The broad-agreement option inverts the author’s position. The indifference option cannot be squared with a passage that offers a detailed answer of its own.',
        skill: 'tone',
      },
      {
        question: 'Which of the following situations best illustrates the one kind of loss the author considers worth regretting?',
        options: [
          'Two terms that once separated a planned killing from an accidental one come to be used interchangeably.',
          'A term for a tool of the hand-weaver drops out of speech once the last of the hand-looms have been retired.',
          'An old term for a physician is displaced by a newer one and begins to sound quaint and theatrical.',
          'A term survives in one proverb alone, repeated by speakers who cannot say what it once referred to.',
        ],
        correctAnswer: 0,
        explanation:
          'The regrettable loss arises “when two words that once divided a territory between them come to be used as one,” so that the words remain but the distinction must be rebuilt in a phrase. The merged terms for two kinds of killing fit: both words survive, and a distinction speakers may still need is gone. The weaving term lost its work because its object left the world, like the carriage vocabulary. The displaced term for a physician is the rival case, in which the older word comes to “sound like a costume.” The proverb case is fossilization, which the author describes without regret.',
        skill: 'application',
      },
      {
        question: 'Which of the following findings, if true, would most seriously undermine the author’s account of why words fall out of use?',
        options: [
          'Most of the words that vanished in the last century named tools and trades that had themselves disappeared.',
          'Many vanished words named things that speakers still discuss daily and for which no other term has arisen.',
          'Words now confined to a few set phrases are seldom recognised by speakers when shown on their own.',
          'Speakers with large vocabularies give up outdated words about as readily as other speakers do.',
        ],
        correctAnswer: 1,
        explanation:
          'The author holds that words are abandoned only when they “have stopped doing work” — the thing is gone, a rival has taken over, or the distinction no longer matters. Words that vanished although their objects are still discussed and nothing replaced them would have been dropped while they still had work, which the account cannot explain. The tools-and-trades finding is the first route to idleness and supports the account. The set-phrases finding fits the description of fossils said “by people who could not tell you what it means.” The large-vocabularies finding supports the rejection of the view that words die through lazy speakers with small vocabularies.',
        skill: 'strengthen-weaken',
      },
    ],
  },
  {
    id: 'fl6-cars-b-09',
    section: 'cars',
    discipline: 'literary criticism',
    title: 'Neither a Lock nor a Gap',
    passageText:
      'A novel may end badly and be forgiven. By the last chapter it has given so much — years of its characters’ lives, weeks of the reader’s — that a weak close is a disappointment and not a verdict. The short story has no such credit to draw on. It is brief enough to be held in the mind whole, and the last paragraph is the point from which the whole is seen. An ending that fails there does not spoil the story; it reveals that there was less of a story than we had supposed.\n\nTwo kinds of ending dominate the form, and each has its advocates. The older is the ending that snaps shut: the final line discloses a fact — the stranger was the son, the necklace was paste — which rearranges everything before it. The pleasure is real, and so is the craft; such endings are harder to build than their detractors allow. But consider what they do to the pages that precede them. Those pages turn out to have been a mechanism for withholding. Their details mattered as concealment, and once the concealed thing is out, they have no further work to do. The story has been solved, and a solved thing is finished in the way a crossword is finished.\n\nThe newer kind was invented in reproach of the first. Here nothing is disclosed and nothing concluded; the story stops on a gesture, a view from a window, a remark that answers nothing. Its defenders call this openness, and they say it is truer to experience, which does not arrange itself into revelations. So it does not. But experience does not arrange itself into stories either, and a writer who has undertaken to select and shape cannot plead, at the last moment, that life is shapeless. Too often the trailing ending is not open but merely unfinished: the writer has declined to decide what the events amounted to and has presented the refusal as tact. The reader is left not with a question but with a shrug.\n\nWhat these two endings share is more instructive than what divides them. Both treat the ending as a matter of information — one by delivering all of it at once, the other by pointedly holding it back. I think the ending of a story is properly a matter of position. The best endings I know settle the events entirely. We are not left wondering whether the marriage will take place or the debt be paid. What they leave unsettled is what the events come to — and they leave it so not by vagueness but by stopping at the exact point where the reader has been given everything needed to judge and has not yet been told the judgment. The girl walks home from the party at which her brother has been humiliated. We know all that happened. We do not know, and she does not, whether what she feels is pity or relief, and the story ends before she finds out.\n\nSuch an ending cannot be solved, because nothing has been hidden; and it cannot be shrugged off, because nothing has been withheld. It hands the story over. A good ending, on this account, is neither a lock nor a gap. It is the place where the writer’s work is complete and the reader’s is not.',
    questions: [
      {
        question: 'The author’s central contention is that the ending of a short story should:',
        options: [
          'surprise the reader with a fact that recasts all of the preceding events.',
          'stop without concluding, since experience itself seldom reaches a conclusion.',
          'matter less than the body of the story, as the ending of a novel does.',
          'resolve what happens while leaving the reader to weigh what it signifies.',
        ],
        correctAnswer: 3,
        explanation:
          'The fourth paragraph says the best endings “settle the events entirely” and leave unsettled “what the events come to,” stopping before the reader “has been told the judgment”; the final paragraph calls this handing the story over. The surprise option describes the snap ending, which the author says reduces the earlier pages to “a mechanism for withholding.” The stop-without-concluding option is the trailing ending and its defense, which the author answers by noting that experience “does not arrange itself into stories either.” The matters-less option reverses the opening, which argues that a story, unlike a novel, cannot survive a failed ending.',
        skill: 'main-idea',
      },
      {
        question: 'According to the passage, the author’s chief complaint against the “trailing” ending is that it often:',
        options: [
          'leaves the reader holding a question that the story has no means of answering.',
          'passes off as restraint the writer’s failure to reach a view of the events.',
          'withholds a concealed fact that the earlier pages were built to disclose.',
          'makes the outcome of the plot turn on a remark that readers overlook.',
        ],
        correctAnswer: 1,
        explanation:
          'The author says that in the trailing ending “the writer has declined to decide what the events amounted to and has presented the refusal as tact” — an evasion dressed as delicacy. The unanswerable-question option is contradicted outright: the reader of such an ending “is left not with a question but with a shrug.” The concealed-fact option describes the mechanism of the snap ending, not the trailing one, in which “nothing is disclosed.” The overlooked-remark option invents a hidden plot outcome; the remark at such an ending “answers nothing.”',
        skill: 'detail',
      },
      {
        question: 'The author’s remark that a weak close to a novel is “a disappointment and not a verdict” implies that:',
        options: [
          'novelists take less care over their endings than writers of stories do.',
          'readers of novels are by temperament more forgiving than other readers.',
          'the worth of a novel is largely established before its ending is reached.',
          'the ending of a novel is seldom remembered once the book is closed.',
        ],
        correctAnswer: 2,
        explanation:
          'A novel is forgiven because “it has given so much” by the last chapter; a verdict is a judgment on the whole, so denying that a weak ending is a verdict implies the whole has already earned its standing from what came before. The less-care option makes a claim about how novelists work, which the passage never addresses. The temperament option attributes the forgiveness to the reader’s character, whereas the passage attributes it to what the novel has already supplied. The seldom-remembered option is unsupported: the weak close is noticed — it is “a disappointment” — but does not decide the book’s value.',
        skill: 'inference',
      },
      {
        question: 'Which of the following endings would the author most likely admire?',
        options: [
          'A man pays his dead father’s creditor in full and walks away unsure whether he has acted from honour or from spite.',
          'A man learns on the final page that the creditor he has feared for years was his own father’s brother.',
          'A man stands at the creditor’s gate with the money in his hand as rain begins, and the story breaks off.',
          'A man pays the debt, and the narrator explains that he has at last become worthy of his father’s name.',
        ],
        correctAnswer: 0,
        explanation:
          'The admired ending settles the events — the reader is not left wondering whether “the debt be paid” — while leaving open what they come to, as with the girl who does not know whether she feels “pity or relief.” The man who pays in full and does not know his own motive fits both conditions. The uncle revelation is a snap ending that discloses a rearranging fact. The gate scene is a trailing ending: it stops on a gesture with the event itself unresolved. The narrator’s explanation settles the events but also delivers the judgment the author says the reader should be left to make.',
        skill: 'application',
      },
      {
        question: 'Suppose a celebrated story ends by revealing that its narrator has been dead throughout, and readers consistently report that the revelation makes the earlier scenes more absorbing to think over than they had been. This would most directly challenge the author’s claim that:',
        options: [
          'endings that disclose a hidden fact take considerable skill to construct.',
          'the last paragraph of a story is the point from which the whole is seen.',
          'a final disclosure uses up the interest of the pages that led to it.',
          'writers who select and shape events may not appeal to the shapelessness of life.',
        ],
        correctAnswer: 2,
        explanation:
          'The author argues that after a snap ending the earlier pages “have no further work to do” and that the story is “finished in the way a crossword is finished.” Readers who find the earlier scenes richer after the disclosure are a counterexample to exactly that claim. The skill option is a concession the finding leaves intact, since a revelation that enriches a story would hardly be easier to build. The last-paragraph option is, if anything, supported, because the ending is still governing how the whole is seen. The select-and-shape option belongs to the argument against trailing endings and is not touched by a story that ends in a disclosure.',
        skill: 'new-information',
      },
    ],
  },
]
