export const psychMemoryEncodePart2Data = {
  topicSlug: 'memory-encoding-storage',
  sections: [
    {
      id: 'memory-encoding-storage-p2-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Memory Encoding and Storage

**Part 2 of 7 — Levels of Processing and Rehearsal**

Two students spend the same twenty minutes with the same vocabulary list. One copies each word three times; the other explains each word in her own words and thinks of an example from her life. A week later the second student remembers far more. The levels of processing model explains why.

### 📚 The Levels of Processing Model

Craik and Lockhart (1972) proposed that how well something is remembered depends less on *which store* it sits in and more on *how deeply* it was processed when it was encoded. The AP framework names three levels, from shallowest to deepest:

| Level | What you attend to | Typical orienting question | Memory strength |
|------|-----------|-----------|-----------|
| **Structural** (shallowest) | Physical appearance: shape, letters, font, capitalization | "Is the word printed in capital letters?" | Weakest |
| **Phonemic** (intermediate) | Sound: how the word is pronounced, what it rhymes with | "Does the word rhyme with *train*?" | Moderate |
| **Semantic** (deepest) | Meaning: what the word means and how it connects to other ideas | "Would the word fit in the sentence: *The ___ ran across the road*?" | Strongest |

**Classic evidence.** In experiments by Craik and Tulving (1975), participants answered one of these three kinds of questions about each word in a long list. They were **not told** there would be a memory test, so they had no reason to rehearse on their own. On a surprise recognition test, memory rose steadily from structural to phonemic to semantic questions, with semantic processing producing by far the best memory.

> **Key insight:** Depth, not time or repetition, is what the model emphasizes. Thinking about meaning creates more links to existing knowledge, and every link is a possible route back to the memory later.
      `
    },
    {
      id: 'memory-encoding-storage-p2-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'While studying a list of neurotransmitters, Jamal notices that "dopamine" and "serotonin" both have three syllables and checks which names end in the same sound. According to the levels of processing model, how is he encoding the list?',
            options: [
              'Structurally, by attending to the visual form of the printed names',
              'Phonemically, by attending to how each of the names is pronounced',
              'Semantically, by attending to what each neurotransmitter does',
              'Automatically, by registering the names without any attention'
            ],
            correctAnswer: 1,
            explanation: 'Counting syllables and comparing word endings focuses on sound, which is phonemic processing, the middle level. Semantic processing would require thinking about what each neurotransmitter does, which Jamal is not doing.'
          },
          {
            question: 'In a levels of processing study, participants were not told that a memory test would follow the word-judgment task. What is the main purpose of this design choice?',
            options: [
              'To keep participants from rehearsing, so the judgment task alone shapes encoding',
              'To make sure all participants are randomly assigned to the three processing conditions',
              'To reduce the time participants need to complete the word-judgment task in each condition',
              'To protect participants from the stress of knowing that their memory will be evaluated'
            ],
            correctAnswer: 0,
            explanation: 'If participants expected a test, many would rehearse or elaborate on every word regardless of their assigned question, which would blur the difference between conditions. An unexpected test keeps the type of judgment as the main influence on encoding. Random assignment is a separate design step.'
          }
        ]
      }
    },
    {
      id: 'memory-encoding-storage-p2-s3-rehearsal',
      type: 'text' as const,
      content: `
### 📚 Maintenance vs. Elaborative Rehearsal

The AP framework distinguishes two ways of rehearsing information over time.

| | Maintenance rehearsal | Elaborative rehearsal |
|------|-----------|-----------|
| **What you do** | Repeat the information as it is | Connect the information to its meaning and to things you already know |
| **Processing level** | Usually shallow (structural or phonemic) | Semantic |
| **Effect on storage** | Keeps information active and can prolong storage, but adds few retrieval routes | Promotes long-term retention because it builds meaningful links |
| **Example** | Saying a Wi-Fi password over and over while you type it | Learning that the phonological loop holds speech sounds, then noticing that you silently repeat a phone number to yourself, which is the loop at work |

**Elaborative strategies you can use:**
- Explain a term in your own words, then give an example from your own life.
- Ask "why" and "how" questions: *Why* would massed practice feel effective even though it is not?
- Compare: How is this concept different from the one most often confused with it?
- Connect across units: How does long-term potentiation (Part 5) explain why elaboration helps?

### 📚 Self-Relevant and Autobiographical Memory

The AP framework notes that **autobiographical memory**, memory for events and facts of one's own life, may explain why information connected to ourselves is especially memorable. In a classic study (Rogers, Kuiper and Kirker, 1977), people judged adjectives such as "generous" in different ways. Words judged with the question "Does this describe you?" were remembered better than words judged only for meaning. Relating information to the self is a particularly rich form of semantic, elaborative processing because the self is one of the most detailed and well-organized structures in memory.

> **AP Connection:** Self-relevance shows up in study advice ("connect the concept to your own experience") and in AAQ/EBQ sources about study strategies. If a scenario says a student related the material to her own life, name **elaborative rehearsal** or **semantic encoding**, and explain that the extra connections make later retrieval more likely.
      `
    },
    {
      id: 'memory-encoding-storage-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
**Name the Level of Processing** ✍️

For each orienting question used in an experiment, type the level of processing it produces (structural, phonemic or semantic).
      `,
      exercise: {
        questions: [
          {
            question: '"Is the word TABLE printed in uppercase letters?"',
            answer: 'structural',
            acceptableAnswers: ['structural processing', 'structural level'],
            explanation: 'Judging letter case attends only to physical appearance, the shallowest (structural) level.'
          },
          {
            question: '"Does the word FLOWER rhyme with POWER?"',
            answer: 'phonemic',
            acceptableAnswers: ['phonemic processing', 'phonemic level', 'phonetic'],
            explanation: 'Rhyme judgments require processing sound, which is the phonemic level.'
          },
          {
            question: '"Is a FLOWER something you could give to a friend?"',
            answer: 'semantic',
            acceptableAnswers: ['semantic processing', 'semantic level'],
            explanation: 'Deciding whether the word fits a situation requires thinking about its meaning, the deepest (semantic) level.'
          }
        ]
      }
    },
    {
      id: 'memory-encoding-storage-p2-s5-study',
      type: 'text' as const,
      content: `
### 🔬 Worked Example: Reading a Levels of Processing Study

**Practice study (not a real citation).** Ninety high school volunteers were randomly assigned to one of three groups of 30. Each group saw the same 40 words on a screen, one at a time, and answered one question about each word:
- Structural group: "Does the word contain the letter *e*?"
- Phonemic group: "Does the word rhyme with a word shown below it?"
- Semantic group: "Does the word fit the sentence shown below it?"

Participants were not told about any memory test. Ten minutes later, they were given a surprise list of 80 words (the 40 studied words mixed with 40 new ones) and asked to circle the words they had seen.

| Group | Mean words correctly recognized (out of 40) | Standard deviation |
|------|-----------|-----------|
| Structural | 14.2 | 4.1 |
| Phonemic | 21.5 | 4.6 |
| Semantic | 31.8 | 3.9 |

**Step 1 — Identify the method.** Participants were randomly assigned to conditions that the researchers manipulated, so this is an **experiment**.

**Step 2 — Name the variables.**
- Independent variable: the type of question answered about each word (structural, phonemic or semantic processing).
- Dependent variable: memory, **operationally defined** as the number of the 40 studied words correctly circled on the surprise recognition test.

**Step 3 — Interpret the statistics.** The semantic group recognized about 17.6 more words on average than the structural group (31.8 − 14.2). The standard deviations are similar, so scores within each group were about equally spread out. The pattern (structural lowest, semantic highest) matches the model's prediction.

**Step 4 — Consider generalizability.** Thirty volunteers per group from one school, tested on single words after ten minutes, limits generalization to other ages, to complex material such as textbook chapters, and to longer delays.

> **AP Connection:** This is the structure of an Article Analysis Question (AAQ): method, operational definition, what a statistic shows, an ethical guideline, generalizability, and whether the results support the hypothesis. You will practice a full AAQ in Part 6.
      `
    },
    {
      id: 'memory-encoding-storage-p2-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Apply It: The Practice Study and Beyond** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'In the practice study, a critic argues that the semantic group remembered more only because sentence questions took longer to answer, giving participants more time with each word. What would best test this alternative explanation?',
            options: [
              'Give every group the same viewing time for each word on the screen',
              'Give the semantic group a harder recognition test with more new words',
              'Recruit a larger sample of students from the same high school as before',
              'Ask the participants afterward which question type felt the most difficult'
            ],
            correctAnswer: 0,
            explanation: 'If time with each word is the real cause, equalizing viewing time across groups should erase the advantage. If semantic processing still produces better memory with time held constant, depth of processing, not time, explains the result.'
          },
          {
            question: 'Two friends study for a quiz on the parts of the neuron. Lena repeats "dendrites receive, axon sends" fifty times. Tomas imagines a phone call, with dendrites as the ear and the axon as the voice traveling down the line. Which prediction is most consistent with the AP framework?',
            options: [
              'Lena will remember more, because more repetitions give more practice',
              'Tomas will remember more, because his rehearsal links the terms to meaning',
              'Both will remember equally, because Tomas and Lena studied equally long',
              'Lena will remember more, because shallow encoding protects against distortion'
            ],
            correctAnswer: 1,
            explanation: 'Tomas is using elaborative rehearsal: he connects the terms to meaning and to something familiar, which promotes long-term retention. Lena\'s maintenance rehearsal can keep the phrase active but builds few meaningful links.'
          },
          {
            question: 'Which result would be most difficult for the levels of processing model to explain?',
            options: [
              'Words judged for meaning are recalled better than words judged for rhyme',
              'Words judged for rhyme are recalled better than words judged by letter case',
              'Words judged by letter case are recalled best after a long, unexpected delay',
              'Words related to the self are recalled better than words judged for meaning'
            ],
            correctAnswer: 2,
            explanation: 'The model predicts that structural processing produces the weakest memory, so letter-case judgments outperforming deeper processing would contradict it. The self-reference advantage fits the model because relating information to the self is an especially deep form of semantic processing.'
          }
        ]
      }
    }
  ]
}
