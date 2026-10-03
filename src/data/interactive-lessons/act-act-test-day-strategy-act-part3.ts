export const actTestDayPart3Data = {
  topicSlug: 'act-test-day-strategy-act',
  sections: [
    {
      id: 'act-tday-p3-intro',
      type: 'text' as const,
      content: `
# ⏱️ Section-by-Section Timing

**Part 3 of 7 — Pace Targets, Checkpoints, and How to Catch Up**

Every ACT section is timed separately, and leftover minutes never carry over. That means each section needs its own pacing plan. The goal is not to rush; it is to **reach every question with enough time to answer the ones you can get right**, and to guess on purpose rather than by accident when time runs out.

## The Pace Table

| Section | Questions | Time | Average per question | Per-unit target |
|---------|-----------|------|----------------------|-----------------|
| English | 50 | 35 min | 42 sec | About 7 min per 10 questions |
| Math | 45 | 50 min | about 67 sec | Faster early, slower late (see below) |
| Reading | 36 | 40 min | about 67 sec | About 10 min per passage (4 passage units of about 9 questions) |
| Science | 40 | 40 min | 60 sec | 1 min per question, so a 6-question passage gets about 6 min |
| Writing | 1 essay | 40 min | n/a | Plan about 8, write about 27, proofread about 5 |

To find a per-question average: convert minutes to seconds and divide. For Math, $50 \\times 60 = 3000$ seconds and $3000 \\div 45 \\approx 66.7$ seconds.

## Checkpoints: Check the Clock at Milestones, Not on Every Question

Glancing at your watch after every question wastes time and feeds anxiety. Instead, pick 3–4 **checkpoints** per section and write them at the top of your scratch work (or your test booklet on paper) the moment the section begins.

| Section | Checkpoint 1 | Checkpoint 2 | Checkpoint 3 | Finish |
|---------|--------------|--------------|--------------|--------|
| English | Q10 at 7 min | Q20 at 14 min | Q30 at 21 min | Q50 at 35 min |
| Math | Q15 at 12 min | Q30 at 28 min | Q45 at 46 min | 4 min to review and fill blanks |
| Reading | Passage 1 done at 10 min | Passage 2 at 20 min | Passage 3 at 30 min | Passage 4 at 40 min |
| Science | Q10 at 10 min | Q20 at 20 min | Q30 at 30 min | Q40 at 40 min |

**Using an analog watch:** at the start of a section, note where the minute hand is and add the checkpoint times. Some students turn the watch's minute hand to 12:00 when the proctor says "begin," so the elapsed time is easy to read.

The proctor also announces when **5 minutes remain**. Treat that announcement as an alarm: if you have any blanks, start your fill-in plan (Part 4) within the last couple of minutes no matter what.

## Section-Specific Pacing Advice

**English (42 seconds per question).** Most English questions are quick once you spot what is being tested (punctuation, verb form, transition, wordiness). Read the passage as you go and answer questions as you reach them. Questions that ask about the passage as a whole are easier after you have read all of it, so do them at the end of that passage. Because English is the fastest-paced section, stuck questions should be guessed and flagged after about a minute.

**Math (about 67 seconds per question, but not evenly).** ACT Math questions tend to get more involved later in the section, so **bank time early**: aim to finish the first 15 in about 12 minutes, which leaves extra time for the multi-step questions near the end. A sample split:

| Questions | Time budget | Running clock |
|-----------|-------------|---------------|
| 1–15 | 12 min | 12 min |
| 16–30 | 16 min | 28 min |
| 31–45 | 18 min | 46 min |
| Review and fill blanks | 4 min | 50 min |

**Reading (about 10 minutes per passage).** Each passage unit gets about 10 minutes: roughly 3–4 minutes to read actively (note the main idea of each paragraph and the author's attitude) and about 6 minutes for its questions (about 40 seconds each). You may do the passages in any order. Some students start with the passage type they read best, which banks confidence and time. If you change the order, be extra careful that each answer goes on the right line of the answer document.

**Science (60 seconds per question).** Time Science by **questions**, not passages, because passages vary in length. Skim the figures (axes, units, variables) instead of reading every sentence, then go to the questions; many can be answered straight from a graph or table. A passage with two or more competing viewpoints usually takes longer because it is mostly text, so many students save it for last.

**Writing (40 minutes, one essay).** Spend about 8 minutes planning your position and examples, about 27 minutes writing, and about 5 minutes proofreading. An essay with a clear plan beats a longer essay that wanders.

## When You Fall Behind

You will sometimes miss a checkpoint. The fix is a calculation, not panic:
1. **Measure the gap.** How many questions are left, and how many minutes?
2. **Compute the new pace.** Minutes left times 60, divided by questions left.
3. **Set a cap.** If the new pace is tighter than your normal pace, give each remaining question a hard cap (for example, 45 seconds in Math). When the cap hits, guess, flag, and move.
4. **Protect the easy points.** Prioritize questions you can finish in one pass; skip the long ones first.
5. **Never borrow from the next section.** Time cannot move between sections, and the next section starts fresh.

Being ahead matters too: if you reach a checkpoint early, do not speed up further. Use the surplus on the questions you flagged.
      `
    },
    {
      id: 'act-tday-p3-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Recovering in Math</b></summary>

**Question:** At the 30-minute mark of Math, Elena is just starting question 24. Her plan had her at question 30 by 28 minutes. What should she do?

**Solution:**
1. **Gap:** She has 20 minutes left and 22 questions to go (24 through 45).
2. **New pace:** $20 \\times 60 = 1200$ seconds, and $1200 \\div 22 \\approx 55$ seconds per question, tighter than her planned pace for the hardest part of the test.
3. **Triage:** She cannot give all 22 questions full attention. She sets a cap of about 60 seconds, skips (with a guess) any question that looks like a long multi-step setup, and works the questions she can finish in one pass first.
4. **Endgame:** At about the 47-minute mark she makes sure every remaining bubble is filled, then uses any leftover seconds on the flagged question that looks shortest.

**Takeaway:** Falling behind is a math problem: compute the new pace, set a cap, and protect the points you can actually earn.
</details>

<details>
<summary><b>Example 2: Re-planning Reading after a slow first passage</b></summary>

**Question:** Ravi finishes the first Reading passage at 14 minutes instead of 10. How should he pace the remaining three passages?

**Solution:**
1. **Time left:** $40 - 14 = 26$ minutes for 3 passages, which is about $26 \\div 3 \\approx 8.7$ minutes each (about 8 minutes 40 seconds).
2. **Where to save:** He reads more actively and quickly (main idea of each paragraph, not every detail), and spends less time rereading before answering.
3. **Question order:** Within each passage, he answers questions with line numbers or specific references first, since they are quickest to verify, then the broader ones.
4. **Checkpoints:** New targets are passage 2 done by about 23 minutes, passage 3 by about 31 minutes, and passage 4 by 40 minutes.

**Takeaway:** Re-split the remaining time evenly and tighten each passage slightly; do not abandon a whole passage unless you are hopelessly behind.
</details>
      `
    },
    {
      id: 'act-tday-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Pacing Math** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Twenty minutes into English, about which question should a student working at the average pace be on?",
            options: ["Question 20", "Question 24", "Question 34", "Question 29"],
            correctAnswer: 3,
            explanation: "At 42 seconds per question, 20 minutes (1,200 seconds) covers 1,200 / 42, about 28.6 questions, so she should be near question 29. Question 20 would be the pace of 1 minute per question, which is far too slow for English, and question 34 assumes a 35-second pace."
          },
          {
            question: "In Science, Nadia spends 9 minutes on a 6-question passage. Compared with the 1-minute-per-question target, where does she stand?",
            options: [
              "She is 3 minutes behind and should tighten up",
              "She is on pace, since passages vary in length",
              "She is 1 minute behind, which is not worth fixing",
              "She is 6 minutes behind and must skip a passage"
            ],
            correctAnswer: 0,
            explanation: "Six questions at 60 seconds each is a 6-minute budget, so 9 minutes puts her 3 minutes behind. Passage length is exactly why Science is timed by questions, not passages. A 3-minute deficit is fixable by tightening the next passages, without abandoning one."
          },
          {
            question: "Which Math time plan best fits the way the section is built?",
            options: [
              "Exactly 67 seconds on every question from first to last",
              "Do the last 15 questions first, then go back to the start",
              "Spend extra time early so the first answers are perfect",
              "Move fast early to bank time for later, harder ones"
            ],
            correctAnswer: 3,
            explanation: "Later Math questions tend to be more involved, so finishing the first 15 in about 12 minutes leaves extra time where it is needed. A flat pace starves the hard questions, starting at the end puts you on the hardest questions while fresh but risks running out on easier points, and overspending early does the opposite of banking."
          },
          {
            question: "Twenty-two minutes into Reading, Kofi is halfway through his third passage. What does this tell him?",
            options: [
              "He is ahead and can spend the surplus on his flagged items",
              "He is behind and should drop the fourth passage",
              "He is behind and needs to cap his remaining questions",
              "He is right on pace and should keep going as he is"
            ],
            correctAnswer: 0,
            explanation: "At 10 minutes per passage, a student on pace would be just starting passage 3 at 20 minutes and finishing it at 30. Being halfway through passage 3 at 22 minutes puts him about 3 minutes ahead, so he can keep his steady pace and use the extra time on flagged questions. He is not behind, and dropping a passage would waste points."
          }
        ]
      }
    },
    {
      id: 'act-tday-p3-input',
      type: 'input-boxes' as const,
      content: `
**Checkpoint Calculations** 🧮

1) Math is 45 questions in 50 minutes. Enter the average seconds per question, rounded to the nearest whole number.

2) After 14 minutes of English at the average pace, how many questions should be done?

3) A student has 12 minutes left in Math and 15 questions to go. Enter the new average seconds per question.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['67', '20', '48'],
        hint1: '50 minutes = 3,000 seconds. Divide by 45.',
        hint2: '14 minutes = 840 seconds. Divide by 42 seconds per question.',
        hint3: '12 minutes = 720 seconds. Divide by 15.',
        explanation: '1) 3,000 / 45 is about 66.7, which rounds to 67 seconds. 2) 840 / 42 = 20 questions. 3) 720 / 15 = 48 seconds per question, much tighter than normal, so the student should cap each question and skip long setups.'
      }
    },
    {
      id: 'act-tday-p3-actpractice',
      type: 'text' as const,
      content: `
## Build Your Own Checkpoint Card

Fill this in for your next timed practice test, then compare your real times to the targets.

| Section | Target | Your actual | Adjust next time? |
|---------|--------|-------------|-------------------|
| English | Q20 at 14 min | ___ | ___ |
| Math | Q15 at 12 min, Q30 at 28 min | ___ | ___ |
| Reading | Each passage at 10, 20, 30, 40 min | ___ | ___ |
| Science | Q10, Q20, Q30 at 10, 20, 30 min | ___ | ___ |

**ACT Tip:** Your checkpoints are only useful if you practice with them. Use the same card on every timed practice test so the routine is automatic on test day.
      `
    },
    {
      id: 'act-tday-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Timing Under Pressure** 📋
      `,
      exercise: {
        questions: [
          {
            question: "Sofia finishes Math 6 minutes early. What is the best use of that time?",
            options: [
              "Return to flagged questions and re-check any rushed computation",
              "Start reading ahead in the Reading section to get a head start on it",
              "Change several answers at random so they are not all the same letter",
              "Put her head down and rest, since her answers are already all bubbled"
            ],
            correctAnswer: 0,
            explanation: "Flagged and rushed questions are where extra minutes most often turn into points. Working on another section is not allowed, random changes are as likely to hurt as help, and resting wastes time she could use to catch an error."
          },
          {
            question: "With 8 minutes left in Science, Marcus has 12 questions left: a long, text-heavy viewpoints passage (7 questions) and a graph passage (5 questions). What order makes the most sense?",
            options: [
              "Viewpoints first, since it has more questions to answer",
              "Graph passage first, then viewpoints with the time left",
              "Split the time evenly and stop each after 4 minutes",
              "Skip both passages and fill in one letter for all 12"
            ],
            correctAnswer: 1,
            explanation: "Graph questions can often be answered quickly by reading the figure, so they deliver the most points per minute. The viewpoints passage needs reading time, so it goes last with whatever remains, plus guesses on anything unfinished. Splitting evenly gives the slow passage the same time as the fast one, and skipping both throws away answerable questions."
          },
          {
            question: "A student realizes at minute 25 of Reading that she has finished only two passages. What should she do?",
            options: [
              "Spend the remaining time on just one more passage and do it well",
              "Re-split 15 minutes across two passages and tighten her reading",
              "Skip reading passages entirely and answer from the questions only",
              "Go back to check the first two passages before moving forward"
            ],
            correctAnswer: 1,
            explanation: "Fifteen minutes for two passages is 7.5 minutes each, which is tight but workable if she reads more actively and answers the specific-reference questions first. Doing only one more passage leaves 9 questions unattempted, answering without reading lowers accuracy sharply, and re-checking finished work makes the deficit worse."
          },
          {
            question: "Which is the best way to track time during the English section?",
            options: [
              "Check the clock after every single question",
              "Do not check the time; wait for the 5-minute call",
              "Check only when a question feels unusually difficult",
              "Check at planned milestones such as Q10, Q20, and Q30"
            ],
            correctAnswer: 3,
            explanation: "Planned milestones give you enough information to adjust without breaking focus. Checking after every question wastes seconds and raises anxiety, waiting for the 5-minute call leaves no room to recover, and checking only on hard questions gives an irregular, emotional read on your pace."
          }
        ]
      }
    },
    {
      id: 'act-tday-p3-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Averages:** English 42 sec per question; Math and Reading about 67 sec; Science 60 sec. Writing: plan, write, proofread in about 8 / 27 / 5 minutes.
- **Checkpoints** at milestones (English Q20 at 14 min; Math Q15 at 12 and Q30 at 28; Reading every 10 min; Science every 10 questions) beat constant clock-checking.
- **Math:** bank time early, since later questions tend to be more involved.
- **Reading:** about 10 minutes per passage; you may choose the order, but bubble carefully. **Science:** time by questions, read figures first, and consider saving a text-heavy viewpoints passage for last.
- **Behind?** Compute the new pace, set a per-question cap, skip long setups first, and fill every blank before time ends. Time never carries between sections.
      `
    }
  ]
};
