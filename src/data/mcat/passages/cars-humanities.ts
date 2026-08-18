import type { MCATPassage } from '../types'

/**
 * MCAT CARS — Humanities passages.
 *
 * Six argument-driven, original prose passages (500-600 words each) across the
 * core CARS humanities genres: philosophy, ethics/political philosophy,
 * art/aesthetics, literary criticism, historiography, and music/cultural
 * criticism. Each passage carries six questions spanning the AAMC CARS reasoning
 * taxonomy (main idea, tone/attitude, inference, function/purpose,
 * strengthen/weaken, application, meaning-in-context). No outside knowledge is
 * required: every key is grounded in the passage alone.
 *
 * Originally AI-authored, every item has since been adversarially reviewed: each
 * key was tested as the single best-supported choice, distractors rewritten to the
 * AAMC trap mold, and explanations grounded in passage language. Items that passed
 * have `needsReview` cleared; any item that remains genuinely contestable keeps the
 * flag and says so in its explanation.
 */

export const CARS_HUMANITIES_PASSAGES: MCATPassage[] = [
  {
    id: 'cars-hum-01',
    section: 'cars',
    discipline: 'philosophy',
    title: 'The Architecture of Forgetting',
    passageText: `We are inclined to treat memory as a virtue and forgetting as its failure, a leak in the vessel that ought to hold the past intact. The metaphor is seductive precisely because it flatters us: it implies that a mind of sufficient discipline would retain everything, and that what slips away does so only through negligence. But this picture mistakes the function of a mind for the function of an archive. An archive aspires to completeness; a mind aspires to use. And use, I want to argue, depends not on retention but on a quiet and ceaseless work of subtraction.

Consider what it would mean to remember without remainder. The person who recalls every face encountered on every street could not recognize a friend, for recognition is not the summoning of a record but the privileging of one trace over the indistinct mass of others. To know a face is to have allowed ten thousand other faces to fade. Forgetting, on this view, is not the enemy of memory but its silent collaborator; it performs the editorial labor without which memory would be mere accumulation, and accumulation is not knowledge.

The objection arises immediately: surely some forgetting is catastrophic. We mourn the witness who cannot testify, the elder whose history dissolves. I do not deny this. My claim is narrower and, I think, more interesting. It is that the same faculty responsible for these losses is also responsible for our capacity to think at all, and that we cannot have the second without risking the first. A mind that could not let go would be paralyzed by relevance, unable to decide what bears on the present moment because everything would press upon it with equal force. To deliberate is already to have forgotten almost everything.

There is a moral dimension here that the archival metaphor obscures. We sometimes praise the person who "never forgets a slight" as though tenacity of grievance were a kind of integrity. But the inability to release the past is not fidelity; it is a failure of proportion. Forgiveness, whatever else it involves, requires that an injury cease to organize one's perception of another person. The grudge-holder remembers too well. He has made his memory into an archive and himself into its curator, and he mistakes the labor of preservation for the labor of justice.

None of this is to romanticize oblivion. A culture that forgets its crimes does not thereby forgive them; it merely renders itself incapable of recognizing their repetition. The distinction I am pressing is between forgetting as an active discrimination and forgetting as a passive erasure—between the gardener's pruning and the flood. The first sculpts; the second destroys. That both go by the same name has misled us into treating all loss of the past as decline.

If the argument holds, then the discipline we owe our memories is not the discipline of the hoarder but of the editor: a willingness to ask, of each retained thing, what it is for. The mind that remembers wisely is not the one that has lost the least but the one that has let go of the right things. Completeness was never the standard. It was only ever a fantasy we projected onto our instruments, and then, unhappily, onto ourselves.`,
    questions: [
      {
        question: 'Which of the following best expresses the central thesis of the passage?',
        options: [
          'Forgetting is a defect that disciplined minds can overcome through deliberate practice.',
          'Cultures that forget their crimes inevitably repeat them.',
          'Selective forgetting is a constitutive condition of useful thought rather than a mere failure of memory.',
          'Memory and forgetting are governed by entirely separate mental faculties.',
        ],
        correctAnswer: 2,
        explanation:
          'The author repeatedly frames forgetting as "the silent collaborator" of memory and argues "use depends not on retention but on a quiet and ceaseless work of subtraction," which is exactly what the answer calling selective forgetting a constitutive condition of useful thought says. The answer treating forgetting as a defect to be overcome by discipline inverts the author\'s view—he rejects the ideal of total retention as a "fantasy." The claim that cultures forgetting their crimes repeat them is a single supporting point in the fifth paragraph, true within the passage but far narrower than the thesis (a classic scope trap). The answer assigning memory and forgetting to separate faculties contradicts the passage, which insists the "same faculty" produces both.',
        skill: 'main-idea',
        needsReview: false,
      },
      {
        question: 'The author characterizes the person who "never forgets a slight" primarily in order to',
        options: [
          'illustrate that the inability to release the past is a failure of proportion rather than a virtue',
          'concede that some forms of grievance are a legitimate kind of integrity',
          'argue that forgiveness is psychologically impossible for most people',
          'demonstrate that moral memory is more reliable than ordinary memory',
        ],
        correctAnswer: 0,
        explanation:
          'The fourth paragraph introduces the grudge-holder to show that tenacious grievance "is not fidelity; it is a failure of proportion," the function named by the answer about a failure of proportion. The answer conceding grievance as a legitimate kind of integrity reverses it—the author raises the "integrity" reading only to reject it. The answer calling forgiveness psychologically impossible overstates: the author says forgiveness requires release, not that it is impossible. The answer ranking moral memory as more reliable is unsupported; the paragraph contrasts the grudge-holder unfavorably, rather than comparing memory types by reliability.',
        skill: 'function-purpose',
        needsReview: false,
      },
      {
        question: 'Based on the passage, the author would be most likely to agree that',
        options: [
          'a person who recalls every detail of his past possesses an enviable advantage in judgment',
          'recognizing a friend is essentially the retrieval of a complete stored record',
          'moral progress requires preserving every grievance until it is formally redressed',
          'the capacity to deliberate presupposes that most information has already been set aside',
        ],
        correctAnswer: 3,
        explanation:
          'The author writes that a total-recall mind "would be paralyzed by relevance" and that "to deliberate is already to have forgotten almost everything," supporting the answer that deliberation presupposes most information has been set aside. The answer granting total recall an enviable advantage in judgment contradicts the passage\'s portrait of total recall as paralyzing. The answer treating recognition as retrieval of a complete stored record directly opposes the claim that recognition "is not the summoning of a record but the privileging of one trace." The answer requiring every grievance to be preserved is the grudge-holder\'s error the author criticizes.',
        skill: 'inference',
        needsReview: false,
      },
      {
        question: 'The contrast between "the gardener\'s pruning and the flood" functions in the passage to',
        options: [
          'suggest that all loss of the past is ultimately destructive',
          'distinguish active, discriminating forgetting from passive, indiscriminate erasure',
          'argue that cultural memory is more important than individual memory',
          'prove that forgetting can never be morally justified',
        ],
        correctAnswer: 1,
        explanation:
          'The image appears where the author separates "forgetting as an active discrimination" (pruning, which "sculpts") from "forgetting as a passive erasure" (the flood, which "destroys"), so the answer distinguishing active discrimination from indiscriminate erasure captures the distinction that organizes the paragraph. The answer calling all loss of the past destructive is the very confusion the author says the shared word "forgetting" has produced—he opposes it (opposite-tone trap). The answer ranking cultural memory above individual memory imports a comparison the passage does not make at this point (scope/outside trap). The answer saying forgetting can never be morally justified is too extreme ("never") and contradicts the author\'s endorsement of active forgetting.',
        skill: 'argument-structure',
        needsReview: false,
      },
      {
        question:
          'Suppose researchers found that people with unusually comprehensive autobiographical memory tend to make decisions as quickly and effectively as everyone else. This finding would most directly weaken the author\'s claim that',
        options: [
          'forgetting performs an editorial labor essential to recognition',
          'forgiveness requires that an injury cease to organize one\'s perception',
          'a mind unable to let go would be "paralyzed by relevance" and unable to deliberate',
          'a culture that forgets its crimes cannot recognize their repetition',
        ],
        correctAnswer: 2,
        explanation:
          'The author predicts that total retention causes deliberative paralysis; effective, fast decision-making by people with comprehensive memory directly undercuts that prediction, so the claim about a mind "paralyzed by relevance" is weakened most. The claim about forgetting\'s editorial labor concerns recognition of faces, not decision speed, so the finding does not bear on it directly. The claims about forgiveness and about a culture forgetting its crimes are moral and cultural claims untouched by a finding about decision efficiency.',
        skill: 'strengthen-weaken',
        needsReview: false,
      },
      {
        question: 'As used in the final paragraph, the "discipline of the editor" most nearly refers to',
        options: [
          'the practice of judging each retained memory by what purpose it serves',
          'a rigorous effort to preserve as much of the past as possible',
          'an emotional detachment that prevents one from valuing the past at all',
          'the technical skill of organizing an archive for completeness',
        ],
        correctAnswer: 0,
        explanation:
          'The editor is defined in context as one with "a willingness to ask, of each retained thing, what it is for"—a selective, purpose-driven judgment, so the answer about judging each retained memory by the purpose it serves fits. The answers about preserving as much of the past as possible and about organizing an archive for completeness describe the "hoarder"/archive ideal the author explicitly contrasts the editor against (opposite of the intended meaning). The answer about emotional detachment overshoots into "romanticizing oblivion," which the author disavows ("None of this is to romanticize oblivion")—a too-extreme trap.',
        skill: 'meaning-in-context',
        needsReview: false,
      },
    ],
  },
  {
    id: 'cars-hum-02',
    section: 'cars',
    discipline: 'ethics / political philosophy',
    title: 'The Limits of Consent',
    passageText: `Among the moral inheritances of the liberal age, none is more cherished than the principle that consent legitimates. If I agree to a transaction, the thinking goes, then whatever follows from it carries my authorship and cannot be charged against another as a wrong. Consent transforms what would otherwise be an imposition into an exercise of freedom. The principle has done enormous work: it underwrites contract, marriage, medicine, and much of what we mean by respect for persons. I have no wish to dislodge it. I wish only to mark where it ends, for a principle that explains everything explains nothing, and consent has lately been asked to bear weight it was never built to carry.

The first difficulty is that consent presupposes alternatives. To say yes meaningfully, one must be able to say no without ruin. The laborer who accepts dangerous work because the alternative is starvation has consented in the thin, formal sense and in no other. We honor his signature while ignoring the gun, metaphorical but real, that guided his hand. Defenders of the principle reply that the employer did not create the laborer's poverty and so cannot be blamed for exploiting it. Perhaps. But this only shows that consent cannot be the whole of the moral story; it cannot, by itself, distinguish a free bargain from a coerced one, because it takes the background conditions as given when those conditions are exactly what is in question.

A second and subtler difficulty concerns the self that consents. We imagine the consenting agent as fixed, signing on behalf of a stable set of preferences. Yet many of the arrangements we enter reshape the very preferences that would later evaluate them. The person who consents to a grueling profession may, years on, no longer be able to want what she once wanted; the work has remade her. Did the earlier self have authority to bind the later one? The principle of consent has no answer, because it assumes a continuity of the will that the passage of a life routinely dissolves.

One might respond that these are edge cases, that consent works perfectly well in the ordinary run of agreements and that hard cases make bad philosophy. I am unpersuaded. The edge cases are not exotic; they are simply the ordinary cases seen clearly. Every agreement occurs against a background of unchosen circumstance and every agreement, if it matters at all, changes the person who made it. What the easy cases hide, the hard ones merely reveal.

None of this licenses paternalism. To notice that consent is insufficient is not to conclude that someone else should decide for us; the cure for a flawed principle is rarely its opposite. The point is rather that consent is a necessary condition of legitimate dealing, not a sufficient one—that it opens the moral inquiry rather than closing it. When someone says "but you agreed," they have said something relevant and something incomplete. The remaining question is always whether the agreement was made under conditions worthy of the name, and that question consent cannot answer about itself.

To treat consent as a moral terminus is therefore to mistake a door for a destination. It is the beginning of our responsibilities to one another, not their discharge. The liberal achievement was to make consent indispensable. The liberal temptation is to make it enough.`,
    questions: [
      {
        question: 'The main idea of the passage is best summarized as which of the following?',
        options: [
          'Consent is a discredited principle that should be replaced by paternalist decision-making.',
          'Consent works flawlessly in ordinary cases and fails only in rare, exotic ones.',
          'Employers bear primary responsibility for the poverty that drives workers to accept bad terms.',
          'Consent is a necessary but insufficient condition for legitimate dealings between persons.',
        ],
        correctAnswer: 3,
        explanation:
          'The author states the thesis plainly: consent is "a necessary condition of legitimate dealing, not a sufficient one," which the answer calling consent necessary but insufficient matches. The answer replacing consent with paternalist decision-making is the paternalism the author explicitly rejects ("None of this licenses paternalism"). The answer saying consent works flawlessly except in exotic cases is the objection the author rebuts in the fourth paragraph, calling the hard cases "the ordinary cases seen clearly." The answer assigning employers primary responsibility for poverty is a position the author neither endorses ("the employer did not create the laborer\'s poverty... Perhaps") nor treats as the main point.',
        skill: 'main-idea',
        needsReview: false,
      },
      {
        question: 'The author\'s attitude toward the principle of consent is best described as',
        options: [
          'dismissive, regarding it as an outdated relic of liberalism',
          'qualified, valuing it highly while insisting on its limits',
          'reverent, treating it as a complete account of moral legitimacy',
          'indifferent, viewing the debate as merely academic',
        ],
        correctAnswer: 1,
        explanation:
          'The author writes "I have no wish to dislodge it. I wish only to mark where it ends," and calls consent "indispensable"—esteem paired with insistence on limits, i.e., the "qualified" description. "Dismissive" contradicts the explicit refusal to dislodge the principle. "Reverent," treating consent as a complete account of legitimacy, is the "temptation" the author warns against ("to make it enough"). "Indifferent" is wrong because the author treats the stakes as practically urgent, not idle.',
        skill: 'tone-attitude',
        needsReview: false,
      },
      {
        question: 'The example of the laborer who accepts dangerous work primarily serves to',
        options: [
          'show that consent alone cannot distinguish a free bargain from a coerced one',
          'prove that all employment contracts are inherently coercive',
          'establish that poverty is always the fault of those who profit from it',
          'argue that dangerous work should be prohibited by law',
        ],
        correctAnswer: 0,
        explanation:
          'The laborer illustrates that consent "cannot, by itself, distinguish a free bargain from a coerced one, because it takes the background conditions as given"—the function stated by the answer about free versus coerced bargains. The answer calling all employment contracts inherently coercive overgeneralizes; the author limits the claim to cases where "no" means "ruin," not all contracts. The answer blaming those who profit for poverty is something the author actually hedges on ("Perhaps"), not asserts. The answer calling for legal prohibition of dangerous work imports a policy prescription the passage never makes; indeed it disavows paternalism.',
        skill: 'function-purpose',
        needsReview: false,
      },
      {
        question:
          'Based on the passage, the author would most likely agree that the statement "but you agreed" is',
        options: [
          'always sufficient to end a moral dispute',
          'irrelevant once any inequality exists between the parties',
          'a sign that the agreement was necessarily coerced',
          'relevant but incomplete as a moral justification',
        ],
        correctAnswer: 3,
        explanation:
          'The author directly addresses this: "they have said something relevant and something incomplete," so the answer calling the statement relevant but incomplete is nearly verbatim. The answer calling it always sufficient is the very "terminus" view the author rejects. The answer calling it irrelevant once inequality exists overstates—the author keeps consent "relevant," not irrelevant, even amid unequal conditions. The answer treating it as a sign of necessary coercion is too strong; the author says consent leaves the coercion question open, not that inequality entails coercion.',
        skill: 'inference',
        needsReview: false,
      },
      {
        question:
          'Which of the following scenarios would most strengthen the author\'s claim that arrangements "reshape the very preferences that would later evaluate them"?',
        options: [
          'A person signs a contract and later regrets it but retains exactly the values she held before.',
          'A recruit enlists in a demanding order whose training leaves her unable to desire the life she previously valued.',
          'A consumer buys a product after comparing several alternatives at leisure.',
          'A patient consents to a treatment after a thorough and unpressured explanation.',
        ],
        correctAnswer: 1,
        explanation:
          'The author\'s "self that consents" argument turns on arrangements that remake the agent\'s wants, so that "the earlier self" may lack authority over the later one. The recruit whose training leaves her unable to desire the life she previously valued is exactly such a case and strengthens the claim. The person who regrets a contract yet retains exactly her earlier values actually undercuts the claim by preserving stable preferences. The leisurely consumer comparison and the thoroughly explained patient consent are clean, well-conditioned consents that say nothing about preference transformation.',
        skill: 'strengthen-weaken',
        needsReview: false,
      },
      {
        question: 'In the final paragraph, describing consent as "a door for a destination" most nearly means that consent',
        options: [
          'is an obstacle that blocks genuine moral inquiry',
          'is a private matter that excludes others from judgment',
          'marks the start of moral responsibilities rather than their completion',
          'should be abandoned in favor of collective decision-making',
        ],
        correctAnswer: 2,
        explanation:
          'The metaphor is glossed in the same passage: consent is "the beginning of our responsibilities to one another, not their discharge"—a threshold, not an endpoint, which the answer about marking the start of moral responsibilities states. The answer calling consent an obstacle misreads "door" as a barrier; the author means an opening. The answer making consent a private matter beyond others\' judgment contradicts the whole essay, which insists others may scrutinize the conditions of agreement. The answer urging collective decision-making is the paternalist conclusion the author explicitly refuses.',
        skill: 'meaning-in-context',
        needsReview: false,
      },
    ],
  },
  {
    id: 'cars-hum-03',
    section: 'cars',
    discipline: 'art / aesthetics',
    title: 'The Unfinished as a Form',
    passageText: `It has become a commonplace of the gallery to admire the unfinished work—the sculpture whose figures strain half-free of the marble, the canvas where the underdrawing shows through—as if incompletion were a window onto genius caught in the act. We are told that we see the artist thinking, that the rough surface is more authentic than the polished one because it has not yet been smoothed into deception. I find this fashionable reverence both understandable and confused, and I want to separate the part of it that is true from the larger part that flatters our appetite for process at the expense of the thing made.

That we are moved by the unfinished is not in dispute. The question is why, and whether the feeling licenses the conclusions drawn from it. The standard account locates the value in authenticity: the unfinished work supposedly reveals the artist's true intention before convention intervened. But this gets the matter backward. We do not know the artist's intention; we know only that the work stopped. To read the arrested gesture as a deliberate aesthetic choice is to credit the artist with precisely the completion the work lacks. The fragment moves us, but it does not move us by telling the truth about its maker's mind, of which it is in fact silent.

What, then, accounts for the power? I propose that the unfinished work enlists the viewer as collaborator. Where the finished surface presents a settled fact to be received, the fragment poses a question to be answered. The eye supplies the missing arm, the mind completes the suspended phrase, and the pleasure we take is partly the pleasure of our own participation. This is a real value, but notice that it belongs to us as much as to the artist. We are admiring, in some measure, our own imaginative labor, and mistaking it for a property of the object.

Here a defender of the unfinished might object that finished works also require imaginative participation—that no painting is fully specified, that every viewer completes what she sees. This is correct, and it sharpens rather than refutes my point. The difference is one of degree made into a difference of kind. The fragment merely makes visible a transaction that occurs, more discreetly, before every work of art. Its honesty, if we may call it that, lies not in revealing the artist but in revealing the viewer.

There remains a harder case: works the artist deliberately left open, whose incompletion is designed. Here the language of "unfinished" misleads, for such works are finished as fragments; their openness is their form. To treat these as accidents of interruption is to miss their achievement entirely, just as to treat a genuinely interrupted work as a chosen fragment is to invent an artist who never existed. The two errors are mirror images, and the cult of the unfinished commits both at once, collapsing the designed fragment and the abandoned one into a single sentimental category.

The corrective is not to scorn the unfinished but to look at it more exactly. When we feel the pull of the half-made thing, we should ask whether we are responding to the artist's vision, to our own completing imagination, or to the mere romance of arrested effort. Only the second is reliably present. The first may be absent altogether, and the third, however pleasant, tells us nothing about art and a good deal about ourselves.`,
    questions: [
      {
        question: 'The central argument of the passage is that the appeal of unfinished works',
        options: [
          'is largely a product of the viewer\'s own imaginative participation, often mistaken for a property of the object',
          'derives entirely from the authentic revelation of the artist\'s true intention',
          'proves that finished works are inferior because they conceal the creative process',
          'demonstrates that no meaningful distinction exists between designed and accidental fragments',
        ],
        correctAnswer: 0,
        explanation:
          'The author argues the unfinished work "enlists the viewer as collaborator" and that "we are admiring... our own imaginative labor, and mistaking it for a property of the object," which the answer about the viewer\'s own imaginative participation captures. The answer crediting authentic revelation of the artist\'s intention is the "standard account" the author rejects as getting things "backward." The answer calling finished works inferior overstates—the author never ranks them so; he says they too require participation. The answer denying any distinction between designed and accidental fragments reverses the author, who insists the two must NOT be collapsed.',
        skill: 'main-idea',
        needsReview: false,
      },
      {
        question: 'The author\'s tone toward the contemporary admiration of unfinished works is best described as',
        options: [
          'wholly contemptuous and dismissive',
          'enthusiastically endorsing without reservation',
          'sympathetic yet critical, separating a valid insight from an error',
          'detached and strictly neutral, offering no evaluation',
        ],
        correctAnswer: 2,
        explanation:
          'The author calls the reverence "both understandable and confused" and sets out "to separate the part of it that is true from the larger part that... flatters"—sympathetic yet critical. "Wholly contemptuous" is too harsh; he concedes "a real value." "Enthusiastically endorsing without reservation" ignores the sustained critique. "Detached and strictly neutral" is wrong because the essay is plainly evaluative throughout.',
        skill: 'tone-attitude',
        needsReview: false,
      },
      {
        question:
          'The author concedes that finished works also require imaginative participation primarily in order to',
        options: [
          'abandon his earlier claim about the unfinished work',
          'show that his point about the viewer applies, in degree, to all art and is thereby sharpened',
          'prove that finished and unfinished works are indistinguishable in value',
          'argue that viewers should ignore the artist\'s intentions entirely',
        ],
        correctAnswer: 1,
        explanation:
          'The author says the concession "sharpens rather than refutes my point": the fragment "merely makes visible a transaction that occurs... before every work of art." The answer about his point applying in degree to all art names this rhetorical move. The answer about abandoning the earlier claim is wrong—he explicitly does not abandon it. The answer calling finished and unfinished works indistinguishable in value overstates; he marks a difference "of degree," not "no difference." The answer urging viewers to ignore intention entirely is unsupported; nothing in the passage urges that.',
        skill: 'function-purpose',
        needsReview: false,
      },
      {
        question:
          'A curator displays a tapestry that scholars now agree the weaver deliberately left open-ended as a finished artistic statement. Based on the passage, the author would most likely say that calling this work "unfinished"',
        options: [
          'misleads, because such a work is "finished as a fragment" and its openness is its form',
          'is accurate because all open works are by definition incomplete',
          'reveals the weaver\'s true unguarded intention more reliably than a closed work would',
          'shows that designed and accidental fragments belong in a single category',
        ],
        correctAnswer: 0,
        explanation:
          'The fifth paragraph addresses exactly this: deliberately open works "are finished as fragments; their openness is their form," and the word "unfinished" "misleads"—which the answer calling the label misleading applies directly. The answer calling the label accurate because all open works are incomplete repeats the careless usage the author criticizes (and overgeneralizes with "all... by definition"). The answer about revealing the weaver\'s unguarded intention contradicts his claim that the work is "silent" about the maker\'s mind. The answer collapsing designed and accidental fragments into one category is the "mirror" error he warns against, not endorses.',
        skill: 'application',
        needsReview: false,
      },
      {
        question:
          'Which finding would most weaken the author\'s claim that the unfinished work is "silent" about its maker\'s intentions?',
        options: [
          'Surveys show that most viewers enjoy completing fragments in their own imagination.',
          'Critics disagree about whether a given fragment is moving.',
          'Finished paintings are also completed in part by the viewer\'s mind.',
          'Detailed studio notebooks reveal that an artist halted a work at a precise point to achieve a calculated expressive effect.',
        ],
        correctAnswer: 3,
        explanation:
          'The author claims the fragment cannot tell us the artist\'s intention—"we know only that the work stopped." Studio notebooks documenting a deliberate, calculated stopping point would supply exactly the intentional record he says is unavailable, so that finding weakens the claim most. The survey about viewers enjoying completion and the observation that finished paintings are also completed by the viewer\'s mind actually support the author\'s viewer-centered thesis. Critics\' disagreement about whether a fragment is moving concerns feeling, not whether the work reveals intention.',
        skill: 'strengthen-weaken',
        needsReview: false,
      },
      {
        question: 'As used in the final paragraph, "the mere romance of arrested effort" refers to',
        options: [
          'a reliable insight into the artist\'s creative vision',
          'the viewer\'s legitimate act of imaginatively completing the work',
          'a sentimental pleasure in the idea of interrupted labor that reveals nothing about the artwork itself',
          'the technical skill required to leave a work deliberately open',
        ],
        correctAnswer: 2,
        explanation:
          'The author lists three possible objects of our response and says of the third—the "romance"—that it "however pleasant, tells us nothing about art and a good deal about ourselves," which the answer describing a sentimental pleasure in interrupted labor matches. The answer about reliable insight into the artist\'s vision describes the first object, which the author says "may be absent." The answer about the viewer\'s completing imagination describes the second object, which he treats as the reliably present one—distinct from the romance (a half-right trap that swaps the second object for the third). The answer about technical skill is unrelated to the phrase\'s meaning here.',
        skill: 'meaning-in-context',
        needsReview: false,
      },
    ],
  },
  {
    id: 'cars-hum-04',
    section: 'cars',
    discipline: 'literary criticism',
    title: 'Against the Tyranny of the Likeable Narrator',
    passageText: `A peculiar demand has come to dominate the way ordinary readers, and increasingly professional critics, evaluate fiction: that the central figure be, in some loosely specified sense, likeable. A novel is faulted when its protagonist is cold, or cruel, or merely unsympathetic, as though the reader had been invited to a dinner party and seated beside a bore. The complaint is so widespread that it now passes for a critical standard. I regard it as a category error of the first order, one that confuses the conditions of friendship with the conditions of art.

The demand rests on an unexamined premise: that we read in order to keep company with characters we would choose to know. But this mistakes the novel for a social occasion. We do not require our acquaintances to be instructive about the human condition; we require them to be agreeable, which is a different and lesser thing. The figures who illuminate most are frequently those we would flee in life—the monstrous, the self-deceived, the magnificently wrong. To insist that they earn our affection before they earn our attention is to forfeit precisely the knowledge fiction is best positioned to deliver.

One sees the appeal of the contrary view. A repellent narrator can be a chore, and not every unpleasant character is interesting; unpleasantness alone guarantees nothing. The defender of likeability will press this: surely some sympathy is needed, or we have no reason to keep reading. I grant the premise and deny the conclusion. What sustains attention is not sympathy but interest, and the two diverge constantly. We may be riveted by a figure for whom we feel no warmth at all, held by the wish to understand a mind we find abhorrent. The compulsion to keep reading is curiosity, not affection, and curiosity is indifferent to virtue.

There is, moreover, a moral cost to the likeability standard that its proponents overlook. A literature that supplies only admirable companions trains us to extend our imagination exclusively to those who resemble our better selves. It is precisely the unlikeable character—rendered from within, made comprehensible without being excused—who stretches the moral imagination past its comfortable limits. To inhabit such a consciousness is to learn that the alien is not the unintelligible, that even cruelty has its reasons. This is among the highest offices of the form, and the demand for likeability quietly forbids it.

The likeability critic might retreat to a subtler position: not that characters must be pleasant, but that the reader must be given some foothold of understanding, some thread of recognition. With this I have no quarrel; it is simply a different claim. Comprehensibility is not likeability. We can understand a figure thoroughly and like him not at all, and it is this understanding, not our approval, that the novelist owes us. The retreat, if pressed, abandons the original demand entirely and concedes my point under another name.

What the standard finally reveals is a wish to be confirmed rather than disturbed—to find in fiction a mirror flattering enough to gaze into. But the books that matter are seldom mirrors. They are windows onto rooms we would not enter and minds we would not choose, and their value lies exactly in the discomfort of the view. To ask a novel to be populated by people we like is to ask it to stop doing the one thing only it can do.`,
    questions: [
      {
        question: 'The primary purpose of the passage is to',
        options: [
          'argue that unpleasant characters are always more artistically valuable than pleasant ones',
          'challenge the standard that fictional protagonists must be likeable, distinguishing likeability from comprehensibility',
          'demonstrate that readers should feel no emotional connection to characters at all',
          'prove that professional critics understand fiction better than ordinary readers do',
        ],
        correctAnswer: 1,
        explanation:
          'The essay attacks "the tyranny of the likeable narrator," arguing that what sustains reading is "interest, not affection," and that "comprehensibility is not likeability." The answer about challenging the likeability standard captures both the target and the key distinction. The answer calling unpleasant characters always more valuable overstates—the author admits "unpleasantness alone guarantees nothing." The answer denying readers any emotional connection is wrong; the author allows for interest and understanding, just not required affection. The answer ranking professional critics above ordinary readers inverts the author, who notes the demand has spread to critics too.',
        skill: 'main-idea',
        needsReview: false,
      },
      {
        question: 'The author\'s attitude toward the demand for likeable characters is best characterized as',
        options: [
          'mildly amused but ultimately accepting',
          'ambivalent, finding equal merit on both sides',
          'cautiously supportive with minor reservations',
          'firmly opposed, regarding it as a confusion that impoverishes fiction',
        ],
        correctAnswer: 3,
        explanation:
          'The author calls the demand "a category error of the first order" and ends by saying it asks fiction "to stop doing the one thing only it can do"—firm opposition. "Mildly amused but ultimately accepting" understates the vehemence. "Ambivalent, finding equal merit on both sides" is wrong; though he concedes points, he never treats the sides as equally meritorious. "Cautiously supportive" reverses his stance entirely.',
        skill: 'tone-attitude',
        needsReview: false,
      },
      {
        question:
          'The author distinguishes "interest" from "sympathy" chiefly in order to',
        options: [
          'concede that sympathy is in fact necessary to sustain a reader\'s attention',
          'argue that curiosity is a moral failing in readers',
          'explain what keeps a reader engaged with a character she does not like',
          'show that all riveting characters are ultimately virtuous',
        ],
        correctAnswer: 2,
        explanation:
          'The author grants that something must sustain reading but says "What sustains attention is not sympathy but interest," held by "the wish to understand a mind we find abhorrent." The answer about what keeps a reader engaged with a character she dislikes names this purpose. The answer conceding that sympathy is necessary is the opposite of his conclusion. The answer calling curiosity a moral failing misreads him—curiosity is praised, not condemned. The answer claiming all riveting characters are virtuous contradicts the claim that we may feel "no warmth at all."',
        skill: 'function-purpose',
        needsReview: false,
      },
      {
        question:
          'Based on the passage, the author would most likely agree that a novel narrated by a cruel but fully comprehensible figure',
        options: [
          'can stretch the reader\'s moral imagination precisely by rendering an alien mind intelligible',
          'fails as art because the reader cannot like the narrator',
          'should excuse the narrator\'s cruelty to make him sympathetic',
          'is valuable only if the narrator eventually reforms',
        ],
        correctAnswer: 0,
        explanation:
          'The fourth paragraph praises "the unlikeable character—rendered from within, made comprehensible without being excused" for stretching "the moral imagination," teaching "that even cruelty has its reasons," so the answer about rendering an alien mind intelligible follows directly. The answer saying the novel fails because the narrator is unlikeable applies the likeability standard the author rejects. The answer urging that the cruelty be excused is contradicted by "without being excused." The answer requiring eventual reform imports a redemption requirement the passage never endorses.',
        skill: 'application',
        needsReview: false,
      },
      {
        question:
          'When the likeability critic "retreats" to the claim that readers need a "foothold of understanding," the author responds that this',
        options: [
          'fully vindicates the original demand for likeable characters',
          'proves that comprehensibility and likeability are the same thing',
          'shows the critic was right all along about sympathy',
          'is a different and acceptable claim that effectively concedes his point',
        ],
        correctAnswer: 3,
        explanation:
          'The author says "with this I have no quarrel; it is simply a different claim," and that the retreat "abandons the original demand entirely and concedes my point under another name," matching the answer that calls it a different and acceptable claim conceding his point. The answers saying the retreat vindicates the original demand or shows the critic was right about sympathy contradict the passage. The answer equating comprehensibility with likeability reverses the author\'s key distinction—"Comprehensibility is not likeability."',
        skill: 'argument-structure',
        needsReview: false,
      },
      {
        question:
          'In the final paragraph, the contrast between fiction as a "mirror" and as a "window" most nearly conveys that valuable novels',
        options: [
          'should reflect readers\' own values back to them for reassurance',
          'offer access to discomfiting perspectives rather than flattering self-confirmation',
          'must depict only settings and people unfamiliar to the reader',
          'are best when they avoid moral discomfort of any kind',
        ],
        correctAnswer: 1,
        explanation:
          'The author opposes the "mirror flattering enough to gaze into" to "windows onto rooms we would not enter," whose "value lies exactly in the discomfort of the view," which the answer about access to discomfiting perspectives captures. The answer about reflecting readers\' own values back describes the mirror, which the author criticizes. The answer requiring only unfamiliar settings and people overliteralizes the metaphor into a rule about settings (scope trap). The answer praising novels that avoid moral discomfort inverts the author\'s embrace of discomfort.',
        skill: 'meaning-in-context',
        needsReview: false,
      },
    ],
  },
  {
    id: 'cars-hum-05',
    section: 'cars',
    discipline: 'history / historiography',
    title: 'The Seduction of the Turning Point',
    passageText: `Historians, like the rest of us, crave a story with shape, and few shapes are more satisfying than the turning point—the single battle, treaty, or invention after which everything was different. The narrative pleasures of such moments are undeniable, and they make for memorable teaching. But I have come to distrust them, not because turning points never occur, but because the very form of the turning point distorts what it claims to illuminate. It converts a long, diffuse process into a punctual event, and in doing so it smuggles a theory of causation past the reader without argument.

The trouble begins with selection. To name a moment as decisive is to assume the vantage of the present and to ask which past event most efficiently produces it. But this reasons backward from outcome to cause, and backward reasoning is treacherous. The event we crown as the turning point is the one that survived the filter of consequence; the roads not taken leave no monument, and so we mistake the road that happened to be traveled for the only road there was. The turning point, in short, is an artifact of hindsight masquerading as a feature of the past.

Consider how differently the same era looks to those who lived it. The contemporaries of a supposedly decisive battle rarely experienced it as decisive; they went on as before, uncertain which of a hundred contingencies would prove to matter. Decisiveness is conferred later, by those who already know how the story ends. To project that knowledge back onto the actors is to rob them of the uncertainty that was the actual texture of their lives—and to make the outcome seem more inevitable than it was. The turning point thus performs a double falsification: it overstates the importance of one moment and understates the openness of all the others.

I anticipate the obvious rejoinder. Surely some events really were pivotal; surely the historian must distinguish the consequential from the trivial, or write a chronicle without judgment. I agree that judgment is unavoidable, and I do not counsel a flat history in which nothing matters more than anything else. My quarrel is narrower: it is with the grammar of the singular turning point, the implication that history pivots on discrete hinges rather than turning, as it usually does, through the slow accumulation of countless small pressures. To grant that some events weigh more than others is not to grant that any single one bears the whole weight.

There is, finally, a quiet politics in the love of turning points. A history organized around decisive moments tends to elevate the actors present at those moments—generals, monarchs, signatories—and to obscure the diffuse multitudes whose unremarked choices constituted the actual pressure of events. The great-man theory and the turning-point theory are siblings; both locate causation where it is most visible rather than where it is most real. To dismantle one is to weaken the other.

The remedy is not to abolish narrative, which is impossible, but to hold our narratives more loosely—to remember that the shapeliness we admire in a historical account is at least partly our contribution, imposed on a past that was, to those who endured it, shapeless, contingent, and open. The turning point is a story we tell about time. We should not mistake it for the way time moves.`,
    questions: [
      {
        question: 'Which statement best captures the author\'s central claim?',
        options: [
          'Turning points never occur in history and should be entirely discarded.',
          'Historians should write flat chronicles in which no event matters more than another.',
          'The great-man theory is the only valid framework for understanding causation.',
          'The concept of the singular turning point distorts history by imposing the shape of hindsight onto a contingent past.',
        ],
        correctAnswer: 3,
        explanation:
          'The author argues the turning point "is an artifact of hindsight masquerading as a feature of the past" and distorts contingency, making the answer about imposing the shape of hindsight onto a contingent past the thesis. The answer saying turning points never occur overstates—he writes "not because turning points never occur." The answer recommending flat chronicles is the "flat history" he explicitly declines to counsel. The answer endorsing the great-man theory reverses him: he criticizes it as the turning point\'s "sibling."',
        skill: 'main-idea',
        needsReview: false,
      },
      {
        question: 'The author\'s attitude toward narrative shapeliness in history is best described as',
        options: [
          'wary, regarding it as a partly self-imposed distortion to be held loosely',
          'uncritically appreciative of its teaching value',
          'wholly hostile, demanding its complete elimination',
          'indifferent to whether history has narrative form',
        ],
        correctAnswer: 0,
        explanation:
          'The author admits narrative pleasures are "undeniable" yet says "shapeliness... is at least partly our contribution" and urges holding narratives "more loosely"—wariness, not abolition, which the answer calling it a partly self-imposed distortion captures. "Uncritically appreciative" ignores his sustained distrust. "Wholly hostile, demanding complete elimination" is too strong; he says abolishing narrative "is impossible" and does not demand it. "Indifferent" contradicts his obvious engagement.',
        skill: 'tone-attitude',
        needsReview: false,
      },
      {
        question:
          'The author discusses how "contemporaries of a supposedly decisive battle rarely experienced it as decisive" primarily to',
        options: [
          'prove that no battle has ever changed the course of events',
          'argue that ordinary people are poor judges of historical importance',
          'show that decisiveness is conferred retrospectively, robbing past actors of their genuine uncertainty',
          'establish that historians should rely only on contemporary testimony',
        ],
        correctAnswer: 2,
        explanation:
          'The point of the contemporaries example is that "Decisiveness is conferred later" and projecting it back "rob[s] them of the uncertainty that was the actual texture of their lives," which the answer about retrospectively conferred decisiveness matches. The answer saying no battle has ever changed events overstates beyond the author\'s qualified position. The answer calling ordinary people poor judges misreads the example—the contemporaries\' uncertainty is presented as accurate to their reality, not as poor judgment. The answer requiring reliance only on contemporary testimony introduces a methodological rule the passage does not assert (outside/scope trap).',
        skill: 'function-purpose',
        needsReview: false,
      },
      {
        question:
          'Based on the passage, the author would most likely agree that the "roads not taken leave no monument" implies that',
        options: [
          'historical outcomes were always inevitable',
          'our sense of which event was decisive is biased by the survival of one outcome over its alternatives',
          'historians should construct monuments to alternative histories',
          'contingency plays no real role in historical events',
        ],
        correctAnswer: 1,
        explanation:
          'The "roads not taken" image supports the claim that "we mistake the road that happened to be traveled for the only road there was"—a hindsight bias toward the surviving outcome, as the answer about bias from one outcome\'s survival states. The answers calling outcomes always inevitable and denying contingency any role directly oppose the author, who emphasizes contingency and openness. The answer urging monuments to alternative histories literalizes "monument" into an absurd prescription the passage never makes.',
        skill: 'inference',
        needsReview: false,
      },
      {
        question:
          'Which discovery would most strengthen the author\'s claim that turning points are "artifacts of hindsight"?',
        options: [
          'Evidence that a famous battle was immediately recognized by all sides as permanently settling the conflict',
          'Evidence that historians broadly agree on which events were most important',
          'Evidence that participants in a famous "decisive" treaty regarded it at the time as routine and reversible',
          'Evidence that narrative accounts make history easier for students to remember',
        ],
        correctAnswer: 2,
        explanation:
          'The author claims decisiveness is assigned in retrospect, not felt at the time. Evidence that contemporaries treated a "decisive" treaty as routine and reversible directly confirms that the decisiveness was a later imposition, strengthening the thesis. Evidence that a battle was immediately recognized as permanently settling the conflict would weaken the thesis by showing the importance was recognized contemporaneously. Evidence of broad agreement among historians speaks to consensus, not to hindsight bias. Evidence that narrative aids student memory supports narrative\'s pedagogical value, which the author already grants and which does not bear on the hindsight claim.',
        skill: 'strengthen-weaken',
        needsReview: false,
      },
      {
        question:
          'In the passage, the assertion that "the great-man theory and the turning-point theory are siblings" most nearly means that both',
        options: [
          'locate causation in the most visible figures or moments rather than in diffuse, less conspicuous forces',
          'were developed by the same historians',
          'correctly identify where historical change truly originates',
          'reject the role of individual leaders in history',
        ],
        correctAnswer: 0,
        explanation:
          'The author explains the kinship directly: both "locate causation where it is most visible rather than where it is most real," which the answer contrasting visible figures or moments with diffuse forces restates. The answer about shared authorship literalizes "siblings" into a claim the passage does not make. The answer saying both correctly identify where change originates inverts the author\'s critique—he says they misplace causation. The answer saying both reject individual leaders is backward; the great-man theory elevates such leaders rather than rejecting them.',
        skill: 'meaning-in-context',
        needsReview: false,
      },
    ],
  },
  {
    id: 'cars-hum-06',
    section: 'cars',
    discipline: 'music / cultural criticism',
    title: 'On the Death of the Difficult',
    passageText: `There was a time, not so distant, when a piece of music might reasonably ask something of its listener—repeated hearings, a tolerance for confusion, the patience to let an unfamiliar logic disclose itself. That expectation has quietly expired. The reigning assumption now is that music should yield its pleasures on first contact, that any work withholding immediate gratification has failed in its primary duty. I want to examine this shift, not to mourn a lost golden age, but to ask what we have traded away, and whether the trade was as obviously favorable as our habits imply.

The case for accessibility is not contemptible, and I will not caricature it. Music that communicates instantly reaches more people; difficulty has too often been a cover for pretension, a way of converting obscurity into prestige. There is a genuine snobbery that mistakes inaccessibility for depth, and the populist suspicion of it is healthy. So far I am in agreement. But the corrective has overshot. From the true premise that difficulty is not sufficient for value, we have slid to the false conclusion that difficulty is incompatible with it—that the demanding work is, by virtue of its demands, suspect.

Consider what is lost when first-contact pleasure becomes the sole criterion. Some of the deepest satisfactions music affords are unavailable on a first hearing by their very nature: they consist in the recognition of a return, the dawning sense of a structure, the pleasure of a pattern grasped only after it has been varied. A work that gives everything at once can give none of this, for these pleasures are temporal; they require the listener to have a history with the piece. To demand instant reward is therefore not merely to prefer one kind of music; it is to foreclose an entire category of experience and then to forget that the category existed.

The accessibility partisan may answer that listeners are free to seek out difficulty if they wish, that nothing has been forbidden. True enough—and yet this misjudges how taste is formed. We do not arrive with fixed preferences and then shop among musics; our capacities are cultivated or left to atrophy by what surrounds us. A culture that everywhere rewards the immediate trains an ear that cannot hear the slow. The freedom to seek difficulty is hollow if the faculty required to enjoy it has never been developed. What looks like an open market in taste is in fact a quiet narrowing of what we are able to want.

I am aware of how this can sound: like the lament of a mandarin watching the barbarians at the gate. But the worry is not that the wrong music is winning; it is that one axis of musical value—the rewarding of patience—is being declared illegitimate, and that we are losing the very ability to notice the loss. A diminished palate does not experience itself as diminished; it experiences itself as satisfied.

None of this requires us to despise the immediate. The instantly delightful is a real good, and a music that offered only austerity and toil would deserve much of the suspicion it received. My plea is for plurality—for a culture capacious enough to honor both the song that opens on first hearing and the one that opens only on the twentieth. To lose either is to be poorer. We are in danger of losing one and calling it progress.`,
    questions: [
      {
        question: 'The main idea of the passage is that',
        options: [
          'difficult music is inherently superior to accessible music',
          'the demand for instant musical gratification threatens to eliminate a legitimate axis of musical value rooted in patience',
          'accessibility in music is a form of pretension disguised as populism',
          'listeners today are simply less intelligent than those of the past',
        ],
        correctAnswer: 1,
        explanation:
          'The author warns that "one axis of musical value—the rewarding of patience—is being declared illegitimate," while pleading "for plurality," which is the answer about the demand for instant gratification threatening that axis. The answer calling difficult music inherently superior overstates—the author calls "the instantly delightful... a real good." The answer calling accessibility a disguised pretension misattributes pretension; the author locates snobbery in difficulty and grants the populist critique is "healthy." The answer about listeners being less intelligent is a caricature the author explicitly disowns ("like the lament of a mandarin").',
        skill: 'main-idea',
        needsReview: false,
      },
      {
        question: 'Which best describes the author\'s overall attitude?',
        options: [
          'concerned yet even-handed, defending plurality rather than the superiority of difficulty',
          'nostalgic and resigned to inevitable cultural decline',
          'celebratory of contemporary accessibility',
          'contemptuous of ordinary listeners and their tastes',
        ],
        correctAnswer: 0,
        explanation:
          'The author states he writes "not to mourn a lost golden age" and pleads "for plurality... capacious enough to honor both," while voicing genuine worry—concerned but even-handed. "Nostalgic and resigned to inevitable decline" is rejected by his refusal to mourn and his anti-decline framing. "Celebratory of contemporary accessibility" ignores his critique of the accessibility ideal. "Contemptuous of ordinary listeners" is the very mandarin posture he distances himself from.',
        skill: 'tone-attitude',
        needsReview: false,
      },
      {
        question:
          'The author concedes that "difficulty has too often been a cover for pretension" primarily in order to',
        options: [
          'abandon his defense of demanding music',
          'prove that all difficult music is pretentious',
          'argue that accessibility has no merits whatsoever',
          'grant a valid point so as to isolate the precise overreach he wishes to criticize',
        ],
        correctAnswer: 3,
        explanation:
          'The concession sets up the key move: from "difficulty is not sufficient for value" critics have wrongly "slid to the false conclusion that difficulty is incompatible with it." Granting the valid point isolates that overreach, which is what the answer about isolating the precise overreach says. The answer about abandoning his defense is wrong—he sustains it. The answer that all difficult music is pretentious overgeneralizes the concession. The answer denying accessibility any merit contradicts his acknowledgment of its "genuine" merits.',
        skill: 'function-purpose',
        needsReview: false,
      },
      {
        question:
          'Based on the passage, the author would most likely agree that the "freedom to seek difficulty" is',
        options: [
          'a complete solution that fully protects challenging music',
          'irrelevant because difficult music has no real value',
          'hollow when the culture has failed to cultivate the capacity needed to enjoy such music',
          'a guarantee that taste will naturally diversify on its own',
        ],
        correctAnswer: 2,
        explanation:
          'The author argues "The freedom to seek difficulty is hollow if the faculty required to enjoy it has never been developed," since taste is "cultivated or left to atrophy" by environment, so the answer calling that freedom hollow follows. The answer calling it a complete solution is the accessibility partisan\'s position the author rebuts. The answer calling it irrelevant because difficult music lacks value contradicts his defense of difficulty\'s value. The answer treating it as a guarantee of diversifying taste opposes his claim that an immediate-rewarding culture "narrows" what we can want.',
        skill: 'inference',
        needsReview: false,
      },
      {
        question:
          'Suppose a study showed that listeners raised on instantly gratifying music can, with brief exposure, immediately come to love highly complex works without any repeated listening. This finding would most directly weaken the author\'s claim that',
        options: [
          'difficulty has sometimes served as a cover for pretension',
          'the instantly delightful is a real good',
          'a culture should be capacious enough to honor varied kinds of music',
          'certain musical satisfactions are temporal and require a listener to have a history with a piece',
        ],
        correctAnswer: 3,
        explanation:
          'The author\'s core argument is that some pleasures "are unavailable on a first hearing by their very nature" and "require the listener to have a history with the piece." A demonstration that complex works can be loved immediately, without repeated listening, undercuts exactly that temporal claim. The point that difficulty has served as a cover for pretension is a concession unaffected by the finding. The claim that the instantly delightful is a real good is something the author affirms, not a claim the finding threatens. The call for a capacious culture is a normative plea, not an empirical claim about how appreciation works.',
        skill: 'strengthen-weaken',
        needsReview: false,
      },
      {
        question:
          'In the fifth paragraph, the statement "A diminished palate does not experience itself as diminished; it experiences itself as satisfied" most nearly means that',
        options: [
          'people with narrow tastes are consciously aware of what they are missing',
          'a culture can lose a capacity for appreciation without recognizing that anything has been lost',
          'satisfaction is the only reliable measure of musical value',
          'difficult music always leaves listeners feeling unsatisfied',
        ],
        correctAnswer: 1,
        explanation:
          'The line elaborates the author\'s worry that "we are losing the very ability to notice the loss"—the diminishment is invisible to the diminished, as the answer about losing a capacity without recognizing the loss restates. The answer saying narrow-tasted listeners are consciously aware of what they miss is the opposite of the author\'s point about unawareness. The answer making satisfaction the only reliable measure endorses the sole-satisfaction criterion the author is arguing against. The answer about difficult music leaving listeners unsatisfied misreads the line, which is about the listener\'s self-perception, not difficult music\'s effects.',
        skill: 'meaning-in-context',
        needsReview: false,
      },
    ],
  },
  {
    id: 'cars-hum-07',
    section: 'cars',
    discipline: 'translation theory',
    title: 'The Translator\'s Fidelity',
    needsReview: true,
    passageText: `Every translator lives under an accusation that predates any particular offense: traduttore, traditore — translator, traitor. The epigram assumes that a text possesses a single, stable meaning that the translator either delivers intact or betrays. I want to suggest that this picture of fidelity is not merely too strict; it is incoherent, and its incoherence has consequences for how we read anything at all.

Consider what "delivering the text intact" would require. A poem's meaning does not float free of its sounds, its meter, the histories its words drag behind them. The German word Heimat is not "homeland" plus some removable aura; the aura is the meaning, accreted through decades of longing, propaganda, and return. A translator who renders Heimat as "homeland" has not preserved a core and lost a decoration. She has substituted one word's history for another's. There is no kernel that survives the exchange untouched.

The traditional response is to grade translations by their losses: this one sacrifices rhyme for sense, that one sense for rhyme. The metaphor of loss presumes an original plenitude the translation can only diminish. But readers of the original are not in possession of this plenitude either. The native reader of the sixteenth century read with assumptions no modern reader shares; the poem has been "translated" by time for its own countrymen. If loss disqualifies, every reading is disqualified.

I propose a different standard. A translation is faithful not when it replicates the original — it cannot — but when it stands in the same relation to its readers that the original stood in to its first readers: provoking where it provoked, consoling where it consoled. Call this functional fidelity. It licenses departures that lexical fidelity forbids. To make a joke land in Warsaw, you may need different furniture than the joke owned in Lisbon.

The objection writes itself: functional fidelity licenses anything; the translator becomes an author with an alibi. The objection would be fatal if effects could be produced at will from any material. They cannot. The translator who seeks the original's effect is constrained at every phrase by the original's structure of effects — a far more demanding master than the dictionary. The libertine translator fails not by being unfaithful but by being lazy: producing the easy effect rather than the earned one.

What follows for readers is uncomfortable. If translation is impossible in the strict sense and yet translations plainly succeed — we weep at Tolstoy without Russian — then meaning must be sturdier and more portable than the betrayal epigram assumes, and also less proprietary. The text was never a vault. It was always a score, awaiting performance.`,
    questions: [
      {
        question: 'The central argument of the passage is that:',
        options: [
          'translation is impossible and should be abandoned as a literary practice',
          'translators deserve recognition as original authors of the works they translate',
          'faithful translation should be judged by the effect on readers rather than by word-for-word correspondence',
          'older texts cannot be understood by modern readers in any language',
        ],
        correctAnswer: 2,
        explanation: 'The author explicitly replaces lexical fidelity with "functional fidelity" — standing in the same relation to readers as the original did, which is the answer about judging translation by its effect on readers. The passage denies strict replication is possible but insists translations "plainly succeed," so the answer calling for abandonment contradicts it; the answer crowning translators as original authors is raised as an objection and answered; the answer denying modern readers access to older texts overstates the time-translation point.',
        skill: 'main-idea',
      },
      {
        question: 'The author mentions the word Heimat primarily in order to:',
        options: [
          'prove that German is more difficult to translate than other languages',
          'argue that translators should leave certain words untranslated',
          'illustrate a successful translation choice',
          'show that a word\'s historical associations are inseparable from its meaning',
        ],
        correctAnswer: 3,
        explanation: 'Heimat illustrates that "the aura is the meaning" — there is no removable kernel, so the answer about historical associations being inseparable from meaning is right. Nothing in the passage ranks languages by difficulty, recommends leaving words untranslated, or presents the "homeland" rendering as a success.',
        skill: 'function',
      },
      {
        question: 'Based on the passage, the author would most likely describe the "traduttore, traditore" epigram as:',
        options: [
          'resting on a mistaken picture of meaning as a stable possession',
          'an accurate description of most published translations',
          'unfair to traitors rather than to translators',
          'true of poetry but false of prose',
        ],
        correctAnswer: 0,
        explanation: 'The author calls the fidelity picture the epigram assumes "incoherent" — meaning is not a vault to be delivered intact, so the answer about a mistaken picture of meaning as a stable possession is right. The author never assesses most published translations as betrayals; the quip about traitors is wordplay the passage does not make; the poetry/prose split never appears.',
        skill: 'inference',
      },
      {
        question: 'Which finding, if true, would most WEAKEN the author\'s defense of functional fidelity against the "alibi" objection?',
        options: [
          'Some jokes cannot be made funny in any other language',
          'Most readers cannot compare a translation with its original',
          'Translators freely inventing content routinely produce the same effects on readers as painstaking translators',
          'Dictionaries disagree about the meanings of common words',
        ],
        correctAnswer: 2,
        explanation: 'The defense is that effects CANNOT be produced at will from any material — the original\'s structure constrains the translator. If free invention routinely produced the same effects as painstaking translation, that constraint (and the defense) collapses. The finding that some jokes cannot be made funny elsewhere supports the author\'s picture of difficulty; readers\' inability to compare with the original and dictionary disagreement are irrelevant to the constraint claim.',
        skill: 'strengthen-weaken',
      },
      {
        question: 'The author\'s claim that a text "was always a score, awaiting performance" most nearly means that:',
        options: [
          'texts should be set to music to be fully appreciated',
          'a text\'s meaning is realized anew in each act of reading or translating',
          'the original manuscript is more valuable than any copy',
          'performance of a text requires formal training',
        ],
        correctAnswer: 1,
        explanation: 'The score/vault contrast closes the argument that meaning is portable and non-proprietary — realized in performance (reading, translating) rather than stored, which the answer about meaning realized anew in each act of reading captures. The musical-setting reading is literalism; the manuscript-value and formal-training readings reverse or invent claims.',
        skill: 'meaning-in-context',
      },
      {
        question: 'Suppose a director stages a nineteenth-century play in modern dress so that its satire of social climbing lands on a contemporary audience. The author would most likely regard this as:',
        options: [
          'an instance of functional fidelity, provided the new staging earns the original\'s effects',
          'a betrayal of the playwright\'s explicit intentions',
          'acceptable only if the original staging is also performed',
          'evidence that the play has no stable meaning worth preserving',
        ],
        correctAnswer: 0,
        explanation: 'Modern dress to preserve the satire\'s bite parallels changing the joke\'s "furniture" so it lands — legitimate if the effect is earned, not easy, so the functional-fidelity answer is right. Calling it a betrayal of explicit intentions applies the lexical-fidelity standard the author rejects; requiring the original staging alongside it is a compromise the passage never demands; treating it as evidence of no stable meaning mistakes anti-essentialism for the nihilism the author disclaims.',
        skill: 'application',
      },
    ],
  },
  {
    id: 'cars-hum-08',
    section: 'cars',
    discipline: 'architecture criticism',
    title: 'Against the Honest Ruin',
    needsReview: true,
    passageText: `When a historic building is restored, an orthodoxy now governs the work: every new stone must announce itself. Repairs are made in frankly modern materials, joints are left visible, missing figures are replaced by blank volumes. The doctrine is called honesty, and its rationale seems unimpeachable — the visitor must never be deceived into taking the new for the old. I want to argue that this honesty is itself a deception, and a condescending one.

The doctrine descends from Ruskin's fury at Victorian restorers who scraped medieval churches down to a guess and called the guess authentic. His fury was earned. But notice what the modern orthodoxy has kept and what it has discarded. It kept the horror of deception; it discarded Ruskin's actual reverence, which was for the building as a living whole — the "golden stain of time" on a surface worked by human hands. The honest-repair doctrine reveres something else: the legibility of the intervention. The building becomes a document about its own restoration, a lecture delivered in limestone and titanium.

Consider what a cathedral was for. Its makers did not intend an archive of construction phases; they intended a space that overwhelmed distinction-making altogether. Medieval builders themselves repaired in the style of the whole without agonizing — a fourteenth-century mason completing a twelfth-century arcade matched it as best he could, and no one has ever called those masons liars. The seamless repair honors the building\'s purpose; the legible repair honors the restorer\'s scruples. One of these is about the cathedral. The other is about us.

The standard defense is that the visitor has a right not to be misled. But misled about what? The visitor who cannot distinguish the 1950s vaulting from the 1250s vaulting has not been deceived about the experience the building exists to give; she has received that experience. The deception the doctrine prevents is one only specialists could suffer, and specialists have archives, drawings, and dated invoices — they are the last people who need the wall itself to confess.

I concede one strong case to the orthodoxy: where the record is genuinely uncertain, invention passed off as knowledge corrupts both the building and the discipline. Where we do not know what stood, the blank volume tells the truth. But this concession defines a boundary, not a rule. Most restoration does not operate at the edge of knowledge; it replaces the documented with the documented.

The honest ruin, then, is a genre error. It mistakes buildings for texts and visitors for readers, when a building is nearer to a piece of music, and a restoration nearer to a performance. We do not demand that an orchestra play a damaged score with the gaps left audible.`,
    questions: [
      {
        question: 'The author\'s central claim is that the "honest repair" doctrine:',
        options: [
          'serves the restorer\'s self-regard at the expense of the building\'s purpose',
          'should be applied more strictly to medieval churches',
          'was invented by Ruskin and faithfully preserves his values',
          'is justified because visitors have a right to accurate information',
        ],
        correctAnswer: 0,
        explanation: 'The passage\'s pivot — "One of these is about the cathedral. The other is about us" — is the answer that the doctrine serves the restorer\'s self-regard at the building\'s expense. The answer crediting Ruskin with inventing and being preserved by the doctrine reverses the argument: it kept Ruskin\'s horror of deception but discarded his reverence. The answer resting on visitors\' right to accurate information is the defense the author rebuts, and the answer urging stricter application contradicts the thesis.',
        skill: 'main-idea',
      },
      {
        question: 'The author refers to the fourteenth-century mason in order to:',
        options: [
          'prove that medieval construction techniques were superior to modern ones',
          'establish that all restoration before Ruskin was fraudulent',
          'demonstrate that repairs were once cheaper than they are today',
          'show that matching the existing style was historically normal and never counted as deception',
        ],
        correctAnswer: 3,
        explanation: 'The mason "matched it as best he could, and no one has ever called those masons liars" — seamless repair has an honorable pedigree, which is the answer about style-matching being historically normal. Medieval craft superiority, universal pre-Ruskin fraud, and the relative cost of repairs never appear in the passage.',
        skill: 'function',
      },
      {
        question: 'It can be inferred that the author believes the harm prevented by legible repairs is:',
        options: [
          'the primary danger facing historic architecture today',
          'suffered, if at all, only by specialists who already have better sources',
          'greatest for ordinary visitors encountering a building for the first time',
          'impossible to define with any precision',
        ],
        correctAnswer: 1,
        explanation: 'The author says the prevented deception "is one only specialists could suffer, and specialists have archives... they are the last people who need the wall itself to confess," which the answer about specialists with better sources states. The answer locating the harm with first-time ordinary visitors inverts this; calling it the primary danger to historic architecture overstates, and calling it impossible to define dodges the point.',
        skill: 'inference',
      },
      {
        question: 'Which of the following, if true, would most STRENGTHEN the author\'s argument?',
        options: [
          'Titanium repairs last longer than stone repairs',
          'Ruskin privately admired several seamless Victorian restorations',
          'Surveys show visitors report deeper engagement in seamlessly restored interiors than in ones with visibly modern repairs',
          'Most modern restorers are trained as historians rather than craftsmen',
        ],
        correctAnswer: 2,
        explanation: 'The author claims seamless repair delivers "the experience the building exists to give"; survey evidence of deeper visitor engagement in seamlessly restored interiors directly supports that. Relative durability of titanium is off-topic; Ruskin\'s private admiration is biographical trivia; the training of modern restorers could cut either way.',
        skill: 'strengthen-weaken',
      },
      {
        question: 'The author\'s attitude toward the orthodoxy\'s treatment of genuinely uncertain reconstructions is best described as:',
        options: [
          'unqualified rejection',
          'agreement within a limited boundary',
          'ironic mockery',
          'reluctant indifference',
        ],
        correctAnswer: 1,
        explanation: '"I concede one strong case... Where we do not know what stood, the blank volume tells the truth" — a bounded concession ("a boundary, not a rule"). Not rejection, mockery, or indifference.',
        skill: 'tone',
      },
      {
        question: 'A museum conservator repairs a torn Renaissance tapestry by reweaving the missing section from surviving full-scale drawings of the original design, matching the old dyes so closely that the repair is invisible except under ultraviolet light. Based on the passage, the author would most likely judge this repair:',
        options: [
          'illegitimate, because visitors cannot detect the intervention',
          'legitimate only if a visible border marks the rewoven area',
          'illegitimate, because textiles differ fundamentally from buildings',
          'legitimate, because the missing section was documented rather than invented',
        ],
        correctAnswer: 3,
        explanation: 'The author\'s boundary: invention passed off as knowledge is the corruption; replacing "the documented with the documented" is the normal, legitimate case, so the answer resting on documentation is right. Calling the repair illegitimate because visitors cannot detect it, or legitimate only with a visible border, applies the doctrine the author rejects; the textiles-differ-from-buildings answer contradicts the passage\'s willingness to reason across art forms (music, texts, buildings).',
        skill: 'application',
      },
    ],
  },
]
