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
 * AI-authored; reviewed (keys verified, distractors length-balanced) — needsReview cleared.
 */
export const CARS_CULTURE_PASSAGES: MCATPassage[] = [
  {
    id: 'cars-cult-01',
    section: 'cars',
    discipline: 'media studies and attention',
    title: 'An Audience of One',
    needsReview: false,
    passageText:
      'In the winter of 1841, readers in New York crowded the waterfront to shout at an arriving packet ship, asking the passengers at the rails whether a fictional girl had died. The novel was appearing in monthly installments; the ship carried the next one; the crowd could not wait the hour it would take to unload. Whatever one thinks of the book, the scene records something worth pausing over: strangers on a dock could assume, correctly, that strangers on a ship had the same dozen pages by heart.\n\nA second scene, from my own childhood. On certain evenings the street went quiet, because a broadcast was on and every set was tuned to it — there was little else to tune to. The next morning the bakery queue moved slowly, since every transaction opened with the same question about the previous night. My parents thought the programs mediocre and said so, at length, to neighbors who defended them with feeling. It took me years to see that the mediocrity was doing something: it was being disliked in common.\n\nA third scene, any evening now. A train carriage at dusk, every face lit gently from below. One passenger is deep in a serial drama, another in the collapse of a distant government, a third in a stranger’s kitchen renovation. The absorption is real — deeper, probably, than the dock crowd’s, and certainly better catered, since each is receiving exactly what a machine has learned he wants. And not one of them will mention any of it to the person in the next seat, because the odds that the next seat saw the same thing have fallen, quietly, to almost nothing.\n\nSet the three scenes side by side and the usual story about our media — that they have eroded attention — reads like a diagnosis of the wrong organ. Attention is thriving; the carriage proves it. What has thinned to the point of vanishing is the presumption that carried the dock and the bakery: the license to open a conversation with a stranger on the assumption that he has done the same homework. Strangers were never talkable because they shared values; my parents and their neighbors shared few. They were talkable because they shared material — something outside both parties that either could point at, praise, or, best of all, deplore.\n\nI would not trade the carriage for the bakery. The old commonness was compulsory and narrow, assembled by a handful of men, and it starved everyone whose tastes ran elsewhere; its warmth looks better in memory than it felt in the queue. The liberty of the carriage is genuine. But the price of that liberty is invisible from inside any single seat, because each seat, on its own terms, is better served than any seat has ever been. The loss appears only between the seats, in the silence where the pointing used to happen.\n\nWe interrogate each new medium about what it does to the solitary user — does it inform him, addict him, improve him. Real questions, but late ones. An audience was once an event: a thing that happened to many people at the same hour, leaving them, whatever else it did, with one another. An audience is now a statistic — a million private satisfactions, added up by the only party in a position to know that they occurred.',
    questions: [
      {
        question: 'Which of the following best expresses the conclusion the passage builds toward?',
        options: [
          'People today attend to media less closely than the dock crowds of the nineteenth century attended to serialized novels.',
          'The compulsory common culture of the broadcast era was preferable to the freedom of modern media.',
          'New media should be evaluated chiefly by how thoroughly they satisfy each individual user.',
          'Modern media have deepened individual absorption while dissolving the shared material that once let strangers talk to one another.',
        ],
        correctAnswer: 3,
        explanation:
          'The three scenes are assembled precisely to yield this: "Attention is thriving; the carriage proves it," while what has vanished is "the license to open a conversation with a stranger on the assumption that he has done the same homework." The less-attention option is contradicted by the carriage absorption being "deeper, probably, than the dock crowd’s." The preference for the broadcast era is refused outright — "I would not trade the carriage for the bakery." And the individual-satisfaction standard is the one the closing paragraph calls asking "real questions, but late ones."',
        skill: 'main-idea',
        needsReview: false,
      },
      {
        question: 'The description of the train carriage at dusk serves primarily to:',
        options: [
          'demonstrate that commuters prefer solitude to conversation',
          'complete the sequence of scenes by exhibiting absorption that is genuine yet shared with no one present',
          'argue that handheld devices produce shallower engagement than novels or broadcasts',
          'lament the decline of courtesy in public spaces',
        ],
        correctAnswer: 1,
        explanation:
          'The carriage is the third panel in the induction: absorption "real — deeper, probably, than the dock crowd’s," paired with the fact that "not one of them will mention any of it to the person in the next seat." Its role is to isolate what changed when the dock and bakery scenes are held beside it. The solitude-preference reading mistakes a structural fact — "the odds that the next seat saw the same thing have fallen" — for a taste. The shallow-engagement reading is expressly denied. And courtesy is never at issue; nobody in the carriage behaves badly.',
        skill: 'function',
        needsReview: false,
      },
      {
        question: 'The author’s remark that strangers "were talkable because they shared material" rather than values implies that:',
        options: [
          'people of the broadcast era agreed with one another more than people do now',
          'shared moral commitments are sufficient to sustain conversation between strangers',
          'common acquaintance with the same object, not agreement about it, is what makes exchange between strangers possible',
          'strangers in earlier eras confined their conversations to uncontroversial subjects',
        ],
        correctAnswer: 2,
        explanation:
          'The bakery scene supplies the evidence: the author’s parents "thought the programs mediocre" and argued with neighbors who "defended them with feeling" — disagreement flourishing on shared material, which is why the mediocrity "was being disliked in common." The greater-agreement option is contradicted by that same scene, and by "my parents and their neighbors shared few" values. The sufficiency of shared values is exactly what the sentence denies. And the uncontroversial-subjects option inverts the passage, which prizes shared material because it gave strangers something to "deplore."',
        skill: 'inference',
        needsReview: false,
      },
      {
        question: 'Which of the following findings, if true, would most WEAKEN the author’s argument?',
        options: [
          'Studies of fully personalized audiences find that the same handful of stories nonetheless reaches nearly everyone within days, and that strangers discuss them readily.',
          'Ridership on commuter railways has declined steadily in recent decades.',
          'The dock crowds of 1841 represented only the literate minority of the city.',
          'Most people report preferring tailored recommendations to scheduled broadcasts.',
        ],
        correctAnswer: 0,
        explanation:
          'The argument requires that machine-tailored consumption dissolve the shared object — that the odds of the next seat having seen the same thing approach zero. If personalization in practice still concentrates nearly everyone on the same stories within days, the loss that "appears only between the seats" loses its cause and has not occurred. Railway ridership is scenery, not mechanism. The narrowness of the 1841 public is already conceded — the old commonness "starved everyone whose tastes ran elsewhere." And a preference for tailoring is compatible with the argument, which grants that each seat is "better served than any seat has ever been."',
        skill: 'strengthen-weaken',
        needsReview: false,
      },
      {
        question: 'The author’s reasoning most strongly supports which of the following judgments about a proposed media service?',
        options: [
          'It should be judged favorably if each subscriber reports high personal satisfaction.',
          'It should be judged favorably if it maximizes the hours each subscriber spends absorbed.',
          'It should be judged unfavorably if subscribers are required to view identical content.',
          'It deserves credit if large numbers of its subscribers encounter the same material at roughly the same time.',
        ],
        correctAnswer: 3,
        explanation:
          'The closing paragraph relocates the standard from the solitary user to the crowd: an audience worth the name is "a thing that happened to many people at the same hour, leaving them... with one another." A service that produces such coincidences supplies what the carriage lacks. Individual satisfaction is the measure by which every seat already scores perfectly, which is why the loss "is invisible from inside any single seat." Hours of absorption measure attention, the organ the author says is thriving. And the identical-content option, though it echoes the author’s misgivings about compulsion, states a ground for condemnation the passage never adopts — his complaint is about what vanished, not a rule against common material, which is the very thing he values.',
        skill: 'application',
        needsReview: false,
      },
      {
        question: 'In context, the closing contrast between an audience as "an event" and an audience as "a statistic" most nearly means that:',
        options: [
          'attendance at live public performances has fallen below historical levels',
          'audiences once formed around the same thing at the same hour, whereas they now exist only as aggregated counts of separate, private viewings',
          'media companies now gather more data about their viewers than broadcasters ever could',
          'genuinely memorable public events no longer occur',
        ],
        correctAnswer: 1,
        explanation:
          'Each term is defined in its own sentence: the event is "a thing that happened to many people at the same hour, leaving them... with one another"; the statistic is "a million private satisfactions, added up." The contrast is between simultaneity that connects and aggregation that does not. Live attendance is not the subject — the bakery-era audience sat at home. The data-gathering reading fastens on "added up by the only party in a position to know" but misses what is being counted and what was lost. And the no-memorable-events reading turns a claim about how audiences are constituted into a claim about history’s content.',
        skill: 'meaning-in-context',
        needsReview: false,
      },
    ],
  },
  {
    id: 'cars-cult-02',
    section: 'cars',
    discipline: 'technology and society',
    title: 'The Price of the Difficult Path',
    needsReview: false,
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
        needsReview: false,
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
        needsReview: false,
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
        needsReview: false,
      },
      {
        question: 'Which of the following, if true, would most STRENGTHEN the author’s account of how tools exert influence?',
        options: [
          'Users of a widely adopted tool consistently report in surveys that they feel the tool controls their behavior in ways they did not choose.',
          'A tool redesigned so that a harmful action became physically impossible eliminated that action entirely.',
          'When a service reversed which of two equally available options required one extra step, the share of users choosing each option reversed as well.',
          'Designers of widely used systems generally intend their products to benefit the people who use them.',
        ],
        correctAnswer: 2,
        explanation:
          'The mechanism claimed is that a difference in cost, with both options left open, redistributes behavior at scale. A reversal of shares following nothing but a reversal of which option costs an extra step is that mechanism observed directly. Reported feelings of being controlled describe an attitude, not the pricing effect. The tool that makes an action impossible illustrates compulsion, which the author distinguishes from pricing. Designers’ good intentions bear on motive, not on how influence operates.',
        skill: 'strengthen-weaken',
        needsReview: false,
      },
      {
        question: 'A city wants a larger share of residents to compost their food waste. The author’s reasoning most supports:',
        options: [
          'mounting a campaign that explains the environmental benefits of composting',
          'arranging collection so that composting requires no extra sorting while landfill disposal requires an additional step',
          'making composting compulsory, with penalties enforced against households that refuse',
          'surveying residents about their attitudes toward waste disposal',
        ],
        correctAnswer: 1,
        explanation:
          'The author’s operative questions are "what does this thing make effortless, what does it leave merely possible," and his mechanism is that small cost differences aggregate into something "indistinguishable from a rule." Reassigning which option carries the extra step applies exactly that. Persuasion targets deliberation, but the author’s point is that defaults matter most "when nobody is deliberating." A compulsory rule enforced by penalties forbids rather than prices, which is the mode of influence the author explicitly distinguishes from his own — defaults do "the work that compulsion would do" without compelling anyone. Surveying attitudes gathers opinion without altering any cost.',
        skill: 'application',
        needsReview: false,
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
        needsReview: false,
      },
    ],
  },
  {
    id: 'cars-cult-03',
    section: 'cars',
    discipline: 'material culture and objects',
    title: 'The Testimony of Wear',
    needsReview: false,
    passageText:
      'A conservator once showed me a chair returned to the condition it had on the day it left the workshop. The joinery was invisible, the finish exact, the object mostly gone. What the treatment had removed was not dirt but testimony — the scratches, the sheen worn by hands, the hollow a heel rubs into a stretcher — and none of it can be got back. To conserve is always to choose which evidence to keep and which to sacrifice. The question worth asking first is what kind of evidence an old object is.\n\nThe prevailing answer is that it is a text. A chair, a pot, a coat is said to encode meanings which the analyst decodes. The metaphor has been productive, and I do not propose to discard it. But it has quietly reversed the reason objects are worth studying at all: they are not texts and cannot be made to behave like them. A text exists because an author decided that it should, and every mark in it was placed there for a reader. The hollow worn into a stone stair is different in a way that no amount of interpretive subtlety can close. It is a record of where people put their feet, and nobody put it there. It was not addressed to us; it was not addressed at all. It accumulated while its makers were occupied with something else, and it is precisely this inattention that gives it its value as evidence.\n\nThe sophisticated reply is to widen the metaphor rather than abandon it. Wear, the semiotician says, is also a sign; reading traces is still reading; the textual model has not been escaped, only extended to a larger alphabet. I grant that traces can be interpreted, but the reply spends the very distinction it needs. If everything is a text, the word has stopped doing work, and we lose the ability to say the thing most worth saying — that marks made to be read and marks made by use are unreliable in opposite directions. A made mark can lie: it can assert a piety its maker never felt. A use mark cannot lie, because it asserts nothing; it can only be misread. Objects are worse liars than documents and better at being misunderstood, and the two failings call for different disciplines.\n\nThis is not a claim that objects are innocent, and here the argument must give ground. Wear can be manufactured. Patinas are faked, tools are distressed, rooms are arranged for the visitor and lived in differently once the visitor has gone. A house can be as composed as a sentence. What survives the concession is a difference of price rather than of nature. To forge a false sentence costs a moment. To forge a convincing history of use, one must simulate a thousand ordinary decisions that nobody was thinking about, and the forger must think about all of them; the labor tends to show, because deliberation leaves a different trace than habit does.\n\nWhich returns me to the chair. The conservator had not recovered the object; she had deleted most of what it knows, adjudicating between witnesses and ruling for the maker against everyone who ever sat down. The ruling cannot be defended by appeal to the maker’s intention, since the maker had no intention whatever about the scratches. That is the whole point of them. An object is not a message we have failed to read. It is a witness that never meant to speak, which is why, handled carefully, it is worth more than a message.',
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
          'The argument turns on the hollow worn into the stair — "a record of where people put their feet, and nobody put it there": the marks "accumulated while its makers were occupied with something else, and it is precisely this inattention that gives it its value as evidence." The text-decoding view is the metaphor the author says has "quietly reversed" the reason objects matter. The claim that forgery equalizes objects and documents overturns the author’s conclusion that the concession leaves "a difference of price rather than of nature." And the author treats conservation as an unavoidable choice about which evidence to keep, not as a prohibition on all alteration.',
        skill: 'main-idea',
        needsReview: false,
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
        needsReview: false,
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
        needsReview: false,
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
        needsReview: false,
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
        needsReview: false,
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
        needsReview: false,
      },
    ],
  },
  {
    id: 'cars-cult-04',
    section: 'cars',
    discipline: 'food and everyday life',
    title: 'The Evidence of Breakfast',
    needsReview: false,
    passageText:
      'Forty years after she left the country of her birth, in a supermarket aisle in the city where she had raised her children, a woman I know began to weep at the smell of a dark rye bread she had not tasted since emigrating and had not once, in the intervening decades, thought of. She told the story against herself, laughing, and ended it with the sentence I have been turning over ever since: it was never even good bread.\n\nNone of the ordinary explanations of those tears will hold their shape. Take deprivation first. She had eaten well for forty years; the bread had been cheap and everywhere in her childhood, prized by no one, least of all her. Whatever ambushed her in that aisle, it was not the memory of want.\n\nTake next what might be called the heirloom account: that we are moved by what we have carried, and she had simply carried this. But she had carried a great deal, deliberately — recipes copied in her mother’s hand, the feast dishes cooked each winter, the songs. None of it had ever ambushed her. The feasts were dear to her the way a photograph is dear: chosen, framed, revisited on schedule. The bread had never been chosen at all. It was what breakfast was — several thousand mornings of it, eaten without one thought that anyone, least of all she, could now recover.\n\nTake, finally, symbolism: the bread as the nation, the childhood, the mother. But symbols announce themselves; that is their function. Flags did nothing to her, she said, and the national dishes served at consular receptions left her cold. The bread was not standing for anything. It was simply back.\n\nThe explanations fail, I think, because each assumes that whatever holds a person deeply must at some point have been held in view — valued, chosen, at least noticed. Invert that assumption and the tears become legible. The bread mattered as it did because it had never once been appraised. What is chosen is curated, and curation is performance: we assemble it with an eye to how it will look, to others and to ourselves. What is merely repeated sinks beneath the level at which a person edits herself, and becomes floor — the thing that holds you up precisely because you have stopped seeing it. Nobody notices a floor until it is gone, and by then it is not in the room to be examined. It is in a supermarket on another continent, disguised as bread.\n\nThere is a caution here for anyone who studies how people live, and I include myself. Our archives bulge with what communities meant to show — the festivals, the costumes, the recipes judged worth writing down. That record is true, but it is a record of self-presentation, edited by its subjects before any scholar arrived. The floor leaves almost no record, since recording is an act of attention and the floor is defined by receiving none; it surfaces only under disturbance — emigration, shortage, the bakery that closes, the recipe that quietly changes. I do not conclude that the floor is the truer stratum; a person is both what she curates and what she stands on. The two answer different questions. The feast records what she wished to be. The bread told her, before she could compose an answer, what she was made of — and it was never even good bread, which is the point. Nothing chosen for its merits could have done what it did.',
    questions: [
      {
        question: 'The central claim of the passage is that:',
        options: [
          'emigrants suffer more from the loss of everyday foods than from the loss of ceremonies',
          'what holds a person most deeply may be what was never chosen or appraised, which is why it surfaces only when disturbed',
          'the woman’s tears are best explained by the scarcity of familiar goods in her adopted country',
          'scholars of culture should stop documenting festivals and ceremonial foods',
        ],
        correctAnswer: 1,
        explanation:
          'The passage arrives at its thesis by inverting the assumption the failed explanations share: "the bread mattered as it did because it had never once been appraised," and the unappraised "surfaces only under disturbance." The comparative-suffering option turns one woman’s case into a general ranking of losses the author never asserts. Scarcity is the first explanation examined and dismissed — "it was not the memory of want." And the author explicitly declines to dethrone the feast record: it "is true," and "a person is both what she curates and what she stands on."',
        skill: 'main-idea',
        needsReview: false,
      },
      {
        question: 'The author considers and rejects the "heirloom account" primarily in order to:',
        options: [
          'distinguish what a person deliberately carries and displays from what she repeats without thought',
          'show that the woman had abandoned the ceremonies of her childhood',
          'establish that recipes and songs are incapable of producing strong emotion',
          'demonstrate that photographs are unreliable records of family life',
        ],
        correctAnswer: 0,
        explanation:
          'The rejection turns on a contrast internal to the woman’s own life: she "had carried a great deal, deliberately," and "none of it had ever ambushed her," while the bread "had never been chosen at all." The heirloom account fails precisely because it cannot separate those two classes, and the separation becomes the passage’s central distinction between the curated and the floor. The abandonment option is contradicted — she "cooked each winter" the feast dishes. The incapacity option overreads: the carried things were "dear to her," just never ambushing. And the photograph appears as a simile for chosen dearness, not as a subject of critique.',
        skill: 'function',
        needsReview: false,
      },
      {
        question: 'The passage suggests that the reason "the floor leaves almost no record" is that:',
        options: [
          'historians have judged everyday matters too trivial to preserve',
          'ordinary household objects decay faster than ceremonial ones',
          'communities deliberately conceal their daily habits from outside observers',
          'recording requires attention, and the floor consists of exactly what receives none',
        ],
        correctAnswer: 3,
        explanation:
          'The author states the mechanism in one clause: "recording is an act of attention and the floor is defined by receiving none." The gap in the archive originates with the people living the habits, not with historians’ judgments — the record was "edited by its subjects before any scholar arrived," and even that editing was of what they did notice. The decay option imports a material explanation the passage never offers. And concealment gets the psychology backward: nothing is hidden, because nothing was ever seen — the woman herself could not have named the bread before the aisle.',
        skill: 'inference',
        needsReview: false,
      },
      {
        question: 'Which of the following findings, if true, would most STRENGTHEN the author’s claim that disturbance reveals unappraised attachments?',
        options: [
          'Emigrants asked before departure what they expect to miss produce lists that match what they later report missing.',
          'Most adults can describe their childhood breakfasts in considerable detail when interviewed.',
          'People asked in advance what they would miss under rationing almost never name the goods whose loss they later grieve most.',
          'Ceremonial foods are documented far more thoroughly than everyday ones in most archives.',
        ],
        correctAnswer: 2,
        explanation:
          'If attachments to the unappraised are invisible to their holders until disturbance exposes them, then advance self-report should fail exactly where later grief is strongest — which is what the rationing finding shows. The matching-lists finding is the same test with the opposite result, and would weaken the claim by showing the attachments were in view all along. Detailed breakfast recall likewise cuts against the floor being beneath notice. And the documentation imbalance restates the archival situation the author already describes rather than testing whether disturbance reveals anything.',
        skill: 'strengthen-weaken',
        needsReview: false,
      },
      {
        question: 'An ethnographer wants to learn which of a community’s practices its members are least able to articulate. The passage most supports:',
        options: [
          'observing daily routine without inquiry, and noting what members grieve when that routine is interrupted',
          'asking members to list the traditions they consider most essential',
          'documenting the community’s principal festival in full detail',
          'collecting the recipes that families have deliberately preserved',
        ],
        correctAnswer: 0,
        explanation:
          'The practices members cannot articulate are, on the author’s account, the floor — what "sinks beneath the level at which a person edits herself" — and the floor "surfaces only under disturbance." Watching routine and attending to grief at its interruption is the only listed method aimed at that stratum. Asking for essential traditions harvests the curated record, assembled "with an eye to how it will look, to others and to ourselves." The festival is the community’s self-presentation at its most deliberate. And preserved recipes are the heirloom class — carried on purpose, and therefore already articulable.',
        skill: 'application',
        needsReview: false,
      },
      {
        question: 'The author’s closing observation that the bread was "never even good bread, which is the point" most nearly means that:',
        options: [
          'the woman’s memory had exaggerated the bread’s quality over the years',
          'inexpensive foods are generally remembered more fondly than fine ones',
          'the woman regretted the mornings she had spent on inferior bread',
          'the bread’s hold on her never depended on its merits, since it had never been valued for any',
        ],
        correctAnswer: 3,
        explanation:
          'The sentence is glossed by the one that follows it: "Nothing chosen for its merits could have done what it did." The bread’s badness certifies that it was never appraised — had it been selected for quality it would belong to the curated class, which never ambushes. The exaggeration option reverses the woman’s own judgment, which she states with full knowledge: "it was never even good bread." The fondness-for-cheap-foods option manufactures a general law from a single case about appraisal, not price. And regret appears nowhere — she tells the story "against herself, laughing."',
        skill: 'meaning-in-context',
        needsReview: false,
      },
    ],
  },
  {
    id: 'cars-cult-05',
    section: 'cars',
    discipline: 'tourism and authenticity',
    title: 'Who Writes the Dance',
    needsReview: false,
    passageText:
      'The harvest dance of a certain mountain district — I have compounded three real villages into one, to protect nothing but my generalizations — can be followed through three arrangements of what is recognizably the same transaction, and the sequence teaches more than any theory of authenticity I have read.\n\nIn the 1880s the dance was performed each September in the courtyard of the landowner’s house. His guests watched from a balcony; the dancers were paid in roast meat, in wine, and now and then in coin. The elders trimmed the rowdier figures in the years when the priest complained, and restored them after he was transferred. None of this was felt as corruption, because none of it touched the one thing the village kept: what counted as dancing it well was settled in the village, by the people who taught it. There was an audience, there was payment, there was even mild seasonal censorship. The pencil stayed home.\n\nIn the 1950s the state discovered the dance. A choreographer came up from the capital, chose the twelve most presentable dancers, corrected the line of the arms, cut eleven minutes as repetitive, and mounted the result on a festival stage. The broadcast version entered the schools, so that village children learned their grandparents’ dance with the arms already corrected, and a district inspector could cite a troupe for deviations. The alteration itself was gentler than the priest’s had been; the difference was that correctness now descended from an office. The office could at least be argued with. Petitions were written. One elder famously traveled to the capital and got four of his eleven minutes back.\n\nToday the coaches arrive at six, and the dance is performed twice nightly, cut to twenty minutes. No inspector requires this. The troupe owns its costumes, its hall, and every legal right to the choreography; on paper, the pencil has come home. But the visitors have watched a version online before they ever board the coach, and they arrive expecting it, and a performance that departs from the expected version is received — and publicly reviewed — as a mistake by the very people watching it. The dancers hold the copyright and follow the reviews. Correctness has moved again, this time to no office at all: it is enforced nightly, by demand, and issued by no one.\n\nAgainst this record the customary tests of authenticity fail one after another. An audience? All three had one. Payment? All three. Alteration under outside pressure? All three. Whoever wants to say the dance was authentic in the courtyard and corrupted afterward will need some other variable, and the record offers only one: the location of the standard — village, office, nowhere. And nowhere is not a return to the village. It is the strangest of the three, because the office had an address. The commissar could be petitioned, could be blamed, could surrender four minutes to a stubborn old man with a train ticket. Demand cannot. There is no one to write to, and everyone is writing.\n\nThe dancers of the present troupe deceive nobody; they are working, at a craft whose standard of correctness is now set by people who will see it exactly once. Ask of any tradition not whether it is authentic — the courtyard already fails that test if payment fails it — but who may still change it and be obeyed. In the courtyard, the elders. On the festival stage, the state. In the tourist hall, no one; and a craft has never had a stranger master.',
    questions: [
      {
        question: 'Which of the following best states the lesson the passage draws from the dance’s history?',
        options: [
          'Audience, payment, and outside pressure are constants across the dance’s three eras; what changed is who controls the standard of correct performance.',
          'The dance was authentic in the landowner’s courtyard and was corrupted first by the state and then by tourism.',
          'Tourism has damaged the dance less than the state folklore program did, because tourists impose no formal penalties.',
          'Traditional performances lose their value whenever they are shortened for the convenience of an audience.',
        ],
        correctAnswer: 0,
        explanation:
          'The fifth paragraph runs the comparison explicitly: audience, payment, and alteration appear in all three eras, so "whoever wants to say the dance was authentic in the courtyard and corrupted afterward will need some other variable, and the record offers only one: the location of the standard — village, office, nowhere." The courtyard-was-authentic option is the very claim that comparison dismantles. The tourism-versus-state ranking runs opposite to the author’s point that the addressless standard is "the strangest of the three." And shortening cannot be the crime, since the elders themselves trimmed figures without any loss the passage recognizes.',
        skill: 'main-idea',
        needsReview: false,
      },
      {
        question: 'The detail that the elders trimmed figures "when the priest complained, and restored them after he was transferred" is included primarily to show that:',
        options: [
          'the church held permanent authority over village performance',
          'the dance had no stable form worth preserving',
          'outside pressure produced alterations while the village retained the authority to make and unmake them',
          'the villagers were indifferent to the content of their own dance',
        ],
        correctAnswer: 2,
        explanation:
          'The sentence sits inside the paragraph’s argument that none of the courtyard-era accommodations "touched the one thing the village kept," and the restoration after the transfer is the proof: the elders could undo what pressure had extracted, so "the pencil stayed home." Permanent church authority is contradicted by the restoration itself. The no-stable-form option mistakes controlled adjustment for formlessness. And indifference reverses the implication — restoring the trimmed figures at the first opportunity is evidence of exactly how much the content mattered.',
        skill: 'function',
        needsReview: false,
      },
      {
        question: 'The author implies that the state choreographer’s changes differed from the priest’s interference chiefly in that they:',
        options: [
          'were more extensive than any changes the village had ever accepted',
          'moved the authority over correctness outside the village rather than merely influencing how the village exercised it',
          'improved the dance by professional standards the village could not have applied',
          'were resented more bitterly by the dancers who performed under them',
        ],
        correctAnswer: 1,
        explanation:
          'The author says the state’s alteration "was gentler than the priest’s had been; the difference was that correctness now descended from an office" — schoolchildren learned the corrected arms, and an inspector could cite deviations. The extent option is thus expressly denied. The improvement option converts "corrected the line of the arms," which reports the office’s own vocabulary, into the author’s endorsement. And resentment is never compared; the era’s one anecdote — the elder recovering four minutes — is about where petitions could be sent, not about depth of feeling.',
        skill: 'inference',
        needsReview: false,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s claim that the present standard is "issued by no one"?',
        options: [
          'Some visitors tell the dancers afterward that they would happily have watched the full-length version.',
          'The troupe now earns more from two nightly performances than its grandparents earned in a season.',
          'The version visitors expect is traceable to one agency’s promotional film, and when the agency recut the film, arriving audiences’ expectations shifted within a season.',
          'The state ensemble in the capital still performs the corrected version from the 1950s.',
        ],
        correctAnswer: 2,
        explanation:
          'The claim is that today’s correctness is "enforced nightly, by demand, and issued by no one" — that unlike the office, it has no address and cannot be petitioned. A single agency whose film demonstrably sets and resets the expectation is an author with an address: the standard would have an issuer after all, and a party the troupe could negotiate with. Scattered visitor preferences do not locate an issuer; they are more demand. Earnings compare payment across eras, which the author already treats as a constant. And the capital ensemble’s repertoire concerns the old office’s version, not who issues the tourist hall’s standard.',
        skill: 'strengthen-weaken',
        needsReview: false,
      },
      {
        question: 'A weavers’ cooperative holds all legal rights to its traditional patterns but finds that buyers reject any cloth differing from the patterns shown in guidebooks. According to the passage’s analysis, the weavers’ situation most resembles that of:',
        options: [
          'the elders under the priest, since both retained the power to restore what pressure removed',
          'the landowner’s guests, since both parties pay for what they enjoy',
          'the dancers under the district inspector, since both faced citations for deviating',
          'the dancers before their tourist audiences, since a standard enforced by demand governs a craft its practitioners legally control',
        ],
        correctAnswer: 3,
        explanation:
          'The weavers reproduce the third era exactly: "the troupe owns... every legal right to the choreography; on paper, the pencil has come home," yet departures from the expected version are punished by the audience itself. Legal ownership plus a demand-set standard is the tourist-hall configuration. The elders analogy fails because the weavers cannot restore the rejected patterns and be obeyed by their buyers. The guests analogy sorts the weavers onto the wrong side of the transaction. And the inspector analogy supplies what the situation conspicuously lacks — an office issuing citations that could, at least, be petitioned.',
        skill: 'application',
        needsReview: false,
      },
      {
        question: 'The author’s attitude toward the dancers of the present troupe is best described as:',
        options: [
          'disappointment at their willingness to abbreviate their grandparents’ dance',
          'sympathy for practitioners governed by a standard they did not set and cannot negotiate with',
          'nostalgia for the era when the landowner’s patronage sustained the dance',
          'contempt for performers he regards as deceiving their audiences',
        ],
        correctAnswer: 1,
        explanation:
          'The final paragraph is explicit: the dancers "deceive nobody; they are working, at a craft whose standard of correctness is now set by people who will see it exactly once" — a description of constraint, not of fault, and the constraint is the addressless demand of the previous paragraph. Disappointment at abbreviation misreads an author who treats cutting as a constant across all three eras. Nostalgia for patronage confuses an analytical point — the village then held the pencil — with longing for landlords. And contempt inverts the sentence in which the author clears the dancers of deception by name.',
        skill: 'tone',
        needsReview: false,
      },
    ],
  },
  {
    id: 'cars-cult-06',
    section: 'cars',
    discipline: 'nostalgia and cultural memory',
    title: 'The Past Tense of Complaint',
    needsReview: false,
    passageText:
      'Last month, at a dinner where I wanted to be liked, I heard myself say that bookshops used to be better. The sentence did its work — nods, a matching story, the small warmth of agreement — and it was only on the walk home that I gave it the inspection I usually reserve for other people’s sentimentalities. It failed the inspection. What it did next is my subject: it failed, and went on being believed.\n\nThe facts first, because I pride myself on facts. The bookshops of my youth were worse than the shops I now complain about: stock thin and parochial, hours arranged for the shopkeeper’s convenience, a proprietor who treated a request for anything unusual as an imposition and quoted six weeks. Today I can walk into a bright, deep, intelligently arranged shop in any sizable town. Nothing in my sentence survives contact with the record. By the second streetlight I had demolished it, and I believed it the whole way home. I believe some version of it still. A sentence that survives its own refutation is not a report; it is doing something else, and honesty obliged me to find out what.\n\nSo I stopped correcting and tried translating. What is missing now, that came out of my mouth dressed as the history of retail? The answer took longer than the fact-checking and was less comfortable, which I suspect is the general rule. What I miss is not the shops. It is a reader I used to be: a young man with unallocated hours, who could be surprised by a shelf because he wanted nothing in particular from it. The shops have changed far less than my errands have. My sentence was a complaint about my life, wearing the past tense as a disguise — and the disguise was what made it sayable at dinner. The shops were better costs nothing to admit. I no longer have the kind of time worth losing is a confession, and nobody brings confessions to dinner.\n\nOnce I had caught the disguise on myself, I began hearing it everywhere: the neighbors people used to know, the winters that used to mean something, the music that used to be about something. The grammar points backward; the ache is current. This explains the familiar futility of the friend who arrives with statistics to prove the past was worse. He is usually right, and he wins nothing, because he has corrected the costume and left the wearer untouched.\n\nI can hear the objection my indulgence invites: that longings of this kind get harvested, that there are men who make careers of promising to restore what such sentences mourn. The worry is earned, but it argues for translation rather than against it. The restorer and the fact-checker share a premise — both take the past tense literally, the one to sell it, the other to sink it — and both leave the present loss unexamined and available. The restorer will always outbid the fact-checker for it, because he alone pretends to take it seriously.\n\nOne caution, learned by using the method on myself. The translation must be done from inside, or with the speaker’s help. Translated from outside, my bookshop sentence could be made to mean whatever the translator required — my age, my politics, my vanity. Only I could locate the young man with the unallocated hours. Ask the speaker what became of the thing he is grieving. Asked that on the first evening, I believe I would have told the truth: that the shops, as far as I can tell, are fine.',
    questions: [
      {
        question: 'The main idea of the passage is best expressed as:',
        options: [
          'Nostalgic statements are usually accurate descriptions of a better past.',
          'The author’s memories of bookshops demonstrate that retail bookselling has declined.',
          'Nostalgic sentences are present losses wearing a past-tense disguise, and so call for translation rather than fact-checking.',
          'People who voice nostalgia are in the early stages of restorationist politics.',
        ],
        correctAnswer: 2,
        explanation:
          'The essay’s engine is the author’s own sentence, which "failed, and went on being believed": "a sentence that survives its own refutation is not a report," and his remedy is to stop "correcting" and try "translating," since the friend with statistics "has corrected the costume and left the wearer untouched." The accuracy option is contradicted by the author demolishing his own claim against the record. The retail-decline option takes at face value the very sentence the passage dissects. And the restorationist option states a suspicion the author resists — the harvesting worry is granted, but as an argument for translation, not as a verdict on nostalgic speakers.',
        skill: 'main-idea',
        needsReview: false,
      },
      {
        question: 'The author’s detailed recital of the defects of the bookshops of his youth serves primarily to:',
        options: [
          'establish his credentials as a historian of the book trade',
          'show that his sentence failed as a factual report by his own audit — and that his belief in it survived the failure',
          'prove that present-day bookshops are the finest that have ever existed',
          'excuse the proprietor whose service he remembers resenting',
        ],
        correctAnswer: 1,
        explanation:
          'The recital exists so the author can convict his own sentence — "nothing in my sentence survives contact with the record" — and then display the anomaly that drives the essay: "by the second streetlight I had demolished it, and I believed it the whole way home." The self-refutation, not the shops, is the payload. The credentials reading mistakes a confession for a résumé. The finest-ever option inflates "bright, deep, intelligently arranged" into a superlative no argument needs. And the proprietor is evidence for the prosecution of the sentence, not a figure being excused.',
        skill: 'function',
        needsReview: false,
      },
      {
        question: 'The passage implies that the author’s complaint was sayable at dinner in its past-tense form because:',
        options: [
          'his companions shared his interest in the history of bookselling',
          'statements about the past cannot be checked by anyone present',
          'complaints about shops are more polite than complaints about people',
          'the disguised form cost him nothing, whereas the translated version would have been a confession',
        ],
        correctAnswer: 3,
        explanation:
          'The author draws the contrast in adjacent sentences: "The shops were better costs nothing to admit. I no longer have the kind of time worth losing is a confession, and nobody brings confessions to dinner." The disguise makes a private loss socially utterable. The shared-interest option would explain the nods but not why the author himself needed the past tense. Uncheckability fails because the author checked the statement easily on the walk home — verifiability was never the barrier. And politeness toward people is beside the point; the translated sentence is about his own life, not about anyone at the table.',
        skill: 'inference',
        needsReview: false,
      },
      {
        question: 'Which of the following, if true, would most STRENGTHEN the author’s account of why factual correction "wins nothing"?',
        options: [
          'People who accept a correction of one nostalgic claim promptly restate the same longing about a different period or object.',
          'Most nostalgic claims turn out, on careful investigation, to be factually correct.',
          'People rarely remember, a month later, who corrected them.',
          'Statistical arguments are harder for most audiences to follow than anecdotes.',
        ],
        correctAnswer: 0,
        explanation:
          'The author’s account is that correction addresses the costume while the wearer — the present loss — persists untouched. A longing that survives its correction and simply re-dresses itself in a new period is that account made visible: the grievance is independent of any particular past, exactly as the author’s belief outlived his own demolition of it. The accuracy option would undercut the essay’s premise that the corrections are usually right. Forgetting the corrector explains nothing about why the longing persists. And difficulty following statistics would make correction fail for the wrong reason — comprehension, rather than address.',
        skill: 'strengthen-weaken',
        needsReview: false,
      },
      {
        question: 'A colleague sighs that "students used to read whole books." Following the passage’s method, the best first response is to:',
        options: [
          'present circulation records showing what students actually borrowed in earlier decades',
          'ask the colleague what has gone out of his own teaching life that this sentence might be carrying',
          'warn the colleague that sentiments of this kind are exploited by political movements',
          'agree that students of earlier decades were superior readers',
        ],
        correctAnswer: 1,
        explanation:
          'The passage’s closing instruction is to "ask the speaker what became of the thing he is grieving," with the caution that translation "must be done from inside, or with the speaker’s help" — a question, not a verdict, aimed at the present loss. Circulation records are the fact-checker’s move, which corrects the costume and wins nothing. The warning treats the colleague as a restorationist-in-waiting, importing the harvest worry as an accusation the author never levels at speakers. And agreement takes the past tense literally in the flattering direction, which is the restorer’s half of the shared premise, not translation.',
        skill: 'application',
        needsReview: false,
      },
      {
        question: 'The author’s caution that the translation "must be done from inside" functions primarily to:',
        options: [
          'retract the method the passage has recommended',
          'establish that only trained analysts should interpret nostalgic speech',
          'mark a limit of the method by noting that an outside translator can make a sentence mean whatever the translator requires',
          'concede that his own translation of the bookshop sentence was probably mistaken',
        ],
        correctAnswer: 2,
        explanation:
          'The caution names the failure mode in the author’s own case: "translated from outside, my bookshop sentence could be made to mean whatever the translator required — my age, my politics, my vanity," since "only I could locate the young man with the unallocated hours." It bounds the method without abandoning it — the next sentence still prescribes asking the speaker. Retraction is therefore wrong. The trained-analyst option reverses the caution, which distrusts outside interpreters however credentialed. And the author expresses no doubt about his own translation; it is offered as the method’s successful demonstration.',
        skill: 'function',
        needsReview: false,
      },
    ],
  },
]
