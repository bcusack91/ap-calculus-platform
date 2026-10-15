export const psychRetrievalPart3Data = {
  topicSlug: 'retrieval-forgetting',
  sections: [
    {
      id: 'retrieval-forgetting-p3-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Retrieval and Forgetting

**Part 3 of 7 — Retrieval Practice and Metacognition**

Retrieval is not just a way of *checking* memory: every time you pull information out, you make it easier to pull out again.

### 📚 The Testing Effect (CED 2.6.A.3)

The CED states that successful retrieval is more likely when people use **retrieval practice**, including the **testing effect** and **metacognition**.

| Term | Definition | Example |
|------|-----------|---------|
| **Retrieval practice** | Deliberately pulling information out of memory as a way of learning it | Covering the answers on a flashcard and saying them before you flip |
| **Testing effect** | Information that has been retrieved (tested) is remembered better later than information that was only restudied for the same amount of time | A practice quiz after reading beats a second reading of the same chapter |
| **Metacognition** | Thinking about your own thinking: monitoring what you know and using that judgment to control how you study | Noticing "I can recognize this term but cannot define it" and quizzing yourself on it |

The surprising part of the testing effect is the comparison: the test is not compared with doing nothing, it is compared with spending **the same time studying again**. Retrieving wins, even when the test gives no feedback.

### A Classic Study

In a widely cited experiment, college students read short prose passages about science topics.

- **Restudy condition:** read the passage, then read it again.
- **Testing condition:** read the passage, then wrote down as much as they could recall (no feedback).
- **Final test:** free recall of the passage after **5 minutes**, **2 days**, or **1 week**.

**Results (pattern):**
- After **5 minutes**, the restudy group recalled slightly **more**.
- After **2 days** and **1 week**, the testing group recalled clearly **more**, and the restudy group's recall had dropped much further.

So restudying looks better in the short run, while retrieval practice produces **more durable** memories. A student who only checks themselves right after studying will draw the wrong conclusion about which method works.

### Why Retrieving Strengthens Memory

| Reason | Explanation |
|--------|-------------|
| **Strengthens retrieval routes** | Each successful retrieval reuses and reinforces the path to the memory, making the next retrieval easier (a link to long-term potentiation, the strengthening of frequently activated synapses) |
| **Builds more cues** | Effortful searching activates related knowledge, creating additional links to the target |
| **Practices the real task** | Exams require retrieval; rereading practices recognition (Part 1), not recall |
| **Reveals gaps** | A failed retrieval shows exactly what still needs work, which feeds metacognition |

> **AP Connection:** In an EBQ, a study comparing practice tests with rereading is evidence for the **testing effect**. Explain the mechanism: retrieving information strengthens access to it, so it is more likely to be retrieved again later.
      `
    },
    {
      id: 'retrieval-forgetting-p3-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two students spend 40 minutes on the same chapter. Lena reads it twice. Omar reads it once, then writes everything he can remember without looking. A week later Omar scores higher on the unit test. Which concept BEST explains his advantage?',
            options: [
              'The testing effect',
              'Context-dependent memory',
              'Mood-congruent memory',
              'Proactive interference'
            ],
            correctAnswer: 0,
            explanation: 'Omar spent part of his time retrieving the material, and retrieving information makes it more likely to be retrieved later. That is the testing effect, the advantage of retrieval practice over restudying for the same amount of time.'
          },
          {
            question: 'While studying, Ava covers the definitions on her vocabulary list, notices she can define only half of the terms, and spends the rest of her time on those she missed. Ava is MOST clearly using:',
            options: [
              'Recognition, by checking terms against a list',
              'Metacognition, by judging and steering her learning',
              'Maintenance rehearsal, by repeating every term',
              'Relearning, by studying old terms in less time'
            ],
            correctAnswer: 1,
            explanation: 'Ava monitors what she does and does not know, then uses that judgment to control how she spends her study time. Monitoring plus control is metacognition; covering the definitions is retrieval, not recognition.'
          }
        ]
      }
    },
    {
      id: 'retrieval-forgetting-p3-s3-worked',
      type: 'text' as const,
      content: `
### 📚 Worked Example: Reading a Testing-Effect Table

*Practice study (not a real citation):* 120 students read the same article and were randomly assigned to **restudy** it or to take a **practice recall test** on it for the same length of time. Half of each group took a final test after 5 minutes and half after 1 week. Scores are the mean percentage of the article's main ideas recalled.

| Condition | Final test after 5 minutes | Final test after 1 week |
|-----------|---------------------------|-------------------------|
| Restudy | 81% | 42% |
| Practice test | 75% | 61% |

**Step 1: Describe each effect.** At 5 minutes, restudy is 6 points higher. At 1 week, the practice-test group is 19 points higher.

**Step 2: Describe the forgetting in each group.** Restudy fell from 81% to 42%, a 39-point drop. Practice test fell from 75% to 61%, a 14-point drop. Retrieval practice did not prevent forgetting, but it slowed it a great deal.

**Step 3: State the interaction.** Which method looks better *depends on when memory is tested*. The lines cross: restudy is ahead early, testing is ahead later. A study that only measured at 5 minutes would reach the opposite (and wrong) conclusion about long-term learning.

**Step 4: Check the design.** Random assignment makes the groups equivalent in ability at the start. Equal study time rules out "the test group simply studied longer." The dependent variable is operationally defined as the percentage of main ideas recalled on the final test.

**Step 5: Generalizability.** The participants were students reading one article. To claim the effect holds for, say, middle school students learning math procedures, you would need samples and materials like those. (Many later studies have found testing effects across ages and subjects, but a single study supports only what it tested.)

> **AP Connection:** "Describe what the difference in means indicates" on an AAQ means interpreting a comparison like Step 1: "After one week, students who took a practice test recalled 19 percentage points more of the article, on average, than students who restudied."
      `
    },
    {
      id: 'retrieval-forgetting-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️

Use the practice study table above for the third item.
      `,
      exercise: {
        questions: [
          {
            question: 'The finding that retrieving information improves later memory more than restudying it for the same time is called the _____ effect.',
            answer: 'testing',
            acceptableAnswers: ['testing effect', 'retrieval practice', 'retrieval-practice'],
            explanation: 'The testing effect is the CED name for the benefit of retrieval practice over restudying.'
          },
          {
            question: 'Monitoring how well you know something and using that judgment to decide what to study is called _____.',
            answer: 'metacognition',
            acceptableAnswers: ['meta-cognition', 'metacognitive monitoring'],
            explanation: 'Metacognition is thinking about your own thinking; it includes both monitoring and control of learning.'
          },
          {
            question: 'In the practice study, how many percentage points did the restudy group\'s recall drop from 5 minutes to 1 week?',
            answer: '39',
            acceptableAnswers: ['39%', '39 points', '39 percentage points'],
            explanation: '81% minus 42% is a 39-point drop, compared with a 14-point drop (75% to 61%) for the practice-test group.'
          }
        ],
        hint1: 'The effect is named after what the students did instead of rereading.',
        hint2: 'The prefix "meta-" means "about"; this is thinking about thinking.',
        hint3: 'Subtract the 1-week restudy score from the 5-minute restudy score.'
      }
    },
    {
      id: 'retrieval-forgetting-p3-s5-meta',
      type: 'text' as const,
      content: `
### 📚 Metacognition: Knowing What You Know

Metacognition has two parts, and good studying needs both.

| Part | What it does | Example |
|------|-------------|---------|
| **Monitoring** | Judging your own learning | "I would get about 7 of these 10 right on a quiz." (a **judgment of learning**) |
| **Control** | Using that judgment to choose what to do next | Skipping the terms you know cold and drilling the 3 you might miss |

**Monitoring is often inaccurate.** The most common error is **overconfidence created by fluency**. After rereading, the material feels familiar and easy to process, and that ease is mistaken for knowledge. But familiarity is a recognition signal; it does not show that you can recall or explain the material. In the classic testing-effect study above, students who only restudied predicted they would remember more than the students who were tested, even though they later remembered less.

**How to monitor accurately:** test yourself, and do it after a delay. A judgment made right after reading a definition mostly reflects the fact that it is still in short-term memory. A judgment made a day later, after trying to retrieve the definition, is much closer to how you will actually do. Retrieval practice therefore helps twice: it strengthens memory *and* it gives honest information for metacognition.

### Calibration: Comparing Prediction with Performance

| Student | Predicted score | Actual score | Calibration |
|---------|----------------|--------------|-------------|
| Rafael | 90 | 72 | Overconfident by 18 points |
| Mei | 70 | 74 | Close to accurate (slightly underconfident) |
| Jordan | 85 | 86 | Accurate |

### Worked Cases: Three Study Plans

**Case 1. Rafael** rereads his notes three times the night before the exam because "it all looks familiar now."
*Evaluation:* Rereading builds familiarity (recognition) and a fluency illusion. He gets no retrieval practice and no honest monitoring.

**Case 2. Mei** writes everything she remembers about each topic on a blank page, checks it against her notes, and marks what she missed for tomorrow.
*Evaluation:* Strong. The blank-page dump is retrieval practice; checking against notes provides feedback; marking misses is metacognitive control.

**Case 3. Jordan** makes flashcards and flips each card over as soon as he reads the front.
*Evaluation:* Good tool, weak use. Flipping before trying to answer turns retrieval practice into rereading. He should commit to an answer first.

> **AP Connection:** Retrieval practice and spaced (distributed) practice, from the encoding lessons, are separate ideas that combine well: quizzing yourself on several days beats quizzing yourself many times in one night.
      `
    },
    {
      id: 'retrieval-forgetting-p3-s6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Strategy** 🔍

Choose the label that best fits each study behavior.
      `,
      exercise: {
        dropdowns: [
          { label: 'Answering last year\'s practice free-response questions without notes, then scoring them with the rubric', options: ['Restudying', 'Retrieval practice', 'Metacognitive monitoring', 'Context reinstatement'] },
          { label: 'Rating each flashcard "know it / not sure / don\'t know" after trying to answer it', options: ['Metacognitive monitoring', 'Restudying', 'Context reinstatement', 'Retrieval practice'] },
          { label: 'Highlighting the textbook chapter a second time in a different color', options: ['Retrieval practice', 'Context reinstatement', 'Restudying', 'Metacognitive monitoring'] },
          { label: 'Picturing the classroom where you learned the material before starting the exam', options: ['Restudying', 'Metacognitive monitoring', 'Retrieval practice', 'Context reinstatement'] }
        ],
        correctAnswers: ['Retrieval practice', 'Metacognitive monitoring', 'Restudying', 'Context reinstatement'],
        hint1: 'Producing answers without notes is the defining feature of one strategy.',
        hint2: 'Rating how well you know each card is a judgment about your own learning.',
        hint3: 'Re-highlighting re-exposes the material without retrieving it; picturing the room recreates encoding cues (Part 2).',
        explanation: 'Practice FRQs without notes are retrieval practice. Rating your knowledge of each card is metacognitive monitoring. Re-highlighting is restudying, which builds familiarity but not retrieval. Picturing the original classroom reinstates context cues, an application of context-dependent memory.'
      }
    },
    {
      id: 'retrieval-forgetting-p3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Right after rereading a chapter, a student predicts she will score 95% on tomorrow\'s quiz and then scores 70%. Her overestimate is BEST explained by:',
            options: [
              'A fluency illusion that made familiar material feel well learned',
              'Retroactive interference from the quiz questions on her studying',
              'State-dependent memory that weakened her recall during the quiz',
              'Encoding failure that kept any of the chapter from being stored'
            ],
            correctAnswer: 0,
            explanation: 'Rereading made the chapter feel easy to process, and she mistook that familiarity for knowledge, a metacognitive monitoring error. Nothing in the scenario suggests a change of state, and scoring 70% shows that much of the chapter was stored.'
          },
          {
            question: 'In a testing-effect experiment, the practice-test group studied for 20 minutes and the restudy group studied for 10 minutes. Why is this a problem?',
            options: [
              'The final test no longer measures recall of the material',
              'Study time is a confounding variable for the comparison',
              'Participants were no longer randomly assigned to groups',
              'The sample can no longer be generalized to all students'
            ],
            correctAnswer: 1,
            explanation: 'If the testing group also had twice as much time, any advantage could come from the extra time rather than from retrieval. Unequal study time is a confounding variable; random assignment and the final test can be unchanged.'
          },
          {
            question: 'A teacher wants students to gain the benefits of retrieval practice in a review session. Which plan is MOST consistent with the research on the testing effect?',
            options: [
              'Students reread a summary sheet twice and then highlight the key terms',
              'Students watch the teacher solve each review problem from start to end',
              'Students answer low-stakes questions from memory and then get feedback',
              'Students copy their class notes into a neater and better organized form'
            ],
            correctAnswer: 2,
            explanation: 'Answering questions from memory is retrieval practice, and feedback afterward corrects errors. Rereading, watching worked solutions and recopying notes all re-expose the material without requiring students to retrieve it.'
          }
        ]
      }
    }
  ]
}
