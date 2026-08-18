import type { MCATPassage } from '../types'

/**
 * MCAT CARS — Culture and Everyday Life pool.
 *
 * Six original, argument-driven passages (500-600 words each) treating culture
 * as contested argument rather than description: media studies and attention,
 * technology and society, material culture and objects, food and the everyday,
 * tourism and authenticity, and nostalgia and cultural memory.
 *
 * Each passage advances a thesis that turns at least once — a concession, an
 * answered objection, or a reframing distinction — and every item is answerable
 * from the text alone.
 *
 * AI-authored; needsReview is true pending SME review.
 */
export const CARS_CULTURE_PASSAGES: MCATPassage[] = [
  {
    id: 'cars-cult-01',
    section: 'cars',
    discipline: 'media studies and attention',
    title: 'An Audience of One',
    needsReview: true,
    passageText:
      'The standard complaint against modern media is an arithmetic one. Attention, we are told, is a finite resource; the machinery of the feed is built to extract it; and we arrive at the end of the day with less of it than we started with. The metaphor is powerful, since it recasts distraction as a species of theft, and it has the further advantage of being partly true. Yet it describes a shortage where the graver change is one of kind, and in doing so it points every proposed remedy in the wrong direction.\n\nConsider what attending actually involves. To attend is not merely to spend a quantity of mind on an object; it is to hold that object still long enough that someone else might hold it too. Historically, attention has been the mechanism by which a scattered population comes into possession of a common thing — an argument, a scandal, a melody, a war. The thing itself need not be admirable. What matters is that many people can be presumed to have it in view, so that one of them may say to another, without preamble, that it is wrong.\n\nA defender of the present arrangement will answer, reasonably enough, that people attend more than they ever have. Material now finds each person by way of what that person already cares about, and the resulting engagement is not merely sustained but eager. Measured in hours, in return visits, in the willingness of an audience to follow a subject into detail, attention has not grown scarce; it has grown abundant, and abundant in a form that is at last responsive to the individual rather than imposed upon him. The defense is correct on its own terms, and it is precisely those terms I mean to dispute.\n\nWhat has become scarce is not attention but coincidence: the accident of many people noticing the same thing at the same hour. The loss shows itself most clearly in what becomes impossible. To disagree with someone, you must first agree about what is under discussion. Two parties who have attended to nothing in common are not in conflict at all; they are merely elsewhere, each fully occupied, neither available to the other. Public argument depends on a shared object more urgently than it depends on shared values, since values can be fought over only once there is something to fight about.\n\nI do not mean to praise the arrangement this one replaced. The common object of the broadcast era was narrow, assembled by few hands, and it excluded a great deal that deserved inclusion; those who remember it fondly are usually remembering their own place in it. But that objection does not rescue the present. The earlier public was criticized, and criticized effectively, by people who had to be heard within it — its narrowness was exposed because there was somewhere to expose it. A common object of some kind is the precondition of the very complaint we now make about that particular one.\n\nThis is why the fashionable remedies disappoint. Discipline, abstinence, the careful budgeting of one’s hours: these are private solutions to a public problem, and they can restore an individual’s concentration while leaving the commons exactly as empty as they found it. The question to ask of a medium is not how long it holds us but how many of us it holds at once, and whether it hands us anything we could argue about. A culture can be intensely attentive and still have nothing to say to itself.',
    questions: [
      {
        question: 'Which of the following best expresses the central thesis of the passage?',
        options: [
          'The total volume of attention available to audiences has declined sharply and should be restored.',
          'Personalized media serve audiences better than earlier mass media did, since engagement has risen.',
          'The serious loss in modern media is not the quantity of attention but the shared object that makes public disagreement possible.',
          'Individuals should cultivate stricter discipline over their own attention in order to repair public life.',
        ],
        correctAnswer: 2,
        explanation:
          'The author grants that the arithmetic complaint is "partly true" but insists "the graver change is one of kind," and identifies the scarce good as "coincidence: the accident of many people noticing the same thing at the same hour," without which disagreement is impossible. The option about declining volume is the arithmetic view the author explicitly sets aside as misdirected. The option praising personalization states the defender’s position as though it were the author’s. The option recommending personal discipline names the remedy the author calls "a private solution to a public problem."',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The paragraph beginning "I do not mean to praise the arrangement this one replaced" functions primarily to:',
        options: [
          'grant that the older common object was narrow while arguing that some common object is what criticism requires',
          'argue that the media arrangement of the past was superior and ought to be restored',
          'concede that the author’s thesis does not apply to earlier historical periods',
          'illustrate that audiences in every era have been distracted by competing sources of information',
        ],
        correctAnswer: 0,
        explanation:
          'The paragraph concedes that the broadcast-era public was "narrow, assembled by few hands," and then converts the concession into support: that public "was criticized, and criticized effectively," because "there was somewhere to expose it," so "a common object of some kind is the precondition" of the criticism. Nothing here calls for restoring the old arrangement — the author says those who remember it fondly are remembering "their own place in it." The paragraph strengthens rather than limits the thesis, so it is no concession of scope, and distraction across eras is never discussed.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'According to the passage, a documented rise in the average number of hours audiences spend attending to media would most likely:',
        options: [
          'refute the author’s claim that something important has been lost',
          'confirm that the shared object of public life has been restored',
          'be impossible, given the author’s account of attention as a finite resource',
          'leave the author’s central concern untouched, since that concern is not a matter of quantity',
        ],
        correctAnswer: 3,
        explanation:
          'The author concedes the abundance case outright — engagement is "not merely sustained but eager" — and says of it, "The defense is correct on its own terms, and it is precisely those terms I mean to dispute." Hours therefore cannot refute or confirm a claim pitched at coincidence rather than quantity. The option calling such a rise impossible attributes the finite-resource premise to the author, but that premise belongs to the arithmetic complaint he is criticizing.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'Which of the following findings, if true, would most WEAKEN the author’s argument?',
        options: [
          'Audiences today report feeling more distracted than audiences of previous generations did.',
          'Communities whose members consume entirely personalized media nonetheless sustain vigorous public disputes over commonly identified problems.',
          'Personalized platforms measure audience engagement far more accurately than earlier broadcasters could.',
          'The narrow public of the broadcast era excluded many groups from meaningful participation.',
        ],
        correctAnswer: 1,
        explanation:
          'The argument’s load-bearing claim is that without a shared object, "public argument" collapses because disputants are "merely elsewhere." A case in which fully personalized consumption still yields vigorous common disputes severs exactly that link. Reports of feeling distracted concern the quantity complaint the author already sets aside. Measurement accuracy is true-but-irrelevant to whether a commons exists. The exclusiveness of the old public is something the author himself asserts, so it cannot count against him.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A city is deciding how to evaluate a newly funded public broadcasting service. The author’s reasoning most supports asking:',
        options: [
          'how many hours per week the average listener spends with the service',
          'whether listeners report an improved ability to concentrate',
          'whether the service’s offerings match each listener’s existing interests',
          'whether the service gives large numbers of listeners the same thing to argue about',
        ],
        correctAnswer: 3,
        explanation:
          'The closing paragraph states the criterion directly: ask "not how long it holds us but how many of us it holds at once, and whether it hands us anything we could argue about." Hours is the arithmetic measure the author rejects as beside the point. Improved concentration is the private remedy that leaves "the commons exactly as empty." Matching existing interests describes the personalization whose abundance the author concedes but does not credit.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In context, the closing observation that a culture can be "intensely attentive and still have nothing to say to itself" most nearly means that:',
        options: [
          'widespread concentration is compatible with the absence of any commonly held subject for debate',
          'people who concentrate deeply on media tend to become socially withdrawn',
          'cultures that prize attention produce less literature than cultures that do not',
          'attention and speech are governed by mental faculties that operate independently',
        ],
        correctAnswer: 0,
        explanation:
          'The sentence closes an argument in which attention is abundant while coincidence is scarce; "nothing to say to itself" restates the earlier claim that parties with no common object "are not in conflict at all; they are merely elsewhere." The reading about social withdrawal converts a claim about a public into a claim about individual temperament. Literary output is never raised. The claim about independent mental faculties turns a point about shared objects into a point about psychology.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-cult-02',
    section: 'cars',
    discipline: 'technology and society',
    title: 'The Price of the Difficult Path',
    needsReview: true,
    passageText:
      'Two familiar positions divide the argument about technology, and both are wrong in instructive ways. The first holds that a tool is a neutral means, indifferent to the ends it serves: a hammer builds or breaks according to the hand, and to blame the object is a sentimental evasion of the question of who swung it. The second holds that tools carry their consequences within them, that a society which adopts a technology has already accepted the form of life that follows from it, and that intention is a small thing beside the momentum of the machine. The first position preserves responsibility and explains nothing. The second explains a great deal and dissolves responsibility entirely.\n\nWhat both miss is that tools neither compel nor merely sit there. They price. Every artifact makes some actions cheap and leaves others available at a cost — of effort, of time, of nerve, of skill. A tool encodes a default: the thing that happens when nobody is deliberating. Nothing is forbidden by a default, which is why the neutrality thesis can never be refuted on its own ground. But a population is not a deliberator. Across a great many people acting under ordinary fatigue, small differences in cost do the work that compulsion would do, and the aggregate is indistinguishable from a rule.\n\nHere the defender of neutrality raises his real objection, which deserves an answer rather than a sneer. If every path remains open, he says, then whoever takes the easy one has chosen it, and to fault the tool is to grant the chooser an excuse he has not earned. Blame does not evaporate merely because wrongdoing has been made convenient.\n\nThe objection assumes that responsibility is a fixed quantity which must be located somewhere, entire, so that any portion assigned to a designer is subtracted from a user. But making a thing easy is itself an act, performed by someone, at a time, in preference to arrangements that were also available. The person who sets the costs has done something, and what he has done is not fully described by saying that he left everyone free. To establish a default is to make a prediction about how the tired and the hurried will behave, and to profit or suffer by it. That is a position, held whether or not it is announced.\n\nThe distinction earns its keep by telling us where to look. It draws attention away from the sterile question of whether a technology is good or bad, and toward a set of answerable ones: what does this thing make effortless, what does it leave merely possible, who bears the cost of the difficult path, and could the costs have been arranged otherwise?\n\nThat last clause marks a genuine limit on the argument, and I would rather state it than have it discovered. Not every default has an author. Some costs are set by material or by arithmetic — a thing is heavy, a copy is nearly free — and no one chose them; they are conditions rather than decisions. The analysis describes such cases as accurately as any other, but it convicts nobody, because there is nobody to convict. Blame requires the further showing that the arrangement was contingent and that someone preferred it that way. Absent that showing we have an explanation and not an indictment, which is a less satisfying result and a more honest one.',
    questions: [
      {
        question: 'The main idea of the passage is best stated as:',
        options: [
          'Technologies determine the form of the societies that adopt them, leaving human intention little role.',
          'Tools govern by pricing behavior rather than by compelling it, which makes those who arrange the costs answerable for what follows.',
          'Because every path a tool leaves open can still be taken, responsibility rests entirely with the user.',
          'Technologies should be judged by asking whether they are, on the whole, good or bad for society.',
        ],
        correctAnswer: 1,
        explanation:
          'The author rejects both rival positions and offers a third: tools "neither compel nor merely sit there. They price," and setting a default "is itself an act, performed by someone." The determinist option is the second position the author says "dissolves responsibility entirely." The option placing responsibility wholly on the user is the neutrality defender’s objection, which the author answers rather than adopts. The good-or-bad framing is explicitly labeled "the sterile question."',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s discussion of costs set "by material or by arithmetic" serves primarily to:',
        options: [
          'concede that the neutrality thesis was correct after all',
          'supply a further example of designers who evade blame for the arrangements they chose',
          'establish that most technological defaults arise by accident rather than by design',
          'mark a limit on the argument by separating explanation from blame',
        ],
        correctAnswer: 3,
        explanation:
          'The paragraph opens by naming "a genuine limit on the argument" and concludes that where no one set the costs "we have an explanation and not an indictment." Nothing there revives neutrality, since the pricing analysis is said to describe such cases "as accurately as any other." These are cases with no designer at all, so they are not examples of designers escaping blame. And the author says only that "some" costs lack an author, not that most defaults are accidental.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'The claim that "a population is not a deliberator" most directly supports which conclusion?',
        options: [
          'Cost differences too small to override any individual’s choice can still shape what large numbers of people do.',
          'Individuals are incapable of resisting the defaults their tools establish.',
          'Groups reach decisions through formal procedures rather than through individual reflection.',
          'Technologies influence only those users who happen to be tired or hurried.',
        ],
        correctAnswer: 0,
        explanation:
          'The sentence sits between the admission that "nothing is forbidden by a default" and the claim that across many people "small differences in cost do the work that compulsion would do," yielding an aggregate "indistinguishable from a rule" — precisely a gap between individual freedom and population-level effect. The claim that individuals cannot resist contradicts the author’s insistence that the difficult path stays open. Formal group procedures are never mentioned. Restricting the effect to the tired and hurried mistakes an illustration of ordinary conditions for the whole scope of the claim.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most STRENGTHEN the author’s account of how tools exert influence?',
        options: [
          'Users of a widely adopted tool report in surveys that they feel controlled by it.',
          'A tool that made a harmful action physically impossible eliminated that action entirely.',
          'When a service reversed which of two equally available options required one extra step, the share of users choosing each option reversed as well.',
          'Designers of widely used systems generally intend their products to benefit the people who use them.',
        ],
        correctAnswer: 2,
        explanation:
          'The mechanism claimed is that a difference in cost, with both options left open, redistributes behavior at scale. A reversal of shares following nothing but a reversal of which option costs an extra step is that mechanism observed directly. Reported feelings of being controlled describe an attitude, not the pricing effect. The tool that makes an action impossible illustrates compulsion, which the author distinguishes from pricing. Designers’ good intentions bear on motive, not on how influence operates.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A city wants a larger share of residents to compost their food waste. The author’s reasoning most supports:',
        options: [
          'mounting a campaign that explains the environmental benefits of composting',
          'arranging collection so that composting requires no extra sorting while landfill disposal requires an additional step',
          'imposing fines on households that fail to compost',
          'surveying residents about their attitudes toward waste disposal',
        ],
        correctAnswer: 1,
        explanation:
          'The author’s operative questions are "what does this thing make effortless, what does it leave merely possible," and his mechanism is that small cost differences aggregate into something "indistinguishable from a rule." Reassigning which option carries the extra step applies exactly that. Persuasion targets deliberation, but the author’s point is that defaults matter most "when nobody is deliberating." Fines work by compulsion, the mode he contrasts with pricing. Surveying attitudes gathers opinion without altering any cost.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward the defender of technological neutrality is best described as:',
        options: [
          'dismissive of an argument he regards as transparently self-serving',
          'persuaded by the main point but troubled by its implications',
          'respectful of the objection while judging it to rest on a mistaken assumption',
          'indifferent, on the ground that the dispute has no practical consequences',
        ],
        correctAnswer: 2,
        explanation:
          'The author introduces the objection as "his real objection, which deserves an answer rather than a sneer," then locates its flaw: it "assumes that responsibility is a fixed quantity." That is respect paired with refutation. Dismissiveness is ruled out by the explicit refusal to sneer. He is not persuaded, since he answers the objection. And he insists the distinction "earns its keep" by generating answerable practical questions, so indifference is impossible.',
        skill: 'tone',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-cult-03',
    section: 'cars',
    discipline: 'material culture and objects',
    title: 'The Testimony of Wear',
    needsReview: true,
    passageText:
      'The study of objects has been captured, in recent decades, by a metaphor: the object as text. A chair, a pot, a coat is said to encode meanings which the analyst decodes, and the material world becomes a library in which nothing has yet been read. The metaphor has been productive, and I do not propose to discard it. But it has quietly reversed the reason objects are worth studying at all, which is that they are not texts and cannot be made to behave like them.\n\nA text is a record of what someone wished to say. It may be sincere or false, artful or clumsy, but it exists because an author decided that it should, and every mark in it was placed there for a reader. An object is different in a way that no amount of interpretive subtlety can close. The hollow worn into a stone stair is a record of where people put their feet, and nobody put it there. It was not addressed to us; it was not addressed at all. It accumulated while its makers were occupied with something else, and it is precisely this inattention that gives it its value as evidence.\n\nThe sophisticated reply is to widen the metaphor rather than abandon it. Wear, the semiotician says, is also a sign; reading traces is still reading; the textual model has not been escaped, only extended to a larger alphabet. I grant that traces can be interpreted, but the reply spends the very distinction it needs. If everything is a text, the word has stopped doing work, and we lose the ability to say the thing most worth saying — that marks made to be read and marks made by use are unreliable in opposite directions. A made mark can lie: it can assert a piety its maker never felt. A use mark cannot lie, because it asserts nothing; it can only be misread. Objects are worse liars than documents and better at being misunderstood, and the two failings call for different disciplines.\n\nThis is not a claim that objects are innocent, and here the argument must give ground. Wear can be manufactured. Patinas are faked, tools are distressed, rooms are arranged for the visitor and lived in differently once the visitor has gone. A house can be as composed as a sentence. What survives the concession is a difference of price rather than of nature. To forge a false sentence costs a moment. To forge a convincing history of use, one must simulate a thousand ordinary decisions that nobody was thinking about, and the forger must think about all of them; the labor tends to show, because deliberation leaves a different trace than habit does.\n\nThe practical consequence is sharpest where objects are cared for professionally. A conservator who returns a chair to the condition it had on the day it left the workshop has not recovered the object; she has deleted most of what it knows. The scratches were the testimony. To conserve is therefore always to choose which evidence to keep and which to sacrifice, and the choice cannot be settled by appeal to the maker’s intention, since the maker had no intention whatever about the scratches. That is the whole point of them. An object is not a message we have failed to read. It is a witness that never meant to speak, which is why, handled carefully, it is worth more than a message.',
    questions: [
      {
        question: 'Which of the following best captures the passage’s central argument?',
        options: [
          'Objects should be interpreted as texts, since every artifact encodes a message from its maker.',
          'Because wear can be manufactured, objects are no more trustworthy as evidence than written documents.',
          'Conservators should never alter the physical condition of a historical object.',
          'Objects are valuable as evidence because their most informative marks were made unintentionally, unlike the marks in a text.',
        ],
        correctAnswer: 3,
        explanation:
          'The argument turns on the stair worn by feet that "nobody put there": the marks "accumulated while its makers were occupied with something else, and it is precisely this inattention that gives it its value as evidence." The text-decoding view is the metaphor the author says has "quietly reversed" the reason objects matter. The claim that forgery equalizes objects and documents overturns the author’s conclusion that the concession leaves "a difference of price rather than of nature." And the author treats conservation as an unavoidable choice about which evidence to keep, not as a prohibition on all alteration.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'In context, the description of an object as "a witness that never meant to speak" most nearly means that:',
        options: [
          'an object conveys meaning only when a skilled interpreter supplies that meaning',
          'an object informs us through marks that were not produced in order to inform anyone',
          'objects are mute and therefore of limited use to the historian',
          'the makers of objects deliberately concealed their intentions from later observers',
        ],
        correctAnswer: 1,
        explanation:
          'The phrase completes the contrast with "a message we have failed to read," and the paragraph has just insisted the maker "had no intention whatever about the scratches." A witness that never meant to speak is one whose testimony was not composed for a hearer. The interpreter-supplies-meaning reading restores the decoding model the author rejects. Treating the object as mute contradicts calling it a witness worth more than a message. Deliberate concealment reintroduces intention, which is precisely what the marks lack.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
      {
        question: 'The author raises the semiotician’s reply that "wear is also a sign" primarily in order to:',
        options: [
          'concede that the textual metaphor is ultimately the correct framework',
          'demonstrate that traces left by use cannot be interpreted at all',
          'show that widening the metaphor costs the analyst a distinction the argument requires',
          'introduce the problem of forged patinas taken up in the following paragraph',
        ],
        correctAnswer: 2,
        explanation:
          'The author answers that "the reply spends the very distinction it needs": if everything is a text, "the word has stopped doing work," and we can no longer say that made marks and use marks "are unreliable in opposite directions." He explicitly grants that "traces can be interpreted," so the reply is not raised to deny interpretation, nor is it a concession that the metaphor wins. Forgery enters in the next paragraph on independent grounds, not as the purpose of raising the semiotician.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following findings, if true, would most WEAKEN the author’s argument?',
        options: [
          'Convincing false histories of use are routinely produced at roughly the cost of writing a false document.',
          'Some documents are composed without any intention that another person read them.',
          'Museum visitors report preferring objects that have been restored to pristine condition.',
          'Many surviving artifacts show no visible wear of any kind.',
        ],
        correctAnswer: 0,
        explanation:
          'After conceding that wear can be faked, the author rests everything on cost: forging use requires simulating "a thousand ordinary decisions that nobody was thinking about," so "the labor tends to show." If false histories of use were as cheap as false sentences, the surviving difference would vanish. Private documents do not affect the reliability asymmetry, since such a document still asserts something. Visitor preference concerns taste, not evidentiary value. Artifacts without wear simply fall outside the class the argument describes.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A historian studying daily life in a village must choose one of four surviving farmhouses to examine. The author’s reasoning most supports selecting:',
        options: [
          'the house whose owner left behind a detailed written inventory of its contents',
          'the house that a preservation society has restored to its original appearance',
          'the house whose floors, thresholds, and door frames retain the marks of long use',
          'the house built by the village’s most celebrated craftsman',
        ],
        correctAnswer: 2,
        explanation:
          'Use marks are the author’s privileged evidence because they were made by people "occupied with something else" and therefore assert nothing and cannot lie. A written inventory is exactly the kind of made record whose author decided what to include. A restored house is the case the author says has been stripped of "most of what it knows." The craftsman’s reputation bears on the maker’s artistry, not on the record of how the house was lived in.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The passage implies that the author would regard a room deliberately arranged for visitors as:',
        options: [
          'worthless as evidence about the household that maintained it',
          'closer in kind to a document than an ordinary room is',
          'the clearest available record of how the household actually lived',
          'impossible to distinguish from a room shaped by ordinary use',
        ],
        correctAnswer: 1,
        explanation:
          'The author writes that rooms "arranged for the visitor" are "lived in differently once the visitor has gone," and adds that such a house "can be as composed as a sentence" — that is, it has become a made mark addressed to a reader. He does not call it worthless; he says the composed and the habitual can be told apart, since "deliberation leaves a different trace than habit does," which also rules out indistinguishability. Treating a staged room as the clearest record of actual life reverses the argument.',
        skill: 'inference',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-cult-04',
    section: 'cars',
    discipline: 'food and everyday life',
    title: 'The Evidence of Breakfast',
    needsReview: true,
    passageText:
      'The study of food has a bias it rarely examines: it goes where the meaning is loudest. Feasts, fasts, sacrifices, the dishes reserved for weddings and for the dead — these have produced a rich literature, and understandably so, since they are dated, bounded, and eager to explain themselves. What people eat on an unremarkable Tuesday morning has attracted far less notice. I want to argue that the priority is exactly inverted, and that the strongest evidence about a culture lies in the meals nobody has thought about.\n\nThe reason is that a feast is a performance and knows it. Its participants are aware of being watched, by one another if by no one else, and the dish they set out is a statement of what they wish to be understood as valuing. Such statements are worth having. But they are testimony offered voluntarily, and testimony offered voluntarily is shaped for its hearer. Breakfast is shaped for nobody. It is repeated in private, without ceremony, and defended by no argument, because no one has ever asked for one.\n\nThe obvious objection is that this proves too little rather than too much. If the everyday meal is genuinely unconsidered, then it is mere inertia, and inertia is not meaning; one cannot read significance out of a habit that nobody has ever had a thought about. Repetition is not commitment. A groove worn by nothing but the absence of a reason to stop is a poor foundation for an account of what a people cares about.\n\nThe objection would be decisive if habits were never disturbed. But they are, constantly, and disturbance is where the evidence appears. An ingredient is discontinued, a bakery closes, a family moves to a country where the bread is subtly wrong, and the reaction is out of all proportion to the value of the thing lost. People grieve over a withdrawn biscuit in terms they would be embarrassed to use about anything they believed to be important. In the shape of that complaint — what exactly was wrong with the substitute, and what would have counted as an acceptable one — a commitment becomes visible that its holder could not have stated in advance and would not have claimed if asked. Grief of this kind is expensive to the mourner and correspondingly hard to counterfeit, which is more than can be said for most declarations of identity.\n\nI should be careful not to overturn one hierarchy only to install another. The everyday is not a purer stratum of truth lying beneath the performances, and the person eating a familiar breakfast is not thereby more genuine than the person laboring over a holiday meal. They answer different questions. The feast records what a group aspires to be and wishes remembered; the ordinary meal records what it would actually miss. A full account needs both and is impoverished by either alone.\n\nBut the aspirational record is already over-collected, and it has a way of standing in for the whole. Cuisines are described to outsiders by their ceremonial dishes, and then described to their own inheritors the same way, until people come to believe that a culture is what it eats on its best days. It is not. A culture is mostly what it does when it is tired, hurried, and unobserved, and it will tell you so if you can find a way of asking that does not sound like a question. The difficulty with asking is that the answer arrives dressed for the occasion.',
    questions: [
      {
        question: 'The central claim of the passage is that:',
        options: [
          'ordinary, unconsidered meals are the strongest evidence about a culture because they are not shaped for an audience',
          'ceremonial meals should be excluded from the study of food, since they are performances rather than practices',
          'a culture is best understood through the dishes it presents to outsiders',
          'habits are merely inertia and therefore reveal nothing about what people value',
        ],
        correctAnswer: 0,
        explanation:
          'The thesis is announced directly — "the strongest evidence about a culture lies in the meals nobody has thought about" — and grounded in the contrast between voluntary testimony "shaped for its hearer" and a breakfast "shaped for nobody." Excluding feasts overstates the author, who insists "a full account needs both." Understanding a culture through what it shows outsiders is the habit he says lets the aspirational record stand in for the whole. The inertia claim is the objection he answers by way of disturbance and grief.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward the existing scholarly literature on feasts is best described as:',
        options: [
          'contemptuous of work he regards as trivial',
          'wholly approving of its aims and its emphases',
          'appreciative of its value while faulting its dominance',
          'detached, offering description without evaluation',
        ],
        correctAnswer: 2,
        explanation:
          'The author calls that literature "rich" and its emphasis "understandably so," and grants that feast testimony is "worth having" and records "what a group aspires to be" — yet he faults the field for a "bias it rarely examines" and calls the aspirational record "already over-collected." That is appreciation joined to a complaint about proportion. Nothing in the passage treats the work as trivial, approval is plainly qualified, and the diction throughout is evaluative rather than detached.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'The discussion of the withdrawn biscuit serves primarily to:',
        options: [
          'illustrate that consumers behave irrationally with respect to inexpensive purchases',
          'answer the charge that unconsidered habits cannot reveal genuine commitments',
          'argue that manufacturers ought to preserve long-established products',
          'compare the nutritional importance of everyday foods with that of ceremonial ones',
        ],
        correctAnswer: 1,
        explanation:
          'The example arrives immediately after the objection that "inertia is not meaning," and is introduced by the claim that "the objection would be decisive if habits were never disturbed." Its work is to show that in the shape of the complaint "a commitment becomes visible that its holder could not have stated in advance." The author is not diagnosing irrationality — he treats the disproportion as evidence, not error. No recommendation to manufacturers is made, and nutrition never enters the passage.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most STRENGTHEN the author’s argument?',
        options: [
          'People can usually describe their favorite holiday dishes in far greater detail than their weekday meals.',
          'Ceremonial cuisines vary more between neighboring regions than everyday cuisines do.',
          'Most people report enjoying holiday meals more than everyday ones.',
          'When asked directly about their food traditions, people describe practices that differ systematically from what they are observed to eat.',
        ],
        correctAnswer: 3,
        explanation:
          'The author’s mechanism is that solicited testimony is "shaped for its hearer" and that "the answer arrives dressed for the occasion." A systematic gap between what people say when asked and what they are observed to do is that distortion documented. Greater recall of holiday dishes shows only that feasts are memorable, which the author already grants in calling them legible. Regional variation in ceremonial food and reported enjoyment both concern properties of feasts, not the reliability of what people report about themselves.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A researcher wants to determine what a community would genuinely miss if it were displaced. The passage most supports:',
        options: [
          'observing what the community eats when it is not being asked about food',
          'attending and documenting the community’s principal annual festival',
          'interviewing elders about the origins of the community’s traditional dishes',
          'comparing the community’s cuisine with those of neighboring communities',
        ],
        correctAnswer: 0,
        explanation:
          'The author states that "the ordinary meal records what it would actually miss," and warns that a direct question yields an answer "dressed for the occasion" — so observation outside the frame of inquiry is the method his argument recommends. The festival is the performance that records aspiration instead. Interviews about origins are solicited testimony of exactly the kind he distrusts. Cross-community comparison addresses distinctiveness, not what would be missed.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In context, the closing remark that "the answer arrives dressed for the occasion" most nearly means that:',
        options: [
          'people take care to appear presentable when discussing subjects they consider serious',
          'researchers should time their interviews to coincide with ceremonial events',
          'informants are generally unwilling to discuss ordinary domestic matters',
          'a direct question elicits a reply already adjusted for the person who asked it',
        ],
        correctAnswer: 3,
        explanation:
          'The sentence completes the point that a culture will disclose itself only to a way of asking "that does not sound like a question," and it echoes the earlier claim that "testimony offered voluntarily is shaped for its hearer." The literal reading about personal appearance mistakes the metaphor for a description of dress. Scheduling interviews around ceremonies inverts the advice. Unwillingness to discuss ordinary matters attributes reticence, whereas the author’s worry is about the reply being shaped, not withheld.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-cult-05',
    section: 'cars',
    discipline: 'tourism and authenticity',
    title: 'Who Writes the Dance',
    needsReview: true,
    passageText:
      'The charge against tourism is by now a genre of its own. The visitor arrives, pays, and is shown a dance; the dance has been shortened, its difficult passages removed, its meaning explained in a vocabulary the dancers do not use among themselves. What was a rite has become a product, and the product is a lie about the rite. Something has gone wrong here, and the critics who say so are not imagining it. But they have consistently misidentified what went wrong, and the misidentification does more damage than the thing they complain of.\n\nThe error lies in the assumption that performance is falsification — that an act done for an audience is thereby less real than the same act done for no one. This will not survive a moment of scrutiny. Rites are performances. They are rehearsed, costumed, staged, and judged; their participants care a great deal how they come off; a wedding is not less a wedding because the family is watching, and the celebrant who fumbles the words has committed an error precisely because there is an audience to fail. The line between the ceremony and the show cannot be drawn by sincerity, because the ceremony was never a private effusion of feeling to begin with.\n\nA critic will press where his case is strongest: money changes matters. To be paid by a stranger for an act formerly performed among one’s own, he says, alters the act itself, whatever the theory of performance may say. I agree that it alters the act; I deny that payment is the corrupting agent. Patronage is old. Courts, temples, guilds and cities have funded performances for as long as there have been performances, and the funding did not automatically hollow out what it paid for. A great deal of what we now call heritage was commissioned by someone with an interest in how it turned out.\n\nWhat matters is a different relation, one that money merely tends to bring with it. A performance is degraded when the standard of correctness passes from the performers to the audience — when the question is no longer whether the dance was done properly but whether the visitors recognized it. The dancers may be entirely sincere and the transfer will have occurred anyway; they may be entirely mercenary and, so long as they remain the judges of their own work, nothing essential has been lost. Authorship, not sincerity, is the axis on which this turns, and the useful questions are therefore questions of control: who decides what counts as a correct performance, who may alter it, and who keeps what it earns.\n\nHaving relocated the objection, I must admit that relocating it does not dispose of it. Authorship inside a market is a thinner possession than it sounds. A community may hold every formal right to its own dance and still find that the shortened version is the one that fills the hall, that visitors arrive with a picture already in mind, and that departing from the picture is punished by an audience convinced it has been cheated. Nobody has issued an instruction; the pressure is exerted by what sells. So the critics are owed this much: a market can take authorship back through the door of demand after the law has handed it over at the window. What they are not owed is the premise that the dancers are liars. The dancers are working, under a constraint they did not choose, at a craft whose standards someone else has begun to set — a familiar predicament, and not a moral failure.',
    questions: [
      {
        question: 'Which of the following best states the passage’s thesis?',
        options: [
          'Tourism corrupts living culture by converting rites into products sold to strangers.',
          'Because all culture is performed, nothing of value is lost when a rite is staged for visitors.',
          'The objection to tourism should concern who controls a performance rather than whether it is sincerely felt.',
          'Payment by outsiders is the decisive factor that degrades a traditional performance.',
        ],
        correctAnswer: 2,
        explanation:
          'The author states it outright: "Authorship, not sincerity, is the axis on which this turns," and the useful questions are "questions of control." The straightforward corruption thesis is the critics’ genre he says misidentifies the problem. The claim that nothing is lost overshoots badly, since he opens by granting "something has gone wrong here" and closes by conceding that markets erode authorship. And he explicitly denies that "payment is the corrupting agent," pointing to the long history of patronage.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The example of the celebrant who "fumbles the words" is offered to suggest that:',
        options: [
          'an audience is part of what makes a ceremony capable of being performed correctly',
          'ceremonies are more prone to error than commercial performances are',
          'spectators ought to be excluded from rites of a private character',
          'sincerity is the standard by which ritual performance should be judged',
        ],
        correctAnswer: 0,
        explanation:
          'The example concludes that the celebrant "has committed an error precisely because there is an audience to fail," which is why "a wedding is not less a wedding because the family is watching." Its work is to show that being performed for others is constitutive rather than corrupting. No comparison of error rates between ceremonial and commercial settings is made. Excluding spectators reverses the point. And the whole paragraph is directed against sincerity as the criterion.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward the critics of tourism is best characterized as:',
        options: [
          'wholly dismissive of a complaint he considers baseless',
          'in full agreement with both their diagnosis and their remedy',
          'uninterested in the moral question their complaint raises',
          'granting the reality of their concern while rejecting the terms in which they state it',
        ],
        correctAnswer: 3,
        explanation:
          'The author writes that "the critics who say so are not imagining it" and ends by conceding "the critics are owed this much" about market pressure, while insisting throughout that they have "misidentified what went wrong" by resting the case on sincerity. Dismissal is ruled out by those concessions; full agreement is ruled out by the charge of misidentification; and the closing verdict that the dancers face "a familiar predicament, and not a moral failure" is itself a moral judgment, not indifference.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'Which of the following findings, if true, would most WEAKEN the author’s position?',
        options: [
          'Some communities earn a substantial share of their income from performances staged for visitors.',
          'Performances whose communities remained the sole judges of correctness were nonetheless found by their participants to have lost their meaning once outsiders began attending.',
          'Visitors frequently cannot tell a shortened performance from a complete one.',
          'Many traditional performances were shortened or altered in the past for reasons unrelated to outside audiences.',
        ],
        correctAnswer: 1,
        explanation:
          'The author claims that so long as performers "remain the judges of their own work, nothing essential has been lost" — authorship, not audience, is decisive. Cases where authorship is fully retained and meaning is lost anyway strike directly at that claim. Income from staged performance is compatible with his view of patronage. What visitors can detect is irrelevant to where the standard of correctness sits. And alteration for internal reasons supports his insistence that change alone is not corruption.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A regional council is drafting rules for traditional performances staged for visitors. The author’s reasoning most supports a rule that:',
        options: [
          'forbids charging admission to any ceremony of traditional origin',
          'vests the authority to approve changes to a performance in the performers themselves',
          'requires that every performance be presented in unabridged form',
          'caps the number of visitors permitted to attend a given performance',
        ],
        correctAnswer: 1,
        explanation:
          'Since the author holds that degradation occurs when "the standard of correctness passes from the performers to the audience," the intervention his argument recommends is one that keeps the power to alter with the performers. Banning admission charges targets payment, which he explicitly refuses to treat as the corrupting agent. Mandating unabridged performance freezes the work and hands the standard to a rule rather than to its authors. Limiting attendance addresses volume, not control.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The final paragraph functions primarily to:',
        options: [
          'qualify the author’s own reframing by showing that formal authorship can be undone by market demand',
          'restate the critics’ original position without alteration or comment',
          'abandon the distinction between sincerity and authorship developed earlier',
          'recommend a practical policy for managing the number of visiting tourists',
        ],
        correctAnswer: 0,
        explanation:
          'The paragraph opens by admitting that "relocating it does not dispose of it" and shows that "a market can take authorship back through the door of demand after the law has handed it over at the window" — a limitation on the author’s own solution. It does more than restate the critics, since it also refuses them "the premise that the dancers are liars." The sincerity–authorship distinction is retained, not abandoned, and no policy on visitor numbers is proposed.',
        skill: 'function',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-cult-06',
    section: 'cars',
    discipline: 'nostalgia and cultural memory',
    title: 'The Past Tense of Complaint',
    needsReview: true,
    passageText:
      'Nostalgia is the one sentiment that educated people feel entitled to refute. Presented with a longing for some vanished decade, the standard response is to produce the record: the era in question was poorer than remembered, more violent, more constrained, and the golden light in which it is bathed falls only on those who were comfortable in it. The correction is almost always accurate. It is also, as anyone who has attempted it can attest, almost entirely without effect, and its failure is not a failure of delivery but of address. It answers a claim that was never made.\n\nA nostalgic sentence looks like a description of the past and functions as a complaint about the present. When someone says that people used to know their neighbors, the proposition on the surface concerns a former state of affairs; the utterance is about something missing now. Rebutting the surface proposition leaves the utterance untouched, which is why the corrected party is never grateful and rarely quiet. He has not been shown to be wrong about anything he was trying to say. He has been shown to be wrong about the date.\n\nNone of this is a general defense of nostalgia, and the critics have a real anxiety that deserves acknowledgment rather than dismissal. Political movements of a restorative kind do recruit from nostalgic feeling. A longing for a past that never existed can be organized, and once organized it makes demands on people who were never consulted. Anyone who has watched this happen is right to be watchful.\n\nBut watchfulness has collapsed a distinction that ought to be kept sharp. Nostalgia and restorationism resemble one another in mood and differ absolutely in structure. Nostalgia is a form of mourning: it knows its object is gone, does not propose to retrieve it, and asks nothing beyond acknowledgment. Restorationism is a program: it holds that the past is recoverable, that something now standing must be cleared away to recover it, and that others may be required to bear the cost. The first makes no claim on anyone. The second is a politics and should be argued with as one.\n\nThe diagnostic is simple enough to apply, and it is not sincerity. Ask what the speaker wants done. A man who says the old market was better and means only that he misses it has told you about his life. A man who says it and proposes to reopen it by clearing away what replaced it has told you about his program, and the program can be assessed on its merits, its costs, and the people it would displace, none of which has anything to do with whether the market was in fact better.\n\nTreating every nostalgic as a restorationist in waiting is therefore both unjust and, more to the point, self-defeating. It convicts a mood of a plan. And by insisting on the factual question, it leaves the actual complaint standing in the road, unexamined and available to whoever is willing to take it seriously. Restorationists prosper on ground their opponents have declined to occupy. The more useful response is neither correction nor indulgence but translation: to ask what present loss is being registered in the past tense. The answer is often specific, sometimes remediable, and has very little to do with the decade that was named.',
    questions: [
      {
        question: 'The main idea of the passage is best expressed as:',
        options: [
          'Nostalgic accounts of the past are usually accurate and have been unfairly dismissed by educated critics.',
          'Because nostalgia is a complaint about the present, factual correction misses it, and it must be distinguished from restorationist politics.',
          'Nostalgia should be understood as the early stage of a restorationist political program.',
          'Longing for the past is a harmless private sentiment that calls for no scrutiny of any kind.',
        ],
        correctAnswer: 1,
        explanation:
          'Both halves of the argument are stated plainly: a nostalgic sentence "looks like a description of the past and functions as a complaint about the present," so correction "answers a claim that was never made"; and nostalgia and restorationism "differ absolutely in structure." The claim that nostalgic accounts are accurate contradicts the author, who says the correction "is almost always accurate." Treating nostalgia as incipient restorationism is the collapse he calls unjust. And he grants the critics "a real anxiety," so he does not claim nostalgia escapes scrutiny.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'In context, the remark that the corrected party "has been shown to be wrong about the date" most nearly means that:',
        options: [
          'nostalgic speakers characteristically misremember when the events they describe occurred',
          'chronology is the least reliable component of popular historical memory',
          'the correction has succeeded in refuting the speaker’s actual position',
          'the refutation touches only the past-tense framing, not the grievance being expressed',
        ],
        correctAnswer: 3,
        explanation:
          'The sentence caps the claim that rebutting the surface proposition "leaves the utterance untouched" and that the speaker "has not been shown to be wrong about anything he was trying to say." The date stands for the discardable historical wrapper. Reading it as a claim about faulty chronology takes the phrase literally and loses the contrast being drawn. Popular memory in general is not the subject. And saying the correction succeeds reverses the sentence it concludes.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
      {
        question: 'According to the passage, a restorationist program differs from nostalgia chiefly in that it:',
        options: [
          'imposes costs on people who did not share the original longing',
          'rests on a more accurate understanding of the period it invokes',
          'is expressed with markedly greater emotional intensity',
          'concerns a more recent period of history',
        ],
        correctAnswer: 0,
        explanation:
          'The structural contrast is explicit: nostalgia "asks nothing beyond acknowledgment" and "makes no claim on anyone," whereas restorationism holds "that others may be required to bear the cost," and organized longing "makes demands on people who were never consulted." Accuracy is not the dividing line, since the author says a longing "for a past that never existed" can be organized. The two "resemble one another in mood," which rules out intensity, and the period invoked is never said to differ.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most STRENGTHEN the author’s explanation of why factual correction fails?',
        options: [
          'Most people are poorly informed about the historical periods they most admire.',
          'Nostalgic speakers can usually name the specific decade they have in mind.',
          'Speakers presented with accurate corrections continue to voice the same longing, restating it in terms of present conditions.',
          'Historians disagree among themselves about how prosperous earlier decades actually were.',
        ],
        correctAnswer: 2,
        explanation:
          'The author’s explanation is that the correction "answers a claim that was never made," since the real utterance concerns the present. Speakers who accept the correction and then restate the same longing in present-tense terms display exactly that: the historical wrapper was discardable and the grievance survives. Poor historical knowledge would explain why corrections are needed, not why they fail to land. Naming a decade is irrelevant to what the utterance is doing. Disagreement among historians would undercut the corrections themselves rather than support the author’s account of their failure.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A civic leader repeatedly hears residents say that their town "used to be a real community." The passage most supports responding by:',
        options: [
          'presenting data showing that residents are no more isolated now than in the past',
          'treating the complaint as an early warning sign of an emerging political movement',
          'agreeing that the town was in fact better in the respects the residents mention',
          'asking what the residents now lack that they are describing in the past tense',
        ],
        correctAnswer: 3,
        explanation:
          'The author prescribes "neither correction nor indulgence but translation: to ask what present loss is being registered in the past tense," adding that the answer is "often specific, sometimes remediable." Presenting data is the correction he says answers a claim never made. Treating the remark as a political warning sign convicts "a mood of a plan," which he calls unjust and self-defeating. Agreeing that the past was better is the indulgence he rejects alongside correction.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward critics who treat nostalgia as latent restorationism is best described as:',
        options: [
          'sympathetic and in full agreement with their approach',
          'amused by an anxiety he regards as entirely groundless',
          'critical of their reasoning while allowing that their underlying worry is warranted',
          'resigned to a problem he believes cannot be addressed at all',
        ],
        correctAnswer: 2,
        explanation:
          'The author says such critics have "a real anxiety that deserves acknowledgment rather than dismissal" and that watchfulness is right, yet judges their practice "both unjust and, more to the point, self-defeating." That combination is criticism with a granted premise. Full agreement is impossible given those charges; calling the anxiety groundless contradicts the acknowledgment; and resignation is ruled out by the concrete remedy of translation offered at the close.',
        skill: 'tone',
        needsReview: true,
      },
    ],
  },
]
