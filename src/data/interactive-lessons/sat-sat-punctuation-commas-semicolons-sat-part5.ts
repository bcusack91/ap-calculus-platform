export const satPunctuationCommasPart5Data = {
  topicSlug: 'sat-punctuation-commas-semicolons-sat',
  sections: [
    {
      id: 'sat-pc5-intro',
      type: 'text' as const,
      content: `
# ✏️ Commas, Semicolons, and Colons

**Part 5 of 7 — Unnecessary Commas & Common Traps**

Knowing when NOT to use a comma is just as important as knowing when to use one. The SAT loves to test whether you'll add commas where they don't belong.

### Rule #1: No Comma Between Subject and Verb

Never separate a subject from its verb with a single comma.

❌ *The president of the company, announced the merger.*

✅ *The president of the company announced the merger.*

**Why students get tricked:** Long subjects make the comma feel "natural" — but it's always wrong to put a single comma between a subject and its verb.
      `
    },
    {
      id: 'sat-pc5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence contains an UNNECESSARY comma?',
            options: [
              'The students who passed the exam, celebrated afterward.',
              'After the exam, the students celebrated.',
              'The students celebrated, and the teachers applauded.',
              'However, the results were delayed.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — There is no reason to separate "The students who passed the exam" (subject) from "celebrated" (verb) with a comma. "Who passed the exam" is an essential clause — no commas needed around it.'
          },
          {
            question: 'Which version is correct?',
            options: [
              'The research team from Harvard, published their findings.',
              'The research team from Harvard published their findings.',
              'The research, team from Harvard published their findings.',
              'The research team, from Harvard published their findings.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "The research team from Harvard" is the subject and "published" is the verb. No comma should separate them, no matter how long the subject is.'
          }
        ]
      }
    },
    {
      id: 'sat-pc5-detail1',
      type: 'text' as const,
      content: `
### Rule #2: No Comma Between a Verb and Its Object

❌ *She discovered, that the experiment had failed.*

✅ *She discovered that the experiment had failed.*

### Rule #3: No Comma Before or After a Preposition (When It's Part of the Sentence Flow)

❌ *The books on, the shelf are mine.*

✅ *The books on the shelf are mine.*

### Rule #4: No Comma Between Two Items Joined by a Conjunction

When you have only TWO items (not a list of three), do not use a comma:

❌ *She likes reading, and writing.*

✅ *She likes reading and writing.*

**Remember:** The FANBOYS comma rule only applies when both sides are **independent clauses**, not when you're joining two words or phrases.
      `
    },
    {
      id: 'sat-pc5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence is punctuated correctly?',
            options: [
              'The senator argued, that the bill should pass.',
              'The senator argued that, the bill should pass.',
              'The senator argued that the bill should pass.',
              'The senator, argued that the bill should pass.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — No comma between the verb "argued" and its object clause "that the bill should pass." This is a common SAT trap.'
          },
          {
            question: 'How many commas are needed in this sentence? "The talented young musician played the piano and sang beautifully."',
            options: [
              'Zero — the sentence is correct as written.',
              'One — after "musician"',
              'One — after "piano"',
              'Two — after "talented" and "piano"'
            ],
            correctAnswer: 0,
            explanation: 'Correct — There are only two compound elements ("played the piano" and "sang beautifully"), so no comma is needed before "and." No comma goes after the subject "musician" before the verb "played."'
          }
        ]
      }
    },
    {
      id: 'sat-pc5-detail2',
      type: 'text' as const,
      content: `
### Rule #5: Paired Commas Must Come in Twos

If a nonessential phrase is in the **middle** of a sentence, it needs commas on **both** sides — not just one.

❌ *Thomas Edison, the famous inventor patented the phonograph.*

✅ *Thomas Edison, the famous inventor, patented the phonograph.*

**SAT Tip:** When you see one comma around a phrase, immediately check if there should be a matching comma on the other side. If the phrase is nonessential, commas come in pairs. If it's essential, neither comma should be there.

### Quick Summary of Unnecessary Comma Traps

| Trap | Example (WRONG) |
|------|-----------------|
| Between subject & verb | *The team, won the game.* |
| Between verb & object | *She said, that it was fine.* |
| Between two compound elements | *He runs, and swims.* |
| Only one of a pair | *My dog, a poodle won the show.* |
      `
    },
    {
      id: 'sat-pc5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Error** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"The artist, painted a masterpiece."',
            options: ['Unnecessary comma between subject and verb', 'Correct as written', 'Missing second comma', 'Needs a semicolon']
          },
          {
            label: '"My cousin, a chef makes incredible pasta."',
            options: ['Unnecessary comma between subject and verb', 'Correct as written', 'Missing second comma after "chef"', 'Needs a semicolon']
          },
          {
            label: '"She enjoys hiking and, swimming."',
            options: ['Unnecessary comma in compound element', 'Correct as written', 'Missing second comma', 'Needs a colon']
          }
        ],
        correctAnswers: [
          'Unnecessary comma between subject and verb',
          'Missing second comma after "chef"',
          'Unnecessary comma in compound element'
        ],
        hint1: 'Check if the comma separates a subject from its verb.',
        hint2: 'If a nonessential phrase sits in the middle of a sentence, it needs commas on BOTH sides.',
        hint3: 'Two items joined by "and" do not need a comma between them.',
        explanation: 'Sentence 1 has a comma between "artist" (subject) and "painted" (verb) — remove it. Sentence 2 has "a chef" as a nonessential appositive but is missing the closing comma. Sentence 3 has a comma before "swimming" in a two-item compound — remove it.'
      }
    }
  ]
}
