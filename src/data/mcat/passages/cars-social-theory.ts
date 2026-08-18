import type { MCATPassage } from '../types'

/**
 * MCAT CARS — Social Theory pool.
 *
 * Six original, argument-driven passages (500-600 words each) written in a
 * single theorist's voice: theories of modernity, institutions and
 * organizational life, social capital and community, urban sociology and
 * public space, the sociology of work and time, and surveillance and social
 * control. Each advances a thesis, absorbs a serious objection, and turns on a
 * distinction rather than on outside knowledge or data.
 *
 * AI-authored; needsReview is true pending SME review.
 */
export const CARS_SOCIAL_THEORY_PASSAGES: MCATPassage[] = [
  {
    id: 'cars-soc2-01',
    section: 'cars',
    discipline: 'theories of modernity',
    title: 'What Modernity Took',
    needsReview: true,
    passageText:
      'Nearly every account of modernity I have read is a story of subtraction. Something was once there — the sacred canopy, the guild, the settled hierarchy of rank — and the modern age carried it off, leaving a colder world of contracts, clocks, and disenchanted matter. The subtraction story has the virtue of drama and the defect of imprecision. It tells us what departed without telling us what changed, and those are not the same question.\n\nConsider what is actually different about a modern believer. The medieval peasant and the contemporary devout may hold, so far as anyone can tell, the same propositions with the same fervor. What separates them is not the content of the belief but its status. For the peasant, belief was the water in which the fish swam: not affirmed, because not doubted; not chosen, because no alternative presented itself as a live possibility. For the modern believer, belief is a position — one held among others, defensible, revisable, and above all hers. Nothing has been subtracted from her faith. Something has been added to it: the standing awareness that it could have been otherwise.\n\nThat addition is the change I would put at the center. Modernity did not empty the world of meaning. It converted inherited practice into elected identity. The tradition one is born into becomes a tradition one keeps, and keeping is an act, performed daily, against alternatives one can name.\n\nHere the defenders of the subtraction story object, and their objection deserves more than a shrug. They point to movements that have, by every appearance, refused the modern settlement outright — communities that reinstate the old certainties, by force where necessary, and that seem to have restored precisely the unquestioned background I claim is gone.\n\nBut notice how such movements proceed. They are organized, propagandized, exquisitely self-conscious. They publish manifestos explaining why the old ways are correct. A form of life that had never been questioned would have no manifesto, because it would have nothing to answer. The fervor of the restoration betrays the condition it means to abolish: one can only restore what has already been lost as an unquestioned background, and the restoration, however sincere, arrives as a choice among options. These movements are not modernity’s opposite. They are its most literal-minded children.\n\nThis is why I resist the vocabulary of loss that the subtraction story encourages. The standing complaint against modern life is that it is thin — that our attachments are provisional, our communities elective, our convictions worn lightly. The description is fair. But thinness is the price of a choice one could actually make, and the alternative to a thin commitment is not a thick one; it is no commitment at all, only a circumstance a person happens to be standing in. To mourn the unchosen is to mourn a condition in which nothing was ever affirmed because nothing was ever at risk.\n\nWhat does deserve mourning is something the subtraction story is too blunt to see. The capacity to hold a life as one’s own — to revise, to leave, to affirm again — is not distributed evenly. It requires resources, exits, and the plausible expectation that a chosen life can be sustained. To be told that everything is optional while lacking the means to exercise any option is to receive modernity’s burden without its compensation. That, and not disenchantment, is the modern injury worth naming.',
    questions: [
      {
        question: 'Which of the following best expresses the central thesis of the passage?',
        options: [
          'Modernity has emptied the world of meaning, leaving contracts and clocks where the sacred once stood.',
          'Religious belief in the modern era is held with less fervor than it was in premodern societies.',
          'Modernity is best understood not as the removal of meaning but as the conversion of inherited practice into chosen commitment.',
          'Restorationist movements demonstrate that some communities have successfully refused the modern settlement.',
        ],
        correctAnswer: 2,
        explanation:
          'The author states the thesis directly: modernity "did not empty the world of meaning" but "converted inherited practice into elected identity," so that "keeping is an act." The option describing an emptied world is the subtraction story the author calls imprecise and sets out to replace. The claim about weakened fervor contradicts the passage, which allows the peasant and the modern devout "the same fervor" and locates the difference in status rather than intensity. The option praising restorationist movements as genuine refusals reverses the author, who calls them modernity’s "most literal-minded children."',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The comparison of the medieval peasant with the contemporary devout functions primarily to:',
        options: [
          'distinguish the content of a belief from its status, in order to relocate what modernity actually changed',
          'establish that religious conviction has remained constant throughout recorded history',
          'demonstrate that premodern people were psychologically incapable of doubt',
          'argue that modern believers hold their faith more rigorously than their predecessors did',
        ],
        correctAnswer: 0,
        explanation:
          'The paragraph turns on the sentence "What separates them is not the content of the belief but its status," and that distinction is what lets the author say something was added rather than subtracted. The claim of historical constancy overreaches: the author compares two figures to isolate a difference, not to assert an invariant across all periods. Saying premodern people were incapable of doubt is stronger than the text, which says only that no alternative presented itself as a live possibility. The option about greater rigor is half-right in noticing that modern belief is actively held, but the author never ranks the two on strength.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'The passage suggests that a form of life that had never been questioned would:',
        options: [
          'produce more fervent defenders than a form of life that is consciously chosen',
          'prove impossible to sustain under any modern political arrangement',
          'require constant reaffirmation from its members in order to survive',
          'have no occasion to explain itself, because nothing had been put to it',
        ],
        correctAnswer: 3,
        explanation:
          'The author writes that such a form of life "would have no manifesto, because it would have nothing to answer" — self-explanation is a response to a challenge, and where no challenge exists no explanation is called for. The option about constant reaffirmation reverses this: reaffirmation is what the author says characterizes chosen commitment, not unquestioned background. The claim about fervor is unsupported, since the author allows equal fervor on both sides. The claim about impossibility under modern arrangements is a political prediction the passage does not make.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s claim that restorationist movements are modernity’s "most literal-minded children"?',
        options: [
          'Such movements frequently rely on modern communications technology to spread their message.',
          'Historians find that societies in which no alternative to the tradition had ever been articulated nonetheless produced doctrinal manifestos indistinguishable from those such movements publish today.',
          'Members of such movements report religious conviction that is sincere and unwavering.',
          'Such movements usually fail to restore the practices they champion.',
        ],
        correctAnswer: 1,
        explanation:
          'The author’s entire inference runs from the existence of the manifesto to the prior loss of unquestioned background: "A form of life that had never been questioned would have no manifesto." Evidence that unquestioned societies produced the same self-explaining documents severs that inference and leaves the argument without its engine. Use of modern technology is consistent with the author’s position rather than damaging to it. Sincere conviction is explicitly compatible with the thesis, which concerns status rather than intensity. Whether the movements succeed is beside the point, since the argument concerns what their existence reveals, not their effectiveness.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A ministry of culture proposes to strengthen national tradition by making instruction in traditional practice compulsory in every school. Based on the passage, the author would most likely predict that the program will:',
        options: [
          'produce students who regard the tradition as one assigned option among others, since a tradition delivered as a curriculum has already become optional',
          'restore the unreflective background that the author says modern conditions dissolved',
          'succeed, because the author holds that traditions are best sustained by state authority',
          'fail because students in modern societies are indifferent to traditional questions',
        ],
        correctAnswer: 0,
        explanation:
          'On the author’s account, what makes a background unquestioned is that no alternative presents itself as live; a tradition taught, defended, and examined is thereby presented as something that could have been otherwise. Teaching it cannot restore unchosenness, which is why the option predicting restoration reverses the argument. The passage never endorses state authority as a means of sustaining tradition. The prediction of indifference contradicts the author’s explicit allowance that modern conviction can be entirely fervent.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In context, the author’s remark that "thinness is the price of a choice one could actually make" most nearly means that:',
        options: [
          'modern commitments are degraded imitations of premodern ones',
          'a commitment that has been chosen is necessarily stronger than one that was inherited',
          'a commitment cannot be both freely chosen and unquestioned, so the very feature that makes it one’s own is what makes it feel insubstantial',
          'people in modern societies have become incapable of sustained commitment',
        ],
        correctAnswer: 2,
        explanation:
          'The sentence concedes the familiar complaint that modern attachments are "provisional" and "worn lightly," then reinterprets that thinness as the necessary cost of genuine election — "the alternative to a thin commitment is not a thick one; it is no commitment at all." Reading the line as a verdict of degradation misses the concession-and-reversal structure. Claiming chosen commitments are simply stronger runs past the author, who calls them thin, not superior. Denying that modern people can commit at all is the pessimism the sentence is written to refuse.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-soc2-02',
    section: 'cars',
    discipline: 'institutions and organizational life',
    title: 'The Uses of Procedure',
    needsReview: true,
    passageText:
      'Reformers arriving at any large organization discover the same landscape: a thicket of procedure that no one will defend and no one will remove. Approvals route through offices with no stake in the outcome. Forms request information that is never read. Committees convene whose founding purpose no current member can recall. The reformer’s diagnosis is always some blend of inertia, cowardice, and empire-building, and the prescription follows from the diagnosis: find the useless steps, delete them, and let the work breathe.\n\nI want to propose a less flattering explanation, and a more durable one. Much of that thicket survives because it performs a function that appears in no manual: it converts decisions into events for which no particular person is answerable. Where there is no procedure and something goes wrong, someone chose. Where there is procedure, the process produced an outcome, and the humans involved were merely conducting current. Every additional sign-off is one more place for responsibility to disperse. Seen this way, the apparent absurdities become intelligible. The approval from a department with no relevant expertise is not a clerical accident; it is a second name on the page.\n\nThe obvious objection is that this reads cynicism into arrangements that do real work. Standardized handoffs prevent errors that used to kill people. Forms carry information across distances no conversation could span. Committees pool knowledge that no single person holds. Coordination is not a myth, and an organization stripped of procedure would not be liberated; it would be incoherent.\n\nI grant all of it. The argument does not require that procedure be useless. It requires a distinction. Some procedure coordinates: it exists to make many hands do one thing. Some procedure absolves: it exists to make a decision authorless. The two are not different rulebooks, and this is exactly what makes the reformer’s task so hard. A single rule can serve both masters at once, coordinating in the morning and absolving in the afternoon, and the people who follow it need not know which service they are rendering.\n\nStill, the two can be told apart, and the test is not what a procedure does but how it is defended when challenged. Show a coordinating procedure evidence that it does not improve outcomes, and it gets revised; the defense speaks the language of results. Show an absolving procedure the same evidence and the defense will never mention outcomes at all. It will say that the process was followed, that the requirement is standing policy, that the approvals were obtained. Those are not weak arguments about effectiveness. They are strong arguments about something else.\n\nThis is why streamlining campaigns fail with such regularity. The consultant deletes the redundant steps, the flowchart shortens, and within a few years the thicket has grown back, often denser than before. It regrows because the demand that produced it was never addressed. That demand is not for delay. It is for a place to stand when things go wrong.\n\nNone of which is a counsel of despair, though it does relocate the lever. An organization that punishes every bad outcome without asking about the quality of the judgment behind it will get ceremonial procedure whether it wants it or not; people will build shelters if you keep throwing stones. The reform that matters is therefore not to the rulebook but to the norm of accountability: judge decisions by the reasoning available at the time rather than by how they happened to turn out. Where that norm genuinely holds, the thicket thins without anyone pruning it.',
    questions: [
      {
        question: 'The main idea of the passage is best stated as:',
        options: [
          'Organizational procedures persist mainly because managers lack the courage to remove them.',
          'Much organizational procedure survives because it diffuses responsibility, which is why streamlining campaigns reliably fail and why reform must target norms of accountability instead.',
          'Procedures should be eliminated wherever they cannot be shown to improve measurable outcomes.',
          'Formal procedure has no genuine coordinating value and exists only for ceremonial purposes.',
        ],
        correctAnswer: 1,
        explanation:
          'The author proposes that procedure "converts decisions into events for which no particular person is answerable," explains streamlining failure by the persistence of that unmet demand, and relocates the lever to "the norm of accountability." Cowardice and empire-building are the reformer’s diagnosis, which the author explicitly sets aside as less durable. Wholesale elimination is not the author’s prescription, since deleting steps is exactly the campaign shown to fail. The claim that procedure has no coordinating value contradicts the concession that "coordination is not a myth."',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author mentions "the approval from a department with no relevant expertise" primarily in order to:',
        options: [
          'illustrate the general incompetence of large organizations',
          'show that procedures are usually written by people who do not understand the work',
          'concede that some procedures serve no purpose whatsoever',
          'supply a case that looks irrational until the blame-diffusing function is added to the account',
        ],
        correctAnswer: 3,
        explanation:
          'The example arrives immediately after the claim that responsibility disperses across sign-offs, and the author glosses it as "not a clerical accident" but "a second name on the page" — an apparent absurdity rendered intelligible by the proposed function. The option about serving no purpose is half-right in noting the step is useless for the work but wrong about the argument, whose whole point is that the step does serve a purpose. Incompetence and the ignorance of rule-writers are the kind of explanation the author has just rejected as insufficient.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'According to the passage, the clearest indication that a given procedure is serving absolution rather than coordination is that:',
        options: [
          'when confronted with evidence that it does not improve outcomes, it is defended in terms that never mention outcomes',
          'it requires more signatures than the underlying task appears to warrant',
          'it was introduced in the aftermath of a highly publicized failure',
          'the employees who follow it are unable to explain how it originated',
        ],
        correctAnswer: 0,
        explanation:
          'The author names the test explicitly: "the test is not what a procedure does but how it is defended when challenged," and an absolving procedure answers with process, policy, and approvals rather than results. Excess signatures and forgotten origins are symptoms the passage mentions in its opening survey, but the author insists a single rule may serve both functions, so surface features cannot settle the question. The timing of a procedure’s introduction is never offered as a diagnostic anywhere in the passage.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'Which of the following findings would most STRENGTHEN the author’s explanation of why streamlining campaigns fail?',
        options: [
          'Organizations that streamline procedures report short-term improvements in employee satisfaction.',
          'Consultants hired to simplify procedures are rarely experts in the work they are simplifying.',
          'After streamlining, procedural steps reappear fastest in the organizations that most severely punish individuals for bad outcomes.',
          'Organizations with the fewest formal procedures reach decisions more quickly than those with the most.',
        ],
        correctAnswer: 2,
        explanation:
          'The author’s explanation is causal: the thicket regrows because the demand for "a place to stand when things go wrong" is untouched by deletion, and that demand is generated by harsh outcome-based punishment. A correlation between severity of blame and speed of regrowth is precisely the pattern the mechanism predicts. Satisfaction gains and decision speed concern the benefits of simplification, not the cause of its reversal. Consultants’ lack of expertise is a rival explanation of failure, and one that would compete with the author’s account rather than support it.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A hospital adopts a surgical checklist and complication rates fall. Two years later the checklist has grown to include several items unrelated to surgical safety, each requiring an initial. The author would most likely interpret the growth as:',
        options: [
          'evidence that the original checklist was poorly designed',
          'proof that checklists have no real coordinating value',
          'an instance of clinical expertise being displaced by administrative convenience',
          'a coordinating instrument accumulating absolving functions, exactly as one rule serving both masters would predict',
        ],
        correctAnswer: 3,
        explanation:
          'The passage insists that coordination and absolution "are not different rulebooks" and that "a single rule can serve both masters at once," which is what makes an effective instrument such an attractive host for initials that do no clinical work. Calling the original design poor ignores that it demonstrably reduced complications. Denying coordinating value contradicts the author’s explicit concession. The displacement of expertise by administration is a plausible-sounding complaint but not the mechanism the passage supplies, which concerns answerability rather than authority.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward employees who accumulate procedural protections is best described as:',
        options: [
          'indignant at their evasion of personal responsibility',
          'understanding, treating their conduct as a sensible response to how they are judged',
          'indifferent, since the author regards individual behavior as beside the point',
          'admiring of their skill at organizational politics',
        ],
        correctAnswer: 1,
        explanation:
          'The closing paragraph withholds blame from individuals and places it upstream: "people will build shelters if you keep throwing stones," and the reform proposed is to the norm of accountability rather than to anyone’s character. Indignation is exactly the reaction the sentence forestalls. Indifference misreads the passage, which takes individual behavior seriously enough to explain it. Admiration for political skill imports a note of relish the measured, diagnostic prose never strikes.',
        skill: 'tone',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-soc2-03',
    section: 'cars',
    discipline: 'social capital and community',
    title: 'The Wrong Metaphor',
    needsReview: true,
    passageText:
      'The phrase "social capital" earned its place in the language by making an obvious truth sound rigorous. People with friends do better than people without them; connections open doors that merit alone leaves shut. Naming this a form of capital promised to bring the study of association into the company of serious quantities. My objection is not that the metaphor is imprecise. Every metaphor is imprecise, and a discipline that refused inexact language would have nothing to say. My objection is that this particular metaphor is corrupting: it names as capital a good that is destroyed by being treated as capital.\n\nCapital, in any use worth the word, is something accumulated, held, and deployed for return, and the more shrewdly it is deployed the better it performs. Now apply that to a friendship. A man who cultivates friends for what they may one day yield does not end up with a portfolio of slightly inferior friendships. He ends up with something else entirely — a serviceable acquaintance network, valuable in its way, but the very feature that made friendship worth having is the feature his orientation removed. The return on the relationship depended on the absence of a calculation about returns.\n\nThe economist has a reply, and it is a good one. He says I have confused the observer’s description with the participant’s motive. He is not instructing anyone to be calculating. He is noting that ties function as resources whether or not anyone intends them to. Rain does not intend to water crops, and no one accuses meteorology of corrupting agriculture by pointing out that it does.\n\nThe reply is correct as far as it goes, and I grant it before taking it back a step. Descriptions of social life do not stay outside social life. They leak. Once "networking" was named as an activity, people began doing it deliberately, and doing it deliberately is not what they had been doing before. Vocabulary supplied by social science becomes the vocabulary in which people narrate themselves, and a description a person adopts about herself has stopped being merely a description; it has become an instruction she is following. The firewall between observer and participant that the economist relies on is one his own success dismantles.\n\nThere is a second cost, and it falls on policy. Because the metaphor promises a quantity, the literature counts what can be counted: memberships held, meetings attended, evenings hosted, favors exchanged. Decline is then diagnosed by falling counts, and remedies are designed to raise them — a subsidized association here, a civic application there, a well-meaning campaign to get the neighbors into a room. The counts duly rise. Nothing that anybody wanted has been produced, because what was wanted was the unearned confidence that a neighbor would act decently toward you unprompted, and no quantity of assembled evenings manufactures that.\n\nI am not making the nostalgic argument, and I want to be clear about it. Thick community also surveils, polices, and excludes; the village that would lend you a plow would also decide whom you might marry. The claim is not that we should rebuild what was lost but that we should stop imagining we can measure our way back to it. If there is a prescription, it is unglamorous: arrange matters so that people are repeatedly and non-optionally in one another’s presence over long stretches, with something real at stake between them — and then leave them alone. Trust is a residue of shared exposure. It is not a deliverable, and the moment it is pursued as one it withdraws.',
    questions: [
      {
        question: 'The central argument of the passage is that:',
        options: [
          'social ties carry no economic value and should not be studied by economists',
          'the concept of social capital is imprecise, and better measurement would resolve its difficulties',
          'communities have weakened primarily because associational membership has fallen',
          'describing social ties as capital corrupts them, because the strategic orientation the metaphor invites destroys the good it names',
        ],
        correctAnswer: 3,
        explanation:
          'The author states the charge plainly: the metaphor "names as capital a good that is destroyed by being treated as capital," and the friendship example shows how a calculation about returns eliminates the source of the returns. The option about imprecision is explicitly disowned — "My objection is not that the metaphor is imprecise." Denying any economic value overshoots, since the author concedes that connections open doors and that acquaintance networks are "valuable in its way." Falling membership counts are the diagnosis the author criticizes as measuring the wrong thing.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'In saying that the calculating man does not acquire "slightly inferior friendships," the author most nearly means that:',
        options: [
          'strategic friendships yield smaller returns than sincere ones do',
          'the strategic orientation changes what kind of relationship it is, not merely how well it performs',
          'friendship and acquaintance cannot be distinguished in practice',
          'relationships entered for instrumental reasons are worthless',
        ],
        correctAnswer: 1,
        explanation:
          'The sentence is built to deny a difference of degree and assert a difference of kind: "He ends up with something else entirely," an acquaintance network rather than a diminished friendship. Reading the line as a claim about smaller returns is exactly the quantitative framing the sentence refuses. Saying the two cannot be distinguished collapses the distinction the author is drawing. Calling instrumental ties worthless contradicts the concession that such a network is "valuable in its way."',
        skill: 'meaning-in-context',
        needsReview: true,
      },
      {
        question: 'The author’s observation that rain "does not intend to water crops" serves primarily to:',
        options: [
          'argue that social ties are natural phenomena lying beyond deliberate influence',
          'illustrate the claim that unintended consequences are generally beneficial',
          'put the opposing objection in its strongest form before answering it',
          'concede that the capital metaphor is ultimately harmless',
        ],
        correctAnswer: 2,
        explanation:
          'The analogy belongs to the economist, introduced as part of "a reply, and it is a good one," and the following paragraph answers it by arguing that social descriptions leak into self-understanding in a way meteorological ones do not. Treating the line as the author’s concession of harmlessness is half-right about the concession and wrong about its extent, since the author immediately takes it "back a step." The passage draws no general lesson about unintended consequences and never claims social ties lie beyond influence.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s answer to the economist’s objection?',
        options: [
          'Social scientific vocabulary is almost never adopted by the people it describes, remaining confined to research literature.',
          'People who network deliberately report greater satisfaction with their careers.',
          'The term "social capital" was in use well before economists adopted it.',
          'Communities with dense networks of ties are more economically productive than sparse ones.',
        ],
        correctAnswer: 0,
        explanation:
          'The author’s answer depends entirely on leakage: "Vocabulary supplied by social science becomes the vocabulary in which people narrate themselves." If the vocabulary stays inside the journals, the observer-participant firewall the economist invoked holds after all, and the corruption charge loses its mechanism. Career satisfaction says nothing about whether the relationship has changed kind. The term’s etymology bears on credit, not on leakage. Productivity in dense networks supports the descriptive claim both parties already accept.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A city hoping to rebuild neighborhood trust funds a program that pays residents a small stipend to attend monthly community dinners. Based on the passage, the author would most likely object that:',
        options: [
          'the program is too small in scale to register in any measurement',
          'it raises the count of gatherings while the stipend supplies precisely the instrumental motive under which trust does not form',
          'residents cannot be relied upon to attend without supervision',
          'shared meals are an outdated form of neighborhood association',
        ],
        correctAnswer: 1,
        explanation:
          'The passage complains that remedies are built to raise counts — "a subsidized association here, a civic application there" — while what was wanted is confidence that arises unprompted, and it closes by insisting that trust "is not a deliverable, and the moment it is pursued as one it withdraws." Paying for attendance installs the calculation the author says destroys the good. Scale is not the author’s worry; the objection would apply to a large program equally. The remaining options invent claims about residents’ reliability and about the obsolescence of shared meals that appear nowhere in the argument.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The passage implies that the author’s own prescription rests chiefly on:',
        options: [
          'increasing the number of voluntary associations available to residents',
          'restoring the thick community life of the past',
          'measuring trust more accurately before designing any intervention',
          'repeated, non-optional shared presence with something genuinely at stake, followed by leaving people alone',
        ],
        correctAnswer: 3,
        explanation:
          'The final paragraph states the prescription in almost these words: arrange for people to be "repeatedly and non-optionally in one another’s presence over long stretches, with something real at stake between them — and then leave them alone." Restoring thick community is explicitly disclaimed, since that village "would also decide whom you might marry." Multiplying associations is the count-raising remedy the author says produces nothing. Better measurement reverses the argument, which holds that the measuring impulse is itself the error.',
        skill: 'inference',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-soc2-04',
    section: 'cars',
    discipline: 'urban sociology and public space',
    title: 'The Freedom of the Crowd',
    needsReview: true,
    passageText:
      'Every generation of planners rediscovers the plaza. The complaint is always the same: the modern city has produced hard, empty spaces where nobody lingers, and the remedy is always the same as well. Program the space. Bring in a market, a stage, a mural project, movable chairs and a schedule of events. Activate it. The vocabulary changes by the decade but the theory does not, and the theory holds that a public space succeeds in proportion to the interaction it generates.\n\nThe good these designers pursue is real. Sociability is a genuine human need and cities that frustrate it are worse for the frustration. But it is a secondary good, and pursuing it directly damages the primary one, which is the freedom to be among others without being obliged to them.\n\nConsider what a city distinctively offers. It is not community; villages supply community, thickly, and at a price their inhabitants understand very well. What the city supplies is co-presence without accountability. To walk a crowded street is to be surrounded by people who see you and owe you nothing, and to whom you owe nothing beyond the small courtesies of passage. You may be observed without being addressed, present without being enrolled. This is a rare and underdescribed freedom, and it is the reason that people who could afford to live anywhere pay considerable sums to live among strangers.\n\nHere the objection presents itself, and it is not a weak one. Surely a square where nobody speaks to anybody is exactly the desolation the critics deplore. The programmed plaza hums with life; the unprogrammed one sits empty in the wind. Am I not defending failure and calling it liberty?\n\nI am not, and the reply requires a distinction that the debate almost never draws: between the empty and the unobliged. A plaza is dead when nobody chooses to be there. It is alive when many people are there, most of them doing nothing in particular, in the easy presence of one another. Liveliness is not interaction; it is voluntary presence. This is why the best-loved public spaces in any city are conspicuously under-programmed — a flight of steps, an embankment wall, the shaded edge of a park — places whose entire offering is somewhere to sit and something to look at, the something being chiefly each other.\n\nProgramming fails in a specific way, and the failure is worth naming precisely. It converts occupancy into attendance. The festival draws a crowd that came for the festival and departs with it; the square was busy for an afternoon and never became anyone’s, because there was nothing to do there except the thing on offer. Worse, programming establishes a standard of legitimate use, and a standard of legitimate use is the beginning of exclusion. Once a space is for something, whoever is not doing that thing is loitering, and someone will eventually be asked to move along on grounds that no one had to state before the space acquired a purpose.\n\nSo the prescription I would offer is modest and mostly negative. Seats that do not face a stage. Entrances on several sides. Sun in winter and shade in summer. No required activity. And above all a settled tolerance for people whose presence serves no purpose that an official could write down — the idle, the early, the unhurried, the merely watching. A city that cannot host the purposeless has not built a public space at all. It has built a venue, and a venue is a place you are admitted to, not a place you belong.',
    questions: [
      {
        question: 'Which of the following best states the passage’s central claim?',
        options: [
          'Public space exists chiefly to permit voluntary co-presence among strangers, a good that programming for interaction undermines.',
          'Public spaces fail when planners neglect to program them with sufficient activity.',
          'Cities should abandon the attempt to design public space deliberately.',
          'Community is the highest good a city can offer to its residents.',
        ],
        correctAnswer: 0,
        explanation:
          'The author names the primary good as "the freedom to be among others without being obliged to them," redefines liveliness as "voluntary presence," and argues that programming "converts occupancy into attendance." The option blaming insufficient programming is the planners’ theory the passage sets out to refute. Abandoning design overshoots: the closing paragraph offers a design prescription, negative but explicit. Elevating community reverses the argument, which contrasts the city’s offer with the thick community of villages.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'By "liveliness is not interaction; it is voluntary presence," the author most nearly means that:',
        options: [
          'quiet spaces are in all cases preferable to busy ones',
          'a space succeeds when strangers are encouraged to speak with one another',
          'a space succeeds when people choose to be there, whether or not they engage each other',
          'the number of people present is the only meaningful measure of a space’s success',
        ],
        correctAnswer: 2,
        explanation:
          'The sentence answers the objection about desolation by separating two things the debate conflates: a plaza is dead "when nobody chooses to be there" and alive when many are present "doing nothing in particular." Encouraging conversation is precisely the interaction standard being rejected. A blanket preference for quiet misreads an author who admires crowded streets and well-used steps. Treating headcount as the only measure is half-right about presence and wrong about the qualifier that makes it work, which is that the presence be chosen.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
      {
        question: 'The description of the festival crowd that "departs with it" functions primarily to:',
        options: [
          'show that temporary events cost less than permanent construction',
          'distinguish attendance, which programming produces, from occupancy, which it does not',
          'argue that public celebrations ought to be discouraged in cities',
          'concede that programmed spaces achieve the author’s own preferred outcome',
        ],
        correctAnswer: 1,
        explanation:
          'The example is introduced to name a specific failure — programming "converts occupancy into attendance" — and the crowd that arrives for the event and leaves with it demonstrates busyness that never becomes belonging. Reading it as a concession reverses the paragraph’s purpose. Discouraging celebrations is stronger than anything the author says; the complaint is about programming as a governing theory of space, not about festivals as such. Cost never enters the passage.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most STRENGTHEN the author’s claim that programming a space begins the process of exclusion?',
        options: [
          'Programmed squares attract a larger share of visitors from outside the immediate neighborhood.',
          'Cities that program their squares spend more on maintenance than those that do not.',
          'Surveys find that most people enjoy watching performances in public squares.',
          'Removals of people from public squares increase after a square is assigned an official use, and those removed are typically doing nothing that is prohibited.',
        ],
        correctAnswer: 3,
        explanation:
          'The author’s claim is that once a space is "for something," anyone not doing that thing becomes a loiterer and "someone will eventually be asked to move along." A rise in removals of people breaking no rule, timed to the assignment of an official use, is that predicted mechanism observed. Maintenance costs and enjoyment of performances bear on the expense and appeal of programming, not on exclusion. A wider catchment of visitors is at most ambiguous and does not speak to who is pushed out.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A parks department replaces a lawn’s scattered benches with a tiered seating bowl facing a new performance stage. Based on the passage, the author would most likely predict that:',
        options: [
          'the park will at last achieve the conviviality its designers intended',
          'the park will be used more heavily on every day of the week',
          'the park will fill when something is staged and stand empty otherwise, because the seating now supplies a purpose in place of a place',
          'the change will make little difference, since seating arrangements do not much affect how space is used',
        ],
        correctAnswer: 2,
        explanation:
          'The prescription calls for "seats that do not face a stage" and "no required activity," and the festival example predicts exactly this pattern: a crowd that comes for the event and leaves with it, occupancy replaced by attendance. Predicting uniform heavier use ignores that prediction. Conviviality achieved is the designers’ hope the passage argues against. Dismissing seating as immaterial contradicts an author whose entire prescription is a list of physical arrangements.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward planners who seek to "activate" public space is best characterized as:',
        options: [
          'critical of their method while granting the value of the good they pursue',
          'wholly dismissive of their competence and their motives',
          'neutral toward a controversy the author regards as unresolved',
          'supportive, provided that programming is applied more consistently',
        ],
        correctAnswer: 0,
        explanation:
          'The author concedes early that "the good these designers pursue is real" and that sociability is "a genuine human need," then argues that pursuing it directly damages a prior good. That is disagreement with a method, not contempt for the people using it. Wholesale dismissal overshoots the concession. Neutrality is impossible to square with a passage that ends in a prescription. Endorsing more consistent programming reverses the position outright.',
        skill: 'tone',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-soc2-05',
    section: 'cars',
    discipline: 'sociology of work and time',
    title: 'The Fragment and the Block',
    needsReview: true,
    passageText:
      'The universal complaint of the present moment is that we are busier than we have ever been. The researchers who tally hours keep patiently answering that we are not: by their reckoning, time away from paid work has held steady or grown across the decades they can measure. The complainants are thus informed that they are mistaken about the texture of their own lives, an instruction they sensibly decline to accept. I think both parties are right, and that they are counting different things.\n\nThe tally counts hours. What has changed is not the number of hours but their shape. Grant the researchers every hour they claim. What has been lost is the block — the long, unclaimed, uninterruptible stretch that belongs to no one else and can be spent without negotiation. Time now arrives shredded: twenty minutes here, forty there, each fragment liable to be recalled without notice by a message that everyone agrees is not really work but that everyone also agrees must be answered.\n\nShape matters because human goods do not all consume time in the same way. Some scale roughly with the total: rest, more or less, and the ordinary pleasures of doing nothing. Others require contiguity and cannot be assembled from fragments at all. Learning an instrument, following a difficult argument to the place where it stops being difficult, building something that must be held whole in the mind while it is being built — these need not merely hours but hours that adjoin one another. A person with four hours in one piece and a person with four hours in twelve pieces do not have the same afternoon. The first can undertake a project. The second can only perform tasks.\n\nThe objection I hear most often is that this is a complaint about self-discipline dressed as social analysis. The fragmentation is self-inflicted; the device is in your own pocket; put it down and the block reassembles. There is something to this, and I would not want to be heard denying it. Attention is a capacity that can be trained and squandered, and a good deal of shredding is voluntary.\n\nBut the objection mistakes availability for choice. The decisive change is not that interruption became possible. It is that reachability became a condition of standing — in employment above all, but in friendship and family too. The worker who declines to be reachable is not quietly exercising a preference; he is visibly declining, and the visibility is the point. This is why being on call is not a quantity of work at all. It is a claim on time not spent working. An hour that might be taken is already not fully one’s own, and it does its damage whether or not the call ever comes. Precisely this is what the tally cannot see: the hour is recorded as leisure and lived as standby.\n\nThe consequence is that the reforms most often demanded are aimed slightly off target. Fewer hours, more days, additional flexibility — each adds to a total that was never the scarce thing. What makes time one’s own is neither its length nor its emptiness but the absence of anyone else’s option on it. The useful demand is therefore for defended blocks: stretches in which the claim is suspended, and, just as importantly, known by everyone to be suspended, so that declining costs nothing because there was nothing to decline. Absent that guarantee, an extra day of holiday purchases mainly the appearance of relief, and the appearance is what people are, quite accurately, complaining about.',
    questions: [
      {
        question: 'The passage’s central claim is that:',
        options: [
          'workers today enjoy substantially fewer leisure hours than workers of earlier generations',
          'complaints about busyness are best explained by the poor personal discipline of people with devices',
          'what has changed about time is not its quantity but its shape, since contiguous unclaimed blocks have become scarce',
          'researchers who tally time use have made errors in their measurement of leisure',
        ],
        correctAnswer: 2,
        explanation:
          'The author grants the tally outright — "Grant the researchers every hour they claim" — and locates the change elsewhere: "What has been lost is the block," the long uninterruptible stretch. Asserting fewer hours is the claim the passage sets aside. Accusing the researchers of error contradicts the concession that both parties are right. Self-discipline is the objection the author partly accepts and then answers by arguing that reachability is a condition of standing rather than a personal failing.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The remark that both parties "are counting different things" functions primarily to:',
        options: [
          'reframe an apparent dispute about facts as a disagreement about which unit of time matters',
          'concede that the complainants have exaggerated the difficulty of their situation',
          'dismiss time-use research as methodologically unsound',
          'introduce evidence showing that leisure hours have increased',
        ],
        correctAnswer: 0,
        explanation:
          'The sentence resolves a standoff — researchers say hours are steady, people say they are overwhelmed — by proposing that hours are the wrong unit and shape is the right one, which is the move the rest of the passage develops. Dismissing the research contradicts the explicit grant of every hour claimed. Conceding exaggeration reverses the author, who says the complainants "sensibly decline" the instruction that they are mistaken. The line introduces a reframing, not evidence.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'The passage implies that the difference between four hours in one piece and four hours in twelve pieces matters most for:',
        options: [
          'physical rest and recovery from fatigue',
          'the total quantity of leisure a person can be said to enjoy',
          'activities that can be paused and resumed at no cost',
          'undertakings that must be held whole while they are built and so cannot be assembled from fragments',
        ],
        correctAnswer: 3,
        explanation:
          'The author separates goods that "scale roughly with the total," naming rest among them, from those that "require contiguity" — learning an instrument, following an argument to where it stops being difficult, building what must be "held whole in the mind." Rest is the explicit example on the wrong side of that line. Total quantity is identical in both cases by construction, so it cannot be what differs. Activities that pause without cost are precisely the ones fragmentation does not harm.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s claim that being on call damages an hour whether or not the call arrives?',
        options: [
          'Most workers report that they are contacted outside working hours only rarely.',
          'Workers who are on call but are never actually contacted pursue long-horizon projects at the same rate as workers with no on-call obligation at all.',
          'On-call obligations are far more common in some industries than in others.',
          'Employers who impose on-call obligations tend to offer higher pay in exchange.',
        ],
        correctAnswer: 1,
        explanation:
          'The claim is that the mere option on an hour degrades it, and the passage identifies long-horizon undertakings as exactly what fragmented time cannot support. Uncontacted on-call workers pursuing such projects at unchanged rates is the predicted damage failing to appear where the theory says it must. Rarity of contact does not touch the claim, since the author says the harm occurs "whether or not the call ever comes." Industry variation and compensating pay concern the distribution and price of the obligation, not its effect on the hour.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'An employer concerned about burnout adds three floating holidays that employees may take at any time with a manager’s approval. Based on the passage, the author would most likely respond that:',
        options: [
          'the benefit adds to a total that was never scarce while suspending no one’s claim, and so purchases mainly the appearance of relief',
          'the benefit should work, because burnout tracks the total number of leisure hours',
          'holiday policy has no bearing on how workers experience their time',
          'the policy will succeed only if managers approve the requests promptly',
        ],
        correctAnswer: 0,
        explanation:
          'The closing paragraph anticipates this case almost exactly: "Fewer hours, more days, additional flexibility — each adds to a total that was never the scarce thing," and "an extra day of holiday purchases mainly the appearance of relief" absent a guarantee that the claim is suspended and known to be. Requiring approval leaves the option firmly in someone else’s hands. The option tying burnout to total hours reverses the thesis. Declaring policy irrelevant overshoots an author who ends by specifying which policies would help.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In context, "recorded as leisure and lived as standby" most nearly means that:',
        options: [
          'workers systematically misreport their own time when surveyed',
          'paid work and leisure have become indistinguishable in economic terms',
          'an hour that counts as free is not experienced as free while someone else retains an option on it',
          'standby time ought to be legally reclassified and compensated as work',
        ],
        correctAnswer: 2,
        explanation:
          'The phrase closes the argument that "an hour that might be taken is already not fully one’s own," explaining why a measure built on hours registers the time as leisure while the person living it experiences a standing claim. Misreporting locates the problem in the respondent rather than in the unit of measurement. Collapsing work and leisure entirely overstates a passage that keeps them distinct precisely to show how standby falls between them. Legal reclassification is a policy proposal the author never advances.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-soc2-06',
    section: 'cars',
    discipline: 'surveillance and social control',
    title: 'Occasions for Restraint',
    needsReview: true,
    passageText:
      'We still describe monitoring in the vocabulary of the watchtower. The inspector who may or may not be looking, the inmate who cannot know, the eye eventually installed inside the head of the watched — a powerful image, and one that has outlived its accuracy. The watchtower works by being seen. The systems that govern conduct now work best when they are forgotten entirely.\n\nThe distinction I want is between deterrence and prevention, and it is sharper than it looks. Deterrence addresses a will. It raises the price of an act the agent remains free to commit, and it works only if he knows the price, which is why deterrent regimes advertise themselves: the posted penalty, the visible patrol, the notice on the door. Prevention does not address the will at all. It arranges the world so that the act is simply unavailable — the door that will not open, the payment that will not clear, the message that was never permitted to send. Prevention requires no awareness on the part of the person prevented, and it produces no discipline, because there is nothing offered to be internalized.\n\nThe panoptic account taught us to expect a certain kind of subject: watchful, anxious, self-policing, carrying the inspector inside. What the preventive regime produces is stranger: in the zones where it operates, people are notably unpoliced in their souls and merely unable to act. They have not been made obedient. They have been made ineffective, a different achievement and a quieter one.\n\nI do not claim the older account has been refuted. It still describes the school, the ward, the probation interview — every setting where a person is watched by another who might be persuaded, deceived, or defied. My claim is narrower: the disciplinary model is no longer the general case, and treating it as one makes us miss what is distinctive about the arrangements now spreading.\n\nAt this point the natural objection arrives. Is prevention not simply better? A world in which the harm cannot occur seems plainly preferable to one in which it is merely punished afterward, and nobody eulogizes the deterrent value of an unlocked door. For a wide class of harms I accept this without reservation, and would resist any argument that treated preventable catastrophe as the price of moral seriousness.\n\nBut the acceptance carries an unpriced cost: prevention removes the occasion for restraint. A person who has never been in a position to take what was not his has not thereby become honest, because honesty is a disposition exercised in the presence of an opportunity. Eliminate the opportunities and we do not manufacture virtue. We manufacture a population about whom nothing can be known — including by its own members, who have never had occasion to find out what they would do.\n\nTrust is the inference from past restraint to future restraint. Remove the occasions and the evidence disappears; remove the evidence and institutions must substitute still more prevention, having nothing else to go on. The system feeds itself: it consumes the grounds for trusting people and then cites the absence of grounds as its justification.\n\nSo the complaint worth pressing is not the familiar one about privacy, which imagines a boundary drawn around information and misses what is happening. The question to ask of any preventive arrangement is what it teaches us about the people subject to it. A society whose honest answer is "nothing" has bought safety by surrendering the ability to distinguish the trustworthy from the merely constrained — and it will discover, when it needs that ability, that it has no way left to acquire it.',
    questions: [
      {
        question: 'Which of the following best captures the passage’s main argument?',
        options: [
          'Surveillance has become so pervasive that privacy can no longer be meaningfully protected.',
          'Contemporary control increasingly works by preventing acts rather than deterring them, and its deepest cost is the loss of occasions on which trustworthiness could be shown.',
          'The disciplinary model of internalized surveillance remains the best available account of modern institutions.',
          'Preventing harm is in every case preferable to punishing it after the fact.',
        ],
        correctAnswer: 1,
        explanation:
          'The passage draws the deterrence-prevention distinction, argues that prevention "requires no awareness" and "produces no discipline," and identifies the unpriced cost as the removal of "the occasion for restraint," which destroys the evidence trust depends on. The privacy framing is explicitly set aside as missing what is happening. Defending the disciplinary model reverses the author, who says it is "no longer the general case." The blanket superiority of prevention is the objection the author accepts only for "a wide class of harms" before naming its cost.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The references to "the door that will not open, the payment that will not clear" serve primarily to:',
        options: [
          'catalogue the most frequent failures of automated systems',
          'suggest that preventive measures are chiefly experienced as inconveniences',
          'argue that new technology has made deterrence considerably more effective',
          'supply concrete instances of control that operates without engaging the agent’s will',
        ],
        correctAnswer: 3,
        explanation:
          'The examples appear inside the definition of prevention, which "does not address the will at all" but "arranges the world so that the act is simply unavailable," and each names a capability withdrawn rather than a penalty threatened. Reading them as evidence for improved deterrence inverts the very distinction they illustrate. Treating them as system failures misreads the passage, in which the systems are working as designed. Inconvenience is a reaction the author never discusses.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'The passage suggests that a preventive arrangement differs from a deterrent one in that a preventive arrangement:',
        options: [
          'need not be noticed by the person it governs in order to work',
          'requires a more severe penalty in order to be effective',
          'produces subjects who police themselves more thoroughly than before',
          'can be applied only to relatively minor offenses',
        ],
        correctAnswer: 0,
        explanation:
          'Deterrence "can only work if he knows the price," which is why such regimes advertise themselves, whereas prevention "requires no awareness on the part of the person prevented" and works best "when they are forgotten entirely." Thorough self-policing is what the panoptic account predicts and what the author says the preventive regime conspicuously fails to produce. Prevention involves no penalty at all, so severity is beside the point. Nothing in the passage restricts prevention to minor offenses.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s claim that prevention destroys the grounds for trust?',
        options: [
          'Comprehensive preventive systems are expensive to build and maintain.',
          'People subject to preventive systems commonly report resenting them.',
          'People who have lived for years under comprehensive preventive systems show the same restraint, readily observable, when placed in settings where nothing prevents them.',
          'Institutions that rely heavily on prevention also invest in training their employees.',
        ],
        correctAnswer: 2,
        explanation:
          'The claim is that removing occasions removes the evidence from which trust is inferred, leaving institutions with nothing to go on. Observable restraint in unconstrained settings after years under prevention is exactly such evidence, and its availability would show that the grounds for trust survive after all. Cost, resentment, and training budgets speak to the burdens and accompaniments of preventive systems while leaving the evidentiary claim untouched.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A university replaces proctored examinations with software that makes it technically impossible for students to consult unauthorized material during a test, and recorded cheating falls to zero. Based on the passage, the author would most likely conclude that:',
        options: [
          'the university has succeeded in cultivating academic honesty among its students',
          'determined students will inevitably find a way to circumvent the software',
          'proctoring was the more humane form of surveillance and ought to be restored',
          'the university now knows less about which of its students are honest than it did before',
        ],
        correctAnswer: 3,
        explanation:
          'On the author’s account honesty is "a disposition exercised in the presence of an opportunity," so removing the opportunity yields "a population about whom nothing can be known" rather than a more honest one — which is why the option claiming cultivated honesty is precisely the inference the passage forbids. Circumvention is a practical prediction the passage never makes and one that would concern effectiveness rather than knowledge. Calling proctoring more humane attributes to the author a comparison he does not draw; his contrast is between what each arrangement reveals, not how kindly it treats anyone.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward the claim that preventing harm is better than punishing it afterward is best described as:',
        options: [
          'dismissive, since the author regards prevention as illegitimate in all its forms',
          'accepting across a wide range of harms, while insisting that the acceptance carries a cost that goes unnoticed',
          'undecided, since the author declines to take any position on the question',
          'enthusiastic, treating prevention as the signal achievement of modern institutions',
        ],
        correctAnswer: 1,
        explanation:
          'The author writes that "for a wide class of harms I accept this without reservation" and would resist treating preventable catastrophe as the price of moral seriousness, then immediately adds that "the acceptance carries a cost that goes unpriced." That is a genuine concession followed by a qualification, not a rejection. Blanket dismissal contradicts the concession. Indecision misses the clearly argued cost. Enthusiasm ignores the passage’s closing warning about a self-feeding system.',
        skill: 'tone',
        needsReview: true,
      },
    ],
  },
]
