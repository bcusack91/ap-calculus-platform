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
 * All passages and keys are AI-authored and contestable, so `needsReview` is set
 * everywhere; the UI renders a "draft — pending review" marker.
 */

export const CARS_HUMANITIES_PASSAGES: MCATPassage[] = [
  {
    id: 'cars-hum-01',
    section: 'cars',
    discipline: 'philosophy',
    title: 'The Architecture of Forgetting',
    needsReview: true,
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
          'Selective forgetting is a constitutive condition of useful thought rather than a mere failure of memory.',
          'Cultures that forget their crimes inevitably repeat them.',
          'Memory and forgetting are governed by entirely separate mental faculties.',
        ],
        correctAnswer: 1,
        explanation:
          'The author repeatedly frames forgetting as "the silent collaborator" of memory and argues "use depends not on retention but on a quiet and ceaseless work of subtraction," making (B) the thesis. (A) inverts the author\'s view—he rejects the ideal of total retention as a "fantasy." (C) is a single supporting point in the fifth paragraph, true within the passage but far narrower than the thesis (a classic scope trap). (D) contradicts the passage, which insists the "same faculty" produces both memory and forgetting.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author characterizes the person who "never forgets a slight" primarily in order to',
        options: [
          'concede that some forms of grievance are a legitimate kind of integrity',
          'illustrate that the inability to release the past is a failure of proportion rather than a virtue',
          'argue that forgiveness is psychologically impossible for most people',
          'demonstrate that moral memory is more reliable than ordinary memory',
        ],
        correctAnswer: 1,
        explanation:
          'The fourth paragraph introduces the grudge-holder to show that tenacious grievance "is not fidelity; it is a failure of proportion." (B) names that function. (A) reverses it—the author raises the "integrity" reading only to reject it. (C) overstates: the author says forgiveness requires release, not that it is impossible. (D) is unsupported; the paragraph contrasts the grudge-holder unfavorably, not memory types by reliability.',
        skill: 'function-purpose',
        needsReview: true,
      },
      {
        question: 'Based on the passage, the author would be most likely to agree that',
        options: [
          'a person who recalls every detail of his past possesses an enviable advantage in judgment',
          'the capacity to deliberate presupposes that most information has already been set aside',
          'recognizing a friend is essentially the retrieval of a complete stored record',
          'moral progress requires preserving every grievance until it is formally redressed',
        ],
        correctAnswer: 1,
        explanation:
          'The author writes that a total-recall mind "would be paralyzed by relevance" and that "to deliberate is already to have forgotten almost everything," supporting (B). (A) contradicts the passage\'s portrait of total recall as paralyzing. (C) directly opposes the claim that recognition "is not the summoning of a record but the privileging of one trace." (D) is the grudge-holder\'s error the author criticizes.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question: 'The contrast between "the gardener\'s pruning and the flood" functions in the passage to',
        options: [
          'distinguish active, discriminating forgetting from passive, indiscriminate erasure',
          'suggest that all loss of the past is ultimately destructive',
          'argue that cultural memory is more important than individual memory',
          'prove that forgetting can never be morally justified',
        ],
        correctAnswer: 0,
        explanation:
          'The image appears where the author separates "forgetting as an active discrimination" (pruning, which "sculpts") from "forgetting as a passive erasure" (the flood, which "destroys"). (A) captures this. (B) is the very confusion the author says the shared word "forgetting" has produced—he opposes it. (C) imports a comparison the passage does not make at this point. (D) contradicts the author\'s endorsement of active forgetting.',
        skill: 'function-purpose',
        needsReview: true,
      },
      {
        question:
          'Suppose researchers found that people with unusually comprehensive autobiographical memory tend to make decisions as quickly and effectively as everyone else. This finding would most directly weaken the author\'s claim that',
        options: [
          'forgetting performs an editorial labor essential to recognition',
          'a mind unable to let go would be "paralyzed by relevance" and unable to deliberate',
          'forgiveness requires that an injury cease to organize one\'s perception',
          'a culture that forgets its crimes cannot recognize their repetition',
        ],
        correctAnswer: 1,
        explanation:
          'The author predicts that total retention causes deliberative paralysis; effective, fast decision-making by people with comprehensive memory directly undercuts that prediction, so (B) is weakened most. (A) concerns recognition of faces, not decision speed, so the finding does not bear on it directly. (C) and (D) are moral/cultural claims untouched by a finding about decision efficiency.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'As used in the final paragraph, the "discipline of the editor" most nearly refers to',
        options: [
          'a rigorous effort to preserve as much of the past as possible',
          'the practice of judging each retained memory by what purpose it serves',
          'an emotional detachment that prevents one from valuing the past at all',
          'the technical skill of organizing an archive for completeness',
        ],
        correctAnswer: 1,
        explanation:
          'The editor is defined in context as one with "a willingness to ask, of each retained thing, what it is for"—a selective, purpose-driven judgment, so (B) fits. (A) and (D) describe the "hoarder"/archive ideal the author explicitly contrasts the editor against. (C) overshoots into "romanticizing oblivion," which the author disavows ("None of this is to romanticize oblivion").',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-hum-02',
    section: 'cars',
    discipline: 'ethics / political philosophy',
    title: 'The Limits of Consent',
    needsReview: true,
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
          'Consent is a necessary but insufficient condition for legitimate dealings between persons.',
          'Consent works flawlessly in ordinary cases and fails only in rare, exotic ones.',
          'Employers bear primary responsibility for the poverty that drives workers to accept bad terms.',
        ],
        correctAnswer: 1,
        explanation:
          'The author states the thesis plainly: consent is "a necessary condition of legitimate dealing, not a sufficient one." (B) matches. (A) is the paternalism the author explicitly rejects ("None of this licenses paternalism"). (C) is the objection the author rebuts in the fourth paragraph, calling the hard cases "the ordinary cases seen clearly." (D) is a position the author neither endorses ("the employer did not create the laborer\'s poverty... Perhaps") nor treats as the main point.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author\'s attitude toward the principle of consent is best described as',
        options: [
          'dismissive, regarding it as an outdated relic of liberalism',
          'reverent, treating it as a complete account of moral legitimacy',
          'qualified, valuing it highly while insisting on its limits',
          'indifferent, viewing the debate as merely academic',
        ],
        correctAnswer: 2,
        explanation:
          'The author writes "I have no wish to dislodge it. I wish only to mark where it ends," and calls consent "indispensable"—esteem paired with insistence on limits, i.e., (C). (A) contradicts the explicit refusal to dislodge it. (B) is the "temptation" the author warns against ("to make it enough"). (D) is wrong because the author treats the stakes as practically urgent, not idle.',
        skill: 'tone-attitude',
        needsReview: true,
      },
      {
        question: 'The example of the laborer who accepts dangerous work primarily serves to',
        options: [
          'prove that all employment contracts are inherently coercive',
          'show that consent alone cannot distinguish a free bargain from a coerced one',
          'establish that poverty is always the fault of those who profit from it',
          'argue that dangerous work should be prohibited by law',
        ],
        correctAnswer: 1,
        explanation:
          'The laborer illustrates that consent "cannot, by itself, distinguish a free bargain from a coerced one, because it takes the background conditions as given." (B) states this function. (A) overgeneralizes—the author limits the claim to cases where "no" means "ruin," not all contracts. (C) is something the author actually hedges on ("Perhaps"). (D) imports a policy prescription the passage never makes; indeed it disavows paternalism.',
        skill: 'function-purpose',
        needsReview: true,
      },
      {
        question:
          'Based on the passage, the author would most likely agree that the statement "but you agreed" is',
        options: [
          'always sufficient to end a moral dispute',
          'relevant but incomplete as a moral justification',
          'irrelevant once any inequality exists between the parties',
          'a sign that the agreement was necessarily coerced',
        ],
        correctAnswer: 1,
        explanation:
          'The author directly addresses this: "they have said something relevant and something incomplete." (B) is nearly verbatim. (A) is the very "terminus" view the author rejects. (C) overstates—the author keeps consent "relevant," not irrelevant, even amid unequal conditions. (D) is too strong; the author says consent leaves the coercion question open, not that inequality entails coercion.',
        skill: 'inference',
        needsReview: true,
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
          'The author\'s "self that consents" argument turns on arrangements that remake the agent\'s wants, so that "the earlier self" may lack authority over the later one. (B) is exactly such a case and strengthens it. (A) actually undercuts the claim by preserving stable preferences. (C) and (D) are clean, well-conditioned consents that say nothing about preference transformation.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'In the final paragraph, describing consent as "a door for a destination" most nearly means that consent',
        options: [
          'is an obstacle that blocks genuine moral inquiry',
          'marks the start of moral responsibilities rather than their completion',
          'is a private matter that excludes others from judgment',
          'should be abandoned in favor of collective decision-making',
        ],
        correctAnswer: 1,
        explanation:
          'The metaphor is glossed in the same passage: consent is "the beginning of our responsibilities to one another, not their discharge"—a threshold, not an endpoint, so (B). (A) misreads "door" as a barrier; the author means an opening. (C) contradicts the whole essay, which insists others may scrutinize the conditions of agreement. (D) is the paternalist conclusion the author explicitly refuses.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-hum-03',
    section: 'cars',
    discipline: 'art / aesthetics',
    title: 'The Unfinished as a Form',
    needsReview: true,
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
          'derives entirely from the authentic revelation of the artist\'s true intention',
          'is largely a product of the viewer\'s own imaginative participation, often mistaken for a property of the object',
          'proves that finished works are inferior because they conceal the creative process',
          'demonstrates that no meaningful distinction exists between designed and accidental fragments',
        ],
        correctAnswer: 1,
        explanation:
          'The author argues the unfinished work "enlists the viewer as collaborator" and that "we are admiring... our own imaginative labor, and mistaking it for a property of the object." (B) captures the thesis. (A) is the "standard account" the author rejects as getting things "backward." (C) overstates—the author never ranks finished works as inferior; he says they too require participation. (D) reverses the author, who insists the designed and accidental fragment must NOT be collapsed.',
        skill: 'main-idea',
        needsReview: true,
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
          'The author calls the reverence "both understandable and confused" and sets out "to separate the part of it that is true from the larger part that... flatters"—sympathetic but critical, i.e., (C). (A) is too harsh; he concedes "a real value." (B) ignores the sustained critique. (D) is wrong because the essay is plainly evaluative throughout.',
        skill: 'tone-attitude',
        needsReview: true,
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
          'The author says the concession "sharpens rather than refutes my point": the fragment "merely makes visible a transaction that occurs... before every work of art." (B) names this rhetorical move. (A) is wrong—he explicitly does not abandon the claim. (C) overstates; he distinguishes a difference "of degree," not "no difference." (D) is unsupported; nothing urges ignoring intention wholesale.',
        skill: 'function-purpose',
        needsReview: true,
      },
      {
        question:
          'A curator displays a tapestry that scholars now agree the weaver deliberately left open-ended as a finished artistic statement. Based on the passage, the author would most likely say that calling this work "unfinished"',
        options: [
          'is accurate because all open works are by definition incomplete',
          'misleads, because such a work is "finished as a fragment" and its openness is its form',
          'reveals the weaver\'s true unguarded intention more reliably than a closed work would',
          'shows that designed and accidental fragments belong in a single category',
        ],
        correctAnswer: 1,
        explanation:
          'The fifth paragraph addresses exactly this: deliberately open works "are finished as fragments; their openness is their form," and the word "unfinished" "misleads." (B) applies that directly. (A) repeats the careless usage the author criticizes. (C) contradicts his claim that the work is "silent" about the maker\'s mind. (D) is the "mirror" error he warns against, not endorses.',
        skill: 'application',
        needsReview: true,
      },
      {
        question:
          'Which finding would most weaken the author\'s claim that the unfinished work is "silent" about its maker\'s intentions?',
        options: [
          'Surveys show that most viewers enjoy completing fragments in their own imagination.',
          'Detailed studio notebooks reveal that an artist halted a work at a precise point to achieve a calculated expressive effect.',
          'Critics disagree about whether a given fragment is moving.',
          'Finished paintings are also completed in part by the viewer\'s mind.',
        ],
        correctAnswer: 1,
        explanation:
          'The author claims the fragment cannot tell us the artist\'s intention—"we know only that the work stopped." Notebooks documenting a deliberate, calculated stopping point would supply exactly the intentional record he says is unavailable, weakening the claim, so (B). (A) and (D) actually support the author\'s viewer-centered thesis. (C) concerns disagreement about feeling, not about whether the work reveals intention.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'As used in the final paragraph, "the mere romance of arrested effort" refers to',
        options: [
          'a reliable insight into the artist\'s creative vision',
          'a sentimental pleasure in the idea of interrupted labor that reveals nothing about the artwork itself',
          'the viewer\'s legitimate act of imaginatively completing the work',
          'the technical skill required to leave a work deliberately open',
        ],
        correctAnswer: 1,
        explanation:
          'The author lists three possible objects of our response and says of the third—the "romance"—that it "however pleasant, tells us nothing about art and a good deal about ourselves." (B) matches. (A) describes the first option ("artist\'s vision"), which the author says "may be absent." (C) describes the second, "completing imagination," which he treats as the reliably present one—distinct from the romance. (D) is unrelated to the phrase\'s meaning here.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-hum-04',
    section: 'cars',
    discipline: 'literary criticism',
    title: 'Against the Tyranny of the Likeable Narrator',
    needsReview: true,
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
          'The essay attacks "the tyranny of the likeable narrator," arguing that what sustains reading is "interest, not affection," and that "comprehensibility is not likeability." (B) captures both the target and the key distinction. (A) overstates—the author admits "unpleasantness alone guarantees nothing." (C) is wrong; the author allows for interest and understanding, just not required affection. (D) inverts the author, who notes the demand has spread to critics too, not that critics are superior.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author\'s attitude toward the demand for likeable characters is best characterized as',
        options: [
          'mildly amused but ultimately accepting',
          'firmly opposed, regarding it as a confusion that impoverishes fiction',
          'ambivalent, finding equal merit on both sides',
          'cautiously supportive with minor reservations',
        ],
        correctAnswer: 1,
        explanation:
          'The author calls the demand "a category error of the first order" and ends by saying it asks fiction "to stop doing the one thing only it can do"—firm opposition, so (B). (A) understates the vehemence. (C) is wrong; though he concedes points, he never treats the sides as equally meritorious. (D) reverses his stance entirely.',
        skill: 'tone-attitude',
        needsReview: true,
      },
      {
        question:
          'The author distinguishes "interest" from "sympathy" chiefly in order to',
        options: [
          'concede that sympathy is in fact necessary to sustain a reader\'s attention',
          'explain what keeps a reader engaged with a character she does not like',
          'argue that curiosity is a moral failing in readers',
          'show that all riveting characters are ultimately virtuous',
        ],
        correctAnswer: 1,
        explanation:
          'The author grants that something must sustain reading but says "What sustains attention is not sympathy but interest," held by "the wish to understand a mind we find abhorrent." (B) names this purpose. (A) is the opposite of his conclusion. (C) misreads—curiosity is praised, not condemned. (D) contradicts the claim that we may feel "no warmth at all."',
        skill: 'function-purpose',
        needsReview: true,
      },
      {
        question:
          'Based on the passage, the author would most likely agree that a novel narrated by a cruel but fully comprehensible figure',
        options: [
          'fails as art because the reader cannot like the narrator',
          'can stretch the reader\'s moral imagination precisely by rendering an alien mind intelligible',
          'should excuse the narrator\'s cruelty to make him sympathetic',
          'is valuable only if the narrator eventually reforms',
        ],
        correctAnswer: 1,
        explanation:
          'The fourth paragraph praises "the unlikeable character—rendered from within, made comprehensible without being excused" for stretching "the moral imagination," teaching "that even cruelty has its reasons." (B) follows directly. (A) applies the likeability standard the author rejects. (C) is contradicted by "without being excused." (D) imports a redemption requirement the passage never endorses.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question:
          'When the likeability critic "retreats" to the claim that readers need a "foothold of understanding," the author responds that this',
        options: [
          'fully vindicates the original demand for likeable characters',
          'is a different and acceptable claim that effectively concedes his point',
          'proves that comprehensibility and likeability are the same thing',
          'shows the critic was right all along about sympathy',
        ],
        correctAnswer: 1,
        explanation:
          'The author says "with this I have no quarrel; it is simply a different claim," and that the retreat "abandons the original demand entirely and concedes my point under another name." (B) matches. (A) and (D) contradict the passage. (C) reverses the author\'s key distinction—"Comprehensibility is not likeability."',
        skill: 'inference',
        needsReview: true,
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
          'The author opposes the "mirror flattering enough to gaze into" to "windows onto rooms we would not enter," whose "value lies exactly in the discomfort of the view." (B) captures this. (A) describes the mirror, which the author criticizes. (C) overliteralizes the metaphor into a rule about settings. (D) inverts the author\'s embrace of discomfort.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-hum-05',
    section: 'cars',
    discipline: 'history / historiography',
    title: 'The Seduction of the Turning Point',
    needsReview: true,
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
          'The concept of the singular turning point distorts history by imposing the shape of hindsight onto a contingent past.',
          'Historians should write flat chronicles in which no event matters more than another.',
          'The great-man theory is the only valid framework for understanding causation.',
        ],
        correctAnswer: 1,
        explanation:
          'The author argues the turning point "is an artifact of hindsight masquerading as a feature of the past" and distorts contingency, making (B) the thesis. (A) overstates—he says "not because turning points never occur." (C) is the "flat history" he explicitly declines to counsel. (D) reverses him: he criticizes the great-man theory as the turning point\'s "sibling."',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author\'s attitude toward narrative shapeliness in history is best described as',
        options: [
          'uncritically appreciative of its teaching value',
          'wary, regarding it as a partly self-imposed distortion to be held loosely',
          'wholly hostile, demanding its complete elimination',
          'indifferent to whether history has narrative form',
        ],
        correctAnswer: 1,
        explanation:
          'The author admits narrative pleasures are "undeniable" yet says "shapeliness... is at least partly our contribution" and urges holding narratives "more loosely"—wariness, not abolition, so (B). (A) ignores his sustained distrust. (C) is too strong; he says abolishing narrative "is impossible" and does not demand it. (D) contradicts his obvious engagement.',
        skill: 'tone-attitude',
        needsReview: true,
      },
      {
        question:
          'The author discusses how "contemporaries of a supposedly decisive battle rarely experienced it as decisive" primarily to',
        options: [
          'prove that no battle has ever changed the course of events',
          'show that decisiveness is conferred retrospectively, robbing past actors of their genuine uncertainty',
          'argue that ordinary people are poor judges of historical importance',
          'establish that historians should rely only on contemporary testimony',
        ],
        correctAnswer: 1,
        explanation:
          'The point of the contemporaries example is that "Decisiveness is conferred later" and projecting it back "rob[s] them of the uncertainty that was the actual texture of their lives." (B) matches. (A) overstates beyond the author\'s qualified position. (C) misreads—the contemporaries\' uncertainty is presented as accurate to their reality, not as poor judgment. (D) introduces a methodological rule the passage does not assert.',
        skill: 'function-purpose',
        needsReview: true,
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
          'The "roads not taken" image supports the claim that "we mistake the road that happened to be traveled for the only road there was"—a hindsight bias toward the surviving outcome, so (B). (A) and (D) directly oppose the author, who emphasizes contingency and openness. (C) literalizes "monument" into an absurd prescription the passage never makes.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question:
          'Which discovery would most strengthen the author\'s claim that turning points are "artifacts of hindsight"?',
        options: [
          'Evidence that participants in a famous "decisive" treaty regarded it at the time as routine and reversible',
          'Evidence that a famous battle was immediately recognized by all sides as permanently settling the conflict',
          'Evidence that historians broadly agree on which events were most important',
          'Evidence that narrative accounts make history easier for students to remember',
        ],
        correctAnswer: 0,
        explanation:
          'The author claims decisiveness is assigned in retrospect, not felt at the time. Contemporaries treating a "decisive" treaty as routine and reversible directly confirms that the decisiveness was a later imposition, strengthening the thesis, so (A). (B) would weaken it by showing the importance was recognized contemporaneously. (C) speaks to historians\' agreement, not to hindsight bias. (D) supports narrative\'s pedagogical value, which the author already grants and which does not bear on the hindsight claim.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question:
          'In the passage, the assertion that "the great-man theory and the turning-point theory are siblings" most nearly means that both',
        options: [
          'were developed by the same historians',
          'locate causation in the most visible figures or moments rather than in diffuse, less conspicuous forces',
          'correctly identify where historical change truly originates',
          'reject the role of individual leaders in history',
        ],
        correctAnswer: 1,
        explanation:
          'The author explains the kinship directly: both "locate causation where it is most visible rather than where it is most real." (B) restates that. (A) literalizes "siblings" into shared authorship, which the passage does not claim. (C) inverts the author\'s critique—he says they misplace causation. (D) is backward; the great-man theory elevates individual leaders rather than rejecting them.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-hum-06',
    section: 'cars',
    discipline: 'music / cultural criticism',
    title: 'On the Death of the Difficult',
    needsReview: true,
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
          'The author warns that "one axis of musical value—the rewarding of patience—is being declared illegitimate," while pleading "for plurality." (B) is the thesis. (A) overstates—the author calls "the instantly delightful... a real good." (C) misattributes pretension to accessibility, but the author locates snobbery in difficulty and grants the populist critique is "healthy." (D) is a caricature the author explicitly disowns ("like the lament of a mandarin").',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'Which best describes the author\'s overall attitude?',
        options: [
          'nostalgic and resigned to inevitable cultural decline',
          'concerned yet even-handed, defending plurality rather than the superiority of difficulty',
          'celebratory of contemporary accessibility',
          'contemptuous of ordinary listeners and their tastes',
        ],
        correctAnswer: 1,
        explanation:
          'The author states he writes "not to mourn a lost golden age" and pleads "for plurality... capacious enough to honor both," while voicing genuine worry—concerned but even-handed, so (B). (A) is rejected by his refusal to mourn and his anti-decline framing. (C) ignores his critique of the accessibility ideal. (D) is the very mandarin posture he distances himself from.',
        skill: 'tone-attitude',
        needsReview: true,
      },
      {
        question:
          'The author concedes that "difficulty has too often been a cover for pretension" primarily in order to',
        options: [
          'abandon his defense of demanding music',
          'grant a valid point so as to isolate the precise overreach he wishes to criticize',
          'prove that all difficult music is pretentious',
          'argue that accessibility has no merits whatsoever',
        ],
        correctAnswer: 1,
        explanation:
          'The concession sets up the key move: from "difficulty is not sufficient for value" critics have wrongly "slid to the false conclusion that difficulty is incompatible with it." Granting the valid point isolates that overreach, so (B). (A) is wrong—he sustains the defense. (C) overgeneralizes the concession. (D) contradicts his acknowledgment of accessibility\'s "genuine" merits.',
        skill: 'function-purpose',
        needsReview: true,
      },
      {
        question:
          'Based on the passage, the author would most likely agree that the "freedom to seek difficulty" is',
        options: [
          'a complete solution that fully protects challenging music',
          'hollow when the culture has failed to cultivate the capacity needed to enjoy such music',
          'irrelevant because difficult music has no real value',
          'a guarantee that taste will naturally diversify on its own',
        ],
        correctAnswer: 1,
        explanation:
          'The author argues "The freedom to seek difficulty is hollow if the faculty required to enjoy it has never been developed," since taste is "cultivated or left to atrophy" by environment. (B) follows. (A) is the accessibility partisan\'s position the author rebuts. (C) contradicts his defense of difficulty\'s value. (D) opposes his claim that an immediate-rewarding culture "narrows" what we can want.',
        skill: 'inference',
        needsReview: true,
      },
      {
        question:
          'Suppose a study showed that listeners raised on instantly gratifying music can, with brief exposure, immediately come to love highly complex works without any repeated listening. This finding would most directly weaken the author\'s claim that',
        options: [
          'difficulty has sometimes served as a cover for pretension',
          'certain musical satisfactions are temporal and require a listener to have a history with a piece',
          'the instantly delightful is a real good',
          'a culture should be capacious enough to honor varied kinds of music',
        ],
        correctAnswer: 1,
        explanation:
          'The author\'s core argument is that some pleasures "are unavailable on a first hearing by their very nature" and "require the listener to have a history with the piece." A demonstration that complex works can be loved immediately, without repeated listening, undercuts exactly that claim, so (B). (A) is a concession unaffected by the finding. (C) is something the author affirms, not a claim the finding threatens. (D) is a normative plea, not an empirical claim about how appreciation works.',
        skill: 'strengthen-weaken',
        needsReview: true,
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
          'The line elaborates the author\'s worry that "we are losing the very ability to notice the loss"—the diminishment is invisible to the diminished. (B) restates this. (A) is the opposite of the author\'s point about unawareness. (C) endorses the sole-satisfaction criterion the author is arguing against. (D) misreads the line, which is about the listener\'s self-perception, not difficult music\'s effects.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
    ],
  },
]
