import type { MCATPassage } from '../types'

/**
 * MCAT CARS — Arts & Criticism pool.
 *
 * Six original, argument-driven passages (500-600 words each) written in a
 * single critic's voice: aesthetics/philosophy of art, music criticism, art
 * history and curation, film criticism, architecture and the built
 * environment, and documentary photography. Each advances a thesis that is
 * defended against a real objection and turns at least once (a concession, a
 * counterargument answered, or a reframing distinction). No outside knowledge
 * of specific artists or works is required.
 *
 * AI-authored; needsReview is true pending SME review.
 */
export const CARS_ARTS_PASSAGES: MCATPassage[] = [
  {
    id: 'cars-art-01',
    section: 'cars',
    discipline: 'aesthetics / philosophy of art',
    title: 'The Forger’s Smirk',
    needsReview: true,
    passageText:
      'A forgery so exact that no laboratory could expose it poses a question connoisseurship would rather not answer. If two panels are indistinguishable — same ground, same pigments, same fine tremor in the drawn line — on what grounds is one a masterpiece and the other a curiosity? The usual replies are embarrassing. We speak of aura, of presence, of a quality the original has and the copy lacks; asked to point to it on the surface, we cannot, because it is not there. The forger is entitled to his smirk. He has reproduced every visible property we claimed to admire, and we have retreated into metaphysics.\n\nI think the smirk is unearned, but the usual defense against it is worse than useless, because it accepts the forger’s premise. That premise is that the object of aesthetic judgment is the visible surface, and that everything else — who made the thing, when, out of what difficulty — is biographical trivia propping up a verdict the eye cannot support. Grant the premise and the forger wins, since he has matched the surface. The premise is what should be refused.\n\nA painting is not only an object but a thing done. To call a work original is to make a claim about what its making solved: a problem of arrangement, of light, of how to get a body to sit in a space. The forger solves a different problem, and a narrower one — how to imitate a solution already found. That is an achievement, sometimes formidable, but it is not the achievement, and to say so is not to consult a certificate but to describe what happened.\n\nHere the forger’s advocate will say that I have changed the subject: that I have stopped talking about beauty and started talking about history, and that the visitor before the panel sees only the panel, her pleasure complete without a word of biography. The first half is a fair warning; the second is false. Her pleasure is real; I do not doubt it. But it is not innocent of history. It is saturated with it.\n\nConsider the untutored viewer moved by a bold composition. She is responding to boldness, and boldness is not a color. It is a relation between what was done and what was expected — a comparison, silently made, against a background of practice she has absorbed from every picture she has ever seen. Remove that background and the boldness goes with it, leaving arrangement. The historian who finds a now-ordinary device startling is not adding an extraneous fact to a complete experience; she is seeing what is in front of her.\n\nNone of this makes provenance a verdict. A documented original may be a dull painting, and a critic who ranked pictures by their papers would be a clerk, not a judge. My claim is narrower: whether a picture is any good cannot be put to a surface alone, because some of the properties we praise — invention, daring, wit, the solving of something — are historical properties, and no amount of staring will find them in the paint.\n\nWhat the forger exposes, then, is not the emptiness of our judgments but the poverty of the vocabulary in which we defend them. He proves that we could not say what we meant, which indicts the critics and not the pictures they were praising. We accuse him of counterfeiting the achievement, and the charge is exactly right; it is the only charge worth making. Our error was to have located the achievement in the paint, where he could reach it.',
    questions: [
      {
        question: 'Which of the following best expresses the central claim of the passage?',
        options: [
          'A flawless forgery is the aesthetic equal of its model, since the two share every visible property.',
          'Aesthetic judgment should confine itself to the visible surface and exclude historical information as irrelevant.',
          'Some of the properties critics praise in art are historical rather than visible, so a forger can duplicate a surface without duplicating an achievement.',
          'Documented provenance is the decisive test of a painting’s artistic value.',
        ],
        correctAnswer: 2,
        explanation:
          'The author insists a painting is "not only an object but a thing done" and that "invention, daring, wit, the solving of something — are historical properties" that "no amount of staring will find" in the paint. The claim that the copy equals the original is the forger’s position, which the author calls "unearned." The claim that judgment should stay on the surface is the very "premise" the author says "should be refused." The provenance-as-verdict option is explicitly denied: a critic "who ranked pictures by their papers would be a clerk, not a judge."',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward the challenge posed by the perfect forgery is best described as:',
        options: [
          'treating it as a genuine objection that nonetheless fails once a shared premise is rejected',
          'dismissing it as a puzzle unworthy of serious reply',
          'endorsing it against the pretensions of connoisseurship',
          'conceding, with regret, that connoisseurship has no answer to it',
        ],
        correctAnswer: 0,
        explanation:
          'The author grants that "the forger is entitled to his smirk" given current critical vocabulary, then argues the smirk is "unearned" because the shared premise about surfaces "is what should be refused" — serious engagement followed by refutation. Nothing in the passage is dismissive; the author devotes the essay to answering the challenge. The author does not side with the forger, whom he says counterfeits "the achievement." And he is not resigned: he supplies the answer he says critics lacked the vocabulary to give.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'The example of the viewer moved by a "bold composition" is offered chiefly to establish that:',
        options: [
          'untrained viewers are incapable of genuine aesthetic pleasure',
          'even apparently immediate responses to a work depend on a comparison with what was expected',
          'boldness is a visible property that a sufficiently careful observer can locate in the paint',
          'historical training reliably increases the pleasure a viewer takes in painting',
        ],
        correctAnswer: 1,
        explanation:
          'The author says boldness "is a relation between what was done and what was expected — a comparison, silently made, against a background of practice," and that removing the background leaves only "arrangement." The claim that untrained viewers feel nothing genuine contradicts the concession that "her pleasure is real; I do not doubt it." The option calling boldness visible reverses the point of the example. The training-increases-pleasure option confuses the author’s subject: he is separating judgment from pleasure, not promising more of the latter.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'Which of the following findings, if true, would most weaken the author’s account of what the forger fails to reproduce?',
        options: [
          'A forger has produced panels that no available technical analysis can distinguish from originals.',
          'Several works with impeccable documentation are judged by critics to be poorly executed.',
          'Museum visitors report greater enjoyment of a work after being told it is authentic.',
          'Viewers with no knowledge of art history reliably agree with expert historians in ranking works by inventiveness.',
        ],
        correctAnswer: 3,
        explanation:
          'The argument depends on inventiveness being a historical property invisible to anyone lacking the background of practice. If historically ignorant viewers converged with experts on rankings of inventiveness, that property would appear to be readable off the surface after all, which is precisely what the author denies. The indistinguishable-panel finding is already granted in the first sentence and so changes nothing. Poorly executed documented originals is a point the author himself concedes. The enjoyment finding concerns pleasure, which the author has carefully separated from judgment.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A composer today writes a symphony in a style indistinguishable from music of two centuries ago, and a critic praises the work as an act of daring. The author would most likely respond that:',
        options: [
          'the praise misapplies a historical property, since daring is measured against what was expected at the time of making',
          'the praise is warranted, because the audible features of the score are all that can bear on its value',
          'the symphony can give its listeners no genuine pleasure',
          'the composer has committed a fraud and should be exposed',
        ],
        correctAnswer: 0,
        explanation:
          'Daring, on the author’s account, "is a relation between what was done and what was expected," so a device that was once a solution is not daring when repeated after the problem has been solved. The audible-features-only option is the premise the author rejects. Denying any pleasure contradicts his explicit concession that the response to such work is real. The fraud option imports a charge of deception the case does not contain — nothing here misrepresents when the symphony was written, and the author’s complaint is about crediting an achievement, not about lying.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In context, the closing remark that critics "located the achievement in the paint, where he could reach it" most nearly means that:',
        options: [
          'forgers succeed chiefly because they work with better materials than the artists they copy',
          'by treating artistic accomplishment as a feature of the surface, critics made it into something a copyist could reproduce',
          'achievement really is a property of the paint, which is why forgery is possible at all',
          'critics ought to stop examining the physical surfaces of paintings',
        ],
        correctAnswer: 1,
        explanation:
          'The sentence names the critics’ "error," which the passage has identified as the premise that judgment answers to the visible surface; once accomplishment is placed there, a skilled copyist can match it. The materials option misreads "paint" as a question of supplies. The option asserting that achievement really is in the paint states the position the author has spent the essay refusing. The recommendation to stop examining surfaces overshoots: the author never says surfaces are irrelevant, only that they cannot answer the question alone.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-art-02',
    section: 'cars',
    discipline: 'music criticism',
    title: 'The Ghost in the Margins',
    needsReview: true,
    passageText:
      'Ask a performer why she shapes a phrase as she does and, if she belongs to a certain school, she will tell you that this is what the composer wanted. The answer is meant to close the matter, and usually does. I want to argue that it settles nothing — that a composer’s wishes are the weakest constraint a performance can be held to, and that whatever discipline musicians believe they are getting from the appeal has to be coming from somewhere else.\n\nBegin with what a score is. It is not a recording written down. It is a set of instructions addressed to players who already knew a hundred things it does not say: how long a long note is held, how far a tempo may bend before it breaks, whether a chord written as simultaneous is played that way. Composers wrote for musicians who shared these habits, and they had neither reason nor means to notate what everyone did anyway. The page is a memorandum among people who agreed in advance about most things, and we are not those people.\n\nThe appeal to intention therefore asks the score for information it was never built to carry. Nor does scholarship close the gap. The treatises on which reconstruction depends are, again and again, complaints: a theorist who writes that players must not hurry the second beat is telling us, unmistakably, that players hurried it. We recover a practice from the men who disapproved of it, and then present the recovery as the composer’s wish.\n\nAt this point a serious objection arrives, and it is the reason the doctrine of intentions is so tenacious. If the composer cannot govern the performance, what can? Strike out intention and the interpreter appears to become a tyrant — free to do anything, answerable to no one, the work reduced to raw material for a personality. Better a flawed standard, the objection runs, than no standard at all.\n\nThe objection is right about the danger and wrong about the remedy. Notice what kind of claim an appeal to intention is: a claim about a mind that cannot be consulted. Nobody can be refuted about it. Two performers may play a passage in opposite ways, each invoking the composer with perfect sincerity, and no one can show either to be mistaken. The appeal does not resolve the argument; it ends it, and we mistake the second for the first. Now consider the other kind of claim a performer might make — that this phrase is an answer to the one before it and must be shaped so that it sounds like an answer; that a late climax loses its force if the earlier peak is taken at full volume. These are assertions about the piece, and they can be tested by the only test music has: play it both ways and listen. They can also fail, in public, in front of colleagues.\n\nThat is a stricter discipline than the one it replaces, not a looser one, and the real answer to the fear of the tyrant. The performer who says the composer wanted this has made herself unanswerable. The performer who says the music needs this has exposed herself to every musician in the room. Fidelity, properly understood, is not obedience to a person who cannot be questioned; it is answerability to an object that can. The ghost we consult in the margins of the score has a striking habit of agreeing with whoever consults it, and there is a plain explanation for that. We are the ones supplying its voice.',
    questions: [
      {
        question: 'The central thesis of the passage is that:',
        options: [
          'performers should disregard historical evidence and play according to contemporary taste',
          'because scores underdetermine performance, no performance can be judged better than any other',
          'historical scholarship has recovered the habits composers assumed, restoring intention as a workable standard',
          'appeals to a composer’s intentions cannot discipline performance, whereas answerability to the demands of the work can',
        ],
        correctAnswer: 3,
        explanation:
          'The author calls intention "the weakest constraint a performance can be held to" and ends by defining fidelity as "answerability to an object that can" be questioned — a claim about the piece that other musicians can test. Disregarding historical evidence is not proposed; the author engages the evidence and finds it limited. The no-judgment option is the objection the author explicitly answers, not his view. The claim that scholarship has restored intention is the position he undermines with the point about treatises being complaints.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward performers who justify their choices by invoking the composer’s wishes is best characterized as:',
        options: [
          'admiration for the historical rigor their method demands',
          'unpersuaded by the standard they invoke, without questioning their sincerity',
          'indifference, since performance decisions are matters of private taste',
          'scorn for musicians he regards as deliberately deceptive',
        ],
        correctAnswer: 1,
        explanation:
          'The author allows that two performers may invoke the composer "with perfect sincerity" and treats the underlying worry as "a serious objection," yet rejects the standard as one about which "nobody can be refuted." He does not admire the method — he argues it asks the score for what it cannot carry. Indifference misses the essay’s insistence that a stricter discipline exists. Scorn and deception overshoot: the fault the author names is in the standard, not the honesty of those using it.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'The author points out that historical treatises frequently take the form of complaints primarily in order to:',
        options: [
          'demonstrate that earlier musicians were less skilled than musicians today',
          'argue that all written evidence about past performance should be set aside as worthless',
          'show that scholarly reconstruction cannot securely supply the shared habits a score omits',
          'commend early performers for having documented their own practices',
        ],
        correctAnswer: 2,
        explanation:
          'The observation appears immediately after the claim that intention "asks the score for information it was never built to carry," and it extends that claim to scholarship: "we recover a practice from the men who disapproved of it." Skill comparisons across eras are never made. Setting aside all written evidence is too absolute — the author uses the treatises rather than discarding them, treating them as evidence that must be read against its grain. The commendation option reverses the point, since the treatises record disapproval rather than description.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most strengthen the author’s claim that appeals to intention end arguments rather than settle them?',
        options: [
          'In documented disputes over a single passage, performers citing the composer’s wishes reached opposite conclusions, and neither could be shown to be in error.',
          'Audiences report enjoying performances more when told in advance that they are historically informed.',
          'Several composers left unusually detailed written instructions about how their works should be played.',
          'Instruments in common use today differ acoustically from those of earlier centuries.',
        ],
        correctAnswer: 0,
        explanation:
          'The author’s claim is that a statement about an unconsultable mind cannot be refuted, so rival invocations of it settle nothing. Documented cases of contradictory appeals that resist correction is exactly the evidence that claim predicts. Audience enjoyment bears on reception, not on whether the standard can adjudicate. Detailed written instructions would cut against the author, narrowing the gap he says the score leaves. Instrument acoustics is a real fact about performance but has no bearing on whether appeals to intention are testable.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A conductor defends an unusually slow tempo by showing that only at that speed does a returning theme register as a return. According to the passage, this defense is:',
        options: [
          'invalid, because interpretive freedom cannot properly extend to tempo',
          'acceptable only if archival evidence establishes that the composer favored slow tempos',
          'beside the point, since performance quality is finally a matter of individual taste',
          'the right kind of defense, because it makes a claim about the work that other musicians can test in sound',
        ],
        correctAnswer: 3,
        explanation:
          'The author’s model case is precisely this: "that this phrase is an answer to the one before it and must be shaped so that it sounds like an answer" — an assertion about the piece testable by playing it both ways. The prohibition on tempo freedom appears nowhere in the passage. Requiring archival evidence of the composer’s preference reinstates the very standard the author rejects. Reducing the matter to taste is the tyranny the author says his account prevents, not permits.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'It can be inferred that the author regards the constraint of intention as weak chiefly because:',
        options: [
          'composers rarely thought carefully about how their works should sound in performance',
          'most performers are temperamentally unwilling to follow any instruction',
          'a claim about what a composer wanted cannot be shown to be mistaken',
          'composers commonly changed their minds about their works over the course of their lives',
        ],
        correctAnswer: 2,
        explanation:
          'The passage locates the weakness in unfalsifiability: it is "a claim about a mind that cannot be consulted," and "nobody can be refuted about it," so rival appeals cannot be adjudicated. The suggestion that composers were careless misrepresents the author, who says they wrote for players sharing habits they had no need to notate. Performer temperament is never discussed. Changing minds sounds plausible and is a real phenomenon, but the passage never invokes it; it is not the reason given.',
        skill: 'inference',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-art-03',
    section: 'cars',
    discipline: 'art history / curation',
    title: 'The Argument on the Wall',
    needsReview: true,
    passageText:
      'The old museum told a story so consistently that visitors stopped noticing it was a story. Rooms ran by century and by nation; each work stood as a step; the sequence arrived, with an air of inevitability, at the present. This was not a neutral display of holdings. It was a claim — that art develops, that it develops along national lines, that the later solves what the earlier attempted. Most of the claim is false, and the reform that swept it away was overdue.\n\nThat reform is the thematic rehang. Objects from different centuries and continents are gathered under a heading: the body, the sacred, power, the ordinary day. The gains are real and I will not pretend otherwise. A work is released from a queue it never asked to join. A bronze set beside a photograph discloses something neither shows alone. The pretense that a museum’s accidental holdings constitute a syllabus is abandoned. To that extent the rehang is a correction.\n\nBut here is what troubles me. A thematic room argues too, and it argues harder. To hang two objects together is to assert a likeness between them, and an assertion made by a wall is one that no visitor can answer. The old room at least had the courtesy of stating its thesis on a placard: French painting, 1780 to 1830. A visitor who thought the boundary arbitrary could say which boundary she meant, and why the year was wrong, and what the label had quietly excluded. What sentence, exactly, would she dispute in a room called Encounters?\n\nThe curator’s reply is that a thematic room has no thesis to dispute — that it merely invites the visitor to make her own connections, and that its virtue lies precisely in its refusal to instruct. I take the intention to be sincere, and I think it is mistaken. An invitation extended in a chosen room, among chosen objects, under a chosen word, in light aimed from a chosen angle, is not the absence of instruction. It is instruction that has removed its signature. The visitor does make connections — among the things somebody put in her way, and rarely among the things left in storage. To call this her freedom is to mistake the disappearance of the author for the disappearance of the argument.\n\nThe point can be put as a distinction. The complaint against the old hang was never that it argued; it was that it argued badly. The reform confused a bad thesis with the having of theses, diagnosed the museum’s disease as authority, and prescribed silence. But silence in a museum is not the absence of authority. It is authority without a return address, which is the more durable kind, because there is no one to write to.\n\nWhat a museum owes its visitors, then, is not neutrality, which is unavailable, but exposure. The wall text I would like to read says: we have placed these three works together because we believe they share something; here is the something; here is the strongest objection to our belief, and the name of the scholar who pressed it. Such texts are rare, and the reason is not the cost of the panel. They cost the curator the authority of the impersonal, which is the most valuable asset the modern museum owns and the one it is least willing to spend. A museum that says what it thinks can be argued with. A museum that only arranges cannot be, and it will go on being believed for exactly that reason.',
    questions: [
      {
        question: 'The passage is primarily concerned with arguing that:',
        options: [
          'the thematic rehang did not remove curatorial argument but made it harder to identify and therefore harder to contest',
          'museums should return to displays organized by century and nation',
          'curatorial neutrality is achievable so long as curators avoid stating explicit interpretive claims',
          'the older museum’s account of artistic development was substantially accurate',
        ],
        correctAnswer: 0,
        explanation:
          'The author grants the rehang real "gains" yet argues that "a thematic room argues too, and it argues harder," producing "instruction that has removed its signature" and "authority without a return address." A return to the old hang is never proposed; the author calls the reform "overdue." The neutrality option reverses the essay’s conclusion that neutrality "is unavailable." And the author says of the old story that "most of the claim is false."',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s question about what a visitor could dispute in a room called Encounters serves chiefly to:',
        options: [
          'reproach curators for choosing imprecise titles for their exhibitions',
          'suggest that thematic displays draw smaller audiences than chronological ones',
          'illustrate that a claim made by arrangement gives the visitor nothing specific to contest',
          'propose a more informative title for such an exhibition',
        ],
        correctAnswer: 2,
        explanation:
          'The question follows directly from the contrast with a dated national label, which a visitor "could say which boundary she meant" about; the room title is offered as the case where no such sentence exists. Fixing titles is not the author’s remedy — his proposal is a wall text stating the claim and its strongest objection. Attendance figures never appear. And the author suggests no alternative title, since a better word would not supply the missing proposition.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'The passage implies that the author regards a label reading "French painting, 1780 to 1830" as:',
        options: [
          'an accurate summary of a genuine national development in art',
          'an unnecessary intrusion of scholarship into the visitor’s encounter with the work',
          'evidence that older museums refrained from making interpretive claims',
          'a flawed claim whose merit was that it could be identified and disputed',
        ],
        correctAnswer: 3,
        explanation:
          'The author says the old hang argued badly, yet credits it with "the courtesy of stating its thesis on a placard," which let a visitor name the boundary she rejected. The accuracy option contradicts the judgment that most of the developmental story is false. Calling the label an intrusion inverts his complaint, which is that curators say too little rather than too much. The claim that older museums made no interpretive claims is precisely what the first paragraph denies.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'Which of the following findings would most weaken the author’s objection to thematic displays?',
        options: [
          'Visitors to thematic exhibitions report enjoying them more than chronological displays.',
          'Visitors leaving thematic rooms readily state, and criticize, the specific comparison the room proposed.',
          'Curators of thematic exhibitions spend longer selecting objects than curators of chronological ones.',
          'Some thematic exhibitions draw all of their objects from a single century.',
        ],
        correctAnswer: 1,
        explanation:
          'The objection is that an argument made by juxtaposition leaves nothing for a visitor to dispute. Evidence that visitors do identify and challenge the proposed comparison would show the claim is legible and contestable after all, dissolving the complaint. Enjoyment bears on the experience rather than on contestability, which is what the author’s case turns on. Selection time speaks to curatorial labor, not to whether the resulting claim is visible. A single-century thematic show is a true detail with no bearing on the argument.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A museum posts a panel reading: "We have placed these three objects together because we think each treats mourning as a public act; scholars of the middle object disagree, and their reasons are given below." The author would most likely regard this as:',
        options: [
          'an improvement, because it names the claim being made and directs the visitor to the case against it',
          'a failure, because it substitutes the curator’s judgment for the visitor’s own',
          'acceptable only if the three objects also share a period and region',
          'unnecessary, because the arrangement of the objects already communicates the claim',
        ],
        correctAnswer: 0,
        explanation:
          'This is nearly the text the author asks for: the claim stated, plus "the strongest objection to our belief, and the name of the scholar who pressed it." The failure option repeats the curator’s reply that the author has already answered, since on his account the arrangement instructs whether or not the curator speaks. Requiring shared period and region would reimpose the chronological scheme he calls false. The unnecessary option concedes the author’s premise that the arrangement makes a claim while missing his point that an unstated claim is the problem.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In context, the phrase "instruction that has removed its signature" most nearly means:',
        options: [
          'teaching that has been simplified for a non-specialist audience',
          'an exhibition assembled without any single curator responsible for it',
          'guidance that continues to shape the visitor while concealing that anyone is guiding',
          'an argument that its author has formally withdrawn',
        ],
        correctAnswer: 2,
        explanation:
          'The sentence concludes that choosing the room, the objects, the word, and the light is not the absence of instruction, and the paragraph ends by warning against mistaking "the disappearance of the author for the disappearance of the argument" — the guidance persists; only its attribution is gone. Simplification is a different matter entirely. The absence of a responsible curator is a literal misreading; someone made every choice listed. And nothing is withdrawn — the argument is still operating on the visitor.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-art-04',
    section: 'cars',
    discipline: 'film criticism',
    title: 'Spending Against an Empty Account',
    needsReview: true,
    passageText:
      'Manipulative is the laziest word in film criticism, and among the most damaging, because it has the sound of an argument. A film is called manipulative when it makes a viewer feel something the critic did not consent to feel, and the charge implies a contrast — with films that do not manipulate, that leave the audience free. No such films exist. Every cut is an act performed on an audience. To choose when to hold on a face and when to look away is to arrange another person’s attention, and that arrangement is the whole of the medium. A director who declined to manipulate would be a director who declined to direct.\n\nAnd yet the word persists, which usually means something real is being pointed at badly. What is it? Not the presence of technique. Not even the intensity of the feeling produced, since nobody calls a film manipulative merely for being overwhelming — only for being overwhelming in a way that seems unpaid for. That phrase gives the game away. The complaint is about solvency.\n\nHere is the distinction I would put in the word’s place. A film may draw on feeling it has established. It has spent an hour making a person real to us; when that person is hurt, the hurt lands because of work the film has done and we have watched it do. Or it may draw on feeling it has not established, reaching instead for material that arrives already charged: a child in danger, an animal, a face in terror, a song the audience learned elsewhere. The feeling comes. It is a genuine feeling. But the film has spent against an account it never opened.\n\nThe obvious objection is that this is only the old demand that a film earn its effects, dressed up in a ledger, and that ordinary experience refutes it in any case, since films move us within their first minute, before anything can possibly have been established. The second half of that objection is correct, and I want to accept it fully rather than wriggle. A film’s opening image of a frightened child does move us, immediately, and there is nothing false about the response.\n\nBut notice where the response came from. It came from us — from what any viewer brings to the sight of a frightened child, which the film found already assembled in the audience and did not have to build. The borrowing is no sin. Films borrow constantly, and some of the great ones borrow shamelessly. The error lies in the accounting afterward, when we credit the film with an understanding of childhood, or of fear, that it merely triggered and never produced. What we felt was ours. What we praised was supposed to be the film’s.\n\nSo the charge of manipulation, properly reconstructed, is not an ethical complaint about technique but a question of attribution: did this film make the feeling, or find it? Both are permitted. Only one is to the film’s credit. Reconstructed this way, the charge also stops being an insult and becomes a claim that can be checked, since a viewer can ask what in the preceding hour would have to be removed for the scene to stop working.\n\nAnd a critic who cannot tell the two cases apart will keep making the two symmetrical mistakes of the trade: dismissing as cheap a picture that did its building quietly, and praising as profound a picture that simply knew which buttons were already installed in us.',
    questions: [
      {
        question: 'The main point of the passage is that:',
        options: [
          'films that move audiences quickly are aesthetically inferior to films that build feeling slowly',
          'the real complaint concealed inside the charge of manipulation concerns whether a film produced the feeling it is credited with',
          'because every film manipulates, no film should be criticized for the emotions it produces',
          'critics should evaluate films by their technique rather than by their emotional effects',
        ],
        correctAnswer: 1,
        explanation:
          'The essay reconstructs the charge as "a question of attribution: did this film make the feeling, or find it?" and warns against crediting a film with what it "merely triggered and never produced." The speed option is too absolute and contradicts the concession that instant responses are legitimate. The no-criticism option takes the true first-paragraph premise and draws the wrong conclusion, since the author replaces the charge rather than abandoning criticism. Technique over emotion inverts the essay, which is about emotion throughout.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward critics who describe a film as "manipulative" is best described as:',
        options: [
          'agreement with their verdicts in most cases',
          'amusement at a dispute he regards as unimportant',
          'hostility toward the practice of judging films by their emotional effects',
          'impatience with the word combined with respect for the concern behind it',
        ],
        correctAnswer: 3,
        explanation:
          'The author calls the word "the laziest" in criticism and shows the contrast it implies is empty, yet insists that "something real is being pointed at badly" and devotes the essay to reconstructing it. Agreement with their verdicts is wrong, since he says such critics make "two symmetrical mistakes." Amusement misses the stakes he assigns the question. Hostility to emotional criticism reverses him: the whole essay judges films by how their emotional effects are produced.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'In context, the statement that a film "has spent against an account it never opened" most nearly means that it:',
        options: [
          'has drawn on feeling for a person or situation it has not actually established',
          'has produced its emotion through unusually expensive technical means',
          'has withheld any emotional payoff from its audience',
          'has borrowed its techniques from earlier and better films',
        ],
        correctAnswer: 0,
        explanation:
          'The sentence closes the contrast between a film that spends "an hour making a person real to us" and one that reaches for "material that arrives already charged," so the empty account is the establishing work never done. Production expense is not the passage’s subject; the metaphor is about what the film has built, not what it cost. Withholding payoff is the opposite case — the feeling here does arrive. Borrowing techniques from other films is a different kind of borrowing than the one described, which concerns what the audience already brings.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most undermine the author’s distinction between feeling a film produces and feeling a viewer supplies?',
        options: [
          'Audiences weep at scenes that critics regard as poorly constructed.',
          'Filmmakers openly describe the techniques they use to elicit emotion.',
          'Viewers shown a climactic scene alone, and viewers shown it after the full preceding hour, respond with the same intensity and give the same reasons for their response.',
          'Some films once dismissed as manipulative are now widely admired.',
        ],
        correctAnswer: 2,
        explanation:
          'The distinction requires that establishing work make a measurable difference to what a scene does; if the preceding hour changes neither the intensity nor the stated grounds of the response, the two categories collapse and the author’s test — what would have to be removed for the scene to stop working — returns nothing. Weeping at poorly constructed scenes is consistent with the author, who says borrowed feeling is genuine. Filmmakers describing techniques is true but bears on intent, not attribution. Shifting reputations concerns critical fashion, not the mechanism.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A film opens on a stranger’s child in danger, and the audience is gripped within seconds. Based on the passage, the author would most likely say that:',
        options: [
          'the film has manipulated its audience and deserves censure for doing so',
          'the response demonstrates that the film established the child with unusual efficiency',
          'the response is illegitimate, and viewers ought to resist it',
          'the response is genuine, but the film should not be credited with having created it',
        ],
        correctAnswer: 3,
        explanation:
          'The author accepts exactly this case: the response "does move us, immediately, and there is nothing false about" it, yet "it came from us," and "the borrowing is no sin" — the error would be in the accounting. Censure contradicts his statement that borrowing is permitted. Efficient establishment misdescribes what happened, since the film "did not have to build" the material. Calling the response illegitimate contradicts his insistence that the feeling is genuine.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The author’s concession that films can move viewers within their first minute functions primarily to:',
        options: [
          'abandon the distinction he has been developing',
          'identify a source of feeling that lies in the viewer rather than the film, sharpening his account',
          'establish that scenes devoted to establishing character are unnecessary',
          'praise directors capable of characterizing a figure very rapidly',
        ],
        correctAnswer: 1,
        explanation:
          'The concession is granted "fully rather than wriggle," and the next paragraph turns it into the heart of the argument: "notice where the response came from. It came from us." The distinction is not abandoned but refined into a question of attribution. Nothing suggests establishing scenes are unnecessary; they are what makes the other kind of credit possible. And no director is praised here, since the passage attributes the effect to the audience rather than to a directorial feat.',
        skill: 'function',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-art-05',
    section: 'cars',
    discipline: 'architecture / the built environment',
    title: 'The Unwilling Audience',
    needsReview: true,
    passageText:
      'Every art but one is offered. A book may be closed, a concert left, a canvas walked past; the audience of a poem is the set of people who chose to read it. Architecture has no such audience. The people most exposed to a building are those who pass it daily on the way to work, who did not commission it, cannot avoid it, and were never asked. This is not a minor difference of circumstance. It ought to govern how buildings are criticized, and it mostly does not.\n\nWhat we do instead is borrow. The vocabulary of architectural praise — expression, integrity, vision, daring — comes from the arts of the willing audience, where the worst an overreaching work can do is bore someone who is free to leave. Applied to a structure that will stand over a street for eighty years, the same words describe a very different act. The question is not only whether a building is good, but what it does to people who have no means of declining it.\n\nThe usual remedy is contextualism: the building that defers, matching the height and material and rhythm of its neighbors so that it settles in without argument. Often this is right, and I would not wish to live in a city built by architects competing for attention. But notice what deference of this kind accomplishes, and what it conceals. A building that looks as though it had always been there does not read as a decision. It reads as a fact, and facts are not debated. The conspicuous building at least announces that somebody chose something, and an announced choice can be opposed.\n\nI concede at once that this argument has been abused, and abused by precisely the people it appears to flatter. Boldness is the standing alibi of the profession. A great deal of arrogance has been defended as courage, and a great many streets have been ruined by architects who took public objection as proof of their own originality. If my point were that conspicuous buildings are better than quiet ones, it would be a bad point, and the evidence against it is visible from most windows.\n\nThe distinction I want is between humility of form and humility of effect, which are routinely confused because only one of them is easy to see. A tower clad in brick to match the terraces around it, which takes the afternoon sun off the only park in the district, is not a humble building. It has made itself hard to argue with while doing something that could not have survived an argument. Meanwhile a frankly modern hall that gives back a public route through its ground floor may have imposed less on the street than anything built that decade in a sympathetic stone.\n\nStyle, in short, is a poor proxy for restraint, and the reason we keep using it is that style is what a drawing shows and effect is what a drawing hides. A rendering can display a facade in convincing detail while saying nothing about the wind at the corner, the hours the square will spend in shadow, or the alley that will no longer connect two streets. Those are the terms in which the unwilling audience actually experiences the work.\n\nThat we go on discussing facades instead tells us a good deal about critics and very little about buildings. The art whose audience cannot leave is the one we criticize as though everyone had chosen to be there.',
    questions: [
      {
        question: 'The central argument of the passage is that:',
        options: [
          'contextual buildings should be prohibited in historic districts',
          'architecture should be judged by the same standards that govern painting and music',
          'conspicuous buildings are aesthetically superior to deferential ones',
          'because architecture is imposed on an audience that cannot decline it, deference in style is not the same as restraint in effect and may hide a decision from public argument',
        ],
        correctAnswer: 3,
        explanation:
          'The essay opens by isolating the captive audience, then draws its central distinction "between humility of form and humility of effect," illustrated by the matching tower that "has made itself hard to argue with while doing something that could not have survived an argument." No prohibition is proposed. Judging architecture like the other arts is the borrowing the author criticizes. And he explicitly disowns the claim that conspicuous buildings are better: "it would be a bad point."',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The passage suggests that the author would regard the phrase "a building in keeping with its neighbors" as:',
        options: [
          'a description of appearance that says nothing about what the building does to those around it',
          'the highest praise available to a work of architecture',
          'a meaningless phrase, since no two buildings genuinely resemble one another',
          'a reliable measure of an architect’s respect for the public',
        ],
        correctAnswer: 0,
        explanation:
          'The brick-clad tower is presented as being in keeping with its neighbors while taking "the afternoon sun off the only park," which is the author’s demonstration that style and effect come apart. Treating the phrase as highest praise is the confusion the essay exists to break. Calling it meaningless overshoots — the author accepts that such buildings really do match, only that matching is not restraint. Treating it as a measure of respect for the public reverses the argument.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'The comparison of architecture with books, concerts, and paintings serves primarily to:',
        options: [
          'establish that architecture is the most technically demanding of the arts',
          'argue that buildings should not be evaluated in aesthetic terms at all',
          'isolate the feature — an audience that cannot leave — that makes borrowed critical vocabulary misfit',
          'show that architects have historically envied the freedom of painters and composers',
        ],
        correctAnswer: 2,
        explanation:
          'The opening paragraph establishes that other arts are "offered" while architecture is not, and the next paragraph draws the consequence: praise borrowed "from the arts of the willing audience" describes "a very different act" when applied to a building. Technical difficulty is never claimed. Abandoning aesthetic evaluation is too absolute; the author asks that criticism add what a building takes, not that it stop judging. Architects’ envy is nowhere in the passage.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following findings would most strengthen the author’s claim that deferential buildings escape public argument?',
        options: [
          'Deferential buildings are typically more expensive to construct than conspicuous ones.',
          'Planning records show that proposals matching the surrounding style attract far fewer public objections than proposals of equal size in a contrasting style.',
          'Residents surveyed about contrasting new buildings describe them as ugly.',
          'Architects who design contextual buildings often design conspicuous ones as well.',
        ],
        correctAnswer: 1,
        explanation:
          'The claim is that a building which "does not read as a decision" attracts no debate, so evidence that objections track style rather than size is exactly what it predicts. Construction cost bears on budgets, not on public contestation. Residents finding contrasting buildings ugly speaks to taste and, if anything, to the opposite phenomenon — attention drawn rather than deflected. Architects working in both modes is a true fact about careers with no bearing on how proposals are received.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A developer proposes a large structure clad in brick to match the surrounding row houses; it will place the neighborhood’s only park in shadow for most of the afternoon. The author would most likely say that:',
        options: [
          'the brick cladding is an adequate answer to the objections of neighbors',
          'the structure’s appearance makes it a model of architectural humility',
          'the proposal should be approved, since it respects the character of the area',
          'its matching surface is not restraint, because the imposition lies in an effect the style conceals',
        ],
        correctAnswer: 3,
        explanation:
          'This is the author’s own illustration in all but name: such a tower "is not a humble building" but one that "has made itself hard to argue with while doing something that could not have survived an argument." Treating the cladding as an answer to objections mistakes form for effect. Calling it a model of humility states the confusion the passage attacks. Approving it for respecting local character applies the style proxy the author calls poor.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward architects who defend their work by invoking boldness is best described as:',
        options: [
          'wary, granting that the term has excused a good deal of genuine arrogance',
          'approving, since bold buildings invite the public judgment he favors',
          'neutral, since the author takes no position on questions of architectural style',
          'contemptuous of the profession as a whole',
        ],
        correctAnswer: 0,
        explanation:
          'The author writes that "boldness is the standing alibi of the profession" and that "a great deal of arrogance has been defended as courage" — a pointed concession made against his own apparent interest. Approval misreads him: he grants only that a conspicuous building announces a choice, not that its defenders are right. Neutrality ignores the strong evaluative language. Contempt for the whole profession overshoots a criticism aimed at one habit of self-justification.',
        skill: 'tone',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-art-06',
    section: 'cars',
    discipline: 'photography / documentary representation',
    title: 'The Permanent Hour',
    needsReview: true,
    passageText:
      'The standard indictment of documentary photography is by now recited more often than examined. The photographer, it holds, converts another person’s worst hour into a composition; the suffering is framed, lit, and arranged, and the resulting beauty is a betrayal, since to make an image of pain lovely is to invite the viewer to enjoy it. The charge has the shape of a moral insight. I think it identifies the wrong crime.\n\nBegin with the practical fact the charge ignores. Attention is scarce and unfairly distributed, and a photograph that is merely accurate is a photograph nobody looks at twice. Composition is not decoration laid over a subject; it is the means by which a subject is made to hold a stranger’s eye for longer than a second. Stripped of it, an image joins the great mass of documentation that circulates unseen among people who already agree. If the aim is that a subject’s condition be known to those who would rather not know it, beauty is not the enemy of that aim. It is frequently the only instrument available.\n\nThere is a version of the complaint I do accept. Beauty can invite contemplation where a situation calls for something other than contemplation, and a viewer who lingers admiringly over the light on a ruined wall has been diverted from what the wall means. That is a real cost, and I do not want to argue it away. But observe that it is a cost paid in the viewer’s posture, not in the subject’s treatment, and that the very photograph which lets one person luxuriate sends another to do something about it. No rule about photographs can be built on a result so unstable.\n\nThe wrong actually done to the subject is not aesthetic but temporal. A photograph fixes a person at one hour of her life and hands that hour to the world in perpetuity. She will recover, or fail to, and grow older, and acquire opinions about the day the picture was taken; and the image will go on presenting her as she was when the worst thing happened, to viewers who will never learn that the day ended. She has been made permanently into an instance of a condition. That is a genuine harm, and it is committed by the crude photograph and the exquisite one alike.\n\nWhich is the test between the two accounts. If beauty were the offense, the plain snapshot would be innocent. But the plain snapshot fixes its subject in the same eternal afternoon, and is often circulated with less care about who she was. The elegance of an image has no bearing on the harm. It bears only on whether anyone looks. We have been prosecuting a charge that cannot separate the guilty from the innocent, which is usually a sign that the charge has been misdescribed.\n\nThe remedy that follows is not a plainer style. It is duration. A caption can return a subject her name, but it cannot return her a tomorrow; only a second photograph can do that. Photographers who go back — who publish the same person five years on, whether the intervening years were kind or not — undo the specific injury the single image inflicts, because they restore the one thing the frame removed, which is the possibility that her life continued after the shutter closed. That is an expensive practice and an unglamorous one. It is also, so far as I can see, the only answer anyone has offered to a question the long quarrel over beauty has managed never to ask.',
    questions: [
      {
        question: 'The central claim of the passage is that:',
        options: [
          'documentary photographers should avoid making beautiful images of suffering',
          'photographs of suffering raise no ethical difficulties worth taking seriously',
          'the genuine wrong in documentary photography is that it fixes a person permanently in a single terrible moment, not that it renders that moment beautifully',
          'captions are sufficient to restore the dignity that photographs of suffering take from their subjects',
        ],
        correctAnswer: 2,
        explanation:
          'The author states that "the wrong actually done to the subject is not aesthetic but temporal" and that this harm "is committed by the crude photograph and the exquisite one alike." Avoiding beauty is the position he rejects, calling beauty "frequently the only instrument available." Denying all ethical difficulty is too absolute, since he names a genuine harm. And he explicitly says a caption "cannot return her a tomorrow."',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward the charge that documentary photography aestheticizes suffering is best described as:',
        options: [
          'wholehearted endorsement of the charge as usually stated',
          'critical of the charge as stated while granting that it points at a real cost',
          'dismissive of any ethical scrutiny of photographs of suffering',
          'undecided, since the author declines to take a position of his own',
        ],
        correctAnswer: 1,
        explanation:
          'The author says the charge "identifies the wrong crime," yet concedes "there is a version of the complaint I do accept" — the diverted viewer — and adds that he does "not want to argue it away." Wholehearted endorsement contradicts his central objection. Dismissing ethical scrutiny overshoots badly, since he proposes a harm and a remedy. And he is far from undecided; he names the wrong and prescribes a practice.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'The author’s argument implies that a crude, unflattering photograph of a person in distress:',
        options: [
          'commits the harm the author identifies as fully as a beautiful photograph does',
          'is ethically preferable, because it does not invite admiring contemplation',
          'cannot attract the attention needed to help its subject and is therefore the worse image',
          'escapes the author’s criticism, since it makes no aesthetic claim on the viewer',
        ],
        correctAnswer: 0,
        explanation:
          'The passage says the temporal harm "is committed by the crude photograph and the exquisite one alike," and that "the plain snapshot fixes its subject in the same eternal afternoon." Calling the crude image preferable applies the beauty standard the author rejects. The claim that it is therefore worse mixes a true observation about attention with a verdict the author does not draw about the harm to the subject. And nothing escapes the criticism on aesthetic grounds, since the harm is not aesthetic.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'Which of the following findings would most weaken the author’s claim that beauty is not the source of the ethical problem?',
        options: [
          'Beautiful photographs of suffering are reproduced far more often than plain ones.',
          'Some photographers arrange scenes of suffering deliberately for visual effect.',
          'Viewers are able to recall beautiful images long after they have forgotten plain ones.',
          'Subjects of such photographs report feeling most misrepresented by the images composed most beautifully.',
        ],
        correctAnswer: 3,
        explanation:
          'The author locates the harm in the subject’s treatment and insists elegance "has no bearing on the harm." Testimony from subjects that harm tracks beauty would attack that claim at its source, using the very party whose treatment is at issue. Wider reproduction of beautiful images supports the author’s point about attention. Deliberate arrangement concerns photographers’ intentions rather than what the subject suffers. Superior recall of beautiful images likewise strengthens the case that beauty is what secures notice.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A magazine republishes a famous photograph of a starving child beside a new portrait of the same person, now an adult, with an account of the intervening years. Based on the passage, the author would most likely regard this as:',
        options: [
          'a fresh violation, since it exposes the subject to public view a second time',
          'irrelevant to his argument, which concerns composition rather than publication',
          'the appropriate remedy, because it restores to the subject the future the single image had withheld',
          'acceptable only if the second portrait is made in the same style as the first',
        ],
        correctAnswer: 2,
        explanation:
          'The final paragraph asks for exactly this: photographers "who publish the same person five years on" restore "the possibility that her life continued after the shutter closed." Calling it a violation reverses the remedy he prescribes. Dismissing it as irrelevant misstates his subject, which is not composition but what the single frame does to a life. Requiring a matching style reintroduces the aesthetic criterion the passage argues has no bearing on the harm.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In context, the statement that a caption "can return a subject her name, but it cannot return her a tomorrow" most nearly means that:',
        options: [
          'photographs of suffering should be published without captions',
          'identifying a subject does not undo the image’s fixing of her in a single moment',
          'captioning is the only ethical obligation a photographer has toward a subject',
          'naming a subject does her more harm than leaving her anonymous',
        ],
        correctAnswer: 1,
        explanation:
          'The sentence introduces duration as the remedy and concedes what captions can and cannot do: a name restores identity, but the frame’s permanence — the loss of a future — requires "a second photograph." Removing captions is not proposed; the sentence credits them with something real. Calling captioning the sole obligation reverses the sentence, which is about the obligation captions fail to meet. And no claim is made that naming harms the subject.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
]
