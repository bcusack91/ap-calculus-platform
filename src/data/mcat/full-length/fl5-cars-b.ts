import type { MCATPassage } from '../types'

/**
 * MCAT Full-Length Form 5 — CARS, file B (passages 6–9; 6, 6, 6, 5 questions = 23).
 *
 * Four original argument-driven passages (500–600 words each) written to the
 * Form 5/6 blueprint: political science (when government secrecy is
 * legitimate), music / cultural criticism (learning an instrument as an
 * adult), sociology (small talk as social glue), and education (the case for
 * and against homework). Every item is answerable from the passage alone; no
 * outside knowledge is required.
 */
export const FL5_CARS_B_PASSAGES: MCATPassage[] = [
  {
    id: 'fl5-cars-b-06',
    section: 'cars',
    discipline: 'political science',
    title: 'The Secret That Can Be Seen',
    passageText:
      'Every government keeps secrets, and every one of them says the same thing in its defense: that some things cannot be done in the open. Negotiations collapse when each concession is published before the other side has agreed to it; an investigation announced is an investigation evaded; a defense that describes its own weaknesses is no longer a defense. All of this is true, and the citizen who denies it is not a democrat but a child. Yet the same citizen is right to feel that something has gone wrong when the claim is made too often, about too much. The problem is not that governments keep secrets. It is that we have no settled way of telling the secrets a democracy can tolerate from the ones that quietly unmake it.\n\nI want to propose a test, and it is not the one usually offered. The usual test asks about the content of the secret: does disclosure endanger lives, compromise a source, hand an advantage to an adversary? These are real questions, but only the secret-keeper can answer them, and that is the whole difficulty. A test that must be applied by the person it is meant to restrain is not a test. It is a request.\n\nThe better question is not what is being hidden but whether the hiding is itself hidden. Call a secret shallow when the public knows that something is being withheld — knows that there is a negotiation, an operation, a program — and knows the rule under which it is withheld and when that rule will expire. Call a secret deep when the public does not know that there is anything to know. A shallow secret can be argued about. Citizens can object to the rule, vote against those who made it, demand the file when the date arrives. A deep secret cannot be argued about, because the argument has no object. It removes a matter from politics altogether, without anyone having decided that it should be removed.\n\nThis distinction does the work the content test pretends to do, and does it from the outside. One need not know what the file contains to ask whether its existence was acknowledged, whether the authority to seal it was granted in public, whether a date or a condition for its opening was set in advance. A government that can answer yes to these has kept a secret within democracy. A government that cannot has kept one from it.\n\nThe objection will be that some secrets must be deep: that to acknowledge the existence of an operation is already to compromise it. I concede the case, and I would meet it with a rule rather than an exception. Let the category exist, let it be small, and let the fact that something has been placed in it be recorded somewhere that will eventually be read — by a court, a committee, a future public. The deep secret then becomes a shallow secret with a longer fuse. What cannot be defended is the secret that is deep forever, because that is not a secret at all. It is a decision that the people were never told they had made.\n\nLegitimacy, on this view, is not a property of what is concealed. It is a property of the concealment’s form: open about its own existence, bounded in time, answerable later. A government that meets this standard may still keep many secrets, and some of them may be wrong. But it will have kept them as a servant keeps a confidence, not as a master keeps a plan.',
    questions: [
      {
        question: 'Which of the following best expresses the central claim of the passage?',
        options: [
          'Governments keep far too many secrets, and most claims about the necessity of secrecy are made in bad faith.',
          'Whether a secret is legitimate depends on whether its disclosure would endanger lives or aid an adversary.',
          'A secret’s legitimacy depends on the form of its concealment rather than on what it conceals.',
          'Deep secrets should be prohibited entirely because they remove matters from political debate without authorization.',
        ],
        correctAnswer: 2,
        explanation:
          'The closing paragraph states the thesis directly: legitimacy “is not a property of what is concealed” but of “the concealment’s form: open about its own existence, bounded in time, answerable later.” The bad-faith option overstates the author, who grants that the standard defense of secrecy is true and that a government meeting the standard “may still keep many secrets.” The endanger-lives option is the “content test” the author rejects because only the secret-keeper can apply it. The prohibit-deep-secrets option ignores the fifth paragraph, where the author concedes that some secrets must be deep and proposes a rule for them rather than a ban.',
        optionExplanations: [
          'This overstates the author, who grants that the standard defense of secrecy is true, calls the citizen who denies it “a child,” and allows that a government meeting his standard “may still keep many secrets”; bad faith is never alleged.',
          'This is the “content test,” which the author says asks real questions but is inadequate because only the secret-keeper can answer them; he replaces it with a test of form, not content.',
          'The closing paragraph states the thesis directly: legitimacy “is not a property of what is concealed” but “a property of the concealment’s form: open about its own existence, bounded in time, answerable later.”',
          'The author concedes in the fifth paragraph that “some secrets must be deep” and proposes a rule for them, a recorded placement to be read later, rather than a prohibition; what he rejects is the secret that is deep forever.',
        ],
        skill: 'main-idea',
      },
      {
        question: 'The author’s remark that a citizen who denies the need for secrecy “is not a democrat but a child” primarily serves to:',
        options: [
          'concede the secret-keeper’s strongest point before turning to what that point fails to settle.',
          'suggest that opponents of government secrecy are usually motivated by naive idealism.',
          'establish that the author will defend a government’s right to withhold whatever it judges necessary.',
          'distinguish between citizens who understand the demands of diplomacy and those who do not.',
        ],
        correctAnswer: 0,
        explanation:
          'The remark closes a list of cases in which secrecy really is necessary, and the next sentences pivot with “Yet” to what remains unresolved: “we have no settled way of telling the secrets a democracy can tolerate from the ones that quietly unmake it.” It is a concession that clears the ground for the author’s own test. The naive-idealism option turns a concession about one claim into a characterization of all opponents, which the passage does not make. The whatever-it-judges option contradicts the passage, which refuses to let the secret-keeper apply the test. The diplomacy option treats the sentence as a classification of citizens rather than as a step in the argument.',
        optionExplanations: [
          'The remark closes a list of cases where secrecy really is necessary and is followed by “Yet,” pivoting to what remains unsettled: how to tell tolerable secrets from those that “quietly unmake” democracy. It concedes the strongest point before turning to what it leaves open.',
          'The sentence concedes that one specific claim about secrecy is true; it does not characterize opponents of secrecy in general as naive idealists, and the author goes on to side with the citizen who feels something has gone wrong.',
          'This contradicts the passage, which refuses to let the secret-keeper apply the test (“a test that must be applied by the person it is meant to restrain is not a test”); the author does not defend unlimited discretion.',
          'The sentence is a step in the argument, conceding a point before qualifying it, not a classification of citizens by their understanding of diplomacy; the author immediately says the same citizen “is right to feel that something has gone wrong.”',
        ],
        skill: 'function',
      },
      {
        question: 'Based on the passage, which of the following would the author most likely classify as a deep secret?',
        options: [
          'A ministry confirms it is negotiating a treaty but withholds the terms until the treaty is signed.',
          'A legislature votes in public to let intelligence files be sealed for twenty-five years.',
          'A court seals a trial’s records and announces the date on which they will be opened.',
          'An agency runs a program it does not acknowledge, under no rule the public has seen.',
        ],
        correctAnswer: 3,
        explanation:
          'A deep secret is one in which “the public does not know that there is anything to know,” with no acknowledged existence, no public rule, and no condition for its opening. The unacknowledged program meets every part of that description. The treaty case is shallow: the public knows a negotiation exists and that terms are withheld until signing. The sealed intelligence files are shallow because the rule was made in public and has an expiry. The sealed court records are shallow because their existence is acknowledged and a date for opening has been set in advance.',
        optionExplanations: [
          'A ministry that confirms it is negotiating but withholds the terms until signing is a shallow secret: the public knows a negotiation exists and knows the rule under which the terms are withheld and when it expires.',
          'A legislature voting in public to seal files for twenty-five years creates a shallow secret: the authority to seal was granted in public and a date for opening was set in advance, so citizens can argue about and vote on the rule.',
          'A court that seals records and announces the opening date has kept a shallow secret; its existence is acknowledged and a condition for its opening was set in advance, which is exactly what the author says keeps a secret within democracy.',
          'A deep secret is one in which “the public does not know that there is anything to know,” with no acknowledged existence and no public rule; a program that is unacknowledged and governed by no rule the public has seen meets every part of that description.',
        ],
        skill: 'application',
      },
      {
        question: 'According to the passage, the author regards the “content test” as inadequate chiefly because it:',
        options: [
          'ignores the real dangers that disclosure can pose to sources and operations.',
          'can be applied only by the very officials whose conduct it is supposed to constrain.',
          'treats every secret as equally dangerous regardless of its subject matter.',
          'permits secrets to remain sealed long after the original reasons for sealing them have lapsed.',
        ],
        correctAnswer: 1,
        explanation:
          'The second paragraph grants that the content questions are real but observes that “only the secret-keeper can answer them,” concluding that a test applied by the person it restrains “is not a test. It is a request.” The ignores-dangers option is backwards: the content test is precisely about those dangers. The equally-dangerous option is the opposite of what the content test does, since it sorts secrets by their subject matter. The sealed-too-long option describes a problem the author’s own form-based test addresses, not the flaw identified in the content test.',
        optionExplanations: [
          'This is backwards: the content test is precisely about the dangers of disclosure to lives, sources, and operations. The author grants those questions are real; his objection is about who gets to answer them.',
          'The second paragraph grants that the content questions are real but observes that “only the secret-keeper can answer them,” concluding that a test applied by the person it is meant to restrain “is not a test. It is a request.”',
          'The content test does the opposite of treating all secrets alike: it sorts them by subject matter, asking whether each one endangers lives or aids an adversary. Uniformity is not the flaw the author identifies.',
          'Secrets remaining sealed after their reasons lapse is a problem the author’s own form-based test addresses by requiring a time bound; it is not the deficiency he attributes to the content test.',
        ],
        skill: 'detail',
      },
      {
        question: 'Based on the passage, the author would be likely to endorse which of the following practices?\n\nI. Recording the existence of an unacknowledged operation in a register to be read at a later time\nII. Allowing officials to decide for themselves whether disclosure of a file would endanger lives\nIII. Requiring that any authority to seal a file be granted in public',
        options: [
          'I and III only',
          'I only',
          'II and III only',
          'I, II, and III',
        ],
        correctAnswer: 0,
        explanation:
          'Practice I is exactly the author’s proposal for secrets that must be deep: let the placement “be recorded somewhere that will eventually be read,” turning a deep secret into “a shallow secret with a longer fuse.” Practice III is one of the three outside questions the author says can be asked of any secret: “whether the authority to seal it was granted in public.” Practice II is the content test left in the hands of the secret-keeper, which the author dismisses as “a request” rather than a test. Hence I and III only; “I only” omits the public-authority requirement, and the options including II credit the author with the view he rejects.',
        optionExplanations: [
          'Practice I is the author’s proposal for secrets that must be deep, recording their placement “somewhere that will eventually be read,” and practice III is one of his outside questions, “whether the authority to seal it was granted in public.” Practice II is the content test left to the secret-keeper, which he calls “a request” rather than a test.',
          'Practice I is endorsed, but this omits practice III, requiring public authority to seal, which the author lists among the questions that can be asked of any secret from the outside and that mark a secret kept within democracy.',
          'Practice II lets officials judge the danger of disclosure for themselves, which is the content test applied by the person it is meant to restrain; the author dismisses that as “not a test” but “a request,” so he would not endorse it.',
          'Including practice II credits the author with the view he rejects: officials deciding for themselves whether disclosure endangers lives is the content test in the secret-keeper’s hands, which the second paragraph calls “a request” rather than a test.',
        ],
        skill: 'application',
      },
      {
        question: 'Suppose it were shown that in one country every file placed under a publicly authorized seal was eventually released on schedule, yet citizens reported no greater trust in government than citizens of a country with no such rules. How would this finding bear on the author’s argument?',
        options: [
          'It would refute the argument, since the author claims that shallow secrets restore citizens’ trust in government.',
          'It would support the argument, since it shows that the form of concealment matters more than its content.',
          'It would leave the argument untouched, since the author’s standard concerns legitimacy, not trust.',
          'It would weaken the argument by showing that publicly authorized seals do nothing that deep secrets do not also do.',
        ],
        correctAnswer: 2,
        explanation:
          'The passage defines legitimacy by the form of concealment — acknowledged, bounded, answerable — and never claims that meeting the standard will make citizens feel more trusting; it even allows that a legitimate secret “may be wrong.” A finding about trust therefore addresses a claim the author did not make. The refute option invents a trust claim. The support option mistakes a null result about trust for evidence about form versus content, which the finding does not test. The weaken option is wrong because the finding says nothing about whether the sealed files could be argued about, voted on, or demanded, which is the difference the author cares about.',
        optionExplanations: [
          'The author never claims that shallow secrets restore citizens’ trust; he defines legitimacy by the form of concealment and even allows that a legitimate secret “may be wrong.” A trust claim is invented here.',
          'A null result about trust does not test form against content; the finding compares a country with public seals to one without rules and measures trust, not whether form or content determines legitimacy.',
          'The passage defines legitimacy by the form of concealment, acknowledged, bounded, and answerable later, and never claims that meeting the standard makes citizens feel more trusting; a finding about trust addresses a claim the author did not make.',
          'The finding says nothing about whether the sealed files could be argued about, voted on, or demanded when the date arrived, which is the difference between shallow and deep secrets that the author cares about; it does not show the seals do nothing distinctive.',
        ],
        skill: 'strengthen-weaken',
      },
    ],
  },
  {
    id: 'fl5-cars-b-07',
    section: 'cars',
    discipline: 'music / cultural criticism',
    title: 'The Late Beginner',
    passageText:
      'The adult who takes up the cello at forty is told, kindly and often, that it is too late. The people who say this are usually not musicians. Musicians say something stranger: that it is too late to become what they are, which is true, and then — if they are honest — that they are not sure what they are is worth becoming. I want to take the second remark seriously, because it points at something the first conceals. The lament over the late beginner assumes we know what learning an instrument is for. We do not, or rather we have let one answer crowd out the others.\n\nBegin with what the pessimists get right. A child who starts at six will, by sixteen, play with a fluency the adult beginner will never match. Fingers trained before the hand has finished growing acquire a speed that is closer to an accent than a skill; it is laid down beneath the level of decision, and what is laid down there is not laid down again. The adult will always, at some level, be translating. This is simply so, and the late beginner who denies it is preparing a disappointment.\n\nBut notice what has been measured. Fluency is the capacity to execute, and execution is what the child’s training is organized to produce, because the child is being prepared, whether anyone says so or not, for the possibility of a stage. The entire apparatus of early instruction — the graded examinations, the recitals, the competition circuit — exists to sort children by how well they can be listened to. The adult beginner is outside this apparatus not merely because she started late but because she is not a candidate for it. No one will ever listen to her. And this, which sounds like the saddest fact about her, is the thing that sets her free.\n\nConsider what she is actually doing when she practices. She is not preparing a performance. She is placing her hands on a thing that resists her, and discovering, note by note, the distance between the sound she can imagine and the sound she can make. That distance is the adult’s particular affliction. The child does not hear it, because the child’s taste grows alongside her fingers and is never far ahead of them. The adult arrives with forty years of listening and a hand that knows nothing. Every phrase is a small humiliation. But humiliation of this kind is also a form of knowledge: she hears, with a precision no child possesses, exactly what the music is asking for and exactly where she falls short. That is not a lesser version of musicianship. It is a different one, and I am not sure it is the lesser.\n\nThere is a further thing. Music in our culture has become almost entirely something received. We are surrounded by performances of a polish no amateur can approach, and the effect has been to make playing seem pointless unless it can compete with them. The adult beginner is the last person who plays with no such ambition. She plays badly, for no one, and keeps playing. In doing so she recovers a relation to music that the professionals, for all their fluency, have mostly lost: the relation of someone who does it rather than someone who delivers it.\n\nSo when the adult asks whether it is too late, the honest answer is: too late for what? Too late for the stage, certainly. Not too late for the thing the stage was supposed to be about.',
    questions: [
      {
        question: 'The central claim of the passage is that:',
        options: [
          'adult beginners can, with sufficient practice, achieve a fluency comparable to that of musicians trained from childhood.',
          'the charge that adults start too late measures them against a goal that need not be the point of learning to play.',
          'early musical training should be reformed so that it no longer prepares children chiefly for performance.',
          'adults who take up instruments gain more from music than professionals do, because their listening is more refined.',
        ],
        correctAnswer: 1,
        explanation:
          'The passage concedes that the adult will never match a child-trained player’s fluency, then argues that fluency serves “the possibility of a stage,” which is only one answer to what learning an instrument is for; the closing line — “too late for what?” — makes the point explicit. The comparable-fluency option contradicts the second paragraph. The reform option proposes a change in children’s training that the author never advocates; the apparatus is described, not condemned. The gain-more option overreaches: the author says only that the adult’s musicianship is “different” and that he is “not sure it is the lesser.”',
        optionExplanations: [
          'This contradicts the second paragraph, which affirms that the child-trained player’s fluency is something “the adult beginner will never match” and that the adult “will always, at some level, be translating.”',
          'The passage concedes the fluency gap, then argues that fluency serves “the possibility of a stage,” which is only one answer to what learning an instrument is for; the closing line, “too late for what?”, makes this the central point.',
          'The author describes the apparatus of early instruction and what it is organized to produce, but never advocates reforming it; the essay is about the adult beginner, not about changing children’s training.',
          'This overreaches: the author says the adult’s musicianship “is a different one, and I am not sure it is the lesser,” which stops well short of claiming that adults gain more from music than professionals do.',
        ],
        skill: 'main-idea',
      },
      {
        question: 'The author’s attitude toward the “pessimists” is best described as:',
        options: [
          'dismissive of their conclusions and skeptical of their expertise.',
          'sympathetic to their aims but doubtful of their evidence.',
          'amused by their confidence about matters they have not studied.',
          'accepting of their premise while rejecting what they take it to show.',
        ],
        correctAnswer: 3,
        explanation:
          'The author opens the second paragraph with “Begin with what the pessimists get right” and affirms that the fluency gap “is simply so,” then turns on the inference: “But notice what has been measured.” That is acceptance of the premise and rejection of the conclusion. The dismissive option ignores the explicit concession. The doubtful-of-evidence option is wrong because the author accepts the evidence about fluency without reservation. The amused option misreads the tone, which is serious throughout, and attributes an ignorance to the pessimists that the passage never suggests.',
        optionExplanations: [
          'The author does not dismiss the pessimists’ conclusion about fluency; he opens the second paragraph with “Begin with what the pessimists get right” and affirms that the gap “is simply so.”',
          'The author accepts the pessimists’ evidence about fluency without reservation; what he questions is not their evidence but the inference drawn from it, so doubt about evidence misreads him.',
          'The tone is serious throughout, and the passage never suggests the pessimists are ignorant of what they describe; the author grants that what they say about fluency is true.',
          'The author affirms that the fluency gap “is simply so,” then turns on the inference: “But notice what has been measured.” He accepts the premise and rejects what the pessimists take it to show.',
        ],
        skill: 'tone',
      },
      {
        question: 'According to the passage, the “distance” that the adult beginner discovers in practice arises because:',
        options: [
          'her taste, formed by years of listening, runs far ahead of what her hands can do.',
          'she lacks the graded examinations and recitals that structure a child’s progress.',
          'her fingers were trained only after the hand had finished growing.',
          'she practices without the prospect of ever performing for an audience.',
        ],
        correctAnswer: 0,
        explanation:
          'The fourth paragraph contrasts the child, whose “taste grows alongside her fingers and is never far ahead of them,” with the adult who “arrives with forty years of listening and a hand that knows nothing”; the distance is between what she can imagine and what she can make. The examinations option describes why the adult is outside the performance apparatus, not why she hears the gap. The finished-growing option explains the fluency deficit of the second paragraph, which is about the hand alone, not the gap between ear and hand. The no-audience option is what the author says sets her free, not what produces the distance.',
        optionExplanations: [
          'The fourth paragraph contrasts the child, whose “taste grows alongside her fingers and is never far ahead of them,” with the adult who “arrives with forty years of listening and a hand that knows nothing”; the distance is between what she can imagine and what she can make.',
          'The examinations and recitals explain why the adult is outside the performance apparatus and why no one will listen to her; they do not explain why she hears the gap between imagined and produced sound.',
          'Fingers trained after the hand finished growing explains the fluency deficit in the second paragraph, which concerns the hand alone; the distance in the fourth paragraph is between a refined ear and an untrained hand.',
          'Practicing without the prospect of an audience is what the author says “sets her free,” a consequence of being outside the apparatus; it is not what produces the distance between her imagination and her execution.',
        ],
        skill: 'detail',
      },
      {
        question: 'The author mentions “the graded examinations, the recitals, the competition circuit” primarily in order to:',
        options: [
          'show that early instruction is more rigorous than anything an adult beginner undertakes.',
          'explain why a child’s fluency is laid down beneath the level of decision.',
          'support the claim that children’s training is organized around being listened to.',
          'illustrate the pressures that lead many trained children to abandon music.',
        ],
        correctAnswer: 2,
        explanation:
          'The list follows the assertion that the child is prepared “for the possibility of a stage” and is introduced as the apparatus that “exists to sort children by how well they can be listened to”; it is evidence for that claim. The rigor option introduces a comparison of difficulty the passage does not make. The beneath-decision option belongs to the second paragraph’s account of early finger training, which the apparatus does not explain. The abandon-music option raises an outcome the passage never mentions.',
        optionExplanations: [
          'The passage never compares the rigor of early instruction with what the adult undertakes; the list is about what the apparatus exists to do, sort children by how they can be listened to, not about difficulty.',
          'Fluency laid down “beneath the level of decision” belongs to the second paragraph’s account of early finger training; the examinations and recitals are not offered as the explanation for that motor phenomenon.',
          'The list follows the claim that the child is prepared “for the possibility of a stage” and is introduced as the apparatus that “exists to sort children by how well they can be listened to”; it is evidence that children’s training is organized around performance.',
          'The passage never mentions children abandoning music or the pressures that might cause it; this introduces an outcome the author does not discuss.',
        ],
        skill: 'function',
      },
      {
        question: 'The author’s suggestion that the adult beginner’s musicianship may not be “the lesser” depends on the assumption that:',
        options: [
          'the adult beginner will eventually narrow the gap between what she imagines and what she can play.',
          'musicians trained from childhood rarely develop refined taste in the music they perform.',
          'fluency of execution has no bearing on how well a person understands a piece of music.',
          'hearing precisely what music asks for counts as musicianship even when one cannot supply it.',
        ],
        correctAnswer: 3,
        explanation:
          'The author’s only evidence for the adult’s musicianship is that she hears “exactly what the music is asking for and exactly where she falls short”; the conclusion follows only if that kind of hearing is itself musicianship, independent of the ability to produce the sound. The narrow-the-gap option is contradicted by the passage, which says the adult will always be translating, and the conclusion does not rest on improvement. The rarely-refined option is stronger than needed and not implied; the author says the child’s taste is never far ahead of her fingers, not that it stays crude. The no-bearing option is too absolute; the author needs only that execution is not the whole of musicianship, not that it is irrelevant.',
        optionExplanations: [
          'The passage says the adult “will always, at some level, be translating,” so the conclusion does not rest on her narrowing the gap; the author values the precision with which she hears the gap, not its eventual closing.',
          'This is stronger than the argument needs and not implied; the author says the child’s taste “grows alongside her fingers,” never far ahead, not that trained musicians fail to develop refined taste.',
          'This is too absolute; the author needs only that execution is not the whole of musicianship, not that fluency has no bearing on understanding. He grants that fluency is real and valuable for the stage.',
          'The author’s only evidence for the adult’s musicianship is that she hears “exactly what the music is asking for and exactly where she falls short”; the conclusion follows only if that precise hearing counts as musicianship even when she cannot supply the sound.',
        ],
        skill: 'assumption',
      },
      {
        question: 'Suppose a survey found that most adults who began an instrument late practiced primarily in order to play for friends and family. This finding would most directly challenge the author’s claim that:',
        options: [
          'the adult will always, at some level, be translating what she plays.',
          'the adult beginner plays with no ambition to be heard.',
          'the child’s taste grows alongside her fingers.',
          'music in our culture has become something received.',
        ],
        correctAnswer: 1,
        explanation:
          'The fifth paragraph rests on the adult beginner being “the last person who plays with no such ambition,” who “plays badly, for no one”; adults who practice in order to play for others would contradict that premise and weaken the claim that she recovers music as something done rather than delivered. The translating claim is about motor fluency and is untouched by motives. The child’s-taste claim concerns children, not adult learners. The music-as-received claim is about the culture at large and would not be challenged by what adult beginners want.',
        optionExplanations: [
          'The translating claim is about motor fluency laid down in childhood and is untouched by why adults practice; their motives for playing do not change what their hands can do.',
          'The fifth paragraph rests on the adult beginner being “the last person who plays with no such ambition,” who “plays badly, for no one”; adults practicing in order to play for friends and family would contradict that premise directly.',
          'The child’s-taste claim concerns how children develop and has nothing to do with adult learners’ motives; a survey of adult beginners cannot bear on it.',
          'The music-as-received claim is about the culture at large, surrounded by polished performances; what adult beginners hope to do with their playing would not challenge a claim about how most people encounter music.',
        ],
        skill: 'new-information',
      },
    ],
  },
  {
    id: 'fl5-cars-b-08',
    section: 'cars',
    discipline: 'sociology',
    title: 'Nothing in Particular',
    passageText:
      'The complaint against small talk is one of the few that unites the shy and the self-regarding. The shy dread it because it demands performance without a script; the self-regarding despise it because it seems to demand nothing at all. “I hate small talk,” says the person who wishes to be known as serious. “I only want real conversations.” The sentiment is so widely approved that it is worth asking what would happen to the real conversations if the small ones stopped.\n\nBegin with what small talk is not. It is not an exchange of information; everyone involved already knows that it is raining. It is not an exchange of opinion, since opinions are precisely what the rules of small talk exclude. And it is not, despite appearances, a failure to say something better. Its emptiness is not an accident but a design, and the design serves a purpose that content would defeat.\n\nThe purpose is this: small talk is how people confirm, at almost no cost and with almost no risk, that they remain available to each other. The remark about the weather carries no message, but the making of it does. It says: I have noticed you; I am not hostile; I will put in a little effort and I will not ask much in return. The reply says the same. Because nothing of substance has been said, nothing of substance can be refused, and so the exchange cannot fail in the way a real conversation can. Two people who have talked about the rain have not become friends. But they have established that they could, and that fact is stored somewhere and drawn on later.\n\nNotice the rules. Each party contributes a little and expects a little; neither may dominate; either may leave, and the leaving gives no offense. These are not trivial constraints. They are a small, portable model of equality, enacted hundreds of times a day between people who are in every other respect unequal — the customer and the clerk, the patient and the receptionist. The serious person who refuses the ritual does not thereby rise above it. He simply declines to perform equality with people he regards as not worth the effort, and it is no accident that the refusal is most admired among those who can afford it.\n\nThe real conversations, meanwhile, are not an alternative to the small ones. They grow out of them. One does not confide in a stranger; one confides in someone whose availability has been established, over weeks or years, by exchanges too trivial to remember. The person who wants only depth has mistaken the floor for the furniture. Remove the floor and the furniture does not become more prominent. It falls.\n\nThere is a reason to say this now. The places where small talk happened without anyone intending it — the counter, the queue, the bus stop, the landing — are being engineered away, one convenience at a time, by systems that give us what we came for without requiring us to say anything to anyone. Each such improvement is welcomed, and each is a small withdrawal from the fund of mutual availability on which everything else is drawn. We will not notice the withdrawals. We will notice, some years on, that the real conversations have become harder to begin, and we will blame ourselves, or our phones, for a loss that was built into the floor plan.',
    questions: [
      {
        question: 'Which of the following best captures the author’s main point?',
        options: [
          'Small talk should be valued because it conveys information that more serious conversation cannot.',
          'People who claim to dislike small talk are usually shy rather than, as they believe, serious.',
          'Modern conveniences have made small talk unnecessary by removing the occasions that once required it.',
          'Small talk, though empty of content, sustains the availability on which serious relations depend.',
        ],
        correctAnswer: 3,
        explanation:
          'The passage argues that small talk’s emptiness is “a design” serving to confirm that people “remain available to each other,” and that real conversations “grow out of” that availability. The conveys-information option contradicts the second paragraph, which says small talk is not an exchange of information. The shy-not-serious option conflates the two groups the author distinguishes in the opening and is not the point of the essay. The unnecessary option reverses the final paragraph, which treats the disappearance of small-talk occasions as a loss rather than as proof that small talk is no longer needed.',
        optionExplanations: [
          'This contradicts the second paragraph, which says small talk “is not an exchange of information; everyone involved already knows that it is raining.” Its value lies in the making of the remark, not in any content.',
          'The opening distinguishes the shy, who dread small talk, from the self-regarding, who despise it; the author does not reduce one group to the other, and diagnosing the complainers is not the essay’s point.',
          'This reverses the final paragraph, which treats the engineering away of small-talk occasions as “a small withdrawal from the fund of mutual availability,” a loss, not as proof that small talk is no longer needed.',
          'The passage argues that small talk’s emptiness is “a design” that confirms people “remain available to each other,” and that real conversations “grow out of” that availability; remove the floor and the furniture falls.',
        ],
        skill: 'main-idea',
      },
      {
        question: 'It can be inferred that the author believes the “serious person” who refuses small talk:',
        options: [
          'is motivated primarily by shyness disguised as superiority.',
          'will eventually find real conversation impossible with anyone.',
          'is exercising a privilege that others cannot afford to exercise.',
          'would be better served by learning the ritual’s rules than by condemning it.',
        ],
        correctAnswer: 2,
        explanation:
          'The fourth paragraph says the refuser “declines to perform equality with people he regards as not worth the effort,” and that the refusal “is most admired among those who can afford it,” which marks the refusal as a privilege unavailable to those who depend on the ritual. The shyness option merges the self-regarding with the shy, whom the author treats separately. The impossible-with-anyone option is too strong; the author says real conversations will become harder to begin, and that is a claim about society, not about this individual. The better-served option offers advice the passage never gives.',
        optionExplanations: [
          'The author treats the shy and the self-regarding as separate groups with different complaints; the “serious person” belongs to the self-regarding, and the passage does not diagnose his refusal as disguised shyness.',
          'This is too strong; the author predicts that real conversations will become “harder to begin” as a social consequence, not that any individual refuser will find them impossible with anyone.',
          'The fourth paragraph says the refuser “declines to perform equality with people he regards as not worth the effort” and that the refusal “is most admired among those who can afford it,” marking it as a privilege unavailable to those who depend on the ritual.',
          'The passage never offers advice to the serious person about learning the rules; it analyzes what his refusal amounts to rather than prescribing a remedy for him.',
        ],
        skill: 'inference',
      },
      {
        question: 'The passage attributes each of the following features to small talk EXCEPT:',
        options: [
          'Either participant may end the exchange without giving offense.',
          'The participants typically share an interest in the topic discussed.',
          'Neither participant is permitted to dominate the exchange.',
          'The exchange cannot fail in the way that a substantive conversation can.',
        ],
        correctAnswer: 1,
        explanation:
          'The author says the content of small talk is beside the point — “everyone involved already knows that it is raining” — and that its emptiness is a design; nothing in the passage suggests the participants care about the topic. The other three features are among the rules and properties the passage lists: either party may leave “and the leaving gives no offense,” “neither may dominate,” and because nothing of substance is said, the exchange “cannot fail in the way a real conversation can.”',
        optionExplanations: [
          'The passage lists this among the rules: “either may leave, and the leaving gives no offense.” It is an attributed feature, so it cannot be the exception.',
          'The author says everyone already knows it is raining and that opinions are excluded by the rules; nothing in the passage suggests the participants share any interest in the topic, whose content is beside the point by design.',
          'The passage states that “neither may dominate” as one of the rules of small talk, so this feature is attributed and cannot be the exception.',
          'The third paragraph says that because nothing of substance is said, nothing can be refused, “and so the exchange cannot fail in the way a real conversation can”; this is an attributed feature.',
        ],
        skill: 'detail',
      },
      {
        question: 'Which of the following situations best exemplifies the author’s claim that small talk is “a small, portable model of equality”?',
        options: [
          'A surgeon and a hospital porter exchange a few words about the traffic while waiting for an elevator.',
          'Two colleagues of the same rank debate a point of policy during a scheduled meeting.',
          'A manager asks an employee a series of questions about her weekend during a performance review.',
          'A customer explains to a clerk, at length, why a product she bought was unsatisfactory.',
        ],
        correctAnswer: 0,
        explanation:
          'The model of equality is “enacted … between people who are in every other respect unequal,” through exchanges in which each contributes a little and neither dominates; the surgeon and the porter talking about traffic fit every element. The equal-rank colleagues are not unequal, and a policy debate is an exchange of opinion, which small talk excludes. The manager’s questioning is one-sided and takes place inside an evaluation, so it violates the no-domination rule and carries stakes. The customer’s complaint is substantive and could be refused, so it is not small talk at all.',
        optionExplanations: [
          'The model of equality is “enacted … between people who are in every other respect unequal,” through exchanges where each contributes a little and neither dominates; a surgeon and a porter talking about traffic while waiting fit every element.',
          'Colleagues of the same rank are not unequal in the relevant sense, and a policy debate is an exchange of opinion, which the author says the rules of small talk exclude.',
          'A manager questioning an employee during a performance review is one-sided and takes place inside an evaluation with stakes; it violates the rule that neither party may dominate and carries the risk that small talk is designed to avoid.',
          'A customer explaining at length why a product failed is a substantive complaint that could be refused; it has content and stakes, so it is not small talk and does not model equality.',
        ],
        skill: 'application',
      },
      {
        question: 'Which of the following, if true, would most WEAKEN the author’s argument in the final paragraph?',
        options: [
          'People who use self-service systems report saving an average of several minutes per transaction.',
          'Many of the exchanges that occur at counters and bus stops are perceived by participants as unpleasant.',
          'Confiding relationships form as readily between people who have never exchanged trivial remarks as between those who have.',
          'Most people say they would prefer a shorter wait to a conversation with a stranger.',
        ],
        correctAnswer: 2,
        explanation:
          'The final paragraph’s warning depends on the earlier claim that real conversations “grow out of” trivial exchanges that establish availability; if confiding relationships form just as readily without such exchanges, the withdrawal of small-talk occasions would cost nothing. The time-saving option restates the convenience the author already concedes is welcomed. The unpleasant option concerns how the exchanges feel, not whether they build the availability the argument needs. The shorter-wait option again describes a preference the author grants when saying each improvement is welcomed.',
        optionExplanations: [
          'Saving several minutes per transaction restates the convenience that the author already concedes: “Each such improvement is welcomed.” It does not touch his claim about what the convenience costs.',
          'How the exchanges feel to participants is beside the point; the author’s argument is that they build availability regardless of their pleasantness, so unpleasantness does not weaken the claim about what they do.',
          'The final paragraph’s warning depends on the earlier claim that real conversations “grow out of” trivial exchanges that establish availability; if confiding relationships form just as readily without them, the loss of small-talk occasions would cost nothing.',
          'A preference for a shorter wait over conversation with a stranger is another form of the welcome the author grants each improvement; preferences do not bear on whether the withdrawals deplete the fund of availability.',
        ],
        skill: 'strengthen-weaken',
      },
      {
        question: 'Suppose a town replaced its staffed ticket counters with machines and, five years later, surveyed residents about their social lives. Based on the passage, the author would most likely predict that residents would:',
        options: [
          'report having more time for substantive conversations with their close friends.',
          'identify the loss of the counters as the cause of any decline in their social lives.',
          'report no change, because real conversations do not depend on exchanges with strangers.',
          'attribute any difficulty in forming new relationships to causes other than the counters.',
        ],
        correctAnswer: 3,
        explanation:
          'The author predicts that “we will not notice the withdrawals” and that when real conversations become harder to begin “we will blame ourselves, or our phones,” that is, something other than the vanished occasions for small talk. The more-time option assumes a benefit the author never grants. The identify-the-counters option is the opposite of the author’s prediction that the cause will go unrecognized. The no-change option contradicts the central claim that real conversations grow out of trivial exchanges.',
        optionExplanations: [
          'The author never grants that engineering away small talk frees time for substantive conversation; his prediction is that real conversations become harder to begin, not more frequent.',
          'This is the opposite of the author’s prediction: he says “we will not notice the withdrawals,” so residents would not identify the lost counters as the cause of any decline.',
          'This contradicts the central claim that real conversations grow out of trivial exchanges with people whose availability has been established; the author predicts a change, not stability.',
          'The author predicts that “we will not notice the withdrawals” and that when real conversations become harder to begin “we will blame ourselves, or our phones,” that is, something other than the vanished occasions for small talk.',
        ],
        skill: 'new-information',
      },
    ],
  },
  {
    id: 'fl5-cars-b-09',
    section: 'cars',
    discipline: 'education',
    title: 'The Work That Comes Home',
    passageText:
      'The argument over homework has the peculiar quality of being conducted entirely by people who have already made up their minds, and of producing, every few years, a study that each side reads as a vindication. The defenders say that practice consolidates learning, that a child who works alone at a problem acquires something the classroom cannot give, and that homework is the one window through which parents see what the school is doing. The abolitionists reply that the measurable benefit in the early years is close to nothing, that the hours come out of sleep and play and family, and that whatever benefit exists accrues mostly to children who were going to do well anyway. Both sides are, as far as I can tell, correct. That is what makes the argument so tiresome, and it suggests the question has been badly put.\n\n“Does homework work?” is a question about a method. But homework is not a method. It is a transfer: the school hands a piece of its work to the household and asks for it back. What comes back depends on what the household had to give — a quiet table, an adult with an evening free, a tolerance for the child’s frustration, a language in common with the worksheet. Where these are present, homework does roughly what its defenders say. Where they are absent, it does roughly what its critics say, and something worse: it returns to the school a measure of the household disguised as a measure of the child.\n\nThis is the point at which the two sides should meet, and do not. The defenders are describing a home. The abolitionists are describing a different home. Each treats its home as the general case, and neither notices that the school, by sending the work out, has made itself dependent on a resource it does not control and cannot see.\n\nI do not conclude from this that homework should be abolished. The defenders are right that something is learned by working alone, without the teacher at one’s elbow, and that this something is not easily supplied in a crowded room. I conclude instead that a school may send work home only on terms it can honor. If it assigns the work, it must be prepared to supply what the work requires to the children whose homes cannot: a room that stays open after the last bell, an adult in it, and the understanding that work done there counts exactly as work done at a kitchen table. Where a school cannot provide this, it should not assign the work, because what it would be grading is not the child.\n\nThere is a further implication, less comfortable. Much of what the defenders value in homework — the parent’s window, the family’s involvement — is valuable precisely because it is unequal. The window opens onto some households and not others, and the involvement rewards the involved. A school that prizes these goods has decided, perhaps without knowing it, to prize the advantages that some children bring from home. It may be right to do so. But it should not be surprised when the children without those advantages are found, at the end of the year, to have learned less, and it should not call the finding a result.',
    questions: [
      {
        question: 'The author’s primary conclusion is that:',
        options: [
          'schools should assign homework only when they can supply what it requires to children whose homes cannot.',
          'homework should be abolished because its benefits accrue mainly to children who were already likely to succeed.',
          'the debate over homework will remain unresolved until better studies of its effects are conducted.',
          'parents’ involvement in homework is the main source of its benefit and should be encouraged in every household.',
        ],
        correctAnswer: 0,
        explanation:
          'The fourth paragraph states the conclusion: “a school may send work home only on terms it can honor,” and where it cannot provide a room, an adult, and equal credit for work done there, “it should not assign the work.” The abolish option is explicitly rejected (“I do not conclude from this that homework should be abolished”). The better-studies option misreads the opening, where the author says the problem is that the question is badly put, not that the evidence is lacking. The parental-involvement option is the defenders’ view, which the final paragraph treats as a way of prizing unequal advantages.',
        optionExplanations: [
          'The fourth paragraph states the conclusion: “a school may send work home only on terms it can honor,” and where it cannot provide a room, an adult, and equal credit for work done there, “it should not assign the work.”',
          'The author explicitly rejects this: “I do not conclude from this that homework should be abolished.” He accepts the defenders’ point that something is learned by working alone.',
          'The opening says the problem is that “the question has been badly put,” not that the evidence is lacking; the author accepts both sides’ findings and reframes the question rather than calling for more studies.',
          'Parental involvement is a benefit the defenders value, and the final paragraph treats it as valuable “precisely because it is unequal”; the author does not recommend encouraging it in every household.',
        ],
        skill: 'main-idea',
      },
      {
        question: 'The author says that “both sides are, as far as I can tell, correct” primarily in order to:',
        options: [
          'concede that the evidence is too mixed to support any firm conclusion about homework’s effects.',
          'suggest that a question on which opposed answers are both true has been wrongly framed.',
          'praise the defenders and abolitionists for the accuracy of their observations.',
          'argue that the two sides differ more in emphasis than in substance.',
        ],
        correctAnswer: 1,
        explanation:
          'The sentence is immediately followed by “it suggests the question has been badly put,” and the next paragraph replaces “Does homework work?” with an account of homework as a transfer; the double correctness is the author’s evidence that the question is malformed. The too-mixed option treats the remark as a verdict on the evidence, whereas the author accepts both sides’ evidence. The praise option misses the critical edge (“That is what makes the argument so tiresome”). The emphasis option is wrong because the author later says each side describes a different home, a difference of substance.',
        optionExplanations: [
          'The author does not treat the remark as a verdict that the evidence is inconclusive; he accepts both sides’ evidence as correct and draws a conclusion from that very fact.',
          'The sentence is immediately followed by “it suggests the question has been badly put,” and the next paragraph replaces “Does homework work?” with an account of homework as a transfer; the double correctness is evidence that the question is malformed.',
          'The remark carries a critical edge, “That is what makes the argument so tiresome,” so it is not praise; the author faults both sides for treating their own home as the general case.',
          'The author later says the defenders and abolitionists are “describing a different home,” each treating it as the general case; that is a difference of substance, not merely of emphasis.',
        ],
        skill: 'function',
      },
      {
        question: 'A principal argues that homework is justified because it lets parents see what the school is doing. The author would most likely reply that this benefit:',
        options: [
          'is illusory, since parents rarely examine the work their children bring home from school.',
          'is the strongest available reason for assigning homework in the early years.',
          'could be preserved for every household by keeping school buildings open after hours.',
          'is real but prized partly because it is unequally available.',
        ],
        correctAnswer: 3,
        explanation:
          'The final paragraph grants that the parent’s window is among the things defenders value, then observes that it “is valuable precisely because it is unequal” and “opens onto some households and not others.” The illusory option denies the benefit, which the author does not do. The strongest-reason option is wrong because the author’s own reason for keeping homework is that something is learned by working alone, not the parental window. The open-buildings option describes the author’s remedy for the resource gap, but an open school room does not give parents a window into the school, so it does not preserve this particular benefit.',
        optionExplanations: [
          'The author does not deny the benefit; he grants that the parent’s window is among the things defenders value and says it is real. His point is about its unequal distribution, not its illusoriness.',
          'The author’s own reason for keeping homework is that “something is learned by working alone,” not the parental window; he treats the window as a good that rewards already-advantaged households.',
          'An open school room with an adult present is the author’s remedy for the resource gap, but it does not give parents a window into what the school is doing; this particular benefit is not preserved by after-hours access.',
          'The final paragraph grants that the parent’s window is valued by defenders, then observes that it “is valuable precisely because it is unequal” and “opens onto some households and not others”; the benefit is real but prized partly for its inequality.',
        ],
        skill: 'application',
      },
      {
        question: 'A school district proposes to keep its buildings open until six in the evening, with teachers present, and to count work completed there as homework. Based on the passage, the author would most likely respond that the proposal:',
        options: [
          'defeats the purpose of homework, since the child would no longer work without a teacher at her elbow.',
          'is unnecessary, because the measurable benefit of homework in the early years is close to nothing.',
          'meets the terms on which a school may legitimately send work home.',
          'would be fair only if every child, not just those without quiet homes, were required to attend.',
        ],
        correctAnswer: 2,
        explanation:
          'The author’s conditions are “a room that stays open after the last bell, an adult in it, and the understanding that work done there counts exactly as work done at a kitchen table”; the proposal supplies all three. The teacher-at-her-elbow option misreads the conditions, which explicitly call for an adult to be present. The unnecessary option adopts the abolitionists’ evidence as a verdict, whereas the author keeps homework for what is learned by working alone. The everyone-must-attend option imposes a requirement the passage never suggests; the author asks only that the resource be available to those whose homes lack it.',
        optionExplanations: [
          'The author’s conditions explicitly call for “an adult in it,” so having teachers present does not defeat the purpose; working away from the classroom, not away from every adult, is what the defenders value.',
          'This adopts the abolitionists’ evidence as a verdict, whereas the author keeps homework for what is learned by working alone; he does not regard supplying the resource as unnecessary.',
          'The author’s conditions are “a room that stays open after the last bell, an adult in it, and the understanding that work done there counts exactly as work done at a kitchen table”; the proposal supplies all three.',
          'The passage never suggests that every child must attend; the author asks only that the school supply what the work requires “to the children whose homes cannot,” leaving others free to work at their kitchen tables.',
        ],
        skill: 'new-information',
      },
      {
        question: 'The author’s claim in the final paragraph that a school prizing parental involvement “has decided … to prize the advantages that some children bring from home” assumes that:',
        options: [
          'a school cannot value parental involvement without rewarding the children who happen to receive it.',
          'schools that prize parental involvement are aware of the inequalities it produces.',
          'parents who become involved in homework are generally more educated than those who do not.',
          'children whose parents are not involved in homework learn nothing from doing it.',
        ],
        correctAnswer: 0,
        explanation:
          'The step from “valuing involvement” to “prizing the advantages some children bring from home” holds only if valuing the good entails rewarding those who have it; otherwise a school could prize involvement while neutralizing its effect on outcomes. The awareness option is contradicted by the text, which says the decision was made “perhaps without knowing it.” The more-educated option introduces a specific demographic claim the argument does not need. The learn-nothing option is far stronger than required; the author needs only that uninvolved children gain less, not that they gain nothing.',
        optionExplanations: [
          'The step from valuing involvement to “prizing the advantages that some children bring from home” holds only if valuing the good entails rewarding those who happen to receive it; otherwise a school could prize involvement while neutralizing its effect on outcomes.',
          'This is contradicted by the text, which says the school has made the decision “perhaps without knowing it”; the argument does not assume awareness of the inequalities.',
          'The argument does not need any claim about the education level of involved parents; it needs only that involvement is unequally distributed, whatever the reason for the inequality.',
          'This is far stronger than the argument requires; the author needs only that children without involved parents gain less, not that they learn nothing from the work.',
        ],
        skill: 'assumption',
      },
    ],
  },
]
