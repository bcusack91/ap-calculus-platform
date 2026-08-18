import type { MCATPassage } from '../types'

/**
 * MCAT CARS — Ethics / Moral Philosophy pool.
 *
 * Six original, argument-driven passages (500-600 words each) in which a single
 * author defends a thesis against a stated objection: bioethics, care versus
 * justice, the philosophy of punishment, professional role morality, animal
 * ethics, and the ethics of technology. Several topics are medically adjacent,
 * as befits a pre-med audience, but every argument is a humanities argument —
 * moral reasoning only, with no outside clinical or scientific knowledge
 * required. Every answer is derivable from the text alone.
 *
 * AI-authored; needsReview is true pending SME review.
 */
export const CARS_ETHICS_PASSAGES: MCATPassage[] = [
  {
    id: 'cars-eth-01',
    section: 'cars',
    discipline: 'bioethics',
    title: 'The Signature and the Conversation',
    needsReview: true,
    passageText:
      'Ask a hospital administrator what informed consent is, and you will be handed a form. This is not a trivial confusion. It is the whole of the problem, compressed into a single reflex.\n\nThe doctrine began as a remedy for a real abuse. Within living memory, patients were told what their physicians judged they could bear to hear, and the judgment was made for them, in their absence, by people who sincerely believed they were being kind. Against that inheritance the requirement of disclosure was a genuine moral advance: the patient was to be told what would be done, what might go wrong, and what else might be done instead, and was then to decide. The advance was not procedural but relational. It relocated authority.\n\nWhat we have made of it is a document. The modern consent form runs to many pages, is drafted by counsel rather than by clinicians, and is addressed less to the patient in front of us than to a jury we hope never to meet. Its length varies inversely with the likelihood that anyone will read it. A patient signs it on a clipboard, in a gown, twenty minutes before an operation she has already rearranged her life around, and we record that she has exercised her autonomy.\n\nDefenders of the paperwork are not fools, and their rejoinder deserves to be stated at full strength. Documentation, they point out, is the only form of accountability that survives contact with an institution. Conversations are unrecorded and endlessly contested; a signature is not. Moreover, those who mock the form frequently want something worse than the form — a return of discretion to the physician, whose kindly judgment is exactly what the doctrine was built to displace. Better a ritual that protects patients imperfectly than a warmth that protects them not at all.\n\nThe rejoinder is sound, and it misses the point, because two different things travel under the name of consent. One is authorization: the moral act by which a person makes permissible what would otherwise be a trespass upon her body. The other is indemnity: the legal act by which risk is transferred from an institution to the person who will bear it. These are not the same act, and nothing guarantees that a single performance accomplishes both. A signature can be flawless as indemnity and empty as authorization. That is, in fact, the ordinary case, and its very ordinariness is why the confusion goes unnoticed. The paperwork works. What it works at is not what we tell ourselves.\n\nOnce the distinction is drawn, the remedy is unglamorous. If authorization is the point, then the measure of consent is not what was disclosed but what was understood, and understanding can be tested only by asking the patient to say back, in her own words, what is about to happen to her and what else she might have chosen. If authorization is the point, consent is not a moment but a standing relationship, revocable at the door of the operating room and after it.\n\nAnd the distinction explains something the paperwork model cannot: why defective consent is a wrong even when the operation goes well. The patient who was never truly asked has not necessarily been harmed. She may walk out healthier than she walked in. She has been used — enrolled in a decision about her own body that somebody else effectively made. The injury is contingent. The wrong was already complete at the signature.',
    questions: [
      {
        question: 'Which of the following best expresses the central thesis of the passage?',
        options: [
          'Consent forms should be abolished and decisions returned to the trained judgment of experienced physicians.',
          'The chief defect of the modern consent form is that it is too long for most patients to finish reading.',
          'Authorization and indemnity are distinct acts, and the modern consent form accomplishes the second while being mistaken for the first.',
          'Because conversations cannot be documented, a signature remains the only reliable evidence that a patient has exercised autonomy.',
        ],
        correctAnswer: 2,
        explanation:
          'The argument turns on the claim that "two different things travel under the name of consent" — authorization, "the moral act by which a person makes permissible what would otherwise be a trespass," and indemnity, the transfer of legal risk — and that a signature "can be flawless as indemnity and empty as authorization." The option restoring physician discretion names the alternative the author calls "worse than the form" and says the doctrine was "built to displace." Length is a symptom the author mentions in passing, not the defect he diagnoses. The claim that a signature is the only reliable evidence of autonomy belongs to the defenders of the paperwork, whose rejoinder the author calls sound but beside the point.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward the defenders of consent paperwork is best characterized as:',
        options: [
          'respectful of their reasoning while denying that it answers his objection',
          'dismissive of a position he regards as merely self-serving',
          'persuaded by it, to the point of withdrawing his earlier criticism',
          'indifferent, since he takes the dispute to be a purely legal one',
        ],
        correctAnswer: 0,
        explanation:
          'The author writes that these defenders "are not fools" and that their rejoinder "deserves to be stated at full strength," then concludes that it "is sound, and it misses the point" — respect paired with refusal. Nothing marks the defenders as self-serving; the author grants their concern with accountability. He never withdraws the criticism; the distinction between authorization and indemnity is his answer to them. And he is plainly not indifferent, since he treats the wrong as moral rather than legal — complete "at the signature" even when no injury follows.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'The remark that the form’s "length varies inversely with the likelihood that anyone will read it" functions primarily to:',
        options: [
          'recommend a statutory limit on the length of consent documents',
          'establish that most patients are incapable of understanding medical risk',
          'concede that the form succeeds at the task its drafters actually set for it',
          'suggest, with irony, that the document is written for a reader other than the patient',
        ],
        correctAnswer: 3,
        explanation:
          'The remark sits inside a sentence describing a document "drafted by counsel rather than by clinicians" and "addressed less to the patient in front of us than to a jury we hope never to meet." Its wry point is that the form is composed for that other audience, which is why growing longer costs its drafters nothing. No statutory remedy is proposed anywhere. The author never says patients cannot understand risk; his remedy assumes they can, if asked to say things back. The idea that the paperwork succeeds at its drafters’ real task is a claim the author does make later ("The paperwork works"), but it is not the work this ironic aside is doing here.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following findings, if true, would most WEAKEN the author’s argument?',
        options: [
          'Patients who sign lengthy consent forms are more likely than other patients to file suit after a poor outcome.',
          'Patients who sign the standard form can, when questioned afterward, accurately describe the procedure, its risks, and the alternatives they declined.',
          'Most consent forms are drafted by attorneys rather than by the clinicians who perform the procedure.',
          'Physicians who spend longer in conversation with patients are sued less often than those who do not.',
        ],
        correctAnswer: 1,
        explanation:
          'The argument depends on the two acts coming apart in practice — on the signature being "flawless as indemnity and empty as authorization." If patients who sign the standard form can afterward state what will be done and what they declined, then by the author’s own proposed measure ("not what was disclosed but what was understood") the form is achieving authorization after all, and the gap he claims is "the ordinary case" collapses. Litigation rates bear on indemnity, not on understanding. That attorneys draft the forms is a premise the author already asserts, so it cannot weaken him. The link between longer conversations and fewer suits is consistent with his view and does nothing to show that signatures secure understanding.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A hospital that reformed its practice along the lines the author recommends would most likely:',
        options: [
          'shorten its consent forms while continuing to collect signatures at the same point in the process',
          'require a second physician to countersign every consent form',
          'offer patients a fuller explanation in exchange for waiving the right to sue',
          'ask each patient to describe, in her own words, what will be done and what else she might have chosen, and treat that account as the record',
        ],
        correctAnswer: 3,
        explanation:
          'The author states the remedy directly: understanding "can be tested only by asking the patient to say back, in her own words, what is about to happen to her and what else she might have chosen." Shortening the form leaves the clipboard-in-a-gown moment untouched and still measures disclosure rather than understanding. A countersignature adds a second institutional actor without adding a patient’s comprehension. Trading explanation for a waiver moves further into the indemnity frame the author says has crowded authorization out.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In saying that a patient whose consent was defective "has been used," the author most nearly means that she has been:',
        options: [
          'made the instrument of a decision about her own body that another person effectively made',
          'physically injured by a procedure she did not need',
          'actively deceived about the risks of the procedure she underwent',
          'denied compensation for an outcome she never agreed to bear',
        ],
        correctAnswer: 0,
        explanation:
          'The sentence continues by glossing itself: "enrolled in a decision about her own body that somebody else effectively made." The author explicitly detaches this wrong from physical harm — the patient "may walk out healthier than she walked in," so "the injury is contingent." Deception is not required either; the ordinary case he describes involves an accurate document that is simply not understood. Compensation belongs to indemnity, the frame the author says has displaced the moral question rather than answered it.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-eth-02',
    section: 'cars',
    discipline: 'moral philosophy: care and justice',
    title: 'The Ethics of the Near',
    needsReview: true,
    passageText:
      'The dispute is usually staged as a contest between two theories. On one side stands justice: impartial, principled, indifferent to who you happen to be, deciding cases by rules that any rational person could accept. On the other stands care: attentive, particular, responsive to this person in this predicament, refusing to abstract away the very relationship that makes the situation morally urgent. We are then invited to choose, or, more often, to declare the choice false and the two "complementary" — a word that ends discussions without settling them.\n\nThe staging is wrong from the first move, because care was never a theory of the same kind. Justice offers a procedure: state the principle, check the case against it, act accordingly. Care offers no procedure at all, and its refusal is not an oversight to be repaired by a better formulation. Its claim is that the procedural ambition itself — the wish for a morality that could be applied from nowhere, by anyone, without knowing whose life is at stake — is a distortion of what moral attention actually is. On this reading care is not a competitor in the tournament of theories. It is a complaint about the tournament.\n\nThe complaint has force. Consider how much of moral life consists of noticing. Before any principle can be applied, someone must first see that a situation calls for a response — that the silence at the table is grief and not contentment, that the patient asking about her discharge date is asking something else. No rule instructs us to look, and no rule can, since the rule cannot fire until the case has been recognized as a case. A person perfectly equipped with principles and blind to the particular before him is not a good person but a hazard. Justice arrives late, when the seeing has already been done, and then takes credit for the whole.\n\nBut a complaint is not a life, and here the argument must turn. The characteristic failure of care is not sentimentality; it is captivity. Attention is finite, and it flows along the channels of proximity — toward the ones we already love, already see, already answer to. A morality built entirely of responsiveness will respond to whoever is nearest and loudest, and will call this virtue. Worse, it will do so at the carer’s own expense, because care has no vocabulary in which the carer’s claims can be lodged. She notices; who notices her? The exhausted daughter who has given nine years to a dying parent while her brothers sent cards has suffered a wrong, and it is not a failure of care that has wronged her. It is a distribution. Only the language of justice, with its cold arithmetic of who owes what to whom, can so much as name it.\n\nSo the relation between them is not complementarity, that word of convenience, and it is not rivalry either. Justice is what care requires when care turns to look at itself. The near will always crowd out the far; the visible will always outbid the absent; the one who gives will always be worse at counting her own costs than at counting everyone else’s. Impartial principle is the instrument by which a caring person audits her own attention and discovers whom she has failed to see. That is a humbler office than moral philosophy usually assigns to justice, and it is emphatically not the office of a rival. It is the office of a mirror, and no one chooses between a face and a mirror.',
    questions: [
      {
        question: 'The passage as a whole is best understood as an argument that:',
        options: [
          'care and justice are complementary theories that together supply a complete account of morality',
          'care is best understood as an objection to the ambition of impartial theory, and it requires justice to correct its own bias toward the near',
          'justice should be abandoned, since moral attention cannot be reduced to the application of rules',
          'the principal defect of the ethics of care is that it is sentimental rather than rigorous',
        ],
        correctAnswer: 1,
        explanation:
          'The author first denies that care is "a competitor in the tournament of theories" and calls it "a complaint about the tournament," then turns to care’s "characteristic failure" — captivity to proximity — and concludes that "justice is what care requires when care turns to look at itself." The complementarity option uses the very word the author dismisses as ending discussions "without settling them" and calls "that word of convenience." Abandoning justice reverses the second half of the essay, where impartial principle becomes the necessary audit. And the author explicitly denies the sentimentality charge: the failure "is not sentimentality; it is captivity."',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The examples of "the silence at the table" and the patient asking about her discharge date serve chiefly to:',
        options: [
          'show that principles of justice can be derived from close observation of particular cases',
          'illustrate a case in which caring attention produces a mistaken moral judgment',
          'argue that emotional perception is a more reliable guide than reasoning of any kind',
          'illustrate the act of noticing that must precede the application of any principle',
        ],
        correctAnswer: 3,
        explanation:
          'The examples appear immediately after "how much of moral life consists of noticing" and immediately before the claim that "no rule instructs us to look" and that a rule "cannot fire until the case has been recognized as a case." They are instances of recognition, not of derivation: nothing in the paragraph builds a principle out of them. Neither example involves an error, so they cannot illustrate a mistaken judgment. And the author never ranks emotion above reasoning — the second half of the essay hands reasoning the decisive corrective office.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward the description of care and justice as "complementary" is best described as:',
        options: [
          'impatient with it as a formula that avoids the question rather than resolving it',
          'approving, since it accurately names the relation he ultimately defends',
          'neutral, since he employs it as an established technical term',
          'hostile, because he denies that care and justice bear any relation to each other',
        ],
        correctAnswer: 0,
        explanation:
          'The word appears in scare quotes as "a word that ends discussions without settling them," and returns in the last paragraph as "that word of convenience," which the author explicitly rejects: "the relation between them is not complementarity." He is not approving, since he replaces the term with a specific asymmetric relation — justice as audit. He is not neutral; both mentions are disparaging. And hostility to the word is not denial of any relation: he insists on a close one, calling justice "the office of a mirror" to care.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'Which of the following findings, if true, would most STRENGTHEN the author’s claim that care requires justice as a corrective?',
        options: [
          'Professional caregivers report higher job satisfaction than workers in comparably demanding fields.',
          'Most people asked to state a general moral principle are able to do so accurately.',
          'In studies of family caregiving, the burden falls overwhelmingly on whichever relative lives closest at hand, and no participant describes the arrangement as unfair until asked to compare her contribution with what others contribute.',
          'Ethical theories emphasizing impartial rules are taught in universities more often than theories emphasizing relationships.',
        ],
        correctAnswer: 2,
        explanation:
          'The corrective claim has two parts: attention "flows along the channels of proximity," and care "has no vocabulary in which the carer’s claims can be lodged," so only comparative, distributive language can "so much as name" the wrong. The caregiving finding supplies both — burden tracking nearness, and unfairness becoming visible only once a comparison is introduced. Satisfaction levels say nothing about how burdens are allocated or named. Competence at stating principles bears on justice as a procedure, not on care’s blind spot. Relative popularity in curricula is a fact about teaching, not about the structure of moral attention.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A hospital ethics committee persuaded by the author would be most likely to:',
        options: [
          'supplement its case-by-case discussion of what each patient needs with a periodic review of which patients the staff has consistently overlooked',
          'replace case-by-case discussion entirely with a written protocol applied uniformly to every patient',
          'instruct clinicians to set aside their personal relationships with patients when deciding difficult cases',
          'assign its most attentive clinicians to the patients who request them most frequently',
        ],
        correctAnswer: 0,
        explanation:
          'The author assigns impartial principle a specific office: "the instrument by which a caring person audits her own attention and discovers whom she has failed to see." A review of the overlooked is exactly that audit, laid over the attentive case-by-case work he says must come first. Replacing particular discussion with uniform protocol installs the "applied from nowhere" procedure he calls a distortion. Setting aside relationships discards the noticing that he says must precede any rule. Following the loudest requests is the proximity capture the audit exists to catch — the near crowding out the far.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In context, the claim that justice occupies "the office of a mirror" most nearly means that justice:',
        options: [
          'merely reflects back the conclusions that caring attention has already reached',
          'does not compete with care but enables care to see what it would otherwise miss about itself',
          'and care are two names for a single underlying moral capacity',
          'should be abandoned along with the rest of moral theory’s metaphors',
        ],
        correctAnswer: 1,
        explanation:
          'The mirror image is introduced right after "justice is what care requires when care turns to look at itself" and after the audit by which a caring person "discovers whom she has failed to see" — a mirror shows you what you cannot see unaided, and the closing line ("no one chooses between a face and a mirror") denies rivalry. Mere reflection of care’s own conclusions would make justice redundant, whereas the author says only justice can name the exhausted daughter’s wrong. Identifying the two as one capacity collapses a distinction the author is at pains to keep. And he is defending a role for justice, not discarding it.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-eth-03',
    section: 'cars',
    discipline: 'philosophy of punishment',
    title: 'The Ceiling and the Floor',
    needsReview: true,
    passageText:
      'Everyone knows the shape of this argument. Retribution is the primitive theory, the theory of the mob and the gallows, which asks only that suffering be repaid with suffering. Deterrence and rehabilitation are the enlightened ones, which look forward rather than back and ask what a punishment can accomplish. The first is a passion dressed as a principle; the second is policy. Given the choice, the humane person chooses the future.\n\nThe reputations are very nearly inverted, and the reason is a single question the forward-looking theories cannot answer out of their own resources: how much is too much?\n\nAsk a deterrence theorist why we should not hang pickpockets. He must answer in his own currency, and his currency is consequences: hanging pickpockets would be excessive because the gain in deterrence does not justify the cost. Notice what kind of claim that is. It is an empirical estimate, and it is hostage to the facts. If the numbers ran the other way — if a gallows in the market square really did end pocket-picking in a season — the theory would have no principled objection left to raise. The same holds for rehabilitation, which sounds gentler still and is in some ways the more dangerous of the two, since a sentence justified by the offender’s improvement has no natural terminus. It ends when he is cured, and who but his keepers shall say when that is? The indeterminate sentence, the detention that continues because the detained man has not yet demonstrated the right interior condition, is not an aberration of the rehabilitative ideal. It is that ideal, operating as designed.\n\nDesert answers differently, and the difference is structural rather than temperamental. To say that a person deserves a certain punishment is to say something about what he did, and what he did is finished. It cannot grow with the state’s ambitions or shrink with its budget. It supplies a quantity that no argument about social benefit is permitted to exceed. That is the whole function of proportionality: not to demand suffering but to cap it. The retributivist is the only participant in this debate who can tell the state, on principle, that it has done enough.\n\nI do not pretend that the history favors me. More cruelty has been inflicted in the name of just deserts than in the name of recidivism statistics, and the rhetoric of desert is the natural idiom of the crowd outside the courthouse. But this concedes less than it appears to concede. What the crowd wants is not desert; it is satisfaction, and satisfaction is a feeling, elastic and unappeasable, whereas desert is a measure. The abuses of a limiting principle are abuses of its abandonment, not of its logic. A theory is not made harsh by the mood of the people who invoke it. It is made harsh by lacking a principle of enough.\n\nNone of this shows that anyone deserves to suffer, and I have not tried to show it. The argument is narrower and, I think, more useful for being narrow: whatever else we build our penal practice upon, we cannot dispense with the backward look, because it is the only thing standing between a sentence and the purposes of whoever currently controls sentences. Let desert be a ceiling and not a floor. Let the state punish less than a person deserves whenever mercy or futility recommends it, and never, on any showing of future benefit, a single day more.',
    questions: [
      {
        question: 'The central claim of the passage is that:',
        options: [
          'retributive punishment is justified because wrongdoers genuinely deserve to suffer',
          'deterrence and rehabilitation have historically produced more cruelty than retribution has',
          'punishment should be abolished, since no theory can specify how much of it is enough',
          'desert merits defense not because it justifies suffering but because it alone supplies a principled upper limit on punishment',
        ],
        correctAnswer: 3,
        explanation:
          'The author states his conclusion explicitly: "None of this shows that anyone deserves to suffer, and I have not tried to show it," followed by "Let desert be a ceiling and not a floor." The affirmative desert claim is the one he disclaims in that sentence. The historical comparison is reversed: he concedes that "more cruelty has been inflicted in the name of just deserts than in the name of recidivism statistics." And abolition contradicts the entire essay, which is about how to limit punishment rather than whether to impose it.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author introduces the indeterminate sentence primarily in order to:',
        options: [
          'concede that rehabilitation has succeeded where deterrence has failed',
          'show that a punishment justified by the offender’s improvement contains no internal stopping point',
          'argue that rehabilitation programs are chronically underfunded',
          'illustrate the crowd’s appetite for satisfaction rather than for desert',
        ],
        correctAnswer: 1,
        explanation:
          'The example follows directly from the claim that a sentence justified by improvement "has no natural terminus. It ends when he is cured, and who but his keepers shall say when that is?" The author calls the indeterminate sentence not an aberration but the ideal "operating as designed" — an illustration of the missing stopping point. It is a criticism, not a concession of success. Funding is never discussed. The crowd’s appetite is a real theme of the essay, but it appears a paragraph later and concerns retributive rhetoric, not rehabilitative detention.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the contrast the author draws between desert and the forward-looking theories?',
        options: [
          'Public opinion surveys consistently find support for sentences harsher than those judges impose.',
          'Executions have never been shown to reduce the rate of minor theft.',
          'Deterrence theorists standardly adopt a side-constraint, defended on grounds internal to their own view, forbidding punishment beyond what the offense would warrant.',
          'Sentencing schemes built on desert produce longer average sentences than rehabilitative schemes do.',
        ],
        correctAnswer: 2,
        explanation:
          'The contrast rests entirely on the claim that the forward-looking theories "cannot answer out of their own resources" the question how much is too much, so that only desert "supplies a quantity that no argument about social benefit is permitted to exceed." A side-constraint defended on internal grounds gives them precisely the ceiling the author says they lack. Public appetite for harsher sentences fits his own account of the crowd. That executions do not deter petty theft merely resolves the hypothetical in the deterrentist’s favor without touching the structural point. Longer average sentences under desert schemes speak to practice, and the author has already granted that history runs against him while insisting "a theory is not made harsh by the mood of the people who invoke it."',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward "the crowd outside the courthouse" is best described as:',
        options: [
          'critical, and careful to distinguish the crowd’s appetite from the principle it invokes',
          'sympathetic, since the crowd’s demand for desert is the very demand he defends',
          'unconcerned, since he regards public sentiment as having no effect on sentencing',
          'admiring of the crowd’s moral instincts despite its occasional excesses',
        ],
        correctAnswer: 0,
        explanation:
          'The author concedes that desert rhetoric "is the natural idiom of the crowd" and then separates the two: "What the crowd wants is not desert; it is satisfaction, and satisfaction is a feeling, elastic and unappeasable, whereas desert is a measure." That is criticism plus a distinction, not sympathy — the crowd is described as wanting something other than what he defends. He cannot be unconcerned, since he raises the crowd as the strongest objection to his own position. And nothing in the passage admires the crowd’s instincts; its demand is called unappeasable.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'A legislature persuaded by the passage would be most likely to enact which of the following?',
        options: [
          'A provision permitting a sentence to be extended when the offender is judged still dangerous at the end of his term',
          'A statutory maximum for each offense that no finding about public safety may override, combined with discretion to sentence below that maximum',
          'Mandatory minimum sentences calibrated to the deterrent effect of each penalty',
          'A requirement that every sentence match the harm the offender caused as exactly as possible',
        ],
        correctAnswer: 1,
        explanation:
          'The closing prescription is precise: "Let desert be a ceiling and not a floor. Let the state punish less than a person deserves whenever mercy or futility recommends it, and never, on any showing of future benefit, a single day more." A cap that public-safety findings cannot pierce, plus downward discretion, is that policy exactly. Extending a term for continued dangerousness is the indeterminate sentence the author attacks. Deterrence-calibrated minimums make future benefit the driver and install a floor. Requiring an exact match to harm also makes desert a floor, forbidding the mercy the author expressly preserves.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In context, the statement that "satisfaction is a feeling, elastic and unappeasable, whereas desert is a measure" most nearly conveys that:',
        options: [
          'the public’s demand for punishment is basically accurate but poorly articulated',
          'the punishment a person deserves can be calculated with mathematical precision',
          'unlike a fixed standard, a demand for satisfaction has no point at which it can be met',
          'feelings should play no role whatever in the design of penal institutions',
        ],
        correctAnswer: 2,
        explanation:
          'The contrast is between something that stretches without limit and something with a determinate quantity — the same contrast the essay draws between theories that lack "a principle of enough" and desert, which "supplies a quantity that no argument about social benefit is permitted to exceed." The author does not credit the public demand as accurate; he says what the crowd wants "is not desert." Calling desert a measure does not make it mathematically precise, a stronger claim the passage never advances. And banning feeling from penal design is a sweeping prescription nowhere stated; the sentence concerns what a feeling cannot do, namely stop.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-eth-04',
    section: 'cars',
    discipline: 'professional ethics and role morality',
    title: 'The Advocate’s Excuse',
    needsReview: true,
    passageText:
      'Every profession keeps a sentence in reserve for the moments when its members are asked to explain themselves. The defense lawyer, pressed about the acquitted client who did it, says that the adversary system requires a vigorous defense on both sides, and that justice is the output of the machine rather than of any part of it. The auditor, the soldier, the journalist who prints the leaked name — each has a version of it. I want to argue that this sentence, though not false, is the wrong thing to say, and that saying it has cost the professions more than the conduct it excuses.\n\nBegin by granting what the sentence gets right. There plainly are permissions attached to roles that are not available to private persons. A defense lawyer may argue for a conclusion she believes to be untrue; a surgeon may cut open a body; a confessor may keep a secret that would spare an innocent man grief. These are not lapses tolerated for convenience. They are the point. An institution can produce goods that no individual acting on private judgment could produce — a system in which no one is condemned unheard, for instance — and it can do so only by assigning people parts and asking them to play those parts rather than to freelance. The lawyer who declined to defend clients she believed guilty would not be a better person operating inside a worse system. She would be dismantling the system while standing in it.\n\nSo the permission is real. The trouble is what the professions have made of it, which is to convert a justification into an exemption. A justification is a reason offered to someone, and reasons can be examined; an exemption is a door closed. When the lawyer says the system requires it, she generally means that the questioning stops there — that no further account is owed by her, because the account has already been given by the institution she serves. But institutions do not give accounts. They have no voice. Whatever accounting is owed must be rendered by the people who occupy their offices, which is to say by her.\n\nWhat would that accounting look like? It would begin by noticing that the permission is borrowed, and therefore conditional. The lawyer’s license to argue what she disbelieves rests on a claim about what the adversary system produces: that two committed advocates before a neutral tribunal yield better verdicts than any inquisitor would reach alone. Suppose that claim were false — suppose the two sides were so unequally resourced that the contest reliably favored whoever could pay. Then the permission would not merely be strained. It would be void, because its entire warrant is the good the machine is supposed to make, and a machine that does not make it has no warrant to lend.\n\nThis is why the systemic sentence is dangerous even when it is true. It teaches the professional to treat her institution as a given — a weather system in which she happens to work — when it is in fact a human artifact, maintained by her participation and continually testable against its own advertised purpose. Role morality does not lift the professional out of ordinary morality. It hands her a specialized assignment within it, and every assignment carries with it the question whether the work is worth doing. The honest version of the sentence is longer and less comfortable. Not "the system requires it," but "I believe this system produces something worth what I am doing to obtain it, and here is why."',
    questions: [
      {
        question: 'Which of the following best states the author’s thesis?',
        options: [
          'Role-based permissions are genuine but conditional, so the professional still owes a personal account of whether her institution delivers the good that licenses her conduct.',
          'Professionals should refuse any role that requires them to act contrary to their own moral judgment.',
          'The claim that the adversary system produces better verdicts than an inquisitor would has been shown to be false.',
          'Institutions rather than individuals are the proper bearers of moral responsibility in professional life.',
        ],
        correctAnswer: 0,
        explanation:
          'The author grants that "the permission is real," then argues it "is borrowed, and therefore conditional," and that since "institutions do not give accounts," the accounting "must be rendered by the people who occupy their offices." Refusing the role is the course he rejects: such a lawyer "would be dismantling the system while standing in it." He never asserts that the adversary system fails; he raises unequal resources hypothetically ("Suppose that claim were false"). And locating responsibility in institutions is precisely the exemption he attacks.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The remark about the lawyer who "declined to defend clients she believed guilty" functions primarily to:',
        options: [
          'criticize attorneys who agree to represent clients they believe to be guilty',
          'suggest that individual conscience is a more reliable guide than institutional design',
          'concede the strength of the position the author will go on to qualify',
          'introduce the resource inequality that would void the lawyer’s permission',
        ],
        correctAnswer: 2,
        explanation:
          'The remark closes the paragraph that opens "Begin by granting what the sentence gets right," and it grants the strongest version of the systemic defense: acting on private judgment here would dismantle the very institution that produces the good. The author is not criticizing lawyers who take such clients; he is defending them at this stage. He is arguing the opposite of conscience-over-design in this paragraph, which is why the concession is needed. Resource inequality appears two paragraphs later and serves a different purpose, showing when the permission lapses.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'The author’s distinction between a justification and an exemption most strongly implies that:',
        options: [
          'professionals should never be granted permissions unavailable to ordinary persons',
          'a defense that forecloses further questioning is for that reason suspect',
          'institutions are able to answer on behalf of their members when those members are challenged',
          'the adversary system is justified only if every defendant is acquitted',
        ],
        correctAnswer: 1,
        explanation:
          'The author defines a justification as "a reason offered to someone" that "can be examined" and an exemption as "a door closed," and objects that the systemic sentence is used to mean "the questioning stops there." The implication is that closure itself is the mark of the misuse. Denying professionals special permissions contradicts the concession that such permissions "are the point." The idea that institutions can answer for their members is the assumption he refutes: "institutions do not give accounts. They have no voice." Universal acquittal is nowhere suggested; the system’s advertised good is better verdicts, not favorable ones.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s claim that the professional still owes a personal accounting?',
        options: [
          'Most defense lawyers report private discomfort about clients they believe to be guilty.',
          'Adversary systems have been found to produce more accurate verdicts than inquisitorial systems do.',
          'Some professions operate without any written code of ethics.',
          'A professional who evaluated her institution’s performance before each act would produce judgments so unreliable that the institution could no longer generate the good it exists to produce.',
        ],
        correctAnswer: 3,
        explanation:
          'The author’s own concession supplies the vulnerability: the institution works only by "assigning people parts and asking them to play those parts rather than to freelance." If individual evaluation is exactly what destroys the institution’s output, then requiring each professional to render the accounting is self-defeating on the author’s own terms. Private discomfort is a fact about feelings, not about who owes an account. A finding that adversary systems work well makes the account easy to give, but it does not show none is owed — the warrant would still need stating. The absence of written codes is beside the point, since the author is describing a moral duty rather than a codified one.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'Which of the following best illustrates the misuse of role morality that the author describes?',
        options: [
          'A physician who declines a patient’s request because she believes granting it would harm him',
          'A journalist who withholds a leaked name after weighing the public interest against the harm to the person named',
          'An auditor who signs a misleading financial statement and explains that scrutinizing management’s assumptions is not the auditor’s assigned function',
          'A soldier who disobeys an order that he judges to be unlawful',
        ],
        correctAnswer: 2,
        explanation:
          'The misuse is converting "a justification into an exemption" — invoking the assigned part so that "the questioning stops there." The auditor does exactly that, letting the description of his function close the door rather than offering a reason that could be examined. The physician and the journalist are both weighing reasons and rendering accounts, which is the practice the author endorses. The soldier is refusing to let the role settle the question, the opposite of the abuse under discussion.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In context, the statement that "a machine that does not make it has no warrant to lend" most nearly means that:',
        options: [
          'institutions that perform badly should be reformed rather than abolished',
          'professionals are entitled to presume that their institutions function as advertised',
          'the good an institution produces is always difficult to measure with confidence',
          'a role confers permission only so long as the institution actually produces the good that justifies the role',
        ],
        correctAnswer: 3,
        explanation:
          'The sentence completes the conditional about unequal resources: if the adversary system did not yield better verdicts, the permission "would not merely be strained. It would be void, because its entire warrant is the good the machine is supposed to make." The permission is thus contingent on actual production of the good. Reform versus abolition is a policy question the passage does not take up. A presumption that institutions work is the "given" or "weather system" attitude the author warns against. And difficulty of measurement is a different worry from the one raised here, which concerns whether the good exists at all.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-eth-05',
    section: 'cars',
    discipline: 'animal ethics',
    title: 'The Painless Slaughterhouse',
    needsReview: true,
    passageText:
      'The modern case for animals has been won, to the extent it has been won at all, by an appeal to suffering. The argument is beautifully simple. Pain is bad; it is bad wherever it occurs; and the fact that it occurs in a creature who cannot complain is no reason to discount it. From that beginning came the campaigns against the crate and the cage, the exposés and the reforms, and a real change in what ordinary people are willing to countenance. I have no wish to disparage an argument that has done so much work.\n\nBut consider the following case, which its proponents seldom do. Imagine a facility in which the animals live in evident contentment, are handled without fear, and are killed by a method that produces no distress of any kind — the whole operation calibrated so that at no point does any creature suffer more than it would in a field. On the suffering account, what precisely is left to object to? Nothing, and the honest utilitarians say so. The pain has been engineered out; the ledger balances. An argument that began by condemning the slaughterhouse ends by writing its specifications.\n\nThis is not a quibble about an unlikely case. It is a diagnosis of what the argument was about all along. Suffering-based reasoning treats an animal as a location where a quantity occurs. What is bad is the quantity; the animal is the vessel it happens in. Reduce the quantity to zero and the vessel has no further claim to press, which is why the framework converts so readily into a program of welfare improvements — larger enclosures, gentler methods — that leaves the underlying relation exactly where it found it. Anyone who has watched a reform movement absorbed by the industry it set out to abolish has watched that conversion happen.\n\nThe alternative is to say that an animal is not a location but a subject: a creature for whom things go well or badly, who has a life in the sense of a course rather than a duration, who is trying to do something — forage, build, raise, return — that can be interrupted. If that is what an animal is, then the wrong in taking its life is not that the taking hurts. The wrong is that a life with its own direction was converted into an instrument of somebody else’s purposes. Hurting and wronging come apart. You can hurt a creature without wronging it, as the veterinarian does; you can wrong it without hurting it at all.\n\nHere the obvious objection arrives, and it is a good one. Is this not sentimental anthropomorphism, projecting biography onto beings that have none? Perhaps; but notice that the burden does not lie where the objector assumes. I need not claim that a hen conceives of her future or narrates her days. I need only claim that there is something she is doing, that it can go better or worse for her, and that this can be seen by anyone willing to watch her rather than to measure her. The suffering theorist grants me most of this already. He must, since he holds that she can be made miserable, and misery is not a property of thermometers.\n\nWhich leaves a strategist’s dilemma I will not pretend to resolve. The suffering argument persuades; the subject argument is true. What I insist on is only that we know which one we are making, because an argument that can be satisfied by a better killing floor was never, in the end, an argument about the animals.',
    questions: [
      {
        question: 'The main point of the passage is that:',
        options: [
          'arguments from animal suffering should be abandoned because they have failed to change public behavior',
          'killing an animal is wrong only in cases where the killing causes the animal distress',
          'because a wrong measured in suffering can be discharged by removing the suffering, the case for animals should rest instead on their being subjects whose lives can go better or worse',
          'welfare reforms such as larger enclosures and gentler handling are the most promising route to ending animal exploitation',
        ],
        correctAnswer: 2,
        explanation:
          'The passage moves from the painless facility, where on the suffering account "nothing" is left to object to, to the alternative that an animal is "a subject: a creature for whom things go well or badly." The author explicitly credits the suffering argument with producing "a real change in what ordinary people are willing to countenance," so failure to change behavior misstates him. Making wrongness depend on distress is the view he is attacking. And welfare reform is what he says the framework "converts so readily into," leaving "the underlying relation exactly where it found it."',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The imagined facility in which no animal suffers serves primarily to:',
        options: [
          'propose a practical standard that existing facilities ought to be required to meet',
          'concede that utilitarian reasoning reaches the same conclusion the author reaches',
          'demonstrate that no method of killing can in fact be made painless',
          'show that the suffering framework, followed consistently, has no objection left to raise',
        ],
        correctAnswer: 3,
        explanation:
          'The author poses the case and answers his own question — "what precisely is left to object to? Nothing, and the honest utilitarians say so" — concluding that the argument "ends by writing its specifications." It is a reductio, not a recommendation; nothing suggests facilities should aim at it. It shows utilitarian reasoning diverging from his conclusion rather than agreeing with it. And he never disputes that painless killing is possible; the hypothetical only works if it is granted.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward suffering-based arguments for animals is best described as:',
        options: [
          'appreciative of their practical achievement while convinced that they rest on the wrong ground',
          'contemptuous of them as a sentimental evasion of the real question',
          'entirely persuaded by them, and concerned only to extend their reach',
          'indifferent, since he regards the underlying debate as unresolvable',
        ],
        correctAnswer: 0,
        explanation:
          'He calls the argument "beautifully simple," credits it with the reforms and with real change in public opinion, and writes "I have no wish to disparage an argument that has done so much work" — then argues that it treats the animal as "a location where a quantity occurs." Contempt is ruled out by that explicit refusal to disparage; sentimentality is a charge raised against his own view, not against theirs. He is not persuaded, since he says the subject argument "is true" and the other merely "persuades." And he is far from indifferent: he closes by insisting we know which argument we are making.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most undermine the author’s distinction between hurting and wronging?',
        options: [
          'Most consumers say they would pay more for meat from animals that were raised without distress.',
          'Any interruption of a creature’s ongoing pursuits is itself experienced by the creature as a form of distress, so that no wrong of the kind the author describes could occur without suffering.',
          'Some veterinary procedures cause an animal more pain than they ultimately prevent.',
          'Welfare reforms have measurably reduced the number of animals kept in close confinement.',
        ],
        correctAnswer: 1,
        explanation:
          'The distinction requires that the two can be separated: "you can wrong it without hurting it at all." If interrupting a creature’s pursuits always registers as distress, then every wrong the author names is also a hurt, the painless facility becomes impossible in principle, and the suffering framework recaptures everything he wanted to place outside it. Consumer willingness to pay concerns markets, not the conceptual distinction. A veterinary procedure that hurts more than it helps nibbles at one illustration while leaving the hurting-without-wronging point intact. And the success of welfare reform speaks to tactics, which the author has already conceded.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'The author would most likely accept which of the following as the strongest evidence that a given creature is a "subject" in his sense?',
        options: [
          'Observation that the creature pursues something over time and that its circumstances can be better or worse for it',
          'Evidence that the creature conceives of its own future and can narrate its past experiences',
          'A demonstration that the creature reliably responds to painful stimuli',
          'A showing that the creature resembles a human being in appearance and behavior',
        ],
        correctAnswer: 0,
        explanation:
          'He states his minimum condition outright: "I need only claim that there is something she is doing, that it can go better or worse for her, and that this can be seen by anyone willing to watch her." Conceiving of a future and narrating days are exactly the demands he says he "need not" meet. Response to painful stimuli is the suffering criterion whose adequacy the whole passage disputes. Resemblance to human beings is the anthropomorphism charge he answers by lowering the bar rather than by asserting likeness.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In context, the remark that "misery is not a property of thermometers" most nearly means that:',
        options: [
          'instruments are unable to measure animal welfare with any accuracy',
          'the suffering theorist relies too heavily on quantitative methods of investigation',
          'misery must be given a precise definition before it can be studied at all',
          'to call a creature miserable is already to treat it as more than a place where a quantity is registered',
        ],
        correctAnswer: 3,
        explanation:
          'The remark completes the claim that the suffering theorist "grants me most of this already. He must, since he holds that she can be made miserable" — misery, unlike a temperature reading, can only belong to something for whom things go badly, which is the author’s notion of a subject. It is not a complaint about the accuracy of instruments; a thermometer measures perfectly well what it measures. It is not a general objection to quantitative method, since the author’s point is about what kind of thing can bear the predicate. And no definitional demand is made anywhere in the paragraph.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-eth-06',
    section: 'cars',
    discipline: 'ethics of technology',
    title: 'What I Give Away Is Not Mine',
    needsReview: true,
    passageText:
      'The law of privacy rests on a picture, and the picture is of a person deciding what to reveal. On this account personal information is a possession: mine to keep, mine to trade, and the only question a regulator must answer is whether the trade was free and informed. Hence the apparatus we have built — the notices, the checkboxes, the preference centers, the long recitations that nobody reads. Hence, too, the retort that ends most conversations on the subject: if you have nothing to hide, what is it that worries you so?\n\nThe picture is not merely inadequate. It is addressed to the wrong object. What modern systems want from me is not my secrets. It is my resemblance to you.\n\nConsider what a sufficiently large collection of records makes possible. From the disclosed habits of a hundred thousand people who share some feature with me, a system learns to predict what a person of that description will do — how likely to repay, to relapse, to quit, to vote. It then applies that prediction to a man who disclosed nothing whatever. He signed no notice; he was never asked; and yet he is now known, or treated as known, on the strength of my choices and yours. The information that will govern his life was not taken from him. It was inferred about him from us. My consent, however scrupulously obtained, was consent to something whose effects I do not bear.\n\nOnce this is clear, the standard defenses come apart in the hand. "Nothing to hide" assumes that a disclosure is about the discloser; but the exposure runs sideways, onto people who merely resemble him and who never spoke. And individual control, the great achievement of privacy law, turns out to be a currency in the wrong denomination. You cannot purchase a collective condition through individual transactions, any more than a person can buy clean air by declining to drive. My abstention costs me and protects nobody, since the model needs only enough people like me, and there are always enough.\n\nI expect the objection that this reasoning licenses paternalism — that if consent cannot do the work, then somebody else will decide what may be known about me, and that somebody is unlikely to have my interests at heart. The worry is legitimate and I do not want to wave it away. But it survives only if we assume that the sole alternative to individual permission is prohibition, and that assumption smuggles back in the very picture I am contesting. The question is not what may be collected, which is where the consent framework fixes our attention and where paternalism does indeed loom. The question is what may be inferred, and against whom an inference may be used. A rule forbidding a lender to act on a predicted relapse takes nothing from me that I might have wished to sell. It restricts what may be done to a third party in my name.\n\nThis is why privacy belongs with the other goods we long ago stopped treating as personal property — not because individuals do not matter, but because the harm in question is not shaped like a taking. It is shaped like a discharge into a commons. And the peculiar cruelty of the present arrangement is that it asks each of us, one at a time, to authorize a system whose entire power lies in the fact that we are not, and never were, one at a time.',
    questions: [
      {
        question: 'The central argument of the passage is that:',
        options: [
          'individuals should refuse to disclose personal information in order to protect both themselves and others',
          'because the power of data lies in inference across people, privacy cannot be secured through individual consent and should be governed as a shared condition',
          'the collection of personal data should be prohibited except where a regulator has approved it in advance',
          'privacy notices fail chiefly because they are too long and too technical for ordinary readers to understand',
        ],
        correctAnswer: 1,
        explanation:
          'The author argues that what systems want is "my resemblance to you," that consent is therefore "a currency in the wrong denomination," and that privacy "belongs with the other goods we long ago stopped treating as personal property." Individual refusal is explicitly futile on his account: "My abstention costs me and protects nobody." Prior approval for collection is the paternalist prohibition he sidesteps by shifting the question from collection to inference. And the unread recitations are one symptom of the possession picture, not the failure he identifies.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The comparison to buying clean air by declining to drive functions primarily to:',
        options: [
          'argue that data collection produces physical harms comparable to those of pollution',
          'suggest that individuals bear personal responsibility for harms they collectively cause',
          'show why an individual’s refusal cannot secure a good that exists only collectively',
          'propose that data practices be regulated by environmental authorities',
        ],
        correctAnswer: 2,
        explanation:
          'The comparison illustrates the sentence immediately before it — "you cannot purchase a collective condition through individual transactions" — and is followed by the point that abstention "protects nobody, since the model needs only enough people like me." It concerns the structure of the good, not the severity or physical character of the harm. It assigns individuals no responsibility; it denies that individual action is efficacious at all. And no institutional proposal about environmental agencies is made; the author’s proposals concern inference and use.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'The author’s treatment of the "nothing to hide" retort suggests that he regards it as:',
        options: [
          'misdirected, because the exposure at issue falls on people other than the one who disclosed',
          'sound, but insufficiently sensitive to the embarrassment of ordinary people',
          'the strongest argument available to defenders of current data practices',
          'an objection that would succeed if consent procedures were substantially improved',
        ],
        correctAnswer: 0,
        explanation:
          'He writes that the retort "assumes that a disclosure is about the discloser; but the exposure runs sideways, onto people who merely resemble him and who never spoke." The complaint is one of misaimed reference, not of insufficient sensitivity — the author is not arguing that disclosers have more to hide than they think. He never ranks it as the strongest defense; he lists it among "the standard defenses" that "come apart in the hand." And improved consent procedures would not rescue it, since the man harmed by inference never gave or withheld consent at all.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s argument?',
        options: [
          'Surveys find that most people do not read privacy notices before agreeing to them.',
          'Predictions drawn about third parties are sometimes inaccurate.',
          'Very large data collections are expensive to assemble and costly to maintain.',
          'Predictive systems lose nearly all of their accuracy unless the specific individual being evaluated has recently supplied data about himself.',
        ],
        correctAnswer: 3,
        explanation:
          'Everything in the passage depends on inference running sideways: the man "signed no notice" yet "is now known… on the strength of my choices and yours." If prediction about a person requires that person’s own recent data, then his consent once again governs what may be known about him, individual control regains its purchase, and the commons analogy fails. Unread notices reinforce rather than undercut the author. Occasional inaccuracy does not restore the consent link and arguably compounds the harm he describes. Cost of assembly bears on who can build such systems, not on whether consent can regulate them.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'Which policy would best reflect the shift in focus the author recommends?',
        options: [
          'Requiring every firm to obtain renewed consent from each of its users once a year',
          'Barring an insurer from setting an applicant’s premium on the basis of predictions derived from other people’s records',
          'Prohibiting the collection of any health-related information whatsoever',
          'Allowing individuals to sell their personal data at a price each of them sets',
        ],
        correctAnswer: 1,
        explanation:
          'The author states the shift explicitly: "The question is not what may be collected… The question is what may be inferred, and against whom an inference may be used," and his own example forbids "a lender to act on a predicted relapse." Barring the insurer from acting on predictions built from other people’s records is that rule applied. Renewed consent stays inside the permission framework he says is denominated wrongly. A blanket collection ban is the prohibition where, he says, "paternalism does indeed loom." And a market in personal data entrenches the possession picture the passage is written against.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'In context, the claim that the harm "is shaped like a discharge into a commons" most nearly means that:',
        options: [
          'personal data ought to be made freely available to everyone on equal terms',
          'firms dispose of user data carelessly once they have finished using it',
          'the harm spreads through a shared condition rather than removing something from a particular owner',
          'privacy violations are best remedied by compensating the individuals whose data was taken',
        ],
        correctAnswer: 2,
        explanation:
          'The phrase is offered in explicit contrast to a taking — "the harm in question is not shaped like a taking" — and follows the clean-air comparison, in which what is degraded is a condition everyone shares rather than anyone’s holding. It is a description of how the harm propagates, not a proposal to publish data. Careless disposal misreads "discharge" as waste handling; the author means release into something common. And compensating owners restores exactly the property model he says cannot capture a harm that falls on people who own none of the data involved.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
]
