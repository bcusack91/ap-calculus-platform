export const asvabWkVocabularyInContextPart1Data = {
  topicSlug: 'asvab-wk-vocabulary-in-context',
  sections: [
    {
      id: 'wkvc-p1-intro',
      type: 'text' as const,
      content: `# 🔤 Vocabulary in Context

**Part 1 of 7 — Word Knowledge on the CAT-ASVAB**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Word Knowledge on the CAT-ASVAB** |
| 2 | Definition and restatement clues |
| 3 | Contrast clues |
| 4 | Example and cause-and-effect clues |
| 5 | Words with more than one meaning |
| 6 | Test strategy and common traps |
| 7 | Mixed mastery set |

### What the Word Knowledge Subtest Looks Like

Word Knowledge (WK) is the third subtest on the computer version of the ASVAB (the CAT-ASVAB), right after General Science and Arithmetic Reasoning.

| Fact | CAT-ASVAB |
|:---|:---|
| Scored questions | 15 |
| Time limit | 9 minutes |
| Time per question | about 36 seconds |
| Answer choices | 4 |

On the paper test (and the high-school CEP paper test), WK has 35 questions in 11 minutes, which is about 19 seconds each. Either way, WK is the fastest-moving subtest on the whole exam. You either know the word, can work it out quickly, or make a smart guess and move on.

### The Two Question Types

| Type | What you see | What you do |
|:---|:---|:---|
| **Word in a sentence** | A short sentence with one word in bold | Pick the choice closest in meaning to the bold word **as it is used in that sentence** |
| **Word alone** | "**Brisk** most nearly means" | Pick the closest synonym with no sentence to help you |

This lesson is about the first type: using the sentence to pin down a word. The skills carry straight over to the second type, because a word you have met in a few sentences is a word you can define alone.`
    },
    {
      id: 'wkvc-p1-example',
      type: 'text' as const,
      content: `## One Word, Both Formats

**Word in a sentence.** The recruits set off at a **brisk** pace to beat the storm back to the barracks.

**Brisk** most nearly means: quick · careless · silent · gloomy

Think it through: they are trying to **beat the storm**, so they are hurrying. "Quick" fits. "Careless," "silent" and "gloomy" could describe a walk, but nothing in the sentence points to them.

**Word alone.** **Brisk** most nearly means: quick · careless · silent · gloomy

Same answer, but now there is no storm to help. You have to know the word, or recall where you have heard it: a brisk walk, brisk business at a store, a brisk morning breeze. All of them share the idea of **lively and fast**.

> **Key Fact:** On the real test, the sentence usually does **not** define the word for you. It gives you the **part of speech** (is it describing a thing, an action, a person?) and a **direction** (good or bad, more or less, fast or slow). Put that together with what you already know, and most choices fall away.

### Why Word Knowledge Matters So Much

Your AFQT score, the number that decides whether you can enlist, comes from four subtests:

$$\\text{AFQT sum} = \\text{AR} + \\text{MK} + 2 \\times \\text{VE}$$

**VE** (Verbal Expression) is a weighted blend of Word Knowledge and Paragraph Comprehension, with WK counting more. Because VE is counted **twice**, verbal skill makes up **half** of the AFQT sum, and WK is the bigger share of that half.

VE also shows up in job line scores. A few examples:

| Service | Line score | Built from |
|:---|:---|:---|
| Army | GT (General Technical) | AR + VE |
| Air Force | G (General) | AR + VE |
| Air Force | A (Administrative) | MK + VE |
| Marine Corps | GT | AR + MC + VE |
| Navy | ADM (Administrative) | MK + VE |

Every word you add to your vocabulary pays off in more than one score.

### The Test Adapts to You

The CAT-ASVAB starts with a question of average difficulty. Answer correctly and the next one is usually harder; miss one and the next is usually easier. You cannot go back to a question once you answer it. So if the words start to feel hard, that is usually a **good** sign: the test thinks you are doing well.`
    },
    {
      id: 'wkvc-p1-toolkit',
      type: 'text' as const,
      content: `## Your Context-Clue Toolkit

This lesson builds one tool per part. Here is the whole kit:

| Clue type | What the sentence does | Signal words to watch for |
|:---|:---|:---|
| **Definition / restatement** | Explains the word right next to it | or, that is, in other words, which means, dashes, commas |
| **Contrast** | Sets the word against its opposite | but, however, although, unlike, instead, yet |
| **Example** | Lists cases of the word | such as, for example, including, like |
| **Cause and effect** | Shows what the word causes or what caused it | because, so, as a result, therefore, since |
| **More than one meaning** | Decides which sense of a familiar word is meant | the rest of the sentence |

> **Key Fact:** Even when there is no signal word, the **general sense** of the sentence still tells you a lot. Ask: what kind of word would make sense here?

Try three warm-up questions. Two are in sentences, one is a word alone.`
    },
    {
      id: 'wkvc-p1-warmup',
      type: 'multiple-choice' as const,
      content: '**Warm-up.** 🎯 Pick the choice closest in meaning to the bold word.',
      exercise: {
        questions: [
          {
            question: `The motor pool ordered **durable** seat covers that could survive years of muddy boots and heavy gear.\n\n**Durable** most nearly means`,
            options: ['sturdy', 'costly', 'stylish', 'padded'],
            correctAnswer: 0,
            explanation: 'The covers must "survive years" of hard use, so they have to be tough. Durable means sturdy and long-lasting. Costly, stylish and padded could describe seat covers, but nothing in the sentence is about price, looks or comfort.'
          },
          {
            question: `After the long night shift, Diaz felt **sluggish** and needed two cups of coffee before he could think clearly.\n\n**Sluggish** most nearly means`,
            options: ['hungry', 'nervous', 'angry', 'slow'],
            correctAnswer: 3,
            explanation: 'He needs coffee "before he could think clearly," so he is moving and thinking slowly. Sluggish means slow and low on energy. Angry, hungry and nervous are feelings the sentence never mentions.'
          },
          {
            question: '**Ample** most nearly means',
            options: ['simple', 'narrow', 'plentiful', 'empty'],
            correctAnswer: 2,
            explanation: 'Ample means plentiful, more than enough: ample time, ample room, ample supplies. Narrow and empty point the opposite way, and simple is unrelated.'
          }
        ]
      }
    },
    {
      id: 'wkvc-p1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- WK on the CAT-ASVAB: **15 questions in 9 minutes**, about **36 seconds** each, 4 choices
- Two formats: a **word in a sentence** and a **word alone**; the sentence skills build the vocabulary you need for both
- VE (a blend of WK and PC, WK counting more) is counted **twice** in the AFQT, so verbal is half your AFQT sum, and VE feeds many line scores
- The sentence gives you **part of speech** and **direction**; you supply the rest
- The test adapts: harder words usually mean you are doing well

> **Up Next:** Part 2 — definition and restatement clues, the sentences that quietly explain their own hard word.`
    }
  ]
};
