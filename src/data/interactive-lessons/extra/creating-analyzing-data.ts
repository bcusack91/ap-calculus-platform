import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Creating and Analyzing Data (Grade 4 Math).
 * Registry key: 'creating-analyzing-data' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). Grade-appropriate arithmetic only.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'creating-analyzing-data',
    sections: [
      {
        id: 'cad1-intro',
        type: 'text' as const,
        content: `# 📊 Creating and Analyzing Data

**Part 1 of 5 — Collecting Data with Tally Charts**

---

### Topics in This Part

| Section |
|---------|
| What "data" means |
| Surveys and questions |
| Tally marks |
| Frequency tables |

> 🔑 **Key Concept:** **Data** is just *information we collect* — like how many students like each ice cream flavor. Before we can make a graph, we have to **gather** the data and **organize** it neatly. That's what Part 1 is all about.`,
      },
      {
        id: 'cad1-what-is-data',
        type: 'text' as const,
        content: `## What Is Data?

**Data** is a collection of facts, numbers, or answers that we gather to learn something. Imagine you want to know your class's favorite season. You could **ask everyone** — and all of those answers, together, are your data.

To collect data, we usually run a **survey**: we pick one clear question and ask many people the same thing.

| Good survey question | Why it works |
|----------------------|--------------|
| "What is your favorite pet?" | One clear question, simple answers |
| "How many books did you read this month?" | Asks for a number we can count |

> 💡 A good survey question has a **small list of possible answers** (like dog, cat, fish, bird). That makes the answers easy to organize and count.`,
      },
      {
        id: 'cad1-tally-marks',
        type: 'text' as const,
        content: `## Tally Marks

As people answer, we record each answer with a **tally mark** — a single straight line. To make tallies easy to count, we **bundle them in groups of 5**. The fifth mark goes *across* the first four:

| Tally | Number |
|-------|--------|
| | | | 3 |
| | | | | | 4 |
| 卌 (a bundle) | 5 |
| 卌 | | | 7 |
| 卌 卌 | 10 |

So a bundle of five plus two more straight lines means $5 + 2 = 7$.

> 🔑 **Key Idea:** Counting by 5s is fast. A chart with three full bundles and two extra marks is $5 + 5 + 5 + 2 = 17$ — you never have to count one line at a time.`,
      },
      {
        id: 'cad1-tally-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A tally shows two full bundles of five and then three extra single marks. What number does it stand for?',
              options: ['$10$', '$13$', '$8$', '$15$'],
              correctAnswer: 1,
              explanation: 'Two bundles are $5 + 5 = 10$, plus $3$ extra marks gives $10 + 3 = 13$.',
            },
            {
              question: 'Why do we cross out every fifth tally mark?',
              options: [
                'To make the marks look fancy',
                'So we can count quickly by groups of 5',
                'Because 5 is the only number that matters',
                'To erase a mistake',
              ],
              correctAnswer: 1,
              explanation: 'Bundling in fives lets us count by 5s (5, 10, 15, …) instead of counting every single line, which is much faster.',
            },
          ],
        },
      },
      {
        id: 'cad1-tally-count',
        type: 'input-boxes' as const,
        content: `**Count the Tallies** 🧮

Each clue describes a tally. Enter the number it stands for.

**1)** Four full bundles of five — that's $\\,?$
**2)** One bundle of five and four extra marks — that's $\\,?$
**3)** Three bundles of five and one extra mark — that's $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['20', '9', '16'],
          hint1: 'Each bundle is worth $5$. Count by fives: $5, 10, 15, 20$.',
          hint2: 'One bundle is $5$; add the $4$ extra single marks.',
          hint3: 'Three bundles are $5 + 5 + 5 = 15$, then add the $1$ extra mark.',
          explanation: '1) $4 \\times 5 = 20$.  2) $5 + 4 = 9$.  3) $15 + 1 = 16$.',
        },
      },
      {
        id: 'cad1-frequency-table',
        type: 'text' as const,
        content: `## From Tallies to a Frequency Table

Once we finish tallying, we copy the totals into a **frequency table**. *Frequency* just means **how many times** each answer happened.

**Survey:** "What is your favorite fruit?" (24 students)

| Fruit | Tally | Frequency |
|-------|-------|-----------|
| Apple | 卌 | | | 8 |
| Banana | 卌 | 6 |
| Grapes | 卌 卌 | 10 |

The frequency column turns the marks into clean numbers. Notice that the frequencies add up to the total number of students:

$$8 + 6 + 10 = 24 \\text{ students} ✓$$

> 💡 **Always check your total.** If the frequencies add up to the number of people you surveyed, you probably copied everything correctly. Now the data is ready to be turned into a graph — that's Part 2.`,
      },
      {
        id: 'cad1-frequency-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Frequency Table** 🔽

Use the favorite-fruit table above: **Apple = 8, Banana = 6, Grapes = 10.**`,
        exercise: {
          dropdowns: [
            { label: 'The fruit chosen by the MOST students:', options: ['Grapes', 'Apple', 'Banana', 'They tie'] },
            { label: 'The fruit chosen by the FEWEST students:', options: ['Banana', 'Apple', 'Grapes', 'They tie'] },
            { label: 'How many MORE chose Grapes than Banana:', options: ['$4$', '$16$', '$2$', '$10$'] },
          ],
          correctAnswers: ['Grapes', 'Banana', '$4$'],
          hint1: 'The biggest frequency is the most popular; the smallest is the least popular.',
          hint2: 'Grapes has $10$ (most) and Banana has $6$ (fewest).',
          hint3: '"How many more" means subtract: $10 - 6 = 4$.',
          explanation: 'Grapes ($10$) is the most and Banana ($6$) is the fewest. Grapes minus Banana is $10 - 6 = 4$ more students.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'creating-analyzing-data',
    sections: [
      {
        id: 'cad2-intro',
        type: 'text' as const,
        content: `# 📊 Creating and Analyzing Data

**Part 2 of 5 — Pictographs**

---

> 🔑 **The Idea:** A **pictograph** uses small pictures (icons) to show data. The trick is the **key**: each picture can stand for *more than one* — like 1 apple = 2 students. Read the key first, every single time.`,
      },
      {
        id: 'cad2-what-is-pictograph',
        type: 'text' as const,
        content: `## What Is a Pictograph?

A **pictograph** (also called a *picture graph*) shows data using repeated symbols. Each row is one category, and the number of symbols shows how big that category is.

**Pets owned by students**

| Pet | Symbols (🐾 = 4 pets) |
|-----|------------------------|
| Dogs | 🐾 🐾 🐾 |
| Cats | 🐾 🐾 |
| Fish | 🐾 🐾 🐾 🐾 |

Here the **key** says each 🐾 stands for **4 pets**. So:
- Dogs: $3 \\times 4 = 12$
- Cats: $2 \\times 4 = 8$
- Fish: $4 \\times 4 = 16$

> ⚠️ **Common mistake:** counting the *pictures* instead of using the key. There are 3 paw symbols for dogs, but that means **12 dogs**, not 3!`,
      },
      {
        id: 'cad2-half-symbols',
        type: 'text' as const,
        content: `## Half Symbols

Sometimes a category needs *half* of a symbol. A half symbol means **half of the key's value**.

If the key is 🍎 = 10 apples, then **half** an apple picture means $10 \\div 2 = 5$ apples.

**Example:** A row shows 🍎 🍎 and a half 🍎 (with key 🍎 = 10):

$$10 + 10 + 5 = 25 \\text{ apples}$$

> 💡 To find what half a symbol is worth, just split the key value in two. Key of $10 \\to 5$. Key of $6 \\to 3$. Key of $8 \\to 4$.`,
      },
      {
        id: 'cad2-read-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'On a pictograph, the key says ⭐ = 5 votes. A row has 4 full stars. How many votes is that?',
              options: ['$4$', '$9$', '$20$', '$5$'],
              correctAnswer: 2,
              explanation: 'Each star stands for $5$ votes, so $4$ stars mean $4 \\times 5 = 20$ votes. We multiply the number of symbols by the key.',
            },
            {
              question: 'The key is 🚗 = 6 cars. A row shows 2 full cars and one half car. How many cars is that?',
              options: ['$15$', '$12$', '$18$', '$13$'],
              correctAnswer: 0,
              explanation: 'Two full symbols are $2 \\times 6 = 12$. Half a symbol is $6 \\div 2 = 3$. Together $12 + 3 = 15$ cars.',
            },
          ],
        },
      },
      {
        id: 'cad2-pictograph-input',
        type: 'input-boxes' as const,
        content: `**Use the Key** 🧮

The key for this pictograph is **📚 = 6 books**.

| Student | Symbols |
|---------|---------|
| Mia | 📚 📚 📚 |
| Leo | 📚 📚 📚 📚 |
| Ava | 📚 📚 (and a half 📚) |

**1)** How many books did Mia read? $\\,?$
**2)** How many books did Leo read? $\\,?$
**3)** How many books did Ava read? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['18', '24', '15'],
          hint1: 'Multiply the number of full symbols by the key value of $6$.',
          hint2: 'Leo has $4$ full symbols: $4 \\times 6$.',
          hint3: 'Ava has $2$ full symbols ($2 \\times 6 = 12$) plus a half symbol worth $6 \\div 2 = 3$ books.',
          explanation: '1) Mia: $3 \\times 6 = 18$.  2) Leo: $4 \\times 6 = 24$.  3) Ava: $2 \\times 6 = 12$, plus a half symbol worth $3$ more, so $12 + 3 = 15$ books.',
        },
      },
      {
        id: 'cad2-make-pictograph',
        type: 'dropdown-select' as const,
        content: `**Build the Row** 🔽

You are drawing a pictograph where the key is **🟦 = 10**. Choose how many full symbols you would draw for each amount.`,
        exercise: {
          dropdowns: [
            { label: 'To show 30, draw:', options: ['3 symbols', '30 symbols', '10 symbols', '13 symbols'] },
            { label: 'To show 50, draw:', options: ['50 symbols', '15 symbols', '5 symbols', '500 symbols'] },
            { label: 'To show 20, draw:', options: ['10 symbols', '2 symbols', '20 symbols', '12 symbols'] },
          ],
          correctAnswers: ['3 symbols', '5 symbols', '2 symbols'],
          hint1: 'Divide the amount by the key value of $10$ to find how many symbols.',
          hint2: '$30 \\div 10 = 3$, so draw $3$ symbols.',
          hint3: '$50 \\div 10 = 5$ and $20 \\div 10 = 2$.',
          explanation: 'Number of symbols $=$ amount $\\div$ key. $30 \\div 10 = 3$, $50 \\div 10 = 5$, $20 \\div 10 = 2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'creating-analyzing-data',
    sections: [
      {
        id: 'cad3-intro',
        type: 'text' as const,
        content: `# 📊 Creating and Analyzing Data

**Part 3 of 5 — Bar Graphs**

---

> 🔑 **The Idea:** A **bar graph** uses bars of different heights to compare amounts. The taller the bar, the bigger the number. We read the height of each bar off the **scale** on the side.`,
      },
      {
        id: 'cad3-parts',
        type: 'text' as const,
        content: `## The Parts of a Bar Graph

Every clear bar graph has the same pieces:

| Part | What it does |
|------|--------------|
| **Title** | Tells you what the whole graph is about |
| **Categories** | The labels along the bottom (the things being compared) |
| **Scale** | The evenly-spaced numbers up the side |
| **Bars** | The height of each bar shows its amount |

The **scale** counts by a fixed step — maybe by 1s, 2s, 5s, or 10s. To read a bar, follow its top straight across to the scale.

> 💡 **Read the scale first!** If the scale counts by 2s, then a bar reaching the third line is at $2, 4, 6 \\to 6$, *not* 3.`,
      },
      {
        id: 'cad3-read-bars',
        type: 'text' as const,
        content: `## Reading Bars with a Scale

**Favorite Recess Games** (scale counts by 2)

| Game | Bar reaches |
|------|-------------|
| Tag | the $8$ line |
| Soccer | the $12$ line |
| Jump rope | the $6$ line |

Because the scale goes up in 2s, the gridlines are $2, 4, 6, 8, 10, 12, \\dots$

If a bar tops out **between** two gridlines — say between $8$ and $10$ — it is at $9$, the halfway value.

> ⚠️ Don't count the bars or the gridlines as "1, 2, 3." Count them using the **scale step**. With a step of 2, the lines read $2, 4, 6, 8, \\dots$`,
      },
      {
        id: 'cad3-bar-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A bar graph has a scale that counts by 5. A bar reaches the 4th gridline. What value is that?',
              options: ['$4$', '$9$', '$20$', '$45$'],
              correctAnswer: 2,
              explanation: 'Counting by 5s, the gridlines read $5, 10, 15, 20$. The 4th line is $20$.',
            },
            {
              question: 'In the recess-games graph above, which game was the MOST popular?',
              options: ['Tag (8)', 'Soccer (12)', 'Jump rope (6)', 'They are all equal'],
              correctAnswer: 1,
              explanation: 'Soccer has the tallest bar at $12$, which is more than Tag ($8$) and Jump rope ($6$). The tallest bar is the most popular.',
            },
          ],
        },
      },
      {
        id: 'cad3-bar-input',
        type: 'input-boxes' as const,
        content: `**Read and Compare** 🧮

Use the recess-games data: **Tag = 8, Soccer = 12, Jump rope = 6.**

**1)** How many MORE students chose Soccer than Jump rope? $\\,?$
**2)** How many students chose Tag and Jump rope together? $\\,?$
**3)** How many students were surveyed in all? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '14', '26'],
          hint1: '"How many more" means subtract: $\\text{Soccer} - \\text{Jump rope}$.',
          hint2: '"Together" means add the two amounts.',
          hint3: 'For the total, add all three bars: $8 + 12 + 6$.',
          explanation: '1) $12 - 6 = 6$ more.  2) $8 + 6 = 14$ together.  3) $8 + 12 + 6 = 26$ students in all.',
        },
      },
      {
        id: 'cad3-bar-dropdown',
        type: 'dropdown-select' as const,
        content: `**Choose the Right Scale** 🔽

You are making a bar graph. Pick the best choice for each situation.`,
        exercise: {
          dropdowns: [
            { label: 'Your biggest value is 50. A scale counting by 1 would be:', options: ['way too long (50 lines!)', 'perfect', 'too short', 'impossible'] },
            { label: 'A bar tops out exactly halfway between the 10 and 20 gridlines. Its value is:', options: ['$15$', '$30$', '$5$', '$11$'] },
            { label: 'If your data are 10, 20, 30, and 40, the best scale step is:', options: ['count by 10', 'count by 1', 'count by 100', 'count by 3'] },
          ],
          correctAnswers: ['way too long (50 lines!)', '$15$', 'count by 10'],
          hint1: 'A good scale step keeps the graph short but still readable.',
          hint2: 'Halfway between $10$ and $20$ is $15$.',
          hint3: 'When all your data are multiples of $10$, counting by $10$ lands exactly on each value.',
          explanation: 'Big values need a bigger step (counting by 1 to 50 is unreadable). Halfway between $10$ and $20$ is $15$. Data that are all multiples of $10$ fit a "count by 10" scale perfectly.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'creating-analyzing-data',
    sections: [
      {
        id: 'cad4-intro',
        type: 'text' as const,
        content: `# 📊 Creating and Analyzing Data

**Part 4 of 5 — Line Plots (Dot Plots)**

---

> 🔑 **The Idea:** A **line plot** shows how often each value happens by stacking **X's (or dots)** above a number line. It's perfect for data that are numbers, like shoe sizes or how many pencils each student has.`,
      },
      {
        id: 'cad4-what-is-line-plot',
        type: 'text' as const,
        content: `## What Is a Line Plot?

A **line plot** is a number line with an **X** placed above a value each time that value appears in the data. More X's stacked up means that value happened more often.

**Data:** number of pets each student has: $1, 2, 2, 2, 3, 3, 4$

\`\`\`
  X
  X X
X X X X
1 2 3 4
\`\`\`

Reading the stacks:
- **1 pet:** 1 X → 1 student
- **2 pets:** 3 X's → 3 students
- **3 pets:** 2 X's → 2 students
- **4 pets:** 1 X → 1 student

> 💡 The **number of X's** in a stack is the frequency for that value. The total number of X's equals the number of students surveyed: $1 + 3 + 2 + 1 = 7$.`,
      },
      {
        id: 'cad4-most-fewest',
        type: 'text' as const,
        content: `## Most, Fewest, and "How Many More"

Line plots make comparisons easy because you can *see* the tallest and shortest stacks.

Using the pets data above:
- The **most common** value (the tallest stack) is **2 pets** — 3 students.
- The values with the **fewest** students are **1 pet** and **4 pets** — 1 student each.
- **How many more** students have 2 pets than 3 pets? $3 - 2 = 1$ more.

> ⚠️ The **most common value** is the *value with the tallest stack* (2 pets), **not** the height of the stack (3). Read the number line, not just the X's.`,
      },
      {
        id: 'cad4-lineplot-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Use this line plot of **books read this week**:
- 0 books: 2 X's
- 1 book: 4 X's
- 2 books: 5 X's
- 3 books: 1 X`,
        exercise: {
          questions: [
            {
              question: 'What number of books did the most students read?',
              options: ['$0$ books', '$2$ books', '$5$ books', '$3$ books'],
              correctAnswer: 1,
              explanation: 'The tallest stack (5 X\'s) sits above the value $2$, so the most common number of books read is $2$. The 5 is the height, not the answer.',
            },
            {
              question: 'How many students read exactly 1 book?',
              options: ['$1$', '$4$', '$5$', '$2$'],
              correctAnswer: 1,
              explanation: 'The stack above the value $1$ has $4$ X\'s, so $4$ students read exactly 1 book.',
            },
          ],
        },
      },
      {
        id: 'cad4-lineplot-input',
        type: 'input-boxes' as const,
        content: `**Analyze the Line Plot** 🧮

Same data — **books read this week:** 0 books: 2 X's, 1 book: 4 X's, 2 books: 5 X's, 3 books: 1 X.

**1)** How many students read 3 or more books? $\\,?$
**2)** How many MORE students read 2 books than 0 books? $\\,?$
**3)** How many students were surveyed in all? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '3', '12'],
          hint1: 'Only the value $3$ is "3 or more," with $1$ X.',
          hint2: '"How many more" means subtract: students at $2$ minus students at $0$.',
          hint3: 'For the total, add every stack: $2 + 4 + 5 + 1$.',
          explanation: '1) Only $3$ books has stacks of "3 or more," with $1$ student.  2) $5 - 2 = 3$ more.  3) $2 + 4 + 5 + 1 = 12$ students.',
        },
      },
      {
        id: 'cad4-lineplot-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build a Line Plot** 🔽

You are plotting this data: $4, 5, 5, 5, 6, 6$. Choose what the line plot should show.`,
        exercise: {
          dropdowns: [
            { label: 'X\'s above the value 5:', options: ['$3$', '$5$', '$1$', '$2$'] },
            { label: 'The value with the tallest stack:', options: ['$5$', '$4$', '$6$', '$3$'] },
            { label: 'Total number of X\'s on the whole plot:', options: ['$6$', '$5$', '$3$', '$15$'] },
          ],
          correctAnswers: ['$3$', '$5$', '$6$'],
          hint1: 'Count how many times each number appears in the list $4, 5, 5, 5, 6, 6$.',
          hint2: 'The number $5$ appears three times, so its stack is $3$ X\'s tall — the tallest.',
          hint3: 'The total number of X\'s equals how many numbers are in the list: there are $6$.',
          explanation: 'The value $5$ appears $3$ times (tallest stack). There are $6$ numbers in the list, so $6$ X\'s in all: $1 + 3 + 2 = 6$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'creating-analyzing-data',
    sections: [
      {
        id: 'cad5-intro',
        type: 'text' as const,
        content: `# 📊 Creating and Analyzing Data

**Part 5 of 5 — Putting It All Together**

---

You can now (1) **collect** data with tallies, (2) read **pictographs** with a key, (3) read and compare **bar graphs**, and (4) read **line plots**. In this part we mix them all and finish with an Exit Quiz.`,
      },
      {
        id: 'cad5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Graph | What it uses | Key skill |
|-------|--------------|-----------|
| **Tally chart** | groups of 5 marks | count by 5s |
| **Frequency table** | numbers in a column | totals should match the survey |
| **Pictograph** | repeated pictures + a key | multiply symbols by the key |
| **Bar graph** | bars + a scale | read the bar height off the scale |
| **Line plot** | stacked X's on a number line | count X's in each stack |

> ⚠️ **Two traps to remember:** on a **pictograph**, one picture can mean more than one — use the key. On a **bar graph**, count the scale by its *step* (2s, 5s, 10s), not "1, 2, 3."`,
      },
      {
        id: 'cad5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A pictograph key says 🍪 = 4 cookies. A row shows 5 cookie symbols. How many cookies is that?',
              options: ['$5$', '$9$', '$20$', '$24$'],
              correctAnswer: 2,
              explanation: 'Multiply symbols by the key: $5 \\times 4 = 20$ cookies.',
            },
            {
              question: 'A bar graph scale counts by 10. A bar reaches the 3rd gridline. What value is it?',
              options: ['$3$', '$13$', '$30$', '$10$'],
              correctAnswer: 2,
              explanation: 'Counting by 10s, the gridlines read $10, 20, 30$. The 3rd line is $30$.',
            },
          ],
        },
      },
      {
        id: 'cad5-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Best Graph** 🔽

For each job, choose the most helpful tool.`,
        exercise: {
          dropdowns: [
            { label: 'Recording answers as people are still being surveyed:', options: ['tally chart', 'bar graph', 'pictograph', 'line plot'] },
            { label: 'Showing each student\'s shoe size on a number line:', options: ['line plot', 'pictograph', 'tally chart', 'frequency table'] },
            { label: 'A graph where one picture stands for 5 votes:', options: ['pictograph', 'bar graph', 'line plot', 'tally chart'] },
          ],
          correctAnswers: ['tally chart', 'line plot', 'pictograph'],
          hint1: 'A tally chart is fastest for recording answers one at a time.',
          hint2: 'A line plot stacks X\'s above numbers on a number line — great for things like shoe sizes.',
          hint3: 'When one picture stands for several votes, that\'s a pictograph (and you read its key).',
          explanation: 'Tally charts collect data live; line plots show number data on a number line; pictographs use a picture-to-number key.',
        },
      },
      {
        id: 'cad5-mixed-input',
        type: 'input-boxes' as const,
        content: `**Final Calculations** 🧮

A frequency table of **favorite juice** shows: Apple = 9, Orange = 7, Grape = 5.

**1)** How many students were surveyed in all? $\\,?$
**2)** How many MORE chose Apple than Grape? $\\,?$
**3)** If a pictograph used 🧃 = 2 students, how many 🧃 symbols would Orange (7 students) need? *(decimal is fine)* $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['21', '4', '3.5'],
          hint1: 'Add all three frequencies for the total.',
          hint2: '"How many more" means subtract: Apple $-$ Grape.',
          hint3: 'Symbols $=$ amount $\\div$ key $= 7 \\div 2$, which is $3$ and a half.',
          explanation: '1) $9 + 7 + 5 = 21$ students.  2) $9 - 5 = 4$ more.  3) $7 \\div 2 = 3.5$ symbols (3 full and 1 half).',
        },
      },
      {
        id: 'cad5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A tally chart shows three full bundles of five and two extra marks. What number is that?',
              options: ['$17$', '$15$', '$32$', '$7$'],
              correctAnswer: 0,
              explanation: 'Three bundles are $5 + 5 + 5 = 15$, plus $2$ extra marks gives $15 + 2 = 17$.',
            },
            {
              question: 'On a line plot, the value 6 has a stack of 4 X\'s. What does that tell you?',
              options: [
                '6 students had the value, and the X\'s are 4',
                '4 pieces of data have the value 6',
                'The value 6 happened 6 times',
                'There are 4 different values',
              ],
              correctAnswer: 1,
              explanation: 'Each X is one piece of data, so a stack of $4$ X\'s above the value $6$ means $4$ data points equal $6$.',
            },
            {
              question: 'A pictograph key says 🌟 = 3 points. A team has 6 full stars. How many points did they earn?',
              options: ['$6$', '$9$', '$18$', '$3$'],
              correctAnswer: 2,
              explanation: 'Multiply symbols by the key: $6 \\times 3 = 18$ points.',
            },
          ],
        },
      },
    ],
  },
]
