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
 * AI-authored; reviewed (keys verified, distractors length-balanced) — needsReview cleared.
 */
export const CARS_ARTS_PASSAGES: MCATPassage[] = [
  {
    id: 'cars-art-01',
    section: 'cars',
    discipline: 'aesthetics / philosophy of art',
    title: 'The Forger’s Smirk',
    needsReview: false,
    passageText:
      'The forger deserves a better advocate than his enemies usually allow him, so let me open by arguing his side at full strength. Two panels hang in the same light. The pigments were ground from the same earths, the craquelure agrees under magnification, the drawn line carries the same small tremor; no laboratory, no archive, no trained eye can tell one from the other. You claim to love painting — paint, that is, arranged upon a surface. Whatever you find on the first surface is present on the second. If your reverence declines to transfer from panel to panel, it was never resting on the panel at all, but on a name, a price, a legend of origins. When a museum learns that a beloved picture is a fake and moves it quietly to the basement, nothing on the canvas has changed — only the paperwork has — and a love that tracks paperwork is not a love of art. The forger, on this view, has performed a public service: he has caught the connoisseurs dressing a financial instrument in the language of the soul.\n\nHalf of that brief is correct, and it is worth saying which half. The sociology is correct. Attribution props up prices; reverence is often rehearsed; more than one expert has felt an authenticity the archives later declined to confirm. If the advocate confined himself to indicting that priesthood, I would sign the indictment with him.\n\nThe philosophy fails, and it fails at its first, quietest move: the assumption that whatever we value in a painting must be a property the surface can carry. Very little of what we admire anywhere would survive that test. A sprinter who runs a record time with a gale at her back matches the champion to the hundredth of a second; the clock cannot tell the difference, and we can, because a time is not an achievement — a time is what an achievement leaves behind. A mathematician who constructs a proof has done one thing; the student who copies it line by line has done another, though the pages match to the last symbol. In every domain but one we find it obvious that identical residues can be left by unequal doings. The advocate invites us to forget the obvious whenever the residue is made of paint.\n\nHe will answer that galleries are not stadiums — that we come to look, not to award medals, and that looking needs only what is there. But what we look at, in a painting, is mostly decisions: this contour instead of the likelier one, this interval of color held where convention demanded relief. When the panel is unmasked as a copy, not a molecule alters, yet every mark changes its standing, because what had been a decision is now a transcription of somebody else’s. The looking changes, and it changes because looking was never the pure optics the advocate requires it to be. We see the doing in the thing done, or we are not seeing a painting at all — only pigment in interesting weather.\n\nSo the smirk lands, though not where the forger aims it. He has not shown that the difference between original and copy is empty; he has shown that a profession claimed to be locating that difference with its eyes when its eyes were never where the difference lived. His panels expose the false account the experts gave of their own judgment, and the humiliation is real and useful. The judgment survives it. So, unfortunately for him, does the distinction between doing a thing and tracing it.',
    questions: [
      {
        question: 'Which of the following best states the central argument of the passage?',
        options: [
          'Because a perfect forgery matches the original in every visible respect, the two panels deserve the same admiration.',
          'The forger’s challenge fails because it assumes that everything we value in a painting is carried by the visible surface.',
          'The experts’ inability to defend their own judgments shows that the distinction between original and copy was empty all along.',
          'Museums that remove unmasked forgeries from display are protecting investments rather than artistic standards.',
        ],
        correctAnswer: 1,
        explanation:
          'The author locates the brief’s failure "at its first, quietest move: the assumption that whatever we value in a painting must be a property the surface can carry," and answers it with the principle that "identical residues can be left by unequal doings." What we chiefly admire is the doing rather than the residue, since "what we look at, in a painting, is mostly decisions." The equal-admiration option is the advocate’s brief, which the author argues against after stating it. The option about empty distinctions takes the closing concession too far: the author says the experts gave "the false account," but that "the judgment survives it." The museum-basement option is a detail from the advocate’s side of the case, not the author’s conclusion.',
        skill: 'main-idea',
        needsReview: false,
      },
      {
        question: 'The example of the sprinter who runs a record time with a gale at her back functions primarily to:',
        options: [
          'concede that athletic accomplishment, unlike artistic, can be read off its measurable results',
          'argue that records set under irregular conditions should be struck from the record books',
          'suggest that competition among painters is as legitimate as competition among athletes',
          'illustrate that identical outcomes can be left behind by doings of unequal standing',
        ],
        correctAnswer: 3,
        explanation:
          'The sprinter appears in the paragraph testing the surface assumption: her time "matches the champion to the hundredth of a second; the clock cannot tell the difference, and we can, because a time is not an achievement — a time is what an achievement leaves behind." That is the residue-versus-doing point in miniature. The concession option reverses the example’s purpose, which is that athletics works exactly as painting does. Nothing is said about striking records from books — the example needs only that we judge the two times differently. And competition among painters is never at issue.',
        skill: 'function',
        needsReview: false,
      },
      {
        question: 'It can be inferred that the author regards experts who "felt an authenticity the archives later declined to confirm" as having:',
        options: [
          'described their own judgment in terms it could not honestly support',
          'demonstrated that no reliable difference between originals and copies exists',
          'fallen victim to forgers too skillful for any known method to expose',
          'supplied the strongest available evidence for the distinction the author defends',
        ],
        correctAnswer: 0,
        explanation:
          'These experts belong to the "priesthood" whose indictment the author says he would sign, and the closing paragraph names their offense: the profession "claimed to be locating that difference with its eyes when its eyes were never where the difference lived," giving "the false account" of its own judgment. The no-reliable-difference option is the advocate’s conclusion, which the author rejects — the judgment "survives." The skillful-forger option excuses the experts, whereas the author blames their self-description. And far from being the distinction’s best witnesses, they are the reason the forger’s smirk lands at all.',
        skill: 'inference',
        needsReview: false,
      },
      {
        question: 'Which of the following findings, if true, would most WEAKEN the author’s reply to the forger’s advocate?',
        options: [
          'Several known forgers have also produced admired original work under their own names.',
          'Museum visitors spend, on average, less than one minute before any single painting.',
          'Viewers told midway that a painting is a copy notice and admire just what they did before.',
          'Laboratory methods can now expose nearly every forgery made before the twentieth century.',
        ],
        correctAnswer: 2,
        explanation:
          'The author’s reply turns on the claim that unmasking a copy changes the viewing: "every mark changes its standing" and "the looking changes," because we "see the doing in the thing done." Viewers whose noticing, describing, and admiring are wholly unaffected by the news would be evidence that looking is the pure optics the advocate requires and the author denies. Forgers with original careers of their own are compatible with everything the author says about doing versus tracing, since his claim is about the standing of a copy, not about the talents of copyists. Average viewing time bears on museum behavior, not on the argument. And better detection methods change nothing, since the case was built on a forgery no method can expose.',
        skill: 'strengthen-weaken',
        needsReview: false,
      },
      {
        question: 'A pianist reproduces, note for note, a celebrated improvisation invented on stage decades earlier by another musician. On the author’s reasoning, the reproduction:',
        options: [
          'has the same standing as the original, since the two performances leave acoustically identical results',
          'is a different doing that leaves the same residue, and so invites a different judgment',
          'deserves no admiration of any kind, since copies are worthless',
          'should be assessed by consulting the documents that establish who invented the passage',
        ],
        correctAnswer: 1,
        explanation:
          'This is the mathematician’s case transposed: the copyist "has done another" thing "though the pages match to the last symbol," because "identical residues can be left by unequal doings." The same-standing option repeats the surface assumption the passage refutes. The worthlessness option overshoots — the author ranks the doings differently but never declares copying beneath all admiration, and his target is the assessment, not the copyist. The documents option confuses the author’s position with the "paperwork" the advocate mocks; the author’s test is what was done, not what the file drawer certifies.',
        skill: 'application',
        needsReview: false,
      },
      {
        question: 'The author’s attitude toward the forger’s advocate is best described as:',
        options: [
          'contempt for a position he regards as beneath the dignity of argument',
          'complete agreement with the advocate’s sociology and his philosophy',
          'reluctant surrender to a case whose central claim he cannot answer',
          'fair statement of the case, joined to rejection of its central premise',
        ],
        correctAnswer: 3,
        explanation:
          'The author opens by promising to argue the advocate’s side "at full strength," then splits the brief: "The sociology is correct... The philosophy fails." That is engagement at the opponent’s best, followed by firm refutation of the premise about surfaces. Contempt is ruled out by the care taken to build the brief before answering it. Complete agreement fails on the philosophy, which the author spends three paragraphs dismantling. And surrender fails in the other direction: the closing paragraph declares that the judgment, and the distinction between doing and tracing, both survive.',
        skill: 'tone',
        needsReview: false,
      },
    ],
  },
  {
    id: 'cars-art-02',
    section: 'cars',
    discipline: 'music criticism',
    title: 'The Ghost in the Margins',
    needsReview: false,
    passageText:
      'The quartet had been rehearsing for three hours when it reached the slow movement, and the argument that followed consumed most of the fourth. I had come to write a profile of the ensemble. I stopped taking the notes I had planned to take and began taking better ones.\n\nThe disputed passage was eight bars long. The cellist wanted it restless, pressed forward against the beat; the first violinist wanted it suspended, nearly motionless. What held my attention was not the disagreement but the different currencies in which the two of them argued. The violinist reached for the composer. The autograph marks the passage sostenuto; letters from that year describe a grief kept deliberately private; a pupil’s memoir recalls the old man stopping players who hurried him. He produced these documents like a lawyer, and every citation ended the exchange without ending the disagreement: the cellist would fall silent, visibly unconvinced, and the silence would hold until somebody lifted a bow.\n\nWhen the cellist finally argued back, she argued in another currency altogether. If these bars stand still, she said, the return of the opening theme four pages later arrives as nothing, because it returns to a stillness it never left; play the eight bars as a departure, and the return becomes an event. Notice the shape of that claim. It mentions nobody’s wishes. It asserts something about the piece — about what one passage does to another — and it carries its own test inside it.\n\nWhich is how the matter was settled, near midnight: they played the movement both ways. I will not pretend to have heard everything those four heard. But even to me the difference was no matter of taste. Taken statically, the return was scenery. Taken the cellist’s way, it landed like news of a death one had been dreading. The violinist set down his instrument and conceded, with the particular grace musicians reserve for rehearsal defeats.\n\nWhat he said next is my reason for telling the story. He did not say: the piece requires it. He said: perhaps this is what the old man wanted after all. Within a minute he had converted a verdict delivered by his own ears into a biographical discovery, assigning the credit for his conversion to a man dead for a century and a half. The evidence had been audible. The authority, it seemed, still had to be posthumous.\n\nI have thought about that sentence ever since, because it holds the whole economy of a certain school of performance. In that school the appeal to the composer does real work, but the work is ceremonial rather than evidentiary. It dignifies conclusions reached by other means, and it closes conversations that listening has already decided. A claim about eight bars can be tried out in a room and can fail there, in front of colleagues. A claim about a dead man’s wishes cannot; a standard that cannot be consulted can never rule against the one who invokes it, which is, I suspect, the secret of its durability.\n\nThe violinist’s part had come down to him from his teacher’s teacher, and its margins were crowded three generations deep with penciled markings — a genealogy of decisions, every one of them made by ear, in some room like that one, at some hour near midnight, and every one of them, I would wager, attributed by morning to the ghost.',
    questions: [
      {
        question: 'The passage as a whole is best read as arguing that:',
        options: [
          'disputes within an ensemble are ordinarily settled by whichever player holds the senior chair',
          'documentary evidence about a composer’s life is the most reliable guide to interpretive decisions',
          'appeals to a composer’s intention close arguments that claims about the music itself decide',
          'performers should disregard the tempo and dynamic markings that composers leave in their scores',
        ],
        correctAnswer: 2,
        explanation:
          'The narrative builds to the stated moral: the appeal to the composer "does real work, but the work is ceremonial rather than evidentiary" — it "dignifies conclusions reached by other means" — while the cellist’s kind of claim "carries its own test inside it" and settled the dispute in sound. Seniority never figures in the story; the senior violinist loses. The documentary option is the violinist’s currency, whose citations ended exchanges "without ending the disagreement." And the author never counsels ignoring the score’s markings — the sostenuto marking is treated as evidence produced in the dispute, not as something to discard.',
        skill: 'main-idea',
        needsReview: false,
      },
      {
        question: 'The author’s observation that each citation "ended the exchange without ending the disagreement" serves primarily to:',
        options: [
          'show that the violinist’s documents silenced discussion without persuading anyone',
          'show that the cellist lacked the historical learning needed to answer the documents',
          'suggest that the players were too fatigued by the fourth hour to argue productively',
          'imply that the letters and memoir the violinist cited were of doubtful authenticity',
        ],
        correctAnswer: 0,
        explanation:
          'The sentence is followed immediately by its content: "the cellist would fall silent, visibly unconvinced." The documents stopped talk while changing no minds — the gap between closing a conversation and deciding it that the final paragraphs generalize. The passage attributes the cellist’s silence to the currency of the argument, not to any deficit in her learning; when she answers, she deliberately argues "in another currency altogether." Fatigue is the wrong mechanism — the same players go on to settle the matter near midnight by playing. And the author never questions the documents’ authenticity, only what they can adjudicate.',
        skill: 'function',
        needsReview: false,
      },
      {
        question: 'It can be inferred that the author regards the cellist’s argument as superior to the violinist’s chiefly because it:',
        options: [
          'was delivered with more conviction than the violinist could muster',
          'reflected her longer acquaintance with the quartet’s repertoire',
          'happened to coincide with what the composer’s letters describe',
          'could be confirmed or defeated by playing the passage and listening',
        ],
        correctAnswer: 3,
        explanation:
          'The author underlines exactly this property: her claim "asserts something about the piece" and "carries its own test inside it," and the later contrast is explicit — a claim about eight bars "can be tried out in a room and can fail there," while a claim about a dead man’s wishes cannot. Conviction is never compared; if anything the violinist cites with a lawyer’s confidence. Her length of acquaintance is not mentioned anywhere. And coinciding with the letters would make her argument strong in the violinist’s currency, which is the one the author is at pains to devalue.',
        skill: 'inference',
        needsReview: false,
      },
      {
        question: 'Which of the following, if true, would most STRENGTHEN the author’s claim that appeals to the composer are "ceremonial rather than evidentiary"?',
        options: [
          'Musicians who cite composers’ letters usually read them in the original rather than in translation.',
          'Players invoke the composer only after a preference has formed, and rival ensembles cite him on both sides.',
          'Several composers left metronome markings precise enough to settle most questions of tempo outright.',
          'Concert audiences cannot reliably distinguish performances advertised as historically informed from those that are not.',
        ],
        correctAnswer: 1,
        explanation:
          'The ceremonial account holds that the appeal "dignifies conclusions reached by other means" and that the unconsultable standard "can never rule against the one who invokes it." Invocations that arrive only after a preference exists, and that support opposite conclusions in different rooms, show the composer functioning as decoration for verdicts, not as evidence constraining them. Reading letters in the original bears on scholarship, not on when and how the appeal is used. Precise metronome markings would cut the other way, making intention genuinely consultable. And what audiences can detect concerns reception, not the rehearsal economy the author describes.',
        skill: 'strengthen-weaken',
        needsReview: false,
      },
      {
        question: 'A conductor tells her orchestra: "Take the coda faster — the letters tell us the composer despised sluggish endings." Based on the passage, the author would most likely observe that this instruction:',
        options: [
          'makes the kind of claim about the piece that an evening of rehearsal can settle',
          'should be followed only if the letters she cites can first be authenticated',
          'invokes a standard that cannot rule against her, however the coda sounds',
          'is illegitimate, because tempo decisions belong to the players rather than the conductor',
        ],
        correctAnswer: 2,
        explanation:
          'The instruction is an appeal to an unconsultable mind, and the passage’s verdict on such appeals is direct: "a standard that cannot be consulted can never rule against the one who invokes it." A claim rehearsal could settle would have to be about the music — what the faster coda does to what precedes it — and this instruction is not phrased that way. Authentication misses the point, since the author’s objection stands even when the documents are genuine, as the violinist’s were. And the passage assigns no view about the division of authority between conductors and players.',
        skill: 'application',
        needsReview: false,
      },
      {
        question: 'The author’s closing wager that every penciled marking would be "attributed by morning to the ghost" most nearly suggests that:',
        options: [
          'decisions reached by ear are habitually re-described as discoveries about the composer',
          'the markings in inherited performing parts are routinely erased and rewritten by each generation',
          'the violinist’s teachers enjoyed access to the composer’s unpublished manuscripts and papers',
          'performing traditions preserve the composer’s wishes more faithfully than printed scores do',
        ],
        correctAnswer: 0,
        explanation:
          'The wager generalizes the violinist’s move — a verdict "delivered by his own ears" converted "into a biographical discovery" — across the three generations of markings, "every one of them made by ear... and every one of them... attributed by morning to the ghost." The erasure option contradicts the image of margins "crowded three generations deep." Access to unpublished papers invents a provenance the passage never hints at. And the fidelity option reverses the point: the markings are presented as a genealogy of the players’ own decisions, not as transmissions from the composer.',
        skill: 'meaning-in-context',
        needsReview: false,
      },
    ],
  },
  {
    id: 'cars-art-03',
    section: 'cars',
    discipline: 'art history / curation',
    title: 'The Argument on the Wall',
    needsReview: false,
    passageText:
      'The old museum told a story so consistently that visitors stopped noticing it was a story. Rooms ran by century and by nation; each work stood as a step; the sequence arrived, with an air of inevitability, at the present. This was not a neutral display of holdings. It was a claim — that art develops, that it develops along national lines, that the later solves what the earlier attempted. Most of the claim is false, and the reform that swept it away was overdue.\n\nThat reform is the thematic rehang. Objects from different centuries and continents are gathered under a heading: the body, the sacred, power, the ordinary day. The gains are real and I will not pretend otherwise. A work is released from a queue it never asked to join. A bronze set beside a photograph discloses something neither shows alone. The pretense that a museum’s accidental holdings constitute a syllabus is abandoned. To that extent the rehang is a correction.\n\nBut here is what troubles me. A thematic room argues too, and it argues harder. To hang two objects together is to assert a likeness between them, and an assertion made by a wall is one that no visitor can answer. The old room at least had the courtesy of stating its thesis on a placard: French painting, 1780 to 1830. A visitor who thought the boundary arbitrary could say which boundary she meant, and why the year was wrong, and what the label had quietly excluded. What sentence, exactly, would she dispute in a room called Encounters?\n\nThe curator’s reply is that a thematic room has no thesis to dispute — that it merely invites the visitor to make her own connections, and that its virtue lies precisely in its refusal to instruct. I take the intention to be sincere, and I think it is mistaken. An invitation extended in a chosen room, among chosen objects, under a chosen word, in light aimed from a chosen angle, is not the absence of instruction. It is instruction that has removed its signature. The visitor does make connections — among the things somebody put in her way, and rarely among the things left in storage. To call this her freedom is to mistake the disappearance of the author for the disappearance of the argument.\n\nThe point can be put as a distinction. The complaint against the old hang was never that it argued; it was that it argued badly. The reform confused a bad thesis with the having of theses, diagnosed the museum’s disease as authority, and prescribed silence. But silence in a museum is not the absence of authority. It is authority without a return address, which is the more durable kind, because there is no one to write to.\n\nWhat a museum owes its visitors, then, is not neutrality, which is unavailable, but exposure. The wall text I would like to read says: we have placed these three works together because we believe they share something; here is the something; here is the strongest objection to our belief, and the name of the scholar who pressed it. Such texts are rare, and the reason is not the cost of the panel. They cost the curator the authority of the impersonal, which is the most valuable asset the modern museum owns and the one it is least willing to spend. A museum that says what it thinks can be argued with. A museum that only arranges cannot be, and it will go on being believed for exactly that reason.',
    questions: [
      {
        question: 'The passage is primarily concerned with arguing that:',
        options: [
          'the thematic rehang did not remove curatorial argument but made it harder to contest',
          'museums should return to the older arrangement of galleries by century and nation',
          'curatorial neutrality is achievable so long as curators state no explicit claims',
          'the older museum’s account of how art develops was substantially accurate after all',
        ],
        correctAnswer: 0,
        explanation:
          'The author grants the rehang real "gains" yet argues that "a thematic room argues too, and it argues harder," producing "instruction that has removed its signature" and "authority without a return address" — an argument no less present for being harder to identify. A return to the old hang is never proposed; the author calls the reform "overdue." The neutrality option reverses the essay’s conclusion that neutrality "is unavailable." And the author says of the old story that "most of the claim is false."',
        skill: 'main-idea',
        needsReview: false,
      },
      {
        question: 'The author’s question about what a visitor could dispute in a room called Encounters serves chiefly to:',
        options: [
          'reproach curators for choosing imprecise titles for their exhibitions',
          'suggest that thematic displays draw smaller crowds than chronological ones',
          'show that a claim made by arrangement leaves the visitor nothing to contest',
          'recommend that exhibition titles name the comparison the room proposes',
        ],
        correctAnswer: 2,
        explanation:
          'The question follows directly from the contrast with a dated national label, which a visitor "could say which boundary she meant" about; the room title is offered as the case where no such specific sentence exists to dispute. Fixing titles is not the author’s remedy — his proposal is a wall text stating the claim and its strongest objection, not a more descriptive heading. Attendance figures never appear. And the author suggests no alternative title, since a better word would not supply the missing proposition.',
        skill: 'function',
        needsReview: false,
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
        needsReview: false,
      },
      {
        question: 'Which of the following findings would most weaken the author’s objection to thematic displays?',
        options: [
          'Visitors to thematic exhibitions report enjoying them more than chronological displays.',
          'Visitors leaving thematic rooms readily state and criticize the comparison the room proposed.',
          'Curators of thematic exhibitions spend longer selecting objects than curators of chronological ones.',
          'Some thematic exhibitions draw all of their objects from a single century and region.',
        ],
        correctAnswer: 1,
        explanation:
          'The objection is that an argument made by juxtaposition leaves nothing for a visitor to dispute. Evidence that visitors do identify and challenge the proposed comparison would show the claim is legible and contestable after all, dissolving the complaint. Enjoyment bears on the experience rather than on contestability, which is what the author’s case turns on. Selection time speaks to curatorial labor, not to whether the resulting claim is visible. A single-century thematic show is a true detail with no bearing on the argument.',
        skill: 'strengthen-weaken',
        needsReview: false,
      },
      {
        question: 'A museum posts a panel reading: "We have placed these three objects together because we think each treats mourning as a public act; scholars of the middle object disagree, and their reasons are given below." The author would most likely regard this as:',
        options: [
          'an improvement, because it names the claim and points to the case against it',
          'a failure, because it substitutes the curator’s judgment for the visitor’s own',
          'acceptable only if the three objects also belong to a single period and region',
          'unnecessary, because the arrangement of the objects already communicates the claim',
        ],
        correctAnswer: 0,
        explanation:
          'This is nearly the text the author asks for: the claim stated, plus "the strongest objection to our belief, and the name of the scholar who pressed it." The failure option repeats the curator’s reply that the author has already answered, since on his account the arrangement instructs whether or not the curator speaks. Requiring shared period and region would reimpose the chronological scheme he calls false. The unnecessary option concedes the author’s premise that the arrangement makes a claim while missing his point that an unstated claim is the problem.',
        skill: 'application',
        needsReview: false,
      },
      {
        question: 'In context, the phrase "instruction that has removed its signature" most nearly means:',
        options: [
          'teaching that has been simplified for the benefit of a non-specialist audience',
          'an exhibition assembled without any single curator taking responsibility for it',
          'guidance that still shapes the visitor while hiding that anyone is guiding',
          'an argument whose author has formally withdrawn it from circulation',
        ],
        correctAnswer: 2,
        explanation:
          'The sentence concludes that choosing the room, the objects, the word, and the light is not the absence of instruction, and the paragraph ends by warning against mistaking "the disappearance of the author for the disappearance of the argument" — the guidance persists; only its attribution is gone. Simplification is a different matter entirely. The absence of a responsible curator is a literal misreading; someone made every choice listed. And nothing is withdrawn — the argument is still operating on the visitor.',
        skill: 'meaning-in-context',
        needsReview: false,
      },
    ],
  },
  {
    id: 'cars-art-04',
    section: 'cars',
    discipline: 'film criticism',
    title: 'Spending Against an Empty Account',
    needsReview: false,
    passageText:
      'Two films opened in the same week last autumn, and the month of argument that followed sorted my colleagues with a neatness our trade rarely supplies. The first was a war film of great scale and greater ambition; reviewers reached for the word devastating and for once were not inflating, since screening rooms full of professionals came out red-eyed. The second was a small domestic picture, two hours of a marriage conducted mostly in kitchens, closing on a scene in which the husband fails, for the third time and now finally, to ask the one question that would have rescued the evening. The consensus arrived within days: the war film was essential, the kitchen film honorable and slight. A few dissenters called the war film manipulative and were told they had hearts of flint.\n\nI think both verdicts are wrong, and wrong in a way worth examining, because the two errors are a single error seen from opposite sides.\n\nConsider what the war film’s most shattering minutes are built from: a terrified child alone on a station platform; a folk song the whole audience learned before the age of six; a slow pan across undelivered letters home. My tears came on schedule, and I do not disown them. But ask where each of those charges was assembled. A child in peril would wring us in any film whatever, including a bad one. The song was loaded decades before this director found it. Letters from the dead are grief in its generic form. The film did not make those feelings; it located them, fully formed, in its audience, and presented them for collection.\n\nThe kitchen film had no such deposits to call on. Nobody enters the theater caring whether an invented husband asks an invented wife about her sister. If the last scene lands — and in my screening the silence afterward had weight — it lands because of ninety patient minutes of construction: we had twice watched him almost ask, and we knew the cost of the sentence he could not say because the film had priced it before our eyes, scene by scene. The feeling it produces is smaller than the war film’s, and every unit of it was minted on the premises.\n\nThe dissenters, then, had hold of something, though manipulative was the wrong word for it. Every film arranges its audience; arranging attention is the whole of directing. Nor is borrowing a crime — the war film’s borrowings arguably serve remembrance, and some great pictures borrow shamelessly. The error is ours, and it is an error of accounting: we credit the borrowing film with power that was ours before the lights went down, and we debit the building film for lacking a fortune it never claimed to hold.\n\nThere is a homely test, and I commend it: see both films twice. The war film’s great moments thinned on my second viewing, as withdrawals from a finite account will. I knew where the child, the song, and the letters were posted, and my feeling, having been spent once, asked the film for a reason to be paid again — a reason the film did not have. The kitchen film grew; knowing what was coming, I could watch it being earned. A feeling a film has built compounds with acquaintance. A feeling a film has merely collected is gone by the second visit, and what remains visible on screen is the machinery of collection — like a borrowed suit, recognized at a second party.',
    questions: [
      {
        question: 'The main point of the passage is that:',
        options: [
          'both verdicts failed to ask whether a film made the feeling it was credited with',
          'war films should avoid imperiled children, familiar songs, and letters from the dead',
          'small domestic dramas are inherently superior to films of great scale and ambition',
          'audiences’ tears are an unreliable sign that a film possesses any artistic value',
        ],
        correctAnswer: 0,
        explanation:
          'The author calls the twin verdicts "a single error seen from opposite sides" and names it "an error of accounting: we credit the borrowing film with power that was ours before the lights went down, and we debit the building film for lacking a fortune it never claimed to hold." The unasked question is whether a film produced its feeling or merely collected what the audience already held. The prohibition option contradicts his statement that "Nor is borrowing a crime" and that the borrowings "arguably serve remembrance." The superiority-of-domestic-drama option generalizes from one comparison the author never makes into a rule of genre. And the tears option overshoots: he says of his own tears, "I do not disown them" — the question is their source, not their sincerity.',
        skill: 'main-idea',
        needsReview: false,
      },
      {
        question: 'The author’s remark that his tears "came on schedule" functions primarily to:',
        options: [
          'confess that emotion clouded the judgment he brought to the war film',
          'establish that the war film was, after all, the better made of the two',
          'grant that the war film’s effect was real before asking where it came from',
          'mock the colleagues who wept at a film that had left him entirely unmoved',
        ],
        correctAnswer: 2,
        explanation:
          'The concession is immediately paired with the pivot: "I do not disown them. But ask where each of those charges was assembled." Admitting the effect is what licenses the inquiry into its source; without the admission, the accounting argument would look like insensibility. The clouded-judgment reading inverts this — the tears are data, not distortion. The better-construction reading contradicts the paragraph’s conclusion that the film "did not make those feelings." And mockery is impossible, since the author wept too — the phrase "on schedule" ironizes the film’s method, not the audience.',
        skill: 'function',
        needsReview: false,
      },
      {
        question: 'It can be inferred that the author considers the dissenters who called the war film "manipulative" to have been:',
        options: [
          'motivated chiefly by resentment of the acclaim the war film received',
          'closer to the truth than the consensus, though wrong in the word they chose',
          'wrong, because the war film created every feeling its audience experienced',
          'right that films which arrange their audience’s attention deserve condemnation',
        ],
        correctAnswer: 1,
        explanation:
          'The author says directly that "the dissenters... had hold of something, though manipulative was the wrong word for it," and then explains why the word fails: "every film arranges its audience; arranging attention is the whole of directing." Envy appears nowhere. The option defending the war film’s creativity states the reverse of the analysis — the film "located" feelings rather than making them. And the condemnation option endorses precisely the standard the author dismantles, since by that standard every director stands condemned.',
        skill: 'inference',
        needsReview: false,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s account of the difference between the two films?',
        options: [
          'The war film’s director spent a decade researching the period before shooting a frame.',
          'The kitchen film earned only a tiny fraction of the war film’s box-office receipts overall.',
          'Some viewers of the war film reported feeling nothing during its most celebrated sequences.',
          'On a second viewing the war film’s power grows while the kitchen film’s ending thins.',
        ],
        correctAnswer: 3,
        explanation:
          'The author stakes his distinction on a prediction: "a feeling a film has built compounds with acquaintance," while collected feeling "is gone by the second visit." Audiences for whom the pattern runs backward — the borrower compounding, the builder thinning — would falsify the test he commends and, with it, the accounting it was meant to confirm. Research effort says nothing about where feeling was assembled. Box-office disparity is consistent with the passage, which grants the war film the larger effect. And scattered unmoved viewers are compatible with borrowed charges that simply failed to find their deposit in some people.',
        skill: 'strengthen-weaken',
        needsReview: false,
      },
      {
        question: 'A director opens her film with archival footage of a historical catastrophe, and preview audiences weep within minutes. The author would most likely say that the director has:',
        options: [
          'collected feeling the audience had already carried into the theater',
          'committed the kind of offense for which a film deserves condemnation',
          'demonstrated unusual skill at establishing strong feeling within minutes',
          'ensured that the film will keep its power across repeated viewings',
        ],
        correctAnswer: 0,
        explanation:
          'Archival catastrophe is grief already "loaded" in the audience, like the folk song and the letters: the tears arrive before the film has built anything, so on the author’s accounting they were located, "fully formed, in its audience." Whatever the film goes on to construct, that opening charge was collected rather than made. Condemnation contradicts the explicit ruling: "Nor is borrowing a crime." The rapid-establishment option repeats the crediting error the passage anatomizes — nothing was established; a deposit was found. And the repeat-viewing option gets the author’s own prediction backward: collected feeling is precisely what he expects to thin by the second visit.',
        skill: 'application',
        needsReview: false,
      },
      {
        question: 'In context, the statement that every unit of the kitchen film’s feeling "was minted on the premises" most nearly means that:',
        options: [
          'the film was made inexpensively and confined almost entirely to a single set',
          'the film’s restraint held its audience at a deliberate emotional distance',
          'the feeling of its last scene was built by the film, not carried in by viewers',
          'the film counterfeited an emotion it could not honestly produce on its own',
        ],
        correctAnswer: 2,
        explanation:
          'The sentence concludes the paragraph contrasting the kitchen film with the borrower: it had "no such deposits to call on," so the last scene lands "because of ninety patient minutes of construction" rather than on anything the audience brought in. Minting on the premises is making rather than collecting. The production-budget reading takes "premises" literally as real estate. The emotional-distance reading contradicts the screening-room silence that "had weight." And counterfeiting reverses the metaphor entirely — minting here is the legitimate manufacture of feeling, the opposite of passing off borrowed charges as one’s own.',
        skill: 'meaning-in-context',
        needsReview: false,
      },
    ],
  },
  {
    id: 'cars-art-05',
    section: 'cars',
    discipline: 'architecture / the built environment',
    title: 'The Unwilling Audience',
    needsReview: false,
    passageText:
      'There is a tower, clad in brick to match the terraces around it and praised in every review for its tact. It takes the afternoon sun off the only park in the district. The reviews discussed the cladding; nobody discussed the shadow. That ratio of attention follows from the way we talk about buildings, and the way we talk about buildings is borrowed.\n\nThe vocabulary of architectural praise — expression, integrity, vision, daring — comes from the arts of the willing audience, where the worst an overreaching work can do is bore someone who is free to leave. Every art but one is offered. A book may be closed, a concert left, a canvas walked past; the audience of a poem is the set of people who chose to read it. Architecture has no such audience. The people most exposed to a building are those who pass it daily on the way to work, who did not commission it, cannot avoid it, and were never asked. Applied to a structure that will stand over a street for eighty years, the borrowed words describe a very different act. The question is not only whether a building is good, but what it does to people who have no means of declining it.\n\nContextualism is supposed to be the remedy: the building that defers, matching the height and material and rhythm of its neighbors so that it settles in without argument. Often deference is right; nobody wants a city of architects competing for attention. But my tower was contextual, and it is not a humble building. It has made itself hard to argue with while doing something that could not have survived an argument. A building that looks as though it had always been there does not read as a decision. It reads as a fact, and facts are not debated. The conspicuous building at least announces that somebody chose something, and an announced choice can be opposed.\n\nNone of this is a brief for the conspicuous. Boldness is the standing alibi of the profession. A great deal of arrogance has been defended as courage, and a great many streets have been ruined by architects who took public objection as proof of their own originality. If my point were that conspicuous buildings are better than quiet ones, it would be a bad point, and the evidence against it is visible from most windows.\n\nBoth camps are quarreling over style, and style is the wrong subject. The line that matters runs between humility of form and humility of effect, and the two are routinely confused because only one of them is easy to see. A frankly modern hall that gives back a public route through its ground floor may have imposed less on the street than anything built that decade in a sympathetic stone. Style is a poor proxy for restraint, and the reason we keep using it is that style is what a drawing shows and effect is what a drawing hides. A rendering can display a facade while saying nothing about the wind at the corner, the hours the square will spend in shadow, or the alley that will no longer connect two streets. Those are the terms in which the unwilling audience actually experiences the work.\n\nThat we go on discussing facades tells us a good deal about critics and very little about buildings. The reviews of my tower were accurate: the brick is handsome. The park goes dark at three. The art whose audience cannot leave is the one we criticize as though everyone had chosen to be there.',
    questions: [
      {
        question: 'The central argument of the passage is that:',
        options: [
          'contextual buildings ought to be prohibited wherever they overshadow public space',
          'architecture should be judged by the standards of expression and daring critics apply elsewhere',
          'conspicuous buildings serve their cities better, since boldness invites the judgment quiet ones escape',
          'deference in style is not restraint in effect, and architecture’s audience cannot decline it',
        ],
        correctAnswer: 3,
        explanation:
          'The essay isolates the captive audience, then draws its central distinction "between humility of form and humility of effect," illustrated by the matching tower that "has made itself hard to argue with while doing something that could not have survived an argument" — a decision hidden from public dispute by its own tact. No prohibition is proposed. Judging architecture like the other arts is the borrowing the author criticizes. And he explicitly disowns the claim that conspicuous buildings are better: "it would be a bad point."',
        skill: 'main-idea',
        needsReview: false,
      },
      {
        question: 'The passage suggests that the author would regard the phrase "a building in keeping with its neighbors" as:',
        options: [
          'a claim about appearance that says nothing about the building’s effects',
          'close to the highest praise a new urban building can now receive',
          'a meaningless phrase, since no two buildings truly resemble one another',
          'a dependable measure of an architect’s regard for the people nearby',
        ],
        correctAnswer: 0,
        explanation:
          'The brick-clad tower is presented as being in keeping with its neighbors while taking "the afternoon sun off the only park," which is the author’s demonstration that style and effect come apart — the phrase describes appearance and is silent about what the building does to those around it. Treating the phrase as highest praise is the confusion the essay exists to break. Calling it meaningless overshoots — the author accepts that such buildings really do match, only that matching is not restraint. Treating it as a measure of respect for the public reverses the argument.',
        skill: 'inference',
        needsReview: false,
      },
      {
        question: 'The comparison of architecture with books, concerts, and paintings serves primarily to:',
        options: [
          'establish that architecture is the most technically demanding of all the arts',
          'argue that buildings should not be judged in aesthetic terms by critics at all',
          'isolate the feature that makes the borrowed vocabulary misfit: a captive audience',
          'show that architects have historically envied the freedom of painters and composers',
        ],
        correctAnswer: 2,
        explanation:
          'The passage establishes that other arts are "offered" while architecture is not, and draws the consequence: praise borrowed "from the arts of the willing audience" describes "a very different act" when applied to a building. Technical difficulty is never claimed. Abandoning aesthetic evaluation is too absolute; the author asks that criticism add what a building takes, not that it stop judging. Architects’ envy is nowhere in the passage.',
        skill: 'function',
        needsReview: false,
      },
      {
        question: 'Which of the following findings would most strengthen the author’s claim that deferential buildings escape public argument?',
        options: [
          'Deferential buildings are typically more expensive to construct than conspicuous ones of equal size.',
          'Proposals that match the local style draw far fewer objections than equally large ones that do not.',
          'Residents surveyed about new buildings in contrasting styles usually describe them as ugly.',
          'Architects who design contextual buildings often design conspicuous ones elsewhere as well.',
        ],
        correctAnswer: 1,
        explanation:
          'The claim is that a building which "does not read as a decision" attracts no debate, so evidence that objections track style rather than size is exactly what it predicts. Construction cost bears on budgets, not on public contestation. Residents finding contrasting buildings ugly speaks to taste and, if anything, to the opposite phenomenon — attention drawn rather than deflected. Architects working in both modes is a true fact about careers with no bearing on how proposals are received.',
        skill: 'strengthen-weaken',
        needsReview: false,
      },
      {
        question: 'A developer proposes a large structure clad in brick to match the surrounding row houses; it will place the neighborhood’s only park in shadow for most of the afternoon. The author would most likely say that:',
        options: [
          'the brick cladding answers the objections the neighbors are likely to raise',
          'the structure’s appearance makes it a model of humility in a dense district',
          'the proposal should be approved, since it respects the character of the area',
          'the matching surface is not restraint, since the imposition lies in the shadow',
        ],
        correctAnswer: 3,
        explanation:
          'This is the author’s own illustration in all but name: such a tower "is not a humble building" but one that "has made itself hard to argue with while doing something that could not have survived an argument." The style conceals the effect, which is where the imposition actually falls. Treating the cladding as an answer to objections mistakes form for effect. Calling it a model of humility states the confusion the passage attacks. Approving it for respecting local character applies the style proxy the author calls poor.',
        skill: 'application',
        needsReview: false,
      },
      {
        question: 'The author’s attitude toward architects who defend their work by invoking boldness is best described as:',
        options: [
          'wary, granting that the term has excused a good deal of genuine arrogance',
          'approving, since bold buildings invite the public judgment he favors',
          'neutral, since the author takes no position on questions of architectural style',
          'contemptuous of the architectural profession taken as a whole',
        ],
        correctAnswer: 0,
        explanation:
          'The author writes that "boldness is the standing alibi of the profession" and that "a great deal of arrogance has been defended as courage" — a pointed concession made against his own apparent interest. Approval misreads him: he grants only that a conspicuous building announces a choice, not that its defenders are right. Neutrality ignores the strong evaluative language. Contempt for the whole profession overshoots a criticism aimed at one habit of self-justification.',
        skill: 'tone',
        needsReview: false,
      },
    ],
  },
  {
    id: 'cars-art-06',
    section: 'cars',
    discipline: 'photography / documentary representation',
    title: 'The Permanent Hour',
    needsReview: false,
    passageText:
      'A man stands in a gallery before a photograph of a ruined wall, and what holds him, plainly, is the light. The picture records a shelling; what he admires is a composition. It is the scene the familiar indictment of documentary photography describes: suffering framed, lit, and arranged, and the loveliness an invitation to enjoy it. Beauty can invite contemplation where a situation calls for something other than contemplation, and a viewer who lingers admiringly over the light on a ruined wall has been diverted from what the wall means. There is a version of the complaint I do accept, and this man is it — a real cost, and I do not want to argue it away.\n\nBut observe where the cost falls. It is a cost paid in the viewer’s posture, not in the subject’s treatment, and the very photograph which lets one person luxuriate sends another to do something about it. No rule about photographs can be built on a result so unstable. The charge has the shape of a moral insight; as an account of what photography does to the people inside the pictures, I think it identifies the wrong crime.\n\nBegin with the practical fact the charge ignores. Attention is scarce and unfairly distributed, and a photograph that is merely accurate is a photograph nobody looks at twice. Composition is not decoration laid over a subject; it is the means by which a subject is made to hold a stranger’s eye for longer than a second. If the aim is that a subject’s condition be known to those who would rather not know it, beauty is not the enemy of that aim. It is frequently the only instrument available.\n\nThe wrong actually done to the subject is not aesthetic but temporal. A photograph fixes a person at one hour of her life and hands that hour to the world in perpetuity. She will recover, or fail to, and grow older, and acquire opinions about the day the picture was taken; and the image will go on presenting her as she was when the worst thing happened, to viewers who will never learn that the day ended. She has been made permanently into an instance of a condition. That is a genuine harm, and it is committed by the crude photograph and the exquisite one alike.\n\nWhich is the test between the two accounts. If beauty were the offense, the plain snapshot would be innocent. But the plain snapshot fixes its subject in the same eternal afternoon, and is often circulated with less care about who she was. The elegance of an image has no bearing on the harm. It bears only on whether anyone looks. We have been prosecuting a charge that cannot separate the guilty from the innocent, which is usually a sign that the charge has been misdescribed.\n\nThe remedy that follows is not a plainer style. It is duration. A caption can return a subject her name, but it cannot return her a tomorrow; only a second photograph can do that. Photographers who go back — who publish the same person five years on, whether the intervening years were kind or not — undo the specific injury the single image inflicts, because they restore the one thing the frame removed, which is the possibility that her life continued after the shutter closed. It is an expensive, unglamorous practice. It is also the only answer anyone has offered to a question the long quarrel over beauty has managed never to ask. The man in the gallery will linger either way; the question was never about him.',
    questions: [
      {
        question: 'The central claim of the passage is that:',
        options: [
          'documentary photographers should stop making beautiful images of suffering',
          'photographs of suffering raise no ethical difficulty serious enough to constrain anyone',
          'the wrong in documentary photography is fixing a person permanently in a single terrible hour',
          'captions are sufficient to restore the dignity that photographs of suffering take from subjects',
        ],
        correctAnswer: 2,
        explanation:
          'The author states that "the wrong actually done to the subject is not aesthetic but temporal" and that this harm "is committed by the crude photograph and the exquisite one alike," since the image goes on "presenting her as she was when the worst thing happened." Avoiding beauty is the position he rejects, calling beauty "frequently the only instrument available." Denying all ethical difficulty is too absolute, since he names a genuine harm. And he explicitly says a caption "cannot return her a tomorrow."',
        skill: 'main-idea',
        needsReview: false,
      },
      {
        question: 'The author’s attitude toward the charge that documentary photography aestheticizes suffering is best described as:',
        options: [
          'wholehearted endorsement of the charge in the form it is usually given',
          'critical of the charge as stated, though granting it a real cost',
          'dismissive of ethical scrutiny of photographs of people who are suffering',
          'undecided, since the author declines to settle on a position of his own',
        ],
        correctAnswer: 1,
        explanation:
          'The author says the charge "identifies the wrong crime," yet concedes "there is a version of the complaint I do accept" — the diverted viewer — and adds that he does "not want to argue it away." Wholehearted endorsement contradicts his central objection. Dismissing ethical scrutiny overshoots badly, since he proposes a harm and a remedy. And he is far from undecided; he names the wrong and prescribes a practice.',
        skill: 'tone',
        needsReview: false,
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
        needsReview: false,
      },
      {
        question: 'Which of the following findings would most weaken the author’s claim that beauty is not the source of the ethical problem?',
        options: [
          'Beautiful photographs of suffering are reproduced far more often than plain ones.',
          'Some photographers arrange scenes of suffering deliberately for visual effect.',
          'Viewers recall beautiful images long after they have forgotten plain ones.',
          'Subjects report feeling most misrepresented by the most beautifully composed images.',
        ],
        correctAnswer: 3,
        explanation:
          'The author locates the harm in the subject’s treatment and insists elegance "has no bearing on the harm." Testimony from subjects that harm tracks beauty would attack that claim at its source, using the very party whose treatment is at issue. Wider reproduction of beautiful images supports the author’s point about attention. Deliberate arrangement concerns photographers’ intentions rather than what the subject suffers. Superior recall of beautiful images likewise strengthens the case that beauty is what secures notice.',
        skill: 'strengthen-weaken',
        needsReview: false,
      },
      {
        question: 'A magazine republishes a famous photograph of a starving child beside a new portrait of the same person, now an adult, with an account of the intervening years. Based on the passage, the author would most likely regard this as:',
        options: [
          'a fresh violation, since it exposes the subject to public view a second time',
          'irrelevant to his argument, which concerns composition rather than publication',
          'the appropriate remedy, since it restores the future the single image withheld',
          'acceptable only if the second portrait is made in the same style as the first',
        ],
        correctAnswer: 2,
        explanation:
          'The final paragraph asks for exactly this: photographers "who publish the same person five years on" restore "the possibility that her life continued after the shutter closed." Calling it a violation reverses the remedy he prescribes. Dismissing it as irrelevant misstates his subject, which is not composition but what the single frame does to a life. Requiring a matching style reintroduces the aesthetic criterion the passage argues has no bearing on the harm.',
        skill: 'application',
        needsReview: false,
      },
      {
        question: 'In context, the statement that a caption "can return a subject her name, but it cannot return her a tomorrow" most nearly means that:',
        options: [
          'photographs of suffering are better published without captions at all',
          'identifying a subject does not undo the image’s fixing of her in one moment',
          'captioning is the only ethical obligation a photographer has toward a subject',
          'naming a subject does her more harm than leaving her anonymous would',
        ],
        correctAnswer: 1,
        explanation:
          'The sentence introduces duration as the remedy and concedes what captions can and cannot do: a name restores identity, but the frame’s permanence — the loss of a future — requires "a second photograph." Removing captions is not proposed; the sentence credits them with something real. Calling captioning the sole obligation reverses the sentence, which is about the obligation captions fail to meet. And no claim is made that naming harms the subject.',
        skill: 'meaning-in-context',
        needsReview: false,
      },
    ],
  },
]
