import type { MCATPassage } from '../types'

/**
 * MCAT Full-Length Form 3 — CARS, file B (passages 6–9; 6, 6, 6, 5 questions = 23).
 *
 * Four original argument-driven passages (500–600 words each) written to the
 * Form 3 rebuild blueprint: linguistics (dialect prestige and the idea of
 * "correct" speech), music / cultural criticism (silence in music), political
 * science (civil disobedience and the rule of law), and cultural anthropology
 * (gift exchange and obligation). Every item is answerable from the passage
 * alone; no outside knowledge is required.
 */
export const FL3_CARS_B_PASSAGES: MCATPassage[] = [
  {
    id: 'fl3-cars-b-06',
    section: 'cars',
    discipline: 'linguistics',
    title: 'The Grammar of Rank',
    passageText:
      'Few judgments are delivered with more confidence, or on flimsier grounds, than the judgment that someone has spoken incorrectly. A listener who hears “he don’t” or “we was” does not merely register a difference; she hears a mistake, and very often she hears something about the speaker as well: carelessness, poor schooling, a lack of effort. The confidence is striking because the listener would be hard pressed to say what rule has been broken, other than the rule that people like her do not talk that way.\n\nLinguists who study such forms tend to find that they are not failures of grammar but alternative grammars. A dialect in which “he don’t” is normal is not one in which agreement has collapsed; it is one in which the verb “do” takes the same form for every subject, as English verbs in the past tense already do without anyone objecting. The patterns are regular, learned in childhood, and applied consistently by their speakers. Measured against the question a grammar exists to answer — can speakers reliably produce and understand one another’s sentences? — the stigmatized dialect does exactly as well as the prestigious one.\n\nWhy, then, does one variety come to be called correct? The answer, historically, is almost never that it was more logical or more expressive. It is that it was the speech of the people who ran things: the court, the capital, the universities, the printing houses. Once their usage was written down in dictionaries and grammar books, it acquired the look of a law of nature, and the speech of everyone else became a set of deviations from it. Prestige, in other words, flows from speakers to forms, not from forms to speakers. The same construction can be admired in one century and mocked in the next, depending on who is using it.\n\nIt would be convenient to stop here and declare the idea of correct speech a mere prejudice. I do not think that conclusion follows, and those who draw it do a disservice to the very speakers they mean to defend. A standard variety, whatever its origins, is now a working tool: it is the form in which contracts, textbooks, and job applications are written, and it lets people who share no regional dialect read one another without friction. A child who is never taught it has not been liberated from an arbitrary rule; she has been excluded from a conversation that will go on without her. To tell her that her home speech is perfectly grammatical is true. To let that truth excuse the school from teaching her the standard is to mistake a fact about linguistics for a policy about opportunity.\n\nWhat should change is not whether the standard is taught but how it is described. The standard is best understood as a register — a manner of speaking fitted to certain settings — rather than as the correct version of which other dialects are corrupted copies. Speakers already shift registers constantly: no one addresses a judge the way they address a sibling, and no one thinks the sibling has been addressed incorrectly. Teaching the standard as one register among several asks a student to add a form, not to confess an error. The difference sounds small. It is the difference between telling a child that her grandmother speaks badly and telling her that she will someday need to speak in more than one way.',
    questions: [
      {
        question: 'The author’s primary purpose in the passage is to:',
        options: [
          'show that stigmatized dialects are more internally consistent than the standard variety.',
          'argue that the standard should still be taught, but framed as a register rather than as the correct form.',
          'explain how dictionaries and grammar books fixed the usage of a governing class.',
          'urge schools to stop correcting how students speak, on the grounds that correctness is merely a social prejudice.',
        ],
        correctAnswer: 1,
        explanation:
          'The passage builds toward its last two paragraphs: the author rejects the conclusion that correct speech is “a mere prejudice,” insists the standard must be taught, and proposes describing it as “a register” among several. The author claims stigmatized dialects do “exactly as well” as the prestigious one, not better, so greater consistency is never claimed. The history of dictionaries is one step in the argument, not its purpose. Urging schools to stop teaching the standard is the conclusion the author explicitly says “does not follow.”',
        skill: 'main-idea',
      },
      {
        question:
          'The author mentions that English past-tense verbs take one form for every subject in order to:',
        options: [
          'show that the dialect’s invariant “don’t” follows a pattern the standard accepts elsewhere.',
          'suggest that the standard variety is itself becoming less regular and less consistent over time.',
          'show that listeners object to irregular verbs only when they believe the speaker is poorly schooled.',
          'concede that the stigmatized dialect has borrowed its rules from the prestigious variety.',
        ],
        correctAnswer: 0,
        explanation:
          'The comparison answers the charge that “he don’t” shows collapsed agreement: a verb that keeps one form for every subject is something the standard already tolerates in the past tense “without anyone objecting,” so the dialect form is a regular pattern, not an error. Nothing is said about the standard changing over time. The comparison concerns grammatical patterns, not which listeners object to what. And the author never claims one variety borrowed from the other; the point is a parallel, not a derivation.',
        skill: 'function',
      },
      {
        question:
          'Suppose a construction now widely mocked became, over several decades, a habit of the country’s leading politicians, broadcasters, and professors. Based on the passage, the author would most likely predict that the construction would:',
        options: [
          'remain stigmatized, because judgments of correctness are fixed once they are printed in grammar books.',
          'be accepted only in casual settings, since the standard register is reserved for formal occasions.',
          'lose its stigma and come to be heard as correct, because prestige follows the speakers who use a form.',
          'spread to all speakers, since stigmatized forms disappear when influential people abandon them.',
        ],
        correctAnswer: 2,
        explanation:
          'The author holds that “prestige … flows from speakers to forms” and that a construction can be “admired in one century and mocked in the next, depending on who is using it.” A form adopted by the people who “ran things” would therefore gain prestige. The author says printing gave usage “the look of a law of nature,” not that judgments become permanent — the century-to-century reversal contradicts that. Nothing limits the newly prestigious form to casual settings. The last option reverses the scenario: the influential speakers adopt the form rather than abandon it, and the author makes no claim that forms spread to all speakers.',
        skill: 'application',
      },
      {
        question:
          'The author’s proposal that the standard be taught “as one register among several” depends on which of the following assumptions?',
        options: [
          'Students learn a register more quickly than they learn a new dialect.',
          'The standard variety expresses complex ideas more clearly than regional dialects do.',
          'Students must first be persuaded that their home speech is wrong before they will learn a new form.',
          'The way a form is described to students affects how they regard the speech they bring from home.',
        ],
        correctAnswer: 3,
        explanation:
          'The author concedes that the standard would be taught either way; what changes is only “how it is described.” That proposal matters only if the description itself shapes students’ view of their home speech — “add a form” versus “confess an error,” a grandmother who “speaks badly” versus a child who will speak “in more than one way.” The speed of learning is never discussed. The author denies that the standard won its status by being more expressive. And the proposal rests on the opposite of the third option: the whole point is that a student need not be told her speech is wrong.',
        skill: 'assumption',
      },
      {
        question:
          'Which of the following findings, if true, would most seriously challenge the author’s claim that the stigmatized dialect “does exactly as well as the prestigious one”?',
        options: [
          'Listeners who hear the dialect consistently rate its speakers as less intelligent than speakers of the standard.',
          'Speakers of the dialect often misunderstand one another when sentences turn on the stigmatized forms.',
          'Several forms now stigmatized in the dialect appeared in respected writing two centuries ago.',
          'Children who speak the dialect at home score lower on tests of standard written English.',
        ],
        correctAnswer: 1,
        explanation:
          'The author measures a grammar against one question: “can speakers reliably produce and understand one another’s sentences?” Evidence that the dialect’s own speakers misunderstand each other on exactly the stigmatized forms would show it failing that test. Listener ratings of intelligence are the social judgment the passage already describes; they say nothing about how the grammar works. Earlier respectable use of the forms supports the author’s point that prestige shifts with users. Lower scores on tests of the standard measure command of a different variety, not whether the dialect functions for its own speakers.',
        skill: 'strengthen-weaken',
      },
      {
        question:
          'The author attributes each of the following to the standard variety EXCEPT:',
        options: [
          'serving as the written form of contracts, textbooks, and job applications.',
          'letting readers from different regions understand one another without friction.',
          'expressing complex ideas more precisely than the dialects it came to outrank.',
          'originating in the usage of the court, the capital, and the universities.',
        ],
        correctAnswer: 2,
        explanation:
          'The author says a variety comes to be called correct “almost never” because “it was more logical or more expressive,” so greater precision is the one attribute the passage withholds. The written form of contracts and applications and the frictionless reading across regions are both named as reasons the standard is now “a working tool.” Its origin in the speech of “the people who ran things” — court, capital, universities — is the author’s historical explanation of its prestige.',
        skill: 'detail',
      },
    ],
  },
  {
    id: 'fl3-cars-b-07',
    section: 'cars',
    discipline: 'music / cultural criticism',
    title: 'The Sound That Is Not There',
    passageText:
      'Concert audiences obey a rule they rarely state: do not applaud until the music is over. The rule is harder to follow than it sounds, because the music is not always over when the sound stops. A slow movement may end on a note that fades until no one can say whether it is still sounding, and then hold a stillness the performers refuse to break. The listener who claps into that interval is not only impolite. She has made a mistake about where the piece ends, and so has cut off part of it.\n\nThat such a mistake is possible reveals something the usual account of music leaves out. On the usual account, music is organized sound, and silence is what surrounds it — the blank page on which the notes are printed. Silence on this view has no properties of its own. A rest is an instruction to stop, and the end of a piece is the place where the instructions run out.\n\nI think this is wrong, and that its wrongness is audible. Consider a rest in the middle of a phrase. Composers notate rests with the same precision as notes: a quarter rest, not a half; this beat, not the next. If the rest were merely a gap, its exact length would not matter so long as the music resumed. But it matters enormously. Lengthen a rest by half a beat and a phrase that sounded urgent sounds hesitant; shorten it and a question becomes a stumble. The silence has a shape, and the shape is given to it by the sounds on either side. It is heard as the absence of something in particular — the expected note, deferred.\n\nThis is the key to what silence does in music. It is never silence in general; it is always this silence, after this sound, before that one. The same two seconds of quiet mean one thing after a crashing chord and another after a whisper. Silence in music is thus not the opposite of sound but a use of it: the composer makes us hear the sound that is not there. A listener who has followed the piece fills the rest with expectation, and the fulfillment or refusal of that expectation is part of what the piece says.\n\nEndings are where this matters most, and where the usual account fails most completely. If the end of a piece were only the point where the notes run out, every ending would be the same kind of event. But some pieces close a door and some leave it open. A work that ends on a chord that seems to call for resolution, followed by a long silence, has not simply stopped. It has asked a question and declined to answer it, and the silence is where the question hangs. The performer who rushes that silence, or the listener who breaks it, has not preserved the music and trimmed a pause. They have changed the ending.\n\nNone of this makes silence mystical. It can be timed with a stopwatch, and a skeptic may insist that what I call its meaning is only the listener’s lingering memory of the last sound. I do not think the distinction does the work the skeptic wants. Every note in music is heard through the memory of the notes before it; if that makes silence merely psychological, it makes melody so as well. The rest belongs to the music for the same reason the note does: because it was placed there, and because it is heard in relation to everything around it.',
    questions: [
      {
        question: 'Which of the following best captures the central thesis of the passage?',
        options: [
          'Silence in music carries meaning only for listeners trained to follow the structure of a piece.',
          'Performers should hold the silences at the ends of pieces longer than they customarily do.',
          'Premature applause shows that the usual account of music is held by most concert audiences.',
          'The silences in a piece belong to its content and take their character from the surrounding sounds.',
        ],
        correctAnswer: 3,
        explanation:
          'The author argues against the “usual account” on which silence is a blank frame, holding instead that a rest is “always this silence, after this sound,” and that it belongs to the music “for the same reason the note does.” The author says a listener who “has followed the piece” fills the rest, but never restricts meaning to trained listeners. Performers are faulted for rushing a silence, not urged to lengthen silences in general. The applause example is used to show where a piece ends, not to measure how widely the usual account is held.',
        skill: 'main-idea',
      },
      {
        question: 'The author opens the passage with the example of premature applause primarily in order to:',
        options: [
          'introduce the idea that a piece can continue after its sound has stopped.',
          'criticize concert audiences for ignoring a well-understood rule of etiquette.',
          'suggest that the usual account of music is held mainly by inexperienced listeners.',
          'illustrate how the memory of a final sound fades during a closing silence.',
        ],
        correctAnswer: 0,
        explanation:
          'The example establishes that “the music is not always over when the sound stops,” so that clapping too soon “cut[s] off part of it” — the first step toward the claim that silence belongs to the piece. The author says the early clapper is “not only impolite”; etiquette is set aside, not the point. The usual account is attributed to a general view of music, not to inexperienced listeners. Memory of the last sound enters only later, as the skeptic’s objection, and the opening says nothing about it fading.',
        skill: 'function',
      },
      {
        question:
          'Based on the passage, the author would regard which of the following performer choices as altering the music itself?\n\nI. Cutting short the long silence that follows a piece’s final unresolved chord\nII. Lengthening a rest in the middle of a phrase by half a beat\nIII. Pausing to retune the instruments between two separate works on a program',
        options: ['I only', 'III only', 'I and II only', 'II and III only'],
        correctAnswer: 2,
        explanation:
          'For I, the author says the performer who “rushes that silence” after an unresolved ending has “changed the ending.” For II, a rest lengthened by half a beat turns an urgent phrase hesitant, so the phrase itself is altered. III does not qualify: a rest belongs to the music “because it was placed there” and is heard “in relation to everything around it,” whereas a pause for retuning between two separate works was placed by no composer and lies inside neither piece. Hence I and II only.',
        skill: 'application',
      },
      {
        question: 'The author’s reply to the skeptic in the final paragraph is best described as:',
        options: [
          'conceding that silence can be timed while denying that timing reveals anything musical.',
          'arguing that the skeptic’s reasoning, applied consistently, would make melody psychological too.',
          'granting that endings depend on memory while insisting that rests within a phrase do not.',
          'dismissing the skeptic’s view as a failure to hear what practiced listeners actually hear.',
        ],
        correctAnswer: 1,
        explanation:
          'The author answers that “every note in music is heard through the memory of the notes before it,” so if reliance on memory makes silence “merely psychological, it makes melody so as well” — the objection proves too much. The author does grant that silence “can be timed,” but the reply does not turn on denying that timing matters. No distinction between endings and mid-phrase rests is drawn; both are treated alike. And the reply is an argument about the skeptic’s logic, not an appeal to the superior hearing of practiced listeners.',
        skill: 'inference',
      },
      {
        question:
          'Suppose listeners hear an identical two-second silence in two recordings and call it “tense” when it follows an unresolved chord but “restful” when it follows a resolved one. The author would most likely regard this result as:',
        options: [
          'support for the claim that a silence takes its character from the sound that precedes it.',
          'evidence for the skeptic, since the listeners are reacting to their memory of the chord.',
          'irrelevant, since the argument concerns what composers intend rather than what listeners report.',
          'a challenge to the claim that silences have a shape, since both silences had the same length.',
        ],
        correctAnswer: 0,
        explanation:
          'The author claims that “the same two seconds of quiet mean one thing after a crashing chord and another after a whisper”; identical silences heard differently depending on the preceding chord fit that claim. The author has already argued that a reaction mediated by memory does not make silence “merely psychological,” so the result would not be conceded to the skeptic. The author’s evidence is itself about how silences are heard, so listener reports are relevant. And the author says a silence’s shape comes from “the sounds on either side,” not from its length alone, so equal lengths pose no challenge.',
        skill: 'new-information',
      },
      {
        question: 'According to the author, the usual account of music is unable to explain why:',
        options: [
          'audiences hesitate to applaud when a piece ends on a loud, fully resolved chord.',
          'composers mark notes with greater precision than they mark the rests between them.',
          'two pieces whose sound stops in the same way can nonetheless end differently.',
          'listeners go on remembering the final sound of a piece after the players stop.',
        ],
        correctAnswer: 2,
        explanation:
          'The author says that if an ending were only “the point where the notes run out, every ending would be the same kind of event,” yet “some pieces close a door and some leave it open” — a difference the usual account cannot capture. Hesitation to applaud after a resolved chord is never discussed. The author says rests are notated “with the same precision as notes,” so the second option misstates the passage. Lingering memory of the last sound is the skeptic’s explanation, which fits comfortably within the usual account rather than escaping it.',
        skill: 'detail',
      },
    ],
  },
  {
    id: 'fl3-cars-b-08',
    section: 'cars',
    discipline: 'political science',
    title: 'An Argument Addressed to Everyone',
    passageText:
      'Critics of civil disobedience usually make one argument, and it is a serious one. A legal order, they say, depends less on police than on habit: on millions of people obeying laws they dislike because they accept that disputes are to be settled by legislatures and courts rather than by each person’s conscience. Every deliberate violation, however noble its motive, teaches that the habit is optional. The protester who blocks a road to oppose an unjust law may be right about the law, but he has also announced that he will obey only the laws he approves of — and if everyone reasoned that way, there would be no law at all, only a collection of private verdicts.\n\nDefenders reply by pointing to the familiar conditions under which disobedience is supposed to be civil: it must be public, nonviolent, aimed at a specific injustice, and undertaken by people willing to accept the legal penalty. The last condition carries most of the weight. By submitting to arrest and punishment, the disobedient shows that he respects the system even while defying one of its rules. He breaks the law in a way that honors law.\n\nI find this reply unsatisfying, and not because the conditions are wrong. It is that the reply accepts the critic’s picture of what the rule of law is. On that picture, the rule of law just is the habit of obedience, and the disobedient can only minimize the damage — by paying a price that signals his deference. Accepting punishment becomes a kind of apology offered in advance.\n\nBut the rule of law was never mainly a matter of obedience. Its core is the idea that power must answer to reasons that can be stated publicly and applied to everyone alike: that no one is above the law, that officials must justify what they do, that like cases be treated alike. A population that obeyed every command out of habit, including commands that violated these principles, would not be living under the rule of law. It would be living under a very orderly form of rule by whoever gave the commands.\n\nSeen this way, the question to ask about an act of disobedience is not whether it shows deference but whether it addresses the public in the language of those principles. The civil disobedient does not announce that she will obey only what she likes. She says, in effect: this law treats like cases unalike, or exempts the powerful, or cannot be justified by reasons you yourselves accept — and I am willing to be seen saying so. That is why publicity matters more than any other condition. An act done in secret appeals to no one; an act done openly, before the same public that makes the law, is an argument addressed to that public.\n\nAccepting punishment still has a place in this account, but a different one. It is not an apology. It is a way of keeping the argument inside the shared framework — of refusing to put oneself beyond the law’s reach while insisting that the law reach further than it has. The critic is right that a society of private verdicts would have no law. He is wrong to think that the disobedient is issuing one. She is appealing, over the head of a particular statute, to the principles by which every statute must be judged.',
    questions: [
      {
        question: 'The critics’ argument in the first paragraph relies on which of the following assumptions?',
        options: [
          'Most of the laws that people dislike are in fact just laws that serve the public interest.',
          'Onlookers draw from a violation the lesson that obedience is optional, whatever reasons accompany it.',
          'Police enforcement can maintain order on its own once the habit of obedience has weakened.',
          'Protesters who block roads usually act from self-interest rather than from principle.',
        ],
        correctAnswer: 1,
        explanation:
          'The critics hold that “every deliberate violation, however noble its motive, teaches that the habit is optional.” That inference goes through only if observers take away the bare fact of violation regardless of the reasons offered — the very step the author later disputes by recasting disobedience as a public argument. The critics even allow that the protester “may be right about the law,” so they need not assume disliked laws are just. They say order depends “less on police than on habit,” the opposite of the third option. And they grant a “noble” motive, so no assumption of self-interest is needed.',
        skill: 'assumption',
      },
      {
        question:
          'The author’s remark that a population obeying every command out of habit would live under “a very orderly form of rule by whoever gave the commands” serves mainly to:',
        options: [
          'suggest that critics of civil disobedience secretly favor authoritarian government.',
          'concede that habitual obedience is a necessary precondition of the rule of law.',
          'suggest that orderly societies are seldom governed by laws that are just.',
          'show that habitual obedience does not by itself amount to the rule of law.',
        ],
        correctAnswer: 3,
        explanation:
          'The sentence follows the claim that “the rule of law was never mainly a matter of obedience”: a perfectly obedient population can still lack the rule of law if the commands violate its principles, so obedience alone is not enough. The author calls the critics’ argument “serious” and nowhere imputes motives to them. Far from conceding that habit is a precondition, the remark separates the two ideas. And the example is a single hypothetical, not a claim about how often orderly societies have just laws.',
        skill: 'function',
      },
      {
        question: 'Which of the following best expresses the main point of the passage?',
        options: [
          'Civil disobedience can uphold the rule of law when it appeals openly to the principles on which law rests.',
          'Civil disobedience is justified only when the disobedient accepts the full legal penalty for the violation.',
          'The rule of law depends chiefly on habitual obedience, which civil disobedience inevitably erodes.',
          'Civil disobedience should be judged by whether it succeeds in changing the laws it targets.',
        ],
        correctAnswer: 0,
        explanation:
          'The author redefines the rule of law as power answering “to reasons that can be stated publicly and applied to everyone alike,” and concludes that the disobedient appeals “to the principles by which every statute must be judged.” Making acceptance of the penalty the decisive justification is the defenders’ reply, which the author finds “unsatisfying.” Equating the rule of law with habitual obedience is the critics’ picture, which the author rejects. The author never judges disobedience by its success in changing laws.',
        skill: 'main-idea',
      },
      {
        question: 'The author’s disagreement with the defenders described in the second paragraph concerns chiefly:',
        options: [
          'whether civil disobedience must be carried out without violence.',
          'whether the disobedient ought to submit to arrest and punishment.',
          'whether an act of disobedience must target a specific injustice.',
          'what the disobedient’s acceptance of punishment is taken to express.',
        ],
        correctAnswer: 3,
        explanation:
          'The author objects to the defenders “not because the conditions are wrong” but because they treat accepting punishment as “a price that signals … deference,” an “apology offered in advance”; the author reinterprets the same act as keeping the argument “inside the shared framework.” The dispute is therefore over what submission means, not whether it should happen — the author says it “still has a place.” Nonviolence and the targeting of a specific injustice are conditions the author leaves unchallenged.',
        skill: 'detail',
      },
      {
        question:
          'Which of the following actions would the author consider LEAST consistent with civil disobedience as the passage characterizes it?',
        options: [
          'A physician announces at a press conference that she will ignore a rule she says treats rural patients unequally.',
          'Unidentified activists disable construction equipment at night to halt a project they consider unjust.',
          'Students occupy an office in front of cameras to protest a campus rule that exempts wealthy donors.',
          'A taxpayer openly withholds a tax and tells officials in writing that the tax falls on only one group.',
        ],
        correctAnswer: 1,
        explanation:
          'For the author, the decisive feature is that the act “addresses the public”: “an act done in secret appeals to no one.” Unidentified activists acting at night make no argument to anyone and conceal who is responsible. The physician, the students, and the taxpayer each act openly and each names a failure of the principles the author lists — unequal treatment or an exemption for the powerful — so each fits the author’s account.',
        skill: 'application',
      },
      {
        question: 'Which of the following findings, if true, would most weaken the author’s response to the critics?',
        options: [
          'People who witness open, reasoned acts of disobedience become more willing to break unrelated laws they dislike.',
          'Acts of disobedience carried out in secret rarely bring about any lasting change in the laws they were meant to oppose.',
          'Most civil disobedients justify their actions by appealing to equal treatment under the law.',
          'Courts often reduce the penalties imposed on those who break the law in public protest.',
        ],
        correctAnswer: 0,
        explanation:
          'The author answers the critics by denying that the disobedient issues a “private verdict”: an open act is “an argument addressed to that public.” If people who watch exactly such open, principled acts nonetheless become readier to ignore unrelated laws, then the critics’ worry — that violation teaches “the habit is optional” — holds even for the author’s model case. The ineffectiveness of secret acts is compatible with the author’s emphasis on publicity. Disobedients appealing to equal treatment supports the author’s description. Reduced penalties bear on how courts respond, not on what the act teaches or expresses.',
        skill: 'strengthen-weaken',
      },
    ],
  },
  {
    id: 'fl3-cars-b-09',
    section: 'cars',
    discipline: 'cultural anthropology',
    title: 'Never Quite Even',
    passageText:
      'In many of the communities anthropologists have studied, a gift that is repaid at once is an insult. Return a borrowed dish the same evening, filled with exactly what it held when it came to you, and you have not been gracious; you have told your neighbor that you wish to owe her nothing. The proper return comes later, and it is not quite the same: a little more, or a little different, offered at a moment of the giver’s choosing. The delay and the difference are not flaws in the exchange. They are its purpose.\n\nOutsiders, and some anthropologists too, have been tempted to read such customs cynically. On this reading, the gift is trade in disguise. Everyone knows a return is expected; the talk of generosity merely hides a calculation of interest, and the insistence on delay only stretches out the credit. The cynic takes himself to be seeing through the gift to the ledger beneath it.\n\nI think the cynic has seen something true and drawn the wrong conclusion from it. He is right that the gift obligates. There is no such thing, in these communities, as a gift that asks for nothing; a present that could never be answered would be a humiliation, not a kindness. Where he goes wrong is in assuming that because an obligation is created, the obligation must be a price. A price is designed to be settled. The point of paying it is to be free of the seller. The obligation created by a gift is designed not to be settled — or rather, to be settled only by the creation of a new obligation running the other way.\n\nThis is why the return must be delayed and must not be exact. An exact and immediate return closes the account, and a closed account is a relationship that has ended. A return that comes later, and that slightly exceeds or differs from what was given, leaves the account open in the opposite direction. Now the first giver owes something. The exchange does not balance; it alternates, and the alternation is the relationship. Two households that trade gifts over a lifetime are never even with each other, and the day they become even is the day they have nothing further to do with one another.\n\nThe market, by contrast, prizes exactly what the gift avoids. Its great virtue is that it allows strangers to deal with one another without becoming anything to one another. I pay, you deliver, and we part owing nothing. That freedom is real, and it would be foolish to wish it away; a society in which every purchase created a lifelong tie would be exhausting, and closed to anyone without the right connections. But the market’s logic helps to explain why people raised within it often feel uneasy about gifts. We tend to want our presents to be free, and when we discover that a gift carries an expectation we feel that it has been spoiled, as though the obligation were a hidden charge. The communities I have described would find that feeling strange. For them the obligation is not what spoils the gift but what makes it one. A gift without obligation would be a gift without a future — a gesture made by someone who wanted nothing more to do with you.',
    questions: [
      {
        question: 'The author’s example of the returned dish in the first paragraph functions mainly to:',
        options: [
          'show that people in these communities regard the lending of household goods as a burden.',
          'establish that gifts in these communities are in fact loans that must eventually be repaid.',
          'illustrate a point on which the author and the cynical reading turn out to agree fully.',
          'present a custom whose timing and form the author will go on to interpret.',
        ],
        correctAnswer: 3,
        explanation:
          'The dish returned “the same evening” and “exactly” as it came is a concrete case of the claim that “the delay and the difference … are its purpose,” which the rest of the passage explains. Nothing suggests lending is resented; the point is how a return is made. Treating gifts as loans is close to the cynic’s reading, which the author rejects. And the author and cynic do not fully agree: they share only the premise that gifts obligate, and they read the delay in opposite ways — credit for the cynic, an open relationship for the author.',
        skill: 'function',
      },
      {
        question:
          'The author’s attitude toward the market’s way of letting strangers deal with one another without further obligation is best described as:',
        options: [
          'disapproving, since it has taught people to distrust the gifts that they receive.',
          'indifferent, since the passage is concerned only with gift-giving communities.',
          'appreciative of its value, while holding that it colors how gifts are perceived.',
          'enthusiastic, since it frees people from the burden of lifelong ties to others.',
        ],
        correctAnswer: 2,
        explanation:
          'The author calls the market’s freedom “real,” says “it would be foolish to wish it away,” and gives reasons a world of lifelong ties would be worse — yet adds that the market’s logic explains why its members find obligating gifts “spoiled.” That is qualified appreciation. It is not disapproval: the unease about gifts is explained, not blamed on the market as a fault. It is not indifference, since the author devotes a paragraph to the comparison. And “enthusiastic” overstates a view that immediately turns to what the market’s logic obscures.',
        skill: 'tone',
      },
      {
        question:
          'Two coworkers have for years taken turns buying each other lunch, each usually choosing a slightly costlier place than the last. One day, after being treated, one of them hands the other the exact price of the meal in cash. The author would most likely interpret this act as:',
        options: [
          'a signal that the coworker wishes to step back from the relationship.',
          'a courteous effort to spare the other the cost of their shared lunches.',
          'proof that the lunches had been a disguised form of trade from the very start.',
          'a sign that the two coworkers have at last become friends on equal terms.',
        ],
        correctAnswer: 0,
        explanation:
          'For the author, “an exact and immediate return closes the account, and a closed account is a relationship that has ended”; paying the precise price at once is such a return, and it breaks an alternating exchange that had kept the account open. Reading the payment as mere courtesy is the market’s view, which the author says the gift-giving communities would find strange. The payment does not show the earlier lunches were trade; the author denies that the obligation in a gift is a price. And becoming “even” is, on the author’s account, the day two parties have “nothing further to do with one another,” not the start of an equal friendship.',
        skill: 'application',
      },
      {
        question:
          'Which of the following discoveries about one of these communities would most support the cynical reading over the author’s interpretation?',
        options: [
          'Households that exchange gifts also help one another at harvest and in settling disputes.',
          'People say that the debt created by a gift lasts as long as both households endure.',
          'Gifts between close kin are returned more slowly than gifts between distant neighbors.',
          'The excess expected in a return is fixed by custom and grows with the delay.',
        ],
        correctAnswer: 3,
        explanation:
          'The cynic reads the delay as “stretch[ing] out the credit” and the excess as a hidden calculation of interest. An excess set by rule and scaled to the length of the delay is exactly how interest on a loan behaves, which would make the gift look like a price after all. Wider cooperation between gift partners fits the author’s claim that the exchange is the relationship. A debt said to last as long as the households fits the author’s claim that the obligation is not designed to be settled. Slower returns among close kin are likewise consistent with gifts sustaining the closest ties, not with a calculation of interest.',
        skill: 'strengthen-weaken',
      },
      {
        question:
          'Suppose it were observed that when a household in one of these communities prepares to move away for good, its neighbors hurry to return every outstanding gift in exact measure before it leaves. The author would most likely regard this observation as:',
        options: [
          'evidence that the obligation created by a gift is at bottom a price that must be settled.',
          'consistent with the view that squaring a gift account in full marks the end of a relationship.',
          'a challenge to the claim that an exact and immediate return is received as an insult.',
          'irrelevant, since the argument concerns only households that remain neighbors for life.',
        ],
        correctAnswer: 1,
        explanation:
          'The author holds that a closed account “is a relationship that has ended” and that the day two households become even is the day they have “nothing further to do with one another.” When a relationship is in fact ending, settling every account exactly is what the author’s view predicts. Settlement at a departure does not show that gifts are prices during an ongoing relationship; it fits the author’s point that settling ends the tie. The insult of an immediate exact return lies in ending a relationship unilaterally, and here the relationship is ending anyway. Far from being irrelevant, the case tests the author’s account of what exact settlement signifies.',
        skill: 'new-information',
      },
    ],
  },
]
