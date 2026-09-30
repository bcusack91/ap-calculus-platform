import type { MCATPassage } from '../types'

/**
 * MCAT Full-Length Form 1 — CARS, file A (passages 1–5, 6 questions each).
 *
 * Five original argument-driven passages (500–600 words) across humanities and
 * social-science genres: literary criticism, historiography, philosophy (in an
 * early-twentieth-century essayist voice), economics, and architecture. Every
 * key is derivable from the passage alone; no outside knowledge is needed.
 */
export const FL1_CARS_A_PASSAGES: MCATPassage[] = [
  {
    id: 'fl1-cars-a-01',
    section: 'cars',
    discipline: 'literary criticism',
    title: 'The Second Time Through',
    passageText:
      'There is a familiar reproach directed at people who reread. The world is full of books they have not opened, the reproach goes, and every hour spent on a novel already known is an hour stolen from one that might have changed them. The reproach has the shape of a moral argument — it speaks of duty, of the unread waiting like the unvisited — and it is worth taking seriously precisely because it is not silly. But it rests on a picture of reading that I think is false, and once the picture is corrected the reproach loses most of its force.\n\nThe picture is this: a book is a quantity of content, and reading is the act of transferring that content into oneself. On this view a second reading is redundant by definition; the transfer has already occurred. Anyone who has actually reread a novel knows how poorly this describes the experience. The second time through, the book is not the same book. Sentences that were scaffolding become the point. A character’s remark in the third chapter, which on first acquaintance seemed idle, now sounds like a confession, because we know what she will do in the twelfth. The first reading, in other words, is hostage to plot. We cannot help hurrying, because we do not know what happens, and hurrying is a way of not seeing.\n\nIt follows that the first reading of a novel is, in a strict sense, not yet a reading of it at all. It is a reconnaissance. Only when suspense has been spent can attention settle on what the writer was actually doing — the arrangement, the withholding, the echo of one scene in another. I do not mean that first readings are worthless; they are indispensable, in the way that learning the rules is indispensable to playing a game. I mean that they are preliminary, and that a culture which treats the first reading as the whole of reading has confused the preliminary with the thing itself.\n\nThe reproach, then, has its arithmetic backward. It counts the reread novel as one book consumed twice. It should count the unreread novel as a book half-read, and the shelves of the voracious first-reader as a monument to reconnaissance without occupation.\n\nThere is, admittedly, a version of rereading that deserves the reproach: the return that seeks only the comfort of the familiar, that wants the old feeling reproduced and would resent the book for changing. But this is not rereading; it is the use of a book as a blanket. The test is simple. Ask whether the reader is willing to find, on the second time through, that the novel is worse than she remembered — or, more unsettlingly, that she was a worse reader then than she is now. Real rereading is exposed to both discoveries and is often rewarded with the second. That is why it is not a retreat from the new. It is the only way to find out what the book, and the reader, were.\n\nWhat we owe a novel, if we owe it anything, is not the courtesy of a single visit. It is the willingness to be corrected by it, and correction takes more than one try.',
    questions: [
      {
        question: 'Which of the following best states the main idea of the passage?',
        options: [
          'Rereading a novel is justified mainly because it offers the comfort of a familiar experience.',
          'The duty to read unread books outweighs the pleasure of returning to books already known.',
          'A first reading of a novel is only preliminary, so returning to it is where reading properly begins.',
          'Readers should reread only those novels they suspect they misjudged on the first encounter.',
        ],
        correctAnswer: 2,
        explanation:
          'The passage builds to the claim that a first reading is “a reconnaissance” and that treating it as the whole of reading confuses “the preliminary with the thing itself”; rereading is where attention can finally settle on what the writer was doing. The comfort-of-the-familiar option describes the kind of return the author explicitly disowns as “the use of a book as a blanket.” The duty-to-the-unread option states the reproach the passage sets out to answer. The misjudgment option is too narrow: the author recommends rereading as such, not only for books one suspects one got wrong.',
        skill: 'main-idea',
      },
      {
        question: 'The author most likely introduces the image of a book used “as a blanket” in order to:',
        options: [
          'set apart a return that deserves the reproach from the rereading being defended.',
          'illustrate the comfort that draws most readers back to the novels they loved in youth.',
          'show that the reproach against rereading applies to every return to a familiar book.',
          'argue that readers who fear being corrected by a book should not attempt to reread it.',
        ],
        correctAnswer: 0,
        explanation:
          'The fifth paragraph opens with “admittedly” and grants that a return seeking only “the comfort of the familiar” deserves the reproach, then denies that this counts as rereading at all — a concession that isolates what the author is defending. The comfort option treats the image as a description of typical readers, but the author uses it to mark a failure, not a norm. The every-return option reverses the paragraph, which limits the reproach to one kind of return. The avoid-rereading option is advice the passage never gives; the author asks readers to be willing to be corrected, not to abstain.',
        skill: 'function',
      },
      {
        question: 'According to the passage, each of the following is characteristic of genuine rereading EXCEPT:',
        options: [
          'attention to the way scenes are arranged and echo one another.',
          'openness to finding the novel worse than one remembered.',
          'the discovery that one was formerly a less capable reader.',
          'the expectation that the original feeling will be reproduced.',
        ],
        correctAnswer: 3,
        explanation:
          'Wanting “the old feeling reproduced” is precisely what the author says marks the blanket-like return that “is not rereading.” Attention to arrangement and echoes is what the author says a second reading makes possible once suspense is spent. Willingness to find the novel worse is the first half of the author’s “simple” test, and discovering that one was a worse reader then is the second half, which the author says real rereading “is often rewarded with.”',
        skill: 'detail',
      },
      {
        question: 'Suppose a reader reports that, on returning to a novel she had admired, she found it far weaker than she remembered. The author would most likely regard this as:',
        options: [
          'evidence that her first reading, rather than the second, was the accurate one of the two.',
          'a sign that she had genuinely reread the novel rather than merely revisited it.',
          'proof that the novel rewarded only the suspense of a first encounter.',
          'a reason for her to prefer unread books in the future.',
        ],
        correctAnswer: 1,
        explanation:
          'The author’s test for real rereading is whether the reader is “willing to find … that the novel is worse than she remembered”; a reader who makes that discovery has passed the test, since the blanket-seeking reader “would resent the book for changing.” Nothing in the passage privileges the first reading as more accurate; the author calls it a reconnaissance. The suspense option treats a downgraded verdict as the novel’s fault, whereas the passage presents such discoveries as what rereading is “exposed to,” not as proof about the book. The prefer-unread option restates the reproach the author rejects.',
        skill: 'new-information',
      },
      {
        question: 'The author’s claim that a first reading is “not yet a reading of it at all” depends on which of the following assumptions?',
        options: [
          'Seeing what a novel does with its arrangement matters more to reading it than learning what happens in it.',
          'Most novels are written so that their plots cannot be anticipated by a reader on a first encounter with them.',
          'Readers who hurry through a novel retain less of its content than those who read slowly.',
          'A novelist intends the work to be read more than once by the same person.',
        ],
        correctAnswer: 0,
        explanation:
          'The author argues that the first reading is “hostage to plot” and that only afterward can attention settle on “what the writer was actually doing”; calling the first pass not a reading only follows if attending to arrangement is what reading essentially is, rather than finding out what happens. The unpredictable-plot option is not needed: the argument concerns the reader’s hurry under uncertainty, not whether a plot could be guessed. The retention option belongs to the content-transfer picture the author rejects. Authorial intention plays no role in the argument, which is about the reader’s attention.',
        skill: 'assumption',
      },
      {
        question: 'Which of the following situations is most analogous to the author’s account of a first and a second reading?',
        options: [
          'A diner who orders the same dish on each visit because it has never disappointed her.',
          'A student who memorizes a proof, forgets it, and then memorizes it a second time.',
          'A traveler who spends a first visit to a city finding her way and a second visit noticing its buildings.',
          'A musician who performs a piece flawlessly after rehearsing it many times.',
        ],
        correctAnswer: 2,
        explanation:
          'The passage describes the first reading as a “reconnaissance” consumed by not knowing what happens, and the second as the point at which attention can settle on what is actually there; the traveler’s two visits map onto both halves. The diner is the blanket-seeking reader who wants the old experience reproduced. The forgetful student repeats the same transfer of content, which is the redundant picture the author rejects. The musician’s rehearsals aim at reproducing a performance, not at seeing the piece differently.',
        skill: 'application',
      },
    ],
  },
  {
    id: 'fl1-cars-a-02',
    section: 'cars',
    discipline: 'history / historiography',
    title: 'The Only Witness',
    passageText:
      'Every historian of a distant period eventually meets the problem of the only witness. For some year, some rebellion, some town, there survives a single account — a chronicle, a letter, a tax roll — and it was written by someone with an interest in what we conclude. The monk who recorded the uprising served the abbey the rebels attacked. The official who tallied the harvest was paid according to the tally. The instinct of a careful scholar is to handle such a document with tongs: to note the bias, discount accordingly, and say as little as possible. I want to argue that this instinct, though it looks like rigor, is a way of throwing away evidence.\n\nThe discounting model treats bias as a kind of contamination. Somewhere beneath the monk’s hostility, it supposes, lies a true account of the uprising, and the historian’s job is to strip the hostility away and recover it, like cleaning varnish from a painting. But there is no clean layer underneath. The monk did not first observe the rebellion neutrally and then add his disapproval; he saw the rebellion as a man of the abbey sees one, and the seeing and the disapproving were a single act. What the chronicle records, with great fidelity, is that act. Read as a report of the rebels, it is compromised. Read as a report of the abbey — of what its members feared, what they thought worth mentioning, which insults they found unforgivable — it is nearly perfect, because that is the one subject on which the author could not help being accurate.\n\nThe objection comes quickly, and it is a serious one. If we read the chronicle only as evidence about the chronicler, we have lost the rebellion. We wanted to know what happened in the fields, not in the scriptorium, and the reframing simply changes the subject to one that the evidence can bear. History, on this view, becomes a history of documents, and the people who left none disappear a second time.\n\nThe objection is right about the danger and wrong about the remedy. The remedy is not to return to discounting but to ask a different question of the biased source: not “what does it claim?” but “what does it concede?” A hostile witness who admits that the rebels marched in good order, or that the townsmen fed them, has told us something he had every reason to suppress. Such admissions are the most reliable facts in any partisan account, precisely because they run against the grain of its purpose. The discounting model, which reduces everything the monk says by the same fraction, cannot see this. It treats his claim that the rebels were demons and his admission that they were disciplined as equally suspect, when the first is worth nothing and the second is worth a great deal.\n\nNone of this rescues the only witness from being only one. Where a second source exists, even a fragment, the historian should prefer it to any amount of ingenuity. But scarcity is the normal condition of the past, and a method that works only when sources are plentiful is not a method for history. The single hostile chronicle is not a damaged record of the rebellion. It is an undamaged record of a mind confronting one, and a mind, read correctly, will give up more than it meant to.',
    questions: [
      {
        question: 'The primary purpose of the passage is to:',
        options: [
          'defend the practice of discounting biased sources against its recent critics.',
          'argue that a partisan source yields reliable evidence when read for what it concedes rather than discounted uniformly.',
          'show that the history of a period can be written only from the documents its participants left behind.',
          'demonstrate that hostile chroniclers are more accurate about events than sympathetic ones.',
        ],
        correctAnswer: 1,
        explanation:
          'The author rejects discounting as “a way of throwing away evidence” and proposes instead asking “what does it concede?”, holding that admissions against the writer’s purpose are “the most reliable facts in any partisan account.” The defend-discounting option reverses the author’s position. The documents-only option is the “history of documents” worry the author raises as an objection and then answers. The hostile-versus-sympathetic option overreaches: the passage says hostile witnesses are accurate about their own preoccupations and concessions, not about events generally.',
        skill: 'main-idea',
      },
      {
        question: 'The passage suggests that a hostile chronicle is “nearly perfect” as evidence about:',
        options: [
          'the course of the events it purports to describe.',
          'the motives of the rebels whom it condemns.',
          'the sequence of the rebellion’s several episodes.',
          'the concerns of the chronicler’s abbey.',
        ],
        correctAnswer: 3,
        explanation:
          'The author says the chronicle read “as a report of the abbey — of what its members feared, what they thought worth mentioning, which insults they found unforgivable — … is nearly perfect,” because that is the subject on which the writer could not help being accurate. Read as a report of the rebels, the same chronicle is “compromised,” which rules out the events and the rebels’ motives. Nothing in the passage claims special accuracy about the order of episodes.',
        skill: 'detail',
      },
      {
        question: 'Based on the author’s reasoning, which of the following statements in a partisan document would a historian be most justified in accepting?',
        options: [
          'A company newsletter written to raise morale mentions that a rival’s product outsold its own.',
          'A general’s memoir written to defend his record reports that his troops were badly outnumbered.',
          'A landlord’s petition to the crown states that his tenants were idle and ungrateful.',
          'A candidate’s campaign pamphlet states that his opponent has never held elected office.',
        ],
        correctAnswer: 0,
        explanation:
          'The author’s rule is that admissions which “run against the grain” of a document’s purpose are its most reliable content; a morale-boosting newsletter has every reason to suppress a rival’s success, so mentioning it is such a concession. The general’s claim of being outnumbered serves his defensive purpose and so is exactly the kind of claim the author would treat with suspicion. The landlord’s complaint and the candidate’s attack both advance the writer’s aims and are the equivalent of the monk calling the rebels demons.',
        skill: 'application',
      },
      {
        question: 'The third paragraph serves primarily to:',
        options: [
          'summarize the discounting model before the author rejects it.',
          'concede that the author’s approach abandons the study of events for the study of documents.',
          'present a serious objection whose diagnosis the author accepts but whose remedy he rejects.',
          'shift the subject of the passage from the rebels to the chroniclers who wrote about them.',
        ],
        correctAnswer: 2,
        explanation:
          'The paragraph states the objection that reading a source as evidence about its author means “we have lost the rebellion,” and the next paragraph opens by calling it “right about the danger and wrong about the remedy.” The discounting model was summarized in the second paragraph, not the third. The author does not concede that his approach abandons events; he offers the concession-reading precisely to recover them. The shift from rebels to chroniclers is what the objection complains about, not what the paragraph itself performs.',
        skill: 'function',
      },
      {
        question: 'Which of the following findings, if true, would most weaken the author’s argument?',
        options: [
          'Historians of well-documented periods rarely rely on a single source.',
          'Most surviving medieval chronicles were written by members of the clergy.',
          'Sympathetic accounts of rebellions tend to exaggerate the discipline of the rebels.',
          'Partisan writers often inserted concessions to their opponents in order to appear credible.',
        ],
        correctAnswer: 3,
        explanation:
          'The author’s method rests on the claim that a concession is reliable “precisely because” it runs against the writer’s purpose; if concessions were themselves a rhetorical tactic serving that purpose, they would no longer be admissions against interest and the method would collapse. That historians with many sources rarely use one is consistent with the author’s preference for a second source. The clergy finding merely confirms the kind of bias the author already assumes. Exaggeration by sympathetic writers concerns a different kind of source and does not touch the reliability of hostile concessions.',
        skill: 'strengthen-weaken',
      },
      {
        question:
          'With which of the following statements would the author most likely agree?\n\nI. A fragmentary second source is worth more than skilled interpretation of a single one.\nII. A partisan account is worthless as evidence about the events it describes.\nIII. A witness’s bias and perception cannot be separated into distinct layers.',
        options: ['I only', 'I and III only', 'II and III only', 'I, II, and III'],
        correctAnswer: 1,
        explanation:
          'Statement I matches the final paragraph, where a second source, “even a fragment,” should be preferred “to any amount of ingenuity.” Statement III restates the second paragraph’s claim that “there is no clean layer underneath” because seeing and disapproving “were a single act.” Statement II is contradicted by the fourth paragraph: concessions in a partisan account are “the most reliable facts” about the events, so the account is not worthless as evidence about them.',
        skill: 'inference',
      },
    ],
  },
  {
    id: 'fl1-cars-a-03',
    section: 'cars',
    discipline: 'philosophy',
    title: 'Of Habit and the Free Man',
    passageText:
      'It is commonly supposed, and by persons of no small reflection, that habit is the enemy of freedom; that every act which has hardened into custom is an act withdrawn from the will; and that the free man is he who, meeting each occasion afresh, decides it upon its merits without the prompting of yesterday. There is in this opinion a flattering picture of ourselves, and I do not wonder that it is popular. But I believe it to be mistaken in its foundation, and I shall endeavour to show that habit, so far from being the jailer of the will, is the only instrument by which the will accomplishes anything at all.\n\nConsider first what a life would be in which nothing had become habitual. Every morning the question of rising would present itself as a question; every meal, every civility, every stroke of the pen would require a fresh deliberation and a fresh resolve. Such a man would not be free; he would be paralysed, for the whole of his attention would be consumed in decisions which the rest of us have long since delegated to the body. It is because I need not decide how to walk that I am at liberty to decide where. The habitual is the ground upon which choice stands, and to wish it away is to wish away the floor in order to be rid of the walls.\n\nNor is this merely a matter of economy. The man of settled habits has, in a sense that the reckless deliberator has not, a character; and it is character, not the momentary caprice, that we have in view when we speak of a person acting freely. When we say that a man of honour could not have taken the bribe, we do not mean that he was compelled; we mean that his refusal proceeded from himself so entirely that no deliberation was required. His habit was his freedom, and the deliberation, had it occurred, would have been the first symptom of its decay.\n\nI am aware that an objection presses here, and I do not wish to evade it. There are habits, it will be said, that were never chosen: the drunkard’s, the miser’s, the habits of prejudice contracted in a nursery and never afterwards examined. Are these too the instruments of freedom? They are not; and the distinction on which I would insist is precisely this. The tyranny of habit is real, but it is the tyranny of habits which the man did not lay down for himself and cannot now revise. Freedom does not consist in having no habits, which is impossible, nor in acting against them, which is mere disorder, but in the power of choosing which habits shall be formed and of unmaking those that have been ill-formed. The free man is not the man without a road; he is the man who built his own.\n\nIt follows that the moments in which freedom is truly exercised are rarer, and graver, than the popular picture allows. They are not the thousand trivial choices of a day, most of which are better left to custom, but the few occasions on which a habit is founded or broken — the resolution kept for a month until it keeps itself, the acquaintance dropped, the vice at last confronted. Whoever spends his liberty on the small decisions will find he has none left for these. The economy of the will, like any other, requires that we save.',
    questions: [
      {
        question: 'The central claim of the passage is that:',
        options: [
          'freedom consists in the power to form and revise one’s habits, not in the absence of habit.',
          'a life governed by habit is preferable to a life of deliberation because it demands less effort.',
          'habits acquired without choice are the only genuine obstacles to living a free life.',
          'the free man is the one who decides each occasion on its own merits as it arises.',
        ],
        correctAnswer: 0,
        explanation:
          'The fourth paragraph states the thesis directly: freedom lies “in the power of choosing which habits shall be formed and of unmaking those that have been ill-formed,” and the final paragraph locates freedom in the moments when a habit is founded or broken. The less-effort option reduces the argument to the economy point, which the author says is not the whole of it (“Nor is this merely a matter of economy”). The unchosen-habits option names an obstacle the author recognizes but does not state what freedom is. The decides-each-occasion option is the popular opinion the passage sets out to refute.',
        skill: 'main-idea',
      },
      {
        question: 'The author’s attitude toward those who hold the “common” opinion described in the first paragraph can best be described as:',
        options: [
          'contemptuous of their want of reflection.',
          'anxious about the spread of their view.',
          'courteous but firmly in disagreement.',
          'persuaded by their reasoning on reflection.',
        ],
        correctAnswer: 2,
        explanation:
          'The author credits the opinion to “persons of no small reflection,” says he does “not wonder that it is popular,” and only then declares it “mistaken in its foundation” — respect paired with rejection. The contempt option contradicts the explicit acknowledgment that thoughtful people hold the view. Nothing in the passage expresses alarm about the view spreading. The persuaded option reverses the author’s stated intention to show the view is wrong.',
        skill: 'tone',
      },
      {
        question: 'The author uses the example of the man of honour who “could not have taken the bribe” to illustrate that:',
        options: [
          'compulsion and freedom cannot be told apart by an outside observer.',
          'an action from settled character can be free without deliberation.',
          'men of honour deliberate more carefully than others before refusing a bribe.',
          'habits of honesty are formed only through repeated exposure to temptation.',
        ],
        correctAnswer: 1,
        explanation:
          'The author says the refusal “proceeded from himself so entirely that no deliberation was required” and that “his habit was his freedom,” so the example shows freedom expressed through character rather than through choice in the moment. The indistinguishability option misreads “could not have”: the author explicitly denies that the man was compelled. The deliberates-more option inverts the example, in which deliberation would be “the first symptom of decay.” The passage says nothing about how the habit of honesty was formed.',
        skill: 'detail',
      },
      {
        question: 'Suppose a man who once resolved to rise early has, after months of effort, come to do so without a thought. According to the passage, his early rising is now:',
        options: [
          'no longer free, because the will is no longer consulted each morning.',
          'a habit of the tyrannical kind, because he can no longer easily revise it.',
          'an act of paralysis, because attention has been withdrawn from it.',
          'an instrument of his freedom, because he laid the habit down for himself.',
        ],
        correctAnswer: 3,
        explanation:
          'The final paragraph names exactly this case — “the resolution kept for a month until it keeps itself” — as an occasion on which freedom is exercised, and the fourth paragraph distinguishes tyrannical habits as those a man “did not lay down for himself.” The no-longer-free option is the popular view the passage rejects. The tyrannical option fails because the habit was chosen, and nothing suggests it cannot be revised. The paralysis option confuses the author’s point: paralysis results from the absence of habit, not from its presence.',
        skill: 'new-information',
      },
      {
        question: 'Which of the following persons would the author most likely regard as exercising freedom in the fullest sense?',
        options: [
          'A woman who takes a different route to work each morning in order to avoid routine.',
          'A man who deliberates every day about whether to keep a standing appointment.',
          'A woman who, after a long struggle, gives up a prejudice she now recognizes as ill-founded.',
          'A man who acts against his usual custom whenever he feels an impulse to do so.',
        ],
        correctAnswer: 2,
        explanation:
          'The author says freedom is truly exercised on “the few occasions on which a habit is founded or broken,” including “the vice at last confronted,” and specifically names prejudices “contracted in a nursery” as habits that must be unmade. The route-varying woman and the impulsive man both act against habit for its own sake, which the author calls “mere disorder.” The man who deliberates daily is the “reckless deliberator” who spends his liberty on small decisions and has none left for the graver ones.',
        skill: 'application',
      },
      {
        question: 'Which of the following, if true, would most weaken the author’s claim that “the economy of the will, like any other, requires that we save”?',
        options: [
          'Routine deliberation leaves the capacity for major decisions undiminished.',
          'Most people perform the majority of their daily actions without any conscious thought.',
          'Habits, once formed, are far more difficult to revise than the author supposes them to be.',
          'The man of honour in the third paragraph may have deliberated without showing it.',
        ],
        correctAnswer: 0,
        explanation:
          'The economy claim holds that liberty spent on trivial choices leaves none for the grave ones; evidence that routine deliberation does not deplete the capacity for major decisions denies the scarcity the claim assumes. The finding that most daily actions are unconscious supports rather than undermines the author’s picture of delegation to the body. Greater difficulty in revising habits bears on the fourth paragraph, not on the economy of the will. The hidden-deliberation option challenges the man-of-honour example, not the claim about saving.',
        skill: 'strengthen-weaken',
      },
    ],
  },
  {
    id: 'fl1-cars-a-04',
    section: 'cars',
    discipline: 'economics',
    title: 'The Price of a Gift',
    passageText:
      'When a society forbids the sale of something it permits people to give away, it owes an explanation. Blood, kidneys, and bone marrow may all be donated; in most countries none may be sold. The usual explanations fall into two families, and I want to suggest that the first is much weaker than its popularity implies, and that the second, taken seriously, condemns the prohibition it is supposed to justify.\n\nThe first explanation holds that a price corrupts the thing priced. Blood given freely, on this view, expresses solidarity; blood sold is merely a commodity, and once a market exists the gift dies, because no one gives what others are paid for. The argument has a real empirical premise — that payment drives out donation — and where that premise holds it deserves weight. But notice what the argument does not show. It does not show that the donor’s kidney is degraded by a payment; it shows that the donor’s gesture is. A kidney filters blood identically whether it arrived by gift or by sale, and the patient who receives it is equally alive. To prefer the gesture to the organ is to prefer the moral comfort of the giving public to the survival of the waiting patient, and I do not see why the second should be sacrificed to the first.\n\nThe second explanation is more serious. It holds that a market in organs would be a market in which the poor sell and the rich buy, and that a choice made under the pressure of debt is not the free exchange that markets presuppose. A person who sells a kidney to keep her house has not been offered an opportunity; she has been offered a way of being harmed less. This is the objection that keeps thoughtful people on the side of prohibition, and it is correct about what a bad market would look like.\n\nBut consider what the prohibition actually accomplishes for the woman in question. It does not pay her mortgage. It removes one option from a set that was already too small, and it does so in the name of protecting her from a choice we have decided she cannot be trusted to make. The pressure of circumstance remains; only the payment is gone. If our concern is genuinely her freedom, it is odd to express it by narrowing what she may do with her own body while leaving untouched the conditions that narrowed her choices in the first place.\n\nThe fairness objection points, I think, not toward prohibition but toward design. A market in which a single public purchaser pays a fixed sum, allocates organs by medical need rather than by ability to pay, and screens donors for coercion and for financial desperation is not the market the objection fears. The rich would not buy, because no one would be selling to them; the poor would not be the only sellers, because a fixed and fair price is attractive to many. Whether such a scheme would work is an empirical question, and I hold my confidence loosely. But it is at least addressed to the objection, whereas prohibition merely restates it.\n\nThose who resist paying for organs often say that some things should not be for sale. I agree. What I deny is that this settles anything, because the question was never whether organs should be for sale, but whether a rule against selling them is the best way of honoring the people who need them and the people who might provide them.',
    questions: [
      {
        question: 'Which of the following best expresses the author’s main conclusion?',
        options: [
          'Markets in organs should be permitted because a price does not alter what an organ can do.',
          'The corruption objection to organ sales is decisive, but the fairness objection is not.',
          'Organ sales should remain prohibited until the economic pressures on the poor are removed.',
          'A regulated system of payment answers the fairness objection better than prohibition does.',
        ],
        correctAnswer: 3,
        explanation:
          'The fifth paragraph is the passage’s destination: the fairness objection “points … not toward prohibition but toward design,” and a fixed-price public-purchaser scheme “is at least addressed to the objection, whereas prohibition merely restates it.” The organ-function option captures only the reply to the corruption objection, not the conclusion. The decisive-corruption option reverses the author’s ranking, since the corruption objection is called the weaker one. The prohibit-until option is closest to the position the fourth paragraph criticizes, in which prohibition leaves the pressure of circumstance untouched.',
        skill: 'main-idea',
      },
      {
        question: 'The author’s reply to the corruption objection turns on a distinction between:',
        options: [
          'organs that are donated and organs that are purchased.',
          'the value of a giver’s gesture and the value of what is given.',
          'blood, which the body replenishes, and kidneys, which it does not.',
          'the empirical premises of an argument and its moral conclusion.',
        ],
        correctAnswer: 1,
        explanation:
          'The author concedes that payment may degrade “the donor’s gesture” but denies that it degrades “the donor’s kidney,” which functions identically either way; the reply is that the objection has confused the two. The donated-versus-purchased option is the distinction the objection itself draws, not the author’s reply to it. The blood-versus-kidney contrast is never made in the passage. The author does note the objection’s empirical premise, but the reply does not rest on separating premises from conclusions; it rests on what the argument fails to show even where the premise holds.',
        skill: 'inference',
      },
      {
        question: 'Suppose that after a country began paying for blood, its total blood supply fell because donations ceased faster than sales increased. The author would most likely:',
        options: [
          'deny that the finding bears on the question, since blood and organs differ.',
          'concede that the corruption objection is sound in every case and abandon support for payment.',
          'grant the objection weight in that case, since its premise that payment drives out donation held there.',
          'argue that the fall in supply concerns only the donors’ gesture and not the patients’ interest.',
        ],
        correctAnswer: 2,
        explanation:
          'The author explicitly says the corruption argument’s premise “that payment drives out donation” deserves weight “where that premise holds,” and the finding is a case in which it holds. The author treats blood and organs together throughout, so the differ option is unsupported. Granting weight in one case is not conceding the objection everywhere, and the author’s preferred scheme is designed to attract sellers, so wholesale abandonment goes too far. The gesture-only option misapplies the author’s distinction: a fall in supply harms the waiting patient, which is exactly the interest the author says should not be sacrificed.',
        skill: 'new-information',
      },
      {
        question: 'The sentence “The pressure of circumstance remains; only the payment is gone” serves to:',
        options: [
          'show that prohibition fails the fairness objection’s own test.',
          'concede that a market would leave the woman’s circumstances unchanged.',
          'illustrate how a badly designed market would exploit those in debt.',
          'introduce the author’s proposal for a single public purchaser of organs.',
        ],
        correctAnswer: 0,
        explanation:
          'The fairness objection is concerned with choices made “under the pressure of debt”; the sentence points out that prohibition leaves that pressure intact and removes only an option, so it does not serve the freedom the objection invokes. The concession option misattributes the point to markets, whereas the sentence is about what prohibition accomplishes. The bad-market option belongs to the third paragraph, which describes the objection, not the author’s reply. The public-purchaser proposal is introduced in the following paragraph, and the sentence prepares the ground for it rather than stating it.',
        skill: 'function',
      },
      {
        question: 'Which of the following policies is most consistent with the author’s reasoning?',
        options: [
          'Prohibiting organ sales while expanding public campaigns to encourage donation.',
          'Allowing only a public agency to buy organs, at a fixed price, and to allocate them by medical need.',
          'Allowing any hospital to purchase organs directly at whatever price individual sellers are willing to accept.',
          'Permitting organ sales only between members of the same family.',
        ],
        correctAnswer: 1,
        explanation:
          'The author’s proposed design has a single public purchaser, a fixed sum, allocation by need, and screening for desperation, so the public-agency option matches it. The prohibition-plus-campaigns option keeps the rule the author says “merely restates” the objection. Unregulated hospital purchasing at any price is the market in which “the poor sell and the rich buy,” which the author agrees would be bad. Family-only sales address neither allocation by need nor the pressure of circumstance and appear nowhere in the author’s reasoning.',
        skill: 'application',
      },
      {
        question: 'The author’s confidence that the proposed scheme would succeed is best described as:',
        options: [
          'unqualified, since the scheme answers both of the objections raised.',
          'feigned, since the author privately expects the scheme to fail.',
          'absent, since the author regards the question as unanswerable in principle.',
          'provisional, since its success is left an open question.',
        ],
        correctAnswer: 3,
        explanation:
          'The author writes that whether the scheme “would work is an empirical question, and I hold my confidence loosely,” which is confidence held provisionally. The unqualified option ignores that hedge. Nothing suggests the author expects failure; the scheme is offered as the better response. The absent option overstates the hedge: an empirical question is answerable, and the author still favors the scheme as “at least addressed to the objection.”',
        skill: 'tone',
      },
    ],
  },
  {
    id: 'fl1-cars-a-05',
    section: 'cars',
    discipline: 'art / aesthetics',
    title: 'Buildings We Cannot Refuse',
    passageText:
      'A private house may be as strange as its owner likes. If the staircase is a puzzle and the front door is hidden, the people who suffer are the people who chose it, and the architect’s experiment is conducted on willing subjects. A public building is another matter. Nobody chooses the courthouse in which they will be tried, the clinic where they will wait, the office where a benefit is applied for. The users of such buildings are, in the relevant sense, captive, and I want to argue that this fact — not beauty, not economy, not the expression of civic ideals — is the one from which the ethics of public architecture should begin.\n\nThe argument is not that public buildings must be plain. It is that they owe their users a particular kind of courtesy, which I will call legibility: a person entering for the first time, anxious and possibly unwell, should be able to tell where to go, where to wait, and how to leave, without asking and without being made to feel foolish. This sounds modest. It is, in practice, the first thing sacrificed. The lobby that reads as a grand gesture from the street reads as a void from the inside; the sculptural staircase declines to say whether it is for the public; the entrance, moved to the side for the sake of a clean elevation, must be found by following the people who already know. Each of these choices is defended in the language of design and experienced in the language of humiliation.\n\nCritics of this view say that it makes architecture servile. A building, they argue, may legitimately challenge its users, provoke them, or ask something of them, as a difficult novel or an unfamiliar piece of music does, and to demand that it be immediately intelligible is to demand that it be dull. I have some sympathy for this, and I think it is right about museums, concert halls, and the other buildings a person enters by choice and may leave when the challenge palls. The visitor to a gallery has consented to be provoked. But the analogy to the difficult novel fails exactly where the public building differs from the gallery: the novel can be closed. The defendant cannot put down the courthouse.\n\nWhat the critics miss, then, is that the architect’s licence to challenge is not a property of buildings but of the relationship between a building and the people in it, and that the relationship changes when the people cannot leave. The less choice the user has, the more the building owes. A prison owes more than a clinic, a clinic more than a library, a library more than a theatre, and the owing is not of ornament or grandeur but of the plain intelligibility that lets a person keep their dignity in a place they did not pick.\n\nIt is sometimes said that great public buildings inspire, and that a civic architecture reduced to way-finding would lose the power to make citizens feel they belong to something larger than themselves. I do not deny the power. I deny that it is ever purchased by confusion. The person who cannot find the right door does not feel enlarged by the vault above it; she feels that the building was made for someone else. Belonging, in a building as elsewhere, begins with being expected.',
    questions: [
      {
        question: 'Which of the following best captures the author’s central argument?',
        options: [
          'Public buildings should be plain so that they never confuse the people who use them.',
          'Architecture that challenges its users is illegitimate in any building paid for by the public.',
          'A public building’s duty to be intelligible grows with its users’ lack of choice about being there.',
          'The power of civic architecture to inspire matters more than the convenience of its users.',
        ],
        correctAnswer: 2,
        explanation:
          'The fourth paragraph states the thesis: “The less choice the user has, the more the building owes,” with the owing consisting of “plain intelligibility.” The plainness option is explicitly disclaimed (“The argument is not that public buildings must be plain”). The illegitimate-challenge option ignores the author’s concession that museums and concert halls may provoke, and it substitutes funding for the author’s actual criterion, which is choice. The inspiration option reverses the final paragraph, where the author denies that inspiration is ever “purchased by confusion.”',
        skill: 'main-idea',
      },
      {
        question: 'The ordering “a prison owes more than a clinic, a clinic more than a library, a library more than a theatre” implies that the author ranks buildings by:',
        options: [
          'how freely their users can choose to enter or to leave them.',
          'how much anxiety their users are likely to feel inside them.',
          'how much public money has been spent on constructing them.',
          'how strongly they express the ideals of the community.',
        ],
        correctAnswer: 0,
        explanation:
          'The sentence immediately follows “The less choice the user has, the more the building owes,” and the sequence runs from a place no one can leave to one anyone may leave, so choice is the ordering principle. Anxiety is mentioned as a condition of the first-time visitor but is not what orders the list; a theatre-goer may be anxious and still free to go. Cost and civic ideals are both rejected in the first paragraph as starting points for the ethics of public architecture.',
        skill: 'inference',
      },
      {
        question: 'Suppose a ticketed art museum redesigns its entrance to be deliberately disorienting as part of an exhibition. The author would most likely regard this as:',
        options: [
          'a humiliation of visitors that the language of design conceals.',
          'illegitimate, because a museum is a public building too.',
          'acceptable only if the museum receives no public funding.',
          'legitimate, since visitors consented and may leave.',
        ],
        correctAnswer: 3,
        explanation:
          'The author grants that the critics are “right about museums, concert halls, and the other buildings a person enters by choice and may leave,” and that the gallery visitor “has consented to be provoked.” The humiliation option applies the second paragraph’s complaint about captive users to a case the author exempts. The public-building option ignores that the author’s criterion is choice, not public status. Funding plays no role in the author’s reasoning at any point.',
        skill: 'new-information',
      },
      {
        question: 'According to the passage, the critics’ comparison of a public building to a difficult novel fails because:',
        options: [
          'a building, unlike a novel, must accommodate many people at the same time.',
          'a reader who finds a novel difficult can stop reading, but a person in a courthouse cannot leave.',
          'a novel is the work of a single author, whereas a building is always the work of many different hands.',
          'a novel can be provocative without being confusing, whereas a building cannot.',
        ],
        correctAnswer: 1,
        explanation:
          'The author says the analogy fails “exactly where the public building differs from the gallery: the novel can be closed. The defendant cannot put down the courthouse.” The many-people option is never raised. The single-author option is likewise absent from the passage. The provocative-without-confusing option contradicts the author’s concession that museums may legitimately challenge visitors, which implies that buildings too can provoke without wronging anyone.',
        skill: 'detail',
      },
      {
        question: 'Which of the following findings would most strengthen the author’s claim in the final paragraph?',
        options: [
          'Visitors to grand civic buildings report feeling inspired more often than visitors to plain ones.',
          'Buildings praised by architects for their elevations are rarely praised by the general public.',
          'Most people who are asked for directions in a public building are willing to give them.',
          'People who got lost in an ornate public building felt unwelcome there regardless of its grandeur.',
        ],
        correctAnswer: 3,
        explanation:
          'The final paragraph claims that inspiration is never “purchased by confusion” and that the person who cannot find the door “feels that the building was made for someone else”; a finding that the lost felt unwelcome despite grandeur supports exactly this. The inspired-more-often option supports the view the author is answering. The architects-versus-public option concerns taste, not the link between confusion and belonging. The willing-to-give-directions option, if anything, softens the harm of confusion, which cuts against the author.',
        skill: 'strengthen-weaken',
      },
      {
        question: 'Which of the following design decisions would the author be most likely to criticize?',
        options: [
          'A benefits office whose waiting room is reached through an unmarked corridor behind the reception desk.',
          'A concert hall whose foyer is kept deliberately dim so that the auditorium seems brighter.',
          'A private residence whose front door is concealed behind a garden wall.',
          'A library whose reading rooms are decorated with murals of the town’s history.',
        ],
        correctAnswer: 0,
        explanation:
          'A benefits office is one of the author’s own examples of a building its users do not choose, and an unmarked route to the waiting room violates legibility — the ability to tell “where to go, where to wait, and how to leave, without asking.” The concert hall is a building people enter by choice, which the author exempts from the strict demand. The private residence may be “as strange as its owner likes.” Murals are ornament, and the author says the argument is not against ornament but for intelligibility.',
        skill: 'application',
      },
    ],
  },
]
