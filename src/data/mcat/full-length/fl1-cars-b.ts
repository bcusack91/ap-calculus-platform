import type { MCATPassage } from '../types'

/**
 * MCAT Full-Length Form 1 — CARS, file B (passages 6–9; 6, 6, 6, 5 questions = 23).
 *
 * Four original argument-driven passages (500–600 words each) written to the
 * 2026-09-29 rebuild blueprint: cultural anthropology (ritual food and the
 * observer's stance), music / cultural criticism (recorded vs live performance
 * and "authenticity"), political science (delegate vs trustee representation),
 * and education (what examinations should measure). Every item is answerable
 * from the passage alone; no outside knowledge is required.
 */
export const FL1_CARS_B_PASSAGES: MCATPassage[] = [
  {
    id: 'fl1-cars-b-06',
    section: 'cars',
    discipline: 'cultural anthropology',
    title: 'The Guest’s Portion',
    passageText:
      'Every fieldworker I know has a story about a meal. Mine involves a bowl of fermented fish, a river village, and a host who watched my face more closely than the bowl. I had been trained to expect the dish and to eat it, but not for what came next: the host asked, without malice, whether I believed the fish would do for me what it did for him. It was eaten on the morning after a death to keep the dead from following the living home. I did not believe this. I said I did not know. He nodded as if that were the answer he had expected from a guest, and passed the bowl.\n\nThat exchange stayed with me because it exposed a gap in what my discipline had taught me. We were told to suspend judgment: to record what people do and what they say it means, to treat belief as data. The posture is respectful in intent. It is also, I have come to think, a quiet way of refusing the invitation. My host had not asked me to record his belief. He had asked me to share his table, and a table is not a place where one suspends anything. One eats or one does not.\n\nRitual food makes the problem vivid because it cannot be admired from a distance the way a mask or a dance can. A mask hangs on a wall; the meal goes into the body. The anthropologist who photographs the carved figure and writes a careful account of its powers has not been asked to believe in the figure. The anthropologist who is handed the bowl has been asked something more intimate, and the answer “I am here to observe” is not neutral. It is a way of saying that the observer’s body is exempt from the rules that govern everyone else at the table.\n\nThe usual defense of suspended judgment is that the alternative is worse. If the fieldworker does not bracket her convictions, she will judge — find the fish disgusting or the belief childish, write it down — and the discipline will be back where it was a century ago, cataloguing the errors of others. But the worry assumes that the only alternatives are detachment and contempt, and the meal shows a third. I could eat the fish without believing in it. My host knew perfectly well that I did not share his cosmology; what he wanted to know was whether I would let his hospitality act on me anyway. The question was whether I was willing to be a guest.\n\nParticipation without belief is not hypocrisy, though it looks like it from the seminar room. Hypocrisy is pretending to a conviction one lacks. What the meal asks for is different: that one submit to a practice whose meaning one does not hold, and let it be real in the only way a practice can be, which is by being done. Every child raised inside a tradition begins this way, doing before understanding; the guest is simply a late-arriving child.\n\nI do not claim that this posture settles every case. There are practices one should not join, and a discipline that cannot say so has confused humility with abdication. But the line between joining and refusing ought to be drawn by conscience, case by case, and not by a general rule that keeps the observer’s mouth closed at every table. I ate the fish. I still do not believe it kept anyone from following me home. I am no longer sure that was the point.',
    questions: [
      {
        question: 'Which of the following best states the author’s central claim?',
        options: [
          'Fieldworkers should adopt the beliefs of their hosts for as long as they live among them.',
          'The suspension of judgment is the only defensible stance toward practices one does not share.',
          'Ritual foods are more difficult to study than masks or dances because they cannot be preserved.',
          'Joining a practice one does not believe in can be a more honest response to hospitality than observing it.',
        ],
        correctAnswer: 3,
        explanation:
          'The passage builds from the meal to the claim that “participation without belief is not hypocrisy” and that the observer’s stance is “a quiet way of refusing the invitation” — the host wanted the guest to “let his hospitality act on me anyway,” not to believe. Adopting the hosts’ beliefs is never proposed; the author eats without believing and says so. Suspended judgment is the posture the passage criticizes, not the one it defends. The difficulty of preserving food is not raised; the mask–meal contrast concerns what each asks of the observer, not what can be kept.',
        skill: 'main-idea',
      },
      {
        question: 'The host’s response to the author’s answer — nodding “as if that were the answer he had expected from a guest” — most strongly suggests that the host:',
        options: [
          'was offended that the author would not affirm the power of the dish.',
          'did not require the author to share his belief before sharing his food.',
          'regarded the author’s uncertainty as a step toward eventual belief.',
          'had asked the question chiefly to test the author’s knowledge of the ritual.',
        ],
        correctAnswer: 1,
        explanation:
          'The host expects a guest not to believe, nods, and passes the bowl anyway; later the author confirms that the host “knew perfectly well that I did not share his cosmology” and wanted only to know whether the guest would accept his hospitality. That rules out offense, since the bowl is passed without any sign of it. Nothing indicates the host hoped for or anticipated conversion. And the question was about belief, not knowledge of the ritual, so it was not a test of what the author knew.',
        skill: 'inference',
      },
      {
        question: 'The author’s claim that the reply “I am here to observe” is “not neutral” depends on which of the following assumptions?',
        options: [
          'Declining the bowl is read at the table as a claim about the observer, not merely about the food.',
          'Hosts in the author’s field site regarded every visitor who arrived as a potential convert to their beliefs.',
          'An observer who eats the dish thereby comes to accept the belief attached to it.',
          'Written accounts of a ritual are inevitably less accurate than participation in it.',
        ],
        correctAnswer: 0,
        explanation:
          'The author says the reply amounts to declaring “that the observer’s body is exempt from the rules that govern everyone else at the table.” That reading only works if refusing is taken as a statement about the observer’s standing rather than as a simple aversion to the dish; without that assumption the refusal could be neutral after all. The passage denies that hosts sought converts — the host expected a guest not to believe. It also explicitly separates eating from believing (“I could eat the fish without believing in it”). Accuracy of written accounts is never the issue; the author says the photographer of the mask “has not been asked to believe,” not that his account is wrong.',
        skill: 'assumption',
      },
      {
        question: 'Which of the following, if true, would most weaken the author’s claim that participation without belief is not hypocrisy?',
        options: [
          'Villagers in the author’s field site rarely discussed the meaning of the funeral meal among themselves.',
          'Most fieldworkers who eat ritual foods later report that their own convictions were unchanged.',
          'In the author’s field site, eating the funeral dish was itself understood as an avowal that it worked.',
          'Children in the village were permitted to skip the funeral meal until they were old enough to understand it.',
        ],
        correctAnswer: 2,
        explanation:
          'The author defines hypocrisy as “pretending to a conviction one lacks” and distinguishes it from submitting to a practice. If eating the dish were itself understood as an avowal that it worked, then eating without believing would be precisely a pretense of conviction, collapsing the distinction the claim rests on. Villagers not discussing the meal’s meaning says nothing about what eating signifies. Unchanged convictions are exactly what the author expects and reports of himself. The rule about children bears on the “late-arriving child” analogy, not on whether the guest’s participation is a pretense.',
        skill: 'strengthen-weaken',
      },
      {
        question: 'The author would most likely regard a museum curator who displays a carved funeral figure beside a plaque describing the powers villagers attribute to it as:',
        options: [
          'engaged in the same evasion as the fieldworker who refuses the bowl.',
          'doing legitimate work of a kind the meal does not permit.',
          'guilty of the contempt that the discipline abandoned a century ago.',
          'obligated to state on the plaque whether the powers are real.',
        ],
        correctAnswer: 1,
        explanation:
          'The passage grants that a mask or carved figure “can be admired from a distance” and that whoever “writes a careful account of its powers has not been asked to believe in the figure”; the problem arises only with food, which “goes into the body.” The curator is therefore doing the distanced work the author allows, not the evasion the bowl exposes. Contempt is the old habit of “cataloguing the errors of others,” and a descriptive plaque does not do that. The author never asks observers to pronounce on whether beliefs are true; the meal asks for participation, not a verdict.',
        skill: 'application',
      },
      {
        question: 'Suppose a fieldworker declines the funeral dish because of a food allergy and tells her host so. Based on the passage, the author would most likely say that her refusal:',
        options: [
          'is an instance of the detachment the passage criticizes, whatever the reason given.',
          'shows that the choice between eating and refusing is finally a matter of taste.',
          'would be acceptable only if she had first recorded the host’s beliefs about the dish.',
          'differs from the observer’s refusal because it is particular rather than a rule.',
        ],
        correctAnswer: 3,
        explanation:
          'The final paragraph objects to “a general rule that keeps the observer’s mouth closed at every table” and insists the line “ought to be drawn by conscience, case by case.” An allergy is a particular reason for this table, not a standing exemption claimed for the observer’s body, so it is not the posture under attack. The author does not treat every refusal as detachment — there are “practices one should not join.” Taste is dismissed as the concern of the fieldworker who finds the fish “disgusting,” not offered as the deciding factor. Recording beliefs first is the “treat belief as data” approach the author finds insufficient, not a precondition for refusing.',
        skill: 'new-information',
      },
    ],
  },
  {
    id: 'fl1-cars-b-07',
    section: 'cars',
    discipline: 'music / cultural criticism',
    title: 'The Take',
    passageText:
      'A friend who plays in a quartet told me she had stopped listening to her own recordings. Not out of vanity — she thought them good — but because they had begun to sound like the truth about the pieces, and she wanted to keep the pieces open. The remark inverts the complaint one usually hears. The usual complaint is that recordings are false: spliced, corrected, sweetened, assembled from a dozen takes into a performance that never happened. Live music, on this view, is authentic because it happened once, in a room, with the errors left in. My friend’s worry was the opposite. The recording was too true. It had closed the question.\n\nI want to suggest that both complaints rest on the same mistake, which is to treat the recording as a report of a performance. The questions then follow: is the report accurate, is it complete, has it been tampered with. And the answers are all unflattering, since every recording is edited, if only by the choice of where to put the microphone. But a recording is not a report. It is a made object, closer to a photograph than to a transcript, and its maker faces decisions no performer in a hall has faced: how much room to let in, whether the breath before the phrase belongs to the music, which of seven attempts at a passage says what the piece means. None of these decisions is a falsification, because there was never a single event they were obliged to be faithful to. There were seven attempts. The take is the eighth.\n\nThe word “authentic” survives this argument only if we ask what it was doing. In practice it named a preference for a certain kind of risk. When a cellist plays a difficult passage in a hall, something can go wrong, and everyone present knows it; the phrase, when it comes off, carries the memory of the possibility that it might not have. Recordings cannot carry that, and the honest thing is to say so rather than dress the preference up as a claim about truth. Risk is a real value. It is not the same value as accuracy, and confusing them has made it hard to say what a good recording actually does.\n\nWhat it does is what my friend feared: it proposes a reading and then holds it still. A concert proposes a reading and lets it vanish. Neither is superior in general; they are answers to different needs. The listener who wants to learn a piece, to hear the inner voice in the slow movement six times until it is audible everywhere, needs the still reading. The listener who wants the piece to remain unfinished, as my friend does, needs the one that vanishes. The mistake is to suppose that one of these listeners is having a genuine experience and the other a substitute.\n\nThere is a version of the authenticity argument I do respect, and it concerns not the object but the audience. In a hall, the audience is part of the performance in a plain physical sense: its silence is a condition of the music being heard at all, and the musicians play to the quality of that silence. A recording cannot ask anything of its listener, and so cannot be answered. If “live” names a claim about the listener’s obligation rather than the performer’s honesty, I will grant it. But that is an ethics of attention, not a theory of truth, and it applies as well to a bad concert as to a good one.',
    questions: [
      {
        question: 'The passage is primarily concerned with arguing that:',
        options: [
          'recordings are made objects rather than reports, so fidelity to a performance is the wrong standard for them.',
          'live performance is superior to recording because it alone exposes musicians to genuine risk.',
          'the editing of recordings has made it impossible for listeners to know how a piece was actually played in the hall.',
          'musicians should avoid listening to their own recordings so that their interpretations remain open.',
        ],
        correctAnswer: 0,
        explanation:
          'The hinge of the passage is that both the usual complaint and the friend’s worry “rest on the same mistake, which is to treat the recording as a report of a performance”; once the recording is seen as a made object, questions of accuracy and tampering lose their grip. The author denies that live performance is superior in general — “Neither is superior in general.” Editing is defended, not lamented, since “None of these decisions is a falsification.” The friend’s habit is an anecdote that opens the essay, not advice the author gives to musicians.',
        skill: 'main-idea',
      },
      {
        question: 'According to the passage, the author’s friend stopped listening to her own recordings because she:',
        options: [
          'had come to regard them as inferior to her performances in the hall.',
          'feared that hearing her errors preserved would make her cautious on stage.',
          'wanted her understanding of the pieces to remain unsettled.',
          'believed that recorded sound misrepresented the balance of the quartet.',
        ],
        correctAnswer: 2,
        explanation:
          'The friend “thought them good” but found they “had begun to sound like the truth about the pieces,” and she “wanted to keep the pieces open” — that is, to leave her reading unfinished. She did not think them inferior; the author is explicit that vanity was not the motive and that she judged them good. Nothing is said about errors making her cautious; the errors-left-in idea belongs to the usual complaint about live music. Misrepresented balance is a fidelity worry, exactly the kind of “report” thinking the author says her worry inverted.',
        skill: 'detail',
      },
      {
        question: 'The author compares a recording to a photograph rather than a transcript primarily in order to:',
        options: [
          'show that recordings, like photographs, can be altered without the listener ever noticing it.',
          'establish that a recording is an object made by choices, not a record of a prior event.',
          'suggest that visual and musical arts are subject to the same standards of truth.',
          'concede that recordings capture less of a performance than a transcript would.',
        ],
        correctAnswer: 1,
        explanation:
          'The comparison introduces the list of decisions a recording’s maker faces — room, breath, which take — and the conclusion that “there was never a single event they were obliged to be faithful to.” A photograph is something composed; a transcript is a record of what was said. Undetectable alteration would support the “tampering” complaint the author is rejecting. The passage does not extend a standard of truth across the arts; it argues that truth is the wrong standard for recordings. And it concedes nothing about recordings capturing less — it denies that capture is what recordings do.',
        skill: 'function',
      },
      {
        question: 'The author would agree with each of the following statements EXCEPT:',
        options: [
          'The edits made in assembling a recording are not falsifications.',
          'The possibility of failure gives a live performance a value recordings lack.',
          'An audience’s silence is a physical condition of a concert, not merely a courtesy.',
          'A concertgoer has a genuine musical experience where a record listener has a substitute.',
        ],
        correctAnswer: 3,
        explanation:
          'The author calls it a mistake “to suppose that one of these listeners is having a genuine experience and the other a substitute,” so the genuine-versus-substitute statement is the one the author rejects. The other three are the author’s own positions: edits are not falsifications because there was no single event to be faithful to; risk “is a real value” that “Recordings cannot carry”; and the audience’s silence “is a condition of the music being heard at all,” a “plain physical sense” in which the audience is part of the performance.',
        skill: 'inference',
      },
      {
        question: 'Suppose a label releases a concert recording made in a single unedited take, with the audience’s coughs and the cellist’s slips left in. The author would most likely say that this recording:',
        options: [
          'remains a made object and still cannot carry the hall’s risk.',
          'is the first kind of recording that can honestly be called a report.',
          'satisfies the authenticity ideal that edited recordings fail to meet.',
          'will be less useful to a listener who wants a still reading of the piece.',
        ],
        correctAnswer: 0,
        explanation:
          'The author holds that “every recording is edited, if only by the choice of where to put the microphone,” so even a single take is a made object shaped by decisions; and the value of risk depends on everyone present knowing that “something can go wrong,” which a fixed recording cannot reproduce for later listeners. Calling it a report reinstates the very framing the author rejects. The author does not endorse an authenticity ideal for objects at all — the only version granted concerns the listener’s obligation, not the recording. And a single take still “holds still” a reading, so it serves the learning listener as well as any other recording.',
        skill: 'new-information',
      },
      {
        question: 'A listener who plays one recording of a sonata repeatedly until she can hear its inner voice everywhere is, in the author’s view, most accurately described as:',
        options: [
          'using a substitute for the experience a concert would give her.',
          'closing the question of the piece in the way the author’s friend feared.',
          'meeting a genuine need that a vanishing performance could not serve.',
          'confusing the value of accuracy with the value of risk.',
        ],
        correctAnswer: 2,
        explanation:
          'This listener is the author’s own example of someone who “needs the still reading,” one of two different needs the author says recordings and concerts respectively answer; the author denies that either experience is a substitute for the other. The friend’s fear is a legitimate but different need — keeping the piece unfinished — and the author does not treat the learning listener as making a mistake. Confusing accuracy with risk is the error of critics who “dress the preference up as a claim about truth,” not something a listener does by studying a recording.',
        skill: 'application',
      },
    ],
  },
  {
    id: 'fl1-cars-b-08',
    section: 'cars',
    discipline: 'political science',
    title: 'Whose Wishes?',
    passageText:
      'The oldest question about representation is usually put as a choice. Should a legislator vote as her constituents wish, or as her own judgment directs? The delegate answers the first; the trustee, the second; and generations of students have been asked to pick a side. I want to argue that the question, as posed, cannot be answered, because it treats the constituents’ wishes as a settled quantity that the legislator either transmits or overrides. They are not settled. They are, in large part, produced by the process of being represented, and a legislator who understands this has a different job than either the delegate or the trustee.\n\nConsider what it would take to be a faithful delegate. The legislator would need to know what her constituents want on each measure that comes before her. On a handful of questions — the ones that reach the district as slogans — she can find out. On the rest, which is to say on most of the votes she will actually cast, her constituents have no wish at all, because they have never heard of the measure and would need an afternoon’s explanation to form a view. The delegate, confronting this, does not transmit a wish. She guesses at what her constituents would want if they knew, which is a form of judgment, and so she is a trustee wearing a delegate’s clothes.\n\nThe trustee’s position is honest about this but draws the wrong conclusion. Because constituents cannot follow every measure, the trustee reasons, the legislator must decide for them, answering only at the next election for the whole record. This gets the diagnosis right and the remedy wrong. The gap between what constituents want and what they would want if they understood is not a reason to set their wishes aside. It is the thing representation exists to close. A legislator who votes her own judgment and explains nothing has not served her constituents better than a delegate; she has merely declined to give them the means of having a view on the question at all.\n\nThe defender of the delegate will object that this makes the legislator the author of the very opinion she then claims to obey, and that such a circle is no better than the trustee’s paternalism. The objection has force, and I do not think it can be fully answered. But it applies to every form of representation whatever. Constituents form their views from newspapers, neighbors, and parties, none of which are neutral; the legislator who adds her voice is one influence among many, and the one most exposed to the district’s reply. The circle cannot be broken. It can be made wide enough that the constituents get a turn.\n\nWhat follows in practice is not a rule for voting but a rule for what the legislator owes before and after the vote. She owes an account: what the measure does, what she thinks it will cost the district, why she intends to vote as she does. If the account provokes a reply that changes her mind, she should change it, and say so. If it does not, she should vote her judgment and stand ready to be contradicted. The test of representation on this view is not whether the vote matched a poll but whether the district, after the vote, understands the question better than it did before.\n\nI concede that this describes a legislator with more time and a district with more patience than most possess. But the rival descriptions are not more realistic. They are simply quieter about what they assume.',
    questions: [
      {
        question: 'Which of the following best expresses the main idea of the passage?',
        options: [
          'Legislators should vote by their own judgment on every measure and answer for the whole record only when the next election comes.',
          'A legislator’s job is to shape and answer to constituents’ views, since those views are partly a product of representation.',
          'The delegate model of representation is the only one consistent with democratic legitimacy.',
          'Constituents lack views on most legislation, which shows that representation cannot be democratic.',
        ],
        correctAnswer: 1,
        explanation:
          'The author’s thesis is that constituents’ wishes “are, in large part, produced by the process of being represented,” so the legislator’s job is neither to transmit nor to override them but to give an account, invite a reply, and answer to it. Voting one’s own judgment and answering only at election time is the trustee position, which the author says gets “the remedy wrong.” The delegate model is shown to be impossible on most votes, not uniquely legitimate. The observation that constituents lack views on most measures is the author’s starting point, but the conclusion drawn is that representation must close the gap, not that it cannot be democratic.',
        skill: 'main-idea',
      },
      {
        question: 'The author’s description of the delegate as “a trustee wearing a delegate’s clothes” implies that the delegate:',
        options: [
          'secretly prefers her own conscience while claiming to follow the district.',
          'faces re-election on her whole record just as a trustee would.',
          'misleads constituents about which measures are before the legislature.',
          'must exercise her own judgment on most votes despite claiming only to transmit.',
        ],
        correctAnswer: 3,
        explanation:
          'On most votes constituents “have no wish at all,” so the delegate “guesses at what her constituents would want if they knew, which is a form of judgment.” The phrase says that the delegate is doing what a trustee does — judging — under a delegate’s description. Nothing suggests she prefers her own conscience or is being deceptive; the point is structural, not about motives. Re-election on the whole record is the trustee’s remedy, mentioned in the next paragraph, not what the clothing image conveys. And the delegate is not accused of hiding measures from constituents; constituents simply have not heard of them.',
        skill: 'inference',
      },
      {
        question: 'The author admits that the delegate defender’s objection “cannot be fully answered” primarily in order to:',
        options: [
          'signal a retreat from the claim that representation produces constituents’ wishes.',
          'show that the trustee model is ultimately the more defensible of the two.',
          'recast the objection as one that applies to every form of representation alike.',
          'prepare the reader for the concession about time and patience in the final paragraph.',
        ],
        correctAnswer: 2,
        explanation:
          'Immediately after the admission the author says the objection “applies to every form of representation whatever,” since constituents’ views are always shaped by non-neutral sources; the concession is a step toward showing that the circle is universal and can only be widened, not escaped. The author does not retreat from the production claim — the reply depends on it. The trustee model is not rehabilitated; the author has already said it draws “the wrong conclusion.” The final paragraph’s concession about time and patience is a separate point about realism, not what this admission sets up.',
        skill: 'function',
      },
      {
        question: 'According to the passage, a legislator meeting the author’s standard would do which of the following?\n\nI. Explain a measure and her intended vote to the district before voting\nII. Change her vote if the district’s reply changes her mind\nIII. Vote as a district poll directs on each measure',
        options: [
          'I and II only',
          'I and III only',
          'II and III only',
          'I, II, and III',
        ],
        correctAnswer: 0,
        explanation:
          'The author’s rule concerns what the legislator owes “before and after the vote”: an account of the measure and her intention (I), and a change of vote, announced, if the reply changes her mind (II). Voting as a poll directs (III) is explicitly rejected — the test “is not whether the vote matched a poll” — and the second paragraph argues that polls on unfamiliar measures do not record wishes at all. Any option containing III is therefore wrong.',
        skill: 'detail',
      },
      {
        question: 'A legislator who commissions a poll of her district before every vote and votes as the majority directs, without explaining the measures, would in the author’s view:',
        options: [
          'be a faithful delegate whose method the passage endorses as realistic.',
          'avoid the circle the delegate’s defender warns against, since she adds no voice of her own.',
          'satisfy the author’s test as long as her votes match the polls.',
          'fail to close the gap that representation exists to close.',
        ],
        correctAnswer: 3,
        explanation:
          'The author says the gap between what constituents want and what they would want if they understood “is the thing representation exists to close,” and that closing it requires an account. A legislator who polls without explaining measures the district has never heard of records guesses, not wishes, and leaves the district no better informed. The passage does not endorse the delegate method as realistic; it argues that on most votes it is impossible. Adding no voice does not escape the circle, since newspapers and parties still shape the views polled. And matching polls is precisely what the author says the test is not.',
        skill: 'application',
      },
      {
        question: 'Which of the following, if true, would most weaken the author’s reply to the objection that the legislator becomes the author of the opinion she obeys?',
        options: [
          'Newspapers, neighbors, and parties are frequently unreliable sources of information for constituents who follow legislation.',
          'Constituents’ views on a measure are shaped far more by their own legislator’s account than by any other source.',
          'Most legislators already give their districts an account of their votes, though only after the fact.',
          'Voters seldom change their minds about a measure once the legislature has already passed it.',
        ],
        correctAnswer: 1,
        explanation:
          'The author’s reply is that the legislator “is one influence among many,” so the circle is wide enough for constituents to get a turn. If her account dominated all other sources, she would in effect be authoring the opinion she then obeys — exactly the objection — and the many-influences reply would fail. Unreliable newspapers and parties do not weaken the reply; they confirm that other sources are non-neutral, which is the author’s own point. Legislators explaining votes after the fact is compatible with the reply and touches only its timing. Voters not changing their minds after passage concerns a period the author’s account does not depend on.',
        skill: 'strengthen-weaken',
      },
    ],
  },
  {
    id: 'fl1-cars-b-09',
    section: 'cars',
    discipline: 'education',
    title: 'What the Test Teaches',
    passageText:
      'Ask what schools should teach and you will be given a list; ask what they should measure and you will be told, a little impatiently, that they should measure what they teach. The order of the two questions seems obvious. It is backwards. In any school that answers to someone outside itself — a ministry, a board, the parents who pay — what is measured becomes, within a few years, what is taught, and the list drawn up in answer to the first question survives only where it happens to overlap with the answer to the second. Anyone who has watched a syllabus shrink toward an examination knows this. The test is not a report on the curriculum. It is the curriculum’s author, and it writes with a heavier hand than any committee.\n\nIf that is right, then the question of what to measure cannot be settled by asking what is easiest to score. It must be settled by asking what we would be content to see taught to the exclusion of everything else — because that, in the end, is what will happen. The standard is severe, and it disqualifies most of what examinations currently test. Recall of facts is easy to score and pleasant to see in a child, but no one would choose a school that taught only recall; and yet by testing it we have chosen exactly that, one year at a time.\n\nThe usual reply is that the valuable things cannot be measured, and that we should therefore test the measurable and trust the schools to teach the rest. I used to accept this. I no longer do, for two reasons. The first is that the trust never materializes. The moment a school is compared with another on a measure, the rest is what gets cut, and the people cutting it are not villains; they are responding to the only signal they have been given. The second reason is that the claim itself is too convenient. Much that we call unmeasurable is merely expensive to measure. Whether a student can find the flaw in an argument, or sustain a piece of work over a month without being told what to do next, can be assessed — by a person, over time, with judgment. What cannot be done is to assess it in three hours with a machine, and it is the three hours and the machine we have grown attached to, not the assessment.\n\nThere is a harder objection, and I want to state it fairly. Judgment-based assessment is expensive, slow, and open to bias in a way that a scored paper is not; the machine, whatever its narrowness, treats every child the same. This is true, and it is the strongest argument for the tests we have. But notice what it concedes. It concedes that the tests measure what they measure because it is fair and cheap to do so, not because it is what we want children to become. A school system built on that concession has decided to teach the fair and cheap. It should at least say so.\n\nI do not propose to abolish examinations. I propose that the examiner be made to answer the question the school is asked: not “does this test what was taught,” but “would you be satisfied if this were all that was taught.” Any test that fails that question is not a neutral instrument. It is a syllabus, and a poor one.',
    questions: [
      {
        question: 'The author’s central argument is that:',
        options: [
          'examinations should be abolished because they inevitably narrow what schools are able to teach children.',
          'schools should be trusted to teach the valuable things that examinations cannot measure.',
          'a test should be chosen by asking whether its content would be acceptable as all that is taught.',
          'judgment-based assessment is fairer to children than machine-scored examinations can be.',
        ],
        correctAnswer: 2,
        explanation:
          'Because “what is measured becomes, within a few years, what is taught,” the author’s proposed standard is to ask “what we would be content to see taught to the exclusion of everything else” — restated at the close as whether one “would be satisfied if this were all that was taught.” The author explicitly does “not propose to abolish examinations.” Trusting schools to teach the rest is the “usual reply” the author rejects because “the trust never materializes.” And the author concedes that judgment-based assessment is more open to bias than a scored paper, so the fairness claim is the opposite of the author’s position.',
        skill: 'main-idea',
      },
      {
        question: 'The author says that “the trust never materializes” in order to describe what happens when:',
        options: [
          'schools ranked against one another drop whatever the ranking ignores.',
          'examiners decline to assess the qualities that can only be judged over time.',
          'parents lose confidence in schools that test recall alone.',
          'teachers fail to follow the syllabus a committee drew up.',
        ],
        correctAnswer: 0,
        explanation:
          'The “trust” is the usual reply’s hope that schools, tested only on the measurable, will teach the rest anyway; the author says it fails because once “a school is compared with another on a measure, the rest is what gets cut.” Examiners declining to assess judgment-based qualities is the author’s second reason (the claim is “too convenient”), not the first. Parents’ confidence is never discussed. Teachers ignoring a committee’s syllabus reverses the mechanism: the syllabus shrinks toward the test, not away from the committee.',
        skill: 'detail',
      },
      {
        question: 'A school that replaces its year-end paper with a month-long independent project assessed by a teacher’s judgment would, on the author’s view, most likely:',
        options: [
          'have chosen an instrument that no longer functions as a syllabus.',
          'have sacrificed the equal treatment of children for no gain.',
          'be trusting teachers to teach what cannot be measured.',
          'be paying a cost the author regards as worth paying.',
        ],
        correctAnswer: 3,
        explanation:
          'Sustaining “a piece of work over a month without being told what to do next” is the author’s own example of something assessable “by a person, over time, with judgment,” and the author grants that such assessment is expensive, slow, and more open to bias yet still prefers it to teaching “the fair and cheap.” Every test is a syllabus on the author’s account, so the project is not exempt; it is simply a better one. The equal-treatment objection is stated fairly but answered, and the author sees a gain. Trusting teachers to teach the unmeasured is the “usual reply” the author rejects; here the school is measuring the thing directly.',
        skill: 'application',
      },
      {
        question: 'The author’s attitude toward the objection that judgment-based assessment is biased and expensive is best described as:',
        options: [
          'dismissive, since the objection assumes the machine is fairer than it is.',
          'respectful, while holding that the objection concedes the author’s point.',
          'ambivalent, since the objection persuades the author to keep examinations.',
          'alarmed, since the objection reveals that bias is unavoidable in schools.',
        ],
        correctAnswer: 1,
        explanation:
          'The author wants “to state it fairly,” calls it “true” and “the strongest argument for the tests we have,” and then argues that it “concedes that the tests measure what they measure because it is fair and cheap,” not because it is what we want — respect followed by a turn. The author never disputes that the machine treats every child the same, so the objection is not dismissed on that ground. The decision to keep examinations comes from the author’s own proposal, not from being persuaded by this objection. Nothing in the passage expresses alarm about bias; the author accepts it as a cost.',
        skill: 'tone',
      },
      {
        question: 'Which of the following findings would most strengthen the author’s claim that what is measured becomes what is taught?',
        options: [
          'Schools that are not ranked against one another keep broader syllabi than ranked schools with the same staff.',
          'Students who score well on recall examinations also tend to score well on extended essays and projects.',
          'Committees that design curricula rarely consult the examiners who will test what they have written.',
          'Teachers in ranked schools report that they would prefer to teach far more than the examination covers.',
        ],
        correctAnswer: 0,
        explanation:
          'The author’s mechanism is that external comparison on a measure drives the cutting of everything the measure omits. Finding that unranked schools keep broader syllabi than otherwise similar ranked schools is direct evidence that the measure, not the staff, narrows what is taught. Recall scores predicting essay scores would if anything support the “usual reply” that testing the measurable suffices. Committees not consulting examiners bears on how tests are written, not on whether tests shape teaching. Teachers wishing they could teach more shows the narrowing is regretted, but does not by itself show that measurement caused it.',
        skill: 'strengthen-weaken',
      },
    ],
  },
]
