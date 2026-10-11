import type { MCATPassage } from '../types'

/**
 * MCAT Full-Length Form 4 — CARS, file A (passages 1–5, 6 questions each).
 *
 * Five original argument-driven passages (500–600 words) across humanities and
 * social-science genres: literary criticism (what makes a fictional character
 * believable), political science (when experts should decide in a democracy),
 * philosophy (friendship, in an early-twentieth-century essayist voice),
 * sociology (fashion, taste and conformity), and art / aesthetics (restoring
 * vs preserving old paintings). Every key is derivable from the passage alone;
 * no outside knowledge is needed.
 */
export const FL4_CARS_A_PASSAGES: MCATPassage[] = [
  {
    id: 'fl4-cars-a-01',
    section: 'cars',
    discipline: 'literary criticism',
    title: 'The Pressure Behind the Page',
    passageText:
      'Writing manuals tend to agree that a believable character is a consistent one. Establish who she is, the advice runs, and then do not let her act against it: the miser must not suddenly give away his fortune, the coward must not charge the guns. The rule has the appeal of any rule that can be checked, and an editor with a pencil can enforce it. Yet it describes almost none of the characters readers actually believe in. The people we remember from novels are forever doing things we did not expect of them, and it is often at exactly those moments that they seem most alive.\n\nA second answer, older and more respectable, locates believability in detail. The character who has a limp, a particular brand of cigarettes, a habit of rubbing her thumb along the edge of a table, feels solid because the world has pressed its marks into her. There is something to this; a person described only by her virtues is a statue, not a neighbor. But detail is cheap. A writer can supply a hundred particulars and leave us unmoved, because particulars describe a surface, and our belief is not in a surface. We have all met the character who is furnished like a showroom and occupied by no one.\n\nWhat we believe in, I think, is a pressure. A character becomes real to us when she wants something badly enough that the wanting shapes what she notices, what she says, and what she refuses to say, and when that want does not switch off at the end of a chapter because the plot no longer needs it. Consistency of behavior is at best a symptom of such pressure, and a crude one. A person under real pressure will act inconsistently all the time—the miser who has spent his life hoarding against a single fear may, when that fear arrives, spend everything at once—but the inconsistency will make sense backward. We could not have predicted it; once we see it, we cannot imagine it otherwise. That retrospective necessity, not predictability, is the mark of a believable act.\n\nSome critics go further and say that believability is not in the text at all. Readers, they argue, lend characters their own inner lives; given a few strokes on the page, we fill in the rest, as we do with a face glimpsed in a crowd. The character we believe in is partly our own creation. I accept the observation and reject the conclusion. Readers do supply a great deal, but they supply it only when invited, and the invitation is issued by the writer. A character driven by a want we recognize gives us somewhere to put our own experience; a character assembled from traits gives us nowhere. The reader’s contribution is real, but it is a response, and a response to something.\n\nThis view has an uncomfortable consequence for writers who plan. If a believable act must surprise, then a writer who knows in advance everything her character will do is likely to produce someone who merely carries out a schedule. The novelists who speak of characters “taking over” are often dismissed as romantics describing their own inspiration. I suspect they are reporting a technical fact: that they built the pressure well enough for it to generate consequences they had not foreseen. The character who can surprise her author is not a mystery. She is simply the one whose wants were made concrete enough to have implications of their own.',
    questions: [
      {
        question: 'Which of the following best states the central claim of the passage?',
        options: [
          'A character becomes convincing once the writer supplies enough particulars to make her world seem solid.',
          'A character is convincing only if her later conduct never departs from the traits established early on.',
          'A character becomes convincing when a lasting desire governs her conduct, so even her surprises cohere.',
          'A character is convincing chiefly because readers project their own inner lives into the gaps she leaves.',
        ],
        correctAnswer: 2,
        explanation:
          'The author’s own view, stated in paragraph 3 and extended through the end, is that belief attaches to a sustained want that shapes behavior, so that unexpected acts “make sense backward.” The particulars option is the detail theory the author calls “cheap.” The never-departs option is the consistency rule the author rejects in paragraph 1. The projection option is the critics’ conclusion, which the author explicitly rejects while accepting their observation.',
        optionExplanations: [
          'This is the detail theory of paragraph 2, which the author grants “something to” but then dismisses: “detail is cheap,” particulars “describe a surface, and our belief is not in a surface.” It is a view the author rejects, not the central claim.',
          'This is the consistency rule from the writing manuals in paragraph 1. The author says it “describes almost none of the characters readers actually believe in” and calls consistency “at best a symptom” of what really matters, so it is the position being argued against.',
          'The author’s own view, introduced in paragraph 3 with “What we believe in, I think, is a pressure,” is that a sustained want shapes the character’s conduct so that even unexpected acts “make sense backward.” That retrospective coherence, not predictability, is the mark of believability.',
          'This is the critics’ conclusion in paragraph 4. The author accepts their observation that readers supply a great deal but explicitly rejects the conclusion, insisting the reader’s contribution “is a response, and a response to something” the writer provides.',
        ],
        skill: 'main-idea',
      },
      {
        question: 'The author regards consistency of behavior in a character as:',
        options: [
          'an unreliable sign of the quality that actually makes a character convincing',
          'the main reason readers remember the characters of older, classic novels',
          'a standard that binds minor characters in a novel but not its protagonists',
          'a constraint that planning writers adopt to keep their characters obedient',
        ],
        correctAnswer: 0,
        explanation:
          'The author calls consistency “at best a symptom” of the underlying pressure, “and a crude one,” so it is an unreliable indicator of what really produces belief. The author says the characters readers remember are the ones who do the unexpected, the opposite of the second option. The passage never distinguishes minor characters from protagonists. Planning writers are said to risk producing characters who follow a schedule, but the author does not describe consistency as a device they adopt for control.',
        optionExplanations: [
          'The author calls consistency “at best a symptom of such pressure, and a crude one,” meaning it only sometimes accompanies the real source of belief and is not itself the cause. That makes it an unreliable indicator of what actually convinces readers.',
          'The passage says the opposite: the characters readers remember “are forever doing things we did not expect of them,” and those surprising moments are when they “seem most alive.” Consistency is not credited with making characters memorable.',
          'The passage never draws any distinction between minor characters and protagonists. The author discusses believable characters in general, so there is no textual basis for a standard that applies to one group but not the other.',
          'The final paragraph says planning writers risk producing a character who “merely carries out a schedule,” but the author does not describe consistency as a constraint they adopt for control. The problem is foreknowledge, not a deliberate strategy of obedience.',
        ],
        skill: 'detail',
      },
      {
        question:
          'Based on the passage, the author would most likely predict that a writer who adds many new physical and habitual particulars to a flat character will:',
        options: [
          'succeed in making the character believable, provided the particulars are all consistent',
          'make the character less believable, since the added detail distracts readers from the plot',
          'succeed only with readers who happen already to share the habits the character is given',
          'leave the character unconvincing unless the details come to express what the character wants',
        ],
        correctAnswer: 3,
        explanation:
          'The author grants that detail has some value but says particulars “describe a surface” and that belief is placed in a want that “shapes what she notices,” so details convince only when they are driven by that want. The consistency proviso relies on the rule the author rejects. The author never says detail harms believability, only that it is insufficient. Nothing in the passage ties belief to readers sharing a character’s habits.',
        optionExplanations: [
          'This proviso relies on the consistency rule the author rejects in paragraph 1. Moreover, the author argues that detail describes only a surface, so adding consistent particulars still leaves the character “furnished like a showroom and occupied by no one.”',
          'The author never claims detail harms believability or distracts from plot. The argument is that detail is insufficient, not detrimental: “A writer can supply a hundred particulars and leave us unmoved.” This overstates the author’s position.',
          'Nothing in the passage ties belief to readers sharing the character’s habits. The author says readers supply their own experience when “invited” by a recognizable want, not when they happen to share the character’s cigarettes or gestures.',
          'The author grants detail some value but says particulars “describe a surface” while belief attaches to a want that “shapes what she notices, what she says, and what she refuses to say.” Details therefore convince only when they express the character’s pressure, so adding them to a flat character accomplishes little on its own.',
        ],
        skill: 'inference',
      },
      {
        question: 'The author’s example of the miser in the third paragraph primarily serves to:',
        options: [
          'illustrate the kind of rule that an editor with a pencil can readily enforce',
          'show how an act that breaks a character’s pattern can still be convincing',
          'suggest that characters driven by fear are more believable than other types',
          'concede that the consistency rule does apply under conditions of extreme pressure',
        ],
        correctAnswer: 1,
        explanation:
          'The paragraph-3 miser spends everything at once, an act that contradicts his established pattern yet “make[s] sense backward,” which is exactly the author’s point about believable inconsistency. The editor’s rule is illustrated by the miser in paragraph 1, not by this one. Fear is the content of this example, not a claim that fearful characters are more believable. The example undercuts the consistency rule rather than conceding it.',
        optionExplanations: [
          'The editor’s enforceable rule is illustrated by the miser in paragraph 1, who “must not suddenly give away his fortune.” The paragraph-3 miser is a different example, used to show that such a rule misses what makes acts believable.',
          'The paragraph-3 miser, having hoarded against a single fear, spends everything when that fear arrives. The act contradicts his established pattern yet “make[s] sense backward,” which is exactly the author’s point that believable inconsistency has retrospective necessity.',
          'Fear is the particular content of this example, but the author draws no general claim that fearful characters are more believable than others. The point concerns how a sustained want produces coherent surprise, whatever the want is.',
          'The example undercuts the consistency rule rather than conceding it. The author uses the miser to show that “a person under real pressure will act inconsistently all the time,” the opposite of conceding that consistency governs under pressure.',
        ],
        skill: 'function',
      },
      {
        question: 'Which of the following would the author most likely cite as an example of a believable act?',
        options: [
          'A clerk introduced as cautious remains cautious in every scene, exactly as the reader expects.',
          'A cheerful teacher turns cruel in the last chapter because the plot needs a villain at its climax.',
          'A lawyer described down to her diet and wardrobe wins the case the reader expects her to win.',
          'A mother who has hidden her son’s disgrace reveals it herself once hiding it would harm him more.',
        ],
        correctAnswer: 3,
        explanation:
          'The mother’s act is surprising yet follows from a long-held want (protecting her son), so it has the retrospective necessity the author prizes. The cautious clerk is merely predictable, which the author says is not the mark of belief. The teacher’s turn exists because the plot needs it, which the author names as the opposite of a sustained want. The lawyer is the “furnished like a showroom” character, heavy with detail and acting only as expected.',
        optionExplanations: [
          'The cautious clerk is merely predictable. The author says explicitly that “retrospective necessity, not predictability, is the mark of a believable act,” and that characters who never surprise us are the ones writing manuals endorse but readers do not believe in.',
          'A turn that happens “because the plot needs” it is the author’s own example of what belief does not attach to: a want that “does not switch off at the end of a chapter because the plot no longer needs it” is required, and this teacher’s cruelty has no such source.',
          'The lawyer described down to her diet and wardrobe is the character “furnished like a showroom,” heavy with surface detail. Winning the expected case adds predictability, not pressure, so neither element the author values is present.',
          'The mother’s revelation is unexpected after years of concealment, yet it follows from her long-held want to protect her son once hiding the disgrace would harm him more. The act has the “retrospective necessity” the author prizes: unpredictable beforehand, inevitable in hindsight.',
        ],
        skill: 'application',
      },
      {
        question:
          'Suppose a study found that readers asked to describe a character’s inner life gave closely matching descriptions when the novel made the character’s desires concrete, and widely divergent ones when it did not. This finding would most directly:',
        options: [
          'support the author’s claim that what readers supply is a response to cues in the text',
          'support the critics’ view that a believable character is mainly the reader’s own creation',
          'weaken the author’s claim that a believable act must be one the reader could not predict',
          'weaken the author’s view that an accumulation of detail cannot by itself create belief',
        ],
        correctAnswer: 0,
        explanation:
          'If concrete desires in the text constrain what readers supply, reader contributions are responses to something the writer offers, as the author argues against the critics. The critics’ view predicts that readers would supply inner lives largely on their own, which fits the matching pattern poorly. The finding says nothing about whether believable acts are unpredictable. It also concerns desire rather than detail, so it does not bear on the author’s view of detail.',
        optionExplanations: [
          'If concrete desires in the text constrain what readers imagine, then what readers supply is a response to cues the writer provides. This is the author’s reply to the critics in paragraph 4: readers “supply it only when invited, and the invitation is issued by the writer.”',
          'The critics hold that readers lend characters inner lives largely on their own, which predicts divergent descriptions regardless of the text. Matching descriptions when desires are concrete fits that view poorly and supports the author’s rebuttal instead.',
          'The finding concerns how uniformly readers describe inner lives, not whether believable acts are predictable. It neither supports nor weakens the author’s claim about surprise and retrospective necessity, which is a separate strand of the argument.',
          'The study manipulated the concreteness of desires, not the quantity of physical or habitual detail. It therefore says nothing about whether accumulated particulars can create belief, and does not touch the author’s view of detail.',
        ],
        skill: 'new-information',
      },
    ],
  },
  {
    id: 'fl4-cars-a-02',
    section: 'cars',
    discipline: 'political science',
    title: 'Who Draws the Line',
    passageText:
      'Every modern democracy has quietly handed some of its decisions to people nobody elected. Central banks set interest rates; drug regulators decide which medicines may be sold; engineers certify that a bridge will bear its load. Most citizens accept these arrangements without complaint, and they are right to. Yet the same citizens bristle when experts appear to be deciding questions that are properly theirs, and they are right about that, too. The difficulty is saying where the line falls.\n\nThe standard answer is that experts should settle questions of fact and the public should settle questions of value. Experts can tell us how fast a disease will spread under various policies; only the people can say how much liberty they will surrender to slow it. The formula is tidy, and I think it is correct in principle. In practice it is nearly useless, because almost no real decision arrives with its facts and values already separated. The estimate of how fast a disease will spread depends on assumptions about how people will behave, and the choice of which assumptions to treat as reasonable is shaped by what the modeler fears most. The value judgment, for its part, depends on facts that only the modeler can supply. To tell experts to stay on their side of the line is to presume a line that someone must first draw, and whoever draws it has already decided a great deal.\n\nA bolder school of thought concludes that we should stop pretending. If most voters know little about economics or epidemiology, why should their preferences count equally with those of people who have studied these subjects? Let knowledge, not numbers, carry weight. The proposal has the virtue of candor, but it mistakes the kind of authority that knowledge confers. To know more about how to reach an end is not to know more about which ends are worth reaching. An economist may understand better than I do what a tax will cost; she does not understand better than I do how much I mind paying it. Nor are experts free of interests. A profession that is given power over a question tends, over time, to define the question in terms that make its own methods decisive.\n\nA more useful test asks two things of any proposed delegation. First, has the public already chosen the goal, clearly enough that what remains is a matter of means? A legislature that says “keep inflation low and stable” has made the value choice; a central bank that pursues it is carrying out an instruction, not issuing one. Second, can the results be checked by people outside the profession? A bridge that stands or falls, a drug that works or does not, gives the public a way to judge its experts without becoming experts itself. Where both conditions hold, delegation is not a surrender of self-government but an exercise of it. Where either fails, experts should advise, loudly and in public, and then step back.\n\nThis test will not please everyone. It leaves in the hands of ordinary citizens much that experts could probably handle better. But a democracy is not a device for producing the best decisions. It is a way of ensuring that the people who bear the consequences of a decision have had the last word on it, and that those who advise them can be made to answer when the advice goes wrong.',
    questions: [
      {
        question: 'Which of the following best expresses the author’s main conclusion?',
        options: [
          'Experts should resolve questions of fact, while the public should resolve every question of value that arises.',
          'Handing a decision to experts is legitimate when its aim is settled and its outcome is publicly checkable.',
          'Since voters know little about technical fields, experts deserve a larger share of political authority.',
          'Democracies should take back the decisions they have delegated to central banks and regulators.',
        ],
        correctAnswer: 1,
        explanation:
          'The author’s positive proposal is the two-part test of paragraph 4 (a publicly chosen goal and results outsiders can check), defended in the final paragraph. The fact/value formula is called “correct in principle” but “nearly useless” in practice, so it is not the conclusion. The larger-share option is the “bolder school” the author rejects. The author says citizens are right to accept existing delegations such as central banks, so wholesale reversal is not urged.',
        optionExplanations: [
          'The fact/value formula is the “standard answer,” which the author calls “correct in principle” but “nearly useless” in practice because facts and values arrive entangled. It is the position the author moves beyond, not the conclusion.',
          'The author’s positive proposal is the two-part test of paragraph 4: the public has already chosen the goal, so what remains is means, and results can be checked by outsiders. Where both hold, delegation “is not a surrender of self-government but an exercise of it.”',
          'This is the “bolder school” of paragraph 3. The author credits its candor but rejects it, arguing that knowing how to reach an end confers no authority over which ends to pursue and that experts are not free of interests.',
          'The author says citizens who accept delegations to central banks and regulators “are right to,” and the mandated central bank is the author’s own example of legitimate delegation. The passage does not urge taking such decisions back.',
        ],
        skill: 'main-idea',
      },
      {
        question: 'The author’s principal objection to the formula that experts decide facts and the public decides values is that:',
        options: [
          'questions of value are too personal for any collective process to resolve',
          'experts turn out to be much less reliable about facts than the formula supposes',
          'applying it presupposes a consequential decision about where facts end',
          'it would leave the public with too little say over purely technical matters',
        ],
        correctAnswer: 2,
        explanation:
          'Because facts and values arrive entangled, someone must first separate them, and the author says whoever does so “has already decided a great deal.” The author never claims value questions cannot be settled collectively; the formula assigns them to the public. The objection is not that experts get facts wrong but that the fact/value boundary is itself contested. The author does not argue that the public needs more say over purely technical matters.',
        optionExplanations: [
          'The author never claims value questions are too personal for collective resolution. The formula assigns values to the public, and the author accepts that assignment “in principle,” objecting only that facts and values cannot be cleanly separated in practice.',
          'The objection is not about experts getting facts wrong. It is that estimates of fact depend on assumptions shaped by “what the modeler fears most,” so the fact/value boundary itself is contested; expert unreliability is not the complaint.',
          'Because facts and values arrive entangled, someone must first separate them, and the author says that “whoever draws it has already decided a great deal.” Applying the formula thus presupposes a consequential decision about where the line falls.',
          'The author does not argue that the public needs more say over purely technical matters. Technical questions with publicly chosen goals and checkable results are precisely where the author endorses delegation to experts.',
        ],
        skill: 'detail',
      },
      {
        question: 'The author’s response to the proposal that knowledge rather than numbers should carry political weight assumes that:',
        options: [
          'deciding which ends to pursue is not something expertise equips a person to do better',
          'most voters are in fact about as well informed on economics as trained economists',
          'professions that are given authority never redefine questions to suit their methods',
          'the decisions supported by the largest number of people are generally the wisest ones available',
        ],
        correctAnswer: 0,
        explanation:
          'The reply turns on the distinction between knowing how to reach an end and knowing which ends are worth reaching, which presupposes that expertise confers no special standing on the second question. The author concedes that voters know less, so the author does not assume they are equally informed. The author says professions do tend to redefine questions in their own favor. The final paragraph denies that democracy is a device for producing the best decisions, so the author does not assume majority choices are best.',
        optionExplanations: [
          'The author’s reply distinguishes knowing how to reach an end from knowing which ends are worth reaching: “An economist may understand better than I do what a tax will cost; she does not understand better than I do how much I mind paying it.” This presupposes expertise gives no special standing on ends.',
          'The author concedes the premise that most voters know little about economics or epidemiology and does not dispute it. The reply rests on what kind of authority knowledge confers, not on voters being equally informed.',
          'The author says the opposite: a profession given power “tends, over time, to define the question in terms that make its own methods decisive.” This is an argument against the proposal, not an assumption that professions never do this.',
          'The final paragraph explicitly denies that democracy is “a device for producing the best decisions.” The author grounds democracy in who bears consequences and who answers for advice, not in the wisdom of majority choices.',
        ],
        skill: 'assumption',
      },
      {
        question:
          'Each of the following, if true, would strengthen the author’s claim that facts and values are rarely separable in real decisions EXCEPT:',
        options: [
          'Two teams modeling one epidemic diverged mainly because they found different public behaviors plausible.',
          'Which of several reasonable forecasting models officials commissioned was predicted by their policy leanings.',
          'Citizens’ support for a proposed restriction shifted sharply once they were shown projections of its costs.',
          'Rival engineering firms testing one bridge design independently reached identical load estimates.',
        ],
        correctAnswer: 3,
        explanation:
          'Identical independent load estimates describe a case where the factual question was cleanly separable and checkable, so it does not support the claim of entanglement. Divergent epidemic models driven by judgments about plausible behavior show assumptions shaping the “facts.” Model choice tracking policy leanings shows values entering the factual estimate. Opinions shifting with cost projections show the value judgment depending on facts only experts supply.',
        optionExplanations: [
          'Two teams diverging mainly because they found different behaviors plausible shows assumptions shaping the “facts,” exactly as the author describes: the estimate of spread “depends on assumptions about how people will behave.” This strengthens the entanglement claim.',
          'Officials’ policy leanings predicting which forecasting model they commissioned shows values entering the selection of factual estimates. This fits the author’s point that “the choice of which assumptions to treat as reasonable is shaped by what the modeler fears most.”',
          'Support shifting sharply once citizens see cost projections shows the value judgment depending on facts that only experts supply. The author makes this very point: “The value judgment, for its part, depends on facts that only the modeler can supply.”',
          'Rival firms independently reaching identical load estimates describes a factual question that was cleanly separable and publicly checkable. It does not show entanglement of facts and values, so it does not strengthen the claim; if anything, it fits the author’s model of a legitimate delegation.',
        ],
        skill: 'strengthen-weaken',
      },
      {
        question: 'Which of the following delegations would the author most clearly endorse?',
        options: [
          'Letting a panel of economists decide whether reducing inequality should take priority over growth',
          'Letting a health agency decide, with no mandate from the legislature, how much liberty to trade for safety',
          'Letting an agency set treatment levels to meet a legislated water-safety standard, with independent testing',
          'Letting university faculties set national education goals because their members have studied learning',
        ],
        correctAnswer: 2,
        explanation:
          'A legislated standard means the public has chosen the goal, and independent testing lets outsiders check the results, so both conditions of the test are met. Ranking equality against growth is a choice of ends, not means. Trading liberty for safety without a mandate is the paradigm value choice the author reserves for the people. Setting national education goals is again a choice of ends, and knowledge of learning does not, on the author’s view, confer authority over ends.',
        optionExplanations: [
          'Deciding whether reducing inequality should take priority over growth is a choice of ends, not means. The author says expertise confers no authority over “which ends are worth reaching,” so this delegation fails the first condition.',
          'How much liberty to trade for safety is the author’s own example of a question “only the people can say.” Without a legislative mandate, the agency would be issuing a value choice rather than carrying one out, failing the first condition.',
          'A legislated water-safety standard means the public has chosen the goal, so what remains is a matter of means. Independent testing lets outsiders check the results without becoming experts. Both conditions of the author’s test are met.',
          'Setting national education goals is a choice of ends, and the author denies that having studied a subject confers authority over ends. This is precisely the “knowledge, not numbers” reasoning the author rejects in paragraph 3.',
        ],
        skill: 'application',
      },
      {
        question:
          'Suppose a central bank, charged by law with keeping inflation low, began setting its own targets for wages and employment without any new instruction. The author would most likely conclude that the bank:',
        options: [
          'was acting properly, since its experts know far more than voters about economic matters',
          'had moved from executing a public choice to making one, and so had overstepped its role',
          'was acting properly, since outsiders could still check whether its targets were met',
          'should be abolished, since no central bank can ever be held publicly accountable',
        ],
        correctAnswer: 1,
        explanation:
          'Setting new targets without instruction means the bank is issuing rather than carrying out an instruction, so the first condition of the test fails. Greater economic knowledge is exactly the ground for authority the author rejects. Checkable results satisfy only the second condition, and the author says delegation fails when either condition fails. The author treats the inflation-mandated bank as a legitimate delegation, so a claim that central banks can never be accountable contradicts the passage.',
        optionExplanations: [
          'Greater knowledge about economic matters is exactly the ground for authority the author rejects. Knowing how to reach an end does not confer standing to choose ends, and setting new targets is choosing ends.',
          'The author’s example of legitimate delegation is a central bank “carrying out an instruction, not issuing one.” A bank that sets its own targets for wages and employment without instruction has shifted from executing a public choice to making one, failing the first condition of the test.',
          'Checkable results satisfy only the second condition. The author says delegation fails “where either” condition fails, and here the first condition, a publicly chosen goal, is not met for the new targets.',
          'The author presents the inflation-mandated central bank as a legitimate delegation that citizens are “right to” accept. A claim that no central bank can ever be accountable contradicts the passage; the problem is this bank’s overreach, not central banks as such.',
        ],
        skill: 'new-information',
      },
    ],
  },
  {
    id: 'fl4-cars-a-03',
    section: 'cars',
    discipline: 'philosophy',
    title: 'Of the Friend Who Is Not Ourselves',
    passageText:
      'It has long been the custom of those who write upon friendship to praise it as the most perfect union of which two persons are capable, and to speak of the friend, in a phrase that has descended to us with all the authority of age, as a second self. I confess that I have never been able to read that phrase without a certain disquiet; for if my friend is but another I, then in loving him I love only what I already possess, and the whole commerce between us, however warm, is no more than the conversation of a man with his reflection. That there is a union in friendship I do not deny; but I suspect it is a union of a stranger and more difficult kind than the moralists have supposed, and that what we chiefly value in a friend is precisely that part of him which is not ourselves.\n\nConsider what it is that we seek from a friend when we are in any real perplexity. We do not go to him, if we are wise, in order to hear our own opinion returned to us in a more agreeable voice; for that office a flatterer will serve, and serve more cheaply. We go to him because he stands where we do not, and sees, from that other station, what our own position conceals from us. His judgment is valuable to us in the degree that it is his and not ours; and the friend who has so perfectly absorbed our tastes and our prejudices that he can no longer differ from us has, by that very completeness of sympathy, ceased to be of any use to us in the hour when we most require him.\n\nIt will be objected that this is to make of friendship a kind of consultation, and to reduce the friend to a counsellor whom we happen also to like. The objection would be just if the difference I speak of were a difference of mere information, such as a physician or a lawyer might supply. But the friend’s otherness is not that of the expert, who knows what we do not and is indifferent to what becomes of us. It is the otherness of one who wishes our good as earnestly as we wish it ourselves, and who is for that reason bound to tell us when we mistake it. The expert may be candid because he does not care; the flatterer is pleasant because he does not dare; the friend alone is candid because he cares, and dares because he is secure in our regard.\n\nFrom this it follows, I think, that friendship is not a condition into which two persons fall, as they may fall into a common opinion, but a relation which each must continually labour to keep open. The danger that besets it is not the quarrel, which is often the occasion of its growth, but a gradual and comfortable assimilation, in which each, to spare the other pain, suppresses whatever might divide them, until nothing remains between them but agreement. Such friendships do not end; they merely cease to be of consequence. And the remedy is not to seek out disagreement for its own sake, which would be a pedantry, but to hold in honour that residue of independence in the friend which we can never wholly share, and to be glad of it, as of a window in a house that would otherwise look only inward.',
    questions: [
      {
        question: 'The central thesis of the passage is that:',
        options: [
          'friendship is the most complete union two persons can reach, making each friend a second self',
          'a friend is valued chiefly as an adviser who can supply information that we ourselves lack',
          'quarrels are the chief threat to a lasting friendship and ought to be avoided at nearly any cost',
          'a friend’s worth lies largely in the separate outlook that keeps him distinct from us, not in likeness',
        ],
        correctAnswer: 3,
        explanation:
          'From the first paragraph on, the author argues that what we value in a friend is “that part of him which is not ourselves,” his independent standpoint. The second-self view is the traditional praise the author questions. The adviser-with-information reading is the objection the author answers by distinguishing the friend from the expert. The author says quarrels often help friendships grow and names comfortable assimilation, not quarrel, as the real danger.',
        optionExplanations: [
          'The second-self view is the traditional praise of friendship that the author reads “with a certain disquiet” and questions from the first paragraph. The author argues that loving a second self is merely loving one’s own reflection.',
          'The adviser-with-information reading is the objection raised in paragraph 3, which the author answers by distinguishing the friend’s otherness from that of the expert. The friend’s value is not information but caring candor from another standpoint.',
          'The author says the quarrel “is often the occasion of its growth” and names comfortable assimilation, not quarrel, as the real danger. Avoiding quarrels at nearly any cost is closer to the failure the author warns against.',
          'From the opening paragraph, the author argues that “what we chiefly value in a friend is precisely that part of him which is not ourselves,” and develops this through the friend who sees from another station and the window in a house that would otherwise look only inward.',
        ],
        skill: 'main-idea',
      },
      {
        question:
          'According to the passage, which of the following distinguish a friend from an expert such as a physician?\n\nI. The friend cares what becomes of us.\nII. The friend has information that we lack.\nIII. The friend’s candor arises from concern for our good.',
        options: ['I only', 'I and III only', 'II and III only', 'I, II, and III'],
        correctAnswer: 1,
        explanation:
          'The author says the expert “is indifferent to what becomes of us” while the friend wishes our good (I), and that the friend is candid “because he cares,” unlike the expert who is candid “because he does not care” (III). Statement II describes the expert, who “knows what we do not,” so it does not distinguish the friend. Hence I and III only; “I only” omits III, and the options containing II are wrong.',
        optionExplanations: [
          'Statement I is correct but incomplete. The passage also says the friend is “candid because he cares,” while the expert is “candid because he does not care,” so statement III also distinguishes the friend from the expert.',
          'The passage says the expert “is indifferent to what becomes of us” while the friend “wishes our good as earnestly as we wish it ourselves” (I), and that the friend alone is “candid because he cares” (III). Statement II describes the expert, who “knows what we do not,” so it does not distinguish the friend.',
          'Statement II, having information we lack, describes the expert such as a physician or lawyer, not what sets the friend apart. The author explicitly says the friend’s otherness “is not that of the expert, who knows what we do not.”',
          'Including statement II is the error here. The author contrasts the friend with the expert precisely on the point that the expert’s difference is one “of mere information”; information is not what distinguishes the friend.',
        ],
        skill: 'detail',
      },
      {
        question: 'The author would most likely say that the flatterer and the wholly assimilated friend resemble each other in that both:',
        options: [
          'offer our own views back to us instead of a view from elsewhere',
          'deliberately deceive us in order to gain some advantage for themselves',
          'are indifferent to what becomes of the person whom they are advising',
          'provoke quarrels that in the end strengthen the bond between two people',
        ],
        correctAnswer: 0,
        explanation:
          'The flatterer returns “our own opinion … in a more agreeable voice,” and the assimilated friend can “no longer differ from us,” so neither supplies a judgment formed from another station. The passage attributes no deliberate self-serving deception to the assimilated friend, whose failure comes from “completeness of sympathy.” Indifference is the mark of the expert, not of either figure. Neither figure provokes quarrels; the assimilated friend suppresses disagreement.',
        optionExplanations: [
          'The flatterer returns “our own opinion … in a more agreeable voice,” and the assimilated friend “can no longer differ from us.” Neither supplies a judgment formed from another station, which is what the author says we need in perplexity.',
          'The passage attributes no deliberate self-serving deception to the assimilated friend, whose failure comes from “completeness of sympathy” and a wish to spare pain. The flatterer may be insincere, but the resemblance the author draws is not about deception for advantage.',
          'Indifference to what becomes of us is the mark of the expert, who “does not care.” The assimilated friend cares too much, suppressing differences “to spare the other pain,” and the flatterer is pleasant because he “does not dare,” not because he is indifferent.',
          'Neither figure provokes quarrels. The assimilated friend suppresses “whatever might divide them,” and the flatterer agrees rather than challenges. Quarrels that strengthen bonds are what the author says the healthy friendship can survive, not what these figures produce.',
        ],
        skill: 'inference',
      },
      {
        question: 'The author refers to “a physician or a lawyer” in the third paragraph primarily in order to:',
        options: [
          'suggest that members of the learned professions make the most reliable friends',
          'warn of the risks involved in seeking advice from people who are strangers to us',
          'set apart the kind of difference the author means from a purely informational one',
          'concede that friendship, when examined closely, is at bottom a form of consultation',
        ],
        correctAnswer: 2,
        explanation:
          'The professionals exemplify “a difference of mere information,” which the author contrasts with the friend’s caring otherness in order to answer the objection. Nothing suggests professionals make good friends. The passage issues no warning about strangers’ advice. The author says the objection “would be just” only if the difference were merely informational, and then denies that it is, so there is no concession.',
        optionExplanations: [
          'Nothing in the passage suggests that physicians or lawyers make reliable friends. They appear only to exemplify a different kind of otherness, one of information without concern, which the author contrasts with the friend.',
          'The passage issues no warning about seeking advice from strangers. The physician and lawyer illustrate a type of difference, not a risk; the author treats their knowledge as legitimate but unlike what a friend offers.',
          'The professionals exemplify “a difference of mere information,” which the author invokes to answer the objection that friendship is just consultation. By setting the expert’s informational otherness apart from the friend’s caring otherness, the author shows the objection does not apply.',
          'The author says the objection “would be just” only if the difference were merely informational, and then denies that it is. Far from conceding that friendship is consultation, the author uses the professionals to refute that reading.',
        ],
        skill: 'function',
      },
      {
        question: 'Which of the following situations best exemplifies the danger the author considers most threatening to friendship?',
        options: [
          'Two old companions who, to keep the peace, have long since ceased to voice any view the other might resist',
          'Two colleagues who argue often and sharply about politics yet still make a point of meeting every week',
          'Two neighbors who consult each other on practical matters but have few interests in common',
          'Two friends who were parted by one bitter quarrel and who never afterward spoke to each other',
        ],
        correctAnswer: 0,
        explanation:
          'The author names “a gradual and comfortable assimilation,” in which each suppresses whatever might divide them, as the danger that besets friendship; the companions who no longer voice resistance fit that description. Frequent argument that continues alongside regular meeting is the kind of disagreement the author thinks can help a friendship grow. Neighbors with few shared interests do not illustrate assimilation. A single quarrel that ends a friendship is not the danger the author identifies; the friendships the author fears “do not end” but quietly cease to matter.',
        optionExplanations: [
          'The author names “a gradual and comfortable assimilation,” in which each “suppresses whatever might divide them, until nothing remains between them but agreement,” as the danger that besets friendship. Companions who have long ceased to voice resisted views fit this exactly.',
          'Frequent, sharp argument alongside continued regular meeting is the kind of disagreement the author thinks can help friendship grow; the quarrel “is often the occasion of its growth.” This exemplifies a healthy friendship, not the danger.',
          'Neighbors who consult on practical matters but share few interests do not illustrate assimilation. The danger the author describes is excessive sameness, not limited common ground or merely practical exchange.',
          'A single bitter quarrel ending a friendship is not the danger the author identifies. The friendships the author fears “do not end; they merely cease to be of consequence.” A dramatic rupture is the opposite of quiet assimilation.',
        ],
        skill: 'application',
      },
      {
        question: 'Which of the following findings, if true, would most seriously challenge the author’s argument?',
        options: [
          'People say that they value friends who are willing to disagree with them on occasion.',
          'Friendships that last for decades often pass through periods of sharp disagreement.',
          'People tend to seek technical advice from trained professionals rather than from their friends.',
          'People facing hard choices decide better after consulting friends who share their outlook.',
        ],
        correctAnswer: 3,
        explanation:
          'The author claims a friend is valuable in a perplexity because his judgment is “his and not ours”; if like-minded friends produced better decisions, that claim would be undercut. Valuing friends who sometimes disagree is consistent with the author. Long friendships surviving disagreement fits the claim that quarrel can be an occasion of growth. Seeking technical advice from professionals is compatible with the author’s distinction between the expert and the friend.',
        optionExplanations: [
          'Valuing friends who are willing to disagree is consistent with the author’s thesis that we prize “that part of him which is not ourselves.” This finding would support rather than challenge the argument.',
          'Long friendships surviving periods of sharp disagreement fits the author’s claim that the quarrel “is often the occasion of its growth” and that friendship must be continually labored to keep open. It does not challenge the argument.',
          'Seeking technical advice from professionals rather than friends is compatible with the author’s distinction between the expert, who supplies information, and the friend, who supplies caring judgment from another station. It does not undermine the argument.',
          'The author claims that in perplexity a friend’s judgment is “valuable to us in the degree that it is his and not ours,” and that the friend who cannot differ from us has “ceased to be of any use.” If like-minded friends produced better decisions, this central claim would be undercut.',
        ],
        skill: 'strengthen-weaken',
      },
    ],
  },
  {
    id: 'fl4-cars-a-04',
    section: 'cars',
    discipline: 'sociology',
    title: 'What the Herd Is Saying',
    passageText:
      'Few subjects invite contempt as readily as fashion. The moralist sees in it vanity; the economist, waste; the social critic, a machine for persuading people to discard what still works. Beneath all these complaints lies a single charge: that fashion is conformity dressed up as choice. The woman who buys the coat everyone is wearing this winter believes she has expressed her taste, when she has only obeyed a signal sent from somewhere above her.\n\nThere is a well-known account of where that signal comes from. Styles, it holds, begin among the prosperous, who adopt them to mark themselves off from everyone else. Those just below imitate them, hoping to borrow a little distinction; as the style spreads downward it loses its power to distinguish, and so the prosperous abandon it for something new, and the cycle begins again. The account explains a good deal, including the restlessness of fashion—its need to keep moving. But it assumes that everyone below the top wants only to look like those at the top, and that assumption fits our own era poorly. Many styles now travel upward or sideways, from the street, from the young, from groups with little money and much visibility, and the people who adopt them are not trying to resemble anyone richer.\n\nThe deeper trouble with the charge of conformity is that it treats taste as something that ought to be purely personal, so that any trace of social influence becomes a mark of failure. But there is no such thing as a taste formed in isolation. We learn what is handsome or awkward, daring or dowdy, the way we learn a language: by being among people who already use it. To say that my preferences in clothing were shaped by others is to say only that I acquired them, as I acquired my accent. No one thinks an accent is a form of servility.\n\nSeen this way, fashion looks less like obedience than like speech. To dress is to say something—about the groups one belongs to or hopes to join, about how seriously one takes an occasion, about how much one cares to be noticed. And like speech, dress can be used fluently or clumsily, conventionally or with wit. The person who follows a style exactly may be saying, correctly, “I am one of you.” The person who alters it slightly is saying something subtler: “I am one of you, and here is how I differ.” Neither is escaping the social; both are using it. The genuinely unfashionable person is not someone who has risen above the language but someone who has not learned it, or who has decided, for reasons of her own, to speak it badly on purpose—which is itself a statement others will read.\n\nNone of this makes fashion innocent. A language can be used to exclude, and the rapid turnover of styles falls hardest on those who can least afford to keep pace. But the critic who dismisses fashion as herd behavior misses what the herd is doing. It is not merely following. It is conversing, in a vocabulary whose meanings are made and remade by the very people who seem only to be repeating them.',
    questions: [
      {
        question:
          'According to the author, the account in which styles pass downward from the prosperous is inadequate for the present chiefly because it:',
        options: [
          'presumes a single direction of imitation that many current styles do not follow',
          'cannot explain why the prosperous would ever abandon a style they had adopted',
          'fails to account for how quickly and restlessly fashions change from year to year',
          'overstates how much the prosperous care about setting themselves apart by dress',
        ],
        correctAnswer: 0,
        explanation:
          'The author’s complaint is that the account assumes everyone below imitates those above, whereas many styles now move upward or sideways from groups not imitating the rich. The account explicitly explains why the prosperous abandon a style (it stops distinguishing them). The author credits the account with explaining fashion’s restlessness. The author does not dispute that the prosperous seek distinction; the objection concerns the imitators.',
        optionExplanations: [
          'The author’s complaint is that the account “assumes that everyone below the top wants only to look like those at the top,” whereas many styles now travel “upward or sideways” from people “not trying to resemble anyone richer.” The single direction of imitation is what fails.',
          'The account explicitly explains why the prosperous abandon a style: “as the style spreads downward it loses its power to distinguish, and so the prosperous abandon it for something new.” This is a strength of the account, not a gap.',
          'The author credits the account with explaining “the restlessness of fashion—its need to keep moving.” Rapid change is something the account handles well, not something it fails to explain.',
          'The author does not dispute that the prosperous seek distinction; the account’s claim about the top is accepted. The objection concerns the imitators below, who are assumed to want only to resemble the rich.',
        ],
        skill: 'detail',
      },
      {
        question: 'The author’s comparison between a taste in clothing and an accent suggests that the author believes:',
        options: [
          'people ought to keep the tastes in dress that they acquired as children',
          'regional differences in dress matter more than differences of social class',
          'choices about clothing are largely involuntary and cannot be altered at will',
          'being shaped by others does not by itself make a preference a sign of submission',
        ],
        correctAnswer: 3,
        explanation:
          'The point of the comparison is that an accent is socially acquired yet “no one thinks an accent is a form of servility,” so social origin alone does not make a taste obedient. The author says nothing about keeping childhood tastes. Region and class are not compared. The author describes dress as something people use “with wit” and alter deliberately, so it is not presented as involuntary.',
        optionExplanations: [
          'The author says nothing about keeping childhood tastes or about when tastes are acquired. The comparison is about how tastes are acquired socially, not about preserving earlier preferences.',
          'Region and class are not compared anywhere in the passage. The accent analogy concerns social acquisition in general, not the relative importance of regional versus class differences in dress.',
          'The author describes dress as something people use “fluently or clumsily, conventionally or with wit,” and discusses altering a style deliberately. Dress is treated as expressive and voluntary, not involuntary or unalterable.',
          'The point of the comparison is that an accent is acquired by being among people who use it, yet “no one thinks an accent is a form of servility.” By analogy, a taste shaped by others is simply acquired, not a mark of submission.',
        ],
        skill: 'inference',
      },
      {
        question: 'The author’s claim that dressing is a kind of speech relies on the unstated assumption that:',
        options: [
          'most people choose what they wear chiefly in order to attract attention',
          'the prosperous have largely stopped setting the direction in which styles move',
          'observers can recognize and interpret what items of dress convey',
          'a style that is followed exactly, with no alteration, conveys nothing at all',
        ],
        correctAnswer: 2,
        explanation:
          'Dress can function as speech only if others can read what it says; the author takes this for granted (e.g., deliberate bad dressing “is itself a statement others will read”) without arguing for it. How much one cares to be noticed is only one of several things dress conveys, not the chief motive. The direction of style change is irrelevant to the speech analogy. The author says an exactly followed style does convey something (“I am one of you”).',
        optionExplanations: [
          'How much one “cares to be noticed” is only one of several things the author says dress conveys, alongside group membership and seriousness about an occasion. The speech claim does not require attention-seeking to be the chief motive.',
          'Whether the prosperous still set the direction of styles is irrelevant to the speech analogy. The author raised that point to critique the downward-imitation account, not as a premise for treating dress as communication.',
          'Dress can function as speech only if others can read what it says. The author takes this for granted, noting that even deliberately bad dressing “is itself a statement others will read,” without arguing that observers can interpret such signals.',
          'The author says an exactly followed style does convey something: “I am one of you.” The claim is that both exact following and slight alteration are uses of the social language, so exact imitation is not assumed to be meaningless.',
        ],
        skill: 'assumption',
      },
      {
        question:
          'Suppose researchers found that teenagers who slightly altered a popular style were judged by peers to be both members of the group and more distinctive than those who copied it exactly. This finding would:',
        options: [
          'weaken the author’s argument, since it shows dress to be chiefly a matter of personal taste',
          'support the author’s view that dress can signal belonging and individuality at once',
          'support the downward-imitation account, since distinctiveness is what imitators want',
          'have no bearing on the argument, since the passage is concerned only with adults',
        ],
        correctAnswer: 1,
        explanation:
          'Peers reading slight alteration as both membership and difference is what the author’s speech model predicts for the person who modifies a style. The finding shows socially readable signals, not purely personal taste. The downward-imitation account concerns people copying those above them, not peers varying a shared style. The passage mentions “the young” as a source of styles and never restricts itself to adults.',
        optionExplanations: [
          'The finding shows peers reading socially shared signals, not personal taste operating in isolation. The author argues there is no taste formed in isolation, and the finding supports that view rather than weakening it.',
          'The author says the person who alters a style slightly says “I am one of you, and here is how I differ.” Peers judging slight alterers as both members and more distinctive confirms that dress can signal belonging and individuality at once.',
          'The downward-imitation account concerns people copying those above them to borrow distinction. Peers varying a shared style among equals is a different phenomenon, and the finding concerns horizontal signaling, not upward imitation.',
          'The passage names “the young” as a source of styles and never restricts itself to adults. Teenagers altering styles are directly relevant to the author’s claims about dress as communication.',
        ],
        skill: 'new-information',
      },
      {
        question: 'Which of the following is most analogous to the person the author describes as speaking the language of fashion “badly on purpose”?',
        options: [
          'A student who never learned the rules of a sport and so is unable to play it',
          'A poet who breaks the meter of a line so readers notice the break',
          'A traveler who speaks a foreign language slowly but without any errors',
          'A child who picks up speech habits by imitating older brothers and sisters',
        ],
        correctAnswer: 1,
        explanation:
          'The deliberately bad dresser knows the conventions and violates them in a way meant to be read, as a poet who breaks meter for effect does. The student who never learned the rules corresponds to the author’s other category, the person who “has not learned” the language. The careful traveler follows the conventions rather than breaking them. The imitating child illustrates ordinary acquisition, not deliberate violation.',
        optionExplanations: [
          'The student who never learned the rules corresponds to the author’s other category, the person who “has not learned” the language. Speaking badly on purpose requires knowing the conventions and choosing to violate them.',
          'The deliberately bad dresser knows the conventions and violates them in a way meant to be read, which the author says is “itself a statement others will read.” A poet who breaks meter so readers notice the break does the same thing with language.',
          'The careful traveler follows the conventions rather than breaking them. Speaking slowly but without errors is correct, cautious use of the language, the opposite of deliberately speaking it badly.',
          'The child imitating siblings illustrates ordinary acquisition, like the author’s point that we learn taste “the way we learn a language.” It is not an example of deliberate violation for effect.',
        ],
        skill: 'application',
      },
      {
        question: 'Which of the following, if true, would most weaken the author’s claim that fashion works like a language?',
        options: [
          'Many recent styles first appeared among young people with little money.',
          'Some households spend a far larger share of their income on clothing than other households do.',
          'Observers shown strangers’ outfits cannot agree beyond chance on what they signal.',
          'The rapid turnover of styles imposes real costs on households with low incomes.',
        ],
        correctAnswer: 2,
        explanation:
          'A language requires shared, readable meanings; if observers cannot agree on what outfits signal, dress lacks the common vocabulary the author attributes to it. Styles arising among the young and poor is something the author asserts. Differences in spending do not bear on whether dress carries meaning. The costs of turnover are conceded in the final paragraph and do not touch the language claim.',
        optionExplanations: [
          'Styles arising among young people with little money is something the author asserts in paragraph 2 to critique the downward-imitation account. It supports the author’s overall picture and does not bear on whether dress works like a language.',
          'Differences in household spending on clothing do not address whether dress carries shared meaning. The author already concedes that fashion’s turnover “falls hardest on those who can least afford to keep pace.”',
          'A language requires shared, readable meanings. If observers cannot agree beyond chance on what outfits signal, dress lacks the common vocabulary the author attributes to it, which directly undermines the claim that fashion is speech.',
          'The costs of turnover are conceded in the final paragraph: “None of this makes fashion innocent.” The author acknowledges these costs while maintaining the language claim, so the finding does not weaken it.',
        ],
        skill: 'strengthen-weaken',
      },
    ],
  },
  {
    id: 'fl4-cars-a-05',
    section: 'cars',
    discipline: 'art / aesthetics',
    title: 'The Painting With Its Questions Open',
    passageText:
      'When a famous painting emerges from the conservation studio brighter than anyone living has seen it, the reaction is rarely unanimous. Some viewers are delighted: the muddy browns have turned out to be blues and roses, and the picture looks, they say, as the painter meant it to look. Others are appalled. Something, they insist, has been scrubbed away—not dirt only, but the softness and depth the picture had acquired over centuries, and which they had loved. Both camps speak of respect. They disagree about what is owed respect.\n\nThe case for bold restoration rests on the painter’s intentions. A painting, on this view, is the realization of a particular artist’s vision at a particular moment; yellowed varnish, overpainting by later hands, and the fading of certain pigments are accidents that have come between that vision and us. To remove them is to restore the work to itself. The argument is attractive, and within limits it is sound. No one supposes that the painter meant her sky to be the color of weak tea.\n\nBut the limits come quickly. We rarely know what a painter intended with the precision that bold restoration requires. Did she add the thin glaze now lying over that shadow, or did a restorer two centuries later? Was the dark background meant to be dark, or has an unstable pigment darkened on its own? Evidence can narrow these questions without settling them, and where it cannot settle them, the restorer who acts decisively is substituting her own judgment for the painter’s while claiming to recover the painter’s. Moreover, the colors a painter chose were chosen to be seen beside other colors; if some pigments have faded irrecoverably, restoring the others to full strength may yield a balance the painter never saw and would not have wanted.\n\nThe opposing view holds that a painting’s history is part of the painting. The cracks, the mellowed tones, even some of the later additions, are records of the object’s passage through time, and to remove them is to falsify that record as surely as a forger falsifies a signature. This position has the merit of humility, but pressed hard it becomes perverse. Grime is also a record, of candle smoke and neglect; no one proposes to preserve it for its historical interest when it hides the picture beneath it. A painting is not only a document of its own survival. It was made to be looked at.\n\nWhat I would urge is not a compromise between these views but a discipline that follows from the uncertainty they share. A conservator should do only what a later conservator could undo, and should leave her work distinguishable, to a trained eye, from the painter’s. Cleaning that removes a varnish we know to be later passes this test; repainting a lost passage in a way no one could detect does not. The rule does not answer the question of whose intentions count. It declines to answer it on behalf of everyone who will come after us—viewers who may know more than we do, and who deserve to receive the painting with its questions still open.',
    questions: [
      {
        question: 'Which of the following best summarizes the author’s position?',
        options: [
          'Paintings should be returned as nearly as possible to their first appearance, since the artist’s intent governs.',
          'The marks of age on a painting belong to the work itself and should in principle never be removed.',
          'Given uncertain intentions, conservators should confine themselves to changes later hands can detect and reverse.',
          'Disputes over restoration reduce to matters of taste that no general principle can hope to settle.',
        ],
        correctAnswer: 2,
        explanation:
          'The author rejects both camps and proposes a discipline of reversible, distinguishable intervention that “follows from the uncertainty they share.” The first-appearance option is the bold-restoration view, which the author finds sound only “within limits.” The marks-of-age option is the opposing view, which the author calls “perverse” when pressed. The author does offer a general principle, so disputes are not left as mere taste.',
        optionExplanations: [
          'Returning paintings to their first appearance because the artist’s intent governs is the bold-restoration view of paragraph 2. The author finds it sound only “within limits,” and says “the limits come quickly” because intentions are rarely known with precision.',
          'The view that marks of age belong to the work and should never be removed is the opposing position of paragraph 4. The author grants its humility but says “pressed hard it becomes perverse,” since grime is also a record.',
          'The author rejects both camps and proposes “a discipline that follows from the uncertainty they share”: a conservator should do only what a later conservator could undo and leave her work distinguishable to a trained eye.',
          'The author does offer a general principle, the rule of reversibility and distinguishability, and defends it as declining to answer the intentions question “on behalf of everyone who will come after us.” Disputes are not left as mere taste.',
        ],
        skill: 'main-idea',
      },
      {
        question:
          'According to the passage, bringing surviving pigments back to full strength when others have faded may misrepresent a painting because:',
        options: [
          'the painter judged each color by how it looked beside others',
          'brightened pigments tend to fade faster the second time',
          'viewers generally prefer the tones that age has softened',
          'it keeps later conservators from finding the original varnish',
        ],
        correctAnswer: 0,
        explanation:
          'The author notes that colors “were chosen to be seen beside other colors,” so strengthening only the survivors can produce a balance the painter never intended. The passage says nothing about pigments refading faster after restoration. Some viewers do love the softened tones, but the author does not generalize about viewer preference or rest this objection on it. Nothing links pigment restoration to locating the original varnish.',
        optionExplanations: [
          'The author notes that “the colors a painter chose were chosen to be seen beside other colors,” so restoring only the survivors to full strength “may yield a balance the painter never saw and would not have wanted.”',
          'The passage says nothing about brightened pigments fading faster after restoration. This introduces a technical claim with no support in the text.',
          'Some viewers in paragraph 1 do love the softened tones, but the author does not generalize about viewer preference or rest this particular objection on it. The faded-pigment objection concerns the painter’s intended color relationships.',
          'Nothing in the passage links restoring pigment strength to locating the original varnish. The concern about later conservators appears in the author’s rule about reversibility, not in the objection about faded pigments.',
        ],
        skill: 'detail',
      },
      {
        question: 'The author mentions grime and candle smoke primarily in order to:',
        options: [
          'show that bold restorers often harm paintings by cleaning them too aggressively',
          'show that treating all of a painting’s history as part of the work becomes absurd if pressed',
          'offer evidence that most old paintings were badly neglected by their early owners',
          'suggest that the dark backgrounds of old paintings were never meant to be dark',
        ],
        correctAnswer: 1,
        explanation:
          'Grime is “also a record,” yet no one would preserve it, which exposes the history-is-part-of-the-work view as “perverse” when pushed to its limit. The example actually supports some cleaning, so it is not a criticism of bold restorers. It is a reductio, not historical evidence about owners. Dark backgrounds are discussed earlier as a matter of uncertain intention, not in connection with grime.',
        optionExplanations: [
          'The grime example actually supports some cleaning: “no one proposes to preserve it for its historical interest when it hides the picture.” It is not a criticism of bold restorers but a check on the opposing view.',
          'Grime is “also a record, of candle smoke and neglect,” yet no one would preserve it. This reductio exposes the history-is-part-of-the-work view as “perverse” when pressed to its logical limit.',
          'The author uses grime as a logical test of a position, not as historical evidence about how early owners treated paintings. No claim about neglect rates is made.',
          'Dark backgrounds are discussed in paragraph 3 as a matter of uncertain intention (meant dark, or darkened by unstable pigment). That is separate from the grime example, which addresses the opposing view in paragraph 4.',
        ],
        skill: 'function',
      },
      {
        question: 'The author’s attitude toward the case for bold restoration is best described as:',
        options: ['unqualified enthusiasm', 'dismissive contempt', 'detached indifference', 'qualified acceptance'],
        correctAnswer: 3,
        explanation:
          'The author calls the argument “attractive” and “within limits … sound,” then says “the limits come quickly,” which is acceptance with reservations. Enthusiasm is ruled out by those reservations. Contempt is ruled out by the explicit concession that the case is partly sound. Indifference does not fit an author who argues at length about where the view goes wrong.',
        optionExplanations: [
          'Unqualified enthusiasm is ruled out by the author’s immediate reservations: “But the limits come quickly,” followed by a paragraph of objections about unknowable intentions and faded pigments.',
          'Contempt is ruled out by the author’s explicit concession that the case “is attractive, and within limits it is sound,” and that “No one supposes that the painter meant her sky to be the color of weak tea.”',
          'Indifference does not fit an author who engages the argument carefully, grants its partial soundness, and then argues at length about exactly where it goes wrong.',
          'The author calls the argument “attractive” and “within limits … sound,” then says “the limits come quickly.” Accepting the case within bounds while identifying its failures is acceptance with reservations.',
        ],
        skill: 'tone',
      },
      {
        question:
          'Suppose a new imaging method let conservators establish with certainty which layers of a painting were applied by the painter. How would this most affect the author’s argument?',
        options: [
          'It would weaken one of the author’s objections to bold restoration.',
          'It would prove that a painting’s history is no part of the work itself.',
          'It would oblige conservators to strip every later addition, whatever its merit.',
          'It would leave the argument untouched, as the rule does not rest on uncertainty.',
        ],
        correctAnswer: 0,
        explanation:
          'One objection to bold restoration is that we cannot tell the painter’s layers from later ones; certainty would remove that objection, though the faded-pigment objection would remain. Knowing who applied a layer does not settle whether history belongs to the work. The author’s rule concerns reversibility and says nothing that would compel stripping every addition. The author says the discipline “follows from the uncertainty,” so the argument is not untouched.',
        optionExplanations: [
          'One of the author’s objections to bold restoration is that we cannot tell whether a glaze was added by the painter or by a later restorer. Certainty about who applied each layer would remove that objection, though the faded-pigment objection would remain.',
          'Knowing who applied a layer does not settle whether a painting’s history belongs to the work. That is a question about what deserves respect, not about attribution, so the method would not prove the opposing view false.',
          'The author’s rule concerns reversibility and distinguishability, not stripping. Nothing in the passage says conservators must remove every later addition; the author even notes that “some of the later additions” are records worth considering.',
          'The author says the discipline “follows from the uncertainty they share,” so reducing uncertainty does affect the argument. The claim that the rule does not rest on uncertainty contradicts the passage directly.',
        ],
        skill: 'new-information',
      },
      {
        question: 'Which of the following interventions would satisfy the rule the author proposes?',
        options: [
          'Filling a lost passage with paint matched so exactly that no expert can locate the repair',
          'Filling a lost passage with removable hatched infill that blends at a distance but shows up close',
          'Removing an old glaze because the conservator judges it probably not the painter’s own',
          'Sealing the whole surface under a permanent coating to prevent any further fading of its colors',
        ],
        correctAnswer: 1,
        explanation:
          'Removable infill that a trained eye can distinguish up close is both reversible and distinguishable, the two requirements of the rule. An undetectable repair is exactly what the author says fails the test. Removing a glaze on a mere probability judgment is the decisive action on unsettled evidence the author warns against; the author approves removing only a varnish “we know to be later.” A permanent coating cannot be undone by a later conservator.',
        optionExplanations: [
          'An undetectable repair is exactly what the author says fails the test: “repainting a lost passage in a way no one could detect does not” pass. The rule requires work to remain distinguishable to a trained eye.',
          'Removable infill that a trained eye can distinguish up close is both reversible and distinguishable, the two requirements of the author’s rule. It restores the viewing experience while leaving the painting’s questions open for later conservators.',
          'Removing a glaze on a probability judgment is the decisive action on unsettled evidence the author warns against. The author approves removing only a varnish “we know to be later”; “probably not the painter’s” falls short of that standard.',
          'A permanent coating cannot be undone by a later conservator, violating the rule that “a conservator should do only what a later conservator could undo.” Protecting colors does not excuse irreversibility.',
        ],
        skill: 'application',
      },
    ],
  },
]
