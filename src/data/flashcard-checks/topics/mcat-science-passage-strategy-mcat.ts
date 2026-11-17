import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-science-passage-strategy-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`How should you read a science passage?`]: {
    question: r`A passage has three paragraphs and one figure: paragraph 1 introduces a bacterial drug pump, paragraph 2 lists the buffer used, paragraph 3 describes a test on a mutant, and Figure 1 shows drug build-up in cells. Which set of notes shows the first pass was done the recommended way?`,
    options: [
      r`P1: what the pump is. P2: buffer recipe. P3: mutant test. Fig 1: main result.`,
      r`P2: 50 mM Tris, 150 mM NaCl, 5 mM MgCl₂, 1 mM DTT, 10% glycerol, pH 7.4.`,
      r`P1: read slowly three times. P2, P3 and Fig 1: not yet looked at at all.`,
      r`Nothing read yet. Open question 1 and search the text line by line.`,
    ],
    correctAnswer: 0,
    explanation: r`A first pass should capture structure and purpose: what each paragraph is for and where the result sits, so details can be found later. Copying the buffer recipe front-loads details that are rarely tested. Rereading one paragraph three times or skipping the passage entirely both leave the student without a map of the whole passage.`,
  },
  [r`How do you handle a passage full of unfamiliar terminology?`]: {
    question: r`A passage states: "Kinase Trk9 phosphorylates protein Zeb7. Phosphorylated Zeb7 cannot enter the nucleus." A student has never heard of either protein. A question asks what happens to Zeb7 in cells treated with a Trk9 inhibitor. What is the best answer?`,
    options: [
      r`Zeb7 becomes phosphorylated and stays in the cytoplasm`,
      r`It cannot be answered without prior study of Zeb7`,
      r`Zeb7 stays unphosphorylated and can enter the nucleus`,
      r`Zeb7 is degraded because Trk9 normally stabilizes it`,
    ],
    correctAnswer: 2,
    explanation: r`The names are only labels; the passage gives the relationship. Blocking Trk9 means less phosphorylation, and unphosphorylated Zeb7 is free to enter the nucleus. Saying Zeb7 becomes phosphorylated reverses the effect of an inhibitor, saying it cannot be answered treats vocabulary as required knowledge, and degradation is never mentioned in the passage.`,
  },
  [r`What is the best use of the first 30 seconds on a passage?`]: {
    question: r`A passage opens: "Researchers studying wound healing in diabetic mice applied either a growth-factor gel or a plain gel to skin wounds. Wounds given the growth-factor gel closed in 9 days; those given plain gel closed in 14 days." Which thought best uses the first 30 seconds?`,
    options: [
      r`The growth factor probably binds a receptor tyrosine kinase in skin cells`,
      r`Diabetic mouse wounds; growth-factor gel versus plain gel; the gel sped closure`,
      r`Closure took exactly 9 days and 14 days; memorize both numbers before moving on`,
      r`Diabetes raises blood glucose through insulin resistance in muscle and fat`,
    ],
    correctAnswer: 1,
    explanation: r`Orienting means naming the system (diabetic mouse wounds), what was done (growth-factor gel versus plain gel) and the take-home finding (faster closure). Guessing at a receptor mechanism and recalling how diabetes raises glucose are outside details the passage did not give. Memorizing the two numbers front-loads data that can be looked up if asked.`,
  },
  [r`What are the three science passage types?`]: {
    question: r`A passage lays out two competing models for how a drug crosses the blood-brain barrier, summarizes the points each side makes, and then argues that the second model is better supported. The authors report no new experiment of their own. Which type of passage is this?`,
    options: [
      r`An experiment or research passage`,
      r`An information or review passage`,
      r`A discrete or standalone passage`,
      r`A persuasive or argument passage`,
    ],
    correctAnswer: 3,
    explanation: r`The authors take a side and argue for one model, which marks a persuasive or argument passage. An experiment passage would report a method and results, and a review passage would present content without arguing for a position. "Discrete" describes standalone questions, not a passage type.`,
  },
  [r`Why should you not memorize passage details on first read?`]: {
    question: r`A passage includes a table of melting points for eight compounds. On the first read a student spends 90 seconds memorizing all eight values. Only one question uses the table, and it asks for the melting point of a single compound. What is the best critique?`,
    options: [
      r`Tables are never tested, so the table should have been skipped entirely`,
      r`All eight values should have been copied onto the noteboard instead`,
      r`Looking up one value when asked is faster than memorizing all eight`,
      r`Memorizing was right, but four of the eight values would have been enough`,
    ],
    correctAnswer: 2,
    explanation: r`Most details are never tested, so finding the one needed value on demand costs seconds while memorizing all eight cost 90 seconds. Copying the values or memorizing half of them still front-loads work that mostly goes unused. Saying tables are never tested is false: one question did use it, which is why the student should know where the table is.`,
  },
  [r`What should you identify immediately in a research passage?`]: {
    question: r`A passage states: "The researchers predicted that caffeine shortens reaction time. Volunteers drank a beverage containing 0, 100 or 200 mg of caffeine and then completed a timed button-press task." Which labeling of the study is correct?`,
    options: [
      r`IV: caffeine dose; DV: reaction time; control: the 0 mg group`,
      r`IV: reaction time; DV: caffeine dose; control: the 0 mg group`,
      r`IV: caffeine dose; DV: reaction time; control: the 200 mg group`,
      r`IV: the button task; DV: caffeine dose; control: the 100 mg group`,
    ],
    correctAnswer: 0,
    explanation: r`The researchers set the caffeine dose (independent variable), measured reaction time (dependent variable), and the 0 mg group is the baseline control. Swapping the two variables confuses what is set with what is measured. The 200 mg and 100 mg groups are treatment levels, not controls, and the button task is the measuring tool rather than a variable.`,
  },
  [r`How should you approach questions referencing a specific paragraph?`]: {
    question: r`A question reads: "According to paragraph 3, the mutant enzyme lost activity at which pH?" The options are 6.0, 6.5, 7.0 and 7.5. The student remembers only that it was "around 6 or 7". What should the student do?`,
    options: [
      r`Pick 6.5, the middle of the remembered range`,
      r`Flag it and guess, since rereading costs time`,
      r`Reread the whole passage from its first line`,
      r`Reread paragraph 3 and find the exact pH given`,
    ],
    correctAnswer: 3,
    explanation: r`The question names the paragraph and the options are close together, so precision matters and a quick reread of paragraph 3 settles it. Picking the middle of a vague memory or guessing throws away a point that is sitting in the text. Rereading the whole passage wastes time when the location is already given.`,
  },
  [r`What percentage of science questions require the passage?`]: {
    question: r`A student plans to prepare for a science section only by drilling standalone recall questions and never practicing passages. The section has 59 questions, of which 15 are standalone. How much of the section is attached to passages?`,
    options: [
      r`15 questions, about 25% of the section`,
      r`44 questions, about 75% of the section`,
      r`30 questions, about 50% of the section`,
      r`59 questions, fully 100% of the section`,
    ],
    correctAnswer: 1,
    explanation: r`59 − 15 = 44 questions sit with passages, and 44/59 is about 75%, so skipping passage practice neglects most of the section. The 15 questions (about 25%) are the standalone ones, not the passage ones. Half and all of the section are both miscounts of the 44 and 15 split.`,
  },
  [r`Globalization's effect on health includes:`]: {
    question: r`A new respiratory virus appears in one city. Within three weeks, cases are confirmed on four continents. In the same three weeks, laboratories in six countries share its genome sequence and a working diagnostic test. What does this show about globalization and health?`,
    options: [
      r`It speeds the spread of disease but slows the spread of knowledge`,
      r`It slows the spread of disease but speeds the spread of knowledge`,
      r`It speeds both the spread of disease and the spread of knowledge`,
      r`It slows both the spread of disease and the spread of knowledge`,
    ],
    correctAnswer: 2,
    explanation: r`Travel carried the virus to four continents in weeks, and the same connectedness let laboratories share the sequence and a test just as quickly, so both disease and knowledge spread faster. The options that slow either one contradict half of the scenario, and the option that slows both contradicts all of it.`,
  },
  [r`A mental set is:`]: {
    question: r`A student solves five dilution problems in a row with $C_1V_1 = C_2V_2$. The sixth problem asks for the concentration after mixing two different solutions of the same solute. The student applies $C_1V_1 = C_2V_2$ again without thinking and gets it wrong. Which concept does this show?`,
    options: [
      r`Mental set: reusing an approach that worked before`,
      r`Functional fixedness: seeing only one use for an object`,
      r`Confirmation bias: seeking only evidence that agrees`,
      r`Availability heuristic: judging by ease of recall`,
    ],
    correctAnswer: 0,
    explanation: r`The student carried over a method that had just succeeded five times into a problem where it no longer fit, which is a mental set. Functional fixedness is about the uses of an object, not a solution method. Confirmation bias concerns how evidence for a belief is sought, and the availability heuristic concerns judging how likely something is.`,
  },
  [r`The testing effect shows that:`]: {
    question: r`Two students each have 60 minutes with the same chapter. Student 1 reads it three times. Student 2 reads it once, then closes the book and spends the remaining time answering practice questions from memory. Who is expected to score higher on a test one week later, and why?`,
    options: [
      r`Student 1, because repeated exposure strengthens memory most`,
      r`Student 2, because retrieval practice strengthens memory most`,
      r`Student 1, because answering questions disrupts encoding`,
      r`Neither, because equal study time gives equal retention`,
    ],
    correctAnswer: 1,
    explanation: r`Pulling information out of memory strengthens it more than reading it again, so the student who practiced retrieval should retain more after a week. Crediting repeated exposure is the common belief the testing effect overturns. Answering questions does not disrupt encoding, and equal study time does not mean equal retention when the study methods differ.`,
  },
  [r`Decay theory of forgetting proposes memories fade due to:`]: {
    question: r`Two groups learn the same word list. Group 1 then sleeps for 8 hours. Group 2 stays awake for the same 8 hours and learns several other word lists. Both are then tested on the first list. What does decay theory, taken by itself, predict?`,
    options: [
      r`More forgetting in group 2, since the new lists interfere`,
      r`More forgetting in group 1, since sleep erases memory traces`,
      r`No forgetting in either group, since the list was encoded`,
      r`Equal forgetting in both groups, since equal time has passed`,
    ],
    correctAnswer: 3,
    explanation: r`Decay theory attributes forgetting to the passage of time without use, and both groups waited the same 8 hours without rehearsing, so it predicts equal loss. More forgetting in the group that learned new lists is what interference theory predicts. Decay theory does not say sleep erases traces, and it does not say encoded material is safe from fading.`,
  },
}
