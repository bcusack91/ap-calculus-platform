import type { MCATPassage } from '../types'

/**
 * MCAT Full-Length Form 5 — CARS, file A (passages 1–5, 6 questions each).
 *
 * Five original argument-driven passages (500–600 words) across humanities and
 * social-science genres: literary criticism (why readers trust an unreliable
 * narrator), economics (what an ad-supported "free" good really costs),
 * art / aesthetics (ruins and the appeal of decay), history / historiography
 * (oral history against the written record), and philosophy (curiosity and
 * its limits, in an eighteenth-century essayist voice). Every key is derivable
 * from the passage alone; no outside knowledge is needed.
 */
export const FL5_CARS_A_PASSAGES: MCATPassage[] = [
  {
    id: 'fl5-cars-a-01',
    section: 'cars',
    discipline: 'literary criticism',
    title: 'The Liar We Keep Listening To',
    passageText:
      'Every reader of a certain kind of novel knows the moment. The narrator, who has for two hundred pages described his employer’s household with a butler’s precision, mentions in passing an evening he has never mentioned before, and the floor of the book tilts. What we had taken for a record turns out to have been a defense. The strange thing is not that we feel deceived. It is that we do not put the book down. We read on more closely, and with something that feels less like suspicion than tenderness.\n\nThe usual explanation treats the unreliable narrator as a puzzle. The author plants discrepancies; the reader, playing detective, assembles the true story that the narrator will not tell. There is pleasure in this, and some novels offer nothing else. But detection is a pleasure that ends when the case is solved, and the narrators we return to are not solved by a second reading. We know perfectly well, the second time through, what the butler is hiding. We keep listening anyway. Whatever holds us is not the gap between his account and the facts.\n\nA second explanation is moral. The lying narrator, on this view, tests the reader: will we be taken in, or will we hold ourselves at the proper distance and judge? I find this account unlovely and also inaccurate. Readers do not stand at a distance from the narrators who lie to them. They lean in. The experience is closer to the one we have with a friend who tells the same flattering story about himself every year, with the same omissions, and whom we love not less for the omissions but in part because of them.\n\nHere is my proposal. We trust the unreliable narrator because his lie is the one thing in the book we can be sure of. The facts he reports may be wrong; the account of what he needed to be the case is exact. A narrator who insists, against the evidence he himself supplies, that his employer was a great man has told us with perfect accuracy what he could not bear to lose. The honest narrator gives us a world. The liar gives us a person, and gives him to us more completely than any confession could, because a confession is still an account, and this is a symptom.\n\nThis has a consequence that readers feel before critics state it. There are two kinds of unreliable narration, and only one of them lasts. In the first, the narrator deceives the reader: he knows what happened and withholds it so that a late chapter can reverse everything. In the second, the narrator deceives himself, and the reader is permitted to see past him. The first is a trick, and a trick works once; on rereading, the withheld information is simply absent, and the voice that withheld it looks like an instrument of the plot. The second is a portrait, and it deepens with every reading, because each time we see a little more of what the narrator cannot see, and so a little more of him.\n\nIf this is right, then the common advice to writers—make the clues fair, so that the reader can solve it—is advice for the wrong form. The question is not whether the reader can catch the narrator. It is whether, having caught him, the reader still wants to hear him talk.',
    questions: [
      {
        question: 'Which of the following best expresses the central claim of the passage?',
        options: [
          'Readers stay with a lying narrator because the lie reports, with complete accuracy, what he needs to be true.',
          'Readers stay with a lying narrator because the discrepancies in his account invite them to play detective.',
          'Readers stay with a lying narrator because his deceptions test their ability to judge from a distance.',
          'Readers stay with a lying narrator because a late reversal rewards the patience of a first reading.',
        ],
        correctAnswer: 0,
        explanation:
          'The author’s proposal in paragraph 4 is that the narrator’s lie is exact about what he needed to be the case, and that this is why the reader trusts him. The detective option is the “puzzle” explanation the author rejects because detection ends once the case is solved. The judging-from-a-distance option is the moral explanation the author calls unlovely and inaccurate. The late-reversal option describes the kind of narration the author says works only once.',
        skill: 'main-idea',
      },
      {
        question:
          'The author mentions the friend who “tells the same flattering story about himself every year” primarily in order to:',
        options: [
          'concede that the moral account of unreliable narration describes at least some readers accurately',
          'show that the reader’s pleasure in a lying narrator is a form of detection that never ends',
          'illustrate that readers draw closer to lying narrators rather than judging them',
          'suggest that the narrators readers return to are modeled on people the author has known',
        ],
        correctAnswer: 2,
        explanation:
          'The friend appears right after the author says readers “lean in” rather than standing at a judging distance; the example shows affection coexisting with, and partly caused by, the omissions. It is offered against the moral account, not as a concession to it. The author has already rejected the detection explanation in the previous paragraph. Nothing in the passage claims narrators are modeled on real acquaintances.',
        skill: 'function',
      },
      {
        question: 'According to the passage, the “puzzle” explanation of unreliable narration fails because:',
        options: [
          'most unreliable narrators plant discrepancies too obvious to require any detection',
          'the narrators readers return to continue to hold them after the hidden story is known',
          'the pleasure of assembling the hidden story is one that most readers say they do not feel',
          'the true story behind a narrator’s account can never be assembled with confidence',
        ],
        correctAnswer: 1,
        explanation:
          'Paragraph 2 argues that detection ends when the case is solved, yet readers keep listening on a second reading when they already know what is hidden, so the puzzle cannot be what holds them. The author grants that detection is pleasurable and that some novels offer nothing else, so the discrepancies are not said to be too obvious and the pleasure is not denied. The author never claims the true story cannot be assembled; he says it can be, and that assembling it is not the point.',
        skill: 'detail',
      },
      {
        question:
          'Which of the following novels would the author most likely say “lasts” in the sense described in the passage?',
        options: [
          'A narrator conceals until the final chapter that he, not the suspect, committed the murder he has been describing.',
          'A narrator reports the facts of a family quarrel accurately but will not say which side he took in it.',
          'A narrator tells the reader on the first page that nothing he says can be trusted and then keeps that promise.',
          'A narrator describes his sister’s lifelong kindness to him while every scene he reports shows her contempt for him.',
        ],
        correctAnswer: 3,
        explanation:
          'The sister case is self-deception the reader can see past: the narrator’s insistence contradicts the evidence he supplies, which is the “portrait” kind the author says deepens on rereading. The concealed-murderer case is the withheld-revelation trick the author says works once. The accurate-but-reticent narrator is not unreliable in the author’s sense; his facts are right and nothing is being believed against evidence. The openly untrustworthy narrator offers no gap between what he needs and what the evidence shows, so there is nothing for the reader to see past.',
        skill: 'application',
      },
      {
        question:
          'Suppose a survey found that readers who reread novels built around a late, withheld revelation rate them lower the second time, while readers who reread novels with self-deceived narrators rate them higher. This finding would:',
        options: [
          'support the author’s distinction, since it is the self-deceiving narrator whose portrait is said to deepen on rereading',
          'weaken the author’s distinction, since the author claims a withheld revelation remains effective on rereading',
          'be irrelevant to the author’s distinction, since the author’s argument concerns critics rather than ordinary readers',
          'support the author’s claim that detection is a pleasure, since rereaders of twist novels have already solved them',
        ],
        correctAnswer: 0,
        explanation:
          'The author predicts exactly this pattern: the trick “works once” while the portrait “deepens with every reading,” so the survey matches the distinction. The author does not claim withheld revelations stay effective; he says the opposite. The argument explicitly concerns what readers feel “before critics state it,” so reader data is relevant. The finding says nothing about whether detection is pleasurable, only that twist novels lose value once solved.',
        skill: 'new-information',
      },
      {
        question:
          'The author would be LEAST likely to endorse which of the following pieces of advice to a novelist writing an unreliable narrator?',
        options: [
          'Let the narrator’s misstatements arise from something that he cannot bear to acknowledge.',
          'Give the reader enough to see past the narrator to what he refuses to see himself.',
          'Plant the discrepancies fairly so that a careful reader can work out the true story.',
          'Judge the narrator by whether readers want to hear him after they have caught him.',
        ],
        correctAnswer: 2,
        explanation:
          'Planting fair clues for the reader to solve is the advice the author calls “advice for the wrong form,” because it treats the narrator as a puzzle rather than a portrait. Misstatements rooted in what the narrator cannot bear match the author’s account of the lie as a symptom. Letting the reader see past the narrator is the second, lasting kind of unreliability. Judging by whether readers still want to listen is the test stated in the final sentence.',
        skill: 'application',
      },
    ],
  },
  {
    id: 'fl5-cars-a-02',
    section: 'cars',
    discipline: 'economics',
    title: 'What the Free Thing Costs',
    passageText:
      'The slogan has become a reflex: if you are not paying for the product, you are the product. It is repeated as an unmasking, and like most unmaskings it is satisfying in proportion to its imprecision. Nobody is sold when a newspaper runs an advertisement beside a story. What is sold is a chance to be looked at by the reader for a moment, and the reader walks away intact. If we want to understand what an ad-supported good costs, the slogan is a poor place to start, because it mistakes a rental for a sale and a nuisance for a theft.\n\nStart instead with an older observation about prices. A price is not only what a buyer gives up; it is a message sent in both directions. To the buyer it says what the thing is worth to others, and so gives her a reason to attend to its quality before she pays. To the seller it says what the buyer wants, and so gives him a reason to make the thing she wants rather than something else. When the price falls to zero, both messages go silent. The reader of a free paper has no stake that would make her ask whether it is any good. The publisher of a free paper, meanwhile, still has a customer, and the customer is not the reader.\n\nThat last fact is the one the slogan gestures at and misses. A good is shaped for whoever pays for it. A paper paid for by readers is built to be read: it rewards finishing a story. A paper paid for by advertisers is built to be opened, as often as possible, by as many people as possible, for as long as the advertisement is visible. These are not the same object with different funding. They are different objects. The free one may be very good, but its goodness is a by-product of a design aimed elsewhere, and it will be abandoned the moment the aim and the by-product diverge.\n\nThe defenders of free goods have an answer that deserves respect. A paper that costs nothing can be read by people who could not afford one, and whatever its design, it puts information in front of them that a priced paper never would. I accept this entirely. But notice what the defense assumes: that the free good and the priced good are the same good, differently distributed. If the argument above is right, they are not, and the person who could not afford the priced paper is not getting it for free. She is getting something else, built for someone else, that happens to resemble it.\n\nNone of this is a case for abolishing the arrangement. Attention has always been rented out to pay for things, and some of the best things we have were built that way. It is a case for asking a different question than the slogan asks. “What am I paying?” invites an answer in units of attention or privacy, and those answers, though true, are shallow. The better question is “Who is the customer?” because the answer tells you what the thing in your hands was made to do. Once you know that, the price was never the interesting part.',
    questions: [
      {
        question: 'The passage is primarily concerned with arguing that:',
        options: [
          'the attention and privacy that users surrender are the hidden costs of goods offered at no charge',
          'goods supported by advertising should be replaced by goods that users pay for directly',
          'a price of zero deprives buyers of the information they would need to judge a good’s quality',
          'a good supported by advertising is built for the advertiser and is therefore a different good',
        ],
        correctAnswer: 3,
        explanation:
          'The author’s central move is that a good is shaped for whoever pays for it, so an advertiser-funded paper and a reader-funded paper are “different objects”; the final paragraph makes “Who is the customer?” the real question. The attention-and-privacy answer is the one the author calls true but shallow. The author explicitly says this is not a case for abolishing the arrangement. The silenced price signal is one step of the argument, not its conclusion.',
        skill: 'main-idea',
      },
      {
        question:
          'According to the passage, a price performs which of the following functions?\n\nI. It gives the buyer a reason to assess quality before purchasing.\nII. It tells the seller what the buyer wants.\nIII. It tells the advertiser how many readers will see an advertisement.',
        options: ['I only', 'I and II only', 'II and III only', 'I, II, and III'],
        correctAnswer: 1,
        explanation:
          'Paragraph 2 describes a price as a message in two directions: to the buyer, a reason to attend to quality before paying, and to the seller, a signal of what the buyer wants. Nothing in the passage says a price informs advertisers about audience size; advertisers enter the argument only as the customer of a zero-price good. So I and II are supported and III is not.',
        skill: 'detail',
      },
      {
        question:
          'It can be inferred that the author would regard the quality of a well-made advertiser-funded newspaper as:',
        options: [
          'contingent on its continuing to serve an aim other than being read',
          'evidence that the design of a good need not follow the interests of whoever pays for it',
          'proof that readers can judge quality adequately even when they have no stake in the purchase',
          'the result of advertisers demanding stories that readers will finish rather than merely open',
        ],
        correctAnswer: 0,
        explanation:
          'The author allows that a free paper “may be very good” but calls its goodness a by-product of a design aimed elsewhere, to be abandoned when aim and by-product diverge; its quality therefore depends on continuing to serve the advertiser’s aim. A good paper does not show design is independent of the payer; the author says it is a by-product of that very dependence. The passage says the no-stake reader has no reason to ask about quality, not that she judges it well. Advertisers are said to want papers opened widely, not finished.',
        skill: 'inference',
      },
      {
        question:
          'The author’s discussion of the “older observation about prices” in the second paragraph serves mainly to:',
        options: [
          'provide a definition of price that the slogan’s defenders have overlooked',
          'show that goods offered at no charge are typically of lower quality than priced goods',
          'establish what is lost when a price falls to zero, in preparation for identifying the customer',
          'concede that the slogan is accurate about the cost to buyers even if it is wrong about the cost to sellers',
        ],
        correctAnswer: 2,
        explanation:
          'The paragraph explains the two messages a price sends and then observes that at zero both go silent while the publisher “still has a customer,” which sets up the next paragraph’s claim that the customer shapes the good. It is not framed as a definition aimed at the slogan’s defenders. The author never claims free goods are typically worse, and in fact allows that they may be very good. The paragraph does not concede the slogan’s accuracy; the author has already called the slogan imprecise.',
        skill: 'function',
      },
      {
        question:
          'Which of the following findings, if true, would most weaken the author’s claim that an advertiser-funded paper and a reader-funded paper are “different objects”?',
        options: [
          'Readers of advertiser-funded papers report spending less time per issue than subscribers to priced papers do.',
          'Papers that switch from subscriptions to advertising revenue shorten their stories within a year of switching.',
          'Advertisers pay more to appear in papers that are opened by many readers than in papers read closely by a few.',
          'Papers funded by advertisers and by subscribers do not differ in layout, story length, or rhythm.',
        ],
        correctAnswer: 3,
        explanation:
          'The author claims the two funding models produce objects built for different purposes; if their observable designs do not differ at all, that claim loses its support. Less reading time among free-paper readers is consistent with a paper built to be opened rather than read. Stories shortening after a switch to advertising directly supports the author. Advertisers paying for wide opening rather than close reading is the mechanism the author describes.',
        skill: 'strengthen-weaken',
      },
      {
        question: 'Which of the following situations best parallels the author’s point about “who is the customer”?',
        options: [
          'A charity that receives most of its money from a few large donors spends less on fundraising from the public.',
          'A clinic paid by insurers rather than patients organizes its records around what insurers require rather than what patients need to know.',
          'A restaurant that stops charging for bread finds that customers order fewer appetizers than they did before.',
          'A museum that abolishes its entrance fee finds that visitors spend less time in each gallery than before.',
        ],
        correctAnswer: 1,
        explanation:
          'The author’s point is that a good is shaped to serve whoever pays, so a clinic whose records are designed for the insurer who pays rather than the patient who uses them is the direct parallel. The charity example concerns how money is spent, not how the product is shaped for the payer. The bread example shows a substitution effect, not a payer shaping a good. The museum example parallels the silenced price signal in paragraph 2, where a no-stake user attends less, rather than the customer point.',
        skill: 'application',
      },
    ],
  },
  {
    id: 'fl5-cars-a-03',
    section: 'cars',
    discipline: 'art / aesthetics',
    title: 'What the Weather Finished',
    passageText:
      'Why should a broken building please us more than a whole one? The question is older than the taste it describes, and the standard answers have been in circulation for two centuries. The ruin reminds us of death, and we enjoy being reminded at a safe distance. The ruin is irregular, and the eye prefers irregularity to the geometry of a facade. The ruin is incomplete, and the imagination enjoys finishing what the mason left undone. Each of these is true of some ruins, and none of them explains why a ruin pleases differently from a graveyard, a rock, or a sketch.\n\nWhat a ruin has, and these other things lack, is two authors. The first is the builder, whose intentions are still legible: here was a doorway, here the weight of a roof was carried to the ground. The second is time, which has worked over the first’s design with no intention at all. Rain found the joint the mason thought was sealed. A tree took root where a lintel fell and levered the wall apart. The ruin is the only kind of building in which we can see a plan and, in the same glance, everything the plan could not foresee. We are not looking at decay. We are looking at an argument between purpose and accident, with the accident, for once, allowed the last word.\n\nThis explains something the standard answers cannot. In the eighteenth century, landowners built artificial ruins in their parks—broken arches, a tower with a convenient crack—and these follies, whatever they cost, have never moved anyone. They are not incomplete enough, the picturesque theorist says; but a folly can be built as jagged as you like and it will still be dead. What it lacks is the second author. Every crack was intended, and so there is no argument, only a single purpose pretending to have been interrupted. The same fate awaits the genuine ruin that is rebuilt stone by stone. The accident is edited out, and what remains is a building again.\n\nAn objection must be faced. The pleasure of ruins, it is said, is a luxury of those who did not have to live in them; the family whose house the rain came through would not have found the joint interesting. This is right, and it sets a limit on the taste rather than refuting it. A fresh ruin is not beautiful. The house hit last month is a wound, and only a brute would admire its composition. The second author must have been at work long enough for the first author’s loss to stop being someone’s loss. Ruins please at a distance in time, and the distance is not incidental to the pleasure; it is the condition under which accident can be seen as a collaborator rather than an enemy.\n\nIf I am right, then the appeal of ruins is not morbid, and it is not a preference for disorder. It is something closer to a relief. Most of what we build, we build to defeat the weather, and most of our lives are spent inside that defeat. A ruin is the one place where we can watch the weather win and find that the result is not ugly, that intention is not the only source of form, and that what we could not plan for may yet come out looking like design.',
    questions: [
      {
        question: 'Which of the following best captures the author’s explanation for the appeal of ruins?',
        options: [
          'Ruins allow the imagination to complete what the builder left unfinished, which no intact building permits.',
          'Ruins remind viewers of mortality from a distance safe enough for the reminder to be enjoyed rather than feared.',
          'Ruins show a human plan and its unplanned revision by time in a single view.',
          'Ruins are irregular in a way that the eye prefers to the regularity of any intact facade or monument.',
        ],
        correctAnswer: 2,
        explanation:
          'The author’s own account is the “two authors” idea: the builder’s legible plan and time’s unintended revision of it, visible together. The imagination-completing, mortality, and irregularity options are the three standard answers the author lists in paragraph 1 and judges insufficient, since none explains why a ruin pleases differently from a graveyard, a rock, or a sketch.',
        skill: 'main-idea',
      },
      {
        question: 'The author discusses eighteenth-century artificial ruins primarily in order to:',
        options: [
          'show that incompleteness and irregularity alone cannot account for the appeal of a ruin',
          'demonstrate that the taste for ruins was a luxury of landowners who had never lived in one',
          'argue that a rebuilt ruin and a folly fail for different reasons despite their shared lifelessness',
          'illustrate how expensive the fashion for ruins became before it fell out of favor',
        ],
        correctAnswer: 0,
        explanation:
          'The folly can be “as jagged as you like” and still fail, which shows that the picturesque theorist’s criteria of irregularity and incompleteness are not what produces the appeal; what is missing is the second author. The luxury objection is raised separately in paragraph 4 and is not what the follies illustrate. The author says the rebuilt ruin meets “the same fate” for the same reason, not a different one. Cost is mentioned only to be dismissed as irrelevant.',
        skill: 'function',
      },
      {
        question: 'The author’s attitude toward the “standard answers” described in the first paragraph is best described as:',
        options: [
          'dismissive, since each has been refuted by two centuries of argument',
          'approving, since together they account for the appeal of most ruins',
          'uncertain, since the author cannot determine which of them is correct',
          'qualified, since each is true of some ruins but none is sufficient',
        ],
        correctAnswer: 3,
        explanation:
          'The author grants that each standard answer “is true of some ruins” and then says none explains the distinctive pleasure of a ruin, which is a qualified rather than dismissive or approving stance. The passage says the answers have been in circulation for two centuries, not that they have been refuted. The author is not uncertain; he offers a definite alternative. The answers are not said to account for most ruins together.',
        skill: 'tone',
      },
      {
        question:
          'A photographer exhibits images of a town taken the week after a flood destroyed it, and a reviewer praises their composition. The author would most likely say that the reviewer:',
        options: [
          'is correct, because the photographs record the argument between purpose and accident as it occurs',
          'is responding too early, because the loss shown has not yet stopped being a particular person’s loss',
          'is mistaken, because photographs can show only one author and a ruin requires two',
          'is correct, because a flood is an accident and accident alone produces the appeal of a ruin',
        ],
        correctAnswer: 1,
        explanation:
          'The author holds that a fresh ruin is a wound and that “only a brute would admire its composition” until enough time has passed for the loss to stop being someone’s loss; a week-old disaster fails that condition. The argument between purpose and accident requires the distance in time that makes accident a collaborator, so recording it as it occurs is not what the author praises. The author says nothing about photography lacking a second author. Accident alone does not produce the appeal; the legible plan and the passage of time are also required.',
        skill: 'application',
      },
      {
        question:
          'Which of the following would the author most likely say retains the quality that makes ruins pleasing?',
        options: [
          'A medieval wall whose fallen stones have been reset exactly according to the original plans',
          'A theater set constructed to resemble an abbey whose roof fell in centuries ago',
          'A mill abandoned a century ago whose roof a tree has broken through',
          'A house whose roof was torn off by a storm during the previous winter',
        ],
        correctAnswer: 2,
        explanation:
          'The abandoned mill has a legible plan, an unintended revision by time (the tree), and enough distance in time for the loss to no longer be someone’s loss. The reset wall has had its accident edited out and is “a building again.” The theater set is a folly: every break was intended, so there is no second author. The storm-damaged house is a fresh ruin, which the author calls a wound rather than a thing of beauty.',
        skill: 'application',
      },
      {
        question:
          'Suppose it were shown that most visitors to a celebrated ruin report feeling chiefly a pleasant sadness about the passage of time. How would this bear on the author’s argument?',
        options: [
          'It would not undermine the argument, since the author grants that the standard answers hold for some ruins.',
          'It would undermine the argument, since the author denies that ruins have anything to do with mortality.',
          'It would support the argument, since sadness about time is exactly what the author means by the second author.',
          'It would undermine the argument, since visitors’ reports are the only evidence the author relies on.',
        ],
        correctAnswer: 0,
        explanation:
          'The author concedes that the mortality answer is true of some ruins; his claim is that it does not explain what distinguishes ruins from graveyards and rocks, so visitor reports of pleasant sadness are compatible with his view. He does not deny any link to mortality, so the second option misreads him. The second author is time acting on a plan, not a feeling in the viewer. The author argues from examples (follies, rebuilt ruins, fresh ruins), not from visitor reports.',
        skill: 'new-information',
      },
    ],
  },
  {
    id: 'fl5-cars-a-04',
    section: 'cars',
    discipline: 'history / historiography',
    title: 'Said, Not Signed',
    passageText:
      'The documentary historian has a simple test for evidence: was it set down at the time? A charter, a ledger, a letter dated the week of the event—these carry authority because they were fixed before anyone knew how the story would end. Oral testimony fails the test on its face. It was not set down at all, and the version we collect today has passed through a hundred mouths, each of which, we assume, took something out and put something in. On this view the oral account is a document that has been edited beyond recovery, and the historian’s duty is to prefer the written one wherever the two conflict.\n\nI want to argue that the test is sound and the conclusion drawn from it is not. Fixity is a virtue in evidence. But what the document fixes is not the event. It is one person’s purpose on one day, and the person was almost always someone who could write, had reason to, and expected the page to be read by someone with power over him. The ledger records what the steward wanted the lord to believe about the harvest. The charter records what the grantor wished to be remembered as having given. The letter is addressed. None of this makes the document worthless; it makes the document a performance frozen at the moment of its first performance, with its purpose embalmed inside it and no longer visible as a purpose.\n\nThe oral account is a performance too, but it is one that had to be repeated, and repetition is a filter of a different kind. A story that survives three generations of telling has been approved, each time, by listeners who could have stopped listening. What it preserves is not a single purpose but a negotiated one: the version a community could keep agreeing to. That is why oral accounts drift, and the drift is usually cited against them. I would cite it for them. The drift is a record. Compare the harvest story told in a village in a famine year with the same story told a generation later in plenty, and you learn what the famine did to the village’s idea of itself, which no ledger will tell you.\n\nThe documentary historian will say that this is not history but folklore, and that the event itself has been lost in the negotiation. Sometimes it has. But the objection assumes that the document kept the event, and the document kept the steward. Both archives lose the event; they lose it in different directions. The written record fails by preserving one purpose forever and disguising it as a fact. The spoken record fails by bending toward whatever the present needs the past to have been. A historian who knows the failure modes can read against both, and a historian who trusts only one is reading with one eye shut.\n\nSo the practical rule is not to prefer the document where the two conflict. It is to ask, at every conflict, which failure is more likely to have produced it. If the steward had reason to inflate the harvest, believe the village. If the village has since come to need a heroic famine, believe the steward. The question is never which source is purer. It is whose distortion we can see through.',
    questions: [
      {
        question: 'The main purpose of the passage is to:',
        options: [
          'show that oral testimony is more reliable than written documents because it has been approved by many listeners',
          'argue that written and spoken records distort the past differently and must each be read against its distortion',
          'defend the documentary historian’s test of fixity against critics who would abandon it in favor of folklore',
          'explain why the drift of oral accounts across generations makes them useless as evidence of the events they describe',
        ],
        correctAnswer: 1,
        explanation:
          'The author’s conclusion is that both archives lose the event “in different directions,” that a historian must know both failure modes, and that conflicts are resolved by asking whose distortion is visible. The author does not rank oral testimony above documents; the practical rule sometimes favors the steward. The author accepts the fixity test but rejects the conclusion drawn from it, so the passage is not a defense of the documentary position. Drift is cited for oral accounts, not against them.',
        skill: 'main-idea',
      },
      {
        question:
          'The author’s claim that the drift of an oral account “is a record” depends on which of the following assumptions?',
        options: [
          'Listeners in each generation remember the version they heard more accurately than the tellers do.',
          'A story that survives three generations of telling has preserved the original event in its essentials.',
          'Written documents from the same period are unavailable to check the oral account against.',
          'The changes in a retold story reflect changes in the circumstances of the community telling it rather than random error.',
        ],
        correctAnswer: 3,
        explanation:
          'Drift can be a record of “what the famine did to the village’s idea of itself” only if the changes track the community’s circumstances; if the changes were random, they would record nothing. The author never claims listeners remember better than tellers, only that they approve each telling. The author concedes the event itself is sometimes lost, so preservation of the event is not assumed. The argument is about how to weigh conflicting sources, so it presupposes documents are available, not absent.',
        skill: 'assumption',
      },
      {
        question:
          'The author would most likely say that the fact that a document was “set down at the time” guarantees:',
        options: [
          'that one purpose has been preserved unchanged',
          'that the event it describes occurred roughly as it says',
          'that its author had no power over those who would read it',
          'that the historian can see its purpose as a purpose',
        ],
        correctAnswer: 0,
        explanation:
          'The author says fixity is a virtue but that what is fixed is “one person’s purpose on one day,” frozen at its first performance; contemporaneity therefore guarantees the preservation of a purpose, not of the event. The author denies that the document kept the event. The writer typically expected to be read by someone with power over him, not the reverse. The frozen purpose is “no longer visible as a purpose,” so the historian cannot simply see it.',
        skill: 'inference',
      },
      {
        question: 'According to the passage, repetition filters an oral account because:',
        options: [
          'each teller removes what is false and adds what has since been learned',
          'a story that is told in a famine year is corrected when plenty returns',
          'each telling must be accepted by an audience that could have refused it',
          'the historian can compare the versions and discard the inconsistent ones',
        ],
        correctAnswer: 2,
        explanation:
          'The filter the author describes is approval by listeners “who could have stopped listening,” producing a negotiated version. Tellers adding and removing material is the documentary historian’s assumption about corruption, not the filter. The famine and plenty versions are compared to show what drift records, not described as a correction. The historian’s comparison of versions is a use of the record, not the mechanism by which repetition filters.',
        skill: 'detail',
      },
      {
        question:
          'A town’s charter records that a bishop founded its hospital; the town’s families have for generations told that a widow founded it and the bishop later claimed credit. Applying the author’s rule, a historian should prefer the spoken account if:',
        options: [
          'the families’ version has grown more detailed with each generation of telling',
          'the charter was drafted by the bishop’s own clerk for presentation to the bishop’s superiors',
          'the town has recently begun to celebrate the widow in an annual festival',
          'the charter is the only written record of the hospital’s founding that survives',
        ],
        correctAnswer: 1,
        explanation:
          'The author’s rule is to ask which failure more likely produced the conflict; a charter drafted by the bishop’s clerk for his superiors is the written record’s failure mode of a purpose disguised as fact, so the spoken account should be believed. Growing detail does not by itself indicate which distortion is at work. A recent festival honoring the widow suggests the village “has since come to need” its version, which is the oral failure mode and a reason to believe the charter. The charter being the sole surviving document says nothing about whose distortion is visible.',
        skill: 'application',
      },
      {
        question: 'Which of the following findings would most strengthen the author’s argument?',
        options: [
          'Written charters from a region are found to agree with one another about the dates of major events.',
          'Oral accounts collected in one village differ from accounts of the same event collected in a neighboring village.',
          'Historians who rely on documents alone reach conclusions no different from those who use both kinds of source.',
          'Versions of a village’s famine story shift in step with later changes in the village’s fortunes.',
        ],
        correctAnswer: 3,
        explanation:
          'The author claims drift is a record of what events did to a community’s idea of itself; versions shifting in step with the village’s fortunes is direct evidence for that claim. Agreement among charters about dates concerns fixity, which the author already grants, and does not bear on his argument about purpose. Differences between neighboring villages do not show that drift tracks circumstances and could suggest random variation. Historians doing equally well with documents alone would undercut the claim that trusting one source is reading with one eye shut.',
        skill: 'strengthen-weaken',
      },
    ],
  },
  {
    id: 'fl5-cars-a-05',
    section: 'cars',
    discipline: 'philosophy',
    title: 'Of Curiosity, and Where It Should Stop',
    passageText:
      'There is no disposition of the mind which has been praised with so little discrimination as curiosity. The philosophers assure us that it is the mother of all knowledge; the moralists, that it is the ruin of all peace; and the common reader, who has heard both, concludes that it is a noble passion which must occasionally be checked, as a horse of spirit must sometimes be reined. I am persuaded that this manner of speaking conceals a confusion, and that what we call by one name are two passions which have nothing in common but their restlessness.\n\nThe first is the desire to understand. He who feels it is troubled by a thing he does not comprehend, as a man is troubled by a stone in his shoe, and he cannot be easy until the thing is comprehended. His inquiry has an end, and when the end is reached he is changed by it; he knows the world otherwise than he knew it before, and he conducts himself accordingly. The second is the desire to be informed. He who feels it is troubled by nothing but the suspicion that there is something he has not yet heard. His inquiry has no end, for every intelligence received makes room for another; and when he has heard it he is exactly what he was, save that he has one more thing to repeat. The first passion builds; the second only collects.\n\nIt will be said that I have divided what Nature has joined, and that the same mind which pries into the affairs of its neighbour may on another day pry into the structure of a leaf. I do not deny it. But a man may on one day be generous and on another avaricious without our concluding that generosity and avarice are the same virtue; and that the two curiosities inhabit the same breast proves only that the breast is large enough to hold a vice beside a virtue, as most breasts are.\n\nThe question of limits is therefore to be answered differently for each. The moralists who would set bounds to curiosity commonly do so by naming certain subjects as forbidden, as if knowledge were a country with a frontier and the traveller must carry a passport. This I take to be an error. There is no fact the understanding is the worse for possessing, and the fear that there might be is the mark of a mind which has mistaken its own weakness for a law of the world. The limit upon the first curiosity is set not by the subject but by the strength of the inquirer, and it is reached when he can no longer bear the weight of what he has learned; which is a reason for him to grow stronger, not for the subject to be fenced.\n\nThe second curiosity has a limit of another kind, and it is the only one with which the moralists need concern themselves. It is to be asked, of every piece of intelligence we are tempted to seek, what we shall do with it when it is ours. If the answer is that we shall act otherwise, or judge otherwise, or be in any respect otherwise than we are, let the thing be sought. If the answer is that we shall merely know it, then the seeking is not inquiry but appetite, and is to be governed as other appetites are: not by denying that the dish exists, but by observing that we have already eaten.',
    questions: [
      {
        question: 'Which of the following best states the author’s main thesis?',
        options: [
          'Curiosity names two distinct passions, and only the one that merely collects requires a moral limit.',
          'Curiosity is a noble passion that must nonetheless be checked when it approaches forbidden subjects.',
          'Curiosity about the natural world is a virtue, while curiosity about one’s neighbors is a vice.',
          'Curiosity is restless by nature, and the philosophers and moralists are both wrong to try to govern it.',
        ],
        correctAnswer: 0,
        explanation:
          'The author argues that “curiosity” covers two passions, that the first should be limited only by the inquirer’s strength, and that the second is the only one “with which the moralists need concern themselves.” The noble-but-checked view is the common reader’s confusion the author sets out to correct. The natural-world versus neighbors contrast is an illustration, not the thesis; the author’s division turns on what the knowing does to the knower, not on the subject. The author does propose governing the second curiosity, so he is not against all governance.',
        skill: 'main-idea',
      },
      {
        question: 'According to the passage, the person moved by the second kind of curiosity is, after satisfying it:',
        options: [
          'better able to conduct himself in the world than he was before',
          'troubled by a new question that the answer has raised',
          'no different, apart from a new item of gossip to hand on',
          'relieved, as a man is when he removes a stone from his shoe',
        ],
        correctAnswer: 2,
        explanation:
          'The author says the collector of intelligence, once he has heard the thing, “is exactly what he was,” with one more thing to repeat. Improved conduct and the removal of a stone from the shoe describe the first curiosity, the desire to understand. The second curiosity is not troubled by a question but by the suspicion of something unheard, and what follows is room for another item, not a new question raised by an answer.',
        skill: 'detail',
      },
      {
        question: 'The author’s comparison of generosity and avarice in the third paragraph serves to:',
        options: [
          'show that the two curiosities, like the two qualities, are in truth a single disposition',
          'argue that the desire to be informed is a vice as grave as avarice',
          'concede that the same person cannot feel both kinds of curiosity',
          'answer the objection that two passions found in one mind must be the same passion',
        ],
        correctAnswer: 3,
        explanation:
          'The objection is that the author has “divided what Nature has joined” because one mind can feel both curiosities; the reply is that a person can be generous one day and avaricious the next without the two being one virtue. The comparison keeps the curiosities distinct rather than merging them. It does not rank the second curiosity’s gravity against avarice. The author explicitly grants that both can inhabit the same breast, so he concedes the opposite of the third option.',
        skill: 'function',
      },
      {
        question:
          'The author’s attitude toward moralists who name certain subjects as forbidden can best be described as:',
        options: [
          'sympathetic, since he grants that some knowledge is too heavy for most inquirers to bear',
          'critical, since he holds that they have mistaken a weakness in themselves for a feature of the world',
          'indifferent, since he regards the subjects they forbid as of no interest to the understanding',
          'ambivalent, since he accepts their frontier for the second curiosity but not for the first',
        ],
        correctAnswer: 1,
        explanation:
          'The author calls the forbidden-subject approach “an error” and says the fear behind it marks a mind that “has mistaken its own weakness for a law of the world.” He grants that an inquirer may be unable to bear what he learns, but treats that as a reason to grow stronger, not as sympathy for fencing subjects. He does not call the forbidden subjects uninteresting. The limit he proposes for the second curiosity is a test of use, not a frontier of subjects, so there is no ambivalence about frontiers.',
        skill: 'tone',
      },
      {
        question: 'Which of the following persons is, by the author’s account, moved by the first kind of curiosity?',
        options: [
          'A physician who studies a fever until he alters the way he treats it',
          'A traveler who collects the customs of every town he passes through',
          'A reader who follows every dispatch from a distant war and recounts it at dinner',
          'A neighbor who learns the household affairs of everyone on his street',
        ],
        correctAnswer: 0,
        explanation:
          'The first curiosity ends in understanding that changes how the inquirer conducts himself, which the physician’s altered treatment exemplifies. The traveler who collects customs, the reader who recounts dispatches, and the neighbor who gathers household affairs each accumulate items to repeat without being changed, which is the author’s description of the second curiosity, the desire to be informed.',
        skill: 'application',
      },
      {
        question:
          'Suppose a government prohibited the study of a subject on the ground that the knowledge would be too painful for its citizens to bear. The author would most likely respond that:',
        options: [
          'the prohibition is justified, since the limit on the first curiosity is set by the strength of the inquirer',
          'the prohibition is unjustified, since there is no knowledge painful enough to burden anyone',
          'the prohibition is unjustified, since an inquirer’s inability to bear a truth is a reason to strengthen the inquirer, not to fence the subject',
          'the prohibition is justified, since knowledge that changes nothing in the knower is mere appetite',
        ],
        correctAnswer: 2,
        explanation:
          'The author states that the limit of the first curiosity is reached when the inquirer cannot bear what he has learned, “which is a reason for him to grow stronger, not for the subject to be fenced,” so a prohibition on a subject is the error he describes. The first option misuses the author’s point: the inquirer’s limit is personal, not a license to forbid subjects. The author does allow that learned things can be hard to bear, so the second option overstates him. The appetite test applies to the second curiosity and concerns what one will do with an item, not whether a subject may be forbidden.',
        skill: 'new-information',
      },
    ],
  },
]
