export const asvabPcMainIdeaPart6Data = {
  topicSlug: 'asvab-pc-main-idea',
  sections: [
    {
      id: 'pcmi-p6-intro',
      type: 'text' as const,
      content: `# 📄 Main Idea and Purpose

**Part 6 of 7 — Test Strategy and Common Traps**

### Pacing: You Have Time, So Use It

| | CAT-ASVAB | Paper ASVAB / CEP |
|:---|:---|:---|
| Questions | 10 | 15 |
| Time | 27 minutes | 13 minutes |
| Per question | about 2 minutes 40 seconds | about 52 seconds |

On the computer test, a typical question might go like this:

| Step | Time |
|:---|:---|
| Read the question | 5 to 10 seconds |
| Read the passage carefully | 30 to 60 seconds |
| Answer in your own words | 10 seconds |
| Eliminate and choose | 30 seconds |
| Check against the passage | 10 to 20 seconds |

That leaves a cushion for longer passages. The remaining time and questions show in the lower-right corner of the screen; at the halfway point (5 questions) you want about 13 minutes or more left.

### Rules That Matter

- You **cannot go back** to an answered question, and you must answer to move on, so check before you click.
- Unanswered questions when time runs out are scored as random guesses, and a run of wrong answers at the end of a subtest carries a relatively large penalty. Pacing so that you finish with real answers matters more than rushing.
- Some questions may be unscored tryouts, and you can't tell which: treat every one as scored.

### The Six Main Idea Traps

| Trap | What it looks like |
|:---|:---|
| **True but too narrow** | One detail from the passage, often in the passage's own words |
| **Too broad** | A claim about the whole world when the passage covers one case |
| **Outside knowledge** | Something true in real life that the passage never says |
| **Extreme words** | always, never, all, only, completely, when the passage is more careful |
| **Reversed or distorted** | The passage's idea turned around or stretched |
| **The hook** | A choice built from an opening question or story instead of the point |

> **Key Fact:** The ASVAB grades you on what the **passage** says, not on what you know. A choice that is true in real life but not supported by the passage is wrong.`
    },
    {
      id: 'pcmi-p6-mc1',
      type: 'multiple-choice' as const,
      content: `**Watch for outside knowledge.** 🎯

When the Model T went on sale in 1908, cars were a luxury for the wealthy. Henry Ford's goal was a car that ordinary working families could afford. After his factories introduced the moving assembly line in 1913, the time needed to build a car dropped from about twelve hours to about ninety minutes, and the price fell year after year. By the 1920s, millions of American families owned a Model T.`,
      exercise: {
        questions: [
          {
            question: 'What is the main idea of the passage?',
            options: [
              'The assembly line cut the time needed to build a car to ninety minutes',
              'Even after 1913, the Model T remained a car only the wealthy could afford',
              'Henry Ford founded his own car company several years before 1908',
              'Ford\'s production methods made cars affordable for ordinary families'
            ],
            correctAnswer: 3,
            explanation: 'The passage moves from cars as a luxury, to Ford\'s goal, to the assembly line lowering cost, to millions of families owning one. The company\'s founding date is outside knowledge the passage never mentions, the ninety-minute figure is one detail (too narrow), and the claim that the Model T remained a car only the wealthy could afford reverses the passage.'
          }
        ]
      }
    },
    {
      id: 'pcmi-p6-mc2',
      type: 'multiple-choice' as const,
      content: `**Watch for extreme words.** 🎯

Holding long stretches before exercise has been standard advice for decades. Recent research suggests, however, that a short active warm-up, such as jogging slowly and swinging the arms and legs, may prepare muscles better than long stretches held before a workout. Long stretches are still useful, but many trainers now save them for after exercise.`,
      exercise: {
        questions: [
          {
            question: 'Which statement best expresses the main idea?',
            options: [
              'Stretching is always harmful and should never be part of a workout',
              'Many trainers now favor an active warm-up and save long stretches for later',
              'Jogging slowly is the only exercise that prepares the body for a workout',
              'Research has now proven that a good warm-up prevents every kind of sports injury'
            ],
            correctAnswer: 1,
            explanation: 'The passage says research "suggests" active warm-ups may work better and that long stretches are "still useful" after exercise. The other three choices use extreme words (always, never, only, every) that go far beyond the passage\'s careful claims.'
          }
        ]
      }
    },
    {
      id: 'pcmi-p6-mc3',
      type: 'multiple-choice' as const,
      content: `**Don't take the hook.** 🎯

Ask anyone who has worked a Thanksgiving shift at a fire station, and you may hear about turkey fryers. Every year, firefighters respond to fires started by people deep-frying turkeys at home. The danger comes from lowering a frozen or wet bird into hot oil, which can make the oil bubble over the pot and ignite. Fire departments urge cooks to thaw the turkey completely, use the fryer outdoors and far from buildings, and keep a fire extinguisher close by.`,
      exercise: {
        questions: [
          {
            question: 'The main idea of the passage is that',
            options: [
              'fire departments want people to stop cooking turkeys at home on Thanksgiving altogether',
              'firefighters often have to work on Thanksgiving and other holidays',
              'deep-frying a turkey can start a fire, so cooks should take precautions',
              'frozen turkeys take a long time to thaw before they can be cooked'
            ],
            correctAnswer: 2,
            explanation: 'The opening about holiday shifts is a hook; the passage is about the fire danger of turkey fryers and how to avoid it. Thawing time is never discussed, and fire departments recommend safety steps, not giving up home cooking.'
          }
        ]
      }
    },
    {
      id: 'pcmi-p6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Strategy check.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'On the CAT-ASVAB, the average time available per PC question is about:',
            options: ['1 minute', '2 minutes 40 seconds', '5 minutes', '36 seconds'],
            correctAnswer: 1
          },
          {
            label: 'A choice that is true in real life but never mentioned in the passage is:',
            options: ['an outside-knowledge trap', 'the main idea', 'usually the answer'],
            correctAnswer: 0
          },
          {
            label: 'A choice that repeats one sentence of the passage word for word is most often:',
            options: ['the main idea', 'too narrow', 'too broad'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['2 minutes 40 seconds', 'an outside-knowledge trap', 'too narrow'],
        hint1: '27 minutes ÷ 10 questions.',
        hint2: 'You are graded on the passage, not on what you know.',
        hint3: 'One sentence is one detail.',
        explanation: '27 minutes for 10 questions is 2.7 minutes, about 2 minutes 40 seconds each (36 seconds is the Word Knowledge pace). A real-life fact that the passage never states is an outside-knowledge trap. A choice copied from one sentence is usually a single detail, too narrow to be the main idea.'
      }
    },
    {
      id: 'pcmi-p6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- CAT: **10 questions, 27 minutes**, about 2 minutes 40 seconds each; paper: 15 in 13 (about 52 seconds each)
- You cannot go back, so **check before you click**; finish with real answers
- Six traps: **too narrow, too broad, outside knowledge, extreme words, reversed/distorted, the hook**
- You are graded on the **passage**, not on what you know

> **Up Next:** Part 7 — a mixed mastery set of main idea and purpose questions.`
    }
  ]
};
