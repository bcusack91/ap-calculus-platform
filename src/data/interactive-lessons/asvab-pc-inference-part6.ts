export const asvabPcInferencePart6Data = {
  topicSlug: 'asvab-pc-inference',
  sections: [
    {
      id: 'pcin-p6-intro',
      type: 'text' as const,
      content: `# 📄 Inference, Tone and Word Meaning

**Part 6 of 7 — Test Strategy and Common Traps**

### Pacing

You have **27 minutes for 10 questions** on the CAT-ASVAB, about **2 minutes 40 seconds** each (on paper: 15 questions in 13 minutes, about 52 seconds each). Inference and tone questions deserve that time: they ask you to weigh **every** choice, not just spot one sentence.

- **Read the question first**, so you know whether you are looking for a conclusion, a tone or a word meaning.
- **Read the passage once, carefully.**
- **Test each choice** against the text: supported, too far, unsupported or contradicted?
- **Check before you click.** You cannot return to a question on the CAT, and you must answer to move on.
- **Finish the subtest.** Unanswered questions at the time limit are scored as random guesses, and a run of wrong answers at the end of a subtest carries a relatively large penalty. Some questions may be unscored tryouts, but you can't tell which, so treat each one as scored.

### Six Traps on Inference, Tone and Word Questions

| Trap | What it looks like |
|:---|:---|
| **Too far** | Turns a small fact into a big claim ("…so she will win next year") |
| **Outside knowledge** | Sounds true in real life but has no support in the passage |
| **Extreme words** | always, never, all, none, proves, the best, the only |
| **Wrong-strength tone** | "Furious" for mild doubt, "thrilled" for quiet approval |
| **Opposite tone** | Misreads sarcasm as praise, or praise as criticism |
| **Everyday meaning** | On a word question, the most common meaning of the word |

> **Key Fact:** The best inference is usually **modest**. When two choices both seem possible, pick the one that needs **fewer extra assumptions** to be true.`
    },
    {
      id: 'pcin-p6-mc1',
      type: 'multiple-choice' as const,
      content: `**Avoid going too far.** 🎯

Ramirez has run in the base marathon every year for the past ten years, and her finishing time has improved every single year.`,
      exercise: {
        questions: [
          {
            question: 'Which statement is most strongly supported by the passage?',
            options: [
              'Ramirez trains harder and longer than any other runner on the base',
              'Ramirez will win the base marathon next year',
              'Ramirez has gotten faster at the marathon over time',
              'Ramirez is the best runner on the entire base'
            ],
            correctAnswer: 2,
            explanation: 'Ten straight years of improved times means she has gotten faster. Winning next year, being the best on base and training hardest all go too far: the passage compares her only with her own past times.'
          }
        ]
      }
    },
    {
      id: 'pcin-p6-mc2',
      type: 'multiple-choice' as const,
      content: `**Avoid extreme words.** 🎯

In one study, students who reviewed their notes for ten minutes every day scored higher on the final exam, on average, than students who studied only the night before.`,
      exercise: {
        questions: [
          {
            question: 'Which conclusion is best supported by the study?',
            options: [
              'Students who study the night before an exam always fail',
              'Short daily review may lead to better exam scores than cramming',
              'Every student must review notes for exactly ten minutes a day',
              'No one can learn anything by studying the night before a test'
            ],
            correctAnswer: 1,
            explanation: 'The study found higher scores "on average" for daily review, which supports a careful conclusion: daily review may lead to better results. "Always fail," "every student must" and "no one can learn" are extreme claims one study cannot support.'
          }
        ]
      }
    },
    {
      id: 'pcin-p6-mc3',
      type: 'multiple-choice' as const,
      content: `**Get the attitude right.** 🎯

The new recruits impressed Drill Sergeant Owens. By the end of the first week their uniforms were sharp, their bunks were tight and not one of them had been late to a single formation.`,
      exercise: {
        questions: [
          {
            question: 'Drill Sergeant Owens\'s attitude toward the recruits is best described as',
            options: ['suspicious', 'disappointed', 'approving', 'indifferent'],
            correctAnswer: 2,
            explanation: 'The recruits "impressed" Owens, and every detail is a success: sharp uniforms, tight bunks, no one late. That is approval. Disappointed is the opposite tone, and nothing suggests he is indifferent or suspicious.'
          }
        ]
      }
    },
    {
      id: 'pcin-p6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Strategy check.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'Two inference choices both seem possible. You should pick the one that:',
            options: ['needs fewer extra assumptions', 'makes the bigger claim', 'sounds most true in real life'],
            correctAnswer: 0
          },
          {
            label: 'A passage mildly questions a new policy. The best tone word is likely:',
            options: ['enthusiastic', 'furious', 'skeptical'],
            correctAnswer: 2
          },
          {
            label: 'On a word-in-context question, the everyday meaning of the word is:',
            options: ['always the answer', 'often a trap', 'never one of the choices'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['needs fewer extra assumptions', 'skeptical', 'often a trap'],
        hint1: 'The best inference is modest.',
        hint2: 'Match the tone word\'s strength to the passage.',
        hint3: 'Passage questions usually test a second meaning.',
        explanation: 'The safest inference is the one that needs the fewest extra assumptions. Mild questioning is skeptical, not furious, and certainly not enthusiastic. On word-in-context questions, the everyday meaning is often included as a trap, though not always wrong, so check it against the sentence.'
      }
    },
    {
      id: 'pcin-p6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- About **2 minutes 40 seconds** per question on the CAT: use it to test **every** choice; check before you click
- Traps: **too far, outside knowledge, extreme words, wrong-strength tone, opposite tone, everyday meaning**
- The best inference is **modest** and needs the fewest extra assumptions
- Match a tone word's **direction and strength** to the passage

> **Up Next:** Part 7 — a mixed mastery set of inference, tone, technique and word-meaning questions.`
    }
  ]
};
