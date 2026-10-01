import type { MCATPassage } from '../types'

/**
 * MCAT Full-Length Form 8 — CARS, file B (passages 6–9; 6, 6, 6, 5 questions = 23).
 *
 * Four original argument-driven passages (500–600 words each) written to the
 * Form 7/8 blueprint: history / historiography (why discarded scientific
 * theories deserve a history), art / aesthetics (street art: vandalism or
 * gallery), political science (choosing officials by lottery), and popular
 * culture (handwriting in an age of keyboards). Every item is answerable from
 * the passage alone; no outside knowledge is required.
 */
export const FL8_CARS_B_PASSAGES: MCATPassage[] = [
  {
    id: 'fl8-cars-b-06',
    section: 'cars',
    discipline: 'history / historiography',
    title: 'A Victory Without an Opponent',
    passageText:
      'The history of science in the first chapter of a textbook is a list of winners. The theories that lost — heat as a weightless fluid, phlogiston as a principle of burning that escaped from wood into the air — are named, if at all, as mistakes that held things up. Working scientists generally think the neglect proper. Time is short, they say; what a student needs is what is true; and a history of error is a kind of antiquarianism, like collecting the keys to houses that have been pulled down.\n\nHistorians have usually answered with an appeal to fairness. The partisans of the heat-fluid were not fools; they reasoned carefully from what they could observe, and deserve to be judged by what could be known in their day. All of this is true, and as a reason for studying them it is weak. It makes the history of discarded theories a courtesy paid to the dead, and the scientist may fairly reply that he owes no such courtesy. He was not asking whether his predecessors were clever. He was asking why he should spend an afternoon on them.\n\nThere is a better reason, and it concerns the winners. A theory is never accepted because it is true, for no one can inspect its truth directly. It is accepted because it did better than a rival at something both sides agreed was worth doing. Remove the rival from the story and acceptance begins to look like recognition — as though the truth had been lying in plain view and earlier generations had merely neglected to look. A history with only winners in it does not simply omit some chapters. It teaches a false account of how the remaining chapters came to be written.\n\nNor did the rival merely stand in the way. The engineer who first showed that the work an engine can yield is limited by the temperatures between which it runs reasoned from the fluid theory: heat, he supposed, falls from hot to cold as water falls on a mill wheel. The conclusion outlived the premise. A chemist who isolated the gas that would be the ruin of phlogiston named it, in good faith, by the amount of phlogiston it lacked. In such cases the victor did not sweep the field clean. It inherited the loser’s estate — instruments, measurements, and a list of problems the loser had taught everyone to think important.\n\nThis may seem to prove too much. If the discarded theory was reasonable and fruitful, was it not as good as its successor, and the choice between them a matter of fashion? Some have said so, and the history they appeal to is against them. Phlogiston lost for a reason: metals grow heavier when burnt, and a theory on which burning is the departure of something could accommodate the fact only by giving that something a weight less than nothing. To take a loser seriously is to see exactly where it failed. The sceptic who calls the contest arbitrary and the textbook that leaves it out have this in common, that neither has watched it.\n\nThe last reason should weigh most with the scientist himself. Every discarded theory was once the best available, held by able people on good evidence. Whoever knows only the winners has never seen what it is like for a well-supported theory to be wrong, and he, if anyone, needs to know. The record of abandoned theories is the only evidence we possess about how far confidence of the kind he now feels has been a guide to truth.',
    questions: [
      {
        question: 'Which of the following best states the main argument of the passage?',
        options: [
          'Discarded theories merit study because those who held them reasoned ably from what could then be observed.',
          'Discarded theories merit study because they were as well founded as the theories that later took their place.',
          'Discarded theories merit study because accepted science cannot be explained or soberly trusted without them.',
          'Discarded theories merit little study because a student’s limited time is best spent on what is now known.',
        ],
        correctAnswer: 2,
        explanation:
          'The author calls fairness to the dead a “weak” reason and offers stronger ones: without the rival, “acceptance begins to look like recognition,” and the record of abandoned theories is the only evidence of how far present confidence “has been a guide to truth.” The reasoned-ably option is the historians’ appeal to fairness, which the author grants is true but insufficient. The as-well-founded option is the view of those who call the choice “a matter of fashion,” which the fifth paragraph rejects. The little-study option is the working scientists’ position, which the whole passage is written to answer.',
        skill: 'main-idea',
      },
      {
        question: 'The author mentions the chemist who named a gas “by the amount of phlogiston it lacked” in order to show that:',
        options: [
          'a finding that undoes a theory may first be made and described within it.',
          'the naming of newly isolated substances was a matter of convention in that period.',
          'chemists of the period were slow to give up a theory in which they had been trained.',
          'the phlogiston theory gave a correct account of the gas that the chemist isolated.',
        ],
        correctAnswer: 0,
        explanation:
          'The example sits in a paragraph that opens “Nor did the rival merely stand in the way” and ends with the victor inheriting “the loser’s estate”: the gas that ruined phlogiston was isolated and named by someone working inside that theory, so the loser contributed to its own successor. The convention option treats the name as arbitrary, whereas the point is that the name came from the theory. The slow-to-give-up option makes the chemist an obstacle, which is the picture the paragraph is correcting. The correct-account option contradicts the passage, which says the gas “would be the ruin of phlogiston.”',
        skill: 'function',
      },
      {
        question: 'The scientist’s reply in the second paragraph implies that the appeal to fairness fails because it:',
        options: [
          'overstates how carefully earlier investigators reasoned from what they saw.',
          'judges earlier investigators by what has come to be known since their time.',
          'assumes that scientists know less of history than they in fact do.',
          'defends the merit of past thinkers without showing the use of studying them.',
        ],
        correctAnswer: 3,
        explanation:
          'The scientist “was not asking whether his predecessors were clever” but “why he should spend an afternoon on them”; the appeal to fairness answers the first question and leaves the second untouched, making the study “a courtesy” he need not pay. The overstates option is ruled out because the author says of the historians’ description, “All of this is true.” The judges-by-the-present option describes the practice the appeal to fairness opposes, not a defect in the appeal. The know-less-history option introduces a claim about scientists’ knowledge that neither party makes.',
        skill: 'inference',
      },
      {
        question: 'The argument of the final paragraph depends on the assumption that:',
        options: [
          'most of the theories that scientists now accept will in time be discarded.',
          'theories now accepted are supported in much the way discarded ones once were.',
          'scientists of earlier periods were abler than those who are working at present.',
          'theories that were discarded were given up before the evidence required it.',
        ],
        correctAnswer: 1,
        explanation:
          'The final paragraph treats the fate of past theories as evidence about “confidence of the kind he now feels.” That inference holds only if today’s support is comparable in kind to the support discarded theories once had; if present evidence were of a wholly different order, the old record would tell the scientist nothing about his own case. The most-will-be-discarded option is stronger than the argument needs, since the author asks only “how far” such confidence has been a guide. The abler option is not required; the passage says only that earlier holders were “able.” The before-the-evidence option conflicts with the claim that phlogiston “lost for a reason.”',
        skill: 'assumption',
      },
      {
        question: 'Suppose a historian showed that a theory now accepted was adopted at a time when no competing account of the same phenomena had ever been proposed. This finding would most directly challenge the author’s claim about:',
        options: [
          'why theories come to be accepted.',
          'why phlogiston was finally given up.',
          'what a victor inherits from a loser.',
          'what the appeal to fairness leaves out.',
        ],
        correctAnswer: 0,
        explanation:
          'The third paragraph asserts without qualification that a theory “is accepted because it did better than a rival at something both sides agreed was worth doing.” A theory adopted with no rival in existence is a counterexample to that general claim. The phlogiston option concerns one episode, which a different episode cannot overturn. The inherits option is limited by the author to “such cases” as the two described, so a case with no loser does not contradict it. The fairness option concerns what historians’ usual defence fails to supply, on which the finding has no bearing.',
        skill: 'new-information',
      },
      {
        question: 'Which of the following treatments of an abandoned theory would the author most likely consider the most valuable?',
        options: [
          'One that praises the ingenuity of its adherents, given the crude instruments available to them',
          'One that shows it fitted the evidence of its day no worse than the theory that replaced it did',
          'One that sets out what it explained, what its successor kept from it, and the fact that defeated it',
          'One that catalogues its mistaken claims as a caution against reasoning from false premises',
        ],
        correctAnswer: 2,
        explanation:
          'The author wants the contest shown: what the rival was good at, what the victor “inherited,” and “exactly where it failed.” A treatment covering all three is the history the passage calls for. The praises-ingenuity option is the “courtesy paid to the dead” that the author finds a weak reason. The no-worse option is the fashion view, which the author says the history itself refutes. The catalogue-of-mistakes option is the textbook’s habit of naming lost theories only “as mistakes that held things up.”',
        skill: 'application',
      },
    ],
  },
  {
    id: 'fl8-cars-b-07',
    section: 'cars',
    discipline: 'art / aesthetics',
    title: 'Two Questions About a Wall',
    passageText:
      'When a painting appears overnight on the side of a warehouse, two parties arrive in the morning with their minds made up. The owner, or the city on his behalf, calls it vandalism: paint has been put on a wall by someone who had no right to put it there, and the wall must be cleaned at somebody’s expense. The admirer calls it art, and concludes that it ought therefore to be left alone, or better, protected. What is curious is how much the two agree. Each supposes that the picture must be one thing or the other, so that to prove it art is to acquit the painter, and to prove it damage is to show that it is not worth looking at.\n\nBut the two words answer different questions. “Vandalism” says what was done to a wall and to the person who owns it. “Art” says whether the result repays attention. Nothing prevents both from being true at once. A painting of real distinction on a wall that is not the painter’s is a painting of real distinction and a trespass, and the owner who repaints his wall grey has destroyed something good while doing nothing he was not entitled to do. The admirer dislikes this conclusion because it seems to leave the picture defenceless. I think it is the only conclusion that takes the picture seriously.\n\nFor in the work that has earned the form its reputation, the trespass is not an accident of how the picture got there. It is part of what the picture says. A figure stencilled on the wall of a bank is a remark made to the bank, in the bank’s own street, without the bank’s leave; the same figure on canvas is a picture of a remark. The unlicensed wall gives the painter things no studio can: a place that already means something, passers-by who did not come to look at art, and the knowledge, shared by everyone who sees the piece, that it may be gone by Friday. A picture made under those conditions is addressed differently from one that hangs by invitation.\n\nThis is why the two rewards now offered to the street painter are both stranger than they look. The first is the gallery. A celebrated piece is cut from its wall, framed, and sold, or the city bolts a sheet of clear plastic over it, and the admirers feel that the work has at last been honoured. What has been preserved is the image. The work — an uninvited remark in a particular place — ended when the saw went in. The second reward is the “legal wall,” a surface set aside where anyone may paint. Good pictures are made there. But they are murals, a different and older thing, and it is no criticism of murals to say that what is painted with permission cannot say what the stencil on the bank said.\n\nThe conclusion is an awkward one for the admirer, and I think it should be accepted. A city cannot protect this art without turning it into something else. The consistent course is to go on calling the trespass a trespass, to let the owner repaint if he chooses, and to admire the picture for as long as it lasts — which is, after all, the bargain the painter made when he chose that wall and not a canvas. Those who would spare him the risk would take from the work the very thing that distinguished it.',
    questions: [
      {
        question: 'The central claim of the passage is that unlicensed street painting:',
        options: [
          'should be made lawful, since its best examples are works of real distinction.',
          'can be at once art and a wrong, and is altered in kind by being sanctioned.',
          'ceases to be art as soon as the owner of the wall objects to its presence.',
          'is better kept in galleries than left exposed on the walls of a city.',
        ],
        correctAnswer: 1,
        explanation:
          'The second paragraph holds that “nothing prevents both from being true at once,” and the last three argue that the gallery and the legal wall turn the work “into something else.” The made-lawful option is the admirer’s inference from art to acquittal, which the author rejects in advising that we “go on calling the trespass a trespass.” The ceases-to-be-art option reverses the author’s view that the owner’s rights and the picture’s worth are separate questions. The galleries option contradicts the claim that cutting a piece from its wall preserves only “the image.”',
        skill: 'main-idea',
      },
      {
        question: 'According to the passage, an unlicensed wall offers the painter each of the following EXCEPT:',
        options: [
          'a setting that carries a meaning before anything is painted on it.',
          'viewers who come upon the piece without having sought out art.',
          'a general awareness that the piece may shortly disappear.',
          'a surface larger than any that a studio could provide.',
        ],
        correctAnswer: 3,
        explanation:
          'The third paragraph lists what the unlicensed wall supplies: “a place that already means something,” “passers-by who did not come to look at art,” and the shared knowledge that the piece “may be gone by Friday.” Those are the setting, the viewers, and the awareness of impermanence named in the first three options. Nothing in the passage mentions the size of the surface; the contrast with the studio concerns address and circumstance, not scale.',
        skill: 'detail',
      },
      {
        question: 'The author’s statement that the same figure on canvas is “a picture of a remark” most strongly implies that:',
        options: [
          'part of what a street piece means lies in where and how it was put up.',
          'a canvas demands less skill of a painter than a wall of the same size does.',
          'pictures hung in galleries are unable to address any public question.',
          'the bank in the example would have declined to purchase the canvas.',
        ],
        correctAnswer: 0,
        explanation:
          'The stencil on the bank is a remark made “to the bank, in the bank’s own street, without the bank’s leave”; the canvas shows the same figure but is no longer that act, so the difference between them must lie in placement and permission, not in the image. The less-skill option compares difficulty, which the passage never does. The unable-to-address option overgeneralizes: the author says only that a gallery picture is “addressed differently.” The declined-to-purchase option invents a fact about the bank that plays no part in the contrast.',
        skill: 'inference',
      },
      {
        question: 'Which of the following findings, if true, would most strengthen the author’s claim that the trespass is “part of what the picture says”?',
        options: [
          'Painters of unlicensed pieces are seldom identified, and still more rarely fined.',
          'Owners repaint walls bearing crude lettering sooner than walls bearing skilled pictures.',
          'Viewers find an image less pointed on learning that the wall’s owner had ordered it.',
          'Images cut from walls sell for more than canvases by the same painters do.',
        ],
        correctAnswer: 2,
        explanation:
          'If the same image loses force once viewers learn it was commissioned, then its being uninvited was contributing to what it conveyed, which is the author’s claim. The seldom-identified finding bears on the painter’s legal risk and, if anything, lessens the hazard the author thinks matters. The repaint-sooner finding concerns owners’ tolerance for quality, not what a piece says. The sell-for-more finding shows what buyers will pay for a removed piece and says nothing about whether the piece still says what it said on its wall.',
        skill: 'strengthen-weaken',
      },
      {
        question: 'Suppose a city council proposes to list a famous unlicensed piece as a protected landmark and to fine anyone, including the owner of the building, who removes it. The author would most likely regard this proposal as:',
        options: [
          'overdue, because a work of distinction deserves the care given to any other work.',
          'pointless, because a piece on an outdoor wall will fade whatever is done.',
          'unfair to the painter, who alone should decide what becomes of the piece.',
          'self-defeating, because it ends the exposure that made the piece what it was.',
        ],
        correctAnswer: 3,
        explanation:
          'The author holds that “a city cannot protect this art without turning it into something else,” and that sparing the painter the risk takes from the work “the very thing that distinguished it”; a landmark listing does exactly that, and also denies the owner a repainting he is “entitled” to. The overdue option is the admirer’s reasoning that the passage declines to follow. The pointless option rests on weathering, which the author never raises; the concern is what protection does to the work, not whether it succeeds. The unfair-to-the-painter option gives the painter an authority over the wall that the passage, which calls the act a trespass, does not grant.',
        skill: 'new-information',
      },
      {
        question: 'Which of the following is most analogous to what happens, on the author’s account, when a street piece is cut from its wall and sold?',
        options: [
          'A sketch is enlarged by its maker into a finished painting for exhibition.',
          'A heckler’s retort to a speaker is later printed in a book of witty sayings.',
          'A play is revived with a new cast in the theatre where it first opened.',
          'A worn manuscript is copied by hand so that the original can be stored.',
        ],
        correctAnswer: 1,
        explanation:
          'For the author the removed piece keeps “the image” while the work, “an uninvited remark in a particular place,” has ended. A heckler’s retort printed in a book keeps the words but is no longer an unasked-for reply to that speaker at that moment. The sketch is developed by its own maker into a further work, with nothing detached from an occasion. The revived play returns to its original place and remains the same kind of event. The copied manuscript is duplicated to protect the original, and its text never depended on where or to whom it was addressed.',
        skill: 'application',
      },
    ],
  },
  {
    id: 'fl8-cars-b-08',
    section: 'cars',
    discipline: 'political science',
    title: 'Owing Nothing to Anyone',
    passageText:
      'The proposal to fill public offices by lottery — to draw legislators, as jurors are drawn, from the roll of citizens — is usually defended as a way of making government resemble the governed. An elected chamber is richer, older, and more given to the practice of law than the country it speaks for; a chamber drawn by lot would be, within the limits of chance, the country in miniature. The proposal is usually attacked on the ground of competence. No one, the critics observe, would choose a surgeon by drawing straws. I think the defence claims too much and the attack assumes too much, and that both have overlooked what a lottery actually does.\n\nThe defence first. A chamber drawn by lot resembles the country on the day it is drawn, and on no later day. Its members are at once briefed, courted, and deferred to, which is the experience of almost none of their fellow citizens, and within a month they are no more typical than any other group of people to whom officials return telephone calls. And resemblance, even where it holds, is not a tie. The citizen whom such a member happens to resemble cannot instruct her and cannot dismiss her.\n\nThe attack fares no better. It supposes that elections choose the competent, and what elections reliably choose is those who are good at being elected — a real talent, but not the talent of governing — from among those who wanted office badly enough to stand. The surgeon is chosen by examination, not by ballot, and nobody proposes to examine candidates for the legislature.\n\nWhat distinguishes the lottery is that it selects for nothing. It is blind to ambition, to wealth, to eloquence, to party. The citizen it picks has asked for nothing and promised nothing; she owes her seat to no donor, and since the draw will not fall on her twice, she has no contest ahead of her to fear. This is the whole of the lottery’s virtue, and it is also the whole of its vice. An official with no election to win cannot be bought with help in winning one. Neither can she be turned out for governing badly, and she knows it. The elected official’s dependence on our good opinion is what corrupts him, and it is equally what keeps him in order.\n\nThe useful question, therefore, is not whether the lot is better than the vote but which tasks ought to be done by people who answer to no one. The answer, I suggest, is those in which the elected are judges in their own cause: drawing the boundaries of their districts, fixing their own salaries, writing the rules by which their campaigns are paid for. Here the voter’s power to dismiss is of little use, since the matter in hand is the machinery of dismissal itself. For the conduct of a ministry over years, where we want someone to blame, I would keep the ballot.\n\nOne caution remains. People chosen at random know, on average, little about the matter put to them, and will lean on whoever informs them. A lottery that leaves the briefing to a permanent staff has not abolished influence; it has moved it from the donor to the clerk. The allotted body must therefore be able to summon its own witnesses, and it should be dissolved when its single task is done.',
    questions: [
      {
        question: 'According to the passage, the claim that a chamber drawn by lot would resemble the country is weak partly because:',
        options: [
          'holding a seat soon makes the members unlike other citizens.',
          'chance would often yield a chamber richer than the country at large.',
          'elected chambers already resemble the country in most respects.',
          'citizens whose names were drawn would refuse to serve in large numbers.',
        ],
        correctAnswer: 0,
        explanation:
          'The second paragraph says the chamber resembles the country “on the day it is drawn, and on no later day,” because its members are “briefed, courted, and deferred to” as almost no other citizens are. The richer-chamber option misuses the phrase “within the limits of chance,” which the author does not develop into an objection. The already-resemble option contradicts the opening description of an elected chamber as “richer, older, and more given to the practice of law.” The refuse-to-serve option raises a difficulty the passage never mentions.',
        skill: 'detail',
      },
      {
        question: 'The author’s attitude toward choosing officials by lottery is best described as:',
        options: [
          'eager support for extending it to every office now filled by election.',
          'amused dismissal of it as a scheme no one could take seriously.',
          'qualified approval of its use for a limited class of public tasks.',
          'studied neutrality between it and the established practice of election.',
        ],
        correctAnswer: 2,
        explanation:
          'The author recommends the lot for matters in which the elected are “judges in their own cause,” keeps the ballot for “the conduct of a ministry over years,” and adds a caution about briefing: approval, but bounded and qualified. The eager-support option ignores the retained ballot and the statement that the lottery’s virtue is also “the whole of its vice.” The amused-dismissal option cannot be squared with a concrete proposal for its use. The neutrality option fails because the author takes a definite position on which tasks belong to which method.',
        skill: 'tone',
      },
      {
        question: 'The author observes that a surgeon “is chosen by examination, not by ballot” in order to:',
        options: [
          'propose that candidates for the legislature be examined before they may stand.',
          'show that the critics’ comparison gives elections no advantage over the lot.',
          'concede that offices demanding skill should never be filled by drawing lots.',
          'suggest that governing calls for less skill than the practice of surgery does.',
        ],
        correctAnswer: 1,
        explanation:
          'The critics argue from the surgeon to the superiority of election, but the method that secures a competent surgeon is examination, which neither the lot nor the ballot provides; the comparison therefore does not support voting over drawing. The propose-examination option contradicts the remark that “nobody proposes to examine candidates for the legislature,” which the author reports without endorsing a change. The concede option reverses the purpose of the sentence, which belongs to a paragraph showing that the attack “fares no better.” The less-skill option draws a ranking of the two activities that the passage does not make.',
        skill: 'function',
      },
      {
        question: 'An elected legislator announces that she will not seek another term. On the author’s reasoning, she would for the rest of her term most resemble an official chosen by lot in being:',
        options: [
          'more typical of the citizens on whose behalf she had been chosen.',
          'more reliant on staff for knowledge of the matters put before her.',
          'less fit to decide questions in which legislators have a stake.',
          'less in need of backers and less exposed to the voters’ displeasure.',
        ],
        correctAnswer: 3,
        explanation:
          'What marks the allotted official is that she has “no contest ahead of her to fear”: she “cannot be bought with help in winning one” and cannot “be turned out for governing badly.” A legislator with no further election shares both features. The more-typical option concerns resemblance, which depends on how a member was selected and what office has since done to her, not on whether she will run again. The more-reliant option concerns the ignorance of people chosen at random, which retirement does not produce. The less-fit option gets the reasoning backwards, since freedom from re-election is what the author thinks suits an official to such questions.',
        skill: 'application',
      },
      {
        question: 'Which of the following tasks would the author most likely assign to a body chosen by lot?\n\nI. Deciding whether the term of office of sitting legislators should be lengthened\nII. Directing a national department of health over a period of five years\nIII. Revising the limits on what donors may give to legislators’ campaigns',
        options: [
          'I only',
          'I and III only',
          'II and III only',
          'I, II, and III',
        ],
        correctAnswer: 1,
        explanation:
          'The author reserves the lot for tasks “in which the elected are judges in their own cause.” Legislators deciding the length of their own terms (I) and the rules for financing their own campaigns (III) are in that position. Directing a department for years (II) is “the conduct of a ministry,” where “we want someone to blame” and the author would “keep the ballot”; it also conflicts with the advice that an allotted body be dissolved when “its single task is done.” “I only” omits the campaign-finance case, and the two options containing II include the one task the author assigns to elected officials.',
        skill: 'application',
      },
      {
        question: 'Suppose a panel chosen by lot to review a pension law heard only from experts selected by the legislature’s permanent staff and then adopted the staff’s recommendations unchanged. The author would most likely regard this outcome as:',
        options: [
          'evidence that influence had passed to those who briefed the panel.',
          'evidence that citizens chosen by lot are unable to weigh expert advice.',
          'proof that the review ought to have been left to elected legislators.',
          'proof that panels chosen by lot can be bought as readily as elected ones.',
        ],
        correctAnswer: 0,
        explanation:
          'The final paragraph warns that people chosen at random “will lean on whoever informs them,” so that a lottery leaving the briefing to staff “has moved” influence “from the donor to the clerk”; a panel that hears only the staff’s experts and echoes the staff is that case. The unable-to-weigh option overreaches: the panel heard one side only, and the author’s remedy is to let it “summon its own witnesses,” which presumes it can judge what it hears. The left-to-legislators option abandons the lot where the author would repair it. The can-be-bought option confuses dependence on informants with purchase by donors, from which the author says the allotted official is free.',
        skill: 'new-information',
      },
    ],
  },
  {
    id: 'fl8-cars-b-09',
    section: 'cars',
    discipline: 'popular culture',
    title: 'What the Copybook Called Faults',
    passageText:
      'Handwriting is said to be dying, and the announcement is received in two ways. The mourners hold that something more than a skill is going: a discipline of the hand, a patience, a signature that was unmistakably one’s own. The scoffers reply that a tool has been replaced by a better one, as the quill was replaced by the steel nib, and that nobody weeps for the abacus. So far as handwriting is a tool for getting words onto a page, the scoffers are right. The keyboard is faster, its product can be read by anyone, and a child who types has lost nothing that a clerk of the last century would have recognised as an advantage.\n\nBut a practice that has stopped being necessary does not always disappear. Sometimes it changes its work. When every letter was written by hand, the hand said nothing in particular; it was simply how letters were made, and a note of sympathy looked much like a note to the grocer. Now that the quicker way is open to everyone, to write by hand is to be seen to have declined it. The condolence in ink says what no condolence could say a century ago — that the writer sat down and took the slower way — and it can say so only because the faster way exists. The keyboard has not killed handwriting. It has given handwriting, for the first time, a meaning.\n\nThe proof that this meaning is real is that it is counterfeited. Charities and advertisers now send envelopes addressed in a printed imitation of script, and machines can be hired that hold an actual pen and turn out “personal” notes by the thousand. No one troubled to forge handwriting as such when all writing was handwriting; one forged a particular man’s hand, to get at his money. People counterfeit only what has value. Yet the counterfeit threatens what it flatters, for a sign that anyone can produce without cost soon ceases to be a sign of anything. If a machine can make the slow way’s marks at the fast way’s speed, the marks no longer show that anyone was slow.\n\nWhat will survive, then, is whatever the machine cannot cheaply supply, and here the matter takes a turn that the mourners will not enjoy. The virtues they remember being taught — an even slant, uniform letters, a level line — are precisely those at which the machine excels. A perfectly regular hand is now the least convincing kind. What persuades a reader that a person held the pen is the word crossed out, the line that crowds as it nears the edge of the card, the letter formed differently at the end of a long evening than at its start. The value of handwriting has migrated to everything the copybook treated as a fault.\n\nIt follows that the schoolroom drill for which the mourners are nostalgic would not restore what they miss. To train a child to write like an engraving is to train her to do, laboriously, what a printer does without effort, and to remove from her hand the irregularities that will soon be its only credentials. If handwriting is to be taught at all — and I think a hand fluent enough to be used without embarrassment is worth a child’s time — it should be taught as speech is taught, for ease and not for uniformity.',
    questions: [
      {
        question: 'Which of the following best captures the author’s central claim?',
        options: [
          'Handwriting should be given up, since the keyboard does its work faster and more legibly.',
          'Handwriting should be drilled in schools, since it trains a patience that typing neglects.',
          'Handwriting has lost its meaning now that machines can imitate any hand at little cost.',
          'Handwriting has become a sign of care, and its worth now lies in its irregularities.',
        ],
        correctAnswer: 3,
        explanation:
          'The second paragraph argues that the keyboard “has given handwriting, for the first time, a meaning” — that the writer “took the slower way” — and the fourth that its value “has migrated to everything the copybook treated as a fault.” The given-up option is the scoffers’ position, which the author accepts only “so far as handwriting is a tool.” The drilled-in-schools option is the mourners’ remedy, which the last paragraph says “would not restore what they miss.” The lost-its-meaning option turns a threat the author describes into an accomplished fact, whereas the author goes on to say what “will survive.”',
        skill: 'main-idea',
      },
      {
        question: 'The author’s remark that when every letter was written by hand “the hand said nothing in particular” implies that what a practice conveys depends on:',
        options: [
          'how much skill the practice demands of the person who performs it.',
          'how long the practice has been established among those who use it.',
          'whether another way of doing the same thing was available and passed over.',
          'whether the practice is taught by formal drill or picked up by imitation.',
        ],
        correctAnswer: 2,
        explanation:
          'A handwritten note meant nothing special when there was no other way to write, and means something now “only because the faster way exists”: the message comes from the alternative declined. The skill option fails because writing by hand took as much skill a century ago, when on the author’s account it conveyed nothing. The how-long option fails for the same reason, since the practice is older now and only lately expressive. The drill-or-imitation option concerns how a hand is acquired, which belongs to the final paragraph’s point about teaching, not to what the choice of a pen conveys.',
        skill: 'inference',
      },
      {
        question: 'Which of the following is most analogous to the change that the author says has taken place in handwriting?',
        options: [
          'Candles, once the ordinary source of light, come to mark an occasion after electric lamps are common.',
          'Steel nibs, once a novelty, come to displace the quill because they keep a point for longer.',
          'Typewriters, once found in every office, are sold for scrap as computers take over their work.',
          'Calculators, once barred from classrooms, come to be required after examinations assume them.',
        ],
        correctAnswer: 0,
        explanation:
          'Handwriting, no longer needed as a tool, “changes its work” and becomes expressive because a quicker way exists. Candles lit at a dinner in an age of electric light have likewise passed from necessity to gesture. The steel-nib case is one tool displacing another, which is the scoffers’ picture. The typewriter case is a tool that simply disappears, the outcome the author says does “not always” follow. The calculator case is a newer tool becoming obligatory, with no older practice acquiring a meaning.',
        skill: 'application',
      },
      {
        question: 'Suppose that writing machines began, at no added cost, to cross out words and to crowd their lines at the edge of a card. On the author’s reasoning, the most likely consequence would be that:',
        options: [
          'schools would return to drilling children in a uniform copybook hand.',
          'such marks would cease to show that a note came from a person’s hand.',
          'handwritten notes would come to be prized for their regularity instead.',
          'advertisers would give up imitating handwriting on their envelopes.',
        ],
        correctAnswer: 1,
        explanation:
          'The author’s principle is that “a sign that anyone can produce without cost soon ceases to be a sign of anything” and that what survives is “whatever the machine cannot cheaply supply.” Once machines supply crossings-out and crowded lines cheaply, those marks lose their evidential force. The return-to-drill option does not follow, since regularity is what machines already do best. The prized-for-regularity option fails for the same reason: a regular hand is “the least convincing kind.” The give-up-imitating option runs against the scenario, in which the imitation has become more persuasive, not less.',
        skill: 'new-information',
      },
      {
        question: 'On which of the following points does the author agree with the scoffers?',
        options: [
          'The mourners’ regard for a personal signature is no more than sentiment.',
          'Handwriting will in time vanish as completely as the abacus has.',
          'Children should no longer be taught to write by hand at school.',
          'For the plain business of setting down words, typing serves better.',
        ],
        correctAnswer: 3,
        explanation:
          'The author grants that “so far as handwriting is a tool for getting words onto a page, the scoffers are right,” citing the keyboard’s speed and legibility. The mere-sentiment option goes beyond anything the author says about the signature. The vanish option is denied by the second paragraph: a practice no longer necessary “does not always disappear,” and the keyboard “has not killed handwriting.” The no-longer-taught option conflicts with the final paragraph, where the author thinks a fluent hand “worth a child’s time.”',
        skill: 'detail',
      },
    ],
  },
]
