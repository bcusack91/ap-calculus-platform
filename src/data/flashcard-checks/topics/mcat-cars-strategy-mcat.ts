import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-cars-strategy-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`How should you handle unfamiliar CARS subject matter?`]: {
    question: r`A student opens a passage on the restoration of Byzantine mosaics, a subject she has never studied, and feels lost by the second sentence. What should she do as she reads on?`,
    options: [
      r`Slow down and memorize each technical term before reading any further`,
      r`Follow what the author claims and why, and let the technical details go`,
      r`Skip the passage and guess, since background knowledge is required here`,
      r`Recall what she knows about art history and use that to fill the gaps`,
    ],
    correctAnswer: 1,
    explanation: r`The reading section never rewards prior knowledge of the subject, so the task is to track the argument: what the author claims and why. Memorizing terms wastes time on details, skipping assumes background is required when it is not, and filling gaps from art history brings in outside knowledge the questions do not credit.`,
  },
  [r`Should you read the questions before the passage?`]: {
    question: r`A student starts a new passage with six questions. He considers reading all six question stems first so that he knows what to look for. What does the usual advice say to do?`,
    options: [
      r`Read all six stems first, then hunt the passage for each answer in turn`,
      r`Read the stems and answer choices first, then skim only the key lines`,
      r`Read the first and last paragraphs, then go to the stems for the rest`,
      r`Read the passage first and build a map of the argument, then answer`,
    ],
    correctAnswer: 3,
    explanation: r`Reading the questions first usually breaks the passage into fragments, so the argument never comes together. Building a map of the argument first makes every question faster. Hunting for each stem, skimming only key lines, and reading only the first and last paragraphs all skip the step of understanding the whole argument.`,
  },
  [r`What is the ideal time allocation per CARS passage?`]: {
    question: r`The reading section gives 90 minutes for 9 passages. If a student is exactly on the ideal pace, about how much time should be left on the clock when she finishes passage 6?`,
    options: [r`About 30 minutes`, r`About 40 minutes`, r`About 20 minutes`, r`About 36 minutes`],
    correctAnswer: 0,
    explanation: r`The ideal pace is about 10 minutes per passage, so 6 passages use 60 minutes and 30 remain. About 40 minutes left would mean only 5 passages are done, and about 20 would mean 7 are done. About 36 comes from counting only the 6 minutes of question time per passage and forgetting the 4 minutes of reading.`,
  },
  [r`What should you do when stuck between two answers?`]: {
    question: r`A student has cut a question down to two choices. One says the author "questions the reliability of eyewitness memory"; the other says the author "rejects eyewitness memory as worthless." Both feel right to him. What should he do next?`,
    options: [
      r`Pick the one with the stronger wording, since it sounds more decisive`,
      r`Pick the one that matches what he knows about memory from psychology`,
      r`Go back to the passage and find the line that rules one of them out`,
      r`Reread both choices several times until one starts to sound better`,
    ],
    correctAnswer: 2,
    explanation: r`When two choices remain, the passage decides: find the specific line that eliminates one, which is usually the one that overreaches, as "rejects as worthless" likely does here. Choosing stronger wording favors the overreaching choice, using psychology knowledge brings in outside information, and rereading the choices alone gives no new evidence.`,
  },
  [r`What is the single rule governing every CARS answer?`]: {
    question: r`A passage on urban planning says the author favors narrow streets because they bring neighbors into contact. It never mentions air quality. One answer choice says the author favors narrow streets because they cut car emissions, which the student knows from a class to be true. How should she treat that choice?`,
    options: [
      r`Eliminate it, because the passage gives it no support at all`,
      r`Keep it, because a true statement cannot be a wrong answer`,
      r`Keep it, because it gives a stronger reason than the passage`,
      r`Eliminate it, because the science behind it is still disputed`,
    ],
    correctAnswer: 0,
    explanation: r`Every answer must be supported by the passage, and this passage never mentions emissions, so the choice is out even though it is true. Keeping it because it is true, or because it seems a stronger reason, lets outside knowledge replace the text. Eliminating it over disputed science is also judging by outside knowledge rather than by the passage.`,
  },
  [r`What should you note while reading a CARS passage?`]: {
    question: r`A student's notes on a passage about museum funding read: "three dates, two museum names, one budget figure." Which set of notes would have served her better on the questions?`,
    options: [
      r`Every number in the passage, the order of events, and each unfamiliar word used`,
      r`The first sentence of each paragraph, the longest paragraph, and all proper names`,
      r`The passage's subject area, its likely source, and how hard the questions look`,
      r`The author's main claim, the author's attitude, and where other views come in`,
    ],
    correctAnswer: 3,
    explanation: r`The useful things to note are the author's main claim, the author's tone, and the places where views other than the author's appear, because most questions turn on these. Numbers, names and first sentences are details that can be looked up if a question needs them. The subject area and likely source say nothing about the argument.`,
  },
  [r`How do you separate the author's voice from cited views?`]: {
    question: r`A passage reads: "Many economists hold that raising the minimum wage reduces employment. The evidence of the past two decades, however, shows no such effect in most local markets." Which view is the author's own?`,
    options: [
      r`That wage increases reduce employment, as many economists have held`,
      r`That the evidence shows wage increases mostly do not reduce employment`,
      r`That both positions are equally well supported by recent evidence`,
      r`That no position is taken, since the author only reports the debate`,
    ],
    correctAnswer: 1,
    explanation: r`The word "however" marks where the author breaks from the cited economists, so the author's view is the one that follows it: the evidence shows no such effect. The claim that wage increases reduce employment belongs to "many economists," not the author. The author does not treat the two as equal and does take a side.`,
  },
  [r`Why should you never leave an MCAT question blank?`]: {
    question: r`With 30 seconds left in a section, a student has three flagged questions with no answer selected and no time to reason through any of them. What is the best use of those seconds?`,
    options: [
      r`Leave all three blank, since a wrong guess lowers the score further`,
      r`Work one carefully and leave two blank to avoid a guessing penalty`,
      r`Select a choice on all three, since a wrong guess costs nothing extra`,
      r`Leave them blank so they are dropped from the scored question count`,
    ],
    correctAnswer: 2,
    explanation: r`There is no penalty for a wrong answer, so a blank scores the same as a missed guess while a guess has a chance of being right. Leaving questions blank to avoid a penalty assumes a penalty that does not exist. Blank questions are not dropped from scoring; they simply count as wrong.`,
  },
  [r`When a question asks what a word "most nearly means," you should rely on:`]: {
    question: r`A passage says: "The committee's report was pedestrian; it repeated familiar findings and offered nothing a reader would remember." A question asks what "pedestrian" most nearly means here. Which choice does the context support?`,
    options: [r`Travelling on foot`, r`Widely accessible`, r`Careful and thorough`, r`Dull and unimaginative`],
    correctAnswer: 3,
    explanation: r`The surrounding words, "repeated familiar findings" and "nothing a reader would remember," show that the word is used here to mean dull and unimaginative. "Travelling on foot" is the ordinary dictionary sense, which does not fit a report. "Widely accessible" and "careful and thorough" are positive readings that the context contradicts.`,
  },
  [r`In a passage about the ethics of genetic engineering, the author writes: "We must ask not whether we can, but whether we should." This rhetorical strategy is:`]: {
    question: r`In a passage on city surveillance cameras, the author writes: "The question is not how many cameras the budget allows, but what kind of city we want to live in." What is the author doing in this sentence?`,
    options: [
      r`Shifting the issue from a practical question to one of values`,
      r`Conceding that the budget is the main limit on the policy`,
      r`Appealing to an expert authority to settle the dispute`,
      r`Restating the opposing view in order to endorse it fully`,
    ],
    correctAnswer: 0,
    explanation: r`The "not X, but Y" form replaces one question with another: here a question of what is affordable becomes a question of what is desirable, which is reframing. The author sets the budget question aside rather than conceding to it. No expert is cited, and the opposing framing is rejected, not endorsed.`,
  },
  [r`Which is the best first step after reading a CARS passage?`]: {
    question: r`A student finishes reading a passage on jazz criticism with about 6 minutes left for its questions. Before he looks at the first question, what should he do?`,
    options: [
      r`Reread the whole passage once more to catch missed details`,
      r`Read through every answer choice for all of the questions`,
      r`State the passage's main idea to himself in his own words`,
      r`Memorize the names and dates mentioned in each paragraph`,
    ],
    correctAnswer: 2,
    explanation: r`Summarizing the main idea in his own words takes a few seconds and makes most of the questions faster, because many answers must fit that idea. Rereading the whole passage spends the question time. Reading every answer choice first, or memorizing names and dates, loads up details without fixing the argument in mind.`,
  },
  [r`A CARS answer choice that is "too strong" typically:`]: {
    question: r`A passage says: "Early bilingual education may offer some cognitive benefits, though the findings are mixed." Which answer choice is too strong for this passage?`,
    options: [
      r`Bilingual education might benefit cognition in some cases`,
      r`Bilingual education always improves children's cognition`,
      r`Research on bilingual education has not been consistent`,
      r`Some findings link bilingual education to cognitive gains`,
    ],
    correctAnswer: 1,
    explanation: r`The passage hedges with "may" and "mixed," so a choice saying bilingual education "always improves" cognition uses absolute language the passage never supports. The other three choices keep the author's level of certainty: "might benefit," "has not been consistent," and "some findings" all match a hedged claim.`,
  },
  [r`Which is a hallmark of a correct CARS answer?`]: {
    question: r`A passage states: "The treaty ended the fighting but left the border dispute unresolved." A question asks what the treaty accomplished. One choice reads: "It resolved the border dispute that the fighting had caused." How should a student judge this choice?`,
    options: [
      r`Accept it: it repeats several key words taken from the passage`,
      r`Accept it: familiar wording is the surest sign of a right answer`,
      r`Reject it: right answers never reuse any wording from a passage`,
      r`Reject it: the words match, but the meaning contradicts the text`,
    ],
    correctAnswer: 3,
    explanation: r`A correct answer can be traced to specific support in the passage, and the passage says the border dispute was left unresolved, so this choice matches the words while reversing the meaning. Accepting it for its familiar words is the word-matching trap. Right answers can reuse passage wording; the test is whether the meaning matches.`,
  },
  [r`When two paragraphs present opposing views and the third begins "Both accounts overlook," the author is:`]: {
    question: r`Paragraph 1 of a passage describes historians who credit a revolution to economic hardship. Paragraph 2 describes historians who credit it to new political ideas. Paragraph 3 opens: "Neither camp considers how ordinary soldiers understood their own choices." Where is the author's own view?`,
    options: [
      r`In paragraph 3, as a new position that faults both camps`,
      r`In paragraph 1, since the first view given is the author's`,
      r`In paragraph 2, since it answers the view of paragraph 1`,
      r`Nowhere, since the author is only summarizing the debate`,
    ],
    correctAnswer: 0,
    explanation: r`A paragraph that begins by saying what both earlier views miss is the author stepping in with a third position that criticizes both. The views in paragraphs 1 and 2 belong to the historians described there, not to the author. The opening of paragraph 3 is a judgment, so the author is doing more than summarizing.`,
  },
  [r`In CARS passages, when "some scholars" or "critics" are referenced without specific citation, the author is most likely:`]: {
    question: r`A paragraph opens: "Some critics maintain that the novel is a dying form." No critic is named and no source is given. What should a reader expect the author to do next?`,
    options: [
      r`Adopt that view as the thesis and defend it for the whole passage`,
      r`Name each critic and summarize their published work in detail`,
      r`Respond to that view, most likely by qualifying or disputing it`,
      r`Drop that view entirely and move on to an unrelated subject`,
    ],
    correctAnswer: 2,
    explanation: r`An unnamed "some critics" is usually a generalized view set up so that the author can answer it, most often by qualifying or disputing it. Authors rarely introduce their own thesis as what "some critics maintain." A vague reference signals that the critics will not be detailed, and a view raised at the start of a paragraph is there to be addressed, not dropped.`,
  },
}
