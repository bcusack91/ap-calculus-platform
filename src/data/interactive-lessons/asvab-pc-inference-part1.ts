export const asvabPcInferencePart1Data = {
  topicSlug: 'asvab-pc-inference',
  sections: [
    {
      id: 'pcin-p1-intro',
      type: 'text' as const,
      content: `# 📄 Inference, Tone and Word Meaning

**Part 1 of 7 — Reading Between the Lines**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Reading between the lines** |
| 2 | Drawing supported conclusions |
| 3 | Implied contrasts and unstated assumptions |
| 4 | Tone, attitude and style |
| 5 | Word meaning in a passage |
| 6 | Test strategy and common traps |
| 7 | Mixed mastery set |

### What These Questions Ask

Paragraph Comprehension on the CAT-ASVAB gives you **10 questions in 27 minutes**, about **2 minutes 40 seconds** each. The official list of PC skills includes **drawing conclusions**, **author's purpose and tone**, **style and technique** and the **meaning of a word in context**. Those are this lesson.

| Question stem | Type |
|:---|:---|
| "It can be inferred from the passage that…" | Inference |
| "The passage suggests that…" / "Which conclusion is best supported?" | Inference |
| "The author would most likely agree that…" | Inference about the author's view |
| "The tone of the passage is best described as…" | Tone |
| "The author's attitude toward ___ is…" | Attitude |
| "The author supports the main point mainly by…" | Style and technique |
| "As used in the passage, ___ most nearly means…" | Word in context |

### What an Inference Is (and Isn't)

An **inference** is something the passage does not say directly but **clearly points to**. It is a small, safe step from the text, not a leap.

| | Example |
|:---|:---|
| **Passage** | Every seat in the theater was full, and people were standing along the back wall. |
| **Supported inference** | The show was popular. |
| **Too far** | The show was the best in the city. |
| **Not supported** | The tickets were free. |

> **Key Fact:** The right inference is the choice the passage makes **most likely**, not the most interesting or dramatic one. If the passage gives you no reason to believe a choice, it is wrong, even if it could be true.`
    },
    {
      id: 'pcin-p1-warmup1',
      type: 'multiple-choice' as const,
      content: `**Warm-up 1: an inference.** 🎯

When Ana pulled into the driveway, the porch light was on, the dog was barking happily at the front window and the smell of garlic and onions drifted out of the open kitchen window.`,
      exercise: {
        questions: [
          {
            question: 'It can most reasonably be inferred that',
            options: [
              'someone is already home and cooking',
              'the dog is barking because a stranger is near',
              'Ana is planning to cook dinner for guests',
              'Ana forgot to turn off the porch light that morning'
            ],
            correctAnswer: 0,
            explanation: 'The smell of garlic and onions from an open kitchen window means someone is cooking inside right now. The happy barking fits someone the dog knows, not a stranger. A forgotten light is possible but has no support, and nothing says Ana is cooking for guests.'
          }
        ]
      }
    },
    {
      id: 'pcin-p1-warmup2',
      type: 'multiple-choice' as const,
      content: `**Warm-up 2: tone.** 🎯

The city's new "improved" parking meters refuse both coins and cards whenever it rains. In a city where it rains half the year, that is quite an achievement.`,
      exercise: {
        questions: [
          {
            question: 'The tone of the passage is best described as',
            options: ['deeply admiring', 'neutral', 'grateful', 'sarcastic'],
            correctAnswer: 3,
            explanation: 'The quotation marks around "improved" and calling a broken meter "quite an achievement" say the opposite of what the writer means, which is sarcasm. Admiring and grateful take the praise at face value, and the writer is clearly not neutral.'
          }
        ]
      }
    },
    {
      id: 'pcin-p1-warmup3',
      type: 'multiple-choice' as const,
      content: `**Warm-up 3: a word in context.** 🎯

During the open house, Sergeant Ellis had to field questions from dozens of worried parents about barracks life, meals and phone privileges.`,
      exercise: {
        questions: [
          {
            question: 'As used in the passage, "field" most nearly means',
            options: ['farm', 'grow', 'handle', 'avoid'],
            correctAnswer: 2,
            explanation: 'To field questions is to deal with them as they come, like a ballplayer fielding a hit. Grow and farm play on the common meaning of a field of crops, and avoid is the opposite of what Ellis did.'
          }
        ]
      }
    },
    {
      id: 'pcin-p1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- This lesson covers the PC skills of **drawing conclusions, tone and attitude, style and technique, and word meaning in context**
- An **inference** is a small, safe step from the text: what the passage makes **most likely**
- Reject choices that go **too far** or have **no support**, even if they could be true
- Tone and word-meaning questions are also answered **from the passage**, not from general knowledge

> **Up Next:** Part 2 — how to tell a supported conclusion from one that goes too far.`
    }
  ]
};
