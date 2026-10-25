export const asvabPcDetailsPart3Data = {
  topicSlug: 'asvab-pc-details',
  sections: [
    {
      id: 'pcdt-p3-intro',
      type: 'text' as const,
      content: `# 📄 Stated Details and Sequence

**Part 3 of 7 — Reworded Facts**

### The Right Answer Rarely Copies the Passage

The official PC skill list includes **reworded facts**. On a detail question, the correct choice usually says what the passage says **in different words**: synonyms, a different sentence order, or a shorter summary of one sentence.

| The passage says | A reworded right answer |
|:---|:---|
| "a large, oily liver" | "an organ filled with oil" |
| "placed in the employee's file" | "added to the employee's record" |
| "calling at least one hour before the shift" | "phoning ahead an hour early" |
| "short of food, blankets and shoes" | "lacking enough supplies" |

### The Word-Match Trap

Test writers know that tired readers grab the choice that **looks** like the passage. So they build wrong choices that **copy the passage's words** but change what those words mean:

- They attach the words to the **wrong person or thing** ("a gas-filled sac" when the passage says *other fish* have one).
- They **flip** the meaning (adding or dropping a *not*).
- They mix words from **two different sentences** into a new claim the passage never made.

> **Key Fact:** Match **meaning**, not **words**. Before you choose, restate the passage sentence in your own words, then look for the choice that says the same thing.`
    },
    {
      id: 'pcdt-p3-example',
      type: 'text' as const,
      content: `## Worked Example

Unlike most fish, sharks have no swim bladder, the gas-filled sac that keeps other fish afloat. Instead, many sharks rely on a large, oily liver that makes them lighter in the water. Even so, many kinds of sharks must keep swimming or they slowly sink.

**According to the passage, many sharks stay afloat partly by means of**

| Choice | Verdict |
|:---|:---|
| a gas-filled sac | **Word-match trap**: copied words, but the passage says sharks do **not** have one |
| an organ filled with oil | **Reworded match**: "a large, oily liver" said differently |
| resting on the sea floor | **Reversed**: the passage says sharks sink if they stop swimming |
| swallowing air at the surface | **Not in the passage** |

### Restate First

Put the key sentence in plain words before you look at the choices: *"Sharks use a big oily liver to help them float."* Now the reworded choice is easy to recognize, and the copied phrase is easy to reject.`
    },
    {
      id: 'pcdt-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Reworded or word-match?** 🔽

Employees who are late more than three times in a 30-day period will meet with their supervisor. A fourth late arrival also results in a written warning placed in the employee's file. Employees may avoid a late mark by calling the front desk at least one hour before their shift begins.`,
      exercise: {
        dropdowns: [
          {
            label: '"Workers can avoid a late mark by phoning the front desk an hour or more before work." This choice is:',
            options: ['a word-match trap', 'not in the passage', 'a reworded match'],
            correctAnswer: 2
          },
          {
            label: '"Workers can avoid a late mark by calling their supervisor during the shift." This choice is:',
            options: ['not in the passage', 'a reworded match', 'a word-match trap'],
            correctAnswer: 2
          },
          {
            label: '"The company holds a picnic for all employees every summer." This choice is:',
            options: ['not in the passage', 'a reworded match', 'a word-match trap'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['a reworded match', 'a word-match trap', 'not in the passage'],
        hint1: 'The last sentence of the passage is about avoiding a late mark.',
        hint2: 'Who must be called, and when?',
        hint3: 'Does the passage ever mention a picnic or any company event?',
        explanation: 'The phoning-ahead choice restates the last sentence in different words (phoning = calling; an hour or more before work = at least one hour before the shift). The supervisor statement borrows real words ("calling," "supervisor," "shift") but changes who is called and when, a word-match trap. The passage never mentions a picnic or any company event.'
      }
    },
    {
      id: 'pcdt-p3-mc1',
      type: 'multiple-choice' as const,
      content: `**Match the meaning.** 🎯 Use the late-arrival passage above.`,
      exercise: {
        questions: [
          {
            question: 'According to the passage, what happens to an employee after a fourth late arrival in 30 days?',
            options: [
              'A written warning is added to the employee\'s record',
              'The employee is moved to a different shift',
              'The supervisor calls the employee at home',
              'The employee must work an extra shift at the front desk that week'
            ],
            correctAnswer: 0,
            explanation: 'The second sentence says a fourth late arrival "results in a written warning placed in the employee\'s file." The right choice says the same thing with "record" for "file." The front desk is where employees call to avoid a late mark, not a punishment, and shift changes and home calls are never mentioned.'
          }
        ]
      }
    },
    {
      id: 'pcdt-p3-mc2',
      type: 'multiple-choice' as const,
      content: `**Match the meaning.** 🎯

In the winter of 1777 and 1778, General George Washington's army camped at Valley Forge, Pennsylvania. Short of food, blankets and shoes, nearly 2,000 soldiers died of disease. Yet the army that marched out in June was stronger than the one that had arrived, thanks largely to Baron von Steuben, a Prussian officer who drilled the troops in European battle tactics.`,
      exercise: {
        questions: [
          {
            question: 'According to the passage, the army left Valley Forge stronger mainly because',
            options: [
              'a foreign officer trained the troops in battle methods',
              'the soldiers rested all winter without any drills',
              'thousands of new recruits joined the army in June',
              'European armies sent the soldiers new blankets and shoes'
            ],
            correctAnswer: 0,
            explanation: 'The last sentence credits Baron von Steuben, a Prussian (foreign) officer who drilled the troops in European tactics. The choice about European armies sending supplies borrows "European," "blankets" and "shoes" from the passage but builds a claim it never makes, and the troops were drilled, not resting. New recruits are not mentioned.'
          },
          {
            question: 'The passage states that the soldiers at Valley Forge were short of',
            options: [
              'food and warm gear',
              'officers to lead them',
              'horses and wagons',
              'weapons and ammunition'
            ],
            correctAnswer: 0,
            explanation: '"Short of food, blankets and shoes" is reworded as "food and warm gear." Weapons, officers and horses are never mentioned as shortages.'
          }
        ]
      }
    },
    {
      id: 'pcdt-p3-mc3',
      type: 'multiple-choice' as const,
      content: `**Match the meaning.** 🎯

Most household smoke alarms run on batteries or are wired into the home's electricity with a battery backup. Fire officials recommend pressing the test button once a month. The batteries in older alarms should be replaced at least once a year, and the entire alarm should be replaced every ten years, because the sensors wear out over time.`,
      exercise: {
        questions: [
          {
            question: 'According to the passage, why should a smoke alarm be replaced every ten years?',
            options: [
              'Its batteries can no longer be found',
              'Fire codes require newer models',
              'Its test button stops working',
              'Its parts that detect smoke wear out'
            ],
            correctAnswer: 3,
            explanation: 'The last sentence explains that "the sensors wear out over time." The right choice rewords sensors as "parts that detect smoke." The test button, battery availability and fire codes are never given as reasons.'
          }
        ]
      }
    },
    {
      id: 'pcdt-p3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Reworded facts** are an official PC skill: the right answer usually says the passage's idea in **different words**
- The **word-match trap** copies passage words but attaches them to the wrong thing, flips them, or mixes two sentences
- **Restate first**: put the key sentence in your own words, then find the choice with the same meaning
- Match **meaning**, not **words**

> **Up Next:** Part 4 — sequence: what happened first, next and last, and the steps of a procedure.`
    }
  ]
};
