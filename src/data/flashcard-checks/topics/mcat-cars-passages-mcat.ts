import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-cars-passages-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What disciplines do CARS passages come from?`]: {
    question: r`A student is sorting practice material and wants to set aside anything that would not appear as a passage in the reading section. Which of these should be set aside?`,
    options: [
      r`An essay on how a painter's use of shadow changed portrait conventions`,
      r`An argument about whether voting should be compulsory for all citizens`,
      r`A derivation of the rate law for a two-step enzyme-catalyzed reaction`,
      r`An account of how guild rules shaped prices in medieval town markets`,
    ],
    correctAnswer: 2,
    explanation: r`Passages are drawn only from the humanities and social sciences, so a technical derivation from the natural sciences does not belong. The essay on portrait painting is art criticism, the compulsory voting argument is political science, and the account of guild rules is history, all of which are standard sources.`,
  },
  [r`Why do CARS passages often present multiple viewpoints?`]: {
    question: r`An excerpt reads: "Many curators claim that restoring a faded fresco returns it to the artist's intent. This confidence is misplaced. Pigments age unevenly, so any restoration is a guess about a surface no living person has seen." Which view is the author's own?`,
    options: [
      r`Restoring a fresco returns it to what the artist first intended`,
      r`Restoring a fresco is a guess rather than a recovery of intent`,
      r`Restoring a fresco is something curators should never attempt`,
      r`Restoring a fresco is reliable because pigments age so evenly`,
    ],
    correctAnswer: 1,
    explanation: r`The author reports the curators' claim and then rejects it with "This confidence is misplaced," so the author's own view is that restoration is a guess. The recovery-of-intent choice is the curators' view, which the author only reports. The "never attempt" choice goes beyond anything stated, and the even-aging choice reverses the author's evidence.`,
  },
  [r`What does it mean when a passage ends with a qualification?`]: {
    question: r`A passage argues at length that apprenticeships train workers better than classroom courses. Its final sentence reads: "These advantages, however, have been documented only in the skilled trades and may not extend to other fields." Which statement best captures the main idea?`,
    options: [
      r`Apprenticeships train workers better than classroom courses in every field`,
      r`Apprenticeships give no real advantage over classroom courses in any field`,
      r`Classroom courses train skilled-trade workers better than apprenticeships`,
      r`Apprenticeships seem to train better in skilled trades, perhaps not beyond`,
    ],
    correctAnswer: 3,
    explanation: r`The closing sentence limits the author's own claim to the skilled trades, so the main idea must carry that limit. The "every field" choice ignores the hedge, the "no real advantage" choice turns a limit into a reversal, and the choice favoring classroom courses contradicts the whole argument.`,
  },
  [r`What distinguishes a persuasive from an expository passage?`]: {
    question: r`An excerpt reads: "Cities should stop subsidizing stadiums. The promised jobs are seasonal and poorly paid, and the same money could fund transit that serves residents every day." How should a reader classify this passage, and what kind of question should the reader expect?`,
    options: [
      r`Persuasive, so expect a question on what would weaken the claim`,
      r`Expository, so expect a question on what would weaken the claim`,
      r`Persuasive, so expect only questions asking for a stated detail`,
      r`Expository, so expect only questions asking for a stated detail`,
    ],
    correctAnswer: 0,
    explanation: r`"Cities should stop" is a position backed by reasons, which makes the passage persuasive, and persuasive passages invite questions about what strengthens or weakens the argument. Calling it expository misses that the author is arguing rather than explaining. Expecting only detail questions fits a passage that explains, not one that takes a side.`,
  },
  [r`Are CARS passages excerpted or written for the exam?`]: {
    question: r`Midway through a passage a student meets a long sentence with several nested clauses and a passing reference to "the earlier controversy," which the passage never explains. What is the most sensible way to understand and handle this?`,
    options: [
      r`It was written for the exam, so the unclear sentence must conceal a trick`,
      r`It was adapted from a published work, so outside reading on it is assumed`,
      r`It was adapted from a published work, so paraphrase the gist and continue`,
      r`It was written for the exam, so each unclear phrase will be defined later`,
    ],
    correctAnswer: 2,
    explanation: r`Passages are adapted from published sources, so dense sentences and loose references are left over from the original and are best handled by paraphrasing the gist. The two "written for the exam" choices misstate where passages come from. Being adapted does not mean outside reading is assumed, because every answer rests on the text given.`,
  },
  [r`Does CARS ever test science content?`]: {
    question: r`A passage by a historian describes how one theory of disease replaced another in nineteenth-century medical schools. A question asks which claim the author would support. One answer choice states a true fact about bacteria that the passage never mentions. What should a student who knows that fact do?`,
    options: [
      r`Reject it, because the passage gives no support for that claim`,
      r`Choose it, because true science facts outrank passage wording`,
      r`Choose it, because the section rewards outside science study`,
      r`Reject it, because the historian must distrust modern science`,
    ],
    correctAnswer: 0,
    explanation: r`The reading section never tests science content, so a science-sounding passage is still judged only on reasoning and textual support, and a claim the passage never makes cannot be attributed to the author. The two "choose it" options rely on outside knowledge. Rejecting it because the historian distrusts science invents an attitude the passage does not show.`,
  },
  [r`How should difficulty affect passage order?`]: {
    question: r`With 20 minutes left, a student has two untouched passages: one dense and abstract, one clearly written. A friend advises doing the dense one first "because hard questions are worth more." What is the best plan?`,
    options: [
      r`Start with the dense one, since harder questions carry more value`,
      r`Start with the clear one, since every question carries equal value`,
      r`Start with the dense one, since passages must be taken in order`,
      r`Start with the clear one, since easier questions carry more value`,
    ],
    correctAnswer: 1,
    explanation: r`Every question is worth the same, so the student should bank the accessible points from the clear passage first. The friend's advice assumes hard questions are worth more, which is false, and nothing requires passages to be taken in printed order. Easier questions are not worth more either. They are only faster to earn.`,
  },
  [r`How long is a typical CARS passage?`]: {
    question: r`A tutor is assembling practice passages from essays and wants each one to resemble a real reading-section passage in length and number of questions. Which design is closest?`,
    options: [
      r`About 150 words per passage, with 6 questions on each one`,
      r`About 550 words per passage, with 15 questions on each one`,
      r`About 1,500 words per passage, with 2 questions on each one`,
      r`About 550 words per passage, with 6 questions on each one`,
    ],
    correctAnswer: 3,
    explanation: r`A typical passage runs roughly 500 to 600 words and carries 5 to 7 questions, so 550 words with 6 questions fits. A 150-word passage is far too short and a 1,500-word passage far too long. Fifteen questions on a single passage is more than double the real number.`,
  },
  [r`When two paragraphs present opposing views and the third begins "Both accounts overlook," the author is:`]: {
    question: r`Paragraph 1 of a passage reports economists who credit a canal for a region's growth. Paragraph 2 reports geographers who credit its fertile soil. Paragraph 3 opens: "Neither explanation accounts for the schools founded a generation earlier." What is paragraph 3 most likely to do?`,
    options: [
      r`Advance the author's own explanation and fault both earlier ones`,
      r`Side with the economists and dismiss the geographers' explanation`,
      r`Side with the geographers and dismiss the economists' explanation`,
      r`Summarize both explanations without taking a position on either`,
    ],
    correctAnswer: 0,
    explanation: r`"Neither explanation accounts for" criticizes both reported views at once and points to something they miss, which signals that the author's own position is arriving. Siding with the economists or with the geographers ignores that both are faulted. A neutral summary does not fit an opening sentence that names a shared gap.`,
  },
  [r`Understanding "how ideas relate" includes recognizing:`]: {
    question: r`An excerpt reads: "Printed almanacs were cheap. As a result, even small farms owned one, and planting dates across the valley grew more uniform." How does the first sentence relate to what follows it?`,
    options: [
      r`Contrast: the low price is presented as opposing wide ownership`,
      r`Sequence: the low price is presented only as earlier in time`,
      r`Causation: the low price is presented as producing ownership`,
      r`Support: wide ownership is presented as proof of the low price`,
    ],
    correctAnswer: 2,
    explanation: r`"As a result" marks the low price as the cause of wide ownership, which in turn made planting dates uniform. Nothing sets the two ideas against each other, so contrast is wrong. The link is stronger than mere order in time, and the excerpt reasons from price to ownership, not from ownership back to price.`,
  },
  [r`A passage argues that modern architecture has abandoned humanistic values in favor of pure functionality. The author's main thesis is best described as:`]: {
    question: r`A passage grants that technique matters but argues that music instruction has let endless technical drill crowd out expressive playing. Which statement best describes the author's main thesis?`,
    options: [
      r`Instruction should drop technical drill in favor of expression`,
      r`Instruction should pair technical drill with expressive playing`,
      r`Instruction should cost less so that more students can enroll`,
      r`Instruction should keep its present stress on technical drill`,
    ],
    correctAnswer: 1,
    explanation: r`The author grants that technique matters and complains only that drill has crowded out expression, so the thesis is that the two should coexist. Dropping drill altogether is an extreme the author never states. The cost of lessons is an outside concern the passage does not raise, and keeping the present stress on drill is the very thing the author criticizes.`,
  },
  [r`The safest strategy on an unfamiliar application question is to:`]: {
    question: r`An author states: "A tradition is worth keeping only if those who practice it can still explain its purpose." A question describes a village that holds a yearly lantern procession, although no participant can say why it is held. By the author's principle, what follows?`,
    options: [
      r`It is worth keeping, since old customs are valuable in themselves`,
      r`It is worth keeping, since the procession is popular with visitors`,
      r`It is not worth keeping, since lantern processions are a fire risk`,
      r`It is not worth keeping, since no one can now explain its purpose`,
    ],
    correctAnswer: 3,
    explanation: r`Applying the stated principle literally, a tradition whose practitioners cannot explain its purpose fails the author's test. The two "worth keeping" choices appeal to intuition about old customs and popularity, neither of which is the author's standard. The fire-risk choice reaches the right verdict for a reason the passage never gives.`,
  },
  [r`If asked how the author would respond to a critic, you should:`]: {
    question: r`An author writes: "Public libraries deserve tax funding because they are open to everyone without charge." A critic proposes a small entry fee to pay for longer opening hours. How would the author most likely respond?`,
    options: [
      r`A fee would undercut the free access that justifies the funding`,
      r`A fee is acceptable because longer hours matter more than access`,
      r`A fee is unwise because libraries already hold too many books`,
      r`A fee is acceptable because tax funding was never justified`,
    ],
    correctAnswer: 0,
    explanation: r`The author's stated reason for funding is free access for everyone, so applying that reasoning to the critic's proposal yields an objection that a fee removes the justification. Ranking longer hours above access gives the critic's priorities to the author. The remark about too many books has no basis in the text, and denying that funding was justified contradicts the author directly.`,
  },
  [r`The AAMC CARS skill "Foundations of Comprehension" tests:`]: {
    question: r`A student is sorting practice questions by the reasoning skill each one tests. Which question stem belongs with the skill that covers basic meaning and how ideas within the passage relate?`,
    options: [
      r`Which new finding would most weaken the author's argument?`,
      r`Which statement best expresses the passage's central point?`,
      r`How would the author judge a case not found in the passage?`,
      r`Which situation outside the passage best fits its principle?`,
    ],
    correctAnswer: 1,
    explanation: r`Asking for the central point tests understanding of what the passage means, which is the comprehension skill. Asking what new finding would weaken the argument, how the author would judge an unseen case, or which outside situation fits the principle all require bringing in new information, so they test reasoning beyond the text.`,
  },
  [r`What is the function of a definition given early in a passage?`]: {
    question: r`A passage opens: "By 'leisure' I mean not idleness but time spent on an activity chosen for its own sake." Later the author says that a factory worker's Sunday spent patching a leaking roof "was not leisure." Why not, according to the passage?`,
    options: [
      r`The roof repair demanded physical effort, and leisure means idleness`,
      r`The roof repair took place on a Sunday rather than on a working day`,
      r`The roof repair was done from necessity, not chosen for its own sake`,
      r`The roof repair earned no wage, and leisure requires being paid`,
    ],
    correctAnswer: 2,
    explanation: r`The author's early definition makes leisure an activity chosen for its own sake, and patching a leak is done out of need. The "leisure means idleness" choice uses the ordinary sense that the author explicitly set aside. The day of the week and whether a wage was earned play no part in the stipulated definition.`,
  },
}
