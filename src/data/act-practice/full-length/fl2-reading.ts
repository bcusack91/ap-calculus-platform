/**
 * Enhanced ACT full-length Form 2 — Reading (4 passages × 9 questions = 36, 40 min).
 * Passages: two estranged brothers driving a moving truck (literary narrative) ·
 * the economics of tipping (social science) · paired passages by two critics on
 * the Harlem photographer James Van Der Zee (humanities) · urban heat islands
 * (natural science).
 */
import type { ActFLPassage } from './types'

const PASSAGE_1: ActFLPassage = {
  id: 'act-fl2-r-01',
  title: 'Clearance',
  kind: 'literary-narrative',
  text: `The truck stood thirteen and a half feet tall. My brother had rented it in Columbus, loaded it himself, and called me only after the rental agent told him that a truck that size should not be driven nearly two thousand miles by one person alone. That was how Gavin put it on the phone: the agent's idea, not his. I had not heard his voice in almost six years.

I flew to Columbus anyway. I told myself it was for our mother, who had cried when I said I was going, and not for Gavin, who met me at the airport curb and said, "You're late," although my flight had landed eleven minutes early.

We did not talk about the house. That was the rule neither of us had to state. When our father died, Gavin had sold the house on Larkin Street within a month, while I was still in Portland trying to decide which of Dad's things I wanted. By the time I flew back, a stranger's car was in the driveway and everything I might have chosen had gone to an estate sale or to the curb. I had said some things on the phone then. Gavin had said some things back. After that we let our mother carry messages between us, like a ferry running between two islands that had no other way to reach each other.

Now he was moving to Tucson for a job, and I was riding beside him in a cab so high that the cars below us looked like toys.

Gavin drove the first day. He drove the way he did everything, with both hands on the wheel and the radio off, and every two hours exactly he stopped to walk once around the truck and tug at the padlock on the cargo door. In Indiana I offered to take a turn. He said he was fine. In Illinois I offered again, and he said the truck pulled to the right and I wasn't used to it. I said I had driven trucks before. He said not this one.

The second morning, outside Joplin, he finally handed me the keys, but only because he had been up half the night with a toothache and could not stop holding his jaw. I adjusted the seat and the mirrors. He said the right one was too far out. For an hour neither of us spoke, and the only sound was the cargo shifting behind us whenever I braked, a heavy, hollow knock like someone trying a door.

"What's back there that knocks like that?" I finally asked.

After a while he said, "The desk."

I knew which desk. Our father's rolltop, with the initials I had carved into its side when I was nine. I had assumed it was sold with everything else.

"You kept it," I said.

"I kept a few things." He looked out his window at the flat brown fields. "I kept the things I thought you'd ask about. I was going to tell you. Then you said what you said, and I thought, fine, let him think it."

I could have answered that. Six years earlier, I would have. Instead I listened to the desk shift again as I slowed for an exit, and I thought about Gavin alone in an empty house that month, deciding, one object at a time, what his brother would want.

In Oklahoma City we stopped for gas, and the station's canopy had a sign that read CLEARANCE 12 FT 6 IN. I would have driven straight under it. Gavin saw the sign first and got out, and he stood in the lot waving me back, his hand flat and patient, calling "Keep coming, keep coming," until I had swung wide to the truck pumps, where the roof was higher.

When he climbed back in, he did not say anything about the mirrors.

We drove the rest of the way in shifts, and somewhere in New Mexico he fell asleep against the window with his jaw in his hand. I turned the radio on, low, and found a station playing the kind of old country songs our father used to hum in the garage. I left it there until the signal faded into static, and then I left the static on for a while too, because Gavin was still asleep and I did not want the quiet to be the thing that woke him.`,
  questions: [
    {
      id: 'act-fl2-r-01-q1',
      question: 'Which of the following best describes the passage as a whole?',
      options: [
        'Two brothers argue openly about a house sale and resolve never to speak again.',
        'A narrator recalls childhood afternoons spent with his father in the garage.',
        'A man traveling with his brother begins to see an old grievance differently.',
        'Two brothers hurry to return a rental truck to Tucson before a deadline.',
      ],
      correctIndex: 2,
      explanation:
        'The passage follows the narrator through a long drive with Gavin, during which he learns that Gavin kept their father\'s desk and starts to view the house sale, and his brother, with more sympathy.',
      optionExplanations: [
        'The brothers avoid the subject of the house; not talking about it is "the rule neither of us had to state." By the end they are cooperating, so a final break is the opposite of what happens.',
        'The garage appears only in the last paragraph, when an old song reminds the narrator of his father. That brief memory is a detail, far too narrow to describe the whole passage.',
        'Correct. During the drive the narrator learns that Gavin saved the desk and other things for him, and he begins to imagine that month from Gavin\'s side instead of answering back as he once would have.',
        'Gavin is moving to Tucson for a job, and no deadline is ever mentioned. This invents a plot that the passage does not contain and ignores its focus on the brothers\' relationship.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-r-01-q2',
      question: 'According to the passage, Gavin finally let the narrator drive because Gavin:',
      options: [
        'had been kept awake much of the night by a toothache.',
        'had decided that the truck no longer pulled to the right.',
        'had been told by the rental agent to share the driving.',
        'had grown tired of the flat brown fields of Missouri.',
      ],
      correctIndex: 0,
      explanation:
        'The narrator says Gavin handed over the keys outside Joplin "only because he had been up half the night with a toothache."',
      optionExplanations: [
        'Correct. The narrator states that Gavin gave up the keys "only because he had been up half the night with a toothache," and he is still holding his jaw when he later falls asleep.',
        'The pull to the right was Gavin\'s excuse for refusing in Illinois. Nothing suggests he changed his mind about the truck; he gave in only because of the toothache.',
        'The agent\'s warning explains why Gavin called the narrator in the first place, not why he gave up the wheel on the second morning. This confuses the reason for the trip with the reason for the switch.',
        'The flat brown fields are what Gavin looks at while explaining the desk, after the narrator is already driving. The passage never says the scenery made him want to stop driving.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-r-01-q3',
      question:
        'The narrator\'s comparison of his mother to "a ferry running between two islands" mainly emphasizes that:',
      options: [
        'the mother lived a long way from both of her sons.',
        'the brothers had moved to cities on opposite coasts.',
        'the mother had grown weary of the brothers\' quarrels.',
        'the brothers communicated only through their mother.',
      ],
      correctIndex: 3,
      explanation:
        'The image follows "we let our mother carry messages between us": like a ferry linking islands with "no other way to reach each other," she was the brothers\' only connection.',
      optionExplanations: [
        'The ferry image is about the mother carrying messages, not about where she lived. The passage never says how far she lived from either son.',
        'The islands stand for the two brothers cut off from each other, not for literal places. Columbus and Portland are mentioned, but the comparison is about communication, not geography.',
        'The mother cries when the narrator says he is going, but the passage never says she was tired of their quarrel. The comparison describes her role, not her feelings about it.',
        'Correct. The sentence says the brothers "let our mother carry messages between us," and two islands with "no other way to reach each other" stresses that she was their only line of contact.',
      ],
      skill: 'CS',
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-r-01-q4',
      question:
        'Gavin\'s statement "I kept the things I thought you\'d ask about" most strongly suggests that, after their father died, Gavin had:',
      options: [
        'asked their mother to choose the items the narrator should receive.',
        'given more thought to his brother\'s wishes than the narrator knew.',
        'planned from the start to bring the desk with him to a new home.',
        'regretted selling the house and tried without success to buy it back.',
      ],
      correctIndex: 1,
      explanation:
        'Gavin set aside things for the narrator without telling him; the narrator then pictures Gavin deciding "one object at a time, what his brother would want," an effort the narrator had not known about.',
      optionExplanations: [
        'The mother carried messages only after the quarrel. Gavin says he himself kept "the things I thought you\'d ask about," and the narrator pictures Gavin alone making those choices.',
        'Correct. Gavin quietly saved what he expected his brother to want, and the narrator, who "had assumed it was sold," now pictures Gavin choosing object by object with him in mind.',
        'Gavin says he kept the items because he thought his brother would ask about them, which points to saving them for the narrator. Nothing suggests he always meant the desk for himself.',
        'The passage gives no sign that Gavin regretted the sale or tried to undo it. A stranger\'s car was soon in the driveway, and the passage never mentions any attempt to buy the house back.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-r-01-q5',
      question: 'Which of the following events occurs first chronologically?',
      options: [
        'Gavin waves the truck around a low gas-station canopy.',
        'The narrator offers to drive in Illinois.',
        'The narrator asks what is making a knocking sound.',
        'Gavin hands the narrator the keys outside Joplin.',
      ],
      correctIndex: 1,
      explanation:
        'The Illinois offer comes on the first day; Gavin hands over the keys the second morning; the narrator then asks about the knocking; the gas stop in Oklahoma City comes later still.',
      optionExplanations: [
        'The canopy episode happens in Oklahoma City, after the narrator has taken over the driving and learned about the desk, so it is one of the later events listed.',
        'Correct. The narrator offers to drive in Illinois during the first day, while Gavin is still at the wheel, which comes before the Joplin handoff, the question about the knock and the gas stop.',
        'The narrator asks about the knock after "an hour" of silence at the wheel, so this follows the Joplin handoff and cannot be the earliest event.',
        'Gavin hands over the keys on "the second morning," after he has already turned down the narrator\'s offers in Indiana and Illinois on the first day.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-r-01-q6',
      question: 'The episode at the gas station in Oklahoma City mainly serves to:',
      options: [
        'explain why the brothers soon stop taking turns at the wheel.',
        'reveal that the narrator had never driven a large truck before.',
        'show the brothers cooperating in a way that eases their tension.',
        'suggest that Gavin remains angry about the way the narrator drives.',
      ],
      correctIndex: 2,
      explanation:
        'Gavin patiently guides the narrator around the low canopy, and afterward he "did not say anything about the mirrors," a sign that the brothers are starting to work together.',
      optionExplanations: [
        'The brothers do the opposite: right after this, they drive "the rest of the way in shifts." The episode leads into sharing the driving, not ending it.',
        'The narrator says earlier, "I had driven trucks before." Missing the clearance sign shows a moment of inattention, not a lack of experience, so this contradicts the passage.',
        'Correct. Gavin\'s flat, patient hand and steady "Keep coming" guide the narrator safely, and afterward he drops his complaint about the mirrors, showing new trust between them.',
        'Gavin\'s manner is "patient," and afterward he stops criticizing the mirrors. Both details point away from anger, so this reverses the tone of the scene.',
      ],
      skill: 'CS',
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-r-01-q7',
      question: 'In the final paragraph, the narrator\'s attitude toward Gavin is best described as:',
      options: [
        'quietly protective.',
        'openly resentful.',
        'nervously apologetic.',
        'coolly indifferent.',
      ],
      correctIndex: 0,
      explanation:
        'The narrator keeps the radio low and even leaves the static on because he "did not want the quiet to be the thing that woke him," a small, careful act of looking after his sleeping brother.',
      optionExplanations: [
        'Correct. The narrator plays the radio "low" and leaves the static on so a sudden silence will not wake Gavin, quietly guarding his brother\'s rest.',
        'Resentment belongs to the earlier quarrel. In the final paragraph the narrator takes care not to wake Gavin, which shows warmth rather than bitterness.',
        'The narrator never apologizes or worries about what he said six years ago in this paragraph. He acts calmly and gently, without any sign of nervousness.',
        'Someone indifferent would not bother about whether a silence might wake his brother. The narrator\'s care over such a small thing shows attention, not coolness.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-r-01-q8',
      question:
        'As it is used in the phrase "a heavy, hollow knock like someone trying a door," the word trying most nearly means:',
      options: [
        'attempting to persuade.',
        'putting on trial.',
        'wearing down the patience of.',
        'testing to see if it opens.',
      ],
      correctIndex: 3,
      explanation:
        'To "try" a door is to test whether it will open; the knock of the shifting desk sounds like someone pushing on a door from the other side.',
      optionExplanations: [
        'Persuading applies to people, not doors. This sense of "try" (to try to convince) does not fit an image of a knock against a door.',
        'Putting someone on trial is a legal sense of "try." A door cannot be tried in court, so this meaning makes no sense in the image.',
        'This is the sense in "trying my patience." It describes wearing a person down, which does not fit the image of a knock sounding against a door.',
        'Correct. Someone "trying a door" pushes or rattles it to see whether it will open, which matches the heavy, hollow knock of the desk shifting in the cargo space.',
      ],
      skill: 'CS',
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-r-01-q9',
      question:
        'The narrator\'s report that Gavin described the rental agent\'s warning as "the agent\'s idea, not his" most strongly suggests that Gavin:',
      options: [
        'had already found another driver before he called.',
        'doubted that the rental agent knew much about trucks.',
        'was reluctant to admit he wanted his brother\'s help.',
        'hoped the narrator would pay for half of the rental.',
      ],
      correctIndex: 2,
      explanation:
        'By insisting the idea came from the agent, Gavin avoids saying that he himself wanted the narrator along, a guardedness that matches his later refusals to let the narrator drive.',
      optionExplanations: [
        'Gavin calls the narrator and the narrator flies out to help, so there is no sign of another driver. This contradicts the setup of the trip.',
        'Gavin follows the agent\'s advice by calling his brother, so he hardly doubts it. His point is about whose idea it was, not whether the agent was right.',
        'Correct. Crediting the agent lets Gavin ask for help without admitting he wants it, which fits his pride throughout the first day, when he refuses each offer to share the driving.',
        'Money is never mentioned. Nothing in the passage connects Gavin\'s phrasing to the cost of the truck, so this invents a motive.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
  ],
}

const PASSAGE_2: ActFLPassage = {
  id: 'act-fl2-r-02',
  title: 'The Puzzle of the Tip',
  kind: 'social-science',
  text: `To an economist, the tip is one of the stranger customs of everyday life. A diner finishes a meal, the server brings the check, and the transaction, in every legal sense, is complete. Then the diner adds a sum that no law requires, often 15 to 20 percent of the bill in the United States, and leaves it for someone the diner may never see again.

The standard explanation treats the tip as a kind of performance pay. A restaurant manager cannot watch every table, but the customer can, so the customer becomes the manager's eyes: good service earns a large tip, poor service a small one, and servers have a reason to work hard. The theory is tidy, and it makes two predictions. Tips should rise and fall closely with the quality of service. And customers who will never return, such as a family stopping at a highway diner on a cross-country trip, should tip little or nothing, since nothing they leave can buy them better service next time.

Neither prediction holds up well. Most travelers tip at the highway diner much as they would at their neighborhood restaurant. And when Michael Lynn, a professor of consumer behavior at Cornell University, combined the results of a number of studies, he found that customers' ratings of the service they received explained only a small fraction of the differences in the tips they left. Other factors mattered as much or more, among them the size of the bill and small gestures that have little to do with how promptly the food arrives. In various experiments, servers who introduced themselves by name, crouched to eye level beside the table, or wrote "thank you" on the check collected larger tips than those who did not.

If tips are not mainly payment for service, what are they? Many researchers now describe tipping as a social norm, a rule enforced less by self-interest than by feeling. Diners tip to avoid the server's disapproval, to avoid looking cheap in front of their companions, and, perhaps most of all, to avoid the guilt of breaking a rule everyone knows. Norms of this kind can drift. Etiquette guides in the early twentieth century often suggested about 10 percent; later, 15 percent became the usual advice; today many recommend 20. Because the expected amount has crept upward, a tip that once met the standard now reads as a complaint.

The custom was not always so secure. When tipping spread in the United States after the Civil War, many Americans regarded it as an aristocratic European habit at odds with democratic ideals, and several states passed laws against it in the early 1900s. Those laws proved difficult to enforce and were repealed within about two decades. Today tips are woven into the wage system itself: federal law allows employers of tipped workers to pay a cash wage well below the standard minimum wage, provided that tips bring the worker's total pay up to at least that minimum.

That arrangement has costs. A server's income can swing widely from one night to the next, and cooks and dishwashers, who often receive no share of the tips, may earn less than the servers they work beside. Some restaurants have tried to abolish tipping by raising menu prices and paying staff higher wages, and several later went back. Among the reasons owners gave: customers balked at menus that looked more expensive than those of competitors, even when the total cost of a meal came out about the same.

Now the norm is spreading in a new direction. Payment screens at coffee counters and bakeries invite a tip for a transaction that takes less than a minute, and many customers say they feel pressured to tap a button they resent. Whether this expansion strengthens the custom or finally provokes a backlash remains an open question. What researchers have learned so far is that the tip survives not because it is efficient, but because breaking the rule feels worse than following it.`,
  questions: [
    {
      id: 'act-fl2-r-02-q1',
      question: 'Which of the following best states the main idea of the passage?',
      options: [
        'Tipping endures less as a reward for good service than as a social rule people feel bound to obey.',
        'Tipping should be abolished because it leaves many kitchen workers earning less than servers do.',
        'Customers tip generously mainly because they expect to receive better service on later visits.',
        'Tipping in the United States began as a protest against aristocratic customs brought from Europe.',
      ],
      correctIndex: 0,
      explanation:
        'The passage tests the performance-pay theory, finds that its predictions fail, and concludes that the tip survives as a norm because "breaking the rule feels worse than following it."',
      optionExplanations: [
        'Correct. The passage shows that tips track service only weakly, describes tipping as "a social norm" enforced by feeling, and ends by saying the custom survives because breaking the rule feels worse than following it.',
        'The pay gap between servers and kitchen staff is listed as one cost of tipping, but the author never calls for abolishing the custom. This turns a supporting detail into a recommendation the passage does not make.',
        'This is the prediction the passage rejects. Travelers who will never return tip much as regulars do, so the hope of better service on a later visit cannot be the main reason people tip.',
        'This reverses the history. Critics objected to tipping because it seemed an aristocratic European habit; tipping did not begin as a protest against such customs.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-r-02-q2',
      question:
        'According to the passage, the standard explanation of tipping predicts that a family stopping at a highway diner far from home would:',
      options: [
        'tip more than usual to make up for a long wait.',
        'tip about as much as diners at their local restaurant.',
        'tip only if the server offered a name at the start.',
        'leave almost nothing, since they have no return visit to secure.',
      ],
      correctIndex: 3,
      explanation:
        'Under the performance-pay theory, a tip buys better service next time, so customers who will never return "should tip little or nothing."',
      optionExplanations: [
        'The theory links tips to service quality and future visits, and the passage never mentions a long wait. Nothing in the standard explanation predicts that travelers would tip extra.',
        'This is what travelers actually do, according to the passage, not what the theory predicts. The gap between the two is exactly why the author says the prediction does not hold up.',
        'Servers who introduce themselves come up in experiments that challenge the theory. The standard explanation itself makes no prediction about names.',
        'Correct. The theory holds that tips buy better service next time, so a family that will never come back has nothing to secure by tipping and, by its logic, should leave little or nothing.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-r-02-q3',
      question: 'According to the passage, Lynn\'s analysis found that customers\' ratings of service:',
      options: [
        'predicted tip amounts better than the size of the bill did.',
        'were only a weak predictor of how much a customer would tip.',
        'were higher when the server crouched beside the table.',
        'explained most of the differences in the tips customers left.',
      ],
      correctIndex: 1,
      explanation:
        'Lynn found that service ratings "explained only a small fraction of the differences in the tips," so knowing how a diner rated the service reveals little about the size of the tip.',
      optionExplanations: [
        'The passage says the size of the bill was among the factors that "mattered as much or more" than service. Ratings did not outperform it, so this reverses the finding.',
        'Correct. If ratings explained "only a small fraction" of the differences in tips, then a customer\'s view of the service tells little about what that customer will leave, which makes it a weak predictor.',
        'The crouching experiments measured tips, not customers\' ratings of service. This attaches a finding about one outcome to a different one.',
        'This borrows the passage\'s wording but reverses its meaning. Ratings explained "only a small fraction" of the differences in tips, not most of them, which is why the author says the theory does not hold up.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-r-02-q4',
      question:
        'The author mentions servers who introduced themselves, crouched beside the table, or wrote "thank you" on the check primarily to:',
      options: [
        'offer practical advice to servers who want higher earnings.',
        'show that small gestures have little to do with tip size.',
        'provide evidence that tip size depends on more than service.',
        'confirm that the standard explanation of tipping is largely correct.',
      ],
      correctIndex: 2,
      explanation:
        'Names, crouching and a written thanks do not make the food come faster, yet they raise tips. The examples show that something besides service shapes the tip, which undercuts the performance-pay theory.',
      optionExplanations: [
        'The findings might be useful to servers, but the author uses them as evidence in an argument about why people tip. The passage never addresses servers or advises them.',
        'This echoes the passage\'s phrase but gets the point backward. The gestures have little to do with how promptly food arrives, yet servers who made them "collected larger tips," so they clearly affect tip size.',
        'Correct. None of these gestures speeds the meal or improves the food, yet each raised tips. The author uses them to show that something other than the quality of service helps decide how much diners leave.',
        'The experiments appear in the paragraph that begins "Neither prediction holds up well." They support the case against the standard explanation, not the case for it.',
      ],
      skill: 'CS',
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-r-02-q5',
      question:
        'According to the passage, a tip that "once met the standard" can now read as a complaint because:',
      options: [
        'the expected percentage has gradually risen over time.',
        'servers today earn a lower cash wage than they once did.',
        'etiquette guides no longer give any advice about tipping.',
        'payment screens suggest amounts that customers resent.',
      ],
      correctIndex: 0,
      explanation:
        'The suggested tip has moved from about 10 percent to 15 to 20, and "because the expected amount has crept upward," an amount once considered standard now looks stingy.',
      optionExplanations: [
        'Correct. The author traces the advice from about 10 percent to 15 and then 20 and says that "because the expected amount has crept upward," an older standard amount now signals dissatisfaction.',
        'The passage describes the lower cash wage for tipped workers as a current rule, not as something that has fallen over time, and it does not tie the wage to how tips are read.',
        'The passage says etiquette guides still give advice, with "many" now recommending 20 percent. Their advice has changed, not disappeared.',
        'Payment screens come up later, in a discussion of tipping spreading to counters. The passage does not connect them to how a particular percentage is interpreted.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-r-02-q6',
      question:
        'As it is used in the phrase "customers balked at menus that looked more expensive," the word balked most nearly means:',
      options: [
        'paused briefly at.',
        'complained loudly about.',
        'laughed openly at.',
        'were unwilling to accept.',
      ],
      correctIndex: 3,
      explanation:
        'Customers who "balked at" higher-looking menus refused to go along with them, which is why several restaurants went back to tipping.',
      optionExplanations: [
        'This draws on a related sense of "balk," to hesitate, but a brief pause would not have pushed restaurants to change their whole pay system. The context calls for refusal, not hesitation.',
        'Nothing in the passage says customers raised their voices. "Balked" describes resistance to the higher prices, not a loud or public reaction.',
        'Laughter does not fit the context. The point is that the higher menu prices drove customers away, which is why several restaurants went back to tipping.',
        'Correct. Customers resisted the higher-looking menus, refusing to accept them even when meals cost about the same overall, and that resistance is among the reasons owners gave for going back.',
      ],
      skill: 'CS',
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-r-02-q7',
      question: 'According to the passage, one cost of tying servers\' pay to tips is that:',
      options: [
        'managers can no longer judge how well servers are working.',
        'servers\' earnings can vary sharply from night to night.',
        'cooks and dishwashers must share their wages with servers.',
        'customers pay more for a meal than they did before tipping.',
      ],
      correctIndex: 1,
      explanation:
        'The sixth paragraph lists the costs of the arrangement, beginning with the fact that "a server\'s income can swing widely from one night to the next."',
      optionExplanations: [
        'The passage says managers cannot watch every table, but that is part of the standard explanation for tipping, not a cost of it. This takes a detail from the wrong part of the argument.',
        'Correct. The paragraph that begins "That arrangement has costs" opens by noting that a server\'s income "can swing widely from one night to the next."',
        'This reverses the detail. Kitchen workers often get no share of the tips; nothing suggests they hand any of their own wages to servers.',
        'The passage never compares meal prices before and after tipping existed. The only price comparison involves restaurants that replaced tips with higher menu prices.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-r-02-q8',
      question: 'The author\'s attitude toward the "standard explanation" of tipping is best described as:',
      options: [
        'skeptical, because the evidence does not bear out its predictions.',
        'admiring, because it neatly accounts for each of the findings described.',
        'dismissive, because economists have never taken it seriously.',
        'undecided, because no one has yet tested what it predicts.',
      ],
      correctIndex: 0,
      explanation:
        'The author calls the theory "tidy" but then says "neither prediction holds up well" and presents evidence against both, a skeptical stance.',
      optionExplanations: [
        'Correct. The author grants that the theory is "tidy" but states that "neither prediction holds up well," then backs that up with the highway-diner example and Lynn\'s findings.',
        'Calling the theory "tidy" is not praise for its accuracy. The author goes on to show that its predictions fail, so it does not account for the findings described.',
        'The author calls it "the standard explanation," which means many people have taken it seriously. The author tests it against evidence rather than waving it away.',
        'The author cites studies that tested the theory\'s predictions and found them lacking. The question has been tested, and the author is not undecided about the result.',
      ],
      skill: 'CS',
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-r-02-q9',
      question:
        'Which finding, if true, would most directly support the account of diners\' motives given in the fourth paragraph?',
      options: [
        'Diners tip more after meals they rate as excellent than after poor ones.',
        'Restaurants without tipping charge more for meals than other places.',
        'Diners tip less when neither server nor companions can see the amount.',
        'Servers who work weekend nights earn more in tips than other servers.',
      ],
      correctIndex: 2,
      explanation:
        'If tips shrink when no one can see them, the disapproval of the server and companions is helping to drive the amount, just as the passage claims.',
      optionExplanations: [
        'A link between rated quality and tip size supports the performance-pay theory the author questions. It says nothing about fear of other people\'s judgment.',
        'Menu prices at restaurants without tipping concern how restaurants recover the cost of wages. This finding says nothing about why individual diners choose to tip.',
        'Correct. If the tip falls when nobody can see it, then the watching server and companions must be pushing it up, which directly supports the claim that diners tip to avoid disapproval.',
        'Higher weekend earnings could simply reflect busier nights and larger bills. The finding does not show anything about diners worrying how others will judge them.',
      ],
      skill: 'IKI',
      difficulty: 'hard',
    },
  ],
}

const PASSAGE_3: ActFLPassage = {
  id: 'act-fl2-r-03',
  title: 'Two Views of James Van Der Zee',
  kind: 'paired',
  text: `**Passage A: The Studio as Stage**

James Van Der Zee, born in Lenox, Massachusetts, in 1886, came to New York as a young man and by the late 1910s was running his own portrait studio in Harlem. For decades afterward, the neighborhood came to him: brides and grooms, church groups, children in their first good shoes, families who had saved for the occasion. They arrived in their finest clothes, and Van Der Zee gave them a setting to match. He posed them before painted backdrops of gardens and parlors, beside urns, fireplaces, and draped curtains, and he arranged their hands and the tilt of their heads with the care of a stage director.

His work did not end when the shutter closed. Van Der Zee retouched his negatives by hand, smoothing a blemish here and softening a shadow there, and he sometimes printed from two negatives at once to add an image that had never been in front of the camera.

To some later viewers, all of this looked old-fashioned: the props theatrical, the retouching a kind of flattery. But that judgment assumes that a photograph's duty is to record whatever the lens happens to catch. Van Der Zee's sitters did not come to him to be recorded. They came to be seen as they intended to be seen, and they were partners in that project, choosing the clothes, the pose, often the backdrop.

That partnership mattered more than it might today. In the early twentieth century, many of the images of Black Americans that circulated most widely, on advertisements, sheet music, and postcards, were caricatures. Against that background, a portrait of a Harlem couple, composed and prosperous before a painted fireplace, was not a fantasy. It was a statement, made by sitters and photographer together, about who these people were and who they meant to become.

The truth his photographs tell is the truth of aspiration. To call it false because it was arranged is to miss what was being arranged, and why.

**Passage B: Beyond the Backdrop**

For years Van Der Zee's work was little known outside Harlem. That changed in 1969, when the Metropolitan Museum of Art included many of his photographs in its exhibition "Harlem on My Mind." He was in his eighties by then, and the attention brought him overdue recognition. It also fixed an image of his work that has proved hard to dislodge.

The pictures chosen for wide circulation were, overwhelmingly, the elegant ones: couples in fur coats beside gleaming cars, and the parades of Marcus Garvey's Universal Negro Improvement Association, which Van Der Zee photographed in the 1920s. Enlarged and reproduced, they came to stand for Harlem itself, a golden age seen through a soft lens. Viewers who know only those pictures may believe they have seen a neighborhood. What they have seen is the part of a neighborhood that could afford a studio sitting, presented as it chose to be presented.

None of this diminishes the portraits. It does suggest that they are better understood as acts of self-presentation than as documents of an era, and that treating them as documents does a disservice both to Harlem, whose crowded tenements rarely appear in them, and to the photographer, whose range was wider than his reputation.

Consider the funeral portraits he made over many years, a selection of which was published in 1978 as *The Harlem Book of the Dead*. Families hired him to photograph their loved ones at rest, and he brought to these pictures the same craft he brought to wedding portraits: careful lighting, arranged flowers, and sometimes a second image printed into the scene. These are not pictures of a golden age. They are pictures of grief, shaped by the same wish for dignity, and they are among the most moving things he made.

Van Der Zee never claimed to photograph all of Harlem. We should not ask his pictures to do it for him.`,
  questions: [
    {
      id: 'act-fl2-r-03-q1',
      question:
        'According to Passage A, which of the following was part of Van Der Zee\'s work after a picture had been taken?',
      options: [
        'Painting a new backdrop to match each sitter\'s clothing.',
        'Asking sitters to approve each pose before he made prints.',
        'Cutting out props that later viewers found too theatrical.',
        'Retouching negatives and at times printing from two at once.',
      ],
      correctIndex: 3,
      explanation:
        'Passage A says his "work did not end when the shutter closed": he retouched negatives by hand and "sometimes printed from two negatives at once."',
      optionExplanations: [
        'Painted backdrops were part of the setting before the picture was taken, and the sitters often chose them. Passage A never says he painted a new one for each sitter.',
        'Sitters chose their clothes and poses while being photographed, but Passage A says nothing about their approving poses before printing. This invents a step in his process.',
        'The charge that the props were "theatrical" came from later viewers, long after the pictures were made. Passage A never says Van Der Zee removed props from his prints.',
        'Correct. Passage A describes what happened after the shutter closed: he retouched negatives by hand and sometimes combined two negatives to add an image that had not been before the camera.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-r-03-q2',
      question:
        'In Passage A, the author compares Van Der Zee to "a stage director" mainly to emphasize the:',
      options: [
        'ambition he once had to work in the theater rather than in photography.',
        'deliberate care with which he arranged each sitter and setting.',
        'crowds of neighbors who gathered to watch him at work in the studio.',
        'firm instructions he gave sitters about what clothes they should wear.',
      ],
      correctIndex: 1,
      explanation:
        'The comparison follows a description of how he posed sitters before backdrops and props and "arranged their hands and the tilt of their heads," stressing his careful control of each scene.',
      optionExplanations: [
        'The comparison describes how he worked, not what he once wanted to do. Passage A says nothing about any interest in the theater.',
        'Correct. The comparison comes in the same sentence that describes him arranging sitters\' hands and the tilt of their heads before painted scenery, so it stresses how deliberately he composed each portrait.',
        'The neighborhood "came to him" as customers, not as an audience. A stage director shapes a performance; the comparison is not about spectators in the studio.',
        'Passage A says the sitters themselves chose their clothes, so this contradicts the passage. The comparison concerns posing and setting, not wardrobe orders.',
      ],
      skill: 'CS',
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-r-03-q3',
      question:
        'Passage A suggests that a dignified portrait of a Harlem family carried special weight in the early twentieth century because:',
      options: [
        'many widely circulated images of Black Americans were demeaning.',
        'few families in Harlem could afford to own cameras of their own.',
        'photographs were then trusted far more than paintings were.',
        'museums had just begun to collect portraits of ordinary people.',
      ],
      correctIndex: 0,
      explanation:
        'Passage A notes that many widely circulated images of Black Americans "were caricatures"; "against that background," a composed, prosperous portrait was "a statement."',
      optionExplanations: [
        'Correct. Passage A says many popular images on advertisements, sheet music and postcards were caricatures, and that against this background a dignified portrait became a statement about who the sitters were.',
        'Passage A never discusses who owned cameras. Its point about the portraits\' importance rests on what other images showed, not on how rare cameras were.',
        'Passage A does not compare photography with painting. The weight of the portraits comes from their contrast with caricatures, not from any special trust in photographs.',
        'Museums appear only in Passage B, decades later, in 1969. Passage A explains the portraits\' importance by contrast with popular caricatures, not by any museum trend.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-r-03-q4',
      question: 'According to Passage B, the 1969 exhibition at the Metropolitan Museum of Art:',
      options: [
        'featured mainly his funeral portraits and his scenes of tenements.',
        'marked the first time any of his photographs were seen in public.',
        'brought him recognition but also narrowed how his work was seen.',
        'was organized by Van Der Zee himself near the end of his career.',
      ],
      correctIndex: 2,
      explanation:
        'Passage B says the exhibition brought "overdue recognition" but "also fixed an image of his work that has proved hard to dislodge," built from the elegant pictures alone.',
      optionExplanations: [
        'Passage B says the widely circulated pictures were "overwhelmingly, the elegant ones," and that tenements "rarely appear" in his portraits. This reverses what the exhibition emphasized.',
        'His work was "little known outside Harlem," which implies people in Harlem had seen it. Passage B never says 1969 was the first public showing, so this overstates the point.',
        'Correct. Passage B credits the exhibition with bringing "overdue recognition" but says it also fixed an image of his work as elegant and nostalgic, one that "has proved hard to dislodge."',
        'Passage B says the museum included his photographs in its exhibition. Nothing indicates that Van Der Zee organized the show himself.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-r-03-q5',
      question: 'According to Passage B, when Van Der Zee made funeral portraits, he:',
      options: [
        'brought a plainer craft to them than to his weddings.',
        'worked mostly for families who could not afford a studio.',
        'photographed mourners in the streets and the tenements.',
        'took as many pains with them as with a wedding sitting.',
      ],
      correctIndex: 3,
      explanation:
        'Passage B lists careful lighting, arranged flowers and sometimes a second printed image as the craft he used for weddings, and says the funeral pictures received that same treatment.',
      optionExplanations: [
        'This reuses the passage\'s words "brought" and "craft" but reverses the comparison. Passage B says the funeral pictures got the same craft as his weddings, with careful lighting, arranged flowers and sometimes a second printed image.',
        'Passage B says only that families hired him for these pictures. It never describes them as unable to afford a studio sitting, so this adds a detail the passage does not give.',
        'Tenements come up only as something that "rarely appear" in his portraits. The funeral pictures show loved ones at rest, not scenes photographed in the streets.',
        'Correct. To "take pains" is to work with great care. Passage B says the funeral pictures received the careful lighting, arranged flowers and printing methods he used at weddings, so they got equal effort.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-r-03-q6',
      question: 'Both authors would most likely agree that Van Der Zee\'s sitters:',
      options: [
        'were mostly unaware of how much he altered their portraits.',
        'had a hand in shaping how they appeared in his photographs.',
        'represented a broad cross section of Harlem\'s population.',
        'were fooled by the props into thinking they looked wealthy.',
      ],
      correctIndex: 1,
      explanation:
        'Passage A calls the sitters "partners" who chose clothes, poses and backdrops; Passage B calls the portraits "acts of self-presentation" showing people "as it chose to be presented."',
      optionExplanations: [
        'Neither author suggests the sitters were kept in the dark. Passage A stresses that they were partners in the project, which makes ignorance of the results unlikely.',
        'Correct. Passage A describes sitters choosing clothes, pose and backdrop, and Passage B describes the portraits as self-presentation by people shown as they chose to be, so both credit the sitters with shaping their images.',
        'Passage B argues the opposite: the sitters were the part of Harlem that "could afford a studio sitting." Passage A does not claim they represented everyone either.',
        'Both authors treat the sitters as knowing participants. Passage A says they came "to be seen as they intended," which rules out their being fooled.',
      ],
      skill: 'IKI',
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-r-03-q7',
      question:
        'How would the author of Passage B most likely respond to Passage A\'s statement that "the truth his photographs tell is the truth of aspiration"?',
      options: [
        'By accepting it, while warning against reading the pictures as a full record of Harlem life',
        'By rejecting it, on the grounds that the portraits are pleasing fictions with little value',
        'By rejecting it, on the grounds that the sitters had almost no say in how they were posed',
        'By accepting it, and adding that the portraits are the most accurate record of the 1920s',
      ],
      correctIndex: 0,
      explanation:
        'Passage B values the portraits as "acts of self-presentation," which fits the idea of aspiration, but objects to treating them "as documents of an era."',
      optionExplanations: [
        'Correct. Passage B says "none of this diminishes the portraits" and sees them as self-presentation, close to Passage A\'s view, but it warns that they should not be treated as a record of the whole neighborhood.',
        'Passage B explicitly says "none of this diminishes the portraits" and calls the funeral pictures "among the most moving things he made." It does not dismiss his work as worthless fiction.',
        'Passage B describes the portraits as showing people "as it chose to be presented," so it credits the sitters with a say. This contradicts the author\'s own view.',
        'Passage B argues that the portraits are "better understood as acts of self-presentation than as documents of an era," so it would not call them the most accurate record.',
      ],
      skill: 'IKI',
      difficulty: 'hard',
    },
    {
      id: 'act-fl2-r-03-q8',
      question: 'Which of the following best describes a difference in focus between the two passages?',
      options: [
        'Passage A traces his later career, while Passage B describes the training of his early years.',
        'Passage A faults his methods, while Passage B defends those methods against the museum.',
        'Passage A centers on the sitters\' aims, while Passage B centers on how the pictures were later shown.',
        'Passage A discusses his funeral work, while Passage B centers instead on his wedding portraits.',
      ],
      correctIndex: 2,
      explanation:
        'Passage A explains why sitters wanted staged, idealized portraits; Passage B examines how the 1969 exhibition and later reproduction shaped what audiences think the pictures show.',
      optionExplanations: [
        'Passage A covers his arrival in Harlem and his studio practice; Passage B covers 1969 and later. Neither describes his early training, so this misstates both passages.',
        'Passage A defends his staged methods against critics who called them old-fashioned. It does not fault them, and Passage B does not defend them against the museum.',
        'Correct. Passage A mentions later viewers only to answer them; its focus is the sitters\' purposes. Passage B centers on how the pictures were selected, enlarged and presented as a portrait of Harlem after 1969.',
        'Only Passage B discusses the funeral portraits, and it uses them to show his range beyond weddings. This reverses which passage treats which subject.',
      ],
      skill: 'IKI',
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-r-03-q9',
      question:
        'The author of Passage A would most likely view the funeral portraits discussed in Passage B as:',
      options: [
        'evidence that his work was less staged than critics have claimed.',
        'a break from the partnership with sitters seen in his studio work.',
        'proof that his photographs were meant to record Harlem impartially.',
        'another case of people shaping how a person would be remembered.',
      ],
      correctIndex: 3,
      explanation:
        'Passage A sees his portraits as collaborations in self-presentation; families who hired him to photograph a loved one with care for dignity fit that same pattern.',
      optionExplanations: [
        'Passage B says the funeral portraits used the same craft as his weddings, with careful lighting and arranged flowers. They are staged too, so they would not show less staging.',
        'Families hired him and he brought the same craft to these pictures. Passage A\'s author would see the same partnership, not a break from it.',
        'Passage A argues that his photographs were never meant to record whatever the lens caught. Impartial recording is the standard Passage A rejects.',
        'Correct. Passage A values portraits as collaborations in which people choose how they will be seen; families arranging a dignified final portrait of a loved one fit that view.',
      ],
      skill: 'IKI',
      difficulty: 'hard',
    },
  ],
}

const PASSAGE_4: ActFLPassage = {
  id: 'act-fl2-r-04',
  title: 'The Heat Island',
  kind: 'natural-science',
  text: `In the early nineteenth century, a London manufacturing chemist named Luke Howard, remembered today mainly for giving clouds the names meteorologists still use, kept careful records of the weather. Comparing temperatures taken in the city with readings from the countryside beyond it, he noticed something odd: London was often warmer than the land around it. Howard had documented what scientists now call the urban heat island.

Two centuries later, the effect is among the best studied in climate science, and it comes in two forms. The first is a heat island of surfaces. On a sunny summer afternoon, a dark roof or a stretch of asphalt can become tens of degrees hotter than the air above it, hot enough to burn bare skin. Satellites that measure the heat given off by the ground can map these hot surfaces across an entire city. The second is a heat island of the air itself. Here the differences are smaller but matter more directly to the people breathing that air. At midday, a city's air may be only slightly warmer than the air over nearby farms. After sunset the gap widens, and on calm, clear nights a large city can be many degrees warmer than the countryside around it.

Part of the explanation is color. Fresh asphalt and dark roofing reflect only a small fraction of the sunlight that strikes them and absorb the rest as heat; grass and light-colored surfaces reflect more. Just as important is water. In the countryside, plants draw water from the soil and release it through their leaves, and damp soil gives up water directly. Both processes use the sun's energy to turn liquid water into vapor, energy that would otherwise warm the ground and the air. A city sealed beneath pavement and roofs sheds most of its rain into storm drains, leaving little water to evaporate and little of this natural cooling.

The nighttime effect has further causes. Brick, concrete, and asphalt soak up heat through the day and give it back slowly after dark, like a stone left in the sun. The shape of a city also works against cooling. In open country, the ground radiates its heat upward into a clear night sky. Along a narrow street lined with tall buildings, which researchers call an urban canyon, much of the sky is blocked, and heat radiated by one wall is partly absorbed by the wall across the street. Add the waste heat from cars, factories, and the air conditioners that run harder the hotter a city becomes, and the air may stay warm until dawn.

Those warm nights are the heat island's most serious consequence. During a heat wave, the human body depends on cooler nighttime hours to recover from the strain of the day. When nights stay hot, that relief never comes, and the risk of heat-related illness rises, especially for older people and for those without air conditioning. Heat is also unevenly shared within a city. Neighborhoods with few trees and broad expanses of pavement can be markedly hotter than leafy ones a few miles away, and researchers have found that the hotter neighborhoods are often among the poorest.

Cities are responding with remedies that work on the same principles that create the problem. Cool roofs, coated with white or reflective materials, send more sunlight back toward the sky. Street trees shade the pavement and cool the air by releasing water through their leaves. Some cities are testing lighter-colored pavement as well. None of these is a perfect fix. Trees need water and take years to mature. And some researchers have found that highly reflective pavement can bounce sunlight up onto people walking across it, so that a pedestrian may feel hotter even as the pavement underfoot stays cooler.

Luke Howard could only record the warmth of London. His successors are learning, street by street, how to reduce it.`,
  questions: [
    {
      id: 'act-fl2-r-04-q1',
      question: 'The passage is primarily concerned with:',
      options: [
        'the life and scientific career of the weather observer Luke Howard.',
        'why cities run warmer than their surroundings and how they respond.',
        'why reflective roofs cool a city more effectively than street trees.',
        'how satellites changed the way scientists measure air temperature.',
      ],
      correctIndex: 1,
      explanation:
        'After a brief historical opening, the passage explains the causes of the urban heat island, its effects on health, and the remedies cities are trying.',
      optionExplanations: [
        'Howard appears only in the first and last paragraphs as a frame. The passage says almost nothing about his life, so this mistakes an introduction for the main subject.',
        'Correct. The passage defines the urban heat island, explains its daytime and nighttime causes, describes its effects on health, and surveys the remedies cities are adopting.',
        'The passage never ranks roofs above trees. It notes that each remedy has limits, so this invents a comparison and narrows the focus to a single detail.',
        'Satellites come up in one sentence about mapping hot surfaces, and they measure heat given off by the ground, not air temperature. This is far too narrow to be the main concern.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-r-04-q2',
      question: 'The reference to Luke Howard in the first paragraph mainly serves to:',
      options: [
        'establish that the heat island has been observed for some two centuries.',
        'argue that early amateur scientists were more careful than modern ones.',
        'explain how clouds that form over cities differ from those over farms.',
        'suggest that London has a stronger heat island than most other cities.',
      ],
      correctIndex: 0,
      explanation:
        'Howard noticed in the early nineteenth century that London was warmer than the countryside, and the next paragraph begins "Two centuries later," showing how long the effect has been known.',
      optionExplanations: [
        'Correct. Howard documented the effect in the early 1800s, and the passage moves directly to "two centuries later," using him to show that the heat island is a long-recognized phenomenon.',
        'The passage praises Howard\'s "careful records" but never compares him with modern scientists. Nothing suggests today\'s researchers are less careful.',
        'Howard is remembered for naming clouds, but the passage mentions that only to identify him. It says nothing about how clouds over cities differ from others.',
        'The passage uses London only because that is where Howard worked. It never compares London\'s heat island with those of other cities.',
      ],
      skill: 'CS',
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-r-04-q3',
      question:
        'According to the passage, the difference between a city\'s air temperature and that of nearby rural areas tends to be greatest:',
      options: [
        'around midday on sunny summer afternoons.',
        'on overcast, windy days in winter.',
        'in the hours just after a heavy rain.',
        'on still, cloudless nights.',
      ],
      correctIndex: 3,
      explanation:
        'The passage says the city\'s air may be only slightly warmer at midday, but "after sunset the gap widens," especially "on calm, clear nights."',
      optionExplanations: [
        'Sunny afternoons are when surfaces like roofs and asphalt are hottest. For air temperature, though, the passage says the city may be "only slightly warmer" at midday, so this confuses the two kinds of heat island.',
        'The passage never discusses winter or overcast, windy weather. The conditions it names for the largest difference are the opposite: calm and clear.',
        'Rain comes up only in the explanation of why cities lose evaporative cooling. The passage does not say the temperature gap peaks after a storm.',
        'Correct. The passage says the gap in air temperature widens after sunset and that when nights are calm and clear a large city can be many degrees warmer than the surrounding countryside.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-r-04-q4',
      question:
        'According to the passage, one reason a paved city loses the cooling found in the countryside is that pavement and roofs:',
      options: [
        'reflect too much sunlight onto the walls of nearby buildings.',
        'warm more slowly in the morning than grass and soil do.',
        'send rainwater away before much of it can evaporate.',
        'keep tree roots from drawing heat out of the soil below.',
      ],
      correctIndex: 2,
      explanation:
        'Evaporation uses the sun\'s energy that would otherwise heat the ground, but a sealed city "sheds most of its rain into storm drains," leaving little water to evaporate.',
      optionExplanations: [
        'The passage says dark pavement and roofing reflect "only a small fraction" of sunlight. Reflecting too much is the opposite of the problem it describes.',
        'The passage never compares morning warming rates. It says these materials soak up heat during the day and release it slowly at night, which does not support this claim.',
        'Correct. Evaporation uses solar energy that would otherwise heat the ground and air, and because a city sends most of its rain into storm drains, there is little water left to provide that cooling.',
        'The passage says plants cool the countryside by releasing water through their leaves, not by drawing heat out of the soil through their roots. This misstates the mechanism.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-r-04-q5',
      question: 'According to the passage, an urban canyon keeps a city warm chiefly because it:',
      options: [
        'blocks the open sky that surfaces would radiate heat toward.',
        'funnels car exhaust directly into the windows of apartments.',
        'shades the street so thoroughly that the pavement stays damp.',
        'packs more air conditioners into a block than open areas hold.',
      ],
      correctIndex: 0,
      explanation:
        'In open country the ground radiates heat into the sky, but in an urban canyon "much of the sky is blocked," and one wall absorbs heat radiated by the wall across the street.',
      optionExplanations: [
        'Correct. Tall buildings on a narrow street block much of the sky, so heat that would escape upward is instead absorbed by the facing wall, which slows the city\'s cooling.',
        'Cars are mentioned as a source of waste heat, not as something the canyon shape channels indoors. The passage says nothing about exhaust entering apartments.',
        'The passage links damp ground to cooling, and it never says canyons keep pavement damp. This idea would actually suggest a cooling effect rather than a warming one.',
        'Air conditioners add waste heat wherever they run. The passage explains the canyon\'s effect through blocked sky and facing walls, not through how many machines it holds.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-r-04-q6',
      question:
        'As it is used in the phrase "to recover from the strain of the day," the word strain most nearly means:',
      options: [
        'an injured muscle.',
        'physical stress.',
        'a filtering process.',
        'an inherited trait.',
      ],
      correctIndex: 1,
      explanation:
        'The body needs cool nights to recover from the heavy demands that a hot day places on it, so "strain" means stress or burden.',
      optionExplanations: [
        'A pulled muscle is one meaning of "strain," but the passage describes the whole day\'s heat, not a single injury. The body recovers from overall stress here.',
        'Correct. During a heat wave the body works hard all day to cope with heat, and cool nights let it recover from that stress, which is what "strain" means here.',
        'Straining as filtering applies to liquids passed through a sieve. That sense has nothing to do with a body recovering from a hot day.',
        'A "strain" can mean a variety or inherited line, as in a strain of wheat, but that sense makes no sense applied to the hours of a day.',
      ],
      skill: 'CS',
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-r-04-q7',
      question: 'The passage suggests that air conditioners can make a city\'s heat island worse because they:',
      options: [
        'draw cool air out of neighborhoods that have few trees.',
        'are used mostly in neighborhoods that are already cool.',
        'reduce the amount of water that evaporates from soil.',
        'set up a cycle in which more heat leads to more waste heat.',
      ],
      correctIndex: 3,
      explanation:
        'The passage lists air conditioners among sources of waste heat and notes that they "run harder the hotter a city becomes," so heat produces more heat.',
      optionExplanations: [
        'The passage never says air conditioners pull cool air from anywhere outdoors. It mentions them only as a source of waste heat.',
        'The passage does not say where air conditioners are used most. It notes only that people without them are at greater risk, which says nothing about cool neighborhoods.',
        'Lost evaporation is caused by pavement and roofs that send rain into drains. The passage does not link air conditioners to soil moisture.',
        'Correct. Air conditioners release waste heat and "run harder the hotter a city becomes," so a hotter city drives them to add still more heat, a self-reinforcing cycle the passage implies.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-r-04-q8',
      question:
        'The passage\'s statement that reflective pavement can "bounce sunlight up onto people walking across it" mainly serves to:',
      options: [
        'argue that cities should stop testing new kinds of pavement.',
        'show that a remedy for the heat island can have a drawback.',
        'explain why trees cool streets better than reflective roofs.',
        'prove that pedestrians notice heat more than drivers notice it.',
      ],
      correctIndex: 1,
      explanation:
        'The statement follows "None of these is a perfect fix" and gives an example of a remedy that can backfire for people on the street.',
      optionExplanations: [
        'The passage reports that some cities are testing lighter pavement and does not urge them to stop. Pointing out a drawback is not the same as rejecting the remedy.',
        'Correct. Coming right after "None of these is a perfect fix," the detail shows a cost of one remedy: the pavement stays cooler, but a pedestrian may feel hotter.',
        'The passage notes that trees need water and years to grow, but it never ranks trees against roofs. This detail concerns pavement, not trees.',
        'Drivers are never mentioned. The point is that one remedy can make walkers feel hotter, not that pedestrians are more sensitive than anyone else.',
      ],
      skill: 'CS',
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-r-04-q9',
      question:
        'According to the passage, researchers have found that the hottest neighborhoods within a city are often:',
      options: [
        'the ones closest to large parks.',
        'beside the city\'s tallest office towers.',
        'home to many low-income residents.',
        'located along rivers or lakes.',
      ],
      correctIndex: 2,
      explanation:
        'The passage says that neighborhoods with few trees and much pavement run hotter and that "the hotter neighborhoods are often among the poorest."',
      optionExplanations: [
        'Parks bring trees, and the passage says leafy neighborhoods are cooler. Being near large parks would point to cooler streets, not hotter ones.',
        'Tall buildings come up in the discussion of urban canyons, but the passage never says the hottest neighborhoods are found next to office towers.',
        'Correct. The passage reports that neighborhoods with few trees and broad pavement are markedly hotter and that researchers have found these hotter areas are often among the poorest, so many residents have low incomes.',
        'The passage never mentions rivers or lakes. Nothing in it connects nearby water to which neighborhoods are hottest.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
  ],
}

export const ACT_FL2_READING: ActFLPassage[] = [PASSAGE_1, PASSAGE_2, PASSAGE_3, PASSAGE_4]
