import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-test-day-strategy-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What is the best approach to a passage you find overwhelming?`]: {
    question: r`A student has 20 minutes left and two passages to go. The first has six questions and describes a reaction mechanism she cannot follow, although two of its questions can be answered without the passage. The second passage has five questions. What is her best plan?`,
    options: [
      r`Reread the first passage until the mechanism is clear, then answer all six questions`,
      r`Leave the first passage's six questions blank and give all 20 minutes to the second`,
      r`Answer the two standalone-style questions, guess on the other four, then move on`,
      r`Start with the four hardest questions, and reach the two easy ones if time allows`,
    ],
    correctAnswer: 2,
    explanation: r`The advice is to take the points that do not need the passage, guess sensibly on the rest and protect the remaining passage. Rereading until it is clear, or starting with the hardest questions, spends the second passage's time on the questions least likely to pay off. Leaving the six blank throws away two easy points and four free guesses.`,
  },
  [r`What should you do in the final minutes of a section?`]: {
    question: r`With 2 minutes left in a section, a student has five questions with no answer selected and one flagged question where he is torn between two options he has already narrowed down. What should he do first?`,
    options: [
      r`Select an answer for each of the five blank questions`,
      r`Settle the flagged question between its two options`,
      r`Work the first blank question carefully to the end`,
      r`Recheck his earliest answers for careless mistakes`,
    ],
    correctAnswer: 0,
    explanation: r`A question with no answer selected is a guaranteed zero, so filling the five blanks comes first; each guess has a chance of scoring. The flagged question already has an answer selected, so it can wait. Working one blank carefully or rechecking early answers leaves the other blanks unanswered when time runs out.`,
  },
  [r`Should you change answers on review?`]: {
    question: r`Reviewing three flagged questions with 4 minutes left, a student sees that on question 12 she misread "decreases" as "increases" in the stem. On questions 20 and 31 she finds nothing new but feels uneasy about her choices. Which answers should she change?`,
    options: [
      r`All three, because unease is a sign of an error`,
      r`Only question 12, because she has a concrete reason`,
      r`Only questions 20 and 31, because of the unease`,
      r`None, because a first answer should never change`,
    ],
    correctAnswer: 1,
    explanation: r`An answer should change only for a concrete textual or conceptual reason, and a misread stem is one. Unease with no new reason is random second-guessing, which usually lowers scores, so questions 20 and 31 stay. "Never change" goes too far, because it would keep an answer she now knows rests on a misreading.`,
  },
  [r`How do you manage fatigue across 7.5 hours?`]: {
    question: r`On every full practice exam, a student scores well in the first two sections and drops sharply in the last two. She skips the breaks to "stay in the zone", eats nothing until the end, and otherwise practises one section at a time. Which change best addresses the drop?`,
    options: [
      r`Keep skipping the breaks, and add a coffee before the final section begins`,
      r`Practise single sections only, since full-length exams are what tire her out`,
      r`Eat nothing until the end, so that digestion does not slow her thinking`,
      r`Take every break with food and water, and sit more full-length practice exams`,
    ],
    correctAnswer: 3,
    explanation: r`Fatigue over a long exam is managed by taking every scheduled break, eating and drinking on purpose, and building stamina with full-length practice. Skipping breaks and not eating are the habits causing the late drop. Practising only single sections never trains her for the length of the real day.`,
  },
  [r`How should you handle a question on unfamiliar content?`]: {
    question: r`A question asks how a drop in pH would affect "enzyme Q", which a student has never heard of. The second paragraph of the passage describes enzyme Q, and a table lists its activity at pH 5, 7 and 9. What is his best move?`,
    options: [
      r`Guess at once, since unfamiliar content cannot be reasoned out`,
      r`Go back to the paragraph and table and reason from what they give`,
      r`Answer from the enzyme he knows best and assume Q behaves the same`,
      r`Leave it blank, since the topic was never in his review material`,
    ],
    correctAnswer: 1,
    explanation: r`Passages often supply what is needed for unfamiliar content, and here the description and the pH table do. Guessing at once ignores information that is on the page. Assuming enzyme Q matches a familiar enzyme can contradict the table, and leaving the question blank gives up a point for nothing.`,
  },
  [r`What mindset helps most between sections?`]: {
    question: r`A student believes he guessed on about ten questions in the section he just finished. During the break before the next section, which use of his thoughts will help his score most?`,
    options: [
      r`Treat the next section as a fresh start and let the last one go`,
      r`Count his likely misses so he can set a target for the next section`,
      r`Rework the hardest questions in his head to see where he went wrong`,
      r`Plan to rush the next section to make up for the points he lost`,
    ],
    correctAnswer: 0,
    explanation: r`Each section is independent, and dwelling on a hard one degrades performance on the next. Counting misses and reworking old questions are both rumination on answers he can no longer change. Rushing the next section to "make up" points lets the last section damage a new one.`,
  },
  [r`What is the highest-value test-day habit?`]: {
    question: r`A section gives roughly a minute and a half per question. A student has already spent 4 minutes on question 20 and feels that a few more minutes might crack it. What should she do, and why?`,
    options: [
      r`Keep going, because the 4 minutes are wasted unless she solves it`,
      r`Keep going, because one hard question outweighs several easy ones`,
      r`Skip it with no answer selected, because a blank is safer than a guess`,
      r`Pick her best guess and move on, because more time here costs later questions`,
    ],
    correctAnswer: 3,
    explanation: r`Strict time discipline means one question never eats the time budgeted for several others, and she has already used the time of about three questions. "The 4 minutes are wasted" is sunk-cost thinking, and nothing makes one hard question worth several others. Skipping with no answer selected turns a possible point into a certain zero.`,
  },
  [r`How should you use the flag/review feature?`]: {
    question: r`Early in a section, a student cannot decide between two options on question 14. He has plenty of time left overall but is at his time budget for this question. What is the right use of the flag feature?`,
    options: [
      r`Flag it and leave it unanswered, so he remembers to return and answer it`,
      r`Stay on it without flagging until he is fully sure which option is right`,
      r`Select the better option, flag it, and return only if time remains`,
      r`Select the better option without a flag, since flags only waste time`,
    ],
    correctAnswer: 2,
    explanation: r`The flag marks anything not confidently answered, but an answer goes in anyway and the return visit happens only if time remains. Flagging with no answer risks a blank if he never gets back. Staying until sure breaks his time budget, and never flagging means he cannot find the question again when he does have time.`,
  },
  [r`Test-retest reliability measures:`]: {
    question: r`A research team has written a new memory test. Which study would assess its test-retest reliability?`,
    options: [
      r`Comparing scores on it with scores on an established memory test`,
      r`Giving it to one group in March and again in April, then correlating scores`,
      r`Having two raters score the same set of responses independently`,
      r`Correlating scores on its odd-numbered items with the even-numbered items`,
    ],
    correctAnswer: 1,
    explanation: r`Test-retest reliability is the consistency of scores when the same people take the test on separate occasions. Comparing it with an established test addresses validity, which asks whether it measures the intended construct. Two raters gives inter-rater reliability, and odd against even items gives consistency within a single sitting.`,
  },
  [r`Spearman's "g" refers to:`]: {
    question: r`Which finding would give the most direct support to Spearman's idea of "g"?`,
    options: [
      r`People who score high on vocabulary also tend to score high on puzzles and arithmetic`,
      r`A gifted musician scores far below average on tests of vocabulary and arithmetic`,
      r`Scores on a vocabulary test show no relationship to scores on a spatial puzzle test`,
      r`Average scores on the same reasoning test climb steadily from one generation to the next`,
    ],
    correctAnswer: 0,
    explanation: r`"g" is a general intelligence underlying all cognitive tasks, and its evidence is that scores on very different tests correlate positively. A musician weak in other areas, or unrelated vocabulary and spatial scores, would point to separate abilities instead. Scores climbing across generations describes the Flynn effect.`,
  },
  [r`A standardized test must have:`]: {
    question: r`A reading test is given at two clinics. One allows 30 minutes with scripted instructions; the other allows 45 minutes and paraphrases the instructions. No scores from a reference group exist. What must change for the test to count as standardized?`,
    options: [
      r`Harder items at both clinics, and a pass mark chosen by each clinic`,
      r`More items at both clinics, and a second form with different questions`,
      r`Free timing at both clinics, and scoring adjusted to each person's pace`,
      r`The same timing and instructions at both, and norms from a reference group`,
    ],
    correctAnswer: 3,
    explanation: r`Standardization needs uniform administration and established norms, which is what lets one person's score be compared with another's. Harder or more items do not make the conditions uniform. A pass mark set by each clinic, or timing and scoring that vary by person, makes scores less comparable, not more.`,
  },
  [r`Projective tests like the Rorschach are criticized primarily for:`]: {
    question: r`A client tells stories about ambiguous pictures. Two clinicians read the same stories; one concludes the client is hostile, the other that the client is anxious. This disagreement illustrates which main criticism of such tests?`,
    options: [
      r`Fixed-choice items, which give a narrow view of the client`,
      r`Uniform scoring rules, which give high reliability only`,
      r`Subjective scoring, which gives low reliability and validity`,
      r`Outdated norms, which let scores drift upward over time`,
    ],
    correctAnswer: 2,
    explanation: r`Projective tests are criticized for low reliability and validity because interpretation is subjective, as two clinicians reaching different conclusions shows. Fixed-choice items and uniform scoring rules describe objective inventories such as the MMPI, which are psychometrically stronger. Drifting norms is a separate issue that the disagreement does not show.`,
  },
  [r`Specificity is defined as:`]: {
    question: r`A screening test is tried on 300 people. Of the 200 who do not have the disease, 160 test negative and 40 test positive. Of the 100 who have the disease, 90 test positive. What is the test's specificity?`,
    options: [
      r`90%`,
      r`80%`,
      r`20%`,
      r`69%`,
    ],
    correctAnswer: 1,
    explanation: r`Specificity is true negatives divided by everyone without the disease: 160/200 = 80%. The 90% figure is sensitivity, 90/100, which uses the people who have the disease. The 20% figure is the false positive rate, 40/200, and 69% is the share of positive results that are true, 90/130.`,
  },
  [r`The Flynn effect describes:`]: {
    question: r`A publisher gives today's adults an IQ test whose norms were set 50 years ago with an average of 100. Today's group averages 110. Which statement best accounts for this result?`,
    options: [
      r`The Flynn effect, linked to better nutrition, schooling and test familiarity`,
      r`The Flynn effect, linked to rapid genetic change in the population`,
      r`Poor test-retest reliability, linked to inconsistent scoring of the items`,
      r`Spearman's "g", linked to one general ability behind all the test's tasks`,
    ],
    correctAnswer: 0,
    explanation: r`The Flynn effect is the rise in average IQ scores over generations, attributed to nutrition, education and test familiarity. Genetic change is too slow to explain a rise within 50 years. Test-retest reliability concerns the same people retaking a test, and "g" describes why abilities correlate, not why averages rise.`,
  },
  [r`A chi-square test is appropriate for:`]: {
    question: r`A researcher counts how many left-handed and right-handed students are enrolled in each of three majors and asks whether handedness is spread evenly across the majors. Which analysis fits these data?`,
    options: [
      r`A t-test comparing two group means`,
      r`An ANOVA comparing three group means`,
      r`A correlation between two sets of scores`,
      r`A chi-square test on the observed counts`,
    ],
    correctAnswer: 3,
    explanation: r`Handedness and major are both categories and the data are counts, which is what chi-square handles by comparing observed with expected counts. A t-test and an ANOVA compare means of a measured quantity, and there is no measured quantity here. A correlation needs two numerical scores per person.`,
  },
}
