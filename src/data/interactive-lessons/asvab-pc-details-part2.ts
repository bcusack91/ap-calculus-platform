export const asvabPcDetailsPart2Data = {
  topicSlug: 'asvab-pc-details',
  sections: [
    {
      id: 'pcdt-p2-intro',
      type: 'text' as const,
      content: `# 📄 Stated Details and Sequence

**Part 2 of 7 — Locating Stated Facts**

### Anchors: The Words That Are Easy to Find

When a question asks about a specific fact, do not reread the whole passage from the top. Look for an **anchor**: a word that stands out on the page and that the question also mentions.

| Anchor type | Examples | Why it is easy to spot |
|:---|:---|:---|
| **Numbers** | 14 hours, 0730, 50 miles, 1914 | digits jump off the page |
| **Names and places** | Building 214, Gatun Lake, Sergeant Cole | capital letters |
| **Dates and days** | March 8, Saturday, the winter of 1777 | capital letters and numbers |
| **Unusual words** | solvent, lock, ballast | they appear only once |
| **Signal words** | first, after, because, except | they mark order, reasons and exceptions |

### The Question May Use a Different Word

The question will not always use the passage's exact word. If the question asks about "earplugs" and the passage says "hearing protection," that is your anchor. Think about what the question means, not only what it says.

> **Key Fact:** Once you find the anchor, read the **whole sentence** it sits in, and usually the sentence before and after. Many wrong answers come from reading half a sentence.`
    },
    {
      id: 'pcdt-p2-example',
      type: 'text' as const,
      content: `## Worked Example

Annual hearing tests for all flight-line personnel will be held in Building 214 from March 3 to March 14. Appointments run from 0730 to 1530, Monday through Friday. Personnel who work night shifts may instead schedule a test on Saturday, March 8, by calling the clinic at extension 4410. Avoid loud noise, including music through earbuds, for 14 hours before the test.

### Question 1: Where are the tests held?

- **Anchor:** a place name: Building 214.
- **Answer:** Building 214.

### Question 2: A night-shift worker wants a Saturday test. What must she do?

- **Anchors:** "night shift" and "Saturday."
- **The sentence:** "Personnel who work night shifts may instead schedule a test on Saturday, March 8, by calling the clinic at extension 4410."
- **Answer:** call the clinic at extension 4410.

### Question 3: How long before the test should personnel avoid loud noise?

- **Anchor:** the number near "noise": 14 hours.
- **Trap check:** 0730, 1530, 214 and 4410 are all numbers too. Make sure the number you choose belongs to the right part of the sentence.
- **Answer:** 14 hours.

### The "Number Swap" Trap

When a passage contains several numbers, wrong choices often use a real number from the passage attached to the wrong thing. Always check **what** each number describes.`
    },
    {
      id: 'pcdt-p2-mc1',
      type: 'multiple-choice' as const,
      content: `**Find the fact.** 🎯

A French company began digging a canal across Panama in 1881, but disease and engineering problems ended the effort within a decade. The United States took over the project in 1904. American engineers decided to build locks that would raise ships 85 feet to an artificial lake and then lower them back to sea level on the other side. When the canal opened in 1914, ships traveling between New York and San Francisco no longer had to sail around South America. The finished canal is about 50 miles long.`,
      exercise: {
        questions: [
          {
            question: 'According to the passage, the canal\'s locks raise ships',
            options: ['50 miles to a river', '1,914 feet to a dam', '50 feet to the ocean', '85 feet to a lake'],
            correctAnswer: 3,
            explanation: 'The fourth sentence says the locks "raise ships 85 feet to an artificial lake." The 50 is the canal\'s length in miles, and 1914 is a year, not a height.'
          },
          {
            question: 'The passage states that the French effort ended because of',
            options: [
              'the high cost of building the locks',
              'a war between France and the United States',
              'disease and engineering problems',
              'a lack of ships willing to use the canal'
            ],
            correctAnswer: 2,
            explanation: 'The first sentence says "disease and engineering problems ended the effort." No war is mentioned, ships are not discussed for the French period, and the locks were an American design.'
          }
        ]
      }
    },
    {
      id: 'pcdt-p2-input',
      type: 'input-boxes' as const,
      content: `**Use the anchors.** ✍️ Use the Panama Canal passage above. Type numbers only.

**1)** In what year did the United States take over the canal project?

**2)** About how many miles long is the finished canal?

**3)** In what year did the canal open?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['1904', '50', '1914'],
        hint1: 'Find the sentence that begins "The United States took over…"',
        hint2: 'Look for the word "miles."',
        hint3: 'Look for the word "opened."',
        explanation: 'The United States took over in 1904. The finished canal is about 50 miles long. It opened in 1914. The passage also contains 1881 (when the French began) and 85 (feet of lift), so match each number to what it describes.'
      }
    },
    {
      id: 'pcdt-p2-mc2',
      type: 'multiple-choice' as const,
      content: `**Find the fact.** 🎯

Check the generator's oil level before every use. Change the oil after the first 20 hours of running time, and every 100 hours after that. Clean the air filter every 50 hours, or more often in dusty conditions. Replace the spark plug once a year, even if the generator has been used very little.`,
      exercise: {
        questions: [
          {
            question: 'According to the passage, after the first oil change the oil should be changed every',
            options: ['20 hours', '50 hours', '100 hours', 'year'],
            correctAnswer: 2,
            explanation: 'The second sentence says to change the oil after the first 20 hours "and every 100 hours after that." Fifty hours is the air-filter schedule, and once a year is for the spark plug.'
          },
          {
            question: 'The passage says the air filter may need cleaning more often when',
            options: [
              'conditions are dusty',
              'the spark plug is old',
              'the generator is brand new',
              'the oil level is low'
            ],
            correctAnswer: 0,
            explanation: 'The third sentence says to clean the filter every 50 hours "or more often in dusty conditions." None of the other conditions is linked to the air filter.'
          }
        ]
      }
    },
    {
      id: 'pcdt-p2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match each task to its schedule.** 🔽 Use the generator passage above.',
      exercise: {
        dropdowns: [
          {
            label: 'Check the oil level:',
            options: ['once a year', 'before every use', 'every 50 hours'],
            correctAnswer: 1
          },
          {
            label: 'Replace the spark plug:',
            options: ['once a year', 'before every use', 'every 50 hours'],
            correctAnswer: 0
          },
          {
            label: 'Clean the air filter (normal conditions):',
            options: ['before every use', 'every 50 hours', 'once a year'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['before every use', 'once a year', 'every 50 hours'],
        hint1: 'The first sentence covers the oil level.',
        hint2: 'The last sentence covers the spark plug.',
        hint3: 'The third sentence covers the air filter.',
        explanation: 'Oil level: checked before every use. Spark plug: replaced once a year, even with little use. Air filter: cleaned every 50 hours in normal conditions, more often when dusty.'
      }
    },
    {
      id: 'pcdt-p2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Use **anchors** to find facts fast: numbers, names, dates, unusual words, signal words
- The question may use a **different word** for the same thing
- Read the **whole sentence** around the anchor, and the sentences beside it
- Beware the **number swap**: a real number from the passage attached to the wrong thing

> **Up Next:** Part 3 — reworded facts, where the right answer says the same thing in different words.`
    }
  ]
};
