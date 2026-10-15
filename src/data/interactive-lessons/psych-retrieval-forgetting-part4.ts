export const psychRetrievalPart4Data = {
  topicSlug: 'retrieval-forgetting',
  sections: [
    {
      id: 'retrieval-forgetting-p4-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Retrieval and Forgetting

**Part 4 of 7 — The Forgetting Curve**

In the 1880s, Hermann Ebbinghaus spent years memorizing thousands of meaningless syllables, with himself as the only participant, to answer one question: how fast do we forget?

### 📚 Ebbinghaus's Method

Ebbinghaus wanted to measure forgetting without the noise of prior knowledge. If he memorized poems, some would connect to things he already knew and some would not. So he built lists of **nonsense syllables**, consonant-vowel-consonant strings such as DAX, BOK and YAT, that had no meaning to connect to.

His procedure:
1. Read through a list repeatedly until he could recite it perfectly, counting how many repetitions (or how much time) this took.
2. Wait a set delay: from about 20 minutes up to a month.
3. **Relearn** the same list to the same standard and count the repetitions again.

### The Savings Method

Ebbinghaus measured memory by **savings**: how much less work relearning took than the original learning.

**Savings (%) = (original trials − relearning trials) ÷ original trials × 100**

| Original trials | Relearning trials | Savings |
|----------------|-------------------|---------|
| 20 | 20 | 0% (no memory left that helps) |
| 20 | 10 | (20 − 10) ÷ 20 = 50% |
| 20 | 5 | (20 − 5) ÷ 20 = 75% |

**Why savings is so sensitive.** Even when he could not recall a single syllable from a list, relearning was still faster than learning a brand-new list. Savings detect memory that recall and recognition (Part 1) miss: the traces were still there, just too weak to retrieve on their own.

### The Curve (CED 2.7.A.1)

When Ebbinghaus plotted savings against the length of the delay, he found the pattern now called the **forgetting curve**. The CED states it in two parts:

- **Time is a significant factor in forgetting.**
- **Forgetting occurs rapidly after initial learning and then levels off over time.**

Picture the graph: the y-axis is the percentage retained (savings), the x-axis is time since learning. The line drops **steeply** in the first hour or so, keeps falling more slowly over the first day or two, then becomes **nearly flat**. It does not fall in a straight line, and it does not keep falling to zero.

> **AP Connection:** If asked to describe the forgetting curve, include both halves: "rapid forgetting soon after learning" **and** "leveling off over time." Saying only "memory decreases with time" misses the shape, which is the point of the curve.
      `
    },
    {
      id: 'retrieval-forgetting-p4-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which description of retention over time is MOST consistent with the forgetting curve?',
            options: [
              'Retention falls at a steady rate each day until nothing is left',
              'Retention drops sharply at first, then declines slowly and levels off',
              'Retention stays level for several days, then drops off all at once',
              'Retention falls slowly at first, then faster as more time passes'
            ],
            correctAnswer: 1,
            explanation: 'The forgetting curve shows rapid loss soon after learning followed by a leveling off. A steady daily decline, a delayed sudden drop, and accelerating loss all describe different shapes.'
          },
          {
            question: 'Ebbinghaus could not recall any syllables from a list he learned a month earlier, yet he relearned it faster than a brand-new list. What does this show?',
            options: [
              'Recall tests are more sensitive than the savings method',
              'Some memory remained even though he could not recall it',
              'The old list was never encoded into long-term memory',
              'The new list caused proactive interference with the old'
            ],
            correctAnswer: 1,
            explanation: 'Faster relearning means part of the original learning was still stored. The savings method detected memory that recall could not, so the list had been encoded and some of it survived the month.'
          }
        ]
      }
    },
    {
      id: 'retrieval-forgetting-p4-s3-worked',
      type: 'text' as const,
      content: `
### 📚 Worked Example: Reading Forgetting-Curve Data

*Practice data (pattern similar to Ebbinghaus's published results, values rounded and simplified):*

| Delay since learning | Savings retained |
|---------------------|------------------|
| 20 minutes | 58% |
| 1 hour | 45% |
| 9 hours | 36% |
| 1 day | 34% |
| 2 days | 28% |
| 6 days | 25% |
| 31 days | 21% |

**Step 1: Find the fastest loss.** From 20 minutes to 1 hour (40 minutes), savings fell 13 points. That is more than was lost in the entire stretch from 6 days to 31 days (4 points over 25 days).

**Step 2: Describe the shape.** Savings drop by over a third within the first day, from 58% to 34%, but in the following month only another 13 points are lost (34% to 21%). The curve is steep early and nearly flat late: rapid forgetting that levels off.

**Step 3: Avoid the straight-line trap.** If forgetting were steady, you could predict the 31-day value by extending the first hour's rate: 13 points every 40 minutes would wipe out everything within a few hours. The real values show why the shape matters.

**Step 4: Read what does not happen.** Savings never reach 0%. Even after a month, about one-fifth of the original learning effort was still saved.

### Practice Calculation

A student needed **16** practice runs to memorize the order of the planets from a set of flashcards. One week later she needed **6** runs to relearn it.

Savings = (16 − 6) ÷ 16 × 100 = 10 ÷ 16 × 100 = **62.5%**

Interpretation: relearning took 62.5% less effort than the original learning, so a large share of the memory survived the week even if her recall of the planets on Day 7 was shaky.

> **AP Connection:** The AP exam asks you to identify concepts in data (skill 3.A) and interpret data in tables and graphs (skill 3.C). For a forgetting-curve table, name the trend, cite specific numbers ("from 58% at 20 minutes to 34% at one day"), and connect it to the concept ("rapid forgetting after initial learning").
      `
    },
    {
      id: 'retrieval-forgetting-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate the Savings** 🧮

Savings (%) = (original trials − relearning trials) ÷ original trials × 100. Enter numbers only.
      `,
      exercise: {
        questions: [
          {
            question: 'Original learning took 20 trials; relearning a week later took 8 trials. Savings = _____ %',
            answer: '60',
            acceptableAnswers: ['60%', '60.0'],
            explanation: '(20 − 8) ÷ 20 = 12 ÷ 20 = 0.60, so savings are 60%.'
          },
          {
            question: 'Original learning took 15 trials; relearning a month later took 12 trials. Savings = _____ %',
            answer: '20',
            acceptableAnswers: ['20%', '20.0'],
            explanation: '(15 − 12) ÷ 15 = 3 ÷ 15 = 0.20, so savings are 20%.'
          },
          {
            question: 'Original learning took 24 trials. Savings were 25%. How many trials did relearning take?',
            answer: '18',
            acceptableAnswers: ['18 trials'],
            explanation: '25% of 24 is 6 trials saved, so relearning took 24 − 6 = 18 trials.'
          }
        ],
        hint1: 'Subtract first: 20 − 8 = 12. Then divide by the original 20.',
        hint2: '15 − 12 = 3 trials saved. What fraction of 15 is 3?',
        hint3: 'Find 25% of 24 first; that many trials were saved.'
      }
    },
    {
      id: 'retrieval-forgetting-p4-s5-longterm',
      type: 'text' as const,
      content: `
### 📚 Beyond Nonsense Syllables: Long-Term Retention

**School Spanish decades later.** A large study tested adults who had taken Spanish in high school or college, from a few years to about 50 years earlier, most of whom had rarely used it since. Their knowledge dropped substantially during the first several years after the course ended, then stayed **remarkably stable for decades**. The forgetting-curve shape (rapid loss, then leveling off) appeared again, on a scale of years instead of days. The better the material had been learned originally (more courses, higher grades), the more remained.

### What Changes the Slope?

The forgetting curve is a pattern, not a fixed law; how steep it is depends on how the material was learned and used.

| Factor | Effect on forgetting | Connects to |
|--------|---------------------|-------------|
| **Meaningfulness** | Meaningful material is forgotten more slowly than nonsense syllables | Semantic encoding and levels of processing (encoding lessons) |
| **Degree of original learning** | Practicing past the point of first mastery leaves more retained | Savings: more original learning, more to save |
| **Retrieval practice** | Tested material is lost more slowly than restudied material | Testing effect (Part 3) |
| **Distributed practice** | Reviewing across several sessions flattens the curve | Spacing effect (encoding lessons) |
| **Interference** | Similar learning before or after can steepen forgetting | Proactive and retroactive interference (Part 5) |

### Evaluating Ebbinghaus's Research

| Strength | Limitation |
|----------|-----------|
| Careful **control**: nonsense syllables removed prior meaning as a confounding variable | **One participant** (himself), so the sample cannot represent people in general |
| Precise, **quantitative** measure (savings) that detects weak memories | He was both experimenter and participant, so his expectations could bias results |
| The pattern has been **replicated** many times, including a modern single-participant replication that found a very similar curve | Nonsense syllables are artificial; everyday memories are meaningful and are forgotten more slowly, which limits generalizability |

> **AP Connection:** An AAQ part on generalizability asks you to use evidence *from the study*. For Ebbinghaus, the best evidence is the single participant and the nonsense materials: "Because the only participant was Ebbinghaus himself and the materials were meaningless syllables, the findings may not generalize to how most people forget meaningful information."
      `
    },
    {
      id: 'retrieval-forgetting-p4-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Data Interpretation** 📊

*Practice study (not a real citation):* Students learned 30 Spanish vocabulary words to a criterion of one perfect recall. Separate random groups were then tested by free recall after different delays.

| Delay | Mean words recalled (of 30) |
|-------|----------------------------|
| 1 hour | 22 |
| 1 day | 14 |
| 1 week | 11 |
| 4 weeks | 10 |
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement BEST describes the data in the table?',
            options: [
              'Recall dropped by about 8 words in the first day and by only 4 more over the next 27 days',
              'Recall dropped by about 3 words per week, so it would reach zero after roughly ten weeks',
              'Recall stayed stable for the first day and then declined steadily over the following month',
              'Recall dropped by about 12 words between one hour and four weeks, at an even rate each week'
            ],
            correctAnswer: 0,
            explanation: 'Recall fell from 22 to 14 words in the first day, then from 14 to only 10 over the next 27 days. That is rapid early forgetting followed by leveling off, not a steady weekly decline.'
          },
          {
            question: 'The researchers used a separate group of students for each delay rather than testing the same students repeatedly. What is the MAIN advantage of this choice?',
            options: [
              'Using separate groups lets every participant experience every delay',
              'Earlier tests cannot act as retrieval practice for later ones',
              'Separate groups remove the need for random assignment to the delays',
              'Fewer participants are needed than with a repeated-measures design'
            ],
            correctAnswer: 1,
            explanation: 'If the same students were tested at 1 hour, 1 day and 1 week, each test would itself be retrieval practice and slow later forgetting. Separate randomly assigned groups avoid that problem, though they need more participants, not fewer.'
          },
          {
            question: 'A classmate concludes from the table that "after four weeks the students had forgotten everything they would ever forget." Which response is MOST accurate?',
            options: [
              'Supported: recall stopped changing completely after the first week',
              'Refuted: the data show forgetting speeding up again near four weeks',
              'Partly supported: loss had slowed, but the data end at four weeks',
              'Refuted: the students had no remaining memory of the words by then'
            ],
            correctAnswer: 2,
            explanation: 'Only one word was lost between week 1 and week 4, so forgetting had leveled off, but the study did not measure beyond four weeks. A conclusion about all future forgetting goes past the data.'
          }
        ]
      }
    }
  ]
}
