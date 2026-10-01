import type { MCATPassage } from '../types'

/**
 * MCAT Full-Length Form 8 — CARS, file A (passages 1–5, 6 questions each).
 *
 * Five original argument-driven passages (500–600 words) across humanities and
 * social-science genres: ethics / political philosophy (what a generation that
 * holds an inheritance owes to the next), economics (the tip as a wage that
 * feels like a gift), literary criticism (the anthology, and how its form
 * decides what lasts), psychology (sports fandom and what the supporter is
 * really borrowing), and philosophy (flattery, in an eighteenth-century moral
 * essayist’s voice). Every key is derivable from the passage alone; no outside
 * knowledge is needed.
 */
export const FL8_CARS_A_PASSAGES: MCATPassage[] = [
  {
    id: 'fl8-cars-a-01',
    section: 'cars',
    discipline: 'ethics / political philosophy',
    title: 'The Holder in the Middle',
    passageText:
      'Most of what we say about obligation presupposes two parties who can deal with one another. I owe you because we agreed, or because you did something for me, or because you can hold me to account. People who will live two centuries from now fit none of these patterns. They cannot bargain with us, cannot return a favor, and cannot so much as complain. Some hardheaded writers conclude that talk of duties to posterity is sentiment, and that the present may do as it likes with what it has.\n\nThe usual rescue is to shift the ground from bargain to benevolence. We ought to care about future people, it is said, simply because their welfare counts as much as ours. I do not doubt the premise. But as an account of what we owe, it proves both too much and too little. Too much, because the people of the future outnumber us many times over; if their welfare is simply to be added up beside ours, almost any sacrifice would be required of us, and a generation would be little more than a means to its successors. Too little, because benevolence is satisfied by a good total, however it is reached. If our descendants turn out richer than we are, the benevolent accountant must say that we owed them nothing after all—even if we have left them a poisoned river, which they can now afford to filter.\n\nA third picture, I think, better fits both our convictions and our position. No generation begins the world. Each receives, without having asked or paid, a stock of things it did not make: soil, harbors, a language, courts that work, a body of knowledge. Those who handed these on could have used them up. That they did not places us less in the position of an owner than in that of someone who holds an estate for a time, between a giver and an heir. The obligation that arises cannot be discharged toward the givers, who are dead; it can only be discharged forward. But it is an obligation of the ordinary kind—a debt for something received—and not an act of charity toward strangers.\n\nUnderstood in this way, the duty has a shape that benevolence could not give it. A holder is not required to enrich the heir. He is required to hand on the estate no more encumbered than he found it. We need not stint ourselves, then, so that people who will probably be wealthier than we are may be wealthier still. What we may not do is spend what cannot be replaced.\n\nIt will be said that we cannot know what distant generations will want, and that an obligation whose content is unknown is no obligation. I take the ignorance to be real and the inference to be backward. It is because we do not know what they will value that we have no business choosing for them, and the surest way of choosing for them is to close a door that cannot be reopened. A public debt, however large, can be repaid or repudiated; a drained aquifer, an extinct species, a dead language cannot be had back at any price. The test of what we owe is therefore not how much the future will have but how much it will still be able to decide.\n\nThis is a less heroic doctrine than the one usually preached, and I think the better for it. It asks no generation to live for the next. It asks each to remember that it stands in the middle.',
    questions: [
      {
        question: 'Which of the following best states the main point of the passage?',
        options: [
          'Because future people cannot bargain with us or repay us, talk of duties toward them is only sentiment.',
          'Because future people will outnumber us, their welfare should outweigh ours in nearly every decision.',
          'We owe future people, as a debt for what we inherited, a world whose choices we have not foreclosed.',
          'We owe future people as much wealth as we can save, since they are certain to need more than we do.',
        ],
        correctAnswer: 2,
        explanation:
          'The author rejects both the bargain model and the benevolence model and proposes that each generation holds an inheritance “between a giver and an heir,” owing it forward unencumbered; the test is how much the future “will still be able to decide.” The sentiment option is the hardheaded conclusion the author sets out to resist. The outnumbering option is the consequence of benevolence that the author says “proves too much.” The saving option is denied outright: a holder “is not required to enrich the heir,” and the heirs are expected to be wealthier, not needier.',
        skill: 'main-idea',
      },
      {
        question:
          'The author mentions the “poisoned river” in order to show that an account based on benevolence:',
        options: [
          'would excuse a harm so long as those harmed end up prosperous',
          'would require the present to give up nearly all of its comforts',
          'would treat pollution as graver than every other kind of damage',
          'would hold the present to promises that it never agreed to make',
        ],
        correctAnswer: 0,
        explanation:
          'The river illustrates the “too little” half of the objection: because benevolence “is satisfied by a good total, however it is reached,” richer descendants would be owed nothing even though they have been left a poisoned river. The demand for nearly unlimited sacrifice is the “too much” half, made earlier with the point about numbers, not with the river. The author draws no ranking of pollution against other damage. Promises and agreement belong to the bargain model of the first paragraph, not to benevolence.',
        skill: 'function',
      },
      {
        question:
          'On the account the author defends, the present generation would fail in its obligation by doing each of the following EXCEPT:',
        options: [
          'pumping an ancient underground water reserve until it is dry',
          'hunting a species of wild animal until none of its kind remain',
          'spending income that might have been saved to enrich its heirs',
          'letting a language lose its last speakers without any record',
        ],
        correctAnswer: 2,
        explanation:
          'The fourth paragraph says a holder “is not required to enrich the heir” and that we need not stint ourselves so that wealthier successors “may be wealthier still”; spending rather than saving income therefore breaks no obligation on this account. The other three are the author’s own examples of doors that cannot be reopened: “a drained aquifer, an extinct species, a dead language cannot be had back at any price,” and spending what cannot be replaced is exactly what the holder may not do.',
        skill: 'inference',
      },
      {
        question:
          'The author’s claim that the present generation owes “a debt for something received” depends on the assumption that:',
        options: [
          'earlier generations kept a careful count of what they were handing on',
          'a benefit can bind its recipient even though it was never requested',
          'later generations will be grateful for what is preserved for them',
          'a debt may be cancelled once the party it was owed to has died',
        ],
        correctAnswer: 1,
        explanation:
          'The author stresses that each generation receives its stock “without having asked or paid” and still concludes that a debt arises; that step holds only if an unrequested benefit can obligate the one who receives it. Nothing in the argument turns on whether predecessors kept accounts. The gratitude of later generations is never mentioned and is not needed for a debt incurred by receiving. The cancellation option contradicts the passage, which says the debt survives the givers’ deaths and “can only be discharged forward.”',
        skill: 'assumption',
      },
      {
        question:
          'A government is weighing two plans. Plan 1 would pay for present services by borrowing, leaving a large public debt. Plan 2 would permanently flood the only valley in which a certain ecosystem exists in order to generate cheap power, and would place part of the revenue in a fund expected to make later generations richer. The author would most likely judge that:',
        options: [
          'Plan 1 is the graver wrong, because it leaves later generations poorer than they would have been',
          'Plan 1 is the graver wrong, because later generations had no chance to consent to the debt',
          'Plan 2 is the graver wrong, because cheap power will tempt the present generation into waste',
          'Plan 2 is the graver wrong, because it removes what later generations could never choose to restore',
        ],
        correctAnswer: 3,
        explanation:
          'The author’s test is “not how much the future will have but how much it will still be able to decide,” and a public debt “can be repaid or repudiated” while an irreplaceable loss cannot be undone at any price. Plan 2 closes a door for good, and its fund answers only the question of wealth, which the author says is not the test. Making successors poorer is the benevolent accountant’s measure, not the author’s. Lack of consent belongs to the bargain model the author leaves behind. Present wastefulness is no part of the argument, which does not ask the present to stint itself.',
        skill: 'application',
      },
      {
        question:
          'Suppose a technique were perfected by which any extinct species could be restored from preserved tissue. What bearing would this have on the author’s argument?',
        options: [
          'It would defeat the test the author proposes, since no loss could any longer be called irreversible.',
          'It would take extinction off the list of forbidden losses while leaving the proposed test as it was.',
          'It would support the benevolent accountant, since later generations would be better off than before.',
          'It would undercut the premise that we cannot know what distant generations are going to value.',
        ],
        correctAnswer: 1,
        explanation:
          'Extinction is offered as one example of a loss that “cannot be had back”; if it could be reversed, it would cease to be an instance, but the test itself, whether a door has been closed that cannot be reopened, would stand and would still condemn other losses such as a drained aquifer or a dead language. One reversible loss does not make every loss reversible, so the test is not defeated. The technique says nothing in favor of adding up welfare. Nor does it tell us what future people will value, so the premise of ignorance is untouched.',
        skill: 'new-information',
      },
    ],
  },
  {
    id: 'fl8-cars-a-02',
    section: 'cars',
    discipline: 'economics',
    title: 'Paid at the Table',
    passageText:
      'The tip is a standing embarrassment to the theory that people spend money in order to get something. It is paid after the meal has been served, when nothing further can be obtained by it; it is paid by travelers to servers they will never meet again; and it is paid in the absence of any law. Economists have accordingly treated it as a puzzle, and two solutions are commonly proposed.\n\nThe first is that the tip is an incentive. A manager cannot watch every table, but the customer can, and by leaving the reward to the customer’s discretion the restaurant buys attentive service more cheaply than supervision could. The theory is neat, and the evidence is unkind to it. Studies that compare what diners say about their service with what they leave find that the quality of the service accounts for very little of the difference between one tip and another. The size of the bill accounts for most of it: a server who carries a costly bottle to the table is paid several times as much as one who carries a cheap bottle the same distance.\n\nThe second solution is that the tip is a custom, kept up by the discomfort of breaking it. This is surely true, and it explains very little. It says that people tip because people tip. It does not say why this custom is so robust, nor whom it serves.\n\nThe tip is best understood, I think, by asking what it replaces. Where tipping is expected, the server’s employer pays little, and the difference is made up at the table. The tip, in other words, is a wage. But it is a wage that has been moved off the employer’s books and onto the customer’s conscience, and the move changes two things. The menu shows a price lower than the meal will cost. And the risk of a slow evening, which a wage would leave with the owner, falls on the server, who is paid nothing by an empty room.\n\nIt may be replied that if the tip were merely a wage in disguise, the disguise would long since have been dropped. Some restaurants have tried. They raised their prices by the customary percentage, paid their staff a salary, and forbade tips. Many returned to the old system within a year or two. Their customers, comparing menus, thought them expensive; and their most capable servers, who on busy nights had earned more than any salary would match, left for competitors. This history is commonly cited to show that tipping is what everyone prefers. I read it differently. It shows whom the arrangement pays: the owner, whose prices look low; the diner, who enjoys a discretion he seldom exercises and the sense of being generous while settling what is in fact a bill; and the strongest servers. An arrangement with three sets of beneficiaries needs no law to keep it up.\n\nWhat the history does not show is that nobody loses. The cook, who is not at the table, is paid by nobody’s generosity. The server on the slow shift carries a risk that she is the person least able to bear. These people did not abandon the restaurants that gave up tipping; they simply had no say in whether such restaurants survived. The tip endures, then, not because it is a gift, nor because it is a wage, but because it is a wage that feels like a gift to the person paying it—and that feeling is worth something to everyone who has the power to choose.',
    questions: [
      {
        question:
          'The author contrasts the server who carries a costly bottle with the one who carries a cheap bottle in order to:',
        options: [
          'suggest that servers steer diners toward the dearest items on a menu',
          'suggest that diners in expensive restaurants are the more generous',
          'suggest that carrying wine demands less skill than serving a meal',
          'suggest that tips follow something other than the work performed',
        ],
        correctAnswer: 3,
        explanation:
          'The two servers do the same work (“the same distance”) and are paid very differently, which illustrates the finding that the size of the bill, not the quality of service, explains most of the variation in tips; this is the evidence against the incentive theory. The passage says nothing about servers steering diners toward costly items. It compares two bottles, not the generosity of diners at different restaurants. No comparison of the skill needed for wine and for food is made.',
        skill: 'function',
      },
      {
        question: 'Which of the following best captures the author’s central claim about tipping?',
        options: [
          'It is a reward that lets diners do the supervising that managers cannot afford to do themselves.',
          'It is pay shifted onto diners and felt as generosity, which suits everyone with a say in keeping it.',
          'It is a custom that survives only because individual diners are uncomfortable about breaking it.',
          'It is a practice that restaurants would give up at once if diners were shown the true price of meals.',
        ],
        correctAnswer: 1,
        explanation:
          'The author argues that the tip is a wage moved “onto the customer’s conscience” and that it endures because it “feels like a gift to the person paying it,” a feeling worth something “to everyone who has the power to choose.” The supervising option is the incentive theory, which the evidence is said to be “unkind to.” The custom option is called true but explains “very little.” The last option is contradicted by the restaurants that did show the true price on the menu and then returned to tipping.',
        skill: 'main-idea',
      },
      {
        question:
          'According to the passage, which of the following are among those who gain from the practice of tipping?\n\nI. Restaurant owners\nII. The most capable servers\nIII. Kitchen staff',
        options: ['I and II only', 'I and III only', 'II and III only', 'I, II, and III'],
        correctAnswer: 0,
        explanation:
          'The fifth paragraph lists those whom the arrangement pays: “the owner, whose prices look low,” the diner, and “the strongest servers,” so I and II are correct. Kitchen staff are named among the losers: “The cook, who is not at the table, is paid by nobody’s generosity.” Every option that includes III therefore counts as a gainer someone the author says is left out, and no option omitting I or II matches the author’s list.',
        skill: 'detail',
      },
      {
        question:
          'Which of the following findings, if true, would most weaken the author’s interpretation of what happened at the restaurants that abolished tipping?',
        options: [
          'The servers who left those restaurants earned more at the tipped restaurants they joined.',
          'The restaurants that kept the policy were in districts where their rivals had adopted it too.',
          'The cooks and the lowest-earning servers at those restaurants asked to have tipping restored.',
          'The diners at those restaurants rated the service they received as no worse than before.',
        ],
        correctAnswer: 2,
        explanation:
          'The author reads the episode as showing only whom tipping pays, and insists that the cook and the server on the slow shift lose by it but “had no say.” If those very people asked for tipping back, the claim that the arrangement works against them, and that the history does not show a general preference, is undercut. Higher earnings for the servers who left confirm the author’s account of why they left. Survival of the policy where rivals also adopted it fits the point about customers “comparing menus.” Unchanged service ratings bear on the incentive theory, which the author already rejects.',
        skill: 'strengthen-weaken',
      },
      {
        question: 'Which of the following arrangements most closely resembles tipping as the author describes it?',
        options: [
          'A school posts a low tuition and pays its classroom aides from contributions that parents are urged to make.',
          'A shop posts a low price and adds a fixed service charge, which it keeps, when the customer comes to pay.',
          'A charity pays its collectors a fixed salary out of the donations that passers-by choose to give to it.',
          'A firm pays its sales staff a commission on each sale, drawn from the revenue that the sale brings in.',
        ],
        correctAnswer: 0,
        explanation:
          'Tipping, on the author’s account, moves a worker’s pay off the employer’s books and onto the customer’s conscience, so that the posted price looks low and the worker bears the risk of what customers choose to give. The school does all three. The shop’s compulsory charge hides part of the price but involves no discretion or sense of giving, and the shop keeps it. The charity’s collectors receive a fixed salary, so the employer still carries the risk and no price is understated. The commission shifts risk to the staff, but the employer pays it and nothing is presented to the customer as a gift.',
        skill: 'application',
      },
      {
        question:
          'The author’s remark that the diner “enjoys a discretion he seldom exercises” most strongly suggests that diners:',
        options: [
          'would rather have the amount of the tip fixed for them by the restaurant',
          'are unaware that they are free to leave less than the customary amount',
          'reduce what they leave whenever the bill is larger than they expected',
          'leave much the same share of the bill however well they were served',
        ],
        correctAnswer: 3,
        explanation:
          'A discretion he “seldom exercises” is a freedom to reward or penalize service that goes largely unused, which agrees with the earlier finding that service quality explains very little of the difference between tips while the size of the bill explains most of it. A diner who “enjoys” the discretion does not wish it taken away, and customers were put off by restaurants that removed it. Someone who enjoys a freedom is aware of having it. Nothing suggests that diners cut tips on large bills; tips are said to rise with the bill.',
        skill: 'inference',
      },
    ],
  },
  {
    id: 'fl8-cars-a-03',
    section: 'cars',
    discipline: 'literary criticism',
    title: 'What Fits Between the Covers',
    passageText:
      'Whenever a new anthology appears, the reviews conduct the same trial. The editor is praised for including this writer and arraigned for omitting that one, and the table of contents is read as a series of verdicts. Admirers of anthologies and their enemies agree on the essential point: that an anthology is a judgment, and that the anthologist—learned or prejudiced, according to the reviewer—decides who will go on being read. I think the anthologist decides a good deal less than either party supposes, and that the real selector is seldom named in the reviews. It is the book.\n\nAn anthology is a container of a definite shape. It must hold a hundred authors in a volume a student can carry, and each piece in it must be capable of being read and discussed in an hour of class. Before any editor has exercised any taste, these facts have already made a selection. They favor what is short over what is long, what is complete in itself over what leans on its surroundings, and what yields to an hour’s explanation over what does not. A lyric of fourteen lines suits the container perfectly. A novel cannot enter it at all, except as a “chapter,” which is to say as something its author never wrote: a short story with its beginning and its end missing.\n\nThis matters, because for most readers the anthology is not a sample of a literature but the whole of their acquaintance with it. A poet who labored thirty years on a single long work, and tossed off a dozen songs, is remembered for the songs; and readers who know only these form a clear impression of a writer who scarcely existed. Whole kinds of writing rise and fall on the same principle. The sermon, the long letter, and the tale in verse were once read as eagerly as the lyric. They have dropped out of ordinary reading not because some editor judged them inferior but because they cannot be cut to size. What we call the verdict of time is in good part a verdict of length.\n\nI do not say that editors count for nothing. Two editors given the same pages will fill them differently, and the differences are worth arguing over. But they choose within a range that was fixed before they began, and it is a narrower range than their quarrels suggest. Compare the anthologies of any period that was bitterly divided over taste, and the surprise is how alike they are—not always in the names, but in the kind of thing that stands for each name.\n\nIt may be objected that this constraint belonged to paper, and that an anthology on a screen may be as long as its editor likes. So it may; and the electronic anthologies are, in what they include, generous. But the hour of class has not grown, and it is the hour, not the page, that determines what is assigned. The long works are present in such collections as the upper shelves are present in a library.\n\nIf this is right, the usual remedy for the faults of anthologies is misdirected. To replace one editor with another of different sympathies changes the names and leaves the principle of selection intact; the new writers too will be known by their most portable work. A more useful reform would change what we take an anthology for. It is a door and not a room. I would judge one less by whom it admits than by how many of its readers it sends on to a whole book.',
    questions: [
      {
        question: 'The author’s principal claim is that:',
        options: [
          'anthologists have used their power over reputations with more prejudice than learning',
          'the form of the anthology does more to select what survives than any editor’s taste',
          'anthologies on screens have removed the limits that once governed the printed ones',
          'the pieces that anthologies preserve are generally the best that their authors wrote',
        ],
        correctAnswer: 1,
        explanation:
          'The first paragraph announces that “the real selector” is “the book,” and the rest of the passage shows how the container’s shape, its length and the class hour, chooses before any editor does. The prejudice option is one side of the reviewers’ trial that the author says overrates the editor. The screen option is the objection of the fifth paragraph, which the author answers by pointing to the unchanged class hour. The best-work option is contradicted by the poet remembered for songs “tossed off” beside a thirty-year labor.',
        skill: 'main-idea',
      },
      {
        question:
          'By saying that long works are present in electronic anthologies “as the upper shelves are present in a library,” the author most likely means that such works are:',
        options: [
          'placed there by editors who think them superior to shorter ones',
          'kept there for the use of scholars and not of ordinary students',
          'within reach in principle but seldom actually taken down and read',
          'stored there in versions that omit a large part of the original',
        ],
        correctAnswer: 2,
        explanation:
          'The comparison follows the statement that “it is the hour, not the page, that determines what is assigned”: long works may be included, but, like books on shelves no one reaches for, they go unread because they are not assigned. The image says nothing about editors ranking long works above short ones. No division between scholars and students is drawn in the passage. The electronic collections are called “generous” in what they include, so the point is not that the long works have been abridged.',
        skill: 'inference',
      },
      {
        question:
          'The author invites the reader to compare the anthologies of a period “bitterly divided over taste” in order to support the claim that:',
        options: [
          'rival editors of such a period usually agree about which authors deserve a place',
          'disputes about taste are less bitter than the reviews of anthologies make them seem',
          'anthologies made in such a period are less reliable than those made in calmer ones',
          'editors who differ in taste still work inside limits that none of them has chosen',
        ],
        correctAnswer: 3,
        explanation:
          'The comparison illustrates the sentence before it: editors “choose within a range that was fixed before they began,” so that rival anthologies turn out alike “in the kind of thing that stands for each name.” The author expressly says the likeness is “not always in the names,” so agreement about which authors to include is not the point. The bitterness of the disputes is taken for granted, not questioned. No comparison of reliability between divided and calm periods is made.',
        skill: 'function',
      },
      {
        question: 'Which of the following findings would most strengthen the author’s argument?',
        options: [
          'Anthologies edited by rival schools of critics give nearly the same share of their pages to pieces under a hundred lines.',
          'Anthologies edited by rival schools of critics have fewer than a quarter of their authors in common with one another.',
          'Students who are assigned an anthology in a course usually go on to read several of the complete works it excerpts.',
          'Students who are assigned an anthology in a course usually can name the editor who was responsible for compiling it.',
        ],
        correctAnswer: 0,
        explanation:
          'The author predicts that editors of opposed tastes will produce anthologies alike in the kind of piece chosen, because the container favors the short and self-contained; nearly identical shares of short pieces across rival schools is that prediction confirmed. Little overlap in authors is compatible with the passage (“not always in the names”) but does nothing to show that form constrains the choice. Students who go on to whole works would undercut the claim that for most readers the anthology is “the whole of their acquaintance” with a literature. Whether students can name the editor is beside the point.',
        skill: 'strengthen-weaken',
      },
      {
        question:
          'Which of the following is most nearly analogous to the way in which, according to the author, an anthology shapes how writers are remembered?',
        options: [
          'A prize jury whose members share a taste rewards the same style of composition year after year.',
          'A concert hall fills each season with the works that sold the most tickets the season before.',
          'A radio station with three-minute slots makes symphonists known by their briefest pieces.',
          'A critic with a wide readership revives a composer whom earlier listeners had neglected.',
        ],
        correctAnswer: 2,
        explanation:
          'In the author’s account a fixed format, not a judgment of merit, decides what is passed on, so that a writer of long works is known by short ones; the radio slot does the same to composers of symphonies. The prize jury is the picture of the anthologist as a judge with a taste, which the author thinks overstated. The concert hall selects by past popularity, not by the shape of a container. The influential critic is again an individual’s judgment at work, the factor the author plays down.',
        skill: 'application',
      },
      {
        question:
          'A reviewer praises a new anthology for “correcting the record” by adding thirty neglected writers, each represented by a piece of two or three pages. The author would most likely say that this anthology:',
        options: [
          'has met the proposed standard, since it will send readers on to whole books',
          'has altered the roster but not the rule by which any writer is shown',
          'has proved that an editor, after all, holds the power that matters most',
          'has erred, since writers long neglected were neglected with good reason',
        ],
        correctAnswer: 1,
        explanation:
          'The final paragraph says that changing editors or sympathies changes the names while the principle of selection stays, and that “the new writers too will be known by their most portable work”; thirty writers shown by two- or three-page pieces are exactly that case. Nothing in the description indicates that readers are sent on to whole books, which is the reform the author actually wants. The episode shows an editor choosing names inside the usual limits, not holding the decisive power. The author never suggests that neglected writers deserved neglect; neglect is traced to length, not to inferiority.',
        skill: 'new-information',
      },
    ],
  },
  {
    id: 'fl8-cars-a-04',
    section: 'cars',
    discipline: 'psychology',
    title: 'We Lost',
    passageText:
      'On the Monday after a victory, students at universities with prominent football teams are more likely to come to class in the school’s colors than on the Monday after a defeat. Asked to describe the game, they say “we won” of the victories and “they lost” of the defeats. The psychologists who first recorded these habits gave them a memorable name, basking in reflected glory, and an explanation to match: the fan borrows a success in which he had no part, and so obtains at no cost the good opinion of himself that other people must earn. On this view fandom is a small and harmless fraud practiced on oneself.\n\nThe explanation fits the students in the study. It does not fit the people we should most naturally call fans. If what a supporter wanted from a team were a supply of victories to feel proud of, he would do what any sensible borrower does and follow whichever team was winning. A few people do exactly this, and what is instructive is how they are regarded. Among supporters, no one is held in lower esteem than the person who took up the team in its good years and will drop it in its bad ones. The figure honored is the opposite one: the supporter of a team that has won nothing in fifty years, who was in the stands on a wet evening when the season was already lost. A theory on which the central case is a blunder and the despised case is the rational one has mistaken what is being sought.\n\nWhat is sought, I think, is not a success but a membership, and a membership of a kind that has become scarce. Most of the groups to which a modern adult belongs admitted him for some reason and may dismiss him for another. He was hired because he was competent and befriended because he was amusing; he is always, in a mild way, on trial. Allegiance to a team is not like this. It is commonly settled in childhood by a parent or a postal address, before any question of merit could arise. It cannot be earned, and no failure of one’s own can forfeit it.\n\nThis accounts for the peculiar prestige of suffering. Where a membership is not earned by merit, it can be shown only by constancy, and constancy is visible only when leaving would be a relief. A losing season is to the supporter what a hard winter is to a marriage: not what he came for, but the one thing that proves he did not come merely for the weather. As for the pronouns, later studies found that it was the casual followers who said “they” after a defeat. The committed said “we lost.”\n\nIt is often remarked that the attachment is absurd: the players come from elsewhere, are paid by a company, and will be wearing other colors in two years. All true; and the arbitrariness is not a defect in the attachment but a condition of it. A loyalty that rested on reasons would have to be reconsidered whenever the reasons changed. Only a loyalty without grounds can be unconditional.\n\nNone of this makes fandom innocent. A belonging that is defined against a rival carries a hostility with it, and there are stadiums where the hostility is the main event. But fandom should be criticized as what it is. The supporter is not a counterfeiter of achievements. He is a person who has found, in an invented contest, a place where nothing is asked of him except that he stay.',
    questions: [
      {
        question: 'Which of the following best expresses the author’s thesis?',
        options: [
          'Supporters seek an unearned and unconditional belonging, which is why loyalty in defeat is what they honor.',
          'Supporters seek a share in victories they did not win, which is why they speak of the team as themselves.',
          'Supporters seek an outlet for hostility toward rivals, which is why an invented contest serves them well.',
          'Supporters seek the approval of other supporters, which is why they dare not abandon a team that is losing.',
        ],
        correctAnswer: 0,
        explanation:
          'The author argues that what is sought “is not a success but a membership,” one that “cannot be earned” or forfeited, and that this explains “the peculiar prestige of suffering.” The share-in-victories option is the reflected-glory theory, which the author says fits casual students but not real fans. Hostility is conceded in the last paragraph as a cost of fandom, not offered as its aim. Fear of other supporters’ disapproval is never given as the motive; their esteem is used as evidence of what supporting is about.',
        skill: 'main-idea',
      },
      {
        question:
          'The author describes how supporters regard “the person who took up the team in its good years” primarily in order to:',
        options: [
          'show that supporters are harsher toward one another than toward their rivals',
          'show that few people in fact follow a team for the sake of its victories',
          'show that the students in the original study were not supporters at all',
          'show that supporters’ own standards run against the borrowed-glory view',
        ],
        correctAnswer: 3,
        explanation:
          'If fandom were a way of borrowing success, following the winner would be the sensible course; that supporters despise exactly this person and honor the loyal follower of a loser shows, as the paragraph concludes, that the theory “has mistaken what is being sought.” No comparison is drawn between harshness toward fellow supporters and toward rivals. That “a few people” follow winners is mentioned in passing; the point is how they are regarded, not how many they are. The author grants that the theory fits the students and does not deny that they follow the team.',
        skill: 'function',
      },
      {
        question:
          'It can most reasonably be inferred that the author regards the theory of “basking in reflected glory” as:',
        options: [
          'a false description of everyone who follows any team',
          'a fair description of those who follow a team casually',
          'a fair description of supporters at their most devoted',
          'a false description that later studies have withdrawn',
        ],
        correctAnswer: 1,
        explanation:
          'The author says the explanation “fits the students in the study” and later reports that it was “the casual followers” who distanced themselves after a defeat; the theory is thus allowed to hold for casual followers and denied for committed ones. It is therefore not treated as false of everyone. Devoted supporters are precisely those it fails to fit, since they said “we lost.” The later studies are described as locating the pronoun habit among casual followers, not as withdrawing the finding.',
        skill: 'inference',
      },
      {
        question:
          'Which of the following people has a membership most like the one the author attributes to the supporter?',
        options: [
          'A scholar elected to a learned society on the strength of her published work',
          'A voter who joins whichever party is leading in the polls before an election',
          'A man who counts himself a son of his native town, having done nothing for it',
          'A golfer who remains in her club for as long as she pays its yearly subscription',
        ],
        correctAnswer: 2,
        explanation:
          'The supporter’s membership is settled early by circumstances such as “a parent or a postal address,” cannot be earned, and cannot be forfeited by any failure of one’s own; belonging to one’s native town without having done anything for it has the same features. The scholar was admitted on merit, like the adult “hired because he was competent.” The voter who follows the polls is the counterpart of the person who takes up a team in its good years. The golfer’s membership is conditional on continued payment and so can be lost.',
        skill: 'application',
      },
      {
        question: 'Which of the following findings, if true, would most seriously challenge the author’s account?',
        options: [
          'Committed supporters report more distress after a defeat than casual followers do.',
          'Casual followers buy more of a team’s merchandise in winning seasons than in losing ones.',
          'Supporters of long-unsuccessful teams express unusually strong dislike of rival teams.',
          'Most devoted supporters chose their team as adults after comparing several clubs’ records.',
        ],
        correctAnswer: 3,
        explanation:
          'The author’s account rests on allegiance being “settled in childhood” before “any question of merit could arise” and on its having no grounds; if the most devoted supporters picked their teams as adults by comparing records, their attachment would rest on reasons and look like the pursuit of success after all. Greater distress among committed supporters fits the claim that they stay when leaving “would be a relief.” Casual followers buying more in winning seasons matches what the author concedes about them. Strong dislike of rivals is the hostility admitted in the final paragraph.',
        skill: 'strengthen-weaken',
      },
      {
        question: 'The author’s attitude toward fandom is best described as:',
        options: [
          'sympathetic to what it offers, while admitting that it has a darker side',
          'amused by its absurdity, while doubting that it does anyone much harm',
          'admiring of its loyalty, while regretting that the loyalty is unearned',
          'wary of its hostility, while conceding that it flatters those who share it',
        ],
        correctAnswer: 0,
        explanation:
          'The author defends the supporter against the charge of self-deception and treats the belonging as something scarce and worth having, yet adds that “none of this makes fandom innocent,” since it carries hostility toward rivals. The author rejects the “absurd” charge as beside the point and does not minimize harm. The unearned character of the loyalty is presented as its very value, not as a matter for regret. The closing paragraphs deny that fandom is a means of flattering oneself, so the last option reinstates the view the author opposes.',
        skill: 'tone',
      },
    ],
  },
  {
    id: 'fl8-cars-a-05',
    section: 'cars',
    discipline: 'philosophy',
    title: 'Of Flattery, and What It Truly Tells',
    passageText:
      'There is no vice against which the moralists have declaimed with greater unanimity than flattery; and there is none against which they have declaimed with less effect. The flatterer is represented as a kind of thief, who steals upon the understanding in the habit of a friend; and the person flattered as a dupe, who is robbed of the knowledge of himself. The remedy proposed is accordingly discernment: let the great man but learn to distinguish true praise from false, and the flatterer’s trade is at an end. I have long suspected that this account mistakes the nature of the commerce it condemns.\n\nFor it supposes that flattery succeeds by being believed; and I do not find that it is commonly believed. The minister who is told every morning that his speech surpassed the orators of antiquity is seldom so weak as to think it. He knows very well what the speech was. He knows likewise that the same gentleman said the same thing to his predecessor, and will say it to his successor. Yet he is pleased; and he would be sensibly displeased were the compliment omitted. We must therefore inquire what it is that pleases him, since it cannot be the information.\n\nI take it to be this: that praise which is known to be false is nevertheless a true testimony of something else. He who flatters me declares, by the very pains he takes, that my favour is worth the purchasing. He may lie concerning my eloquence; he cannot lie concerning my consequence, for his lie is itself the proof of it. Flattery is thus less a false account of merit than an exact measure of power; and the great man receives it as a landlord receives his rent, without supposing that the tenant pays from affection.\n\nHence several things follow which the common doctrine cannot explain. It is observed that flattery attends upon the place and not upon the person, and removes on the day of his disgrace to the next possessor; which were strange, if its design were to persuade a particular man of his particular virtues. It is observed too that the ablest men have been as open to it as the dullest; which were stranger still, if discernment were the cure. And we may by this distinguish flattery from the common civility often confounded with it. The compliments of the drawing-room are paid alike to all comers, and, signifying nothing of any one, do no injury to truth; flattery is proportioned to the fortune of him who receives it, and rises and falls with his credit.\n\nBut if the flattered man is not deceived, it may be asked wherein he is hurt. I answer, not by what is said to him, but by what in consequence is left unsaid. Those who have found that agreeable falsehoods are expected will not hazard disagreeable truths; and he who has taught all about him the price of his good humour shall at last be the only man who is ignorant of the state of his own affairs. His opinion of himself may be as just as ever; it is his knowledge of everything else that decays.\n\nNor is the remedy what blunt men imagine. He that prides himself upon telling unwelcome truths to all the world has commonly but found a cheaper way of flattering himself. The great man who would be truly served must do a harder thing than detect a falsehood: he must make it safe to tell him the truth, and bear contradiction without resentment; a thing more easily recommended than practised.',
    questions: [
      {
        question: 'The principal thesis of the passage is that flattery:',
        options: [
          'prevails because the great are too vain to tell false praise from true',
          'does no lasting harm, since those who receive it are not taken in by it',
          'is a tribute to power, whose mischief lies in the candour it silences',
          'differs in nothing from the compliments that civility pays to everyone',
        ],
        correctAnswer: 2,
        explanation:
          'The author holds that flattery is “less a false account of merit than an exact measure of power,” and that the flattered man is hurt “by what in consequence is left unsaid.” The vanity option is the common doctrine of deception and discernment that the author disputes. The no-harm option takes the first half of the argument and ignores the fifth paragraph, where the injury is described. The civility option contradicts the fourth paragraph, which separates flattery, proportioned to fortune, from compliments paid “alike to all comers.”',
        skill: 'main-idea',
      },
      {
        question:
          'The comparison of the great man to a landlord who “receives his rent” is meant to convey that the great man:',
        options: [
          'takes flattery as his due, with no illusion about the giver’s motives',
          'values flattery chiefly for the profit that he is able to draw from it',
          'expects flattery only from persons who live upon his own estate',
          'believes that those who flatter him are attached to his person',
        ],
        correctAnswer: 0,
        explanation:
          'Rent is paid because of the landlord’s position, and he accepts it “without supposing that the tenant pays from affection”; likewise the great man accepts flattery as an acknowledgment of his power and is not deceived about why it is offered. Nothing is said of his turning flattery to profit; the pleasure lies in the testimony to his consequence. The estate belongs to the figure of speech and is not a claim about who flatters him. Believing in the flatterers’ attachment is exactly what the comparison rules out.',
        skill: 'inference',
      },
      {
        question: 'The reasoning of the second paragraph is best described as:',
        options: [
          'citing a single deceived minister and extending the case to all who hold office',
          'granting that flattery is believed and denying that the belief does any injury',
          'showing that flatterers are insincere and concluding that they cannot please',
          'noting that the pleasure remains where belief is absent and seeking another cause for it',
        ],
        correctAnswer: 3,
        explanation:
          'The paragraph observes that the minister does not believe the compliment, has reason to know it is routine, and is pleased all the same; it concludes that we must ask “what it is that pleases him, since it cannot be the information.” The minister is described as not deceived, so he is no example of a dupe. The paragraph denies, and does not grant, that flattery is commonly believed. It states that the minister “is pleased,” so it cannot be concluding that insincere flatterers fail to please.',
        skill: 'function',
      },
      {
        question:
          'Which of the following persons is engaged in flattery, as the author distinguishes it from civility?',
        options: [
          'A hostess who assures every departing guest that the evening was the better for his company',
          'A clerk who praises his superiors, and most warmly those with most say in his promotion',
          'A reviewer who commends a book that she admires, written by an author she has never met',
          'A tutor who tells each of her pupils in turn that the last essay showed some improvement',
        ],
        correctAnswer: 1,
        explanation:
          'Flattery, for the author, “is proportioned to the fortune of him who receives it”; the clerk’s praise is graded by his superiors’ power over him. The hostess and the tutor say the same pleasant thing to everyone, which is the mark of civility: compliments “paid alike to all comers” that signify “nothing of any one.” The reviewer’s praise is believed by the person who gives it and is directed at someone with no power over her, so it is neither proportioned to fortune nor a purchase of favour.',
        skill: 'application',
      },
      {
        question:
          'Suppose that a minister, retired for good in old age and without any remaining influence, continued to receive the same compliments from the same persons as before. On the author’s account, this would most reasonably be taken as:',
        options: [
          'proof that he had been deceived about his talents while in office',
          'a sign that what he had been receiving was something other than flattery',
          'confirmation that flattery attends the place and not the person',
          'an instance of the cheap self-flattery practised by blunt men',
        ],
        correctAnswer: 1,
        explanation:
          'The author says flattery follows the place, “removes on the day of his disgrace to the next possessor,” and “rises and falls” with a man’s credit. Compliments that outlast all power therefore fail the author’s test for flattery and must be something else, such as sincere regard or ordinary civility. The scenario shows nothing about whether the minister believed the praise. It is the reverse of what would confirm that flattery attends the place, since here the compliments stayed with the person. The blunt man tells unwelcome truths, which is no part of the case.',
        skill: 'new-information',
      },
      {
        question:
          'A company director wishes to guard against the injury that, according to the author, flattery does. Which of the following measures would the author most likely advise?',
        options: [
          'Reviewing her own record closely, so as to know when praise of her is undeserved',
          'Appointing as her deputy a colleague known for telling everyone their faults',
          'Rewarding openly a subordinate who warned her that a plan of hers was failing',
          'Forbidding compliments of every kind at meetings, the routine courtesies included',
        ],
        correctAnswer: 2,
        explanation:
          'The injury is that those around the great “will not hazard disagreeable truths,” and the remedy is to “make it safe to tell him the truth, and bear contradiction without resentment”; openly rewarding a subordinate who brought bad news does this. Learning to detect undeserved praise is discernment, which the author says is not the cure, since the flattered person’s opinion of herself “may be as just as ever.” The colleague who tells everyone their faults is the blunt man, dismissed in the last paragraph. Routine courtesies “do no injury to truth,” and banning them does nothing to make candour safe.',
        skill: 'application',
      },
    ],
  },
]
