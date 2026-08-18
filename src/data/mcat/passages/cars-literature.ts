import type { MCATPassage } from '../types'

/**
 * MCAT CARS — Literature & Literary Theory pool.
 *
 * Six original, argument-driven passages (500-600 words each) written in a
 * single critic’s voice: interpretation theory, poetics and form, narrative
 * theory, the novel and realism, genre fiction, and authorship/the canon.
 *
 * Each passage advances a thesis, states the strongest objection to it, and
 * turns — by concession, rebuttal, or reframing distinction. No outside
 * knowledge is required: every key is derivable from the text alone.
 *
 * AI-authored; needsReview is true pending SME review.
 */
export const CARS_LITERATURE_PASSAGES: MCATPassage[] = [
  {
    id: 'cars-lit-01',
    section: 'cars',
    discipline: 'literary criticism and interpretation theory',
    title: 'The Author’s Ghost',
    needsReview: true,
    passageText:
      'For half a century students of literature have been taught a doctrine so successful that it now passes for common sense: that what a writer meant to do has no bearing on what the work means. The doctrine arrived as a liberation. It freed the poem from the poet’s biography, the novel from the novelist’s press interviews, and the reader from the servile business of guessing at a stranger’s private wishes. Having handed over the manuscript, the author becomes one reader among others, no better placed than the rest of us to say what he has made.\n\nThe case for this is stronger than its opponents usually admit, and it deserves to be stated at full strength. A letter in which a novelist announces the theme of her novel is evidence about the novelist; whether it is evidence about the novel is precisely the question at issue. Writers are frequently the worst readers of their own work, defending the intentions they can remember against the effects they achieved without noticing. A poem may do things its author never planned; the felicities of a good ear are not all the products of a design. Anyone who has watched a novelist explain away his finest ambiguity knows what it costs to grant him the last word.\n\nBut from these premises the doctrine’s champions drew a conclusion far larger than the premises will bear. From "the author’s report of his intention does not settle the question" they inferred "intention has nothing to do with the question." The first claim says the author’s testimony is not privileged. The second says there is nothing for the testimony to be about. Only the first has been argued for.\n\nConsider what actually happens when we read. Meeting an odd word, we do not merely record it; we ask why it is there. Is it irony, dialect, archaism, a printer’s slip? Is the repetition insistence or carelessness? Every one of these is a question about purpose, and a reader who refuses to ask them is not reading more freely — he has stopped reading and begun cataloguing. Meaning is not stored in a text the way water is stored in a jar. It is what we reconstruct when we treat marks on a page as the traces of a mind at work. Withdraw that assumption and the text does not become richer; it becomes weather.\n\nThe intention that matters, then, was never the private wish. It is the purpose a design makes available — what the work can be shown to be doing, whether or not anyone remembers meaning to do it. The distinction does real work. It explains why a misprint is not a meaning, though a reader could certainly make something of it, and why we correct the one and interpret the other. Both judgments are appeals to what the words were for.\n\nThe quarrel, in the end, was never between critics who consult intention and critics who do not. It was between critics who acknowledge the appeal and critics who make it under another name. Read the most rigorous anti-intentionalist criticism and you will find it thick with purpose: the text’s strategy, the novel’s logic, what the poem is doing to us in its third stanza. These are attributions of design, and they are indispensable, and they are the author’s ghost — evicted at the front door and readmitted in the vocabulary of the very critics who showed him out.',
    questions: [
      {
        question: 'Which of the following best captures the central thesis of the passage?',
        options: [
          'An author’s stated account of his own work should be treated as the authoritative guide to its meaning.',
          'Because writers are often poor readers of themselves, questions of intention should be excluded from criticism.',
          'Anti-intentionalists were right that the author’s testimony carries no special authority but wrong to conclude that intention is irrelevant, since interpretation is itself the attribution of purpose.',
          'The critical vocabulary of strategy and logic should be abandoned as an unscientific residue of biographical criticism.',
        ],
        correctAnswer: 2,
        explanation:
          'The author grants that the author’s report "does not settle the question" while denying the larger inference that "intention has nothing to do with the question," and grounds the denial in the claim that reading means treating marks "as the traces of a mind at work." The option restoring the author as final authority reverses the position the passage explicitly concedes away in its second paragraph. The option that excludes intention from criticism states the doctrine the passage is attacking. The option calling for abandonment of terms like "the text’s strategy" inverts the ending, where those terms are called "indispensable."',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The second paragraph of the passage functions primarily to:',
        options: [
          'state the opposing case at its strongest before limiting the conclusion that can be drawn from it',
          'concede that an author’s testimony does in fact settle most disputes about a work’s meaning',
          'establish that most novelists are careless and unreliable writers',
          'introduce biographical criticism as the method the author will go on to recommend',
        ],
        correctAnswer: 0,
        explanation:
          'The paragraph announces that the opposing case "deserves to be stated at full strength" and then gives its best evidence, after which the next paragraph limits the inference ("from these premises… a conclusion far larger than the premises will bear"). The option about testimony settling disputes reverses the paragraph, which argues the opposite. The claim that novelists are careless overstates a narrow point about self-reading into a sweeping judgment. Nothing in the paragraph recommends biographical criticism, which the opening paragraph treats as the thing the doctrine usefully displaced.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'In context, the author’s statement that a text without the assumption of purpose "becomes weather" most nearly means that the text:',
        options: [
          'takes on a meaning that shifts unpredictably from one reader to the next',
          'should be interpreted in light of the historical climate that produced it',
          'is a natural rather than a human product and is therefore beautiful',
          'becomes a pattern to which the question "why is this here?" no longer applies',
        ],
        correctAnswer: 3,
        explanation:
          'The sentence caps a paragraph built on the reader’s question "why is it there," and the contrast drawn is between a mind at work and something that merely occurs. Weather is the standing example of a pattern nobody asks the purpose of. The shifting-meaning option describes reader relativism, a different claim the paragraph does not make. The historical-climate reading takes the figure literally as a metaphor for period context. The beauty-of-nature reading also literalizes the image and, worse, treats as praise a consequence the author presents as a loss.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
      {
        question: 'Which of the following findings, if true, would most WEAKEN the author’s claim that reading necessarily involves attributing purpose?',
        options: [
          'A novelist’s published account of her aims is shown to contradict the finished novel.',
          'Skilled readers told that a text had been produced by a random process nonetheless generated detailed and mutually consistent interpretations of it.',
          'Editors routinely correct printers’ errors without consulting the surviving author.',
          'Critics who reject intentionalism frequently describe what a text is "doing" to its reader.',
        ],
        correctAnswer: 1,
        explanation:
          'The author’s claim is that interpretation just is the reconstruction of design, so readers who interpret richly and convergently while believing no mind was behind the marks would show that interpretation can proceed without any attribution of purpose. The contradiction between a novelist’s account and her novel is something the author already grants and even relies on. Editorial correction without consulting the author is compatible with the passage, which treats correcting a misprint as itself an appeal to what the words were for. The last finding restates the passage’s own closing evidence and therefore strengthens rather than weakens.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'An editor discovers that a celebrated line, long admired for its strangeness, entered the text as a compositor’s error. The author of the passage would most likely conclude that:',
        options: [
          'the line should be corrected, because deciding between error and effect is itself an appeal to what the words were for',
          'the line should be preserved, because the reader’s experience of strangeness is the only fact that bears on meaning',
          'the question cannot be settled, because an author’s private wishes are finally unknowable',
          'the discovery is beside the point, because a work’s meaning is fixed by its earliest printed form',
        ],
        correctAnswer: 0,
        explanation:
          'The passage says directly that the intention-as-design distinction "explains why a misprint is not a meaning, though a reader could certainly make something of it, and why we correct the one and interpret the other." Preserving the line on the strength of reader experience is the position that treats effects as self-certifying, which the passage rejects. The unknowability answer relies on the private-wish conception of intention that the author has explicitly set aside. Fixing meaning by earliest printing invents an editorial rule the passage never entertains.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The passage suggests that the author regards a critic’s phrase such as "the novel’s logic" as:',
        options: [
          'a metaphor so loose that careful critics ought to avoid it',
          'proof that criticism can describe a text without any reference to purpose',
          'a claim about the novelist’s biography disguised as a claim about the book',
          'an indispensable attribution of design, and therefore a covert appeal to intention',
        ],
        correctAnswer: 3,
        explanation:
          'The closing paragraph lists exactly such phrases, calls them "attributions of design," and says in the same breath that "they are indispensable." Calling for their avoidance contradicts that endorsement. Reading them as evidence of purpose-free description reverses the author, who cites them to show purpose creeping back in. The biography option confuses the two senses of intention the fifth paragraph separates: the author insists the intention at stake is embodied design, not the writer’s private history.',
        skill: 'inference',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-lit-02',
    section: 'cars',
    discipline: 'poetics and form',
    title: 'The Line That Breaks',
    needsReview: true,
    passageText:
      'The quarrel between formal verse and free verse has outlived its usefulness, chiefly because both sides accepted a description of form that neither should have accepted: that form is a container, and that a poem in meter is a liquid poured into a mold while a free-verse poem is water allowed to find its own shape. Once form is imagined as a container, everything follows badly. The traditionalist defends the mold on grounds of discipline; the modernist attacks it on grounds of freedom; and nobody asks what a mold could possibly have to do with the way a line of verse produces meaning.\n\nBegin instead with the smallest formal fact available: lines end. Prose ends its lines wherever the margin falls, and no reader attaches significance to the break. Verse ends its lines where the poet decides, and that decision is a semantic instrument of surprising power. A line ending on a verb suspends the sentence and holds the reader in a moment of not-yet-knowing; the next line arrives to confirm the guess or to embarrass it. Enjambment is not decoration. It is a way of making a sentence mean two things in sequence, the first of which the second withdraws. No paraphrase preserves this, because the effect is made of timing, and timing is made of the line.\n\nThe obvious objection is that meters are arbitrary. There is no cosmic necessity in the iamb; English poets came to count five feet because Italians and Frenchmen had counted differently and a habit crossed the Channel. To submit to such a convention is to submit to an accident of history — an inherited tyranny dressed as a law of nature.\n\nThe objection is entirely correct and entirely beside the point. Conventions are not defended by their necessity; they are defended by their publicity. A shared expectation is what makes a departure legible. When a poet working in a meter every reader can hear substitutes a heavy stress where a light one was owed, the substitution registers as an event: a stumble, an emphasis, a hand laid on the reader’s arm. The meter did not constrain the poem. It supplied the background against which a small movement becomes visible at all. Constraint, on this account, is the condition of expression rather than its enemy.\n\nWhich is what makes free verse a harder art than its practitioners often pretend, and why the label misleads. The free-verse poet who breaks a line has violated no shared expectation, because none was in force. He must therefore do something more difficult: establish the expectation himself, inside the poem, so that his own departures from it can be felt. Poems that manage this — that teach the reader a rhythm across ten lines and then break it in the eleventh — are not formless. They have merely undertaken to invent, and to publish, a form within the space of a single poem.\n\nPoems that do not manage it are not free either. They are unaccountable, which is a different thing. Where nothing has been established, nothing can be violated, and the line endings become what prose line endings are: the place where the margin happened to fall. Readers sense this and cannot say why the poem feels slack. The honest description is not that such poems lack form but that they have declined to make one public, and have thereby withheld from the reader the only means by which the poem’s decisions could have been recognized as decisions at all.',
    questions: [
      {
        question: 'The central argument of the passage is best summarized as:',
        options: [
          'Free verse is an inferior art that should give way to a revival of traditional meter.',
          'Form is not a container but a public system of expectation against which departures become meaningful, which is why free verse must generate its own.',
          'Metrical conventions are justified by their descent from a long and distinguished European tradition.',
          'Because meters are historically arbitrary, no formal choice in poetry can be evaluated as better or worse.',
        ],
        correctAnswer: 1,
        explanation:
          'The passage rejects the container picture, replaces it with the claim that "a shared expectation is what makes a departure legible," and applies that standard to free verse, which must "invent, and to publish, a form within the space of a single poem." The revival-of-meter option contradicts the author’s explicit respect for free verse that establishes its own expectations. The appeal to European descent is the historical accident the author concedes is arbitrary. The final option adopts the objection the fourth paragraph answers.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'In context, the author’s description of unsuccessful free-verse poems as "unaccountable" most nearly means that such poems:',
        options: [
          'cannot be understood by readers who lack training in prosody',
          'make demands on the reader that no poem has a right to make',
          'are morally irresponsible in their treatment of inherited tradition',
          'offer no established expectation against which their choices could be recognized as choices',
        ],
        correctAnswer: 3,
        explanation:
          'The word is glossed by the sentences around it: "Where nothing has been established, nothing can be violated," and the poem has "withheld… the only means by which the poem’s decisions could have been recognized as decisions." The prosody-training option makes the problem the reader’s expertise rather than the poem’s failure to publish a pattern. The excessive-demands option describes difficulty, not the absence of a standard. The moral reading takes "unaccountable" in its ethical sense, which the surrounding argument does not support.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
      {
        question: 'The author’s discussion of a line that ends on a verb serves primarily to:',
        options: [
          'demonstrate that a formal feature can carry meaning that paraphrase cannot preserve',
          'show that free verse handles syntax more skillfully than metrical verse does',
          'argue that verbs are the most consequential words in a poetic line',
          'trace the historical origins of the English poetic line',
        ],
        correctAnswer: 0,
        explanation:
          'The example is introduced to establish that the line ending is "a semantic instrument," and the paragraph closes by noting that "no paraphrase preserves this, because the effect is made of timing." The comparison of free and metrical verse on syntax is not made here and would prejudge the later argument. The claim about verbs generalizes from an illustration into a rule the passage never states. Historical origins appear in the next paragraph, as part of the objection, not here.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most STRENGTHEN the author’s account of why a metrical substitution registers as "an event"?',
        options: [
          'Poets working in meter revise their lines more frequently than free-verse poets do.',
          'Surveyed readers report enjoying metrical poetry more than they enjoy free verse.',
          'Readers unfamiliar with a poem’s meter fail to notice the very substitutions that experienced readers describe as its most striking moments.',
          'Metrical conventions in English can be traced to Italian and French models.',
        ],
        correctAnswer: 2,
        explanation:
          'The author’s mechanism is publicity: a departure is felt only by a reader who carries the expectation. Readers lacking the expectation missing exactly the moments that experienced readers find striking is what that mechanism predicts. Revision frequency speaks to compositional labor, not to how a substitution is perceived. Reported enjoyment is a matter of taste and leaves the perceptual claim untouched. The Italian and French descent is a point the author already concedes and calls beside the point.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A composer states a rhythmic pattern for two minutes and then disrupts it. Based on the passage, the author would most likely say that the disruption:',
        options: [
          'is arbitrary, since musical conventions carry no more necessity than poetic ones',
          'cannot be assessed, because the pattern was invented rather than inherited',
          'would have been more effective had the composer used an inherited pattern instead',
          'can be felt as a disruption precisely because the piece first made its pattern public',
        ],
        correctAnswer: 3,
        explanation:
          'The passage praises exactly this procedure in poems that "teach the reader a rhythm across ten lines and then break it in the eleventh," on the ground that a published expectation is what a departure needs. The arbitrariness option confuses the origin of a convention with its usefulness, a confusion the author calls "beside the point." The inability-to-assess option contradicts the author’s claim that a poem may invent and publish its own form. The preference for inherited patterns misstates the argument, which requires publicity, not tradition.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward free verse is best described as:',
        options: [
          'dismissive of it as an evasion of genuine craft',
          'respectful of its difficulty while critical of the claim that it dispenses with form',
          'enthusiastic about its liberation of the poet from inherited rules',
          'indifferent, since the quarrel between verse traditions has outlived its usefulness',
        ],
        correctAnswer: 1,
        explanation:
          'The author calls free verse "a harder art than its practitioners often pretend" and credits successful examples with inventing and publishing a form, while insisting that "the label misleads" and that slack poems have merely declined to make a form public. Dismissal is too strong for a passage that describes the art as harder, not lesser. Enthusiasm for liberation from rules belongs to the modernist position the opening paragraph diagnoses. The indifference option borrows the phrase about the quarrel but ignores that the author has strong views about the poems themselves.',
        skill: 'tone',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-lit-03',
    section: 'cars',
    discipline: 'narrative theory',
    title: 'What the Narrator Cannot See',
    needsReview: true,
    passageText:
      'The unreliable narrator has become the most overworked instrument in the critical toolkit, applied to any first-person speaker whose account we decline to accept whole. The label has the feel of a discovery: the reader detects a lie, congratulates himself, and moves on. But unreliability is not a property a narrator possesses, the way a character possesses a limp. It is a relation, and like every relation it requires a second term — some standard, supplied by the text itself, against which the narration can be found wanting. A narrator alone on a page cannot be unreliable. He can only be the narrator.\n\nThe crude cases obscure this. A speaker tells us he was perfectly calm while the scene he describes shows his hands shaking; a chronicler reports a conversation whose participants later remember it otherwise. Here the text supplies the correcting standard almost brutally, and the reader’s work is small. Such narrators are not deep achievements of technique. They are puzzles with the solution printed at the bottom of the page, and the pleasure they give is the modest pleasure of being right.\n\nThe interesting cases run the other way entirely. Consider a narrator whose reporting of fact is impeccable: every event occurs as he says it did, every remark is quoted correctly, nothing material is withheld — and who nevertheless understands none of it. He tells us that his employer wept and moves at once to the weather. He records a refusal without registering that a refusal has taken place. Nothing he says is false and everything he says is wrong, and out of his own scrupulous testimony the reader assembles a story the narrator will never read. Call this a failure of understanding rather than a failure of fact. It is the technique’s real subject, and the vocabulary of reliability handles it badly, because there is nothing here to fact-check.\n\nAn objection presents itself at once. If the narrator reports accurately and merely misjudges, what warrant has the reader for overruling him? Perhaps the employer’s tears really were unimportant, and the reader, hungry for significance, has invented a second story where the text offers only one. The objection deserves more respect than it usually receives, because it identifies exactly where this kind of reading goes wrong. Readers do manufacture ironies. A narrator’s plainness is not by itself evidence of blindness.\n\nBut the objection also shows what the technique actually requires. The reader is warranted only when the text has issued him the standard — through the arrangement of scenes, through what other characters do in the narrator’s presence, through the peculiar insistence with which a detail is mentioned and then dropped. Where the text has issued nothing, the reader is indeed inventing. The discipline of reading such novels is not suspicion but attention to where one’s counter-story came from.\n\nAnd that question is worth pressing further than critics usually press it, because the answer is uncomfortable. The reader’s superior standard was not earned by his acuity. It was manufactured and handed to him by the same author who manufactured the narrator, and the sensation of seeing through a fictional person is itself an effect the novel produced on schedule. The reader congratulating himself on his insight is admiring a gift. This does not make the technique fraudulent; it makes it something better than a puzzle. What such a novel stages is not the exposure of a liar but the ordinary condition of understanding another person: the discovery that a full and honest account of events is entirely compatible with having missed what happened.',
    questions: [
      {
        question: 'Which of the following best states the passage’s main claim?',
        options: [
          'Unreliability is a relation requiring a standard supplied by the text, and its most significant form is a failure of understanding rather than of fact.',
          'Narrators who contradict the events they describe represent the highest achievement of novelistic technique.',
          'Readers should approach every first-person narrator with suspicion, since all narration distorts.',
          'Because the reader’s counter-story is supplied by the author, the technique of unreliable narration is essentially fraudulent.',
        ],
        correctAnswer: 0,
        explanation:
          'The passage defines unreliability as "a relation" needing "some standard, supplied by the text itself," and locates the technique’s "real subject" in narrators whose facts are impeccable and whose understanding fails. The praise of self-contradicting narrators reverses the second paragraph, which calls them shallow puzzles. Blanket suspicion is ruled out by the statement that "the discipline of reading such novels is not suspicion." The fraud option contradicts the explicit denial in the last paragraph.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'In describing certain narrators as giving "the modest pleasure of being right," the author means that such narration:',
        options: [
          'rewards readers who bring specialized historical knowledge to the text',
          'produces the moral satisfaction of watching dishonesty exposed and punished',
          'offers only the small satisfaction of solving a puzzle the text has already solved',
          'confirms that the reader’s first impression of the narrator was accurate',
        ],
        correctAnswer: 2,
        explanation:
          'The phrase caps a paragraph calling such narrators "puzzles with the solution printed at the bottom of the page," where "the reader’s work is small." Specialized historical knowledge is nowhere at issue; the correcting standard comes from the text itself. The moral-satisfaction option imports punishment, which the passage never mentions. The first-impression option describes a different experience: the author’s point is not that the reader guessed early but that the text did the work for him.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
      {
        question: 'The paragraph beginning "An objection presents itself at once" functions primarily to:',
        options: [
          'abandon the distinction between failures of fact and failures of understanding',
          'raise a challenge the author takes seriously and then uses to specify when a reader’s counter-story is warranted',
          'concede that readers can never reliably distinguish a text’s irony from their own invention',
          'summarize a rival theory of narration held by most contemporary critics',
        ],
        correctAnswer: 1,
        explanation:
          'The objection is granted force ("deserves more respect than it usually receives"), and the next paragraph turns it into a criterion: the reader is warranted "only when the text has issued him the standard." The distinction between fact and understanding is not abandoned; it is what the objection interrogates. The never-distinguish option overstates a concession the author immediately limits by specifying the textual evidence that licenses a counter-story. No rival theory is attributed to critics here; the passage’s complaint about critics concerns overuse of a label.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s claim that the reader’s corrective standard is supplied by the text?',
        options: [
          'Some novels built around this technique are widely regarded as artistic failures.',
          'Critics disagree about which passages best reveal a given narrator’s blindness.',
          'Novelists rarely describe their own narrators as unreliable when interviewed.',
          'Readers given isolated paragraphs, stripped of surrounding scenes and of other characters’ behavior, identify the same narrators as blind, and at the same rates, as readers given the whole novel.',
        ],
        correctAnswer: 3,
        explanation:
          'The author names the sources of the standard as "the arrangement of scenes," what other characters do, and patterns of insistence and omission. If removing all of that changes nothing about what readers detect, the standard is evidently coming from somewhere other than the text’s arrangement. Artistic failure is a judgment of quality that leaves the mechanism alone. Disagreement about which passages carry the evidence is compatible with the evidence being textual. What novelists say in interviews is outside the passage’s concern entirely.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A reader argues that a memoirist who reports her family’s history accurately has nonetheless "entirely missed" what her own account reveals. The author of the passage would most likely say this claim is legitimate only if:',
        options: [
          'the memoirist’s factual record can be shown to contain errors',
          'the reader can cite the memoirist’s own statements about her purposes',
          'the memoir’s arrangement and emphases themselves supply the standard by which the omission is recognized',
          'other family members have published competing accounts of the same events',
        ],
        correctAnswer: 2,
        explanation:
          'The passage’s criterion is that the reader is warranted "only when the text has issued him the standard," through arrangement, juxtaposition, and telling insistence. Demanding factual errors would collapse the very distinction the passage draws between failures of fact and failures of understanding. Statements of purpose are external testimony that the passage never treats as the source of the standard. Competing family accounts are outside evidence, whereas the whole argument locates the corrective inside the text.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The passage implies that a reader who feels he has "seen through" a narrator has:',
        options: [
          'responded to an effect the novel was constructed to produce',
          'demonstrated an interpretive acuity that most readers do not possess',
          'confused a failure of fact with a failure of understanding',
          'been misled, since a narrator should be granted final authority over his own story',
        ],
        correctAnswer: 0,
        explanation:
          'The final paragraph says the standard "was manufactured and handed to him by the same author who manufactured the narrator," so that "the sensation of seeing through a fictional person is itself an effect the novel produced." Crediting the reader’s acuity is precisely the self-congratulation the passage deflates. The confusion-of-categories option describes a mistake the passage discusses but does not attribute to readers who see through a narrator. Granting narrators final authority reverses the passage, which defends warranted counter-stories.',
        skill: 'inference',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-lit-04',
    section: 'cars',
    discipline: 'the novel and realism',
    title: 'The Sayable Ordinary',
    needsReview: true,
    passageText:
      'The standard defense of the realist novel is that it makes us better. Reading, we are told, extends the imagination into other lives; the reader who has spent four hundred pages inside the consciousness of a provincial doctor’s wife emerges with a wider sympathy than he brought. The claim is old, it flatters readers and the people who teach them, and it has lately acquired a fringe of laboratory support that its friends cite more eagerly than they examine.\n\nI do not believe it, and I think the defense should be abandoned rather than repaired. Set the studies aside; their effects are small and their measures dubious. Consider only the plain historical record. The century of the great realist novels was not a century of conspicuous gentleness, and the reading classes were not, on the whole, the merciful ones. Cruelty and connoisseurship have kept house together too often for anyone to claim that the second reliably disturbs the first. If the novel were a machine for manufacturing sympathy, we should have noticed the output by now.\n\nBut the collapse of the sympathy argument does not leave realism undefended. It leaves it defended on other ground, and the other ground is firmer, because it concerns what a form makes possible rather than what it makes people do.\n\nBefore the realist novel, the interior life of an unremarkable person was very nearly unnarratable — not forbidden, but unnarratable in the way a chord is unplayable on an instrument that lacks the string. Epic had heroes, tragedy had kings, romance had lovers under enchantment, each form equipped to register significance only where rank or fate had already conceded it. What the realist novelists built, across perhaps eighty years, was an apparatus for the opposite case: free indirect style, which lets a single sentence hold a narrator’s syntax and a character’s judgment at once; the long scene in which nothing happens; the detail included precisely because it signifies nothing and, by signifying nothing, establishes that we are in a world rather than a fable. With these, the boredom of a curate, the vanity of a clerk, and the private arithmetic of a woman deciding whether to sell a piano became available for description at full seriousness. That is not a moral achievement. It is a technical one, and it changed what could be said.\n\nThe distinction matters because the sympathy argument, in trying to prove too much, concedes the wrong thing. It accepts that fiction must be justified by its effects on conduct, and once that is accepted the case is lost, since conduct has too many causes for any novel to claim credit. The better claim is that a form can enlarge the sayable, and that enlarging the sayable is not a means to some further good but a good of a distinct kind. A language in which the inner life of ordinary people can be stated is a different language from one in which it cannot, whatever its speakers go on to do with it.\n\nSomeone will answer that a capacity nobody uses well is worth very little, and the answer is fair. A technique for noticing the unremarkable can be turned to the manufacture of charming miniatures, and frequently has been. But the objection concedes the point it means to press: it complains about the use of a capacity whose existence it takes for granted. The novel did not make us kind. It made a whole province of ordinary experience sayable, and left us, as instruments always do, to answer for what we play on them.',
    questions: [
      {
        question: 'The central thesis of the passage is that:',
        options: [
          'realist novels have been shown to increase readers’ sympathy, which justifies their place in education',
          'because reading has no measurable effect on conduct, the realist novel has no defensible value',
          'the realist novel’s techniques are less sophisticated than those of epic, tragedy, and romance',
          'the realist novel should be defended not as a source of moral improvement but as a technical achievement that made ordinary inner life narratable',
        ],
        correctAnswer: 3,
        explanation:
          'The author rejects the sympathy defense ("I do not believe it") and replaces it: realism’s achievement is "not a moral achievement… it is a technical one, and it changed what could be said." The first option restates the defense the passage dismantles. The second takes the author’s premise and draws the opposite conclusion, since the whole middle of the passage insists realism remains defensible. The comparison with earlier forms is used to show what they could not do, not to rank realism below them.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward the laboratory support mentioned in the first paragraph is best described as:',
        options: [
          'enthusiastic endorsement',
          'dismissive, treating it as weak evidence cited uncritically',
          'cautiously neutral, pending further replication',
          'outraged at what he takes to be deliberate scientific fraud',
        ],
        correctAnswer: 1,
        explanation:
          'The studies are "cite[d] more eagerly than they examine," and the author sets them aside because "their effects are small and their measures dubious." That is dismissal, not neutrality: a neutral writer would not characterize the measures as dubious before declining to discuss them. Endorsement reverses the passage. Outrage at fraud overshoots; the author faults the enthusiasm of the citers, not the honesty of the researchers.',
        skill: 'tone',
        needsReview: true,
      },
      {
        question: 'The author’s claim that the interior life of an unremarkable person was "unnarratable" before the realist novel most nearly means that:',
        options: [
          'writers were prohibited by custom and censorship from depicting common people',
          'readers of earlier literature were incapable of sympathy with strangers',
          'the available literary forms lacked the techniques for treating such a life as significant',
          'ordinary people had not yet developed complex inner lives to be described',
        ],
        correctAnswer: 2,
        explanation:
          'The author glosses the word immediately — "not forbidden, but unnarratable in the way a chord is unplayable on an instrument that lacks the string" — and then names the missing techniques the realists supplied. The prohibition reading is ruled out by "not forbidden." The claim about readers’ incapacity substitutes an audience defect for the formal one the analogy describes. The last option converts a claim about representation into an absurd claim about human psychology.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s case against the sympathy defense?',
        options: [
          'Across many societies and periods, the spread of realist fiction is followed by measurable declines in tolerance for public cruelty, even after controlling for wealth and literacy.',
          'Contemporary readers report being deeply moved by novels about people unlike themselves.',
          'Several celebrated realist novelists behaved cruelly toward their own families.',
          'Techniques resembling free indirect style appear in works written well before the realist novel.',
        ],
        correctAnswer: 0,
        explanation:
          'The author’s objection rests on the historical record: the reading classes were not the merciful ones, so "we should have noticed the output by now." A cross-cultural pattern surviving obvious controls is precisely the output he says is missing. Readers reporting that they were moved concerns feeling rather than conduct, which the passage treats as the thing to be shown. Cruel novelists reinforce rather than undermine the author’s point. The last option challenges a historical claim about technique, not the argument about sympathy.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A film critic praises a new documentary form on the ground that it lets audiences attend to lives that earlier forms could not represent, while admitting there is no evidence it changes anyone’s behavior. The author of the passage would most likely regard this argument as:',
        options: [
          'mistaken, since a form’s worth depends on effects that can be measured',
          'sound, since enlarging what can be represented is a good of a distinct kind',
          'premature, since claims about audience sympathy must be tested before a form can be judged',
          'irrelevant to criticism, which should confine itself to matters of style',
        ],
        correctAnswer: 1,
        explanation:
          'This is the author’s own move: "a form can enlarge the sayable, and… enlarging the sayable is not a means to some further good but a good of a distinct kind." The measurable-effects option adopts the standard the passage says loses the argument the moment it is accepted. The premature option makes sympathy testing a precondition, which inverts the author’s advice to abandon that line. Confining criticism to style ignores the passage’s interest in what a form makes representable.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The final paragraph’s concession that "a capacity nobody uses well is worth very little" serves primarily to:',
        options: [
          'retract the author’s central claim in the face of a strong objection',
          'supply criteria for distinguishing accomplished novels from inferior ones',
          'show that even the objection presupposes the existence of the capacity the author has been defending',
          'return the discussion to the question of readers’ moral improvement',
        ],
        correctAnswer: 2,
        explanation:
          'The author grants the objection is "fair" and then turns it: "the objection concedes the point it means to press: it complains about the use of a capacity whose existence it takes for granted." That is a rebuttal, not a retraction, and the paragraph ends by restating the thesis. No criteria for ranking novels are offered. The closing sentence explicitly denies that the novel makes us kind, so the paragraph does not reopen the moral-improvement question.',
        skill: 'function',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-lit-05',
    section: 'cars',
    discipline: 'genre and popular fiction as literature',
    title: 'In Praise of the Expected',
    needsReview: true,
    passageText:
      'Defenders of popular fiction have chosen, over and over, the losing argument. They point to the detective novel whose prose will bear comparison with any literary novelist’s, the science fiction whose moral seriousness embarrasses the mainstream, the thriller that is really a study of grief. Each of these claims may be true. Together they amount to a plea for admission, and a plea for admission concedes the court’s jurisdiction. The genre novel is offered as literature in disguise, valuable in proportion to its resemblance to something else. Its defenders have won a few acquittals and lost the principle.\n\nThe principle is that genre fiction operates under a different contract, and that the contract is not a handicap but the medium in which its meanings are made. The reader of a formula novel arrives already knowing the shape of what will happen: a body will be found; an order will be disturbed and restored; the lovers will be separated by a misunderstanding that a single conversation would dispel. This foreknowledge is usually described as the genre’s poverty. It is in fact the condition of its precision. Where the shape is known, the reader’s whole attention falls on the manner of arrival, and small deviations acquire a weight that in other kinds of fiction only large events can carry. When the detective, solitary through forty novels, accepts an invitation to dinner, the moment lands with a force no first-time reader could feel and no summary could convey.\n\nThe obvious rejoinder is that this makes hackwork unfalsifiable. If formula is the medium rather than the defect, on what ground do we call any genre novel bad? Are we reduced to saying that the tenth-rate and the first-rate are doing the same thing at different levels of enthusiasm?\n\nWe are not, and the reason inverts the rejoinder. Because the formula is fixed, discriminations within it become finer rather than looser. A reader who has read two hundred of these books perceives differences the outsider cannot see at all: between a solution that redescribes the evidence and one that introduces it; between a reversal the earlier chapters had quietly made available and one merely announced on the page it occurs. Judgment is not suspended in genre. It is conducted at a resolution the casual reader cannot resolve. When such a reader complains that "they are all the same," he is reporting the limits of his own experience and mistaking the report for a verdict. He is the listener who says that all fugues sound alike.\n\nHonesty requires admitting what this argument costs the genre’s boosters, and the cost is real. If genre excellence consists in the handling of an expected shape, then it is not fully assessable by the instruments literary criticism ordinarily brings — instruments trained on originality, on the sentence, on the singular voice. And the compliment most often paid to a genre writer, that her work "transcends the genre," turns out to be a form of condescension. It praises a book for abandoning the very system that made its effects legible, and it flatters the critic’s standards by treating them as the destination toward which all decent writing is traveling.\n\nWhat genre asks for is not admission to the court but the acknowledgment of a second jurisdiction, with its own procedures and its own experts, whose verdicts are unavailable to visitors. This is a smaller claim than its defenders usually make, and a far harder one to dismiss.',
    questions: [
      {
        question: 'Which of the following best expresses the passage’s central argument?',
        options: [
          'The finest genre novels deserve recognition because their prose rivals that of literary fiction.',
          'Because formula governs genre fiction, distinctions of quality within it cannot be drawn.',
          'Genre fiction should be judged under its own contract, in which a known shape makes small deviations legible, rather than admitted to literary standards.',
          'Literary criticism should abandon its concern with originality, the sentence, and the singular voice.',
        ],
        correctAnswer: 2,
        explanation:
          'The passage rejects the plea for admission and argues that foreknowledge "is in fact the condition of its precision," concluding with the call for "a second jurisdiction, with its own procedures and its own experts." The prose-comparison option is exactly the losing argument named in the first paragraph. The no-distinctions option is the rejoinder the fourth paragraph answers by claiming finer, not looser, discrimination. The last option overreaches: the author says literary instruments are ill-suited to genre, not that criticism should discard them.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s example of the solitary detective accepting a dinner invitation functions primarily to:',
        options: [
          'illustrate how an expected shape lets a small deviation carry unusual weight',
          'suggest that genre novels are best read as psychological case studies',
          'argue that long series are artistically superior to standalone novels',
          'demonstrate that plot summaries are an unreliable basis for criticism',
        ],
        correctAnswer: 0,
        explanation:
          'The example follows directly from the claim that "small deviations acquire a weight that in other kinds of fiction only large events can carry," and its force depends on forty prior novels of expectation. Reading genre as psychological case study is a version of the borrowed literary standard the passage rejects. Nothing here ranks series above standalone books; the series merely supplies the expectation. The remark about summary is a subordinate detail in the sentence, not the point the example is built to make.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'In context, the author’s remark that a plea for admission "concedes the court’s jurisdiction" most nearly means that such defenses:',
        options: [
          'improperly rely on legal analogies to settle questions of aesthetic value',
          'acknowledge that popular novels have often been unjustly censored',
          'assume that genre writers should be evaluated only by other genre writers',
          'accept in advance that literary standards are the ones by which genre must be judged',
        ],
        correctAnswer: 3,
        explanation:
          'The sentences on either side make the meaning plain: the genre novel is "offered as literature in disguise, valuable in proportion to its resemblance to something else," and the defenders "have won a few acquittals and lost the principle." The objection to legal analogies reads the metaphor as a methodological complaint rather than following its content. The censorship reading takes "court" literally. The evaluation-by-insiders option states roughly the author’s own conclusion, not what the conceding defenders assume.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most STRENGTHEN the author’s claim that genre readers judge at a finer resolution?',
        options: [
          'Genre novels outsell literary novels by a wide margin in most markets.',
          'Experienced readers of a genre agree closely in ranking works that first-time readers of the same works rank essentially at random.',
          'Many literary novelists have written detective fiction under pseudonyms.',
          'The conventions of most popular genres have changed substantially over the past century.',
        ],
        correctAnswer: 1,
        explanation:
          'The claim is that experience within a formula makes real distinctions perceptible; convergent rankings among veterans paired with random rankings among novices is direct evidence that something is being perceived rather than imagined. Sales figures speak to popularity, which the passage never treats as a measure of quality. Literary novelists writing pseudonymously would bear on the prestige argument the author has already refused. Changing conventions concern the stability of the formula, not the acuity of its readers.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A critic praises a country song for "rising above the clichés of the form." Based on the passage, the author would most likely respond that the praise:',
        options: [
          'is appropriate, since clichés are a defect in any art form',
          'should be extended to the genre as a whole rather than to a single song',
          'condescends, because it credits the song for abandoning the system that makes its effects legible',
          'is accurate but incomplete, since the song’s lyrics must also be judged as poetry',
        ],
        correctAnswer: 2,
        explanation:
          'The passage treats "transcends the genre" as "a form of condescension" that "praises a book for abandoning the very system that made its effects legible," and this praise has the identical structure. Calling clichés a universal defect adopts the outsider’s standard the passage rejects. Extending praise to the whole genre changes the subject without addressing what is wrong with the compliment. Judging lyrics as poetry imports exactly the literary instruments the author says are ill-fitted to genre.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The author’s attitude toward the defenders of popular fiction described in the first paragraph is best characterized as:',
        options: [
          'sympathetic to their aim but critical of the strategy they have adopted',
          'contemptuous of their taste in fiction',
          'persuaded by their comparisons between genre novels and literary ones',
          'indifferent, since questions of literary status do not interest him',
        ],
        correctAnswer: 0,
        explanation:
          'The author allows that "each of these claims may be true" and spends the passage seeking recognition for genre, while faulting the defenders for choosing "the losing argument" and losing "the principle." Contempt for their taste misreads a strategic criticism as a judgment of the books they admire. Being persuaded by the comparisons contradicts the paragraph’s point. Indifference is impossible for a writer whose closing sentence presses a claim about how genre should be judged.',
        skill: 'tone',
        needsReview: true,
      },
    ],
  },
  {
    id: 'cars-lit-06',
    section: 'cars',
    discipline: 'authorship and the canon',
    title: 'The Syllabus and the Honor Roll',
    needsReview: true,
    passageText:
      'Arguments about the canon are conducted as though the question were which books deserve praise, and both parties accept the framing. The traditionalist says that certain works have earned their places by merit and that removing them is an act of vandalism. The reformer says that the list records the tastes of a narrow class and that merit was never what put the names there. Each side treats the canon as an honor roll, a register of achievement, and each is therefore obliged to argue about desert.\n\nA canon is not an honor roll. It is a syllabus, which is to say a coordinating device — a solution to the problem of how strangers are to have a conversation about books when the number of books exceeds by many orders of magnitude what any of them will read. The value of a shared reference is not that it is the best possible reference but that it is shared. Two readers who have both read a certain novel can dispute its meaning, borrow its terms, and recognize an allusion to it in a third book. Two readers who have each read a different and equally admirable novel can do none of these things. On this account the canon is less like a prize and more like a language: not arbitrary, but not a ranking either.\n\nThe traditionalist will reply that this reduces the canon to convention, and that if any list would serve the purpose of coordination we have given up on quality altogether. The reply is too quick. Coordination is not indifferent to what it coordinates on. Works that reward rereading make better hubs than works exhausted in a single pass, because a shared reference must survive repeated visits. Works that later writers have answered accumulate a density of response that makes them more useful still, since to read them is to acquire the context for a hundred later books. These are genuine properties of the works themselves, and they explain why coordination settles where it does rather than just anywhere.\n\nBut the reformer’s case survives this, and in a sharper form than the reformer usually states it. If density of response is what makes a work central, then centrality is partly self-fulfilling. A book that is taught is a book that gets written about; a book written about acquires the commentary that makes it teachable; and the evidence of its importance is manufactured by the attention that its importance was supposed to justify. Exclusions therefore did more than withhold an honor. They withheld the conditions under which centrality is built. The complaint is not merely that certain writers were denied a prize. It is that they were denied the century of argument that would have made them indispensable, and were then judged by the indispensability they had been prevented from acquiring.\n\nThis should leave both parties less confident than they are. The traditionalist cannot read canonical standing as straightforward evidence of quality, since standing partly produces the evidence for itself. The reformer cannot suppose that centrality is conferred by addition, since a name placed on a list is not yet a hub, and the density that makes a work useful is the work of generations rather than of committees. What follows is neither vandalism nor tokenism but something less dramatic and more demanding: sustained argument about particular books, carried on long enough to build the thing a canon actually consists of. Canons are not chosen. They are accumulated, and the only way to change one is to spend a very long time talking.',
    questions: [
      {
        question: 'The main idea of the passage is best stated as:',
        options: [
          'The canon is an honor roll whose contents should be defended against revision.',
          'Because a canon is a coordinating device built by accumulated attention, neither confident defense of it nor rapid revision of it is warranted.',
          'Any list of books would serve equally well, since the canon is purely a matter of convention.',
          'Canonical works have been shown to possess literary qualities that excluded works lack.',
        ],
        correctAnswer: 1,
        explanation:
          'The passage replaces the honor-roll framing with the syllabus framing and then concludes that "this should leave both parties less confident than they are," since standing partly manufactures its own evidence while centrality cannot be conferred by committee. The defense-against-revision option is the traditionalist position the author complicates. The any-list option is the objection answered in the third paragraph, where coordination is shown to select for real properties. The last option asserts a merit finding the passage explicitly says canonical standing cannot straightforwardly supply.',
        skill: 'main-idea',
        needsReview: true,
      },
      {
        question: 'The author’s comparison of the canon to "a language" most nearly conveys that a canon is:',
        options: [
          'a system of rules that determines how books must be interpreted',
          'a national possession that expresses the distinctive character of a people',
          'a barrier that excludes readers without formal education',
          'valuable chiefly because it is held in common, without therefore being arbitrary',
        ],
        correctAnswer: 3,
        explanation:
          'The comparison arrives immediately after "the value of a shared reference is not that it is the best possible reference but that it is shared," and is glossed in the same sentence as "not arbitrary, but not a ranking either." Treating it as a rule system for interpretation imports a prescriptive function the passage never gives it. The national-character reading borrows a familiar association with language that this passage does not invoke. The barrier reading names a concern about access that appears nowhere in the paragraph.',
        skill: 'meaning-in-context',
        needsReview: true,
      },
      {
        question: 'The third paragraph, beginning "The traditionalist will reply," primarily serves to:',
        options: [
          'answer an objection by showing that coordination selects for real properties of works',
          'concede that the canon is finally arbitrary after all',
          'present the reformer’s strongest argument in its sharpest form',
          'name the particular works the author would include in a canon',
        ],
        correctAnswer: 0,
        explanation:
          'The paragraph raises the charge that the syllabus view reduces the canon to convention and answers it: "coordination is not indifferent to what it coordinates on," since rereadability and accumulated response are "genuine properties of the works themselves." Conceding arbitrariness reverses that answer. The reformer’s sharpened argument is the subject of the following paragraph, not this one. No specific titles are proposed anywhere in the passage.',
        skill: 'function',
        needsReview: true,
      },
      {
        question: 'Which of the following, if true, would most STRENGTHEN the author’s claim that centrality is partly self-fulfilling?',
        options: [
          'Surveyed readers report finding canonical works more difficult than non-canonical ones.',
          'Several works now regarded as canonical were neglected for decades after publication.',
          'Works added to widely used syllabi accumulate scholarly commentary at rates far above comparable works left off, and are subsequently rated as more important by critics.',
          'Committees that revise reading lists usually include specialists in previously excluded literatures.',
        ],
        correctAnswer: 2,
        explanation:
          'The self-fulfilling mechanism is that teaching produces commentary and commentary produces the evidence of importance; a documented gap in commentary and subsequent reputation between otherwise comparable taught and untaught works is that mechanism observed directly. Reported difficulty says nothing about how standing is generated. Long-neglected works later recognized cuts the other way, suggesting merit can surface without prior attention. The composition of committees bears on procedure, not on how centrality accumulates.',
        skill: 'strengthen-weaken',
        needsReview: true,
      },
      {
        question: 'A university announces that it has "fixed" a longstanding imbalance by adding twelve previously excluded novels to its required reading list. The author would most likely respond that:',
        options: [
          'the addition is an act of vandalism against an inherited tradition',
          'the addition is unnecessary, since coordination is indifferent to what it coordinates on',
          'the novels should first be shown to equal canonical works in literary merit',
          'the addition is a beginning rather than a fix, since centrality is built by generations of argument rather than conferred by a list',
        ],
        correctAnswer: 3,
        explanation:
          'The closing paragraph says a name on a list "is not yet a hub" and that the necessary density "is the work of generations rather than of committees," while still endorsing the reformer’s underlying complaint. The vandalism charge is the traditionalist line the passage declines to adopt. The indifference option contradicts the third paragraph, which argues coordination is not indifferent. Demanding a prior demonstration of equal merit reinstates the honor-roll framing the passage sets aside at the outset.',
        skill: 'application',
        needsReview: true,
      },
      {
        question: 'The passage suggests that the author regards the dispute between traditionalists and reformers as:',
        options: [
          'a genuine disagreement about merit that further evidence could eventually settle',
          'misconceived from the start, because both sides treat the canon as a register of desert',
          'less important than the practical question of what students enjoy reading',
          'essentially settled in the reformer’s favor',
        ],
        correctAnswer: 1,
        explanation:
          'The opening paragraph observes that "both parties accept the framing" and that "each is therefore obliged to argue about desert," and the second paragraph rejects that framing outright. Treating the dispute as settleable by more evidence keeps the framing the author rejects. Student enjoyment never enters the passage. The reformer-wins option is half right at most: the author sharpens the reformer’s case and then limits it, concluding that both parties should be less confident.',
        skill: 'inference',
        needsReview: true,
      },
    ],
  },
]
