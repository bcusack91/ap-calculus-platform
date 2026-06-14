import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'place-value-large-numbers',
    sections: [
      {
        id: 'p1-what-is-place-value',
        type: 'text',
        content: `## What Is Place Value? 🔢

Every digit in a number has a special job. The job a digit does depends on **where** it sits. This idea is called **place value**.

Look at the digit **5** in two different numbers:

- In $50$, the 5 means **5 tens**, which is $50$.
- In $500$, the 5 means **5 hundreds**, which is $500$.

The digit is the same, but its **position** changes its value! As you move **left**, each place is **10 times bigger** than the place to its right.

The places, from right to left, are:

- **ones**, **tens**, **hundreds**
- **thousands**, **ten thousands**, **hundred thousands**
- **millions**`,
      },
      {
        id: 'p1-place-value-chart',
        type: 'text',
        content: `## Reading a Big Number 📊

Let's break apart the number $3{,}456{,}789$ using a place value chart.

| Millions | Hundred Thousands | Ten Thousands | Thousands | Hundreds | Tens | Ones |
|----------|-------------------|---------------|-----------|----------|------|------|
| 3 | 4 | 5 | 6 | 7 | 8 | 9 |

We use **commas** to split big numbers into groups of three. Reading from left to right:

- **3** is in the millions place → **3 million**
- **456** are the next three digits → **456 thousand**
- **789** are the last three digits → **789**

So $3{,}456{,}789$ is read as **"three million, four hundred fifty-six thousand, seven hundred eighty-nine."** Notice how each comma helps you say the group name (million, thousand) out loud.`,
      },
      {
        id: 'p1-three-forms',
        type: 'text',
        content: `## Three Ways to Write a Number ✍️

The same number can be written three different ways. They all mean exactly the same thing!

**1. Standard Form** — the regular way we write numbers:
$$3{,}456{,}789$$

**2. Word Form** — the number written in words:
**three million, four hundred fifty-six thousand, seven hundred eighty-nine**

**3. Expanded Form** — showing the value of each digit added together:
$$3{,}000{,}000 + 400{,}000 + 50{,}000 + 6{,}000 + 700 + 80 + 9$$

In expanded form, each digit keeps its place value. The **4** is really $400{,}000$ because it sits in the hundred thousands place, not just a plain "4."`,
      },
      {
        id: 'p1-concept-check',
        type: 'multiple-choice',
        content: `## Quick Concept Check ✅

You just learned how place value gives each digit its value. Let's make sure it stuck!`,
        exercise: {
          questions: [
            {
              question:
                'In the number $4{,}820{,}000$, what is the value of the digit $8$?',
              options: ['$8$', '$8{,}000$', '$80{,}000$', '$800{,}000$'],
              correctAnswer: 3,
              explanation:
                'The 8 sits in the hundred thousands place, so its value is $800{,}000$, not just $8$.',
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 2 — Worked Examples
  // ============================================================
  {
    topicSlug: 'place-value-large-numbers',
    sections: [
      {
        id: 'p2-worked-expanded',
        type: 'text',
        content: `## Worked Example: Standard Form → Expanded Form 🛠️

Let's write $2{,}075{,}300$ in expanded form, one place at a time.

**Step 1 — Make a place value chart.**

| Millions | Hundred Thousands | Ten Thousands | Thousands | Hundreds | Tens | Ones |
|----------|-------------------|---------------|-----------|----------|------|------|
| 2 | 0 | 7 | 5 | 3 | 0 | 0 |

**Step 2 — Find the value of each non-zero digit.**

- **2** is in the millions place → $2{,}000{,}000$
- **0** ten thousands → adds nothing, so we skip it
- **7** is in the ten thousands place → $70{,}000$
- **5** is in the thousands place → $5{,}000$
- **3** is in the hundreds place → $300$

**Step 3 — Add the values together.**
$$2{,}000{,}000 + 70{,}000 + 5{,}000 + 300$$

We leave out the zeros because they add nothing to the total.`,
      },
      {
        id: 'p2-worked-word-form',
        type: 'text',
        content: `## Worked Example: Standard Form → Word Form 🗣️

Now let's write $618{,}042$ in word form.

**Step 1 — Split at the comma into groups.**

- The first group is **618** → "six hundred eighteen"
- The comma after it means **thousand**
- The last group is **042**, which is just **42** → "forty-two"

**Step 2 — Put it together, saying the group name at each comma.**

**six hundred eighteen thousand, forty-two**

Notice we do **not** say "zero" for the 0 in the hundreds place of the last group. We just read $042$ as "forty-two." Now try filling in the boxes below!`,
      },
      {
        id: 'p2-input-boxes',
        type: 'input-boxes',
        content: `## Your Turn: Fill in the Blanks ✍️

Look at the number $5{,}340{,}000$.

1. Write the digit that is in the **millions** place.
2. Write the **value** of the digit $3$ (it is in the hundred thousands place). Type it as a plain number with no commas, like $300000$.
3. In the number $720{,}000$, write the digit in the **ten thousands** place.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '300000', '2'],
          hint1:
            'The millions place is the first digit, all the way on the left of $5{,}340{,}000$.',
          hint2:
            'A digit in the hundred thousands place is worth that digit followed by five zeros, like $3 \\to 300000$.',
          explanation:
            'In $5{,}340{,}000$ the 5 is in the millions place, and the 3 in the hundred thousands place is worth $300{,}000$. In $720{,}000$, reading the places gives 7 hundred thousands, 2 ten thousands, and 0 thousands, so the ten thousands digit is 2.',
        },
      },
    ],
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'place-value-large-numbers',
    sections: [
      {
        id: 'p3-multiple-choice',
        type: 'multiple-choice',
        content: `## Guided Practice: Choose the Best Answer 🧠

Read each question carefully and pick the correct choice.`,
        exercise: {
          questions: [
            {
              question:
                'Which number is shown by the expanded form $600{,}000 + 40{,}000 + 9$?',
              options: ['$640{,}009$', '$640{,}900$', '$604{,}009$', '$60{,}409$'],
              correctAnswer: 0,
              explanation:
                'Adding $600{,}000 + 40{,}000 + 9$ gives $640{,}009$. There are no thousands, hundreds, or tens, so those places are filled with zeros.',
            },
            {
              question:
                'When you compare $5{,}234{,}567$ and $5{,}198{,}432$, which is greater?',
              options: [
                '$5{,}198{,}432$ is greater',
                '$5{,}234{,}567$ is greater',
                'They are equal',
                'You cannot tell',
              ],
              correctAnswer: 1,
              explanation:
                'Both have 5 in the millions place, so compare the next place: $2$ hundred thousands is greater than $1$ hundred thousand. So $5{,}234{,}567 > 5{,}198{,}432$.',
            },
          ],
        },
      },
      {
        id: 'p3-dropdown',
        type: 'dropdown-select',
        content: `## Guided Practice: Name the Place 🔽

For each number, choose the correct place that the **bold** digit sits in.`,
        exercise: {
          dropdowns: [
            {
              label: 'In $1{,}**7**00{,}000$, the digit 7 is in the',
              options: [
                'ten thousands place',
                'hundred thousands place',
                'millions place',
              ],
            },
            {
              label: 'In $**8**{,}050{,}000$, the digit 8 is in the',
              options: [
                'hundred thousands place',
                'millions place',
                'thousands place',
              ],
            },
          ],
          correctAnswers: ['hundred thousands place', 'millions place'],
          hint1:
            'Read the place names from the right: ones, tens, hundreds, thousands, ten thousands, hundred thousands, millions.',
          explanation:
            'In $1{,}700{,}000$ the 7 is the first digit after the comma, which is the hundred thousands place. In $8{,}050{,}000$ the 8 is the first digit, which is the millions place.',
        },
      },
    ],
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'place-value-large-numbers',
    sections: [
      {
        id: 'p4-real-world-context',
        type: 'text',
        content: `## Big Numbers in Real Life 🌎

Large numbers are everywhere once you start looking!

- A big sports stadium might hold about $80{,}000$ fans.
- A medium-sized city might have a population of $1{,}250{,}000$ people.
- A popular video might get $3{,}600{,}000$ views.

When you read these numbers, the commas do the hard work for you. The comma group on the far left tells you how many **millions**, the next group tells you how many **thousands**, and the last group is the leftover **hundreds, tens, and ones**.

| Number | Read As |
|--------|---------|
| $80{,}000$ | eighty thousand |
| $1{,}250{,}000$ | one million, two hundred fifty thousand |
| $3{,}600{,}000$ | three million, six hundred thousand |

Let's use a real-world number in the problem below.`,
      },
      {
        id: 'p4-input-boxes',
        type: 'input-boxes',
        content: `## Word Problem: City Population 🏙️

A city's population is **two million, four hundred eight thousand, sixty** people.

1. Write this number in **standard form** with commas, like $2{,}408{,}060$.
2. What digit is in the **millions** place of this number?
3. What is the **value** of the digit $4$ in this number? Type it as a plain number with no commas, like $400000$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2,408,060', '2', '400000'],
          hint1:
            'Two million is $2{,}000{,}000$. Then place 408 in the thousands group and 060 (just 60) in the last group.',
          hint2:
            'The 4 sits right after the millions comma, in the hundred thousands place, so its value is 4 followed by five zeros.',
          explanation:
            'The words give $2{,}408{,}060$. The 2 is in the millions place, and the 4 is in the hundred thousands place, so its value is $400{,}000$.',
        },
      },
      {
        id: 'p4-multiple-choice',
        type: 'multiple-choice',
        content: `## Apply What You Know ✅

Use comparing-by-place-value to answer this real-world question.`,
        exercise: {
          questions: [
            {
              question:
                'Video A has $1{,}480{,}000$ views and Video B has $1{,}500{,}000$ views. Which video has MORE views?',
              options: [
                'Video A',
                'Video B',
                'They are equal',
                'You cannot tell from the numbers',
              ],
              correctAnswer: 1,
              explanation:
                'Both have 1 million. Compare the next place: Video B has 5 hundred thousands while Video A has 4 hundred thousands, so Video B has more views.',
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 5 — Review & Challenge
  // ============================================================
  {
    topicSlug: 'place-value-large-numbers',
    sections: [
      {
        id: 'p5-summary',
        type: 'text',
        content: `## Review: Putting It All Together 🏁

Great work! Here is a quick summary of everything you learned about large numbers.

| Idea | What It Means | Example |
|------|---------------|---------|
| **Place value** | A digit's value depends on its position | The 6 in $6{,}000{,}000$ means six million |
| **Standard form** | The regular number with commas | $3{,}456{,}789$ |
| **Word form** | The number written in words | three million, four hundred fifty-six thousand, seven hundred eighty-nine |
| **Expanded form** | Each digit's value added up | $3{,}000{,}000 + 400{,}000 + 50{,}000 + 6{,}000 + 700 + 80 + 9$ |
| **Comparing** | Compare digits left to right | $5{,}234{,}567 > 5{,}198{,}432$ |

**Remember:** to compare two numbers, start at the **biggest place on the left** and move right until the digits are different. The first number with the bigger digit is the greater number.`,
      },
      {
        id: 'p5-challenge',
        type: 'multiple-choice',
        content: `## Challenge: Mix It All Up 🚀

These questions mix together everything from the lesson. Take your time!`,
        exercise: {
          questions: [
            {
              question:
                'Which expanded form correctly matches the standard form $407{,}050$?',
              options: [
                '$400{,}000 + 7{,}000 + 50$',
                '$400{,}000 + 70{,}000 + 5{,}000$',
                '$40{,}000 + 7{,}000 + 50$',
                '$400{,}000 + 7{,}000 + 500$',
              ],
              correctAnswer: 0,
              explanation:
                'In $407{,}050$, the 4 is hundred thousands ($400{,}000$), the 7 is thousands ($7{,}000$), and the 5 is tens ($50$). The zeros add nothing, giving $400{,}000 + 7{,}000 + 50$.',
            },
            {
              question:
                'The word form "six million, twenty thousand, five" is written in standard form as which number?',
              options: ['$6{,}020{,}005$', '$6{,}200{,}005$', '$6{,}020{,}500$', '$600{,}205$'],
              correctAnswer: 0,
              explanation:
                'Six million is $6{,}000{,}000$, twenty thousand is $20{,}000$, and five is $5$. Adding them gives $6{,}020{,}005$.',
            },
          ],
        },
      },
    ],
  },
]
