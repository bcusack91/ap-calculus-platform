import type { MCATPassage } from '../types'

/**
 * MCAT Full-Length Form 7 — CARS, file B (passages 6–9; 6, 6, 6, 5 questions = 23).
 *
 * Four original argument-driven passages (500–600 words each) written to the
 * Form 7/8 blueprint: history / historiography (clock time and the discipline
 * of work), literary criticism (the ethics of writing a memoir about one’s
 * family), political science (compulsory voting), and linguistics
 * (professional jargon as a boundary). Every item is answerable from the
 * passage alone; no outside knowledge is required.
 */
export const FL7_CARS_B_PASSAGES: MCATPassage[] = [
  {
    id: 'fl7-cars-b-06',
    section: 'cars',
    discipline: 'history / historiography',
    title: 'Minutes That Could Be Stolen',
    passageText:
      'The story of how working people came to live by the clock is usually told as a story of imposition. Before the mill, we are told, labour followed the task: the field was ploughed when the ground was ready, the net was mended when it tore, and the day ended when the work did. Then came the factory bell, the gatekeeper’s book, and the fine for lateness, and a people who had worked by the sun were made to work by the minute. The account is not false. But it leaves the impression that clock time was simply something done to workers, and it draws that impression from a body of evidence which could hardly have yielded any other.\n\nConsider what survives. The printed rules of a mill, the schedule of fines, the sermon against idleness, the complaint of a master that his hands kept Monday as a holiday: every one of these was written by someone who wished the workers punctual. Such documents record the campaign faithfully and its success hardly at all. A rule against lateness proves that the master wanted punctuality and that he was not getting it; it cannot tell us when, or why, he began to get it. To read the triumph of the clock out of the mill rules is to take the length of a sermon as a measure of the congregation’s virtue.\n\nNor should the world before the bell be mistaken for a world of ease. The task was a master too. The harvest that had to be brought in before the rain kept labourers in the field by moonlight, and the tide did not wait upon the fisherman’s rest. What distinguished the older rhythm was not that it asked less but that it asked unevenly — bouts of furious labour, then slack days — and that nobody could be said to own the slack days. An hour not worked had been lost to no one.\n\nThat, I think, is the true novelty, and it is one of conception before it is one of discipline. Once labour is bought by the hour, time becomes a thing that can be owed, and therefore a thing that can be withheld or stolen. The master who moved the hands of the factory clock forward in the morning and back at night was not merely cheating; he was cheating in a currency that his workers had come to count in. And here the evidence of the workers themselves, thin as it is, becomes eloquent. The earliest protests were against the clock as such: men walked out because they would not be rung in like cattle. Within two generations the protests were about the clock’s honesty, and then about its arithmetic — a shorter day, a higher rate for the hours past the tenth. People who strike for a shorter working day are not resisting the hour. They have accepted that their time is a quantity with a price, and they are disputing the price.\n\nIt is in this sense that the clock won, and the sense matters. A discipline that is merely imposed lasts as long as the overseer is watching. The discipline of the hour outlasted any overseer because those subject to it had found in it a weapon: a day that can be measured can be limited, and the same clock that fined the latecomer convicted the master who kept the mill running past the hour. We misread that history if we see in it only defeat, and we misread it equally if we see in it liberation.',
    questions: [
      {
        question: 'Which of the following best expresses the central thesis of the passage?',
        options: [
          'Clock time was forced on workers by employers, whose rules and fines slowly wore down an older rhythm of labour.',
          'Clock time freed workers from the uneven demands of the task by giving them a day that could be measured.',
          'Clock time prevailed less through employers’ rules than through workers’ coming to treat hours as a priced quantity.',
          'Clock time cannot be studied reliably, since the surviving documents were written by those who wanted punctuality.',
        ],
        correctAnswer: 2,
        explanation:
          'The author calls the true novelty “one of conception before it is one of discipline” and says the clock won when workers stopped resisting the hour and began “disputing the price,” a change no overseer imposed. The forced-on-workers option is the usual account, which the author says is “not false” but misleading. The freed-workers option is the reading the last sentence rules out when it warns against seeing “liberation.” The cannot-be-studied option inflates the second paragraph’s caution about employers’ documents into a scepticism the author abandons as soon as the workers’ own protests are brought in as evidence.',
        skill: 'main-idea',
      },
      {
        question: 'The author’s comparison involving “the length of a sermon” is intended to make the point that:',
        options: [
          'the energy with which a standard is urged is no evidence that it was met.',
          'religious authorities did as much as employers to promote punctual habits.',
          'documents written by masters deliberately overstated the idleness of workers.',
          'workers never came to observe mill rules, just as congregations ignore sermons.',
        ],
        correctAnswer: 0,
        explanation:
          'The comparison closes a paragraph arguing that mill rules “record the campaign faithfully and its success hardly at all”: a long sermon shows what the preacher wanted, not how the congregation behaved, and a rule shows what the master wanted, not what he got. The religious-authorities option treats the sermon as a historical cause, whereas it is used as a figure for a kind of evidence. The deliberately-overstated option charges the masters with distortion; the author’s complaint is about what their documents can show, not about their honesty. The never-came option contradicts the passage, which holds that the master did eventually “begin to get” punctuality and that the clock won.',
        skill: 'function',
      },
      {
        question: 'Based on the passage, which of the following complaints would a master have been LEAST able to make against a labourer before labour was bought by the hour?',
        options: [
          'That the labourer had left an urgent task undone when the weather turned',
          'That the labourer had done a piece of work too carelessly for it to be sold',
          'That the labourer had refused to stay in the field by moonlight at harvest',
          'That the labourer had robbed him of minutes by resting during the day',
        ],
        correctAnswer: 3,
        explanation:
          'The passage says that under the older rhythm “an hour not worked had been lost to no one” and that only “once labour is bought by the hour” does time become something that can be “withheld or stolen.” A charge of stealing minutes therefore presupposes a conception the earlier arrangement lacked. The other three complaints concern the task, which the author says “was a master too”: an undone task, a badly done task, and a refusal to finish the harvest are all failures that make sense where work is measured by what gets done.',
        skill: 'inference',
      },
      {
        question: 'The author’s reading of strikes for a shorter working day depends on the assumption that:',
        options: [
          'the strikers would have preferred to return to working by the task.',
          'the terms in which a protest is framed show how the protesters understand their position.',
          'employers of the period were willing to bargain over the length of the day.',
          'earlier walkouts against the factory bell had failed to win any concessions.',
        ],
        correctAnswer: 1,
        explanation:
          'From the fact that workers demanded fewer hours and higher rates, the author concludes that “they have accepted that their time is a quantity with a price.” That step holds only if the vocabulary of a demand reveals the outlook of those making it, and is not merely the one language an employer would listen to. The return-to-the-task option attributes to the strikers a wish the argument does not need and that would sit badly with their having accepted the hour. The willing-to-bargain option concerns the employers’ response, which is irrelevant to what the demand shows about the workers. The failed-walkouts option supplies a history of the earlier protests that the passage neither gives nor requires.',
        skill: 'assumption',
      },
      {
        question: 'Suppose diaries of early mill workers were found showing that many of them bought watches with their first wages and took pride in timing their own walks to the mill. This evidence would most strongly support the author’s view that:',
        options: [
          'the rule of the clock was not merely something done to workers.',
          'the rhythm of the task had demanded as much as the factory did.',
          'masters altered factory clocks in order to lengthen the working day.',
          'the earliest protests of mill workers were against the clock as such.',
        ],
        correctAnswer: 0,
        explanation:
          'Workers who buy watches and time themselves with pride are taking up clock time on their own account, which is what the author means in denying that it was simply imposed and in saying that workers “had come to count in” hours. The rhythm-of-the-task option concerns work before the mill, about which diaries of mill workers’ watches say nothing. The altered-clocks option concerns the masters’ cheating; private watches might help expose it but do not show that it occurred. The earliest-protests option is, if anything, harder to square with workers who embraced the clock from their first wages.',
        skill: 'new-information',
      },
      {
        question: 'Which of the following situations is most analogous to the change the author describes in workers’ protests?',
        options: [
          'Villagers who once refused to pay a new tax later flee the district to escape it.',
          'Students who once ignored a grading scheme go on ignoring it after it is revised.',
          'Tenants who once rejected written leases later sue a landlord for breaking a clause.',
          'Merchants who once welcomed standard weights later petition the town to abolish them.',
        ],
        correctAnswer: 2,
        explanation:
          'The protests moved from rejecting the clock “as such” to holding the master to it — disputing its honesty and its arithmetic, and using it as “a weapon.” Tenants who first reject leases and later sue under one have likewise passed from refusing an instrument to invoking its terms against the other party. The villagers are still refusing outright, by a different means. The students show no change at all. The merchants move in the opposite direction, from acceptance of a measure to rejection of it.',
        skill: 'application',
      },
    ],
  },
  {
    id: 'fl7-cars-b-07',
    section: 'cars',
    discipline: 'literary criticism',
    title: 'Told About, or Used',
    passageText:
      'Every memoirist who writes about a family meets the same embarrassment: the material is not hers alone. The father’s drinking, the sister’s divorce, the quarrel at the funeral — these happened to the writer, and they also happened to people who did not ask to be written about and who must now meet themselves in print. Two answers to this embarrassment are in general circulation, and I think both of them are evasions.\n\nThe first is the answer of ownership. “It is my life,” the writer says, “and I am entitled to tell it.” The sentence has a fine sound, and its premise is true: no one should need a relative’s permission to say what her own childhood was like. But the conclusion claims more than the premise can deliver. A life is not a plot of ground with a fence around it. What the writer calls her story is made, in large part, of other people’s worst hours, and to say that she owns her experience of her father’s rages does not settle whether she owns the rages.\n\nThe second answer is consent. Show the manuscript to those who appear in it, the scrupulous say, and print nothing they refuse. This looks like decency and works like censorship of a particular kind — the kind that favours whoever has most to conceal. The gentle aunt will approve her pages; the uncle who struck his children will not approve his. A rule of consent hands the pen to precisely the relatives whose conduct made the book worth writing. And even the willing subject bargains: she consents to the portrait she can live with, and the writer, grateful, learns to paint that one.\n\nIf neither ownership nor permission will serve, what will? I suggest that we have been asking the wrong question. We ask whether the writer had the right to expose her family, as though exposure were the injury. But consider which memoirs their subjects have actually found unforgivable. It is seldom the ones that told the most. It is the ones in which a mother or a brother appears only as what he did to the author — a weather system in someone else’s sky, with no morning of his own. The wrong in such a book is not disclosure. It is reduction: a person has been made a device.\n\nThe remedy for reduction is not silence but a kind of generosity that happens also to be good craft. The memoirist owes the people in her book what the novelist owes invented characters and seldom has to be told to give them: reasons, a history, the capacity to have seen the same events otherwise. A father shown with his rages and also with the night shifts that preceded them is more exposed than before, not less, and yet he has been done a justice that concealment could not have done him. I would add a second obligation, harder than the first. The writer must be at least as unsparing with herself as with anyone else, for a memoir in which only the author’s motives are spared has become a brief for the prosecution.\n\nNone of this will satisfy a relative who simply wishes not to appear. I do not think that wish can always be honoured, and it is better to admit this than to pretend that some procedure makes the difficulty disappear. What can be honoured is the difference between being told about and being used.',
    questions: [
      {
        question: 'According to the passage, a rule requiring relatives’ consent is objectionable chiefly because it:',
        options: [
          'delays a book until every relative named in it has read the manuscript.',
          'gives most control to those whose behaviour most needs telling.',
          'treats the writer’s own experience as though it belonged to other people.',
          'presumes that relatives recall events less accurately than the writer does.',
        ],
        correctAnswer: 1,
        explanation:
          'The third paragraph says consent “favours whoever has most to conceal”: the gentle aunt approves, the violent uncle does not, so the veto falls to the relatives whose conduct is the book’s subject. The delay option names a practical inconvenience the author never raises. The belongs-to-others option is closer to the author’s reply to the ownership answer, and in any case the author grants that no one needs permission to describe her own childhood. The recall option introduces a question of accuracy that plays no part in the passage’s objection.',
        skill: 'detail',
      },
      {
        question: 'The author’s attitude toward the claim “It is my life, and I am entitled to tell it” is best described as:',
        options: [
          'dismissive, since the claim is treated as a mere excuse for cruelty.',
          'approving, since no relative is thought able to limit what is told.',
          'neutral, since the claim is reported without any judgment of its merits.',
          'qualified, since its premise is granted but is held not to settle the question.',
        ],
        correctAnswer: 3,
        explanation:
          'The author says of the claim that “its premise is true” but that “the conclusion claims more than the premise can deliver,” because owning one’s experience of a father’s rages does not settle “whether she owns the rages.” That is partial acceptance with a stated limit. The dismissive option ignores the concession and imports a charge of cruelty the author never makes. The approving option ignores that the ownership answer is called an evasion. The neutral option is ruled out by the explicit verdict the author delivers.',
        skill: 'tone',
      },
      {
        question: 'The author describes a father shown “with his rages and also with the night shifts that preceded them” in order to:',
        options: [
          'show that fairness to a subject may call for telling more about him, not less.',
          'suggest that hardship at work excuses a parent’s violence toward his children.',
          'illustrate the kind of detail that relatives usually refuse to see in print.',
          'argue that memoirists should research their families as historians would.',
        ],
        correctAnswer: 0,
        explanation:
          'The example follows the claim that “the remedy for reduction is not silence”: the father is “more exposed than before, not less,” yet has been “done a justice that concealment could not have done him.” Fuller telling, not withholding, is what makes the portrait fair. The excuses option mistakes giving a person “reasons, a history” for acquitting him; the rages remain in the portrait. The refuse-to-see option belongs to the discussion of consent, not to this example. The research option turns an obligation of fairness into a recommendation about method that the passage does not make.',
        skill: 'function',
      },
      {
        question: 'Which of the following memoirs would the author be most likely to criticize?',
        options: [
          'One that reveals a brother’s bankruptcy together with the cautious years that led up to it',
          'One that recounts the writer’s lies to a dying mother as fully as the mother’s coldness',
          'One that brings in a sister only in scenes where she thwarts the writer’s ambitions',
          'One that prints a grandfather’s prison record, with his account of it, over his children’s protests',
        ],
        correctAnswer: 2,
        explanation:
          'The wrong the author identifies is reduction: a relative who “appears only as what he did to the author.” A sister present only where she obstructs the writer is exactly that. The bankruptcy memoir discloses a painful fact but supplies the “history” the author asks for. The dying-mother memoir meets the second obligation, that the writer be “at least as unsparing with herself.” The prison-record memoir exposes a relative against the family’s wishes, but the author denies that exposure is the injury and concedes that the wish not to appear cannot “always be honoured”; giving the grandfather’s own account is the opposite of reducing him.',
        skill: 'application',
      },
      {
        question: 'Which of the following findings, if true, would most weaken the author’s account of what makes a family memoir wrongful?',
        options: [
          'Relatives shown a manuscript in advance usually ask for changes to the pages about themselves.',
          'Memoirs that portray relatives with sympathy tend to sell fewer copies than those that do not.',
          'Writers who are severe with themselves in a memoir are usually severe with relatives too.',
          'Relatives drawn fully and with sympathy resent painful revelations as bitterly as those drawn flatly.',
        ],
        correctAnswer: 3,
        explanation:
          'The author locates the wrong in reduction and not in disclosure, resting this on the observation that the unforgivable memoirs are “seldom the ones that told the most.” If relatives who were portrayed fully and generously were just as aggrieved by what was revealed, the injury would seem to lie in exposure after all. The ask-for-changes finding fits the author’s remark that “even the willing subject bargains.” The sales finding concerns the market, not the wrong done to subjects. The severe-with-themselves finding describes writers who satisfy the second obligation and says nothing about how their subjects were wronged.',
        skill: 'strengthen-weaken',
      },
      {
        question: 'A memoirist defends her book by saying, “Everything in it is true, and my mother signed a release before it went to press.” The author of the passage would most likely reply that this defense:',
        options: [
          'succeeds, because accuracy and permission together exhaust what a writer owes a subject.',
          'leaves open whether the mother appears as more than a part in her child’s story.',
          'fails, because a release signed by a relative can never be freely given.',
          'is beside the point, because relatives have no claim on what a writer tells.',
        ],
        correctAnswer: 1,
        explanation:
          'For the author neither truthful disclosure nor consent decides the matter; the question is whether a person “has been made a device” or has been given “reasons, a history,” and a release does not answer it. The succeeds option treats permission as sufficient, though the author calls the consent answer an evasion. The never-freely-given option overstates the remark that a willing subject “bargains,” which concerns what consent does to the portrait, not whether consent is possible. The no-claim option is the ownership answer pushed further than the author accepts, since the passage holds that relatives are owed something.',
        skill: 'application',
      },
    ],
  },
  {
    id: 'fl7-cars-b-08',
    section: 'cars',
    discipline: 'political science',
    title: 'What the Empty Booth Was Saying',
    passageText:
      'The case for requiring citizens to vote is usually made on the ground of numbers. Where voting is voluntary, half the electorate may stay home; where it is required, nine in ten appear; and a government chosen by nine in ten, it is said, has a better title to govern than one chosen by five. The case against is usually made on the ground of liberty: the right to vote includes the right not to, and a state that fines the abstainer has turned a freedom into a chore. I think the first argument weaker than its friends suppose and the second weaker still, and that the real question lies where neither side has looked.\n\nTake liberty first. No system of compulsory voting compels a vote. What is required is attendance — the citizen must collect a ballot, and may then return it blank or spoiled. This is a burden of the same order as answering a census or reporting for jury service, and those who accept such duties without complaint owe us an explanation of why an hour at the polling station, once every few years, is the intolerable one.\n\nThe argument from numbers fails differently. A larger count is not in itself a truer one. If those now dragged to the polls mark their ballots at random, they add nothing to the result except noise, and it is fair to ask what legitimacy has been gained. But the critics who press this point generally assume that the voluntary voter is the informed one, and that is not what voluntary voting selects for. It selects for intensity. The citizen who is certain turns out; the citizen who is merely thoughtful, and therefore torn, often does not.\n\nAnd candidates know it. Under voluntary voting the cheapest vote to win is that of a supporter who might otherwise have stayed home, and so campaigns are built to rouse the faithful — to alarm, to flatter, to convince people who already agree that this election is the last. Persuading the undecided is expensive by comparison and is correspondingly neglected. Require attendance, and the arithmetic changes. The faithful will be there in any case; nothing is gained by inflaming them; and the votes still to be won belong to people who are not angry and must therefore be given reasons. The strongest argument for compulsory voting, then, concerns not what it does to voters but what it does to those who seek their votes.\n\nI do not think this argument conclusive, and the difficulty is one its proponents rarely notice. Abstention is not always apathy. Sometimes it is a verdict: the citizen stays home because nothing on offer deserves an endorsement, and a falling turnout is how a political class learns that it is losing the country. Compulsion silences that signal. The booths are full, the count is handsome, and the government congratulates itself on a mandate that the law manufactured. A blank ballot is no substitute, since blank ballots are reported, if at all, together with the mistakes.\n\nThe remedy is not to abandon the requirement but to complete it. Let the ballot carry a line for those who reject every candidate, and let that tally be published beside the winner’s. Then attendance could be demanded without demanding assent, and a government would still be able to read, in a figure it could not disguise, how many of the governed it had failed to persuade.',
    questions: [
      {
        question: 'The passage as a whole argues that compulsory voting:',
        options: [
          'is best defended by its effect on campaigns and should keep a means of registering rejection.',
          'is justified because a larger turnout gives the winning side a stronger title to govern.',
          'should be opposed because it hides the discontent that a low turnout would reveal.',
          'is an intrusion on liberty of the same order as jury service or the census.',
        ],
        correctAnswer: 0,
        explanation:
          'The author calls the effect on “those who seek their votes” the “strongest argument for compulsory voting,” admits that compulsion “silences” the signal sent by abstention, and concludes that the remedy is “not to abandon the requirement but to complete it” with a published line for rejecting every candidate. The larger-turnout option is the argument from numbers, which the author finds weak because “a larger count is not in itself a truer one.” The should-be-opposed option takes the fifth paragraph’s difficulty as the conclusion, though the author keeps the requirement. The intrusion option reverses the use of the census and jury service, which are cited to show that the burden is an ordinary one.',
        skill: 'main-idea',
      },
      {
        question: 'The author makes each of the following claims about voluntary voting EXCEPT that it:',
        options: [
          'rewards campaigns for stirring up people who already agree with them.',
          'brings the certain to the polls more reliably than it brings the torn.',
          'yields governments less competent than those elected under compulsion.',
          'lets a decline in turnout serve as a warning to those who hold office.',
        ],
        correctAnswer: 2,
        explanation:
          'The passage never compares the competence of governments elected under the two systems; its claims concern who votes, how campaigns behave, and what turnout reveals. The stirring-up claim is made in the fourth paragraph, where campaigns are “built to rouse the faithful.” The certain-and-torn claim is the third paragraph’s point that voluntary voting “selects for intensity.” The warning claim is the fifth paragraph’s statement that falling turnout is “how a political class learns that it is losing the country.”',
        skill: 'detail',
      },
      {
        question: 'The author’s reference to the census and to jury service suggests that opponents of compulsory voting who appeal to liberty:',
        options: [
          'would reject those duties as well if they thought the matter through.',
          'have yet to show what sets attendance at the polls apart from duties they accept.',
          'overestimate how many citizens would hand in a blank or spoiled ballot.',
          'wrongly suppose that those duties take up less of a citizen’s time than voting does.',
        ],
        correctAnswer: 1,
        explanation:
          'The author says that those who accept the census and jury service “owe us an explanation” of why attendance at the polls is “the intolerable one” — that is, the liberty objection is incomplete until it distinguishes this burden from accepted ones. The would-reject option predicts what opponents would conclude, whereas the author only demands that they justify a distinction. The blank-ballot option concerns a number the passage never estimates. The less-time option attributes to opponents a specific belief about duration that the passage does not ascribe to them; the author’s point is that the burdens are of “the same order.”',
        skill: 'inference',
      },
      {
        question: 'The claim that requiring attendance would turn campaigns toward persuasion rests on the assumption that:',
        options: [
          'voters certain of their choice are better informed than voters who are torn.',
          'candidates now spend more on campaigning than they would under compulsion.',
          'citizens compelled to attend would mostly share the views of present voters.',
          'citizens who now stay home would be moved by the reasons offered to them.',
        ],
        correctAnswer: 3,
        explanation:
          'The author reasons that the newly present voters “must therefore be given reasons,” which makes persuasion worthwhile only if those voters respond to reasons instead of marking “their ballots at random,” a possibility the third paragraph raises and never rules out. The better-informed option is the critics’ assumption, which the author rejects. The spend-more option concerns the total cost of campaigns, while the argument concerns where effort is directed. The share-the-views option is not needed, since the argument turns on whether the new voters can be won, not on what they already think.',
        skill: 'assumption',
      },
      {
        question: 'Suppose that in a country where voting is compulsory, campaigns were found to spend most of their money on alarming messages aimed at their own committed supporters. This finding would most directly challenge the author’s:',
        options: [
          'account of how compulsion changes which appeals pay for candidates.',
          'reply to the objection that compulsion is an offense to liberty.',
          'claim that staying home can express a considered verdict.',
          'proposal that ballots carry a line for rejecting every candidate.',
        ],
        correctAnswer: 0,
        explanation:
          'The fourth paragraph predicts that once attendance is required “nothing is gained by inflaming” the faithful, so campaigns will turn to the undecided; campaigns that still direct their spending at alarming their own supporters contradict that prediction. The reply on liberty concerns the size of the burden on citizens and is untouched by how campaigns spend. The considered-verdict claim concerns the meaning of abstention under voluntary voting. The proposal about the ballot concerns preserving a signal of rejection, which the finding neither supports nor undermines.',
        skill: 'new-information',
      },
      {
        question: 'Which of the following would the author most likely regard as a sign that a political class is “losing the country”?\n\nI. A steady fall in turnout over several elections in which voting is voluntary\nII. A rising share of ballots marked on a line provided for rejecting every candidate\nIII. A narrow margin between the two leading candidates in an election with compulsory voting',
        options: [
          'I only',
          'II only',
          'I and II only',
          'I, II, and III',
        ],
        correctAnswer: 2,
        explanation:
          'Item I is the author’s own example: abstention can be “a verdict,” and falling turnout is how a political class learns it is losing the country. Item II is the signal the proposed line is meant to preserve, a published figure showing “how many of the governed it had failed to persuade.” Item III shows only that the electorate is closely divided between two candidates, each of whom has been endorsed by many voters; the passage never treats a close contest as a rejection of what is on offer. “I only” and “II only” each omit one of the two signals, and the option including III adds a sign the passage gives no reason to accept.',
        skill: 'application',
      },
    ],
  },
  {
    id: 'fl7-cars-b-09',
    section: 'cars',
    discipline: 'linguistics',
    title: 'One Structure, Two Sides',
    passageText:
      'Every trade has words that outsiders do not understand, and two opinions about such words are held with equal firmness. The practitioner says that jargon is precision: the surgeon’s term names exactly one structure, the lawyer’s exactly one kind of claim, and ordinary language, which would need a sentence to do the same, would do it worse. The outsider says that jargon is a fence. It keeps the client dependent, makes the simple sound difficult, and lets the initiated recognise one another. Each party supposes that it is contradicting the other. I doubt that they are even disagreeing.\n\nA technical term is precise only for those who share the training that fixed its meaning. To the sailor, “abaft the beam” picks out a region of the sea as exactly as a compass could; to the passenger it picks out nothing. Precision is not a property that a word carries about with it, like its spelling. It is a relation between a word and a community which has agreed, through long and common practice, on what will count as a correct use. But a community that has agreed on such things has by that very fact a membership, and those outside it are outside the word. The fence and the precision are one structure seen from two sides. One cannot be had without the other, and the reformer who demands that professionals “simply speak plainly” is asking for a sharpness that no word has ever supplied by itself.\n\nIt does not follow that all jargon is innocent, and here the practitioner’s defence proves less than he hopes. There is a test, and it is a simple one: translate the term for a layman and see what the translation costs. Some terms can be unpacked only at length. The single word becomes a paragraph, with qualifications, and the paragraph must be repeated every time the idea recurs. That cost is the measure of the work the word was doing; a profession deprived of it would be slower and would make more mistakes. Other terms translate at no cost whatever. The consultant who says “utilise” for “use,” the official for whom rain is “a precipitation event,” has gained nothing in exactness. What such a word does is announce the speaker’s standing. It is a uniform, and like a uniform it is put on in order to be seen.\n\nThe two kinds are harder to tell apart from outside than from within, which is why the outsider’s suspicion, though indiscriminate, is not foolish. He cannot run the test himself, because he lacks the meaning to be translated; he can only observe that he has been excluded, and exclusion feels the same whether its cause is rigour or vanity. The professional, who could run the test, seldom has reason to. Nothing in the daily life of a guild rewards a member for asking whether one of its words is idle.\n\nSo the duty falls, awkwardly, on those least inclined to discharge it. I do not ask the specialist to give up terms that carry weight, nor to pretend, when he explains himself to a client, that the explanation is as good as the term. I ask that he know which of his words he could surrender without loss — and that he notice how often those are the very words he reaches for when he is least sure of what he means.',
    questions: [
      {
        question: 'In saying that precision is “a relation” and not “a property,” the author most nearly means that a term’s exactness:',
        options: [
          'increases as more people outside a profession come to learn the term.',
          'is fixed by its definition, whoever happens to be using the term.',
          'varies with how carefully an individual speaker chooses his words.',
          'holds only among people who were trained to use the term alike.',
        ],
        correctAnswer: 3,
        explanation:
          'The author says a term “is precise only for those who share the training that fixed its meaning”: the sailor’s phrase is exact for the sailor and “picks out nothing” for the passenger, so exactness belongs to the word together with a trained community. The more-people option makes precision a matter of how widely a term is known, which the passage never suggests. The fixed-by-definition option is the “property” view the sentence denies. The individual-care option locates precision in one speaker’s diligence, whereas the author locates it in what a community has agreed on “through long and common practice.”',
        skill: 'detail',
      },
      {
        question: 'The author mentions the official for whom rain is “a precipitation event” primarily to:',
        options: [
          'show that governments are more given to jargon than the professions are.',
          'give an instance of a term that marks rank while adding no exactness.',
          'illustrate a term whose translation into plain speech is costly.',
          'suggest that outsiders are right to treat every technical term as vanity.',
        ],
        correctAnswer: 1,
        explanation:
          'The official and the consultant are the examples of terms that “translate at no cost whatever,” have “gained nothing in exactness,” and serve to “announce the speaker’s standing.” The governments option turns an illustration into a comparison between institutions that the author never draws. The costly-translation option describes the other kind of term, the one that becomes “a paragraph, with qualifications.” The every-term option contradicts the passage, which calls the outsider’s suspicion “indiscriminate” and defends terms that carry weight.',
        skill: 'function',
      },
      {
        question: 'It can be inferred that the author regards the reformer who demands that professionals “simply speak plainly” as:',
        options: [
          'mistaken about where the exactness of a technical term comes from.',
          'correct that most technical terms could be given up without any loss.',
          'moved chiefly by resentment of the standing that professionals enjoy.',
          'unaware that professionals already explain their terms to clients.',
        ],
        correctAnswer: 0,
        explanation:
          'The reformer is said to be “asking for a sharpness that no word has ever supplied by itself”: the demand supposes that plain words could be as exact without the shared training on which, for the author, exactness depends. The most-terms option overstates the author’s view, which is that only some terms “translate at no cost.” The resentment option supplies a motive; the passage discusses the reformer’s reasoning, not his feelings. The unaware option invents a factual oversight; the author’s complaint is conceptual and has nothing to do with how often professionals explain themselves.',
        skill: 'inference',
      },
      {
        question: 'Which of the following terms would most clearly pass the author’s test for jargon that “carries weight”?',
        options: [
          'A term that a firm’s managers take up after hearing it used at a rival firm',
          'A term that clients find impressive but that staff seldom use with one another',
          'A term that can be swapped for a common word in any report without confusion',
          'A term that engineers must replace with several careful sentences when briefing a jury',
        ],
        correctAnswer: 3,
        explanation:
          'The test is to “translate the term for a layman and see what the translation costs”; a term that can be rendered only by several careful sentences is one whose cost shows “the work the word was doing.” The rival-firm term is adopted by imitation, which says nothing about its exactness and suggests display. The impressive-to-clients term is the “uniform” that is “put on in order to be seen.” The swapped-without-confusion term is, by the author’s own test, one that translates “at no cost whatever” and so fails it.',
        skill: 'application',
      },
      {
        question: 'Suppose a hospital required its physicians to write all letters to patients without technical terms, and the letters did not become longer and caused no new misunderstandings among the patients and physicians who later read them. On the author’s reasoning, this outcome would suggest that the terms removed:',
        options: [
          'had been exact only for the patients who received the letters.',
          'had done little beyond displaying professional standing.',
          'were more exact than the plain words that replaced them.',
          'could not have been understood by physicians at other hospitals.',
        ],
        correctAnswer: 1,
        explanation:
          'By the author’s test, a term that does real work can be replaced only at a cost in length or in errors; letters that grew no longer and misled no one show that the removed terms translated “at no cost whatever,” which is the mark of a term that merely announces “the speaker’s standing.” The exact-for-patients option reverses the passage, in which a term is precise for the trained and not for the layman. The more-exact option is what the outcome counts against, since lost exactness would have shown up as added length or mistakes. The other-hospitals option raises a question about a wider community that the outcome does not bear on.',
        skill: 'new-information',
      },
    ],
  },
]
