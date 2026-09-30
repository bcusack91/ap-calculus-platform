import type { MCATPassage } from '../types'

/**
 * MCAT Full-Length Form 2 — CARS, file B (passages 6–9; 6, 6, 6, 5 questions = 23).
 *
 * Four original argument-driven passages (500–600 words each) written to the
 * 2026-09-29 rebuild blueprint: archaeology (what objects can and cannot tell
 * us about their makers), popular culture (film adaptation and fidelity to the
 * source), geography (cities, distance and the idea of "neighborhood"), and
 * literary criticism (poetry and difficulty). Every item is answerable from the
 * passage alone; no outside knowledge is required.
 */
export const FL2_CARS_B_PASSAGES: MCATPassage[] = [
  {
    id: 'fl2-cars-b-06',
    section: 'cars',
    discipline: 'archaeology',
    title: 'The Polish on the Flank',
    passageText:
      'A colleague of mine keeps, on the shelf above her desk, a clay figurine of a broad-hipped woman, thumb-sized and four thousand years old, with a hole through the neck where a cord once ran. Visitors ask what it was for. She has learned to answer with a question: what would you need to know in order to say? Its findspot, a rubbish pit behind a house. Its wear, polished smooth along one flank as if by a thumb. Its breakage, the head snapped off and the body kept. Each of these is a fact, and each was earned by a season of careful digging. None of them is a meaning.\n\nThe word that archaeologists reach for when the facts run out is ritual. A pit with no obvious function is a ritual deposit; a figurine is a ritual object; a building with an odd plan had a ritual use. The word does real work, but notice what kind. It marks the point at which we stop being able to say what people were doing and begin to say, in effect, that they were doing something we cannot name. Ritual is not an explanation. It is the label we put on the box of things that explanation has not reached.\n\nI do not say this to mock my colleagues. The temptation is honest, and it comes from a real feature of the evidence. Objects are astonishingly eloquent about practice and nearly mute about belief. A potsherd will tell you what the clay was tempered with, how hot the kiln ran, whether the vessel held fat or grain, how many times it was scraped clean. It will not tell you what the potter thought she was making. Practice leaves traces because it is repeated and physical; belief leaves traces only when it is translated into practice, and the translation is lost. To read belief off an object is to guess the sentence from its punctuation.\n\nThere is a school that concludes from this that we should confine ourselves to what can be measured — typology, chronology, the movement of materials — and leave meaning to those who have texts. I find this counsel of restraint more dangerous than the excess it corrects, because it mistakes what kind of silence the objects keep. The figurine on my colleague’s shelf does not tell us what its owner believed. It tells us, unmistakably, that someone handled it often enough to polish it, that when it broke the body was worth keeping and the head was not, and that it was finally thrown out with the kitchen waste rather than buried with anyone. That is not belief, but it is not nothing. It is a record of care: of what was attended to, held, kept, and let go. Care is the part of meaning that survives in matter, and it is recoverable with a hand lens.\n\nWhat we cannot recover is the story the owner would have told. What we can recover is how the object was lived with, and I would rather have the second than a confident reconstruction of the first. The discipline goes wrong not when it speculates but when it stops distinguishing the polish on the flank from the name of the goddess — when it lets the label on the box stand in for the contents. The honest report says: this was handled, this was kept, this was discarded. Ask me what it meant and I will tell you what it was for. Ask me what it was for and I will show you the wear.',
    questions: [
      {
        question: 'Which of the following best expresses the author’s main argument?',
        options: [
          'Archaeologists should stop using the word “ritual” because it has no agreed definition.',
          'The physical evidence of the past can settle questions of belief only when texts survive alongside it.',
          'The discipline should limit its claims to what can be measured, such as chronology and the movement of materials.',
          'Objects preserve a record of how they were treated, and this record is worth recovering even though what they meant is not.',
        ],
        correctAnswer: 3,
        explanation:
          'The passage moves from the figurine’s facts (findspot, wear, breakage) to the claim that objects are “eloquent about practice and nearly mute about belief,” and concludes that “care is the part of meaning that survives in matter” and is worth recovering. The author criticizes how “ritual” is used but never proposes abandoning the word, and says the temptation to use it “is honest.” Texts are mentioned only as what the restraint school would leave meaning to; the author’s point is what objects alone can yield. Limiting claims to what can be measured is the “counsel of restraint” the author calls “more dangerous than the excess it corrects.”',
        skill: 'main-idea',
      },
      {
        question: 'The author’s description of “ritual” as “the label we put on the box of things that explanation has not reached” serves mainly to:',
        options: [
          'characterize the word as marking the limit of what has been explained rather than supplying an explanation.',
          'argue that the word should be reserved for pits, figurines, and buildings whose function is genuinely unknown to the excavator.',
          'show that colleagues who use the word are more interested in belief than in practice.',
          'suggest that the contents of such a box will eventually be explained once methods improve.',
        ],
        correctAnswer: 0,
        explanation:
          'The sentence follows directly on “Ritual is not an explanation” and on the claim that the word “marks the point at which we stop being able to say what people were doing.” The image of a label on a box makes that point: the word names a gap, it does not fill it. The author does not propose rules for when the word may be used; the objection is to what the word is taken to accomplish. Nothing suggests that colleagues prefer belief to practice — the author says the temptation “comes from a real feature of the evidence.” And the passage never predicts that the box will be emptied by better methods; it says belief is largely unrecoverable from objects.',
        skill: 'function',
      },
      {
        question:
          'Based on the passage, which of the following can be determined about the figurine from the evidence the author describes?\n\nI. It was handled often enough to be worn smooth.\nII. Its owner believed it protected the household.\nIII. Its body was kept after its head broke off.',
        options: ['I only', 'I and II only', 'I and III only', 'II and III only'],
        correctAnswer: 2,
        explanation:
          'The flank is “polished smooth along one flank as if by a thumb,” and the author later says someone “handled it often enough to polish it” (I). The head was “snapped off and the body kept,” which the author reads as the body being “worth keeping and the head was not” — so the body was retained after the break (III). What the owner believed is precisely what the author says the figurine “does not tell us,” so II cannot be determined from the evidence; the protective function is never even suggested. Thus I and III only.',
        skill: 'detail',
      },
      {
        question:
          'A field report describes a stone-lined pit containing a layer of burnt grain as “a ritual deposit.” Based on the passage, the author would most likely respond by:',
        options: [
          'rejecting the report, since burnt grain in a lined pit is more plausibly explained as ordinary storage.',
          'asking what the lining and the burning show about how the pit was used before accepting any label for its purpose.',
          'accepting the label, since a lined pit with no evident function is just what the word was coined to name.',
          'requesting that the report be withheld until a text describing the pit’s use can be located.',
        ],
        correctAnswer: 1,
        explanation:
          'The author’s method is to distinguish “the polish on the flank from the name of the goddess”: report what was done (handled, kept, discarded) and treat “ritual” as a placeholder rather than an account. Applied to the pit, that means asking what the lining and burning reveal about use before adopting a label. The author does not substitute a rival guess such as storage — that would be another confident reconstruction. Accepting the label is what the passage criticizes: the word “is not an explanation.” Waiting for a text contradicts the author’s point that what objects show about practice is worth reporting on its own.',
        skill: 'application',
      },
      {
        question: 'Which of the following, if true, would most weaken the author’s claim that care “is recoverable with a hand lens”?',
        options: [
          'Polish on clay figurines of this type is produced by burial in sandy soil rather than by handling.',
          'Figurines with holes through the neck are found across the region in graves as well as in rubbish pits.',
          'Figurines of this type were made from a clay that could be fired only at low temperatures.',
          'Written records from a neighboring culture describe similar figurines as gifts exchanged between households.',
        ],
        correctAnswer: 0,
        explanation:
          'The “record of care” is read from physical traces, above all the polish taken as evidence that “someone handled it often enough.” If that polish is produced by soil rather than by hands, the trace no longer records attention, and the inference from wear to care fails. That figurines turn up in graves elsewhere does not bear on whether wear records handling. The firing temperature is a fact about manufacture, which the author already treats as recoverable practice. Neighboring written records would supply a story about meaning, which the author sets aside; they neither confirm nor deny that wear records care.',
        skill: 'strengthen-weaken',
      },
      {
        question:
          'Suppose a tablet were discovered describing how figurines of this type were used in a household ceremony. The author would most likely regard this discovery as:',
        options: [
          'evidence that the discipline’s use of the word “ritual” had been justified all along.',
          'a reason to revise the claim that practice leaves traces while belief does not.',
          'supplying a kind of knowledge that the object itself could never have yielded.',
          'less informative than the wear on the figurine, since texts record only what people said.',
        ],
        correctAnswer: 2,
        explanation:
          'The author says “what we cannot recover is the story the owner would have told” — recover, that is, from the object — and concedes that belief survives only when “translated into practice.” A tablet describing the ceremony would supply exactly that story — knowledge the object could not give. It would not vindicate the word “ritual,” which the author faults as a placeholder that names a gap; a specific text explains, the label did not. The claim about traces concerns what objects preserve, and a text does not alter that: belief “leaves traces only when it is translated into practice,” and writing is such a translation surviving. The author never ranks texts below wear; the preference for wear is over a “confident reconstruction,” not over an actual account.',
        skill: 'new-information',
      },
    ],
  },
  {
    id: 'fl2-cars-b-07',
    section: 'cars',
    discipline: 'popular culture',
    title: 'The Ledger of Effects',
    passageText:
      'Every adaptation arrives with a complaint already attached. The complaint is that something was left out: a subplot, a beloved minor character, the line everyone underlined. Readers keep a ledger of what the film owes the book, and the film is always in arrears. I have kept such ledgers myself, and I have come to think that they measure the wrong thing.\n\nA novel and a film are not two containers for the same contents. A novel can spend forty pages inside a character’s hesitation; a film has her face, and perhaps four seconds. A novel tells you what a room smells like; a film shows the room and lets you supply the smell. To ask whether the film includes everything the book includes is to ask whether a translation into a language with no word for a thing has nonetheless used the word. It has not, and could not, and the interesting question is what it did instead.\n\nSo I propose a different ledger. Instead of asking what the film kept, ask what the book does to a reader, and whether the film does something of the same shape to a viewer. A novel that works by withholding — that keeps you from knowing who is lying until the last chapter — is betrayed by a film that keeps every scene but shows you the liar’s face in the first reel. A novel that works by accumulation, by the slow weight of ordinary days, is betrayed by a film that keeps every incident and cuts the waiting between them. In both cases the film is scrupulously faithful to the letter and has thrown away the thing that made the letter worth reading. The reverse also happens. I know a film that discards the novel’s final third and invents a new ending, and that ending produces in me the exact, unsettling feeling the novel’s own ending had produced, which no faithful version ever managed. On my ledger that film is the most loyal adaptation of the book ever made.\n\nThis position is sometimes taken to license anything, and it does not. If fidelity to effect is the test, then a film can fail it in the other direction: it can keep the title, the names, and the plot, and be about something the book was not about at all. There is a well-known case — I will not name it — in which a novel about the moral cost of a family’s silence became a film about a romance, with the silence retained as scenery. Every reader of the novel recognized the rooms and none recognized the book. That is not an adaptation but a borrowing of a name, and the name is doing the work of an advertisement.\n\nWhy does any of this matter beyond the grievances of readers? Because adaptation is one of the few ways we ever get to see what a book was doing. A novel read once is a single experience; a novel adapted is that experience set beside another, and the differences are diagnostic. When the film with the invented ending moved me as the book had, I learned something about the book: that its power had never lived in its plot. When the romance replaced the silence, I learned how much of the novel had been carried by what its characters did not say. The ledger of what was kept teaches nothing. The ledger of what the work does, in each of its bodies, teaches what the work is.',
    questions: [
      {
        question: 'The author’s central claim is that an adaptation should be judged by:',
        options: [
          'how much of the novel’s plot and dialogue it manages to preserve on screen.',
          'whether it produces in its audience something like what the novel produces in its readers.',
          'the degree to which it improves on the weaknesses of the novel’s original ending.',
          'whether the filmmakers understood the novel well enough to explain what it meant to its first readers.',
        ],
        correctAnswer: 1,
        explanation:
          'The author replaces the ledger of “what the film kept” with one that asks “what the book does to a reader, and whether the film does something of the same shape to a viewer,” and applies that test throughout. Preservation of plot and dialogue is the standard the author rejects as measuring “the wrong thing.” Improvement on the ending is never the criterion; the invented ending is praised for reproducing the novel’s effect, not for bettering it. Explaining the novel’s meaning is not mentioned; the test is what the film does, not what its makers can say.',
        skill: 'main-idea',
      },
      {
        question:
          'The author regards the film that discarded the novel’s final third as the most loyal adaptation ever made of that book because the film:',
        options: [
          'kept the novel’s characters and setting while improving its plot.',
          'was the only version whose ending the novel’s author approved.',
          'showed that the novel’s ending had been its weakest section.',
          'achieved through invention what retention of the text had not.',
        ],
        correctAnswer: 3,
        explanation:
          'The invented ending “produces in me the exact, unsettling feeling the novel’s own ending had produced, which no faithful version ever managed” — the film reached the effect by inventing, where faithful retention had failed. Nothing is said about improving the plot; the author’s lesson is that the novel’s power “had never lived in its plot.” The novelist’s approval is never mentioned. And the author does not call the novel’s ending weak; it produced the feeling the film later matched.',
        skill: 'detail',
      },
      {
        question:
          'The author’s judgment that the film about the romance is “a borrowing of a name” rather than an adaptation depends on the assumption that:',
        options: [
          'a work’s identity lies in what it is about rather than in its characters and events.',
          'a film cannot be about a romance and about a family’s silence at the same time.',
          'readers of the novel are better judges of an adaptation than viewers who have not read it.',
          'the filmmakers deliberately concealed the novel’s subject in order to attract a wider audience.',
        ],
        correctAnswer: 0,
        explanation:
          'The romance film kept “the title, the names, and the plot” yet is denied the status of adaptation because it was “about something the book was not about at all.” That verdict only follows if what a work is about, rather than its retained characters and events, is what makes it the same work. The author does not claim a film could never combine the two subjects, only that this film replaced one with the other. The competence of readers versus viewers is not invoked in the judgment. Deliberate concealment is not asserted; the remark about advertisement concerns what the title does, not the filmmakers’ intent.',
        skill: 'assumption',
      },
      {
        question:
          'Which of the following is most analogous to the film that “keeps every scene but shows you the liar’s face in the first reel”?',
        options: [
          'A translation of a poem that preserves its meter but changes several of its images.',
          'A stage production of a play that cuts a subplot in order to shorten the running time.',
          'A retelling of a joke that reproduces every word but delivers the punchline first.',
          'A museum reproduction of a painting that is accurate in every detail but half the size.',
        ],
        correctAnswer: 2,
        explanation:
          'The film’s failure is that it keeps all the content but destroys the effect that depended on order — the withholding that made the ending work. A joke told with every word intact but the punchline first is the same failure: nothing omitted, the effect ruined by sequence. The poem translation changes content rather than order. The cut subplot is an omission, the kind of complaint the author’s old ledger records. The half-size reproduction alters scale, not the order in which anything is revealed.',
        skill: 'application',
      },
      {
        question:
          'Suppose that most viewers who had not read the novel found the invented ending of the film puzzling and unmoving. This finding would most directly suggest that:',
        options: [
          'the author’s ledger of effects is less reliable than the ledger of what a film keeps.',
          'the film’s invented ending was closer to the novel’s plot than the author recognized.',
          'the novel’s own ending must have depended on its plot far more than the author claims.',
          'the effect the author credits to the film may have depended on having read the book.',
        ],
        correctAnswer: 3,
        explanation:
          'The author’s evidence that the film reproduced the novel’s effect is a single response — the author’s own, as someone who had read the book. If viewers without the book are unmoved, the feeling the author reports may have been completed by memory of the novel rather than produced by the film alone, which complicates crediting the film. The finding does not show the old ledger of retained content to be more reliable; it says nothing about that ledger. Nothing in the finding bears on how closely the invented ending tracked the novel’s plot, which the film is said to have discarded. And it says nothing about how much the novel’s own ending depended on its plot.',
        skill: 'new-information',
      },
      {
        question: 'The author’s remark that “the name is doing the work of an advertisement” most directly serves to:',
        options: [
          'criticize film studios for preferring well-known titles to original screenplays.',
          'suggest that the title promises the novel’s readers something the film does not deliver.',
          'concede that even an unfaithful film can bring new readers to the novel.',
          'explain why readers keep a ledger of what an adaptation has left out.',
        ],
        correctAnswer: 1,
        explanation:
          'The remark follows the case in which readers “recognized the rooms and none recognized the book.” Calling the name an advertisement says that the title attracts the novel’s readers by promising the novel, while the film supplies something else. The passage is not a complaint about studio practice or original screenplays. The author makes no concession about drawing readers to the novel. And the readers’ ledger is introduced at the start as a general habit, not explained by this case.',
        skill: 'function',
      },
    ],
  },
  {
    id: 'fl2-cars-b-08',
    section: 'cars',
    discipline: 'geography',
    title: 'The Radius and the Route',
    passageText:
      'Planners like to draw neighborhoods as circles. The convention is old and has a certain logic: take a point — a school, a market, a transit stop — and draw around it the distance a person will walk in five or ten minutes. Whatever falls inside is the neighborhood; whatever falls outside belongs to someone else’s circle. The circle is easy to map, easy to fund, and easy to defend at a public meeting. It has only one defect, which is that almost no one lives in it.\n\nAsk residents to draw their own neighborhoods and the circles vanish. What people draw instead are shapes stretched along the routes they actually travel: a long finger reaching toward the bus stop they use each morning, a bulge around the park where their children play, a hard edge at the rail line they never cross, even though the houses beyond it are closer than the grocery store. The geography people carry in their heads is not measured in meters. It is measured in friction — in how easy it is to get from here to there, and how often one bothers. A six-lane road fifty meters away can be farther, in this sense, than a bakery at the end of a long and pleasant street.\n\nThis observation is sometimes enlisted in support of a more radical conclusion: that the neighborhood is simply obsolete. If distance is subjective, and if most of what matters to people — work, friends, worship, entertainment — is scattered across a metropolitan region and reached by car or by screen, then the local unit is a sentimental survival. Communities, on this view, are now networks, chosen and far-flung, and the neighborhood is merely the place where one’s network happens to sleep.\n\nThis conclusion, I think, recruits a sound premise into an unsound argument. It is true that the neighborhood is not a circle, and true that our chosen relationships have spread out. But the network account describes only the ties we select. What distinguishes a neighborhood is the ties we do not select: the man who walks the same dog past the same corner at the same hour, the cashier who knows which bread we buy, the family whose arguments come through the wall. None of these people is a friend, and most of them we would never have sought out. That is precisely their importance. A network confirms who we already are; a neighborhood exposes us, repeatedly and at little cost, to people we did not choose. It is in that repeated, low-stakes exposure that strangers become familiar, and familiar faces become, now and then, allies — when a storm floods the street, say, or the local school is threatened with closure.\n\nIf this is right, then the planner’s circle and the network theorist’s dismissal fail for the same reason: both treat distance as a quantity, whether small or large, rather than as a pattern of encounters. The question to ask of a place is not how far things are from its center but whose paths cross whose, and how often. A redesign that shortens every errand but routes each resident through a private garage may bring everyone closer to the store and farther from everyone else. A street that is slower to cross, but lined with doorways, may do the reverse. Neighborhoods are not found on maps by measuring outward from a point. They are made, day after day, wherever routes overlap.',
    questions: [
      {
        question: 'The author’s primary purpose in the passage is to:',
        options: [
          'show that the maps residents draw of their neighborhoods are more accurate than the maps drawn by planners.',
          'explain why the relationships people choose now matter more to them than their ties to the places they live.',
          'argue that a neighborhood is formed by patterns of encounter rather than by distance from a center.',
          'defend the planner’s walking radius against critics who claim that the local neighborhood is obsolete.',
        ],
        correctAnswer: 2,
        explanation:
          'The passage rejects two rival accounts — the planner’s circle and the claim that neighborhoods are obsolete — on the shared ground that both “treat distance as a quantity … rather than as a pattern of encounters,” and concludes that neighborhoods are made “wherever routes overlap.” Residents’ drawings are used as evidence against the circle, but the author never ranks their accuracy; the point is what the drawings reveal. The author concedes that chosen ties have spread out but argues that unchosen local ties are what matter about a neighborhood, the opposite of the second option. And the author criticizes the walking radius rather than defending it.',
        skill: 'main-idea',
      },
      {
        question:
          'According to the passage, the neighborhoods that residents draw for themselves include all of the following EXCEPT:',
        options: [
          'a boundary at a fixed walking distance from home.',
          'an extension toward a bus stop used every morning.',
          'an enlarged area around a park where children play.',
          'an edge at a rail line that the resident never crosses.',
        ],
        correctAnswer: 0,
        explanation:
          'When residents draw their own neighborhoods, “the circles vanish”; a boundary set at a fixed walking distance is the planner’s radius, not a feature of residents’ drawings. The passage lists the other three as what residents do draw: “a long finger reaching toward the bus stop they use each morning,” “a bulge around the park where their children play,” and “a hard edge at the rail line they never cross.”',
        skill: 'detail',
      },
      {
        question:
          'The author’s claim that a street “slower to cross, but lined with doorways, may do the reverse” implies that such a street:',
        options: [
          'will eventually need to be redesigned so that residents can cross it more quickly.',
          'places residents farther from the shops they use and also farther from one another.',
          'matters less to the routines of residents than a nearby bus stop or rail line does.',
          'may make some errands less convenient while bringing residents into contact more often.',
        ],
        correctAnswer: 3,
        explanation:
          'The “reverse” of the garage redesign, which brings residents “closer to the store and farther from everyone else,” is a street that makes errands a little slower while bringing people’s paths together — the doorways and the slower crossing multiply encounters. Placing residents farther from both shops and one another reverses only half of the garage case and ignores the doorways. Nothing suggests the street should be redesigned for speed; the author values it for slowing people down. And the passage never compares the street’s importance with that of a bus stop or rail line.',
        skill: 'inference',
      },
      {
        question: 'The author’s attitude toward the view that the neighborhood is obsolete is best described as:',
        options: [
          'scornful dismissal of a view that rests entirely on nostalgia for village life.',
          'acceptance of some of its premises combined with rejection of its conclusion.',
          'reluctant acceptance of a conclusion that the author nonetheless regrets.',
          'neutral interest in a position that the author thinks has not been tested.',
        ],
        correctAnswer: 1,
        explanation:
          'The author says the view “recruits a sound premise into an unsound argument” and grants that “it is true that the neighborhood is not a circle, and true that our chosen relationships have spread out,” before arguing that the conclusion ignores unchosen ties. That is partial agreement with the premises and rejection of the conclusion. The treatment is measured, not scornful, and it is the obsolescence view, not the author, that calls the neighborhood “a sentimental survival.” The author does not accept the conclusion, reluctantly or otherwise, and takes a clear side rather than remaining neutral.',
        skill: 'tone',
      },
      {
        question: 'Which of the following proposals for a large apartment building would the author most likely favor?',
        options: [
          'Giving every unit its own washer so that residents need not share laundry machines',
          'Defining the building’s service area as a circle drawn around its main entrance',
          'Putting the mailboxes and the laundry room together in one space on the ground floor',
          'Setting up an online board on which residents can find others with similar hobbies',
        ],
        correctAnswer: 2,
        explanation:
          'The author asks of a place “whose paths cross whose, and how often,” and values repeated, low-stakes exposure to people one did not choose. A shared ground-floor mailroom and laundry makes residents’ daily routes overlap. Private washers remove one of those routine crossings, the kind of convenience the author says can bring people “closer to the store and farther from everyone else.” A circular service area is the planner’s radius the author criticizes. An online hobby board builds chosen ties — a network that “confirms who we already are” — rather than unchosen ones.',
        skill: 'application',
      },
      {
        question:
          'Which of the following findings, if true, would most weaken the author’s argument about the value of ties that residents do not choose?',
        options: [
          'After floods, residents who got help received it almost entirely from friends and relatives living elsewhere.',
          'Residents who walk to local shops recognize more of their neighbors by sight than residents who drive do.',
          'Most residents report that their closest friends live outside the neighborhood in which they themselves live.',
          'Planners in several cities have begun replacing radius maps with surveys in which residents draw their own.',
        ],
        correctAnswer: 0,
        explanation:
          'The author claims that repeated exposure turns familiar faces into “allies — when a storm floods the street.” If flood victims were helped almost entirely by chosen ties living elsewhere, the payoff the author attributes to unchosen local ties does not appear when it should. That walkers recognize more neighbors supports the mechanism the author describes. That close friends live elsewhere is something the author already concedes (“our chosen relationships have spread out”). The spread of resident-drawn maps concerns planning practice, not the value of unchosen ties.',
        skill: 'strengthen-weaken',
      },
    ],
  },
  {
    id: 'fl2-cars-b-09',
    section: 'cars',
    discipline: 'literary criticism',
    title: 'Easy to Enter, Hard to Leave',
    passageText:
      'Every generation of readers rediscovers the complaint that poetry has become too difficult, and every generation of poets rediscovers the reply that readers have become too lazy. Both parties assume they are quarreling about the same thing. They are not. There are at least two kinds of difficulty in a poem, and the quarrel persists because each side has a different one in mind.\n\nThe first kind is difficulty of access. A poem is difficult in this way when the reader cannot get into it without information the poem does not supply: an allusion to a book few have read, a private name, a reference to some episode in the poet’s life, a phrase in a language the poem gives no reason to expect. Difficulty of access is a locked door. Once the key is handed over — in a footnote, a biography, a seminar — the difficulty disappears, and nothing of it remains in the experience of the poem. For that reason it is almost never a virtue. It may be forgivable, since a poet writing out of a particular life cannot always know which of its details are common property, but it is a cost the poem pays, not a treasure it offers.\n\nThe second kind is difficulty of experience. Here the reader has everything needed to understand each sentence and is still unable to rest in the whole. Two images that ought not to belong together are made to; a line break turns a statement into a question; the last stanza quietly takes back what the first one asserted. No footnote can dissolve this kind of difficulty, because it is not a missing fact. It is the poem’s way of making the reader perform, slowly and in person, the labor of holding contradictory things at once — which is, often enough, what the poem is about.\n\nWhen readers demand that a poem explain itself, they are usually objecting, rightly, to the first kind of difficulty; and poets who answer that explanation would betray the art are usually defending, rightly, the second. The trouble begins when either side generalizes. A poet who treats all difficulty as depth will hoard allusions and call the resulting fog seriousness. A reader who treats all difficulty as obstruction will want the contradictions resolved, each image translated into its meaning, every question returned to a statement — and will have exchanged the poem for a paraphrase that could as well have been written in prose.\n\nThe better standard is simple to state and hard to meet: a poem should be easy to enter and hard to leave. It owes its reader every fact needed to begin. It owes no one a summary of where the beginning leads. Poets who meet this standard are not less ambitious than those who shelter behind their references; they are more so, because they have surrendered the protection that obscurity provides. A poem that is plain in its terms and still resists us cannot blame our ignorance for the resistance. It stands in the open and dares us to finish it.',
    questions: [
      {
        question: 'Which of the following best states the central thesis of the passage?',
        options: [
          'Readers who find poetry difficult have usually failed to supply the effort that the art form demands.',
          'A poem should give readers what they need to begin but need not resolve the tensions it creates.',
          'A poem is best judged by how much of its meaning survives when it is paraphrased in prose.',
          'Allusion and private reference are what chiefly separate the difficulty of poetry from that of prose.',
        ],
        correctAnswer: 1,
        explanation:
          'The author distinguishes difficulty of access, which a poem should remove, from difficulty of experience, which it should keep, and concludes that a poem “owes its reader every fact needed to begin” but “owes no one a summary.” Blaming readers’ laziness is one side of the quarrel the author says rests on a confusion. Surviving paraphrase is the opposite of the author’s standard: a reader who wants every image translated “will have exchanged the poem for a paraphrase.” And allusion is identified with difficulty of access, which the author calls “almost never a virtue,” not with what distinguishes poetry.',
        skill: 'main-idea',
      },
      {
        question: 'The author mentions a line break that “turns a statement into a question” primarily in order to:',
        options: [
          'illustrate a difficulty that remains once every sentence is understood.',
          'show how poets use formal devices to disguise private references in a poem.',
          'concede that a careful reader can remove some difficulties of experience alone.',
          'suggest that poems which pose questions are harder than poems which make claims.',
        ],
        correctAnswer: 0,
        explanation:
          'The line break is one of three examples offered after the author says that, in difficulty of experience, “the reader has everything needed to understand each sentence and is still unable to rest in the whole.” It illustrates a difficulty that persists after comprehension. Private references belong to difficulty of access, a different category. The author says “no footnote can dissolve” this kind of difficulty and never suggests a reader can remove it. And the example concerns what a line break does to a statement, not a ranking of question-poems against claim-poems.',
        skill: 'function',
      },
      {
        question:
          'The author would most likely agree that a footnote identifying the obscure book to which a poem alludes:',
        options: [
          'betrays the poem by substituting a prose paraphrase for the experience of reading it.',
          'is necessary only because today’s readers no longer do research of their own.',
          'should be avoided, since the poet’s choice of an allusion is part of what it means.',
          'can remove an obstacle without taking away anything that the poem has to offer.',
        ],
        correctAnswer: 3,
        explanation:
          'An obscure allusion is the author’s first example of difficulty of access, which vanishes once “the key is handed over — in a footnote” and of which “nothing … remains in the experience of the poem”; it is “a cost the poem pays, not a treasure it offers.” So a footnote removes the obstacle and costs the poem nothing. The charge of substituting paraphrase is reserved for resolving difficulties of experience, not supplying facts. The author never blames the need for notes on readers’ laziness, which is one side of the quarrel the author diagnoses. And the author treats withheld information as a flaw to be remedied, not as meaning to be protected.',
        skill: 'inference',
      },
      {
        question:
          'Suppose a poem uses only common words and familiar images, and its readers report understanding every line yet disagree sharply about what the poem as a whole affirms. By the author’s standard, the poem is best described as:',
        options: [
          'failing, since a poem ought to leave its readers clear about what it finally affirms',
          'succeeding, since its difficulty lies in the experience of it rather than in access',
          'failing, since the readers’ disagreement shows that the poem hides behind obscurity',
          'succeeding, since a brief note from the poet could readily settle the disagreement',
        ],
        correctAnswer: 1,
        explanation:
          'The poem is “plain in its terms” — easy to enter — and its readers cannot rest in the whole, which is the author’s mark of difficulty of experience. It therefore meets the standard of being “easy to enter and hard to leave.” The demand that a poem leave readers clear about what it affirms is the reader’s overgeneralization the author criticizes. Obscurity is a matter of missing facts, and this poem withholds none. And if a note could settle the disagreement, the difficulty would be one of access, which the author counts as a cost rather than a success.',
        skill: 'new-information',
      },
      {
        question:
          'Which of the following pairs is most analogous to the author’s distinction between the two kinds of difficulty?',
        options: [
          'One trail is hard because it is steep; another is hard because it is long and exposed to wind.',
          'One lecture is hard to follow because the speaker mumbles; another because the hall is noisy.',
          'One puzzle is hard because its rules are in an unfamiliar script; another has plain rules and a subtle solution.',
          'One textbook is hard to finish because it is very long; another is hard to find because it is out of print.',
        ],
        correctAnswer: 2,
        explanation:
          'Difficulty of access disappears once missing information is supplied, as a puzzle’s rules become usable once the script is translated; difficulty of experience remains when everything is understood, as a subtle solution stays hard with plain rules. The two trails are both hard in the same intrinsic way, with nothing to be supplied. The mumbling speaker and the noisy hall are both obstructions to receiving the content, so both resemble access. The long and out-of-print textbooks concern effort and availability, not a contrast between missing information and difficulty that survives understanding.',
        skill: 'application',
      },
    ],
  },
]
