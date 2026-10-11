import type { MCATPassage } from '../types'

/**
 * MCAT Full-Length Form 7 — CARS, file A (passages 1–5, 6 questions each).
 *
 * Five original argument-driven passages (500–600 words) across humanities and
 * social-science genres: philosophy (moral luck: what an unlucky outcome adds
 * to an equal fault), sociology (the queue as a self-policed institution), art /
 * aesthetics (why a copy that cannot be faulted still disappoints), psychology
 * (boredom and what it is for), and literary criticism (the keeping of diaries,
 * in a nineteenth-century essayist voice). Every key is derivable from the
 * passage alone; no outside knowledge is needed.
 */
export const FL7_CARS_A_PASSAGES: MCATPassage[] = [
  {
    id: 'fl7-cars-a-01',
    section: 'cars',
    discipline: 'philosophy',
    title: 'Two Seconds on a Quiet Street',
    passageText:
      'Two drivers, on the same evening and on similar streets, glance down at their telephones for the same two seconds. On the first driver’s street nothing happens, and he arrives home having forgotten the glance. On the second driver’s street a child steps out from between parked cars and is killed. We hold the second driver to have done something terrible; the first we scarcely hold to have done anything at all. Yet the difference between them was supplied wholly by the child, and by neither man.\n\nA long tradition in moral philosophy finds this intolerable. Its principle is that a person may be judged only for what lay within his control, and the conclusion follows quickly: since the two men chose alike, they are alike in guilt, and whatever more we feel toward the second is a kind of superstition, a recoil from the event mistaken for a verdict on the man. I shall call those who reason this way the purists. Their principle is not foolish. No one thinks a man blameworthy for a sneeze, and the purist merely asks us to be consistent.\n\nBut consider what consistency would require. Either we must think of the first driver as we now think of the second, or of the second as we now think of the first. The former makes killers, in everything but the event, of most people who have ever driven a car; the latter asks a man who has killed a child to regard the matter as he would a near miss. Neither is a correction of our practice. Each is its abolition, and a principle that cannot be lived on either reading should make us suspect that it has been stretched over more ground than it can cover.\n\nI think it has. The purist assumes that there is one question, how bad a man is, to which blame, punishment, remorse, and compensation are all answers. There are at least two questions. One concerns fault: how carelessly, or how wickedly, did he choose? Here the purist is right, and the drivers are equal. The other concerns what a person has to answer for, and here they are not equal, because the second man has a death to his account and the first does not. If the second driver were to tell the child’s parents that he was no more at fault than thousands who drove home safely that night, every word would be true, and they would be right to find it monstrous. What he owes them—an acknowledgment that this is his, a grief that is not merely a spectator’s—he owes because of what happened, and no amount of information about his choice discharges it.\n\nThe purist will answer that I have described a feeling and not a debt. But the alternative is stranger than he allows. A self that answers only for its choices is a self that has withdrawn from the world to a point where nothing can go wrong for it; what it does, as distinct from what it means to do, is no longer its own. People who act at all act into circumstances they do not command, and to disown the results whenever luck has had a hand is to disown nearly everything.\n\nNone of this settles what a court should do. Punishment is imposed by strangers, in everyone’s name, and there the purist’s demand that like faults be treated alike has a force I would not wish to weaken. My claim is narrower: that the unlucky driver who feels himself a killer is not confused.',
    questions: [
      {
        question: 'Which of the following best expresses the central claim of the passage?',
        options: [
          'Our harsher view of an unlucky agent is a recoil from the outcome that reflection ought to correct.',
          'How much an agent is at fault depends on how events turn out as well as on what the agent chose.',
          'Fault is one thing and what an agent must answer for another; only the second turns on outcome.',
          'Courts ought to punish careless agents alike, whether or not the carelessness happens to cause harm.',
        ],
        correctAnswer: 2,
        explanation:
          'The author separates two questions, fault and what a person has to answer for, grants the purist the first, and holds that the second differs between the drivers because of what happened. The “recoil” option is the purists’ own diagnosis, which the author disputes. The option making fault depend on outcome contradicts the statement that in fault “the drivers are equal.” What courts should do is expressly left unsettled in the last paragraph, so it cannot be the central claim.',
        optionExplanations: [
          'This is the purists’ own diagnosis, that our harsher reaction is “a recoil from the event mistaken for a verdict on the man.” The author names the purists in order to dispute them, so their view cannot be the passage’s central claim.',
          'The author explicitly grants the purist the question of fault: “here the purist is right, and the drivers are equal.” Making fault itself depend on outcome contradicts the passage’s own distinction between fault and what one must answer for.',
          'The fourth paragraph separates two questions, how carelessly a person chose and what a person has to answer for, concedes the first to the purists, and argues that only the second differs between the drivers because of the death. This is the thesis the rest defends.',
          'The final paragraph says that none of the argument “settles what a court should do,” so a claim about courts cannot be the passage’s central point. The author only concedes that the purist’s demand has force in punishment, without arguing for it.',
        ],
        skill: 'main-idea',
      },
      {
        question: 'The author’s attitude toward the purists’ principle is best described as:',
        options: [
          'respect for its core, joined to a belief that it has been applied too widely',
          'impatience with a doctrine that cannot tell a bodily reflex from a real choice',
          'acceptance of it for private remorse, joined to rejection of it for courts',
          'suspicion that those who hold it have never been obliged to act upon it',
        ],
        correctAnswer: 0,
        explanation:
          'The author says the principle “is not foolish,” agrees that the drivers are equal in fault, and objects only that it “has been stretched over more ground than it can cover.” The sneeze is the author’s example of where the principle is plainly right, not a confusion charged to the purists. The remorse-and-courts option reverses the passage: the author resists the principle for what the driver owes and feels, and concedes its force in punishment. Nothing is said about whether purists have had to live by their view.',
        optionExplanations: [
          'The author calls the principle “not foolish,” agrees that in fault “the drivers are equal,” and objects only that it “has been stretched over more ground than it can cover.” That is respect for the core combined with a charge of overextension.',
          'The sneeze is the author’s own example of where the principle is plainly right, offered in the purists’ favor. The passage never charges purists with confusing a reflex with a choice; it credits them with asking for consistency.',
          'This reverses the passage. The author resists the principle where private remorse is concerned, holding that the unlucky driver “who feels himself a killer is not confused,” and concedes its force precisely in punishment imposed by courts.',
          'Nothing in the passage questions whether purists have lived by their principle. The author’s objection is that the principle cannot be lived on either consistent reading, which is a claim about the principle itself, not about its holders’ experience.',
        ],
        skill: 'tone',
      },
      {
        question:
          'The author suggests that the second driver’s statement to the child’s parents would be “monstrous” because the statement:',
        options: [
          'understates the carelessness with which he had in fact been driving',
          'implies that the child was the one chiefly at fault for the death',
          'compares his conduct with that of drivers he knows nothing about',
          'treats a fact about his fault as if it settled what he owes',
        ],
        correctAnswer: 3,
        explanation:
          'The author stipulates that “every word would be true,” so the statement misstates nothing; its offense is that it answers the question of fault when what the parents are owed belongs to the other question, what he has to answer for. Because the statement is accurate, it cannot be understating his carelessness. It says nothing about the child’s fault. The comparison with other drivers is also granted as true, so its being a comparison is not what makes it monstrous.',
        optionExplanations: [
          'The author stipulates that “every word would be true,” so the statement cannot be understating anything. It accurately reports that his fault equaled that of thousands of others; its offense lies elsewhere.',
          'The statement compares the driver with other drivers; it says nothing about the child. The passage never suggests the driver shifts blame onto the child, and the monstrousness is tied to what he owes the parents, not to any accusation.',
          'The comparison with other drivers is granted as true, so making a comparison is not what offends. The passage treats the statement as accurate about fault; the problem is that fault is the wrong question to be answering.',
          'The parents are owed “an acknowledgment that this is his, a grief that is not merely a spectator’s,” which belongs to the question of what he must answer for. Answering instead with a true fact about fault treats that fact as if it discharged a debt it cannot touch.',
        ],
        skill: 'inference',
      },
      {
        question:
          'The author’s suspicion that the purists’ principle “has been stretched over more ground than it can cover” depends on the assumption that:',
        options: [
          'most people who drive have at some time caused a serious accident',
          'a sound moral principle is one that those who accept it could act upon',
          'the purists have never attempted to apply their principle to themselves',
          'our present reactions to the two drivers are beyond any reasonable criticism',
        ],
        correctAnswer: 1,
        explanation:
          'The third paragraph argues that neither way of being consistent can be lived and concludes that the principle is therefore suspect; that step holds only if being unlivable counts against a principle. The argument says most drivers have been careless, not that they have caused accidents. Whether purists have tried to apply their view is never raised. The author does not treat present reactions as beyond criticism, since the passage concedes that in fault the drivers are equal and that courts may owe them equal treatment.',
        optionExplanations: [
          'The third paragraph says consistency would make “killers, in everything but the event, of most people who have ever driven a car,” which assumes most drivers have been careless, not that most have caused accidents. The argument needs widespread carelessness, not widespread harm.',
          'The author argues that neither consistent reading “can be lived” and concludes that the principle is therefore suspect. That inference holds only if unlivability counts against a moral principle, which is exactly this assumption.',
          'Whether purists have tried to apply their principle to themselves is never raised. The author’s suspicion rests on what consistency would require of everyone, not on any failure of purists to practice what they preach.',
          'The author does not treat present reactions as beyond criticism; the passage concedes that in fault the drivers are equal and that courts may owe them equal treatment. The argument is narrower than a defense of all our reactions.',
        ],
        skill: 'assumption',
      },
      {
        question:
          'Two nurses each skip the same required check on the same night. One patient is unharmed; the other dies as a result. Which of the following attitudes on the part of the second nurse would the author most likely consider fitting?',
        options: [
          'She should hold that the two of them owe the dead patient’s family exactly the same thing.',
          'She should hold that she did nothing gravely wrong, since the same omission is usually harmless.',
          'She should hold that she was the more careless of the two, since it was her patient who died.',
          'She should hold that the death is hers to answer for, though her lapse was no worse than her colleague’s.',
        ],
        correctAnswer: 3,
        explanation:
          'The nurses stand as the two drivers do: equal in fault, unequal in what each has to answer for. The fitting attitude therefore accepts the death as her own to answer for without pretending that she chose worse than her colleague. The colleague has no death to her account, so she does not owe the family the same thing. Holding that nothing grave was done is the “near miss” attitude the author says cannot be asked of someone who has killed. Judging herself the more careless confuses outcome with fault, which the author keeps equal.',
        optionExplanations: [
          'The colleague has no death to her account, so by the author’s reasoning the two nurses do not owe the family the same thing. What a person has to answer for differs with outcome even when fault is equal.',
          'This is the “near miss” attitude, which the author says asks a person who has killed to regard the matter as if nothing happened. The passage calls that reading an abolition of our practice, not a correction of it.',
          'Judging herself more careless confuses outcome with fault. The author insists the two agents are equal in fault; what differs is only what each has to answer for, so the second nurse was not the more careless.',
          'The nurses stand as the two drivers do: equal in fault, unequal in what each must answer for. The fitting attitude accepts the death as hers to answer for while recognizing that her lapse was no worse than her colleague’s, exactly the author’s position on the unlucky driver.',
        ],
        skill: 'application',
      },
      {
        question:
          'Suppose a legal system punished attempted crimes exactly as severely as completed ones, on the ground that the offenders had chosen alike. How would this practice bear on the author’s argument?',
        options: [
          'It would be consistent with the argument, which grants the purist’s demand its force where strangers punish.',
          'It would be inconsistent with the argument, which holds that outcomes alter how gravely a person is at fault.',
          'It would be inconsistent with the argument, which holds that treating equal faults alike cannot be lived.',
          'It would be consistent with the argument, which denies that a completed harm adds anything to an attempt.',
        ],
        correctAnswer: 0,
        explanation:
          'The final paragraph says the argument does not settle what a court should do and that, in punishment imposed by strangers, the demand that like faults be treated alike has a force the author would not weaken. Equal punishment is thus compatible with the passage. The author holds that outcomes do not alter fault, so the first “inconsistent” option misstates the argument. What “cannot be lived” is equalizing our whole regard for the two drivers, not equal sentences. The author insists a completed harm does add something, namely what the agent must answer for.',
        optionExplanations: [
          'The final paragraph says the argument does not settle what a court should do and that in punishment imposed by strangers the demand to treat like faults alike “has a force I would not wish to weaken.” Equal sentences for equal choices fit comfortably within that concession.',
          'The author holds that outcomes do not alter fault; in fault “the drivers are equal.” This option misstates the argument, attributing to it the view that outcomes change how gravely a person is at fault.',
          'What “cannot be lived” is equalizing our whole regard for the two drivers, treating the killer as a near-miss or every careless driver as a killer. Equal sentencing by courts is a narrower matter the author expressly leaves open.',
          'The author insists a completed harm does add something: the second driver has a death to his account and the first does not. The practice would be consistent with the argument, but not for this reason, which contradicts the passage.',
        ],
        skill: 'new-information',
      },
    ],
  },
  {
    id: 'fl7-cars-a-02',
    section: 'cars',
    discipline: 'sociology',
    title: 'The Line Nobody Drew',
    passageText:
      'Thirty strangers at a bus stop, with no official present and no rule posted, will arrange themselves in the order of their arrival and board in that order. No one instructs them, and no one would be punished for doing otherwise. Observers have generally explained this small marvel in one of two ways. To some it is habit: people line up because they were trained to as children, and the queue shows only how docile a public can be made. To others it is fairness in miniature, a spontaneous agreement that all shall be treated alike. Neither explanation, I think, survives a careful look at how a queue behaves.\n\nIf lining up were mere habit, an intruder would meet with nothing worse than surprise. In fact he meets with indignation, and indignation of a patterned kind. In experiments in which a confederate stepped into the middle of a waiting line, objections came overwhelmingly from the person immediately behind the point of entry and rarely from anyone further back, although each person behind the intruder had lost exactly the same amount of time. Those ahead of him, who lost nothing, almost never spoke. A habit does not assign its defense so precisely. Nor does a general love of equal treatment, which ought to be offended equally wherever the intruder stands.\n\nWhat the pattern suggests is that people in a queue regard themselves as holding something. Each minute of waiting is a payment, and a place is what the payments have bought. The person just behind the intruder speaks because the trespass occurred at his boundary; those further back regard the matter as his to settle. The same idea explains what queues permit. A place may be held by a bag while its owner fetches a coffee, provided a neighbor has been asked. A shopper with a full cart may wave ahead one with a single loaf. These would be violations if the rule were simply that people are served in order of arrival. They are unremarkable if a place is a possession, which its owner may leave in another’s care or give up.\n\nIt is here that the fairness theory is weakest, for the queue is not, on inspection, very fair. It gives no weight to need: the traveler who will miss a connection stands behind the one with an hour to spare. And its currency is cheaper for some than for others, since an afternoon costs the retired less than it costs a parent with two jobs. What the queue offers is narrower than fairness and, perhaps for that reason, sturdier. It is one of the few arrangements in which nothing a person owns or is counts for anything except having stood there.\n\nThat, I suspect, is why the sale of priority provokes a resentment out of proportion to the minutes involved. When an amusement park or an airline lets customers pay to pass the line, defenders note that the buyers have merely exchanged money for time, as everyone does who hires a taxi instead of walking. The reply mistakes the complaint. Those left standing do not object that others have more money; they knew that. They object that payments made in one currency have been cheapened by the admission of another, and that they were not asked.\n\nThe queue, then, is evidence of something students of society have been slow to credit: that strangers who will never meet again can keep up a system of entitlements, with its own rules of transfer and trespass, without anyone to enforce it but themselves.',
    questions: [
      {
        question:
          'Which of the following would be consistent with the conventions of a queue as the author describes them?\n\nI. A person’s leaving a bag to mark a place after speaking to the person behind\nII. A person’s inviting someone with a small purchase to go ahead\nIII. A late arrival’s being served first because her errand is the most urgent',
        options: ['I only', 'I and II only', 'II and III only', 'I, II, and III'],
        correctAnswer: 1,
        explanation:
          'Statements I and II correspond to the two things the third paragraph says queues permit: a place left in a neighbor’s care, and a place given up to another by its holder. Statement III would give precedence to need over waiting, and the fourth paragraph says the queue “gives no weight to need”; it would also take from everyone already waiting something none of them had agreed to give. “I only” omits a practice the author expressly counts as unremarkable, and the options that include III admit the one thing the queue ignores.',
        optionExplanations: [
          'Leaving a bag after speaking to a neighbor is the first permitted practice, but the author also counts waving ahead a shopper with a single loaf as unremarkable. Omitting the second practice leaves out something the passage expressly allows.',
          'Statements I and II match the two permissions in the third paragraph: a place left in a neighbor’s care and a place given up by its holder. Statement III gives precedence to need, and the fourth paragraph says the queue “gives no weight to need.”',
          'Statement III would put the most urgent errand first, but the author says the traveler who will miss a connection “stands behind the one with an hour to spare.” Need confers nothing in a queue, so this statement conflicts with its conventions.',
          'Statements I and II are permitted, but statement III is not. The passage states that the queue “gives no weight to need,” and serving a late arrival first would take from everyone waiting something none of them agreed to give.',
        ],
        skill: 'detail',
      },
      {
        question: 'The author describes the experiments with the confederate chiefly in order to:',
        options: [
          'show that most people in a line will let an intruder pass without any protest',
          'show that those at the back of a line lose more time than those at the front',
          'show that objections fall in a pattern that neither rival account would predict',
          'show that indignation at intruders is acquired in childhood and never reasoned',
        ],
        correctAnswer: 2,
        explanation:
          'The experiments are followed at once by two verdicts: “A habit does not assign its defense so precisely,” and a love of equal treatment “ought to be offended equally wherever the intruder stands.” The pattern is evidence against both explanations and prepares the author’s own. That most people stayed silent is a by-product, not the point, and the author stresses who did object. The passage says everyone behind the intruder lost the same amount of time. The childhood-training option is the habit theory the experiments are used against.',
        optionExplanations: [
          'The author stresses who did object, not who stayed silent. The point is the precise pattern of objection, the person just behind the intruder, which neither rival account predicts; general passivity is not the lesson drawn.',
          'The passage says each person behind the intruder “had lost exactly the same amount of time.” Nothing in the experiment concerns the back of the line losing more than the front; that claim contradicts the passage.',
          'The experiments are immediately followed by two verdicts: “A habit does not assign its defense so precisely,” and a love of equal treatment “ought to be offended equally wherever the intruder stands.” The pattern is evidence against both rival explanations.',
          'Childhood training is the habit theory, which the experiments are deployed to refute. The author argues that a habit would not assign its defense so precisely, so the experiments count against this account rather than illustrating it.',
        ],
        skill: 'function',
      },
      {
        question:
          'The remark that what the queue offers is “narrower than fairness and, perhaps for that reason, sturdier” most strongly implies that the queue holds up in part because it:',
        options: [
          'admits a single ground of entitlement and so shuts out competing ones',
          'serves the neediest sooner than a broader scheme of fairness would',
          'costs each of its members the same, whatever their circumstances',
          'has been taught to its members as fair from their earliest years',
        ],
        correctAnswer: 0,
        explanation:
          'The next sentence explains the narrowness: nothing a person owns or is counts “except having stood there.” An arrangement that recognizes one claim only leaves no opening for arguments about need, wealth, or rank, which is the suggested source of its sturdiness. The passage says the queue ignores need, so it does not serve the neediest sooner. It also says waiting costs the retired less than a parent with two jobs, so the cost is not equal. Early teaching is the habit theory, which the author rejected in the second paragraph.',
        optionExplanations: [
          'The sentence following the remark explains the narrowness: nothing a person owns or is counts “except having stood there.” Recognizing one ground of entitlement only leaves no opening for rival claims of need, wealth, or rank, which is the implied source of sturdiness.',
          'The passage says the queue “gives no weight to need” and that the traveler who will miss a connection stands behind one with an hour to spare. Serving the neediest sooner is the opposite of what the queue does.',
          'The author states that the queue’s currency “is cheaper for some than for others,” since an afternoon costs the retired less than a parent with two jobs. The cost is explicitly unequal.',
          'Early teaching is the habit theory, which the author rejected in the second paragraph on the grounds that a habit does not assign its defense so precisely. The author does not attribute the queue’s sturdiness to upbringing.',
        ],
        skill: 'inference',
      },
      {
        question:
          'Which of the following findings, if true, would most weaken the author’s explanation of why objections came chiefly from the person immediately behind the intruder?',
        options: [
          'People standing further back later said they had seen the intruder and been annoyed.',
          'People standing further back objected more often when two intruders entered together.',
          'People standing just behind objected less often when the intruder first asked leave.',
          'People standing further back later said they had not seen the intruder enter.',
        ],
        correctAnswer: 3,
        explanation:
          'The author reads the silence of those further back as a judgment that the trespass was the nearest person’s to settle. If they simply did not see the intrusion, their silence shows nothing about boundaries or holdings, and the pattern is explained by who could observe it. People who saw, were annoyed, and still left the matter to the person in front fit the author’s account well. A stronger response to two intruders does not bear on why one person rather than another speaks. Fewer objections to an intruder who asks leave suits the idea that a place is its holder’s to grant.',
        optionExplanations: [
          'People who saw the intruder, felt annoyed, and nevertheless left the matter to the person in front fit the author’s account well: they regarded the trespass as the nearest person’s to settle. This observation supports rather than weakens the explanation.',
          'A stronger response to two intruders does not bear on why one person rather than another speaks. The author’s explanation concerns the location of objection, which this finding leaves untouched.',
          'Fewer objections to an intruder who first asks permission suits the author’s idea that a place is a possession its holder may grant to another. This finding is consistent with the explanation, not a challenge to it.',
          'The author reads the silence of those further back as a judgment that the trespass was the nearest person’s to settle. If they simply did not see the intruder enter, their silence shows nothing about boundaries or holdings; the pattern would be explained by who could observe.',
        ],
        skill: 'strengthen-weaken',
      },
      {
        question:
          'Which of the following groups has a grievance most like the one the author attributes to people passed by customers who have paid for priority?',
        options: [
          'Tenants who learn that a neighbor with a larger income has rented the best apartment in the building',
          'Runners who learn that a rival who beat them had trained all year under a more expensive coach',
          'Volunteers who learn that the service hours they logged toward an award can now be replaced by a donation',
          'Commuters who learn that the fare on their usual route is to rise for every passenger at once',
        ],
        correctAnswer: 2,
        explanation:
          'The grievance is that what people had paid in one currency, waiting, was cheapened when a second currency, money, was admitted without their being asked. The volunteers paid in hours and find that money now buys the same award. The tenants and the runners object only that someone else has more money to spend, which the author says is not the complaint: “they knew that.” The commuters face a cost that falls on everyone alike, with no earlier payment of theirs made worth less by a new way of paying.',
        optionExplanations: [
          'The tenants object only that a neighbor has more money to spend, which the author says is not the complaint: those left standing “knew that.” No earlier payment of theirs in a different currency has been cheapened.',
          'The runners object that a rival spent more money on training, again a complaint about others having more money. The passage distinguishes this from the real grievance, that a second currency was admitted without consent.',
          'The grievance is that payments made in one currency, waiting, were cheapened when money was admitted as another currency without anyone asking. Volunteers who paid in hours and now find that a donation buys the same award face exactly this.',
          'A fare rise falls on everyone alike and introduces no second currency. No earlier payment of the commuters’ has been made worth less by a new way of paying, so the structure of the grievance differs entirely.',
        ],
        skill: 'application',
      },
      {
        question: 'The passage as a whole presents the queue chiefly as:',
        options: [
          'a habit instilled in childhood that persists without reflection',
          'a self-policed scheme of holdings acquired by waiting',
          'a small-scale model of equal treatment among strangers',
          'a convention now being undone by the sale of priority',
        ],
        correctAnswer: 1,
        explanation:
          'The author argues that people in a queue hold places bought with minutes of waiting, with rules of transfer and trespass, and that they keep the system up “without anyone to enforce it but themselves.” The habit account and the equal-treatment account are the two explanations dismissed at the outset. The sale of priority is discussed as a source of resentment that the author’s account explains; the passage does not claim that it is destroying the queue.',
        optionExplanations: [
          'The habit account is one of the two explanations dismissed at the start, and the second paragraph argues that habit cannot explain the precise pattern of objection to intruders. The passage presents the queue as something other than habit.',
          'The author argues that people in a queue hold places bought with minutes of waiting, with rules of transfer and trespass, maintained “without anyone to enforce it but themselves.” This captures the passage’s overall characterization.',
          'The equal-treatment account is the second rejected explanation. The fourth paragraph says the queue is “not, on inspection, very fair,” giving no weight to need and costing some more than others.',
          'The sale of priority is discussed as a source of resentment that the author’s account explains, not as a force destroying the queue. The passage ends by presenting the queue as a durable system of entitlements, not a vanishing one.',
        ],
        skill: 'main-idea',
      },
    ],
  },
  {
    id: 'fl7-cars-a-03',
    section: 'cars',
    discipline: 'art / aesthetics',
    title: 'A Portrait of a Taste',
    passageText:
      'It is a curious fact about forged paintings that they do not stay convincing. A picture accepted by the best judges of one generation as the work of an old master is, a generation or two later, not merely doubted but found faintly ridiculous: people look at it and wonder how anyone was deceived. The usual explanation flatters us. Our predecessors, we say, were careless or credulous, and methods have improved. But the exposed forgery is often rejected at a glance, before any laboratory has been consulted, and by people with less training than those it fooled. Something other than progress is at work.\n\nI believe the explanation is this. A forger cannot put into his picture what he does not see in his model, and he sees in his model what his own time has taught him to see. If his contemporaries admire the master for a certain sweetness of expression, he will supply sweetness, and a little more of it than the master did. They will recognize the picture at once as everything they love in the master, because it was made from that love and from nothing else. A later generation, admiring the master for different things, finds those things missing and the sweetness overdone. The forgery has not altered. It was always a portrait of a taste, and the taste has gone.\n\nNow this bears on a question usually discussed in more abstract terms. Suppose, it is asked, that a copy were perfect: that no one could tell it from the original. Would it not be mere snobbery to prefer the original? Those who press the question take the word “perfect” to describe the copy. But what it describes is us. To say that no difference can be seen is to say that no difference can be seen by present eyes, looking for what present eyes look for; and the history of forgery is a history of differences that could not be seen until, quite suddenly, they could not be missed. A copy is one reading of a picture, however faithful. It contains what the copyist found there. The original contains whatever is there to be found, including what nobody has yet learned to look for.\n\nHere is the reason, I think, that a copy disappoints even while we are unable to fault it. We go to an old picture partly to be shown something we would not have thought of, and the copy can show us only what someone has already thought. The preference for the original is therefore not a reverence for names or for the mere age of a canvas. It is the reasonable preference for a thing that may still correct us over a thing that can only agree with us.\n\nIt will be objected that all this applies to copies made by hand, and that a machine reads nothing; it simply records. But a machine records what it was built to record. The engraving, the photograph, and the color plate were each hailed in turn as delivering the picture itself, and each now looks unmistakably like its own decade, because each embodied a decision, invisible at the time, about which features of a painting matter. One may of course imagine a duplicate identical atom for atom. I do not know what we should say about it, and I doubt that we need to decide. An argument that holds only for copies no one can make ought not to govern our dealings with the copies that people do.',
    questions: [
      {
        question:
          'The author observes that an exposed forgery is often rejected “at a glance, before any laboratory has been consulted, and by people with less training than those it fooled” in order to:',
        options: [
          'suggest that the experts who were deceived had been careless in their work',
          'suggest that laboratories add little to what is known about old pictures',
          'suggest that untrained viewers judge old pictures better than experts do',
          'suggest that better methods cannot be what makes the forgery plain',
        ],
        correctAnswer: 3,
        explanation:
          'The observation is the author’s reason for concluding that “something other than progress is at work”: if the forgery is dismissed without instruments and by the less expert, improved methods and training cannot account for the change. Carelessness in the earlier experts is part of the flattering explanation the author is setting aside. The author makes no general claim about the usefulness of laboratories. Nor is the point that the untrained judge better; it is that later viewers of any training see what the earlier, better-trained ones could not.',
        optionExplanations: [
          'Carelessness in the earlier experts is part of the flattering “usual explanation” the author sets aside. The observation that untrained later viewers reject the forgery is used to undermine that account, not to support it.',
          'The author makes no general claim about what laboratories contribute. The observation only notes that exposure often happens before any laboratory is consulted, which bears on whether improved methods explain the change.',
          'The point is not that untrained viewers judge better than experts. It is that later viewers, whatever their training, see what earlier and better-trained viewers could not, because taste has changed.',
          'The observation is the author’s reason for concluding that “something other than progress is at work.” If forgeries are dismissed without instruments and by the less expert, better methods and training cannot be what reveals them.',
        ],
        skill: 'function',
      },
      {
        question: 'Which of the following best states the main point of the passage?',
        options: [
          'Forgeries are exposed in the end because the methods of examining pictures improve with every new generation.',
          'A copy holds only what its maker could find in the original, which is good reason to prefer the original.',
          'A copy made by machine escapes the limits of taste that confine every copy made by a human hand.',
          'Forgeries earn the scorn of later generations because their makers set out to flatter and to deceive.',
        ],
        correctAnswer: 1,
        explanation:
          'The passage moves from the dating of forgeries to the claim that any copy is “one reading of a picture,” and concludes that preferring the original is reasonable because the original may still show us what no one has yet looked for. Improved methods are the “usual explanation” the author rejects. The machine-made copy is said to embody its own period’s decisions about what matters, so it does not escape the limits described. The author’s case does not rest on the forger’s dishonesty; the argument is extended to honest copies and to reproductions.',
        optionExplanations: [
          'Improved methods are the “usual explanation,” which the author rejects by noting that forgeries are often exposed at a glance, before laboratories are consulted, by people with less training than those deceived.',
          'The passage moves from the dating of forgeries to the claim that any copy is “one reading of a picture,” containing only what the copyist found, and concludes that preferring the original is reasonable because it may still show what no one has yet looked for.',
          'The fifth paragraph says a machine “records what it was built to record” and that each reproduction technology now looks like its own decade. Machine copies do not escape the limits of taste; they embody them invisibly.',
          'The author’s case does not rest on forgers’ dishonesty. The argument is extended to honest copies and to photographs and engravings, so flattery and deception cannot be the reason later generations scorn forgeries.',
        ],
        skill: 'main-idea',
      },
      {
        question:
          'The author offers each of the following as part of the explanation of why a forgery convinces its first viewers but not later ones EXCEPT:',
        options: [
          'that later viewers examine the picture with better instruments',
          'that the forger overstates what his period admires in the master',
          'that later viewers value the master for different qualities',
          'that the forger sees in the master what his period sees',
        ],
        correctAnswer: 0,
        explanation:
          'Better instruments belong to the “usual explanation,” which the author sets aside by noting that exposed forgeries are often rejected before any laboratory is consulted. The other three are steps in the author’s own account in the second paragraph: the forger sees what his time has taught him to see, supplies “a little more” of the admired quality than the master did, and is found out when a later generation admires the master for other things.',
        optionExplanations: [
          'Better instruments belong to the “usual explanation” that progress exposes forgeries, which the author explicitly sets aside by noting that exposed forgeries are often rejected before any laboratory is consulted.',
          'The second paragraph says the forger “will supply sweetness, and a little more of it than the master did.” Overstating the admired quality is part of the author’s own explanation.',
          'The second paragraph says a later generation, “admiring the master for different things, finds those things missing.” A shift in what viewers value is a step in the author’s account.',
          'The second paragraph states that the forger “sees in his model what his own time has taught him to see.” This is the foundation of the author’s explanation.',
        ],
        skill: 'detail',
      },
      {
        question:
          'Which of the following findings, if true, would most strengthen the author’s account of why forgeries cease to convince?',
        options: [
          'Forgeries are more often exposed by chemical tests than by the judgment of experts.',
          'Forgers of old masters have usually begun their careers as restorers of pictures.',
          'Experts shown forgeries from several periods are most often fooled by those of their own.',
          'Experts of every period agree closely about which qualities a given master displays.',
        ],
        correctAnswer: 2,
        explanation:
          'If a forgery embodies the taste of the period that made it, viewers who share that taste should be the least able to see through it, and viewers from another period the most able; the finding about experts and forgeries of their own time is exactly that pattern. Exposure mainly by chemical tests would favor the “progress” explanation the author rejects. The forgers’ training as restorers is irrelevant to the argument. Close agreement across periods about a master’s qualities would undercut the claim that each period sees the master differently.',
        optionExplanations: [
          'Exposure mainly by chemical tests would favor the “progress” explanation the author rejects. It would suggest that improved methods, not changing taste, unmask forgeries.',
          'The forgers’ earlier careers as restorers has no bearing on the argument. The passage concerns how taste shapes what a forger sees and what later viewers notice, not the forger’s training.',
          'If a forgery embodies the taste of its period, viewers sharing that taste should be least able to see through it and viewers of another period most able. Experts fooled chiefly by forgeries of their own time is exactly that pattern.',
          'Close agreement across periods about a master’s qualities would undercut the author’s claim that each generation admires the master “for different things.” This finding weakens the account rather than strengthening it.',
        ],
        skill: 'strengthen-weaken',
      },
      {
        question:
          'Which of the following is most nearly analogous to a copy of a painting as the author characterizes it?',
        options: [
          'A listener’s transcript of a speech, which holds only as much as that listener caught',
          'A speaker’s own notes for a speech, which hold what the speaker had planned to say in it',
          'A critic’s review of a speech, which holds a judgment of how well it was argued',
          'A rival’s reply to a speech, which holds the objections that the speech provoked',
        ],
        correctAnswer: 0,
        explanation:
          'A copy, for the author, is a faithful record limited by what its maker was able to find in the original; a transcript made by one listener is likewise an attempt at the whole that is bounded by that listener’s hearing. The speaker’s notes come from the originator and precede the work, so they are not a record of it by another. A review passes judgment on its object and does not try to reproduce it. A reply adds new matter in response and is not a rendering of the original at all.',
        optionExplanations: [
          'A copy, for the author, is a faithful attempt at the whole that is bounded by what its maker could find in the original. A listener’s transcript is likewise an attempt at the whole speech limited by what that listener caught.',
          'The speaker’s notes come from the originator and precede the speech. They are not a record of the work made by another, so they do not parallel a copy made from an existing original.',
          'A review passes judgment on its object and does not attempt to reproduce it. The author’s copy is “one reading of a picture, however faithful,” a rendering rather than an evaluation.',
          'A reply adds new matter in response to the speech. It is not a rendering of the original at all, whereas a copy aims to reproduce what is there, limited only by the copyist’s eye.',
        ],
        skill: 'application',
      },
      {
        question:
          'A collector remarks: “I have set my copy beside the original many times and never found a difference. For me they are the same picture.” The author would most likely reply that the collector’s experience shows:',
        options: [
          'that the copy was made by a machine and not by a human copyist',
          'that the collector loves the picture and not merely its name',
          'that the original holds nothing more than the copyist recorded',
          'that the collector and the copyist look for the same things',
        ],
        correctAnswer: 3,
        explanation:
          'The author holds that calling a copy indistinguishable describes the viewers, not the copy: no difference can be seen “by present eyes, looking for what present eyes look for.” The collector’s failure to find one therefore shows only that the collector’s way of looking matches the copyist’s. It does not indicate how the copy was made, and the author says machine copies carry their period’s assumptions too. The collector’s motives are not in question. That the original holds nothing more is the very conclusion the author denies can be drawn.',
        optionExplanations: [
          'The collector’s inability to find a difference says nothing about how the copy was made. The author also holds that machine copies embody their period’s decisions about what matters, so this inference is unsupported.',
          'The collector’s motives are not in question. The author’s point concerns what indistinguishability tells us about viewers, not whether the collector loves the picture or its name.',
          'This is the very conclusion the author denies can be drawn. The original “contains whatever is there to be found, including what nobody has yet learned to look for,” so present indistinguishability does not show the original holds nothing more.',
          'The author holds that calling a copy indistinguishable describes the viewers: no difference can be seen “by present eyes, looking for what present eyes look for.” The collector’s experience shows only that his way of looking matches the copyist’s.',
        ],
        skill: 'application',
      },
    ],
  },
  {
    id: 'fl7-cars-a-04',
    section: 'cars',
    discipline: 'psychology',
    title: 'Not This',
    passageText:
      'Boredom has seldom been thought worth explaining. It is the emotion of waiting rooms and wet Sundays, and the two things commonly said about it are both reproaches. One blames the surroundings: the bored person is understimulated, and the cure is more to see and hear. The other blames the person: boredom is a failure of inner resources, and, as generations of schoolchildren have been told, only boring people are bored. I want to suggest that both sayings misdescribe the thing, and that boredom is better understood as doing a job.\n\nTake first the idea that boredom is a shortage of stimulation. It cannot account for the commonest cases. A worker on a loud and fast assembly line is bored; so is a guest at a crowded party where the talk does not interest him. An angler, meanwhile, may sit by a still pond for hours in contentment. Laboratory studies add a further difficulty. People set tasks far too easy for them report boredom, as one would expect; but so do people set tasks far too hard, who have more than enough coming at them and can do nothing with it. What the bored have in common is not that too little is happening. It is that they want to be absorbed in something and are failing to be.\n\nDescribed this way, boredom begins to look like hunger or pain: an unpleasant state whose unpleasantness is the point, because it moves the sufferer to change his situation. That it can move people powerfully is shown by an experiment in which volunteers were left alone in a bare room for a quarter of an hour, with nothing to do but think and, if they wished, press a button that gave them a mild electric shock. Many pressed it, some repeatedly, though all had earlier said they would pay to avoid the shock. Boredom, on this evidence, is not a mere absence of feeling. It is a goad.\n\nBut it is a goad of a peculiar kind. Hunger tells us what is wanted. Boredom says only “not this,” and is silent about what instead. It is therefore no surprise that proneness to boredom has been linked both to curiosity and invention and to overeating, gambling, and reckless driving. The signal is satisfied by whatever ends it. Those who now praise boredom as the cradle of creativity, and urge that children be left with empty afternoons, have noticed half of this. An empty afternoon produces a fort built of chairs only where there are chairs, and a habit of making things; boredom contributes the restlessness and nothing more.\n\nThe schoolroom saying fares no better. If boredom is a signal, then a person who is never bored is not thereby shown to be rich in inner resources. He may be so; or he may resemble those rare patients who feel no pain, and who are in danger precisely because nothing warns them.\n\nThis is the light in which I would view the device that most of us now carry. It is often said that the telephone has abolished boredom, and said approvingly. It has done so in the manner of an anesthetic. The minutes in the waiting room matter little. But the same remedy is at hand during the tedious course of study, the job that uses nothing of one’s abilities, the evenings that all resemble one another; and a person who silences the complaint each time it rises may go a long while without learning what it was about.',
    questions: [
      {
        question:
          'The author mentions that people set tasks “far too hard” for them also report boredom chiefly because this finding:',
        options: [
          'supplies a case of boredom amid plentiful stimulation',
          'suggests that boredom is more frequent among the less capable',
          'shows that easy tasks and hard tasks are equally unpleasant',
          'implies that boredom in a laboratory differs from the everyday kind',
        ],
        correctAnswer: 0,
        explanation:
          'The finding is introduced as “a further difficulty” for the view that boredom is a shortage of stimulation: these people “have more than enough coming at them” and are bored all the same. The author draws no conclusion about how capable bored people are; the point concerns the fit between person and task. Nothing is said about how unpleasant the two kinds of task are relative to each other. The laboratory result is offered as agreeing with the everyday cases of the assembly line and the party, not as differing from them.',
        optionExplanations: [
          'The finding is introduced as “a further difficulty” for the view that boredom is a shortage of stimulation. People with tasks too hard “have more than enough coming at them” and are bored anyway, so stimulation is plentiful yet boredom persists.',
          'The author draws no conclusion about how capable bored people are. The point concerns the mismatch between person and task, whether too easy or too hard, not any ranking of people by ability.',
          'Nothing in the passage compares how unpleasant easy and hard tasks are. Both produce boredom, but the author does not say they are equally unpleasant, and that comparison is not the purpose of the example.',
          'The laboratory result is offered as agreeing with the everyday cases of the assembly line and the crowded party, not as differing from them. All show boredom without a shortage of stimulation.',
        ],
        skill: 'function',
      },
      {
        question:
          'Which of the following best describes the author’s view of those who praise boredom as “the cradle of creativity”?',
        options: [
          'They are mistaken to suppose that boredom moves children to do anything at all.',
          'They are right about children but wrong to extend the point to bored adults.',
          'They are right that boredom stirs people to act but wrong to credit it with the result.',
          'They are mistaken because empty afternoons are too stimulating to produce boredom.',
        ],
        correctAnswer: 2,
        explanation:
          'The author says these people “have noticed half of this”: boredom does supply restlessness, but the fort of chairs requires chairs and a habit of making things, so boredom “contributes the restlessness and nothing more.” The author does not deny that boredom moves children; it is called a goad. No distinction between children and adults is drawn. The author has rejected the idea that boredom depends on the amount of stimulation, so the last option relies on a theory the passage discards.',
        optionExplanations: [
          'The author does not deny that boredom moves children; boredom is called “a goad” that moves people powerfully. The disagreement is about what boredom contributes, not whether it motivates.',
          'No distinction between children and adults is drawn. The author’s criticism is that these people have noticed only half the truth about boredom, not that their point applies to one age group and not another.',
          'The author says those who praise boredom “have noticed half of this”: boredom supplies restlessness, but the fort of chairs requires chairs and a habit of making things. Boredom “contributes the restlessness and nothing more,” so crediting it with creativity is the error.',
          'The author has rejected the idea that boredom depends on the amount of stimulation, so this option relies on a theory the passage discards. The author also does not deny that empty afternoons produce boredom.',
        ],
        skill: 'tone',
      },
      {
        question:
          'Which of the following observations would be most readily explained by the author’s claim that boredom “says only ‘not this’”?',
        options: [
          'A bored commuter judges that a ten-minute delay has lasted half an hour.',
          'A bored clerk feels relief on turning to a pastime he hardly enjoys.',
          'A bored student can say exactly which activity she would rather be doing.',
          'A bored traveler grows drowsy and is asleep before the journey is over.',
        ],
        correctAnswer: 1,
        explanation:
          'If boredom rejects the present activity without naming a replacement, then, as the author says, it “is satisfied by whatever ends it,” so even an unloved pastime should bring relief. The commuter’s sense of slowed time and the traveler’s drowsiness are facts about boredom that the “not this” claim does nothing to explain. A student who knows exactly what she would rather do has a signal with specific content, which is what the author says boredom lacks.',
        optionExplanations: [
          'A sense that time has slowed is a fact about boredom, but the claim that boredom “says only ‘not this’” concerns its lack of content about what to do instead. That claim does nothing to explain time perception.',
          'If boredom rejects the present without naming a replacement, then, as the author says, it “is satisfied by whatever ends it.” Relief from an unloved pastime is exactly what a contentless signal predicts.',
          'A student who knows exactly which activity she would rather be doing has a signal with specific content. The author says boredom lacks that content, so this observation contradicts rather than illustrates the claim.',
          'Drowsiness is a fact about boredom that the “not this” claim does nothing to explain. The claim concerns what boredom does and does not tell the sufferer about alternatives, not sleepiness.',
        ],
        skill: 'application',
      },
      {
        question:
          'The comparison with “those rare patients who feel no pain” is meant to suggest that a person who is never bored:',
        options: [
          'has probably learned to conceal a boredom that he does in fact feel',
          'has probably found occupations better suited to him than most people do',
          'may be less intelligent than those who are bored often and easily',
          'may be going without a warning that his situation ought to prompt',
        ],
        correctAnswer: 3,
        explanation:
          'The patients are “in danger precisely because nothing warns them”; by analogy, someone who never feels bored may lack the signal that an unsuitable situation would normally produce, so the absence of boredom is not proof of rich inner resources. The comparison is with people who feel nothing, not with people who hide what they feel. Having found well-suited occupations is not what the patients illustrate; they stand for a missing warning, and the only other possibility the author grants is that the person really is rich in inner resources. Intelligence is not mentioned anywhere in the passage.',
        optionExplanations: [
          'The patients are people who feel nothing, not people who hide what they feel. The comparison concerns a missing signal, so it implies nothing about concealed boredom.',
          'The patients do not illustrate a well-suited life; they illustrate a missing warning. The author grants that a never-bored person “may be” rich in inner resources, but the comparison is meant to raise the other possibility.',
          'Intelligence is mentioned nowhere in the passage. The author’s concern is with whether boredom functions as a signal, not with how intelligent bored or unbored people are.',
          'The patients are “in danger precisely because nothing warns them.” By analogy, someone never bored may lack the signal that an unsuitable situation should produce, so the absence of boredom is not proof of rich inner resources.',
        ],
        skill: 'inference',
      },
      {
        question:
          'Suppose that in a later version of the bare-room experiment, volunteers in the same room for the same period were given a hard but solvable puzzle to work out in their heads, and almost none of them pressed the button. This result would most directly support the author’s claim that:',
        options: [
          'boredom is a state strong enough to drive people toward real discomfort',
          'boredom turns on whether one is absorbed, not on how much is going on',
          'boredom gives its sufferer no indication of what to do in its place',
          'boredom is felt less by people who are in the habit of making things',
        ],
        correctAnswer: 1,
        explanation:
          'The room is as bare as before, so the amount of outside stimulation is unchanged; what differs is that the volunteers have something to engage them, and the urge to escape disappears. That supports the conclusion of the second paragraph about what bored people have in common. The strength of boredom was shown by the original version, in which people did press the button, not by this one. The result does not bear on whether boredom points to a remedy. No habit of making things was measured, and the author never claims that such a habit reduces boredom.',
        optionExplanations: [
          'The strength of boredom as a drive was shown by the original experiment, in which people did shock themselves. A version in which almost no one presses the button does not demonstrate boredom’s power.',
          'The room is as bare as before, so outside stimulation is unchanged; what differs is that the volunteers have something to engage them, and the urge to escape disappears. That supports the second paragraph’s claim about absorption.',
          'The result does not bear on whether boredom points to a remedy. It shows only that absorbed people are not bored, which concerns the cause of boredom rather than the content of its signal.',
          'No habit of making things was measured in the experiment. The author also never claims that such a habit reduces boredom; the habit is mentioned only as something boredom cannot itself supply.',
        ],
        skill: 'new-information',
      },
      {
        question: 'Which of the following people best illustrates the danger described in the final paragraph?',
        options: [
          'A patient who reads the news on her telephone while waiting an hour to see a dentist',
          'A retiree who, restless on empty afternoons, takes to betting on horse races by telephone',
          'An accountant who plays games on his telephone whenever work drags and stays in the job for years',
          'A student who, finding a lecture too advanced to follow, leaves it and enrolls in an easier course',
        ],
        correctAnswer: 2,
        explanation:
          'The danger is that a person who quiets boredom each time it rises never learns what it was about and so remains in a situation that does not engage him; the accountant does this for years. The patient uses the same remedy where the author says it “matter[s] little,” in a waiting room. The retiree shows the earlier point that boredom can be ended by harmful pursuits, not the anesthetic effect. The student feels the signal and acts on it by changing her situation, which is the reverse of silencing it.',
        optionExplanations: [
          'The patient uses her telephone in a waiting room, where the author says the minutes “matter little.” This is the harmless use the final paragraph explicitly sets aside before describing the danger.',
          'The retiree illustrates the earlier point that boredom “is satisfied by whatever ends it,” including gambling. That is about harmful cures, not about silencing the signal with an anesthetic and never learning what it was about.',
          'The danger is that a person who quiets boredom each time it rises never learns what it was about and stays in a situation that does not engage him. The accountant anesthetizes the complaint for years in “the job that uses nothing of one’s abilities.”',
          'The student feels the signal and acts on it by changing her situation, which is the reverse of silencing it. The author would regard this as boredom doing its job, not as the danger described.',
        ],
        skill: 'application',
      },
    ],
  },
  {
    id: 'fl7-cars-a-05',
    section: 'cars',
    discipline: 'literary criticism',
    title: 'Of Diaries, and the Eye Upon the Page',
    passageText:
      'It is a common persuasion that of all the kinds of writing the diary is the most sincere. The poet, we are told, writes for fame, the historian for a party, and the writer of letters for the good opinion of his correspondent; but the keeper of a diary writes for nobody, and, having nobody to deceive, sets down the truth. I confess that I have never found this solitary truth-teller in any diary I have read; and I am inclined to think that those who believe in him have attended more to the title of the book than to its pages.\n\nObserve how the diarist proceeds. He informs his page that his brother is a clergyman, and lives in Norfolk; a fact of which he can scarcely need reminding. He excuses a hasty word spoken at dinner, and shows that the provocation was great. He resolves, at the close of the year, upon amendment, in terms fit for a pulpit. Some have gone further, and written in cipher, or cut out leaves with a penknife. Now a man does not explain, nor plead, nor preach, nor conceal, in an empty room. All these are the motions of one who feels an eye upon him; and whether it be the eye of his own later years, or of his children, or of that indulgent stranger whom every writer imagines, it is an eye, and he composes himself before it as he would his countenance before a glass.\n\nNor would the case be mended though we could find a diarist wholly indifferent to every reader. A day contains ten thousand particulars, and the page will hold fifty. He must choose; and to choose is already to judge what is worthy of remembrance, which is to say, what sort of man he would be thought to have been that day. The sincerity of the diary, then, I take to be much like the sincerity of a portrait for which the sitter has chosen his own coat.\n\nIt may be thought that I have left the diary without a merit. On the contrary, I have only removed a false one, to make room for the true. Let the diary be compared, not with the letter, but with the memoir. He who writes his life at sixty knows how it has turned out. He knows which acquaintance became his wife, and which speculation ruined him; and, knowing, he cannot help arranging his early chapters as a road which leads thither. Every incident is given the weight which the event has since assigned to it. The diarist has no such knowledge. He bestows three pages upon a quarrel with his landlord, and a single line upon a meeting which, as we who turn the leaf are aware, was to alter everything. His proportions are all wrong; and it is precisely in the wrongness of his proportions that his testimony is beyond price. He cannot tell us how a life looked in the end. He alone can tell us how a day looked while the end was still hidden.\n\nI would therefore have diaries read otherwise than they commonly are. We go to them for the heart laid bare, and find a man in his best coat; whereupon some readers cry out upon him for a hypocrite, and others, more charitable, persuade themselves that the coat is skin. Both might spare themselves the trouble. What the diarist could not falsify, had he wished it, is his ignorance of to-morrow; and that is the part of him which no other witness can supply.',
    questions: [
      {
        question: 'The central argument of the passage is that the diary:',
        options: [
          'deserves its reputation for candor, since its writer has no one to deceive',
          'deserves little trust as testimony, since its writer composes for a reader',
          'owes its worth to its writer’s not knowing what was to come, not to his candor',
          'yields in worth to the memoir, whose writer can give each event its due weight',
        ],
        correctAnswer: 2,
        explanation:
          'The author removes a “false” merit, sincerity, “to make room for the true” one: the diarist’s ignorance of what followed, which preserves how a day looked “while the end was still hidden.” The candor option is the common persuasion the author begins by doubting. The little-trust option stops at the first half of the argument and ignores the merit the author goes on to defend. The memoir is treated as the lesser witness on this point, because its writer cannot help arranging the past in the light of the outcome.',
        optionExplanations: [
          'The candor view is the “common persuasion” the author begins by doubting, saying he has “never found this solitary truth-teller in any diary.” The passage argues against this reputation.',
          'This stops at the first half of the argument. The author does deny the diary’s sincerity but then “removes a false” merit “to make room for the true,” defending the diary’s testimony on different grounds.',
          'The author removes a false merit, sincerity, “to make room for the true” one: the diarist’s ignorance of what followed, which preserves “how a day looked while the end was still hidden.” That shift is the central argument.',
          'The memoir is treated as the lesser witness on this point. Its writer, knowing how things turned out, “cannot help arranging his early chapters as a road which leads thither,” so each event’s weight is distorted by hindsight.',
        ],
        skill: 'main-idea',
      },
      {
        question:
          'The author mentions diarists who have “written in cipher, or cut out leaves with a penknife” in order to:',
        options: [
          'suggest that the frankest diaries record what their writers were ashamed of',
          'concede that some diarists have written with no thought of any reader',
          'illustrate how small a part of any day a diarist is able to set down',
          'show that diarists conduct themselves as though the page will be seen',
        ],
        correctAnswer: 3,
        explanation:
          'Cipher and excised leaves are the last items in a list of things a man does not do “in an empty room”; concealment makes sense only against a reader, so the practices are evidence that the diarist “feels an eye upon him.” The author is not ranking diaries by frankness or commenting on what was hidden. Far from conceding that some diarists ignore readers, the examples are said to go “further” in the same direction. The limit on how much of a day a page can hold is a separate argument made in the next paragraph.',
        optionExplanations: [
          'The author is not ranking diaries by frankness or commenting on what the hidden passages contained. Cipher and excision are cited as acts of concealment, not as marks of a frank record.',
          'Far from conceding this, the author says these diarists “have gone further” in the same direction as those who explain and plead. Concealment is treated as evidence of a felt reader, not its absence.',
          'The limit on how much of a day a page can hold is a separate argument in the next paragraph. Cipher and penknife concern concealment from a reader, not the selection forced by limited space.',
          'Cipher and excised leaves close a list of things a man does not do “in an empty room.” Concealment makes sense only against a reader, so these practices show that the diarist “feels an eye upon him” and composes himself before it.',
        ],
        skill: 'function',
      },
      {
        question:
          'The comparison of the diary to “a portrait for which the sitter has chosen his own coat” most strongly implies that a diary:',
        options: [
          'shows its writer truly enough, though as he has arranged to be shown',
          'shows its writer falsely, since nothing in it can be taken as fact',
          'shows its writer more favorably than a memoir by him would do',
          'shows its writer only as other people were accustomed to see him',
        ],
        correctAnswer: 0,
        explanation:
          'A portrait in a coat of the sitter’s choosing is still a likeness of the sitter; what he controls is the presentation. The figure thus allows the diary a qualified sincerity, shaped by the writer’s selection of what is “worthy of remembrance.” The author does not say that nothing in a diary is fact, and the final paragraph rebukes readers who call the diarist a hypocrite. No comparison of how flattering diaries and memoirs are is made. The coat is chosen by the sitter, so the image concerns self-presentation, not how others habitually saw him.',
        optionExplanations: [
          'A portrait in a coat the sitter chose is still a likeness of the sitter; what he controls is the presentation. The figure grants the diary a qualified sincerity shaped by the writer’s selection of what is “worthy of remembrance.”',
          'The author does not say that nothing in a diary is fact; the diarist’s brother really is a clergyman in Norfolk. The final paragraph also rebukes readers who cry out upon the diarist as a hypocrite.',
          'No comparison of how flattering diaries and memoirs are appears in the passage. The memoir is contrasted with the diary on knowledge of outcomes, not on favorable presentation.',
          'The coat is chosen by the sitter himself, so the image concerns self-presentation. It says nothing about how other people were accustomed to see the diarist.',
        ],
        skill: 'inference',
      },
      {
        question:
          'Which of the following, if true, would most weaken the author’s claim about the particular value of diaries?',
        options: [
          'Most diarists have hoped that their diaries would one day be published.',
          'Most diarists have gone back in later life and recast their early entries.',
          'Most memoirists have consulted their own diaries when writing their lives.',
          'Most diarists have dwelt on matters that proved to be of no consequence.',
        ],
        correctAnswer: 1,
        explanation:
          'The value claimed for the diary is that its entries were written in ignorance of what followed, so that their proportions were not adjusted to the outcome. Entries recast in later life would have been rearranged with the outcome known, like a memoir. A hope of publication is one more “eye,” which the author has already granted without thinking the diary’s true merit affected. Memoirists’ use of diaries says nothing about the diaries themselves. Dwelling on matters of no consequence is the “wrongness of proportions” that the author prizes.',
        optionExplanations: [
          'A hope of publication is one more “eye” upon the page, which the author has already granted without thinking the diary’s true merit affected. The author says the diarist composes himself before some imagined reader in any case.',
          'The value claimed for the diary is that entries were written in ignorance of what followed, so their proportions were not adjusted to the outcome. Entries recast in later life would have been rearranged with the outcome known, like a memoir.',
          'Memoirists consulting their own diaries says nothing about the diaries themselves. The diary’s value as testimony to how a day looked is unaffected by what later writers do with it.',
          'Dwelling on matters that proved inconsequential is the “wrongness of proportions” the author prizes. Three pages on a landlord’s quarrel and one line on a fateful meeting is precisely what makes the diary’s testimony “beyond price.”',
        ],
        skill: 'strengthen-weaken',
      },
      {
        question:
          'Which of the following documents would the author most likely prize for the reason he gives for prizing diaries?',
        options: [
          'A frank account of his youthful follies that a merchant of eighty writes for his grandson',
          'A sworn statement in which a witness recalls an accident that she saw the year before',
          'A history of a campaign that a general compiles from his dispatches after the peace',
          'A weekly report on a new venture that a clerk sends his employer before its fate is known',
        ],
        correctAnswer: 3,
        explanation:
          'What the author prizes is testimony written before the outcome was known, whatever the writer’s motives or audience; the clerk’s weekly reports are composed for a reader, yet in ignorance of how the venture will end. The merchant’s account is candid but written with a whole life in view, like a memoir at sixty. The witness and the general likewise write afterward, knowing how the accident and the campaign turned out, and so cannot help giving each incident the weight the event has since assigned it.',
        optionExplanations: [
          'The merchant’s account is candid but written at eighty with a whole life in view. Like the memoir at sixty, it cannot help arranging early incidents in the light of how things turned out.',
          'A sworn statement about an accident seen a year before is written afterward, with the outcome known. The witness recalls with hindsight, which is the memoir’s condition rather than the diary’s.',
          'A history compiled after the peace is written knowing how the campaign ended. The general cannot help giving each dispatch the weight the event has since assigned to it, which is exactly what the author says robs testimony of its special value.',
          'What the author prizes is testimony written before the outcome was known, whatever the writer’s motives or audience. The clerk writes for a reader, yet in ignorance of how the venture will end, so his reports preserve how things looked while the end was hidden.',
        ],
        skill: 'application',
      },
      {
        question:
          'A reader discovers that a celebrated diarist described a family quarrel so as to appear in a better light, and declares the whole diary worthless. The author would most likely say that this reader:',
        options: [
          'has asked of the diary a merit it never had and overlooked the one it has',
          'has judged soundly, since a diary that flatters its writer can tell us nothing',
          'has judged in haste, since most other diarists were more candid than this one',
          'has shown the charity of those who take a writer’s best coat for his skin',
        ],
        correctAnswer: 0,
        explanation:
          'The final paragraph says we go to diaries “for the heart laid bare,” find “a man in his best coat,” and need not be troubled, because the diary’s real worth lies in what could not be falsified. A reader who discards a diary for self-flattery has demanded sincerity and missed the ignorance of to-morrow. The author denies that such a diary tells us nothing. The author holds that all diarists compose themselves, so other diarists are not held up as more candid. The charitable readers are those who mistake the coat for skin, the opposite of this reader’s reaction.',
        optionExplanations: [
          'The final paragraph says we go to diaries for the heart laid bare, find a man in his best coat, and need not be troubled, because the real worth lies in what could not be falsified. This reader demanded sincerity and missed the ignorance of to-morrow.',
          'The author denies that a self-flattering diary tells us nothing. Its ignorance of what was to come is “the part of him which no other witness can supply,” and that survives any flattering account of a quarrel.',
          'The author holds that all diarists compose themselves before an eye, pleading, preaching, and concealing. No other diarist is held up as more candid, so this reader’s haste is not the problem.',
          'The charitable readers are those who “persuade themselves that the coat is skin,” that is, who take the diarist’s self-presentation for the truth. This reader did the opposite, crying out upon the diarist for a hypocrite.',
        ],
        skill: 'application',
      },
    ],
  },
]
