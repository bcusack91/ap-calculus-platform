export const psychMemoryEncodePart6Data = {
  topicSlug: 'memory-encoding-storage',
  sections: [
    {
      id: 'memory-encoding-storage-p6-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Memory Encoding and Storage

**Part 6 of 7 — AP Exam Practice: Article Analysis and Evidence-Based Questions**

The AP Psychology free-response section has two questions, each worth 7 points. The **Article Analysis Question (AAQ)** gives you one summarized study; the **Evidence-Based Question (EBQ)** gives you three summarized sources and asks you to build an argument. This part runs a full practice version of each on memory encoding.

### 📄 AAQ Practice Source

**Practice study (not a real citation): Spacing and Vocabulary Retention in Ninth Graders**

**Introduction.** Researchers tested the hypothesis that distributing study over several sessions produces better long-term retention of vocabulary than massing the same amount of study into one session.

**Participants.** 120 ninth graders from two public high schools in one mid-sized U.S. city volunteered. Ages ranged from 14 to 15 (M = 14.4). None had studied Spanish before.

**Method.** A computer randomly assigned students to two groups of 60. Both groups studied the same 40 Spanish–English word pairs for a total of 60 minutes with the same flashcard app.
- **Massed group:** one 60-minute session on day 15.
- **Spaced group:** three 20-minute sessions on days 1, 8 and 15.

Both groups took the same written test on day 43, four weeks after their final session. Students saw each Spanish word and wrote its English translation; the score was the number of the 40 words translated correctly.

Parents gave written permission, and students agreed to take part after being told they could stop at any time without any effect on their grades. Students' names were replaced by ID numbers before data were analyzed. At the end of the study, researchers explained the purpose of the study to all students and offered the massed group the same spaced review sessions.

**Results.**

| Group | Mean words correct (out of 40) | Standard deviation |
|------|-----------|-----------|
| Massed | 14.6 | 6.2 |
| Spaced | 22.3 | 6.8 |

The difference was statistically significant (p < .01), with a large effect size (Cohen's d = 1.18).

**Discussion.** The researchers noted that all students came from one city and that the test measured only vocabulary.
      `
    },
    {
      id: 'memory-encoding-storage-p6-s2-aaq-a',
      type: 'multiple-choice' as const,
      content: `
**AAQ Parts A–C** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Part (A): Identify the research method used in the study.',
            options: [
              'A correlational study, because it compares two groups of students on their scores',
              'An experiment, because students were randomly assigned to study conditions',
              'A case study, because it examines one group of ninth graders in great depth',
              'A naturalistic observation, because students used their usual flashcard app'
            ],
            correctAnswer: 1,
            explanation: 'The researchers manipulated the study schedule and used random assignment to place students in conditions, which defines an experiment. Comparing groups alone does not make a study correlational when the researcher creates the groups.'
          },
          {
            question: 'Part (B): State the operational definition of long-term retention in this study.',
            options: [
              'How well the students remembered Spanish vocabulary over a period of time',
              'The total of 60 minutes each student spent with the flashcard app',
              'The number of the 40 words translated correctly on a test given on day 43',
              'Whether a student was placed in the massed group or the spaced group'
            ],
            correctAnswer: 2,
            explanation: 'An operational definition states exactly how a variable was measured: here, the number of the 40 Spanish words correctly translated on the day-43 written test. "How well students remembered" restates the concept without saying how it was measured, and group placement is the independent variable.'
          },
          {
            question: 'Part (C): Describe what the difference in means indicates.',
            options: [
              'On average, spaced students translated about 7.7 more words than massed students',
              'Every spaced student scored higher than every student in the massed group did',
              'Massed students\' scores varied much more than spaced students\' scores varied',
              'On average, spaced students studied about 7.7 more minutes than massed students'
            ],
            correctAnswer: 0,
            explanation: 'The means differ by 22.3 − 14.6 = 7.7 words, so the spaced group remembered more on average. A mean difference does not mean every spaced student outscored every massed student, and the standard deviations (6.2 and 6.8) show similar spread. Study time was held at 60 minutes for both groups.'
          }
        ]
      }
    },
    {
      id: 'memory-encoding-storage-p6-s3-aaq-model',
      type: 'text' as const,
      content: `
### ✍️ Model Responses for Parts D–F

**Part (D): Identify one ethical guideline described in the study and describe how the researchers applied it.**
> *Confidentiality: the researchers replaced students' names with ID numbers before analyzing the data, so no score could be traced to an individual student.*

Other guidelines in the source would also earn the point if described accurately: **informed consent** (parents gave written permission), **informed assent** (students agreed after being told they could stop at any time), and **debriefing** (the purpose was explained afterward). Naming a guideline the source does not describe, or naming one without describing how it was applied, does not earn the point.

**Part (E): Explain the extent to which the findings may or may not be generalizable, using evidence from the study.**
> *The findings may not generalize to all students, because the participants were 120 volunteer ninth graders from two schools in one city who had never studied Spanish. The results may not apply to older students, to students in other regions, or to material other than vocabulary, such as concepts or problem solving.*

Strong responses name a **specific feature of the sample or task** from the source and connect it to **who or what** the result might not apply to. "The sample was small" alone is too vague.

**Part (F): Explain how at least one finding supports or refutes the hypothesis.**
> *The finding supports the hypothesis: with total study time held constant at 60 minutes, the spaced group translated an average of 22.3 words four weeks later, compared with 14.6 for the massed group, a statistically significant difference. This is consistent with the spacing effect, which predicts better retention from distributed practice.*

**Scoring tips for the AAQ:**
- Use the source's own numbers and details; the AAQ rewards specific evidence.
- Keep parts separate and labeled. Points are scored part by part.
- "Statistically significant" means the difference is unlikely to be due to chance alone; effect size (Cohen's d) tells you how **large** the difference is. A d of about 0.8 or above is conventionally considered large.
      `
    },
    {
      id: 'memory-encoding-storage-p6-s4-aaq-check',
      type: 'multiple-choice' as const,
      content: `
**Check Your AAQ Reasoning** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A student answers Part (D) by writing, "The researchers followed the ethical guideline of avoiding deception." Why would this response probably not earn the point?',
            options: [
              'Avoiding deception is not an ethical guideline used in psychology research',
              'The source does not describe how researchers avoided or used any deception',
              'Ethical guidelines are tested in Part (E) of the AAQ rather than Part (D)',
              'The response must name every ethical guideline that appears in the source'
            ],
            correctAnswer: 1,
            explanation: 'Part (D) asks for a guideline described in the study and a description of how it was applied. The source describes consent, assent, confidentiality and debriefing, but says nothing about deception, so the student cannot describe how it was applied.'
          },
          {
            question: 'Which change to the study would most directly improve the generalizability of its findings?',
            options: [
              'Testing students one week after their final session instead of four weeks',
              'Adding a third group that studies the word pairs for a total of 90 minutes',
              'Recruiting students of several ages from schools in many different regions',
              'Letting each student choose whether to study in the massed or spaced group'
            ],
            correctAnswer: 2,
            explanation: 'Generalizability depends on how well the sample represents the population. A broader sample of ages and regions lets the results apply to more students. Letting students choose their group would remove random assignment and weaken the causal conclusion.'
          }
        ]
      }
    },
    {
      id: 'memory-encoding-storage-p6-s5-ebq',
      type: 'text' as const,
      content: `
### 📄 EBQ Practice Sources

**Prompt:** Using the sources provided, develop and justify an argument about how high school students should study to remember material for a cumulative final exam.

**Source 1 (practice study, not a real citation).** 80 tenth graders were randomly assigned to read a textbook passage about the immune system. Half reread the passage; half answered "why is this true?" questions about each fact and related the facts to their own experiences of being sick. On a test one week later, the explanation group answered 71% of questions correctly, compared with 52% for the rereading group.

**Source 2 (practice study, not a real citation).** 150 middle schoolers studied geography facts for a total of 45 minutes, either in one session or in three 15-minute sessions spread over two weeks. On a test one month after the last session, the spaced group recalled 41% more facts than the single-session group.

**Source 3 (practice correlational study, not a real citation).** In a survey of 600 college students, the number of times students checked their phones per hour of studying was negatively correlated with their exam scores (r = −.38).

### ✍️ How the EBQ Is Built

| Part | What you write | Example built from these sources |
|------|-----------|-----------|
| **A. Claim** | A specific, defensible claim based in psychological science | *Students should spread their studying over several sessions and process material for meaning, not reread it in one sitting.* |
| **B(i). Evidence** | Specific, accurate evidence from one source, cited | *Students who answered "why" questions scored 71% vs. 52% for rereaders (Source 1).* |
| **B(ii). Explanation** | How that evidence supports the claim, using a psychological concept | *Answering "why" questions and relating facts to their own lives is elaborative rehearsal and semantic encoding, which create more connections for later retrieval.* |
| **C(i). Evidence** | Evidence from a **different** source | *Spaced students recalled 41% more facts after a month (Source 2).* |
| **C(ii). Explanation** | A **different** concept than in B(ii) | *This reflects the spacing effect: distributed practice improves encoding and consolidation compared with massed practice.* |

> **Watch out:** Source 3 is correlational. You may use it, but explain it as a relationship (checking phones is associated with lower scores, consistent with divided attention limiting encoding) and do not claim that phone checking *causes* lower scores.
      `
    },
    {
      id: 'memory-encoding-storage-p6-s6-ebq-check',
      type: 'multiple-choice' as const,
      content: `
**Check Your EBQ Reasoning** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Which claim would earn Part (A) for this prompt?',
            options: [
              'Memory is an important topic that every high school student should learn about',
              'Students should space out their study sessions instead of cramming',
              'Some students remember material well and some students forget it before exams',
              'Students who study more always remember more than students who study less'
            ],
            correctAnswer: 1,
            explanation: 'A claim must take a specific, defensible position on the prompt and be grounded in psychological science. Spacing study sessions is specific and supported by the sources. The others are vague, do not answer the prompt, or overstate what the evidence shows.'
          },
          {
            question: 'A student uses Source 3 as evidence and writes, "Checking a phone while studying causes lower exam scores." What is the main problem with this explanation?',
            options: [
              'Source 3 found a positive correlation, so phone checking must improve scores',
              'Source 3 used too few participants to provide evidence about studying habits',
              'Source 3 is correlational, so it cannot show a causal effect',
              'Source 3 measured working memory directly, not the students\' exam scores'
            ],
            correctAnswer: 2,
            explanation: 'A correlation of r = −.38 shows that more phone checking goes with lower scores, but without random assignment a third variable, such as lower motivation, could explain both. The correlation is negative, not positive.'
          },
          {
            question: 'In Part B(ii), a student explains Source 1 using elaborative rehearsal. Which concept would best satisfy the requirement to use a different concept in Part C(ii) with Source 2?',
            options: [
              'Semantic encoding',
              'Elaborative processing',
              'The spacing effect',
              'Deep processing'
            ],
            correctAnswer: 2,
            explanation: 'Source 2 manipulates how study time is distributed, which is the spacing effect. Semantic encoding, elaborative processing and deep processing are essentially the same idea already used in Part B(ii), so they would not count as a different concept.'
          }
        ]
      }
    }
  ]
}
