import type { MCATPassage } from '../types'

/**
 * MCAT CARS — Political Philosophy pool.
 *
 * Six original, argument-driven passages (500-600 words each) in the analytic
 * political-theory register the AAMC favors: democratic theory, theories of
 * justice and distribution, constitutional interpretation, citizenship and
 * political membership, political rhetoric, and civil disobedience.
 *
 * Each passage advances a thesis in a single author’s voice and defends it
 * against a stated objection, turning at least once on a concession or a
 * reframing distinction. No outside knowledge is required: every keyed answer
 * is derivable from the passage alone. Arguments are conceptual rather than
 * partisan — no parties, officeholders, or live electoral disputes appear.
 *
 * AI-authored; needsReview is true pending SME review.
 */
export const CARS_POLITICS_PASSAGES: MCATPassage[] = [
  {
    id: 'cars-pol-01',
    section: 'cars',
    discipline: 'democratic theory',
    title: 'The Argument That Is Never Over',
    needsReview: true,
    passageText:
      'The most familiar defense of democracy is also its weakest. It holds that many heads are better than few — that the pooled judgment of a citizenry, however untutored any single member may be, converges on conclusions no small body of experts could reliably supply. There is a mathematics behind this hope, and under the right conditions the mathematics is sound. But the conditions are exacting. Each voter must be more often right than wrong; each must judge independently of the others; and the question put to them must have a determinate answer waiting to be found. Relax any one condition and the machinery slows. Relax all three, as ordinary political life does, and the wisdom of the crowd becomes difficult to distinguish from its noise.\n\nI do not propose to repair this argument. I propose to give it up. Majorities are frequently wrong, sometimes catastrophically, and a defense of democracy that depends on their reliability will collapse the first time a people votes for something monstrous. Nor can we retreat to the claim that democratic procedure is simply fair, and that fairness is enough. A lottery is perfectly fair, and no one supposes that a polity governed by dice has thereby earned the right to imprison anyone.\n\nWhat survives the wreckage is a different and less flattering thought. Every method of political decision must do something with the fact that citizens disagree — not merely about means, but about what a good life requires and what the state owes its members. Rule by experts, rule by the wise, rule by the pious: each of these begins by settling that disagreement in advance, awarding one party the standing to speak for the whole. The disagreement is not resolved; it is declared closed by a decision that itself lay in dispute. Democracy alone declines this move. It takes the disagreement as the very material of politics rather than as an obstacle to be cleared before politics may begin.\n\nHere an objection presents itself, and it is a serious one. If democracy makes no claim to reach the right answer, then it is only a truce — a way of counting heads instead of breaking them, dignified by ceremony. Better than civil war, perhaps, but hardly a source of obligation. Why should the outvoted citizen regard the majority’s decision as anything more than a superior force he happens to be unable to resist?\n\nThe objection would be decisive if being outvoted were the same as being overruled. It is not. To be overruled is to be told that one’s judgment was never eligible to count. To be outvoted is to have one’s judgment counted, weighed, and defeated — and, crucially, to retain unimpaired the standing to bring it forward again. Every democratic decision is provisional in a way no expert verdict can be, because the procedure that produced it also guarantees the loser the means of its undoing. That guarantee, and not any claim to accuracy, is what the citizen is asked to honor.\n\nThis is a thinner justification than democracy’s admirers usually offer, and thinner justifications wear better. It does not require us to pretend that the electorate is wise, or that the popular will is a single thing with a discoverable content. It requires only that we notice what every alternative must assume in order to get started — that the argument is already over — and that we find this the more extravagant of the two assumptions.',
    questions: [
      {
        question: 'Which of the following best expresses the central thesis of the passage?',
        options: [
          'Democracy is justified because the pooled judgment of many citizens is more reliable than the judgment of a few experts.',
          'Because majorities are so often mistaken, democratic decisions carry no genuine claim on the citizens who lose them.',
          'Democracy’s authority rests not on the accuracy of majorities but on its refusal to close citizens’ disagreement in advance, and on the losing side’s preserved standing to reopen it.',
          'Fair procedure by itself is sufficient to generate an obligation to obey, whatever the substance of what is decided.',
        ],
        correctAnswer: 2,
        explanation:
          'The author abandons the accuracy defense ("I do not propose to repair this argument. I propose to give it up"), rejects bare fairness with the lottery case, and grounds democracy in its treatment of disagreement "as the very material of politics" plus the loser’s retained "standing to bring it forward again." The pooled-judgment option is the epistemic defense the author explicitly discards. The claim that democratic decisions bind no one is the objection the author answers, not his conclusion. The bare-fairness option is refuted by the lottery, which is "perfectly fair" yet earns no right to imprison anyone.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward the claim that "many heads are better than few" is best described as:',
        options: [
          'respectful of its internal logic but convinced it cannot bear the weight placed upon it',
          'wholly dismissive, treating it as an obvious fallacy unworthy of statement',
          'approving, provided its three conditions are specified with greater care',
          'indifferent, since the author regards every defense of democracy as unavailable',
        ],
        correctAnswer: 0,
        explanation:
          'The author grants that "under the right conditions the mathematics is sound" while insisting the conditions fail in "ordinary political life," and then declines to repair the argument at all. That is respect coupled with abandonment. Calling it an obvious fallacy overstates a position the author concedes is mathematically sound. Specifying the conditions more carefully reverses the author, who gives the argument up rather than refining it. Indifference to all defenses is contradicted by the defense the author goes on to construct.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'The mention of a lottery serves primarily to:',
        options: [
          'propose selection by lot as a superior alternative to voting',
          'suggest that democratic outcomes are in practice indistinguishable from chance',
          'concede that procedural fairness is the strongest defense of democracy still standing',
          'demonstrate that fairness of procedure alone cannot generate a right to govern',
        ],
        correctAnswer: 3,
        explanation:
          'The lottery appears immediately after the author refuses "to retreat to the claim that democratic procedure is simply fair": it is "perfectly fair," yet governing by dice earns no right to imprison. Its work is to close off fairness as a sufficient ground. Nothing in the passage recommends selection by lot. The passage never claims democratic outcomes are random. And the lottery undercuts rather than concedes the fairness defense.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s defense of democracy?',
        options: [
          'Some democratic majorities have endorsed policies that later generations judged monstrous.',
          'In functioning democracies, positions defeated at the polls are permanently barred from being placed before the electorate again.',
          'Expert bodies charged with technical questions occasionally reach conclusions that later prove mistaken.',
          'A substantial share of voters cast ballots without having formed any judgment on the questions before them.',
        ],
        correctAnswer: 1,
        explanation:
          'The author’s ground is that the outvoted citizen "retains unimpaired the standing to bring it forward again," which makes every decision provisional. If defeated positions were permanently barred, being outvoted would collapse into being overruled and the justification would fail. Monstrous majorities are conceded in the passage itself and so cost the argument nothing. Fallible experts help the author rather than hurting him. Uninformed voters attack the epistemic defense the author has already abandoned.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A tribunal invalidates a statute on the ground that the question it addressed is one about which reasonable citizens cannot legitimately disagree. The author would most likely regard this as:',
        options: [
          'an instance of the move he criticizes, since it closes a disagreement rather than counting it',
          'defensible, because tribunals are staffed by people more likely than legislatures to be right',
          'defensible, provided the tribunal’s procedure treated both parties fairly',
          'objectionable only if the tribunal’s substantive conclusion turns out to be mistaken',
        ],
        correctAnswer: 0,
        explanation:
          'The author’s complaint against rule by experts, the wise, or the pious is that each "begins by settling that disagreement in advance." A tribunal declaring a question not open to reasonable disagreement performs exactly that closure. Superior expertise is the accuracy rationale the author has given up. Procedural fairness is insufficient by the lottery argument. Making the verdict’s substantive correctness decisive inverts the author, whose objection concerns the closing of the argument, not the answer reached.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In context, the remark that "thinner justifications wear better" most nearly means that:',
        options: [
          'political arguments should be stated as briefly as circumstances permit',
          'democracy’s defenders have historically been too modest in the claims they advanced',
          'a defense assuming less about citizens’ wisdom is less easily overturned by events',
          'no justification of democratic rule can be more than a temporary expedient',
        ],
        correctAnswer: 2,
        explanation:
          'The sentence is glossed by what follows: the thin defense "does not require us to pretend that the electorate is wise," and it therefore survives the monstrous vote that would "collapse" the accuracy defense. Durability under bad outcomes is the point. Brevity of statement is a pun on "thin," not the claim. Excessive modesty reverses the author, who thinks defenders claim too much. Calling all justifications temporary contradicts the author’s presentation of his own as more durable.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-pol-02',
    section: 'cars',
    discipline: 'theories of justice and distribution',
    title: 'The Ledger No One Has Seen',
    needsReview: true,
    passageText:
      'Suppose a woman rises before dawn, works with unusual diligence for forty years, and accumulates a fortune. Suppose a second woman, equally situated at the start, prefers her leisure and ends with little. The objection to taking from the first in order to supply the second is not, at bottom, an objection about incentives. It is an objection about desert: the first woman earned what she has, and to redistribute it is to treat her effort as though it had been a windfall.\n\nThe familiar reply is that the effort was itself a windfall. Diligence is not conjured from nothing. It is the product of a temperament, a childhood, a set of examples in view at the age when examples take hold — none of which the diligent woman selected. If we decline to credit people for the talents they were born with, consistency requires that we also decline to credit them for the disposition to use those talents well. Pressed far enough, the reply dissolves desert entirely. Nothing a person is or does can be traced back to a self that stood outside all influence and chose.\n\nI think this reply is correct. I also think it has been made to do work it cannot do. For if the principle is that distribution should track only what people genuinely chose, then someone must determine, case by case, which of a person’s circumstances were chosen and which merely befell her. That determination is not merely difficult; it is degrading. It installs an official whose office is to sift a life into the deserved and the undeserved, and it makes the applicant’s bread depend on how convincingly she can narrate her own misfortune. A doctrine devised to spare people the tyranny of luck ends by delivering them to the tyranny of an interviewer.\n\nThe error lies in the question rather than in the answer. The champion of desert and its critic share an assumption: that we must first establish what each individual is owed, and then design institutions to deliver it. But individuals do not confront one another on open ground with their deserts inscribed on their foreheads. They confront one another inside an order of property rules, contracts, currencies, and courts that has already determined what diligence is worth and to whom its fruits accrue. The forty-year fortune is not a fact that institutions discover. It is a fact that institutions make.\n\nOnce this is seen, the question changes shape. We should not ask what each person deserves and then audit the rules for compliance. We should ask whether the rules themselves can be defended to every person required to live under them — including the person they leave with least. That is a demanding test, and it is not satisfied by observing that the losers agreed, since agreement extracted from those with no alternative certifies nothing.\n\nSomeone will protest that desert has been smuggled back in through a side door, since a rule indifferent to effort could hardly be defended to the diligent. The protest is well taken, and it is not an objection. A justifiable order will very likely reward effort — but it will do so because rewarding effort is a rule the idle can be shown reason to accept, not because the diligent hold a prior claim that the order merely acknowledges. The difference sounds academic. It is the difference between an institution that answers to persons and one that answers to a ledger no one has ever seen.',
    questions: [
      {
        question: 'The central claim of the passage is that:',
        options: [
          'desert becomes a workable basis for distribution once we correct for the influence of unchosen talents',
          'because distributive shares are produced by institutions rather than found in individuals, justice asks whether the rules can be defended to everyone bound by them',
          'redistribution is unjustifiable because those who work hard have genuinely earned what they hold',
          'since nothing a person does is truly chosen, effort should play no part whatever in how goods are distributed',
        ],
        correctAnswer: 1,
        explanation:
          'The pivot is that "the forty-year fortune is not a fact that institutions discover. It is a fact that institutions make," from which the author derives the test of whether "the rules themselves can be defended to every person required to live under them." Correcting desert for unchosen talents is the luck-based view the author says cannot do the work. The earned-fortune claim is the opening objection, not the conclusion. Excluding effort entirely is too absolute: the author says a justifiable order "will very likely reward effort."',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s objection to sifting a life into the deserved and the undeserved is best characterized as an objection to:',
        options: [
          'the practical difficulty of obtaining reliable information about applicants',
          'the tendency of such assessments to favor those who are already advantaged',
          'the premise that a person’s talents and temperament are unchosen',
          'the indignity of requiring a person to justify her own misfortune to an official',
        ],
        correctAnswer: 3,
        explanation:
          'The text is explicit: the determination "is not merely difficult; it is degrading," and it makes "the applicant’s bread depend on how convincingly she can narrate her own misfortune" — the "tyranny of an interviewer." Practical difficulty is named and then set aside as not the point. Bias toward the advantaged is never asserted. And the unchosen-talents premise is one the author endorses ("I think this reply is correct").',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'The two women described in the opening paragraph function primarily to:',
        options: [
          'present the desert objection in its strongest and most intuitive form before it is examined',
          'demonstrate that incentive effects are the true source of disagreement about redistribution',
          'establish that diligent people ordinarily end up with more than idle people do',
          'illustrate the distribution the author himself regards as just',
        ],
        correctAnswer: 0,
        explanation:
          'The pair sets up a case in which the objection to redistribution feels strongest, and the author says outright that the objection is "not, at bottom, an objection about incentives. It is an objection about desert" — the case exists to give desert its best footing before the reply arrives. Incentives are expressly excluded as the issue. An empirical generalization about outcomes is not being asserted. And the scenario states the view the author is about to complicate, not his own ideal.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most strengthen the claim that the forty-year fortune "is a fact that institutions make"?',
        options: [
          'In every society yet studied, diligent people accumulate more than idle people do.',
          'Most people report that they consciously chose their own habits of work.',
          'Identical labor over identical periods yields sharply different holdings depending on which rules of property and contract are in force.',
          'Institutions are frequently designed by those who stand to gain most from them.',
        ],
        correctAnswer: 2,
        explanation:
          'The claim is that the size of a share depends on the institutional order rather than on the laborer alone; showing that the same labor produces different holdings under different rules is direct evidence for exactly that dependence. A universal correlation between diligence and accumulation cuts the other way, suggesting the reward is institution-independent. Self-reports about chosen habits bear on desert, not on institutional dependence. Self-interested design is a claim about who writes rules, which leaves untouched whether shares are institutionally constituted.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A legislator proposes that a benefit be available only to applicants who can document that their hardship arose from circumstances beyond their control. The author would most likely object that the proposal:',
        options: [
          'rests on the false premise that talents and temperament are unchosen',
          'would be acceptable if only its documentation requirements were made less burdensome',
          'correctly implements the principle that distribution should track genuine choice',
          'makes assistance turn on an official’s audit of a life, which the author treats as degrading rather than merely impractical',
        ],
        correctAnswer: 3,
        explanation:
          'The proposal institutionalizes precisely the sifting the author condemns: an official deciding which circumstances "were chosen and which merely befell her," with relief depending on the applicant’s narration. The unchosen-talents premise is one the author accepts, so it cannot be the objection. Easing the paperwork is half-right and half-wrong — it treats the complaint as one of burden when the author has said the trouble is not difficulty but degradation. Endorsing the choice-tracking principle reverses the author, who argues that principle cannot do the work.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In context, "a ledger no one has ever seen" most nearly refers to:',
        options: [
          'the historical record of what each citizen has contributed to the common store',
          'a supposed prior accounting of what each person is owed, standing behind and independent of any institution',
          'the concealed accounts through which existing institutions actually distribute advantage',
          'the practical impossibility of measuring individual effort with accuracy',
        ],
        correctAnswer: 1,
        explanation:
          'The phrase closes a contrast between an institution "that answers to persons" and one that answers to something else — namely the "prior claim" the diligent were said to hold, the shared assumption "that we must first establish what each individual is owed." The ledger is that imagined pre-institutional accounting. A record of contributions is something one could in principle inspect, which is the reverse of the image. Concealed institutional accounts describe a real mechanism, whereas the author’s point is that this ledger does not exist. And measurement difficulty was already dismissed as not the objection.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-pol-03',
    section: 'cars',
    discipline: 'constitutional interpretation and law',
    title: 'The Currency of Argument',
    needsReview: true,
    passageText:
      'Every written constitution poses the same embarrassment: a document drafted by people long dead is asked to govern people who never consented to it. Two answers have hardened into camps. The first holds that the text means what it meant when it was ratified, and that interpreters who find in it anything else have substituted their preferences for the law. The second holds that the text’s central terms are deliberately capacious — liberty, cruelty, equality — and that fidelity to such words requires applying them by present lights rather than by the narrower applications the drafters happened to have in mind.\n\nThe first camp has the better of one argument, and it is not a small one. A constitution that means whatever the present generation finds congenial is not a constraint at all; it is a mirror. Whatever else a fundamental law is for, it is for making certain outcomes unavailable to officials who want them badly, and a text that yields to every strongly felt want has stopped performing the one function that distinguishes it from ordinary legislation.\n\nBut the constraint the first camp promises is less than advertised, and the shortfall is structural rather than a matter of careless execution. Suppose the ratifiers forbade cruel punishments while themselves regarding some particular punishment as perfectly humane. Did they enact the principle — no cruelty — or the application — no punishments of the sort they would have listed? The text does not say. Nothing in the words fixes the level of generality at which they are to be read, and the choice between principle and application is precisely the choice that decides the case. An interpreter who selects the narrower reading has not been constrained by history. He has made a judgment about what history was doing, and then attributed his judgment to the dead.\n\nI offer this not as a refutation but as a leveling. The second camp faces its own version of the same difficulty: present lights are as various as present persons, and an appeal to evolving standards is an appeal to whichever evolution the interpreter finds most advanced. Both camps promise an external standard. Both, at the decisive moment, supply an interpreter.\n\nWhat the camps share, and what neither examines, is the assumption that a constitution’s authority depends on its yielding determinate content — that unless the text can settle disputes by itself, it settles nothing. This is too demanding a test, and it is not the test we apply to anything else we treat as authoritative. What a constitution accomplishes is narrower than deciding cases in advance, and more valuable. It fixes the currency in which arguments about power must be denominated. An official who wishes to act must explain himself in terms the document supplies — must claim a power it grants, or deny a right it names — and in doing so he shoulders a burden he could otherwise have avoided entirely.\n\nThat burden is not nothing. It rules out whole categories of justification: that a measure is popular, that it is efficient, that its opponents are contemptible. It compels the powerful to argue on terrain they did not choose and cannot quietly redraw. And it renders their arguments checkable, since an appeal to a shared text is an appeal that others may contest by reading the same words.\n\nConstitutions constrain, then, not by determining answers but by disciplining the form of the question. This is a modest achievement beside what either camp claims for itself. It has the advantage of being true.',
    questions: [
      {
        question: 'The author’s principal contention is that:',
        options: [
          'original meaning is superior to evolving standards because it alone genuinely constrains interpreters',
          'because neither camp can supply determinate content, a constitution places no real limit on official action',
          'the capacious terms of a constitution should always be read at the highest available level of generality',
          'a constitution constrains not by fixing outcomes but by requiring that exercises of power be justified in the terms it supplies',
        ],
        correctAnswer: 3,
        explanation:
          'The closing formulation is explicit: constitutions constrain "not by determining answers but by disciplining the form of the question," fixing "the currency in which arguments about power must be denominated." Preferring original meaning ignores the structural shortfall the author identifies in it. Concluding that no limit remains reverses the author, who insists "that burden is not nothing." Reading terms at the highest generality is a choice the author says the text cannot dictate in either direction.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s stance toward the two interpretive camps is best described as:',
        options: [
          'partisan, siding with evolving standards once the flaws of original meaning are exposed',
          'evenhandedly critical, crediting each with a real insight while denying both the external standard each claims',
          'dismissive, treating the entire dispute as unworthy of serious attention',
          'undecided, since the author finds the arguments on the two sides equally persuasive',
        ],
        correctAnswer: 1,
        explanation:
          'The author grants the first camp "the better of one argument, and it is not a small one," then says of his critique, "I offer this not as a refutation but as a leveling," and finds the second camp burdened by "its own version of the same difficulty" — both, at the decisive moment, "supply an interpreter." Siding with evolving standards is contradicted by the criticism aimed at them. Dismissal is belied by the care with which each position is stated. Undecided is wrong because the author is not suspended between the two; he advances a third account of his own.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'The example of the ratifiers who forbade cruelty is introduced in order to establish that:',
        options: [
          'the ratifiers of a constitution were mistaken about which punishments are cruel',
          'capacious terms should be understood as enacting principles rather than particular applications',
          'the text cannot itself determine whether it enacts a principle or the drafters’ applications of it, so an interpreter must decide',
          'reliable historical evidence about ratification is generally unavailable to modern interpreters',
        ],
        correctAnswer: 2,
        explanation:
          'The paragraph asks whether the principle or the application was enacted and answers, "The text does not say. Nothing in the words fixes the level of generality at which they are to be read" — leaving the decisive choice to the interpreter. Whether the ratifiers were mistaken about cruelty is a substantive question the passage carefully does not settle. Insisting on the principle reading picks one horn of the dilemma the author says the text leaves open. Availability of historical evidence is never at issue; the problem is that evidence about the drafters cannot fix the level of generality.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s account of what a constitution accomplishes?',
        options: [
          'Officials reliably obtain whatever outcomes they want simply by redescribing the desired measure in the document’s terms, without changing what they do.',
          'Interpreters frequently disagree about the level of generality at which constitutional terms should be read.',
          'Some constitutional provisions are drafted in highly specific rather than capacious language.',
          'The ratifiers of constitutions often disagreed among themselves about what they were enacting.',
        ],
        correctAnswer: 0,
        explanation:
          'The author’s positive claim is that requiring justification in the document’s terms imposes a real burden that "rules out whole categories of justification." If any desired measure can be costlessly redescribed to satisfy the requirement, the burden vanishes and the account collapses. Disagreement about levels of generality is asserted by the author himself. Specific provisions do not bear on whether justification must be denominated in the text’s currency. Ratifier disagreement reinforces the leveling argument rather than damaging the conclusion.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'An official defends a newly adopted measure solely on the ground that a large majority of citizens favor it. On the author’s account, this defense:',
        options: [
          'is legitimate, since popular support is the ultimate source of constitutional authority',
          'falls outside the currency the constitution establishes, and is therefore among the justifications the document rules out',
          'is acceptable so long as the measure also proves efficient in operation',
          'would satisfy interpreters in the first camp but not those in the second',
        ],
        correctAnswer: 1,
        explanation:
          'The author lists the excluded justifications directly: "that a measure is popular, that it is efficient, that its opponents are contemptible." An appeal to nothing but popular favor is the first item on that list. Treating popularity as the source of constitutional authority reverses the passage. Adding efficiency compounds the error by invoking a second excluded justification. And the exclusion follows from what a constitution does, not from which interpretive camp one joins.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In saying that a constitution yielding to every strongly felt want "is a mirror," the author means that such a document:',
        options: [
          'merely reflects back the wishes of those it was supposed to restrain',
          'reveals the true character of the society that produced it',
          'shows interpreters their own biases so that they may correct for them',
          'reproduces the content of ordinary legislation word for word',
        ],
        correctAnswer: 0,
        explanation:
          'The image appears in a sentence contrasting a mirror with "a constraint," in a paragraph about "making certain outcomes unavailable to officials who want them badly." A document that returns officials their own wants restrains no one. Revealing a society’s character treats the mirror as diagnosis rather than failure. Correcting for bias makes the mirror useful, which reverses the criticism. Word-for-word duplication of ordinary legislation is half-right — the author does say such a text stops being distinguishable in function from ordinary legislation — but he says nothing about identical wording.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-pol-04',
    section: 'cars',
    discipline: 'citizenship and belonging',
    title: 'Those Who Must Obey',
    needsReview: true,
    passageText:
      'Ask what makes someone a member of a political community and two answers arrive first. The older holds that membership rests on a shared inheritance — a language, a history, a set of pieties absorbed before one is old enough to examine them. The newer holds that membership is a kind of contract, entered by those who take up residence and abide by the rules, so that a polity is something like a very large association of consenting adults.\n\nNeither answer survives contact with the cases that matter. The inheritance view cannot explain why the child of newcomers, raised entirely inside a country’s institutions, is a member while an emigrant’s grandchild who has never set foot there is not — and where it does insist otherwise, it yields conclusions almost no one is willing to defend aloud. The contract view fails for a plainer reason: nobody consents to the polity into which she is born, and the consent of those who arrive later is extracted under conditions that make refusal ruinous. A contract one may decline only by exile is not a contract.\n\nWhat both views miss is that political membership is not in the first instance an honor or a bargain. It is a relation of subjection. A polity is an arrangement that issues commands and enforces them, that determines who may work, who may remain, whose contracts will be recognized and whose children will be schooled. The person who lives under that arrangement is not merely influenced by it; she is answerable to it. And the claim to a voice in making a decision arises, I submit, from being answerable to it. Those who must obey have standing to be asked.\n\nThe objection is immediate and appears fatal. If the principle is that those affected by a decision should share in making it, then the principle has no edges. A tariff enacted in one country reshapes lives in a dozen others; a currency policy alters the price of bread across an ocean. On this reasoning everyone has a claim to a vote everywhere, which is to say the principle has dissolved into a wish.\n\nThe objection succeeds against a principle I have not stated. Being affected by a decision and being subject to it are different relations, and the difference is not one of degree. The distant farmer whose crop loses its market has been affected, powerfully and perhaps ruinously. But no official of the deciding country claims authority over him; none will appear at his door; his obedience is not required, only his misfortune endured. The resident who defies the same government’s decree meets its officers and its jails. Subjection is not the magnitude of an effect. It is a relation in which one party asserts the right to command and stands ready to compel.\n\nThis distinction does real work. It explains why long-settled residents who are formally excluded have a genuine grievance rather than a merely sentimental one: they are commanded without being asked, which is the precise condition that political membership exists to end. It explains why the emigrant’s claim thins as the polity’s writ over him lapses. And it explains why the grievance is not answered by pointing to how well such residents are treated. Benevolent command is command still. The complaint of the excluded is not that they are governed badly. It is that they are governed by an authority that has never had to justify itself to them.',
    questions: [
      {
        question: 'The passage is primarily concerned with arguing that:',
        options: [
          'political membership is grounded in subjection to a polity’s commands, which gives those commanded standing to share in making them',
          'membership should be extended to anyone significantly affected by a polity’s decisions',
          'shared inheritance and consent each capture part of what genuine membership requires',
          'residents who are well treated by a government they cannot vote in have no real grievance',
        ],
        correctAnswer: 0,
        explanation:
          'The thesis sentence is "Those who must obey have standing to be asked," developed from the claim that membership "is a relation of subjection." Extending membership to all who are affected is the principle the author explicitly disowns as one "I have not stated." Treating inheritance and consent as partly right misreads a paragraph that says neither "survives contact with the cases that matter." Denying the grievance of well-treated residents inverts the closing paragraph, where "benevolent command is command still."',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The observation that the inheritance view "yields conclusions almost no one is willing to defend aloud" conveys:',
        options: [
          'sympathy for a position the author regards as unfashionable but sound',
          'uncertainty about what the inheritance view actually implies',
          'pointed disapproval, implying that the view’s consistent form is one its adherents find embarrassing',
          'detachment, since the author considers the dispute merely terminological',
        ],
        correctAnswer: 2,
        explanation:
          'The phrasing turns on a gap between what the view implies and what its holders will say in public — a charge of embarrassment, delivered dryly but unmistakably as criticism. Sympathy is ruled out by the surrounding claim that the view "cannot explain" the central case. Uncertainty is wrong because the author is confident about the implication; the reticence he notes belongs to the view’s adherents. Detachment cannot be squared with a passage that takes a firm position of its own.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'It can be inferred that the author rejects the consent-based account of membership because:',
        options: [
          'residents rarely understand in detail the rules they are said to have accepted',
          'consent is a moral notion with no legitimate role in political argument',
          'too few residents actually take part in the polity’s decisions',
          'consent available only on pain of exile is not consent in any meaningful sense',
        ],
        correctAnswer: 3,
        explanation:
          'The stated reason is that nobody consents to the polity of her birth and that later arrivals face conditions "that make refusal ruinous": "A contract one may decline only by exile is not a contract." Ignorance of the rules is never mentioned. Dismissing consent as a moral notion overshoots — the author faults this consent as unreal, not the concept as illegitimate. Low participation rates are a different complaint the passage does not raise.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'The example of the distant farmer whose crop loses its market functions primarily to:',
        options: [
          'demonstrate that cross-border economic effects are more severe than commonly acknowledged',
          'mark the boundary between being affected by a decision and being subject to the authority that makes it',
          'concede that the author’s principle does after all extend a claim to foreigners',
          'argue that decisions with international consequences should be made by international bodies',
        ],
        correctAnswer: 1,
        explanation:
          'The farmer is introduced immediately after the author denies that his principle covers everyone affected, and the case is built to show that severity of effect is not the criterion: the farmer suffers greatly, yet "no official of the deciding country claims authority over him." Emphasizing the severity of cross-border effects mistakes the illustration for the point. The example blocks rather than concedes a foreign claim. Institutional reform of international decision-making is nowhere proposed.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s argument?',
        options: [
          'Some long-settled residents decline to seek formal membership even when it is available.',
          'Governments sometimes treat formally excluded residents with considerable generosity.',
          'Polities routinely enforce their decrees against distant foreigners who never enter their territory, appearing at their doors and compelling obedience.',
          'The inheritance view of membership remains widely held among citizens of many countries.',
        ],
        correctAnswer: 2,
        explanation:
          'The argument rests on subjection being a relation distinct from being affected — one in which a polity "asserts the right to command and stands ready to compel," which the author says it does not do to distant foreigners. Routine extraterritorial enforcement would erase the distinction and restore the edgeless principle the author claimed to escape. Residents declining membership says nothing about whether they are commanded. Generous treatment is answered in the passage: "benevolent command is command still." The popularity of the inheritance view does not bear on its adequacy.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A polity extends to long-resident non-members generous housing, schooling, and medical benefits, but no vote. The author would most likely conclude that this arrangement:',
        options: [
          'satisfies the demands of membership, since the residents’ interests are well protected',
          'is objectionable chiefly because the benefits provided are not generous enough',
          'is acceptable so long as dissatisfied residents remain free to leave',
          'leaves the grievance untouched, because the complaint concerns being commanded by an authority that need never justify itself to them',
        ],
        correctAnswer: 3,
        explanation:
          'The final paragraph anticipates this case exactly: the grievance "is not answered by pointing to how well such residents are treated," since the complaint "is not that they are governed badly" but that they are governed by an unaccountable authority. Protected interests are precisely the answer the author rejects. Faulting the benefits as insufficient adopts a measure of adequacy the author denies is relevant. Freedom to leave revives the consent view already dismissed with the observation that a contract declinable only by exile is no contract.',
        skill: 'application',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-pol-05',
    section: 'cars',
    discipline: 'political rhetoric and public discourse',
    title: 'The Charge of Demagoguery',
    needsReview: true,
    passageText:
      'The charge of demagoguery is nearly always laid in the same way. A speaker moves a crowd; the crowd responds with feeling rather than with calculation; observers conclude that reason has been bypassed. Behind the charge lies a picture of public speech as a contest between argument and its counterfeit — between the appeal that offers reasons and the appeal that stirs the blood. The picture is tidy, and it is wrong. It misidentifies what is dangerous in political speech, and by misidentifying it leaves the danger unmarked.\n\nBegin with the claim that emotional appeal is the disease. A speaker who describes in detail the conditions inside a workhouse, and who intends that his audience be horrified, has not circumvented their reason. He has supplied it with the only information capable of settling the question at issue. Whether a practice is cruel is not a fact one establishes while unmoved. Indignation, pity, and shame are not interruptions of judgment but instruments of it, and a citizenry incapable of them would not be more rational. It would be unable to notice most of what politics is about.\n\nNor does the converse hold. The manner of the seminar is no guarantee of honesty. A speaker may recite accurate figures in a level voice, omit the three that would reverse their meaning, and leave his audience with a false picture it has no means of correcting. He has bypassed nothing, in the sense the standard picture cares about. He has merely lied with better manners.\n\nWhat, then, does the charge of demagoguery point at, if not emotion? I suggest that it points at flattery — and by flattery I mean something narrower than praise. A speech flatters, in the relevant sense, when it assures its audience that their existing judgment stands in no need of correction: that they already know what they need to know, that those who disagree do so from bad motives, and that the only remaining task is to prevail. Such a speech may be perfectly calm. What makes it corrosive is that it closes the audience against the very possibility of being answered.\n\nThe test I would put in place of the old one is this: does the speech supply the handles by which it might be refuted? An honest advocate names the evidence that would count against him, states his opponent’s case in a form his opponent would accept, and thereby hands the audience the means of checking him. A demagogue withholds all three — not because he is passionate, but because he is unwilling to be checked.\n\nI should concede what this test cannot do. It does not sort speakers into the sincere and the cynical, and it was never going to; motives are not available for inspection, and a speaker may be honest in intent and corrupting in effect. Nor does the test settle who is right. A speech may be admirably checkable and defend a monstrous policy. What the test does is narrower and, I think, more useful: it identifies which speeches leave an audience better equipped to judge the next one, and which leave them worse.\n\nThat is why the confusion matters practically and not merely as a point of theory. A public trained to fear passion in its speakers will admire the manner of the seminar and be defenseless against the flatterer who has learned to borrow it. It will police the wrong signal, and it will be disarmed by exactly the speech that most deserves its suspicion.',
    questions: [
      {
        question: 'The author’s description of the standard picture of public speech as "tidy" primarily conveys:',
        options: [
          'admiration for the analytical precision the picture achieves',
          'neutrality about how useful the picture has proved',
          'skepticism, implying the picture owes its appeal to its neatness rather than to its accuracy',
          'regret that a once-accurate picture has been overtaken by events',
        ],
        correctAnswer: 2,
        explanation:
          'The word is immediately followed by "and it is wrong," and then by the charge that the picture "leaves the danger unmarked" — tidiness is offered as the picture’s attraction and its indictment. Admiration is ruled out by the sentence that follows. Neutrality cannot survive the evaluative language throughout the paragraph. Regret over an outdated picture implies the picture was once correct, which the author never grants; his objection is that it misidentifies the danger, not that circumstances changed.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'The discussion of the speaker who recites accurate figures in a level voice implies that:',
        options: [
          'statistical evidence is generally less trustworthy than vivid description',
          'a calm manner of delivery is ordinarily a sign of concealed dishonesty',
          'audiences ought to disregard any speech that omits relevant data',
          'the absence of emotional appeal is no evidence that a speech is honest',
        ],
        correctAnswer: 3,
        explanation:
          'The example is introduced with "Nor does the converse hold": if emotion is not the disease, neither is calm the cure, and the level-voiced speaker "has merely lied with better manners." A general ranking of statistics below description is not asserted; the passage faults selective omission, not data. Treating calm as ordinarily dishonest overshoots into an absolute the passage does not support. Advising audiences to disregard speeches with omissions is a rule the author never proposes and one his own test would not yield.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'The workhouse example functions in the argument to:',
        options: [
          'show that arousing feeling can be a way of informing judgment rather than circumventing it',
          'establish that most political questions ultimately concern cruelty',
          'illustrate a case in which the author concedes that emotional appeal is demagogic',
          'contrast the political speech of earlier eras with its contemporary counterpart',
        ],
        correctAnswer: 0,
        explanation:
          'The example answers "the claim that emotional appeal is the disease": the horrified audience has been supplied with "the only information capable of settling the question," because "whether a practice is cruel is not a fact one establishes while unmoved." Making cruelty the subject of most political questions inflates an illustration into a general claim. The example is a counterexample to the demagoguery charge rather than a concession to it. And no historical contrast between eras is drawn.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most strengthen the case for the test the author proposes?',
        options: [
          'Audiences report that they enjoy speeches in which opposing views are stated fairly.',
          'Audiences exposed to speeches that state the strongest opposing case become measurably better at detecting misleading claims in later speeches.',
          'Speakers who name the evidence against their own position are less likely to persuade their audiences.',
          'Passionate speeches are remembered longer than calm ones.',
        ],
        correctAnswer: 1,
        explanation:
          'The author defines the test’s value precisely as identifying "which speeches leave an audience better equipped to judge the next one," so evidence that checkable speech improves later judgment supports the test at exactly the point where it claims to earn its keep. Enjoyment is a report of preference, not of improved capacity to judge. Reduced persuasiveness bears on a speaker’s tactical interest, not on whether the test tracks what the author says it tracks. Memorability is unrelated to the audience’s equipment for judging.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A speaker calmly presents accurate data, never raises her voice, and concludes by declaring that anyone who disagrees is either uninformed or corrupt. By the author’s test, this speech is:',
        options: [
          'honest, since its manner is measured and its figures are accurate',
          'demagogic, since data unaccompanied by feeling cannot inform judgment',
          'demagogic, since it closes the audience against the possibility of being answered',
          'impossible to evaluate, since the speaker’s motives cannot be known',
        ],
        correctAnswer: 2,
        explanation:
          'The author defines the relevant flattery as telling an audience "that those who disagree do so from bad motives, and that the only remaining task is to prevail," adding that "such a speech may be perfectly calm." Measured manner and accurate figures are exactly the credentials the passage says prove nothing. Claiming that unemotional data cannot inform judgment reverses the author, who defends dispassionate and impassioned speech alike when they are checkable. Declaring the case unevaluable is correct about motives but non-responsive: the author explicitly builds a test that does not require inspecting them.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In context, "the handles by which it might be refuted" refers to:',
        options: [
          'the materials a speech provides that allow an audience to check and challenge it',
          'the rhetorical devices that make a speech memorable to those who hear it',
          'the concessions a speaker makes in order to appear reasonable',
          'the formal rules that govern the conduct of public debate',
        ],
        correctAnswer: 0,
        explanation:
          'The next sentence supplies the referent: naming contrary evidence and stating the opponent’s case fairly "hands the audience the means of checking him." Memorability is nowhere connected to refutability. Concessions made to appear reasonable describes a pose, whereas the author’s handles are substantive materials the audience can actually use. Formal rules of debate are external procedures, not features the speech itself supplies.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-pol-06',
    section: 'cars',
    discipline: 'civil disobedience and legitimacy',
    title: 'The Disobedient Citizen',
    needsReview: true,
    passageText:
      'There is a formula, repeated so often that it has acquired the standing of a proof, by which civil disobedience is distinguished from ordinary lawbreaking. The disobedient citizen, we are told, breaks the law openly and then accepts the penalty; in accepting it he demonstrates that he does not reject law as such, only this law, and so his defiance leaves the legal order intact. Willingness to go to prison is the certificate of good faith.\n\nThe formula deserves less deference than it receives. Consider first what accepting a penalty actually shows. A man may go to prison because he reveres the law, or because the sentence is short and the publicity is long, or because he calculates that a court will not dare impose the full measure, or simply because he was caught and had no alternative. These states of mind are indistinguishable from the outside, and they are indistinguishable precisely where the formula most needs to tell them apart. A certificate that anyone may obtain by submitting to arrest certifies nothing about the spirit in which the arrest was courted.\n\nWorse, the formula generates a conclusion its own defenders reject. If penalty-acceptance is what converts lawbreaking into legitimate protest, then a regime may raise the price of protest until only martyrs can afford it, and every act of resistance short of martyrdom stands delegitimized by the regime’s own severity. Legitimacy would then vary inversely with the tolerance of the state — a strange result for a doctrine meant to shelter the conscientious from the harsh.\n\nSomething else must be doing the work for which the formula takes credit. I think it is this: what makes disobedience civil is that the act is addressed to fellow citizens as an argument. The disobedient citizen does not merely impose a cost and wait for the calculation to change. He performs the violation in a form that says something. He acts openly, avows what he has done and why, and directs the act at the practice he condemns rather than at whatever target happens to be vulnerable. His aim is that others come to see what he sees, and every feature of his conduct is chosen so that they might.\n\nThis is why the covert saboteur, however pure his motives, falls outside the category. It is not that secrecy is cowardly. It is that a hidden act cannot address anyone. And it is why the protester who obstructs a road in a manner unconnected to any claim he is making has produced not an argument but a nuisance; he has substituted the leverage of inconvenience for the labor of persuasion.\n\nNow the sound part of the old formula can be restored. Accepting the penalty is not the criterion, but it is often excellent evidence for the criterion. A citizen willing to bear a serious cost for his protest gives his fellow citizens reason to believe the protest is meant, and being meant is the beginning of being heard. What was mistaken was not the observation but its promotion into a definition. Evidence admits of exceptions; definitions do not, and the exceptions here are the cases that matter most — the dissenter who flees a sentence he could not survive, and who has not thereby withdrawn his argument.\n\nThe difference is not academic. If penalty-acceptance defines civil disobedience, our first question about a protest is what happened to the protester. If address to fellow citizens defines it, our first question is what the protest said, and to whom, and whether the rest of us have troubled to answer.',
    questions: [
      {
        question: 'Which of the following best states the passage’s central argument?',
        options: [
          'Disobedience is legitimate only when the disobedient citizen accepts the legal penalty for his act.',
          'Covert sabotage and open protest are equally defensible forms of political resistance.',
          'Lawbreaking of any kind erodes the legal order and therefore cannot be justified.',
          'What makes disobedience civil is that it is addressed to fellow citizens as an argument; accepting the penalty is evidence of this rather than its definition.',
        ],
        correctAnswer: 3,
        explanation:
          'The author states the criterion — "what makes disobedience civil is that the act is addressed to fellow citizens as an argument" — and then restores penalty-acceptance as "often excellent evidence for the criterion," faulting only "its promotion into a definition." Making penalty-acceptance the condition of legitimacy is the formula the author dismantles. Equating covert sabotage with open protest reverses him: the saboteur "falls outside the category." Condemning lawbreaking generally is a position the passage never entertains.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s point about a regime that raises the price of protest is that the penalty-acceptance formula:',
        options: [
          'would make a protest’s legitimacy depend on how harshly the state chooses to punish it',
          'underestimates how much suffering conscientious citizens are willing to bear',
          'applies only to states that punish acts of protest lightly',
          'should be replaced by a rule permitting resistance whenever penalties are severe',
        ],
        correctAnswer: 0,
        explanation:
          'The passage draws the consequence explicitly: "Legitimacy would then vary inversely with the tolerance of the state," so that severity itself delegitimizes resistance. Underestimating citizens’ willingness to suffer misplaces the objection, which concerns what legitimacy is made to depend on rather than what citizens will endure. Restricting the formula to lenient states is half-right about where it works but misses that the author is exposing a perverse dependence, not narrowing the formula’s scope. Licensing resistance whenever penalties are severe is a rule the author never proposes.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'The list of reasons a man might go to prison — reverence, publicity, calculation, capture — serves primarily to:',
        options: [
          'suggest that most protesters who accept punishment are insincere',
          'show that penalty-acceptance is compatible with too many motives to certify any one of them',
          'establish that a protester’s motives can be determined through careful observation',
          'argue that imprisonment is an inappropriate response to acts of protest',
        ],
        correctAnswer: 1,
        explanation:
          'The list ends with the conclusion it was built for: these states of mind "are indistinguishable from the outside," so "a certificate that anyone may obtain by submitting to arrest certifies nothing." Its work is to sever acceptance from any particular spirit. Claiming most protesters are insincere converts a point about what cannot be inferred into an empirical charge the author does not make. Asserting that motives can be observed inverts the paragraph. And the appropriateness of imprisonment as a penalty is not at issue.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s account of what makes disobedience civil?',
        options: [
          'Some protesters who accept punishment are motivated primarily by a desire for publicity.',
          'Severe penalties deter many citizens who would otherwise have joined a protest.',
          'Covert acts of sabotage, once discovered, reliably provoke public argument about the practices they targeted and change how citizens view them.',
          'Obstructing a road is an effective means of drawing attention to a grievance.',
        ],
        correctAnswer: 2,
        explanation:
          'The author excludes the saboteur on the ground that "a hidden act cannot address anyone." Evidence that covert acts reliably generate exactly the public argument the criterion prizes attacks that exclusion at its foundation and, with it, the sufficiency of address as the dividing line. Publicity-seeking protesters support the author’s claim that acceptance certifies nothing. Deterrence by severe penalties is true but bears on participation, not on what makes an act civil. Effectiveness at drawing attention does not establish the connection to the claim being made, which is what the author says the roadblock lacks.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A group secretly disables machinery at a facility whose practices it condemns and never announces responsibility. The author would most likely classify this act as:',
        options: [
          'civil disobedience, provided the group would accept punishment if apprehended',
          'outside the category, because a hidden act cannot address the citizens it would need to persuade',
          'outside the category, because secrecy in political action reveals a lack of courage',
          'civil disobedience, since the group’s motives are conscientious ones',
        ],
        correctAnswer: 1,
        explanation:
          'The passage treats this case directly: "the covert saboteur, however pure his motives, falls outside the category… a hidden act cannot address anyone." Making hypothetical penalty-acceptance decisive revives the formula the author rejects as a definition. Grounding the exclusion in cowardice is expressly disclaimed — "it is not that secrecy is cowardly." And conscientious motives are conceded to the saboteur without changing the verdict.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In context, the contrast between "the leverage of inconvenience" and "the labor of persuasion" distinguishes:',
        options: [
          'lawful forms of protest from unlawful ones',
          'protests that achieve their aims from protests that fail',
          'protests directed at governments from protests directed at private parties',
          'acts that simply impose costs until others yield from acts that give others reasons to change their minds',
        ],
        correctAnswer: 3,
        explanation:
          'The contrast restates the criterion developed just above it: the civil actor "does not merely impose a cost and wait for the calculation to change" but acts so "that others come to see what he sees." Legality is not the axis; every act under discussion is unlawful. Success and failure are not at issue, since the author allows that inconvenience may well work. And the target’s public or private character never enters the distinction.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
]
