import type { MCATPassage } from '../types'

/**
 * MCAT CARS — Philosophy pool.
 *
 * Six original, argument-driven passages (500-600 words each), one per
 * sub-discipline: philosophy of mind, epistemology, philosophy of science,
 * metaphysics/personal identity, existentialism/phenomenology, and moral
 * philosophy (meta-ethics).
 *
 * Each passage is written in a single author's voice, advances a thesis, and
 * turns at least once (a concession, an objection answered, or a distinction
 * that reframes the debate). No outside knowledge is required: thinkers and
 * thought experiments are explained inside the text.
 *
 * AI-authored; needsReview is true pending SME review.
 */
export const CARS_PHILOSOPHY_PASSAGES: MCATPassage[] = [
  {
    id: 'cars-phil-01',
    section: 'cars',
    discipline: 'philosophy of mind',
    title: 'The Horizon and the Coastline',
    needsReview: true,
    passageText:
      'Imagine a neuroscience so complete that nothing about the brain remains hidden: every synapse mapped, every cascade timed, every circuit assigned its function with the finality of settled arithmetic. Now ask why any of that machinery should be accompanied by the sting of a burn or the particular blue of a summer sky. The question does not feel answered by the map, and it does not feel like the sort of question a better map could answer. Philosophers call this residue the explanatory gap, and a great deal of recent work treats it as a discovery, as though we had at last peered into nature and located a seam where the physical gives out.\n\nWe have located no seam. We have located a fact about ourselves and mistaken it for a fact about the world. Consider what an explanation does. To explain a phenomenon is to exhibit it as the upshot of a structure: given these parts, arranged so, the whole had to behave thus. That is how we came to understand why water is transparent and why a cell divides, and the format is irreducibly third-personal. It describes a system from outside, in terms available to any inspector.\n\nExperience is not one more item waiting to be slotted into that format. It is the vantage from which the slotting is done. So when we demand that a structural story tell us why the structure feels like anything, we are asking a description to hand over something no description hands over: acquaintance. The demand cannot be met, and — the point is easy to miss — it could not be met in any world whatever. A dualist universe would leave the gap precisely where it is, since a story about immaterial substance would still be a story, still third-personal, still mute about what it is like to be the thing described.\n\nHere I must concede more than the deflationists usually do. It is often said that the gap is a temporary embarrassment, an artifact of present ignorance that a mature science will close as chemistry closed the mystery of heat. I think that is false, and its falsity is worth admitting plainly. The gap is permanent. No future theory will make the felt quality of scarlet follow visibly from a wiring diagram, and those who promise otherwise are writing cheques on an account that does not exist. The intuition of an unbridged distance is not a confusion. It is correct.\n\nBut notice what follows and what does not. A gap that would persist however the world was arranged is a gap that tells us nothing about how the world is arranged. Evidence discriminates: a datum supports a hypothesis only if the datum would have been missing had the hypothesis been false. The explanatory gap fails that test completely. It is equally at home with physicalism, with dualism, with any metaphysics one likes, and a datum at home everywhere supports nothing anywhere.\n\nThe remaining evidence, meanwhile, points one way with tedious consistency. Experience tracks tissue. It is edited by anaesthetic, deranged by lesion, extinguished by injury, recoloured by a molecule crossing a membrane. Against that record the dualist sets a feeling of unbridgeability which, as we have seen, he would have had regardless. He has taken the one item in his ledger that cannot count and counted it twice. The gap is a horizon, not a coastline. It recedes because of where we stand, not because the sea ends there, and no amount of sailing toward it will bring anyone to an edge of the world.',
    questions: [
      {
        question: 'Which of the following best expresses the central thesis of the passage?',
        options: [
          'A sufficiently mature neuroscience will eventually explain why brain processes are accompanied by experience.',
          'The persistence of the explanatory gap is powerful evidence that consciousness is not a physical phenomenon.',
          'The explanatory gap is genuine and permanent but metaphysically uninformative, since it would arise on any account of the world.',
          'Because explanation is third-personal, science cannot give an accurate description of the brain.',
        ],
        correctAnswer: 2,
        explanation:
          'The author grants that the gap "is permanent" and that "the intuition of an unbridged distance is not a confusion," then argues that "a gap that would persist however the world was arranged is a gap that tells us nothing about how the world is arranged." That is exactly the combination of concession and deflation captured by the key. The option promising that a mature neuroscience will close the gap is the deflationist view the author explicitly rejects as "writing cheques on an account that does not exist." The option treating the gap as evidence for nonphysicalism is the dualist conclusion the whole passage is written against. The option claiming science cannot describe the brain accurately overshoots wildly: the author stipulates a neuroscience in which "nothing about the brain remains hidden."',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author mentions the transparency of water and the division of a cell primarily in order to:',
        options: [
          'characterize the structural, third-personal format that explanation takes',
          'suggest that biological phenomena resist explanation more stubbornly than physical ones',
          'offer examples of mysteries that science once could not solve and later did',
          'propose that consciousness will be understood by analogy with simpler systems',
        ],
        correctAnswer: 0,
        explanation:
          'The examples arrive immediately after "Consider what an explanation does" and are offered as instances of exhibiting a phenomenon "as the upshot of a structure," a format the author calls "irreducibly third-personal." Their job is to define the format, which is the pivot of the whole argument. Nothing in the sentence ranks biology against physics. The "once unsolved, later solved" reading belongs to the heat analogy, which the author attributes to the deflationists and then denies. And the author cannot be recommending an analogy from simpler systems, since his point is that no structural story of any kind delivers acquaintance.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'The author’s claim that a dualist universe "would leave the gap precisely where it is" is offered in support of which conclusion?',
        options: [
          'Dualism is an internally incoherent doctrine.',
          'The gap exists only because current physical theory is incomplete.',
          'Immaterial substances of the kind dualists describe cannot exist.',
          'The presence of the gap cannot settle a dispute between competing metaphysical views.',
        ],
        correctAnswer: 3,
        explanation:
          'The observation about the dualist universe sets up the evidential point made two paragraphs later: a datum "equally at home with physicalism, with dualism, with any metaphysics one likes" fails the requirement that evidence discriminate. Hence the gap cannot adjudicate between views. Charging dualism with incoherence is far stronger than anything the author says; his complaint is about double-counting evidence, not contradiction. Attributing the gap to incomplete physics reverses the author, who insists no future theory will close it. Declaring immaterial substances impossible is a metaphysical verdict the passage never issues.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s argument?',
        options: [
          'A number of prominent philosophers continue to expect that neuroscience will one day close the explanatory gap.',
          'Patients given a certain neural intervention report that structural descriptions of their brain states now convey to them what those states feel like.',
          'Anaesthetic agents reliably abolish conscious experience without abolishing all neural activity.',
          'The scientific explanation of heat required centuries of failed attempts before it succeeded.',
        ],
        correctAnswer: 1,
        explanation:
          'The load-bearing premise is that a description can never "hand over" acquaintance, which is why the demand "could not be met in any world whatever." Cases in which a structural description does convey what a state feels like would break that premise directly, and with it the claim that the gap is world-independent. The observation about anaesthetics supports the author, whose closing paragraph cites exactly such dependence of experience on tissue. What some philosophers expect is a report of opinion, not a fact about the gap. The long history of the theory of heat is the deflationist analogy the author addresses and rejects; noting that the work was slow does not touch his reason for rejecting it.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A researcher argues that because no purely functional account of a robot could establish whether the robot feels anything, feeling must be something over and above function. The author would most likely respond that the researcher:',
        options: [
          'has noticed a failure that would occur whether or not feeling were a function, and so has established nothing',
          'is right about robots but wrong to extend the conclusion to biological organisms',
          'is correct, since acquaintance is never delivered by any description',
          'should wait for more sophisticated functional accounts, which will settle the matter',
        ],
        correctAnswer: 0,
        explanation:
          'This is the passage’s central maneuver transplanted to a new case. The author accepts that no description delivers acquaintance but insists that a failure occurring "in any world whatever" cannot discriminate between hypotheses, since evidence must be such that it "would have been missing had the hypothesis been false." The choice endorsing the researcher takes the author’s premise and then draws precisely the inference he forbids — half right and half wrong. Splitting robots from organisms invents a distinction the passage never draws. And counselling patience reverses the author’s explicit concession that the gap is permanent.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In context, the charge that the dualist "has taken the one item in his ledger that cannot count and counted it twice" most nearly means that the dualist:',
        options: [
          'has made an arithmetical mistake in tallying the considerations on each side',
          'has conceded too much to the physicalist about the dependence of mind on brain',
          'treats a consideration that could support no view at all as though it were positive support for his own',
          'has advanced two separate arguments where a single argument would have sufficed',
        ],
        correctAnswer: 2,
        explanation:
          'The sentence follows the demonstration that the gap is compatible with every metaphysics and therefore "supports nothing anywhere" — an item that "cannot count." "Counted it twice" is the author’s barb for then entering that null item on the dualist side of the ledger. The literal arithmetic reading drains the metaphor of its argumentative point. The suggestion that the dualist concedes too much about brain dependence reverses the paragraph, in which the dualist is set against that record. And the passage nowhere accuses the dualist of redundant argumentation; the complaint is about the quality of the one consideration he has.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-phil-02',
    section: 'cars',
    discipline: 'epistemology',
    title: 'The Price of Doubt',
    needsReview: true,
    passageText:
      'The sceptic makes his case with a courtesy that disarms. He does not deny that you have hands, or that the sun rose this morning. He asks only a small thing: that before you call your belief knowledge, you rule out the situations in which it would be false — the vivid dream, the tampered brain, the deceiver of exquisite thoroughness. You cannot rule them out. Nobody can. Whatever evidence you produce is evidence the deceived man would produce with equal confidence, and so, with every appearance of regret, the sceptic withdraws your title. Not your belief; only your right to the word.\n\nTwo replies are usually offered, and both are worse than the ailment. The first insists that the deceiver can be ruled out after all — that some belief is self-certifying and the rest may be built upon it. Several centuries have not produced that foundation, and I see no reason to expect the next to differ. The second reply concedes the field and calls the surrender wisdom, announcing that since certainty is unavailable, knowledge is a pleasant fiction and belief a matter of temperament. This is capitulation dressed as sophistication, and it leaves the sceptic in possession of the only thing he actually wanted: his standard.\n\nThe neglected reply is to ask where he got that standard. He presents it as though it were the meaning of the word, a definition any careful speaker would accept. But no ordinary use of "know" carries it. We say the mechanic knows what is wrong with the engine and the child knows her way home, and in neither case do we require the immunity to elaborate deception the sceptic demands. The requirement is not extracted from our practice. It is imposed on it, and imposed without argument.\n\nThe obvious retort is that I have lowered the bar because I could not clear it. That retort would land if the bar had been set by argument; it was assumed, and an assumption may be refused without shame. There is a further point, which I think decisive. A standard that nothing could conceivably meet does not discriminate between good inquiry and bad. It condemns the meticulous and the slovenly in the same breath, awards the same verdict to the astronomer and the astrologer, and thereby forfeits the only function a standard has. An instrument that returns the identical reading for every sample is not an exacting instrument. It is a broken one.\n\nWhat takes its place is a distinction the sceptic works hard to blur: between a possibility of error and a reason to suspect one. That my lottery ticket may lose is not a reason to believe it has lost. Doubt is not free. Like belief, it has costs, and it must be paid for in the same currency — considerations, mechanisms, track records. The deceiver has none of these. He is a possibility with no evidence behind him, no known mechanism, and no history of having caught anybody out.\n\nNone of which makes scepticism idle. In its disciplined form it is the engine of every honest inquiry: the demand that a particular belief be rechecked because we know how beliefs of that kind go wrong. The clinician who distrusts a diagnosis because that diagnosis is often mistaken is doing something valuable. The philosopher who distrusts everything because anything might be mistaken is doing something else, and the two should not be permitted to trade on each other’s reputation. Universal doubt is not the strictest form of that discipline. It is the abandonment of it — a suspicion that costs nothing, and is therefore worth nothing.',
    questions: [
      {
        question: 'The central argument of the passage is that:',
        options: [
          'since certainty about the external world is unattainable, claims to knowledge should be given up',
          'the sceptic’s standard is imposed rather than derived, and doubt requires grounds just as belief does',
          'knowledge rests on a foundation of self-certifying beliefs that philosophers have so far failed to identify',
          'scepticism earns its keep only when it targets particular beliefs with known modes of failure',
        ],
        correctAnswer: 1,
        explanation:
          'Two threads run through the passage and the key ties them: the standard "is not extracted from our practice. It is imposed on it, and imposed without argument," and "Doubt is not free... it must be paid for in the same currency" as belief. Abandoning knowledge claims is the second bad reply, "capitulation dressed as sophistication." Self-certifying foundations are the first bad reply, one the author says centuries of effort have failed to deliver. The remark about disciplined scepticism is a genuine claim of the final paragraph, but it is a coda to the argument rather than the argument, so it is accurate about the passage without answering the question asked.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward the sceptic is best described as:',
        options: [
          'admiring of a position he regards as ultimately unanswerable',
          'indifferent toward a puzzle he considers unworthy of serious attention',
          'indignant at what he takes to be a deliberately dishonest maneuver',
          'respectful of the challenge but unconvinced by the standard it assumes',
        ],
        correctAnswer: 3,
        explanation:
          'The author opens by crediting the sceptic with "a courtesy that disarms," takes six paragraphs to answer him, and salvages a disciplined scepticism at the end — yet the entire middle of the passage argues that the standard was "assumed" and "may be refused without shame." That combination is respect without agreement. Calling the position unanswerable reverses the author, who answers it. Indifference is contradicted by the sustained engagement. Indignation at dishonesty overshoots: the author says the sceptic "presents" his standard as a definition, an error of argument rather than a lie, and the tone throughout is dry rather than heated.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'In context, the statement that "an instrument that returns the identical reading for every sample is not an exacting instrument. It is a broken one" most nearly means that:',
        options: [
          'a criterion that disqualifies every belief cannot separate careful inquiry from careless inquiry',
          'philosophical claims are measured less reliably than claims in the empirical sciences',
          'the sceptic’s standard ought to be replaced by a more precisely formulated version of itself',
          'beliefs should be assessed one at a time rather than in large groups',
        ],
        correctAnswer: 0,
        explanation:
          'The image caps the sentence immediately before it: a standard nothing could meet "condemns the meticulous and the slovenly in the same breath" and "awards the same verdict to the astronomer and the astrologer." A gauge that reads the same for everything discriminates nothing, which is precisely the failure being described. The comparison of philosophy to empirical science is not at issue in the sentence. Calling for a more precise version of the same standard misses the author’s point, which is that the demand should be dropped, not refined. Assessing beliefs individually resembles the disciplined scepticism of the last paragraph but is not what the metaphor conveys here.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most STRENGTHEN the author’s claim that the sceptic’s standard is imposed rather than discovered?',
        options: [
          'A majority of contemporary philosophers reject global scepticism.',
          'At least some beliefs turn out on examination to be genuinely immune to doubt.',
          'Studies of ordinary usage find that speakers readily credit people with knowledge even when far-fetched alternatives have not been excluded.',
          'Sceptical arguments have been formulated independently in several unrelated philosophical traditions.',
        ],
        correctAnswer: 2,
        explanation:
          'The claim under test is a claim about our practice: that "no ordinary use of ‘know’ carries" the sceptic’s requirement, which is why the author offers the mechanic, the witness, and the child. Systematic evidence that ordinary speakers attribute knowledge without excluding far-fetched alternatives is direct confirmation that the requirement is an addition rather than a finding. What most philosophers believe is a headcount, not evidence about the standard. Beliefs immune to doubt would support the foundationalist reply the author dismisses. The recurrence of sceptical arguments across traditions shows the argument is attractive, which if anything cuts the other way.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A juror declines to convict on overwhelming evidence, reasoning that an elaborate conspiracy could have fabricated every item of it. The author would most likely say that the juror:',
        options: [
          'is exercising precisely the disciplined scepticism the passage recommends',
          'is correct, because the possibility of fabrication genuinely cannot be excluded',
          'has identified a real possibility but should convict only once certainty is achieved',
          'has mistaken a bare possibility of error for a reason to suspect error',
        ],
        correctAnswer: 3,
        explanation:
          'The juror’s conspiracy is the deceiver in courtroom dress: "a possibility with no evidence behind him, no known mechanism, and no history of having caught anybody out." The author’s distinction between "a possibility of error and a reason to suspect one" applies without modification. Disciplined scepticism, by contrast, is aimed at beliefs "because we know how beliefs of that kind go wrong," which is not this juror’s reasoning. Endorsing the juror adopts the sceptical standard the passage refuses. Making conviction wait on certainty concedes the same standard while pretending to qualify it.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The discussion of the clinician suggests that, for the author, the mark of a legitimate doubt is that:',
        options: [
          'the doubt can be stated without self-contradiction',
          'there is a known way in which beliefs of that kind go wrong',
          'the belief in question bears on a matter of practical consequence',
          'other careful inquirers have arrived at the same doubt independently',
        ],
        correctAnswer: 1,
        explanation:
          'The clinician earns the author’s approval because she "distrusts a diagnosis because that diagnosis is often mistaken" — a known failure mode, which is the currency the author says doubt must be paid in. Mere consistency cannot be the criterion, since the deceiver hypothesis is perfectly consistent and the author rejects it anyway. Practical consequence is not the standard invoked; the philosopher’s universal doubt would qualify on that score as easily. Agreement among other inquirers is never offered as a test, and the author elsewhere treats headcounts as beside the point.',
        skill: 'inference',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-phil-03',
    section: 'cars',
    discipline: 'philosophy of science',
    title: 'The Anomaly That Pays',
    needsReview: true,
    passageText:
      'The textbook account of scientific method is short and stirring: a theory issues a prediction, the world declines to cooperate, and the theory is discarded. Anyone who has spent an afternoon with the actual history of science knows that almost nothing happens this way. Theories are born refuted and live for decades among anomalies they cannot digest. If failure were fatal, no theory would ever have reached maturity, and the story we tell schoolchildren would have strangled physics in its cradle.\n\nTwo episodes make the difficulty vivid. In the nineteenth century, the orbit of Uranus refused to match Newtonian prediction. Astronomers did not abandon Newton; they proposed an unseen planet whose pull would account for the discrepancy, calculated where it must be, pointed a telescope there, and found Neptune. The rescue is remembered as a triumph. Some years later the orbit of Mercury proved similarly disobedient, and the same maneuver was tried: an unseen planet, christened Vulcan, inside Mercury’s orbit. Telescopes were pointed. Vulcan was not there. The rescue is remembered as an embarrassment.\n\nWhat should trouble us is that, at the moment of proposal, the two maneuvers were logically identical. Both were rescues invented after the trouble, both saved a cherished theory by adding an entity nobody had seen. No rule of logic separates them. At this point a certain school arrives with the news that theory choice must therefore be a matter of persuasion, authority, and fashion — that good science is whatever is settled by whoever is in the room. The inference is as hasty as the doctrine it replaces, and considerably more damaging.\n\nFor there is a difference between the two rescues, and it is not a difference of taste. The Neptune hypothesis, though invented to absorb an anomaly, did not stop there: it committed its authors to a further claim, checkable and risky, about a particular patch of sky on a particular night. It paid its own way, generating a prediction that could have sunk it and did not. The Vulcan hypothesis made the same promise and failed to keep it, and its defenders responded not by conceding but by shrinking the hypothesis — making Vulcan smaller, dimmer, harder to see, each revision purchased solely to explain why the last check had failed. The test, then, is not whether a rescue was improvised. All rescues are improvised. The test is whether the rescue entails anything beyond the trouble it was invented to handle.\n\nThe obvious objection is that this verdict is always delivered too late. At the moment of invention, Neptune and Vulcan look the same; only afterward does one prove productive and the other barren. I accept the objection entirely, and it costs me nothing. It means no scientist can be convicted of irrationality for backing a program that later collapsed. The astronomers who searched for Vulcan were doing exactly what their colleagues had done for Neptune, and they were not fools for doing it.\n\nWhat the objection overlooks is that rationality can be a property of a policy pursued over time rather than of any single decision. A lender is not imprudent for making a loan that defaults; he is imprudent if he goes on lending to a borrower who has never once repaid. Science needs no decision procedure to be rational. It needs a memory — a record of which programs have been generating new confirmed consequences and which have been paying out nothing but excuses. Such a record is public, contestable, and often disputed at the margins, which is why scientists argue. That there is no algorithm does not mean there is no accounting.',
    questions: [
      {
        question: 'Which of the following best states the author’s main claim?',
        options: [
          'Theory choice is rational without being algorithmic: programs are judged over time by whether their repairs yield new checkable consequences.',
          'Because falsification fails as a description of scientific practice, theory choice is governed by persuasion and interest.',
          'A theory should be given up as soon as one of its predictions is disconfirmed.',
          'Postulating unobserved entities is an illegitimate way to rescue a theory in trouble.',
        ],
        correctAnswer: 0,
        explanation:
          'The passage rejects the textbook falsification story, rejects the conclusion that science is therefore a matter of fashion, and lands on a third position: "The test is whether the rescue entails anything beyond the trouble it was invented to handle," applied through "a record" rather than a rule — "no algorithm... no algorithm does not mean there is no accounting." The persuasion-and-interest view belongs to the school the author calls hasty and damaging. Discarding a theory on one failed prediction is the textbook story dismantled in the first paragraph. Banning unobserved entities would condemn Neptune, which the author treats as the model of a good rescue.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The Neptune and Vulcan episodes are used by the author chiefly to establish that:',
        options: [
          'unobserved entities should never be postulated in order to save a theory',
          'the orbit of Mercury refuted Newtonian mechanics and should have brought the theory to an end',
          'the logical form of a rescue does not by itself determine whether the rescue is respectable',
          'the astronomers who searched for Neptune were more rigorous than those who searched for Vulcan',
        ],
        correctAnswer: 2,
        explanation:
          'The author writes that "at the moment of proposal, the two maneuvers were logically identical" and that "no rule of logic separates them," which is precisely why an additional, non-logical criterion is needed. A blanket ban on unobserved entities would rule out Neptune along with Vulcan. The Mercury option pairs a true detail with a conclusion the author denies, since he holds that anomalies do not by themselves end theories. And the author explicitly refuses to rank the two groups of astronomers: those who searched for Vulcan "were doing exactly what their colleagues had done for Neptune, and they were not fools for doing it."',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'The comparison to a lender who continues extending credit serves primarily to:',
        options: [
          'argue that scientific research programs should be evaluated by their economic returns',
          'illustrate that rationality can attach to a policy sustained over time rather than to any single decision',
          'imply that scientists who persist with failing programs are acting in bad faith',
          'concede that scientific judgment is finally a matter of individual risk tolerance',
        ],
        correctAnswer: 1,
        explanation:
          'The analogy is introduced to make one point: "rationality can be a property of a policy pursued over time rather than of any single decision," which is how the author absorbs the objection that his verdict comes too late. Reading the lender literally, as a claim about economic returns, converts an analogy into a thesis the passage never advances. Charging persistent scientists with bad faith reverses the concession granted a paragraph earlier. Risk tolerance turns a claim about public record-keeping into a claim about personal disposition, which would hand the passage back to the school the author is arguing against.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following findings, if established, would most WEAKEN the author’s position?',
        options: [
          'Several enduringly successful theories were defended for decades despite anomalies no one could explain.',
          'Scientists frequently disagree about which of two research programs has become degenerate.',
          'The Vulcan hypothesis was advanced by astronomers of considerable reputation.',
          'A survey of research programs finds that those later judged successful produced no more novel confirmed predictions than those eventually abandoned.',
        ],
        correctAnswer: 3,
        explanation:
          'The author’s criterion is that good programs are the ones whose repairs "pay their own way" by generating new consequences that survive checking. If successful and abandoned programs turn out to be indistinguishable on exactly that measure, the criterion tracks nothing and the account collapses. Long survival amid anomalies is what the author already asserts in his first paragraph. Disagreement at the margins is explicitly accommodated: "often disputed at the margins, which is why scientists argue." The standing of Vulcan’s proponents is true but idle, since the author’s test concerns the content of a rescue, not the reputation of its author.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A dietary hypothesis fails a clinical trial, and its defenders respond that the dose was too low, specifying a higher dose that a further trial can test. A rival hypothesis fails, and its defenders respond that the effect is real but too subtle for any trial to detect. On the author’s account, the correct assessment is that:',
        options: [
          'both responses are improvised rescues, so both hypotheses should be set aside',
          'the first response is illegitimate because it was formulated only after the trial failed',
          'the first response is the respectable one because it commits its defenders to a new checkable consequence',
          'neither response can be evaluated until many years of further research have accumulated',
        ],
        correctAnswer: 2,
        explanation:
          'This is Neptune and Vulcan in a clinic. The author’s test is whether a rescue "entails anything beyond the trouble it was invented to handle"; a specified higher dose does, while an effect declared undetectable by any trial is the shrinking maneuver that made Vulcan disreputable. Condemning both improvisations ignores the author’s insistence that "all rescues are improvised." Faulting the first for coming after the failure applies the very criterion the author rejects. Deferring all judgment for years over-reads his concession, which is that verdicts are retrospective, not that no distinction can be drawn.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In context, the closing statement that "there is no algorithm does not mean there is no accounting" most nearly means that:',
        options: [
          'the absence of a mechanical rule for theory choice is compatible with holding theories answerable to a public record',
          'scientific decisions ought to be documented in more systematic detail than they currently are',
          'science requires a formal decision procedure that has not yet been discovered',
          'the history of science is best reconstructed in terms of the funding available to researchers',
        ],
        correctAnswer: 0,
        explanation:
          'The sentence closes a paragraph asserting that science "needs no decision procedure" but does need "a memory — a record... public, contestable." "Accounting" is a ledger of what programs have delivered, not a rule for what to believe today. Reading it as advice about documentation practices reduces the argument to a procedural suggestion. Treating it as a call for an undiscovered algorithm reverses the sentence’s first clause. And the funding reading imports the sociological explanation the author has already dismissed as hasty.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-phil-04',
    section: 'cars',
    discipline: 'metaphysics and personal identity',
    title: 'The Ship We Are',
    needsReview: true,
    passageText:
      'Take a wooden ship and replace one plank a year. After a century no original timber remains, and the vessel in the harbour still carries the old name, sails under the old registry, and is remembered as the ship that rounded the cape. Now suppose somebody has been collecting the discarded planks and has reassembled them, in their original arrangement, in a yard across the water. Which one is the ship? Every physical fact is on the table. Nothing has been concealed. And still the question sits there, declining to be settled by any further inspection.\n\nThe tradition treats this as a difficulty to be overcome, as though the correct criterion awaited formulation and our failure to produce it marked insufficient ingenuity. I want to suggest that the failure is the finding. There is no further fact. Once we know the history of the planks and the habits of the harbour, we know everything there is to know, and the residual question — but which is really the ship — is a request for information that does not exist.\n\nWith persons the same structure appears, and the stakes rise. Imagine that the two halves of a brain are separated and each is given a working body, so that two people wake, each with the memories, the habits, the loves, the debts. Ask which is the original and no discovery could answer you. You may stipulate an answer; you may consult a court, since estates must be distributed and promises assigned. But nothing in the world will tell you.\n\nHere the reader rebels, and the rebellion deserves a hearing. Ships are one thing, a person is another. Whatever we choose to say about timber, there is surely a fact about whether I wake up tomorrow or the lights simply go out, and no amount of philosophical throat-clearing can make that question optional. The intuition is not foolish, and I do not propose to bully it. I propose to explain it. In ordinary life the strands never come apart: this body persists, these memories continue, these projects go forward, all of it travelling together, so that "will I survive" and "will these strands continue" are one question asked twice. The puzzle cases pull the strands apart. The conviction that a further question survives the separation is the conviction of someone who learned a word in circumstances where it never had to be precise, and now insists that it was precise all along.\n\nIt is tempting to leap to the fashionable announcement that the self is a fiction, that the word is empty. The leap is unearned, and for a homely reason: concepts with vague edges are not thereby vacant. A heap is a real thing, and its reality is untouched by the fact that no one can say which grain made it one. What is true is narrower and more interesting. Identity is not, at the margins, discovered; it is decided, and the decisions were taken long ago and built into our practices of promising, of punishment, of inheritance, of grief. Conventions that old stop feeling like conventions. They feel like facts, which is exactly what a well-made convention is supposed to feel like.\n\nWhen I fear death I am not fearing the failure of a criterion. I fear the ending of the particular continuities I care about, and those can be described in full without anyone ruling on identity. We are not ships. But neither are we sealed vessels, and at the edges where our purposes give out, the honest response to "is it still me" is a further question: what did you want to know?',
    questions: [
      {
        question: 'The central claim of the passage is that:',
        options: [
          'puzzle cases demonstrate that the self is an illusion and that personal identity does not exist',
          'there is always a determinate fact about whether a person survives a given transformation',
          'philosophers should stop devising thought experiments, which distort our ordinary intuitions',
          'at the margins identity is settled by decision rather than discovery, and what we care about can be described without settling it',
        ],
        correctAnswer: 3,
        explanation:
          'The author states his position twice: "Identity is not, at the margins, discovered; it is decided," and the continuities we care about "can be described in full without anyone ruling on identity." The no-self announcement is named and rejected as an "unearned" leap. The claim that survival always has a determinate answer is the intuition the author sets out to explain away. And far from renouncing thought experiments, the author builds his case on two of them.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The example of the ship whose planks are replaced functions primarily to:',
        options: [
          'demonstrate that no object can survive the gradual replacement of its parts',
          'present a case in which every physical fact is settled and the identity question nonetheless remains open',
          'suggest that questions about artifacts are more tractable than questions about persons',
          'show that our concept of identity originated in the practices of shipbuilders',
        ],
        correctAnswer: 1,
        explanation:
          'The paragraph makes its point explicitly: "Every physical fact is on the table. Nothing has been concealed. And still the question sits there." The example is engineered so that no additional inspection could help, which is what licenses the claim that "there is no further fact." The author never says objects cannot survive replacement; the harbour vessel plainly does, under the old name and registry. Nor does he treat artifacts as easier than persons — he says "the same structure appears" with persons. The remark about shipbuilders reads the illustration as a claim about the word’s history, which the passage never makes.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward the intuition that "there is surely a fact about whether I wake up tomorrow" is best characterized as:',
        options: [
          'dismissive of it as a superstition that careful reasoning removes',
          'accepting of it as the decisive datum against his own position',
          'sympathetic to its source while denying that it carries over to the cases at issue',
          'puzzled by it, since he can identify no one who actually holds it',
        ],
        correctAnswer: 2,
        explanation:
          'The author writes that "the intuition is not foolish, and I do not propose to bully it. I propose to explain it," then traces it to ordinary cases in which the strands "never come apart" — an explanation that credits the intuition’s origin while denying its authority once the strands are separated. Dismissal as superstition misses the explicit refusal to bully. Treating it as decisive reverses his conclusion. And puzzlement about who holds it contradicts the fact that he stages it as the reader’s own rebellion.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most STRENGTHEN the author’s position?',
        options: [
          'When people are told precisely which continuities a procedure will preserve and which it will sever, whatever disagreement remains concerns what to value rather than what will happen.',
          'Most people report a strong conviction that they would not survive being disassembled and reassembled elsewhere.',
          'Neuroscientists identify a specific structure whose uninterrupted operation is necessary for a stream of consciousness to continue.',
          'Philosophers have proposed a large number of competing criteria of personal identity.',
        ],
        correctAnswer: 0,
        explanation:
          'The author claims that once the continuities are specified, "we know everything there is to know" and no factual residue remains. Evidence that informed parties stop disputing what will happen and dispute only what to value is exactly the pattern his account predicts and the survival-fact view does not. A widespread conviction about disassembly is the intuition he explains rather than support for it. A necessary neural structure would suggest precisely the further fact he denies, so it cuts against him. And a proliferation of competing criteria merely reports disagreement without indicating whether anything is there to be found.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A patient facing a procedure that will erase her memories while leaving her body and temperament intact asks her surgeon whether the person who wakes will really be her. On the author’s view, the most useful reply would:',
        options: [
          'assure her that identity is preserved, since bodily continuity is what identity consists in',
          'set out exactly which continuities will be preserved and which severed, and leave her to weigh what she cares about',
          'tell her the question has no answer and therefore does not matter',
          'refer the question to a philosopher who has established the correct criterion of identity',
        ],
        correctAnswer: 1,
        explanation:
          'The author holds that the continuities he cares about "can be described in full without anyone ruling on identity," and closes by answering "is it still me" with "what did you want to know?" A full specification of what survives, handed back to the person deciding, is that advice applied. Asserting a bodily criterion treats one convention as a discovered fact. Saying the question does not matter is the nihilist slide the author calls an unearned leap; he insists the continuities matter enormously. Deferring to an expert with the correct criterion reverses the entire argument.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The author’s remark that our practices of promising, punishment, inheritance, and grief embody decisions "taken long ago" most directly implies that:',
        options: [
          'these practices are arbitrary and could be abandoned without any loss',
          'our intuitions about identity are innate rather than acquired',
          'claims about personal identity are, strictly speaking, always false',
          'the sense that identity is a discovered fact partly reflects conventions that have hardened into intuition',
        ],
        correctAnswer: 3,
        explanation:
          'The sentences immediately following make the point: "Conventions that old stop feeling like conventions. They feel like facts, which is exactly what a well-made convention is supposed to feel like." The key restates that. Calling the practices arbitrary and dispensable ignores the author’s insistence that they serve real purposes and that vague concepts are not empty. Innateness is the opposite of a convention taken long ago. And the claim that identity statements are always false is the no-self position the passage explicitly refuses.',
        skill: 'inference',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-phil-05',
    section: 'cars',
    discipline: 'existentialism and phenomenology',
    title: 'The Self You Have Not Got',
    needsReview: true,
    passageText:
      'Ask anyone what it means to live authentically and you will be told, in one formulation or another, that it means finding out who you really are and refusing to be anything else. The advice is everywhere: in commencement addresses, in therapy, in the copy on a coffee cup. It descends, by a route worth tracing, from a body of thought that meant very nearly the opposite.\n\nThe original insight was that a human being has no nature in the way a paperknife has one. A paperknife exists because someone had a use in mind and made an object to fit it; we can say what a paperknife is for before any particular knife is forged. A person arrives with no specification. Whatever it turns out to mean to have been this person is settled by what the person does, continuously, without a final draft. If that is right, the injunction to be true to your real self is not merely hard to follow. It is incoherent, because there is nothing standing behind you to be true to. Worse, it consoles in exactly the way the insight was meant to disturb. An essence discovered is a decision spared.\n\nWatch a waiter who is very good at being a waiter. The bend of the arm, the pitch of the voice, the way the tray comes to rest — nothing remains of the man that is not waiter. What is faintly uncomfortable is not that he plays a role. Everyone plays roles. The discomfort is that the role is offered as a nature. He is not doing this; he is a waiter, and this is what a waiter is. The choice has been laundered into a fact.\n\nStill, the popular ideal cannot be waved away as a simple confusion, because it has fastened onto something real. People do betray themselves. The experience is unmistakable — the hollow feeling after the meeting in which one said nothing, the marriage entered because it was time. Any account that cannot make sense of it has failed, and mine must do so without a true self for the betrayer to have been unfaithful to.\n\nHere is the proposal. Self-betrayal is not infidelity to a hidden essence. It is the pretense of necessity. The student who explains that she is simply not a mathematical person has not consulted an inner nature and reported the finding; she has made a decision and then filed it under fact, so that no one, herself least of all, can ask her to defend it. The man who says he had no choice usually had several and preferred not to be seen choosing. What is betrayed is not a self that was there; it is the capacity to go on choosing, disowned in advance.\n\nThe graver objection comes next. If nothing is given, is not every course as good as every other? I think not: removing an excuse is not the same as removing a standard. A choice acknowledged as a choice must be carried as one’s own; a choice attributed to one’s nature is carried as weather, and weather is nobody’s fault. The person who owns a choice must answer for it, to others and in the end to himself, and that answering is where whatever seriousness a life has actually lives.\n\nSo authenticity survives, though not as fidelity to anything. It is the refusal of the alibi. The self is not what you find at the bottom of the search; it is what accumulates behind you as you go, and it is authentic just insofar as you decline to call it fate.',
    questions: [
      {
        question: 'Which of the following best captures the author’s thesis?',
        options: [
          'Authenticity consists in discovering the self one truly is and expressing it faithfully.',
          'Since there is no true self, no course of action can be better or worse than any other.',
          'Authenticity is not fidelity to a given self but the refusal to disown one’s choices by presenting them as necessities.',
          'Social roles are inherently oppressive and should be refused by anyone seeking to live well.',
        ],
        correctAnswer: 2,
        explanation:
          'The closing paragraph states it directly: "authenticity survives, though not as fidelity to anything. It is the refusal of the alibi," and the account of self-betrayal identifies the alibi as "the pretense of necessity." The discovery-and-expression formula is the popular ideal the author says descends from thought that "meant very nearly the opposite." The nihilist reading is the objection he raises and answers with "removing an excuse is not the same as removing a standard." And the waiter passage explicitly denies that role-playing is the problem: "Everyone plays roles."',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'In context, the author treats the remark "I am simply not a mathematical person" as:',
        options: [
          'a claim of necessity that converts a choice into a fact about oneself',
          'a candid acknowledgment of temperament that the author regards as healthy',
          'an unremarkable conversational formula of no philosophical interest',
          'evidence that one’s true self can be located through careful introspection',
        ],
        correctAnswer: 0,
        explanation:
          'The sentence that follows the example spells it out: the student "has made a decision and then filed it under fact, so that no one, herself least of all, can ask her to defend it." That is the laundering of a choice into a necessity, the same operation the waiter performs. Treating the remark as healthy candour reverses the author, who offers it as his central specimen of self-betrayal. Calling it philosophically insignificant contradicts the weight the paragraph places on it. And reading it as successful introspection presupposes the inner nature the author denies exists.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
      {
        question: 'It can be inferred that the author regards the popular ideal of authenticity as:',
        options: [
          'wholly empty, a slogan that corresponds to nothing in experience',
          'a faithful restatement of the original insight in more accessible language',
          'objectionable primarily because it encourages people to defy social expectations',
          'a distorted response to something genuine, namely the experience of betraying oneself',
        ],
        correctAnswer: 3,
        explanation:
          'The turn of the passage is the sentence "the popular ideal cannot be waved away as a simple confusion, because it has fastened onto something real. People do betray themselves." The author then builds his own account of that real experience. Declaring the ideal empty ignores this concession. Calling it a faithful restatement contradicts the opening claim that it inverts its source. And the charge about defying social expectations mislocates the complaint, since the author objects not to defiance or conformity but to presenting either as a nature rather than a choice.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s account of self-betrayal?',
        options: [
          'Some people describe choices as freely made at the time and come to regret them later.',
          'People report the sharpest sense of having betrayed themselves in cases where they chose deliberately and were fully aware of choosing.',
          'Many people find the vocabulary of authenticity motivating in their working lives.',
          'Measured personality traits show substantial stability across the course of a lifetime.',
        ],
        correctAnswer: 1,
        explanation:
          'The account identifies self-betrayal with "the pretense of necessity" — the disowning of choice. If the experience were sharpest exactly where choice was owned and acknowledged, the proposed identification would fail at the very cases it is meant to explain. Regret about acknowledged choices is fully compatible with the author, who says owned choices must be "carried as one’s own." Finding the vocabulary motivating speaks to the ideal’s appeal, not its correctness. Stable traits are a tempting trap but not the same as necessity; the author’s target is the use of a trait as an excuse, which stable traits neither establish nor refute.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A student who has failed several examinations explains that she is not a scientific person and changes her field of study. The author would most likely respond that:',
        options: [
          'she has acted authentically by honestly acknowledging her limitations',
          'her decision is inauthentic because changing fields is a way of avoiding difficulty',
          'the case cannot be assessed without first determining whether her self-assessment is accurate',
          'the decision may be entirely reasonable, but the explanation recasts it as a fate she did not choose',
        ],
        correctAnswer: 3,
        explanation:
          'The author’s objection is never to the content of a choice but to its presentation: what he faults is filing a decision "under fact, so that no one... can ask her to defend it." Changing fields might be sensible; describing oneself as not a scientific person is the alibi. Calling the explanation honest acknowledgment endorses the very move the passage diagnoses. Condemning her for avoiding difficulty moralizes about the choice itself, which the author does not do. And making the verdict wait on the accuracy of her self-assessment presupposes an inner nature to assess accurately.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The description of the waiter serves chiefly to:',
        options: [
          'exhibit a person performing a role so completely that the performance is presented as a nature',
          'criticize service work as a uniquely alienating form of employment',
          'argue that social roles make authentic action impossible',
          'depict someone who has successfully discovered and expressed his true self',
        ],
        correctAnswer: 0,
        explanation:
          'The paragraph isolates its point in two sentences: "The discomfort is that the role is offered as a nature... The choice has been laundered into a fact." The waiter is a demonstration of the mechanism the author will later name the pretense of necessity. Nothing marks service work as special; the author says everyone plays roles. Declaring authentic action impossible under roles reverses the argument, since the waiter could own the performance rather than disown it. And presenting him as a success story inverts the passage’s evaluation.',
        skill: 'function',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-phil-06',
    section: 'cars',
    discipline: 'moral philosophy (meta-ethics)',
    title: 'What Disagreement Proves',
    needsReview: true,
    passageText:
      'The most popular argument against moral objectivity is also the least examined. It runs like this: people disagree about morality in ways they do not disagree about the boiling point of water; therefore moral claims are not the sort of thing that can be true or false; therefore they must express something else — approval, allegiance, the noises of a tribe recognizing its own. The argument moves briskly from an observation everyone accepts to a conclusion that would flatten the subject, on the strength of a single inference nobody defends. Why should the difficulty of a question be evidence that the question has no answer?\n\nIn no other domain do we reason this way. Historians disagree about the causes of wars, physicians about whether to operate, economists about nearly everything, and we do not conclude that there is no fact about what caused a war or what happens if the surgeon cuts. We conclude that the matter is hard, that the evidence is tangled, that the parties are working with different information. Difficulty is a familiar feature of serious inquiry. The sceptic bills difficulty as vacancy, and the bill has been paid for two centuries without anyone auditing it.\n\nI want to concede immediately that not all disagreement is so easily handled, because a certain kind really would be evidence. Suppose two parties agree on every non-moral fact — what the practice does, who is affected, what each outcome feels like from the inside — and both are attentive, informed, unmoved by any personal stake, and their disagreement persists with no account of why either side should be going wrong. That would be troubling. There would be nothing left to point at, no error to diagnose, and the suspicion would grow that the parties are not describing anything at all.\n\nBut the concession is narrower than it looks, because vanishingly little actual disagreement meets those conditions. Disputes about the treatment of animals turn, very largely, on disputed claims about what animals experience. Disputes about a policy turn on rival predictions of what the policy will do. Disputes across societies turn, again and again, on factual beliefs about causation, contagion, and consequence that the parties would revise if they exchanged what they knew. And much moral disagreement is not honest disagreement at all: it tracks interest with an accuracy that ought to embarrass anyone who cites it as evidence about the universe. When the beneficiaries of an arrangement find the arrangement just, we have an explanation of their conviction that does not require the arrangement to be just.\n\nThe sceptic may reply that I am explaining away disagreement piecemeal and will run out of explanations. He may be right. Some residue may survive every attempt at diagnosis — disputes about how to weigh a certain against a possible harm, or the claims of the near against the distant, that no amount of shared information dissolves. I am content to let the residue stand. A domain in which some questions are settled and others are not is what every hard subject looks like from the inside, and I do not see why morality should be required to produce a unanimity that medicine and history have never managed and are not asked to manage.\n\nWhat I resist is the traffic in the other direction: the move from local difficulty to global vacancy, from the fact that we argue to the conclusion that there is nothing to argue about. That inference proves far too much. It would empty every discipline in which competent people disagree, which is every discipline worth having.',
    questions: [
      {
        question: 'The author’s main claim is that:',
        options: [
          'moral disagreement shows that moral claims express preferences rather than truths',
          'disagreement indicates difficulty rather than the absence of moral facts, except in a narrow class of cases the author specifies',
          'all moral disagreement can ultimately be traced to disagreement about non-moral facts',
          'moral inquiry should aim at the unanimity that the natural sciences have achieved',
        ],
        correctAnswer: 1,
        explanation:
          'The passage asks "Why should the difficulty of a question be evidence that the question has no answer?", answers that "difficulty is a familiar feature of serious inquiry," and then carves out one kind of disagreement that "really would be evidence." The key holds both the thesis and the concession. The preference view is the target argument dismantled in the opening paragraph. Tracing all disagreement to non-moral facts is too strong: the author explicitly allows that "some residue may survive every attempt at diagnosis." And he denies that other disciplines have unanimity, noting that medicine and history "have never managed" it.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward the possibility that some moral disagreement is irreducible is best described as:',
        options: [
          'alarmed, since such a residue would undermine his position',
          'dismissive, since he denies that any such residue exists',
          'untroubled, since he expects any difficult domain to contain unsettled questions',
          'triumphant, since the residue refutes the position he opposes',
        ],
        correctAnswer: 2,
        explanation:
          'The author writes "I am content to let the residue stand," and grounds that contentment in the claim that "a domain in which some questions are settled and others are not is what every hard subject looks like from the inside." That is equanimity, not alarm, and it is offered as a considered position rather than a worry. He plainly does not deny the residue, since he grants that the sceptic "may be right" about running out of explanations. And nothing in the paragraph is triumphant; the residue is a cost he absorbs, not a weapon he wields.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'The author would be most likely to agree that a dispute about whether a particular practice is cruel:',
        options: [
          'may dissolve if the parties come to agree about what the practice does to those subjected to it',
          'cannot be resolved, because cruelty is a matter of perspective',
          'demonstrates that the concept of cruelty is incoherent',
          'should be settled by determining which party belongs to the more tolerant society',
        ],
        correctAnswer: 0,
        explanation:
          'The fourth paragraph makes exactly this move about animals: such disputes "turn, very largely, on disputed claims about what animals experience," and cross-cultural disputes rest on factual beliefs "that the parties would revise if they exchanged what they knew." Declaring the dispute unresolvable is the sceptical conclusion the passage is written against. Calling the concept incoherent is stronger still and appears nowhere. And appealing to which society is more tolerant substitutes a sociological tiebreaker for the factual convergence the author actually describes.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most STRENGTHEN the author’s argument?',
        options: [
          'Moral disagreements arise more frequently than disagreements in the natural sciences.',
          'People rarely abandon a moral view once they have adopted it.',
          'A large proportion of moral philosophers hold that moral claims can be true or false.',
          'When parties to a moral dispute are supplied with the same detailed information about what a practice does and to whom, their disagreement narrows substantially.',
        ],
        correctAnswer: 3,
        explanation:
          'The author’s diagnostic strategy is that most moral disputes rest on non-moral disagreements "that the parties would revise if they exchanged what they knew." Evidence that shared information does narrow disagreement is that prediction confirmed. The relative frequency of moral versus scientific disputes is the observation the sceptic starts from and does not help the author. Entrenchment of moral views, if anything, tells against the convergence he predicts. And a headcount of philosophers is an appeal to authority that leaves the inference at issue untouched.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'Two physicians disagree about whether to continue aggressive treatment for a patient. Inquiry reveals that they hold sharply different estimates of the patient’s chance of recovery. According to the author, this disagreement:',
        options: [
          'is a paradigm case of the irreducible disagreement that would undermine moral objectivity',
          'shows that medical ethics rests on institutional convention rather than on anything more',
          'is not the kind that counts as evidence against moral facts, since it rests on a factual dispute',
          'indicates that such questions are best decided by majority vote among the clinicians involved',
        ],
        correctAnswer: 2,
        explanation:
          'The author’s troubling case requires that the parties "agree on every non-moral fact." These physicians do not: they differ on the probability of recovery, which is precisely the sort of "rival prediction" the passage says most disputes turn on. So the case falls outside the narrow concession. Labelling it the paradigm of irreducible disagreement inverts the author’s criterion. The convention claim is the sceptical conclusion he resists. And majority vote is a decision procedure the passage never discusses and that would not bear on whether a fact exists.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In context, the statement that "the sceptic bills difficulty as vacancy" most nearly means that the sceptic:',
        options: [
          'overstates how much agreement about morality actually exists',
          'treats the hardness of a question as though it established that the question has no answer',
          'demands excessive compensation for a modest philosophical service',
          'mistakes moral questions for questions that could be settled empirically',
        ],
        correctAnswer: 1,
        explanation:
          'The sentence arrives at the end of a paragraph contrasting morality with history, medicine, and economics, where we conclude "that the matter is hard" rather than that no fact exists. To bill difficulty as vacancy is to charge us for the one as though it were the other — the same complaint voiced in the opening question, "Why should the difficulty of a question be evidence that the question has no answer?" Overstating agreement gets the direction wrong, since the author is the one urging more convergence. The commercial reading takes "bills" literally and abandons the argument. And confusing moral with empirical questions describes a mistake the author comes closer to courting than the sceptic does.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
]
