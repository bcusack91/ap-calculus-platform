export const asvabWkVocabularyInContextPart3Data = {
  topicSlug: 'asvab-wk-vocabulary-in-context',
  sections: [
    {
      id: 'wkvc-p3-intro',
      type: 'text' as const,
      content: `# 🔤 Vocabulary in Context

**Part 3 of 7 — Contrast Clues**

### When the Sentence Tells You What the Word Is NOT

A **contrast clue** sets the bold word against something that means the opposite. If you understand the other side of the contrast, you can flip it to find the word.

| Signal words | Example |
|:---|:---|
| **but, yet** | The first hill was gentle, **but** the second was steep. |
| **however** | The ship was old; **however**, its engines were reliable. |
| **although, though, even though** | **Although** the food was plain, it was filling. |
| **unlike, instead of, rather than** | **Unlike** his chatty brother, Sam is quiet. |
| **while, whereas** | One squad was early, **while** the other was late. |
| **despite, in spite of** | **Despite** the rain, the parade went on. |

> **Key Fact:** A contrast clue gives you the **opposite**. Find the plain word on the other side of the signal, then pick the choice that means the reverse of it.`
    },
    {
      id: 'wkvc-p3-examples',
      type: 'text' as const,
      content: `## Worked Examples

### Example 1: "unlike"

**Unlike** her strict predecessor, the new range officer was **lenient** about small mistakes.

- **Signal:** unlike.
- **Other side of the contrast:** strict.
- **Flip it:** the opposite of strict is easygoing, forgiving.
- **So:** lenient means **not strict**, tolerant, forgiving.

### Example 2: "but"

Fresh water was plentiful in the spring, **but** by late August it had become **scarce**.

- **Signal:** but.
- **Other side:** plentiful.
- **Flip it:** the opposite of plentiful is rare, in short supply.
- **So:** scarce means **hard to find**, lacking.

### Example 3: "although"

**Although** Okafor had volunteered for the swim test, he was **reluctant** to jump into the freezing pool.

- **Signal:** although.
- **Other side:** he volunteered (he was willing).
- **Flip it:** unwilling, hesitant.
- **So:** reluctant means **unwilling** or hesitant.

### The Trap to Avoid

A contrast sentence always contains the **opposite** of the answer. That opposite word, or a synonym of it, is very often one of the choices. In Example 2, a choice like "abundant" would be the trap: it means plentiful, the side the word is being contrasted **against**.

### A Three-Step Routine

1. **Spot the signal** (but, however, although, unlike, instead, despite, while).
2. **Name the other side** in one plain word.
3. **Flip it**, and choose the answer that means that flipped word.`
    },
    {
      id: 'wkvc-p3-mc',
      type: 'multiple-choice' as const,
      content: '**Flip the contrast.** 🎯 Pick the choice closest in meaning to the bold word.',
      exercise: {
        questions: [
          {
            question: `Most of the new airmen chatted and joked during chow, but Price remained **aloof**, eating alone at the end of the table.\n\n**Aloof** most nearly means`,
            options: ['awkward', 'distant', 'cheerful', 'hungry'],
            correctAnswer: 1,
            explanation: 'The contrast is with chatting and joking, and "eating alone" confirms it: aloof means distant, keeping apart from others. Cheerful describes the other side of the contrast. Awkward is tempting, but the sentence shows him choosing to stay apart, not acting clumsy.'
          },
          {
            question: `The crew believed their repairs would save the old radio; however, every attempt proved **futile**.\n\n**Futile** most nearly means`,
            options: ['clever', 'quick', 'costly', 'useless'],
            correctAnswer: 3,
            explanation: '"However" contrasts the crew\'s hope that the repairs would save the radio with what happened. Every attempt failed, so futile means useless, producing no result. Costly and quick describe the attempts in ways the sentence never mentions.'
          },
          {
            question: `Unlike the stable compounds stored in the main warehouse, the chemicals in Building 7 are **volatile** and must be kept cool.\n\n**Volatile** most nearly means`,
            options: ['harmless', 'unstable', 'liquid', 'valuable'],
            correctAnswer: 1,
            explanation: '"Unlike the stable compounds" sets up the contrast: volatile means unstable, likely to change suddenly or explode. Harmless points the opposite direction. Liquid may be true of some chemicals, but it is not the opposite of stable.'
          },
          {
            question: `Rather than spend his entire bonus on a new truck, Mendez made the **prudent** choice to save most of it.\n\n**Prudent** most nearly means`,
            options: ['secret', 'wise', 'bold', 'selfish'],
            correctAnswer: 1,
            explanation: 'Spending the whole bonus is contrasted with saving most of it, the careful choice. Prudent means wise and careful, especially about the future. Bold describes the spending side of the contrast more than the saving side.'
          }
        ]
      }
    },
    {
      id: 'wkvc-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Name the other side, then the word.** 🔽

**Sentence A.** The old generator ran smoothly for years, but lately its output has been **erratic**, surging and dropping without warning.

**Sentence B.** While the first river crossing was rough and choppy, the second was **placid**.`,
      exercise: {
        dropdowns: [
          {
            label: 'In Sentence A, the bold word is contrasted with:',
            options: ['its output', 'ran smoothly', 'for years', 'without warning'],
            correctAnswer: 1
          },
          {
            label: 'In Sentence A, **erratic** most nearly means:',
            options: ['unpredictable', 'powerful', 'outdated', 'steady'],
            correctAnswer: 0
          },
          {
            label: 'In Sentence B, **placid** most nearly means:',
            options: ['shallow', 'calm', 'narrow', 'rough'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['ran smoothly', 'unpredictable', 'calm'],
        hint1: '"But" splits Sentence A into two sides. What was true before?',
        hint2: 'Surging and dropping without warning is the opposite of smooth.',
        hint3: '"While" contrasts placid with "rough and choppy."',
        explanation: 'In Sentence A, "but" contrasts erratic with "ran smoothly," and "surging and dropping without warning" confirms it: erratic means unpredictable or irregular. Steady is the other side of the contrast, the trap. In Sentence B, "while" sets placid against "rough and choppy," so placid means calm. Rough is the trap, and shallow and narrow describe a river but are not the opposite of choppy.'
      }
    },
    {
      id: 'wkvc-p3-input',
      type: 'input-boxes' as const,
      content: `**Spot the signal.** ✍️ Type each contrast signal word exactly as it appears.

(1) Although the instructions looked clear, they were **ambiguous** about which valve to close first.

(2) The deer seemed calm at first; nevertheless, it stayed **wary** and kept its ears turned toward the trucks.

**1)** The contrast signal word in sentence 1:

**2)** The contrast signal word in sentence 2:`,
      exercise: {
        boxes: 2,
        correctAnswers: ['although', 'nevertheless'],
        hint1: 'Sentence 1 begins with the signal.',
        hint2: 'In sentence 2 the signal comes right after the semicolon.',
        hint3: 'Both words mean roughly "in spite of that."',
        explanation: 'Sentence 1: "although" contrasts "looked clear" with ambiguous, so ambiguous means unclear, open to more than one meaning. Sentence 2: "nevertheless" contrasts "seemed calm" with wary, so wary means watchful and cautious.'
      }
    },
    {
      id: 'wkvc-p3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- A **contrast clue** sets the bold word against its opposite
- Signals: **but, yet, however, although, unlike, instead, rather than, while, despite, nevertheless**
- Routine: **spot the signal → name the other side → flip it**
- The word on the other side of the contrast (or its synonym) is a **planted wrong answer**: do not pick it

> **Up Next:** Part 4 — example clues and cause-and-effect clues.`
    }
  ]
};
