import type { MCATPassage } from '../types'

/**
 * MCAT CARS — Social Science / Humanities pool.
 *
 * Six original, argument-driven passages (500-600 words each) treating the
 * social sciences as discursive argument rather than data or experiment:
 * cultural anthropology, sociology/social theory, economics-as-argument,
 * political science, psychology-as-humanities, and linguistics/education theory.
 *
 * These passages and their answer keys have undergone an adversarial SME
 * review pass: each item was checked for a single defensible, passage-grounded
 * answer with AAMC-mold distractors, and verified items carry needsReview:
 * false. Any item still genuinely contestable after that pass retains
 * needsReview: true.
 */
export const CARS_SOCIAL_SCIENCE_PASSAGES: MCATPassage[] = [
  {
    id: 'cars-ss-01',
    section: 'cars',
    discipline: 'cultural anthropology',
    title: 'The Ethnographer’s Mirror',
    passageText:
      'There is a comforting story anthropology likes to tell about itself: that the discipline began in arrogance and matured into humility, that early fieldworkers ranked human societies on a ladder of progress while their successors learned, at last, to meet other cultures on their own terms. The story is flattering, and like most flattering stories it is mostly false. What changed was not the impulse to judge but the vocabulary in which judgment hides.\n\nConsider the doctrine of cultural relativism, the principle that a practice can be understood only within the web of meaning its participants inhabit. As a methodological caution—a reminder that the observer’s categories are not the world’s—relativism is indispensable. No serious account of a marriage rite or a mourning custom can proceed by measuring it against the analyst’s own suburban intuitions. Yet relativism is frequently smuggled across the border from method into morality, where it becomes the claim that no practice may be criticized from outside. This is a different proposition entirely, and a far weaker one. The anthropologist who refuses on principle to condemn anything has not transcended judgment; she has merely judged that her own discomfort is the only thing not permitted to count.\n\nThe deeper irony is that the relativist’s restraint is itself a cultural artifact, the product of a particular liberal tradition that prizes tolerance and suspects certainty. To universalize that restraint—to insist that every observer everywhere must suspend evaluation—is to do precisely what relativism forbids: to export one society’s values as though they were the neutral ground on which all others must stand. The doctrine, pressed to its conclusion, devours itself.\n\nNone of this licenses a return to the old ladder of progress. The point is not that the Victorians were right to rank, but that they were at least honest about ranking. Their successors perform the same operation while denying that any operation is performed, and the denial corrupts the work. An ethnography that pretends to pure description is an ethnography that has hidden its own commitments from its readers and, more dangerously, from itself.\n\nWhat the discipline needs is not less judgment but more candid judgment—evaluation that announces its standards, defends them, and submits them to argument. A critic who says plainly, “I find this practice cruel, and here is the conception of suffering on which I rely,” has given her interlocutors something to dispute. The relativist who says only, “Who am I to say?” has given them nothing, and has mistaken the abdication of argument for its highest form.\n\nThere is a final cost to the relativist posture, one its defenders rarely acknowledge. By treating every culture as a sealed and self-justifying whole, the doctrine flatters the powerful within each culture and silences the dissenters. The woman who chafes against a custom is told that the custom is hers, that to question it is to misunderstand her own world. Relativism, conceived as a shield for the vulnerable against the arrogant outsider, becomes in practice a shield for local authority against internal challenge. The outsider’s humility, so carefully cultivated, turns out to serve the insider’s power. A discipline that began by claiming to see other peoples clearly has ended, too often, by declining to see them at all.',
    questions: [
      {
        question: 'Which of the following best captures the central thesis of the passage?',
        options: [
          'Anthropology has successfully replaced its early arrogance with a mature ethical humility.',
          'The Victorian practice of ranking societies on a ladder of progress should be revived.',
          'Ethnographic description should aim to be as purely neutral and value-free as possible.',
          'Cultural relativism is valuable as a method but corrosive when treated as a moral prohibition on judgment.',
        ],
        correctAnswer: 3,
        explanation:
          'The author endorses relativism as a "methodological caution" that is "indispensable," but argues it becomes "a far weaker" and self-defeating proposition once it crosses "from method into morality." The answer describing anthropology’s maturation into ethical humility states the self-flattering story the author calls "mostly false." The answer reviving the Victorian ladder of progress misreads the author, who explicitly says the Victorians were not "right to rank," only more honest about it. The answer urging purely neutral, value-free description is the "pure description" ideal the author condemns as having "hidden its own commitments." Only the answer calling relativism valuable as method but corrosive as a moral prohibition holds both halves of the argument together.',
        skill: 'main-idea',
        needsReview: false,
      },
      {
        question: 'The author’s attitude toward the "comforting story anthropology likes to tell about itself" is best described as:',
        options: [
          'skeptical and gently mocking',
          'neutral and merely expository',
          'sympathetic but ultimately resigned',
          'hostile to the point of contempt',
        ],
        correctAnswer: 0,
        explanation:
          'The author calls the story "comforting," "flattering," and "mostly false," and dryly notes that "like most flattering stories" it misleads—skeptical, with a light irony rather than rage. "Sympathetic but ultimately resigned" is wrong because the author is not resigned; she proposes a remedy ("more candid judgment"). "Neutral and merely expository" ignores the clearly evaluative diction. "Hostile to the point of contempt" overshoots: the tone is wry, not contemptuous, and the author treats the discipline as worth reforming, not despising.',
        skill: 'tone-attitude',
        needsReview: false,
      },
      {
        question: 'The author argues that the relativist doctrine "devours itself" primarily because:',
        options: [
          'no culture can ever be fully understood by an outsider',
          'relativists secretly believe their own culture is superior to all others',
          'universalizing the demand to suspend evaluation is itself an act of exporting one culture’s values',
          'method and morality are ultimately the same thing',
        ],
        correctAnswer: 2,
        explanation:
          'The "devours itself" claim rests on the paragraph showing that to "insist that every observer everywhere must suspend evaluation" is "to export one society’s values" as neutral ground—"precisely what relativism forbids." The answer about universalizing the demand restates this self-contradiction. The answer about a secret belief in one’s own cultural superiority invents a hidden belief the text does not assert. The answer that no outsider can fully understand a culture is a real point elsewhere but is not the mechanism of the self-contradiction. The answer equating method and morality inverts the author, who insists they are distinct propositions.',
        skill: 'inference',
        needsReview: false,
      },
      {
        question: 'What is the primary function of the final paragraph in the passage?',
        options: [
          'To summarize the preceding arguments and restate the thesis without adding new content',
          'To introduce a further, less obvious cost of relativism—that it shields entrenched power against dissent',
          'To concede that the relativist position has more merit than the author earlier allowed',
          'To shift the discussion from ethics to the practical training of fieldworkers',
        ],
        correctAnswer: 1,
        explanation:
          'The paragraph opens "There is a final cost… its defenders rarely acknowledge," then develops a new argument: relativism "flatters the powerful" and "silences the dissenters," turning a shield for the vulnerable into "a shield for local authority." That is fresh content, so the answer about introducing a further, less obvious cost is right and the answer calling the paragraph a summary is wrong. It deepens, not softens, the critique, so it is no concession. And it never turns to the practical training of fieldworkers.',
        skill: 'paragraph-function',
        needsReview: false,
      },
      {
        question: 'Suppose a critic objected that judging another culture inevitably distorts it through the observer’s biases. The author would most likely respond that:',
        options: [
          'announcing and defending one’s standards exposes them to dispute, which is preferable to concealing them',
          'the objection is decisive and evaluation should therefore be abandoned',
          'biases are best neutralized by aspiring to purely neutral description',
          'only insiders to a culture are entitled to evaluate its practices',
        ],
        correctAnswer: 0,
        explanation:
          'The author’s remedy is "more candid judgment—evaluation that announces its standards, defends them, and submits them to argument," because a stated standard gives "interlocutors something to dispute." That answer directly addresses the bias worry by making bias contestable rather than hidden. Abandoning evaluation because the objection is decisive is the abdication the author rejects. Aspiring to purely neutral description is the "pure description" the author calls a concealment. Reserving evaluation to cultural insiders resembles relativism’s shielding of local authority, which the author criticizes.',
        skill: 'application',
        needsReview: false,
      },
      {
        question: 'In context, the author’s statement that the relativist "has mistaken the abdication of argument for its highest form" most nearly means that the relativist:',
        options: [
          'has reached the most sophisticated possible form of moral reasoning',
          'argues so forcefully that other positions cannot be heard',
          'abandons fieldwork in favor of abstract theorizing',
          'treats a refusal to reason as though it were the pinnacle of careful reasoning',
        ],
        correctAnswer: 3,
        explanation:
          '"Abdication of argument" means giving up reasoning (saying only "Who am I to say?"), and "mistaken… for its highest form" means treating that surrender as if it were reasoning’s peak—the irony the answer about treating refusal as the pinnacle captures exactly. The answer crediting the relativist with the most sophisticated moral reasoning takes the phrase at face value and reverses its critical thrust. The answer about arguing too forcefully describes over-arguing, the opposite of abdication. The answer about abandoning fieldwork imports a fieldwork-versus-theory contrast the sentence does not raise.',
        skill: 'meaning-in-context',
        needsReview: false,
      },
    ],
    needsReview: false,
  },
  {
    id: 'cars-ss-02',
    section: 'cars',
    discipline: 'sociology',
    title: 'The Tyranny of the Measurable',
    passageText:
      'Modern institutions are governed by a quiet faith that what can be counted is what matters. The faith is rarely stated, which is part of its power; it operates not as an argument to be examined but as a reflex to be obeyed. A hospital is judged by its readmission rates, a school by its test scores, a police force by its arrest figures. Each metric began life as a humble proxy—a rough stand-in for a goal too complex to observe directly—and each, in time, contrived to displace the goal it was meant to serve.\n\nThe mechanism is familiar to anyone who has watched a number become a target. The moment a measure is tied to reward, the people measured begin, quite rationally, to optimize the measure rather than the thing behind it. Teachers teach to the test; the test scores rise; the education they were proxies for does not. The figure improves precisely as the reality it once tracked decays, and the institution congratulates itself on progress it has, in a strict sense, manufactured. This is not fraud. The actors are responding sensibly to the incentives they face. The fault lies upstream, in the conviction that a complex good can be governed by its shadow.\n\nDefenders of measurement offer a reasonable rejoinder: the alternative to bad metrics is not no metrics but better ones, and surely a flawed number is preferable to the unaccountable discretion it replaced. Before the spreadsheet, after all, institutions ran on the untested judgment of insiders, and that judgment was often arbitrary, self-serving, and immune to challenge. Measurement, on this view, is the price of accountability, and those who romanticize the unmeasured past forget how much cruelty and waste it concealed.\n\nThe rejoinder is not wrong, and it would be foolish to wish accountability away. But it mistakes the nature of the objection. The complaint is not that metrics are imperfect; every instrument is imperfect. The complaint is that the act of measuring something changes how it is pursued, and changes it in a direction the measure cannot capture. A doctor who knows she is graded on readmissions may simply decline to admit the sickest patients. The metric is now cleaner and the care is now worse, and no improvement to the metric can repair the damage, because the damage lies in the very fact of being measured. Better numbers do not solve this; they merely relocate it.\n\nWhat, then, is to be done? Not the abandonment of measurement, which would return us to the arbitrariness its defenders rightly fear. The wiser course is to hold every metric in deliberate suspicion—to treat it as a question rather than an answer, to rotate measures before they can be gamed, and above all to preserve a domain of judgment that no number is permitted to override. The institutions that flourish are not those with the best dashboards but those that remember the dashboard is not the road. To govern well is to know which of our purposes are too important to be entrusted to a number, and to defend those purposes from the very instruments we built to serve them.',
    questions: [
      {
        question: 'The main idea of the passage is best stated as:',
        options: [
          'Measurement is inherently fraudulent and should be abandoned by serious institutions.',
          'Because measuring a complex good distorts how it is pursued, metrics must be held in suspicion and never permitted to override judgment.',
          'Better-designed metrics will eventually solve the problems caused by flawed ones.',
          'The unaccountable judgment of insiders is always preferable to governance by numbers.',
        ],
        correctAnswer: 1,
        explanation:
          'The author argues that "the act of measuring something changes how it is pursued" in a direction the measure cannot capture, and concludes that metrics should be held "in deliberate suspicion" while preserving "a domain of judgment that no number is permitted to override." The answer tying the distortion of pursuit to suspicion of metrics and a protected domain of judgment captures both the diagnosis and the prescription. The answer calling measurement inherently fraudulent and urging its abandonment overstates: the author explicitly rejects "abandonment of measurement." The answer promising that better-designed metrics will eventually solve the problem is the defenders’ view the author refutes ("Better numbers do not solve this"). The answer preferring insiders’ unaccountable judgment inverts the author, who concedes the unmeasured past concealed "cruelty and waste."',
        skill: 'main-idea',
        needsReview: false,
      },
      {
        question: 'The author insists that the teachers and doctors described are "not" committing fraud chiefly in order to:',
        options: [
          'absolve institutions of any responsibility for poor outcomes',
          'argue that measurement has no effect on professional behavior',
          'locate the problem in the system of incentives rather than in individual dishonesty',
          'praise professionals for resisting the pressure to game metrics',
        ],
        correctAnswer: 2,
        explanation:
          'The text says the actors are "responding sensibly to the incentives they face" and that "the fault lies upstream"—in the conviction that a complex good can be governed by its shadow. The "not fraud" point relocates blame from individuals to system design. The answer locating the problem in the system of incentives rather than in individual dishonesty states this. The answer absolving institutions of any responsibility is wrong: the author blames the institution’s upstream conviction, not no one. The answer denying that measurement affects professional behavior contradicts the whole passage. The answer praising professionals for resisting the pressure to game metrics reverses the example—the professionals do respond to the metric, just rationally.',
        skill: 'paragraph-function',
        needsReview: false,
      },
      {
        question: 'Which finding, if true, would most WEAKEN the author’s central claim?',
        options: [
          'In several fields, tying rewards to a metric produced sustained gains in the underlying goal without measurable distortion.',
          'Schools that adopted standardized testing saw test scores rise sharply within two years.',
          'Hospital administrators report that they value readmission data.',
          'Most teachers say they dislike being evaluated by test scores.',
        ],
        correctAnswer: 0,
        explanation:
          'The author’s core claim is that measuring distorts pursuit of the underlying good. Evidence that rewarding a metric "produced sustained gains in the underlying goal without measurable distortion" directly contradicts that mechanism. The finding that test scores rose sharply after standardized testing arrived is consistent with the author, who predicts scores rise even as education decays. The findings that administrators value readmission data and that teachers dislike test-score evaluation concern attitudes toward metrics, not whether metrics distort the underlying good, so they leave the thesis untouched.',
        skill: 'strengthen-weaken',
        needsReview: false,
      },
      {
        question: 'The author’s overall stance toward the "defenders of measurement" is best characterized as:',
        options: [
          'dismissive, treating their position as obviously mistaken',
          'indifferent to the merits of their argument',
          'fully persuaded by their rejoinder',
          'partly conceding their point while denying that it answers the real objection',
        ],
        correctAnswer: 3,
        explanation:
          'The author grants that "the rejoinder is not wrong" and that "it would be foolish to wish accountability away," yet insists it "mistakes the nature of the objection." That is partial concession plus rebuttal, exactly what the answer pairing concession with a denial that it answers the real objection describes. Calling the author dismissive is too harsh; he calls their point reasonable. Calling him fully persuaded is wrong, because he ultimately rejects their conclusion. Calling him indifferent ignores the sustained engagement with their argument across two paragraphs.',
        skill: 'tone-attitude',
        needsReview: false,
      },
      {
        question: 'Based on the passage, which institutional practice would the author most likely endorse?',
        options: [
          'Selecting a single optimal metric and tying all rewards tightly to it for maximal clarity',
          'Periodically rotating the measures used so that none becomes entrenched enough to be gamed',
          'Eliminating all quantitative measures in favor of insider judgment',
          'Publishing dashboards as the definitive account of an institution’s performance',
        ],
        correctAnswer: 1,
        explanation:
          'The author recommends to "rotate measures before they can be gamed" and to "hold every metric in deliberate suspicion." The answer about periodically rotating measures so none becomes entrenched is a direct paraphrase. Selecting a single optimal metric and tying all rewards to it is the opposite—locking in one rewarded metric invites exactly the gaming the author warns of. Eliminating all quantitative measures contradicts the explicit refusal to abandon measurement. Publishing dashboards as the definitive account treats the dashboard as the answer, when the author insists "the dashboard is not the road."',
        skill: 'application',
        needsReview: false,
      },
      {
        question: 'In the final sentence, "defend those purposes from the very instruments we built to serve them" most nearly means:',
        options: [
          'abandon any purpose that cannot be precisely quantified',
          'replace human judgment with more sophisticated measuring instruments',
          'protect important goals from being corrupted by the metrics meant to track them',
          'build better instruments so that purposes need no defending',
        ],
        correctAnswer: 2,
        explanation:
          'Throughout, the "instruments" are the metrics, and the danger is that they displace the goals they were proxies for. "Defend those purposes from… those instruments" thus means shielding important goals from corruption by their own metrics. The answer about protecting important goals from corruption by the metrics meant to track them captures this. Replacing human judgment with more sophisticated instruments reverses it (the author distrusts over-reliance on instruments). Abandoning any purpose that cannot be precisely quantified echoes the "tyranny of the measurable" the author opposes. Building better instruments so that purposes need no defending restates the defenders’ faith that better numbers fix the problem, which the author denies.',
        skill: 'meaning-in-context',
        needsReview: false,
      },
    ],
    needsReview: false,
  },
  {
    id: 'cars-ss-03',
    section: 'cars',
    discipline: 'economics',
    title: 'The Price of Everything',
    passageText:
      'It is an article of faith among economists that markets, left to themselves, allocate resources to those who value them most. The argument is elegant. A price is information; it tells producers what to make and consumers what to forgo, coordinating millions of decisions no planner could hope to oversee. Whoever is willing to pay the most for a thing reveals, by that willingness, that the thing is worth more to him than to anyone else, and so the market, in handing it over, has done the work of justice without anyone having to administer it.\n\nThe elegance conceals a substitution. “Willingness to pay” and “valuing most” are quietly treated as the same quantity, when in fact they diverge wherever wealth is unequal. A loaf of bread is worth more to a starving pauper than to a sated millionaire by any humane measure of value, yet the millionaire can outbid the pauper without noticing the expense. The market does not register how much each wants the bread; it registers how much each can pay, and these coincide only in a world where everyone begins with the same purse. In our world they come apart, and the market’s claim to deliver goods to those who value them most collapses into the far less inspiring claim that it delivers goods to those who can afford them.\n\nA defender of markets will answer that this confuses the criterion with the conditions. The market mechanism is efficient given any distribution of wealth; if the distribution is unjust, the remedy is to redistribute purchasing power, not to abandon prices. Fix the starting line, and the race is fair. The point is fair as far as it goes, and it concedes more than its proponents notice, for it admits that market outcomes are only as just as the holdings people bring to them—that the market launders prior inequality rather than dissolving it.\n\nBut there is a deeper difficulty the redistributive answer cannot reach. Some goods are corrupted by being priced at all. When a thing that ought to be given—a kidney, a vote, a friendship, a place at university—is offered for sale, the sale does not merely transfer it; it changes what the thing is. A purchased honor is not the honor it imitates. To put such goods on the market is not to distribute them unjustly but to degrade them, and no equalizing of purses can undo that degradation, because the wrong lies in the pricing itself, not in who can pay.\n\nHere the economist may protest that this smuggles contested moral judgments into what should be a neutral science. The protest has force, but it cuts both ways. The claim that markets are neutral instruments, indifferent to the goods they circulate, is itself a moral judgment—and a convenient one, since it spares its holder the labor of deciding which goods belong in the market and which do not. The choice cannot be evaded. To price a thing is already to have decided that it is the kind of thing that may be priced, and that decision is never the market’s to make. It is ours, and pretending otherwise does not make us neutral; it only makes us irresponsible.',
    questions: [
      {
        question: 'The central argument of the passage is that:',
        options: [
          'the market’s claim to serve those who value goods most rests on a confusion, and some goods are degraded by being priced at all',
          'markets are the most just mechanism yet devised for allocating scarce resources',
          'all inequality could be eliminated by redistributing purchasing power before market exchange',
          'economics should abandon the concept of price entirely',
        ],
        correctAnswer: 0,
        explanation:
          'The passage advances two linked claims: that "willingness to pay" is wrongly equated with "valuing most" (a confusion exposed by unequal wealth), and that some goods are "corrupted by being priced at all." The answer joining that confusion to the degradation of certain goods states both. The answer calling markets the most just allocation mechanism is the faith the author critiques. The answer that redistributing purchasing power would eliminate all inequality is the redistributive reply the author calls inadequate to the "deeper difficulty." The answer urging economics to abandon price entirely overstates—the author critiques the moral reach of pricing, never calls for abolishing prices.',
        skill: 'main-idea',
        needsReview: false,
      },
      {
        question: 'Which of the following findings, if true, would most WEAKEN the author’s claim about goods that are "corrupted by being priced at all"?',
        options: [
          'Wealthy buyers can outbid poorer ones for scarce medicines because they have more purchasing power.',
          'Redistributing income before exchange leaves the underlying price mechanism intact.',
          'University admissions offices already weigh applicants’ ability to pay tuition.',
          'Recipients of a transplanted kidney report the same gratitude and sense of its worth whether the organ was donated or purchased.',
        ],
        correctAnswer: 3,
        explanation:
          'The "corruption" thesis holds that pricing certain goods "changes what the thing is"—"a purchased honor is not the honor it imitates." Evidence that a purchased kidney is experienced as identical in worth to a donated one suggests pricing did NOT change the good, undercutting that claim. The finding that wealthy buyers outbid poorer ones for scarce medicines is an inequality-of-purchasing-power case, the shallower objection the author says redistribution could address—it leaves the degradation thesis untouched. The observation that admissions offices already weigh ability to pay is true-in-reality but does not test whether pricing degrades the good. The point that redistribution leaves the price mechanism intact restates the remedy the author already grants cannot reach this difficulty.',
        skill: 'strengthen-weaken',
        needsReview: false,
      },
      {
        question: 'The author claims the redistributive defense of markets "concedes more than its proponents notice" because it:',
        options: [
          'proves that redistribution is impossible in practice',
          'admits that market outcomes are only as just as the wealth people bring to them',
          'shows that markets are perfectly just regardless of the distribution of wealth',
          'abandons the idea that prices convey information',
        ],
        correctAnswer: 1,
        explanation:
          'The author says the defense "admits that market outcomes are only as just as the holdings people bring to them—that the market launders prior inequality rather than dissolving it." The answer that outcomes are only as just as the wealth people bring restates this concession. The claim that redistribution is impossible in practice is never made; the author treats redistribution as possible but insufficient. The claim that markets are perfectly just regardless of distribution is the very view the concession undermines. The claim about abandoning prices-as-information concerns the elegance argument, which is not what the concession addresses.',
        skill: 'inference',
        needsReview: false,
      },
      {
        question: 'What is the primary purpose of the fourth paragraph (beginning "But there is a deeper difficulty")?',
        options: [
          'To restate the inequality objection in stronger terms',
          'To concede that the redistributive defense fully resolves the author’s concerns',
          'To introduce a distinct objection—that pricing certain goods degrades them—that redistribution cannot answer',
          'To argue that all goods are corrupted by being exchanged',
        ],
        correctAnswer: 2,
        explanation:
          'The paragraph opens by announcing "a deeper difficulty the redistributive answer cannot reach," then argues that pricing certain goods "changes what the thing is" so that "no equalizing of purses can undo that degradation." This is a new and distinct line of attack, not a restatement of the inequality objection in stronger terms. It deepens the critique rather than conceding that the redistributive defense resolves the author’s concerns. And it concerns only certain goods—"a kidney, a vote, a friendship"—not all goods exchanged.',
        skill: 'paragraph-function',
        needsReview: false,
      },
      {
        question: 'The author would most likely regard which of the following as the BEST illustration of the "deeper difficulty"?',
        options: [
          'A poor family is outbid for housing by a wealthier one.',
          'A scarce medication is sold at a price only the rich can afford.',
          'A government redistributes income before allowing market exchange.',
          'A university openly auctions its admissions offers to the highest bidders.',
        ],
        correctAnswer: 3,
        explanation:
          'The "deeper difficulty" concerns goods "corrupted by being priced at all," and the author lists "a place at university" among them, noting "a purchased honor is not the honor it imitates." Auctioning admissions degrades the good itself. The family outbid for housing and the medication priced beyond the poor are inequality-of-purchasing-power cases—the earlier, shallower objection that redistribution could in principle address. A government redistributing income before exchange is the proposed remedy, not an instance of the difficulty.',
        skill: 'application',
        needsReview: false,
      },
      {
        question: 'When the author writes that the claim of market neutrality is "convenient," the tone conveyed is best described as:',
        options: [
          'pointedly critical, implying the claim lets its holder evade responsibility',
          'admiring of the intellectual rigor behind the claim',
          'detached and strictly descriptive',
          'apologetic about challenging established economics',
        ],
        correctAnswer: 0,
        explanation:
          'The author calls neutrality "a convenient one, since it spares its holder the labor of deciding which goods belong in the market," and closes that pretending otherwise "only makes us irresponsible." "Convenient" is sardonic, charging evasion. Reading the remark as admiring the claim’s intellectual rigor reverses the valence. Calling it detached and strictly descriptive ignores the clearly critical edge. Calling it apologetic mischaracterizes the confident, unapologetic challenge the author mounts.',
        skill: 'tone-attitude',
        needsReview: false,
      },
    ],
    needsReview: false,
  },
  {
    id: 'cars-ss-04',
    section: 'cars',
    discipline: 'political science',
    title: 'Representation and Its Discontents',
    passageText:
      'We speak of representative government as though its meaning were settled, but the word “represent” hides a quarrel as old as the institution itself. To represent a constituency might mean to mirror its opinions, voting as the majority back home would vote, a faithful conduit carrying their will to the capital. Or it might mean to exercise independent judgment on their behalf, deciding as they would decide if they possessed the time, information, and detachment that office affords. These two ideals—the delegate and the trustee—are not variations on a theme. They are rivals, and no constitution has ever fully reconciled them.\n\nThe delegate model wears the brighter democratic colors. It treats the representative as a servant, not a sovereign, and recoils at the spectacle of an official substituting his preferences for those who sent him. If the people are to rule, the argument runs, then their representatives must do as the people wish; any other arrangement is rule by an elite wearing a democratic costume. There is something bracing in this candor. It refuses the comfortable fiction that the powerful know better, and insists that legitimacy flows upward from the governed or not at all.\n\nYet the model carries a flaw it cannot easily admit. The “will of the constituency” it venerates is rarely the stable, knowable thing the argument requires. On most questions the public has no settled view; on many it has no view at all, until pollsters and partisans manufacture one. A representative who pledges to follow the people’s will must first decide whose voice counts as the people’s—the loudest, the most organized, the most recently surveyed—and in making that choice he exercises exactly the judgment the delegate model was meant to forbid. The conduit, it turns out, cannot help shaping the current it claims merely to carry.\n\nThe trustee model meets this difficulty by embracing what the delegate denies. Burke famously told his electors that he owed them his judgment and would betray them if he sacrificed it to their opinion. The position is honest about the inevitability of judgment, and it captures something the delegate misses: that constituents elect a person, not a vending machine, and that the deliberation of an assembly is worth having only if its members can be moved by argument. A legislature of pure delegates would never deliberate at all; it would simply tally instructions received from elsewhere.\n\nBut the trustee model has its own embarrassment, and it is a grave one. Once we license the representative to override the people’s expressed wishes in the name of their true interests, we have handed him the oldest excuse of every despot, who has always claimed to know the people’s good better than they do. The line between wise independence and contemptuous paternalism is real but maddeningly hard to draw, and the trustee who crosses it can always insist he has not.\n\nPerhaps the lesson is that the tension is not a defect to be engineered away but the very thing that keeps representation honest. A system that resolved the quarrel decisively—that made representatives pure delegates or pure trustees—would lose what each model protects: accountability on one side, deliberation on the other. The discontent is not a sign that something has gone wrong. It is the sound of a necessary argument that must never be allowed to end.',
    questions: [
      {
        question: 'The passage is primarily concerned with:',
        options: [
          'demonstrating that the delegate model is clearly superior to the trustee model',
          'tracing the historical origins of representative government',
          'arguing that the unresolved tension between two models of representation is itself valuable',
          'proposing a new model that finally reconciles delegate and trustee',
        ],
        correctAnswer: 2,
        explanation:
          'The author presents both models, exposes a flaw in each, and concludes that "the tension is not a defect to be engineered away but the very thing that keeps representation honest." The answer about the unresolved tension being itself valuable captures this. Declaring the delegate model clearly superior—and the mirror-image verdict for the trustee—is rejected: each model has "its own embarrassment." Tracing the historical origins of representative government is incidental (Burke is mentioned, but history is not the focus). Proposing a new model that finally reconciles the two is precisely what the author declines to do, calling the argument one "that must never be allowed to end."',
        skill: 'main-idea',
        needsReview: false,
      },
      {
        question: 'The author argues that the delegate model "cannot help shaping the current it claims merely to carry" in order to show that:',
        options: [
          'representatives should always defer to the most recent opinion polls',
          'even a delegate must exercise the very judgment the model was meant to forbid',
          'public opinion is always stable and easy to ascertain',
          'the trustee model is logically incoherent',
        ],
        correctAnswer: 1,
        explanation:
          'The point of the "conduit cannot help shaping the current" image is that a delegate "must first decide whose voice counts as the people’s," and in doing so "exercises exactly the judgment the delegate model was meant to forbid." The answer that even a delegate must exercise the forbidden judgment states this. The answer urging permanent deference to the latest polls is the opposite of the author’s warning about "the most recently surveyed." The answer calling public opinion always stable and easy to ascertain contradicts the claim that opinion is "rarely the stable, knowable thing." The answer charging the trustee model with incoherence misattributes the charge to the wrong model.',
        skill: 'inference',
        needsReview: false,
      },
      {
        question: 'The reference to Burke telling his electors he owed them his judgment functions chiefly to:',
        options: [
          'provide a historical example that undermines the trustee model',
          'introduce a third model distinct from delegate and trustee',
          'prove that representatives should always ignore their constituents',
          'illustrate the trustee model’s honest acknowledgment of the inevitability of judgment',
        ],
        correctAnswer: 3,
        explanation:
          'Burke is offered as the trustee’s exemplar: the position "is honest about the inevitability of judgment" and recognizes that "constituents elect a person, not a vending machine." The answer about illustrating the trustee’s honest acknowledgment of judgment captures this function. Treating Burke as a historical example that undermines the trustee model reverses it—he supports it. The answer that representatives should "always ignore" their constituents overstates what the author never endorses. The answer making Burke a third model is wrong: he exemplifies the trustee, not a new alternative.',
        skill: 'paragraph-function',
        needsReview: false,
      },
      {
        question: 'The author’s attitude toward the trustee model is best described as:',
        options: [
          'appreciative of its insight yet alert to its danger of paternalism',
          'unreserved endorsement',
          'complete rejection as inherently despotic',
          'indifference, treating it as interchangeable with the delegate model',
        ],
        correctAnswer: 0,
        explanation:
          'The author credits the trustee model with capturing "something the delegate misses," yet warns that it hands the representative "the oldest excuse of every despot." That is balanced appreciation plus wariness. Unreserved endorsement ignores the "grave" embarrassment the author names. Complete rejection as inherently despotic overstates—the author sees genuine value, not pure despotism. Indifference contradicts the insistence that the two models are "rivals," not interchangeable.',
        skill: 'tone-attitude',
        needsReview: false,
      },
      {
        question: 'Which scenario would the author most likely cite as exemplifying the trustee model’s "grave" embarrassment?',
        options: [
          'A legislator polls her district before every vote and follows the majority.',
          'A legislator resigns because she cannot ascertain her constituents’ views.',
          'A legislator overrides her constituents’ clear wishes, insisting she knows their true interests better than they do.',
          'A legislator deliberates with colleagues but ultimately abstains.',
        ],
        correctAnswer: 2,
        explanation:
          'The trustee’s embarrassment is that licensing a representative to "override the people’s expressed wishes in the name of their true interests" gives "the oldest excuse of every despot," who claims "to know the people’s good better than they do." The legislator who overrides clear wishes while insisting she knows her constituents’ true interests matches precisely. The legislator who polls her district and follows the majority is the delegate model. The legislator who resigns and the one who abstains depict caution or withdrawal, not the paternalistic overriding the author flags.',
        skill: 'application',
        needsReview: false,
      },
      {
        question: 'In the final paragraph, the phrase "the sound of a necessary argument" most nearly conveys that the ongoing tension is:',
        options: [
          'a flaw that better institutional design will eventually silence',
          'a productive disagreement whose persistence preserves competing values',
          'a meaningless quarrel with no bearing on governance',
          'evidence that representative government has fundamentally failed',
        ],
        correctAnswer: 1,
        explanation:
          'The author calls the discontent "not a sign that something has gone wrong" but a necessary argument "that must never be allowed to end," because resolving it would forfeit "accountability on one side, deliberation on the other." The answer describing a productive disagreement whose persistence preserves competing values captures this. Calling the tension a flaw that better design will silence, or evidence that representative government has failed, treats it as a defect the author explicitly denies. Calling it a meaningless quarrel collides with the author’s own word, "necessary."',
        skill: 'meaning-in-context',
        needsReview: false,
      },
    ],
    needsReview: false,
  },
  {
    id: 'cars-ss-05',
    section: 'cars',
    discipline: 'psychology',
    title: 'The Author of the Self',
    passageText:
      'There is a story each of us tells about who we are, and we are oddly confident that we are its author. The story has a protagonist of stable character, a thread of intention running from childhood to the present, a self that chooses and is therefore responsible for its choices. This narrative is so intimate that to question it feels less like an argument than an assault. Yet a tradition of thought running from the moralists through certain modern psychologies suggests that the author we imagine is largely a fiction—and, more unsettling still, a fiction composed after the fact.\n\nThe suspicion begins with a simple observation: we are far better at explaining our behavior than at predicting or controlling it. Asked why we acted, we produce reasons with fluent confidence, reasons that hang together and flatter our sense of coherence. But the reasons are supplied by the same mind that performed the act, with every incentive to render that act intelligible and creditable. The explainer and the explained are not independent witnesses. They are the same party, and the explanation may be less a discovery of why we acted than a story assembled to make the action ours.\n\nIf this is right, the unified self is not the source of our conduct but a product of it—an interpretation we impose on a stream of impulses too various and contradictory to be the work of a single coherent agent. We are not, on this view, the captains of our behavior who occasionally rationalize. We are the rationalizers who occasionally mistake ourselves for captains.\n\nThe view has obvious power, and it should not be dismissed by anyone who has watched a friend construct a flattering motive for an unflattering deed. Yet pressed to its limit it curdles into something self-undermining. For the claim that the self is a fiction is itself the product of a self engaged in reasoning, and if all such reasoning is mere after-the-fact storytelling, then the skeptic’s own argument is just another story, with no more claim on us than the illusion it means to dispel. The deflationist who proves too much proves nothing; he saws through the branch on which his own conclusion sits.\n\nThere is a more measured position available, and it is the one the evidence actually supports. That we confabulate sometimes does not establish that we confabulate always. The narrative self may be partly constructed and still be real, in the way that a nation is constructed and still real, exerting genuine force on those who live inside it. A story we tell about ourselves can become, by the telling, a commitment that shapes what we do next—so that the fiction, once authored, begins to author us in turn. The self, on this reading, is neither the sovereign agent of folk psychology nor the pure illusion of the debunkers. It is a work in progress, written and rewritten, and no less consequential for never being finished.',
    questions: [
      {
        question: 'The author’s central claim is that the narrative self is:',
        options: [
          'partly constructed yet genuinely real and consequential',
          'the sovereign and fully reliable author of all our conduct',
          'a complete illusion that careful reasoning dissolves',
          'identical to the stream of impulses underlying behavior',
        ],
        correctAnswer: 0,
        explanation:
          'The author rejects both extremes and lands on a "more measured position": the self "may be partly constructed and still be real," "neither the sovereign agent of folk psychology nor the pure illusion of the debunkers." The answer calling the self partly constructed yet genuinely real states this. The answer calling it a complete illusion that reasoning dissolves is the debunkers’ view the author shows to be self-undermining. The answer calling it the sovereign, fully reliable author of our conduct is the folk view the author critiques. The answer identifying the self with the underlying stream of impulses conflates the self with what it interprets, which is the deflationist position, not the author’s conclusion.',
        skill: 'main-idea',
        needsReview: false,
      },
      {
        question: 'The author observes that "we are far better at explaining our behavior than at predicting or controlling it" in order to:',
        options: [
          'prove conclusively that the self is entirely a fiction',
          'demonstrate that human behavior is fundamentally random',
          'argue that prediction is the only legitimate form of self-knowledge',
          'introduce the suspicion that our self-explanations may be after-the-fact constructions',
        ],
        correctAnswer: 3,
        explanation:
          'The observation launches "the suspicion" that the explainer and the explained "are the same party," so explanations may be "a story assembled to make the action ours" rather than a discovery. The answer about introducing the suspicion that self-explanations are after-the-fact constructions states this function. The answer that the observation proves the self entirely a fiction overstates—the author later rejects that conclusion. The answer making prediction the only legitimate self-knowledge invents a claim of primacy never made. The answer about behavior being fundamentally random is never argued; the issue is rationalization, not randomness.',
        skill: 'paragraph-function',
        needsReview: false,
      },
      {
        question: 'According to the passage, the deflationist position "proves too much" because:',
        options: [
          'it relies on experiments that have failed to replicate',
          'it underestimates how often people rationalize their behavior',
          'if all reasoning is mere after-the-fact storytelling, then the deflationist’s own argument is just another story',
          'it depends on a definition of the self that no one accepts',
        ],
        correctAnswer: 2,
        explanation:
          'The author argues the claim "that the self is a fiction is itself the product of a self engaged in reasoning," so if all such reasoning is "mere after-the-fact storytelling," the skeptic’s argument "is just another story… he saws through the branch on which his own conclusion sits." The answer turning the storytelling claim back on the deflationist’s own argument captures this self-refutation. The answer about experiments failing to replicate invokes evidence the passage never cites. The answer that the view underestimates how often people rationalize reverses the charge—the author thinks the deflationist overreaches. The answer about an unaccepted definition of the self names a different objection not in the text.',
        skill: 'inference',
        needsReview: false,
      },
      {
        question: 'The author compares the constructed self to a nation primarily to make the point that:',
        options: [
          'something can be constructed and still exert genuine, real force',
          'nations and selves are both ultimately illusions',
          'the self is governed by political institutions',
          'collective identities are more real than individual ones',
        ],
        correctAnswer: 0,
        explanation:
          'The analogy says the narrative self "may be partly constructed and still be real, in the way that a nation is constructed and still real, exerting genuine force on those who live inside it." The shared feature is being constructed yet consequential. The answer calling nations and selves alike illusions inverts the point—the comparison establishes reality, not illusion. The answer about the self being governed by political institutions reads "nation" too literally. The answer ranking collective identities above individual ones introduces a comparison the analogy never asserts.',
        skill: 'application',
        needsReview: false,
      },
      {
        question: 'The author’s attitude toward the deflationist (debunking) view is best described as:',
        options: [
          'wholly dismissive from the outset',
          'initially respectful but ultimately judging it to overreach',
          'fully persuaded and adopting it as the conclusion',
          'uninterested in evaluating its merits',
        ],
        correctAnswer: 1,
        explanation:
          'The author grants the view "obvious power" and says it "should not be dismissed," then argues that "pressed to its limit it curdles into something self-undermining." That is respect followed by a measured rejection of its overreach. Calling the author wholly dismissive from the outset ignores his explicit refusal to dismiss the view. Calling him fully persuaded is wrong—his conclusion is the "more measured position," not the deflationist one. Calling him uninterested contradicts the careful engagement throughout.',
        skill: 'tone-attitude',
        needsReview: false,
      },
      {
        question: 'In context, the statement that the fiction, "once authored, begins to author us in turn" most nearly means that:',
        options: [
          'self-narratives are written by external authorities rather than by us',
          'the self is finished and unchangeable once the story is complete',
          'fiction and reality can never be meaningfully distinguished',
          'a self-story, once told, becomes a commitment that shapes our future conduct',
        ],
        correctAnswer: 3,
        explanation:
          'The surrounding sentence explains that "a story we tell about ourselves can become, by the telling, a commitment that shapes what we do next." The reversal—we author the story, then it authors us—means the narrative feeds back to shape behavior, which is what the answer about a self-story becoming a commitment says. The answer about narratives written by external authorities misreads "author us" as authorship by someone else. The answer that fiction and reality can never be distinguished overgeneralizes into a claim the author does not make. The answer calling the self finished and unchangeable contradicts the closing image of a self "never being finished."',
        skill: 'meaning-in-context',
        needsReview: false,
      },
    ],
    needsReview: false,
  },
  {
    id: 'cars-ss-06',
    section: 'cars',
    discipline: 'linguistics',
    title: 'The Grammar of the Possible',
    passageText:
      'Does the language we speak shape the thoughts we are able to think? The question has a long and embarrassing history. In its boldest form—the claim that speakers of different languages inhabit incommensurable worlds, each imprisoned by its grammar—the idea was advanced with more enthusiasm than evidence, and it deserved the deflation it received. If language truly imprisoned thought, translation would be impossible and learning a second tongue would amount to acquiring a second mind. Neither is the case. We translate, imperfectly but really; we learn new languages and remain recognizably ourselves. The strong thesis is false, and few now defend it.\n\nIt would be a mistake, though, to conclude from the collapse of the strong claim that language exerts no influence on thought whatever. The retreat from imprisonment need not end in indifference. A weaker and more defensible proposition survives the wreckage: that language does not determine what we can think but does nudge what we tend to think, by making some distinctions habitual and effortless and leaving others to be constructed laboriously, if at all. A language that obliges its speakers to mark, in every sentence, whether an event was witnessed or merely reported does not forbid its speakers from doubting; it simply makes the question of evidence harder to ignore. The grammar does not build a prison. It lays down a path of least resistance, and paths, while they can be left, are usually followed.\n\nThe distinction matters because the two theses invite opposite errors. The strong thesis tempts us to exoticize, to treat speakers of unfamiliar languages as alien intelligences we can never truly meet. The flat denial tempts us to the opposite condescension: to assume that beneath every grammar lies the same universal mind, merely dressed in different clothes, so that nothing is lost in translation and nothing distinctive is gained by attending to a particular tongue. Both errors flatter the theorist by relieving him of difficulty. The first lets him stop trying to understand; the second lets him stop noticing.\n\nSkeptics raise a fair objection. If language merely nudges, they ask, how could we ever measure so subtle a force, and might not any apparent effect be the residue of culture, geography, or history rather than grammar itself? The worry is genuine and should keep us modest. Yet it proves less than it pretends. That a cause is hard to isolate is not evidence that it is absent; the difficulty of disentangling language from culture is a difficulty in our methods, not a discovery about the world. To treat unmeasurability as nonexistence would retire half the questions worth asking.\n\nWhat remains, when the dust settles, is a chastened and more interesting picture. Language is neither a prison nor a transparent window. It is more like a well-worn footpath across a field: it does not wall off the rest of the meadow, but it makes one route so much easier than the others that most travelers, most of the time, will take it without reflecting that they might have gone another way. To study a language, on this view, is not to map the limits of a mind but to notice the habits of one—and habits, unlike walls, are the kind of thing a thinker can come to see, and having seen, revise.',
    questions: [
      {
        question: 'The main idea of the passage is that:',
        options: [
          'language determines the boundaries of what its speakers can think',
          'language has no measurable effect on thought and should be ignored by theorists',
          'language does not determine thought but does incline speakers toward certain habitual distinctions',
          'translation between languages is fundamentally impossible',
        ],
        correctAnswer: 2,
        explanation:
          'The author rejects the "strong thesis" (language imprisons thought) and the "flat denial" (language has no influence), defending instead that language "does not determine what we can think but does nudge what we tend to think." The answer denying determination while affirming habitual inclination states this. The answer that language determines the boundaries of thought is the strong thesis the author calls false. The answer that language has no measurable effect and should be ignored is the flat denial the author also rejects. The answer calling translation fundamentally impossible follows from the strong thesis, which the author refutes by noting "we translate, imperfectly but really."',
        skill: 'main-idea',
        needsReview: false,
      },
      {
        question: 'The author argues that the strong "imprisonment" thesis is false chiefly on the grounds that:',
        options: [
          'translation and second-language learning are both possible',
          'no two languages share any vocabulary',
          'all languages descend from a common ancestor',
          'grammar has no effect on habitual thought',
        ],
        correctAnswer: 0,
        explanation:
          'The author reasons that "if language truly imprisoned thought, translation would be impossible and learning a second tongue would amount to acquiring a second mind," but "neither is the case." The possibility of translation and language-learning is the disproof. The answers about shared vocabulary and a common linguistic ancestor make claims the passage never asserts. The answer that grammar has no effect on habitual thought is the flat-denial position, which the author also rejects—not the basis for refuting the strong thesis.',
        skill: 'inference',
        needsReview: false,
      },
      {
        question: 'What is the primary purpose of the third paragraph, which contrasts "exoticizing" with "condescension"?',
        options: [
          'To recommend that linguists stop studying unfamiliar languages',
          'To prove that the strong thesis is correct after all',
          'To argue that translation is always perfectly accurate',
          'To show that both the strong thesis and its flat denial lead to opposite mistakes',
        ],
        correctAnswer: 3,
        explanation:
          'The paragraph states the two theses "invite opposite errors": the strong thesis "tempts us to exoticize," the flat denial "to the opposite condescension," and "both errors flatter the theorist." Its purpose is to show that each extreme leads to a distinct mistake, motivating the middle position. Vindicating the strong thesis and declaring translation always perfectly accurate both contradict the author. Recommending that linguists stop studying unfamiliar languages inverts the conclusion, which is to attend more carefully to particular tongues, not to stop.',
        skill: 'paragraph-function',
        needsReview: false,
      },
      {
        question: 'In responding to the skeptics, the author maintains that:',
        options: [
          'a cause that is hard to isolate must therefore be absent',
          'the difficulty of isolating language’s effect is a limit of method, not proof of its absence',
          'subtle effects are always more important than obvious ones',
          'only effects that can be precisely measured are worth studying',
        ],
        correctAnswer: 1,
        explanation:
          'The author answers that "the difficulty of disentangling language from culture is a difficulty in our methods, not a discovery about the world," and that treating "unmeasurability as nonexistence would retire half the questions worth asking." The answer treating the difficulty as a limit of method states this. The answer inferring absence from a cause being hard to isolate is the skeptics’ inference the author rejects. The answer ranking subtle effects above obvious ones overstates—the author never makes that comparison. The answer restricting study to precisely measurable effects is the very stance the author opposes.',
        skill: 'inference',
        needsReview: false,
      },
      {
        question: 'A new study shows that speakers of a language requiring constant marking of evidence are no quicker than other speakers to question unsupported claims. This finding would most directly:',
        options: [
          'weaken the author’s weaker "nudging" thesis',
          'strengthen the author’s weaker "nudging" thesis',
          'confirm the strong "imprisonment" thesis',
          'have no bearing on any claim in the passage',
        ],
        correctAnswer: 0,
        explanation:
          'The author offers exactly this case as an illustration of nudging: a grammar that obliges marking of evidence "makes the question of evidence harder to ignore." If such speakers are "no quicker" to question unsupported claims, the predicted nudge fails to appear, so the nudging thesis is weakened. The strengthening answer reverses the effect. The answer that the finding confirms the strong "imprisonment" thesis is wrong—that thesis predicts determination, not a measurable nudge, and a null result does not support it. The answer that the finding has no bearing on the passage is wrong, because it bears squarely on the nudging claim.',
        skill: 'strengthen-weaken',
        needsReview: false,
      },
      {
        question: 'The closing image of language as "a well-worn footpath across a field" is meant to convey that language:',
        options: [
          'walls off regions of thought that speakers can never reach',
          'has no influence on which thoughts speakers tend to have',
          'makes one route far easier than others without forbidding the alternatives',
          'is a transparent window that adds nothing to thought',
        ],
        correctAnswer: 2,
        explanation:
          'The footpath "does not wall off the rest of the meadow, but it makes one route so much easier than the others that most travelers… will take it." The image expresses ease-without-prohibition, which the answer about making one route far easier without forbidding the alternatives states. The answer about walling off regions of thought speakers can never reach is the prison metaphor the author rejects. The answers denying any influence and calling language a transparent window restate the flat denial; but the author insists the path is followed "most of the time," i.e., language does influence habitual thought.',
        skill: 'meaning-in-context',
        needsReview: false,
      },
    ],
    needsReview: false,
  },
  {
    id: 'cars-ss-07',
    section: 'cars',
    discipline: 'sociology of expertise',
    title: 'The Credential and the Craft',
    needsReview: true,
    passageText: `A curious inversion has overtaken the way modern societies certify competence. The credential — degree, license, board certification — began as a proxy: an efficient signal that its holder had probably acquired a craft too complex for outsiders to assess directly. Proxies are useful precisely because they are cheap to check. But a proxy that becomes cheap enough to check eventually becomes the thing employers, patients, and courts actually consult, and at that point a slow substitution begins: the signal stops standing for the craft and starts standing in for it.

The substitution is visible at both ends of working life. At entry, occupations that once trained novices through apprenticeship — journalism, software, midwifery — now filter them through classroom credentials whose content practitioners routinely describe as remote from the work. At the far end, the veteran whose skill everyone acknowledges but whose paperwork has lapsed becomes, overnight, officially incompetent. Neither case involves any change in what anyone can do. What changed is which fact about a person the institution is able to see.

Defenders of credentialism answer that the alternative is worse: without standardized gates, hiring collapses into nepotism and quackery flourishes. The history is on their side more than critics like to admit. The licensing of physicians, whatever its guild motives, coincided with the disappearance of a genuinely lethal trade in patent medicine. A society that cannot check craft directly must check something, and a flawed public standard beats a private handshake.

But this defense, sound as far as it goes, licenses far less than the current regime. It justifies gates where incompetence is catastrophic and consumers cannot judge — surgery, structural engineering. It does not justify the creep of licensure into occupations — hair braiding, interior design, flower arranging in at least one American state — where the catastrophic case is absent and the consumer is a perfectly competent judge. There the gate does not protect the public from the incompetent; it protects incumbents from competition, and it taxes precisely those entrants least able to pay: the talented poor, for whom the apprenticeship route was the historical door into the middle class.

What would reform look like? Not abolition — the defenders are right about surgeons. The reform is to restore the credential to its proxy status: to multiply the routes by which craft can become visible, so that no single gate monopolizes recognition. Portfolios, examinations open to the self-taught, provisional practice under supervision — each makes the signal answerable again to the thing it signals. A credential that fears such competition has confessed what it actually certifies.`,
    questions: [
      {
        question: 'The passage\'s central argument is that credentials:',
        options: [
          'should be abolished because they no longer measure competence',
          'should be returned to their role as one signal of competence among several, rather than its sole gatekeeper',
          'are the only reliable protection against quackery',
          'matter at the start of a career but not at its end',
        ],
        correctAnswer: 1,
        explanation: 'The reform proposed is "to restore the credential to its proxy status: to multiply the routes by which craft can become visible." The abolition answer is explicitly rejected ("Not abolition"); calling credentials the only reliable protection against quackery is the defenders\' overreach; saying they matter at a career\'s start but not its end contradicts the lapsed-paperwork example.',
        skill: 'main-idea',
      },
      {
        question: 'The author cites the licensing of physicians primarily to:',
        options: [
          'show that guild motives always corrupt licensing',
          'argue that surgery should be deregulated',
          'prove that patent medicine was harmless',
          'concede a genuine success of credentialism before limiting its scope',
        ],
        correctAnswer: 3,
        explanation: 'It appears in the defenders\' favor — "The history is on their side more than critics like to admit" — before the author narrows what the defense licenses. The readings that guild motives always corrupt licensing, that patent medicine was harmless, and that surgery should be deregulated each reverse the passage.',
        skill: 'function',
      },
      {
        question: 'It can be inferred that the author regards the licensing of hair braiding as:',
        options: [
          'protection of incumbents rather than of consumers',
          'a helpful signal in a market consumers cannot judge',
          'an unfortunate but necessary cost of public safety',
          'justified by the catastrophic risk of incompetent braiding',
        ],
        correctAnswer: 0,
        explanation: 'Hair braiding heads the list of occupations where "the gate does not protect the public from the incompetent; it protects incumbents from competition." The other options apply the surgeon-case logic the author explicitly withholds from such occupations.',
        skill: 'inference',
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author\'s reform proposal?',
        options: [
          'Licensing fees fund continuing education programs',
          'Some credentialed practitioners are incompetent',
          'In fields that adopted portfolio and examination routes, employers ignored them and continued hiring only by degree',
          'Apprenticeships were historically restricted to guild members\' relatives',
        ],
        correctAnswer: 2,
        explanation: 'The proposal depends on alternative routes making craft visible and breaking the monopoly; if institutions ignore those routes, the reform fails in practice. That some credentialed practitioners are incompetent supports the author; licensing fees funding continuing education is minor; the restriction of apprenticeships to guild members\' relatives complicates the apprenticeship aside but not the proposal itself.',
        skill: 'strengthen-weaken',
      },
      {
        question: 'The sentence "A credential that fears such competition has confessed what it actually certifies" most nearly means that:',
        options: [
          'credentials should be kept secret from competitors',
          'resisting alternative routes reveals that the credential protects position rather than verifies skill',
          'certification exams are too easy to pass',
          'fear is a poor qualification for professional work',
        ],
        correctAnswer: 1,
        explanation: 'If the credential truly certified craft, other ways of demonstrating craft would not threaten it; fearing them "confesses" it certifies incumbency. The other readings are literalisms.',
        skill: 'meaning-in-context',
      },
      {
        question: 'A state legislature is debating whether to require a two-year certificate for app-based dog groomers. Based on the passage, the author would most likely ask FIRST whether:',
        options: [
          'incumbent groomers support the requirement',
          'other states have adopted similar requirements',
          'the certificate program is affordable',
          'incompetent grooming poses catastrophic, hard-to-judge risks to consumers',
        ],
        correctAnswer: 3,
        explanation: 'The author\'s test for justified gates: catastrophic stakes plus consumers who cannot judge. Incumbent groomers\' support might signal protectionism but is not the author\'s threshold question; the program\'s affordability and other states\' practice are secondary.',
        skill: 'application',
      },
    ],
  },
  {
    id: 'cars-ss-08',
    section: 'cars',
    discipline: 'economic history',
    title: 'The Tyranny of the Standard Gauge',
    needsReview: true,
    passageText: `Standardization is the great invisible achievement of industrial civilization. That any bolt fits any matching nut, that a shipping container lifts from a Shanghai crane onto a Rotterdam truck, that this page renders on a thousand different screens — each is a quiet treaty among strangers, and the treaties compound: every standard makes the next one cheaper to adopt. Economists celebrate these "network effects" and they are right to. I want to dwell instead on what the celebration omits: a standard is also a decision about whose way of doing things becomes everyone\'s, taken at a moment when no one can foresee what it will cost to have decided.

The railway gauge is the canonical case. The width between British rails — famously traceable to the axle of the horse cart — was not the best of the candidate gauges; engineers at the time argued that a broader gauge ran faster and steadier, and the Great Western Railway proved them right for decades. It lost anyway. Once enough track existed, the cost of incompatibility exceeded the benefit of superiority, and the better system was torn up mile by mile. The economists\' term is "lock-in," and the term\'s blandness conceals its meaning: a network can permanently entrench its own first draft.

Notice when the entrenchment happens: early, when adoption is scattered and the eventual scale is invisible. The QWERTY keyboard was arranged, in part, around the mechanical constraints of nineteenth-century typebars; the constraint vanished, the arrangement did not. No one chose QWERTY for the billions who now type on glass; the billions inherited a solution to a problem they have never had. This is the temporal asymmetry at the heart of standardization: the deciders are few and early, the bound are many and late, and the two groups never meet.

It is tempting to conclude that we should therefore standardize late and lightly. But delay has its own casualties. Fire hoses in neighboring American cities once had incompatible couplings; when Baltimore burned in 1904, engines from Washington and Philadelphia stood by uselessly while their threads failed to mate with Baltimore\'s hydrants. Waiting for the best standard can mean burning while the committees deliberate. The dilemma is genuine: standardize early and you may entrench a first draft forever; standardize late and the interregnum exacts its price in Baltimores.

What the dilemma teaches is not a rule but a discipline: to treat every standard as provisional infrastructure — to build, where cost allows, the adapters, the gauge-changing axles, the escape hatches that keep a treaty from becoming a prison. The standards that age best are the ones written by authors who assumed they would someday be wrong.`,
    questions: [
      {
        question: 'Which of the following best states the main idea of the passage?',
        options: [
          'Standardization delivers enormous benefits but entrenches early choices, so standards should be designed with their own revision in mind',
          'Standardization should be delayed until the best option is identified',
          'Network effects ensure that the best technical standard eventually prevails',
          'The railway gauge and QWERTY keyboard were deliberate frauds imposed on the public',
        ],
        correctAnswer: 0,
        explanation: 'The closing paragraph gives the thesis: treat standards as "provisional infrastructure" with escape hatches. The claim that network effects ensure the best standard prevails is refuted by the gauge case (the better system lost); the counsel to delay until the best option is identified is rejected via Baltimore; calling the gauge and QWERTY deliberate frauds misreads inheritance as fraud.',
        skill: 'main-idea',
      },
      {
        question: 'The author includes the 1904 Baltimore fire in order to:',
        options: [
          'prove that fire safety requires federal regulation',
          'illustrate another case of lock-in like the railway gauge',
          'show the cost of failing to standardize, complicating the case against early standardization',
          'demonstrate that neighboring cities rarely cooperate',
        ],
        correctAnswer: 2,
        explanation: 'Baltimore is the counterweight: "delay has its own casualties." It is the OPPOSITE of a lock-in case like the railway gauge — it is the no-standard case; the federal-regulation and cities-rarely-cooperate readings generalize beyond the passage.',
        skill: 'function',
      },
      {
        question: 'The passage suggests that the "temporal asymmetry" of standardization refers to the fact that:',
        options: [
          'older standards are always technically inferior to newer ones',
          'those who set a standard are few and act early, while those bound by it are many and come later',
          'early adopters pay more than late adopters',
          'standards decay over time unless renewed',
        ],
        correctAnswer: 1,
        explanation: 'Stated nearly verbatim: "the deciders are few and early, the bound are many and late, and the two groups never meet." The other options describe different (unclaimed) asymmetries.',
        skill: 'inference',
      },
      {
        question: 'Which of the following, if true, would most STRENGTHEN the author\'s closing recommendation?',
        options: [
          'Shipping containers come in two standard lengths',
          'Most standards committees include engineers',
          'The QWERTY layout can be learned in a week',
          'Industries that built adapter mechanisms into early standards later migrated to superior technologies at far lower cost',
        ],
        correctAnswer: 3,
        explanation: 'The recommendation is escape hatches/adapters as provisional infrastructure; evidence that they enable cheap migration directly supports it. The findings about engineers on committees, QWERTY\'s learnability, and container lengths are neutral details.',
        skill: 'strengthen-weaken',
      },
      {
        question: 'The author\'s attitude toward the economists\' celebration of network effects is best described as:',
        options: [
          'wholesale rejection of the economic analysis',
          'amused indifference',
          'agreement with the celebration, paired with insistence on what it leaves out',
          'envy of the economists\' influence',
        ],
        correctAnswer: 2,
        explanation: '"They are right to. I want to dwell instead on what the celebration omits" — endorsement plus supplement. Not rejection, indifference, or envy.',
        skill: 'tone',
      },
      {
        question: 'A consortium is defining the charging connector for a new class of electric aircraft, expecting mass adoption within twenty years. Which proposal is most consistent with the passage\'s final recommendation?',
        options: [
          'Delay any standard until the objectively best connector is proven',
          'Adopt a workable connector now, but require every port to accept a standardized adapter module that can host future connector designs',
          'Let each manufacturer use a proprietary connector indefinitely',
          'Copy the existing automotive connector because it is already widespread',
        ],
        correctAnswer: 1,
        explanation: 'Standardize now (avoiding Baltimores) while building the escape hatch (avoiding gauge-style lock-in) — exactly "provisional infrastructure." Delaying until the objectively best connector is proven repeats the delay error; letting each manufacturer stay proprietary is the no-treaty world; copying the widespread automotive connector is inheritance of a first draft without a hatch.',
        skill: 'application',
      },
    ],
  },
]
