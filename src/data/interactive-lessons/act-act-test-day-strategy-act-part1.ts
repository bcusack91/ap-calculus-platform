export const actTestDayPart1Data = {
  topicSlug: 'act-test-day-strategy-act',
  sections: [
    {
      id: 'act-tday-p1-intro',
      type: 'text' as const,
      content: `
# 🗓️ ACT Test Format & Registration

**Part 1 of 7 — The Enhanced ACT at a Glance and How to Sign Up**

Strategy starts with knowing exactly what you are walking into. During 2025 the ACT switched to a shorter **Enhanced ACT**. If you are using an older prep book or a sibling's advice, some of what you have heard (75 English questions, 60 Math questions, five Math answer choices, Science in the composite) is out of date.

## The Enhanced ACT, Section by Section

| Order | Section | Questions | Time | Average per question | Counts in composite? |
|------|---------|-----------|------|----------------------|----------------------|
| 1 | English | 50 | 35 min | 42 seconds | Yes |
| 2 | Math | 45 | 50 min | about 67 seconds | Yes |
| 3 | Reading | 36 | 40 min | about 67 seconds | Yes |
| 4 | Science (optional) | 40 | 40 min | 60 seconds | No (reported separately) |
| 5 | Writing (optional) | 1 essay | 40 min | n/a | No (scored separately) |

**Core facts to lock in:**
- **Order is fixed:** English, then Math, then Reading, then the optional Science, then the optional Writing essay. Each section is timed on its own; you cannot go back to an earlier section or jump ahead to a later one.
- **Every multiple-choice question has 4 answer choices**, including Math (the old test had 5 in Math).
- **No penalty for wrong answers.** Your score is based on how many questions you answer correctly, so a blank can never beat a guess.
- **The core test (English, Math, Reading) is 125 minutes of testing time.** Adding Science makes it 165 minutes; adding Writing adds another 40. Check-in, instructions, and breaks add time on top of that.
- **Some questions in each section are unscored field-test items.** They look exactly like the scored questions, so you cannot identify them. Treat every question as if it counts.
- The proctor runs the clock and announces when **5 minutes remain** in each section, and there is a scheduled break during the test. Your proctor explains the break timing on test day.

## How Your Scores Are Built

Each section is scored on a **1–36 scale**. The **composite** is the average of **English, Math, and Reading only**, rounded to the nearest whole number (one-half or more rounds up).

$$\\text{Composite} = \\frac{\\text{English} + \\text{Math} + \\text{Reading}}{3}$$

- If you take **Science**, you get a Science score (1–36) and a **STEM score** that combines Math and Science. Neither one changes your composite.
- If you take **Writing**, the essay gets its own score (2–12) and you also receive an ELA score that combines English, Reading, and Writing. The essay does not change your composite either.

## Should You Add Science or Writing?

Both are choices you make when you register. Ask three questions:
1. **Do any of my colleges or scholarship programs require or recommend it?** Look up each school's current testing policy. Policies differ and change.
2. **Am I aiming at a STEM major or program?** A Science score and the STEM score give admissions readers extra information about you.
3. **Can I afford the extra stamina cost?** Science comes after Reading, so it is the 4th section of the morning. If you add it, your practice tests should include it so the extra 40 minutes does not surprise you.

A Science score cannot be added to a test date after the fact; if you skip it and later need it, you will have to test again. When in doubt and a target school mentions it, include it.

## Registering: The Step-by-Step

| Step | What to do | Why it matters |
|------|-----------|----------------|
| 1 | Create a **MyACT account** at act.org | All registration, tickets, and scores live here |
| 2 | Pick a **test date and test center** (paper or online, where offered) | Popular centers fill up; register early |
| 3 | Choose **Science and/or Writing** | Decides which sections you sit for |
| 4 | **Upload a photo** that meets ACT's photo rules by the photo deadline | Missing the photo deadline can cancel your registration |
| 5 | Choose **score recipients** (colleges) if you want | Some reports are included when chosen at registration; details on act.org |
| 6 | Request **accommodations** early if you qualify | Approval must happen before test day; your school counselor usually helps |
| 7 | **Print your admission ticket** once it is available | You need it on test day, along with acceptable photo ID |

**Fees, deadlines, and test dates change every year, so always check act.org** rather than relying on a number someone gave you. Register several weeks ahead of the regular deadline so you get your preferred center and avoid late fees.

Many students also take the ACT **at school on a school day** through a state or district program. In that case your school handles registration and gives you instructions, but the test format and strategies in this lesson are the same.

## Planning Your Test Dates

Scores are not instant: multiple-choice scores usually post online within a few weeks, and Writing takes longer. Work backward from your earliest college deadline:
- Plan a **first attempt** early enough that you have time to review the score report and prepare again.
- Keep at least **one more date in reserve** before your deadlines for a planned retake.
- Avoid dates that collide with finals, AP exams, or a big tournament weekend; tired students underperform.
      `
    },
    {
      id: 'act-tday-p1-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Computing a composite (and what Science does to it)</b></summary>

**Question:** Maya scores English 29, Math 33, Reading 31, and Science 24. What composite will she see, and how does her Science score affect it?

**Solution:**
1. Use only the three core sections: $29 + 33 + 31 = 93$.
2. Divide by 3: $93 \\div 3 = 31$. Her composite is **31**.
3. Science is **not** in the composite. If you wrongly averaged all four scores you would get $117 \\div 4 = 29.25$, about 29, which is a common mistake.
4. Her Science score of 24 still appears on her report, and her STEM score combines Math and Science, so Science matters for programs that look at STEM, but it cannot lower her composite.

**Takeaway:** On the Enhanced ACT, composite = average of English, Math, and Reading, rounded to the nearest whole number.
</details>

<details>
<summary><b>Example 2: Building a registration timeline</b></summary>

**Question:** Jordan wants an ACT score in hand for applications due in early November of senior year. He wants two real attempts. How should he plan?

**Solution:**
1. **Work backward.** Scores take a few weeks to post, so his last realistic attempt must be at least a month or so before his deadline. He checks act.org for that fall's test dates.
2. **Place the first attempt** in the spring of junior year, so he has the whole summer to study his weak sections.
3. **Place the second attempt** in summer or early fall, leaving one date after it as a backup.
4. **Register early** for each date (well before the regular deadline), choose Science because one of his engineering schools recommends it, and upload his photo the same day.
5. **Put the ticket-printing date** and the photo deadline on his calendar.

**Takeaway:** A good plan always leaves room for one more test date than you think you need.
</details>
      `
    },
    {
      id: 'act-tday-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Format Decisions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "A student scores English 30, Math 27, Reading 31, and Science 22. What composite does she receive?",
            options: ["27", "28", "29", "30"],
            correctAnswer: 2,
            explanation: "The composite averages only English, Math, and Reading: (30 + 27 + 31) / 3 = 88 / 3 = 29.33, which rounds down to 29. Averaging all four scores, (30 + 27 + 31 + 22) / 4 = 27.5, gives 28 and is the classic mistake of counting Science. Thirty would require rounding 29.33 up, and 27 is just her Math score."
          },
          {
            question: "A student practiced from an old book that budgets 1 minute per Math question with five choices. How should he adjust for the Enhanced ACT Math section?",
            options: [
              "Keep 1 minute per question; the section has not changed",
              "Plan for about 67 seconds per question and four choices",
              "Plan for about 42 seconds per question and four choices",
              "Plan for about 80 seconds per question and five choices"
            ],
            correctAnswer: 1,
            explanation: "Enhanced Math is 45 questions in 50 minutes: 3,000 seconds / 45 is about 67 seconds, with four choices per question. Forty-two seconds is the English pace, and the old 60-question format with five choices no longer applies."
          },
          {
            question: "Priya plans to apply to engineering programs, and one target school recommends a Science score. She is unsure whether to add Science. What is the best decision?",
            options: [
              "Skip it, because Science does not count toward the composite",
              "Skip it now and add a Science score to this test date later",
              "Add it, since a school recommends it and it cannot be added later",
              "Add Writing instead, since it replaces Science in the STEM score"
            ],
            correctAnswer: 2,
            explanation: "A recommending school will look for the Science and STEM scores, and Science cannot be attached to a test date afterward; skipping it means testing again. Not counting in the composite does not mean colleges ignore it, and Writing feeds the ELA score, not STEM."
          },
          {
            question: "A student finishes registration but skips the photo upload, planning to just show his ID at check-in. What is the risk?",
            options: [
              "None, because photo ID at the door replaces the photo upload",
              "Missing the photo deadline can cancel the registration",
              "He will be seated, but his Science score will be withheld",
              "His scores will be delayed by one week while ACT verifies him"
            ],
            correctAnswer: 1,
            explanation: "ACT requires a registration photo by its photo deadline, and it prints on the admission ticket so staff can match you to your ID. A missing photo can get the registration cancelled. ID at the door is required in addition to the photo, not instead of it."
          }
        ]
      }
    },
    {
      id: 'act-tday-p1-input',
      type: 'input-boxes' as const,
      content: `
**Format Math** 🧮

1) English gives you 35 minutes for 50 questions. Enter the average number of seconds per question.

2) A student scores English 24, Math 28, Reading 29. Enter her composite.

3) Enter the total testing minutes for English, Math, Reading, and Science combined (no Writing).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['42', '27', '165'],
        hint1: '35 minutes is 2,100 seconds. Divide by 50.',
        hint2: 'Add the three core scores and divide by 3.',
        hint3: 'Add 35 + 50 + 40 + 40.',
        explanation: '1) 2,100 / 50 = 42 seconds. 2) (24 + 28 + 29) / 3 = 81 / 3 = 27. 3) 35 + 50 + 40 + 40 = 165 minutes, which is 2 hours 45 minutes of testing before breaks and check-in.'
      }
    },
    {
      id: 'act-tday-p1-actpractice',
      type: 'text' as const,
      content: `
## ACT Readiness Check

Cover the right column and decide before you look.

| Situation | Best move |
|-----------|-----------|
| Your old book says English has 75 questions | Re-plan for 50 questions in 35 minutes (42 seconds each) |
| A friend says a bad Science score will drag your composite down | Not true: composite is English + Math + Reading only |
| You are not sure whether a college wants Science | Check that college's current testing policy before you register |
| A question looks strange and might be an unscored field-test item | Answer it normally; you can never tell which items are unscored |
| You want the cheapest, least stressful registration | Register early, upload the photo right away, and check act.org for fees and deadlines |

**ACT Tip:** Write your test date, the photo deadline, and the date you will print your ticket on one calendar entry the day you register.
      `
    },
    {
      id: 'act-tday-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Planning Scenarios** 📋
      `,
      exercise: {
        questions: [
          {
            question: "Leo's scores are English 27, Math 26, Reading 26, giving a composite of 26. What is the smallest score change that would raise his composite to 27?",
            options: [
              "Raise his Science score from 24 up to 30",
              "Raise two core section scores by 1 point each",
              "Raise any one core section score by 1 point",
              "Raise his Writing score from 7 up to 9"
            ],
            correctAnswer: 2,
            explanation: "His total is 79 (79 / 3 = 26.33). One more point makes 80, and 80 / 3 = 26.67 rounds up to 27. Raising two sections works too but is more than needed. Science and Writing are not in the composite, so changing them does nothing to it."
          },
          {
            question: "Midway through Reading, a question seems unusually confusing, and Sam suspects it is an unscored field-test item. What should he do?",
            options: [
              "Treat it like any other: work it within his time cap and answer",
              "Leave it blank, since unscored items cannot affect his score",
              "Spend extra time on it, since field-test items are worth more",
              "Report the question to the proctor before answering it"
            ],
            correctAnswer: 0,
            explanation: "Field-test items are indistinguishable from scored ones, so his suspicion could easily be wrong. Leaving it blank risks a lost point for nothing, and overspending time on it steals time from other questions. Unscored items are not worth more, and proctors do not rule on questions."
          },
          {
            question: "Ana is registered for English, Math, Reading, and Science, but not Writing. How much timed testing should she prepare her stamina for?",
            options: [
              "2 hours 5 minutes",
              "3 hours 25 minutes",
              "2 hours 25 minutes",
              "2 hours 45 minutes"
            ],
            correctAnswer: 3,
            explanation: "35 + 50 + 40 + 40 = 165 minutes, or 2 hours 45 minutes, plus check-in and breaks. Two hours 5 minutes is the core test without Science, and 3 hours 25 minutes would include the 40-minute Writing essay too."
          },
          {
            question: "A student with a documented learning disability wants extended time. What should she do first?",
            options: [
              "Ask the proctor on test day to let her keep working",
              "Request accommodations through ACT well before test day",
              "Register for an online test, which gives everyone extra time",
              "Skip Science so the saved minutes go to the other sections"
            ],
            correctAnswer: 1,
            explanation: "Accommodations must be requested and approved by ACT in advance, usually with help from a school counselor. Proctors cannot grant extra time on the spot, online testing does not add time for everyone, and minutes from a section you skip do not move to other sections."
          }
        ]
      }
    },
    {
      id: 'act-tday-p1-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Enhanced ACT order:** English (50 q, 35 min), Math (45 q, 50 min), Reading (36 q, 40 min), optional Science (40 q, 40 min), optional Writing (40 min).
- **Four answer choices** on every question and **no wrong-answer penalty**: never leave a blank.
- **Composite = average of English, Math, and Reading**, rounded to the nearest whole number. Science and Writing are reported separately.
- **Unscored field-test items** are mixed in and look identical; treat every question as scored.
- **Register through MyACT** early, upload your photo by the deadline, decide on Science/Writing based on your colleges, and print your ticket.
- **Fees, deadlines, and dates change**: check act.org, and plan at least one backup test date.
      `
    }
  ]
};
