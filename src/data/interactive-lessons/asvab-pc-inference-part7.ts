export const asvabPcInferencePart7Data = {
  topicSlug: 'asvab-pc-inference',
  sections: [
    {
      id: 'pcin-p7-intro',
      type: 'text' as const,
      content: `# 📄 Inference, Tone and Word Meaning

**Part 7 of 7 — Mixed Mastery Set**

### How to Use This Set

Ten passages, one question each, mixing conclusions, implied contrasts, assumptions, tone, technique and word meaning. Give each about **2 minutes 40 seconds**.

| Question type | Ask yourself |
|:---|:---|
| Inference / conclusion | If the passage is true, could this choice easily be false? |
| Implied contrast | What do "today," "no longer," "at first" suggest about the past? |
| Assumption | What must the author believe for the argument to work? |
| Tone / attitude | What do the word choices and details show? How strong is the feeling? |
| Technique | Statistic, story, comparison, example, question or expert? |
| Word in context | Which meaning fits this sentence? Is the everyday meaning a trap? |`
    },
    {
      id: 'pcin-p7-q1',
      type: 'multiple-choice' as const,
      content: `**Question 1.**

At 10 a.m. on a Thursday, the warehouse lights were off, the loading dock door was locked, and a handwritten sign taped to the office window read, "Counting stock this week. Back Monday."`,
      exercise: {
        questions: [
          {
            question: 'It can most reasonably be inferred that',
            options: [
              'the warehouse is not open for regular business right now',
              'the workers are on strike against the company',
              'the warehouse will be sold before Monday',
              'the warehouse has gone out of business for good'
            ],
            correctAnswer: 0,
            explanation: 'On a weekday morning the lights are off and the dock is locked, and the sign says staff are counting stock until Monday, so the warehouse is not doing regular business right now. "Back Monday" rules out closing for good, and nothing mentions a strike or a sale.'
          }
        ]
      }
    },
    {
      id: 'pcin-p7-q2',
      type: 'multiple-choice' as const,
      content: `**Question 2.**

Before refrigeration, sailors on long voyages lived mostly on salted meat and hard biscuits that could last for months. Fresh fruit and vegetables were usually eaten during the first weeks of a voyage.`,
      exercise: {
        questions: [
          {
            question: 'The passage suggests that fresh fruit and vegetables',
            options: [
              'spoiled sooner than salted meat and biscuits',
              'were the sailors\' favorite foods of all',
              'were saved and eaten during the last weeks of a voyage',
              'were not allowed on ships in the past'
            ],
            correctAnswer: 0,
            explanation: 'Salted meat and biscuits "could last for months," while fresh produce was eaten in the first weeks, which suggests it did not keep as long. Fresh food was on board, nothing ranks favorites, and it was eaten early, not saved.'
          }
        ]
      }
    },
    {
      id: 'pcin-p7-q3',
      type: 'multiple-choice' as const,
      content: `**Question 3.**

Firefighter Joan Hale answered calls for thirty years in every kind of weather. She trained hundreds of new firefighters, carried dozens of people out of burning buildings and never once asked for credit.`,
      exercise: {
        questions: [
          {
            question: 'The author\'s attitude toward Joan Hale is best described as',
            options: ['admiring', 'critical', 'doubtful', 'indifferent'],
            correctAnswer: 0,
            explanation: 'Every detail praises Hale: thirty years of service, hundreds trained, dozens rescued and modesty about it. That is admiration. Nothing criticizes or doubts her, and the warm details are not indifferent.'
          }
        ]
      }
    },
    {
      id: 'pcin-p7-q4',
      type: 'multiple-choice' as const,
      content: `**Question 4.**

The old mill on the river no longer grinds flour. Today the building houses a small museum and a café that is popular with weekend cyclists.`,
      exercise: {
        questions: [
          {
            question: 'As used in the passage, "houses" most nearly means',
            options: ['contains', 'sells', 'protects from storms', 'shelters for families'],
            correctAnswer: 0,
            explanation: 'The building "houses" a museum and a café: it contains them. "Shelters for families" plays on the noun meaning of houses, and the building does not sell or protect anything in this sentence.'
          }
        ]
      }
    },
    {
      id: 'pcin-p7-q5',
      type: 'multiple-choice' as const,
      content: `**Question 5.**

Today, anyone with a smartphone can check the weather forecast for the next ten days in a matter of seconds.`,
      exercise: {
        questions: [
          {
            question: 'The passage suggests that in the past',
            options: [
              'weather forecasts were always completely wrong',
              'no one was interested in the weather forecast',
              'forecasts covered more days than they do now',
              'getting a weather forecast took more time or effort'
            ],
            correctAnswer: 3,
            explanation: '"Today … in a matter of seconds" implies that it used to take longer or be harder. Nothing says old forecasts were always wrong or that people did not care, and forecast length is not compared.'
          }
        ]
      }
    },
    {
      id: 'pcin-p7-q6',
      type: 'multiple-choice' as const,
      content: `**Question 6.**

The company should let employees work from home two days a week. Each employee would save hours of commuting, and that time could be spent on work instead.`,
      exercise: {
        questions: [
          {
            question: 'The author\'s argument assumes that',
            options: [
              'employees would use saved commuting time for work',
              'every employee lives far from the office',
              'the company plans to close its office building',
              'employees would rather work in the office than at home on most days'
            ],
            correctAnswer: 0,
            explanation: 'The argument moves from "save hours of commuting" to "time could be spent on work." It needs employees to actually use that time for work. It does not need every employee to live far away, the office to close, or a preference for the office (which would weaken the argument).'
          }
        ]
      }
    },
    {
      id: 'pcin-p7-q7',
      type: 'multiple-choice' as const,
      content: `**Question 7.**

Health officials are urging everyone in the county to boil tap water before drinking it, starting immediately. Tests found dangerous bacteria in the main reservoir this morning, and the problem may take days to fix.`,
      exercise: {
        questions: [
          {
            question: 'The tone of the passage is best described as',
            options: ['amused', 'nostalgic', 'indifferent', 'urgent'],
            correctAnswer: 3,
            explanation: '"Urging," "immediately" and "dangerous bacteria" create a sense of urgency. There is no humor, no fond memory and no lack of concern.'
          }
        ]
      }
    },
    {
      id: 'pcin-p7-q8',
      type: 'multiple-choice' as const,
      content: `**Question 8.**

A desert and a rainforest could hardly be more different. One may get less than ten inches of rain a year; the other can get more than eighty. One has scattered, low shrubs; the other has trees so dense that little sunlight reaches the forest floor.`,
      exercise: {
        questions: [
          {
            question: 'The author develops the passage mainly by',
            options: [
              'listing the steps for surviving in a desert',
              'telling a story about a trip to a rainforest',
              'contrasting two very different environments',
              'quoting scientists who study desert plants'
            ],
            correctAnswer: 2,
            explanation: 'Each sentence sets the desert against the rainforest ("one … the other"), a contrast. There is no story, no quotation and no list of survival steps.'
          }
        ]
      }
    },
    {
      id: 'pcin-p7-q9',
      type: 'multiple-choice' as const,
      content: `**Question 9.**

The lieutenant called the bridge project a qualified success: the bridge opened on schedule, but it cost nearly twice what had been planned.`,
      exercise: {
        questions: [
          {
            question: 'As used in the passage, "qualified" most nearly means',
            options: ['complete', 'skilled', 'limited', 'licensed'],
            correctAnswer: 2,
            explanation: 'The project succeeded in one way (on schedule) but not another (cost), so it was a limited success. Skilled and licensed play on the everyday meaning (a qualified worker), and complete is the opposite of what the "but" shows.'
          }
        ]
      }
    },
    {
      id: 'pcin-p7-q10',
      type: 'multiple-choice' as const,
      content: `**Question 10.**

Tom stared at the envelope from the college for a full minute before he opened it. When he finally read the first line of the letter, he let out a whoop that brought his mother running from the kitchen.`,
      exercise: {
        questions: [
          {
            question: 'It can most reasonably be inferred that the letter',
            options: [
              'was addressed to Tom\'s mother',
              'asked Tom to pay a large bill',
              'arrived several weeks late',
              'contained good news for Tom'
            ],
            correctAnswer: 3,
            explanation: 'A "whoop" after reading the first line signals excitement, so the news was good. The letter came from a college to Tom, and nothing mentions a bill or a late delivery.'
          }
        ]
      }
    },
    {
      id: 'pcin-p7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Inference, Tone and Word Meaning

- An **inference** is a small, safe step from the text; test each choice with "could this easily be false?"
- **Implied contrasts** (today, no longer, at first) suggest the past was different; **assumptions** are the missing links in an argument
- **Tone**: read word choice and details, and match both direction and strength
- **Technique**: statistic, anecdote, comparison, example, question, expert
- **Word in context**: find the meaning this sentence uses; the everyday meaning is often the trap
- Avoid the traps: **too far, outside knowledge, extreme words, wrong tone**

> **Next steps:** take the exit quiz. That completes Paragraph Comprehension and, with Word Knowledge, the whole verbal (VE) half of your AFQT.`
    }
  ]
};
