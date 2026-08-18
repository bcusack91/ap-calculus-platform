import type { MCATPassage } from '../types'

/**
 * MCAT CARS — Economics-as-argument pool.
 *
 * Six original, argument-driven passages (500-600 words each) treating economics
 * as a humanities subject: reasoning about method, value, and assumption rather
 * than about data. No quantitative interpretation is required by any item; every
 * figure mentioned is illustrative only.
 *
 * Disciplines: economic methodology, the ethics of markets, labor and the meaning
 * of work, development economics as argument, behavioral economics and the
 * rational-choice benchmark, and the critique of aggregate measurement.
 *
 * AI-authored; needsReview is true pending SME review.
 */
export const CARS_ECONOMICS_PASSAGES: MCATPassage[] = [
  {
    id: 'cars-econ-01',
    section: 'cars',
    discipline: 'economic methodology',
    title: 'The Load-Bearing Walls',
    needsReview: true,
    passageText:
      'The standard indictment of economic modeling is that its assumptions are false. People are not calculating machines; they do not hold consistent preferences over every possible future; they do not know the prices at every shop in the city. Since the models say otherwise, the models must be wrong, and the discipline built on them a kind of dressed-up arithmetic. The indictment is popular, it is satisfying, and as stated it is confused.\n\nA model is not a miniature of the world. It is an instrument for isolating a mechanism, and isolation requires distortion. The physicist who reasons about a plane without friction is not claiming that friction is imaginary; he is asking what motion would look like if friction were subtracted, so that he may recognize friction’s signature when it returns. A map drawn at a scale of one to one is not a better map. Fidelity is not the virtue in question. The virtue is that the distortions fall in places that do not touch the question being asked.\n\nThe defense is sound, and it has been worked nearly to death. For the same license — everything simplifies — can shelter a model in which the assumption is not a simplification but the conclusion in costume. Here a distinction is worth insisting on. A simplification is an omission you could in principle pay back: leave out the cost of transport, then put it in and see what changes. A smuggled premise is something else. Assume that people foresee prices correctly, and the finding that markets settle into balance is not a finding at all; it was placed among the premises before the argument began, and the model has established only that the modeler is consistent with himself.\n\nThe test, then, is not realism but survival. The honest question about any assumption is what becomes of the result when the assumption is loosened. A conclusion that persists under such disturbance has told us something about the world. A conclusion that evaporates has told us something about the assumption — which may be worth knowing, but is not what was advertised. What a modeler owes his readers is therefore not an apology for unrealism but a map of the load-bearing walls: which supports may be removed, and which bring the roof down.\n\nThere is a second cost, quieter and harder to remedy. Instruments select their questions. What can be written in the notation becomes what gets discussed at the seminar, and what resists formal statement — humiliation, custom, the sense that one has been treated unjustly — is filed as noise, or, in the worse cases, is treated as having been shown not to matter. Nothing in the method requires this. It happens anyway, because a discipline attends to what its tools can grip.\n\nNone of which argues for abandoning models in favor of argument in prose. Prose is not more realistic, only less audited. Its assumptions are not absent; they are unnumbered, scattered through subordinate clauses where no one is obliged to defend them, and a bad premise can live comfortably there for a generation. The peculiar virtue of a formal model is that its errors are legible: one can point to the line at which the world was left behind. So keep the models, and put to each of them the question the method itself makes possible and its practitioners too rarely ask — what would have to be true for this result to be false?',
    questions: [
      {
        question: 'Which of the following best expresses the central thesis of the passage?',
        options: [
          'Economic models should be judged primarily by how closely their assumptions resemble observed human behavior.',
          'Because every model simplifies, criticism directed at a model’s assumptions is never legitimate.',
          'Realism of assumptions is the wrong test for a model; what matters is whether the conclusion survives when the assumptions generating it are loosened.',
          'Argument conducted in prose is more trustworthy than formal modeling because it commits to no assumptions.',
        ],
        correctAnswer: 2,
        explanation:
          'The author states the criterion directly: "The test, then, is not realism but survival," since a result that persists under disturbance "has told us something about the world" while one that evaporates has told us only about the assumption. The realism standard is the very indictment the author calls "confused." The claim that no criticism of assumptions is ever legitimate is the abused license the author explicitly limits — it "can shelter a model in which the assumption is not a simplification but the conclusion in costume." And the option elevating prose reverses the closing paragraph, where prose is called "not more realistic, only less audited," its assumptions "unnumbered" rather than absent.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The reference to a map drawn at a scale of one to one functions primarily to:',
        options: [
          'illustrate that completeness of detail is not what makes a representation useful',
          'demonstrate that maps and economic models are built for fundamentally unrelated purposes',
          'suggest that modelers should aim to include more of the world in their models',
          'concede that critics of economic modeling have identified a genuine defect in the method',
        ],
        correctAnswer: 0,
        explanation:
          'The map appears in support of the sentence that follows it: "Fidelity is not the virtue in question." A map reproducing every detail at full size would be useless, which is the point — usefulness comes from selective distortion, not completeness. The option urging more inclusion inverts that lesson. Treating maps and models as unrelated destroys the analogy the author is building. And the image is offered against the critics, not as a concession to them; the concession in the passage comes later, in the discussion of smuggled premises.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'According to the passage, a model whose result disappears once its central assumption is loosened has demonstrated:',
        options: [
          'that the assumption in question was a defensible simplification',
          'that formal methods are inferior to careful verbal reasoning',
          'that the mechanism it describes operates weakly rather than not at all',
          'something about the assumption rather than something about the world',
        ],
        correctAnswer: 3,
        explanation:
          'The author draws the contrast explicitly: a conclusion that persists "has told us something about the world," while "a conclusion that evaporates has told us something about the assumption — which may be worth knowing, but is not what was advertised." A fragile result is evidence against the assumption having been a payable-back simplification, not evidence for it. The claim about weak operation invents a middle position the passage never offers. And the inference that formal methods are inferior contradicts the final paragraph, which defends models precisely because their errors are legible.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s proposed test for evaluating a model?',
        options: [
          'Many widely used models rest on assumptions that their own practitioners describe as unrealistic.',
          'Models whose conclusions collapse as soon as their central assumptions are loosened have nonetheless anticipated real outcomes more accurately than any available alternative.',
          'Certain economic questions, such as those involving perceived injustice, cannot be stated in formal notation at all.',
          'Physicists routinely rely on idealizations such as surfaces without friction.',
        ],
        correctAnswer: 1,
        explanation:
          'The author’s test says that surviving disturbance is what separates a finding about the world from a finding about an assumption. If the fragile models are the ones that track reality best, that separation fails as a guide to which models tell us about the world — the test would be discarding the useful ones. The observation that practitioners admit unrealism is consistent with the author, who never denied unrealism. The point about unformalizable questions restates the author’s own second cost. And the reference to frictionless surfaces supports the passage’s defense of idealization rather than undercutting the survival test.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A researcher builds a model that assumes workers know every wage on offer, derives from it the conclusion that anyone jobless has chosen to be, and presents this as an account of unemployment. The author would most likely respond that:',
        options: [
          'the conclusion was already contained in the assumption, so the model has shown only that the researcher is consistent with himself',
          'the model must be discarded because no worker could possibly know every wage on offer',
          'the result is acceptable provided the researcher acknowledges that all models simplify',
          'the question would be better settled by argument in prose than by a model',
        ],
        correctAnswer: 0,
        explanation:
          'This is the passage’s own example in different clothing: assume perfect foresight and the tidy conclusion "was placed among the premises before the argument began." The rejection based on unrealism alone is exactly the confused indictment the author opens by dismissing. The appeal to "all models simplify" is the license the author says has been "worked nearly to death" and that shelters this very move. And retreating to prose reverses the closing paragraph, which finds prose less audited rather than more reliable.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In context, the author’s claim that prose is "not more realistic, only less audited" most nearly means that:',
        options: [
          'verbal arguments are usually mistaken about the facts they describe',
          'verbal arguments make no assumptions and therefore cannot be checked',
          'verbal arguments rest on assumptions too, but ones that are harder to locate and test',
          'economists ought to write more accessibly for readers outside the discipline',
        ],
        correctAnswer: 2,
        explanation:
          'The sentences that follow supply the meaning: prose assumptions "are not absent; they are unnumbered, scattered through subordinate clauses where no one is obliged to defend them." That is a claim about auditability, not accuracy. The option asserting prose is usually mistaken overstates a point the author never makes. The option saying prose makes no assumptions flatly contradicts the passage. And the call for accessible writing imports a concern about style that this sentence does not raise.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-econ-02',
    section: 'cars',
    discipline: 'ethics of markets',
    title: 'The Grammar of a Gift',
    needsReview: true,
    passageText:
      'Every few years someone proposes a legal market in an organ, or a vote, or a place at the front of a queue, and the objection that arrives first is the objection about coercion. The seller of a kidney is desperate; his consent is the consent of a man with a gun at his back; and a bargain struck on those terms is not a bargain but a taking. The argument is serious and often correct. It is also, I want to suggest, the weaker of the two objections available, and its dominance has crowded out the stronger one.\n\nNotice what the coercion argument concedes. It locates the wrong not in the exchange itself but in the circumstances surrounding it, which means it can always be answered by improving the circumstances. Raise the seller’s income, impose a waiting period, require independent counsel and a physician’s sign-off, and the objection has been satisfied on its own terms. A wealthy man who sells a kidney out of curiosity is then doing nothing wrong whatever. Some will accept that conclusion cheerfully. Most people, pressed, will not — which suggests that their discomfort was never really about bargaining power.\n\nThe second objection concerns corruption rather than coercion: the claim that certain goods are altered by being priced. Consider a friend who visits you in the hospital, and then consider paying her to visit. The second visit is not a shabbier version of the first; it is a different object wearing the same outward shape. You have not bought friendship at a discount, you have bought attendance, and the thing you wanted has quietly left the room. An apology purchased is not a cheap apology. A vote sold is not a vote.\n\nHere the objection I take most seriously arrives. Who, it is asked, appointed you registrar of meanings? One man’s corruption is another man’s squeamishness. Markets in life insurance, in lending at interest, in paid military service all once struck decent people as obscene, and the obscenity faded without the sky falling. Absent some principle, the corruption argument is aesthetic distaste in a philosopher’s coat.\n\nThe demand for a principle is fair, and one is available, though it is narrower than its enthusiasts would like. Ask whether the good depends for its value on a motive that payment displaces. Friendship, apology, civic judgment, the care of the dying: each is valuable partly because of why it is offered, so the price does not add a term to the transaction, it replaces the reason. Where no such motive is doing the work — where the good is simply the thing itself, delivered — the corruption charge has nothing to bite on, and the historical drift of sentiment about insurance and interest is exactly what one should expect. The test does not deliver every verdict its partisans want; a principle that decided everything in advance would be a prejudice rather than a principle.\n\nNotice, finally, what the argument does not require. It does not require that anything be prohibited. The corruption claim is a claim about meaning, and its practical demand is only that such questions be settled in the open, as arguments about what a good is for, rather than left to a mechanism that merely records what people will pay. Markets are not neutral instruments; they are norms with an accounting system attached. To extend one into a new region of life is to assert something about the kind of thing that lives there, and a society unwilling to discuss that assertion has not thereby avoided making it.',
    questions: [
      {
        question: 'The main point of the passage is that:',
        options: [
          'markets in contested goods should be prohibited whenever the participants are economically desperate',
          'the coercion objection to contested markets is weaker than the corruption objection, which holds that pricing certain goods changes what they are',
          'objections to extending markets into new areas ultimately reduce to unexamined aesthetic distaste',
          'because attitudes toward markets shift over time, no principled objection to any market can be sustained',
        ],
        correctAnswer: 1,
        explanation:
          'The author announces the thesis in the first paragraph — the coercion argument is "the weaker of the two objections available" — and spends the rest developing the corruption objection, defending it against the charge of arbitrariness. The prohibition option contradicts the closing paragraph, which insists the argument "does not require that anything be prohibited." The reduction to distaste is the counterargument the author quotes and then answers. And the claim that shifting sentiment defeats all principled objection reverses the author, who shows why sentiment about insurance and interest shifted in exactly the way his principle predicts.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The passage implies that a society which legalizes the sale of votes has, in the author’s view:',
        options: [
          'acted permissibly, so long as no voter sells under economic duress',
          'demonstrated that voting was never a valuable practice to begin with',
          'violated a principle that equally forbids markets in life insurance and lending at interest',
          'asserted something about what voting is, whether or not it meant to',
        ],
        correctAnswer: 3,
        explanation:
          'The final paragraph supplies the inference: to extend a market "into a new region of life is to assert something about the kind of thing that lives there, and a society unwilling to discuss that assertion has not thereby avoided making it." The duress option applies only the coercion test the author deliberately sets aside as weaker. Nothing in the passage suggests voting is valueless — the opposite, since "a vote sold is not a vote." And insurance and interest are the author’s examples of markets his principle does not condemn, since no displaced motive is doing the work there.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'The discussion of a friend paid to visit the hospital serves primarily to:',
        options: [
          'illustrate that paying for a good can substitute a different good rather than a lesser version of the same one',
          'show that people are generally unwilling to pay for companionship',
          'concede that the coercion objection captures what is genuinely wrong with such exchanges',
          'argue that friendship should receive legal protection from commercial arrangement',
        ],
        correctAnswer: 0,
        explanation:
          'The example is glossed immediately: the paid visit "is not a shabbier version of the first; it is a different object wearing the same outward shape," and "you have bought attendance" instead. It introduces corruption as a distinct wrong, so reading it as a concession to the coercion argument inverts its purpose. The claim about willingness to pay makes it an empirical observation about consumer behavior, which is not what the sentence does. And the call for legal protection contradicts the author’s explicit statement that his argument requires no prohibition.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most STRENGTHEN the author’s proposed test for corruption?',
        options: [
          'Surveys consistently find that most people are uncomfortable with the idea of a legal market in kidneys.',
          'Historical attitudes toward lending at interest shifted rapidly once such lending became widespread.',
          'People who receive an apology they have paid for report that it fails to accomplish what an apology accomplishes, while people who receive a paid delivery of firewood report no shortfall compared with firewood given freely.',
          'Soldiers who serve for pay perform their duties as capably as soldiers who are conscripted.',
        ],
        correctAnswer: 2,
        explanation:
          'The test asks "whether the good depends for its value on a motive that payment displaces." A pattern in which paid apologies fail while paid firewood does not is precisely the pattern the test predicts, and it also confirms the test’s advertised narrowness. Reported discomfort about kidney sales is the raw squeamishness the author says needs a principle, so it cannot supply one. The insurance-and-interest drift is already accommodated by the author rather than added support for the test. And equal performance by paid soldiers concerns competence, which the test does not measure.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A city proposes selling passes that allow buyers to skip the line at a public health clinic. On the author’s account, the first question to ask is:',
        options: [
          'whether purchasers of the passes could afford them without financial hardship',
          'whether the revenue raised would improve the clinic for everyone who uses it',
          'whether comparable arrangements have been adopted elsewhere without provoking objection',
          'whether what the queue distributes draws part of its value from the basis on which it is distributed',
        ],
        correctAnswer: 3,
        explanation:
          'The author’s test asks whether a good "depends for its value on a motive that payment displaces" — applied to a queue, whether treatment by need is part of what makes the good what it is, such that allocation by willingness to pay replaces the reason rather than adding to it. Affordability restates the coercion objection the author calls weaker. Revenue effects are a consequentialist question the test does not ask. And the appeal to what has been accepted elsewhere is precisely the drift in sentiment that the author says a principle must explain rather than obey.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward the objection that the corruption argument is "aesthetic distaste in a philosopher’s coat" is best described as:',
        options: [
          'dismissive of a challenge he regards as unserious',
          'respectful of a demand he considers fair and undertakes to meet',
          'alarmed by a challenge he concedes he cannot answer',
          'indifferent, on the ground that the question belongs to law rather than to meaning',
        ],
        correctAnswer: 1,
        explanation:
          'The author introduces the objection as the one "I take most seriously" and opens the next paragraph with "The demand for a principle is fair," then supplies a principle while admitting it is "narrower than its enthusiasts would like." That is respect plus a worked reply, not dismissal. He is neither alarmed nor stuck, since he answers it. And he is not indifferent: he insists the question is exactly one about meaning, which is why it must be argued rather than left to law or to the market.',
        skill: 'tone',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-econ-03',
    section: 'cars',
    discipline: 'labor and the meaning of work',
    title: 'Cash for Voice',
    needsReview: true,
    passageText:
      'There are two stories about work, and both of them are consoling, which ought to make us suspicious of each.\n\nThe first treats work as pure cost. Labor is what one endures for a wage; the wage is what makes the enduring worthwhile; and the horizon of progress is therefore less work, better paid, until machines take the remainder. The sums come out. The second story is the older one, the one recited at graduations: that work is where a person becomes himself, that in shaping the world he shapes his own character.\n\nThe critics of the second story have earned their contempt for it. The dignity of labor has been invoked to dignify the indignity of particular labors, to assure people worn out at fifty that their exhaustion was a species of self-realization, and to sort the poor into the deserving employed and the suspect idle. When a phrase performs that much service for the people who profit from its being believed, one is entitled to inspect it closely.\n\nBut the inspection should not end where the critics end it. From the fact that the romance of work has been abused, they conclude that the first story was right all along — that meaning was always a fable told to depress wages, and that the honest demand is simply for more money and fewer hours. This concedes the wrong thing. It accepts the employer’s own framing, in which everything occurring between the clock-in and the clock-out is a cost to be compensated, and then haggles over the price. Cash for voice is a poor trade, and it is offered constantly.\n\nWhat the romance got wrong was not that work carries meaning but where the meaning sits. It does not live inside the tasks. There is no essence of carpentry that dignifies the carpenter, no nobility distributed by occupation, and a man who sands a board for eight hours under a supervisor who could as easily have set him sweeping is not ennobled by the wood. Meaning is relational. It arises when one’s effort is required by identifiable others who would be worse off without it, and when one holds some real discretion over how the thing gets done — enough that the doing could have gone otherwise, and enough that one is answerable for how it went.\n\nThis is why the two conditions people describe as unbearable are so seldom about difficulty. The first is uselessness: the suspicion, common in prosperous offices, that the work would not be missed if it stopped, which no salary repairs and which the well paid report at least as often as anyone. The second is dictation: not that the work is hard, but that every judgment within it has been made elsewhere and arrives as instruction. Pay can compensate a person for effort. It cannot compensate him for irrelevance, because what irrelevance withholds is not comfort but standing.\n\nThe practical upshot is unglamorous and does not sort neatly onto familiar sides. If meaning is relational, it is a feature of arrangements rather than of vocations, and arrangements can be altered without abolishing anything: who decides the order of the tasks, whether the person doing the work ever meets the person it is for, whether a judgment made on the floor can survive contact with the office. These are not consolations offered in place of wages. They are the part of the bargain that wages were never able to buy, and that the demand for wages alone has trained us to stop asking for.',
    questions: [
      {
        question: 'The central claim of the passage is that:',
        options: [
          'work is best understood as a cost that wages exist to compensate',
          'certain occupations confer dignity on those who perform them',
          'because the rhetoric of dignity has been abused, workers should confine their demands to higher pay and shorter hours',
          'work carries meaning, but the meaning lies in arrangements — being needed and holding discretion — rather than in the tasks themselves',
        ],
        correctAnswer: 3,
        explanation:
          'The pivot of the passage is the sentence "What the romance got wrong was not that work carries meaning but where the meaning sits," followed by the relocation of meaning into being "required by identifiable others" and holding "real discretion." The pure-cost account is the first story the author rejects. The claim that occupations confer dignity is the romance the author explicitly denies with "no nobility distributed by occupation." And confining demands to pay and hours is the conclusion the author calls conceding "the wrong thing."',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s account of how "the dignity of labor" has been invoked serves primarily to:',
        options: [
          'reject the claim that work can be meaningful in any respect',
          'grant the critics a point that the author will then refuse to let them extend',
          'explain why wages in many occupations have failed to rise',
          'establish that the first story about work is the correct one',
        ],
        correctAnswer: 1,
        explanation:
          'The paragraph opens by saying the critics "have earned their contempt," and the next paragraph opens with "But the inspection should not end where the critics end it." The concession exists to be limited. It cannot be a rejection of meaning altogether, since the author goes on to relocate meaning rather than deny it. It offers no account of wage stagnation. And endorsing the first story would contradict the passage’s entire second half.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'The passage suggests that a well-compensated employee who describes her work as unbearable is most likely responding to:',
        options: [
          'the physical difficulty of the tasks she is assigned',
          'a rate of compensation inadequate to the effort she expends',
          'the sense that her judgment bears on nothing, or that the work would not be missed if it stopped',
          'the absence of an occupation possessing an inherently noble character',
        ],
        correctAnswer: 2,
        explanation:
          'The author names the two unbearable conditions as uselessness and dictation, and stresses that uselessness is one "which the well paid report at least as often as anyone" and which "no salary repairs." Physical difficulty is ruled out by the observation that these complaints "are so seldom about difficulty." Inadequate pay cannot explain distress in the well compensated, whose case the author raises for exactly that reason. And the appeal to inherently noble occupations invokes an essence the passage denies exists.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'A firm responds to complaints of low morale by raising salaries substantially while consolidating all scheduling and method decisions in a central office. The author would most likely predict that:',
        options: [
          'morale will not recover, since pay compensates effort but not the loss of standing',
          'morale will recover, since compensation was what the complaints were ultimately about',
          'morale will recover only if the physical demands of the work are also reduced',
          'the outcome turns on whether employees regard their occupation as a noble one',
        ],
        correctAnswer: 0,
        explanation:
          'The firm has bought effort and removed discretion — precisely the trade the author calls "cash for voice," and the passage states flatly that pay "cannot compensate him for irrelevance, because what irrelevance withholds is not comfort but standing." Predicting recovery treats the complaint as compensatory, which the author argues it is not. Physical demands are dismissed as the wrong variable. And the appeal to a noble occupation relies on the essence-of-the-trade view the author rejects.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s account of where meaning in work resides?',
        options: [
          'Some workers in highly repetitive jobs report satisfaction with their rate of pay.',
          'Workers granted substantial discretion over their methods and regular contact with those they serve report no greater satisfaction than comparable workers granted neither.',
          'Employers frequently invoke the dignity of work when resisting demands for higher wages.',
          'Large numbers of people say they would prefer to work fewer hours than they currently do.',
        ],
        correctAnswer: 1,
        explanation:
          'Discretion and being needed by identifiable others are the two conditions the author names as the sources of meaning; if supplying both changes nothing, the account has been falsified at its core. Satisfaction with pay among repetitive workers speaks to compensation, which the author never claimed was irrelevant. Employers invoking dignity to resist wages restates the author’s own concession to the critics. And a preference for shorter hours is compatible with every position in the passage.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'The tone of the final paragraph is best characterized as:',
        options: [
          'defiant and polemical, calling for the overthrow of existing arrangements',
          'wistful and resigned about the prospects for change',
          'detached and purely descriptive, withholding any recommendation',
          'measured, offering a modest remedy without overstating what it can accomplish',
        ],
        correctAnswer: 3,
        explanation:
          'The author calls the upshot "unglamorous," notes it "does not sort neatly onto familiar sides," and specifies changes that can be made "without abolishing anything" — a deliberately limited proposal, stated plainly. Nothing there is defiant or revolutionary. Resignation is contradicted by the concrete list of alterable arrangements. And the paragraph is clearly prescriptive rather than merely descriptive, ending with a claim about what we have been trained to stop asking for.',
        skill: 'tone',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-econ-04',
    section: 'cars',
    discipline: 'development economics',
    title: 'What the Trial Cannot Ask',
    needsReview: true,
    passageText:
      'For half a century the argument about how poor countries become less poor has been staged as a dispute about evidence, and for half a century no evidence has settled it. That failure is informative. Disputes which evidence cannot close are usually not disputes about facts.\n\nOn one side stand the planners, whose claim is that poverty is a structural condition and that structures yield only to deliberate transformation: roads, ports, tariffs, the whole apparatus of a state deciding what its economy shall become. On the other stand the sceptics, whose claim is that nobody knows enough to plan anything, that confident transformation has left a record of expensive ruins, and that progress arrives instead through many small attempts, tested one at a time and kept when they work.\n\nThe sceptics were right about something important, and it should be conceded without grumbling. For decades enormous programs were justified by little more than the eminence of the men proposing them, and when the money had been spent nobody could say what had been bought. The insistence on testing — comparing villages that received a program against otherwise similar villages that did not — was a genuine advance in honesty, and the field is better for the humility it forced.\n\nBut a method is never only a method. It is also a filter on the questions, and this filter has a shape. To test an intervention by comparison you need many units receiving it and many not, an effect that appears within a few years, and an outcome someone can go and count. Deworming pills satisfy these conditions; so do school textbooks and cash transfers. What does not satisfy them is a national exchange-rate regime, or the ownership of the port, or a decade of tariff protection for an industry that does not yet exist — not because such things are known to fail, but because there is only one national economy and it cannot be run twice.\n\nSo the questions that can be answered rigorously drift toward the small, and the rest drift out of the seminar and eventually out of mind. It would be a slander to say that anyone intended this. The effect requires no intention: a field attends to what its instruments can hold, and funders prefer to pay for what can be shown. The result is that a discipline organized around the correction of overconfidence has produced a literature confident about pills and silent about ports.\n\nNotice that this is not the objection the planners usually make. They tend to argue that trials are unrealistic, or too slow, or condescending toward the countries studied — objections about manner, which invite the reply, quite justly, that being condescended to is preferable to being experimented upon by men who never check. The stronger objection concedes the method entirely and asks only what it leaves undiscussed. A result can be perfectly valid and still be a distraction, and a body of valid results can, in aggregate, misdescribe a subject by the pattern of its silences.\n\nNone of which restores the planners’ credit. Their record stands, and the demand that they show their working remains fair. What follows is smaller and harder: that the choice of what to study is itself a claim about where the important causes lie, and that this claim cannot be settled by the trials, because it decides in advance which trials are run. Development economics is, at that level, an argument — about who is presumed competent, and about which arrangements are treated as background rather than as choices. It would be better conducted in the open than smuggled in as a matter of method.',
    questions: [
      {
        question: 'Which of the following best states the main idea of the passage?',
        options: [
          'Because the method of controlled comparison determines which questions can be studied, the choice of method is itself a contested claim about where the important causes lie.',
          'Controlled trials have established that small interventions accomplish more than structural reform does.',
          'The planners’ record of failure demonstrates that deliberate structural transformation cannot succeed.',
          'Development economics should abandon controlled trials in favor of national-scale planning.',
        ],
        correctAnswer: 0,
        explanation:
          'The closing paragraph states it: "the choice of what to study is itself a claim about where the important causes lie," a claim the trials cannot settle "because it decides in advance which trials are run." The passage never says small interventions accomplish more — it says only that they are the ones that can be tested. The verdict against planners is the sceptics’ position, which the author neither adopts nor rejects wholesale. And abandoning trials contradicts the concession that the insistence on testing "was a genuine advance in intellectual honesty."',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The passage implies that the trial literature’s silence about tariffs and port ownership is best explained by:',
        options: [
          'accumulated evidence that such policies rarely affect economic outcomes',
          'a deliberate effort by researchers to leave existing arrangements unexamined',
          'the fact that such arrangements exist in single instances that cannot be set against otherwise similar cases',
          'the difficulty of persuading national governments to permit research of any kind',
        ],
        correctAnswer: 2,
        explanation:
          'The author gives the reason directly: these questions fail the method’s requirements "not because such things are known to fail, but because there is only one national economy and it cannot be run twice." The option citing evidence of ineffectiveness is the misreading the author preemptively blocks. Deliberate avoidance is explicitly disclaimed — "It would be a slander to say that anyone intended this." And government obstruction is never mentioned as a factor.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'The author’s statement that the sceptics "were right about something important" functions primarily to:',
        options: [
          'signal that the author ultimately endorses the sceptics’ program over the planners’',
          'establish the author’s good faith before raising an objection that does not dispute the method’s validity',
          'introduce evidence that the planners’ programs were fraudulently justified',
          'prepare the reader for the claim that trials take too long to be useful',
        ],
        correctAnswer: 1,
        explanation:
          'The concession is granted "without grumbling" and is followed by "But a method is never only a method" — a criticism that, as the author later says, "concedes the method entirely and asks only what it leaves undiscussed." It is not an endorsement, since the closing paragraph criticizes what the sceptics’ method omits. Nothing there alleges fraud; the charge is unexamined confidence. And the speed objection is one the author groups with the weak complaints "about manner."',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s central argument?',
        options: [
          'Some programs first validated by controlled comparison have subsequently been adopted at national scale.',
          'Planners in several countries oversaw economic transformations that proved durable.',
          'Researchers who rely on controlled comparison acknowledge that their findings apply only to the settings studied.',
          'Researchers who work primarily with controlled trials publish on tariffs, land ownership, and exchange-rate policy as often as researchers who do not.',
        ],
        correctAnswer: 3,
        explanation:
          'The argument rests on the claim that the method filters the agenda, pushing structural questions "out of the seminar and eventually out of mind." If trial-based researchers address those questions just as often as anyone else, the filter does not operate as described. Scaling up a validated program leaves untouched which questions got studied in the first place. Durable planner successes bear on the planners’ record, which the author declines to adjudicate. And an acknowledgment of limited generalizability supports the author rather than undermining him.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A foundation announces that it will fund only proposals whose effects can be demonstrated by comparison with an untreated group within three years. The author would most likely respond that this policy:',
        options: [
          'is unobjectionable, since untested spending is precisely what discredited earlier development programs',
          'will fail because comparisons of this kind are rarely accurate',
          'settles, without argument, a contested question about which causes matter',
          'shows that the foundation has aligned itself with the planners against the sceptics',
        ],
        correctAnswer: 2,
        explanation:
          'The funding rule enacts exactly the filter the author describes: it "decides in advance which trials are run," and thereby asserts, without arguing, where the important causes lie. Calling it unobjectionable ignores the whole second half of the passage, even though the first clause echoes a concession the author grants. The author never disputes the accuracy of such comparisons — his objection "concedes the method entirely." And the rule aligns the foundation with the sceptics, not the planners, so that option reverses the sides.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In saying that a body of valid results can "misdescribe a subject by the pattern of its silences," the author most nearly means that:',
        options: [
          'individually sound findings can together create a false impression of what drives a subject, because of what was never studied',
          'the findings in question are unreliable and ought to be reexamined',
          'researchers have suppressed results that failed to support their conclusions',
          'no finding is worth much unless it addresses structural questions',
        ],
        correctAnswer: 0,
        explanation:
          'The sentence before it sets the terms: "A result can be perfectly valid and still be a distraction." The distortion lies in the distribution of attention, not in any individual result — a literature "confident about pills and silent about ports." Calling the findings unreliable contradicts the word "valid." Suppression imports dishonesty the author explicitly rules out. And dismissing all non-structural findings overstates a case the author is careful to keep narrow.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-econ-05',
    section: 'cars',
    discipline: 'behavioral economics',
    title: 'The Preference That Was Never There',
    needsReview: true,
    passageText:
      'The behavioral revolution is usually narrated as a demolition. For a century, the story goes, economics rested on a fiction — a creature of perfect calculation who knew what he wanted and pursued it without error — and then the experimenters arrived and knocked it down. People choose differently depending on whether an outcome is described as a gain or as a loss. They accept whichever option has been placed in front of them by default. They value what they already hold above what they might acquire. The fiction is dead, and a more human science stands in its place.\n\nI want to suggest that the demolition was less thorough than either its admirers or its opponents believe, and that the ruins are still holding up the roof.\n\nConsider what it means to call these findings biases. A bias is a deviation, and a deviation requires a line to deviate from. In practice that line is the old creature: the calculator who would not have been swayed by wording, who ranks the options the same way whichever one he happens to be holding. The new science measures the distance between people and that figure with great ingenuity, and in doing so it keeps him installed as the standard of correctness. His empire has not been overthrown. He has merely been promoted from a description of what we do into a specification of what we would do if we were not, so regrettably, ourselves.\n\nThe more unsettling possibility gets passed over quickly, and it is this: that there may be no underlying preference for the error to be an error about. If the way a question is put determines the answer, and if there is no formulation that is not a formulation, then the ranking does not exist prior to the asking. It is made in the asking. What we have then is not a true preference obscured by noise but a preference assembled on the spot out of whatever materials the moment provides.\n\nThis matters most for the practical program the findings have inspired, which is the design of choices — the automatic enrolment, the arrangement of the menu, the small nudge that leaves everything permitted while making one path easier. The usual defense of such design is modest and appealing: since the setting must take some form, and since any form will influence choice, we may as well arrange it so that people get what they themselves want. That defense requires the very thing in question. It requires that there be a want, standing behind the choices, which the design serves rather than supplies.\n\nA serious reply is available, and it deserves better than dismissal. Ask people afterward, the reply goes, and they will tell you: the man who did not save regrets it, and regret looks very much like a preference that was there all along, overrun in the moment by a badly arranged menu. I grant that this is the best evidence we have, and it is not nothing. But the moment of regret is a moment too, with its own framing, its own audience, its own way of putting the question; the later self is not a court standing outside the sequence but another link within it. Retrospection is testimony, not verdict.\n\nIf that is right, the honest defense of choice design cannot be that it restores what you really wanted. It must be the plainer and more exposed claim that some outcomes are better than others — better by a standard the designer holds and can be required to argue for. That is a political claim rather than a technical one, and there is no shame in it. The shame lies in the disguise: in dressing a judgment about how people should live in the borrowed authority of a preference nobody has managed to locate.',
    questions: [
      {
        question: 'The passage is primarily concerned with arguing that:',
        options: [
          'experimental findings about framing and defaults have been exaggerated and largely fail to hold up',
          'the perfectly calculating chooser remains the most accurate available description of how people decide',
          'by treating deviations as errors against a fixed standard, behavioral economics has preserved the model it claims to have replaced, and has avoided the harder possibility that no settled preference underlies choice',
          'the design of choices should be abandoned, since no adequate justification for it can be given',
        ],
        correctAnswer: 2,
        explanation:
          'The passage argues that the old calculator survives as the benchmark against which biases are measured — "His empire has not been overthrown" — and then presses "the more unsettling possibility" that no prior preference exists at all. The author never questions whether the findings hold; he accepts them and disputes their interpretation. Treating the calculator as accurate reverses the passage. And abandonment of choice design is not the conclusion: the author offers an alternative defense of it, on openly political grounds.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward the experimental findings themselves is best described as:',
        options: [
          'accepting of the findings while skeptical of the framework used to interpret them',
          'dismissive of both the findings and the conclusions drawn from them',
          'enthusiastic, treating them as a decisive overthrow of the earlier theory',
          'undecided, declining to take any position on their validity',
        ],
        correctAnswer: 0,
        explanation:
          'The findings are recited without objection and are later relied upon — the framing effects are what generate the author’s own claim that preferences are assembled. What he disputes is the interpretive machinery: calling them "biases" keeps the old benchmark installed. He is therefore not dismissive of the findings, not enthusiastic about the demolition narrative he calls overstated, and not undecided, since he stakes out a position in the second paragraph and defends it throughout.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'The author’s remark that the calculating chooser has been "promoted" implies that:',
        options: [
          'economists now regard perfect calculation as an accurate description of behavior',
          'the calculating chooser has been abandoned as a point of comparison',
          'behavioral researchers deliberately set out to preserve the earlier framework',
          'the calculating chooser now functions as a norm of correct choice rather than as a description, and thereby retains his authority',
        ],
        correctAnswer: 3,
        explanation:
          'The sentence completes itself: he has been promoted "from a description of what we do into a specification of what we would do if we were not, so regrettably, ourselves" — that is, from description to norm, which is why "his empire has not been overthrown." Saying economists now find him descriptively accurate misses the shift the word marks. Abandonment is the opposite of what "promoted" conveys. And deliberate intent is never attributed; the author’s point is structural, about what calling something a bias requires.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'The paragraph presenting the argument from regret functions primarily to:',
        options: [
          'introduce evidence that conclusively confirms the existence of settled underlying preferences',
          'raise the strongest available objection, grant it partial force, and then limit it',
          'abandon the position the author has been defending',
          'illustrate that people are unreliable in recalling the choices they have made',
        ],
        correctAnswer: 1,
        explanation:
          'The author calls the reply "serious," says it "deserves better than dismissal," grants that it is "the best evidence we have," and then confines it: the later self is "another link within" the sequence, so "retrospection is testimony, not verdict." That is a concession followed by a limit, not a confirmation, since the paragraph ends by denying the evidence is decisive. The author does not abandon his position — the next paragraph builds on it. And the point is not faulty memory but the framed character of the later moment.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most STRENGTHEN the author’s claim that preferences are assembled rather than uncovered?',
        options: [
          'People who have been taught about framing effects continue to display them.',
          'Default arrangements influence enrolment more powerfully than financial incentives do.',
          'Most people, when asked, report having clear and stable preferences about the choices they face.',
          'When the same choice is put to comparable groups in different but equally natural wordings, each group afterward reports its own answer as the one it had wanted all along.',
        ],
        correctAnswer: 3,
        explanation:
          'If the reported want tracks whichever wording was used, then the wording is doing the constructing and the retrospective report cannot serve as a court of appeal — which is exactly the author’s claim, and it also blunts the regret objection. The persistence of framing effects after instruction shows the effects are robust but says nothing about whether a prior preference exists. The relative power of defaults is a claim about magnitude. And people’s confident reports of stable preferences cut against the author rather than for him.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A government adopts a retirement plan that enrolls workers automatically, defending the policy on the ground that it gives people what they already want. The author would most likely respond that:',
        options: [
          'the defense borrows an authority it has not established, and the policy should instead be argued for on the ground that its outcomes are better',
          'the policy is illegitimate because it overrides choices people have genuinely made',
          'the defense is sound, since evidence of later regret establishes the underlying preference',
          'the policy should be replaced by financial education so that choices come to reflect people’s true preferences',
        ],
        correctAnswer: 0,
        explanation:
          'The closing paragraph delivers the response: the honest defense "cannot be that it restores what you really wanted" but must be "the plainer and more exposed claim that some outcomes are better than others," argued openly. The author does not call such policies illegitimate — he objects to the disguise, not the practice. The regret defense is the reply he grants partial force and then limits. And an education remedy assumes the very true preferences the passage doubts exist.',
        skill: 'application',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-econ-06',
    section: 'cars',
    discipline: 'measurement and aggregation',
    title: 'The Rate of Exchange',
    needsReview: true,
    passageText:
      'Everyone now knows the case against the national accounts. The figure that governments live by counts the felling of a forest and not the forest, the paid nurse and not the daughter, the traffic jam that burns fuel and not the hour it consumed. It rises after a hurricane, because rebuilding is activity. The indictment has become so familiar that reciting it feels less like criticism than like a form of good manners.\n\nWhat follows from the indictment is where the interesting mistake occurs. The natural response is to repair the contents: build a better index, one that adds the unpaid hours and subtracts the depleted soil, and let governments live by that instead. Committees have been convened for this purpose for fifty years, and their products are invariably more thoughtful than what they would replace. And yet the enterprise repeats, in a more agreeable register, the error it set out to correct. It assumes the trouble with the number was what went into it. The trouble is the number.\n\nTo combine unlike things into a single figure is to fix a rate of exchange between them, and the rate is not discovered in the world; it is decided. How many hours of a river’s clarity equal a year of a child’s schooling? There is no fact of the matter awaiting a better statistical technique. Someone chooses, and the choosing is the substance of the thing, and once it has been performed and the result published as one number, the choice becomes invisible. That is precisely what an index is for: to spare the reader the argument. A well-made index is a settled dispute wearing the clothes of a measurement.\n\nThe obvious remedy is to refuse the aggregation altogether — publish the components, the mortality and the literacy and the water quality, and let citizens weigh them for themselves. I have some sympathy for this, and less than I once had. An unranked list does not abolish the weighting; it delegates it, and delegates it downstream to whoever is doing the reading, which in practice means to those with the staff, the patience, and the standing to insist that their preferred column is the one that counts. Confronted with fourteen indicators moving in different directions, a minister will find the one that flatters him, and a page that cannot say which way things are going will not be used to hold anyone to account. Plurality without ranking is not neutrality. It is the transfer of a decision to whoever is strong enough to make it quietly.\n\nSo the choice is not between an index and honesty. It is between weights that are stated and weights that are buried, and stated weights are better for a reason that has nothing to do with their being correct. A published rate of exchange is a proposition. It can be named, contested, voted against, revised when a society changes its mind about what it owes to rivers or to daughters. A buried one cannot be argued with, because there is nothing on the page to argue with; the argument has already happened, somewhere else, among people whose names do not appear.\n\nThis is a modest conclusion and I would rather it were grander. It does not tell us what to count, or how much any of it is worth. It says only that a summary figure is a moral claim compressed into a decimal, and that the compression ought to be reversible — that anyone should be able to open the number and find the argument inside it. The scandal of the accounts was never that they measured the wrong things, though they did. It was that they measured them so quietly that a whole civilization mistook a set of decisions for a set of facts.',
    questions: [
      {
        question: 'The main idea of the passage is best expressed as:',
        options: [
          'the national accounts should be replaced by an improved index that includes unpaid work and environmental depletion',
          'any summary figure embeds a chosen rate of exchange among unlike goods, so what matters is whether those weights are stated and open to dispute',
          'because no rate of exchange among unlike goods can be justified, societies should publish indicators separately and refuse to aggregate them',
          'the national accounts are sound measures whose critics have misunderstood what they were designed to do',
        ],
        correctAnswer: 1,
        explanation:
          'The passage turns on the sentence "the choice is not between an index and honesty. It is between weights that are stated and weights that are buried." Building a better index is the reformist project the author says "repeats… the error it set out to correct." Refusing aggregation is the remedy he considers and rejects, since "plurality without ranking is not neutrality." And defending the accounts as sound contradicts the final line about mistaking decisions for facts.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The observation that the national figure rises after a hurricane serves primarily to:',
        options: [
          'introduce the author’s own principal objection to the figure',
          'demonstrate that natural disasters can leave an economy better off',
          'argue that reconstruction spending ought to be excluded from the accounts',
          'rehearse a familiar complaint that the author will then set aside as the wrong lesson',
        ],
        correctAnswer: 3,
        explanation:
          'The hurricane belongs to the list the author calls so familiar that "reciting it feels less like criticism than like a form of good manners," and the next paragraph pivots: "What follows from the indictment is where the interesting mistake occurs." The author’s own objection concerns the form of any single figure, not its contents, so this is not his principal complaint. He does not claim disasters enrich anyone. And excluding reconstruction is precisely the contents-repair he argues misses the point.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'The author describes a well-made index as "a settled dispute wearing the clothes of a measurement" chiefly to convey that:',
        options: [
          'a judgment about relative worth has already been made and is then presented as though it were an observed fact',
          'indices are typically produced by committees that cannot reach agreement',
          'measurements are inherently less trustworthy than arguments conducted in words',
          'disputes about value are eventually resolved by the accumulation of better data',
        ],
        correctAnswer: 0,
        explanation:
          'The surrounding sentences supply the sense: someone "chooses," the choosing "is the substance of the thing," and once published "the choice becomes invisible," since an index exists "to spare the reader the argument." The image is about a decision disguised as an observation. Committee disagreement is not the issue — the author grants that committee products are thoughtful. No general ranking of measurement against verbal argument is offered. And the claim that better data settle value disputes is the opposite of "there is no fact of the matter."',
        skill: 'meaning-in-context',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s objection to publishing indicators without aggregating them?',
        options: [
          'Some readers find long lists of separate indicators difficult to interpret.',
          'Committees charged with constructing indices routinely disagree about how to weight the components.',
          'In places where governments publish unranked indicator sets, public debate has converged on shared priorities and officials have been unable to select flattering figures.',
          'Aggregate indices are cited in the press far more often than sets of separate indicators are.',
        ],
        correctAnswer: 2,
        explanation:
          'The objection is that an unranked list "delegates" the weighting downstream to the powerful, and that "a minister will find the one that flatters him." Evidence that debate converges and that officials cannot cherry-pick removes exactly that mechanism. Difficulty of interpretation supports the author instead. Committee disagreement about weights confirms his claim that weights are chosen rather than found. And greater press citation of indices reinforces his point that unranked pages fail to hold anyone to account.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A university replaces its single ranking score with the same underlying data reported as a set of separate indicators. The author would most likely warn that:',
        options: [
          'the change is a clear improvement, since the weights in the old score were arbitrary',
          'the weighting has not been eliminated but handed to whichever readers have the most power to insist on a favored column',
          'the separate indicators will be measured less accurately than the composite score was',
          'the university ought to restore the single score exactly as it stood before',
        ],
        correctAnswer: 1,
        explanation:
          'This is the delegation problem applied: "An unranked list does not abolish the weighting; it delegates it… downstream to whoever is doing the reading," meaning those with staff, patience, and standing. Calling the change a clear improvement adopts the position the author qualifies. Accuracy of measurement is not the passage’s concern — its concern is the fixing of exchange rates. And restoring the old score unchanged ignores the author’s actual demand, which is that the weights be published and contestable.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The passage suggests that the author’s chief complaint against the national accounts is that they:',
        options: [
          'omitted unpaid work and environmental damage from their totals',
          'were computed by techniques too specialized for ordinary citizens to follow',
          'presented a set of contestable decisions in a form that made them look like discovered facts',
          'were adopted by governments before any adequate alternative had been developed',
        ],
        correctAnswer: 2,
        explanation:
          'The last two sentences state it: "The scandal of the accounts was never that they measured the wrong things, though they did. It was that they measured them so quietly that a whole civilization mistook a set of decisions for a set of facts." The omissions are conceded as real but explicitly denied the status of the chief complaint. Technical opacity is not the issue — the author’s worry is that the argument is absent from the page, not that the arithmetic is hard. And the timing of adoption relative to alternatives is never discussed.',
        skill: 'inference',
        needsReview: true,
      },
    ],
  },
]
