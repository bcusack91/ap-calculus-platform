export const actTestDayPart7Data = {
  topicSlug: 'act-test-day-strategy-act',
  sections: [
    {
      id: 'act-tday-p7-intro',
      type: 'text' as const,
      content: `
# 📊 Scores, Retakes & Review

**Part 7 of 7 — Reading Your Score Report, Superscoring, Retesting, and a Full Review**

Test day is not the end of the process. What you do with your score report decides whether a second attempt is worth it and exactly what to practice before it. This part covers how scores are reported and combined, how to plan a retake, and then reviews the whole lesson.

## What Your Score Report Shows

| Score | Scale | Built from |
|-------|-------|------------|
| English, Math, Reading | 1–36 each | Your correct answers in each section, converted to a scale score |
| **Composite** | 1–36 | Average of English, Math, and Reading, rounded to the nearest whole number |
| Science (if taken) | 1–36 | Science section only; not in the composite |
| STEM (if Science taken) | 1–36 | Combines Math and Science |
| Writing (if taken) | 2–12 | The essay, scored separately |
| ELA (if Writing taken) | 1–36 | Combines English, Reading, and Writing |

The report also breaks each section into **skill categories** so you can see which kinds of questions were stronger or weaker. That breakdown is the most useful part of the report for planning a retake.

Multiple-choice scores usually post to your MyACT account within a few weeks of the test; Writing scores take longer. Check act.org for current timelines.

## Superscoring

If you take the ACT more than once, ACT can calculate a **superscore**: the average of your **best English, best Math, and best Reading** scores, even if they came from different test dates.

$$\\text{Superscore} = \\frac{\\text{best E} + \\text{best M} + \\text{best R}}{3}$$

Colleges decide how to use your scores, and policies differ:
- Some **superscore** (they use your best section scores across dates).
- Some use your **highest single-test composite**.
- Some ask you to **send all scores**.

Look up each college's current policy. It affects both whether to retake and which scores to send.

## Choosing Which Scores to Send

In general you choose which test dates' scores go to which colleges, and a report for a test date includes all the sections you took that day. If a college requires all scores, follow its rule. Sending scores you chose at registration and sending more later may have different costs; check act.org.

## Section Retesting

ACT has offered or announced ways to retake **individual sections** instead of the whole test, and the rules for eligibility, availability, and how colleges treat those scores have changed over time. If a single section is holding you back, **check act.org for what is currently available** and check your colleges' policies before you plan around it.

## Should You Retake? A Decision Framework

Ask four questions:
1. **Is there a meaningful gap?** Compare your composite with the middle range of admitted students or the scholarship cutoff for your target schools.
2. **Do you know why you lost points?** Sort your misses into three types:

| Error type | Sign | Fix |
|-----------|------|-----|
| **Content** | You did not know the rule or concept | Targeted study of that topic, then timed practice |
| **Process** | You knew it but misread, skipped a step, or made an arithmetic slip | Habits: underline the ask, read the whole sentence, check sign and size |
| **Timing** | You ran out of time or guessed on many questions at the end | Checkpoints, the two-pass method, skip-and-flag practice |

3. **Do you have time to prepare?** A retake helps most after several weeks of practice aimed at your specific error types, not after just re-taking practice tests.
4. **Is there a test date that fits before your deadlines?** Check act.org dates and leave time for scores to post.

If the answer to all four is yes, a planned retake is a normal and sensible step. Many students plan for two attempts from the beginning.

## Using Practice Data Before the Real Test, Too

The same three-way error sort works on practice tests. After each timed practice test, tag every miss as content, process, or timing. Over several tests the biggest category tells you where your next hours should go.

## Full-Lesson Review

| Part | Core idea |
|------|-----------|
| 1. Format & Registration | E 50 q / 35 min; M 45 q / 50 min; R 36 q / 40 min; optional Science 40 q / 40 min; 4 choices; composite = E + M + R; register early, upload a photo, check act.org |
| 2. What to Bring | Ticket, current photo ID, No. 2 pencils, eraser, approved calculator (Math only), simple watch; phones off and stored |
| 3. Timing | 42 sec in English, about 67 in Math and Reading, 60 in Science; checkpoints; compute a new pace when behind |
| 4. Guessing | No penalty, so no blanks; eliminate to raise odds; two-pass method; fill all blanks at about 2 minutes left |
| 5. Mental Preparation | Shift sleep all week; light review the night before; slow breathing; if-then plans; reset after each section |
| 6. Workshop | Decision loop; section tactics; order by points per minute when behind |
| 7. Scores & Retakes | Composite, superscore, college policies, error-type analysis, plan a retake with a reason |
      `
    },
    {
      id: 'act-tday-p7-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Computing a superscore</b></summary>

**Question:** Aiden's two ACT attempts:
- First: English 26, Math 29, Reading 24
- Second: English 30, Math 27, Reading 25

What are his single-test composites and his superscore?

**Solution:**
1. **First test:** $(26 + 29 + 24) \\div 3 = 79 \\div 3 \\approx 26.33$, which rounds to **26**.
2. **Second test:** $(30 + 27 + 25) \\div 3 = 82 \\div 3 \\approx 27.33$, which rounds to **27**.
3. **Superscore:** best English 30 (second), best Math 29 (first), best Reading 25 (second): $(30 + 29 + 25) \\div 3 = 84 \\div 3 = 28$.

**Takeaway:** At a college that superscores, Aiden's score is a 28; at a college that uses the highest single sitting, it is a 27.
</details>

<details>
<summary><b>Example 2: Deciding on a retake</b></summary>

**Question:** Zoe's score is English 31, Math 24, Reading 29 (composite 28). Her target schools' middle ranges are around 30–32, and they superscore. Her report shows she guessed on the last 9 Math questions, and her practice tests show most Math misses are timing-related. She has 8 weeks before the next good test date. Should she retake, and how should she prepare?

**Solution:**
1. **Gap:** 28 versus a 30–32 range, so yes, there is a meaningful gap.
2. **Cause:** Math timing, not content. The fix is pacing (bank time on Q1–15, checkpoints at Q15 and Q30, skip-and-flag long setups), not re-learning all of algebra.
3. **Payoff with superscoring:** She keeps her English 31 and Reading 29 even if those dip on the retake, so the retake is mostly about Math. Raising Math from 24 to 28 would make her superscore $(31 + 28 + 29) \\div 3 = 88 \\div 3 \\approx 29.33$, which rounds to 29; raising it to 30 gives exactly 30.
4. **Plan:** Weekly timed Math sections with her checkpoint card, plus one full practice test every couple of weeks to keep English and Reading sharp.

**Takeaway:** Retake with a specific reason and a specific plan. The score report tells you both.
</details>
      `
    },
    {
      id: 'act-tday-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Score Decisions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Rosa's two attempts: English 26, Math 30, Reading 25, then English 29, Math 27, Reading 28. What is her superscore?",
            options: ["29", "27", "28", "30"],
            correctAnswer: 0,
            explanation: "Best English 29, best Math 30, best Reading 28: (29 + 30 + 28) / 3 = 87 / 3 = 29. Her single-test composites are 27 (81 / 3) and 28 (84 / 3), so 27 and 28 are single-sitting results, not the superscore. Thirty would need a higher Reading or English score."
          },
          {
            question: "Rosa applies to a college that uses only the highest single-test composite. Which result does that college effectively use?",
            options: [
              "Her superscore of 29 from combining both dates",
              "Her first composite of 27, since it came first",
              "Her second composite of 28 from one sitting",
              "An average of her two composites, about 27.5"
            ],
            correctAnswer: 2,
            explanation: "A highest-single-sitting policy uses the best composite earned on one test date: 28 from the second test. The superscore mixes dates, which this college does not do; a first attempt is not favored for being first; and averaging composites is not how that policy works."
          },
          {
            question: "Andre scored 25 but averaged 29 on practice tests. His report and memory agree: he guessed on the last 8 Reading questions. What is the best retake plan?",
            options: [
              "Retake next month without changing anything; it was a bad day",
              "Study a vocabulary list, since Reading is mainly about vocabulary",
              "Switch to only untimed practice so he can focus on accuracy",
              "Practice timed passages with 10-minute checkpoints, then retake"
            ],
            correctAnswer: 3,
            explanation: "His misses are timing errors, so the fix is pacing: timed passages with checkpoints and the two-pass method. Retaking with no change ignores a clear, fixable cause, vocabulary is not his problem, and untimed practice removes exactly the pressure he needs to learn to handle."
          },
          {
            question: "Nina missed four English comma questions even though she can state the comma rules perfectly. In each case she read only the underlined words. What type of error is this, and what is the fix?",
            options: [
              "A process error; read the whole sentence before choosing",
              "A content error; memorize the comma rules again from the start",
              "A timing error; slow down and spend 2 minutes per question",
              "A guessing error; use her letter of the day more consistently"
            ],
            correctAnswer: 0,
            explanation: "She knows the rules, so this is not content; the problem is a habit (ignoring words outside the underline), which makes it a process error. Re-memorizing rules she already knows does not fix the habit, two minutes per question would wreck her English pace, and she was not guessing."
          }
        ]
      }
    },
    {
      id: 'act-tday-p7-input',
      type: 'input-boxes' as const,
      content: `
**Composite and Superscore Practice** 🧮

Test A: English 22, Math 25, Reading 24. Test B: English 24, Math 22, Reading 27.

1) Enter the composite for Test A.

2) Enter the composite for Test B.

3) Enter the superscore.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['24', '24', '25'],
        hint1: '22 + 25 + 24 = 71. Divide by 3 and round.',
        hint2: '24 + 22 + 27 = 73. Divide by 3 and round.',
        hint3: 'Take the best English (24), best Math (25), and best Reading (27).',
        explanation: '1) 71 / 3 is about 23.67, which rounds to 24. 2) 73 / 3 is about 24.33, which rounds to 24. 3) (24 + 25 + 27) / 3 = 76 / 3, about 25.33, which rounds to 25. Superscoring gains a point here even though both single composites are 24.'
      }
    },
    {
      id: 'act-tday-p7-actpractice',
      type: 'text' as const,
      content: `
## Your Retake Planner

| Question | Your answer |
|----------|-------------|
| My composite and section scores | E ___ M ___ R ___ (Composite ___) |
| My target (from my colleges' ranges or scholarship cutoffs) | ___ |
| Do my colleges superscore, use single sitting, or want all scores? | ___ |
| My biggest error type (content, process, or timing) and in which section | ___ |
| My fix for that error type | ___ |
| Next test date that fits my deadlines (check act.org) | ___ |

**ACT Tip:** If your colleges superscore, focus your retake prep on your weakest section; your best scores from other dates still count.
      `
    },
    {
      id: 'act-tday-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Full-Lesson Review** 📋
      `,
      exercise: {
        questions: [
          {
            question: "With 2 minutes left in English, Omar has 5 questions blank and is in the middle of a hard question. What should he do?",
            options: [
              "Finish the hard question first, then deal with the blanks",
              "Leave the blanks; the wrong-answer penalty makes guesses risky",
              "Go back and double-check his earlier answers to protect them",
              "Bubble all 5 blanks with his letter of the day, then continue"
            ],
            correctAnswer: 3,
            explanation: "At about 2 minutes left, filling every blank comes first; it takes seconds and is worth about 1.25 expected points with no risk. Finishing the hard question first can leave all 5 blank when time is called, there is no wrong-answer penalty on the ACT, and re-checking also leaves the blanks exposed."
          },
          {
            question: "Hana's colleges do not require Science, and her practice Science scores are low. She worries that adding Science will pull down her composite. Is she right?",
            options: [
              "Yes, because Science is one of four sections averaged",
              "No; Science is reported separately from the composite",
              "Yes, but only if her Science is below her Math score",
              "No, because a low Science score is dropped automatically"
            ],
            correctAnswer: 1,
            explanation: "The Enhanced ACT composite averages only English, Math, and Reading, so Science cannot lower it. Her decision should rest on her colleges' policies, her major, and the extra 40 minutes of stamina. Science is not averaged in at all, and low scores are not dropped; they appear on her report."
          },
          {
            question: "Tyler scored English 33, Math 25, Reading 32. A friend says he can retake just the Math section. What should Tyler do first?",
            options: [
              "Check act.org for current section-retest options and his colleges' policies",
              "Register for a full test right away, since single sections never count",
              "Assume it is available and stop studying English and Reading entirely",
              "Wait for his colleges to tell him which section he should retake next"
            ],
            correctAnswer: 0,
            explanation: "Section-retest availability and rules have changed over time, and colleges differ on how they treat those scores, so he should verify both before planning. Rushing into a full test on the belief that single sections never count skips that check, dropping all other prep is premature, and colleges do not assign retakes."
          },
          {
            question: "Ten minutes remain in Reading. Lucia has finished three passages and marked guesses on 2 flagged questions earlier. The fourth passage (9 questions) is untouched. What is the best use of the time?",
            options: [
              "Rework the 2 flagged questions first, then start the last passage",
              "Answer the last passage's 9 questions without reading the passage",
              "Do the fourth passage at her normal pace, then flagged ones if time",
              "Bubble guesses for all 9 questions and spend the time on the flags"
            ],
            correctAnswer: 2,
            explanation: "Ten minutes is exactly the per-passage budget, so the fourth passage offers 9 questions she can genuinely work, while the 2 flagged questions already have guesses. Starting with the flags eats into that budget, answering without reading lowers accuracy, and guessing on 9 to rework 2 trades many likely points for a few."
          }
        ]
      }
    },
    {
      id: 'act-tday-p7-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Score report:** English, Math, Reading, and composite on a 1–36 scale; Science and STEM if you took Science; Writing (2–12) and ELA if you took Writing. Use the skill-category breakdown to plan.
- **Superscore** = average of your best English, Math, and Reading across dates. Colleges may superscore, use a single sitting, or want all scores, so check each one.
- **Section retesting:** check act.org for what is currently offered and your colleges' policies before relying on it.
- **Retake with a reason:** a real gap, a diagnosed error type (content, process, or timing), time to prepare, and a date that fits your deadlines.
- **On test day, it all comes together:** know the format, pack the right items, pace with checkpoints, never leave a blank, manage stress, and reset after every section.
      `
    }
  ]
};
