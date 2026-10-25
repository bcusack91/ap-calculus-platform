export const asvabPcMainIdeaPart3Data = {
  topicSlug: 'asvab-pc-main-idea',
  sections: [
    {
      id: 'pcmi-p3-intro',
      type: 'text' as const,
      content: `# 📄 Main Idea and Purpose

**Part 3 of 7 — Too Broad, Too Narrow: Main Idea vs Detail**

### The Goldilocks Test

Main idea questions are built from four kinds of choices. Only one is right.

| Choice type | What it does | Why it is wrong |
|:---|:---|:---|
| **Just right** | Covers the whole passage, and only the passage | It is the answer |
| **Too narrow** | States one detail from the passage | True, but it leaves out most of the passage |
| **Too broad** | Makes a claim much bigger than the passage | The passage does not cover that much ground |
| **Distorted** | Twists, reverses or adds to what the passage says | Not supported by the text |

The **too narrow** choice is the most dangerous one, because it is **true**. Students see words they just read and pick it. But a main idea has to cover the **whole** passage, not one sentence of it.

> **Key Fact:** Ask two questions about each choice: **Is it true according to the passage?** and **Does it cover the whole passage?** The main idea passes both.`
    },
    {
      id: 'pcmi-p3-example',
      type: 'text' as const,
      content: `## Worked Example

Before 1869, traveling from New York to California took months by wagon, or weeks by ship around the tip of South America. The completion of the first transcontinental railroad that year changed everything. A passenger could now cross the country in about a week. Goods moved just as quickly, and new towns sprang up along the tracks where none had existed before.

**What is the main idea of the passage?**

| Choice | Type | Reasoning |
|:---|:---|:---|
| The transcontinental railroad made crossing the country far faster | **Just right** | Every sentence is about that change |
| New towns sprang up along the railroad tracks | **Too narrow** | True, but it is only the last sentence |
| Transportation has changed throughout human history | **Too broad** | The passage covers one railroad, not all of history |
| Sailing to California was faster than taking the train | **Distorted** | The passage says the opposite |

Notice that the too-narrow choice uses words straight from the passage ("sprang up along the tracks"). Familiar wording is not proof of a right answer.

### A Quick Way to Check Size

Try putting "This passage is about how…" in front of a choice.

- "This passage is about how new towns sprang up along the tracks." **Too small**: what about travel time?
- "This passage is about how transportation has changed throughout history." **Too big**: where are the ancient roads and airplanes?
- "This passage is about how the railroad made crossing the country far faster." **Just right.**`
    },
    {
      id: 'pcmi-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Size the choices.** 🔽

Regular strength training benefits people of every age. Teenagers who lift weights under proper supervision build stronger bones. Adults who train two or three times a week find everyday tasks, like carrying groceries or moving furniture, easier. Older adults who strength train are less likely to fall, because stronger leg muscles improve balance.`,
      exercise: {
        dropdowns: [
          {
            label: '"Strength training helps older adults keep their balance." This choice is:',
            options: ['too narrow', 'too broad', 'distorted', 'just right'],
            correctAnswer: 0
          },
          {
            label: '"Exercise of every kind is good for the human body." This choice is:',
            options: ['distorted', 'just right', 'too narrow', 'too broad'],
            correctAnswer: 3
          },
          {
            label: '"Strength training has benefits for people of all ages." This choice is:',
            options: ['just right', 'too narrow', 'too broad', 'distorted'],
            correctAnswer: 0
          },
          {
            label: '"Strength training is safe only for adults, not for teenagers." This choice is:',
            options: ['too broad', 'distorted', 'just right', 'too narrow'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['too narrow', 'too broad', 'just right', 'distorted'],
        hint1: 'The balance benefit is mentioned in only one sentence.',
        hint2: 'The passage is about strength training, not every kind of exercise.',
        hint3: 'The passage says teenagers benefit "under proper supervision."',
        explanation: 'The balance choice is true but covers only the last sentence (too narrow). "Exercise of every kind" goes beyond a passage about strength training (too broad). "Benefits for people of all ages" restates the first sentence, which every other sentence supports (just right). The claim that teenagers should not strength train reverses what the passage says (distorted).'
      }
    },
    {
      id: 'pcmi-p3-mc1',
      type: 'multiple-choice' as const,
      content: `**Pick the right size.** 🎯

Smartphone apps have made hiking safer in many ways. They can show a hiker's exact location, record the route already traveled and even send an emergency signal. Experienced park rangers warn, however, that a phone is not a replacement for a paper map and a compass. Batteries drain quickly in cold weather, and many backcountry trails have no cell signal at all.`,
      exercise: {
        questions: [
          {
            question: 'Which statement best expresses the main idea of the passage?',
            options: [
              'Technology has changed nearly every kind of outdoor activity, from fishing to camping',
              'Park rangers tell hikers to leave their phones at home',
              'Phone batteries drain quickly when the weather turns cold',
              'Phone apps help hikers but should not replace a map and compass'
            ],
            correctAnswer: 3,
            explanation: 'The passage gives both sides: apps make hiking safer, but rangers warn they cannot replace a map and compass. The battery choice is one supporting detail (too narrow), "nearly every kind of outdoor activity" goes beyond hiking (too broad), and the rangers never say to leave phones at home (distorted).'
          }
        ]
      }
    },
    {
      id: 'pcmi-p3-mc2',
      type: 'multiple-choice' as const,
      content: `**Pick the right size.** 🎯

During World War II, the Marine Corps recruited Navajo men to send radio messages in a code based on their own language. The code used Navajo words for military terms; the word for "turtle," for example, stood for a tank. Because almost no one outside the Navajo Nation spoke the language, enemy forces were never able to break the code. The Code Talkers served in every major Marine operation in the Pacific, and their speed and accuracy saved countless lives.`,
      exercise: {
        questions: [
          {
            question: 'The main idea of the passage is that',
            options: [
              'secret codes have been used by armies in many different wars',
              'Navajo Code Talkers gave the Marines a code the enemy never broke',
              'many enemy soldiers learned Navajo in an attempt to break the code',
              'the Navajo word for "turtle" was used in the code to mean a tank'
            ],
            correctAnswer: 1,
            explanation: 'Every sentence develops one point: the Navajo code was unbreakable and helped the Marines. The turtle example is a single detail, codes "in many different wars" are far beyond this passage, and the passage says almost no one outside the Navajo Nation spoke the language, the opposite of enemy soldiers learning it.'
          }
        ]
      }
    },
    {
      id: 'pcmi-p3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Main idea choices come in four sizes: **just right, too narrow, too broad, distorted**
- **Too narrow** = one true detail; it is the most common trap because it repeats passage wording
- **Too broad** = a claim bigger than the passage; **distorted** = twisted, reversed or added
- Check every choice: **true according to the passage?** and **covers the whole passage?**
- Try "This passage is about how…" in front of each choice

> **Up Next:** Part 4 — the author's purpose: why was this passage written?`
    }
  ]
};
