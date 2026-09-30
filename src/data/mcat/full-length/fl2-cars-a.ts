import type { MCATPassage } from '../types'

/**
 * MCAT Full-Length Form 2 — CARS, file A (passages 1–5, 6 questions each).
 *
 * Five original argument-driven passages (500–600 words) across humanities and
 * social-science genres: ethics / political philosophy, population health,
 * theater and dance, psychology, and religion (in a nineteenth-century
 * essayist voice). Every key is derivable from the passage alone; no outside
 * knowledge is needed.
 */
export const FL2_CARS_A_PASSAGES: MCATPassage[] = [
  {
    id: 'fl2-cars-a-01',
    section: 'cars',
    discipline: 'ethics / political philosophy',
    title: 'The Distance of the Stranger',
    passageText:
      'A child is drowning in a shallow pond a few yards from where you stand, and a child is starving in a country you will never visit. Nearly everyone agrees that you must wade in after the first. Far fewer feel that they are similarly bound to the second, though a modest sum would save her as surely as a wet pair of trousers saves the first. The philosopher’s usual move is to insist that the difference between the two cases is merely one of distance, that distance is no more morally relevant than hair color, and that our reluctance in the second case is therefore a failure of consistency to be corrected. I want to grant the philosopher almost everything and still resist the conclusion.\n\nGrant, first, that the far child’s life is worth precisely what the near child’s is worth. Anyone who denies this is not making a claim about distance but about persons, and it is a claim they would be ashamed to state plainly. Grant, second, that the feeling which pulls us toward the near child is not itself a moral perception. It is a fact about attention. We are creatures who see what is in front of us, and the pond is in front of us. A being who felt the starving child as vividly as the drowning one would be a better being than we are, but it would not be us, and a morality is not a description of better beings. It is a set of demands that the beings we actually are can be expected to meet.\n\nHere is where I part from the philosopher. He treats the pull of the near as a bias to be subtracted, like a thumb on a scale. I think it is better understood as the condition under which obligation becomes definite. The near stranger presents me with a situation: a particular person, a particular danger, a particular thing I can do, and no one else placed as I am placed. The far stranger presents me with a statistic, however real, and with an open question about what I in particular am supposed to do about it — a question that a million others could answer as well as I. What proximity supplies is not greater worth but a determinate claim. It tells me that the duty is mine.\n\nNotice that this argument is not about family or friends. Their claims on us are grounded in relationship and shared history, and the drowning child has neither. She is a stranger. The point is that strangers, too, can become particular to us, and the way they do it is by turning up. A duty to everyone is, in practice, a duty that waits for someone to specify it; a duty to the person in the pond has already been specified.\n\nThe philosopher will reply that this makes morality hostage to accident, since who turns up is a matter of luck. So it is. But the alternative — a morality in which every claim on me is equally definite because every person is equally distant — is a morality in which nothing is definite at all, and the predictable result is not heroic impartiality but paralysis dressed as principle. We owe the far stranger regard, and a portion of what we have. We owe the near stranger our action, because action is the one thing that proximity, and nothing else, has made ours to give.',
    questions: [
      {
        question: 'Which of the following best expresses the author’s central claim?',
        options: [
          'The lives of distant strangers are worth less than the lives of those nearby, though it is shameful to say so.',
          'Our stronger response to nearby strangers is a bias that a consistent morality would have to subtract.',
          'Nearness does not raise a stranger’s worth, but it does make a duty toward that stranger definitely one’s own.',
          'Obligations to strangers, whether near or far, are grounded in the same relationships that bind us to family.',
        ],
        correctAnswer: 2,
        explanation:
          'The author grants that the far child’s life is worth exactly what the near child’s is worth, then argues that proximity supplies “not greater worth but a determinate claim” — the duty becomes definitely mine. The worth-less option is the view the author says people “would be ashamed to state plainly.” The bias-to-subtract option is the philosopher’s position, which the author explicitly rejects. The relationships option contradicts the fourth paragraph, which says the drowning child has no relationship or shared history with the rescuer.',
        skill: 'main-idea',
      },
      {
        question: 'It can be inferred that the author would regard a person who felt the suffering of distant strangers as vividly as that of nearby ones as:',
        options: [
          'admirable, but not the standard by which the demands of morality should be set.',
          'mistaken about the relative worth of near and distant persons.',
          'typical of the beings that morality is designed to address.',
          'more likely than others to suffer the paralysis that the author warns of in the final paragraph.',
        ],
        correctAnswer: 0,
        explanation:
          'The author says such a being “would be a better being than we are, but it would not be us,” and that morality is a set of demands the beings we actually are can meet — so the person is admirable but not the measure of what morality may demand. The mistaken-about-worth option fails because the author insists near and far lives are worth the same; feeling them equally is not an error. The typical option reverses the passage, which treats such sensitivity as exceptional. The paralysis option concerns a morality in which every claim is equally definite, not an individual’s vividness of feeling.',
        skill: 'inference',
      },
      {
        question: 'The author’s argument that proximity “tells me that the duty is mine” depends on the assumption that:',
        options: [
          'a stranger who turns up nearby is more likely to be saved than one who is far away.',
          'the far stranger’s need is less urgent than the near stranger’s because it is less visible.',
          'no one other than the bystander is capable of rescuing the child in the pond.',
          'a duty that could equally be discharged by many people is less definite for any one of them.',
        ],
        correctAnswer: 3,
        explanation:
          'The author contrasts the near case, where “no one else [is] placed as I am placed,” with the far case, where a million others could act as well as I; the conclusion that the near duty is mine follows only if a duty shared equally among many is less definite for each. The likelihood-of-rescue option concerns outcomes, which the author never invokes. The urgency option contradicts the author’s concession that the far child’s need is just as real. The capability option is too strong: the argument turns on placement, not on the bystander being the only possible rescuer.',
        skill: 'assumption',
      },
      {
        question: 'Suppose a relief agency showed a donor a photograph and the name of one specific distant child whose life the donor’s contribution would save. Based on the passage, the author would most likely say that this:',
        options: [
          'is a manipulation that substitutes feeling for the moral perception the donor lacks.',
          'moves the far stranger’s claim toward the definiteness that proximity ordinarily provides.',
          'cannot change the donor’s obligation, since the child remains a matter of statistics.',
          'demonstrates that distance was morally relevant all along.',
        ],
        correctAnswer: 1,
        explanation:
          'For the author, the far stranger’s claim is indefinite because it is “a statistic” with “an open question” about what I in particular should do; a named child and a specific act the donor can perform supply the particularity that the author says strangers acquire “by turning up.” The manipulation option misreads the passage, which treats the pull of attention as a fact rather than a fraud. The statistics option ignores that the child is no longer presented as a statistic. The distance option contradicts the author’s concession that distance does not affect worth.',
        skill: 'new-information',
      },
      {
        question: 'Which of the following situations is most analogous to the philosopher’s position as the author presents it?',
        options: [
          'A judge who instructs jurors to disregard a witness’s demeanor because it reveals nothing about the truth of the testimony.',
          'A doctor who treats the patients in her own waiting room before those on a distant hospital’s list.',
          'A teacher who gives extra help to whichever student happens to ask for it first.',
          'A lifeguard who abandons his post at a crowded beach in order to raise money for swimming lessons in a town he has never visited.',
        ],
        correctAnswer: 0,
        explanation:
          'The philosopher holds that distance is “no more morally relevant than hair color” and that the pull of the near is a bias to be subtracted; a judge who tells jurors to strip out an irrelevant influence is doing exactly that. The doctor and teacher options describe acting on whoever is nearest or turns up first, which is the author’s position, not the philosopher’s. The lifeguard option abandons a definite near duty for a distant cause, an extreme neither party recommends.',
        skill: 'application',
      },
      {
        question: 'According to the passage, each of the following distinguishes the near stranger’s claim from the far stranger’s EXCEPT:',
        options: [
          'the near stranger’s claim identifies a particular action to be taken.',
          'the near stranger’s claim does not wait for someone else to specify it.',
          'the near stranger’s claim rests on shared history with the rescuer.',
          'the near stranger’s claim falls on someone whom no one else is placed to replace.',
        ],
        correctAnswer: 2,
        explanation:
          'The fourth paragraph states that the drowning child has neither relationship nor shared history with the rescuer, so shared history is not what sets her claim apart — it is the feature the author explicitly denies. The particular-action, already-specified, and no-one-else-placed features are all listed in the third and fourth paragraphs as what proximity supplies and the far stranger’s claim lacks.',
        skill: 'detail',
      },
    ],
  },
  {
    id: 'fl2-cars-a-02',
    section: 'cars',
    discipline: 'population health',
    title: 'When a Harm Becomes a Problem',
    passageText:
      'Every society tolerates an enormous amount of avoidable death, and every society is outraged by some of it. The interesting question is not why the outrage exists but why it lands where it does. Two conditions may kill the same number of people each year, and one will have a ministry, a budget and a week named after it, while the other is filed under bad luck. What makes the difference is rarely the size of the harm. It is whether the harm has been made countable and whether it has been attached to something a collective actor could plausibly change.\n\nConsider how deaths on the roads were treated for the first half-century of the motor car. They were “accidents” — the word itself was a verdict — and each was explained by the carelessness of the particular driver involved. Nothing changed until someone began to tally the deaths per mile travelled and to notice that the tally varied with the width of the shoulder, the angle of the curve and the shape of the steering column. The deaths had not increased; they had been aggregated, and aggregation turned a thousand private misfortunes into a single public pattern. Once a pattern was attached to road design, the road became responsible, and what the road is responsible for, a government can be asked to fix.\n\nThis is the mechanism by which a harm becomes a public-health problem, and it has two parts that are easy to run together. Counting is the first, but counting alone is not enough: societies have long counted the poor without deciding that poverty is a disease. The second part is the identification of a lever — a policy, a product, a practice — whose adjustment would move the number. A harm with a number and no lever is a tragedy. A harm with a lever and no number is a grievance. Only the pair makes a problem.\n\nThe obvious objection is that this mechanism has no natural limit. If anything countable that a policy could reduce is a public-health problem, then loneliness, unemployment, long commutes and bad marriages are all candidates, and the field swallows the whole of social life. Critics who press this objection usually conclude that public health should return to its proper business of infectious disease and sanitation, leaving the rest to politics.\n\nI think the objection identifies a real danger and draws the wrong lesson from it. The danger is not that too many harms will be counted; it is that the word “health” will be used to place a harm beyond argument, as if to name a lever were to settle who should pull it and at what cost. The lesson is not to shrink the field but to keep the two parts of the mechanism separate in public speech. Let the counting be done by anyone who can do it honestly. Let the claim that a lever exists be treated as what it is — an empirical claim, testable and often wrong. And let the decision to pull the lever remain a political decision, made by people who can be voted out, rather than a medical one, made by people who cannot. A society that follows this rule will still have to choose which of its avoidable deaths to be outraged by. But it will at least know that it is choosing.',
    questions: [
      {
        question: 'The author’s primary purpose in the passage is to:',
        options: [
          'argue that public health should confine itself to infectious disease and sanitation.',
          'explain how harms come to be treated as public-health problems and how that process should be governed.',
          'show that road deaths were mistakenly regarded as accidents for the first half-century of the motor car.',
          'demonstrate that the size of a harm determines how much outrage a society directs at it.',
        ],
        correctAnswer: 1,
        explanation:
          'The passage first lays out a two-part mechanism (counting plus a lever) by which a harm becomes a public-health problem, then answers an objection by proposing how the parts should be kept separate in public speech — explanation followed by prescription. The confine-to-infectious-disease option is the critics’ conclusion, which the author calls the wrong lesson. The road-deaths option is a single illustration, not the purpose. The size-of-harm option is the view the author denies in the opening paragraph.',
        skill: 'main-idea',
      },
      {
        question: 'According to the passage, road deaths became a public-health problem when they:',
        options: [
          'began to increase with the growing number of motor cars.',
          'were recognized as resulting from the carelessness of individual drivers.',
          'were tallied for the first time by a government ministry.',
          'were shown to vary with features of roads that could be altered.',
        ],
        correctAnswer: 3,
        explanation:
          'The author’s mechanism requires both aggregation and a lever, and the road example supplies both at once: the tally varied with shoulder width, curve angle and steering-column shape, which attached the pattern to road design that a government could be asked to fix. The increase option is contradicted directly — “the deaths had not increased.” The carelessness option describes the earlier “accident” framing that kept the deaths private. The ministry option is unsupported; the passage says “someone” began to tally, and counting alone is in any case insufficient.',
        skill: 'detail',
      },
      {
        question: 'The author mentions that societies “have long counted the poor without deciding that poverty is a disease” in order to:',
        options: [
          'show that aggregation by itself does not turn a harm into a public-health problem.',
          'suggest that poverty is a harm for which no lever has been identified.',
          'illustrate the danger that the field of public health will swallow all of social life.',
          'concede that some harms cannot be made countable.',
        ],
        correctAnswer: 0,
        explanation:
          'The sentence immediately follows the claim that “counting alone is not enough” and precedes the introduction of the second part of the mechanism, the lever; it serves to separate counting from problem-making. The no-lever option goes beyond the text, which uses poverty only to show that counting is insufficient, not to assert that no lever exists. The swallowing option belongs to the critics’ objection in a later paragraph. The uncountable option contradicts the example, in which the poor have been counted.',
        skill: 'function',
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s account of how harms become public-health problems?',
        options: [
          'Several conditions that killed very few people have been given ministries and budgets after being counted and attached to a lever.',
          'Governments frequently fail to pull levers that public-health officials have identified.',
          'Across many societies, the harms treated as public-health problems are those with the highest death tolls, whether or not a lever exists.',
          'Critics of public health’s expansion have rarely proposed returning the field to infectious disease alone.',
        ],
        correctAnswer: 2,
        explanation:
          'The author claims the difference is “rarely the size of the harm” and that a number without a lever yields only a tragedy; evidence that problem status tracks death toll regardless of any lever contradicts both claims. The few-deaths option supports the author, since low-toll harms became problems by the author’s mechanism. The failure-to-act option is consistent with the passage, which separates identifying a lever from the political decision to pull it. The critics option concerns what critics propose, not how harms become problems.',
        skill: 'strengthen-weaken',
      },
      {
        question: 'Suppose a campaign declares that loneliness is a public-health crisis and demands that the question be taken “out of politics.” The author would most likely respond that the campaign:',
        options: [
          'is right, because loneliness can be counted and a lever for reducing it may exist.',
          'is wrong, because loneliness is a private misfortune rather than a public pattern.',
          'has confused a tragedy with a grievance.',
          'has misused the language of health to shield a political choice from debate.',
        ],
        correctAnswer: 3,
        explanation:
          'The final paragraph identifies the real danger as using the word “health” to “place a harm beyond argument” and insists that the decision to pull a lever “remain a political decision”; a demand to remove the question from politics is exactly this misuse. The is-right option ignores that the author objects to the campaign’s demand, not to counting loneliness. The private-misfortune option contradicts the author’s willingness to count any harm honestly. The tragedy-grievance option applies the author’s labels to the wrong problem; the campaign’s error is about who decides, not about lacking a number or a lever.',
        skill: 'new-information',
      },
      {
        question: 'Based on the passage, which of the following would the author consider necessary before a harm is legitimately called a public-health problem?\n\nI. The harm has been aggregated into a measurable pattern.\nII. A practice or policy has been identified whose change would alter the measure.\nIII. The government has decided to act on the harm.',
        options: [
          'I only',
          'I and II only',
          'II and III only',
          'I, II, and III',
        ],
        correctAnswer: 1,
        explanation:
          'The third paragraph states that counting and a lever together, and only together, make a problem, which requires I and II. Statement III is excluded: the author explicitly separates the decision to pull the lever, which is political and comes afterward, from the existence of the problem. “I only” omits the lever, which the poverty example shows is required; the options containing III import the political decision into the definition.',
        skill: 'application',
      },
    ],
  },
  {
    id: 'fl2-cars-a-03',
    section: 'cars',
    discipline: 'theater and dance',
    title: 'The Fixed and the Found',
    passageText:
      'Dancers who improvise are fond of saying that choreography is a photograph of a movement and improvisation is the movement itself. Choreographers, when they bother to answer, say that improvisation is a conversation in which no one has anything to say. Both remarks are clever, and both assume that the difference between the two practices is a difference in how much freedom the dancer enjoys. I think this assumption is mistaken, and that once it is dropped we can say more precisely what is lost when a dance is fixed, and why the loss is sometimes worth accepting.\n\nBegin with the dancer. A performer executing a set phrase is not a machine. She decides, from night to night, how long to suspend a balance, where to let the weight fall, whether to meet the music squarely or to lag a fraction behind it. A good choreographed performance is thick with decisions of this kind, and a dancer who stopped making them would be recognized at once as dead on the stage. If freedom is the capacity to decide, the choreographed dancer has a great deal of it. What she lacks is not freedom but authority over the shape of the whole.\n\nNow turn to the audience, which is where the real difference lies. When we watch a set work, we know that the sequence of movements was settled before we arrived. Our attention therefore goes to execution: how well this dancer realizes a pattern that exists apart from her, and how her realization differs from the one we saw last season. When we watch an improvisation, we know that the sequence is being settled in front of us. Our attention goes to choice itself — to the moment when a body, having several possibilities open to it, takes one and closes off the rest. What fixing a dance removes is not the dancer’s liberty but the audience’s opportunity to witness a decision about form being made.\n\nThis is a real loss, and it explains a peculiar feature of the improvised evening: its failures are part of its interest. A phrase that goes nowhere, a duet that stalls, is not simply a flaw, because it shows us what was at stake in the phrases that did go somewhere. A set work cannot fail in this way. It can only be performed badly, which is a different and duller thing.\n\nBut the loss purchases something. Only a fixed work can be performed by many dancers across many years, and only repetition makes interpretation possible. We cannot compare two readings of an improvisation, because there is only ever one. The history of dance as an art of interpretation — of a role handed down and remade by each generation that inherits it — depends entirely on the choreographer’s willingness to settle things in advance.\n\nWhat I object to, then, is not either practice but a hybrid that has lately become fashionable: the choreographed piece designed to look improvised, with its studied hesitations and rehearsed accidents. Such work borrows the audience’s excitement at watching a decision while offering no decision to watch. It asks to be judged as a risk while running none. A fixed dance should be content to be fixed, and should seek its vitality in execution, where its dancers are genuinely free; an improvisation should be content to fail, since failure is the price of the one thing it alone can show.',
    questions: [
      {
        question: 'Which of the following best captures the central thesis of the passage?',
        options: [
          'A set dance gives up the spectacle of choice being made before an audience, a sacrifice that is what makes an art of interpretation possible.',
          'Choreographed dancers enjoy less freedom than improvisers, because their movements are settled before the performance begins.',
          'Improvisation is the superior practice, because its failures reveal what is at stake in every successful phrase.',
          'Choreographers should design works that preserve the appearance of spontaneous decision on the stage.',
        ],
        correctAnswer: 0,
        explanation:
          'The author argues that the real difference between the practices lies in what the audience witnesses, that fixing a dance removes the chance to watch a decision about form, and that this loss buys repeatable, interpretable work. The less-freedom option is the shared assumption of the opening remarks, which the author calls mistaken. The superiority option overstates the author’s view; paragraph 5 defends what fixed work gains. The appearance-of-spontaneity option describes the hybrid the author objects to in the last paragraph.',
        skill: 'main-idea',
      },
      {
        question: 'According to the passage, a dancer performing a set phrase:',
        options: [
          'has no meaningful decisions left once the choreography has been learned.',
          'is judged chiefly by how closely she reproduces earlier performances of the role.',
          'controls matters such as timing and weight but not the sequence of the whole.',
          'should adopt some of the hesitations of an improviser to keep the work alive.',
        ],
        correctAnswer: 2,
        explanation:
          'Paragraph 2 lists the decisions a set-phrase dancer makes each night (how long to hold a balance, where the weight falls, how to meet the music) and says what she lacks is authority over the shape of the whole. The no-decisions option contradicts the claim that she is “not a machine.” The reproduces option inverts paragraph 3, where the audience notices how her realization differs from last season’s. The hesitations option recommends the hybrid the author criticizes.',
        skill: 'detail',
      },
      {
        question: 'The author discusses phrases that “go nowhere” and duets that stall primarily in order to:',
        options: [
          'concede that improvisation is a less reliable art than choreography, whatever its other merits.',
          'illustrate the value of what a fixed dance gives up.',
          'suggest that audiences at improvised performances tend to judge the dancers too harshly.',
          'show how a set work is weakened when its dancers perform it badly on a given night.',
        ],
        correctAnswer: 1,
        explanation:
          'The failures are offered as evidence that the loss described in paragraph 3 is real: because the audience watches choice, even a failed choice shows what was at stake, and a fixed work cannot offer this. The concession option misreads the tone; the author treats these failures as part of improvisation’s interest, not a weakness. The harsh-judgment option has no basis in the passage. The set-work option confuses the example with the contrast the author draws afterward — a set work performed badly is “a different and duller thing.”',
        skill: 'function',
      },
      {
        question: 'Which of the following can most reasonably be inferred about the author’s view of the two remarks quoted in the first paragraph?',
        options: [
          'The choreographers’ remark is accurate, while the dancers’ remark is merely clever.',
          'The dancers’ remark is accurate, since improvisation alone captures movement.',
          'Both remarks correctly identify freedom as what separates the two practices.',
          'Both remarks locate the difference between the practices in the wrong place.',
        ],
        correctAnswer: 3,
        explanation:
          'The author says both remarks assume the difference is how much freedom the dancer enjoys, calls that assumption mistaken, and then locates “the real difference” in the audience. Each of the two options that endorse one remark ignores that the author faults both equally. The freedom option restates the very assumption the author rejects.',
        skill: 'inference',
      },
      {
        question: 'The author would most likely criticize which of the following productions?',
        options: [
          'A company’s revival of a decades-old ballet in which a young dancer reinterprets the lead role in her own manner.',
          'An improvising ensemble’s evening in which several long sequences visibly lose their way before the performers recover.',
          'A set piece whose dancers are drilled to feign indecision.',
          'A fixed sequence of movements within which the choreographer lets dancers vary the length of each balance from night to night.',
        ],
        correctAnswer: 2,
        explanation:
          'Dancers drilled to feign indecision produce exactly the hybrid the author objects to: the look of a decision without any decision being made. The revival option exemplifies the interpretation that only fixed works permit, which the author praises. The ensemble option shows improvisation willing to fail, which the author says it should be. The varying-balance option describes the genuine freedom the author says set-phrase dancers already have.',
        skill: 'application',
      },
      {
        question: 'Suppose audiences shown an identical recorded dance reported far greater absorption when told it was improvised than when told it was choreographed. What effect would this finding have on the author’s argument?',
        options: [
          'It would support the claim that what sets improvisation apart for viewers is their belief that choice is happening now.',
          'It would weaken the claim that choreographed dancers make genuine decisions during a performance.',
          'It would support the claim that improvised performances demand more skill from dancers than set ones.',
          'It would weaken the claim that the hybrid form trades on the excitement of watching a decision.',
        ],
        correctAnswer: 0,
        explanation:
          'The author locates the difference in what the audience knows — that the sequence is “being settled in front of us” — so absorption that depends only on being told the dance is improvised supports that account. The genuine-decisions option is irrelevant, since the dance was identical in both conditions. The skill option is unsupported; the finding concerns belief, not difficulty. The hybrid option gets the direction wrong: the finding would support the claim that a dance merely appearing improvised can borrow that excitement.',
        skill: 'new-information',
      },
    ],
  },
  {
    id: 'fl2-cars-a-04',
    section: 'cars',
    discipline: 'psychology',
    title: 'Remembering Together',
    passageText:
      'Nostalgia has a poor reputation among people who think carefully about memory. It is described as a kind of error — the past remembered with its hardships quietly filed away — and as a kind of weakness, a retreat from a present that one has failed to master. Both descriptions treat nostalgia as something that happens inside a single head: a private feeling, accurate or not, about a private past. I want to suggest that this is the wrong place to look for it. Nostalgia is less a feeling one has than a thing one does, and what one does with it is usually done in company.\n\nConsider where nostalgic talk actually occurs. It flourishes at reunions, funerals, anniversaries and the long tables of holiday meals — occasions whose whole purpose is to reassemble a group that time has scattered. It is introduced by a formula, “Do you remember,” that is not really a question. The speaker is not asking for information; she is inviting the listener to confirm that they were there together. When the listener answers by adding a detail of his own — the color of a car, the name of a teacher — he is not correcting the record so much as signing it.\n\nNotice, too, what happens to such memories as they are passed around the table. Disputed details are settled not by evidence but by consensus, and the version that survives is the one that the most people present can recognize. Peculiar experiences are sanded down; shared ones are enlarged. Critics point to this smoothing as proof that nostalgia falsifies the past, and on their own terms they are right. But they are judging a toast as though it were testimony. A remembered summer that has been polished by twenty retellings is a poor historical document and an excellent instrument for making twenty people feel that they belong to one another.\n\nNone of this makes nostalgia harmless. Its danger, however, does not lie where the critics usually place it, in the distortion itself. Every group that remembers together distorts together, and a family that insisted on an audited account of its holidays would soon stop having them. The danger arises when a “we” formed around a table is quietly enlarged — when the polished summer of one family, or one town, or one generation, is offered as the common past of people who were never at the table and whose summers were not like that at all. At that moment the smoothing that once bound a group begins to exclude everyone outside it, and a private ceremony starts to masquerade as public history.\n\nThe remedy is not to police nostalgia for accuracy, which would be both futile and cruel, but to be clear about what kind of act it is. We should listen to stories of the old neighborhood the way we listen to a hymn: as a declaration of belonging, not as a report. And when someone proposes to build policy on such a story, we are entitled to ask the question that a hymn never has to answer — whose memory is this, and who was left out of the room when it was agreed upon?',
    questions: [
      {
        question: 'The author’s central claim about nostalgia is that it:',
        options: [
          'is an error about the past that ought to be corrected wherever it appears.',
          'is a private feeling whose accuracy varies from one person to the next.',
          'is dangerous chiefly because it smooths away the true details of the past.',
          'is better understood as a shared act of belonging than as a private error.',
        ],
        correctAnswer: 3,
        explanation:
          'The author relocates nostalgia from “inside a single head” to a social act performed in company whose function is to make people feel they belong to one another. The error option is the critics’ description, which the author sets aside, and it conflicts with the claim that policing nostalgia for accuracy would be futile and cruel. The private-feeling option is the framing the author calls “the wrong place to look.” The smoothing option places the danger exactly where the author says it does not lie.',
        skill: 'main-idea',
      },
      {
        question: 'In the author’s account, a listener who adds a detail to a nostalgic story is mainly:',
        options: [
          'repairing a mistake in the speaker’s version of what happened.',
          'affirming a past held in common.',
          'requesting information that the listener had himself forgotten.',
          'testing whether the speaker was really present at the event.',
        ],
        correctAnswer: 1,
        explanation:
          'The author says the listener is “not correcting the record so much as signing it,” in reply to an invitation to confirm “that they were there together” — an act of affirming a shared past. The repairing option is the reading the author explicitly sets aside. The requesting option confuses the listener’s reply with a question, and the author says even the speaker’s “Do you remember” is not really a question. The testing option has no basis in the passage.',
        skill: 'detail',
      },
      {
        question: 'The author’s remark that critics are “judging a toast as though it were testimony” implies that the critics:',
        options: [
          'apply a standard of accuracy to speech whose purpose is not to inform.',
          'are right that nostalgic stories ought to meet the standards that govern evidence.',
          'underestimate how accurate group memories become after repeated retellings.',
          'mistake public celebrations of past events for the events themselves.',
        ],
        correctAnswer: 0,
        explanation:
          'A toast is spoken to bind people together, testimony to establish facts; the author grants that nostalgia fails as a historical document but says it succeeds at making people belong, so the critics are measuring it by the wrong standard. The right-about-evidence option contradicts the author’s point that judging nostalgia this way is a category mistake. The more-accurate option reverses the passage, which agrees that retelling smooths and distorts. The mistaking-celebrations option invents a confusion the passage never attributes to the critics.',
        skill: 'inference',
      },
      {
        question: 'Which of the following findings, if true, would most weaken the author’s account of nostalgia?',
        options: [
          'Stories told at successive reunions of a school class tend to converge on a single version.',
          'People who spend an evening reminiscing with old classmates report feeling closer to them.',
          'People reminisce as often and as vividly when alone as with others, and their solitary memories are smoothed just as much.',
          'Towns that describe their past through fond reminiscence sometimes adopt policies that exclude newcomers.',
        ],
        correctAnswer: 2,
        explanation:
          'The author claims nostalgia is “usually done in company” and that its smoothing comes from consensus around the table; if solitary reminiscence were just as frequent and just as smoothed, the social account of both the practice and its distortion would lose its footing. The converging-stories option is exactly what the consensus mechanism predicts. The feeling-closer option supports the claim that nostalgia binds a group. The exclusion option illustrates the danger the author describes in the fourth paragraph.',
        skill: 'strengthen-weaken',
      },
      {
        question: 'Which of the following would the author most likely regard as an example of the danger described in the fourth paragraph?',
        options: [
          'A family whose members argue over dinner about the year a grandparent bought the farmhouse.',
          'A retirement party at which coworkers fondly exaggerate the triumphs of a departing colleague.',
          'A historian who revises a veteran’s cherished recollection of a battle after consulting archival records.',
          'A campaign that presents one town’s fond memories of its old mill as the entire region’s past.',
        ],
        correctAnswer: 3,
        explanation:
          'The danger arises when a “we” formed around one table is enlarged and one group’s polished past is offered as the common past of people who were never there; presenting one town’s memories as the region’s history does exactly this. The family-argument and retirement-party options are nostalgia within the group that formed it, which the author treats as legitimate. The historian option concerns correcting memory for accuracy, which the author calls futile as a remedy but does not identify as the danger.',
        skill: 'application',
      },
      {
        question: 'Suppose a city council proposes to restore a commercial street to the appearance that longtime residents lovingly describe at an annual street festival. The author would most likely advise the council to:',
        options: [
          'verify every reminiscence against photographs and records before approving any design.',
          'also hear from residents who never knew the old street.',
          'reject the plan, since fond memory is never a legitimate basis for a public decision.',
          'proceed as planned, since polished memories are what bind the townspeople together.',
        ],
        correctAnswer: 1,
        explanation:
          'Once a nostalgic story becomes the basis of policy, the author says we must ask whose memory it is and who was left out of the room — here, residents whose pasts the festival’s picture does not include. The verify option is the accuracy-policing the author calls futile and cruel. The reject option is too strong; the author says we are entitled to ask a question, not that such stories can never inform policy. The proceed option ignores the danger of offering one group’s past as everyone’s.',
        skill: 'new-information',
      },
    ],
  },
  {
    id: 'fl2-cars-a-05',
    section: 'cars',
    discipline: 'religion',
    title: 'The Doubter in the Pew',
    passageText:
      'There is a figure familiar to every parish, though seldom spoken of from its pulpit: the man who comes to church and does not believe, or does not believe as he once did, or no longer knows what it is that he believes. He kneels when the congregation kneels; he says the words which the others say; and he goes home, it may be, with a conscience not altogether easy. Upon him the stern moralist of our day has pronounced a verdict. Honesty, we are told, requires that he withdraw; every Sunday that he remains is a Sunday on which he utters with his lips what his mind denies; and a man who will do this in the house of God will do it, one supposes, anywhere.\n\nI confess I cannot share this severity, and I think it proceeds from a misapprehension of what a rite is. The moralist speaks as if the church were a kind of debating society, in which a man’s presence is a vote and his every response a proposition to which he subscribes his name. But the words of a liturgy were not composed by the man who says them, nor are they addressed by him, in his private capacity, to his neighbour. They are older than he is, and will outlast him; they are spoken by the congregation as a body, and he speaks them as one reads aloud a letter written by his fathers — not vouching for every sentiment in it, but owning it as his inheritance and not another’s. To join in such words is to declare, not “This I have proved,” but “These are my people, and this is our speech.”\n\nNor is it evident that the doubter would be more honest out of doors than within. Doubt is not a settled opinion, like a man’s view of the tariff; it is a condition of the soul, and a condition may alter. He who departs at the first shadow has not thereby resolved his uncertainty; he has only removed it from the one place where it might have been answered, or ripened, or at the least borne in company with others who have known the same. I have observed that the doubt which is carried to church for twenty years is a humbler and a wiser thing than the doubt which is carried away from it in a single morning.\n\nYet I would not be understood to say that the doubter may do as he pleases. There is a line, and it runs between the pew and the pulpit. It is one thing to kneel among the congregation and quite another to stand before it; one thing to say the common words and another to be the man to whom others look for assurance. He who takes that office undertakes to speak, not as one voice among many, but as a witness; and a witness who has seen nothing ought to say so, or keep silence.\n\nLet the doubter, then, keep his place, and keep it without shame. The rite asks of him only what he can honestly give — his presence, his voice among the others, his willingness to belong before he is sure. It is a poor religion that will receive a man only when his questions are settled; and it is a poor honesty that can find no way of standing among his people but to leave them. Belief, if it returns, will find him where it left him.',
    questions: [
      {
        question: 'The author’s attitude toward the “stern moralist” is best described as:',
        options: [
          'broad agreement, tempered by sympathy for those whom the moralist condemns.',
          'contemptuous dismissal of a position unworthy of any serious reply.',
          'measured but firm disagreement.',
          'uncertainty about whether the moralist’s verdict is meant to apply to the clergy.',
        ],
        correctAnswer: 2,
        explanation:
          'The author “cannot share this severity” and traces it to “a misapprehension of what a rite is,” then answers the moralist point by point — disagreement that is firm but reasoned rather than scornful. The broad-agreement option reverses the author’s position on the doubter in the pew. The contempt option ignores that the author gives the moralist a sustained reply. The uncertainty option misreads the fourth paragraph, where the author confidently draws his own line at the pulpit.',
        skill: 'tone',
      },
      {
        question: 'According to the author, a worshipper who joins in the liturgy while doubting its content is chiefly:',
        options: [
          'endorsing each proposition in the liturgy as his own settled conviction.',
          'deceiving his neighbours about the true state of his private beliefs.',
          'casting a vote, by his presence, for every doctrine his church teaches.',
          'identifying himself with a people whose ancient words he has inherited.',
        ],
        correctAnswer: 3,
        explanation:
          'The author compares the worshipper to one reading aloud “a letter written by his fathers,” so that joining in declares “These are my people” rather than “This I have proved.” The endorsing option describes the proposition-by-proposition view the author attributes to the moralist. The deceiving option is the moralist’s charge, which the author rejects. The casting-a-vote option is the “debating society” picture the author calls a misapprehension.',
        skill: 'detail',
      },
      {
        question: 'The author contrasts doubt with “a man’s view of the tariff” primarily in order to:',
        options: [
          'suggest that because doubt, unlike a fixed opinion, may change, leaving the church is not the only honest response to it.',
          'show that religious questions are of greater importance to a man than political ones.',
          'argue that the doubter’s uncertainty is as firmly held as any political conviction.',
          'concede that the moralist is right to treat the doubter’s attendance as a public declaration.',
        ],
        correctAnswer: 0,
        explanation:
          'The contrast sets up the claim that doubt is “a condition of the soul” which “may alter,” so that departing does not resolve it and staying may let it be answered or ripen — undercutting the moralist’s claim that honesty requires withdrawal. The importance option imports a ranking the passage never makes. The firmly-held option reverses the contrast, which denies that doubt is a settled opinion. The concede option contradicts the author’s rejection of the “debating society” view.',
        skill: 'function',
      },
      {
        question: 'A lay member who has come to disbelieve is invited to address the congregation on how faith has sustained him through hardship. The author would most likely hold that he:',
        options: [
          'may accept freely, since he would be speaking words that belong to the congregation.',
          'should decline, or else speak candidly of his uncertainty.',
          'should leave the church rather than accept or refuse the invitation.',
          'may accept, provided he has attended faithfully for many years.',
        ],
        correctAnswer: 1,
        explanation:
          'Addressing the congregation about one’s own faith is standing before it “as a witness,” on the pulpit side of the author’s line, where one who has seen nothing “ought to say so, or keep silence.” The accept-freely option wrongly extends the inherited-words defense, which covers only the common liturgy spoken as one voice among many. The leave option contradicts the author’s advice that the doubter keep his place. The long-attendance option makes years of attendance a license the passage never grants.',
        skill: 'inference',
      },
      {
        question: 'Which of the following is most analogous to the doubter’s position as the author conceives it?',
        options: [
          'A shareholder who votes at the annual meeting for a proposal he privately considers unwise.',
          'A candidate who continues to campaign on a platform he has ceased to believe in.',
          'A juror who votes to convict a defendant although he remains unsure of the defendant’s guilt.',
          'A citizen singing an anthem whose claims she doubts.',
        ],
        correctAnswer: 3,
        explanation:
          'Singing an anthem is joining in inherited common words as a declaration of belonging, not signing each claim as a personal proposition — the author’s account of the doubter in the pew. The shareholder and juror options describe votes, in which one’s act is an individual assertion; this is the “debating society” model the author says does not fit a rite. The candidate option resembles the pulpit case, where one speaks as a witness to others and the author would require candor.',
        skill: 'application',
      },
      {
        question: 'Which of the following, if true, would most weaken the author’s claim that the doubter does better to remain in church than to leave?',
        options: [
          'Doubters who leave their churches tend to reach humbler and wiser conclusions than those who stay.',
          'Most congregations contain members who privately doubt some part of what they recite each week.',
          'The liturgies of many churches are centuries older than any member of the present congregation.',
          'Clergy who have lost their faith frequently continue to preach for a number of years afterward.',
        ],
        correctAnswer: 0,
        explanation:
          'The author’s case for staying rests partly on the observation that doubt carried to church for years becomes “humbler and wiser” than doubt carried away in a morning; evidence that leavers fare better on exactly this measure undercuts it. The many-doubters option is consistent with the author’s picture of the doubter as a familiar parish figure. The old-liturgies option supports the inheritance argument. The clergy option bears on the pulpit, not on whether a layman should remain in the pew.',
        skill: 'strengthen-weaken',
      },
    ],
  },
]
