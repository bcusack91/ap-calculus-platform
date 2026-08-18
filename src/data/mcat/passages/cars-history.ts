import type { MCATPassage } from '../types'

/**
 * MCAT CARS — History / Historiography pool.
 *
 * Six original, argument-driven passages (500-600 words each) written in a
 * single historian's voice, each advancing a thesis that is defended against a
 * stated objection: historiography (why interpretations change), historical
 * memory and monuments, the archive and its silences, periodization and
 * narrative, contingency and counterfactual reasoning, and the history of
 * medicine as a humanities argument.
 *
 * No outside knowledge is required: events are referenced generically and no
 * item turns on a date, treaty, or named figure. Difficulty comes from
 * compressed reasoning and from distractors built to AAMC molds (too extreme,
 * half-right, true-but-irrelevant, reversal, attributed-view-as-author's-own,
 * correct-but-non-responsive).
 *
 * AI-authored; needsReview is true pending SME review.
 */
export const CARS_HISTORY_PASSAGES: MCATPassage[] = [
  {
    id: 'cars-hist-01',
    section: 'cars',
    discipline: 'historiography',
    title: 'The Question Behind the Question',
    needsReview: true,
    passageText:
      'Every generation rewrites the history it inherited, and the standard explanation for this is the discovery of new material: a cache of letters surfaces, a ministry declassifies its files, and the account must be revised. The explanation is respectable and almost entirely inadequate. Archives grow slowly and interpretations turn quickly; whole fields have been overturned twice within a single scholar’s working life while drawing on the same shelf of documents that served the consensus they replaced. If evidence were the engine, revision would move at the pace of discovery. It does not.\n\nWhat changes is the question. Evidence is mute until it is interrogated, and it answers only what it is asked. A parish register recording births, marriages, and burials is, to a historian pursuing the quarrels of princes, so much background noise—a page to be skimmed for a stray name. To a historian asking how large households were, at what age people married, and how often they moved, the same register is not background but the entire foreground. Nothing in the ink changed. The question changed, and with it the document’s rank, its relevance, and its meaning.\n\nThis observation is often taken as a confession. If the questions historians ask are supplied by the preoccupations of their own moment—by anxieties about family, work, empire, or belief that belong to the present and not to the period studied—then history looks less like inquiry than like autobiography conducted at a safe distance. The charge deserves a better answer than the shrug it usually receives, because as stated it is correct. Our questions do come from where we stand. There is nowhere else for them to come from.\n\nThe answer lies in a distinction the charge runs together: between the origin of a question and the discipline of its answer. Where a question comes from has no bearing whatever on whether the answer to it is true. A historian may be driven into the parish registers by a wholly contemporary worry that family life is dissolving, and the registers may reply that households in his period were smaller than his theory requires, or that they were the same size for two centuries, or that his very category of household does not survive contact with the sources. The present supplies the agenda. The evidence supplies the verdict. To conclude from the motivated question that the answer must be motivated too is to mistake an interest for a finding.\n\nThere is a further point that critics of the present-minded rarely notice. The alternative on offer is not questionlessness but concealment. The historian who insists he brings no question to the archive is not innocent of one; he has inherited the previous generation’s question so completely that it has stopped looking like a question at all. It is precisely the unnoticed agenda that cannot be argued with, because it is never placed on the table where a reader might refuse it.\n\nStill, the defense has a limit, and the limit is worth stating plainly, since a doctrine holding that any question is as good as any other would license everything. A question can indeed be corrupt, but the mark of corruption is not its origin; it is its shape. A question framed so that only one answer may be given—so that the sources are permitted to supply detail but never dissent—has delivered its finding before the reading has begun. The demand we may fairly make of historians, then, is not that they ask from nowhere, which is impossible, but that they ask questions the documents remain free to answer with a no.',
    questions: [
      {
        question: 'Which of the following best expresses the central thesis of the passage?',
        options: [
          'Historical accounts are revised principally because previously unavailable documents come to light.',
          'Because historians’ questions arise from present concerns, historical conclusions are ultimately expressions of the historian’s own moment.',
          'Interpretation changes chiefly because questions change, and a question’s present-day origin does not compromise an answer the evidence remains free to reject.',
          'Historians should suppress contemporary preoccupations so that the sources may speak without interference.',
        ],
        correctAnswer: 2,
        explanation:
          'The author denies that discovery drives revision ("If evidence were the engine, revision would move at the pace of discovery. It does not"), locates the engine in the question, and then defends that view by separating "the origin of a question" from "the discipline of its answer." The option naming new documents as the principal cause is the explanation the author calls "almost entirely inadequate." The option concluding that history is autobiography states the objection the author raises in order to answer it, not the author’s own view. The option urging suppression of present concerns is the posture the author calls "concealment," since such a historian has merely inherited an older question without noticing it.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The discussion of the parish register in the second paragraph functions primarily to:',
        options: [
          'illustrate how identical evidence acquires different significance depending on the question brought to it',
          'demonstrate that demographic sources are more reliable than political ones',
          'offer an example of the newly discovered material that forces reinterpretation',
          'concede that some documents remain uninformative no matter how they are questioned',
        ],
        correctAnswer: 0,
        explanation:
          'The register is introduced to show that the same page is "background noise" under one question and "the entire foreground" under another, with the author underscoring that "nothing in the ink changed." The comparison of source reliability is never made; the author ranks the document only relative to a question, not relative to other documents. Treating the register as newly discovered material reverses the example’s point, which depends on the document having been available all along. And the passage asserts the opposite of documentary muteness in principle: evidence "is mute until it is interrogated," implying interrogation is what makes it speak.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'The passage suggests that a historian who claims to bring no question of his own to the archive is:',
        options: [
          'practicing the only defensible form of historical neutrality',
          'likely to produce work that is unimaginative but methodologically sound',
          'guilty of the same corruption as a historian whose question admits only one answer',
          'operating under an inherited question so familiar that he no longer recognizes it as a question',
        ],
        correctAnswer: 3,
        explanation:
          'The author states that such a historian "is not innocent of one; he has inherited the previous generation’s question so completely that it has stopped looking like a question at all." Calling this defensible neutrality reverses the author, who treats the stance as concealment. The unimaginative-but-sound option is half-right in tone and wrong in substance: the author’s objection is not dullness but that an unnoticed agenda "cannot be argued with." Equating this historian with the framer of a one-answer question overreaches, since the passage defines corruption by a question’s shape, not by whether the questioner has noticed it.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'Which of the following findings, if true, would most WEAKEN the author’s account of why historical interpretations change?',
        options: [
          'Several fields have reversed their prevailing consensus twice within a single scholar’s career.',
          'A survey of major reinterpretations finds that each was immediately preceded by the opening of a previously sealed archive.',
          'Historians frequently disagree about which questions are worth asking.',
          'Parish registers have been used to answer questions their compilers never contemplated.',
        ],
        correctAnswer: 1,
        explanation:
          'The author’s claim is that revision outruns discovery, so evidence for a tight, consistent pairing of reinterpretation with newly opened archives restores the very explanation the author rejects. Rapid double reversals within one career are the author’s own supporting observation, not a challenge to it. Disagreement about worthwhile questions is compatible with either account of what drives revision and settles nothing. Registers answering unanticipated questions is a restatement of the parish-register illustration and therefore strengthens rather than weakens.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A literary scholar proposes to study a long-ignored genre of household account books on the ground that readers today care about the economics of domestic life. A critic replies that this motive taints the resulting scholarship. Based on the passage, the author would most likely respond that:',
        options: [
          'the critic is right, since scholarship driven by present concerns cannot reach reliable conclusions',
          'the scholar must first establish that the account books were valued by those who kept them',
          'the motive is irrelevant to the truth of the findings, provided the books remain able to contradict what the scholar expects',
          'the critic’s standard of untainted scholarship is unattainable, so no standard can survive',
        ],
        correctAnswer: 2,
        explanation:
          'The author’s principle is that "the present supplies the agenda" while "the evidence supplies the verdict," and the fair demand on a historian is to ask "questions the documents remain free to answer with a no." Endorsing the critic reverses that principle. Requiring proof that contemporaries valued the books introduces a criterion the passage never applies and would disqualify the parish-register work the author praises. The claim that no standard survives is too extreme: the author explicitly retains a standard, refusing to hold that "any question is as good as any other."',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In context, the author’s claim that a corrupt question permits the sources “to supply detail but never dissent” most nearly means that such a question:',
        options: [
          'allows evidence to enrich a conclusion already fixed while blocking evidence that would overturn it',
          'obliges the historian to work from an unusually narrow body of surviving documents',
          'encourages historians to quarrel with one another instead of with the sources',
          'treats a historian’s present-day motives as automatically disqualifying',
        ],
        correctAnswer: 0,
        explanation:
          '"Detail" is elaboration that leaves the conclusion intact; "dissent" is the refusal the author demands sources be permitted to make, since a corrupt question "has delivered its finding before the reading has begun." Narrowness of the surviving record is a different problem and is never raised here. Quarrels among historians appear nowhere in the sentence. The claim about motives being disqualifying is precisely the position the author has just rejected by distinguishing a question’s origin from its shape.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-hist-02',
    section: 'cars',
    discipline: 'historical memory and commemoration',
    title: 'The Argument in Bronze',
    needsReview: true,
    passageText:
      'Public statues are habitually discussed as though they were documents, and the confusion has poisoned an argument that ought to be simple. A document reports. It asserts that something occurred, and it may be filed, contradicted, or set beside a better one. A monument does nothing of the sort. It is written in the present tense and the imperative mood, and what it says is not “this happened” but “admire this.” A community that erects one is not recording a fact about the past. It is making a claim about itself.\n\nOnce the distinction is seen, the most popular defense of contested monuments collapses. To remove a statue, we are told, is to erase history. But nothing is erased. The figure commemorated remains in every book, catalogue, and syllabus; the archive is untouched; scholarship proceeds as before, and is often improved by the controversy. What removal withdraws is not a fact but an endorsement, and the loss of an endorsement is not the loss of a fact. Indeed a community that ceased to honor a figure would ordinarily know more about him than it did while he stood unnoticed, since the argument over his removal is itself an education that his quiet presence had made unnecessary.\n\nYet the case for removal is frequently argued just as badly, and its errors deserve equal attention. Campaigners often speak as though a monument’s meaning had been poured into it at the foundry and fixed there permanently—as though the intention of the subscribers who paid for it were still, a century on, the thing the object says. Meanings are not so obedient. A figure raised to assert one group’s dominance may, through decades of indifference, subside into street furniture, a landmark where people arrange to meet; and a statue erected in bland civic piety may acquire, through some later quarrel, a ferocity its sponsors never imagined. To demand removal strictly on the ground of original intent is to accept the preservationist’s premise—that the object carries one settled meaning—while disputing only what that meaning is.\n\nThe better frame dispenses with the founders altogether. A monument tells you less about the person raised on the plinth than about the people who keep him there. Every generation that leaves a statue standing has, in effect, re-erected it, and the silence of that re-erection does not make it any less a choice. Inheritance performed by inaction is still performance. This is why the appeal to leaving things as we found them is not the neutral option it advertises itself to be. It is the single option that secures the honor while denying that anyone is doing the honoring.\n\nFramed this way, a community faces two honest possibilities and one dishonest one. It may say: we still mean this, and here is our reason. It may say: we no longer mean it, and here is what will stand in its place. What it cannot honestly say is that the question does not arise, because the question arises every morning that the bronze is still there.\n\nThe final objection is that all of this politicizes a public square that ought to be above politics. But the square was never above politics. Its apparent neutrality is merely the condition of an argument won long enough ago to have stopped feeling like an argument, and quiet of that kind is not the absence of a claim. It is a claim that nobody has recently bothered to contest.',
    questions: [
      {
        question: 'The central claim of the passage is that:',
        options: [
          'contested monuments should be removed when the intentions of those who erected them are found to be objectionable',
          'because a monument asserts a present endorsement rather than records a fact, keeping or removing one is an unavoidable choice a community should make openly',
          'removing a monument erases history and should therefore be resisted in all but the most extreme cases',
          'the meanings of monuments shift so thoroughly over time that public debate about them cannot be productive',
        ],
        correctAnswer: 1,
        explanation:
          'The passage builds from the assertion that a monument speaks "in the present tense and the imperative mood" to the conclusion that "every generation that leaves a statue standing has, in effect, re-erected it," so that a community must either say "we still mean this" or "we no longer mean it." Grounding removal in the sponsors’ intentions is the argument the author criticizes as sharing the preservationist premise. The erasure defense is explicitly said to collapse. The claim that debate cannot be productive is too extreme and contradicts the author’s remark that controversy is itself an education.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward those who argue that removing a statue erases history is best described as:',
        options: [
          'sympathetic to their motives though doubtful they can succeed',
          'openly contemptuous of their bad faith',
          'detached and unwilling to take a position',
          'unpersuaded, but no harsher than toward the opposing camp',
        ],
        correctAnswer: 3,
        explanation:
          'The author says their defense "collapses," then immediately turns to say that "the case for removal is frequently argued just as badly, and its errors deserve equal attention," dispensing criticism evenly and without heat. Nothing in the passage credits their motives while doubting their prospects. Contempt and imputed bad faith overshoot a tone that stays analytic. Detachment is ruled out by the plainly evaluative verdicts the author delivers on both sides.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'The passage implies that a statue’s continued presence in a public square is best understood as:',
        options: [
          'an act of commemoration performed anew by each generation that declines to remove it',
          'a historical record whose removal would diminish public knowledge of the figure depicted',
          'a neutral inheritance that acquires political meaning only once it is challenged',
          'evidence that the original subscribers still exert influence over public life',
        ],
        correctAnswer: 0,
        explanation:
          'The author states directly that each generation leaving a statue standing "has, in effect, re-erected it" and that "inheritance performed by inaction is still performance." Treating the statue as a record to be preserved is the document confusion the passage opens by dismantling, and the author argues that knowledge typically increases during a removal controversy. Calling the inheritance neutral until challenged reverses the claim that the appeal to leaving things as found "is not the neutral option it advertises itself to be." And the author’s reframing explicitly "dispenses with the founders altogether."',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'The third paragraph, which criticizes campaigners for removal, functions primarily to:',
        options: [
          'withdraw the author’s earlier objection to the erasure argument',
          'concede that monuments should generally be left where they stand',
          'show that both camps rest on a shared mistaken premise, preparing the reframing that follows',
          'establish that a monument’s meaning is determined by the intentions of those who paid for it',
        ],
        correctAnswer: 2,
        explanation:
          'The paragraph ends by noting that arguing from original intent "is to accept the preservationist’s premise—that the object carries one settled meaning—while disputing only what that meaning is," and the next paragraph opens the alternative frame. Nothing is withdrawn: the erasure argument remains collapsed. No general presumption in favor of leaving statues in place is granted; the author instead insists the question arises daily. The paragraph asserts the opposite of foundry-fixed meaning, observing that "meanings are not so obedient."',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most STRENGTHEN the author’s claim that a monument asserts rather than records?',
        options: [
          'Figures commemorated in public squares are also treated at length in academic scholarship.',
          'Communities commissioning monuments routinely omit documented facts about the honoree that would complicate the tribute.',
          'Public monuments are considerably more expensive to maintain than archival collections.',
          'Surveys find that most passersby cannot identify the figure depicted in a statue they walk past daily.',
        ],
        correctAnswer: 1,
        explanation:
          'A record aims at completeness; a tribute selects. Evidence that commissioning communities systematically omit complicating facts shows the object is built to praise rather than to report, which is exactly the assert-versus-record distinction. The point about academic scholarship is accurate and supports a different claim—that nothing is erased—so it is non-responsive to this stem. Maintenance costs bear on neither claim. Widespread failure to identify the figure would, if anything, cut against the notion that the statue is actively asserting anything.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A university has for a century awarded a prize named for a benefactor whose conduct is now widely condemned. Applying the author’s reasoning, the university should recognize that:',
        options: [
          'renaming the prize would erase the benefactor from the institution’s history',
          'the decision turns on what the prize’s founders intended the name to signify',
          'retaining the name is the neutral course, since it alters nothing',
          'continuing to award the prize under that name is itself a present endorsement requiring a defense',
        ],
        correctAnswer: 3,
        explanation:
          'The author’s framework converts every act of retention into a present assertion: the community may say "we still mean this, and here is our reason," but may not claim the question does not arise. The erasure worry is the argument the passage dismantles, since the record survives renaming. Founders’ intentions are precisely what the author’s better frame "dispenses with." Calling retention neutral repeats the option the author says only appears neutral while quietly securing the honor.',
        skill: 'application',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-hist-03',
    section: 'cars',
    discipline: 'archival theory',
    title: 'The Silence of the Ledger',
    needsReview: true,
    passageText:
      'An archive presents itself as an accumulation, and the metaphor flatters everyone who uses it. Accumulation suggests a sediment laid down impartially by time, out of which a diligent researcher may extract whatever the past happened to leave behind. But archives are not sediment. They are residue—the by-product of institutions that kept records because keeping them served a purpose. Taxes were assessed, so property was written down. Debts were enforced, so obligations were written down. Crimes were prosecuted, punishments administered, licenses granted and revoked, and all of it written down. What survives is not what mattered but what somebody had a reason to record.\n\nThe consequence is a distortion so pervasive that it is easily mistaken for the past itself. A person of small property enters the written record chiefly at moments of friction: when accused, when indebted, when hospitalized, when denounced by a neighbor. Assemble such a life from the documents and you produce a biography composed almost entirely of bad days—a sequence of crises with nothing in between, because years of unremarkable competence generated no paper at all. The wealthy, by contrast, appear continually and on their own terms, in letters they chose to preserve and portraits they commissioned. The archive does not merely omit the poor. It enters them under a hostile description.\n\nFrom this many conclude that the history of those excluded from record-keeping cannot be written, and that attempts to write it are wishful invention dressed as scholarship. The worry is not foolish. A gap in the sources is an accommodating thing, and a historian in search of a sympathetic subject can hear in it very nearly anything she likes.\n\nBut the inference goes wrong at a specific point. It assumes that absence carries no information, when in fact a silence has a shape, and that shape is determined by the same institutional purposes that produced the record. If a group appears in the documents only when accused, that pattern is not a hole in our knowledge; it is knowledge—about which behaviors were policed, about who could summon the machinery of writing against whom, about the conditions under which a person became visible to authority at all. Reading a document against its purpose is not fabrication. It is inference from the document’s own logic, and it is testable in the ordinary way, since a claim about the shape of a silence predicts what other collections should and should not contain.\n\nHonesty requires conceding, however, that the vocabulary in which such work is advertised promises far more than the method delivers. We speak of recovering lost voices, and the phrase invites a reader to expect an interior life: what she believed, whom she loved, what she thought of her accusers. That is almost never what emerges. What emerges is a constraint—not what she thought, but what she could not do without generating a document. This is a humbler result than the advertising suggests, and a far more durable one, because it is anchored in the very features of the record that produced the silence rather than in the historian’s sympathy.\n\nOne caution remains, and it separates disciplined work from projection. Silences are not interchangeable. There is what was never written; there is what was written and later destroyed; there is what was written only in the words of an adversary. Each has a different cause and licenses a different inference. The historian who treats all three as one great absence has not confronted the archive’s limits. She has discovered in them a convenient screen on which to project a preferred past.',
    questions: [
      {
        question: 'Which of the following best states the passage’s main argument?',
        options: [
          'Archives are so thoroughly shaped by institutional purposes that the lives of the poor cannot be reconstructed at all.',
          'Historians should concentrate on the wealthy, whose records are abundant and self-authored.',
          'Recovering the inner lives of the excluded is the principal achievement of modern archival research.',
          'Because archives record what institutions needed, their silences are patterned evidence supporting disciplined inference, though not the recovery of interior lives.',
        ],
        correctAnswer: 3,
        explanation:
          'The author argues that archives are "residue" of institutional purpose, that "a silence has a shape" determined by that purpose and therefore yields real knowledge, and that what such work recovers is "a constraint" rather than an interior life. The claim that nothing can be reconstructed is the objection the author answers. Concentrating on the wealthy is never proposed and would abandon the method the author defends. Treating the recovery of inner lives as the field’s achievement is the overselling the author explicitly deflates.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The passage suggests that a biography of a poor person built solely from surviving archival documents would most likely:',
        options: [
          'be more trustworthy than a biography of a wealthy person, since it rests on official rather than self-serving sources',
          'misrepresent that life by consisting largely of episodes of crisis',
          'prove impossible to construct, since no relevant documents survive',
          'reveal the person’s beliefs more reliably than her material circumstances',
        ],
        correctAnswer: 1,
        explanation:
          'The author describes exactly this outcome: "a biography composed almost entirely of bad days—a sequence of crises with nothing in between." Preferring official records as more trustworthy reverses the argument, since the passage stresses that officialdom "enters them under a hostile description." The claim that no documents survive contradicts the premise that the poor do appear, at moments of friction. And the author insists that beliefs are what such records almost never yield, whereas constraints on action are what they do yield.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'The third paragraph, beginning “From this many conclude,” primarily serves to:',
        options: [
          'state the author’s own conclusion about the limits of archival history',
          'supply evidence for the claim that archives are residue rather than sediment',
          'introduce an objection whose force the author grants before answering it',
          'criticize historians who neglect the wealthy in favor of the poor',
        ],
        correctAnswer: 2,
        explanation:
          'The paragraph presents the view that such history "cannot be written," calls the worry "not foolish," and is followed by "But the inference goes wrong at a specific point"—the signature of a conceded objection answered. It is not the author’s conclusion, which is that patterned silence is itself knowledge. It offers no evidence for the residue claim, which was established in the opening paragraph from the purposes of record-keeping. And no complaint about neglecting the wealthy appears anywhere in the passage.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'A researcher studying a factory finds that individual workers are named in surviving company files only in disciplinary reports. Following the author’s method, the most defensible conclusion is that the files reveal:',
        options: [
          'what the firm considered worth policing and the conditions under which a worker became visible to management',
          'that the workforce was unusually uncooperative, since discipline dominates the record',
          'nothing usable, because a record this biased cannot support inference',
          'the workers’ own attitudes toward the factory, which can be read out of the reports',
        ],
        correctAnswer: 0,
        explanation:
          'The author’s method reads a document against its purpose to learn "which behaviors were policed" and "the conditions under which a person became visible to authority." Concluding that the workforce was uncooperative reads the record with the grain, mistaking the institution’s selection criteria for a fact about the workers. Declaring the files unusable repeats the objection the author rejects. Reading workers’ attitudes out of adversarial reports is the ventriloquism the author warns against when he says what emerges is a constraint, not an interior life.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s claim that reading against the grain is testable rather than merely speculative?',
        options: [
          'Institutions occasionally preserved records for reasons unconnected to enforcement.',
          'Historians disagree about which social groups suffered most from hostile record-keeping.',
          'Several bodies of destroyed records have been reconstructed from copies held in other collections.',
          'Predictions about which documents ought to exist elsewhere have consistently proved incapable of confirmation or disconfirmation by surviving collections.',
        ],
        correctAnswer: 3,
        explanation:
          'The author grounds testability in a specific mechanism: "a claim about the shape of a silence predicts what other collections should and should not contain." Showing that such predictions can never be checked removes the mechanism and leaves the inference unconstrained. Occasional non-enforcement records qualify the residue claim slightly but leave the testing procedure intact. Disagreement about which groups suffered most is a dispute about results, not about method. Reconstruction from copies held elsewhere is precisely the cross-collection checking the author invokes, so it supports the claim rather than undermining it.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward the phrase “recovering lost voices” is best described as:',
        options: [
          'approving, since it accurately names what archival method achieves',
          'critical of its overstatement while still endorsing the work it names',
          'dismissive of the entire enterprise the phrase describes',
          'indifferent, since terminology has no bearing on method',
        ],
        correctAnswer: 1,
        explanation:
          'The author says the phrase "promises far more than the method delivers" and invites false expectations of an interior life, yet immediately calls the humbler result "a far more durable one" and continues to defend reading against the grain. Approval of the phrase’s accuracy contradicts the charge of overselling. Dismissal of the enterprise reverses the author’s defense of the method. Indifference is ruled out because the author treats the vocabulary as actively misleading readers about what is being claimed.',
        skill: 'tone',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-hist-04',
    section: 'cars',
    discipline: 'periodization and historical narrative',
    title: 'The Tyranny of the Chapter Break',
    needsReview: true,
    passageText:
      'The past does not arrive divided into ages. It is continuous, and the names we give its stretches—an era of faith, an age of iron, a long century—are instruments manufactured for our own convenience. This ought to be uncontroversial, and in the abstract every historian assents to it. The difficulty is that instruments have a way of hardening into objects. A term invented to organize a lecture course is repeated until it appears to name something that was out there all along, waiting to be discovered, possessing edges of its own.\n\nThe harm is not merely that boundaries are arbitrary. It is that a named age arrives carrying a plot. To call a stretch of time an era is to imply that it began, matured, and ended, which is the shape of a life; and once that shape is in place, evidence is sorted to fit it. Material from the early decades is filed as anticipation. Material from the middle is flowering. Material from the end is decline, or, if it is inconveniently vigorous, survival—a holdover, a relic, something that ought by rights to have stopped. The vocabulary of periodization thus performs an argument while appearing merely to arrange, and the argument is the more effective for never being stated.\n\nThe obvious reply is that the alternative is worse. Nobody can think about an undivided flow; segmentation is the precondition of historical thought as such, and a scholar who refused all periods would produce not a purer history but no history at all. This is correct and should be conceded without reluctance. Periods also perform work that nothing else performs: they allow scholars to find one another. A dispute over whether an age began earlier than supposed is a genuine dispute, conducted in evidence, and it is possible only because a period exists to be argued over.\n\nGranting this leaves the objection standing in an altered form. The trouble is not division as such but the export of a division from the domain that justified it into domains that never did. A boundary drawn where a technology or a form of government plainly changed may be perfectly sound for those subjects and entirely invisible for others. Diets, dialects, devotions, and the rhythms of agricultural labor do not observe the frontiers of political history, and a person living across such a frontier may have noticed nothing whatever. When the boundary is imposed on those subjects regardless, evidence of continuity is recast as lag, and a practice that simply persisted is described as having stubbornly refused to end.\n\nThe remedy is neither abolition nor a better master scheme. It is plurality: to keep several incompatible periodizations in use at once, selecting among them according to the question at hand, and to treat with immediate suspicion any boundary that seems to answer every question equally well. Such a boundary is not an instrument. It is an ornament, sanctified by repetition, and its universal applicability is the surest sign that it is doing no work.\n\nThere is a practical test, available to any reader. Watch for the transition sentence—the paragraph in which one age gives way to another and the prose gathers momentum. That momentum is narrative pressure, not evidence. When a historian feels a period ending, the useful question is whether the sources have ended or merely the chapter.',
    questions: [
      {
        question: 'The main idea of the passage is best captured by which of the following?',
        options: [
          'Period boundaries are useful instruments that distort when they carry an implicit plot or are exported to domains that never justified them.',
          'Historians should abandon periodization in favor of a single continuous narrative of the past.',
          'Periodization is harmless so long as its boundaries are drawn from the history of politics and technology.',
          'Because every period boundary is arbitrary, disputes over when an age began cannot be settled by evidence.',
        ],
        correctAnswer: 0,
        explanation:
          'The author holds that periods are indispensable instruments, that a named age "arrives carrying a plot" which sorts evidence in advance, and that the specific harm is "the export of a division from the domain that justified it into domains that never did." Abandoning periodization is rejected outright, since a scholar refusing all periods "would produce not a purer history but no history at all." Making political and technological boundaries safe reverses the argument, since those are exactly the boundaries the author warns against exporting. And the author says disputes about when an age began are "conducted in evidence," so calling them unsettleable contradicts the text.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author calls a boundary that “seems to answer every question equally well” an ornament chiefly to suggest that it:',
        options: [
          'is pleasing enough to be valuable for teaching even if it is imprecise',
          'applies so broadly that it must correspond to a genuine feature of the past',
          'discriminates among no cases and therefore explains nothing',
          'is a recent invention that has not yet earned scholarly acceptance',
        ],
        correctAnswer: 2,
        explanation:
          'The contrast the author draws is between an instrument, which does work, and an ornament, whose "universal applicability is the surest sign that it is doing no work"—a boundary that fits every question distinguishes nothing. The teaching-value reading takes ornament as mere decoration and misses the epistemic charge. Treating breadth as evidence of a real feature reverses the author’s inference exactly. Recency is not at issue; the author says such boundaries are "sanctified by repetition," implying long use rather than novelty.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
      {
        question: 'The third paragraph, beginning “The obvious reply is that the alternative is worse,” primarily functions to:',
        options: [
          'abandon the criticism developed in the preceding paragraph',
          'grant a genuine objection in order to narrow the author’s claim',
          'supply historical examples of period boundaries that were drawn correctly',
          'argue that periods should be defined by political rather than cultural change',
        ],
        correctAnswer: 1,
        explanation:
          'The paragraph concedes that segmentation is "the precondition of historical thought as such," and the next paragraph opens "Granting this leaves the objection standing in an altered form," restating the complaint more narrowly as one about exported boundaries. Nothing is abandoned; the plot critique returns in the final paragraph. No specific correctly drawn boundaries are named, since the passage deliberately keeps its examples generic. And defining periods by political change is the practice the author immediately criticizes.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'The passage implies that describing a long-lasting practice as a “holdover” is objectionable mainly because the description:',
        options: [
          'may exaggerate how widespread the practice actually was',
          'relies on a term that lacks any agreed technical definition',
          'suggests that historians should avoid evaluative vocabulary altogether',
          'treats continuity as a failure to conform to a schedule the historian supplied',
        ],
        correctAnswer: 3,
        explanation:
          'The author’s complaint is that once a period’s life-shaped plot is in place, a vigorous late practice is filed as "something that ought by rights to have stopped," so persistence is scored as delinquency against a timetable the historian imposed. Exaggerated prevalence is a different error and is not raised. Terminological vagueness is not the objection; the term is faulted for what it presupposes, not for being ill-defined. Banning evaluative vocabulary altogether is too extreme and conflicts with the author’s own freely evaluative prose.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'Which of the following observations, if true, would most STRENGTHEN the author’s argument about exported boundaries?',
        options: [
          'Studies of rural diet and everyday speech across a celebrated political watershed find no discontinuity at the date in question.',
          'Historians of technology and historians of government tend to place their boundaries in the same decades.',
          'Students retain historical material better when it is organized into named periods.',
          'The number of recognized historical periods has grown steadily over the last century.',
        ],
        correctAnswer: 0,
        explanation:
          'The author claims that "diets, dialects, devotions, and the rhythms of agricultural labor do not observe the frontiers of political history," so direct evidence that a famous political boundary is invisible in diet and speech is confirmation of exactly that claim. Convergence between technological and governmental boundaries cuts the other way, suggesting boundaries travel legitimately. Improved student retention is true-but-irrelevant, since the author already grants that periods are useful instruments. A growing count of periods says nothing about whether any boundary has been improperly exported.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A scholar of music proposes to organize her field using the period boundaries long established in the history of painting. The author would most likely advise her to:',
        options: [
          'adopt them, since a shared framework is what allows scholars to find one another',
          'reject all period boundaries and treat musical change as an undivided flow',
          'adopt them only if musical evidence independently marks those boundaries, and to keep rival schemes available',
          'devise a single new scheme capable of organizing both fields at once',
        ],
        correctAnswer: 2,
        explanation:
          'This is the exported-boundary case, and the author’s remedy is "plurality: to keep several incompatible periodizations in use at once, selecting among them according to the question at hand," with any boundary justified in its own domain. The appeal to scholars finding one another is a real point in the passage but here licenses precisely the export the author warns against, making it half-right and misapplied. Rejecting all boundaries is the abolition the author refuses. A single scheme spanning both fields is the "better master scheme" the remedy explicitly rules out.',
        skill: 'application',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-hist-05',
    section: 'cars',
    discipline: 'contingency and counterfactual reasoning',
    title: 'The Road Not Taken Seriously',
    needsReview: true,
    passageText:
      'Professional historians are trained to sneer at the question “what if,” and they go on asking it several times a page. The sneer and the practice are not easily reconciled, because every causal claim in the discipline is a counterfactual wearing a coat. To say that a policy caused a famine, that a technique transformed a trade, that one official’s decision altered the course of a campaign, is to say that in the absence of that policy, technique, or decision, matters would have gone otherwise. Remove the counterfactual and the causal claim departs with it, leaving only chronology: this, then that, then the next thing. A discipline that renounced counterfactuals entirely would have renounced explanation and kept the calendar.\n\nThe real question, then, was never whether historians should reason about what did not happen. It is how such reasoning can be disciplined.\n\nThe standing objection is that it cannot be. There exists no archive of the world that did not occur; no document can confirm or refute a claim about it; and an assertion immune to evidence is not history but fiction with footnotes. The objection is serious, and it is fatal to a great deal of what is published under the counterfactual heading.\n\nBut notice what it is actually fatal to. The decisive variable is length. Consider a minimal counterfactual: one fact is altered, and the question concerns only the following days or months. Such a claim is not floating free. It is constrained on every side by all that we know remained fixed—the state of the roads, the harvest already in the ground, the letters already sent, the commitments already incurred. The world does most of the arguing, and the historian’s speculation is squeezed into a narrow channel where evidence can press against it. Now consider the extended counterfactual: one fact is altered and a century is narrated. After the second or third step every fixed point has been dissolved by a previous speculation, and the constraints that made the short claim tractable are simply gone. Errors do not merely accumulate; they compound, each conjecture becoming the platform on which the next is built.\n\nThis concedes most of what the critics dislike. The entertaining volumes that redraw continents from a single altered morning deserve the contempt they receive. But the contempt has been aimed at the wrong target. What ruins those books is not the counterfactual mood; it is the length of the leash. Shorten it, and the identical operation becomes the most ordinary tool in the historian’s kit—so ordinary that it is performed unconsciously every time a cause is named.\n\nDisciplined in this way, counterfactual reasoning earns its place by doing work nothing else does. It is the only instrument that separates a cause from a mere condition: both were present, but only the cause, when subtracted, changes the outcome within an interval we can constrain. It is likewise the only means of testing whether an outcome that looks inevitable in retrospect was in fact so, or whether the appearance of necessity is an artifact of our knowing how the story ends.\n\nAnd there is a vice opposite to reckless speculation, less often noticed because it wears the costume of rigor. The historian who never entertains the alternative, who confines himself strictly to what occurred, does not thereby avoid a claim about necessity. He implies one, and the one he implies is the strongest available: that what happened was the only thing that could have. This is not caution. It is prophecy, composed after the fact and pointed backward.',
    questions: [
      {
        question: 'The passage is primarily concerned with arguing that:',
        options: [
          'counterfactual reasoning is inherently speculative and should be excluded from serious historical work',
          'historians who avoid counterfactuals produce more rigorous scholarship than those who embrace them',
          'counterfactual reasoning is implicit in every causal claim and is defensible when kept minimal, since brevity keeps it constrained by evidence',
          'because historical outcomes are contingent, no result should ever be described as inevitable',
        ],
        correctAnswer: 2,
        explanation:
          'The argument runs from "every causal claim in the discipline is a counterfactual wearing a coat" to the claim that "the decisive variable is length," with short-range conjectures held in "a narrow channel where evidence can press against it." Excluding counterfactuals is the objection the author answers and would, on his account, cost the discipline explanation itself. Praising avoidance reverses the closing paragraph, which calls strict avoidance a vice wearing "the costume of rigor." Denying that anything is inevitable is too strong: the author says counterfactuals are the instrument for testing apparent necessity, not that necessity is always illusory.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward book-length counterfactual narratives is best described as:',
        options: [
          'admiring of their imaginative ambition despite their flaws',
          'neutral, since their weaknesses are shared by all historical writing',
          'hostile toward the counterfactual mood such books exemplify',
          'disparaging, though for a reason different from the one usually given',
        ],
        correctAnswer: 3,
        explanation:
          'The author says such volumes "deserve the contempt they receive," then adds that "the contempt has been aimed at the wrong target," since the fault lies in "the length of the leash" rather than in the counterfactual mood. Admiration appears nowhere. Neutrality is contradicted by the explicit endorsement of contempt. Hostility to the mood itself misattributes the standard objection to the author, who is at pains to rescue the mood while condemning the scale.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'The one-sentence paragraph beginning “The real question, then, was never whether” primarily serves to:',
        options: [
          'shift the inquiry from whether counterfactual reasoning is legitimate to how it may be constrained',
          'concede that the objection to counterfactual reasoning is decisive',
          'summarize the documentary evidence presented in the opening paragraph',
          'introduce the claim that causal explanation in history is impossible',
        ],
        correctAnswer: 0,
        explanation:
          'Having established that causal claims already contain counterfactuals, the sentence redirects the essay: "It is how such reasoning can be disciplined," which is the question the remainder answers. It concedes nothing decisive; the objection is raised only in the following paragraph and then answered. The opening paragraph offers an analysis of causal language rather than documentary evidence to summarize. And the author’s position is that explanation is possible precisely because counterfactual reasoning is available.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most STRENGTHEN the author’s distinction between minimal and extended counterfactuals?',
        options: [
          'Readers report finding extended counterfactual narratives more engaging than short ones.',
          'Short-range counterfactual claims about a military campaign have repeatedly been revised once newly examined logistical records contradicted them.',
          'Historians rarely agree on a definition of historical causation.',
          'Several extended counterfactual narratives have anticipated developments that later research confirmed.',
        ],
        correctAnswer: 1,
        explanation:
          'The author’s whole defense of short-range conjecture is that surrounding facts remain fixed so that "evidence can press against it." Documented cases of short claims actually being overturned by newly examined records demonstrate that this pressure is real, which is what distinguishes them from the unconstrained extended kind. Reader engagement is irrelevant to constraint. Disagreement over defining causation touches neither branch of the distinction. Extended narratives proving prescient would suggest they are not as unconstrained as the author claims, weakening rather than strengthening.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'An economist argues that had one regional bank not failed, the entire following decade of national policy would have unfolded differently. The author would most likely object that:',
        options: [
          'counterfactual claims about economic events are inadmissible in historical argument',
          'the claim cannot be assessed because the bank’s failure itself had many causes',
          'the economist should confine herself to describing what actually occurred',
          'the interval is too long for the surrounding facts to constrain the conjecture',
        ],
        correctAnswer: 3,
        explanation:
          'This is an extended counterfactual by the author’s own criterion—one altered fact, a decade narrated—and his objection is that after a few steps "every fixed point has been dissolved by a previous speculation." Ruling economic counterfactuals inadmissible as a class contradicts the claim that every causal statement contains one. The multiplicity of the failure’s causes is a different issue and non-responsive to the length problem. Confining oneself to what occurred is the opposite vice, which the author calls "prophecy, composed after the fact and pointed backward."',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The passage suggests that a historian who refuses on principle to consider alternatives to what actually occurred:',
        options: [
          'implicitly asserts a stronger claim about necessity than the counterfactualist does',
          'attains the rigor the discipline properly demands of its practitioners',
          'will be unable to construct even a reliable chronology of events',
          'commits the error of compounding conjectures across a long chain of speculation',
        ],
        correctAnswer: 0,
        explanation:
          'The closing paragraph states that such a historian "does not thereby avoid a claim about necessity" and that "the one he implies is the strongest available: that what happened was the only thing that could have." Calling this proper rigor takes at face value the "costume of rigor" the author says it merely wears. Chronology is the one thing the author says survives the renunciation of counterfactuals. Compounding conjecture is the failing of the extended counterfactualist, the opposite figure in this contrast.',
        skill: 'inference',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-hist-06',
    section: 'cars',
    discipline: 'history of medicine',
    title: 'What the Endpoint Decides',
    needsReview: true,
    passageText:
      'Medicine narrates its own past in a single genre. The opening chapters describe error—humors, bad air, elaborate regimens of diet and repose—followed by a turn, and then a steady ascent to the present, where we happen to be standing. Within this story predecessors are sorted into two bins. Those who anticipated a modern finding become precursors, congratulated for having been right before there was any way to know it. Everyone else becomes an obstacle, a figure whose learning is recounted chiefly to explain the delay.\n\nThe genre has an obvious appeal and one deep flaw: it grades every past practice against a question that practice was not answering. A regimen designed to order a patient’s whole manner of living—his sleep, his labor, his appetites, his composure in the face of an illness expected to run its course—is scored on survival at five years, a metric its practitioners never proposed and would not have recognized as the point. The verdict is then reported as though it were a discovery. It is nothing of the kind. It is the result of setting one examination before a candidate who sat for another.\n\nStated this way, the argument invites a sharp and entirely legitimate objection. It sounds like the doctrine according to which all systems of healing are equally valid, differing merely in idiom, so that a purgative and an antibiotic are two vocabularies for one achievement. That doctrine is false and its consequences are lethal. Some interventions kill people who would otherwise have lived; some restore people who would otherwise have died; and no quantity of contextual sensitivity converts a poison into a tonic. This should be conceded without hedging, and conceded first.\n\nThe concession leaves the argument untouched, because efficacy is not a bare fact but an answer to a prior question, and the prior question is chosen. Effective at what? Survival for how long, and in what condition? Relief of pain, restoration of the capacity to work, preservation of the ability to recognize one’s family, the chance to die at home among one’s own people? These are not findings that emerge from a trial. They are decisions about what shall count, taken before any trial can begin, and once taken they disappear into the machinery and re-emerge looking like measurements.\n\nThat the endpoint is doing the work can be demonstrated from present practice rather than from the remote past. When a field revises what it measures—when it begins counting quality of life, or complications at ten years, or the burden a regimen places on a household—it promptly discovers failures in therapies that have not themselves changed by so much as a milligram. Nothing about the treatment moved. The question moved, and the verdict moved with it. A profession fluent in this fact about its own present ought to be slower to grade its predecessors as though the standard had been fixed since antiquity.\n\nThis is why the history of medicine belongs among the humanities, and the reason has nothing to do with doubting laboratories. The question of what a practice is for cannot be settled in a laboratory, because it is the question that tells the laboratory what to measure. And the cost of forgetting this is not confined to our manners toward the dead. A profession able to narrate its past only as ascent has trained itself not to notice the moments when its own endpoints shift beneath it—which is exactly when it is most likely to mistake a change of question for an advance in knowledge.',
    questions: [
      {
        question: 'Which of the following best states the author’s central claim?',
        options: [
          'All systems of healing are equally valid and differ only in the vocabulary they employ.',
          'Because judgments of efficacy depend on chosen endpoints, medicine’s triumphalist history misgrades past practice and obscures shifts in the profession’s own standards.',
          'The history of medicine should be written by practicing scientists rather than by humanists.',
          'Past medical practices were considerably more effective than the modern profession is willing to acknowledge.',
        ],
        correctAnswer: 1,
        explanation:
          'The author argues that the ascent narrative "grades every past practice against a question that practice was not answering," that endpoints are "decisions about what shall count," and that a profession blind to this cannot notice its own standards shifting. The claim that all healing systems are equally valid is the doctrine the author calls "false and its consequences are lethal." Assigning the field to scientists inverts the conclusion that this history "belongs among the humanities." And nowhere does the author claim past therapies actually worked better; the argument concerns what working means, not how well old remedies performed.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The passage suggests that labeling a past physician a “precursor” is problematic because the label:',
        options: [
          'credits him for meeting a standard he was not attempting to meet',
          'understates the originality of his contribution to modern therapy',
          'assumes that medical knowledge advances continuously rather than in sudden leaps',
          'depends on documents his own contemporaries would have disputed',
        ],
        correctAnswer: 0,
        explanation:
          'Precursors are those "congratulated for having been right before there was any way to know it," and the passage’s general complaint is that predecessors are graded against a question they were not answering—praise and blame alike are anachronistic. Understating originality reverses the label’s effect, which is flattering. Continuity versus leaps concerns the shape of progress, not the standard by which figures are scored. Contemporaries’ disputes over documents raise an evidentiary problem the passage never introduces.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'The author writes that decisions about what shall count “disappear into the machinery and re-emerge looking like measurements.” This most nearly means that:',
        options: [
          'measurement instruments have become too automated for clinicians to scrutinize',
          'clinical results are now too complex for nonspecialists to interpret',
          'a single endpoint can be assessed using several incompatible instruments',
          'value judgments made before a study begins are later reported as neutral findings',
        ],
        correctAnswer: 3,
        explanation:
          'The sentence describes choices "taken before any trial can begin" that later present themselves as measured facts, which is why the author insists efficacy "is not a bare fact but an answer to a prior question." Automation of instruments is a technological worry the passage never raises. Interpretive complexity for lay readers is likewise absent. Multiple instruments for one endpoint is a measurement-reliability point, whereas the author’s claim concerns the prior selection of the endpoint itself.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
      {
        question: 'The author’s blunt concession that some interventions kill people who would otherwise have lived functions primarily to:',
        options: [
          'retract the criticism of triumphalist history developed in the preceding paragraphs',
          'establish that efficacy cannot be compared across different systems of healing',
          'separate the author’s argument from a relativism that would otherwise be attributed to it',
          'introduce evidence that past therapies were more dangerous than is generally believed',
        ],
        correctAnswer: 2,
        explanation:
          'The concession answers an objection the author names in advance—that the argument "sounds like the doctrine according to which all systems of healing are equally valid"—and is followed by "the concession leaves the argument untouched," which is a defensive clarification rather than a retreat. Nothing is retracted; the critique resumes immediately. The concession asserts the opposite of incomparability, since it insists some treatments plainly kill and others plainly restore. And it offers no historical evidence about the dangers of particular past therapies.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s claim that shifting endpoints rather than shifting therapies drive changing verdicts?',
        options: [
          'Different institutions assess quality of life using different questionnaires.',
          'Reassessments that overturned established therapies were in nearly every case prompted by new biochemical findings about the therapies themselves, with the measured endpoints unchanged.',
          'Patients and physicians frequently disagree about which endpoints matter most.',
          'Historians of medicine disagree about when the modern clinical trial first appeared.',
        ],
        correctAnswer: 1,
        explanation:
          'The author’s evidence is that verdicts flip while "nothing about the treatment moved," so a record showing that overturned verdicts followed new findings about the treatments, with endpoints held constant, supplies the rival explanation and undercuts the mechanism. Divergent quality-of-life questionnaires concern how an endpoint is measured, not whether endpoint choice drives verdicts. Disagreement between patients and physicians about which endpoints matter supports the author by showing endpoints are contested value choices. When the clinical trial originated is a chronological dispute with no bearing on the claim.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A committee announces that a long-standing surgical procedure “has been shown to be ineffective” after the field replaced its measure of success from tumor shrinkage to functional independence at five years. Applying the author’s reasoning, the most accurate description of this announcement is that:',
        options: [
          'the procedure was always ineffective and the earlier favorable verdict was simply an error',
          'the new measure is the superior one because it reflects what patients actually value',
          'the procedure’s performance under a newly chosen standard changed the verdict, though the procedure itself did not change',
          'no comparison between the two verdicts is possible, since the standards are incommensurable',
        ],
        correctAnswer: 2,
        explanation:
          'This is the author’s own illustration generalized: when a field revises what it counts, it "discovers failures in therapies that have not themselves changed by so much as a milligram," so the verdict tracks the question rather than the treatment. Declaring the earlier verdict a simple error assumes a fixed standard, which is exactly what the author denies. Ranking the new endpoint as superior imports a judgment the author never makes; he argues endpoints are chosen values, not that any one of them is correct. Declaring comparison impossible is too extreme and drifts toward the relativism the author expressly repudiates.',
        skill: 'application',
        needsReview: true,
      },
    ],
  },
]
