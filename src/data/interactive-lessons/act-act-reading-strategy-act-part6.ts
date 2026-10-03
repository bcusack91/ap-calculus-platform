export const actReadingStratPart6Data = {
  topicSlug: 'act-reading-strategy-act',
  sections: [
    {
      id: 'act-rs6-intro',
      type: 'text' as const,
      content: `
# ⏱️ Timing, Pacing & Question Triage

**Part 6 of 7 — The 40-Minute Budget, Checkpoints, Two-Pass Triage & Fast Direct-Evidence Questions**

## The Numbers

The Enhanced ACT Reading section has **36 questions in 40 minutes**:

$$40 \\text{ min} \\times 60 = 2400 \\text{ s}, \\qquad \\frac{2400 \\text{ s}}{36} \\approx 67 \\text{ s per question}$$

That 67 seconds has to cover your **reading time too**, not just answering. (If you have seen "52 seconds per question" in older prep books, that number came from the former 40-question, 35-minute section and no longer applies.)

Two more facts shape your strategy:
- Every question has **4 answer choices**.
- Your score counts **correct answers only**; a wrong answer costs nothing more than a blank. **Never leave a question blank.**

## A Budget Per Passage Set

If your form has four passage sets of about nine questions each, that is roughly **10 minutes per set**. A workable split:

| Step | Time | What you do |
|---|---|---|
| Read and map | about 3–4 min | read actively, write a job note per paragraph (Part 1) |
| Answer | about 6–7 min | roughly 40–45 seconds per question, faster on direct-evidence items |

**Checkpoints.** Glance at the clock after each set: about **10, 20, and 30 minutes** elapsed. If you are two or more minutes behind at a checkpoint, speed up on the next set by making your map shorter and capping hard questions sooner, rather than abandoning the map entirely.

**Passage order.** You may work the sets in any order. Many students do their **strongest passage type first** to bank points early and save the type that usually slows them down for last. Decide your order before test day so you do not spend time deciding during the test.

## Two-Pass Triage

Not every question costs the same amount of time. Sort as you go:

| Speed | Question types | Why |
|---|---|---|
| **Fast** — answer now | "According to the passage…" details; words in context; questions that name a sentence or paragraph | The answer is stated in a spot you can find with your map |
| **Medium** — answer now, cap at about a minute | function and purpose; tone; inference with a location | One short step of reasoning |
| **Slow** — flag and return | EXCEPT / NOT questions; questions with no location; "both passages" comparisons; whole-passage questions when you are unsure of the structure | They require checking several places |

**Pass 1:** answer every fast and medium question in the set; **flag** slow ones after picking a provisional answer.

**Pass 2:** return to flagged questions if time remains in your budget. Most formats let you move among questions within a section; use the flag or mark tool, or circle the number on paper.

**Time-sink signals.** Move on (provisional answer, flag) when you notice any of these:
- You are rereading the same paragraph for the third time.
- You have been stuck between two choices for more than about 30 seconds.
- You cannot say where in the passage the answer would be.

## Direct-Evidence Questions: Fast, but Exact

"According to the passage" questions are the cheapest points in the section, which is exactly why careless errors on them hurt. Four habits:

1. **Find the keyword** in the stem ("tool shed," "1962," "stomach samples") and use your map to jump to it.
2. **Read the whole sentence,** not just the keyword. The answer is often in the clause after it.
3. **Do the arithmetic the passage sets up.** "The bridge opened in 1962, two years after she left" means she left in **1960**. Wrong choices include 1962 (the year stated) and 1964 (adding instead of subtracting).
4. **Separate cause from consequence.** In "Shorter days delay their development, so instead of breeding they store fat," the cause is the shorter days; storing fat is what happens as a result.

## EXCEPT / NOT Questions

"The passage states all of the following EXCEPT…" reverses the usual task: three choices **are** in the passage and one is not.

- Check each choice against the passage and mark it T (stated) or F (not stated).
- The answer is the **one F**, even if it is true in real life. ACT rewards what the passage says, not what you know.
- These take longer, so they are good candidates for pass 2.

## Comparison Questions

When a passage gives numbers for two plans, groups, or years, compute **each side** before reading the choices. Write the two values down. "80 apartments, half low-income" means **40** low-income units, which can be more than another plan's 30 even though 80 is fewer than 120. Never assume the bigger plan has more of everything.

## The Last Two Minutes

With about two minutes left, stop working on any single question and **fill in an answer for every unanswered question.** With four choices and no penalty, a blank is the only answer guaranteed to score zero.
      `
    },
    {
      id: 'act-rs6-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Recovering at a checkpoint</b></summary>

**Situation:** The clock shows 23 minutes elapsed. You have finished two passage sets (18 questions) and are about to start the third.

**Step 1 — Compare to the plan.** The 20-minute checkpoint called for two sets done; you are about 3 minutes behind.

**Step 2 — What is left?** 17 minutes for 18 questions, about 57 seconds per question, reading included.

**Step 3 — Adjust.** Map the next passage in shorter notes, answer fast questions immediately, and hold slow questions to a provisional answer plus a flag. Do **not** skip reading the passage; answering from scraps of a passage costs more points than it saves time.
</details>

<details>
<summary><b>Example 2: Triage a passage set</b></summary>

Nine stems from one set. Sort them before answering.

| # | Stem | Speed |
|---|---|---|
| 1 | "According to the passage, the shed was paid for by…" | Fast |
| 2 | "As it is used in paragraph 3, 'sound' most nearly means…" | Fast |
| 3 | "The main purpose of the fourth paragraph is to…" | Medium |
| 4 | "The passage states all of the following EXCEPT…" | Slow |
| 5 | "According to the passage, in what year did she leave…" | Fast (with arithmetic) |
| 6 | "It can reasonably be inferred from paragraph 2 that…" | Medium |
| 7 | "The author's attitude toward the plan is best described as…" | Medium |
| 8 | "Which choice best describes the passage as a whole?" | Medium after a good map |
| 9 | "Compared with Plan A, Plan B would provide…" | Slow (two calculations) |

**Pass 1:** 1, 2, 5, then 3, 6, 7, 8. **Pass 2:** 4 and 9, with provisional answers already marked.
</details>
      `
    },
    {
      id: 'act-rs6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Pacing Decisions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `On the Enhanced ACT Reading section (36 questions in 40 minutes), about how much time is available per question, including reading time?`,
            options: [`about 52 seconds`, `about 67 seconds`, `about 90 seconds`, `about 45 seconds`],
            correctAnswer: 1,
            explanation: `2,400 seconds divided by 36 questions is about 67 seconds. Fifty-two seconds comes from the former 40-question, 35-minute section. Ninety seconds would require an hour, and 45 seconds is closer to the time left for answering once reading time is set aside, not the whole budget.`,
          },
          {
            question: `You reach the 30-minute mark having finished three passage sets. What is the best plan for the final set?`,
            options: [
              `Skip reading and answer from the question stems only`,
              `Spend extra time to double-check the first three sets`,
              `Work the last set at your normal pace; you are on schedule`,
              `Guess on the entire set so that you finish early`,
            ],
            correctAnswer: 2,
            explanation: `Three sets in 30 minutes matches the 10-minute-per-set budget, so the final set gets its full 10 minutes. Skipping the reading or guessing throws away points you have time to earn, and reviewing earlier sets before the last one is done risks leaving questions unanswered.`,
          },
          {
            question: `Which question from a passage set is usually best to answer on your first pass?`,
            options: [
              `"The passage states all of the following EXCEPT…"`,
              `"According to the passage, the shed was paid for by…"`,
              `"Both authors would most likely agree that…"`,
              `"Which choice best describes the passage as a whole?"`,
            ],
            correctAnswer: 1,
            explanation: `A direct-detail question with a clear keyword ("shed") can be located with your map and answered in seconds. EXCEPT questions require checking every choice, "both authors" questions need two passages, and a whole-passage question is safest once you have finished the set's other questions.`,
          },
          {
            question: `With two minutes left, you have four unanswered questions and are midway through a hard inference question. What should you do?`,
            options: [
              `Finish the inference question first, however long it takes`,
              `Leave the four questions blank to avoid wrong answers`,
              `Reread the passage quickly to look for easy answers`,
              `Pick an answer for every unanswered question right away`,
            ],
            correctAnswer: 3,
            explanation: `Wrong answers cost nothing, so every blank is a guaranteed zero, while a guess on a four-choice question has a real chance to score. Finishing one hard question could leave all four blank, leaving them blank never helps, and a reread will not fit in two minutes.`,
          },
        ],
      },
    },
    {
      id: 'act-rs6-input1',
      type: 'input-boxes' as const,
      content: `
**Run the Numbers** 🧮

1) 40 minutes for 36 questions: how many seconds per question, to the nearest whole second?

2) You give a nine-question passage set 10 minutes and spend 4 minutes reading and mapping. How many seconds per question are left for answering?

3) If the section has four equal passage sets, how many questions should you have finished at the 30-minute checkpoint?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['67', '40', '27'],
        hint1: 'Convert 40 minutes to seconds, then divide by 36.',
        hint2: '6 minutes remain; convert to seconds and divide by 9.',
        hint3: 'Three sets of nine questions.',
        explanation: '1) 2,400 ÷ 36 ≈ 66.7, about 67 seconds. 2) 6 minutes = 360 seconds, and 360 ÷ 9 = 40 seconds per question. 3) Three sets × 9 questions = 27 questions.',
      },
    },
    {
      id: 'act-rs6-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

**Passage:** Before she became known for her bridges, engineer Rosa Tamm designed grain silos for farm cooperatives. Her first bridge, a footbridge over the Pell River, opened in 1962, three years after she left the cooperatives. Its success led to a commission for the Harbor Street Bridge, finished in 1971.

<details>
<summary><b>Try it: According to the passage, in what year did Tamm leave the cooperatives?</b></summary>

1959. The footbridge opened in 1962, three years **after** she left, so subtract: 1962 − 3 = 1959. The traps are 1962 (the year stated) and 1965 (adding instead of subtracting).
</details>

<details>
<summary><b>Try it: The passage states all of the following EXCEPT that Tamm (A) designed grain silos, (B) designed a footbridge, (C) studied engineering abroad, (D) worked on the Harbor Street Bridge. Which is the exception?</b></summary>

Studied engineering abroad. The other three are stated. Even if it happened to be true of a real engineer, the answer has to come from the passage.
</details>

**ACT Tip:** Direct-evidence questions are where you buy time for the hard ones. Answer them fast, but always read the full sentence around your keyword, since the trap choices are built from the words right next to the answer.
      `
    },
    {
      id: 'act-rs6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋

Natural science: this passage describes a study of fish in a northern lake.

¶1 Lake Mira, a shallow lake in the northern hills, freezes over for about four months each winter. For decades, local anglers reported that its yellow perch grew larger than the perch in nearby lakes.

¶2 Biologist Lena Cho began measuring the lake's perch each fall, two years after a state hatchery stopped stocking the lake with pike, a fish that preys on perch. Over the next six years, the average adult perch she measured was about a fifth longer than perch from two neighboring lakes.

¶3 Cho first suspected that the lake's food supply explained the difference, but stomach samples showed that the perch ate the same insects and small fish as perch elsewhere. She then noted that, without stocking, the lake now holds almost no pike. Without pike nearby, Cho argues, perch can feed in open water instead of hiding in weeds, and they grow faster.

¶4 Cho began her measurements in 2012. She now plans to test her idea by measuring perch in lakes where pike have recently been introduced.
      `,
      exercise: {
        questions: [
          {
            question: `According to the passage, what did the stomach samples show?`,
            options: [
              `The perch ate the same foods as perch in other lakes`,
              `The perch ate far more insects than perch elsewhere`,
              `The perch fed mainly on young pike in open water`,
              `The perch stopped eating while the lake was frozen`,
            ],
            correctAnswer: 0,
            explanation: `Paragraph 3 says the samples showed the perch "ate the same insects and small fish as perch elsewhere," which is why Cho dropped her food-supply idea. "Far more insects" reverses that finding, pike are the perch's predators rather than their food, and the passage says nothing about feeding under the ice.`,
          },
          {
            question: `According to the passage, in what year did the state hatchery stop stocking Lake Mira with pike?`,
            options: [`2012`, `2014`, `2010`, `2018`],
            correctAnswer: 2,
            explanation: `Cho began in 2012 (paragraph 4), two years after the stocking stopped (paragraph 2), so the stocking ended in 2010. 2012 is the year her measurements began, 2014 adds the two years instead of subtracting them, and 2018 is the end of her six years of measurements.`,
          },
          {
            question: `The passage states all of the following about Lake Mira EXCEPT that it:`,
            options: [
              `freezes over for about four months each winter`,
              `now holds almost no pike`,
              `is fed by cold underground springs`,
              `is a shallow lake in the northern hills`,
            ],
            correctAnswer: 2,
            explanation: `The freezing, the near absence of pike, and the lake's shallowness and location are each stated in the passage. Underground springs are never mentioned, so that is the exception, regardless of whether such a lake might plausibly have them.`,
          },
          {
            question: `According to Cho, perch in Lake Mira grow faster mainly because:`,
            options: [
              `they eat a richer supply of insects than other perch`,
              `the lake stays frozen for about four months a year`,
              `the hatchery now stocks the lake with extra perch`,
              `having few pike lets them feed in open water`,
            ],
            correctAnswer: 3,
            explanation: `Cho's explanation in paragraph 3 is that, without pike, perch feed in open water instead of hiding, so they grow faster. The richer-food idea is the hypothesis she rejected, the freezing is background with no stated link to growth, and the hatchery stocked pike, not perch, and has stopped.`,
          },
          {
            question: `Compared with perch from the two neighboring lakes, the adult perch Cho measured in Lake Mira were, on average:`,
            options: [
              `about a fifth longer`,
              `about five times longer`,
              `about a fifth shorter`,
              `about the same length`,
            ],
            correctAnswer: 0,
            explanation: `Paragraph 2 states that the average adult was "about a fifth longer" than perch from the neighboring lakes. "A fifth shorter" reverses the comparison, "five times longer" misreads a fifth as a multiplier, and "the same length" contradicts the reported difference.`,
          },
        ],
      },
    },
    {
      id: 'act-rs6-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **36 questions, 40 minutes, about 67 seconds per question** including reading; 4 choices; no penalty for wrong answers.
- **Budget about 10 minutes per passage set** (if your form has four): about 3–4 minutes to read and map, about 6–7 to answer. Check the clock at 10, 20, and 30 minutes.
- **Triage:** answer fast and medium questions on pass 1; give slow ones (EXCEPT/NOT, unlocated, comparisons) a provisional answer and a flag.
- **Move on** when you reread a paragraph a third time, sit between two choices for about 30 seconds, or cannot say where the answer would be.
- **Direct evidence:** jump to the keyword, read the whole sentence, do the arithmetic the passage sets up, and separate cause from consequence.
- **EXCEPT questions:** mark each choice stated or not stated; the answer is the one not in the passage, whatever you know from outside.
- **Comparisons:** compute both sides before reading the choices.
- **Last two minutes:** answer every remaining question. A blank always scores zero.
      `
    }
  ]
};
