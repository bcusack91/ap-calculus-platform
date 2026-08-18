import type { MCATPassage } from '../types'

/**
 * MCAT CARS — Language & Education pool.
 *
 * Six original, argument-driven passages (500-600 words each) in a single
 * author’s voice, each advancing a thesis that is defended against a stated
 * objection: linguistic prescriptivism, philosophy of meaning, rhetoric and
 * persuasion, the purpose of schooling, literacy and rereading, and language
 * policy for endangered languages.
 *
 * AI-authored; needsReview is true on every passage and item pending SME review.
 */
export const CARS_LANGUAGE_ED_PASSAGES: MCATPassage[] = [
  {
    id: 'cars-lang-01',
    section: 'cars',
    discipline: 'linguistics',
    title: 'The Rules of the Club',
    needsReview: true,
    passageText:
      'The linguist’s case against prescriptive grammar is by now so thoroughly established that it circulates as a slogan rather than an argument. Nonstandard forms are not corruptions; they are systems. The double negative obeys constraints as intricate as any in the standard dialect, and speakers who produce it produce it consistently, which is precisely what a rule looks like from the inside. The speaker of a stigmatized variety is not failing to follow rules. He is following different ones. I accept every word of this. What I do not accept is the conclusion routinely drawn from it.\n\nThe conclusion runs: since prescriptive rules describe no natural fact about the language, they are arbitrary; and being arbitrary, they are unimportant; and therefore correcting a student’s speech is snobbery wearing a lab coat. The inference collapses at its second step. Money is arbitrary. Nothing in the fiber of a banknote entitles it to purchase bread. Yet no one concludes that money is unimportant, or advises a young person to disregard it. Arbitrariness is a claim about where a convention came from. It says nothing whatever about the convention’s present force. A rule that could have been otherwise may still be, this morning, the rule by which doors open and close.\n\nWhat descriptivism actually established, then, is not that the prescriptive rules are powerless but that they were misdescribed. They were never rules of the language. They are rules of a club — the entry conditions of a particular guild of editors, employers, and admissions committees. The prescriptivist’s sin was never that he cared about form. It was that he dressed a preference as a logic, insisting that "between you and I" offends reason when the honest statement is that it offends him and the people he lunches with.\n\nThis reframing has a consequence the descriptivist rarely faces. If the rules belong to a club, then telling a student to ignore them is telling him to skip an interview. Notice who can afford to give that advice. The professor who announces that grammar is a fiction has already been admitted; his membership is secure and his sentences are impeccable, which is how he came to be in a position to call the whole thing a fiction. The advice costs him nothing. The student who takes it pays the entire tuition.\n\nThe obvious objection is that teaching the standard dialect ratifies an unjust arrangement — that every hour spent drilling a convention is an hour spent endorsing the guild that imposed it. But the toll booth does not vanish when we decline to hand out coins. There is a difference between endorsing a barrier and equipping people to cross it, and the difference lies entirely in what we say while we teach. To present the standard dialect as a costume — this is the uniform worn where you are going, and here is how to wear it — is not the same act as presenting it as a correction. The first arms a student. The second shames him, and shames him for a fact about his grandparents rather than a fact about his mind.\n\nWhat I am proposing is not a truce but a division of labor. The linguist is right about what language is, and his authority there is complete. It does not extend to what a teacher should do on Tuesday morning, because that question was never a question about language at all. The long war has been fought, from the beginning, over the confusion of the two.',
    questions: [
      {
        question: 'Which of the following best captures the central thesis of the passage?',
        options: [
          'Prescriptive rules accurately describe the underlying logic of English and should be defended on that basis.',
          'Because prescriptive rules are arbitrary conventions, students are best served by being told to disregard them.',
          'Prescriptive rules describe no fact about the language, yet remain consequential as the entry conditions of a social guild, so they should be taught without being presented as logic.',
          'The nonstandard varieties studied by linguists are less systematically rule-governed than the standard dialect.',
        ],
        correctAnswer: 2,
        explanation:
          'The author grants the descriptivist finding in full ("I accept every word of this") and rejects only the inference drawn from it, concluding that the rules are "rules of a club" that should be taught "as a costume" rather than "as a correction." The option defending prescriptive rules as logic is exactly the sin the author names — dressing "a preference as a logic." The option urging students to disregard the rules is the descriptivist conclusion the author calls collapse-prone advice that costs its giver nothing. The option ranking nonstandard varieties as less rule-governed contradicts the first paragraph, which insists such speakers are "following different" rules.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s discussion of money in the second paragraph serves primarily to:',
        options: [
          'illustrate that a convention’s arbitrary origin does not diminish its present force',
          'propose that linguistic standards be regulated in the way currency is regulated',
          'argue that economic inequality is the underlying source of grammatical prejudice',
          'concede that descriptivists have correctly identified the origin of prescriptive rules',
        ],
        correctAnswer: 0,
        explanation:
          'The money example is introduced to break the chain "arbitrary, therefore unimportant": nothing in a banknote entitles it to buy bread, yet "no one concludes that money is unimportant." Its work is entirely about force versus origin. The regulation option literalizes an analogy the passage never extends into policy. The inequality option imports an economic thesis the passage does not argue. The concession option misidentifies the function — the author concedes descriptivist findings in the first paragraph, but this paragraph is a rebuttal, not a concession.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'The author’s remark that the professor who calls grammar a fiction "has already been admitted" most strongly implies that:',
        options: [
          'professors are generally insincere about their views on language',
          'academic linguists lack the training required to advise students about employment',
          'the standard dialect is easier to acquire for those who study language professionally',
          'advice to disregard the standard dialect is cheapest for those who no longer need it',
        ],
        correctAnswer: 3,
        explanation:
          'The sentence continues: "The advice costs him nothing. The student who takes it pays the entire tuition." The point is an asymmetry of cost between adviser and advised. Insincerity is not alleged; the author treats the professor’s view as sincere and secure. Training in employment counseling is never raised. Ease of acquisition inverts the passage, which says the professor’s impeccable sentences are how he came to be in a position to call the rules a fiction, not that his profession made them easy.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'Which of the following findings, if true, would most WEAKEN the author’s argument for teaching the standard dialect?',
        options: [
          'Employers report noticing nonstandard usage during job interviews.',
          'Hiring and admissions outcomes for speakers of nonstandard varieties are unaffected by how those speakers speak.',
          'Linguists broadly agree that nonstandard varieties are internally consistent systems.',
          'Students taught the standard dialect as a costume report less shame than those taught it as a correction.',
        ],
        correctAnswer: 1,
        explanation:
          'The whole practical argument rests on the claim that the guild controls real doors — that skipping the convention means "skipping an interview." If speech makes no difference to hiring and admissions, the toll booth the author describes does not exist and the case for teaching evaporates. Employers noticing usage supports the author rather than weakening him. Agreement that nonstandard varieties are systematic is a premise the author already grants in the opening paragraph. Reduced shame under the costume framing supports the author’s recommended manner of teaching.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A school district is drafting guidance on how teachers should treat students’ home dialects. Which policy language most closely matches the author’s position?',
        options: [
          'Instruction should present the standard dialect as the register expected in specified settings, without characterizing students’ home speech as incorrect.',
          'Instruction should correct nonstandard forms wherever they appear, since disciplined thinking depends on standard grammar.',
          'Instruction should not teach the standard dialect, since its rules reflect social preference rather than linguistic logic.',
          'Instruction should treat all varieties as equally useful in every setting, since no variety is linguistically superior.',
        ],
        correctAnswer: 0,
        explanation:
          'This is the "costume" prescription stated as policy: teach the uniform worn where students are going, and do not frame home speech as an error. Correcting nonstandard forms in the name of disciplined thinking is precisely the disguised preference the author attacks. Declining to teach the standard is the advice the author says the adviser can afford and the student cannot. The last option is half right and half wrong: no variety is linguistically superior, but the author insists varieties are emphatically not equally useful in every setting, which is the entire practical problem.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward descriptivist linguists is best characterized as:',
        options: [
          'dismissive of their findings and doubtful of their methods',
          'wholly admiring, without reservation',
          'accepting their conclusions about language while faulting the practical advice drawn from those conclusions',
          'openly hostile, regarding their project as a fashionable pretense',
        ],
        correctAnswer: 2,
        explanation:
          'The author says of the linguistic case "I accept every word of this" and later that "the linguist is right about what language is, and his authority there is complete," while objecting that this authority "does not extend to what a teacher should do on Tuesday morning." Dismissal and hostility both overshoot a passage that concedes the science outright. Unreserved admiration ignores the sustained criticism of the advice, which occupies most of the passage.',
        skill: 'tone',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-lang-02',
    section: 'cars',
    discipline: 'philosophy of language',
    title: 'The Instrument You Borrowed',
    needsReview: true,
    passageText:
      'A familiar sentence follows every accusation of having said something wounding: "That is not what I meant." It is offered as though it closed the matter, and the ease of the offering reveals a picture of language most people carry without inspecting it. On that picture, an utterance is a container into which a speaker deposits an intention, and the meaning of the utterance simply is whatever was deposited. I want to argue that the picture is false, and false in a way whose consequences reach well past the etiquette of apology.\n\nBegin with a distinction our practice already respects, even when our theories do not: the difference between what a speaker means and what her words mean. Suppose I say "the bank is closed," thinking of a swollen river, and my hearer walks away believing his account is inaccessible. Something has gone wrong, but the misunderstanding is not his failure. He read the sentence correctly. What my words meant was fixed long before I opened my mouth, by an accumulated public practice that had to coordinate strangers before I arrived and will go on coordinating them after I am gone. I did not build the instrument. I picked it up.\n\nThe intentionalist has a reply that deserves respect, because intentions plainly are not nothing. Irony is the standard exhibit: the words say one thing, the speaker unmistakably means its opposite, and competent hearers track the reversal without effort. So intention must be doing real work. It is — but observe how it does it. Irony functions only because the words go on meaning what they publicly mean while the speaker leans against that meaning. You cannot say the opposite of what your words mean unless your words mean something independently of you. Intention rides on public meaning, and a passenger cannot be the driver.\n\nA sharper objection: if meaning were a public settlement, language could never change. Every innovation would be an error and every metaphor a mistake. But this confuses a meaning that is strict with a meaning that is fixed. Innovation is intelligible precisely because it strains against a standing sense — "he is a wall" informs me only because "wall" stubbornly continues to denote a wall. Novelty is parasitic on stability. A community can then ratify the strain and absorb the new use, at which point the meaning has genuinely moved. What no individual can do is move it by private decision.\n\nReturn now to the apology. "That is not what I meant" may be entirely sincere and still be beside the point, because the speaker reached for an instrument she did not make, whose shape was determined by everyone who used it before her. She is answerable for the shape. This is not a piece of moralizing about offense; it is an implication of borrowing. Anyone who wants the enormous convenience of being understood without first explaining himself has already accepted the terms on which that convenience is offered.\n\nNone of this leaves the speaker helpless, and the proof is an ordinary practice we never think to explain. Writers revise. They revise sentences whose intended meaning they know perfectly well, because knowing what one meant has never been sufficient. Revision is the working recognition that the words will go out and do their work in rooms where the author is not present to correct them. To write well is to labor not on what I mean but on what my sentences will mean once I am gone from the room.',
    questions: [
      {
        question: 'The passage’s central claim is that:',
        options: [
          'speakers’ intentions are irrelevant to communication and should be disregarded entirely',
          'what a speaker’s words mean is fixed by public practice rather than private intention, so speakers are answerable for the words they borrow',
          'because language changes continually, no utterance possesses a determinate meaning',
          'a sincere statement that one meant no harm ordinarily resolves disputes about wounding speech',
        ],
        correctAnswer: 1,
        explanation:
          'The author argues that a word’s meaning "was fixed long before I opened my mouth, by an accumulated public practice," and draws the consequence that a speaker "is answerable for the shape" of an instrument she did not make. The option calling intentions irrelevant overshoots: the author concedes "intentions plainly are not nothing" and explains their role in irony. The indeterminacy option reverses the passage, which insists meaning is strict even while not being frozen. The last option is the apology the passage sets out to defeat.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'In context, the statement that "a passenger cannot be the driver" most nearly means that:',
        options: [
          'hearers rather than speakers determine what a conversation is about',
          'speakers should avoid irony because it is so easily misread',
          'public meanings shift only when many speakers change their usage simultaneously',
          'intention can exploit a word’s public meaning only by depending on it, and therefore cannot be its source',
        ],
        correctAnswer: 3,
        explanation:
          'The metaphor closes the irony paragraph, whose point is that "you cannot say the opposite of what your words mean unless your words mean something independently of you." Intention travels on a vehicle it does not steer. The hearer-authority option overstates a role the passage never assigns to hearers, who are described as reading correctly, not as deciding. The advice against irony contradicts a paragraph that treats irony as successfully understood. The simultaneity claim is a statement about how change happens, which is a later paragraph’s topic and not what this metaphor asserts.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
      {
        question: 'Based on the passage, the author would most likely regard a language whose terms were given meaning by one person’s intentions alone as:',
        options: [
          'unable to do what the author says meaning does, since its terms would answer to no shared practice',
          'the purest instance of meaning, since the speaker’s intention would be perfectly transparent',
          'possible but seldom attempted, because most speakers prefer the convenience of an existing language',
          'equivalent to metaphor, which likewise departs from established usage',
        ],
        correctAnswer: 0,
        explanation:
          'Meaning, on this account, is "an accumulated public practice that had to coordinate strangers"; a vocabulary answerable to a single person coordinates no one and so cannot perform the function the passage assigns to meaning. Treating private intention as the purest case reverses the thesis outright. The "seldom attempted" option grants the possibility the argument denies and substitutes a psychological explanation for a conceptual one. The metaphor comparison misreads the passage, which insists metaphor works by depending on established usage rather than escaping it.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'The author raises the objection concerning language change primarily in order to:',
        options: [
          'concede that the public account of meaning must ultimately be abandoned',
          'establish that metaphor is a species of error that communities tolerate',
          'draw a distinction between a meaning that is strict and one that is fixed, and thereby answer a challenge to the public account',
          'show that individual speakers gradually steer the direction of linguistic change',
        ],
        correctAnswer: 2,
        explanation:
          'The objection ("language could never change") is answered by the explicit distinction: "this confuses a meaning that is strict with a meaning that is fixed," after which the author shows that novelty is "parasitic on stability." Nothing is abandoned; the account survives the challenge intact. Metaphor is presented as intelligible and informative, not as tolerated error. The final option contradicts the paragraph’s closing line, which denies that any individual can move a meaning by private decision.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following observations, if true, would most STRENGTHEN the author’s account of linguistic innovation?',
        options: [
          'New words enter a language most often through deliberate coinage by individual writers.',
          'Most speakers are unable to state definitions for the words they use most frequently.',
          'Speech communities differ widely in how rapidly they absorb novel usages.',
          'Novel metaphors are understood only by hearers already familiar with the standard sense of the words involved.',
        ],
        correctAnswer: 3,
        explanation:
          'The author’s account requires that "novelty is parasitic on stability" — that "he is a wall" informs only because "wall" still denotes a wall. Evidence that comprehension of a fresh metaphor depends on prior grasp of the standard sense is direct confirmation. Coinage by individual writers cuts the other way, suggesting private decision can install meaning. Inability to produce definitions is true-sounding but bears on speakers’ metalinguistic skill, not on whether innovation depends on standing meanings. Variation in absorption rates concerns the speed of ratification, leaving the mechanism untouched.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A novelist rewrites a paragraph whose meaning she is certain she already understands. The author would most likely describe this revision as:',
        options: [
          'evidence that the novelist’s stated intentions were insincere',
          'an acknowledgment that the sentences must do their work without her present to explain them',
          'an attempt to fix the meaning of her words by private decision',
          'unnecessary, since her intention already settles what the paragraph means',
        ],
        correctAnswer: 1,
        explanation:
          'The closing paragraph offers exactly this case: writers revise "because knowing what one meant has never been sufficient," and revision is "the working recognition that the words will go out and do their work in rooms where the author is not present." Insincerity is never at issue; the author treats the writer’s self-knowledge as genuine. Private fixing of meaning is the thing the passage says no individual can accomplish, and revision is the concession to that fact rather than an instance of it. The final option restates the intentionalist picture the passage rejects.',
        skill: 'application',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-lang-03',
    section: 'cars',
    discipline: 'rhetoric',
    title: 'Persuasion in the Open',
    needsReview: true,
    passageText:
      'Rhetoric has been on trial since Plato, and the charge has not changed: it aims at winning rather than at truth. The standard modern defense is that the charge assumes an impossible alternative. No argument reaches anyone unclothed. Every proof must be arranged, timed, and pitched to a particular audience, and the choice of arrangement is rhetoric whether or not the arranger admits it. There is no naked reason that could be preferred to the dressed kind.\n\nThis defense is true, and I have never seen it accomplish anything. It establishes only that all persuasion involves technique, and it leaves untouched the distinction the accusation actually demands: between the technique that respects an audience and the technique that works upon it. Answering "everyone uses technique" to a charge of manipulation is like answering "everyone handles money" to a charge of theft.\n\nI propose a test that does draw the line. A persuasive technique is legitimate to the extent that it survives disclosure — that is, if announcing it to the audience would not destroy its force. Consider: "I have placed my strongest reason at the end, because you will remember what you hear last." The audience nods; the reason is still the strongest; the arrangement still helps. Now consider: "I have shown you the photograph of a frightened child so that your fear would do the work my evidence cannot." The moment that sentence is spoken the effect dies, and the manner of its dying is a confession.\n\nWhy should disclosure track anything that matters? Because manipulation is by its nature parasitic on concealment. It operates on an audience rather than through them, and it requires that they not notice the operation, which is why every manipulative technique has a description its user would rather not read aloud. A technique that can be handed over intact is a technique that leaves the verdict with the listener. It treats agreement as something worth having rather than something worth extracting.\n\nThe hard objection is not that the test is too strict but that it is too easily passed. Demagogues disclose constantly and lose nothing. "They will tell you that I am playing on your anger," says the speaker. "I am. Your anger is correct." Disclosure has occurred; the crowd roars louder than before. If the worst persuasion clears the bar, the bar measures nothing.\n\nI concede the objection in part, and the concession is not a formality: the test is not sufficient. But look closely at what the demagogue’s announcement has actually done. It has converted a hidden mechanism into an open claim — the claim that the anger is warranted by the facts. That claim is now standing in public, where it can be examined, checked against evidence, and denied. The concealed version could not be answered because it was never asserted; one cannot refute an atmosphere. Disclosure does not guarantee that the persuasion is good. It guarantees that the persuasion has become an argument, and being an argument is the only condition under which anything can be answered at all.\n\nSo the test is a necessary condition and a diagnostic, not a certificate. Its usefulness lies less in the verdicts it issues than in the discipline it imposes on the speaker, for it asks something more demanding than sincerity. A sincere speaker believes his conclusion; this test asks whether he could bear to have his means read aloud to the very people they are aimed at. The speaker who could not bear it already knows something about his methods that he is hoping his audience never learns.',
    questions: [
      {
        question: 'Which statement best expresses the author’s central position?',
        options: [
          'Rhetoric cannot be distinguished from manipulation, and the ancient charge against it should be accepted.',
          'Because every argument requires arrangement and delivery, no line can be drawn between honest and dishonest persuasion.',
          'A persuasive technique is legitimate if and only if it can be announced to an audience without losing its force.',
          'Persuasion that withstands disclosure has been converted into a claim that can be examined and answered, which is the condition legitimate persuasion requires.',
        ],
        correctAnswer: 3,
        explanation:
          'The author builds to the formulation that disclosure "guarantees that the persuasion has become an argument, and being an argument is the only condition under which anything can be answered at all." Accepting Plato’s charge outright contradicts a passage devoted to defending a legitimate rhetoric. The second option is the standard defense the author calls true but useless. The third is the trap of an overstated key: "if and only if" makes the test sufficient, which the author explicitly concedes it is not.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward the standard defense that "no argument reaches anyone unclothed" is best described as:',
        options: [
          'enthusiastic endorsement of a decisive rebuttal',
          'agreement that it is true, combined with dissatisfaction that it settles nothing',
          'suspicion that it is a rationalization advanced in bad faith',
          'indifference, since the author regards the ancient charge as unimportant',
        ],
        correctAnswer: 1,
        explanation:
          'The author writes, "This defense is true, and I have never seen it accomplish anything," then explains that it leaves untouched "the distinction the accusation actually demands." That is acceptance plus impatience. Enthusiastic endorsement ignores the immediate complaint. Bad faith is never alleged; the defense is faulted for insufficiency, not dishonesty. Indifference to the charge is impossible for a passage that constructs an entire test in order to answer it.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'The example of the photograph of a frightened child functions primarily to:',
        options: [
          'condemn the use of emotional appeals in any form of public argument',
          'demonstrate that visual evidence is inherently less trustworthy than verbal argument',
          'supply a contrasting case in which stating the technique aloud destroys its effect',
          'illustrate a technique whose disclosure an audience would welcome',
        ],
        correctAnswer: 2,
        explanation:
          'The photograph is paired against the "strongest reason last" example: one survives being announced, the other dies the moment it is described, and "the manner of its dying is a confession." Its role is to mark the failing side of the test. A blanket condemnation of emotional appeals overshoots a passage that later grants anger may be "correct." Nothing is claimed about visual versus verbal evidence generally. The welcome-disclosure option reverses the example, whose whole point is that disclosure ruins it.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s response to the demagogue objection?',
        options: [
          'Audiences told openly that a speaker is playing on their anger become less willing, not more, to examine whether that anger is warranted.',
          'Demagogues rarely announce the techniques they are using.',
          'Some listeners find techniques more persuasive once the techniques have been disclosed.',
          'Anger is sometimes a warranted response to genuine political conditions.',
        ],
        correctAnswer: 0,
        explanation:
          'The author’s reply concedes that the demagogue clears the bar but insists disclosure puts a claim in public "where it can be examined, checked against evidence, and denied." If disclosure instead suppresses examination, the concession loses its compensation and the reply fails. Rarity of announcement leaves the reply untouched, since the objection concerns the cases where announcement occurs. Increased persuasiveness after disclosure is precisely the situation the author has already granted. That anger is sometimes warranted is also granted, and the author’s point is that the claim becomes checkable, not that it is false.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'An advocacy organization is choosing between two tactics: placing its most compelling statistic in the final line of a letter, and mailing the letter in an envelope designed to resemble an official government notice so that recipients will open it. On the author’s test, the author would most likely conclude that:',
        options: [
          'both tactics are illegitimate, since both are calculated to produce an effect',
          'the first is legitimate and the second is not, because only the first would keep working if it were described to recipients',
          'the second is legitimate because opening a letter is not itself being persuaded',
          'both are legitimate so long as the statistic in the letter is accurate',
        ],
        correctAnswer: 1,
        explanation:
          'The strongest-reason-last arrangement is the author’s own example of a technique that survives being announced, while a disguised envelope collapses the instant it is described — no recipient told "this looks official so that you would open it" is affected as intended. Condemning both because both aim at effect is the position the author rejects when he says all persuasion involves technique. Exempting the envelope because opening precedes persuading evades the test rather than applying it. Accuracy of the statistic is beside the point, since the disguised envelope fails on concealment regardless of the letter’s contents.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The author’s closing observation about a speaker who "could not bear" to have his methods read aloud most strongly suggests that:',
        options: [
          'most public speakers privately recognize that their techniques are dishonest',
          'audiences are largely incapable of detecting manipulation on their own',
          'sincerity is the quality the author most wants from public speakers',
          'a speaker’s own reluctance to disclose a technique is evidence about that technique’s character',
        ],
        correctAnswer: 3,
        explanation:
          'The final sentence says such a speaker "already knows something about his methods that he is hoping his audience never learns" — the reluctance is treated as diagnostic of the method. The claim about most speakers generalizes far beyond anything the passage supports. Audience incapacity is not asserted; indeed the test assumes audiences would respond to disclosure. Sincerity is explicitly demoted in the same paragraph, where the author says the test "asks something more demanding than sincerity."',
        skill: 'inference',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-lang-04',
    section: 'cars',
    discipline: 'education theory',
    title: 'The Common Stock',
    needsReview: true,
    passageText:
      'Every generation restages the same quarrel about what schools are for. On one side stands preparation: schooling exists to fit young people for work, and a curriculum earns its keep by the wages it eventually produces. On the other stands cultivation: schooling exists to enlarge a mind, and to ask what a poem is good for is already to have disqualified oneself from the conversation. The quarrel is old enough to feel permanent, and disputes that feel permanent usually rest on a premise neither side has thought to examine.\n\nThe unexamined premise is that whatever schooling is for, it is something the school delivers to the individual student. A wage or a soul: the camps disagree about the cargo, but both picture a private acquisition, carried out of the building in the possession of the person who earned it. Judged by that picture, each side is vulnerable in the same way. The vocationalist cannot explain why we should teach anything at all to students who will never use it. The humanist cannot explain to a parent why a family should pay for a good that appears on no ledger.\n\nThere is a third answer that will please neither camp, because it denies the premise they share. The central thing schooling produces is not private. It is a common stock: a body of stories, facts, procedures, and habits of address held by enough people that strangers can reason with one another. The value of this stock does not sit in any individual head. It sits between heads. Two citizens who have read nothing in common can still trade with each other; they cannot deliberate with each other.\n\nSeen this way, a school resembles a road system more than a service. Nobody asks a road to justify itself by what it deposits in the traveler; its worth lies in the connections it makes possible among people who will never meet. The comparison also dissolves a long-standing embarrassment — the discovery that students forget most of what they are taught. If the point were retention by each, this would be a catastrophe. If the point is coverage across all, it is merely the ordinary arithmetic of a public good, since a shared reference survives in a population at a far lower density than it must survive in any one person.\n\nThe strongest objection to all of this is that "common stock" is a euphemism. Whose stories, whose procedures, whose habits of address? Every curriculum canonizes somebody’s inheritance and then describes it as everyone’s. The objection is right about the danger and wrong about what follows from it. It requires a distinction between the content of the common stock and the fact of having one. The content is contestable and ought to be contested; curricular fights are exactly that contest, and they are legitimate, even honorable. But the arguing presupposes the thing argued over. A society may dispute at length which stories it will hold in common. It cannot opt out of needing some.\n\nAnd here is the uncomfortable part. A curriculum that canonized nothing would not have escaped imposition. It would only have surrendered the common stock to whatever else reaches everyone — which in our century is not a school. The alternative to a chosen commons is not the absence of one. It is an unchosen one, assembled by parties with no duty to justify a single choice they make. Whatever is said against the curriculum, it possesses one virtue nothing else in the culture can claim: it is the only common stock that anybody has to defend in public.',
    questions: [
      {
        question: 'The main idea of the passage is that:',
        options: [
          'the vocational and humanist accounts of schooling share a mistaken premise, and schooling’s central product is instead a shared public stock of reference',
          'schools should set aside curricular content in favor of teaching habits of public address',
          'the humanist account of education is correct and the vocational account is a recent corruption of it',
          'because students forget most of what they learn, the individual benefits of schooling have been overstated and its costs should be reduced',
        ],
        correctAnswer: 0,
        explanation:
          'The passage identifies the shared premise — that schooling delivers "a private acquisition" — and offers "a third answer" on which the central product "sits between heads." Habits of address appear as one item within the common stock, not as a replacement for content. Taking the humanist side misreads a passage that faults both camps equally and by the same argument. The forgetting point is used to show that retention by each was never the goal, not to argue for cheaper schools.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The observation that citizens who have read nothing in common "can still trade with each other; they cannot deliberate with each other" most directly supports which inference?',
        options: [
          'Commerce is a less valuable form of social activity than political argument.',
          'Deliberation requires that participants ultimately agree on the conclusions they reach.',
          'Some forms of cooperation depend on shared reference in a way that other forms do not.',
          'Schools should give civics instruction priority over vocational training.',
        ],
        correctAnswer: 2,
        explanation:
          'The contrast between trading and deliberating is offered to show what shared reference is for: it is dispensable for one kind of joint activity and indispensable for another. Ranking commerce below political argument imports a value judgment the sentence does not make. Requiring agreement on conclusions confuses deliberation with consensus and reverses the passage’s later celebration of legitimate curricular contest. The civics recommendation is a policy leap the passage never takes, and the author is careful to describe the common stock as stories, facts, and procedures rather than a single subject.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'The comparison of schooling to a road system functions primarily to:',
        options: [
          'argue that education should be financed through the mechanisms used for public infrastructure',
          'make vivid that a good may be worth providing even though its value is not lodged in any individual recipient',
          'concede that education, like infrastructure, decays without continual maintenance',
          'suggest that curricula ought to be standardized nationally as road networks are',
        ],
        correctAnswer: 1,
        explanation:
          'The comparison is introduced with "nobody asks a road to justify itself by what it deposits in the traveler," and its worth lies "in the connections it makes possible among people who will never meet" — an image of value that is not carried away by any recipient. Financing mechanisms, maintenance, and national standardization are all literal extensions of the analogy that the passage never draws, and the maintenance option additionally invents a concession the author does not make.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'A district proposes replacing its shared literature curriculum with a system in which each student selects texts matched to personal interest. The author would most likely object that:',
        options: [
          'students are poor judges of which texts will benefit them',
          'personalized reading lists would fail to prepare students for particular occupations',
          'the plan would reduce the total quantity of reading each student completes',
          'the plan optimizes what each student carries away at the cost of what students would have held in common',
        ],
        correctAnswer: 3,
        explanation:
          'The author’s entire quarrel is with the premise that schooling is a private acquisition; a fully personalized curriculum maximizes precisely that acquisition while eliminating the between-heads good the passage says is central. Paternalism about student judgment is a different objection the passage never advances. Occupational preparation is one of the two positions whose shared premise the author rejects. Total quantity of reading is beside the point, since the author explicitly allows that individuals may forget most of what they read without damaging the public good.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s argument?',
        options: [
          'Adults recall very little of the specific content they were taught in secondary school.',
          'Curricular selections have historically favored the inheritance of socially dominant groups.',
          'Populations with no schooling in common deliberate as effectively as populations educated on a shared curriculum.',
          'Commercial media reach a substantially wider audience than schools do.',
        ],
        correctAnswer: 2,
        explanation:
          'The passage rests on the claim that shared reference is what makes deliberation possible; evidence that deliberation proceeds just as well without it removes the good the author says schooling uniquely produces. Poor adult recall is anticipated and absorbed by the author’s coverage-across-all reasoning. Dominant-group bias in selection is the objection the author states and answers with the content-versus-having distinction. Wide commercial reach is the author’s own premise in the final paragraph, where the unchosen commons is supplied by exactly such forces.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'In context, the author’s phrase "an unchosen one" refers to:',
        options: [
          'a body of common reference assembled by parties with no obligation to defend their selections',
          'a curriculum imposed on students without the consent of their parents',
          'the private acquisitions that students carry away from schooling',
          'the vocational skills that the labor market demands of graduates',
        ],
        correctAnswer: 0,
        explanation:
          'The phrase completes the contrast "the alternative to a chosen commons is not the absence of one. It is an unchosen one," immediately glossed as "assembled by parties with no duty to justify a single choice they make." Parental consent is never the axis of the comparison; the contrast is between a commons that must be defended in public and one that need not be. The remaining options name the private cargo and the vocational skills the passage has already set aside as the wrong unit of analysis.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-lang-05',
    section: 'cars',
    discipline: 'literacy studies',
    title: 'Reading Twice',
    needsReview: true,
    passageText:
      'The lament has become a genre of its own. Attention has been shattered; nobody finishes a book; a generation raised on scrolling has lost the faculty literature requires. I share the unease and distrust the diagnosis. The word "attention" is being asked to carry more weight than it can bear, and while it does so it conceals the loss it claims to name.\n\nStart with the evidence against the standard account. The same people said to be incapable of sustained focus will watch nine hours of a serial drama in a weekend, or follow a plot across sixty hours of a video game. Whatever has been damaged, duration is not obviously it. What has changed is not how long a reader can stay but whether a reader ever comes back. The practice in retreat is rereading: returning to a text whose ending you already know.\n\nThe retreat matters because two quite different activities travel under the single word reading. In the first, a text is a container and the reader’s task is extraction. The content comes out, the reader is now in possession of it, and the container is spent; a rational reader never returns, any more than one returns to a squeezed orange. In the second, a text is a place rather than a container. One goes back not for information but for the encounter between a fixed page and an altered self — the same words, a different reader, and the difference made visible only because the words held still. Only the second activity can be repeated, and only the second improves with repetition.\n\nThe serious objection to everything I have said is that it is nostalgia dressed as analysis. Historically, most readers were not deep readers. Intensive rereading — the family Bible, the single almanac — was an artifact of scarcity rather than a triumph of character. When books were few, one reread because there was nothing else to read. As soon as print became cheap, readers turned extensive and promiscuous, skimming many volumes rather than absorbing one, and the alarms about shallow reading began then, in the eighteenth century, not with the invention of the telephone.\n\nI concede the objection entirely, and I think it proves the reverse of what it is offered to prove. If intensive reading was an artifact of scarcity, then it was never a natural human habit that abundance has corrupted; it was a discipline that scarcity used to enforce for free. Remove the enforcement and the discipline does not persist on its own, because it never stood on its own. This is why mourning is useless and why defending the practice as natural is simply false. What remains is construction. Rereading has to be built deliberately — an artificial scarcity we impose on ourselves, precisely because the world has stopped imposing it for us.\n\nThe practical shape of that construction is unglamorous. Assign fewer texts and return to them. Reread once a year some book you are confident you have finished. Judge a reading life by the depth of its returns rather than the length of its list, which is the reverse of every recommendation the culture currently issues. And be clear about the reason, because it is not sentimental. Extraction leaves a reader as it found him, better informed and otherwise unchanged. A book you return to is the only instrument any of us has for measuring how far we have moved, and it can serve that purpose for one reason alone: it holds still while we do not.',
    questions: [
      {
        question: 'Which of the following best states the passage’s main argument?',
        options: [
          'Digital media have shortened attention spans and have thereby made sustained reading impossible.',
          'Deep reading is a natural human capacity that modern abundance has corrupted.',
          'The practice actually in decline is rereading, and because it was always enforced by scarcity rather than by nature, it must now be constructed deliberately.',
          'Readers ought to read fewer books so that they will remember more of what they have read.',
        ],
        correctAnswer: 2,
        explanation:
          'The author replaces the attention diagnosis with a different loss — "the practice in retreat is rereading" — then concedes the scarcity objection and converts it: "it was a discipline that scarcity used to enforce for free," so "rereading has to be built deliberately." The shortened-attention option is the diagnosis the passage argues against with the serial-drama evidence. The naturalness option is exactly what the author calls "simply false." The last option adopts the author’s practical advice but attaches the wrong goal, since retention is the aim of extraction, the mode the author demotes.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s stance toward the popular lament about lost attention is best described as:',
        options: [
          'sharing its unease while rejecting its explanation',
          'endorsing both its unease and its explanation',
          'treating the entire complaint as manufactured nostalgia',
          'amused detachment from a dispute the author considers trivial',
        ],
        correctAnswer: 0,
        explanation:
          'The author states the position directly: "I share the unease and distrust the diagnosis." Endorsing the explanation as well contradicts the next paragraph, which offers counterevidence against the attention account. Dismissing the complaint as manufactured nostalgia belongs to the objector introduced later, not to the author, who grants that something real has been lost. Detachment is impossible in a passage that ends by prescribing a demanding personal discipline.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'In context, the statement that "the container is spent" most nearly means that:',
        options: [
          'a book loses its physical value once it has circulated among many readers',
          'readers exhaust their patience before reaching the end of long works',
          'information becomes obsolete more quickly than readers can absorb it',
          'a text read only for its content has nothing further to offer once the content has been taken',
        ],
        correctAnswer: 3,
        explanation:
          'The phrase belongs to the extraction model, where "the content comes out, the reader is now in possession of it," and the author adds the squeezed-orange comparison to make the exhaustion complete. Physical wear, reader patience, and obsolescence are all extraneous to a sentence about what remains in a text once its content has been removed, and the patience option additionally revives the attention diagnosis the author has already set aside.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
      {
        question: 'The author cites the ability to watch nine hours of a serial drama chiefly to support which inference?',
        options: [
          'Television has replaced books as the primary medium for serious narrative.',
          'Sustained attention has not disappeared, so it cannot be what was lost.',
          'Audiences generally prefer visual media to printed text.',
          'The habit of rereading survives in media other than print.',
        ],
        correctAnswer: 1,
        explanation:
          'The example is introduced as "evidence against the standard account" and is followed by the conclusion "whatever has been damaged, duration is not obviously it." Displacement of books by television is a claim about prestige and function that the passage does not make. Preference for visual media is likewise unstated and irrelevant to the argument about duration. The survival of rereading elsewhere would be an interesting claim, but the passage says only that long viewing occurs, never that viewers return to what they have watched.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'Which of the following findings would most STRENGTHEN the author’s claim about what has actually changed?',
        options: [
          'Readers today complete as many long books as readers of earlier generations did, but return to an already finished book far less often.',
          'Readers today report substantially greater difficulty concentrating than readers surveyed fifty years ago.',
          'The number of books published each year has risen sharply over the past century.',
          'Students who reread assigned texts score higher on comprehension assessments than students who do not.',
        ],
        correctAnswer: 0,
        explanation:
          'The author’s specific claim is that duration has held while return has collapsed; a finding that holds completion constant and isolates a drop in return matches that claim precisely. Greater reported difficulty concentrating supports the rival diagnosis the author rejects. Rising publication counts are consistent with the passage’s history of abundance but do not distinguish the author’s account from the attention account. The comprehension finding is true to the value of rereading yet answers a different question, since the stem asks what has changed rather than whether rereading helps.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A literature instructor asks how to design a course consistent with the passage. The author would most likely advise the instructor to:',
        options: [
          'assign a wider range of texts so that students encounter more of the tradition',
          'evaluate students primarily by the number of works they complete in a term',
          'assign fewer texts and require students to return to them after finishing them',
          'replace printed assignments with formats that hold student attention for longer stretches',
        ],
        correctAnswer: 2,
        explanation:
          'The closing paragraph states the prescription almost verbatim: "assign fewer texts and return to them," and judge by "the depth of its returns rather than the length of its list." A wider range and a completion count are the list-lengthening approach the author calls the reverse of what the culture should recommend. Swapping formats to hold attention treats the attention diagnosis as correct, which the passage devotes its second paragraph to refuting.',
        skill: 'application',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-lang-06',
    section: 'cars',
    discipline: 'language policy',
    title: 'The Wrong Defense',
    needsReview: true,
    passageText:
      'When a language is dying, its defenders reach for the same argument, and they reach for it as a reflex. Languages, we are told, are repositories. Each one encodes botanical taxonomies unknown to science, navigational techniques refined over centuries, grammatical categories that would enlarge our understanding of the mind. Lose a language and humanity loses a library. The argument is generously meant and it moves audiences. It is also the weakest defense available, and I think it quietly damages the cause it is recruited to serve.\n\nIt is weak because it is hostage to fact. It makes the survival of a language turn on an audit, and audits can come back empty. Suppose the botanists arrive and find that the plants in question are already catalogued, that the grammar, while charming, holds no surprises for theory. What then? The argument has no answer, because it has already conceded the crucial point: that a language must earn its continuation by producing goods for people who do not speak it. Most languages, measured that way, would fail.\n\nAnd it is demeaning in a way its advocates never intend. The repository defense casts speakers as the custodians of a collection whose value is determined by curators living somewhere else. It answers the question "why should this language continue?" with "because we would like to study it," which is a reason a community may reasonably resent even while accepting the help that comes with it.\n\nThe better ground is unglamorous: a community’s standing to conduct its common life in the medium it already has. The claim is not that the language is valuable to humanity. The claim is that its speakers have not agreed to give it up. On this footing the relevant question is never what the language contains. It is whether the people who use it are being made to stop.\n\nThe objection to this footing is sharp. Frequently nobody is making them stop. Language shift is overwhelmingly a matter of parents choosing the majority tongue for their children, and choosing it out of love rather than defeat — because they can see which language the schools, the hospitals, and the hiring offices run on. If the ground of the defense is the community’s own decision, then the community has decided, and the outside preservationist who fights on is overruling the very people he claims to be serving.\n\nThe objection is serious and partly correct, and I concede the last part of it without reservation. Where a community, unpressured, chooses to shift, the outsider who continues the fight has stopped defending speakers and started defending specimens — which is the repository argument returning through a side door, now wearing the costume of solidarity. But the word "unpressured" is carrying the whole load. A choice made where schooling, employment, courts, and every screen in the house operate in a single language is a real choice; I do not deny that it is a choice. It is also a choice whose price was set by somebody other than the chooser.\n\nWhat follows for policy is narrower than preservationists usually want. The task is not to make the decision come out one way. The task is to lower the price of the alternative — to make schooling, administration, and public life genuinely available in the language — until we can see what the decision actually was. And if, after the price has been lowered, the language still goes, then it goes, and the loss is one its speakers were entitled to choose. A defense worth mounting must be able to lose.',
    questions: [
      {
        question: 'The central argument of the passage is that:',
        options: [
          'endangered languages should be preserved because each encodes knowledge that exists nowhere else',
          'the case for an endangered language rests on its speakers’ standing to conduct their own common life, not on the language’s usefulness to outsiders',
          'communities that abandon their languages voluntarily have made an error that public policy should correct',
          'language policy should aim to keep endangered languages in use regardless of what their speakers decide',
        ],
        correctAnswer: 1,
        explanation:
          'The author rejects the repository argument as "the weakest defense available" and substitutes "a community’s standing to conduct its common life in the medium it already has," adding that "the relevant question is never what the language contains." The repository option is the defense the passage dismantles. The remaining two options reverse the author’s explicit concession that an unpressured community’s decision to shift is one "its speakers were entitled to choose," and that policy’s task "is not to make the decision come out one way."',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s reference to defending "specimens" serves primarily to:',
        options: [
          'introduce a scientific standard by which endangered languages might be evaluated',
          'concede that linguistic documentation carries a research value the author had earlier denied',
          'argue that outside researchers seldom understand the communities they study',
          'recall the repository defense and mark what preservationists become when they override speakers',
        ],
        correctAnswer: 3,
        explanation:
          'The sentence itself supplies the link: defending specimens "is the repository argument returning through a side door, now wearing the costume of solidarity." The word is a callback, not a new criterion, so introducing a scientific standard inverts its purpose. No concession about research value occurs there; the author elsewhere grants only that communities may accept the help that comes with study. A general claim about researchers’ misunderstanding of communities is never made, and the author’s complaint concerns who sets the terms of value rather than researchers’ competence.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'The author calls the repository defense "hostage to fact" because:',
        options: [
          'it makes a language’s claim to continue depend on an audit that many languages would fail',
          'linguists have not yet catalogued the contents of most endangered languages',
          'the factual assertions made by preservationists are usually exaggerated',
          'communities cannot be relied upon to report accurately what their languages encode',
        ],
        correctAnswer: 0,
        explanation:
          'The paragraph spells this out: the defense "makes the survival of a language turn on an audit, and audits can come back empty," and "most languages, measured that way, would fail." Incomplete cataloguing is a fact about present knowledge, whereas the author’s worry is about what happens when the cataloguing is complete and unremarkable. Exaggeration by preservationists is an accusation of bad faith the passage never levels; it calls the argument "generously meant." Distrust of community self-report is invented and runs against the author’s deference to speakers.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s preferred defense?',
        options: [
          'Several endangered languages have been found to encode botanical knowledge previously unknown to science.',
          'Language shift typically unfolds across three generations rather than abruptly.',
          'Communities shift to majority languages at the same rate whether or not schooling, courts, and employment are available in their own language.',
          'Some communities have successfully revived languages that had ceased to be spoken entirely.',
        ],
        correctAnswer: 2,
        explanation:
          'The author’s position depends on the claim that the price of continuing is set externally, and that lowering the price would reveal what the decision truly was. If shift proceeds identically whether or not that price is lowered, the pressure story loses its force and the policy prescription becomes pointless. New botanical findings would strengthen the repository defense the author rejects, leaving his own ground untouched. The pace of shift and the possibility of revival are both compatible with everything the passage claims.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A government asks the author to evaluate a proposal requiring all children of a minority-language community to be schooled exclusively in that language. The author would most likely respond that:',
        options: [
          'the proposal is sound, because preserving the language serves the interest of the wider public',
          'the proposal should be rejected because language policy ought never to involve public expenditure',
          'the proposal is acceptable only if researchers first confirm that the language encodes distinctive knowledge',
          'the proposal makes the decision on the community’s behalf, when the aim should be to make schooling in that language genuinely available',
        ],
        correctAnswer: 3,
        explanation:
          'The closing paragraph states the standard: "the task is not to make the decision come out one way. The task is to lower the price of the alternative," making schooling "genuinely available." A mandate substitutes the state’s decision for the community’s. Appeal to the wider public interest revives the outsider-value framing the author rejects. Ruling out public expenditure contradicts a prescription that requires funding schooling and administration. Conditioning the policy on a research audit is the repository defense in its purest form.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward preservationists is best described as:',
        options: [
          'contemptuous of their motives',
          'sympathetic to their aim but critical of the argument they use to advance it',
          'fully persuaded by their case for intervention',
          'indifferent to whether endangered languages survive',
        ],
        correctAnswer: 1,
        explanation:
          'The author calls the repository argument "generously meant" while insisting it "quietly damages the cause it is recruited to serve," and then constructs a replacement defense rather than abandoning the cause. Contempt for motives is ruled out by the explicit acknowledgment of good intention. Full persuasion is ruled out by the warning that preservationists who override speakers are defending specimens. Indifference cannot survive a passage that proposes making a minority language genuinely available in schooling and public life.',
        skill: 'tone',
        needsReview: true,
      },
    ],
  },
]
