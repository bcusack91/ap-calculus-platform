export const actTestDayPart6Data = {
  topicSlug: 'act-test-day-strategy-act',
  sections: [
    {
      id: 'act-tday-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Putting Pacing, Guessing, and Section Tactics Together**

Parts 3 and 4 gave you pacing targets and a guessing system. This part shows how to use them together, question by question, inside each section. The goal is to make good decisions in seconds, without having to think about strategy while you are also thinking about the question.

## The 30-Second Decision Loop

Run this loop whenever a question does not immediately click:

| Step | Ask yourself | Action |
|------|--------------|--------|
| 1 | Do I know what the question is asking? | Reread the final sentence of the question stem; underline the actual ask. |
| 2 | Can I start within about 20–30 seconds? | If yes, work it. If no, go to step 3. |
| 3 | What can I eliminate? | Use the section-specific checks below. |
| 4 | Am I on pace? | If behind, guess among what is left, flag, and move. If ahead, give it up to your time cap. |

## Execution Tactics by Section

**English (50 questions, 35 minutes)**
- **Read the whole sentence**, not just the underlined part; many errors depend on words outside the underline.
- **Compare the answer choices to see what is changing** (a comma moving, a verb tense, one word swapped). Whatever changes is what the question tests.
- **Treat "NO CHANGE" as a real option.** It is correct sometimes; choose it when the original has no error and is as concise as the alternatives.
- **When two choices are both grammatical and mean the same thing, prefer the more concise one.** Wordy and redundant choices are common wrong answers.
- **Questions with a stated goal** ("Which choice best introduces the paragraph's main idea?") are answered by the goal in the stem, so reread it before choosing.
- Questions about the passage as a whole go at the end of that passage.

**Math (45 questions, 50 minutes, 4 choices, calculator allowed)**
- **Read the last line first** so you know what is being asked (the value of $x$, or of $2x + 1$?).
- **Use the answer choices**: backsolve by plugging choices in, or pick easy numbers for variables when choices are expressions.
- **Draw it.** A quick sketch for any geometry or coordinate question prevents misreading.
- **Calculator judgment:** use it for messy arithmetic and graphing; do simple steps mentally, since typing them is slower.
- **Skip candidates when behind:** long word problems with several steps, questions with multiple figures, and anything you cannot start within 30 seconds.
- **Sanity checks:** sign, size, units. Lengths and areas are positive, probabilities are between 0 and 1.

**Reading (36 questions, 40 minutes, 4 passage units)**
- **Choose your passage order** before you start if you have a strong preference; otherwise go in order.
- **Read actively:** jot a few words for each paragraph's main idea and note the author's attitude.
- **Answer questions with line or paragraph references first**, since they are fastest to verify.
- **For a paired-passage unit**, answer questions about the first passage, then the second, then the questions about both.
- **Every correct answer is supported by the text.** If you cannot point to the support, it is probably wrong.

**Science (optional; 40 questions, 40 minutes)**
- **Read the figures first:** title, axes, units, and what changes between trials.
- **Look-up questions** (find a value on a graph or in a table) are the fastest; do them right away.
- **Trend questions:** state the trend in your own words ("as temperature rises, rate rises") before reading the choices.
- **Experiment questions:** identify what was changed on purpose (independent variable), what was measured (dependent variable), and what was held constant.
- **Text-heavy viewpoint passages take longer**; many students save them for last.
- Most questions are answered from the passage; a few may assume basic science knowledge.

## Choosing What to Skip: The Points-per-Minute Idea

Every question is worth the same one point. So when time is short, choose questions by **expected points per minute**, not by order or difficulty pride:
- A one-line Math equation you can solve in 40 seconds is a point for under a minute.
- A five-step word problem might take three minutes, and you might still miss it.
- A Science look-up question takes 20 seconds; a viewpoints comparison may take 90.

When you are behind, do the high points-per-minute questions first, and give quick guesses to the low ones.

## A Full-Section Mindset

Before each section begins, run a five-second pre-brief: "Checkpoints at ___. Two-pass method. Fill every blank at 2 minutes." After the section, a one-breath reset. That routine, repeated four or five times in one morning, is what turns strategy into a habit you do not have to think about.
      `
    },
    {
      id: 'act-tday-p6-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: An English question with the decision loop</b></summary>

**Sentence:** "The museum's new exhibit, which opened last spring, *have attracted* visitors from across the state."

**Choices:** A. NO CHANGE  B. has attracted  C. attracting  D. have been attracting

**Solution:**
1. **What changes?** Every choice is a verb form of *attract*, so the question tests verb agreement or tense.
2. **Read the whole sentence:** the subject is *exhibit* (singular); the clause "which opened last spring" is extra information between commas.
3. **Eliminate:** A and D use *have*, which is plural. C, *attracting*, leaves the sentence with no main verb.
4. **Answer: B, "has attracted."** Time spent: about 20 seconds, well under the 42-second average.
</details>

<details>
<summary><b>Example 2: Triage at the end of Math</b></summary>

**Situation:** Keisha has 9 minutes left and 10 questions remaining (36–45). A quick scan shows:
- Q36, Q39, Q41: short, one-step algebra
- Q37, Q44: long word problems with tables
- Q38, Q40, Q43: medium geometry with figures
- Q42, Q45: unfamiliar topics she cannot start

**Solution:**
1. **Floor first:** She bubbles her letter of the day on Q42 and Q45 right away (and later replaces them if time allows).
2. **Highest points per minute:** Q36, Q39, Q41, about 1 minute each, so 3 minutes used.
3. **Next tier:** Q38, Q40, Q43, about 1.5 minutes each, so 4.5 more minutes, leaving about 1.5 minutes.
4. **Last 90 seconds:** She bubbles guesses on Q37 and Q44 (after eliminating any obviously wrong choices) so nothing is blank.

**Result:** Six questions worked carefully, four guesses, zero blanks. Working strictly in order would likely have stuck her on Q37's table for three minutes.
</details>
      `
    },
    {
      id: 'act-tday-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Workshop: Choose the Move** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "An English question's four choices are: 'NO CHANGE,' 'however,' 'therefore,' and 'for example,' all at the start of a sentence. What is the question testing, and what should the student do first?",
            options: [
              "The logical transition; read the sentence before it for the link",
              "Comma placement; check whether each word needs a comma on both sides",
              "Verb tense; find the subject of the sentence and match the verb to it",
              "Wordiness; choose the shortest choice, since concise answers are best"
            ],
            correctAnswer: 0,
            explanation: "Only the transition word changes across the choices, so the question tests the logical relationship between this sentence and the previous one (contrast, result, or example). Punctuation and verbs are not changing, and conciseness only breaks ties between choices that mean the same thing, which these do not."
          },
          {
            question: "Three minutes into the second Reading passage, a student is on a question asking about the 'main purpose of the passage.' She has read only the first two paragraphs. What is the best move?",
            options: [
              "Answer it now from the first two paragraphs to save time",
              "Pick the choice that repeats the most words from paragraph 1",
              "Flag it and answer it after reading the rest of the passage",
              "Skip the passage entirely, since big-picture questions are hard"
            ],
            correctAnswer: 2,
            explanation: "Main-purpose questions depend on the whole passage, so they are best answered after reading it all. Answering from two paragraphs risks picking a detail as the purpose, matching repeated words is a classic trap, and abandoning the passage throws away its quicker specific questions."
          },
          {
            question: "In Science, a question asks for the reaction rate at 35 degrees C. Figure 2 shows rate vs. temperature from 20 to 50 degrees C. What should the student do?",
            options: [
              "Reread the whole passage introduction before answering",
              "Use outside knowledge of reaction rates to estimate it",
              "Calculate the value using a formula from chemistry class",
              "Find 35 on Figure 2's temperature axis and read the rate"
            ],
            correctAnswer: 3,
            explanation: "This is a look-up question, among the fastest points on the test: locate 35 on the x-axis, go up to the curve, and read the rate. Rereading the introduction wastes time, outside knowledge is unnecessary when the figure gives the answer, and calculators are not allowed in Science anyway."
          },
          {
            question: "A Math question asks: 'If 3x + 5 = 20, what is the value of 6x + 10?' The student has found x = 5. What should she do?",
            options: [
              "Mark 5, since that is the value she just solved for",
              "Notice 6x + 10 doubles 3x + 5, so the value is 40",
              "Plug x = 5 into 3x + 5 to check that she gets 20",
              "Skip it, since the question has an extra step in it"
            ],
            correctAnswer: 1,
            explanation: "The question asks for 6x + 10, which is exactly 2(3x + 5) = 2(20) = 40; plugging in x = 5 gives the same result. Marking 5 answers a different question (a classic trap, and 5 is often a choice). Checking 3x + 5 only confirms x, and skipping a quick question wastes a point."
          }
        ]
      }
    },
    {
      id: 'act-tday-p6-input',
      type: 'input-boxes' as const,
      content: `
**Workshop Math** 🧮

1) A student has 6 minutes left in Science and two passages: one with 5 look-up questions (about 30 seconds each) and one viewpoints passage with 7 questions (about 70 seconds each). How many seconds does the look-up passage take?

2) After the look-up passage, how many full viewpoints questions can she finish in the remaining time (at 70 seconds each)?

3) How many questions would she then guess on so that nothing is left blank?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['150', '3', '4'],
        hint1: '5 questions times 30 seconds.',
        hint2: '6 minutes = 360 seconds. Subtract the look-up time, then divide by 70 and round down.',
        hint3: 'The viewpoints passage has 7 questions.',
        explanation: '1) 5 x 30 = 150 seconds. 2) 360 - 150 = 210 seconds; 210 / 70 = 3 questions. 3) 7 - 3 = 4 guesses. Doing the fast passage first earns 5 likely points plus 3 more, and the 4 guesses add about 1 expected point.'
      }
    },
    {
      id: 'act-tday-p6-actpractice',
      type: 'text' as const,
      content: `
## Points-per-Minute Sort

You are 3 minutes behind with these left. Rank them in the order you would do them, then check.

| Question | Estimated time | Order |
|----------|----------------|-------|
| Math: solve a one-line linear equation | 40 sec | 1st |
| Math: find the slope of a line from two given points | 45 sec | 2nd |
| Math: right-triangle question with a labeled figure | 75 sec | 3rd |
| Math: a five-step word problem with a table | 3 min | Guess and flag |
| Math: a topic you have never studied | ? | Guess immediately |

**ACT Tip:** Every question is worth the same one point. Order by how quickly you can earn it, not by question number.
      `
    },
    {
      id: 'act-tday-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Integrated Scenarios** 📋
      `,
      exercise: {
        questions: [
          {
            question: "A Reading unit has two shorter passages, A and B, followed by questions on A, on B, and on both. With 10 minutes for the unit, what order is most efficient?",
            options: [
              "Read both passages, then answer every question in printed order",
              "Answer the questions about both passages first, then A, then B",
              "Skip passage A and answer only the B and comparison questions",
              "Do A and its questions, then B, then the questions on both"
            ],
            correctAnswer: 3,
            explanation: "Handling one passage at a time keeps each fresh in memory when you answer its questions, and the comparison questions are easiest once you know both passages. Starting with comparisons means answering before reading carefully, and reading both first blurs details. Skipping A loses its questions and weakens the comparison answers."
          },
          {
            question: "An English choice says: 'The final, concluding paragraph ends the essay.' Another says: 'The final paragraph ends the essay.' Both are grammatical. Which principle decides between them?",
            options: [
              "Prefer the concise one, because 'final' and 'concluding' repeat",
              "Prefer the longer version, because more detail helps the reader",
              "Prefer whichever one sounds more formal and more academic",
              "Either is fine, since both sentences are grammatically correct"
            ],
            correctAnswer: 0,
            explanation: "'Final' and 'concluding' mean the same thing here, so the longer version is redundant; the ACT rewards the concise choice when meaning is equal. More words add no detail in this case, formality is not the test, and grammatical correctness alone does not make a redundant choice acceptable."
          },
          {
            question: "In a Science experiment, students change the amount of fertilizer given to identical plants and measure plant height after 3 weeks. A question asks which variable was held constant. How should a student find it?",
            options: [
              "Pick the plant height, because it was carefully measured",
              "Look for a factor kept the same across trials, like plant type",
              "Pick the fertilizer amount, because researchers controlled it",
              "Choose whichever variable appears first in the description"
            ],
            correctAnswer: 1,
            explanation: "A constant (controlled) variable is a factor kept the same across trials, such as the plant type, which the passage signals with 'identical plants.' Plant height is the dependent variable (what was measured), and fertilizer amount is the independent variable (what was changed on purpose). Position in the text says nothing about a variable's role."
          },
          {
            question: "At question 25 of Math, a student is exactly on pace. Question 25 is a long probability word problem she knows how to do, but it will take about 2.5 minutes. What is the best decision?",
            options: [
              "Skip it with no guess and come back only if she finishes early",
              "Do it now in full, since she knows the method and it is a point",
              "Mark a guess now, flag it, and plan to return to it in Pass 2",
              "Spend 30 seconds, then give up on it and leave it blank"
            ],
            correctAnswer: 2,
            explanation: "A 2.5-minute question uses more than twice the average time, so the two-pass method says mark a guess, flag it, and return with the time she banks on quicker questions. Doing it now risks squeezing later questions, skipping with no mark risks a blank, and abandoning it blank after 30 seconds wastes both the time and the free guess."
          }
        ]
      }
    },
    {
      id: 'act-tday-p6-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Decision loop:** know the ask, start within 20–30 seconds or eliminate, check your pace, then answer or guess-flag-move.
- **English:** read the whole sentence, see what changes across choices, treat NO CHANGE as real, prefer concise when meaning is equal.
- **Math:** read the last line first, use the answer choices, sketch, sanity-check sign, size, and units, and use the calculator only where it saves time.
- **Reading:** specific-reference questions first, big-picture questions after the whole passage, paired passages one at a time then both.
- **Science:** figures first, look-up questions fast, name the independent, dependent, and controlled variables, save text-heavy viewpoints for last.
- **Points per minute:** every question is worth one point, so when time is short, earn the fast points first and guess on the slow ones.
      `
    }
  ]
};
