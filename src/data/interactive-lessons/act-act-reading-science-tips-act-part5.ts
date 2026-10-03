export const actReadSciTipsPart5Data = {
  topicSlug: 'act-reading-science-tips-act',
  sections: [
    {
      id: 'act-rsci-p5-intro',
      type: 'text' as const,
      content: `
# ⏱️ Score Improvement Plan

**Part 5 of 7 — Pacing, Skipping Smartly, and Learning From Your Misses**

Knowing how to read a passage is half the job. The other half is getting to every question with enough time to answer it. This part gives you the pacing math for both tests and a system for turning practice-test mistakes into points.

## The Pacing Math

| Test | Questions | Time | Per question | Per passage set |
|---|---|---|---|---|
| Reading | 36 | 40 min | about 67 s | about 10 min for each of 4 sets |
| Science (optional) | 40 | 40 min | 60 s | 40 min divided by the number of passages |

**Reading:** a common split is about 3 to 4 minutes reading and mapping the passage, then about 6 minutes for its nine or so questions. Natural-science passages often reward a slightly faster first read, because many questions are detail look-ups you can find with your paragraph map.

**Science:** count the passages when you start. If you want a review reserve, subtract it first, then divide. Example: with 7 passages and a 5-minute reserve, (40 − 5) ÷ 7 = **5 minutes per passage**.

## Checkpoints Beat Clock-Watching

Rather than checking the time after every question, set **checkpoints**:

- Reading: about 10, 20, and 30 minutes elapsed at the end of passages 1, 2, and 3.
- Science: one checkpoint per passage, or at the quarter marks (10, 20, 30 minutes).

**Behind-pace check:** if you have used *T* minutes on *Q* questions, your pace is T ÷ Q minutes per question. Multiply by the questions left and compare to the minutes left. If you need more time than you have, speed up **now**, while there are still easy questions to protect.

> Example: 40-minute section, 40 questions. After 16 questions you have used 22 minutes. Pace = 22 ÷ 16 ≈ 1.38 min per question. The remaining 24 questions would need about 33 minutes, but only 18 remain, so you are about **15 minutes short**.

To find a target pace for what remains, convert to seconds: 15 minutes left for 20 questions is 900 ÷ 20 = **45 seconds** per question.

## Skip, Guess, Mark, Return

The ACT has **no penalty for wrong answers**, so never leave a question blank.

1. **Cap your time.** If a question passes about 60 to 90 seconds with no clear path, stop.
2. **Guess** your best remaining choice (eliminate what you can first).
3. **Mark** it to revisit.
4. **Move on** to questions that are faster, such as single-table look-ups.
5. **Return** with your reserve time.

Pushing on until you feel certain is the most expensive habit on both tests. One stubborn question can cost the time for three easy ones.

## Question-First Scanning When Time Is Short

On Science, when a passage has figures and you are behind, read **each question first**, then go straight to the figure, column, or row it names. Skip the introduction unless a question asks about the method. On Reading, use your paragraph map: key nouns in the question stem tell you which paragraph to reread. Question order within a passage does not reliably run from easy to hard, so do not assume the last question is the easiest or the hardest.

## The Error Log: Fix the Biggest Leak First

After each timed practice section, sort every miss into one category:

| Category | Looks like | Fix |
|---|---|---|
| Ran out of time | Blank or rushed final questions | Per-passage caps, checkpoints, skip-and-return |
| Misread the figure | Wrong column, wrong units, wrong line | Figure-first routine; circle units |
| Rushed look-up | Knew how, read the wrong value | Point at the row before choosing |
| Viewpoint mix-up | Gave Scientist 1's claim to Scientist 2 | One-line summaries for each view |
| Overreach | Picked a choice stronger than the text | Match the passage's hedges |
| Term in context | Chose a dictionary meaning | Reread the sentence; substitute each choice |
| Design logic | Confused variables or controls | Build the changed / measured / same table |

Then **count**. The category with the most misses is where the next week of practice should go. A student who loses six questions to time and two to units gains more from pacing drills than from any amount of content review. Re-test, re-count, and move to the next biggest leak.
      `
    },
    {
      id: 'act-rsci-p5-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Building a Reading plan</b></summary>

**Situation:** On practice tests, a student finishes the first three Reading passages in 33 minutes and guesses on most of the fourth.

**Solution:**
1. Target: about 10 minutes per passage, so 30 minutes for three. She is 3 minutes over by the end of passage 3.
2. Fix with checkpoints: 10, 20, and 30 minutes. If she reaches minute 10 with two questions left on passage 1, she guesses, marks them, and moves on.
3. Trim the first read: a paragraph map ("P1 puzzle, P2 method, P3 result, P4 caveat") instead of rereading dense sentences until they feel clear.
4. Result: the fourth passage gets its full 10 minutes, which is worth far more than the two marked questions cost.
</details>

<details>
<summary><b>Example 2: Reading an error log</b></summary>

**Situation:** After a timed Science section, a student missed 12 questions: 5 unanswered when time ran out, 3 from wrong units, 2 from conflicting viewpoints, and 2 from rushed look-ups.

**Solution:**
1. Biggest category: **time, 5 of 12**.
2. Plan: a per-passage cap with skip-and-return, plus question-first scanning on the last passage.
3. Second priority: units, 3 of 12. Add a five-second "circle the units" step to the figure-first routine.
4. Not the plan: memorizing science facts. None of the 12 misses came from missing outside knowledge.
</details>
      `
    },
    {
      id: 'act-rsci-p5-input',
      type: 'input-boxes' as const,
      content: `
**Pacing Drill** ✏️

1) The Reading test gives 40 minutes for 4 passage sets. How many minutes per set?

2) A Science section has 40 minutes and 5 passages. You keep a 5-minute reserve. How many minutes per passage?

3) You have 12 minutes left and 16 questions to go. How many seconds per question can you spend?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '7', '45'],
        hint1: '40 ÷ 4.',
        hint2: 'Subtract the reserve first: 40 − 5 = 35, then divide by 5.',
        hint3: '12 minutes = 720 seconds. Divide by 16.',
        explanation: '1) 40 ÷ 4 = 10 minutes per Reading set. 2) (40 − 5) ÷ 5 = 7 minutes per passage. 3) 720 ÷ 16 = 45 seconds per question.'
      }
    },
    {
      id: 'act-rsci-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice: Timing Decisions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `On the Reading test, you reach the 20-minute mark with three questions left on the second passage. Which move best protects your score?`,
            options: [
              `Finish all three carefully, however long it takes`,
              `Guess on the three, mark them, and start the third passage`,
              `Skip to the fourth passage, since the third is hardest`,
              `Reread the second passage before answering the three`
            ],
            correctAnswer: 1,
            explanation: `At the 20-minute checkpoint you should be starting passage 3, so guessing, marking, and moving on keeps two full passages' worth of time intact. Working on "however long it takes" lets one passage eat into the next. Passage difficulty does not follow a fixed order, so skipping ahead is a guess about difficulty, and rereading the whole passage costs more time than the three questions are worth.`
          },
          {
            question: `You have spent 80 seconds on a Science question that combines two figures and you still have no clear path. The rest of the passage's questions look like single-table look-ups. What should you do?`,
            options: [
              `Keep working until you are completely sure of the answer`,
              `Leave the question blank so you can come back to it later`,
              `Guess, mark it, and answer the look-up questions first`,
              `Reread the introduction for the method used in the study`
            ],
            correctAnswer: 2,
            explanation: `Guessing protects you if you never return, marking lets you revisit, and the look-ups are fast points. Insisting on certainty can drain time from several easier questions. A blank earns nothing if time runs out, since the ACT does not penalize wrong answers. The introduction rarely resolves a question about combining figures.`
          },
          {
            question: `A Science section has 40 minutes and 7 passages. You want a 5-minute reserve at the end. About how long should you plan to spend on each passage?`,
            options: [`4 minutes 17 seconds`, `5 minutes`, `5 minutes 43 seconds`, `6 minutes`],
            correctAnswer: 1,
            explanation: `Subtract the reserve first: 40 − 5 = 35 minutes, and 35 ÷ 7 = 5 minutes per passage. Five minutes 43 seconds divides the full 40 minutes and leaves no reserve. Four minutes 17 seconds subtracts the reserve twice (30 ÷ 7), and 6 minutes per passage would need 42 minutes.`
          },
          {
            question: `With 5 minutes left, you reach a Science passage with two tables, a short introduction, and 5 questions. Which approach is most likely to earn the most points?`,
            options: [
              `Read the introduction in full before looking at any question`,
              `Study both tables closely before reading any of the questions`,
              `Answer the last question first, since it is usually the easiest`,
              `Read each question, then go straight to the table it points to`
            ],
            correctAnswer: 3,
            explanation: `Question-first scanning sends you only to the rows and columns each question needs, which is the fastest route to points with little time. Reading the whole introduction or studying both tables spends minutes on details some questions never use. Question order within a passage does not reliably put the easiest question last.`
          }
        ]
      }
    },
    {
      id: 'act-rsci-p5-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice: Build Your Own Plan

Use your most recent timed section. Fill in the counts, then read across.

| Category | Your misses | If it is your biggest leak, practice this |
|---|---|---|
| Ran out of time | ___ | Two timed passages a day with strict caps and checkpoints |
| Misread figure or units | ___ | Ten figures a day: say title, axes, units, trend aloud in 15 seconds |
| Viewpoint mix-up | ___ | One Conflicting Viewpoints passage a day with written one-line summaries |
| Overreach on inferences | ___ | For each wrong choice, name the word that goes too far |
| Natural-science Reading detail | ___ | Map one science passage a day; answer from the map before rereading |
| Design logic | ___ | Build the changed / measured / same table for every experiment you see |

**Weekly cycle:** timed section → error log → one-week focus on the biggest leak → timed section again. Track the count in each category, not just your score. A shrinking category is proof the fix is working even before the scale score moves.
      `
    },
    {
      id: 'act-rsci-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions: Pace and Plan** 📋
      `,
      exercise: {
        questions: [
          {
            question: `A Science section allows 40 minutes for 40 questions. After the first 15 questions you have used 20 minutes. If you keep the same average pace, about how many minutes short of finishing will you be?`,
            options: [`About 5 minutes`, `About 20 minutes`, `About 13 minutes`, `About 33 minutes`],
            correctAnswer: 2,
            explanation: `Your pace is 20 ÷ 15 ≈ 1.33 minutes per question, so the remaining 25 questions need about 33 minutes, but only 20 minutes remain: about 13 minutes short. The 33-minute figure is the time needed, not the shortfall, and 20 minutes is the time left. Five minutes is just the gap between 25 questions and 20 minutes, which ignores your pace.`
          },
          {
            question: `You have 14 minutes left and 20 questions to answer. About how many seconds can you spend on each question?`,
            options: [`About 42 seconds`, `About 70 seconds`, `About 36 seconds`, `About 60 seconds`],
            correctAnswer: 0,
            explanation: `Fourteen minutes is 840 seconds, and 840 ÷ 20 = 42 seconds. Treating a minute as 100 seconds gives 1,400 ÷ 20 = 70. Spending 60 seconds each would need 20 minutes, and 36 seconds uses only 12 minutes, rushing more than necessary.`
          },
          {
            question: `A student's Reading error log shows 9 misses: 5 inferences that went beyond the passage, 2 words in context, and 2 rushed details. Which focus should come first?`,
            options: [
              `Timing drills, so the student finishes every passage`,
              `Spending more time on word-in-context questions alone`,
              `Learning more science vocabulary before the next test`,
              `Matching each answer's strength to the passage's wording`
            ],
            correctAnswer: 3,
            explanation: `Overreaching inferences are the largest group, 5 of 9, so practicing how strongly each choice claims compared with the passage targets the biggest leak. The log shows no time-outs, so timing drills address nothing here. Terms are defined in context, so memorizing vocabulary would not fix overreach, and word-in-context accounts for only 2 misses.`
          }
        ]
      }
    },
    {
      id: 'act-rsci-p5-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Reading:** 36 questions in 40 minutes, about 10 minutes per passage set (roughly 3–4 to read and map, 6 for questions).
- **Science:** 40 questions in 40 minutes. Subtract any reserve, then divide by the number of passages.
- **Use checkpoints** and the behind-pace check: pace × questions left vs minutes left.
- **Never leave a blank.** Cap, guess, mark, move on, return.
- **Short on time?** Read the question first and go straight to the figure or paragraph it names.
- **Keep an error log**, count by category, and fix the biggest leak first. Outside science facts are rarely the leak.
      `
    }
  ]
};
