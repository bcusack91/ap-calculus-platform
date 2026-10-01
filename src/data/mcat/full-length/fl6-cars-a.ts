import type { MCATPassage } from '../types'

/**
 * MCAT Full-Length Form 6 — CARS, file A (passages 1–5, 6 questions each).
 *
 * Five original argument-driven passages (500–600 words) across humanities and
 * social-science genres: ethics / political philosophy (what a promise still
 * demands when circumstances change), cultural anthropology (naming practices
 * and what a name does), theater and dance (what comedy asks of a crowd),
 * economics (second-hand goods and where value lives), and religion (charity
 * and its motives, in a nineteenth-century essayist voice). Every key is
 * derivable from the passage alone; no outside knowledge is needed.
 */
export const FL6_CARS_A_PASSAGES: MCATPassage[] = [
  {
    id: 'fl6-cars-a-01',
    section: 'cars',
    discipline: 'ethics / political philosophy',
    title: 'The Saturday Promise',
    passageText:
      'Suppose I have promised to help a friend move house on Saturday, and on Saturday morning my child wakes with a fever. Almost everyone agrees that I may stay home. The disagreement, which is older than it looks, is about why.\n\nOne answer is that the promise never reached so far. Every promise, on this view, carries an unspoken clause: provided that things remain roughly as they were. I undertook to carry boxes in a world where my child was well; that world has gone, and the undertaking has gone with it. The opposite answer is the rigorist’s. A promise with silent exceptions is not a promise but a forecast of my future convenience, and the whole use of promising is that it holds when I would rather it did not. The rigorist concludes, with some discomfort, that I ought to be carrying boxes.\n\nI think both answers make the same mistake. Each treats a promise as a sentence whose meaning must be settled, as though the question were what, exactly, I said. The first reads the sentence generously and the second strictly, but both suppose that once its content is fixed, my obligation is fixed too, and that I am the one to do the reading. That last supposition is the trouble. A promise is less like a sentence than like a transfer. Before I promised, the question of how to spend my Saturday was mine to decide. Afterward, it was in part my friend’s. What I gave her was not a prediction, nor a conditional prediction, but a share of authority over what I do.\n\nSeen this way, the fever changes a great deal, but it does not change who holds what I gave away. The silent-clause theory lets me consult the clause and release myself. But notice what we in fact do: we telephone. We explain, and we wait, however briefly, to hear “of course, stay home.” If the promise had simply lapsed, the call would be a courtesy, like telling a neighbor of a change in my plans. It is not felt as a courtesy. It is felt as asking, and a friend who was not asked—who learned on Saturday night why no one came—has a grievance even if she would have agreed at once.\n\nThe rigorist will say that I have conceded his case: if the decision is hers, then I must carry boxes if she insists. Not quite. A promisee who refuses to release me from a small promise in the face of a real emergency does wrong, and I may then stay home against her wishes. But I stay home as one who has broken a promise for good reason, not as one who has found that there was nothing to break. The distinction is not verbal. The one who breaks a promise justifiably still owes something afterward—an account, an apology, an afternoon of carrying boxes next week. The one who was never bound owes nothing. Our practice plainly sides with the first description. Nobody thinks the parent of the feverish child may simply shrug.\n\nThe hard cases are those in which the promisee cannot be asked: the promise to a dying parent to keep the farm, twenty years on, the farm now ruinous. Here the silent clause is most tempting, because the only reader left is me. I would say instead that I have become a trustee of someone else’s authority, and a trustee does not ask what would suit him. He asks what the other, seeing what he now sees, would have let go.',
    questions: [
      {
        question: 'Which of the following best states the main thesis of the passage?',
        options: [
          'A promise binds only while the circumstances in which it was given remain substantially unchanged.',
          'A promise gives its recipient a say over the promiser’s conduct that later events do not take back.',
          'A promise serves its purpose only if it holds when keeping it has become unwelcome to the promiser.',
          'A promise should be read as its recipient understood it and not as the promiser later prefers.',
        ],
        correctAnswer: 1,
        explanation:
          'The author’s positive claim is that promising transfers a share of authority to the promisee, and that a change such as the fever “does not change who holds what I gave away.” The unchanged-circumstances option is the silent-clause theory, and the holds-when-unwelcome option is the rigorist’s view; the author says both make the same mistake. The option about whose reading governs still treats a promise as a sentence to be interpreted, which is the very approach the author rejects.',
        skill: 'main-idea',
      },
      {
        question: 'The author observes that “we telephone” (paragraph 4) primarily in order to:',
        options: [
          'show that promisers try to soften the disappointment their absence will cause',
          'suggest that a promisee warned in advance has no reasonable ground for complaint',
          'illustrate the rigorist’s claim that a promise holds even when it is inconvenient',
          'offer ordinary conduct as evidence that the promise has outlasted the change in circumstances',
        ],
        correctAnswer: 3,
        explanation:
          'The call is contrasted with a mere courtesy: because it is “felt as asking,” the author takes it to show that the promise did not lapse when the child fell ill and that release is still the friend’s to give. Softening disappointment would make the call exactly the courtesy the author says it is not. The author’s point about grievance concerns the friend who was not asked, not a claim that warning removes all complaint. The observation is aimed against the silent-clause theory and is not offered in support of the rigorist, whom the author goes on to answer.',
        skill: 'function',
      },
      {
        question:
          'The author holds that the two answers described in the second paragraph are alike in that both:',
        options: [
          'leave it to the promiser to settle what the promise requires',
          'excuse the promiser whenever keeping the promise becomes a burden',
          'deny that an emergency can alter what the promiser finally ought to do',
          'regard a promise as a forecast of what the promiser will later want',
        ],
        correctAnswer: 0,
        explanation:
          'The shared mistake named in paragraph 3 is treating a promise as a sentence to be read and supposing that the promiser is the one who reads it, which leaves the promiser to determine his own obligation. Only the silent-clause view excuses the promiser, and only the rigorist denies that the emergency changes what he ought to do, so neither of those is common to both. “Forecast” is the rigorist’s criticism of the other view, not something either view accepts about promises.',
        skill: 'detail',
      },
      {
        question:
          'Which of the following people would the author most likely say has given the promisee a legitimate grievance?',
        options: [
          'A man who promised a colleague a ride to the airport calls to say his car has failed and is told not to worry.',
          'A woman who promised to lend her sister a ladder is told by the sister, who no longer needs it, to forget the matter.',
          'A man who promised to attend a friend’s recital goes instead to a relative’s hospital bedside and explains only when the two next happen to meet.',
          'A woman who promised to help a neighbor paint asks to be let off when her mother falls ill, and the neighbor agrees with ill grace.',
        ],
        correctAnswer: 2,
        explanation:
          'The author says a friend “who was not asked” has a grievance even if she would have agreed at once; the man at the hospital had good reason to be absent but released himself without going back to the promisee. The man with the failed car and the woman with the ill mother both asked and were released, however grudgingly in the second case. In the ladder case the promisee herself gave up what she held, which is hers to do on the author’s account.',
        skill: 'application',
      },
      {
        question:
          'Suppose it were found that people kept from fulfilling a promise by a genuine emergency generally feel no need to make anything up to the promisee afterward, and that promisees do not expect them to. This finding would most directly challenge the author’s:',
        options: [
          'claim that the rigorist reaches his own conclusion with some discomfort',
          'claim that a promisee does wrong in refusing release during an emergency',
          'account of how to reason when the promisee can no longer be consulted',
          'appeal to common practice to show that a justified breach leaves a debt',
        ],
        correctAnswer: 3,
        explanation:
          'The author distinguishes “broken for good reason” from “never bound” by pointing out that the first still owes something afterward, and then asserts that “our practice plainly sides with the first description.” A finding that nothing is felt to be owed would remove that support. The rigorist’s discomfort is a passing remark the finding does not touch. Whether a promisee wrongs the promiser by refusing release, and how a trustee should reason, are separate claims that do not rest on what people feel they owe after an emergency.',
        skill: 'new-information',
      },
      {
        question:
          'A man promised a friend, who has since died, to publish the friend’s memoir exactly as written. He now learns that one chapter would expose a living person to serious harm. Based on the passage, the author would most likely say that he should:',
        options: [
          'publish the memoir whole, since a promise that bends to later events was only ever a forecast',
          'ask whether the friend, knowing of the harm, would have wanted the chapter held back',
          'regard the promise as void, since it was given in ignorance of what the chapter would do',
          'do whatever now seems best to him, since no one remains with any standing to complain',
        ],
        correctAnswer: 1,
        explanation:
          'For promisees who cannot be asked, the author casts the promiser as a trustee of the other’s authority, who must reason from what the promisee would have released in light of what is now known rather than from his own preference. Publishing regardless is the rigorist’s position, which the author rejects. Treating the promise as void is the silent-clause theory, which the author says is most tempting, and still mistaken, in just this kind of case. Doing what seems best to him is precisely the self-release a trustee is not permitted.',
        skill: 'application',
      },
    ],
  },
  {
    id: 'fl6-cars-a-02',
    section: 'cars',
    discipline: 'cultural anthropology',
    title: 'Addressed to the Clerk',
    passageText:
      'Ask a registrar what a name is, and the answer comes easily: a name is a label. It picks one person out from all the others, as a number would, only more pleasantly. On this view the name does nothing to its bearer and says nothing about her; she would be the same person under any other, and the choice among names is a matter of taste. So settled is this view among people who fill in forms that it scarcely seems a view at all.\n\nThe ethnographic record is hard on it. In many societies a man ceases, on the birth of his first child, to be called by the name he has carried since infancy; he becomes “father of” the child, and to use the old name is a discourtesy. In some Arctic communities an infant given the name of an elder who has died is addressed by that elder’s relatives as the elder was, so that a woman may call a baby “husband” and mean something by it. Elsewhere the name of a dead person is withdrawn from speech altogether, and the living who happen to share it must be called something else until the mourning is over. A name that can be lost at fatherhood, inherited with a set of relatives, or silenced by a death is not behaving like a label.\n\nAn earlier generation of anthropologists explained such practices by attributing a belief: these people, it was said, hold that the name contains the soul, or is a part of the person, as a limb is. I think this explanation creates a mystery in order to solve it. One need not suppose that the grandmother believes the infant to be her husband. It is enough to watch what the name accomplishes. It tells a household how the child is to be treated, who owes him what, and where the gap left by a death has been closed. The father renamed for his child has been told, and has told everyone, that his standing now runs through that child. The name is an instruction, and it is addressed less to the bearer than to everyone around him.\n\nOnce this is seen, the contrast between their names and ours begins to dissolve. We too name children for grandparents and expect something of the gesture. A bride who takes, or pointedly keeps, a surname is understood to have said something about two families. A nickname allowed to some and forbidden to others draws a boundary more exactly than any rule of etiquette. None of this requires a belief about souls, and none of it is the work of a label.\n\nWhere, then, does the label theory come from? It is not a description of how anyone uses names among kin. It is a description of what a state requires of them. A registry needs each person to be findable under the same name from birth to death, and so it wants a name fixed, unique, and indifferent to whatever happens to its bearer—fatherhood and bereavement included. That is a real function, and the registrar’s name performs it well. But it is one function among many, and of all of them it is the youngest. The name that does nothing but point is not the plain case from which other peoples have exotically departed. It is itself an instruction, addressed to the clerk.',
    questions: [
      {
        question:
          'According to the passage, which of the following are accomplished by names as they are used among relatives and acquaintances?\n\nI. Indicating how those around the bearer are to treat him\nII. Keeping a person identifiable under a single name throughout life\nIII. Marking off those who stand close to the bearer from those who do not',
        options: ['I only', 'II only', 'I and III only', 'I, II, and III'],
        correctAnswer: 2,
        explanation:
          'Statement I matches the author’s account of the inherited name as telling a household how a child is to be treated. Statement III matches the nickname “allowed to some and forbidden to others,” which draws a boundary among the people around the bearer. Statement II describes the fixed, lifelong name that the author assigns to the state’s registry and contrasts with “how anyone uses names among kin”: it is what a state requires of names, not what they do among the people around the bearer. Any option that includes II or omits III is therefore wrong.',
        skill: 'detail',
      },
      {
        question:
          'In saying that the earlier explanation “creates a mystery in order to solve it,” the author most nearly means that the explanation:',
        options: [
          'credits people with a strange belief that their practice gives us no need to assume',
          'reports accurately what people believe but cannot say how they came to believe it',
          'leaves unexplained the very practices that it was first introduced in order to explain',
          'accounts for naming among distant peoples while ignoring naming among the author’s own',
        ],
        correctAnswer: 0,
        explanation:
          'The author’s next sentences say one “need not suppose” the grandmother believes the infant is her husband, because watching what the name accomplishes is enough; the belief about souls is the invented mystery. The author does not grant that the belief is accurately reported, so the option conceding its accuracy fails. The belief explanation does explain the practices, only needlessly, so it is not said to leave them unexplained. Its neglect of the author’s own society is a separate point made in the next paragraph and is not what the “mystery” remark refers to.',
        skill: 'inference',
      },
      {
        question:
          'In concluding from the examples in the second paragraph that such a name “is not behaving like a label,” the author assumes that:',
        options: [
          'the practices described are found in the majority of the world’s societies',
          'the people who follow these practices can say what the names are for',
          'a bearer must give consent before a name is changed or withdrawn',
          'a mere label would have no reason to change when its bearer’s ties to others changed',
        ],
        correctAnswer: 3,
        explanation:
          'The examples show names being lost, inherited, or silenced as the bearer’s relations shift; that counts against the label view only if a label is the sort of thing that would stay put through such changes. The argument needs the practices to exist, not to be in the majority. Nothing depends on whether participants can articulate a purpose; the author prefers watching what the name does. Consent of the bearer plays no role in the inference.',
        skill: 'assumption',
      },
      {
        question:
          'Which of the following would the author most likely regard as closest in function to the registrar’s name?',
        options: [
          'A new name that a monastery gives to each novice on the day that he takes his vows',
          'A code that a hospital prints on a patient’s wristband and reuses at every visit',
          'A title by which a team’s players address their captain in place of her name',
          'A late uncle’s name by which a family calls its youngest son at its reunions',
        ],
        correctAnswer: 1,
        explanation:
          'The registrar’s name is fixed, unique, and indifferent to what happens to the bearer, so that a record-keeper can find the same person over time; a reused patient code does exactly that work. The novice’s new name changes with a change in standing, like the father renamed for his child. The captain’s title tells others how to treat her and reflects her position. The uncle’s name places the boy among relatives, like the inherited names of paragraph 2.',
        skill: 'application',
      },
      {
        question:
          'Suppose an ethnographer reported that members of a community who avoid the names of the dead, when asked why, offered no account of souls and said only that hearing the name is hard on the bereaved. This report would most directly:',
        options: [
          'support the author’s view that the practice is best understood by what it does',
          'support the earlier anthropologists’ view that a name is held to be part of the person',
          'weaken the author’s view that names among kin are addressed to those around the bearer',
          'weaken the author’s view that the registrar’s fixed name serves a real function of its own',
        ],
        correctAnswer: 0,
        explanation:
          'The report shows a naming practice sustained with no belief about souls and explained entirely by its effect on the living, which is the author’s position against the belief explanation. It therefore undercuts, rather than supports, the earlier anthropologists. Sparing the bereaved is a matter of how the name bears on those around the dead person, so it fits the “addressed to everyone around him” claim. The report says nothing about registries and leaves the author’s concession about their function untouched.',
        skill: 'new-information',
      },
      {
        question:
          'A critic objects: “Modern parents plainly treat names as labels; they choose a child’s name for nothing but its sound.” Based on the passage, the author would most likely reply that:',
        options: [
          'choosing a name for its sound shows that parents have adopted the outlook of the state',
          'modern parents misunderstand names because they no longer live among their own kin',
          'the same parents go on using surnames, namesakes, and nicknames to place one another',
          'a name chosen for its sound is less able to keep a person findable over a lifetime',
        ],
        correctAnswer: 2,
        explanation:
          'Paragraph 4 argues that “we too” use names to do relational work, citing children named for grandparents, the bride’s surname, and restricted nicknames, so the author would answer that the critic has looked at one choice and overlooked the rest of modern practice. The author never claims that taste in names derives from the state; the state’s interest is in fixity, not sound. Nothing in the passage says modern people have left their kin or misunderstand names as a result. How a name is chosen has no bearing on whether a registry can keep track of it.',
        skill: 'application',
      },
    ],
  },
  {
    id: 'fl6-cars-a-03',
    section: 'cars',
    discipline: 'theater and dance',
    title: 'A Part for Whoever Comes',
    passageText:
      'Actors have long said that comedy is harder than tragedy, and the reason they usually give is timing: a tragic line can be a half-second late and survive, while a comic line cannot. This is true, but it locates the difficulty on the wrong side of the footlights. What makes comedy hard is not what it demands of the performer. It is what it demands of the house.\n\nConsider what a tragedy asks of its audience: attention, and silence. Silence is a contribution each spectator can make privately. It commits him to nothing; the person beside him cannot tell whether he is moved, bored, or working out where he left his umbrella. A thousand people may sit through the last act of a tragedy in a thousand different states, and the stillness will cover them all. Laughter gives no such cover. To laugh in a theater is to be heard finding something funny, at a moment one did not choose, by strangers who may not agree. A comedy asks every member of its audience to make that small disclosure again and again, each time before he can know whether anyone will join him.\n\nThis is why laughter in a theater behaves so little like a reflex. A reflex would not care how many seats were filled, yet every company knows that the play that delighted a full house on Saturday may be received on a thin Tuesday in something like embarrassment. The first laugh of an evening is the hardest to get, and experienced comedians do not open with their best material; they open with something small, to let the audience hear itself. Once a few people have laughed and not been left alone, the rest will risk it. The audience, in other words, must be assembled out of its members, and the early minutes of a comedy are spent assembling it.\n\nWhen the assembly succeeds, something happens that tragedy does not offer. Each person learns that what struck him as absurd struck the others so as well, and learns it not by being told but by hearing it. I suspect this, more than any particular joke, is what people recall when they say of a performance that the whole house was roaring. They are reporting less on the play than on the room.\n\nIt will be objected that recorded laughter, added for decades to broadcast comedies, shows the crowd to be dispensable: a machine can do its work. I draw the opposite conclusion. Producers added the recording because they found that a viewer alone at home, watching the very performance that had filled a studio with laughter, sat silent. The recording is an admission that the joke is not enough. But it is also a poor substitute, and for an instructive reason. Recorded laughter cannot fail to arrive. It therefore tells the viewer nothing about whether anyone shares his sense of the thing, which is exactly what the laughter of a live house tells him.\n\nIf this is right, a comedy is the one kind of play whose script is unfinished on the page. A tragedy performed for an inattentive house is still the tragedy, badly received. A comedy performed in silence has not been badly received; in an important sense it has not taken place. The playwright has written a part that cannot be cast in advance, and it has to be played by whoever happens to come.',
    questions: [
      {
        question: 'Which of the following best captures the central claim of the passage?',
        options: [
          'Comedy is harder to perform than tragedy because its lines allow far less error in timing.',
          'Comedy succeeds in a theater only when its performers hold their best material in reserve.',
          'Comedy gives a more lasting pleasure than tragedy because its audience shares it aloud.',
          'Comedy relies on its spectators being willing to respond audibly in one another’s hearing.',
        ],
        correctAnswer: 3,
        explanation:
          'The passage argues that comedy’s difficulty lies in what it asks of the house: repeated audible disclosure before strangers, without which the comedy “has not taken place.” The timing explanation is granted as true but said to put the difficulty on the wrong side of the footlights. Holding back the best material is a supporting observation about how audiences are assembled, not the thesis. The author never compares how long the pleasures of comedy and tragedy last.',
        skill: 'main-idea',
      },
      {
        question: 'The author mentions a spectator “working out where he left his umbrella” in order to:',
        options: [
          'suggest that tragedies hold the attention of a house less well than comedies do',
          'show how much a silent house may conceal about the states of its members',
          'illustrate the embarrassment that settles on a house when many seats are empty',
          'argue that the stillness at a tragedy is good evidence that the house is moved',
        ],
        correctAnswer: 1,
        explanation:
          'The umbrella is one of three states a neighbor “cannot tell” apart, supporting the point that silence commits a spectator to nothing and that stillness “will cover them all.” The author is not ranking how well the two forms hold attention; the distracted spectator shows only that silence hides distraction. Embarrassment in a thin house belongs to the later discussion of laughter. The example shows that stillness is poor evidence of being moved, the reverse of the last option.',
        skill: 'function',
      },
      {
        question:
          'The passage offers each of the following as evidence that laughter in a theater is not a reflex EXCEPT:',
        options: [
          'the contrast between a full Saturday house and a thin Tuesday one',
          'the special difficulty of drawing the first laugh of an evening',
          'the inability of a comic line to survive being delivered late',
          'the habit among comedians of opening with modest material',
        ],
        correctAnswer: 2,
        explanation:
          'The fragility of a late comic line appears in the first paragraph as the actors’ usual explanation of why comedy is hard, which the author sets aside; it is not used to show anything about reflexes. The full and thin houses, the hard first laugh, and the practice of opening with something small are all given in the third paragraph, immediately after the claim that theatrical laughter “behaves so little like a reflex.”',
        skill: 'detail',
      },
      {
        question:
          'The remark that those who recall a roaring house “are reporting less on the play than on the room” implies that what they chiefly remember is:',
        options: [
          'finding their own amusement confirmed by others',
          'the skill with which the performers timed their lines',
          'being present on a night when every seat was taken',
          'jokes that were better than those of other evenings',
        ],
        correctAnswer: 0,
        explanation:
          'The remark closes a paragraph about each person learning, by hearing it, that what struck him as absurd struck the others too; the “room” is that shared discovery. The performers’ timing and the quality of the jokes are facts about the play, which is what the author says is not chiefly being reported, and he adds “more than any particular joke.” A full house helps the assembly succeed, but the memory described is of the agreement itself, not of attendance.',
        skill: 'inference',
      },
      {
        question:
          'Suppose a study found that people watching a broadcast comedy alone laughed aloud often, and just as often when no recorded laughter was added as when it was. This finding would most weaken the author’s:',
        options: [
          'claim that silence commits a spectator at a tragedy to nothing',
          'account of why producers added recorded laughter to broadcast comedies',
          'claim that recorded laughter tells a viewer nothing about others',
          'account of why comedians open an evening with small material',
        ],
        correctAnswer: 1,
        explanation:
          'The author says producers added the recording because the solitary viewer “sat silent,” and treats this as an admission that the joke is not enough without company. Frequent solitary laughter with no recording contradicts that account. The finding concerns comedy watched at home, so it does not bear on silence at a tragedy or on how live comedians open. That recorded laughter is uninformative because it never fails to arrive is untouched by whether viewers laugh without it.',
        skill: 'strengthen-weaken',
      },
      {
        question:
          'Which of the following situations is most like the one in which, according to the author, a comedy places each member of its audience?',
        options: [
          'A reader of a novel forms a private opinion of its hero that no one else will learn.',
          'A juror writes a verdict on an unsigned ballot that is then counted with the others.',
          'A museum visitor walks through a crowded gallery without speaking to anyone there.',
          'A dinner guest must decide whether to applaud a toast before any other guest does.',
        ],
        correctAnswer: 3,
        explanation:
          'The comedy spectator must make an audible, public response before knowing whether anyone will join him; the guest deciding whether to applaud first faces the same exposure. The reader’s opinion and the unsigned ballot are judgments made under cover, with no one able to hear them. The silent museum visitor resembles the spectator at a tragedy, whose stillness commits him to nothing.',
        skill: 'application',
      },
    ],
  },
  {
    id: 'fl6-cars-a-04',
    section: 'cars',
    discipline: 'economics',
    title: 'What the Second Buyer Declines',
    passageText:
      'A car, it is often said, loses a tenth of its price the moment it leaves the dealer’s lot. Nothing has happened to the car. It has travelled a few hundred meters and acquired an owner, and for that it is worth appreciably less. The fact is familiar enough to be a proverb, and economists have a well-known explanation for it. The seller of a used car knows whether it is sound; the buyer does not, and cannot easily find out. Fearing the worst, buyers pay less for every used car, the good along with the bad, and the discount is the price of their ignorance.\n\nThe explanation is elegant and, for cars, largely correct. My doubt is whether it tells us much about second-hand goods in general, because it predicts that the discount should shrink wherever the buyer’s ignorance shrinks. Where a thing can be inspected completely, a used one should sell for nearly the price of a new one. This is not what we find. A book read once, with every page open to examination, sells for a fraction of its cover price. A wedding dress worn for an afternoon and professionally cleaned sells for a small part of what it cost. A diamond can be graded by an independent laboratory more exactly than any engine can be assessed, and a ring bought on Monday will still fetch far less on Tuesday. In these cases there is nothing hidden to fear, and the discount persists.\n\nWhat, then, is the second buyer declining to pay for? I think the answer is that the first buyer bought two things, only one of which was the object. The other was the condition of being its first owner—a good that is real enough to command a price, that is used up entirely in the act of purchase, and that cannot be handed on. On this account the dress has not lost value by being worn. Part of what was paid for at the shop was never in the dress.\n\nThe same reasoning, run in the other direction, explains what the ignorance theory can only treat as an oddity: the used thing that costs more than a new one. A guitar that belonged to an admired musician, a watch carried through a famous expedition, even a pair of work trousers faded by decades of someone else’s labor, may sell at many times the price of an identical article fresh from the factory. Here the previous owner has not subtracted something. He has added a history, and the history is being bought. Neither the premium for the untouched nor the premium for the storied can be found by examining the object, because neither is located there.\n\nThe economist may reply that these are tastes, and that tastes are not his business. But they are not fixed tastes of the kind he is entitled to set aside. Whether a previous owner taints a thing or enriches it is a matter of convention, and conventions move: clothing that one generation would have been ashamed to buy used, the next seeks out and calls vintage. Those who urge us to buy second-hand because it is thrifty are therefore right about the arithmetic and wrong about the difficulty. They suppose that the buyer of new goods is paying extra for nothing. He is paying for something, though it is something that only the story of the object, and not the object, contains.',
    questions: [
      {
        question: 'The author regards the economists’ explanation of the discount on used cars as:',
        options: [
          'sound for the case it was devised for but too narrow to account for used goods generally',
          'elegant in its form but mistaken about what the sellers of used cars know',
          'correct for goods that can be inspected but wrong about those that cannot',
          'persuasive to economists but contradicted by what used cars actually fetch',
        ],
        correctAnswer: 0,
        explanation:
          'The author calls the explanation “elegant and, for cars, largely correct” and then doubts that it says much about second-hand goods in general. He does not dispute what sellers know or what used cars fetch, so the options locating an error in the car case are wrong. The inspectable-goods option reverses his point: it is precisely for fully inspectable goods such as books, dresses, and graded diamonds that he says the explanation fails.',
        skill: 'tone',
      },
      {
        question:
          'The author notes that a diamond can be graded “more exactly than any engine can be assessed” in order to:',
        options: [
          'show that some used goods hold their value better than used cars are able to do',
          'suggest that buyers of jewelry are generally better informed than buyers of cars',
          'present a case in which a buyer’s uncertainty cannot account for the lower price',
          'argue that independent laboratories have made the resale of rings more nearly fair',
        ],
        correctAnswer: 2,
        explanation:
          'The ignorance theory predicts a small discount where the buyer can know the good’s quality; the exactly graded diamond that still loses value overnight is offered as a case where that prediction fails. The ring is said to fetch “far less,” so it is not an example of value being held. The comparison concerns what can be known about the object, not how well informed two groups of buyers are in general. Nothing is claimed about the fairness of the resale market.',
        skill: 'function',
      },
      {
        question:
          'It can be inferred that the author regards the premium paid for an admired musician’s guitar and the discount on a once-worn dress as:',
        options: [
          'opposite errors that buyers would correct if they inspected the goods',
          'two effects of one fact about where a good’s value resides',
          'signs that sellers know more than buyers about what is being sold',
          'tastes too firmly fixed for any change of convention to alter them',
        ],
        correctAnswer: 1,
        explanation:
          'The author introduces the guitar as “the same reasoning, run in the other direction” and concludes that neither premium can be found by examining the object “because neither is located there”; both follow from value residing partly in an object’s history of ownership. He treats neither as an error, and says inspection could not reveal either. Unequal knowledge between seller and buyer is the ignorance theory he is arguing past. He explicitly denies that these are fixed tastes, noting that conventions move.',
        skill: 'inference',
      },
      {
        question:
          'Which of the following findings, if true, would most weaken the argument of the second paragraph?',
        options: [
          'Used cars sold with a full mechanical warranty fetch nearly the price of new cars.',
          'Books read once sell for less than unread copies even when every page can be examined.',
          'Graded diamonds resell for a similar fraction of their retail price in every country.',
          'Buyers who pass over once-worn dresses commonly say they fear stains that cleaning has hidden.',
        ],
        correctAnswer: 3,
        explanation:
          'The second paragraph depends on the claim that in the cases listed “there is nothing hidden to fear,” so that ignorance cannot explain the discount; evidence that dress buyers do fear concealed damage would return one of those cases to the ignorance theory. The warranty finding concerns cars, where the author already accepts that theory. The book finding restates the author’s own example. A uniform resale fraction for diamonds across countries does nothing to show that hidden defects drive the discount.',
        skill: 'strengthen-weaken',
      },
      {
        question:
          'Which of the following purchases best fits the author’s account of what the buyer of a new article pays for?',
        options: [
          'A commuter pays more for a new bicycle because she cannot judge the wear on a used one.',
          'A collector pays more for a used pen because it belonged to a novelist whom he admires.',
          'A reader pays full price for a novel though a spotless used copy is on offer at half.',
          'A student pays less for a used textbook because a new edition is soon to replace it.',
        ],
        correctAnswer: 2,
        explanation:
          'The author holds that the buyer of a new article pays partly for being its first owner, a good not found in the object; the reader who passes over a visibly flawless used copy can be paying for nothing else. The commuter’s premium is explained by ignorance about hidden wear, the theory the author confines to cases like cars. The collector is paying the other premium, for a storied previous owner. The student’s discount reflects the book’s declining usefulness, a fact about the object itself.',
        skill: 'application',
      },
      {
        question: 'The primary purpose of the passage is to:',
        options: [
          'argue that second-hand prices register something that is not a property of the object sold',
          'show that the standard account of used-car prices rests on an error about what buyers can know',
          'persuade readers that buying goods second-hand is thriftier than buying them new',
          'explain why attitudes toward previously owned goods differ between generations',
        ],
        correctAnswer: 0,
        explanation:
          'From the persistent discount on inspectable goods to the premium on storied ones, the passage builds to the claim that part of a good’s price belongs to its history of ownership and “not the object.” The author accepts the standard account for used cars, so exposing an error in it is not his aim. He grants the thrift argument its arithmetic in passing and faults its view of the difficulty; he is not advancing it. Shifting conventions across generations are one supporting observation in the last paragraph.',
        skill: 'main-idea',
      },
    ],
  },
  {
    id: 'fl6-cars-a-05',
    section: 'cars',
    discipline: 'religion',
    title: 'The Left Hand and the Right',
    passageText:
      'There is a class of moralists, never more numerous than at present, who cannot see a coin pass from a full hand to an empty one without inquiring into the heart of the giver; and who, having discovered there some mixture of vanity, or of fear, or of the wish to stand well with his neighbours, pronounce the gift worthless and the giver a hypocrite. They have, it must be owned, a high authority on their side; for we are told that our alms should be done in secret, and that the left hand should not know what the right hand doeth. Yet I cannot think that the precept was given for the use to which they put it, nor that the poor would be gainers if it were everywhere obeyed in their sense.\n\nFor let it be considered what would follow, were no man to give until he had satisfied himself that his motive was unmixed. The scrupulous, who are precisely those most likely to give well, would give seldom, being always in doubt; while the hungry would wait upon the issue of an examination in which they have no interest whatever. Bread bought with a vain man’s shilling is not the less bread. He who refuses the Pharisee’s offering, because it was sounded before with a trumpet, has indeed rebuked the Pharisee, but he has done so at the charge of the widow.\n\nI would not, however, be understood to say with certain economists of benevolence that the motive is nothing, and the sum everything. The precept of secrecy was not, I conceive, delivered for the sake of the receiver, to whom it is a matter of small moment whether his benefactor be seen; it was delivered for the sake of the giver. A man is formed by what he repeatedly does, and by the spirit in which he does it. He who gives always before witnesses is learning, with every gift, to regard the misery of others as the occasion of his own credit; and he may come at last to need the poor as an actor needs an audience. The injury is real; but it is an injury to himself.\n\nHere, then, is the place which I would assign to motive: it is not a gate through which the gift must pass before it is permitted, but an end toward which the practice of giving is to carry the giver. And experience, so far as I have observed it, supports the hope. Many a man has begun to give because it was expected of his station, and has continued until the faces of those he relieved became more to him than the opinion of those who watched. Habit, which the moralists distrust, is in this matter the ally of grace. Let him give first, therefore, and examine himself afterwards; the examination will find better material for the delay.\n\nOne exception I am bound to make. There is a giver who bestows in order that the receiver may be bound to him; who looks for deference, and would have his bounty remembered whenever his will is crossed. His fault is of another kind than the vain man’s, for it does not end in himself. The vain man asks of the poor only that they be seen to receive; this man asks that they be less free for having received. Of him alone would I say that it were better he kept his money.',
    questions: [
      {
        question: 'The author’s principal contention is that the motives of a charitable giver:',
        options: [
          'are of no account, provided that the sum given reaches those who are in want of it',
          'matter chiefly for what giving makes of the giver, and rarely warrant the withholding of a gift',
          'must be examined and found unmixed before a gift can be of any worth to the giver',
          'are corrupted by habit, which teaches men to give for the sake of their reputation',
        ],
        correctAnswer: 1,
        explanation:
          'The author places motive as “an end toward which the practice of giving is to carry the giver,” not a gate the gift must pass, and allows only one case in which the money had better be kept. That motive is of no account is the view of the “economists of benevolence,” which he expressly declines. That motive must first be found unmixed is the moralists’ position he argues against in the second paragraph. He calls habit “the ally of grace,” the opposite of a corrupting influence.',
        skill: 'main-idea',
      },
      {
        question:
          'The author’s attitude toward the “class of moralists” described in the first paragraph is best characterized as:',
        options: [
          'unreserved agreement with their reading of the precept of secrecy',
          'indifference, since their inquiry does not affect what the poor receive',
          'scorn for their piety joined to approval of their practical effects',
          'respect for the authority they cite but dissent from its use',
        ],
        correctAnswer: 3,
        explanation:
          'The author grants that the moralists have “a high authority on their side” and then says he cannot think the precept was given for the use to which they put it. That is not unreserved agreement. He is not indifferent, because he argues that their standard would cost the hungry their bread. He shows no scorn for piety, and he disapproves of the practical effects of their view rather than approving them.',
        skill: 'tone',
      },
      {
        question:
          'By saying that the man who gives always before witnesses “may come at last to need the poor as an actor needs an audience,” the author most nearly means that such a giver:',
        options: [
          'comes to depend on the distress of others for the display that relieving it allows him',
          'comes to give only in those public places where the greatest number will observe him',
          'comes to feel for the poor the affection that a performer feels for those who admire him',
          'comes to suspect the poor of feigning the distress that he is called upon to relieve',
        ],
        correctAnswer: 0,
        explanation:
          'The comparison follows the statement that this giver learns to treat others’ misery as the occasion of his own credit; an actor needs an audience in order to perform at all, and so this giver comes to require want as the stage for his giving. Where he chooses to give is not the point of the figure, which concerns what the poor have become to him. The author describes an injury to the giver’s character, not growing affection. Nothing suggests the giver doubts that the distress is real.',
        skill: 'inference',
      },
      {
        question:
          'The author introduces the man who began to give “because it was expected of his station” in order to:',
        options: [
          'concede that most giving among the respectable is done only for the sake of appearances',
          'show that the moralists are right to distrust whatever is done merely from custom',
          'offer evidence that persistence in giving can mend the motive with which a giver began',
          'contrast the giver who seeks reputation with the giver who seeks to bind the poor',
        ],
        correctAnswer: 2,
        explanation:
          'The example is the experience the author cites for his hopeful view of motive: a man who began from a poor motive continued until those he relieved mattered more to him than those who watched. It is not a concession about how most people give; “many a man” is offered as encouragement. It counts against the moralists’ distrust of habit, which the author calls the ally of grace. The giver who binds the poor is not introduced until the following paragraph.',
        skill: 'function',
      },
      {
        question:
          'To which of the following givers would the author’s judgment that “it were better he kept his money” most clearly apply?',
        options: [
          'A merchant who endows a hospital on condition that his name be set over its door',
          'A widower who gives to every beggar he passes because he cannot bear the sight of them',
          'A clerk who gives a tenth of his wages in the hope of reward in the life to come',
          'A landlord who relieves his tenants in hard winters and recalls it to them whenever they oppose him',
        ],
        correctAnswer: 3,
        explanation:
          'The single exception is the giver who bestows so that the receiver is bound to him and “would have his bounty remembered whenever his will is crossed,” leaving the poor less free; the landlord does exactly this. The merchant is the vain giver, who asks only that the gift be seen, and whose fault the author says ends in himself. The widower and the clerk give from mixed motives—relief from an unpleasant sight, hope of reward—but neither motive reaches the receiver, and the author’s rule for such givers is to give first and examine afterward.',
        skill: 'application',
      },
      {
        question:
          'Suppose a parish resolved to accept no donation from anyone unwilling to give anonymously. Based on the passage, the author would most likely object that this rule:',
        options: [
          'mistakes the precept of secrecy, which was meant to spare the feelings of the poor',
          'costs the poor their relief and the vain giver a practice that might mend him',
          'tempts givers to seek a hold over the poor in place of the public credit denied them',
          'is needless, since few of those who give care whether their gifts become known to others',
        ],
        correctAnswer: 1,
        explanation:
          'Refusing the showy gift rebukes the giver “at the charge of the widow,” and it also stops the practice of giving that the author thinks can carry a vain man toward a better motive. The author says the precept of secrecy was given for the giver’s sake, not the receiver’s, so the first option misstates him. Nothing in the passage suggests that denying public credit turns givers toward domination. The author takes vanity in giving to be common enough to need discussing, so he would not call the rule needless.',
        skill: 'new-information',
      },
    ],
  },
]
